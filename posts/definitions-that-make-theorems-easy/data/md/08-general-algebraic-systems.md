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

**Remember:** An equation may require other equations as hypotheses.

*Makes the theorem clean to state or prove.* MSC 08C15 (Quasivarieties). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A quasi-identity requires one equation to hold for every assignment satisfying a specified finite list of equations.

**Problem.** Cancellative monoids form a quasivariety, a class defined by quasi-identities. They do not form a variety, a class defined by ordinary identities.

**How the definition helps.** Our own example expresses cancellation by ax = ay ⇒ x = y and xa = ya ⇒ x = y. Identities pass to quotients. The additive nonnegative integers map onto {0,1} under maximum by sending positive integers to 1 and zero to 0. The source cancels, while max(1,0) = max(1,1) in the target.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “However, they do form a quasivariety as the implication defining the cancellation property is an example of a quasi-identity.”

**Sources:** none listed. No primary source with a working link was found.

### Torsion-free groups need quasi-identities

**Remember:** An implication can rule out torsion without demanding closure under quotients.

*Makes the theorem clean to state or prove.* MSC 08C15 (Quasivarieties), 03C05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A quasi-identity requires an equation to hold for every assignment satisfying a specified finite list of equations. A quasivariety is a class defined by quasi-identities, and a variety is a class defined by identities.

**Problem.** Torsion-free groups form a quasivariety but not a variety.

**How the definition helps.** Our own argument uses xⁿ = 1 ⇒ x = 1 for each integer n ≥ 2. These implications exclude exactly the nonidentity elements of finite order. Identities pass to quotients, but the torsion-free additive integers have a quotient of order two.

