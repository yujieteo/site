### Constants make maps preserve units

**Remember:** A unit is an operation with no inputs.

*Rules out counterexamples.* MSC 08A05 (Structure theory of algebraic structures). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Treat a named constant as an operation on zero inputs. A homomorphism is a map that preserves each operation, including those with no inputs.

**Problem.** Every homomorphism between monoids preserves the unit as well as multiplication.

**How the definition helps.** Treating the unit as a constant makes unit preservation one case of operation preservation. Without it, a map can preserve multiplication but not the unit (our own example). Send the sole element of the trivial monoid to 0 in the multiplicative monoid {0, 1}.

**Wikipedia:** [Universal algebra](https://en.wikipedia.org/wiki/Universal_algebra). It says: “if e is a constant (nullary operation)”

**Sources:**

- [Stanley Burris and H. P. Sankappanavar, A Course in Universal Algebra, Chapter II, §§1 and 6](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra2012.pdf)

### Compatible equivalences give algebra quotients

**Remember:** Do the operation on representatives, then take the class.

*Rules out counterexamples.* MSC 08A30 (Subalgebras, congruence relations). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A congruence is an equivalence relation for which replacing inputs by equivalent inputs gives equivalent outputs. So an operation on classes can use any representatives, and the class of the result does not depend on the choice.

**Problem.** Every congruence defines a quotient algebra, and the map sending an element to its class preserves all operations.

**How the definition helps.** Compatibility says exactly that the result's class does not depend on representatives, so the quotient operations are well defined and the class map preserves them. Our own counterexample is the relation "equal absolute values" on the integers. It relates 1 and −1, but adding 1 gives 2 and 0, which it does not relate.

**Wikipedia:** [Congruence relation](https://en.wikipedia.org/wiki/Congruence_relation). It says: “A congruence relation on the structure is then defined as an equivalence relation that is also compatible.”

**Paper or page:** [Absolute Value induces Equivalence not Compatible with Integer Addition](https://proofwiki.org/wiki/Absolute_Value_induces_Equivalence_not_Compatible_with_Integer_Addition). It says: “Then R is not a congruence relation for integer addition.”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-identities capture cancellation

**Remember:** An equation may require other equations as hypotheses.

*Makes the theorem clean to state or prove.* MSC 08C15 (Quasivarieties). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A quasi-identity is an implication: if a finite list of equations holds for an assignment of the variables, then one more equation holds.

**Problem.** Cancellative monoids form a quasivariety, a class defined by quasi-identities. They do not form a variety, a class defined by ordinary identities.

**How the definition helps.** Cancellation is the pair of quasi-identities ax = ay ⇒ x = y and xa = ya ⇒ x = y (our own example). It is not a variety because varieties are closed under quotients, and the additive nonnegative integers map onto {0, 1} under maximum. Send 0 to 0 and positive integers to 1, and then max(1, 0) = max(1, 1) although 0 ≠ 1.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “However, they do form a quasivariety as the implication defining the cancellation property is an example of a quasi-identity.”

**Sources:** none listed. No primary source with a working link was found.

### Torsion-free groups need quasi-identities

**Remember:** Torsion-free means xⁿ = 1 implies x = 1.

*Makes the theorem clean to state or prove.* MSC 08C15 (Quasivarieties), 03C05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A quasi-identity is an implication: if a finite list of equations holds for an assignment, then one more equation holds. A quasivariety is a class defined by quasi-identities, and a variety is one defined by identities, the quasi-identities with no hypotheses.

**Problem.** Torsion-free groups form a quasivariety but not a variety.

**How the definition helps.** Torsion-freeness is the list of quasi-identities xⁿ = 1 ⇒ x = 1 for n ≥ 2 (our own argument). It is not a variety because varieties are closed under quotients, and the torsion-free group ℤ has the quotient ℤ/2.

**Wikipedia:** [Quasivariety](https://en.wikipedia.org/wiki/Quasivariety). It says: “Every variety is a quasivariety by virtue of an equation being a quasi-identity for which n = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Finitary closure makes subalgebra lattices algebraic

**Remember:** Finite generators give the compact elements of the subalgebra lattice.

*True by definition.* MSC 08A30 (Subalgebras, congruence relations), 06B23. arXiv math.RA. Level 3: graduate.

**Definition.** A closure operator c on subsets is finitary if c(A) is the union of c(F) over the finite subsets F of A, as subalgebra generation is. A lattice element is compact if, whenever it lies below a join, it lies below the join of finitely many of the joined elements.

**Problem.** The subalgebras of a finitary algebra form an algebraic lattice when all subsets closed under its operations count as subalgebras. Its compact elements are exactly the finitely generated subalgebras.

**How the definition helps.** Generation is finitary because each generated element uses finitely many inputs, so finitely generated subalgebras are compact and generate the lattice. If a join contains finitely many generators, finitely many joined subalgebras already supply them (our own argument). Conversely, a compact subalgebra is the join of its finitely generated parts, so finitely many suffice.

**Wikipedia:** [Closure operator](https://en.wikipedia.org/wiki/Closure_operator). It says: “Given a finitary closure operator on a set, the closures of finite sets are exactly the compact elements of the set C of closed sets. It follows that C is an algebraic poset.”

**Paper or page:** [Image of Directed Suprema Preserving Closure Operator is Algebraic Lattice](https://proofwiki.org/wiki/Image_of_Directed_Suprema_Preserving_Closure_Operator_is_Algebraic_Lattice). It says: “Let c: S → S be a closure operator that preserves directed suprema.”

**Sources:**

- [Garrett Birkhoff and Orrin Frink, Representations of lattices by sets, Transactions of the American Mathematical Society (1948)](https://doi.org/10.1090/S0002-9947-1948-0027263-2)

### Finite paths compute congruence joins

**Remember:** Related in the join means linked by a finite chain.

*True by definition.* MSC 08A30 (Subalgebras, congruence relations). arXiv math.RA. Level 3: graduate.

**Definition.** The join of a family of congruences is the least congruence containing them all. The path description relates two elements when a finite chain links them, each step related by one of the given congruences.

**Problem.** If each operation takes finitely many inputs, the path description gives the join of any family of congruences.

**How the definition helps.** Every congruence containing the family contains every finite chain, so it suffices that chains give a congruence. Empty chains, reversal and joining chains give an equivalence relation (our own proof). For compatibility, change one input at a time along its chain, which takes finitely many steps because each operation has finitely many inputs.

**Wikipedia:** [Congruence relation](https://en.wikipedia.org/wiki/Congruence_relation). It says: “A congruence relation on the structure is then defined as an equivalence relation that is also compatible.”

**Sources:** none listed. No primary source with a working link was found.

### Discriminators build all finite operations

**Remember:** One equality test builds the whole lookup table.

*True by definition.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A finite algebra is polynomially complete if every operation with finitely many inputs is a polynomial, an expression built from variables, fixed elements and the operations. The discriminator d(x,y,z) returns z when x = y and x otherwise, so it is an equality test.

**Problem.** For a finite algebra, polynomial completeness is equivalent to having a polynomial expression for the discriminator.

**How the definition helps.** Equality tests against fixed elements build any finite lookup table, so the discriminator gives every operation (our own). The expression d(d(x,y,u), d(x,y,v), v) gives u when x = y and v otherwise, and nesting such tests fills each leaf (our own). Conversely, polynomial completeness supplies the discriminator directly (our own).

**Paper or page:** [Proof complexity of universal algebra in a CSP dichotomy proof](https://arxiv.org/abs/2403.06704). It says: “A finite algebra is polynomially complete if and only if it has the ternary discriminator as a polynomial operation.”

**Sources:** none listed. No primary source with a working link was found.

### Free generators recover natural operations

**Remember:** Apply the operation to the free generators to read its term.

*True by definition.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A natural n-input operation picks a function f<sub>A</sub> on n-tuples in each algebra A of a variety and commutes with every homomorphism h. That is, h(f<sub>A</sub>(a)) = f<sub>B</sub>(h(a)), with h acting coordinatewise.

**Problem.** In a variety, every natural n-input operation is given by a term. The term is unique up to the equations that hold in the variety.

**How the definition helps.** A natural operation is fixed by its value at the n free generators, because every tuple is their image under some homomorphism. That value is an element of the free algebra, a term modulo the identities, and naturality makes this term compute f on every tuple (our own proof). Two terms that agree at the free generators are equal modulo the identities, which gives uniqueness.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “may be identified with elements of F(n), the free T-algebra on n generators”

**Sources:** none listed. No primary source with a working link was found.

### Majority operations reconstruct from pairs

**Remember:** Three witnesses that miss different coordinates recover the full tuple.

*Rules out counterexamples.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv cs.CC, math.LO. Level 3: graduate.

**Definition.** A majority operation m takes three inputs and returns the repeated value whenever two agree. It preserves a relation if applying m coordinate by coordinate to three tuples of the relation gives a tuple of the relation.

**Problem.** Consider a relation on tuples of fixed finite length at least two. If a majority operation preserves it, a tuple belongs exactly when each coordinate pair occurs in the corresponding projection.

**How the definition helps.** Majority lets three witnesses, each possibly wrong in a different single coordinate, vote out their errors. Induct on arity from two: omitting each of three coordinates gives three witnesses, and their majority is the wanted tuple (our own proof). Without majority, even-parity triples have all pair projections but exclude 111, the majority of 110, 101 and 011.

**Paper or page:** [A polynomial-time algorithm for median-closed semilinear constraints](https://arxiv.org/abs/1808.10068v2). It says: “Let Γ be a structure with domain D and a majority polymorphism. Then every relation in Γ is 2-decomposable.”

**Sources:**

- [Manuel Bodirsky, Marcello Mamino. A polynomial-time algorithm for median-closed semilinear constraints, Theorem 2.1.](https://arxiv.org/abs/1808.10068v2)

### Term equivalence preserves subalgebras, congruences and endomorphisms

**Remember:** Same term operations give the same subalgebras, congruences and endomorphisms.

*True by definition.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras), 08A30. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** Two algebras on the same set are term equivalent if each basic operation of either is a term operation of the other, built from basic operations and constants. So both algebras have the same term operations.

**Problem.** Term equivalent algebras have the same subalgebras, congruences and endomorphisms.

**How the definition helps.** Subsets, equivalence relations and self-maps that respect the basic operations respect every composite of them, so they respect every term operation. Both algebras have the same term operations, so the three collections agree (our own argument).

**Wikipedia:** [Clone (algebra)](https://en.wikipedia.org/wiki/Clone_%28algebra%29), [Functional completeness](https://en.wikipedia.org/wiki/Functional_completeness). It says: “If A and B are algebras with the same carrier such that every basic function of A is a term function in B and vice versa, then A and B have the same clone.”

**Sources:** none listed. No primary source with a working link was found.

### Matching endpoints lets graph limits carry composition

**Remember:** Composable means endpoints match, so compose each coordinate separately.

*Makes the theorem clean to state or prove.* MSC 08A55 (Partial algebras). arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** An essentially algebraic theory allows operations defined only on inputs that satisfy given equations. For categories, composition is defined on pairs of arrows where the target of the first equals the source of the second.

**Problem.** Every diagram of small categories indexed by a small category has a limit. Its graph consists of the compatible tuples of objects and arrows.

**How the definition helps.** A tuple of arrows is composable exactly when its endpoints match in every coordinate, so the limit is computed coordinatewise. Coordinatewise composition gives a compatible tuple because the diagram functors preserve composition, and identities and category laws hold coordinatewise (our own proof). The induced maps into the limit preserve these operations, so they are functors.

**nLab:** [essentially algebraic theory](https://ncatlab.org/nlab/show/essentially+algebraic+theory). It says: “As the domains of the operations are given by the solutions to equations, they may be understood using the notion of equalizer.”

**Sources:** none listed. No primary source with a working link was found.

### Pp-definitions are reductions between constraint problems

**Remember:** A pp-formula is a gadget, so pp-definable means reducible.

*True by definition. Confidence: medium.* MSC 08A70 (Applications of universal algebra in computer science), 03C13, 68Q25. arXiv cs.CC, cs.LO. Level 3: graduate.

**Definition.** A primitive positive formula is built from atomic relations and equality using only conjunction and existential quantifiers, so it is a gadget of constraints with hidden variables. A promise template (A, B) pp-defines (A′, B′) on the same domains if one such formula per new relation defines it in A′ from A and in B′ from B.

**Problem.** If a template (A, B) pp-defines (A′, B′), then PCSP(A′, B′) reduces to PCSP(A, B) in logarithmic space. In particular, adding a pp-definable relation to A does not make CSP(A) harder.

**How the definition helps.** Each new constraint can be replaced by its defining gadget, with fresh variables for the existential witnesses (our own reduction). Witnesses extend each satisfying assignment, and restricting a solution recovers one, on either side of the template. Equalities merge variables, which logarithmic-space undirected connectivity handles, and fixed formulas let a logarithmic-space transducer list the constraints.

**Paper or page:** [1-in-3 vs. Not-All-Equal: Dichotomy of a broken promise](https://arxiv.org/abs/2302.03456), [Generalisations of Matrix Partitions : Complexity and Obstructions](https://arxiv.org/abs/2107.13809). It says: “Suppose the template (A,B) pp-defines (A′, B′). Then PCSP(A′, B′) reduces to PCSP(A, B) in logarithmic space.”

**Sources:**

- [1-in-3 vs. Not-All-Equal: Dichotomy of a broken promise, arXiv:2302.03456 (2023)](https://arxiv.org/abs/2302.03456)
- [Peter Jeavons, On the algebraic structure of combinatorial problems, Theoretical Computer Science (1998)](https://doi.org/10.1016/s0304-3975(97)00230-2)

### A Mal'cev operation makes congruences permute and the congruence lattice modular

**Remember:** Cancel either repeated adjacent pair to return the remaining argument.

*True by definition.* MSC 08B05 (Equational logic, Mal'tsev conditions), 08B10. arXiv math.RA. Level 3: graduate.

**Definition.** A Mal'cev term is a ternary term t satisfying t(x,y,y) = x and t(x,x,y) = y for all x and y.

**Problem.** In a variety with a Mal'cev operation, every reflexive relation that is a subalgebra is a congruence. Any two congruences permute, and the congruence lattice of each algebra is modular.

**How the definition helps.** Closure under t gives symmetry from (x,x), (x,y), (y,y) ↦ (y,x) and transitivity from (x,y), (y,y), (y,z) ↦ (x,z) (our own proof). From x α y β z, the element t(x,y,z) is β-related to x and α-related to z, so congruences permute. Permuting equivalence relations always form a modular lattice.

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

**Definition.** In a quasivariety, the algebra presented by generators X and equations Σ is the most general member generated by X in which Σ holds. It is the free algebra on X modulo the least congruence that imposes Σ with a quotient in the quasivariety.

**Problem.** An equation follows from the assumptions in a quasivariety exactly when its two sides agree on the named generators in this quotient.

**How the definition helps.** Every assignment satisfying Σ in a member factors through the presented algebra, so equations true there hold under every such assignment. It factors because the induced homomorphism's kernel imposes Σ and its image lies in the quasivariety (our own proof). Conversely, the generators of the presented algebra themselves satisfy Σ.

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “if p ≈ q is an equation in variables from X then the following are equivalent: FQ(X,Σ) ⊨ p ≈ q; Σ ⊢Q p ≈ q; (p,q) ∈ θQ(Σ).”

**Sources:**

- [Paolo Aglianó, Alex Citkin. Structural completeness in quasivarieties, Lemma 2.11.](https://arxiv.org/abs/2401.02754v1)

### Malcev terms make reflexive relations equivalences

**Remember:** The middle input cancels to reverse or join related pairs.

*Rules out counterexamples.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 3: graduate.

**Definition.** A Malcev term is a three-input term p with p(x,x,z) = z and p(x,z,z) = x. A compatible relation is closed under applying the operations, and hence p, coordinate by coordinate.

**Problem.** A reflexive compatible relation on an algebra with a Malcev term is an equivalence relation.

**How the definition helps.** Closure under p turns related pairs into their reverses and composites (our own proof). Applying p to (x,x), (x,y), (y,y) gives (y,x), and applying it to (x,y), (y,y), (y,z) gives (x,z). Without a Malcev term, the order of the two-element lattice is reflexive and compatible but not symmetric.

**nLab:** [Malcev variety](https://ncatlab.org/nlab/show/Malcev+variety). It says: “If T is a Malcev theory, then any internal reflexive relation in T-Alg is an internal equivalence relation.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite powers detect finite groups

**Remember:** x to the n factorial tests whether x has an inverse.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 3: graduate.

**Definition.** The ω-power of an element x of a finite monoid is the value that x raised to n! takes for all large n. A profinite identity may use ω-powers as well as ordinary words.

**Problem.** A finite monoid is a group exactly when the ω-power of each element equals 1. Ordinary monoid identities cannot give this test.

**How the definition helps.** Large factorials are multiples of every element order, so ω-powers are 1 in a finite group, and an ω-power equal to 1 gives x an inverse (our own proof). An ordinary identity valid in all finite cyclic groups uses each variable equally often on both sides. Such an identity also holds in {0, 1} under maximum, which is not a group, since both sides use the same variables.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “Namely, a class of finite monoids is a variety of finite monoids if and only if it can be defined by a set of profinite identities.”

**Paper or page:** [Unveiling Eilenberg-type Correspondences: Birkhoff's Theorem for (finite) Algebras + Duality](https://arxiv.org/abs/1702.02822v1). It says: “Additionally, pseudovarieties of T–algebras are in one–to–one correspondence with pseudoequational T–theories on D₀.”

**Sources:**

- [Jan Reiterman, The Birkhoff theorem for finite algebras](https://doi.org/10.1007/BF02483902)

### Distributivity rules out skew congruences

**Remember:** Distributivity splits every congruence into one test per coordinate.

*Rules out counterexamples. Confidence: medium.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 3: graduate.

**Definition.** Congruences on an algebra are distributive when C ∩ (D ∨ E) = (C ∩ D) ∨ (C ∩ E) always, where D ∨ E is the least congruence containing both. On A × B, apply this to the kernels P and Q of the two projections, which intersect in equality.

**Problem.** Suppose intersections distribute over joins of congruences on A × B. Then every congruence on A × B compares the two coordinates by separate congruences on A and B.

**How the definition helps.** Distributivity splits C as (C ∨ P) ∩ (C ∨ Q), since P ∩ Q is equality. Each join contains a projection kernel, so it compares one coordinate by a congruence on that factor (our own proof). In the group ℤ/2 × ℤ/2, the diagonal subgroup's congruence compares coordinate sums, which no pair of separate tests expresses.

**Paper or page:** [Cross-Relation is Congruence Relation](https://proofwiki.org/wiki/Cross-Relation_is_Congruence_Relation). It says: “The cross-relation ⊠ is a congruence relation on ⟨S₁ × S₂, ⊕⟩.”

**Sources:**

- [Grant A. Fraser and Alfred Horn, Congruence relations in direct products](https://doi.org/10.1090/S0002-9939-1970-0265258-1)

### Majority terms make congruences distributive

**Remember:** Majority pulls every vertex of a path into the endpoints' class.

*Rules out counterexamples.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 3: graduate.

**Definition.** A majority term m returns x whenever at least two of its three inputs equal x. The join S ∨ T relates two elements linked by a finite path whose steps lie in S or T.

**Problem.** If an algebra has a majority term, its congruences satisfy R ∩ (S ∨ T) = (R ∩ S) ∨ (R ∩ T).

**How the definition helps.** Majority moves a whole path into one R-class: replace each vertex y by m(x, y, z), where x and z are the R-related endpoints (our own proof). Each new vertex is R-related to m(x, y, x) = x, each step keeps its relation, and the endpoints stay x and z. Without majority, the three order-two subgroups of the Klein four-group give congruences that violate distributivity.

**Wikipedia:** [Quotient (universal algebra)](https://en.wikipedia.org/wiki/Quotient_%28universal_algebra%29). It says: “In 1967 Bjarni Jónsson found the conditions for varieties having congruence lattices that are distributive”

**Sources:**

- [Stanley Burris and H. P. Sankappanavar, A Course in Universal Algebra, Chapter II, §12](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra2012.pdf)

### Closure under subalgebras and products gives free algebras

**Remember:** The free algebra is the generated part of a product of models.

*True by definition. Confidence: medium.* MSC 08B20 (Free algebras), 08C15. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** A free algebra on S in a class K is a member F with a map i from S to F. For every A in K, each assignment from S to A extends uniquely along i to a homomorphism from F to A.

**Problem.** Consider a nonempty class of nonempty algebras with fixed operations of finite arity. If it is closed under subalgebras, products and isomorphic copies, it has a free algebra on every nonempty set.

**How the definition helps.** Closure under products and subalgebras lets one build the free algebra inside a product of all S-generated members. List one copy of each with its generating map; they form a set since every element is a term in the generators (our own construction). In the product, take the subalgebra generated by the tuples of generators, where each assignment extends by a projection, uniquely since generators fix it.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “One can show that for every set S, the variety V contains a free algebra Fₛ on S.”

**Sources:**

- [G. Birkhoff, On the structure of abstract algebras, Mathematical Proceedings of the Cambridge Philosophical Society 31 (1935)](https://doi.org/10.1017/S0305004100013463)

### Finite algebras generate locally finite varieties

**Remember:** Finitely many inputs and outputs give finitely many term functions.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.RA. Level 3: graduate.

**Definition.** The variety generated by an algebra A is the class of algebras satisfying every equation valid in A. So two terms in n variables are equal in its free algebra exactly when they define the same n-input function on A.

**Problem.** Every finitely generated member of the variety generated by a finite algebra is finite.

**How the definition helps.** A finite algebra has only finitely many n-input functions, so the free algebra on n generators is finite (our own proof). Every n-generated member is a quotient of this free algebra.

**Wikipedia:** [Locally finite variety](https://en.wikipedia.org/wiki/Locally_finite_variety). It says: “One calls a variety locally finite if every finitely generated algebra has finite cardinality”

**Sources:**

- [Stanley Burris and H. P. Sankappanavar, A Course in Universal Algebra, Chapter II, Theorems 10.15–10.16](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra2012.pdf)

### Free Steiner generators extend bijections

**Remember:** Extend a bijection and its inverse from the free generators.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A Steiner quasigroup has a commutative product with xx = x and x(xy) = y. A generating set is free if every assignment of it into a Steiner quasigroup extends uniquely to a homomorphism.

**Problem.** Every bijection between free generating sets of Steiner quasigroups extends to an isomorphism.

**How the definition helps.** The extension property gives homomorphisms in both directions, extending the bijection and its inverse. Each composite fixes every generator, so by uniqueness it equals the identity (our own check).

**Paper or page:** [Endomorphisms of free Steiner quasigroups](https://arxiv.org/abs/2412.06055v3). It says: “In fact, every bijection between A and B can be extended to an isomorphism between M and N.”

**Sources:**

- [Silvia Barbina, Enrique Casanovas. Endomorphisms of free Steiner quasigroups, Corollary 2.10.](https://arxiv.org/abs/2412.06055v3)

### Pairing makes finite free bases interchangeable

**Remember:** One free generator supplies two free coordinates.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A Jónsson–Tarski algebra has a pairing operation that is a bijection from ordered pairs to elements, with two operations recovering the coordinates. In a free algebra on a set, every assignment of the generators extends uniquely to a homomorphism.

**Problem.** The free Jónsson–Tarski algebras on any two nonempty finite sets are isomorphic.

**How the definition helps.** Pairing lets one generator stand for two, so replace a generator by its two coordinates (our own proof). Pairing recovers the old generator and the coordinate maps recover the new ones, so the extended homomorphisms are inverse to each other. Repeating this connects every positive finite number of generators.

**nLab:** [Jónsson-Tarski algebra](https://ncatlab.org/nlab/show/J%C3%B3nsson-Tarski+algebra). It says: “Any two Jónsson-Tarski algebras freely generated from finite non empty sets are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Terminating decomposition makes magmas free

**Remember:** Split uniquely and stop, and you recover the whole tree.

*Rules out counterexamples.* MSC 08B20 (Free algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A magma, a set with a binary operation, is uniquely decomposable if each product determines both its factors. It is well founded if every element is built in finitely many steps from the elements that are not products.

**Problem.** A magma with these two properties is free on the elements that are not products. Every assignment of those elements to another magma extends uniquely to a map that preserves multiplication.

**How the definition helps.** Each element has exactly one finite decomposition tree, so evaluating that tree in the target gives the required map, and any multiplicative map must do this (our own). Unique decomposition alone allows the one-element magma with a·a = a, which has no starting elements and is not free (our own).

**Paper or page:** [Equidecomposable magmas](https://arxiv.org/abs/2407.17698). It says: “A magma is free iff it is initial and equidec.”

**Sources:**

- [Equidecomposable magmas](https://arxiv.org/abs/2407.17698)

### Common sections make set coequalizers work

**Remember:** A common section lets each step change one input, others fixed.

*Rules out counterexamples.* MSC 08B25 (Products, amalgamated products, and other kinds of limits and colimits). arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** Parallel homomorphisms f, g from A to B form a reflexive pair if they share a section. This is a homomorphism s from B to A with fs = gs = id<sub>B</sub>.

**Problem.** Consider algebras defined by equations using operations with finitely many inputs. For a reflexive pair, the underlying set of its coequalizer is the set quotient identifying the paired outputs.

**How the definition helps.** The section lifts fixed inputs b to s(b), so a step f(a) \~ g(a) can change one input of an operation (our own proof). Hence the generated equivalence respects operations, but without a section this fails: send the free generator x to a and to b in the free monoid on a, b. The set quotient merges a with b but keeps ab and bb apart.

**nLab:** [cocompleteness of varieties of algebras](https://ncatlab.org/nlab/show/cocompleteness+of+varieties+of+algebras). It says: “If T is a finitary monad defined on a cocomplete cartesian closed category X, then T preserves reflexive coequalizers”

**Sources:** none listed. No primary source with a working link was found.

### Malcev terms match quotient classes

**Remember:** Three corners force the fourth, so each quotient class has a matching class.

*Makes the theorem clean to state or prove.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.RA. Level 3: graduate.

**Definition.** A subdirect product of A and B is a subalgebra R of A × B whose projections are onto. A Malcev variety has a term p with p(x,x,z) = z and p(x,z,z) = x, so R contains (a, v) whenever it contains (a, u), (b, u) and (b, v).

**Problem.** In a Malcev variety, every subdirect product R of two algebras A and B comes from an isomorphism between quotients A/α and B/β. A pair (a, b) lies in R exactly when this isomorphism sends the class of a to the class of b.

**How the definition helps.** This rectangle rule makes R match whole classes (our own proof). On A, relate two elements when they share a partner in B, and similarly on B; the rectangle rule makes these equivalences with matching classes. Closure under the operations makes them congruences and the matching an isomorphism.

**Wikipedia:** [Goursat's lemma](https://en.wikipedia.org/wiki/Goursat%27s_lemma). It says: “It can be stated more generally in a Goursat variety (and consequently it also holds in any Maltsev variety)”

**Sources:** none listed. No primary source with a working link was found.

### One pair detects subdirect irreducibility

**Remember:** One distinct pair that every proper quotient merges.

*True by definition.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.LO. Level 3: graduate.

**Definition.** A nontrivial algebra is subdirectly irreducible if it has a least congruence strictly above equality. Equivalently, every embedding into a product that maps onto each factor has an injective projection.

**Problem.** A nontrivial algebra is subdirectly irreducible exactly when some distinct pair merges under every noninjective quotient map.

**How the definition helps.** Any distinct pair in that least congruence merges under every noninjective quotient, and a pair that always merges generates that least congruence. This matches the product form, because the map into a product of quotients is injective exactly when each distinct pair stays distinct in some factor (our own explanation).

**Wikipedia:** [Subdirectly irreducible algebra](https://en.wikipedia.org/wiki/Subdirectly_irreducible_algebra). It says: “two elements that are identified by every proper quotient”

**Sources:**

- [Garrett Birkhoff. Subdirect unions in universal algebra (1944).](https://doi.org/10.1090/S0002-9904-1944-08235-9)

### Subdirect factors detect equations

**Remember:** To test an equation, test the algebras that cannot split further.

*Makes the theorem clean to state or prove.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.LO. Level 3: graduate.

**Definition.** A subdirect product is a subalgebra of a product that maps onto each factor. A nontrivial algebra is subdirectly irreducible if every such representation has an injective coordinate map.

**Problem.** An equation holds throughout a variety, a class defined by equations, if it holds in all its subdirectly irreducible members.

**How the definition helps.** Birkhoff’s theorem embeds every algebra in a product of its subdirectly irreducible quotients, so it suffices to test those factors. They are quotients, so they lie in the variety and satisfy the equation (our own deduction). Then the two sides agree in every coordinate, hence in the embedded algebra.

**Wikipedia:** [Subdirectly irreducible algebra](https://en.wikipedia.org/wiki/Subdirectly_irreducible_algebra). It says: “every algebra is subdirectly representable by its subdirectly irreducible quotients.”

**Sources:**

- [Garrett Birkhoff. Subdirect unions in universal algebra (1944).](https://doi.org/10.1090/S0002-9904-1944-08235-9)

### Free retracts lift through surjections

**Remember:** Lift the free generators, then restrict along the embedding.

*True by definition.* MSC 08B30 (Injectives, projectives). arXiv math.LO. Level 3: graduate.

**Definition.** An algebra P is a retract of F if homomorphisms i from P to F and r from F to P satisfy ri = id<sub>P</sub>. A free algebra lifts maps through surjections, because each generator's image has a preimage to send the generator to.

**Problem.** In a variety of algebras, every retract of a free algebra lifts maps through surjective homomorphisms.

**How the definition helps.** Lift for the free algebra, then transfer to P through the retraction (our own proof). Precompose the given map with r, lift the result by choosing preimages of the generators' images, and compose the lift with i. This lifts the original map because ri = id<sub>P</sub>.

**Paper or page:** [Generalization of terms via universal algebra](https://arxiv.org/abs/2502.18259). It says: “If a class of algebras K contains all its free algebras, an algebra P is projective in K if and only if it is a retract of a free algebra in K.”

**Sources:** none listed. No primary source with a working link was found.

### Regular epimorphisms recover algebra surjections

**Remember:** A universal quotient cannot have a proper image.

*Rules out counterexamples.* MSC 08C05 (Categories of algebras). arXiv math.RA. Level 3: graduate.

**Definition.** A regular epimorphism is a homomorphism e that is a coequalizer of some parallel pair u, v. That is, eu = ev, and every homomorphism h with hu = hv factors uniquely as h = h′e.

**Problem.** In every variety of algebras, a homomorphism is surjective exactly when it is a regular epimorphism.

**How the definition helps.** The map from the source onto the image of e equalizes u, v, so it factors through e, and uniqueness forces the image to be everything (our own proof). Conversely, a surjection coequalizes the two projections from its kernel relation, since maps constant on its fibres descend uniquely. The ring epimorphism ℤ → ℚ is not regular, because its image is proper.

**nLab:** [regular epimorphism](https://ncatlab.org/nlab/show/regular+epimorphism), [epimorphism](https://ncatlab.org/nlab/show/epimorphism). It says: “the inclusion ℤ → ℚ is an epimorphism of rings, and of commutative rings.”

**Sources:** none listed. No primary source with a working link was found.

### Relative congruences keep quotients torsion-free

**Remember:** Only congruences whose quotient stays in the class count.

*Rules out counterexamples.* MSC 08C15 (Quasivarieties). arXiv math.LO. Level 3: graduate.

**Definition.** A quasivariety is a class defined by implications from finite lists of equations to one equation. A congruence is relative to the class when its quotient lies in the class.

**Problem.** Relative congruences are closed under intersections. Their least upper bounds may differ from ordinary congruence joins.

**How the definition helps.** The quotient by an intersection embeds in the product of the separate quotients, and quasivarieties are closed under products and subalgebras (our own proof). In torsion-free abelian groups, ℤ² modulo the subgroup generated by (1,0), or by (1,2), is ℤ. Their ordinary join is the subgroup generated by both, whose quotient has order two, so it is not relative.

**Wikipedia:** [Quasivariety](https://en.wikipedia.org/wiki/Quasivariety). It says: “K contains a trivial algebra and is closed under isomorphisms, subalgebras, direct products, and ultraproducts.”

**Sources:** none listed. No primary source with a working link was found.

### Clone inclusions detect formula definability

**Remember:** Polymorphisms preserve whatever the formulas build, witnesses included.

*Makes the theorem clean to state or prove.* MSC 08A40 (Operations and polynomials in algebraic structures, primal algebras). arXiv math.LO. Level 4: research.

**Definition.** A polymorphism of a structure is an operation that preserves every basic relation: applied coordinatewise to member tuples, it gives a member tuple. Primitive positive formulas use atomic relations, equality, conjunction and existential quantifiers, with falsity allowed for the empty relation, and they only build relations that every polymorphism still preserves.

**Problem.** Take two relational structures on the same finite set. The first defines every relation of the second by primitive positive formulas exactly when its polymorphisms preserve those relations.

**How the definition helps.** Preservation survives equality, conjunction and existential quantifiers, so polymorphisms of the first structure preserve every relation it defines (our own explanation). For an existential quantifier, apply the operation to the witnesses as well as the visible inputs (our own explanation). The finite preservation theorem supplies the converse.

**Paper or page:** [Mal'cev clones over a three-element set up to minor-equivalence](https://arxiv.org/abs/2508.06918v1). It says: “Then A pp-defines B if and only if Pol(A) ⊆ Pol(B).”

**Sources:**

- [David Geiger, Closed systems of functions and predicates](https://doi.org/10.2140/pjm.1968.27.95)

### Alternating polymorphisms characterize affine integer programming

**Remember:** Behave like an alternating sum: shuffle same signs, cancel pairs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** An L-input polymorphism from H to H̃ is a homomorphism from Hᴸ to H̃. For odd L ≥ 3 it is alternating if it behaves like the integer sum x₁ − x₂ + x₃ − ⋯ + x<sub>L</sub> (our own picture). That is, permuting the odd positions or the even positions never changes its value, and neither does replacing equal last two inputs by any other equal pair.

**Problem.** Fix a finite promise template (H,H̃). The affine integer programming relaxation solves PCSP(H,H̃) exactly when alternating polymorphisms exist for every odd arity L ≥ 3.

**How the definition helps.** Alternating polymorphisms have the symmetries and cancellation of the alternating integer sums that the relaxation solves (our own explanation). The affine integer programming characterization of Barto, Bulín, Krokhin and Opršal turns correctness into existence of these operations at every odd arity.

**Paper or page:** [Approximate Graph Colouring and Crystals](https://arxiv.org/abs/2210.08293). It says: “AIP solves PCSP(H, H̃) if and only if there exist L-ary alternating polymorphisms from H to H̃ for any odd L ≥ 3.”

**Sources:**

- [Lorenzo Ciardo, Stanislav Živný, Approximate Graph Colouring and Crystals, arXiv:2210.08293 (2022)](https://arxiv.org/abs/2210.08293)
- [Libor Barto, Jakub Bulín, Andrei Krokhin, Jakub Opršal, Algebraic Approach to Promise Constraint Satisfaction, Journal of the ACM (2021)](https://doi.org/10.1145/3457606)

### Cyclic polymorphisms decide the CSP dichotomy

**Remember:** Rotate every argument one place without changing the answer.

*Makes the theorem clean to state or prove.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** A polymorphism of a structure A is a map from Aⁿ to A that preserves every relation of A coordinatewise, and Pol(A) is the set of them. A polymorphism f is cyclic when rotating its inputs one place never changes its value: f(x₁, x₂, …, xₙ) = f(x₂, …, xₙ, x₁).

**Problem.** Let A be a finite relational structure. Then CSP(A) is solvable in polynomial time if Pol(A) contains a cyclic polymorphism of arity at least 2, and NP-hard otherwise.

**How the definition helps.** A single cyclic symmetry is the feature whose presence separates tractable templates from NP-hard ones (our own explanation). The finite CSP dichotomy theorem of Bulatov and Zhuk, in its cyclic polymorphism form, gives both conclusions.

**Paper or page:** [Solving promise equations over monoids and groups](https://arxiv.org/abs/2402.08434), [Solving promise equations over monoids and groups](https://arxiv.org/abs/2402.08434). It says: “Let A be a finite relational structure. Then CSP(A) is tractable if Pol(A) contains a cyclic polymorphism of arity at least 2. Otherwise CSP(A) is NP-hard.”

**Sources:**

- [Alberto Larrauri, Stanislav Živný, Solving promise equations over monoids and groups, ACM Transactions on Computational Logic 26(1) (2024), arXiv:2402.08434](https://arxiv.org/abs/2402.08434)
- [Dmitriy Zhuk, A Proof of the CSP Dichotomy Conjecture, Journal of the ACM (2020)](https://doi.org/10.1145/3402029)
- [Mikael Goldmann, Alexander Russell, The Complexity of Solving Equations over Finite Groups, Information and Computation (2002)](https://doi.org/10.1006/inco.2002.3173)

### Minion homomorphisms are exactly gadget reductions

**Remember:** Renaming variables, then mapping, equals mapping, then renaming.

*Makes the theorem clean to state or prove.* MSC 08A70 (Applications of universal algebra in computer science), 08A40, 68Q25. arXiv cs.CC, math.RA. Level 4: research.

**Definition.** A minor of an n-input operation f gives each input one of m variables, so inputs may be merged or permuted and some variables may go unused. A minion homomorphism is an arity-preserving map between sets of operations closed under minors, and it commutes with taking minors: the image of a minor of f is the same minor of the image of f.

**Problem.** For finite promise templates, PCSP(A,A′) gadget-reduces to PCSP(B,B′) exactly when a minion homomorphism sends Pol(B,B′) into Pol(A,A′).

**How the definition helps.** A gadget reduction replaces each constraint by a pattern of constraints on renamed variables, and renaming variables in constraints matches taking minors of polymorphisms (our own explanation). The characterization of Barto, Bulín, Krokhin and Opršal turns such a reduction into a minion homomorphism in the reverse direction.

**Paper or page:** [An invitation to the promise constraint satisfaction problem](https://arxiv.org/abs/2208.13538). It says: “the following two statements are equivalent: PCSP(A, A′) is reducible to PCSP(B, B′) by a gadget reduction (and hence in log-space), there is a minion homomorphism Pol(B, B′) → Pol(A, A′).”

**Sources:**

- [Andrei Krokhin, Jakub Opršal, An invitation to the promise constraint satisfaction problem, ACM SIGLOG News (2022)](https://doi.org/10.1145/3559736.3559740)
- [Libor Barto, Jakub Bulín, Andrei Krokhin, Jakub Opršal, Algebraic Approach to Promise Constraint Satisfaction, Journal of the ACM (2021)](https://doi.org/10.1145/3457606)

### Named constants force idempotent polymorphisms

**Remember:** Each named singleton forces the all-a input to return a.

*Rules out counterexamples.* MSC 08A70 (Applications of universal algebra in computer science). arXiv math.LO. Level 4: research.

**Definition.** To name the constants of a finite core C, add the one-element relation {a} for each element a of C. A polymorphism preserves every basic relation coordinatewise, so on the constant tuple (a,…,a), whose entries lie in {a}, it must return a.

**Problem.** Naming all elements of a finite core forces each polymorphism f to satisfy f(a,…,a) = a. For a fixed finite relational signature, this preserves the constraint problem up to polynomial-time reductions in both directions.

**How the definition helps.** Preserving the singleton {a} forces f(a,…,a) = a (our own explanation). For example, swapping two elements preserves equality but preserves neither singleton (our own example). The cited core theorem gives polynomial-time reductions between the two constraint problems in both directions.

**Paper or page:** [Mal'cev clones over a three-element set up to minor-equivalence](https://arxiv.org/abs/2508.06918v1). It says: “For a finite relational structure A, let A′ denote its core, extended by all constants. Then A pp-constructs A′ and vice-versa.”

**Sources:** none listed. No primary source with a working link was found.

### Constant terms select unique idempotents

**Remember:** A constant expression that fixes each idempotent leaves room for just one.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.RA. Level 4: research.

**Definition.** In a variety of nonempty algebras whose basic operations have positive arity, an element is idempotent if every basic operation returns it when all inputs equal it. The variety is polarized if one unary term takes a single constant value in each member, and that value is idempotent.

**Problem.** A variety of this kind is polarized exactly when every member has exactly one idempotent.

**How the definition helps.** Every unary term fixes every idempotent, by induction on the term, so a constant term forces all idempotents to equal its value (our own proof). Conversely, the unique idempotent of the free algebra on one generator is a term t(x). Homomorphisms preserve idempotence, so t gives the unique idempotent, a constant, in every member.

**Paper or page:** [Mal'tsev products of varieties, I](https://arxiv.org/abs/2404.08841v1). It says: “Each algebra in V has precisely one idempotent if and only if the variety V is polarized.”

**Sources:**

- [Tomasz Penza, Anna B. Romanowska. Mal'tsev products of varieties, I, Corollary 1.3.](https://arxiv.org/abs/2404.08841v1)

### Filters in residuated lattices are ideals of subtractive varieties

**Remember:** A 1-ideal absorbs every term that returns 1 on inputs 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 08B05 (Equational logic, Mal'tsev conditions), 08A30, 06F05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** With a designated constant 1, an ideal term t(x,y) in tuples x and y satisfies t(x,1) = 1 identically. A 1-ideal is a set that contains 1 and is closed under every ideal term whose y-inputs come from the set, with any x-inputs.

**Problem.** In a commutative integral residuated lattice with normal operators, the 1-ideals are exactly the filters that are closed under the operators. So these filters form a modular lattice, the image of the congruence lattice under θ ↦ 1/θ.

**How the definition helps.** The cited filter characterization identifies the 1-ideals with the filters closed under the normal operators. In our own deduction, s(x,y) = y → x satisfies s(x,x) = 1 and s(x,1) = x, so the variety is subtractive. The ideal theorem for subtractive varieties then makes θ ↦ 1/θ a complete lattice homomorphism onto the modular ideal lattice.

**Paper or page:** [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022), [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022). It says: “If A is a commutative integral residuated lattice with normal operators, then the 1-ideals (which we may call the filters) of A are exactly the filters of the commutative residuated lattice reduct that are closed under fλ”

**Sources:**

- [Paolo Aglianò, Why most papers on filters are really trivial (including this one), arXiv:2309.15022 (2023)](https://arxiv.org/abs/2309.15022)

### Loop identities force relation loops

**Remember:** Apply the same expression to both ends of the edges.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.LO. Level 4: research.

**Definition.** A loop condition asks for one term t that takes equal values on two given lists of variables under every assignment; its pattern graph joins corresponding variables, left to right. A graph on an algebra is compatible if applying any operation coordinatewise to edges gives another edge.

**Problem.** A variety is a class of algebras defined by equations. A loop condition holds throughout a variety exactly when every compatible graph on a member that receives an edge-preserving map from the pattern graph has a loop.

**How the definition helps.** Applying the term coordinatewise to the mapped pattern edges gives an edge by compatibility, and the identity makes its two ends equal (our own proof). Conversely, take the compatible graph generated by the pattern edges in the free algebra on the variables. Its loop is a term applied to those edges, and equality in the free algebra gives the identity.

**Paper or page:** [Loop conditions with strongly connected graphs](https://arxiv.org/abs/1810.03177v1). It says: “For any algebra A ∈ V and any digraph G compatible with A, if there is a digraph homomorphism G꜀ → G, then G has a loop.”

**Sources:**

- [Miroslav Olšák. Loop conditions with strongly connected graphs, Proposition 2.2.](https://arxiv.org/abs/1810.03177v1)

### Malcev theories are exactly those whose simplicial algebras are Kan

**Remember:** A Malcev term cancels a repeated pair at either end.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions), 18N50. arXiv math.AT, math.RA. Level 4: research.

**Definition.** A theory is Malcev if some ternary term p satisfies p(x,x,y) = y and p(x,y,y) = x for all x and y. A simplicial set is Kan if, in every positive dimension, every horn, a simplex boundary with one face missing, extends to a full simplex.

**Problem.** An algebraic theory is Malcev exactly when all its simplicial algebras are Kan complexes. For groups this is Moore's theorem that simplicial groups are Kan.

**How the definition helps.** The Malcev–Kan characterization turns one cancellation term into fillers for all horns. In our own explanation, p lets the filler construction correct one face while keeping the earlier faces matched. Conversely, the characterization recovers such a term from horn filling.

**Paper or page:** [Examples and cofibrant generation of effective Kan fibrations](https://arxiv.org/abs/2402.10568). It says: “Let 𝒯 be an algebraic theory. The following are equivalent: (i) 𝒯 is a Malcev theory. … (iii) All simplicial algebras of 𝒯 are Kan complexes.”

**Sources:**

- [Benno van den Berg, Freek Geerligs, Examples and cofibrant generation of effective Kan fibrations, arXiv:2402.10568 (2024)](https://arxiv.org/abs/2402.10568)

### Size bounds give rewriting tables

**Remember:** Finitely many generated algebras, so finitely many terms to tabulate.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions). arXiv math.LO. Level 4: research.

**Definition.** A pseudovariety is a class of finite algebras with the same operations, closed under quotients, subalgebras and finite products. It is uniformly locally finite if every subalgebra generated by k elements has size bounded by a number depending only on k. With finitely many basic operations, only finitely many k-generated members then exist up to isomorphism (our own).

**Problem.** Fix k ≥ 1 and a uniformly locally finite pseudovariety with finitely many basic operations of finite arity. A finite table then decides whether two terms in k variables agree throughout the class.

**How the definition helps.** Terms in k variables take only finitely many lists of values on the finitely many k-generated members with marked generators (our own). Pick one representative term for each list and tabulate each basic operation on the representatives (our own). Two terms agree throughout the class exactly when evaluating them through the table gives the same representative (our own).

**Paper or page:** [Finite model theory for pseudovarieties and universal algebra: preservation, definability and complexity](https://arxiv.org/abs/2212.02653). It says: “for every term t(x⃗) there is a unique i ≤ ℓ such that K ⊨ t(x⃗) ≈ uᵢ(x⃗)”

**Sources:**

- [Finite model theory for pseudovarieties and universal algebra: preservation, definability and complexity](https://arxiv.org/abs/2212.02653)

### Absorbing polynomials make commutators symmetric

**Remember:** The absorbing pairs ignore the order of the congruences.

*True by definition.* MSC 08B10 (Congruence modularity, congruence distributivity). arXiv math.RA. Level 4: research.

**Definition.** A k-input polynomial f, built from the operations, variables and fixed parameters, absorbs a tuple a if f(x) = f(a) whenever x agrees with a in at least one coordinate. In an algebra with a Malcev term, the higher commutator of α₁,…,α<sub>k</sub> is the congruence generated by the pairs (f(a),f(b)) with f absorbing a and each (aᵢ,bᵢ) in αᵢ.

**Problem.** In an algebra with a Malcev term, permuting a list of congruences leaves its higher commutator unchanged.

**How the definition helps.** The generating set treats every coordinate alike, so permuting the congruences only reindexes it (our own proof). Reindexing the tuples and the polynomial's arguments together preserves absorption. So the permuted list has exactly the same generating pairs.

**Paper or page:** [CSAT and CEQV for nilpotent Maltsev algebras of Fitting length &gt; 2](https://arxiv.org/abs/2105.00689v2). It says: “Then \[α₁,…,αₖ\] is generated as a congruence by the set”

**Sources:**

- [Michael Kompatscher, CSAT and CEQV for nilpotent Maltsev algebras of Fitting length &gt; 2, Theorem 7](https://arxiv.org/abs/2105.00689v2)

### Distributivity bounds irreducible factor sizes

**Remember:** Distributivity keeps irreducible members inside images of the finite generators.

*Makes the theorem clean to state or prove.* MSC 08B26 (Subdirect products and subdirect irreducibility). arXiv math.RA. Level 4: research.

**Definition.** A variety is congruence-distributive if each member's lattice of congruences satisfies the distributive law. A nontrivial algebra is subdirectly irreducible if it cannot be split: every embedding into a product with surjective coordinate maps has an injective coordinate map.

**Problem.** Suppose finitely many finite algebras generate a congruence-distributive variety. Each subdirectly irreducible member has at most as many elements as the largest generator.

**How the definition helps.** Jónsson's lemma places each subdirectly irreducible member in a quotient of a subalgebra of an ultraproduct of generators, up to isomorphism. An ultraproduct of algebras from a finite list of finite algebras is isomorphic to one of them. Subalgebras and quotients cannot increase size (our own deduction).

**Wikipedia:** [Subdirectly irreducible algebra](https://en.wikipedia.org/wiki/Subdirectly_irreducible_algebra). It says: “By Jónsson's Lemma, subdirectly irreducible algebras of a congruence-distributive variety generated by a finite set of finite algebras are no larger than the generating algebras”

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “Suppose that K is a class of algebras such that V(K) = V is congruence distributive”

**Sources:**

- [Bjarni Jónsson, Algebras whose congruence lattices are distributive](https://doi.org/10.7146/math.scand.a-10850)

### Equational Noetherianity yields separating maps

**Remember:** Finitely many equations suffice, so each distinct pair has a separating map.

*True by definition.* MSC 08C15 (Quasivarieties), 08A45. arXiv math.RA. Level 4: research.

**Definition.** A class K is equationally Noetherian if every system of equations in finitely many variables can be replaced by a finite subsystem with the same solutions in each member of K.

**Problem.** Let K be an equationally Noetherian class in one fixed signature. Every finitely generated member of the quasivariety generated by K embeds into a product of members of K.

**How the definition helps.** A finite subsystem turns all relations of a finite generating tuple into one conditional equation, so each pair of distinct elements is separated by some homomorphism into K (our own proof). Otherwise that conditional equation, concluding that the two elements are equal, would hold throughout the quasivariety, which contradicts their distinctness. The product of the separating homomorphisms is injective.

**Paper or page:** [Coherent Conditions: Algebraic Geometry for Arbitrary Classes of Algebras](https://arxiv.org/abs/2510.23647v1). It says: “A is separated by K”

**Sources:**

- [K. R. van Nispen, Coherent Conditions: Algebraic Geometry for Arbitrary Classes of Algebras, Theorem 4.6](https://arxiv.org/abs/2510.23647v1)

### Free algebras give structural cores

**Remember:** Generate from the free algebra and keep the same free algebra.

*True by definition.* MSC 08C15 (Quasivarieties). arXiv math.LO. Level 4: research.

**Definition.** A quasivariety is a class of algebras defined by implications from finitely many equations to one equation. It is structurally complete if it is the smallest quasivariety containing its own free algebra on countably infinitely many generators.

**Problem.** The quasivariety generated by the countably generated free algebra of any quasivariety is structurally complete.

**How the definition helps.** The free algebra stays free in the smaller quasivariety it generates, because every assignment into that class still extends uniquely (our own proof). So that class is generated by its own free algebra, which is the definition. The cited characterization matches this with minimality among quasivarieties having the same equations.

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “is structurally complete and it is the structural core of Q.”

**Sources:**

- [Paolo Aglianó, Alex Citkin. Structural completeness in quasivarieties, Corollary 3.2.](https://arxiv.org/abs/2401.02754v1)
