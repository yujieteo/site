### Marks defined as hom-set sizes make the mark map a ring homomorphism

**Remember:** A pair is fixed exactly when both entries are fixed.

*True by definition.* MSC 19A22 (Frobenius induction, Burnside and representation rings), 20C15. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** For a finite group G, the Burnside ring is built from finite G-sets, with disjoint union as sum and Cartesian product as product. The H-mark of a G-set X is the number of points that the subgroup H fixes. Write it as the number of G-maps from G/H to X.

**Problem.** For each subgroup H, the H-mark gives a ring homomorphism from the Burnside ring to ℤ.

**How the definition helps.** As a count of maps out of G/H, the mark sends products to products at once. A G-map from G/H into a disjoint union lands in one part, because G/H is a single orbit, so sums go to sums. The nLab says that the hom-set description makes the ring homomorphism manifest. Formal differences then extend the map from the semiring to the ring. A description by product coefficients on orbits would need those coefficients first; this comparison is our own.

**nLab:** [table of marks](https://ncatlab.org/nlab/show/table+of+marks). It says: “all other steps use that the mark homomorphism is a ring homomorphism, which we made manifest by expressing the marks via hom-sets”

**Sources:** none listed. No primary source with a working link was found.

### Length classifies Artinian local G₀

**Remember:** Every simple factor contributes one copy of the residue field.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13D15. arXiv math.KT. Level 3: graduate.

**Definition.** G₀ has one generator \[M\] for each isomorphism class of finitely generated modules. For every finitely generated submodule N impose \[M\] = \[N\] + \[M/N\]. The split group uses only direct sum relations.

**Problem.** Let R be a commutative Artinian local ring. It has one maximal ideal, and descending chains of ideals stabilize. Module length counts the simple factors in a composition series and identifies G₀(R) with ℤ.

**How the definition helps.** In our own proof, the relations replace each module by the sum of its simple factors. Every factor is the residue field, the quotient by the maximal ideal. The finite length theorem supplies the series and makes its length additive. For the ring of dual numbers over a field k, write ε for its generator with ε² = 0. Multiplication by ε has rank one on the ring and zero on two residue fields. That rank respects direct sums, so the split group distinguishes them.

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/00JI). It says: “The map lengthᵣ : K′₀(R) → ℤ”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes multiply in K₀

**Remember:** Bounded projective complexes keep tensor products bounded and exact on triangles.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 18F25. arXiv math.KT. Level 3: graduate.

**Definition.** A perfect complex has a bounded model made of direct summands of finite free modules. Maps inducing homology isomorphisms identify models. In K₀ the class of a mapping cone, the complex associated to a map, is target minus source. Compute the derived tensor product by tensoring these models.

**Problem.** For every commutative ring, derived tensor product gives a ring structure on K₀ of perfect complexes.

**How the definition helps.** In our own proof, tensoring bounded projective models gives another such model and preserves mapping cones. The cited lemma then gives bilinearity. The ring itself supplies the unit, and the usual tensor identities give associativity and commutativity. Over k\[ε\]/(ε²), for a field k, the residue field k has an infinite free resolution with every differential multiplication by ε. Tensoring it with k gives zero differentials, so the product has homology in arbitrarily high degrees.

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/0FCT). It says: “Then ⊗ induces a bilinear map K₀(𝒟) × K₀(𝒟′) → K₀(𝒟″) which sends (\[X\], \[X′\]) to \[X ⊗ X′\].”

**Sources:** none listed. No primary source with a working link was found.

### Projectives separate product-ring K₀

**Remember:** Each factor of a product ring gets its own projective summand.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings). arXiv math.KT. Level 3: graduate.

**Definition.** A finitely generated projective module is a direct summand of a finite free module. Define K₀ by taking isomorphism classes of these modules under direct sum and adjoining formal differences.

**Problem.** For unital rings R and S, K₀(R × S) is the direct sum of K₀(R) and K₀(S).

**How the definition helps.** Projective modules allow the two components to have different ranks (our own explanation). Multiplication by (1, 0) and (0, 1) splits each module into one module over each factor. A pair of finitely generated projective modules gives a projective module over the product by taking their product. This correspondence preserves direct sums, so taking formal differences gives the stated isomorphism. Over a product of two fields, finite free modules give only pairs of equal ranks.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “The functor K₀ takes a ring A to the Grothendieck group of the set of isomorphism classes of its finitely generated projective modules”

**Sources:** none listed. No primary source with a working link was found.

### Quillen’s construction remembers nonsplit sequences

**Remember:** Choosing more exact sequences can change the group for the same modules.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 19D06. arXiv math.KT. Level 3: graduate.

**Definition.** An exact structure selects the short exact sequences used to compute K-theory. Its group K₀ has one generator per isomorphism class of objects. Each selected sequence gives the relation that the middle class equals the sum of the two outer classes. The split structure selects sequences isomorphic to direct sums.

**Problem.** For finite modules over ℤ/4ℤ, all short exact sequences give K₀ ≅ ℤ. Using only split sequences gives K₀ ≅ ℤ².

**How the definition helps.** In our own example, selecting all short exact sequences introduces a relation that the split structure misses. Every finite module here is a unique direct sum, up to order, of copies of ℤ/2ℤ and ℤ/4ℤ. These give two independent generators for the split structure. The subgroup of order two in ℤ/4ℤ has quotient ℤ/2ℤ, so the larger module represents twice the smaller one. Composition length counts the simple factors and proves that the smaller class has infinite order. Quillen identifies the group with these relations as the fundamental group of his Q-construction.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “the Q-construction works directly with short exact sequences.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Rank classifies local projective K₀

**Remember:** Over a local ring, projective means free and rank counts the generators.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13C10. arXiv math.KT. Level 3: graduate.

**Definition.** Define K₀ as the group of formal differences of finite projective modules, with direct sum as addition. A finite projective module is a direct summand of a finite free module.

**Problem.** Rank identifies K₀ of a commutative local ring, a ring with one maximal ideal, with ℤ.

**How the definition helps.** In our own calculation, restricting to projective modules lets rank distinguish all classes before taking differences. The cited theorem says these modules are free over a local ring. Taking differences then turns nonnegative ranks into integers. For comparison, localize ℤ at a prime p by allowing denominators prime to p. The module ℤ/p has rank zero but contributes one to torsion length, an additive invariant for direct sums.

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/00JJ). It says: “Every finite projective R-module is finite free.”

**Sources:** none listed. No primary source with a working link was found.

### Exact sequences cancel Euler boundaries

**Remember:** Boundaries appear twice with opposite signs.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18F30. arXiv math.KT. Level 3: graduate.

**Definition.** Form a group with one generator \[B\] for each isomorphism class. Whenever A is a subobject of B, impose \[B\] = \[A\] + \[B/A\]. The split version imposes this relation only when B is a direct sum of the two pieces.

**Problem.** Take a bounded complex in an abelian category, where kernels and quotients behave as they do for modules. Its alternating sum of classes equals that of its homology.

**How the definition helps.** Our own proof uses the relation twice to split each term into its homology and two neighboring boundary classes. Each boundary appears once with each sign. In finitely generated abelian groups, the subgroup 2ℤ of ℤ forces \[ℤ/2\] = 0. Direct sum relations alone preserve the number of cyclic factors of order two.

**Paper or page:** [Grothendieck's proof of Hirzebruch-Riemann-Roch theorem](https://arxiv.org/abs/2511.06880v2). It says: “Then we have the following equality in K₀(𝒞) ∑ (−1)ⁱ\[Xᵢ\] = ∑ (−1)ⁱ\[Hᵢ(X•)\].”

**Sources:** none listed. No primary source with a working link was found.

### Finitely generated projectives keep K₀ from collapsing under the Eilenberg swindle

**Remember:** An infinite sum absorbs one more copy of its summand.

*Rules out counterexamples.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18F25. arXiv math.KT. Level 3: graduate.

**Definition.** Define K₀ of a ring from finitely generated projective modules under direct sum, and then adjoin inverses. A projective module is a direct summand of a free module. If all projective modules were allowed, including infinitely generated ones, the group would be zero.

**Problem.** Let an additive category have countable direct sums. Then its Grothendieck group, built from direct sums alone, is zero. An additive category is one where maps can be added and finite direct sums exist.

**How the definition helps.** The restriction to finitely generated modules removes the infinite sums that the swindle needs. For any object A, let S be the sum of countably many copies of A. Then A ⊕ S ≅ S, so \[A\] + \[S\] = \[S\] and \[A\] = 0. The nLab gives this argument as the reason to restrict to finitely generated projective modules. With that restriction, K₀(ℤ) = ℤ, since rank is additive (our own).

**nLab:** [Eilenberg swindle](https://ncatlab.org/nlab/show/Eilenberg+swindle). It says: “This is the reason that, for instance, one has to restrict oneself to categories of finitely generated (projective) modules (which lack infinite direct sums)”

**Sources:** none listed. No primary source with a working link was found.

### Residue fields compute torsion Euler characteristics

**Remember:** Send each residue field to its prime and shifts to inverses.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)). arXiv math.KT. Level 3: graduate.

**Definition.** Take bounded complexes of finite free abelian groups whose cohomology groups are finite. Their Grothendieck group K₀ identifies complexes up to quasi-isomorphism, meaning maps that preserve cohomology, and imposes additivity for exact triangles. Such triangles encode a complex, a subcomplex and their quotient. Define the multiplicative Euler characteristic on K₀ by sending the class of the group ℤ/p in degree zero to p.

**Problem.** The characteristic of a complex equals the product of the orders of its even cohomology groups divided by the corresponding product in odd degrees.

**How the definition helps.** Giving the value on each prime determines the whole characteristic, in our own explanation. Hyslop’s lemma identifies K₀ with the free abelian group on those prime classes. Each finite group decomposes by a filtration into factors of prime order, so its value equals its order. Successive cohomology truncations express the complex as an alternating sum in K₀. Thus the generator definition recovers the usual formula from cohomology orders.

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

**Remember:** Any abelian-valued homomorphism of matrix groups factors through K₁.

*True by definition.* MSC 19B99 (Whitehead groups and \\(K<sub>1</sub>\\)). arXiv math.KT. Level 3: graduate.

**Definition.** Let GL(R) be the union of the groups GLₙ(R), where A is identified with the block matrix diag(A, 1). Define K₁(R) as the abelianization of GL(R), its quotient by the commutator subgroup. The older definition divides GL(R) by the subgroup E(R) generated by elementary matrices. An elementary matrix is the identity plus one off-diagonal entry.

**Problem.** Every group homomorphism from GL(R) to an abelian group factors uniquely through K₁(R). The determinant over a commutative ring is one example.

**How the definition helps.** A homomorphism to an abelian group kills all commutators, so it factors through the abelianization (our own). With the quotient by E(R), one must first know that E(R) is the commutator subgroup. That fact is Whitehead's lemma, which Wikipedia states, and the work goes there.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “K₁(A) is the abelianization of the infinite general linear group”

**Sources:** none listed. No primary source with a working link was found.

### The Bloch complex exposes K₂

**Remember:** The differential lists exactly the relations for rational K₂.

*True by definition.* MSC 19C20 (Symbols, presentations and stability of \\(K<sub>2</sub>\\)), 19E15. arXiv math.KT. Level 3: graduate.

**Definition.** For a field F, take rational symbols \[x\] for x outside {0, 1}, subject to the five-term relations from five projective points. Map \[x\] to x ∧ (1−x) in the rational exterior square of the multiplicative group of F. This map, with source in degree one and target in degree two, is the rational Bloch–Suslin complex.

**Problem.** For a field F, the second cohomology of this complex is K₂(F) ⊗ ℚ, where K₂ is Quillen’s second K-group.

**How the definition helps.** Second cohomology here means taking the target modulo the image, so each x ∧ (1−x) becomes zero (our own). These are precisely the Steinberg relations in the rational symbol presentation of K₂. Matsumoto’s theorem identifies that presentation with Quillen’s group.

