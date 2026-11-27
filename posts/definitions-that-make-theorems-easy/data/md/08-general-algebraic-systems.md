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

### Closure under subalgebras and products gives free algebras

**Remember:** Take all generated models together, then keep the part generated by the common inputs.

*True by definition. Confidence: medium.* MSC 08B20 (Free algebras), 08C15. arXiv math.RA, math.LO. Level 3: graduate.

**Definition.** In the closure description, a variety is a class of algebras with fixed operations, closed under quotients, subalgebras and products. A free algebra in the class has a map from the set S of generators. Every assignment of S in an algebra in the class extends uniquely to an algebra homomorphism. The usual term construction instead identifies expressions in S that are equal in every algebra of the class.

**Problem.** Consider a nonempty class of nonempty algebras with fixed operations of finite arity. If it is closed under subalgebras, products and isomorphic copies, it has a free algebra on every nonempty set.

**How the definition helps.** The closure description lets us build a free algebra inside one product, without first turning the class into equations. Our own proof lists, up to isomorphism, the algebras equipped with a generating map from S. There is only a set of these because every element is the value of a finite expression in the generators. Take the product and keep the subalgebra generated by the tuple of the listed maps. Every assignment into a member of the class generates a listed algebra up to isomorphism, so a projection gives its extension. The extension is unique because the chosen elements generate the subalgebra.

**Wikipedia:** [Variety (universal algebra)](https://en.wikipedia.org/wiki/Variety_%28universal_algebra%29). It says: “One can show that for every set S, the variety V contains a free algebra Fₛ on S.”

**Sources:**

- [G. Birkhoff, On the structure of abstract algebras, Mathematical Proceedings of the Cambridge Philosophical Society 31 (1935)](https://doi.org/10.1017/S0305004100013463)

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

### Filters in residuated lattices are ideals of subtractive varieties

**Remember:** Many filter theorems are the general ideal theory of subtractive varieties.

*True by definition. Confidence: medium.* MSC 08B05 (Equational logic, Mal'tsev conditions), 08A30, 06F05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** Let V be a variety of algebras with a constant 0. V is subtractive if it has a binary term s with s(x, x) = 0 and s(x, 0) = x. In a subtractive variety, Ursini's ideals are exactly the classes 0/θ: the elements congruent to 0 under some congruence θ. In residuated lattices the constant is 1, and these ideals are the filters.

**Problem.** A residuated lattice is a lattice with a product and a matching implication. Many papers define new kinds of filters on residuated lattices and similar algebras. They then prove lattice and correspondence properties for each kind separately.

**How the definition helps.** If the filters are the ideals of a subtractive variety, the general theory of such varieties gives their properties at once. The quoted theorem shows that the filters of residuated lattices with extra operators are 1-ideals in this sense. The data set also states that a variety is subtractive exactly when its congruences permute at 0. In a subtractive variety, θ ↦ 0/θ is a complete lattice homomorphism from congruences onto ideals, and the ideals form a modular lattice. So each new kind of filter inherits these lattice properties without a new proof (our own summary of the title's claim). Our own example: in residuated lattices s(x, y) = y → x works, since x → x = 1 and 1 → x = x.

**Paper or page:** [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022), [Why most papers on filters are really trivial (including this one)](https://arxiv.org/abs/2309.15022). It says: “If A is a commutative integral residuated lattice with normal operators, then the 1-ideals (which we may call the filters) of A are exactly the filters of the commutative residuated lattice reduct that are closed under fλ”

**Sources:**

- [Paolo Aglianò, Why most papers on filters are really trivial (including this one), arXiv:2309.15022 (2023)](https://arxiv.org/abs/2309.15022)

### Malcev theories are exactly those whose simplicial algebras are Kan

**Remember:** A Malcev term fills horns, so simplicial algebras are Kan.

*Makes the theorem clean to state or prove.* MSC 08B05 (Equational logic, Mal'tsev conditions), 18N50. arXiv math.AT, math.RA. Level 4: research.

**Definition.** An algebraic theory is a list of operations and equations, like the theory of groups. It is Malcev when it has a term p(x,y,z) with p(x,x,y) = y and p(x,y,y) = x. Groups have p(x,y,z) = x y⁻¹ z. A Kan complex is a simplicial set in which every horn has a filler.

**Problem.** Simplicial groups are always Kan complexes, by a classical theorem of Moore. Which algebraic theories share this property?

**How the definition helps.** The Malcev term lets one build horn fillers by a formula (our own summary). So every simplicial algebra of the theory is a Kan complex. The corollary also gives the converse, so the Malcev condition is exactly right. The paper adds that the fillers can be chosen in a uniform, effective way. Moore's theorem for simplicial groups is a special case (our own).

**Paper or page:** [Examples and cofibrant generation of effective Kan fibrations](https://arxiv.org/abs/2402.10568). It says: “Let 𝒯 be an algebraic theory. The following are equivalent: (i) 𝒯 is a Malcev theory. … (iii) All simplicial algebras of 𝒯 are Kan complexes.”

**Sources:**

- [Benno van den Berg, Freek Geerligs, Examples and cofibrant generation of effective Kan fibrations, arXiv:2402.10568 (2024)](https://arxiv.org/abs/2402.10568)
