### Compatible equivalences give algebra quotients

**Remember:** Do the operation on representatives, then take the class.

*Rules out counterexamples.* MSC 08A30 (Subalgebras, congruence relations). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A congruence is an equivalence relation for which replacing inputs by equivalent inputs gives equivalent outputs. To operate on classes, choose one representative from each class, apply the operation, and take the class of the result.

**Problem.** Every congruence defines a quotient algebra, and the map sending an element to its class preserves all operations.

**How the definition helps.** Compatibility makes the result independent of the chosen representatives. Our own illustration uses 1 and −1, which have equal absolute values. Adding 1 gives 2 and 0, which do not. Compatibility rules out this failure before we define the quotient.

**Wikipedia:** [Congruence relation](https://en.wikipedia.org/wiki/Congruence_relation). It says: “A congruence relation on the structure is then defined as an equivalence relation that is also compatible.”

**Paper or page:** [Absolute Value induces Equivalence not Compatible with Integer Addition](https://proofwiki.org/wiki/Absolute_Value_induces_Equivalence_not_Compatible_with_Integer_Addition). It says: “Then R is not a congruence relation for integer addition.”

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

### Closure under subalgebras and products gives free algebras

**Remember:** Take all generated models together, then keep the part generated by the common inputs.

*True by definition. Confidence: medium.* MSC 08B20 (Free algebras), 08C15. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** In the closure description, a variety is a class of algebras with fixed operations, closed under quotients, subalgebras and products. A free algebra in the class has a map from the set S of generators. Every assignment of S in an algebra in the class extends uniquely to an algebra homomorphism. The usual term construction instead identifies expressions in S that are equal in every algebra of the class.

**Problem.** Consider a nonempty class of nonempty algebras with fixed operations of finite arity. If it is closed under subalgebras, products and isomorphic copies, it has a free algebra on every nonempty set.

**How the definition helps.** The closure description lets us build a free algebra inside one product, without first turning the class into equations. Our own proof lists, up to isomorphism, the algebras equipped with a generating map from S. There is only a set of these because every element is the value of a finite expression in the generators. Take the product and keep the subalgebra generated by the tuple of the listed maps. Every assignment into a member of the class generates a listed algebra up to isomorphism, so a projection gives its extension. The extension is unique because the chosen elements generate the subalgebra.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “One can show that for every set S, the variety V contains a free algebra Fₛ on S.”

**Sources:**

- [G. Birkhoff, On the structure of abstract algebras, Mathematical Proceedings of the Cambridge Philosophical Society 31 (1935)](https://doi.org/10.1017/S0305004100013463)

### Free Steiner generators extend bijections

**Remember:** Extend a bijection and its inverse from the free generators.

*True by definition.* MSC 08B20 (Free algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A Steiner quasigroup has a commutative product with xx = x and x(xy) = y. A generating set is free if every assignment to any Steiner quasigroup extends uniquely to a map that preserves multiplication.

**Problem.** Every bijection between free generating sets of Steiner quasigroups extends to an isomorphism.

**How the definition helps.** The extension property gives maps in both directions from the bijection and its inverse. Our own check uses uniqueness twice. Each composite fixes every generator, so it equals the identity. With a construction by expressions, the work lies in proving that substitution gives a unique map preserving multiplication.

**Paper or page:** [Endomorphisms of free Steiner quasigroups](https://arxiv.org/abs/2412.06055v3). It says: “In fact, every bijection between A and B can be extended to an isomorphism between M and N.”

**Sources:**

- [Silvia Barbina, Enrique Casanovas. Endomorphisms of free Steiner quasigroups, Corollary 2.10.](https://arxiv.org/abs/2412.06055v3)

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

### Free algebras give structural cores

**Remember:** Generate from the free algebra and keep the same free algebra.

*True by definition.* MSC 08C15 (Quasivarieties). arXiv math.LO. Level 4: research.

**Definition.** A quasivariety is a class of algebras defined by implications between finite lists of equations and single equations. In its free algebra, every assignment of the generators into a member extends uniquely to a map preserving the operations. The quasivariety is structurally complete if it is the smallest quasivariety containing its free algebra on countably infinitely many generators.

**Problem.** The quasivariety generated by the countably generated free algebra of any quasivariety is structurally complete.

**How the definition helps.** Our own proof uses the same free algebra twice. It belongs to the smaller quasivariety it generates, and assignments into that class still extend uniquely. Thus it remains free there and generates the whole smaller class. The characterization theorem identifies this generation test with minimality among quasivarieties having the same equations.

**Paper or page:** [Structural completeness in quasivarieties](https://arxiv.org/abs/2401.02754v1). It says: “is structurally complete and it is the structural core of Q.”

**Sources:**

- [Paolo Aglianó, Alex Citkin. Structural completeness in quasivarieties, Corollary 3.2.](https://arxiv.org/abs/2401.02754v1)
