### Marks defined as hom-set sizes make the mark map a ring homomorphism

**Remember:** Marks count maps from G/H, and maps respect sums and products.

*True by definition.* MSC 19A22 (Frobenius induction, Burnside and representation rings), 20C15. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** For a finite group G and subgroup H, the H-mark of a finite G-set X is the number of points fixed by H, which is the number of G-maps G/H → X. The Burnside ring is the ring of formal differences of finite G-sets under disjoint union and Cartesian product.

**Problem.** For each subgroup H, the H-mark gives a ring homomorphism from the Burnside ring to ℤ.

**How the definition helps.** Maps into a product are pairs of maps, and a map from the transitive set G/H into a disjoint union lands in one piece, so the count is multiplicative and additive. The one-point set has mark one, so the count extends to a unital ring map on formal differences (our own explanation).

**nLab:** [table of marks](https://ncatlab.org/nlab/show/table+of+marks). It says: “all other steps use that the mark homomorphism is a ring homomorphism, which we made manifest by expressing the marks via hom-sets”

**Sources:** none listed. No primary source with a working link was found.

### Length classifies Artinian local G₀

**Remember:** Every simple factor contributes one copy of the residue field.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13D15. arXiv math.KT. Level 3: graduate.

**Definition.** G₀(R) has one generator \[M\] for each finitely generated module up to isomorphism, and a relation \[M\] = \[N\] + \[M/N\] for every finitely generated submodule N. These relations peel a module into the classes of its composition factors.

**Problem.** Let R be a commutative Artinian local ring, one with a single maximal ideal in which descending chains of ideals stop. Length, the number of simple factors in a composition series, identifies G₀(R) with ℤ.

**How the definition helps.** Every simple module is the residue field k, so peeling off composition factors gives \[M\] = length(M)·\[k\]. Length is additive on short exact sequences, so it inverts the map sending 1 to \[k\]. With direct-sum relations only, the group is larger: over ℤ/4ℤ the classes of ℤ/2ℤ and ℤ/4ℤ stay independent (our own).

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/00JI). It says: “The map lengthᵣ : K′₀(R) → ℤ”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes multiply in K₀

**Remember:** Bounded projective complexes tensor to bounded projective complexes.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 18F25. arXiv math.KT. Level 3: graduate.

**Definition.** A complex over a commutative ring is perfect if it is quasi-isomorphic to a bounded complex of finitely generated projective modules. The tensor product of two such bounded projective complexes is again one, so derived tensor product stays perfect.

**Problem.** For every commutative ring, derived tensor product gives a ring structure on K₀ of perfect complexes.

**How the definition helps.** The tensor of two bounded projective models is a bounded projective model, and tensoring with a fixed one preserves mapping cones, so it respects the triangle relations of K₀ in each variable (our own proof). The ring in degree zero gives the unit. Without perfection the tensor can leave the category: over k\[x\]/(x²), k ⊗ᴸ k has homology in every degree (our own).

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/0FCT). It says: “Then ⊗ induces a bilinear map K₀(𝒟) × K₀(𝒟′) → K₀(𝒟″) which sends (\[X\], \[X′\]) to \[X ⊗ X′\].”

**Sources:** none listed. No primary source with a working link was found.

### Projectives separate product-ring K₀

**Remember:** Each factor of a product ring gets its own projective summand.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings). arXiv math.KT. Level 3: graduate.

**Definition.** K₀ of a ring is the group of formal differences of isomorphism classes of finitely generated projective modules, the direct summands of finite free modules, with direct sum as addition. Over R × S, the central idempotents (1,0) and (0,1) split every module into an R-part and an S-part.

**Problem.** For unital rings R and S, K₀(R × S) is the direct sum of K₀(R) and K₀(S).

**How the definition helps.** A module over R × S is finitely generated projective exactly when both parts are, by the finite free summand test. This splitting preserves direct sums, so adjoining formal differences gives the isomorphism (our own proof).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “The functor K₀ takes a ring A to the Grothendieck group of the set of isomorphism classes of its finitely generated projective modules”

**Sources:** none listed. No primary source with a working link was found.

### Quillen’s construction remembers nonsplit sequences

**Remember:** More chosen exact sequences mean more relations and a smaller K₀.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 19D06. arXiv math.KT. Level 3: graduate.

**Definition.** For an exact category, a category with a chosen class of short exact sequences, K₀ has a generator \[M\] for each object up to isomorphism and the relation \[M\] = \[L\] + \[N\] for each chosen sequence L ↪︎ M ↠ N. The split exact structure chooses only the split sequences, so it imposes fewer relations.

**Problem.** For finite modules over ℤ/4ℤ, all short exact sequences give K₀ ≅ ℤ. Using only split sequences gives K₀ ≅ ℤ².

**How the definition helps.** With split sequences only, the relations record direct sums, and unique decomposition into copies of ℤ/2ℤ and ℤ/4ℤ gives ℤ² (our own calculation). With all sequences, the nonsplit sequence ℤ/2ℤ ↪︎ ℤ/4ℤ ↠ ℤ/2ℤ forces \[ℤ/4ℤ\] = 2\[ℤ/2ℤ\]. Composition length respects every exact sequence and sends \[ℤ/2ℤ\] to 1, so the group is ℤ.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “the Q-construction works directly with short exact sequences.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Rank classifies local projective K₀

**Remember:** Over a local ring, projective means free and rank counts the generators.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13C10. arXiv math.KT. Level 3: graduate.

**Definition.** K₀ of a ring is the group of formal differences of finitely generated projective modules, the direct summands of finite free modules, with direct sum as addition.

**Problem.** Rank identifies K₀ of a commutative local ring, a ring with one maximal ideal, with ℤ.

**How the definition helps.** Over a commutative local ring every finitely generated projective module is free (our own explanation, using the local freeness theorem), so rank is its only invariant and adds under direct sum. Formal differences of nonnegative ranks give ℤ. Without the projective condition this fails: over ℤ/4ℤ, direct-sum classes of ℤ/2ℤ and ℤ/4ℤ stay independent (our own).

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/00JJ). It says: “Every finite projective R-module is finite free.”

**Sources:** none listed. No primary source with a working link was found.

### Exact sequences cancel Euler boundaries

**Remember:** An object's class is its subobject's class plus its quotient's.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18F30. arXiv math.KT. Level 3: graduate.

**Definition.** The Grothendieck group of an abelian category has one generator \[B\] for each object up to isomorphism and the relation \[B\] = \[A\] + \[B/A\] for every subobject A of B. So along any filtration, a class splits into the classes of the layers.

**Problem.** In an abelian category, where kernels and quotients behave as they do for modules, a bounded complex has the same alternating sum of classes as its homology.

**How the definition helps.** The cycles in each term contain the incoming boundaries, with homology as quotient. The term modulo cycles gives the outgoing boundaries. Thus each term contributes its homology and two boundary classes, and each boundary cancels across adjacent degrees (our own proof).

**Paper or page:** [Grothendieck's proof of Hirzebruch-Riemann-Roch theorem](https://arxiv.org/abs/2511.06880v2). It says: “Then we have the following equality in K₀(𝒞) ∑ (−1)ⁱ\[Xᵢ\] = ∑ (−1)ⁱ\[Hᵢ(X•)\].”

**Sources:** none listed. No primary source with a working link was found.

### Finitely generated projectives keep K₀ from collapsing under the Eilenberg swindle

**Remember:** An infinite sum absorbs one more copy of its summand.

*Rules out counterexamples.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18F25. arXiv math.KT. Level 3: graduate.

**Definition.** The split Grothendieck group of an additive category has a generator \[A\] for each object up to isomorphism and the relations \[A ⊕ B\] = \[A\] + \[B\]. Ring K₀ applies this to finitely generated projective modules, a category with no infinite direct sums.

**Problem.** If an additive category, one where maps can be added and finite direct sums exist, has countable direct sums, then its split Grothendieck group is zero.

**How the definition helps.** For any A, the countable sum S of copies of A satisfies A ⊕ S ≅ S. The relation gives \[A\] + \[S\] = \[S\], so every generator vanishes. Finitely generated projectives exclude S: a countable sum of copies of ℤ is not finitely generated, and K₀(ℤ) = ℤ survives (our own example).

**nLab:** [Eilenberg swindle](https://ncatlab.org/nlab/show/Eilenberg+swindle). It says: “This is the reason that, for instance, one has to restrict oneself to categories of finitely generated (projective) modules (which lack infinite direct sums)”

**Sources:** none listed. No primary source with a working link was found.

### Residue fields compute torsion Euler characteristics

**Remember:** Each ℤ/p counts as p, and shifting a complex inverts its value.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)). arXiv math.KT. Level 3: graduate.

**Definition.** Take bounded complexes of finite free abelian groups with finite cohomology, and their K₀ with additivity on exact triangles. By Hyslop’s lemma the classes \[ℤ/p\] form a basis of this K₀, so there is one homomorphism to the positive rationals under multiplication sending \[ℤ/p\] to p for every prime p: the multiplicative Euler characteristic.

**Problem.** The multiplicative Euler characteristic of such a complex is the product of the orders of its even cohomology groups divided by that of its odd ones.

**How the definition helps.** A composition series writes each finite cohomology group as a sum of classes \[ℤ/p\] whose primes multiply to its order. Truncation triangles write the complex as the alternating sum of its cohomology classes, which gives the ratio (our own explanation).

