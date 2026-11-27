### Endomorphisms form a ring only when the group is abelian

**Remember:** Add endomorphisms pointwise only when the group is abelian.

*Rules out counterexamples. Confidence: medium.* MSC 16S50 (Endomorphism rings; matrix rings), 20K30. arXiv math.RA, math.GR. Level 1: early undergraduate.

**Definition.** An endomorphism of a group is a homomorphism from the group to itself. Modules over a ring are defined on abelian groups, not on all groups.

**Problem.** For an abelian group, the endomorphisms form a ring under pointwise addition and composition. For a non-abelian group, this structure is not a ring.

**How the definition helps.** Only for an abelian group do the endomorphisms form a ring under pointwise addition, so defining modules on abelian groups lets a module be a ring map from R to an endomorphism ring (our own reading). In our own check, the pointwise sum of the identity with itself is x ↦ x ⊕ x. This map is a homomorphism only when the group is abelian.

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

*Makes the theorem clean to state or prove.* MSC 16B50 (Category-theoretic methods and results in associative algebras (except as in 16D90)), 18A30. arXiv math.RA, math.CT. Level 2: later undergraduate.

**Definition.** A ring with identity has an additive identity 0 and a multiplicative identity 1. The usual definition does not require 0 ≠ 1, so the one-element set {0} is a ring, called the zero ring. Ring maps must send 1 to 1.

**Problem.** In the category of rings with identity, the zero ring is a terminal object. This means that every ring has exactly one ring map to it.

**How the definition helps.** Allowing 0 = 1 puts the zero ring in the category, and then the only function to it is a ring map, since every equation holds in a one-element set. If the definition instead requires 0 ≠ 1, there is no terminal object. A ring receiving maps from both ℤ/2 and ℤ/3 has 2 = 0 and 3 = 0, so 1 = 0 (argument our own).

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring). It says: “In the category of rings, the zero ring is the terminal object, whereas the ring of integers Z is the initial object.”

**Sources:** none listed. No primary source with a working link was found.

### Defined through ℤ → R, the target's characteristic divides the source's

**Remember:** A unital ring map can only enlarge the kernel from ℤ.

*True by definition. Confidence: medium.* MSC 16B99 (General and miscellaneous), 13B10. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** For a ring R with 1, there is exactly one ring map ℤ → R. Define the characteristic of R as the nonnegative generator of its kernel. The usual definition takes the least positive n with n·1 = 0, or 0 if none exists.

**Problem.** Let R → S be a ring map that sends 1 to 1. Then the characteristic of S divides the characteristic of R.

**How the definition helps.** The kernel definition turns divisibility into inclusion of ideals of ℤ, which composition gives at once. The map ℤ → S is the map ℤ → R followed by R → S, so its kernel contains the kernel for R. With the least-n definition, one first proves that n·1 = 0 exactly when the characteristic divides n (rest our own).

