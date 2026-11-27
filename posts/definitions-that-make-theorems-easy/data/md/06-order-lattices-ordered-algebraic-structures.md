### Lexicographic comparison gives total orders

**Remember:** The first difference settles the comparison.

*True by definition.* MSC 06A05 (Total orders). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Take two distinct tuples in a finite product of totally ordered sets. In lexicographic order, x precedes y if xᵢ &lt; yᵢ at the least index i where they differ.

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

### An order isomorphism carries least upper bounds to least upper bounds

**Remember:** If both directions preserve comparisons, both directions preserve bounds.

*Rules out counterexamples.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** An order isomorphism pairs the points of two ordered sets one to one, with x ≤ y exactly when f(x) ≤ f(y). A least upper bound is the smallest point above every member of a set.

**Problem.** An order isomorphism preserves every least upper bound and greatest lower bound that exists.

**How the definition helps.** In our own proof, the two-way comparison carries upper bounds across the pairing and preserves which bound is least. Reversing the comparisons gives the result for greatest lower bounds. For our own counterexample, order the subsets of {1, 2} first by size, breaking the singleton tie arbitrarily. The identity preserves inclusion, but the singletons now have the larger singleton as their least upper bound instead of {1, 2}.

**Paper or page:** [Order Isomorphism Preserves Infima and Suprema](https://proofwiki.org/wiki/Order_Isomorphism_Preserves_Infima_and_Suprema). It says: “Then f preserves infima and suprema.”

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

### Longest chains ending at each point give Mirsky’s partition

**Remember:** A longer chain is available each time you move up.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A chain is a set of points in which each pair is comparable. In a finite ordered set, the height of a point counts the points in a longest chain ending there.

**Problem.** In a finite partially ordered set, the minimum number of antichains in a partition equals the largest chain size. An antichain is a set of pairwise incomparable points.

**How the definition helps.** Points of equal height form an antichain because moving to a larger point extends a chain by one point. Grouping points by height therefore gives a partition with at most as many parts as a longest chain has points. Each point of that chain needs a separate part.

**Wikipedia:** [Mirsky's theorem](https://en.wikipedia.org/wiki/Mirsky%27s_theorem). It says: “consisting of elements that have equal values of N, is an antichain”

**Sources:**

- [Leon Mirsky, A Dual of Dilworth's Decomposition Theorem (1971)](https://doi.org/10.2307/2316481)

### Sets of predecessors turn every partial order into inclusion

**Remember:** Include the point so its down set remembers it.

*Rules out counterexamples.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The down set of x is the set of all y with y ≤ x. Include x itself.

**Problem.** Every partially ordered set can be represented by sets ordered by inclusion. The down set of x lies inside the down set of y exactly when x ≤ y.

**How the definition helps.** Including x in its own down set lets us recover x ≤ y from inclusion in our own proof. Conversely, if x ≤ y, every point below x also lies below y. Equal down sets give comparisons in both directions, so their points are equal. In our own counterexample, two distinct minimal points both have empty sets of strict predecessors.

**nLab:** [lower set](https://ncatlab.org/nlab/show/lower+set). It says: “the down set of x is the lower set generated by x.”

**Sources:** none listed. No primary source with a working link was found.

### The order dual gives every order theorem a second theorem free

**Remember:** Reverse every comparison to turn an order theorem into its dual.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The dual of a partially ordered set P is the same set with the order reversed. So x ≤ y in the dual exactly when y ≤ x in P. The dual of a statement reverses every order relation and swaps each notion for its dual, such as join for meet.

**Problem.** If a statement holds for all partially ordered sets, then its dual statement also holds for all partially ordered sets. This is the duality principle.

**How the definition helps.** Reversing all comparisons preserves the partial order axioms. Apply the original theorem to the dual order. Reading that conclusion in the original order gives the dual theorem.

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

**Remember:** Recover finite orders by chaining comparisons with nothing strictly between their endpoints.

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

**Definition.** For a relation R on S, its transitive closure R⁺ is the smallest transitive relation on S containing R.

**Problem.** Every relation has a transitive closure, and it is the chain relation.

**How the definition helps.** Intersect all transitive relations on S containing R, including S × S. Their intersection contains R, is transitive and lies inside each such relation. In our own proof, positive-length finite R-chains define a transitive relation containing R because chains concatenate. Induction on length puts every chain’s endpoints in every transitive relation containing R.

**Paper or page:** [Equivalence of Definitions of Transitive Closure of Relation/Union of Compositions is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Union_of_Compositions_is_Smallest), [Equivalence of Definitions of Transitive Closure of Relation/Finite Chain is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Finite_Chain_is_Smallest). It says: “Then ℛ⁺ is the smallest transitive relation on S that contains ℛ.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Transitive Closure of Relation/Union of Compositions is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Union_of_Compositions_is_Smallest)
- [ProofWiki, Equivalence of Definitions of Transitive Closure of Relation/Finite Chain is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Finite_Chain_is_Smallest)

### Absorption makes lattice orders agree

**Remember:** Absorption makes meet and join agree about which element is larger.

*Rules out counterexamples.* MSC 06B05 (Structure theory of lattices). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An algebraic definition of a lattice uses two commutative and associative operations, ∧ and ∨. Each operation gives x when applied to x twice. The absorption laws are x ∧ (x ∨ y) = x and x ∨ (x ∧ y) = x.

**Problem.** The two operations determine one order in which ∧ is greatest lower bound and ∨ is least upper bound.

**How the definition helps.** Absorption makes x ∧ y = x equivalent to x ∨ y = y. Under this comparison, the operation laws make ∧ the greatest lower bound and ∨ the least upper bound. In our own counterexample, both operations take the minimum on {0, 1}, so the two tests give opposite orders.

**nLab:** [lattice](https://ncatlab.org/nlab/show/lattice). It says: “Notice that the absorption laws guarantee that these two descriptions of ≤ agree.”

**Paper or page:** [Structure with Commutative Idempotent Associative Operations satisfying Absorption Laws is Lattice](https://proofwiki.org/wiki/Structure_with_Commutative_Idempotent_Associative_Operations_satisfying_Absorption_Laws_is_Lattice). It says: “Then there exists a unique lattice ordering ≼ on S such that”

**Sources:** none listed. No primary source with a working link was found.

### Closure under the original operations makes sublattices inherit distributivity

**Remember:** Keep the same operations to keep their laws.

*Rules out counterexamples.* MSC 06B05 (Structure theory of lattices). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In a lattice, each pair has a greatest lower bound (meet) and a least upper bound (join). A sublattice is a nonempty subset containing the original meet and join of each pair of its elements.

**Problem.** Every sublattice inherits distributivity when its parent lattice satisfies it. This law says that meeting a point with a join gives the join of its meets with the two terms.

**How the definition helps.** Closure keeps both operations the same, so each side of the distributive law keeps its value in our own proof. For our own counterexample, keep only the empty set, the full three-element set and its singletons, ordered by inclusion. Any two distinct singletons now have the full set as their join. Meeting this join with the third singleton gives that singleton, while distributing the meet gives the empty set.

**Wikipedia:** [Lattice (order)](https://en.wikipedia.org/wiki/Lattice_%28order%29). It says: “a subset of L that is a lattice with the same meet and join operations as L.”

**Sources:** none listed. No primary source with a working link was found.

### Product order gives joins and meets coordinate by coordinate

**Remember:** Use the least bound in each coordinate.

*True by definition.* MSC 06B05 (Structure theory of lattices). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A lattice gives each pair a least upper bound (join) and a greatest lower bound (meet). In the product of two lattices, define the join and meet of pairs by taking the corresponding operation in each coordinate.

**Problem.** These operations make the product a lattice whose order compares pairs coordinate by coordinate.

**How the definition helps.** In our own proof, a pair bounds two other pairs precisely when each coordinate bounds their corresponding coordinates. Taking the least possible bound in each coordinate therefore gives the least upper bound of the pairs. The greatest lower bound follows by reversing both comparisons. This verifies that the coordinate operations give the lattice defined by the product order.

**Wikipedia:** [Product order](https://en.wikipedia.org/wiki/Product_order). It says: “i• ≤ j• if and only if iₐ ≤ jₐ for every a ∈ A.”

**Paper or page:** [Simple Order Product of Pair of Ordered Sets is Lattice iff Factors are Lattices](https://proofwiki.org/wiki/Simple_Order_Product_of_Pair_of_Ordered_Sets_is_Lattice_iff_Factors_are_Lattices). It says: “denote the simple (order) product of S₁ and S₂.”

**Sources:** none listed. No primary source with a working link was found.

### The join test makes lattice homomorphisms preserve order

**Remember:** Preserve the join equation and you preserve the order.

*True by definition.* MSC 06B05 (Structure theory of lattices). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In a lattice, the join x ∨ y is the least upper bound of x and y. Read x ≤ y as the equation x ∨ y = y.

**Problem.** A map between lattices that sends each join to the join of the two images preserves order.

**How the definition helps.** In our own argument, join preservation sends x ∨ y = y to f(x) ∨ f(y) = f(y). The work moves to the equivalence of the join test with the original order. That equivalence follows from the least-upper-bound property.

**Paper or page:** [Semilattice Homomorphism is Order-Preserving](https://proofwiki.org/wiki/Semilattice_Homomorphism_is_Order-Preserving). It says: “is order-preserving.”

**Sources:** none listed. No primary source with a working link was found.

### Dedekind completeness is exactly what makes closed bounded sets compact

**Remember:** Every nonempty set bounded above has a least upper bound, leaving no missing cut.

*Rules out counterexamples.* MSC 06A05 (Total orders), 06B23, 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A linearly ordered space is a totally ordered set with the order topology, which open rays generate. It is Dedekind complete when every nonempty subset that is bounded above has a least upper bound.

**Problem.** In a linearly ordered space, every closed and bounded subset is compact exactly when the order is Dedekind complete.

**How the definition helps.** Completeness fills the cuts that can prevent closed intervals from being compact. The ordered-space Heine–Borel theorem characterizes compactness of all closed bounded sets by this completeness property. In our own example, √2 splits the rational interval \[0, 2\] at a missing cut. Open rays ending short of the cut on either side cover that interval, but no finite selection covers it.

**Paper or page:** [Heine-Borel iff Dedekind Complete](https://proofwiki.org/wiki/Heine-Borel_iff_Dedekind_Complete). It says: “every closed, bounded subset of X is compact.”

**Sources:**

- [ProofWiki, Heine-Borel iff Dedekind Complete](https://proofwiki.org/wiki/Heine-Borel_iff_Dedekind_Complete)

### Dedekind completeness skips the empty set, whose supremum is a least element

**Remember:** The supremum of nothing is the bottom, and ℝ has no bottom.

*Rules out counterexamples.* MSC 06A05 (Total orders), 06B23. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** An ordered set is Dedekind complete when every nonempty subset that is bounded above has a supremum. A complete lattice is an ordered set in which every subset, the empty set included, has a supremum and an infimum.

**Problem.** In an ordered set S, every element is an upper bound of the empty set, so sup ∅ exists exactly when S has a least element. Hence ℝ, which has no least element, is Dedekind complete only because the definition skips the empty set.

**How the definition helps.** Every element bounds ∅ above, so its least upper bound must be the least element of the whole order. Conversely, a least element is the least of those upper bounds. In our own example, ℝ has suprema for nonempty bounded-above subsets but has no least element.

**Paper or page:** [Infimum of Empty Set is Greatest Element](https://proofwiki.org/wiki/Infimum_of_Empty_Set_is_Greatest_Element), [Supremum of Empty Set is Smallest Element](https://proofwiki.org/wiki/Supremum_of_Empty_Set_is_Smallest_Element), [Dedekind Completeness is Self-Dual](https://proofwiki.org/wiki/Dedekind_Completeness_is_Self-Dual), [Dedekind-Complete Bounded Ordered Set is Complete Lattice](https://proofwiki.org/wiki/Dedekind-Complete_Bounded_Ordered_Set_is_Complete_Lattice). It says: “Suppose that inf ∅, the infimum of the empty set, exists in S. Then ∀s ∈ S: s ⪯ inf ∅. That is, inf ∅ is the greatest element of S.”

**Sources:**

- [ProofWiki, Infimum of Empty Set is Greatest Element](https://proofwiki.org/wiki/Infimum_of_Empty_Set_is_Greatest_Element)
- [ProofWiki, Supremum of Empty Set is Smallest Element](https://proofwiki.org/wiki/Supremum_of_Empty_Set_is_Smallest_Element)
- [ProofWiki, Dedekind Completeness is Self-Dual](https://proofwiki.org/wiki/Dedekind_Completeness_is_Self-Dual)
- [ProofWiki, Dedekind-Complete Bounded Ordered Set is Complete Lattice](https://proofwiki.org/wiki/Dedekind-Complete_Bounded_Ordered_Set_is_Complete_Lattice)

### Excluding endpoints makes every countable dense order isomorphic to the rationals

**Remember:** Place a point between any two ordered points, and leave both ends open.

*Rules out counterexamples.* MSC 06A05 (Total orders), 03C15, 03C35. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A linear order is dense if for every x &lt; y there is a z with x &lt; z &lt; y. It has no endpoints if it has neither a least nor a greatest element.

**Problem.** Every nonempty countable dense linear order without endpoints is isomorphic to the rational numbers. In model theory, the theory of such orders has exactly one countable model.

**How the definition helps.** Without endpoints, the back-and-forth method can always place the next element, because there is always room above, below and between. The excluded counterexamples are the rationals in \[0, 1\] and in \[0, 1) (our own example). Both are countable and dense, but neither is isomorphic to ℚ or to the other. The word nonempty excludes the empty order, which is dense and unbounded by default.

**Wikipedia:** [Cantor's isomorphism theorem](https://en.wikipedia.org/wiki/Cantor%27s_isomorphism_theorem). It says: “Cantor's isomorphism theorem states that every two nonempty countable dense unbounded linear orders are order-isomorphic.”

**Sources:**

- [Cantor, G. (1895). Beiträge zur Begründung der transfiniten Mengenlehre. Mathematische Annalen 46, 481–512.](https://doi.org/10.1007/BF02124929)

### Two copies of the order turn Dilworth into matching

**Remember:** Matched links build chains and uncovered points build an antichain.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Make a graph with a left and a right copy of each point. Join the left copy of x to the right copy of y exactly when x &lt; y. A matching is a set of edges with no shared ends.

**Problem.** In a finite partially ordered set, the largest number of pairwise incomparable points equals the fewest chains needed to partition the set. In a chain, every pair is comparable.

**How the definition helps.** In our own argument, a maximum matching of m edges links n points into n − m disjoint chains, counting isolated points. König’s theorem gives m vertices meeting every edge. At least n − m original points have neither copy among those vertices, so no two are comparable. Each chain contains at most one of these points, giving the reverse bound.

**Wikipedia:** [Dilworth's theorem](https://en.wikipedia.org/wiki/Dilworth%27s_theorem). It says: “each edge in the graph contains at least one vertex in C and such that M and C have the same cardinality m”

**Paper or page:** [Dilworth's Theorem](https://proofwiki.org/wiki/Dilworth's_Theorem). It says: “the maximal size of an antichain is equal to the minimal number of pairwise disjoint chains”

**Sources:**

- [Robert P. Dilworth, A Decomposition Theorem for Partially Ordered Sets (1950)](https://doi.org/10.2307/1969503)
- [D. R. Fulkerson, Note on Dilworth's Decomposition Theorem for Partially Ordered Sets (1956)](https://doi.org/10.2307/2033375)

### Möbius functions of posets unify inclusion–exclusion

**Remember:** The Möbius function is the inverse of 'is less than or equal to'.

*Makes the theorem clean to state or prove.* MSC 06A07 (Combinatorics of partially ordered sets), 06A11. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a locally finite poset, the zeta function has value 1 on every interval \[x, y\]. Convolution multiplies interval functions by (f ∗ g)(x, y) = ∑ f(x, z)g(z, y), summing over x ≤ z ≤ y. The Möbius function is the convolution inverse of the zeta function.

**Problem.** Suppose each element has finitely many predecessors, including itself. Then g(y) = ∑ f(x) for every y exactly when f(y) = ∑ μ(x, y)g(x) for every y, summing over x ≤ y throughout. Inclusion–exclusion, classical Möbius inversion and finite difference calculus are special cases.

**How the definition helps.** Defining μ as the inverse of ζ turns all three results into special cases of one formula. For finite subsets ordered by inclusion, μ(S, T) = (−1)ᵏ with k the size of T ∖ S, so Möbius inversion is inclusion–exclusion. For positive integers ordered by divisibility, μ is the classical Möbius function. For the natural numbers in their usual order, Möbius inversion is the backward difference operator.

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “whenever S and T are finite subsets of E with S ⊆ T, and Möbius inversion is called the principle of inclusion-exclusion.”

**Sources:**

- [Gian-Carlo Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Zeitschrift für Wahrscheinlichkeitstheorie und Verwandte Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Defining floor by a Galois connection gives its rules by reasoning

**Remember:** Floor is the best integer below x, and that defines everything.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.CO, math.CT. Level 2: later undergraduate.

**Definition.** The floor of a real number x is the integer ⌊x⌋ satisfying m ≤ ⌊x⌋ exactly when m ≤ x for every integer m. This makes floor the upper adjoint of integer inclusion.

**Problem.** For every real x and integer n, ⌊x + n⌋ = ⌊x⌋ + n.

**How the definition helps.** Integer translation preserves the test defining floor. In our own proof, m ≤ ⌊x + n⌋ holds exactly when m − n ≤ x. The floor test turns this into m − n ≤ ⌊x⌋, equivalently m ≤ ⌊x⌋ + n. The two integers therefore have the same integer lower bounds and are equal.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “The well-known properties of the floor function, such as ⌊x+n⌋=⌊x⌋+n, can be derived by elementary reasoning from this Galois connection.”

**Sources:**

- [Ore, O. (1944). Galois connexions. Transactions of the American Mathematical Society 55, 493–513.](https://doi.org/10.2307/1990305)

### Galois connections give the shape of every correspondence theorem

**Remember:** Keep only the closed elements, and every Galois connection is a perfect correspondence.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 18A40. arXiv math.CT, math.RA. Level 2: later undergraduate.

**Definition.** A Galois connection between posets P and Q is a pair of order-reversing maps f : P → Q and g : Q → P. They satisfy p ≤ g(q) exactly when q ≤ f(p). The closed elements are those fixed by g∘f (in P) or by f∘g (in Q).

**Problem.** For every Galois connection, f and g restrict to inverse order-reversing bijections between the closed elements of P and of Q. The fundamental theorem of Galois theory and the correspondence between radical ideals and Zariski-closed sets are instances.

**How the definition helps.** If g(f(p)) = p, then f(g(f(p))) = f(p), so f(p) is closed. The same argument for g shows the restrictions are inverse, and both reverse order. In our own examples, the fundamental theorem of Galois theory identifies the closed subgroups and fields for a finite Galois extension. Over an algebraically closed field, the strong Nullstellensatz identifies the closed ideals as the radical ideals.

**nLab:** [Galois connection](https://ncatlab.org/nlab/show/Galois+connection), [Galois theory](https://ncatlab.org/nlab/show/Galois+theory), [Zariski topology](https://ncatlab.org/nlab/show/Zariski+topology). It says: “others reserve it for its restriction to its fixed points, where it becomes an adjoint equivalence.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society 55 (1944) 493–513](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### Joining candidate inputs constructs a right adjoint

**Remember:** If a join preserves the test, take the join of all candidates.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A complete lattice has a least upper bound, called a join, for every subset. Let f map a complete lattice to a partially ordered set. Define g(y) as the join of all inputs x satisfying f(x) ≤ y.

**Problem.** If f preserves all joins, including the empty join, then g is right adjoint to f. This means f(x) ≤ y exactly when x ≤ g(y).

**How the definition helps.** In our own proof, preserving joins makes f(g(y)) the join of the candidate images, all of which lie below y. Every candidate lies below g(y) by construction. Conversely, every input below g(y) is a candidate because preserving joins also preserves order. Thus one formula replaces the search for a greatest input at each y.

**Paper or page:** [All Suprema Preserving Mapping is Lower Adjoint of Galois Connection](https://proofwiki.org/wiki/All_Suprema_Preserving_Mapping_is_Lower_Adjoint_of_Galois_Connection). It says: “Let d: T → S be all suprema preserving mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Lower adjoints of Galois connections preserve all existing joins

**Remember:** Move the lower adjoint across the comparison to get the upper adjoint.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.CO, math.CT. Level 2: later undergraduate.

**Definition.** Take maps F from poset A to poset B and G back. They are adjoint if F(a) ≤ b exactly when a ≤ G(b) for every pair (a, b). Here F is the lower adjoint and G the upper adjoint.

**Problem.** A lower adjoint preserves every join that exists: F(sup S) = sup of the F(s) for s in S. For example, the image map of a function preserves unions.

**How the definition helps.** Adjunction turns upper bounds of the images into upper bounds of the original set. In our own proof, F(sup S) ≤ b means sup S ≤ G(b), equivalently s ≤ G(b) for every s in S. By adjunction, this says exactly that b bounds every F(s) above. In our own example, direct image is left adjoint to preimage.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection), [Complete lattice](https://en.wikipedia.org/wiki/Complete_lattice). It says: “Another important property of Galois connections is that lower adjoints preserve all suprema that exist within their domain.”

**Sources:**

- [Ore, O. (1944). Galois connexions. Transactions of the American Mathematical Society 55, 493–513.](https://doi.org/10.2307/1990305)

### The greatest admissible input makes the right adjoint unique

**Remember:** A greatest admissible input leaves no room for a second adjoint.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** For an order-preserving map f, define g(y) as the greatest x satisfying f(x) ≤ y, whenever that greatest element exists. If it exists for every y, call g the right adjoint.

**Problem.** An order-preserving map between partially ordered sets has at most one right adjoint.

**How the definition helps.** The greatest-input description determines every value of g in our own proof. It agrees with the usual rule because the inputs satisfying f(x) ≤ y are exactly those below that greatest element. Existence requires a greatest input for every y.

**Paper or page:** [Galois Connection is Unique for Given Lower Adjoint](https://proofwiki.org/wiki/Galois_Connection_is_Unique_for_Given_Lower_Adjoint). It says: “is the unique Galois connection such that d is the lower adjoint”

**Sources:** none listed. No primary source with a working link was found.

### Taking the diamond isomorphism as the definition of a modular lattice

**Remember:** In every diamond a ∧ b, a, b, a ∨ b, opposite sides match.

*True by definition. Confidence: medium.* MSC 06B05 (Structure theory of lattices), 06A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For each pair a, b in a lattice, compare the intervals \[a, a ∨ b\] and \[a ∧ b, b\]. Send z in the first to z ∧ b and w in the second to a ∨ w. The lattice is modular if these maps are inverse for every pair.

**Problem.** A lattice is modular exactly when its order dual is modular.

**How the definition helps.** In our own proof, dualizing and exchanging a with b swaps the intervals and exchanges the maps. Inverse maps remain inverse in either order. The equivalence with the usual modular law justifies using this interval definition.

**nLab:** [modular lattice](https://ncatlab.org/nlab/show/modular+lattice). It says: “This is perhaps the most memorable definition for a category theorist: it is a precise expression of the slogan given in the Idea section.”

**Sources:**

- [Richard Dedekind, Ueber die von drei Moduln erzeugte Dualgruppe, Mathematische Annalen 53 (1900) 371–403](https://doi.org/10.1007/BF01448979)

### Asking for all joins gives all meets of a complete lattice

**Remember:** The meet of a set is the join of its lower bounds.

*True by definition.* MSC 06B23 (Complete lattices, completions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A complete lattice is a partially ordered set in which every subset, including ∅, has both a join and a meet.

**Problem.** A partially ordered set in which every subset has a join is a complete lattice. Every subset then also has a meet.

**How the definition helps.** Take the join of all lower bounds of X. Each member of X bounds those lower bounds above, so their join still lies below each member of X. The join dominates every lower bound, making it the meet, even when X is empty.

**Wikipedia:** [Completeness (order theory)](https://en.wikipedia.org/wiki/Completeness_%28order_theory%29), [Complete lattice](https://en.wikipedia.org/wiki/Complete_lattice). It says: “The best-known example is the existence of all suprema, which is in fact equivalent to the existence of all infima.”

**Sources:** none listed. No primary source with a working link was found.

### In a complete lattice every order-preserving map has a fixed point

**Remember:** Every subset has a supremum, even the empty one, so a bottom always exists.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 47H10. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** A complete lattice is a partially ordered set in which every subset has a supremum (least upper bound) and an infimum (greatest lower bound). This includes the empty set. So a complete lattice has a least and a greatest element, and it is never empty.

**Problem.** Every order-preserving map f from a complete lattice to itself has a fixed point. (Order-preserving means that x ≤ y implies f(x) ≤ f(y).) It even has a least and a greatest fixed point.

**How the definition helps.** Completeness supplies the bounds in Tarski’s fixed-point theorem. The supremum of all x satisfying x ≤ f(x) gives the greatest fixed point. The dual construction gives the least fixed point (our own explanation).

**Wikipedia:** [Knaster–Tarski theorem](https://en.wikipedia.org/wiki/Knaster%E2%80%93Tarski_theorem). It says: “If every order-preserving function f : L → L on a lattice L has a fixed point, then L is a complete lattice.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications, Pacific Journal of Mathematics 5 (1955)](https://doi.org/10.2140/pjm.1955.5.285)
- [Anne C. Davis, A characterization of complete lattices, Pacific Journal of Mathematics 5 (1955)](https://doi.org/10.2140/pjm.1955.5.311)

### Restricting to an interval gives joins of fixed points

**Remember:** Find the least fixed point above all the given ones.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 06B05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A fixed point of f is a point x with f(x) = x. For a set of fixed points, form its upper bounds by taking the interval from their join to the top of the original lattice.

**Problem.** The fixed points of an order-preserving map from a complete lattice to itself form a complete lattice. The join of any set of fixed points is the least fixed point in its interval of upper bounds.

**How the definition helps.** In our own proof, the interval turns the search for a join into a search for a least fixed point. The map preserves this interval because the image of any upper bound still bounds every chosen fixed point. The interval is complete, so the least-fixed-point theorem applies there. Reversing the order gives meets.

**Paper or page:** [Knaster-Tarski Theorem](https://proofwiki.org/wiki/Knaster-Tarski_Theorem). It says: “Then ⟨F, ≼⟩ is a complete lattice.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications (1955)](https://doi.org/10.2140/pjm.1955.5.285)

### The meet definition makes least-fixed-point induction immediate

**Remember:** The meet of all candidates lies below each one.

*True by definition.* MSC 06B23 (Complete lattices, completions), 03B70. arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** Let f preserve order on a complete lattice, one where every subset has a greatest lower bound and a least upper bound. A prefixed point is an x with f(x) ≤ x. Define μf as the meet, or greatest lower bound, of all prefixed points.

**Problem.** μf is the least fixed point of f. Moreover, Park induction holds: if f(x) ≤ x, then μf ≤ x.

**How the definition helps.** The meet μf lies below every prefixed point, which gives Park induction. For every prefixed x, monotonicity gives f(μf) ≤ f(x) ≤ x, hence f(μf) ≤ μf. Applying f again makes f(μf) prefixed, so μf ≤ f(μf). Thus μf is fixed and lies below every fixed point (our own proof).

**Wikipedia:** [Knaster–Tarski theorem](https://en.wikipedia.org/wiki/Knaster%E2%80%93Tarski_theorem). It says: “⋀P = ⋀{ x ∈ L ∣ x ≥ f(x) } as the least fixpoint of f.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications, Pacific Journal of Mathematics (1955)](https://doi.org/10.2140/pjm.1955.5.285)

### Subspace sum turns the modular law into one subtraction

**Remember:** Subtract the part already inside to see that the rest lies inside.

*True by definition.* MSC 06C05 (Modular lattices, Desarguesian lattices), 06B05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The join A + B of two subspaces consists of all sums a + b with a in A and b in B. Their meet is A ∩ B.

**Problem.** The subspaces of any vector space form a modular lattice. If A ⊆ C, then (A + B) ∩ C = A + (B ∩ C).

**How the definition helps.** Writing the join as a sum lets our own proof subtract a from a + b. If a + b lies in C, then a lies there since A ⊆ C, so b belongs to B ∩ C. Conversely, adding an element of A to an element of B ∩ C gives an element of both A + B and C. The explicit sum works because it is the smallest subspace containing A and B.

**nLab:** [modular lattice](https://ncatlab.org/nlab/show/modular+lattice). It says: “equivalence relations correspond to subspaces of V, and form a modular lattice.”

**Wikipedia:** [Modular lattice](https://en.wikipedia.org/wiki/Modular_lattice). It says: “form a modular lattice.”

**Sources:** none listed. No primary source with a working link was found.

### Distributivity implies modularity by substitution

**Remember:** Distribute first, then absorb the smaller element.

*True by definition. Confidence: medium.* MSC 06D05 (Structure and representation theory of distributive lattices), 01A60. arXiv math.CO, math.HO. Level 2: later undergraduate.

**Definition.** A lattice is distributive if x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z) for every triple and the dual law also holds. The dual law exchanges ∧ and ∨.

**Problem.** Every distributive lattice is modular. If a ≤ b, then (a ∨ z) ∧ b = a ∨ (z ∧ b).

**How the definition helps.** The distributive law expands (a ∨ z) ∧ b into (a ∧ b) ∨ (z ∧ b). In our own calculation, a ≤ b gives a ∧ b = a, proving the modular law. Birkhoff also characterized distributivity by excluding two five-element lattices, the diamond and the pentagon, as subsets closed under meet and join. Starting from that description puts the work in Birkhoff’s equivalence.

**nLab:** [distributive lattice](https://ncatlab.org/nlab/show/distributive+lattice), [modular lattice](https://ncatlab.org/nlab/show/modular+lattice). It says: “A lattice L is distributive if and only if there is no embedding of N₅ or M₃ into L that preserves binary meets and binary joins.”

**Paper or page:** [On complemented, uniquely complemented and uniquely complemented nondistributive lattices (a historical and epistemological note about a mathematical mystery)](https://arxiv.org/abs/2308.04506). It says: “Any distributive lattice is modular.”

**Sources:** none listed. No primary source with a working link was found.

### Distributivity turns a join inequality into the equation irreducibility needs

**Remember:** Meet with the element to turn the inequality into a join equation.

*Rules out counterexamples.* MSC 06D05 (Structure and representation theory of distributive lattices), 06B05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Take an element p above the bottom of a lattice. It is join-irreducible if p = a ∨ b forces p = a or p = b. It is join-prime if p ≤ a ∨ b forces p ≤ a or p ≤ b.

**Problem.** In a distributive lattice with a bottom element, each element strictly above the bottom is join-prime if and only if it is join-irreducible.

**How the definition helps.** In our own proof, distributivity rewrites p ≤ a ∨ b as p = (p ∧ a) ∨ (p ∧ b). Irreducibility makes one term equal p, giving p ≤ a or p ≤ b. Conversely, applying the prime test to an equality gives irreducibility. In our own five-element diamond example, each middle point is irreducible but lies below the join of its two peers without lying below either.

**Paper or page:** [Join Prime Element iff Join Irreducible in Distributive Lattice](https://proofwiki.org/wiki/Join_Prime_Element_iff_Join_Irreducible_in_Distributive_Lattice). It says: “z is join-prime”

**Sources:** none listed. No primary source with a working link was found.

### The bottom element is not join-irreducible, so Birkhoff's representation is exact

**Remember:** The bottom is the empty join, as 1 is the empty product.

*Rules out counterexamples.* MSC 06D05 (Structure and representation theory of distributive lattices), 06B15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a lattice, an element is join-irreducible if it is not the join of a finite set of other elements. The bottom element is the join of the empty set, so it is not join-irreducible. A lower set of a poset is a set that contains everything below each of its elements.

**Problem.** Every finite distributive lattice is isomorphic to the lattice of lower sets of its poset of join-irreducible elements. The bottom of the lattice matches the empty lower set.

**How the definition helps.** Excluding the bottom keeps the empty lower set as its unique representative. Otherwise ∅ and the singleton containing the bottom would have the same join (our own example). Every element of a finite lattice is the join of its join-irreducibles below it. Distributivity makes these join-irreducibles join-prime, so joining a lower set recovers precisely its members below that join (our own argument).

**Wikipedia:** [Birkhoff's representation theorem](https://en.wikipedia.org/wiki/Birkhoff%27s_representation_theorem). It says: “Equivalently, x is join-irreducible if it is neither the bottom element of the lattice (the join of zero elements) nor the join of any two smaller elements.”

**Sources:**

- [G. Birkhoff, Rings of sets, Duke Mathematical Journal 3 (1937) 443–454](https://doi.org/10.1215/S0012-7094-37-00334-X)

### The median identity makes distributivity visibly self-dual

**Remember:** Swapping meet and join only exchanges the two sides.

*True by definition.* MSC 06D05 (Structure and representation theory of distributive lattices). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A lattice satisfies the median definition of distributivity if (a∧b)∨(a∧c)∨(b∧c) = (a∨b)∧(a∨c)∧(b∨c) for every triple a, b, c.

**Problem.** The order dual of a distributive lattice is distributive. Its order is reversed, so meet and join exchange roles.

**How the definition helps.** The median definition makes duality immediate because exchanging meet and join just swaps the two sides of the identity. With the one-sided law, one must prove the other law separately. The work lies in showing that the median identity and the usual distributive law are equivalent.

**nLab:** [distributive lattice](https://ncatlab.org/nlab/show/distributive+lattice). It says: “A lattice is distributive if and only if the identity (a ∧ b) ∨ (a ∧ c) ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c) ∧ (b ∨ c) is satisfied.”

**Wikipedia:** [Distributive lattice](https://en.wikipedia.org/wiki/Distributive_lattice). It says: “It is a basic fact of lattice theory that the above condition is equivalent to its dual”

**Sources:** none listed. No primary source with a working link was found.

### Atoms exclude zero, so finite Boolean algebras are power sets

**Remember:** Atoms play the part of singletons, and the empty set is no singleton.

*Rules out counterexamples. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras), 06B05. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** In a partially ordered set with least element 0, an atom is an element a &gt; 0 with no element strictly between 0 and a.

**Problem.** Every finite Boolean algebra is isomorphic to the power set of its set of atoms. So the number of elements of a finite Boolean algebra is a power of two.

**How the definition helps.** In our own proof, excluding zero makes the empty set the unique atom set with join zero. Otherwise adjoining zero would preserve every join. Each element equals the join of its atoms, since any nonzero remainder above that join would contain another atom by finiteness. Distinct atoms meet at zero, so distributivity recovers exactly the selected atoms below their join.

**Wikipedia:** [Atom (order theory)](https://en.wikipedia.org/wiki/Atom_%28order_theory%29), [Boolean algebra (structure)](https://en.wikipedia.org/wiki/Boolean_algebra_%28structure%29). It says: “It can be shown that every finite Boolean algebra is isomorphic to the Boolean algebra of all subsets of a finite set.”

**Sources:**

- [Stone, M. H. (1936). The theory of representation for Boolean algebras. Transactions of the American Mathematical Society 40, 37–111.](https://doi.org/10.2307/1989664)

### Boolean complements make every proper prime filter maximal

**Remember:** A prime filter picks a side and cannot add its opposite.

*Rules out counterexamples.* MSC 06E05 (Structure theory of Boolean algebras). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A filter is an upward-closed set containing 1 and closed under pairwise meets. It is proper if it omits 0. It is prime if membership of a join forces membership of at least one term.

**Problem.** Every proper prime filter in a Boolean algebra is an ultrafilter, a maximal proper filter.

**How the definition helps.** In our own proof, a prime filter contains x or its complement because their join is 1. Adding the missing member forces their meet, 0, into the filter, so every proper extension is impossible. Our own counterexample without complements is the chain 0 &lt; a &lt; 1. Its prime filter {1} extends to the proper filter {a, 1}.

**Paper or page:** [Proper and Prime iff Ultrafilter in Boolean Lattice](https://proofwiki.org/wiki/Proper_and_Prime_iff_Ultrafilter_in_Boolean_Lattice). It says: “F is a proper subset of S and F is a prime filter in B”

**Sources:** none listed. No primary source with a working link was found.

### Clipping the complement to an interval keeps the interval Boolean

**Remember:** Replace the complement’s old endpoints with the interval’s endpoints.

*True by definition.* MSC 06E05 (Structure theory of Boolean algebras). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In a Boolean algebra, take the interval \[a, b\] of elements between a and b. For x in the interval, use a ∨ (b ∧ ¬x) as its relative complement.

**Problem.** Every closed interval \[a, b\] with a ≤ b in a Boolean algebra is a Boolean algebra with bottom a and top b.

**How the definition helps.** The formula adjusts the original complement so its meet with x equals a and its join with x equals b. Our own calculation uses distributivity and a ≤ x ≤ b to check these two equations. The interval inherits meet, join and their distributive laws from the original algebra.

**Wikipedia:** [Inclusion (Boolean algebra)](https://en.wikipedia.org/wiki/Inclusion_%28Boolean_algebra%29). It says: “A Boolean algebra whose carrier set is restricted to the elements in an interval is itself a Boolean algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Distributivity makes complements unique, so negation is an operation

**Remember:** A complement meets its partner at zero and joins it at one.

*Rules out counterexamples.* MSC 06E05 (Structure theory of Boolean algebras), 06B05. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** Let L be a lattice with least element 0 and greatest element 1. A complement of an element a is an element b with a ∧ b = 0 and a ∨ b = 1. A Boolean algebra is a complemented distributive lattice.

**Problem.** In a bounded distributive lattice, each element has at most one complement. So in a Boolean algebra, complementation is a well-defined operation.

**How the definition helps.** Distribute the meet of one complement over the join of the element and its other complement. For complements b and c of a, this gives b = b∧(a∨c) = (b∧a)∨(b∧c) = b∧c (our own calculation). Swapping b and c gives c = b∧c. In our own counterexample, each middle element of the nondistributive diamond M₃ has two complements.

**Wikipedia:** [Complemented lattice](https://en.wikipedia.org/wiki/Complemented_lattice). It says: “In bounded distributive lattices, complements are unique.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal proper filters give the ultrafilter extension theorem

**Remember:** An ultrafilter is a proper filter that no larger proper filter contains.

*True by definition.* MSC 06E05 (Structure theory of Boolean algebras), 03E25. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A filter is a nonempty upward-closed set closed under pairwise meets. A proper filter omits the bottom element. An ultrafilter is a proper filter maximal under inclusion.

**Problem.** With the axiom of choice, every proper filter in a Boolean algebra lies inside an ultrafilter.

**How the definition helps.** Defining ultrafilters by maximality puts the extension problem in the form required by Zorn’s lemma in our own proof. Order the proper filters containing the given filter by inclusion. Each nonempty chain has its union as a proper filter above it, and the given filter bounds the empty chain. Zorn’s lemma gives a maximal member, and the equivalence with the alternative complement test is a separate Boolean algebra result.

**Paper or page:** [Proper Filter is Included in Ultrafilter in Boolean Lattice](https://proofwiki.org/wiki/Proper_Filter_is_Included_in_Ultrafilter_in_Boolean_Lattice). It says: “Then there exists ultrafilter G on L”

**Sources:** none listed. No primary source with a working link was found.

### Order reversal makes De Morgan’s laws hold for every existing bound

**Remember:** Reverse the order to turn joins into meets.

*True by definition. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras). arXiv math.LO. Level 2: later undergraduate.

**Definition.** An order-reversing involution is a map that reverses every comparison and returns each point when applied twice. Boolean complementation is such a map.

**Problem.** Boolean complementation sends any existing join to the meet of the complements. It likewise sends any existing meet to the join of the complements.

**How the definition helps.** In our own proof, reversing order twice pairs all upper bounds of a family with all lower bounds of its complements. The least upper bound therefore corresponds to the greatest lower bound, and conversely. The algebraic work is showing that the usual Boolean complement reverses order and that complementing twice returns the original element.

**Paper or page:** [De Morgan's Laws (Boolean Algebras)](https://proofwiki.org/wiki/De_Morgan's_Laws_(Boolean_Algebras)). It says: “¬(a ∨ b) = ¬a ∧ ¬b”

**Sources:** none listed. No primary source with a working link was found.

### Truth tables count the elements of finitely generated free Boolean algebras

**Remember:** Count the truth tables, one output bit for each input tuple.

*True by definition. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras), 03G05. arXiv math.LO, math.RA. Level 2: later undergraduate.

**Definition.** For finite n, represent the free Boolean algebra on n generators by all functions from {0,1}ⁿ to {0,1}. Use coordinate projections as generators and apply Boolean operations pointwise.

**Problem.** For every nonnegative integer n, the free Boolean algebra on n generators has 2 raised to the power 2ⁿ elements.

**How the definition helps.** A truth table chooses one output bit independently for each of 2ⁿ inputs. The work lies in proving this function algebra is free. In our own proof, each row corresponds to a meet choosing each variable or its complement according to that row. Disjunctive normal form identifies each Boolean expression with the join of the rows where it equals 1.

**Wikipedia:** [Free Boolean algebra](https://en.wikipedia.org/wiki/Free_Boolean_algebra). It says: “Another way to see why the free Boolean algebra on an n-element set has 2<sup>2<sup>n</sup></sup> elements is to note that each element is a function from n bits to one.”

**Sources:** none listed. No primary source with a working link was found.

### Complementary basic open sets separate ultrafilters

**Remember:** Different ultrafilters choose different sides of some complement pair.

*True by definition.* MSC 06E15 (Stone spaces (Boolean spaces) and related structures), 06E05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Boolean ultrafilter is a filter containing exactly one of each element and its complement. In the Stone space, ultrafilters are points, and the basic open set U(a) consists of the ultrafilters containing a.

**Problem.** The Stone space is Hausdorff, so two distinct points have disjoint open neighborhoods.

**How the definition helps.** In our own proof, two points that disagree about a belong to the disjoint open sets U(a) and U(¬a). Distinct ultrafilters must disagree about some element. The algebraic work lies in showing that the complement test describes exactly the maximal proper filters.

**Paper or page:** [Stone Space of Boolean Lattice is Hausdorff](https://proofwiki.org/wiki/Stone_Space_of_Boolean_Lattice_is_Hausdorff). It says: “is a Hausdorff space.”

**Sources:**

- [Marshall H. Stone, The theory of representations for Boolean algebras (1936)](https://doi.org/10.1090/S0002-9947-1936-1501865-8)

### Boolean joins combine finitely many ring generators into one

**Remember:** Join the generators to get one generator.

*True by definition.* MSC 06E20 (Ring-theoretic properties of Boolean algebras), 06E05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Boolean ring satisfies x² = x for every element. Define the join of x and y by x ∨ y = x + y + xy. An ideal is principal if one element generates it.

**Problem.** Every finitely generated ideal of a Boolean ring is principal.

**How the definition helps.** The join belongs to the ideal generated by x and y, and multiplying the join by either generator returns that generator. Our own calculation uses x² = x and x + x = 0. Thus the join alone generates the same ideal as the pair. Repeated joins handle any nonempty finite list, and zero generates the ideal for the empty list.

**nLab:** [Boolean ring](https://ncatlab.org/nlab/show/Boolean+ring). It says: “Define x ∨ y to mean x + xy + y.”

**Wikipedia:** [Boolean ring](https://en.wikipedia.org/wiki/Boolean_ring). It says: “Every finitely generated ideal of a Boolean ring is principal”

**Sources:** none listed. No primary source with a working link was found.

### Boolean rings make lattice ideals into ring ideals

**Remember:** Meet multiplies and symmetric difference adds.

*Makes the theorem clean to state or prove.* MSC 06E20 (Ring-theoretic properties of Boolean algebras), 06E15. arXiv math.CO, math.RA. Level 2: later undergraduate.

**Definition.** For a Boolean algebra, define multiplication as meet and addition as symmetric difference, x + y = (x ∧ ¬y) ∨ (¬x ∧ y). A lattice ideal contains zero, is downward closed and contains joins of its pairs.

**Problem.** A subset of a Boolean algebra is a lattice ideal exactly when it is an ideal of the associated Boolean ring. The same holds for prime ideals and for maximal ideals.

**How the definition helps.** In our own proof, x + y ≤ x ∨ y and xy ≤ x give the ring ideal conditions for a lattice ideal. Conversely, y ≤ x gives y = xy, and x ∨ y = x + y + xy gives closure under joins. Both primality tests use the same product, and both maximality tests use inclusion among proper ideals.

**Wikipedia:** [Boolean ring](https://en.wikipedia.org/wiki/Boolean_ring), [Boolean algebra (structure)](https://en.wikipedia.org/wiki/Boolean_algebra_%28structure%29). It says: “Furthermore, a subset of a Boolean ring is a ring ideal (prime ring ideal, maximal ring ideal) if and only if it is an order ideal (prime order ideal, maximal order ideal) of the Boolean algebra.”

**Sources:**

- [Stone, M. H. (1936). The theory of representation for Boolean algebras. Transactions of the American Mathematical Society 40, 37–111.](https://doi.org/10.2307/1989664)

### Chain-complete posets give inflationary maps fixed points without choice

**Remember:** Move upward at each step and take the least upper bound at limits.

*Makes the theorem clean to state or prove.* MSC 06A06 (Partial orders, general), 03E25. arXiv math.LO, math.CO. Level 3: graduate.

**Definition.** A partially ordered set is chain complete if every chain (totally ordered subset) has a least upper bound. A function f is inflationary if f(x) ≥ x for every x.

**Problem.** If X is a chain-complete partially ordered set and f is an inflationary map on X, then f has a fixed point. The proof does not use the axiom of choice.

**How the definition helps.** Inflation makes successive iterates form a chain, and chain completeness supplies a value at each limit stage. The Bourbaki–Witt theorem shows that this iteration reaches a fixed point without choice. The map itself supplies each successor (our own explanation).

**Wikipedia:** [Bourbaki–Witt theorem](https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem). It says: “Note the above argument does not rely on the axiom of choice. (In the case of a proof of Zorn's lemma, Choice is used to define an inflationary map.)”

**Sources:**

- [Bourbaki, N. (1949). Sur le théorème de Zorn. Archiv der Mathematik 2, 434–437.](https://doi.org/10.1007/bf02036949)
- [Witt, E. (1950). Beweisstudien zum Satz von M. Zorn. Mathematische Nachrichten 4, 434–438.](https://doi.org/10.1002/mana.3210040138)

### An up and down relation gives the path count n!

**Remember:** Commuting down past up produces the factors n, n − 1, and so on.

*True by definition.* MSC 06A07 (Combinatorics of partially ordered sets), 05A19. arXiv math.CO. Level 3: graduate.

**Definition.** Take a graded poset with a least element and finite ranks. On formal sums, U sends each point to the sum of its upper covers, and D sums its lower covers. The poset is 1-differential if DU − UD is the identity.

**Problem.** In a 1-differential poset, exactly n! paths go up n steps from the least element and then back down n steps to it. For partitions ordered by adding one box, this counts pairs of ways to build the same n-box shape.

**How the definition helps.** The operator relation makes each down step after n up steps contribute a factor n on the least element (our own). Moving D past the n copies of U gives DUⁿ = UⁿD + nUⁿ⁻¹, and D sends the least element to zero (our own). Repeating gives n!, since matrix entries of these operator products count paths (our own). The work moves to checking the relation, which for partitions is a count of the ways to add and remove boxes (our own).

**Wikipedia:** [Differential poset](https://en.wikipedia.org/wiki/Differential_poset). It says: “Then the second and third conditions may be replaced by the statement that DU − UD = r I (where I is the identity).”

**Sources:**

- [R. P. Stanley, Differential posets, Journal of the American Mathematical Society 1 (1988) 919–961](https://doi.org/10.1090/S0894-0347-1988-0941434-9)

### Möbius inversion on divisor intervals gives the prime formula

**Remember:** Factor a divisor interval into prime-power chains and multiply their Möbius values.

*True by definition.* MSC 06A07 (Combinatorics of partially ordered sets), 11A25. arXiv math.CO, math.NT. Level 3: graduate.

**Definition.** The Möbius function of a finite poset is the inverse of its zeta matrix, where ζ(x, y) = 1 when x ≤ y and 0 otherwise. The arithmetic Möbius function μ(n) is zero if a squared prime divides n, and otherwise (−1) to the number of primes dividing n.

**Problem.** The Möbius value from 1 to n in the divisibility order equals the arithmetic Möbius function at n.

**How the definition helps.** The inverse definition makes the prime formula a product, because the inverse for a product of orders is the product of their inverses. Unique prime factorization makes the divisors of n a product of chains of prime powers (our own). In a chain the inverse has 1 on the diagonal, −1 one step above it, and zero elsewhere. The arithmetic definition instead starts from the prime formula and leaves a check that it gives the inverse (our own).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “The Möbius function of the cartesian product P × Q of two posets P and Q is the product of their Möbius functions:”

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “Now the Möbius function of D is the product of the Möbius functions for the factor posets, computed above, giving the classical formula:”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Taking Euler's relation as a definition extends Dehn–Sommerville to Eulerian posets

**Remember:** Euler's relation on every interval is the whole definition of Eulerian.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06A07 (Combinatorics of partially ordered sets), 52B05. arXiv math.CO. Level 3: graduate.

**Definition.** A finite graded poset with a bottom and a top is Eulerian if every nontrivial closed interval has equally many even-rank and odd-rank elements.

**Problem.** For every finite Eulerian poset of rank d + 1, Stanley’s toric h-vector satisfies hₖ = h\_(d−k) for 0 ≤ k ≤ d. Polytope face lattices, augmented face posets of simplicial homology spheres and finite Bruhat intervals are Eulerian.

**How the definition helps.** Interval balance supplies one hypothesis for Stanley’s generalized Dehn–Sommerville theorem. The theorem proves symmetry of the toric h-vector. In our own explanation, Euler’s formula supplies the balance on polytope face intervals.

**Wikipedia:** [Eulerian poset](https://en.wikipedia.org/wiki/Eulerian_poset). It says: “The face lattice of a convex polytope, consisting of its faces, together with the smallest element, the empty face, and the largest element, the polytope itself, is an Eulerian lattice.”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 1, second edition, Cambridge University Press (2011)](https://doi.org/10.1017/CBO9781139058520)

### Well-quasi-orders keep the order on subsets well-founded

**Remember:** A well-quasi-order is well-founded and has no infinite antichain.

*Rules out counterexamples. Confidence: medium.* MSC 06A07 (Combinatorics of partially ordered sets), 03E05. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** A quasi-order is a reflexive and transitive relation ≤. It is a well-quasi-order if every infinite sequence contains indices i &lt; j with xᵢ ≤ xⱼ.

**Problem.** For subsets A and B of a well-quasi-order X, write A ≤⁺ B if every a in A lies below some b in B. This quasi-order on subsets is well-founded.

**How the definition helps.** In our own counterexample, successive tails of an infinite antichain descend strictly under ≤⁺. For each subset in a putative descending chain, take its downward closure Dᵢ. These closures decrease strictly, so choose xᵢ in Dᵢ outside Dᵢ₊₁. No later xⱼ can dominate xᵢ, contradicting the sequence condition (our own proof).

**Wikipedia:** [Well-quasi-ordering](https://en.wikipedia.org/wiki/Well-quasi-ordering). It says: “One can show that this quasiordering on P(X) need not be well-founded, but if one takes the original quasi-ordering to be a well-quasi-ordering, then it is.”

**Sources:** none listed. No primary source with a working link was found.

### A geometric series for the Möbius function counts chains

**Remember:** Expand the inverse as a geometric series to count chains with alternating signs.

*True by definition.* MSC 06A11 (Algebraic aspects of posets), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** In the incidence algebra of a finite poset, the Möbius function μ is the inverse of the zeta function ζ. Write ζ = δ + η, with δ the identity and η the indicator of strict comparison.

**Problem.** For x &lt; y, μ(x, y) is the sum of the numbers of strict chains from x to y, with sign (−1) to their lengths. The length counts the steps in the chain.

**How the definition helps.** Defining μ as an inverse gives the geometric series δ − η + η² − ⋯ (our own). The power ηⁱ(x, y) counts the chains from x to y with i steps (our own). The powers vanish beyond the longest chain, so the series is finite and inverts δ + η (our own). Starting from the recursion instead leaves a check that the alternating chain count obeys it (our own).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “A Möbius function of P is defined as an inverse to the zeta function with respect to the convolution product.”

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “This can be shown using Philip Hall's theorem, relating the value of μ(0,1) to the number of chains of length i.”

**Sources:**

- [P. Hall, The Eulerian functions of a group, Quarterly Journal of Mathematics os-7 (1936) 134–151](https://doi.org/10.1093/qmath/os-7.1.134)
- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Möbius inverses give both recursions and reverse the order

**Remember:** The inverse identity works on both sides and survives reversing the order.

*True by definition.* MSC 06A11 (Algebraic aspects of posets), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** In a poset with finite intervals, multiply integer-valued interval functions by summing f(x, z)g(z, y) over x ≤ z ≤ y. The Möbius function is the two-sided inverse of the constant interval function 1 under this product.

**Problem.** For x &lt; y, both the sum of μ(x, z) and the sum of μ(z, y) over z in \[x, y\] vanish. Reversing the order exchanges the two arguments of μ.

**How the definition helps.** Multiplying by the constant function 1 on either side gives the identity, which vanishes off the diagonal. These two products give the two sums. Reversing the order exchanges the factors and reverses each interval, so the inverse has its arguments reversed (our own argument).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “A Möbius function of P is defined as an inverse to the zeta function with respect to the convolution product.”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### An adjoint description makes closed elements determine closure

**Remember:** An element closes to the least closed element above it.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.RA. Level 3: graduate.

**Definition.** A closure operator is an order-preserving map c with x ≤ c(x) and c(c(x)) = c(x). An element y is closed when c(y) = y. Equivalently, define closure by choosing the least closed element c(x) above each x.

**Problem.** Two closure operators on the same partially ordered set are equal if they have the same closed elements.

**How the definition helps.** Each c(x) is the least closed element above x, so the closed elements determine it uniquely. Extensivity and idempotence make c(x) closed and above x. If a closed y lies above x, monotonicity gives c(x) ≤ c(y) = y (our own check).

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “Conversely, any closure operator c on some poset A gives rise to the Galois connection”

**Paper or page:** [Closed Elements Uniquely Determine Closure Operator](https://proofwiki.org/wiki/Closed_Elements_Uniquely_Determine_Closure_Operator). It says: “Suppose that f and g have the same closed elements. Then f = g.”

**Sources:** none listed. No primary source with a working link was found.

### Closed pairs make concept lattices complete

**Remember:** Intersect the object sets, then recover their shared attributes.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06B23. arXiv math.CO, math.RA. Level 3: graduate.

**Definition.** A formal context relates objects to attributes. A concept is a pair (A, B) where B consists of all attributes common to every object in A. The set A must consist of all objects having every attribute in B.

**Problem.** The concepts of any formal context form a complete lattice when ordered by inclusion of their object sets. This means every family has a greatest lower bound and a least upper bound.

**How the definition helps.** Intersecting concept object sets imposes all their attribute requirements together, so the intersection is again a concept object set (our own argument). This intersection gives the greatest lower bound, including the full object set for an empty family. The meet of all upper bounds then gives each join.

**Wikipedia:** [Formal concept analysis](https://en.wikipedia.org/wiki/Formal_concept_analysis). It says: “These meet and join operations satisfy the axioms defining a lattice, in fact a complete lattice.”

**Sources:**

- [Rudolf Wille, Restructuring lattice theory: an approach based on hierarchies of concepts (1982)](https://doi.org/10.1007/978-94-009-7798-3_15)

### Galois connections give closure operators

**Remember:** The two adjunction inequalities make applying the round trip twice redundant.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.RA. Level 3: graduate.

**Definition.** For posets P and Q, take order-preserving maps f from P to Q and g back. They form a Galois connection if f(x) ≤ y exactly when x ≤ g(y) for every x in P and y in Q. A closure operator on P preserves order and satisfies x ≤ c(x) = c(c(x)) for every x.

**Problem.** For any monotone Galois connection f, g, the round trip g∘f is a closure operator.

**How the definition helps.** The adjunction rule supplies the inequalities that prove the round trip is a closure operator. Substituting y = f(x) gives x ≤ g(f(x)), and substituting x = g(y) gives f(g(y)) ≤ y. Our own calculation uses these to get c(c(x)) = c(x), and the adjunction rule also makes both maps preserve order. So one checks one rule for a pair of maps instead of three closure laws.

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

**How the definition helps.** A left adjoint preserves joins, so F turns unions into intersections in the reversed order. Each A is a union of singletons, hence F(A) is the intersection of their images. In our own reconstruction, relate x to y exactly when y belongs to F({x}). This forces the relation uniquely, and the adjunction gives x ∈ G(B) exactly when B ⊆ F({x}).

**nLab:** [Galois connection](https://ncatlab.org/nlab/show/Galois+connection). It says: “Because f is a left adjoint, it takes colimits in P(X) (in this case, unions) to colimits in P(Y)ᵒᵖ, which are intersections in P(Y).”

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “Up to isomorphism all antitone Galois connections between power sets arise in this way.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society (1944)](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### MacNeille cuts preserve existing bounds

**Remember:** An existing join has exactly the same upper bounds as its summands.

*True by definition.* MSC 06B23 (Complete lattices, completions). arXiv math.CT. Level 3: graduate.

**Definition.** In the MacNeille completion, close a set by taking the common lower bounds of its common upper bounds. The closed sets are ordered by inclusion. Send an element to the set of all elements below it, rather than using the lattice of all downward closed sets.

**Problem.** The MacNeille completion preserves all existing least upper bounds and greatest lower bounds.

**How the definition helps.** In our own proof, the union of principal lower sets has the same upper bounds as its generators. If their join exists, the lower bounds of those upper bounds form precisely the principal lower set of that join. Intersecting principal lower sets gives all common lower bounds, precisely the principal lower set of the meet whenever it exists.

**nLab:** [MacNeille completion](https://ncatlab.org/nlab/show/MacNeille+completion). It says: “preserves all least upper bounds (joins) and greatest lower bounds (meets) existing in L.”

**Sources:**

- [H. M. MacNeille, Partially ordered sets (1937)](https://doi.org/10.1090/S0002-9947-1937-1501929-X)

### The Dedekind–MacNeille completion extends Dedekind cuts to every poset

**Remember:** Keep the sets equal to the common lower bounds of their upper bounds.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 06A15. arXiv math.CO. Level 3: graduate.

**Definition.** For a subset A of a partially ordered set, take its set of upper bounds, then the set of lower bounds of that. The Dedekind–MacNeille completion is the set of all A that equal this double set, ordered by inclusion.

**Problem.** Every partially ordered set embeds in its Dedekind–MacNeille completion, a complete lattice that embeds in every complete lattice containing the order. For the rational numbers, the completion is the real numbers with −∞ and +∞ added.

**How the definition helps.** Taking lower bounds after upper bounds defines a closure operation, so its fixed sets form a complete lattice. Principal lower sets embed the original order. In any complete lattice containing that order, send each cut to its join, whose original upper bounds recover the cut (our own proof). For ℚ, the proper nonempty cuts represent real numbers, while ∅ and ℚ supply the endpoints.

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

**Definition.** An ideal is a nonempty directed lower set. A complete lattice is continuous when the map taking each ideal to its join has a left adjoint. This makes the join map a right adjoint. Equivalently, each element is the join of the elements way below it.

**Problem.** In a continuous complete lattice, meeting with a fixed element preserves directed joins. Thus x ∧ ⋁D = ⋁{x ∧ d : d ∈ D} for each directed set D.

**How the definition helps.** The adjoint definition makes the join map from ideals a right adjoint, and right adjoints preserve meets. Our own proof applies this to the ideal of elements below x and the ideal of elements below some member of D. Their meet is their intersection, which consists of the elements below some x ∧ d with d in D. The work lies in proving the equivalence with the way-below definition.

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Paper or page:** [Continuous Lattice is Meet-Continuous](https://proofwiki.org/wiki/Continuous_Lattice_is_Meet-Continuous). It says: “Then L is meet-continuous.”

**Sources:**

- [Rudolf-E. Hoffmann, Continuous posets and adjoint sequences, Semigroup Forum (1979)](https://doi.org/10.1007/BF02574184)

### Defining continuity by a left adjoint makes way-below respect directed joins

**Remember:** Left adjoints preserve joins, so way-below sets of joins are unions.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv math.CT, cs.LO. Level 3: graduate.

**Definition.** An ideal is a nonempty directed set that contains everything below its elements. A poset with directed joins is continuous when the join map from ideals to elements has a left adjoint. This left adjoint sends a to the smallest ideal whose join lies above a, the set of elements way below a. Here b is way below a if b lies below a member of each directed set whose join lies above a.

**Problem.** In a continuous poset, b is way below the join of a directed set D exactly when b is way below some member of D.

**How the definition helps.** Left adjoints preserve joins, so the way-below set of the join of D is the union of the way-below sets of its members. A directed join of ideals is their union. Reading membership in the union gives the claim (our own). The usual proof instead uses the interpolation property, which itself needs proof.

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Sources:** none listed. No primary source with a working link was found.

### Directed joins turn separate Scott continuity into joint continuity

**Remember:** Every pair of indices is bounded by an index on the diagonal.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A directed set is nonempty, and any two members have an upper bound within it. A directed-complete partial order has a join for every directed subset. A map is Scott continuous if it preserves order and directed joins.

**Problem.** A map from a product of two directed-complete partial orders to another is Scott continuous exactly when it is Scott continuous in each variable separately.

**How the definition helps.** In our own proof, separate continuity gives monotonicity in both coordinates and expands the image of a directed join into two successive joins. Every pair of coordinate indices has a common upper index, so the original diagonal values give the same join. Conversely, fixing either coordinate preserves directed joins, so joint continuity gives separate continuity.

**Paper or page:** [Domain theory in univalent foundations I: Directed complete posets and Scott's D∞](https://arxiv.org/abs/2407.06952v3). It says: “A map f: D₁ × D₂ → E is Scott continuous if and only if the maps f(x,−): D₂ → E and f(−,y): D₁ → E are Scott continuous for every x: D₁ and y: D₂.”

**Sources:**

- [Tom de Jong, Domain theory in univalent foundations I: Directed complete posets and Scott's D∞](https://arxiv.org/abs/2407.06952v3)

### Directed lower sets give the free directed-complete order

**Remember:** Extend a map by taking the join of its values on each ideal.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 06A06. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A directed set is nonempty, and any two members have an upper bound within it. A directed-complete partial order has a join for every directed subset. A Scott-continuous map preserves order and directed joins. An ideal is a directed lower set, so it contains everything below any of its members.

**Problem.** For a poset S, order its ideals by inclusion and embed each x as the principal ideal of elements below x. Every order-preserving map f from S into a directed-complete order D extends uniquely to a Scott-continuous map on these ideals.

**How the definition helps.** Each ideal is a directed union of principal ideals, so its image must be the join of their prescribed values. This join exists because f preserves order, and on the principal ideal of x it equals f(x). Directed unions of ideals are ideals, and taking the join over their union gives the join of their separate values (our own proof).

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “for any monotone function f: S → D to a dcpo D, there exists a unique Scott continuous function f̄: Idl(S) → D such that f̄ ∘ i<sub>S</sub> = f.”

**Sources:**

- [Tatsuji Kawai, Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4)

### In the Scott topology, continuous maps are exactly those preserving directed joins

**Remember:** You cannot reach an open set only in the limit of a directed set.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 54H12, 18B35. arXiv math.GN, cs.LO. Level 3: graduate.

**Definition.** A directed subset is nonempty and contains an upper bound for each pair of its members. A subset of a preorder is Scott-open if it is upward closed and meets every directed subset whose join exists and belongs to it.

**Problem.** Between preorders with their Scott topologies, continuous maps are exactly the monotone maps preserving every existing directed join. The Scott topology on the ordered truth values gives the Sierpiński space.

**How the definition helps.** Preserving order and directed joins makes preimages of Scott-open sets Scott-open. Conversely, complements of principal lower sets are Scott-open, so continuity forces monotonicity (our own proof). For directed D, any upper bound of f(D) has a principal lower set whose closed preimage contains D and hence its join. Thus f preserves the join, and on the two truth values only the upper singleton is open among singletons.

**nLab:** [Scott topology](https://ncatlab.org/nlab/show/Scott+topology). It says: “This in fact ensures that, in general, the continuous functions between preorders with Scott topologies are precisely those (necessarily monotonic) functions between them which preserve directed joins (called Scott-continuous).”

**Sources:**

- [Dana Scott, Continuous lattices, in: Toposes, Algebraic Geometry and Logic, Lecture Notes in Mathematics 274, Springer (1972) 97–136](https://doi.org/10.1007/BFb0073967)

### Scott continuity makes the least fixed point a limit of iterates

**Remember:** Continuous maps reach their least fixed point in ω steps from bottom.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 47H10. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A directed-complete partial order is a partial order in which every directed subset has a least upper bound. A directed subset is a nonempty set in which any two elements have an upper bound inside the set. A function is Scott-continuous if it preserves the least upper bounds of directed subsets.

**Problem.** Every Scott-continuous self-map f of a directed-complete partial order with least element ⊥ has a least fixed point. It is the least upper bound of the iterates starting at ⊥.

**How the definition helps.** Continuity is defined as exactly the property that the proof uses at the limit step. The iterates ⊥, f(⊥), f(f(⊥)), … form an increasing chain with least upper bound m, and continuity gives f(m) = m. Any other fixed point is above every iterate, so it is above m. For a function that is only monotone, the iteration can need transfinitely many steps (our own).

**Wikipedia:** [Kleene fixed-point theorem](https://en.wikipedia.org/wiki/Kleene_fixed-point_theorem). It says: “Then f has a least fixed point, which is the supremum of the ascending Kleene chain of f.”

**Sources:** none listed. No primary source with a working link was found.

### Scott domains give a space isomorphic to its own function space

**Remember:** Count only the continuous functions, and D can be as big as D → D.

*Makes the theorem clean to state or prove.* MSC 06B35 (Continuous lattices and posets, applications), 03B40, 18C50. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** For a continuous lattice D, order the Scott-continuous maps from D to itself pointwise to form \[D → D\]. Such maps preserve order and suprema of nonempty directed subsets. A subset is directed if each pair of its elements has an upper bound within it.

**Problem.** There is a domain D∞ with more than one point that is isomorphic to its own space \[D∞ → D∞\] of Scott-continuous functions. So D∞ is a model of the untyped lambda calculus in which not all terms are equal.

**How the definition helps.** The function-space equation now ranges over Scott-continuous self-maps. Scott’s inverse-limit construction supplies a nontrivial continuous lattice satisfying the equation. In our own explanation, the isomorphism interprets application and abstraction, yielding a nontrivial model.

**nLab:** [domain theory](https://ncatlab.org/nlab/show/domain+theory). It says: “In 1969, Dana Scott solved this problem topologically: the terms were interpreted as continuous functions on a suitable space D isomorphic to its own function space. This D is called a domain.”

**Sources:**

- [D. S. Scott, Data types as lattices, SIAM J. Comput. 5 (1976) 522–587](https://doi.org/10.1137/0205037)

### The adjoint definition makes continuous lattices retracts of ideal lattices

**Remember:** The ideal of approximations joins back to the original element.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 06B23. arXiv math.RA, cs.LO. Level 3: graduate.

**Definition.** A directed set is nonempty, and any two members have an upper bound within it. An ideal is a directed set that contains everything below any of its members. A complete lattice is continuous if the join map s from its ideals has a left adjoint t. This means t(a) ⊆ I exactly when a ≤ s(I).

**Problem.** Every continuous complete lattice L is a retract of its ideal lattice, which is algebraic. This means there are join-preserving maps t and s in opposite directions with s(t(a)) = a for every a in L.

**How the definition helps.** The left adjoint t preserves joins, as does s because s is left adjoint to the principal ideal map. Adjunction gives t(a) ⊆ ↓a and a ≤ s(t(a)), hence s(t(a)) = a (our own check). Each ideal is a directed union of principal ideals, which are compact because membership of their generator witnesses containment (our own argument).

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “Every continuous lattice is a suplattice retract of an algebraic lattice.”

**Sources:**

- [Tatsuji Kawai, Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4)
- [Rudolf-E. Hoffmann, Continuous posets and adjoint sequences, Semigroup Forum (1979)](https://doi.org/10.1007/BF02574184)

### The compact ideals are principal

**Remember:** A single generator witnesses compactness in a directed union.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications). arXiv math.CT. Level 3: graduate.

**Definition.** In a join semilattice with a least element, every pair has a join, its least upper bound. An ideal is a nonempty downward closed subset closed under binary joins. A principal ideal contains exactly the elements below one generator.

**Problem.** An ideal is compact if containment in a directed union of ideals implies containment in one member. The compact ideals are exactly the principal ideals. Consequently every ideal is a join of compact ideals in the complete lattice of ideals.

**How the definition helps.** Testing compactness on directed unions reduces the usual finite-cover test to finding one generator. In our own proof, a directed union covering a principal ideal contains its generator in one member, which then contains the whole ideal. Conversely, every ideal is the directed union of its principal ideals. Compactness puts it inside one of them, which gives equality.

**nLab:** [algebraic lattice](https://ncatlab.org/nlab/show/algebraic+lattice). It says: “An algebraic lattice is a lattice which is a complete lattice; such that every element is a join of compact elements.”

**Paper or page:** [Ideals form Algebraic Lattice](https://proofwiki.org/wiki/Ideals_form_Algebraic_Lattice). It says: “Then I is an algebraic lattice.”

**Sources:** none listed. No primary source with a working link was found.

### Modularity excludes Dilworth’s counterexamples

**Remember:** Modularity transports a diamond’s competing complements into the whole lattice.

*True by definition.* MSC 06C05 (Modular lattices, Desarguesian lattices), 01A60. arXiv math.CO, math.HO. Level 3: graduate.

**Definition.** In a lattice, ∧ gives the greatest lower bound and ∨ the least upper bound of two elements. A complement of x meets x at the bottom element and joins x at the top element. The modular law requires (a ∨ z) ∧ b = a ∨ (z ∧ b) whenever a ≤ b.

**Problem.** Every bounded modular lattice with exactly one complement for each element is distributive.

**How the definition helps.** In our own proof, the modular diamond criterion gives a diamond with bottom u and top v in any nondistributive modular lattice. A complement s of u gives a modular interval isomorphism from \[u,v\] onto \[0,v∧s\] by meeting with s. Write k = v∧s and choose a complement t of k. The two diamond complements extend to distinct global complements by joining with t, since meeting back with k recovers each by modularity.

**Paper or page:** [On complemented, uniquely complemented and uniquely complemented nondistributive lattices (a historical and epistemological note about a mathematical mystery)](https://arxiv.org/abs/2308.04506). It says: “Every uniquely complemented modular lattice is distributive.”

**Sources:**

- [R. P. Dilworth, Lattices with Unique Complements (1945)](https://doi.org/10.1090/S0002-9947-1945-0012263-6)

### Orthomodularity excludes zero gaps

**Remember:** Rebuild the larger element from the smaller one and its orthogonal remainder.

*True by definition.* MSC 06C15 (Complemented lattices, orthocomplemented lattices and posets). arXiv math.LO. Level 3: graduate.

**Definition.** In a bounded lattice, write ∧ for greatest lower bound and ∨ for least upper bound. An ortholattice has an order-reversing operation x ↦ x′ with x″ = x and x ∧ x′ = 0. The orthomodular law says b = a ∨ (b ∧ a′) whenever a ≤ b.

**Problem.** In an orthomodular lattice, if a ≤ b and b ∧ a′ = 0, then a = b.

**How the definition helps.** The orthomodular law gives b = a ∨ (b ∧ a′) whenever a ≤ b. Substituting zero for b ∧ a′ gives b = a ∨ 0 = a (our own calculation).

**Paper or page:** [Topological duality for orthomodular lattices](https://arxiv.org/abs/2208.07430v2). It says: “if a ≤ b and −a · b = 0, then a = b.”

**Sources:**

- [Topological duality for orthomodular lattices](https://arxiv.org/abs/2208.07430v2)

### Orthomodularity keeps the part of the modular law Hilbert subspaces satisfy

**Remember:** Split the larger subspace into the smaller one and its orthogonal remainder.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06C15 (Complemented lattices, orthocomplemented lattices and posets), 03G12. arXiv math.LO, quant-ph. Level 3: graduate.

**Definition.** An orthocomplemented lattice has an order-reversing involution a ↦ a⊥, a map with a⊥⊥ = a, that sends each element to a complement. It is orthomodular if a ≤ c implies a ∨ (a⊥ ∧ c) = c. This is the modular law in the special case b = a⊥.

**Problem.** The closed subspaces of a Hilbert space, with orthogonal complement, form an orthomodular lattice. In dimension at least 2 this lattice is not distributive, so it is not a Boolean algebra.

**How the definition helps.** Orthomodularity states exactly the decomposition supplied by orthogonal projection onto a closed subspace. For A ⊆ C, subtracting that projection from any vector in C leaves a vector in C orthogonal to A (our own argument). In a plane, three distinct lines violate distributivity because two span the plane while each meets the third only at zero (our own example).

**Wikipedia:** [Complemented lattice](https://en.wikipedia.org/wiki/Complemented_lattice). It says: “A natural further weakening of this condition for orthocomplemented lattices, necessary for applications in quantum logic, is to require it only in the special case b = a⊥.”

**Sources:**

- [Birkhoff, G.; von Neumann, J. (1936). The logic of quantum mechanics. Annals of Mathematics 37, 823–843.](https://doi.org/10.2307/1968621)

### Upward sets give complete distributivity

**Remember:** Unions and intersections keep every membership test pointwise.

*True by definition.* MSC 06D10 (Complete distributivity), 06D50. arXiv math.LO. Level 3: graduate.

**Definition.** Order the prime filters of a bounded distributive lattice by inclusion. A prime filter is a proper filter containing a or b whenever it contains a ∨ b. The canonical extension consists of all upward closed subsets of this ordered set, ordered by inclusion.

**Problem.** The canonical extension, formed from all upward closed sets of prime filters, is completely distributive. An intersection of unions equals the union of intersections obtained by choosing one set from each family.

**How the definition helps.** Upward closed sets have ordinary unions and intersections as joins and meets, so membership proves the whole distributive law. In our own argument, a point in every union belongs to one set in each family, by the axiom of choice. It therefore lies in one of the stated intersections, and the converse follows from membership alone. The representation theorem does the work of identifying this concrete lattice with the canonical extension.

**nLab:** [canonical extension](https://ncatlab.org/nlab/show/canonical+extension). It says: “The canonical extension Lᵟ of a distributive lattice L is a complete and completely distributive lattice.”

**Sources:** none listed. No primary source with a working link was found.

### An order-reversing adjunction gives one De Morgan law

**Remember:** Negation as a left adjoint converts joins into meets.

*True by definition.* MSC 06D20 (Heyting algebras (lattice-theoretic aspects)), 03G10. arXiv math.LO. Level 3: graduate.

**Definition.** Heyting negation ¬x is the largest element disjoint from x. Equivalently, b ≤ ¬x holds exactly when b ∧ x = 0, for every b.

**Problem.** Heyting negation satisfies ¬(x ∨ y) = ¬x ∧ ¬y. The reverse pattern ¬(x ∧ y) = ¬x ∨ ¬y can fail.

**How the definition helps.** The symmetric rule makes negation a left adjoint into the reversed order, where the join is the original meet, and left adjoints preserve joins. The work lies in passing from the largest-disjoint-element definition to the symmetric order test. Our own counterexample uses the open sets of the real line, where ¬U is the interior of the complement of U. For the two open half-lines ending at 0, the negation of their intersection is the whole line, but the union of their negations misses 0.

**nLab:** [Heyting algebra](https://ncatlab.org/nlab/show/Heyting+algebra). It says: “−⇒a is self-adjoint: −⇒a: L → Lᵒᵖ is left adjoint to −⇒a: Lᵒᵖ → L.”

**Sources:** none listed. No primary source with a working link was found.

### Back conditions preserve Heyting implication

**Remember:** Lift each point that implication has to check.

*True by definition. Confidence: medium.* MSC 06D20 (Heyting algebras (lattice-theoretic aspects)). arXiv math.LO. Level 3: graduate.

**Definition.** In a poset, an upward closed set contains every point above each of its members. For upward closed U and V, x belongs to U → V if every member of U above x belongs to V. A monotone map f satisfies the back condition if every y ≥ f(x) equals f(z) for some z ≥ x, for every x.

**Problem.** For order-preserving maps, inverse image preserves this implication exactly when the map satisfies the back condition.

**How the definition helps.** Monotonicity and the back condition make the images above x exactly the points above f(x), so both implication tests agree. Conversely, suppose y ≥ f(x) has no lift above x. Choose U = {t : t ≥ y} and V = {t : t &gt; y} (our own proof). The witness y defeats implication at f(x), but every image above x in U lies in V.

**Paper or page:** [Etale algebras over finite Heyting algebras](https://arxiv.org/abs/2410.23442v1). It says: “f satisfies the ‘back’ condition of a p-morpism if and only if ↑f(x) ⊆ f∗(↑x).”

**Sources:**

- [Etale algebras over finite Heyting algebras](https://arxiv.org/abs/2410.23442v1)

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

**How the definition helps.** The filter definition provides a point for a closed set once the opens it meets form a completely prime filter. Our own proof takes the set of all a for which Uₐ meets the given irreducible closed set. Irreducibility gives closure under binary meets, and the union law for the opens gives complete primeness. This point meets the same opens as the closed set, and distinct filters have distinct closures.

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “every irreducible closed set (non-empty closed set that is not the union of any two proper closed subsets) is the closure of a unique point.”

**Paper or page:** [Spectrum of Locale as Completely Prime Filters is Sober Space](https://proofwiki.org/wiki/Spectrum_of_Locale_as_Completely_Prime_Filters_is_Sober_Space). It says: “Then: Sp(L) is a sober space.”

**Sources:** none listed. No primary source with a working link was found.

### Double negation gives the smallest dense sublocale

**Remember:** Fixing the empty open stops a dense nucleus at double negation.

*True by definition.* MSC 06D22 (Frames, locales). arXiv math.CT. Level 3: graduate.

**Definition.** A locale describes a space by its ordered collection of opens. A nucleus is an order-preserving operation j on opens with a ≤ j(a) = j(j(a)) that preserves binary intersections. Its fixed opens describe a sublocale, called dense when j fixes the empty open. For each open a, let ¬a be the largest open disjoint from a.

**Problem.** The double negation sublocale is contained in every dense sublocale. Its opens form a Boolean algebra.

**How the definition helps.** In our own proof, any dense nucleus j satisfies j(a) ∧ j(¬a) = j(0) = 0. Since ¬a ≤ j(¬a), this gives j(a) ≤ ¬¬a. Larger nuclei define smaller sublocales, so the double negation sublocale lies inside every dense sublocale. The Booleanization theorem identifies double negation as a dense nucleus whose fixed opens form a Boolean algebra.

**nLab:** [double negation](https://ncatlab.org/nlab/show/double+negation). It says: “it is the smallest dense sublocale of L, the intersection of all dense sublocales.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclei give quotient frames through fixed points

**Remember:** The closure map keeps joins into its fixed points and keeps meets by definition.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A frame is a complete lattice in which finite meets distribute over arbitrary joins. A nucleus is a map j on a frame that preserves binary meets and satisfies a ≤ j(a) and j(j(a)) = j(a). An element a is a fixed point if j(a) = a.

**Problem.** The fixed points of a nucleus form a frame in the inherited order. The map j onto these fixed points preserves finite meets and arbitrary joins.

**How the definition helps.** The fixed points have inherited meets, and j(x) is the least fixed point above x. Thus j is left adjoint to inclusion and preserves joins into the fixed points (our own argument). It preserves binary meets by definition and fixes the top by extensivity. Since j is onto, the frame distributive law passes to its image.

**nLab:** [nucleus](https://ncatlab.org/nlab/show/nucleus). It says: “Note that, by property (3) above, we may interpret j as a function j<sup>\*</sup>: L → L/j, which is a surjective frame homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### The frame law produces Heyting implication

**Remember:** Distributing meets over joins lets all candidates join to give the largest one.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A complete lattice has a join and a meet for every subset, even the empty set. A frame is a complete lattice satisfying x ∧ ⋁S = ⋁{x ∧ s : s ∈ S} for every x and S.

**Problem.** Every frame is a complete Heyting algebra. This means that for each x and z, there is a largest y such that x ∧ y ≤ z.

**How the definition helps.** Take the join of all candidates y with x ∧ y ≤ z. By the frame law, meeting that join with x gives a join of elements below z. The join of the candidates is therefore a candidate and dominates every candidate (our own construction).

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

### Clopen inverse images detect surjectivity

**Remember:** A missing point leaves two distinct clopen sets with the same inverse image.

*Rules out counterexamples.* MSC 06D50 (Lattices and duality). arXiv math.LO. Level 3: graduate.

**Definition.** A Priestley space is a compact topological space with a partial order. Whenever x is not below y, some clopen upward set contains x and misses y. Clopen means both closed and open.

**Problem.** A continuous order-preserving map between Priestley spaces is onto exactly when inverse image is injective on the open and closed upward sets.

**How the definition helps.** Surjections distinguish distinct subsets by inverse image. For a missing point p, compactness gives finitely many clopen upward or downward neighborhoods whose intersection misses the image (our own proof). Collecting upward and downward factors gives U and D, so U and U ∖ D differ at p but agree on the image. Without compactness, an infinite discrete equality-ordered space embeds densely in its equality-ordered one-point compactification (our own example).

**Paper or page:** [On a Generalization of Heyting Algebras II](https://arxiv.org/abs/2409.10642v1). It says: “f is surjective iff f⁻¹∶ CU(Y, ≤ᵧ) → CU(X, ≤ₓ) is one-to-one”

**Sources:**

- [On a Generalization of Heyting Algebras II](https://arxiv.org/abs/2409.10642v1)

### The Priestley separation axiom gives a duality for distributive lattices

**Remember:** Clopen up-sets must separate points, so the lattice of up-sets remembers everything.

*Makes the theorem clean to state or prove.* MSC 06D50 (Lattices and duality), 06D05, 06F30. arXiv math.CO, math.GN. Level 3: graduate.

**Definition.** A Priestley space is a compact topological space with a partial order. It must satisfy the Priestley separation axiom: if x is not below y, some clopen up-set contains x but not y. A clopen set is one that is both open and closed, and an up-set contains everything above its elements.

**Problem.** The category of bounded distributive lattices is dually equivalent to the category of Priestley spaces with continuous order-preserving maps. This extends Stone duality between Boolean algebras and Stone spaces.

**How the definition helps.** The separation axiom lets clopen upward sets detect every failure of order (our own explanation). Priestley’s duality theorem identifies these sets with the elements of the dual bounded distributive lattice. In the other direction, prime filters ordered by inclusion give the dual space, with inverse image inducing the maps.

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

### Regular opens complete clopen algebras

**Remember:** Every regular open is a join of clopens inside it.

*True by definition.* MSC 06E10 (Chain conditions, complete algebras). arXiv math.LO. Level 3: graduate.

**Definition.** A Stone space is compact and Hausdorff with a basis of clopen sets, meaning sets that are both closed and open. An open set is regular if it equals the interior of its closure. A Boolean completion embeds a Boolean algebra in a complete one so that every element is a least upper bound of original elements.

**Problem.** The regular open algebra of a Stone space is the Boolean completion of its clopen algebra.

**How the definition helps.** The regular-open algebra theorem supplies a complete Boolean algebra with joins given by taking the interior of the closure of a union. Every regular open is the union of the clopen basis sets inside it. Taking the interior of that union’s closure returns the same regular open, so those clopens generate it by a join (our own check).

**Wikipedia:** [Complete Boolean algebra](https://en.wikipedia.org/wiki/Complete_Boolean_algebra). It says: “a complete Boolean algebra containing A such that every element is the supremum of some subset of A.”

**Sources:** none listed. No primary source with a working link was found.

### Describing profinite limits by clopen algebras makes maps to finite sets factor

**Remember:** A finite list of clopen sets can be read at one stage.

*True by definition. Confidence: medium.* MSC 06E15 (Stone spaces (Boolean spaces) and related structures), 54B35. arXiv math.GN. Level 3: graduate.

**Definition.** A profinite space is the limit of an inverse system of finite discrete spaces, the stages. Describe it by its algebra of clopen sets, the sets that are both open and closed. This algebra is the directed union of the finite algebras pulled back from the stages.

**Problem.** Take an inverse system of finite discrete spaces over a directed set, with surjective maps. Every continuous map from its limit to a finite discrete space factors through the projection to one stage.

**How the definition helps.** With the clopen-algebra description, a map to a finite set is a finite list of clopen sets, its fibres. Each fibre lies in the algebra pulled back from some stage, and directedness gives one stage for all of them. Since the projection to that stage is onto, the fibres partition the stage and define the factored map (our own proof). The work goes into proving that the clopen algebra is the directed union of the stage algebras, which uses compactness.

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

### Residuals combine implications

**Remember:** A test against two factors becomes two successive tests.

*True by definition.* MSC 06F05 (Ordered semigroups and monoids). arXiv math.LO. Level 3: graduate.

**Definition.** In a lattice, each pair has a least upper bound and a greatest lower bound. Equip it with an associative, commutative product and a unit. Define implication by requiring t ≤ x → z exactly when x · t ≤ z, for all x, t and z.

**Problem.** In a commutative residuated lattice, x → (y → z) = (x · y) → z.

**How the definition helps.** Residuation gives t ≤ x → (y → z) exactly when y · (x · t) ≤ z. Associativity and commutativity turn this product into (x · y) · t. Applying residuation again gives t ≤ (x · y) → z, so the two expressions have the same lower bounds (our own proof).

**Paper or page:** [An alternative definition of tense operators on residuated lattices](https://arxiv.org/abs/2312.10876v1). It says: “x → (y → z) = (x · y) → z”

**Sources:**

- [An alternative definition of tense operators on residuated lattices](https://arxiv.org/abs/2312.10876v1)

### Residuals make multiplication preserve joins

**Remember:** When multiplication has a right adjoint, distributivity is not a separate axiom.

*True by definition.* MSC 06F05 (Ordered semigroups and monoids), 06A15. arXiv math.RA. Level 3: graduate.

**Definition.** A residuated lattice is a lattice with associative multiplication and an identity element. It has residuals, which give the largest solution y to x • y ≤ z or y • x ≤ z. Each residual is a right adjoint, since y lies below it exactly when the corresponding product lies below z.

**Problem.** In a residuated lattice, multiplication on either side preserves every join that exists. In particular, it distributes over binary joins and preserves the least element if there is one.

**How the definition helps.** Each residual is right adjoint to multiplication on its corresponding side, so both multiplication maps preserve existing joins. Binary joins give distributivity, and the empty join gives preservation of the least element (our own explanation).

**Wikipedia:** [Residuated lattice](https://en.wikipedia.org/wiki/Residuated_lattice). It says: “Note that distributivity x • (y ∨ z) = (x • y) ∨ (x • z) and x•0 = 0 are consequences of these axioms and so do not need to be made part of the definition.”

**Sources:**

- [Morgan Ward and R. P. Dilworth, Residuated lattices, Transactions of the American Mathematical Society (1939)](https://doi.org/10.1090/S0002-9947-1939-1501995-3)

### A greatest unit makes idempotent products meets

**Remember:** A greatest unit bounds products, and idempotence supplies every lower bound.

*Rules out counterexamples.* MSC 06F07 (Quantales). arXiv math.RA. Level 3: graduate.

**Definition.** A quantale is an ordered set with all least upper bounds and an associative product distributing over them in each variable. It is integral if it has a unit and that unit is greatest. It is idempotent if xx = x for every x.

**Problem.** In an integral idempotent quantale, the product is the greatest lower bound. Its order is a frame, so finite greatest lower bounds distribute over all least upper bounds.

**How the definition helps.** Monotonicity and the greatest unit e give xy ≤ xe = x and xy ≤ ey = y. Each common lower bound a satisfies a = aa ≤ xy, so xy is the meet. The quantale law now distributes this meet over every join. In our own counterexample, ordinary multiplication on \[0, 1\] has greatest unit 1 but violates idempotence at ½.

**nLab:** [quantale](https://ncatlab.org/nlab/show/quantale). It says: “If a monoid object in the cartesian category of posets is idempotent and affine, then the monoid multiplication is the meet operation.”

**Sources:** none listed. No primary source with a working link was found.

### Subset products freely add joins

**Remember:** Send singletons first, then send each union to a join.

*True by definition. Confidence: medium.* MSC 06F07 (Quantales). arXiv math.RA. Level 3: graduate.

**Definition.** A monoid has an associative product and a unit. Multiply two subsets by taking every product of a member of the first with a member of the second. Union gives least upper bounds, called joins, and the singleton containing the unit serves as unit. A unital quantale has all joins and an associative product with unit that distributes over joins in each variable.

**Problem.** Every map preserving multiplication and unit from a monoid into a unital quantale extends uniquely from singletons to all subsets. The extension preserves arbitrary least upper bounds, products and the unit.

**How the definition helps.** Every subset is a union of singletons, so preservation of least upper bounds forces its image. Our own extension sends each subset to the least upper bound of its members’ images. Distributing multiplication over both bounds proves the product rule, including for empty subsets. The concrete subset construction thus satisfies the abstract extension property defining the free unital quantale.

**nLab:** [quantale](https://ncatlab.org/nlab/show/quantale). It says: “The order is the inclusion order on sets, and meet and join are just intersection and union, respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Interpolation splits ordered sums

**Remember:** Interpolate once, then subtract to get the second piece.

*True by definition.* MSC 06F20 (Ordered abelian groups, Riesz groups, ordered linear spaces). arXiv math.GR. Level 3: graduate.

**Definition.** In an ordered abelian group, addition preserves the partial order. Riesz interpolation requires a common intermediate element whenever each of two lower elements lies below each of two upper elements.

**Problem.** Let an ordered abelian group satisfy Riesz interpolation. Suppose y and z are nonnegative and 0 ≤ x ≤ y + z. Then x = u + v for some 0 ≤ u ≤ y and 0 ≤ v ≤ z.

**How the definition helps.** Interpolation produces u once the four desired bounds are expressed in the same order. In our own proof, both 0 and x − z lie below both x and y. Interpolate to get 0 ≤ u ≤ y and x − z ≤ u ≤ x. Then v = x − u satisfies 0 ≤ v ≤ z and x = u + v.

**Wikipedia:** [Partially ordered group](https://en.wikipedia.org/wiki/Partially_ordered_group). It says: “there exists z ∈ G such that xᵢ ≤ z ≤ yⱼ.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudo-orders let the real numbers be linearly ordered constructively

**Remember:** If x &lt; z, every y lies above x or below z, decided by approximation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06A05 (Total orders), 03F60, 12J15. arXiv math.LO, math.CA. Level 4: research.

**Definition.** A pseudo-order is an asymmetric relation &lt; satisfying two further conditions for all x, y, z. If x &lt; z, then x &lt; y or y &lt; z. If neither x &lt; y nor y &lt; x, then x = y.

**Problem.** In constructive mathematics, the strict order &lt; on the real numbers, Dedekind or Cauchy, is a pseudo-order that extends the decidable order on ℚ. The order ≤ on the reals cannot be proved total.

**How the definition helps.** The axioms let a known strict gap yield a comparison without requiring totality of ≤. For x &lt; z, choose rationals x &lt; r &lt; s &lt; z. Locatedness of y gives r &lt; y or y &lt; s, hence x &lt; y or y &lt; z (our own argument). Equality of real numbers follows from the absence of a strict separation in either direction.

**nLab:** [pseudo-order](https://ncatlab.org/nlab/show/pseudo-order). It says: “Since the corresponding partial order ≤ cannot be proved total (and in some classically invalid versions of constructive mathematics can even be proved not total), &lt; is more directly useful than ≤ in constructive analysis.”

**Sources:** none listed. No primary source with a working link was found.

### Asking maps to preserve semidirected joins makes strictness automatic

**Remember:** The least element is the join of the empty set.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A subset is semidirected if every pair of its members has an upper bound in the subset. A map between pointed directed-complete orders is inductive if it preserves suprema of all semidirected subsets, including ∅.

**Problem.** Every inductive map between pointed directed-complete orders is strict, which means that it preserves the least element.

**How the definition helps.** The empty subset is semidirected and its supremum is the least element. Preserving this supremum sends the least element of the domain to the least element of the codomain. Sterling’s Lemma 45 also identifies inductive maps with strict Scott-continuous maps.

**Paper or page:** [Tensorial structure of the lifting doctrine in constructive domain theory](https://arxiv.org/abs/2312.17023v5). It says: “A Scott–continuous morphism between pointed dcpos is strict if and only if it is inductive, i.e. preserves suprema of semidirected subsets.”

**Sources:**

- [Jonathan Sterling, Tensorial structure of the lifting doctrine in constructive domain theory](https://arxiv.org/abs/2312.17023v5)

### Compact elements test strong maximality

**Remember:** Test a compact element against itself to detect strong maximality.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications). arXiv math.LO. Level 4: research.

**Definition.** A directed family is nonempty and contains an upper bound for each pair of members. Write a ≪ b if every directed family with least upper bound at least b contains a member above a. A Scott open is upward closed and meets every directed family whose least upper bound belongs to it. Strong maximality of x requires, whenever a ≪ b, either a ≪ x or disjoint Scott opens containing b and x respectively.

**Problem.** Let D be an algebraic dcpo, so every element is a directed join of the compact elements c ≪ c below it. Then x is strongly maximal exactly when, for each compact c, either c ≤ x or disjoint Scott opens contain c and x.

**How the definition helps.** Using a compact c for both arguments of the defining test gives the compact test since c ≪ c. Conversely, for a ≪ b, algebraicity supplies a compact c with a ≤ c ≤ b (our own proof). The compact test gives either c ≤ x, hence a ≤ c ≪ c ≤ x and a ≪ x, or disjoint neighborhoods of c and x. In the second case, upward closure puts b in the neighborhood of c.

**Paper or page:** [Apartness, sharp elements, and the Scott topology of domains](https://arxiv.org/abs/2106.05064v5). It says: “An element x of an algebraic dcpo D is strongly maximal if and only if for every compact element c ∈ D either c ⊑ x or c and x are Hausdorff separated.”

**Sources:**

- [Apartness, sharp elements, and the Scott topology of domains](https://arxiv.org/abs/2106.05064v5)

### The extension property makes retracts of continuous lattices continuous

**Remember:** Extend maps into the larger space, then project back to the retract.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 54C55. arXiv math.GN, cs.LO. Level 4: research.

**Definition.** A T₀ space has an open set distinguishing any two distinct points. It is injective for subspace inclusions if every continuous map from a subspace of a T₀ space into it extends to the full space. Scott's theorem identifies these spaces with continuous lattices carrying the Scott topology. Its open sets contain everything above each member and meet every directed set whose join they contain.

**Problem.** Let f be a continuous self-map of a continuous lattice with the Scott topology. Suppose f(f(x)) = f(x) for every x. Then its image is a continuous lattice in the inherited order.

**How the definition helps.** The extension-property description proves the claim, because injectivity passes to retracts. Our own proof extends a map into the whole lattice and then applies f to land back in the image. The order recovered from the image topology is the inherited order. The work lies in Scott's theorem, which replaces approximation from below with this extension property.

**nLab:** [Scott topology](https://ncatlab.org/nlab/show/Scott+topology), [injective object](https://ncatlab.org/nlab/show/injective+object). It says: “In the category of T₀ spaces, the injective objects with respect to homeomorphic embeddings are precisely those given by Scott topologies on continuous lattices”

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “If D is a continuous lattice, then so is D<sub>f</sub>.”

**Sources:**

- [Dana Scott, Continuous lattices, in Toposes, Algebraic Geometry and Logic, Lecture Notes in Mathematics 274 (1972)](https://doi.org/10.1007/BFb0073967)

### Interpreting locales, not spaces, in outer models keeps products

**Remember:** Allow new filters, but test complete primeness on the old families.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06D22 (Frames, locales), 18F70, 03E40. arXiv math.LO, math.GN. Level 4: research.

**Definition.** Interpret a ground-model frame L by its filters in the outer universe that are completely prime for all ground-model families. Thus if such a filter contains a ground-model family’s join, it contains some member. Give these filters the topology generated by the sets of filters containing each specified frame element.

**Problem.** The interpretation of locales sends products of locales to products of spaces. Zapletal's interpretation of spaces does not commute with products.

**How the definition helps.** The frame of a localic product is a coproduct of frames in the ground model. The product interpretation theorem identifies its interpreted points with tuples of interpreted points, with the product topology. Zapletal’s space construction can lose this correspondence (our own comparison).

**Paper or page:** [Locales as spaces in outer models](https://arxiv.org/abs/2411.05967), [Locales as spaces in outer models](https://arxiv.org/abs/2411.05967). It says: “We extend Zapletal's framework to instead interpret locales, a generalization of topological spaces which focuses on the structure of open sets. Our extension has a number of desirable properties; for instance, localic products always interpret as spatial products.”

**Sources:**

- [Nathaniel Bannister, Locales as spaces in outer models, arXiv:2411.05967 (2024)](https://arxiv.org/abs/2411.05967)

### Overlap algebras give a constructive meaning to almost discrete locales

**Remember:** Constructively, replace "Boolean" by "has a positive overlap relation".

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06D22 (Frames, locales), 03F65, 18F70. arXiv math.LO, math.GN. Level 4: research.

**Definition.** Equip a frame with a predicate Pos. For every subset S, require Pos(⋁S) exactly when Pos(s) holds for some s in S. Define overlap by Pos(x ∧ y), and require x ≤ y whenever every element overlapping x also overlaps y.

**Problem.** Every discrete locale, the powerset of a set, is an overlap algebra when two subsets overlap if they share an element. If excluded middle holds, overlap algebras are exactly the Boolean locales.

**How the definition helps.** For subsets, take Pos to mean inhabited, so overlap means sharing an element. Singletons test inclusion, giving the density axiom (our own proof). Classically, Pos(x) means x ≠ 0: join preservation gives one direction and density the other. Density then forces x = ¬¬x, while in a Boolean frame nonzero meets distinguish x from y whenever x ≰ y (our own proof).

**Paper or page:** [Overlap Algebras as Almost Discrete Locales](https://arxiv.org/abs/1601.04830). It says: “In fact, discrete locales are never Boolean constructively, except for the trivial locale. So, what is an almost discrete locale constructively? Our claim is that Sambin's overlap algebras have good enough features to deserve to be called that.”

**Sources:**

- [Francesco Ciraulo, Overlap Algebras as Almost Discrete Locales, Logical Methods in Computer Science 19(4) (2023), arXiv:1601.04830](https://arxiv.org/abs/1601.04830)

### Perfect maps have Scott-continuous right adjoints

**Remember:** Approximate on the left to preserve directed joins on the right.

*True by definition.* MSC 06D22 (Frames, locales). arXiv math.CT. Level 4: research.

**Definition.** In a frame, a ≪ b means every nonempty directed family with join at least b contains a member above or equal to a. A family is directed if each pair has an upper bound in the family. A frame map is perfect if it preserves ≪.

**Problem.** Let h be a frame map whose source frame is continuous, so each element is a directed join of elements way below it. If h preserves ≪, then its right adjoint g preserves directed joins.

**How the definition helps.** Our own proof tests the desired inequality on approximations a ≪ g(∨D). Perfection gives h(a) ≪ h(g(∨D)) ≤ ∨D, so h(a) ≤ d for some d in D. Adjunction gives a ≤ g(d), and continuity gives g(∨D) ≤ ∨g(D) by joining all such a. Monotonicity gives the reverse inequality.

**Paper or page:** [Canonical extensions of locally compact frames](https://arxiv.org/abs/1910.03542v1). It says: “The right adjoint of h preserves directed joins.”

**Sources:**

- [Canonical extensions of locally compact frames](https://arxiv.org/abs/1910.03542v1)

### Boolean rough sets have equal bounds

**Remember:** Negation swaps the two bounds, and Boolean truth makes them coincide.

*True by definition.* MSC 06D30 (De Morgan algebras, ?ukasiewicz algebras (lattice-theoretic aspects)). arXiv math.LO. Level 4: research.

**Definition.** For a reflexive transitive relation, the rough set of A is the pair (L,U) of its lower and upper bounds. A point belongs to L if every successor belongs to A, and to U if some successor belongs to A.

**Problem.** The rough sets form a Nelson algebra, an algebra for reasoning with strong negation. Its Boolean elements, those whose join with their negation is the top element, are exactly the pairs with equal bounds.

**How the definition helps.** The rough-set representation theorem supplies the Nelson algebra operations. In our own calculation, strong negation sends (L,U) to (Uᶜ,Lᶜ), and join takes unions coordinatewise. Since L ⊆ U, the upper union is the whole space. The lower union L ∪ Uᶜ fills the space exactly when U ⊆ L.

**Paper or page:** [Nelson algebras, residuated lattices and rough sets: A survey](https://arxiv.org/abs/2402.02606v2). It says: “The Boolean elements of the Nelson FLₑw-algebra ⟨RS; ∧, ∨, \*, ⇒, (∅,∅), (U,U)⟩ are the exact rough sets.”

**Sources:**

- [Nelson algebras, residuated lattices and rough sets: A survey](https://arxiv.org/abs/2402.02606v2)

### Quotients force Boolean elements to one

**Remember:** Forcing x to one means killing its negation.

*True by definition.* MSC 06D35 (MV-algebras). arXiv math.RA. Level 4: research.

**Definition.** In an MV-algebra A, an element x is Boolean when x ⊕ x = x. A localization at x is a homomorphism q sending x to one through which every homomorphism sending x to one factors uniquely.

**Problem.** For a Boolean element x, localization is the quotient by the ideal generated by ¬x. This quotient imposes the single equation ¬x = 0.

**How the definition helps.** The defining equation for localization becomes a quotient equation after taking negations. A map sends x to one exactly when it sends ¬x to zero. The quotient therefore has precisely the required factorization property. Our own explanation uses the ideal correspondence for MV-algebras, which identifies imposing an equation with taking the indicated quotient.

**Paper or page:** [Separable MV-algebras and lattice-groups](https://arxiv.org/abs/2307.03978v2). It says: “the quotient q∶ A → A/⟨¬x⟩ has the universal property of A → A\[x⁻¹\].”

**Sources:**

- [Separable MV-algebras and lattice-groups](https://arxiv.org/abs/2307.03978v2)

### Radicals give semisimple quotients

**Remember:** Intersect all maximal ideals, then kill what every semisimple target kills.

*True by definition.* MSC 06D35 (MV-algebras). arXiv math.CT, math.RA. Level 4: research.

**Definition.** The radical of an MV-algebra is the intersection of all its maximal proper ideals. An MV-algebra is semisimple if its radical equals {0}.

**Problem.** Every map from an MV-algebra A to a semisimple MV-algebra factors uniquely through A modulo its radical. The quotient is itself semisimple.

**How the definition helps.** In our own proof, inverse images of maximal ideals under MV-homomorphisms are maximal. Thus a map to a semisimple target sends the source radical into every maximal target ideal, hence to zero. The quotient property gives unique factorization. By ideal correspondence, the maximal quotient ideals intersect in zero.

**Paper or page:** [A Galois Theory and a Pretorsion Theory in MV-Algebras](https://arxiv.org/abs/2310.11006v1). It says: “given a morphism of MV-algebras g∶ A → i(B), where B is semisimple, we want to prove that there exists a unique morphism of MV-algebras g̃∶ S(A) → B”

**Sources:**

- [A Galois Theory and a Pretorsion Theory in MV-Algebras](https://arxiv.org/abs/2310.11006v1)

### Powersets form overlap algebras constructively

**Remember:** Overlap respects meets, detects a member of any join, and distinguishes order.

*Makes the theorem clean to state or prove.* MSC 06E75 (Generalizations of Boolean algebras), 03F65, 06B23. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** An overlap algebra is a complete lattice with a symmetric relation \# satisfying three laws for all x, y and families S. From x \# y infer x \# (x ∧ y), and require x \# ∨S exactly when some s in S satisfies x \# s. If every z overlapping x also overlaps y, require x ≤ y.

**Problem.** Constructively, subsets overlap when their intersection contains an element. This makes every powerset an overlap algebra, although a powerset need not be Boolean. Classically, overlap algebras are exactly the complete Boolean algebras.

**How the definition helps.** In our own powerset check, intersection witnesses give symmetry, meet stability and the join law. Testing overlap with each singleton gives inclusion. Classically the overlap representation theorem identifies overlap with having nonzero meet in a complete Boolean algebra.

**Paper or page:** [Overlap Algebras: a Constructive Look at Complete Boolean Algebras](https://arxiv.org/abs/1904.13320v3). It says: “Sambin's notion of an overlap algebra, although classically equivalent to that of a complete Boolean algebra, has powersets and other natural structures as instances.”

**Sources:**

- [Francesco Ciraulo, Michele Contente, Overlap Algebras: a Constructive Look at Complete Boolean Algebras, Logical Methods in Computer Science 16(1) (2020), arXiv:1904.13320](https://arxiv.org/abs/1904.13320v3)

### Multiplicative filters form frames

**Remember:** A filter contains the unit, all finite products, and everything above them.

*True by definition.* MSC 06F07 (Quantales). arXiv math.RA. Level 4: research.

**Definition.** In a commutative quantale whose unit is greatest, a multiplicative filter is an upward closed subset containing the unit and closed under products. Order the filters by inclusion.

**Problem.** The filters form a frame, meaning that binary intersections distribute over arbitrary joins.

**How the definition helps.** In our own proof, take a in F above a finite product of factors from the union of the joined filters. Replace each factor x by x ∨ a, now in F and its original filter. Distributing their product gives the old product and terms containing a, all at most a since the unit is greatest. Thus a belongs to the join of the intersections, and the reverse inclusion follows from monotonicity.

**Paper or page:** [Commutative Quantale and Localization](https://arxiv.org/abs/2508.02991v1). It says: “ℱ · 𝒢 = ℱ ∩ 𝒢”

**Sources:**

- [Commutative Quantale and Localization](https://arxiv.org/abs/2508.02991v1)
