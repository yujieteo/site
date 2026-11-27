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

### The plus construction defines all higher K-groups as homotopy groups

**Remember:** Make π₁ of BGL(R) abelian, keep the homology, and read off K-groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a ring R, let GL(R) be the union of the groups GLₙ(R), and let BGL(R) be its classifying space. The K-theory space is BGL(R)⁺, where ⁺ is Quillen's plus construction. This construction kills the subgroup E(R) of elementary matrices in the fundamental group without changing homology; E(R) is perfect, which means that it equals its own commutator subgroup. Then Kₙ(R) is defined as πₙ(BGL(R)⁺) for n ≥ 1.

**Problem.** Define higher K-groups Kₙ(R) for all n that come from one space. They should agree with the classical K₁(R) = GL(R)/E(R) and with Milnor's K₂.

**How the definition helps.** The plus construction is built to give the right fundamental group, so K₁ is correct by construction. The construction kills exactly the perfect normal subgroup E(R) of π₁ and keeps the homology. By Whitehead's lemma, E(R) is the commutator subgroup of GL(R), so π₁(BGL(R)⁺) = GL(R)/E(R) = K₁(R). The group π₂(BGL(R)⁺) agrees with Milnor's K₂(R), which is a short theorem, so all K-groups are homotopy groups of one space. Long exact sequences of K-groups are hard to get from this definition. They come more easily from Quillen's Q-construction. The real content is then Quillen's theorem that the two definitions agree.

