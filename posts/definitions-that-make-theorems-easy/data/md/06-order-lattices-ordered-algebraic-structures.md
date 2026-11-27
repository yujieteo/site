### Lexicographic comparison gives total orders

**Remember:** The first difference settles the comparison.

*True by definition.* MSC 06A05 (Total orders). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Compare two tuples of a fixed finite length at their first unequal coordinate. A total order compares every pair, so this rule differs from requiring every coordinate to be at most its counterpart.

**Problem.** Lexicographic comparison of tuples from totally ordered sets gives a total order.

**How the definition helps.** The first difference always decides which of two distinct tuples comes first. For transitivity, use the earlier of the two first differences (our own). If they coincide, transitivity in that coordinate decides the comparison (our own). Coordinatewise comparison leaves (0, 1) and (1, 0) incomparable (our own).

**nLab:** [lexicographic order](https://ncatlab.org/nlab/show/lexicographic+order). It says: “if x, y ∈ L and x ≠ y, then x &lt; y iff xᵢ &lt; yᵢ where i is the least element in the set {j ∈ I : xⱼ ≠ yⱼ}.”

**Paper or page:** [Lexicographic Order on Pair of Totally Ordered Sets is Total Ordering](https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Totally_Ordered_Sets_is_Total_Ordering). It says: “is a total ordering on S₁ × S₂”

**Sources:** none listed. No primary source with a working link was found.

### Well-ordering gives strong induction

**Remember:** Any failure would have a first failure.

*Rules out counterexamples.* MSC 06A05 (Total orders). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A well-order is a total order in which every nonempty subset has a least element. Totality alone says only that every pair can be compared.

**Problem.** A claim about natural numbers holds everywhere if its truth at all smaller numbers implies its truth at each number.

**How the definition helps.** The well-ordering of the natural numbers supplies a first counterexample whenever the claim fails (our own). All earlier elements then satisfy the claim and force it to hold at that counterexample (our own). On the integers, the claim that every integer is nonnegative satisfies the earlier-elements implication but is false (our own). For any integer there is a smaller negative integer, so the premise of that implication never holds (our own).

**Wikipedia:** [Well-order](https://en.wikipedia.org/wiki/Well-order). It says: “the standard ordering ≤ of the integers is not a well ordering”

**Paper or page:** [Well-Ordered Induction](https://proofwiki.org/wiki/Well-Ordered_Induction). It says: “That is, if a property passes from the initial segment of x to x, then this property is true for all x ∈ A.”

**Sources:** none listed. No primary source with a working link was found.

### Antisymmetry makes least elements unique

**Remember:** Two least elements each lie below the other.

*Rules out counterexamples.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A preorder is a reflexive and transitive comparison. A partial order also requires antisymmetry, which means that x ≤ y and y ≤ x force x = y.

**Problem.** Any subset of a partially ordered set has at most one least element.

**How the definition helps.** Antisymmetry turns the two comparisons between least elements into equality (our own). Each least element is at most every element of the subset, including the other least element (our own). Divisibility on all integers lacks antisymmetry and has two least elements, 1 and −1 (our own).

**Wikipedia:** [Partially ordered set](https://en.wikipedia.org/wiki/Partially_ordered_set). It says: “i.e. no two distinct elements precede each other.”

**Paper or page:** [Smallest Element is Unique](https://proofwiki.org/wiki/Smallest_Element_is_Unique). It says: “If S has a smallest element, then it can have only one.”

**Sources:** none listed. No primary source with a working link was found.

### The order dual gives every order theorem a second theorem free

**Remember:** Turn the Hasse diagram upside down and every theorem still holds.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The dual of a partially ordered set P is the same set with the order reversed. So x ≤ y in the dual exactly when y ≤ x in P. The dual of a statement reverses every order relation and swaps each notion for its dual, such as join for meet.

**Problem.** If a statement holds for all partially ordered sets, then its dual statement also holds for all partially ordered sets. This is the duality principle.

**How the definition helps.** The axioms of a partial order do not change when the order is reversed, so the dual of a partially ordered set is again one. A statement true for all partially ordered sets is then true for every dual. Read in the original set, this is the dual statement. So each theorem about least upper bounds gives a theorem about greatest lower bounds with no new proof. Ideals and filters, and closure and kernel operators, are dual pairs in this way. The limit is that the principle needs a class of orders that is closed under duals. For example, Heyting algebras, the algebras of intuitionistic logic, are not closed under duals (our own).

**Wikipedia:** [Duality (order theory)](https://en.wikipedia.org/wiki/Duality_%28order_theory%29). It says: “The importance of this simple definition stems from the fact that every definition and theorem of order theory can readily be transferred to the dual order.”

**Sources:** none listed. No primary source with a working link was found.

### Ties turn preorders into partial orders

**Remember:** Treat mutual comparisons as ties, then order the tie classes.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A preorder is a reflexive and transitive relation. Group elements into classes by putting x and y together when x ≤ y and y ≤ x. Order the class of x below or equal to the class of y when x ≤ y.

**Problem.** The classes of a preorder under mutual comparison form a partially ordered set.

**How the definition helps.** Classes make antisymmetry automatic because comparison both ways puts the representatives in the same class. Transitivity makes the comparison independent of the representatives (our own). For integer divisibility, each class consists of an integer and its negative (our own).

**nLab:** [preorder](https://ncatlab.org/nlab/show/preorder). It says: “Then the quotient set P / ∼ is a poset.”

**Sources:** none listed. No primary source with a working link was found.

### Cover relations recover finite orders

**Remember:** Follow upward steps to recover comparisons.

*Rules out counterexamples.* MSC 06A07 (Combinatorics of partially ordered sets). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In a partially ordered set, y covers x if x &lt; y and nothing lies strictly between them. A Hasse diagram draws only these steps and leaves out comparisons that follow by transitivity.

**Problem.** In a finite partially ordered set, x &lt; y exactly when a path of one or more upward cover steps leads from x to y.

**How the definition helps.** Keeping only covers still records every comparison because each finite interval can be crossed in immediate steps (our own). Choose the next element as a minimal element above the current one and at most y (our own). Each step rises, so finiteness forces arrival at y (our own). In the rational numbers, every two distinct numbers have another between them, so there are no covers (our own).

**nLab:** [Hasse diagram](https://ncatlab.org/nlab/show/Hasse+diagram). It says: “its Hasse diagram encodes the minimal amount of information necessary to reproduce the ordering relation.”

**Wikipedia:** [Hasse diagram](https://en.wikipedia.org/wiki/Hasse_diagram). It says: “a type of mathematical diagram used to represent a finite partially ordered set”

**Sources:** none listed. No primary source with a working link was found.

### Defining transitive closure as the smallest transitive relation gives existence for free

**Remember:** Smallest by definition, chains by theorem.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 03E20. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** The transitive closure of a relation R is the smallest transitive relation that contains R. It exists because the intersection of all transitive relations that contain R is transitive and contains R. The chain description says x R⁺ y when there is a finite chain x = s₀ R s₁ R … R sₙ = y.

**Problem.** Show that the transitive closure of any relation exists. Then describe it concretely by finite chains.

**How the definition helps.** With the smallest-relation definition, existence and uniqueness are immediate, and the work moves to the theorem that the chain relation is that smallest relation. The family of transitive relations containing R is never empty, because S × S is one of them. ProofWiki proves that the chain relation, and the union of the powers of R, are transitive and lie inside every transitive relation that contains R. Our own remark: the same pattern defines the subgroup generated by a set and the convex hull of a set. Each is first an intersection, and then a formula with words or combinations is proved. The proofs that the descriptions agree are short inductions on chain length.

**Paper or page:** [Equivalence of Definitions of Transitive Closure of Relation/Union of Compositions is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Union_of_Compositions_is_Smallest), [Equivalence of Definitions of Transitive Closure of Relation/Finite Chain is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Finite_Chain_is_Smallest). It says: “Then ℛ⁺ is the smallest transitive relation on S that contains ℛ.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Transitive Closure of Relation/Union of Compositions is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Union_of_Compositions_is_Smallest)
- [ProofWiki, Equivalence of Definitions of Transitive Closure of Relation/Finite Chain is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Finite_Chain_is_Smallest)

### Absorption makes lattice orders agree

**Remember:** Absorption makes meet and join agree about which element is larger.

*Rules out counterexamples.* MSC 06B05 (Structure theory of lattices). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An algebraic definition of a lattice uses two commutative and associative operations, ∧ and ∨. Each operation gives x when applied to x twice. The absorption laws are x ∧ (x ∨ y) = x and x ∨ (x ∧ y) = x.

**Problem.** The two operations determine one order in which ∧ is greatest lower bound and ∨ is least upper bound.

**How the definition helps.** Absorption makes the two order tests agree. Define x ≤ y when x ∧ y = x. Absorption makes this equivalent to x ∨ y = y. The operation laws then make ∧ the greatest lower bound and ∨ the least upper bound. Without absorption, both operations could be minimum on {0, 1}, giving opposite orders (our own).

**nLab:** [lattice](https://ncatlab.org/nlab/show/lattice). It says: “Notice that the absorption laws guarantee that these two descriptions of ≤ agree.”

**Paper or page:** [Structure with Commutative Idempotent Associative Operations satisfying Absorption Laws is Lattice](https://proofwiki.org/wiki/Structure_with_Commutative_Idempotent_Associative_Operations_satisfying_Absorption_Laws_is_Lattice). It says: “Then there exists a unique lattice ordering ≼ on S such that”

**Sources:** none listed. No primary source with a working link was found.

### Dedekind completeness is exactly what makes closed bounded sets compact

**Remember:** In ℚ, the rationals between 0 and 2 are closed, bounded and not compact.

*Rules out counterexamples.* MSC 06A05 (Total orders), 06B23, 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A linearly ordered space is a totally ordered set with the order topology, which open rays generate. It is Dedekind complete when every nonempty subset that is bounded above has a least upper bound.

**Problem.** In a linearly ordered space, every closed and bounded subset is compact exactly when the order is Dedekind complete.

**How the definition helps.** The theorem shows that Dedekind completeness is the exact condition for the Heine–Borel property, not only one sufficient condition. So the Heine–Borel theorem for ℝ holds because ℝ is Dedekind complete. Our own example: in ℚ, the set of rationals between 0 and 2 is closed and bounded. It is not compact, because a sequence of rationals that tends to √2 has no subsequence that converges in it. Our own remark: the main work is in the direction from completeness to compactness, and it copies the proof for \[a, b\] in ℝ. That proof takes the supremum of the points up to which a finite subcover exists.

**Paper or page:** [Heine-Borel iff Dedekind Complete](https://proofwiki.org/wiki/Heine-Borel_iff_Dedekind_Complete). It says: “every closed, bounded subset of X is compact.”

**Sources:**

- [ProofWiki, Heine-Borel iff Dedekind Complete](https://proofwiki.org/wiki/Heine-Borel_iff_Dedekind_Complete)

### Dedekind completeness skips the empty set, whose supremum is a least element

**Remember:** The supremum of nothing is the bottom, and ℝ has no bottom.

*Rules out counterexamples.* MSC 06A05 (Total orders), 06B23. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** An ordered set is Dedekind complete when every nonempty subset that is bounded above has a supremum. A complete lattice is an ordered set in which every subset, the empty set included, has a supremum and an infimum.

**Problem.** Every element is an upper bound of the empty set, so sup ∅ exists only when there is a least element. A definition that asked every set bounded above to have a supremum would make ℝ incomplete.

**How the definition helps.** The word nonempty removes the one subset that would make ℝ fail. Every element of S is an upper bound of ∅, so ProofWiki shows that sup ∅ is the smallest element of S, when it exists. ProofWiki shows that, with the nonempty clause, Dedekind completeness is self-dual: it is the same as asking for infima of nonempty sets bounded below. Our own remark: without the clause, ℕ would pass, but its reverse order would fail because it has no least element. ProofWiki also shows that a Dedekind complete set with a top and a bottom is a complete lattice. The bottom serves as sup ∅, and the top as inf ∅. Our own example: the extended real line from −∞ to +∞ is such a complete lattice.

**Paper or page:** [Infimum of Empty Set is Greatest Element](https://proofwiki.org/wiki/Infimum_of_Empty_Set_is_Greatest_Element), [Supremum of Empty Set is Smallest Element](https://proofwiki.org/wiki/Supremum_of_Empty_Set_is_Smallest_Element), [Dedekind Completeness is Self-Dual](https://proofwiki.org/wiki/Dedekind_Completeness_is_Self-Dual), [Dedekind-Complete Bounded Ordered Set is Complete Lattice](https://proofwiki.org/wiki/Dedekind-Complete_Bounded_Ordered_Set_is_Complete_Lattice). It says: “Suppose that inf ∅, the infimum of the empty set, exists in S. Then ∀s ∈ S: s ⪯ inf ∅. That is, inf ∅ is the greatest element of S.”

**Sources:**

- [ProofWiki, Infimum of Empty Set is Greatest Element](https://proofwiki.org/wiki/Infimum_of_Empty_Set_is_Greatest_Element)
- [ProofWiki, Supremum of Empty Set is Smallest Element](https://proofwiki.org/wiki/Supremum_of_Empty_Set_is_Smallest_Element)
- [ProofWiki, Dedekind Completeness is Self-Dual](https://proofwiki.org/wiki/Dedekind_Completeness_is_Self-Dual)
- [ProofWiki, Dedekind-Complete Bounded Ordered Set is Complete Lattice](https://proofwiki.org/wiki/Dedekind-Complete_Bounded_Ordered_Set_is_Complete_Lattice)

### Excluding endpoints makes every countable dense order isomorphic to the rationals

**Remember:** No ends and no gaps: every countable such order is ℚ.

*Rules out counterexamples.* MSC 06A05 (Total orders), 03C15, 03C35. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A linear order is dense if between any two elements there is a third. It is unbounded if it has no least and no greatest element.

**Problem.** Every countable dense linear order without endpoints is isomorphic to the rational numbers. In model theory, the theory of such orders has exactly one countable model.

**How the definition helps.** Without endpoints, the back-and-forth method can always place the next element, because there is always room above, below and between. The excluded counterexamples are the rationals in \[0, 1\] and in \[0, 1) (our own example). Both are countable and dense, but neither is isomorphic to ℚ or to the other. The word 'nonempty' excludes the empty order, which is dense and unbounded by default. The back-and-forth construction is the remaining work.

**Wikipedia:** [Cantor's isomorphism theorem](https://en.wikipedia.org/wiki/Cantor%27s_isomorphism_theorem). It says: “Cantor's isomorphism theorem states that every two nonempty countable dense unbounded linear orders are order-isomorphic.”

**Sources:**

- [Cantor, G. (1895). Beiträge zur Begründung der transfiniten Mengenlehre. Mathematische Annalen 46, 481–512.](https://doi.org/10.1007/BF02124929)

### Möbius functions of posets unify inclusion–exclusion

**Remember:** The Möbius function is the inverse of 'is less than or equal to'.

*Makes the theorem clean to state or prove.* MSC 06A07 (Combinatorics of partially ordered sets), 06A11. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A partially ordered set (poset) is locally finite when every interval \[x, y\] is finite. Its zeta function is ζ(x, y) = 1 when x ≤ y. Functions of pairs x ≤ y form the incidence algebra. Its product is convolution: (f∗g)(x, y) is the sum of f(x, z)g(z, y) over all z between x and y. The Möbius function μ is the inverse of ζ under this convolution.

**Problem.** State one inversion theorem that contains three older results: the principle of inclusion–exclusion, classical Möbius inversion in number theory, and the finite difference calculus.

**How the definition helps.** Defining μ as the inverse of ζ turns all three results into special cases of one formula. Möbius functions of posets go back to Weisner and Philip Hall in the 1930s. Rota (1964) made Möbius inversion a single theorem about inverting ζ in the incidence algebra of any locally finite poset. For finite subsets ordered by inclusion, μ(S, T) = (−1)ᵏ with k the size of T ∖ S, so Möbius inversion is inclusion–exclusion. For positive integers ordered by divisibility, convolution becomes Dirichlet convolution and μ is the classical Möbius function. For the natural numbers in their usual order, Möbius inversion is the backward difference operator. Computing μ for a given poset can still be hard (our own remark).

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “whenever S and T are finite subsets of E with S ⊆ T, and Möbius inversion is called the principle of inclusion-exclusion.”

**Sources:**

- [Gian-Carlo Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Zeitschrift für Wahrscheinlichkeitstheorie und Verwandte Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Defining floor by a Galois connection gives its rules by reasoning

**Remember:** Floor is the best integer below x, and that defines everything.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.CO, math.CT. Level 2: later undergraduate.

**Definition.** A monotone Galois connection between partial orders A and B is a pair of maps, F from A to B and G back. They satisfy F(a) ≤ b exactly when a ≤ G(b). F is the lower adjoint and G the upper adjoint. The floor function is the upper adjoint of the inclusion of the integers into the real numbers.

**Problem.** The floor function satisfies rules such as ⌊x + n⌋ = ⌊x⌋ + n for integers n. One wants to prove such rules without case analysis.

**How the definition helps.** The rule n ≤ x exactly when n ≤ ⌊x⌋ turns each claim about floors into a chain of equivalences. Take any integer m (our own steps). Then m ≤ ⌊x + n⌋ exactly when m ≤ x + n, so exactly when m − n ≤ x. This holds exactly when m − n ≤ ⌊x⌋, so exactly when m ≤ ⌊x⌋ + n. Two integers with the same integers below them are equal, so the rule follows. The ceiling function comes from the dual connection in the same way. In every Galois connection, one adjoint fixes the other uniquely.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “The well-known properties of the floor function, such as ⌊x+n⌋=⌊x⌋+n, can be derived by elementary reasoning from this Galois connection.”

**Sources:**

- [Ore, O. (1944). Galois connexions. Transactions of the American Mathematical Society 55, 493–513.](https://doi.org/10.2307/1990305)

### Galois connections give the shape of every correspondence theorem

**Remember:** Keep only the closed elements, and every Galois connection is a perfect correspondence.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 18A40. arXiv math.CT, math.RA. Level 2: later undergraduate.

**Definition.** A Galois connection between posets P and Q is a pair of order-reversing maps f : P → Q and g : Q → P. They satisfy p ≤ g(q) exactly when q ≤ f(p). The closed elements are those fixed by g∘f (in P) or by f∘g (in Q).

**Problem.** Many correspondence theorems have the same shape. One is the fundamental theorem of Galois theory: intermediate fields and subgroups of the Galois group correspond, with the order reversed. Another is the correspondence between radical ideals and Zariski-closed sets.

**How the definition helps.** For every Galois connection, the two maps restrict to inverse bijections between the closed elements on the two sides. The proof takes two lines, so the shape of every correspondence theorem holds by definition. The real work in each case is to find the closed elements. In Galois theory, taking fixed fields and taking fixing subgroups is a Galois connection. For a finite Galois extension L/K, every intermediate field is closed because L is Galois over it, and every subgroup is closed by Artin's lemma on fixed fields. For subsets of kⁿ and sets of polynomials, the nLab derives the Zariski topology in this way. For k algebraically closed, the statement that the closed ideals are the radical ideals is the strong Nullstellensatz.

**nLab:** [Galois connection](https://ncatlab.org/nlab/show/Galois+connection), [Galois theory](https://ncatlab.org/nlab/show/Galois+theory), [Zariski topology](https://ncatlab.org/nlab/show/Zariski+topology). It says: “others reserve it for its restriction to its fixed points, where it becomes an adjoint equivalence.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society 55 (1944) 493–513](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### Lower adjoints of Galois connections preserve all existing joins

**Remember:** Lower adjoints keep joins, upper adjoints keep meets, by one line.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.CO, math.CT. Level 2: later undergraduate.

**Definition.** In a monotone Galois connection, F is the lower adjoint and G the upper adjoint when F(a) ≤ b exactly when a ≤ G(b). For complete lattices, the adjoint functor theorem for orders gives the converse: a map that preserves all joins is a lower adjoint.

**Problem.** Show that maps such as the image map of a function, or the span of a set of vectors, preserve unions or joins. One wants one proof for all such maps.

**How the definition helps.** The defining equivalence turns the claim into a statement about upper bounds, so the proof is one chain of equivalences. F(sup S) ≤ b holds exactly when sup S ≤ G(b) (our own steps). This holds exactly when s ≤ G(b) for every s in S, so exactly when F(s) ≤ b for every s. So F(sup S) is the least upper bound of the F(s). Dually, upper adjoints preserve all existing meets. For example, the image map of a function is the lower adjoint of the preimage map, so images preserve unions (our own example). For maps between complete lattices, the converse holds: a map that preserves all joins has a unique upper adjoint.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection), [Complete lattice](https://en.wikipedia.org/wiki/Complete_lattice). It says: “Another important property of Galois connections is that lower adjoints preserve all suprema that exist within their domain.”

**Sources:**

- [Ore, O. (1944). Galois connexions. Transactions of the American Mathematical Society 55, 493–513.](https://doi.org/10.2307/1990305)

### Taking the diamond isomorphism as the definition of a modular lattice

**Remember:** In every diamond a ∧ b, a, b, a ∨ b, opposite sides match.

*True by definition. Confidence: medium.* MSC 06B05 (Structure theory of lattices), 06A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Take a lattice and two elements a and b in it. The map z ↦ z ∧ b goes from the interval \[a, a ∨ b\] to the interval \[a ∧ b, b\], and the map w ↦ a ∨ w goes back. In any lattice, these two maps are adjoint (a Galois connection). The lattice is modular if, for all a and b, these two maps are inverse to each other.

**Problem.** Prove the diamond isomorphism: the intervals \[a ∧ b, b\] and \[a, a ∨ b\] are isomorphic, by z ↦ z ∧ b and w ↦ a ∨ w.

**How the definition helps.** With this definition, the isomorphism of the two intervals is the definition itself. It is also immediate that modularity is self-dual, that is, true in a lattice exactly when it is true in the opposite lattice. The work moves into the proof that this definition agrees with the usual modular law. The modular law says: if a ≤ b, then (a ∨ z) ∧ b = a ∨ (z ∧ b). The definition must also agree with the modular identity, and the nLab proves these equivalences in a few lines each. Examples are the lattices of subspaces of a vector space, of normal subgroups of a group and of two-sided ideals of a ring.

**nLab:** [modular lattice](https://ncatlab.org/nlab/show/modular+lattice). It says: “This is perhaps the most memorable definition for a category theorist: it is a precise expression of the slogan given in the Idea section.”

**Sources:**

- [Richard Dedekind, Ueber die von drei Moduln erzeugte Dualgruppe, Mathematische Annalen 53 (1900) 371–403](https://doi.org/10.1007/BF01448979)

### Asking for all joins gives all meets of a complete lattice

**Remember:** The meet of a set is the join of its lower bounds.

*True by definition.* MSC 06B23 (Complete lattices, completions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A complete lattice is a partially ordered set in which every subset has a least upper bound, called its join. Every subset also has a greatest lower bound, called its meet. The empty set counts, and its join is the least element.

**Problem.** To check that a partially ordered set is a complete lattice, one must find all joins and all meets. One would like to check only half.

**How the definition helps.** The meet of a set X is simply the join of the set of all lower bounds of X. Each element of X is an upper bound of those lower bounds. So the join is below every element of X, and it is the greatest lower bound. The empty set is needed. Its join gives the least element, and the join of the whole set gives the meet of the empty set, the greatest element. So a family of subsets that is closed under all intersections is a complete lattice (our own). Maps that preserve all joins need not preserve meets, so the morphisms still need care.

**Wikipedia:** [Completeness (order theory)](https://en.wikipedia.org/wiki/Completeness_%28order_theory%29), [Complete lattice](https://en.wikipedia.org/wiki/Complete_lattice). It says: “The best-known example is the existence of all suprema, which is in fact equivalent to the existence of all infima.”

**Sources:** none listed. No primary source with a working link was found.

### In a complete lattice every order-preserving map has a fixed point

**Remember:** Every subset has a supremum, even the empty one, so a bottom always exists.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 47H10. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** A complete lattice is a partially ordered set in which every subset has a supremum (least upper bound) and an infimum (greatest lower bound). This includes the empty set. So a complete lattice has a least and a greatest element, and it is never empty.

**Problem.** Every order-preserving map f from a complete lattice to itself has a fixed point. (Order-preserving means that x ≤ y implies f(x) ≤ f(y).) It even has a least and a greatest fixed point.

**How the definition helps.** Completeness supplies the supremum that the proof needs. Tarski proved that the fixed points of an order-preserving map on a complete lattice form a complete lattice. A complete lattice cannot be empty, so there is at least one fixed point. The proof is short: take the supremum of all x with x ≤ f(x). Davis proved the converse: a lattice in which every order-preserving map has a fixed point is complete. So completeness is exactly the right condition.

**Wikipedia:** [Knaster–Tarski theorem](https://en.wikipedia.org/wiki/Knaster%E2%80%93Tarski_theorem). It says: “If every order-preserving function f : L → L on a lattice L has a fixed point, then L is a complete lattice.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications, Pacific Journal of Mathematics 5 (1955)](https://doi.org/10.2140/pjm.1955.5.285)
- [Anne C. Davis, A characterization of complete lattices, Pacific Journal of Mathematics 5 (1955)](https://doi.org/10.2140/pjm.1955.5.311)

### The meet definition makes least-fixed-point induction immediate

**Remember:** The meet of all candidates lies below each one.

*True by definition.* MSC 06B23 (Complete lattices, completions), 03B70. arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** Let f preserve order on a complete lattice, one where every subset has a greatest lower bound and a least upper bound. A prefixed point is an x with f(x) ≤ x. Define μf as the meet, or greatest lower bound, of all prefixed points.

**Problem.** Park induction says that if f(x) ≤ x, then μf ≤ x. Here μf is the least fixed point of f.

**How the definition helps.** The meet definition gives the induction rule immediately because a meet lies below every term in it. A different construction applies f repeatedly starting from the least element. That construction needs extra conditions or a way to continue past the finite stages. The work here lies in proving that μf actually is a fixed point. For every prefixed x, monotonicity gives f(μf) ≤ f(x) ≤ x, so f(μf) ≤ μf. Applying f gives f(f(μf)) ≤ f(μf), so f(μf) is prefixed and μf ≤ f(μf).

**Wikipedia:** [Knaster–Tarski theorem](https://en.wikipedia.org/wiki/Knaster%E2%80%93Tarski_theorem). It says: “⋀P = ⋀{ x ∈ L ∣ x ≥ f(x) } as the least fixpoint of f.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications, Pacific Journal of Mathematics (1955)](https://doi.org/10.2140/pjm.1955.5.285)

### The bottom element is not join-irreducible, so Birkhoff's representation is exact

**Remember:** The bottom is the empty join, as 1 is the empty product.

*Rules out counterexamples.* MSC 06D05 (Structure and representation theory of distributive lattices), 06B15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a lattice, an element is join-irreducible if it is not the join of a finite set of other elements. The bottom element is the join of the empty set, so it is not join-irreducible. A lower set of a poset is a set that contains everything below each of its elements.

**Problem.** Every finite distributive lattice is isomorphic to the lattice of lower sets of its poset of join-irreducible elements. The bottom of the lattice matches the empty lower set.

**How the definition helps.** Leaving the bottom out makes the map from lower sets to elements one-to-one, as leaving 1 out of the primes makes factorizations unique. Suppose the bottom counted as join-irreducible (our own example). Then the empty lower set and the set holding only the bottom would both map to the bottom. With the convention, each element corresponds to the set of join-irreducibles below it, and the bottom to the empty set. The theorem then uses distributivity to show that join-irreducible elements are join-prime. Infinite distributive lattices need more, such as Priestley duality.

**Wikipedia:** [Birkhoff's representation theorem](https://en.wikipedia.org/wiki/Birkhoff%27s_representation_theorem). It says: “Equivalently, x is join-irreducible if it is neither the bottom element of the lattice (the join of zero elements) nor the join of any two smaller elements.”

**Sources:**

- [G. Birkhoff, Rings of sets, Duke Mathematical Journal 3 (1937) 443–454](https://doi.org/10.1215/S0012-7094-37-00334-X)

### The median identity makes distributivity visibly self-dual

**Remember:** Swapping meet and join only exchanges the two sides.

*True by definition.* MSC 06D05 (Structure and representation theory of distributive lattices). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The usual distributive law is x∧(y∨z) = (x∧y)∨(x∧z). An equivalent definition uses the median identity (a∧b)∨(a∧c)∨(b∧c) = (a∨b)∧(a∨c)∧(b∨c).

**Problem.** The order dual of a distributive lattice is distributive. Its order is reversed, so meet and join exchange roles.

**How the definition helps.** The median definition makes duality immediate because exchanging meet and join just swaps the two sides of the identity. With the one-sided law, one must prove the other law separately. The work lies in showing that the median identity and the usual distributive law are equivalent.

**nLab:** [distributive lattice](https://ncatlab.org/nlab/show/distributive+lattice). It says: “A lattice is distributive if and only if the identity (a ∧ b) ∨ (a ∧ c) ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c) ∧ (b ∨ c) is satisfied.”

**Wikipedia:** [Distributive lattice](https://en.wikipedia.org/wiki/Distributive_lattice). It says: “It is a basic fact of lattice theory that the above condition is equivalent to its dual”

**Sources:** none listed. No primary source with a working link was found.

### Atoms exclude zero, so finite Boolean algebras are power sets

**Remember:** Atoms play the part of singletons, and the empty set is no singleton.

*Rules out counterexamples. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras), 06B05. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** Let P be a partially ordered set with least element 0. An atom of P is an element a with 0 &lt; a and nothing strictly between 0 and a. So 0 is never an atom. Atoms are the order-theory version of one-element sets.

**Problem.** Every finite Boolean algebra is isomorphic to the power set of its set of atoms. So the number of elements of a finite Boolean algebra is a power of two.

**How the definition helps.** Atoms are the nonzero minimal elements, so they behave exactly like the singletons of a power set. In a finite Boolean algebra, each element is the join of the atoms below it (our own). The map from an element to the set of atoms below it is then an isomorphism (our own). If 0 counted as an atom, a set of atoms with 0 and the same set without 0 would have the same join (our own). Then the map would not be one-to-one. The Atom page notes that the nonnegative real numbers have no atoms at all. Infinite Boolean algebras can also have no atoms, and then Stone's representation theorem is needed (our own).

**Wikipedia:** [Atom (order theory)](https://en.wikipedia.org/wiki/Atom_%28order_theory%29), [Boolean algebra (structure)](https://en.wikipedia.org/wiki/Boolean_algebra_%28structure%29). It says: “It can be shown that every finite Boolean algebra is isomorphic to the Boolean algebra of all subsets of a finite set.”

**Sources:**

- [Stone, M. H. (1936). The theory of representation for Boolean algebras. Transactions of the American Mathematical Society 40, 37–111.](https://doi.org/10.2307/1989664)

### Distributivity makes complements unique, so negation is an operation

**Remember:** Distributive lattices allow at most one complement per element.

*Rules out counterexamples.* MSC 06E05 (Structure theory of Boolean algebras), 06B05. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** Let L be a lattice with least element 0 and greatest element 1. A complement of an element a is an element b with a ∧ b = 0 and a ∨ b = 1. A Boolean algebra is a complemented distributive lattice.

**Problem.** A Boolean algebra needs a negation operation, so each element must have exactly one complement. In a general lattice, an element can have many complements.

**How the definition helps.** Distributivity forces two complements of the same element to be equal, so complementation is a function. Let b and c both be complements of a (our own steps). Then b = b ∧ (a ∨ c) = (b ∧ a) ∨ (b ∧ c) = b ∧ c. In the same way c = b ∧ c, so b = c. The condition excludes lattices such as the diamond lattice M₃, where each middle element has two complements (our own). The page states that every complemented distributive lattice is a Boolean algebra.

**Wikipedia:** [Complemented lattice](https://en.wikipedia.org/wiki/Complemented_lattice). It says: “In bounded distributive lattices, complements are unique.”

**Sources:** none listed. No primary source with a working link was found.

### Truth tables count the elements of finitely generated free Boolean algebras

**Remember:** Count the truth tables, one output bit for each input tuple.

*True by definition. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras), 03G05. arXiv math.LO, math.RA. Level 2: later undergraduate.

**Definition.** A Boolean algebra has meet, join, complement and constants 0 and 1, as in the algebra of subsets. The free algebra on n generators allows any assignment of them to extend uniquely to a homomorphism. For finite n we can take its elements to be functions from n bits to one bit, with the operations applied to each value. The other construction takes expressions modulo the Boolean algebra laws.

**Problem.** The free Boolean algebra on n generators has 2 raised to the power 2ⁿ elements.

**How the definition helps.** The function definition reduces the count to choosing a bit for each of the 2ⁿ inputs. The work moves into proving that these functions really give the free algebra. In our own argument, each truth table is a join of elementary terms, one for each row with output 1. Each such term is the meet that chooses the variable or its complement in every position. The Boolean laws put every expression into this form, so its truth table determines it in every Boolean algebra.

**Wikipedia:** [Free Boolean algebra](https://en.wikipedia.org/wiki/Free_Boolean_algebra). It says: “Another way to see why the free Boolean algebra on an n-element set has 2<sup>2<sup>n</sup></sup> elements is to note that each element is a function from n bits to one.”

**Sources:** none listed. No primary source with a working link was found.

### Boolean rings make lattice ideals into ring ideals

**Remember:** Turn the Boolean algebra into a ring, and ring theory does the rest.

*Makes the theorem clean to state or prove.* MSC 06E20 (Ring-theoretic properties of Boolean algebras), 06E15. arXiv math.CO, math.RA. Level 2: later undergraduate.

**Definition.** A Boolean ring is a ring in which every element x satisfies x·x = x. A Boolean algebra becomes a Boolean ring with symmetric difference as addition and meet as multiplication. The two constructions are inverse to each other.

**Problem.** Stone wanted to represent every Boolean algebra as an algebra of sets. For this he needed many prime ideals, quotients and a way to build a space from them.

**How the definition helps.** In a Boolean ring, the order ideals of the Boolean algebra are the same as the ring ideals. So the ring theory of ideals, quotients and prime ideals applies directly. For example, every prime ideal of a Boolean ring is maximal. The reason is that the quotient is an integral domain with x·x = x, so it is the field with two elements. Quotients of the ring match factor algebras of the Boolean algebra. What stays hard is to show that there are enough prime ideals. This needs the Boolean prime ideal theorem, a weak form of the axiom of choice (our own).

**Wikipedia:** [Boolean ring](https://en.wikipedia.org/wiki/Boolean_ring), [Boolean algebra (structure)](https://en.wikipedia.org/wiki/Boolean_algebra_%28structure%29). It says: “Furthermore, a subset of a Boolean ring is a ring ideal (prime ring ideal, maximal ring ideal) if and only if it is an order ideal (prime order ideal, maximal order ideal) of the Boolean algebra.”

**Sources:**

- [Stone, M. H. (1936). The theory of representation for Boolean algebras. Transactions of the American Mathematical Society 40, 37–111.](https://doi.org/10.2307/1989664)

### Chain-complete posets give inflationary maps fixed points without choice

**Remember:** Bourbaki–Witt is Zorn's lemma with the choice taken out.

*Makes the theorem clean to state or prove.* MSC 06A06 (Partial orders, general), 03E25. arXiv math.LO, math.CO. Level 3: graduate.

**Definition.** A partially ordered set is chain complete if every chain (totally ordered subset) has a least upper bound. A function f is inflationary if f(x) ≥ x for every x.

**Problem.** If X is a chain-complete partially ordered set and f is inflationary, then f has a fixed point. Zorn's lemma should follow from this with one use of the axiom of choice.

**How the definition helps.** The theorem isolates the part of Zorn's lemma that needs no choice, so choice shrinks to one step. Take a chain-complete set with no maximal element. A choice function picks, for each x, some y &gt; x, which gives an inflationary map with no fixed point. This contradiction proves Zorn's lemma for chain-complete sets. The set of all chains of any partial order, ordered by inclusion, is chain complete. So it has a maximal chain, which is the Hausdorff maximal principle and gives Zorn's lemma. The fixed-point theorem itself is proved with well-ordered subsets, without choice.

**Wikipedia:** [Bourbaki–Witt theorem](https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem). It says: “Note the above argument does not rely on the axiom of choice. (In the case of a proof of Zorn's lemma, Choice is used to define an inflationary map.)”

**Sources:**

- [Bourbaki, N. (1949). Sur le théorème de Zorn. Archiv der Mathematik 2, 434–437.](https://doi.org/10.1007/bf02036949)
- [Witt, E. (1950). Beweisstudien zum Satz von M. Zorn. Mathematische Nachrichten 4, 434–438.](https://doi.org/10.1002/mana.3210040138)

### An up and down relation gives the path count n!

**Remember:** Commuting down past up produces the factors n, n − 1, and so on.

*True by definition.* MSC 06A07 (Combinatorics of partially ordered sets), 05A19. arXiv math.CO. Level 3: graduate.

**Definition.** Take a partially ordered set with a least element and finite levels, where each immediate step up advances one level. On the real vector space with these elements as basis, U sums the immediate successors, and D sums the immediate predecessors. Call the order 1-differential when DU − UD = I, where I is the identity map. Another definition counts the immediate neighbours above and below each element or pair of elements.

**Problem.** In a 1-differential order, exactly n! paths go up n steps from the least element and then back down n steps to it. For partitions ordered by adding one box, this counts pairs of ways to build the same n-box shape.

**How the definition helps.** The operator definition makes one down step after n up steps contribute a factor n on the least element (our own). Move D past the n copies of U using DU = UD + I. This gives DUⁿ = UⁿD + nUⁿ⁻¹, and D sends the least basis element to zero (our own). Repeating gives n!, since matrix entries of these operator products count paths (our own). The local counting definition needs a translation into the operator relation. For partitions, each shape has one more way to add a box than to remove one (our own). Two distinct shapes have one common successor and predecessor if their diagrams differ by moving one box, and neither otherwise (our own).

**Wikipedia:** [Differential poset](https://en.wikipedia.org/wiki/Differential_poset). It says: “Then the second and third conditions may be replaced by the statement that DU − UD = r I (where I is the identity).”

**Sources:**

- [R. P. Stanley, Differential posets, Journal of the American Mathematical Society 1 (1988) 919–961](https://doi.org/10.1090/S0894-0347-1988-0941434-9)

### Möbius inversion on divisor intervals gives the prime formula

**Remember:** Factor a divisor interval into prime-power chains and multiply their Möbius values.

*True by definition.* MSC 06A07 (Combinatorics of partially ordered sets), 11A25. arXiv math.CO, math.NT. Level 3: graduate.

**Definition.** For a finite partially ordered set, let ζ(x, y) = 1 when x ≤ y and 0 otherwise. After listing elements in an order consistent with the partial order, take the inverse matrix as the Möbius function. The ordinary arithmetic definition gives zero if n has a squared prime factor. Otherwise it gives (−1) to the power of the number of distinct primes dividing n.

**Problem.** The Möbius value from 1 to n in the divisibility order equals the arithmetic Möbius function at n.

**How the definition helps.** The inverse definition makes the prime formula a product because the inverse for a product of orders is the product of their inverses. Multiplication of the matrices splits into independent sums in the two coordinates (our own). Unique prime factorization identifies the divisors of n with a finite product of chains of prime powers (our own). In a chain the inverse has 1 on the diagonal, −1 one step above it, and zero elsewhere. The work is to check the product and chain inverse identities. The arithmetic definition starts with the prime formula and instead requires a check that it gives the inverse (our own).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “The Möbius function of the cartesian product P × Q of two posets P and Q is the product of their Möbius functions:”

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “Now the Möbius function of D is the product of the Möbius functions for the factor posets, computed above, giving the classical formula:”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Taking Euler's relation as a definition extends Dehn–Sommerville to Eulerian posets

**Remember:** Euler's relation on every interval is the whole definition of Eulerian.

*True by definition. Confidence: medium.* MSC 06A07 (Combinatorics of partially ordered sets), 52B05. arXiv math.CO. Level 3: graduate.

**Definition.** A graded poset has a rank function that goes up by one along each covering step. It is Eulerian if every nontrivial interval has as many elements of even rank as of odd rank. Equivalently, its Möbius function is μ(x, y) = (−1) raised to the rank difference.

**Problem.** Stanley proved the Dehn–Sommerville equations hₖ = h of (d − k), for his toric h-vector, for any Eulerian poset of rank d + 1. This covers face lattices of polytopes, simplicial homology spheres and intervals of Bruhat orders of Coxeter groups.

**How the definition helps.** The definition keeps exactly the property that the Dehn–Sommerville proof uses, so the proof works in the general setting (our own remark). For a polytope, each interval of the face lattice is itself a face lattice, so the even–odd balance is Euler's formula (our own remark). The empty face and the whole polytope must be included, or the intervals would not all be of this form. The work moves to showing that a given poset is Eulerian, which for polytopes is Euler's formula. For simplicial polytopes the toric h-vector is the usual h-vector, but in general it has no direct combinatorial meaning.

**Wikipedia:** [Eulerian poset](https://en.wikipedia.org/wiki/Eulerian_poset). It says: “The face lattice of a convex polytope, consisting of its faces, together with the smallest element, the empty face, and the largest element, the polytope itself, is an Eulerian lattice.”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 1, second edition, Cambridge University Press (2011)](https://doi.org/10.1017/CBO9781139058520)

### Well-quasi-orders keep the order on subsets well-founded

**Remember:** A well-quasi-order is well-founded and has no infinite antichain.

*Rules out counterexamples. Confidence: medium.* MSC 06A07 (Combinatorics of partially ordered sets), 03E05. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** A quasi-order is a reflexive and transitive relation ≤. A well-quasi-order is a quasi-order in which every infinite sequence x₀, x₁, … has some i &lt; j with xᵢ ≤ xⱼ. This is stronger than being well-founded (having no infinite strictly descending chain). It also forbids infinite antichains, which are infinite sets of elements that are pairwise incomparable.

**Problem.** Derived orders should still be well-founded, so that well-founded induction works on them. One example is the order on subsets with A ≤⁺ B when each element of A is below some element of B.

**How the definition helps.** An infinite antichain can make the subset order descend forever, and a well-quasi-order has no infinite antichain. Well-foundedness alone is not enough: the order ≤⁺ on the power set of a well-founded quasi-order need not be well-founded. Our own example: an infinite antichain a₁, a₂, … gives the descending chain {a₁, a₂, …} &gt;⁺ {a₂, a₃, …} &gt;⁺ ⋯. If the quasi-order is a well-quasi-order, then ≤⁺ is well-founded. The power set order need not itself be a well-quasi-order, and this leads to better-quasi-orders, a stronger notion (our own remark).

**Wikipedia:** [Well-quasi-ordering](https://en.wikipedia.org/wiki/Well-quasi-ordering). It says: “One can show that this quasiordering on P(X) need not be well-founded, but if one takes the original quasi-ordering to be a well-quasi-ordering, then it is.”

**Sources:** none listed. No primary source with a working link was found.

### A geometric series for the Möbius function counts chains

**Remember:** Expand the inverse as a geometric series to count chains with alternating signs.

*True by definition.* MSC 06A11 (Algebraic aspects of posets), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** On a finite partially ordered set, multiply functions on pairs x ≤ y by summing f(x, z)g(z, y) over z between x and y. The identity δ is 1 when x = y and 0 otherwise. Define the Möbius function μ as the inverse of ζ = δ + η, where η is 1 on strict pairs x &lt; y. Another definition calculates μ recursively from values on shorter intervals.

**Problem.** For x &lt; y, μ(x, y) is the sum of the numbers of strict chains from x to y, with sign (−1) to their lengths. The length counts the steps in the chain.

**How the definition helps.** Defining μ as an inverse gives the geometric series δ − η + η² − ⋯ (our own). Multiplication gives ηⁱ(x, y) equal to the number of chains with i steps (our own). The powers vanish beyond the maximum chain length, so multiplication by δ + η telescopes to δ (our own). Starting with the recursion instead requires checking that the alternating chain count obeys it (our own). The geometric series both constructs the inverse and proves the formula.

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “A Möbius function of P is defined as an inverse to the zeta function with respect to the convolution product.”

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “This can be shown using Philip Hall's theorem, relating the value of μ(0,1) to the number of chains of length i.”

**Sources:**

- [P. Hall, The Eulerian functions of a group, Quarterly Journal of Mathematics os-7 (1936) 134–151](https://doi.org/10.1093/qmath/os-7.1.134)
- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Möbius inverses give both recursions and reverse the order

**Remember:** The inverse identity works on both sides and survives reversing the order.

*True by definition.* MSC 06A11 (Algebraic aspects of posets), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** Let P be a partially ordered set with finite intervals \[x, y\]. Multiply functions on comparable pairs by summing f(x, z)g(z, y) over z in \[x, y\]. The Möbius function μ is the two-sided inverse of the function ζ that equals 1 on all comparable pairs x ≤ y. Another definition starts with μ(x, x) = 1 and chooses μ(x, y) so that the sum of μ(x, z) over \[x, y\] is zero.

**Problem.** For x &lt; y, both the sum of μ(x, z) and the sum of μ(z, y) over z in \[x, y\] vanish. Reversing the order exchanges the two arguments of μ.

**How the definition helps.** The two-sided inverse definition gives both sums at once, because multiplying by ζ on either side gives zero off the diagonal. Reversing the order interchanges the factors in every product, so it also reverses the inverse identity (our own). Starting with one recursion leaves the opposite identity to prove (our own). The work moves into constructing the inverse. Each recursion constructs a one-sided inverse, and associativity makes the two inverses equal (our own).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “A Möbius function of P is defined as an inverse to the zeta function with respect to the convolution product.”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### An adjoint description makes closed elements determine closure

**Remember:** An element closes to the least closed element above it.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.RA. Level 3: graduate.

**Definition.** A closure operator is an order-preserving map c with x ≤ c(x) and c(c(x)) = c(x). An element y is closed when c(y) = y. Equivalently, define closure by choosing the least closed element c(x) above each x.

**Problem.** Two closure operators on the same partially ordered set are equal if they have the same closed elements.

**How the definition helps.** The least-element definition makes uniqueness immediate because the set of closed elements already determines the choice. In adjoint terms, c(x) ≤ y exactly when x ≤ y for every closed y. Our own check uses order preservation to get c(x) ≤ c(y) = y when x ≤ y. The reverse follows from x ≤ c(x). This check is where the work lies when passing from the three laws to the least-element definition.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “Conversely, any closure operator c on some poset A gives rise to the Galois connection”

**Paper or page:** [Closed Elements Uniquely Determine Closure Operator](https://proofwiki.org/wiki/Closed_Elements_Uniquely_Determine_Closure_Operator). It says: “Suppose that f and g have the same closed elements. Then f = g.”

**Sources:** none listed. No primary source with a working link was found.

### Closed pairs make concept lattices complete

**Remember:** Intersect the object sets, then recover their shared attributes.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06B23. arXiv math.CO, math.RA. Level 3: graduate.

**Definition.** A formal context is a relation between objects and attributes. A formal concept is a pair (A, B) in which B contains exactly the attributes shared by all objects in A. In turn, A contains exactly the objects that have every attribute in B. Equivalently, such a pair is maximal among pairs with every object related to every attribute.

**Problem.** The concepts of any formal context form a complete lattice when ordered by inclusion of their object sets. This means every family has a greatest lower bound and a least upper bound.

**How the definition helps.** The closed-pair definition gives greatest lower bounds by intersecting the object sets. Each such set consists of every object satisfying some list of attributes. Intersecting these sets is the same as imposing all their lists together (our own explanation). Once all greatest lower bounds exist, the least upper bound is the greatest lower bound of all upper bounds. The work lies in checking the equivalence with maximal pairs, not in proving an independent lattice law for each operation.

**Wikipedia:** [Formal concept analysis](https://en.wikipedia.org/wiki/Formal_concept_analysis). It says: “These meet and join operations satisfy the axioms defining a lattice, in fact a complete lattice.”

**Sources:**

- [Rudolf Wille, Restructuring lattice theory: an approach based on hierarchies of concepts (1982)](https://doi.org/10.1007/978-94-009-7798-3_15)

### Galois connections give closure operators

**Remember:** The two adjunction inequalities make applying the round trip twice redundant.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.RA. Level 3: graduate.

**Definition.** A closure operator is an order-preserving map c with x ≤ c(x) and c(c(x)) = c(x). A monotone Galois connection consists of two maps f and g with f(x) ≤ y exactly when x ≤ g(y).

**Problem.** For any monotone Galois connection f, g, the round trip g∘f is a closure operator.

**How the definition helps.** The adjunction rule supplies the inequalities that prove the round trip is a closure operator. Substituting y = f(x) gives x ≤ g(f(x)), and substituting x = g(y) gives f(g(y)) ≤ y. Our own calculation uses these inequalities to get both c(x) ≤ c(c(x)) and c(c(x)) ≤ c(x). The two maps also preserve order by the adjunction rule. Instead of checking the three closure laws directly, one finds a pair of maps satisfying the adjunction rule. Conversely, every closure operator comes from its map to the fixed elements and their inclusion.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “is in fact a closure operator on A.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society (1944)](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### Intersection-closed families give complete lattices

**Remember:** Intersections give meets, and closing unions gives joins.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06B23, 08A30. arXiv math.RA. Level 3: graduate.

**Definition.** A Moore family on a set X is a collection of subsets closed under all intersections, including the empty intersection X. The closure of A is the intersection of all family members containing A. Equivalently, a Moore family is the collection of sets fixed by a closure map.

**Problem.** Subgroups of a group and topologies on a nonempty set form complete lattices under inclusion. So do congruences, which are equivalence relations that respect an algebra's operations.

**How the definition helps.** The intersection definition gives all meets, so joins follow without separate lattice proofs. The join of any collection is the closure of its union. Our own comparison is that a direct proof constructs joins separately, for example by generating a subgroup from a union. The work lies in checking closure under arbitrary intersections in each case.

**nLab:** [Moore closure](https://ncatlab.org/nlab/show/Moore+closure). It says: “Conversely, if 𝒞 is a Moore collection, then let Cl(A) be the intersection of all closed sets that contain A. Then Cl is a closure operator.”

**Paper or page:** [Set of Subgroups forms Complete Lattice](https://proofwiki.org/wiki/Set_of_Subgroups_forms_Complete_Lattice), [Set of Congruence Relations on Algebraic Structure forms Complete Lattice](https://proofwiki.org/wiki/Set_of_Congruence_Relations_on_Algebraic_Structure_forms_Complete_Lattice), [Topologies on Set form Complete Lattice](https://proofwiki.org/wiki/Topologies_on_Set_form_Complete_Lattice). It says: “the infimum of ℍ necessarily admitted by ℍ is ⋂ℍ”

**Sources:** none listed. No primary source with a working link was found.

### One adjunction rule makes Galois connections compose

**Remember:** Chain the two order tests to compose the connections.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 18A40. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A monotone Galois connection between partially ordered sets A and B consists of maps f: A → B and g: B → A. They satisfy f(x) ≤ y exactly when x ≤ g(y). Another definition requires both maps to preserve order and satisfy x ≤ g(f(x)) and f(g(y)) ≤ y.

**Problem.** If f, g connect A and B, and f′, g′ connect B and C, then f′∘f and g∘g′ connect A and C.

**How the definition helps.** The single order rule makes composition a chain of equivalences. Our own write-out is that f′(f(x)) ≤ z exactly when f(x) ≤ g′(z), which holds exactly when x ≤ g(g′(z)). Under the two-inequality definition, our own comparison requires checking order preservation and both inequalities separately. The work lies in showing that the two definitions agree.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “One can also define Galois connections as a pair of monotone functions that satisfy the laxer condition”

**Paper or page:** [Composition of Galois Connections is Galois Connection](https://proofwiki.org/wiki/Composition_of_Galois_Connections_is_Galois_Connection). It says: “Then (g₂ ∘ g₁, d₁ ∘ d₂) is also a Galois connection.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society (1944)](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### Order-reversing Galois connections on power sets are relations

**Remember:** Each singleton determines one row of the relation.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 03E20. arXiv math.RA, math.CO. Level 3: graduate.

**Definition.** An order-reversing Galois connection between power sets consists of maps F and G with B ⊆ F(A) exactly when A ⊆ G(B). The usual relation construction takes F(A) to be the points related to every point of A, and defines G by reversing the roles.

**Problem.** Every such connection between the power sets of X and Y comes from exactly one relation between X and Y.

**How the definition helps.** The adjunction definition forces F to send unions to intersections, which makes the relation formula unavoidable. Every set is a union of its singletons. Thus F(A) is the intersection of the sets F({x}) for x in A. The relation pairs x with y exactly when y lies in F({x}), and this determines G as well. The work lies in the general theorem that a left adjoint preserves joins, which are intersections in the reversed order.

**nLab:** [Galois connection](https://ncatlab.org/nlab/show/Galois+connection). It says: “Because f is a left adjoint, it takes colimits in P(X) (in this case, unions) to colimits in P(Y)ᵒᵖ, which are intersections in P(Y).”

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “Up to isomorphism all antitone Galois connections between power sets arise in this way.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society (1944)](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### The Dedekind–MacNeille completion extends Dedekind cuts to every poset

**Remember:** Cut any partial order like Dedekind cut ℚ, and get its smallest completion.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 06A15. arXiv math.CO. Level 3: graduate.

**Definition.** For a subset A of a partially ordered set, take its set of upper bounds, then the set of lower bounds of that. The Dedekind–MacNeille completion is the set of all A that equal this double set, ordered by inclusion. It is the smallest complete lattice into which the partial order embeds.

**Problem.** Every partially ordered set should embed in a smallest complete lattice. This lattice should embed in every other complete lattice that contains the order. For the rational numbers, it should be the real numbers with −∞ and +∞ added.

**How the definition helps.** MacNeille wrote a cut as a set that equals the lower bounds of its upper bounds. This form has no special conditions, so the construction works for any partial order. He defined it this way in 1937. Every element of the completion is a join of old elements and also a meet of old elements. For the rational numbers, the completion is the real numbers with −∞ and +∞ added. These two extra elements come from the empty set and from all of ℚ. Dedekind excluded them by asking that both parts of a cut be nonempty.

**Wikipedia:** [Dedekind–MacNeille completion](https://en.wikipedia.org/wiki/Dedekind%E2%80%93MacNeille_completion). It says: “If the requirement that both sets be nonempty is removed, the construction also includes the two additional elements -∞ and +∞, yielding the extended real number line.”

**Sources:**

- [MacNeille, H. M. (1937). Partially ordered sets. Transactions of the American Mathematical Society 42, 416–460.](https://doi.org/10.1090/S0002-9947-1937-1501929-X)

### Equations make lattices a variety and give free lattices

**Remember:** The lattice equations let the general free algebra theorem do the work.

*True by definition.* MSC 06B25 (Free lattices, projective lattices, word problems), 08B20. arXiv math.RA. Level 3: graduate.

**Definition.** A lattice can be defined by two operations, meet ∧ and join ∨. Both are associative and commutative, and applying either to two copies of an element returns that element. They satisfy a ∧ (a ∨ b) = a and a ∨ (a ∧ b) = a. The order definition instead asks for a greatest lower bound and a least upper bound for every pair.

**Problem.** For every nonempty set X there is a free lattice on X. Every assignment of its generators to a lattice extends uniquely to a map that preserves meet and join.

**How the definition helps.** The equations make lattices a variety, a class defined by equations, so the general theorem on free algebras applies. This avoids a construction specific to partially ordered sets. The work is in proving that expressions modulo the equations of a variety form a free algebra. Our own check recovers the order by setting a ≤ b exactly when a ∧ b = a.

**Wikipedia:** [Free lattice](https://en.wikipedia.org/wiki/Free_lattice). It says: “the category of all lattices constitute a variety, and thus there exist (by general principles of universal algebra) free objects”

**Sources:**

- [P. M. Whitman, Free lattices, Annals of Mathematics 42 (1941)](https://doi.org/10.2307/1969001)

### An adjoint makes continuous lattices meet-continuous

**Remember:** Treat the join of an ideal as a right adjoint to preserve meets.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications). arXiv math.RA, cs.LO. Level 3: graduate.

**Definition.** A directed set is nonempty, and any two members have an upper bound within it. An ideal is a directed set that contains everything below any of its members. In the usual definition of a continuous complete lattice, each a is the join of the elements way below a. An element b is way below a if each directed set with join at least a has a member at least b.

**Problem.** In a continuous complete lattice, meeting with a fixed element preserves directed joins. Thus x ∧ ⋁D = ⋁{x ∧ d : d ∈ D} for each directed set D.

**How the definition helps.** The alternative definition makes the map taking an ideal to its join a right adjoint, and right adjoints preserve meets. Our own proof applies this to the ideal of elements below x and the ideal of elements below some member of D. Their meet is their intersection, which consists exactly of the elements below some x ∧ d with d in D. Taking its join gives the stated law. The work lies in proving the equivalence with the way-below definition.

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Paper or page:** [Continuous Lattice is Meet-Continuous](https://proofwiki.org/wiki/Continuous_Lattice_is_Meet-Continuous). It says: “Then L is meet-continuous.”

**Sources:**

- [Rudolf-E. Hoffmann, Continuous posets and adjoint sequences, Semigroup Forum (1979)](https://doi.org/10.1007/BF02574184)

### Defining continuity by a left adjoint makes way-below respect directed joins

**Remember:** Left adjoints preserve joins, so way-below sets of joins are unions.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv math.CT, cs.LO. Level 3: graduate.

**Definition.** An ideal is a nonempty directed set that contains everything below its elements. A poset with directed joins is continuous when the join map from ideals to elements has a left adjoint. This left adjoint sends a to the smallest ideal whose join lies above a, the set of elements way below a. Here b is way below a if b lies below a member of each directed set whose join lies above a.

**Problem.** In a continuous poset, b is way below the join of a directed set D exactly when b is way below some member of D.

**How the definition helps.** Left adjoints preserve joins, so the way-below set of the join of D is the union of the way-below sets of its members. A directed join of ideals is their union. The nLab gives this left-adjoint definition of continuity. Reading membership in the union gives the claim, and that step is our own. The usual proof uses the interpolation property, which itself needs proof. The work moves to showing that the left adjoint sends a to its way-below set.

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Sources:** none listed. No primary source with a working link was found.

### Directed joins turn separate Scott continuity into joint continuity

**Remember:** Every pair of indices is bounded by an index on the diagonal.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A directed set is nonempty, and any two members have an upper bound within it. A directed-complete partial order has a join for every directed subset. A map is Scott continuous if it preserves order and directed joins. The Scott topology uses upper sets that meet every directed set whose join they contain.

**Problem.** A map from a product of two directed-complete partial orders to another is Scott continuous exactly when it is Scott continuous in each variable separately. The domain uses the Scott topology of the product order.

**How the definition helps.** The directed-join definition makes the proof a calculation with the two coordinates. A directed set of pairs has a join given by the joins in each coordinate (our own). Separate continuity gives an iterated join over all pairs drawn from the two coordinate sets (our own). Directedness bounds every such pair by an original pair, so the join is unchanged (our own). The work lies in the order calculation and in proving that order continuity agrees with continuity for the Scott topologies. Our own comparison is with the ordinary product topology, where separate continuity need not imply continuity.

**Paper or page:** [Domain theory in univalent foundations I: Directed complete posets and Scott's D∞](https://arxiv.org/abs/2407.06952v3). It says: “A map f: D₁ × D₂ → E is Scott continuous if and only if the maps f(x,−): D₂ → E and f(−,y): D₁ → E are Scott continuous for every x: D₁ and y: D₂.”

**Sources:**

- [Tom de Jong, Domain theory in univalent foundations I: Directed complete posets and Scott's D∞](https://arxiv.org/abs/2407.06952v3)

### Directed lower sets give the free directed-complete order

**Remember:** Extend a map by taking the join of its values on each ideal.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 06A06. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A directed set is nonempty, and any two members have an upper bound within it. A directed-complete partial order has a join for every directed subset. A Scott-continuous map preserves order and directed joins. An ideal is a directed lower set, so it contains everything below any of its members.

**Problem.** Order the ideals of S by inclusion and send x to its principal ideal, the set of elements below x. Every order-preserving map f from S into a directed-complete order D then extends uniquely to a Scott-continuous map on the ideals.

**How the definition helps.** The ideal definition makes the extension formula clear because each ideal is a directed union of principal ideals. Thus the extension must send an ideal I to the join of the values f(x) for x in I. Unlike the abstract definition by this extension property, the ideal construction gives the elements and their order explicitly. Our own proof checks that a directed union of ideals is an ideal, so joins are unions. The formula preserves these unions as joins, which proves that the extension exists (our own).

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “for any monotone function f: S → D to a dcpo D, there exists a unique Scott continuous function f̄: Idl(S) → D such that f̄ ∘ i<sub>S</sub> = f.”

**Sources:**

- [Tatsuji Kawai, Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4)

### In the Scott topology, continuous maps are exactly those preserving directed joins

**Remember:** You cannot reach an open set only in the limit of a directed set.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 54H12, 18B35. arXiv math.GN, cs.LO. Level 3: graduate.

**Definition.** A directed set is a set in which any two elements have a common upper bound, and its join is its least upper bound. On a preordered set, a subset is Scott-open when its characteristic function into the truth values preserves directed joins. Concretely, a Scott-open set is upward closed, and any directed set whose join lies in it already meets it.

**Problem.** Find a topology on preorders in which continuity is the same as Scott continuity (preserving directed joins). The truth values should then become the Sierpinski space (two points, with only one of them open on its own).

**How the definition helps.** The open sets are defined by the same property that the continuous maps should have, so the theorem is close to a tautology. The theorem says that continuous functions between Scott topologies are exactly the functions that preserve directed joins. The characteristic function of a preimage is the characteristic function of the open set composed with the map. So preimages of Scott-open sets are Scott-open exactly when these composites still preserve directed joins. As a result, the truth values with the Scott topology classify open sets. Harder results still need real work, such as the theorem that the injective T₀-spaces are the continuous lattices with the Scott topology.

**nLab:** [Scott topology](https://ncatlab.org/nlab/show/Scott+topology). It says: “This in fact ensures that, in general, the continuous functions between preorders with Scott topologies are precisely those (necessarily monotonic) functions between them which preserve directed joins (called Scott-continuous).”

**Sources:**

- [Dana Scott, Continuous lattices, in: Toposes, Algebraic Geometry and Logic, Lecture Notes in Mathematics 274, Springer (1972) 97–136](https://doi.org/10.1007/BFb0073967)

### Scott continuity makes the least fixed point a limit of iterates

**Remember:** Continuous maps reach their least fixed point in ω steps from bottom.

*Makes the theorem clean to state or prove.* MSC 06B35 (Continuous lattices and posets, applications), 47H10. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A directed-complete partial order is a partial order in which every directed subset has a least upper bound. A directed subset is a nonempty set in which any two elements have an upper bound inside the set. A function is Scott-continuous if it preserves the least upper bounds of directed subsets.

**Problem.** Let L be a directed-complete partial order with a least element ⊥, and let f be Scott-continuous. Then f has a least fixed point, the least upper bound of ⊥, f(⊥), f(f(⊥)), and so on.

**How the definition helps.** Continuity is defined as exactly the property that the proof uses at the limit step. The iterates ⊥, f(⊥), f(f(⊥)), … form an increasing chain, so they have a least upper bound m. By continuity, f(m) is the least upper bound of the images of the chain, which is m again. Any other fixed point is above every iterate, so it is above m. For a function that is only monotone, the iteration can need transfinitely many steps (our own). This is why the theorem is the basis of domain theory, the theory of the meaning of recursive programs (our own). What stays hard is to find domains where the functions of interest are continuous (our own).

**Wikipedia:** [Kleene fixed-point theorem](https://en.wikipedia.org/wiki/Kleene_fixed-point_theorem). It says: “Then f has a least fixed point, which is the supremum of the ascending Kleene chain of f.”

**Sources:** none listed. No primary source with a working link was found.

### Scott domains give a space isomorphic to its own function space

**Remember:** Count only the continuous functions, and D can be as big as D → D.

*Rules out counterexamples.* MSC 06B35 (Continuous lattices and posets, applications), 03B40, 18C50. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A domain, in Scott's sense, is a suitable partially ordered set in which directed subsets have suprema; a continuous lattice is an example. A directed subset is one in which any two elements have an upper bound in the subset. The maps between domains are the Scott-continuous functions, which preserve directed suprema. The function space \[D → D\] contains only these continuous functions.

**Problem.** Give a non-trivial model of the untyped lambda calculus, in which any term can be applied to any term, itself included. That is an object D with D ≅ D ⇒ D in a cartesian closed category (a category with products and function objects). In the model, provably unequal terms must stay unequal.

**How the definition helps.** Allowing only continuous functions makes the function space small enough to match D. In the category of sets, Cantor's theorem rules this out. There the only solution of D ≅ D ⇒ D is a one-point set, so all terms become equal. Restricting function spaces to continuous functions removes this cardinality obstruction. Scott built a domain D∞ isomorphic to its own continuous function space. The construction of D∞ as an inverse limit is still real work. But the change in the definition of 'function' is what makes a solution possible.

**nLab:** [domain theory](https://ncatlab.org/nlab/show/domain+theory). It says: “In 1969, Dana Scott solved this problem topologically: the terms were interpreted as continuous functions on a suitable space D isomorphic to its own function space. This D is called a domain.”

**Sources:**

- [D. S. Scott, Data types as lattices, SIAM J. Comput. 5 (1976) 522–587](https://doi.org/10.1137/0205037)

### The adjoint definition makes continuous lattices retracts of ideal lattices

**Remember:** The ideal of approximations joins back to the original element.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 06B23. arXiv math.RA, cs.LO. Level 3: graduate.

**Definition.** A directed set is nonempty, and any two members have an upper bound within it. An ideal is a directed set that contains everything below any of its members. A complete lattice is continuous if the join map s from its ideals has a left adjoint t. This means t(a) ⊆ I exactly when a ≤ s(I).

**Problem.** Every continuous complete lattice L is a retract of its ideal lattice, which is algebraic. This means there are join-preserving maps t and s in opposite directions with s(t(a)) = a for every a in L.

**How the definition helps.** The adjoint definition supplies the two maps for the retract. The join map s is itself left adjoint to sending an element to the ideal below it, so both s and t preserve joins. Our own check uses t(a) ⊆ {x : x ≤ a} to get s(t(a)) ≤ a. The reverse inequality is the adjunction rule with I = t(a). The work lies in showing that the ideal lattice is algebraic and that the usual definition agrees with the adjoint definition. The usual definition writes each element as a join of elements way below it. An element b is way below a if every directed set with join at least a has a member at least b.

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “Every continuous lattice is a suplattice retract of an algebraic lattice.”

**Sources:**

- [Tatsuji Kawai, Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4)
- [Rudolf-E. Hoffmann, Continuous posets and adjoint sequences, Semigroup Forum (1979)](https://doi.org/10.1007/BF02574184)

### Orthomodularity keeps the part of the modular law Hilbert subspaces satisfy

**Remember:** Quantum logic drops distributivity but keeps orthomodularity, which subspaces still obey.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06C15 (Complemented lattices, orthocomplemented lattices and posets), 03G12. arXiv math.LO, quant-ph. Level 3: graduate.

**Definition.** An orthocomplemented lattice has an order-reversing involution a ↦ a⊥, a map with a⊥⊥ = a, that sends each element to a complement. It is orthomodular if a ≤ c implies a ∨ (a⊥ ∧ c) = c. This is the modular law in the special case b = a⊥.

**Problem.** Birkhoff and von Neumann saw that the closed subspaces of a Hilbert space behave like a logic of quantum propositions. This lattice is not distributive, so it is not a Boolean algebra.

**How the definition helps.** The orthomodular law asks for the modular law only in the case that closed subspaces still satisfy. So the lattice of a quantum system is an example. Let A and C be closed subspaces of a Hilbert space with A inside C (our own). Then C is the sum of A and the part of C orthogonal to A (our own). The page says the modular law must be weakened in this way for quantum logic. The full modular law fails for closed subspaces of an infinite-dimensional Hilbert space (our own). What stays hard is to recover the Hilbert space from the lattice, which needs extra axioms (our own).

**Wikipedia:** [Complemented lattice](https://en.wikipedia.org/wiki/Complemented_lattice). It says: “A natural further weakening of this condition for orthocomplemented lattices, necessary for applications in quantum logic, is to require it only in the special case b = a⊥.”

**Sources:**

- [Birkhoff, G.; von Neumann, J. (1936). The logic of quantum mechanics. Annals of Mathematics 37, 823–843.](https://doi.org/10.2307/1968621)

### An order-reversing adjunction gives one De Morgan law

**Remember:** Negation as a left adjoint converts joins into meets.

*True by definition.* MSC 06D20 (Heyting algebras (lattice-theoretic aspects)), 03G10. arXiv math.LO. Level 3: graduate.

**Definition.** In a Heyting algebra, x ⇒ a is the largest y with x ∧ y ≤ a. Ordinary Heyting negation ¬x is x ⇒ 0, where 0 is the least element. Thus b ≤ ¬c holds exactly when b ∧ c = 0. This is symmetric in b and c, so b ≤ ¬c holds exactly when c ≤ ¬b.

**Problem.** Heyting negation satisfies ¬(x ∨ y) = ¬x ∧ ¬y. The reverse pattern ¬(x ∧ y) = ¬x ∨ ¬y can fail.

**How the definition helps.** The symmetric rule makes negation a left adjoint into the reversed order, where the join is the original meet. Left adjoints preserve joins. The work lies in passing from the largest-disjoint-element definition to the symmetric order test. Our own example uses the lattice of open sets of the real line. There ¬U is the interior of the complement of U. For the two open half-lines ending at 0, the negation of their intersection is the whole line. The union of their negations misses 0.

**nLab:** [Heyting algebra](https://ncatlab.org/nlab/show/Heyting+algebra). It says: “−⇒a is self-adjoint: −⇒a: L → Lᵒᵖ is left adjoint to −⇒a: Lᵒᵖ → L.”

**Sources:** none listed. No primary source with a working link was found.

### Defining implication by adjunction forces distributivity

**Remember:** Meeting with a fixed element preserves joins when it has a right adjoint.

*True by definition.* MSC 06D20 (Heyting algebras (lattice-theoretic aspects)), 03G10. arXiv math.LO, math.RA. Level 3: graduate.

**Definition.** A Heyting algebra is a bounded lattice with an implication ⇒ satisfying x ∧ y ≤ z exactly when y ≤ x ⇒ z. A bounded lattice has least and greatest elements. The rule says that meeting with x is left adjoint to the map z ↦ x ⇒ z.

**Problem.** Every Heyting algebra is distributive. In particular, x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z).

**How the definition helps.** The adjoint definition gives distributivity because every left adjoint preserves joins, or least upper bounds. Another definition starts with a distributive lattice and asks for a largest y with x ∧ y ≤ z. Our own comparison is that the adjoint definition removes the separate distributivity axiom. The work lies in the general theorem that left adjoints preserve joins.

**nLab:** [Heyting algebra](https://ncatlab.org/nlab/show/Heyting+algebra). It says: “the distributivity law x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z) says precisely that x ∧ − preserves binary joins, which it does because it has a right adjoint (namely x ⇒ −)”

**Sources:** none listed. No primary source with a working link was found.

### Completely prime filters make every frame spectrum sober

**Remember:** An irreducible closed set tells you which opens its point lies in.

*True by definition.* MSC 06D22 (Frames, locales), 54D10. arXiv math.GN. Level 3: graduate.

**Definition.** A frame is a complete lattice in which finite meets distribute over arbitrary joins. Its spectrum has completely prime filters as points. These are upper sets containing 1, closed under binary meets, that contain a join only if they contain one of its terms. For each frame element a, the set Uₐ of filters containing a is open, and these are all the open sets.

**Problem.** The spectrum of any frame is sober. This means every nonempty closed set that cannot be written as the union of two proper closed subsets is the closure of exactly one point.

**How the definition helps.** The filter definition provides a point for a closed set as soon as the opens it meets give a completely prime filter. Our own proof takes the set of all a for which Uₐ meets the given irreducible closed set. Irreducibility gives closure under binary meets, and the union law for the opens gives complete primeness. The resulting point and the closed set meet the same opens, so the point has precisely that closure. Distinct filters differ on some a and therefore have distinct closures. The work lies in the correspondence between irreducible closed sets and completely prime filters of opens, rather than in finding another kind of point.

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “every irreducible closed set (non-empty closed set that is not the union of any two proper closed subsets) is the closure of a unique point.”

**Paper or page:** [Spectrum of Locale as Completely Prime Filters is Sober Space](https://proofwiki.org/wiki/Spectrum_of_Locale_as_Completely_Prime_Filters_is_Sober_Space). It says: “Then: Sp(L) is a sober space.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclei give quotient frames through fixed points

**Remember:** The closure map keeps joins into its fixed points and keeps meets by definition.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A frame is a complete lattice in which finite meets distribute over arbitrary joins. A nucleus is a map j on a frame that preserves binary meets and satisfies a ≤ j(a) and j(j(a)) = j(a). An element a is a fixed point if j(a) = a.

**Problem.** The fixed points of a nucleus form a frame in the inherited order. The map j onto these fixed points preserves finite meets and arbitrary joins.

**How the definition helps.** The nucleus definition separates the two preservation laws, so there is no need to guess the operations on the fixed points. Meets of fixed points are unchanged, and a join of fixed points is j applied to their original join. The least fixed point above x is j(x), so j onto the fixed points is left adjoint to inclusion and preserves joins. It preserves finite meets by the nucleus laws. Since j is onto, distributivity passes to the fixed points. The work in the converse description lies in showing that every surjective frame map gives such a nucleus using its right adjoint.

**nLab:** [nucleus](https://ncatlab.org/nlab/show/nucleus). It says: “Note that, by property (3) above, we may interpret j as a function j<sup>\*</sup>: L → L/j, which is a surjective frame homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### The frame law produces Heyting implication

**Remember:** Distributing meets over joins lets all candidates join to give the largest one.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A complete lattice has a join and a meet for every subset, even the empty set. A frame is a complete lattice satisfying x ∧ ⋁S = ⋁{x ∧ s : s ∈ S} for every x and S.

**Problem.** Every frame is a complete Heyting algebra. This means that for each x and z, there is a largest y such that x ∧ y ≤ z.

**How the definition helps.** The frame law lets us find the largest candidate by taking the join of all candidates. Take the join of all y with x ∧ y ≤ z. The frame law shows that meeting this join with x still gives an element below z. The equivalent definition asks for this largest candidate directly. The general result is that a map on a complete lattice has a right adjoint exactly when it preserves all joins.

**nLab:** [frame](https://ncatlab.org/nlab/show/frame). It says: “A frame is automatically a Heyting algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Two-valued frame maps make completely prime filters pull back

**Remember:** Pulling back a filter amounts to composing its two-valued map.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN. Level 3: graduate.

**Definition.** A frame is a complete lattice in which finite meets distribute over arbitrary joins. A filter is an upper set containing 1 and closed under binary meets. It is completely prime if, whenever it contains a join, it contains at least one term of that join. Equivalently, it is the set sent to 1 by a map to {0, 1} preserving finite meets and arbitrary joins.

**Problem.** The preimage of a completely prime filter under a map of frames that preserves finite meets and arbitrary joins is completely prime.

**How the definition helps.** The map definition turns preimage into composition, which preserves the defining operations. If F is the set sent to 1 by h, then φ⁻¹(F) is the set sent to 1 by h∘φ. Our own comparison is that the direct proof checks the filter conditions and complete primeness separately. The work lies in proving that the two descriptions of completely prime filters agree.

**Paper or page:** [Inverse Image Mapping of Frame Homomorphism Preserves Completely Prime Filter](https://proofwiki.org/wiki/Inverse_Image_Mapping_of_Frame_Homomorphism_Preserves_Completely_Prime_Filter), [Canonical Bijection from Completely Prime Filters to Frame Homomorphisms](https://proofwiki.org/wiki/Canonical_Bijection_from_Completely_Prime_Filters_to_Frame_Homomorphisms). It says: “Then: φ←(F) is a completely prime filter of L₁”

**Sources:** none listed. No primary source with a working link was found.

### The Priestley separation axiom gives a duality for distributive lattices

**Remember:** Clopen up-sets must separate points, so the lattice of up-sets remembers everything.

*Makes the theorem clean to state or prove.* MSC 06D50 (Lattices and duality), 06D05, 06F30. arXiv math.CO, math.GN. Level 3: graduate.

**Definition.** A Priestley space is a compact topological space with a partial order. It must satisfy the Priestley separation axiom: if x is not below y, some clopen up-set contains x but not y. A clopen set is one that is both open and closed, and an up-set contains everything above its elements.

**Problem.** Stone duality matches Boolean algebras with compact, totally disconnected Hausdorff spaces. Bounded distributive lattices need a similar duality, but they have no complements.

**How the definition helps.** The separation axiom makes the clopen up-sets detect the order, so they determine the space and its order (our own). The dual space of a lattice is its set of prime filters, ordered by inclusion (our own). A prime filter is a filter that contains a or b whenever it contains a ∨ b. Each lattice element becomes the clopen up-set of the prime filters that contain it (our own). The page shows that every Priestley space is zero-dimensional, that is, its clopen sets form a base. So its topology is a Stone space, a compact Hausdorff zero-dimensional space. The order then stands in for the missing complements (our own).

**Wikipedia:** [Priestley space](https://en.wikipedia.org/wiki/Priestley_space). It says: “One of the main consequences of the duality theory for distributive lattices is that each of these categories is dually equivalent to the category of bounded distributive lattices.”

**Sources:**

- [Priestley, H. A. (1970). Representation of distributive lattices by means of ordered Stone spaces. Bulletin of the London Mathematical Society 2, 186–190.](https://doi.org/10.1112/blms/2.2.186)

### Boolean implication turns complete Boolean algebras into frames

**Remember:** Complement and join give the right adjoint to meet.

*True by definition.* MSC 06E10 (Chain conditions, complete algebras), 06D22. arXiv math.LO, math.RA. Level 3: graduate.

**Definition.** A Boolean algebra is a bounded distributive lattice in which each x has a complement ¬x. Define Boolean implication by x ⇒ z = ¬x ∨ z. The order definition of implication instead asks for the largest y with x ∧ y ≤ z.

**Problem.** In a complete Boolean algebra, x ∧ ⋁S = ⋁{x ∧ s : s ∈ S} for every x and every subset S.

**How the definition helps.** The formula for implication gives meet a right adjoint, so meet preserves all joins. The main check is that x ∧ y ≤ z holds exactly when y ≤ ¬x ∨ z. Our own proof uses finite distributivity to split y into its parts inside x and ¬x. The general theorem that left adjoints preserve joins then gives the frame law.

**Paper or page:** [Boolean Lattice is Heyting Lattice](https://proofwiki.org/wiki/Boolean_Lattice_is_Heyting_Lattice), [Complete Boolean Lattice is a Frame](https://proofwiki.org/wiki/Complete_Boolean_Lattice_is_a_Frame). It says: “∀x, y ∈ B : x → y = ¬x ∨ y”

**Sources:** none listed. No primary source with a working link was found.

### Describing profinite limits by clopen algebras makes maps to finite sets factor

**Remember:** A finite list of clopen sets can be read at one stage.

*True by definition. Confidence: medium.* MSC 06E15 (Stone spaces (Boolean spaces) and related structures), 54B35. arXiv math.GN. Level 3: graduate.

**Definition.** An inverse system is a family of finite discrete spaces, the stages, with compatible maps from later to earlier stages. Its limit, a profinite space, is the set of compatible families of points, one at each stage. Here one describes it by its algebra of clopen sets, sets that are both open and closed. This algebra is the directed union of the finite algebras pulled back from the stages.

**Problem.** Take an inverse system of finite discrete spaces over a directed set, with surjective maps. Every continuous map from its limit to a finite discrete space factors through the projection to one stage.

**How the definition helps.** With the clopen-algebra description, a map to a finite set is a finite list of clopen sets. These are its fibers, and each lies in the algebra pulled back from some stage. The stages are directed, so one stage serves for all of them. Each fiber is then the inverse image of a subset of that stage. The projection to that stage is onto, so these subsets partition the stage and define the factored map. The work goes into proving that the clopen algebra is the directed union of the stage algebras, which uses compactness. The nLab states that profinite spaces are these limits, and this proof is our own.

**nLab:** [Stone space](https://ncatlab.org/nlab/show/Stone+space). It says: “Stone spaces are sometimes called profinite spaces, since they are precisely the spaces which are small cofiltered limits of finite discrete spaces”

**Sources:** none listed. No primary source with a working link was found.

### Ultrafilters as two-valued maps make Stone's map a homomorphism

**Remember:** Evaluating Boolean operations at each point preserves them.

*True by definition.* MSC 06E15 (Stone spaces (Boolean spaces) and related structures), 03G05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A filter contains 1, contains every element above each of its members, and is closed under binary meets. An ultrafilter is a filter maximal among filters that omit 0. Equivalently, it is the set sent to 1 by a map to the two-element Boolean algebra that preserves Boolean operations.

**Problem.** The Stone map sends each element to the set of ultrafilters containing it. It preserves meet, join, and complement as intersection, union, and set complement.

**How the definition helps.** The two-valued map definition makes preservation automatic because the Stone map evaluates Boolean operations at each ultrafilter. With the maximal-filter definition, one first proves that exactly one of b and ¬b belongs to each ultrafilter. The work lies in this equivalence and in proving that the Stone map separates distinct elements. This last step uses the Boolean prime ideal theorem, a weak form of the axiom of choice.

**Wikipedia:** [Stone's representation theorem for Boolean algebras](https://en.wikipedia.org/wiki/Stone%27s_representation_theorem_for_Boolean_algebras). It says: “The isomorphism sends an element b ∈ B to the set of all ultrafilters that contain b.”

**Sources:**

- [M. H. Stone, The theory of representations for Boolean algebras, Transactions of the American Mathematical Society (1936)](https://doi.org/10.1090/S0002-9947-1936-1501865-8)

### Residuals make multiplication preserve joins

**Remember:** When multiplication has a right adjoint, distributivity is not a separate axiom.

*True by definition.* MSC 06F05 (Ordered semigroups and monoids), 06A15. arXiv math.RA. Level 3: graduate.

**Definition.** A residuated lattice is a lattice with associative multiplication and an identity element. It has residuals, which give the largest solution y to x • y ≤ z or y • x ≤ z. Each residual is a right adjoint, since y lies below it exactly when the corresponding product lies below z.

**Problem.** In a residuated lattice, multiplication on either side preserves every join that exists. In particular, it distributes over binary joins and preserves the least element if there is one.

**How the definition helps.** The residual definition makes distributivity a general fact about adjoints rather than a separate calculation. In contrast to the equivalent definition by equations, the order rule displays multiplication by a fixed element as a left adjoint. Any left adjoint preserves joins. The work lies in establishing the residual rule for each example. In our own example, ideals of a commutative ring are ordered by inclusion. For fixed I and K, the largest ideal J with IJ ⊆ K is the ideal of elements r with rI ⊆ K.

**Wikipedia:** [Residuated lattice](https://en.wikipedia.org/wiki/Residuated_lattice). It says: “Note that distributivity x • (y ∨ z) = (x • y) ∨ (x • z) and x•0 = 0 are consequences of these axioms and so do not need to be made part of the definition.”

**Sources:**

- [Morgan Ward and R. P. Dilworth, Residuated lattices, Transactions of the American Mathematical Society (1939)](https://doi.org/10.1090/S0002-9947-1939-1501995-3)

### Pseudo-orders let the real numbers be linearly ordered constructively

**Remember:** If x &lt; z, every y lies above x or below z, decided by approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06A05 (Total orders), 03F60, 12J15. arXiv math.LO, math.CA. Level 4: research.

**Definition.** A pseudo-order on a set is a relation &lt; that is asymmetric (x &lt; y and y &lt; x never both hold), weakly linear and connected. Weakly linear means: if x &lt; z, then x &lt; y or y &lt; z, for every y. Connected means: if neither x &lt; y nor y &lt; x, then x = y. In classical logic, a pseudo-order is the same as a strict total order.

**Problem.** State in constructive mathematics that the real numbers (Dedekind or Cauchy) are linearly ordered. The statement should extend the decidable order on ℚ.

**How the definition helps.** The strict order &lt; on the reals is a pseudo-order, so with this definition 'the reals are linearly ordered' becomes true and useful. Constructively, you cannot prove that the order ≤ on the reals is total. In some classically invalid systems, you can even prove that it is not total. So the statement 'the reals are totally ordered' fails. The axioms of a pseudo-order are exactly the de Morgan duals of those of a total order, so classically nothing changes.

**nLab:** [pseudo-order](https://ncatlab.org/nlab/show/pseudo-order). It says: “Since the corresponding partial order ≤ cannot be proved total (and in some classically invalid versions of constructive mathematics can even be proved not total), &lt; is more directly useful than ≤ in constructive analysis.”

**Sources:** none listed. No primary source with a working link was found.

### Better-quasi-orders survive infinite constructions that break well-quasi-orders

**Remember:** A better-quasi-order stays well-quasi-ordered when you build infinite things from it.

*Rules out counterexamples.* MSC 06A07 (Combinatorics of partially ordered sets), 03E05. arXiv math.CO, math.LO. Level 4: research.

**Definition.** A quasi-order is a reflexive and transitive relation. A well-quasi-order is a quasi-order with no infinite sequence in which no term is ≤ a later term. A better-quasi-order (bqo) is a quasi-order Q with no 'bad Q-array': no map f from a barrier of finite sets of natural numbers to Q with f(s) ≰ f(t) whenever s ◁ t. Here a barrier is a special infinite family of finite sets of natural numbers, and s ◁ t means, roughly, that t continues s after the least element of s is dropped. Every better-quasi-order is a well-quasi-order.

**Problem.** The goal is to prove that some infinite structures are well-quasi-ordered. Examples are trees of height ω under the topological minor relation, and scattered linear orders, which contain no copy of the rational numbers (Fraïssé's conjecture).

**How the definition helps.** Better-quasi-orders survive the infinite constructions that break well-quasi-orders, so proofs can go through them. Many infinite operations do not preserve well-quasi-orders; Rado gave a well-quasi-order that shows this. Nash-Williams defined better-quasi-orders as a stronger condition that these operations preserve. Rado's example is not a better-quasi-order (our own remark). Nash-Williams then proved the tree result by proving a statement about better-quasi-orders, and Laver proved Fraïssé's conjecture in the same way. The cost is a much more complex definition.

**Wikipedia:** [Better-quasi-ordering](https://en.wikipedia.org/wiki/Better-quasi-ordering). It says: “In a 1965 paper Crispin Nash-Williams formulated the stronger notion of better-quasi-ordering in order to prove that the class of trees of height ω is well-quasi-ordered under the topological minor relation.”

**Sources:**

- [C. St. J. A. Nash-Williams, On well-quasi-ordering infinite trees, Mathematical Proceedings of the Cambridge Philosophical Society 61 (1965) 697–720](https://doi.org/10.1017/S0305004100039062)
- [Richard Rado, Partial well-ordering of sets of vectors, Mathematika 1 (1954) 89–95](https://doi.org/10.1112/S0025579300000565)

### Generalised recursive atom orderings exist exactly when ordinary ones do

**Remember:** The looser atom ordering proves CL-shellability with no loss.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06A07 (Combinatorics of partially ordered sets), 05E45. arXiv math.CO. Level 4: research.

**Definition.** A bounded poset has a least and a greatest element, and an atom is an element just above the least one. A recursive atom ordering orders the atoms of the poset and of its intervals in a compatible way. The order complex of a poset is the simplicial complex of its chains. A poset is CL-shellable when its order complex has a shelling, an ordering of the top faces, of a special kind.

**Problem.** Björner and Wachs proved that a finite bounded poset is CL-shellable exactly when it has a recursive atom ordering.

**How the definition helps.** The generalised ordering is looser, and the theorem says it gives the same class of posets. So to show CL-shellability, it is enough to find the looser kind of ordering. The looser ordering is easier to find in examples (our own remark). The work moves into the equivalence theorem, Theorem 4.12, whose reordering procedure turns a generalised ordering into an ordinary one. The paper uses this to show that uncrossing posets are dual CL-shellable, that is, CL-shellable after one reverses the order.

**Paper or page:** [Generalized recursive atom ordering and equivalence to CL-shellability](https://arxiv.org/abs/2212.03949). It says: “A finite bounded poset is proven to admit such a generalized recursive atom ordering if and only if it admits a traditional recursive atom ordering.”

**Sources:**

- [Patricia Hersh and Grace Stadnyk, Generalized recursive atom ordering and equivalence to CL-shellability, Combinatorial Theory 4 (1) (2024); arXiv:2212.03949](https://arxiv.org/abs/2212.03949)

### A new amicability for posets keeps Czédli's permutation theorem

**Remember:** Change amicability for posets, keep it for lattices, and the theorem survives.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 06A11 (Algebraic aspects of posets), 08A30. arXiv math.CO, math.RA. Level 4: research.

**Definition.** A tolerance is a reflexive and symmetric relation. It is 2-uniform when each of its blocks has exactly two elements. Two relations permute when their two compositions are equal. Amicability is a condition on a pair of tolerances, and Czédli's version uses the join and meet of a lattice.

**Problem.** Czédli showed that two 2-uniform tolerances on a lattice with no infinite chain permute exactly when they are amicable. A lattice is a partially ordered set in which every two elements have a join and a meet. The paper extends this theorem to partially ordered sets.

**How the definition helps.** The new definition does not use lattice operations, so it makes sense in partially ordered sets, and it agrees with the old one in lattices. So the theorem extends and still contains the lattice case. Czédli's original definition uses joins and meets, which a partially ordered set need not have. The proof for partially ordered sets is new work (Theorem 3.3 of the paper).

**Paper or page:** [A characterization of permutability of 2-uniform tolerances on posets](https://arxiv.org/abs/2402.09496). It says: “With this new definition we can prove that two tolerances on a poset containing no infinite chain permute if and only if they are amicable in the new sense.”

**Sources:**

- [Ivan Chajda and Helmut Länger, A characterization of permutability of 2-uniform tolerances on posets, arXiv:2402.09496 (2024)](https://arxiv.org/abs/2402.09496)

### Galois connections give a short proof of bottleneck stability

**Remember:** Write interleavings as Galois connections, and Rota's theorem moves diagrams for you.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 55N31. arXiv math.AT, math.CO. Level 4: research.

**Definition.** A Galois connection between posets P and Q is a pair of order-preserving maps f from P to Q and g from Q to P. They satisfy f(p) ≤ q exactly when p ≤ g(q). The paper writes interleavings and matchings as Galois connections. It defines the persistence diagram as a Möbius inversion of a rank function.

**Problem.** The bottleneck stability theorem says that close persistence modules have close persistence diagrams. The paper wants a short proof of it.

**How the definition helps.** Once the diagram is a Möbius inversion and an interleaving is a Galois connection, Rota's theorem says how the diagram changes under the connection. That gives stability with little extra work. Rota's Galois connection theorem relates the Möbius functions of two posets joined by a Galois connection (our own). The hard part moves into the classical combinatorics of Möbius inversion.

**Paper or page:** [Galois Connections in Persistent Homology](https://arxiv.org/abs/2201.06650). It says: “Second, it provides access to Rota's Galois connection theorem -- a powerful tool with many potential applications in applied topology. To illustrate this, we use Rota's Galois connection theorem to give a substantially easier proof of the bottleneck stability theorem.”

**Sources:**

- [Aziz Burak Gulen, Alexander McCleary, Galois Connections in Persistent Homology, arXiv:2201.06650 (2023)](https://arxiv.org/abs/2201.06650)

### Asking maps to preserve semidirected joins makes strictness automatic

**Remember:** The least element is the join of the empty set.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A pointed directed-complete order has a least element and a join for each directed subset. A subset is semidirected if each pair of its elements has an upper bound in the subset, so the empty set qualifies. Sterling calls a map inductive if it preserves joins of semidirected subsets. The usual definition asks for preservation of nonempty directed joins and of the least element as two separate conditions.

**Problem.** Every inductive map between pointed directed-complete orders is strict, which means that it preserves the least element.

**How the definition helps.** The empty set is semidirected and its join is the least element, so preserving that join is strictness. Sterling's Lemma 45 states that a Scott-continuous map is strict exactly when it is inductive. Scott-continuous means that the map preserves joins of directed subsets. The converse direction holds the real work. Our own remark is that, constructively, one cannot split each semidirected subset into an empty case and a nonempty case.

**Paper or page:** [Tensorial structure of the lifting doctrine in constructive domain theory](https://arxiv.org/abs/2312.17023v5). It says: “A Scott–continuous morphism between pointed dcpos is strict if and only if it is inductive, i.e. preserves suprema of semidirected subsets.”

**Sources:**

- [Jonathan Sterling, Tensorial structure of the lifting doctrine in constructive domain theory](https://arxiv.org/abs/2312.17023v5)

### On sharp elements of a domain the intrinsic apartness becomes tight

**Remember:** Keep only the sharp points, and apartness works as on the reals.

*Rules out counterexamples. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 03F65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** An apartness x \# y is a positive form of x ≠ y. It is tight if ¬(x \# y) implies x = y, and cotransitive if x \# y gives x \# z or z \# y. A dcpo is a partial order in which every directed family has a join; domains of partial results are dcpos. Roughly, an element is sharp if certain questions about its approximations can be decided; a lower real is sharp exactly when it is located.

**Problem.** Constructive analysis on the real numbers uses an apartness that is tight and cotransitive. One wants the same tool on domains, which hold both total and partial elements.

**How the definition helps.** Partial elements cause the failure, and restricting to sharp elements, which carry enough information, avoids it (our own summary). Theorem 5.6 shows the failure: if x is strictly below y in a dcpo, a tight apartness on it implies excluded middle. On sharp elements, the intrinsic apartness is tight and cotransitive, as the abstract states. This apartness is defined from the Scott topology, the natural topology of a dcpo. The strongly maximal elements studied by Smyth and Heckmann are sharp, and Corollary 6.4 states the result for them. What stays hard is checking sharpness in each example, such as the Cantor and Baire domains and the partial Dedekind reals.

**Paper or page:** [Sharp Elements and Apartness in Domains](https://arxiv.org/abs/2112.14052v1). It says: “Although we cannot expect a tight or cotransitive apartness on nontrivial dcpos, we prove that the intrinsic apartness is both tight and cotransitive when restricted to the sharp elements of a continuous dcpo.”

**Sources:**

- [Tom de Jong, Sharp Elements and Apartness in Domains, EPTCS 351 (2021) 134–151, arXiv:2112.14052](https://doi.org/10.4204/EPTCS.351.9)
- [Tom de Jong, Apartness, sharp elements, and the Scott topology of domains, Mathematical Structures in Computer Science 33 (2023) 573–604](https://doi.org/10.1017/S0960129523000282)

### The extension property makes retracts of continuous lattices continuous

**Remember:** Extend maps into the larger space, then project back to the retract.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 54C55. arXiv math.GN, cs.LO. Level 4: research.

**Definition.** A T₀ space has an open set distinguishing any two distinct points. It is injective for subspace inclusions if every continuous map from a subspace of a T₀ space into it extends to the full space. Scott's theorem identifies these spaces with continuous lattices carrying the Scott topology. Its open sets contain everything above each member and meet every directed set whose join they contain.

**Problem.** Let f be a continuous self-map of a continuous lattice with the Scott topology. Suppose f(f(x)) = f(x) for every x. Then its image is a continuous lattice in the inherited order.

**How the definition helps.** The extension-property description proves the image case because injectivity passes to retracts. Including the image and then applying f gives the identity there. Our own proof extends a map into the whole space and then applies f to land back in the image. The order recovered from the image topology is the inherited order. The work lies in Scott's theorem, which replaces the usual definition by approximation from below with this extension property. A directed set, used in defining the topology, is nonempty and contains an upper bound for each pair of its members.

**nLab:** [Scott topology](https://ncatlab.org/nlab/show/Scott+topology), [injective object](https://ncatlab.org/nlab/show/injective+object). It says: “In the category of T₀ spaces, the injective objects with respect to homeomorphic embeddings are precisely those given by Scott topologies on continuous lattices”

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “If D is a continuous lattice, then so is D<sub>f</sub>.”

**Sources:**

- [Dana Scott, Continuous lattices, in Toposes, Algebraic Geometry and Logic, Lecture Notes in Mathematics 274 (1972)](https://doi.org/10.1007/BFb0073967)

### In localic groups every subgroup is closed

**Remember:** Multiply on the locale product, and every subgroup becomes closed.

*Rules out counterexamples.* MSC 06D22 (Frames, locales), 18F70, 54H11. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A locale is a space described only by its lattice of open sets, which may not have enough points. A localic group is a group object in the category of locales. It is a locale G with continuous maps for unit, inverse and multiplication G × G → G, where × is the product of locales. The locale product can differ from the product of topological spaces.

**Problem.** Every overt localic subgroup of a localic group is weakly closed; an overt locale is one whose map to the point is open. In a Boolean topos (a setting where excluded middle holds), every localic subgroup is closed.

**How the definition helps.** The localic proof uses a fact that fails for spaces: two dense sublocales always meet in a dense sublocale. For topological groups, a subgroup need not be closed; for example ℚ ⊂ ℝ. The quotient by a non-closed subgroup is not Hausdorff. For subspaces of topological spaces, the intersection of two dense subspaces need not be dense, so the proof does not transfer. The same theorem shows that ℚ with addition is not a localic group, because the locale product ℚ × ℚ is larger than the space product. For locally compact groups the two products agree, so ordinary examples such as ℝ are still localic groups.

**nLab:** [localic group](https://ncatlab.org/nlab/show/localic+group), [Leinster2010](https://ncatlab.org/nlab/show/Leinster2010). It says: “But it is a theorem that every subgroup of a localic group is closed.”

**Sources:**

- [John Isbell, Igor Křiž, Aleš Pultr, Jiří Rosický, Remarks on localic groups, in Categorical Algebra and its Applications, Lecture Notes in Mathematics 1348, Springer, 1988, 154–172](https://doi.org/10.1007/BFb0081357)

### Interpreting locales, not spaces, in outer models keeps products

**Remember:** Spaces lose products when they move between models; locales do not.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06D22 (Frames, locales), 18F70, 03E40. arXiv math.LO, math.GN. Level 4: research.

**Definition.** Let M be a transitive model of set theory, and let L be a locale in M. A locale is a lattice that behaves like the lattice of open sets of a space, but has no points. Its interpretation in the larger universe V is a topological space in V built from L. Zapletal's earlier interpretation applies to spaces, not locales.

**Problem.** Given a space X in a model M, we want a reasonable copy of X in a larger universe V. Zapletal's interpretation works well for complete spaces, such as Čech complete spaces. But it does not commute with products.

**How the definition helps.** Products of locales are defined by a universal property, and the interpretation sends every limit of locales to the limit of the spaces. So localic products become products of spaces. For spaces the problem is real. The localic product of the rationals with itself is not spatial, that is, not the open-set lattice of a space. A locale is regular exactly when all its interpretations are T₃, and compact exactly when they are all compact. Similar matches hold for T₁ and Hausdorff, with localic versions that the paper defines. The hard part is proving these matches (our own summary).

**Paper or page:** [Locales as spaces in outer models](https://arxiv.org/abs/2411.05967), [Locales as spaces in outer models](https://arxiv.org/abs/2411.05967). It says: “We extend Zapletal's framework to instead interpret locales, a generalization of topological spaces which focuses on the structure of open sets. Our extension has a number of desirable properties; for instance, localic products always interpret as spatial products.”

**Sources:**

- [Nathaniel Bannister, Locales as spaces in outer models, arXiv:2411.05967 (2024)](https://arxiv.org/abs/2411.05967)

### Overlap algebras give a constructive meaning to almost discrete locales

**Remember:** Constructively, replace "Boolean" by "has a positive overlap relation".

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06D22 (Frames, locales), 03F65, 18F70. arXiv math.LO, math.GN. Level 4: research.

**Definition.** A locale is a space described only by its lattice of open sets. An overlap algebra is a complete lattice of this kind with an extra relation, "x overlaps y". This relation is a positive way to say that the meet of x and y is not zero. It must satisfy a density axiom: if every element that overlaps x also overlaps y, then x ≤ y.

**Problem.** Classically, a Boolean locale with enough points is just a discrete space, that is, the powerset of a set. Constructively this fails, because a powerset is Boolean only if excluded middle holds. We want a class that contains the discrete locales and becomes the Boolean locales under classical logic.

**How the definition helps.** The overlap relation states "the meet is inhabited" without negation, so it can hold for powersets without excluded middle. In the powerset of a set, two subsets overlap when they share an element, so every discrete locale is an overlap algebra. The abstract also says that overlap algebras arise as the smallest strongly dense sublocales of overt locales. So they coincide with Boolean locales if excluded middle holds. In our own words, the counterexample that the definition avoids is the powerset itself, which is a discrete locale but is not Boolean constructively. The definition does not make powersets Boolean. It replaces Booleanness by a positive property that powersets do have.

**Paper or page:** [Overlap Algebras as Almost Discrete Locales](https://arxiv.org/abs/1601.04830). It says: “In fact, discrete locales are never Boolean constructively, except for the trivial locale. So, what is an almost discrete locale constructively? Our claim is that Sambin's overlap algebras have good enough features to deserve to be called that.”

**Sources:**

- [Francesco Ciraulo, Overlap Algebras as Almost Discrete Locales, Logical Methods in Computer Science 19(4) (2023), arXiv:1601.04830](https://arxiv.org/abs/1601.04830)

### Overlap algebras let constructive powersets be complete Boolean algebras

**Remember:** Replace complements by overlaps, and powersets become Boolean again.

*Makes the theorem clean to state or prove.* MSC 06E75 (Generalizations of Boolean algebras), 03F65, 06B23. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** An overlap algebra is a complete lattice with a symmetric relation 'x overlaps y', a positive form of x ∧ y ≠ ⊥. If x overlaps y then x overlaps x ∧ y. An element overlaps a join exactly when it overlaps one of the joined elements. And x ≤ y holds as soon as everything that overlaps x also overlaps y.

**Problem.** In constructive mathematics, the subsets of a set do not form a Boolean algebra. The law A ∪ (X ∖ A) = X for every subset A is the law of excluded middle. So the theory of complete Boolean algebras misses its main example.

**How the definition helps.** The definition replaces complements by a positive overlap relation, and the last axiom does the work of the complement. In the powerset of X, A overlaps B means that A ∩ B has an element. The last axiom then holds constructively (our own check). For a in A, the set {a} overlaps A, so it overlaps B, so a is in B. Classically the notion is the same as a complete Boolean algebra, as the quote says. The paper also connects overlap algebras with locales, the point-free form of topological spaces, and with open maps between them. What stays hard is the choice of morphisms: the paper uses 'symmetrizable' maps, which classically are the join-preserving ones.

**Paper or page:** [Overlap Algebras: a Constructive Look at Complete Boolean Algebras](https://arxiv.org/abs/1904.13320v3). It says: “Sambin's notion of an overlap algebra, although classically equivalent to that of a complete Boolean algebra, has powersets and other natural structures as instances.”

**Sources:**

- [Francesco Ciraulo, Michele Contente, Overlap Algebras: a Constructive Look at Complete Boolean Algebras, Logical Methods in Computer Science 16(1) (2020), arXiv:1904.13320](https://arxiv.org/abs/1904.13320v3)