**Paper or page:** [Special Values without Semi-Simplicity Via K-Theory](https://arxiv.org/abs/2404.18367). It says: “with 𝔽ₚ generating the p-indexed copy of ℤ”

**Sources:**

- [Logan Hyslop, Special Values without Semi-Simplicity Via K-Theory (2024 preprint)](https://arxiv.org/abs/2404.18367)

### Spectral sequence pages preserve Euler classes

**Remember:** Taking homology never changes an alternating sum of classes.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18G40. arXiv math.KT. Level 3: graduate.

**Definition.** Use the Grothendieck group in which \[B\] = \[A\] + \[B/A\] for every subobject A of B, so taking homology of a finite complex keeps its alternating sum. Each page of a spectral sequence is the homology of the previous page, and each entry is signed by the parity of its total degree p+q.

**Problem.** If one page has finitely many nonzero entries, every later page has the same alternating class sum. For a bounded complex with a finite filtration, this sum equals the alternating sum of its cohomology classes.

**How the definition helps.** Each differential changes total degree by one, so the Euler identity for complexes keeps the alternating sum from page to page (our own proof). Convergence makes the final entries the successive quotients of a filtration of cohomology, and the quotient relations add them back together. With direct-sum relations alone, each of these short exact sequences would have to split.

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/0BDW). It says: “Then only a finite number of Hⁿ(K•) are nonzero and we have ∑ (−1)ⁿ\[Hⁿ(K•)\] = ∑ (−1)ᵖ⁺ᑫ\[Eᵣ(p, q)\]”

**Sources:** none listed. No primary source with a working link was found.

### Stable matrices remove an extra sign

**Remember:** A spare index makes every shear a commutator.

*Rules out counterexamples.* MSC 19B14 (Stability for linear groups). arXiv math.KT. Level 3: graduate.

**Definition.** K₁ of a ring with identity is the abelianization of the stable group GL(R), the union of all invertible matrix groups with A identified with diag(A,1). Stabilizing gives every row addition eᵢⱼ(a) a spare index k, and then eᵢⱼ(a) is the commutator of eᵢₖ(a) and eₖⱼ(1) (our own).

**Problem.** Every elementary row addition is trivial in K₁. Without stabilizing this can fail: over 𝔽₂ a row addition is nontrivial in the abelianization of the two-by-two group.

**How the definition helps.** A commutator dies in any abelianization, and stabilizing makes every row addition a commutator (our own). Over 𝔽₂ the two-by-two group permutes the three nonzero vectors, a row addition swaps two of them, and its sign survives abelianization (our own). The Whitehead lemma upgrades this to equality of the stable elementary and commutator subgroups (our own).

**nLab:** [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group). It says: “By the above Whitehead lemma this is also Gℓ(R)/E(R).”

**Sources:** none listed. No primary source with a working link was found.

### Defining K₁ as an abelianization makes every homomorphism to abelian groups factor

**Remember:** K₁ is the largest abelian quotient of the stable matrix group.

*True by definition.* MSC 19B99 (Whitehead groups and \\(K<sub>1</sub>\\)). arXiv math.KT. Level 3: graduate.

**Definition.** For a unital ring R, K₁(R) is the largest abelian quotient of GL(R), the union of the groups GLₙ(R) under A ↦ diag(A,1): GL(R) divided by its commutator subgroup.

**Problem.** Every group homomorphism from GL(R) to an abelian group factors uniquely through K₁(R). The determinant over a commutative ring is one example.

**How the definition helps.** A homomorphism to an abelian group kills every commutator, so it factors uniquely through the quotient by the commutator subgroup (our own). Whitehead's lemma, which Wikipedia states, says this subgroup is E(R), so the same holds for the quotient GL(R)/E(R).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “K₁(A) is the abelianization of the infinite general linear group”

**Sources:** none listed. No primary source with a working link was found.

### The Bloch complex exposes K₂

**Remember:** Degree two is wedges modulo the Steinberg relation, which is rational K₂.

*True by definition.* MSC 19C20 (Symbols, presentations and stability of \\(K<sub>2</sub>\\)), 19E15. arXiv math.KT. Level 3: graduate.

**Definition.** For a field F, the rational Bloch–Suslin complex sends a symbol \[x\], for x in F outside {0,1}, to x ∧ (1−x) in the exterior square of F× ⊗ ℚ. The symbols sit in degree one and obey the five-term relation \[x\]−\[y\]+\[y/x\]−\[(1−1/x)/(1−1/y)\]+\[(1−x)/(1−y)\] = 0 for distinct x, y outside {0,1}.

**Problem.** For a field F, the second cohomology of this complex is K₂(F) ⊗ ℚ, where K₂ is Quillen’s second K-group.

**How the definition helps.** Second cohomology is the exterior square of F× ⊗ ℚ modulo all x ∧ (1−x), which is the rational symbol presentation of K₂ with its Steinberg relation (our own). Matsumoto’s theorem identifies that presentation with Quillen’s group.

**Wikipedia:** [Bloch group](https://en.wikipedia.org/wiki/Bloch_group). It says: “This assertion is due to the Matsumoto theorem on K₂ for fields.”

**Sources:**

- [Hideya Matsumoto, Sur les sous-groupes arithmétiques des groupes semi-simples déployés (1969)](https://numdam.org/articles/10.24033/asens.1174/)

### Finite resolutions identify K-theory with G-theory

**Remember:** Finite projective resolutions let projectives compute the module theory.

*Makes the theorem clean to state or prove.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a right noetherian ring R, define G(R) as the connective K-theory of finitely generated right modules with their short exact sequences. Define K(R) by the same construction on finitely generated projective right modules.

**Problem.** Suppose every finitely generated right module has a finite exact resolution by finitely generated projectives. Then inclusion induces an equivalence K(R) → G(R).

**How the definition helps.** Inclusion of projectives gives the map, and Quillen’s resolution theorem makes it an equivalence under two conditions (our own explanation). Projectives are closed under extensions and under kernels of surjections between projectives. The assumed finite resolutions supply the second condition.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “This new definition began with an exact category”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Perfect kernels protect first homology

**Remember:** Kill a perfect kernel without changing first homology.

*Rules out counterexamples.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a connected cell complex X and a perfect normal subgroup P of its fundamental group, one equal to its own commutator subgroup, a plus map X → X⁺ kills exactly P on fundamental groups and preserves homology with every local coefficient system on X⁺. Since P consists of products of commutators, killing it leaves the abelianized fundamental group, first homology, unchanged.

**Problem.** Every perfect normal subgroup of π₁X occurs as the kernel of a plus map. Quotienting the circle’s fundamental group by the whole group cannot preserve integral first homology.

**How the definition helps.** Every element of P is a product of commutators, so killing P does not change first homology (our own explanation). The circle shows the condition is needed: killing all of its fundamental group ℤ would change first homology from ℤ to zero. Quillen’s theorem builds such a map, preserving homology in every degree with the stated coefficients.

**nLab:** [Quillen plus construction](https://ncatlab.org/nlab/show/Quillen+plus+construction). It says: “The plus construction doesn't change the homology of the space but 'kills' a perfect normal subgroup of G within the classifying space BG.”

**Sources:**

- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)

### Reversing exact sequences preserves K-theory

**Remember:** A subquotient is a quotient of a sub, or vice versa.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a small exact category E, an arrow X → Y in Q(E) is an isomorphism class of spans X ↞ U ↪︎ Y, an admissible epimorphism and an admissible monomorphism, which present X as a subquotient of Y. Spans compose by pullback, and connective K-theory is the loop space ΩBQ(E) at zero.

**Problem.** For every small exact category E, its opposite exact category has naturally equivalent connective K-theory spaces.

**How the definition helps.** In the opposite category the same data present X as a subobject of a quotient of Y instead. From U ↠ X with U ↪︎ Y, embed X into Y/ker(U → X), and conversely pull X back along the quotient map of Y. These inverse correspondences respect composition, so they identify the Q-categories and their K-theory spaces (our own argument).

**nLab:** [Quillen Q-construction](https://ncatlab.org/nlab/show/Quillen+Q-construction). It says: “is a tool for producing the algebraic K-theory of a Quillen exact category 𝒞.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Simple modules compute finite-length K-theory

**Remember:** Simple layers compute K-theory without tracking their extensions.

*Makes the theorem clean to state or prove.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT. Level 3: graduate.

**Definition.** A module has finite length if it has a finite filtration whose layers are simple, that is nonzero with no proper nonzero submodule. The semisimple ones, finite direct sums of simple modules, include all these layers and are closed under submodules, quotients and finite sums.

**Problem.** Over any unital ring, the inclusion of the semisimple finite-length modules into all finite-length modules induces an equivalence of connective K-theory spaces.

**How the definition helps.** Every finite-length module has a finite filtration with semisimple layers, and the semisimple modules have the closure properties above. These are the hypotheses of Quillen’s dévissage theorem, which gives the equivalence (our own explanation).

**Paper or page:** [Dévissage Hermitian Theory](https://arxiv.org/abs/2408.09633). It says: “the induced map K(𝒝) → K(𝒜) is a homotopy equivalence of spaces.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)
- [Satya Mandal, Dévissage Hermitian Theory](https://arxiv.org/abs/2408.09633)

### The plus construction defines all higher K-groups as homotopy groups

**Remember:** Make π₁ abelian, keep homology, read K-groups as homotopy groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a unital ring R, let GL(R) be the union of the groups GLₙ(R) under A ↦ diag(A,1). The plus construction kills the perfect subgroup E(R) of elementary matrices in π₁ of BGL(R) without changing homology, and Kₙ(R) = πₙ(BGL(R)⁺) for n ≥ 1.

**Problem.** The groups Kₙ(R) = πₙ(BGL(R)⁺), for n ≥ 1, are homotopy groups of one space. They agree with the classical K₁(R) = GL(R)/E(R) and with Milnor's K₂(R).

**How the definition helps.** The plus construction gives π₁ = GL(R)/E(R) by construction. The universal central extension of E(R) by the stable Steinberg group identifies π₂ with Milnor’s classical Steinberg kernel (our own explanation).

**nLab:** [Quillen plus construction](https://ncatlab.org/nlab/show/Quillen+plus+construction), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group). It says: “The plus construction doesn't change the homology of the space but 'kills' a perfect normal subgroup of G within the classifying space BG.”

**Sources:**

- [Charles Weibel, The K-book: An introduction to algebraic K-theory, Graduate Studies in Mathematics 145, AMS (2013), Section IV.1](https://sites.math.rutgers.edu/~weibel/Kbook.html)
- [Marc Hoyois, On Quillen's plus construction (2019)](https://hoyois.app.uni-regensburg.de/papers/acyclic.pdf)

### Leading coefficients recover constants

**Remember:** At infinity, leading coefficients recover every constant unchanged.

*True by definition. Confidence: medium.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** On F(t), the leading coefficient of a fraction is the leading coefficient of its numerator divided by that of its denominator, a multiplicative map that fixes constants. Specialize a Milnor symbol by taking the leading coefficient in every slot.

**Problem.** In every degree, inclusion of F into F(t) gives a split injection on Milnor K-groups, with leading-coefficient specialization as a retraction.

**How the definition helps.** Leading coefficients multiply and fix constants, so it suffices that each Steinberg pair (f, 1−f) goes to zero (our own proof). If f vanishes at infinity, 1−f has leading coefficient one; at a pole the coefficients are u and −u, and {u,−u} = 0. Otherwise the leading coefficient c of f gives the Steinberg pair (c, 1−c), or c = 1 and the first entry is one.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 → Kᴹₙ(F) → Kᴹₙ(F(t))”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Milnor K-theory's Steinberg relation is exactly what the Galois symbol needs

**Remember:** Once the Steinberg relation holds, cup products give a map on symbols.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory), 12G05. arXiv math.KT, math.NT. Level 3: graduate.

**Definition.** For a field F, Kₙᴹ(F) is generated by symbols {a₁,…,aₙ} with entries in F×, multiplicative in each slot, with one further relation: a symbol with adjacent entries a and 1−a is zero.

**Problem.** Let m be invertible in F, and let μₘ be the group of m-th roots of unity. Cup products of Kummer classes, which record how Galois moves the m-th roots of an element, give a homomorphism from Kₙᴹ(F)/m to Galois cohomology with coefficients in the n-fold tensor power of μₘ.

**How the definition helps.** Kummer classes turn products into sums and the target is killed by m, so only the Steinberg relation needs checking. For a ≠ 0,1, the algebra F\[t\]/(tᵐ−a) splits the Kummer class of a, and the norm of 1−t is 1−a. The projection formula then makes the cup product for a and 1−a vanish (our own argument).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “satisfying the defining relations of the Milnor K-group”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970).](https://doi.org/10.1007/BF01425486)

### One uniformizer splits reduction

**Remember:** Modulo an invertible integer, only the leading units and uniformizer matter.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a complete discretely valued field F with residue field k and a chosen uniformizer π, specialization replaces each entry a by the residue of the unit aπ<sup>(−v(a))</sup>. Tame residue kills symbols of units and sends {π,u₂,…,uₙ} to {ū₂,…,ūₙ}. Every symbol splits into unit symbols plus symbols starting with one π, and these two maps read off the two parts.

**Problem.** For every positive integer m invertible in k and every n ≥ 1, specialization and tame residue give an isomorphism. They identify degree n Milnor K-theory of F modulo m with the sum of degrees n and n − 1 over k modulo m.

**How the definition helps.** Multilinearity and {π,π} = {π,−1} give the splitting of every symbol into the two parts. Modulo m, Hensel’s lemma makes principal units m-th powers, so residue units lift uniquely, and lifting u and 1−u together keeps Steinberg relations. These lifts give the inverse map (our own proof).

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “∂(l(π)l(u₂)⋯l(uₙ)) = l(ū₂)⋯l(ūₙ)”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Steinberg pairings factor uniquely

**Remember:** Check bilinearity and one relation, and the universal symbol supplies the map.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a field F, the second Milnor K-group is the tensor square F× ⊗ F× over ℤ divided by the subgroup generated by a ⊗ (1 − a) for a ≠ 0, 1. Write {a,b} for the image of a ⊗ b.

**Problem.** Suppose a pairing on F× takes values in an abelian group and is additive under multiplication in each argument. If it sends every pair (a,1 − a) to zero, it induces a unique homomorphism from the second Milnor K-group.

**How the definition helps.** The tensor product turns each pairing that is multiplicative in both arguments into a unique homomorphism, and the quotient imposes exactly the vanishing on pairs (a, 1 − a). Our own remark: Matsumoto’s theorem identifies this group with algebraic K₂ of F, defined through the Steinberg group.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “K₂(k) = k× ⊗ℤ k×/⟨a⊗(1−a) ∣ a≠0,1⟩”

**Sources:**

- [Hideya Matsumoto, Sur les sous-groupes arithmétiques des groupes semi-simples déployés (1969)](https://doi.org/10.24033/asens.1174)

### Steinberg symbols need not alternate

**Remember:** Opposite entries cancel, but equal entries need not.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** The Milnor K-ring of a field F is the tensor algebra on F× with the Steinberg relation {a, 1 − a} = 0 for every a ≠ 0, 1, where {a,b} is the product of two generators.

**Problem.** In the second Milnor K-group, {a,a} = {a,−1} for all a ∈ F×. Over ℝ, {−1,−1} is nonzero.

**How the definition helps.** From {a,1−a} = 0 and {a⁻¹,1−a⁻¹} = 0, dividing second entries gives {a,−a} = 0, also for a = 1 (our own calculation). Bilinearity then gives {a,a} = {a,−a} + {a,−1} = {a,−1}. Over ℝ, multiplying the two sign characters into ℤ/2 is bilinear, kills Steinberg pairs and detects {−1,−1}.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “l(a)² = l(a)l(−1)”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Adams operations compute finite-field K-groups

**Remember:** Subtract the identity from the Adams operation and take its fiber.

*True by definition.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a finite field of order q, Quillen models the positive K-groups by the homotopy fiber of ψᵠ − 1 on BU, where the Adams operation ψᵠ sends each line bundle to its qth tensor power. On the copy of ℤ in degree 2i of BU, ψᵠ − 1 is multiplication by qⁱ − 1.

**Problem.** For i ≥ 1, the K-group in degree 2i vanishes. In degree 2i − 1, the group is cyclic of order qⁱ − 1.

**How the definition helps.** Quillen’s comparison identifies the positive K-groups with the homotopy groups of the fiber (our own summary). By Bott periodicity, BU has ℤ in each positive even degree and zero in odd degrees. The fiber sequence turns multiplication by qⁱ − 1 into kernel zero in degree 2i and cokernel ℤ/(qⁱ − 1) in degree 2i − 1.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “to the homotopy fiber of ψᵠ − 1”

**Sources:**

- [Daniel Quillen, On the cohomology and K-theory of the general linear groups over a finite field (1972)](https://doi.org/10.2307/1970825)

### Column shifts give Connes’s sequence

**Remember:** Multiplying by u drops the constant column, whose chains are Hochschild chains.

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** A mixed complex has a boundary b of degree −1 and an operator B of degree +1 with b² = B² = bB + Bb = 0. Its cyclic complex is polynomials in u⁻¹ with chain coefficients and differential b + uB, where u has degree −2 and kills the constant term. Multiplying by u maps onto the complex shifted by two, with kernel the constant column, which is (C, b) (our own).

**Problem.** For the mixed complex of a unital algebra, the constant column computes Hochschild homology, and the whole complex computes cyclic homology. Connes’s exact sequence relates these groups through a shift of two cyclic degrees.

**How the definition helps.** Multiplication by u gives a short exact sequence from Hochschild chains through the cyclic complex to its shift by two, and its long exact homology sequence is Connes’s sequence (our own). Kassel’s comparison with the cyclic bicomplex justifies using the polynomial model (our own).

**nLab:** [mixed complex](https://ncatlab.org/nlab/show/mixed+complex). It says: “A mixed complex is both a chain complex and a cochain complex in a compatible way.”

**Sources:**

- [Christian Kassel, Cyclic homology, comodules, and mixed complexes](https://doi.org/10.1016/0021-8693(87)90086-x)
- [Jean-Louis Loday, Cyclic Homology of Algebras](https://doi.org/10.1007/978-3-662-11389-9_2)

### Cyclic coinvariants lose even classes

**Remember:** Identifying rotations can erase every positive even class in characteristic two.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** For a unital algebra A over a field, the Connes complex in degree n is A⊗⁽ⁿ⁺¹⁾ with its Hochschild boundary, divided by all differences c − tₙc. Here tₙ moves the last tensor factor to the front and multiplies by (−1)ⁿ, so the quotient forgets how rotations act (our own).

**Problem.** For the two-element field as an algebra over itself, cyclic homology equals the field in every nonnegative even degree and vanishes in odd degrees. The Connes quotient loses every positive even class.

**How the definition helps.** For 𝔽₂ every degree of the Connes complex is 𝔽₂, rotations act trivially, and the boundary is the identity out of positive even degrees and zero out of odd degrees (our own). So the Connes quotient has homology only in degree zero. The cyclic bicomplex instead keeps one degree-zero chain in each even column, which gives 𝔽₂ in every even degree (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “If the field k contains the rational numbers, the definition in terms of the Connes complex calculates the same homology.”

**Sources:**

- [Jean-Louis Loday, Cyclic Homology of Algebras](https://doi.org/10.1007/978-3-662-11389-9_2)
- [Christian Kassel, Cyclic homology, comodules, and mixed complexes](https://doi.org/10.1016/0021-8693(87)90086-x)

### Four-point faces give five terms

**Remember:** Deleting each of five points gives the five terms.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** Over an infinite field F, take the free abelian group on ordered quadruples of distinct points of the projective line, up to fractional linear transformations, labeling each by its fourth point after the first three move to 0, ∞, 1. For every ordered quintuple of distinct points, the alternating sum of its five faces, the quadruples left after deleting one point, is a relation.

**Problem.** Over an infinite field F this quotient is the pre-Bloch group. In the labels, its relations read \[x\] − \[y\] + \[y/x\] − \[(1−1/x)/(1−1/y)\] + \[(1−x)/(1−y)\] = 0 for distinct x, y outside {0,1}.

**How the definition helps.** A unique fractional linear transformation sends the first three points to 0, ∞, 1, so the label is well defined. Normalize a quintuple to (0,∞,1,x,y). Deleting its points from last to first and labeling each face gives the five displayed symbols in order, with alternating signs (our own calculation).

**Wikipedia:** [Bloch group](https://en.wikipedia.org/wiki/Bloch_group). It says: “The Bloch-Suslin complex is defined as the following cochain complex, concentrated in degrees one and two”

**Sources:**

- [Kevin Hutchinson, A Bloch–Wigner complex for SL₂ (2013)](https://doi.org/10.1017/is013003031jkt13222)

### Inverting u gives periodic homology

**Remember:** Power series give negative cyclic homology, and Laurent series give periodic cyclic homology.

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** A mixed complex has two square-zero operators, b lowering degree and B raising degree, with bB + Bb = 0. Negative cyclic chains are power series in u with chain coefficients and differential b + uB, where u has degree −2. Periodic cyclic chains also allow finitely many negative powers of u, so they are the negative chains with u inverted.

**Problem.** For a mixed complex concentrated in nonnegative degrees over a commutative ring, inverting u in negative cyclic homology gives periodic cyclic homology.

**How the definition helps.** Allowing finitely many negative powers is exactly localization at u (our own). Localization is exact, so it commutes with taking homology (our own). The comparison with the product totalizations of the cyclic bicomplex justifies the series models (our own).

**nLab:** [mixed complex](https://ncatlab.org/nlab/show/mixed+complex). It says: “A mixed complex is both a chain complex and a cochain complex in a compatible way.”

**Sources:**

- [Christian Kassel, Cyclic homology, comodules, and mixed complexes](https://doi.org/10.1016/0021-8693(87)90086-x)

### Tensoring with the circle gives Jones' free loop space theorem

**Remember:** Functions on loops are Hochschild chains of functions.

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P35, 16E40. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For an E∞-algebra A over a field k, define derived Hochschild chains by the tensor S¹ ⊗ A. This tensor is the colimit of the constant diagram at A indexed by the circle in the ∞-category of E∞-algebras over k.

**Problem.** Let X be a simply connected CW complex of finite type and take cochains over a field k. Jones’ theorem identifies the Hochschild homology of C•(X;k) with the cohomology of the free loop space Map(S¹,X) over k.

**How the definition helps.** The circle builds both sides: the tensor S¹ ⊗ A on one side and the free loop space Map(S¹,X) on the other. Eilenberg–Moore convergence, which needs X simply connected of finite type, identifies the tensor of cochains with cochains on that mapping space (our own explanation). Taking homology gives the statement.

**nLab:** [Hochschild cohomology](https://ncatlab.org/nlab/show/Hochschild+cohomology). It says: “This result, which follows directly from the general abstract desciption of Hichschild homology is known as Jones' theorem.”

**Sources:**

- [John D. S. Jones, Cyclic homology and equivariant homology, Invent. Math. 87 (1987)](https://doi.org/10.1007/bf01389424)

### The cotangent complex extends the HKR theorem to every algebra

**Remember:** Use exterior powers of the cotangent complex, and HKR always holds.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 13D03, 16E40. arXiv math.KT, math.AG. Level 3: graduate.

**Definition.** The cotangent complex L of a commutative k-algebra A is a derived version of the Kähler forms: resolve A by simplicial polynomial k-algebras P•, base change Ω¹(P•/k) to A in each degree, and normalize. For smooth A it is just Ω¹(A/k) in degree zero.

**Problem.** Derived Hochschild homology HH(A/k) has a natural descending filtration for every commutative k-algebra A. Its ith graded piece is the ith derived exterior power of L shifted up by i. For smooth A this gives HHₙ(A/k) ≅ Ωⁿ(A/k).

**How the definition helps.** Replacing forms by derived exterior powers of L removes the singular counterexamples to the classical statement. For k\[x\]/(x²), HHₙ is nonzero in every degree while Ωⁿ vanishes for n ≥ 2, but L has a piece in degree 1 whose derived exterior powers fill those degrees (our own). Both sides commute with sifted colimits and agree on polynomial algebras, which proves the general case (our own).

**nLab:** [Hochschild-Kostant-Rosenberg theorem](https://ncatlab.org/nlab/show/Hochschild-Kostant-Rosenberg+theorem). It says: “If the k-algebra R is sufficiently well-behaved, then this morphism is an isomorphism that identifies the Hochschild homology of R in degree n with Ωⁿ(R/k) for all n”

**Wikipedia:** [Hochschild homology](https://en.wikipedia.org/wiki/Hochschild_homology). It says: “If the algebra A/k isn't smooth, or even flat, then there is an analogous theorem using the cotangent complex.”

**Sources:**

- [G. Hochschild, Bertram Kostant and Alex Rosenberg, Differential forms on regular affine algebras, Trans. Amer. Math. Soc. 102 (1962)](https://doi.org/10.1090/s0002-9947-1962-0142598-8)

### The periodicity sequence turns Hochschild isomorphisms into cyclic isomorphisms

**Remember:** Same Hochschild homology, same cyclic homology, by the five lemma.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT. Level 3: graduate.

**Definition.** A nonnegative mixed complex is a chain complex C with operators b of degree −1 and B of degree +1 satisfying b² = B² = bB + Bb = 0. Hochschild homology HH uses b alone, and cyclic homology HC uses C\[u⁻¹\] with differential b + uB, where u has degree −2 and kills the constant column.

**Problem.** A map of mixed complexes that is an isomorphism on HH is also an isomorphism on HC. For example, the trace map gives HCₙ(Mₘ(A)) ≅ HCₙ(A).

**How the definition helps.** Connes’s periodicity sequence relates HHₙ, HCₙ and HCₙ₋₂ and is natural in maps of mixed complexes. HC vanishes below degree zero, so induction on n with the five lemma gives the isomorphism (our own proof). The generalized matrix trace respects b and B and induces the Hochschild isomorphism by Morita invariance.

**nLab:** [mixed complex](https://ncatlab.org/nlab/show/mixed+complex). It says: “Equivalently, it is a dg-module over the dg-algebra k\[B\]/(B²), where k is the base ring, B is of degree −1, and dB = 0.”

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “One of the striking features of cyclic homology is the existence of a long exact sequence connecting Hochschild and cyclic homology. This long exact sequence is referred to as the periodicity sequence.”

**Sources:**

- [C. Kassel, Cyclic homology, comodules, and mixed complexes, J. Algebra 107 (1987) 195–216](https://doi.org/10.1016/0021-8693(87)90086-x)

### Defining relative K-theory as a homotopy fiber builds in exactness

**Remember:** A homotopy fiber remembers how a class becomes zero.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 19D06. arXiv math.KT. Level 3: graduate.

**Definition.** For a ring R with an ideal I, relative K-theory K(R, I) is the homotopy fiber of the map of K-theory spaces K(R) → K(R/I). Its points are points of K(R) together with a path from their image to the base point.

**Problem.** The relative K-groups fit into a long exact sequence ⋯ → Kₙ(R, I) → Kₙ(R) → Kₙ(R/I) → Kₙ₋₁(R, I) → ⋯.

**How the definition helps.** Every map of spaces gives a long exact sequence of homotopy groups that includes its homotopy fiber, so the sequence holds by definition. Older algebraic definitions of relative K₀ and K₁ gave only the low-degree part, checked by hand (our own).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “the long exact sequence for relative K-groups arises as the long exact homotopy sequence of a fibration”

**Sources:** none listed. No primary source with a working link was found.

### Moore coefficients retain adjacent torsion

**Remember:** Take coefficients before homotopy groups to retain the preceding torsion.

*True by definition. Confidence: medium.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 55P42. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a ring R and m ≥ 2, K(R; ℤ/m) is the cofiber of multiplication by m on the K-theory spectrum K(R), so it sits in a cofiber sequence K(R) → K(R) → K(R; ℤ/m). Its homotopy groups Kₙ(R; ℤ/m) are the K-groups of R modulo m.

**Problem.** For n ≥ 1 there is a short exact sequence 0 → Kₙ(R)/m → Kₙ(R; ℤ/m) → Kₙ₋₁(R)\[m\] → 0. Here Kₙ₋₁(R)\[m\] denotes the subgroup killed by m.

**How the definition helps.** The long exact sequence of this cofiber sequence has multiplication by m on Kₙ(R) and on Kₙ₋₁(R), and their cokernel and kernel give the two ends. So the cofiber keeps the m-torsion of the previous degree, which plain reduction modulo m loses (our own). This cofiber is the smash product of K(R) with the Moore spectrum, the cofiber of m on the sphere spectrum.

**nLab:** [Moore spectrum](https://ncatlab.org/nlab/show/Moore+spectrum). It says: “the Moore spectrum SG (often MG) of G”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial simplices enforce homotopy invariance

**Remember:** Polynomial simplices turn polynomial homotopies into actual homotopies.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 19D25. arXiv math.KT. Level 3: graduate.

**Definition.** KH(R) is the geometric realization of the simplicial spectrum whose d-simplices are the nonconnective K-theory of R\[t₀,…,t<sub>d</sub>\]/(t₀+⋯+t<sub>d</sub>−1), the polynomial functions on the algebraic d-simplex. Realization turns every polynomial homotopy into an actual homotopy (our own explanation).

**Problem.** Adjoining a polynomial variable induces an equivalence KH(R) → KH(R\[t\]). For a regular commutative Noetherian ring R, ordinary K-theory already agrees with KH.

**How the definition helps.** The substitution t ↦ st is a polynomial homotopy from the identity of R\[t\] to evaluation at zero followed by inclusion (our own explanation). So evaluation and inclusion are inverse equivalences on KH. For regular commutative Noetherian R, Quillen’s polynomial invariance and vanishing of negative K-groups identify K(R) with KH(R).

**nLab:** [algebraic K-theory spectrum](https://ncatlab.org/nlab/show/algebraic+K-theory+spectrum). It says: “it represents Weibel's homotopy invariant version of algebraic K-theory”

**Sources:**

- [Charles Weibel, Homotopy algebraic K-theory (1989)](https://doi.org/10.1090/conm/083/991991)

### Defining G₀ pushforward by derived direct images makes pushforwards compose

**Remember:** Compose the derived maps before taking their classes.

*True by definition. Confidence: medium.* MSC 19E08 (\\(K\\)-theory of schemes), 14F06. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** Let G₀ of a Noetherian scheme be the Grothendieck group of coherent sheaves. For a proper map f, pushforward sends a sheaf F to the class of the single complex Rf∗F, which equals the alternating sum of the classes of the higher direct images Rⁱf∗F.

**Problem.** Let f : X → Y and g : Y → Z be proper maps of Noetherian schemes. On G₀, pushing forward along g ∘ f equals pushing forward along f and then along g.

**How the definition helps.** Derived direct images compose up to natural isomorphism, so the classes agree. Proper direct image keeps cohomology bounded and coherent, and the class of a bounded complex is the alternating sum of its cohomology classes, which gives the sheaf formula (our own explanation).

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0D5T). It says: “Then Rg∗ ∘ Rf∗ = R(g ∘ f)∗ as functors”

**Sources:** none listed. No primary source with a working link was found.

### Series extend virtual exterior powers

**Remember:** Exterior powers of a difference come from dividing the two series.

*True by definition.* MSC 19E08 (\\(K\\)-theory of schemes), 19A99. arXiv math.KT. Level 3: graduate.

**Definition.** For a vector bundle E on a scheme, put λₜ(E) = ∑ᵢ\[∧ⁱE\]tⁱ in K₀\[\[t\]\], which is multiplicative on short exact sequences and has constant term one. For a virtual class \[E\]−\[F\], put λₜ(\[E\]−\[F\]) = λₜ(E)/λₜ(F).

**Problem.** On a scheme, exterior powers extend to formal differences of vector bundles, and λₜ carries addition in K₀ to multiplication of series.

**How the definition helps.** For a short exact sequence with middle E and ends E′ and E″, the exterior power filtration gives λₜ(E) = λₜ(E′)λₜ(E″). A series with constant term one is invertible, so the quotient is defined and the relations of K₀ give a homomorphism (our own explanation).

**Paper or page:** [Weil](https://stacks.math.columbia.edu/tag/0FIC). It says: “Let X be a scheme. There are maps λʳ : K₀(Vect(X)) → K₀(Vect(X))”

**Sources:** none listed. No primary source with a working link was found.

### Gersten boundaries give rational equivalence

**Remember:** At codimension q, the incoming boundary is the divisor map.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 3: graduate.

**Definition.** For a smooth variety X over a field, the Gersten complex of the Zariski sheaf 𝒦<sub>q</sub> of K-groups has in degree c the sum of K\_(q−c)(k(x)) over points x of codimension c, with localization boundaries as differentials. It ends with the divisor map from the groups k(x)<sup>×</sup> at codimension-(q−1) points to one copy of ℤ per codimension-q point.

**Problem.** For q ≥ 0, the cohomology group H<sup>q</sup>(X, 𝒦<sub>q</sub>) is the Chow group CH<sup>q</sup>(X) of codimension-q cycles modulo rational equivalence.

**How the definition helps.** Quillen proved that the Gersten complex resolves 𝒦<sub>q</sub>, so it computes H<sup>q</sup>(X, 𝒦<sub>q</sub>). The complex stops in degree q, so its last cohomology is cycles of codimension q modulo divisors of functions on codimension-(q−1) subvarieties. That quotient is the Chow group (our own).

**Wikipedia:** [Bloch's formula](https://en.wikipedia.org/wiki/Bloch%27s_formula). It says: “The general case is due to Quillen.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Todd-corrected pushforwards compose

**Remember:** Push forward after multiplying by the relative Todd class.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT. Level 3: graduate.

**Definition.** Consider a projective map f between smooth quasi-projective varieties X and Y over a field. Its relative tangent class is T<sub>f</sub> = T<sub>X</sub> − f\*(T<sub>Y</sub>). Define corrected pushforward on rational Chow groups by x ↦ f∗(td(T<sub>f</sub>) · x), using the Todd class td.

**Problem.** Corrected pushforwards compose. The Chern character takes the K₀ pushforward to the corrected pushforward, so ch(f∗α) = f∗(td(T<sub>f</sub>) · ch(α)).

**How the definition helps.** Relative tangent classes add under composition, after the second is pulled back, so their Todd classes multiply. The projection formula moves the pulled-back factor through the first pushforward, so corrected pushforwards compose. Grothendieck–Riemann–Roch gives the comparison with the K₀ pushforward, and the correction absorbs its Todd factor (our own).

**Paper or page:** [The Riemann-Roch theorem for the Adams operations](https://arxiv.org/abs/2211.10178). It says: “endowed with the modified direct images”

**Sources:**

- [A. Navarro and J. Navarro, The Riemann-Roch theorem for the Adams operations (2022 preprint)](https://arxiv.org/abs/2211.10178)

### Tame residues detect integral classes

**Remember:** A class is integral exactly when every finite tame value is 1.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** For a number field F, the tame kernel is the set of classes in K₂(F) that every finite place, one for each nonzero prime ideal of the ring of integers, sends to 1 under its tame symbol to the residue field’s multiplicative group.

**Problem.** The map from K₂ of the ring of integers of F to K₂ of F identifies the former with the tame kernel.

**How the definition helps.** In our own explanation, Quillen’s localization sequence runs from the K₂ of the residue fields through K₂ of the ring of integers and K₂(F) to the residue fields’ multiplicative groups, with the tame symbols as its last map. Finite fields have trivial K₂, so the integral map is injective. Exactness makes its image the common kernel.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792v2). It says: “$K<sub>2</sub>(O<sub>F</sub>)$ is finite abelian, and is the kernel of the map”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Tame residues detect integral K₂

**Remember:** Integral classes are exactly the classes with no tame residue.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)), 19D50. arXiv math.KT. Level 3: graduate.

**Definition.** Let A be the ring of integers of a number field F. At a nonzero prime with local uniformizer π, write a = πʳu and b = πˢw with local units u and w; the tame residue sends {a,b} to the reduction of (−1)ʳˢuˢ/wʳ.

**Problem.** K₂(A) embeds into K₂(F). Its image consists exactly of classes with residue one at every nonzero prime.

**How the definition helps.** Symbols generate K₂(F), and their residues form the boundary of Quillen’s localization sequence, up to sign convention (our own explanation). Each finite residue field has zero K₂, which gives injectivity. Exactness then identifies the image with the common kernel.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “then there is a long exact sequence”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)
- [Daniel Quillen, On the cohomology and K-theory of the general linear groups over a finite field (1972)](https://doi.org/10.2307/1970825)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Tame symbols handle common poles

**Remember:** Cancel the orders locally before taking the global product.

*Rules out counterexamples.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** At a point P of a smooth projective curve, let nonzero rational functions f and g have orders m and n, poles counted negatively. Their tame symbol is the value at P of (−1)ᵐⁿfⁿ/gᵐ, a function of order zero there, so the value is defined and nonzero.

**Problem.** On a smooth projective integral curve over an algebraically closed field, the product of the tame symbols over all closed points is 1.

**How the definition helps.** Because fⁿ/gᵐ has order zero, the symbol is defined even where f and g share a zero or a pole, so no disjointness condition is needed. In our own example, f = g = t on the projective line has a common zero and pole, and both new factors are −1 in characteristic other than two. Weil reciprocity still does the work of showing that all factors multiply to 1.

**nLab:** [Weil reciprocity law](https://ncatlab.org/nlab/show/Weil+reciprocity+law). It says: “a theorem of André Weil about the function field K(C) of an algebraic curve C over an algebraically closed field K.”

**Wikipedia:** [Weil reciprocity law](https://en.wikipedia.org/wiki/Weil_reciprocity_law). It says: “there must be the side-condition, that the divisors of f and g have disjoint support”

**Sources:** none listed. No primary source with a working link was found.

### Tame symbols pick the finite K₂

**Remember:** Keep only symbols unramified at every finite prime.

*Rules out counterexamples.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 3: graduate.

**Definition.** For a number field F, the tame kernel consists of classes in K₂(F) with tame symbol one at every finite prime. At a prime of valuation v, the symbol of {x,y} is the residue of (−1)ᵛ⁽ˣ⁾ᵛ⁽ʸ⁾xᵛ⁽ʸ⁾/yᵛ⁽ˣ⁾.

**Problem.** The common kernel is the finite group K₂ of the ring of integers. The symbol {2,3} does not belong to this kernel over ℚ.

**How the definition helps.** The local tests reject field symbols that cannot come from the integers: at 3, the symbol {2,3} gives 2 modulo 3, which is not 1 (our own explanation). The localization theorem identifies the common kernel with integral K₂. Finiteness of integral K₂ is a separate theorem.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “If i is even then Kᵢ(OＦ) is finite, but Kᵢ(F) is an infinite torsion group, satisfying the exact sequence”

**Sources:** none listed. No primary source with a working link was found.

### The tame sign ensures cancellation

**Remember:** Keep the sign when both arguments have poles.

*Rules out counterexamples.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** Let v be a discrete valuation on F with residue field k. For f,g ∈ F× with orders m,n, define their tame symbol as the reduction of the unit (−1)ᵐⁿfⁿ/gᵐ in k×.

**Problem.** For f ≠ 0, 1, the tame symbol of (f,1 − f) is 1. It therefore defines a map from K₂ of F to k×.

**How the definition helps.** At a common pole the orders agree and (1−f)/f reduces to −1, so the sign exactly cancels it; without the sign, f = 1/t at t = 0 would give −1 in characteristic other than two (our own example). If either entry has positive order the other reduces to one, and two order-zero entries give one directly. Multiplicativity in both entries and Matsumoto’s presentation then give the map on K₂.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792v2). It says: “{a,b} ↦ (−1)<sup>(v(a)v(b))</sup> a<sup>(v(b))</sup> b<sup>(−v(a))</sup> mod v”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hideya Matsumoto, Sur les sous-groupes arithmétiques des groupes semi-simples déployés (1969)](https://doi.org/10.24033/asens.1174)

### Conjugation counts regulator coordinates

**Remember:** Nonreal pairs always count; real places count only for odd n.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R70. arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** For a number field F and n ≥ 2, the regulator target has one coordinate in the real line ℂ/(2πi)ⁿℝ for each embedding of F into ℂ. Coordinates at conjugate embeddings must be complex conjugates, so at a real embedding the coordinate must be fixed by conjugation, which acts on that line by (−1)ⁿ⁻¹ (our own).

**Problem.** Let r₁ count real embeddings and r₂ count pairs of nonreal conjugate embeddings. The regulator target has real dimension r₂ for even n and r₁ + r₂ for odd n, the rank that Borel’s theorem gives for the K-group of the integers of F in degree 2n−1.

**How the definition helps.** Each nonreal pair has one free real coordinate, and a real embedding has one exactly when (−1)ⁿ⁻¹ = 1, that is, for odd n (our own count). Borel’s regulator theorem identifies the real span of the K-group with this target.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2). It says: “Denote by r₁ and r₂ the numbers of real and conjugate pairs of complex places of F, respectively.”

**Sources:**

- [J. I. Burgos Gil, The Regulators of Beilinson and Borel, CRM Monograph Series 15](https://doi.org/10.1090/crmm/015)

### Flat bundles give curve regulator characters

**Remember:** On a curve every holomorphic connection is flat, so loops give scalars.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14F43. arXiv math.KT, math.AG. Level 3: graduate.

**Definition.** On a smooth complex curve X, degree-two, weight-two Deligne classes are holomorphic line bundles with holomorphic connection, up to connection-preserving isomorphism, and the regulator of nowhere-zero holomorphic functions f and g is their Deligne cup product. Every such connection is flat, since a curve has no holomorphic two-forms.

**Problem.** The regulator of two units gives a character on loops. This means that each loop gives a nonzero complex number, and joining loops multiplies their values.

**How the definition helps.** Parallel transport of a flat connection depends only on the based homotopy class of a loop. Joining loops composes the transports, so their scalars form a character (our own explanation).

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “Since dim(X) = 1, all connections are integrable”

**Sources:**

- [A. A. Beilinson, Higher regulators and values of L-functions (1985)](https://doi.org/10.1007/BF02105861)

### Nondegenerate forms have Witt inverses

**Remember:** Hyperbolic planes are zero; a form plus its negative is hyperbolic.

*Rules out counterexamples.* MSC 19G12 (Witt groups of rings). arXiv math.KT. Level 3: graduate.

**Definition.** The Witt group uses nondegenerate symmetric bilinear forms on finite-dimensional spaces over a field of characteristic other than two, where only zero pairs to zero with every vector. Two forms give the same class when adding hyperbolic planes, each spanned by two self-orthogonal vectors that pair to one, makes them isometric.

**Problem.** Every form has an additive inverse for orthogonal sum in the Witt group. The inverse is the form with its signs reversed.

**How the definition helps.** In the sum of a form and its negative, the diagonal pairs to zero with itself and has half the dimension (our own). A nondegenerate form with such a subspace is hyperbolic, so the sum is zero in the Witt group (our own). Without nondegeneracy, a zero form on a line keeps a vector orthogonal to everything, however many hyperbolic planes one adds (our own).

**Wikipedia:** [Witt group](https://en.wikipedia.org/wiki/Witt_group). It says: “zero or more copies of a hyperbolic plane, the non-degenerate two-dimensional symmetric bilinear form with a norm 0 vector.”

**Sources:** none listed. No primary source with a working link was found.

### Real Witt classes equal signatures

**Remember:** Cancel positive and negative squares in pairs to leave the signature.

*Rules out counterexamples.* MSC 19G12 (Witt groups of rings), 11E81. arXiv math.KT. Level 3: graduate.

**Definition.** The real Witt ring has nonsingular symmetric bilinear forms on finite-dimensional real spaces as elements, with direct sum as addition and tensor product as multiplication. It sets every hyperbolic plane, one positive square plus one negative square, equal to zero, so opposite squares cancel in pairs.

**Problem.** Signature identifies the real Witt ring with ℤ as a ring.

**How the definition helps.** Sylvester’s law makes the numbers of positive and negative squares well defined, and cancelling hyperbolic planes leaves only their difference, the signature (our own proof). Every integer occurs, orthogonal sums add signatures, and tensor products multiply them.

**Wikipedia:** [Witt group](https://en.wikipedia.org/wiki/Witt_group). It says: “Sylvester's law of inertia holds for quadratic forms over k and the signature defines a ring homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Dividing K₁ by group elements makes Whitehead torsion independent of cell lifts

**Remember:** A new cell lift multiplies by ±g, which the quotient kills.

*True by definition. Confidence: medium.* MSC 19J10 (Whitehead (and related) torsion), 57Q10. arXiv math.GT, math.KT. Level 3: graduate.

**Definition.** For a group G, Wh(G) is K₁(ℤ\[G\]) modulo the subgroup generated by the classes of the 1×1 units ±g for g ∈ G. These are the factors by which a change of cell lift or orientation rescales a basis vector.

**Problem.** Whitehead torsion of a homotopy equivalence of finite connected CW complexes does not depend on the choices of cell lifts and orientations.

**How the definition helps.** Changing one lift or orientation multiplies a basis vector by ±g, which changes the torsion by \[±g\], and the quotient kills that class (our own). Independence from the other choices in the construction needs a separate check (our own).

**Wikipedia:** [Whitehead torsion](https://en.wikipedia.org/wiki/Whitehead_torsion). It says: “the quotient of GL(ℤ\[G\]) by the subgroup generated by elementary matrices, elements of G and ±1”

**Sources:**

- [John Milnor, Whitehead torsion (1966).](https://doi.org/10.1090/S0002-9904-1966-11484-2)

### Unit classes distinguish matrix sizes

**Remember:** A rank-one projection counts one; the identity counts the size.

*Rules out counterexamples.* MSC 19K14 (\\(K<sub>0</sub>\\) as an ordered group, traces), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a complex matrix algebra A, K₀ is built from projections p = p² = p\* in matrices over A, counted up to unitary conjugacy after adding zero blocks, and for A = Mₙ(ℂ) this class is just the rank. The ordered group has the projection classes as positive cone and marks the class of the identity of A.

**Problem.** For complex square matrix algebras, the ordered K₀ group with its marked identity determines the matrix size. Forgetting the mark gives the same ordered group for every size.

**How the definition helps.** Rank identifies the ordered K₀ with the integers and their nonnegative part in every size, and its only order automorphism is the identity. The identity of Mₙ(ℂ) has rank n, so the mark recovers n (our own calculation).

**Paper or page:** [A review of the Elliott program of classification of simple amenable C\*-algebras](https://arxiv.org/abs/2311.14238v1). It says: “Then A ≅ B if and only if (K₀(A), K₀(A)₊, \[1ₐ\], K₁(A)) ≅ (K₀(B), K₀(B)₊, \[1ᵦ\], K₁(B)).”

**Sources:** none listed. No primary source with a working link was found.

### An imprimitivity bimodule is a Kasparov module, so Morita equivalence gives KK-equivalence

**Remember:** With F equal to zero, Morita's condition is Kasparov's condition.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L08. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** An A–B imprimitivity bimodule is a full Hilbert B-module E, one whose inner products span a dense subspace of B, on which A acts as exactly the compact operators. So every a ∈ A is compact on E, which is the Kasparov condition that (F²−1)a be compact when F = 0.

**Problem.** Let A and B be separable and strongly Morita equivalent through E. Then (E, 0) is a Kasparov module with invertible class in KK(A,B), so A and B are KK-equivalent and every functor that factors through KK is a Morita invariant.

**How the definition helps.** With E graded in even degree and F = 0, the commutator and adjoint conditions hold trivially, and (F²−1)a = −a is compact by imprimitivity. The conjugate bimodule gives the inverse, since the two interior tensor products are the identity bimodules of A and B (our own explanation).

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “There exists a full Hilbert B-module and a faithful representation φ : A → 𝓛B(E) such that φ(A) = 𝒦B(E).”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)
- [Gennadi G. Kasparov, The operator K-functor and extensions of C\*-algebras, Mathematics of the USSR-Izvestiya 16 (1981) 513–572](https://doi.org/10.1070/IM1981v016n03ABEH001320)

### Defining the Fredholm index by a K-theory boundary map makes indices add

**Remember:** The boundary map turns products of invertibles into sums of indices.

*True by definition. Confidence: medium.* MSC 19K56 (Index theory), 47A53, 46L80. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A bounded Fredholm operator T on a complex Hilbert space becomes invertible in the Calkin algebra, the bounded operators modulo the compact ones. Define ind(T) as the image of this invertible class under the boundary map K₁(Calkin) → K₀(compacts) ≅ ℤ, which is a group homomorphism.

**Problem.** For Fredholm operators S and T, the index of ST is the index of S plus the index of T.

**How the definition helps.** The class of ST in K₁ is the sum of the classes of S and T, and the boundary map is a homomorphism, so ind(ST) = ind(S) + ind(T). The Calkin boundary agrees with kernel dimension minus cokernel dimension (our own summary).

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “The Fredholm index map appears in the 6-term exact sequence given by the Calkin algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm modules pair with projections to give integer indices

**Remember:** F commutes with A and squares to one, modulo compacts.

*True by definition. Confidence: medium.* MSC 19K56 (Index theory), 19K33. arXiv math.KT, math.OA. Level 3: graduate.

**Definition.** An even Fredholm module over A is a graded Hilbert space with an even representation of A and an odd self-adjoint bounded operator F such that \[F,a\] and (F²−1)a are compact for every a ∈ A. So, up to compact operators, F commutes with each a and F²a equals a.

**Problem.** For a projection p in A, let G be the part of F from H₊ to H₋. Then pGp, from pH₊ to pH₋, is Fredholm, and its index depends only on the classes of p in K₀(A) and of F in K⁰(A).

**How the definition helps.** Modulo compacts, pG\*p inverts pGp, because F commutes with p and F²p equals p up to compacts (our own argument). Atkinson’s theorem gives Fredholmness, and homotopy invariance and additivity of the index make it depend only on the two classes, as in the Kasparov index pairing.

**nLab:** [Fredholm module](https://ncatlab.org/nlab/show/Fredholm+module). It says: “A Fredholm module defines a class in K-homology, hence in KK-theory.”

**Wikipedia:** [Fredholm module](https://en.wikipedia.org/wiki/Fredholm_module), [K-homology](https://en.wikipedia.org/wiki/K-homology). It says: “a Fredholm module over A consists of an involutive representation of A on a Hilbert space H, together with a self-adjoint operator F, of square 1 and such that the commutator \[F, a\] is a compact operator”

**Sources:**

- [G. G. Kasparov, Topological invariants of elliptic operators. I: K-homology, Mathematics of the USSR-Izvestiya 9 (1975) 751–792](https://doi.org/10.1070/im1975v009n04abeh001497)

### Stabilization handles jumping Fredholm kernels

**Remember:** Enlarge the allowed target values so the inverse images form a bundle.

*Makes the theorem clean to state or prove.* MSC 19K56 (Index theory). arXiv math.KT. Level 3: graduate.

**Definition.** Take a norm-continuous family of Fredholm operators T<sub>x</sub> between fixed complex Hilbert spaces, each with closed range and finite-dimensional kernel and cokernel. Choose a finite-dimensional subspace V of the target with V + range(T<sub>x</sub>) equal to the whole target for every x. The family index is the bundle of inverse images T<sub>x</sub>⁻¹(V) minus the trivial bundle with fiber V.

**Problem.** Over a compact Hausdorff space, a continuous Fredholm family has a K-theory index whose rank at each point is the ordinary index. The definition does not need constant kernel dimension.

**How the definition helps.** Compactness gives one finite-dimensional V that covers every cokernel. The induced maps to the target modulo V are onto, so their kernels T<sub>x</sub>⁻¹(V) form a vector bundle of dimension index plus dim V (our own explanation). Multiplication by t on ℂ shows the kind of kernel jump at t = 0 that this definition absorbs.

**nLab:** [Atiyah-Jänich theorem](https://ncatlab.org/nlab/show/Atiyah-J%C3%A4nich+theorem). It says: “forms the index bundle, an X-parameterized enhancement of the Fredholm index”

**Sources:**

- [Klaus Jänich, Vektorraumbündel und der Raum der Fredholm-Operatoren (1965)](https://doi.org/10.1007/BF01360851)

### Cone boundaries give suspension isomorphisms

**Remember:** A cone has no K-groups, so its boundary map is an isomorphism.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a C\*-algebra A, the cone CA is the algebra of continuous A-valued paths on \[0,1\] that vanish at 0, and shrinking the paths contracts it. The suspension SA is the kernel of evaluation at 1 from CA onto A.

**Problem.** The boundary maps identify K₀(A) with K₁ of its suspension and K₁(A) with K₀ of its suspension.

**How the definition helps.** The exact sequence 0 → SA → CA → A → 0 (our own) gives a six-term exact sequence of K-groups. The K-groups of the contractible cone are zero, so exactness makes each boundary map an isomorphism.

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1), [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “The cone CA is contractible. Hence K₀(CA) = 0 and K₁(CA) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Paths kill scalar operator K₁

**Remember:** A complex unitary can rotate all its eigenvalues back to one.

*Rules out counterexamples. Confidence: medium.* MSC 19K99 (\\(K\\)-theory and operator algebras), 19B99. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** Operator K₁ of ℂ takes unitary matrices, enlarged by identity blocks, up to continuous paths, so a unitary joined to the identity by a path is zero. Algebraic K₁ of ℂ takes invertible matrices, enlarged the same way, modulo commutators, with no paths allowed.

**Problem.** Operator K₁ of ℂ is zero, while algebraic K₁ of ℂ is the nonzero multiplicative group of complex numbers.

**How the definition helps.** Diagonalize a unitary and rotate each eigenvalue along the circle to 1, so every unitary is joined to the identity (our own calculation). For algebraic K₁ of a field, the determinant identifies the group with the nonzero scalars, so −1 survives.

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory), [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “K₁(A) is the abelianization of the infinite general linear group”

**Sources:** none listed. No primary source with a working link was found.

### The circle unitary represents operator K₁

**Remember:** A class is one unitary, and z can go to any unitary.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a unital C\*-algebra A, K₁(A) consists of unitary matrices over A, those with adjoint as inverse, up to continuous paths after adding identity blocks. So each class is given by one unitary u ∈ Mₙ(A).

**Problem.** Every class in K₁(A) comes from the circle coordinate \[z\] ∈ K₁(C(𝕋)). A unital \*-homomorphism C(𝕋) → Mₙ(A) induces the map, using K₁(Mₙ(A)) ≅ K₁(A).

**How the definition helps.** C(𝕋) is the universal C\*-algebra generated by one unitary, so u gives a unital \*-homomorphism C(𝕋) → Mₙ(A) that sends z to u. It sends \[z\] to \[u\], which is the original class under K₁(Mₙ(A)) ≅ K₁(A) (our own proof).

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “The algebra of continuous functions on the circle 𝕋 denoted C(𝕋) is the universal C★-algebra generated by u such that u\*u = uu\* = 1.”

**Sources:** none listed. No primary source with a working link was found.

### Rational Chern characters kill precisely torsion

**Remember:** Rationalization forgets precisely the classes killed by some nonzero integer.

*True by definition. Confidence: medium.* MSC 19L10 (Riemann-Roch theorems, Chern characters), 55N15. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** For an abelian group G, rationalization G → G ⊗ ℚ sends g to g ⊗ 1, and its kernel is exactly the elements killed by some nonzero integer (our own). The Chern character factors through rationalization, and for finite CW complexes it identifies K⁰(X) ⊗ ℚ with even rational cohomology.

**Problem.** On a finite cell complex, the kernel of the Chern character on K⁰ consists exactly of classes killed by some nonzero integer.

**How the definition helps.** The rational Chern character is an isomorphism, so the kernel of the Chern character is the kernel of rationalization (our own proof). That kernel is the torsion of K⁰(X).

**nLab:** [Chern character](https://ncatlab.org/nlab/show/Chern+character). It says: “there is a canonical localization map”

**Sources:** none listed. No primary source with a working link was found.

### Characterizing Adams operations by line bundles makes them compose multiplicatively

**Remember:** An m-th tensor power of an n-th power is an mn-th power.

*True by definition.* MSC 19L20 (\\(J\\)-homomorphism, Adams operations), 55S25. arXiv math.AT. Level 3: graduate.

**Definition.** For each positive integer k, define ψᵏ on complex K⁰ as the unique natural ring endomorphism sending every line bundle class \[L\] to \[L⊗ᵏ\].

**Problem.** On complex K-theory of finite CW complexes, ψᵐ ∘ ψⁿ = ψᵐⁿ.

**How the definition helps.** The composite ψᵐ ∘ ψⁿ is a natural ring map that sends \[L\] to \[L⊗ᵐⁿ\], so uniqueness makes it ψᵐⁿ (our own). Existence comes from the Newton formulas, and uniqueness from the splitting principle (our own).

**nLab:** [Adams operation](https://ncatlab.org/nlab/show/Adams+operation). It says: “applied to a class x ≔ \[L\] represented by a line bundle L, ψᵏ is the kth tensor power”

**Sources:**

- [J. F. Adams, Vector Fields on Spheres (1962).](https://doi.org/10.2307/1970213)

### Circle completion gives power series

**Remember:** Complete the circle’s Laurent polynomials at the trivial character.

*Makes the theorem clean to state or prove.* MSC 19L47 (Equivariant \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** The representation ring of the circle is ℤ\[x,x⁻¹\], where x is the standard character. Its ideal I of dimension-zero differences is generated by c = x − 1, and the I-adic completion is the inverse limit of the quotients modulo the powers of I.

**Problem.** The degree-zero complex K-ring of the classifying space BS¹ = ℂP<sup>∞</sup> is the I-adic completion of the representation ring of the circle. This completion is the power series ring ℤ\[\[c\]\], where c is the universal line bundle minus the trivial line.

**How the definition helps.** Modulo cⁿ, x = 1 + c is invertible by a finite geometric series, so each quotient is ℤ\[c\]/(cⁿ) and the limit is ℤ\[\[c\]\] (our own calculation). The Atiyah–Segal completion theorem identifies this limit with K⁰(BS¹), sending x to the universal line class.

**nLab:** [Atiyah-Segal completion theorem](https://ncatlab.org/nlab/show/Atiyah-Segal+completion+theorem). It says: “the augmentation ideal is clearly generated by c ≔ x − 1.”

**Sources:**

- [Michael Atiyah and Graeme Segal, Equivariant K-theory and completion (1969)](https://doi.org/10.4310/jdg/1214428815)

### Defining equivariant K-theory by G-bundles gives the representation ring at a point

**Remember:** A bundle with a group action over one point is a representation.

*True by definition.* MSC 19L47 (Equivariant \\(K\\)-theory), 19A22. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** For a compact Lie group G acting on X, K⁰<sub>G</sub>(X) takes formal differences of complex G-bundles, finite-rank vector bundles on which G acts by linear maps between fibers, covering its action on X. Over a point, such a bundle is one vector space with a linear G-action, that is, a representation.

**Problem.** For a compact Lie group G, equivariant K-theory of a point is the complex representation ring R(G). R(G) consists of formal differences of finite-dimensional complex representations.

**How the definition helps.** Over a point, G-bundles with their direct sums and tensor products are exactly representations with theirs, so the two rings agree. The nLab says that this follows immediately from the elementary definition.

**nLab:** [equivariant K-theory](https://ncatlab.org/nlab/show/equivariant+K-theory). It says: “a G-equivariant vector bundle over the point is manifestly just a linear representation of G on a complex vector space”

**Sources:**

- [Graeme Segal, Equivariant K-theory (1968).](https://www.numdam.org/item/PMIHES%5F1968%5F%5F34%5F%5F129%5F0/)

### Free actions allow equivariant descent

**Remember:** A free orbit carries no extra representation on its fibers.

*Rules out counterexamples.* MSC 19L47 (Equivariant \\(K\\)-theory), 55N91. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** An equivariant complex vector bundle has a group action by linear maps between fibers, covering the action on the base, and equivariant K⁰ takes formal differences of these bundles. An action is free when only the identity fixes any point, so no nonidentity element maps a fiber to itself.

**Problem.** For a finite group acting freely on a compact Hausdorff space, equivariant K⁰ equals ordinary K⁰ of the orbit space.

**How the definition helps.** Freeness gives each point a trivializing neighborhood disjoint from its nonidentity translates, so the quotient bundle is locally trivial and pulls back to the original (our own explanation). Quotient and pullback respect direct sums, so they identify the two K⁰ groups (our own explanation). At a fixed point this fails, since the trivial and sign lines of the order-two group are different equivariant bundles over the same line.

**nLab:** [equivariant K-theory](https://ncatlab.org/nlab/show/equivariant+K-theory). It says: “equivariant K-theory is given by equivalence classes of virtual equivariant bundles”

**Sources:**

- [Graeme Segal, Equivariant K-theory (1968), Proposition 2.1](https://www.numdam.org/item/PMIHES_1968__34__129_0.pdf)

### Stabilizer representations classify coset bundles

**Remember:** When the group moves every point, one fiber fixes the bundle.

*Makes the theorem clean to state or prove.* MSC 19L47 (Equivariant \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a compact Lie group G and closed subgroup H, a G-equivariant complex vector bundle on G∕H has G acting linearly between fibers. G carries the identity fiber to every other fiber, and H acts on the identity fiber itself.

**Problem.** For a closed subgroup H, the G-equivariant K-ring of G∕H is the complex representation ring of H.

**How the definition helps.** So one fiber with its H-action determines the whole bundle (our own explanation). Conversely, an H-representation V gives the bundle G ×<sub>H</sub> V, the quotient of G × V by (gh, v) \~ (g, hv). These constructions are inverse and respect direct sums and tensor products.

**nLab:** [equivariant K-theory](https://ncatlab.org/nlab/show/equivariant+K-theory). It says: “The G-equivariant K-theory of a coset space G/H, for H ⊂ G a closed subgroup, is isomorphic to the H-equivariant K-theory of the point”

**Sources:**

- [Graeme Segal, Equivariant K-theory (1968), example (ii)](https://www.numdam.org/item/PMIHES_1968__34__129_0/)

### Classifying maps survive homotopy

**Remember:** Pullback is composition, and composition respects homotopy.

*True by definition.* MSC 19L99 (Topological \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a connected pointed finite CW complex X, reduced complex K-theory is the set of based homotopy classes of based maps X → BU, the space that classifies stable complex bundles. A map f pulls a class back by composing with f (our own).

**Problem.** Based homotopic maps between connected pointed finite cell complexes induce the same pullback on reduced complex K-theory.

**How the definition helps.** Composing with a based homotopy from f to g gives a homotopy between the composites (our own). The bundle classification theorem matches this definition and its pullback with the bundle versions.

**Paper or page:** [Topological K-Theory of Complex Projective Spaces](https://arxiv.org/abs/1303.3959). It says: “For any finite CW complex X, K̃(X) is equal to the set of homotopic maps from X to BU.”

**Sources:** none listed. No primary source with a working link was found.

### Clutching classifies sphere bundles stably

**Remember:** The determinant of the equator loop counts the stable class.

*Makes the theorem clean to state or prove.* MSC 19L99 (Topological \\(K\\)-theory), 55R50. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** A stable complex bundle on the two-sphere comes from gluing trivial bundles over the two hemispheres along a loop of unitary matrices on the equator, up to homotopy of the loop and adding identity blocks. The determinant of the loop has a winding number, and block sums add winding numbers.

**Problem.** The reduced group of virtual complex bundles of rank zero on the two-sphere is ℤ. A Hopf line, the bundle of lines over the complex projective line, minus a trivial line generates it.

**How the definition helps.** Clutching identifies stable classes with stabilized equatorial loops, and the determinant identifies their homotopy classes with ℤ (our own calculation). A Hopf line has winding number ±1, depending on orientation, so its reduced class generates.

**nLab:** [clutching construction](https://ncatlab.org/nlab/show/clutching+construction). It says: “and one single transition function on that equator Sⁿ⁻¹ → G.”

**Paper or page:** [Topological K-Theory of Complex Projective Spaces](https://arxiv.org/abs/1303.3959v1). It says: “where γ = ζ − 1̃, ζ is the Hopf bundle”

**Sources:** none listed. No primary source with a working link was found.

### Collapsing the subspace gives excision

**Remember:** Deleting points already collapsed does not change the quotient.

*True by definition.* MSC 19L99 (Topological \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For compact Hausdorff X and a nonempty closed subset A, relative K-theory K(X,A) is the reduced K-theory of X/A, the space with A collapsed to one point.

**Problem.** Removing an open subset of X contained in A leaves relative K-theory unchanged, provided some of A remains.

**How the definition helps.** If U is open, lies in A, and leaves some of A, then (X∖U)/(A∖U) and X/A are the same pointed space (our own). The natural map between them is a continuous bijection from a compact space to a Hausdorff space, so it is a homeomorphism (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “K(X,A) ≔ K̃(X/A).”

**Sources:** none listed. No primary source with a working link was found.

### Variable ranks capture projective modules

**Remember:** Fiber dimensions may jump between components, like projective module ranks.

*Rules out counterexamples.* MSC 19L99 (Topological \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** Over a compact Hausdorff space X, bundle K-theory uses complex vector bundles whose fiber dimension is locally constant, so it may change between components. Algebraic K₀ of C(X), the ring of continuous complex functions, uses finitely generated projective modules, the direct summands of finite free modules.

**Problem.** Taking sections identifies bundle K-theory with the algebraic K₀ of the complex continuous functions on a compact Hausdorff space.

**How the definition helps.** The Serre–Swan theorem identifies bundles with finitely generated projective modules by taking sections. Ranks must be allowed to vary: on two points, the projection with values one and zero has an image of ranks one and zero (our own). No difference of bundles of constant rank gives that module (our own).

**Wikipedia:** [Serre–Swan theorem](https://en.wikipedia.org/wiki/Serre%E2%80%93Swan_theorem). It says: “the category of real finite-rank vector bundles on X is equivalent to the category of finitely generated projective modules over C(X).”

**Sources:**

- [Richard G. Swan, Vector bundles and projective modules](https://doi.org/10.1090/s0002-9947-1962-0143225-6)

### Idempotents lift K₀ across nilpotent ideals

**Remember:** Idempotents lift across nilpotent ideals, and their image modules lift with them.

*True by definition.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13C10. arXiv math.KT. Level 4: research.

**Definition.** A finite projective module over R is the image of an idempotent matrix, one with e² = e, and K₀ takes formal differences of these modules under direct sum. So lifting a module from R/I to R means lifting one idempotent matrix.

**Problem.** Let I be an ideal in a commutative ring R such that some power of I is zero. Reduction gives K₀(R) ≅ K₀(R/I).

**How the definition helps.** Idempotents lift across nilpotent ideals, so every module over R/I lifts (our own proof). Two lifts are isomorphic, since a lifted isomorphism composed with a lifted inverse is the identity plus a nilpotent map. So reduction is a bijection on module classes and hence on K₀.

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/0D47). It says: “Then there exists a finite projective R-module P such that P/IP ≅ P̄.”

**Sources:** none listed. No primary source with a working link was found.

### Steinberg kernels give second homology

**Remember:** A universal central extension always has second homology as kernel.

*True by definition.* MSC 19C09 (Central extensions and Schur multipliers). arXiv math.KT. Level 4: research.

**Definition.** For a unital ring, let E be the stable group generated by elementary matrices. The stable Steinberg group is the universal central extension of E, whose map onto E has central kernel and maps uniquely over E to every central extension.

**Problem.** The kernel of the stable Steinberg extension of a unital ring is the second integral homology of its stable elementary matrix group.

**How the definition helps.** For a perfect group, the kernel of its universal central extension is its second integral homology, and E is perfect (our own). So the kernel is H₂(E, ℤ) with no matrix calculation (our own). The ring-specific work shows that the Steinberg generators and relations present this extension (our own).

**nLab:** [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group), [Schur multiplier](https://ncatlab.org/nlab/show/Schur+multiplier). It says: “This is a universal central extension and its kernel is Milnor's K2.”

**Wikipedia:** [Steinberg group (K-theory)](https://en.wikipedia.org/wiki/Steinberg_group_%28K-theory%29). It says: “Equivalently, it is the Schur multiplier of the group of elementary matrices, so it is also a homology group”

**Sources:** none listed. No primary source with a working link was found.

### An acyclic map to an E₁-group is a plus construction

**Remember:** Into a group-like space, an acyclic map kills exactly the perfect part.

*True by definition. Confidence: medium.* MSC 19D06 (\\(Q\\)- and plus-constructions), 55P48. arXiv math.AT, math.KT. Level 4: research.

**Definition.** A map is acyclic when its homotopy fibers have the integral homology of a point, and such a map is onto on π₁ with perfect kernel, one equal to its own commutator subgroup. The plus construction X → X⁺ is the acyclic map whose kernel on π₁ is the largest perfect subgroup of π₁(X).

**Problem.** If X → Y is an acyclic map and Y is an E₁-group, then Y is a model for the plus construction X⁺.

**How the definition helps.** An E₁-group, a space with homotopy-associative multiplication and inverses, has abelian fundamental group, so every perfect subgroup of π₁(X) maps to zero. So the perfect kernel contains the largest perfect subgroup and therefore equals it, which makes Y a model for X⁺ (our own argument).

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “Let X → Y be an acyclic map with Y an E₁-group. Then Y is a model for the plus construction of X.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category, arXiv:2405.12118 (2024)](https://arxiv.org/abs/2405.12118)

### Plus construction commutes with products

**Remember:** Products preserve both local targets and acyclic fibers.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A map is acyclic if its homotopy fibers have the integral homology of a point, and a space is local if mapping into it turns acyclic maps into equivalences. The plus map X → X⁺ is the universal map to a local space, and any acyclic map to a local space is that map (our own).

**Problem.** For connected cell complexes X and Y, the canonical map (X × Y)⁺ → X⁺ × Y⁺ is a homotopy equivalence.

**How the definition helps.** X⁺ × Y⁺ is local, since maps into a product are pairs of maps. The product map from X × Y has products of acyclic fibers as fibers, and these are acyclic by the Künneth theorem. So it is an acyclic map to a local space, hence it is (X × Y)⁺ (our own proof).

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “It is the Bousfield localization with respect to the class of acyclic maps.”

**Sources:**

- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)
- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Plus construction is idempotent

**Remember:** Localizing a space twice changes nothing the second time.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Call a map acyclic if its homotopy fibers have the integral homology of a point, and call a space local if mapping into it turns acyclic maps into equivalences. Define X⁺ by the universal map from X to a local space, so X⁺ is itself local.

**Problem.** For a connected cell complex X, the plus map from X⁺ to (X⁺)⁺ is a homotopy equivalence.

**How the definition helps.** Since X⁺ is local, its identity map already has the universal property, so the plus map of X⁺ is an equivalence (our own argument). The comparison theorem identifies this localization with Quillen’s construction by attaching cells.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “It is the Bousfield localization with respect to the class of acyclic maps.”

**Sources:**

- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)
- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Plus covers compute second homotopy

**Remember:** Group-ring coefficients see covers, so the plus cover looks like BP.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let BG have fundamental group G and contractible universal cover, and let P be a perfect normal subgroup, one generated by its own commutators. The relative plus map BG → BG⁺ induces the quotient G → G/P on π₁ and preserves homology with every local coefficient module over ℤ\[G/P\], including ℤ\[G/P\] itself.

**Problem.** The universal cover of BG⁺ has the integral homology of BP. In particular, π₂(BG⁺) ≅ H₂(P, ℤ).

**How the definition helps.** With coefficients in ℤ\[G/P\], the homology of BG is that of its cover BP, and the homology of BG⁺ is that of its universal cover (our own calculation). The universal cover is simply connected with the same π₂, so Hurewicz gives π₂(BG⁺) ≅ H₂(P, ℤ).

**Paper or page:** [Quillen's Plus Construction and the D(2) problem](https://arxiv.org/abs/2308.12541). It says: “induces the quotient map E → E/K on fundamental groups and H∗(𝒦ε⁺, 𝒦ε; M) = 0 for all left modules M over ℤ\[E/K\].”

**Sources:**

- [Wajid Mannan, Quillen's Plus Construction and the D(2) problem](https://arxiv.org/abs/2308.12541)
- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)

### A-theory identifies Wall’s obstruction

**Remember:** Finite domination makes the constant sphere compact, so it has a class.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces), 19J05. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let X be connected and finitely dominated, meaning a homotopy retract of a finite cell complex. Then the constant sphere system, with the sphere spectrum at every point and identity transport, is a compact local system (our own) and so has a class in π₀A(X).

**Problem.** Under π₀A(X) ≅ K₀(ℤ\[π₁X\]), the constant sphere class lifts Wall’s finiteness obstruction. Its image modulo the rank-one free module vanishes exactly when X has the homotopy type of a finite cell complex.

**How the definition helps.** Linearization sends this class to the class of the universal-cover chains, a finite projective complex over ℤ\[π₁X\] (our own explanation). The alternating sum of its projective modules modulo the free class is Wall’s obstruction, and Wall’s finiteness theorem gives the vanishing criterion.

**nLab:** [Wall's finiteness obstruction](https://ncatlab.org/nlab/show/Wall%27s+finiteness+obstruction). It says: “the vanishing of Wall's finiteness obstruction is a necessary and sufficient condition for this to happen.”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)

### A-theory pushes forward along every map

**Remember:** Left adjoints carry compact objects when pullback preserves filtered colimits.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A(X) is the algebraic K-theory of compact objects in Fun(X,Sp), the spectrum-valued local systems on X, where L is compact if Map(L,−) preserves filtered colimits. For f ∶ X → Y, pushforward is left Kan extension along f, the left adjoint of restriction, and restriction preserves filtered colimits.

**Problem.** Every map f induces a covariant map A(X) → A(Y). Composable maps induce the composite map up to the natural coherent homotopies.

**How the definition helps.** A left adjoint whose right adjoint preserves filtered colimits sends compact objects to compact objects. Left Kan extensions compose coherently, so algebraic K-theory gives the asserted maps (our own proof).

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### A-theory splits over finite disjoint unions

**Remember:** Separate components give independent compact local systems.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A local system of spectra on X is a functor from its fundamental ∞-groupoid to spectra, and L is compact if Map(L,−) preserves filtered colimits. A(X) is the algebraic K-theory of compact local systems, and on a disjoint union a local system is a tuple of systems on the parts.

**Problem.** For a finite disjoint union of spaces, A-theory is the product of the A-theory spectra of the parts.

**How the definition helps.** Mapping spaces of tuples are products, and finite products commute with filtered colimits, so a finite tuple is compact exactly when each entry is (our own proof). Algebraic K-theory preserves finite products, which gives the splitting.

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

**Definition.** Assembly is a map to A(X) from the generalized homology of X with coefficients in A(∗), the A-theory of a point. The piecewise linear Whitehead spectrum is its cofiber, so it divides A(X) by what comes from the point and the paths and loops of X.

**Problem.** Let X be connected with fundamental group G. The first homotopy group of this cofiber is the classical Whitehead group, K₁(ℤ\[G\]) modulo the classes of the units ±g.

**How the definition helps.** Assembly is split injective on π₀, split by augmentation, so π₁ of the cofiber is the cokernel of assembly on π₁. Under linearization, the image of assembly on π₁ is generated by \[−1\] from the sign and \[g\] from the loops in X, which gives the quotient (our own explanation).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “The Whitehead group was later discovered to be a quotient of K₁(ℤπ)”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Based loops supply the A-theory ring

**Remember:** The basepoint generator has based loops as its endomorphisms.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a connected based space X, A(X) is the K-theory of compact spectrum-valued local systems on X. Push the sphere spectrum forward from the basepoint by left Kan extension, so maps out of the result evaluate a system at the basepoint, which preserves filtered colimits and detects equivalences.

**Problem.** A(X) is the algebraic K-theory of the ring spectrum Σ∞₊ΩX. The subscript plus adjoins a disjoint basepoint before suspension, and loop concatenation supplies multiplication.

**How the definition helps.** So this system is a compact generator, and its endomorphism ring is Σ∞₊ΩX with loop multiplication, up to the opposite convention. The compact generator theorem identifies compact systems with perfect modules over that ring, which gives the K-theory (our own explanation).

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “is the algebraic K-theory of the suspension spectrum Σ∞₊(ΩX) of the loop space ΩX”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Kathryn Hess and Brooke Shipley, Waldhausen K-theory of spaces via comodules (2016)](https://doi.org/10.1016/j.aim.2015.12.019)

### Excisive A-theory turns gluing into exactness

**Remember:** Homology with fixed coefficients turns gluing into exact sequences.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Excisive A-theory of X is the smash product of A(∗), Waldhausen’s algebraic K-theory spectrum of a point, with the suspension spectrum Σ∞₊X. Both steps, taking Σ∞₊ and smashing with a fixed spectrum, preserve homotopy pushouts.

**Problem.** Gluing spaces by a homotopy pushout gives a homotopy pushout in excisive A-theory. The homotopy groups fit into the long exact sequence for the two pieces, their overlap and their union.

**How the definition helps.** So a homotopy pushout of spaces goes to a homotopy pushout of spectra (our own proof). Passing to homotopy groups gives the Mayer–Vietoris exact sequence.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “Consideration of these questions led Waldhausen to introduce his algebraic K-theory of spaces.”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Jacob Lurie, The Assembly Map II, Lecture 25 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture25-Assembly2.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Finite fibers alone do not give compactness

**Remember:** A finite value at each point does not ensure compactness.

*Rules out counterexamples.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A spectrum-valued local system L is compact if Map(L,−) preserves filtered colimits of local systems. Taking the colimit over the base then sends compact systems to compact spectra, since its right adjoint, the constant system, preserves filtered colimits (our own).

**Problem.** The constant sphere local system on the classifying space of the group C₂ of order two is not compact. Its value at every point is a finite spectrum.

**How the definition helps.** The colimit of the constant sphere over BC₂ is Σ∞₊BC₂, and BC₂ is infinite real projective space, with nonzero mod-two homology in every degree. A compact spectrum has bounded homology, so the system is not compact (our own argument).

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Linearization preserves the first two A-groups

**Remember:** Discard higher loop data without changing degrees zero and one.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a connected based space X, let R = Σ∞₊ΩX, a connective ring spectrum, one with no negative homotopy, whose degree-zero ring is ℤ\[π₁X\]. Linearization applies K-theory to the truncation R → Hℤ\[π₁X\], which keeps only degree zero.

**Problem.** For A-theory defined using all compact modules over R, linearization identifies π₀A(X) with K₀(ℤ\[π₁X\]) and π₁A(X) with K₁(ℤ\[π₁X\]).

**How the definition helps.** For a connective ring spectrum, K₀ and K₁ depend only on its degree-zero ring, so truncation preserves them. Waldhausen’s comparison identifies these groups of R with π₀A(X) and π₁A(X) (our own explanation).

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Nonconnective K-theory gives Bass–Heller–Swan without idempotent completeness

**Remember:** Nonconnective K-theory cannot see idempotent completion, so idempotent completeness is not needed.

*Makes the theorem clean to state or prove.* MSC 19D35 (Negative \\(K\\)-theory, NK and Nil), 18F25. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For an additive category 𝒜 with automorphism Φ, use the nonconnective K-theory K∞ from Bass delooping. It does not change when one adjoins the images of all idempotents, since that inclusion is cofinal.

**Problem.** For every additive category 𝒜, the nonconnective K-theory K∞ of a twisted Laurent extension of 𝒜 splits as a mapping torus term plus two Nil-terms. No idempotent completeness is needed, unlike the connective version.

**How the definition helps.** Since K∞ cannot see idempotent completion, idempotent completeness is not needed (our own interpretation). The nonconnective twisted Bass–Heller–Swan theorem supplies the mapping torus term and both Nil-terms.

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

**Remember:** Keep the classes over A(t) that do not depend on t.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a commutative local ring A, form A(t) and A(t₁,t₂) by inverting all polynomials whose coefficients generate the unit ideal. Improved Kₙᴹ(A) keeps the classes in Kₙᴹ(A(t)) that become equal under the two substitutions t ↦ t₁ and t ↦ t₂.

**Problem.** If A is a complete discrete valuation ring with finite residue field, improved Milnor K-theory injects into Milnor K-theory of its fraction field.

**How the definition helps.** Dahlhausen’s injectivity theorem proves the claim for the improved groups. Ordinary K₂ᴹ of the 2-adic integers fails, since no unit has a unit complement, so it is the tensor square of the units, where 2{5,5} ≠ 0 (our own example). Antisymmetry kills 2{5,5} over the fraction field, and its image in the improved group also vanishes.

**Paper or page:** [Ramified class field theory and duality over finite fields](https://arxiv.org/abs/2104.03029v1). It says: “These two maps are isomorphisms if A is either a field or a local ring with infinite residue field.”

**Sources:**

- [Moritz Kerz, Milnor K-theory of local rings with finite residue fields (2010)](https://doi.org/10.1090/S1056-3911-09-00514-1)
- [Christian Dahlhausen, Milnor K-theory of complete discrete valuation rings with finite residue fields (2018)](https://doi.org/10.1016/j.jpaa.2017.07.002)

### Differential dimension bounds Milnor degrees

**Remember:** A wedge of length greater than the differential dimension vanishes.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** In a field F of prime characteristic p, send a Milnor symbol {a₁,…,aₙ} modulo p to the wedge da₁/a₁ ∧ … ∧ daₙ/aₙ of logarithmic differentials. A wedge of n one-forms vanishes when n exceeds the dimension of the one-forms, which is d when \[F : Fᵖ\] = pᵈ.

**Problem.** If F is of degree pᵈ over its subfield of p-th powers, its Milnor groups modulo p vanish in degrees greater than d. The group in degree d is nonzero.

**How the definition helps.** A p-basis b₁, …, b<sub>d</sub> of F gives a basis db₁, …, db<sub>d</sub> of the one-forms, so wedges of more than d forms vanish and the wedge of the db<sub>i</sub>/b<sub>i</sub> is nonzero (our own argument). The Bloch–Gabber–Kato theorem identifies Milnor K-theory modulo p with these logarithmic forms.

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “\\phi ^n<sub>F</sub>:K<sup>M<sub>n</sub></sup>(F)/p\\rightarrow H<sup>n</sup>(F,\\mathbb {Z}/p(n))\\cong \\Omega ^n<sub>F,\\log </sub>”

**Sources:**

- [Spencer Bloch and Kazuya Kato, p-adic etale cohomology (1986)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02831624/)

### Inverting eta gives periodic Witt theory

**Remember:** After inversion, every degree is a copy of degree zero.

*Makes the theorem clean to state or prove.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a field F of characteristic different from two, invert η, the central element of degree −1, in the graded Milnor–Witt ring. Multiplication by η then identifies every degree with degree zero.

**Problem.** The resulting graded ring is W(F)\[t,t⁻¹\], with t in degree one and η mapping to t⁻¹. The Witt ring W(F) identifies nonsingular symmetric forms up to adding hyperbolic planes.

**How the definition helps.** Morel computes every negative degree as W(F), with multiplication by η an isomorphism between them, so the localized degree-zero ring is W(F) (our own explanation). Then t = η⁻¹ generates the other degrees.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “Let W(K)\[t,t⁻¹\] be the t-periodic ℤ-graded algebra with t a formal variable in degree 1.”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Killing eta restores Milnor symbols

**Remember:** Kill eta, and the product rule becomes ordinary additivity.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** The Milnor–Witt ring of a field F is the graded ring generated by \[a\] in degree one for each a ∈ F× and a central η in degree −1. Its relations are \[ab\] = \[a\] + \[b\] + η\[a\]\[b\], \[a\]\[1−a\] = 0 for a ≠ 0, 1, and η(2 + η\[−1\]) = 0.

**Problem.** The quotient of the Milnor–Witt ring by η is the Milnor K-ring, with \[a\] mapping to {a}.

**How the definition helps.** Setting η to zero leaves \[ab\] = \[a\] + \[b\] and \[a\]\[1−a\] = 0. These are exactly the Milnor K-ring relations, so the two presentations identify corresponding generators (our own argument).

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “\\operatorname K<sup>MW</sup><sub>\*</sub>(K) \\xrightarrow {\\gamma \_\\eta } \\operatorname K<sup>MW</sup><sub>\*</sub>(K) \\xrightarrow F \\operatorname K<sup>M<sub>\*</sub></sup>(K) \\rightarrow 0”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Logarithmic forms capture symbols

**Remember:** Each symbol becomes a wedge of logarithmic differentials.

*Makes the theorem clean to state or prove.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Let F have prime characteristic p, and call da/a, for nonzero a ∈ F, a logarithmic differential, where d is the Kähler differential over the prime field. In degree n ≥ 1, the logarithmic subgroup is the additive group of n-forms generated by wedges of n logarithmic differentials.

**Problem.** Sending a Milnor symbol to the wedge of the logarithmic differentials of its entries identifies degree n modulo p with this logarithmic subgroup.

**How the definition helps.** The map is onto by construction (our own). The product rule d(ab)/(ab) = da/a + db/b gives multilinearity, da ∧ d(1−a) = 0 gives the Steinberg relation, and characteristic p kills p. The Bloch–Gabber–Kato theorem gives injectivity modulo p.

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “\\phi ^n<sub>F</sub>:K<sup>M<sub>n</sub></sup>(F)/p\\rightarrow H<sup>n</sup>(F,\\mathbb {Z}/p(n))\\cong \\Omega ^n<sub>F,\\log </sub>”

**Sources:**

- [Spencer Bloch and Kazuya Kato, p-adic etale cohomology (1986)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02831624/)

### Normal lines remove uniformizer dependence

**Remember:** The basis change and the square-class factor cancel.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a discrete valuation with maximal ideal 𝔪 and residue field k, the twisted target uses the line L = (𝔪/𝔪²)∨. Its elements are x ⊗ ℓ for nonzero ℓ ∈ L, with x ⊗ uℓ = ⟨u⟩x ⊗ ℓ for each u ∈ k×, so rescaling ℓ costs the square class ⟨u⟩.

**Problem.** The Milnor–Witt residue with this target is independent of the uniformizer. On a symbol starting with the uniformizer and followed by units, it gives the reduced unit symbol tensored with that dual basis.

**How the definition helps.** Replacing π by uπ multiplies the untwisted residue by ⟨ū⟩ and the dual basis by ū⁻¹, where ū is the reduction, and the twisting relation cancels the two (our own). Over ℝ((t)), untwisted residues of \[t\] for t and −t are ⟨1⟩ and ⟨−1⟩, so the twist is needed (our own example). The residue formula for a uniformizer followed by units gives the stated symbol.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “\\partial \_v:\\operatorname K<sup>MW</sup><sub>n</sub>(K) \\rightarrow \\operatorname K<sup>MW</sup><sub>n-1</sub>(\\kappa \_v,\\omega \_v)”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Witt quotients make symbols multilinear

**Remember:** Modulo the next power of I, binary forms add like symbols.

*Makes the theorem clean to state or prove.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** In the Witt ring W of a field F of characteristic different from two, let I be the ideal of even-dimensional classes. The graded Witt ring has degree n part Iⁿ/Iⁿ⁺¹, with products taken in W and reduced modulo the next power of I.

**Problem.** Multiplying the binary classes gives a graded surjection from the Milnor K-ring modulo two onto the graded Witt ring. This map is an isomorphism.

**How the definition helps.** With b(a) = 1 − ⟨a⟩, b(ac) = b(a) + b(c) − b(a)b(c), and the last term lies in I², so b is additive in I/I² (our own). Also b(a)b(1 − a) is hyperbolic and 2 lies in I, so the map is defined on Milnor K modulo two, and it is onto because binary classes generate I. The theorem of Orlov, Vishik and Voevodsky gives injectivity.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “the map K× → I(K), u ↦ ⟨⟨u⟩⟩ induces a ring morphism”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Dmitri Orlov, Alexander Vishik and Vladimir Voevodsky, An exact sequence for Kᴹ/2 with applications to quadratic forms (2007)](https://doi.org/10.4007/annals.2007.165.1)

### Finite coefficients make K-theory invariant under extensions of algebraically closed fields

**Remember:** Modulo n, unit groups of algebraically closed fields look alike.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings), 19E08. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For n ≥ 2, the mod-n K-groups of coherent sheaves on X are the homotopy groups of G(X)/n, the cofiber of multiplication by n on the K-theory spectrum G(X) of coherent sheaves. They see only classes modulo n and n-torsion, so divisible groups such as unit groups of algebraically closed fields contribute only roots of unity (our own).

**Problem.** Let E/F be an extension of algebraically closed fields, X a variety over F, and n ≥ 2 invertible in F. Base change to E induces isomorphisms on all mod-n K-groups of coherent sheaves on X.

**How the definition helps.** For ℚ̄ ⊂ ℂ, integral K₁ changes, since the unit groups have different cardinalities (our own). Modulo n it does not, since every unit has an nth root, both fields have the same nth roots of unity, and neither K₀ has n-torsion (our own). Suslin rigidity gives the comparison for varieties in every degree.

**Wikipedia:** [Rigidity (K-theory)](https://en.wikipedia.org/wiki/Rigidity_%28K-theory%29). It says: “Suslin rigidity, named after Andrei Suslin, refers to the invariance of mod-n algebraic K-theory under the base change between two algebraically closed fields”

**Sources:**

- [A. Suslin, On the K-theory of algebraically closed fields, Inventiones Mathematicae 73 (1983) 241–245](https://doi.org/10.1007/BF01394024)

### Invertible coefficients give Henselian rigidity

**Remember:** Units near one have mth roots when m is invertible.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** A local ring R is Henselian if, for every monic polynomial over R, every factorization of its reduction into coprime monic factors lifts to a monic factorization over R. Take K-theory with coefficients modulo an integer m ≥ 2 invertible in R, so that Hensel lifting gives an mth root of every unit congruent to one (our own).

**Problem.** Let R be Henselian local with residue field k, and let m ≥ 2 be invertible in R. Then reduction identifies Kₙ(R; ℤ/m) with Kₙ(k; ℤ/m) for every n ≥ 0, while for the p-adic integers with m = p odd, reduction in degree one is not injective.

**How the definition helps.** Gabber’s rigidity theorem gives the result in all degrees, and invertibility of m is what lets Hensel lifting take mth roots of units congruent to one. For m = p in the p-adic integers, 1 + p has no pth root, since such a root is 1 modulo p and so its pth power is 1 modulo p² (our own example). So 1 + p is nonzero in ℤₚˣ/p ⊆ K₁(ℤₚ; ℤ/p) but reduces to 1 in 𝔽ₚˣ, so reduction is not injective (our own).

**nLab:** [Henselian pair](https://ncatlab.org/nlab/show/Henselian+pair). It says: “for any monic polynomial f ∈ R\[T\] and factorization”

**Sources:**

- [Ofer Gabber, K-theory of Henselian local rings and Henselian pairs (1992)](https://doi.org/10.1090/conm/126/00509)

### Reduction removes the constant defect

**Remember:** Kill the constant \[x\] + \[1−x\], and complements become negatives.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** In the pre-Bloch group of a number field F, defined by the five-term relation, the sum c = \[x\] + \[1−x\] is the same for every x ∈ F ∖ {0,1}. The reduced presentation divides by the subgroup generated by c, so \[x\] + \[1−x\] = 0 there.

**Problem.** In the reduced presentation, complementary pre-Bloch symbols satisfy \[1 − x\] = −\[x\]. This fails in the unreduced presentation over ℚ, where c is nonzero.

**How the definition helps.** Setting c = 0 makes \[1 − x\] = −\[x\] hold by definition (our own). Suslin proves that c does not depend on x, and over ℚ it has order six, so the identity fails in the unreduced group (our own).

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792v2). It says: “B̄(F) is exactly B(F)/⟨cꜰ⟩.”

**Sources:**

- [Andrei A. Suslin, K₃ of a field and the Bloch group (1990), §1](https://www.maths.dur.ac.uk/users/herbert.gangl/Suslin_K3_Bloch_group.pdf)
- [Wenhuan Huang, A full-rank subgroup of Bloch Groups of CM Fields (2025), Lemma 1 and Theorem 2](https://arxiv.org/abs/2507.05792v2)

### Coinvariants restore ordinary pre-Bloch groups

**Remember:** Determinant one remembers square classes, and coinvariants forget them again.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** Over an infinite field F, the refined pre-Bloch group is generated by ordered quadruples of distinct points of ℙ¹, up to determinant-one projective maps. Each ordered quintuple of distinct points gives the relation that the alternating sum of its four-point faces is zero. A projective map rescales to determinant one exactly when its determinant is a square, so the refinement remembers only square classes (our own).

**Problem.** Determinants modulo nonzero squares act on the refined pre-Bloch group through projective transformations. Its coinvariants, which identify each element with all its translates, form the ordinary pre-Bloch group.

**How the definition helps.** Taking coinvariants makes quadruples related by any projective transformation equal, and these orbits are the ordinary pre-Bloch generators (our own). The five-point relations pass unchanged to these orbits.

**Paper or page:** [The third homology of SL₂ of real quadratically closed fields](https://arxiv.org/abs/2107.13915v1). It says: “denote the set of ordered n-tuples \[z₁, …, zₙ\] of distinct points of F× ∖ {1}.”

**Sources:**

- [Kevin Hutchinson, A Bloch–Wigner complex for SL₂ (2013)](https://doi.org/10.1017/is013003031jkt13222)

### Completed tensor products make cyclic homology of smooth functions de Rham theory

**Remember:** Completed tensor powers of C∞(M) are smooth functions on Mⁿ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 58B34, 58A12. arXiv math.KT, math.OA. Level 4: research.

**Definition.** For a compact smooth manifold M, give C∞(M) the topology of uniform convergence of all derivatives. Continuous Hochschild and cyclic homology replace each tensor power of C∞(M) by its completed projective tensor power, which is C∞(Mⁿ) (our own).

**Problem.** For a compact manifold M, continuous Hochschild homology HHₙ of C∞(M) is the space Ωⁿ(M) of smooth n-forms (Connes). Continuous periodic cyclic homology HP₀ and HP₁ are the even and odd de Rham cohomology of M.

**How the definition helps.** Completed chains are smooth functions on powers of M, so smooth geometry near the diagonal of M × M is available (our own summary). Connes uses the diagonal to build a continuous resolution that gives smooth forms, and B then matches d on HP (our own summary). The algebraic tensor product gives Kähler differentials instead, much larger than smooth 1-forms, and so the wrong HH₁ (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology), [Noncommutative geometry](https://en.wikipedia.org/wiki/Noncommutative_geometry). It says: “Cyclic homology and cyclic cohomology provide noncommutative analogues of de Rham homology and cohomology.”

**Sources:**

- [A. Connes, Non-commutative differential geometry, Publ. Math. IHÉS 62 (1985) 41–144](https://doi.org/10.1007/BF02698807)

### Connes' operator B becomes the de Rham differential on smooth algebras

**Remember:** Hochschild becomes forms, B becomes d, cyclic becomes de Rham.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 14F40, 16E40. arXiv math.KT, math.AG. Level 4: research.

**Definition.** A mixed complex has a boundary b of degree −1 and an operator B of degree +1, with b² = B² = bB + Bb = 0. For a commutative algebra in characteristic 0, a₀ ⊗ ⋯ ⊗ aₙ ↦ a₀da₁⋯daₙ/n! sends Connes' B on Hochschild chains to de Rham d (our own summary).

**Problem.** Let A be a smooth commutative algebra over a field of characteristic 0, with algebraic de Rham cohomology groups Hⁱ. Then HCₙ(A) ≅ Ωⁿ/dΩⁿ⁻¹ ⊕ Hⁿ⁻² ⊕ Hⁿ⁻⁴ ⊕ ⋯, and HPᵢ(A) is the product of the groups Hⁱ⁺²ᵐ.

**How the definition helps.** The forms map sends the Hochschild mixed complex to forms with b = 0 and B = d (our own summary). For smooth A, the Hochschild–Kostant–Rosenberg theorem makes it an isomorphism on b-homology, hence on HC and HP. With b = 0, the cyclic bicomplex of forms has columns joined only by d, which gives the stated groups.

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “In particular, if the variety V=Spec A is smooth, cyclic cohomology of A are expressed in terms of the de Rham cohomology of V as follows”

**Sources:**

- [J.-L. Loday, D. Quillen, Cyclic homology and the Lie algebra homology of matrices, Comment. Math. Helv. 59 (1984) 565–591](https://doi.org/10.1007/bf02566367)

### Cyclic cohomology as Ext over the cyclic category makes periodicity a product

**Remember:** As an Ext group, cyclic cohomology is a module over k\[u\].

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 18G90. arXiv math.KT, math.CT. Level 4: research.

**Definition.** For a unital k-algebra A, its cyclic module A♯ has degree-n term A⊗⁽ⁿ⁺¹⁾, with faces from multiplication, degeneracies from the unit, and cyclic rotation. Define HCⁿ(A) as Extⁿ(A♯, k♯) in cyclic k-modules, where k♯ is constant with value k. As an Ext group, HC\*(A) is a module over the Ext ring of k♯ by composing extensions (our own).

**Problem.** Over a field k, the Ext ring of k♯ with itself is the polynomial ring k\[u\] with u in degree 2. So every HC\*(A) is a graded k\[u\]-module, and Connes' periodicity operator S is multiplication by u.

**How the definition helps.** Composing extensions makes HC\*(A) a module over Ext\*(k♯, k♯), so the product is built in (our own summary). That ring is H\*(BΛ;k) = H\*(BS¹;k) = k\[u\], and Connes' comparison identifies composition with u as the operator S.

**nLab:** [cyclic homology](https://ncatlab.org/nlab/show/cyclic+homology). It says: “Connes gave another definition by associating to A a cyclic vector space A♯, and showing that the cyclic homology of A may be computed as via Ext-groups Ext\*(A♯, k♯).”

**Wikipedia:** [Cyclic category](https://en.wikipedia.org/wiki/Cyclic_category). It says: “The classifying space BΛ of the cyclic category is a classifying space BS¹ of the circle group S¹.”

**Sources:**

- [A. Connes, Cohomologie cyclique et foncteurs Extⁿ, C. R. Acad. Sci. Paris Sér. I 296 (1983) 953–958](https://alainconnes.org/wp-content/uploads/n83.pdf)

### Cyclic homology of dg categories makes it an invariant of perfect complexes

**Remember:** Cyclic homology belongs to the category of perfect complexes, not the scheme.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 18G80, 14F40. arXiv math.KT, math.AG. Level 4: research.

**Definition.** Keller defines the cyclic homology of a dg category, one whose morphisms form chain complexes, by a mixed complex built from chains of composable morphisms. This cyclic homology is invariant under equivalences of dg categories (our own summary). For a scheme X, Perf(X) is the dg category of perfect complexes, those locally equivalent to bounded complexes of vector bundles.

**Problem.** Let X be a quasi-compact separated scheme over a field. Weibel's cyclic homology of X, glued from affine pieces, is canonically isomorphic to that of Perf(X) (Keller), so it depends only on Perf(X).

**How the definition helps.** Invariance under dg equivalences holds by definition, so Keller's isomorphism transfers it to schemes at once (our own summary). The real input is Keller's localization theorem, which turns exact sequences of dg categories into long exact sequences in cyclic homology.

**nLab:** [cyclic homology](https://ncatlab.org/nlab/show/cyclic+homology). It says: “he showed that the cyclic homology of the dg-category of perfect complexes on a (nice) scheme X coincides with the cyclic homology of X in the sense of Weibel.”

**Paper or page:** [On a theorem of Keller over a base ring](https://arxiv.org/abs/2511.09264). It says: “Keller proved a theorem stating that the cyclic homology of X is canonically isomorphic to the cyclic homology of the dg category Perf(X) consisting of perfect complexes over X. This theorem shows the categorical nature of the cyclic homology.”

**Sources:**

- [B. Keller, On the cyclic homology of ringed spaces and schemes, Doc. Math. 3 (1998) 231–259](https://doi.org/10.4171/dm/42)

### Cyclic interchange changes coefficient rings

**Remember:** A shadow lets a tensor product rotate to the other ring.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A shadow on bimodules over ring spectra is a functor with a cyclic symmetry. For an R–S bimodule M and an S–R bimodule N, it naturally identifies its value on M ⊗ₛ N over R with that on N ⊗ᵣ M over S. Both tensors are derived.

**Problem.** Let R → S be a map of associative ring spectra. Topological Hochschild homology of R with coefficients in S agrees with that of S with coefficients in the derived tensor S ⊗ᵣ S.

**How the definition helps.** Topological Hochschild homology is a shadow, so cyclic symmetry applies with M = N = S, viewed as bimodules in opposite directions (our own). One order tensors over S and gives THH(R, S), and the other tensors over R and gives THH(S, S ⊗ᵣ S) (our own). The only real work is to show that the cyclic bar model has this symmetry (our own).

**Paper or page:** [Whitehead Filtrations for Computations in Topological Hochschild Homology](https://arxiv.org/abs/2311.06717v4). It says: “we have an equivalence THH(R,S) ≃ THH(S, S ⊗ᵣ S).”

**Sources:**

- [Logan Hyslop, Whitehead filtrations for computations in topological Hochschild homology](https://doi.org/10.2140/agt.2026.26.2443)

### Cyclic invariance makes cocycles pair with K-theory

**Remember:** Cyclic cocycles are traces in many variables, so idempotents pair with them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 46L80, 58B34. arXiv math.KT, math.OA. Level 4: research.

**Definition.** A cyclic n-cocycle on an algebra A is an (n+1)-linear form φ with bφ = 0 for the Hochschild coboundary b. Rotating its arguments changes φ only by the sign (−1)ⁿ, so φ behaves like a trace, and in degree 0 it is one.

**Problem.** Let A be a unital complex algebra and φ a cyclic 2m-cocycle on A, extended to matrices by the generalized trace. For every idempotent matrix e, φ(e, …, e) depends only on \[φ\] in HC²ᵐ(A) and \[e\] in K₀(A).

**How the definition helps.** Cyclic invariance lets φ act on matrices like a trace (our own summary). A coboundary bψ gives zero on (e, …, e), because e² = e and the cyclic sign forces ψ(e, …, e) = 0 (our own). Inner automorphisms act trivially on cyclic cohomology (Connes), so conjugate idempotents give the same number.

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “Cyclic cohomology is in fact endowed with a pairing with K-theory, and one hopes this pairing to be non-degenerate.”

**Paper or page:** [A combinatorial integration on the Cantor dust](https://arxiv.org/abs/2209.03537). It says: “the Connes’ pairing of the cyclic 2-cocycle \[φ\] with \[p\] is expressed as follows”

**Sources:**

- [A. Connes, Non-commutative differential geometry, Publ. Math. IHÉS 62 (1985) 41–144](https://doi.org/10.1007/BF02698807)

### Cyclotomic sphere maps give equalizers

**Remember:** A map from the cyclotomic sphere must commute with every Frobenius.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A cyclotomic spectrum is a spectrum X with a circle action and, for each prime p, an equivariant Frobenius map X → X<sup>(tCₚ)</sup>. The target has the residual circle action transported along S¹ ≅ S¹/Cₚ. Topological cyclic homology TC(X) is the spectrum of cyclotomic maps from the sphere to X, a circle fixed point compatible with every Frobenius (our own).

**Problem.** For bounded-below cyclotomic X, TC(X) is the homotopy equalizer of two maps from X<sup>(hS¹)</sup> to ∏ₚ (X<sup>(tCₚ)</sup>)<sup>(hS¹)</sup>. The maps come from the Frobenius maps and the canonical comparison, respectively.

**How the definition helps.** A map from the sphere is a point of X<sup>(hS¹)</sup> with, for each p, a homotopy between its two images in (X<sup>(tCₚ)</sup>)<sup>(hS¹)</sup> (our own). These data are exactly a point of the stated homotopy equalizer. For bounded-below X, Nikolaus and Scholze show that this mapping spectrum agrees with classical TC.

**nLab:** [cyclotomic spectrum](https://ncatlab.org/nlab/show/cyclotomic+spectrum). It says: “where the circle action on the Tate spectrum comes from the canonical identification S¹/Cₚ ≃ S¹.”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Fontaine's map is the initial complete thickening

**Remember:** Ainf maps uniquely to every complete thickening of R.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 14G45, 14F30. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For a perfectoid ring R, Ainf(R) = W(R♭) is the ring of Witt vectors of the tilt R♭, the limit of R/p along Frobenius. Fontaine's map θ: Ainf(R) → R is the initial surjection onto R from a ring complete both p-adically and for the kernel. So every such surjection D → R receives a unique ring map from Ainf(R) over R.

**Problem.** For a perfectoid ring R, the ring π₀TC⁻(R;ℤp) is naturally isomorphic to Ainf(R) = W(R♭). Under this isomorphism the map to π₀THH(R;ℤp) = R is Fontaine's map θ.

**How the definition helps.** The map from π₀TC⁻(R;ℤp) to π₀THH(R;ℤp) = R is a surjection from a ring complete in both senses (our own). So the universal property gives a unique ring map from Ainf(R) to π₀TC⁻(R;ℤp) over R, with no choices. Bhatt, Morrow and Scholze show that it is an isomorphism, using Bökstedt periodicity (our own summary).

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697). It says: “Let R be a perfectoid ring. Then Fontaine’s map θ : W(R♭) → R is initial among surjections θ<sub>D</sub> : D → R of rings such that the ring D is both p-adically complete and ker θ<sub>D</sub>-adically complete.”

**Sources:**

- [Zhouhang Mao, Perfectoid rings as Thom spectra, arXiv:2003.08697 (2021)](https://arxiv.org/abs/2003.08697)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Topological Hochschild homology and integral p-adic Hodge theory, Publ. Math. IHÉS 129 (2019)](https://doi.org/10.1007/s10240-019-00106-9)

### Groups need no logarithmic correction

**Remember:** Repletion pulls the group completion's cyclic bar back to M.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative monoid M with group completion Mᵍᵖ, the cyclic bar Bᶜʸ(M) has n-simplices Mⁿ⁺¹, augmented to M by multiplication. The replete bar is the homotopy pullback of Bᶜʸ(Mᵍᵖ) → Mᵍᵖ along M → Mᵍᵖ. So it changes Bᶜʸ(M) only where M differs from its group completion (our own).

**Problem.** Suppose an abelian group M maps multiplicatively to a commutative ring A. The canonical map from topological Hochschild homology of A to logarithmic topological Hochschild homology of (A, M) is an equivalence.

**How the definition helps.** If M is a group, M → Mᵍᵖ is an equivalence, so the replete bar is Bᶜʸ(M) itself (our own). The cited proposition makes log THH a change of scalars from the cyclic bar to the replete bar, which is then trivial (our own).

**Paper or page:** [Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2). It says: “There is a natural equivalence THH(A, M) ≃ THH(A) ⊗₍𝕊\[Bᶜʸᶜ(M)\]₎ 𝕊\[M ×₍Mᵍᵖ₎ Bᶜʸᶜ(Mᵍᵖ)\] of E∞-ring spectra.”

**Sources:**

- [Federico Binda, Tommy Lundemo, Doosung Park and Paul Arne Østvær, Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2)

### H-unitality is exactly the condition for excision in cyclic homology

**Remember:** An acyclic bar complex is a unit good enough for homology.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT, math.OA. Level 4: research.

**Definition.** An algebra I over a field is H-unital if its reduced bar complex is acyclic, with terms I⊗ⁿ and differential summing adjacent products with signs. A unital algebra is H-unital, so H-unitality is a homological substitute for a unit (our own).

**Problem.** Over a field of characteristic 0, an algebra I has excision for Hochschild and cyclic homology exactly when I is H-unital (Wodzicki). For example, smooth compactly supported functions on a Lie groupoid form an H-unital convolution algebra, so excision holds for them.

**How the definition helps.** Excision compares the complex of I with a relative complex, and an acyclic bar complex is what makes the comparison work (our own summary). Wodzicki proved the comparison, so checking excision reduces to checking that one complex is acyclic, as in the groupoid example.

**Paper or page:** [H-Unitality of Smooth Groupoid Algebras](https://arxiv.org/abs/2307.00232). It says: “Let A be an associative algebra over ℂ. Then, the following are equivalent: A has the excision property for Hochschild homology. A has the excision property for cyclic homology. A is H-unital.”

**Sources:**

- [M. Wodzicki, Excision in cyclic homology and in rational algebraic K-theory, Ann. of Math. 129 (1989) 591–639](https://doi.org/10.2307/1971518)

### Linearization preserves the logarithmic correction

**Remember:** Log Hochschild homology is a pushout, and base change passes through pushouts.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative pre-log ring (A, M), the replete bar is the homotopy pullback of Bᶜʸ(Mᵍᵖ) → Mᵍᵖ along M → Mᵍᵖ. Derived log Hochschild homology tensors HH(A) with the group ring of the replete bar over the group ring of Bᶜʸ(M), in the derived sense. Log THH is the same pushout built from THH and spherical group rings (our own).

**Problem.** For an ordinary commutative pre-log ring (A, M), extending scalars along THH(ℤ) → ℤ turns log THH(A, M) into derived log Hochschild homology HH(A, M).

**How the definition helps.** Both theories are the same pushout, and extending scalars commutes with pushouts (our own). On the pieces, extending scalars turns THH(A) into HH(A) and spherical group rings into integral ones (our own).

**Paper or page:** [Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2). It says: “There is a natural equivalence HH(A, M) ≃ ℤ ⊗₍THH(ℤ)₎ THH(A, M) of E∞-rings.”

**Sources:**

- [Federico Binda, Tommy Lundemo, Doosung Park and Paul Arne Østvær, Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2)

### Periodic cyclic homology ignores positive gradings, unlike cyclic homology

**Remember:** Invert the periodicity operator, and whatever it kills disappears.

*Rules out counterexamples. Confidence: low.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT. Level 4: research.

**Definition.** Periodic cyclic homology HP is the homology of Hochschild chains in Laurent series C((u)), with u of degree −2 and differential b + uB. Since u is invertible here, Connes' periodicity operator S becomes invertible, so anything that S kills vanishes in HP (our own).

**Problem.** Let A = A₀ ⊕ A₁ ⊕ A₂ ⊕ ⋯ be a graded algebra over a field of characteristic 0. Then HP\*(A) ≅ HP\*(A₀), so HP\*(A\[t\]) ≅ HP\*(A), while HC₀(k\[t\]) = k\[t\] differs from HC₀(k) = k (Goodwillie).

**How the definition helps.** Goodwillie shows that S kills the action of every derivation on HC, so derivations act as zero on HP (our own summary). The Euler derivation multiplies weight n by n, so in characteristic 0 every positive weight vanishes in HP (our own summary). HC keeps these weights, as HC₀(k\[t\]) = k\[t\] shows.

**Paper or page:** [Equivariant periodic cyclic homology for ample groupoids](https://arxiv.org/abs/2506.06503). It says: “In analogy to the group case, we show that the theory satisfies homotopy invariance, stability, and excision in both variables.”

**Sources:**

- [T. G. Goodwillie, Cyclic homology, derivations, and the free loopspace, Topology 24 (1985) 187–215](https://doi.org/10.1016/0040-9383(85)90055-2)

### Periodic cyclic homology is unchanged by nilpotent extensions

**Remember:** Inverting the periodicity operator erases whatever a power of it kills.

*Rules out counterexamples. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 19D50. arXiv math.KT. Level 4: research.

**Definition.** Periodic cyclic homology HP is the homology of Hochschild chains in Laurent series C((u)), with u of degree −2 and differential b + uB. Inverting u makes Connes' periodicity operator S invertible, so a relative group on which a power of S is zero disappears (our own).

**Problem.** Let I be a nilpotent ideal in an algebra A over a field k of characteristic zero. Then reduction gives HP\*(A) ≅ HP\*(A/I) (Goodwillie), though HC₀(k\[ε\]/(ε²)) has dimension two and HC₀(k) has dimension one.

**How the definition helps.** Goodwillie's nilinvariance theorem shows that relative HP vanishes for a nilpotent ideal in characteristic 0, so the periodic theory removes the defect. In HC₀ of the dual numbers the class of ε survives, so ordinary HC is not nilinvariant (our own example).

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566). It says: “Let k be a field of characteristic 0 and v: B → A be a nilpotent extension of connective k-dg-algebras. Then the induced map HP(B/k) → HP(A/k) is an equivalence.”

**Sources:**

- [T. G. Goodwillie, Cyclic homology, derivations, and the free loopspace, Topology 24 (1985) 187–215](https://doi.org/10.1016/0040-9383(85)90055-2)

### Periodic cyclic homology satisfies excision for every ideal

**Remember:** Periodize the mixed complex by allowing Laurent series in u.

*Rules out counterexamples. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT. Level 4: research.

**Definition.** Periodic cyclic homology HP is the homology of Hochschild chains in Laurent series C((u)), with u of degree −2 and differential b + uB. For an ideal I of A, relative HP(A, I) is the fiber of A → A/I on these complexes. HP(I) is the fiber of the augmentation from the unitization of I to k on these complexes.

**Problem.** Over a characteristic-zero field k, periodic cyclic homology satisfies excision for every algebra extension, by the Cuntz–Quillen theorem. For upper triangular 2×2 matrices A and I = k·e₁₂, ordinary HC₀(I) = k but HC₀(A,I) = 0.

**How the definition helps.** With HP(I) defined through the unitization, excision is the statement HP(I) ≅ HP(A, I), which Cuntz and Quillen prove through quasi-free algebras (our own summary). For upper triangular A and I = k·e₁₂, I² = 0 gives HC₀(I) = I/\[I, I\] = I (our own computation). But e₁₁e₁₂ − e₁₂e₁₁ = e₁₂, so I is a boundary in the relative complex and HC₀(A, I) = 0 (our own computation).

**Wikipedia:** [Joachim Cuntz](https://en.wikipedia.org/wiki/Joachim_Cuntz). It says: “In collaboration with Daniel Quillen, he developed a new approach to cyclic cohomology and proved the excision property of periodic cyclic theory.”

**Sources:**

- [J. Cuntz, D. Quillen, Excision in bivariant periodic cyclic cohomology, Invent. Math. 127 (1997) 67–98](https://doi.org/10.1007/s002220050115)

### Pointed bars separate coefficients from monomials

**Remember:** The coefficients and the monomials have separate cyclic bar factors.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a monoid with an absorbing zero, the pointed cyclic bar has the lists of q+1 elements in degree q, with lists containing zero collapsed. Faces multiply cyclic neighbors, degeneracies insert the unit, and the cyclic operator rotates lists. The ring A\[x\]/(xⁿ) is the pointed monoid ring of {0, 1, x, …, xⁿ⁻¹} over A, so coefficients and monomials multiply separately (our own).

**Problem.** Let A be a unital ring, n ≥ 1, and M the pointed monoid {0, 1, x, …, xⁿ⁻¹} with xⁿ = 0. Then THH(A\[x\]/(xⁿ)) is rotation-equivariantly equivalent to THH(A) smashed with the pointed cyclic bar of M.

**How the definition helps.** Since A\[x\]/(xⁿ) is a pointed monoid ring over A, its cyclic bar splits into coefficient factors and monomial factors (our own). Multiplying neighbors and rotating lists respect this splitting (our own). Hesselholt and Madsen identify the result with THH(A) smashed with the pointed cyclic bar of M, compatibly with rotation (our own).

**Paper or page:** [From manifolds to invariants of Eₙ-algebras](https://arxiv.org/abs/1210.7909v1). It says: “Both maps in the zig-zag are weak equivalences if the unit map of A, S → A, is a cofibration in Sp.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Polynomial evaluation breaks Goodwillie’s comparison

**Remember:** A nilpotent extension kills an ideal whose sufficiently long products all vanish.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** A nilpotent extension is a surjective ring map with kernel I such that Iᵏ = 0 for some k. Its relative groups are the homotopy fibers of the induced maps.

**Problem.** For a nilpotent extension of rational algebras and n ≥ 1, Goodwillie identifies rational relative Kₙ with relative HCₙ₋₁. Evaluation at zero, ℚ\[t\] → ℚ, is not nilpotent, and the comparison fails for it in degree one.

**How the definition helps.** The kernel tℚ\[t\] has no power equal to zero, since tᵏ ≠ 0, so the hypothesis excludes this map (our own). Evaluation splits, so relative K₁ is zero, as both unit groups are ℚ×, but relative HC₀ is tℚ\[t\].

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “nilpotent two-sided ideal I”

**Sources:**

- [Thomas G. Goodwillie, Relative Algebraic K-Theory and Cyclic Homology](https://doi.org/10.2307/1971283)

### Positive weights give relative topological Hochschild homology

**Remember:** Weight zero survives evaluation, and positive weights form its fiber.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For n ≥ 1, the pointed cyclic bar of the monomials of A\[x\]/(xⁿ) has circular lists of 1, x, …, xⁿ⁻¹ and zero. Lists containing zero collapse to a basepoint, and any other list has a weight, its total exponent. Faces and rotation preserve weight, so the bar is a wedge of weight pieces (our own).

**Problem.** Let A be a unital ring and n ≥ 1. Evaluation at zero induces THH(A\[x\]/(xⁿ)) → THH(A), whose fiber is THH(A) smashed with the positive-weight pieces of the pointed cyclic bar.

**How the definition helps.** Evaluation at zero keeps exactly the weight-zero piece, and constants give a section (our own). So its fiber is the sum of the positive-weight pieces. Hesselholt and Madsen identify THH(A\[x\]/(xⁿ)) with THH(A) smashed with this pointed bar.

**Paper or page:** [From manifolds to invariants of Eₙ-algebras](https://arxiv.org/abs/1210.7909v1). It says: “Both maps in the zig-zag are weak equivalences if the unit map of A, S → A, is a cofibration in Sp.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Quotient cubes compare relative traces

**Remember:** Kill each subset of variables, then take fibers in every direction.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative ring A and positive exponents nᵢ, set each subset of the variables of A\[x₁, …, xᵣ\]/(x₁<sup>n₁</sup>, …, xᵣ<sup>nᵣ</sup>) to zero. This gives a cube of quotient rings in which each edge kills one variable, so its kernel is nilpotent (our own). Multi-relative K-theory or TC is the iterated homotopy fiber of the functor on this cube.

**Problem.** After completion at any prime, the cyclotomic trace from algebraic K-theory to topological cyclic homology is an equivalence on multi-relative theories. This applies to the cube of quotients of A\[x₁, …, xᵣ\]/(xᵢ<sup>nᵢ</sup>) by subsets of the variables.

**How the definition helps.** Each edge of the cube is a nilpotent extension, so McCarthy's theorem makes the trace an equivalence on its fiber after prime completion (our own). Iterated fibers are finite limits, which commute with completion and preserve equivalences (our own).

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566v1). It says: “Let v: B → A be a nilpotent extension of connective ring spectra.”

**Sources:**

- [Vigleik Angeltveit, Teena Gerhardt, Michael A. Hill and Ayelet Lindenstrauss, On the algebraic K-theory of truncated polynomial algebras in several variables](https://doi.org/10.1017/is013010011jkt243)
- [Randy McCarthy, Relative algebraic K-theory and topological cyclic homology](https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/6552-11511_2006_Article_BF02392743.pdf)

### Real topological Hochschild homology of perfectoid rings is free

**Remember:** The degree-two sphere is ℂ compactified, with conjugation remembered.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P91. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let σ be the sign representation of ℤ/2 on ℝ. The representation sphere S¹⁺σ is the one-point compactification of ℂ with complex conjugation, so its underlying sphere is S² (our own).

**Problem.** For a perfectoid ring R, the p-completed spectrum THR(R;ℤp) is the free associative algebra over HR on the representation sphere S¹⁺σ. Forgetting the ℤ/2 action, this gives THH(R;ℤp) ≃ HR\[u\] with u in degree 2.

**How the definition helps.** Using S¹⁺σ in place of S² lets the equivariant answer take the shape of Bökstedt periodicity, a free algebra on one generator. Forgetting the action turns S¹⁺σ into S², which gives THH(R;ℤp) ≃ HR\[u\] (our own). The paper proves the result by real analogues of the Bhatt–Morrow–Scholze arguments.

**Paper or page:** [Real Topological Hochschild Homology of Perfectoid Rings](https://arxiv.org/abs/2310.11183), [Real Topological Hochschild Homology of Perfectoid Rings](https://arxiv.org/abs/2310.11183). It says: “Then there is a natural equivalence of normed ℤ/2-spectra THR(R;ℤp) ≃ T<sub>HR</sub>(S<sup>1+σ</sup>) := ⊕ₙ Σ<sup>n+σn</sup> HR, where T<sub>HR</sub>(S<sup>1+σ</sup>) denotes the free associative HR-algebra on S<sup>1+σ</sup>.”

**Sources:**

- [Jens Hornbostel and Doosung Park, Real Topological Hochschild Homology of Perfectoid Rings, arXiv:2310.11183 (2025)](https://arxiv.org/abs/2310.11183)

### TC⁻ over 𝕊\[z\] gives Breuil–Kisin modules

**Remember:** Frobenius pullback agrees with the module once E is inverted.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 14F30. arXiv math.KT, math.AG. Level 4: research.

**Definition.** Let K be a finite extension of ℚₚ with uniformizer ϖ and residue field k. Let 𝔖 = W(k)\[\[z\]\], with Frobenius φ extending the Witt Frobenius by z ↦ zᵖ. A Breuil–Kisin module is a finite 𝔖-module M with an isomorphism (φ\*M)\[1/E\] ≅ M\[1/E\], where E is the Eisenstein polynomial of ϖ.

**Problem.** For a smooth proper 𝒪K-linear stable ∞-category 𝒯, the groups πᵢTC⁻(𝒯/𝕊\[z\];ℤp) are Breuil–Kisin modules for all large i. The Frobenius comes from the cyclotomic Frobenius.

**How the definition helps.** Sending z to ϖ makes relative TC⁻ a module over 𝔖, by the coefficient calculation of Liu and Wang (our own summary). The cyclotomic Frobenius gives the isomorphism after inverting E, and smooth properness gives finite modules in high degrees.

**Paper or page:** [Towards the p-adic Hodge theory for non-commutative algebraic varieties](https://arxiv.org/abs/2305.00292). It says: “Then there is a natural number n such that the homotopy groupy group π<sub>i</sub> TC⁻(𝒯/𝕊\[z\];ℤp) is a Breuil-Kisin module for any i≥n, where Frobenius comes from cyclotomic Frobenius map.”

**Sources:**

- [Towards the p-adic Hodge theory for non-commutative algebraic varieties, arXiv:2305.00292](https://arxiv.org/abs/2305.00292)

### The fiber of the cyclotomic trace is rigid for every henselian pair

**Remember:** K-theory minus TC is the fiber of the cyclotomic trace.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 19D50. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For a commutative ring A, Kⁱⁿᵛ(A) is the homotopy fiber of the cyclotomic trace K(A) → TC(A), the part of K-theory that TC does not see. With coefficients, Kⁱⁿᵛ(A; ℤ/n) is the cofiber of multiplication by n on it.

**Problem.** For every henselian pair (A, I) and every n ≥ 1, the map Kⁱⁿᵛ(A; ℤ/n) → Kⁱⁿᵛ(A/I; ℤ/n) is an equivalence. No condition that n be invertible in A is needed.

**How the definition helps.** The trace fiber leaves out the part of K-theory that TC carries, which is the part that changes under henselian reduction (our own summary). Clausen, Mathew and Morrow prove that the fiber is then rigid for every n. For odd p, K₁(ℤₚ; ℤ/p) ≅ ℤ/p but K₁(𝔽ₚ; ℤ/p) = 0, so K-theory itself is not rigid (our own example).

**Wikipedia:** [Rigidity (K-theory)](https://en.wikipedia.org/wiki/Rigidity_%28K-theory%29). It says: “If n is not invertible in A, the result as above still holds, provided that K-theory is replaced by the fiber of the cyclotomic trace map between K-theory and topological cyclic homology.”

**Sources:**

- [D. Clausen, A. Mathew and M. Morrow, K-theory and topological cyclic homology of henselian pairs, Journal of the American Mathematical Society 34 (2021) 411–473](https://doi.org/10.1090/jams/961)

### The Laurent quotient shifts degrees

**Remember:** Periodic chains modulo negative cyclic chains are cyclic chains shifted by two.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** Negative cyclic chains are Hochschild chains with power series in u, of degree −2, and differential b + uB. Periodic chains also allow finitely many negative powers of u. Their quotient, the strictly negative powers, is the cyclic complex shifted up two degrees (our own).

**Problem.** Let B → A be a surjective map of rational algebras with nilpotent kernel. The boundary map identifies relative cyclic homology in degree n − 1 with relative negative cyclic homology in degree n.

**How the definition helps.** Relative periodic homology vanishes by Goodwillie's nilpotent invariance, so the boundary map of the quotient sequence is an isomorphism (our own). It goes from quotient degree n + 1, which is cyclic degree n − 1, to negative cyclic degree n (our own).

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566v1). It says: “the induced map HP(B/k) → HP(A/k) is an equivalence.”

**Sources:**

- [Thomas G. Goodwillie, Relative algebraic K-theory and cyclic homology](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/goodwillie-cyclic.pdf)

### The May filtration gives fpqc descent for THH

**Remember:** Filter by the Whitehead tower, and descent reduces to discrete graded rings.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P43. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a connective commutative ring spectrum A, filter A by its connective covers, the Whitehead tower. Filter each tensor power in the cyclic bar by adding the indices of the factors, and realize to get the May filtration on THH(A). Its associated graded is THH of π\*A viewed as a graded ring (our own summary).

**Problem.** THH, its homotopy fixed points for the circle and for Cₚ, its homotopy orbits and Tate construction for Cₚ, and TC all satisfy fpqc descent. This holds as functors from connective commutative ring spectra to spectra.

**How the definition helps.** The associated graded turns descent for A into descent for the graded ring π\*A, and faithful flatness passes to these rings (our own). There descent follows from flat descent of THH for ordinary rings, proved by Bhatt, Morrow and Scholze (our own summary). Completeness of the filtration passes descent back to THH, and then to the other functors (our own summary).

**Paper or page:** [The May filtration on THH and faithfully flat descent](https://arxiv.org/abs/2004.12600), [The May filtration on THH and faithfully flat descent](https://arxiv.org/abs/2004.12600). It says: “Then F satisfies descent for the fpqc topology on CAlg≥0.”

**Sources:**

- [Liam Keenan, The May filtration on THH and faithfully flat descent, arXiv:2004.12600 (2020)](https://arxiv.org/abs/2004.12600)

### The sphere unit determines Dennis trace

**Remember:** K-theory is maps out of finite spectra in noncommutative motives.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** An additive invariant ignores equivalences of module categories, preserves filtered colimits, and sends split exact sequences to direct sums. In the universal category of such invariants, connective K-theory is represented: it is the spectrum of maps out of the motive of finite spectra.

**Problem.** Natural transformations from connective K-theory to topological Hochschild homology have homotopy classes indexed by ℤ. The topological Dennis trace corresponds to 1.

**How the definition helps.** By the Yoneda lemma, a transformation out of a represented functor is fixed by its value on the identity of the representing object (our own). At finite spectra, THH is the sphere spectrum, whose π₀ is ℤ (our own). Blumberg, Gepner and Tabuada prove the representation and identify the Dennis trace with the unit (our own).

**nLab:** [Dennis trace](https://ncatlab.org/nlab/show/Dennis+trace). It says: “The Dennis trace is a natural morphism from algebraic K-theory of rings to Hochschild homology”

**Sources:**

- [Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal characterization of higher algebraic K-theory](https://msp.org/gt/2013/17-2/gt-v17-n2-p03-p.pdf)

### Topological André–Quillen homology gives HKR for ring spectra

**Remember:** TAQ is the module of differentials, and maps out are derivations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P43. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative ring spectrum A, TAQ(A) is the A-module of differentials over the sphere. For every A-module M, maps TAQ(A) → M match sections of the square-zero extension A ⊕ M → A as commutative ring spectra.

**Problem.** For a connective E∞ ring A smooth over the sphere in the sense of McCarthy and Minasian, THH(A) is free commutative over A on ΣTAQ(A). This gives the spectral analogue of the Hochschild homology description by differential forms.

**How the definition helps.** TAQ plays the role of Kähler differentials, so the HKR theorem keeps its classical shape over the sphere spectrum. The derivative map THH(A) → ΣTAQ(A) always exists. McCarthy and Minasian show that for smooth A it has a section that extends to an equivalence from the free algebra.

**nLab:** [Hochschild-Kostant-Rosenberg theorem](https://ncatlab.org/nlab/show/Hochschild-Kostant-Rosenberg+theorem). It says: “For a connective smooth E-∞ ring A, the (natural) derivative map THH(A) → Σ TAQ(A) from topological Hochschild homology to topological André-Quillen homology has a section”

**Sources:**

- [Randy McCarthy and Vahagn Minasian, HKR theorem for smooth S-algebras, J. Pure Appl. Algebra 185 (2003)](https://doi.org/10.1016/s0022-4049(03)00089-6)

### Topological cyclic homology preserves fibers

**Remember:** TC is maps out of the cyclotomic sphere.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A cyclotomic spectrum has a circle action and compatible maps to the Tate constructions for the prime-order rotation groups Cₚ. Topological cyclic homology is the spectrum of cyclotomic maps from the sphere, so it is maps out of a fixed object (our own).

**Problem.** Topological cyclic homology carries fiber sequences of cyclotomic spectra to fiber sequences of spectra.

**How the definition helps.** Maps out of a fixed object preserve limits in the target, and fibers are limits (our own). Nikolaus and Scholze identify this TC with the older fixed-point construction for bounded-below spectra (our own).

**nLab:** [cyclotomic spectrum](https://ncatlab.org/nlab/show/cyclotomic+spectrum). It says: “where the circle action on the Tate spectrum comes from the canonical identification S¹/Cₚ ≃ S¹.”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Trace fibers simplify nilpotent comparisons

**Remember:** An unchanged trace fiber makes the relative trace an equivalence.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a ring R, the trace fiber is the homotopy fiber of the cyclotomic trace K(R) → TC(R), the part of K-theory that TC misses. For an ideal I, each relative theory is the fiber of its map from R to R/I.

**Problem.** Suppose some power of the ideal I is zero. Then for every prime p, the cyclotomic trace identifies relative K-theory with relative TC after p-completion.

**How the definition helps.** Fibers commute, so the relative trace is an equivalence exactly when the trace fiber does not change from R to R/I (our own explanation). The Dundas–Goodwillie–McCarthy theorem says that it does not change after p-completion.

**nLab:** [topological cyclic homology](https://ncatlab.org/nlab/show/topological+cyclic+homology). It says: “the difference between them and K(R) is "locally constant”

**Sources:**

- [Bjørn Dundas, Thomas Goodwillie and Randy McCarthy, The Local Structure of Algebraic K-Theory](https://doi.org/10.1007/978-1-4471-4393-2)

### Scaling erases split square-zero ideals

**Remember:** Scale the square-zero part down to zero along the affine line.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** The split square-zero extension of a complex algebra A by an A-bimodule I is A ⊕ I with product (a,i)(b,j) = (ab, aj+ib), so I² = 0. Scaling I by t, (a,i) ↦ (a,ti), is then an algebra map for every t, including t = 0 (our own).

**Problem.** For a complex algebra A and an A-bimodule I, the split square-zero extension A ⊕ I has the same semi-topological K-theory as A.

**How the definition helps.** The scaling maps form a polynomial family joining the identity at t = 1 to projection then inclusion at t = 0 (our own argument). Semi-topological K-theory turns this algebraic family into a homotopy, so projection and inclusion are inverse equivalences.

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566). It says: “Then the induced map Kˢᵗ(B) → Kˢᵗ(A) is an equivalence.”

**Sources:**

- [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture, Theorem 1.2](https://arxiv.org/abs/2102.01566)

### Coherent sheaves give singular localization

**Remember:** Coherent sheaves allow the pieces supported on a closed subset.

*Makes the theorem clean to state or prove.* MSC 19E08 (\\(K\\)-theory of schemes). arXiv math.KT. Level 4: research.

**Definition.** On a Noetherian scheme, G-theory is the algebraic K-theory of coherent sheaves, those locally given by modules with finitely many generators and relations. Unlike vector bundles, coherent sheaves include sheaves supported on a closed subset, such as sheaves pushed forward from a closed subscheme (our own).

**Problem.** For a Noetherian scheme, a closed subscheme, the whole scheme, and the open complement fit into a long exact sequence in G-theory.

**How the definition helps.** Restriction to the open set kills exactly the sheaves supported on the closed subset, so Quillen's localization theorem gives the sequence (our own explanation). A supported sheaf has a filtration with layers on the closed subscheme, so Quillen's dévissage theorem identifies the supported term with its G-theory.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “He was, however, able to prove its existence for a related theory called G-theory”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Derived tensor gives the projection formula

**Remember:** Perfect complexes act on coherent classes by derived tensor product.

*True by definition.* MSC 19E08 (\\(K\\)-theory of schemes), 14C35. arXiv math.KT. Level 4: research.

**Definition.** For a Noetherian scheme X, G₀(X) is generated by bounded complexes with coherent cohomology, and K₀(X) by perfect complexes. In both, \[B\] = \[A\] + \[C\] for each exact triangle A → B → C → A\[1\]. A perfect complex acts on G₀ by derived tensor product.

**Problem.** Let f: X → Y be a proper map of Noetherian schemes. Then f∗(α · f\*β) = f∗α · β for α in G₀(X) and β in K₀(Y).

**How the definition helps.** Since classes come from derived complexes, the identity is the derived projection formula Rf∗(M ⊗ᴸ Lf\*P) ≅ Rf∗M ⊗ᴸ P for perfect P (our own explanation). Properness keeps cohomology coherent, so both sides are G₀ classes.

**Paper or page:** [Perfect](https://stacks.math.columbia.edu/tag/0FDM). It says: “Then we have f∗(α ⋅ f⁎β) = f∗α ⋅ β for α ∈ K′₀(X) and β ∈ K₀(Y).”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes instead of vector bundles let K-theory glue along open covers

**Remember:** Use perfect complexes, not vector bundles, and K-theory glues along open covers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19E08 (\\(K\\)-theory of schemes), 18F25. arXiv math.KT, math.AG. Level 4: research.

**Definition.** A perfect complex on a scheme is locally quasi-isomorphic to a bounded complex of finite-rank vector bundles, so perfectness is local (our own). Thomason–Trobaugh nonconnective K-theory is the K-theory of perfect complexes, with quasi-isomorphisms as weak equivalences.

**Problem.** On a quasi-compact quasi-separated scheme, nonconnective K-theory of perfect complexes satisfies localization for quasi-compact open immersions and Mayer–Vietoris for quasi-compact open covers.

**How the definition helps.** Perfectness is local, so it makes sense even on schemes with few global vector bundles (our own explanation). The Thomason–Trobaugh localization and descent theorems then give the sequences, with the localization fiber given by perfect complexes supported on the complement.

**nLab:** [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction). It says: “Thomason-Trobaugh K-theory coincides with Quillen K-theory for schemes that admit an ample family of line bundles, but has the advantage of better global descent properties.”

**Sources:**

- [R. W. Thomason, Thomas Trobaugh, Higher algebraic K-theory of schemes and of derived categories, The Grothendieck Festschrift vol. III, Progress in Math. 88 (1990) 247–435](https://doi.org/10.1007/978-0-8176-4576-2_10)

### Bott periodicity shifts K-theory slices

**Remember:** Covers by Tate weight, slices as their cofibers, suspension shifts weight.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F42. arXiv math.KT, math.AG. Level 4: research.

**Definition.** The weight-i effective cover of a motivic spectrum E is the universal map to E from i-fold Tate suspensions of effective spectra. The ith slice is the cofiber of the map from cover i+1 to cover i. Tate suspension carries slice i of E to slice i+1 of the suspension of E (our own).

**Problem.** Over a perfect field admitting resolution of singularities, slice zero of logarithmic K-theory is the integral logarithmic motivic cohomology spectrum. Slice i is its i-fold Tate suspension, using inverse suspension for negative i.

**How the definition helps.** Bott periodicity identifies logarithmic K-theory with its own Tate suspension, so every slice is a Tate suspension of slice zero (our own). Binda, Park and Østvær identify slice zero with integral logarithmic motivic cohomology.

**Paper or page:** [On the logarithmic slice filtration](https://arxiv.org/abs/2403.03056). It says: “\\mathrm{s}<sub>i</sub> \\mathbf{KGL}\\simeq \\widetilde{\\mathrm{s}}<sub>i</sub> \\mathbf{KGL}\\simeq \\mathbf{M}\\mathbb {Z}(i)\[2i\]”

**Sources:**

- [Federico Binda, Doosung Park and Paul Arne Østvær, On the logarithmic slice filtration (2025)](https://arxiv.org/abs/2403.03056)

### Complex volume becomes a motivic period

**Remember:** One extension, ℚ(2) inside and ℚ(0) on top, carries a period.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 57K32, 19F27. arXiv math.KT, math.GT. Level 4: research.

**Definition.** In mixed Tate motives over a number field k, an extension of ℚ(0) by ℚ(2) is an exact sequence 0 → ℚ(2) → M → ℚ(0) → 0. Two extensions are equal if an isomorphism between them is the identity on both ends. The Beilinson regulator assigns each class a complex number, its period (our own).

**Problem.** Let M be a complete oriented finite-volume hyperbolic three-manifold with invariant trace field k contained in the algebraic numbers. Its normalized projective Chern–Simons invariant is the Beilinson regulator of a mixed Tate extension over k, modulo π²ℚ.

**How the definition helps.** The extension puts the Chern–Simons invariant in the domain of one regulator, so the theorem becomes a period computation (our own). Lee constructs the extension and identifies its period with the normalized invariant, using the dilogarithm formula for the regulator on shape symbols (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “equals the normalized PSL₂(ℂ)-Chern-Simons invariant”

**Sources:**

- [Dong Uk Lee, Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties, Theorem 4.2.4 (2025)](https://arxiv.org/abs/2502.11950v1)

### Real unit regulators are logarithms

**Remember:** The real projection forgets the argument of a unit.

*True by definition.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F43. arXiv math.KT, math.AG. Level 4: research.

**Definition.** An algebraic unit f, a regular function with regular inverse, has a weight-one regulator class from local logarithms, which differ by integer multiples of 2πi. The real Deligne model reduces values modulo the imaginary line 2πiℝ, so it keeps only real parts (our own).

**Problem.** For a smooth complex quasi-projective variety, the real Beilinson regulator sends an algebraic unit f to the real function log\|f\|.

**How the definition helps.** The real part of every branch of log f is log\|f\|, so the branch choices disappear and one global function remains (our own). The comparison with Deligne–Beilinson cohomology uses the logarithmic pole condition on df/f at the boundary (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “designed to be a target for the Beilinson regulator from motivic cohomology”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, Proposition 2.12 and sections 2.15–2.17](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Reduced ranks give twisted coefficients

**Remember:** Use the ranks the twisted modules actually have as coefficients.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** For an Azumaya algebra A on X, the reduced rank of a projective A-module is its rank as a vector bundle under local Morita equivalence. The rank sheaf is the Nisnevich sheafification of the images of reduced rank on K₀(A) over each open. It records which ranks A-modules actually have, such as multiples of d for a division algebra of dimension d² (our own).

**Problem.** For an Azumaya algebra A on a smooth variety X in characteristic zero, a spectral sequence converges to K-theory of A-modules in degree −p − q. Its E₂ term at (p,q) is motivic cohomology of the rank sheaf, in degree p − q and weight −q.

**How the definition helps.** The rank sheaf records which ranks occur, so one coefficient formula also covers algebras that do not split (our own explanation). The theorem identifies the successive layers of A-twisted K-theory with motivic cohomology in this sheaf.

**Paper or page:** [Twisted K-theory in motivic homotopy theory](https://arxiv.org/abs/2110.09203). It says: “Then there is a strongly convergent spectral sequence”

**Sources:**

- [Elden Elmanto, Denis Nardin and Maria Yakerson, Twisted K-theory in motivic homotopy theory (2021 preprint)](https://arxiv.org/abs/2110.09203)

### Thickened blow-up covers retain nilpotents

**Remember:** To recover algebraic K-theory, keep the whole tower of thickenings.

*Rules out counterexamples.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F42. arXiv math.KT, math.AG. Level 4: research.

**Definition.** A procdh cover is a Nisnevich cover, or a proper modification, an isomorphism off a closed center, together with all thickenings of that center. Keeping the thickenings keeps nilpotent information, which K-theory sees (our own). The weight-n procdh motivic complex is the left Kan extension of the motivic complex from smooth schemes over a prime field, sheafified for this topology.

**Problem.** For every finite-dimensional Noetherian scheme X over a prime field, algebraic K-theory has a complete multiplicative filtration. Its quotient in weight n is the procdh motivic complex of weight n shifted by 2n degrees.

**How the definition helps.** Keeping the thickenings lets the quotients see nilpotents, as K-theory does (our own). For ℚ\[ε\]/(ε²), the units 1 + aε give K₁ classes that a topology identifying a scheme with its reduction would lose. Kelly and Saito prove the filtration and identify its quotients.

**Paper or page:** [A procdh topology](https://arxiv.org/abs/2401.02699). It says: “there exists a complete multiplicative decreasing ℕ-indexed filtration”

**Sources:**

- [Shane Kelly and Shuji Saito, A procdh topology](https://arxiv.org/abs/2401.02699)

### Bott inversion gives periodicity

**Remember:** After Bott inversion, a shift by two changes nothing.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let ℓ ≥ 5 be a prime invertible in a commutative ring R that contains a primitive ℓth root of unity. Let β in K₂(R; ℤ/ℓ) be a Bott class with that root as boundary. The Bott-inverted group in degree n is the direct limit of Kₙ₊₂ⱼ(R; ℤ/ℓ) over j ≥ 0, along multiplication by β.

**Problem.** Multiplication by β identifies each Bott-inverted group with the group two degrees higher.

**How the definition helps.** Multiplication by β shifts the direct system by one step, and dropping the first term does not change a direct limit (our own proof). Ordinary finite-coefficient K-groups need not be periodic. The deep part is Thomason's comparison of Bott-inverted K-theory with étale cohomology.

**nLab:** [Snaith theorem](https://ncatlab.org/nlab/show/Snaith+theorem). It says: “The localization of E at β is the homotopy colimit over the iterated multiplication with β”

**Sources:**

- [Robert Thomason, Algebraic K-theory and étale cohomology (1985)](https://doi.org/10.24033/asens.1495)

### Conormal sums correct Adams pushforwards

**Remember:** θʲ(L) times 1 − \[L\] is 1 − \[L\]ʲ.

*Makes the theorem clean to state or prove.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT. Level 4: research.

**Definition.** Let i be the zero section of a line bundle E on a smooth quasi-projective variety, with conormal line L = E∨. For j ≥ 1, define θʲ(L) = 1 + \[L\] + ⋯ + \[L\]ʲ⁻¹ in K₀, so (1 − \[L\])θʲ(L) = 1 − \[L\]ʲ (our own).

**Problem.** For the Adams operation ψʲ, which raises line bundles to their jth powers, ψʲ(i∗x) = i∗(θʲ(L) · ψʲ(x)) for every class x in K₀.

**How the definition helps.** Pulling i∗x back along i multiplies x by 1 − \[L\], by the two-term resolution of the zero section. Applying ψʲ turns this factor into 1 − \[L\]ʲ = (1 − \[L\])θʲ(L), which gives the formula after pullback. Pullback along the zero section is an isomorphism by homotopy invariance, so the formula holds before pullback.

**Paper or page:** [The Riemann-Roch theorem for the Adams operations](https://arxiv.org/abs/2211.10178). It says: “is the conormal bundle”

**Sources:**

- [A. Navarro and J. Navarro, The Riemann-Roch theorem for the Adams operations (2022 preprint)](https://arxiv.org/abs/2211.10178)

### Higher Chow groups split rational K-theory into weight pieces

**Remember:** Take cycles meeting all faces properly, alternate their restrictions, and take homology.

*Makes the theorem clean to state or prove.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories), 19E15, 14C25. arXiv math.KT, math.AG. Level 4: research.

**Definition.** Bloch's cycle complex has, in degree r, the free abelian group on integral codimension-p subvarieties of X × Δʳ that meet every face properly. Its differential is the alternating sum of restrictions to faces, and its nth homology is the higher Chow group CHᵖ(X, n).

**Problem.** For X smooth and quasi-projective over a field, Kₙ(X) ⊗ ℚ ≅ ⊕ₚ CHᵖ(X, n) ⊗ ℚ. The summand of weight p is the p-th graded piece of the γ-filtration on Kₙ(X) ⊗ ℚ.

**How the definition helps.** Higher Chow groups define each weight piece of rational K-theory directly by cycles, where before they were only eigenspaces of Adams operations (our own). Bloch proved the comparison through a localization sequence for his groups, which rests on his moving lemma (our own summary). The later motivic spectral sequence to K-theory degenerates after tensoring with ℚ, as quoted.

**nLab:** [motivic cohomology](https://ncatlab.org/nlab/show/motivic+cohomology). It says: “With rational coefficients, the motivic cohomology groups of X are the associated graded of the γ-filtration on the rational algebraic K-theory groups of X (at least if X is regular).”

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology), [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “As in topology, the spectral sequence degenerates after tensoring with the rationals.”

**Sources:**

- [S. Bloch, Algebraic cycles and higher K-theory, Advances in Mathematics 61 (1986) 267–304](https://doi.org/10.1016/0001-8708(86)90081-2)

### Motivic Bott shifts preserve K-theory

**Remember:** Invert the projective-line class to shift degree and weight together.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Give the suspension spectrum of ℙ<sup>∞</sup> with a disjoint basepoint its product from tensor product of line bundles. Its Bott class, of bidegree (2,1), is the reduced class of ℙ¹ ⊂ ℙ<sup>∞</sup>, and Bott localization makes multiplication by it invertible.

**Problem.** For a smooth variety X over a field, motivic K-cohomology in degree p and weight q equals algebraic K-theory in degree 2q − p. Shifting the two indices by (2,1) preserves this group.

**How the definition helps.** Multiplication by the inverted Bott class shifts degree and weight by (2,1) and has an inverse, so the shift preserves the groups (our own explanation). The motivic Snaith theorem identifies this localization with KGL, the spectrum representing algebraic K-theory.

**nLab:** [algebraic K-theory spectrum](https://ncatlab.org/nlab/show/algebraic+K-theory+spectrum). It says: “In particular, KGL-cohomology is (2,1)-periodic”

**Sources:**

- [David Gepner and Victor Snaith, On the motivic spectra representing algebraic cobordism and algebraic K-theory (2009)](https://doi.org/10.4171/DM/276)

### Étale K-theory of a complex variety is topological K-theory

**Remember:** Feed the étale homotopy type to topological K-theory.

*True by definition. Confidence: medium.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories), 14F35. arXiv math.KT, math.AG. Level 4: research.

**Definition.** Fix a prime ℓ invertible on X and v ≥ 1. Dwyer–Friedlander étale K-theory with ℤ/ℓᵛ coefficients applies topological K-theory mod ℓᵛ to the étale homotopy type of X. Topological K-theory mod ℓᵛ sees a space only through its ℓ-completion (our own).

**Problem.** For a complex variety X, étale K-theory of X with ℤ/ℓᵛ coefficients is isomorphic to topological K-theory with ℤ/ℓᵛ coefficients of the space X(ℂ).

**How the definition helps.** For a complex variety, the Artin–Mazur comparison identifies the ℓ-completed étale homotopy type with the ℓ-completed homotopy type of X(ℂ) (our own explanation). Applying topological K-theory mod ℓᵛ to this equivalence gives the result.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “For varieties defined over the complex numbers, étale K-theory is isomorphic to topological K-theory.”

**Sources:**

- [W. G. Dwyer and E. M. Friedlander, Algebraic and étale K-theory, Transactions of the American Mathematical Society 292 (1985) 247–280](https://doi.org/10.1090/S0002-9947-1985-0805962-2)

### Étale Postnikov layers yield descent

**Remember:** Filter the sheaf by homotopy degree to expose ordinary étale cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For an odd prime ℓ invertible on X, étale K-theory mod ℓ is the global sections of the étale hypersheafification of connective K-theory mod ℓ. As a hypersheaf, each of its homotopy sheaves gives a row of étale cohomology in a descent spectral sequence (our own).

**Problem.** For X regular Noetherian of finite étale ℓ-cohomological dimension, the descent spectral sequence converges in degree 2j − s to étale K-theory mod ℓ. Its E₂ terms are Hˢₑₜ(X, μℓ⊗ʲ) in row 2j for j ≥ 0, and zero in odd rows.

**How the definition helps.** Each homotopy sheaf of the hypersheaf gives one row of étale cohomology (our own explanation). Rigidity and the computation over separably closed fields show that these sheaves are μℓ⊗ʲ in degree 2j and zero in odd degrees. Comparison with algebraic K-groups in high degrees needs the Quillen–Lichtenbaum theorem.

**Wikipedia:** [Quillen–Lichtenbaum conjecture](https://en.wikipedia.org/wiki/Quillen%E2%80%93Lichtenbaum_conjecture). It says: “there is a spectral sequence analogous to the Atiyah–Hirzebruch spectral sequence”

**Sources:**

- [Robert Thomason, Algebraic K-theory and étale cohomology (1985)](https://doi.org/10.24033/asens.1495)

### Dividing out divisible elements separates Kₙ

**Remember:** Divisible elements are invisible to Galois groups, so divide them out first.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)), 11S70. arXiv math.NT, math.KT. Level 4: research.

**Definition.** An element of an abelian group is divisible if it is an m-th multiple for every m ≥ 1. The topological Milnor K-group of a higher local field F is Kₙ(F) modulo its divisible elements. Every map to a profinite group kills these elements (our own).

**Problem.** By Fesenko's theorem, Kₙ(F) modulo its divisible elements is the largest separated topological quotient of Kₙ(F) for a suitable higher-dimensional topology. Higher local reciprocity is defined on this quotient.

**How the definition helps.** Every finite quotient kills divisible elements, so the profinite Galois target of reciprocity cannot see them (our own). Fesenko identifies the divisible subgroup with the closure of zero in the higher Milnor K-topology, and quotienting by that closure gives the largest separated quotient.

**Wikipedia:** [Higher local field](https://en.wikipedia.org/wiki/Higher_local_field). It says: “this quotient can also be viewed as the maximal separated topological quotient of the K-group endowed with appropriate higher dimensional topology.”

**Sources:**

- [Ivan Fesenko, Topological Milnor K-groups of higher local fields, in Invitation to Higher Local Fields (2000)](https://doi.org/10.2140/gtm.2000.3.61)

### Iterated residues give Frobenius exponents

**Remember:** Each residue drops one degree until only a Frobenius exponent remains.

*Makes the theorem clean to state or prove.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** An n-dimensional local field has a tower of n complete discrete valuations, each on the previous residue field, ending at a finite field. At each step the tame residue lowers Milnor degree by one. It kills symbols of units and sends {π, u₂, …, uₙ} to {ū₂, …, ūₙ} for a local parameter π.

**Problem.** Send a local parameter to arithmetic Frobenius on the residue field. Then reciprocity, followed by projection to the final finite field, sends a degree-n class to Frobenius raised to its n-fold iterated residue.

**How the definition helps.** Reciprocity is compatible with residue and projection, so iterating the cited square n times reduces degree n to degree zero (our own). Over the final finite field, reciprocity sends 1 to arithmetic Frobenius, which gives the stated exponent.

**Paper or page:** [Reciprocity for Kato-Saito idele class group with modulus](https://arxiv.org/abs/2008.05719v4). It says: “the left vertical arrow is the residue map and the right vertical arrow is the canonical surjection”

**Sources:**

- [Kazuya Kato, A generalization of local class field theory by using K-groups II](https://doi.org/10.3792/pjaa.54.250)

### Locally compact vector spaces turn Moore's reciprocity sequence into a localization sequence

**Remember:** Let F act continuously on locally compact groups, and adeles appear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)), 19F15. arXiv math.KT, math.NT. Level 4: research.

**Definition.** Give a number field F the discrete topology. Objects of LCA(F) are Hausdorff locally compact abelian groups with continuous F-vector space operations, such as F and its adeles (our own). Morphisms are continuous F-linear maps, and exact sequences use closed embeddings and open quotient maps.

**Problem.** For a number field F, K₂(LCA(F)) has profinite completion μ(F), the roots of unity of F. Modulo divisible elements, the K₂ part of the localization sequence is Moore's sequence K₂(F) → ⊕ μ(Fᵥ) → μ(F) → 0, over the noncomplex places v.

**How the definition helps.** Since F and its adeles both lie in LCA(F), one localization sequence holds the global and local K-groups (our own summary). Moore's theorem and class field theory identify its degree-two maps modulo divisible elements. Exactness then gives the Hilbert-symbol product formula.

**Paper or page:** [A non-commutative analogue of Clausen's view on the idèle class group](https://arxiv.org/abs/2109.04331), [A non-commutative analogue of Clausen's view on the idèle class group](https://arxiv.org/abs/2109.04331). It says: “If A is commutative (i.e. a number field), K₂(LCA<sub>A</sub>)<sup>∧</sup> ≅ μ(A), where μ(−) denotes the group of roots of unity.”

**Sources:**

- [O. Braunling, R. Henrard and A.-C. van Roosmalen, A non-commutative analogue of Clausen's view on the idèle class group, arXiv:2109.04331 (2021)](https://arxiv.org/abs/2109.04331)
- [C. C. Moore, Group extensions of p-adic and adelic linear groups, Publications Mathématiques de l'IHÉS 35 (1968) 5–70](https://doi.org/10.1007/BF02698923)

### Milnor K-groups state higher local class field theory

**Remember:** Dimension n needs n entries, so the multiplicative group becomes Kₙ.

*Makes the theorem clean to state or prove.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)), 11S70, 19D45. arXiv math.NT, math.KT. Level 4: research.

**Definition.** An n-dimensional local field is a complete discretely valued field whose residue field is an (n − 1)-dimensional local field, ending at a finite field. Its Milnor K-group Kₙ(F) is generated by symbols {a₁, …, aₙ} of nonzero elements, one entry per dimension (our own). Symbols are multiplicative in each entry and vanish when two adjacent entries sum to 1.

**Problem.** For an n-dimensional local field F, there is a reciprocity map from Kₙ(F) to the Galois group of the maximal abelian extension of F. For each finite abelian extension L of F, it gives an isomorphism from Kₙ(F) modulo norms from Kₙ(L) onto Gal(L/F).

**How the definition helps.** Kₙ(F) takes the place of F×, the source of ordinary local reciprocity, with one entry for each dimension (our own). Kato's higher local reciprocity theorem constructs the map and identifies the norm quotients.

**Wikipedia:** [Higher local field](https://en.wikipedia.org/wiki/Higher_local_field). It says: “The appropriate replacement for the multiplicative group becomes the nth Milnor K-group, where n is the dimension of the field”

**Sources:**

- [Ivan Fesenko and Masato Kurihara (eds.), Invitation to Higher Local Fields, Geometry and Topology Monographs 3 (2000)](https://doi.org/10.2140/gtm.2000.3)
- [Kazuya Kato, Existence theorem for higher local fields, in Invitation to Higher Local Fields (2000)](https://doi.org/10.2140/gtm.2000.3.165)

### Milnor norms pass constant factors

**Remember:** Keep a constant factor on the right through both residues.

*True by definition. Confidence: medium.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let E = F\[t\]/(P) for a monic irreducible P over a field F. To take the norm of x in Kₙᴹ(E), lift x to Kₙ₊₁ᴹ(F(t)) with residue x at P and zero at every other finite point. The norm is minus the residue of the lift at infinity.

**Problem.** Let x be a Milnor class over E and y a Milnor class over F. The norm of x · res(y) is N(x) · y, where res denotes restriction and N denotes the norm.

**How the definition helps.** Multiplying a lift of x on the right by the constant class y lifts x · res(y), since residues commute with constant right factors (our own). Its minus residue at infinity is N(x) · y. Bass–Tate exactness guarantees that lifts exist and that the norm does not depend on the choice.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 \\to K<sub>n</sub><sup>M</sup>(F) \\to K<sub>n</sub><sup>M</sup>(F(t)) \\xrightarrow{\\partial\_\\pi} \\bigoplus\_{(\\pi) \\in \\text{Spec}(F\[t\])} K<sub>n-1</sub>F\[t\]/(\\pi) \\to 0”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Norms give higher reciprocity

**Remember:** Each finite residue contributes its negative residue at infinity.

*True by definition. Confidence: medium.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** At each monic irreducible P, the residue map sends a Milnor class over F(t) to a class one degree lower over F\[t\]/(P). The norm of a class over F\[t\]/(P) is minus the residue at infinity of a lift with only that one finite residue.

**Problem.** For a Milnor class of positive degree on F(t), the sum of the norms of its finite residues equals minus its residue at infinity.

**How the definition helps.** Each norm is minus the residue at infinity of a lift with one prescribed finite residue (our own). By Bass–Tate exactness, subtracting one lift per nonzero finite residue leaves a constant class, whose residue at infinity is zero. Additivity of the residue at infinity gives the sum.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 \\to K<sub>n</sub><sup>M</sup>(F) \\to K<sub>n</sub><sup>M</sup>(F(t)) \\xrightarrow{\\partial\_\\pi} \\bigoplus\_{(\\pi) \\in \\text{Spec}(F\[t\])} K<sub>n-1</sub>F\[t\]/(\\pi) \\to 0”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Symbols generate Brauer torsion

**Remember:** A pure degree-two symbol becomes one cyclic algebra.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let ℓ be a prime invertible in F, with a primitive ℓth root of unity ζ in F. The symbol algebra of a, b ∈ F× is generated by x, y with x<sup>ℓ</sup> = a, y<sup>ℓ</sup> = b and yx = ζxy. It is the image of the Milnor symbol {a, b} in the Brauer group (our own explanation).

**Problem.** Every Brauer class killed by ℓ has a representative that is a tensor product of symbol algebras.

**How the definition helps.** The Merkurjev–Suslin theorem says that the map from degree-two Milnor K-theory mod ℓ to the ℓ-torsion of the Brauer group is an isomorphism. Every Milnor class is a sum of symbols, and a sum of Brauer classes is a tensor product of algebras.

**Wikipedia:** [Norm residue isomorphism theorem](https://en.wikipedia.org/wiki/Norm_residue_isomorphism_theorem). It says: “the case n = 2 is the Merkurjev–Suslin theorem.”

**Sources:**

- [Alexander Merkurjev and Andrei Suslin, K-cohomology of Severi–Brauer varieties and the norm residue homomorphism (1983 English translation)](https://doi.org/10.1070/IM1983v021n02ABEH001793)

### The Hilbert symbol computes K₂ of a local field modulo divisible elements

**Remember:** Let the reciprocity element of a move an mth root of b.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)), 11S70. arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a local field F with m roots of unity, the Hilbert symbol of a, b ∈ F× is Art(a)(β)/β, where βᵐ = b. So it records how the reciprocity element of a moves an mth root of b. It is bilinear and equals one on every pair (a, 1−a) (our own).

**Problem.** For a non-Archimedean local field F, and for F = ℝ, the Hilbert symbol K₂(F) → μ(F) is onto and its kernel is uniquely divisible. So K₂(F) is μ(F) plus a vector space over ℚ.

**How the definition helps.** Bilinearity and triviality on pairs (a, 1−a) are Matsumoto’s relations, so the symbol defines a map on K₂(F) (our own). The local Hilbert-symbol theorem makes this map onto with uniquely divisible kernel. A divisible group is injective, so the kernel splits off as a vector space over ℚ (our own).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “For non-Archimedean local fields, the group K₂(F) is the direct sum of a finite cyclic group of order m, say, and a divisible group K₂(F)ᵐ.”

**Paper or page:** [A non-commutative analogue of Clausen's view on the idèle class group](https://arxiv.org/abs/2109.04331). It says: “the maps hᵥ: K₂(Fᵥ) → μ(Fᵥ) are epimorphisms with uniquely divisible kernels”

**Sources:**

- [C. C. Moore, Group extensions of p-adic and adelic linear groups, Publications Mathématiques de l'IHÉS 35 (1968) 5–70](https://doi.org/10.1007/BF02698923)
- [A. S. Merkurjev, On the torsion in K₂ of local fields, Annals of Mathematics 118 (1983) 375–381](https://doi.org/10.2307/2007033)
- [O. Braunling, R. Henrard and A.-C. van Roosmalen, A non-commutative analogue of Clausen's view on the idèle class group, arXiv:2109.04331 (2021)](https://arxiv.org/abs/2109.04331)

### Absolute values forget unitary monodromy

**Remember:** Taking the absolute value forgets the phase acquired around a loop.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** For two meromorphic functions on a smooth complex curve, the complex regulator gives each loop avoiding their zeros and poles a number χ ≠ 0. The real character is log\|χ\|, which keeps only the size of χ and forgets its phase.

**Problem.** The real character extends across a puncture exactly when the complex character has absolute value one around a small loop there. At zero, the pair (z,−1) gives a real character that extends and a complex character that fails to extend.

**How the definition helps.** Filling a puncture kills its small loop, so a character extends exactly when it is trivial on that loop. The real character is trivial there exactly when \|χ\| = 1, while χ itself must equal 1. Our own example uses Deligne’s local formula, which gives the loop value −1 for (z,−1).

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “from the second algebraic K-theory group to the first Betti cohomology group with coefficients in ℂ\*”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)

### Anderson duality turns Tate–Poitou duality into a fiber sequence of K-theory spectra

**Remember:** Dualize homotopy groups by mapping into the ℤₚ dualizing spectrum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R34, 55P42. arXiv math.KT, math.NT. Level 4: research.

**Definition.** The ℤₚ-Anderson dual of a spectrum X is the spectrum of maps from X into Iℤₚ. Here Iℤₚ is the fiber of I\_ℚₚ → I\_(ℚₚ/ℤₚ), and I<sub>J</sub> represents X ↦ Hom(π₀X, J) for injective J. Its homotopy groups are built from Hom and Ext of the homotopy groups of X into ℤₚ (our own).

**Problem.** Let F be totally real, p an odd prime, and L(R) the K(1)-local K-theory of R. The fiber of L(𝒪F\[1/p\]) → ∏ᵥ∣ₚ L(Fᵥ) is the loop spectrum of the ℤₚ-Anderson dual of L(𝒪F\[1/p\]).

**How the definition helps.** Anderson duality dualizes homotopy groups at the level of spectra, so one fiber sequence records the whole Tate–Poitou duality at once (our own). The work is Blumberg and Mandell’s identification of the fiber, which uses Tate–Poitou duality and the Quillen–Lichtenbaum theorem.

**Paper or page:** [Homotopy groups of spectra and p-adic L-functions over totally real number fields](https://arxiv.org/abs/2206.14783). It says: “The homotopy fiber fib(κ) of the completion map κ : L<sub>K</sub>(1)K(𝒪<sub>F</sub>\[1/p\]) → ∏<sub>v∈Σ</sub> L<sub>K</sub>(1)K(F<sub>v</sub>) in K(1)-local algebraic K-theory is weakly equivalent to ΩI\_ℤₚ L<sub>K</sub>(1)K(𝒪<sub>F</sub>\[1/p\])”

**Sources:**

- [A. J. Blumberg and M. A. Mandell, K-theoretic Tate–Poitou duality and the fiber of the cyclotomic trace, Inventiones Mathematicae 221 (2020) 397–419](https://doi.org/10.1007/s00222-020-00952-z)
- [G. Sala Fernandez, Homotopy groups of spectra and p-adic L-functions over totally real number fields, arXiv:2206.14783 (2022)](https://arxiv.org/abs/2206.14783)

### Bloch symbols give regulator coordinates

**Remember:** Dilogarithm symbols modulo five-term relations, in the kernel of x∧(1−x).

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** The rational Bloch group of a number field F is the kernel of \[x\] ↦ x ∧ (1−x), from rational sums of symbols \[x\] to ∧²F× ⊗ ℚ. Here x runs over F ∖ {0,1}, and symbols are taken modulo the five-term cross-ratio relations.

**Problem.** After extending coefficients to ℚ, the Bloch group identifies with K₃(F), the third algebraic K-group with the same coefficients. Each embedding σ of F into ℂ gives one real coordinate of Borel’s regulator.

**How the definition helps.** The Bloch–Wigner dilogarithm D satisfies the five-term relation, so \[x\] ↦ D(σ(x)) is well defined on the Bloch group (our own description). Suslin’s comparison identifies the rational Bloch group with rational K₃(F). Under it, this evaluation gives Borel’s coordinate at σ up to a fixed nonzero factor.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “is induced by mapping \[x\] in F♭ to iD(σ(x)).”

**Sources:** none listed. No primary source with a working link was found.

### Borel covolumes absorb basis choices

**Remember:** Measure the lattice cell, not the generators that span it.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F and i ≥ 2, the regulator covolume is the cell volume of the lattice that the Borel regulator makes from K₂ᵢ₋₁(F). The regulator has its usual normalization, with one coordinate per conjugate pair of nonreal embeddings, plus one per real embedding for odd i.

**Problem.** Borel’s theorem expresses the first nonzero Taylor coefficient of the Dedekind zeta function at 1−i as a nonzero rational multiple of this volume.

**How the definition helps.** A lattice has a volume without any choice of basis, so the formula needs no generators (our own explanation). The usual determinant of the regulator images of a basis of K₂ᵢ₋₁(F) modulo torsion measures the same volume. Borel proves that the image is a full lattice and relates its volume to the zeta coefficient.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “Let Rᵢ(F) be the covolume of the image of regᵢ,ꜰ.”

**Sources:**

- [Armand Borel, Cohomologie de SLₙ et valeurs de fonctions zêta aux points entiers (1977)](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0/)

### Bott inversion makes étale K-theory periodic

**Remember:** Invert the Bott class and every degree can shift by two.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** Let F be a number field containing a primitive pth root of unity, p odd, and let R = 𝒪F\[1/p\]. The Bott-inverted group in degree n is the direct limit over j of Kₙ₊₂ⱼ(R; ℤ/p) under multiplication by the degree-two Bott class β. In this limit β becomes invertible.

**Problem.** For this ring R with ℤ/p coefficients, multiplication by β identifies étale K-groups two degrees apart.

**How the definition helps.** In a direct limit along β, multiplication by β is an isomorphism, so the inverted groups repeat every two degrees (our own explanation). Ordinary algebraic K-theory has the class β but no inverse. Thomason’s comparison theorem identifies the inverted theory with étale K-theory.

**nLab:** [Bott element](https://ncatlab.org/nlab/show/Bott+element). It says: “A Bott element is an element in a periodic cohomology theory, multiplication by which is invertible.”

**Sources:**

- [Robert Thomason, Algebraic K-theory and etale cohomology (1985)](https://www.numdam.org/articles/10.24033/asens.1495/)

### Cohomological dimension two collapses Quillen's spectral sequence for number rings

**Remember:** Cohomology stops at degree two, so only three columns survive.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R70, 11R34. arXiv math.KT, math.NT. Level 4: research.

**Definition.** A scheme has étale ℓ-cohomological dimension at most two if every ℓ-primary torsion sheaf has zero étale cohomology above degree two. For ℓ odd, 𝒪F\[1/ℓ\] has this property (our own). So its cohomology with the Tate twists ℤℓ(i), limits of tensor powers of ℓ-power roots of unity, lives in degrees 0 to 2.

**Problem.** Let F be a number field, ℓ an odd prime and i ≥ 2. Then K₂ᵢ₋₁(𝒪F) ⊗ ℤℓ ≅ H¹(𝒪F\[1/ℓ\], ℤℓ(i)) and K₂ᵢ₋₂(𝒪F) ⊗ ℤℓ ≅ H²(𝒪F\[1/ℓ\], ℤℓ(i)).

**How the definition helps.** The descent spectral sequence then has only columns zero to two and only even rows, so every differential is zero (our own). Nontrivial twists have zero H⁰ here, which leaves one group in each stated degree. Quillen–Lichtenbaum comparison and localization identify the limit with the displayed K-groups.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory), [Quillen–Lichtenbaum conjecture](https://en.wikipedia.org/wiki/Quillen%E2%80%93Lichtenbaum_conjecture). It says: “In the case studied by Lichtenbaum, the spectral sequence would degenerate, yielding Lichtenbaum's conjecture.”

**Sources:**

- [C. Weibel, Algebraic K-theory of rings of integers in local and global fields, in Handbook of K-Theory, Springer (2005) 139–190](https://doi.org/10.1007/978-3-540-27855-9_5)

### Compatible pairs lift to differential K-theory

**Remember:** A class, a closed form, and a path joining their regulator classes.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** A degree-zero differential algebraic K-class is a K-class, a closed cochain called its curvature, and a path joining their two classes in the regulator target. It is a point of the homotopy pullback over the regulator target.

**Problem.** An ordinary K-class and a closed cochain occur together as the underlying class and curvature exactly when their classes agree in the regulator target.

**How the definition helps.** A path joins two points exactly when they lie in one component, so a lift exists exactly when the classes agree (our own argument). The construction needs a regulator defined on spaces of representatives, not only the classical map on groups.

**nLab:** [differential algebraic K-theory](https://ncatlab.org/nlab/show/differential+algebraic+K-theory). It says: “of the inclusion of the non-negative degree truncation of the de Rham resolution of the absolute Hodge complex”

**Sources:**

- [U. Bunke and G. Tamme, Multiplicative differential algebraic K-theory and applications (2016)](https://doi.org/10.2140/akt.2016.1.227)

### Conjugation explains the regulator rank

**Remember:** Complex pairs always count, but real places count only in odd weight.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F and n ≥ 2, take one real coordinate per embedding of F into ℂ. Keep the vectors fixed by complex conjugation acting with sign (−1)ⁿ⁻¹. A conjugate pair then gives one dimension, and a real embedding gives one only for odd n.

**Problem.** For n ≥ 2, let r₁ count real embeddings of F and r₂ count conjugate pairs of nonreal embeddings. The rank of K₂ₙ₋₁(𝒪F) is r₁ + r₂ for odd n and r₂ for even n.

**How the definition helps.** Borel’s regulator identifies K₂ₙ₋₁(𝒪F) ⊗ ℝ with this space, so the rank is its dimension (our own explanation). A conjugate pair gives one free coordinate. A real embedding is fixed by conjugation, so its coordinate survives only when the sign is +1, that is for odd n.

**nLab:** [higher regulator](https://ncatlab.org/nlab/show/higher+regulator). It says: “a higher regulator, or just regulator for short, is a homomorphism from algebraic K-theory to a suitable ordinary cohomology theory.”

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044). It says: “Denote by r₁ and r₂ the numbers of real and conjugate pairs of complex places of 𝔽, respectively.”

**Sources:**

- [Armand Borel, Cohomologie de SLₙ et valeurs de fonctions zêta aux points entiers (1977)](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0/)

### Direct limits give function-field regulators

**Remember:** Shrink to a common open subset to compare regulator classes.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14F43. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let F be the function field of a smooth integral variety X over ℚ. Its Deligne cohomology is the direct limit of the real Deligne cohomology of U\_ℝ over nonempty open U ⊂ X. Two classes become equal when they agree on some smaller open subset, so any closed subset can be discarded.

**Problem.** Regulator classes defined on open subsets land in one group that depends only on F. Another smooth integral variety with the same function field gives a canonically isomorphic group for the chosen field identification.

**How the definition helps.** A field identification gives isomorphic dense open subsets of the two varieties, and the limit can be computed inside either one (our own argument). The construction of the regulator maps into this group is the separate result cited by Trieu.

**Paper or page:** [The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3). It says: “where $H<sup>i\_\\mathcal{D}</sup>(F, \\mathbb {R}(n)) := \\varinjlim \_{U \\subset X \\text{ open }} H<sup>i\_\\mathcal{D}</sup>(U\_\\mathbb {R}, \\mathbb {R}(n))$”

**Sources:**

- [Thu Ha Trieu, The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3)

### Embedding coordinates give Galois equivariance

**Remember:** A field automorphism permutes the regulator coordinates.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R70. arXiv math.KT, math.NT. Level 4: research.

**Definition.** Let F be a finite Galois extension of ℚ. The full regulator of a K-class x lists the Borel regulator of σ(x) for every embedding σ: F → ℂ. Both embeddings of each conjugate pair are kept.

**Problem.** For n ≥ 2, consider algebraic K-theory in degree 2n−1 of the ring of integers of F. A field automorphism g sends a class to one whose coordinate at σ equals the original coordinate at σ ∘ g.

**How the definition helps.** Since σ(g(x)) = (σ ∘ g)(x), applying g only reindexes the tuple (our own calculation). Keeping every embedding avoids choosing one per conjugate pair. Zhang’s theorem identifies this map with the Borel regulator.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2). It says: “Then there is a G-equivariant map of spectra”

**Sources:**

- [Ningchuan Zhang, Borel’s rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2)

### Five-term relations give dilogarithm regulators

**Remember:** Symbols \[z\] modulo exactly the relations the dilogarithm satisfies.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11G55. arXiv math.NT, math.AG. Level 4: research.

**Definition.** The rational pre-Bloch group of ℂ is the rational vector space on symbols \[z\], z ∈ ℂ ∖ {0,1}, modulo the five-term relations. Each relation is the alternating sum of the cross-ratios of the five four-point subsets of five distinct projective points.

**Problem.** The Bloch–Wigner dilogarithm D, a real single-valued version of the dilogarithm, gives a linear map \[z\] ↦ D(z) on this quotient. Restricting it to the kernel of \[z\] ↦ z ∧ (1 − z) gives the Bloch dilogarithm regulator.

**How the definition helps.** Abel’s five-term identity says that D vanishes on every defining relation, so \[z\] ↦ D(z) descends to the quotient (our own explanation). Restricting to the stated kernel gives the Bloch regulator.

**Wikipedia:** [Bloch group](https://en.wikipedia.org/wiki/Bloch_group). It says: “Abel's functional equation implies that D₂ vanishes on the subgroup D(K) of Z(K)”

**Paper or page:** [Cluster Polylogarithms I: Quadrangular Polylogarithms](https://arxiv.org/abs/2208.01564). It says: “All relations between them follow from the 5-term relation”

**Sources:**

- [Cluster Polylogarithms I: Quadrangular Polylogarithms](https://arxiv.org/abs/2208.01564)
- [A. B. Goncharov, Polylogarithms, regulators, and Arakelov motivic complexes](https://doi.org/10.1090/s0894-0347-04-00472-2)

### Fixed vectors give Artin vanishing orders

**Remember:** Count the copies of V that the K-group carries.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R42. arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let F/K be a finite Galois extension of number fields with group G, and V a finite-dimensional complex G-representation. Form K₂ₙ₋₁(𝒪F) ⊗ℤ V, and take the complex dimension of the subspace fixed when G acts on both factors at once.

**Problem.** For n ≥ 2 this dimension equals the order of vanishing at 1−n of the Artin L-function attached to V.

**How the definition helps.** The equivariant regulator identifies the complexified K-group with embedding coordinates on which conjugation acts with sign (−1)ⁿ⁻¹. Invariants then count one copy of V per complex place of K and the (−1)ⁿ⁻¹-eigenspace of conjugation per real place (our own). The Artin functional equation and nonvanishing at n turn this count into the vanishing order.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2). It says: “\\mathrm  {ord}<sub>s=1-n</sub>L(s,\\rho )= \\qopname  \\relax o{dim}\_ \\mathbb  {L}\\left \[K<sub>2n-1</sub>( \\mathcal  {O}\_ \\mathbb  {F})\\otimes \_ \\mathbb  {Z} \\underline  {\\rho }\\right \]<sup>G</sup>.”

**Sources:**

- [Ningchuan Zhang, Borel’s rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2)

### Monodromy gives tame reciprocity

**Remember:** Transport around a loop in a flat bundle multiplies by a scalar.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** For nonzero meromorphic f, g on a compact connected Riemann surface, the Deligne cup product gives a flat line bundle off their zeros and poles. Its monodromy character gives each loop the scalar by which parallel transport around it acts on the fiber.

**Problem.** Near a point, write f = tᵐu and g = tⁿv with t a local coordinate and u, v units; the tame symbol is (−1)ᵐⁿvᵐ/uⁿ there. The product of the tame symbols over all points equals one.

**How the definition helps.** Deligne’s local formula identifies each tame symbol, up to inverting all at once, with the monodromy around a small loop at that point. Removing small disks leaves a surface whose boundary shows that these loops sum to zero in homology (our own). A character turns that sum into a product, so the symbols multiply to one.

**nLab:** [Deligne line bundle](https://ncatlab.org/nlab/show/Deligne+line+bundle). It says: “is a holomorphic line bundle with connection, hence a degree-2 cocycle in Deligne cohomology”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)

### Norm residue needs twisted coefficients

**Remember:** Keep the Galois action on roots of unity in the coefficients.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** For a field F and a prime ℓ invertible in F, the Kummer class of a ∈ F× is σ ↦ σ(α)/α, where α<sup>ℓ</sup> = a. Its values are ℓth roots of unity, so it lives in cohomology with coefficients μℓ carrying their Galois action. The norm-residue map sends {a₁,…,aₙ} to the cup product of their Kummer classes in Hⁿ(F, μℓ⊗ⁿ), and sends 1 to 1 when n = 0.

**Problem.** For each n ≥ 0, this map identifies degree n Milnor K-theory modulo ℓ with degree n Galois cohomology with those coefficients.

**How the definition helps.** Kummer classes take values in roots of unity, so only the twisted coefficients match Milnor K-theory. In our own example F = 𝔽₂ and ℓ = 3, Milnor K₁ modulo 3 is zero, but H¹(F, ℤ/3) = ℤ/3, so constant coefficients fail. Kummer theory proves degree one, and the norm-residue theorem proves the higher degrees.

**nLab:** [Milnor K-theory](https://ncatlab.org/nlab/show/Milnor+K-theory). It says: “the sheaf of lth roots of unity to the n (i.e. tensored with itself n times).”

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “Hⁿ(K,(ℤ/p)(n)) ≅ Kᴹₙ(K)/p”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ-coefficients (2011)](https://doi.org/10.4007/annals.2011.174.1.11)

### Picard–Fuchs operators remove period choices

**Remember:** Differentiate with an operator that kills every period ambiguity.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14C15. arXiv math.AG, math.KT. Level 4: research.

**Definition.** In Sato’s family of Kummer surfaces, pairing a higher cycle’s regulator with the holomorphic two-form gives local functions defined only up to periods. Periods are integrals of the form over transported integral cycles, and a Picard–Fuchs operator is a differential operator that kills every period.

**Problem.** Each of Sato’s two Picard–Fuchs operators takes the local regulator functions to a single holomorphic function on the parameter space.

**How the definition helps.** Two local representatives differ by a period, which the operator kills, so their images agree on overlaps and glue. The work is proving that Sato’s explicit operators kill all periods and building holomorphic local regulator functions.

**Paper or page:** [Higher Chow cycles on a family of Kummer surfaces](https://arxiv.org/abs/2211.16109v4). It says: “In particular, 𝒟 factors the sheaf 𝒬ω.”

**Sources:**

- [K. Sato, Higher Chow cycles on a family of Kummer surfaces (2026)](https://doi.org/10.4153/S0008414X24000415)

### Residue K-groups give deleted Euler factors

**Remember:** Deleting a prime adds one finite residue K-group.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a finite set S of finite primes of a number field F, the S-integers may have denominators only at primes in S. Their zeta function omits those Euler factors, and their localization sequence adds one residue-field K-group for each prime in S (our own).

**Problem.** Fix n ≥ 2. Passing to S-integers multiplies the order of their K-group K₂ₙ₋₂ by the product over S of qⁿ⁻¹−1, where q is each residue field’s size.

**How the definition helps.** Finite fields have no even K-groups in positive degree, and localization maps onto the residue terms, so their orders multiply in (our own). Quillen’s finite-field calculation gives the order qⁿ⁻¹−1 of each residue group K₂ₙ₋₃(𝔽q).

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “K₂ᵢ₋₁(𝔽q) ≃ ℤ/(qⁱ−1), K₂ᵢ(𝔽q)=0.”

**Sources:**

- [Daniel Quillen, On the cohomology and K-theory of the general linear groups over a finite field (1972)](https://doi.org/10.2307/1970825)

### Ring spectra preserve regulator products

**Remember:** Multiply then map equals map then multiply.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** A map of commutative ring spectra preserves the unit and the multiplication, with all their coherence data. So multiplying and then mapping agrees, up to homotopy, with mapping both factors and then multiplying.

**Problem.** The Beilinson regulator sends a product of algebraic K-theory classes to the product of their regulator classes. Multiplication adds the weights, the indices of the target’s components.

**How the definition helps.** The refined regulator is a map of ring spectra, so it preserves products, and taking homotopy groups gives the product formula (our own deduction). The work is constructing the map and matching its components with the classical regulators in each degree.

**nLab:** [differential algebraic K-theory](https://ncatlab.org/nlab/show/differential+algebraic+K-theory). It says: “As a homomorphism of E-∞ ring objects, this is”

**Sources:**

- [U. Bunke, T. Nikolaus and G. Tamme, The Beilinson regulator is a map of ring spectra (2018)](https://doi.org/10.1016/j.aim.2018.05.027)
- [U. Bunke and G. Tamme, Multiplicative differential algebraic K-theory and applications (2016)](https://doi.org/10.2140/akt.2016.1.227)

### Steinberg relations present diagonal cohomology

**Remember:** Twist equals degree, so all the cohomology groups multiply into one ring.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** For a field F and a prime ℓ invertible in F, the diagonal cohomology ring is ⊕ₙ Hⁿ(F, μℓ⊗ⁿ), n ≥ 0, under cup product. Matching the twist to the degree lets the product of two such groups land in a third.

**Problem.** This ring has degree-one generators given by F× modulo ℓ-th powers, with multiplication in F× corresponding to addition of generators. Its only additional relations say that the product of the generators for a and 1 − a vanishes whenever both are nonzero.

**How the definition helps.** The norm-residue theorem identifies this ring with Milnor K-theory modulo ℓ (our own explanation). Milnor K-theory is the tensor algebra on F× modulo exactly the relations {a, 1−a} = 0. Kummer theory identifies the degree-one generators with F× modulo ℓth powers.

**Wikipedia:** [Norm residue isomorphism theorem](https://en.wikipedia.org/wiki/Norm_residue_isomorphism_theorem). It says: “This is the defining relation of Milnor K-theory.”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ-coefficients (2011)](https://doi.org/10.4007/annals.2011.174.1.11)

### Tame symbols decide where regulators extend

**Remember:** A tame symbol records what a loop around a missing point sees.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** At a point x of a smooth complex curve, write f = tᵐu and g = tⁿv with t a uniformizer and u, v units. The tame symbol of {f,g} at x is (−1)ᵐⁿv(x)ᵐ/u(x)ⁿ, extended multiplicatively to K₂ of the function field. A class is unramified at x if this symbol is one, and the symbol is what a small loop around x sees (our own).

**Problem.** The regulator character on loops away from the zeros and poles extends across x exactly when the class is unramified there. For example, (z,2) has tame symbol 2 at zero.

**How the definition helps.** Filling the puncture kills the small loop at x, so the character extends exactly when its value there is one. Deligne’s local formula gives that value as the tame symbol or its inverse, depending on orientation. Our own example sets t = z, m = 1 and n = 0.

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “To extend it to all of X, one uses the commutative diagram of localization exact sequences”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)
- [A. A. Beilinson, Higher regulators and values of L-functions (1985)](https://doi.org/10.1007/BF02105861)

### Tame symbols detect puncture periods

**Remember:** The modulus of the tame symbol measures the period around a puncture.

*Rules out counterexamples. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11G55. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Near a point P of a smooth complex curve, write nonzero rational functions as f = tᵐa and g = tⁿb. Here t is a local coordinate at P, and a, b are regular and nonzero there. Their tame symbol is s = (−1)ᵐⁿa(P)ⁿ/b(P)ᵐ, the leading part that survives a loop around P (our own).

**Problem.** Around a small counterclockwise circle about P, the form η = log\|f\| d arg g − log\|g\| d arg f integrates to 2π log\|s\|. If every tame symbol has modulus one, these integrals define periods on the complete curve.

**How the definition helps.** Around a small circle the log\|t\| terms cancel, and the rest integrate to 2π log\|s\| (our own calculation). The form is closed off the zeros and poles, and filling the punctures kills their circles in homology. Our own example f = t and g = 2 gives the nonzero integral −2π log 2.

**Paper or page:** [A shifted Mahler measure identity for Boyd's family](https://arxiv.org/abs/2202.09974). It says: “Let f,g ∈ ℚ(E) and {f,g} ∈ K₂(E).”

**Sources:**

- [A shifted Mahler measure identity for Boyd's family, Lemma 2.1](https://arxiv.org/abs/2202.09974)
- [Yang, Liu and Tang, A Mahler Measure Identity Involving a Genus 2 Family, Section 1](https://ccj.pku.edu.cn/Article/DownLoad?id=364490499&type=ArticleFile)

### Tate twists repeat K-group p-ranks

**Remember:** A twist’s weight matters only modulo the order of the cyclotomic action.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F and odd prime p, the weight-j mod-p Tate twist is μₚ⊗ʲ, a tensor power of the pth roots of unity. Galois acts on it by the jth power of its action on μₚ, which has order \[F(ζₚ)∶F\] (our own).

**Problem.** For positive k, the p-rank of K₂ₖ(𝒪F), the dimension of K₂ₖ(𝒪F)/p over 𝔽ₚ, depends only on k modulo \[F(ζₚ)∶F\]. Here ζₚ is a primitive pth root of unity.

**How the definition helps.** Twists whose weights differ by a multiple of \[F(ζₚ)∶F\] are isomorphic Galois modules (our own calculation). The comparison between K-theory and étale cohomology identifies the p-rank with a cohomology dimension for the twist of weight k+1.

**Paper or page:** [On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099). It says: “In particular, one has p ∣ \# K₂ₖ(𝒪Ｆ) if and only if p ∣ \# K₂ₖ′(𝒪Ｆ).”

**Sources:**

- [Meng Fai Lim, On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099)

### Tate-twisted roots give the Birch–Tate factor

**Remember:** Count the roots of unity fixed by the squared Galois action.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F, w₂(F) is the largest m such that each F-automorphism of F(ζₘ) sends ζₘ to some ζₘᵃ with a² ≡ 1 modulo m. So it counts roots of unity fixed by the squared Galois action, not by the action itself (our own).

**Problem.** Let F be a totally real abelian extension of ℚ. Its second algebraic K-group of integers has order w₂(F) times the absolute value of its Dedekind zeta function at −1.

**How the definition helps.** The squared action gives the correction factor that ordinary roots of unity miss, in our own comparison. Over ℚ every unit modulo m squares to one exactly when m divides 24, so w₂(ℚ) = 24 although ℚ has only two roots of unity. The Birch–Tate theorem for totally real abelian fields supplies the special-value identity.

**Wikipedia:** [Birch–Tate conjecture](https://en.wikipedia.org/wiki/Birch%E2%80%93Tate_conjecture). It says: “the largest positive integer such that the extension of F by the N-th root of unity has an elementary abelian 2-group as its Galois group”

**Paper or page:** [On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099). It says: “Let F be a totally real abelian number field of degree r.”

**Sources:** none listed. No primary source with a working link was found.

### Telescopic localization states Quillen–Lichtenbaum as a claim about connective covers

**Remember:** Keep only what the v₁-periodic telescope can see.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D50, 55P42. arXiv math.KT, math.AT. Level 4: research.

**Definition.** At a prime p, T(1) is the telescope of a v₁-periodic self-map of a mod-p Moore spectrum. Localization at T(1) keeps only what T(1) detects: it universally inverts the maps that become equivalences after smashing with T(1).

**Problem.** Let S = ℤ\[1/p\], or S = 𝔽ℓ with ℓ ≠ p. Then the p-completed K-theory spectrum of S is the connective cover of the telescopic localization of K(S).

**How the definition helps.** The localized spectrum holds the whole étale side in one object, so the comparison becomes one statement about a map of spectra. Its homotopy comes from étale cohomology of S with Tate-twisted coefficients (our own). The work is the norm-residue theorem of Voevodsky and Rost, with the 2-primary work of Rognes and Weibel.

**Paper or page:** [The spectrum of units of algebraic K-theory](https://arxiv.org/abs/2410.10126). It says: “For S = ℤ\[1/p\] or 𝔽ℓ with ℓ ≠ p, the map K(S)ₚ → L<sub>T</sub>(1)K(S) induces an isomorphism K(S)ₚ ≃ L<sub>T</sub>(1)K(S)\[0,∞)”

**Sources:**

- [S. Carmeli and K. Luecke, The spectrum of units of algebraic K-theory, arXiv:2410.10126 (2024)](https://arxiv.org/abs/2410.10126)

### Tetralogarithm cycles factor Borel’s regulator

**Remember:** Replace each \[z\]₄ by \[z\]₃ ⊗ z, and the sum vanishes.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11G55. arXiv math.NT, math.AG. Level 4: research.

**Definition.** A tetralogarithm cycle is a rational sum ∑ cᵢ\[zᵢ\]₄ of weight-four polylogarithm symbols, zᵢ ∉ {0,1}, whose image ∑ cᵢ\[zᵢ\]₃ ⊗ zᵢ is zero. The image lies in B₃(ℂ) ⊗ ℂ×, where B₃(ℂ) is the weight-three polylogarithm group.

**Problem.** Goncharov and Rudenko map the seventh algebraic K-group of ℂ to the vector space of these cycles. Evaluation gives a nonzero rational multiple of Borel’s regulator, a real-valued homomorphism on that K-group.

**How the definition helps.** A cycle is an explicit list of arguments and coefficients, so the regulator can be evaluated numerically (our own explanation). The K-group itself gives no such list. The substantive theorem constructs the map to cycles and compares the evaluation with the regulator.

**Wikipedia:** [Goncharov conjecture](https://en.wikipedia.org/wiki/Goncharov_conjecture). It says: “Goncharov defined the following complex called Γ(F,n) placed in degrees \[1,n\]”

**Sources:**

- [A. B. Goncharov and D. Rudenko, Motivic correlators, cluster varieties and Zagier’s conjecture on ζ of F at 4](https://annals.math.princeton.edu/articles/22927)

### Three tame symbols prove the Steinberg relation

**Remember:** Transport scalars around loops of a flat bundle form the regulator.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** For nowhere-zero holomorphic f, g on a smooth complex curve, the Deligne cup product gives a line bundle with a flat connection. The regulator character sends each loop to the scalar by which parallel transport around it multiplies the fiber.

**Problem.** If f and 1−f are both nowhere zero, the regulator character of (f,1−f) equals one on every loop. This is the Steinberg relation for the regulator.

**How the definition helps.** Pulling back along f reduces every pair to (z, 1−z) on the sphere minus 0, 1 and ∞, whose puncture loops generate first homology. Deligne’s formula gives each puncture loop its tame symbol (our own proof). These equal one at 0 and at 1, and at ∞ the sign cancels the limiting ratio −1.

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “one has the Steinberg identity t ∪ (1−t) = 0”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)
- [A. A. Beilinson, Higher regulators and values of L-functions (1985)](https://doi.org/10.1007/BF02105861)

### Transcendental regulators kill decomposable cycles

**Remember:** Holomorphic two-forms ignore the regulator terms supported on curves.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14C15. arXiv math.AG, math.KT. Level 4: research.

**Definition.** On a smooth projective complex surface, a higher Chow cycle of type (2,1) is a sum of curves carrying rational functions whose divisors cancel. Its transcendental regulator tests the Deligne regulator only against holomorphic two-forms, modulo periods over closed integral two-cycles. A holomorphic two-form restricts to zero on any complex curve (our own).

**Problem.** Products of divisors with nonzero constants have zero transcendental regulator. A nonzero value therefore detects an indecomposable class, one outside the subgroup generated by these products.

**How the definition helps.** For a divisor times a constant, the regulator is integration over the divisor’s curves, which holomorphic two-forms kill (our own explanation). Sato’s proposition gives the resulting indecomposability test.

**Paper or page:** [Higher Chow cycles on a family of Kummer surfaces](https://arxiv.org/abs/2211.16109v4). It says: “In other words, the transcendental regulator map factors through CH²(X,1)ᵢₙᵈ.”

**Sources:**

- [K. Sato, Higher Chow cycles on a family of Kummer surfaces (2026)](https://doi.org/10.4153/S0008414X24000415)

### Twisted K-theory reads Artin vanishing orders

**Remember:** A twist selects the K-theory that the character can see.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a finite Galois extension F/K of number fields with group G, n ≥ 1, and a finite-dimensional complex G-representation V, take K₂ₙ₋₁(𝒪F) ⊗ℤ V. Its fixed space consists of the tensors unchanged when every g ∈ G acts on both factors.

**Problem.** The order of vanishing at 1−n of the Artin L-function of V equals the complex dimension of this fixed space.

**How the definition helps.** Fixed vectors select exactly the part of the K-group that pairs with V, in our own explanation. Borel’s regulator for n &gt; 1, and Dirichlet’s unit theorem for n = 1, describe the K-group with its G-action. The functional equation gives the same count from the infinite places.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044). It says: “Then ordₛ₌₁₋ₙ L(s,ρ) = dim𝕃 \[K₂ₙ₋₁(𝒪𝔽) ⊗ℤ ρ̲\]ᴳ.”

**Sources:**

- [Ningchuan Zhang, Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044)
- [Armand Borel, Cohomologie de SLₙ et valeurs de fonctions zêta aux points entiers (1977)](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0/)

### Larger residue fields preserve Witt presentations

**Remember:** The two-element residue field can hide a relation.

*Rules out counterexamples.* MSC 19G38 (Hermitian \\(K\\)-theory, relations with \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** R is a commutative local ring whose residue field, the quotient by its unique maximal ideal, has more than two elements.

**Problem.** For these rings the natural map K₀ᴹᵂ(R) → GW(R), from degree-zero Milnor–Witt K-theory to the Grothendieck–Witt ring, is an isomorphism. Here K₀ᴹᵂ(R) is built from symbols of units, and GW(R) from formal differences of nondegenerate symmetric bilinear forms.

**How the definition helps.** The hypothesis excludes rings where two different symbol classes give the same form class (our own). For 𝔽₂\[x\]/(x⁴), the map is onto with kernel of order two. The comparison theorem proves that the symbol relations suffice once the residue field is larger (our own).

**Paper or page:** [On the presentation of the Grothendieck-Witt group of symmetric bilinear forms over local rings](https://arxiv.org/abs/2311.03962), [On the presentation of the Grothendieck-Witt group of symmetric bilinear forms over local rings](https://arxiv.org/abs/2311.03962). It says: “In fact, we have isomorphisms of abelian groups GW(R) ≅ ℤ ⊕ (ℤ/2)² and K₀ᴹᵂ(R) ≅ ℤ ⊕ (ℤ/2)³.”

**Sources:**

- [On the presentation of the Grothendieck-Witt group of symmetric bilinear forms over local rings](https://arxiv.org/abs/2311.03962)

### Reduced K₀ removes free-cell contributions

**Remember:** Free modules count zero, so only projective defects obstruct finiteness.

*Rules out counterexamples.* MSC 19J05 (Finiteness and other obstructions in \\(K<sub>0</sub>\\)), 57Q12. arXiv math.AT, math.KT. Level 4: research.

**Definition.** Let X be a connected finitely dominated cell complex, a homotopy retract of a finite one, and put R = ℤ\[π₁X\]. Take a bounded complex P of finitely generated projective R-modules chain equivalent to the cellular chains of the universal cover. Wall’s obstruction is ∑(−1)ⁱ\[Pᵢ\] in K₀(R) modulo the class of R, so free modules count zero.

**Problem.** For a connected finitely dominated cell complex X, Wall’s obstruction vanishes exactly when X is homotopy equivalent to a finite cell complex.

**How the definition helps.** A finite model has free cellular chains, one basis element per cell, so its obstruction is zero in reduced K₀ (our own argument). Unreduced K₀ would give a point the nonzero class one. Wall builds the projective model, proves independence of the choices and proves the converse.

**nLab:** [Wall's finiteness obstruction](https://ncatlab.org/nlab/show/Wall%27s+finiteness+obstruction). It says: “the vanishing of Wall's finiteness obstruction is a necessary and sufficient condition for this to happen.”

**Sources:**

- [C. T. C. Wall, Finiteness Conditions for CW-Complexes (1965)](https://doi.org/10.2307/1970382)

### Restricting to invertible extensions makes Ext a group equal to KK¹

**Remember:** Keep only the extensions you can cancel, and Ext becomes KK¹.

*Rules out counterexamples. Confidence: medium.* MSC 19K33 (Ext and \\(K\\)-homology), 19K35. arXiv math.OA, math.KT. Level 4: research.

**Definition.** For C\*-algebras A and B, extensions of A by B ⊗ 𝒦, with 𝒦 the compact operators, form a semigroup under direct sum. Classes are taken up to stable unitary equivalence, with split extensions as zero. An extension is invertible if some extension adds to it to give zero.

**Problem.** The invertible extensions form a group Ext⁻¹(A,B), and Kasparov showed that Ext⁻¹(A,B) ≅ KK¹(A,B) for separable A and σ-unital B. When A is nuclear, every extension is invertible, so Ext(A,B) is itself a group.

**How the definition helps.** Keeping only invertible classes removes the extensions that cannot be cancelled, which exist since Anderson found A with Ext(A) not a group. An invertible extension has a completely positive lift, and a Stinespring dilation turns it into a Kasparov module (our own). Kasparov’s theorem gives the isomorphism, and the Choi–Effros lifting theorem gives invertibility for nuclear A (our own).

**nLab:** [KK-theory](https://ncatlab.org/nlab/show/KK-theory). It says: “There is an isomorphism KK(A,B) ≃ Ext¹(A,B) to a suitable group of suitable extensions of A by B.”

**Sources:**

- [Joel Anderson, A C\*-algebra A for which Ext(A) is not a group, Annals of Mathematics 107 (1978) 455–458](https://doi.org/10.2307/1971124)
- [Gennadi G. Kasparov, The operator K-functor and extensions of C\*-algebras, Mathematics of the USSR-Izvestiya 16 (1981) 513–572](https://doi.org/10.1070/IM1981v016n03ABEH001320)

### Asymptotic morphisms give E-theory long exact sequences for every extension

**Remember:** Homomorphisms only in the limit, so every extension gives one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)). arXiv math.OA, math.KT. Level 4: research.

**Definition.** An asymptotic morphism A → B is a family φₜ, t ≥ 1, with bounded continuous paths t ↦ φₜ(a), that is a \*-homomorphism only in the limit. For all a, b and scalars λ, its failures to respect sums, scalar multiples, products and adjoints tend to zero in norm. E(A,B) is homotopy classes of such families between the suspensions of A and B stabilized by compact operators.

**Problem.** For any short exact sequence 0→J→A→B→0 of separable C\*-algebras and any separable D, E(D, –) and E(–, D) give six-term exact sequences. No splitting condition on the extension is needed.

**How the definition helps.** Every separable extension gives an asymptotic morphism ΣB → J by the Connes–Higson construction, with no multiplicative section needed (our own summary). It uses a lift of B and a quasicentral approximate unit in J. Composition gives the boundary maps, and excision with Bott periodicity gives exactness.

**nLab:** [E-theory](https://ncatlab.org/nlab/show/E-theory). It says: “This construction may be understood as the universal improvement of KK-theory under excision”

**Sources:**

- [Nigel Higson, Categories of fractions and excision in KK-theory, Journal of Pure and Applied Algebra 65 (1990) 119–138](https://doi.org/10.1016/0022-4049(90)90114-W)

### Cuntz's picture of KK-theory makes the Kasparov product a composition

**Remember:** In Cuntz's picture, multiplying KK classes is just composing homomorphisms.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)). arXiv math.OA, math.KT. Level 4: research.

**Definition.** For a separable C\*-algebra A, let qA be the kernel of the fold map A∗A → A from the full nonunital free product. Cuntz’s picture represents KK(A,B) by homotopy classes of \*-homomorphisms qA → 𝒦 ⊗ B, where 𝒦 denotes the compact operators.

**Problem.** The Kasparov product KK(A,B) × KK(B,C) → KK(A,C) is well defined and associative. So separable C\*-algebras, with KK-groups as morphisms, form a category.

**How the definition helps.** Classes are now homomorphisms, so the product is composition after the canonical KK-equivalences qA → A and B → 𝒦 ⊗ B (our own explanation). Composition is associative and has identities, so KK-groups form a category. Cuntz’s comparison theorem identifies this composition with the Kasparov product.

**Wikipedia:** [KK-theory](https://en.wikipedia.org/wiki/KK-theory). It says: “The product can be defined much more easily in the Cuntz picture given that there are natural maps from QA to A, and from B to K(H) ⊗ B that induce KK-equivalences.”

**Paper or page:** [Equivariant KK-theory and model categories](https://arxiv.org/abs/2506.16238). It says: “there is a natural isomorphism KKᴳ(A,B) ≅ \[q(A ⊗ 𝒦G) ⊗ 𝒦G, B ⊗ 𝒦G\], where q denotes the kernel of the fold map A∗A → A”

**Sources:**

- [Joachim Cuntz, A new look at KK-theory, K-Theory 1 (1987) 31–51](https://doi.org/10.1007/BF00533986)

### Defining KK and E-theory by universal properties gives the comparison functor

**Remember:** KK is the first stop for every stable split-exact homotopy functor.

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

**Problem.** If a KK-morphism f between algebras in the bootstrap class induces isomorphisms on K₀ and K₁, then f is a KK-equivalence. In particular, an algebra in the class with zero K-theory is KK-equivalent to 0.

**How the definition helps.** The cone C of f lies in the class and has zero K-theory, so KK(Σⁿℂ, C) = Kₙ(C) = 0 for all n (our own). The X with KK(ΣⁿX, C) = 0 for all n form a localizing subcategory containing ℂ, hence containing C. So the identity of C is zero, C is zero, and f is invertible.

**Paper or page:** [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191). It says: “That is, UCTsep is the smallest stable subcategory which is closed under countable colimits and contains kksep(ℂ).”

**Sources:**

- [Jonathan Rosenberg and Claude Schochet, The Künneth theorem and the universal coefficient theorem for Kasparov's generalized K-functor, Duke Mathematical Journal 55 (1987) 431–474](https://doi.org/10.1215/S0012-7094-87-05524-4)

### Kasparov equivalences preserve operator K-theory

**Remember:** An invertible KK-class acts invertibly on all of K-theory.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A KK-equivalence between separable complex C\*-algebras A and B is an invertible class x ∈ KK(A,B): some y ∈ KK(B,A) makes both Kasparov products identities.

**Problem.** A KK-equivalence between separable complex C\*-algebras induces isomorphisms on both operator K-groups.

**How the definition helps.** Since K₀(A) = KK(ℂ, A), and K₁ likewise via suspension, the product with x maps K-theory of A to that of B (our own proof). The product with y inverts it, and the comparison theorem identifies these groups with K-theory defined by projections and unitaries.

**nLab:** [KK-theory](https://ncatlab.org/nlab/show/KK-theory). It says: “KK(ℂ, A) ≃ K₀(A)”

**Sources:** none listed. No primary source with a working link was found.

### Mapping cone triangles give KK exact sequences for every homomorphism

**Remember:** The cone pairs each a with a path from f(a) to zero.

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

**Definition.** K(A) is a module spectrum over KU = K(ℂ) through the external product. For two such modules M and N, their tensor product over KU is the realization of the bar construction M ⊗ KU⊗ⁿ ⊗ N. It keeps the torsion that tensoring homotopy groups loses.

**Problem.** Let A lie in the UCT class, the smallest stable subcategory of KK that contains ℂ and is closed under colimits. Then for every B in KK, the canonical map K(A) ⊗<sub>KU</sub> K(B) → K(A ⊗ B) is an equivalence.

**How the definition helps.** The module tensor product turns the whole product formula into one map of spectra (our own formulation). The cited theorem proves that this map is an equivalence, an isomorphism on homotopy groups in every degree, for A in the UCT class.

**Paper or page:** [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191v1), [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191v1). It says: “For A in UCT and B in 𝐊𝐊, the canonical map K(A) ⊗<sub>KU</sub> K(B) → K(A ⊗ B) is an equivalence.”

**Sources:**

- [Ulrich Bunke, Markus Land and Ulrich Pennig, A survey on operator K-theory via homotopical algebra, Corollary 5.17](https://arxiv.org/abs/2311.17191v1)

### Relative projective resolutions of length one give universal coefficient sequences

**Remember:** Projective sources admit no nonzero maps that the functor kills.

*Makes the theorem clean to state or prove.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 18G25, 18G80. arXiv math.KT, math.OA. Level 4: research.

**Definition.** A homological ideal 𝔍 consists of all maps that a given stable homological functor sends to zero. An object P is 𝔍-projective if every map in 𝔍 with source P is zero, so the functor detects every map out of P.

**Problem.** If A has a length-one 𝔍-projective resolution and lies in the localizing subcategory generated by 𝔍-projectives, each cohomological F gives 0 → ℝ¹F(ΣA) → F(A) → ℝ⁰F(A) → 0. For the K-theory ideal and F = KK(–,B), this is 0 → Ext¹(K∗₊₁(A),K∗(B)) → KK∗(A,B) → Hom(K∗(A),K∗(B)) → 0 with graded groups.

**How the definition helps.** A length-one resolution leaves only two derived functors in the Meyer–Nest universal coefficient theorem. For the K-theory ideal, those functors give graded Hom and Ext on K-groups (our own).

**Paper or page:** [Relative homological algebra for bivariant K-theory](https://arxiv.org/abs/2303.01281). It says: “Let 𝔍 be a homological ideal in a triangulated category 𝔗. Let A ∈ 𝔗 have an 𝔍-projective resolution of length one. Suppose also that A ∈ ⟨𝔓𝔍⟩.”

**Sources:**

- [Ralf Meyer and Ryszard Nest, Homological algebra in bivariant K-theory and other triangulated categories. I, in Triangulated Categories, LMS Lecture Note Series 375, Cambridge University Press (2010)](https://doi.org/10.1017/cbo9781139107075.006)
- [George Nadareishvili, Relative homological algebra for bivariant K-theory, arXiv:2303.01281 (2023)](https://arxiv.org/abs/2303.01281)

### The universal property of KK-theory gives every split-exact stable functor Bott periodicity

**Remember:** A functor that factors through KK inherits its periodicity.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.KT, math.OA. Level 4: research.

**Definition.** KK is universal among homotopy-invariant, stable, split-exact functors from separable C\*-algebras to abelian groups. Each such functor F factors uniquely as F = H ∘ J, with J the canonical functor to KK and H additive.

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

**Problem.** For even spectral triples (𝒜,H₁,D₁) on A and (ℬ,H₂,D₂) on B, with γ₁ the grading of H₁, the closure of D₁⊗1+γ₁⊗D₂ is a spectral triple for 𝒜⊙ℬ on A ⊗min B. Its class is the external Kasparov product of the two classes.

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

**Definition.** A coarse embedding f of X into Hilbert space keeps close points close and sends far points far apart, at controlled rates. Precisely, ρ₋(d(x,y)) ≤ ‖f(x)−f(y)‖ ≤ ρ₊(d(x,y)) for all x, y, with nondecreasing ρ₋, ρ₊: \[0,∞) → \[0,∞) and ρ₋ → ∞.

**Problem.** A uniformly discrete bounded-geometry space that coarsely embeds into Hilbert space has an isomorphic coarse assembly map (Yu). Coarse disjoint unions of bounded-degree expanders admit no such embedding, and some have nonsurjective coarse assembly maps (Higson, Lafforgue and Skandalis).

**How the definition helps.** Yu’s coarse Baum–Connes theorem uses exactly these two distance bounds (our own). The quoted obstruction rules out coarse disjoint unions of expanders, which include the known counterexamples to surjectivity (our own).

**Wikipedia:** [Asymptotic dimension](https://en.wikipedia.org/wiki/Asymptotic_dimension). It says: “If X is a metric space with asdim(X)&lt;∞ then X admits a coarse (uniform) embedding into a Hilbert space.”

**Paper or page:** [Coarse embeddings at infinity and generalized expanders at infinity](https://arxiv.org/abs/2206.11151v2). It says: “Let {Xₙ}ₙ∈ℕ be a family of connected finite graphs. If {Xₙ}ₙ∈ℕ contains an expander at infinity, then the coarse disjoint union X=⊔ₙ∈ℕ Xₙ does not coarsely embed at infinity into Hilbert space.”

**Sources:**

- [G. Yu, The coarse Baum–Connes conjecture for spaces which admit a uniform embedding into Hilbert space, Inventiones Mathematicae 139 (2000) 201–240](https://doi.org/10.1007/s002229900032)
- [N. Higson, V. Lafforgue and G. Skandalis, Counterexamples to the Baum–Connes conjecture, Geometric and Functional Analysis (2002)](https://doi.org/10.1007/s00039-002-8249-5)

### Defining structure groups as K-theory makes Baum–Connes their vanishing

**Remember:** Structure groups are K-theory of the pseudolocal operators.

*True by definition. Confidence: medium.* MSC 19K56 (Index theory), 19K33, 57R67. arXiv math.KT, math.OA. Level 4: research.

**Definition.** For a free proper cocompact Γ-space X, D\* is the norm closure of equivariant finite-propagation operators on an ample equivariant X-module that are pseudolocal. Pseudolocal means commuting with every function in C₀(X) up to a compact operator. Its K-groups, with the conventional degree shift and a direct limit over Γ-compact subspaces for general EΓ, are the analytic structure groups.

**Problem.** The Roe extension gives the analytic surgery exact sequence, with quotient term Kᵢ₊₁(D\*/C\*) identified with Kᵢ(X/Γ) on Γ-compact pieces. For torsion-free Γ and X = EΓ, assembly is an isomorphism precisely when all analytic structure groups vanish.

**How the definition helps.** The six-term K-theory sequence of the Roe ideal stays exact under direct limits (our own). Paschke duality identifies the quotient term, and the boundary map for EΓ identifies with assembly (our own). Exactness makes both boundary maps isomorphisms precisely when both structure groups vanish (our own).

**Paper or page:** [Admissible Higson-Roe sequences for transformation groupoids](https://arxiv.org/abs/2411.00182v2). It says: “The group Γ satisfies the rectified Baum-Connes conjecture with coefficients in C(X) if and only if the structure groups 𝒮ᴮᴳᵂᵢ(X⋊Γ) are trivial.”

**Sources:**

- [N. Higson and J. Roe, Mapping surgery to analysis I. Analytic signatures, K-Theory (2004)](https://doi.org/10.1007/s10977-005-1561-8)

### Finite asymptotic dimension cuts a group into pieces and proves Novikov

**Remember:** At every scale, bounded sets cover with at most n+1 overlapping.

*Makes the theorem clean to state or prove.* MSC 19K56 (Index theory), 20F69. arXiv math.KT, math.GR. Level 4: research.

**Definition.** A metric space has asymptotic dimension ≤ n if, for each r &gt; 0, some uniformly bounded cover meets every r-ball in at most n + 1 sets. It is covering dimension seen from far away.

**Problem.** Let G be a finitely generated group of finite asymptotic dimension whose classifying space BG has the homotopy type of a finite CW-complex. Then G satisfies the Novikov conjecture: its higher signatures are homotopy invariants (Yu, 1998).

**How the definition helps.** Bounded overlap gives Yu’s controlled K-theory argument a uniform dimension bound at every scale (our own). Yu’s finite-asymptotic-dimension theorem gives the stated homotopy invariance.

**Wikipedia:** [Asymptotic dimension](https://en.wikipedia.org/wiki/Asymptotic_dimension). It says: “which proved that if G is a finitely generated group of finite homotopy type (that is with a classifying space of the homotopy type of a finite CW-complex) such that asdim(G)&lt;∞, then G satisfies the Novikov conjecture.”

**Sources:**

- [G. Yu, The Novikov conjecture for groups with finite asymptotic dimension, Annals of Mathematics 147 (1998) 325–355](https://doi.org/10.2307/121011)

### Localization algebras turn the assembly map into forgetting control

**Remember:** Shrink propagation along a path and evaluate at its starting point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19K56 (Index theory), 19K33. arXiv math.KT, math.OA. Level 4: research.

**Definition.** The localization algebra of a proper metric space X consists of paths T: \[0,∞) → C\*(X) in its Roe algebra whose propagation tends to zero. The paths are bounded, uniformly norm-continuous and of uniformly bounded propagation, and the algebra is their closure in the supremum norm.

**Problem.** Localization-algebra K-theory computes locally finite K-homology on a locally finite, finite-dimensional simplicial complex, and evaluation at zero gives coarse assembly in the Rips limit. For second-countable locally compact groups and separable equivariant coefficients, the equivariant forget-control map likewise gives Baum–Connes assembly.

**How the definition helps.** Evaluation at zero sends each controlled path to one Roe operator (our own). Yu identifies this map on K-theory with assembly after passing to Rips complexes for coarse K-homology (our own). Nishikawa identifies the equivariant forget-control map with Baum–Connes assembly.

**Paper or page:** [Crossed product approach to equivariant localization algebras](https://arxiv.org/abs/2108.11235v2). It says: “Let G be a locally compact group, X be a proper G-space and B be a separable G-C\*-algebra. The forget-control map ℱ: 𝔻∗ᴮ,ᴳ(X) → K∗(B⋊ᵣG) is naturally equivalent to the Baum–Connes assembly map”

**Sources:**

- [G. Yu, Localization algebras and the coarse Baum–Connes conjecture, K-Theory (1997)](https://doi.org/10.1023/a:1007766031161)
- [S. Nishikawa, Crossed product approach to equivariant localization algebras, arXiv:2108.11235](https://arxiv.org/abs/2108.11235v2)

### Rips complexes let coarse K-homology see a group's large-scale shape

**Remember:** Fill in simplices at every scale, and ℤ becomes the real line.

*Rules out counterexamples. Confidence: medium.* MSC 19K56 (Index theory), 51F30. arXiv math.KT, math.MG. Level 4: research.

**Definition.** At scale d, the Rips complex of a discrete metric space X has a simplex for each finite point set of diameter at most d. Coarse K-homology is the limit, as d grows, of the K-homology of these complexes. It replaces the K-homology of X itself as the source of the coarse assembly map, whose target is the K-theory of the Roe algebra.

**Problem.** For X = ℤⁿ with n ≥ 1, coarse assembly is an isomorphism. The corresponding map from locally finite K-homology of the discrete lattice is not injective.

**How the definition helps.** The Rips limit identifies neighboring point classes that discrete K-homology distinguishes (our own). An edge joins neighboring lattice points at scale one, so their difference maps to zero (our own). Yu’s finite-asymptotic-dimension theorem gives the isomorphism for the coarse source (our own).

**Paper or page:** [A Bott periodicity theorem for ℓᵖ-spaces and the coarse Novikov conjecture at infinity](https://arxiv.org/abs/2207.04193v2). It says: “If X admits a fibred coarse embedding into an ℓᵖ-space for some p∈\[1,∞), then the coarse Novikov conjecture holds for X, i.e. the coarse assembly map μ : lim d→∞ K∗(P<sub>d</sub>(X)) → K∗(C\*(X)) is injective.”

**Sources:**

- [N. Higson and J. Roe, On the coarse Baum–Connes conjecture, in Novikov Conjectures, Index Theorems, and Rigidity, Cambridge University Press (1995)](https://doi.org/10.1017/cbo9780511629365.008)

### Shift defects compute Toeplitz boundaries

**Remember:** Subtract the missing-range projection from the kernel projection.

*True by definition.* MSC 19K56 (Index theory), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** If a partial isometry v lifts a unitary u of the quotient, then ∂\[u\] = \[1−v\*v\] − \[1−vv\*\] in K₀ of the ideal. This is the kernel projection minus the projection onto the missing part of the range.

**Problem.** For the algebra generated by the unilateral shift and its adjoint, quotienting by compact operators gives the continuous functions on the circle. The boundary sends the circle coordinate to minus the rank-one projection class.

**How the definition helps.** The Toeplitz extension identifies the shift modulo compact operators with the circle coordinate. The shift has zero kernel and misses exactly the first basis vector (our own). Its two defects therefore give minus the rank-one projection class (our own).

**Wikipedia:** [Toeplitz algebra](https://en.wikipedia.org/wiki/Toeplitz_algebra). It says: “So the Toeplitz algebra can be viewed as the C\*-algebra extension of continuous functions on the circle by the compact operators.”

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “Then ∂(\[u\])=\[1ₙ−v\*v\]−\[1ₙ−vv\*\].”

**Sources:** none listed. No primary source with a working link was found.

### The proper classifying space lets the assembly map work for finite groups

**Remember:** Finite subgroups fix contractible spaces, and infinite subgroups fix nothing.

*Rules out counterexamples.* MSC 19K56 (Index theory), 19K33. arXiv math.KT, math.OA. Level 4: research.

**Definition.** A model of E̲Γ, for discrete Γ, is a Γ-CW complex whose fixed sets are contractible for finite subgroups and empty for infinite ones.

**Problem.** For a finite group G, the space E̲G is a point, so the Baum–Connes assembly map of G is an isomorphism. Both sides are the representation ring R(G), the group of formal differences of representations of G.

**How the definition helps.** For finite G a point passes the fixed-set test (our own). Assembly there is the Green–Julg isomorphism, identifying representation classes with K₀(C\*ᵣG) and giving zero in odd degree (our own). Using the free space instead gives a rank mismatch for every nontrivial finite group (our own).

**Wikipedia:** [Baum–Connes conjecture](https://en.wikipedia.org/wiki/Baum%E2%80%93Connes_conjecture). It says: “In case Γ is discrete and torsion-free, the left hand side reduces to the non-equivariant K-homology with compact supports of the ordinary classifying space BΓ of Γ.”

**Sources:**

- [P. Baum, A. Connes and N. Higson, Classifying space for proper actions and K-theory of group C\*-algebras, Contemporary Mathematics 167 (1994)](https://doi.org/10.1090/conm/167/1292018)

### The Rosenberg index lets positive scalar curvature kill higher Â-genera

**Remember:** Index of the Dirac operator twisted by the flat C\*Γ bundle.

*Makes the theorem clean to state or prove.* MSC 19K56 (Index theory), 53C21, 58J22. arXiv math.KT, math.DG. Level 4: research.

**Definition.** For a closed spin manifold M with f:M → BΓ, pull back the flat Mishchenko bundle EΓ ×Γ C\*Γ along f. The Rosenberg index α(M,f) is the index of the spin Dirac operator twisted by this bundle.

**Problem.** If M has a metric of positive scalar curvature, then α(M,f) = 0. If also the rational assembly map of Γ is injective, then every higher Â-genus ⟨Â(M) ∪ f\*x, \[M\]⟩, with x in H\*(BΓ;ℚ), is zero.

**How the definition helps.** Flatness gives D² = ∇\*∇ + κ/4, so positive scalar curvature κ makes D invertible and its index zero (our own). Assembly sends f∗\[D\] to this index, so rational injectivity makes f∗\[D\] rationally zero (our own). The homological Chern character turns this into vanishing of every higher Â-genus (our own).

**Paper or page:** [Positive scalar curvature -- constructions and obstructions](https://arxiv.org/abs/2202.05904v1), [Positive Scalar Curvature due to the Cokernel of the Classifying Map](https://arxiv.org/abs/2006.15965v2). It says: “(Rosenberg) If M carries a positive scalar curvature metric, then α(M,f) vanishes.”

**Sources:**

- [J. Rosenberg, C\*-algebras, positive scalar curvature, and the Novikov conjecture, Publications Mathématiques de l'IHÉS (1983)](https://doi.org/10.1007/BF02953775)

### Using the reduced group C\*-algebra avoids the Kazhdan projection obstruction

**Remember:** In ℓ²(Γ) of an infinite group, nothing is invariant.

*Rules out counterexamples. Confidence: medium.* MSC 19K56 (Index theory), 22D55, 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** For a discrete group Γ, the reduced C\*-algebra C\*ᵣ(Γ) is the operator-norm closure of the complex group ring acting by left translation on ℓ²(Γ), the square-summable functions on Γ. For infinite Γ this action has no nonzero invariant vector, so the Kazhdan projection onto invariant vectors becomes zero there (our own).

**Problem.** For every hyperbolic group, reduced assembly is an isomorphism. For infinite hyperbolic groups with property (T), including cocompact lattices in Sp(n,1) for n ≥ 2, maximal assembly is not surjective.

**How the definition helps.** In the reduced algebra the Kazhdan projection p vanishes, while in maximal K-theory the trivial representation detects its class \[p\] (our own). If maximal assembly hit \[p\], its preimage would map to zero under reduced assembly, which contradicts injectivity (our own). Lafforgue proves that reduced assembly is an isomorphism for hyperbolic groups.

**Wikipedia:** [Baum–Connes conjecture](https://en.wikipedia.org/wiki/Baum%E2%80%93Connes_conjecture). It says: “It was a long-standing problem since the first days of the conjecture to expose a single infinite property T-group that satisfies it.”

**Paper or page:** [K-theory of relative group C\*-algebras and the relative Novikov conjecture](https://arxiv.org/abs/2110.10859v4). It says: “Let G be a hyperbolic group and A any G-C\*-algebra. Then the Baum–Connes conjecture with coefficients in A holds for G”

**Sources:**

- [V. Lafforgue, La conjecture de Baum–Connes à coefficients pour les groupes hyperboliques, Journal of Noncommutative Geometry 6 (2012) 1–197](https://doi.org/10.4171/jncg/89)

### Essential positivity contracts Fredholm components

**Remember:** Positive modulo compacts, so slide straight to the identity.

*Makes the theorem clean to state or prove.* MSC 19K99 (\\(K\\)-theory and operator algebras), 47A53. arXiv math.KT. Level 4: research.

**Definition.** A self-adjoint Fredholm operator, one with closed range and finite-dimensional kernel and cokernel, is essentially positive if its image modulo compact operators has nonnegative spectrum. Fredholm means invertible modulo compacts by Atkinson’s theorem, so this image is positive and invertible, while finitely many negative eigenvalues stay allowed (our own).

**Problem.** On an infinite-dimensional separable complex Hilbert space, the essentially positive operators form one whole component of the self-adjoint Fredholm operators in the operator norm. This component contracts continuously to the identity.

**How the definition helps.** The straight line from a positive invertible element to the identity stays positive and invertible, so straight lines contract the essentially positive operators (our own). Along a continuous path of self-adjoint Fredholm operators, the spectrum modulo compacts cannot become negative without crossing zero, so the set is a whole component (our own).

**Paper or page:** [Chern character and Fermi point](https://arxiv.org/abs/2505.06704). It says: “consisting of self-adjoint Fredholm operators that are positive in the Calkin algebra, forms a path-connected component of Fredₛₐ and is contractible.”

**Sources:** none listed. No primary source with a working link was found.

### Spectral maps expose the kernel fiber

**Remember:** Maps that vanish in the quotient land in the kernel.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras). arXiv math.KT. Level 4: research.

**Definition.** The K-theory space of a graded C\*-algebra A is the space of graded star homomorphisms from C₀(ℝ), graded by reflection, into A stabilized by the graded compact operators whose even and odd parts are both infinite-dimensional. It has the topology of norm convergence on each input. So a point maps to zero in a quotient’s K-theory space exactly when its values lie in the stabilized kernel (our own).

**Problem.** A surjective grading-preserving star homomorphism induces a map of K-theory spaces. Its homotopy fiber over zero is equivalent to the kernel’s K-theory space.

**How the definition helps.** The ordinary fiber over zero is, by the definition, the kernel’s K-theory space (our own). The cited result that the map is a Serre fibration then lets this ordinary fiber compute the homotopy fiber (our own).

**Paper or page:** [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606). It says: “Then, 𝕂(A,H) → 𝕂(B,H) is a Serre fibration, with fiber 𝕂(J).”

**Sources:**

- [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606)

### Spectral products associate on representatives

**Remember:** Split the input by x ↦ x⊗1 + 1⊗x, then tensor.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras). arXiv math.KT. Level 4: research.

**Definition.** The external product of graded star homomorphisms f and g from S = C₀(ℝ), graded by reflection, into stabilized algebras is (f ⊗ g) ∘ Δ, with graded tensor products. Here Δ sends the coordinate x to x ⊗ 1 + 1 ⊗ x by functional calculus, a splitting that is coassociative and fixed by the graded swap (our own).

**Problem.** At the level of maps, the external product is associative after the canonical identification of the two tensor products. Swapping the inputs gives the same result after the graded swap, which introduces a minus sign when both factors are odd.

**How the definition helps.** Coassociativity says the two ways to split the input three ways give the same map, so both bracketings agree before taking classes (our own). The graded swap fixes x ⊗ 1 + 1 ⊗ x, so swapping f and g changes the product only by the graded swap of the targets (our own).

**Paper or page:** [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606). It says: “Products are commutative and associative, in the sense that the following diagrams commute strictly”

**Sources:**

- [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606)

### Superconnection Chern forms are closed

**Remember:** A commutes with its own square, and supertraces kill commutators.

*True by definition.* MSC 19L10 (Riemann-Roch theorems, Chern characters), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** A superconnection A on a graded bundle is an odd operator on bundle-valued forms with the graded Leibniz rule A(αs) = dα·s + (−1)ᵏαA(s) for each k-form α. Its Chern form is the supertrace of exp(−A²), the even trace minus the odd trace. The Leibniz rule makes the derivative of a supertrace equal the supertrace of the graded commutator with A (our own).

**Problem.** The Chern character form of a finite-rank superconnection is closed.

**How the definition helps.** A commutes with its square, so it commutes with exp(−A²), and the derivative of the Chern form is the supertrace of a zero commutator (our own). The transgression formula shows this definition gives the same cohomology class as the ordinary connection formula, with matching normalization.

**Paper or page:** [The families analytic index for 1∣1-dimensional Euclidean field theories](https://arxiv.org/abs/2303.09207v1). It says: “When it exists, the Chern form of a Clₙ-linear superconnection 𝔸 is closed and has total degree n.”

**Sources:**

- [Daniel Quillen, Superconnections and the Chern character (1985)](https://doi.org/10.1016/0040-9383(85)90047-3)

### Connective K-theory modulo Bott gives integers

**Remember:** Kill negative degrees, and β stops being invertible.

*Rules out counterexamples.* MSC 19L41 (Connective \\(K\\)-theory, cobordism), 55N20. arXiv math.AT, math.KT. Level 4: research.

**Definition.** Connective K-theory ku is the connective cover of periodic K-theory KU, keeping its homotopy groups in degrees zero and up and removing the negative ones. So the homotopy ring of ku is ℤ\[β\], where the Bott element β in degree two is no longer invertible (our own).

**Problem.** The cofiber of multiplication by β on ku represents ordinary integral cohomology. Here the cofiber is the homotopy version of the quotient by a map.

**How the definition helps.** Multiplication by β on ℤ\[β\] is injective with cokernel ℤ in degree zero, so the cofiber has only ℤ in degree zero (our own). A spectrum with only ℤ in degree zero represents ordinary integral cohomology. In KU, β is invertible, so the cofiber vanishes instead.

**nLab:** [ku](https://ncatlab.org/nlab/show/ku), [Bott periodicity](https://ncatlab.org/nlab/show/Bott+periodicity). It says: “The ring spectrum commonly denoted ku is the connective cover of the spectrum KU, which represents complex topological K-theory.”

**Sources:** none listed. No primary source with a working link was found.

### Character averaging gives nondegenerate pairings

**Remember:** Average the product of characters; orthogonality reads off coefficients modulo integers.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L47, 57R18. arXiv math.KT. Level 4: research.

**Definition.** For a finite group G, pair a virtual character χ with a class function f modulo virtual characters by averaging χ(g)f(g) over G and reducing modulo ℤ. By character orthogonality, an irreducible character paired with f gives the coefficient of its complex conjugate in f (our own).

**Problem.** This intersection pairing takes values in ℂ/ℤ and detects every nonzero class on either side.

**How the definition helps.** The pairing reads off integer coefficients of χ times complex coefficients of f, modulo ℤ (our own). If f is not a virtual character, some coefficient is not an integer, and the matching irreducible character detects it (our own). If χ has a nonzero coefficient a, then 1/(2a) times the matching conjugate character pairs to ½ (our own).

**nLab:** [delocalized equivariant cohomology](https://ncatlab.org/nlab/show/delocalized+equivariant+cohomology). It says: “the disjoint union of fixed loci”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)

### Chern–Simons relations cancel stabilization changes

**Remember:** A connection change is paid for by its Chern–Simons form.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J28. arXiv math.KT, math.DG. Level 4: research.

**Definition.** A differential K-cycle is a Hermitian bundle with unitary connection ∇ and an odd form φ modulo exact forms. Two cycles are equal if, after adding a common bundle with connection and choosing a unitary identification, φ₁ − φ₂ equals the Chern–Simons form CS(∇₁,∇₂), whose derivative is ch(∇₂) − ch(∇₁). So a change of connection is cancelled by the same change in the form (our own).

**Problem.** Consider a family of closed even-dimensional Spinᶜ fibers with metrics and compatible connections defining its Dirac operators. Any two finite bundle additions making the positive operators surjective give the same differential analytic index.

**How the definition helps.** Ho proves that the two stabilized kernel bundles are isomorphic and that their eta forms differ by exactly the required Chern–Simons form, modulo exact forms. The relation in the definition then identifies the two corrected cycles (our own).

**Paper or page:** [Local index theory and ℤ/kℤ K-theory](https://arxiv.org/abs/2410.16399). It says: “Then there exists a ℤ₂-graded morphism”

**Sources:**

- [Man-Ho Ho, Local index theory and ℤ/kℤ K-theory, Proposition 5.1](https://arxiv.org/abs/2410.16399)

### Circle integration excludes exotic addition

**Remember:** Odd classes are circle integrals of even classes.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.AT. Level 4: research.

**Definition.** Circle integration on a smooth K-theory extension is a natural additive map K̂ʲ(S¹×M) → K̂ʲ⁻¹(M) that commutes with the underlying class, curvature and form maps. It kills pullbacks from M and changes sign under circle reversal. Every odd class on M is the circle integral of an even class on S¹×M (our own).

**Problem.** Any two such extensions on smooth manifolds admit a unique natural isomorphism preserving the structure maps and circle integration. Without circle integration, nonisomorphic extensions exist.

**How the definition helps.** Bunke and Schick prove uniqueness in even degrees using approximations by smooth manifolds (our own). Circle integration then forces the comparison in odd degrees, since each odd class comes from an even class on S¹×M (our own). Without integration, they construct a different addition on K̂¹ (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “If we don't require compatibility with S¹-integration, then there are "exotic" abelian group structures on K̂¹.”

**Sources:**

- [Bunke and Schick, Uniqueness of smooth extensions of generalized cohomology theories, Theorems 3.3 and 6.2](https://doi.org/10.1112/jtopol/jtq002)

### Connections absorb odd form corrections

**Remember:** A connection on a trivial bundle can store an odd form correction.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A structured bundle is a complex bundle with a connection, up to changes whose Chern–Simons form is exact, the odd form whose derivative is the difference of the Chern character forms. Differential K-classes are formal differences of structured bundles, so form corrections live in connections rather than in a separate form (our own).

**Problem.** On a compact smooth manifold, every degree-zero differential K-class with complex connections and complex forms admits a representative with zero auxiliary form.

**How the definition helps.** The Simons–Sullivan realization theorem does the work. It realizes each odd form, modulo exact forms and odd Chern characters, by connections on a trivial bundle. Adding that trivial bundle moves the auxiliary form of a representative into its connection (our own).

**nLab:** [Simons-Sullivan structured bundle](https://ncatlab.org/nlab/show/Simons-Sullivan+structured+bundle). It says: “such that the corresponding Grothendieck group is a model for differential K-theory.”

**Sources:**

- [James Simons and Dennis Sullivan, Structured vector bundles define differential K-theory, Proposition 2.6](https://www.claymath.org/library/proceedings/cmip011c.pdf)

### Curvature distinguishes orbifold representations

**Remember:** A character records the trace of every symmetry.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L47, 57R18. arXiv math.KT, hep-th. Level 4: research.

**Definition.** For a finite group acting on a point, orbifold K-curvature records one number per conjugacy class. For a virtual representation, a formal difference of representations, that number is the difference of their traces, so the curvature is the full character (our own).

**Problem.** Orbifold curvature distinguishes all even differential K-classes of a point with finite symmetry.

**How the definition helps.** A character determines a virtual representation, and the differential K-theory exact sequence identifies the even group with virtual representations (our own). Without the nonidentity classes, the sign and trivial representations of the group of order two would look alike (our own).

**nLab:** [delocalized equivariant cohomology](https://ncatlab.org/nlab/show/delocalized+equivariant+cohomology). It says: “of the disjoint union of fixed loci”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)
- [Richard J. Szabo and Alessandro Valentino, Ramond-Ramond Fields, Fractional Branes and Orbifold Differential K-Theory (2010)](https://doi.org/10.1007/s00220-009-0975-1)

### Determinants retain form corrections

**Remember:** Correct the top exterior power connection by subtracting 2πi times the one-form.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A degree-zero Freed–Lott representative is a Hermitian bundle with unitary connection and an odd form modulo exact forms. Its differential determinant is the top exterior power with the induced connection minus 2πi times the one-form part. This correction absorbs the change allowed in the representative, because the degree-one Chern–Simons form is a fixed multiple of the trace of the connection difference (our own).

**Problem.** The differential determinant sends sums of differential K-classes to tensor products of lines with connection. Its value up to connection-preserving isomorphism depends only on the class.

**How the definition helps.** When a representative changes its connection and form by a matching Chern–Simons term, the one-form correction cancels the change in the determinant connection (our own). Changing the correction by an exact form gives an isomorphic connection. Sums go to tensor products because the top exterior power of a sum is the tensor product of top powers (our own).

**nLab:** [determinant line bundle](https://ncatlab.org/nlab/show/determinant+line+bundle). It says: “line bundle with connection that refines the first Chern-class to ordinary differential cohomology.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Section 8.1](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Differential Todd classes package Riemann–Roch

**Remember:** Fold the orientation’s correction into the Todd class, then integrate.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L10. arXiv math.KT, math.DG. Level 4: research.

**Definition.** For a smooth K-orientation with Spinᶜ connection ∇ and odd correction σ, the differential Todd class is T̂ = τ̂(∇) − a(σ), the differential Spinᶜ Todd class of ∇ minus σ viewed as a differential class. Todd-corrected integration sends y to the fiber integral of T̂ ∪ y, so one map carries all the orientation data.

**Problem.** For a smoothly K-oriented proper submersion of compact manifolds, the differential Chern character into rational differential cohomology carries the K-theory pushforward to Todd-corrected integration.

**How the definition helps.** With the orientation terms packed into T̂, the Riemann–Roch formula becomes one commuting square (our own). The ordinary and local index theorems match the underlying classes and the curvatures. Bunke and Schick then show that the remaining flat difference vanishes.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Lemma 6.17 and Theorem 6.19](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Eta corrections restore index curvature

**Remember:** The derivative of the eta form supplies the missing curvature.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J28. arXiv math.KT, math.DG. Level 4: research.

**Definition.** For a geometric family whose kernels form a smooth graded bundle, the differential analytic index is the virtual kernel bundle with its projected connection. Its form part is the Bismut–Cheeger eta form plus the fiber integral of Todd(∇) ∧ φ, for input form φ. The derivative of the eta form is exactly the gap between the kernel’s Chern form and the integrated Todd form of the input (our own).

**Problem.** Consider closed even-dimensional fibers with a metric and a Spinᶜ connection, the geometry defining the Dirac operators. If their kernels form bundles, index curvature equals input curvature integrated over each fiber with its Todd characteristic form.

**How the definition helps.** Index curvature is the kernel’s Chern form plus the derivative of the form part (our own). The local families index theorem computes the derivative of the eta form, which fills the gap. The derivative of the integrated input form supplies the rest of the input curvature.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Definition 3.12 and Lemma 3.14](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Exact connection changes preserve curvature

**Remember:** An exact change contributes zero after differentiation.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Two connections on a smooth complex bundle define the same structured connection exactly when their Chern–Simons form is exact. The derivative of that form is the difference of their Chern character forms (our own).

**Problem.** Taking the difference of Chern character forms gives a well-defined curvature map on formal differences of these structured bundles.

**How the definition helps.** An exact form has zero derivative, so equivalent connections have equal Chern character forms (our own). The transgression formula supplies the identity between that derivative and the difference of Chern forms (our own). Additivity under direct sum extends the map to formal differences (our own).

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “the equivalence relation that identifies two connections ∇ and ∇′ if their Chern-Simons form CS(∇,∇′) is exact.”

**Sources:** none listed. No primary source with a working link was found.

### Exact transgression distinguishes flat connections

**Remember:** Exact means zero integral around the circle.

*Rules out counterexamples. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A structured bundle is a complex bundle with connection, where two connections are equivalent when their Chern–Simons form is exact. This odd form integrates the Chern character along a path of connections, and on a circle an exact one-form has integral zero (our own).

**Problem.** On the trivial line over a circle, flat unitary connections with different holonomy give distinct structured bundles. Holonomy is the phase acquired by transporting a vector once around the circle.

**How the definition helps.** For two flat connections on the trivial line, the normalized difference form integrates, modulo integers, to the angle between their holonomies (our own). Different holonomy makes this integral nonzero, so the form is not exact (our own). Simons and Sullivan show that other paths change the form only by exact forms, and other trivializations shift the integral only by integers (our own).

**nLab:** [Simons-Sullivan structured bundle](https://ncatlab.org/nlab/show/Simons-Sullivan+structured+bundle). It says: “The equivalence relation divided out is relation by a concordance such that the corresponding Chern-Simons form is exact.”

**Sources:**

- [Simons and Sullivan, Structured vector bundles define differential K-theory](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/Simons-Sullivan.pdf)

### Fiber pairing prevents zero transforms

**Remember:** The matching line must pair the two fibers.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 81T30. arXiv math.KT, hep-th. Level 4: research.

**Definition.** A T-duality correspondence of dual principal torus bundles is an isomorphism of their pulled-back twists on the fiber product over the base. On each fiber, its mixed first Chern class must equal the evaluation pairing of the two fiber lattices, so the matching line pairs the two tori perfectly (our own).

**Problem.** For a geometric T-duality correspondence, pulling back, matching twists, and integrating over the other projection gives an isomorphism of twisted K-groups.

**How the definition helps.** The pairing condition makes the fiberwise matching the Poincaré line, and the topological T-duality theorem proves the transform invertible (our own). Without it, on two untwisted circles the identity matching integrates the unit to zero (our own).

**Paper or page:** [Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799). It says: “of twisted K-theory groups is an isomorphism.”

**Sources:**

- [Konrad Waldorf, Geometric T-duality: Buscher rules in general topology](https://doi.org/10.1007/s00023-023-01295-0)

### Flat lines change twist identifications

**Remember:** A symmetry of the zero twist is a flat line acting by tensor product.

*Rules out counterexamples. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 53C08. arXiv math.KT. Level 4: research.

**Definition.** A connection-preserving automorphism of the trivial gerbe with zero curving is a line bundle with flat connection, up to connection-preserving isomorphism. It acts on twisted differential K-theory by tensor product (our own).

**Problem.** A symmetry of the zero twist can act nontrivially on differential K-theory of the circle.

**How the definition helps.** On the circle, a flat line with holonomy −1 sends the unit to a line with different holonomy, so the action is nontrivial (our own). Keeping only the degree-three class of the twist would forget this action (our own).

**nLab:** [twisted differential K-theory](https://ncatlab.org/nlab/show/twisted+differential+K-theory). It says: “the combination of differential K-theory and twisted K-theory.”

**Sources:**

- [Fabio Ferrari Ruffino and Juan Carlos Rocha Barriga, Twisted differential K-characters and D-branes (2020)](https://doi.org/10.1016/j.nuclphysb.2020.115169)
- [Byungdo Park, Geometric models of twisted differential K-theory I (2018)](https://doi.org/10.1007/s40062-017-0177-z)

### Flat pushforwards forget refinements

**Remember:** Flat classes keep the topological orientation and forget its differential choices.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J20, 57R18. arXiv math.KT. Level 4: research.

**Definition.** A differential K-class is flat if its curvature form vanishes. Changing the differential refinement of a K-orientation changes the integral by a term that is a form times the curvature (our own).

**Problem.** On a closed manifold with a finite group action, the equivariant integral of a flat differential K-class depends only on the underlying equivariant K-orientation.

**How the definition helps.** Bunke and Schick’s homotopy formula writes the change of the integral along a path of refinements as a form times the curvature. For a flat class this term is zero, so only the topological orientation matters (our own). General classes can retain the geometric choices (our own).

**nLab:** [flat K-theory](https://ncatlab.org/nlab/show/flat+K-theory). It says: “the restriction (namely the homotopy pullback) of differential K-theory (any version of it) to vanishing generalized-curvature.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)

### Fredholm sections allow nontorsion twists

**Remember:** Finite rank forces torsion, while a Fredholm bundle can carry any twist.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a finite cell complex X and twist h ∈ H³(X;ℤ), choose a bundle P of projective unitary groups PU(H) of class h, for an infinite-dimensional separable Hilbert space H. Then Kʰ⁰(X) is the homotopy classes of sections of the bundle of Fredholm operators associated to P by conjugation, in the norm topology. Conjugation ignores scalar phases, so this works for every h (our own).

**Problem.** On a finite cell complex, the Fredholm model defines twisted K-theory for every degree-three integral class. Twisted bundles of finite positive rank exist only when the class has finite order.

**How the definition helps.** For a twisted bundle of constant rank r, taking determinants raises each phase to the rth power, so r·h = 0. On the three-sphere, a generator of H³ has infinite order, so no positive rank works.

**nLab:** [twisted K-theory](https://ncatlab.org/nlab/show/twisted+K-theory). It says: “then the corresponding χ-twisted cohomology spectrum is that consisting of the spaces of sections”

**Sources:**

- [Michael Atiyah and Graeme Segal, Twisted K-theory and cohomology (2006)](https://doi.org/10.1142/9789812772688_0002)

### Global sections recover differential K-theory

**Remember:** Sections carry bundle, connection and Chern–Simons form together.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A cycle over C∞(X;ℂ) is a finitely generated projective module with connection ∇ and an odd complex form φ modulo exact forms. Two cycles agree if, after adding a common module and identifying, φ₁ − φ₂ = CS(∇₁,∇₂) modulo exact forms, where dCS = ch(∇₂) − ch(∇₁). This is the bundle definition with each bundle replaced by its module of smooth sections (our own).

**Problem.** For a compact smooth manifold X, taking sections identifies degree-zero differential K-theory of complex bundles with the module group of smooth complex functions on X. Both models use complex connections and complex differential forms.

**How the definition helps.** The smooth Serre–Swan theorem matches bundles with connection to projective modules with connection (our own). Taking sections preserves direct sums and Chern character forms, so it also matches the Chern–Simons relation (our own).

**Paper or page:** [Noncommutative Differential K-theory](https://arxiv.org/abs/2106.12073). It says: “which is an isomorphism of abelian groups natural in X.”

**Sources:**

- [Byungdo Park, Arthur J. Parzygnat, Corbett Redden and Augusto Stoffel, Noncommutative Differential K-theory, Theorem 4.31](https://arxiv.org/abs/2106.12073)

### Invariant curvature removes T-duality kernels

**Remember:** Invariant curvature survives averaging along the torus.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A twisted differential K-class on a torus bundle is geometrically invariant when translations along the fibers preserve its curvature form. T-duality pulls a class to the fiber product with the dual bundle, changes the twist and integrates over the original torus, which averages away non-invariant parts (our own).

**Problem.** For a differential T-duality pair of principal torus bundles, T-duality identifies the geometrically invariant subgroups, shifting degree by the fiber dimension. On the full groups it can have a kernel.

**How the definition helps.** On invariant classes, topological T-duality and the matching isomorphism on invariant forms give the isomorphism. On the standard dual circle pair, a nonconstant function of mean zero gives a class with nonzero curvature but zero transform (our own).

**nLab:** [T-Duality and Differential K-Theory](https://ncatlab.org/nlab/show/T-Duality+and+Differential+K-Theory). It says: “this setup naturally induces the T-duality operation as an isomorphism on twisted differential K-theory.”

**Sources:**

- [Alexander Kahle and Alessandro Valentino, T-Duality and Differential K-Theory (2014)](https://doi.org/10.1142/S0219199713500144)

### Odd classes are character quotients

**Remember:** A point with symmetry contributes one function value per conjugacy class.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L47, 57R18. arXiv math.KT. Level 4: research.

**Definition.** For a finite group G acting on a point, the inertia orbifold is G modulo conjugation, with stabilizers kept. So its complex-valued functions are the class functions on G, one value per conjugacy class (our own).

**Problem.** The odd differential K-group of this point is the additive group of these functions modulo virtual characters, the integer combinations of representation traces.

**How the definition helps.** In the differential K-theory exact sequence for this point, odd topological K-theory vanishes, so the odd group is these functions modulo the image of the character map (our own). That map sends representations to their traces, so its image is the virtual characters (our own).

**nLab:** [delocalized equivariant cohomology](https://ncatlab.org/nlab/show/delocalized+equivariant+cohomology). It says: “is the ordinary cohomology of the quotient space”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)

### Orientation twists permit K-theory pushforwards

**Remember:** The normal bundle supplies the twist needed for integration.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 81T30. arXiv math.KT, hep-th. Level 4: research.

**Definition.** The K-theory orientation twist of an oriented real vector bundle N is W₃(N), the integral Bockstein of its second Stiefel–Whitney class. It is the obstruction to a Spinᶜ structure, so N has a Thom class in K-theory twisted by W₃(N) (our own).

**Problem.** For a smooth embedding of closed manifolds with oriented normal bundle, the twisted K-theory pushforward accepts the restricted target twist plus W₃(N). Its degree shift is the codimension modulo two.

**How the definition helps.** The twisted Thom isomorphism moves classes on the submanifold, twisted by the restricted target twist plus W₃(N), into compactly supported K-theory of the normal bundle (our own). Extending from the tubular neighborhood then gives the pushforward, shifting degree by the codimension modulo two (our own).

**nLab:** [Freed-Witten anomaly](https://ncatlab.org/nlab/show/Freed-Witten+anomaly). It says: “Postcomposition with this map in KK-theory now yields a map from the i⁎χ ⊗ W₃(NQ)-twisted K-theory of Q to the χ-twisted K-theory of X”

**Sources:**

- [Alan L. Carey and Bai-Ling Wang, Thom isomorphism and push-forward map in twisted K-theory (2008)](https://doi.org/10.1017/is007011015jkt011)

### Pulled-back orientations give base change

**Remember:** Pulled-back geometry is the old geometry over each point.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** The pullback of a smooth K-orientation along a map of bases pulls back the vertical Spinᶜ structure, metric, connection and correction form, and lifts tangent vectors by the original horizontal lift of their images. So over each new base point the geometry is the old geometry (our own).

**Problem.** For a smoothly K-oriented proper submersion with closed fibers between compact manifolds, forming the differential K-theory pushforward commutes with smooth pullback between compact bases.

**How the definition helps.** Pulled-back geometry gives the same Dirac operators, eta forms and correction forms over each base point, and fiber integration commutes with pullback (our own). The work lies in defining the index on classes, where different families can represent the same class.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “a differential-geometric cocycle model of differential K-theory where cocycles are given by smooth families of Dirac operators.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Lemmas 3.10 and 3.20](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Sign transport kills constant curvature

**Remember:** A constant carried around the circle must return with the opposite sign.

*Rules out counterexamples. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.KT. Level 4: research.

**Definition.** For the nontrivial degree-one twist of real K-theory on the circle, degree-zero curvature takes values in a flat real line whose parallel transport around the circle multiplies every value by −1.

**Problem.** The degree-zero curvature component of every degree-zero differential real K-class with this twist vanishes.

**How the definition helps.** A closed zero-form with these coefficients is a parallel section, so after one loop it equals its own negative, hence zero (our own). With ordinary real coefficients, the untwisted unit has constant curvature 1 (our own). The input from twisted real K-theory is the identification of this coefficient line (our own).

**nLab:** [twisted differential K-theory](https://ncatlab.org/nlab/show/twisted+differential+K-theory). It says: “More detailed discussion of twisted differential K-theory for KU/KO and its application to K-theory classification of D-brane charge”

**Sources:**

- [Daniel Grady and Hisham Sati, Twisted differential KO-theory (2026)](https://doi.org/10.2140/tunis.2026.8.265)

### Smooth orientations fix pushforward curvature

**Remember:** The correction cancels the change in the Todd form.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A smooth K-orientation refines a vertical Spinᶜ structure by a vertical metric, horizontal distribution, compatible Spinᶜ connection and odd form σ modulo exact forms. Equivalent refinements change σ by the Todd transgression between the two connections, so dσ changes exactly as the Todd form T does (our own).

**Problem.** For a smoothly K-oriented proper family of closed fibers, T − dσ depends only on the orientation. Integrating input curvature against this weight gives the curvature of the differential K-theory pushforward, the index on the base.

**How the definition helps.** The transgression formula says T changes by the derivative of the Todd transgression. Since σ changes by the same transgression, T − dσ is unchanged (our own). The local families index formula then gives the asserted curvature.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Definition 3.5 and Lemmas 3.16–3.17](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Spectra glue twisted classes

**Remember:** Glue the spectra first, then take classes.

*True by definition. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.KT. Level 4: research.

**Definition.** Twisted differential K-theory is a sheaf of spectra, so for a cover U ∪ V its spectrum is the homotopy pullback of the spectra on U and V over U ∩ V. A point of this pullback is a pair of local points with a path between their restrictions.

**Problem.** On a smooth manifold covered by two open sets, twisted differential K-classes agreeing on the intersection extend to a class on the union.

**How the definition helps.** Equal restricted classes supply a path between the restricted representatives, so the two local points and this path give a point on the union (our own). The choice of path can affect the extension (our own). The work lies in proving that the spectrum satisfies this sheaf condition (our own).

**nLab:** [twisted differential cohomology](https://ncatlab.org/nlab/show/twisted+differential+cohomology). It says: “may be understood as sheaves of parametrized spectra”

**Sources:**

- [Ulrich Bunke and Thomas Nikolaus, Twisted differential cohomology (2019)](https://doi.org/10.2140/agt.2019.19.1631)

### Stabilization handles jumping kernels

**Remember:** Stabilize the operator family instead of trying to bundle its kernels.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A finite-dimensional reduction splits both graded spaces of sections into a smooth finite-rank subbundle and a complementary Hilbert bundle. The positive Dirac family preserves the splittings and is an isomorphism on the complements, so the finite parts carry the whole index even where kernel dimensions jump (our own).

**Problem.** For a smooth family of closed even-dimensional Spinᶜ manifolds over a compact base, the differential analytic index exists even when kernel dimensions jump. The family carries metrics and compatible connections defining its Dirac operators.

**How the definition helps.** Freed and Lott prove that such reductions exist and that the resulting class does not depend on the choice. When the kernels form bundles, their formula recovers the kernel index.

**Paper or page:** [An extended variational formula for the Bismut-Cheeger eta form and its applications](https://arxiv.org/abs/2209.00502). It says: “is a well defined group homomorphism.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Lemma 7.13, Definition 7.27 and Corollary 7.36](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)
- [Man-Ho Ho, An extended variational formula for the Bismut-Cheeger eta form and its applications, Proposition 1.2](https://arxiv.org/abs/2209.00502)

### Structured bundles give tensor multiplication

**Remember:** Tensoring multiplies a connection difference by a closed Chern character form.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N15. arXiv math.AT. Level 4: research.

**Definition.** A structured bundle is a complex bundle with connection, up to changes whose Chern–Simons form is exact. That odd form integrates the Chern character along a path of connections, so tensoring with a fixed bundle multiplies it by a closed Chern character form (our own). The Simons–Sullivan group consists of formal differences of structured bundles under direct sum.

**Problem.** Tensor product induces a multiplication on the Simons–Sullivan group, making it a model of the differential K-theory ring in degree zero.

**How the definition helps.** An exact form times a closed form is exact, so tensor product respects the equivalence relation (our own). Distributivity then extends the multiplication to formal differences (our own).

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “Under direct sum and tensor product of vector bundles, this becomes a commutatve rig.”

**Sources:**

- [Simons and Sullivan, Structured vector bundles define differential K-theory](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/Simons-Sullivan.pdf)

### Suspension transfers the index theorem

**Remember:** Suspend and desuspend in the same way for both indices.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** The odd index of an odd differential K-class x is defined by suspension: multiply x by the differential circle generator that integrates to one, apply the even index over the product with the circle, and integrate over the circle. The analytic and topological odd indices use these same circle operations.

**Problem.** For a proper smooth family of closed even-dimensional fibers, the odd analytic and topological indices agree. The fibers carry metrics and Spinᶜ connections defining the family of Dirac operators.

**How the definition helps.** Both odd indices are the same circle operations around an even index, so they agree once the even indices agree (our own). Freed and Lott prove equality in even degree and construct the two circle operations.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Section 9.25](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Tensor products add twists

**Remember:** Multiply the classes by tensoring the twists.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.KT. Level 4: research.

**Definition.** Represent degree-three differential twists by circle gerbes with connection and curving. The sum of two twists is their tensor product gerbe, whose transition phases multiply and whose connection forms and curvings add.

**Problem.** For degree-three differential twists, multiplication of differential K-classes lands in the sum of their twists. The curvature of their product is the wedge product of their curvatures.

**How the definition helps.** A product of classes twisted by two gerbes is twisted by their tensor product, which is the sum of the twists (our own). Curvature is multiplicative, so the product’s curvature is the wedge product of the curvatures (our own). Constructing compatible product maps in the spectrum model is the substantive step (our own).

**nLab:** [twisted differential K-theory](https://ncatlab.org/nlab/show/twisted+differential+K-theory). It says: “the combination of differential K-theory and twisted K-theory.”

**Wikipedia:** [Twisted K-theory](https://en.wikipedia.org/wiki/Twisted_K-theory). It says: “the product of an element of K-theory with twist H with an element of K-theory with twist H′ is an element of K-theory twisted by H+H′.”

**Sources:**

- [Ulrich Bunke and Thomas Nikolaus, Twisted differential cohomology (2019)](https://doi.org/10.2140/agt.2019.19.1631)

### Topological indices determine analytic determinants

**Remember:** Divide determinant lines and shift their connection by the degree-one correction.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J28. arXiv math.KT, math.DG. Level 4: research.

**Definition.** The differential determinant of a differential K-class is the quotient of the two determinant lines of its virtual bundle. Its connection is the induced one shifted by −2πi times the degree-one part of the form correction, so it depends only on the differential K-class (our own).

**Problem.** For a compact geometric family of twisted Spinᶜ Dirac operators on closed even-dimensional fibers, the differential topological index determines the analytic determinant line. After periodicity shifts the index to degree zero, its differential determinant is the dual of the Bismut–Freed line with connection.

**How the definition helps.** The families index theorem makes the analytic and topological differential indices equal, so their differential determinants agree (our own). Freed and Lott identify the analytic index determinant with the dual of the Bismut–Freed line with connection.

**nLab:** [determinant line bundle](https://ncatlab.org/nlab/show/determinant+line+bundle). It says: “line bundle with connection that refines the first Chern-class to ordinary differential cohomology.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Theorem 7.42 and Proposition 8.3](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Topological orientations miss differential indices

**Remember:** The orientation’s odd form shifts the index without changing topology.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** With vertical metric, horizontal distribution and compatible Spinᶜ connection fixed, a smooth K-orientation still carries an odd form σ modulo exact forms. This form enters the pushforward directly, through its integral against the curvature of the input (our own).

**Problem.** On an oriented circle over a point, keep the metric, Spinᶜ structure and connection fixed. Two orientation forms differing by a one-form of integral ½ give different pushforwards of the unit class.

**How the definition helps.** The unit has curvature 1, so raising the integral of σ by ½ changes the index of the unit by −½ in ℝ/ℤ. This uses the pushforward formula and the odd differential K-group of a point, ℝ/ℤ.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Sections 3.1.10 and 3.2.2 and Lemma 5.1](https://www.numdam.org/item/AST_2009__328__45_0.pdf)