**nLab:** [Quillen plus construction](https://ncatlab.org/nlab/show/Quillen+plus+construction), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group). It says: “The plus construction doesn't change the homology of the space but 'kills' a perfect normal subgroup of G within the classifying space BG.”

**Sources:**

- [Charles Weibel, The K-book: An introduction to algebraic K-theory, Graduate Studies in Mathematics 145, AMS (2013), Section IV.1](https://sites.math.rutgers.edu/~weibel/Kbook.html)
- [Marc Hoyois, On Quillen's plus construction (2019)](https://hoyois.app.uni-regensburg.de/papers/acyclic.pdf)

### Milnor K-theory's Steinberg relation is exactly what the Galois symbol needs

**Remember:** Once the Steinberg relation holds, cup products give a map on symbols.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory), 12G05. arXiv math.KT, math.NT. Level 3: graduate.

**Definition.** For a field F, the Milnor K-group Kₙᴹ(F) is generated by symbols {a₁, …, aₙ} of nonzero elements. Symbols are multiplicative in each entry. A symbol is zero when two adjacent entries are a and 1 − a, which is the Steinberg relation. Quillen's K-groups, defined from the homotopy groups of a space, agree with these only up to degree two.

**Problem.** Let m be invertible in F, and let μₘ be the group of m-th roots of unity. Cup products of Kummer classes give a homomorphism from Kₙᴹ(F)/m to Galois cohomology with coefficients in the n-fold tensor power of μₘ. The Kummer class of a records how the Galois group moves the m-th roots of a.

**How the definition helps.** The cup product is multilinear, so only the Steinberg relation needs checking. That check is that the cup product of the Kummer classes of a and 1 − a is zero (our own). It follows from writing 1 − a as a norm from the field generated by an m-th root of a (our own). Wikipedia states that the map satisfies the defining relations of the Milnor K-group. For Quillen's groups there is no such presentation by symbols beyond degree two (our own).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “satisfying the defining relations of the Milnor K-group”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970).](https://doi.org/10.1007/BF01425486)

### Defining relative K-theory as a homotopy fiber builds in exactness

**Remember:** A homotopy fiber remembers how a class becomes zero.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 19D06. arXiv math.KT. Level 3: graduate.

**Definition.** Let R be a ring with an ideal I. Quillen's K-theory gives a space K(R) whose homotopy groups are the K-groups of R. Define relative K-theory K(R, I) as the homotopy fiber of K(R) → K(R/I). Its points are points of K(R) together with a path from their image to the base point.

**Problem.** The relative K-groups fit into a long exact sequence ⋯ → Kₙ(R, I) → Kₙ(R) → Kₙ(R/I) → Kₙ₋₁(R, I) → ⋯.

**How the definition helps.** Every map of spaces gives a long exact sequence of homotopy groups for its homotopy fiber, so this sequence holds by definition. Wikipedia states that the program sought definitions for which the sequence arises in this way. Older algebraic definitions of relative K₀ and K₁ gave only the low-degree part, checked by hand (our own). The work moves to constructing K(R) as a space and comparing the fiber with those older groups (our own).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “the long exact sequence for relative K-groups arises as the long exact homotopy sequence of a fibration”

**Sources:** none listed. No primary source with a working link was found.

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

**How the definition helps.** In our own argument, constant term one makes the series invertible, so subtraction becomes division. The coefficient of degree r is the class of the rth exterior power, which records alternating products of r vectors. The exterior powers of an extension have successive pieces built from the subbundle and quotient. This proves that the series respects the defining exact sequence relations. For the negative trivial line the series is 1/(1 + t), which is no longer a polynomial.

**Paper or page:** [Weil](https://stacks.math.columbia.edu/tag/0FIC). It says: “Let X be a scheme. There are maps λʳ : K₀(Vect(X)) → K₀(Vect(X))”

**Sources:** none listed. No primary source with a working link was found.

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

**How the definition helps.** Enlarging the target values from zero to V makes the inverse images into a vector bundle even when the kernels jump (our own explanation). Quotienting the target by V gives a surjective family, whose kernels form this bundle. For each operator, subtracting dim V from its inverse image dimension gives kernel dimension minus cokernel dimension. Compactness of the parameter space supplies a common V. Enlarging V adds the same constant bundle to both terms, so taking the sum of two choices proves independence. For example, multiply one coordinate by a real parameter and leave the other coordinates fixed. The kernel gains a dimension at zero.

**nLab:** [Atiyah-Jänich theorem](https://ncatlab.org/nlab/show/Atiyah-J%C3%A4nich+theorem). It says: “forms the index bundle, an X-parameterized enhancement of the Fredholm index”

**Sources:**

- [Klaus Jänich, Vektorraumbündel und der Raum der Fredholm-Operatoren (1965)](https://doi.org/10.1007/BF01360851)

### Cone boundaries give suspension isomorphisms

**Remember:** A cone has no K-groups, so its boundary map is an isomorphism.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a complex C\*-algebra A, a norm-closed algebra of operators closed under adjoints, its cone consists of continuous A-valued paths vanishing at zero. The suspension consists of cone paths also vanishing at one. It is therefore the kernel of evaluation at one.

**Problem.** The boundary maps identify K₀(A) with K₁ of its suspension and K₁(A) with K₀ of its suspension.

**How the definition helps.** In our own proof, the kernel description puts the suspension into an exact sequence with the cone and A. Shrinking the path parameter contracts the cone, so its K-groups vanish. The six-term exact sequence for operator K-theory now places zeros on both sides of each boundary map. Exactness makes both maps isomorphisms. The six-term theorem incorporates Bott periodicity, the repetition of K-groups every two degrees. A description using loops of matrices still needs this periodicity to recover both maps.

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

**Problem.** Every class in K₁(A) comes from the circle coordinate z under a unital map preserving products, sums, complex scalars and adjoints. The target may be a matrix algebra over A.

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

**Problem.** The circle’s classifying space is infinite complex projective space. Its degree-zero complex K-ring is ℤ\[\[c\]\], where c is the universal line bundle minus the trivial line.

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

**How the definition helps.** In our own proof, freeness lets each orbit of fibers become one vector space over the orbit space. A finite free action on a Hausdorff space gives each point a neighborhood disjoint from its nonidentity translates. Local bundle coordinates there give local coordinates on the quotient bundle. Pullback reverses this construction, so taking formal differences gives Segal’s isomorphism. Over a fixed point, the group of order two has distinct trivial and sign lines, although both underlying lines are identical.

**nLab:** [equivariant K-theory](https://ncatlab.org/nlab/show/equivariant+K-theory). It says: “equivariant K-theory is given by equivalence classes of virtual equivariant bundles”

**Sources:**

- [Graeme Segal, Equivariant K-theory (1968), Proposition 2.1](https://www.numdam.org/item/PMIHES_1968__34__129_0.pdf)

### Stabilizer representations classify coset bundles

**Remember:** One fiber determines the bundle when the group moves between all base points.

*Makes the theorem clean to state or prove.* MSC 19L47 (Equivariant \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a compact Lie group G, a G-equivariant complex vector bundle carries a G-action that acts linearly between fibers. Degree-zero equivariant K-theory takes formal differences of such bundles. On G∕H, the subgroup H acts on the fiber over the identity coset.

**Problem.** For a closed subgroup H, the G-equivariant K-ring of G∕H is the complex representation ring of H.

**How the definition helps.** Equivariance makes one fiber and its stabilizer action determine the entire bundle (our own explanation). The G-action transports the identity fiber to every other fiber. Conversely, for an H-representation V, identify (gh, v) with (g, hv) in G × V. Local sections of G → G∕H make the resulting space a vector bundle. These constructions are inverse up to isomorphism and preserve direct sums and tensor products. Passing to formal differences gives the ring isomorphism.

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

**How the definition helps.** In our own proof, the matrix description turns the problem of lifting a module into lifting one idempotent. The idempotent lifting theorem supplies this step. To compare two lifts, projectivity lets us lift an isomorphism and its inverse as module maps. Each composite differs from the identity by a map with image in I times the module. Such a map has a power equal to zero, so each composite is invertible. Reduction therefore identifies the direct sum classes before taking formal differences.

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

**Problem.** Recognize when a given map is a model of the plus construction. The paper uses this to compare its construction of the group completion with other ones.

**How the definition helps.** An acyclic map X → Y is onto on fundamental groups, and its kernel is perfect (a group equal to its own commutator subgroup). An E₁-group has abelian fundamental group, so the largest perfect subgroup of π₁(X) must go to zero in it. So the kernel is exactly that subgroup, and Y is X⁺. This argument is our own. The corollary also says that an acyclic map between E₁-groups is an equivalence. The main theorem, on a version of Quillen's S⁻¹S construction for n ≥ 2, stays hard.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “Let X → Y be an acyclic map with Y an E₁-group. Then Y is a model for the plus construction of X.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category, arXiv:2405.12118 (2024)](https://arxiv.org/abs/2405.12118)

### Nonconnective K-theory gives Bass–Heller–Swan without idempotent completeness

**Remember:** Nonconnective K-theory cannot see idempotent completion, so idempotent completeness is not needed.

*Rules out counterexamples.* MSC 19D35 (Negative \\(K\\)-theory, NK and Nil), 18F25. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Nonconnective K-theory K∞ is the spectrum of algebraic K-theory with negative K-groups added, built by a delooping construction. A full subcategory is cofinal when every object of the larger category is a direct summand of an object of the smaller one.

**Problem.** The Bass–Heller–Swan decomposition splits the K-theory of a twisted Laurent extension into a mapping torus and two Nil-terms. For connective K-theory, the paper needs the additive category to be idempotent complete.

**How the definition helps.** Since K∞ does not change under a cofinal inclusion (Lemma 2.2), one can replace any additive category by its idempotent completion. So the decomposition for K∞, Theorem 3.1, holds for all additive categories. The same lemma gives only that the connective K-groups Kₙ agree for n ≥ 1, so K₀ can change. This is why the connective version, Theorem 3.3, needs idempotent completeness. The reduction to the idempotent complete case is our own reading of how the two theorems fit. The hard part is the proof of the decomposition itself (our own).

**Paper or page:** [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412), [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412), [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412). It says: “Let I : 𝒜 → 𝒜′ be the inclusion of a full cofinal additive subcategory. … The induced map K∞(I) : K∞(𝒜) → K∞(𝒜′) is a weak homotopy equivalence.”

**Sources:**

- [Arthur Bartels, Wolfgang Lueck, Vanishing of Nil-terms and negative K-theory for additive categories, Proc. Roy. Soc. Edinburgh Sect. A 154 (2024) 1945–2023, arXiv:2002.03412](https://doi.org/10.1017/prm.2024.103)

### Regular coherent additive categories have no negative K-groups or Nil-terms

**Remember:** Regular coherent categories have K-theory with no negative part and no Nil-terms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D35 (Negative \\(K\\)-theory, NK and Nil), 18F25. arXiv math.KT, math.AT. Level 4: research.

**Definition.** An additive category is regular coherent when, roughly, its finitely presented modules form an abelian category. Each such module must also have a finite resolution by finitely generated projective modules. This extends regular coherence for rings to additive categories.

**Problem.** Negative K-groups and Nil-groups are the error terms in the Bass–Heller–Swan formula and in the Farrell–Jones conjecture. One wants simple conditions under which they vanish.

**How the definition helps.** Regular coherence lets the classical resolution argument work for additive categories (our own). So the vanishing follows as it does for regular rings. The precise theorem for negative K-groups, Theorem 11.1, asks that every polynomial extension 𝒜\[t₁, …, tₘ\] is regular coherent, not only 𝒜. For coherent rings this is a real extra condition, because coherence need not pass to polynomial rings (our own). This matters for the Farrell–Jones conjecture, where coefficients are additive categories, not rings (our own). The hard part is the passage from rings to additive categories with twisted polynomial extensions.

**Paper or page:** [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412). It says: “For instance the negative K-groups and all twisted Nil-groups vanish for an additive category if it is regular coherent.”

**Sources:**

- [Arthur Bartels, Wolfgang Lueck, Vanishing of Nil-terms and negative K-theory for additive categories, Proc. Roy. Soc. Edinburgh Sect. A 154 (2024) 1945–2023, arXiv:2002.03412](https://doi.org/10.1017/prm.2024.103)

### c-categories extend the Dundas–Goodwillie–McCarthy theorem to stacks

**Remember:** Control a category by connective rings, and trace methods still apply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 18N60, 14A30. arXiv math.KT, math.AT. Level 4: research.

**Definition.** A c-category is a category whose behaviour is controlled by connective ring spectra. Any c-category has a resolution in finitely many steps by categories of compact modules over connective ring spectra. A truncating invariant is one that does not change when a connective ring spectrum is replaced by its zeroth homotopy ring.

**Problem.** The Dundas–Goodwillie–McCarthy theorem says that the fiber of the cyclotomic trace from K-theory to TC is unchanged by nilpotent extensions of connective rings. The aim is to extend it to perfect complexes on stacks.

**How the definition helps.** The finite resolution by compact modules lets the theorem for connective rings pass to every c-category, step by step (our own). The paper shows that perfect complexes on many stacks form a c-category. So the generalization follows from that fact. The hard part is showing that a given category is a c-category.

**Paper or page:** [c-structures and trace methods beyond connective rings](https://arxiv.org/abs/2509.14774). It says: “We introduce nilpotent extensions of c-categories, and show that they induce isomorphisms on truncating invariants, such as the fiber of the cyclotomic trace map.”

**Sources:**

- [Ishan Levy, Vladimir Sosnilo, c-structures and trace methods beyond connective rings, arXiv:2509.14774 (2025)](https://arxiv.org/abs/2509.14774)

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

**How the definition helps.** Coherent sheaves allow both restriction to the open set and extension from the closed subscheme (our own explanation). Restriction kills exactly the sheaves supported on the closed subset. Quillen’s localization theorem gives a long exact sequence involving these supported sheaves. Filtering each such sheaf by powers of the defining ideal gives layers annihilated by that ideal. Those layers are sheaves on the closed subscheme. Quillen’s filtration theorem therefore identifies the supported term with the G-theory of that subscheme.

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

**Problem.** Prove that K-theory of schemes has a localization sequence and a Mayer–Vietoris sequence for open covers (Zariski descent). This should hold for all quasi-compact quasi-separated schemes.

**How the definition helps.** Perfect complexes restrict and extend well along open immersions (inclusions of open subschemes), and descent needs exactly this. Quillen's K-theory of vector bundles is defined on all schemes. But a scheme without an ample family of line bundles may have too few vector bundles, and then the descent and localization theorems are not available. With perfect complexes, Thomason and Trobaugh prove a localization sequence and Mayer–Vietoris for open covers of quasi-compact quasi-separated schemes. The nLab credits them with Zariski descent for finite-dimensional noetherian schemes; the wider statement is from their paper. On schemes with an ample family of line bundles, the two K-theories agree, so nothing is lost. The descent proofs are still long.

**nLab:** [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction). It says: “Thomason-Trobaugh K-theory coincides with Quillen K-theory for schemes that admit an ample family of line bundles, but has the advantage of better global descent properties.”

**Sources:**

- [R. W. Thomason, Thomas Trobaugh, Higher algebraic K-theory of schemes and of derived categories, The Grothendieck Festschrift vol. III, Progress in Math. 88 (1990) 247–435](https://doi.org/10.1007/978-0-8176-4576-2_10)

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

**Problem.** Work in the stable version of Kasparov’s category KK, which allows generalized maps between operator algebras. Suppose A belongs to the smallest stable subcategory containing ℂ and closed under all colimits, which assemble diagrams of objects. For any B in KK, the comparison from K(A) tensored over KU with K(B) to K(A ⊗ B) is an equivalence.

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

### Connective K-theory modulo Bott gives integers

**Remember:** Removing positive powers of Bott from connective K-theory leaves only the integers.

*Rules out counterexamples.* MSC 19L41 (Connective \\(K\\)-theory, cobordism), 55N20. arXiv math.AT, math.KT. Level 4: research.

**Definition.** A spectrum represents a cohomology theory in all degrees at once. The connective cover ku of periodic complex K-theory keeps its nonnegative homotopy groups and sets its negative groups to zero. The Bott element β is the generator in degree two that produces periodicity.

**Problem.** The cofiber of multiplication by β on ku represents ordinary integral cohomology. Here the cofiber is the homotopy version of the quotient by a map.

**How the definition helps.** In our own calculation, removing the negative groups leaves no class in degree minus two that can map onto degree zero. By Bott periodicity the homotopy ring of ku is the polynomial ring ℤ\[β\]. Multiplication by β is injective, with cokernel ℤ in degree zero. The cofiber exact sequence gives those same groups for the cofiber. A spectrum with only ℤ in degree zero represents ordinary integral cohomology. In periodic K-theory, β is invertible and the cofiber vanishes.

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

**Problem.** On a finite complex built by attaching cells, the Fredholm model defines twisted K-theory for every twist. Finite-rank twisted bundles cannot do this.

**How the definition helps.** Scalar phases cancel in conjugation, so the Fredholm construction works for every twist (our own explanation). For a twisted bundle of constant positive rank r, taking determinants raises each scalar phase to its rth power. The determinants therefore trivialize r times the twisting class. On the three-sphere, a generator of degree-three integral cohomology has infinite order and rules out every positive rank. The projective unitary bundle classification supplies the operator bundle for each class.

**nLab:** [twisted K-theory](https://ncatlab.org/nlab/show/twisted+K-theory). It says: “then the corresponding χ-twisted cohomology spectrum is that consisting of the spaces of sections”

**Sources:**

- [Michael Atiyah and Graeme Segal, Twisted K-theory and cohomology (2006)](https://doi.org/10.1142/9789812772688_0002)
