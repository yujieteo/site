### Endomorphisms form a ring only when the group is abelian

**Remember:** Add endomorphisms pointwise only when the group is abelian.

*Rules out counterexamples. Confidence: medium.* MSC 16S50 (Endomorphism rings; matrix rings), 20K30. arXiv math.RA, math.GR. Level 1: early undergraduate.

**Definition.** An endomorphism of a group G is a homomorphism from G to itself. The pointwise sum of endomorphisms f and g sends x to f(x)g(x), and it preserves products only if each f(y) commutes with each g(x).

**Problem.** For an abelian group, the endomorphisms form a ring under pointwise addition and composition. For a non-abelian group, this structure is not a ring.

**How the definition helps.** Commutativity makes the pointwise sum an endomorphism, gives an abelian group of endomorphisms, and lets composition distribute on both sides (our own argument). In a non-abelian group the sum of the identity with itself is x ↦ x², and (xy)² = x²y² for all x, y forces xy = yx.

**Paper or page:** [Set of Endomorphisms of Non-Abelian Group is not Ring](https://proofwiki.org/wiki/Set_of_Endomorphisms_of_Non-Abelian_Group_is_not_Ring). It says: “Let (G, ⊕) be a group which is non-abelian. Let 𝔾 be the set of all group endomorphisms of (G, ⊕). Then the algebraic structure (𝔾, ⊕, \*) is not a ring.”

**Sources:**

- [ProofWiki, Set of Endomorphisms of Non-Abelian Group is not Ring](https://proofwiki.org/wiki/Set_of_Endomorphisms_of_Non-Abelian_Group_is_not_Ring)

### Preserving one preserves units

**Remember:** Apply the map to uv = 1, and one goes to one.

*Rules out counterexamples.* MSC 16U60 (Units, groups of units (associative rings and algebras)). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A unital ring homomorphism preserves addition, multiplication and the identity 1. A unit is an element u with uv = vu = 1 for some v.

**Problem.** A unital ring homomorphism sends units to units and restricts to a homomorphism of their multiplicative groups.

**How the definition helps.** Applying the map to uv = vu = 1 gives f(u)f(v) = f(v)f(u) = 1, because f(1) = 1. Without that condition, the map n ↦ (n, 0) from ℤ to ℤ × ℤ sends the unit 1 to (1, 0), which is not invertible (our own counterexample).

**Wikipedia:** [Ring homomorphism](https://en.wikipedia.org/wiki/Ring_homomorphism). It says: “For any unit a in R, f(a) is a unit element such that f(a)⁻¹ = f(a⁻¹).”

**Sources:** none listed. No primary source with a working link was found.

### Allowing 0 = 1 gives the category of rings a terminal object

**Remember:** Every ring maps to the one-element ring in exactly one way.

*True by definition.* MSC 16B50 (Category-theoretic methods and results in associative algebras (except as in 16D90)), 18A30. arXiv math.RA, math.CT. Level 2: later undergraduate.

**Definition.** The usual definition of a ring with identity does not forbid 0 = 1, so the one-element set {0} is a ring, the zero ring. Ring maps must send 1 to 1, and the zero ring's only element is its 1.

**Problem.** In the category of rings with identity, the zero ring is a terminal object. This means that every ring has exactly one ring map to it.

**How the definition helps.** Every ring has exactly one function to a one-element set. That function preserves addition, multiplication and 1 because the target has only one value (our own argument).

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring). It says: “In the category of rings, the zero ring is the terminal object, whereas the ring of integers Z is the initial object.”

**Sources:** none listed. No primary source with a working link was found.

### Defined through ℤ → R, the target's characteristic divides the source's

**Remember:** A unital ring map can only enlarge the kernel from ℤ.

*True by definition. Confidence: medium.* MSC 16B99 (General and miscellaneous), 13B10. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** The characteristic of a unital ring R is the nonnegative integer n such that nℤ is the kernel of the unique unital map ℤ → R, k ↦ k·1.

**Problem.** Let R → S be a ring map that sends 1 to 1. Then the characteristic of S divides the characteristic of R.

**How the definition helps.** The map ℤ → S is ℤ → R followed by R → S, so its kernel contains the kernel for R. An inclusion nℤ ⊆ mℤ means exactly that m divides n. With the least-n definition, one must first prove that k·1 = 0 exactly when the characteristic divides k (our own remark).

**Paper or page:** [Principal Ideal of Characteristic of Ring is Subset of Kernel of Multiple Function](https://proofwiki.org/wiki/Principal_Ideal_of_Characteristic_of_Ring_is_Subset_of_Kernel_of_Multiple_Function). It says: “(p) ⊆ ker(gₐ)”

**Sources:** none listed. No primary source with a working link was found.

### Defining an algebra by a central scalar map makes linearity automatic

**Remember:** A scalar acts as its image η(r) inside the ring.

*True by definition.* MSC 16B99 (General and miscellaneous), 13B10. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A unital algebra over a commutative ring R is a unital ring A with a unital ring map η from R into its center. The scalar action is ra = η(r)a.

**Problem.** Let f be a ring map from A to B that sends 1 to 1. Then f is R-linear exactly when f(η<sub>A</sub>(r)) = η<sub>B</sub>(r) for every r in R.

**How the definition helps.** If f respects the scalar maps, multiplicativity gives f(ra) = f(η<sub>A</sub>(r))f(a) = η<sub>B</sub>(r)f(a) (our own argument). Conversely, R-linearity at a = 1 gives f(η<sub>A</sub>(r)) = η<sub>B</sub>(r), since f(1) = 1.

**Wikipedia:** [Algebra over a field](https://en.wikipedia.org/wiki/Algebra_over_a_field). It says: “This definition is equivalent to that above, with scalar multiplication”

**Sources:** none listed. No primary source with a working link was found.

### A section makes a short exact sequence a direct sum

**Remember:** Subtract the section of the image to land in the kernel.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Let p: B → C be a surjective module map with kernel A. A section is a linear map s: C → B with p(s(c)) = c for every c, so each b has a C-part s(p(b)) inside B.

**Problem.** If s is a section of p, then B is isomorphic to A ⊕ C by an isomorphism carrying p to projection onto C.

**How the definition helps.** Writing b = (b − s(p(b))) + s(p(b)) splits b into a part in A, since p kills it, and a part in s(C) (our own formula). So b ↦ (b − s(p(b)), p(b)) is an isomorphism B → A ⊕ C. Its inverse sends (a, c) to a + s(c).

**Paper or page:** [Lemma 12.5.10.](https://stacks.math.columbia.edu/tag/010G). It says: “Given a morphism s : C → B right inverse to B → C”

**Sources:** none listed. No primary source with a working link was found.

### Composition series make module length additive

**Remember:** Lift the quotient series and append it to the submodule series.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A composition series of a module is a finite chain of submodules from 0 to the module whose successive quotients are simple, that is, nonzero with no proper nonzero submodule. The length is the number of steps, the same for every composition series by Jordan–Hölder.

**Problem.** If a submodule A and its quotient M/A have composition series, then M has length equal to the sum of their lengths.

**How the definition helps.** A series for A followed by the lift of a series for M/A is a composition series of M with both sets of steps (our own construction). The lifted steps have the original simple quotients by the third isomorphism theorem. Jordan–Hölder makes the count independent of the chosen series.

**Paper or page:** [Lemma 10.52.3.](https://stacks.math.columbia.edu/tag/00IV). It says: “then the length of M is the sum of the lengths of M′ and M″.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring 1x = x makes ℤ-modules exactly the abelian groups

**Remember:** If 1 acts as the identity, n times x means x added n times.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA, math.GR. Level 2: later undergraduate.

**Definition.** A unital left R-module structure on an abelian group M is a unital ring map R → End(M), the ring of group endomorphisms of M under pointwise addition and composition.

**Problem.** Every abelian group is a ℤ-module, and in only one way. So the theory of ℤ-modules is the theory of abelian groups.

**How the definition helps.** A unital map sends 1 to the identity of M, and additivity then forces n to act as x added n times, with negation for negative n. This action does satisfy the module laws, so it exists and is unique (our own check).

**Wikipedia:** [Module (mathematics)](https://en.wikipedia.org/wiki/Module_%28mathematics%29). It says: “every abelian group is a module over the ring of integers Z in a unique way.”

**Sources:** none listed. No primary source with a working link was found.

### The quotient property makes maps into a module left exact

**Remember:** Maps that kill a submodule are exactly maps from the quotient.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The quotient B/A, where elements differing by an element of the submodule A become equal, comes with a map q: B → B/A. Every linear map from B that kills A factors uniquely through q.

**Problem.** For any module M, composition with the quotient map identifies maps from B/A to M with maps from B to M vanishing on A. This is left exactness of Hom(−, M).

**How the definition helps.** The mapping property is exactly the claimed identification of maps. A map from B kills A exactly when its restriction to A is zero, which gives left exactness of Hom(−, M) (our own explanation). The work lies in proving the mapping property from the coset construction.

**Paper or page:** [Proposition 3.4.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is a left-exact contravariant functor.”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, the ideal generated by f is simply Rf

**Remember:** Because f = 1·f, the multiples of f already contain f.

*Rules out counterexamples.* MSC 16D25 (Ideals in associative algebras), 13A15. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** For f in a ring R, the left ideal generated by f is the intersection of all left ideals containing f.

**Problem.** In a ring with 1, the left ideal generated by f is Rf. So in a commutative ring with 1, (f) ⊆ (g) exactly when g divides f.

**How the definition helps.** In a unital ring, Rf contains f and every left ideal containing f contains Rf. Thus (f) ⊆ (g) in the commutative case precisely when f is a multiple of g. In 2ℤ, the multiples of 2 form 4ℤ and omit 2 itself (our own example).

**Wikipedia:** [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “in a ring R, the left ideal (f) generated by an element f, defined as the smallest left ideal containing f, is simply Rf, but if R is only a rng, then Rf might not contain f”

**Sources:**

- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)

### Free modules keep only finite sums

**Remember:** Finite support lets every basis assignment extend by a finite sum.

*Rules out counterexamples.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Over a nonzero ring R with 1, the free module on a set S consists of the functions S → R that are nonzero at only finitely many points. So each element is a finite sum ∑ r<sub>s</sub> e<sub>s</sub>, where e<sub>s</sub> is 1 at s and 0 elsewhere.

**Problem.** For any R-module M, every function S → M extends uniquely to a linear map from the free module.

**How the definition helps.** A linear extension must send ∑ r<sub>s</sub> e<sub>s</sub> to ∑ r<sub>s</sub> m<sub>s</sub>, and this finite sum always makes sense, so the extension exists and is unique. Without finite support uniqueness fails (our own counterexample). The map from all integer sequences to their classes modulo finitely supported sequences kills every coordinate vector but not the all-ones sequence.

**Paper or page:** [Universal Property of Free Module on Set](https://proofwiki.org/wiki/Universal_Property_of_Free_Module_on_Set). It says: “Then there exists a unique R-module morphism”

**Sources:** none listed. No primary source with a working link was found.

### Free modules turn generators into surjections

**Remember:** Send the free basis to generators to get a surjection.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The free module on a set S has one basis element for each member of S. Equivalently, each assignment on those elements extends uniquely to a linear map into any module over the same ring.

**Problem.** A module is generated by a family indexed by S exactly when the induced map from the free module on S is onto.

**How the definition helps.** The induced map sends each finite combination of basis elements to the same combination of the family. So its image is the submodule the family generates, and it is onto exactly when the family generates the module.

**Paper or page:** [Characterisation of Spanning Set through Free Module Indexed by Set](https://proofwiki.org/wiki/Characterisation_of_Spanning_Set_through_Free_Module_Indexed_by_Set). It says: “Let Ψ: R⁽ᴵ⁾ → M be the morphism given by Universal Property of Free Module Indexed by Set.”

**Sources:** none listed. No primary source with a working link was found.

### Sums of simple modules stay semisimple under quotients

**Remember:** The image of a simple module is simple or zero.

*True by definition.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras). arXiv math.RA, math.RT. Level 2: later undergraduate.

**Definition.** Here a semisimple module is a sum, not necessarily direct, of simple submodules, those nonzero modules with no proper nonzero submodule.

**Problem.** Every quotient of a semisimple module is semisimple.

**How the definition helps.** The quotient map carries a sum of simple submodules onto the sum of their images (our own proof). Each image is simple or zero because the restricted kernel is either zero or the whole simple module. Hence the quotient is again a sum of simple submodules.

**Wikipedia:** [Semisimple module](https://en.wikipedia.org/wiki/Semisimple_module). It says: “If M is semisimple and N is a submodule, then N and M / N are also semisimple.”

**Sources:** none listed. No primary source with a working link was found.

### Wedderburn–Artin needs semisimple rings, not simple rings

**Remember:** Semisimplicity splits every module into simple summands.

*Rules out counterexamples.* MSC 16K99 (Division rings and semisimple Artin rings), 16D60. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A unital ring is semisimple when every left module is a direct sum of simple modules, those nonzero with no proper nonzero submodule. A simple ring, one that is nonzero with no proper nonzero two-sided ideal, need not be semisimple.

**Problem.** The Wedderburn–Artin theorem says that every semisimple ring is a finite product of matrix rings over division rings. The simple ones among them are single matrix rings.

**How the definition helps.** Wedderburn–Artin works from the splitting of the ring, as a left module, into simple summands, which simplicity of two-sided ideals does not give. A product of several nonzero matrix rings has proper nonzero two-sided ideals. The Weyl algebra in characteristic zero is simple, but not semisimple and not a matrix ring over a division ring.

**nLab:** [Wedderburn-Artin theorem](https://ncatlab.org/nlab/show/Wedderburn-Artin+theorem). It says: “For example, the Weyl algebra is simple but not semisimple, and not isomorphic to a matrix algebra over a division ring.”

**Sources:**

- [J. H. M. Wedderburn, On Hypercomplex Numbers, Proceedings of the London Mathematical Society s2-6 (1908) 77–118](https://doi.org/10.1112/plms/s2-6.1.77)

### Formal differences determine the unique unital map from ℤ

**Remember:** A formal difference must map to the same difference of multiples of one.

*True by definition. Confidence: medium.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 18A30. arXiv math.RA, math.CT. Level 2: later undergraduate.

**Definition.** Construct ℤ from pairs of natural numbers, identifying (a,b) and (c,d) when a + d = b + c. The class of (a,b) represents the formal difference a − b, with the usual sum and product of differences.

**Problem.** Every ring with 1 has exactly one ring homomorphism from ℤ that sends 1 to 1.

**How the definition helps.** Send (a,b) to a·1 − b·1 (our own argument). The pair relation makes the value independent of the representative, and the rules for differences preserve sums and products. Every unital map must take this value because it sends 1 to 1.

**nLab:** [integer](https://ncatlab.org/nlab/show/integer). It says: “The ring ℤ of all integers may defined as the free group on one generator or as the initial ring.”

**Sources:** none listed. No primary source with a working link was found.

### Ordering by x + y = y makes idempotent addition a join

**Remember:** Adding a smaller element leaves the larger element alone.

*True by definition. Confidence: medium.* MSC 16Y60 (Semirings), 06F05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** In an additively idempotent semiring, where x + x = x for all x, define x ≤ y to mean x + y = y.

**Problem.** In this order, x + y is the least upper bound, or join, of x and y. Multiplication on either side preserves these joins.

**How the definition helps.** Idempotence gives x + (x + y) = x + y, so x and y both lie below x + y. If x + z = z and y + z = z, then (x + y) + z = z, so x + y is the least upper bound (our own calculation). Distributivity on both sides then preserves joins.

**nLab:** [additively idempotent semiring](https://ncatlab.org/nlab/show/additively+idempotent+semiring). It says: “Due to idempotence the addition is a join with respect to this partial order”

**Sources:** none listed. No primary source with a working link was found.

### Bimodules as modules over the enveloping algebra form an abelian category

**Remember:** Reverse right multiplication and it becomes a left action.

*True by definition.* MSC 16D20 (Bimodules in associative algebras), 16D90. arXiv math.RA. Level 3: graduate.

**Definition.** The enveloping algebra of an algebra A over a commutative ring R is A ⊗<sub>R</sub> Aᵒᵖ, where Aᵒᵖ is A with its multiplication reversed. An A-bimodule, with commuting left and right actions that agree on R, is the same as a left module over it, with a ⊗ b acting by m ↦ amb (our own summary).

**Problem.** The category of A-bimodules is abelian, meaning that kernels, cokernels and exact sequences behave as for modules. Kernels and cokernels are computed on the underlying abelian groups.

**How the definition helps.** Bimodules then form the category of left modules over one ring, which is abelian, so no new proof is needed. The nLab states this one-to-one match, and checking that it also matches the maps makes it an isomorphism of categories (our own).

**nLab:** [enveloping algebra](https://ncatlab.org/nlab/show/enveloping+algebra). It says: “The left Aᵉ-modules in C are in 1-1 correspondence with the A-A-bimodules in C.”

**Sources:** none listed. No primary source with a working link was found.

### A superfluous kernel makes the projective cover a summand of every presentation

**Remember:** A cover has projective source, and no proper submodule still surjects.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 18G05. arXiv math.RA. Level 3: graduate.

**Definition.** A projective cover of M is a surjection p from a projective module P onto M with superfluous kernel. This means no proper submodule N of P has N + ker p = P, that is, no proper submodule of P still maps onto M.

**Problem.** Let p: P → M be a projective cover and P′ → M any surjection from a projective module. Then P is a direct summand of P′ over M, so projective covers are unique up to isomorphism.

**How the definition helps.** Projectivity lifts P′ → M to a map α into P whose image plus ker p equals P (our own proof). Superfluity makes α surjective, and projectivity of P gives a section. If P′ also covers M, the section's image still surjects onto M, so superfluity makes that image all of P′.

**Wikipedia:** [Projective cover](https://en.wikipedia.org/wiki/Projective_cover). It says: “If (P,p) is a projective cover of M, and P' is another projective module with an epimorphism p′:P′→M, then there is a split epimorphism α from P' to P such that pα=p′”

**Paper or page:** [Stacks Project, Dualizing Complexes, Lemma 47.4.2](https://stacks.math.columbia.edu/tag/08XZ). It says: “If a projective cover of M exists, then it is unique up to isomorphism.”

**Sources:**

- [H. Bass, Finitistic dimension and a homological generalization of semi-primary rings, Transactions of the American Mathematical Society 95 (1960)](https://doi.org/10.1090/S0002-9947-1960-0157984-8)

### Free modules defined by universal property turn products of sets into tensors

**Remember:** Pairs of generators become pure tensors.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 15A69. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The free module on a set X is a module F with a map X → F such that each function from X into a module extends uniquely to a linear map from F.

**Problem.** Over a commutative ring, the free module on X × Y is isomorphic to a tensor product. Its factors are the free modules on X and on Y.

**How the definition helps.** The free module on X × Y and the tensor product of the two free modules both have maps out that correspond to functions on X × Y, so they are isomorphic. A function on X × Y extends uniquely to a bilinear map on the two free modules (our own argument). Bilinear maps are the linear maps out of the tensor product.

**nLab:** [free module](https://ncatlab.org/nlab/show/free+module). It says: “In other words, the free module construction turns set-theoretic products into tensor products.”

**Sources:** none listed. No primary source with a working link was found.

### Three equivalent definitions of projective module make each basic fact immediate

**Remember:** Lift every map through every surjection.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 18G05. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A module M is projective if, for every surjection p and every linear map f from M to its target, some linear map g into its source satisfies pg = f.

**Problem.** For a module M over a ring, three conditions are equivalent. M has the lifting property; M is a direct summand of a free module; every short exact sequence ending in M splits.

**How the definition helps.** Lifting the identity of M through any surjection onto M splits it, and splitting a surjection from a free module exhibits M as a summand (our own proof). Free modules lift maps by choosing preimages of the basis images. A summand lifts by extending a map by zero on the complement, lifting, and restricting.

**Paper or page:** [Equivalence of Definitions of Projective Module](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Projective_Module). It says: “(2): M is a direct summand of a free module. (3): Every short exact sequence of the form 0 → X → Y → M → 0 splits”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Projective Module](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Projective_Module)

### Asking for an essential extension makes the injective hull unique

**Remember:** The smallest injective home for M, with no part disjoint from M.

*Makes the theorem clean to state or prove.* MSC 16D50 (Injective modules, self-injective associative rings), 18G05. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** An injective hull of M is an injective module E that contains M essentially, meaning every nonzero submodule of E meets M in a nonzero element. Injective means every map into E from a submodule extends to the whole module.

**Problem.** Every module M has an injective hull. Any two injective hulls of M are isomorphic by an isomorphism that fixes M.

**How the definition helps.** Injectivity extends the identity of M to a map between two hulls, and essentiality makes it injective because its kernel misses M (our own argument). Its image is injective, hence a direct summand, and essentiality in the target kills the complement. Existence comes from the injective envelope theorem.

**Wikipedia:** [Injective hull](https://en.wikipedia.org/wiki/Injective_hull), [Injective module](https://en.wikipedia.org/wiki/Injective_module). It says: “the injective hull (or injective envelope) of a module is both the smallest injective module containing it and the largest essential extension of it.”

**Sources:**

- [B. Eckmann and A. Schopf, Über injektive Moduln, Archiv der Mathematik 4 (1953) 75–78](https://doi.org/10.1007/BF01899665)
- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### Essential extensions turn injectivity into a maximality condition

**Remember:** Injective modules are exactly the ones with no room to grow essentially.

*Makes the theorem clean to state or prove.* MSC 16D50 (Injective modules, self-injective associative rings), 18G05. arXiv math.RA. Level 3: graduate.

**Definition.** An extension M ⊆ N is essential if every nonzero submodule of N intersects M nontrivially. A module is injective if every map into it from a submodule extends to the containing module.

**Problem.** A module is injective exactly when it has no proper essential extension. Inside an injective module I, a submodule E is injective exactly when no E ⊊ E′ ⊆ I is an essential extension.

**How the definition helps.** An injective module is a direct summand of every extension, and a nonzero complement would meet it trivially, so no proper extension is essential (our own argument). Conversely, a module with no proper essential extension equals its injective hull. Inside I, the hull of E embeds over E, so a non-injective E has a proper essential enlargement inside I.

**Paper or page:** [Stacks Project, Dualizing Complexes, Lemma 47.3.5](https://stacks.math.columbia.edu/tag/08XS). It says: “In particular, an R-module is injective if and only if every essential extension is trivial.”

**Sources:**

- [B. Eckmann and A. Schopf, Über injektive Moduln, Archiv der Mathematik 4 (1953)](https://doi.org/10.1007/BF01899665)

### Absolutely simple modules make Schur's lemma give scalars over any field

**Remember:** Every endomorphism is a scalar, so central elements act as scalars.

*True by definition.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras), 20C15. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A simple module over a k-algebra, nonzero with no proper nonzero submodule, is absolutely simple when its only module endomorphisms are multiplications by elements of the base field k.

**Problem.** Every central element of the algebra acts on an absolutely simple module as a scalar. So the module has a central character, a ring map from the center to k.

**How the definition helps.** A central element commutes with the whole algebra, so acting by it is a module endomorphism and hence a scalar. The scalar is unique since the module is nonzero, and it adds and multiplies with the central element, giving a ring map from the center to k (our own argument).

**Wikipedia:** [Schur's lemma](https://en.wikipedia.org/wiki/Schur%27s_lemma). It says: “A simple module over a k-algebra is said to be absolutely simple if its endomorphism ring is isomorphic to k. This is in general stronger than being irreducible over the field k”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, every simple ring is primitive

**Remember:** With 1, a simple ring acts faithfully on its simple quotients.

*Rules out counterexamples.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** A ring is left primitive if it has a faithful simple left module, one on which only 0 acts as zero. A simple ring is a nonzero ring whose only two-sided ideals are 0 and itself.

**Problem.** Every simple ring with 1 is left and right primitive. So the Jacobson density theorem describes it as a dense ring of linear maps of a vector space over a division ring.

**How the definition helps.** With 1, a maximal left ideal L exists, and R/L is a simple module whose annihilator is a proper two-sided ideal, hence zero (our own argument). The same holds on the right, and Jacobson density then applies. Without 1 this fails: the zero-product ring of prime order has RM = 0 on every simple module, so none is faithful (our own counterexample).

**Wikipedia:** [Primitive ring](https://en.wikipedia.org/wiki/Primitive_ring), [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29), [Jacobson radical](https://en.wikipedia.org/wiki/Jacobson_radical). It says: “Every simple ring R with unity is both left and right primitive. (However, a simple non-unital ring may not be primitive.)”

**Sources:**

- [N. Jacobson, The radical and semi-simplicity for arbitrary rings, American Journal of Mathematics 67 (1945) 300–320](https://doi.org/10.2307/2371731)

### Local endomorphism rings make direct sum decompositions unique

**Remember:** If the pieces have local endomorphism rings, the pieces are unique.

*Makes the theorem clean to state or prove.* MSC 16D70 (Structure and classification for modules, bimodules and ideals (except as in 16Gxx), direct sum decomposition and cancellation in associative algebras)), 16L30. arXiv math.RA, math.RT. Level 3: graduate.

**Definition.** A nonzero module is strongly indecomposable if its endomorphism ring is local, meaning the noninvertible endomorphisms form an ideal, so a sum of noninvertible endomorphisms is never invertible.

**Problem.** Krull–Schmidt theorem: a nonzero module of finite length is a direct sum of indecomposable modules, unique up to order and isomorphism. Azumaya's theorem extends this to any decomposition, even infinite, into strongly indecomposable modules.

**How the definition helps.** Locality means a sum of endomorphisms is invertible only if some term is, and this drives the exchange of summands (our own explanation). Fitting's lemma makes finite-length indecomposables strongly indecomposable, so Krull–Schmidt follows. Azumaya's theorem runs the same exchange for arbitrary direct sums.

**Wikipedia:** [Krull–Schmidt theorem](https://en.wikipedia.org/wiki/Krull%E2%80%93Schmidt_theorem). It says: “if a module has a (possibly infinite) decomposition into strongly indecomposable modules, then this decomposition is unique up to a permutation and isomorphism.”

**Sources:**

- [A. Facchini, D. Herbera, L. S. Levy and P. Vámos, Krull–Schmidt fails for Artinian modules, Proceedings of the American Mathematical Society 123 (1995) 3587](https://doi.org/10.1090/S0002-9939-1995-1277109-4)

### Basic representatives are unique

**Remember:** Keep one projective of each kind to recover one ring.

*Rules out counterexamples.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra is basic when its regular right module is a direct sum of indecomposable projectives with exactly one of each isomorphism type.

**Problem.** Consider finite-dimensional algebras over a field whose module categories are equivalent by functors linear over that field. Each such equivalence class has exactly one basic algebra up to algebra isomorphism.

**How the definition helps.** An equivalence carries the sum P of one copy of each indecomposable finitely generated projective to the same kind of sum (our own argument). A basic algebra is the endomorphism algebra of its own such sum, and Morita's theorem shows End(P) is basic and equivalent. A field and its 2 × 2 matrix algebra are equivalent but not isomorphic, so without the basic condition uniqueness fails.

**Wikipedia:** [Morita equivalence](https://en.wikipedia.org/wiki/Morita_equivalence). It says: “While isomorphic rings are Morita equivalent, Morita equivalent rings can be nonisomorphic.”

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the regular representation of B is a direct summand of a finite direct sum of copies of P.”

**Sources:** none listed. No primary source with a working link was found.

### Determining functors by their value on R gives the Eilenberg–Watts theorem

**Remember:** Right exact and sum-preserving means tensoring with F(R).

*Makes the theorem clean to state or prove.* MSC 16D90 (Module categories in associative algebras), 18E10. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A functor between module categories is cocontinuous when it preserves all small colimits. Equivalently it is right exact and preserves direct sums, or it is a left adjoint.

**Problem.** For rings R and S, every additive cocontinuous functor F from Mod-R to Mod-S is tensoring over R with the bimodule F(R). This gives an equivalence between R–S bimodules and cocontinuous functors.

**How the definition helps.** Every module is the cokernel of a map between free modules, so a functor preserving sums and cokernels is fixed by its value on R (our own). The left R-action on F(R) comes from applying F to left multiplication by each r. The comparison map M ⊗ F(R) → F(M) is natural and an isomorphism on R, hence on every module (our own).

**nLab:** [Eilenberg-Watts theorem](https://ncatlab.org/nlab/show/Eilenberg-Watts+theorem). It says: “Conversely, if F : Mod<sub>R</sub> → Mod<sub>S</sub> is additive and cocontinuous, then it is naturally isomorphic to tensoring with a bimodule.”

**Sources:**

- [C. E. Watts, Intrinsic characterizations of some additive functors, Proc. Amer. Math. Soc. 11 (1960) 5–8](https://doi.org/10.1090/S0002-9939-1960-0118757-0)

### Full corners recover modules

**Remember:** A full corner still sees the whole ring.

*Rules out counterexamples.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** An idempotent e, one with e² = e, is full when the two-sided ideal ReR is all of R, that is, 1 = ∑ aᵢebᵢ for finitely many aᵢ, bᵢ.

**Problem.** For a full idempotent e in a ring R with identity, the corner eRe is a ring with identity e. Sending each right R-module M to Me is an equivalence onto right eRe-modules, a Morita equivalence.

**How the definition helps.** Writing 1 = ∑ aᵢebᵢ makes R a summand of finitely many copies of eR, so eR is a projective generator (our own argument). Morita's theorem then gives the equivalence M ↦ Hom(eR, M) = Me. For e = (1, 0) in k × k, which is not full, M ↦ Me kills the nonzero module on the second factor (our own example).

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1), [On compatibility of Koszul- and higher preprojective gradings](https://arxiv.org/abs/2411.13283v3). It says: “is a graded basic algebra and Morita equivalent to R.”

**Sources:** none listed. No primary source with a working link was found.

### Module centers survive equivalence

**Remember:** The center acts on every module in the same way.

*True by definition.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** The center of a module category is the ring of natural endomorphisms of its identity functor: a choice of map on every module that commutes with all module maps.

**Problem.** Rings with equivalent module categories have isomorphic centers.

**How the definition helps.** The center is defined from modules and maps alone, so an equivalence transports it. On the free module R, naturality forces the chosen map to be multiplication by a central element, and maps out of R fix all other choices (our own proof). Thus the category center is the ring center.

**nLab:** [Morita equivalence](https://ncatlab.org/nlab/show/Morita+equivalence). It says: “the center of an algebra is isomorphic to the center of its category of modules and that Morita equivalent algebras have isomorphic centers.”

**Sources:** none listed. No primary source with a working link was found.

### Ring properties defined through modules are automatically Morita invariant

**Remember:** Say it with modules, and Morita equivalence keeps it.

*True by definition.* MSC 16D90 (Module categories in associative algebras), 16B50. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** Two rings are Morita equivalent when their module categories are equivalent as additive categories, as every ring R is with its ring of n × n matrices.

**Problem.** Every categorical property of modules and their maps is invariant under Morita equivalence. In particular, every positive-size matrix ring over a von Neumann regular ring is von Neumann regular.

**How the definition helps.** An equivalence preserves anything said only in terms of modules and maps. Von Neumann regularity, that each a has some x with axa = a, holds exactly when every module is flat, and flatness is such a property (our own explanation).

**Wikipedia:** [Morita equivalence](https://en.wikipedia.org/wiki/Morita_equivalence). It says: “Generally speaking, any property of modules defined purely in terms of modules and their homomorphisms (and not to their underlying elements or ring) is a categorical property which will be preserved by the equivalence functor.”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products compose functors

**Remember:** Compose tensor functors by tensoring their bimodules.

*True by definition.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** For unital rings R,S, an R–S bimodule P has commuting left R and right S actions. Its tensor functor sends each right R-module M to the right S-module M ⊗ᵣ P and each map f to f ⊗ id.

**Problem.** The composite of two such functors is represented by the tensor product of their representing bimodules over the middle ring.

**How the definition helps.** The composite sends M to (M ⊗ P) ⊗ Q, and associativity of tensor products identifies this with M ⊗ (P ⊗ Q) (our own argument). The Eilenberg–Watts theorem shows every colimit-preserving functor has this form, with the bimodule given by its value on the ring (our own explanation).

**nLab:** [Eilenberg-Watts theorem](https://ncatlab.org/nlab/show/Eilenberg-Watts+theorem). It says: “The Eilenberg-Watts theorem identifies colimit-preserving functors between categories of modules with the operations of forming tensor products with bimodules.”

**Sources:** none listed. No primary source with a working link was found.

### Bimodule resolutions of an algebra bound the global dimension of its modules

**Remember:** One bimodule resolution of A resolves every A-module at once.

*Makes the theorem clean to state or prove.* MSC 16E10 (Homological dimension in associative algebras), 16E40, 16H05. arXiv math.RA. Level 3: graduate.

**Definition.** The Hochschild dimension of a nonzero unital k-algebra A is the projective dimension of A as an A-bimodule, that is, as a module over Aᵉ = A ⊗ₖ Aᵒᵖ. A is separable when this dimension is 0.

**Problem.** The global dimension of a k-algebra A is at most its Hochschild dimension. In particular a separable algebra has global dimension 0, so it is semisimple.

**How the definition helps.** Tensoring a projective bimodule resolution of A with a left module M gives a projective resolution of M of the same length (our own proof). Exactness survives because the resolution splits as right modules, and summands of free bimodules give summands of free left modules. So M has projective dimension at most the Hochschild dimension.

**Wikipedia:** [Separable algebra](https://en.wikipedia.org/wiki/Separable_algebra). It says: “A K-algebra A is separable if and only if it is projective when considered as a left module of Aᵉ in the usual way.”

**Sources:** none listed. No primary source with a working link was found.

### Finite global dimension makes the Cartan matrix invertible over the integers

**Remember:** Each projective gives one column counting its simple factors.

*True by definition.* MSC 16E10 (Homological dimension in associative algebras), 16G10, 16E20. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** The Cartan matrix of a finite-dimensional algebra has entry (i, j) equal to the number of times the simple module Sᵢ occurs in a composition series of Pⱼ, the projective cover of Sⱼ.

**Problem.** If A has finite global dimension, then the determinant of its Cartan matrix is 1 or −1 (Eilenberg).

**How the definition helps.** The Cartan matrix sends classes of projectives to classes of modules in the Grothendieck group, and a square integer matrix has determinant ±1 exactly when it is onto. Finite global dimension writes each simple class as an alternating sum of projective classes, so the map is onto (our own summary). For k\[x\]/(x²) the Cartan matrix is (2), so that algebra has infinite global dimension.

**Wikipedia:** [Cartan matrix](https://en.wikipedia.org/wiki/Cartan_matrix). It says: “a Cartan matrix is defined by considering a (finite) set of principal indecomposable modules and writing composition series for them in terms of irreducible modules, yielding a matrix of integers counting the number of occurrences of an irreducible module.”

**Sources:**

- [S. Eilenberg, Algebras of cohomologically finite dimension, Commentarii Mathematici Helvetici (1954)](https://doi.org/10.1007/BF02566937)

### Tor-defined weak dimension makes Noetherian global dimension two-sided

**Remember:** Tor sees both sides at once, so Noetherian rings have one global dimension.

*True by definition.* MSC 16E10 (Homological dimension in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** The weak global dimension of a nonzero ring R is the largest n, possibly infinite, with Torₙᴿ(M, N) ≠ 0 for some right module M and left module N.

**Problem.** If a ring R is Noetherian on both sides, then its left and right global dimensions are equal. Both equal the weak global dimension of R.

**How the definition helps.** Tor uses both sides, so weak global dimension is unchanged by passage to the opposite ring. Auslander's theorem identifies it with right global dimension for right Noetherian rings. Applying the theorem also to the opposite ring gives the left equality (our own deduction).

**Wikipedia:** [Global dimension](https://en.wikipedia.org/wiki/Global_dimension). It says: “if A is a Noetherian ring, both of these dimensions turn out to be equal to weak global dimension, whose definition is left-right symmetric.”

**Sources:**

- [M. Auslander, On the dimension of modules and algebras (III): global dimension, Nagoya Mathematical Journal (1955)](https://doi.org/10.1017/S0027763000023291)

### Defining the Euler form by alternating Ext makes tilting an isometry

**Remember:** Euler forms live in the derived category, so derived equivalences preserve them.

*True by definition.* MSC 16E20 (Grothendieck groups, \\(K\\)-theory, etc.), 16E35, 16E10. arXiv math.RT. Level 3: graduate.

**Definition.** For a finite-dimensional k-algebra of finite global dimension, the Euler form pairs Grothendieck group classes by ⟨\[M\], \[N\]⟩ = ∑ᵢ (−1)ⁱ dimₖ Extⁱ(M, N). This is the alternating sum of the dimensions of maps from M to the shifts of N in the derived category.

**Problem.** Let T be a classical tilting module of projective dimension at most one over a finite-dimensional k-algebra A of finite global dimension. Then B = End<sub>A</sub>(T) has finite global dimension, and \[M\] ↦ \[Hom(T, M)\] − \[Ext¹(T, M)\] is an isometry of Grothendieck groups with Euler forms.

**How the definition helps.** The Euler form is read off from Hom spaces in the derived category, so a k-linear derived equivalence preserves it (our own explanation). Happel's tilting theorem gives that equivalence and finite global dimension for B. Since T has projective dimension at most one, only Hom and Ext¹ contribute to the image of a module class.

**Wikipedia:** [Tilting theory](https://en.wikipedia.org/wiki/Tilting_theory). It says: “If A has finite global dimension, then B also has finite global dimension, and the difference of F and F′ induces an isometry between the Grothendieck groups K₀(A) and K₀(B).”

**Sources:**

- [D. Happel, Triangulated Categories in the Representation Theory of Finite Dimensional Algebras, Cambridge University Press (1988)](https://doi.org/10.1017/CBO9780511629228)

### Perfect complexes survive equivalence

**Remember:** Perfect complexes are the ones that see sums one piece at a time.

*True by definition.* MSC 16E35 (Derived categories and associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A perfect complex over a ring is one quasi-isomorphic to a bounded complex of summands of finite free modules. Equivalently, it is compact in the derived category: every map from it into a direct sum factors through a finite subsum.

**Problem.** An equivalence between the unbounded derived categories of two rings restricts to an equivalence between their perfect complexes.

**How the definition helps.** An equivalence preserves maps and direct sums, so it preserves compact objects, which are the perfect complexes (our own argument). That compact objects are the perfect complexes comes from the compact generator theorem applied to the ring in degree zero.

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the full subcategory of T spanned by the compact objects coincides with its smallest idempotent complete triangulated subcategory which contains G.”

**Sources:**

- [Amnon Neeman, The Grothendieck duality theorem via Bousfield’s techniques and Brown representability](https://doi.org/10.1090/s0894-0347-96-00174-9)

### Tilting complexes detect equivalence

**Remember:** A tilting complex behaves like the ring: no self-extensions, generates everything.

*Makes the theorem clean to state or prove.* MSC 16E35 (Derived categories and associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A tilting complex is a bounded complex T of finitely generated projective modules with Hom(T, T\[i\]) = 0 in the derived category for every i ≠ 0. It must also generate every such bounded complex by shifts, cones and direct summands.

**Problem.** Two algebras over a field k have k-linearly triangulated equivalent unbounded derived categories exactly when one is End(T), computed in the derived category, for a tilting complex T over the other.

**How the definition helps.** The definition lists the properties of the image of the ring under a derived equivalence, so one direction is immediate (our own explanation). Rickard's theorem gives the converse, building an equivalence that sends T to the ring End(T).

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the regular representation of B can be obtained from T and its shifts by forming extensions and taking direct summands.”

**Sources:**

- [Jeremy Rickard, Morita Theory for Derived Categories](https://doi.org/10.1112/jlms/s2-39.3.436)

### Bidimension at most one makes nilpotent extensions split

**Remember:** Bidimension at most one kills HH², so nilpotent extensions split.

*Rules out counterexamples. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** The bidimension of a k-algebra B is the projective dimension of B as a B-bimodule, that is, as a module over Bᵉ = B ⊗ₖ Bᵒᵖ. Since HHⁿ(B, N) is Extⁿ over Bᵉ from B to N, bidimension at most one makes every HH²(B, N) vanish (our own).

**Problem.** Let A be a finite-dimensional algebra over a field k, with a nilpotent ideal I. If A/I has bidimension at most one, then A contains a subalgebra that maps isomorphically onto A/I.

**How the definition helps.** The obstruction to splitting over a square-zero layer N = Iʲ/Iʲ⁺¹ lies in HH²(A/I, N), which vanishes, and induction over the layers finishes the proof (our own). The bound excludes A = k\[x\]/((xᵖ − t)²) over k = 𝔽ₚ(t), with I generated by xᵖ − t (our own). There A/I contains a pth root of t but A does not, so A/I does not embed in A (our own).

**Wikipedia:** [Associative algebra](https://en.wikipedia.org/wiki/Associative_algebra). It says: “if the projective dimension of A / I as a module over the enveloping algebra (A / I)ᵉ is at most one, then the natural surjection p : A → A / I splits”

**Sources:** none listed. No primary source with a working link was found.

### Centralizers split group-ring Hochschild homology

**Remember:** Components are conjugacy classes, and the loops in each component are centralizers.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** For a discrete group G, the conjugation groupoid has the elements of G as objects and an arrow a: g → h whenever aga⁻¹ = h. Its components are the conjugacy classes, and the automorphisms of g form the centralizer of g (our own). The Hochschild chains of k\[G\] can be modelled by chains on strings of composable arrows, with coefficients in k.

**Problem.** For a commutative ring k, Hochschild homology of k\[G\] splits as a direct sum indexed by conjugacy classes. The summand of g is the group homology over k of its centralizer, the subgroup commuting with g.

**How the definition helps.** Homology of a groupoid splits over its components, and each component is equivalent to the one-object groupoid of a centralizer (our own). So the chains split by conjugacy class, with summand the group homology of the centralizer (our own). The comparison with ordinary Hochschild chains sends a cyclic list to its product and successive conjugating elements (our own).

**nLab:** [free loop space of classifying space](https://ncatlab.org/nlab/show/free+loop+space+of+classifying+space). It says: “the homotopy quotient of the conjugation ∞-action”

**Sources:**

- [Dan Burghelea, The cyclic homology of the group rings](https://doi.org/10.1007/BF02567420)

### Defining Hochschild homology as Tor makes it Morita invariant

**Remember:** Tor is built from bimodules, so Morita equivalent algebras agree.

*True by definition. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 19D55, 16D90. arXiv math.KT, math.RA. Level 3: graduate.

**Definition.** Following Cartan and Eilenberg, the Hochschild homology HHₙ(A, M) of an algebra A over a field k is Torₙ of A and M over the enveloping algebra Aᵉ = A ⊗ₖ Aᵒᵖ, viewing bimodules as Aᵉ-modules.

**Problem.** If k-algebras A and B have k-linearly equivalent module categories, then HHₙ(A) ≅ HHₙ(B) for every n ≥ 0. In particular, HHₙ(Mₘ(A)) ≅ HHₙ(A) for every positive matrix size m.

**How the definition helps.** Morita equivalences come from tensoring with bimodules, which carry A to B and Tor over Aᵉ to Tor over Bᵉ (our own). With the explicit chain complex, one must instead build a trace map from Mₘ(A) to A and a chain homotopy by hand. The work went into the theorem that the explicit complex computes Tor.

**Wikipedia:** [Hochschild homology](https://en.wikipedia.org/wiki/Hochschild_homology). It says: “Bimodules over A are essentially the same as modules over the enveloping algebra of A, so in particular A and M can be considered as Aᵉ-modules.”

**Sources:**

- [J.-L. Loday, Cyclic Homology, 2nd ed., Grundlehren der mathematischen Wissenschaften 301, Springer (1998)](https://doi.org/10.1007/978-3-662-11389-9)

### Hochschild extensions of an algebra are classified by HH²

**Remember:** A linear section's failure to multiply is a Hochschild 2-cocycle.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)). arXiv math.RA, math.KT. Level 3: graduate.

**Definition.** A Hochschild extension of a k-algebra R by an R-bimodule N is an algebra surjection E → R with a k-linear splitting, whose kernel is N with zero products and the given bimodule actions. Equivalent extensions are isomorphic by a map that is the identity on R and N.

**Problem.** Equivalence classes of Hochschild extensions of R by N are in bijection with HH²(R, N).

**How the definition helps.** The k-linear splitting writes E as R ⊕ N with product (a, m)(b, n) = (ab, an + mb + f(a, b)) (our own). Associativity of E is exactly the 2-cocycle condition on f, and changing the splitting changes f by a coboundary (our own).

**nLab:** [Hochschild cohomology](https://ncatlab.org/nlab/show/Hochschild+cohomology). It says: “For R a k-algebra and N an R-bimodule, equivalence classes of Hochschild extensions of R by N are in bijection with degree 2 Hochschild cohomology HH²(R,N).”

**Sources:**

- [G. Hochschild, On the cohomology groups of an associative algebra, Annals of Mathematics 46 (1945)](https://doi.org/10.2307/1969145)

### Hochschild homology as Tor computes polynomial rings with Koszul complexes

**Remember:** Choose the Koszul resolution, and the differentials vanish.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 13D03. arXiv math.KT, math.AC. Level 3: graduate.

**Definition.** For a k-algebra A free over its commutative base ring k, Hochschild homology is HHₙ(A) = Torₙᴬᵉ(A,A), where Aᵉ = A ⊗ₖ Aᵒᵖ. One can compute Tor using any projective bimodule resolution of A.

**Problem.** For a commutative ring k and A = k\[x₁,…,xₙ\], Hochschild homology HH\_∗(A) is the exterior algebra over A on dx₁,…,dxₙ.

**How the definition helps.** Because Tor may be computed with any projective resolution, use the Koszul complex: Aᵉ is a polynomial ring in 2n variables xᵢ, yᵢ, and A is Aᵉ modulo the regular sequence xᵢ − yᵢ (our own). After tensoring with A, each xᵢ − yᵢ acts as zero, so all differentials vanish and Tor is the exterior algebra (our own). The theorem that Tor does not depend on the resolution covers the bar complex when A is free over k.

**Wikipedia:** [Hochschild homology](https://en.wikipedia.org/wiki/Hochschild_homology). It says: “Bimodules over A are essentially the same as modules over the enveloping algebra of A, so in particular A and M can be considered as Aᵉ-modules.”

**Sources:** none listed. No primary source with a working link was found.

### Hochschild homology as Tor gives smooth algebras their differential forms

**Remember:** Locally, the diagonal of a smooth variety is cut out by a regular sequence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 13D03, 19D55. arXiv math.KT, math.AC. Level 3: graduate.

**Definition.** For a commutative k-algebra A, let I be the kernel of multiplication A ⊗ₖ A → A, so that HH\_∗(A) is Tor over A ⊗ₖ A of A with itself. The Kähler differentials are Ω¹ = I/I², which equals HH₁(A), and Ωⁿ is the nth exterior power of Ω¹ over A.

**Problem.** Let A be a smooth commutative algebra of finite type over a field k. Then the antisymmetrization map gives an isomorphism Ωⁿ ≅ HHₙ(A) for every n ≥ 0.

**How the definition helps.** Tor can be computed locally and with any resolution, and for smooth A the ideal I is locally generated by a regular sequence (our own). The Koszul resolution of that sequence gives Tor as the exterior algebra on I/I² = Ω¹ (our own). The work goes into the regularity of I, which the explicit Hochschild complex hides.

**nLab:** [Hochschild-Kostant-Rosenberg theorem](https://ncatlab.org/nlab/show/Hochschild-Kostant-Rosenberg+theorem). It says: “For a k-algebra R, its module of Kähler differentials coincides with its first Hochschild homology”

**Wikipedia:** [Hochschild homology](https://en.wikipedia.org/wiki/Hochschild_homology). It says: “states there is an isomorphism Ωⁿ<sub>A</sub>/k ≅ HHₙ(A/k) for every n ≥ 0. This isomorphism can be described explicitly using the anti-symmetrization map.”

**Sources:**

- [G. Hochschild, B. Kostant, A. Rosenberg, Differential forms on regular affine algebras, Trans. AMS 102 (1962) 383–408](https://doi.org/10.1090/S0002-9947-1962-0142598-8)

### Separability as projectivity over Aᵉ makes Hochschild cohomology vanish

**Remember:** Separable means A is projective as a bimodule over itself.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16H05. arXiv math.RA. Level 3: graduate.

**Definition.** A k-algebra A over a field k is separable when A is projective as a module over Aᵉ = A ⊗ₖ Aᵒᵖ. Modules over Aᵉ are the same as A-bimodules, that is, modules with commuting left and right actions of A.

**Problem.** A separable algebra A has Hochschild cohomology HHⁿ(A, M) = 0 for every A-bimodule M and every n ≥ 1. In particular, every derivation of A into a bimodule M is inner, that is, of the form a ↦ am − ma.

**How the definition helps.** Hochschild cohomology is Ext over Aᵉ from A to M. Projectivity of A makes every positive Ext group vanish (our own argument). In degree one this group is derivations modulo inner derivations, so every derivation is inner.

**nLab:** [separable algebra](https://ncatlab.org/nlab/show/separable+algebra). It says: “Third, a k-algebra A is separable if and only if it is projective when considered as a left module of Aᵉ in the usual way.”

**Sources:** none listed. No primary source with a working link was found.

### Smoothness in the HKR theorem excludes the dual numbers

**Remember:** Smooth means finitely presented, with maps lifting across every square-zero ideal.

*Rules out counterexamples.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 13D03. arXiv math.KT, math.AC. Level 3: graduate.

**Definition.** A commutative k-algebra A is smooth when it is finitely presented and every k-algebra map A → C/J lifts to C, for every commutative k-algebra C and square-zero ideal J.

**Problem.** For a smooth commutative algebra A over a field, HHₙ(A) is isomorphic to the module Ωⁿ = ΛⁿΩ¹ of n-forms over A.

**How the definition helps.** Smoothness makes the kernel of A ⊗ A → A locally generated by a regular sequence, so local Koszul resolutions give the n-forms (our own). The dual numbers k\[x\]/(x²) in characteristic 0 are not smooth, and there Ω² = 0 (our own). A periodic resolution over Aᵉ gives HHₙ(A) ≅ k for every n ≥ 1, so HH₂(A) ≠ Ω² (our own).

**nLab:** [Hochschild-Kostant-Rosenberg theorem](https://ncatlab.org/nlab/show/Hochschild-Kostant-Rosenberg+theorem). It says: “the A-module of Kähler differentials Ω¹ₖ(A) is a projective object”

**Sources:**

- [G. Hochschild, B. Kostant and A. Rosenberg, Differential forms on regular affine algebras, Transactions of the AMS 102 (1962)](https://doi.org/10.1090/s0002-9947-1962-0142598-8)

### The Gerstenhaber bracket turns associativity into one equation

**Remember:** The product bracketed with itself is twice its associator.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16S80. arXiv math.RA, math.QA. Level 3: graduate.

**Definition.** The Gerstenhaber bracket of two bilinear maps f, g on A is \[f,g\] = f ∘ g + g ∘ f. Here (f ∘ g)(a,b,c) = f(g(a,b),c) − f(a,g(b,c)), so μ ∘ μ is exactly the associator of μ (our own).

**Problem.** Over a field of characteristic not 2, a bilinear map μ on A is associative if and only if \[μ, μ\] = 0. If μ is associative, then μ + c is associative if and only if c satisfies the Maurer–Cartan equation dc + ½\[c, c\] = 0.

**How the definition helps.** Since \[μ, μ\] = 2 μ ∘ μ is twice the associator, it vanishes exactly when μ is associative, once 2 is invertible (our own). Expanding \[μ + c, μ + c\] = 0 with \[μ, μ\] = 0 gives 2\[μ, c\] + \[c, c\] = 0, the Maurer–Cartan equation with d = \[μ, −\] (our own).

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Note that μ is associative iff μ ∘ μ = 0 iff \[μ, μ\] = 0.”

**Sources:**

- [M. Gerstenhaber, The cohomology structure of an associative ring, Annals of Mathematics 78 (1963)](https://doi.org/10.2307/1970343)

### Derived categories of dg modules depend only on quasi-isomorphism class

**Remember:** Make cohomology isomorphisms invertible, and quasi-isomorphic algebras look alike.

*Makes the theorem clean to state or prove.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 18G80. arXiv math.KT, math.RA. Level 3: graduate.

**Definition.** The derived category D(A) of a dg algebra A is made from dg A-modules by making every quasi-isomorphism invertible. A quasi-isomorphism is a map that is an isomorphism on cohomology.

**Problem.** Let A → B be a quasi-isomorphism of dg algebras over a ring R. Then the derived tensor product with B is an equivalence from D(A) to D(B), with inverse the restriction of scalars.

**How the definition helps.** In D(A), the quasi-isomorphism A → B is invertible, so the unit of the tensor–restriction adjunction is invertible at the generator A (our own argument). Both functors preserve sums and triangles, so the unit is invertible everywhere and the tensor functor is fully faithful. Its image contains the generator B and is closed under sums and triangles, so it is an equivalence.

**Paper or page:** [Lemma 22.37.1](https://stacks.math.columbia.edu/tag/09S6). It says: “gives an R-linear equivalence of triangulated categories with quasi-inverse the restriction functor N ↦ N<sub>A</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudo-inverses make commutative von Neumann regular rings a variety

**Remember:** Ask the inverse to be regular too, and it becomes unique.

*Makes the theorem clean to state or prove.* MSC 16E50 (von Neumann regular rings and generalizations (associative algebraic aspects)), 08B05. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** A pseudo-inverse of a is an element x that is a regular inverse of a and has a as its own regular inverse: axa = a and xax = x. A ring is von Neumann regular when every a has some x with axa = a.

**Problem.** Commutative von Neumann regular rings are exactly the commutative rings with an operation a ↦ ā such that aāa = a and āaā = ā. So they form a variety of algebras, and every ring map between them preserves ā.

**How the definition helps.** In a commutative ring, pseudo-inverses exist and are unique, so ā is an operation defined by equations (our own calculation). If axa = a, then xax is a pseudo-inverse; for two pseudo-inverses b and c, ab = ac, so b = ab² = abc = ac² = c. Uniqueness makes every ring map preserve ā.

**nLab:** [von Neumann regular ring](https://ncatlab.org/nlab/show/von+Neumann+regular+ring). It says: “commutative vN rings form a variety of algebras: they are the same as commutative rings equipped with a pseudo-inversion operation a ↦ ā satisfying a ā a = a and ā a ā = ā.”

**Sources:**

- [John von Neumann, On regular rings, Proc. Natl. Acad. Sci. USA 22 (1936) 707–713](https://doi.org/10.1073/pnas.22.12.707)

### Weak dimension zero sees von Neumann regular rings that global dimension misses

**Remember:** Regular rings make every module flat, not every module projective.

*Makes the theorem clean to state or prove.* MSC 16E50 (von Neumann regular rings and generalizations (associative algebraic aspects)), 16E10. arXiv math.RA. Level 3: graduate.

**Definition.** A ring R is von Neumann regular when each a ∈ R has some x with axa = a, so that each principal left ideal Ra = R·xa is a direct summand of R. Weak global dimension 0 means every left module is flat.

**Problem.** A ring is von Neumann regular exactly when its weak global dimension is 0, that is, when every module is flat. An infinite product of fields is such a ring, but its global dimension is not 0.

**How the definition helps.** Flatness of R/Ra gives aR ∩ Ra = aRa, so a = ara for some r, and regularity conversely makes finitely generated left ideals direct summands, which gives flatness (our own explanation). An infinite product of fields is regular coordinatewise. It has an infinite descending chain of ideals, so it is not semisimple and its global dimension is not 0.

**Wikipedia:** [Weak dimension](https://en.wikipedia.org/wiki/Weak_dimension). It says: “A Von Neumann regular ring has weak global dimension 0. A product of infinitely many fields has weak global dimension 0 but its global dimension is nonzero.”

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.105.5](https://stacks.math.columbia.edu/tag/092F). It says: “A has weak dimension ≤ 0, A is absolutely flat, A is reduced and every prime is maximal, and every local ring of A is a field.”

**Sources:** none listed. No primary source with a working link was found.

### Global and dominant dimension two single out the Auslander algebras

**Remember:** Global dimension at most two, dominant dimension at least two.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings), 16E10, 16G60. arXiv math.RT. Level 3: graduate.

**Definition.** An Artin algebra Γ is an Auslander algebra when its global dimension is at most 2 and its dominant dimension is at least 2. The second bound means the first two terms I, J of a minimal injective resolution 0 → Γ → I → J of Γ are projective.

**Problem.** Let Λ be representation-finite, with finitely many indecomposable finitely generated modules up to isomorphism, and let M be the sum of one of each. Then Λ ↦ End(M) is a bijection from Morita classes of such Artin algebras to Morita classes of Auslander algebras.

**How the definition helps.** The two bounds are exactly what End(M) satisfies when M contains every indecomposable. Every kernel of a map between sums of copies of M is again such a sum, which gives global dimension at most 2 (our own explanation). The Morita–Tachikawa theorem uses the projective-injective modules to recover Λ.

**Wikipedia:** [Auslander algebra](https://en.wikipedia.org/wiki/Auslander_algebra). It says: “Γ is called an Auslander algebra if gl dim Γ ≤ 2 and if 0 → Γ → I → J → K → 0 is a minimal injective resolution of Γ then I and J are projective”

**Paper or page:** [Nakayama-type phenomena in higher Auslander--Reiten theory](https://arxiv.org/abs/2402.15889v1). It says: “There is a one-to-one correspondence between Morita equivalence classes of representation-finite algebras and Morita equivalence classes of Auslander algebras.”

**Sources:**

- [M. Auslander, Representation theory of Artin algebras II, Communications in Algebra (1974)](https://doi.org/10.1080/00927877409412807)

### Counting indecomposable quiver representations makes Gabriel's ADE theorem statable

**Remember:** Finitely many indecomposable building blocks, up to isomorphism, means finite type.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G20 (Representations of quivers and partially ordered sets), 16G60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A quiver has finite representation type when it has only finitely many indecomposable finite-dimensional representations up to isomorphism. A representation puts a vector space at each vertex and a linear map on each arrow, and it is indecomposable if it is nonzero and not a direct sum of two nonzero ones.

**Problem.** Over an algebraically closed field, a finite connected quiver has finite representation type exactly when its underlying graph is Aₙ, Dₙ, E₆, E₇ or E₈. Its indecomposables then correspond to positive roots, with the vertex dimensions as coefficients.

**How the definition helps.** Finite type turns the classification into a finite list, since by Krull–Schmidt every representation is a sum of indecomposables (our own explanation). Gabriel's theorem identifies the connected quivers with such a list and matches their dimension vectors with positive roots.

**Wikipedia:** [Gabriel's theorem](https://en.wikipedia.org/wiki/Gabriel%27s_theorem), [Quiver (mathematics)](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29). It says: “A quiver is of finite type if it has only finitely many isomorphism classes of indecomposable representations.”

**Sources:**

- [Gabriel, P. (1972). Unzerlegbare Darstellungen I. manuscripta mathematica 6.](https://doi.org/10.1007/BF01298413)
- [Bernstein, I. N., Gel'fand, I. M., Ponomarev, V. A. (1973). Coxeter functors and Gabriel's theorem. Russian Mathematical Surveys 28, 17–32.](https://doi.org/10.1070/RM1973v028n02ABEH001526)

### Global dimension one makes the quiver Euler form depend only on dimensions

**Remember:** With no Ext², Hom minus Ext¹ is a bilinear form in dimension vectors.

*Makes the theorem clean to state or prove.* MSC 16G20 (Representations of quivers and partially ordered sets), 16E10. arXiv math.RT. Level 3: graduate.

**Definition.** A ring is hereditary when every submodule of a projective module is projective, so every module has a projective resolution of length at most 1 and Ext² vanishes. The path algebra kQ of a finite acyclic quiver is hereditary, and its modules are the representations of Q.

**Problem.** Let M and N be finite-dimensional representations over k of the finite acyclic quiver Q, with dimension vectors m and n. Then dim Hom(M,N) − dim Ext¹(M,N) = ∑ᵢ mᵢnᵢ − ∑ᵢ→ⱼ mᵢnⱼ. Count each vertex once in the first sum and each arrow once in the second.

**How the definition helps.** Since Ext² and higher vanish, Hom minus Ext¹ is the whole Euler characteristic, which a length-1 resolution computes. Apply Hom(−, N) to the standard resolution of M. Its two terms are the linear maps Mᵢ → Nᵢ over vertices and Mᵢ → Nⱼ over arrows (our own summary).

**Wikipedia:** [Hereditary ring](https://en.wikipedia.org/wiki/Hereditary_ring). It says: “An important example of a (left) hereditary ring is the path algebra of a quiver. This is a consequence of the existence of the standard resolution (which is of length 1) for modules over a path algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Path algebras turn quiver representations into modules over one algebra

**Remember:** Vertex idempotents split the module; arrows map between the pieces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G20 (Representations of quivers and partially ordered sets), 16E60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** Over a field K, the path algebra KΓ has the directed paths of Γ as a basis, with one length-zero path eᵢ at each vertex. Paths multiply by joining end to start when they meet, and the product is zero otherwise. With finitely many vertices, the eᵢ are idempotents that sum to 1.

**Problem.** For a quiver Γ with finitely many vertices, representations of Γ over K are the same as modules over KΓ.

**How the definition helps.** The idempotents eᵢ split a module into vertex spaces eᵢM, and each arrow maps its source space to its target space. Conversely, composing arrow maps defines how each path acts on the sum of the vertex spaces (our own argument).

**Wikipedia:** [Quiver (mathematics)](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29). It says: “This algebra has a unit element if and only if the quiver has only finitely many vertices. In this case, the modules over K Γ are naturally identified with the representations of Γ.”

**Sources:**

- [Gabriel, P. (1972). Unzerlegbare Darstellungen I. manuscripta mathematica 6.](https://doi.org/10.1007/BF01298413)

### Dividing out projective maps makes Auslander–Reiten duality an isomorphism

**Remember:** Ext¹ is dual to Hom only after removing projective and injective maps.

*Rules out counterexamples.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers), 18G65. arXiv math.RT. Level 3: graduate.

**Definition.** Stable Hom is Hom modulo the maps that factor through a projective module, and costable Hom is Hom modulo the maps that factor through an injective module. Over an Artin algebra, finitely generated over a commutative Artinian ring, D is the duality over the base ring and τ is the Auslander–Reiten translate.

**Problem.** For finitely generated modules M and N over an Artin algebra, Ext¹(M, N) ≅ D stable Hom(τ⁻¹N, M) ≅ D costable Hom(N, τM). The formula fails with ordinary Hom.

**How the definition helps.** Maps through projectives or injectives contribute zero extensions, so they must be removed before Ext¹ can be dual to a Hom space. Over k\[x\]/(x²), N = k\[x\]/(x²) is injective and M = k has τk = k, so Ext¹(k, N) = 0 but Hom(N, k) = k (our own example). Auslander and Reiten build the duality through the transpose.

**Paper or page:** [A geometric model for the non-τ-rigid modules of type D̃ₙ](https://arxiv.org/abs/2507.02218). It says: “Then there are isomorphisms Ext¹(M,N) ≅ D H̲o̲m̲(τ⁻¹N, M) ≅ D H̅o̅m̅(N, τM).”

**Sources:**

- [Maurice Auslander and Idun Reiten, Representation theory of Artin algebras III, Almost split sequences, Communications in Algebra 3 (1975) 239–294](https://doi.org/10.1080/00927877508822046)

### Minimal almost split maps are unique

**Remember:** Factorization finds the map, and minimality prevents spare summands.

*Rules out counterexamples.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers). arXiv math.RT. Level 3: graduate.

**Definition.** A map f: E → M to an indecomposable module is right almost split when f has no right inverse but every map to M without a right inverse factors through f. It is right minimal when every endomorphism g of E with fg = f is invertible.

**Problem.** Two minimal right almost split maps to the same finite-dimensional module differ only by an isomorphism of sources.

**How the definition helps.** The two maps factor through each other, and minimality makes both composites of the comparison maps invertible, so they are isomorphisms (our own proof). Without minimality, a spare source summand mapped to zero keeps the map almost split, and projection away from it is a noninvertible g with fg = f (our own example).

**Wikipedia:** [Auslander–Reiten theory](https://en.wikipedia.org/wiki/Auslander%E2%80%93Reiten_theory). It says: “there is an almost-split sequence as above, which is unique up to isomorphism.”

**Paper or page:** [Largest exact structures and almost split sequences on hearts of twin cotorsion pairs](https://arxiv.org/abs/2306.06616v3). It says: “x is minimal left almost split (resp. y is minimal right almost split).”

**Sources:**

- [Maurice Auslander, A functorial approach to representation theory](https://doi.org/10.1007/bfb0094058)

### Azumaya algebras survive base change

**Remember:** Projective, positive rank, multiplication isomorphism: all survive tensoring.

*True by definition.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)). arXiv math.RA. Level 3: graduate.

**Definition.** An algebra A over a commutative ring R is Azumaya when it is finitely generated projective of positive rank at every prime, and multiplication a ⊗ b ↦ (x ↦ axb) is an isomorphism A ⊗ᵣ Aᵒᵖ ≅ Endᵣ(A).

**Problem.** Any change of commutative base ring takes Azumaya algebras to Azumaya algebras.

**How the definition helps.** Each condition survives base change, so the result follows from the definition (our own argument). For finitely generated projective modules, End commutes with scalar extension, so the multiplication isomorphism tensors to the one over the new ring. The rank at a new prime equals the rank at the old prime below it.

**nLab:** [Azumaya algebra](https://ncatlab.org/nlab/show/Azumaya+algebra). It says: “As a left R-module, A finitely generated, faithful and projective”

**Sources:** none listed. No primary source with a working link was found.

### Bimodule projectivity kills higher cohomology

**Remember:** Projective over itself as a bimodule, so no higher extensions.

*True by definition.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)), 16E40. arXiv math.RA. Level 3: graduate.

**Definition.** An algebra A over a field is separable when it is projective as a bimodule over itself, that is, when every surjective bimodule map onto A has a bimodule section.

**Problem.** A separable algebra A has HHⁿ(A, M) = 0 for every n &gt; 0 and every A-bimodule M.

**How the definition helps.** Hochschild cohomology HHⁿ(A, M) is Extⁿ from A to M over bimodules, and Ext out of a projective vanishes in positive degree (our own argument).

**nLab:** [separable algebra](https://ncatlab.org/nlab/show/separable+algebra). It says: “Third, a k-algebra A is separable if and only if it is projective when considered as a left module of Aᵉ in the usual way.”

**Sources:**

- [Gerhard Hochschild, On the Cohomology Groups of an Associative Algebra](https://doi.org/10.2307/1969145)

### Separability preserves semisimplicity

**Remember:** Check the centers before trusting semisimplicity over a larger field.

*Rules out counterexamples.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)). arXiv math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra over k is separable when it is a product of matrix algebras over division algebras whose centers are separable extensions of k, meaning every minimal polynomial there has distinct roots.

**Problem.** A finite-dimensional separable algebra stays semisimple after every extension of the base field.

**How the definition helps.** Over a larger field, each separable center becomes a product of fields and each central simple factor stays central simple, so the result is semisimple. Without separability this fails: for k = 𝔽ₚ(t) and L = k(u) with uᵖ = t, u ⊗ 1 − 1 ⊗ u is nonzero in L ⊗ₖ L with pth power zero (our own counterexample).

**nLab:** [separable algebra](https://ncatlab.org/nlab/show/separable+algebra). It says: “separable algebras are the same as finite products of matrix algebras over finite-dimensional division algebras whose centers are finite-dimensional separable field extensions of the field k.”

**Paper or page:** [Stacks Project, Brauer, Lemma 11.4.9.](https://stacks.math.columbia.edu/tag/074H). It says: “Then A′ = A ⊗ₖ k′ is a finite central simple algebra over k′.”

**Sources:** none listed. No primary source with a working link was found.

### Brauer equivalence gives central simple algebras inverses

**Remember:** Forget the matrix size, and every algebra has an inverse.

*Makes the theorem clean to state or prove.* MSC 16K50 (Brauer groups (algebraic aspects)), 11R52. arXiv math.RA, math.NT. Level 3: graduate.

**Definition.** Two central simple algebras over K, finite-dimensional with center K and no proper nonzero two-sided ideals, are Brauer equivalent when they are matrix algebras over the same division algebra. So the class forgets the matrix size, and classes multiply by tensor product over K.

**Problem.** The Brauer classes form an abelian group. For a number field, a class is determined by its local invariants, and these sum to zero.

**How the definition helps.** Forgetting matrix size makes A ⊗ Aᵒᵖ ≅ End<sub>K</sub>(A), a matrix algebra over K, equal to the identity class, so Aᵒᵖ inverts A (our own argument). The swap A ⊗ B ≅ B ⊗ A makes the group abelian (our own). For a number field, the Albert–Brauer–Hasse–Noether exact sequence gives the local determination and the zero sum of invariants.

**Wikipedia:** [Brauer group](https://en.wikipedia.org/wiki/Brauer_group). It says: “the Brauer classes are all invertible: the inverse of an algebra A is given by its opposite algebra”

**Sources:**

- [Richard Brauer, Helmut Hasse and Emmy Noether, Beweis eines Hauptsatzes in der Theorie der Algebren, Journal für die reine und angewandte Mathematik 167 (1932)](https://doi.org/10.1515/crll.1932.167.399)

### Centrality preserves simplicity

**Remember:** Fix the center before extending the field.

*Rules out counterexamples.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra over a field k is central simple when its center is exactly k and it has no proper nonzero two-sided ideals.

**Problem.** A finite central simple algebra stays central simple after any field extension.

**How the definition helps.** Centrality is what makes this true: ℂ is simple over ℝ, but ℂ ⊗ℝ ℂ ≅ ℂ × ℂ is not (our own example). Over an algebraic closure, a central simple algebra becomes a full matrix algebra. A proper ideal or a nonscalar central element after an extension would survive there, which is impossible (our own argument).

**Paper or page:** [Stacks Project, Brauer, Lemma 11.4.9.](https://stacks.math.columbia.edu/tag/074H), [Stacks Project, Brauer, Lemma 11.8.6.](https://stacks.math.columbia.edu/tag/0753). It says: “Then A′ = A ⊗ₖ k′ is a finite central simple algebra over k′.”

**Sources:** none listed. No primary source with a working link was found.

### Division representatives minimize splitting degrees

**Remember:** Remove the matrix factor to find the smallest splitting degree.

*Makes the theorem clean to state or prove.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** The index of a central simple k-algebra A ≅ Mₙ(D), with D a division algebra, is the number d with d² = dimₖ D. It is the size of A with the matrix factor removed.

**Problem.** A splitting field is an extension over which the algebra becomes a full matrix algebra. The index is the least degree of a finite splitting field and divides every such degree.

**How the definition helps.** A and D have the same splitting fields, and a maximal subfield of D has degree d and splits it. For any finite splitting field L, D ⊗ L ≅ M<sub>d</sub>(L) acts on Lᵈ, a D-module of k-dimension d\[L:k\]. So d² divides d\[L:k\], and d divides \[L:k\] (our own argument).

**Paper or page:** [Stacks Project, Brauer, Lemma 11.5.1.](https://stacks.math.columbia.edu/tag/074K), [Stacks Project, Brauer, Lemma 11.8.3.](https://stacks.math.columbia.edu/tag/0750), [Stacks Project, Brauer, Lemma 11.8.4.](https://stacks.math.columbia.edu/tag/0751), [Stacks Project, Brauer, Proposition 11.8.5.](https://stacks.math.columbia.edu/tag/0752). It says: “For any finite splitting field k′ for K the degree \[k′ : k\] is divisible by d.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced norms multiply

**Remember:** Split into matrices, then take the determinant.

*True by definition.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** For a central simple algebra A over k, the reduced norm of a is the determinant of the matrix of a after a field extension that makes A a full matrix algebra.

**Problem.** The reduced norm of a product is the product of the reduced norms.

**How the definition helps.** Over a splitting field the reduced norm is a determinant, so it multiplies by det(xy) = det x · det y (our own argument). The work is showing that the value lies in k and does not depend on the splitting field or the matrix representation.

**Paper or page:** [Constructive basic theory of central simple algebras](https://arxiv.org/abs/2102.12775v2). It says: “The coefficient sᵣ, denoted by Nrd(a), is called the reduced norm of a (over F).”

**Sources:**

- [Constructive basic theory of central simple algebras, Proposition 4.9](https://arxiv.org/abs/2102.12775v2)

### Noncommutative local rings use maximal left ideals, so non-units form an ideal

**Remember:** Local means one maximal left ideal, not one maximal two-sided ideal.

*Rules out counterexamples.* MSC 16L30 (Noncommutative local and semilocal rings, perfect rings), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** A unital ring is local when it has exactly one maximal left ideal, not merely one maximal two-sided ideal.

**Problem.** In a local ring the non-units form a two-sided ideal. This ideal is the Jacobson radical, the intersection of all maximal left ideals. The quotient by it is a division ring.

**How the definition helps.** The unique maximal left ideal is the set of nonunits and equals the unique maximal right ideal. So it is the Jacobson radical, and the quotient is a division ring because every element outside it is a unit (our own deduction). The two-sided version fails: 2×2 matrices over a field are simple, yet the two diagonal projections are nonunits that sum to 1 (our own example).

**Wikipedia:** [Local ring](https://en.wikipedia.org/wiki/Local_ring). It says: “However, in the non-commutative case, having a unique maximal two-sided ideal is not equivalent to being local.”

**Sources:** none listed. No primary source with a working link was found.

### Semiperfect rings give projective covers

**Remember:** Lift idempotents to lift the projective pieces.

*Rules out counterexamples.* MSC 16L30 (Noncommutative local and semilocal rings, perfect rings), 16D40. arXiv math.RA. Level 3: graduate.

**Definition.** A unital ring R with Jacobson radical J is semiperfect when R/J is semisimple Artinian and every idempotent of R/J lifts to an idempotent of R.

**Problem.** Every finitely generated left module over a semiperfect ring has a projective cover. This is a surjection from a direct summand of a free module such that no proper submodule still maps onto the target.

**How the definition helps.** Lifted idempotents split R into projective pieces that map onto the simple modules, and these give projective covers (our own explanation). Without lifting it fails: ℤ localized at the integers coprime to 6 has R/J = 𝔽₂ × 𝔽₃, but (1,0) cannot lift in a domain. The simple module 𝔽₂ then has no projective cover (our own example).

**Wikipedia:** [Perfect ring](https://en.wikipedia.org/wiki/Perfect_ring). It says: “A semiperfect ring is a ring over which every finitely generated left module has a projective cover.”

**Sources:**

- [Hyman Bass, Finitistic dimension and a homological generalization of semi-primary rings (1960).](https://doi.org/10.1090/s0002-9947-1960-0157984-8)

### Self-injectivity reverses syzygy

**Remember:** Kernels and cokernels reverse each other once projectives disappear.

*Rules out counterexamples.* MSC 16L60 (Quasi-Frobenius rings). arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra is self-injective when its regular module is injective, so its finite-dimensional projective and injective modules coincide. Its stable module category identifies maps whose difference factors through a projective.

**Problem.** For a finite-dimensional self-injective algebra, taking the kernel of a projective surjection defines an equivalence of the stable module category with itself. This kernel is called a syzygy.

**How the definition helps.** Since projectives are injective, each module embeds in a projective, and the cokernel of that embedding inverts syzygy in the stable category of this Frobenius category (our own explanation). Without self-injectivity it fails: for representations of 1 → 2, the nonprojective simple at 1 has a projective syzygy, so syzygy sends it to zero (our own example).

**nLab:** [Frobenius category](https://ncatlab.org/nlab/show/Frobenius+category). It says: “The stable category of a Frobenius category is canonically a triangulated category.”

**Sources:**

- [Dieter Happel, Triangulated Categories in the Representation Theory of Finite Dimensional Algebras](https://doi.org/10.1017/cbo9780511629228)

### Splitting multiplication by the Frobenius coproduct makes special Frobenius algebras separable

**Remember:** Rescale the coproduct to split multiplication.

*True by definition.* MSC 16L60 (Quasi-Frobenius rings), 16D20. arXiv math.RA, math.QA. Level 3: graduate.

**Definition.** Let A be a Frobenius algebra over a field, with multiplication m and bimodule coproduct Δ. It is special if m ∘ Δ = λ id for some nonzero scalar λ. It is separable if m has an A-bimodule section.

**Problem.** Over a field, every special Frobenius algebra is separable.

**How the definition helps.** Multiplying Δ by λ⁻¹ gives a bimodule map whose composite with m is the identity (our own). This is the required section.

**nLab:** [Frobenius algebra](https://ncatlab.org/nlab/show/Frobenius+algebra). It says: “the main point is to require that the product is the left inverse to the coproduct”

**Sources:** none listed. No primary source with a working link was found.

### Radical quotients preserve simple modules

**Remember:** Remove only elements that all simple modules already ignore.

*True by definition.* MSC 16N20 (Jacobson radical, quasimultiplication). arXiv math.RA. Level 3: graduate.

**Definition.** The Jacobson radical of a unital ring is the set of elements that act as zero on every simple left module, a nonzero module with no proper nonzero submodule.

**Problem.** A ring and its quotient by the Jacobson radical have the same simple modules under restriction. In particular, the quotient has zero Jacobson radical.

**How the definition helps.** Each simple module is killed by the radical, so its action factors through the quotient, and each simple quotient module restricts to a simple module (our own explanation). So both rings have the same simple modules, and only zero acts as zero on all of them in the quotient.

**nLab:** [Jacobson radical](https://ncatlab.org/nlab/show/Jacobson+radical). It says: “Given any ring R, the quotient R/J(R) is semiprimitive.”

**Sources:** none listed. No primary source with a working link was found.

### Testing aRb instead of ab makes simple rings and matrix rings prime

**Remember:** Prime rings let the whole ring sit between a and b.

*Makes the theorem clean to state or prove.* MSC 16N60 (Prime and semiprime associative rings), 16D60. arXiv math.RA. Level 3: graduate.

**Definition.** A nonzero unital ring R is prime when, for any nonzero a and b, some r ∈ R gives arb ≠ 0.

**Problem.** Every simple ring, every primitive ring and every matrix ring over an integral domain is prime. A commutative ring is prime exactly when it is an integral domain.

**How the definition helps.** A primitive ring has a faithful simple module; pick v with bv ≠ 0, so Rbv is the whole module and a nonzero a cannot kill it (our own). Simple unital rings are primitive, and over a domain a matrix unit links nonzero entries of two matrices (our own). In a commutative ring, aRb = 0 exactly when ab = 0.

**Wikipedia:** [Prime ring](https://en.wikipedia.org/wiki/Prime_ring). It says: “This definition can be regarded as a simultaneous generalization of both integral domains and simple rings.”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, every Artinian ring is automatically Noetherian

**Remember:** With a 1, descending chains stopping forces ascending ones to stop.

*Rules out counterexamples.* MSC 16P20 (Artinian rings and modules (associative rings and algebras)), 16P40. arXiv math.RA. Level 3: graduate.

**Definition.** A ring with identity is right Artinian when every descending chain of right ideals stabilizes, and right Noetherian when every ascending chain does.

**Problem.** Every right Artinian ring with identity is right Noetherian. A unital right module over such a ring is Artinian exactly when it is Noetherian, equivalently when it has finite length.

**How the definition helps.** With an identity, a right Artinian ring has nilpotent radical J and semisimple R/J, so each module M has finitely many semisimple layers MJⁱ/MJⁱ⁺¹ (our own). Either chain condition makes each layer of finite length, so M has finite length and satisfies both (our own). Without an identity this fails: the Prüfer p-group with zero multiplication is Artinian but not Noetherian (our own).

**Wikipedia:** [Hopkins–Levitzki theorem](https://en.wikipedia.org/wiki/Hopkins%E2%80%93Levitzki_theorem), [Artinian ring](https://en.wikipedia.org/wiki/Artinian_ring), [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “Since it is known that right Artinian rings are semiprimary, a direct corollary of the theorem is: a right Artinian ring is also right Noetherian.”

**Sources:**

- [C. Hopkins, Rings with minimal condition for left ideals, Annals of Mathematics 40 (1939) 712–730](https://doi.org/10.2307/1968951)
- [J. Levitzki, On rings which satisfy the minimum condition for the right-hand ideals, Compositio Mathematica 7 (1940) 214–222](https://www.numdam.org/item/CM_1940__7__214_0/)

### Semiprime Goldie rings have semisimple fractions

**Remember:** No square-zero ideals and finite dimension give semisimple fractions.

*Rules out counterexamples.* MSC 16P60 (Chain conditions on annihilators and summands: Goldie-type conditions), 16N60. arXiv math.RA. Level 3: graduate.

**Definition.** A ring is semiprime when it has no nonzero ideal of square zero. It is right Goldie when it has no infinite direct sum of nonzero right ideals and its right annihilators {r : Sr = 0} satisfy the ascending chain condition.

**Problem.** A semiprime right Goldie ring has a semisimple Artinian right ring of fractions. Such a ring of fractions is a finite product of matrix rings over division rings.

**How the definition helps.** Semiprimeness removes square-zero ideals, which would survive in a ring of fractions and block semisimplicity. The dual numbers ℚ\[ε\]/(ε²) are right Goldie but not semiprime, and their regular elements are already units, so the fraction ring keeps (ε) (our own). Under both hypotheses Goldie's theorem gives the fraction ring, and Artin–Wedderburn gives the matrix decomposition (our own explanation).

**Wikipedia:** [Goldie's theorem](https://en.wikipedia.org/wiki/Goldie%27s_theorem). It says: “the semiprime right Goldie rings are precisely those that have a semisimple Artinian right classical ring of quotients”

**Paper or page:** [Pointed Hopf algebras, the Dixmier-Moeglin Equivalence and Noetherian group algebras](https://arxiv.org/abs/2507.23730v2). It says: “R is semiprime right Goldie.”

**Sources:**

- [Alfred Goldie, Semi-Prime Rings with Maximum Condition (1960).](https://doi.org/10.1112/plms/s3-10.1.201)

### Defining the symmetric algebra as free commutative gives its tensor-algebra presentation

**Remember:** Free commutative means free associative with commutators killed.

*True by definition. Confidence: medium.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 15A72. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** The symmetric algebra of a module M is the free commutative algebra on M: every linear map from M into a commutative algebra extends uniquely to an algebra map. The tensor algebra is the free associative algebra on M in the same sense.

**Problem.** Over any commutative ring, the symmetric algebra is the quotient of the tensor algebra by the ideal generated by all commutators ab − ba.

**How the definition helps.** The quotient has the same universal property, so it is the symmetric algebra (our own). A linear map from M into a commutative algebra extends uniquely to the tensor algebra, and that extension kills every commutator, so it factors uniquely through the quotient.

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra S V of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Tensor algebras defined as free algebras commute with localization

**Remember:** Freely adding products commutes with changing the scalar ring.

*True by definition.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 13B30. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** The tensor algebra T(M) of a module M is the free associative algebra on M: every linear map from M into an algebra extends uniquely to an algebra map.

**Problem.** Let S be a multiplicative subset of a commutative ring R. Then S⁻¹T(M) is the tensor algebra of S⁻¹M over S⁻¹R.

**How the definition helps.** Both algebras have the same universal property, so they agree (our own). For an S⁻¹R-algebra B, algebra maps S⁻¹T(M) → B correspond to R-linear maps M → B. These extend uniquely to S⁻¹R-linear maps S⁻¹M → B, which classify algebra maps from T(S⁻¹M).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.13.6](https://stacks.math.columbia.edu/tag/0C6F). It says: “Then S⁻¹T<sub>R</sub>(M) = T<sub>S⁻¹R</sub>(S⁻¹M) for any R-module M.”

**Sources:**

- [Stacks Project, Algebra, Lemma 10.13.6](https://stacks.math.columbia.edu/tag/0C6F)

### Universal properties make free rings into monoid rings of words

**Remember:** Extend an assignment to words first, then extend it linearly.

*True by definition.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 20M25. arXiv math.RA. Level 3: graduate.

**Definition.** The free unital ring on a set X is a ring with a map from X such that every function from X into a unital ring extends uniquely to a unital ring map. The monoid ring ℤ\[M\] has finite integer combinations of elements of a monoid M, multiplied by extending the product of M.

**Problem.** The free ring on X is the monoid ring of all finite words in X, with multiplication given by joining words.

**How the definition helps.** Words with linear extension give the required unique map, so the monoid ring of words has the universal property (our own). Send each word to the ordered product of its letters' images and the empty word to 1, then extend linearly. This preserves products and leaves no other choice.

**Wikipedia:** [Free algebra](https://en.wikipedia.org/wiki/Free_algebra). It says: “The non-commutative polynomial ring may be identified with the monoid ring over R of the free monoid of all finite words in the Xᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Group algebras as left adjoints send free products to algebra coproducts

**Remember:** The group algebra freely turns group elements into units.

*True by definition.* MSC 16S34 (Group rings), 16S10. arXiv math.RA, math.GR. Level 3: graduate.

**Definition.** The group algebra R\[G\] makes the elements of G into units freely: every group map from G to the units of a unital associative R-algebra B extends uniquely to an algebra map R\[G\] → B.

**Problem.** Among unital associative R-algebras, the group algebra of a free product of groups is the coproduct of their group algebras.

**How the definition helps.** Taking the group algebra is a left adjoint, so it sends coproducts to coproducts (our own). Algebra maps from R\[G ∗ H\] correspond to pairs of group maps from G and H into units, hence to pairs of algebra maps from R\[G\] and R\[H\].

**nLab:** [group of units](https://ncatlab.org/nlab/show/group+of+units). It says: “where R\[−\] forms the group algebra over R”

**Sources:** none listed. No primary source with a working link was found.

### The Frobenius dual makes finite group algebras self-injective

**Remember:** Frobenius means the algebra looks like its own injective dual.

*True by definition.* MSC 16S34 (Group rings), 16D50, 16L60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra A over k is Frobenius when A is isomorphic, as a right A-module, to its dual Homₖ(A, k), which is always injective (our own). The action on the dual is (f·a)(b) = f(ab).

**Problem.** For a finite group G and any field k, the group algebra k\[G\] is injective as a right module over itself. So every finitely generated projective right k\[G\]-module is injective.

**How the definition helps.** The dual is injective because linear functionals extend from subspaces (our own), so a Frobenius algebra is injective over itself. For k\[G\], the identity coefficient of ab pairs each basis element g with g⁻¹, which gives the isomorphism with the dual (our own). Finitely generated projectives are summands of finite free modules, so they are injective too (our own).

**Wikipedia:** [Frobenius algebra](https://en.wikipedia.org/wiki/Frobenius_algebra). It says: “a finite-dimensional, unital, associative algebra is Frobenius if and only if the injective right A-module Homₖ(A,k) is isomorphic to the right regular representation of A.”

**Sources:** none listed. No primary source with a working link was found.

### Linear resolutions invert Hilbert series

**Remember:** Linear resolution: the n-th term sits exactly in degree n.

*True by definition.* MSC 16S37 (Quadratic and Koszul algebras). arXiv math.RA, math.RT. Level 3: graduate.

**Definition.** A graded algebra A = k ⊕ A₁ ⊕ A₂ ⊕ ⋯ over a field k is Koszul when k has a linear free resolution, one whose n-th term is generated in degree n.

**Problem.** Let A be a Koszul algebra with finite-dimensional graded pieces, and let B be its quadratic dual. Then their Hilbert series, which record dimensions by degree, satisfy Hₐ(t)Hᵦ(−t) = 1.

**How the definition helps.** By the Koszul complex, the n-th term has dim Bₙ generators in degree n, so its Hilbert series is Hₐ(t)·dim Bₙ·tⁿ (our own). The alternating sum over n equals the Hilbert series of k, which is 1, giving Hₐ(t)Hᵦ(−t) = 1 (our own).

**nLab:** [Koszul algebra](https://ncatlab.org/nlab/show/Koszul+algebra). It says: “has a projective resolution where the ith term is generated in grade i.”

**Sources:**

- [Stewart Priddy, Koszul resolutions](https://doi.org/10.1090/s0002-9947-1970-0265437-8)

### Adjoining an identity makes every rng an ideal of a ring

**Remember:** Add a formal 1 to any rng, and it becomes an ideal.

*True by definition.* MSC 16S70 (Extensions of associative rings by ideals), 16D25. arXiv math.RA. Level 3: graduate.

**Definition.** The Dorroh extension of a rng R adds a formal identity: it is ℤ × R with componentwise addition and (n₁, r₁)(n₂, r₂) = (n₁n₂, n₁r₂ + n₂r₁ + r₁r₂). Its identity is (1, 0), and the pairs (0, r) form a copy of R.

**Problem.** Every rng is an ideal in a ring with 1, namely its Dorroh extension.

**How the definition helps.** By the product formula, multiplying (0, r) by any pair on either side gives a pair (0, r′), so the copy of R is an ideal (our own). The map r ↦ (0, r) preserves sums and products.

**Wikipedia:** [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “Every rng is an ideal in some ring, and every ideal of a ring is a rng.”

**Sources:**

- [J. L. Dorroh, Concerning adjunctions to algebras, Bulletin of the American Mathematical Society 38 (1932) 85–88](https://doi.org/10.1090/S0002-9904-1932-05333-2)

### The Gerstenhaber bracket puts deformation obstructions in Hochschild cohomology

**Remember:** Associativity is one bracket equation, so obstructions become cohomology classes.

*Makes the theorem clean to state or prove.* MSC 16S80 (Deformations of associative rings), 16E40, 53D55. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** For bilinear maps f, g on A, put (f∘g)(a,b,c) = f(g(a,b),c) − f(a,g(b,c)). Then μ∘μ is the associator of a product μ, and the Gerstenhaber self-bracket \[μ, μ\] is 2(μ∘μ), so associativity becomes the single equation μ∘μ = 0.

**Problem.** Let A be an associative algebra whose third Hochschild cohomology HH³(A, A) is zero. Then every Hochschild 2-cocycle B₁ is the first term of an associative formal deformation μ + ħB₁ + ħ²B₂ + ⋯ (Gerstenhaber).

**How the definition helps.** Expanding the associativity equation for μ + ħB₁ + ħ²B₂ + ⋯ order by order, the order-n term is the Hochschild coboundary of Bₙ plus a known sum from lower terms (our own). Gerstenhaber's obstruction theorem shows that this sum is a Hochschild 3-cocycle. Since HH³ vanishes it is a coboundary, so some Bₙ cancels it and the deformation extends one order.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Note that μ is associative iff μ ∘ μ = 0 iff \[μ, μ\] = 0.”

**Sources:**

- [Murray Gerstenhaber, On the deformation of rings and algebras, Annals of Mathematics 79 (1964) 59–103](https://doi.org/10.2307/1970484)

### The Ore condition makes every element of a localization a single fraction

**Remember:** Move denominators left and replace right cancellation by left cancellation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S85 (Associative rings of fractions and localizations). arXiv math.RA. Level 3: graduate.

**Definition.** A multiplicative subset S of a ring R is left Ore when a right fraction can be rewritten as a left one, and cancellation can be moved to the left. Precisely, for r ∈ R and s ∈ S some t ∈ S and u ∈ R give tr = us, and if ns = ms with s ∈ S then tn = tm for some t ∈ S.

**Problem.** For every left Ore set S in a ring R, the left localization S⁻¹R exists. Every element has the form s⁻¹r with s ∈ S and r ∈ R.

**How the definition helps.** The first condition rewrites r s⁻¹ as t⁻¹u, so sums and products of left fractions are again single left fractions (our own). The second makes the equivalence of pairs (s, r) respect equality after right multiplication by a denominator. The Ore localization theorem then builds S⁻¹R from these pairs.

**nLab:** [Ore set](https://ncatlab.org/nlab/show/Ore+set), [Ore localization](https://ncatlab.org/nlab/show/Ore+localization). It says: “For every left Ore set S⊂R in a monoid or ring R, the left Ore localization exists and it can be defined as follows. As a set, S⁻¹R := S×R/∼”

**Sources:**

- [Øystein Ore, Linear equations in non-commutative fields, Annals of Mathematics 32 (1931) 463–477](https://doi.org/10.2307/1968245)

### Torsion classes form lattices

**Remember:** Closed under quotients and extensions, so intersections stay torsion classes.

*True by definition.* MSC 16S90 (Torsion theories; radicals on module categories (associative algebraic aspects)). arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A torsion class of finite-dimensional modules over a finite-dimensional algebra is a class that contains zero and is closed under quotients and extensions. Closed under extensions means a module is in the class when a submodule and the quotient by it are.

**Problem.** Ordered by inclusion, the torsion classes form a complete lattice. Every family has a greatest lower bound and a least upper bound.

**How the definition helps.** Both closure rules survive arbitrary intersections, so intersections give greatest lower bounds. The least upper bound of a family is the intersection of all torsion classes containing it (our own argument).

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Then the intersection of arbitrarily many torsion classes is a torsion class.”

**Sources:** none listed. No primary source with a working link was found.

### Convolution-inverse antipodes exist in connected graded bialgebras by geometric series

**Remember:** Invert the identity by a geometric series in positive degrees.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 57T05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** An antipode of a bialgebra is a two-sided inverse of the identity map under convolution f ⋆ g = m ∘ (f ⊗ g) ∘ Δ. The unit of convolution is u, the counit followed by the algebra unit.

**Problem.** Let H be a bialgebra over a field, graded by the nonnegative integers, whose degree-zero part is the field. Then H has an antipode, so H is a Hopf algebra.

**How the definition helps.** Write id = u − π; then S = ∑ₖ π<sup>⋆k</sup> is a convolution inverse of id whenever the sum is finite in each degree (our own). In degree n, each term of a k-fold coproduct with k &gt; n has a degree-zero factor, which π kills. So the sum is finite in each degree and gives the antipode.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “it is common to define Hopf algebras without mentioning the antipode, since in many topological cases of interest it exists automatically.”

**Sources:** none listed. No primary source with a working link was found.

### Convolution-inverse antipodes make bialgebra maps commute with antipodes

**Remember:** Both composites invert f, so they are equal.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** For maps f, g from a coalgebra H to an algebra K, convolution is f ⋆ g = mₖ ∘ (f ⊗ g) ∘ Δₕ, with unit u given by the counit of H followed by the unit of K. An antipode is a two-sided convolution inverse of the identity on a bialgebra.

**Problem.** Let f be a bialgebra map between Hopf algebras H and K with antipodes S and S′. Then f ∘ S = S′ ∘ f.

**How the definition helps.** Both f ∘ S and S′ ∘ f are convolution inverses of f, and a left inverse equals a right inverse (our own). Because f preserves product and unit, (f ∘ S) ⋆ f = f ∘ (S ⋆ id) = u. Because f preserves coproduct and counit, f ⋆ (S′ ∘ f) = (id ⋆ S′) ∘ f = u.

**Wikipedia:** [Hopf algebra](https://en.wikipedia.org/wiki/Hopf_algebra). It says: “The identity of the convolution algebra is η ∘ ε.”

**Sources:** none listed. No primary source with a working link was found.

### Defining quasitriangular structures as module braidings makes module categories braided

**Remember:** A coherent swap of modules already is a braiding.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 18M15. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** In the module formulation, a quasitriangular structure on a Hopf algebra H is a braiding on its category of left modules. A braiding is a natural family of isomorphisms V ⊗ W → W ⊗ V satisfying both hexagon identities.

**Problem.** For a quasitriangular Hopf algebra, the category of left modules is braided.

**How the definition helps.** With this definition the braiding is given, so the category is braided (our own). The reconstruction theorem matches it with the universal R-matrix definition: naturality recovers R from the braiding on two regular modules, and the hexagons give its coproduct identities (our own).

**Paper or page:** [Representation theory of non-factorizable ribbon Hopf algebras](https://arxiv.org/abs/2510.24263v1). It says: “Then the category H-mod is braided monoidal.”

**Sources:**

- [Representation theory of non-factorizable ribbon Hopf algebras (arXiv 2510.24263v1)](https://arxiv.org/abs/2510.24263v1)

### Defining the antipode as a convolution inverse makes it unique

**Remember:** An antipode is an inverse, and inverses are unique.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** For linear endomorphisms of a bialgebra with product m and coproduct Δ, define f ⋆ g = m ∘ (f ⊗ g) ∘ Δ. The convolution unit u is the counit followed by the algebra unit. An antipode S satisfies S ⋆ id = id ⋆ S = u.

**Problem.** A bialgebra has at most one antipode.

**How the definition helps.** The antipode is an inverse in the convolution monoid, so it is unique. For two antipodes S and T, associativity gives S = S ⋆ (id ⋆ T) = (S ⋆ id) ⋆ T = T (our own).

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “If an antipode exists then it is unique, just the way that if inverses exist in a monoid then they are unique.”

**Sources:** none listed. No primary source with a working link was found.

### Hopf ideals let all operations descend

**Remember:** Every structure map must pass through the quotient.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** A Hopf ideal of a Hopf algebra H is a two-sided ideal I that every other operation respects: ε(I) = 0, S(I) ⊆ I, and Δ(I) ⊆ I ⊗ H + H ⊗ I.

**Problem.** Quotienting a Hopf algebra by a Hopf ideal gives a Hopf algebra with the induced operations.

**How the definition helps.** Each condition lets one operation descend to H/I, and the Hopf identities descend with them (our own explanation). Without the counit condition this fails: in the rational group algebra of an infinite cyclic group, the ideal generated by g − 2 is not killed by ε, since ε(g) = 1 (our own counterexample).

**nLab:** [quotient bialgebra](https://ncatlab.org/nlab/show/quotient+bialgebra). It says: “A Hopf ideal is a bialgebra ideal which is invariant under the antipode map.”

**Sources:** none listed. No primary source with a working link was found.

### Hopf–Galois extensions are exactly affine torsors in the commutative case

**Remember:** The Galois map is the torsor map read on coordinate rings.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 58B32, 14L30. arXiv math.QA, math.AG. Level 3: graduate.

**Definition.** A right comodule algebra E over a Hopf algebra H, with coaction ρ and coinvariant subalgebra U, is H-Galois when the map E ⊗ᵤ E → E ⊗ H, x ⊗ y ↦ (x ⊗ 1)ρ(y), is bijective. This map is the coordinate-ring form of the action map (x, g) ↦ (x, xg).

**Problem.** Let G = Spec H act on X = Spec E with affine quotient Y = Spec U. Then X → Y is a G-torsor exactly when U ⊂ E is H-Galois and E is faithfully flat over U. Faithfully flat means that tensoring with E preserves and detects exact sequences.

**How the definition helps.** On coordinate rings, the torsor map X × G → X ×<sub>Y</sub> X is exactly the Galois map, so one is an isomorphism exactly when the other is (our own). Faithful flatness supplies the covering condition in the torsor definition.

**nLab:** [Hopf-Galois extension](https://ncatlab.org/nlab/show/Hopf-Galois+extension). It says: “the algebra E of regular functions over the total scheme X of an affine G-torsor X→Y, whose base Y also happens to be affine, is a commutative H-Hopf–Galois extension of the algebra of regular functions U on the base”

**Paper or page:** [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860). It says: “is bijective if and only if α: X×G → X×<sub>X/G</sub> X is bijective, and this holds if and only if the G-action is free.”

**Sources:**

- [H.-J. Schneider, Principal homogeneous spaces for arbitrary Hopf algebras, Israel Journal of Mathematics 72 (1990) 167–195](https://doi.org/10.1007/BF02764619)

### Normal Hopf subalgebras give quotients

**Remember:** Stable under Hopf conjugation, so one-sided ideals become two-sided.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** A Hopf subalgebra K of H is normal when both adjoint actions, the Hopf version of conjugation, preserve it. That is, for h ∈ H with Δ(h) = ∑ a ⊗ b and x ∈ K, both ∑ a x S(b) and ∑ S(a) x b lie in K.

**Problem.** For normal K, the kernel of its counit, the map to scalars, generates the same left and right ideal in H. The quotient by this ideal inherits all the Hopf algebra operations.

**How the definition helps.** Normality lets generators of the counit kernel K⁺ cross H from either side, so HK⁺ = K⁺H is a Hopf ideal. The quotient then inherits the operations (our own). Without normality this fails: in ℚ\[S₃\], the left ideal generated by (12) − 1 is not a right ideal, because conjugation moves the subgroup ⟨(12)⟩ (our own).

**Paper or page:** [Locally Frobenius algebras and Hopf algebras](https://arxiv.org/abs/2212.00437v3). It says: “Then HK⁺ = K⁺H and this is a Hopf ideal in H”

**Sources:** none listed. No primary source with a working link was found.

### The Hopf algebra axioms are what make modules rigid monoidal

**Remember:** Comultiplication gives tensor products of modules; the antipode gives their duals.

*Makes the theorem clean to state or prove.* MSC 16T05 (Hopf algebras and their applications), 18M05. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** A Hopf algebra is a bialgebra whose identity map has a two-sided inverse S, the antipode, under convolution f ⋆ g = m ∘ (f ⊗ g) ∘ Δ, whose unit is the counit followed by the unit. The coproduct lets H act on tensor products of modules, the counit on the trivial module, and S on duals (our own).

**Problem.** For a finite-dimensional Hopf algebra H over a field, its finite-dimensional modules form a rigid monoidal category with monoidal forgetful functor. Conversely, such a structure on finite-dimensional modules of a finite-dimensional algebra, with strong monoidal forgetful functor, reconstructs a Hopf structure up to isomorphism.

**How the definition helps.** These three actions make finite-dimensional modules a monoidal category with duals, with monoidal forgetful functor (our own). Finite dimensionality makes S bijective, giving both left and right duals. Tannaka reconstruction recovers the Hopf operations from the monoidal structure and the forgetful functor.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra), [Tannaka duality](https://ncatlab.org/nlab/show/Tannaka+duality). It says: “a Hopf algebra structure on an associative algebra is precisely the structure such as to make its category of modules into a rigid monoidal category equipped with a fiber functor”

**Sources:**

- [K.-H. Ulbrich, On Hopf algebras and rigid monoidal categories, Israel J. Math. 72 (1990) 252–256](https://doi.org/10.1007/BF02764622)

### Triangular swaps cancel

**Remember:** Triangular: the flipped R is the inverse of R.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** A quasitriangular Hopf algebra has an invertible tensor R whose action, followed by the flip, braids tensor products of modules. It is triangular when R₂₁ = R⁻¹, where R₂₁ is R with its two factors exchanged.

**Problem.** Over a triangular Hopf algebra, swapping two modules and then swapping them back gives the identity. So the module braiding is symmetric.

**How the definition helps.** The double swap acts by R₂₁R, which is 1 by triangularity (our own). Without it this fails: grade vector spaces by ℤ/3 and weight the swap of degrees a, b by ωᵃᵇ, with ω a primitive cube root of unity. This is a braiding, but two swaps in degrees 1, 1 multiply by ω² ≠ 1 (our own).

**nLab:** [triangular Hopf algebra](https://ncatlab.org/nlab/show/triangular+Hopf+algebra). It says: “a braided monoidal category/symmetric monoidal category”

**Sources:** none listed. No primary source with a working link was found.

### Writing Hopf axioms as maps makes the finite dual Hopf

**Remember:** Reverse every arrow, and the Hopf axioms come back.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** A Hopf algebra is a vector space with multiplication m, unit η, coproduct Δ, counit ε and antipode S, whose axioms are all equations between composites of these maps. They say m is associative and unital, Δ is coassociative and counital, Δ and ε are algebra maps, and m(S ⊗ id)Δ = ηε = m(id ⊗ S)Δ.

**Problem.** Let H be a finite-dimensional Hopf algebra. Its linear dual H\* is a Hopf algebra whose operations are the transposes of the operations of H.

**How the definition helps.** Transposing reverses every composite, and the list of axioms is unchanged when m, η swap roles with Δ, ε (our own). Finite dimensionality identifies the dual of H ⊗ H with H\* ⊗ H\*, so the transposes are maps of the right form.

**Wikipedia:** [Hopf algebra](https://en.wikipedia.org/wiki/Hopf_algebra). It says: “The definition of Hopf algebra is self-dual”

**Sources:** none listed. No primary source with a working link was found.

### Building the finite dual from finite quotients makes it a coalgebra

**Remember:** Take duals of finite quotients first, then take the union.

*True by definition.* MSC 16T15 (Coalgebras and comodules; corings), 16T05. arXiv math.QA. Level 3: graduate.

**Definition.** The finite dual A° of an algebra A over a field is the union of the duals (A/I)\* over all two-sided ideals I of finite codimension. These are the functionals that vanish on some such ideal.

**Problem.** For an associative unital algebra A over a field, the finite dual A° is a coalgebra. Its comultiplication and counit are the transposes of the multiplication and the unit.

**How the definition helps.** Each finite-dimensional quotient A/I has a coalgebra dual, with the transposed product and unit, so A° is a union of coalgebras (our own). Two such ideals meet in a third, whose quotient dual contains both, so the union is directed and the operations agree.

**nLab:** [dual bialgebra](https://ncatlab.org/nlab/show/dual+bialgebra). It says: “This subspace is consequently a coalgebra”

**Sources:** none listed. No primary source with a working link was found.

### Strong gradings recover modules

**Remember:** Strong: each pair of pieces multiplies onto the whole product piece.

*Rules out counterexamples.* MSC 16W50 (Graded rings and modules (associative rings and algebras)). arXiv math.RA. Level 3: graduate.

**Definition.** A group grading splits a ring into additive pieces R<sub>g</sub> with R<sub>g</sub> R<sub>h</sub> ⊆ R<sub>gh</sub>. It is strong when R<sub>g</sub> R<sub>h</sub> equals R<sub>gh</sub>, meaning finite sums of such products fill the piece.

**Problem.** For a strongly graded unital ring, taking the identity-degree part gives an equivalence from graded right modules to modules over the identity-degree subring. Tensoring with the whole ring gives the inverse.

**How the definition helps.** Strong grading writes 1 as a sum of products from R<sub>g</sub> and R<sub>g</sub>⁻¹ for every g, and these sums invert the map m ⊗ r ↦ mr in Dade's theorem (our own explanation). Without it this fails: grade k\[x\] by degree and put the module k\[x\]/(x) in degree one. Its degree-zero part is zero, so the module is lost (our own counterexample).

**Paper or page:** [Classification conjectures for Leavitt path algebras](https://arxiv.org/abs/2401.04262v3). It says: “The following are equivalent. (1) R is strongly graded”

**Sources:**

- [Everett Dade, Group-graded rings and modules](https://doi.org/10.1007/bf01161413)

### Ring completion as a left adjoint preserves pushouts of semirings

**Remember:** Adding negatives freely commutes with gluing.

*True by definition. Confidence: medium.* MSC 16Y60 (Semirings), 18A30. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The ring completion of a semiring S adds negatives freely: it is a ring C with a semiring map S → C through which every semiring map from S to a ring factors uniquely.

**Problem.** Ring completion sends a pushout of semirings to the pushout of their ring completions.

**How the definition helps.** This universal property makes ring completion a left adjoint, and left adjoints preserve pushouts (our own application). Concretely, ring maps from the completed pushout correspond to pairs of semiring maps agreeing on the common source, hence to pairs of ring maps from the two completions.

**nLab:** [rig](https://ncatlab.org/nlab/show/rig). It says: “this gives the left adjoint F: Rig → Ring to the forgetful functor U: Ring → Rig.”

**Sources:** none listed. No primary source with a working link was found.

### Over t-unital rings, t-unital modules form an abelian category

**Remember:** t-unital: tensoring with R changes nothing; c-unital: Hom from R changes nothing.

*Makes the theorem clean to state or prove.* MSC 16D10 (General module theory in associative algebras), 16D90. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A possibly nonunital ring R is t-unital when multiplication R ⊗ᵣ R → R is an isomorphism. A left module P is t-unital when the action R ⊗ᵣ P → P is an isomorphism, and c-unital when p ↦ (r ↦ rp) is an isomorphism P → Homᵣ(R, P).

**Problem.** Over a t-unital ring, the categories of t-unital and of c-unital left modules are abelian and naturally equivalent to each other.

**How the definition helps.** The definitions pick out the modules fixed by the functors R ⊗ᵣ − and Homᵣ(R, −) (our own). Positselski's theorem shows that these functors are inverse equivalences between the two categories and that both are abelian.

**Paper or page:** [Tensor-Hom formalism for modules over nonunital rings](https://arxiv.org/abs/2308.16090v4). It says: “Nevertheless, the categories of t-unital and c-unital left R-modules are abelian and naturally equivalent to each other”

**Sources:**

- [Leonid Positselski, Tensor-Hom formalism for modules over nonunital rings, arXiv:2308.16090 (2023)](https://arxiv.org/abs/2308.16090v4)

### The defect, as maps into the forgetful functor, is adjoint to Yoneda

**Remember:** The defect tests F against the forgetful functor Hom(Λ, −).

*True by definition.* MSC 16D90 (Module categories in associative algebras), 18A25. arXiv math.RT, math.CT. Level 4: research.

**Definition.** The defect w(F) of an additive functor F from left Λ-modules to abelian groups is the set of natural transformations from F to the forgetful functor. Since the forgetful functor is Hom(Λ, −), the action of Λ on itself makes w(F) a Λ-module.

**Problem.** For every such F and every left Λ-module A, natural transformations from F to Hom(A, −) correspond to Λ-linear maps from A to w(F). The correspondence is natural in F and in A.

**How the definition helps.** Evaluation at an element a ∈ A is a natural map from Hom(A, −) to the forgetful functor, and this gives the correspondence (our own). A transformation τ gives a ↦ (x ↦ τₘ(x)(a)), and a linear map h gives τₘ(x)(a) = h(a)ₘ(x). These formulas are inverse and natural.

**Paper or page:** [The defect, the Malgrange functor, and linear control systems](https://arxiv.org/abs/2403.13520v1). It says: “The defect and the contravariant Yoneda embedding form a right adjoint pair”

**Sources:**

- [Alex Martsinkovsky, The defect, the Malgrange functor, and linear control systems, arXiv:2403.13520 (2024)](https://arxiv.org/abs/2403.13520v1)

### Dominant dimension two characterizes endomorphism algebras of generator-cogenerators

**Remember:** Two projective-injective terms start the resolution, so Γ is a double centralizer.

*Makes the theorem clean to state or prove.* MSC 16E10 (Homological dimension in associative algebras), 16G10, 16D90. arXiv math.RT, math.RA. Level 4: research.

**Definition.** The dominant dimension of a finite-dimensional algebra Γ counts how many leading terms of the minimal injective resolution of Γ are also projective. A generator-cogenerator is a module that has every indecomposable projective and every indecomposable injective as a direct summand.

**Problem.** Up to Morita equivalence, the finite-dimensional algebras of dominant dimension at least two are exactly the opposite endomorphism algebras of finite-dimensional generator-cogenerators. Conversely, the opposite endomorphism algebra of the injective hull of Γ recovers the base algebra up to Morita equivalence.

**How the definition helps.** Two projective-injective terms at the start make Γ the double centralizer of its injective hull I, that is, the ring of endomorphisms of I that commute with End(I) (our own summary). Then I is the generator-cogenerator over the base algebra. The Auslander correspondence is the special case where the module contains every indecomposable module.

**Paper or page:** [Nakayama-type phenomena in higher Auslander--Reiten theory](https://arxiv.org/abs/2402.15889v1). It says: “There is a one-to-one correspondence between equivalence classes of Morita–Tachikawa pairs and Morita equivalence classes of finite dimensional algebras Γ such that domdim Γ ≥ 2.”

**Sources:** none listed. No primary source with a working link was found.

### Averaging computes reflexive homology

**Remember:** Reflexive homology is derived reflection coinvariants; with ½, no deriving needed.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 19D55. arXiv math.AT. Level 4: research.

**Definition.** Let C be the Hochschild chain complex of a reflexive module, with its signed reflection action by the two-element group C₂. Reflexive homology is the derived coinvariants of C. Concretely, it is the homology of P ⊗ C over k\[C₂\], where P is a projective resolution of the trivial module k.

**Problem.** Over a commutative ring in which two is invertible, reflexive homology equals the coinvariants of Hochschild homology. Coinvariants identify every class with its reflection.

**How the definition helps.** When 2 is invertible, the averaging idempotent (1 + t)/2 makes k a projective k\[C₂\]-module, so one may take P = k (our own). Then reflexive homology is the homology of the ordinary coinvariants of C, and taking coinvariants is exact, so it commutes with homology (our own). Graves identifies this derived coinvariant model with the original definition on the reflexive category.

**Paper or page:** [Reflexive homology](https://arxiv.org/abs/2204.07985v3). It says: “The reflexive homology HR⋆(F) is naturally isomorphic to the hyperhomology of the group C₂ with coefficients in the Hochschild complex C⋆(F).”

**Sources:**

- [Daniel Graves, Reflexive homology](https://arxiv.org/abs/2204.07985v3)

### Calabi–Yau algebras have Serre duality for finite-dimensional modules

**Remember:** The bimodule dual of A is A itself, shifted down by d.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16E65. arXiv math.RA, math.RT. Level 4: research.

**Definition.** An algebra A is Calabi–Yau of dimension d when it is homologically smooth, meaning perfect as a complex of A-bimodules, and its derived bimodule dual RHom from A to A ⊗ Aᵒᵖ is isomorphic to A shifted by −d. This dual turns bimodule Ext into bimodule Tor with degrees i and d − i exchanged (our own).

**Problem.** Let A be Calabi–Yau of dimension d over a field k, let M be a finite-dimensional A-module and let N be any A-module. Then the k-dual of Extⁱ(M, N) is isomorphic to Ext in degree d − i from N to M.

**How the definition helps.** The Calabi–Yau condition turns Ext into a Tor group, and the k-dual of a Tor group is an Ext group again (our own). Ext from M to N over A is Hochschild cohomology with coefficients in Homₖ(M, N), and Van den Bergh duality turns it into Tor in degree d − i (our own). Since M is finite-dimensional, the k-dual of that Tor group is Ext in degree d − i from N to M (our own).

**Paper or page:** [On deformed preprojective algebras](https://arxiv.org/abs/2108.00795). It says: “In particular D Extⁱ<sub>A</sub> (M, N) ≅ Extᵈ⁻ⁱ<sub>A</sub>(N, M) for M a finite-dimensional A-module and N any A-module.”

**Sources:**

- [W. Crawley-Boevey and Y. Kimura, On deformed preprojective algebras, Journal of Pure and Applied Algebra 226 (2022)](https://doi.org/10.1016/j.jpaa.2022.107130)

### Circle gluing computes Hochschild chains

**Remember:** Beads of A on a necklace; the last multiplies the first.

*Makes the theorem clean to state or prove.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 81T45. arXiv math-ph. Level 4: research.

**Definition.** Factorization homology of A on an oriented one-manifold M places one tensor factor A on each interval of a finite disjoint union of intervals in M. When intervals merge, their factors multiply in the order the orientation gives, with units for empty products, and one takes the homotopy colimit. On the circle this order is cyclic, so the last factor also meets the first.

**Problem.** Factorization homology of A on the circle is quasi-isomorphic to the Hochschild chain complex of A.

**How the definition helps.** On the circle the last interval lies next to the first, which gives the wraparound term of the Hochschild differential (our own). The other terms multiply neighbours, with signs from the grading (our own). The proof identifies the gluing complex with the cyclic bar construction, whose degree-n part has n + 1 tensor factors (our own).

**Paper or page:** [Holomorphic field theories and higher algebra](https://arxiv.org/abs/2508.07443v1). It says: “extends to a factorization algebra on S¹”

**Sources:**

- [Owen Gwilliam, Brian R. Williams, Holomorphic field theories and higher algebra](https://arxiv.org/abs/2508.07443v1)

### Dihedral homology retains loop reflections

**Remember:** Rotate and flip the loop: use all of O(2).

*Makes the theorem clean to state or prove.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 55P35. arXiv math.AT. Level 4: research.

**Definition.** Negative dihedral homology of an involutive dg algebra A is the homology of the homotopy fixed points of its Hochschild chains under the orthogonal group O(2), the full symmetry group of the circle. Rotations act through the cyclic structure, and the reflection reverses the order of factors and applies the involution.

**Problem.** Let X be simply connected with finite-dimensional homology in each degree over a field k, and give its singular cochains the signed involution that reverses simplex vertices. Then their negative dihedral homology is the cohomology of the homotopy quotient of the free loop space of X by O(2).

**How the definition helps.** O(2) is every way to reparametrize a loop, by rotation and by reflection, so the model with both actions matches the O(2)-action on free loops (our own). Ungheretti proves that the dihedral cochain model agrees with free-loop cochains with these actions (our own).

**nLab:** [dihedral homology](https://ncatlab.org/nlab/show/dihedral+homology). It says: “so dihedral homology is the cohomology of free loop spaces modulo the O(2)-action on loops”

**Sources:**

- [Massimiliano Ungheretti, Free loop spaces and dihedral homology](https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd16mu.pdf)

### Eckmann–Hilton makes the Hochschild cup product graded commutative

**Remember:** Self-maps of the unit have two interchanging products, so they commute.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)). arXiv math.KT, math.RA. Level 4: research.

**Definition.** Hochschild cohomology of A is the graded ring of shifted self-maps of A in the derived category of A-bimodules, and A is the unit for the derived tensor product over A. Self-maps of a tensor unit carry two products, composition and tensor product, that obey the interchange law (our own explanation).

**Problem.** The cup product on the Hochschild cohomology HH\*(A, A) is graded commutative.

**How the definition helps.** By Eckmann–Hilton, two unital products that interchange agree and commute, so composition is graded commutative with sign (−1)ᵖᑫ (our own explanation). Composition is the Yoneda product, which agrees with the cup product. Suárez-Álvarez gives the graded form of the argument.

**nLab:** [Eckmann-Hilton argument](https://ncatlab.org/nlab/show/Eckmann-Hilton+argument). It says: “In other words this says that when a set is equipped with a pair of monoid structures, such that one is a homomorphism for the other, then the two structures actually coincide and the resulting monoid is commutative.”

**Sources:**

- [M. Suárez-Álvarez, The Hilton–Heckmann argument for the anti-commutativity of cup products, Proceedings of the AMS 132 (2004)](https://doi.org/10.1090/s0002-9939-04-07409-x)

### Hochschild cochains as coderivations make the Jacobi identity automatic

**Remember:** Brackets of coderivations are commutators, and commutators satisfy Jacobi.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 17B55. arXiv math.KT, math.QA. Level 4: research.

**Definition.** A Hochschild cochain of A is the same as a coderivation of the tensor coalgebra of A\[1\], the unique one whose length-one part is the cochain. A coderivation is a map D with ΔD = (D ⊗ id + id ⊗ D)Δ, where Δ cuts each word in all ways, with graded signs. The Gerstenhaber bracket is the graded commutator of coderivations (our own).

**Problem.** The Gerstenhaber bracket makes the shifted Hochschild complex of A a differential graded Lie algebra.

**How the definition helps.** Graded commutators always satisfy the graded Jacobi identity, so the bracket does (our own). The Hochschild differential is the bracket with the multiplication coderivation m, so it is a derivation of the bracket (our own). Associativity gives \[m, m\] = 0, so the differential squares to zero (our own).

**nLab:** [deformation theory](https://ncatlab.org/nlab/show/deformation+theory). It says: “In the case of an associative algebra (or a dg algebra, or an A-infinity algebra, or a dg category, or an A-infinity category), the appropriate dgLa is the Hochschild complex with the Hochschild differential and the Gerstenhaber bracket.”

**Sources:**

- [J. Stasheff, The intrinsic bracket on the deformation complex of an associative algebra, Journal of Pure and Applied Algebra 89 (1993)](https://doi.org/10.1016/0022-4049(93)90096-c)

### Hochschild cohomology as bimodule Ext is a derived invariant

**Remember:** Compute Hochschild classes as maps from the diagonal bimodule to its shifts.

*True by definition. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16E35, 18G80. arXiv math.RA, math.KT. Level 4: research.

**Definition.** Hochschild cohomology HHⁿ(A, A) is the group of maps from A to A\[n\] in the derived category of A-bimodules, with composition as product. So any equivalence of bimodule derived categories that sends A to B carries HH\*(A, A) to HH\*(B, B) as a ring (our own).

**Problem.** Let A and B be algebras over a field k with k-linearly equivalent derived categories of modules. Then HH\*(A, A) ≅ HH\*(B, B) as graded rings.

**How the definition helps.** Rickard's derived Morita theorem gives a two-sided tilting complex for the two algebras. Tensoring with it and its inverse on both sides gives a bimodule derived equivalence that sends A to B (our own). Such an equivalence preserves maps between shifts and their composition (our own).

**nLab:** [derived Morita equivalence](https://ncatlab.org/nlab/show/derived+Morita+equivalence). It says: “The existence of a tilting complex is necessary and sufficient for an equivalence between the unbounded derived categories of two rings.”

**Sources:**

- [J. Rickard, Derived equivalences as derived functors, Journal of the London Mathematical Society 43 (1991)](https://doi.org/10.1112/jlms/s2-43.1.37)

### Quasi-free algebras have Hochschild homology only in degrees zero and one

**Remember:** A projective resolution of length one leaves no room for higher Tor.

*True by definition. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 19D55. arXiv math.KT, math.RA. Level 4: research.

**Definition.** An algebra A is quasi-free, in the sense of Cuntz and Quillen, if the bimodule Ω¹A, the kernel of multiplication A ⊗ A → A, is projective. Then 0 → Ω¹A → A ⊗ A → A → 0 is a projective bimodule resolution of A of length one (our own).

**Problem.** For a quasi-free algebra A over a field k, HHₙ(A,M) vanishes for every bimodule M and every n ≥ 2. Free algebras and path algebras of finite quivers are quasi-free, but k\[x,y\] is not.

**How the definition helps.** A projective resolution of length one makes Hochschild homology, a Tor group over bimodules, vanish above degree one (our own). For a path algebra, Ω¹ relative to the separable vertex algebra is a sum of one projective bimodule per arrow, which also covers free algebras (our own). For k\[x,y\], the Hochschild–Kostant–Rosenberg theorem gives HH₂ ≠ 0, so it is not quasi-free (our own).

**nLab:** [quasi-free algebra](https://ncatlab.org/nlab/show/quasi-free+algebra). It says: “However most commutative formally smooth algebras are not formally smooth in the associative noncommutative sense.”

**Sources:**

- [J. Cuntz, D. Quillen, Algebra extensions and nonsingularity, J. Amer. Math. Soc. 8 (1995) 251–289](https://doi.org/10.1090/s0894-0347-1995-1303029-0)
- [J. Cuntz, D. Quillen, Cyclic homology and nonsingularity, J. Amer. Math. Soc. 8 (1995) 373–442](https://doi.org/10.1090/s0894-0347-1995-1303030-7)

### The Calabi–Yau condition turns Hochschild cohomology into Hochschild homology

**Remember:** A smooth algebra whose bimodule dual is itself, shifted by d.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16E65. arXiv math.RA, math.KT. Level 4: research.

**Definition.** A is homologically smooth when it is perfect over Aᵉ = A ⊗ Aᵒᵖ; then its bimodule dual A! = RHom over Aᵉ from A to Aᵉ gives RHom over Aᵉ(A, M) ≅ A! ⊗ M, derived over Aᵉ (our own). A is Calabi–Yau of dimension d when there is a bimodule quasi-isomorphism A → A!\[d\] homotopic to its own shifted dual.

**Problem.** Let A be homologically smooth and Calabi–Yau of dimension d. Then for every A-bimodule M, Hochschild cohomology HHⁱ(A, M) is isomorphic to Hochschild homology of A with coefficients in M in degree d − i.

**How the definition helps.** Substituting A\[−d\] for A! in the formula for RHom turns the complex for Hochschild cohomology into the shifted complex for Hochschild homology (our own). Taking cohomology in degree i gives homology in degree d − i (our own).

**nLab:** [Calabi-Yau algebra](https://ncatlab.org/nlab/show/Calabi-Yau+algebra). It says: “A homologically smooth dg-algebra A is a Calabi-Yau algebra of dimension d if there is a quasi-isomorphism of A-bimodules f : A → A<sup>!</sup>\[d\] such that f ≃ f<sup>!</sup>\[d\].”

**Sources:**

- [M. Van den Bergh, A relation between Hochschild homology and cohomology for Gorenstein rings, Proceedings of the AMS 126 (1998)](https://doi.org/10.1090/s0002-9939-98-04210-5)

### A∞ quasi-isomorphisms have inverses, unlike quasi-isomorphisms of dg algebras

**Remember:** Allow higher components, and quasi-isomorphisms can be turned around.

*Rules out counterexamples.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)). arXiv math.KT, math.AT. Level 4: research.

**Definition.** An A∞-morphism from A to B is a sequence of maps fₙ from n-fold tensors of A to B, packaged as one degree-zero coalgebra map between the tensor coalgebras of A\[1\] and B\[1\] that commutes with the A∞ differentials. It is a quasi-isomorphism when f₁ induces an isomorphism on cohomology; the higher fₙ give room to build an inverse.

**Problem.** Over a field, every A∞ quasi-isomorphism has an inverse up to homotopy. So being A∞ quasi-isomorphic is an equivalence relation that needs no chains of maps in alternating directions.

**How the definition helps.** Over a field each A∞-algebra is homotopy equivalent to a minimal one, and a quasi-isomorphism of minimal ones has invertible f₁, so it inverts degree by degree (our own). A strict inverse can fail for a free dg resolution of k\[x\]/(x²) with degree-zero part k\[x\] (our own). Any dg map back sends x to a square-zero polynomial, hence to zero, so it cannot invert the cohomology map.

**Paper or page:** [Ainfinity-algebra Structure in Cohomology and its Applications](https://arxiv.org/abs/2307.10300). It says: “Each weak equivalence of minimal A∞-algebras is an isomorphism.”

**Sources:**

- [B. Keller, Introduction to A-infinity algebras and modules, Homology, Homotopy and Applications 3 (2001)](https://doi.org/10.4310/hha.2001.v3.n1.a1)

### A∞-algebras let every dg algebra be equivalent to its cohomology

**Remember:** Cohomology plus higher products remembers the whole dg algebra.

*Makes the theorem clean to state or prove.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 55P62. arXiv math.KT, math.AT. Level 4: research.

**Definition.** An A∞-algebra is a complex with operations mₙ of degree 2 − n for n ≥ 1: m₁ is the differential, m₂ is a product, and the higher mₙ record how associativity of m₂ holds up to coherent homotopy. It is minimal when m₁ = 0, so the underlying complex can be a cohomology H(A) with zero differential.

**Problem.** Over a field, every A∞-algebra A is A∞-quasi-isomorphic to a minimal A∞-algebra on its cohomology H(A). Its product m₂ is the product that H(A) inherits from A.

**How the definition helps.** Higher products let H(A) carry the information that a dg algebra would need extra generators to hold. Without them the statement fails, because many dg algebras are not quasi-isomorphic to their cohomology as dg algebras (our own). The operations mₙ come from a choice of homotopy and sums over trees (our own).

**nLab:** [Kadeishvili's theorem](https://ncatlab.org/nlab/show/Kadeishvili%27s+theorem). It says: “Kadeishvili's theorem says that every A-∞-algebra (in chain complexes) is equivalent, as an A∞-algebra, to its cohomology ring.”

**Sources:**

- [T. Kadeishvili, On the homology theory of fibre spaces, Russian Mathematical Surveys 35 (1980)](https://doi.org/10.1070/rm1980v035n03abeh001842)

### A∞-morphisms as coalgebra maps compose and invert easily

**Remember:** View A∞ maps as coalgebra maps, and composition is just composition.

*True by definition.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 18N40. arXiv math.KT, math.RA. Level 4: research.

**Definition.** An A∞-morphism from A to A′ is a degree-zero map of differential graded coalgebras between their bar constructions, the tensor coalgebras of A\[1\] and A′\[1\] with the A∞ coderivations. Its first component f₁ is its part from words of length one to words of length one.

**Problem.** A∞-algebras and A∞-morphisms form a category. An A∞-morphism is an isomorphism if and only if its first component f₁ is a linear isomorphism.

**How the definition helps.** Coalgebra maps compose associatively, so the category axioms need no work (our own). A coalgebra map between tensor coalgebras is invertible once its length-one part is, by solving for the inverse one word length at a time (our own). In components, by contrast, a composite is a sum over trees (our own).

**Wikipedia:** [Homotopy associative algebra](https://en.wikipedia.org/wiki/Homotopy_associative_algebra). It says: “For instance, a morphism f: A → A′ of A∞-algebras is equivalently a morphism of differential graded coalgebras Bf: BA → BA′”

**Paper or page:** [Ainfinity-algebra Structure in Cohomology and its Applications](https://arxiv.org/abs/2307.10300). It says: “A morphism of A∞-algebras is an isomorphism if and only if its first component f₁:(M,m₁)→(M′,m′₁) is an isomorphism of dg modules.”

**Sources:**

- [B. Keller, Introduction to A-infinity algebras and modules, Homology, Homotopy and Applications 3 (2001)](https://doi.org/10.4310/hha.2001.v3.n1.a1)

### Keeping dg endomorphisms gives a fully faithful functor from dg modules

**Remember:** Keep the chain-level endomorphisms, not only their cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 18G80. arXiv math.KT, math.AG. Level 4: research.

**Definition.** The dg endomorphism algebra E of a complex K is the complex of all graded maps from K to K with the commutator differential. Its cohomology is the Ext algebra, but E itself keeps the chain-level composition. K is compact when maps out of K commute with direct sums.

**Problem.** Let K be a compact complex on a ringed site whose dg endomorphism algebra E computes its Ext groups. Then the derived tensor product over E with K is a fully faithful functor from D(E), the derived category of dg E-modules, to D(𝒪).

**How the definition helps.** The functor sends E to K, and E computes the maps from K to K, so it is fully faithful on E and its shifts (our own). Compactness of K extends this to everything built from E by triangles and direct sums, which is all of D(E) (our own). If K also generates D(𝒪), the functor is an equivalence, which is Keller's theorem (our own).

**Paper or page:** [Lemma 22.35.6](https://stacks.math.columbia.edu/tag/09LZ). It says: “K• represents a compact object of D(𝒪)”

**Sources:**

- [B. Keller, Deriving DG categories, Annales Scientifiques de l'ENS 27 (1994)](https://doi.org/10.24033/asens.1689)

### Pure weights on a dg algebra force formality

**Remember:** If weight equals degree in cohomology, the algebra is formal.

*True by definition. Confidence: medium.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 55P62. arXiv math.AT, math.KT. Level 4: research.

**Definition.** A weight grading splits a dg algebra A into pieces of integer weight, preserved by the differential and added by multiplication. It is pure when the cohomology of weight w sits only in degree w, for every w. Formality means a zigzag of dg algebra quasi-isomorphisms connects A to H(A) with zero differential.

**Problem.** A dg algebra over a field with a pure weight grading is formal.

**How the definition helps.** Purity puts the cohomology of each weight-w piece in degree w, so cutting the piece off at degree w keeps that cohomology (our own). Let B be the sum over w of the weight-w piece, cut off above degree w and with only cocycles in degree w; then B is a subalgebra and B → A and B → H(A) are quasi-isomorphisms (our own). The work goes into finding weights, for example from Hodge theory or Galois actions.

**Paper or page:** [Weight structures and formality](https://arxiv.org/abs/2406.19142). It says: “A weight structure is a naturally occurring grading on certain differential graded algebras. If this weight satisfies a purity property, one can deduce formality.”

**Sources:**

- [C. Emprin and G. Horel, Weight structures and formality, arXiv:2406.19142 (2024)](https://arxiv.org/abs/2406.19142)

### Vanishing bigraded Hochschild cohomology makes a graded algebra intrinsically formal

**Remember:** No room in HH(n, 2 − n), no higher products survive.

*Makes the theorem clean to state or prove.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 16E40. arXiv math.KT, math.RA. Level 4: research.

**Definition.** For a graded algebra H, HH(n, m) is the part of Hochschild cohomology from cochains with n inputs that raise degree by m. A higher product mₙ of a minimal A∞-structure is such a cochain with m = 2 − n (our own). H is intrinsically formal when every dg algebra with cohomology H connects to H by a zigzag of dg algebra quasi-isomorphisms.

**Problem.** Let H be a graded algebra over a field with HH(n,2 − n)(H,H) = 0 for every n ≥ 3. Every minimal A∞-structure extending its product is A∞-isomorphic to H with no higher operations, so H is intrinsically formal.

**How the definition helps.** The first nonzero higher product mₙ is a Hochschild cocycle of bidegree (n, 2 − n), so its class lies in a group that vanishes (our own). Then an A∞-isomorphism with one new component removes mₙ, and induction on n finishes (our own). Kadeishvili's minimal model theorem puts such a structure on the cohomology of any dg algebra.

**Paper or page:** [Ainfinity-algebra Structure in Cohomology and its Applications](https://arxiv.org/abs/2307.10300). It says: “Then each m∼0, that is each minimal A∞-algebra structure on H is degenerate”

**Sources:**

- [T. Kadeishvili, A∞-algebra structure in cohomology and its applications, arXiv:2307.10300 (2023)](https://arxiv.org/abs/2307.10300)

### Finitistic dimension of a Gorenstein algebra equals its self-injective dimension

**Remember:** Ignore infinite resolutions; the rest are bounded by self-injective dimension.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E65 (Homological conditions on associative rings (generalizations of regular, Gorenstein, Cohen-Macaulay rings, etc.)), 16E10. arXiv math.RA, math.RT. Level 4: research.

**Definition.** A two-sided Noetherian ring is Iwanaga–Gorenstein if it has finite injective dimension as a left and as a right module over itself. Its finitistic dimension is the largest projective dimension among modules of finite projective dimension, so modules of infinite projective dimension are ignored.

**Problem.** Over an Iwanaga–Gorenstein ring of self-injective dimension d, a module has finite projective dimension exactly when it has finite injective dimension, and then both are at most d (Iwanaga). For a finite-dimensional such algebra the finitistic dimension is d, even when the global dimension is infinite.

**How the definition helps.** Ignoring modules of infinite projective dimension removes what makes the global dimension infinite, and Iwanaga's theorem bounds the rest by d. For a finite-dimensional algebra A, the dual module Homₖ(A, k) has projective dimension d, which gives the lower bound (our own summary). For a self-injective algebra such as k\[x\]/(x²), d = 0, so every module of finite projective dimension is projective.

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “A (not necessarily commutative) ring R is called Gorenstein if R has finite injective dimension both as a left R-module and as a right R-module.”

**Sources:**

- [Y. Iwanaga, On rings with finite self-injective dimension II, Tsukuba Journal of Mathematics (1980)](https://doi.org/10.21099/tkbjm/1496158797)

### Gorenstein condition pins down the Artin–Schelter regular algebras of dimension two

**Remember:** Ext from k to A is one shifted k, at the top.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E65 (Homological conditions on associative rings (generalizations of regular, Gorenstein, Cohen-Macaulay rings, etc.)), 16S38, 16W50. arXiv math.RA. Level 4: research.

**Definition.** A connected graded k-algebra A is Artin–Schelter regular if it has finite global dimension d, polynomial growth, and the Gorenstein condition on both sides: Extⁱ(k, A) is zero except in degree d, where it is k with a degree shift. The Gorenstein condition makes the minimal resolution of k self-dual, read backwards (our own).

**Problem.** An Artin–Schelter regular algebra of global dimension 2, generated in degree 1 over an algebraically closed field, has two generators x, y and one quadratic relation. Up to a change of generators, the relation is xy − qyx with q ≠ 0, or xy − yx − y².

**How the definition helps.** Self-duality of the resolution forces one quadratic relation with an invertible coefficient matrix (our own). With n generators the Hilbert series is then 1/(1 − nt + t²), and polynomial growth with nonnegative dimensions forces n = 2. Invertible bilinear forms in two variables, up to congruence and scalars, give the two relations (our own).

**nLab:** [Artin-Schelter regular algebra](https://ncatlab.org/nlab/show/Artin-Schelter+regular+algebra). It says: “A is Artin-Schelter regular (AS regular) if the following three conditions hold: it is of finite global dimension d”

**Sources:**

- [M. Artin and W. F. Schelter, Graded algebras of global dimension 3, Advances in Mathematics (1987)](https://doi.org/10.1016/0001-8708(87)90034-X)

### Gorenstein projective modules model the singularity category of a Gorenstein ring

**Remember:** A Gorenstein projective sits inside an endless exact projective complex.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E65 (Homological conditions on associative rings (generalizations of regular, Gorenstein, Cohen-Macaulay rings, etc.)), 18G80, 16G50. arXiv math.RT, math.RA. Level 4: research.

**Definition.** A finitely generated module is Gorenstein projective if it is a cycle in a complete resolution, a doubly infinite exact complex of finitely generated projectives that stays exact under Hom(−, R). The singularity category is the bounded derived category of finitely generated modules modulo perfect complexes, so there a module is a shift of its syzygies.

**Problem.** Over an Iwanaga–Gorenstein ring, the stable category of finitely generated Gorenstein projectives is triangulated equivalent to the singularity category. For a finite-dimensional self-injective algebra, every finitely generated module is Gorenstein projective, giving its stable module category.

**How the definition helps.** Gorenstein projectives form a Frobenius category, where projectives and injectives coincide, so their stable category is triangulated (our own summary). Every d-th syzygy is Gorenstein projective and is a shift of the module in the singularity category, so the functor reaches every object (our own summary). Buchweitz proves the functor full and faithful using complete resolutions (our own summary).

**nLab:** [triangulated category of singularities](https://ncatlab.org/nlab/show/triangulated+category+of+singularities). It says: “The quotient Dᵇ(X)/Perf(X) hence serves as the derived category of the singularities themselves.”

**Sources:**

- [R.-O. Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, American Mathematical Society (2021)](https://doi.org/10.1090/surv/262)

### Cellular structure lets one Cartan determinant decide finite global dimension

**Remember:** Swap the indices, and the Cartan matrix becomes D transpose times D.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G10 (Representations of associative Artinian rings), 16E10, 20C08. arXiv math.RT. Level 4: research.

**Definition.** A cellular algebra has a basis Cλ(s,t), with λ in a finite poset and s, t in a finite set for λ, and an anti-involution that swaps s and t. Modulo lower cells, left multiplication by a changes only the first index, with coefficients that do not depend on t. This makes the Cartan matrix factor as C = DᵀD, with D the decomposition matrix (our own).

**Problem.** For a cellular algebra over a field, three conditions are equivalent: finite global dimension, being quasi-hereditary, and Cartan determinant 1 (König and Xi).

**How the definition helps.** Since C = DᵀD, the Cartan determinant is a positive integer. Finite global dimension makes it ±1 by Eilenberg's theorem, hence 1 (our own summary). König and Xi show that determinant 1 forces quasi-heredity, and quasi-hereditary algebras have finite global dimension.

**Wikipedia:** [Cellular algebra](https://en.wikipedia.org/wiki/Cellular_algebra). It says: “A is quasi-hereditary (i.e. its module category is a highest-weight category).”

**Sources:**

- [S. König and C. C. Xi, Cellular algebras and quasi-hereditary algebras: a comparison, Electronic Research Announcements of the American Mathematical Society (1999)](https://doi.org/10.1090/S1079-6762-99-00063-3)

### Green sequences filter modules

**Remember:** Climb the chain of torsion classes; each step adds one brick.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings). arXiv math.RT, math.RA. Level 4: research.

**Definition.** A torsion class is a class of finite-dimensional modules over a finite-dimensional algebra that contains zero and is closed under quotients and extensions. A maximal green sequence is a finite chain of torsion classes from zero to all modules that cannot be refined, so each step adds as little as possible.

**Problem.** Fix a maximal green sequence and label each step by its brick, a module whose nonzero endomorphisms are invertible. Every nonzero module then has a filtration, unique up to isomorphism, whose successive quotients are each filtered by copies of one step's brick, in strictly increasing step order.

**How the definition helps.** Each torsion class cuts a module at its largest submodule in that class, so the chain of classes gives a chain of cuts (our own explanation). Deleting repeated cuts gives the filtration. The brick labeling theorem shows that the factor at each step is filtered by copies of its brick.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Moreover, this filtration is unique up-to-isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Higher Auslander algebras match cluster tilting modules one to one

**Remember:** Replace two by d plus one, and Auslander's correspondence goes higher.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings), 16E10, 16G70. arXiv math.RT. Level 4: research.

**Definition.** A d-Auslander algebra is a finite-dimensional algebra with global dimension at most d + 1 and dominant dimension at least d + 1; d = 1 gives the Auslander algebras. A finite-dimensional module M is d-cluster tilting if the modules with no Ext in degrees 1 to d − 1 against M, on either side, are exactly the summands of finite sums of copies of M.

**Problem.** Iyama's correspondence sends a d-cluster tilting pair (Λ, M) to End(M)ᵒᵖ and gives a bijection from equivalence classes of such pairs to Morita classes of d-Auslander algebras. At d = 1 it is Auslander's correspondence.

**How the definition helps.** Replacing the bound 2 by d + 1 in both inequalities is all it takes to state the higher correspondence. For d = 1 the Ext condition is empty, so M must contain every indecomposable module, as in Auslander's case. The work goes into Iyama's higher Auslander–Reiten theory (our own summary).

**Paper or page:** [Nakayama-type phenomena in higher Auslander--Reiten theory](https://arxiv.org/abs/2402.15889v1). It says: “There is a one-to-one correspondence between equivalence classes of d-Auslander–Iyama pairs and Morita equivalence classes of d-Auslander algebras.”

**Sources:**

- [O. Iyama, Auslander correspondence, Advances in Mathematics (2007)](https://doi.org/10.1016/j.aim.2006.06.003)

### Semibricks give simple objects

**Remember:** Choose simple pieces that have no maps between them.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings). arXiv math.RT, math.RA. Level 4: research.

**Definition.** A brick is a nonzero finite-dimensional module whose nonzero endomorphisms are invertible. A semibrick is a set of bricks with no nonzero maps between distinct members, so they behave like simple modules under Schur's lemma. A wide subcategory is a full additive subcategory closed under isomorphisms, kernels, cokernels and extensions.

**Problem.** Sending each wide subcategory to its simple objects, up to isomorphism, gives a bijection with semibricks. The inverse takes all modules having a finite chain of submodules whose successive quotients belong to the semibrick.

**How the definition helps.** No maps between distinct bricks is what Schur's lemma gives for simple objects, so a semibrick can be the set of simples of a wide subcategory (our own explanation). For a single arrow, the two indecomposable projectives are bricks with a nonzero map between them, so they cannot both be simple there (our own). The theorem proves that the modules filtered by a semibrick form a wide subcategory with exactly those simples.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “The map S(−): wide-A → sbrick-A is a bijection with inverse Filt(−): sbrick-A → wide-A.”

**Sources:** none listed. No primary source with a working link was found.

### Eventually constant roots extend Gabriel's theorem to infinite quivers

**Remember:** Let dimensions settle to a constant along infinite tails.

*Makes the theorem clean to state or prove.* MSC 16G20 (Representations of quivers and partially ordered sets), 16G60. arXiv math.RT. Level 4: research.

**Definition.** On the listed trees, label the vertices by nonnegative integers that become constant far out along every infinite end. The Euler–Tits form is the sum of squared labels minus the products across edges, computed on a finite connected subtree that contains every branch point and every change of label. A positive root is such a labeling with form equal to one.

**Problem.** Let the quiver be connected, of type Aₙ, Dₙ, E₆, E₇, E₈, A∞, A∞,∞ or D∞, and eventually outward, meaning that far along each infinite end the arrows point away from the rest. Then every representation is a direct sum of indecomposables, and taking dimensions matches indecomposables one to one with positive roots.

**How the definition helps.** Constant tails let roots have infinite support, and the finite subtree makes the form well defined (our own). For example, a ray of one-dimensional spaces with identity arrows has constant label one and form n − (n − 1) = 1 on n vertices. The decomposition and root correspondence theorem for infinite quivers gives existence and uniqueness for all listed types.

**Paper or page:** [Gabriel's Theorem for Infinite Quivers](https://arxiv.org/abs/2312.09904v1). It says: “In this case the indecomposables are all locally finite-dimensional and eventually constant and correspond bijectively to the positive roots (i.e. those of length 1).”

**Sources:**

- [Nathaniel Gallup, Stephen Sawin, Gabriel's Theorem for Infinite Quivers, arXiv:2312.09904 (2023)](https://arxiv.org/abs/2312.09904v1)
- [Nathaniel Gallup, Stephen Sawin, Gabriel’s Theorem for Infinite Quivers, Algebras and Representation Theory (2025)](https://doi.org/10.1007/s10468-025-10349-2)

### Gorenstein-projective modules need reflexivity beyond two dual extension-vanishing conditions

**Remember:** Check evaluation into the double dual even when both extension tests pass.

*Rules out counterexamples. Confidence: medium.* MSC 16G50 (Cohen-Macaulay modules in associative algebras), 16E05. arXiv math.RT. Level 4: research.

**Definition.** Over an Artin algebra A, write M\* = Hom(M, A). A finitely generated module M is semi-Gorenstein-projective if Extⁱ(M, A) = 0 for all i &gt; 0. It is reflexive if the evaluation map M → M\*\* is an isomorphism, a test that the Ext conditions on M and M\* do not imply.

**Problem.** A finitely generated module over an Artin algebra is Gorenstein-projective exactly when it and its A-dual pass the extension test and it is reflexive. Equivalently, it occurs as a cycle in an exact complex of finitely generated projectives that stays exact after A-dualizing.

**How the definition helps.** Reflexivity removes modules that pass both Ext tests but fail the double-dual test. The paper's three-dimensional module M(q), with q of infinite multiplicative order, passes both Ext tests, but its map to M\*\* is not even injective. The main step shows that the three tests build a doubly infinite projective complex that stays exact under duality.

**Paper or page:** [Claus Michael Ringel's main contributions to Gorenstein-projective modules](https://arxiv.org/abs/2505.12637v1), [Claus Michael Ringel's main contributions to Gorenstein-projective modules](https://arxiv.org/abs/2505.12637v1). It says: “If the multiplicative order o(q) is infinite, then M(q) is bi-semi-Gorenstein-projective with M(q)∗ ≅ (x−y)Λ, but not torsionless, thus M(q) is not Gorenstein-projective.”

**Sources:**

- [Nan Gao, Xue-Song Lu, Pu Zhang, Claus Michael Ringel's main contributions to Gorenstein-projective modules, arXiv:2505.12637 (2025)](https://arxiv.org/abs/2505.12637v1)

### Tilting pairs include zero

**Remember:** The projective part fills the count, so M may even be zero.

*Makes the theorem clean to state or prove.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers). arXiv math.RT, math.RA. Level 4: research.

**Definition.** A τ-tilting pair (M, P) over a finite-dimensional algebra is a finite-dimensional module M with Hom(M, τM) = 0 and a finitely generated projective P with Hom(P, M) = 0. The numbers of distinct indecomposable summands of M and of P add up to the number of simple modules, so P fills the count when M is small.

**Problem.** Basic τ-tilting pairs, with no repeated indecomposable summands, correspond one to one with functorially finite torsion classes. The class of a pair (M, P) consists of the quotients of finite direct sums of copies of M.

**How the definition helps.** P only completes the count and adds no quotients to the torsion class, so M may be small or zero (our own). For example, M = 0 with P the sum of one copy of each indecomposable projective gives the zero class (our own). The correspondence theorem proves that the class determines the basic pair.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “There are bijections between the sets τ-tp-A, ftors-A, fwide-A and fsbrick-A.”

**Sources:**

- [Takashi Adachi, Osamu Iyama and Idun Reiten, τ-tilting theory](https://doi.org/10.1112/s0010437x13007422)

### τ-rigid modules have no self-extensions by the Auslander–Reiten formula

**Remember:** If the whole map space vanishes, so does its quotient.

*True by definition.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers), 16G10. arXiv math.RT. Level 4: research.

**Definition.** A finite-dimensional module M is τ-rigid if Hom(M, τM) = 0, where τ is the Auslander–Reiten translate. It is rigid if Ext¹(M, M) = 0, so every short exact sequence of M by M splits. The Auslander–Reiten formula makes the dual of Ext¹(M, M) a quotient of Hom(M, τM) (our own).

**Problem.** A τ-rigid module over a finite-dimensional algebra is rigid.

**How the definition helps.** A quotient of the zero space is zero, so Ext¹(M, M) = 0. The work sits in the Auslander–Reiten formula, which identifies the dual of Ext¹(M, M) with Hom(M, τM) modulo maps that factor through injectives (our own explanation).

**Paper or page:** [$τ$-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Let M be an A-module. If M is τ-rigid then M is rigid.”

**Sources:**

- [Hipolito Treffinger, $τ$-tilting theory -- An introduction, arXiv:2106.00426 (2022)](https://arxiv.org/abs/2106.00426v3)

### Nakayama automorphisms as dual-bimodule twists are unique up to inner automorphisms

**Remember:** The dual bimodule remembers the twist up to conjugation.

*True by definition.* MSC 16L60 (Quasi-Frobenius rings), 16D20. arXiv math.RA, math.QA. Level 4: research.

**Definition.** For a finite-dimensional Frobenius algebra A and automorphism ν, give A(ν) the usual left action and right action x · b = xν(b). A Nakayama automorphism is an automorphism ν for which A(ν) is isomorphic to the dual bimodule A\*.

**Problem.** For a finite-dimensional Frobenius algebra, two Nakayama automorphisms ν and ν′ satisfy ν′(b) = u⁻¹ν(b)u for a unit u, that is, an invertible element.

**How the definition helps.** Both twists are isomorphic to the dual, so a bimodule isomorphism φ connects them. Left linearity makes φ right multiplication by the unit u = φ(1) (our own). Right linearity gives ν(b)u = uν′(b) for every b, which yields the stated conjugation (our own).

**Paper or page:** [Picard groups of quasi-Frobenius algebras and a question on Frobenius strongly graded algebras](https://arxiv.org/abs/2309.10169v2). It says: “Moreover, any such ν is the Nakayama automorphism of R associated with a Frobenius form.”

**Sources:**

- [Picard groups of quasi-Frobenius algebras and a question on Frobenius strongly graded algebras (arXiv 2309.10169v2)](https://arxiv.org/abs/2309.10169v2)

### The bimodule definition of Frobenius extensions makes induction equal coinduction

**Remember:** One bimodule isomorphism turns both ways of extending scalars into one.

*True by definition.* MSC 16L60 (Quasi-Frobenius rings), 16D20. arXiv math.RA, math.QA. Level 4: research.

**Definition.** Let B ⊆ A be unital rings with A finitely generated projective as a left B-module. The extension is Frobenius if A is isomorphic, as an (A, B)-bimodule, to its B-dual Homᵦ(A, B) of left B-linear maps, with actions (a·f·b)(x) = f(xa)b.

**Problem.** Let B ⊆ A be a Frobenius extension and M a left B-module. Induction A ⊗ M and coinduction Hom(A, M), both over B, are naturally isomorphic left A-modules.

**How the definition helps.** Finite projectivity identifies Homᵦ(A,M) naturally with Homᵦ(A,B) ⊗ᵦ M (our own). Substituting the Frobenius bimodule isomorphism gives A ⊗ᵦ M and respects the left A-action.

**Wikipedia:** [Frobenius algebra](https://en.wikipedia.org/wiki/Frobenius_algebra). It says: “are naturally isomorphic as A-modules”

**Sources:** none listed. No primary source with a working link was found.

### Generalized Bernstein filtrations give Bernstein's inequality on singular rings

**Remember:** Weight an operator by its degree shift plus a multiple of its order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S32 (Rings of differential operators (associative algebraic aspects)), 16W70, 13N10. arXiv math.AC, math.RA. Level 4: research.

**Definition.** For a connected graded algebra R, fix an integer w larger than the degrees of its homogeneous generators. Give each homogeneous differential operator δ the weight deg(δ) + w·ord(δ), its degree shift plus w times its order, and let filtration step n span the operators of weight at most n.

**Problem.** Let R be the invariant ring of a finite group acting linearly on a polynomial ring in characteristic zero. Then every nonzero finitely generated D-module has dimension at least dim R, which is Bernstein's inequality, and holonomic D-modules have finite length.

**How the definition helps.** The weighted filtration gives a dimension for D-modules on singular graded rings, where the classical Bernstein filtration is not available. The paper shows that this dimension does not depend on the choice of filtration. A key step is that D is linearly simple for these filtrations, a quantitative form of simplicity.

**Paper or page:** [Bernstein's inequality and holonomicity for certain singular rings](https://arxiv.org/abs/2103.02986v2), [Bernstein's inequality and holonomicity for certain singular rings](https://arxiv.org/abs/2103.02986v2). It says: “We also show that holonomic D-modules, in this context, have finite length. We obtain these results using a more general version of Bernstein filtrations.”

**Sources:**

- [Josep Àlvarez Montaner, Daniel J. Hernández, Jack Jeffries, Luis Núñez-Betancourt, Pedro Teixeira, Emily E. Witt, Bernstein's inequality and holonomicity for certain singular rings, arXiv:2103.02986 (2021)](https://arxiv.org/abs/2103.02986v2)

### Weak s-unitality is what Hilbert's basis theorem needs

**Remember:** Recover each element by adding integer multiples of its iterated left multiples.

*Rules out counterexamples. Confidence: medium.* MSC 16S36 (Ordinary and skew polynomial rings and semigroup rings), 17A01. arXiv math.RA. Level 4: research.

**Definition.** A left distributive ring R is weakly left s-unital if every element a is rebuilt from its own left multiples, which acts as a local left identity. That is, a is an integer combination of products r₁(r₂(⋯(rₙa)⋯)) with n ≥ 1 and all rᵢ ∈ R.

**Problem.** Let R be a left distributive ring, which need not be associative or have an identity. Then R\[x\] is left Noetherian if and only if R is left Noetherian and weakly left s-unital.

**How the definition helps.** The local identity lets the leading-coefficient argument of Hilbert's basis theorem run (our own reading). Our own example of failure is ℤ/2 with zero multiplication: it is Noetherian, but every additive subgroup of R\[x\] is an ideal, so R\[x\] has an infinite increasing chain of ideals. Corollary 50 shows that the condition is both necessary and sufficient.

**Paper or page:** [Ore Extensions of Abelian Groups with Operators](https://arxiv.org/abs/2410.16761v3). It says: “Suppose that R is a left distributive ring. Then R\[x\] is left Noetherian if and only if R is left Noetherian and weakly left s-unital.”

**Sources:**

- [Per Bäck, Patrik Lundström, Johan Öinert, Johan Richter, Ore Extensions of Abelian Groups with Operators, arXiv:2410.16761 (2024), J. Algebra 686 (2026), 176-194](https://arxiv.org/abs/2410.16761v3)

### Koszul algebras have formal Ext algebras by a grading argument

**Remember:** Diagonal Ext leaves no room for higher products.

*True by definition.* MSC 16S37 (Quadratic and Koszul algebras), 16E45. arXiv math.RA, math.KT. Level 4: research.

**Definition.** A connected graded algebra A over a field k is Koszul when Ext(k, k) lies on the diagonal: Extⁱ(k, k) sits only in internal weight i, for every i, with duals of generators given positive weight.

**Problem.** For Koszul A, the differential graded algebra of derived endomorphisms of k is formal. In a minimal model respecting internal weights, every operation mₙ on Ext(k,k) vanishes for n ≥ 3.

**How the definition helps.** Each higher product mₙ keeps internal weight but shifts cohomological degree by 2 − n, so for n ≥ 3 it sends diagonal classes off the diagonal, where Ext is zero (our own). This uses a minimal model that respects the internal weight, which can be chosen (our own). The work goes into proving that algebras of interest, such as polynomial rings, are Koszul.

**nLab:** [Koszul duality](https://ncatlab.org/nlab/show/Koszul+duality). It says: “In this case, B=Ext(L,L) is forced to be formal (if it had any interesting A∞ operations, they would break the grading)”

**Sources:**

- [S. Priddy, Koszul resolutions, Transactions of the AMS 152 (1970)](https://doi.org/10.1090/s0002-9947-1970-0265437-8)

### Artin–Zhang's χ condition is exactly what balanced dualizing complexes need

**Remember:** Ext from k into any finitely generated module stays finite.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16E65, 14A22. arXiv math.RA. Level 4: research.

**Definition.** A Noetherian connected graded algebra A satisfies χ if, for every finitely generated graded module M and every j ≥ 0, graded Extʲ(k, M), summed over all internal shifts, is finite-dimensional. This is the finiteness that local cohomology needs (our own).

**Problem.** A has a balanced dualizing complex exactly when A and its opposite satisfy χ and have finite local cohomological dimension. The dualizing complex is then the graded dual of the local cohomology of A.

**How the definition helps.** Under χ the pieces of local cohomology are finite-dimensional, so its graded dual is a candidate dualizing complex (our own summary). Local cohomology is the derived functor of taking elements killed by a power of A≥1 (our own gloss). Van den Bergh proves that this candidate dualizes.

**Paper or page:** [Existence of balanced dualizing dg-modules](https://arxiv.org/abs/2506.02398). It says: “admits a balanced dualizing dg-module if and only if the graded k-algebra H⁰(A) and its opposite algebra H⁰(A)<sup>op</sup> satisfy Artin-Zhang's condition χ and have finite local cohomological dimension”

**Sources:**

- [M. Van den Bergh, Existence theorems for dualizing complexes over non-commutative graded and filtered rings, Journal of Algebra 195 (1997) 662–679](https://doi.org/10.1006/jabr.1997.7052)
- [M. Artin and J. J. Zhang, Noncommutative projective schemes, Advances in Mathematics 109 (1994) 228–287](https://doi.org/10.1006/aima.1994.1087)

### Excluding twelve parameter points makes every Sklyanin algebra a regular noetherian domain

**Remember:** Remove twelve bad points and Sklyanin algebras behave like k\[x,y,z\].

*Rules out counterexamples.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 14A22, 14H52. arXiv math.RA, math.AG. Level 4: research.

**Definition.** Let \[a:b:c\] be a point of ℙ² over a field k with a primitive cube root of unity. The Sklyanin algebra is k⟨x,y,z⟩ modulo ayz + bzy + cx², azx + bxz + cy² and axy + byx + cz². It is non-degenerate when \[a:b:c\] avoids a set 𝔇 of 12 points: the three coordinate points and the points with a³ = b³ = c³.

**Problem.** Every non-degenerate Sklyanin algebra is a noetherian domain. It is Artin–Schelter regular of global dimension 3, a noncommutative analogue of k\[x,y,z\], with the same dimension as k\[x,y,z\] in each degree.

**How the definition helps.** The definition removes exactly the parameters where these properties fail. At \[0:0:1\] the algebra is k⟨x,y,z⟩/(x², y², z²), so x is a zero divisor, and Walton showed that every degenerate Sklyanin algebra has zero divisors and is not noetherian on either side. The non-degenerate case rests on Artin, Tate and Van den Bergh's study of point modules on an elliptic curve.

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “Whenever \[a:b:c\] ∈ 𝔇 we call S<sub>a,b,c</sub> a degenerate Sklyanin algebra and whenever \[a:b:c\] ∈ P² ∖ 𝔇 we say the algebra is non-degenerate.”

**Sources:**

- [M. Artin, J. Tate and M. Van den Bergh, Some algebras associated to automorphisms of elliptic curves, The Grothendieck Festschrift, Vol. I, Progress in Mathematics 86 (1990); Birkhäuser reprint 2007](https://doi.org/10.1007/978-0-8176-4574-8_3)
- [J. Tate and M. Van den Bergh, Homological properties of Sklyanin algebras, Inventiones Mathematicae 124 (1996) 619–648](https://doi.org/10.1007/s002220050065)
- [S. P. Smith, “Degenerate” 3-dimensional Sklyanin algebras are monomial algebras, Journal of Algebra 358 (2012) 74–86](https://doi.org/10.1016/j.jalgebra.2012.01.039)
- [C. Walton, Degenerate Sklyanin algebras and generalized twisted homogeneous coordinate rings, Journal of Algebra 322 (2009) 2508–2527](https://doi.org/10.1016/j.jalgebra.2009.02.024)

### Point modules defined by Hilbert series turn noncommutative points into a scheme

**Remember:** A point module is a walk of points, one step per degree.

*Makes the theorem clean to state or prove.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 14A22. arXiv math.RA, math.AG. Level 4: research.

**Definition.** Let A be a graded algebra generated in degree one by a finite-dimensional space V. A point module is a graded module M₀ ⊕ M₁ ⊕ ⋯ generated by M₀ with every Mₙ one-dimensional. Each step from the line Mₙ to the line Mₙ₊₁ is cut out by V, so it picks a point of ℙ(V\*) (our own).

**Problem.** Truncated point modules of length d + 1, which stop at degree d, form a closed subscheme of the product of d copies of ℙ(V\*). For a quadratic Artin–Schelter regular algebra of dimension 3, the point modules form ℙ² or a cubic curve in ℙ², possibly singular or reducible.

**How the definition helps.** A truncated module is a list of d points, and a relation of degree d acts as zero exactly when its multilinear form vanishes at that list, which is a closed condition (our own summary). The hard part is the Artin–Tate–Van den Bergh theorem that, for these regular algebras, the schemes stabilize to the graph of an automorphism.

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “Point modules are a way of finding projective geometry in the underlying structure of noncommutative graded rings.”

**Paper or page:** [Algebras Associated to Inverse Systems of Projective Schemes](https://arxiv.org/abs/2406.17139). It says: “the set of isomorphism classes of truncated right point modules for T(V) of length d + 1, and the d-fold cartesian product (of sets) ℙ(V\*)<sup>×d</sup>”

**Sources:**

- [M. Artin, J. Tate and M. Van den Bergh, Some algebras associated to automorphisms of elliptic curves, The Grothendieck Festschrift, Vol. I, Progress in Mathematics 86 (1990); Birkhäuser reprint 2007](https://doi.org/10.1007/978-0-8176-4574-8_3)

### The Gorenstein condition makes the Hilbert series of a regular algebra palindromic

**Remember:** The resolution of k reads the same backwards, so the Hilbert series does.

*True by definition.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16E65. arXiv math.RA. Level 4: research.

**Definition.** A connected graded algebra A is Artin–Schelter regular of dimension d if it has global dimension d, polynomial growth (dim Aₙ bounded by a polynomial in n) and the Gorenstein property. The Gorenstein property says that Extⁱ(k, A) is zero for i ≠ d and is k shifted by some degree l for i = d. So dualizing the minimal resolution of k gives a resolution of k again, read backwards (our own).

**Problem.** The Hilbert series of A, whose n-th coefficient is the dimension of Aₙ, is 1/p(t) for a polynomial p with tˡ p(1/t) = (−1)ᵈ p(t). For example, three generators and three quadratic relations in dimension 3 force p(t) = (1 − t)³.

**How the definition helps.** Both resolutions give the reciprocal Hilbert series p(t) as an alternating sum of tʲ over generator degrees j, and reversal exchanges j with l − j and adds sign (−1)ᵈ. This gives tˡ p(1/t) = (−1)ᵈ p(t). In the example the degrees give p(t) = 1 − 3t + 3t² − t³ (our own).

**nLab:** [Artin-Schelter regular algebra](https://ncatlab.org/nlab/show/Artin-Schelter+regular+algebra). It says: “is Gorenstein: Ext<sub>A</sub><sup>i</sup>(\_A k,A) = 0 for i≠d and Ext<sub>A</sub><sup>d</sup>(\_A k,A) = k<sub>A</sub>.”

**Sources:**

- [M. Artin and W. F. Schelter, Graded algebras of global dimension 3, Advances in Mathematics 66 (1987) 171–216](https://doi.org/10.1016/0001-8708(87)90034-X)

### The homological determinant gives Watanabe's theorem for noncommutative invariant rings

**Remember:** Measure the determinant where the Gorenstein property lives, in local cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16W22, 16E65. arXiv math.RA. Level 4: research.

**Definition.** Let A be a Noetherian connected graded Artin–Schelter Gorenstein algebra of injective dimension d, with positive-degree ideal 𝔪. The top local cohomology Hᵈ𝔪(A) has a one-dimensional socle, and a graded automorphism acts on it by a scalar; the homological determinant is the inverse of that scalar.

**Problem.** Let a finite group H, with \|H\| invertible in k, act by graded automorphisms of homological determinant one on a Noetherian Artin–Schelter Gorenstein k-algebra. Then the invariant ring is Artin–Schelter Gorenstein, generalizing Watanabe's theorem.

**How the definition helps.** Trivial homological determinant makes the induced action on the local cohomology socle trivial (our own). Jørgensen and Zhang’s invariant ring theorem then gives the Gorenstein property. For a polynomial ring this determinant is the ordinary determinant (our own).

**Paper or page:** [Invariants of Unimodular Quadratic Polynomial Poisson Algebras of Dimension 3](https://arxiv.org/abs/2302.13588), [Invariants of Unimodular Quadratic Polynomial Poisson Algebras of Dimension 3](https://arxiv.org/abs/2302.13588). It says: “Let A be a Noetherian Artin-Schelter Gorenstein 𝕜-algebra and let H be a finite subgroup of the graded automorphism group of A. If hdet h = 1 for all h ∈ H, then A<sup>H</sup> is Artin-Schelter Gorenstein.”

**Sources:**

- [P. Jørgensen and J. J. Zhang, Gourmet's guide to Gorensteinness, Advances in Mathematics 151 (2000) 313–345](https://doi.org/10.1006/aima.1999.1897)

### The Nakayama automorphism restores Poincaré duality for algebras that are not Calabi–Yau

**Remember:** A twist by ν turns failed Calabi–Yau duality into duality.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16E40, 16E65. arXiv math.RA. Level 4: research.

**Definition.** A is twisted Calabi–Yau of dimension d if it has a finite resolution by finitely generated projective bimodules and bimodule Extⁱ(A, A ⊗ Aᵒᵖ) is zero for i ≠ d and is Aν for i = d. Here Aν is A with the right action twisted by an automorphism ν, the Nakayama automorphism, and A is Calabi–Yau when ν can be taken inner (our own).

**Problem.** For h ∈ k\[x\], the algebra Aₕ generated by x, y with yx − xy = h(x) is twisted Calabi–Yau of dimension two with ν(x) = x and ν(y) = y + h′, so twisted Poincaré duality holds. In characteristic zero it is Calabi–Yau only for constant h.

**How the definition helps.** Allowing the twist ν lets one duality statement cover every Aₕ. Van den Bergh's duality theorem turns the Ext condition into twisted Poincaré duality between Hochschild cohomology and homology. The units of Aₕ are scalars, so ν is not inner when h′ ≠ 0, and then Aₕ is not Calabi–Yau (our own).

**Paper or page:** [Noncommutative Algebra and Representation Theory: Symmetry, Structure &amp; Invariants](https://arxiv.org/abs/2307.16808). It says: “The algebra 𝖠<sub>h</sub> is ν-twisted Calabi-Yau with Nakayama automorphism satisfying ν(x)= x and ν(y)=y+h′. Thus, the twisted Poincaré duality holds for 𝖠<sub>h</sub>.”

**Sources:**

- [M. Van den Bergh, A relation between Hochschild homology and cohomology for Gorenstein rings, Proceedings of the American Mathematical Society 126 (1998) 1345–1348](https://doi.org/10.1090/s0002-9939-98-04210-5)
- [S. A. Lopes, Noncommutative Algebra and Representation Theory: Symmetry, Structure &amp; Invariants, Communications in Mathematics 32 (2024); arXiv:2307.16808](https://arxiv.org/abs/2307.16808)

### Zhang twists keep the graded module category, so they keep regularity

**Remember:** A twist changes the multiplication but not the graded modules.

*True by definition.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16W50. arXiv math.RA. Level 4: research.

**Definition.** The Zhang twist of a graded algebra A by a graded automorphism σ keeps the graded vector space and uses the product a ∗ b = aσᵐ(b) for a of degree m. A graded module twists the same way, v ∗ a = vσⁿ(a) for v of degree n (our own).

**Problem.** For a connected nonnegatively graded algebra A, a Zhang twist by a graded automorphism has an equivalent graded module category. The twist is Noetherian, or Artin–Schelter regular, exactly when A is.

**How the definition helps.** The module twist is a functor, and twisting back by σ⁻¹ inverts it, so the graded module categories are equivalent (our own). Zhang's theorem transfers Noetherianity and Artin–Schelter regularity through this equivalence for connected nonnegatively graded algebras.

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “These two cases are Zhang twists of each other and therefore have many properties in common.”

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “The following are equivalent: A and B are twist-equivalent. Gr A is isomorphic to Gr B.”

**Sources:**

- [J. J. Zhang, Twisted graded algebras and equivalences of graded categories, Proceedings of the London Mathematical Society s3-72 (1996) 281–311](https://doi.org/10.1112/plms/s3-72.2.281)
- [N. Cooney and J. E. Grabowski, Automorphism groupoids in noncommutative projective geometry, arXiv:1807.06383](https://arxiv.org/abs/1807.06383)

### Condition (K) makes all Leavitt path algebra ideals graded

**Remember:** Two ways round every cycle, and all ideals come from the graph.

*Rules out counterexamples. Confidence: medium.* MSC 16S88 (Leavitt path algebras), 16W50, 16D25. arXiv math.RA. Level 4: research.

**Definition.** A return path at a vertex v is a nonempty directed path from v back to v that does not pass through v in between. Condition (K) asks that no vertex has exactly one return path, so every cycle has a second way round.

**Problem.** Let E be a finite directed graph and K a field. Every ideal of the Leavitt path algebra Lₖ(E) is graded if and only if E satisfies Condition (K).

**How the definition helps.** A cycle c without exits, in the graph or in a quotient graph, gives a Laurent polynomial corner, and the ideal generated by v + c at its base v is not graded. Condition (K) excludes such cycles in every quotient by a hereditary saturated vertex set (our own). The graded ideal theorem shows that this is the only obstruction (our own).

**Paper or page:** [Classification and Ideal Lattices of Leavitt Path Algebras](https://arxiv.org/abs/2509.25464v1), [Classification and Ideal Lattices of Leavitt Path Algebras](https://arxiv.org/abs/2509.25464v1). It says: “Let E be a finite directed graph and L(E) its associated Leavitt path algebra over a field K. All ideals of L(E) are graded if and only if E satisfies Condition (K).”

**Sources:**

- [Yvan Grinspan, Seth Yoo, Classification and Ideal Lattices of Leavitt Path Algebras, arXiv:2509.25464 (2025)](https://arxiv.org/abs/2509.25464v1)

### Exits and connectivity characterize simple Leavitt path algebras

**Remember:** A cycle with no way out hides a Laurent polynomial ring.

*Rules out counterexamples. Confidence: medium.* MSC 16S88 (Leavitt path algebras), 16D30, 05C20. arXiv math.RA. Level 4: research.

**Definition.** A cycle in a directed graph has an exit when some vertex on it emits an edge other than the next edge of the cycle. Condition (L) asks every cycle to have an exit.

**Problem.** Let E be a nonempty finite directed graph and K a field. Its Leavitt path algebra is simple exactly when every vertex reaches every cycle and every sink, and every cycle has an exit.

**How the definition helps.** Exits remove the one obstruction from cycles, so simplicity reduces to reachability. Without an exit, a single loop gives K\[x, x⁻¹\], which is not simple; without reachability, two vertices and no edges give K × K, which is not simple (our own examples). Abrams and Aranda Pino prove the converse by reducing nonzero ideals to vertices or cycles (our own reading).

**Paper or page:** [Monoids, dynamics and Leavitt path algebras](https://arxiv.org/abs/2409.00289v1). It says: “The Leavitt path algebra Lₖ(E) is a simple ring if and only if (1) Every vertex in E connects to every cycle and every sink of E, and (2) Every cycle in E has an exit.”

**Sources:**

- [Gene Abrams, Roozbeh Hazrat, Monoids, dynamics and Leavitt path algebras, arXiv:2409.00289 (2024)](https://arxiv.org/abs/2409.00289v1)
- [Gene Abrams, Gonzalo Aranda Pino, The Leavitt path algebra of a graph, J. Algebra 293 (2005), 319-334](https://doi.org/10.1016/j.jalgebra.2005.07.028)

### Gabriel filters of ideals classify hereditary torsion classes of modules

**Remember:** A hereditary torsion class is decided by which cyclic modules R/I it contains.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S90 (Torsion theories; radicals on module categories (associative algebraic aspects)), 18E10, 18E40. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A Gabriel filter is a nonempty family F of left ideals, closed under larger ideals and finite intersections, that contains (I : r) = {s ∈ R : sr ∈ I} for each I ∈ F and r ∈ R. It also contains J when some I ∈ F has (J : r) ∈ F for every r ∈ I. These are the closure rules of a hereditary torsion class, written for the cyclic modules R/I (our own).

**Problem.** For any ring R, the hereditary torsion classes in R-Mod correspond one-to-one to the Gabriel filters of left ideals of R. The class 𝒯 goes to the filter of ideals I with R/I in 𝒯.

**How the definition helps.** Every module is a sum of cyclic submodules, so a hereditary torsion class is fixed by which R/I it contains (our own). Closure under submodules and quotients gives the first rules, and closure under extensions gives the last rule (our own). The work goes into checking that the torsion modules of a Gabriel filter are closed under extensions.

**nLab:** [Gabriel filter](https://ncatlab.org/nlab/show/Gabriel+filter). It says: “Given a Gabriel filter G, the class of all G-torsion modules (see uniform filter) is a hereditary torsion class.”

**Paper or page:** [Classes of Preradicals Induced by Relative Injectivity, Corollary 3](https://arxiv.org/abs/1511.01222). It says: “Let σ be a preradical over R-Mod. Then 𝕋\_σ is an hereditary torsion class if and only if 𝕀\_σ is a Gabriel filter.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)
- [Classes of preradicals induced by relative injectivity, arXiv:1511.01222](https://arxiv.org/abs/1511.01222)

### A variant of the Hopf module theorem holds exactly for Hopf algebras

**Remember:** The antipode is exactly what makes free Hopf modules all Hopf modules.

*Rules out counterexamples. Confidence: medium.* MSC 16T05 (Hopf algebras and their applications), 16T15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A Hopf algebra is a bialgebra B with an antipode, a linear map S that is a convolution inverse of the identity: m(S ⊗ id)Δ = ηε = m(id ⊗ S)Δ. Here m, Δ, η and ε are the product, coproduct, unit and counit.

**Problem.** For a bialgebra B, the functor −⊗B into Hopf trimodules over B is an equivalence of categories if and only if B has an antipode.

**How the definition helps.** The antipode builds the inverse functor in the structure theorem for Hopf trimodules (our own explanation). In the monoid bialgebra k\[ℕ\], the generator is group-like but not invertible, so there is no antipode (our own). The quoted criterion then says the functor is not an equivalence for k\[ℕ\].

**Paper or page:** [Reconstruction of module categories in the infinite and non-rigid settings](https://arxiv.org/abs/2409.00793). It says: “Let B be a bialgebra. The functor −⊗B … is an equivalence if and only if B admits an antipode.”

**Sources:**

- [Mateusz Stroiński and Tony Zorman, Reconstruction of module categories in the infinite and non-rigid settings, arXiv:2409.00793 (2024)](https://arxiv.org/abs/2409.00793)

### Associator logarithms are Lie series

**Remember:** Group-like multiplication becomes primitive addition under the logarithm.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 17B01. arXiv math.QA. Level 4: research.

**Definition.** In the completed free algebra on two letters over a field of characteristic zero, let Δ be the continuous algebra map with Δ(a) = a ⊗ 1 + 1 ⊗ a on each letter. A series Φ is group-like if its constant term is 1 and ΔΦ = Φ ⊗ Φ; an associator is group-like.

**Problem.** The formal logarithm of an associator is a Lie series, a degree-by-degree sum of iterated brackets of the two letters.

**How the definition helps.** Φ ⊗ 1 and 1 ⊗ Φ commute, so the logarithm of ΔΦ = (Φ ⊗ 1)(1 ⊗ Φ) is log Φ ⊗ 1 + 1 ⊗ log Φ (our own proof). So log Φ is primitive. In characteristic zero, the primitive series of the completed free algebra are exactly the Lie series.

**nLab:** [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator). It says: “is a grouplike element”

**Paper or page:** [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1). It says: “\\Prim(\\widehat{H}) &amp;\\xrightarrow{\\sim} \\operatorname{Grp}(\\widehat{H})”

**Sources:**

- [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1)

### Cleft extensions are crossed products, the trivial bundles of Hopf–Galois theory

**Remember:** A cleaving map is an invertible global section of the bundle.

*Makes the theorem clean to state or prove.* MSC 16T05 (Hopf algebras and their applications), 58B32, 16S35. arXiv math.QA, math.RA. Level 4: research.

**Definition.** An H-comodule algebra A with coinvariants B is cleft when it has a comodule map γ: H → A that is invertible under convolution, γ(h₍₁₎)γ⁻¹(h₍₂₎) = ε(h)1 = γ⁻¹(h₍₁₎)γ(h₍₂₎). The map γ plays the role of a global section of a principal bundle, so it trivializes A as B ⊗ H.

**Problem.** A right H-comodule algebra A over a field is cleft exactly when it is a crossed product of its coinvariants B with H, using a twisted action and a convolution-invertible cocycle. Equivalently, B ⊂ A is H-Galois with a left B-linear, right H-colinear isomorphism A ≅ B ⊗ H.

**How the definition helps.** A normalized cleaving map gives a twisted action and cocycle by convolution (our own). The map b ⊗ h ↦ bγ(h) identifies the resulting crossed product with A. The cleft extension theorem of Doi–Takeuchi and Blattner–Cohen–Montgomery gives the converse and the equivalent normal basis criterion.

**Paper or page:** [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860), [Differential Calculi on Quantum Principal Bundles over Projective Bases](https://arxiv.org/abs/2110.03481). It says: “(i) There exists an invertible 2-cocycle and an action of H on A<sup>co H</sup> such that A≅A<sup>co H</sup> \#\_σ H. (ii) The extension A<sup>co H</sup> ⊂ A is H-cleft. (iii) A<sup>co H</sup> ⊂ A is a H-Galois extension and has the normal basis property.”

**Sources:**

- [Y. Doi and M. Takeuchi, Cleft comodule algebras for a bialgebra, Communications in Algebra 14 (1986) 801–817](https://doi.org/10.1080/00927878608823337)

### Defining Nichols algebras by a maximal ideal forbids primitives above degree one

**Remember:** A new higher primitive would give a larger ideal to remove.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 17B37. arXiv math.QA. Level 4: research.

**Definition.** The Nichols algebra of a Yetter–Drinfeld module V is the braided tensor Hopf algebra T(V), with V primitive, modulo the largest graded braided Hopf ideal that lies in degrees two and higher.

**Problem.** The primitive elements of the Nichols algebra of V are exactly the elements of V. An element x is primitive when Δ(x) = 1 ⊗ x + x ⊗ 1.

**How the definition helps.** The coproduct respects the grading, so primitives are spanned by homogeneous ones; those in degrees two and higher span a Yetter–Drinfeld submodule (our own). If nonzero, it generates a graded braided Hopf ideal in those degrees, whose preimage in T(V) contradicts maximality (our own). Degree-one elements stay primitive, and degree zero has no nonzero primitive (our own).

**Paper or page:** [Eight classes of new Hopf algebras of dimension 128 without the Chevalley property](https://arxiv.org/abs/1701.01991v1). It says: “R(0) = k, R(1) = V, R(1) generates the algebra R, P(R) = V.”

**Sources:** none listed. No primary source with a working link was found.

### Dual coproducts encode product identities

**Remember:** One tensor coefficient holds one product identity.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 11M32. arXiv math.QA, math.NT. Level 4: research.

**Definition.** Encode a linear evaluation φ on words as the series F = ∑ φ(w) w. For the shuffle or the stuffle product ∗, the dual coproduct Δ gives ΔF the coefficient φ(u ∗ v) at u ⊗ v.

**Problem.** Over a commutative ℚ-algebra, a linear evaluation φ with φ(empty word) = 1 preserves ∗ exactly when ΔF = F ⊗ F.

**How the definition helps.** The dual coproduct puts every product identity in one coefficient of ΔF. In our own proof, compare the coefficient of u ⊗ v on both sides. The work for multiple zeta values lies in finding the right coproduct and proving the shuffle or stuffle identity for the evaluation.

**Paper or page:** [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1). It says: “Δ∗◇(Genφ(𝒜)) = Genφ(𝒜) ⊗ Genφ(𝒜).”

**Sources:**

- [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1)

### Faithfully flat Galois extensions give descent for relative Hopf modules

**Remember:** On a principal bundle, equivariant modules upstairs are just modules downstairs.

*Makes the theorem clean to state or prove.* MSC 16T05 (Hopf algebras and their applications), 58B32. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A left H-comodule algebra E with coaction ρ and coinvariants U is H-Galois if x ⊗ y ↦ ρ(x)(1 ⊗ y) is a bijection E ⊗ᵤ E → H ⊗ E, so E is a noncommutative principal bundle over U. A relative Hopf module is a left E-module with a left H-coaction δ satisfying δ(em) = ρ(e)δ(m).

**Problem.** Let U ⊂ E be H-Galois, with E faithfully flat as a right U-module. Then M ↦ E ⊗ M over U is an equivalence from U-modules to relative Hopf modules, with inverse given by taking coinvariants.

**How the definition helps.** The Galois bijection identifies the relative Hopf module compatibility law with descent data for U → E (our own). Faithfully flat descent therefore identifies these objects with left U-modules. Extension of scalars and coinvariants give the two functors.

**nLab:** [Schneider's theorem](https://ncatlab.org/nlab/show/Schneider%27s+theorem). It says: “Hence the categories of comodules are equivalent and the theorem hence boils down to the standard faithfully flat descent (for noncommutative rings) or comonadicity criterium in comonadic version.”

**Sources:**

- [H.-J. Schneider, Principal homogeneous spaces for arbitrary Hopf algebras, Israel Journal of Mathematics 72 (1990) 167–195](https://doi.org/10.1007/BF02764619)

### Quantum torsors recover their Hopf algebra from the Galois object alone

**Remember:** A torsor knows its structure group, so you need not supply it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16T05 (Hopf algebras and their applications), 58B32. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A quantum torsor is an algebra T with a unital algebra map μ: T → T ⊗ Tᵒᵖ ⊗ T, a ternary operation like x y⁻¹ z (our own gloss), with (μ⊗id⊗id)μ = (id⊗id⊗μ)μ. Multiplying the first two factors of μ(t) gives 1 ⊗ t, and multiplying the last two gives t ⊗ 1.

**Problem.** Every faithfully flat H-Galois object T is a quantum torsor, and the Hopf algebra Hᵣ(T) built from the torsor structure alone is isomorphic to H. Conversely, a faithfully flat quantum torsor is a Galois object over Hᵣ(T).

**How the definition helps.** The coaction and the translation map h ↦ can⁻¹(1⊗h) give μ by applying translation to the coaction’s Hopf factor (our own). Schauenburg’s faithfully flat descent theorem reconstructs Hᵣ(T) inside Tᵒᵖ ⊗ T and identifies it with H for the original Galois object.

**Paper or page:** [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860), [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860). It says: “Let T be a faithfully flat H-Galois object. Then T is a quantum K-torsor with associated map μ:T → T ⊗ Tᵒᵖ ⊗ T defined by”

**Sources:**

- [P. Schauenburg, Hopf-Galois and bi-Galois extensions, in Galois Theory, Hopf Algebras, and Semiabelian Categories, Fields Institute Communications 43 (2004) 469–515](https://doi.org/10.1090/fic/043/22)

### Quasi-Hopf algebras describe monoidal categories with a nontrivial associator

**Remember:** A quasi-fiber functor preserves tensor products with a possible associativity defect.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16T05 (Hopf algebras and their applications), 16T10, 18M15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A quasi-fiber functor from a finite tensor category to finite-dimensional vector spaces is faithful, exact and linear. It carries specified natural isomorphisms F(X)⊗F(Y) ≅ F(X⊗Y) and a compatible unit isomorphism, without requiring the associativity diagram to commute.

**Problem.** The modules over a quasi-Hopf algebra form a monoidal category whose associativity isomorphisms are given by φ, so they need not be trivial. Conversely, a finite tensor category with a quasi-fiber functor is the module category of a quasi-Hopf algebra.

**How the definition helps.** The quasi-bialgebra pentagon makes the action of φ a coherent associator on modules (our own). Conversely, the tensor comparisons of a quasi-fiber functor reconstruct the coproduct, and their associativity defect reconstructs φ. Quasi-Hopf Tannaka reconstruction uses rigidity to produce the quasi-antipode (our own).

**nLab:** [quasi-Hopf algebra](https://ncatlab.org/nlab/show/quasi-Hopf+algebra), [Drinfeld-Kohno theorem](https://ncatlab.org/nlab/show/Drinfeld-Kohno+theorem). It says: “In RCFT, the monoidal categories appearing can be, by Tannaka reconstruction considered as categories of modules of Hopf algebra-like objects where the flexibility of associativity coherence in building a theory were natural thus leading to quasi-Hopf algebras.”

**Sources:**

- [Vladimir Drinfeld, Quasi-Hopf algebras, Algebra i Analiz 1:6 (1989) 114–148 (English: Leningrad Math. J. 1 (1990) 1419–1457)](http://www.mathnet.ru/php/getFT.phtml?jrnid=aa&paperid=53&what=fullt&option_lang=rus) (link not checked)
- [Toshitake Kohno, Monodromy representations of braid groups and Yang-Baxter equations, Ann. Inst. Fourier 37 (1987) 139–160](http://www.numdam.org/item?id=AIF_1987__37_4_139_0)

### Removing products gives Leibniz

**Remember:** Kill products on the left, and only one factor can contribute.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 11M32. arXiv math.QA, math.NT. Level 4: research.

**Definition.** Let H be a connected graded Hopf algebra over ℚ with positive-weight part H₊. The map D<sub>m</sub> applies the coproduct and keeps the left factor only as an indecomposable, its class in the weight-m part of H₊/H₊², so left factors that are products die.

**Problem.** For each m &gt; 0, D<sub>m</sub> is a derivation: D<sub>m</sub>(ab) = D<sub>m</sub>(a)(1 ⊗ b) + (1 ⊗ a)D<sub>m</sub>(b).

**How the definition helps.** In Δ(a)Δ(b), a term whose left factor takes positive weight from both a and b is a product, so it dies (our own). Terms whose left factors both have weight zero lie outside weight m and die too. The surviving terms pair one side with 1 ⊗ a or 1 ⊗ b and give the product rule.

**Paper or page:** [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1). It says: “is a derivation with respect to ∗”

**Sources:**

- [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1)

### Quasitriangular Hopf algebras give solutions of the Yang–Baxter equation

**Remember:** R swaps the coproduct and splits under it, so R braids.

*True by definition.* MSC 16T10 (Bialgebras), 16T25, 18M15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A bialgebra H is quasitriangular if an invertible R in H ⊗ H swaps the coproduct, Δᵒᵖ(h) = R Δ(h) R⁻¹ for all h, and splits under it: (Δ ⊗ id)(R) = R₁₃R₂₃ and (id ⊗ Δ)(R) = R₁₃R₁₂. Here R₁₃ is R placed in the first and third tensor factors.

**Problem.** In a quasitriangular bialgebra, R satisfies the quantum Yang–Baxter equation R₁₂R₁₃R₂₃ = R₂₃R₁₃R₁₂. So every H-module gives a solution of this equation, and hence representations of the braid groups.

**How the definition helps.** Apply the swap rule to the first two legs of R, giving R₁₂(Δ⊗id)(R) = (Δᵒᵖ⊗id)(R)R₁₂ (our own). The splitting rule turns the left side into R₁₂R₁₃R₂₃ and the right side into R₂₃R₁₃R₁₂. On tensor powers of a module, the action of R followed by the flip gives invertible braid generators (our own).

**nLab:** [quasitriangular bialgebra](https://ncatlab.org/nlab/show/quasitriangular+bialgebra), [quantum group](https://ncatlab.org/nlab/show/quantum+group). It says: “equipped with just the right structure such as to make its category of modules into a braided monoidal category/symmetric monoidal category.”

**Sources:**

- [Vladimir Drinfeld, Quantum groups, Proc. ICM 1986, Vol. 1 (1987) 798–820; expanded version J. Soviet Math. 41 (1988) 898–915](https://doi.org/10.1007/BF01247086)
- [Shahn Majid, Quasitriangular Hopf algebras and Yang–Baxter equations, Int. J. Mod. Phys. A 5 (1990) 1–91](https://doi.org/10.1142/S0217751X90000027)

### Totally nonnegative integers turn the narrow class group into a Picard group

**Remember:** Allow only integers nonnegative at every real embedding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16Y60 (Semirings), 11R29. arXiv math.AG, math.RA. Level 4: research.

**Definition.** For a number field K, the totally nonnegative integers form the semiring S of algebraic integers a of K with σ(a) ≥ 0 at every real embedding σ, so the semiring remembers signs. An S-module is reflexive when the evaluation map to its S-linear double dual is an isomorphism.

**Problem.** The reflexive Picard group of the semiring of totally nonnegative integers of a number field is the narrow class group of the field.

**How the definition helps.** Every nonzero element of the semiring is positive at every real embedding, so only totally positive generators are available (our own). The quoted reflexive Picard group theorem identifies the module classes with fractional ideals modulo principal ideals with totally positive generators. That quotient is the narrow class group.

**Paper or page:** [Facets of module theory over semirings](https://arxiv.org/abs/2405.18645v3). It says: “We also show that the narrow class group of a number field can be recovered as a reflexive Picard group of its subsemiring of totally nonnegative algebraic integers.”

**Sources:**

- [James Borger, Jaiung Jun, Facets of module theory over semirings, arXiv:2405.18645v3 (2025)](https://arxiv.org/abs/2405.18645v3)
