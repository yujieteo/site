### Constants make maps preserve units

**Remember:** A unit is an operation with no inputs.

*Rules out counterexamples.* MSC 08A05 (Structure theory of algebraic structures). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Treat a named constant as an operation on zero inputs. A homomorphism is a map that preserves each operation, including those with no inputs.

**Problem.** Every homomorphism between monoids preserves the unit as well as multiplication.

**How the definition helps.** Treating the unit as a constant makes unit preservation an instance of operation preservation. Multiplication alone allows the following map (our own example). Send the sole element of the trivial monoid to 0 in the multiplicative monoid {0, 1}. This preserves multiplication but sends the unit to 0.

**Wikipedia:** [Universal algebra](https://en.wikipedia.org/wiki/Universal_algebra). It says: “if e is a constant (nullary operation)”

**Sources:**

- [Stanley Burris and H. P. Sankappanavar, A Course in Universal Algebra, Chapter II, §§1 and 6](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra2012.pdf)

### Compatible equivalences give algebra quotients

**Remember:** Do the operation on representatives, then take the class.

*Rules out counterexamples.* MSC 08A30 (Subalgebras, congruence relations). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A congruence is an equivalence relation for which replacing inputs by equivalent inputs gives equivalent outputs. To operate on classes, choose one representative from each class, apply the operation, and take the class of the result.

**Problem.** Every congruence defines a quotient algebra, and the map sending an element to its class preserves all operations.

**How the definition helps.** Compatibility makes the result independent of the chosen representatives. Our own illustration uses 1 and −1, which have equal absolute values. Adding 1 gives 2 and 0, which do not. Compatibility rules out this failure before we define the quotient.

**Wikipedia:** [Congruence relation](https://en.wikipedia.org/wiki/Congruence_relation). It says: “A congruence relation on the structure is then defined as an equivalence relation that is also compatible.”

**Paper or page:** [Absolute Value induces Equivalence not Compatible with Integer Addition](https://proofwiki.org/wiki/Absolute_Value_induces_Equivalence_not_Compatible_with_Integer_Addition). It says: “Then R is not a congruence relation for integer addition.”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-identities capture cancellation

**Remember:** Check the conditions and the conclusion one coordinate at a time.

*Makes the theorem clean to state or prove.* MSC 08C15 (Quasivarieties). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A quasi-identity says that one equation follows whenever a finite list of equations holds. Unlike an ordinary identity, it may specify conditions before requiring the conclusion.

**Problem.** Cancellative monoids form a quasivariety, a class defined by quasi-identities. They do not form a variety, a class defined by ordinary identities.

**How the definition helps.** Conditional equations express both cancellation laws directly (our own monoid example). They read ax = ay ⇒ x = y and xa = ya ⇒ x = y. Ordinary equations pass to all quotients. Map the additive nonnegative integers onto {0, 1} under maximum by sending every positive integer to 1 and zero to 0. The source cancels, but the target has max(1,0) = max(1,1).

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “However, they do form a quasivariety as the implication defining the cancellation property is an example of a quasi-identity.”

**Sources:** none listed. No primary source with a working link was found.

### Torsion-free groups need quasi-identities

**Remember:** An implication can rule out torsion without demanding closure under quotients.

*Makes the theorem clean to state or prove.* MSC 08C15 (Quasivarieties), 03C05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A quasi-identity says that if a finite list of equations holds, then another equation holds. A quasivariety allows these implications, while a variety allows only equations. A group is torsion-free if its identity is its only element of finite order.

**Problem.** Torsion-free groups form a quasivariety but not a variety.

**How the definition helps.** Our own argument uses one implication for each integer n ≥ 2. If xⁿ = 1, it requires x = 1. These implications exclude exactly the nonidentity elements of finite order. Equations alone cannot do this because equations pass to quotients. The integers under addition are torsion-free, but their quotient modulo two has an element of order two.

**Wikipedia:** [Quasivariety](https://en.wikipedia.org/wiki/Quasivariety). It says: “Every variety is a quasivariety by virtue of an equation being a quasi-identity for which n = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Finitary closure makes subalgebra lattices algebraic

**Remember:** Finite generators give the compact elements of the subalgebra lattice.

*True by definition.* MSC 08A30 (Subalgebras, congruence relations), 06B23. arXiv math.RA. Level 3: graduate.

**Definition.** A closure map sends each subset A to the least closed set containing it. The map is finitary if its value on A is the union of its values on finite subsets of A. An element is compact if lying below a join already puts it below a join of finitely many terms. A complete lattice is algebraic if every element is a join of compact elements.

**Problem.** The subalgebras of an algebra whose operations take finitely many inputs form an algebraic lattice. Its compact elements are exactly the finitely generated subalgebras.

**How the definition helps.** The finitary closure definition lets one apply a general theorem rather than calculate compactness separately for each algebra. In that theorem, unions of directed families of closed sets are closed. A family is directed if it is nonempty and any two members have an upper bound within it. A finite set of generators in such a union lies inside one member, which proves compactness of its closure. Every closed set is the join of the closures of its finite subsets. The work lies in checking that subalgebra generation is finitary. Our own explanation is that each value is built from finitely many inputs using finitely many operations.

**Wikipedia:** [Closure operator](https://en.wikipedia.org/wiki/Closure_operator). It says: “Given a finitary closure operator on a set, the closures of finite sets are exactly the compact elements of the set C of closed sets. It follows that C is an algebraic poset.”

**Paper or page:** [Image of Directed Suprema Preserving Closure Operator is Algebraic Lattice](https://proofwiki.org/wiki/Image_of_Directed_Suprema_Preserving_Closure_Operator_is_Algebraic_Lattice). It says: “Let c: S → S be a closure operator that preserves directed suprema.”

**Sources:**

- [Garrett Birkhoff and Orrin Frink, Representations of lattices by sets, Transactions of the American Mathematical Society (1948)](https://doi.org/10.1090/S0002-9947-1948-0027263-2)

### Finite paths compute congruence joins

**Remember:** Chain the links first and apply operations a coordinate at a time.

*True by definition.* MSC 08A30 (Subalgebras, congruence relations). arXiv math.RA. Level 3: graduate.

**Definition.** A congruence is an equivalence relation that respects each algebra operation. The join of several congruences is the least congruence containing them all. The path description connects two elements when a finite sequence joins them using steps from the given congruences.

**Problem.** If each operation takes finitely many inputs, the path description gives the join of any family of congruences.

**How the definition helps.** The path description makes minimality immediate because every equivalence containing the given relations contains all their paths (our own proof). Paths of length zero, reversed paths, and concatenated paths give an equivalence. The remaining work is compatibility with operations. Change one input along its path while holding the other inputs fixed. Each output step stays in the congruence used for that input step. Finitely many inputs give a finite output path.

**Wikipedia:** [Congruence relation](https://en.wikipedia.org/wiki/Congruence_relation). It says: “A congruence relation on the structure is then defined as an equivalence relation that is also compatible.”

**Sources:** none listed. No primary source with a working link was found.

### Discriminators build all finite operations

**Remember:** One equality test builds the whole lookup table.

*True by definition.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A polynomial operation is an expression built from variables, fixed elements and the given operations. An algebra is polynomially complete if these expressions give every operation with finitely many inputs. The discriminator d(x,y,z) returns z when x = y and x otherwise.

**Problem.** For a finite algebra, polynomial completeness is equivalent to having a polynomial expression for the discriminator.

**How the definition helps.** A discriminator expression builds every finite lookup table by testing one input at a time (our own). The expression d(d(x,y,u),d(x,y,v),v) selects u when x = y and v otherwise (our own). Use these tests against fixed elements and put the desired result at each leaf (our own). Conversely, polynomial completeness already supplies the discriminator (our own).

**Paper or page:** [Proof complexity of universal algebra in a CSP dichotomy proof](https://arxiv.org/abs/2403.06704). It says: “A finite algebra is polynomially complete if and only if it has the ternary discriminator as a polynomial operation.”

**Sources:** none listed. No primary source with a working link was found.

### Free generators recover natural operations

**Remember:** Apply the operation to the free generators to read its term.

*True by definition.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A variety is a class of algebras specified by equations. For a positive integer n, choose one n-input operation on each algebra in the variety. The family is natural if all homomorphisms commute with the chosen operations. A free algebra on n generators admits a unique homomorphism extending each assignment of those generators.

**Problem.** In a variety, every natural n-input operation is given by a term. The term is unique up to the equations that hold in the variety.

**How the definition helps.** Representing input tuples by maps from one free algebra reduces the whole family to its value at the generators (our own explanation). The free algebra consists of terms identified whenever their equality holds throughout the variety. Choose a term representing the value at its generators. Naturality transports that value along the map determined by any input tuple, so the term represents the entire family. Constructing the free algebra from terms supplies the correspondence.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “may be identified with elements of F(n), the free T-algebra on n generators”

**Sources:** none listed. No primary source with a working link was found.

### Majority operations reconstruct from pairs

**Remember:** Three witnesses that miss different coordinates recover the full tuple.

*Rules out counterexamples.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv cs.CC, math.LO. Level 3: graduate.

**Definition.** A majority operation takes three inputs and returns the repeated value whenever two agree. An operation preserves a relation if applying it coordinate by coordinate to tuples in the relation gives another tuple in the relation.

**Problem.** Consider a relation on tuples of fixed finite length at least two. If a majority operation preserves it, a tuple belongs exactly when each coordinate pair occurs in the corresponding projection.

**How the definition helps.** A majority operation combines three partial matches into one full match. Our own proof starts with pairs and uses induction on tuple length. Omit each of three different coordinates in turn. By induction in the projected relation, each shorter tuple extends to a member matching every coordinate except possibly the omitted one. Every coordinate matches at least twice, so the majority returns the desired tuple. Our own counterexample consists of three-bit strings with an even number of ones. All pairs occur, yet 111 is absent, and the majority of 110, 101 and 011 is 111.

**Paper or page:** [A polynomial-time algorithm for median-closed semilinear constraints](https://arxiv.org/abs/1808.10068v2). It says: “Let Γ be a structure with domain D and a majority polymorphism. Then every relation in Γ is 2-decomposable.”

**Sources:**

- [Manuel Bodirsky, Marcello Mamino. A polynomial-time algorithm for median-closed semilinear constraints, Theorem 2.1.](https://arxiv.org/abs/1808.10068v2)

### Term equivalence preserves subalgebras, congruences and endomorphisms

**Remember:** Changing the basic operations changes nothing if they generate the same term operations.

*True by definition.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras), 08A30. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** The term operations of an algebra are the operations obtained by composing its basic operations and projections. Their collection is called the clone. Two algebras on the same set are term equivalent if they have the same term operations, including constants. This definition compares all the operations that can be expressed, not just the chosen lists.

**Problem.** Term equivalent algebras have the same subalgebras, congruences and endomorphisms. A congruence is an equivalence relation respected by the operations, and an endomorphism is a map from the algebra to itself that preserves them.

**How the definition helps.** Using all term operations makes the conclusion immediate because closure under basic operations is equivalent to closure under all terms. Our own argument applies the same check to relations respected by the operations and to maps that preserve them. The work is to express each chosen operation using the other list. For example, Boolean complement and meet can be built from NAND, the negation of meet. Our own check gives ¬x = x NAND x and x ∧ y = ¬(x NAND y). Such a nonempty subset contains 1 because x NAND ¬x = 1, and then contains 0 by complement.

**Wikipedia:** [Clone (algebra)](https://en.wikipedia.org/wiki/Clone_%28algebra%29), [Functional completeness](https://en.wikipedia.org/wiki/Functional_completeness). It says: “If A and B are algebras with the same carrier such that every basic function of A is a term function in B and vice versa, then A and B have the same clone.”

**Sources:** none listed. No primary source with a working link was found.

### Matching endpoints lets graph limits carry composition

**Remember:** Match endpoints before composing.

*Makes the theorem clean to state or prove.* MSC 08A55 (Partial algebras). arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** An essentially algebraic theory permits operations on inputs that satisfy specified equations. For categories, composition is defined on pairs for which the target of the first equals the source of the second.

**Problem.** Every diagram of small categories indexed by a small category has a limit. Its graph consists of the compatible tuples of objects and arrows.

**How the definition helps.** The endpoint equation makes arrows composable in the limit exactly when they compose in every coordinate (our own proof). Compose them coordinate by coordinate. The resulting arrows still form a compatible tuple because the diagram maps preserve composition. Identities and the category laws also hold in each coordinate. The universal map into the graph limit then preserves identities and composition.

**nLab:** [essentially algebraic theory](https://ncatlab.org/nlab/show/essentially+algebraic+theory). It says: “As the domains of the operations are given by the solutions to equations, they may be understood using the notion of equalizer.”

**Sources:** none listed. No primary source with a working link was found.

### Pp-definitions are reductions between constraint problems

**Remember:** A pp-formula is a gadget, so pp-definable means reducible.

*True by definition. Confidence: medium.* MSC 08A70 (Applications of universal algebra in computer science), 03C13, 68Q25. arXiv cs.CC, cs.LO. Level 3: graduate.

**Definition.** A constraint satisfaction problem CSP(A) asks whether a given structure has a homomorphism to the fixed structure A. A relation is pp-definable (primitive positive definable) from A when a formula built only from relations of A, equality, conjunction and existential quantifiers defines it. A promise template (A,B) is a pair of structures with a homomorphism from A to B. PCSP(A,B) asks to tell apart inputs that map to A from inputs that do not even map to B.

**Problem.** Show that adding a pp-definable relation to a template does not make its constraint problem harder. This is the first step of the algebraic approach to constraint satisfaction.

**How the definition helps.** A pp-formula is itself a small constraint instance with some hidden variables, so it replaces each new constraint by a gadget (our own). The reduction is therefore almost the definition read as an algorithm (our own). The CSP case is Jeavons's theorem, Theorem 5.1 in the second cited paper. The real work moves into a Galois connection due to Geiger and to Bodnarchuk and others (our own). For a finite structure A, it shows that the polymorphisms of A decide which relations are pp-definable (our own). So the complexity of CSP(A) depends only on its polymorphisms (our own).

**Paper or page:** [1-in-3 vs. Not-All-Equal: Dichotomy of a broken promise](https://arxiv.org/abs/2302.03456), [Generalisations of Matrix Partitions : Complexity and Obstructions](https://arxiv.org/abs/2107.13809). It says: “Suppose the template (A,B) pp-defines (A′, B′). Then PCSP(A′, B′) reduces to PCSP(A, B) in logarithmic space.”

**Sources:**

- [1-in-3 vs. Not-All-Equal: Dichotomy of a broken promise, arXiv:2302.03456 (2023)](https://arxiv.org/abs/2302.03456)
- [Peter Jeavons, On the algebraic structure of combinatorial problems, Theoretical Computer Science (1998)](https://doi.org/10.1016/s0304-3975(97)00230-2)

### A Mal'cev operation makes congruences permute and the congruence lattice modular

**Remember:** One operation that cancels a repeated pair: t(x, y, y) = x.

*True by definition.* MSC 08B05 (Equational logic, Mal'tsev conditions), 08B10. arXiv math.RA. Level 3: graduate.

**Definition.** A Mal'cev operation in an algebraic theory is an operation t with three inputs such that t(x, y, y) = x and t(x, x, y) = y. In groups, t(x, y, z) = x y⁻¹ z is a Mal'cev operation.

**Problem.** Take the variety of algebras of such a theory: all the algebras that satisfy its equations. Show that every reflexive relation that is a subalgebra is a congruence (an equivalence relation that the operations respect). Then show that any two congruences permute (R ∘ S = S ∘ R). Last, show that the lattice of congruences on each algebra is modular (a ≤ c implies a ∨ (b ∧ c) = (a ∨ b) ∧ c).

**How the definition helps.** The two equations of t do the whole proof in one line. Let R be a reflexive relation that is closed under t. For transitivity, apply t to R(x, y), R(y, y) and R(y, z): the result is R(t(x, y, y), t(y, y, z)), which is R(x, z). For symmetry, apply t to R(x, x), R(x, y) and R(y, y): the result is R(t(x, x, y), t(x, y, y)), which is R(y, x). Permutability, and then modularity, follow by short formal steps. Conversely, if congruences permute, the theory has a Mal'cev operation. This is Mal'cev's theorem.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “If T is a Malcev theory, then the lattice of congruences Equiv(X) on any T-algebra X is a modular lattice.”

**Sources:**

- [Francis Borceux, Dominique Bourn, Mal'cev, Protomodular, Homological and Semi-Abelian Categories, Kluwer 2004](https://doi.org/10.1007/978-1-4020-1962-3)

### Equations force varieties to contain products, so fields fail

**Remember:** Equations hold in a product whenever they hold in every factor.

*True by definition.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** An identity is an equation between expressions in the chosen operations that holds for every assignment. A variety consists of all algebras with those operations that satisfy a fixed set of identities. Birkhoff's other description uses closure under quotients, subalgebras and products.

**Problem.** Every variety is closed under products. Fields do not form a variety in the ring operations, even if a total inverse operation is added.

**How the definition helps.** The equational definition gives product closure because each equation can be checked one coordinate at a time. The same equations remain true in quotients and in subsets closed under the operations. Our own example uses ℚ × ℚ, where (1, 0)(0, 1) = (0, 0) although neither factor is zero. Even if we add operations to the fields, their product still has this ring multiplication. The hard direction of Birkhoff's theorem recovers equations from the three closure properties.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “One direction of the equivalence mentioned above, namely that a class of algebras satisfying some set of identities must be closed under the HSP operations, follows immediately from the definitions.”

**Sources:**

- [G. Birkhoff, On the structure of abstract algebras, Mathematical Proceedings of the Cambridge Philosophical Society 31 (1935)](https://doi.org/10.1017/S0305004100013463)

### Free quotients encode equational consequences

**Remember:** Identify the assumptions, then check equality in the resulting algebra.

*True by definition.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.LO. Level 3: graduate.

**Definition.** A quasivariety is a class of algebras defined by implications between equations. Start with its free algebra on the variables, where every assignment into a member extends uniquely to a map preserving operations. A congruence is an equivalence relation that all operations respect. Take the quotient by the smallest congruence that identifies the assumed equations on the generators and keeps the quotient in the class.

**Problem.** An equation follows from the assumptions in a quasivariety exactly when its two sides agree on the named generators in this quotient.

**How the definition helps.** The quotient replaces testing every assignment with one equality test on its named generators. Our own proof extends each assignment satisfying the assumptions to a map on the free algebra. The resulting map factors through the quotient, so equality there implies equality under the assignment. Conversely, the named generators themselves satisfy the assumptions. The construction uses the intersection of all congruences that impose the assumptions and keep the quotient in the class.

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “if p ≈ q is an equation in variables from X then the following are equivalent: FQ(X,Σ) ⊨ p ≈ q; Σ ⊢Q p ≈ q; (p,q) ∈ θQ(Σ).”

**Sources:**

- [Paolo Aglianó, Alex Citkin. Structural completeness in quasivarieties, Lemma 2.11.](https://arxiv.org/abs/2401.02754v1)

### Malcev terms make reflexive relations equivalences

**Remember:** The middle input cancels to reverse or join related pairs.

*Rules out counterexamples.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 3: graduate.

**Definition.** A Malcev term is a three-input expression p with p(x,x,z) = z and p(x,z,z) = x. A compatible relation is closed under applying algebra operations to its pairs coordinate by coordinate.

**Problem.** A reflexive compatible relation on an algebra with a Malcev term is an equivalence relation.

**How the definition helps.** The two Malcev equations force a reflexive compatible relation to contain reversed pairs and composites. Apply p coordinate by coordinate to (x,x), (x,y), and (y,y) to obtain (y,x). Apply it to (x,y), (y,y), and (y,z) to obtain (x,z). Without the term, the two-element lattice gives a counterexample (our own). Its order respects minimum and maximum but fails symmetry.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “If T is a Malcev theory, then any internal reflexive relation in T-Alg is an internal equivalence relation.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite powers detect finite groups

**Remember:** Factorial powers test whether every element of a finite monoid has an inverse.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 3: graduate.

**Definition.** The ω-power of an element x in a finite monoid is the eventual value of x raised to n factorial. A profinite identity can use this kind of power instead of an ordinary finite word.

**Problem.** A finite monoid is a group exactly when the ω-power of each element equals 1. Ordinary monoid identities cannot give this test.

**How the definition helps.** The factorial exponent gives one test that works for every finite group order (our own argument). Powers eventually cycle, and sufficiently large factorials exceed the starting index and are multiples of the period. In a finite group the resulting power is 1. Conversely, a positive power equal to 1 supplies an inverse. For the ordinary-identity obstruction, take the product of cyclic groups of all finite orders. Their standard generators form a tuple whose nonnegative powers are all distinct. This submonoid maps onto {0,1} under maximum, so every identity common to finite groups holds in that nongroup.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “Namely, a class of finite monoids is a variety of finite monoids if and only if it can be defined by a set of profinite identities.”

**Paper or page:** [Unveiling Eilenberg-type Correspondences: Birkhoff's Theorem for (finite) Algebras + Duality](https://arxiv.org/abs/1702.02822v1). It says: “Additionally, pseudovarieties of T–algebras are in one–to–one correspondence with pseudoequational T–theories on D₀.”

**Sources:**

- [Jan Reiterman, The Birkhoff theorem for finite algebras](https://doi.org/10.1007/BF02483902)

### Distributivity rules out skew congruences

**Remember:** The two projection kernels split each congruence into separate coordinate relations.

*Rules out counterexamples. Confidence: medium.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 3: graduate.

**Definition.** A congruence is an equivalence relation that respects algebra operations. An algebra has distributive congruences when intersections distribute over joins, where a join is the least congruence containing both relations.

**Problem.** Suppose intersections distribute over joins of congruences on A × B. Then every congruence on A × B compares the two coordinates by separate congruences on A and B.

**How the definition helps.** Distributivity reconstructs a congruence from its two coordinate conditions (our own proof). Let P and Q identify pairs with equal first and second coordinates, respectively. Their intersection is equality, so distributivity gives C = (C ∨ P) ∩ (C ∨ Q). The quotient correspondence theorem identifies the first join with a congruence on A and the second with one on B. Without distributivity, the diagonal subgroup in ℤ/2 × ℤ/2 gives a counterexample (our own). Its cosets compare the sum of the coordinates modulo two.

**Paper or page:** [Cross-Relation is Congruence Relation](https://proofwiki.org/wiki/Cross-Relation_is_Congruence_Relation). It says: “The cross-relation ⊠ is a congruence relation on ⟨S₁ × S₂, ⊕⟩.”

**Sources:**

- [Grant A. Fraser and Alfred Horn, Congruence relations in direct products](https://doi.org/10.1090/S0002-9939-1970-0265258-1)

### Majority terms make congruences distributive

**Remember:** Fix the endpoints and use majority to bring the whole path into their class.

*Rules out counterexamples.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 3: graduate.

**Definition.** A majority term is an expression m that returns x whenever at least two inputs equal x. A congruence is an equivalence relation that respects every operation. Its meet with another congruence is their intersection. Their join connects elements by finite paths taking steps in either relation.

**Problem.** If an algebra has a majority term, its congruences satisfy R ∩ (S ∨ T) = (R ∩ S) ∨ (R ∩ T).

**How the definition helps.** The majority equations move a path into the common R-class of its endpoints (our own proof). Given endpoints x and z in that class, replace each vertex y by m(x,y,z). This vertex is related by R to m(x,y,x) = x. Each step retains its S or T relation, and both endpoints stay fixed. The reverse inclusion follows from containment. Without majority, the three order-two subgroups of the Klein four-group give congruences violating this law (our own example).

**Wikipedia:** [Quotient (universal algebra)](https://en.wikipedia.org/wiki/Quotient_%28universal_algebra%29). It says: “In 1967 Bjarni Jónsson found the conditions for varieties having congruence lattices that are distributive”

**Sources:**

- [Stanley Burris and H. P. Sankappanavar, A Course in Universal Algebra, Chapter II, §12](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra2012.pdf)

### Closure under subalgebras and products gives free algebras

**Remember:** Take all generated models together, then keep the part generated by the common inputs.

*True by definition. Confidence: medium.* MSC 08B20 (Free algebras), 08C15. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** In the closure description, a variety is a class of algebras with fixed operations, closed under quotients, subalgebras and products. A free algebra in the class has a map from the set S of generators. Every assignment of S in an algebra in the class extends uniquely to an algebra homomorphism. The usual term construction instead identifies expressions in S that are equal in every algebra of the class.

**Problem.** Consider a nonempty class of nonempty algebras with fixed operations of finite arity. If it is closed under subalgebras, products and isomorphic copies, it has a free algebra on every nonempty set.

**How the definition helps.** The closure description lets us build a free algebra inside one product, without first turning the class into equations. Our own proof lists, up to isomorphism, the algebras equipped with a generating map from S. There is only a set of these because every element is the value of a finite expression in the generators. Take the product and keep the subalgebra generated by the tuple of the listed maps. Every assignment into a member of the class generates a listed algebra up to isomorphism, so a projection gives its extension. The extension is unique because the chosen elements generate the subalgebra.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “One can show that for every set S, the variety V contains a free algebra Fₛ on S.”

**Sources:**

- [G. Birkhoff, On the structure of abstract algebras, Mathematical Proceedings of the Cambridge Philosophical Society 31 (1935)](https://doi.org/10.1017/S0305004100013463)

### Finite algebras generate locally finite varieties

**Remember:** Finitely many inputs and outputs give finitely many term functions.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A variety is a class of algebras specified by equations. The variety generated by A satisfies exactly the equations valid in A. An n-input term function evaluates an expression in the operations of A at each input tuple.

**Problem.** Every finitely generated member of the variety generated by a finite algebra is finite.

**How the definition helps.** Counting term functions gives a finite bound even though the list of formal expressions can be infinite (our own explanation). With n generators, the free algebra represents expressions up to the equations valid in A. Its elements therefore correspond to n-input term functions on A. A finite set has only finitely many functions of each fixed arity. Every member generated by n elements is a quotient of this free algebra.

**Wikipedia:** [Locally finite variety](https://en.wikipedia.org/wiki/Locally_finite_variety). It says: “One calls a variety locally finite if every finitely generated algebra has finite cardinality”

**Sources:**

- [Stanley Burris and H. P. Sankappanavar, A Course in Universal Algebra, Chapter II, Theorems 10.15–10.16](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra2012.pdf)

### Free Steiner generators extend bijections

**Remember:** Extend a bijection and its inverse from the free generators.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A Steiner quasigroup has a commutative product with xx = x and x(xy) = y. A generating set is free if every assignment to any Steiner quasigroup extends uniquely to a map that preserves multiplication.

**Problem.** Every bijection between free generating sets of Steiner quasigroups extends to an isomorphism.

**How the definition helps.** The extension property gives maps in both directions from the bijection and its inverse. Our own check uses uniqueness twice. Each composite fixes every generator, so it equals the identity. With a construction by expressions, the work lies in proving that substitution gives a unique map preserving multiplication.

**Paper or page:** [Endomorphisms of free Steiner quasigroups](https://arxiv.org/abs/2412.06055v3). It says: “In fact, every bijection between A and B can be extended to an isomorphism between M and N.”

**Sources:**

- [Silvia Barbina, Enrique Casanovas. Endomorphisms of free Steiner quasigroups, Corollary 2.10.](https://arxiv.org/abs/2412.06055v3)

### Pairing makes finite free bases interchangeable

**Remember:** One free generator supplies two free coordinates.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A Jónsson–Tarski algebra has a pairing operation that maps ordered pairs bijectively onto its elements. Two operations recover the coordinates of each pair. In a free algebra, each assignment of generator images extends uniquely to a map preserving the operations.

**Problem.** The free Jónsson–Tarski algebras on any two nonempty finite sets are isomorphic.

**How the definition helps.** Defining a free basis by arbitrary choices of images turns generator replacement into the pairing bijection (our own proof). Replace a generator by its two coordinates. Pairing recovers the old generator, and taking coordinates recovers both replacements. The defining property of a free algebra extends the assignments to inverse homomorphisms. This avoids building a separate correspondence between all expressions on the two bases. Repetition connects every positive finite number of generators.

**nLab:** [Jónsson-Tarski algebra](https://ncatlab.org/nlab/show/J%C3%B3nsson-Tarski+algebra). It says: “Any two Jónsson-Tarski algebras freely generated from finite non empty sets are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Terminating decomposition makes magmas free

**Remember:** Split uniquely and stop, and you recover the whole tree.

*Rules out counterexamples.* MSC 08B20 (Free algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A magma is a set with a binary operation. Call a product uniquely decomposable if its value determines both factors. Also require every element to be built in finitely many steps from elements that are not products.

**Problem.** A magma with these two properties is free on the elements that are not products. Every assignment of those elements to another magma extends uniquely to a map that preserves multiplication.

**How the definition helps.** Each element has exactly one finite decomposition tree, so evaluating that tree in the target gives the required map (our own). Any map preserving multiplication must evaluate every tree this way (our own). Unique decomposition alone allows a one-element magma with a·a = a and no starting elements (our own).

**Paper or page:** [Equidecomposable magmas](https://arxiv.org/abs/2407.17698). It says: “A magma is free iff it is initial and equidec.”

**Sources:**

- [Equidecomposable magmas](https://arxiv.org/abs/2407.17698)

### Common sections make set coequalizers work

**Remember:** A common section lets a relation change one input while holding the others fixed.

*Rules out counterexamples.* MSC 08B25 (Products, amalgamated products, and other kinds of limits and colimits). arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** Two parallel homomorphisms form a reflexive pair if some map is a right inverse to both. Their coequalizer identifies their paired outputs, and every map identifying those outputs factors uniquely through it.

**Problem.** Consider algebras defined by equations using operations with finitely many inputs. For a reflexive pair, the underlying set of its coequalizer is the set quotient identifying the paired outputs.

**How the definition helps.** The common right inverse lets a relation step change one input while holding the others fixed (our own proof). Lift each fixed input along that inverse before applying the operation. Chaining such steps shows that the generated equivalence respects every operation. Without a common right inverse, take two maps from the free monoid on x to the free monoid on a and b. Send x to a under one map and to b under the other (our own example). The set quotient identifies a and b but keeps ab and bb distinct, so multiplication fails on classes.

**nLab:** [cocompleteness of varieties of algebras](https://ncatlab.org/nlab/show/cocompleteness+of+varieties+of+algebras). It says: “If T is a finitary monad defined on a cocomplete cartesian closed category X, then T preserves reflexive coequalizers”

**Sources:** none listed. No primary source with a working link was found.

### Malcev terms match quotient classes

**Remember:** Three corners force the fourth, so each quotient class has a matching class.

*Makes the theorem clean to state or prove.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.RA. Level 3: graduate.

**Definition.** A subdirect product is a subalgebra of a product whose projections reach both factors. A Malcev variety is a class defined by equations with an expression p satisfying p(x,x,z) = z and p(x,z,z) = x.

**Problem.** Take a subdirect product of two algebras in a Malcev variety. Its pairs match exactly the classes that correspond under an isomorphism between quotients of the two factors.

**How the definition helps.** The Malcev equations fill a rectangle from three corners, forcing the subdirect product to match whole classes (our own proof). Apply p to (a,u), (b,u), and (b,v) to obtain (a,v). On each side, relate two elements if they share a partner. The rectangle rule makes this an equivalence and gives each class exactly one partner class. Closure under the operations ensures they pass to the classes and respect the matching. Thus the matching is an isomorphism.

**Wikipedia:** [Goursat's lemma](https://en.wikipedia.org/wiki/Goursat%27s_lemma). It says: “It can be stated more generally in a Goursat variety (and consequently it also holds in any Maltsev variety)”

**Sources:** none listed. No primary source with a working link was found.

### One pair detects subdirect irreducibility

**Remember:** If every proper quotient merges the same pair, no product of them can separate it.

*True by definition.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.LO. Level 3: graduate.

**Definition.** A congruence is an equivalence relation that every operation respects. A nontrivial algebra is subdirectly irreducible if every embedding into a product that projects onto each factor has an injective projection. Equivalently, it has a least congruence strictly larger than equality.

**Problem.** A nontrivial algebra is subdirectly irreducible exactly when some distinct pair merges under every noninjective quotient map.

**How the definition helps.** Any distinct pair in the least such congruence merges in every noninjective quotient. Conversely, a pair that always merges generates the least such congruence. Our own explanation connects this test to products. The map into a product of quotients is injective exactly when every distinct pair stays distinct in some coordinate.

**Wikipedia:** [Subdirectly irreducible algebra](https://en.wikipedia.org/wiki/Subdirectly_irreducible_algebra). It says: “two elements that are identified by every proper quotient”

**Sources:**

- [Garrett Birkhoff. Subdirect unions in universal algebra (1944).](https://doi.org/10.1090/S0002-9904-1944-08235-9)

### Subdirect factors detect equations

**Remember:** To test an equation, test the algebras that cannot split further.

*Makes the theorem clean to state or prove.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.LO. Level 3: graduate.

**Definition.** A subdirect product is a subalgebra of a product that maps onto each factor. A nontrivial algebra is subdirectly irreducible if every such representation has an injective coordinate map.

**Problem.** An equation holds throughout a variety, a class defined by equations, if it holds in all its subdirectly irreducible members.

**How the definition helps.** The coordinate maps detect equality because the algebra embeds in their product. Birkhoff’s theorem supplies such an embedding with subdirectly irreducible quotients as factors. Our own deduction uses the fact that quotients preserve equations, so each factor belongs to the variety. If two expressions agree in every factor, their values agree in the embedded algebra.

**Wikipedia:** [Subdirectly irreducible algebra](https://en.wikipedia.org/wiki/Subdirectly_irreducible_algebra). It says: “every algebra is subdirectly representable by its subdirectly irreducible quotients.”

**Sources:**

- [Garrett Birkhoff. Subdirect unions in universal algebra (1944).](https://doi.org/10.1090/S0002-9904-1944-08235-9)

### Free retracts lift through surjections

**Remember:** Lift the free generators, then restrict along the embedding.

*True by definition.* MSC 08B30 (Injectives, projectives). arXiv math.LO. Level 3: graduate.

**Definition.** A variety consists of algebras defined by equations. A free algebra on generators extends any assignment of those generators uniquely to a map preserving operations. A retract embeds in another algebra by a map with a left inverse, both preserving operations. Projectivity means that every map to a quotient lifts through its quotient map, with both maps preserving operations.

**Problem.** In a variety of algebras, every retract of a free algebra lifts maps through surjective homomorphisms.

**How the definition helps.** Free generators can be lifted one at a time, and the retract transfers that lift to the original algebra (our own). The reverse direction takes a free algebra on the underlying set and lifts the identity through its natural surjection (our own). The work moves to constructing the free algebra and finding a retraction (our own).

**Paper or page:** [Generalization of terms via universal algebra](https://arxiv.org/abs/2502.18259). It says: “If a class of algebras K contains all its free algebras, an algebra P is projective in K if and only if it is a retract of a free algebra in K.”

**Sources:** none listed. No primary source with a working link was found.

### Regular epimorphisms recover algebra surjections

**Remember:** A universal quotient cannot have a proper image.

*Rules out counterexamples.* MSC 08C05 (Categories of algebras). arXiv math.RA. Level 3: graduate.

**Definition.** An epimorphism is a map e such that ge = he implies g = h. A regular epimorphism is a quotient map specified by two parallel maps u and v. It satisfies eu = ev, and every map f with fu = fv factors uniquely through e. A variety is a class of algebras specified by equations.

**Problem.** In every variety of algebras, a homomorphism is surjective exactly when it is a regular epimorphism.

**How the definition helps.** The unique factorization through the quotient forces every target element into the image (our own proof). Factor e through its image. The map to the image already equalizes u and v, so it factors through e. Uniqueness makes the resulting map a right inverse to the image inclusion. Conversely, a surjection is the universal quotient identifying all pairs with equal images. The ring inclusion ℤ → ℚ shows why an ordinary epimorphism does not suffice.

**nLab:** [regular epimorphism](https://ncatlab.org/nlab/show/regular+epimorphism), [epimorphism](https://ncatlab.org/nlab/show/epimorphism). It says: “the inclusion ℤ → ℚ is an epimorphism of rings, and of commutative rings.”

**Sources:** none listed. No primary source with a working link was found.

### Relative congruences keep quotients torsion-free

**Remember:** Intersect the kernels as usual, but keep the new quotient in the class.

*Rules out counterexamples.* MSC 08C15 (Quasivarieties). arXiv math.LO. Level 3: graduate.

**Definition.** A congruence is an equivalence relation compatible with all operations. A quasivariety is a class of algebras defined by implications from finite lists of equations to single equations. A congruence is relative to the class when its quotient lies in that class.

**Problem.** Relative congruences are closed under intersections. Their least upper bounds may differ from ordinary congruence joins.

**How the definition helps.** The quotient by an intersection embeds in the product of the quotients, and the class is closed under subalgebras and products (our own). Consider torsion-free abelian groups, where no nonzero element has finite order (our own). In ℤ² the subgroups generated separately by (1,0) and (1,2) both have quotient ℤ (our own). Their sum contains exactly the pairs with even second coordinate, giving a quotient of order two (our own). Thus the ordinary least upper bound fails the quotient test (our own).

**Wikipedia:** [Quasivariety](https://en.wikipedia.org/wiki/Quasivariety). It says: “K contains a trivial algebra and is closed under isomorphisms, subalgebras, direct products, and ultraproducts.”

**Sources:** none listed. No primary source with a working link was found.

### Clone inclusions detect formula definability

**Remember:** Witnesses combine by the operation that combines the visible entries.

*Makes the theorem clean to state or prove.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv math.LO. Level 4: research.

**Definition.** A primitive positive formula uses relation tests, equality, conjunction and existential quantifiers. Allow a false formula for the empty relation. A polymorphism is an operation that preserves each relation when applied coordinate by coordinate. A clone collects these operations, including projections and all composites.

**Problem.** Take two relational structures on the same finite set. The first defines every relation of the second by primitive positive formulas exactly when its polymorphisms preserve those relations.

**How the definition helps.** Collecting all preserving operations turns comparison of two formula languages into inclusion of two sets of operations (our own explanation). Equality and conjunction preserve compatibility with an operation. For an existential quantifier, apply the operation to the witnesses as well as the visible inputs (our own explanation). The finite preservation theorem supplies the converse.

**Paper or page:** [Mal'cev clones over a three-element set up to minor-equivalence](https://arxiv.org/abs/2508.06918v1). It says: “Then A pp-defines B if and only if Pol(A) ⊆ Pol(B).”

**Sources:**

- [David Geiger, Closed systems of functions and predicates](https://doi.org/10.2140/pjm.1968.27.95)

### Alternating polymorphisms characterize affine integer programming

**Remember:** Integer solutions work exactly when alternating sums exist as polymorphisms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** An L-ary polymorphism from H to H̃ is a map from Hᴸ to H̃ that keeps every relation, coordinate by coordinate. AIP, the affine integer programming relaxation, accepts an instance when a linear system over the integers, obtained from it, has a solution. A polymorphism of odd arity L is alternating when permuting odd positions among themselves, or even positions among themselves, does not change its value. Also, its value does not depend on y when the last two inputs are both y.

**Problem.** Decide for which promise templates the affine integer relaxation is a correct algorithm. A promise template (H, H̃) is a pair of structures with a homomorphism from H to H̃. AIP solves PCSP(H, H̃) when it accepts every input that maps to H and rejects every input that does not map to H̃.

**How the definition helps.** Alternating polymorphisms copy the alternating sum x₁ − x₂ + x₃ − …, which is how integer solutions of linear systems combine (our own). So the definition makes the correctness of AIP a property of the polymorphisms. The theorem is due to Barto, Bulín, Krokhin and Opršal, as the paper's citation shows. To use it, one must still find or exclude such polymorphisms for each template. That step is hard for approximate graph colouring, which the paper studies.

**Paper or page:** [Approximate Graph Colouring and Crystals](https://arxiv.org/abs/2210.08293). It says: “AIP solves PCSP(H, H̃) if and only if there exist L-ary alternating polymorphisms from H to H̃ for any odd L ≥ 3.”

**Sources:**

- [Lorenzo Ciardo, Stanislav Živný, Approximate Graph Colouring and Crystals, arXiv:2210.08293 (2022)](https://arxiv.org/abs/2210.08293)
- [Libor Barto, Jakub Bulín, Andrei Krokhin, Jakub Opršal, Algebraic Approach to Promise Constraint Satisfaction, Journal of the ACM (2021)](https://doi.org/10.1145/3457606)

### Cyclic polymorphisms decide the CSP dichotomy

**Remember:** One cyclic polymorphism decides between polynomial time and NP-hardness.

*Makes the theorem clean to state or prove.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** A polymorphism of a structure A is a map from Aⁿ to A that preserves every relation of A, coordinate by coordinate. Pol(A) is the set of all polymorphisms. A polymorphism f is cyclic when f(x₁, x₂, …, xₙ) = f(x₂, …, xₙ, x₁) for all inputs.

**Problem.** Classify every finite-template constraint satisfaction problem as solvable in polynomial time or NP-hard. Feder and Vardi conjectured this dichotomy.

**How the definition helps.** Polymorphisms turn a question about all possible instances into a question about one algebraic object. So the dichotomy is the presence or absence of a single kind of operation. The same paper uses this form as a tool. For a group G, the problem Eqn(G) of solving equations over G has such a polymorphism exactly when G is Abelian (Theorem 9). With the dichotomy, this gives the Goldmann–Russell theorem that equations over a finite group are tractable exactly for Abelian groups (our own link). What stays hard is the dichotomy itself, which needed long proofs by Bulatov and by Zhuk. The step to cyclic polymorphisms uses work of Barto and Kozik (our own remark).

**Paper or page:** [Solving promise equations over monoids and groups](https://arxiv.org/abs/2402.08434), [Solving promise equations over monoids and groups](https://arxiv.org/abs/2402.08434). It says: “Let A be a finite relational structure. Then CSP(A) is tractable if Pol(A) contains a cyclic polymorphism of arity at least 2. Otherwise CSP(A) is NP-hard.”

**Sources:**

- [Alberto Larrauri, Stanislav Živný, Solving promise equations over monoids and groups, ACM Transactions on Computational Logic 26(1) (2024), arXiv:2402.08434](https://arxiv.org/abs/2402.08434)
- [Dmitriy Zhuk, A Proof of the CSP Dichotomy Conjecture, Journal of the ACM (2020)](https://doi.org/10.1145/3402029)
- [Mikael Goldmann, Alexander Russell, The Complexity of Solving Equations over Finite Groups, Information and Computation (2002)](https://doi.org/10.1006/inco.2002.3173)

### Minion homomorphisms are exactly gadget reductions

**Remember:** Polymorphisms that map well mean problems that reduce well.

*Makes the theorem clean to state or prove.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** A promise problem PCSP(A, A′) gets an input that maps into A, and asks for a map into the weaker A′. Pol(A, A′) is the set of maps from Aⁿ to A′ that send relations of A to relations of A′. A minion is a family of such sets closed under minors, which rename, merge or add dummy coordinates. A minion homomorphism is a map between minions that respects arity and commutes with minors.

**Problem.** Find an algebraic test for when one promise constraint problem reduces to another. Promise problems include approximate graph colouring, such as colouring a 3-colourable graph with 5 colours.

**How the definition helps.** For promise problems the polymorphisms do not compose, so they do not form a clone, a set of operations closed under composition (our own). Minions keep only the operation that survives, namely taking minors, and that is exactly enough to state the theorem (our own). With this definition, gadget reductions and minion homomorphisms are the same thing, as the quoted theorem states. The theorem is due to Barto, Bulín, Krokhin and Opršal, the second source (our own attribution). Hardness proofs for approximate colouring then become constructions of minion homomorphisms into simple minions such as projections (our own summary). Building those homomorphisms for specific templates stays hard (our own remark).

**Paper or page:** [An invitation to the promise constraint satisfaction problem](https://arxiv.org/abs/2208.13538). It says: “the following two statements are equivalent: PCSP(A, A′) is reducible to PCSP(B, B′) by a gadget reduction (and hence in log-space), there is a minion homomorphism Pol(B, B′) → Pol(A, A′).”

**Sources:**

- [Andrei Krokhin, Jakub Opršal, An invitation to the promise constraint satisfaction problem, ACM SIGLOG News (2022)](https://doi.org/10.1145/3559736.3559740)
- [Libor Barto, Jakub Bulín, Andrei Krokhin, Jakub Opršal, Algebraic Approach to Promise Constraint Satisfaction, Journal of the ACM (2021)](https://doi.org/10.1145/3457606)

### Named constants force idempotent polymorphisms

**Remember:** Preserving each singleton forces every constant tuple to return its entry.

*Rules out counterexamples.* MSC 08A70 (Applications of universal algebra in computer science). arXiv math.LO. Level 4: research.

**Definition.** A homomorphism between relational structures sends each related tuple to a related tuple. A finite core is a smallest substructure admitting homomorphisms both to and from the original structure. Name each core element a by adding the unary relation {a}. A polymorphism takes tuples from any one relation and combines them coordinate by coordinate into another tuple of that relation.

**Problem.** Naming all elements of a finite core forces each polymorphism f to satisfy f(a,…,a) = a. For a fixed finite relational signature, this preserves the constraint problem up to polynomial-time reductions in both directions.

**How the definition helps.** Preserving the singleton {a} forces f(a,…,a) to belong to {a} (our own explanation). For example, swapping two elements preserves equality but fails to preserve either singleton (our own example). The constraint problem asks whether an input structure admits a homomorphism to the fixed structure. The cited core theorem supplies the reductions.

**Paper or page:** [Mal'cev clones over a three-element set up to minor-equivalence](https://arxiv.org/abs/2508.06918v1). It says: “For a finite relational structure A, let A′ denote its core, extended by all constants. Then A pp-constructs A′ and vice-versa.”

**Sources:** none listed. No primary source with a working link was found.

### Constant terms select unique idempotents

**Remember:** A constant expression that fixes each idempotent leaves room for just one.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 4: research.

**Definition.** A variety is a class of algebras defined by equations. Work with nonempty algebras whose operations all take at least one input. An element is idempotent if each operation returns it whenever it fills every input. A variety is polarized if one expression in one variable has constant, idempotent value in every member.

**Problem.** A variety of this kind is polarized exactly when every member has exactly one idempotent.

**How the definition helps.** One expression names an idempotent in every algebra at once. Our own argument evaluates it at any idempotent, where every expression returns its input. Constancy then gives uniqueness. Conversely, in the free algebra on one generator, some expression represents its unique idempotent. Freeness means that this expression has idempotent value under every assignment in every member. Uniqueness in each member makes its value constant.

**Paper or page:** [Mal'tsev products of varieties, I](https://arxiv.org/abs/2404.08841v1). It says: “Each algebra in V has precisely one idempotent if and only if the variety V is polarized.”

**Sources:**

- [Tomasz Penza, Anna B. Romanowska. Mal'tsev products of varieties, I, Corollary 1.3.](https://arxiv.org/abs/2404.08841v1)

### Filters in residuated lattices are ideals of subtractive varieties

**Remember:** Many filter theorems are the general ideal theory of subtractive varieties.

*True by definition. Confidence: medium.* MSC 08B05 (Equational logic, Mal'tsev conditions), 08A30, 06F05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** Let V be a variety of algebras with a constant 0. V is subtractive if it has a binary term s with s(x, x) = 0 and s(x, 0) = x. In a subtractive variety, Ursini's ideals are exactly the classes 0/θ: the elements congruent to 0 under some congruence θ. In residuated lattices the constant is 1, and these ideals are the filters.

**Problem.** A residuated lattice is a lattice with a product and a matching implication. Many papers define new kinds of filters on residuated lattices and similar algebras. They then prove lattice and correspondence properties for each kind separately.

**How the definition helps.** If the filters are the ideals of a subtractive variety, the general theory of such varieties gives their properties at once. The quoted theorem shows that the filters of residuated lattices with extra operators are 1-ideals in this sense. The data set also states that a variety is subtractive exactly when its congruences permute at 0. In a subtractive variety, θ ↦ 0/θ is a complete lattice homomorphism from congruences onto ideals, and the ideals form a modular lattice. So each new kind of filter inherits these lattice properties without a new proof (our own summary of the title's claim). Our own example: in residuated lattices s(x, y) = y → x works, since x → x = 1 and 1 → x = x.

**Paper or page:** [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022), [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022). It says: “If A is a commutative integral residuated lattice with normal operators, then the 1-ideals (which we may call the filters) of A are exactly the filters of the commutative residuated lattice reduct that are closed under fλ”

**Sources:**

- [Paolo Aglianò, Why most papers on filters are really trivial (including this one), arXiv:2309.15022 (2023)](https://arxiv.org/abs/2309.15022)

### Loop identities force relation loops

**Remember:** Apply the same expression to both ends of the edges.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.LO. Level 4: research.

**Definition.** A loop condition asks for one expression that takes equal values on two specified lists of variables under every assignment. Its directed graph has an edge between corresponding variables, pointing from left to right. A graph on an algebra is compatible if applying any operation to edges coordinate by coordinate gives another edge.

**Problem.** A loop condition holds throughout a variety, a class defined by equations, exactly when the following graph test always succeeds. Map its pattern into any compatible graph on a member, sending edges to edges. Whenever such a map exists, the graph must contain an edge from a vertex to itself.

**How the definition helps.** The pattern records the inputs of the expression as edges, so the identity asks for an edge with equal endpoints. Our own forward argument applies the expression to the edges supplied by the map. Compatibility gives an edge and the identity makes it a loop. For the converse, use the free algebra on the variables, where expressions agree exactly when the variety equates them. Close the pattern edges under all operations there. A loop in that closure gives the required expression.

**Paper or page:** [Loop conditions with strongly connected graphs](https://arxiv.org/abs/1810.03177v1). It says: “For any algebra A ∈ V and any digraph G compatible with A, if there is a digraph homomorphism G꜀ → G, then G has a loop.”

**Sources:**

- [Miroslav Olšák. Loop conditions with strongly connected graphs, Proposition 2.2.](https://arxiv.org/abs/1810.03177v1)

### Malcev theories are exactly those whose simplicial algebras are Kan

**Remember:** A Malcev term fills horns, so simplicial algebras are Kan.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions), 18N50. arXiv math.AT, math.RA. Level 4: research.

**Definition.** An algebraic theory is a list of operations and equations, like the theory of groups. It is Malcev when it has a term p(x,y,z) with p(x,x,y) = y and p(x,y,y) = x. Groups have p(x,y,z) = x y⁻¹ z. A Kan complex is a simplicial set in which every horn has a filler.

**Problem.** Simplicial groups are always Kan complexes, by a classical theorem of Moore. Which algebraic theories share this property?

**How the definition helps.** The Malcev term lets one build horn fillers by a formula (our own summary). So every simplicial algebra of the theory is a Kan complex. The corollary also gives the converse, so the Malcev condition is exactly right. The paper adds that the fillers can be chosen in a uniform, effective way. Moore's theorem for simplicial groups is a special case (our own).

**Paper or page:** [Examples and cofibrant generation of effective Kan fibrations](https://arxiv.org/abs/2402.10568). It says: “Let 𝒯 be an algebraic theory. The following are equivalent: (i) 𝒯 is a Malcev theory. … (iii) All simplicial algebras of 𝒯 are Kan complexes.”

**Sources:**

- [Benno van den Berg, Freek Geerligs, Examples and cofibrant generation of effective Kan fibrations, arXiv:2402.10568 (2024)](https://arxiv.org/abs/2402.10568)

### Size bounds give rewriting tables

**Remember:** Bound the generated algebras and put their common term operations in a table.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.LO. Level 4: research.

**Definition.** A pseudovariety is a class of finite algebras with the same operations, closed under quotients, subalgebras and finite products. Uniform local finiteness bounds the size of every subalgebra generated by k elements by a number depending only on k.

**Problem.** Fix a positive number of variables and a uniformly locally finite pseudovariety with finitely many basic operations of finite arity. A finite table decides whether two expressions agree throughout the class.

**How the definition helps.** The size bound leaves only finitely many generated algebras with a marked generating tuple, up to isomorphism (our own). Evaluate each expression on all these tuples and choose one representative expression for each resulting list of values (our own). Tabulate the result of each basic operation on the representatives (our own). Reading expressions from the variables upwards now gives identical representatives exactly when the identity holds (our own).

**Paper or page:** [Finite model theory for pseudovarieties and universal algebra: preservation, definability and complexity](https://arxiv.org/abs/2212.02653). It says: “for every term t(x⃗) there is a unique i ≤ ℓ such that K ⊨ t(x⃗) ≈ uᵢ(x⃗)”

**Sources:**

- [Finite model theory for pseudovarieties and universal algebra: preservation, definability and complexity](https://arxiv.org/abs/2212.02653)

### Absorbing polynomials make commutators symmetric

**Remember:** Reorder the variables and the same pairs still generate the commutator.

*True by definition.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 4: research.

**Definition.** A congruence is an equivalence relation respecting all operations. A polynomial uses the operations and fixed elements as parameters. It absorbs a tuple a if fixing any input at its entry in a forces the output to equal its value at a. A Malcev term is an expression p satisfying p(x,x,y) = y and p(x,y,y) = x.

**Problem.** In an algebra with a Malcev term, permuting a list of congruences leaves its higher commutator unchanged.

**How the definition helps.** The absorbing-polynomial description makes symmetry visible because each input obeys the same rule (our own proof). For a list of k congruences, take tuples a and b whose entries in each position satisfy the corresponding congruence. Form every pair (f(a),f(b)) for k-input polynomials f absorbing a. Theorem 7 identifies the higher commutator with the least congruence containing these pairs. It carries the work of proving agreement with the usual definition, which tests a cube of evaluations in one distinguished direction. Permuting the inputs and the congruences together leaves precisely the same pairs.

**Paper or page:** [CSAT and CEQV for nilpotent Maltsev algebras of Fitting length &gt; 2](https://arxiv.org/abs/2105.00689v2). It says: “Then \[α₁,…,αₖ\] is generated as a congruence by the set”

**Sources:**

- [Michael Kompatscher, CSAT and CEQV for nilpotent Maltsev algebras of Fitting length &gt; 2, Theorem 7](https://arxiv.org/abs/2105.00689v2)

### Distributivity bounds irreducible factor sizes

**Remember:** Distributivity keeps irreducible factors within the size of the finite generators.

*Rules out counterexamples.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.RA. Level 4: research.

**Definition.** A subdirect product is a subalgebra of a product that projects onto every factor. A nontrivial algebra is subdirectly irreducible if every such representation has a projection that is also injective. A variety consists of all algebras satisfying specified equations. It is congruence-distributive when intersection distributes over the least upper bound of equivalence relations respecting all operations.

**Problem.** Suppose finitely many finite algebras generate a congruence-distributive variety. Each subdirectly irreducible member has at most as many elements as the largest generator.

**How the definition helps.** Distributivity lets Jónsson’s lemma bound each irreducible member by a single generator. For a finite list of finite generators, the lemma places each such member among the quotients of subalgebras of those generators. Neither taking a subalgebra nor taking a quotient increases size. Without distributivity, even one finite generator can have arbitrarily large subdirectly irreducible algebras in its variety.

**Wikipedia:** [Subdirectly irreducible algebra](https://en.wikipedia.org/wiki/Subdirectly_irreducible_algebra). It says: “By Jónsson's Lemma, subdirectly irreducible algebras of a congruence-distributive variety generated by a finite set of finite algebras are no larger than the generating algebras”

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “Suppose that K is a class of algebras such that V(K) = V is congruence distributive”

**Sources:**

- [Bjarni Jónsson, Algebras whose congruence lattices are distributive](https://doi.org/10.7146/math.scand.a-10850)

### Equational Noetherianity yields separating maps

**Remember:** Reduce the whole diagram to finite equations while keeping the pair distinct.

*Rules out counterexamples.* MSC 08C15 (Quasivarieties), 08A45. arXiv math.RA. Level 4: research.

**Definition.** Fix a class K of algebras with the same operations. Call K equationally Noetherian if each system of equations in finitely many variables has a finite subsystem with identical solutions throughout K. Its quasivariety consists of the algebras satisfying every conditional equation valid throughout K. A conditional equation says one equation follows whenever finitely many given equations hold.

**Problem.** Let K be an equationally Noetherian class in one fixed signature. Every finitely generated member of its quasivariety embeds into a product of members of K.

**How the definition helps.** The finite subsystem lets one conditional equation test whether two elements must coincide (our own proof). Write down every equation true of a chosen finite generating tuple. Replace that system by a finite subsystem with the same solutions throughout K. If every solution in K equated two chosen terms, the corresponding conditional equation would hold throughout the quasivariety. Thus distinct elements have distinct images under some homomorphism to a member of K. Taking all these maps together gives the embedding.

**Paper or page:** [Coherent Conditions: Algebraic Geometry for Arbitrary Classes of Algebras](https://arxiv.org/abs/2510.23647v1). It says: “A is separated by K”

**Sources:**

- [K. R. van Nispen, Coherent Conditions: Algebraic Geometry for Arbitrary Classes of Algebras, Theorem 4.6](https://arxiv.org/abs/2510.23647v1)

### Free algebras give structural cores

**Remember:** Generate from the free algebra and keep the same free algebra.

*True by definition.* MSC 08C15 (Quasivarieties). arXiv math.LO. Level 4: research.

**Definition.** A quasivariety is a class of algebras defined by implications between finite lists of equations and single equations. In its free algebra, every assignment of the generators into a member extends uniquely to a map preserving the operations. The quasivariety is structurally complete if it is the smallest quasivariety containing its free algebra on countably infinitely many generators.

**Problem.** The quasivariety generated by the countably generated free algebra of any quasivariety is structurally complete.

**How the definition helps.** Our own proof uses the same free algebra twice. It belongs to the smaller quasivariety it generates, and assignments into that class still extend uniquely. Thus it remains free there and generates the whole smaller class. The characterization theorem identifies this generation test with minimality among quasivarieties having the same equations.

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “is structurally complete and it is the structural core of Q.”

**Sources:**

- [Paolo Aglianó, Alex Citkin. Structural completeness in quasivarieties, Corollary 3.2.](https://arxiv.org/abs/2401.02754v1)
