### Endomorphisms form a ring only when the group is abelian

**Remember:** Add endomorphisms pointwise only when the group is abelian.

*Rules out counterexamples. Confidence: medium.* MSC 16S50 (Endomorphism rings; matrix rings), 20K30. arXiv math.RA, math.GR. Level 1: early undergraduate.

**Definition.** An endomorphism is a homomorphism from a group G to itself. For endomorphisms f and g, their pointwise sum sends each x ∈ G to f(x) + g(x) in the group operation.

**Problem.** For an abelian group, the endomorphisms form a ring under pointwise addition and composition. For a non-abelian group, this structure is not a ring.

**How the definition helps.** Commutativity allows the middle terms to switch when checking that a pointwise sum preserves addition (our own argument). Pointwise addition then gives an abelian group, and composition distributes on both sides. In a nonabelian group, the pointwise sum of the identity with itself fails: (xy)² = x²y² would force yx = xy for every pair.

**Paper or page:** [Set of Endomorphisms of Non-Abelian Group is not Ring](https://proofwiki.org/wiki/Set_of_Endomorphisms_of_Non-Abelian_Group_is_not_Ring). It says: “Let (G, ⊕) be a group which is non-abelian. Let 𝔾 be the set of all group endomorphisms of (G, ⊕). Then the algebraic structure (𝔾, ⊕, \*) is not a ring.”

**Sources:**

- [ProofWiki, Set of Endomorphisms of Non-Abelian Group is not Ring](https://proofwiki.org/wiki/Set_of_Endomorphisms_of_Non-Abelian_Group_is_not_Ring)

### Preserving one preserves units

**Remember:** Send both sides of the inverse equations, including one.

*Rules out counterexamples.* MSC 16U60 (Units, groups of units (associative rings and algebras)). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A unital ring homomorphism preserves the multiplicative identity as well as addition and multiplication. A unit is an element with a two-sided multiplicative inverse.

**Problem.** A unital ring homomorphism sends units to units and restricts to a homomorphism of their multiplicative groups.

**How the definition helps.** The image of an inverse is an inverse because the image of one is one. Our own counterexample is n ↦ (n, 0) from ℤ to ℤ × ℤ, which preserves addition and multiplication but not one. Our own check notes that (1, 0) is not invertible because its second coordinate is zero.

**Wikipedia:** [Ring homomorphism](https://en.wikipedia.org/wiki/Ring_homomorphism). It says: “For any unit a in R, f(a) is a unit element such that f(a)⁻¹ = f(a⁻¹).”

**Sources:** none listed. No primary source with a working link was found.

### Allowing 0 = 1 gives the category of rings a terminal object

**Remember:** Every ring maps to the one-element ring in exactly one way.

*True by definition.* MSC 16B50 (Category-theoretic methods and results in associative algebras (except as in 16D90)), 18A30. arXiv math.RA, math.CT. Level 2: later undergraduate.

**Definition.** A ring with identity has an additive identity 0 and a multiplicative identity 1. The usual definition does not require 0 ≠ 1, so the one-element set {0} is a ring, called the zero ring. Ring maps must send 1 to 1.

**Problem.** In the category of rings with identity, the zero ring is a terminal object. This means that every ring has exactly one ring map to it.

**How the definition helps.** Every ring has exactly one function to the one-element ring. That function preserves addition, multiplication, and the identity because all target values coincide (our own argument).

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring). It says: “In the category of rings, the zero ring is the terminal object, whereas the ring of integers Z is the initial object.”

**Sources:** none listed. No primary source with a working link was found.

### Defined through ℤ → R, the target's characteristic divides the source's

**Remember:** A unital ring map can only enlarge the kernel from ℤ.

*True by definition. Confidence: medium.* MSC 16B99 (General and miscellaneous), 13B10. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** For a unital ring R, the characteristic is the nonnegative generator of the kernel of the map ℤ → R sending n to n·1.

**Problem.** Let R → S be a ring map that sends 1 to 1. Then the characteristic of S divides the characteristic of R.

**How the definition helps.** The kernel definition turns divisibility into inclusion of ideals of ℤ, which composition gives at once. The map ℤ → S is the map ℤ → R followed by R → S, so its kernel contains the kernel for R. With the least-n definition, one first proves that n·1 = 0 exactly when the characteristic divides n (rest our own).

**Paper or page:** [Principal Ideal of Characteristic of Ring is Subset of Kernel of Multiple Function](https://proofwiki.org/wiki/Principal_Ideal_of_Characteristic_of_Ring_is_Subset_of_Kernel_of_Multiple_Function). It says: “(p) ⊆ ker(gₐ)”

**Sources:** none listed. No primary source with a working link was found.

### Defining an algebra by a central scalar map makes linearity automatic

**Remember:** A scalar acts by multiplying its image of the identity.

*True by definition.* MSC 16B99 (General and miscellaneous), 13B10. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A unital algebra over a commutative ring R is a unital ring A with a unital ring map η from R into its center. The scalar action is ra = η(r)a.

**Problem.** Let f be a ring map from A to B that sends 1 to 1. Then f is R-linear exactly when f(η<sub>A</sub>(r)) = η<sub>B</sub>(r) for every r in R.

**How the definition helps.** If f respects the scalar maps, multiplicativity gives f(ra) = f(η<sub>A</sub>(r))f(a) = η<sub>B</sub>(r)f(a) (our own argument). Conversely, R-linearity at a = 1 gives f(η<sub>A</sub>(r)) = η<sub>B</sub>(r), since f(1) = 1.

**Wikipedia:** [Algebra over a field](https://en.wikipedia.org/wiki/Algebra_over_a_field). It says: “This definition is equivalent to that above, with scalar multiplication”

**Sources:** none listed. No primary source with a working link was found.

### A section makes a short exact sequence a direct sum

**Remember:** Subtract the section of the image to land in the kernel.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Suppose a surjective module map p from B to C has kernel A. A section is a linear map s from C to B with p(s(c)) = c for every c. The sequence splits if it admits a section.

**Problem.** If s is a section of p, then B is isomorphic to A ⊕ C by an isomorphism carrying p to projection onto C.

**How the definition helps.** A section supplies the C-coordinate inside B, so we need no separate search for a complementary submodule. Our own coordinate formula sends b to the pair (b − s(p(b)), p(b)). Its first entry lies in A because p kills the difference. The inverse sends (a,c) to a + s(c).

**Paper or page:** [Lemma 12.5.10.](https://stacks.math.columbia.edu/tag/010G). It says: “Given a morphism s : C → B right inverse to B → C”

**Sources:** none listed. No primary source with a working link was found.

### Composition series make module length additive

**Remember:** Lift the quotient series and append it to the submodule series.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A composition series is a finite chain from zero to a module whose successive quotients are simple. A simple module is nonzero and has no nonzero proper submodule. Length counts the quotients in a composition series.

**Problem.** If a submodule A and its quotient M/A have composition series, then M has length equal to the sum of their lengths.

**How the definition helps.** Counting simple quotients lets us join two chains without searching for a longest chain. In our own construction, lift the quotient series to M and append it to the series for A. The lifted steps have the original simple quotients. The Jordan–Hölder theorem ensures every composition series gives the same count.

**Paper or page:** [Lemma 10.52.3.](https://stacks.math.columbia.edu/tag/00IV). It says: “then the length of M is the sum of the lengths of M′ and M″.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring 1x = x makes ℤ-modules exactly the abelian groups

**Remember:** If 1 acts as the identity, n times x means x added n times.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA, math.GR. Level 2: later undergraduate.

**Definition.** A unital left R-module structure on an abelian group M is a unital ring homomorphism R → End(M). End(M) uses pointwise addition and composition of group endomorphisms.

**Problem.** Every abelian group is a ℤ-module, and in only one way. So the theory of ℤ-modules is the theory of abelian groups.

**How the definition helps.** A unital map sends 1 to the identity of M, so additivity forces n to act by integer multiplication. Repeated addition, with negation for negative integers, gives this action and satisfies the module laws (our own check).

**Wikipedia:** [Module (mathematics)](https://en.wikipedia.org/wiki/Module_%28mathematics%29). It says: “every abelian group is a module over the ring of integers Z in a unique way.”

**Sources:** none listed. No primary source with a working link was found.

### The quotient property makes maps into a module left exact

**Remember:** Maps that kill a submodule are exactly maps from the quotient.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The quotient B/A identifies elements whose difference lies in the submodule A. Equivalently, every linear map from B that kills A factors uniquely through the quotient map.

**Problem.** For any module M, composition with the quotient map identifies maps from B/A to M with maps from B to M vanishing on A. This is left exactness of Hom(−, M).

**How the definition helps.** The mapping property gives existence and uniqueness of the factorization directly. In our own explanation, restricting a map to A gives zero exactly when the map kills A. The work lies in proving the mapping property from the construction using cosets.

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

**Definition.** Over a nonzero ring R with identity, the free module on a set S uses functions S → R with finite support. This means only finitely many values are nonzero. Each basis function is 1 at its chosen point and 0 elsewhere.

**Problem.** For any R-module M, every function S → M extends uniquely to a linear map from the free module.

**How the definition helps.** Finite support makes each assigned image a finite sum of scalar multiples, and linearity forces that sum. In our own counterexample, take all integer sequences and identify sequences that differ in only finitely many places. The map sending each sequence to its class agrees with the zero map on every coordinate vector. The all-ones sequence has nonzero class.

**Paper or page:** [Universal Property of Free Module on Set](https://proofwiki.org/wiki/Universal_Property_of_Free_Module_on_Set). It says: “Then there exists a unique R-module morphism”

**Sources:** none listed. No primary source with a working link was found.

### Free modules turn generators into surjections

**Remember:** Send the free basis to generators to get a surjection.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The free module on a set S has one basis element for each member of S. Equivalently, each assignment on those elements extends uniquely to a linear map into any module over the same ring.

**Problem.** A module is generated by a family indexed by S exactly when the induced map from the free module on S is onto.

**How the definition helps.** The extension property gives the map without a coordinate formula. Its image consists of all finite linear combinations of the assigned elements. These fill the target precisely when the family generates it. Proving the extension property for the basis construction accounts for the work.

**Paper or page:** [Characterisation of Spanning Set through Free Module Indexed by Set](https://proofwiki.org/wiki/Characterisation_of_Spanning_Set_through_Free_Module_Indexed_by_Set). It says: “Let Ψ: R⁽ᴵ⁾ → M be the morphism given by Universal Property of Free Module Indexed by Set.”

**Sources:** none listed. No primary source with a working link was found.

### Sums of simple modules stay semisimple under quotients

**Remember:** The image of a simple module is simple or zero.

*True by definition.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras). arXiv math.RA, math.RT. Level 2: later undergraduate.

**Definition.** A simple module is a nonzero module with no proper nonzero submodule. Define a semisimple module as a sum of simple submodules, not necessarily a direct sum.

**Problem.** Every quotient of a semisimple module is semisimple.

**How the definition helps.** The quotient map carries a sum of simple submodules onto the sum of their images (our own proof). Each image is simple or zero because the restricted kernel is either zero or the whole simple module. Hence the quotient is again a sum of simple submodules.

**Wikipedia:** [Semisimple module](https://en.wikipedia.org/wiki/Semisimple_module). It says: “If M is semisimple and N is a submodule, then N and M / N are also semisimple.”

**Sources:** none listed. No primary source with a working link was found.

### Wedderburn–Artin needs semisimple rings, not simple rings

**Remember:** Semisimplicity splits every module into simple summands.

*Rules out counterexamples.* MSC 16K99 (Division rings and semisimple Artin rings), 16D60. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A simple module is nonzero and has no proper nonzero submodule. A unital ring is semisimple if every left module is a direct sum of simple modules. A simple ring is nonzero and has no proper nonzero two-sided ideal.

**Problem.** The Wedderburn–Artin theorem says that every semisimple ring is a finite product of matrix rings over division rings. The simple ones among them are single matrix rings.

**How the definition helps.** Wedderburn–Artin classifies rings whose regular module splits into simple summands. A product with several nonzero matrix factors has proper nonzero two-sided ideals. The characteristic-zero Weyl algebra is simple but fails the module condition and is no matrix ring over a division ring.

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

**Definition.** A semiring is additively idempotent when x + x = x for all x. Define x ≤ y to mean x + y = y. The usual algebraic preorder instead asks for some d with x + d = y.

**Problem.** In this order, x + y is the least upper bound, or join, of x and y. Multiplication on either side preserves these joins.

**How the definition helps.** Idempotence makes x and y each lie below x + y. If x + z = z and y + z = z, then (x + y) + z = z (our own calculation). Hence x + y is the least upper bound. Left and right distributivity give preservation of this join on both sides.

**nLab:** [additively idempotent semiring](https://ncatlab.org/nlab/show/additively+idempotent+semiring). It says: “Due to idempotence the addition is a join with respect to this partial order”

**Sources:** none listed. No primary source with a working link was found.

### Bimodules as modules over the enveloping algebra form an abelian category

**Remember:** Reverse right multiplication and it becomes a left action.

*True by definition.* MSC 16D20 (Bimodules in associative algebras), 16D90. arXiv math.RA. Level 3: graduate.

**Definition.** Let A be an algebra over a commutative ring R, and let Aᵒᵖ be A with its multiplication reversed. The enveloping algebra is A ⊗ Aᵒᵖ, tensored over R. An A-bimodule, with commuting left and right actions that agree on R, is a left module over it.

**Problem.** The category of A-bimodules is abelian, meaning that kernels, cokernels and exact sequences behave as for modules. Kernels and cokernels are computed on the underlying abelian groups.

**How the definition helps.** Once bimodules are modules over one ring, the theorem for modules applies with no new proof. The nLab states the one-to-one match between bimodules and left modules over the enveloping algebra. In our own summary, a ⊗ b acts by m ↦ amb. The real work is in checking that this match respects maps, so that it is an isomorphism of categories.

**nLab:** [enveloping algebra](https://ncatlab.org/nlab/show/enveloping+algebra). It says: “The left Aᵉ-modules in C are in 1-1 correspondence with the A-A-bimodules in C.”

**Sources:** none listed. No primary source with a working link was found.

### A superfluous kernel makes the projective cover a summand of every presentation

**Remember:** A cover has projective source, and no proper submodule still surjects.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 18G05. arXiv math.RA. Level 3: graduate.

**Definition.** A projective cover of M is a surjection p from a projective module P onto M with superfluous kernel. This means that for every submodule N of P, the equality N + ker p = P implies N = P.

**Problem.** Let p: P → M be a projective cover and P′ → M any surjection from a projective module. Then P is a direct summand of P′ over M, so projective covers are unique up to isomorphism.

**How the definition helps.** Projectivity lifts P′ → M to a map α into P whose image plus ker p equals P (our own proof). Superfluity makes α surjective, and projectivity of P gives a section. If P′ also covers M, the section's image still surjects onto M, so superfluity makes that image all of P′.

**Wikipedia:** [Projective cover](https://en.wikipedia.org/wiki/Projective_cover). It says: “If (P,p) is a projective cover of M, and P' is another projective module with an epimorphism p′:P′→M, then there is a split epimorphism α from P' to P such that pα=p′”

**Paper or page:** [Stacks Project, Dualizing Complexes, Lemma 47.4.2](https://stacks.math.columbia.edu/tag/08XZ). It says: “If a projective cover of M exists, then it is unique up to isomorphism.”

**Sources:**

- [H. Bass, Finitistic dimension and a homological generalization of semi-primary rings, Transactions of the American Mathematical Society 95 (1960)](https://doi.org/10.1090/S0002-9947-1960-0157984-8)

### Free modules defined by universal property turn products of sets into tensors

**Remember:** Pairs of generators become pure tensors.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 15A69. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** Define the free module on a set X by a universal property. Each function from X into a module extends uniquely to a linear map. A construction uses finitely supported functions from X to the ring.

**Problem.** Over a commutative ring, the free module on X × Y is isomorphic to a tensor product. Its factors are the free modules on X and on Y.

**How the definition helps.** Both sides classify the same maps, so they are isomorphic without a basis computation. In our own argument, a function on X × Y extends uniquely to a bilinear map on the two free modules. Bilinear maps are the linear maps out of the tensor product.

**nLab:** [free module](https://ncatlab.org/nlab/show/free+module). It says: “In other words, the free module construction turns set-theoretic products into tensor products.”

**Sources:** none listed. No primary source with a working link was found.

### Three equivalent definitions of projective module make each basic fact immediate

**Remember:** Lift every map through every surjection.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 18G05. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A module M is projective if every linear map f from M to the target of any surjection p lifts through p. A lift is a linear map g satisfying pg = f.

**Problem.** For a module M over a ring, three conditions are equivalent. M has the lifting property; M is a direct summand of a free module; every short exact sequence ending in M splits.

**How the definition helps.** Lifting the identity splits every surjection onto M (our own proof). Splitting a free surjection onto M exhibits M as a direct summand. Free modules lift maps by choosing preimages for basis elements. A summand inherits lifting by first projecting onto it and then restricting the lift.

**Paper or page:** [Equivalence of Definitions of Projective Module](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Projective_Module). It says: “(2): M is a direct summand of a free module. (3): Every short exact sequence of the form 0 → X → Y → M → 0 splits”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Projective Module](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Projective_Module)

### Asking for an essential extension makes the injective hull unique

**Remember:** In an injective hull, every nonzero submodule meets the original module nontrivially.

*Makes the theorem clean to state or prove.* MSC 16D50 (Injective modules, self-injective associative rings), 18G05. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A module E is injective if every map into E from a submodule of a module extends to the whole module. An extension M ⊆ E is essential if every nonzero submodule of E meets M in a nonzero element. An injective hull of M is an injective module E that contains M as an essential submodule.

**Problem.** Every module M has an injective hull. Any two injective hulls of M are isomorphic by an isomorphism that fixes M.

**How the definition helps.** The injective envelope theorem supplies an essential injective extension. Injectivity extends the identity on M to a map between any two hulls. Essentiality makes the kernel zero, and injectivity of the source splits the image (our own argument). Essentiality in the target forces the complementary summand to vanish.

**Wikipedia:** [Injective hull](https://en.wikipedia.org/wiki/Injective_hull), [Injective module](https://en.wikipedia.org/wiki/Injective_module). It says: “the injective hull (or injective envelope) of a module is both the smallest injective module containing it and the largest essential extension of it.”

**Sources:**

- [B. Eckmann and A. Schopf, Über injektive Moduln, Archiv der Mathematik 4 (1953) 75–78](https://doi.org/10.1007/BF01899665)
- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### Essential extensions turn injectivity into a maximality condition

**Remember:** Injective modules are exactly the ones with no room to grow essentially.

*Makes the theorem clean to state or prove.* MSC 16D50 (Injective modules, self-injective associative rings), 18G05. arXiv math.RA. Level 3: graduate.

**Definition.** An extension M ⊆ N is essential if every nonzero submodule of N intersects M nontrivially. A module is injective if every map into it from a submodule extends to the containing module.

**Problem.** A module is injective exactly when it has no proper essential extension. Inside an injective module I, a submodule E is injective exactly when no E ⊊ E′ ⊆ I is an essential extension.

**How the definition helps.** Injectivity splits every extension, and a nonzero complementary summand precludes essentiality (our own argument). Conversely the injective hull theorem supplies an essential injective extension. Inside I, injectivity extends the inclusion of E to its hull. Essentiality makes this map injective, so a proper hull gives a proper essential enlargement inside I.

**Paper or page:** [Stacks Project, Dualizing Complexes, Lemma 47.3.5](https://stacks.math.columbia.edu/tag/08XS). It says: “In particular, an R-module is injective if and only if every essential extension is trivial.”

**Sources:**

- [B. Eckmann and A. Schopf, Über injektive Moduln, Archiv der Mathematik 4 (1953)](https://doi.org/10.1007/BF01899665)

### Absolutely simple modules make Schur's lemma give scalars over any field

**Remember:** Only scalars commute with an absolutely simple module, by definition.

*True by definition.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras), 20C15. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A simple module is nonzero and has no proper nonzero submodule. A simple module over a field algebra is absolutely simple when every module endomorphism is scalar multiplication by an element of the base field k.

**Problem.** Every central element of the algebra acts on an absolutely simple module as a scalar. So the module has a central character, a ring map from the center to k.

**How the definition helps.** Each central element acts by a module endomorphism, hence by a scalar. The scalar is unique since the module is nonzero. Addition and multiplication of central elements induce the same operations on their scalars, giving the central character (our own argument).

**Wikipedia:** [Schur's lemma](https://en.wikipedia.org/wiki/Schur%27s_lemma). It says: “A simple module over a k-algebra is said to be absolutely simple if its endomorphism ring is isomorphic to k. This is in general stronger than being irreducible over the field k”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, every simple ring is primitive

**Remember:** A 1 gives a maximal left ideal, and that gives a faithful simple module.

*Rules out counterexamples.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** A ring is left primitive if it has a faithful simple left module, that is, a simple module on which only 0 acts as zero. A simple ring is a nonzero ring whose only two-sided ideals are 0 and itself.

**Problem.** Every simple ring with 1 is left and right primitive. So the Jacobson density theorem describes it as a dense ring of linear maps of a vector space over a division ring.

**How the definition helps.** A maximal left ideal gives a simple quotient, whose annihilator is proper and hence zero by simplicity (our own argument). The right-hand argument is identical, and Jacobson density applies to the faithful simple module. For the prime-order zero-product ring, R²M = 0 on every module. On a simple module RM is zero or M, so RM must vanish (our own counterexample).

**Wikipedia:** [Primitive ring](https://en.wikipedia.org/wiki/Primitive_ring), [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29), [Jacobson radical](https://en.wikipedia.org/wiki/Jacobson_radical). It says: “Every simple ring R with unity is both left and right primitive. (However, a simple non-unital ring may not be primitive.)”

**Sources:**

- [N. Jacobson, The radical and semi-simplicity for arbitrary rings, American Journal of Mathematics 67 (1945) 300–320](https://doi.org/10.2307/2371731)

### Local endomorphism rings make direct sum decompositions unique

**Remember:** If the pieces have local endomorphism rings, the pieces are unique.

*Makes the theorem clean to state or prove.* MSC 16D70 (Structure and classification for modules, bimodules and ideals (except as in 16Gxx), direct sum decomposition and cancellation in associative algebras)), 16L30. arXiv math.RA, math.RT. Level 3: graduate.

**Definition.** A nonzero module is strongly indecomposable if its endomorphism ring is local. This means its noninvertible endomorphisms form a proper ideal.

**Problem.** Krull–Schmidt theorem: a nonzero module of finite length is a direct sum of indecomposable modules, unique up to order and isomorphism. Azumaya's theorem extends this to any decomposition, even infinite, into strongly indecomposable modules.

**How the definition helps.** In a local endomorphism ring, a finite sum can be invertible only if some summand is invertible. This gives the exchange step for finite decompositions (our own explanation). Fitting’s lemma gives locality for finite-length indecomposables. Azumaya’s theorem gives uniqueness for arbitrary direct sums of strongly indecomposable modules.

**Wikipedia:** [Krull–Schmidt theorem](https://en.wikipedia.org/wiki/Krull%E2%80%93Schmidt_theorem). It says: “if a module has a (possibly infinite) decomposition into strongly indecomposable modules, then this decomposition is unique up to a permutation and isomorphism.”

**Sources:**

- [A. Facchini, D. Herbera, L. S. Levy and P. Vámos, Krull–Schmidt fails for Artinian modules, Proceedings of the American Mathematical Society 123 (1995) 3587](https://doi.org/10.1090/S0002-9939-1995-1277109-4)

### Basic representatives are unique

**Remember:** Keep one projective of each kind to recover one ring.

*Rules out counterexamples.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra is basic if its regular right module contains exactly one copy of each indecomposable finitely generated projective in its direct-sum decomposition. Count projectives up to isomorphism.

**Problem.** Consider finite-dimensional algebras over a field whose module categories are equivalent by functors linear over that field. Each such equivalence class has exactly one basic algebra up to algebra isomorphism.

**How the definition helps.** Equivalence preserves the sum of one representative of each indecomposable finitely generated projective (our own argument). Its endomorphism algebra recovers any basic representative, and Morita’s theorem constructs one from that sum. A field and its two-by-two matrix algebra show why the basic condition matters.

**Wikipedia:** [Morita equivalence](https://en.wikipedia.org/wiki/Morita_equivalence). It says: “While isomorphic rings are Morita equivalent, Morita equivalent rings can be nonisomorphic.”

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the regular representation of B is a direct summand of a finite direct sum of copies of P.”

**Sources:** none listed. No primary source with a working link was found.

### Determining functors by their value on R gives the Eilenberg–Watts theorem

**Remember:** Right exact and sum-preserving means tensoring with F(R).

*Makes the theorem clean to state or prove.* MSC 16D90 (Module categories in associative algebras), 18E10. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A functor between module categories is cocontinuous when it preserves all small colimits. Equivalently it is right exact and preserves direct sums, or it is a left adjoint.

**Problem.** For rings R and S, every additive cocontinuous functor F from Mod-R to Mod-S is tensoring over R with the bimodule F(R). This gives an equivalence between R–S bimodules and cocontinuous functors.

**How the definition helps.** The ring R generates Mod-R by colimits, so a cocontinuous functor is fixed by its value on R. Every module is the cokernel of a map between free modules, and F preserves sums and cokernels (our own). The left R-action on F(R) comes from applying F to left multiplication by r. The work is the check that the comparison map M ⊗ F(R) → F(M) is natural and an isomorphism on free modules (our own).

**nLab:** [Eilenberg-Watts theorem](https://ncatlab.org/nlab/show/Eilenberg-Watts+theorem). It says: “Conversely, if F : Mod<sub>R</sub> → Mod<sub>S</sub> is additive and cocontinuous, then it is naturally isomorphic to tensoring with a bimodule.”

**Sources:**

- [C. E. Watts, Intrinsic characterizations of some additive functors, Proc. Amer. Math. Soc. 11 (1960) 5–8](https://doi.org/10.1090/S0002-9939-1960-0118757-0)

### Full corners recover modules

**Remember:** A full corner still sees the whole ring.

*Rules out counterexamples.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** An idempotent e satisfies e² = e. It is full if all finite sums of products aeb fill the ring, or equivalently if such a sum equals 1.

**Problem.** Let R be a ring with identity and e a full idempotent. Its corner eRe has identity e. Sending each right R-module M to Me gives an equivalence of module categories, called a Morita equivalence.

**How the definition helps.** Writing 1 as a finite sum of products aeb makes R a summand of finitely many copies of eR (our own argument). Since eR is projective, Morita’s theorem identifies the equivalence with M ↦ Me. For e = (1,0) in k × k, this functor kills the nonzero module on the second factor (our own example).

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1), [On compatibility of Koszul- and higher preprojective gradings](https://arxiv.org/abs/2411.13283v3). It says: “is a graded basic algebra and Morita equivalent to R.”

**Sources:** none listed. No primary source with a working link was found.

### Module centers survive equivalence

**Remember:** The center acts on every module in the same way.

*True by definition.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** The center of a module category is the ring of natural endomorphisms of its identity functor. A natural endomorphism assigns a module map to each module and commutes with all module maps.

**Problem.** Rings with equivalent module categories have isomorphic centers.

**How the definition helps.** An equivalence transports families of maps that commute with every module map, so it transports the category center. The work lies in identifying this ring with the usual ring center. In our own proof, naturality on the free module of rank one forces its assigned map to multiply by a central element. Maps from that module to each other module determine the whole family.

**nLab:** [Morita equivalence](https://ncatlab.org/nlab/show/Morita+equivalence). It says: “the center of an algebra is isomorphic to the center of its category of modules and that Morita equivalent algebras have isomorphic centers.”

**Sources:** none listed. No primary source with a working link was found.

### Ring properties defined through modules are automatically Morita invariant

**Remember:** Say it with modules, and Morita equivalence keeps it.

*True by definition.* MSC 16D90 (Module categories in associative algebras), 16B50. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** Two rings R and S are Morita equivalent if their categories of modules are equivalent as additive categories. For example, every ring R is Morita equivalent to the ring of n × n matrices over R.

**Problem.** Every categorical property of modules and their maps is invariant under Morita equivalence. In particular, every positive-size matrix ring over a von Neumann regular ring is von Neumann regular.

**How the definition helps.** An equivalence transports categorical properties by definition. Von Neumann regularity means that for every a there exists x with axa = a. The module criterion says this holds exactly when all modules are flat, a property preserved by Morita equivalence (our own explanation).

**Wikipedia:** [Morita equivalence](https://en.wikipedia.org/wiki/Morita_equivalence). It says: “Generally speaking, any property of modules defined purely in terms of modules and their homomorphisms (and not to their underlying elements or ring) is a categorical property which will be preserved by the equivalence functor.”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products compose functors

**Remember:** Compose tensor functors by tensoring their bimodules.

*True by definition.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** For unital rings R,S, an R–S bimodule P has commuting left R and right S actions. Its tensor functor sends each right R-module M to the right S-module M ⊗ᵣ P and each map f to f ⊗ id.

**Problem.** The composite of two such functors is represented by the tensor product of their representing bimodules over the middle ring.

**How the definition helps.** The tensor description makes composition just associativity of tensor products, in our own argument. The Eilenberg–Watts theorem carries the work of showing that every such functor is of this form. In our own explanation, its value on the ring as a module over itself gives the bimodule. Presentations by free modules extend the formula to every module, in our own explanation.

**nLab:** [Eilenberg-Watts theorem](https://ncatlab.org/nlab/show/Eilenberg-Watts+theorem). It says: “The Eilenberg-Watts theorem identifies colimit-preserving functors between categories of modules with the operations of forming tensor products with bimodules.”

**Sources:** none listed. No primary source with a working link was found.

### Bimodule resolutions of an algebra bound the global dimension of its modules

**Remember:** One bimodule resolution of A resolves every A-module at once.

*Makes the theorem clean to state or prove.* MSC 16E10 (Homological dimension in associative algebras), 16E40, 16H05. arXiv math.RA. Level 3: graduate.

**Definition.** For a nonzero unital algebra A over a field k, its Hochschild dimension is its projective dimension over Aᵉ = A ⊗ₖ Aᵒᵖ. The action is (a ⊗ b)x = axb. The algebra is separable when this module is projective.

**Problem.** The global dimension of a k-algebra A is at most its Hochschild dimension. In particular a separable algebra has global dimension 0, so it is semisimple.

**How the definition helps.** Tensor a projective bimodule resolution of A over A with any left module M (our own proof). The resolution splits as right modules, so tensoring preserves exactness. Each resulting term is a summand of a free left module because each original term is a summand of a free bimodule. Thus M has projective dimension at most the Hochschild dimension.

**Wikipedia:** [Separable algebra](https://en.wikipedia.org/wiki/Separable_algebra). It says: “A K-algebra A is separable if and only if it is projective when considered as a left module of Aᵉ in the usual way.”

**Sources:** none listed. No primary source with a working link was found.

### Finite global dimension makes the Cartan matrix invertible over the integers

**Remember:** Each projective gives one column counting its simple factors.

*True by definition.* MSC 16E10 (Homological dimension in associative algebras), 16G10, 16E20. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** For a finite-dimensional algebra, choose representatives Sᵢ of the simple modules and their projective covers Pᵢ. Its Cartan matrix records in entry (i,j) the multiplicity of Sᵢ in a composition series of Pⱼ.

**Problem.** If A has finite global dimension, then the determinant of its Cartan matrix is 1 or −1 (Eilenberg).

**How the definition helps.** Read as a map between free abelian groups of equal rank, the Cartan matrix has determinant ±1 exactly when the map is onto. Finite global dimension gives each simple module a finite projective resolution. So its class is an alternating sum of classes of projectives, and the map is onto (our own summary). For A = k\[x\]/(x²) the Cartan matrix is (2), so this algebra has infinite global dimension.

**Wikipedia:** [Cartan matrix](https://en.wikipedia.org/wiki/Cartan_matrix). It says: “a Cartan matrix is defined by considering a (finite) set of principal indecomposable modules and writing composition series for them in terms of irreducible modules, yielding a matrix of integers counting the number of occurrences of an irreducible module.”

**Sources:**

- [S. Eilenberg, Algebras of cohomologically finite dimension, Commentarii Mathematici Helvetici (1954)](https://doi.org/10.1007/BF02566937)

### Tor-defined weak dimension makes Noetherian global dimension two-sided

**Remember:** Tor sees both sides at once, so Noetherian rings have one global dimension.

*True by definition.* MSC 16E10 (Homological dimension in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** For a nonzero ring R, its weak global dimension is the supremum of degrees n ≥ 0 with Torₙᴿ(M,N) nonzero for some modules M,N. Here M is a right module and N a left module. The supremum can be infinite.

**Problem.** If a ring R is Noetherian on both sides, then its left and right global dimensions are equal. Both equal the weak global dimension of R.

**How the definition helps.** Tor uses both sides, so weak global dimension is unchanged by passage to the opposite ring. Auslander's theorem identifies it with right global dimension for right Noetherian rings. Applying the theorem also to the opposite ring gives the left equality (our own deduction).

**Wikipedia:** [Global dimension](https://en.wikipedia.org/wiki/Global_dimension). It says: “if A is a Noetherian ring, both of these dimensions turn out to be equal to weak global dimension, whose definition is left-right symmetric.”

**Sources:**

- [M. Auslander, On the dimension of modules and algebras (III): global dimension, Nagoya Mathematical Journal (1955)](https://doi.org/10.1017/S0027763000023291)

### Defining the Euler form by alternating Ext makes tilting an isometry

**Remember:** Euler forms live in the derived category, so derived equivalences preserve them.

*True by definition.* MSC 16E20 (Grothendieck groups, \\(K\\)-theory, etc.), 16E35, 16E10. arXiv math.RT. Level 3: graduate.

**Definition.** For a finite-dimensional algebra A of finite global dimension over k, the Euler form pairs module classes by ⟨\[M\],\[N\]⟩ = ∑ᵢ≥₀ (−1)ⁱ dimₖ Extⁱ(M,N). Short exact sequences give the additive relations in the Grothendieck group.

**Problem.** Let A be finite-dimensional over k with finite global dimension, and let T be a classical tilting right module of projective dimension at most one. Then B = End<sub>A</sub>(T) has finite global dimension. Sending \[M\] to \[Hom(T,M)\] − \[Ext¹(T,M)\] gives an isometry between the Grothendieck groups with their Euler forms.

**How the definition helps.** Happel’s tilting theorem gives the derived equivalence and finiteness of global dimension for B. Derived Hom dimensions define the Euler form, so this k-linear equivalence preserves it (our own explanation). Only Hom and Ext¹ contribute to the image of a module class because T has projective dimension at most one.

**Wikipedia:** [Tilting theory](https://en.wikipedia.org/wiki/Tilting_theory). It says: “If A has finite global dimension, then B also has finite global dimension, and the difference of F and F′ induces an isometry between the Grothendieck groups K₀(A) and K₀(B).”

**Sources:**

- [D. Happel, Triangulated Categories in the Representation Theory of Finite Dimensional Algebras, Cambridge University Press (1988)](https://doi.org/10.1017/CBO9780511629228)

### Perfect complexes survive equivalence

**Remember:** Perfect complexes are the ones that see sums one piece at a time.

*True by definition.* MSC 16E35 (Derived categories and associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** In the derived category, maps of complexes that induce isomorphisms on cohomology become invertible. A perfect complex there has a bounded representative whose terms are summands of finite free modules. Equivalently, it is compact, meaning every map from it to a direct sum factors through a finite subsum.

**Problem.** An equivalence between the unbounded derived categories of two rings restricts to an equivalence between their perfect complexes.

**How the definition helps.** An equivalence preserves maps and direct sums, so it preserves compactness, in our own argument. The compact generator theorem identifies the compact objects from the ring placed in degree zero. Closing that object under shifts of degree, mapping cones and direct summands gives exactly the perfect complexes.

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the full subcategory of T spanned by the compact objects coincides with its smallest idempotent complete triangulated subcategory which contains G.”

**Sources:**

- [Amnon Neeman, The Grothendieck duality theorem via Bousfield’s techniques and Brown representability](https://doi.org/10.1090/s0894-0347-96-00174-9)

### Tilting complexes detect equivalence

**Remember:** Replace a projective generator with a generator that can stretch across degrees.

*Makes the theorem clean to state or prove.* MSC 16E35 (Derived categories and associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A tilting complex T is a bounded complex of finitely generated projective right modules. In the derived category, Hom(T,T\[i\]) vanishes for every nonzero integer i. The smallest triangulated subcategory containing T and closed under direct summands contains every bounded complex of finitely generated projectives.

**Problem.** Consider two algebras over a field k and their unbounded derived categories of right modules. These categories are k-linearly triangulated equivalent exactly when one algebra occurs as End(T) for a tilting complex over the other. Compute End(T) in the derived category.

**How the definition helps.** The complex lets one test an equivalence by examining a single generator and its shifts, in our own explanation. A derived equivalence carries the regular module to such a complex, in our own explanation. Rickard's theorem does the work in the other direction, realizing the endomorphisms and constructing the equivalence.

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the regular representation of B can be obtained from T and its shifts by forming extensions and taking direct summands.”

**Sources:**

- [Jeremy Rickard, Morita Theory for Derived Categories](https://doi.org/10.1112/jlms/s2-39.3.436)

### Bidimension at most one makes nilpotent extensions split

**Remember:** Bidimension at most one kills HH², so nilpotent extensions split.

*Rules out counterexamples. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** The enveloping algebra Bᵉ = B ⊗ₖ Bᵒᵖ of an algebra B is the ring whose modules are B-bimodules. The bidimension of B is the projective dimension of B as a Bᵉ-module. Bidimension zero means that B is separable.

**Problem.** Let A be a finite-dimensional algebra over a field k, with a nilpotent ideal I. If A/I has bidimension at most one, then A contains a subalgebra that maps isomorphically onto A/I.

**How the definition helps.** The bidimension bound kills the obstruction group, because the obstruction to splitting lies in HH²(A/I, N), which is Ext² over (A/I)ᵉ (our own). Here N is a layer Iʲ/Iʲ⁺¹ with N·N = 0, and induction over these layers finishes the proof (our own). The hypothesis excludes A = k\[x\]/((xᵖ − t)²) over k = 𝔽ₚ(t), with I generated by xᵖ − t (our own). No y in A has yᵖ = t, so A/I, which holds a pth root of t, does not embed in A (our own).

**Wikipedia:** [Associative algebra](https://en.wikipedia.org/wiki/Associative_algebra). It says: “if the projective dimension of A / I as a module over the enveloping algebra (A / I)ᵉ is at most one, then the natural surjection p : A → A / I splits”

**Sources:** none listed. No primary source with a working link was found.

### Centralizers split group-ring Hochschild homology

**Remember:** Components are conjugacy classes, and the loops in each component are centralizers.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** For a discrete group G, form a category with one object for each group element. An arrow from g to h is a group element a satisfying aga⁻¹ = h. Model the Hochschild chains of the group algebra k\[G\] by strings of composable arrows, with coefficients in k.

**Problem.** For a commutative ring k, Hochschild homology of k\[G\] splits as a direct sum indexed by conjugacy classes. The summand of g is the group homology over k of its centralizer, the subgroup commuting with g.

**How the definition helps.** The arrow model separates conjugacy classes because arrows exist only between conjugate elements (our own). Each component reduces to one object whose automorphisms form its centralizer (our own). Taking chains of these components gives the direct sum (our own). The comparison with ordinary Hochschild chains rewrites a cyclic list using its product and successive conjugating elements (our own).

**nLab:** [free loop space of classifying space](https://ncatlab.org/nlab/show/free+loop+space+of+classifying+space). It says: “the homotopy quotient of the conjugation ∞-action”

**Sources:**

- [Dan Burghelea, The cyclic homology of the group rings](https://doi.org/10.1007/BF02567420)

### Defining Hochschild homology as Tor makes it Morita invariant

**Remember:** Tor is built from bimodules, so Morita equivalent algebras agree.

*True by definition. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 19D55, 16D90. arXiv math.KT, math.RA. Level 3: graduate.

**Definition.** For an algebra A over a field k, A-bimodules are the same as modules over the enveloping algebra Aᵉ = A ⊗ Aᵒᵖ. Cartan and Eilenberg define HHₙ(A, M) as Torₙ over Aᵉ of A and M, the derived functor of tensor product. The older definition uses an explicit chain complex built from tensor powers of A.

**Problem.** If k-algebras A and B have k-linearly equivalent module categories, then HHₙ(A) ≅ HHₙ(B) for every n ≥ 0. In particular, HHₙ(Mₘ(A)) ≅ HHₙ(A) for every positive matrix size m.

**How the definition helps.** As Tor, Hochschild homology is a derived tensor product, and Morita equivalences respect tensor products of bimodules (our own). The bimodules that give the equivalence send A to B and Tor over Aᵉ to Tor over Bᵉ (our own). With the explicit complex, one must instead build a trace map from Mₘ(A) to A and a chain homotopy by hand. The work went into the theorem that the explicit complex computes Tor.

**Wikipedia:** [Hochschild homology](https://en.wikipedia.org/wiki/Hochschild_homology). It says: “Bimodules over A are essentially the same as modules over the enveloping algebra of A, so in particular A and M can be considered as Aᵉ-modules.”

**Sources:**

- [J.-L. Loday, Cyclic Homology, 2nd ed., Grundlehren der mathematischen Wissenschaften 301, Springer (1998)](https://doi.org/10.1007/978-3-662-11389-9)

### Hochschild extensions of an algebra are classified by HH²

**Remember:** A linear section's failure to multiply is a Hochschild 2-cocycle.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)). arXiv math.RA, math.KT. Level 3: graduate.

**Definition.** A Hochschild extension of a k-algebra R by an R-bimodule N is a k-linearly split algebra surjection E → R with kernel identified with N. Kernel products vanish, and multiplication by lifts of R on either side induces the specified bimodule actions. Equivalences of extensions induce the identity on R and N.

**Problem.** Equivalence classes of Hochschild extensions of R by N are in bijection with HH²(R, N).

**How the definition helps.** The k-linear splitting makes the proof short (our own). It writes E as R ⊕ N with product (a, m)(b, n) = (ab, an + mb + f(a, b)) (our own). Associativity of E is exactly the cocycle condition on f, and a change of linear section changes f by a coboundary (our own). Over a general ring k the splitting condition is needed (our own).

**nLab:** [Hochschild cohomology](https://ncatlab.org/nlab/show/Hochschild+cohomology). It says: “For R a k-algebra and N an R-bimodule, equivalence classes of Hochschild extensions of R by N are in bijection with degree 2 Hochschild cohomology HH²(R,N).”

**Sources:**

- [G. Hochschild, On the cohomology groups of an associative algebra, Annals of Mathematics 46 (1945)](https://doi.org/10.2307/1969145)

### Hochschild homology as Tor computes polynomial rings with Koszul complexes

**Remember:** Choose the Koszul resolution, and the differentials vanish.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 13D03. arXiv math.KT, math.AC. Level 3: graduate.

**Definition.** For a k-algebra A free over its commutative base ring k, Hochschild homology is HHₙ(A) = Torₙᴬᵉ(A,A), where Aᵉ = A ⊗ₖ Aᵒᵖ. One can compute Tor using any projective bimodule resolution of A.

**Problem.** For a commutative ring k and A = k\[x₁,…,xₙ\], Hochschild homology HH\_∗(A) is the exterior algebra over A on dx₁,…,dxₙ.

**How the definition helps.** Because Tor may be computed with any projective resolution, we may use the Koszul complex (our own). Here Aᵉ is a polynomial ring in 2n variables xᵢ and yᵢ, and A is Aᵉ modulo the regular sequence xᵢ − yᵢ (our own). After tensoring with A, each xᵢ − yᵢ acts as zero, so all differentials vanish (our own). The work went into the theorem that Tor does not depend on the resolution, which covers the bar complex when A is free over k.

**Wikipedia:** [Hochschild homology](https://en.wikipedia.org/wiki/Hochschild_homology). It says: “Bimodules over A are essentially the same as modules over the enveloping algebra of A, so in particular A and M can be considered as Aᵉ-modules.”

**Sources:** none listed. No primary source with a working link was found.

### Hochschild homology as Tor gives smooth algebras their differential forms

**Remember:** Locally, the diagonal of a smooth variety is cut out by a regular sequence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 13D03, 19D55. arXiv math.KT, math.AC. Level 3: graduate.

**Definition.** Let A be a commutative algebra over a field k and let I be the kernel of multiplication A ⊗ₖ A → A. The module of Kähler differentials is Ω¹ = I/I². For each n ≥ 0, define Ωⁿ as its nth exterior power over A.

**Problem.** Let A be a smooth commutative algebra of finite type over a field k. Then the antisymmetrization map gives an isomorphism Ωⁿ ≅ HHₙ(A) for every n ≥ 0.

**How the definition helps.** As Tor, Hochschild homology may be computed from any projective resolution of A over A ⊗ A, and it can be computed locally. For a smooth algebra, I is locally generated by a regular sequence, like the elements xᵢ⊗1 − 1⊗xᵢ for polynomials (our own). The Koszul resolution of that sequence then gives Tor as the exterior algebra on I/I² = Ω¹ (our own). The explicit Hochschild complex is far from such a resolution, and the work went into the regularity of I.

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

**Definition.** A finitely presented commutative k-algebra A is smooth if every k-algebra map A → C/J lifts to C whenever J is a square-zero ideal. Here C ranges over commutative k-algebras.

**Problem.** For a smooth commutative algebra A over a field, HHₙ(A) is isomorphic to the module Ωⁿ = ΛⁿΩ¹ of n-forms over A.

**How the definition helps.** Smoothness makes the kernel of A ⊗ A → A locally generated by a regular sequence, so local Koszul resolutions exist (our own). The work went into that local structure theorem for smooth algebras. The hypothesis excludes the dual numbers A = k\[x\]/(x²) in characteristic 0, where Ω² = 0 (our own). A periodic resolution over Aᵉ gives HHₙ(A) ≅ k for every n ≥ 1, so HH₂(A) ≠ Ω² (our own).

**nLab:** [Hochschild-Kostant-Rosenberg theorem](https://ncatlab.org/nlab/show/Hochschild-Kostant-Rosenberg+theorem). It says: “the A-module of Kähler differentials Ω¹ₖ(A) is a projective object”

**Sources:**

- [G. Hochschild, B. Kostant and A. Rosenberg, Differential forms on regular affine algebras, Transactions of the AMS 102 (1962)](https://doi.org/10.1090/s0002-9947-1962-0142598-8)

### The Gerstenhaber bracket turns associativity into one equation

**Remember:** Associative means the product brackets to zero with itself.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16S80. arXiv math.RA, math.QA. Level 3: graduate.

**Definition.** For bilinear maps f,g on a vector space A, define (f ∘ g)(a,b,c) = f(g(a,b),c) − f(a,g(b,c)). Their Gerstenhaber bracket is \[f,g\] = f ∘ g + g ∘ f.

**Problem.** Over a field of characteristic not 2, a bilinear map μ on A is associative if and only if \[μ, μ\] = 0. If μ is associative, then μ + c is associative if and only if c satisfies the Maurer–Cartan equation dc + ½\[c, c\] = 0.

**How the definition helps.** The bracket is built so that μ ∘ μ is the associator, μ(μ(a, b), c) − μ(a, μ(b, c)) (our own). Also \[μ, μ\] = 2 μ ∘ μ (our own). Expanding \[μ + c, μ + c\] = 0 gives the Maurer–Cartan equation, where d = \[μ, −\] is the Hochschild differential (our own). The work went into Gerstenhaber's proof that the bracket is a graded Lie bracket.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Note that μ is associative iff μ ∘ μ = 0 iff \[μ, μ\] = 0.”

**Sources:**

- [M. Gerstenhaber, The cohomology structure of an associative ring, Annals of Mathematics 78 (1963)](https://doi.org/10.2307/1970343)

### Derived categories of dg modules depend only on quasi-isomorphism class

**Remember:** Invert quasi-isomorphisms, and quasi-isomorphic algebras look the same.

*Makes the theorem clean to state or prove.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 18G80. arXiv math.KT, math.RA. Level 3: graduate.

**Definition.** The derived category D(A) of a dg algebra A is the category of dg A-modules with all quasi-isomorphisms made invertible. A quasi-isomorphism is a map that induces an isomorphism on cohomology. This replaces the homotopy category of dg modules, where such maps need not be invertible.

**Problem.** Let A → B be a quasi-isomorphism of dg algebras over a ring R. Then the derived tensor product with B is an equivalence from D(A) to D(B), with inverse the restriction of scalars.

**How the definition helps.** The adjunction unit at A is the given quasi-isomorphism, hence invertible in D(A) (our own argument). Both functors preserve sums and triangles, so the unit is invertible on the category generated by A. The derived tensor functor is therefore fully faithful. Its image contains the generator B and is closed under sums and triangles, giving essential surjectivity.

**Paper or page:** [Lemma 22.37.1](https://stacks.math.columbia.edu/tag/09S6). It says: “gives an R-linear equivalence of triangulated categories with quasi-inverse the restriction functor N ↦ N<sub>A</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudo-inverses make commutative von Neumann regular rings a variety

**Remember:** Ask the inverse to be regular too, and it becomes unique.

*Makes the theorem clean to state or prove.* MSC 16E50 (von Neumann regular rings and generalizations (associative algebraic aspects)), 08B05. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** A ring R is von Neumann regular if each element a has some x with a x a = a. A pseudo-inverse of a is an element x with both a x a = a and x a x = x.

**Problem.** Commutative von Neumann regular rings are exactly the commutative rings with an operation a ↦ ā such that aāa = a and āaā = ā. So they form a variety of algebras, and every ring map between them preserves ā.

**How the definition helps.** In a commutative ring, axa = a makes xax a pseudo-inverse (our own calculation). For any two pseudo-inverses b,c, the identities give ab = (ab)(ac) = ac. Then b = ab² = abc = ac² = c. Uniqueness forces ring maps to preserve pseudo-inversion, and the defining equations give a variety.

**nLab:** [von Neumann regular ring](https://ncatlab.org/nlab/show/von+Neumann+regular+ring). It says: “commutative vN rings form a variety of algebras: they are the same as commutative rings equipped with a pseudo-inversion operation a ↦ ā satisfying a ā a = a and ā a ā = ā.”

**Sources:**

- [John von Neumann, On regular rings, Proc. Natl. Acad. Sci. USA 22 (1936) 707–713](https://doi.org/10.1073/pnas.22.12.707)

### Weak dimension zero sees von Neumann regular rings that global dimension misses

**Remember:** Flatness, not projectivity, is what von Neumann regular rings have everywhere.

*Makes the theorem clean to state or prove.* MSC 16E50 (von Neumann regular rings and generalizations (associative algebraic aspects)), 16E10. arXiv math.RA. Level 3: graduate.

**Definition.** Weak global dimension is the supremum of all flat dimensions of left modules over the ring, allowing infinity. A ring has weak global dimension zero when every left module is flat. A ring R is von Neumann regular when each a ∈ R satisfies axa = a for some x ∈ R.

**Problem.** A ring is von Neumann regular exactly when its weak global dimension is 0, that is, when every module is flat. An infinite product of fields is such a ring, but its global dimension is not 0.

**How the definition helps.** The flatness criterion for cyclic modules identifies absolute flatness with regularity (our own explanation). In particular, flatness of R/Ra gives a = ax for some x ∈ Ra, hence a = ara for some r. An infinite product of fields has coordinatewise pseudoinverses. Ideals supported on successively smaller infinite subsets form an infinite descending chain, so it is not semisimple Artinian and cannot have global dimension zero.

**Wikipedia:** [Weak dimension](https://en.wikipedia.org/wiki/Weak_dimension). It says: “A Von Neumann regular ring has weak global dimension 0. A product of infinitely many fields has weak global dimension 0 but its global dimension is nonzero.”

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.105.5](https://stacks.math.columbia.edu/tag/092F). It says: “A has weak dimension ≤ 0, A is absolutely flat, A is reduced and every prime is maximal, and every local ring of A is a field.”

**Sources:** none listed. No primary source with a working link was found.

### Global and dominant dimension two single out the Auslander algebras

**Remember:** Global dimension at most two, dominant dimension at least two.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings), 16E10, 16G60. arXiv math.RT. Level 3: graduate.

**Definition.** An Artin algebra Γ, for example a finite-dimensional algebra, is an Auslander algebra when two bounds hold. Its global dimension is at most 2, and its dominant dimension is at least 2. Dominant dimension at least 2 means that the first two terms I and J of a minimal injective resolution of Γ are projective.

**Problem.** Auslander’s correspondence pairs Morita classes of representation-finite Artin algebras with Morita classes of Auslander algebras. Representation-finite means finitely many isomorphism classes of indecomposable finitely generated modules. It sends Λ to the endomorphism algebra of a sum containing one representative of each class.

**How the definition helps.** The two homological bounds characterize the endomorphism algebras in Auslander’s correspondence. Kernels of maps between finite sums of the chosen modules are again sums of those modules, yielding the global dimension bound (our own explanation). The Morita–Tachikawa theorem uses the projective-injective modules for the reverse construction.

**Wikipedia:** [Auslander algebra](https://en.wikipedia.org/wiki/Auslander_algebra). It says: “Γ is called an Auslander algebra if gl dim Γ ≤ 2 and if 0 → Γ → I → J → K → 0 is a minimal injective resolution of Γ then I and J are projective”

**Paper or page:** [Nakayama-type phenomena in higher Auslander--Reiten theory](https://arxiv.org/abs/2402.15889v1). It says: “There is a one-to-one correspondence between Morita equivalence classes of representation-finite algebras and Morita equivalence classes of Auslander algebras.”

**Sources:**

- [M. Auslander, Representation theory of Artin algebras II, Communications in Algebra (1974)](https://doi.org/10.1080/00927877409412807)

### Counting indecomposable quiver representations makes Gabriel's ADE theorem statable

**Remember:** Count indecomposable finite-dimensional representations up to isomorphism.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G20 (Representations of quivers and partially ordered sets), 16G60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A finite-dimensional representation of a quiver assigns finite-dimensional vector spaces to vertices and linear maps to arrows over a fixed field. It is indecomposable if it is nonzero and cannot split as a direct sum of two nonzero representations. Finite representation type means finitely many isomorphism classes of such indecomposables.

**Problem.** Over an algebraically closed field, a finite connected quiver has finite representation type exactly when its underlying graph is Aₙ, Dₙ, E₆, E₇ or E₈. Its indecomposables then correspond to positive roots, with the vertex dimensions as coefficients.

**How the definition helps.** Finite type counts the summands in the Krull–Schmidt classification (our own explanation). Gabriel’s theorem identifies exactly the connected graphs with a finite list and identifies their dimension vectors with positive roots.

**Wikipedia:** [Gabriel's theorem](https://en.wikipedia.org/wiki/Gabriel%27s_theorem), [Quiver (mathematics)](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29). It says: “A quiver is of finite type if it has only finitely many isomorphism classes of indecomposable representations.”

**Sources:**

- [Gabriel, P. (1972). Unzerlegbare Darstellungen I. manuscripta mathematica 6.](https://doi.org/10.1007/BF01298413)
- [Bernstein, I. N., Gel'fand, I. M., Ponomarev, V. A. (1973). Coxeter functors and Gabriel's theorem. Russian Mathematical Surveys 28, 17–32.](https://doi.org/10.1070/RM1973v028n02ABEH001526)

### Global dimension one makes the quiver Euler form depend only on dimensions

**Remember:** With no Ext², Hom minus Ext¹ is a bilinear form in dimension vectors.

*Makes the theorem clean to state or prove.* MSC 16G20 (Representations of quivers and partially ordered sets), 16E10. arXiv math.RT. Level 3: graduate.

**Definition.** A ring is hereditary if every submodule of a projective module is projective, that is, if its global dimension is at most 1. The path algebra kQ of a finite quiver Q without oriented cycles is hereditary. Its modules are the representations of Q, which assign a vector space to each vertex and a linear map to each arrow.

**Problem.** Let M and N be finite-dimensional representations over k of the finite acyclic quiver Q, with dimension vectors m and n. Then dim Hom(M,N) − dim Ext¹(M,N) = ∑ᵢ mᵢnᵢ − ∑ᵢ→ⱼ mᵢnⱼ. Count each vertex once in the first sum and each arrow once in the second.

**How the definition helps.** Global dimension at most 1 stops the alternating sum of Ext dimensions after Ext¹, so a resolution of length 1 computes it. Apply Hom(−, N) to the standard resolution of M. Its two terms give the spaces of linear maps from Mᵢ to Nᵢ over vertices and from Mᵢ to Nⱼ over arrows (our own summary).

**Wikipedia:** [Hereditary ring](https://en.wikipedia.org/wiki/Hereditary_ring). It says: “An important example of a (left) hereditary ring is the path algebra of a quiver. This is a consequence of the existence of the standard resolution (which is of length 1) for modules over a path algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Path algebras turn quiver representations into modules over one algebra

**Remember:** Paths multiply by joining end to start; modules are representations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G20 (Representations of quivers and partially ordered sets), 16E60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** Over a field K, the path algebra of a quiver has all directed paths, including one length-zero path per vertex, as a basis. The product pq follows q then p if the end of q equals the start of p, and is zero otherwise.

**Problem.** For a quiver Γ with finitely many vertices, representations of Γ over K are the same as modules over KΓ.

**How the definition helps.** Each vertex path acts on a left module as a projection, and these projections sum to the identity. Each arrow acts from its source summand to its target summand. Conversely, composing the arrow maps gives the action of every path on the direct sum (our own argument).

**Wikipedia:** [Quiver (mathematics)](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29). It says: “This algebra has a unit element if and only if the quiver has only finitely many vertices. In this case, the modules over K Γ are naturally identified with the representations of Γ.”

**Sources:**

- [Gabriel, P. (1972). Unzerlegbare Darstellungen I. manuscripta mathematica 6.](https://doi.org/10.1007/BF01298413)

### Dividing out projective maps makes Auslander–Reiten duality an isomorphism

**Remember:** Ext¹ is dual to Hom only after removing projective and injective maps.

*Rules out counterexamples.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers), 18G65. arXiv math.RT. Level 3: graduate.

**Definition.** An Artin algebra is finitely generated as a module over a commutative Artinian ring; a finite-dimensional algebra is an example. Stable Hom divides out the maps that factor through a projective module, and costable Hom divides out those that factor through an injective module. D is duality over the base ring, and τ is the Auslander–Reiten translate.

**Problem.** For finitely generated modules M and N over an Artin algebra, Ext¹(M, N) ≅ D stable Hom(τ⁻¹N, M) ≅ D costable Hom(N, τM). The formula fails with ordinary Hom.

**How the definition helps.** Maps through projectives or injectives give zero extensions, so they must be removed before Ext¹ can be dual to a Hom space. For example, over k\[x\]/(x²) take N = k\[x\]/(x²), which is injective, and M = k, with τk = k. Then Ext¹(k, N) = 0, but Hom(N, k) = k is nonzero (our own example). The work went into Auslander and Reiten's construction of the duality through the transpose.

**Paper or page:** [A geometric model for the non-τ-rigid modules of type D̃ₙ](https://arxiv.org/abs/2507.02218). It says: “Then there are isomorphisms Ext¹(M,N) ≅ D H̲o̲m̲(τ⁻¹N, M) ≅ D H̅o̅m̅(N, τM).”

**Sources:**

- [Maurice Auslander and Idun Reiten, Representation theory of Artin algebras III, Almost split sequences, Communications in Algebra 3 (1975) 239–294](https://doi.org/10.1080/00927877508822046)

### Minimal almost split maps are unique

**Remember:** Factorization finds the map, and minimality prevents spare summands.

*Rules out counterexamples.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers). arXiv math.RT. Level 3: graduate.

**Definition.** A map to an indecomposable module is right almost split if it satisfies two conditions. It has no right inverse, and every map without a right inverse to that module factors through it. It is right minimal if every endomorphism of its source that leaves the map unchanged is invertible.

**Problem.** Two minimal right almost split maps to the same finite-dimensional module differ only by an isomorphism of sources.

**How the definition helps.** The two maps factor through each other, and minimality makes both composites of the comparison maps invertible (our own proof). Thus the comparison maps are isomorphisms. Adding a spare source summand mapped to zero preserves almost split factorization. Projection away from that summand preserves the enlarged map without being invertible, so minimality excludes it (our own example).

**Wikipedia:** [Auslander–Reiten theory](https://en.wikipedia.org/wiki/Auslander%E2%80%93Reiten_theory). It says: “there is an almost-split sequence as above, which is unique up to isomorphism.”

**Paper or page:** [Largest exact structures and almost split sequences on hearts of twin cotorsion pairs](https://arxiv.org/abs/2306.06616v3). It says: “x is minimal left almost split (resp. y is minimal right almost split).”

**Sources:**

- [Maurice Auslander, A functorial approach to representation theory](https://doi.org/10.1007/bfb0094058)

### Azumaya algebras survive base change

**Remember:** Extend the multiplication map along with the algebra.

*True by definition.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)). arXiv math.RA. Level 3: graduate.

**Definition.** Let A be an algebra over a commutative ring R. It is Azumaya if it is finitely generated projective, has positive rank at every prime, and satisfies the multiplication criterion. This criterion requires a ⊗ b ↦ (x ↦ axb) to identify A ⊗ᵣ Aᵒᵖ with Endᵣ(A).

**Problem.** Any change of commutative base ring takes Azumaya algebras to Azumaya algebras.

**How the definition helps.** Tensoring the multiplication isomorphism with the new ring gives the required isomorphism there, in our own argument. Endomorphisms commute with scalar extension for summands of finite free modules. Positive rank persists because each new prime lies over an old prime with the same fiber dimension.

**nLab:** [Azumaya algebra](https://ncatlab.org/nlab/show/Azumaya+algebra). It says: “As a left R-module, A finitely generated, faithful and projective”

**Sources:** none listed. No primary source with a working link was found.

### Bimodule projectivity kills higher cohomology

**Remember:** A projective input has no higher extensions.

*True by definition.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)), 16E40. arXiv math.RA. Level 3: graduate.

**Definition.** An algebra A over a field is separable if every surjective A-bimodule map onto A has an A-bimodule section. Equivalently, A is projective as a bimodule over itself.

**Problem.** A separable algebra has zero Hochschild cohomology in every positive degree with any bimodule coefficients. This cohomology measures extensions out of the algebra as a bimodule.

**How the definition helps.** With projectivity as the definition, higher extensions out of the algebra vanish, in our own argument. The work goes into identifying Hochschild cohomology with those extensions and proving the equivalence with semisimplicity after scalar extension.

**nLab:** [separable algebra](https://ncatlab.org/nlab/show/separable+algebra). It says: “Third, a k-algebra A is separable if and only if it is projective when considered as a left module of Aᵉ in the usual way.”

**Sources:**

- [Gerhard Hochschild, On the Cohomology Groups of an Associative Algebra](https://doi.org/10.2307/1969145)

### Separability preserves semisimplicity

**Remember:** Check the centers before trusting semisimplicity over a larger field.

*Rules out counterexamples.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)). arXiv math.RA. Level 3: graduate.

**Definition.** A finite-dimensional semisimple algebra is a product of matrix algebras over division algebras. It is separable over k if each factor’s center is a separable field extension of k. This means the minimal polynomial of each element of the center has distinct roots.

**Problem.** A finite-dimensional separable algebra stays semisimple after every extension of the base field.

**How the definition helps.** After scalar extension each separable center becomes a product of fields, and the central simple factors remain central simple over the respective fields. For our own counterexample, let k = 𝔽ₚ(t) and L = k(u) with uᵖ = t. Then u ⊗ 1 − 1 ⊗ u is nonzero in L ⊗ₖ L but has pth power zero. Hence this commutative algebra is not a product of fields.

**nLab:** [separable algebra](https://ncatlab.org/nlab/show/separable+algebra). It says: “separable algebras are the same as finite products of matrix algebras over finite-dimensional division algebras whose centers are finite-dimensional separable field extensions of the field k.”

**Paper or page:** [Stacks Project, Brauer, Lemma 11.4.9.](https://stacks.math.columbia.edu/tag/074H). It says: “Then A′ = A ⊗ₖ k′ is a finite central simple algebra over k′.”

**Sources:** none listed. No primary source with a working link was found.

### Brauer equivalence gives central simple algebras inverses

**Remember:** Forget the matrix size, and every algebra has an inverse.

*Makes the theorem clean to state or prove.* MSC 16K50 (Brauer groups (algebraic aspects)), 11R52. arXiv math.RA, math.NT. Level 3: graduate.

**Definition.** A central simple algebra over K is finite-dimensional, has center K, and has no proper nonzero two-sided ideals. Two such algebras are Brauer equivalent if each is a full matrix algebra over the same division algebra up to isomorphism. Tensor product over K defines the product of classes.

**Problem.** The Brauer classes form an abelian group. For a number field, a class is determined by its local invariants, and these sum to zero.

**How the definition helps.** The opposite algebra gives an inverse because A ⊗ Aᵒᵖ is the full endomorphism algebra of the vector space A. Tensor symmetry gives commutativity, and the class of K is the identity (our own argument). The Albert–Brauer–Hasse–Noether exact sequence gives the local determination and the zero sum of invariants.

**Wikipedia:** [Brauer group](https://en.wikipedia.org/wiki/Brauer_group). It says: “the Brauer classes are all invertible: the inverse of an algebra A is given by its opposite algebra”

**Sources:**

- [Richard Brauer, Helmut Hasse and Emmy Noether, Beweis eines Hauptsatzes in der Theorie der Algebren, Journal für die reine und angewandte Mathematik 167 (1932)](https://doi.org/10.1515/crll.1932.167.399)

### Centrality preserves simplicity

**Remember:** Fix the center before extending the field.

*Rules out counterexamples.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** A central simple algebra over a field k has center k and no proper nonzero two-sided ideals. Here we require finite dimension over k.

**Problem.** A finite central simple algebra stays central simple after any field extension.

**How the definition helps.** Centrality excludes ℂ over ℝ, where ℂ ⊗ℝ ℂ splits as ℂ × ℂ (our own example). Over an algebraic closure of the new field, the splitting theorem gives a full matrix algebra. A proper nonzero ideal would remain proper and nonzero there, contradicting simplicity. A nonscalar central element would remain central and nonscalar there, contradicting the matrix center (our own argument).

**Paper or page:** [Stacks Project, Brauer, Lemma 11.4.9.](https://stacks.math.columbia.edu/tag/074H), [Stacks Project, Brauer, Lemma 11.8.6.](https://stacks.math.columbia.edu/tag/0753). It says: “Then A′ = A ⊗ₖ k′ is a finite central simple algebra over k′.”

**Sources:** none listed. No primary source with a working link was found.

### Division representatives minimize splitting degrees

**Remember:** Remove the matrix factor to find the smallest splitting degree.

*Makes the theorem clean to state or prove.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** Write a finite-dimensional central simple k-algebra as a matrix algebra over a division algebra D. All algebras with the same D up to k-isomorphism form its Brauer class. The index is the positive integer d with d² = dimₖ D.

**Problem.** A splitting field is an extension over which the algebra becomes a full matrix algebra. The index is the least degree of a finite splitting field and divides every such degree.

**How the definition helps.** The division representative D splits over exactly the splitting fields of its class. The maximal subfield theorem gives a splitting field of degree d. For any finite splitting field L, the D-module Lᵈ has k-dimension d\[L:k\], divisible by dimₖ D = d² (our own argument). Thus d divides every finite splitting degree.

**Paper or page:** [Stacks Project, Brauer, Lemma 11.5.1.](https://stacks.math.columbia.edu/tag/074K), [Stacks Project, Brauer, Lemma 11.8.3.](https://stacks.math.columbia.edu/tag/0750), [Stacks Project, Brauer, Lemma 11.8.4.](https://stacks.math.columbia.edu/tag/0751), [Stacks Project, Brauer, Proposition 11.8.5.](https://stacks.math.columbia.edu/tag/0752). It says: “For any finite splitting field k′ for K the degree \[k′ : k\] is divisible by d.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced norms multiply

**Remember:** Split first and take the determinant at the smaller matrix size.

*True by definition.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** Take a finite-dimensional simple algebra with center equal to its base field. A splitting field turns it into a full matrix algebra by scalar extension. The reduced norm of an element is the determinant of its matrix there.

**Problem.** The reduced norm of a product is the product of the reduced norms.

**How the definition helps.** Over a splitting field, multiplicativity becomes the usual determinant rule, in our own argument. The work is showing that this determinant gives an element of the base field independent of the matrix representation.

**Paper or page:** [Constructive basic theory of central simple algebras](https://arxiv.org/abs/2102.12775v2). It says: “The coefficient sᵣ, denoted by Nrd(a), is called the reduced norm of a (over F).”

**Sources:**

- [Constructive basic theory of central simple algebras, Proposition 4.9](https://arxiv.org/abs/2102.12775v2)

### Noncommutative local rings use maximal left ideals, so non-units form an ideal

**Remember:** Local means one maximal left ideal, not one maximal two-sided ideal.

*Rules out counterexamples.* MSC 16L30 (Noncommutative local and semilocal rings, perfect rings), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** A unital ring is local if it has exactly one maximal left ideal.

**Problem.** In a local ring the non-units form a two-sided ideal. This ideal is the Jacobson radical, the intersection of all maximal left ideals. The quotient by it is a division ring.

**How the definition helps.** The left–right characterization of local rings identifies the unique maximal left ideal with the nonunits and with the unique maximal right ideal. It is therefore the radical, and every nonzero residue class has a unit representative (our own deduction). Two-by-two matrices over a field have only one maximal two-sided ideal. Yet the two diagonal coordinate projections are nonunits whose sum is one (our own example).

**Wikipedia:** [Local ring](https://en.wikipedia.org/wiki/Local_ring). It says: “However, in the non-commutative case, having a unique maximal two-sided ideal is not equivalent to being local.”

**Sources:** none listed. No primary source with a working link was found.

### Semiperfect rings give projective covers

**Remember:** Lift idempotents to lift the projective pieces.

*Rules out counterexamples.* MSC 16L30 (Noncommutative local and semilocal rings, perfect rings), 16D40. arXiv math.RA. Level 3: graduate.

**Definition.** Let J be the Jacobson radical of a unital ring R. The ring is semiperfect if R/J is semisimple Artinian and every idempotent in R/J lifts to an idempotent in R.

**Problem.** Every finitely generated left module over a semiperfect ring has a projective cover. This is a surjection from a direct summand of a free module such that no proper submodule still maps onto the target.

**How the definition helps.** Lifting idempotents lifts the projective summands needed in the projective cover theorem (our own explanation). Localize ℤ by inverting all integers coprime to six. The radical quotient is 𝔽₂ × 𝔽₃, but its idempotent (1,0) cannot lift in a domain. The corresponding simple module 𝔽₂ has no projective cover (our own example).

**Wikipedia:** [Perfect ring](https://en.wikipedia.org/wiki/Perfect_ring). It says: “A semiperfect ring is a ring over which every finitely generated left module has a projective cover.”

**Sources:**

- [Hyman Bass, Finitistic dimension and a homological generalization of semi-primary rings (1960).](https://doi.org/10.1090/s0002-9947-1960-0157984-8)

### Self-injectivity reverses syzygy

**Remember:** Kernels and cokernels reverse each other once projectives disappear.

*Rules out counterexamples.* MSC 16L60 (Quasi-Frobenius rings). arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra is self-injective if its regular left module is injective. In the stable category of finite-dimensional modules, two maps agree if their difference factors through a projective module.

**Problem.** For a finite-dimensional self-injective algebra, taking the kernel of a projective surjection defines an equivalence of the stable module category with itself. This kernel is called a syzygy.

**How the definition helps.** Self-injectivity makes finite-dimensional projectives and injectives coincide. Taking the cokernel of an injective embedding then inverts syzygy by the stable category theorem for Frobenius categories (our own explanation). For representations of 1 → 2, the nonprojective simple at 1 has projective syzygy. It therefore becomes zero under syzygy in the stable category (our own example).

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

**Definition.** The Jacobson radical of a ring with identity consists of the elements acting as zero on every simple left module. A simple module is nonzero and has no proper nonzero submodule. Equivalently, the radical is the intersection of all maximal left ideals.

**Problem.** A ring and its quotient by the Jacobson radical have the same simple modules under restriction. In particular, the quotient has zero Jacobson radical.

**How the definition helps.** Every simple action already kills the radical, so it factors through the quotient, in our own explanation. The work goes into showing that the maximal left ideal description gives the same ideal. In our own proof, use a nonzero vector of a simple module to present it as a quotient of the regular module.

**nLab:** [Jacobson radical](https://ncatlab.org/nlab/show/Jacobson+radical). It says: “Given any ring R, the quotient R/J(R) is semiprimitive.”

**Sources:** none listed. No primary source with a working link was found.

### Testing aRb instead of ab makes simple rings and matrix rings prime

**Remember:** Prime rings let the whole ring sit between a and b.

*Makes the theorem clean to state or prove.* MSC 16N60 (Prime and semiprime associative rings), 16D60. arXiv math.RA. Level 3: graduate.

**Definition.** A nonzero unital ring R is prime if aRb contains a nonzero element for every pair of nonzero elements a,b ∈ R.

**Problem.** Every simple ring, every primitive ring and every matrix ring over an integral domain is prime. A commutative ring is prime exactly when it is an integral domain.

**How the definition helps.** In a faithful simple module, choose v with bv ≠ 0 for nonzero b. Simplicity gives Rbv equal to the whole module, so nonzero a cannot kill Rbv (our own). Simple unital rings are primitive, and a matrix unit connects nonzero entries of two matrices over a domain (our own). In a commutative ring, aRb vanishes exactly when ab vanishes.

**Wikipedia:** [Prime ring](https://en.wikipedia.org/wiki/Prime_ring). It says: “This definition can be regarded as a simultaneous generalization of both integral domains and simple rings.”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, every Artinian ring is automatically Noetherian

**Remember:** Descending right ideals stabilize in an Artinian ring, ascending ones in a Noetherian ring.

*Rules out counterexamples.* MSC 16P20 (Artinian rings and modules (associative rings and algebras)), 16P40. arXiv math.RA. Level 3: graduate.

**Definition.** A unital ring is right Artinian if every descending chain of right ideals stabilizes. It is right Noetherian if every ascending chain of right ideals stabilizes.

**Problem.** Every right Artinian ring with identity is right Noetherian. A unital right module over such a ring is Artinian exactly when it is Noetherian, equivalently when it has finite length.

**How the definition helps.** The Prüfer p-group with zero multiplication lacks an identity and satisfies only the descending chain condition (our own). A unital right Artinian ring has nilpotent radical J and semisimple Artinian quotient. Each right module M thus has finitely many semisimple layers MJⁱ/MJⁱ⁺¹ (our own). Either chain condition forces each layer to have finite length, and finite length gives both conditions (our own).

**Wikipedia:** [Hopkins–Levitzki theorem](https://en.wikipedia.org/wiki/Hopkins%E2%80%93Levitzki_theorem), [Artinian ring](https://en.wikipedia.org/wiki/Artinian_ring), [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “Since it is known that right Artinian rings are semiprimary, a direct corollary of the theorem is: a right Artinian ring is also right Noetherian.”

**Sources:**

- [C. Hopkins, Rings with minimal condition for left ideals, Annals of Mathematics 40 (1939) 712–730](https://doi.org/10.2307/1968951)
- [J. Levitzki, On rings which satisfy the minimum condition for the right-hand ideals, Compositio Mathematica 7 (1940) 214–222](https://www.numdam.org/item/CM_1940__7__214_0/)

### Semiprime Goldie rings have semisimple fractions

**Remember:** Semiprimeness excludes the square-zero ideal that survives in the dual numbers.

*Rules out counterexamples.* MSC 16P60 (Chain conditions on annihilators and summands: Goldie-type conditions), 16N60. arXiv math.RA. Level 3: graduate.

**Definition.** A ring is right Goldie if every ascending chain of right annihilators stabilizes and it contains no infinite direct sum of nonzero right ideals. The right annihilator of S consists of all r with sr = 0 for every s ∈ S. A ring is semiprime if every two-sided ideal with square zero is zero.

**Problem.** A semiprime right Goldie ring has a semisimple Artinian right ring of fractions. Such a ring of fractions is a finite product of matrix rings over division rings.

**How the definition helps.** Semiprimeness excludes the dual numbers ℚ\[ε\]/(ε²), whose nonzero ideal (ε) has square zero (our own). This finite-dimensional ring is right Goldie, but all its regular elements are already units. Its fraction ring therefore retains (ε) and cannot be semisimple. Under both hypotheses, Goldie’s theorem gives the fraction ring and Artin–Wedderburn gives the matrix decomposition (our own explanation).

**Wikipedia:** [Goldie's theorem](https://en.wikipedia.org/wiki/Goldie%27s_theorem). It says: “the semiprime right Goldie rings are precisely those that have a semisimple Artinian right classical ring of quotients”

**Paper or page:** [Pointed Hopf algebras, the Dixmier-Moeglin Equivalence and Noetherian group algebras](https://arxiv.org/abs/2507.23730v2). It says: “R is semiprime right Goldie.”

**Sources:**

- [Alfred Goldie, Semi-Prime Rings with Maximum Condition (1960).](https://doi.org/10.1112/plms/s3-10.1.201)

### Defining the symmetric algebra as free commutative gives its tensor-algebra presentation

**Remember:** To make the free algebra commutative, keep the generators and kill the commutators.

*True by definition. Confidence: medium.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 15A72. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** Define the symmetric algebra of a module M as the free commutative algebra on M. Each linear map from M into a commutative algebra extends uniquely to an algebra map. The tensor algebra is the free associative algebra on M.

**Problem.** Over any commutative ring, the symmetric algebra is the quotient of the tensor algebra by the ideal generated by all commutators ab − ba.

**How the definition helps.** The quotient has exactly the universal property of the symmetric algebra (our own). Every linear map from M into a commutative algebra extends uniquely to the tensor algebra. The extension kills every commutator and therefore factors uniquely through the quotient.

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra S V of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Tensor algebras defined as free algebras commute with localization

**Remember:** Freely adding products commutes with changing the scalar ring.

*True by definition.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 13B30. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** The tensor algebra T(M) of a module M is the free associative algebra on M. Each linear map from M into an algebra extends uniquely to an algebra map. A construction takes the sum of all tensor powers of M, with concatenation as product.

**Problem.** Let S be a multiplicative subset of a commutative ring R; localizing at S makes its elements invertible. Then the localization of T(M) at S is the tensor algebra of the localized module S⁻¹M over S⁻¹R.

**How the definition helps.** Both algebras classify the same maps (our own). For every S⁻¹R-algebra B, maps from the localized tensor algebra to B correspond to R-linear maps M → B. These extend uniquely to S⁻¹R-linear maps S⁻¹M → B, which classify maps from the other tensor algebra.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.13.6](https://stacks.math.columbia.edu/tag/0C6F). It says: “Then S⁻¹T<sub>R</sub>(M) = T<sub>S⁻¹R</sub>(S⁻¹M) for any R-module M.”

**Sources:**

- [Stacks Project, Algebra, Lemma 10.13.6](https://stacks.math.columbia.edu/tag/0C6F)

### Universal properties make free rings into monoid rings of words

**Remember:** Extend an assignment to words first, then extend it linearly.

*True by definition.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 20M25. arXiv math.RA. Level 3: graduate.

**Definition.** The free unital ring on X receives a map from X through which every function into a unital ring extends uniquely to a unital homomorphism. For a monoid M, ℤ\[M\] consists of finite formal integer combinations of its elements, with multiplication extending the monoid product bilinearly.

**Problem.** The free ring on X is the monoid ring of all finite words in X, with multiplication given by joining words.

**How the definition helps.** Words followed by linear extension give the required unique homomorphism (our own). Send each word to the ordered product of its letters’ images, sending the empty word to 1. Extending by integer linearity preserves multiplication and leaves no choices.

**Wikipedia:** [Free algebra](https://en.wikipedia.org/wiki/Free_algebra). It says: “The non-commutative polynomial ring may be identified with the monoid ring over R of the free monoid of all finite words in the Xᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Group algebras as left adjoints send free products to algebra coproducts

**Remember:** An invertible group generator must map to an invertible algebra element.

*True by definition.* MSC 16S34 (Group rings), 16S10. arXiv math.RA, math.GR. Level 3: graduate.

**Definition.** For a commutative ring R and group G, the group algebra R\[G\] receives a group map from G to its units. Every group map from G to the units of a unital associative R-algebra B extends uniquely to an R-algebra map R\[G\] → B.

**Problem.** The group algebra of a free product of groups is the coproduct of their group algebras, among unital associative R-algebras. The coproduct receives one map from each factor and is universal with this property.

**How the definition helps.** Maps from the group algebra of a free product classify pairs of group maps from the factors to the target’s units (our own). These pairs correspond to pairs of algebra maps from the factor algebras, exactly the coproduct property.

**nLab:** [group of units](https://ncatlab.org/nlab/show/group+of+units). It says: “where R\[−\] forms the group algebra over R”

**Sources:** none listed. No primary source with a working link was found.

### The Frobenius dual makes finite group algebras self-injective

**Remember:** The Frobenius isomorphism identifies the group algebra with an injective module.

*True by definition.* MSC 16S34 (Group rings), 16D50, 16L60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A finite-dimensional unital algebra A over k is Frobenius if A is isomorphic to its vector-space dual as a right A-module. The dual action is given by (f·a)(b) = f(ab). The bilinear-form definition instead asks for a nondegenerate form B with B(ab,c) = B(a,bc).

**Problem.** For a finite group G and any field k, the group algebra k\[G\] is injective as a right module over itself. Here injectivity means that maps from a submodule extend to the whole module. Every finitely generated projective right k\[G\]-module is therefore injective.

**How the definition helps.** The Frobenius isomorphism makes the regular module injective. For k\[G\], pairing a and b by the identity coefficient of ab pairs each basis element with its inverse (our own). This gives the right-module isomorphism with the dual, which is injective because linear functionals extend from subspaces (our own). Every finitely generated projective is a summand of a finite free module and thus inherits injectivity (our own).

**Wikipedia:** [Frobenius algebra](https://en.wikipedia.org/wiki/Frobenius_algebra). It says: “a finite-dimensional, unital, associative algebra is Frobenius if and only if the injective right A-module Homₖ(A,k) is isomorphic to the right regular representation of A.”

**Sources:** none listed. No primary source with a working link was found.

### Linear resolutions invert Hilbert series

**Remember:** Matching degrees turn the resolution into a signed inverse series.

*True by definition.* MSC 16S37 (Quadratic and Koszul algebras). arXiv math.RA, math.RT. Level 3: graduate.

**Definition.** Let A be a nonnegatively graded algebra over a field k with A₀ = k. It is Koszul if the quotient k by its positive-degree ideal has a graded free resolution generated in degree n at every position n.

**Problem.** Let A be a Koszul algebra with finite-dimensional graded pieces, and let B be its quadratic dual. Then their Hilbert series, which record dimensions by degree, satisfy Hₐ(t)Hᵦ(−t) = 1.

**How the definition helps.** The Koszul complex criterion gives an exact resolution with dim Bₙ free generators in degree n at position n. Taking alternating dimensions in each degree therefore multiplies Hₐ(t) by Hᵦ(−t) (our own). The resolved module k contributes 1.

**nLab:** [Koszul algebra](https://ncatlab.org/nlab/show/Koszul+algebra). It says: “has a projective resolution where the ith term is generated in grade i.”

**Sources:**

- [Stewart Priddy, Koszul resolutions](https://doi.org/10.1090/s0002-9947-1970-0265437-8)

### Adjoining an identity makes every rng an ideal of a ring

**Remember:** Add a formal 1 to any rng, and it becomes an ideal.

*True by definition.* MSC 16S70 (Extensions of associative rings by ideals), 16D25. arXiv math.RA. Level 3: graduate.

**Definition.** The Dorroh extension of a rng R is the set ℤ × R, with addition by components. The product is (n₁, r₁)(n₂, r₂) = (n₁n₂, n₁r₂ + n₂r₁ + r₁r₂). Its identity is (1, 0), and R sits in it as the ideal of pairs (0, r).

**Problem.** Every rng is an ideal in a ring with 1, namely its Dorroh extension.

**How the definition helps.** Multiplication by any pair on either side preserves the pairs (0,r), by the product formula (our own). The map r ↦ (0,r) preserves addition and multiplication and identifies R with this ideal. The pair (1,0) acts as the identity.

**Wikipedia:** [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “Every rng is an ideal in some ring, and every ideal of a ring is a rng.”

**Sources:**

- [J. L. Dorroh, Concerning adjunctions to algebras, Bulletin of the American Mathematical Society 38 (1932) 85–88](https://doi.org/10.1090/S0002-9904-1932-05333-2)

### The Gerstenhaber bracket puts deformation obstructions in Hochschild cohomology

**Remember:** Associativity is one bracket equation, so obstructions become cohomology classes.

*Makes the theorem clean to state or prove.* MSC 16S80 (Deformations of associative rings), 16E40, 53D55. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** For bilinear maps f,g on A, define (f∘g)(a,b,c) = f(g(a,b),c) − f(a,g(b,c)). For a bilinear product μ, its associator is μ∘μ, and its Gerstenhaber self-bracket is 2(μ∘μ).

**Problem.** Let A be an associative algebra whose third Hochschild cohomology HH³(A, A) is zero. Then every Hochschild 2-cocycle B₁ is the first term of an associative formal deformation μ + ħB₁ + ħ²B₂ + ⋯ (Gerstenhaber).

**How the definition helps.** Associativity requires the formal product’s associator to vanish coefficient by coefficient (our own). At each higher order, Gerstenhaber’s obstruction theorem identifies the known associator coefficient as a Hochschild 3-cocycle. Since HH³ vanishes, a bilinear correction cancels that coefficient, extending the deformation one order at a time.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Note that μ is associative iff μ ∘ μ = 0 iff \[μ, μ\] = 0.”

**Sources:**

- [Murray Gerstenhaber, On the deformation of rings and algebras, Annals of Mathematics 79 (1964) 59–103](https://doi.org/10.2307/1970484)

### The Ore condition makes every element of a localization a single fraction

**Remember:** Move denominators left and replace right cancellation by left cancellation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S85 (Associative rings of fractions and localizations). arXiv math.RA. Level 3: graduate.

**Definition.** A multiplicative subset S of a ring R is left Ore here if both conditions hold. For every r ∈ R and s ∈ S, some t ∈ S and u ∈ R satisfy tr = us. Whenever ns = ms for n,m ∈ R and s ∈ S, some t ∈ S satisfies tn = tm.

**Problem.** For every left Ore set S in a ring R, the left localization S⁻¹R exists. Every element has the form s⁻¹r with s ∈ S and r ∈ R.

**How the definition helps.** The first condition moves a denominator left and gives common left denominators (our own). The second lets the fraction construction respect equality after right multiplication by a denominator. The Ore localization theorem constructs the ring on equivalence classes of pairs (s,r), each representing s⁻¹r.

**nLab:** [Ore set](https://ncatlab.org/nlab/show/Ore+set), [Ore localization](https://ncatlab.org/nlab/show/Ore+localization). It says: “For every left Ore set S⊂R in a monoid or ring R, the left Ore localization exists and it can be defined as follows. As a set, S⁻¹R := S×R/∼”

**Sources:**

- [Øystein Ore, Linear equations in non-commutative fields, Annals of Mathematics 32 (1931) 463–477](https://doi.org/10.2307/1968245)

### Torsion classes form lattices

**Remember:** Intersection keeps the closure rules, and generated closure gives joins.

*True by definition.* MSC 16S90 (Torsion theories; radicals on module categories (associative algebraic aspects)). arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** Among finite-dimensional modules over a finite-dimensional algebra, a torsion class contains zero and all quotients of its members. It contains every module with a submodule and corresponding quotient both in the class.

**Problem.** Ordered by inclusion, the torsion classes form a complete lattice. Every family has a greatest lower bound and a least upper bound.

**How the definition helps.** The two closure rules survive arbitrary intersections, giving the greatest lower bound directly. In our own argument, intersect all torsion classes containing the given family to obtain its least upper bound. The equivalence with torsion pairs uses each module’s largest submodule in the class. Its quotient receives only zero maps from members of the class.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Then the intersection of arbitrarily many torsion classes is a torsion class.”

**Sources:** none listed. No primary source with a working link was found.

### Convolution-inverse antipodes exist in connected graded bialgebras by geometric series

**Remember:** Invert the identity by a geometric series in positive degrees.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 57T05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** For a bialgebra with multiplication m and coproduct Δ, define convolution by f ⋆ g = m ∘ (f ⊗ g) ∘ Δ. An antipode is a two-sided convolution inverse of the identity map, with convolution unit u given by the counit followed by the algebra unit.

**Problem.** Let H be a bialgebra over a field, graded by the nonnegative integers, whose degree-zero part is the field. Then H has an antipode, so H is a Hopf algebra.

**How the definition helps.** The geometric series for π = u − id gives a convolution inverse of id (our own). In degree n, each iterated coproduct with more than n factors has a degree-zero factor in every homogeneous term. Since π kills degree zero, its convolution powers vanish there beyond n. The finite geometric sum in each degree thus gives the inverse.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “it is common to define Hopf algebras without mentioning the antipode, since in many topological cases of interest it exists automatically.”

**Sources:** none listed. No primary source with a working link was found.

### Convolution-inverse antipodes make bialgebra maps commute with antipodes

**Remember:** Both composites invert f, so they are equal.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** For maps f,g from a coalgebra H to an algebra K, define f ⋆ g = mₖ ∘ (f ⊗ g) ∘ Δₕ. Its unit u is the counit of H followed by the unit of K. An antipode is a two-sided convolution inverse of the identity on a bialgebra.

**Problem.** Let f be a bialgebra map between Hopf algebras H and K with antipodes S and S′. Then f ∘ S = S′ ∘ f.

**How the definition helps.** A left inverse and a right inverse of f under convolution must agree (our own). Because f preserves multiplication and the unit, (f ∘ S) ⋆ f = u. Because f preserves the coproduct and counit, f ⋆ (S′ ∘ f) = u.

**Wikipedia:** [Hopf algebra](https://en.wikipedia.org/wiki/Hopf_algebra). It says: “The identity of the convolution algebra is η ∘ ε.”

**Sources:** none listed. No primary source with a working link was found.

### Defining quasitriangular structures as module braidings makes module categories braided

**Remember:** A coherent swap of modules already is a braiding.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 18M15. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** A braiding is a natural family of isomorphisms V ⊗ W → W ⊗ V satisfying both hexagon identities. In the module formulation, a quasitriangular structure on H is a braiding on its category of left modules.

**Problem.** For a quasitriangular Hopf algebra, the category of left modules is braided.

**How the definition helps.** The module formulation supplies the braiding directly (our own). The reconstruction theorem identifies this definition with the usual universal R-matrix definition. Naturality recovers the action of R from the braiding on two regular modules, and the hexagon identities give its coproduct identities (our own).

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

**Definition.** A Hopf algebra has a coproduct Δ into its tensor square, a counit to scalars, and an antipode playing the role of inversion. A Hopf ideal I is a two-sided ideal killed by the counit and preserved by the antipode. Each Δ(x) for x in I must be a sum of tensors having at least one factor in I.

**Problem.** Quotienting a Hopf algebra by a Hopf ideal gives a Hopf algebra with the induced operations.

**How the definition helps.** The extra conditions make every operation descend, so the identities descend, in our own explanation. Our own counterexample is the ideal generated by g − 2 in the rational group algebra of an infinite cyclic group. The counit sends g to 1, so it cannot factor through that quotient. The work in applying the theorem goes into checking the coideal and antipode conditions, in our own explanation.

**nLab:** [quotient bialgebra](https://ncatlab.org/nlab/show/quotient+bialgebra). It says: “A Hopf ideal is a bialgebra ideal which is invariant under the antipode map.”

**Sources:** none listed. No primary source with a working link was found.

### Hopf–Galois extensions are exactly affine torsors in the commutative case

**Remember:** The Galois map is the torsor map read on coordinate rings.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 58B32, 14L30. arXiv math.QA, math.AG. Level 3: graduate.

**Definition.** Let E be a right comodule algebra over a Hopf algebra H, with coaction ρ and coinvariant subalgebra U. The extension is H-Galois if the map E ⊗ᵤ E → E ⊗ H given by x ⊗ y ↦ (x⊗1)ρ(y) is bijective.

**Problem.** Let G = Spec H act on X = Spec E with affine quotient Y = Spec U. Then X → Y is a G-torsor exactly when U ⊂ E is H-Galois and E is faithfully flat over U. Faithfully flat means that tensoring with E preserves and detects exact sequences.

**How the definition helps.** For affine schemes, the torsor map (x,g) ↦ (x,xg) induces exactly the canonical map on coordinate rings (our own). Thus one map is an isomorphism exactly when the other is. Faithful flatness supplies the covering condition in the torsor definition.

**nLab:** [Hopf-Galois extension](https://ncatlab.org/nlab/show/Hopf-Galois+extension). It says: “the algebra E of regular functions over the total scheme X of an affine G-torsor X→Y, whose base Y also happens to be affine, is a commutative H-Hopf–Galois extension of the algebra of regular functions U on the base”

**Paper or page:** [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860). It says: “is bijective if and only if α: X×G → X×<sub>X/G</sub> X is bijective, and this holds if and only if the G-action is free.”

**Sources:**

- [H.-J. Schneider, Principal homogeneous spaces for arbitrary Hopf algebras, Israel Journal of Mathematics 72 (1990) 167–195](https://doi.org/10.1007/BF02764619)

### Normal Hopf subalgebras give quotients

**Remember:** Conjugation stability turns a one-sided ideal into a quotient.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** In a Hopf algebra H the coproduct writes Δ(h) as a sum of tensors a ⊗ b, and the antipode S generalizes inversion. A Hopf subalgebra K is normal if both adjoint actions preserve it. For h in H and x in K, this requires both sums ∑ axS(b) and ∑ S(a)xb to belong to K.

**Problem.** For normal K, the kernel of its counit, the map to scalars, generates the same left and right ideal in H. The quotient by this ideal inherits all the Hopf algebra operations.

**How the definition helps.** Normality lets generators cross from either side, giving the common Hopf ideal in the normality theorem. Its quotient inherits the operations (our own). In ℚ\[S₃\], the left ideal generated by (12) − 1 identifies elements of each left coset of ⟨(12)⟩ (our own). Right multiplication fails to preserve these identifications because conjugation moves this subgroup.

**Paper or page:** [Locally Frobenius algebras and Hopf algebras](https://arxiv.org/abs/2212.00437v3). It says: “Then HK⁺ = K⁺H and this is a Hopf ideal in H”

**Sources:** none listed. No primary source with a working link was found.

### The Hopf algebra axioms are what make modules rigid monoidal

**Remember:** Comultiplication gives tensor products of modules; the antipode gives their duals.

*Makes the theorem clean to state or prove.* MSC 16T05 (Hopf algebras and their applications), 18M05. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** A Hopf algebra over a field is a bialgebra whose identity map has a two-sided inverse S under convolution. For endomorphisms f,g, convolution is m ∘ (f ⊗ g) ∘ Δ, with unit given by the counit followed by the algebra unit.

**Problem.** For a finite-dimensional Hopf algebra H over a field, its finite-dimensional modules form a rigid monoidal category with monoidal forgetful functor. Conversely, such a structure on finite-dimensional modules of a finite-dimensional algebra, with strong monoidal forgetful functor, reconstructs a Hopf structure up to isomorphism.

**How the definition helps.** The coproduct acts on tensor products, the counit acts on the unit, and the antipode gives the dual action (our own). Finite dimensionality makes the antipode bijective, giving both left and right duals. Tannaka reconstruction recovers the Hopf operations from the monoidal structure and the forgetful functor.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra), [Tannaka duality](https://ncatlab.org/nlab/show/Tannaka+duality). It says: “a Hopf algebra structure on an associative algebra is precisely the structure such as to make its category of modules into a rigid monoidal category equipped with a fiber functor”

**Sources:**

- [K.-H. Ulbrich, On Hopf algebras and rigid monoidal categories, Israel J. Math. 72 (1990) 252–256](https://doi.org/10.1007/BF02764622)

### Triangular swaps cancel

**Remember:** A second swap must undo the first one.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** A quasitriangular Hopf algebra has an invertible tensor R that gives consistent swaps on tensor products of modules. It is triangular if exchanging the two tensor factors of R gives R⁻¹.

**Problem.** Swapping two modules over a triangular Hopf algebra and then swapping them back gives the identity map. This property makes the module braiding symmetric.

**How the definition helps.** The double swap acts by R₂₁R, which equals 1 under triangularity (our own). For a counterexample, grade complex vector spaces by integers modulo three and weight the swap of degrees a,b by ωᵃᵇ. A primitive cube root ω gives a braiding because the weights multiply under degree addition (our own). Two swaps in degrees 1,1 multiply by ω².

**nLab:** [triangular Hopf algebra](https://ncatlab.org/nlab/show/triangular+Hopf+algebra). It says: “a braided monoidal category/symmetric monoidal category”

**Sources:** none listed. No primary source with a working link was found.

### Writing Hopf axioms as maps makes the finite dual Hopf

**Remember:** Reverse every arrow, and the Hopf axioms come back.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** A bialgebra is a unital associative algebra and counital coassociative coalgebra whose coproduct and counit are algebra maps. A Hopf algebra is a bialgebra with an endomorphism S satisfying m(S ⊗ id)Δ = ηε = m(id ⊗ S)Δ. Here m, η, Δ and ε denote multiplication, unit, coproduct and counit.

**Problem.** Let H be a finite-dimensional Hopf algebra. Its linear dual H\* is a Hopf algebra whose operations are the transposes of the operations of H.

**How the definition helps.** Transposition carries each defining identity to its dual identity (our own). Finite dimensionality identifies the dual of H ⊗ H with H\* ⊗ H\*. Multiplication and unit exchange roles with coproduct and counit, while transposing the antipode identities gives the required identities for S\*.

**Wikipedia:** [Hopf algebra](https://en.wikipedia.org/wiki/Hopf_algebra). It says: “The definition of Hopf algebra is self-dual”

**Sources:** none listed. No primary source with a working link was found.

### Building the finite dual from finite quotients makes it a coalgebra

**Remember:** Take duals of finite quotients first, then take the union.

*True by definition.* MSC 16T15 (Coalgebras and comodules; corings), 16T05. arXiv math.QA. Level 3: graduate.

**Definition.** For an algebra A over a field, the finite dual A° consists of all linear functionals vanishing on some two-sided ideal of finite codimension. Thus A° is the union of the dual spaces (A/I)\* over all such ideals I.

**Problem.** For an associative unital algebra A over a field, the finite dual A° is a coalgebra. Its comultiplication and counit are the transposes of the multiplication and the unit.

**How the definition helps.** The finite dual is a directed union of coalgebras with compatible operations (our own). Each finite quotient dual has the transposed product and unit as its coproduct and counit. Intersecting two finite-codimensional ideals gives another such ideal whose quotient dual contains both original duals. These operations therefore define a coalgebra on their union.

**nLab:** [dual bialgebra](https://ncatlab.org/nlab/show/dual+bialgebra). It says: “This subspace is consequently a coalgebra”

**Sources:** none listed. No primary source with a working link was found.

### Strong gradings recover modules

**Remember:** Products with inverse degrees must generate the identity.

*Rules out counterexamples.* MSC 16W50 (Graded rings and modules (associative rings and algebras)). arXiv math.RA. Level 3: graduate.

**Definition.** A group grading decomposes a ring into additive pieces indexed by group elements. Products from degrees g and h must lie in degree gh. The grading is strong if finite sums of such products fill the piece of degree gh.

**Problem.** For a strongly graded unital ring, taking the identity-degree part gives an equivalence from graded right modules to modules over the identity-degree subring. Tensoring with the whole ring gives the inverse.

**How the definition helps.** Strong grading expresses 1 as a sum of products from any degree and its inverse, in our own explanation. These expressions give the inverse to the map sending m ⊗ r to mr in Dade’s theorem. In our own counterexample, grade k\[x\] by polynomial degree and place the module k\[x\]/(x) entirely in degree one. Taking its degree-zero part loses the whole module.

**Paper or page:** [Classification conjectures for Leavitt path algebras](https://arxiv.org/abs/2401.04262v3). It says: “The following are equivalent. (1) R is strongly graded”

**Sources:**

- [Everett Dade, Group-graded rings and modules](https://doi.org/10.1007/bf01161413)

### Ring completion as a left adjoint preserves pushouts of semirings

**Remember:** Adding negatives freely commutes with gluing.

*True by definition. Confidence: medium.* MSC 16Y60 (Semirings), 18A30. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The ring completion of a semiring S is a ring C with a semiring map S → C. Every semiring map from S to a ring extends uniquely to a unital ring map from C.

**Problem.** Ring completion sends a pushout of semirings to the pushout of their ring completions. A pushout glues two objects along a common part.

**How the definition helps.** Ring completion preserves pushouts because it is a left adjoint (our own application). Maps from the completed pushout to a ring correspond to pairs of semiring maps agreeing on the common source. These correspond to ring maps from the two completions agreeing on the completion of that source.

**nLab:** [rig](https://ncatlab.org/nlab/show/rig). It says: “this gives the left adjoint F: Rig → Ring to the forgetful functor U: Ring → Rig.”

**Sources:** none listed. No primary source with a working link was found.

### Over t-unital rings, t-unital modules form an abelian category

**Remember:** Multiplication identifies tensor with the module, or action identifies the module with Hom.

*Makes the theorem clean to state or prove.* MSC 16D10 (General module theory in associative algebras), 16D90. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A possibly nonunital ring R is t-unital if multiplication R ⊗ᵣ R → R is an isomorphism. A left module P is t-unital if the action R ⊗ᵣ P → P is an isomorphism. It is c-unital if p ↦ (r ↦ rp) gives an isomorphism P → Homᵣ(R,P).

**Problem.** Over a t-unital ring, the categories of t-unital and of c-unital left modules are abelian and naturally equivalent to each other.

**How the definition helps.** The definitions single out modules fixed by the tensor and Hom functors (our own). Positselski’s equivalence theorem identifies these functors as inverse equivalences on the specified categories and proves abelianness.

**Paper or page:** [Tensor-Hom formalism for modules over nonunital rings](https://arxiv.org/abs/2308.16090v4). It says: “Nevertheless, the categories of t-unital and c-unital left R-modules are abelian and naturally equivalent to each other”

**Sources:**

- [Leonid Positselski, Tensor-Hom formalism for modules over nonunital rings, arXiv:2308.16090 (2023)](https://arxiv.org/abs/2308.16090v4)

### The defect, as maps into the forgetful functor, is adjoint to Yoneda

**Remember:** Test F against the forgetful functor, which one free generator represents.

*True by definition.* MSC 16D90 (Module categories in associative algebras), 18A25. arXiv math.RT, math.CT. Level 4: research.

**Definition.** Let Λ be a ring and F an additive functor from left Λ-modules to abelian groups. The defect w(F) is the set of natural transformations from F to the forgetful functor, which sends a module to its underlying group. The forgetful functor equals Hom(Λ, −), so the action of Λ on itself makes w(F) a Λ-module.

**Problem.** For every such F and every left Λ-module A, natural transformations from F to Hom(A, −) correspond to Λ-linear maps from A to w(F). The correspondence is natural in F and in A.

**How the definition helps.** Evaluation gives the correspondence in both directions (our own). Given a transformation τ, send a ∈ A to the transformation with component x ↦ τₘ(x)(a) on each module M. Conversely, a linear map h into the defect gives τₘ(x)(a) = h(a)ₘ(x). These formulas are inverse and natural.

**Paper or page:** [The defect, the Malgrange functor, and linear control systems](https://arxiv.org/abs/2403.13520v1). It says: “The defect and the contravariant Yoneda embedding form a right adjoint pair”

**Sources:**

- [Alex Martsinkovsky, The defect, the Malgrange functor, and linear control systems, arXiv:2403.13520 (2024)](https://arxiv.org/abs/2403.13520v1)

### Dominant dimension two characterizes endomorphism algebras of generator-cogenerators

**Remember:** Count initial projectives in the regular module’s minimal injective resolution.

*Makes the theorem clean to state or prove.* MSC 16E10 (Homological dimension in associative algebras), 16G10, 16D90. arXiv math.RT, math.RA. Level 4: research.

**Definition.** For a finite-dimensional algebra Γ, dominant dimension counts consecutive projective terms starting at the injective hull in its minimal left regular injective resolution. It is infinite if every term is projective. A finite-dimensional generator-cogenerator contains each indecomposable projective and each indecomposable injective as a direct summand up to isomorphism.

**Problem.** Up to Morita equivalence, finite-dimensional algebras of dominant dimension at least two are exactly the opposite endomorphism algebras of finite-dimensional generator-cogenerators. The opposite endomorphism algebra of the left regular module’s injective hull recovers the original base algebra up to Morita equivalence.

**How the definition helps.** Dominant dimension at least 2 is a homological way to say that Γ is a double centralizer, so one inequality replaces a structural description. Here double centralizer means that Γ is the ring of endomorphisms of I that commute with End(I) (our own summary). The work goes into this double-centralizer theorem. The Auslander correspondence is the special case where M contains every indecomposable module.

**Paper or page:** [Nakayama-type phenomena in higher Auslander--Reiten theory](https://arxiv.org/abs/2402.15889v1). It says: “There is a one-to-one correspondence between equivalence classes of Morita–Tachikawa pairs and Morita equivalence classes of finite dimensional algebras Γ such that domdim Γ ≥ 2.”

**Sources:** none listed. No primary source with a working link was found.

### Averaging computes reflexive homology

**Remember:** Resolve the trivial reflection module before taking coinvariants.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 19D55. arXiv math.AT. Level 4: research.

**Definition.** Let C be the Hochschild chain complex of a reflexive module with its signed reflection action by the two-element group C₂. In the derived coinvariant model, reflexive homology is the homology of P ⊗ₖ₍C₂₎ C, using a projective right k\[C₂\]-resolution P of the trivial module k.

**Problem.** Over a commutative ring in which two is invertible, reflexive homology equals the coinvariants of Hochschild homology. Coinvariants identify every class with its reflection.

**How the definition helps.** Averaging a class with its reflection identifies coinvariants with the image of an averaging projection (our own). Taking this image preserves exact sequences, so ordinary coinvariants compute derived coinvariants and commute with homology (our own). Graves identifies the derived coinvariant model with the original definition using functors on the reflexive category.

**Paper or page:** [Reflexive homology](https://arxiv.org/abs/2204.07985v3). It says: “The reflexive homology HR⋆(F) is naturally isomorphic to the hyperhomology of the group C₂ with coefficients in the Hochschild complex C⋆(F).”

**Sources:**

- [Daniel Graves, Reflexive homology](https://arxiv.org/abs/2204.07985v3)

### Calabi–Yau algebras have Serre duality for finite-dimensional modules

**Remember:** A smooth algebra’s derived bimodule dual is the algebra shifted by minus d.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16E65. arXiv math.RA, math.RT. Level 4: research.

**Definition.** Modules over Aᵉ = A ⊗ₖ Aᵒᵖ are A-bimodules, and A is homologically smooth when A is a perfect complex of bimodules. Such an A is Calabi–Yau of dimension d when RHom over Aᵉ from A to Aᵉ is isomorphic to the shifted bimodule A\[−d\].

**Problem.** Let A be Calabi–Yau of dimension d over a field k, let M be a finite-dimensional A-module and let N be any A-module. Then the k-dual of Extⁱ(M, N) is isomorphic to Ext in degree d − i from N to M.

**How the definition helps.** The Calabi–Yau condition moves Ext into Hochschild homology, where duality over k applies (our own). Ext from M to N over A equals Hochschild cohomology of A with coefficients in the bimodule Homₖ(M, N) (our own). The work went into Van den Bergh duality, which turns this into a Tor group over A in degree d − i (our own). Because M is finite-dimensional, the k-dual of that Tor group is Ext in degree d − i from N to M (our own).

**Paper or page:** [On deformed preprojective algebras](https://arxiv.org/abs/2108.00795). It says: “In particular D Extⁱ<sub>A</sub> (M, N) ≅ Extᵈ⁻ⁱ<sub>A</sub>(N, M) for M a finite-dimensional A-module and N any A-module.”

**Sources:**

- [W. Crawley-Boevey and Y. Kimura, On deformed preprojective algebras, Journal of Pure and Applied Algebra 226 (2022)](https://doi.org/10.1016/j.jpaa.2022.107130)

### Circle gluing computes Hochschild chains

**Remember:** Close the line into a circle to add the cyclic face.

*Makes the theorem clean to state or prove.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 81T45. arXiv math-ph. Level 4: research.

**Definition.** For an oriented one-manifold M, factorization homology of A is the homotopy colimit over finite disjoint unions of oriented intervals embedded in M. The diagram assigns one tensor factor A per interval and multiplies factors in spatial order under inclusions, using units for empty products.

**Problem.** The resulting circle complex is quasi-isomorphic to the Hochschild chain complex of A, meaning the comparison induces isomorphisms on homology.

**How the definition helps.** Gluing on the circle puts the last interval next to the first, explaining the wraparound multiplication in the Hochschild differential (our own). The other terms multiply successive neighbors, with the signs from the grading (our own). The proof identifies the gluing complex with the cyclic bar construction, whose degree-n terms have n + 1 tensor factors (our own).

**Paper or page:** [Holomorphic field theories and higher algebra](https://arxiv.org/abs/2508.07443v1). It says: “extends to a factorization algebra on S¹”

**Sources:**

- [Owen Gwilliam, Brian R. Williams, Holomorphic field theories and higher algebra](https://arxiv.org/abs/2508.07443v1)

### Dihedral homology retains loop reflections

**Remember:** Take homotopy fixed points for both rotation and reflection on Hochschild chains.

*Makes the theorem clean to state or prove.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 55P35. arXiv math.AT. Level 4: research.

**Definition.** For an involutive differential graded algebra A, its dihedral Hochschild chains carry circle rotations and the reflection induced by reversal and the involution. Negative dihedral homology is the homology of the homotopy fixed point complex for this O(2)-action.

**Problem.** Let X be simply connected, with homology finite-dimensional in each degree over a field k. Give its singular cochains the signed involution that reverses simplex vertices. Their negative dihedral homology computes the cohomology of the homotopy quotient of free loops by the orthogonal group O(2).

**How the definition helps.** Keeping reflections makes the model record every symmetry of the circle that parametrizes a loop (our own). Rotations form a normal subgroup of O(2), and the quotient acts by reflection (our own). Taking homotopy orbits therefore accounts for both symmetries, even on loops with stabilizers (our own). Ungheretti proves that the dihedral cochain model agrees with free-loop cochains with these actions (our own).

**nLab:** [dihedral homology](https://ncatlab.org/nlab/show/dihedral+homology). It says: “so dihedral homology is the cohomology of free loop spaces modulo the O(2)-action on loops”

**Sources:**

- [Massimiliano Ungheretti, Free loop spaces and dihedral homology](https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd16mu.pdf)

### Eckmann–Hilton makes the Hochschild cup product graded commutative

**Remember:** Two compatible products on one set must agree and commute.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)). arXiv math.KT, math.RA. Level 4: research.

**Definition.** For an associative algebra A over a field k, Hochschild cohomology in degree n consists of derived bimodule maps A → A\[n\]. In the derived category of A-bimodules, the derived tensor product over A has unit A.

**Problem.** The cup product on the Hochschild cohomology HH\*(A, A) is graded commutative.

**How the definition helps.** Hochschild classes are shifted endomorphisms of the tensor unit (our own). Composition gives their Yoneda product, which agrees with the cup product. Suárez-Álvarez’s graded Eckmann–Hilton argument exchanges classes of degrees p and q with sign (−1)ᵖᑫ, giving graded commutativity (our own explanation).

**nLab:** [Eckmann-Hilton argument](https://ncatlab.org/nlab/show/Eckmann-Hilton+argument). It says: “In other words this says that when a set is equipped with a pair of monoid structures, such that one is a homomorphism for the other, then the two structures actually coincide and the resulting monoid is commutative.”

**Sources:**

- [M. Suárez-Álvarez, The Hilton–Heckmann argument for the anti-commutativity of cup products, Proceedings of the AMS 132 (2004)](https://doi.org/10.1090/s0002-9939-04-07409-x)

### Hochschild cochains as coderivations make the Jacobi identity automatic

**Remember:** Brackets of coderivations are commutators, and commutators satisfy Jacobi.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 17B55. arXiv math.KT, math.QA. Level 4: research.

**Definition.** On the tensor coalgebra of A\[1\], the coproduct Δ sums all cuts of each word. A homogeneous coderivation D satisfies ΔD = (D ⊗ id + id ⊗ D)Δ with graded tensor signs. A Hochschild cochain specifies the projection of its unique coderivation onto words of length one.

**Problem.** The Gerstenhaber bracket makes the shifted Hochschild complex of A a differential graded Lie algebra.

**How the definition helps.** Stasheff’s identification carries the bracket to the graded commutator, which satisfies graded Jacobi (our own). The Hochschild differential is commutation with the multiplication coderivation. Associativity makes that coderivation square to zero, so the differential squares to zero and acts by bracket derivations (our own).

**nLab:** [deformation theory](https://ncatlab.org/nlab/show/deformation+theory). It says: “In the case of an associative algebra (or a dg algebra, or an A-infinity algebra, or a dg category, or an A-infinity category), the appropriate dgLa is the Hochschild complex with the Hochschild differential and the Gerstenhaber bracket.”

**Sources:**

- [J. Stasheff, The intrinsic bracket on the deformation complex of an associative algebra, Journal of Pure and Applied Algebra 89 (1993)](https://doi.org/10.1016/0022-4049(93)90096-c)

### Hochschild cohomology as bimodule Ext is a derived invariant

**Remember:** Compute Hochschild classes as maps from the diagonal bimodule to its shifts.

*True by definition. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16E35, 18G80. arXiv math.RA, math.KT. Level 4: research.

**Definition.** Hochschild cohomology HHⁿ(A, A) is the group of maps from A to A shifted by n in the derived category of A-bimodules. Here A-bimodules are modules over Aᵉ = A ⊗ₖ Aᵒᵖ. Two algebras are derived equivalent when their derived categories of modules are equivalent in a way that respects shifts and exact triangles.

**Problem.** Let A and B be algebras over a field k with k-linearly equivalent derived categories of modules. Then HH\*(A, A) ≅ HH\*(B, B) as graded rings.

**How the definition helps.** A bimodule derived equivalence taking A to B preserves maps between their shifts and their composition (our own). Rickard’s derived Morita theorem supplies a two-sided tilting complex when the module categories are k-linearly derived equivalent. Tensoring on opposite sides with this complex and its inverse gives the required bimodule equivalence (our own).

**nLab:** [derived Morita equivalence](https://ncatlab.org/nlab/show/derived+Morita+equivalence). It says: “The existence of a tilting complex is necessary and sufficient for an equivalence between the unbounded derived categories of two rings.”

**Sources:**

- [J. Rickard, Derived equivalences as derived functors, Journal of the London Mathematical Society 43 (1991)](https://doi.org/10.1112/jlms/s2-43.1.37)

### Quasi-free algebras have Hochschild homology only in degrees zero and one

**Remember:** A projective resolution of length one leaves no room for higher Tor.

*True by definition. Confidence: medium.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 19D55. arXiv math.KT, math.RA. Level 4: research.

**Definition.** For an algebra A, let Ω¹A be the kernel of multiplication A ⊗ A → A, an A-bimodule. Cuntz and Quillen call A quasi-free if Ω¹A is a projective bimodule. Equivalently, every algebra map from A lifts along every extension by a nilpotent ideal.

**Problem.** For a quasi-free algebra A over a field k, HHₙ(A,M) vanishes for every bimodule M and every n ≥ 2. Free algebras and path algebras of finite quivers are quasi-free, but k\[x,y\] is not.

**How the definition helps.** Projectivity of Ω¹A makes the multiplication sequence a bimodule projective resolution of length one, so higher Hochschild Tor vanishes (our own). For a path algebra, Ω¹ relative to the vertex algebra has one projective bimodule summand per arrow. The vertex algebra is separable, so the relative resolution is projective, also covering free algebras on one vertex (our own). For k\[x,y\], Hochschild–Kostant–Rosenberg gives nonzero HH₂, ruling out quasi-freeness (our own).

**nLab:** [quasi-free algebra](https://ncatlab.org/nlab/show/quasi-free+algebra). It says: “However most commutative formally smooth algebras are not formally smooth in the associative noncommutative sense.”

**Sources:**

- [J. Cuntz, D. Quillen, Algebra extensions and nonsingularity, J. Amer. Math. Soc. 8 (1995) 251–289](https://doi.org/10.1090/s0894-0347-1995-1303029-0)
- [J. Cuntz, D. Quillen, Cyclic homology and nonsingularity, J. Amer. Math. Soc. 8 (1995) 373–442](https://doi.org/10.1090/s0894-0347-1995-1303030-7)

### The Calabi–Yau condition turns Hochschild cohomology into Hochschild homology

**Remember:** Calabi–Yau algebras trade Hochschild cohomology for homology in complementary degree.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 16E65. arXiv math.RA, math.KT. Level 4: research.

**Definition.** Write Aᵉ = A ⊗ₖ Aᵒᵖ and A! = RHom₍Aᵉ₎(A,Aᵉ). Homological smoothness means that A is perfect over Aᵉ. The quoted Calabi–Yau condition requires a bimodule quasi-isomorphism A → A!\[d\] homotopic to its shifted dual.

**Problem.** Let A be homologically smooth and Calabi–Yau of dimension d. Then for every A-bimodule M, Hochschild cohomology HHⁱ(A, M) is isomorphic to Hochschild homology of A with coefficients in M in degree d − i.

**How the definition helps.** Perfectness identifies RHom₍Aᵉ₎(A,M) with the derived tensor product of A! and M over Aᵉ (our own). Substituting A\[−d\] for A! gives the shifted complex computing Hochschild homology. Taking cohomology in degree i gives homology in degree d − i (our own).

**nLab:** [Calabi-Yau algebra](https://ncatlab.org/nlab/show/Calabi-Yau+algebra). It says: “A homologically smooth dg-algebra A is a Calabi-Yau algebra of dimension d if there is a quasi-isomorphism of A-bimodules f : A → A<sup>!</sup>\[d\] such that f ≃ f<sup>!</sup>\[d\].”

**Sources:**

- [M. Van den Bergh, A relation between Hochschild homology and cohomology for Gorenstein rings, Proceedings of the AMS 126 (1998)](https://doi.org/10.1090/s0002-9939-98-04210-5)

### A∞ quasi-isomorphisms have inverses, unlike quasi-isomorphisms of dg algebras

**Remember:** Allow higher components, and quasi-isomorphisms can be turned around.

*Rules out counterexamples.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)). arXiv math.KT, math.AT. Level 4: research.

**Definition.** An uncurved A∞-structure on A is a degree-one square-zero coderivation on the reduced tensor coalgebra of A\[1\]. An A∞-morphism is a degree-zero coalgebra map commuting with these differentials. It is a quasi-isomorphism if its first component induces an isomorphism on cohomology.

**Problem.** Over a field, every A∞ quasi-isomorphism has an inverse up to homotopy. So being A∞ quasi-isomorphic is an equivalence relation that needs no chains of maps in alternating directions.

**How the definition helps.** Higher components allow any quasi-isomorphism between minimal models to be inverted recursively (our own). Over a field the minimal model theorem gives homotopy equivalences to these models. A strict inverse can fail for a free differential graded resolution of k\[x\]/(x²) with degree-zero part k\[x\] (our own). Any map back sends x to a square-zero polynomial, hence to zero, and cannot invert the cohomology map.

**Paper or page:** [Ainfinity-algebra Structure in Cohomology and its Applications](https://arxiv.org/abs/2307.10300). It says: “Each weak equivalence of minimal A∞-algebras is an isomorphism.”

**Sources:**

- [B. Keller, Introduction to A-infinity algebras and modules, Homology, Homotopy and Applications 3 (2001)](https://doi.org/10.4310/hha.2001.v3.n1.a1)

### A∞-algebras let every dg algebra be equivalent to its cohomology

**Remember:** Cohomology plus higher products remembers the whole dg algebra.

*Makes the theorem clean to state or prove.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 55P62. arXiv math.KT, math.AT. Level 4: research.

**Definition.** An uncurved A∞-structure on A is a degree-one square-zero coderivation on the reduced tensor coalgebra of A\[1\]. Its components give operations mₙ of degree 2 − n for n ≥ 1. The structure is minimal if the unary operation vanishes.

**Problem.** Over a field, every A∞-algebra A is A∞-quasi-isomorphic to a minimal A∞-algebra on its cohomology H(A). Its product m₂ is the product that H(A) inherits from A.

**How the definition helps.** With A∞-algebras allowed, the cohomology can carry the higher products that a dg algebra would need extra generators to hold. Without them, the statement fails, because many dg algebras are not quasi-isomorphic to their cohomology as dg algebras (our own). The work went into the construction of the operations mₙ, which uses a choice of homotopy and sums over trees (our own).

**nLab:** [Kadeishvili's theorem](https://ncatlab.org/nlab/show/Kadeishvili%27s+theorem). It says: “Kadeishvili's theorem says that every A-∞-algebra (in chain complexes) is equivalent, as an A∞-algebra, to its cohomology ring.”

**Sources:**

- [T. Kadeishvili, On the homology theory of fibre spaces, Russian Mathematical Surveys 35 (1980)](https://doi.org/10.1070/rm1980v035n03abeh001842)

### A∞-morphisms as coalgebra maps compose and invert easily

**Remember:** View A∞ maps as coalgebra maps, and composition is just composition.

*True by definition.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 18N40. arXiv math.KT, math.RA. Level 4: research.

**Definition.** An uncurved A∞-structure on A is a degree-one square-zero coderivation on the reduced tensor coalgebra of A\[1\]. An A∞-morphism is a degree-zero coalgebra map commuting with the coderivations. Its first component is its restriction to words of length one.

**Problem.** A∞-algebras and A∞-morphisms form a category. An A∞-morphism is an isomorphism if and only if its first component f₁ is a linear isomorphism.

**How the definition helps.** Maps of dg coalgebras compose associatively, so the category axioms need no work (our own). By contrast, the component formula for a composite is a sum over trees (our own). A map of tensor coalgebras is invertible once its linear part is, by solving for the inverse one degree at a time (our own). The work went into the bar construction, which encodes all the operations mₙ as one coderivation.

**Wikipedia:** [Homotopy associative algebra](https://en.wikipedia.org/wiki/Homotopy_associative_algebra). It says: “For instance, a morphism f: A → A′ of A∞-algebras is equivalently a morphism of differential graded coalgebras Bf: BA → BA′”

**Paper or page:** [Ainfinity-algebra Structure in Cohomology and its Applications](https://arxiv.org/abs/2307.10300). It says: “A morphism of A∞-algebras is an isomorphism if and only if its first component f₁:(M,m₁)→(M′,m′₁) is an isomorphism of dg modules.”

**Sources:**

- [B. Keller, Introduction to A-infinity algebras and modules, Homology, Homotopy and Applications 3 (2001)](https://doi.org/10.4310/hha.2001.v3.n1.a1)

### Keeping dg endomorphisms gives a fully faithful functor from dg modules

**Remember:** Keep the chain-level endomorphisms, not only their cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 18G80. arXiv math.KT, math.AG. Level 4: research.

**Definition.** The dg endomorphism algebra of a complex K is the complex of all graded maps from K to K, with the commutator differential. It keeps more than the graded Ext algebra, which is only its cohomology. An object is compact when maps out of it commute with direct sums.

**Problem.** Let K be a compact complex on a ringed site whose dg endomorphism algebra E computes its Ext groups. Then the derived tensor product over E with K is a fully faithful functor from D(E), the derived category of dg E-modules, to D(𝒪).

**How the definition helps.** Keeping the chain-level endomorphisms makes the functor right on E, since E itself computes the maps from E to E in D(E) (our own). Compactness of K then extends full faithfulness from E to everything built from E by triangles and sums (our own). If K also generates D(𝒪), the functor is an equivalence, which is Keller's theorem (our own). The graded Ext algebra alone cannot do this, because it forgets the higher structure (our own).

**Paper or page:** [Lemma 22.35.6](https://stacks.math.columbia.edu/tag/09LZ). It says: “K• represents a compact object of D(𝒪)”

**Sources:**

- [B. Keller, Deriving DG categories, Annales Scientifiques de l'ENS 27 (1994)](https://doi.org/10.24033/asens.1689)

### Pure weights on a dg algebra force formality

**Remember:** If weight equals degree in cohomology, the algebra is formal.

*True by definition. Confidence: medium.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 55P62. arXiv math.AT, math.KT. Level 4: research.

**Definition.** A weight grading splits each Aⁿ into a direct sum indexed by integer weights, with differential preserving weights and multiplication adding them. It is pure if Hⁿ(A) vanishes outside weight n for every n. Formality means a zigzag of differential graded algebra quasi-isomorphisms connects A to H(A) with zero differential.

**Problem.** A dg algebra over a field with a pure weight grading is formal.

**How the definition helps.** Purity puts the cohomology of each weight-w piece in degree w, so cutting the piece off at degree w keeps that cohomology (our own). Let B be the sum over w of the weight-w piece, cut off above degree w and with only cocycles in degree w (our own). B is a subalgebra, and the maps from B to A and from B to H(A) are quasi-isomorphisms of algebras (our own). The work went into finding weights, for example from Hodge theory or Galois actions.

**Paper or page:** [Weight structures and formality](https://arxiv.org/abs/2406.19142). It says: “A weight structure is a naturally occurring grading on certain differential graded algebras. If this weight satisfies a purity property, one can deduce formality.”

**Sources:**

- [C. Emprin and G. Horel, Weight structures and formality, arXiv:2406.19142 (2024)](https://arxiv.org/abs/2406.19142)

### Vanishing bigraded Hochschild cohomology makes a graded algebra intrinsically formal

**Remember:** No room in HH(n, 2 − n), no higher products survive.

*Makes the theorem clean to state or prove.* MSC 16E45 (Differential graded algebras and applications (associative algebraic aspects)), 16E40. arXiv math.KT, math.RA. Level 4: research.

**Definition.** For a graded algebra H, HH(n,m) is Hochschild cohomology in arity n and internal degree m. A cochain has internal degree m if its output degree equals the sum of its input degrees plus m. Intrinsic formality means every differential graded algebra with cohomology H connects to H by a zigzag of differential graded algebra quasi-isomorphisms.

**Problem.** Let H be a graded algebra over a field with HH(n,2 − n)(H,H) = 0 for every n ≥ 3. Every minimal A∞-structure extending its product is A∞-isomorphic to H with no higher operations, so H is intrinsically formal.

**How the definition helps.** The bigrading names the group of the first higher operation: the first nonzero mₙ is a cocycle of bidegree (n, 2 − n) (our own). When its class vanishes, an A∞ isomorphism with one new component removes mₙ, and induction on n finishes (our own). The last step uses Kadeishvili's minimal model theorem, which puts an A∞ structure on the cohomology of any dg algebra.

**Paper or page:** [Ainfinity-algebra Structure in Cohomology and its Applications](https://arxiv.org/abs/2307.10300). It says: “Then each m∼0, that is each minimal A∞-algebra structure on H is degenerate”

**Sources:**

- [T. Kadeishvili, A∞-algebra structure in cohomology and its applications, arXiv:2307.10300 (2023)](https://arxiv.org/abs/2307.10300)

### Finitistic dimension of a Gorenstein algebra equals its self-injective dimension

**Remember:** Ignore infinite resolutions, and a Gorenstein ring's dimension is its self-injective dimension.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E65 (Homological conditions on associative rings (generalizations of regular, Gorenstein, Cohen-Macaulay rings, etc.)), 16E10. arXiv math.RA, math.RT. Level 4: research.

**Definition.** A two-sided Noetherian ring is Iwanaga–Gorenstein if its regular modules on both sides have finite injective dimension. Its finitistic dimension is the supremum of projective dimensions among modules of finite projective dimension.

**Problem.** Over an Iwanaga–Gorenstein ring of self-injective dimension d, a module has finite projective dimension exactly when it has finite injective dimension. Then both are at most d (Iwanaga). For a finite-dimensional such algebra the finitistic dimension is d, even when the global dimension is infinite.

**How the definition helps.** Leaving out the modules of infinite projective dimension removes exactly what makes the global dimension infinite, so the remaining number can equal d. The bound d is Iwanaga's theorem. For a finite-dimensional algebra A, the dual module Homₖ(A, k) has projective dimension d, which gives the lower bound (our own summary). For a self-injective algebra such as k\[x\]/(x²), d = 0, so every module of finite projective dimension is projective.

**Wikipedia:** [Gorenstein ring](https://en.wikipedia.org/wiki/Gorenstein_ring). It says: “A (not necessarily commutative) ring R is called Gorenstein if R has finite injective dimension both as a left R-module and as a right R-module.”

**Sources:**

- [Y. Iwanaga, On rings with finite self-injective dimension II, Tsukuba Journal of Mathematics (1980)](https://doi.org/10.21099/tkbjm/1496158797)

### Gorenstein condition pins down the Artin–Schelter regular algebras of dimension two

**Remember:** Regularity combines finite global dimension, polynomial growth, and a single top Ext class.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E65 (Homological conditions on associative rings (generalizations of regular, Gorenstein, Cohen-Macaulay rings, etc.)), 16S38, 16W50. arXiv math.RA. Level 4: research.

**Definition.** A connected graded k-algebra is Artin–Schelter regular if it has finite global dimension d, polynomial growth and the following Ext condition on both sides. Extⁱ(k,A) vanishes outside degree d, where it equals a grading shift of k.

**Problem.** Take an Artin–Schelter regular algebra of global dimension 2, generated in degree 1 over an algebraically closed field. It has two generators x and y and one quadratic relation. Up to a change of generators, the relation is xy − qyx with q ≠ 0, or xy − yx − y².

**How the definition helps.** Self-duality of the minimal resolution forces one quadratic relation with invertible coefficient matrix (our own). With n degree-one generators the resulting Hilbert series is 1/(1 − nt + t²), forcing n = 2 by nonnegative dimensions and polynomial growth. The classification of invertible binary bilinear forms up to congruence and scalar gives the two displayed relations (our own).

**nLab:** [Artin-Schelter regular algebra](https://ncatlab.org/nlab/show/Artin-Schelter+regular+algebra). It says: “A is Artin-Schelter regular (AS regular) if the following three conditions hold: it is of finite global dimension d”

**Sources:**

- [M. Artin and W. F. Schelter, Graded algebras of global dimension 3, Advances in Mathematics (1987)](https://doi.org/10.1016/0001-8708(87)90034-X)

### Gorenstein projective modules model the singularity category of a Gorenstein ring

**Remember:** Over Gorenstein rings, singularities are measured by Gorenstein projective modules up to projectives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16E65 (Homological conditions on associative rings (generalizations of regular, Gorenstein, Cohen-Macaulay rings, etc.)), 18G80, 16G50. arXiv math.RT, math.RA. Level 4: research.

**Definition.** The singularity category is the bounded derived category of finitely generated modules modulo the perfect complexes. A complete resolution is a doubly infinite exact complex of finitely generated projectives that remains exact under Hom(−,R). A finitely generated module is Gorenstein projective if it is a cycle in such a complex.

**Problem.** Over an Iwanaga–Gorenstein ring, the stable category of finitely generated Gorenstein projectives is triangulated equivalent to the singularity category. For a finite-dimensional self-injective algebra, every finitely generated module is Gorenstein projective, giving its stable module category.

**How the definition helps.** Gorenstein projective modules form a Frobenius category, an exact category whose projective and injective objects coincide, so their stable category is triangulated (our own summary). Every finitely generated module has a d-th syzygy that is Gorenstein projective. In the singularity category a module is a shift of its syzygy, so the functor reaches every object (our own summary). The natural functor to the singularity category is the candidate equivalence; Buchweitz proves it full and faithful using complete resolutions (our own summary).

**nLab:** [triangulated category of singularities](https://ncatlab.org/nlab/show/triangulated+category+of+singularities). It says: “The quotient Dᵇ(X)/Perf(X) hence serves as the derived category of the singularities themselves.”

**Sources:**

- [R.-O. Buchweitz, Maximal Cohen–Macaulay Modules and Tate Cohomology, Mathematical Surveys and Monographs 262, American Mathematical Society (2021)](https://doi.org/10.1090/surv/262)

### Cellular structure lets one Cartan determinant decide finite global dimension

**Remember:** Swapping indices reverses products, and left multiplication ignores the right index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G10 (Representations of associative Artinian rings), 16E10, 20C08. arXiv math.RT. Level 4: research.

**Definition.** A cellular basis consists of elements Cλ(s,t), with λ in a finite poset and s,t in the same finite index set for λ. An algebra anti-involution interchanges s and t. Modulo lower cells, every aCλ(s,t) is a sum of Cλ(u,t) with coefficients depending only on a,u,s.

**Problem.** For a cellular algebra over a field, three conditions are equivalent: finite global dimension, being quasi-hereditary, and Cartan determinant 1 (König and Xi).

**How the definition helps.** The factorization C = DᵀD makes the Cartan matrix symmetric and positive definite, so its determinant is a positive integer. If the global dimension is finite, Eilenberg's theorem makes the determinant ±1, hence 1 (our own summary). König and Xi show that determinant 1 forces quasi-heredity, and quasi-hereditary algebras have finite global dimension, which closes the circle.

**Wikipedia:** [Cellular algebra](https://en.wikipedia.org/wiki/Cellular_algebra). It says: “A is quasi-hereditary (i.e. its module category is a highest-weight category).”

**Sources:**

- [S. König and C. C. Xi, Cellular algebras and quasi-hereditary algebras: a comparison, Electronic Research Announcements of the American Mathematical Society (1999)](https://doi.org/10.1090/S1079-6762-99-00063-3)

### Green sequences filter modules

**Remember:** Each jump adds the next kind of filtration factor.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings). arXiv math.RT, math.RA. Level 4: research.

**Definition.** A torsion class of finite-dimensional modules over a finite-dimensional algebra contains zero and is closed under quotients and extensions. A maximal green sequence is a finite chain of torsion classes from zero to all modules, with no class strictly between consecutive terms.

**Problem.** Fix a maximal green sequence and label each step by its brick, a module whose nonzero endomorphisms are invertible. Every nonzero module has a filtration whose successive quotients each have a filtration by copies of one step’s brick, in strictly increasing step order. This filtration is unique up to isomorphism.

**How the definition helps.** The chain determines the cuts by taking the largest submodule in each torsion class, in our own explanation. Delete repeated submodules to get the filtration. The brick labeling theorem identifies the factors at each remaining step as successive extensions of copies of its brick.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Moreover, this filtration is unique up-to-isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Higher Auslander algebras match cluster tilting modules one to one

**Remember:** Replace two by d plus one, and Auslander's correspondence goes higher.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings), 16E10, 16G70. arXiv math.RT. Level 4: research.

**Definition.** For d ≥ 1, a finite-dimensional d-Auslander algebra has global dimension at most d+1 and dominant dimension at least d+1. Write add M for summands of finite sums of copies of M. A finite-dimensional M is d-cluster tilting if both Ext-orthogonals in degrees 1 through d−1 equal add M among finite-dimensional modules.

**Problem.** Iyama’s correspondence identifies equivalence classes of d-cluster tilting pairs (Λ,M) with Morita equivalence classes of d-Auslander algebras. Pair equivalence means a module category equivalence identifying their additive closures. The correspondence sends (Λ,M) to End(M)ᵒᵖ and specializes to Auslander’s correspondence at d = 1.

**How the definition helps.** Changing the bound 2 to d + 1 in both inequalities is all it takes to state the higher correspondence. For d = 1 the Ext condition is empty, so M must contain every indecomposable module, as in Auslander's case. The work goes into Iyama's higher Auslander–Reiten theory for these subcategories (our own summary).

**Paper or page:** [Nakayama-type phenomena in higher Auslander--Reiten theory](https://arxiv.org/abs/2402.15889v1). It says: “There is a one-to-one correspondence between equivalence classes of d-Auslander–Iyama pairs and Morita equivalence classes of d-Auslander algebras.”

**Sources:**

- [O. Iyama, Auslander correspondence, Advances in Mathematics (2007)](https://doi.org/10.1016/j.aim.2006.06.003)

### Semibricks give simple objects

**Remember:** Choose simple pieces that have no maps between them.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings). arXiv math.RT, math.RA. Level 4: research.

**Definition.** In finite-dimensional modules over a finite-dimensional algebra, a brick is a nonzero module whose nonzero endomorphisms are invertible. A semibrick is a set of brick isomorphism classes with no nonzero maps between distinct members. A wide subcategory is a full additive subcategory closed under isomorphisms, kernels, cokernels and extensions.

**Problem.** Sending each wide subcategory to its simple objects, up to isomorphism, gives a bijection with semibricks. The inverse takes all modules having a finite chain of submodules whose successive quotients belong to the semibrick.

**How the definition helps.** The vanishing maps let distinct bricks serve as distinct simple objects, in our own explanation. In our own counterexample, the two indecomposable projectives for a single arrow are bricks with a nonzero map between them. They cannot both be simple objects in a wide subcategory. The theorem proves that modules filtered by a semibrick form a wide subcategory with exactly those simple objects.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “The map S(−): wide-A → sbrick-A is a bijection with inverse Filt(−): sbrick-A → wide-A.”

**Sources:** none listed. No primary source with a working link was found.

### Eventually constant roots extend Gabriel's theorem to infinite quivers

**Remember:** Let dimensions settle to a constant along infinite tails.

*Makes the theorem clean to state or prove.* MSC 16G20 (Representations of quivers and partially ordered sets), 16G60. arXiv math.RT. Level 4: research.

**Definition.** On the listed trees, consider nonnegative integer vertex labels eventually constant along every infinite end. Their Euler–Tits form sums squared labels minus products across edges on a finite connected subtree containing every branch and every label change. A positive root is such a labeling with form equal to one.

**Problem.** Let the quiver be connected, eventually outward, and of type Aₙ, Dₙ, E₆, E₇, E₈, A∞, A∞,∞ or D∞. Eventually outward means that far out along each infinite end, the arrows point away from the rest of the quiver. Then every representation is a direct sum of indecomposables, and taking dimensions matches indecomposables one to one with positive roots.

**How the definition helps.** Constant tails allow roots of infinite support (our own). A ray of one-dimensional spaces with identity arrows has constant label one and form n − (n − 1) = 1 on n vertices. The infinite-quiver decomposition and root correspondence theorem establishes existence and uniqueness for all the listed types.

**Paper or page:** [Gabriel's Theorem for Infinite Quivers](https://arxiv.org/abs/2312.09904v1). It says: “In this case the indecomposables are all locally finite-dimensional and eventually constant and correspond bijectively to the positive roots (i.e. those of length 1).”

**Sources:**

- [Nathaniel Gallup, Stephen Sawin, Gabriel's Theorem for Infinite Quivers, arXiv:2312.09904 (2023)](https://arxiv.org/abs/2312.09904v1)
- [Nathaniel Gallup, Stephen Sawin, Gabriel’s Theorem for Infinite Quivers, Algebras and Representation Theory (2025)](https://doi.org/10.1007/s10468-025-10349-2)

### Gorenstein-projective modules need reflexivity beyond two dual extension-vanishing conditions

**Remember:** Check evaluation into the double dual even when both extension tests pass.

*Rules out counterexamples. Confidence: medium.* MSC 16G50 (Cohen-Macaulay modules in associative algebras), 16E05. arXiv math.RT. Level 4: research.

**Definition.** Let A be an Artin algebra, and write M\* for the A-dual Hom(M, A) of a module M. A finitely generated module is semi-Gorenstein-projective if all its positive extension groups into A vanish. M is reflexive if the evaluation map from M to its double dual M\*\* is an isomorphism.

**Problem.** A finitely generated module over an Artin algebra is Gorenstein-projective exactly when it and its A-dual pass the extension test and it is reflexive. Equivalently, it occurs as a cycle in an exact complex of finitely generated projectives that stays exact after A-dualizing.

**How the definition helps.** Reflexivity excludes modules for which both extension tests pass but the double-dual map fails. The paper's three-dimensional module M(q), with q of infinite multiplicative order, fails even injectivity of that map. Showing that the three tests give a doubly infinite projective complex that stays exact under duality is the substantive step.

**Paper or page:** [Claus Michael Ringel's main contributions to Gorenstein-projective modules](https://arxiv.org/abs/2505.12637v1), [Claus Michael Ringel's main contributions to Gorenstein-projective modules](https://arxiv.org/abs/2505.12637v1). It says: “If the multiplicative order o(q) is infinite, then M(q) is bi-semi-Gorenstein-projective with M(q)∗ ≅ (x−y)Λ, but not torsionless, thus M(q) is not Gorenstein-projective.”

**Sources:**

- [Nan Gao, Xue-Song Lu, Pu Zhang, Claus Michael Ringel's main contributions to Gorenstein-projective modules, arXiv:2505.12637 (2025)](https://arxiv.org/abs/2505.12637v1)

### Tilting pairs include zero

**Remember:** The projective complement marks where the torsion generator can vanish.

*Makes the theorem clean to state or prove.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers). arXiv math.RT, math.RA. Level 4: research.

**Definition.** A τ-tilting pair over a finite-dimensional algebra consists of a finite-dimensional module M and a finitely generated projective module P. It satisfies Hom(M,τM) = Hom(P,M) = 0. The numbers of distinct indecomposable summands of M and P sum to the number of simple module types.

**Problem.** Basic τ-tilting pairs, with no repeated indecomposable summands, correspond one to one with functorially finite torsion classes. The class of a pair (M, P) consists of the quotients of finite direct sums of copies of M.

**How the definition helps.** The projective term counts missing summands without adding any quotients to the torsion class (our own). For example, M = 0 with P the sum of one copy of each indecomposable projective gives the zero class (our own). The correspondence theorem proves that the class determines the basic pair.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “There are bijections between the sets τ-tp-A, ftors-A, fwide-A and fsbrick-A.”

**Sources:**

- [Takashi Adachi, Osamu Iyama and Idun Reiten, τ-tilting theory](https://doi.org/10.1112/s0010437x13007422)

### τ-rigid modules have no self-extensions by the Auslander–Reiten formula

**Remember:** If the whole map space vanishes, so does its quotient.

*True by definition.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers), 16G10. arXiv math.RT. Level 4: research.

**Definition.** For a finite-dimensional module M over a finite-dimensional algebra, let τM denote its Auslander–Reiten translate. The module is τ-rigid if Hom(M,τM) = 0. It is rigid if every short exact sequence extending M by itself splits.

**Problem.** A τ-rigid module over a finite-dimensional algebra is rigid.

**How the definition helps.** The definition makes a whole map space zero, so the quotient that measures self-extensions is zero as well. In our own explanation, the work sits in the Auslander–Reiten formula that identifies the dual extension space with that quotient.

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

**Definition.** Let B ⊆ A be unital rings with A finitely generated projective as a left B-module. The extension is Frobenius if A ≅ Homᵦ(A,B) as (A,B)-bimodules, where Hom uses left B-linear maps. The actions on maps are (a·f·b)(x) = f(xa)b.

**Problem.** Let B ⊆ A be a Frobenius extension and M a left B-module. Induction A ⊗ M and coinduction Hom(A, M), both over B, are naturally isomorphic left A-modules.

**How the definition helps.** Finite projectivity identifies Homᵦ(A,M) naturally with Homᵦ(A,B) ⊗ᵦ M (our own). Substituting the Frobenius bimodule isomorphism gives A ⊗ᵦ M and respects the left A-action.

**Wikipedia:** [Frobenius algebra](https://en.wikipedia.org/wiki/Frobenius_algebra). It says: “are naturally isomorphic as A-modules”

**Sources:** none listed. No primary source with a working link was found.

### Generalized Bernstein filtrations give Bernstein's inequality on singular rings

**Remember:** Weight an operator by its degree shift plus a multiple of its order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S32 (Rings of differential operators (associative algebraic aspects)), 16W70, 13N10. arXiv math.AC, math.RA. Level 4: research.

**Definition.** For a connected graded algebra R, choose an integer w larger than the degrees of its homogeneous algebra generators. Filtration step n spans all homogeneous differential operators δ satisfying deg(δ) + w ord(δ) ≤ n. Here deg(δ) measures the grading shift and ord(δ) is differential order.

**Problem.** Let R be the ring of invariants of a finite group acting linearly on a polynomial ring in characteristic zero. Then Bernstein's inequality holds: every nonzero finitely generated D-module has dimension at least dim R. Holonomic D-modules have finite length.

**How the definition helps.** The generalized filtration gives a dimension on singular graded rings, where the classical filtration is not available. The paper shows that the dimension does not depend on the choice of filtration. A key step is that D is linearly simple for these filtrations, a quantitative form of simplicity. The paper proves the same results in prime characteristic for strongly F-regular graded algebras with finite F-representation type.

**Paper or page:** [Bernstein's inequality and holonomicity for certain singular rings](https://arxiv.org/abs/2103.02986v2), [Bernstein's inequality and holonomicity for certain singular rings](https://arxiv.org/abs/2103.02986v2). It says: “We also show that holonomic D-modules, in this context, have finite length. We obtain these results using a more general version of Bernstein filtrations.”

**Sources:**

- [Josep Àlvarez Montaner, Daniel J. Hernández, Jack Jeffries, Luis Núñez-Betancourt, Pedro Teixeira, Emily E. Witt, Bernstein's inequality and holonomicity for certain singular rings, arXiv:2103.02986 (2021)](https://arxiv.org/abs/2103.02986v2)

### Weak s-unitality is what Hilbert's basis theorem needs

**Remember:** Recover each element by adding integer multiples of its iterated left multiples.

*Rules out counterexamples. Confidence: medium.* MSC 16S36 (Ordinary and skew polynomial rings and semigroup rings), 17A01. arXiv math.RA. Level 4: research.

**Definition.** A left distributive ring R is weakly left s-unital if each a ∈ R is an integer linear combination of iterated left multiples of a. Each multiple has the form r₁(r₂(⋯(rₙa)⋯)) with n ≥ 1 and all rᵢ ∈ R.

**Problem.** Let R be a left distributive ring, which need not be associative or have an identity. Then R\[x\] is left Noetherian if and only if R is left Noetherian and weakly left s-unital.

**How the definition helps.** In our own reading, the local identity lets the leading-coefficient argument of the usual proof of Hilbert's basis theorem run. Our own example of what goes wrong: give ℤ/2 the zero multiplication. That ring is Noetherian, but every additive subgroup of R\[x\] is an ideal, so R\[x\] has an infinite increasing chain of ideals. Corollary 50 shows that the condition is both necessary and sufficient.

**Paper or page:** [Ore Extensions of Abelian Groups with Operators](https://arxiv.org/abs/2410.16761v3). It says: “Suppose that R is a left distributive ring. Then R\[x\] is left Noetherian if and only if R is left Noetherian and weakly left s-unital.”

**Sources:**

- [Per Bäck, Patrik Lundström, Johan Öinert, Johan Richter, Ore Extensions of Abelian Groups with Operators, arXiv:2410.16761 (2024), J. Algebra 686 (2026), 176-194](https://arxiv.org/abs/2410.16761v3)

### Koszul algebras have formal Ext algebras by a grading argument

**Remember:** Diagonal Ext leaves no room for higher products.

*True by definition.* MSC 16S37 (Quadratic and Koszul algebras), 16E45. arXiv math.RA, math.KT. Level 4: research.

**Definition.** Let A be a connected graded algebra over a field k, with residue module k. Using positive internal weights for duals of generators, A is Koszul if Extⁱₐ(k,k) vanishes outside internal weight i for every i.

**Problem.** For Koszul A, the differential graded algebra of derived endomorphisms of k is formal. In a minimal model respecting internal weights, every operation mₙ on Ext(k,k) vanishes for n ≥ 3.

**How the definition helps.** The diagonal condition leaves no room for higher products, because each mₙ keeps internal degree but shifts cohomological degree by 2 − n (our own). So for n ≠ 2, mₙ sends diagonal classes off the diagonal, where Ext is zero (our own). The minimal model can be chosen to respect the internal grading (our own). The work went into proving that algebras of interest, such as polynomial rings, are Koszul.

**nLab:** [Koszul duality](https://ncatlab.org/nlab/show/Koszul+duality). It says: “In this case, B=Ext(L,L) is forced to be formal (if it had any interesting A∞ operations, they would break the grading)”

**Sources:**

- [S. Priddy, Koszul resolutions, Transactions of the AMS 152 (1970)](https://doi.org/10.1090/s0002-9947-1970-0265437-8)

### Artin–Zhang's χ condition is exactly what balanced dualizing complexes need

**Remember:** Test all Ext degrees and internal shifts from k into finitely generated graded modules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16E65, 14A22. arXiv math.RA. Level 4: research.

**Definition.** A Noetherian connected graded algebra satisfies χ if graded Extʲ(k,M) is finite-dimensional for every finitely generated graded M and every j ≥ 0. Here graded Ext includes all internal shifts.

**Problem.** A has a balanced dualizing complex exactly when A and its opposite satisfy χ and have finite local cohomological dimension. The dualizing complex is then the graded dual of the local cohomology of A.

**How the definition helps.** The χ condition names the one finiteness property that local cohomology needs, so the existence theorem becomes a clean equivalence. Local cohomology is the derived functor of taking elements killed by a power of A≥1 (our own gloss). Under χ its pieces are finite-dimensional, so its graded dual is a candidate dualizing complex (our own summary). The work went into Van den Bergh's proof that this candidate dualizes.

**Paper or page:** [Existence of balanced dualizing dg-modules](https://arxiv.org/abs/2506.02398). It says: “admits a balanced dualizing dg-module if and only if the graded k-algebra H⁰(A) and its opposite algebra H⁰(A)<sup>op</sup> satisfy Artin-Zhang's condition χ and have finite local cohomological dimension”

**Sources:**

- [M. Van den Bergh, Existence theorems for dualizing complexes over non-commutative graded and filtered rings, Journal of Algebra 195 (1997) 662–679](https://doi.org/10.1006/jabr.1997.7052)
- [M. Artin and J. J. Zhang, Noncommutative projective schemes, Advances in Mathematics 109 (1994) 228–287](https://doi.org/10.1006/aima.1994.1087)

### Excluding twelve parameter points makes every Sklyanin algebra a regular noetherian domain

**Remember:** Remove twelve bad points and Sklyanin algebras behave like k\[x,y,z\].

*Rules out counterexamples.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 14A22, 14H52. arXiv math.RA, math.AG. Level 4: research.

**Definition.** Let \[a:b:c\] be a point of ℙ² over a field k with a primitive cube root of unity. The Sklyanin algebra is k⟨x,y,z⟩ modulo ayz + bzy + cx², azx + bxz + cy² and axy + byx + cz². It is non-degenerate when \[a:b:c\] avoids a set 𝔇 of 12 points: the three coordinate points and the points with a³ = b³ = c³.

**Problem.** Every non-degenerate Sklyanin algebra is a noetherian domain. It is Artin–Schelter regular of global dimension 3, a noncommutative analogue of k\[x,y,z\], with the same dimension as k\[x,y,z\] in each degree.

**How the definition helps.** The definition removes exactly the parameters where these properties fail, so the theorem has no exceptions. At \[0:0:1\] the algebra is k⟨x,y,z⟩/(x², y², z²), so x is a nonzero zero divisor. Walton showed that every degenerate Sklyanin algebra has zero divisors and is neither left nor right noetherian. The work for the non-degenerate case went into Artin, Tate and Van den Bergh's study of point modules on an elliptic curve.

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “Whenever \[a:b:c\] ∈ 𝔇 we call S<sub>a,b,c</sub> a degenerate Sklyanin algebra and whenever \[a:b:c\] ∈ P² ∖ 𝔇 we say the algebra is non-degenerate.”

**Sources:**

- [M. Artin, J. Tate and M. Van den Bergh, Some algebras associated to automorphisms of elliptic curves, The Grothendieck Festschrift, Vol. I, Progress in Mathematics 86 (1990); Birkhäuser reprint 2007](https://doi.org/10.1007/978-0-8176-4574-8_3)
- [J. Tate and M. Van den Bergh, Homological properties of Sklyanin algebras, Inventiones Mathematicae 124 (1996) 619–648](https://doi.org/10.1007/s002220050065)
- [S. P. Smith, “Degenerate” 3-dimensional Sklyanin algebras are monomial algebras, Journal of Algebra 358 (2012) 74–86](https://doi.org/10.1016/j.jalgebra.2012.01.039)
- [C. Walton, Degenerate Sklyanin algebras and generalized twisted homogeneous coordinate rings, Journal of Algebra 322 (2009) 2508–2527](https://doi.org/10.1016/j.jalgebra.2009.02.024)

### Point modules defined by Hilbert series turn noncommutative points into a scheme

**Remember:** A point module is a walk of points, one step per degree.

*Makes the theorem clean to state or prove.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 14A22. arXiv math.RA, math.AG. Level 4: research.

**Definition.** Let A be a graded algebra generated by a finite-dimensional space V in degree one. A point module is a graded module M₀ ⊕ M₁ ⊕ ⋯ that is generated by M₀ and has each Mₙ one-dimensional. For a commutative polynomial ring these are the homogeneous coordinate rings of the points of projective space.

**Problem.** Truncated point modules of length d + 1, which stop at degree d, form a closed subscheme of the product of d copies of ℙ(V\*). For a quadratic Artin–Schelter regular algebra of dimension 3, the point modules form ℙ² or a cubic curve in ℙ², possibly singular or reducible.

**How the definition helps.** Each Mₙ is a line, so V acting on Mₙ gives a point of ℙ(V\*) (our own summary). A truncated module is then a list of points, and a relation of degree d acts as zero exactly when its multilinear form vanishes there. The hard part is the Artin–Tate–Van den Bergh theorem that, for these regular algebras, the schemes stabilize to the graph of an automorphism.

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “Point modules are a way of finding projective geometry in the underlying structure of noncommutative graded rings.”

**Paper or page:** [Algebras Associated to Inverse Systems of Projective Schemes](https://arxiv.org/abs/2406.17139). It says: “the set of isomorphism classes of truncated right point modules for T(V) of length d + 1, and the d-fold cartesian product (of sets) ℙ(V\*)<sup>×d</sup>”

**Sources:**

- [M. Artin, J. Tate and M. Van den Bergh, Some algebras associated to automorphisms of elliptic curves, The Grothendieck Festschrift, Vol. I, Progress in Mathematics 86 (1990); Birkhäuser reprint 2007](https://doi.org/10.1007/978-0-8176-4574-8_3)

### The Gorenstein condition makes the Hilbert series of a regular algebra palindromic

**Remember:** The resolution of k reads the same backwards, so the Hilbert series does.

*True by definition.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16E65. arXiv math.RA. Level 4: research.

**Definition.** A connected graded algebra A is Artin–Schelter regular of dimension d when it has global dimension d, polynomial growth and the Gorenstein property. Polynomial growth means dim Aₙ is bounded by a polynomial in n. The Gorenstein property says that Extⁱ(k, A) is zero for i ≠ d, and Extᵈ(k, A) is k shifted by some degree l.

**Problem.** The Hilbert series of A, whose n-th coefficient is the dimension of Aₙ, is 1/p(t) for a polynomial p with tˡ p(1/t) = (−1)ᵈ p(t). For example, three generators and three quadratic relations in dimension 3 force p(t) = (1 − t)³.

**How the definition helps.** Dualizing the minimal left resolution of k gives a shifted minimal right resolution, read backwards (our own). Both resolutions give the same reciprocal Hilbert series as their alternating sum of generator degrees. Reversal exchanges degrees j and l − j and contributes sign (−1)ᵈ, giving the functional equation. In the stated example the degrees give p(t) = 1 − 3t + 3t² − t³ (our own).

**nLab:** [Artin-Schelter regular algebra](https://ncatlab.org/nlab/show/Artin-Schelter+regular+algebra). It says: “is Gorenstein: Ext<sub>A</sub><sup>i</sup>(\_A k,A) = 0 for i≠d and Ext<sub>A</sub><sup>d</sup>(\_A k,A) = k<sub>A</sub>.”

**Sources:**

- [M. Artin and W. F. Schelter, Graded algebras of global dimension 3, Advances in Mathematics 66 (1987) 171–216](https://doi.org/10.1016/0001-8708(87)90034-X)

### The homological determinant gives Watanabe's theorem for noncommutative invariant rings

**Remember:** Measure the determinant where the Gorenstein property lives, in local cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16W22, 16E65. arXiv math.RA. Level 4: research.

**Definition.** Let A be a Noetherian connected graded Artin–Schelter Gorenstein algebra with injective dimension d and positive-degree ideal 𝔪. The homological determinant of a graded automorphism is the inverse scalar of its induced action on the one-dimensional socle of Hᵈ𝔪(A).

**Problem.** Let a finite group H act by graded automorphisms on a Noetherian Artin–Schelter Gorenstein algebra over k. Suppose \|H\| is invertible in k and every element has homological determinant one. Then the invariant ring is Artin–Schelter Gorenstein, generalizing Watanabe’s theorem.

**How the definition helps.** Trivial homological determinant makes the induced action on the local cohomology socle trivial (our own). Jørgensen and Zhang’s invariant ring theorem then gives the Gorenstein property. For a polynomial ring this determinant is the ordinary determinant (our own).

**Paper or page:** [Invariants of Unimodular Quadratic Polynomial Poisson Algebras of Dimension 3](https://arxiv.org/abs/2302.13588), [Invariants of Unimodular Quadratic Polynomial Poisson Algebras of Dimension 3](https://arxiv.org/abs/2302.13588). It says: “Let A be a Noetherian Artin-Schelter Gorenstein 𝕜-algebra and let H be a finite subgroup of the graded automorphism group of A. If hdet h = 1 for all h ∈ H, then A<sup>H</sup> is Artin-Schelter Gorenstein.”

**Sources:**

- [P. Jørgensen and J. J. Zhang, Gourmet's guide to Gorensteinness, Advances in Mathematics 151 (2000) 313–345](https://doi.org/10.1006/aima.1999.1897)

### The Nakayama automorphism restores Poincaré duality for algebras that are not Calabi–Yau

**Remember:** A twist by ν turns failed Calabi–Yau duality into duality.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16E40, 16E65. arXiv math.RA. Level 4: research.

**Definition.** A homologically smooth algebra A has a finite resolution by finitely generated projective bimodules. It is twisted Calabi–Yau of dimension d if bimodule Extⁱ(A,Aᵉ) vanishes for i ≠ d and Extᵈ(A,Aᵉ) ≅ Aν. Here Aᵉ = A ⊗ Aᵒᵖ and Aν has the usual left action and right action x · a = xν(a) for an automorphism ν.

**Problem.** For h ∈ k\[x\], let Aₕ be generated by x,y with yx − xy = h(x). It is twisted Calabi–Yau of dimension two with ν(x) = x and ν(y) = y + h′, so twisted Poincaré duality holds. In characteristic zero it is Calabi–Yau only for constant h.

**How the definition helps.** The Nakayama automorphism records how far A is from Calabi–Yau, so one duality statement covers every Aₕ. Van den Bergh's duality theorem turns the Ext condition into twisted Poincaré duality between Hochschild cohomology and homology. The units of Aₕ are scalars, so ν is not inner when h′ ≠ 0, and then Aₕ is not Calabi–Yau (our own). The work went into computing the bimodule Ext groups of Aₕ.

**Paper or page:** [Noncommutative Algebra and Representation Theory: Symmetry, Structure &amp; Invariants](https://arxiv.org/abs/2307.16808). It says: “The algebra 𝖠<sub>h</sub> is ν-twisted Calabi-Yau with Nakayama automorphism satisfying ν(x)= x and ν(y)=y+h′. Thus, the twisted Poincaré duality holds for 𝖠<sub>h</sub>.”

**Sources:**

- [M. Van den Bergh, A relation between Hochschild homology and cohomology for Gorenstein rings, Proceedings of the American Mathematical Society 126 (1998) 1345–1348](https://doi.org/10.1090/s0002-9939-98-04210-5)
- [S. A. Lopes, Noncommutative Algebra and Representation Theory: Symmetry, Structure &amp; Invariants, Communications in Mathematics 32 (2024); arXiv:2307.16808](https://arxiv.org/abs/2307.16808)

### Zhang twists keep the graded module category, so they keep regularity

**Remember:** A twist changes the multiplication but not the graded modules.

*True by definition.* MSC 16S38 (Rings arising from noncommutative algebraic geometry), 16W50. arXiv math.RA. Level 4: research.

**Definition.** Let A be a graded algebra and σ a graded automorphism of A. The Zhang twist of A by σ keeps the graded vector space. Its product is a ∗ b = a σᵐ(b) for a of degree m.

**Problem.** For a connected nonnegatively graded algebra A, a Zhang twist by a graded automorphism has an equivalent graded module category. The twist is Noetherian, or Artin–Schelter regular, exactly when A is.

**How the definition helps.** The twisted action on a graded right module is v ∗ a = vσⁿ(a) for v of degree n (our own). Twisting back by σ⁻¹ gives the inverse equivalence. Zhang’s theorem transfers Noetherianity and Artin–Schelter regularity for connected nonnegatively graded algebras.

**Wikipedia:** [Sklyanin algebra](https://en.wikipedia.org/wiki/Sklyanin_algebra). It says: “These two cases are Zhang twists of each other and therefore have many properties in common.”

**Paper or page:** [Automorphism groupoids in noncommutative projective geometry](https://arxiv.org/abs/1807.06383). It says: “The following are equivalent: A and B are twist-equivalent. Gr A is isomorphic to Gr B.”

**Sources:**

- [J. J. Zhang, Twisted graded algebras and equivalences of graded categories, Proceedings of the London Mathematical Society s3-72 (1996) 281–311](https://doi.org/10.1112/plms/s3-72.2.281)
- [N. Cooney and J. E. Grabowski, Automorphism groupoids in noncommutative projective geometry, arXiv:1807.06383](https://arxiv.org/abs/1807.06383)

### Condition (K) makes all Leavitt path algebra ideals graded

**Remember:** Two ways round every cycle, and all ideals come from the graph.

*Rules out counterexamples. Confidence: medium.* MSC 16S88 (Leavitt path algebras), 16W50, 16D25. arXiv math.RA. Level 4: research.

**Definition.** A return path at v is a nonempty directed path starting and ending at v without visiting v in between. Condition (K) requires every vertex to have zero or at least two distinct return paths.

**Problem.** Let E be a finite directed graph and K a field. Every ideal of the Leavitt path algebra Lₖ(E) is graded if and only if E satisfies Condition (K).

**How the definition helps.** Condition (K) excludes cycles without exits in every quotient graph obtained by removing a hereditary saturated vertex set (our own). A cycle c without exits gives a Laurent polynomial corner and a nonhomogeneous ideal generated by v + c at its base v. The graded ideal theorem characterizes precisely when this obstruction can occur in a quotient (our own).

**Paper or page:** [Classification and Ideal Lattices of Leavitt Path Algebras](https://arxiv.org/abs/2509.25464v1), [Classification and Ideal Lattices of Leavitt Path Algebras](https://arxiv.org/abs/2509.25464v1). It says: “Let E be a finite directed graph and L(E) its associated Leavitt path algebra over a field K. All ideals of L(E) are graded if and only if E satisfies Condition (K).”

**Sources:**

- [Yvan Grinspan, Seth Yoo, Classification and Ideal Lattices of Leavitt Path Algebras, arXiv:2509.25464 (2025)](https://arxiv.org/abs/2509.25464v1)

### Exits and connectivity characterize simple Leavitt path algebras

**Remember:** A cycle with no way out hides a Laurent polynomial ring.

*Rules out counterexamples. Confidence: medium.* MSC 16S88 (Leavitt path algebras), 16D30, 05C20. arXiv math.RA. Level 4: research.

**Definition.** A cycle in a directed graph has an exit when a vertex on the cycle emits an edge besides the next cycle edge. Condition (L) asks this of every cycle. A ring is simple when its only two-sided ideals are zero and the whole ring.

**Problem.** Let E be a nonempty finite directed graph and K a field. Its Leavitt path algebra is simple exactly when every vertex reaches every cycle and every sink, and every cycle has an exit.

**How the definition helps.** The exit condition removes the one obstruction from cycles, so simplicity reduces to a reachability condition on the graph. Our own example: a single loop gives the Laurent polynomial ring K\[x, x⁻¹\], which is not simple. The reachability condition is also needed: our own example is two vertices with no edges, whose algebra K × K is not simple. In our own reading, the work is in the proof by Abrams and Aranda Pino, which reduces nonzero ideals to vertices or cycles.

**Paper or page:** [Monoids, dynamics and Leavitt path algebras](https://arxiv.org/abs/2409.00289v1). It says: “The Leavitt path algebra Lₖ(E) is a simple ring if and only if (1) Every vertex in E connects to every cycle and every sink of E, and (2) Every cycle in E has an exit.”

**Sources:**

- [Gene Abrams, Roozbeh Hazrat, Monoids, dynamics and Leavitt path algebras, arXiv:2409.00289 (2024)](https://arxiv.org/abs/2409.00289v1)
- [Gene Abrams, Gonzalo Aranda Pino, The Leavitt path algebra of a graph, J. Algebra 293 (2005), 319-334](https://doi.org/10.1016/j.jalgebra.2005.07.028)

### Gabriel filters of ideals classify hereditary torsion classes of modules

**Remember:** A hereditary torsion class is decided by which cyclic modules R/I it contains.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S90 (Torsion theories; radicals on module categories (associative algebraic aspects)), 18E10, 18E40. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A Gabriel filter F is a nonempty upward-closed family of left ideals closed under finite intersections. For every I ∈ F and r ∈ R, it contains (I:r) = {s ∈ R ∣ sr ∈ I}. A left ideal J belongs to F whenever some I ∈ F satisfies (J:r) ∈ F for every r ∈ I.

**Problem.** For any ring R, the hereditary torsion classes in R-Mod correspond one-to-one to the Gabriel filters of left ideals of R. The class 𝒯 goes to the filter of ideals I with R/I in 𝒯.

**How the definition helps.** A hereditary torsion class is determined by the cyclic modules R/I it contains, because every module is a sum of cyclic submodules (our own). The axioms of a Gabriel filter are those closure properties written in terms of ideals (our own). Closure under subobjects and quotients gives the first axioms, and closure under extensions gives Gabriel composition (our own). The work goes into checking that the torsion modules of a Gabriel filter are closed under extensions.

**nLab:** [Gabriel filter](https://ncatlab.org/nlab/show/Gabriel+filter). It says: “Given a Gabriel filter G, the class of all G-torsion modules (see uniform filter) is a hereditary torsion class.”

**Paper or page:** [Classes of Preradicals Induced by Relative Injectivity, Corollary 3](https://arxiv.org/abs/1511.01222). It says: “Let σ be a preradical over R-Mod. Then 𝕋\_σ is an hereditary torsion class if and only if 𝕀\_σ is a Gabriel filter.”

**Sources:**

- [P. Gabriel, Des catégories abéliennes, Bull. Soc. Math. France 90 (1962) 323–448](https://doi.org/10.24033/bsmf.1583)
- [Classes of preradicals induced by relative injectivity, arXiv:1511.01222](https://arxiv.org/abs/1511.01222)

### A variant of the Hopf module theorem holds exactly for Hopf algebras

**Remember:** The antipode is exactly what makes free Hopf modules all Hopf modules.

*Rules out counterexamples. Confidence: medium.* MSC 16T05 (Hopf algebras and their applications), 16T15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A Hopf algebra is a bialgebra B with a linear map S satisfying m(S ⊗ id)Δ = ηε = m(id ⊗ S)Δ. Here m, Δ, η and ε are its product, coproduct, unit and counit.

**Problem.** For a bialgebra B, the functor −⊗B into Hopf trimodules over B is an equivalence of categories if and only if B has an antipode.

**How the definition helps.** The two antipode identities supply the inverse in the Hopf trimodule structure theorem (our own explanation). In the monoid bialgebra k\[ℕ\], the degree-one generator is group-like but has no multiplicative inverse, so no antipode exists (our own). The quoted equivalence criterion therefore rules out this example.

**Paper or page:** [Reconstruction of module categories in the infinite and non-rigid settings](https://arxiv.org/abs/2409.00793). It says: “Let B be a bialgebra. The functor −⊗B … is an equivalence if and only if B admits an antipode.”

**Sources:**

- [Mateusz Stroiński and Tony Zorman, Reconstruction of module categories in the infinite and non-rigid settings, arXiv:2409.00793 (2024)](https://arxiv.org/abs/2409.00793)

### Associator logarithms are Lie series

**Remember:** Group-like multiplication becomes primitive addition under the logarithm.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 17B01. arXiv math.QA. Level 4: research.

**Definition.** In the completed free algebra on two letters over a characteristic-zero field, let Δ be the continuous algebra map sending each letter a to a⊗1+1⊗a. A series Φ is group-like if its constant term is one and ΔΦ = Φ ⊗ Φ in the completed tensor square.

**Problem.** The formal logarithm of an associator is a Lie series, a degree-by-degree sum of iterated brackets of the two letters.

**How the definition helps.** The group-like equation splits the coproduct of the logarithm into two summands. In our own proof, take the logarithm of the product of the commuting factors Φ ⊗ 1 and 1 ⊗ Φ. This gives Δ(log Φ) = log Φ ⊗ 1 + 1 ⊗ log Φ. The remaining theorem identifies exactly the series satisfying this additive equation with Lie series.

**nLab:** [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator). It says: “is a grouplike element”

**Paper or page:** [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1). It says: “\\Prim(\\widehat{H}) &amp;\\xrightarrow{\\sim} \\operatorname{Grp}(\\widehat{H})”

**Sources:**

- [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1)

### Cleft extensions are crossed products, the trivial bundles of Hopf–Galois theory

**Remember:** A cleaving map respects the coaction and has a convolution inverse.

*Makes the theorem clean to state or prove.* MSC 16T05 (Hopf algebras and their applications), 58B32, 16S35. arXiv math.QA, math.RA. Level 4: research.

**Definition.** An H-comodule algebra A with coinvariants B is cleft when there is a comodule map γ: H → A with a convolution inverse γ⁻¹. That means γ(h₍₁₎)γ⁻¹(h₍₂₎) = ε(h)1 = γ⁻¹(h₍₁₎)γ(h₍₂₎). The map γ plays the role of a global section of a principal bundle.

**Problem.** A right H-comodule algebra A over a field is cleft exactly when it is a crossed product of its coinvariants B with H. The crossed product uses a twisted action and a convolution-invertible cocycle. Equivalently, B ⊂ A is H-Galois with a left B-linear, right H-colinear isomorphism A ≅ B ⊗ H.

**How the definition helps.** A normalized cleaving map gives a twisted action and cocycle by convolution (our own). The map b ⊗ h ↦ bγ(h) identifies the resulting crossed product with A. The cleft extension theorem of Doi–Takeuchi and Blattner–Cohen–Montgomery gives the converse and the equivalent normal basis criterion.

**Paper or page:** [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860), [Differential Calculi on Quantum Principal Bundles over Projective Bases](https://arxiv.org/abs/2110.03481). It says: “(i) There exists an invertible 2-cocycle and an action of H on A<sup>co H</sup> such that A≅A<sup>co H</sup> \#\_σ H. (ii) The extension A<sup>co H</sup> ⊂ A is H-cleft. (iii) A<sup>co H</sup> ⊂ A is a H-Galois extension and has the normal basis property.”

**Sources:**

- [Y. Doi and M. Takeuchi, Cleft comodule algebras for a bialgebra, Communications in Algebra 14 (1986) 801–817](https://doi.org/10.1080/00927878608823337)

### Defining Nichols algebras by a maximal ideal forbids primitives above degree one

**Remember:** A new higher primitive would give a larger ideal to remove.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 17B37. arXiv math.QA. Level 4: research.

**Definition.** For a Yetter–Drinfeld module V, give its braided tensor Hopf algebra T(V) the coproduct making V primitive. Its Nichols algebra is the quotient by the largest graded braided Hopf ideal contained in degrees at least two.

**Problem.** The primitive elements of the Nichols algebra of V are exactly the elements of V. An element x is primitive when Δ(x) = 1 ⊗ x + x ⊗ 1.

**How the definition helps.** Every degree-one generator remains primitive in the quotient (our own). The homogeneous primitives in higher degrees span a Yetter–Drinfeld submodule and generate a graded braided Hopf ideal in those degrees. If nonzero, its preimage in T(V) would contradict maximality (our own). Degree zero contains no nonzero primitive.

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

**Definition.** Use a left H-comodule algebra E with coaction ρ and coinvariants U. It is H-Galois if x ⊗ y ↦ ρ(x)(1⊗y) is a bijection E ⊗ᵤ E → H ⊗ E. A relative Hopf module is a left E-module with left H-coaction δ satisfying δ(em) = ρ(e)δ(m) for every e,m.

**Problem.** Let U ⊂ E be H-Galois, with E faithfully flat as a right U-module. Then M ↦ E ⊗ M over U is an equivalence from U-modules to relative Hopf modules, with inverse given by taking coinvariants.

**How the definition helps.** The Galois bijection identifies the relative Hopf module compatibility law with descent data for U → E (our own). Faithfully flat descent therefore identifies these objects with left U-modules. Extension of scalars and coinvariants give the two functors.

**nLab:** [Schneider's theorem](https://ncatlab.org/nlab/show/Schneider%27s+theorem). It says: “Hence the categories of comodules are equivalent and the theorem hence boils down to the standard faithfully flat descent (for noncommutative rings) or comonadicity criterium in comonadic version.”

**Sources:**

- [H.-J. Schneider, Principal homogeneous spaces for arbitrary Hopf algebras, Israel Journal of Mathematics 72 (1990) 167–195](https://doi.org/10.1007/BF02764619)

### Quantum torsors recover their Hopf algebra from the Galois object alone

**Remember:** A torsor knows its structure group, so you need not supply it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16T05 (Hopf algebras and their applications), 58B32. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A torsor algebra T has a unital algebra map μ into T ⊗ Tᵒᵖ ⊗ T satisfying (μ⊗id⊗id)μ = (id⊗id⊗μ)μ. Multiplying the first two factors of μ(t) gives 1⊗t, and multiplying the last two gives t⊗1 for every t ∈ T.

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

**Remember:** Discard left-hand products and the coaction becomes a derivation.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 11M32. arXiv math.QA, math.NT. Level 4: research.

**Definition.** Let H be a connected graded Hopf algebra over ℚ, and let H₊ be its part of positive weight. Define D<sub>m</sub> by applying the coproduct and then projecting the left factor onto the weight-m part of H₊/H₊², the elements modulo products.

**Problem.** For each m &gt; 0, D<sub>m</sub> is a derivation: D<sub>m</sub>(ab) = D<sub>m</sub>(a)(1 ⊗ b) + (1 ⊗ a)D<sub>m</sub>(b).

**How the definition helps.** Projection kills every term in Δ(a)Δ(b) having positive left weight from both factors (our own). The terms with both left factors scalar have weight zero, so they vanish under the weight-m projection. The remaining terms use either 1 ⊗ a or 1 ⊗ b and give the displayed product rule.

**Paper or page:** [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1). It says: “is a derivation with respect to ∗”

**Sources:**

- [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1)

### Quasitriangular Hopf algebras give solutions of the Yang–Baxter equation

**Remember:** The universal R-matrix is exactly a braiding on the module category.

*True by definition.* MSC 16T10 (Bialgebras), 16T25, 18M15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A bialgebra H is quasitriangular if it has an invertible element R in H ⊗ H with two properties. First, the flipped coproduct of h equals R Δ(h) R⁻¹ for all h. Second, (Δ ⊗ id)(R) = R₁₃R₂₃ and (id ⊗ Δ)(R) = R₁₃R₁₂, where R₁₃ means R placed in the first and third tensor factors.

**Problem.** In a quasitriangular bialgebra, R satisfies the quantum Yang–Baxter equation R₁₂R₁₃R₂₃ = R₂₃R₁₃R₁₂. So every H-module gives a solution of this equation, and hence representations of the braid groups.

**How the definition helps.** Conjugating the first two legs by R₁₂ replaces Δ by its opposite (our own). Thus R₁₂(Δ⊗id)(R) = (Δᵒᵖ⊗id)(R)R₁₂. Expanding both sides gives the displayed Yang–Baxter equation. Acting on tensor powers and composing each adjacent R-action with the flip gives invertible braid generators (our own).

**nLab:** [quasitriangular bialgebra](https://ncatlab.org/nlab/show/quasitriangular+bialgebra), [quantum group](https://ncatlab.org/nlab/show/quantum+group). It says: “equipped with just the right structure such as to make its category of modules into a braided monoidal category/symmetric monoidal category.”

**Sources:**

- [Vladimir Drinfeld, Quantum groups, Proc. ICM 1986, Vol. 1 (1987) 798–820; expanded version J. Soviet Math. 41 (1988) 898–915](https://doi.org/10.1007/BF01247086)
- [Shahn Majid, Quasitriangular Hopf algebras and Yang–Baxter equations, Int. J. Mod. Phys. A 5 (1990) 1–91](https://doi.org/10.1142/S0217751X90000027)

### Totally nonnegative integers turn the narrow class group into a Picard group

**Remember:** Allow only integers nonnegative at every real embedding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16Y60 (Semirings), 11R29. arXiv math.AG, math.RA. Level 4: research.

**Definition.** For a number field K, take the semiring S of algebraic integers a satisfying σ(a) ≥ 0 for every real embedding σ. An S-module is reflexive when its evaluation map to its S-linear double dual is an isomorphism.

**Problem.** The reflexive Picard group of the semiring of totally nonnegative integers of a number field is the narrow class group of the field.

**How the definition helps.** Every nonzero element of the semiring is positive at every real embedding (our own). The quoted reflexive Picard group theorem identifies its module classes with fractional ideals modulo principal ideals generated by totally positive elements. This quotient is the narrow class group.

**Paper or page:** [Facets of module theory over semirings](https://arxiv.org/abs/2405.18645v3). It says: “We also show that the narrow class group of a number field can be recovered as a reflexive Picard group of its subsemiring of totally nonnegative algebraic integers.”

**Sources:**

- [James Borger, Jaiung Jun, Facets of module theory over semirings, arXiv:2405.18645v3 (2025)](https://arxiv.org/abs/2405.18645v3)
