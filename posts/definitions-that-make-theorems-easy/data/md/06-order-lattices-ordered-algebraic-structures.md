### Lexicographic comparison gives total orders

**Remember:** The first difference settles the comparison.

*True by definition.* MSC 06A05 (Total orders). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Lexicographic order on a finite product of totally ordered sets compares two distinct tuples at the first index where they differ: x precedes y when xᵢ &lt; yᵢ there.

**Problem.** Lexicographic comparison of tuples from totally ordered sets gives a total order.

**How the definition helps.** Two distinct tuples always have a first difference, and the order of that coordinate decides them. For transitivity, the earlier of the two first differences decides, using transitivity in that coordinate when they coincide (our own). Coordinatewise comparison, by contrast, leaves (0, 1) and (1, 0) incomparable (our own).

**nLab:** [lexicographic order](https://ncatlab.org/nlab/show/lexicographic+order). It says: “if x, y ∈ L and x ≠ y, then x &lt; y iff xᵢ &lt; yᵢ where i is the least element in the set {j ∈ I : xⱼ ≠ yⱼ}.”

**Paper or page:** [Lexicographic Order on Pair of Totally Ordered Sets is Total Ordering](https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Totally_Ordered_Sets_is_Total_Ordering). It says: “is a total ordering on S₁ × S₂”

**Sources:** none listed. No primary source with a working link was found.

### Well-ordering gives strong induction

**Remember:** Any failure would have a first failure.

*Rules out counterexamples.* MSC 06A05 (Total orders). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A well-order is a total order in which every nonempty subset has a least element, so any claim that fails somewhere has a first failure (our own).

**Problem.** A claim about natural numbers holds everywhere if its truth at all smaller numbers implies its truth at each number.

**How the definition helps.** At the first failure, all smaller numbers satisfy the claim, so the hypothesis forces the claim there, a contradiction (our own). On the integers, the claim that every integer is nonnegative meets the hypothesis, because every negative integer has a smaller negative one where the claim fails, yet it is false (our own).

**Wikipedia:** [Well-order](https://en.wikipedia.org/wiki/Well-order). It says: “the standard ordering ≤ of the integers is not a well ordering”

**Paper or page:** [Well-Ordered Induction](https://proofwiki.org/wiki/Well-Ordered_Induction). It says: “That is, if a property passes from the initial segment of x to x, then this property is true for all x ∈ A.”

**Sources:** none listed. No primary source with a working link was found.

### An order isomorphism carries least upper bounds to least upper bounds

**Remember:** If both directions preserve comparisons, both directions preserve bounds.

*Rules out counterexamples.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** An order isomorphism is a bijection f with x ≤ y exactly when f(x) ≤ f(y), so it matches the upper bounds of any set with the upper bounds of its image.

**Problem.** An order isomorphism preserves every least upper bound and greatest lower bound that exists.

**How the definition helps.** Because f and its inverse both preserve comparisons, the least upper bound goes to the least upper bound, and likewise for lower bounds (our own proof). An order-preserving bijection is not enough. Send the subsets of {1, 2} under inclusion to the same subsets in the total order ∅ &lt; {1} &lt; {2} &lt; {1, 2}; the join of {1} and {2} becomes {2} (our own counterexample).

**Paper or page:** [Order Isomorphism Preserves Infima and Suprema](https://proofwiki.org/wiki/Order_Isomorphism_Preserves_Infima_and_Suprema). It says: “Then f preserves infima and suprema.”

**Sources:** none listed. No primary source with a working link was found.

### Antisymmetry makes least elements unique

**Remember:** Two least elements each lie below the other.

*Rules out counterexamples.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A partial order is a reflexive, transitive relation that is antisymmetric: x ≤ y and y ≤ x force x = y.

**Problem.** Any subset of a partially ordered set has at most one least element.

**How the definition helps.** Two least elements each lie below the other, so antisymmetry makes them equal (our own). Divisibility on the integers is not antisymmetric, and both 1 and −1 are least there (our own).

**Wikipedia:** [Partially ordered set](https://en.wikipedia.org/wiki/Partially_ordered_set). It says: “i.e. no two distinct elements precede each other.”

**Paper or page:** [Smallest Element is Unique](https://proofwiki.org/wiki/Smallest_Element_is_Unique). It says: “If S has a smallest element, then it can have only one.”

**Sources:** none listed. No primary source with a working link was found.

### Longest chains ending at each point give Mirsky’s partition

**Remember:** Points of equal height are never comparable.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In a finite partially ordered set, the height of a point is the number of points in a longest chain, a set of pairwise comparable points, ending at it. Two points of equal height are incomparable, because the larger would extend the other's chain.

**Problem.** In a finite partially ordered set, the minimum number of antichains in a partition equals the largest chain size. An antichain is a set of pairwise incomparable points.

**How the definition helps.** Grouping points by height partitions the set into as many antichains as a longest chain has points. Each point of a longest chain needs its own antichain, so no partition uses fewer.

**Wikipedia:** [Mirsky's theorem](https://en.wikipedia.org/wiki/Mirsky%27s_theorem). It says: “consisting of elements that have equal values of N, is an antichain”

**Sources:**

- [Leon Mirsky, A Dual of Dilworth's Decomposition Theorem (1971)](https://doi.org/10.2307/2316481)

### Sets of predecessors turn every partial order into inclusion

**Remember:** Include the point so its down set remembers it.

*Rules out counterexamples.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The down set of x is the set of all y with y ≤ x, including x itself, so the down set remembers x.

**Problem.** Every partially ordered set can be represented by sets ordered by inclusion. The down set of x lies inside the down set of y exactly when x ≤ y.

**How the definition helps.** Since x lies in its own down set, inclusion of down sets gives x ≤ y, and x ≤ y puts everything below x below y (our own proof). With only strict predecessors, two distinct minimal points would both get the empty set (our own counterexample).

**nLab:** [lower set](https://ncatlab.org/nlab/show/lower+set). It says: “the down set of x is the lower set generated by x.”

**Sources:** none listed. No primary source with a working link was found.

### The order dual gives every order theorem a second theorem free

**Remember:** Reverse every comparison to turn an order theorem into its dual.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The dual of a partially ordered set P is the same set with every comparison reversed, and it is again a partially ordered set. The dual of a statement reverses every order relation and swaps each notion for its dual, such as join for meet.

**Problem.** If a statement holds for all partially ordered sets, then its dual statement also holds for all partially ordered sets. This is the duality principle.

**How the definition helps.** Apply the theorem to the dual of P. Read in P, its conclusion is the dual statement.

**Wikipedia:** [Duality (order theory)](https://en.wikipedia.org/wiki/Duality_%28order_theory%29). It says: “The importance of this simple definition stems from the fact that every definition and theorem of order theory can readily be transferred to the dual order.”

**Sources:** none listed. No primary source with a working link was found.

### Ties turn preorders into partial orders

**Remember:** Treat mutual comparisons as ties, then order the tie classes.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.LO. Level 1: early undergraduate.

**Definition.** From a preorder, a reflexive and transitive relation, put x and y in one class when x ≤ y and y ≤ x, and compare classes through their members.

**Problem.** The classes of a preorder under mutual comparison form a partially ordered set.

**How the definition helps.** Two classes that compare both ways have members that compare both ways, so they are one class; this is antisymmetry. Transitivity makes the comparison independent of the chosen members (our own). For divisibility on the integers, each class is an integer and its negative (our own).

**nLab:** [preorder](https://ncatlab.org/nlab/show/preorder). It says: “Then the quotient set P / ∼ is a poset.”

**Sources:** none listed. No primary source with a working link was found.

### Cover relations recover finite orders

**Remember:** In a finite order, every climb breaks into single steps.

*Rules out counterexamples.* MSC 06A07 (Combinatorics of partially ordered sets). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In a partially ordered set, y covers x when x &lt; y and nothing lies strictly between them. A Hasse diagram keeps only these cover steps.

**Problem.** In a finite partially ordered set, x &lt; y exactly when a path of one or more upward cover steps leads from x to y.

**How the definition helps.** If x &lt; y in a finite order, a minimal element above x and at most y covers x, and repeating this climbs to y in finitely many steps (our own). In the rational numbers there are no covers at all, so cover steps record nothing (our own).

**nLab:** [Hasse diagram](https://ncatlab.org/nlab/show/Hasse+diagram). It says: “its Hasse diagram encodes the minimal amount of information necessary to reproduce the ordering relation.”

**Wikipedia:** [Hasse diagram](https://en.wikipedia.org/wiki/Hasse_diagram). It says: “a type of mathematical diagram used to represent a finite partially ordered set”

**Sources:** none listed. No primary source with a working link was found.

### Defining transitive closure as the smallest transitive relation gives existence for free

**Remember:** Smallest by definition, chains by theorem.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 03E20. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** The transitive closure R⁺ of a relation R on S is the smallest transitive relation on S that contains R. It exists because an intersection of transitive relations is transitive, and S × S is one of them.

**Problem.** Every relation has a transitive closure, and it is the chain relation.

**How the definition helps.** The intersection of all transitive relations containing R contains R, is transitive and lies in each of them. Positive-length R-chains form a transitive relation containing R, because chains join end to end (our own proof). Induction on length puts every chain in each transitive relation containing R, so R⁺ is the chain relation.

**Paper or page:** [Equivalence of Definitions of Transitive Closure of Relation/Union of Compositions is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Union_of_Compositions_is_Smallest), [Equivalence of Definitions of Transitive Closure of Relation/Finite Chain is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Finite_Chain_is_Smallest). It says: “Then ℛ⁺ is the smallest transitive relation on S that contains ℛ.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Transitive Closure of Relation/Union of Compositions is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Union_of_Compositions_is_Smallest)
- [ProofWiki, Equivalence of Definitions of Transitive Closure of Relation/Finite Chain is Smallest](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Finite_Chain_is_Smallest)

### Absorption makes lattice orders agree

**Remember:** Absorption makes meet and join agree about which element is larger.

*Rules out counterexamples.* MSC 06B05 (Structure theory of lattices). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A lattice, defined algebraically, has two commutative, associative operations ∧ and ∨ with x ∧ x = x ∨ x = x. The absorption laws x ∧ (x ∨ y) = x and x ∨ (x ∧ y) = x link them. Absorption makes the tests x ∧ y = x and x ∨ y = y equivalent, so they define one order.

**Problem.** The two operations determine one order in which ∧ is greatest lower bound and ∨ is least upper bound.

**How the definition helps.** Absorption gives the equivalence of the two tests. Under this order, the operation laws make ∧ the greatest lower bound and ∨ the least upper bound. If both operations take the minimum on {0, 1}, absorption fails and the two tests give opposite orders (our own counterexample).

**nLab:** [lattice](https://ncatlab.org/nlab/show/lattice). It says: “Notice that the absorption laws guarantee that these two descriptions of ≤ agree.”

**Paper or page:** [Structure with Commutative Idempotent Associative Operations satisfying Absorption Laws is Lattice](https://proofwiki.org/wiki/Structure_with_Commutative_Idempotent_Associative_Operations_satisfying_Absorption_Laws_is_Lattice). It says: “Then there exists a unique lattice ordering ≼ on S such that”

**Sources:** none listed. No primary source with a working link was found.

### Closure under the original operations makes sublattices inherit distributivity

**Remember:** Keep the same operations to keep their laws.

*Rules out counterexamples.* MSC 06B05 (Structure theory of lattices). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A sublattice of a lattice is a nonempty subset that contains the original meet and the original join of each pair of its elements, so it computes with the same operations.

**Problem.** Every sublattice of a distributive lattice is distributive. That is, x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z) still holds in it.

**How the definition helps.** Both sides of the law are computed with the same operations, so they keep their values (our own proof). A subset that is a lattice in the inherited order need not do this: among the subsets of {1, 2, 3}, keep ∅, the singletons and {1, 2, 3}. Two singletons now join to {1, 2, 3}, so meeting with the third gives it, while distributing gives ∅ (our own counterexample).

**Wikipedia:** [Lattice (order)](https://en.wikipedia.org/wiki/Lattice_%28order%29). It says: “a subset of L that is a lattice with the same meet and join operations as L.”

**Sources:** none listed. No primary source with a working link was found.

### Product order gives joins and meets coordinate by coordinate

**Remember:** Use the least bound in each coordinate.

*True by definition.* MSC 06B05 (Structure theory of lattices). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The product of two lattices orders pairs coordinate by coordinate, so a pair bounds two pairs exactly when each coordinate bounds theirs. Its join and meet therefore act in each coordinate.

**Problem.** These operations make the product a lattice whose order compares pairs coordinate by coordinate.

**How the definition helps.** The upper bounds of two pairs are the pairs whose coordinates are upper bounds, so the least one takes the join in each coordinate (our own proof). Reversing the comparisons gives the meet.

**Wikipedia:** [Product order](https://en.wikipedia.org/wiki/Product_order). It says: “i• ≤ j• if and only if iₐ ≤ jₐ for every a ∈ A.”

**Paper or page:** [Simple Order Product of Pair of Ordered Sets is Lattice iff Factors are Lattices](https://proofwiki.org/wiki/Simple_Order_Product_of_Pair_of_Ordered_Sets_is_Lattice_iff_Factors_are_Lattices). It says: “denote the simple (order) product of S₁ and S₂.”

**Sources:** none listed. No primary source with a working link was found.

### The join test makes lattice homomorphisms preserve order

**Remember:** Preserve the join equation and you preserve the order.

*True by definition.* MSC 06B05 (Structure theory of lattices). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In a lattice, x ≤ y holds exactly when x ∨ y = y, because the least upper bound of x and y is y precisely when x lies below y. So the order is an equation in the join.

**Problem.** A map between lattices that sends each join to the join of the two images preserves order.

**How the definition helps.** A map that preserves joins sends the equation x ∨ y = y to f(x) ∨ f(y) = f(y), which says f(x) ≤ f(y) (our own argument).

**Paper or page:** [Semilattice Homomorphism is Order-Preserving](https://proofwiki.org/wiki/Semilattice_Homomorphism_is_Order-Preserving). It says: “is order-preserving.”

**Sources:** none listed. No primary source with a working link was found.

### Dedekind completeness is exactly what makes closed bounded sets compact

**Remember:** Bounded nonempty sets have suprema, so the order has no gaps.

*Rules out counterexamples.* MSC 06A05 (Total orders), 06B23, 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A linearly ordered space is a totally ordered set with the order topology, generated by open rays. It is Dedekind complete when every nonempty subset that is bounded above has a least upper bound, so the order has no gaps.

**Problem.** In a linearly ordered space, every closed and bounded subset is compact exactly when the order is Dedekind complete.

**How the definition helps.** At a gap, open rays can approach from both sides and cover a closed bounded set with no finite subcover; completeness removes such gaps. The ordered-space Heine–Borel theorem supplies the equivalence. In ℚ, rays ending short of √2 on either side cover the closed interval \[0, 2\] with no finite subcover (our own example).

**Paper or page:** [Heine-Borel iff Dedekind Complete](https://proofwiki.org/wiki/Heine-Borel_iff_Dedekind_Complete). It says: “every closed, bounded subset of X is compact.”

**Sources:**

- [ProofWiki, Heine-Borel iff Dedekind Complete](https://proofwiki.org/wiki/Heine-Borel_iff_Dedekind_Complete)

### Dedekind completeness skips the empty set, whose supremum is a least element

**Remember:** The supremum of nothing is the bottom, and ℝ has no bottom.

*Rules out counterexamples.* MSC 06A05 (Total orders), 06B23. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** An ordered set is Dedekind complete when every nonempty subset that is bounded above has a supremum. The empty set is skipped on purpose: every element bounds it above, so its supremum would be a least element.

**Problem.** In an ordered set S, every element is an upper bound of the empty set, so sup ∅ exists exactly when S has a least element. Hence ℝ, which has no least element, is Dedekind complete only because the definition skips the empty set.

**How the definition helps.** Every element bounds ∅ above, so sup ∅ is the least element of the whole order, and a least element is such a supremum. ℝ has no least element, so a definition that included ∅ would exclude ℝ (our own example).

**Paper or page:** [Infimum of Empty Set is Greatest Element](https://proofwiki.org/wiki/Infimum_of_Empty_Set_is_Greatest_Element), [Supremum of Empty Set is Smallest Element](https://proofwiki.org/wiki/Supremum_of_Empty_Set_is_Smallest_Element), [Dedekind Completeness is Self-Dual](https://proofwiki.org/wiki/Dedekind_Completeness_is_Self-Dual), [Dedekind-Complete Bounded Ordered Set is Complete Lattice](https://proofwiki.org/wiki/Dedekind-Complete_Bounded_Ordered_Set_is_Complete_Lattice). It says: “Suppose that inf ∅, the infimum of the empty set, exists in S. Then ∀s ∈ S: s ⪯ inf ∅. That is, inf ∅ is the greatest element of S.”

**Sources:**

- [ProofWiki, Infimum of Empty Set is Greatest Element](https://proofwiki.org/wiki/Infimum_of_Empty_Set_is_Greatest_Element)
- [ProofWiki, Supremum of Empty Set is Smallest Element](https://proofwiki.org/wiki/Supremum_of_Empty_Set_is_Smallest_Element)
- [ProofWiki, Dedekind Completeness is Self-Dual](https://proofwiki.org/wiki/Dedekind_Completeness_is_Self-Dual)
- [ProofWiki, Dedekind-Complete Bounded Ordered Set is Complete Lattice](https://proofwiki.org/wiki/Dedekind-Complete_Bounded_Ordered_Set_is_Complete_Lattice)

### Excluding endpoints makes every countable dense order isomorphic to the rationals

**Remember:** Room between any two points, and room past both ends.

*Rules out counterexamples.* MSC 06A05 (Total orders), 03C15, 03C35. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A linear order is dense when every x &lt; y has some z with x &lt; z &lt; y, and has no endpoints when it has no least and no greatest element. Together these give room above, below and between any finitely many points.

**Problem.** Every nonempty countable dense linear order without endpoints is isomorphic to the rational numbers. In model theory, the theory of such orders has exactly one countable model.

**How the definition helps.** Back and forth between two such countable orders can always place the next element, because there is always room on the other side. The rationals in \[0, 1\] and in \[0, 1) are countable and dense but have endpoints, so neither is isomorphic to ℚ (our own example). The word nonempty excludes the empty order, which is vacuously dense and without endpoints.

**Wikipedia:** [Cantor's isomorphism theorem](https://en.wikipedia.org/wiki/Cantor%27s_isomorphism_theorem). It says: “Cantor's isomorphism theorem states that every two nonempty countable dense unbounded linear orders are order-isomorphic.”

**Sources:**

- [Cantor, G. (1895). Beiträge zur Begründung der transfiniten Mengenlehre. Mathematische Annalen 46, 481–512.](https://doi.org/10.1007/BF02124929)

### Two copies of the order turn Dilworth into matching

**Remember:** Matched links build chains and uncovered points build an antichain.

*True by definition.* MSC 06A06 (Partial orders, general). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Build a bipartite graph with a left and a right copy of each point, and join left x to right y exactly when x &lt; y. A matching, a set of edges with no shared ends, then links points into chains, each edge saying that y follows x.

**Problem.** In a finite partially ordered set, the largest number of pairwise incomparable points equals the fewest chains needed to partition the set. In a chain, every pair is comparable.

**How the definition helps.** A matching with m edges links the n points into n − m chains, counting single points (our own argument). By König’s theorem a maximum matching has a cover of m vertices, and at least n − m points have neither copy in it, so they are pairwise incomparable. Each chain holds at most one point of an antichain, which gives the reverse bound.

**Wikipedia:** [Dilworth's theorem](https://en.wikipedia.org/wiki/Dilworth%27s_theorem). It says: “each edge in the graph contains at least one vertex in C and such that M and C have the same cardinality m”

**Paper or page:** [Dilworth's Theorem](https://proofwiki.org/wiki/Dilworth's_Theorem). It says: “the maximal size of an antichain is equal to the minimal number of pairwise disjoint chains”

**Sources:**

- [Robert P. Dilworth, A Decomposition Theorem for Partially Ordered Sets (1950)](https://doi.org/10.2307/1969503)
- [D. R. Fulkerson, Note on Dilworth's Decomposition Theorem for Partially Ordered Sets (1956)](https://doi.org/10.2307/2033375)

### Möbius functions of posets unify inclusion–exclusion

**Remember:** The Möbius function undoes summing over everything below.

*Makes the theorem clean to state or prove.* MSC 06A07 (Combinatorics of partially ordered sets), 06A11. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a locally finite poset, multiply functions on intervals by (f ∗ g)(x, y) = ∑ f(x, z)g(z, y) over x ≤ z ≤ y. The Möbius function μ is the inverse of the zeta function ζ, which is 1 on every interval, so summing over x ≤ y and weighting by μ undo each other.

**Problem.** Suppose each element has finitely many predecessors, including itself. Then g(y) = ∑ f(x) for every y exactly when f(y) = ∑ μ(x, y)g(x) for every y, summing over x ≤ y throughout. Inclusion–exclusion, classical Möbius inversion and finite difference calculus are special cases.

**How the definition helps.** Summing over x ≤ y is convolution with ζ, so inverting it is convolution with μ. For finite subsets under inclusion, μ(S, T) = (−1)ᵏ with k the size of T ∖ S, and inversion is inclusion–exclusion. For divisibility μ is the classical Möbius function, and for the natural numbers in their usual order inversion is the backward difference.

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “whenever S and T are finite subsets of E with S ⊆ T, and Möbius inversion is called the principle of inclusion-exclusion.”

**Sources:**

- [Gian-Carlo Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Zeitschrift für Wahrscheinlichkeitstheorie und Verwandte Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Defining floor by a Galois connection gives its rules by reasoning

**Remember:** An integer lies below ⌊x⌋ exactly when it lies below x.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.CO, math.CT. Level 2: later undergraduate.

**Definition.** The floor of a real number x is the integer ⌊x⌋ with the same integer lower bounds as x: m ≤ ⌊x⌋ exactly when m ≤ x, for every integer m. This makes floor the upper adjoint of the inclusion of integers into reals.

**Problem.** For every real x and integer n, ⌊x + n⌋ = ⌊x⌋ + n.

**How the definition helps.** Shifting by an integer n shifts the integer lower bounds: m ≤ ⌊x + n⌋ exactly when m − n ≤ x, exactly when m − n ≤ ⌊x⌋ (our own proof). So ⌊x + n⌋ and ⌊x⌋ + n have the same integer lower bounds and are equal.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “The well-known properties of the floor function, such as ⌊x+n⌋=⌊x⌋+n, can be derived by elementary reasoning from this Galois connection.”

**Sources:**

- [Ore, O. (1944). Galois connexions. Transactions of the American Mathematical Society 55, 493–513.](https://doi.org/10.2307/1990305)

### Galois connections give the shape of every correspondence theorem

**Remember:** On closed elements, a Galois connection is a perfect correspondence.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 18A40. arXiv math.CT, math.RA. Level 2: later undergraduate.

**Definition.** A Galois connection between posets P and Q is a pair of order-reversing maps f : P → Q and g : Q → P with p ≤ g(q) exactly when q ≤ f(p). Its closed elements are those fixed by g∘f in P or by f∘g in Q, and f and g always take closed values, since f∘g∘f = f and g∘f∘g = g.

**Problem.** For every Galois connection, f and g restrict to inverse order-reversing bijections between the closed elements of P and of Q. The fundamental theorem of Galois theory and the correspondence between radical ideals and Zariski-closed sets are instances.

**How the definition helps.** Since every value of f or g is closed, on closed elements f and g undo each other, and both reverse order. For a finite Galois extension, the fundamental theorem of Galois theory says every subgroup and every intermediate field is closed (our own example). Over an algebraically closed field, the strong Nullstellensatz identifies the closed ideals as the radical ideals (our own example).

**nLab:** [Galois connection](https://ncatlab.org/nlab/show/Galois+connection), [Galois theory](https://ncatlab.org/nlab/show/Galois+theory), [Zariski topology](https://ncatlab.org/nlab/show/Zariski+topology). It says: “others reserve it for its restriction to its fixed points, where it becomes an adjoint equivalence.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society 55 (1944) 493–513](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### Joining candidate inputs constructs a right adjoint

**Remember:** If a join preserves the test, take the join of all candidates.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Let f map a complete lattice, where every subset has a join, to a partially ordered set, and define g(y) as the join of all inputs x with f(x) ≤ y. When f preserves joins, g(y) is itself such an input, and so the greatest one.

**Problem.** If f preserves all joins, including the empty join, then g is right adjoint to f. This means f(x) ≤ y exactly when x ≤ g(y).

**How the definition helps.** If f preserves joins, f(g(y)) is the join of images that all lie below y, so f(g(y)) ≤ y (our own proof). Then x ≤ g(y) gives f(x) ≤ f(g(y)) ≤ y, since preserving joins implies preserving order. Conversely, every x with f(x) ≤ y lies below g(y) by construction.

**Paper or page:** [All Suprema Preserving Mapping is Lower Adjoint of Galois Connection](https://proofwiki.org/wiki/All_Suprema_Preserving_Mapping_is_Lower_Adjoint_of_Galois_Connection). It says: “Let d: T → S be all suprema preserving mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Lower adjoints of Galois connections preserve all existing joins

**Remember:** Move the lower adjoint across the comparison to get the upper adjoint.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.CO, math.CT. Level 2: later undergraduate.

**Definition.** Maps F from a poset A to a poset B and G back are adjoint when F(a) ≤ b exactly when a ≤ G(b), for all a and b. So F can move across a comparison: b bounds F(a) above exactly when G(b) bounds a above. F is the lower adjoint and G the upper adjoint.

**Problem.** A lower adjoint preserves every join that exists: F(sup S) = sup of the F(s) for s in S. For example, the image map of a function preserves unions.

**How the definition helps.** F(sup S) ≤ b exactly when sup S ≤ G(b), so exactly when every s ≤ G(b), so exactly when every F(s) ≤ b (our own proof). So F(sup S) is the least upper bound of the F(s). Direct image is left adjoint to preimage, so it preserves unions (our own example).

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection), [Complete lattice](https://en.wikipedia.org/wiki/Complete_lattice). It says: “Another important property of Galois connections is that lower adjoints preserve all suprema that exist within their domain.”

**Sources:**

- [Ore, O. (1944). Galois connexions. Transactions of the American Mathematical Society 55, 493–513.](https://doi.org/10.2307/1990305)

### The greatest admissible input makes the right adjoint unique

**Remember:** A greatest admissible input leaves no room for a second adjoint.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A right adjoint of an order-preserving map f is a map g with f(x) ≤ y exactly when x ≤ g(y). Then g(y) must be the greatest x with f(x) ≤ y, so f determines g.

**Problem.** An order-preserving map between partially ordered sets has at most one right adjoint.

**How the definition helps.** The inputs x with f(x) ≤ y are exactly those below g(y), so g(y) is their greatest element (our own proof). A greatest element is unique, so two right adjoints agree at every y.

**Paper or page:** [Galois Connection is Unique for Given Lower Adjoint](https://proofwiki.org/wiki/Galois_Connection_is_Unique_for_Given_Lower_Adjoint). It says: “is the unique Galois connection such that d is the lower adjoint”

**Sources:** none listed. No primary source with a working link was found.

### Taking the diamond isomorphism as the definition of a modular lattice

**Remember:** Opposite sides of every lattice diamond match exactly.

*True by definition. Confidence: medium.* MSC 06B05 (Structure theory of lattices), 06A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A lattice is modular when, for every pair a, b, the intervals \[a, a ∨ b\] and \[a ∧ b, b\] are matched by inverse maps. The map z ↦ z ∧ b goes down, and w ↦ a ∨ w comes back.

**Problem.** A lattice is modular exactly when its order dual is modular.

**How the definition helps.** Reversing the order and swapping a with b exchanges the two intervals and the two maps, and inverse maps stay inverse (our own proof). This interval definition is equivalent to the usual modular law.

**nLab:** [modular lattice](https://ncatlab.org/nlab/show/modular+lattice). It says: “This is perhaps the most memorable definition for a category theorist: it is a precise expression of the slogan given in the Idea section.”

**Sources:**

- [Richard Dedekind, Ueber die von drei Moduln erzeugte Dualgruppe, Mathematische Annalen 53 (1900) 371–403](https://doi.org/10.1007/BF01448979)

### Asking for all joins gives all meets of a complete lattice

**Remember:** The meet of a set is the join of its lower bounds.

*True by definition.* MSC 06B23 (Complete lattices, completions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A complete lattice is a partially ordered set in which every subset, ∅ included, has both a join and a meet. The meet of a set is always the join of its lower bounds, whenever that join exists.

**Problem.** A partially ordered set in which every subset has a join is a complete lattice. Every subset then also has a meet.

**How the definition helps.** Each member of X bounds the lower bounds of X above, so their join lies below each member of X. So that join is itself a lower bound, the greatest one, even when X is empty.

**Wikipedia:** [Completeness (order theory)](https://en.wikipedia.org/wiki/Completeness_%28order_theory%29), [Complete lattice](https://en.wikipedia.org/wiki/Complete_lattice). It says: “The best-known example is the existence of all suprema, which is in fact equivalent to the existence of all infima.”

**Sources:** none listed. No primary source with a working link was found.

### In a complete lattice every order-preserving map has a fixed point

**Remember:** Take the supremum of all points that f pushes upward.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 47H10. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** A complete lattice is a partially ordered set in which every subset, the empty set included, has a supremum and an infimum. So for any map f, the supremum of all x with x ≤ f(x) exists.

**Problem.** Every order-preserving map f from a complete lattice to itself, one where x ≤ y implies f(x) ≤ f(y), has a fixed point. It even has a least and a greatest fixed point.

**How the definition helps.** Let u be the supremum of all x with x ≤ f(x); each such x gives x ≤ f(x) ≤ f(u), so u ≤ f(u). Then f(u) is also such an x, so f(u) ≤ u, and u is the greatest fixed point, as in Tarski’s fixed-point theorem. The dual construction gives the least fixed point (our own explanation).

**Wikipedia:** [Knaster–Tarski theorem](https://en.wikipedia.org/wiki/Knaster%E2%80%93Tarski_theorem). It says: “If every order-preserving function f : L → L on a lattice L has a fixed point, then L is a complete lattice.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications, Pacific Journal of Mathematics 5 (1955)](https://doi.org/10.2140/pjm.1955.5.285)
- [Anne C. Davis, A characterization of complete lattices, Pacific Journal of Mathematics 5 (1955)](https://doi.org/10.2140/pjm.1955.5.311)

### Restricting to an interval gives joins of fixed points

**Remember:** Find the least fixed point above all the given ones.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 06B05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** For an order-preserving f on a complete lattice and a set S of fixed points, the upper bounds of S form the interval from the join of S to the top. The map f sends this interval into itself, and the interval is again a complete lattice.

**Problem.** The fixed points of an order-preserving map from a complete lattice to itself form a complete lattice. The join of any set of fixed points is the least fixed point in its interval of upper bounds.

**How the definition helps.** If x bounds S above, then f(x) ≥ f(s) = s for every s in S, so f keeps the interval (our own proof). The least-fixed-point theorem on this interval gives the least fixed point above S, which is the join of S among fixed points. Reversing the order gives meets.

**Paper or page:** [Knaster-Tarski Theorem](https://proofwiki.org/wiki/Knaster-Tarski_Theorem). It says: “Then ⟨F, ≼⟩ is a complete lattice.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications (1955)](https://doi.org/10.2140/pjm.1955.5.285)

### The meet definition makes least-fixed-point induction immediate

**Remember:** The meet of all candidates lies below each one.

*True by definition.* MSC 06B23 (Complete lattices, completions), 03B70. arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** Let f preserve order on a complete lattice, one where every subset has a meet and a join. A prefixed point is an x with f(x) ≤ x, and μf is the meet of all prefixed points, so μf lies below each of them.

**Problem.** μf is the least fixed point of f. Moreover, Park induction holds: if f(x) ≤ x, then μf ≤ x.

**How the definition helps.** Park induction is exactly the fact that μf lies below each prefixed point. Monotonicity gives f(μf) ≤ f(x) ≤ x for every prefixed x, so f(μf) ≤ μf, and then f(μf) is prefixed, so μf ≤ f(μf). Thus μf is fixed, and it lies below every fixed point, since fixed points are prefixed (our own proof).

**Wikipedia:** [Knaster–Tarski theorem](https://en.wikipedia.org/wiki/Knaster%E2%80%93Tarski_theorem). It says: “⋀P = ⋀{ x ∈ L ∣ x ≥ f(x) } as the least fixpoint of f.”

**Sources:**

- [Alfred Tarski, A lattice-theoretical fixpoint theorem and its applications, Pacific Journal of Mathematics (1955)](https://doi.org/10.2140/pjm.1955.5.285)

### Subspace sum turns the modular law into one subtraction

**Remember:** Subtract the part already inside to see that the rest lies inside.

*True by definition.* MSC 06C05 (Modular lattices, Desarguesian lattices), 06B05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In the lattice of subspaces, the join of A and B is the sum A + B of all a + b with a ∈ A and b ∈ B. The meet is A ∩ B. Because the join consists of explicit sums, the part a can be subtracted from a + b.

**Problem.** The subspaces of any vector space form a modular lattice. If A ⊆ C, then (A + B) ∩ C = A + (B ∩ C).

**How the definition helps.** If a + b lies in C and A ⊆ C, then b = (a + b) − a lies in C, so b ∈ B ∩ C (our own proof). Conversely, an element of A plus an element of B ∩ C lies in both A + B and C.

**nLab:** [modular lattice](https://ncatlab.org/nlab/show/modular+lattice). It says: “equivalence relations correspond to subspaces of V, and form a modular lattice.”

**Wikipedia:** [Modular lattice](https://en.wikipedia.org/wiki/Modular_lattice). It says: “form a modular lattice.”

**Sources:** none listed. No primary source with a working link was found.

### Distributivity implies modularity by substitution

**Remember:** Distribute first, then absorb the smaller element.

*True by definition. Confidence: medium.* MSC 06D05 (Structure and representation theory of distributive lattices), 01A60. arXiv math.CO, math.HO. Level 2: later undergraduate.

**Definition.** A lattice is distributive when x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z) for all x, y, z, together with the dual law that exchanges ∧ and ∨.

**Problem.** Every distributive lattice is modular. If a ≤ b, then (a ∨ z) ∧ b = a ∨ (z ∧ b).

**How the definition helps.** Distributing gives (a ∨ z) ∧ b = (a ∧ b) ∨ (z ∧ b), and a ≤ b makes a ∧ b = a (our own calculation). Birkhoff’s description, with no diamond or pentagon sublattice, would instead put the work into Birkhoff’s equivalence.

**nLab:** [distributive lattice](https://ncatlab.org/nlab/show/distributive+lattice), [modular lattice](https://ncatlab.org/nlab/show/modular+lattice). It says: “A lattice L is distributive if and only if there is no embedding of N₅ or M₃ into L that preserves binary meets and binary joins.”

**Paper or page:** [On complemented, uniquely complemented and uniquely complemented nondistributive lattices (a historical and epistemological note about a mathematical mystery)](https://arxiv.org/abs/2308.04506). It says: “Any distributive lattice is modular.”

**Sources:** none listed. No primary source with a working link was found.

### Distributivity turns a join inequality into the equation irreducibility needs

**Remember:** Meet with the element to turn the inequality into a join equation.

*Rules out counterexamples.* MSC 06D05 (Structure and representation theory of distributive lattices), 06B05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Take an element p above the bottom of a lattice. It is join-prime if p ≤ a ∨ b forces p ≤ a or p ≤ b, and join-irreducible if p = a ∨ b forces p = a or p = b.

**Problem.** In a distributive lattice with a bottom element, each element strictly above the bottom is join-prime if and only if it is join-irreducible.

**How the definition helps.** Distributivity rewrites p ≤ a ∨ b as p = (p ∧ a) ∨ (p ∧ b), so irreducibility gives p ≤ a or p ≤ b (our own proof). Conversely, a join-prime p = a ∨ b lies below a or b and above both, so it equals one. In the five-element diamond, each middle point is irreducible but lies below the join of the other two without lying below either (our own example).

**Paper or page:** [Join Prime Element iff Join Irreducible in Distributive Lattice](https://proofwiki.org/wiki/Join_Prime_Element_iff_Join_Irreducible_in_Distributive_Lattice). It says: “z is join-prime”

**Sources:** none listed. No primary source with a working link was found.

### The bottom element is not join-irreducible, so Birkhoff's representation is exact

**Remember:** The bottom is the empty join, as 1 is the empty product.

*Rules out counterexamples.* MSC 06D05 (Structure and representation theory of distributive lattices), 06B15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** An element of a lattice is join-irreducible when it is not the join of a finite set of other elements. The bottom is the join of the empty set, so it is excluded, just as 1 is not a prime.

**Problem.** Every finite distributive lattice is isomorphic to the lattice of lower sets, sets closed downward, of its join-irreducible elements. The bottom of the lattice matches the empty lower set.

**How the definition helps.** Send each element to the set of join-irreducibles below it, which has that element as its join. Distributivity makes join-irreducibles join-prime, so a lower set is recovered from its join (our own argument). If the bottom counted, ∅ and the set holding only the bottom would have the same join (our own example).

**Wikipedia:** [Birkhoff's representation theorem](https://en.wikipedia.org/wiki/Birkhoff%27s_representation_theorem). It says: “Equivalently, x is join-irreducible if it is neither the bottom element of the lattice (the join of zero elements) nor the join of any two smaller elements.”

**Sources:**

- [G. Birkhoff, Rings of sets, Duke Mathematical Journal 3 (1937) 443–454](https://doi.org/10.1215/S0012-7094-37-00334-X)

### The median identity makes distributivity visibly self-dual

**Remember:** Swapping meet and join only exchanges the two sides.

*True by definition.* MSC 06D05 (Structure and representation theory of distributive lattices). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A lattice satisfies the median form of distributivity if (a∧b)∨(a∧c)∨(b∧c) = (a∨b)∧(a∨c)∧(b∨c) for all a, b, c. Exchanging ∧ and ∨ turns this identity into itself with its two sides swapped.

**Problem.** The order dual of a distributive lattice is distributive. Its order is reversed, so meet and join exchange roles.

**How the definition helps.** The dual lattice exchanges meet and join, so it satisfies the same identity. The work lies in the known equivalence of the median identity with the usual distributive law.

**nLab:** [distributive lattice](https://ncatlab.org/nlab/show/distributive+lattice). It says: “A lattice is distributive if and only if the identity (a ∧ b) ∨ (a ∧ c) ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c) ∧ (b ∨ c) is satisfied.”

**Wikipedia:** [Distributive lattice](https://en.wikipedia.org/wiki/Distributive_lattice). It says: “It is a basic fact of lattice theory that the above condition is equivalent to its dual”

**Sources:** none listed. No primary source with a working link was found.

### Atoms exclude zero, so finite Boolean algebras are power sets

**Remember:** Atoms play the part of singletons, and the empty set is no singleton.

*Rules out counterexamples. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras), 06B05. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** In a partially ordered set with least element 0, an atom is an element a &gt; 0 with nothing strictly between 0 and a. Atoms play the part of singletons, and 0, like the empty set, is not one.

**Problem.** Every finite Boolean algebra is isomorphic to the power set of its set of atoms. So the number of elements of a finite Boolean algebra is a power of two.

**How the definition helps.** Send each element to the set of atoms below it; excluding 0 makes the bottom go to the empty set (our own proof). Every element is the join of its atoms, since a nonzero remainder above that join would lie above another atom. Distinct atoms meet at 0, so distributivity recovers exactly the chosen atoms from their join.

**Wikipedia:** [Atom (order theory)](https://en.wikipedia.org/wiki/Atom_%28order_theory%29), [Boolean algebra (structure)](https://en.wikipedia.org/wiki/Boolean_algebra_%28structure%29). It says: “It can be shown that every finite Boolean algebra is isomorphic to the Boolean algebra of all subsets of a finite set.”

**Sources:**

- [Stone, M. H. (1936). The theory of representation for Boolean algebras. Transactions of the American Mathematical Society 40, 37–111.](https://doi.org/10.2307/1989664)

### Boolean complements make every proper prime filter maximal

**Remember:** A prime filter picks x or ¬x, leaving no room to grow.

*Rules out counterexamples.* MSC 06E05 (Structure theory of Boolean algebras). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A proper filter is an upward-closed set, closed under pairwise meets, that contains 1 but not 0. It is prime if it contains x or y whenever it contains x ∨ y, so it contains x or ¬x for every x, since x ∨ ¬x = 1.

**Problem.** Every proper prime filter in a Boolean algebra is an ultrafilter, a maximal proper filter.

**How the definition helps.** A prime filter already holds x or ¬x for every x, so any larger filter holds both some x and ¬x, hence their meet 0 (our own proof). In the chain 0 &lt; a &lt; 1, where a has no complement, the prime filter {1} lies inside the proper filter {a, 1} (our own counterexample).

**Paper or page:** [Proper and Prime iff Ultrafilter in Boolean Lattice](https://proofwiki.org/wiki/Proper_and_Prime_iff_Ultrafilter_in_Boolean_Lattice). It says: “F is a proper subset of S and F is a prime filter in B”

**Sources:** none listed. No primary source with a working link was found.

### Clipping the complement to an interval keeps the interval Boolean

**Remember:** Push the complement up to a, then cut it down to b.

*True by definition.* MSC 06E05 (Structure theory of Boolean algebras). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In a Boolean algebra, the relative complement of x in the interval \[a, b\] is a ∨ (b ∧ ¬x). It is the old complement, pushed up to at least a and cut down to at most b.

**Problem.** Every closed interval \[a, b\] with a ≤ b in a Boolean algebra is a Boolean algebra with bottom a and top b.

**How the definition helps.** The relative complement meets x in a and joins x in b, so every element of \[a, b\] has a complement inside it. Our own calculation uses distributivity and a ≤ x ≤ b, and the interval keeps the original meet, join and distributive laws.

**Wikipedia:** [Inclusion (Boolean algebra)](https://en.wikipedia.org/wiki/Inclusion_%28Boolean_algebra%29). It says: “A Boolean algebra whose carrier set is restricted to the elements in an interval is itself a Boolean algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Distributivity makes complements unique, so negation is an operation

**Remember:** A complement meets its partner at zero and joins it at one.

*Rules out counterexamples.* MSC 06E05 (Structure theory of Boolean algebras), 06B05. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** A complement of an element a in a lattice with least element 0 and greatest element 1 is an element b with a ∧ b = 0 and a ∨ b = 1. In a distributive lattice, meet distributes over join, so a complement b can be split along a ∨ c = 1.

**Problem.** In a bounded distributive lattice, each element has at most one complement. So in a Boolean algebra, complementation is a well-defined operation.

**How the definition helps.** If b and c both complement a, distributivity gives b = b ∧ (a ∨ c) = (b ∧ a) ∨ (b ∧ c) = b ∧ c (our own calculation). So b ≤ c, and by symmetry c ≤ b. In the nondistributive diamond M₃, each middle element has two complements (our own counterexample).

**Wikipedia:** [Complemented lattice](https://en.wikipedia.org/wiki/Complemented_lattice). It says: “In bounded distributive lattices, complements are unique.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal proper filters give the ultrafilter extension theorem

**Remember:** An ultrafilter is a proper filter with no room left to grow.

*True by definition.* MSC 06E05 (Structure theory of Boolean algebras), 03E25. arXiv math.LO. Level 2: later undergraduate.

**Definition.** An ultrafilter is a proper filter, an upward-closed set closed under pairwise meets that contains 1 but not 0, that no larger proper filter contains.

**Problem.** With the axiom of choice, every proper filter in a Boolean algebra lies inside an ultrafilter.

**How the definition helps.** Maximality is exactly what Zorn’s lemma gives when applied to the proper filters that contain the given filter (our own proof). The union of a nonempty chain of proper filters is a proper filter, because none contains 0. The given filter bounds the empty chain.

**Paper or page:** [Proper Filter is Included in Ultrafilter in Boolean Lattice](https://proofwiki.org/wiki/Proper_Filter_is_Included_in_Ultrafilter_in_Boolean_Lattice). It says: “Then there exists ultrafilter G on L”

**Sources:** none listed. No primary source with a working link was found.

### Order reversal makes De Morgan’s laws hold for every existing bound

**Remember:** Turn the order upside down, and joins become meets.

*True by definition. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras). arXiv math.LO. Level 2: later undergraduate.

**Definition.** An order-reversing involution is a map ¬ with x ≤ y exactly when ¬y ≤ ¬x, and with ¬¬x = x. It turns the order upside down, so it swaps the upper bounds of a family with the lower bounds of its image. Boolean complementation is such a map.

**Problem.** Boolean complementation sends any existing join to the meet of the complements. It likewise sends any existing meet to the join of the complements.

**How the definition helps.** Such a map sends the upper bounds of a family one-to-one onto the lower bounds of the complements, so the least upper bound goes to the greatest lower bound (our own proof). The same holds with meets and joins exchanged. The Boolean work is checking that complementation reverses order and that ¬¬x = x.

**Paper or page:** [De Morgan's Laws (Boolean Algebras)](https://proofwiki.org/wiki/De_Morgan's_Laws_(Boolean_Algebras)). It says: “¬(a ∨ b) = ¬a ∧ ¬b”

**Sources:** none listed. No primary source with a working link was found.

### Truth tables count the elements of finitely generated free Boolean algebras

**Remember:** Count the truth tables, one output bit for each input tuple.

*True by definition. Confidence: medium.* MSC 06E05 (Structure theory of Boolean algebras), 03G05. arXiv math.LO, math.RA. Level 2: later undergraduate.

**Definition.** For finite n, the free Boolean algebra on n generators is the algebra of all truth tables, the functions from {0,1}ⁿ to {0,1}, with pointwise operations and the n coordinate projections as generators.

**Problem.** For every nonnegative integer n, the free Boolean algebra on n generators has 2 raised to the power 2ⁿ elements.

**How the definition helps.** A truth table chooses one output bit freely for each of the 2ⁿ inputs, which gives 2 to the power 2ⁿ tables. The work is proving that this algebra is free, by disjunctive normal form, which writes each Boolean expression as the join of the rows where it equals 1 (our own proof).

**Wikipedia:** [Free Boolean algebra](https://en.wikipedia.org/wiki/Free_Boolean_algebra). It says: “Another way to see why the free Boolean algebra on an n-element set has 2<sup>2<sup>n</sup></sup> elements is to note that each element is a function from n bits to one.”

**Sources:** none listed. No primary source with a working link was found.

### Complementary basic open sets separate ultrafilters

**Remember:** Different ultrafilters choose different sides of some complement pair.

*True by definition.* MSC 06E15 (Stone spaces (Boolean spaces) and related structures), 06E05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In the Stone space of a Boolean algebra, the points are the ultrafilters, the filters that contain exactly one of each element a and its complement ¬a. The basic open set U(a) consists of the ultrafilters containing a, so U(a) and U(¬a) are disjoint.

**Problem.** The Stone space is Hausdorff, so two distinct points have disjoint open neighborhoods.

**How the definition helps.** Two distinct ultrafilters differ on some element a, so one lies in U(a) and the other in U(¬a), which are disjoint (our own proof). The algebraic work is showing that this complement test describes exactly the maximal proper filters.

**Paper or page:** [Stone Space of Boolean Lattice is Hausdorff](https://proofwiki.org/wiki/Stone_Space_of_Boolean_Lattice_is_Hausdorff). It says: “is a Hausdorff space.”

**Sources:**

- [Marshall H. Stone, The theory of representations for Boolean algebras (1936)](https://doi.org/10.1090/S0002-9947-1936-1501865-8)

### Boolean joins combine finitely many ring generators into one

**Remember:** Join the generators to get one generator.

*True by definition.* MSC 06E20 (Ring-theoretic properties of Boolean algebras), 06E05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In a Boolean ring, where x² = x for every x, the join x ∨ y = x + y + xy lies in the ideal generated by x and y. It multiplies back to each of them: x(x ∨ y) = x and y(x ∨ y) = y.

**Problem.** Every finitely generated ideal of a Boolean ring is principal, meaning that one element generates it.

**How the definition helps.** The join lies in the ideal of x and y, and x and y are multiples of it, so it alone generates that ideal. Our own calculation uses x² = x and x + x = 0. Repeated joins handle any finite list.

**nLab:** [Boolean ring](https://ncatlab.org/nlab/show/Boolean+ring). It says: “Define x ∨ y to mean x + xy + y.”

**Wikipedia:** [Boolean ring](https://en.wikipedia.org/wiki/Boolean_ring). It says: “Every finitely generated ideal of a Boolean ring is principal”

**Sources:** none listed. No primary source with a working link was found.

### Boolean rings make lattice ideals into ring ideals

**Remember:** Meet multiplies and symmetric difference adds.

*Makes the theorem clean to state or prove.* MSC 06E20 (Ring-theoretic properties of Boolean algebras), 06E15. arXiv math.CO, math.RA. Level 2: later undergraduate.

**Definition.** Make a Boolean algebra into a ring with meet as multiplication and symmetric difference x + y = (x ∧ ¬y) ∨ (¬x ∧ y) as addition. In this ring, x ∨ y = x + y + xy, and y ≤ x exactly when y = xy.

**Problem.** A subset of a Boolean algebra is a lattice ideal exactly when it is an ideal of the associated Boolean ring. The same holds for prime ideals and for maximal ideals.

**How the definition helps.** These two identities translate each ideal condition between the lattice and the ring (our own proof). A lattice ideal (downward closed, containing 0, closed under joins) is a ring ideal since x + y ≤ x ∨ y and xy ≤ x; conversely y = xy gives downward closure. Primality uses the same product and maximality the same inclusion in both settings.

**Wikipedia:** [Boolean ring](https://en.wikipedia.org/wiki/Boolean_ring), [Boolean algebra (structure)](https://en.wikipedia.org/wiki/Boolean_algebra_%28structure%29). It says: “Furthermore, a subset of a Boolean ring is a ring ideal (prime ring ideal, maximal ring ideal) if and only if it is an order ideal (prime order ideal, maximal order ideal) of the Boolean algebra.”

**Sources:**

- [Stone, M. H. (1936). The theory of representation for Boolean algebras. Transactions of the American Mathematical Society 40, 37–111.](https://doi.org/10.2307/1989664)

### Chain-complete posets give inflationary maps fixed points without choice

**Remember:** Always step up, and take the least upper bound at limits.

*Makes the theorem clean to state or prove.* MSC 06A06 (Partial orders, general), 03E25. arXiv math.LO, math.CO. Level 3: graduate.

**Definition.** A partially ordered set is chain complete if every chain, a totally ordered subset, has a least upper bound. A map f is inflationary if f(x) ≥ x for every x, so iterating f only climbs.

**Problem.** If X is a chain-complete partially ordered set and f is an inflationary map on X, then f has a fixed point. The proof does not use the axiom of choice.

**How the definition helps.** Iterating f climbs along a chain, and chain completeness gives a value at each limit stage, so the climb must stop at a fixed point. The Bourbaki–Witt theorem makes this precise without choice, because f itself supplies each next step (our own explanation).

**Wikipedia:** [Bourbaki–Witt theorem](https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem). It says: “Note the above argument does not rely on the axiom of choice. (In the case of a proof of Zorn's lemma, Choice is used to define an inflationary map.)”

**Sources:**

- [Bourbaki, N. (1949). Sur le théorème de Zorn. Archiv der Mathematik 2, 434–437.](https://doi.org/10.1007/bf02036949)
- [Witt, E. (1950). Beweisstudien zum Satz von M. Zorn. Mathematische Nachrichten 4, 434–438.](https://doi.org/10.1002/mana.3210040138)

### An up and down relation gives the path count n!

**Remember:** Down after up equals up after down, plus the identity.

*True by definition.* MSC 06A07 (Combinatorics of partially ordered sets), 05A19. arXiv math.CO. Level 3: graduate.

**Definition.** A graded poset with a least element and finite ranks is 1-differential if DU − UD is the identity. Here U sends each element to the formal sum of the elements covering it, and D sends it to the sum of the elements it covers.

**Problem.** In a 1-differential poset, exactly n! paths go up n steps from the least element and then back down n steps to it. For partitions ordered by adding one box, this counts pairs of ways to build the same n-box shape.

**How the definition helps.** The relation gives DUⁿ = UⁿD + nUⁿ⁻¹, and D sends the least element to zero, so each down step after n up steps gives a factor n (our own). Repeating gives n!, since entries of these operator products count up-down paths (our own). For partitions, checking the relation is a count of the ways to add and remove boxes (our own).

**Wikipedia:** [Differential poset](https://en.wikipedia.org/wiki/Differential_poset). It says: “Then the second and third conditions may be replaced by the statement that DU − UD = r I (where I is the identity).”

**Sources:**

- [R. P. Stanley, Differential posets, Journal of the American Mathematical Society 1 (1988) 919–961](https://doi.org/10.1090/S0894-0347-1988-0941434-9)

### Möbius inversion on divisor intervals gives the prime formula

**Remember:** Factor a divisor interval into prime-power chains and multiply their Möbius values.

*True by definition.* MSC 06A07 (Combinatorics of partially ordered sets), 11A25. arXiv math.CO, math.NT. Level 3: graduate.

**Definition.** The Möbius function of a finite poset is the inverse of its zeta matrix, where ζ(x, y) = 1 when x ≤ y and 0 otherwise. So the Möbius function of a product of posets is the product of their Möbius functions.

**Problem.** The Möbius value from 1 to n in the divisibility order equals μ(n), which is 0 if a squared prime divides n and otherwise (−1) to the number of primes dividing n.

**How the definition helps.** Unique factorization makes the divisors of n a product of chains of prime powers, and inverses of products are products of inverses (our own). In a chain the Möbius value is 1 on the diagonal, −1 one step up and 0 further up. Multiplying these values over the primes gives the arithmetic formula.

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “The Möbius function of the cartesian product P × Q of two posets P and Q is the product of their Möbius functions:”

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “Now the Möbius function of D is the product of the Möbius functions for the factor posets, computed above, giving the classical formula:”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Taking Euler's relation as a definition extends Dehn–Sommerville to Eulerian posets

**Remember:** Euler's relation on every interval is the whole definition of Eulerian.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06A07 (Combinatorics of partially ordered sets), 52B05. arXiv math.CO. Level 3: graduate.

**Definition.** A finite graded poset with a bottom and a top is Eulerian if every nontrivial closed interval has equally many even-rank and odd-rank elements.

**Problem.** For every finite Eulerian poset of rank d + 1, Stanley’s toric h-vector satisfies hₖ = h\_(d−k) for 0 ≤ k ≤ d. Polytope face lattices, augmented face posets of simplicial homology spheres and finite Bruhat intervals are Eulerian.

**How the definition helps.** Stanley’s generalized Dehn–Sommerville theorem proves this symmetry for every Eulerian poset, so the definition is exactly its hypothesis. Euler’s formula makes the intervals of a polytope face lattice balanced (our own explanation).

**Wikipedia:** [Eulerian poset](https://en.wikipedia.org/wiki/Eulerian_poset). It says: “The face lattice of a convex polytope, consisting of its faces, together with the smallest element, the empty face, and the largest element, the polytope itself, is an Eulerian lattice.”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 1, second edition, Cambridge University Press (2011)](https://doi.org/10.1017/CBO9781139058520)

### Well-quasi-orders keep the order on subsets well-founded

**Remember:** A well-quasi-order is well-founded and has no infinite antichain.

*Rules out counterexamples. Confidence: medium.* MSC 06A07 (Combinatorics of partially ordered sets), 03E05. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** A well-quasi-order is a reflexive, transitive relation ≤ in which every infinite sequence x₁, x₂, … has indices i &lt; j with xᵢ ≤ xⱼ. So it has no infinite strictly descending sequence and no infinite antichain.

**Problem.** For subsets A and B of a well-quasi-order X, write A ≤⁺ B if every a in A lies below some b in B. This quasi-order on subsets is well-founded.

**How the definition helps.** A strictly descending sequence of subsets gives strictly shrinking downward closures, so pick xᵢ in the i-th closure but not the next (our own proof). No later xⱼ can lie above xᵢ, against the sequence condition. Without the condition, the successive tails of an infinite antichain descend strictly (our own counterexample).

**Wikipedia:** [Well-quasi-ordering](https://en.wikipedia.org/wiki/Well-quasi-ordering). It says: “One can show that this quasiordering on P(X) need not be well-founded, but if one takes the original quasi-ordering to be a well-quasi-ordering, then it is.”

**Sources:** none listed. No primary source with a working link was found.

### A geometric series for the Möbius function counts chains

**Remember:** Expand the inverse as a geometric series to count chains with alternating signs.

*True by definition.* MSC 06A11 (Algebraic aspects of posets), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** In the incidence algebra of a finite poset, the Möbius function μ is the inverse of ζ = δ + η. Here δ is the identity, and η(x, y) = 1 exactly when x &lt; y, else 0. So μ = δ − η + η² − ⋯, a finite geometric series (our own).

**Problem.** For x &lt; y, μ(x, y) is the sum of the numbers of strict chains from x to y, with sign (−1) to their lengths. The length counts the steps in the chain.

**How the definition helps.** The power ηⁱ(x, y) counts the chains from x to y with i steps, so the series is the signed chain count (our own). The series stops at the longest chain, so it is finite and inverts δ + η (our own).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “A Möbius function of P is defined as an inverse to the zeta function with respect to the convolution product.”

**Wikipedia:** [Incidence algebra](https://en.wikipedia.org/wiki/Incidence_algebra). It says: “This can be shown using Philip Hall's theorem, relating the value of μ(0,1) to the number of chains of length i.”

**Sources:**

- [P. Hall, The Eulerian functions of a group, Quarterly Journal of Mathematics os-7 (1936) 134–151](https://doi.org/10.1093/qmath/os-7.1.134)
- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Möbius inverses give both recursions and reverse the order

**Remember:** μ inverts the constant function 1 from both sides.

*True by definition.* MSC 06A11 (Algebraic aspects of posets), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** In a poset with finite intervals, multiply interval functions by summing f(x, z)g(z, y) over x ≤ z ≤ y. The Möbius function μ is the two-sided inverse of the constant function 1, so both μ·1 and 1·μ equal the identity δ, which is 0 off the diagonal.

**Problem.** For x &lt; y, both the sum of μ(x, z) and the sum of μ(z, y) over z in \[x, y\] vanish. Reversing the order exchanges the two arguments of μ.

**How the definition helps.** The products μ·1 and 1·μ at (x, y) are the two sums, and both equal δ(x, y) = 0 for x &lt; y. Reversing the order reverses each interval and the order of products, so the inverse has its arguments swapped (our own argument).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “A Möbius function of P is defined as an inverse to the zeta function with respect to the convolution product.”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### An adjoint description makes closed elements determine closure

**Remember:** An element closes to the least closed element above it.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.RA. Level 3: graduate.

**Definition.** A closure operator on a poset sends each x to c(x), the least closed element above x, where y is closed when c(y) = y. Equivalently, c preserves order and satisfies x ≤ c(x) and c(c(x)) = c(x).

**Problem.** Two closure operators on the same partially ordered set are equal if they have the same closed elements.

**How the definition helps.** Since c(x) is the least closed element above x, the closed elements determine c. The axioms give this form: c(x) is closed and above x, and any closed y ≥ x has c(x) ≤ c(y) = y (our own check).

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “Conversely, any closure operator c on some poset A gives rise to the Galois connection”

**Paper or page:** [Closed Elements Uniquely Determine Closure Operator](https://proofwiki.org/wiki/Closed_Elements_Uniquely_Determine_Closure_Operator). It says: “Suppose that f and g have the same closed elements. Then f = g.”

**Sources:** none listed. No primary source with a working link was found.

### Closed pairs make concept lattices complete

**Remember:** Intersect the object sets, then recover their shared attributes.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06B23. arXiv math.CO, math.RA. Level 3: graduate.

**Definition.** In a formal context, a relation between objects and attributes, a concept is a pair (A, B) where B is the set of attributes shared by every object of A. Also, A is the set of all objects having every attribute in B, so A is cut out by an attribute requirement.

**Problem.** The concepts of any formal context form a complete lattice when ordered by inclusion of their object sets. This means every family has a greatest lower bound and a least upper bound.

**How the definition helps.** An intersection of concept object sets is the set of objects meeting all their attribute requirements at once, so it is again a concept object set (our own argument). This gives every meet, with the full object set for the empty family. The meet of all upper bounds then gives every join.

**Wikipedia:** [Formal concept analysis](https://en.wikipedia.org/wiki/Formal_concept_analysis). It says: “These meet and join operations satisfy the axioms defining a lattice, in fact a complete lattice.”

**Sources:**

- [Rudolf Wille, Restructuring lattice theory: an approach based on hierarchies of concepts (1982)](https://doi.org/10.1007/978-94-009-7798-3_15)

### Galois connections give closure operators

**Remember:** There and back moves up, and doing it twice adds nothing.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)). arXiv math.RA. Level 3: graduate.

**Definition.** A monotone Galois connection between posets P and Q is a pair of maps f: P → Q and g: Q → P with f(x) ≤ y exactly when x ≤ g(y). Taking y = f(x) gives x ≤ g(f(x)), and taking x = g(y) gives f(g(y)) ≤ y.

**Problem.** For any monotone Galois connection f, g, the round trip g∘f is a closure operator. It preserves order and satisfies x ≤ g(f(x)) = g(f(g(f(x)))).

**How the definition helps.** The two inequalities give the closure laws (our own calculation). Applying g to f(g(y)) ≤ y with y = f(x) gives g(f(g(f(x)))) ≤ g(f(x)), and the reverse follows from x ≤ g(f(x)) and monotonicity. The adjunction rule itself makes f and g preserve order.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “is in fact a closure operator on A.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society (1944)](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### Intersection-closed families give complete lattices

**Remember:** Intersections give meets, and closing unions gives joins.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 06B23, 08A30. arXiv math.RA. Level 3: graduate.

**Definition.** A Moore family on a set X is a collection of subsets closed under all intersections, including the empty intersection X. So any collection of members has a meet, its intersection, and a join, the smallest member containing its union.

**Problem.** Subgroups of a group and topologies on a nonempty set form complete lattices under inclusion. So do congruences, which are equivalence relations that respect an algebra's operations.

**How the definition helps.** Closure under intersections gives all meets, and the join is the intersection of the members containing the union, so no separate join construction is needed. Subgroups, topologies and congruences are each closed under arbitrary intersections, which is the only check.

**nLab:** [Moore closure](https://ncatlab.org/nlab/show/Moore+closure). It says: “Conversely, if 𝒞 is a Moore collection, then let Cl(A) be the intersection of all closed sets that contain A. Then Cl is a closure operator.”

**Paper or page:** [Set of Subgroups forms Complete Lattice](https://proofwiki.org/wiki/Set_of_Subgroups_forms_Complete_Lattice), [Set of Congruence Relations on Algebraic Structure forms Complete Lattice](https://proofwiki.org/wiki/Set_of_Congruence_Relations_on_Algebraic_Structure_forms_Complete_Lattice), [Topologies on Set form Complete Lattice](https://proofwiki.org/wiki/Topologies_on_Set_form_Complete_Lattice). It says: “the infimum of ℍ necessarily admitted by ℍ is ⋂ℍ”

**Sources:** none listed. No primary source with a working link was found.

### One adjunction rule makes Galois connections compose

**Remember:** Chain the two order tests to compose the connections.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 18A40. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** A monotone Galois connection between posets A and B is a pair of maps f: A → B and g: B → A with f(x) ≤ y exactly when x ≤ g(y). This single two-way rule replaces order preservation plus the inequalities x ≤ g(f(x)) and f(g(y)) ≤ y.

**Problem.** If f, g connect A and B, and f′, g′ connect B and C, then f′∘f and g∘g′ connect A and C.

**How the definition helps.** Composition chains the equivalences: f′(f(x)) ≤ z exactly when f(x) ≤ g′(z), exactly when x ≤ g(g′(z)) (our own write-out). The two-inequality definition needs order preservation and both inequalities checked separately (our own comparison).

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “One can also define Galois connections as a pair of monotone functions that satisfy the laxer condition”

**Paper or page:** [Composition of Galois Connections is Galois Connection](https://proofwiki.org/wiki/Composition_of_Galois_Connections_is_Galois_Connection). It says: “Then (g₂ ∘ g₁, d₁ ∘ d₂) is also a Galois connection.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society (1944)](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### Order-reversing Galois connections on power sets are relations

**Remember:** Each singleton determines one row of the relation.

*True by definition.* MSC 06A15 (Galois correspondences, closure operators (in relation to ordered sets)), 03E20. arXiv math.RA, math.CO. Level 3: graduate.

**Definition.** An order-reversing Galois connection between the power sets of X and Y is a pair of maps F and G with B ⊆ F(A) exactly when A ⊆ G(B). Then F turns unions into intersections, so F(A) is the intersection of the sets F({x}) over x in A.

**Problem.** Every such connection between the power sets of X and Y comes from exactly one relation between X and Y.

**How the definition helps.** F is a left adjoint into the reversed order, so it sends unions to intersections and is fixed by its values on singletons. Relating x to y exactly when y ∈ F({x}) gives the only possible relation (our own reconstruction). The rule then gives x ∈ G(B) exactly when B ⊆ F({x}).

**nLab:** [Galois connection](https://ncatlab.org/nlab/show/Galois+connection). It says: “Because f is a left adjoint, it takes colimits in P(X) (in this case, unions) to colimits in P(Y)ᵒᵖ, which are intersections in P(Y).”

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “Up to isomorphism all antitone Galois connections between power sets arise in this way.”

**Sources:**

- [Øystein Ore, Galois connexions, Transactions of the American Mathematical Society (1944)](https://doi.org/10.1090/S0002-9947-1944-0010555-7)

### MacNeille cuts preserve existing bounds

**Remember:** An existing join has exactly the same upper bounds as its summands.

*True by definition.* MSC 06B23 (Complete lattices, completions). arXiv math.CT. Level 3: graduate.

**Definition.** The MacNeille completion consists of the sets equal to the common lower bounds of their common upper bounds, ordered by inclusion, and sends each element x to the set of elements below x. An existing join has the same upper bounds as the elements it joins.

**Problem.** The MacNeille completion preserves all existing least upper bounds and greatest lower bounds.

**How the definition helps.** The union of the principal lower sets of a family has the same upper bounds as the family (our own proof). So its closure is the principal lower set of the join, when the join exists. Their intersection is the set of common lower bounds, the principal lower set of any existing meet.

**nLab:** [MacNeille completion](https://ncatlab.org/nlab/show/MacNeille+completion). It says: “preserves all least upper bounds (joins) and greatest lower bounds (meets) existing in L.”

**Sources:**

- [H. M. MacNeille, Partially ordered sets (1937)](https://doi.org/10.1090/S0002-9947-1937-1501929-X)

### The Dedekind–MacNeille completion extends Dedekind cuts to every poset

**Remember:** Keep the sets equal to the common lower bounds of their upper bounds.

*Makes the theorem clean to state or prove.* MSC 06B23 (Complete lattices, completions), 06A15. arXiv math.CO. Level 3: graduate.

**Definition.** For a subset A of a partially ordered set, take its set of upper bounds, then the set of lower bounds of that. The Dedekind–MacNeille completion is the set of all A that equal this double set, ordered by inclusion.

**Problem.** Every partially ordered set embeds in its Dedekind–MacNeille completion, a complete lattice that embeds in every complete lattice containing the order. For the rational numbers, the completion is the real numbers with −∞ and +∞ added.

**How the definition helps.** Taking lower bounds of upper bounds is a closure operation, so its fixed sets form a complete lattice, and principal lower sets embed the order. In a complete lattice containing the order, send each cut to its join, whose upper bounds in the original order recover the cut (our own proof). For ℚ, proper nonempty cuts give the real numbers, and ∅ and ℚ give −∞ and +∞.

**Wikipedia:** [Dedekind–MacNeille completion](https://en.wikipedia.org/wiki/Dedekind%E2%80%93MacNeille_completion). It says: “If the requirement that both sets be nonempty is removed, the construction also includes the two additional elements -∞ and +∞, yielding the extended real number line.”

**Sources:**

- [MacNeille, H. M. (1937). Partially ordered sets. Transactions of the American Mathematical Society 42, 416–460.](https://doi.org/10.1090/S0002-9947-1937-1501929-X)

### Equations make lattices a variety and give free lattices

**Remember:** Lattices are defined by equations, so free lattices come for free.

*True by definition.* MSC 06B25 (Free lattices, projective lattices, word problems), 08B20. arXiv math.RA. Level 3: graduate.

**Definition.** A lattice is a set with two operations, meet ∧ and join ∨, that are associative, commutative and idempotent. They also satisfy the absorption laws a ∧ (a ∨ b) = a = a ∨ (a ∧ b).

**Problem.** For every nonempty set X there is a free lattice on X. Every assignment of its generators to a lattice extends uniquely to a map that preserves meet and join.

**How the definition helps.** These equations make lattices a variety, a class of algebras defined by equations. Every variety has free algebras, built from expressions modulo its equations. The order comes back as a ≤ b exactly when a ∧ b = a (our own check).

**Wikipedia:** [Free lattice](https://en.wikipedia.org/wiki/Free_lattice). It says: “the category of all lattices constitute a variety, and thus there exist (by general principles of universal algebra) free objects”

**Sources:**

- [P. M. Whitman, Free lattices, Annals of Mathematics 42 (1941)](https://doi.org/10.2307/1969001)

### An adjoint makes continuous lattices meet-continuous

**Remember:** Taking joins of ideals is a right adjoint, so it keeps meets.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications). arXiv math.RA, cs.LO. Level 3: graduate.

**Definition.** A complete lattice is continuous when the map sending each ideal, a nonempty directed lower set, to its join has a left adjoint. Then the join map is a right adjoint, so it preserves meets of ideals, which are intersections. Equivalently, each element is the join of the elements way below it.

**Problem.** In a continuous complete lattice, meeting with a fixed element preserves directed joins. Thus x ∧ ⋁D = ⋁{x ∧ d : d ∈ D} for each directed set D.

**How the definition helps.** Right adjoints preserve meets, and the meet of two ideals is their intersection. The ideal below x meets the ideal generated by D in the elements below some x ∧ d (our own proof). The join of this intersection is therefore both x ∧ ⋁D and ⋁{x ∧ d : d ∈ D}.

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Paper or page:** [Continuous Lattice is Meet-Continuous](https://proofwiki.org/wiki/Continuous_Lattice_is_Meet-Continuous). It says: “Then L is meet-continuous.”

**Sources:**

- [Rudolf-E. Hoffmann, Continuous posets and adjoint sequences, Semigroup Forum (1979)](https://doi.org/10.1007/BF02574184)

### Defining continuity by a left adjoint makes way-below respect directed joins

**Remember:** Left adjoints preserve joins, so way-below sets of joins are unions.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv math.CT, cs.LO. Level 3: graduate.

**Definition.** A poset with directed joins is continuous when the join map from ideals, nonempty directed lower sets, to elements has a left adjoint. The left adjoint sends a to the set of elements way below a, where b is way below a if every directed set with join above a has a member above b. As a left adjoint, it preserves directed joins.

**Problem.** In a continuous poset, b is way below the join of a directed set D exactly when b is way below some member of D.

**How the definition helps.** The left adjoint preserves joins, and a directed join of ideals is their union, so the way-below set of ⋁D is the union of the way-below sets of the members of D. Reading membership in that union gives the claim (our own). The usual proof instead uses the interpolation property, which itself needs proof.

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Sources:** none listed. No primary source with a working link was found.

### Directed joins turn separate Scott continuity into joint continuity

**Remember:** Every pair of indices is bounded by an index on the diagonal.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A map between directed-complete partial orders is Scott continuous if it preserves order and joins of directed sets, the nonempty sets containing an upper bound of any two members. In a product, any two coordinate values d and e of a directed set lie below one member (d′, e′) of that set.

**Problem.** A map from a product of two directed-complete partial orders to another is Scott continuous exactly when it is Scott continuous in each variable separately.

**How the definition helps.** Separate continuity turns f at the join into a double join over the two coordinate projections (our own proof). Each pair (d, e) of coordinates lies below a member of the set, so this double join equals the join of f over the set. Conversely, fixing one coordinate preserves directed joins.

**Paper or page:** [Domain theory in univalent foundations I: Directed complete posets and Scott's D∞](https://arxiv.org/abs/2407.06952v3). It says: “A map f: D₁ × D₂ → E is Scott continuous if and only if the maps f(x,−): D₂ → E and f(−,y): D₁ → E are Scott continuous for every x: D₁ and y: D₂.”

**Sources:**

- [Tom de Jong, Domain theory in univalent foundations I: Directed complete posets and Scott's D∞](https://arxiv.org/abs/2407.06952v3)

### Directed lower sets give the free directed-complete order

**Remember:** Extend a map by taking the join of its values on each ideal.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 06A06. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** An ideal of a poset is a nonempty lower set in which any two members have an upper bound inside the set, so it is the directed union of the principal ideals of its members. A Scott-continuous map preserves order and joins of directed sets.

**Problem.** For a poset S, order its ideals by inclusion and embed each x as the principal ideal of elements below x. Every order-preserving map f from S into a directed-complete order D, where every directed set has a join, extends uniquely to a Scott-continuous map on these ideals.

**How the definition helps.** Each ideal is the directed union of its principal ideals, so a Scott-continuous extension must send it to the join of f over the ideal, which exists because f preserves order. This formula agrees with f on principal ideals and preserves directed unions (our own proof).

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “for any monotone function f: S → D to a dcpo D, there exists a unique Scott continuous function f̄: Idl(S) → D such that f̄ ∘ i<sub>S</sub> = f.”

**Sources:**

- [Tatsuji Kawai, Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4)

### In the Scott topology, continuous maps are exactly those preserving directed joins

**Remember:** You cannot reach an open set only in the limit of a directed set.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 54H12, 18B35. arXiv math.GN, cs.LO. Level 3: graduate.

**Definition.** A subset of a preorder is Scott-open if it is upward closed and cannot be reached only in the limit. So any directed set whose join exists and lies in it already has a member in it. A directed set is nonempty and holds an upper bound of each pair of members.

**Problem.** Between preorders with their Scott topologies, continuous maps are exactly the monotone maps preserving every existing directed join. The Scott topology on the ordered truth values gives the Sierpiński space.

**How the definition helps.** If f preserves order and directed joins, a preimage of a Scott-open set is upward closed and catches every directed set whose join it holds, so it is Scott-open. Conversely, complements of principal lower sets are Scott-open, and continuity then forces f to be monotone and to keep directed joins (our own proof). On the truth values 0 &lt; 1, the open sets are ∅, {1} and both, which is the Sierpiński space.

**nLab:** [Scott topology](https://ncatlab.org/nlab/show/Scott+topology). It says: “This in fact ensures that, in general, the continuous functions between preorders with Scott topologies are precisely those (necessarily monotonic) functions between them which preserve directed joins (called Scott-continuous).”

**Sources:**

- [Dana Scott, Continuous lattices, in: Toposes, Algebraic Geometry and Logic, Lecture Notes in Mathematics 274, Springer (1972) 97–136](https://doi.org/10.1007/BFb0073967)

### Scott continuity makes the least fixed point a limit of iterates

**Remember:** Continuous maps reach their least fixed point in ω steps from bottom.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 47H10. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** In a directed-complete partial order, every directed set has a least upper bound; a directed set is nonempty and holds an upper bound of any two members. A map f is Scott-continuous if it preserves order and sends the least upper bound of each directed set D to that of f(D).

**Problem.** Every Scott-continuous self-map f of a directed-complete partial order with least element ⊥ has a least fixed point. It is the least upper bound of the iterates starting at ⊥.

**How the definition helps.** The iterates ⊥ ≤ f(⊥) ≤ f(f(⊥)) ≤ ⋯ form a chain, and continuity sends their least upper bound m to the least upper bound of the later iterates, which is m. Any fixed point lies above ⊥ and so above every iterate, hence above m. A map that is only monotone can need transfinitely many steps (our own).

**Wikipedia:** [Kleene fixed-point theorem](https://en.wikipedia.org/wiki/Kleene_fixed-point_theorem). It says: “Then f has a least fixed point, which is the supremum of the ascending Kleene chain of f.”

**Sources:** none listed. No primary source with a working link was found.

### Scott domains give a space isomorphic to its own function space

**Remember:** Count only the continuous functions, and D can be as big as D → D.

*Makes the theorem clean to state or prove.* MSC 06B35 (Continuous lattices and posets, applications), 03B40, 18C50. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** For a continuous lattice D, the space \[D → D\] consists of the Scott-continuous maps from D to itself, those preserving order and suprema of directed sets, ordered pointwise. Using only these maps removes Cantor’s obstruction, since all maps from a set of two or more points to itself form a strictly larger set (our own).

**Problem.** There is a domain D∞ with more than one point that is isomorphic to its own space \[D∞ → D∞\] of Scott-continuous functions. So D∞ is a model of the untyped lambda calculus in which not all terms are equal.

**How the definition helps.** Scott’s inverse-limit construction gives a continuous lattice D∞ with more than one point and D∞ isomorphic to \[D∞ → D∞\]. The isomorphism interprets application and abstraction, so D∞ is a model of the untyped lambda calculus (our own explanation).

**nLab:** [domain theory](https://ncatlab.org/nlab/show/domain+theory). It says: “In 1969, Dana Scott solved this problem topologically: the terms were interpreted as continuous functions on a suitable space D isomorphic to its own function space. This D is called a domain.”

**Sources:**

- [D. S. Scott, Data types as lattices, SIAM J. Comput. 5 (1976) 522–587](https://doi.org/10.1137/0205037)

### The adjoint definition makes continuous lattices retracts of ideal lattices

**Remember:** The ideal of approximations joins back to the original element.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 06B23. arXiv math.RA, cs.LO. Level 3: graduate.

**Definition.** A complete lattice is continuous if the join map s from its ideals, nonempty directed lower sets, has a left adjoint t, so t(a) ⊆ I exactly when a ≤ s(I). Then t(a) is the ideal of approximations of a, and its join s(t(a)) is a again.

**Problem.** Every continuous complete lattice L is a retract of its ideal lattice, which is algebraic. This means there are join-preserving maps t and s in opposite directions with s(t(a)) = a for every a in L.

**How the definition helps.** Both maps preserve joins: t is a left adjoint, and s is left adjoint to the principal ideal map. The adjunction gives t(a) ⊆ ↓a and a ≤ s(t(a)), so s(t(a)) = a (our own check). The ideal lattice is algebraic because each ideal is the directed union of principal ideals, which are compact (our own argument).

**nLab:** [continuous poset](https://ncatlab.org/nlab/show/continuous+poset). It says: “A poset P with directed joins is continuous if and only if ⋁: Idl(P) → P has its own left adjoint, which must be ⇓.”

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “Every continuous lattice is a suplattice retract of an algebraic lattice.”

**Sources:**

- [Tatsuji Kawai, Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4)
- [Rudolf-E. Hoffmann, Continuous posets and adjoint sequences, Semigroup Forum (1979)](https://doi.org/10.1007/BF02574184)

### The compact ideals are principal

**Remember:** A single generator witnesses compactness in a directed union.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications). arXiv math.CT. Level 3: graduate.

**Definition.** In a join semilattice with a least element, an ideal is a nonempty downward closed set closed under binary joins. An ideal is compact if, whenever it lies in a directed union of ideals, it lies in one of them.

**Problem.** The compact ideals are exactly the principal ideals, the sets of elements below one generator. So every ideal is a join of compact ideals in the complete lattice of ideals.

**How the definition helps.** A directed union that contains a principal ideal has its generator in one member, and that member then contains the whole principal ideal (our own proof). Conversely, every ideal is the directed union of its principal ideals, so a compact ideal lies in one of them and equals it.

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

**Definition.** An ortholattice is a bounded lattice with an order-reversing map x ↦ x′ such that x″ = x and x ∧ x′ = 0. It is orthomodular if every b above a splits as b = a ∨ (b ∧ a′), a plus the part of b orthogonal to a.

**Problem.** In an orthomodular lattice, if a ≤ b and b ∧ a′ = 0, then a = b.

**How the definition helps.** When b ∧ a′ = 0, the split reads b = a ∨ 0 = a (our own calculation).

**Paper or page:** [Topological duality for orthomodular lattices](https://arxiv.org/abs/2208.07430v2). It says: “if a ≤ b and −a · b = 0, then a = b.”

**Sources:**

- [Topological duality for orthomodular lattices](https://arxiv.org/abs/2208.07430v2)

### Orthomodularity keeps the part of the modular law Hilbert subspaces satisfy

**Remember:** Split the larger subspace into the smaller one and its orthogonal remainder.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06C15 (Complemented lattices, orthocomplemented lattices and posets), 03G12. arXiv math.LO, quant-ph. Level 3: graduate.

**Definition.** An orthocomplemented lattice has an order-reversing map a ↦ a⊥ with a⊥⊥ = a that sends each element to a complement. It is orthomodular if a ≤ c implies c = a ∨ (a⊥ ∧ c), the modular law with b = a⊥. So the larger element splits into the smaller one and its orthogonal part.

**Problem.** The closed subspaces of a Hilbert space, with orthogonal complement, form an orthomodular lattice. In dimension at least 2 this lattice is not distributive, so it is not a Boolean algebra.

**How the definition helps.** For closed subspaces A ⊆ C, each vector of C is its projection onto A plus a vector of C orthogonal to A, which is the orthomodular split (our own argument). In a plane, three distinct lines break distributivity, since two of them span the plane while each meets the third only in zero (our own example).

**Wikipedia:** [Complemented lattice](https://en.wikipedia.org/wiki/Complemented_lattice). It says: “A natural further weakening of this condition for orthocomplemented lattices, necessary for applications in quantum logic, is to require it only in the special case b = a⊥.”

**Sources:**

- [Birkhoff, G.; von Neumann, J. (1936). The logic of quantum mechanics. Annals of Mathematics 37, 823–843.](https://doi.org/10.2307/1968621)

### Upward sets give complete distributivity

**Remember:** Unions and intersections keep every membership test pointwise.

*True by definition.* MSC 06D10 (Complete distributivity), 06D50. arXiv math.LO. Level 3: graduate.

**Definition.** The canonical extension of a bounded distributive lattice is the lattice of all upward closed sets of its prime filters, the proper filters containing a or b whenever they contain a ∨ b. Its joins and meets are plain unions and intersections.

**Problem.** The canonical extension, formed from all upward closed sets of prime filters, is completely distributive. An intersection of unions equals the union of intersections obtained by choosing one set from each family.

**How the definition helps.** Joins and meets are unions and intersections, so complete distributivity becomes a law about sets. A point in every union lies in one chosen set from each family, by the axiom of choice (our own argument). The representation theorem identifies this concrete lattice with the canonical extension.

**nLab:** [canonical extension](https://ncatlab.org/nlab/show/canonical+extension). It says: “The canonical extension Lᵟ of a distributive lattice L is a complete and completely distributive lattice.”

**Sources:** none listed. No primary source with a working link was found.

### An order-reversing adjunction gives one De Morgan law

**Remember:** Negation as a left adjoint converts joins into meets.

*True by definition.* MSC 06D20 (Heyting algebras (lattice-theoretic aspects)), 03G10. arXiv math.LO. Level 3: graduate.

**Definition.** Heyting negation ¬x is the largest element disjoint from x, so b ≤ ¬x exactly when b ∧ x = 0. This rule is symmetric: b ≤ ¬x exactly when x ≤ ¬b.

**Problem.** Heyting negation satisfies ¬(x ∨ y) = ¬x ∧ ¬y. The reverse pattern ¬(x ∧ y) = ¬x ∨ ¬y can fail.

**How the definition helps.** The symmetric rule makes ¬ a left adjoint into the reversed order, where joins are the original meets, and left adjoints preserve joins. In the open sets of the real line, ¬U is the interior of the complement of U (our own counterexample). For the two open half-lines at 0, the negation of their intersection is ℝ, but the union of their negations misses 0.

**nLab:** [Heyting algebra](https://ncatlab.org/nlab/show/Heyting+algebra). It says: “−⇒a is self-adjoint: −⇒a: L → Lᵒᵖ is left adjoint to −⇒a: Lᵒᵖ → L.”

**Sources:** none listed. No primary source with a working link was found.

### Back conditions preserve Heyting implication

**Remember:** Lift each point that implication has to check.

*True by definition. Confidence: medium.* MSC 06D20 (Heyting algebras (lattice-theoretic aspects)). arXiv math.LO. Level 3: graduate.

**Definition.** For upward closed sets U and V of a poset, x lies in U → V if every member of U above x lies in V. A monotone map f has the back condition if every point above f(x) is f(z) for some z ≥ x, so f maps the points above x onto the points above f(x).

**Problem.** For order-preserving maps, inverse image preserves this implication exactly when the map satisfies the back condition.

**How the definition helps.** Implication at x looks only at points above x, and the back condition makes those points map onto the points above f(x), so both tests agree. Conversely, if y ≥ f(x) has no lift above x, take U the points ≥ y and V the points &gt; y. Then f(x) is not in U → V, but x is in f⁻¹(U) → f⁻¹(V) (our own proof).

**Paper or page:** [Etale algebras over finite Heyting algebras](https://arxiv.org/abs/2410.23442v1). It says: “f satisfies the ‘back’ condition of a p-morpism if and only if ↑f(x) ⊆ f∗(↑x).”

**Sources:**

- [Etale algebras over finite Heyting algebras](https://arxiv.org/abs/2410.23442v1)

### Defining implication by adjunction forces distributivity

**Remember:** Meeting with x has a right adjoint, so it preserves joins.

*True by definition.* MSC 06D20 (Heyting algebras (lattice-theoretic aspects)), 03G10. arXiv math.LO, math.RA. Level 3: graduate.

**Definition.** A Heyting algebra is a bounded lattice with an implication ⇒ such that x ∧ y ≤ z exactly when y ≤ x ⇒ z. So meeting with x is left adjoint to the map z ↦ x ⇒ z.

**Problem.** Every Heyting algebra is distributive. In particular, x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z).

**How the definition helps.** Left adjoints preserve all joins, so meeting with x preserves y ∨ z, which is the distributive law. A definition that starts with a distributive lattice and asks for the largest y with x ∧ y ≤ z needs distributivity as a separate axiom (our own comparison).

**nLab:** [Heyting algebra](https://ncatlab.org/nlab/show/Heyting+algebra). It says: “the distributivity law x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z) says precisely that x ∧ − preserves binary joins, which it does because it has a right adjoint (namely x ⇒ −)”

**Sources:** none listed. No primary source with a working link was found.

### Completely prime filters make every frame spectrum sober

**Remember:** An irreducible closed set tells you which opens its point lies in.

*True by definition.* MSC 06D22 (Frames, locales), 54D10. arXiv math.GN. Level 3: graduate.

**Definition.** The spectrum of a frame, a complete lattice whose finite meets distribute over arbitrary joins, has as points its completely prime filters. These are upper sets containing 1, closed under binary meets, that contain some term of each join they contain. The open sets are the sets Uₐ of points containing a, for each a.

**Problem.** The spectrum of any frame is sober. This means every nonempty closed set that cannot be written as the union of two proper closed subsets is the closure of exactly one point.

**How the definition helps.** For an irreducible closed set C, the elements a with Uₐ meeting C form a completely prime filter, which is a point (our own proof). Irreducibility gives closure under binary meets, and the fact that U of a join is the union of the Uₐ gives complete primeness. This point meets the same opens as C, so its closure is C, and distinct filters have distinct closures.

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “every irreducible closed set (non-empty closed set that is not the union of any two proper closed subsets) is the closure of a unique point.”

**Paper or page:** [Spectrum of Locale as Completely Prime Filters is Sober Space](https://proofwiki.org/wiki/Spectrum_of_Locale_as_Completely_Prime_Filters_is_Sober_Space). It says: “Then: Sp(L) is a sober space.”

**Sources:** none listed. No primary source with a working link was found.

### Double negation gives the smallest dense sublocale

**Remember:** A dense nucleus keeps 0, so it never exceeds double negation.

*True by definition.* MSC 06D22 (Frames, locales). arXiv math.CT. Level 3: graduate.

**Definition.** A nucleus on the opens of a locale is an order-preserving map j with a ≤ j(a) = j(j(a)) that preserves binary meets. Its fixed opens form a sublocale, which is smaller for a larger j and dense when j(0) = 0. Here ¬a is the largest open disjoint from a.

**Problem.** The double negation sublocale is contained in every dense sublocale. Its opens form a Boolean algebra.

**How the definition helps.** A dense nucleus j has j(a) ∧ ¬a ≤ j(a) ∧ j(¬a) = j(0) = 0, so j(a) ≤ ¬¬a (our own proof). So ¬¬ is the largest dense nucleus, and its sublocale lies inside every dense sublocale. The Booleanization theorem shows that ¬¬ is a dense nucleus whose fixed opens form a Boolean algebra.

**nLab:** [double negation](https://ncatlab.org/nlab/show/double+negation). It says: “it is the smallest dense sublocale of L, the intersection of all dense sublocales.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclei give quotient frames through fixed points

**Remember:** Send each element to the least fixed point above it.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A nucleus on a frame, a complete lattice whose finite meets distribute over arbitrary joins, is a map j that preserves binary meets and satisfies a ≤ j(a) = j(j(a)). So j(a) is the least fixed point above a.

**Problem.** The fixed points of a nucleus form a frame in the inherited order. The map j onto these fixed points preserves finite meets and arbitrary joins.

**How the definition helps.** Since j(a) is the least fixed point above a, j is left adjoint to the inclusion of fixed points and so preserves joins into them (our own argument). It preserves binary meets by definition and the top by a ≤ j(a). Since j is onto, the frame law passes to its image.

**nLab:** [nucleus](https://ncatlab.org/nlab/show/nucleus). It says: “Note that, by property (3) above, we may interpret j as a function j<sup>\*</sup>: L → L/j, which is a surjective frame homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### The frame law produces Heyting implication

**Remember:** Distributing meets over joins lets all candidates join to give the largest one.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A frame is a complete lattice in which meeting with x distributes over every join. That is, x ∧ ⋁S = ⋁{x ∧ s : s ∈ S} for every x and every subset S.

**Problem.** Every frame is a complete Heyting algebra. This means that for each x and z, there is a largest y such that x ∧ y ≤ z.

**How the definition helps.** Let y₀ be the join of all y with x ∧ y ≤ z. The frame law makes x ∧ y₀ a join of elements below z, so y₀ is itself the largest such y (our own construction).

**nLab:** [frame](https://ncatlab.org/nlab/show/frame). It says: “A frame is automatically a Heyting algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Two-valued frame maps make completely prime filters pull back

**Remember:** Pulling back a filter amounts to composing its two-valued map.

*True by definition.* MSC 06D22 (Frames, locales), 18F70. arXiv math.GN. Level 3: graduate.

**Definition.** A completely prime filter of a frame is the set of elements sent to 1 by a frame map to {0, 1}, a map preserving finite meets and arbitrary joins. Equivalently, it is an upper set containing 1, closed under binary meets, that contains some term of each join it contains.

**Problem.** The preimage of a completely prime filter under a map of frames that preserves finite meets and arbitrary joins is completely prime.

**How the definition helps.** If F is the set sent to 1 by h, then φ⁻¹(F) is the set sent to 1 by h∘φ, which is again a frame map. The work lies in proving that the two descriptions agree; the direct proof checks each filter condition separately (our own comparison).

**Paper or page:** [Inverse Image Mapping of Frame Homomorphism Preserves Completely Prime Filter](https://proofwiki.org/wiki/Inverse_Image_Mapping_of_Frame_Homomorphism_Preserves_Completely_Prime_Filter), [Canonical Bijection from Completely Prime Filters to Frame Homomorphisms](https://proofwiki.org/wiki/Canonical_Bijection_from_Completely_Prime_Filters_to_Frame_Homomorphisms). It says: “Then: φ←(F) is a completely prime filter of L₁”

**Sources:** none listed. No primary source with a working link was found.

### Clopen inverse images detect surjectivity

**Remember:** A missing point leaves two distinct clopen sets with the same inverse image.

*Rules out counterexamples.* MSC 06D50 (Lattices and duality). arXiv math.LO. Level 3: graduate.

**Definition.** A Priestley space is a compact space with a partial order in which, whenever x is not below y, some upward set that is both closed and open contains x and misses y.

**Problem.** A continuous order-preserving map between Priestley spaces is onto exactly when inverse image is injective on the open and closed upward sets.

**How the definition helps.** If p is not in the image, compactness gives a clopen up-set U and down-set D whose intersection contains p and misses the image (our own proof). Then U and U ∖ D differ at p but have equal inverse images, while an onto map never merges two sets. Without compactness, an infinite discrete space embeds densely in its one-point compactification, both ordered by equality (our own example).

**Paper or page:** [On a Generalization of Heyting Algebras II](https://arxiv.org/abs/2409.10642v1). It says: “f is surjective iff f⁻¹∶ CU(Y, ≤ᵧ) → CU(X, ≤ₓ) is one-to-one”

**Sources:**

- [On a Generalization of Heyting Algebras II](https://arxiv.org/abs/2409.10642v1)

### The Priestley separation axiom gives a duality for distributive lattices

**Remember:** Clopen up-sets must separate points, so the lattice of up-sets remembers everything.

*Makes the theorem clean to state or prove.* MSC 06D50 (Lattices and duality), 06D05, 06F30. arXiv math.CO, math.GN. Level 3: graduate.

**Definition.** A Priestley space is a compact space with a partial order in which, whenever x is not below y, some up-set that is both closed and open contains x but not y. An up-set contains everything above each of its members.

**Problem.** The category of bounded distributive lattices is dually equivalent to the category of Priestley spaces with continuous order-preserving maps. This extends Stone duality between Boolean algebras and Stone spaces.

**How the definition helps.** The separation axiom lets the clopen up-sets detect the whole order and topology, so the lattice of clopen up-sets loses no information (our own explanation). Priestley’s theorem identifies each lattice with the clopen up-sets of its space of prime filters, ordered by inclusion. Maps correspond through inverse image.

**Wikipedia:** [Priestley space](https://en.wikipedia.org/wiki/Priestley_space). It says: “One of the main consequences of the duality theory for distributive lattices is that each of these categories is dually equivalent to the category of bounded distributive lattices.”

**Sources:**

- [Priestley, H. A. (1970). Representation of distributive lattices by means of ordered Stone spaces. Bulletin of the London Mathematical Society 2, 186–190.](https://doi.org/10.1112/blms/2.2.186)

### Boolean implication turns complete Boolean algebras into frames

**Remember:** Complement and join give the right adjoint to meet.

*True by definition.* MSC 06E10 (Chain conditions, complete algebras), 06D22. arXiv math.LO, math.RA. Level 3: graduate.

**Definition.** In a Boolean algebra, a distributive lattice where each x has a complement ¬x, put x ⇒ z = ¬x ∨ z. Then x ∧ y ≤ z exactly when y ≤ ¬x ∨ z, so meeting with x has a right adjoint.

**Problem.** In a complete Boolean algebra, x ∧ ⋁S = ⋁{x ∧ s : s ∈ S} for every x and every subset S.

**How the definition helps.** Meeting with x has the right adjoint z ↦ ¬x ∨ z, and left adjoints preserve all joins, which is the frame law. The adjunction holds because finite distributivity splits y into y ∧ x and y ∧ ¬x (our own proof).

**Paper or page:** [Boolean Lattice is Heyting Lattice](https://proofwiki.org/wiki/Boolean_Lattice_is_Heyting_Lattice), [Complete Boolean Lattice is a Frame](https://proofwiki.org/wiki/Complete_Boolean_Lattice_is_a_Frame). It says: “∀x, y ∈ B : x → y = ¬x ∨ y”

**Sources:** none listed. No primary source with a working link was found.

### Regular opens complete clopen algebras

**Remember:** Every regular open is a join of clopens inside it.

*True by definition.* MSC 06E10 (Chain conditions, complete algebras). arXiv math.LO. Level 3: graduate.

**Definition.** An open set is regular if it equals the interior of its closure. In a Stone space, a compact Hausdorff space with a basis of clopen sets, the clopens are regular and each regular open is the union of the clopens inside it. A Boolean completion embeds a Boolean algebra in a complete one where every element is a least upper bound of original elements.

**Problem.** The regular open algebra of a Stone space is the Boolean completion of its clopen algebra.

**How the definition helps.** The regular open sets form a complete Boolean algebra, where a join is the interior of the closure of the union. Each regular open is the union of the clopens inside it, so it is their join there (our own check).

**Wikipedia:** [Complete Boolean algebra](https://en.wikipedia.org/wiki/Complete_Boolean_algebra). It says: “a complete Boolean algebra containing A such that every element is the supremum of some subset of A.”

**Sources:** none listed. No primary source with a working link was found.

### Describing profinite limits by clopen algebras makes maps to finite sets factor

**Remember:** Every clopen set is already visible at some finite stage.

*True by definition. Confidence: medium.* MSC 06E15 (Stone spaces (Boolean spaces) and related structures), 54B35. arXiv math.GN. Level 3: graduate.

**Definition.** A profinite space is the limit of an inverse system of finite discrete spaces, the stages. Its clopen sets, those both open and closed, are exactly the sets pulled back from some single stage.

**Problem.** Take an inverse system of finite discrete spaces over a directed set, with surjective maps. Every continuous map from its limit to a finite discrete space factors through the projection to one stage.

**How the definition helps.** A map to a finite set is a finite list of clopen fibres, and each fibre comes from some stage. Directedness gives one stage for all fibres, and since its projection is onto, the fibres partition that stage and define the factored map (our own proof). Compactness proves that every clopen set comes from a stage.

**nLab:** [Stone space](https://ncatlab.org/nlab/show/Stone+space). It says: “Stone spaces are sometimes called profinite spaces, since they are precisely the spaces which are small cofiltered limits of finite discrete spaces”

**Sources:** none listed. No primary source with a working link was found.

### Ultrafilters as two-valued maps make Stone's map a homomorphism

**Remember:** An ultrafilter is a yes-or-no verdict that respects and, or, not.

*True by definition.* MSC 06E15 (Stone spaces (Boolean spaces) and related structures), 03G05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** An ultrafilter on a Boolean algebra is the set of elements sent to 1 by a homomorphism to the two-element Boolean algebra. Equivalently, it is a filter that is maximal among the filters that omit 0.

**Problem.** The Stone map sends each element to the set of ultrafilters containing it. It preserves meet, join, and complement as intersection, union, and set complement.

**How the definition helps.** The Stone map sends b to the set of these homomorphisms that send b to 1, and homomorphisms preserve meet, join and complement. So b ∧ c is sent to 1 exactly when both are, and ¬b exactly when b is not. With the maximal-filter definition, one must first prove that each ultrafilter contains exactly one of b and ¬b.

**Wikipedia:** [Stone's representation theorem for Boolean algebras](https://en.wikipedia.org/wiki/Stone%27s_representation_theorem_for_Boolean_algebras). It says: “The isomorphism sends an element b ∈ B to the set of all ultrafilters that contain b.”

**Sources:**

- [M. H. Stone, The theory of representations for Boolean algebras, Transactions of the American Mathematical Society (1936)](https://doi.org/10.1090/S0002-9947-1936-1501865-8)

### Residuals combine implications

**Remember:** x → z is the largest thing that x multiplies below z.

*True by definition.* MSC 06F05 (Ordered semigroups and monoids). arXiv math.LO. Level 3: graduate.

**Definition.** A commutative residuated lattice is a lattice with an associative, commutative product with unit. Its implication x → z is the largest t with x · t ≤ z, so t ≤ x → z exactly when x · t ≤ z.

**Problem.** In a commutative residuated lattice, x → (y → z) = (x · y) → z.

**How the definition helps.** The two sides have the same elements below them, so they are equal. Residuation turns t ≤ x → (y → z) into y · (x · t) ≤ z, and associativity and commutativity rewrite the product as (x · y) · t. Residuation again turns this into t ≤ (x · y) → z (our own proof).

**Paper or page:** [An alternative definition of tense operators on residuated lattices](https://arxiv.org/abs/2312.10876v1). It says: “x → (y → z) = (x · y) → z”

**Sources:**

- [An alternative definition of tense operators on residuated lattices](https://arxiv.org/abs/2312.10876v1)

### Residuals make multiplication preserve joins

**Remember:** Multiplication has a right adjoint, so it preserves joins.

*True by definition.* MSC 06F05 (Ordered semigroups and monoids), 06A15. arXiv math.RA. Level 3: graduate.

**Definition.** A residuated lattice is a lattice with an associative multiplication and an identity, in which multiplying by a fixed element on either side has a right adjoint, the residual. So x • y ≤ z exactly when y lies below the left residual of z by x, and likewise on the right.

**Problem.** In a residuated lattice, multiplication on either side preserves every join that exists. In particular, it distributes over binary joins and preserves the least element if there is one.

**How the definition helps.** Left adjoints preserve every join that exists, and multiplication on each side is a left adjoint. Binary joins give distributivity, and the empty join gives preservation of the least element (our own explanation).

**Wikipedia:** [Residuated lattice](https://en.wikipedia.org/wiki/Residuated_lattice). It says: “Note that distributivity x • (y ∨ z) = (x • y) ∨ (x • z) and x•0 = 0 are consequences of these axioms and so do not need to be made part of the definition.”

**Sources:**

- [Morgan Ward and R. P. Dilworth, Residuated lattices, Transactions of the American Mathematical Society (1939)](https://doi.org/10.1090/S0002-9947-1939-1501995-3)

### A greatest unit makes idempotent products meets

**Remember:** Top unit and x² = x turn the product into the meet.

*Rules out counterexamples.* MSC 06F07 (Quantales). arXiv math.RA. Level 3: graduate.

**Definition.** An integral idempotent quantale is a complete lattice with an associative product that distributes over all joins in each variable. Its unit is the top element, and xx = x for every x.

**Problem.** In an integral idempotent quantale, the product is the greatest lower bound. Its order is a frame, so finite greatest lower bounds distribute over all least upper bounds.

**How the definition helps.** The top unit makes xy a lower bound of x and y, and idempotence makes it the greatest one, so the product's distributive law becomes the frame law. Indeed xy ≤ x·e = x and xy ≤ e·y = y, while any common lower bound a gives a = aa ≤ xy. Ordinary multiplication on \[0, 1\] has top unit 1 but fails idempotence at ½ (our own counterexample).

**nLab:** [quantale](https://ncatlab.org/nlab/show/quantale). It says: “If a monoid object in the cartesian category of posets is idempotent and affine, then the monoid multiplication is the meet operation.”

**Sources:** none listed. No primary source with a working link was found.

### Subset products freely add joins

**Remember:** A subset is a formal join of its elements.

*True by definition. Confidence: medium.* MSC 06F07 (Quantales). arXiv math.RA. Level 3: graduate.

**Definition.** The subsets of a monoid form a unital quantale. Joins are unions, the product of two subsets collects all products of their members, and the unit is the singleton of the monoid unit. A unital quantale is a complete lattice with an associative product and unit that distributes over joins in each variable.

**Problem.** Every map preserving multiplication and unit from a monoid into a unital quantale extends uniquely from singletons to all subsets. The extension preserves arbitrary least upper bounds, products and the unit.

**How the definition helps.** Every subset is the union of its singletons, so a join-preserving extension must send it to the join of its members' images. This map preserves products because the quantale product distributes over joins in each variable, including empty joins (our own proof). The subset quantale thus has the property that defines the free unital quantale.

**nLab:** [quantale](https://ncatlab.org/nlab/show/quantale). It says: “The order is the inclusion order on sets, and meet and join are just intersection and union, respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Interpolation splits ordered sums

**Remember:** Fit one element between two floors and two ceilings.

*True by definition.* MSC 06F20 (Ordered abelian groups, Riesz groups, ordered linear spaces). arXiv math.GR. Level 3: graduate.

**Definition.** An ordered abelian group, where addition preserves the order, has Riesz interpolation if any two elements that each lie below two others have a common element between them. That is, x<sub>i</sub> ≤ y<sub>j</sub> for all i, j ∈ {1, 2} gives some z with x<sub>i</sub> ≤ z ≤ y<sub>j</sub> for all i, j.

**Problem.** Let an ordered abelian group satisfy Riesz interpolation. Suppose y and z are nonnegative and 0 ≤ x ≤ y + z. Then x = u + v for some 0 ≤ u ≤ y and 0 ≤ v ≤ z.

**How the definition helps.** The wanted u is just an element between the floors 0 and x − z and the ceilings x and y. Each floor lies below each ceiling, so interpolation gives u (our own proof). Then v = x − u satisfies 0 ≤ v ≤ z and x = u + v.

**Wikipedia:** [Partially ordered group](https://en.wikipedia.org/wiki/Partially_ordered_group). It says: “there exists z ∈ G such that xᵢ ≤ z ≤ yⱼ.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudo-orders let the real numbers be linearly ordered constructively

**Remember:** Given x &lt; z, each y is above x or below z.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06A05 (Total orders), 03F60, 12J15. arXiv math.LO, math.CA. Level 4: research.

**Definition.** A pseudo-order is a relation &lt; that is asymmetric and tight, so x = y when neither x &lt; y nor y &lt; x. It is also cotransitive: x &lt; z gives x &lt; y or y &lt; z for every y.

**Problem.** In constructive mathematics, the strict order &lt; on the real numbers, Dedekind or Cauchy, is a pseudo-order that extends the decidable order on ℚ. The order ≤ on the reals cannot be proved total.

**How the definition helps.** Cotransitivity replaces totality, and approximation proves it because it only asks where y lies relative to a known gap. For x &lt; z, pick rationals x &lt; r &lt; s &lt; z, and locatedness of y gives r &lt; y or y &lt; s (our own argument). Tightness holds because reals that no rational separates are equal.

**nLab:** [pseudo-order](https://ncatlab.org/nlab/show/pseudo-order). It says: “Since the corresponding partial order ≤ cannot be proved total (and in some classically invalid versions of constructive mathematics can even be proved not total), &lt; is more directly useful than ≤ in constructive analysis.”

**Sources:** none listed. No primary source with a working link was found.

### Asking maps to preserve semidirected joins makes strictness automatic

**Remember:** The least element is the join of the empty set.

*True by definition. Confidence: medium.* MSC 06B35 (Continuous lattices and posets, applications), 68Q55. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A map between pointed directed-complete orders is inductive if it preserves suprema of all semidirected subsets, those where each pair of members has an upper bound inside. The empty subset is semidirected, and its supremum is the least element.

**Problem.** Every inductive map between pointed directed-complete orders is strict, which means that it preserves the least element.

**How the definition helps.** Preserving the supremum of the empty subset is exactly preserving the least element. Sterling’s Lemma 45 also identifies inductive maps with strict Scott-continuous maps.

**Paper or page:** [Tensorial structure of the lifting doctrine in constructive domain theory](https://arxiv.org/abs/2312.17023v5). It says: “A Scott–continuous morphism between pointed dcpos is strict if and only if it is inductive, i.e. preserves suprema of semidirected subsets.”

**Sources:**

- [Jonathan Sterling, Tensorial structure of the lifting doctrine in constructive domain theory](https://arxiv.org/abs/2312.17023v5)

### Compact elements test strong maximality

**Remember:** Each approximation from below either approximates x or is separated from it.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications). arXiv math.LO. Level 4: research.

**Definition.** Write a ≪ b, a is way below b, when every directed set with join at least b has a member above a. An element x is strongly maximal if, for every a ≪ b, either a ≪ x or b and x lie in disjoint Scott open sets. A Scott open set is upward closed and contains a member of every directed set whose join it contains.

**Problem.** Let D be an algebraic dcpo, so every element is a directed join of the compact elements c ≪ c below it. Then x is strongly maximal exactly when, for each compact c, either c ≤ x or disjoint Scott opens contain c and x.

**How the definition helps.** A compact c satisfies c ≪ c, so taking a = b = c in the definition gives the compact test. Conversely, for a ≪ b, algebraicity gives a compact c with a ≤ c ≤ b, and the compact test applies to c (our own proof). Either c ≤ x, so a ≪ x, or disjoint Scott open sets contain c and x, and the one around c also contains b.

**Paper or page:** [Apartness, sharp elements, and the Scott topology of domains](https://arxiv.org/abs/2106.05064v5). It says: “An element x of an algebraic dcpo D is strongly maximal if and only if for every compact element c ∈ D either c ⊑ x or c and x are Hausdorff separated.”

**Sources:**

- [Apartness, sharp elements, and the Scott topology of domains](https://arxiv.org/abs/2106.05064v5)

### The extension property makes retracts of continuous lattices continuous

**Remember:** Continuous lattices are the spaces into which every map extends.

*True by definition.* MSC 06B35 (Continuous lattices and posets, applications), 54C55. arXiv math.GN, cs.LO. Level 4: research.

**Definition.** View a continuous lattice with its Scott topology as an injective T₀ space: every continuous map into it from a subspace of a T₀ space extends to the whole space. Scott's theorem shows that these spaces are exactly the continuous lattices.

**Problem.** Let f be a continuous self-map of a continuous lattice with the Scott topology. Suppose f(f(x)) = f(x) for every x. Then its image is a continuous lattice in the inherited order.

**How the definition helps.** Injectivity passes to retracts, so the image of f is injective and hence a continuous lattice. To extend a map into the image, extend it into the whole lattice and then apply f (our own proof). Scott's theorem does the work, and the order recovered from the image topology is the inherited order.

**nLab:** [Scott topology](https://ncatlab.org/nlab/show/Scott+topology), [injective object](https://ncatlab.org/nlab/show/injective+object). It says: “In the category of T₀ spaces, the injective objects with respect to homeomorphic embeddings are precisely those given by Scott topologies on continuous lattices”

**Paper or page:** [Predicative theories of continuous lattices](https://arxiv.org/abs/2006.05642v4). It says: “If D is a continuous lattice, then so is D<sub>f</sub>.”

**Sources:**

- [Dana Scott, Continuous lattices, in Toposes, Algebraic Geometry and Logic, Lecture Notes in Mathematics 274 (1972)](https://doi.org/10.1007/BFb0073967)

### Interpreting locales, not spaces, in outer models keeps products

**Remember:** Allow new filters, but test complete primeness on the old families.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06D22 (Frames, locales), 18F70, 03E40. arXiv math.LO, math.GN. Level 4: research.

**Definition.** Interpret a ground-model frame L as the space of outer-universe filters on L that are completely prime for ground-model families. So if such a filter contains a ground-model family's join, it contains a member. Each element of L gives the basic open set of filters that contain it.

**Problem.** The interpretation of locales sends products of locales to products of spaces. Zapletal's interpretation of spaces does not commute with products.

**How the definition helps.** Points come from the frame, and the frame of a product of locales is a coproduct of frames, so points of the product are tuples of points. The product interpretation theorem makes this precise, including the product topology. Zapletal’s space construction can lose this correspondence (our own comparison).

**Paper or page:** [Locales as spaces in outer models](https://arxiv.org/abs/2411.05967), [Locales as spaces in outer models](https://arxiv.org/abs/2411.05967). It says: “We extend Zapletal's framework to instead interpret locales, a generalization of topological spaces which focuses on the structure of open sets. Our extension has a number of desirable properties; for instance, localic products always interpret as spatial products.”

**Sources:**

- [Nathaniel Bannister, Locales as spaces in outer models, arXiv:2411.05967 (2024)](https://arxiv.org/abs/2411.05967)

### Overlap algebras give a constructive meaning to almost discrete locales

**Remember:** Overlap means sharing inhabitants, and overlap alone decides the order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 06D22 (Frames, locales), 03F65, 18F70. arXiv math.LO, math.GN. Level 4: research.

**Definition.** An overlap algebra is a frame with a positivity predicate Pos, read as "is inhabited", such that Pos(⋁S) holds exactly when Pos(s) holds for some s in S. Two elements overlap when Pos(x ∧ y), and x ≤ y whenever every element overlapping x also overlaps y.

**Problem.** Every discrete locale, the powerset of a set, is an overlap algebra when two subsets overlap if they share an element. If excluded middle holds, overlap algebras are exactly the Boolean locales.

**How the definition helps.** For a powerset, take Pos to mean inhabited, so overlap means sharing an element, and singletons test inclusion (our own proof). Classically, Pos(x) means x ≠ 0, and the last law then forces x = ¬¬x, so the frame is Boolean. Conversely, in a complete Boolean algebra x ≰ y gives the nonzero x ∧ ¬y, which overlaps x but not y (our own proof).

**Paper or page:** [Overlap Algebras as Almost Discrete Locales](https://arxiv.org/abs/1601.04830). It says: “In fact, discrete locales are never Boolean constructively, except for the trivial locale. So, what is an almost discrete locale constructively? Our claim is that Sambin's overlap algebras have good enough features to deserve to be called that.”

**Sources:**

- [Francesco Ciraulo, Overlap Algebras as Almost Discrete Locales, Logical Methods in Computer Science 19(4) (2023), arXiv:1601.04830](https://arxiv.org/abs/1601.04830)

### Perfect maps have Scott-continuous right adjoints

**Remember:** Perfect maps send way-below to way-below.

*True by definition.* MSC 06D22 (Frames, locales). arXiv math.CT. Level 4: research.

**Definition.** A frame map h is perfect if it preserves the way-below relation, so a ≪ b gives h(a) ≪ h(b). Here a ≪ b means every directed family with join at least b has a member at least a.

**Problem.** Let h be a frame map whose source frame is continuous, so each element is a directed join of elements way below it. If h preserves ≪, then its right adjoint g preserves directed joins.

**How the definition helps.** Perfection lets one member d of a directed family D absorb each approximation h(a), and the adjunction moves this back to a ≤ g(d). In detail, a ≪ g(⋁D) gives h(a) ≪ h(g(⋁D)) ≤ ⋁D, so h(a) ≤ d for some d in D (our own proof). Continuity then gives g(⋁D) ≤ ⋁g(D) by joining all such a, and monotonicity gives the reverse.

**Paper or page:** [Canonical extensions of locally compact frames](https://arxiv.org/abs/1910.03542v1). It says: “The right adjoint of h preserves directed joins.”

**Sources:**

- [Canonical extensions of locally compact frames](https://arxiv.org/abs/1910.03542v1)

### Boolean rough sets have equal bounds

**Remember:** Negation swaps the two bounds, and Boolean truth makes them coincide.

*True by definition.* MSC 06D30 (De Morgan algebras, ?ukasiewicz algebras (lattice-theoretic aspects)). arXiv math.LO. Level 4: research.

**Definition.** For a reflexive transitive relation, the rough set of A is the pair (L, U) of its lower and upper bounds. L holds the points whose successors all lie in A, U holds those with some successor in A, and reflexivity gives L ⊆ A ⊆ U.

**Problem.** The rough sets form a Nelson algebra, an algebra for reasoning with strong negation. Its Boolean elements, those whose join with their negation is the top element, are exactly the pairs with equal bounds.

**How the definition helps.** The rough-set representation theorem gives the operations: strong negation sends (L, U) to (Uᶜ, Lᶜ), and join takes unions in each coordinate (our own calculation). The upper union U ∪ Lᶜ is everything because L ⊆ U. The lower union L ∪ Uᶜ is everything exactly when U ⊆ L, that is, when L = U.

**Paper or page:** [Nelson algebras, residuated lattices and rough sets: A survey](https://arxiv.org/abs/2402.02606v2). It says: “The Boolean elements of the Nelson FLₑw-algebra ⟨RS; ∧, ∨, \*, ⇒, (∅,∅), (U,U)⟩ are the exact rough sets.”

**Sources:**

- [Nelson algebras, residuated lattices and rough sets: A survey](https://arxiv.org/abs/2402.02606v2)

### Quotients force Boolean elements to one

**Remember:** Forcing x to one means killing its negation.

*True by definition.* MSC 06D35 (MV-algebras). arXiv math.RA. Level 4: research.

**Definition.** In an MV-algebra, an element x is Boolean when x ⊕ x = x. The localization at x is the universal homomorphism sending x to one: every homomorphism that sends x to one factors through it uniquely.

**Problem.** For a Boolean element x, localization is the quotient by the ideal generated by ¬x. This quotient imposes the single equation ¬x = 0.

**How the definition helps.** A homomorphism sends x to one exactly when it sends ¬x to zero, so the universal map is the one that kills ¬x. The ideal correspondence for MV-algebras makes this map the quotient by the ideal generated by ¬x (our own explanation).

**Paper or page:** [Separable MV-algebras and lattice-groups](https://arxiv.org/abs/2307.03978v2). It says: “the quotient q∶ A → A/⟨¬x⟩ has the universal property of A → A\[x⁻¹\].”

**Sources:**

- [Separable MV-algebras and lattice-groups](https://arxiv.org/abs/2307.03978v2)

### Radicals give semisimple quotients

**Remember:** Intersect all maximal ideals, then kill what every semisimple target kills.

*True by definition.* MSC 06D35 (MV-algebras). arXiv math.CT, math.RA. Level 4: research.

**Definition.** The radical of an MV-algebra is the intersection of all its maximal proper ideals. An MV-algebra is semisimple if its radical equals {0}.

**Problem.** Every map from an MV-algebra A to a semisimple MV-algebra factors uniquely through A modulo its radical. The quotient is itself semisimple.

**How the definition helps.** A map to a semisimple target sends the source radical to zero, so it factors uniquely through the quotient. Indeed, inverse images of maximal ideals are maximal, so the radical lands in every maximal ideal of the target, and these intersect in zero (our own proof). The maximal ideals of the quotient correspond to those of A, so the quotient is semisimple.

**Paper or page:** [A Galois Theory and a Pretorsion Theory in MV-Algebras](https://arxiv.org/abs/2310.11006v1). It says: “given a morphism of MV-algebras g∶ A → i(B), where B is semisimple, we want to prove that there exists a unique morphism of MV-algebras g̃∶ S(A) → B”

**Sources:**

- [A Galois Theory and a Pretorsion Theory in MV-Algebras](https://arxiv.org/abs/2310.11006v1)

### Powersets form overlap algebras constructively

**Remember:** Overlap means sharing a point, and shared points decide inclusion.

*Makes the theorem clean to state or prove.* MSC 06E75 (Generalizations of Boolean algebras), 03F65, 06B23. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** An overlap algebra is a complete lattice with a symmetric relation \#, read "overlaps", that obeys three laws. If x \# y then x \# (x ∧ y), and x \# ⋁S exactly when x \# s for some s in S. Also x ≤ y whenever every z overlapping x also overlaps y.

**Problem.** Constructively, subsets overlap when their intersection contains an element. This makes every powerset an overlap algebra, although a powerset need not be Boolean. Classically, overlap algebras are exactly the complete Boolean algebras.

**How the definition helps.** For subsets, an element of the intersection witnesses symmetry, the meet law and the join law (our own check). Testing overlap with each singleton recovers inclusion. Classically, the overlap representation theorem identifies overlap with having a nonzero meet in a complete Boolean algebra.

**Paper or page:** [Overlap Algebras: a Constructive Look at Complete Boolean Algebras](https://arxiv.org/abs/1904.13320v3). It says: “Sambin's notion of an overlap algebra, although classically equivalent to that of a complete Boolean algebra, has powersets and other natural structures as instances.”

**Sources:**

- [Francesco Ciraulo, Michele Contente, Overlap Algebras: a Constructive Look at Complete Boolean Algebras, Logical Methods in Computer Science 16(1) (2020), arXiv:1904.13320](https://arxiv.org/abs/1904.13320v3)

### Multiplicative filters form frames

**Remember:** A filter contains the unit, all finite products, and everything above them.

*True by definition.* MSC 06F07 (Quantales). arXiv math.RA. Level 4: research.

**Definition.** In a commutative quantale whose unit is greatest, a multiplicative filter is an upward closed subset containing the unit and closed under products. Order the filters by inclusion.

**Problem.** The filters form a frame, meaning that binary intersections distribute over arbitrary joins.

**How the definition helps.** Distributivity reduces to F ∩ ⋁G<sub>i</sub> ⊆ ⋁(F ∩ G<sub>i</sub>), since the other inclusion follows from monotonicity. Take a in F above a product of factors from the G<sub>i</sub>, and replace each factor x by x ∨ a (our own proof). Expanding gives the old product plus terms at most a, since the unit is greatest, so a lies in ⋁(F ∩ G<sub>i</sub>).

**Paper or page:** [Commutative Quantale and Localization](https://arxiv.org/abs/2508.02991v1). It says: “ℱ · 𝒢 = ℱ ∩ 𝒢”

**Sources:**

- [Commutative Quantale and Localization](https://arxiv.org/abs/2508.02991v1)