**Wikipedia:** [Quasivariety](https://en.wikipedia.org/wiki/Quasivariety). It says: “Every variety is a quasivariety by virtue of an equation being a quasi-identity for which n = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Finitary closure makes subalgebra lattices algebraic

**Remember:** Finite generators give the compact elements of the subalgebra lattice.

*True by definition.* MSC 08A30 (Subalgebras, congruence relations), 06B23. arXiv math.RA. Level 3: graduate.

**Definition.** A closure operator c on subsets is finitary if c(A) equals the union of c(F) over all finite subsets F of A. A lattice element is compact if every join above it has a finite subjoin above it.

**Problem.** The subalgebras of a finitary algebra form an algebraic lattice when all subsets closed under its operations count as subalgebras. Its compact elements are exactly the finitely generated subalgebras.

**How the definition helps.** In our own argument, every generated element uses only finitely many inputs, so generation is finitary. If a join contains finitely many generators, finitely many joined subalgebras supply all inputs needed to generate them. Thus finitely generated subalgebras are compact. Every subalgebra is the join of its finitely generated parts, so compactness forces finitely many parts to suffice.

**Wikipedia:** [Closure operator](https://en.wikipedia.org/wiki/Closure_operator). It says: “Given a finitary closure operator on a set, the closures of finite sets are exactly the compact elements of the set C of closed sets. It follows that C is an algebraic poset.”

**Paper or page:** [Image of Directed Suprema Preserving Closure Operator is Algebraic Lattice](https://proofwiki.org/wiki/Image_of_Directed_Suprema_Preserving_Closure_Operator_is_Algebraic_Lattice). It says: “Let c: S → S be a closure operator that preserves directed suprema.”

**Sources:**

- [Garrett Birkhoff and Orrin Frink, Representations of lattices by sets, Transactions of the American Mathematical Society (1948)](https://doi.org/10.1090/S0002-9947-1948-0027263-2)

### Finite paths compute congruence joins

**Remember:** Chain the links first and apply operations a coordinate at a time.

*True by definition.* MSC 08A30 (Subalgebras, congruence relations). arXiv math.RA. Level 3: graduate.

**Definition.** A congruence is an equivalence relation that respects each algebra operation. The join of several congruences is the least congruence containing them all. The path description connects two elements when a finite sequence joins them using steps from the given congruences.

**Problem.** If each operation takes finitely many inputs, the path description gives the join of any family of congruences.

**How the definition helps.** In our own proof, every equivalence containing the given congruences contains every finite path. Empty paths, reversal and concatenation give reflexivity, symmetry and transitivity. Change one input at a time along its path, keeping the others fixed. Compatibility gives an output path at each input, and finitely many such paths concatenate to a finite path.

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

**Definition.** For fixed n ≥ 1, a natural n-input operation chooses a function f<sub>A</sub> on n-tuples in each algebra A of a variety. For every homomorphism h from A to B and every tuple a, it requires h(f<sub>A</sub>(a)) = f<sub>B</sub>(h(a)), with h acting coordinatewise.

**Problem.** In a variety, every natural n-input operation is given by a term. The term is unique up to the equations that hold in the variety.

**How the definition helps.** In our own proof, evaluate the operation at the generators of the free algebra on n generators. Its value is a term modulo the identities of the variety. Every input tuple determines a homomorphism from this free algebra, so naturality gives the same term on every tuple. Agreement at the free generators gives uniqueness modulo identities.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “may be identified with elements of F(n), the free T-algebra on n generators”

**Sources:** none listed. No primary source with a working link was found.

### Majority operations reconstruct from pairs

**Remember:** Three witnesses that miss different coordinates recover the full tuple.

*Rules out counterexamples.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv cs.CC, math.LO. Level 3: graduate.

**Definition.** A majority operation takes three inputs and returns the repeated value whenever two agree. An operation preserves a relation if applying it coordinate by coordinate to tuples in the relation gives another tuple in the relation.

**Problem.** Consider a relation on tuples of fixed finite length at least two. If a majority operation preserves it, a tuple belongs exactly when each coordinate pair occurs in the corresponding projection.

**How the definition helps.** In our own proof, induct on arity, starting at two, where the projection is the relation itself. Projections preserve majority closure, so omitting each of three different coordinates gives three witnesses by induction. Each coordinate matches at least twice, so their majority gives the required tuple. Even-parity triples have all pair projections but exclude 111, the majority of 110, 101 and 011.

**Paper or page:** [A polynomial-time algorithm for median-closed semilinear constraints](https://arxiv.org/abs/1808.10068v2). It says: “Let Γ be a structure with domain D and a majority polymorphism. Then every relation in Γ is 2-decomposable.”

**Sources:**

- [Manuel Bodirsky, Marcello Mamino. A polynomial-time algorithm for median-closed semilinear constraints, Theorem 2.1.](https://arxiv.org/abs/1808.10068v2)

### Term equivalence preserves subalgebras, congruences and endomorphisms

**Remember:** Changing the basic operations changes nothing if they generate the same term operations.

*True by definition.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras), 08A30. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** Two algebras on the same set are term equivalent if each basic operation of either algebra is a term operation of the other. Terms use variables and basic operations, including named constants.

**Problem.** Term equivalent algebras have the same subalgebras, congruences and endomorphisms. A congruence is an equivalence relation respected by the operations, and an endomorphism is a map from the algebra to itself that preserves them.

**How the definition helps.** In our own argument, closure under the basic operations extends by composition to closure under every term. The same induction applies to compatibility of equivalence relations and preservation by self-maps. Term equivalence therefore gives the same three collections for both algebras.

**Wikipedia:** [Clone (algebra)](https://en.wikipedia.org/wiki/Clone_%28algebra%29), [Functional completeness](https://en.wikipedia.org/wiki/Functional_completeness). It says: “If A and B are algebras with the same carrier such that every basic function of A is a term function in B and vice versa, then A and B have the same clone.”

**Sources:** none listed. No primary source with a working link was found.

### Matching endpoints lets graph limits carry composition

**Remember:** Match endpoints before composing.

*Makes the theorem clean to state or prove.* MSC 08A55 (Partial algebras). arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** An essentially algebraic theory permits operations on inputs that satisfy specified equations. For categories, composition is defined on pairs for which the target of the first equals the source of the second.

**Problem.** Every diagram of small categories indexed by a small category has a limit. Its graph consists of the compatible tuples of objects and arrows.

**How the definition helps.** In our own proof, two compatible arrow tuples compose precisely when their endpoints match in every coordinate. Coordinatewise composition gives a compatible tuple because all diagram functors preserve composition. Identities and category laws hold coordinatewise. The unique map into the graph limit preserves these operations coordinatewise, giving the required limit functor.

**nLab:** [essentially algebraic theory](https://ncatlab.org/nlab/show/essentially+algebraic+theory). It says: “As the domains of the operations are given by the solutions to equations, they may be understood using the notion of equalizer.”

**Sources:** none listed. No primary source with a working link was found.

### Pp-definitions are reductions between constraint problems

**Remember:** A pp-formula is a gadget, so pp-definable means reducible.

*True by definition. Confidence: medium.* MSC 08A70 (Applications of universal algebra in computer science), 03C13, 68Q25. arXiv cs.CC, cs.LO. Level 3: graduate.

**Definition.** For fixed finite relational signatures, a primitive positive formula uses atomic relations, equality, conjunction and existential quantifiers. A promise template (A,B) pp-defines (A′,B′) on the same respective domains if each new relation has one such formula. On A the formula defines the relation of A′, and on B it defines the corresponding relation of B′.

**Problem.** If a template (A, B) pp-defines (A′, B′), then PCSP(A′, B′) reduces to PCSP(A, B) in logarithmic space. In particular, adding a pp-definable relation to A does not make CSP(A) harder.

**How the definition helps.** In our own reduction, replace each new constraint by its defining conjunction, using fresh variables for its existential witnesses. Equalities identify variables, which logarithmic-space undirected connectivity can implement. Witnesses extend assignments to each gadget, and restricting a gadget solution recovers the original assignment on either template side. The fixed formulas let a logarithmic-space transducer enumerate the constraints.

**Paper or page:** [1-in-3 vs. Not-All-Equal: Dichotomy of a broken promise](https://arxiv.org/abs/2302.03456), [Generalisations of Matrix Partitions : Complexity and Obstructions](https://arxiv.org/abs/2107.13809). It says: “Suppose the template (A,B) pp-defines (A′, B′). Then PCSP(A′, B′) reduces to PCSP(A, B) in logarithmic space.”

**Sources:**

- [1-in-3 vs. Not-All-Equal: Dichotomy of a broken promise, arXiv:2302.03456 (2023)](https://arxiv.org/abs/2302.03456)
- [Peter Jeavons, On the algebraic structure of combinatorial problems, Theoretical Computer Science (1998)](https://doi.org/10.1016/s0304-3975(97)00230-2)

### A Mal'cev operation makes congruences permute and the congruence lattice modular

**Remember:** Cancel either repeated adjacent pair to return the remaining argument.

*True by definition.* MSC 08B05 (Equational logic, Mal'tsev conditions), 08B10. arXiv math.RA. Level 3: graduate.

**Definition.** A Mal'cev term is a ternary term t satisfying t(x,y,y) = x and t(x,x,y) = y for all x and y.

**Problem.** In a variety with a Mal'cev operation, every reflexive relation that is a subalgebra is a congruence. Any two congruences permute, and the congruence lattice of each algebra is modular.

**How the definition helps.** In our own proof, closure under t sends (x,x),(x,y),(y,y) to (y,x), giving symmetry. Likewise (x,y),(y,y),(y,z) give (x,z), proving transitivity. From x α y β z, the term gives x β t(x,y,z) α z, so congruences permute. The modularity theorem for permuting equivalence relations then gives modularity.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “If T is a Malcev theory, then the lattice of congruences Equiv(X) on any T-algebra X is a modular lattice.”

**Sources:**

- [Francis Borceux, Dominique Bourn, Mal'cev, Protomodular, Homological and Semi-Abelian Categories, Kluwer 2004](https://doi.org/10.1007/978-1-4020-1962-3)

### Equations force varieties to contain products, so fields fail

**Remember:** Equations hold in a product whenever they hold in every factor.

*True by definition.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** An identity is an equation between terms that holds for every assignment of their variables. A variety consists of all algebras of a fixed signature satisfying a specified set of identities.

**Problem.** Every variety is closed under products. Fields do not form a variety in the ring operations, even if a total inverse operation is added.

**How the definition helps.** Products evaluate terms coordinatewise, so any identity shared by the factors holds in their product. In our own example, ℚ × ℚ has two nonzero elements (1,0) and (0,1) whose product is zero. Adding a total inverse operation leaves that product unchanged.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “One direction of the equivalence mentioned above, namely that a class of algebras satisfying some set of identities must be closed under the HSP operations, follows immediately from the definitions.”

**Sources:**

- [G. Birkhoff, On the structure of abstract algebras, Mathematical Proceedings of the Cambridge Philosophical Society 31 (1935)](https://doi.org/10.1017/S0305004100013463)

### Free quotients encode equational consequences

**Remember:** Identify the assumptions, then check equality in the resulting algebra.

*True by definition.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.LO. Level 3: graduate.

**Definition.** In a quasivariety, form the free algebra on the variables. The algebra presented by given equations is its quotient by the least congruence imposing those equations while keeping the quotient in the quasivariety.

**Problem.** An equation follows from the assumptions in a quasivariety exactly when its two sides agree on the named generators in this quotient.

**How the definition helps.** In our own proof, every satisfying assignment extends to a homomorphism from the free algebra. Its kernel qualifies because its image is a subalgebra of a member of the quasivariety. The homomorphism therefore factors through the presented algebra, carrying equality there to equality under the assignment. Conversely, the quotient generators themselves form a satisfying assignment.

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “if p ≈ q is an equation in variables from X then the following are equivalent: FQ(X,Σ) ⊨ p ≈ q; Σ ⊢Q p ≈ q; (p,q) ∈ θQ(Σ).”

**Sources:**

- [Paolo Aglianó, Alex Citkin. Structural completeness in quasivarieties, Lemma 2.11.](https://arxiv.org/abs/2401.02754v1)

### Malcev terms make reflexive relations equivalences

**Remember:** The middle input cancels to reverse or join related pairs.

*Rules out counterexamples.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 3: graduate.

**Definition.** A Malcev term is a three-input expression p with p(x,x,z) = z and p(x,z,z) = x. A compatible relation is closed under applying algebra operations to its pairs coordinate by coordinate.

**Problem.** A reflexive compatible relation on an algebra with a Malcev term is an equivalence relation.

**How the definition helps.** In our own proof, apply p to (x,x), (x,y), (y,y) to obtain (y,x). Apply it to (x,y), (y,y), (y,z) to obtain (x,z). Compatibility keeps both outputs in the relation. The two-element lattice order respects meet and join but lacks symmetry, which the first calculation forces.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “If T is a Malcev theory, then any internal reflexive relation in T-Alg is an internal equivalence relation.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite powers detect finite groups

**Remember:** Factorial powers test whether every element of a finite monoid has an inverse.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 3: graduate.

**Definition.** The ω-power of an element x in a finite monoid is the eventual value of x raised to n factorial. A profinite identity can use this kind of power instead of an ordinary finite word.

**Problem.** A finite monoid is a group exactly when the ω-power of each element equals 1. Ordinary monoid identities cannot give this test.

**How the definition helps.** In our own proof, large factorials are multiples of every element order in a fixed finite group. Conversely, xᵏ = 1 for positive k gives inverse xᵏ⁻¹. An ordinary monoid identity valid in all finite cyclic groups has equal occurrence counts for each variable on both sides, by testing one generator. Such identities hold in the nongroup {0,1} under maximum, since each side uses the same variables.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “Namely, a class of finite monoids is a variety of finite monoids if and only if it can be defined by a set of profinite identities.”

**Paper or page:** [Unveiling Eilenberg-type Correspondences: Birkhoff's Theorem for (finite) Algebras + Duality](https://arxiv.org/abs/1702.02822v1). It says: “Additionally, pseudovarieties of T–algebras are in one–to–one correspondence with pseudoequational T–theories on D₀.”

**Sources:**

- [Jan Reiterman, The Birkhoff theorem for finite algebras](https://doi.org/10.1007/BF02483902)

### Distributivity rules out skew congruences

**Remember:** The two projection kernels split each congruence into separate coordinate relations.

*Rules out counterexamples. Confidence: medium.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 3: graduate.

**Definition.** A congruence is an equivalence relation that respects algebra operations. An algebra has distributive congruences when intersections distribute over joins, where a join is the least congruence containing both relations.

**Problem.** Suppose intersections distribute over joins of congruences on A × B. Then every congruence on A × B compares the two coordinates by separate congruences on A and B.

**How the definition helps.** In our own proof, let P and Q be the projection kernels, whose intersection is equality. Distributivity gives C = (C ∨ P) ∩ (C ∨ Q). By quotient correspondence, the joins impose congruences on the first and second factors respectively. Without distributivity the diagonal subgroup of ℤ/2 × ℤ/2 gives a congruence comparing coordinate sums, which separate coordinate tests cannot express.

**Paper or page:** [Cross-Relation is Congruence Relation](https://proofwiki.org/wiki/Cross-Relation_is_Congruence_Relation). It says: “The cross-relation ⊠ is a congruence relation on ⟨S₁ × S₂, ⊕⟩.”

**Sources:**

- [Grant A. Fraser and Alfred Horn, Congruence relations in direct products](https://doi.org/10.1090/S0002-9939-1970-0265258-1)

### Majority terms make congruences distributive

**Remember:** Fix the endpoints and use majority to bring the whole path into their class.

*Rules out counterexamples.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 3: graduate.

**Definition.** A majority term is a ternary term m that returns x whenever at least two inputs equal x. The join of two congruences connects pairs linked by a finite path using steps in either congruence.

**Problem.** If an algebra has a majority term, its congruences satisfy R ∩ (S ∨ T) = (R ∩ S) ∨ (R ∩ T).

**How the definition helps.** In our own proof, take an S-or-T path with R-related endpoints x and z. Replace each vertex y by m(x,y,z), which is R-related to m(x,y,x) = x. Each step keeps its original relation, and the endpoints stay fixed, giving the required path inside one R-class. Without majority, the three order-two subgroups of the Klein four-group give congruences violating distributivity.

**Wikipedia:** [Quotient (universal algebra)](https://en.wikipedia.org/wiki/Quotient_%28universal_algebra%29). It says: “In 1967 Bjarni Jónsson found the conditions for varieties having congruence lattices that are distributive”

**Sources:**

- [Stanley Burris and H. P. Sankappanavar, A Course in Universal Algebra, Chapter II, §12](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra2012.pdf)

### Closure under subalgebras and products gives free algebras

**Remember:** Take all generated models together, then keep the part generated by the common inputs.

*True by definition. Confidence: medium.* MSC 08B20 (Free algebras), 08C15. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** A free algebra on S in a class K is a member F with a map i from S to F. For every A in K, each assignment from S to A extends uniquely along i to a homomorphism from F to A.

**Problem.** Consider a nonempty class of nonempty algebras with fixed operations of finite arity. If it is closed under subalgebras, products and isomorphic copies, it has a free algebra on every nonempty set.

**How the definition helps.** In our own construction, list the S-generated members with their generating maps, up to isomorphism preserving those maps. This is a set because every element has a term representative. In their product, take the subalgebra generated by the tuples of corresponding generators. Every assignment generates a listed copy, so its projection provides an extension, uniquely determined by the generators.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “One can show that for every set S, the variety V contains a free algebra Fₛ on S.”

**Sources:**

- [G. Birkhoff, On the structure of abstract algebras, Mathematical Proceedings of the Cambridge Philosophical Society 31 (1935)](https://doi.org/10.1017/S0305004100013463)

### Finite algebras generate locally finite varieties

**Remember:** Finitely many inputs and outputs give finitely many term functions.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A variety is a class of algebras specified by equations. The variety generated by A satisfies exactly the equations valid in A. An n-input term function evaluates an expression in the operations of A at each input tuple.

**Problem.** Every finitely generated member of the variety generated by a finite algebra is finite.

**How the definition helps.** In our own proof, the free algebra on n generators identifies precisely the terms defining the same n-input function on A. Finiteness of A leaves only finitely many such functions. Every n-generated member is a quotient of this finite free algebra.

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

**How the definition helps.** The extension property of a free basis turns generator replacement into the pairing bijection (our own proof). Replace one generator by its two coordinates. Pairing recovers the old generator, and taking coordinates recovers both new ones, so the extended maps are inverse homomorphisms. Repeating this connects every positive finite number of generators.

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

**Definition.** Parallel homomorphisms f,g from A to B form a reflexive pair if they share a section. This is a homomorphism s from B to A satisfying fs = gs = id<sub>B</sub>.

**Problem.** Consider algebras defined by equations using operations with finitely many inputs. For a reflexive pair, the underlying set of its coequalizer is the set quotient identifying the paired outputs.

**How the definition helps.** In our own proof, lifting fixed inputs along s lets one paired-output step change a single input of any operation. Applying the operation upstairs gives another paired-output step downstairs, so finite chains make the generated equivalence compatible. Without a section, map a free monoid generator x to a and b respectively in the free monoid on a,b. The set quotient identifies a with b but keeps ab distinct from bb, so multiplication fails.

**nLab:** [cocompleteness of varieties of algebras](https://ncatlab.org/nlab/show/cocompleteness+of+varieties+of+algebras). It says: “If T is a finitary monad defined on a cocomplete cartesian closed category X, then T preserves reflexive coequalizers”

**Sources:** none listed. No primary source with a working link was found.

### Malcev terms match quotient classes

**Remember:** Three corners force the fourth, so each quotient class has a matching class.

*Makes the theorem clean to state or prove.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.RA. Level 3: graduate.

**Definition.** A subdirect product is a subalgebra of a product whose projections reach both factors. A Malcev variety is a class defined by equations with an expression p satisfying p(x,x,z) = z and p(x,z,z) = x.

**Problem.** In a Malcev variety, every subdirect product R of two algebras A and B comes from an isomorphism between quotients A/α and B/β. A pair (a, b) lies in R exactly when this isomorphism sends the class of a to the class of b.

**How the definition helps.** The Malcev equations fill a rectangle from three corners, which forces the subdirect product to match whole classes (our own proof). Applying p to (a, u), (b, u) and (b, v) gives (a, v). On each side, relate two elements when they share a partner, and the rectangle rule makes this an equivalence with matching classes. Closure under the operations makes these equivalences congruences and the matching an isomorphism.

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

**Definition.** An algebra P is a retract of F if homomorphisms i from P to F and r from F to P satisfy ri = id<sub>P</sub>. An algebra is free on S if every assignment of S into a member of the variety extends uniquely to a homomorphism.

**Problem.** In a variety of algebras, every retract of a free algebra lifts maps through surjective homomorphisms.

**How the definition helps.** In our own proof, precompose the given map with r to obtain a map from the free algebra. Choose a preimage of each generator’s image under the surjection and extend by freeness. Composing this lift with i lifts the original map because ri = id<sub>P</sub>.

**Paper or page:** [Generalization of terms via universal algebra](https://arxiv.org/abs/2502.18259). It says: “If a class of algebras K contains all its free algebras, an algebra P is projective in K if and only if it is a retract of a free algebra in K.”

**Sources:** none listed. No primary source with a working link was found.

### Regular epimorphisms recover algebra surjections

**Remember:** A universal quotient cannot have a proper image.

*Rules out counterexamples.* MSC 08C05 (Categories of algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A regular epimorphism is a homomorphism e with two properties for some parallel homomorphisms u,v. It satisfies eu = ev, and every homomorphism equalizing u,v factors uniquely through e.

**Problem.** In every variety of algebras, a homomorphism is surjective exactly when it is a regular epimorphism.

**How the definition helps.** In our own proof, the map onto the image of e equalizes u,v and thus factors through e. Uniqueness makes the image inclusion composed with that factor the identity, so e is onto. Conversely, a surjection coequalizes the projections from its kernel relation universally because maps constant on its fibers descend uniquely. The ring epimorphism ℤ → ℚ fails this test because its image is proper.

**nLab:** [regular epimorphism](https://ncatlab.org/nlab/show/regular+epimorphism), [epimorphism](https://ncatlab.org/nlab/show/epimorphism). It says: “the inclusion ℤ → ℚ is an epimorphism of rings, and of commutative rings.”

**Sources:** none listed. No primary source with a working link was found.

### Relative congruences keep quotients torsion-free

**Remember:** Intersect the kernels as usual, but keep the new quotient in the class.

*Rules out counterexamples.* MSC 08C15 (Quasivarieties). arXiv math.LO. Level 3: graduate.

**Definition.** A congruence is an equivalence relation compatible with all operations. A quasivariety is a class of algebras defined by implications from finite lists of equations to single equations. A congruence is relative to the class when its quotient lies in that class.

**Problem.** Relative congruences are closed under intersections. Their least upper bounds may differ from ordinary congruence joins.

**How the definition helps.** In our own proof, the intersection quotient embeds in the product of the individual quotients, so it remains in the quasivariety. In ℤ², quotienting by either subgroup generated by (1,0) or (1,2) gives ℤ. Their sum gives a quotient of order two. Thus their ordinary join fails the relative congruence test for torsion-free abelian groups.

**Wikipedia:** [Quasivariety](https://en.wikipedia.org/wiki/Quasivariety). It says: “K contains a trivial algebra and is closed under isomorphisms, subalgebras, direct products, and ultraproducts.”

**Sources:** none listed. No primary source with a working link was found.

### Clone inclusions detect formula definability

**Remember:** Witnesses combine by the operation that combines the visible entries.

*Makes the theorem clean to state or prove.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv math.LO. Level 4: research.

**Definition.** A primitive positive formula uses atomic relations, equality, conjunction and existential quantifiers, with falsity allowed for the empty relation. An operation preserves a relation if applying it coordinatewise to any matching number of member tuples produces another member. A polymorphism preserves every basic relation.

**Problem.** Take two relational structures on the same finite set. The first defines every relation of the second by primitive positive formulas exactly when its polymorphisms preserve those relations.

**How the definition helps.** Collecting all preserving operations turns comparison of two formula languages into inclusion of two sets of operations (our own explanation). Equality and conjunction preserve compatibility with an operation. For an existential quantifier, apply the operation to the witnesses as well as the visible inputs (our own explanation). The finite preservation theorem supplies the converse.

**Paper or page:** [Mal'cev clones over a three-element set up to minor-equivalence](https://arxiv.org/abs/2508.06918v1). It says: “Then A pp-defines B if and only if Pol(A) ⊆ Pol(B).”

**Sources:**

- [David Geiger, Closed systems of functions and predicates](https://doi.org/10.2140/pjm.1968.27.95)

### Alternating polymorphisms characterize affine integer programming

**Remember:** Permute within each parity and cancel an equal final pair.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** An L-input polymorphism from H to H̃ is a homomorphism from Hᴸ to H̃. For odd L ≥ 3 it is alternating if it satisfies two laws on all inputs. It permits all permutations within each parity of positions, and replacing equal final inputs by any other equal pair leaves its value unchanged.

**Problem.** Fix a finite promise template (H,H̃). The affine integer programming relaxation solves PCSP(H,H̃) exactly when alternating polymorphisms exist for every odd arity L ≥ 3.

**How the definition helps.** Alternation captures the symmetries and cancellation of an alternating sum of integer weights (our own explanation). The affine integer programming characterization of Barto, Bulín, Krokhin and Opršal turns correctness into existence of these operations at every odd arity.

**Paper or page:** [Approximate Graph Colouring and Crystals](https://arxiv.org/abs/2210.08293). It says: “AIP solves PCSP(H, H̃) if and only if there exist L-ary alternating polymorphisms from H to H̃ for any odd L ≥ 3.”

**Sources:**

- [Lorenzo Ciardo, Stanislav Živný, Approximate Graph Colouring and Crystals, arXiv:2210.08293 (2022)](https://arxiv.org/abs/2210.08293)
- [Libor Barto, Jakub Bulín, Andrei Krokhin, Jakub Opršal, Algebraic Approach to Promise Constraint Satisfaction, Journal of the ACM (2021)](https://doi.org/10.1145/3457606)

### Cyclic polymorphisms decide the CSP dichotomy

**Remember:** Rotate every argument one place without changing the answer.

*Makes the theorem clean to state or prove.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** A polymorphism of a structure A is a map from Aⁿ to A that preserves every relation of A, coordinate by coordinate. Pol(A) is the set of all polymorphisms. A polymorphism f is cyclic when f(x₁, x₂, …, xₙ) = f(x₂, …, xₙ, x₁) for all inputs.

**Problem.** Let A be a finite relational structure. Then CSP(A) is solvable in polynomial time if Pol(A) contains a cyclic polymorphism of arity at least 2, and NP-hard otherwise.

**How the definition helps.** Cyclicity expresses the tractability criterion with one symmetry of one relation-preserving operation (our own explanation). The finite CSP dichotomy theorem of Bulatov and Zhuk, in its cyclic polymorphism formulation, supplies the complexity conclusion.

**Paper or page:** [Solving promise equations over monoids and groups](https://arxiv.org/abs/2402.08434), [Solving promise equations over monoids and groups](https://arxiv.org/abs/2402.08434). It says: “Let A be a finite relational structure. Then CSP(A) is tractable if Pol(A) contains a cyclic polymorphism of arity at least 2. Otherwise CSP(A) is NP-hard.”

**Sources:**

- [Alberto Larrauri, Stanislav Živný, Solving promise equations over monoids and groups, ACM Transactions on Computational Logic 26(1) (2024), arXiv:2402.08434](https://arxiv.org/abs/2402.08434)
- [Dmitriy Zhuk, A Proof of the CSP Dichotomy Conjecture, Journal of the ACM (2020)](https://doi.org/10.1145/3402029)
- [Mikael Goldmann, Alexander Russell, The Complexity of Solving Equations over Finite Groups, Information and Computation (2002)](https://doi.org/10.1006/inco.2002.3173)

### Minion homomorphisms are exactly gadget reductions

**Remember:** Preserve arities and commute with every substitution of variables.

*Makes the theorem clean to state or prove.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** A minor of an n-input operation f substitutes one of m variables for each input, allowing repetitions and unused variables. A minion is a collection of operations closed under all such substitutions. A minion homomorphism preserves arity and sends every minor of f to the same substitution in the image of f.

**Problem.** For finite promise templates, PCSP(A,A′) gadget-reduces to PCSP(B,B′) exactly when a minion homomorphism sends Pol(B,B′) into Pol(A,A′).

**How the definition helps.** In our own explanation, substituting variables in constraints corresponds to taking minors of polymorphisms. The gadget reduction characterization of Barto, Bulín, Krokhin and Opršal expresses the reduction by preservation of these substitutions in the reverse direction.

**Paper or page:** [An invitation to the promise constraint satisfaction problem](https://arxiv.org/abs/2208.13538). It says: “the following two statements are equivalent: PCSP(A, A′) is reducible to PCSP(B, B′) by a gadget reduction (and hence in log-space), there is a minion homomorphism Pol(B, B′) → Pol(A, A′).”

**Sources:**

- [Andrei Krokhin, Jakub Opršal, An invitation to the promise constraint satisfaction problem, ACM SIGLOG News (2022)](https://doi.org/10.1145/3559736.3559740)
- [Libor Barto, Jakub Bulín, Andrei Krokhin, Jakub Opršal, Algebraic Approach to Promise Constraint Satisfaction, Journal of the ACM (2021)](https://doi.org/10.1145/3457606)

### Named constants force idempotent polymorphisms

**Remember:** Preserving each singleton forces every constant tuple to return its entry.

*Rules out counterexamples.* MSC 08A70 (Applications of universal algebra in computer science). arXiv math.LO. Level 4: research.

**Definition.** To name the constants of a finite core C, add a unary relation {a} for each a in C. A polymorphism preserves each basic relation by sending every list of its tuples to another member tuple under coordinatewise application.

**Problem.** Naming all elements of a finite core forces each polymorphism f to satisfy f(a,…,a) = a. For a fixed finite relational signature, this preserves the constraint problem up to polynomial-time reductions in both directions.

**How the definition helps.** Preserving the singleton {a} forces f(a,…,a) to belong to {a} (our own explanation). For example, swapping two elements preserves equality but fails to preserve either singleton (our own example). The constraint problem asks whether an input structure admits a homomorphism to the fixed structure. The cited core theorem supplies the reductions.

**Paper or page:** [Mal'cev clones over a three-element set up to minor-equivalence](https://arxiv.org/abs/2508.06918v1). It says: “For a finite relational structure A, let A′ denote its core, extended by all constants. Then A pp-constructs A′ and vice-versa.”

**Sources:** none listed. No primary source with a working link was found.

### Constant terms select unique idempotents

**Remember:** A constant expression that fixes each idempotent leaves room for just one.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 4: research.

**Definition.** Consider a variety of nonempty algebras whose basic operations have positive arity. An element is idempotent if every basic operation returns it on inputs all equal to it. The variety is polarized if one unary term has constant, idempotent value in each member.

**Problem.** A variety of this kind is polarized exactly when every member has exactly one idempotent.

**How the definition helps.** In our own proof, every unary term fixes every idempotent by induction on the term. A constant idempotent term therefore gives exactly one idempotent. Conversely, represent the unique idempotent of the free algebra on one generator by a term. Every assignment of the generator preserves idempotence, so the term always gives the unique idempotent in each member.

**Paper or page:** [Mal'tsev products of varieties, I](https://arxiv.org/abs/2404.08841v1). It says: “Each algebra in V has precisely one idempotent if and only if the variety V is polarized.”

**Sources:**

- [Tomasz Penza, Anna B. Romanowska. Mal'tsev products of varieties, I, Corollary 1.3.](https://arxiv.org/abs/2404.08841v1)

### Filters in residuated lattices are ideals of subtractive varieties

**Remember:** Ideal terms return one when all their designated inputs are one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 08B05 (Equational logic, Mal'tsev conditions), 08A30, 06F05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** With a designated constant 1, an ideal term t(x,y) satisfies t(x,1) = 1 identically, where x and y denote tuples. A 1-ideal contains 1 and contains t(a,b) for every ideal term, every algebra tuple a and every ideal tuple b.

**Problem.** In a commutative integral residuated lattice with normal operators, the 1-ideals are exactly the filters that are closed under the operators. So these filters form a modular lattice, the image of the congruence lattice under θ ↦ 1/θ.

**How the definition helps.** The cited filter characterization identifies 1-ideals with filters closed under the normal operators. In our own deduction, s(x,y) = y → x satisfies s(x,x) = 1 and s(x,1) = x. The ideal theorem for subtractive varieties therefore makes θ ↦ 1/θ a complete lattice homomorphism onto the modular ideal lattice.

**Paper or page:** [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022), [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022). It says: “If A is a commutative integral residuated lattice with normal operators, then the 1-ideals (which we may call the filters) of A are exactly the filters of the commutative residuated lattice reduct that are closed under fλ”

**Sources:**

- [Paolo Aglianò, Why most papers on filters are really trivial (including this one), arXiv:2309.15022 (2023)](https://arxiv.org/abs/2309.15022)

### Loop identities force relation loops

**Remember:** Apply the same expression to both ends of the edges.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.LO. Level 4: research.

**Definition.** A loop condition asks for one expression that takes equal values on two specified lists of variables under every assignment. Its directed graph has an edge between corresponding variables, pointing from left to right. A graph on an algebra is compatible if applying any operation to edges coordinate by coordinate gives another edge.

**Problem.** A loop condition holds throughout a variety, a class defined by equations, exactly when the following graph test always succeeds. Map its pattern into any compatible graph on a member, sending edges to edges. Whenever such a map exists, the graph must contain an edge from a vertex to itself.

**How the definition helps.** In our own forward proof, apply the term coordinatewise to the mapped pattern edges. Compatibility gives an edge, and the identity makes its endpoints equal. Conversely, generate a compatible graph from the pattern edges in the free algebra on the variables. A loop there comes from a single term applied to those edges, and equality in the free algebra gives its identity.

**Paper or page:** [Loop conditions with strongly connected graphs](https://arxiv.org/abs/1810.03177v1). It says: “For any algebra A ∈ V and any digraph G compatible with A, if there is a digraph homomorphism G꜀ → G, then G has a loop.”

**Sources:**

- [Miroslav Olšák. Loop conditions with strongly connected graphs, Proposition 2.2.](https://arxiv.org/abs/1810.03177v1)

### Malcev theories are exactly those whose simplicial algebras are Kan

**Remember:** A Malcev term cancels a repeated pair at either end.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions), 18N50. arXiv math.AT, math.RA. Level 4: research.

**Definition.** A theory is Malcev if some ternary term p satisfies both cancellation laws for every x,y. These laws are p(x,x,y) = y and p(x,y,y) = x. A simplicial set is Kan if every horn in every positive dimension extends to a simplex.

**Problem.** An algebraic theory is Malcev exactly when all its simplicial algebras are Kan complexes. For groups this is Moore's theorem that simplicial groups are Kan.

**How the definition helps.** The Malcev–Kan characterization translates the existence of one cancellation term into the existence of fillers for all horns. In our own explanation, the two term identities let the filler construction correct a face while preserving earlier matches. The converse in the cited characterization recovers such a term from horn filling.

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

**Definition.** A polynomial operation uses the algebra operations, variables and fixed parameters. A k-input polynomial f absorbs a tuple a if f(x) = f(a) for every tuple x agreeing with a in at least one coordinate.

**Problem.** In an algebra with a Malcev term, permuting a list of congruences leaves its higher commutator unchanged.

**How the definition helps.** In our own proof, Theorem 7 generates the higher commutator from pairs (f(a),f(b)) for polynomials f absorbing a. Each coordinate pair (aᵢ,bᵢ) must belong to its listed congruence. Reindexing the tuples and polynomial arguments together preserves absorption and gives exactly the same generating pairs for the permuted list.

**Paper or page:** [CSAT and CEQV for nilpotent Maltsev algebras of Fitting length &gt; 2](https://arxiv.org/abs/2105.00689v2). It says: “Then \[α₁,…,αₖ\] is generated as a congruence by the set”

**Sources:**

- [Michael Kompatscher, CSAT and CEQV for nilpotent Maltsev algebras of Fitting length &gt; 2, Theorem 7](https://arxiv.org/abs/2105.00689v2)

### Distributivity bounds irreducible factor sizes

**Remember:** Distributivity keeps irreducible factors within the size of the finite generators.

*Makes the theorem clean to state or prove.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.RA. Level 4: research.

**Definition.** A variety is congruence-distributive if each member’s lattice of congruences satisfies the distributive law. A nontrivial algebra is subdirectly irreducible if every embedding into a product with surjective coordinate maps has an injective coordinate map.

**Problem.** Suppose finitely many finite algebras generate a congruence-distributive variety. Each subdirectly irreducible member has at most as many elements as the largest generator.

**How the definition helps.** Jónsson’s lemma places each subdirectly irreducible member in a homomorphic image of a subalgebra of an ultraproduct of generators, up to isomorphism. For a finite list of finite generators, each such ultraproduct is isomorphic to one generator. Taking subalgebras and quotients cannot increase its size (our own deduction).

**Wikipedia:** [Subdirectly irreducible algebra](https://en.wikipedia.org/wiki/Subdirectly_irreducible_algebra). It says: “By Jónsson's Lemma, subdirectly irreducible algebras of a congruence-distributive variety generated by a finite set of finite algebras are no larger than the generating algebras”

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “Suppose that K is a class of algebras such that V(K) = V is congruence distributive”

**Sources:**

- [Bjarni Jónsson, Algebras whose congruence lattices are distributive](https://doi.org/10.7146/math.scand.a-10850)

### Equational Noetherianity yields separating maps

**Remember:** Reduce the whole diagram to finite equations while keeping the pair distinct.

*True by definition.* MSC 08C15 (Quasivarieties), 08A45. arXiv math.RA. Level 4: research.

**Definition.** Consider systems of equations in finitely many variables. A class K is equationally Noetherian if every such system has a finite subsystem with identical solutions in each member of K.

**Problem.** Let K be an equationally Noetherian class in one fixed signature. Every finitely generated member of its quasivariety embeds into a product of members of K.

**How the definition helps.** In our own proof, finite equations capture all relations of a chosen finite generating tuple on solutions in K. If all such solutions equated two distinct term values, that conditional equation would hold throughout the quasivariety, contradicting their distinctness. A separating solution therefore induces a homomorphism to a member of K. The product of these maps is injective.

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