**Paper or page:** [Principal Ideal of Characteristic of Ring is Subset of Kernel of Multiple Function](https://proofwiki.org/wiki/Principal_Ideal_of_Characteristic_of_Ring_is_Subset_of_Kernel_of_Multiple_Function). It says: “(p) ⊆ ker(gₐ)”

**Sources:** none listed. No primary source with a working link was found.

### Defining an algebra by a central scalar map makes linearity automatic

**Remember:** A scalar acts by multiplying its image of the identity.

*True by definition.* MSC 16B99 (General and miscellaneous), 13B10. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** Define a unital algebra over a commutative ring R as a ring A with a ring map η from R into the centre of A. The centre consists of the elements that commute with everything. Another definition starts with an R-module and an R-bilinear product.

**Problem.** Let f be a ring map from A to B that sends 1 to 1. Then f is R-linear exactly when f(η<sub>A</sub>(r)) = η<sub>B</sub>(r) for every r in R.

**How the definition helps.** With scalars as ring elements, linearity becomes multiplicativity, which f already has. In our own proof, if f respects the scalar maps, then f(ra) = f(η(r)a) = f(η(r))f(a) = r f(a). For the converse, take a = 1. Wikipedia states that the two definitions agree, with ra = η(r)a. That comparison holds the real work.

**Wikipedia:** [Algebra over a field](https://en.wikipedia.org/wiki/Algebra_over_a_field). It says: “This definition is equivalent to that above, with scalar multiplication”

**Sources:** none listed. No primary source with a working link was found.

### Requiring 1x = x makes ℤ-modules exactly the abelian groups

**Remember:** If 1 acts as the identity, n times x means x added n times.

*True by definition.* MSC 16D10 (General module theory in associative algebras). arXiv math.RA, math.GR. Level 2: later undergraduate.

**Definition.** A left module over a ring R is an abelian group M with a multiplication of elements of M by elements of R. The rules are distributivity, (rs)x = r(sx), and 1x = x. The last rule makes a module the same thing as a ring homomorphism from R to the endomorphisms of M.

**Problem.** Every abelian group is a ℤ-module, and in only one way. So the theory of ℤ-modules is the theory of abelian groups.

**How the definition helps.** The rule 1x = x forces 2x = x + x, 3x = x + x + x, and so on, so the addition fixes the ℤ-action. Without the rule, the zero action nx = 0 would be a second ℤ-module structure on every nonzero abelian group (our own). Little work is left: the result is nearly the definition.

**Wikipedia:** [Module (mathematics)](https://en.wikipedia.org/wiki/Module_%28mathematics%29). It says: “every abelian group is a module over the ring of integers Z in a unique way.”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, the ideal generated by f is simply Rf

**Remember:** Because f = 1·f, the multiples of f already contain f.

*Rules out counterexamples.* MSC 16D25 (Ideals in associative algebras), 13A15. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** The left ideal generated by f is the smallest left ideal that contains f. In a ring with 1 it is Rf. In a rng it is Rf + ℤf, the set of all af + nf with a in R and n an integer. This formula goes back to Emmy Noether.

**Problem.** In a ring with 1, the left ideal generated by f is Rf. So in a commutative ring with 1, (f) ⊆ (g) exactly when g divides f.

**How the definition helps.** In a ring with 1, f = 1·f lies in Rf, so Rf is already the ideal generated by f. In the rng 2ℤ of even integers, R·2 = 4ℤ does not contain 2, and the ideal generated by 2 is 2ℤ itself (our own). There 2 does not divide 2, since no even x has 2x = 2, yet (2) ⊆ (2), so the link to divisibility breaks (our own).

**Wikipedia:** [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “in a ring R, the left ideal (f) generated by an element f, defined as the smallest left ideal containing f, is simply Rf, but if R is only a rng, then Rf might not contain f”

**Sources:**

- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)

### Sums of simple modules stay semisimple under quotients

**Remember:** The image of a simple module is simple or zero.

*True by definition.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras). arXiv math.RA, math.RT. Level 2: later undergraduate.

**Definition.** A simple module is a nonzero module with no proper nonzero submodule. Define a semisimple module as a sum of simple submodules, not necessarily a direct sum. Another definition requires every submodule to have a complement, a second submodule that gives a direct sum with it.

**Problem.** Every quotient of a semisimple module is semisimple.

**How the definition helps.** With the sum definition, taking a quotient just takes the images of the simple submodules (our own). Each image is simple or zero, since the kernel on a simple module is zero or the whole module (our own). Starting with the complement definition instead, one lifts submodules of the quotient and passes their complements down (our own). The work moves to the equivalence of these definitions, using a maximal direct sum of simple submodules (our own).

**Wikipedia:** [Semisimple module](https://en.wikipedia.org/wiki/Semisimple_module). It says: “If M is semisimple and N is a submodule, then N and M / N are also semisimple.”

**Sources:** none listed. No primary source with a working link was found.

### Wedderburn–Artin needs semisimple rings, not simple rings

**Remember:** Semisimple is about modules; simple is about ideals.

*Rules out counterexamples.* MSC 16K99 (Division rings and semisimple Artin rings), 16D60. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A simple module is a nonzero module with no submodules other than 0 and itself. A ring is semisimple if every left module is a direct sum of simple modules; equivalently, every right module is. A ring is simple if it has no two-sided ideals other than 0 and itself.

**Problem.** The Wedderburn–Artin theorem says that every semisimple ring is a finite product of matrix rings over division rings. The simple ones among them are single matrix rings.

**How the definition helps.** The theorem holds for the module-theoretic notion, semisimple, and fails for the ideal-theoretic notion, simple. The Weyl algebra over a field of characteristic 0 is simple but not semisimple. The Weyl algebra is the ring of polynomial differential operators, generated by x and ∂ with ∂x − x∂ = 1. It is not a matrix ring over a division ring. Adding the Artinian condition (descending chains of left ideals stop) repairs this, because a simple Artinian ring is semisimple.

**nLab:** [Wedderburn-Artin theorem](https://ncatlab.org/nlab/show/Wedderburn-Artin+theorem). It says: “For example, the Weyl algebra is simple but not semisimple, and not isomorphic to a matrix algebra over a division ring.”

**Sources:**

- [J. H. M. Wedderburn, On Hypercomplex Numbers, Proceedings of the London Mathematical Society s2-6 (1908) 77–118](https://doi.org/10.1112/plms/s2-6.1.77)

### Defining ℤ as the initial ring makes its maps into rings unique

**Remember:** The initial ring has just one way into any ring.

*True by definition. Confidence: medium.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 18A30. arXiv math.RA, math.CT. Level 2: later undergraduate.

**Definition.** Define ℤ as the initial ring. That means ℤ has exactly one ring map that preserves 1 into each ring. The usual construction takes classes of pairs (a, b) of natural numbers, read as differences a − b.

**Problem.** Every ring with 1 has exactly one ring homomorphism from ℤ that sends 1 to 1.

**How the definition helps.** With this definition, the theorem is the definition itself. With pairs, one builds the map n ↦ n · 1 and proves by induction that it respects addition and multiplication, and uniqueness needs a second induction. The work moves to proving that the ring of pairs exists and is initial (all our own).

**nLab:** [integer](https://ncatlab.org/nlab/show/integer). It says: “The ring ℤ of all integers may defined as the free group on one generator or as the initial ring.”

**Sources:** none listed. No primary source with a working link was found.

### Ordering by x + y = y makes idempotent addition a join

**Remember:** Adding a smaller element leaves the larger element alone.

*True by definition. Confidence: medium.* MSC 16Y60 (Semirings), 06F05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A semiring is additively idempotent when x + x = x for all x. Define x ≤ y to mean x + y = y. The usual algebraic preorder instead asks for some d with x + d = y.

**Problem.** In this order, x + y is the least upper bound, or join, of x and y. Multiplication on either side preserves these joins.

**How the definition helps.** With this order, the join property is a short calculation with associativity, commutativity and idempotence. The nLab states that addition is a join for this partial order. In our own check of leastness, x + z = z and y + z = z give (x + y) + z = z. Distributivity gives a(x + y) = ax + ay, so multiplication preserves joins. In our own comparison, x + d = y gives x + y = x + x + d = y. So the two orders agree.

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

### Free modules defined by universal property turn products of sets into tensors

**Remember:** Pairs of generators become pure tensors.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 15A69. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** Define the free module on a set X by a universal property. Each function from X into a module extends uniquely to a linear map. A construction uses finitely supported functions from X to the ring.

**Problem.** Over a commutative ring, the free module on X × Y is isomorphic to a tensor product. Its factors are the free modules on X and on Y.

**How the definition helps.** Both sides classify the same maps, so they are isomorphic without a basis computation. In our own argument, a function on X × Y extends uniquely to a bilinear map on the two free modules. Bilinear maps are the linear maps out of the tensor product. The nLab states that the free module construction turns products of sets into tensor products. A direct proof would show that the pure tensors x ⊗ y form a basis.

**nLab:** [free module](https://ncatlab.org/nlab/show/free+module). It says: “In other words, the free module construction turns set-theoretic products into tensor products.”

**Sources:** none listed. No primary source with a working link was found.

### Three equivalent definitions of projective module make each basic fact immediate

**Remember:** Projective means a piece of a free module.

*True by definition.* MSC 16D40 (Free, projective, and flat modules and ideals in associative algebras), 18G05. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A module M is projective if it has the lifting property. For each surjection Y → Z and each map M → Z, there is a map M → Y that gives the first map when composed with the surjection. A free module is one with a basis. A short exact sequence splits if the last map has a right inverse.

**Problem.** For a module M over a ring, three conditions are equivalent. M has the lifting property; M is a direct summand of a free module; every short exact sequence ending in M splits.

**How the definition helps.** Each definition makes some fact trivial. With the lifting property, free modules are projective at once, because a map from a free module is fixed by the images of a basis. With the direct-summand form, a direct summand of a projective module is projective at once. With the splitting form, every surjection onto M has a right inverse, which is the step that many proofs need. The work moves into the proof that the three definitions agree.

**Paper or page:** [Equivalence of Definitions of Projective Module](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Projective_Module). It says: “(2): M is a direct summand of a free module. (3): Every short exact sequence of the form 0 → X → Y → M → 0 splits”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Projective Module](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Projective_Module)

### Asking for an essential extension makes the injective hull unique

**Remember:** Essential means nothing in the hull is far from M.

*Makes the theorem clean to state or prove.* MSC 16D50 (Injective modules, self-injective associative rings), 18G05. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A module E is injective if every map into E from a submodule of a module extends to the whole module. An extension M ⊆ E is essential if every nonzero submodule of E meets M in a nonzero element. An injective hull of M is an injective module E that contains M as an essential submodule.

**Problem.** Every module M has an injective hull. Any two injective hulls of M are isomorphic by an isomorphism that fixes M.

**How the definition helps.** The essential condition picks out the smallest injective module around M, and it makes the hull unique up to isomorphism over M. Without it, ℤ sits inside both ℚ and ℚ ⊕ ℚ/ℤ, which are both injective; only ℚ is an essential extension of ℤ (our own). The isomorphism between two hulls exists but is not unique.

**Wikipedia:** [Injective hull](https://en.wikipedia.org/wiki/Injective_hull), [Injective module](https://en.wikipedia.org/wiki/Injective_module). It says: “the injective hull (or injective envelope) of a module is both the smallest injective module containing it and the largest essential extension of it.”

**Sources:**

- [B. Eckmann and A. Schopf, Über injektive Moduln, Archiv der Mathematik 4 (1953) 75–78](https://doi.org/10.1007/BF01899665)
- [E. Matlis, Injective modules over Noetherian rings, Pacific Journal of Mathematics 8 (1958) 511–528](https://doi.org/10.2140/pjm.1958.8.511)

### Absolutely simple modules make Schur's lemma give scalars over any field

**Remember:** Only scalars commute with an absolutely simple module, by definition.

*True by definition.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras), 20C15. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A module is simple if it has no submodules except 0 and itself. A simple module M over a k-algebra is absolutely simple if its only self-maps are the scalar multiples of the identity.

**Problem.** Every central element of the algebra acts on an absolutely simple module as a scalar. So the module has a central character, a ring map from the center to k.

**How the definition helps.** Central elements commute with the action, so they are module maps, and the definition says such maps are scalars. The work moves into the theorem that over an algebraically closed field, every finite-dimensional simple module is absolutely simple. Over a smaller field this fails: the cyclic group of order 4 acts on ℝ² by rotation through 90 degrees, a simple module with endomorphisms ℂ (our own). The generator is central but does not act as a real scalar.

**Wikipedia:** [Schur's lemma](https://en.wikipedia.org/wiki/Schur%27s_lemma). It says: “A simple module over a k-algebra is said to be absolutely simple if its endomorphism ring is isomorphic to k. This is in general stronger than being irreducible over the field k”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, every simple ring is primitive

**Remember:** A 1 gives a maximal left ideal, and that gives a faithful simple module.

*Rules out counterexamples.* MSC 16D60 (Simple and semisimple modules, primitive rings and ideals in associative algebras), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** A ring is left primitive if it has a faithful simple left module, that is, a simple module on which only 0 acts as zero. A simple ring is a nonzero ring whose only two-sided ideals are 0 and itself.

**Problem.** Every simple ring with 1 is left and right primitive. So the Jacobson density theorem describes it as a dense ring of linear maps of a vector space over a division ring.

**How the definition helps.** A ring with 1 has a maximal left ideal L, so R/L is a simple module. Its annihilator is a proper two-sided ideal, hence 0, so the module is faithful. Without 1 this fails for the cyclic group of prime order with all products zero, a simple rng. It kills RM for every module M, and for a simple M, RM is 0 or M, so no simple module is faithful (our own).

**Wikipedia:** [Primitive ring](https://en.wikipedia.org/wiki/Primitive_ring), [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29), [Jacobson radical](https://en.wikipedia.org/wiki/Jacobson_radical). It says: “Every simple ring R with unity is both left and right primitive. (However, a simple non-unital ring may not be primitive.)”

**Sources:**

- [N. Jacobson, The radical and semi-simplicity for arbitrary rings, American Journal of Mathematics 67 (1945) 300–320](https://doi.org/10.2307/2371731)

### Local endomorphism rings make direct sum decompositions unique

**Remember:** If the pieces have local endomorphism rings, the pieces are unique.

*Makes the theorem clean to state or prove.* MSC 16D70 (Structure and classification for modules, bimodules and ideals (except as in 16Gxx), direct sum decomposition and cancellation in associative algebras)), 16L30. arXiv math.RA, math.RT. Level 3: graduate.

**Definition.** A module is strongly indecomposable if its endomorphism ring is local, that is, the endomorphisms that are not invertible form an ideal.

**Problem.** Krull–Schmidt theorem: a nonzero module of finite length is a direct sum of indecomposable modules, unique up to order and isomorphism. Azumaya's theorem extends this to any decomposition, even infinite, into strongly indecomposable modules.

**How the definition helps.** The local condition gives the exchange step directly. If a sum of endomorphisms of a piece is invertible, then one term is invertible. So a piece of one decomposition can replace a piece of the other (our own). Indecomposable modules of finite length are strongly indecomposable, so the classical theorem becomes a special case. Plain indecomposability is not enough to work with: ℤ is indecomposable over itself, but its endomorphism ring ℤ is not local. The theorem fails if one asks only that the module be Noetherian or only that it be Artinian.

**Wikipedia:** [Krull–Schmidt theorem](https://en.wikipedia.org/wiki/Krull%E2%80%93Schmidt_theorem). It says: “if a module has a (possibly infinite) decomposition into strongly indecomposable modules, then this decomposition is unique up to a permutation and isomorphism.”

**Sources:**

- [A. Facchini, D. Herbera, L. S. Levy and P. Vámos, Krull–Schmidt fails for Artinian modules, Proceedings of the American Mathematical Society 123 (1995) 3587](https://doi.org/10.1090/S0002-9939-1995-1277109-4)

### Basic representatives are unique

**Remember:** Keep one projective of each kind to recover one ring.

*Rules out counterexamples.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A finite-dimensional algebra is basic if its regular right module decomposes into one copy of each indecomposable finitely generated projective, up to isomorphism. The regular right module is the algebra acting on itself by right multiplication. A projective module is a summand of a free module. Indecomposable means the module cannot split into two nonzero summands.

**Problem.** Consider finite-dimensional algebras over a field whose module categories are equivalent by functors linear over that field. Each such equivalence class has exactly one basic algebra up to algebra isomorphism.

**How the definition helps.** An equivalence preserves the sum of one copy of each indecomposable finitely generated projective, and for a basic algebra this sum is the regular module (our own). Its endomorphism algebra recovers the algebra, and Morita's theorem gives existence by taking the endomorphism algebra of this sum. Without the basic condition, a field and its two-by-two matrix algebra would be two different representatives of one class.

**Wikipedia:** [Morita equivalence](https://en.wikipedia.org/wiki/Morita_equivalence). It says: “While isomorphic rings are Morita equivalent, Morita equivalent rings can be nonisomorphic.”

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the regular representation of B is a direct summand of a finite direct sum of copies of P.”

**Sources:** none listed. No primary source with a working link was found.

### Full corners recover modules

**Remember:** A full corner still sees the whole ring.

*Rules out counterexamples.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** An idempotent e satisfies e² = e. It is full if all finite sums of products aeb fill the ring, or equivalently if such a sum equals 1.

**Problem.** Let R be a ring with identity and e a full idempotent. Its corner eRe has identity e. Sending each right R-module M to Me gives an equivalence of module categories, called a Morita equivalence.

**How the definition helps.** Fullness makes R a direct summand of a finite sum of copies of eR. Indeed, write 1 as a sum of products aeb to construct the inclusion and retraction, in our own argument. Morita’s theorem now applies because eR itself is a direct summand of R. In our own counterexample, take e = (1, 0) in k × k. Then Me vanishes for every module supported on the second factor.

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

**Problem.** A ring property stated only through modules and module maps is shared by Morita equivalent rings. For example, if R is von Neumann regular (for each a there is x with axa = a), so is every matrix ring over R.

**How the definition helps.** A property stated only with modules and their maps is carried across any equivalence of module categories, so its invariance is automatic. With the element definition, it is not clear that von Neumann regularity is invariant. But a ring is von Neumann regular exactly when all its modules are flat, and flatness is kept by the equivalence. Commutative, local and domain are not Morita invariant.

**Wikipedia:** [Morita equivalence](https://en.wikipedia.org/wiki/Morita_equivalence). It says: “Generally speaking, any property of modules defined purely in terms of modules and their homomorphisms (and not to their underlying elements or ring) is a categorical property which will be preserved by the equivalence functor.”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products compose functors

**Remember:** Compose tensor functors by tensoring their bimodules.

*True by definition.* MSC 16D90 (Module categories in associative algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A bimodule has commuting left and right ring actions. Tensoring right modules with a fixed bimodule defines a functor between right module categories. Equivalently, such functors are the additive functors preserving arbitrary direct sums and cokernels, up to natural isomorphism. The cokernel of a map is its target modulo its image.

**Problem.** The composite of two such functors is represented by the tensor product of their representing bimodules over the middle ring.

**How the definition helps.** The tensor description makes composition just associativity of tensor products, in our own argument. The Eilenberg–Watts theorem carries the work of showing that every such functor is of this form. In our own explanation, its value on the ring as a module over itself gives the bimodule. Presentations by free modules extend the formula to every module, in our own explanation.

**nLab:** [Eilenberg-Watts theorem](https://ncatlab.org/nlab/show/Eilenberg-Watts+theorem). It says: “The Eilenberg-Watts theorem identifies colimit-preserving functors between categories of modules with the operations of forming tensor products with bimodules.”

**Sources:** none listed. No primary source with a working link was found.

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

**Definition.** A tilting complex T is a bounded complex of right modules whose terms are summands of finite free modules. In the derived category, maps inducing cohomology isomorphisms become invertible. There are no nonzero maps from T to any nonzero degree shift of T there. Shifts, mapping cones and direct summands of objects already obtained must generate all bounded complexes of finitely generated projective modules.

**Problem.** Two algebras over a field have equivalent unbounded derived categories, by a field-linear triangulated equivalence, exactly when one is the endomorphism algebra in the derived category of a tilting complex over the other.

**How the definition helps.** The complex lets one test an equivalence by examining a single generator and its shifts, in our own explanation. A derived equivalence carries the regular module to such a complex, in our own explanation. Rickard's theorem does the work in the other direction, realizing the endomorphisms and constructing the equivalence.

**Paper or page:** [Rickard's Derived Morita Theory: Review and Outlook](https://arxiv.org/abs/2509.06369v1). It says: “the regular representation of B can be obtained from T and its shifts by forming extensions and taking direct summands.”

**Sources:**

- [Jeremy Rickard, Morita Theory for Derived Categories](https://doi.org/10.1112/jlms/s2-39.3.436)

### Centralizers split group-ring Hochschild homology

**Remember:** Components are conjugacy classes, and the loops in each component are centralizers.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** For a discrete group G, form a category with one object for each group element. An arrow from g to h is a group element a satisfying aga⁻¹ = h. Model the Hochschild chains of the group algebra k\[G\] by strings of composable arrows, with coefficients in k.

**Problem.** For a commutative ring k, Hochschild homology of k\[G\] splits as a direct sum indexed by conjugacy classes. The summand of g is the group homology over k of its centralizer, the subgroup commuting with g.

**How the definition helps.** The arrow model separates conjugacy classes because arrows exist only between conjugate elements (our own). Each component reduces to one object whose automorphisms form its centralizer (our own). Taking chains of these components gives the direct sum (our own). The comparison with ordinary Hochschild chains rewrites a cyclic list using its product and successive conjugating elements (our own).

**nLab:** [free loop space of classifying space](https://ncatlab.org/nlab/show/free+loop+space+of+classifying+space). It says: “the homotopy quotient of the conjugation ∞-action”

**Sources:**

- [Dan Burghelea, The cyclic homology of the group rings](https://doi.org/10.1007/BF02567420)

### Pseudo-inverses make commutative von Neumann regular rings a variety

**Remember:** Ask the inverse to be regular too, and it becomes unique.

*Makes the theorem clean to state or prove.* MSC 16E50 (von Neumann regular rings and generalizations (associative algebraic aspects)), 08B05. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** A ring R is von Neumann regular if each element a has some x with a x a = a. A pseudo-inverse of a is an element x with both a x a = a and x a x = x.

**Problem.** Commutative von Neumann regular rings are exactly the commutative rings with an operation a ↦ ā such that aāa = a and āaā = ā. So they form a variety of algebras, and every ring map between them preserves ā.

**How the definition helps.** In a commutative ring the pseudo-inverse is unique, so it can be an operation instead of a claim that something exists. An x with axa = a is not unique, but x a x is a pseudo-inverse. A class defined by operations and equations is a variety, and ring maps preserve the operation because the pseudo-inverse is unique.

**nLab:** [von Neumann regular ring](https://ncatlab.org/nlab/show/von+Neumann+regular+ring). It says: “commutative vN rings form a variety of algebras: they are the same as commutative rings equipped with a pseudo-inversion operation a ↦ ā satisfying a ā a = a and ā a ā = ā.”

**Sources:**

- [John von Neumann, On regular rings, Proc. Natl. Acad. Sci. USA 22 (1936) 707–713](https://doi.org/10.1073/pnas.22.12.707)

### Counting indecomposable quiver representations makes Gabriel's ADE theorem statable

**Remember:** Finitely many indecomposables exactly when the graph is A, D or E.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G20 (Representations of quivers and partially ordered sets), 16G60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A quiver is a directed graph. A representation of a quiver puts a vector space at each vertex and a linear map along each arrow. A representation is indecomposable if it is not a direct sum of two nonzero representations. A quiver is of finite type if it has only finitely many indecomposable representations up to isomorphism.

**Problem.** A connected quiver is of finite type exactly when its underlying graph is a Dynkin diagram Aₙ, Dₙ, E₆, E₇ or E₈. Then the indecomposable representations match the positive roots, with the dimensions at the vertices as the coefficients.

**How the definition helps.** Indecomposable representations are the pieces from which all representations are built, so finite type means a full classification. By the Krull–Schmidt theorem, every finite-dimensional representation is a direct sum of indecomposables in an essentially unique way (our own). Representations are usually not sums of irreducible ones, so indecomposables are the right count (our own). What stays hard is the proof, which uses reflection functors or the quadratic form of the graph (our own).

**Wikipedia:** [Gabriel's theorem](https://en.wikipedia.org/wiki/Gabriel%27s_theorem), [Quiver (mathematics)](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29). It says: “A quiver is of finite type if it has only finitely many isomorphism classes of indecomposable representations.”

**Sources:**

- [Gabriel, P. (1972). Unzerlegbare Darstellungen I. manuscripta mathematica 6.](https://doi.org/10.1007/BF01298413)
- [Bernstein, I. N., Gel'fand, I. M., Ponomarev, V. A. (1973). Coxeter functors and Gabriel's theorem. Russian Mathematical Surveys 28, 17–32.](https://doi.org/10.1070/RM1973v028n02ABEH001526)

### Path algebras turn quiver representations into modules over one algebra

**Remember:** Paths multiply by joining end to start; modules are representations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G20 (Representations of quivers and partially ordered sets), 16E60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** The path algebra KΓ of a quiver Γ over a field K has the paths of Γ as a basis. Each vertex gives a path of length zero. The product of two paths is their concatenation if they meet, and zero otherwise.

**Problem.** For a quiver Γ with finitely many vertices, representations of Γ over K are the same as modules over KΓ.

**How the definition helps.** The path algebra repackages a whole diagram of vector spaces and maps as one module, so ring and module theory apply at once. For example, projective modules become the representations built from paths that start at one vertex. The finiteness condition matters: with infinitely many vertices the path algebra has no unit.

**Wikipedia:** [Quiver (mathematics)](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29). It says: “This algebra has a unit element if and only if the quiver has only finitely many vertices. In this case, the modules over K Γ are naturally identified with the representations of Γ.”

**Sources:**

- [Gabriel, P. (1972). Unzerlegbare Darstellungen I. manuscripta mathematica 6.](https://doi.org/10.1007/BF01298413)

### Minimal almost split maps are unique

**Remember:** Factorization finds the map, and minimality prevents spare summands.

*Rules out counterexamples.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers). arXiv math.RT. Level 3: graduate.

**Definition.** A map to an indecomposable module is right almost split if it satisfies two conditions. It has no right inverse, and every map without a right inverse to that module factors through it. It is right minimal if every endomorphism of its source that leaves the map unchanged is invertible.

**Problem.** Two minimal right almost split maps to the same finite-dimensional module differ only by an isomorphism of sources.

**How the definition helps.** Minimality makes both composites of comparison maps invertible, in our own proof. Each almost split map factors through the other, so the composites leave the respective maps unchanged. Thus either comparison gives an isomorphism between the sources. In our own counterexample, start with the quotient k\[x\]/(x²) → k of modules over k\[x\]/(x²). Add a second copy of the source and send it to zero. The enlarged map still has the factorization property, but the sources have different dimensions.

**Wikipedia:** [Auslander–Reiten theory](https://en.wikipedia.org/wiki/Auslander%E2%80%93Reiten_theory). It says: “there is an almost-split sequence as above, which is unique up to isomorphism.”

**Paper or page:** [Largest exact structures and almost split sequences on hearts of twin cotorsion pairs](https://arxiv.org/abs/2306.06616v3). It says: “x is minimal left almost split (resp. y is minimal right almost split).”

**Sources:**

- [Maurice Auslander, A functorial approach to representation theory](https://doi.org/10.1007/bfb0094058)

### Azumaya algebras survive base change

**Remember:** Extend the multiplication map along with the algebra.

*True by definition.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)). arXiv math.RA. Level 3: graduate.

**Definition.** An Azumaya algebra A over a commutative ring R is a direct summand of a finite free R-module, with positive rank at every prime. Write Aᵒᵖ for the algebra with multiplication reversed. Form the tensor product of A and Aᵒᵖ over R. Sending a ⊗ b to the map x ↦ axb must identify this product with all R-linear endomorphisms of A.

**Problem.** Any change of commutative base ring takes Azumaya algebras to Azumaya algebras.

**How the definition helps.** Tensoring the multiplication isomorphism with the new ring gives the required isomorphism there, in our own argument. Endomorphisms commute with scalar extension for summands of finite free modules. Positive rank persists because each new prime lies over an old prime with the same fiber dimension. An equivalent test asks that the algebra become a matrix algebra locally after a faithfully flat extension of scalars. The Azumaya criterion connects that test to the multiplication isomorphism.

**nLab:** [Azumaya algebra](https://ncatlab.org/nlab/show/Azumaya+algebra). It says: “As a left R-module, A finitely generated, faithful and projective”

**Sources:** none listed. No primary source with a working link was found.

### Bimodule projectivity kills higher cohomology

**Remember:** A projective input has no higher extensions.

*True by definition.* MSC 16H05 (Separable algebras (e.g., quaternion algebras, Azumaya algebras, etc.)), 16E40. arXiv math.RA. Level 3: graduate.

**Definition.** A bimodule has commuting left and right algebra actions. An algebra over a field is separable if every surjective bimodule map onto the algebra has a bimodule section. This says the algebra is projective as a bimodule. For finite-dimensional algebras, an equivalent test asks whether every scalar extension is a product of matrix algebras over division algebras.

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

**How the definition helps.** Separability ensures that each center stays a product of fields after any scalar extension. Each corresponding algebra factor stays central simple over its new center by the scalar extension theorem. For our own counterexample, take k = 𝔽ₚ(t) and let L be the field obtained by adjoining a pth root of t. In L ⊗ₖ L the two copies of that root have nonzero difference with pth power zero. This commutative algebra cannot be a product of fields.

**nLab:** [separable algebra](https://ncatlab.org/nlab/show/separable+algebra). It says: “separable algebras are the same as finite products of matrix algebras over finite-dimensional division algebras whose centers are finite-dimensional separable field extensions of the field k.”

**Paper or page:** [Stacks Project, Brauer, Lemma 11.4.9.](https://stacks.math.columbia.edu/tag/074H). It says: “Then A′ = A ⊗ₖ k′ is a finite central simple algebra over k′.”

**Sources:** none listed. No primary source with a working link was found.

### Brauer equivalence gives central simple algebras inverses

**Remember:** Forget the matrix size, and every algebra has an inverse.

*Makes the theorem clean to state or prove.* MSC 16K50 (Brauer groups (algebraic aspects)), 11R52. arXiv math.RA, math.NT. Level 3: graduate.

**Definition.** A central simple algebra over K is a simple algebra with center K. Two such algebras are Brauer equivalent if they are matrix algebras over the same division algebra. The Brauer group is the set of classes under tensor product.

**Problem.** The Brauer classes form an abelian group. For a number field, a class is determined by its local invariants, and these sum to zero.

**How the definition helps.** A tensor product A ⊗ A-opposite is a matrix algebra, and Brauer equivalence counts matrix algebras as trivial, so inverses exist. Up to isomorphism alone, the classes form only a monoid, which has no inverses, because A ⊗ A-opposite is not K itself. With the group in hand, class field theory can state the local–global result as an exact sequence. The page credits the injectivity part to Albert, Brauer, Hasse and Noether. What stays hard is computing the local invariants.

**Wikipedia:** [Brauer group](https://en.wikipedia.org/wiki/Brauer_group). It says: “the Brauer classes are all invertible: the inverse of an algebra A is given by its opposite algebra”

**Sources:**

- [Richard Brauer, Helmut Hasse and Emmy Noether, Beweis eines Hauptsatzes in der Theorie der Algebren, Journal für die reine und angewandte Mathematik 167 (1932)](https://doi.org/10.1515/crll.1932.167.399)

### Centrality preserves simplicity

**Remember:** Fix the center before extending the field.

*Rules out counterexamples.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** A central simple algebra over a field k has center k and no proper nonzero two-sided ideals. Here we require finite dimension over k.

**Problem.** A finite central simple algebra stays central simple after any field extension.

**How the definition helps.** Fixing the center excludes field extensions that split into several factors after a change of scalars. In our own example, ℂ is simple over ℝ, but ℂ ⊗ℝ ℂ is isomorphic to ℂ × ℂ. The splitting theorem gives a full matrix algebra over an algebraic closure of the new field. In our own argument, a proper nonzero ideal would remain proper and nonzero there. Likewise, a center larger than the new field would give more than scalar matrices in the center there.

**Paper or page:** [Stacks Project, Brauer, Lemma 11.4.9.](https://stacks.math.columbia.edu/tag/074H), [Stacks Project, Brauer, Lemma 11.8.6.](https://stacks.math.columbia.edu/tag/0753). It says: “Then A′ = A ⊗ₖ k′ is a finite central simple algebra over k′.”

**Sources:** none listed. No primary source with a working link was found.

### Division representatives minimize splitting degrees

**Remember:** Remove the matrix factor to find the smallest splitting degree.

*Makes the theorem clean to state or prove.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** Consider finite-dimensional simple algebras with center k, where k is a field. Two belong to the same Brauer class if they are matrix algebras over the same division algebra D, up to isomorphism. A division algebra allows division by every nonzero element. The index of the class is the square root of the dimension of D over k.

**Problem.** A splitting field is an extension over which the algebra becomes a full matrix algebra. The index is the least degree of a finite splitting field and divides every such degree.

**How the definition helps.** Discarding the matrix size gives one number for all representatives of the class. A maximal subfield of D splits D and has degree equal to its index. Every finite splitting field has degree divisible by that index. In our own example, two-by-two matrices already split over k, so their matrix size cannot give the least splitting degree.

**Paper or page:** [Stacks Project, Brauer, Lemma 11.5.1.](https://stacks.math.columbia.edu/tag/074K), [Stacks Project, Brauer, Lemma 11.8.3.](https://stacks.math.columbia.edu/tag/0750), [Stacks Project, Brauer, Lemma 11.8.4.](https://stacks.math.columbia.edu/tag/0751), [Stacks Project, Brauer, Proposition 11.8.5.](https://stacks.math.columbia.edu/tag/0752). It says: “For any finite splitting field k′ for K the degree \[k′ : k\] is divisible by d.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced norms multiply

**Remember:** Split first and take the determinant at the smaller matrix size.

*True by definition.* MSC 16K50 (Brauer groups (algebraic aspects)). arXiv math.RA. Level 3: graduate.

**Definition.** Take a finite-dimensional simple algebra with center equal to its base field. A splitting field turns it into a full matrix algebra by scalar extension. The reduced norm of an element is the determinant of its matrix there.

**Problem.** The reduced norm of a product is the product of the reduced norms.

**How the definition helps.** Over a splitting field, multiplicativity becomes the usual determinant rule, in our own argument. The work is showing that this determinant gives an element of the base field independent of the matrix representation. The intrinsic construction uses the characteristic polynomial of left multiplication. For split matrices of size r, this polynomial is the rth power of the matrix characteristic polynomial. The unique monic rth root therefore recovers the determinant as its constant term times (−1)ʳ.

**Paper or page:** [Constructive basic theory of central simple algebras](https://arxiv.org/abs/2102.12775v2). It says: “The coefficient sᵣ, denoted by Nrd(a), is called the reduced norm of a (over F).”

**Sources:**

- [Constructive basic theory of central simple algebras, Proposition 4.9](https://arxiv.org/abs/2102.12775v2)

### Noncommutative local rings use maximal left ideals, so non-units form an ideal

**Remember:** Local means one maximal left ideal, not one maximal two-sided ideal.

*Rules out counterexamples.* MSC 16L30 (Noncommutative local and semilocal rings, perfect rings), 16N20. arXiv math.RA. Level 3: graduate.

**Definition.** A ring is local if it has exactly one maximal left ideal. Equivalently, it has exactly one maximal right ideal, or its non-units form an ideal.

**Problem.** In a local ring the non-units form a two-sided ideal. This ideal is the Jacobson radical, the intersection of all maximal left ideals. The quotient by it is a division ring.

**How the definition helps.** With the left-ideal definition, one shows that the non-units are exactly the unique maximal left ideal, so they form an ideal. A definition by two-sided ideals would let in the ring of 2 × 2 matrices over a field, whose only maximal ideal is {0}. There the non-units diag(1, 0) and diag(0, 1) add up to the identity, so the non-units do not form an ideal (our own). The real work is to show that the left and the right versions of the definition agree.

**Wikipedia:** [Local ring](https://en.wikipedia.org/wiki/Local_ring). It says: “However, in the non-commutative case, having a unique maximal two-sided ideal is not equivalent to being local.”

**Sources:** none listed. No primary source with a working link was found.

### Semiperfect rings give projective covers

**Remember:** Lift idempotents to lift the projective pieces.

*Rules out counterexamples.* MSC 16L30 (Noncommutative local and semilocal rings, perfect rings), 16D40. arXiv math.RA. Level 3: graduate.

**Definition.** Write J for the Jacobson radical of a ring R, the intersection of its maximal left ideals. Call R semilocal if R/J is a finite product of matrix rings over division rings. A semilocal ring is semiperfect if each idempotent of R/J is the image of an idempotent in R. An idempotent is an element equal to its square.

**Problem.** Every finitely generated left module over a semiperfect ring has a projective cover. This is a surjection from a direct summand of a free module such that no proper submodule still maps onto the target.

**How the definition helps.** Lifting idempotents allows the direct summands over R/J to lift to projective modules over R, in our own explanation. The projective cover theorem turns these lifts into covers. In our own example, invert all integers coprime to six in ℤ. The resulting domain has radical quotient 𝔽₂ × 𝔽₃. The idempotent (1, 0) cannot lift because a domain has only the idempotents zero and one. The corresponding simple module 𝔽₂ has no projective cover.

**Wikipedia:** [Perfect ring](https://en.wikipedia.org/wiki/Perfect_ring). It says: “A semiperfect ring is a ring over which every finitely generated left module has a projective cover.”

**Sources:**

- [Hyman Bass, Finitistic dimension and a homological generalization of semi-primary rings (1960).](https://doi.org/10.1090/s0002-9947-1960-0157984-8)

### Self-injectivity reverses syzygy

**Remember:** Kernels and cokernels reverse each other once projectives disappear.

*Rules out counterexamples.* MSC 16L60 (Quasi-Frobenius rings). arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A projective module is a summand of a free module. An injective module allows maps into it to extend from any submodule to the whole module. A finite-dimensional algebra is self-injective if its regular module is injective. In its stable category of finite-dimensional modules, two maps agree when their difference factors through a projective module.

**Problem.** For a finite-dimensional self-injective algebra, taking the kernel of a projective surjection defines an equivalence of the stable module category with itself. This kernel is called a syzygy.

**How the definition helps.** Self-injectivity makes the projective and injective modules coincide, so embeddings supply an inverse to taking kernels, in our own explanation. Embed a module into an injective module and take the quotient. The stable category theorem proves that the two constructions undo each other there. For our own counterexample, use representations of the arrow 1 → 2. The simple representation at 1 is nonprojective, but its projective cover has projective kernel, which becomes zero in the stable category.

**nLab:** [Frobenius category](https://ncatlab.org/nlab/show/Frobenius+category). It says: “The stable category of a Frobenius category is canonically a triangulated category.”

**Sources:**

- [Dieter Happel, Triangulated Categories in the Representation Theory of Finite Dimensional Algebras](https://doi.org/10.1017/cbo9780511629228)

### Splitting multiplication by the Frobenius coproduct makes special Frobenius algebras separable

**Remember:** The coproduct already is the section that separability asks for.

*True by definition.* MSC 16L60 (Quasi-Frobenius rings), 16D20. arXiv math.RA, math.QA. Level 3: graduate.

**Definition.** A Frobenius algebra A has a coproduct Δ: A → A ⊗ A that is a map of A-bimodules, by the Frobenius laws. Call A special when m ∘ Δ is a nonzero multiple of the identity, where m is multiplication. Call A separable when m has a section that is a map of A-bimodules. The classical definition of separability asks that A ⊗ K be semisimple for every field extension K.

**Problem.** Over a field, every special Frobenius algebra is separable.

**How the definition helps.** With separability defined by a bimodule section, the claim is immediate, since a multiple of Δ is that section (our own). The Frobenius laws say exactly that Δ respects both actions. The work moves into showing that a bimodule section of m is equivalent to semisimplicity after every field extension (our own summary). The special condition is a real restriction: for A = k\[x\]/(x²), m ∘ Δ is multiplication by 2x, which is never invertible (our own).

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

**Definition.** A nonzero ring R is a prime ring if, whenever arb = 0 for all r in R, a = 0 or b = 0. Equivalently, the zero ideal is a prime ideal in the noncommutative sense.

**Problem.** Every simple ring, every primitive ring and every matrix ring over an integral domain is prime. A commutative ring is prime exactly when it is an integral domain.

**How the definition helps.** Putting all of R between a and b turns the condition into a statement about two-sided ideals, not single products. The naive condition, that ab = 0 implies a = 0 or b = 0, would exclude the 2 × 2 matrices over a field, which are simple but have zero divisors (our own). For commutative rings, aRb = 0 is the same as ab = 0.

**Wikipedia:** [Prime ring](https://en.wikipedia.org/wiki/Prime_ring). It says: “This definition can be regarded as a simultaneous generalization of both integral domains and simple rings.”

**Sources:** none listed. No primary source with a working link was found.

### With a 1, every Artinian ring is automatically Noetherian

**Remember:** For rings with 1, the descending chain condition is the stronger one.

*Rules out counterexamples.* MSC 16P20 (Artinian rings and modules (associative rings and algebras)), 16P40. arXiv math.RA. Level 3: graduate.

**Definition.** A ring is right Artinian if every decreasing chain of right ideals becomes constant, and right Noetherian if every increasing chain does. The Hopkins–Levitzki theorem is stated for rings with 1.

**Problem.** Hopkins–Levitzki theorem: a right Artinian ring is right Noetherian. Over such a ring, a module is Artinian exactly when it is Noetherian, exactly when it has finite length.

**How the definition helps.** With a 1, an Artinian ring has a Jacobson radical J with Jⁿ = 0 for some n, and R/J is semisimple. So R has finitely many semisimple layers Jⁱ/Jⁱ⁺¹, and for semisimple modules each chain condition implies the other (our own). Without the 1 this fails: the Prüfer p-group with zero multiplication is an Artinian rng that is not Noetherian (our own).

**Wikipedia:** [Hopkins–Levitzki theorem](https://en.wikipedia.org/wiki/Hopkins%E2%80%93Levitzki_theorem), [Artinian ring](https://en.wikipedia.org/wiki/Artinian_ring), [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “Since it is known that right Artinian rings are semiprimary, a direct corollary of the theorem is: a right Artinian ring is also right Noetherian.”

**Sources:**

- [C. Hopkins, Rings with minimal condition for left ideals, Annals of Mathematics 40 (1939) 712–730](https://doi.org/10.2307/1968951)
- [J. Levitzki, On rings which satisfy the minimum condition for the right-hand ideals, Compositio Mathematica 7 (1940) 214–222](https://www.numdam.org/item/CM_1940__7__214_0/)

### Semiprime Goldie rings have semisimple fractions

**Remember:** Semiprimeness excludes the square-zero ideal that survives in the dual numbers.

*Rules out counterexamples.* MSC 16P60 (Chain conditions on annihilators and summands: Goldie-type conditions), 16N60. arXiv math.RA. Level 3: graduate.

**Definition.** A right Goldie ring has no infinite direct sum of nonzero right ideals. Every ascending chain of right annihilators must stabilize. The right annihilator of a set S consists of elements r such that sr = 0 for every s in S. A semiprime ring has no nonzero two-sided ideal whose square is zero.

**Problem.** A semiprime right Goldie ring has a semisimple Artinian right ring of fractions. Such a ring of fractions is a finite product of matrix rings over division rings.

**How the definition helps.** Semiprimeness rules out the square-zero ideal that spoils the conclusion in our own example. In the dual numbers ℚ\[ε\]/(ε²), every element has the form a + bε with rational coefficients. The ring is right Goldie because it is finite dimensional. Every element that is not a zero divisor already has an inverse, so taking fractions leaves the ideal (ε) intact. Goldie’s theorem establishes the fraction ring structure when both hypotheses hold.

**Wikipedia:** [Goldie's theorem](https://en.wikipedia.org/wiki/Goldie%27s_theorem). It says: “the semiprime right Goldie rings are precisely those that have a semisimple Artinian right classical ring of quotients”

**Paper or page:** [Pointed Hopf algebras, the Dixmier-Moeglin Equivalence and Noetherian group algebras](https://arxiv.org/abs/2507.23730v2). It says: “R is semiprime right Goldie.”

**Sources:**

- [Alfred Goldie, Semi-Prime Rings with Maximum Condition (1960).](https://doi.org/10.1112/plms/s3-10.1.201)

### Defining the symmetric algebra as free commutative gives its tensor-algebra presentation

**Remember:** To make the free algebra commutative, keep the generators and kill the commutators.

*True by definition. Confidence: medium.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 15A72. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** Define the symmetric algebra of a module M as the free commutative algebra on M. Each linear map from M into a commutative algebra extends uniquely to an algebra map. The tensor algebra is the free associative algebra on M.

**Problem.** Over any commutative ring, the symmetric algebra is the quotient of the tensor algebra by the ideal generated by all commutators ab − ba.

**How the definition helps.** With both algebras defined as free objects, the claim follows by comparing their universal properties. Any algebra map from the tensor algebra into a commutative algebra kills all commutators. So it factors uniquely through the quotient, which therefore has the universal property of the free commutative algebra. The nLab defines the symmetric algebra in this way, and the argument is our own. The real work is in proving that the sum of tensor powers is the free associative algebra.

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra S V of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Tensor algebras defined as free algebras commute with localization

**Remember:** Freely adding products commutes with changing the scalar ring.

*True by definition.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 13B30. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** The tensor algebra T(M) of a module M is the free associative algebra on M. Each linear map from M into an algebra extends uniquely to an algebra map. A construction takes the sum of all tensor powers of M, with concatenation as product.

**Problem.** Let S be a multiplicative subset of a commutative ring R; localizing at S makes its elements invertible. Then the localization of T(M) at S is the tensor algebra of the localized module S⁻¹M over S⁻¹R.

**How the definition helps.** Both sides are free constructions, so they agree once they classify the same maps. In our own argument, algebra maps from either side into an S⁻¹R-algebra B match R-linear maps from M into B. This holds because localization is itself a left adjoint. The Stacks Project states the result, and the same for symmetric and exterior algebras. The real work is in proving that the sum of tensor powers is free; this account is our own.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.13.6](https://stacks.math.columbia.edu/tag/0C6F). It says: “Then S⁻¹T<sub>R</sub>(M) = T<sub>S⁻¹R</sub>(S⁻¹M) for any R-module M.”

**Sources:**

- [Stacks Project, Algebra, Lemma 10.13.6](https://stacks.math.columbia.edu/tag/0C6F)

### Universal properties make free rings into monoid rings of words

**Remember:** Extend an assignment to words first, then extend it linearly.

*True by definition.* MSC 16S10 (Associative rings determined by universal properties (free algebras, coproducts, adjunction of inverses, etc.)), 20M25. arXiv math.RA. Level 3: graduate.

**Definition.** Take rings and ring homomorphisms with identity. The free ring on X has a map from X through which every assignment in a ring extends uniquely to a ring homomorphism. The monoid ring ℤ\[M\] consists of finite integer combinations of elements of M. Its product extends the monoid product by linearity.

**Problem.** The free ring on X is the monoid ring of all finite words in X, with multiplication given by joining words.

**How the definition helps.** The universal properties make the free ring a two-step construction, using words first and then integer combinations. In our own argument, an assignment of X in a ring extends uniquely to a multiplicative map from words, including the empty word. It then extends uniquely by linearity to a ring homomorphism. This avoids starting with expressions modulo all ring identities. The work moves into checking that multiplication on a monoid ring is associative and that linear extension preserves it.

**Wikipedia:** [Free algebra](https://en.wikipedia.org/wiki/Free_algebra). It says: “The non-commutative polynomial ring may be identified with the monoid ring over R of the free monoid of all finite words in the Xᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Group algebras as left adjoints send free products to algebra coproducts

**Remember:** An invertible group generator must map to an invertible algebra element.

*True by definition.* MSC 16S34 (Group rings), 16S10. arXiv math.RA, math.GR. Level 3: graduate.

**Definition.** The group algebra R\[G\] has a universal property. Algebra maps from R\[G\] to an algebra B match group maps from G to the units of B. A construction uses finite R-linear combinations of elements of G.

**Problem.** The group algebra of a free product of groups is the coproduct of their group algebras, among unital associative R-algebras. The coproduct receives one map from each factor and is universal with this property.

**How the definition helps.** The universal property makes the group algebra a left adjoint, so it preserves coproducts. The nLab states the adjunction between the group algebra and the group of units. In our own step, a map out of either side is a pair of group maps into the units of the target. A direct proof would compare bases of the two algebras by hand. The real work is in proving the universal property of the linear combinations.

**nLab:** [group of units](https://ncatlab.org/nlab/show/group+of+units). It says: “where R\[−\] forms the group algebra over R”

**Sources:** none listed. No primary source with a working link was found.

### The Frobenius dual makes finite group algebras self-injective

**Remember:** The Frobenius isomorphism identifies the group algebra with an injective module.

*True by definition.* MSC 16S34 (Group rings), 16D50, 16L60. arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** A finite-dimensional unital algebra A over k is Frobenius if A is isomorphic to its vector-space dual as a right A-module. The dual action is given by (f·a)(b) = f(ab). The bilinear-form definition instead asks for a nondegenerate form B with B(ab,c) = B(a,bc).

**Problem.** For a finite group G and any field k, the group algebra k\[G\] is injective as a right module over itself. Here injectivity means that maps from a submodule extend to the whole module. Every finitely generated projective right k\[G\]-module is therefore injective.

**How the definition helps.** The dual definition makes self-injectivity follow from injectivity of the vector-space dual of A. Maps of right A-modules into that dual correspond to k-linear functionals, which extend from any subspace (our own). For k\[G\], take B(a,b) to be the coefficient of 1 in ab (our own). Each basis element pairs with its inverse, so a ↦ B(a,−) identifies the algebra with its dual (our own). The remaining step uses that a finitely generated projective module is a direct summand of a finite free module (our own).

**Wikipedia:** [Frobenius algebra](https://en.wikipedia.org/wiki/Frobenius_algebra). It says: “a finite-dimensional, unital, associative algebra is Frobenius if and only if the injective right A-module Homₖ(A,k) is isomorphic to the right regular representation of A.”

**Sources:** none listed. No primary source with a working link was found.

### Linear resolutions invert Hilbert series

**Remember:** Matching degrees turn the resolution into a signed inverse series.

*True by definition.* MSC 16S37 (Quadratic and Koszul algebras). arXiv math.RA, math.RT. Level 3: graduate.

**Definition.** A connected graded algebra A has nonnegative degrees and consists of scalars in degree zero. Killing all positive degrees gives the base field k as an A-module. The algebra is Koszul if k has a graded free resolution whose term in position n has all its generators in degree n. A resolution is an exact sequence of free modules ending in k.

**Problem.** Let A be a Koszul algebra with finite-dimensional graded pieces, and let B be its quadratic dual. Then their Hilbert series, which record dimensions by degree, satisfy Hₐ(t)Hᵦ(−t) = 1.

**How the definition helps.** The matching degrees turn exactness into the inverse-series identity, in our own calculation. The quadratic description builds a complex from the degree-one generators and degree-two relations. Its term in position n has as many free generators as the dimension of degree n in B. The Koszul criterion identifies exactness of this complex with existence of the linear resolution. Taking alternating dimensions in each degree now gives the formula.

**nLab:** [Koszul algebra](https://ncatlab.org/nlab/show/Koszul+algebra). It says: “has a projective resolution where the ith term is generated in grade i.”

**Sources:**

- [Stewart Priddy, Koszul resolutions](https://doi.org/10.1090/s0002-9947-1970-0265437-8)

### Adjoining an identity makes every rng an ideal of a ring

**Remember:** Add a formal 1 to any rng, and it becomes an ideal.

*True by definition.* MSC 16S70 (Extensions of associative rings by ideals), 16D25. arXiv math.RA. Level 3: graduate.

**Definition.** The Dorroh extension of a rng R is the set ℤ × R, with addition by components. The product is (n₁, r₁)(n₂, r₂) = (n₁n₂, n₁r₂ + n₂r₁ + r₁r₂). Its identity is (1, 0), and R sits in it as the ideal of pairs (0, r).

**Problem.** Every rng is an ideal in a ring with 1, namely its Dorroh extension.

**How the definition helps.** The theorem is immediate, because the product formula makes the pairs (0, r) an ideal that is a copy of R. The extension has a universal property: rng maps from R to a ring S match ring maps from the extension to S. So a module over a rng R is the same as a unital module over its Dorroh extension, and module theory over rings applies (our own).

**Wikipedia:** [Rng (algebra)](https://en.wikipedia.org/wiki/Rng_%28algebra%29). It says: “Every rng is an ideal in some ring, and every ideal of a ring is a rng.”

**Sources:**

- [J. L. Dorroh, Concerning adjunctions to algebras, Bulletin of the American Mathematical Society 38 (1932) 85–88](https://doi.org/10.1090/S0002-9904-1932-05333-2)

### The Ore condition makes every element of a localization a single fraction

**Remember:** The Ore condition moves a denominator from right to left: r s⁻¹ = s'⁻¹ r'.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S85 (Associative rings of fractions and localizations). arXiv math.RA. Level 3: graduate.

**Definition.** Let S be a multiplicative subset of a ring R. S is left Ore when it meets two conditions. First, for all r ∈ R and s ∈ S there are r' ∈ R and s' ∈ S with s'r = r's. Second, if ns = ms for some s ∈ S, then s'n = s'm for some s' ∈ S.

**Problem.** If S is a left Ore set in a ring R, the left localization S⁻¹R exists, and every element of it is a single fraction s⁻¹r.

**How the definition helps.** The Ore condition is exactly the rule that turns a right fraction r s⁻¹ into a left fraction s'⁻¹ r', so every element reduces to one fraction. In a general noncommutative localization, elements are long words in elements of R and inverses of elements of S. With the Ore condition, S⁻¹R is a set of pairs (s, r) modulo an equivalence relation. Checking the ring axioms is still long, even commutativity of addition.

**nLab:** [Ore set](https://ncatlab.org/nlab/show/Ore+set), [Ore localization](https://ncatlab.org/nlab/show/Ore+localization). It says: “For every left Ore set S⊂R in a monoid or ring R, the left Ore localization exists and it can be defined as follows. As a set, S⁻¹R := S×R/∼”

**Sources:**

- [Øystein Ore, Linear equations in non-commutative fields, Annals of Mathematics 32 (1931) 463–477](https://doi.org/10.2307/1968245)

### Torsion classes form lattices

**Remember:** Intersection keeps the closure rules, and generated closure gives joins.

*True by definition.* MSC 16S90 (Torsion theories; radicals on module categories (associative algebraic aspects)). arXiv math.RT, math.RA. Level 3: graduate.

**Definition.** Consider finite-dimensional modules over a finite-dimensional algebra. A torsion class contains zero and contains every quotient of each member. It also contains any module having a submodule and corresponding quotient both in the class. Equivalently, it forms the torsion half of a torsion pair.

**Problem.** Ordered by inclusion, the torsion classes form a complete lattice. Every family has a greatest lower bound and a least upper bound.

**How the definition helps.** The two closure rules survive arbitrary intersections, giving the greatest lower bound directly. In our own argument, intersect all torsion classes containing the given family to obtain its least upper bound. The equivalence with torsion pairs uses each module’s largest submodule in the class. Its quotient receives only zero maps from members of the class.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Then the intersection of arbitrarily many torsion classes is a torsion class.”

**Sources:** none listed. No primary source with a working link was found.

### Convolution-inverse antipodes exist in connected graded bialgebras by geometric series

**Remember:** Invert the identity by a geometric series in positive degrees.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 57T05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** A bialgebra is an algebra with a compatible comultiplication Δ, which splits elements into tensors, and a counit ε. Convolution multiplies linear maps f and g on it by splitting the input with Δ, applying f ⊗ g, and multiplying the results. Its unit is η ∘ ε, with η the unit map. Define the antipode as the convolution inverse of the identity map, rather than building it degree by degree from a cancellation equation.

**Problem.** Let H be a bialgebra over a field, graded by the nonnegative integers, whose degree-zero part is the field. Then H has an antipode, so H is a Hopf algebra.

**How the definition helps.** The convolution definition makes existence a geometric series. Write π = η ∘ ε − id, which vanishes in degree zero; then the sum of the convolution powers πᵏ for k ≥ 0 inverts the identity (our own). The work moves into showing that this sum is finite in each degree n. The k-fold power splits a degree-n element into k pieces, so for k &gt; n some piece has degree zero and π kills it (our own).

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “it is common to define Hopf algebras without mentioning the antipode, since in many topological cases of interest it exists automatically.”

**Sources:** none listed. No primary source with a working link was found.

### Convolution-inverse antipodes make bialgebra maps commute with antipodes

**Remember:** Both composites invert f, so they are equal.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** A bialgebra is an algebra with a compatible comultiplication Δ, which splits elements into tensors, and a counit ε. For bialgebras H and K, convolution multiplies linear maps H → K. It splits the input with Δ in H and multiplies the outputs in K, and its unit is η ∘ ε. An antipode is the convolution inverse of the identity, not a pair of elementwise cancellation laws.

**Problem.** Let f be a bialgebra map between Hopf algebras H and K with antipodes S and S′. Then f ∘ S = S′ ∘ f.

**How the definition helps.** With the convolution definition, the claim reduces to the uniqueness of inverses. Both f ∘ S and S′ ∘ f are convolution inverses of f among the linear maps H → K. Inverses for an associative product with a unit are unique, so the two maps agree. The work moves into two short checks. Because f is an algebra map, (f ∘ S) ⋆ f = f ∘ (S ⋆ id). Because f is a coalgebra map, f ⋆ (S′ ∘ f) = (id ⋆ S′) ∘ f. This argument is our own, and Wikipedia gives the convolution algebra and its unit.

**Wikipedia:** [Hopf algebra](https://en.wikipedia.org/wiki/Hopf_algebra). It says: “The identity of the convolution algebra is η ∘ ε.”

**Sources:** none listed. No primary source with a working link was found.

### Defining quasitriangular structures as module braidings makes module categories braided

**Remember:** A coherent swap of modules already is a braiding.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 18M15. arXiv math.QA, math.CT. Level 3: graduate.

**Definition.** A braiding on a monoidal category is a natural, coherent family of isomorphisms V ⊗ W → W ⊗ V. One may define a quasitriangular structure on a Hopf algebra H as a braiding on the category of left H-modules. The element-based definition instead gives an invertible element R of H ⊗ H that satisfies three identities.

**Problem.** For a quasitriangular Hopf algebra, the category of left modules is braided.

**How the definition helps.** Under the module definition the theorem is the definition itself. The work moves into a reconstruction theorem that matches the two definitions (our own explanation). Given a braiding c, let R be the flip of c(1 ⊗ 1), computed on two copies of the regular module (our own). Naturality forces c to act on all modules through R, and the hexagon laws become the identities for R (our own). The quoted proposition gives the converse formula, which applies R and then swaps the factors.

**Paper or page:** [Representation theory of non-factorizable ribbon Hopf algebras](https://arxiv.org/abs/2510.24263v1). It says: “Then the category H-mod is braided monoidal.”

**Sources:**

- [Representation theory of non-factorizable ribbon Hopf algebras (arXiv 2510.24263v1)](https://arxiv.org/abs/2510.24263v1)

### Defining the antipode as a convolution inverse makes it unique

**Remember:** An antipode is an inverse, and inverses are unique.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** A bialgebra H is an algebra with a compatible comultiplication Δ, which splits elements into tensors, and a counit ε. Convolution f ⋆ g of maps H → H splits an input with Δ, applies f and g, and multiplies the results. Its unit is η ∘ ε, the counit followed by the unit map η of the algebra. Define the antipode S as the convolution inverse of the identity map, instead of writing two cancellation laws on each element.

**Problem.** A bialgebra has at most one antipode.

**How the definition helps.** The convolution definition turns the claim into the uniqueness of inverses in a monoid. If S and S′ both invert the identity, then S = S ⋆ (id ⋆ S′) = (S ⋆ id) ⋆ S′ = S′. The work moves into proving that convolution is associative with unit η ∘ ε. Associativity uses coassociativity of Δ and associativity of the multiplication. The nLab makes the comparison with monoids, and the details are our own.

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra). It says: “If an antipode exists then it is unique, just the way that if inverses exist in a monoid then they are unique.”

**Sources:** none listed. No primary source with a working link was found.

### Flat Hopf algebroids have an abelian category of comodules

**Remember:** Flatness lets the coaction pass through kernels.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications), 18E10, 55T15. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** A commutative Hopf algebroid Γ over a ring A is a pair of commutative rings (A, Γ) that represents a functor from rings to groupoids. A comodule over Γ is an A-module N with a coaction N → Γ ⊗ N that satisfies the dual of the axioms for an action. Γ is flat if its left and right unit maps A → Γ make Γ a flat A-module, that is, tensoring with Γ preserves exact sequences.

**Problem.** If Γ is flat, the comodules over Γ form an abelian category with enough injectives, and the forgetful functor to A-modules is exact. So Ext of comodules, and with it the Adams spectral sequence, is defined.

**How the definition helps.** Flatness makes kernels of comodule maps into comodules again. The kernel of a comodule map f in A-modules needs a coaction into Γ ⊗ ker(f), and this exists when Γ ⊗ ker(f) is the kernel of Γ ⊗ f, which is what flatness gives. Without flatness, the kernel of a comodule map may not carry a comodule structure (our own). Enough injectives then come from cofree comodules.

**nLab:** [commutative Hopf algebroid](https://ncatlab.org/nlab/show/commutative+Hopf+algebroid). It says: “This means that the A-module ker(f) uniquely inherits the structure of a Γ-comodule such as to make ker(f) → N₁ a comodule homomorphism.”

**Sources:**

- [Douglas C. Ravenel, Complex Cobordism and Stable Homotopy Groups of Spheres, 2nd edition, AMS Chelsea (2004), Appendix A1](https://doi.org/10.1090/chel/347)

### Hopf ideals let all operations descend

**Remember:** Every structure map must pass through the quotient.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** A Hopf algebra has a coproduct Δ into its tensor square, a counit to scalars, and an antipode playing the role of inversion. A Hopf ideal I is a two-sided ideal killed by the counit and preserved by the antipode. Each Δ(x) for x in I must be a sum of tensors having at least one factor in I.

**Problem.** Quotienting a Hopf algebra by a Hopf ideal gives a Hopf algebra with the induced operations.

**How the definition helps.** The extra conditions make every operation descend, so the identities descend, in our own explanation. Our own counterexample is the ideal generated by g − 2 in the rational group algebra of an infinite cyclic group. The counit sends g to 1, so it cannot factor through that quotient. The work in applying the theorem goes into checking the coideal and antipode conditions, in our own explanation.

**nLab:** [quotient bialgebra](https://ncatlab.org/nlab/show/quotient+bialgebra). It says: “A Hopf ideal is a bialgebra ideal which is invariant under the antipode map.”

**Sources:** none listed. No primary source with a working link was found.

### Normal Hopf subalgebras give quotients

**Remember:** Conjugation stability turns a one-sided ideal into a quotient.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** In a Hopf algebra H the coproduct writes Δ(h) as a sum of tensors a ⊗ b, and the antipode S generalizes inversion. A Hopf subalgebra K is normal if both adjoint actions preserve it. For h in H and x in K, this requires both sums ∑ axS(b) and ∑ S(a)xb to belong to K.

**Problem.** For normal K, the kernel of its counit, the map to scalars, generates the same left and right ideal in H. The quotient by this ideal inherits all the Hopf algebra operations.

**How the definition helps.** The two adjoint actions let generators pass from one side of the ideal to the other, in our own explanation. The normality theorem identifies the common ideal as a Hopf ideal, so all operations descend. In our own counterexample, take the rational group algebra of the permutation group on three letters. Use the subalgebra spanned by the subgroup generated by (12). The left ideal generated by (12) − 1 identifies permutations in the same left coset. Right multiplication fails to preserve this identification because the subgroup is not normal.

**Paper or page:** [Locally Frobenius algebras and Hopf algebras](https://arxiv.org/abs/2212.00437v3). It says: “Then HK⁺ = K⁺H and this is a Hopf ideal in H”

**Sources:** none listed. No primary source with a working link was found.

### The Hopf algebra axioms are what make modules rigid monoidal

**Remember:** Comultiplication gives tensor products of modules; the antipode gives their duals.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 18M05. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** A Hopf algebra is an algebra H with three more maps: a comultiplication Δ : H → H ⊗ H, a counit and an antipode S. These maps satisfy compatibility axioms. The comultiplication lets H act on tensor products of modules. The antipode lets H act on dual modules.

**Problem.** For a Hopf algebra H, the finite-dimensional modules form a rigid monoidal category, and the forgetful functor to vector spaces is monoidal. Conversely, by Tannaka reconstruction, every such structure on the modules of an algebra comes from a Hopf algebra structure.

**How the definition helps.** Each part of the Hopf structure gives one part of the monoidal structure on modules. Δ gives the tensor product, the counit gives the unit object, and S gives duals. The converse is the Tannaka reconstruction theorem, and it carries the real content (Ulbrich 1990).

**nLab:** [Hopf algebra](https://ncatlab.org/nlab/show/Hopf+algebra), [Tannaka duality](https://ncatlab.org/nlab/show/Tannaka+duality). It says: “a Hopf algebra structure on an associative algebra is precisely the structure such as to make its category of modules into a rigid monoidal category equipped with a fiber functor”

**Sources:**

- [K.-H. Ulbrich, On Hopf algebras and rigid monoidal categories, Israel J. Math. 72 (1990) 252–256](https://doi.org/10.1007/BF02764622)

### Triangular swaps cancel

**Remember:** A second swap must undo the first one.

*Rules out counterexamples.* MSC 16T05 (Hopf algebras and their applications). arXiv math.RA. Level 3: graduate.

**Definition.** A quasitriangular Hopf algebra has an invertible tensor R that gives consistent swaps on tensor products of modules. It is triangular if exchanging the two tensor factors of R gives R⁻¹.

**Problem.** Swapping two modules over a triangular Hopf algebra and then swapping them back gives the identity map. This property makes the module braiding symmetric.

**How the definition helps.** The second swap uses the flipped tensor, so triangularity makes its action cancel the first, in our own argument. The correspondence between quasitriangular tensors and coherent swaps supplies the module braiding. For our own counterexample, use complex representations of the cyclic group of order three. Label character spaces by integers modulo three and choose a primitive cube root ω. On spaces labeled a and b, multiply the ordinary swap by ω raised to the power ab. Bilinearity of ab gives coherent swaps, but two swaps on labels 1 and 1 multiply by ω².

**nLab:** [triangular Hopf algebra](https://ncatlab.org/nlab/show/triangular+Hopf+algebra). It says: “a braided monoidal category/symmetric monoidal category”

**Sources:** none listed. No primary source with a working link was found.

### Writing Hopf axioms as maps makes the finite dual Hopf

**Remember:** Reverse every arrow, and the Hopf axioms come back.

*True by definition.* MSC 16T05 (Hopf algebras and their applications). arXiv math.QA. Level 3: graduate.

**Definition.** Write every Hopf algebra axiom as an equation between linear maps built from the multiplication, unit, comultiplication, counit and antipode. Reverse all arrows in an axiom and swap multiplication with comultiplication and unit with counit. The result is again one of the axioms, so the list of axioms is self-dual. An elementwise or basis presentation hides this symmetry.

**Problem.** Let H be a finite-dimensional Hopf algebra. Its linear dual H\* is a Hopf algebra whose operations are the transposes of the operations of H.

**How the definition helps.** The map-based definition makes each axiom for H\* the transpose of an axiom for H. Transposition reverses arrows, turns multiplication into comultiplication, and turns the unit into the counit. The transposed antipode satisfies the transposed antipode axiom. The work moves into identifying (H ⊗ H)\* with H\* ⊗ H\*. That identification holds when H is finite-dimensional. Wikipedia states the self-duality, and the details are our own.

**Wikipedia:** [Hopf algebra](https://en.wikipedia.org/wiki/Hopf_algebra). It says: “The definition of Hopf algebra is self-dual”

**Sources:** none listed. No primary source with a working link was found.

### Building the finite dual from finite quotients makes it a coalgebra

**Remember:** Take duals of finite quotients first, then take the union.

*True by definition.* MSC 16T15 (Coalgebras and comodules; corings), 16T05. arXiv math.QA. Level 3: graduate.

**Definition.** Let A be an algebra over a field. The finite dual A° consists of the linear functionals on A that vanish on some two-sided ideal I with A/I finite-dimensional. Equivalently, A° is the union of the duals (A/I)\* inside the full dual A\*. The usual test instead asks that the transposed multiplication send a functional into A\* ⊗ A\*.

**Problem.** For an associative unital algebra A over a field, the finite dual A° is a coalgebra. Its comultiplication and counit are the transposes of the multiplication and the unit.

**How the definition helps.** The union definition makes A° a union of coalgebras. Each A/I is a finite-dimensional algebra, so its dual is a coalgebra (our own). If J ⊆ I, the surjection A/J → A/I gives an inclusion of coalgebras (A/I)\* ⊆ (A/J)\* (our own). Two such ideals contain their intersection, which is again such an ideal. So the union is directed, and a directed union of subcoalgebras is a coalgebra (our own). The work moves into the equivalence with the usual test, which the nLab credits to Sweedler.

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

**Definition.** A semiring, or rig, is like a ring but without required negatives. Its ring completion is the free ring on it, the left adjoint of the forgetful functor from rings. The nLab also builds it from formal differences, with multiplication extended by distributivity.

**Problem.** Ring completion sends a pushout of semirings to the pushout of their ring completions. A pushout glues two objects along a common part.

**How the definition helps.** As a left adjoint, ring completion preserves all colimits, so pushouts need no separate proof. The nLab states that ring completion is this left adjoint. Our own point is that, with formal differences alone, one would compute pushouts of rings by hand. The real work is in showing that formal differences give a ring with the universal property. The nLab notes that the map into the completion need not be injective.

**nLab:** [rig](https://ncatlab.org/nlab/show/rig). It says: “this gives the left adjoint F: Rig → Ring to the forgetful functor U: Ring → Rig.”

**Sources:** none listed. No primary source with a working link was found.

### Over t-unital rings, t-unital modules form an abelian category

**Remember:** If R ⊗ R is R, R behaves as if it had a one.

*Makes the theorem clean to state or prove.* MSC 16D10 (General module theory in associative algebras), 16D90. arXiv math.RA, math.CT. Level 4: research.

**Definition.** A ring R without identity is t-unital if the natural map from R ⊗ R, over R, to R is an isomorphism. A left R-module P is t-unital if R ⊗ P → P, over R, is an isomorphism. It is c-unital if P → Hom over R from R to P is an isomorphism. These conditions replace the usual axiom that 1 acts as the identity.

**Problem.** Over a t-unital ring, the categories of t-unital and of c-unital left modules are abelian and naturally equivalent to each other.

**How the definition helps.** The t-unital condition asks that tensoring with R does nothing, as a unit would, so R is the unit for the tensor product of t-unital bimodules (our own reading). Arbitrary modules are too many, because R may act by zero. But t-unital modules need not be closed under kernels inside all modules, so the abelian structure is not the inherited one, and this is where the work lies.

**Paper or page:** [Tensor-Hom formalism for modules over nonunital rings](https://arxiv.org/abs/2308.16090v4). It says: “Nevertheless, the categories of t-unital and c-unital left R-modules are abelian and naturally equivalent to each other”

**Sources:**

- [Leonid Positselski, Tensor-Hom formalism for modules over nonunital rings, arXiv:2308.16090 (2023)](https://arxiv.org/abs/2308.16090v4)

### The defect, as maps into the forgetful functor, is adjoint to Yoneda

**Remember:** Test F against the forgetful functor, which one free generator represents.

*True by definition.* MSC 16D90 (Module categories in associative algebras), 18A25. arXiv math.RT, math.CT. Level 4: research.

**Definition.** Let Λ be a ring and F an additive functor from left Λ-modules to abelian groups. The defect w(F) is the set of natural transformations from F to the forgetful functor, which sends a module to its underlying group. The forgetful functor equals Hom(Λ, −), so the action of Λ on itself makes w(F) a Λ-module.

**Problem.** For every such F and every left Λ-module A, natural transformations from F to Hom(A, −) correspond to Λ-linear maps from A to w(F). The correspondence is natural in F and in A.

**How the definition helps.** Because w(F) is built from maps into Hom(Λ, −), the adjunction reduces to the Yoneda lemma. In our own explanation, an element a of A is a map Λ → A, which turns Hom(A, −) into Hom(Λ, −). So a transformation from F to Hom(A, −) gives an element of w(F) for each a, and this rule is Λ-linear. The paper's main result, which identifies a defect with Bass torsion, needs more work.

**Paper or page:** [The defect, the Malgrange functor, and linear control systems](https://arxiv.org/abs/2403.13520v1). It says: “The defect and the contravariant Yoneda embedding form a right adjoint pair”

**Sources:**

- [Alex Martsinkovsky, The defect, the Malgrange functor, and linear control systems, arXiv:2403.13520 (2024)](https://arxiv.org/abs/2403.13520v1)

### Averaging computes reflexive homology

**Remember:** When two is invertible, reflection averaging kills the higher derived coinvariants.

*True by definition.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 19D55. arXiv math.AT. Level 4: research.

**Definition.** A reflexive module is a simplicial module with compatible reversals of the vertex orders. Its associated Hochschild chain complex has a reflection that includes the signs for reversing order. Model reflexive homology by derived coinvariants, which impose the reflection relation while retaining its higher homological information.

**Problem.** Over a commutative ring in which two is invertible, reflexive homology equals the coinvariants of Hochschild homology. Coinvariants identify every class with its reflection.

**How the definition helps.** Averaging a class with its reflection identifies coinvariants with the image of an averaging projection (our own). Taking this image preserves exact sequences, so ordinary coinvariants compute derived coinvariants and commute with homology (our own). Graves identifies the derived coinvariant model with the original definition using functors on the reflexive category.

**Paper or page:** [Reflexive homology](https://arxiv.org/abs/2204.07985v3). It says: “The reflexive homology HR⋆(F) is naturally isomorphic to the hyperhomology of the group C₂ with coefficients in the Hochschild complex C⋆(F).”

**Sources:**

- [Daniel Graves, Reflexive homology](https://arxiv.org/abs/2204.07985v3)

### Circle gluing computes Hochschild chains

**Remember:** Close the line into a circle to add the cyclic face.

*Makes the theorem clean to state or prove.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 81T45. arXiv math-ph. Level 4: research.

**Definition.** Let A be a unital associative algebra in chain complexes over a field, with differential obeying the product rule. Assign A to each oriented interval and its tensor powers to disjoint unions of intervals. Insert smaller intervals by multiplying in their spatial order. Extend to the circle by derived gluing over covers containing every finite subset in one member, retaining the chain maps and their homotopies.

**Problem.** The resulting circle complex is quasi-isomorphic to the Hochschild chain complex of A, meaning the comparison induces isomorphisms on homology.

**How the definition helps.** Gluing on the circle puts the last interval next to the first, explaining the wraparound multiplication in the Hochschild differential (our own). The other terms multiply successive neighbors, with the signs from the grading (our own). The proof identifies the gluing complex with the cyclic bar construction, whose degree-n terms have n + 1 tensor factors (our own).

**Paper or page:** [Holomorphic field theories and higher algebra](https://arxiv.org/abs/2508.07443v1). It says: “extends to a factorization algebra on S¹”

**Sources:**

- [Owen Gwilliam, Brian R. Williams, Holomorphic field theories and higher algebra](https://arxiv.org/abs/2508.07443v1)

### Dihedral homology retains loop reflections

**Remember:** After taking rotation orbits, the quotient group still acts by reflection.

*Makes the theorem clean to state or prove.* MSC 16E40 ((Co)homology of rings and associative algebras (e.g., Hochschild, cyclic, dihedral, etc.)), 55P35. arXiv math.AT. Level 4: research.

**Definition.** A dihedral chain model keeps both rotations of cyclic lists and reflections reversing their order. An algebra involution reverses products and supplies the reflection on its lists. Negative dihedral homology uses homotopy fixed points, which retain the coherent identifications for both symmetries.

**Problem.** Let X be simply connected, with homology finite-dimensional in each degree over a field k. Give its singular cochains the signed involution that reverses simplex vertices. Their negative dihedral homology computes the cohomology of the homotopy quotient of free loops by the orthogonal group O(2).

**How the definition helps.** Keeping reflections makes the model record every symmetry of the circle that parametrizes a loop (our own). Rotations form a normal subgroup of O(2), and the quotient acts by reflection (our own). Taking homotopy orbits therefore accounts for both symmetries, even on loops with stabilizers (our own). Ungheretti proves that the dihedral cochain model agrees with free-loop cochains with these actions (our own).

**nLab:** [dihedral homology](https://ncatlab.org/nlab/show/dihedral+homology). It says: “so dihedral homology is the cohomology of free loop spaces modulo the O(2)-action on loops”

**Sources:**

- [Massimiliano Ungheretti, Free loop spaces and dihedral homology](https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd16mu.pdf)

### Green sequences filter modules

**Remember:** Each jump adds the next kind of filtration factor.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings). arXiv math.RT, math.RA. Level 4: research.

**Definition.** Work with finite-dimensional modules over a finite-dimensional algebra. A torsion class contains zero and is closed under quotients and extensions. A maximal green sequence is a finite increasing chain from the zero torsion class to all modules. No torsion class lies strictly between consecutive terms.

**Problem.** Fix a maximal green sequence and label each step by its brick, a module whose nonzero endomorphisms are invertible. Every nonzero module has a filtration whose successive quotients each have a filtration by copies of one step’s brick, in strictly increasing step order. This filtration is unique up to isomorphism.

**How the definition helps.** The chain determines the cuts by taking the largest submodule in each torsion class, in our own explanation. Delete repeated submodules to get the filtration. The brick labeling theorem identifies the factors at each remaining step as successive extensions of copies of its brick.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Moreover, this filtration is unique up-to-isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Semibricks give simple objects

**Remember:** Choose simple pieces that have no maps between them.

*Makes the theorem clean to state or prove.* MSC 16G10 (Representations of associative Artinian rings). arXiv math.RT, math.RA. Level 4: research.

**Definition.** Consider finite-dimensional modules over a finite-dimensional algebra. A brick is a nonzero module whose nonzero endomorphisms are all invertible. A semibrick is a set of isomorphism classes of bricks with no nonzero maps between different members. A wide subcategory contains all maps between its objects and is closed under kernels, cokernels and extensions.

**Problem.** Sending each wide subcategory to its simple objects, up to isomorphism, gives a bijection with semibricks. The inverse takes all modules having a finite chain of submodules whose successive quotients belong to the semibrick.

**How the definition helps.** The vanishing maps let distinct bricks serve as distinct simple objects, in our own explanation. In our own counterexample, the two indecomposable projectives for a single arrow are bricks with a nonzero map between them. They cannot both be simple objects in a wide subcategory. The theorem proves that modules filtered by a semibrick form a wide subcategory with exactly those simple objects.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “The map S(−): wide-A → sbrick-A is a bijection with inverse Filt(−): sbrick-A → wide-A.”

**Sources:** none listed. No primary source with a working link was found.

### Eventually constant roots extend Gabriel's theorem to infinite quivers

**Remember:** Let dimensions settle to a constant along infinite tails.

*Makes the theorem clean to state or prove.* MSC 16G20 (Representations of quivers and partially ordered sets), 16G60. arXiv math.RT. Level 4: research.

**Definition.** A quiver is a directed graph, and a representation puts a vector space at each vertex and a linear map on each arrow. A root of an infinite quiver assigns a whole number to each vertex and is eventually constant along each infinite end. Its Euler–Tits form adds the squares at the vertices and subtracts the products across the arrows, on a large enough finite part. A positive root is one whose form equals 1.

**Problem.** Let the quiver be connected, eventually outward, and of type Aₙ, Dₙ, E₆, E₇, E₈, A∞, A∞,∞ or D∞. Eventually outward means that far out along each infinite end, the arrows point away from the rest of the quiver. Then every representation is a direct sum of indecomposables, and taking dimensions matches indecomposables one to one with positive roots.

**How the definition helps.** Allowing dimension vectors that become constant, not zero, far out supplies the roots that infinite-dimensional indecomposables need. In our own example, take a ray with a one-dimensional space at each vertex and identity maps; its dimension vector is 1 everywhere. On a finite piece with n vertices the form gives n − (n − 1) = 1, so this is a positive root. The work is showing that every indecomposable has this shape and that each positive root occurs exactly once.

**Paper or page:** [Gabriel's Theorem for Infinite Quivers](https://arxiv.org/abs/2312.09904v1). It says: “In this case the indecomposables are all locally finite-dimensional and eventually constant and correspond bijectively to the positive roots (i.e. those of length 1).”

**Sources:**

- [Nathaniel Gallup, Stephen Sawin, Gabriel's Theorem for Infinite Quivers, arXiv:2312.09904 (2023)](https://arxiv.org/abs/2312.09904v1)
- [Nathaniel Gallup, Stephen Sawin, Gabriel’s Theorem for Infinite Quivers, Algebras and Representation Theory (2025)](https://doi.org/10.1007/s10468-025-10349-2)

### Symmetric extensions pick out arcs on non-orientable surfaces among symmetric objects

**Remember:** Lift curves to the cover and test rigidity with symmetric extensions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16G20 (Representations of quivers and partially ordered sets), 18G80. arXiv math.RT. Level 4: research.

**Definition.** A non-orientable surface, such as a Möbius band, has an orientable double cover. The cluster category of the cover encodes curves on the cover as objects. A symmetric object comes with an isomorphism to its image under a duality functor, and it stands for a curve on the original surface. The paper defines symmetric extensions between such objects by means of this duality.

**Problem.** Let the marked surface be non-orientable and have no punctures. Then arcs and quasi-arcs correspond one to one with indecomposable symmetric objects that have no symmetric self-extension. Quasi-arcs include one-sided simple closed curves, whose neighborhood is a Möbius band.

**How the definition helps.** The symmetric extension test lets one rigidity condition cover arcs and one-sided curves at once. In ordinary cluster categories, arcs match rigid objects, those without self-extensions. Our own remark is that the symmetric test is the analogue on the double cover. The paper's work is matching curves with symmetric objects and proving the test.

**Paper or page:** [Marked non-orientable surfaces and cluster categories via symmetric representations](https://arxiv.org/abs/2211.15863v3). It says: “we define a new notion of symmetric extension, and show that the arcs and quasi-arcs on (S, M) correspond to the indecomposable symmetric objects without symmetric self-extension.”

**Sources:**

- [Véronique Bazier-Matte, Aaron Chan, Kayla Wright, Marked non-orientable surfaces and cluster categories via symmetric representations, arXiv:2211.15863 (2023)](https://arxiv.org/abs/2211.15863v3)

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

*Rules out counterexamples.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers). arXiv math.RT, math.RA. Level 4: research.

**Definition.** Work with finite-dimensional modules over a finite-dimensional algebra. A τ-tilting pair consists of a module M and a projective module P, a summand of a free module. All maps from P to M and from M to its Auslander–Reiten translate τM must vanish. The total number of distinct indecomposable summands in the two modules must equal the number of simple module types.

**Problem.** Basic τ-tilting pairs, with no repeated indecomposable summands, correspond one to one with functorially finite torsion classes. The class of a pair (M, P) consists of the quotients of finite direct sums of copies of M.

**How the definition helps.** The projective term counts missing summands without adding any quotients to the torsion class (our own). For example, M = 0 with P the sum of one copy of each indecomposable projective gives the zero class (our own). The correspondence theorem proves that the class determines the basic pair.

**Paper or page:** [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3), [τ-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “There are bijections between the sets τ-tp-A, ftors-A, fwide-A and fsbrick-A.”

**Sources:**

- [Takashi Adachi, Osamu Iyama and Idun Reiten, τ-tilting theory](https://doi.org/10.1112/s0010437x13007422)

### τ-rigid modules have no self-extensions by the Auslander–Reiten formula

**Remember:** If the whole map space vanishes, so does its quotient.

*True by definition.* MSC 16G70 (Auslander-Reiten sequences (almost split sequences) and Auslander-Reiten quivers), 16G10. arXiv math.RT. Level 4: research.

**Definition.** Let A be a finite-dimensional algebra. The Auslander–Reiten translate τ sends a module to another module, and it is used to compute extension groups. A module M is τ-rigid if every map from M to τM is zero. M is rigid if every extension of M by itself splits.

**Problem.** A τ-rigid module over a finite-dimensional algebra is rigid.

**How the definition helps.** The definition makes a whole map space zero, so the quotient that measures self-extensions is zero as well. In our own explanation, the work sits in the Auslander–Reiten formula that identifies the dual extension space with that quotient.

**Paper or page:** [$τ$-tilting theory -- An introduction](https://arxiv.org/abs/2106.00426v3). It says: “Let M be an A-module. If M is τ-rigid then M is rigid.”

**Sources:**

- [Hipolito Treffinger, $τ$-tilting theory -- An introduction, arXiv:2106.00426 (2022)](https://arxiv.org/abs/2106.00426v3)

### Nakayama automorphisms as dual-bimodule twists are unique up to inner automorphisms

**Remember:** The dual bimodule remembers the twist up to conjugation.

*True by definition.* MSC 16L60 (Quasi-Frobenius rings), 16D20. arXiv math.RA, math.QA. Level 4: research.

**Definition.** Let A be a finite-dimensional Frobenius algebra and ν an automorphism of A. Let A(ν) be A as a bimodule with the usual left action and the right action a · b = aν(b). Call ν a Nakayama automorphism when the dual A\* is isomorphic to A(ν) as bimodules. The form definition takes a nondegenerate form σ with σ(ab, c) = σ(a, bc) and defines ν by σ(a, b) = σ(b, ν(a)).

**Problem.** For a finite-dimensional Frobenius algebra, two Nakayama automorphisms ν and ν′ satisfy ν′(b) = u⁻¹ν(b)u for a unit u, that is, an invertible element.

**How the definition helps.** With the bimodule definition, ν and ν′ give isomorphic bimodules A(ν) ≅ A(ν′). A left-linear isomorphism φ of A is right multiplication by the unit u = φ(1) (our own argument). Respect for the twisted right actions gives ν(b)u = uν′(b) for all b (our own argument). The work moves into showing that each Frobenius form gives such a bimodule isomorphism. The quoted proposition records this and its converse.

**Paper or page:** [Picard groups of quasi-Frobenius algebras and a question on Frobenius strongly graded algebras](https://arxiv.org/abs/2309.10169v2). It says: “Moreover, any such ν is the Nakayama automorphism of R associated with a Frobenius form.”

**Sources:**

- [Picard groups of quasi-Frobenius algebras and a question on Frobenius strongly graded algebras (arXiv 2309.10169v2)](https://arxiv.org/abs/2309.10169v2)

### The bimodule definition of Frobenius extensions makes induction equal coinduction

**Remember:** One bimodule isomorphism turns both ways of extending scalars into one.

*True by definition.* MSC 16L60 (Quasi-Frobenius rings), 16D20. arXiv math.RA, math.QA. Level 4: research.

**Definition.** Let B ⊆ A be rings, with A finitely generated and projective as a left B-module. Write Hom(A, B) for the left B-linear maps from A to B. Call the extension Frobenius when A ≅ Hom(A, B) as bimodules, with A acting on the left and B on the right. The classical definition gives a B-bimodule map E from A to B together with finite dual bases.

**Problem.** Let B ⊆ A be a Frobenius extension and M a left B-module. Induction A ⊗ M and coinduction Hom(A, M), both over B, are naturally isomorphic left A-modules.

**How the definition helps.** The bimodule definition makes the isomorphism a tensor product with the given map. Because A is finitely generated and projective over B, Hom(A, M) ≅ Hom(A, B) ⊗ M naturally in M (our own). The chosen isomorphism Hom(A, B) ≅ A then turns coinduction into induction (our own). The work moves into the equivalence with the classical definition by E and dual bases. Wikipedia states the isomorphism and leaves its construction from E and dual bases as an exercise.

**Wikipedia:** [Frobenius algebra](https://en.wikipedia.org/wiki/Frobenius_algebra). It says: “are naturally isomorphic as A-modules”

**Sources:** none listed. No primary source with a working link was found.

### Generalized Bernstein filtrations give Bernstein's inequality on singular rings

**Remember:** Choose the right filtration, and Bernstein's inequality survives singularities.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16S32 (Rings of differential operators (associative algebraic aspects)), 16W70, 13N10. arXiv math.AC, math.RA. Level 4: research.

**Definition.** On a polynomial ring, the Bernstein filtration of the ring D of differential operators counts the degree of the coefficients plus the order of the operator. A generalized Bernstein filtration uses the grading of a graded ring R instead. So it gives a dimension to D-modules over graded rings that are not polynomial rings.

**Problem.** Let R be the ring of invariants of a finite group acting linearly on a polynomial ring in characteristic zero. Then Bernstein's inequality holds: every nonzero finitely generated D-module has dimension at least dim R. Holonomic D-modules have finite length.

**How the definition helps.** The generalized filtration gives a dimension on singular graded rings, where the classical filtration is not available. The paper shows that the dimension does not depend on the choice of filtration. A key step is that D is linearly simple for these filtrations, a quantitative form of simplicity. The paper proves the same results in prime characteristic for strongly F-regular graded algebras with finite F-representation type.

**Paper or page:** [Bernstein's inequality and holonomicity for certain singular rings](https://arxiv.org/abs/2103.02986v2), [Bernstein's inequality and holonomicity for certain singular rings](https://arxiv.org/abs/2103.02986v2). It says: “We also show that holonomic D-modules, in this context, have finite length. We obtain these results using a more general version of Bernstein filtrations.”

**Sources:**

- [Josep Àlvarez Montaner, Daniel J. Hernández, Jack Jeffries, Luis Núñez-Betancourt, Pedro Teixeira, Emily E. Witt, Bernstein's inequality and holonomicity for certain singular rings, arXiv:2103.02986 (2021)](https://arxiv.org/abs/2103.02986v2)

### Weak s-unitality is what Hilbert's basis theorem needs

**Remember:** No local unit, no Hilbert basis theorem.

*Rules out counterexamples. Confidence: medium.* MSC 16S36 (Ordinary and skew polynomial rings and semigroup rings), 17A01. arXiv math.RA. Level 4: research.

**Definition.** A ring R is weakly left s-unital when each element a is a sum, with integer coefficients, of iterated left multiples of a, such as r·a and r·(s·a). This weakens Tominaga's left s-unitality, which asks that a = ua for some u in R.

**Problem.** Let R be a left distributive ring, which need not be associative or have an identity. Then R\[x\] is left Noetherian if and only if R is left Noetherian and weakly left s-unital.

**How the definition helps.** In our own reading, the local identity lets the leading-coefficient argument of the usual proof of Hilbert's basis theorem run. Our own example of what goes wrong: give ℤ/2 the zero multiplication. That ring is Noetherian, but every additive subgroup of R\[x\] is an ideal, so R\[x\] has an infinite increasing chain of ideals. Corollary 50 shows that the condition is both necessary and sufficient.

**Paper or page:** [Ore Extensions of Abelian Groups with Operators](https://arxiv.org/abs/2410.16761v3). It says: “Suppose that R is a left distributive ring. Then R\[x\] is left Noetherian if and only if R is left Noetherian and weakly left s-unital.”

**Sources:**

- [Per Bäck, Patrik Lundström, Johan Öinert, Johan Richter, Ore Extensions of Abelian Groups with Operators, arXiv:2410.16761 (2024), J. Algebra 686 (2026), 176-194](https://arxiv.org/abs/2410.16761v3)

### Condition (K) makes all Leavitt path algebra ideals graded

**Remember:** Two ways round every cycle, and all ideals come from the graph.

*Rules out counterexamples. Confidence: medium.* MSC 16S88 (Leavitt path algebras), 16W50, 16D25. arXiv math.RA. Level 4: research.

**Definition.** The Leavitt path algebra of a directed graph is graded by path length, and a graded ideal is one spanned by its homogeneous parts. A graph satisfies Condition (K) when no vertex lies on exactly one simple closed path.

**Problem.** For a finite directed graph E and a field K, every ideal of the Leavitt path algebra L(E) is graded if and only if E satisfies Condition (K).

**How the definition helps.** Condition (K) removes the cycles that behave like a single loop, and in our own reading these cause all ideals that are not graded. A cycle that no edge leaves gives a Laurent polynomial ring K\[x, x⁻¹\]. In our own words, for such a cycle c based at a vertex v, the ideal generated by v + c is not graded. Graded ideals correspond to sets of vertices, so under Condition (K) the ideals are classified by the graph (our own summary).

**Paper or page:** [Classification and Ideal Lattices of Leavitt Path Algebras](https://arxiv.org/abs/2509.25464v1), [Classification and Ideal Lattices of Leavitt Path Algebras](https://arxiv.org/abs/2509.25464v1). It says: “Let E be a finite directed graph and L(E) its associated Leavitt path algebra over a field K. All ideals of L(E) are graded if and only if E satisfies Condition (K).”

**Sources:**

- [Yvan Grinspan, Seth Yoo, Classification and Ideal Lattices of Leavitt Path Algebras, arXiv:2509.25464 (2025)](https://arxiv.org/abs/2509.25464v1)

### Exits and connectivity characterize simple Leavitt path algebras

**Remember:** A cycle with no way out hides a Laurent polynomial ring.

*Rules out counterexamples. Confidence: medium.* MSC 16S88 (Leavitt path algebras), 16D30, 05C20. arXiv math.RA. Level 4: research.

**Definition.** A cycle in a directed graph has an exit when a vertex on the cycle emits an edge besides the next cycle edge. Condition (L) asks this of every cycle. A ring is simple when its only two-sided ideals are zero and the whole ring.

**Problem.** For a finite directed graph E and a field K, the Leavitt path algebra L(E) is simple if and only if every vertex connects to every cycle and every sink, and every cycle has an exit.

**How the definition helps.** The exit condition removes the one obstruction from cycles, so simplicity reduces to a reachability condition on the graph. Our own example: a single loop gives the Laurent polynomial ring K\[x, x⁻¹\], which is not simple. The reachability condition is also needed: our own example is two vertices with no edges, whose algebra K × K is not simple. In our own reading, the work is in the proof by Abrams and Aranda Pino, which reduces nonzero ideals to vertices or cycles.

**Paper or page:** [Monoids, dynamics and Leavitt path algebras](https://arxiv.org/abs/2409.00289v1). It says: “The Leavitt path algebra Lₖ(E) is a simple ring if and only if (1) Every vertex in E connects to every cycle and every sink of E, and (2) Every cycle in E has an exit.”

**Sources:**

- [Gene Abrams, Roozbeh Hazrat, Monoids, dynamics and Leavitt path algebras, arXiv:2409.00289 (2024)](https://arxiv.org/abs/2409.00289v1)
- [Gene Abrams, Gonzalo Aranda Pino, The Leavitt path algebra of a graph, J. Algebra 293 (2005), 319-334](https://doi.org/10.1016/j.jalgebra.2005.07.028)

### A variant of the Hopf module theorem holds exactly for Hopf algebras

**Remember:** The antipode is exactly what makes free Hopf modules all Hopf modules.

*Rules out counterexamples. Confidence: medium.* MSC 16T05 (Hopf algebras and their applications), 16T15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A Hopf algebra is a bialgebra B with an antipode, a linear map S from B to B that acts like g ↦ g⁻¹ in a group algebra. A Hopf trimodule over B carries three compatible B-structures.

**Problem.** For a bialgebra B, the functor −⊗B into Hopf trimodules over B is an equivalence of categories if and only if B has an antipode.

**How the definition helps.** The antipode is the condition that the theorem needs, and the theorem in turn forces an antipode. So the definition of a Hopf algebra is exactly the hypothesis of the theorem. Our own example: the monoid algebra of the natural numbers under addition is a bialgebra without an antipode, and for it the equivalence fails. The theorem is a variant of the fundamental theorem of Hopf modules of Larson and Sweedler (our own remark).

**Paper or page:** [Reconstruction of module categories in the infinite and non-rigid settings](https://arxiv.org/abs/2409.00793). It says: “Let B be a bialgebra. The functor −⊗B … is an equivalence if and only if B admits an antipode.”

**Sources:**

- [Mateusz Stroiński and Tony Zorman, Reconstruction of module categories in the infinite and non-rigid settings, arXiv:2409.00793 (2024)](https://arxiv.org/abs/2409.00793)

### Associator logarithms are Lie series

**Remember:** Group-like multiplication becomes primitive addition under the logarithm.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 17B01. arXiv math.QA. Level 4: research.

**Definition.** Work with formal series in two noncommuting letters over a field of characteristic zero. Define the coproduct Δ by multiplication and by Δa = a ⊗ 1 + 1 ⊗ a for each letter a. A series Φ is group-like if its constant term is one and ΔΦ = Φ ⊗ Φ. Drinfeld’s equations for associators require this property.

**Problem.** The formal logarithm of an associator is a Lie series, a degree-by-degree sum of iterated brackets of the two letters.

**How the definition helps.** The group-like equation splits the coproduct of the logarithm into two summands. In our own proof, take the logarithm of the product of the commuting factors Φ ⊗ 1 and 1 ⊗ Φ. This gives Δ(log Φ) = log Φ ⊗ 1 + 1 ⊗ log Φ. The remaining theorem identifies exactly the series satisfying this additive equation with Lie series.

**nLab:** [Drinfeld associator](https://ncatlab.org/nlab/show/Drinfeld+associator). It says: “is a grouplike element”

**Paper or page:** [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1). It says: “\\Prim(\\widehat{H}) &amp;\\xrightarrow{\\sim} \\operatorname{Grp}(\\widehat{H})”

**Sources:**

- [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1)

### Defining Nichols algebras by a maximal ideal forbids primitives above degree one

**Remember:** A new higher primitive would give a larger ideal to remove.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 17B37. arXiv math.QA. Level 4: research.

**Definition.** A Yetter–Drinfeld module V over a Hopf algebra is both a module and a comodule, with a compatibility law. The law gives a braiding that swaps tensor factors, so the tensor algebra T(V) becomes a braided Hopf algebra. Define the Nichols algebra as T(V) divided by the largest graded Hopf ideal that lies in degrees two and higher. The alternative characterization asks for a graded braided Hopf algebra generated in degree one whose primitives are exactly V.

**Problem.** The primitive elements of the Nichols algebra of V are exactly the elements of V. An element x is primitive when Δ(x) = 1 ⊗ x + x ⊗ 1.

**How the definition helps.** The maximal-ideal definition leaves no room for a new primitive element. Suppose that a homogeneous primitive of degree at least two survives (our own argument). The primitives in degrees two and higher span a Yetter–Drinfeld submodule, and they generate a Hopf ideal in those degrees. Its preimage in T(V) is a larger ideal of the allowed kind, which contradicts maximality (our own argument). The work moves into showing that the sum of all allowed ideals is again allowed, so a largest one exists. The quoted lemma, which cites Andruskiewitsch and Schneider, states the alternative characterization.

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

### Quasi-Hopf algebras describe monoidal categories with a nontrivial associator

**Remember:** Coassociativity holds only up to φ, and φ becomes the associator of modules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16T05 (Hopf algebras and their applications), 16T10, 18M15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A quasi-bialgebra is an algebra A with a comultiplication that is coassociative only up to conjugation by an invertible element φ in A ⊗ A ⊗ A. The element φ must satisfy a pentagon identity. A quasi-Hopf algebra also has an antipode that satisfies suitable axioms.

**Problem.** The modules over a quasi-Hopf algebra form a monoidal category whose associativity isomorphisms are given by φ, so they need not be trivial. Conversely, a finite tensor category with a quasi-fiber functor is the module category of a quasi-Hopf algebra.

**How the definition helps.** The element φ lets a category with a nontrivial associator still be the module category of an algebra. For an ordinary Hopf algebra, the forgetful functor to vector spaces is monoidal (a fiber functor). For a quasi-Hopf algebra it is only a quasi-fiber functor, whose product map need not be associative, and φ measures this failure. In our reading of Drinfeld, the monodromy of the Knizhnik–Zamolodchikov equations gives a quasi-Hopf structure on U(𝔤)\[\[ħ\]\], and proving it equivalent to the quantum group is still real work.

**nLab:** [quasi-Hopf algebra](https://ncatlab.org/nlab/show/quasi-Hopf+algebra), [Drinfeld-Kohno theorem](https://ncatlab.org/nlab/show/Drinfeld-Kohno+theorem). It says: “In RCFT, the monoidal categories appearing can be, by Tannaka reconstruction considered as categories of modules of Hopf algebra-like objects where the flexibility of associativity coherence in building a theory were natural thus leading to quasi-Hopf algebras.”

**Sources:**

- [Vladimir Drinfeld, Quasi-Hopf algebras, Algebra i Analiz 1:6 (1989) 114–148 (English: Leningrad Math. J. 1 (1990) 1419–1457)](http://www.mathnet.ru/php/getFT.phtml?jrnid=aa&paperid=53&what=fullt&option_lang=rus) (link not checked)
- [Toshitake Kohno, Monodromy representations of braid groups and Yang-Baxter equations, Ann. Inst. Fourier 37 (1987) 139–160](http://www.numdam.org/item?id=AIF_1987__37_4_139_0)

### Removing products gives Leibniz

**Remember:** Discard left-hand products and the coaction becomes a derivation.

*True by definition.* MSC 16T05 (Hopf algebras and their applications), 11M32. arXiv math.QA, math.NT. Level 4: research.

**Definition.** Let H be a connected graded Hopf algebra over ℚ, and let H₊ be its part of positive weight. Define D<sub>m</sub> by applying the coproduct and then projecting the left factor onto the weight-m part of H₊/H₊², the elements modulo products.

**Problem.** For each m &gt; 0, D<sub>m</sub> is a derivation: D<sub>m</sub>(ab) = D<sub>m</sub>(a)(1 ⊗ b) + (1 ⊗ a)D<sub>m</sub>(b).

**How the definition helps.** Projecting the coproduct removes precisely the cross terms that would spoil the product rule. In our own proof, expand Δ(a)Δ(b). Its left factor survives only when exactly one input supplies positive weight there. The weight-zero terms of the two coproducts are 1 ⊗ a and 1 ⊗ b. The Hopf algebra construction supplies the multiplicative coproduct.

**Paper or page:** [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1). It says: “is a derivation with respect to ∗”

**Sources:**

- [AGZT-Lectures on formal multiple zeta values](https://arxiv.org/abs/2406.13630v1)

### Quasitriangular Hopf algebras give solutions of the Yang–Baxter equation

**Remember:** The universal R-matrix is exactly a braiding on the module category.

*True by definition.* MSC 16T10 (Bialgebras), 16T25, 18M15. arXiv math.QA, math.RA. Level 4: research.

**Definition.** A bialgebra H is quasitriangular if it has an invertible element R in H ⊗ H with two properties. First, the flipped coproduct of h equals R Δ(h) R⁻¹ for all h. Second, (Δ ⊗ id)(R) = R₁₃R₂₃ and (id ⊗ Δ)(R) = R₁₃R₁₂, where R₁₃ means R placed in the first and third tensor factors.

**Problem.** In a quasitriangular bialgebra, R satisfies the quantum Yang–Baxter equation R₁₂R₁₃R₂₃ = R₂₃R₁₃R₁₂. So every H-module gives a solution of this equation, and hence representations of the braid groups.

**How the definition helps.** Drinfeld chose the axioms so that R gives a braiding on modules by construction. The map v ⊗ w ↦ flip(R·(v ⊗ w)) is an H-linear isomorphism that satisfies the hexagon identities. So the module category is braided monoidal: it has a natural way to swap tensor factors that is compatible with the tensor product. The quantum Yang–Baxter equation then follows from the axioms in a few lines, as a corollary. The hard work moves to building examples, such as the quantized enveloping algebras, and to showing that they have a universal R-matrix.

**nLab:** [quasitriangular bialgebra](https://ncatlab.org/nlab/show/quasitriangular+bialgebra), [quantum group](https://ncatlab.org/nlab/show/quantum+group). It says: “equipped with just the right structure such as to make its category of modules into a braided monoidal category/symmetric monoidal category.”

**Sources:**

- [Vladimir Drinfeld, Quantum groups, Proc. ICM 1986, Vol. 1 (1987) 798–820; expanded version J. Soviet Math. 41 (1988) 898–915](https://doi.org/10.1007/BF01247086)
- [Shahn Majid, Quasitriangular Hopf algebras and Yang–Baxter equations, Int. J. Mod. Phys. A 5 (1990) 1–91](https://doi.org/10.1142/S0217751X90000027)

### Totally nonnegative integers turn the narrow class group into a Picard group

**Remember:** Build positivity into the ring, and the narrow class group appears by itself.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 16Y60 (Semirings), 11R29. arXiv math.AG, math.RA. Level 4: research.

**Definition.** An algebraic integer of a number field is totally nonnegative when it is at least 0 under every real embedding. These integers form a semiring, a ring without subtraction. Its reflexive Picard group is the group of reflexive rank-one modules up to isomorphism.

**Problem.** The reflexive Picard group of the semiring of totally nonnegative integers of a number field is the narrow class group of the field.

**How the definition helps.** Positivity is built into the semiring, so the sign condition of the narrow class group comes for free. In the ordinary class group, a principal ideal may have a generator of any sign (our own). The cost is new module theory over semirings. There, not all usual definitions of a vector bundle agree, although all usual definitions of a line bundle do.

**Paper or page:** [Facets of module theory over semirings](https://arxiv.org/abs/2405.18645v3). It says: “We also show that the narrow class group of a number field can be recovered as a reflexive Picard group of its subsemiring of totally nonnegative algebraic integers.”

**Sources:**

- [James Borger, Jaiung Jun, Facets of module theory over semirings, arXiv:2405.18645v3 (2025)](https://arxiv.org/abs/2405.18645v3)