**Wikipedia:** [Bloch group](https://en.wikipedia.org/wiki/Bloch_group). It says: “This assertion is due to the Matsumoto theorem on K₂ for fields.”

**Sources:**

- [Hideya Matsumoto, Sur les sous-groupes arithmétiques des groupes semi-simples déployés (1969)](https://numdam.org/articles/10.24033/asens.1174/)

### Finite resolutions identify K-theory with G-theory

**Remember:** Finite projective resolutions let projectives compute the module theory.

*Makes the theorem clean to state or prove.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a right noetherian ring R, every submodule of a finitely generated right module is finitely generated. Apply Quillen’s construction for categories with specified short exact sequences to all finitely generated right modules to obtain G(R). Applying it to finitely generated projectives gives K(R). Here projective modules are direct summands of free modules.

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

**Definition.** An exact category specifies which short sequences count as exact. An arrow X → Y in Quillen’s category Q presents X as a quotient of a subobject of Y, using these exact sequences. Presentations count up to isomorphism. Its K-theory space consists of based loops in the classifying space, formed by gluing simplices for chains of arrows.

**Problem.** For every small exact category E, its opposite exact category has naturally equivalent connective K-theory spaces.

**How the definition helps.** In our own proof, each arrow describes a subquotient, so duality exchanges two ways of presenting the same data. In the opposite category, an arrow presents X as a subobject of a quotient of Y. Take the inverse image of X in Y to recover a subobject mapping onto X. Conversely, divide Y by the kernel of that surjection. These operations respect composition and give inverse correspondences on presentations up to isomorphism. Using the Q-construction therefore gives the equivalence before taking classifying spaces. Comparison with the plus construction transfers this calculation to the classical ring model.

**nLab:** [Quillen Q-construction](https://ncatlab.org/nlab/show/Quillen+Q-construction). It says: “is a tool for producing the algebraic K-theory of a Quillen exact category 𝒞.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Simple modules compute finite-length K-theory

**Remember:** Simple layers compute K-theory without tracking their extensions.

*Makes the theorem clean to state or prove.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT. Level 3: graduate.

**Definition.** A simple module is nonzero and has no proper nonzero submodules. A finite-length module admits a finite chain of submodules from zero to itself with simple successive quotients. Call a finite direct sum of simple modules semisimple. Use short exact sequences of modules to define K-theory for both categories.

**Problem.** Over any unital ring, including the semisimple modules of finite length into all finite-length modules induces an equivalence of connective K-theory spaces.

**How the definition helps.** In our own explanation, finite length supplies exactly the filtration needed to reduce the calculation to simple layers. Submodules, quotients and finite sums of semisimple modules remain semisimple. Quillen’s dévissage theorem turns these closure properties and the finite filtrations into the claimed equivalence.

**Paper or page:** [Dévissage Hermitian Theory](https://arxiv.org/abs/2408.09633). It says: “the induced map K(𝒝) → K(𝒜) is a homotopy equivalence of spaces.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)
- [Satya Mandal, Dévissage Hermitian Theory](https://arxiv.org/abs/2408.09633)

### The plus construction defines all higher K-groups as homotopy groups

**Remember:** Make π₁ of BGL(R) abelian, keep the homology, and read off K-groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a ring R, let GL(R) be the union of the groups GLₙ(R), and let BGL(R) be its classifying space. The K-theory space is BGL(R)⁺, where ⁺ is Quillen's plus construction. This construction kills the subgroup E(R) of elementary matrices in the fundamental group without changing homology; E(R) is perfect, which means that it equals its own commutator subgroup. Then Kₙ(R) is defined as πₙ(BGL(R)⁺) for n ≥ 1.

**Problem.** The groups Kₙ(R) = πₙ(BGL(R)⁺), for n ≥ 1, are homotopy groups of one space. They agree with the classical K₁(R) = GL(R)/E(R) and with Milnor's K₂(R).

**How the definition helps.** The plus construction is built to give the right fundamental group, so K₁ is correct by construction. By Whitehead's lemma, E(R) is the commutator subgroup of GL(R), so π₁(BGL(R)⁺) = GL(R)/E(R). Agreement with Milnor's K₂ is a short theorem. Long exact sequences come more easily from Quillen's Q-construction, and the real content is Quillen's theorem that the two definitions agree.

**nLab:** [Quillen plus construction](https://ncatlab.org/nlab/show/Quillen+plus+construction), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group). It says: “The plus construction doesn't change the homology of the space but 'kills' a perfect normal subgroup of G within the classifying space BG.”

**Sources:**

- [Charles Weibel, The K-book: An introduction to algebraic K-theory, Graduate Studies in Mathematics 145, AMS (2013), Section IV.1](https://sites.math.rutgers.edu/~weibel/Kbook.html)
- [Marc Hoyois, On Quillen's plus construction (2019)](https://hoyois.app.uni-regensburg.de/papers/acyclic.pdf)

### Leading coefficients recover constants

**Remember:** At infinity, leading coefficients recover every constant unchanged.

*True by definition. Confidence: medium.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** On F(t), let the leading coefficient of a fraction be the leading coefficient of its numerator divided by that of its denominator. Specialize a Milnor symbol by taking the leading coefficient in every slot.

**Problem.** In every degree, inclusion of F into F(t) gives a split injection on Milnor K-groups, with leading-coefficient specialization as a retraction.

**How the definition helps.** Taking leading coefficients gives an explicit left inverse to the inclusion in the rational function exact sequence. In our own proof, the coefficient map preserves products and fixes constants. To descend to symbols it must kill each pair (f,1 − f). If f vanishes at infinity, the second coefficient is 1. At a pole the coefficients are u and −u, whose symbol vanishes. Otherwise the coefficients form a Steinberg pair unless the first coefficient is 1, which already kills the symbol.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 → Kᴹₙ(F) → Kᴹₙ(F(t))”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Milnor K-theory's Steinberg relation is exactly what the Galois symbol needs

**Remember:** Once the Steinberg relation holds, cup products give a map on symbols.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory), 12G05. arXiv math.KT, math.NT. Level 3: graduate.

**Definition.** For a field F, the Milnor K-group Kₙᴹ(F) is generated by symbols {a₁, …, aₙ} of nonzero elements. Symbols are multiplicative in each entry. A symbol is zero when two adjacent entries are a and 1 − a, which is the Steinberg relation. Quillen's K-groups, defined from the homotopy groups of a space, agree with these only up to degree two.

**Problem.** Let m be invertible in F, and let μₘ be the group of m-th roots of unity. Cup products of Kummer classes give a homomorphism from Kₙᴹ(F)/m to Galois cohomology with coefficients in the n-fold tensor power of μₘ. The Kummer class of a records how the Galois group moves the m-th roots of a.

**How the definition helps.** The cup product is multilinear, so only the Steinberg relation needs checking. That check is that the cup product of the Kummer classes of a and 1 − a is zero (our own). It follows from writing 1 − a as a norm from the field generated by an m-th root of a (our own). Wikipedia states that the map satisfies the defining relations of the Milnor K-group. For Quillen's groups there is no such presentation by symbols beyond degree two (our own).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “satisfying the defining relations of the Milnor K-group”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970).](https://doi.org/10.1007/BF01425486)

### One uniformizer splits reduction

**Remember:** Modulo an invertible integer, only the leading units and uniformizer matter.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** Let F be complete for a discrete valuation v, an integer order on nonzero elements, with residue field k. Choose a uniformizer π, an element of order one. Specialization replaces each symbol entry a by the residue of a divided by π raised to v(a). The residue map kills symbols of units and removes an initial π before reducing the remaining units.

**Problem.** For every positive integer m invertible in k and every n ≥ 1, specialization and tame residue give an isomorphism. They identify degree n Milnor K-theory of F modulo m with the sum of degrees n and n − 1 over k modulo m.

**How the definition helps.** The two maps read the parts without and with one uniformizer. In our own proof, Hensel’s lemma makes every unit congruent to 1 modulo π an m-th power. Thus all lifts of a residue unit agree modulo m. Lifts of a Steinberg pair can be chosen as u and 1 − u. This makes the lift of symbols well defined. The Steinberg sign rule reduces repeated uniformizers to one. Lifting the two parts now gives an inverse.

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

**How the definition helps.** The defining relation allows a nonzero square, which an exterior algebra would erase. Our own calculation applies the relation to a and its inverse for a ≠ 1. Dividing the second entries gives {a,−a} = 0. Bilinearity now gives {a,a} = {a,−1}, since twice {a,−1} is zero. The identity also holds for a = 1. Over ℝ, send a pair to 1 modulo two when both entries are negative and to zero otherwise. This pairing is bilinear and kills every defining relation, so it detects {−1,−1}.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “l(a)² = l(a)l(−1)”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Adams operations compute finite-field K-groups

**Remember:** Subtract the identity from the Adams operation and take its fiber.

*True by definition.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a field with q elements, Quillen usually defines positive K-groups using a space built from invertible matrices. An equivalent model uses BU, the space that classifies stable complex vector bundles. On BU, take the qth Adams operation ψᵠ, which raises line bundles to their qth tensor powers. Use the homotopy fiber of ψᵠ − 1, the space of points equipped with a path from their image to zero.

**Problem.** For i ≥ 1, the K-group in degree 2i vanishes. In degree 2i − 1, the group is cyclic of order qⁱ − 1.

**How the definition helps.** The fiber model reduces the calculation to multiplication on ℤ, in our own explanation. Bott periodicity gives BU a copy of ℤ in each positive even degree and zero in odd degrees. On the copy in degree 2i, ψᵠ − 1 multiplies by qⁱ − 1. Its kernel and cokernel give the stated groups by the exact sequence of the fiber. Quillen’s comparison theorem identifies the fiber with the space built from matrices.

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

**Definition.** For a unital algebra over a field, Hochschild chains are tensors with a boundary that multiplies adjacent entries, including the last and first. The cyclic bicomplex uses these chains and a second operator built from rotation and insertion of the unit. The Connes quotient instead identifies each tensor with its signed rotation.

**Problem.** For the two-element field as an algebra over itself, cyclic homology equals the field in every nonnegative even degree and vanishes in odd degrees. The Connes quotient loses every positive even class.

**How the definition helps.** The bicomplex keeps a degree-zero chain in each even column (our own). Normalizing removes tensors with a unit after the first entry, leaving only those chains (our own). In the unnormalized quotient, every rotation acts trivially (our own). The boundary alternates between the identity in positive even degrees and zero in odd degrees (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “If the field k contains the rational numbers, the definition in terms of the Connes complex calculates the same homology.”

**Sources:**

- [Jean-Louis Loday, Cyclic Homology of Algebras](https://doi.org/10.1007/978-3-662-11389-9_2)
- [Christian Kassel, Cyclic homology, comodules, and mixed complexes](https://doi.org/10.1016/0021-8693(87)90086-x)

### Four-point faces give five terms

**Remember:** Deleting each of five points gives the five terms.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** Start with the projective line over an infinite field F, the set F together with ∞. Use ordered quadruples of distinct points as generators, identifying quadruples related by a fractional linear transformation. For every ordered quintuple, delete each point in turn and set the alternating sum of the resulting quadruples to zero.

**Problem.** For an infinite field F, this gives the pre-Bloch group. For distinct x, y outside {0,1}, the relation is \[x\] − \[y\] + \[y/x\] − \[(1−1/x)/(1−1/y)\] + \[(1−x)/(1−y)\] = 0.

**How the definition helps.** The alternating boundary gives all five terms in a single rule (our own). A unique fractional linear transformation sends the first three points of a quadruple to 0, ∞, 1. Call the image of its fourth point z and write \[z\] for that quadruple. Apply this normalization to the five faces of (0, ∞, 1, x, y), starting with deletion of y. Their labels give the usual presentation of the pre-Bloch group by cross-ratios (our own).

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

**Problem.** For n ≥ 1 there is a short exact sequence 0 → Kₙ(R)/m → Kₙ(R; ℤ/m) → Kₙ₋₁(R)\[m\] → 0, where Kₙ₋₁(R)\[m\] is the subgroup killed by m.

**How the definition helps.** Taking the cofiber before taking groups keeps the m-torsion of the previous degree, which plain reduction modulo m loses (our own). The long exact sequence of the cofiber gives the subgroup and the quotient at once. This cofiber is the smash product of K(R) with the Moore spectrum, the cofiber of m on the sphere spectrum.

**nLab:** [Moore spectrum](https://ncatlab.org/nlab/show/Moore+spectrum). It says: “the Moore spectrum SG (often MG) of G”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial simplices enforce homotopy invariance

**Remember:** Polynomial simplices turn polynomial homotopies into actual homotopies.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 19D25. arXiv math.KT. Level 3: graduate.

**Definition.** Weibel's homotopy K-theory KH(R) applies nonconnective K-theory, which includes negative degrees, to the rings of polynomial simplices R\[t₀, …, t<sub>d</sub>\]/(t₀ + ⋯ + t<sub>d</sub> − 1). It then glues the resulting spectra along faces and degeneracies.

**Problem.** Adjoining a polynomial variable induces an equivalence KH(R) → KH(R\[t\]). For a regular commutative Noetherian ring R, ordinary K-theory already agrees with KH.

**How the definition helps.** The simplex construction turns polynomial homotopies into actual homotopies (our own). The map t ↦ st is a polynomial homotopy from evaluation at zero followed by inclusion to the identity, so evaluation is a homotopy inverse to inclusion. For regular Noetherian R, Quillen's polynomial invariance and the vanishing of negative K-groups give K(R) ≃ KH(R).

**nLab:** [algebraic K-theory spectrum](https://ncatlab.org/nlab/show/algebraic+K-theory+spectrum). It says: “it represents Weibel's homotopy invariant version of algebraic K-theory”

**Sources:**

- [Charles Weibel, Homotopy algebraic K-theory (1989)](https://doi.org/10.1090/conm/083/991991)

### Defining G₀ pushforward by derived direct images makes pushforwards compose

**Remember:** Compose the derived maps before taking their classes.

*True by definition. Confidence: medium.* MSC 19E08 (\\(K\\)-theory of schemes), 14F06. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** Let G₀ of a Noetherian scheme be the Grothendieck group of coherent sheaves. For a proper map f, define pushforward by the class of the derived direct image Rf∗, a single complex with coherent cohomology. The sheaf definition sends a sheaf F to the alternating sum of its higher direct images Rⁱf∗F.

**Problem.** Let f : X → Y and g : Y → Z be proper maps of Noetherian schemes. On G₀, pushing forward along g ∘ f equals pushing forward along f and then along g.

**How the definition helps.** Derived direct images compose, Rg∗ ∘ Rf∗ = R(g ∘ f)∗, as the Stacks Project states, so the classes agree. In the sheaf definition, one would need the Leray spectral sequence to compare the alternating sums (our own). The work moves to two facts (our own). For a proper map, Rf∗ keeps cohomology bounded and coherent. The class of a complex equals the alternating sum of its cohomology classes.

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0D5T). It says: “Then Rg∗ ∘ Rf∗ = R(g ∘ f)∗ as functors”

**Sources:** none listed. No primary source with a working link was found.

### Series extend virtual exterior powers

**Remember:** Exterior powers of a difference come from dividing the two series.

*Rules out counterexamples.* MSC 19E08 (\\(K\\)-theory of schemes), 19A99. arXiv math.KT. Level 3: graduate.

**Definition.** Collect all exterior powers of a vector bundle into one formal series with constant term one. To take exterior powers of a formal difference, divide the series of its two bundles.

**Problem.** On a scheme, a space locally described by commutative rings, exterior powers extend to formal differences of vector bundles. Their series carries addition to multiplication.

**How the definition helps.** Constant term one makes the series invertible, so subtraction becomes division (our own). For a short exact sequence of bundles, the exterior powers of the middle bundle are built from those of the subbundle and the quotient, so the series is multiplicative on the defining relations. The counterexample is the negative of the trivial line, whose series is 1/(1 + t): its exterior powers never stop, so no bundle has them.

**Paper or page:** [Weil](https://stacks.math.columbia.edu/tag/0FIC). It says: “Let X be a scheme. There are maps λʳ : K₀(Vect(X)) → K₀(Vect(X))”

**Sources:** none listed. No primary source with a working link was found.

### Gersten boundaries give rational equivalence

**Remember:** At codimension q, the incoming boundary is the divisor map.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 3: graduate.

**Definition.** For a smooth variety X over a field, let 𝒦<sub>q</sub> be the Zariski sheaf of algebraic K-groups in degree q. Its Gersten complex has, in degree c, the sum of K\_(q−c)(k(x)) over the points x of codimension c.

**Problem.** For q ≥ 0, the cohomology group H<sup>q</sup>(X, 𝒦<sub>q</sub>) is the Chow group CH<sup>q</sup>(X) of codimension-q cycles modulo rational equivalence.

**How the definition helps.** The Gersten complex ends with the divisor map into the cycle group, so its last cohomology group is the Chow group (our own). Quillen proved that the complex resolves the sheaf 𝒦<sub>q</sub> and computes its cohomology. In degree q it has one copy of ℤ per codimension-q point, and the next term vanishes. The term before is the sum of the multiplicative groups k(x)<sup>×</sup> over codimension-(q − 1) points, and the boundary takes divisors.

**Wikipedia:** [Bloch's formula](https://en.wikipedia.org/wiki/Bloch%27s_formula). It says: “The general case is due to Quillen.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Todd-corrected pushforwards compose

**Remember:** Insert the relative Todd class and composition uses the projection formula.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT. Level 3: graduate.

**Definition.** For a projective map f : X → Y of smooth quasi-projective varieties over a field, let T<sub>f</sub> = T<sub>X</sub> − f\*T<sub>Y</sub> be its relative tangent class. The corrected pushforward on rational Chow groups sends x to f∗(td(T<sub>f</sub>) · x), where td is the Todd class.

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

**Definition.** Let A be the ring of integers of a number field F. At a nonzero prime ideal, write any a,b in F× as πʳu and πˢw using a generator π of the local maximal ideal. The factors u and w are units in the local ring. Define the tame residue on the K₂ symbol {a,b} by reducing (−1)ʳˢuˢ/wʳ modulo the prime.

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

**Definition.** Let F be a number field. At each finite prime, the tame symbol maps the second algebraic K-group K₂(F) to the multiplicative group of the residue field. On {x,y}, it reduces (−1)ᵃᵇxᵇ/yᵃ, where a and b are the exponents of the prime in the fractional ideals of x and y. The tame kernel consists of elements mapping to one at every finite prime.

**Problem.** The common kernel is the finite group K₂ of the ring of integers. The symbol {2,3} does not belong to this kernel over ℚ.

**How the definition helps.** The local conditions exclude field symbols that cannot come from the integers, in our own explanation. At 3, the symbol {2,3} gives 2 modulo 3. The localization theorem identifies the common kernel with integral K₂. Finiteness of integral K₂ is a separate theorem.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “If i is even then Kᵢ(OＦ) is finite, but Kᵢ(F) is an infinite torsion group, satisfying the exact sequence”

**Sources:** none listed. No primary source with a working link was found.

### The tame sign ensures cancellation

**Remember:** Keep the sign when both arguments have poles.

*Rules out counterexamples.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** A discrete valuation v assigns an integer order to each nonzero field element. The residue field k records units modulo elements of positive order. For f,g ∈ F×, put m = v(f) and n = v(g). The tame symbol reduces fⁿ/gᵐ in k and changes its sign when mn is odd.

**Problem.** For f ≠ 0, 1, the tame symbol of (f,1 − f) is 1. It therefore defines a map from K₂ of F to k×.

**How the definition helps.** The sign cancels the factor −1 that appears at a common pole of odd order. If f or 1 − f has positive order, the other reduces to 1, and if both have order zero the symbol is 1 at once. At a common pole the orders agree and (1 − f)/f reduces to −1; for example f = 1/t at t = 0 gives −1 without the sign (our own). The symbol is multiplicative in each argument, so Matsumoto's presentation gives the map on K₂.

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

**Definition.** Let X be a smooth complex curve. Model a weight-two Deligne class in degree two by a holomorphic line bundle with connection, a rule for differentiating its sections. The regulator of two holomorphic units, or nowhere-zero functions, takes their Deligne cup product in this group.

**Problem.** The regulator of two units gives a character on loops. This means that each loop gives a nonzero complex number, and joining loops multiplies their values.

**How the definition helps.** The bundle model reads the character directly from parallel transport around loops. Its curvature vanishes because a curve has no holomorphic two-forms. The exponential sequence identifies this bundle model with the usual complex of integers, holomorphic functions and holomorphic one-forms. The correspondence between flat line bundles and loop characters gives the classification.

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

**How the definition helps.** In our own proof, removing hyperbolic planes cancels positive and negative squares in pairs. Sylvester’s law says their counts are independent of the diagonalizing basis. The difference of the counts, called the signature, determines what survives and takes every integer value. Tensoring diagonal forms multiplies their signatures. Without the quotient, dimension detects the hyperbolic plane even though its signature vanishes.

**Wikipedia:** [Witt group](https://en.wikipedia.org/wiki/Witt_group). It says: “Sylvester's law of inertia holds for quadratic forms over k and the signature defines a ring homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Dividing K₁ by group elements makes Whitehead torsion independent of cell lifts

**Remember:** Changing a cell lift multiplies by a group element that the quotient kills.

*True by definition. Confidence: medium.* MSC 19J10 (Whitehead (and related) torsion), 57Q10. arXiv math.GT, math.KT. Level 3: graduate.

**Definition.** Let G be the fundamental group and ℤ\[G\] its integral group ring. The Whitehead group Wh(G) is K₁(ℤ\[G\]) modulo the classes of ±g for g in G. Torsion starts as a matrix over ℤ\[G\], computed from the cells of the universal cover. That matrix depends on a choice of ordered, oriented lift of each cell.

**Problem.** Whitehead torsion of a homotopy equivalence of finite connected CW complexes does not depend on the choices of cell lifts and orientations.

**How the definition helps.** Changing one lift or orientation multiplies a basis vector by ±g, and the quotient kills that factor (our own). Wikipedia gives the quotient by elementary matrices, elements of G and ±1. The remaining work is to show independence from the other choices in the construction (our own).

**Wikipedia:** [Whitehead torsion](https://en.wikipedia.org/wiki/Whitehead_torsion). It says: “the quotient of GL(ℤ\[G\]) by the subgroup generated by elementary matrices, elements of G and ±1”

**Sources:**

- [John Milnor, Whitehead torsion (1966).](https://doi.org/10.1090/S0002-9904-1966-11484-2)

### Unit classes distinguish matrix sizes

**Remember:** A minimal projection counts one, while the identity counts the matrix size.

*Rules out counterexamples.* MSC 19K14 (\\(K<sub>0</sub>\\) as an ordered group, traces), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** A projection is a matrix equal to its square and its conjugate transpose. Form K₀ from formal differences of projection classes, allowing larger matrices by adjoining zero blocks. Mark actual projection classes as positive and record the class of the identity of the original algebra.

**Problem.** For complex square matrix algebras, the ordered K₀ group with its marked identity determines the matrix size. Forgetting the mark gives the same ordered group for every size.

**How the definition helps.** In our own calculation, the marked identity records the matrix size as its rank. Projections over complex matrices are classified by rank after enlargement and unitary change of basis. Thus K₀ is ℤ with its usual positive cone, the set of nonnegative integers. Its only order-preserving group automorphism fixes one and hence fixes every integer. Marking n therefore distinguishes size n from every other size.

**Paper or page:** [A review of the Elliott program of classification of simple amenable C\*-algebras](https://arxiv.org/abs/2311.14238v1). It says: “Then A ≅ B if and only if (K₀(A), K₀(A)₊, \[1ₐ\], K₁(A)) ≅ (K₀(B), K₀(B)₊, \[1ᵦ\], K₁(B)).”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Fredholm index by a K-theory boundary map makes indices add

**Remember:** The boundary map sends multiplication of invertible classes to addition of indices.

*True by definition. Confidence: medium.* MSC 19K56 (Index theory), 47A53, 46L80. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A Fredholm operator on a separable infinite-dimensional Hilbert space has finite-dimensional kernel and cokernel. It is invertible in the Calkin algebra, the bounded operators modulo the compact operators. Define its index as the image of its K₁ class under the boundary map to K₀ of the compact operators, which is ℤ. The direct definition is dim ker T − dim coker T.

**Problem.** For Fredholm operators S and T, the index of ST is the index of S plus the index of T.

**How the definition helps.** In K₁ the class of a product is the sum of the classes, and the boundary map is a homomorphism (our own). Wikipedia notes that the index map appears in the six-term exact sequence of the Calkin algebra. With the dimension formula, one must instead track kernels and cokernels through the product (our own). The work moves to matching the boundary map with the dimension formula (our own). It also uses Atkinson's theorem: Fredholm operators are those invertible modulo compact operators.

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “The Fredholm index map appears in the 6-term exact sequence given by the Calkin algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Stabilization handles jumping Fredholm kernels

**Remember:** Enlarge the allowed target values so the inverse images form a bundle.

*Makes the theorem clean to state or prove.* MSC 19K56 (Index theory). arXiv math.KT. Level 3: graduate.

**Definition.** Consider a norm-continuous family of bounded operators between two fixed complex Hilbert spaces. Each operator is Fredholm, meaning its range is closed and its kernel and cokernel have finite dimension. Choose one finite-dimensional target subspace V whose sum with every range is the whole target. Define the family index as the bundle of inverse images of V minus the constant bundle with fiber V.

**Problem.** A continuous Fredholm family over a compact Hausdorff space has a K-theory index whose rank gives each ordinary index. The definition does not require constant kernel dimension.

**How the definition helps.** Enlarging the target from zero to V makes the inverse images a vector bundle even when the kernels jump (our own explanation). Compactness supplies a common V, and the fiber dimension minus dim V is the ordinary index. Enlarging V adds the same trivial bundle to both terms, so the class does not depend on V. For example, multiplying one coordinate by a real parameter t gives kernels that jump at t = 0, so the kernels alone do not form a bundle.

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

**Problem.** Every class in K₁(A) is the image of the class of the coordinate z in K₁(C(𝕋)) under a unital \*-homomorphism from C(𝕋) to a matrix algebra over A.

**How the definition helps.** In our own proof, a unitary representative specifies exactly where the circle coordinate must go. The theorem on continuous functions of a unitary extends this assignment to the entire algebra of continuous functions on the circle. Matrix enlargement identifies the resulting K₁ class with the original one. Starting with invertible matrices would first require deforming the representative to a unitary.

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “The algebra of continuous functions on the circle 𝕋 denoted C(𝕋) is the universal C★-algebra generated by u such that u\*u = uu\* = 1.”

**Sources:** none listed. No primary source with a working link was found.

### Rational Chern characters kill precisely torsion

**Remember:** Rationalization forgets precisely the classes killed by some nonzero integer.

*True by definition. Confidence: medium.* MSC 19L10 (Riemann-Roch theorems, Chern characters), 55N15. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** Complex K⁰ records formal differences of complex vector bundles. The Chern character sends them to even-degree rational cohomology. One description first allows rational coefficients in K-theory, then identifies the result with even-degree rational cohomology.

**Problem.** On a finite cell complex, the kernel of the Chern character on K⁰ consists exactly of classes killed by some nonzero integer.

**How the definition helps.** In our own proof, allowing rational coefficients kills exactly those elements annihilated by a nonzero integer. For finite cell complexes, the comparison theorem identifies this rationalized group with even-degree rational cohomology. It also identifies the composite with the usual Chern character defined by characteristic classes of vector bundles. The cited page describes the corresponding localization over the real numbers.

**nLab:** [Chern character](https://ncatlab.org/nlab/show/Chern+character). It says: “there is a canonical localization map”

**Sources:** none listed. No primary source with a working link was found.

### Characterizing Adams operations by line bundles makes them compose multiplicatively

**Remember:** An m-th tensor power of an n-th power is an mn-th power.

*True by definition.* MSC 19L20 (\\(J\\)-homomorphism, Adams operations), 55S25. arXiv math.AT. Level 3: graduate.

**Definition.** On complex K-theory, the Adams operation ψᵏ is the unique natural ring map with ψᵏ\[L\] = \[L⊗ᵏ\] for every line bundle L. Adams's explicit definition writes ψᵏ as a Newton polynomial in exterior powers of a bundle. Uniqueness uses the splitting principle: a suitable pullback splits any bundle into line bundles and is injective on K-theory.

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

**How the definition helps.** Completion turns a Laurent polynomial calculation into a power series calculation. Write x for the circle’s action on a complex line by scalar multiplication. Its representation ring is ℤ\[x, x⁻¹\], and I is generated by c = x − 1. Modulo every power of c, the geometric series gives an inverse for 1 + c. The Atiyah–Segal completion theorem identifies the resulting power series ring with the required K-ring.

**nLab:** [Atiyah-Segal completion theorem](https://ncatlab.org/nlab/show/Atiyah-Segal+completion+theorem). It says: “the augmentation ideal is clearly generated by c ≔ x − 1.”

**Sources:**

- [Michael Atiyah and Graeme Segal, Equivariant K-theory and completion (1969)](https://doi.org/10.4310/jdg/1214428815)

### Defining equivariant K-theory by G-bundles gives the representation ring at a point

**Remember:** A bundle with a group action over one point is a representation.

*True by definition.* MSC 19L47 (Equivariant \\(K\\)-theory), 19A22. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** Let G be a compact Lie group. A G-vector bundle is a complex vector bundle with a G-action that is linear on fibers. Define equivariant K-theory by formal differences of G-bundles, with direct sum as addition and tensor product as multiplication. The operator model uses K-theory of a crossed product algebra, which encodes the action.

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

**How the definition helps.** Freeness lets each orbit of fibers become one vector space over the orbit space (our own proof). A free action of a finite group on a Hausdorff space gives each point a neighborhood disjoint from its other translates, so the quotient bundle is locally trivial. Pullback reverses this construction, which gives Segal's isomorphism. Without freeness it fails: over a fixed point, the group of order two has distinct trivial and sign lines with the same underlying line.

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

**Definition.** Let X be a connected finite cell complex with a chosen base point. Reduced complex K-theory records formal differences of complex vector bundles of equal rank. An equivalent definition uses maps from X to BU, the space classifying bundles up to addition of trivial bundles. Identify maps joined by a continuous deformation that fixes the base point.

**Problem.** Based homotopic maps between connected pointed finite cell complexes induce the same pullback on reduced complex K-theory.

**How the definition helps.** In the map definition, pulling back a bundle class just means composing its classifying map with the given map (our own). Composing with a deformation gives a deformation of the composites (our own). The bundle classification theorem supplies the equivalence and its compatibility with pullback.

**Paper or page:** [Topological K-Theory of Complex Projective Spaces](https://arxiv.org/abs/1303.3959). It says: “For any finite CW complex X, K̃(X) is equal to the set of homotopic maps from X to BU.”

**Sources:** none listed. No primary source with a working link was found.

### Clutching classifies sphere bundles stably

**Remember:** The determinant of the equator loop counts the stable class.

*Makes the theorem clean to state or prove.* MSC 19L99 (Topological \\(K\\)-theory), 55R50. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** Glue two trivial complex vector bundles over the hemispheres by a loop of unitary matrices along the equator. This loop is the transition function, which changes coordinates between the two trivializations. Adding a trivial bundle adds an identity block to each matrix.

**Problem.** The reduced group of virtual complex bundles of rank zero on the two-sphere is ℤ. A Hopf line, the bundle of lines over the complex projective line, minus a trivial line generates it.

**How the definition helps.** In our own calculation, the equator description reduces a stable bundle class to the winding number of one determinant loop. Winding number counts signed turns around the circle. The gluing theorem classifies bundles by homotopies of transition functions. The determinant theorem identifies homotopy classes of unitary loops with integers via winding number. The transition function of a Hopf line winds once, up to orientation.

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

**Definition.** Over a ring with identity, elementary matrices add a multiple of one row to another. Allow arbitrarily large matrices by adjoining identity blocks, and let E be the group these matrices of row additions generate. A central extension maps onto E and has kernel in its center. Define the stable Steinberg group by the extension admitting a unique map over E to every central extension of E.

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

**How the definition helps.** In our own proof, the product map already satisfies the two conditions that characterize the plus map. Its target is local because maps into a product are pairs of maps. Its fibers are products of acyclic fibers and hence are acyclic by the integral homology product formula. An acyclic map to a local target exhibits the localization. The comparison theorem identifies this model with Quillen’s construction by attaching cells.

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

**How the definition helps.** In our own calculation, the choice of all coefficient modules lets one read off the homology of covers directly. Take the group ring ℤ\[G/P\] acting on itself. On the source this computes the integral homology of BP, the cover corresponding to P. On the target it computes the integral homology of the universal cover. The Hurewicz theorem identifies second homotopy with second homology on that simply connected cover. Quillen’s cell construction supplies the map satisfying the coefficient condition.

**Paper or page:** [Quillen's Plus Construction and the D(2) problem](https://arxiv.org/abs/2308.12541). It says: “induces the quotient map E → E/K on fundamental groups and H∗(𝒦ε⁺, 𝒦ε; M) = 0 for all left modules M over ℤ\[E/K\].”

**Sources:**

- [Wajid Mannan, Quillen's Plus Construction and the D(2) problem](https://arxiv.org/abs/2308.12541)
- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)

### A-theory identifies Wall’s obstruction

**Remember:** Reduce the sphere class to test whether domination comes from finiteness.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces), 19J05. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let X be connected and finitely dominated, meaning a homotopy retract of a finite cell complex. A local system transports stable homotopy types along paths. The constant sphere system assigns the sphere spectrum everywhere with identity transport. Finite domination makes this system compact, so it represents a class in π₀A(X).

**Problem.** Under π₀A(X) ≅ K₀(ℤ\[π₁X\]), the constant sphere class lifts Wall’s finiteness obstruction. Its image modulo the rank-one free module vanishes exactly when X has the homotopy type of a finite cell complex.

**How the definition helps.** In our own explanation, the constant system specifies the class without choosing a finite complex that dominates X. Linearization takes it to the class of the universal-cover chains over the group ring. A finite projective chain model computes this class by the alternating sum of its terms. Removing the contribution of free modules gives Wall’s obstruction. Wall’s theorem supplies the vanishing criterion.

**nLab:** [Wall's finiteness obstruction](https://ncatlab.org/nlab/show/Wall%27s+finiteness+obstruction). It says: “the vanishing of Wall's finiteness obstruction is a necessary and sufficient condition for this to happen.”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)

### A-theory pushes forward along every map

**Remember:** Left adjoints carry compact objects when pullback preserves filtered colimits.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A local system of spectra assigns a stable homotopy type to each point and transports it along paths. Call it compact if its mapping spaces preserve filtered colimits, which assemble objects over a directed diagram. Define A(X) as the K-theory of compact systems on X. Push a system forward by assembling its values over each homotopy fiber, the fiber that also records paths to the target point.

**Problem.** Every map f induces a covariant map A(X) → A(Y). Composable maps induce the composite map up to the natural coherent homotopies.

**How the definition helps.** The fiber formula makes pushforward left adjoint to restriction, which means maps out of a pushforward correspond to maps into a restriction. Restriction preserves filtered colimits because it acts point by point. The adjunction therefore shows that pushforward preserves compact systems. In our own explanation, successive pushforwards compose because their right adjoints compose by restriction. Comparison with Waldhausen’s construction identifies this operation with geometric pushforward.

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### A-theory splits over finite disjoint unions

**Remember:** Separate components give independent compact local systems.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A local system of spectra assigns a stable homotopy type to each point and transports it along paths. Call it compact if its mapping spaces preserve filtered colimits, which assemble objects over a directed diagram. Define A(X) as the algebraic K-theory of these compact systems on X.

**Problem.** For a finite disjoint union of spaces, A-theory is the product of the A-theory spectra of the parts.

**How the definition helps.** In our own proof, a local system on a disjoint union is exactly a tuple of local systems on its parts. Maps between tuples form a product of mapping spaces. Finite products commute with filtered colimits, so a finite tuple is compact exactly when each entry is compact. Algebraic K-theory preserves finite products. The comparison with spaces built over X with a section and retraction connects this calculation to Waldhausen’s geometric definition.

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)

### A-theory transfer obeys change of base

**Remember:** Pull back a cover and the same fibers compute pushforward.

*True by definition. Confidence: medium.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A local system of spectra transports stable homotopy types along paths. Define A-theory using compact systems, those whose mapping spaces preserve filtered colimits. Transfer along a finite cover means restricting a system to the covering space. Pushforward assembles its values over each homotopy fiber, including the paths to the specified target point.

**Problem.** Pull a finite cover back along any map of spaces. Transferring along the new cover and then pushing forward gives the same A-theory map, up to homotopy, as pushing forward and then transferring.

**How the definition helps.** In our own proof, both orders assemble the same values over equivalent homotopy fibers. This comparison respects transport along paths. Restriction along the cover preserves compactness because its right adjoint takes finite products over the sheets. Such products preserve filtered colimits. The comparison with Waldhausen’s model using spaces with a section and retraction identifies these operations with geometric transfer and pushforward.

**nLab:** [retractive space](https://ncatlab.org/nlab/show/retractive+space). It says: “retractive spaces serve as a basis on which to construct parameterized spectra.”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Assembly recovers the classical Whitehead group

**Remember:** The assembly cofiber removes signs and group elements from K₁.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Assembly maps the generalized homology of X with coefficients in A(∗), the A-theory of a point, to A(X). Define the piecewise linear Whitehead spectrum as its cofiber, the stable homotopy quotient formed by collapsing the source along this map.

**Problem.** Let X be connected with fundamental group G. The first homotopy group of this cofiber is K₁(ℤ\[G\]) modulo the classes of the units ±g. This is the classical Whitehead group.

**How the definition helps.** In our own explanation, the cofiber gives an exact sequence that computes the first group from the image of assembly. In degree zero, assembly is split injective because sending each group element to 1 gives a retraction on K₀. In degree one, assembly has image generated by the classes of the units ±g for g in G. Identifying this image is the substantive calculation. Exactness then gives the classical Whitehead quotient.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “The Whitehead group was later discovered to be a quotient of K₁(ℤπ)”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Based loops supply the A-theory ring

**Remember:** The basepoint generator has based loops as its endomorphisms.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A local system of spectra transports stable homotopy types along paths. For a connected based space X, define A(X) using the K-theory of compact systems, those whose mapping spaces preserve filtered colimits. Extend the sphere spectrum from the basepoint by taking one copy for each path to the destination, assembled up to homotopy.

**Problem.** A(X) is the algebraic K-theory of the ring spectrum Σ∞₊ΩX. The subscript plus adjoins a disjoint basepoint before suspension, and loop concatenation supplies multiplication.

**How the definition helps.** In our own explanation, evaluating this system at the basepoint turns paths to the destination into based loops. By adjunction, this value computes the spectrum of maps from the system to itself. Concatenating paths supplies the ring multiplication, with loop reversal exchanging the two order conventions. The compact generator theorem identifies local systems with modules over this ring. Taking K-theory of the compact modules gives the claimed description.

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

**Definition.** A local system of spectra assigns a stable homotopy type to each point and transports it along paths. Call it compact if its mapping spaces preserve filtered colimits, which assemble objects over a directed diagram. A-theory takes the K-theory of the compact systems. A finite spectrum is a stable homotopy type built from finitely many cells, allowing retracts.

**Problem.** The constant sphere local system on the classifying space of the group C₂ of order two is not compact. Its value at every point is a finite spectrum.

**How the definition helps.** If the system were compact, its colimit over the base would be a compact spectrum, because taking the colimit is left adjoint to forming constant systems, which preserves filtered colimits (our own proof). For the constant sphere system, this colimit is the suspension spectrum of BC₂ with a disjoint basepoint. BC₂ is infinite real projective space, whose homology modulo two is nonzero in every degree. A compact spectrum has bounded homology, so the system is not compact.

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Linearization preserves the first two A-groups

**Remember:** Discard higher loop data without changing degrees zero and one.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a connected based space X, form the stable homotopy ring R of its based loops by adjoining a basepoint and taking the suspension spectrum. Multiplication comes from concatenating loops. The components of R form the ordinary group ring ℤ\[π₁X\]. Linearization applies algebraic K-theory to the map from R to this ring concentrated in degree zero.

**Problem.** For A-theory defined using all compact modules over R, linearization identifies π₀A(X) with K₀(ℤ\[π₁X\]) and π₁A(X) with K₁(ℤ\[π₁X\]).

**How the definition helps.** In our own explanation, the loop ring description turns linearization into the familiar operation of retaining only degree zero. R is connective, meaning its negative homotopy groups vanish. The low-degree K-theory theorem for connective rings proves that retaining degree zero preserves K₀ and K₁. Comparison with Waldhausen’s space construction identifies the two groups on the source with the stated A-theory groups.

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Nonconnective K-theory gives Bass–Heller–Swan without idempotent completeness

**Remember:** Nonconnective K-theory cannot see idempotent completion, so idempotent completeness is not needed.

*Rules out counterexamples.* MSC 19D35 (Negative \\(K\\)-theory, NK and Nil), 18F25. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Nonconnective K-theory K∞ is the spectrum of algebraic K-theory with negative K-groups added, built by a delooping construction. A full subcategory is cofinal when every object of the larger category is a direct summand of an object of the smaller one.

**Problem.** For every additive category 𝒜, the nonconnective K-theory K∞ of a twisted Laurent extension of 𝒜 splits as a mapping torus term plus two Nil-terms. No idempotent completeness is needed, unlike the connective version.

**How the definition helps.** K∞ does not change under a cofinal inclusion (Lemma 2.2), so one can replace 𝒜 by its idempotent completion. The same lemma gives only that connective Kₙ agree for n ≥ 1, so K₀ can change. That is why the connective version, Theorem 3.3, needs idempotent completeness. This reading of how the theorems fit is our own; the hard part is the decomposition itself.

**Paper or page:** [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412), [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412), [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412). It says: “Let I : 𝒜 → 𝒜′ be the inclusion of a full cofinal additive subcategory. … The induced map K∞(I) : K∞(𝒜) → K∞(𝒜′) is a weak homotopy equivalence.”

**Sources:**

- [Arthur Bartels, Wolfgang Lueck, Vanishing of Nil-terms and negative K-theory for additive categories, Proc. Roy. Soc. Edinburgh Sect. A 154 (2024) 1945–2023, arXiv:2002.03412](https://doi.org/10.1017/prm.2024.103)

### Regular coherent additive categories have no negative K-groups or Nil-terms

**Remember:** Regular coherent categories have K-theory with no negative part and no Nil-terms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D35 (Negative \\(K\\)-theory, NK and Nil), 18F25. arXiv math.KT, math.AT. Level 4: research.

**Definition.** An additive category is regular coherent when, roughly, its finitely presented modules form an abelian category. Each such module must also have a finite resolution by finitely generated projective modules. This extends regular coherence for rings to additive categories.

**Problem.** If an additive category 𝒜 and all its polynomial extensions 𝒜\[t₁, …, tₘ\] are regular coherent, then the negative K-groups of 𝒜 and all its twisted Nil-groups vanish.

**How the definition helps.** Regular coherence lets the classical resolution argument for regular rings work for additive categories (our own). The precise theorem for negative K-groups, Theorem 11.1, needs every polynomial extension to be regular coherent, because coherence need not pass to polynomial rings (our own). These groups are the error terms in the Bass–Heller–Swan formula and the Farrell–Jones conjecture, whose coefficients are additive categories. The hard part is the passage from rings to additive categories with twisted polynomial extensions.

**Paper or page:** [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412). It says: “For instance the negative K-groups and all twisted Nil-groups vanish for an additive category if it is regular coherent.”

**Sources:**

- [Arthur Bartels, Wolfgang Lueck, Vanishing of Nil-terms and negative K-theory for additive categories, Proc. Roy. Soc. Edinburgh Sect. A 154 (2024) 1945–2023, arXiv:2002.03412](https://doi.org/10.1017/prm.2024.103)

### An equalizer restores injectivity

**Remember:** Enlarge the residue field, then keep the classes independent of the new variable.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** A local ring A has one maximal ideal. Form A(t) by inverting polynomials whose coefficients generate A, and use the same rule for A(t₁,t₂). The improved Milnor group consists of classes over A(t) with equal images under t ↦ t₁ and t ↦ t₂.

**Problem.** If A is a complete discrete valuation ring with finite residue field, improved Milnor K-theory injects into Milnor K-theory of its fraction field.

**How the definition helps.** The extra variable gives an infinite residue field, and the equal-image condition keeps only the classes that do not depend on it. Our own example: in ℤ₂ no unit has a unit complement, so ordinary Milnor K₂ is the tensor square of the units. There 2{5,5} is nonzero, as the projection onto the order-four quotient of the units shows, but over ℚ₂ antisymmetry makes 2{5,5} = 0. Dahlhausen's theorem gives injectivity for the improved group.

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

**Definition.** For a field F of characteristic different from two, the Milnor–Witt ring has a central generator η of degree −1. Its relation η(2 + η\[−1\]) = 0 involves the degree-one generator \[−1\]. Adjoin an inverse to η, so multiplication by η identifies adjacent degrees.

**Problem.** The resulting graded ring is W(F)\[t,t⁻¹\], with t in degree one and η mapping to t⁻¹. The Witt ring W(F) identifies nonsingular symmetric forms up to adding hyperbolic planes.

**How the definition helps.** Once η is invertible, powers of η recover every degree from degree zero. Our own explanation starts from Morel’s computation of the negative groups as copies of the Witt ring. In negative degrees multiplication by η identifies successive copies. Consequently the degree-zero part after inversion is also the Witt ring. The Laurent variable t records multiplication by the inverse of η.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “Let W(K)\[t,t⁻¹\] be the t-periodic ℤ-graded algebra with t a formal variable in degree 1.”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Killing eta restores Milnor symbols

**Remember:** Kill eta, and the product rule becomes ordinary additivity.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a field F, the Milnor–Witt ring has generators \[a\] of degree one for nonzero a and a central generator η of degree −1. Its product rule is \[ab\] = \[a\] + \[b\] + η\[a\]\[b\]. It sets \[a\]\[1 − a\] to zero for a ≠ 0, 1. It also sets η(2 + η\[−1\]) to zero.

**Problem.** The quotient of the Milnor–Witt ring by η is the Milnor K-ring, with \[a\] mapping to {a}.

**How the definition helps.** In this presentation setting η to zero leaves precisely the relations defining ordinary Milnor symbols. Our own argument compares the two presentations generator by generator. The product rule becomes \[ab\] = \[a\] + \[b\], and the relation on complementary entries survives. The last relation disappears. The maps between the two presentations fix each generator and hence are inverse. Using a geometric definition of Milnor–Witt groups instead requires a theorem identifying them with the presented ring.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “\\operatorname K<sup>MW</sup><sub>\*</sub>(K) \\xrightarrow {\\gamma \_\\eta } \\operatorname K<sup>MW</sup><sub>\*</sub>(K) \\xrightarrow F \\operatorname K<sup>M<sub>\*</sub></sup>(K) \\rightarrow 0”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Logarithmic forms capture symbols

**Remember:** Logarithmic wedges generate the target by addition.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Let F have prime characteristic p. A logarithmic differential is da/a for a nonzero field element a, where d denotes the formal derivative over the prime field. In degree n ≥ 1 take the additive subgroup generated by alternating products, called wedges, of n logarithmic differentials.

**Problem.** Sending a Milnor symbol to the wedge of the logarithmic differentials of its entries identifies degree n modulo p with this logarithmic subgroup.

**How the definition helps.** The additive subgroup contains exactly the sums produced by symbols. In our own example over 𝔽ₚ(t), dt has a double pole at infinity. Each da/a has at most a simple pole there, and this bound survives addition. The wedge for a and 1 − a vanishes because their derivatives are negatives of each other. The Bloch–Gabber–Kato theorem proves that the resulting map has zero kernel modulo p.

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “\\phi ^n<sub>F</sub>:K<sup>M<sub>n</sub></sup>(F)/p\\rightarrow H<sup>n</sup>(F,\\mathbb {Z}/p(n))\\cong \\Omega ^n<sub>F,\\log </sub>”

**Sources:**

- [Spencer Bloch and Kazuya Kato, p-adic etale cohomology (1986)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02831624/)

### Normal lines remove uniformizer dependence

**Remember:** The basis change and the square-class factor cancel.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For an integer-valued discrete valuation, let 𝔪 be the ideal of elements of positive order and k its residue field. A uniformizer has order one and gives a basis of 𝔪/𝔪². Record its dual basis in the dual line together with the Milnor–Witt residue. Identify x ⊗ uℓ with ⟨u⟩x ⊗ ℓ, where u ∈ k× and ⟨u⟩ denotes the one-dimensional form with coefficient u.

**Problem.** The Milnor–Witt residue with this target is independent of the uniformizer. On a symbol starting with the uniformizer and followed by units, it gives the reduced unit symbol tensored with that dual basis.

**How the definition helps.** The twist compensates for the square class introduced by changing the uniformizer. In our own calculation, multiplying a uniformizer by a unit u rescales its dual basis by the inverse residue of u. The coefficient changes by the compensating one-dimensional form. For example, choosing t or −t over ℝ((t)) gives different untwisted residues of \[t\], namely ⟨1⟩ and ⟨−1⟩. The work is to construct the residue and check that it respects the Milnor–Witt relations.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “\\partial \_v:\\operatorname K<sup>MW</sup><sub>n</sub>(K) \\rightarrow \\operatorname K<sup>MW</sup><sub>n-1</sub>(\\kappa \_v,\\omega \_v)”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Witt quotients make symbols multilinear

**Remember:** Products of binary forms become multilinear after passing to successive quotients.

*Makes the theorem clean to state or prove.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Over a field F of characteristic different from two, the Witt ring identifies nonsingular quadratic forms up to adding hyperbolic planes ⟨1,−1⟩. Its addition is direct sum and its multiplication is tensor product. Let I consist of classes of even dimension, and put Iⁿ/Iⁿ⁺¹ in degree n. Send each nonzero a to the class of ⟨1,−a⟩ in I/I².

**Problem.** Multiplying the binary classes gives a graded surjection from the Milnor K-ring modulo two onto the graded Witt ring. This map is an isomorphism.

**How the definition helps.** Passing to the next quotient removes exactly the product term that spoils additivity in a symbol entry (our own). With b(a) = 1 − ⟨a⟩, one has b(ac) = b(a) + b(c) − b(a)b(c), and the last term lies in I². The form b(a)b(1 − a) is hyperbolic and 2 lies in I, so the map is defined on Milnor K modulo two. Binary classes generate I, which gives surjectivity, and the theorem of Orlov, Vishik and Voevodsky gives injectivity.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “the map K× → I(K), u ↦ ⟨⟨u⟩⟩ induces a ring morphism”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Dmitri Orlov, Alexander Vishik and Vladimir Voevodsky, An exact sequence for Kᴹ/2 with applications to quadratic forms (2007)](https://doi.org/10.4007/annals.2007.165.1)

### Invertible coefficients give Henselian rigidity

**Remember:** Use orders prime to the residue characteristic when reducing.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** A commutative local ring has one maximal ideal, and its quotient by that ideal is the residue field. Call the ring Henselian if every coprime monic factorization of a reduced monic polynomial lifts to a monic factorization of the original. Take coefficients modulo an integer m ≥ 2 that is a unit in the ring.

**Problem.** For a Henselian local ring R with residue field k and m invertible in R, reduction gives isomorphisms Kₙ(R; ℤ/m) ≅ Kₙ(k; ℤ/m) for all n ≥ 0. For the p-adic integers with m = p odd, the map in degree one is not injective.

**How the definition helps.** The invertibility condition lets Hensel lifting extract mth roots of units congruent to one, in our own explanation. Without it, 1 + p need not have a pth root. In our own example, such a root would equal one modulo p, so its pth power would equal one modulo p². Gabber’s rigidity theorem supplies the result in all degrees.

**nLab:** [Henselian pair](https://ncatlab.org/nlab/show/Henselian+pair). It says: “for any monic polynomial f ∈ R\[T\] and factorization”

**Sources:**

- [Ofer Gabber, K-theory of Henselian local rings and Henselian pairs (1992)](https://doi.org/10.1090/conm/126/00509)

### Reduction removes the constant defect

**Remember:** Kill the constant before treating complementary symbols as negatives.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** Use the five-term pre-Bloch group of a number field F. Let the differential send \[x\] to x ⊗ (1−x) in the tensor square modulo a ⊗ b + b ⊗ a. The ordinary Bloch group is its kernel. To obtain the reduced presentation, also kill the common class c = \[x\] + \[1−x\].

**Problem.** In the reduced presentation, complementary pre-Bloch symbols satisfy \[1 − x\] = −\[x\]. This fails in the unreduced presentation over ℚ, where c is nonzero.

**How the definition helps.** Killing c turns the complementary-symbol identity into a defining relation (our own). Suslin proves that the sum is independent of x. Over ℚ it has order six, so the unreduced group retains a genuine obstruction (our own).

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792v2). It says: “B̄(F) is exactly B(F)/⟨cꜰ⟩.”

**Sources:**

- [Andrei A. Suslin, K₃ of a field and the Bloch group (1990), §1](https://www.maths.dur.ac.uk/users/herbert.gangl/Suslin_K3_Bloch_group.pdf)
- [Wenhuan Huang, A full-rank subgroup of Bloch Groups of CM Fields (2025), Lemma 1 and Theorem 2](https://arxiv.org/abs/2507.05792v2)

### c-categories extend the Dundas–Goodwillie–McCarthy theorem to stacks

**Remember:** Control a category by connective rings, and trace methods still apply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 18N60, 14A30. arXiv math.KT, math.AT. Level 4: research.

**Definition.** A c-category is a category whose behaviour is controlled by connective ring spectra. Any c-category has a resolution in finitely many steps by categories of compact modules over connective ring spectra. A truncating invariant is one that does not change when a connective ring spectrum is replaced by its zeroth homotopy ring.

**Problem.** Nilpotent extensions of c-categories induce isomorphisms on truncating invariants, such as the fiber of the cyclotomic trace from K-theory to TC. Since perfect complexes on many stacks form c-categories, the Dundas–Goodwillie–McCarthy theorem extends to them.

**How the definition helps.** The finite resolution by compact modules lets the theorem for connective rings pass to every c-category, step by step (our own). The paper shows that perfect complexes on many stacks form a c-category. So the generalization follows from that fact. The hard part is showing that a given category is a c-category.

**Paper or page:** [c-structures and trace methods beyond connective rings](https://arxiv.org/abs/2509.14774). It says: “We introduce nilpotent extensions of c-categories, and show that they induce isomorphisms on truncating invariants, such as the fiber of the cyclotomic trace map.”

**Sources:**

- [Ishan Levy, Vladimir Sosnilo, c-structures and trace methods beyond connective rings, arXiv:2509.14774 (2025)](https://arxiv.org/abs/2509.14774)

### Coinvariants restore ordinary pre-Bloch groups

**Remember:** Forget square classes and keep the same deletion rule.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** On the projective line F ∪ {∞} over an infinite field F, use ordered quadruples of distinct points as generators. Identify quadruples related by a determinant-one matrix acting by fractional linear transformations. For each ordered quintuple set the alternating sum of its four-point faces to zero. This defines the refined pre-Bloch group.

**Problem.** Determinants modulo nonzero squares act on this group through projective transformations. Taking coinvariants, which identify every element with all its translates, gives the ordinary pre-Bloch group.

**How the definition helps.** Taking coinvariants identifies exactly the extra quadruples related by arbitrary projective transformations (our own). A projective matrix can be rescaled to determinant one precisely when its determinant is a square. The five-point relations therefore pass to the same alternating boundaries on projective orbits. A cross-ratio, the fourth coordinate after moving the first three points to 0, ∞, 1, labels each such quadruple orbit (our own).

**Paper or page:** [The third homology of SL₂ of real quadratically closed fields](https://arxiv.org/abs/2107.13915v1). It says: “denote the set of ordered n-tuples \[z₁, …, zₙ\] of distinct points of F× ∖ {1}.”

**Sources:**

- [Kevin Hutchinson, A Bloch–Wigner complex for SL₂ (2013)](https://doi.org/10.1017/is013003031jkt13222)

### Cyclic interchange changes coefficient rings

**Remember:** One cyclic order multiplies over S, and the other retains the tensor over R.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A ring spectrum is a stable homotopy type with multiplication. A bimodule carries compatible left and right ring actions. A shadow gives the same invariant for the two cyclic orders of a pair of bimodules, even when the starting rings differ. Topological Hochschild homology with coefficients is such a shadow.

**Problem.** Let R → S be a map of associative ring spectra. Topological Hochschild homology of R with coefficients S agrees with that of S with coefficients S ⊗ᵣ S. The tensor over R is derived, so it retains homotopy information.

**How the definition helps.** The shadow rule swaps the two copies of S viewed as bimodules in opposite directions (our own). In one order the tensor is over S and gives S (our own). In the other it is over R and gives the displayed coefficients (our own). The comparison with the usual cyclic bar model requires proving that topological Hochschild homology has this symmetry (our own).

**Paper or page:** [Whitehead Filtrations for Computations in Topological Hochschild Homology](https://arxiv.org/abs/2311.06717v4). It says: “we have an equivalence THH(R,S) ≃ THH(S, S ⊗ᵣ S).”

**Sources:**

- [Logan Hyslop, Whitehead filtrations for computations in topological Hochschild homology](https://doi.org/10.2140/agt.2026.26.2443)

### Cyclotomic sphere maps give equalizers

**Remember:** A map from the cyclotomic sphere must commute with every Frobenius.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A spectrum represents a stable homotopy type. A cyclotomic spectrum X has a circle action and one compatible map, called Frobenius, for each prime p. Its target is the Tate spectrum for the order-p rotations, the cofiber of the norm from homotopy orbits to homotopy fixed points. Topological cyclic homology is the spectrum of structure-preserving maps from the cyclotomic sphere to X.

**Problem.** For a cyclotomic spectrum X that is bounded below, TC(X) is the homotopy equalizer of two maps from X<sup>(hS¹)</sup> to the product over primes p of (X<sup>(tCₚ)</sup>)<sup>(hS¹)</sup>. One map comes from the Frobenius maps of X, and the other is the canonical map.

**How the definition helps.** A map from the sphere specifies a circle homotopy fixed point and a homotopy expressing compatibility with each Frobenius (our own). These data form a homotopy equalizer, which remembers how the two maps agree (our own). Both maps land in the product of the residual circle homotopy fixed points of the Tate spectra (our own). One uses Frobenius on X, and the other uses Frobenius on the sphere and functoriality of Tate (our own). Nikolaus and Scholze compare this description with classical topological cyclic homology for bounded-below spectra (our own).

**nLab:** [cyclotomic spectrum](https://ncatlab.org/nlab/show/cyclotomic+spectrum). It says: “where the circle action on the Tate spectrum comes from the canonical identification S¹/Cₚ ≃ S¹.”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Groups need no logarithmic correction

**Remember:** Group completion leaves a group unchanged, so the bar correction is the identity.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** The cyclic bar of a commutative monoid M forms cyclic lists of elements and multiplies neighboring entries. Group completion adjoins inverses to form the group Mᵍᵖ. The replete bar pulls the cyclic bar of this group back along M → Mᵍᵖ, using the product of each list and a homotopy pullback. Log topological Hochschild homology extends scalars from the original bar to the replete bar.

**Problem.** Suppose an abelian group M maps multiplicatively to a commutative ring A. The canonical map from ordinary topological Hochschild homology of A to its log version for (A, M) is an equivalence.

**How the definition helps.** Group completion acts as the identity on M, so pulling back recovers its original cyclic bar (our own). Extending scalars along this equivalence leaves ordinary topological Hochschild homology unchanged (our own). The cited proposition identifies the logarithmic theory with this change of scalars.

**Paper or page:** [Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2). It says: “There is a natural equivalence THH(A, M) ≃ THH(A) ⊗₍𝕊\[Bᶜʸᶜ(M)\]₎ 𝕊\[M ×₍Mᵍᵖ₎ Bᶜʸᶜ(Mᵍᵖ)\] of E∞-ring spectra.”

**Sources:**

- [Federico Binda, Tommy Lundemo, Doosung Park and Paul Arne Østvær, Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2)

### Linearization preserves the logarithmic correction

**Remember:** The pushout that changes the monoid bar survives the change of base ring.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A pre-log ring pairs a commutative ring A with a commutative monoid M mapping multiplicatively to A. The cyclic bar forms cyclic lists in M and multiplies adjacent entries. Its repletion adjoins inverses to form the group Mᵍᵖ, then pulls the resulting bar back to M along the product map. Log Hochschild homology replaces the cyclic bar by its repletion using a derived pushout, which glues along their common input.

**Problem.** For an ordinary pre-log ring, write THH for topological Hochschild homology, the version built from spectra. Extending scalars in log THH from THH(ℤ) to ℤ gives derived log Hochschild homology over ℤ.

**How the definition helps.** Writing the log correction as a pushout lets extension of scalars pass through it (our own). Both operations use derived tensor products, which preserve the homotopy information in this gluing (our own). The ordinary comparison identifies the underlying topological and algebraic constructions after this scalar extension (our own).

**Paper or page:** [Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2). It says: “There is a natural equivalence HH(A, M) ≃ ℤ ⊗₍THH(ℤ)₎ THH(A, M) of E∞-rings.”

**Sources:**

- [Federico Binda, Tommy Lundemo, Doosung Park and Paul Arne Østvær, Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2)

### Pointed bars separate coefficients from monomials

**Remember:** The coefficients and the monomials have separate cyclic bar factors.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A pointed monoid has an absorbing zero. Its pointed monoid algebra sets the basis element for zero equal to zero. Its cyclic bar construction uses circular lists of monoid elements and collapses every list containing zero to one base point. Multiplying neighbors gives its face maps.

**Problem.** For a unital ring A and n ≥ 1, THH(A\[x\]/(xⁿ)) is equivalent, compatibly with rotation, to THH(A) smashed with the pointed cyclic bar construction of the pointed monoid {0, 1, x, …, xⁿ⁻¹} with xⁿ = 0.

**How the definition helps.** The pointed presentation separates each cyclic list into coefficient factors and monomial labels (our own). Multiplying neighbors and rotating lists respects this separation (our own). Hesselholt and Madsen identify the resulting spectrum with the smash product of the coefficient spectrum and the pointed cyclic bar (our own). Here smashing means tensoring with the based space after suspension, and the equivalence respects rotation (our own).

**Paper or page:** [From manifolds to invariants of Eₙ-algebras](https://arxiv.org/abs/1210.7909v1). It says: “Both maps in the zig-zag are weak equivalences if the unit map of A, S → A, is a cofibration in Sp.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Polynomial evaluation breaks Goodwillie’s comparison

**Remember:** A quotient can remove polynomial classes without removing any units.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** A nilpotent extension is a surjective ring map whose kernel has some power equal to zero. Relative groups measure the change across the map by taking its homotopy fiber.

**Problem.** Consider a nilpotent extension of rational algebras and n ≥ 1. Goodwillie identifies degree-n rational relative K-theory with relative cyclic homology one degree lower. Evaluation at zero from ℚ\[t\] to ℚ fails this comparison in degree one.

**How the definition helps.** Nilpotence excludes the kernel tℚ\[t\], which has nonzero powers of every order (our own). Evaluation splits, so each relative group here equals the kernel on absolute groups (our own). Both rings have K₁ equal to ℚ×, giving zero kernel (our own). Degree-zero cyclic homology of a commutative algebra is the algebra itself, giving kernel tℚ\[t\] (our own). Goodwillie proves the comparison under the nilpotence hypothesis (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “nilpotent two-sided ideal I”

**Sources:**

- [Thomas G. Goodwillie, Relative Algebraic K-Theory and Cyclic Homology](https://doi.org/10.2307/1971283)

### Positive weights give relative topological Hochschild homology

**Remember:** Weight zero survives evaluation, and positive weights form its fiber.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a unital ring A and n ≥ 1, represent monomials of A\[x\]/(xⁿ) by the powers of x below degree n and an absorbing zero. The pointed cyclic bar consists of circular lists of these monomials, with lists containing zero collapsed to a base point. The weight of any other list is its total exponent.

**Problem.** For a unital ring A and n ≥ 1, the fiber of THH(A\[x\]/(xⁿ)) → THH(A) at x = 0 is the sum over positive weights w of THH(A) smashed with the weight-w part of the pointed cyclic bar.

**How the definition helps.** Rotation and multiplication of neighbors preserve weight, unless the product becomes zero, so the bar splits into weight spaces joined at their base points (our own). Evaluation at x = 0 projects onto weight zero, and constants give a section (our own). So the fiber is the part of positive weight (our own). Hesselholt and Madsen justify replacing the ring construction by this pointed bar model.

**Paper or page:** [From manifolds to invariants of Eₙ-algebras](https://arxiv.org/abs/1210.7909v1). It says: “Both maps in the zig-zag are weak equivalences if the unit map of A, S → A, is a cofibration in Sp.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Quotient cubes compare relative traces

**Remember:** Take the trace along one coordinate, then take fibers along the rest.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Take a polynomial ring over a commutative ring and impose one relation xⁿ = 0 on each variable, with possibly different positive exponents. Setting subsets of variables to zero gives a cube of quotient maps. Apply algebraic K-theory or topological cyclic homology and take a homotopy fiber in each direction. This iterated fiber is the multi-relative theory.

**Problem.** The cyclotomic trace is the natural comparison from algebraic K-theory to topological cyclic homology. For this cube it identifies their multi-relative spectra after completion at any prime.

**How the definition helps.** Taking one direction first reduces the comparison to parallel quotient maps (our own). Each map kills one variable, so its kernel has a power equal to zero (our own). McCarthy’s relative trace theorem identifies the two fibers after prime completion (our own). Completion preserves finite fibers, and taking the remaining fibers preserves equivalences (our own).

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566v1). It says: “Let v: B → A be a nilpotent extension of connective ring spectra.”

**Sources:**

- [Vigleik Angeltveit, Teena Gerhardt, Michael A. Hill and Ayelet Lindenstrauss, On the algebraic K-theory of truncated polynomial algebras in several variables](https://doi.org/10.1017/is013010011jkt243)
- [Randy McCarthy, Relative algebraic K-theory and topological cyclic homology](https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/6552-11511_2006_Article_BF02392743.pdf)

### Rationalizing removes the dual-number mismatch

**Remember:** The integral K-group contains an order-eight class that cyclic homology cannot match.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** Rationalization tensors an abelian group with ℚ and kills its elements of finite order. For a ring with a nilpotent ideal, Goodwillie compares rational relative K-theory with relative cyclic homology after extension to ℚ. The relative groups measure the change on quotienting by the ideal.

**Problem.** For A = ℤ\[x\]/(x²) and I = (x), relative K₄ contains an element of order eight. Integral relative cyclic homology in degree three has no such element.

**How the definition helps.** Rationalization removes the incompatible torsion in these two groups (our own). The cited theorem gives K₄ as ℤ/8 ⊕ ℤ/3. In normalized degree n, let aₙ denote 1 followed by n tensor factors x, and cₙ denote n + 1 factors x (our own). In cyclic degree three, a₁, c₁, a₃ and c₃ are cycles (our own). The boundaries generate a₁, 2c₁, 3a₃ and 2c₃, giving ℤ/2 ⊕ ℤ/2 ⊕ ℤ/3 (our own). Goodwillie’s theorem supplies the general rational comparison (our own).

**Paper or page:** [On the K-theory of truncated polynomial algebras over the integers](https://arxiv.org/abs/0809.3544v2). It says: “K₄(ℤ\[x\]/(x²),(x)) ≈ ℤ/8ℤ ⊕ ℤ/3ℤ”

**Sources:**

- [Thomas G. Goodwillie, Relative Algebraic K-Theory and Cyclic Homology](https://doi.org/10.2307/1971283)
- [Vigleik Angeltveit, Teena Gerhardt and Lars Hesselholt, On the K-theory of truncated polynomial algebras over the integers](https://doi.org/10.1112/jtopol/jtp011)

### The Laurent quotient shifts degrees

**Remember:** Once relative periodic homology vanishes, the connecting map shifts cyclic homology by one.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** Hochschild chains have a boundary b and a second operator B that raises degree. Negative cyclic chains use power series in u of degree −2, with differential b + uB. Periodic chains also allow finitely many negative powers. Their quotient retains only strictly negative powers.

**Problem.** Let B → A be a surjective map of rational algebras whose kernel has some power equal to zero. Relative homology measures the change across this map. The boundary identifies relative cyclic homology in degree n − 1 with relative negative cyclic homology in degree n.

**How the definition helps.** Using series in place of the cyclic double complex displays the quotient as ordinary cyclic chains shifted up by two degrees (our own). Multiplication by u gives the identification with ordinary cyclic chains, where u kills constants (our own). Goodwillie’s nilpotent invariance gives zero relative periodic homology. Exactness therefore makes the boundary an isomorphism from quotient degree n + 1 to negative cyclic degree n (our own).

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566v1). It says: “the induced map HP(B/k) → HP(A/k) is an equivalence.”

**Sources:**

- [Thomas G. Goodwillie, Relative algebraic K-theory and cyclic homology](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/goodwillie-cyclic.pdf)

### The sphere unit determines Dennis trace

**Remember:** Evaluate at the sphere to read the trace off its unit.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** An additive invariant ignores equivalences of module categories, preserves filtered colimits, and sends split exact sequences to direct sums. Its universal category of motives represents these operations. There, connective algebraic K-theory is the spectrum of maps from the motive of finite spectra.

**Problem.** Natural transformations from connective K-theory to topological Hochschild homology have homotopy classes indexed by ℤ. Topological Hochschild homology is the stable version of the chain theory built by multiplying cyclically adjacent factors. The topological Dennis trace corresponds to 1.

**How the definition helps.** Representing K-theory by maps makes evaluation at the representing object determine each transformation, by the Yoneda lemma (our own). At finite spectra the target evaluates to the sphere spectrum, whose degree-zero homotopy group is ℤ (our own). Blumberg, Gepner and Tabuada prove the representation theorem and identify the classical trace with the unit (our own).

**nLab:** [Dennis trace](https://ncatlab.org/nlab/show/Dennis+trace). It says: “The Dennis trace is a natural morphism from algebraic K-theory of rings to Hochschild homology”

**Sources:**

- [Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal characterization of higher algebraic K-theory](https://msp.org/gt/2013/17-2/gt-v17-n2-p03-p.pdf)

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

**Definition.** Semi-topological K-theory takes algebraic K-theory in complex algebraic families and uses their ordinary topology to realize those families as spaces. In a split square-zero extension A ⊕ I, projection onto A has a ring section. Products of any two elements of I vanish.

**Problem.** For a complex algebra A and an A-bimodule I, the split square-zero extension A ⊕ I has the same semi-topological K-theory as A.

**How the definition helps.** Realizing algebraic families turns a polynomial contraction into a continuous homotopy (our own proof of the split case). Fix A and multiply I by a complex parameter t. This preserves multiplication because products within I vanish. Moving t from one to zero connects the identity to projection followed by inclusion. Projection and inclusion are consequently inverse on semi-topological K-theory up to homotopy.

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

**Definition.** On a Noetherian scheme, local coordinate rings have finitely generated ideals. G₀ records bounded complexes with coherent cohomology, meaning their cohomology modules are locally finitely generated. K₀ uses perfect complexes, which locally have bounded models of finite free modules. Both groups impose additivity for mapping cones, which represent differences between the target and source of a map.

**Problem.** Let f be a proper map of Noetherian schemes, meaning it is separated, of finite type and closed after every base change. Multiplying a source G₀ class by a pulled-back target K₀ class commutes with pushing the result forward.

**How the definition helps.** In our own argument, defining both operations on complexes turns the group identity into the class of a known isomorphism. Derived tensor product computes multiplication after replacing the perfect factor locally by a free complex. Derived direct image computes pushforward while retaining higher cohomology. The projection formula identifies the two resulting complexes, and properness ensures their cohomology stays coherent. Ordinary tensor product can destroy exact sequences.

**Paper or page:** [Perfect](https://stacks.math.columbia.edu/tag/0FDM). It says: “Then we have f∗(α ⋅ f⁎β) = f∗α ⋅ β for α ∈ K′₀(X) and β ∈ K₀(Y).”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes instead of vector bundles let K-theory glue along open covers

**Remember:** Use perfect complexes, not vector bundles, and K-theory glues along open covers.

*Rules out counterexamples. Confidence: medium.* MSC 19E08 (\\(K\\)-theory of schemes), 18F25. arXiv math.KT, math.AG. Level 4: research.

**Definition.** The Thomason–Trobaugh K-theory of a scheme X is the Waldhausen K-theory of the category of perfect complexes on X. Waldhausen K-theory is a K-theory construction for categories with cofibrations and weak equivalences. A perfect complex is a complex that is locally quasi-isomorphic to a bounded complex of vector bundles. The weak equivalences are the quasi-isomorphisms, which are the maps that induce isomorphisms on cohomology.

**Problem.** For every quasi-compact quasi-separated scheme, Thomason–Trobaugh K-theory has a localization sequence and a Mayer–Vietoris sequence for open covers.

**How the definition helps.** Perfect complexes restrict and extend well along open immersions, and descent needs exactly this. A scheme without an ample family of line bundles may have too few vector bundles, so the descent and localization theorems are not available for Quillen's K-theory of vector bundles. On schemes with an ample family of line bundles the two K-theories agree, so nothing is lost. The descent proofs are still long.

**nLab:** [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction). It says: “Thomason-Trobaugh K-theory coincides with Quillen K-theory for schemes that admit an ample family of line bundles, but has the advantage of better global descent properties.”

**Sources:**

- [R. W. Thomason, Thomas Trobaugh, Higher algebraic K-theory of schemes and of derived categories, The Grothendieck Festschrift vol. III, Progress in Math. 88 (1990) 247–435](https://doi.org/10.1007/978-0-8176-4576-2_10)

### Bott periodicity shifts K-theory slices

**Remember:** Calculate one slice and use Bott periodicity to shift it.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F42. arXiv math.KT, math.AG. Level 4: research.

**Definition.** In logarithmic motivic theory, geometric spaces carry extra data describing their boundary. The effective cover in weight i approximates a spectrum by objects generated in weights at least i. Suspending by the pointed projective line shifts the allowed weights up by one. Define slice i as the derived quotient of cover i by cover i + 1.

**Problem.** Over a perfect field admitting resolution of singularities, slice zero of logarithmic K-theory is the integral logarithmic motivic cohomology spectrum. Slice i is its i-fold Tate suspension, using inverse suspension for negative i.

**How the definition helps.** Defining the covers by weight makes suspension carry each layer to the next layer of the suspended spectrum. Bott periodicity identifies logarithmic K-theory with its own suspension by the pointed projective line. Our own deduction therefore obtains every layer from layer zero. Binda, Park and Østvær identify that layer with integral logarithmic motivic cohomology.

**Paper or page:** [On the logarithmic slice filtration](https://arxiv.org/abs/2403.03056). It says: “\\mathrm{s}<sub>i</sub> \\mathbf{KGL}\\simeq \\widetilde{\\mathrm{s}}<sub>i</sub> \\mathbf{KGL}\\simeq \\mathbf{M}\\mathbb {Z}(i)\[2i\]”

**Sources:**

- [Federico Binda, Doosung Park and Paul Arne Østvær, On the logarithmic slice filtration (2025)](https://arxiv.org/abs/2403.03056)

### Complex volume becomes a motivic period

**Remember:** A tetrahedron sum becomes one motivic extension.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 57K32, 19F27. arXiv math.KT, math.GT. Level 4: research.

**Definition.** The invariant trace field k is generated over ℚ by squared traces of matrices representing loops in the hyperbolic manifold. Its rational Bloch invariant adds tetrahedron shapes with signs and rational coefficients. In the motivic description, such a class specifies an extension of ℚ(0) by ℚ(2), the Tate objects corresponding to 1 and (2πi)². An extension contains ℚ(2) as a subobject and has quotient ℚ(0).

**Problem.** Take a complete oriented hyperbolic three-manifold of finite volume with k contained in the algebraic numbers. Its normalized projective Chern–Simons invariant is the Beilinson regulator of a mixed Tate extension over k, taken modulo π²ℚ.

**How the definition helps.** The extension puts the geometric invariant in the domain of a single regulator, a map assigning a complex period to its class (our own). Lee constructs the extension and identifies its period with the normalized invariant. The comparison uses the dilogarithm formula for the regulator on shape symbols (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “equals the normalized PSL₂(ℂ)-Chern-Simons invariant”

**Sources:**

- [Dong Uk Lee, Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties, Theorem 4.2.4 (2025)](https://arxiv.org/abs/2502.11950v1)

### Reduced ranks give twisted coefficients

**Remember:** Use the ranks the twisted modules actually have as coefficients.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** An Azumaya algebra A looks like a matrix algebra after an étale cover, an algebraic analogue of a local coordinate cover. On such a cover, matrix modules correspond to ordinary modules. Their ordinary ranks give the reduced ranks of projective A-modules. Define the coefficient sheaf by taking differences of these ranks locally in the Nisnevich topology, whose covers lift points without changing residue fields.

**Problem.** For a smooth variety X over a field of characteristic zero, this sheaf supplies the coefficients for the spectral sequence computing A-twisted K-theory. Its second page at (p,q) gives motivic cohomology, a theory graded by both degree and weight, in degree p − q and weight −q. It converges to the K-group of A-modules in degree −p − q.

**How the definition helps.** The rank sheaf encodes which ranks occur, so one coefficient formula also covers algebras that do not split, in our own explanation. Over a field with a division algebra of dimension d², these ranks are exactly the multiples of d. The theorem identifies successive layers of twisted K-theory with motivic cohomology using this sheaf.

**Paper or page:** [Twisted K-theory in motivic homotopy theory](https://arxiv.org/abs/2110.09203). It says: “Then there is a strongly convergent spectral sequence”

**Sources:**

- [Elden Elmanto, Denis Nardin and Maria Yakerson, Twisted K-theory in motivic homotopy theory (2021 preprint)](https://arxiv.org/abs/2110.09203)

### Thickened blow-up covers retain nilpotents

**Remember:** To recover algebraic K-theory, keep the whole tower of thickenings.

*Rules out counterexamples.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F42. arXiv math.KT, math.AG. Level 4: research.

**Definition.** Start with smooth motivic complexes over a prime field, either ℚ or a field with a prime number of elements. Extend them by the universal extension from smooth schemes, called left Kan extension. Impose gluing for Nisnevich covers, which lift each point with unchanged residue field. Also impose gluing for proper modifications that are isomorphisms outside a closed center, using every thickening defined by powers of its ideal.

**Problem.** For every finite-dimensional Noetherian scheme X over a prime field, algebraic K-theory has a complete multiplicative filtration. Its quotient in weight n is the procdh motivic complex of weight n shifted by 2n degrees.

**How the definition helps.** Keeping all thickenings allows the coefficients to detect nilpotent elements, whose powers eventually vanish. Our own example uses ℚ\[ε\]/(ε²). Its first K-group is its group of units and contains every element 1 + aε for rational a. Reduction to ℚ sends all these elements to one. Kelly and Saito prove the descent and filtration theorems that identify the successive quotients.

**Paper or page:** [A procdh topology](https://arxiv.org/abs/2401.02699). It says: “there exists a complete multiplicative decreasing ℕ-indexed filtration”

**Sources:**

- [Shane Kelly and Shuji Saito, A procdh topology](https://arxiv.org/abs/2401.02699)

### Bott inversion gives periodicity

**Remember:** After Bott inversion, a shift by two changes nothing.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let R be a commutative ring containing a primitive ℓth root of unity, where the prime ℓ ≥ 5 is invertible. Choose a Bott class β in degree-two K-theory modulo ℓ whose boundary is that root. In each degree, form the direct limit along repeated multiplication by β, moving up two degrees each time. These limits define the Bott-inverted groups.

**Problem.** Multiplication by β identifies each Bott-inverted group with the group two degrees higher.

**How the definition helps.** In the direct limit, a two-degree shift just discards the first term, in our own proof. Discarding that term preserves the limit. Ordinary finite-coefficient K-groups need not have this periodicity. Thomason’s comparison with étale cohomology, computed from algebraic local covers, supplies the substantive geometric theorem.

**nLab:** [Snaith theorem](https://ncatlab.org/nlab/show/Snaith+theorem). It says: “The localization of E at β is the homotopy colimit over the iterated multiplication with β”

**Sources:**

- [Robert Thomason, Algebraic K-theory and étale cohomology (1985)](https://doi.org/10.24033/asens.1495)

### Conormal sums correct Adams pushforwards

**Remember:** The power sum is the factor between the old and new Euler classes.

*Makes the theorem clean to state or prove.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT. Level 4: research.

**Definition.** Let E be a line bundle over a smooth quasi-projective variety, let i include its zero section, and let L be the conormal line, the dual of E. For j ≥ 1, put θʲ(L) = 1 + \[L\] + \[L\]² + ⋯ + \[L\]ʲ⁻¹ in K₀.

**Problem.** For the Adams operation ψʲ, which raises line bundles to their jth powers, ψʲ(i∗x) = i∗(θʲ(L) · ψʲ(x)) for every class x in K₀.

**How the definition helps.** The finite sum packages the exact correction to the pushforward, in our own explanation. Pulling the pushforward back along i multiplies by 1 − \[L\], by the two-term resolution of the zero section. Applying ψʲ changes this factor to 1 − \[L\]ʲ, which equals (1 − \[L\])θʲ(L). Pullback along the zero section is an isomorphism by homotopy invariance.

**Paper or page:** [The Riemann-Roch theorem for the Adams operations](https://arxiv.org/abs/2211.10178). It says: “is the conormal bundle”

**Sources:**

- [A. Navarro and J. Navarro, The Riemann-Roch theorem for the Adams operations (2022 preprint)](https://arxiv.org/abs/2211.10178)

### Motivic Bott shifts preserve K-theory

**Remember:** Invert the projective-line class to shift degree and weight together.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** In motivic homotopy theory, the projective line supplies a suspension with two indices, degree two and weight one. Infinite projective space classifies line bundles. Form its suspension spectrum with a disjoint basepoint, an object that retains all successive suspensions. Invert the Bott class given by the projective line inclusion minus its constant value at the basepoint.

**Problem.** For a smooth variety X over a field, motivic K-cohomology in degree p and weight q equals algebraic K-theory in degree 2q − p. Shifting the two indices by (2,1) preserves this group.

**How the definition helps.** Inverting the Bott class gives an inverse to the simultaneous shift, in our own explanation. The motivic Snaith theorem identifies this construction with KGL, the spectrum representing algebraic K-theory. That comparison supplies the link to the usual K-groups of vector bundles.

**nLab:** [algebraic K-theory spectrum](https://ncatlab.org/nlab/show/algebraic+K-theory+spectrum). It says: “In particular, KGL-cohomology is (2,1)-periodic”

**Sources:**

- [David Gepner and Victor Snaith, On the motivic spectra representing algebraic cobordism and algebraic K-theory (2009)](https://doi.org/10.4171/DM/276)

### Étale Postnikov layers yield descent

**Remember:** Filter the sheaf by homotopy degree to expose ordinary étale cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Fix an odd prime ℓ. Start with connective K-theory, which has no negative homotopy groups, with coefficients modulo ℓ. Form its étale hypersheaf by enforcing gluing along all levels of étale covers, the algebraic analogues of local coordinate covers. Take global sections of this hypersheaf to define étale K-theory.

**Problem.** Let X be regular and Noetherian, with ℓ invertible and finite étale ℓ-cohomological dimension. There is a spectral sequence with E₂ term H<sup>s\_ét</sup>(X, μ\_ℓ<sup>⊗j</sup>) in row 2j and column s, zero in odd rows, converging to étale K-theory modulo ℓ in degree 2j − s.

**How the definition helps.** Defining the theory by gluing lets each homotopy degree contribute one row of ordinary sheaf cohomology, in our own explanation. Rigidity and the calculation at separably closed fields identify those rows. The resulting spectral sequence calculates the global groups in degree 2j − s. Comparing them with ordinary algebraic K-groups in high degrees requires the proved Quillen–Lichtenbaum theorem.

**Wikipedia:** [Quillen–Lichtenbaum conjecture](https://en.wikipedia.org/wiki/Quillen%E2%80%93Lichtenbaum_conjecture). It says: “there is a spectral sequence analogous to the Atiyah–Hirzebruch spectral sequence”

**Sources:**

- [Robert Thomason, Algebraic K-theory and étale cohomology (1985)](https://doi.org/10.24033/asens.1495)

### Iterated residues give Frobenius exponents

**Remember:** Each residue drops one degree until only a Frobenius exponent remains.

*Makes the theorem clean to state or prove.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** An n-dimensional local field has n successive complete integer-valued valuation stages, each on the preceding residue field, ending in a finite field. At each stage the tame residue lowers the Milnor degree by one. It kills symbols of units and removes an initial element of order one before reducing the remaining units.

**Problem.** Use the convention that a local parameter maps to arithmetic Frobenius on the residue field. After projection to the final finite field, reciprocity sends a degree n class to Frobenius raised to its iterated residue.

**How the definition helps.** Each residue lowers the symbol degree exactly once, so the final exponent lies in degree zero, which is ℤ. In our own argument the cited square lets us apply reciprocity either before or after taking a residue. Iterate this square n times. Over the final field of q elements, the map sends 1 to the arithmetic Frobenius x ↦ xᑫ. The higher local reciprocity theorem supplies the maps and proves the square commutes.

**Paper or page:** [Reciprocity for Kato-Saito idele class group with modulus](https://arxiv.org/abs/2008.05719v4). It says: “the left vertical arrow is the residue map and the right vertical arrow is the canonical surjection”

**Sources:**

- [Kazuya Kato, A generalization of local class field theory by using K-groups II](https://doi.org/10.3792/pjaa.54.250)

### Milnor norms pass constant factors

**Remember:** Keep a constant factor on the right through both residues.

*True by definition. Confidence: medium.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let E be the field F\[t\]/(P) for an irreducible polynomial P. A residue lowers the degree of a Milnor class by one at a given point. Lift a class over E to one over F(t) with that residue at P and zero residues at all other finite points. Define its norm as minus the residue of the lift at infinity.

**Problem.** Let x be a Milnor class over E and y a Milnor class over F. The norm of x · res(y) is N(x) · y, where res denotes restriction and N denotes the norm.

**How the definition helps.** The residue definition of the norm lets a factor from F pass through both steps of the construction. In our own proof, multiply a lift of x on the right by the class from F. Residues preserve constant factors on the right, so the product lifts x · res(y) and has zero residues elsewhere. Its negative residue at infinity is N(x) · y. The Bass–Tate exact sequence supplies the lifts and makes their norms independent of the lift. In degree one this construction agrees with the field norm defined by the determinant of multiplication.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 \\to K<sub>n</sub><sup>M</sup>(F) \\to K<sub>n</sub><sup>M</sup>(F(t)) \\xrightarrow{\\partial\_\\pi} \\bigoplus\_{(\\pi) \\in \\text{Spec}(F\[t\])} K<sub>n-1</sub>F\[t\]/(\\pi) \\to 0”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Norms give higher reciprocity

**Remember:** Each finite residue contributes its negative residue at infinity.

*True by definition. Confidence: medium.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** At each irreducible polynomial P, the residue map takes a Milnor class over F(t) to a class one degree lower over F\[t\]/(P). Lift a class over F\[t\]/(P) to one whose only possible nonzero finite residue occurs at P and equals that class. Define its norm as minus the residue of the lift at infinity.

**Problem.** For a Milnor class of positive degree on F(t), the sum of its finite residues after applying their norms equals minus its residue at infinity.

**How the definition helps.** Defining the norm at infinity turns the reciprocity sum into addition of residues there. Our own explanation uses the Bass–Tate exact sequence to lift each finite residue separately. Subtract these lifts from the original class. The difference comes from F, so its residue at infinity vanishes. This proves the formula for the chosen presentation of each residue field. Independence from the choice of field generator requires a further theorem.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 \\to K<sub>n</sub><sup>M</sup>(F) \\to K<sub>n</sub><sup>M</sup>(F(t)) \\xrightarrow{\\partial\_\\pi} \\bigoplus\_{(\\pi) \\in \\text{Spec}(F\[t\])} K<sub>n-1</sub>F\[t\]/(\\pi) \\to 0”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Symbols generate Brauer torsion

**Remember:** A pure degree-two symbol becomes one cyclic algebra.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let F contain a primitive ℓ-th root of unity ζ, for a prime ℓ invertible in F. A symbol algebra for a,b ∈ F× has generators x,y with ℓ-th powers a,b and yx = ζxy. It is central simple, with center F and no proper nonzero two-sided ideal. The Brauer group identifies such algebras up to adjoining matrix factors.

**Problem.** Every Brauer class killed by ℓ has a representative that is a tensor product of symbol algebras.

**How the definition helps.** Each pair of field elements specifies an algebra by two generators and three relations. In our own explanation, choosing ζ identifies degree-two Milnor K-theory modulo ℓ with the Brauer classes killed by ℓ. This identification is the Merkurjev–Suslin theorem. It sends each symbol to the class of its symbol algebra. Every Milnor class is a sum of symbols, and addition of Brauer classes corresponds to taking tensor products.

**Wikipedia:** [Norm residue isomorphism theorem](https://en.wikipedia.org/wiki/Norm_residue_isomorphism_theorem). It says: “the case n = 2 is the Merkurjev–Suslin theorem.”

**Sources:**

- [Alexander Merkurjev and Andrei Suslin, K-cohomology of Severi–Brauer varieties and the norm residue homomorphism (1983 English translation)](https://doi.org/10.1070/IM1983v021n02ABEH001793)

### Absolute values forget unitary monodromy

**Remember:** Taking the absolute value forgets the phase acquired around a loop.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** The complex regulator of a pair of meromorphic functions on a smooth complex curve assigns nonzero complex numbers to loops avoiding their zeros and poles. Compose this character with the logarithm of the absolute value to obtain its real version.

**Problem.** The real character extends across a puncture exactly when the complex character has absolute value one around a small loop there. At zero, the pair (z,−1) gives a real character that extends and a complex character that fails to extend.

**How the definition helps.** Taking the logarithm of the absolute value kills every local factor of absolute value one. Filling the puncture kills its loop, so an additive character extends exactly when it vanishes there. Our own example uses Deligne’s local formula, which gives the loop value −1 for (z,−1).

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “from the second algebraic K-theory group to the first Betti cohomology group with coefficients in ℂ\*”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)

### Bloch symbols give regulator coordinates

**Remember:** Bloch symbols turn regulator evaluations into dilogarithm evaluations.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F, take formal symbols \[x\] for x in F other than zero and one. Impose the five-term relation satisfied by the dilogarithm, a function obtained by integrating −log(1−z)/z. The Bloch group consists of sums whose image under \[x\] ↦ x ∧ (1−x) vanishes in the exterior square of the multiplicative group.

**Problem.** After extending coefficients to ℚ, the Bloch group identifies with K₃(F), the third algebraic K-group with the same coefficients. Each embedding σ of F into ℂ gives one real coordinate of Borel’s regulator.

**How the definition helps.** Bloch symbols turn that coordinate into a sum of function values, in our own description. Replace each \[x\] by D(σ(x)), where D is the single-valued real Bloch–Wigner dilogarithm. Its five-term identity makes the sum independent of the representative. Suslin’s comparison identifies the rational groups. The regulator comparison identifies this sum with Borel’s coordinate up to a fixed nonzero normalization.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “is induced by mapping \[x\] in F♭ to iD(σ(x)).”

**Sources:** none listed. No primary source with a working link was found.

### Borel covolumes absorb basis choices

**Remember:** The lattice is fixed even when its generators change.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F and integer i ≥ 2, Borel’s regulator maps an algebraic K-group into real coordinate space. Use one coordinate per conjugate pair of nonreal embeddings and, for odd i, one per real embedding. Fix the usual regulator normalization. Define the covolume as the volume of a fundamental parallelepiped of the image lattice.

**Problem.** Borel’s theorem expresses the first nonzero Taylor coefficient of the Dedekind zeta function at 1−i as a nonzero rational multiple of this volume.

**How the definition helps.** Covolume states the formula without choosing generators, in our own explanation. The usual determinant formula uses the regulator images of an integral basis of the degree 2i−1 K-group modulo its finite-order elements. Its absolute determinant measures the same parallelepiped volume. Borel proves that the image is a full lattice and relates that volume to the zeta coefficient.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “Let Rᵢ(F) be the covolume of the image of regᵢ,ꜰ.”

**Sources:**

- [Armand Borel, Cohomologie de SLₙ et valeurs de fonctions zêta aux points entiers (1977)](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0/)

### Bott inversion makes étale K-theory periodic

**Remember:** Invert the Bott class and every degree can shift by two.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** Take a number field F containing a primitive pth root of unity for an odd prime p. Take its ring of integers and allow denominators that are powers of p. The chosen root gives a class β of degree two in algebraic K-theory with coefficients modulo p. Invert β formally by adjoining a multiplicative inverse.

**Problem.** Étale K-theory computes groups using covers that are locally unramified. For this ring and these coefficients, multiplication by β identifies its groups two degrees apart.

**How the definition helps.** Formal inversion supplies the inverse to the degree shift, in our own explanation. In ordinary algebraic K-theory the construction gives a class, with no inverse specified. Thomason’s comparison theorem identifies the theory obtained by inversion with periodic étale K-theory.

**nLab:** [Bott element](https://ncatlab.org/nlab/show/Bott+element). It says: “A Bott element is an element in a periodic cohomology theory, multiplication by which is invertible.”

**Sources:**

- [Robert Thomason, Algebraic K-theory and etale cohomology (1985)](https://www.numdam.org/articles/10.24033/asens.1495/)

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

**Problem.** For n ≥ 2, the rank of the algebraic K-group K\_(2n−1) of the ring of integers of F is r₁ + r₂ for odd n and r₂ for even n. Here r₁ counts real embeddings and r₂ counts pairs of nonreal embeddings.

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

**Definition.** Use a rational generator \[z\] for each complex number z outside {0,1}. Take five distinct points on the projective line and delete them one at a time. Impose the alternating sum of the five resulting cross-ratio symbols as a relation. The quotient by these relations is the rational pre-Bloch group.

**Problem.** The Bloch–Wigner dilogarithm D, a real single-valued version of the dilogarithm, gives a linear map \[z\] ↦ D(z) on this quotient. Restricting it to the kernel of \[z\] ↦ z ∧ (1 − z) gives the Bloch dilogarithm regulator.

**How the definition helps.** In our own explanation, the presentation turns independence of the chosen symbol expression into exactly Abel’s five-term identity. That identity says D kills each defining relation. One can therefore evaluate a representative term by term. Starting from algebraic K₃ instead requires a comparison with its symbol description. Both the functional identity and the comparison with K-theory are substantive results.

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

**How the definition helps.** The fixed subspace gives one rank formula covering all contributions from embeddings into ℂ. The regulator theorem identifies the complexified K-group with a space indexed by embeddings, with conjugation acting by a sign. Our own count takes one copy of V per complex place of K. At a real place it takes the eigenspace where conjugation acts by (−1)ⁿ⁻¹. The Artin functional equation and nonvanishing at n turn the resulting count into the order of vanishing.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2). It says: “\\mathrm  {ord}<sub>s=1-n</sub>L(s,\\rho )= \\qopname  \\relax o{dim}\_ \\mathbb  {L}\\left \[K<sub>2n-1</sub>( \\mathcal  {O}\_ \\mathbb  {F})\\otimes \_ \\mathbb  {Z} \\underline  {\\rho }\\right \]<sup>G</sup>.”

**Sources:**

- [Ningchuan Zhang, Borel’s rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2)

### Monodromy gives tame reciprocity

**Remember:** The small loops sum to zero, so their monodromies multiply to one.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** Let f and g be nonzero meromorphic functions on a compact connected Riemann surface. Remove their zeros and poles. Their Deligne cup product gives a line bundle with a flat connection there. Transport around a loop multiplies the fiber by a scalar called its monodromy.

**Problem.** At a point with local coordinate t, write f = tᵐu and g = tⁿv with u and v nonvanishing there. The tame symbol is the value of (−1)ᵐⁿvᵐ/uⁿ there. The product of these symbols over all points equals one.

**How the definition helps.** Using transport turns the usual product of local function values into evaluation on the sum of puncture loops. Deligne’s local formula identifies each factor, up to simultaneous inversion, with the monodromy of its loop. Our own topological argument uses the surface left after removing small disks. Its boundary gives a relation saying the sum of the loops is zero in homology.

**nLab:** [Deligne line bundle](https://ncatlab.org/nlab/show/Deligne+line+bundle). It says: “is a holomorphic line bundle with connection, hence a degree-2 cocycle in Deligne cohomology”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)

### Norm residue needs twisted coefficients

**Remember:** Keep the Galois action on roots of unity in the coefficients.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Fix a field F and a prime ℓ different from its characteristic. Let μℓ consist of the ℓ-th roots of unity in a separable closure, with field automorphisms acting on them. For a nonzero a, an ℓ-th root α gives the degree-one class of σ ↦ σ(α)/α. Multiply n such classes using the cohomology product, whose coefficients lie in the n-fold tensor power of μℓ.

**Problem.** For each n ≥ 0, this map identifies degree n Milnor K-theory modulo ℓ with degree n Galois cohomology with those coefficients.

**How the definition helps.** The tensor power records how field automorphisms act on the roots in all n slots. Our own example takes F = 𝔽₂ and ℓ = 3, where the multiplicative group is trivial, so Milnor K₁ modulo 3 vanishes. With constant coefficients ℤ/3, the Frobenius can map to any element, so the degree-one group is ℤ/3 and the map fails. Kummer theory proves the degree-one case, and the norm-residue theorem proves the higher degrees.

**nLab:** [Milnor K-theory](https://ncatlab.org/nlab/show/Milnor+K-theory). It says: “the sheaf of lth roots of unity to the n (i.e. tensored with itself n times).”

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “Hⁿ(K,(ℤ/p)(n)) ≅ Kᴹₙ(K)/p”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ-coefficients (2011)](https://doi.org/10.4007/annals.2011.174.1.11)

### One trace form compares both regulators

**Remember:** Use one trace form to see the factor of two.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19E20. arXiv math.NT, math.KT. Level 4: research.

**Definition.** A regulator assigns a real coordinate to a class in algebraic K-theory, which studies invertible matrices and their higher relations. Tamme compares two regulators by lifting the class to relative K-theory, which records a topological trivialization. On this lift, his relative Chern character integrates a differential form built from the trace of matrices.

**Problem.** With the normalizations in Tamme’s Theorem 4.3, Borel’s regulator equals twice Beilinson’s on the algebraic K-group of ℂ in degree 2n−1 for n ≥ 1.

**How the definition helps.** The relative character expresses both regulators through integrals of the same trace form. Every class lifts because odd topological K-theory vanishes at a point. Tamme identifies the projected relative character with Beilinson’s regulator and computes the coefficient for Borel’s regulator. The coefficients then give the factor of two.

**Wikipedia:** [Beilinson regulator](https://en.wikipedia.org/wiki/Beilinson_regulator). It says: “Up to a factor 2, the Beilinson regulator is also generalization of the Borel regulator.”

**Sources:**

- [G. Tamme, Karoubi’s relative Chern character and Beilinson’s regulator (2012)](https://doi.org/10.24033/asens.2174)
- [J. I. Burgos Gil, The Regulators of Beilinson and Borel, CRM Monograph Series 15](https://doi.org/10.1090/crmm/015)

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

**Definition.** Let A be the ring of integers of a number field F and S a finite set of finite primes. Its ring of S-integers allows denominators at primes in S only. Its zeta function omits the corresponding prime factors.

**Problem.** Fix an integer n ≥ 2. Passing to S-integers multiplies the order of the algebraic K-group in degree 2n−2 by the product of qⁿ⁻¹−1 over S. Here q counts elements of each residue field, the field obtained by reducing at the prime.

**How the definition helps.** Both definitions isolate one contribution per deleted prime, in our own comparison. Quillen’s localization sequence expresses the new even K-group as an extension of the residue groups by the old even K-group. Surjectivity onto the residue terms follows from localization for the number field. Each residue group has order qⁿ⁻¹−1 by Quillen’s calculation, or by counting nonzero field elements when n = 2. At 1−n, deleting the same zeta factor multiplies the absolute leading coefficient by precisely this number.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “K₂ᵢ₋₁(𝔽q) ≃ ℤ/(qⁱ−1), K₂ᵢ(𝔽q)=0.”

**Sources:**

- [Daniel Quillen, On the cohomology and K-theory of the general linear groups over a finite field (1972)](https://doi.org/10.2307/1970825)

### Ring spectra preserve regulator products

**Remember:** Take homotopy groups of a ring map to get a graded ring map.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** A ring spectrum represents cohomology groups together with their multiplication across degrees. Bunke, Nikolaus and Tamme realize the Beilinson regulator as a map of commutative ring spectra from algebraic K-theory to absolute Hodge cohomology. The latter theory records real cohomology classes together with conditions on their differential forms.

**Problem.** The Beilinson regulator sends a product of algebraic K-theory classes to the product of their regulator classes. Multiplication adds the weights, the indices of the target’s components.

**How the definition helps.** A map of ring spectra preserves products before one takes the individual groups. Our own deduction applies this fact to the refined regulator and then takes homotopy groups. The work lies in constructing the map and identifying its components with the classical regulator maps defined separately in each degree.

**nLab:** [differential algebraic K-theory](https://ncatlab.org/nlab/show/differential+algebraic+K-theory). It says: “As a homomorphism of E-∞ ring objects, this is”

**Sources:**

- [U. Bunke, T. Nikolaus and G. Tamme, The Beilinson regulator is a map of ring spectra (2018)](https://doi.org/10.1016/j.aim.2018.05.027)
- [U. Bunke and G. Tamme, Multiplicative differential algebraic K-theory and applications (2016)](https://doi.org/10.2140/akt.2016.1.227)

### Steinberg relations present diagonal cohomology

**Remember:** All relations come from products of complementary Kummer classes.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Fix a prime ℓ different from the characteristic of F. Let μℓ be the group of ℓ-th roots of unity with the action of field automorphisms. In degree n use degree n Galois cohomology with coefficients in the n-fold tensor power of μℓ. The cohomology product adds degrees and combines coefficient tensors, giving a graded ring.

**Problem.** This ring has degree-one generators given by F× modulo ℓ-th powers, with multiplication in F× corresponding to addition of generators. Its only additional relations say that the product of the generators for a and 1 − a vanishes whenever both are nonzero.

**How the definition helps.** Matching the coefficient power to the degree collects the cohomology groups into one ring with a presentation in degrees one and two. Our own explanation uses the norm-residue theorem to identify this ring with the Milnor ring modulo ℓ. The Milnor ring starts with the tensor algebra on the degree-one generators and imposes exactly the stated pair relations. Kummer theory identifies the generators, while the full comparison excludes additional relations.

**Wikipedia:** [Norm residue isomorphism theorem](https://en.wikipedia.org/wiki/Norm_residue_isomorphism_theorem). It says: “This is the defining relation of Milnor K-theory.”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ-coefficients (2011)](https://doi.org/10.4007/annals.2011.174.1.11)

### Tame symbols decide where regulators extend

**Remember:** A tame symbol records what a loop around a missing point sees.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** Let f and g be nonzero rational functions on a smooth complex curve. At a point x, write f = tᵐu and g = tⁿv using a local coordinate t and functions u,v invertible at x. Define the tame symbol as (−1)ᵐⁿv(x)ᵐ/u(x)ⁿ. Call a class in K₂, the group generated by function pairs subject to the symbol relations, unramified at x if its tame symbol equals one.

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

**Definition.** Let F be a number field and p an odd prime. The pth roots of unity form a one-dimensional vector space over the field with p elements. Its jth tensor power over this field is the mod-p Tate twist of weight j. Field automorphisms act on each tensor factor.

**Problem.** For a finite abelian group A, its p-rank is the dimension of A/pA over the field with p elements. For positive k, the p-rank of the degree 2k algebraic K-group of the integers of F repeats with period \[F(ζₚ)∶F\]. Here ζₚ is a primitive pth root of unity.

**How the definition helps.** Tensor powers make the period visible in the action on roots of unity, by our own calculation. The multipliers on the original line form a group of order \[F(ζₚ)∶F\]. Raising them to the power k+1 therefore gives the same action after one period. The comparison between K-theory and étale cohomology identifies the p-rank with a cohomology dimension for this twist.

**Paper or page:** [On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099). It says: “In particular, one has p ∣ \# K₂ₖ(𝒪Ｆ) if and only if p ∣ \# K₂ₖ′(𝒪Ｆ).”

**Sources:**

- [Meng Fai Lim, On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099)

### Tate-twisted roots give the Birch–Tate factor

**Remember:** The squared action fixes more than the ordinary roots.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F, adjoin a primitive mth root of unity. Each automorphism fixing F raises that root to a power a modulo m. Define w₂(F) as the largest m for which every such a satisfies a² ≡ 1 modulo m. The second Tate twist uses this squared action.

**Problem.** Let F be a totally real abelian extension of ℚ. Its second algebraic K-group of integers has order w₂(F) times the absolute value of its Dedekind zeta function at −1.

**How the definition helps.** The squared action gives the correction factor that ordinary roots of unity miss, in our own comparison. Over ℚ all invertible residues modulo m have square one exactly when m divides 24. Thus w₂(ℚ) is 24, although ℚ contains only two roots of unity. The Birch–Tate theorem for totally real abelian fields supplies the special-value identity.

**Wikipedia:** [Birch–Tate conjecture](https://en.wikipedia.org/wiki/Birch%E2%80%93Tate_conjecture). It says: “the largest positive integer such that the extension of F by the N-th root of unity has an elementary abelian 2-group as its Galois group”

**Paper or page:** [On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099). It says: “Let F be a totally real abelian number field of degree r.”

**Sources:** none listed. No primary source with a working link was found.

### Tetralogarithm cycles factor Borel’s regulator

**Remember:** An abstract regulator value becomes an evaluation of a cycle.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11G55. arXiv math.NT, math.AG. Level 4: research.

**Definition.** In the rational weight-four polylogarithm complex over ℂ, start with formal combinations of single-argument tetralogarithm symbols modulo their functional relations. A cycle is a combination whose first differential vanishes. Evaluate a cycle by summing the corresponding values of the real single-valued tetralogarithm with the same coefficients.

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

**Definition.** Let G be the Galois group of a finite Galois extension F/K of number fields. Let V be a finite-dimensional complex representation of G and let n ≥ 1 be an integer. Tensor the degree 2n−1 algebraic K-group of the integers of F with V over ℤ. Keep the vectors fixed when G acts on both factors together.

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

**Definition.** For a connected cell complex X, form the integral group ring from integer combinations of based loop classes, multiplying by concatenating loops. For a homotopy retract of a finite complex, Wall models the universal cover’s chains by a finite complex of projective modules. These modules are direct summands of finite free modules over the group ring. The obstruction is their alternating class sum in reduced K₀, where the free rank-one class is zero.

**Problem.** Suppose X is a homotopy retract of a finite cell complex, so the composite through that complex is homotopic to the identity. Wall’s obstruction vanishes exactly when X is homotopy equivalent to a finite cell complex.

**How the definition helps.** In our own argument, reduced K₀ makes every cell in a finite model contribute zero. Choosing one lift per cell gives a basis for the cellular chains over the group ring. At a point the ordinary K₀ class is one, although the point already has a finite model. Wall constructs the finite projective model, proves independence of the choices and establishes the converse.

**nLab:** [Wall's finiteness obstruction](https://ncatlab.org/nlab/show/Wall%27s+finiteness+obstruction). It says: “the vanishing of Wall's finiteness obstruction is a necessary and sufficient condition for this to happen.”

**Sources:**

- [C. T. C. Wall, Finiteness Conditions for CW-Complexes (1965)](https://doi.org/10.2307/1970382)

### Defining KK and E-theory by universal properties gives the comparison functor

**Remember:** A rule that respects all extensions respects split extensions.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** On separable C\*-algebras, Kasparov's KK category is the target of the universal functor that is homotopy invariant, stable and split exact. Stable means that tensoring with the compact operators becomes invertible. Split exact means that split extensions become direct sums. E-theory has the same universal property, but with exactness required for all extensions.

**Problem.** There is a canonical functor from Kasparov's KK category to E-theory that is compatible with the maps from C\*-algebras.

**How the definition helps.** The E-theory functor is homotopy invariant and stable, and it is exact on all extensions, hence on split ones. So the universal property of KK gives the functor at once. The nLab gives exactly this argument. The work moves to Higson's theorems that the analytic definitions have these universal properties (our own). Deducing split exactness from exactness also needs the long exact sequences that homotopy invariance provides (our own).

**nLab:** [E-theory](https://ncatlab.org/nlab/show/E-theory). It says: “since every split exact sequence is in particular exact, there is a universal functor”

**Sources:**

- [Nigel Higson, A characterization of KK-theory (1987).](https://doi.org/10.2140/pjm.1987.126.253)
- [Nigel Higson, Categories of fractions and excision in KK-theory (1990).](https://doi.org/10.1016/0022-4049(90)90114-w)

### Kasparov equivalences preserve operator K-theory

**Remember:** Compose with an invertible correspondence and then compose with its inverse.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** For separable complex operator algebras closed under adjoints and norm limits, Kasparov’s category KK has generalized maps between algebras. Separable means having a countable dense subset. A KK-equivalence is a generalized map with a two-sided inverse. Describe K₀(A) and K₁(A) by the even and odd KK groups of maps from ℂ to A.

**Problem.** A KK-equivalence between separable complex C\*-algebras induces isomorphisms on both operator K-groups.

**How the definition helps.** In our own proof, composing maps from ℂ with the equivalence gives the desired map in each degree. Composing with its inverse gives the inverse on each group. The comparison theorem identifies these groups with the usual definitions using projections and unitaries. Those definitions alone supply no algebra homomorphism representing the equivalence.

**nLab:** [KK-theory](https://ncatlab.org/nlab/show/KK-theory). It says: “KK(ℂ, A) ≃ K₀(A)”

**Sources:** none listed. No primary source with a working link was found.

### Module spectra express the operator Künneth formula

**Remember:** Tensor the spectra so torsion is not lost in the product formula.

*Makes the theorem clean to state or prove.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A spectrum packages groups in all degrees with the maps relating them. Operator K-theory assigns an algebra A a spectrum K(A) with an action of periodic complex K-theory, denoted KU. This action makes K(A) a module over KU and allows two such modules to be tensored over KU.

**Problem.** Let A lie in the UCT class, the smallest stable subcategory of KK that contains ℂ and is closed under colimits. Then for every B in KK, the canonical map K(A) ⊗<sub>KU</sub> K(B) → K(A ⊗ B) is an equivalence.

**How the definition helps.** In our own formulation, the tensor product of modules over KU packages the entire product formula into one map. An equivalence means the map induces isomorphisms on homotopy groups in every degree. The cited theorem proves this comparison for the stated category. Tensoring only the graded abelian groups can miss contributions from torsion.

**Paper or page:** [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191v1), [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191v1). It says: “For A in UCT and B in 𝐊𝐊, the canonical map K(A) ⊗<sub>KU</sub> K(B) → K(A ⊗ B) is an equivalence.”

**Sources:**

- [Ulrich Bunke, Markus Land and Ulrich Pennig, A survey on operator K-theory via homotopical algebra, Corollary 5.17](https://arxiv.org/abs/2311.17191v1)

### The universal property of KK-theory gives every split-exact stable functor Bott periodicity

**Remember:** A functor that factors through KK inherits its periodicity.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.KT, math.OA. Level 4: research.

**Definition.** Kasparov's KK-theory gives a category whose objects are separable C\*-algebras. Higson showed that the functor into it is universal among functors to abelian groups that are additive, homotopy invariant, stable and split exact. Stable means that tensoring with the compact operators changes nothing, and split exact means that split short exact sequences go to split short exact sequences. Kasparov's own definition builds the morphisms from operators on Hilbert modules.

**Problem.** Every functor F with these four properties satisfies F(S²A) ≅ F(A), naturally in A. Here the suspension SA is A tensored with the continuous functions on ℝ that vanish at infinity.

**How the definition helps.** By the universal property, F factors through the KK category. So the Bott isomorphism between S²A and A in KK goes to an isomorphism under F. The work is Kasparov's proof of Bott periodicity in KK and Higson's theorem that KK has this universal property. Wikipedia states that such theories inherit Bott periodicity from KK.

**Wikipedia:** [KK-theory](https://en.wikipedia.org/wiki/KK-theory). It says: “Any such theory satisfies Bott periodicity in the appropriate sense”

**Sources:**

- [Gennady Kasparov, The operator K-functor and extensions of C\*-algebras (1981, English translation)](https://doi.org/10.1070/IM1981v016n03ABEH001320)
- [Nigel Higson, A characterization of KK-theory (1987)](https://doi.org/10.2140/pjm.1987.126.253)

### Shift defects compute Toeplitz boundaries

**Remember:** The unilateral shift misses one basis vector, so its index is minus one.

*True by definition.* MSC 19K56 (Index theory), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A partial isometry v preserves lengths on the orthogonal complement of its kernel and vanishes on the kernel. If v lifts a quotient unitary u, compute the boundary of \[u\] as \[1 − v\*v\] − \[1 − vv\*\]. Here v\* denotes the adjoint, and the brackets denote projection classes in K₀ of the kernel ideal.

**Problem.** For the algebra generated by the unilateral shift and its adjoint, quotienting by compact operators gives the continuous functions on the circle. The boundary sends the circle coordinate to minus the rank-one projection class.

**How the definition helps.** In our own calculation, the two projections measure the kernel and missing range of the unilateral shift. This shift sends each basis vector to the next, so its kernel is zero and its range misses one basis vector. The defect formula gives minus the class of the projection onto that vector. The Toeplitz extension theorem identifies the shift modulo compact operators with the circle coordinate. Computing instead by winding number requires the index theorem relating winding to this boundary.

**Wikipedia:** [Toeplitz algebra](https://en.wikipedia.org/wiki/Toeplitz_algebra). It says: “So the Toeplitz algebra can be viewed as the C\*-algebra extension of continuous functions on the circle by the compact operators.”

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “Then ∂(\[u\])=\[1ₙ−v\*v\]−\[1ₙ−vv\*\].”

**Sources:** none listed. No primary source with a working link was found.

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

**Definition.** Give each operator algebra a grading into even and odd parts compatible with multiplication and adjoints. Stabilize it by taking its graded tensor product with compact operators on a fixed graded Hilbert space. Representatives are linear maps from continuous functions vanishing at infinity on the real line into this stabilization. They preserve multiplication, adjoints and grading by reflection, and convergence means norm convergence on each input.

**Problem.** A surjective grading-preserving star homomorphism induces a map of K-theory spaces. Its homotopy fiber over zero, which allows images equipped with a path to zero, is equivalent to the kernel’s K-theory space.

**How the definition helps.** In the map model, a representative maps to zero exactly when its values lie in the stabilized kernel (our own). This identifies the ordinary fiber directly, without computing a boundary map in the usual exact sequence (our own). The cited lifting theorem lets the ordinary fiber compute the homotopy fiber (our own).

**Paper or page:** [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606). It says: “Then, 𝕂(A,H) → 𝕂(B,H) is a Serre fibration, with fiber 𝕂(J).”

**Sources:**

- [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606)

### Spectral products associate on representatives

**Remember:** Split the input, then tensor the maps.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras). arXiv math.KT. Level 4: research.

**Definition.** Let S consist of continuous complex functions vanishing at infinity on the real line, graded by even and odd parity. Representatives are graded star homomorphisms from S into an operator algebra tensored with compact operators, the norm limits of finite-rank operators. These linear maps preserve multiplication, adjoints and grading. To multiply representatives, first apply the standard splitting of S into its graded tensor square, then apply the two maps.

**Problem.** At the level of maps, the external product is associative after the canonical identification of the two tensor products. Swapping the inputs gives the same result after the graded swap, which introduces a minus sign when both factors are odd.

**How the definition helps.** The two ways to split the input three ways give the same map, so both products agree before taking classes (our own). The splitting also respects the graded swap (our own). The work lies in constructing this splitting and comparing map classes with the usual groups defined from projections in the ungraded case (our own).

**Paper or page:** [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606). It says: “Products are commutative and associative, in the sense that the following diagrams commute strictly”

**Sources:**

- [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606)

### Superconnection Chern forms are closed

**Remember:** The square commutes with its root, and a graded trace kills commutators.

*True by definition.* MSC 19L10 (Riemann-Roch theorems, Chern characters), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Split a finite-rank complex vector bundle into even and odd parts. A superconnection A reverses total parity on bundle-valued forms and satisfies A(αs) = dα·s + (−1)ᵏαA(s) for each scalar k-form α. Define its Chern form as the graded trace of exp(−A²). The graded trace subtracts the odd trace from the even trace.

**Problem.** The Chern character form of a finite-rank superconnection is closed.

**How the definition helps.** Our own calculation reduces closedness to the identity that A commutes with every power of its square. The graded product rule identifies the exterior derivative of the Chern form with the graded trace of that commutator. The transgression formula shows this definition gives the same cohomology class as the ordinary connection formula, with matching normalization.

**Paper or page:** [The families analytic index for 1∣1-dimensional Euclidean field theories](https://arxiv.org/abs/2303.09207v1). It says: “When it exists, the Chern form of a Clₙ-linear superconnection 𝔸 is closed and has total degree n.”

**Sources:**

- [Daniel Quillen, Superconnections and the Chern character (1985)](https://doi.org/10.1016/0040-9383(85)90047-3)

### Connective K-theory modulo Bott gives integers

**Remember:** Removing positive powers of Bott from connective K-theory leaves only the integers.

*Rules out counterexamples.* MSC 19L41 (Connective \\(K\\)-theory, cobordism), 55N20. arXiv math.AT, math.KT. Level 4: research.

**Definition.** A spectrum represents a cohomology theory in all degrees at once. The connective cover ku of periodic complex K-theory keeps its nonnegative homotopy groups and sets its negative groups to zero. The Bott element β is the generator in degree two that produces periodicity.

**Problem.** The cofiber of multiplication by β on ku represents ordinary integral cohomology. Here the cofiber is the homotopy version of the quotient by a map.

**How the definition helps.** Removing the negative groups leaves the homotopy ring of ku as the polynomial ring ℤ\[β\], by Bott periodicity (our own calculation). Multiplication by β is injective there, with cokernel ℤ in degree zero, so the cofiber has only ℤ in degree zero. A spectrum with only ℤ in degree zero represents ordinary integral cohomology. In periodic K-theory β is invertible, so the cofiber vanishes instead.

**nLab:** [ku](https://ncatlab.org/nlab/show/ku), [Bott periodicity](https://ncatlab.org/nlab/show/Bott+periodicity). It says: “The ring spectrum commonly denoted ku is the connective cover of the spectrum KU, which represents complex topological K-theory.”

**Sources:** none listed. No primary source with a working link was found.

### Exact connection changes preserve curvature

**Remember:** An exact change contributes zero after differentiation.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Equip a smooth complex vector bundle with a connection, a rule for differentiating its sections. Its Chern character form is an even differential form computed from the curvature of the connection. The Chern–Simons form compares two connections and is defined up to an exact form, the exterior derivative of another form. Identify the connections when their Chern–Simons form is exact.

**Problem.** Taking the difference of Chern character forms gives a well-defined curvature map on formal differences of these structured bundles.

**How the definition helps.** Exactness kills the derivative of the comparison form, so equivalent connections give identical character forms (our own). Forgetting the connection altogether would retain only the cohomology class, which identifies forms differing by an exact form (our own). The transgression formula supplies the work by identifying the difference of character forms with the exterior derivative of the comparison form (our own). Additivity under direct sum gives the map on formal differences (our own).

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “the equivalence relation that identifies two connections ∇ and ∇′ if their Chern-Simons form CS(∇,∇′) is exact.”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm sections allow nontorsion twists

**Remember:** Finite rank forces torsion, while a Fredholm bundle can carry any twist.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** On a finite cell complex X, a degree-three integral cohomology class specifies a projective unitary bundle. Its changes of coordinates are unitary operators on an infinite-dimensional complex Hilbert space, defined up to scalar phase. They act by conjugation on Fredholm operators, bounded operators with closed range and finite-dimensional kernel and cokernel. Degree-zero twisted K-theory uses continuous sections of the resulting operator bundle, up to continuous deformation.

**Problem.** On a finite cell complex, the Fredholm model defines twisted K-theory for every degree-three integral class. Twisted bundles of finite positive rank exist only when the class has finite order.

**How the definition helps.** Scalar phases cancel in conjugation, so the Fredholm construction works for every twist (our own explanation). For a twisted bundle of constant rank r, taking determinants raises each phase to its rth power, so r times the twisting class is zero. On the three-sphere, a generator of degree-three cohomology has infinite order, so no positive rank works.

**nLab:** [twisted K-theory](https://ncatlab.org/nlab/show/twisted+K-theory). It says: “then the corresponding χ-twisted cohomology spectrum is that consisting of the spaces of sections”

**Sources:**

- [Michael Atiyah and Graeme Segal, Twisted K-theory and cohomology (2006)](https://doi.org/10.1142/9789812772688_0002)
