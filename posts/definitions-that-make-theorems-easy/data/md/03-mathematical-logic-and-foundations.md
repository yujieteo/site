### Equal truth functions let equivalent formulas replace each other

**Remember:** Same inputs and outputs mean the replacement changes nothing.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A formula gives a truth function, a rule that returns true or false for each assignment of values to its letters. Two formulas are logically equivalent when their truth functions agree on every assignment to the letters in either formula.

**Problem.** Replacing any subformula by a logically equivalent one leaves the whole propositional formula logically equivalent to the original.

**How the definition helps.** Each operation uses only its inputs’ truth values, so replacing one input by an equal value preserves its output. Our own argument repeats this step from the replaced part to the whole formula. Defining equivalence through a proof of “if and only if” would instead require rules for replacing equivalent parts.

**Wikipedia:** [Logical equivalence](https://en.wikipedia.org/wiki/Logical_equivalence). It says: “if they have the same truth value in every model.”

**Sources:** none listed. No primary source with a working link was found.

### False rows build conjunctive normal form

**Remember:** One clause rules out one false row.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A clause joins letters or their negations with OR. A conjunctive normal form joins clauses with AND. Its truth-table construction uses one clause for each false row.

**Problem.** Every propositional formula has an equivalent conjunctive normal form.

**How the definition helps.** Each clause rejects exactly its designated row, so their conjunction has the required truth table. In each clause, negate the letters that are true on its row and leave the others unchanged. This replaces repeated algebraic rewrites with a single construction. In our own convention, an empty conjunction is true and an empty clause is false.

**Wikipedia:** [Conjunctive normal form](https://en.wikipedia.org/wiki/Conjunctive_normal_form). It says: “A CNF equivalent of a formula can be derived from its truth table.”

**Paper or page:** [Existence of Conjunctive Normal Form of Statement](https://proofwiki.org/wiki/Existence_of_Conjunctive_Normal_Form_of_Statement). It says: “Any propositional formula can be expressed in conjunctive normal form (CNF).”

**Sources:** none listed. No primary source with a working link was found.

### Finite truth tables decide propositional validity

**Remember:** Check only the letters you see.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A truth table lists every way to give the letters in a formula true or false values. Each row also gives the resulting value of the formula.

**Problem.** A propositional formula is valid, or true under every assignment, exactly when every row is true. Checking these finitely many rows decides validity.

**How the definition helps.** Each row covers every assignment that matches it on the letters in the formula. Our own argument uses induction on how the formula is built to show that other letters cannot affect its value.

**Paper or page:** [Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Suppose that v₁ and v₂ are valuations that agree on the propositional variables occurring in A”

**Sources:** none listed. No primary source with a working link was found.

### Material implication turns a premise into an antecedent

**Remember:** The same counterexample refutes both claims.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** An assignment gives each letter a truth value. The implication A → B is false exactly when A is true and B is false. A conclusion follows from premises when every assignment making all the premises true also makes the conclusion true.

**Problem.** B follows from a set of premises together with A exactly when A → B follows from those premises alone.

**How the definition helps.** Both sides fail exactly when an assignment makes every original premise and A true but makes B false. Our own comparison uses a proof system based on axioms, where moving a premise into an implication requires a deduction theorem.

**Paper or page:** [Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Γ ⊨ A → B if and only if Γ ∪ {A} ⊨ B.”

**Sources:** none listed. No primary source with a working link was found.

### True rows give a unique full disjunctive normal form

**Remember:** Take one full conjunction per true row, then join them with OR.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A full disjunctive normal form joins distinct terms with OR. Each term joins all listed letters with AND in order, using each letter once, either plain or negated. An empty AND means true, and an empty OR means false.

**Problem.** Every rule assigning true or false to each row of a finite truth table has one full disjunctive normal form, up to term order.

**How the definition helps.** Each term picks out exactly one row, since it specifies a value for every letter. Take the term for each true row. In our own uniqueness argument, omitting or adding any term changes its row’s value.

**Wikipedia:** [Disjunctive normal form](https://en.wikipedia.org/wiki/Disjunctive_normal_form). It says: “The full DNF of a formula can be read off its truth table.”

**Paper or page:** [Existence of Disjunctive Normal Form of Statement](https://proofwiki.org/wiki/Existence_of_Disjunctive_Normal_Form_of_Statement). It says: “Any propositional formula can be expressed in disjunctive normal form (DNF).”

**Sources:** none listed. No primary source with a working link was found.

### Universal statements about S conflict only when S is nonempty

**Remember:** If there are no unicorns, all unicorns fly and no unicorn flies.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In modern logic, 'all S are P' means ∀x (S(x) ⟹ P(x)), and 'no S are P' means ∀x (S(x) ⟹ ¬P(x)). Two statements are contrary when they cannot both be true. They are subcontrary when they cannot both be false.

**Problem.** The traditional square of opposition says that 'all S are P' and 'no S are P' are contrary. It says that 'some S are P' and 'some S are not P' are subcontrary. Under the modern reading, these laws hold exactly when something is S.

**How the definition helps.** An element of S must either satisfy P or fail P (our own argument). It therefore falsifies one universal statement and witnesses one particular statement. If S is empty, both universals are true and both particulars are false.

**Paper or page:** [Universal Affirmative and Universal Negative are Contrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_and_Universal_Negative_are_Contrary_iff_First_Predicate_is_not_Vacuous), [Particular Affirmative and Particular Negative are Subcontrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Particular_Affirmative_and_Particular_Negative_are_Subcontrary_iff_First_Predicate_is_not_Vacuous). It says: “Using the symbology of predicate logic: ∃x: S(x) ⟺ ¬((∀x: S(x) ⟹ P(x)) ∧ (∀x: S(x) ⟹ ¬P(x)))”

**Sources:**

- [ProofWiki, Universal Affirmative and Universal Negative are Contrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_and_Universal_Negative_are_Contrary_iff_First_Predicate_is_not_Vacuous)
- [ProofWiki, Particular Affirmative and Particular Negative are Subcontrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Particular_Affirmative_and_Particular_Negative_are_Subcontrary_iff_First_Predicate_is_not_Vacuous)

### Without existential import, all-S-are-P and some-S-are-not-P are exact opposites

**Remember:** If nothing is an S, then every claim about all S is true.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In modern logic, 'all S are P' means ∀x (S(x) ⟹ P(x)). This statement is true when nothing is an S. Traditional logic gave it existential import, which means that it also claimed that some S exists.

**Problem.** With the modern reading, 'all S are P' and 'some S is not P' are contradictory: exactly one is true. The traditional rule 'all S are P, so some S is P' holds only when some S exists.

**How the definition helps.** The modern reading makes 'all S are P' the exact negation of 'some S is not P', by the usual rules for negating quantifiers. With existential import, both would be false when there is no S, so they would not be contradictory; this point is our own. The cost is the old rule of subalternation, which ProofWiki shows needs the condition ∃x: S(x). So the modern definition keeps the contradictory pairs exact and moves the empty case into one extra condition.

**Paper or page:** [Universal Affirmative and Particular Negative are Contradictory](https://proofwiki.org/wiki/Universal_Affirmative_and_Particular_Negative_are_Contradictory), [Universal Affirmative implies Particular Affirmative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_implies_Particular_Affirmative_iff_First_Predicate_is_not_Vacuous), [Universal Negative implies Particular Negative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Negative_implies_Particular_Negative_iff_First_Predicate_is_not_Vacuous). It says: “¬((∀x: S(x) ⟹ P(x)) ⟺ (∃x: S(x) ∧ ¬P(x)))”

**Sources:**

- [ProofWiki, Universal Affirmative and Particular Negative are Contradictory](https://proofwiki.org/wiki/Universal_Affirmative_and_Particular_Negative_are_Contradictory)
- [ProofWiki, Universal Affirmative implies Particular Affirmative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_implies_Particular_Affirmative_iff_First_Predicate_is_not_Vacuous)
- [ProofWiki, Universal Negative implies Particular Negative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Negative_implies_Particular_Negative_iff_First_Predicate_is_not_Vacuous)

### Binary digits count finite subsets

**Remember:** A finite subset is a binary number with finitely many ones.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Call a set countable if its elements admit distinct nonnegative integer labels. Encode each finite subset by the integer whose binary expansion has ones exactly at its members’ labels.

**Problem.** The finite subsets of a countable set form a countable set.

**How the definition helps.** The code supplies the distinct integer labels that countability requires. Our own proof replaces separate lists for the different subset sizes with one encoding. Uniqueness of binary expansion ensures that different subsets receive different labels. The empty subset receives zero.

**Paper or page:** [Set of Finite Subsets of Countable Set is Countable](https://proofwiki.org/wiki/Set_of_Finite_Subsets_of_Countable_Set_is_Countable). It says: “Then the set of finite subsets of A is countable.”

**Sources:** none listed. No primary source with a working link was found.

### Binary indicators count every subset of a finite set

**Remember:** Read membership as one binary digit per element.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Identify the power set of A, the set of all its subsets, with indicator functions on A. Each indicator has value 1 for members of its subset and 0 for the other elements.

**Problem.** A set with n elements has exactly 2ⁿ subsets.

**How the definition helps.** Each position of the indicator has two independent choices, so the finite product rule gives the count. In our own account, the work moves to proving the descriptions agree. Recover the subset by keeping the inputs where its indicator is 1.

**Paper or page:** [Cardinality of Power Set of Finite Set](https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Finite_Set). It says: “\|𝒫(S)\| = 2ⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Counting by lists with repeats makes the rationals countable

**Remember:** List every fraction and let repeats stay.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A set is countable if it is empty or is the range of a list indexed by the natural numbers. This allows repetition, unlike counting by a one-to-one list.

**Problem.** The rational numbers form a countably infinite set.

**How the definition helps.** In our own proof, repeated fractions do not matter because the list only needs to reach each rational. List integer pairs (p, q) with q positive by increasing \|p\| + q, in any order within each finite group. The fractions p/q cover all rationals, including the infinitely many integers. Keeping first appearances converts this list to a one-to-one list.

**Paper or page:** [Rational Numbers are Countably Infinite](https://proofwiki.org/wiki/Rational_Numbers_are_Countably_Infinite). It says: “The set ℚ of rational numbers is countably infinite.”

**Sources:** none listed. No primary source with a working link was found.

### Measuring size by one-to-one correspondence settles Galileo's paradox

**Remember:** Pair them off: squares and integers match, so they are equally many.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Two sets have the same cardinality if there is a one-to-one correspondence between them. A set is smaller than another if it maps one-to-one into it, but no one-to-one correspondence between them exists.

**Problem.** The positive perfect squares and the positive integers have the same cardinality, although the positive squares form a proper subset.

**How the definition helps.** The map sending each positive integer to its square is a one-to-one correspondence. Each positive square has exactly one positive square root (our own argument).

**Wikipedia:** [Galileo's paradox](https://en.wikipedia.org/wiki/Galileo%27s_paradox). It says: “it is possible to define comparisons amongst infinite sets in a meaningful way (by which definition the two sets, integers and squares, have "the same size"), and that by this definition some infinite sets are strictly larger than others.”

**Sources:**

- [Cantor, G. (1878). Ein Beitrag zur Mannigfaltigkeitslehre. Journal für die reine und angewandte Mathematik 84, 242–258.](https://doi.org/10.1515/crll.1878.84.242)

### Subsets keep their countable labels

**Remember:** A subset keeps the labels it already has.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A set is countable if there is an injection from it into the natural numbers.

**Problem.** Every subset of a countable set is countable, including the empty set.

**How the definition helps.** An injection on the whole set remains an injection on every subset. In our own comparison, a list indexed by all natural numbers cannot list the empty set. To recover the usual enumeration of an infinite subset, list its labels in increasing order.

**Wikipedia:** [Countable set](https://en.wikipedia.org/wiki/Countable_set). It says: “A subset of a countable set is countable.”

**Sources:** none listed. No primary source with a working link was found.

### Two-valued functions turn Cantor’s diagonal into a bit flip

**Remember:** Flip the entry where each row meets its own label.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The power set of A usually means the set of all subsets of A. Instead, use indicator functions on A that return 1 at members and 0 elsewhere.

**Problem.** No function from A onto its power set exists. The power set is strictly larger than A.

**How the definition helps.** Our own proof flips the bit at x in the indicator assigned to x, so the resulting indicator differs from every assigned one. This gives a missing subset because the inputs marked 1 recover a subset from any indicator. In the other direction, sending x to the set containing only x gives distinct subsets for distinct inputs.

**Paper or page:** [Cantor's Theorem](https://proofwiki.org/wiki/Cantor's_Theorem). It says: “There is no surjection from a set S to its power set for any set S.”

**Sources:** none listed. No primary source with a working link was found.

### A product point supplies defaults for every coordinate projection

**Remember:** Keep a default tuple and replace the coordinate you want.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A point in an indexed Cartesian product assigns one allowed value to each coordinate. A coordinate projection reads the value at one specified coordinate. A right inverse assigns a product point to each allowed value so that the projection returns that value.

**Problem.** If a Cartesian product is nonempty, each coordinate projection has a right inverse. Thus each projection maps onto its factor.

**How the definition helps.** In our own construction, a fixed product point supplies defaults at all the other coordinates. Replace the specified coordinate by the desired value, and the projection returns it. Without a product point, the projection from {0} × ∅ to {0} misses its only target.

**Paper or page:** [Projection is Surjection/Family of Sets](https://proofwiki.org/wiki/Projection_is_Surjection/Family_of_Sets). It says: “is a surjection.”

**Sources:** none listed. No primary source with a working link was found.

### Adding indicator functions modulo two makes symmetric difference associative

**Remember:** Membership adds modulo two, and that addition is associative.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 06E20. arXiv math.LO, math.CO. Level 1: early undergraduate.

**Definition.** For a subset A of a common set U, its indicator equals 1 on A and 0 elsewhere in U. The symmetric difference of two subsets consists of the points where their indicators sum to 1 modulo two.

**Problem.** For any three subsets A, B and C of a common set, A Δ (B Δ C) = (A Δ B) Δ C.

**How the definition helps.** At each point, both sides add the same three indicators modulo two (our own argument). Associativity of this addition gives identical indicators and hence identical sets.

**nLab:** [symmetric difference](https://ncatlab.org/nlab/show/symmetric+difference). It says: “The term symmetric difference, however, is usually used as the addition in a Boolean ring and so interpreted as an associative operation”

**Wikipedia:** [Symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference). It says: “the indicator function (denoted here by χ) of the symmetric difference, being the XOR (or addition mod 2) of the indicator functions of its two arguments”

**Paper or page:** [Symmetric Difference is Associative](https://proofwiki.org/wiki/Symmetric_Difference_is_Associative). It says: “Symmetric difference is associative”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence relations must state reflexivity, which symmetry and transitivity do not give

**Remember:** The empty relation is symmetric and transitive but relates nothing to itself.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 08A02. arXiv math.LO. Level 1: early undergraduate.

**Definition.** An equivalence relation on a set S is reflexive (x R x for every x), symmetric and transitive. The class of x is the set of all y with x R y.

**Problem.** Each element lies in its own equivalence class. So no class is empty and the classes cover S.

**How the definition helps.** Reflexivity puts each x in its own class, so the classes cover S and each class has a member. On {0, 1}, the relation containing only (1, 1) is symmetric and transitive (our own check). The class of 0 is empty because nothing relates to 0.

**Paper or page:** [Symmetric and Transitive therefore Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_therefore_Reflexive), [Symmetric and Transitive Relation is not necessarily Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_Relation_is_not_necessarily_Reflexive), [Equivalence Class is not Empty](https://proofwiki.org/wiki/Equivalence_Class_is_not_Empty). It says: “Unless it is the case that ∀x ∈ S: ∃y ∈ S: x ℛ y, it is not necessarily the case that also y ℛ x, and so the reasoning does not follow.”

**Sources:**

- [ProofWiki, Symmetric and Transitive therefore Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_therefore_Reflexive)
- [ProofWiki, Symmetric and Transitive Relation is not necessarily Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_Relation_is_not_necessarily_Reflexive)
- [ProofWiki, Equivalence Class is not Empty](https://proofwiki.org/wiki/Equivalence_Class_is_not_Empty)

### Fiber classes identify the quotient of a domain with its image

**Remember:** One distinct output gives one class of inputs.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The image of a function is the set of values it takes. For each such value, its fiber consists of all inputs giving that value. We can form the quotient by taking these nonempty fibers as its elements.

**Problem.** Sending each fiber to its output pairs every element of the quotient with exactly one element of the image, and vice versa.

**How the definition helps.** Our own description already gives exactly one nonempty fiber for each output in the image. In the usual quotient, two inputs belong to the same class exactly when they give the same output. Thus those classes are exactly the nonempty fibers.

**Paper or page:** [Constructive semigroups with apartness -- a state of the art](https://arxiv.org/abs/2304.07290). It says: “If f is surjective, then φ is a bijection, i.e. we have T ≅ S/ker f.”

**Sources:** none listed. No primary source with a working link was found.

### Flat tuples let Cartesian products be regrouped without changing coordinates

**Remember:** Keep the coordinate labels and forget the parentheses.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Define a tuple as a function from coordinate labels to values. Combine tuples on disjoint label sets by joining their functions rather than nesting them as ordered pairs.

**Problem.** Combining three blocks of labeled coordinates yields the same tuples in either grouping. Each of the usual nested Cartesian products is in bijection with this set of tuples.

**How the definition helps.** In our own construction, combining coordinates takes the union of their sets of labeled pairs, and union is associative. Restricting the combined function to each block recovers its tuple. Pairing these tuples in the specified order recovers either nested product.

**Wikipedia:** [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product). It says: “If a tuple is defined as a function on {1, 2, ..., n}”

**Paper or page:** [Cartesian Product is not Associative](https://proofwiki.org/wiki/Cartesian_Product_is_not_Associative). It says: “A × (B × C) ≠ (A × B) × C”

**Sources:** none listed. No primary source with a working link was found.

### Indicators split across disjoint unions

**Remember:** Choose the indicator on each piece independently.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Represent a subset by a function that gives 1 on the subset and 0 off it. This replaces the description of the subset as an unordered collection of elements.

**Problem.** The subsets of a disjoint union correspond one-to-one to pairs of subsets of its two parts.

**How the definition helps.** An indicator on a disjoint union amounts to one independent choice of indicator on each part. In our own proof, restrict the function to recover the pair. Conversely, the two functions fit together because their domains are disjoint. The inputs with value 1 recover the original subset.

**nLab:** [characteristic function](https://ncatlab.org/nlab/show/characteristic+function). It says: “that takes a in X to the truth value of the statement that a ∈ U.”

**Paper or page:** [Bijection between Power Set of Disjoint Union and Cartesian Product of Power Sets](https://proofwiki.org/wiki/Bijection_between_Power_Set_of_Disjoint_Union_and_Cartesian_Product_of_Power_Sets). It says: “Then there exists a bijection between 𝒫(S ∪ T) and (𝒫S) × (𝒫T).”

**Sources:** none listed. No primary source with a working link was found.

### Injections preserve image intersections

**Remember:** An output shared by two images has the same input in both sets.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Use the definition of an injection that asks each output to have at most one input. The image of a set contains the outputs reached from that set.

**Problem.** A function preserves every intersection of two sets under direct image exactly when it is injective.

**How the definition helps.** Injectivity forces two inputs for a shared output to be the same input. That input belongs to both sets, which proves the difficult inclusion. Conversely, two distinct inputs with the same output give disjoint singleton sets whose images overlap. In our own example, squaring sends both −1 and 1 to 1.

**Paper or page:** [Image of Intersection under Injection](https://proofwiki.org/wiki/Image_of_Intersection_under_Injection). It says: “∀ A, B ⊆ S: f\[A ∩ B\] = f\[A\] ∩ f\[B\]”

**Sources:** none listed. No primary source with a working link was found.

### Integers as classes of pairs of naturals inherit their laws from ℕ

**Remember:** Read the pair (x, y) as x − y, but never subtract.

*True by definition. Confidence: medium.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 20M14. arXiv math.LO, math.GR. Level 1: early undergraduate.

**Definition.** Take pairs of nonnegative integers and identify (a, b) with (c, d) exactly when a + d = c + b. An integer is one equivalence class, and addition adds representatives coordinate by coordinate.

**Problem.** Addition of pairs gives a well-defined operation on the classes, and the result is a group that contains the natural numbers.

**How the definition helps.** Adding the two equalities for equivalent representatives proves their sums equivalent (our own check). Associativity follows coordinate by coordinate, and \[(0, 0)\] is the identity. Swapping a pair gives its inverse because (a + b, b + a) represents zero. The map n ↦ \[(n, 0)\] preserves sums and is injective.

**Paper or page:** [Integer Addition is Well-Defined](https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined), [Inverse Completion of Natural Numbers](https://proofwiki.org/wiki/Inverse_Completion_of_Natural_Numbers). It says: “(x₁, y₁) ⊠ (x₂, y₂) ⟺ x₁ + y₂ = x₂ + y₁”

**Sources:**

- [ProofWiki, Integer Addition is Well-Defined](https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined)
- [ProofWiki, Inverse Completion of Natural Numbers](https://proofwiki.org/wiki/Inverse_Completion_of_Natural_Numbers)

### Kuratowski's definition reduces ordered pairs, and so relations, to sets

**Remember:** The first element is in both sets, and that records which came first.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Kuratowski (1921) defined the ordered pair as (a, b) = {{a}, {a, b}}.

**Problem.** With this definition, (a, b) = (c, d) if and only if a = c and b = d.

**How the definition helps.** The intersection of the pair’s members is {a}, and their union is {a, b} (our own proof). Removing a from that union leaves {b} if b differs from a and leaves nothing if b equals a. Thus equal pairs determine equal coordinates, and equal coordinates give equal pairs by construction.

**Wikipedia:** [Ordered pair](https://en.wikipedia.org/wiki/Ordered_pair). It says: “This can be done in several ways and has the advantage that existence and the characteristic property can be proven from the axioms that define the set theory.”

**Sources:**

- [Kuratowski, C. (1921). Sur la notion de l'ordre dans la Théorie des Ensembles. Fundamenta Mathematicae 2, 161–171.](https://doi.org/10.4064/fm-2-1-161-171)

### Mapping sets of possible outputs makes relation composition associative

**Remember:** Send the whole set of possible outputs into the next rule.

*True by definition. Confidence: medium.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Treat a relation from A to B as a rule that assigns each input a subset of B, its possible outputs. On a set of inputs, take the union of all their possible outputs. Compose these rules as functions on sets of inputs.

**Problem.** Composing three relations gives the same relation in either grouping.

**How the definition helps.** In our own proof, the rules compose as ordinary functions, so regrouping changes nothing. Two successive rules collect exactly the outputs reachable through some intermediate value, as usual relation composition requires. Applying the resulting rule to each one-element set recovers every pair of the relation.

**Paper or page:** [Composition of Relations is Associative](https://proofwiki.org/wiki/Composition_of_Relations_is_Associative). It says: “The composition of relations is an associative binary operation:”

**Sources:** none listed. No primary source with a working link was found.

### Maps as relations make mⁿ count maps even between empty sets

**Remember:** One map leaves the empty set, and none enters it from a nonempty set.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 05A05. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** A mapping from X to Y is a relation R ⊆ X × Y. It relates each x in X to exactly one y in Y. When X = ∅, the only relation is the empty one, and it meets this condition vacuously.

**Problem.** For all m, n ≥ 0, including empty sets, there are exactly mⁿ mappings from an n-element set to an m-element set.

**How the definition helps.** Each input needs exactly one output, so the product rule gives one factor of m per input (our own count). With no inputs the empty relation qualifies, giving the empty product 1. With inputs but no outputs, no relation qualifies.

**Paper or page:** [Empty Mapping to Empty Set is Bijective](https://proofwiki.org/wiki/Empty_Mapping_to_Empty_Set_is_Bijective), [Empty Mapping is Injective](https://proofwiki.org/wiki/Empty_Mapping_is_Injective), [Relation to Empty Set is Mapping iff Domain is Empty](https://proofwiki.org/wiki/Relation_to_Empty_Set_is_Mapping_iff_Domain_is_Empty), [Cardinality of Set of All Mappings from Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_from_Empty_Set). It says: “Let ν: ∅ → ∅ be an empty mapping. Then ν is a bijection.”

**Sources:**

- [ProofWiki, Empty Mapping to Empty Set is Bijective](https://proofwiki.org/wiki/Empty_Mapping_to_Empty_Set_is_Bijective)
- [ProofWiki, Empty Mapping is Injective](https://proofwiki.org/wiki/Empty_Mapping_is_Injective)
- [ProofWiki, Relation to Empty Set is Mapping iff Domain is Empty](https://proofwiki.org/wiki/Relation_to_Empty_Set_is_Mapping_iff_Domain_is_Empty)
- [ProofWiki, Cardinality of Set of All Mappings from Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_from_Empty_Set)

### Quotient maps use any representative

**Remember:** To give a class a value, give every member the same value.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** An equivalence relation partitions S into classes. A quotient map q sends S onto Q and gives equivalent elements the same image. Require each function f on S that is constant on classes to factor uniquely as f = g ∘ q.

**Problem.** The set of equivalence classes satisfies this definition when q sends each element to its class.

**How the definition helps.** The factorization rule specifies exactly what a function on the quotient must do. Our own verification starts with the usual construction of Q as the set of classes. Assign each class the value of f at any member. Constancy makes this assignment independent of the member, and every class has a member, so the assignment is unique.

**nLab:** [quotient set](https://ncatlab.org/nlab/show/quotient+set). It says: “two elements are now considered equal if in S they were merely equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Reading sets as truth tests gives De Morgan’s laws

**Remember:** Not every means at least one fails, and none means all fail.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Identify a subset of a fixed set U with its yes-or-no membership test. Union asks whether at least one test says yes, and intersection asks whether every test says yes. Complement reverses the answer.

**Problem.** For any family of subsets of U, the complement of its intersection is the union of the complements. The complement of its union is the intersection of the complements.

**How the definition helps.** Negating “all pass” gives “at least one fails,” and negating “at least one passes” gives “all fail.” Our own proof uses these rules of classical logic and the fact that identical membership tests describe the same set.

**Paper or page:** [De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Intersection](https://proofwiki.org/wiki/De_Morgan's_Laws_(Set_Theory)/Set_Complement/Family_of_Sets/Complement_of_Intersection), [De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Union](https://proofwiki.org/wiki/De_Morgan's_Laws_(Set_Theory)/Set_Complement/Family_of_Sets/Complement_of_Union). It says: “be a family of sets, all of which are subsets of a universal set 𝕌.”

**Sources:** none listed. No primary source with a working link was found.

### Reversing a function graph tests for a two-sided inverse

**Remember:** Turn the arrows around and check for one arrow per input.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The graph of a function f from A to B contains the pairs (a, f(a)). Its inverse relation contains those pairs in reverse order. A two-sided inverse is a function that undoes f in both orders.

**Problem.** A function has a two-sided inverse exactly when every element of B occurs once as the first entry of a reversed pair.

**How the definition helps.** Our own test reads the inverse directly from the reversed pairs. Each target must occur at least once because the inverse needs an output, and at most once because that output must be unique. Following a pair and then its reverse gives the starting value in either order.

**Paper or page:** [Bijective Relation has Left and Right Inverse](https://proofwiki.org/wiki/Bijective_Relation_has_Left_and_Right_Inverse), [Bijection iff exists Mapping which is Left and Right Inverse](https://proofwiki.org/wiki/Bijection_iff_exists_Mapping_which_is_Left_and_Right_Inverse). It says: “Let ℛ⁻¹ be the inverse relation of ℛ.”

**Sources:** none listed. No primary source with a working link was found.

### Tags let maps on overlapping sets combine without conflict

**Remember:** The label tells you which rule to use.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The disjoint union of an indexed family consists of pairs (i, x), where i labels a set and x belongs to that set. Unlike an ordinary union, it keeps a separate copy for each label.

**Problem.** Suppose each set in the family has a function to the same target. Exactly one function on the disjoint union agrees with each given function on its labeled copy.

**How the definition helps.** Each pair names exactly one function, so apply that function to its second entry. In our own example, two functions sending the same shared element to 0 and 1 cannot combine on the ordinary union.

**nLab:** [disjoint union](https://ncatlab.org/nlab/show/disjoint+union). It says: “the set of all (ordered) pairs (i,a) with i in the index set I and a in Aᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Taking the empty intersection as the whole set keeps intersection order-reversing

**Remember:** Fewer sets to meet means a bigger intersection, and none gives everything.

*Makes the theorem clean to state or prove.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 03B10. arXiv math.LO. Level 1: early undergraduate.

**Definition.** For a family 𝓕 of subsets of U, its intersection consists of all x ∈ U belonging to every member of 𝓕. Thus the empty intersection contains every point of U.

**Problem.** For all families 𝓕 ⊆ 𝓖 of subsets of U, the empty family included, ⋂𝓖 ⊆ ⋂𝓕.

**How the definition helps.** A point meeting every requirement in 𝓖 also meets every requirement in its subfamily 𝓕 (our own argument). This includes an empty 𝓕 because it imposes no requirements.

**Paper or page:** [Intersection is Decreasing](https://proofwiki.org/wiki/Intersection_is_Decreasing), [Intersection of Empty Set](https://proofwiki.org/wiki/Intersection_of_Empty_Set). It says: “Then 𝓕 ⊆ 𝓖 ⟹ ⋂𝓖 ⊆ ⋂𝓕, where by convention ⋂∅ = U.”

**Sources:**

- [ProofWiki, Intersection is Decreasing](https://proofwiki.org/wiki/Intersection_is_Decreasing)
- [ProofWiki, Intersection of Empty Set](https://proofwiki.org/wiki/Intersection_of_Empty_Set)

### The cancellation tests make injections and surjections compose

**Remember:** Cancel one map at a time.

*True by definition. Confidence: medium.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** An injection has distinct outputs for distinct inputs, and a surjection reaches every target. Left cancellation means f ∘ u = f ∘ v implies u = v for all compatible functions u and v. Right cancellation uses u ∘ f = v ∘ f instead.

**Problem.** A composite of two injections is injective. A composite of two surjections is surjective.

**How the definition helps.** In our own proof, canceling two functions in succession cancels their composite. Injections allow left cancellation because equal outputs have equal inputs, and surjections allow right cancellation because every target is reached. Conversely, two functions from a one-element set detect an injection failure. Two functions that differ only at a missed target detect a surjection failure.

**Paper or page:** [Surjection iff Right Cancellable/Sufficient Condition](https://proofwiki.org/wiki/Surjection_iff_Right_Cancellable/Sufficient_Condition), [Injection iff Left Cancellable/Sufficient Condition](https://proofwiki.org/wiki/Injection_iff_Left_Cancellable/Sufficient_Condition). It says: “Then f is a surjection.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the natural numbers as a closure makes induction true by definition

**Remember:** The smallest closed set lies inside every closed set, so induction holds.

*True by definition.* MSC 03F30 (First-order arithmetic and fragments), 03E20. arXiv math.LO. Level 1: early undergraduate.

**Definition.** Following Dedekind, a Dedekind algebra is a set N with an element o and an injective function s from N to N. The element o is not a value of s. Also N is the closure of o under s: the smallest set that contains o and is closed under s.

**Problem.** Arithmetical induction: any set that contains o and is closed under s on N contains all of N.

**How the definition helps.** The closure of o under s lies inside every subset of N containing o and closed under s. For any X satisfying the induction hypotheses, X ∩ N is such a subset (our own argument). The closure equals N, so N ⊆ X.

**Paper or page:** [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Let N, s, o comprise a Dedekind algebra. Then for any set X: if o ∈ X and (∀n ∈ N ∩ X) s(n) ∈ X, then N ⊆ X.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Brackets in the definition of formula make every formula parse uniquely

**Remember:** Every bracket closes once, so every formula reads one way only.

*Rules out counterexamples.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Formulas are precisely the strings generated from propositional variables, ⊥ and ⊤ by these rules. From any formula B form ¬B. From any formulas B and C form (B ◦ C), where ◦ is ∧, ∨, → or ↔︎.

**Problem.** Unique readability: every formula is built by these rules in exactly one way. So definitions by recursion on formulas, such as the truth value under a valuation, are well defined.

**How the definition helps.** The first symbol identifies an atom, a negation or a bracketed binary formula (our own argument). In the binary case the prefix lemma uniquely determines the first operand because no formula properly extends another as a prefix. The following connective and remaining operand are then fixed, and induction determines the subparses. Without brackets, p ∧ q ∨ r permits two parses (our own example).

**Paper or page:** [Open Logic Project: Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “No proper initial segment of a formula is a formula.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Discharging an assumption makes the deduction theorem one rule

**Remember:** Close the assumption and write an implication.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In natural deduction, the rule for introducing A → B closes a proof of B under a temporary assumption A. That proof may leave A unused. Hilbert proofs instead use axioms and rules without that operation.

**Problem.** In natural deduction, B is provable from given premises and A exactly when A → B is provable from the premises alone.

**How the definition helps.** The rule for introducing → gives the forward direction in one step. Our own reverse step uses A and A → B to infer B. For Hilbert proofs, the work is an induction on the proof of B.

**nLab:** [deduction theorem](https://ncatlab.org/nlab/show/deduction+theorem). It says: “it is the introduction rule for the implication/function type in natural deduction.”

**Paper or page:** [First Order Logic: Axiomatic Deduction](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Γ ∪ {A} ⊢ B if and only if Γ ⊢ A → B.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal consistent sets supply satisfying truth assignments

**Remember:** A maximal consistent set supplies a whole truth assignment.

*Rules out counterexamples.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In classical propositional natural deduction, a set is consistent if no contradiction follows from its formulas. It is maximal consistent if it is consistent and adding any missing formula makes it inconsistent.

**Problem.** Every consistent set of propositional formulas has a truth assignment that makes all its formulas true.

**How the definition helps.** A maximal consistent set determines a valuation by declaring exactly its member letters true (our own construction). For {p ∨ q}, that rule alone makes both letters false. Lindenbaum’s lemma extends any consistent set to a maximal consistent set. The truth lemma identifies truth there with membership, so the valuation satisfies the original set.

**Paper or page:** [Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If Γ is consistent then Γ is satisfiable.”

**Sources:** none listed. No primary source with a working link was found.

### Proof trees let one proof replace an assumption

**Remember:** Replace an open assumption with its proof.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In propositional natural deduction, a proof is a finite tree whose branches show the premises of each rule. Mark each temporary assumption with the rule that closes it. The other assumption leaves stay open.

**Problem.** In propositional natural deduction, suppose one set of premises proves A and another set together with A proves B. The union of the two sets proves B.

**How the definition helps.** A tree lets our own construction insert a proof of A exactly where another proof uses A as an open assumption. Replace each such leaf with a copy and give its discharge marks fresh labels. This preserves every rule and leaves only assumptions from the two original sets open. In a numbered list of proof lines, the same construction also requires updating references to earlier lines.

**nLab:** [natural deduction](https://ncatlab.org/nlab/show/natural+deduction). It says: “we should annotate each bracket somehow to indicate which rule discharged that assumption.”

**Paper or page:** [First Order Logic: Natural Deduction](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If Γ ⊢ A and {A} ∪ Δ ⊢ B, then Γ ∪ Δ ⊢ B.”

**Sources:** none listed. No primary source with a working link was found.

### Valuations as points of a compact product space give propositional compactness

**Remember:** A formula tests only finitely many coordinates.

*True by definition.* MSC 03B05 (Classical propositional logic), 54B10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A valuation assigns true or false to each propositional variable. Treat the set of valuations as a product of two-point discrete spaces, one for each variable. A basic open set fixes the values of finitely many variables.

**Problem.** A set of propositional formulas has a satisfying valuation if every finite subset has one.

**How the definition helps.** The valuations that satisfy one formula form a closed set, because the formula uses only finitely many variables (our own argument). Finite satisfiability says that every finite family of these closed sets has a common point. By compactness the whole family has a common point, which is a valuation that satisfies every formula. The work moves into Tychonoff's theorem, which Wikipedia names as the source of propositional compactness.

**Wikipedia:** [Compactness theorem](https://en.wikipedia.org/wiki/Compactness_theorem). It says: “The compactness theorem for the propositional calculus is a consequence of Tychonoff's theorem”

**Sources:** none listed. No primary source with a working link was found.

### Defining consequence by finite proofs makes compactness follow from completeness

**Remember:** A finite proof can use only finitely many premises.

*True by definition.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A sentence is a semantic consequence of some premises if it is true in every model of the premises. It is a proof-theoretic consequence if a formal proof derives it from the premises. A formal proof is a finite list of steps.

**Problem.** If a first-order sentence is a semantic consequence of a set of premises, it is a semantic consequence of some finite subset.

**How the definition helps.** Completeness gives a formal proof from the premises. Its finitely many steps use only finitely many premises. Soundness makes the sentence a semantic consequence of those premises (our own wording).

**nLab:** [compactness theorem](https://ncatlab.org/nlab/show/compactness+theorem). It says: “the essential finitude of the notion of formal proof”

**Sources:** none listed. No primary source with a working link was found.

### Fresh parameters make universal introduction sound

**Remember:** An arbitrary object needs a name with no prior commitments.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic), 03C07. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In natural deduction, universal introduction turns P(c) into ∀x P(x). Here c is a new name that occurs neither in the open assumptions nor in P(x).

**Problem.** If the open assumptions entail P(c) for a fresh name c, they also entail ∀x P(x). Thus universal introduction preserves truth from the open assumptions.

**How the definition helps.** Our own argument lets c name any object because changing its value leaves the open assumptions and P(x) unchanged. The substitution lemma identifies truth of P(c) with truth of P(x) at that object. Without freshness, assume P(c) in a two-object structure where only c satisfies P. The assumption holds there, but ∀x P(x) fails.

**Paper or page:** [First Order Logic: Natural Deduction](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If c is a constant not occurring in Γ or A(x) and Γ ⊢ A(c), then Γ ⊢ ∀x A(x).”

**Sources:** none listed. No primary source with a working link was found.

### Nonempty domains keep the classical laws of logic valid

**Remember:** Classical logic assumes that at least one thing exists.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic), 03B60. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In standard first-order semantics, a structure has a domain D with at least one element. Each individual variable ranges over D.

**Problem.** With nonempty domains, ∀x φ → ∃x φ and ∃x (x = x) are valid. If x is not free in ψ, then (∀x φ) ∧ ψ is equivalent to ∀x (φ ∧ ψ). Such quantifier moves help put formulas in prenex form.

**How the definition helps.** Any domain element witnesses reflexivity and turns universal truth into an existential witness (our own argument). A fixed ψ has the same truth value at every choice of x, and at least one such choice exists. In an empty domain the first two laws fail, and false ψ makes the conjunction law fail.

**Wikipedia:** [Empty domain](https://en.wikipedia.org/wiki/Empty_domain), [Free logic](https://en.wikipedia.org/wiki/Free_logic), [Prenex normal form](https://en.wikipedia.org/wiki/Prenex_normal_form). It says: “In traditional and classical logic, domains are restrictedly non-empty in order that certain theorems be valid.”

**Sources:**

- [Quine, W. V. (1951). Mathematical Logic, revised edition. Harvard University Press.](https://doi.org/10.4159/9780674042469)
- [Hailperin, T. (1957). A theory of restricted quantification I. Journal of Symbolic Logic 22, 19–35.](https://doi.org/10.2307/2964055)

### Witness functions remove existential quantifiers without losing satisfiability

**Remember:** Name the witness as a function of earlier choices.

*Makes the theorem clean to state or prove.* MSC 03B10 (Classical first-order logic), 03C07. arXiv math.LO. Level 2: later undergraduate.

**Definition.** First put all quantifiers at the front, using a different variable for each. A Skolem function names a choice of witness for an existential variable from the values of the earlier universal variables. Use a fresh function for each witness, or a fresh constant if there are no inputs.

**Problem.** Every first-order sentence can be converted to a sentence with only universal quantifiers, all at the front. The new sentence uses an expanded language and is satisfiable exactly when the original is.

**How the definition helps.** The functions let the new sentence name witnesses instead of quantifying over them. Our own proof first moves the quantifiers to the front, then chooses a witness for each tuple of earlier universal choices. A model of the new sentence supplies witnesses by evaluating the added functions.

**Wikipedia:** [Skolem normal form](https://en.wikipedia.org/wiki/Skolem_normal_form). It says: “it is satisfiable if and only if the original one is satisfiable.”

**Sources:** none listed. No primary source with a working link was found.

### Prime theories as worlds make the canonical intuitionistic model respect disjunction

**Remember:** Kripke disjunction needs a witness, so the worlds must be prime.

*Rules out counterexamples.* MSC 03B20 (Subsystems of classical logic (including intuitionistic logic)), 03F55. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A prime intuitionistic theory is consistent, contains everything it proves, and contains B or C whenever it contains B ∨ C. The canonical Kripke model orders these theories by inclusion and forces an atom exactly at theories containing it.

**Problem.** Truth lemma: in the Kripke model whose worlds are the prime sets, a formula is true at a world exactly when that world's set proves it. With Lindenbaum's lemma this gives completeness of intuitionistic logic: if Γ does not prove A, some world makes Γ true and A false.

**How the definition helps.** Primeness gives precisely the disjunction step in the truth lemma (our own argument). A deductively closed theory generated by p ∨ q contains neither disjunct, so membership there cannot interpret Kripke disjunction. The prime extension lemma supplies the implication step by extending a world with B while avoiding C whenever it omits B → C. The same lemma extends Γ while avoiding A, so the truth lemma gives a countermodel.

**Paper or page:** [Open Logic Project: Intuitionistic Logic: Soundness Completeness](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Intuitionistic Logic: Soundness Completeness](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If Γ ⊬ A, there is a Γ\* ⊇ Γ such that Γ\* is prime and Γ\* ⊬ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Church numerals express addition and multiplication by composing iterations

**Remember:** Apply the same function in succession to add, or nest iterations to multiply.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO. Level 2: later undergraduate.

**Definition.** The Church numeral for n is λf x. f(f(⋯(f x))), with n applications of f. A Scott numeral instead exposes the predecessor when its input is a successor.

**Problem.** For Church numerals m and n, the term λf x. m f (n f x) represents their sum. The term λf x. m (n f) x represents their product.

**How the definition helps.** Church numerals build in the iteration that arithmetic needs. The sum runs f first n times, then m more times, and the product repeats the n-fold iterate m times (our own). A construction with Scott numerals must instead supply the iteration (our own). The cost of the Church encoding appears in the predecessor, which the numeral does not expose directly (our own).

**Wikipedia:** [Mogensen–Scott encoding](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding), [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “Church numerals, on the other hand, already embody the primitive recursion and perform the folding / looping on their own”

**Paper or page:** [Open Logic Project: Lambda Calculus: Lambda Definability](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Multiplication is lambda definable by the term Mult ≡ λab. λfx. a (b f) x”

**Sources:** none listed. No primary source with a working link was found.

### Church numerals make a product m blocks of n applications

**Remember:** Repeat m times a step that itself repeats n times.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus). arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** The Church numeral for n is the operation that applies a function n times. The Church product of m and n is λf. m (n f), which uses the n-fold iterate as the step for m.

**Problem.** The Church product of the numerals for m and n is the Church numeral for m × n.

**How the definition helps.** By definition the product applies f in m blocks of n applications. What remains is the law that m blocks of n applications equal m × n applications, which induction on m proves. Ordinary recursive multiplication needs the same induction to describe repeated application.

**Wikipedia:** [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “The higher-order function that represents natural number n is a function that maps any function f to its n-fold composition.”

**Sources:** none listed. No primary source with a working link was found.

### Church-encoded lists make the fold of an append hold by definition

**Remember:** The left list starts where the right list finishes.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** A Church list represents a finite sequence by its right fold. The empty sequence returns the seed, and prepending x combines x with the tail’s fold. For encoded lists l and r, define append(l, r) = λc n. l c (r c n).

**Problem.** Folding an appended list equals folding the left list with the folded right list as its initial result.

**How the definition helps.** Under this encoding, folding a list means applying it, so the equation is the definition of append. Wikipedia gives this append and says that a Church list is its own fold. For ordinary lists, our own comparison proves the equation by induction on the left list. That same induction shows that the encoding sends ordinary append to Church append.

**Wikipedia:** [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “Since Church encoded list is its own folding function, folding it just means applying that function to the supplied arguments.”

**Sources:** none listed. No primary source with a working link was found.

### Scott numerals give the predecessor in a fixed number of reductions

**Remember:** The successor case receives the predecessor itself.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 2: later undergraduate.

**Definition.** Scott zero is Z = λz s. z. For each Scott numeral n, its successor is λz s. s n.

**Problem.** For an input already in Scott numeral form, the predecessor takes at most four function-application reductions to return the encoded result.

**How the definition helps.** A Scott successor passes its stored predecessor to the chosen handler. Use λn. n Z I with I = λm. m (our own calculation). Applying it to a successor takes one reduction to insert the numeral, two to select and apply its handler, and one to remove I. For zero, the first three reductions return Z.

**Wikipedia:** [Mogensen–Scott encoding](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding). It says: “The key difference is that Scott's handler's argument is the number's own predecessor Scott numeral, unprocessed, whereas Church's folding / looping function's argument is the result of folding / looping over its predecessor.”

**Sources:** none listed. No primary source with a working link was found.

### Working up to renaming of bound variables makes substitution always defined

**Remember:** Rename bound variables first, and substitution never captures.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** In the Open Logic text, putting a term R for the variable y in a lambda term M is defined only without capture. Capture means that a free variable of R would be bound by a λ inside M. Two terms are α-equivalent when they differ only by renaming bound variables, as λx.x and λz.z do.

**Problem.** For any M, R and y, some α-equivalent M′ and R′ make the substitution defined, and any two such results are α-equivalent. So substitution is a total operation on α-equivalence classes.

**How the definition helps.** Renaming the bound variables of M away from the free variables of R removes every capture (our own). A lemma in the text shows that α-equivalent inputs give α-equivalent results, so the choice of renaming does not matter. Without renaming, putting x for y in λx.y would give the identity λx.x and change the meaning (our own example). What stays hard is checking that later definitions and proofs, such as the Church–Rosser theorem, respect α-equivalence (our own).

**Paper or page:** [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “For any M, R, and y, there exists a pair of M′ and R′ such that M′ ≡α M, R ≡α R′ and M′\[R′/y\] is defined.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Filtrations through subformulas give modal logic K the finite model property

**Remember:** Merge worlds that the subformulas cannot tell apart; the model becomes finite.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** For a subformula-closed set Γ, group worlds agreeing on every formula in Γ and retain their truth values for atoms in Γ. A filtration on these classes includes every edge induced by an original edge. An edge from C to D requires A throughout D whenever □A belongs to Γ and holds throughout C.

**Problem.** The basic modal logic K has the finite model property: every satisfiable formula has a finite model. The Open Logic text shows the same for S5.

**How the definition helps.** The filtration lemma preserves the chosen formula on the quotient by its n subformulas, which has at most 2ⁿ classes (our own count). For K take just the induced edges. For S5 take their equivalence closure (our own argument). Truth of each selected □A agrees across every induced edge in S5, hence along every path, and reflexivity then gives A at its endpoint.

**Paper or page:** [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M\* is a filtration of M through Γ, then for every A ∈ Γ and w ∈ W, we have M, w ⊩ A if and only if M\*, \[w\] ⊩ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### The canonical model makes completeness of modal logic K immediate

**Remember:** Use maximal consistent worlds and send every boxed requirement to every successor.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** The canonical model of K takes maximal K-consistent sets of formulas as worlds. World w sees v exactly when v contains every A for which w contains □A. An atom holds at w exactly when w contains it.

**Problem.** Completeness: every formula valid in all Kripke frames is provable in K. A Kripke frame is a set of worlds with an accessibility relation, and K is the smallest normal modal logic.

**How the definition helps.** The canonical truth lemma identifies truth at each world with membership in its theory. If K does not prove φ, Lindenbaum’s lemma extends {¬φ} to a maximal K-consistent set. At that world φ fails, so φ is not valid on all frames (our own argument).

**Wikipedia:** [Kripke semantics](https://en.wikipedia.org/wiki/Kripke_semantics). It says: “The main application of canonical models are completeness proofs. Properties of the canonical model of K immediately imply completeness of K with respect to the class of all Kripke frames.”

**Sources:**

- [D. Makinson, On some completeness theorems in modal logic, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 12 (1966) 379–384](https://doi.org/10.1002/malq.19660120131)
- [Kripke, S. A. (1963). Semantical analysis of modal logic I. Normal modal propositional calculi. Zeitschrift für mathematische Logik und Grundlagen der Mathematik 9, 67–96.](https://doi.org/10.1002/malq.19630090502)

### Back-and-forth families turn two enumerations into an isomorphism

**Remember:** Alternate adding one object from each side.

*True by definition.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A back-and-forth family is a nonempty set of bijections between finite subsets of two structures. Each bijection preserves and reflects all basic formulas on its inputs. Each can extend within the family to include any chosen object on either side.

**Problem.** Two countable structures with such a family are isomorphic.

**How the definition helps.** The two extension rules let our own construction build a global match one object at a time. Alternate between the two lists, extending the current map to include the next object. The union matches both lists exactly and respects each basic fact because that fact involves only finitely many objects. The work lies in finding the initial family of maps.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M ≅ₚ N and M and N are enumerable, then M ≅ N.”

**Sources:** none listed. No primary source with a working link was found.

### Capture-free substitution preserves the meaning of term replacement

**Remember:** Do not let a quantifier bind a letter you insert.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A term names an object once its variables have values. Capture-free substitution replaces x by a term only where x is free, outside the scope of a quantifier that binds x. First rename any bound variable that would bind an inserted variable, using a name absent from both expressions.

**Problem.** Evaluating the formula after capture-free substitution gives the same truth value as assigning x the term’s value in the original formula.

**How the definition helps.** Our own inductive proof uses renaming to keep the inserted variables tied to the original assignment. Our own counterexample replaces x by y in ∀y (x = y) without renaming. On a two-element set the naive result ∀y (y = y) is true, but the original is always false.

**Paper or page:** [First Order Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Let M be a structure, A a formula, t′ a term, and s a variable assignment.”

**Sources:** none listed. No primary source with a working link was found.

### Elementary chains preserve truth at their union

**Remember:** An elementary stage already has any witness it needs.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A chain of substructures is elementary when each stage agrees with every later stage on formulas with parameters from the earlier stage. An ordinary chain asks only that basic facts about elements already present agree.

**Problem.** In an elementary chain, every stage is an elementary substructure of the union.

**How the definition helps.** Our own argument sends a witness from a later stage back to the stage containing the parameters. Induction on formulas justifies evaluating the witness in that later stage. Our own counterexample uses initial segments of the natural numbers. Each finite stage has a greatest element, but their union does not.

**nLab:** [elementary embedding](https://ncatlab.org/nlab/show/elementary+embedding). It says: “it is an injection f: M → N such that for any first-order formula φ written in the language of σ”

**Sources:**

- [Alfred Tarski and Robert L. Vaught, Arithmetical extensions of relational systems (1957), Theorem 1.9](https://www.numdam.org/item/CM_1956-1958__13__81_0/)

### Existential quantifiers keep projections of definable sets definable

**Remember:** To drop a coordinate, ask whether some value fits.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A definable set consists of the tuples that make some first-order formula true in a fixed structure. Allow quantifiers, not just basic facts combined with AND, OR, or NOT.

**Problem.** Dropping one coordinate from all tuples in a definable set gives another definable set.

**How the definition helps.** An existential quantifier asks whether any value for the missing coordinate completes the tuple. In our own counterexample, a graph has one edge and an isolated vertex, and the language has only equality and adjacency. Projecting the edge relation selects exactly the vertices with a neighbor. The only basic tests on x alone, equality with itself and adjacency to itself, give the same answers everywhere.

**nLab:** [definable set](https://ncatlab.org/nlab/show/definable+set). It says: “evaluates to a truth value on each a = (a₁, …, aₙ) ∈ Mⁿ”

**Paper or page:** [First Order Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “M ⊨ ∃x B(x)\[s\] iff there is an x-variant s′ of s so that M ⊨ B(x)\[s′\].”

**Sources:** none listed. No primary source with a working link was found.

### Finite size bounds let compactness produce an infinite model

**Remember:** Ask for every finite size to force infinity.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Express infinitude as a set of first-order sentences rather than one sentence. For each positive integer n, require n objects that differ in every pair.

**Problem.** A first-order theory with equality and arbitrarily large finite models has an infinite model.

**How the definition helps.** Any finite collection of bounds holds in a sufficiently large finite model of the theory (our own argument). Compactness gives one model of the theory satisfying every bound. Its domain must be infinite.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If a set Γ of sentences has arbitrarily large finite models, then it has an infinite model.”

**Sources:** none listed. No primary source with a working link was found.

### Finite size bounds show why infinitude needs infinitely many axioms

**Remember:** No finite list of lower bounds forces infinity.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A theory may use a set of sentences instead of a single sentence. With equality, axiomatize infinity by asking for n pairwise distinct objects for every positive integer n.

**Problem.** No single first-order sentence, or finite list of sentences, characterizes infinite structures in a language with equality.

**How the definition helps.** The size bounds let our own argument build a contradiction from any proposed sentence for infinitude. Add its negation to all the bounds. Each finite part has a sufficiently large finite model, so compactness gives an infinite model satisfying the negation. A finite list of proposed axioms would give one sentence by joining them with AND.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “There is no sentence A of any first-order language that is true in structure M if and only if the domain M of the structure is infinite.”

**Sources:** none listed. No primary source with a working link was found.

### Forgetting unused symbols preserves truth in the smaller language

**Remember:** Forget symbols, not objects.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A reduct keeps the same set of objects and the same meanings for the symbols of a smaller language. It forgets the other symbols rather than removing objects.

**Problem.** An expanded structure and its reduct agree on every sentence in the smaller language.

**How the definition helps.** Keeping the domain gives every quantifier the same choices, and keeping the old symbols gives every old term and relation the same meaning. Our own proof follows the construction of the sentence. Shrinking a two-object domain to one object would change the truth of “there exist two distinct objects.”

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If an L-structure M is a reduct of an L′-structure M′, then for all L-sentences A, M ⊨ A iff M′ ⊨ A.”

**Sources:** none listed. No primary source with a working link was found.

### Isomorphisms preserve first-order truth by matching every choice

**Remember:** Match objects and match facts in both directions.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** An isomorphism is a bijection that respects the named constants and functions. It also preserves and reflects relations, unlike a bijective homomorphism that only preserves them.

**Problem.** Isomorphic structures satisfy the same first-order sentences.

**How the definition helps.** Our own argument matches each assignment and every choice for a quantified variable through the bijection. Our own counterexample is the identity map from an edgeless two-vertex graph to one with an edge. It is a bijective homomorphism, but the sentence saying that an edge exists distinguishes them. The work is induction on formulas, starting with exact agreement on basic facts.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M ≅ M′ then M ≡ M′.”

**Sources:**

- [Alfred Tarski and Robert L. Vaught, Arithmetical extensions of relational systems (1957), Corollary 1.5](https://www.numdam.org/item/CM_1956-1958__13__81_0/)

### Keeping witnesses is enough to test elementary substructures

**Remember:** For each solvable formula, keep one solution.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A substructure restricts all relations to a smaller domain that contains the constants and is closed under the functions. It passes the witness test if each solvable formula with one unknown and parameters from that domain has a solution there. The larger structure evaluates the formula in both cases.

**Problem.** A substructure is elementary, meaning it agrees on every formula with parameters from it, exactly when it keeps witnesses.

**How the definition helps.** The witness test supplies the existential step in an induction comparing truth in the two structures (our own proof). Atomic formulas agree by restriction, and truth connectives preserve agreement. Conversely, elementarity transfers each true existence statement to the substructure, whose witness also satisfies the formula in the larger structure.

**Wikipedia:** [Elementary equivalence](https://en.wikipedia.org/wiki/Elementary_equivalence). It says: “A substructure N of M is elementary if and only if it passes the Tarski–Vaught test”

**Sources:**

- [Alfred Tarski and Robert L. Vaught, Arithmetical extensions of relational systems (1957), Theorem 1.10](https://www.numdam.org/item/CM_1956-1958__13__81_0/)

### Naming every object pins down a finite structure

**Remember:** List the facts and leave no unnamed objects.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For a finite structure in a finite language, assign one variable per object (our own construction). Record all constant and function values, and record each relation or its negation on every tuple. Require distinct values for distinct variables and require every object to equal one of those values.

**Problem.** In a finite first-order language with equality, each finite structure is characterized up to isomorphism by a single sentence.

**How the definition helps.** The diagram lists enough facts to identify the whole structure once its variables have values. Our own construction joins the conditions with AND and says there exist values satisfying them all. Distinctness and exhaustion give a bijection, and the recorded facts make it an isomorphism.

**nLab:** [diagram of a first-order structure](https://ncatlab.org/nlab/show/diagram+of+a+first-order+structure). It says: “adding to L new constant symbols cₘ for each m ∈ M”

**Paper or page:** [First Order Logic: Models Theories](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “is true in structure M iff the domain M contains exactly n elements.”

**Sources:**

- [Herbert B. Enderton, A Mathematical Introduction to Logic, 2nd ed. (2001), Section 2.2, Exercise 17](https://www.cs.mcgill.ca/~akroit/math/logic/Enderton%20A%20Mathematical%20Introduction%20to%20Logic.pdf)

### Negative facts make atomic diagrams describe embeddings

**Remember:** Record what fails as well as what holds.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In a language with equality, the atomic diagram gives each object its own name. It lists every true equation or relation statement between named terms and the negation of every false one.

**Problem.** A structure with these names satisfies the atomic diagram exactly when interpreting the names gives an embedding. An embedding preserves and reflects the basic facts.

**How the definition helps.** The negative statements force different names for different objects to stay distinct and prevent false relations from becoming true. The positive statements preserve functions, constants, and true relations. Our own counterexample uses equality alone. Mapping two objects to one preserves every true equation.

**nLab:** [diagram of a first-order structure](https://ncatlab.org/nlab/show/diagram+of+a+first-order+structure). It says: “into which M embeds as a substructure and elementary substructure, respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Restricting relations makes universal sentences pass to substructures

**Remember:** Keep the same facts on the remaining objects.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A substructure restricts the larger structure’s functions and relations to a subdomain containing all named constants and closed under every function.

**Problem.** If a universal sentence holds in a structure, it holds in every substructure. A universal sentence has only universal quantifiers at the front, followed by a formula with no quantifiers.

**How the definition helps.** Exact restriction keeps each basic statement true or false on every remaining tuple. Induction gives the same agreement for formulas built with AND, OR, and NOT, so checking fewer tuples preserves a universal sentence. Our own counterexample deletes the edge from a graph on two adjacent vertices. The sentence “every two distinct vertices are adjacent” then fails.

**Wikipedia:** [Model theory](https://en.wikipedia.org/wiki/Model_theory). It says: “by restricting all functions and relations in σ to the subset.”

**Sources:** none listed. No primary source with a working link was found.

### Tarski defines satisfaction for all formulas to handle free variables

**Remember:** Truth is satisfaction for formulas with no free variables.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** An assignment satisfies an atomic relation when the evaluated tuple belongs to it, and satisfies equality when the values coincide. Negation reverses satisfaction, and conjunction requires both parts. Universal quantification over x requires satisfaction under every reassignment of x. A sentence is true in the structure when every assignment satisfies it.

**Problem.** Truth for a quantified first-order language has a recursive definition satisfying Convention T. For each sentence, the definition equates its truth with what that sentence asserts under the interpretation.

**How the definition helps.** Assignments let the recursion evaluate the open formula left after removing a quantifier. The atomic and recursive clauses translate each sentence into its interpreted assertion in the metalanguage (our own argument). Induction on the sentence yields its Convention T equivalence.

**Wikipedia:** [Semantic theory of truth](https://en.wikipedia.org/wiki/Semantic_theory_of_truth). It says: “Removing a quantifier from a sentence can produce a free variable, which is not a sentence and thus cannot have a truth value.”

**Sources:** none listed. No primary source with a working link was found.

### A new name above every numeral gives nonstandard arithmetic

**Remember:** One new element exceeds every ordinary numeral.

*Makes the theorem clean to state or prove.* MSC 03C62 (Models of arithmetic and set theory), 03C07. arXiv math.LO. Level 2: later undergraduate.

**Definition.** True arithmetic is the set of all first-order sentences true of the natural numbers. Add a fresh name c and, for every ordinary numeral, a sentence that says c is larger.

**Problem.** Some countable model satisfies all of true arithmetic but is not isomorphic to the natural numbers.

**How the definition helps.** Naming one element lets our own argument impose every lower bound on that same element. Any finite list of bounds holds for some natural number, so compactness gives a model satisfying all bounds and true arithmetic. The downward Löwenheim–Skolem theorem gives a countable such model. After removing the name, its value still exceeds every ordinary numeral, which rules out an isomorphism with the natural numbers.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “There are non-standard enumerable models of true arithmetic.”

**Sources:**

- [Herbert B. Enderton, A Mathematical Introduction to Logic, 2nd ed. (2001), Section 2.6](https://www.cs.mcgill.ca/~akroit/math/logic/Enderton%20A%20Mathematical%20Introduction%20to%20Logic.pdf)

### Countability relative to a model removes Skolem's paradox

**Remember:** Countability inside a model needs an injection the model itself recognizes.

*True by definition.* MSC 03C62 (Models of arithmetic and set theory), 03C15. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A model M regards a set a as countable if M satisfies the statement that a injects into its own natural numbers.

**Problem.** If ZFC has a model, then by the Löwenheim–Skolem theorem it has a countable model. That model contains sets that it calls uncountable, and this is no contradiction.

**How the definition helps.** Downward Löwenheim–Skolem gives a countable model in the countable language of ZFC. ZFC proves that some sets are uncountable, so this model regards some set a as uncountable. Externally, a’s model-members form a subset of the countable domain (our own explanation). Internally, the model recognizes no injection from a into its natural numbers.

**Wikipedia:** [Skolem's paradox](https://en.wikipedia.org/wiki/Skolem%27s_paradox). It says: “He explained that the countability of a set is not absolute, but relative to the model in which the cardinality is measured.”

**Sources:** none listed. No primary source with a working link was found.

### A formal definition of algorithm answers the Entscheidungsproblem

**Remember:** A decider must halt on every sentence and accept exactly the valid ones.

*Makes the theorem clean to state or prove.* MSC 03D10 (Turing machines and related notions), 03D35, 03B10. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A decision algorithm for a property of encoded sentences is a Turing machine that halts on every sentence code. It accepts exactly the codes of sentences with that property.

**Problem.** The Entscheidungsproblem of Hilbert and Ackermann has a negative answer: no algorithm decides whether a first-order statement is universally valid, that is, true in every interpretation.

**How the definition helps.** The definition turns the decision problem into an existence claim about machines. The Church–Turing undecidability theorem for first-order validity rules out such a machine. Identifying this formal meaning of algorithm with effective calculation uses the Church–Turing thesis (our own distinction).

**Wikipedia:** [Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem). It says: “Before the question could be answered, the notion of "algorithm" had to be formally defined.”

**Sources:**

- [Turing, A. M. (1936/1937). On computable numbers, with an application to the Entscheidungsproblem. Proc. London Math. Soc. (2) 42, 230–265.](https://doi.org/10.1112/plms/s2-42.1.230)
- [Church, A. (1936). An unsolvable problem of elementary number theory. American Journal of Mathematics 58(2), 345–363.](https://doi.org/10.2307/2371045)

### A precise definition of computability lets you state unsolvability

**Remember:** One machine must compute the required answer on every input.

*Makes the theorem clean to state or prove.* MSC 03D10 (Turing machines and related notions), 03D35, 03B10. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A numerical function is computable if some Turing machine halts with its value on every input in its domain and diverges elsewhere. For a decision problem, the function returns 1 for yes and 0 for no on every input.

**Problem.** Hilbert's Entscheidungsproblem has a negative answer: no effective method decides whether a first-order formula is valid.

**How the definition helps.** Coding formulas gives validity a yes-or-no function, so undecidability says that no machine computes that function (our own formulation). Church’s theorem establishes this for first-order validity. The Church–Turing thesis connects the machine definition to the informal idea of an effective method.

**Wikipedia:** [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis). It says: “Clearly the existence of CC and RC \[meaning Church's and Rosser's proofs of the statement that there is no effective method for deciding truth\] presupposes a precise definition of 'effective'.”

**Sources:**

- [Church, A. (1936). An unsolvable problem of elementary number theory. American Journal of Mathematics 58, 345–363.](https://doi.org/10.2307/2371045)
- [Turing, A. M. (1937). On computable numbers, with an application to the Entscheidungsproblem. Proceedings of the London Mathematical Society (2) 42, 230–265.](https://doi.org/10.1112/plms/s2-42.1.230)

### Finite accepting branches make nondeterministic computation simulable

**Remember:** Try each length of computation before trying the next.

*True by definition.* MSC 03D10 (Turing machines and related notions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A nondeterministic Turing machine can have several possible next moves, with finitely many choices at each step. It recognizes a word if some finite sequence of moves reaches acceptance, regardless of what other sequences do.

**Problem.** Every language recognized by a nondeterministic Turing machine is recognized by a deterministic Turing machine.

**How the definition helps.** Acceptance has a finite witness even when other branches run forever (our own). A deterministic machine tests all possible runs in order of length and accepts when one reaches acceptance (our own). Each length has only finitely many runs, so the search eventually reaches every witness (our own).

**Wikipedia:** [Nondeterministic Turing machine](https://en.wikipedia.org/wiki/Nondeterministic_Turing_machine). It says: “we can stop the entire simulation as soon as any branch reaches an accepting state.”

**Sources:** none listed. No primary source with a working link was found.

### Self-input exposes the contradiction in a halting decider

**Remember:** Ask what a program does when it reads its own code.

*True by definition.* MSC 03D10 (Turing machines and related notions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** The self-halting set consists of the program codes e for which program e stops when given e as input. The ordinary halting problem allows the program code and its input to vary independently.

**Problem.** The self-halting set is undecidable, so the ordinary halting problem is undecidable too.

**How the definition helps.** Self-input makes a proposed decision procedure answer for the very program that uses its answer (our own). Build a program that stops exactly when the procedure predicts its input code will run forever on itself (our own). On its own code, this program stops exactly when it runs forever (our own). An ordinary halting test would decide self-halting by using the same code for program and input (our own).

**Paper or page:** [Turing Machines: Undecidability, Theorem 1.5. (Unsolvability of the Halting Problem)](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “The halting problem is unsolvable, i.e., the function h is not Turing computable.”

**Sources:** none listed. No primary source with a working link was found.

### Standard tape layouts let Turing machines compose

**Remember:** Leave the tape as the next machine expects it.

*True by definition.* MSC 03D10 (Turing machines and related notions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A disciplined Turing machine preserves the left end marker and never moves past it. On halting, it uses one designated halt state and returns its head to the first input cell. We use the same tape format for a numerical output and the next numerical input.

**Problem.** Joining disciplined machines for f and g computes g(f(x)) when g takes one numerical input.

**How the definition helps.** The first machine leaves its answer in the starting layout for the second (our own). Start the second machine when the first halts, using separate state names (our own). An unrestricted machine may stop elsewhere, but every machine has a disciplined equivalent (our own).

**Paper or page:** [Turing Machines: Machines Computations, Proposition 1.2.](https://builds.openlogicproject.org/open-logic-complete.pdf), [Turing Machines: Machines Computations, Proposition 1.3.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M and M′ are disciplined and compute the functions f: ℕᵏ → ℕ and f′: ℕ → ℕ, respectively, then M ⌢ M′ is disciplined”

**Sources:** none listed. No primary source with a working link was found.

### Partial functions escape the diagonal argument, so all programs can be listed

**Remember:** Let programs run forever, and you can list all programs.

*Makes the theorem clean to state or prove.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D45. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A unary partial computable function is one computed by a program that halts with its value on every input in its domain and diverges elsewhere.

**Problem.** The unary partial computable functions admit an effective list containing them all. No effective list consisting entirely of total unary computable functions contains them all.

**How the definition helps.** A universal machine simulates the program with any given code, so its rows enumerate the partial computable functions. For an effective list of total functions, g(n) = fₙ(n) + 1 would be total computable and differ from each row (our own argument). For a partial list, g and row e can agree even at e if both diverge there.

**Wikipedia:** [Primitive recursive function](https://en.wikipedia.org/wiki/Primitive_recursive_function). It says: “Note however that the partial computable functions (those that need not be defined for all arguments) can be explicitly enumerated, for instance by enumerating Turing machine encodings.”

**Sources:**

- [Ackermann, W. (1928). Zum Hilbertschen Aufbau der reellen Zahlen. Mathematische Annalen. (The counterexample: a total computable function that is not primitive recursive.)](https://doi.org/10.1007/BF01459088)

### Program prefixes make fixed parameters computable from code

**Remember:** Load the fixed arguments before running the original instructions.

*Makes the theorem clean to state or prove.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A register machine runs a finite list of instructions on numbered cells holding natural numbers. Its program code encodes the instructions in order. Specializing a program fixes some initial input values and leaves the remaining inputs free.

**Problem.** For fixed input counts, an algorithm takes a program code and fixed values and returns a specialized program code. The new program behaves on the remaining inputs as the original does with the fixed values supplied first.

**How the definition helps.** Encoding instructions lets us insert fixed inputs without running the original program (our own). A prefix moves the remaining inputs to their expected cells and loads the fixed values (our own). Copy the original instructions, adjusting jumps to account for the prefix (our own). The coding must allow these list and address operations to be computed (our own).

**Paper or page:** [Computability: Computability Theory, Theorem 1.1.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “For each pair of natural numbers n and m, there is a primitive recursive function sᵐₙ”

**Sources:** none listed. No primary source with a working link was found.

### The recursion theorem fixes the computed function, not the program number

**Remember:** A fixed point is a program that does the same thing as its transform.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D45. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** Use an acceptable numbering of programs, with universal simulation and effective specialization of parameters. A fixed point of a transformation F is an index e such that e and F(e) compute the same partial function.

**Problem.** Every total computable transformation of programs has a fixed point. This is Rogers's theorem, a form of Kleene's second recursion theorem.

**How the definition helps.** Equality of partial functions permits fixed points even for F(e) = e + 1, which changes every index (our own example). Rogers’s fixed-point theorem supplies such an index for each total computable F in an acceptable numbering. Agreement means identical domains and identical values wherever defined.

**Wikipedia:** [Kleene's recursion theorem](https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem). It says: “Note that the comparison of in- and outputs here is not in terms of numerical values, but in terms of their associated partial recursive functions.”

**Sources:**

- [Kleene, S. C. (1938). On notation for ordinal numbers. Journal of Symbolic Logic 3, 150–155.](https://doi.org/10.2307/2267778)

### A known member makes enumeration total without adding new values

**Remember:** Return a known member whenever the proposed output fails its check.

*Rules out counterexamples.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03D20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A set is computably enumerable if a program accepts exactly its members. A total enumeration gives a member on every natural-number input and lists every member. A primitive recursive enumeration uses zero, successor, input selection, composition and recursion on a natural number.

**Problem.** A nonempty set of natural numbers is computably enumerable exactly when it is the range of a primitive recursive function.

**How the definition helps.** A fixed member gives a valid fallback even when a bounded acceptance test fails (our own). Decode the input as (x,t), returning x if accepted within t steps and the fixed member otherwise. Pair decoding and bounded simulation are primitive recursive, and searching an enumeration recognizes its range (our own). The empty set has no possible fallback because every total enumeration has a first output.

**Paper or page:** [Recursively Enumerable Set is Image of Primitive Recursive Function/Corollary](https://proofwiki.org/wiki/Recursively_Enumerable_Set_is_Image_of_Primitive_Recursive_Function/Corollary). It says: “Suppose S is non-empty. Then there exists a primitive recursive function f: ℕ → ℕ such that:”

**Sources:** none listed. No primary source with a working link was found.

### A uniform list keeps countable unions computably enumerable

**Remember:** One recognizer for all indices makes a fair search possible.

*Rules out counterexamples. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03D10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A sequence of sets is uniformly computably enumerable when one recognizer takes both the set number and the candidate member as input. It accepts exactly when that member is in the numbered set.

**Problem.** The union of a uniformly computably enumerable sequence of sets is computably enumerable.

**How the definition helps.** One recognizer can search all set numbers without needing a separate program for each (our own). At stage t, test indices through t for t steps each and accept if any test accepts (our own). Without uniformity, take any set B that no program recognizes (our own). At index e, choose {e} if e belongs to B and ∅ otherwise, giving decidable sets with union B (our own).

**Paper or page:** [Computability: Computability Theory, Theorem 1.2.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “A set S is computably enumerable if and only if there is a computable relation R(x,y) such that S = {x ∣ ∃y R(x,y)}.”

**Sources:** none listed. No primary source with a working link was found.

### Defining enumerable sets as domains removes the empty-set exception

**Remember:** Every set where some program halts is enumerable, the empty set included.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A set S of natural numbers is computably enumerable if some partial computable function is defined exactly on S. An older definition says S is the range of a total computable function, or S is empty.

**Problem.** The intersection of two computably enumerable sets is computably enumerable. A set is computable if and only if it and its complement are computably enumerable.

**How the definition helps.** The domain definition lets programs recognize sets by halting, even when they never halt on any input. For an intersection, halt once both programs halt (our own). For complementary domains, alternate steps until one program halts, deciding membership by which finishes (our own). Conversely, run a decider and halt only for the desired answer to recognize either side.

**Wikipedia:** [Computably enumerable set](https://en.wikipedia.org/wiki/Computably_enumerable_set). It says: “The definition of a computably enumerable set as the domain of a partial function, rather than the range of a total computable function, is common in contemporary texts.”

**Sources:**

- [Post, E. L. (1944). Recursively enumerable sets of positive integers and their decision problems. Bulletin of the American Mathematical Society 50, 284–316.](https://doi.org/10.1090/S0002-9904-1944-08111-1)

### Halting domains preserve computable enumerability under intersections and computable preimages

**Remember:** Run both programs in order and halt only if both finish.

*True by definition. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A set of natural numbers is computably enumerable if it is the domain of a partial computable function. This is the set of inputs on which some program halts. The listing definition takes the set of outputs of a partial computable function instead.

**Problem.** The intersection of two computably enumerable sets is computably enumerable. The preimage of a computably enumerable set under any total computable function is also computably enumerable.

**How the definition helps.** Both claims follow by running programs in sequence (our own argument). For an intersection, run both programs on the input and halt after both finish. For a preimage, compute the function value and run the membership program on that value.

**Paper or page:** [Computability: Computability Theory, Theorem 1.1](https://builds.openlogicproject.org/open-logic-complete.pdf), [Computability: Computability Theory, Theorem 1.1](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Suppose A and B are computably enumerable. Then so are A ∩ B and A ∪ B.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing enumerations turn an infinite search into a decision

**Remember:** An increasing list can settle no by passing the target.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03D10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** An increasing computable enumeration is a program that returns a natural number on every natural-number input. Its outputs strictly increase with the input, and their range is the set it lists.

**Problem.** An infinite set of natural numbers is decidable exactly when it has an increasing computable enumeration.

**How the definition helps.** An increasing list eventually reaches or passes any input, so it gives a membership test (our own). An unordered listing need never signal that a missing number will never appear (our own). For the converse, use the membership test to find the first member and then each larger member in turn (our own). Infinitude guarantees every search succeeds (our own).

**Wikipedia:** [Computable set](https://en.wikipedia.org/wiki/Computable_set). It says: “A is computable if and only if it is either the image (or range) of a nondecreasing total computable function, or the empty set.”

**Sources:** none listed. No primary source with a working link was found.

### The universal list exposes a language no machine recognizes

**Remember:** A program that stops on the opposite diagonal contradicts itself.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03D10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A set is computably enumerable if some program halts exactly on its members. The self-halting set contains the codes of all programs that halt when given their own code.

**Problem.** The self-halting set is computably enumerable, but its complement is not.

**How the definition helps.** Describing membership by halting makes a recognizer for the complement contradict its own behavior (our own). On its own code, it would halt exactly when it does not halt (our own). A simulator recognizes the self-halting set itself by running the input program on its own code (our own).

**Paper or page:** [Computability: Computability Theory, Theorem 1.2.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “The self-halting set K = {e ∣ φₑ(e)↓} is c.e. but not decidable.”

**Sources:** none listed. No primary source with a working link was found.

### Total computable reductions cannot hide nontermination

**Remember:** A reduction must finish even when the answer is no.

*Rules out counterexamples.* MSC 03D30 (Other degrees and reducibilities in computability and recursion theory), 03D10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A many-one reduction from A to B is a computable function f defined on every input. It must satisfy x ∈ A exactly when f(x) ∈ B.

**Problem.** Many-one reductions compose, and any set that reduces to a decidable set is itself decidable.

**How the definition helps.** A total translation always reaches the next reduction or the final decider (our own). A partial translation could simulate the input and return 0 only on halting (our own). Treating divergence as a no answer would then reduce the undecidable halting set to the decidable set {0} (our own). Thus the work is showing that the translation finishes even on no inputs (our own).

**Paper or page:** [Computability: Computability Theory, Proposition 1.1.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If A ≤ₘ B and B ≤ₘ C, then A ≤ₘ C.”

**Sources:** none listed. No primary source with a working link was found.

### Rice's theorem needs properties that are semantic and nontrivial

**Remember:** Behavior alone decides membership, and some programs qualify while others do not.

*Rules out counterexamples.* MSC 03D35 (Undecidability and degrees of sets of sentences), 03D20. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A property of programs is semantic (or extensional) if it depends only on the partial function that the program computes. The function is partial because the program may run forever on some inputs. A property is nontrivial if some programs have it and some do not.

**Problem.** Rice's theorem: every nontrivial semantic property of programs is undecidable.

**How the definition helps.** Semantic invariance lets a halting reduction vary program text without changing the property (our own outline). Complement the property if necessary so the everywhere-divergent function lacks it, and choose a program having it. Simulate the halting instance before running that program: the resulting program has the property exactly if the instance halts. Testing for an instruction in the text violates invariance, and constant properties violate nontriviality; both tests are decidable.

**Wikipedia:** [Rice's theorem](https://en.wikipedia.org/wiki/Rice%27s_theorem). It says: “A semantic property is one about the program's behavior (for instance, "does the program terminate for all inputs?"), unlike a syntactic property”

**Sources:**

- [Rice, H. G. (1953). Classes of recursively enumerable sets and their decision problems. Transactions of the American Mathematical Society 74, 358–366.](https://doi.org/10.1090/s0002-9947-1953-0053041-6)

### Adding an ordinal to itself as a member gives its successor

**Remember:** Any larger ordinal must already contain the new member.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal contains every member of each of its elements, and membership well-orders it. A well-order is a total order in which each nonempty subset has a first element. Form the successor of α by adjoining α to the set α.

**Problem.** The successor of an ordinal α is the least ordinal strictly greater than α.

**How the definition helps.** Every ordinal greater than α contains α and all its members, so it contains the proposed successor. Our own comparison with abstract order types checks directly that the new set is an ordinal. It contains every predecessor, and its one new element comes last in the well-order.

**Paper or page:** [Successor of Element of Ordinal is Subset](https://proofwiki.org/wiki/Successor_of_Element_of_Ordinal_is_Subset). It says: “x ∈ y ⇔ x⁺ ⊆ y”

**Sources:** none listed. No primary source with a working link was found.

### Cardinal powers as function sets make iterated powers multiply exponents

**Remember:** A function of two inputs can take them one at a time.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Define μ to the power κ as the size of the set of functions from a κ-element set to a μ-element set. For natural numbers, the alternative defines powers by recursion, as repeated multiplication.

**Problem.** For all cardinals μ, κ and λ, μ to the power κ, raised to the power λ, equals μ to the power κ · λ.

**How the definition helps.** With function sets, the law is the currying bijection and needs no induction (our own). A function on K × L is the same as a function on L whose values are functions on K (our own). Recursion proves the law for natural numbers by induction, after the law for sums of exponents (our own). The work moves to checking that the sizes of function sets and products do not depend on the representatives (our own).

**nLab:** [cardinal arithmetic](https://ncatlab.org/nlab/show/cardinal+arithmetic). It says: “the exponential of one cardinality raised to the power of the other is the cardinality of their function set”

**Sources:**

- [Georg Cantor, Beiträge zur Begründung der transfiniten Mengenlehre (1895)](https://doi.org/10.1007/bf02124929)

### Cardinal powers as function sets turn exponent sums into products

**Remember:** A function on a disjoint union is one function per piece.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Define μ to the power κ as the size of the set of functions from a κ-element set to a μ-element set. For natural numbers, the alternative defines powers by recursion, as repeated multiplication.

**Problem.** For cardinals μ, κ and λ, μ to the power κ + λ is the product of μ to the powers κ and λ.

**How the definition helps.** With function sets, the law is one bijection and needs no induction (our own). A function on a disjoint union K ⊔ L is a pair of functions, one on K and one on L (our own). Recursion proves the law for natural numbers by induction on λ (our own). The work moves to checking that the size of a function set does not depend on the chosen representatives (our own).

**nLab:** [cardinal arithmetic](https://ncatlab.org/nlab/show/cardinal+arithmetic). It says: “the exponential of one cardinality raised to the power of the other is the cardinality of their function set”

**Sources:**

- [Georg Cantor, Beiträge zur Begründung der transfiniten Mengenlehre (1895)](https://doi.org/10.1007/bf02124929)

### Cardinal sums and products as sets make distributivity one bijection

**Remember:** A pair keeps the tag of its tagged entry.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For sets A and B of cardinalities a and b, define a + b as the size of their disjoint union. Tag each element by its summand position, even if A = B. Define ab as the size of A × B.

**Problem.** For all cardinals a, b and c, a(b + c) = ab + ac.

**How the definition helps.** A pair with a tagged second entry can move its tag outside the pair (our own bijection). Send (x, (i, y)) to (i, (x, y)). Moving the tag back gives the inverse, so the two sets have the same cardinality.

**Paper or page:** [Cardinal Product Distributes over Cardinal Sum](https://proofwiki.org/wiki/Cardinal_Product_Distributes_over_Cardinal_Sum). It says: “Let a, b and c be cardinals. Then: a(b + c) = ab + ac”

**Sources:**

- [Georg Cantor, Beiträge zur Begründung der transfiniten Mengenlehre (1895)](https://doi.org/10.1007/bf02124929)

### Dedekind's definition of infinite needs no natural numbers

**Remember:** Infinite means you can remove something and still have the same size.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A set is Dedekind-infinite if it is in one-to-one correspondence with a proper subset of itself. For example, the natural numbers correspond to the even numbers. A set is Dedekind-finite if this is not possible.

**Problem.** Every Dedekind-infinite set contains a copy of the natural numbers, an infinite sequence without repeats. So the natural numbers can be built from such a set, without a circular definition of infinite.

**How the definition helps.** Choose an injection f of the set into itself that misses an element a (our own construction). The least subset containing a and closed under f forms a successor system. Its successor is injective, misses a, and satisfies induction by minimality, so Dedekind’s characterization identifies it with the natural numbers.

**Wikipedia:** [Dedekind-infinite set](https://en.wikipedia.org/wiki/Dedekind-infinite_set). It says: “It is notable that this definition was the first definition of "infinite" that did not rely on the definition of the natural numbers”

**Sources:**

- [Dedekind, R. (1888). Was sind und was sollen die Zahlen? Vieweg, Braunschweig. Reprint, 1961.](https://doi.org/10.1007/978-3-663-02788-1)

### Defining cardinals as initial ordinals makes them comparable sets

**Remember:** A cardinal is the first ordinal of its size.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Assuming choice, the cardinal of a set X is the least ordinal in bijection with X.

**Problem.** With the axiom of choice, every set has a cardinal that is itself a set, and any two cardinals are comparable.

**How the definition helps.** The well-ordering theorem gives X a well-order and hence an ordinal of the same size (our own argument). Among that ordinal and its predecessors of the same size there is a least one. Ordinals are sets, and their usual order compares every pair.

**Wikipedia:** [Cardinal number](https://en.wikipedia.org/wiki/Cardinal_number), [Ordinal number](https://en.wikipedia.org/wiki/Ordinal_number). It says: “The most commonly used (strong) cardinal assignment, which relies on the axiom of choice, is the von Neumann cardinal assignment”

**Sources:** none listed. No primary source with a working link was found.

### Finite-support functions make an ordinal power of a sum a product

**Remember:** The later exponent block is compared first, then the earlier block.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For ordinals α &gt; 0 and β, take all functions from β to α with finitely many nonzero values. Order distinct functions by their values at the greatest index where they differ. Their order type is α raised to β.

**Problem.** If α &gt; 0, then α to the power β + γ equals α to the power β times α to the power γ.

**How the definition helps.** Restriction to the two blocks splits each function into a pair, and concatenation recovers it (our own argument). Any difference in the γ block takes priority because that block comes last. This is exactly the ordinal product order, which compares second coordinates first.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “This set is ordered lexicographically with the least significant position first”

**Sources:** none listed. No primary source with a working link was found.

### Lists with repeats turn countable unions into countable grids

**Remember:** Put each list on one row and read the grid.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A nonempty set is countable if a list indexed by natural numbers covers it. Unlike a one-to-one list, this list may repeat elements. The empty set also counts as countable.

**Problem.** Assuming countable choice, the union of a sequence of countable sets is countable.

**How the definition helps.** Repeats let us read one chosen list per nonempty set without checking whether two rows overlap. Countable choice lets us choose all these lists at once. Our own reading order visits positions by increasing row number plus column number, skipping empty rows. If every row is empty, the union is empty.

**nLab:** [countable unions of countable sets are countable](https://ncatlab.org/nlab/show/countable+unions+of+countable+sets+are+countable). It says: “this requires the axiom of countable choice”

**Paper or page:** [Countable Union of Countable Sets is Countable](https://proofwiki.org/wiki/Countable_Union_of_Countable_Sets_is_Countable). It says: “Then it can be proved that a countable union of countable sets is countable.”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero coefficients and decreasing exponents make Cantor normal form unique

**Remember:** No zero coefficients and no repeated powers, so each ordinal has one form.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Cantor normal form for α is a finite ordinal sum equal to α. Its terms have the form ωᵝ · c with strictly decreasing ordinal exponents β and positive integer coefficients c. The empty sum represents zero.

**Problem.** Every ordinal has exactly one Cantor normal form. Two ordinals in normal form can be compared term by term, like numbers written in a base.

**How the definition helps.** Each nonzero remainder determines its largest fitting power ωᵝ and then its largest fitting finite coefficient (our own outline). Removing that initial block leaves a remainder below ωᵝ, so exponents decrease and the process terminates. The first differing exponent or coefficient decides comparison, with a proper prefix smaller than its extension. Allowing repeated exponents duplicates ω·2 as ω + ω, and zero coefficients insert arbitrary unused terms.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “This decomposition of α is called the Cantor normal form of α, and can be considered the base-ω positional numeral system.”

**Sources:**

- [Cantor, G. (1897). Beiträge zur Begründung der transfiniten Mengenlehre (Zweiter Artikel). Mathematische Annalen 49, 207–246.](https://doi.org/10.1007/BF01444205)

### Ordinal powers need finite support, since infinite lexicographic products fail

**Remember:** Ordinal powers use finitely many nonzero places, compared from the top.

*Rules out counterexamples. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 06A05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The lexicographic order compares two families at the least index where they differ, using the order of that factor. Cantor's ordinal power αᵝ uses only the functions from β to α with finitely many nonzero values. It compares two such functions at the greatest index where they differ.

**Problem.** The finite-support functions from β to α, compared at the greatest differing place, form a well-order, so αᵝ is an ordinal. The full lexicographic product of infinitely many well-orders need not be well-ordered.

**How the definition helps.** For β = 0 there is one function, and for α = 0 with β positive there are none (our own proof). Otherwise, at a successor exponent the last coordinate indexes a well-ordered sum of earlier powers. At limits, finite support gives a union of nested, well-ordered initial segments obtained by extending earlier functions by zeros. In the full binary product on ℕ, least-index comparison orders successive single 1s in an infinite descending chain (our own example).

**Paper or page:** [Lexicographic Order of Family of Well-Ordered Sets is not necessarily Well-Ordered](https://proofwiki.org/wiki/Lexicographic_Order_of_Family_of_Well-Ordered_Sets_is_not_necessarily_Well-Ordered), [Lexicographic Order on Pair of Well-Ordered Sets is Well-Ordering](https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Well-Ordered_Sets_is_Well-Ordering). It says: “Then it is not necessarily the case that (D, ≼D) is also a well-ordered set.”

**Sources:**

- [ProofWiki, Lexicographic Order of Family of Well-Ordered Sets is not necessarily Well-Ordered](https://proofwiki.org/wiki/Lexicographic_Order_of_Family_of_Well-Ordered_Sets_is_not_necessarily_Well-Ordered)
- [ProofWiki, Lexicographic Order on Pair of Well-Ordered Sets is Well-Ordering](https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Well-Ordered_Sets_is_Well-Ordering)

### Ordinal products as reverse lexicographic orders make multiplication associative

**Remember:** In either grouping, the last coordinate decides first.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Define α · β as the order type of the set of pairs (a, b) with a in α and b in β. Compare two pairs by their second coordinates first, and use the first coordinates only to break ties. The usual alternative defines α · β by recursion on β, adding a copy of α at each successor step.

**Problem.** For all ordinals α, β and γ, (α · β) · γ = α · (β · γ).

**How the definition helps.** Both groupings order triples (a, b, c) by c first, then b, then a, so regrouping is an order-preserving bijection (our own). The recursive definition needs transfinite induction on γ and the left distributive law first (our own). The work moves to proving that the ordered product satisfies the recursion for ordinal multiplication (our own).

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “Effectively, each element of T is replaced by a disjoint copy of S.”

**Sources:** none listed. No primary source with a working link was found.

### Ordinal sums and products as block orders give left distributivity

**Remember:** Replace the points before or after joining the two blocks.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Define α · β by replacing each point of β with an ordered copy of α. Define α + β by placing a copy of β after a copy of α. The usual alternative defines both operations by transfinite recursion.

**Problem.** For all ordinals α, β and γ, α · (β + γ) = α · β + α · γ. The right distributive law fails, since (1 + 1) · ω = ω but 1 · ω + 1 · ω = ω · 2.

**How the definition helps.** In α · (β + γ), the copies of α indexed by β all come before those indexed by γ (our own). So the same pairs, in the same order, form α · β followed by α · γ (our own). The recursive definitions need transfinite induction on γ instead (our own). The work moves to proving that the block constructions satisfy the recursions (our own).

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “The order-type of the Cartesian product is the ordinal that results from multiplying the order-types of S and T.”

**Sources:** none listed. No primary source with a working link was found.

### Ordinal sums as appended well orders make addition associative

**Remember:** Three blocks in a row keep their order however you group them.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** The ordinal sum α + β is the order type of disjoint copies of α and β with their original orders. Every point of the α copy precedes every point of the β copy.

**Problem.** For all ordinals α, β and γ, (α + β) + γ = α + (β + γ).

**How the definition helps.** Both groupings put the same three copies in order from α through β to γ (our own argument). Matching corresponding points of each copy gives an order-preserving bijection, so the order types agree.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “every element of S is smaller than every element of T”

**Sources:** none listed. No primary source with a working link was found.

### Ordinal sums as appended well orders make left subtraction read the tail

**Remember:** To subtract an initial block, read the order of what remains.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For ordinals α and β, α + β is the order type of a copy of α followed by a copy of β (our own).

**Problem.** For any ordinals β ≤ α, there is exactly one ordinal γ with β + γ = α.

**How the definition helps.** The tail α ∖ β has the required order type γ (our own). Any isomorphism from β + γ′ onto α sends its first block onto β, so γ′ has that same tail type (our own).

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “Furthermore, one can define left subtraction for ordinals β ≤ α: there is a unique γ such that α = β + γ.”

**Sources:** none listed. No primary source with a working link was found.

### Successor sets make the natural numbers the first infinite ordinal

**Remember:** Each natural number contains exactly the numbers before it.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal contains every member of each of its elements, and membership well-orders it. This means membership orders its elements and each nonempty subset has a first element. Start at the empty set and form each natural number’s successor by adjoining that number to itself.

**Problem.** The set of all von Neumann natural numbers is the least infinite ordinal.

**How the definition helps.** Each successor contains exactly the earlier numbers, by induction (our own). Their set is therefore transitive, and membership gives its usual well-order (our own). It is infinite, and every smaller ordinal is one of its finite members (our own).

**Paper or page:** [Set of Natural Numbers is Ordinal](https://proofwiki.org/wiki/Set_of_Natural_Numbers_is_Ordinal). It says: “The set of natural numbers ℕ is an ordinal.”

**Sources:** none listed. No primary source with a working link was found.

### Ternary digits zero and two avoid collisions when coding subsets

**Remember:** Leave a gap between the digits so the tail cannot erase a difference.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Encode a subset of the positive integers by a base-three fraction. Put 2 in position n if n belongs to the subset, and put 0 there otherwise.

**Problem.** The real numbers and the power set of the natural numbers have the same cardinality.

**How the definition helps.** At the first differing place, the digit gap is two units of that place, while all later digits together contribute at most one unit. Our own binary comparison is 0.0111… = 0.1000…. In the reverse direction, number the rationals and assign each real the indices of the rationals below it. A rational separates any two distinct reals, so this assignment is injective and the Schröder–Bernstein theorem gives a bijection.

**Wikipedia:** [Cantor set](https://en.wikipedia.org/wiki/Cantor_set). It says: “it must admit a numeral representation consisting entirely of 0s and 2s.”

**Paper or page:** [Cardinality of Power Set of Natural Numbers Equals Cardinality of Real Numbers](https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Natural_Numbers_Equals_Cardinality_of_Real_Numbers). It says: “The cardinality of the power set of the natural numbers is equal to the cardinality of the real numbers.”

**Sources:** none listed. No primary source with a working link was found.

### The union of any set of ordinals is its supremum

**Remember:** For ordinals, take the union to get the least upper bound.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a set well-ordered by membership and containing every member of each of its elements. A well-order gives every nonempty subset a first element. Compare these ordinals by inclusion.

**Problem.** Every set of ordinals has a supremum, or least upper bound, given by its union. The empty set has supremum zero.

**How the definition helps.** The ordinal union theorem makes the union an ordinal. Inclusion makes it an upper bound contained in every other upper bound (our own). The empty union is ∅, the ordinal zero (our own).

**Paper or page:** [Union of Set of Ordinals is Ordinal](https://proofwiki.org/wiki/Union_of_Set_of_Ordinals_is_Ordinal). It says: “Then ⋃ A is an ordinal.”

**Sources:** none listed. No primary source with a working link was found.

### Von Neumann ordinals make each limit ordinal the union of smaller ones

**Remember:** Each ordinal is the set of smaller ordinals, so suprema are unions.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set that the relation ∈ well-orders, so each ordinal is the set of all smaller ordinals. A limit ordinal is a nonzero ordinal that is not a successor α ∪ {α}.

**Problem.** Every limit ordinal λ is the union of the ordinals below it: λ = ⋃λ.

**How the definition helps.** Every element of ⋃λ belongs to λ by transitivity (our own). Conversely, if β ∈ λ, its successor is at most λ and cannot equal the limit λ (our own). Thus β belongs to a member of λ (our own).

**Paper or page:** [Limit Ordinal Equals its Union](https://proofwiki.org/wiki/Limit_Ordinal_Equals_its_Union), [Alternative Definition of Ordinal](https://proofwiki.org/wiki/Alternative_Definition_of_Ordinal). It says: “Let λ be a limit ordinal. Then: λ = ⋃λ where ⋃λ denotes the union of λ.”

**Sources:**

- [ProofWiki, Limit Ordinal Equals its Union](https://proofwiki.org/wiki/Limit_Ordinal_Equals_its_Union)
- [ProofWiki, Alternative Definition of Ordinal](https://proofwiki.org/wiki/Alternative_Definition_of_Ordinal)

### Von Neumann ordinals make each order type a single set

**Remember:** An ordinal is the set of the ordinals that come before it.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set strictly well-ordered by membership. A set is transitive if it contains every element of each member (our own).

**Problem.** Every well-ordered set is order-isomorphic to exactly one von Neumann ordinal, and that ordinal is a set, not a proper class.

**How the definition helps.** Each point of a well-order receives the set of values assigned to its predecessors (our own). Well-founded recursion and replacement give an isomorphism onto an ordinal (our own). Distinct ordinals cannot be isomorphic because one is a proper initial segment of the other (our own).

**Wikipedia:** [Ordinal number](https://en.wikipedia.org/wiki/Ordinal_number), [Set-theoretic definition of natural numbers](https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers). It says: “Every well-ordered set S is order-isomorphic to exactly one ordinal, known as its order type.”

**Sources:** none listed. No primary source with a working link was found.

### Von Neumann ordinals show directly that no set contains every ordinal

**Remember:** A set of all ordinals would be an ordinal inside itself.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set strictly well-ordered by membership. Transitivity means that the set contains every element of each member (our own).

**Problem.** There is no set of all ordinals.

**How the definition helps.** A set Ω of all ordinals would be transitive because every member of an ordinal is an ordinal (our own). The ordinal comparison theorem makes membership a well-order on any set of ordinals (our own). Thus Ω would itself be an ordinal and satisfy Ω ∈ Ω, contradicting strictness (our own).

**Paper or page:** [Burali-Forti Paradox](https://proofwiki.org/wiki/Burali-Forti_Paradox). It says: “Hence the set of all ordinals is not an allowable set.”

**Sources:** none listed. No primary source with a working link was found.

### Well-orders have no nontrivial automorphisms, so comparisons between them are unique

**Remember:** A well-order cannot be shifted, because its least element must stay put.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers), 06A05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A well-order is a total order in which every nonempty subset has a least element. For a well-ordered class, require this for every nonempty subclass (our own). An order isomorphism is a bijection preserving order in both directions.

**Problem.** Every order automorphism of a well-ordered set or class is the identity. So between two well-ordered sets there is at most one order isomorphism.

**How the definition helps.** If an automorphism moves any point, take the least moved point a (our own). It fixes every predecessor of a, so it preserves their complement and fixes its least point a (our own). Composing one isomorphism with the inverse of another gives an automorphism, hence the two agree (our own).

**nLab:** [well-order](https://ncatlab.org/nlab/show/well-order). It says: “Note that any simulation of S in T must be unique.”

**Paper or page:** [Order Automorphism on Well-Ordered Class is Identity Mapping](https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Identity_Mapping), [Well-Ordered Classes are Isomorphic at Most Uniquely](https://proofwiki.org/wiki/Well-Ordered_Classes_are_Isomorphic_at_Most_Uniquely). It says: “Let (A, ≼) be a well-ordered class. Let φ be an order isomorphism on (A, ≼). Then φ is the identity mapping”

**Sources:**

- [ProofWiki, Order Automorphism on Well-Ordered Class is Identity Mapping](https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Identity_Mapping)
- [ProofWiki, Well-Ordered Classes are Isomorphic at Most Uniquely](https://proofwiki.org/wiki/Well-Ordered_Classes_are_Isomorphic_at_Most_Uniquely)

### Intersecting equivalence relations gives the greatest common refinement

**Remember:** Keep two points together only when both partitions do.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A partition splits a set into nonempty blocks, with each point in exactly one block. Its relation records the pairs of points in the same block. One partition refines another if each of its blocks lies inside a block of the other.

**Problem.** The nonempty intersections of blocks from two partitions form a partition that refines both. Every partition refining both also refines this one.

**How the definition helps.** Refinement means inclusion of the recorded pairs, so intersecting the two relations keeps the largest relation contained in both. In our own proof, the block of a point consists of the points sharing both its original blocks.

**nLab:** [partition](https://ncatlab.org/nlab/show/partition). It says: “Refinement corresponds to implication between relations.”

**Sources:** none listed. No primary source with a working link was found.

### Appending at the end lets Zorn’s lemma give well-orders

**Remember:** Never add a new predecessor to an old point.

*Rules out counterexamples.* MSC 03E25 (Axiom of choice and related propositions), 03E10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A well-order compares every pair and gives every nonempty subset a least element. An end extension preserves the old order and puts all new points after all old ones.

**Problem.** Assuming Zorn’s lemma, every set admits a well-order.

**How the definition helps.** In a chain of end extensions, a subset’s least point in any stage it meets remains its least point in the union. Thus the union gives each chain an upper bound, and Zorn’s lemma supplies a maximal well-ordered subset. Appending any missing point would extend it. In our own counterexample, ordering successively longer finite lists of natural numbers backwards gives a union with no least element.

**nLab:** [Zorn's lemma](https://ncatlab.org/nlab/show/Zorn%27s+lemma). It says: “If C is a chain in the poset consisting of subsets Xα, then their union X is a well-order”

**Sources:** none listed. No primary source with a working link was found.

### Choice on fibers gives right inverses to surjections

**Remember:** To undo an onto map, pick one input for each output.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 03E20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A surjection reaches every value in its target. A right inverse sends each target value back to an input that gives that value. The set of such inputs is the fiber over that value.

**Problem.** The axiom of choice holds exactly when every surjection between sets has a right inverse.

**How the definition helps.** Choosing one input in each fiber gives exactly the function required for a right inverse. The axiom of choice permits this selection for any family of nonempty sets. In our own converse proof, form all pairs (i, x) with x in the set labeled i. Sending each pair to i reaches every label, so a right inverse selects an element from every set.

**nLab:** [axiom of choice](https://ncatlab.org/nlab/show/axiom+of+choice). It says: “The axiom of choice is then also the statement that all epimorphisms are split epimorphisms in the category Set of sets.”

**Sources:** none listed. No primary source with a working link was found.

### Defining products as choice functions exposes the axiom of choice

**Remember:** A point in a product is one choice at every index.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 03E20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The Cartesian product of an indexed family consists of functions that assign to each index an element of the corresponding set. For two indices, these functions are just ordered pairs written with coordinate labels.

**Problem.** The axiom of choice is equivalent to saying that every Cartesian product of nonempty sets is nonempty.

**How the definition helps.** A function choosing one element from every set is exactly an element of the product. In our own explanation, reading the same function either way proves both implications. For an empty family, the empty function belongs to the product.

**Wikipedia:** [Axiom of choice](https://en.wikipedia.org/wiki/Axiom_of_choice). It says: “The Cartesian product of any collection of nonempty sets is nonempty.”

**Sources:** none listed. No primary source with a working link was found.

### Finite character makes the existence of a basis one line

**Remember:** Test membership by checking all finite subsets.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 15A03. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A family of subsets of a set has finite character if a subset belongs exactly when all its finite subsets belong.

**Problem.** Every vector space has a basis.

**How the definition helps.** Linear independence has finite character because every linear relation involves finitely many vectors (our own). The Teichmüller–Tukey lemma therefore gives a maximal independent set, starting from the empty set. Any vector outside its span could be added while preserving independence, contradicting maximality (our own).

**Wikipedia:** [Teichmüller–Tukey lemma](https://en.wikipedia.org/wiki/Teichm%C3%BCller%E2%80%93Tukey_lemma). It says: “This is a collection of finite character. Thus, a maximal set exists, which must then span V and be a basis for V.”

**Sources:**

- [Tukey, J. W. (1940). Convergence and Uniformity in Topology. Annals of Mathematics Studies 2, Princeton University Press.](https://doi.org/10.1515/9781400882199)

### Ordering chains by inclusion gives a maximal chain

**Remember:** Use inclusion so nested chains have a union above them.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A chain is a subset in which every pair is comparable. For a given chain, order all chains containing it by inclusion.

**Problem.** Assuming Zorn’s lemma, every chain in a partially ordered set lies in a maximal chain.

**How the definition helps.** Ordering the extensions by inclusion lets their union bound every nonempty chain of extensions. Any two points of this union occur together in one extension, so they are comparable. The given chain bounds the empty chain of extensions. Zorn’s lemma now gives a maximal member, which is a maximal chain in the original order.

**Wikipedia:** [Hausdorff maximal principle](https://en.wikipedia.org/wiki/Hausdorff_maximal_principle). It says: “a union of a totally ordered set of chains is a chain”

**Paper or page:** [Zorn's Lemma implies Hausdorff's Maximal Principle](https://proofwiki.org/wiki/Zorn's_Lemma_implies_Hausdorff's_Maximal_Principle). It says: “Then Hausdorff's Maximal Principle holds.”

**Sources:** none listed. No primary source with a working link was found.

### The empty chain makes the set in Zorn's lemma non-empty

**Remember:** The empty chain needs an upper bound too, so P cannot be empty.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A chain in a partially ordered set P is a subset whose elements are pairwise comparable. An upper bound of a chain C is an element of P above or equal to every member of C.

**Problem.** Zorn's lemma needs no separate hypothesis that P is non-empty. Without the empty chain, the lemma would be false for the empty partially ordered set, which has no maximal element.

**How the definition helps.** Every element of P bounds the empty chain. Requiring such a bound therefore requires an element of P. In the empty order, the condition on nonempty chains alone holds vacuously, yet no maximal element exists (our own).

**Wikipedia:** [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma). It says: “property (1) is redundant, since property (2) says, in particular, that the empty chain has an upper bound in P, implying P is nonempty.”

**Sources:**

- [Max Zorn, A remark on method in transfinite algebra, Bulletin of the American Mathematical Society 41 (1935) 667–670](https://doi.org/10.1090/S0002-9904-1935-06166-X)

### The least element rule turns a well-order into choices

**Remember:** Choose the first element of each set.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 03E10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A well-order is a total order in which each nonempty subset has a least element. A choice function on a family selects one element from each set in the family.

**Problem.** Every family of nonempty subsets of a well-ordered set has a choice function. If every set can be well-ordered, then every family of nonempty sets has a choice function.

**How the definition helps.** The definition supplies one unique choice for each subset. The work moves to finding a well-order on the union of the family. In our own example, the usual order on the integers cannot supply a first element for the whole set.

**Paper or page:** [Choice Function Exists for Well-Orderable Union of Sets](https://proofwiki.org/wiki/Choice_Function_Exists_for_Well-Orderable_Union_of_Sets). It says: “Let the union ⋃𝕊 be well-orderable.”

**Sources:** none listed. No primary source with a working link was found.

### Zorn's lemma packages transfinite induction into one condition to check

**Remember:** Every chain has an upper bound, including the empty chain.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A partially ordered set is inductive if every chain has an upper bound in the set, including the empty chain. A chain is a subset whose elements are pairwise comparable.

**Problem.** Every vector space has a basis, and every nontrivial ring with 1 has a maximal ideal.

**How the definition helps.** Zorn’s lemma gives a maximal element once every chain has an upper bound. Chain unions preserve linear independence, and the empty set bounds the empty chain (our own). A maximal independent set spans because one could adjoin any vector outside its span (our own). Nonempty chain unions of proper ideals omit 1, and the zero ideal bounds the empty chain (our own).

**Wikipedia:** [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma). It says: “Zorn's lemma tidies up the conditions a situation needs to satisfy in order for such an argument to work and enables mathematicians to not have to repeat the transfinite induction argument by hand each time”

**Sources:**

- [Kuratowski, C. (1922). Une méthode d'élimination des nombres transfinis des raisonnements mathématiques. Fundamenta Mathematicae 3, 76–108.](https://doi.org/10.4064/fm-3-1-76-108)
- [Zorn, M. (1935). A remark on method in transfinite algebra. Bulletin of the American Mathematical Society.](https://doi.org/10.1090/S0002-9904-1935-06166-X)

### Separation instead of comprehension blocks Russell's paradox

**Remember:** Cut a subset out of a set; never collect everything with a property.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For each set A and each set-theoretic formula φ(x) with fixed parameters, separation gives the set of exactly those x ∈ A satisfying φ(x).

**Problem.** With separation, no set contains all sets. For every set A, the subset {x ∈ A : x ∉ x} lies outside A.

**How the definition helps.** Apply separation inside A to obtain R = {x ∈ A : x ∉ x} (our own). If R belonged to A, its defining condition would give R ∈ R exactly when R ∉ R (our own). Thus R lies outside A (our own).

**Wikipedia:** [Axiom schema of specification](https://en.wikipedia.org/wiki/Axiom_schema_of_specification), [Axiom of regularity](https://en.wikipedia.org/wiki/Axiom_of_regularity). It says: “Because restricting comprehension avoids Russell's paradox, several mathematicians including Zermelo, Fraenkel, and Gödel considered it the most important axiom of set theory.”

**Sources:**

- [Zermelo, E. (1908). Untersuchungen über die Grundlagen der Mengenlehre. I. Mathematische Annalen, 261–281.](https://doi.org/10.1007/BF01449999)

### The axiom of regularity gives every set a rank

**Remember:** Every nonempty set has a bottom element under membership.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03E10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The axiom of regularity says that every nonempty set A has an element that has no element in common with A. In other words, the membership relation ∈ is well-founded.

**Problem.** Over the other ZF axioms, regularity places every set in some stage V(α) of the cumulative hierarchy. Every set has an ordinal rank, and induction on membership reaches every set.

**How the definition helps.** Regularity excludes a Quine atom x = {x}, whose only element meets x and which could have no ordinal rank (our own). Well-founded recursion assigns each set the supremum of its members’ successor ranks (our own). A set of rank α belongs to V(α + 1), and induction on rank gives membership induction (our own).

**Wikipedia:** [Axiom of regularity](https://en.wikipedia.org/wiki/Axiom_of_regularity), [Well-founded relation](https://en.wikipedia.org/wiki/Well-founded_relation). It says: “However, regularity makes some properties of ordinals easier to prove; and it not only allows induction to be done on well-ordered sets but also on proper classes that are well-founded relational structures”

**Sources:**

- [Zermelo, E. (1930). Über Grenzzahlen und Mengenbereiche. Fundamenta Mathematicae 16, 29–47.](https://doi.org/10.4064/fm-16-1-29-47)

### One formula on the right turns Gentzen's LK into intuitionistic logic

**Remember:** An intuitionistic sequent has at most one conclusion.

*Makes the theorem clean to state or prove.* MSC 03F05 (Cut-elimination and normal-form theorems), 03B20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In Gentzen’s intuitionistic sequent calculus LJ, each sequent Γ ⊢ Δ has a list of assumptions Γ and at most one conclusion in Δ.

**Problem.** Intuitionistic logic has the disjunction property. If A ∨ B is provable with no assumptions, then A is provable or B is provable.

**How the definition helps.** Gentzen’s cut-elimination theorem supplies a cut-free proof of the closed sequent ⊢ A ∨ B. With empty assumptions and one conclusion, the logical rule introducing that disjunction must choose a disjunct (our own). Its premise proves the chosen disjunct without assumptions (our own).

**Wikipedia:** [Sequent calculus](https://en.wikipedia.org/wiki/Sequent_calculus), [Disjunction and existence properties](https://en.wikipedia.org/wiki/Disjunction_and_existence_properties). It says: “The resulting system is called LJ. It is sound and complete with respect to intuitionistic logic and admits a similar cut-elimination proof. This can be used in proving disjunction and existence properties.”

**Sources:**

- [Gentzen, G. (1935). Untersuchungen über das logische Schließen. I. Mathematische Zeitschrift 39, 176–210.](https://doi.org/10.1007/BF01201353)

### Multiset sequents make reordering formulas need no exchange rule

**Remember:** Keep the repetitions and drop the order.

*True by definition.* MSC 03F07 (Structure of proofs). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A sequent lists assumptions and possible conclusions. Use a multiset, which retains repetitions but ignores order, for each side. Gentzen's original presentation uses ordered sequences and a rule that swaps adjacent formulas.

**Problem.** In the classical sequent calculus with multiset contexts, permuting either side does not change a sequent or its derivability.

**How the definition helps.** With multisets, a reordered sequent is the very same sequent, so no exchange rule is needed. Wikipedia notes that multisets remove the explicit permutation rule. Our own comparison turns each multiset proof into a proof with ordered sequences. It inserts swaps of adjacent formulas to bring the formula used by each rule into place.

**Wikipedia:** [Sequent calculus](https://en.wikipedia.org/wiki/Sequent_calculus). It says: “A common simplification involves the use of multisets of formulas in the interpretation of the sequent, rather than sequences, eliminating the need for an explicit permutation rule.”

**Sources:**

- [Negri and von Plato (2001), Structural Proof Theory, Cambridge University Press](https://doi.org/10.1017/CBO9780511527340)

### Second-order induction makes the natural numbers unique up to isomorphism

**Remember:** Second-order induction leaves no room for extra numbers.

*Rules out counterexamples.* MSC 03F35 (Second- and higher-order arithmetic and fragments), 03C85, 03C35. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In Peano's original axioms, the induction axiom is second-order: it speaks about all sets of numbers. It says that every set of numbers that contains 0 and is closed under successor contains all numbers.

**Problem.** Under full second-order semantics, any two Peano models admit exactly one isomorphism preserving zero and successor.

**How the definition helps.** The finite iterates of successor from zero form a subset closed under successor, so induction exhausts the model (our own). This rules out the extra elements of nonstandard first-order models (our own). Injectivity of successor and the absence of a predecessor of zero make these iterates distinct (our own). An isomorphism must match corresponding iterates, and this matching works (our own).

**Wikipedia:** [Peano axioms](https://en.wikipedia.org/wiki/Peano_axioms). It says: “any two models of the Peano axioms (including the second-order induction axiom) are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Gödel numbering turns statements about proofs into statements about numbers

**Remember:** Code every formula and proof as a number, and proofs become arithmetic.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F30. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Gödel numbering effectively assigns distinct natural numbers to syntactic objects. In prime-power coding, encode a sequence of positive symbol codes as the product of successive primes raised to the corresponding codes (our own).

**Problem.** With this coding and primitive recursive syntax, axiom tests and rule checks, formulahood, axiomhood and proof checking are primitive recursive. Sufficiently strong arithmetic can express provability and construct a sentence asserting its own unprovability.

**How the definition helps.** Factoring a code recovers its symbols by bounded searches (our own). Primitive recursion checks its formation and each proof step (our own). Arithmetic represents these checks, and the diagonal lemma supplies the self-reference (our own).

**Wikipedia:** [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering). It says: “syntactic properties of a statement—such as being a well-formed formula, being an axiom, or being provable—correspond to arithmetical properties of its Gödel number, so that questions about the system become questions about numbers.”

**Sources:**

- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Rosser's provability predicate removes the need for ω-consistency

**Remember:** Rosser asks whether a proof comes before any proof of the opposite.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F30. arXiv math.LO. Level 2: later undergraduate.

**Definition.** For a fixed proof coding, Rosser provability of φ means some proof code p proves φ and no smaller code proves ¬φ. A diagonal fixed point ρ asserts its own failure of Rosser provability (our own).

**Problem.** In any consistent, effectively axiomatized extension of Robinson arithmetic, the Rosser sentence is neither provable nor refutable. Consistency alone suffices.

**How the definition helps.** A proof of ρ would have no earlier counterproof by consistency, and arithmetic verifies that finite check, contradicting ρ (our own). A proof of ¬ρ would exclude all later Rosser witnesses by definition (our own). Arithmetic could also check all earlier codes, finding no proof of ρ by consistency, and thus prove ρ (our own).

**Wikipedia:** [Rosser's trick](https://en.wikipedia.org/wiki/Rosser%27s_trick). It says: “Rosser's trick is a method for proving a variant of Gödel's incompleteness theorems not relying on the assumption that the theory being considered is ω-consistent”

**Sources:**

- [Rosser, J. B. (1936). Extensions of some theorems of Gödel and Church. Journal of Symbolic Logic 1, 87–91.](https://doi.org/10.2307/2269028)
- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Defining well-foundedness by induction makes induction valid constructively

**Remember:** Well-founded means exactly that induction along ≺ is valid.

*True by definition.* MSC 03F65 (Other constructive mathematics), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A subset A of a set S is ≺-inductive if x is in A whenever every t ≺ x is in A. A relation ≺ on S is well-founded if the only ≺-inductive subset of S is S itself.

**Problem.** For a well-founded relation ≺, induction along ≺ is valid, also in constructive mathematics without excluded middle.

**How the definition helps.** For any inductive property, its satisfying elements form an inductive subset (our own). Well-foundedness in this sense makes that subset all of S, without using excluded middle (our own).

**nLab:** [well-founded relation](https://ncatlab.org/nlab/show/well-founded+relation). It says: “the infinite descent condition is too weak to be of much use in constructive mathematics. It is the inductive notion of well-foundedness that is just right.”

**Sources:**

- [Paul Taylor, Intuitionistic sets and ordinals, Journal of Symbolic Logic 61 (1996) 705–744](https://doi.org/10.2307/2275781)

### The Lindenbaum–Tarski algebra turns complete theories into ultrafilters

**Remember:** Sentences up to provable equivalence form an algebra, and logic becomes algebra.

*Makes the theorem clean to state or prove.* MSC 03G05 (Logical aspects of Boolean algebras), 06E05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The Lindenbaum–Tarski algebra of a theory T is the set of sentences, with two sentences identified when T proves each from the other. The logical connectives become the operations. For classical logic it is a Boolean algebra.

**Problem.** Every consistent classical first-order theory extends to a complete consistent theory. In its Lindenbaum–Tarski algebra, this says that every proper filter extends to an ultrafilter.

**How the definition helps.** Deductively closed consistent extensions correspond to proper filters of sentence classes (our own). Deciding each sentence means the filter contains its class or its complement, exactly the ultrafilter condition (our own). The Boolean ultrafilter lemma now gives the extension.

**Wikipedia:** [Lindenbaum–Tarski algebra](https://en.wikipedia.org/wiki/Lindenbaum%E2%80%93Tarski_algebra). It says: “Moreover, an ultrafilter in A corresponds to a complete consistent theory, establishing the equivalence between Lindenbaum's lemma and the ultrafilter lemma.”

**Sources:** none listed. No primary source with a working link was found.

### Hilbert's ε-operator gives quantifiers and choice from one axiom

**Remember:** ε picks a witness if there is one.

*True by definition.* MSC 03B10 (Classical first-order logic), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** For each property P(x) there is a term εx.P(x), with the axiom P(a) → P(εx.P(x)). In words: if anything has the property, then the chosen term εx.P(x) has it.

**Problem.** With the ε-axiom, ∃x P(x) is equivalent to P(εx.P(x)). For any family (Aᵤ) of inhabited sets, u ↦ εx.(x ∈ Aᵤ) is a choice function.

**How the definition helps.** If P has a witness, the ε-axiom gives P(εx.P(x)). Conversely, that term itself witnesses the existential statement (our own). Applying the same rule to membership in each inhabited Aᵤ gives the required choice function (our own).

**nLab:** [choice operator](https://ncatlab.org/nlab/show/choice+operator). It says: “This has the advantage of also allowing the existential and universal quantifiers to be constructed explicitly, since ∃x translates to P(ε<sub>x</sub>(P(x))).”

**Sources:**

- [David Hilbert, Über das Unendliche, Mathematische Annalen 95 (1926)](https://doi.org/10.1007/BF01206605)

### Requiring unique existence makes extensions by definitions conservative

**Remember:** Every old model can interpret the new name in exactly one way.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 3: graduate.

**Definition.** An explicit definition adds a fresh symbol using a formula of the old language. A relation symbol holds exactly on the tuples satisfying that formula. For a function symbol, the old theory must prove that each input tuple has exactly one output satisfying the formula.

**Problem.** An extension by definitions proves no new sentences in the old language. In other words, it is a conservative extension.

**How the definition helps.** Each old model expands by interpreting the symbol as the specified relation or function (our own). Completeness therefore gives conservativity for old sentences (our own). Without the condition, adjoining a square root of 2 to field theory excludes the rational field and proves that such a root exists (our own).

**Wikipedia:** [Extension by definition](https://en.wikipedia.org/wiki/Extension_by_definition). It says: “The fact that T' is a conservative extension of T shows that the defining axiom of R cannot be used to prove new theorems.”

**Sources:** none listed. No primary source with a working link was found.

### A higher inductive free group has its universal property by definition

**Remember:** Constructors are the group laws, so maps out need nothing else.

*True by definition.* MSC 03B38 (Type theory), 20E05. arXiv math.LO, math.GR. Level 3: graduate.

**Definition.** A higher inductive type is a type given by constructors for elements and also for equalities. The HoTT Book defines F(A) as such a type, with a map η : A → F(A), a multiplication, a unit and an inverse. It has one equality constructor for each group law, and a last constructor makes F(A) a set.

**Problem.** F(A) is the free group on A. For each set-level group G, restriction to generators identifies homomorphisms F(A) → G with functions A → G.

**How the definition helps.** The recursion rule extends any assignment on A by interpreting the operations in G and the equality constructors by its group laws (our own). Since G is a set, it satisfies the final constructor (our own). Induction makes this extension the unique homomorphism with the given generator values (our own).

**Paper or page:** [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “F(A) is the free group on A. In other words, for any (set) group G, composition with η : A → F(A) determines an equivalence”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### A type is n-connected exactly when its maps into n-types are constant

**Remember:** Connected means the truncation is a point, so maps out are constant.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55P60. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The n-truncation of A is an n-type with a map from A through which maps to every n-type factor uniquely up to coherent homotopy. A is n-connected if its n-truncation is equivalent to a point.

**Problem.** A type A is n-connected exactly when, for every n-type B, the constant-function map B → (A → B) is an equivalence.

**How the definition helps.** Truncation identifies maps A → B with maps from the truncation to B (our own). For a contractible truncation, evaluation at its center inverts the constant-function map (our own). Conversely, take B to be the truncation: its identity then equals a constant map, giving a contraction (our own).

**Paper or page:** [HoTT Book: Hlevels](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hlevels](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “A type A is n-connected if and only if the map λb.λa.b : B → (A → B) is an equivalence for every n-type B. In other words, “every map from A to an n-type is constant”.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### An interval type with definitional computation rules proves function extensionality

**Remember:** When paths are maps from an interval, pointwise paths make a path of functions.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** The higher inductive interval has endpoints 0 and 1 and a path s from 0 to 1. For each path p from b to c, interval recursion gives a function sending s to p. Its endpoint values compute judgmentally to b and c.

**Problem.** In type theory with this interval and function η, pointwise equal functions are equal.

**How the definition helps.** For each x, interval recursion on the given path gives a function hₓ with endpoints f(x) and g(x) by computation (our own). Apply i ↦ (x ↦ hₓ(i)) to the interval path (our own). Function η identifies its endpoints with f and g (our own).

**nLab:** [function extensionality](https://ncatlab.org/nlab/show/function+extensionality), [cubical type theory](https://ncatlab.org/nlab/show/cubical+type+theory). It says: “Postulating an interval type with judgmental computation rules for the point constructors of the interval type implies function extensionality.”

**Sources:**

- [Mike Shulman, An interval type implies function extensionality, Homotopy Type Theory blog (4 April 2011)](https://homotopytypetheory.org/2011/04/04/an-interval-type-implies-function-extensionality/)
- [Cyril Cohen, Thierry Coquand, Simon Huber, Anders Mörtberg, Cubical Type Theory: a constructive interpretation of the univalence axiom, TYPES 2015, LIPIcs 69 (2018); arXiv:1611.02108](https://arxiv.org/abs/1611.02108)

### Contractible fibres make equivalence in type theory a mere proposition

**Remember:** A family of propositions is itself a proposition, so fibrewise contractibility is a property.

*True by definition.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The fiber of f over y consists of pairs (x, p) with p a path from f(x) to y. A function is an equivalence if each fiber has a center with a path from that center to every point.

**Problem.** With function extensionality, the type asserting that a function is an equivalence is a mere proposition. Any two witnesses are equal.

**How the definition helps.** Witnesses form a dependent product, one contractibility witness per fiber (our own). Contractibility of a fixed type is a mere proposition (our own). Function extensionality turns these pointwise equalities into equality of witnesses (our own).

**Paper or page:** [Equivalences, Lemma 5.3](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [Logic, Lemma 12.3](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [Equivalences, Theorem 2.3](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “For any f, the type isContr(f) is a mere proposition.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Chapter 4](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Contractible-fiber equivalences make pullbacks of equivalences into equivalences

**Remember:** The fiber of a pullback map is the fiber over the image.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** The fiber of f at y consists of pairs (x, p) with p a path from f(x) to y. A map is an equivalence if each fiber has a center with a path to every point.

**Problem.** Pulling back an equivalence along any function gives an equivalence. Here a pullback keeps the path that witnesses agreement, as a homotopy pullback does.

**How the definition helps.** The fiber of the pullback along g at z is equivalent to the original fiber at g(z) (our own). Transport its center and contraction across this equivalence to contract the new fiber (our own).

**nLab:** [equivalence of types](https://ncatlab.org/nlab/show/equivalence+of+types). It says: “if all its pre-images are essentially unique, namely if all its fiber types are contractible types.”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Cubical paths make the action of a composite function compute strictly

**Remember:** Compose functions point by point along the path.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A cubical path from x to y is an interval function with endpoints x and y. A function f sends a path p to the path i ↦ f(p(i)) (our own).

**Problem.** Applying g ∘ f to a cubical path gives, by computation alone, the same path as applying f and then g.

**How the definition helps.** Both actions compute to i ↦ g(f(p(i))), so their paths agree by computation (our own).

**nLab:** [cubical type theory](https://ncatlab.org/nlab/show/cubical+type+theory), [cubical path type](https://ncatlab.org/nlab/show/cubical+path+type). It says: “maps out of an interval primitive is used to define cubical path types, rather than the inductive family of Martin-Löf identity types”

**Sources:**

- [Cohen, Coquand, Huber and Mörtberg (2018), Cubical Type Theory — a constructive interpretation of the univalence axiom, TYPES 2015, LIPIcs 69](https://doi.org/10.4230/LIPIcs.TYPES.2015.5)

### Define equivalences so that being an equivalence is a property

**Remember:** Contractible fibers or two separate one-sided inverses give a property, not extra structure.

*Rules out counterexamples.* MSC 03B38 (Type theory). arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The fiber of f over y consists of pairs (x, p) with p a path from f(x) to y. An equivalence has a center and a path from it to every point in each fiber. Equivalently, f has separately specified left and right inverses up to homotopy.

**Problem.** With either definition and function extensionality, the type isEquiv(f) is a mere proposition: any two of its elements are equal. So the equivalences form a subtype of A → B, and two equivalences are equal when their functions are equal.

**How the definition helps.** Contractibility witnesses form a mere proposition for each fiber, and function extensionality preserves this property across the family (our own). Bi-invertibility gives an equivalent witness type. A single quasi-inverse with two homotopies can retain extra loop data, as for the identity on the circle (our own). Thus equality of underlying functions suffices for equality in the subtype (our own).

**nLab:** [equivalence of types](https://ncatlab.org/nlab/show/equivalence+of+types). It says: “Moreover, at least if we assume function extensionality, the evident types of "homotopy isomorphisms" and of functions with contractible fibers are equivalent and are h-propositions.”

**Sources:**

- [Vladimir Voevodsky, Univalent Foundations Project (2010), a modified version of an NSF grant application, p. 8 and p. 10](http://www.math.ias.edu/~vladimir/Site3/Univalent_Foundations_files/univalent_foundations_project.pdf)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Defining syntax as trees gives structural induction for free

**Remember:** A term is a tree, and a string is just a way to write it.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03B40. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** For a fixed signature, raw terms form the inductive family generated by variables and one constructor per operator. Each constructor takes the subterms and binds the variables specified by its operator (our own).

**Problem.** Raw terms satisfy an induction and a recursion principle over their constructors, and each term can be read in only one way.

**How the definition helps.** The inductive family supplies structural induction and recursion. Distinct constructors have disjoint images, and each constructor determines its arguments, giving unique readability of the tree (our own).

**nLab:** [Initiality Project - Raw Syntax](https://ncatlab.org/nlab/show/Initiality+Project+-+Raw+Syntax). It says: “This way we obtain automatically an induction principle for defining functions by recursion and proving theorems by induction over the set of terms, which in the strings-of-symbols approach one has to prove by hand.”

**Sources:**

- [Robert Harper, Practical Foundations for Programming Languages, 2nd ed., Cambridge University Press, 2016](https://doi.org/10.1017/CBO9781316576892)

### Defining the cofiber by constructors makes its maps out classify nullhomotopies

**Remember:** A path to the new point records how to kill each image.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The cofiber of f : A → B is the higher inductive type freely generated by a copy of B and a basepoint. For each a ∈ A it has a path from the copy of f(a) to that basepoint (our own).

**Problem.** Pointed maps from the cofiber into a pointed type Y correspond to maps g from B to Y with a specified homotopy. That homotopy takes g ∘ f to the constant map at the basepoint of Y.

**How the definition helps.** The cofiber mapping rule asks where each point and path constructor goes (our own). Pointedness fixes the new point at the target basepoint, and the path images give exactly the specified homotopy (our own).

**nLab:** [cofiber type](https://ncatlab.org/nlab/show/cofiber+type). It says: “the cofiber type takes the image of the function f:A → B and makes it contractible”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Defining the smash product as a pushout gives its maps out directly

**Remember:** To map out, give a map and tell how to collapse the axes.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** For pointed types A and B, the wedge A ∨ B is their pushout over the point. Their smash product is the pushout of the two maps from A ∨ B to A × B and to the point. The first map includes each axis using the other basepoint (our own).

**Problem.** Pointed maps from the smash product correspond to maps from the product with a specified homotopy to the constant map on the wedge.

**How the definition helps.** The pushout mapping rule asks for a map on the product and a compatible map on the point (our own). Pointedness fixes the latter at the target basepoint, leaving precisely the specified homotopy on the wedge (our own).

**nLab:** [smash product type](https://ncatlab.org/nlab/show/smash+product+type). It says: “The smash product type of two pointed types A,B can be defined as the pushout type of the span”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Defining unique existence as contractibility makes unique choice provable

**Remember:** If unique existence means 'the type of solutions is contractible', you hold the solution.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** Unique existence of x satisfying P(x) means that the type of pairs (x, p), with p a witness of P(x), is contractible (our own). Contractibility supplies a center and a path from it to each point (our own).

**Problem.** Assume function extensionality in Martin-Löf type theory. If each type of pairs (y, r) with y ∈ B(a) and r witnessing R(a, y) is contractible, some function f satisfies R(a, f(a)) everywhere.

**How the definition helps.** At each a, let f(a) be the first component of the center (our own). The second component witnesses R(a, f(a)) (our own).

**nLab:** [principle of unique choice](https://ncatlab.org/nlab/show/principle+of+unique+choice). It says: “Whether unique choice is provable or not depends mostly on what notion of proposition is used. It is not provable using the primitive notion of proposition in OTT or Rocq.”

**Sources:**

- [Martín Hötzel Escardó, Introduction to Univalent Foundations of Mathematics with Agda (2019), arXiv:1911.00580](https://arxiv.org/abs/1911.00580)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Embeddings, not injections, make surjective maps of types into equivalences

**Remember:** For types, injective is too weak; ask for an embedding.

*Rules out counterexamples.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A map f is an embedding if, for every x and y, its action on paths from x to y is an equivalence. It is surjective if the propositional truncation of every fiber is inhabited (our own). It is injective if equality of images implies equality of inputs (our own).

**Problem.** Classically, a function is a bijection exactly when it is injective and surjective. In homotopy type theory, the same holds for all types when injective is replaced by embedding.

**How the definition helps.** Embedding means every fiber is a mere proposition, so mere inhabitation gives a center and contraction (our own). Conversely, contractible fibers are inhabited propositions (our own). Under univalence, the point selecting the booleans in the type of merely two-element sets is injective and surjective (our own). The boolean swap gives a nonidentity loop at its image, so the map is no embedding (our own).

**nLab:** [embedding of types](https://ncatlab.org/nlab/show/embedding+of+types). It says: “The analogue in dependent type theory of the concept of injection in set theory, embedding of topological spaces in topology, and embedding in category theory.”

**Paper or page:** [HoTT Book: Equivalences](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “A function f : A → B is an equivalence if and only if it is both surjective and an embedding.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Excluded middle for mere propositions is consistent with univalence

**Remember:** A mere proposition can be true or false, but not true in two ways.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03F25. arXiv math.LO. Level 3: graduate.

**Definition.** A type P is a mere proposition if every pair of elements of P admits a path between them.

**Problem.** Excluded middle restricted to mere propositions is consistent with univalent type theory relative to the classical assumptions of its simplicial set model.

**How the definition helps.** Restricting excluded middle to mere propositions removes the boolean swap counterexample. Choosing an element of every inhabited type would require a boolean fixed by the swap, by univalence (our own). Every self-equivalence of an inhabited mere proposition fixes its center (our own). The classical simplicial set model establishes relative consistency of the restricted principle with univalence (our own).

**nLab:** [mere proposition](https://ncatlab.org/nlab/show/mere+proposition). It says: “the PAT version of excluded middle contradicts the univalence axiom, whereas the mere-propositional version does not”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study, 2013](https://homotopytypetheory.org/book/)

### Higher inductive quotients map out by definition, and effectiveness becomes the theorem

**Remember:** Add a point per input and a path per related pair, then truncate to sets.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18A32. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** For a proposition-valued relation R on A, its set-quotient is freely generated as a set by points q(a) for all a ∈ A. For each witness of R(a, b), it has a path from q(a) to q(b) (our own).

**Problem.** Maps from A/R to a set correspond to maps from A that respect R. For an equivalence relation R, the quotient is effective: q(a) = q(b) holds exactly when R(a, b).

**How the definition helps.** Set-quotient recursion gives exactly the maps respecting the generating paths (our own). For an equivalence relation, quotient induction and propositional univalence let R(a, b) descend to a proposition depending on the quotient classes (our own). Transport reflexivity along an equality of classes to obtain R(a, b), while the path constructor gives the converse (our own).

**Paper or page:** [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Equivalence relations are effective and there is an equivalence A/R ≃ A⫽R.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Homotopy-initial algebras make inductive types unique as elements, not just isomorphic

**Remember:** Ask for a contractible space of maps, and initial objects become unique.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory), 18C15. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** An ℕ-algebra is a type with a chosen point and an endomorphism. An algebra is homotopy-initial if its structure-preserving maps to every algebra of the same signature form a contractible type. A contractible type has a center with a path to each point (our own).

**Problem.** In univalent type theory, any two homotopy-initial ℕ-algebras are equal, so their type is a mere proposition. For a W-type signature, induction with propositional computation holds exactly for homotopy-initial algebras.

**How the definition helps.** Contractibility supplies maps in both directions and identifies their composites with the respective identities (our own). Univalence turns the resulting algebra equivalence into equality (our own). The homotopy-initiality characterization of W-types identifies their induction and computation rules with this same mapping condition (our own).

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Any two h-initial ℕ-algebras are equal. Thus, the type of h-initial ℕ-algebras is a mere proposition.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)
- [Steve Awodey, Nicola Gambino, Kristina Sojakova, Inductive Types in Homotopy Type Theory, 27th Annual IEEE Symposium on Logic in Computer Science (2012)](https://doi.org/10.1109/lics.2012.21)
- [Steve Awodey, Nicola Gambino, Kristina Sojakova, Homotopy-Initial Algebras in Type Theory, Journal of the ACM (2017)](https://doi.org/10.1145/3006383)

### Identity systems reduce describing equality in a type to one contractibility check

**Remember:** Guess what equality means, then check one total space is contractible.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A pointed family over (A, a₀) consists of types R(b) for b in A and a point r₀ in R(a₀). It is an identity system if every dependent family over pairs (b, r) admits induction from (a₀, r₀). Each value there must extend to a section whose value there equals the original value (our own).

**Problem.** Being an identity system is equivalent to the map from a₀ = b to R(b) being an equivalence for every b. It is also equivalent to the type of pairs (b, r), with r in R(b), being contractible.

**How the definition helps.** The fundamental theorem of identity types identifies this induction rule with contractibility of the total space of pairs (our own). It also identifies both conditions with fiberwise equivalence of the canonical map sending reflexivity to r₀ (our own).

**nLab:** [identity system](https://ncatlab.org/nlab/show/identity+system). It says: “Identity systems are very useful in characterizing the extensionality principle of types such as function types, dependent function types, and Tarski universes.”

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Homotopy](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “For a pointed predicate (R, r₀) over (A, a₀), the following are logically equivalent. (R, r₀) is an identity system at a₀. … The type ∑ b:A R(b) is contractible.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### In type theory, the axiom of choice is a theorem

**Remember:** A witness pair gives the chosen value first and its proof second.

*True by definition.* MSC 03B38 (Type theory), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** An untruncated existential witness for R(x, y) is a pair consisting of y and a proof of R(x, y). A dependent function witnessing this existence for every x assigns such a pair to each x (our own).

**Problem.** Given g assigning each x ∈ A a pair (y, r) with y ∈ B and r witnessing R(x, y), a choice function exists. It assigns f(x) ∈ B with a witness of R(x, f(x)) for every x.

**How the definition helps.** Set f(x) to the first component of g(x) (our own). Its second component then has exactly the required type R(x, f(x)) (our own).

**nLab:** [type theoretic axiom of choice](https://ncatlab.org/nlab/show/type+theoretic+axiom+of+choice), [axiom of choice](https://ncatlab.org/nlab/show/axiom+of+choice). It says: “Despite its name, the type theoretic axiom of choice is provable in dependent type theory from the inference rules of dependent product types, dependent sum types, and identity types”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Integers generated by zero and an equivalence give recursion directly

**Remember:** An invertible step needs no separate rule for negative inputs.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** Present the integers as the inductive type generated by 0 and an equivalence s from ℤ to itself, where an equivalence is an invertible map. Its rule for defining maps asks for an image of 0 and an equivalence of the target. The usual construction builds ℤ from natural numbers, for example as differences.

**Problem.** For any set with a bijection and a chosen point, exactly one map from ℤ sends 0 to the point and commutes with the successor.

**How the definition helps.** Existence is the defining rule, and uniqueness follows by one induction, so no case analysis is needed. The nLab gives this definition of the integers type. For the usual integers, our own comparison iterates the bijection on positive numbers and its inverse on negative numbers. It then checks the successor step across 0 as a separate case.

**nLab:** [integers type](https://ncatlab.org/nlab/show/integers+type). It says: “the integers type is the inductive type generated by an element and an equivalence of types”

**Sources:** none listed. No primary source with a working link was found.

### Leaving inductive types out of LF makes binder encodings adequate

**Remember:** LF cannot look inside a term, so functions tm → tm only substitute.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03B40, 18C50. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** In the LF encoding of untyped lambda terms, tm is a base type with constants for application and abstraction (our own). Application takes two terms, and abstraction takes a function tm → tm, with LF binding its argument (our own).

**Problem.** In contexts of term variables, untyped lambda terms up to renaming bound variables correspond bijectively to canonical LF terms of type tm for this signature. The correspondence respects substitution.

**How the definition helps.** Canonical forms in this signature are variables, applications, or abstractions with a canonical body in an extended context (our own). LF has no case analysis on tm that could create an exotic binder inspecting its argument. Induction on canonical forms recovers each object term, and LF substitution implements its substitution (our own).

**nLab:** [logical framework](https://ncatlab.org/nlab/show/logical+framework). It says: “In fact, this weakness is essential in order to guarantee "adequacy" of the HOAS encoding.”

**Sources:**

- [Robert Harper, Furio Honsell, Gordon Plotkin, A framework for defining logics, Journal of the ACM 40(1) (1993) 143–184](https://doi.org/10.1145/138027.138060)

### Numbers as sizes of finite types make disjoint sums add sizes

**Remember:** Disjoint sum is addition before forgetting the labels.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A finite type is merely equivalent to {1, …, n} for some natural number n. Represent its cardinality by its class in the set truncation of finite types. Define the sum of two classes by taking the class of their disjoint sum (our own).

**Problem.** The cardinality of a disjoint sum of finite types is the sum of their cardinalities.

**How the definition helps.** For finite A and B, the definition gives \[A\] + \[B\] = \[A + B\] (our own). The right side is precisely the cardinality of their disjoint sum (our own).

**nLab:** [type of finite types](https://ncatlab.org/nlab/show/type+of+finite+types). It says: “The arithmetic operations and order relations on the natural numbers type can be defined by induction on set truncation”

**Sources:** none listed. No primary source with a working link was found.

### Parametric polymorphism gives theorems for free

**Remember:** If code cannot see the type, the type alone gives a law it obeys.

*True by definition.* MSC 03B38 (Type theory), 03B40, 68N18. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A family f indexed by sets A and B assigns an output in A to each pair in A × B. It is parametric if, for all relations on the respective input types, coordinatewise related pairs give outputs related by the first relation (our own).

**Problem.** Every closed System F term of type ∀A B. A × B → A commutes with every pair of functions α : A → C and β : B → D. In symbols, α ∘ f₍A,B₎ = f₍C,D₎ ∘ (α × β).

**How the definition helps.** Reynolds’ abstraction theorem gives relational parametricity. Apply it to the graphs of α and β: the outputs then lie in the graph of α, giving the stated equation (our own).

**nLab:** [polymorphism](https://ncatlab.org/nlab/show/polymorphism). It says: “In type systems with parametric polymorphism, such as System F, there is a family of proofs for every polymorphic type signature which each give an algebraic law for any function with that signature.”

**Sources:**

- [P. Wadler, Theorems for free!, Proceedings of FPCA 1989, ACM](https://doi.org/10.1145/99370.99404)

### Propositional truncation is localization at the map from booleans to unit

**Remember:** Make every pair of points equal, and what is left is a proposition.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18N55. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A type T is local for 𝟚 → 𝟙 if its diagonal T → T × T is an equivalence. Define \[A\] as the localization: a local type receiving a map from A that induces equivalences on mapping types into every local type (our own).

**Problem.** \[A\] is a proposition, and maps \[A\] → P to any proposition P correspond to maps A → P.

**How the definition helps.** The diagonal is an equivalence exactly when every two points are equal, so the local types are exactly the mere propositions (our own). The localization is local, and its mapping rule applies to every such proposition (our own).

**nLab:** [bracket type](https://ncatlab.org/nlab/show/bracket+type), [n-truncation modality](https://ncatlab.org/nlab/show/n-truncation+modality). It says: “By definition, the type of functions (𝟙 → \[A\]) → (𝟚 → \[A\]) is an equivalence of types.”

**Sources:**

- [E. Rijke, M. Shulman, B. Spitters, Modalities in homotopy type theory, Logical Methods in Computer Science 16 (2020), arXiv:1706.07526](https://arxiv.org/abs/1706.07526)

### Relational parametricity makes Church-encoded pairs correspond exactly to ordinary pairs

**Remember:** Ask the encoded pair for both parts with the identity map.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A Church pair for sets A and B assigns an element of R to every set R and map h from A × B into R. It is parametric if pointwise related maps always give related outputs, for every relation between their target sets (our own).

**Problem.** Every parametric Church pair is evaluation at one unique pair in A × B.

**How the definition helps.** Take p as the value of P on the identity of A × B (our own). For every h, the identity and h are pointwise related by the graph of h (our own). Parametricity gives Pᵣ(h) = h(p), and evaluation at the identity forces uniqueness (our own).

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “Parametricity is the abstract property enjoyed by the uniformly acting families”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Relational parametricity makes every polymorphic function from X to X the identity

**Remember:** A relation with only one pair leaves no room to move.

*True by definition.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Let F assign a map Fₓ : X → X to every set X. For every relation R between sets X and Y, parametricity requires related inputs x and y to have related outputs Fₓ(x) and Fᵧ(y) (our own).

**Problem.** Every parametric family F is the identity on each set.

**How the definition helps.** For each x ∈ X, use the relation {(x, x)} on X (our own). Preservation forces (Fₓ(x), Fₓ(x)) into that singleton, hence Fₓ(x) = x (our own).

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “parametricity is an abstract uniformity property enjoyed by parametrically polymorphic functions, which captures the intuition that all instances of a polymorphic function act the same way.”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Relational parametricity makes uniform iterators exactly the Church numerals

**Remember:** Count how often F applies successor, starting from zero.

*True by definition.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** For each set X, let Fₓ send endomorphisms of X to endomorphisms of X. Parametricity requires that whenever f and g preserve a relation R between their sets, Fₓ(f) and Fᵧ(g) also preserve R (our own).

**Problem.** Every parametric family F acts as f ↦ fⁿ for one fixed natural number n.

**How the definition helps.** Let n = Fℕ(successor)(0) (our own). For any f : X → X and x ∈ X, relate each natural k to fᵏ(x) (our own). Successor and f preserve this relation, so their images under F send the related pair (0, x) to (n, fⁿ(x)) (our own). Thus Fₓ(f)(x) = fⁿ(x) (our own).

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “the parametrically polymorphic functions of type ∀X. T(X) → T(X) are one-to-one with natural numbers.”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Singleton induction makes extending a value from the center hold by definition

**Remember:** Singleton induction extends any value at the center to a section.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A contractible type can be defined as a pointed type satisfying singleton induction. For every family over the type, each value at its center extends to a section taking that value there.

**Problem.** Every type family over a contractible type has a section that takes a given value at the center.

**How the definition helps.** Apply singleton induction to the given family and its chosen value. The computation rule gives the required equality at the center (our own).

**nLab:** [contractible type](https://ncatlab.org/nlab/show/contractible+type). It says: “A contractible type is a pointed type which satisfies singleton induction.”

**Sources:** none listed. No primary source with a working link was found.

### Streams as a terminal coalgebra make unique stream generation true by definition

**Remember:** One output and one next state determine the whole stream.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A stream coalgebra on S has an output S → A and a next-state map S → S. Streams form a terminal such coalgebra: each coalgebra has exactly one map into it preserving output and next state (our own).

**Problem.** Given an output and a next state for every state, exactly one map from states to streams respects both operations.

**How the definition helps.** A map into streams preserves the coalgebra operations exactly when its head gives the current output and its tail follows the next state (our own). Terminality supplies exactly one such map (our own).

**nLab:** [coinductive type](https://ncatlab.org/nlab/show/coinductive+type). It says: “it is possible instead to dualize the alternative characterization of inductive types as initial algebras for a notion of coinductive types as terminal coalgebras”

**Sources:**

- [Ahrens, Capriotti and Spadotti (2015), Non-wellfounded Trees in Homotopy Type Theory, TLCA 2015, LIPIcs 38](https://doi.org/10.4230/LIPIcs.TLCA.2015.17)

### Subtypes defined by mere propositions get their equality from the underlying type

**Remember:** If proofs carry no data, only the element matters.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Let P assign a mere proposition to each element of A. Its subtype consists of pairs (x, p) with x ∈ A and p ∈ P(x). A mere proposition has a path between every two of its elements.

**Problem.** Two elements of a subtype are equal when their underlying elements of A are equal. So the subtype sits inside A like a subset.

**How the definition helps.** A path between first components transports the first proof into the second fiber (our own). That fiber is a mere proposition, so the transported proof equals the second proof (our own). The equality rule for dependent pairs now gives the required path (our own).

**nLab:** [embedding of types](https://ncatlab.org/nlab/show/embedding+of+types). It says: “with the witness that π₁ is an embedding given by the fact that the membership relation x ∈ P is a proposition for all elements x:A and material subtypes P:A → Prop.”

**Paper or page:** [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Suppose P : A → 𝒰 is a type family such that P(x) is a mere proposition for all x : A. If u, v : ∑ x:A P(x) are such that pr₁(u) = pr₁(v), then u = v.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Suspension as a higher inductive type gives the loop space adjunction

**Remember:** The basepoint meridian turns the other meridians into loops.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55P40, 55P35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The suspension of X is freely generated by two poles and a path between them for each point of X. Orient all paths from north to south and choose north as basepoint (our own).

**Problem.** Pointed maps preserve the chosen point. Pointed maps out of the suspension correspond naturally to pointed maps from X into the space of loops at the target's chosen point.

**How the definition helps.** Suspension recursion assigns images to the poles and paths to the meridians (our own). Pointedness fixes the north image, while the basepoint meridian identifies the south image with it (our own). Following each meridian image by the reversed basepoint meridian gives a loop, constant up to equality at the basepoint (our own). Conversely, use the target basepoint for both poles and the given loops for the meridians (our own).

**nLab:** [suspension type](https://ncatlab.org/nlab/show/suspension+type). It says: “representing the meridians from the north to the south pole”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### The circle as a higher inductive type has fundamental group ℤ

**Remember:** The circle is freely made from one point and one loop, and nothing else.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 03B38 (Type theory), 55Q05. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The circle type is freely generated by a point base and a path loop from base to itself.

**Problem.** The loop space of the circle at base is equivalent to ℤ. Consequently its fundamental group is isomorphic to the additive group of integers.

**How the definition helps.** The circle’s mapping rule specifies a family over it by a type at base and a self-equivalence for the loop, using univalence (our own). The Licata–Shulman encode–decode proof takes ℤ and successor, then identifies loops with integer winding numbers (our own).

**nLab:** [circle type](https://ncatlab.org/nlab/show/circle+type), [higher inductive type](https://ncatlab.org/nlab/show/higher+inductive+type), [fundamental group of the circle is the integers](https://ncatlab.org/nlab/show/fundamental+group+of+the+circle+is+the+integers). It says: “Using the univalence axiom, one can prove that the loop space \`base == base\` of the circle type is equivalent to the integers.”

**Sources:**

- [Daniel R. Licata, Michael Shulman, Calculating the Fundamental Group of the Circle in Homotopy Type Theory, LICS 2013, arXiv:1301.3443](https://arxiv.org/abs/1301.3443)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### The cumulative hierarchy as a higher inductive type has extensionality built in

**Remember:** Put extensionality into the constructors, and V satisfies it by definition.

*True by definition.* MSC 03B38 (Type theory), 03E30, 03E70. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** The hierarchy V is the higher inductive set freely generated by points sup(f) for maps f from small types into V. Its path constructor identifies sup(f) and sup(g) whenever each value of either map merely occurs among the values of the other (our own).

**Problem.** V satisfies extensionality: two sets with the same elements are equal. More precisely, equality in V is exactly bisimulation.

**How the definition helps.** Having the same elements supplies exactly the two directions required by the path constructor (our own). For bisimulation, induction on the generated sets converts matching bisimilar children into matching equal children (our own). Conversely, reflexivity of bisimulation and transport give bisimulation for equal sets (our own).

**Paper or page:** [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “In type theory with AC and a universe 𝒰, the cumulative hierarchy V is a model of Zermelo–Fraenkel set theory with choice, ZFC.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### The HoTT axiom of choice asks for a set as index type

**Remember:** Choice is safe over sets, not over types with hidden symmetries.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03E25. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A type is a set if any two paths with the same endpoints are equal. Set-indexed choice asserts that every family of merely inhabited sets indexed by a set merely admits a section. Mere inhabitation is propositional truncation: it asserts existence without specifying a witness.

**Problem.** For a set X and a family of sets Y(x), the axiom of choice (∏ x:X ‖Y(x)‖) → ‖∏ x:X Y(x)‖ is consistent with univalence. If X may be any type, the statement is false.

**How the definition helps.** Set indices exclude the univalent type of merely two-element sets, whose boolean point has the swap as a nonidentity loop (our own). Paths from that point to each index form merely inhabited sets (our own). A section would contract the index type and hence kill the swap (our own). The classical simplicial set model establishes relative consistency for set indices (our own).

**Paper or page:** [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “The axiom of choice is equivalent to the statement that for any set X and any Y : X → 𝒰 such that each Y(x) is a set, we have (∏ x:X ‖Y(x)‖) → ‖∏ x:X Y(x)‖.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Univalence lets you prove facts about equivalences by checking identities

**Remember:** Check the identity map, and univalence gives every equivalence.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** An equivalence A ≃ B between types is a function with an inverse up to homotopy, defined so that being an equivalence is a property. Univalence is the axiom that equalities between types are the same as equivalences between them. Precisely, the map from equalities A = B in the universe 𝒰 to equivalences A ≃ B is itself an equivalence.

**Problem.** Equivalence induction reduces any family D(A, B, e), indexed by types and equivalences between them, to the identity cases. A witness of D(A, A, id) for each A gives a witness in every case.

**How the definition helps.** Univalence makes equivalences behave like equalities, and path induction reduces statements about all equalities to the reflexivity case. So a statement about all equivalences reduces to the identity case. For example, to show that a construction respects every equivalence, one checks the identity map (our own example). The nLab notes that equivalence induction is equal in strength to univalence, which in the book is an axiom.

**nLab:** [equivalence induction](https://ncatlab.org/nlab/show/equivalence+induction). It says: “Conversely, corollary 5.8.5 of the HoTT Book derives equivalence induction from the univalence axiom.”

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Given any type family D … and function d : ∏ A:𝒰 D(A, A, id A), there exists f : ∏ A,B:𝒰 ∏ e:A≃B D(A, B, e) such that f(A, A, id A) = d(A) for all A : 𝒰.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Univalence makes isomorphic structures equal

**Remember:** Univalence turns paths between carriers into equivalences preserving their group operations.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The univalence axiom is about types A and B in a universe, which is a type whose elements are types. It says that the canonical map from identifications A = B to equivalences A ≃ B is itself an equivalence. You then encode a structure such as a group as a type together with nested dependent pairs, dependent functions and identity types.

**Problem.** Under univalence, the type of identifications of two groups is equivalent to the type of group isomorphisms between them. So isomorphic groups are equal, and every property of one transfers to the other.

**How the definition helps.** Univalence gives extensionality principles for dependent functions and dependent pairs. A group structure is a telescope of such types, each depending on the ones before it. So an identification of two groups unfolds, step by step, into a bijection of the underlying types with the homomorphism property. The real work moves into the axiom itself and into building models where it holds.

**nLab:** [structure identity principle](https://ncatlab.org/nlab/show/structure+identity+principle), [univalence axiom](https://ncatlab.org/nlab/show/univalence+axiom). It says: “the above extensionality principles (eq:ExtensionalityPrinciples) imply that the type of identifications of groups is equivalently that of bijections of the underlying types and equipped with the group homomorphism-property”

**Sources:**

- [Thierry Coquand, Nils Anders Danielsson, Isomorphism is equality, Indagationes Mathematicae 24 (2013) 1105–1120](https://doi.org/10.1016/j.indag.2013.09.002)
- [Benedikt Ahrens, Paige Randall North, Michael Shulman, Dimitris Tsementzis, A higher structure identity principle, LICS 2020, arXiv:2004.06572](https://arxiv.org/abs/2004.06572)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Univalent categories make fully faithful, essentially surjective functors equivalences without choice

**Remember:** Univalence turns each object isomorphism into a unique corresponding identification.

*True by definition.* MSC 03B38 (Type theory), 18A05. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A precategory is univalent if, for every pair of objects, the canonical function from their equality type to their isomorphism type is an equivalence.

**Problem.** A fully faithful and essentially surjective functor whose domain is a univalent category is an equivalence of categories, with no choice principle.

**How the definition helps.** Full faithfulness lifts the comparison between any two preimages equipped with target isomorphisms to a unique source isomorphism (our own). Source univalence identifies the two equipped preimages, making their type a mere proposition (our own). Essential surjectivity now supplies centers, and full faithfulness lifts arrows uniquely to give the inverse functor (our own).

**nLab:** [univalent category](https://ncatlab.org/nlab/show/univalent+category), [Rezk completion](https://ncatlab.org/nlab/show/Rezk+completion). It says: “the statement "a fully faithful and essentially surjective functor is an equivalence" for strict categories is equivalent to the axiom of choice, for precategories it is just false, and for univalent categories it is just true.”

**Sources:**

- [Benedikt Ahrens, Chris Kapulkin, Michael Shulman, Univalent categories and the Rezk completion, Mathematical Structures in Computer Science 25 (2015) 1010–1039, arXiv:1303.0584](https://arxiv.org/abs/1303.0584)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Binder-free combinators make confluence follow from nonoverlapping rewrite rules

**Remember:** Without binders, rewriting cannot capture a free variable.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus), 68Q42. arXiv cs.LO. Level 3: graduate.

**Definition.** Combinatory logic builds terms by application from constants S and K, without any operation that binds variables. The rewrite rules are K x y → x and S x y z → x z (y z). In the lambda calculus, replacing a function’s parameter by its argument must avoid accidental binding of free variables.

**Problem.** The S and K rules are confluent. Any two terms obtained from one term by rewriting can be rewritten further to a common term.

**How the definition helps.** The S and K rules form an orthogonal rewrite system (our own). Their left sides use each variable once and have no nontrivial overlap at nonvariable positions (our own). The confluence theorem for orthogonal term rewriting gives a common reduct (our own).

**nLab:** [combinatory logic](https://ncatlab.org/nlab/show/combinatory+logic). It says: “Since this move circumvents the necessity of variable management, combinatory logic is important for applications in computer science and linguistics.”

**Wikipedia:** [Combinatory logic](https://en.wikipedia.org/wiki/Combinatory_logic). It says: “In contrast, evaluating expressions in combinatory logic is much simpler, because there is no notion of substitution.”

**Sources:** none listed. No primary source with a working link was found.

### De Bruijn indices make α-equivalence the same as equality

**Remember:** A nameless variable says how many λs back its binder is.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A de Bruijn index replaces each bound variable in a λ-term by a number. The number counts the λs you pass, going outward from the variable, until you reach its binder, and it includes the binder. For example, λx. λy. x becomes λ λ 2.

**Problem.** With de Bruijn indices, two terms are α-equivalent exactly when they are syntactically equal, and substitution needs no renaming of bound variables.

**How the definition helps.** Each bound occurrence records the surrounding binder it references, independently of that binder’s name. With free variables fixed, identical indexed trees therefore express exactly α-equivalence (our own). Substitution adjusts indices under binders without renaming them (our own).

**Wikipedia:** [De Bruijn index](https://en.wikipedia.org/wiki/De_Bruijn_index). It says: “Terms written using these indices are invariant with respect to α-conversion, so the check for α-equivalence is the same as that for syntactic equality.”

**Sources:**

- [de Bruijn, N. G. (1972). Lambda calculus notation with nameless dummies, a tool for automatic formula manipulation, with application to the Church–Rosser theorem. Indagationes Mathematicae 34, 381–392.](https://doi.org/10.1016/1385-7258(72)90034-0)

### Parallel reduction gives a short proof of the Church–Rosser theorem

**Remember:** Reduce all chosen redexes at once, and the diamond closes in one step.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** Parallel β-reduction relates each variable to itself and extends under abstraction and application by reducing immediate subterms in parallel. Whenever M ⇒ M′ and N ⇒ N′, it also relates (λx.M)N to M′\[x := N′\], using capture-avoiding substitution. Take the least relation satisfying these rules (our own).

**Problem.** The Church–Rosser theorem says: if a λ-term reduces to N₁ and to N₂, then N₁ and N₂ reduce to a common term.

**How the definition helps.** The complete-development lemma gives every parallel reduct of M a parallel step to the same complete development (our own). This diamond property extends to the reflexive transitive closure. That closure is ordinary many-step β-reduction, so the two reducts admit a common reduct.

**Wikipedia:** [Church–Rosser theorem](https://en.wikipedia.org/wiki/Church%E2%80%93Rosser_theorem). It says: “We introduce a new reduction →∥ whose reflexive transitive closure is ↠β and which satisfies the diamond property.”

**Sources:**

- [Church, A. and Rosser, J. B. (1936). Some properties of conversion. Transactions of the American Mathematical Society 39, 472–482.](https://doi.org/10.1090/S0002-9947-1936-1501858-0)

### Reducibility defined by type makes strong normalization provable by induction

**Remember:** Good functions are those that send good inputs to good outputs.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 03B38. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** In the simply typed λ-calculus, Tait defines a set of reducible terms for each type. At a base type, the reducible terms are the strongly normalizing ones, which have no infinite reduction sequence. At a function type U → V, a term t is reducible if t u is reducible at V for every reducible u at U.

**Problem.** Strong normalization: in the simply typed λ-calculus, every reduction sequence of a well-typed term ends.

**How the definition helps.** The arrow clause makes application preserve reducibility (our own). Tait’s reducibility lemma proves by type induction that reducibility implies strong normalization (our own). His substitution lemma proves by typing induction that substituting reducible terms for variables gives a reducible term (our own). Variables are reducible, so the identity substitution gives the result (our own).

**nLab:** [logical relation](https://ncatlab.org/nlab/show/logical+relation). It says: “Although there is no precise definition, typically a logical relation (or logical predicate) corresponds to a family of (sometimes unary) relations defined by induction on types”

**Sources:**

- [W. W. Tait, Intensional interpretations of functionals of finite type I, Journal of Symbolic Logic 32 (1967) 198–212](https://doi.org/10.2307/2271658)

### Terms without head normal form, not without normal form, are meaningless

**Remember:** A term means something once its head settles.

*Rules out counterexamples.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A head normal form has shape λx₁…xₙ. y M₁ … Mₖ, with variable y and n, k ≥ 0. A lambda term is unsolvable if no sequence of β-reductions takes it to a head normal form (our own).

**Problem.** Equating all unsolvable terms, those without a head normal form, gives a consistent theory of the untyped λ-calculus. Equating all terms without a normal form, as Church proposed, is inconsistent.

**How the definition helps.** Böhm-tree semantics assigns ⊥ to every unsolvable term while distinguishing distinct head variables, giving consistency (our own). Let Ω = (λx.xx)(λx.xx), and let K and S be the standard combinators (our own). Both λx.xKΩ and λx.xSΩ lack normal forms, but applying them to K yields K and S respectively (our own). Equating K and S collapses the calculus by Böhm’s separation theorem for distinct closed βη-normal forms (our own).

**Wikipedia:** [Böhm tree](https://en.wikipedia.org/wiki/B%C3%B6hm_tree). It says: “We thus see that not all non-normalizing terms are equivalent.”

**Sources:**

- [H. P. Barendregt, The type free lambda calculus, in Handbook of Mathematical Logic, North-Holland 1977, 1091–1132](https://doi.org/10.1016/S0049-237X(08)71129-7)

### Bisimulations copy the diamond clause, so bisimilar worlds satisfy the same formulas

**Remember:** Match every move both ways, and no modal formula can tell the difference.

*True by definition. Confidence: medium.* MSC 03B45 (Modal logic (including the logic of norms)), 03B42, 68Q85. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A bisimulation is a relation between worlds of two Kripke models such that related worlds agree on every propositional variable. For each accessibility relation, every successor of either related world must have a related successor of the other.

**Problem.** Two worlds related by a bisimulation satisfy the same modal formulas.

**How the definition helps.** Induct on the formula (our own). Related worlds agree on variables, and Boolean connectives preserve agreement (our own). For possibility, match a witnessing successor in either direction and use the induction hypothesis there (our own).

**Paper or page:** [Open Logic Project: Applied Modal Logic: Epistemic Logic](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If ⟨M₁, w₁⟩ ↔︎ ⟨M₂, w₂⟩, then for every formula A, we have that M₁, w₁ ⊩ A iff M₂, w₂ ⊩ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Necessity and possibility as base change give the S5 modal laws

**Remember:** Necessary means true in every world, possible means true in some world.

*True by definition. Confidence: medium.* MSC 03B45 (Modal logic (including the logic of norms)), 03G30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** For propositions P indexed by worlds W, define □P at each world as ∀w ∈ W, P(w). Define ◇P at each world as ∃w ∈ W, P(w).

**Problem.** These operators satisfy □(P → Q) → (□P → □Q), □P → P, □P → □□P, P → ◇P, and ◇P → □◇P.

**How the definition helps.** Universal statements specialize to the current world, which also witnesses existential introduction (our own). Applying implication at every world gives the distribution law (our own). Both modal statements ignore the current world, so either one, once true, holds necessarily (our own).

**nLab:** [necessity and possibility](https://ncatlab.org/nlab/show/necessity+and+possibility), [S5 modal logic](https://ncatlab.org/nlab/show/S5+modal+logic). It says: “it is just the interpretation of the universal quantifier "for all" ∀ and of the existential quantifier "there exists" ∃.”

**Sources:**

- [Steve Awodey, Category Theory, Oxford University Press (2006), p. 279](https://doi.org/10.1093/acprof:oso/9780198568612.001.0001)
- [Gavin M. Bierman, Valeria de Paiva, On an intuitionistic modal logic, Studia Logica 65 (2000) 383–416](https://doi.org/10.1023/A:1005291931660)

### Defining types as ultrafilters of formulas makes the type space compact

**Remember:** Types are ultrafilters, and spaces of ultrafilters are always compact.

*True by definition.* MSC 03C07 (Basic properties of first-order languages and structures), 06E15. arXiv math.LO. Level 3: graduate.

**Definition.** Fix a tuple of variables x in a classical first-order theory T. A complete x-type is an ultrafilter on the Boolean algebra of x-formulas modulo equivalence provable in T. For each formula φ, the types containing its class form a basic open set.

**Problem.** The space of complete types of a first-order theory is compact.

**How the definition helps.** These basic opens give exactly the Stone topology of the formula algebra. The Stone compactness theorem, proved using the ultrafilter lemma, therefore gives compactness of the type space (our own).

**nLab:** [type (in model theory)](https://ncatlab.org/nlab/show/type+%28in+model+theory%29). It says: “By Stone duality, the set of all complete x-types of a theory T inherits a Stone topology”

**Sources:** none listed. No primary source with a working link was found.

### The elementary diagram turns elementary embeddings into models of one theory

**Remember:** Name every element, then record every true sentence about the names.

*True by definition.* MSC 03C07 (Basic properties of first-order languages and structures), 03C30. arXiv math.LO. Level 3: graduate.

**Definition.** Let M be a structure. Add a new constant symbol for each element of M. The elementary diagram of M is the set of all sentences in this larger language that are true in M.

**Problem.** A structure N in the expanded language models the elementary diagram of M exactly when the named values define an elementary embedding M → N. This embedding preserves and reflects every first-order formula in the original language.

**How the definition helps.** Each formula on a tuple becomes a sentence by substituting that tuple’s names (our own). The diagram records either that sentence or its negation, so satisfaction agrees in both structures (our own). Named inequalities give injectivity, and conversely an elementary embedding preserves every diagram sentence (our own).

**nLab:** [diagram of a first-order structure](https://ncatlab.org/nlab/show/diagram+of+a+first-order+structure). It says: “The elementary diagram of M, written EDiag(M), is the set of all ℒ-sentences possibly using constants cₘ which are true in M”

**Sources:** none listed. No primary source with a working link was found.

### Existentially closed fields make the weak Nullstellensatz almost a definition

**Remember:** Solvable somewhere means solvable here, in an algebraically closed field.

*True by definition. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics), 03C60, 14A10. arXiv math.LO, math.AC. Level 3: graduate.

**Definition.** A model M of T is existentially closed if every existential formula with parameters in M true in a T-extension already holds in M.

**Problem.** By the weak Nullstellensatz, polynomials generating a proper ideal in K\[x₁, …, xₙ\] over an algebraically closed field K have a common zero in Kⁿ.

**How the definition helps.** A maximal ideal containing the proper ideal gives a quotient field where the residue classes of the variables form a common zero (our own). Hilbert’s basis theorem gives finitely many ideal generators, so existence of a common zero is existential (our own). Algebraically closed fields are existentially closed among fields by quantifier elimination for algebraically closed fields and existence of algebraic closures (our own). Thus the generators, and hence the original polynomials, have a common zero in K (our own).

**Wikipedia:** [Existentially closed model](https://en.wikipedia.org/wiki/Existentially_closed_model), [Model complete theory](https://en.wikipedia.org/wiki/Model_complete_theory). It says: “If A is a subfield of B, then A is existentially closed in B if and only if every system of polynomials over A that has a solution in B also has a solution in A.”

**Sources:**

- [Robinson, A. (1956). Complete Theories. Studies in Logic and the Foundations of Mathematics, North-Holland, Amsterdam.](https://doi.org/10.1016/S0049-237X(08)X7071-5)

### Naming every orbit of an oligomorphic group gives quantifier elimination

**Remember:** Name the orbits, and every formula becomes a finite list of names.

*True by definition. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics), 03C35, 20B07. arXiv math.LO. Level 3: graduate.

**Definition.** A permutation group on a countable set is oligomorphic if it has finitely many orbits on n-tuples for every natural number n. Its canonical structure names each orbit by a relation interpreted as exactly that orbit (our own).

**Problem.** The theory of the canonical structure of an oligomorphic permutation group eliminates quantifiers. That is, every formula is equivalent to a formula without quantifiers.

**How the definition helps.** Every group element preserves each named orbit, so each parameter-free formula defines a union of orbits (our own). Finiteness makes that union a finite disjunction of orbit predicates, using false for the empty union (our own). The equivalence holds in the canonical structure and therefore belongs to its theory (our own).

**nLab:** [omega-categorical structure](https://ncatlab.org/nlab/show/omega-categorical+structure). It says: “The canonical (orbit) structure induced by an oligomorphic (finitely many orbits in each power) permutation group on a countable set is ω-categorical.”

**Sources:** none listed. No primary source with a working link was found.

### Substructure completeness is a semantic test for quantifier elimination

**Remember:** Fix a substructure, and all models that contain it agree on everything.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics). arXiv math.LO. Level 3: graduate.

**Definition.** A first-order theory T is substructure complete if the following holds for every model M of T and every substructure A ⊆ M. Take T together with the quantifier-free diagram of A (the quantifier-free facts about the elements of A). This theory describes the models of T into which A embeds, and it must be complete.

**Problem.** Allow empty common substructures when the language has no constants, and allow truth and falsity as quantifier-free sentences. Then a first-order theory eliminates quantifiers exactly when it is substructure complete.

**How the definition helps.** Quantifier elimination reduces each sentence with names to a quantifier-free fact decided by the diagram (our own). Conversely, tuples sharing a quantifier-free type generate isomorphic substructures, so substructure completeness gives them the same full type (our own). Compactness converts this dependence into a quantifier-free equivalent for each formula (our own).

**nLab:** [substructure complete theory](https://ncatlab.org/nlab/show/substructure+complete+theory). It says: “One wants an equivalent and purely semantic characterization of quantifier elimination.”

**Sources:**

- [David Marker, Model Theory: An Introduction, Graduate Texts in Mathematics 217, Springer, 2002 (theorem 3.14 as cited by the nLab)](https://doi.org/10.1007/b98860)

### Defining an ultraproduct as a colimit gives it first-order structure for free

**Remember:** Each symbol has finitely many arguments, so it passes through the gluing.

*True by definition.* MSC 03C20 (Ultraproducts and related constructions), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** For structures indexed by I and an ultrafilter U on I, form the product over each index set in U. Define the ultraproduct as the filtered colimit of these products under restriction to smaller members of U.

**Problem.** An ultraproduct of structures for one first-order language carries a canonical structure for that language.

**How the definition helps.** Each product interprets the language coordinatewise, and restrictions preserve these interpretations (our own). Filtered colimits in sets preserve finite products, so every finite-arity operation descends. Each relation holds on a tuple when its representatives satisfy it on some member of U (our own).

**nLab:** [ultraproduct](https://ncatlab.org/nlab/show/ultraproduct). It says: “since the taking of filtered colimits commutes with finite limits in Set, we get a canonically induced structure on the ultraproduct”

**Sources:** none listed. No primary source with a working link was found.

### One conclusion per Horn clause lets reduced products preserve it

**Remember:** A filter keeps finitely many premises true together on one large set.

*Rules out counterexamples.* MSC 03C20 (Ultraproducts and related constructions), 08C15. arXiv math.LO. Level 3: graduate.

**Definition.** A universal Horn sentence universally quantifies an implication from a finite conjunction of atomic formulas to one atomic formula or falsity. In a reduced product modulo a proper filter, an atomic formula holds when its truth set belongs to the filter (our own).

**Problem.** A universal Horn sentence that is true in every factor is true in their reduced product.

**How the definition helps.** Intersect the finitely many premise truth sets to obtain a filter member where all premises hold (our own). The conclusion holds throughout this member, and falsity would force it to be empty, contradicting properness (our own). With two alternative conclusions P and Q, take singleton factors satisfying only P and only Q respectively (our own). Both satisfy ∀x (P(x) ∨ Q(x)), but their direct product satisfies neither disjunct at its sole point (our own).

**Wikipedia:** [Horn clause](https://en.wikipedia.org/wiki/Horn_clause). It says: “From the model-theoretical point of view, Horn sentences are important since they are exactly (up to logical equivalence) those sentences preserved under reduced products”

**Sources:**

- [Alfred Horn, On sentences which are true of direct unions of algebras (1951)](https://doi.org/10.2307/2268661)

### Ultrafilters make Łoś's theorem hold for every first-order formula

**Remember:** An ultrafilter decides every subset, so the ultraproduct decides every formula.

*Rules out counterexamples. Confidence: medium.* MSC 03C20 (Ultraproducts and related constructions). arXiv math.LO. Level 3: graduate.

**Definition.** A proper filter on X contains X, excludes ∅ and is closed under finite intersections and supersets. It is an ultrafilter if it contains either A or its complement for every subset A of X. The ultraproduct identifies tuples whose agreement set belongs to the ultrafilter.

**Problem.** A first-order formula holds of an ultraproduct tuple exactly when its coordinate truth set belongs to the ultrafilter. In particular, an ultrapower of a model of T is again a model of T.

**How the definition helps.** An ultrafilter contains a truth set or its complement, making negation commute with the truth-set test. A proper filter on two indices containing only their union fails this test on either singleton (our own). Induct on formulas: atoms use the product interpretation, conjunction uses intersection, and existential quantifiers use coordinatewise choices of witnesses (our own). For constant factors, every sentence of T holds everywhere (our own).

**nLab:** [ultrapower](https://ncatlab.org/nlab/show/ultrapower), [Łoś ultraproduct theorem](https://ncatlab.org/nlab/show/%C5%81o%C5%9B+ultraproduct+theorem). It says: “Here one needs all of the ultrafilter conditions, in particular one needs condition 4 in order to accommodate satisfaction of formulas involving instances of negation.”

**Sources:**

- [Hisashi Aratake, Sheaves of Structures, Heyting-Valued Structures, and a Generalization of Łoś's Theorem, 2020, arXiv:2012.04317](https://arxiv.org/abs/2012.04317)

### Skolem functions turn the downward Löwenheim–Skolem theorem into a closure argument

**Remember:** Close a small set under witness-choosing functions and it becomes an elementary substructure.

*True by definition.* MSC 03C30 (Other model constructions), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** For each formula φ(y, x), choose a function on parameter tuples x returning a witness y whenever one exists in M, and any element otherwise. The Skolem hull of A is the least subset containing A and closed under these functions, including the nullary ones (our own).

**Problem.** The downward Löwenheim–Skolem theorem: every structure M has an elementary substructure containing a given set A, of size at most \|A\| + \|σ\| + ℵ₀. Here σ is the language. An elementary substructure is a substructure with the same first-order truths about its elements.

**How the definition helps.** Closure supplies every existential witness required by the Tarski–Vaught test and includes the original operations through their defining equations (our own). There are at most \|σ\| + ℵ₀ witness functions, each of finite arity (our own). Iterating closure for countably many stages therefore gives the stated bound (our own).

**Wikipedia:** [Löwenheim–Skolem theorem](https://en.wikipedia.org/wiki/L%C3%B6wenheim%E2%80%93Skolem_theorem), [Skolem normal form](https://en.wikipedia.org/wiki/Skolem_normal_form). It says: “The trick used in this proof is essentially due to Skolem, who introduced function symbols for the Skolem functions fᵩ into the language.”

**Sources:**

- [Löwenheim, L. (1915). Über Möglichkeiten im Relativkalkül. Mathematische Annalen 76, 447–470.](https://doi.org/10.1007/BF01458217)

### Counting models of one cardinality makes Morley's theorem statable

**Remember:** Fix the size first, then ask whether the model is unique.

*Makes the theorem clean to state or prove.* MSC 03C35 (Categoricity and completeness of theories), 03C45. arXiv math.LO. Level 3: graduate.

**Definition.** Veblen (1904) called a theory categorical if all its models are isomorphic. A theory is κ-categorical if it has exactly one model of cardinality κ, up to isomorphism.

**Problem.** Morley's theorem says: a countable first-order theory that is categorical in one uncountable cardinal is categorical in every uncountable cardinal.

**How the definition helps.** Fixing the cardinal lets uniqueness at one size and uniqueness at another be compared (our own). Upward Löwenheim–Skolem rules out uniqueness across all sizes for a theory with an infinite model. Morley’s categoricity theorem supplies the transfer between uncountable sizes (our own).

**Wikipedia:** [Categorical theory](https://en.wikipedia.org/wiki/Categorical_theory). It says: “By the upward Löwenheim–Skolem theorem, if a first-order theory has a model of infinite cardinality κ, then it has a model of any cardinality κ' &gt; κ. So it cannot be categorical.”

**Sources:**

- [Morley, M. (1965). Categoricity in power. Transactions of the American Mathematical Society 114, 514–538.](https://doi.org/10.1090/S0002-9947-1965-0175782-0)
- [Łoś, J. (1954). On the categoricity in power of elementary deductive systems and some related problems. Colloquium Mathematicum 3, 58–62.](https://doi.org/10.4064/cm-3-1-58-62)

### With no finite models, categoricity in one size gives completeness

**Remember:** Finite models escape Löwenheim–Skolem, so they must be ruled out.

*Rules out counterexamples.* MSC 03C35 (Categoricity and completeness of theories). arXiv math.LO. Level 3: graduate.

**Definition.** A theory is complete if it proves each sentence or its negation. It is κ-categorical if it has exactly one model of cardinality κ, up to isomorphism.

**Problem.** Łoś–Vaught test: a satisfiable theory with no finite models that is κ-categorical for some infinite κ at least the size of its language is complete. So the theories of dense linear orders without endpoints and of algebraically closed fields of a fixed characteristic are complete.

**How the definition helps.** Löwenheim–Skolem gives every infinite model an elementarily equivalent model of size κ (our own). Categoricity there forces agreement on all sentences, and completeness of first-order logic gives the result (our own). Finite models escape this argument. Pure equality without axioms is categorical in every infinite size but does not decide whether exactly two elements exist (our own).

**Wikipedia:** [Łoś–Vaught test](https://en.wikipedia.org/wiki/%C5%81o%C5%9B%E2%80%93Vaught_test), [Categorical theory](https://en.wikipedia.org/wiki/Categorical_theory). It says: “Therefore, the theory is complete as all models are equivalent. The assumption that the theory have no finite models is necessary.”

**Sources:**

- [Łoś, J. (1954). On the categoricity in power of elementary deductive systems and some related problems. Colloquium Mathematicum 3, 58–62.](https://doi.org/10.4064/cm-3-1-58-62)
- [Vaught, R. L. (1954). Applications of the Löwenheim–Skolem–Tarski theorem to problems of completeness and decidability. Indagationes Mathematicae 16, 467–472.](https://doi.org/10.1016/S1385-7258(54)50058-2)

### Craig interpolation gives Beth definability as a corollary

**Remember:** Interpolate between two copies of a definition, and get an explicit definition.

*True by definition. Confidence: medium.* MSC 03C40 (Interpolation, preservation, definability), 03B45. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** Craig interpolation means every entailment φ ⊨ ψ factors through a formula θ using only their shared nonlogical symbols. Thus φ ⊨ θ and θ ⊨ ψ. A formula implicitly fixes p if any two satisfying interpretations agreeing on all other symbols agree on p (our own).

**Problem.** For propositional logics with classical Boolean connectives and uniform renaming, Craig interpolation gives Beth definability. Every propositional symbol implicitly fixed by a formula has an explicit definition using its other symbols.

**How the definition helps.** Rename p to a fresh q in φ to obtain φ(q) (our own). Implicit determination gives φ(p) ∧ p ⊨ φ(q) → q (our own). An interpolant θ mentions neither p nor q (our own). Renaming q back to p gives φ(p) ⊨ p ↔︎ θ, the explicit definition (our own).

**Paper or page:** [Interpolation for the two-way modal mu-calculus](https://arxiv.org/abs/2505.12899v3), [Propositional Dynamic Logic has Craig Interpolation: a tableau-based proof](https://arxiv.org/abs/2503.13276v1). It says: “The two-way modal μ-calculus has the Craig interpolation property and, as a corollary, the Beth definability property.”

**Sources:**

- [Interpolation for the two-way modal mu-calculus, arXiv:2505.12899 (2025)](https://arxiv.org/abs/2505.12899v3)
- [William Craig, Three uses of the Herbrand-Gentzen theorem in relating model theory and proof theory, Journal of Symbolic Logic 22 (1957)](https://doi.org/10.2307/2963594)

### Defining definable closure as the smallest closed set makes it idempotent

**Remember:** Closing a set twice adds nothing the second time.

*True by definition.* MSC 03C40 (Interpolation, preservation, definability), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** A subset of a model is definably closed if it contains every unique solution of a formula with parameters from that subset. The definable closure of A is the intersection of all definably closed subsets containing A (our own).

**Problem.** The definable closure of the definable closure of A equals the definable closure of A.

**How the definition helps.** Intersections preserve this closure condition because all the defining parameters belong to every set in the intersection (our own). Thus the definable closure is already closed, and taking its closure again returns the same set (our own).

**nLab:** [definable set](https://ncatlab.org/nlab/show/definable+set). It says: “there is the minimal definably closed subset B such that A ⊂ B ⊂ M, the definable closure B = dcl(A) of A”

**Sources:** none listed. No primary source with a working link was found.

### Ehrenfeucht–Fraïssé games turn inexpressibility into a winning strategy

**Remember:** Matching moves for n rounds preserves formulas of quantifier depth at most n.

*Makes the theorem clean to state or prove.* MSC 03C40 (Interpolation, preservation, definability), 03C13. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** In the n-round game on structures A and B, Spoiler picks an element in either structure each round, and Duplicator answers in the other. Duplicator wins if the chosen elements satisfy the same atomic formulas in both structures.

**Problem.** If Duplicator has a winning strategy for n rounds, the structures agree on every sentence of quantifier depth at most n. Consequently, no first-order sentence defines even length among finite linear orders.

**How the definition helps.** The Ehrenfeucht–Fraïssé game theorem matches each nested quantifier with one move (our own). With r rounds left, corresponding gaps have equal lengths or both have length at least 2ʳ − 1 (our own). Duplicator preserves this condition by matching short distances to the nearest end (our own). Thus even and odd lengths at least 2ⁿ agree through depth n (our own).

**Wikipedia:** [Ehrenfeucht–Fraïssé game](https://en.wikipedia.org/wiki/Ehrenfeucht%E2%80%93Fra%C3%AFss%C3%A9_game). It says: “It is easy to prove that if Duplicator wins this game for all finite n, that is, 𝔄 ∼ 𝔅, then 𝔄 and 𝔅 are elementarily equivalent.”

**Sources:**

- [Ehrenfeucht, A. (1961). An application of games to the completeness problem for formalized theories. Fundamenta Mathematicae 49, 129–141.](https://doi.org/10.4064/fm-49-2-129-141)

### Shelah's construction adds every definable quotient, so imaginaries are eliminated

**Remember:** Every definable quotient can be coded by a tuple of ordinary elements.

*True by definition. Confidence: medium.* MSC 03C45 (Classification theory, stability, and related concepts in model theory), 03C40. arXiv math.LO. Level 3: graduate.

**Definition.** For every parameter-free definable equivalence relation E on a definable domain of real tuples, Tᵉᵠ adds a quotient sort and its projection. Its elements are exactly the E-classes (our own).

**Problem.** T<sup>eq</sup> eliminates imaginaries. It is a conservative extension of T, and it is universal among the theories that interpret T and eliminate imaginaries.

**How the definition helps.** Pull a definable equivalence relation on imaginary tuples back along their projections to real representatives (our own). The resulting real quotient already has a sort, so its elements code the new classes (our own). Every T-model expands canonically by actual quotients, giving conservativity (our own). Any interpretation in a theory eliminating imaginaries extends by those quotient codes, uniquely up to definable isomorphism (our own).

**nLab:** [elimination of imaginaries](https://ncatlab.org/nlab/show/elimination+of+imaginaries). It says: “Shelah found he needed to eliminate imaginaries in a universal way, so he found a way to conservatively interpret each theory T in a theory Tᵉᵠ which eliminated all the imaginaries of T.”

**Sources:**

- [Bruno Poizat, Une théorie de Galois imaginaire, Journal of Symbolic Logic 48 no. 4 (1983) 1151–1170](https://doi.org/10.2307/2273680)

### Strong minimality holds in every extension, so models are classified by dimension

**Remember:** Minimal in every extension means one number, the dimension, decides the model.

*Rules out counterexamples. Confidence: medium.* MSC 03C45 (Classification theory, stability, and related concepts in model theory), 03C35. arXiv math.LO. Level 3: graduate.

**Definition.** A definable set D is strongly minimal if it stays infinite in every elementary extension. There, every parameter-definable subset of D must be finite or cofinite in D. A complete theory is strongly minimal when its entire home sort has this property (our own).

**Problem.** A model of a strongly minimal theory is determined up to isomorphism by one cardinal, its dimension. So such a theory in a countable language is categorical in every uncountable cardinality.

**How the definition helps.** Strong minimality gives algebraic closure exchange and a unique nonalgebraic one-variable type over each parameter set (our own). The dimension theorem for strongly minimal theories then classifies models by the cardinality of an algebraic-closure basis (our own). In a countable language, uncountable models have dimension equal to their cardinality (our own). The minimal order (ℕ, &lt;) fails strong minimality: a nonstandard element cuts its extension into two infinite definable parts (our own).

**Wikipedia:** [Strongly minimal theory](https://en.wikipedia.org/wiki/Strongly_minimal_theory), [O-minimal theory](https://en.wikipedia.org/wiki/O-minimal_theory). It says: “It is called a strongly minimal set if this is true even in all elementary extensions.”

**Sources:**

- [Baldwin, J. T.; Lachlan, A. H. (1971). On strongly minimal sets. Journal of Symbolic Logic 36, 79–96.](https://doi.org/10.2307/2271517)

### In a monster model, types become orbits of automorphisms

**Remember:** The monster realizes every small situation and extends every small symmetry.

*True by definition. Confidence: medium.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)). arXiv math.LO. Level 3: graduate.

**Definition.** Fix a complete theory T and a model of large cardinality κ, calling sets of size below κ small. A monster model realizes every complete one-variable type over small parameter sets and extends every elementary map between small subsets to an automorphism.

**Problem.** Two small tuples in a monster model have the same type over a small set A exactly when an automorphism fixing A pointwise matches them. Every small model of T embeds elementarily into the monster.

**How the definition helps.** Equality of types gives an elementary map on the tuple entries fixing A, which homogeneity extends to an automorphism (our own). Conversely, such an automorphism preserves all formulas over A (our own). Enumerate a small model and extend an elementary embedding one element at a time by realizing each next type using saturation (our own).

**nLab:** [monster model](https://ncatlab.org/nlab/show/monster+model), [type (in model theory)](https://ncatlab.org/nlab/show/type+%28in+model+theory%29). It says: “The most important aspects of monster models are saturation and homogeneity: all types over parameter sets of a certain size are realized, and all elementary embeddings of subsets can be extended to automorphisms.”

**Sources:**

- [John Baldwin, The Monster Model (notes)](http://homepages.math.uic.edu/~jbaldwin/pub/monster.pdf)

### Saturation uses parameter sets smaller than the model, or nothing is saturated

**Remember:** A model cannot realize the type that says 'I differ from everything here'.

*Rules out counterexamples.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)). arXiv math.LO. Level 3: graduate.

**Definition.** A type over a set A is a consistent set of formulas, with parameters from A, that describes a possible element. A model M is κ-saturated if it realizes every complete type over every parameter set of size less than κ. M is saturated if it is \|M\|-saturated.

**Problem.** Any two saturated models of a complete theory with the same cardinality are isomorphic. Without the limit on the size of parameter sets, no infinite model would be saturated.

**How the definition helps.** Small parameter sets let saturation extend a partial elementary bijection by one element in either direction (our own). Alternately include the next element from each model, taking unions at limit stages, to obtain the isomorphism (our own). Over an entire infinite model M, the inequalities x ≠ m for all m ∈ M are finitely satisfiable but unrealized (our own). Compactness extends them to a complete type, ruling out saturation over all of M (our own).

**Wikipedia:** [Saturated model](https://en.wikipedia.org/wiki/Saturated_model). It says: “The reason we only require parameter sets that are strictly smaller than the model is trivial: without this restriction, no infinite model is saturated.”

**Sources:**

- [Morley, M.; Vaught, R. (1962). Homogeneous universal models. Mathematica Scandinavica 11, 37–57.](https://doi.org/10.7146/math.scand.a-10648)

### The omitting types theorem needs a countable language and a non-isolated type

**Remember:** One formula forces a type to appear; without it, a countable model avoids it.

*Rules out counterexamples. Confidence: medium.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** A type p is isolated if one formula consistent with the theory implies every formula in p. A model omits p if no tuple in it satisfies all formulas of p.

**Problem.** For a consistent theory in a countable language, any nonisolated type in finitely many variables is omitted by some at most countable model. This is used to build prime and atomic models.

**How the definition helps.** In a complete theory, an isolating formula forces realization in every model, so the omission argument must exclude isolated types (our own). Without an isolating formula, each finite Henkin condition can be extended to make a given named tuple miss some formula of the type (our own). Countability lets the omitting types construction impose this requirement on every named tuple (our own).

**Wikipedia:** [Type (model theory)](https://en.wikipedia.org/wiki/Type_%28model_theory%29). It says: “The omitting types theorem says that conversely if p is not isolated then there is a countable model omitting p (provided that the language is countable).”

**Sources:** none listed. No primary source with a working link was found.

### Requiring interval endpoints in the structure gives o-minimal sets their suprema

**Remember:** A bounded finite union of intervals has a last right endpoint.

*Rules out counterexamples.* MSC 03C64 (Model theory of ordered structures; o-minimality). arXiv math.LO. Level 3: graduate.

**Definition.** An expansion of a dense linear order without endpoints is o-minimal if every parameter-definable unary set is a finite union of points and open intervals. Interval endpoints must belong to the order or be ±∞. Weak o-minimality allows arbitrary convex pieces instead.

**Problem.** In an o-minimal structure, every nonempty definable subset of the underlying line that is bounded above has a least upper bound.

**How the definition helps.** Because the endpoints lie in the structure, the supremum is the largest right endpoint or the largest isolated point (our own argument). A convex set need not have its endpoints in the structure, so the weaker definition loses this. Wikipedia's example is the real algebraic numbers with a new predicate for the numbers between 0 and π, which is weakly o-minimal but not o-minimal. That predicate defines a bounded set with no supremum in the structure, because π is not algebraic (our own remark).

**Wikipedia:** [O-minimal theory](https://en.wikipedia.org/wiki/O-minimal_theory), [Weakly o-minimal structure](https://en.wikipedia.org/wiki/Weakly_o-minimal_structure). It says: “there are finitely many open intervals I₁,…,Iᵣ in M ∪ {±∞} and a finite set X₀ such that”

**Sources:**

- [Anand Pillay and Charles Steinhorn, Definable sets in ordered structures. I (1986)](https://doi.org/10.1090/S0002-9947-1986-0833697-X)

### Henkin semantics gives second-order logic a complete proof system

**Remember:** Let each model choose its own sets, and completeness comes back.

*Makes the theorem clean to state or prove.* MSC 03C85 (Second- and higher-order model theory), 03B16. arXiv math.LO. Level 3: graduate.

**Definition.** A Henkin model specifies a domain and, for each relation arity, a collection of relations on that domain. Relation quantifiers range over the specified collections, which satisfy the comprehension axioms of the chosen calculus (our own).

**Problem.** With Henkin semantics, the standard first-order deductive system is sound, complete and effective for second-order logic. With standard semantics no such system exists, by Gödel's incompleteness theorem.

**How the definition helps.** Treat each relation collection as a separate first-order sort with an application relation (our own). First-order soundness and completeness apply to the resulting effective axiom system. Full semantics requires every relation and makes second-order arithmetic categorical, so effective completeness would enumerate all true arithmetic sentences (our own).

**Wikipedia:** [Second-order logic](https://en.wikipedia.org/wiki/Second-order_logic). It says: “Henkin proved that the standard deductive system for first-order logic is sound, complete, and effective for second-order logic with Henkin semantics”

**Sources:**

- [Henkin, L. (1950). Completeness in the theory of types. Journal of Symbolic Logic 15, 81–91.](https://doi.org/10.2307/2266967)

### Abstract logics make Lindström's theorem possible to state

**Remember:** To call a logic the strongest, you first need a notion of logic in general.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C95 (Abstract model theory). arXiv math.LO. Level 3: graduate.

**Definition.** In the relational form of Lindström’s theorem, an abstract logic assigns sentences and isomorphism-invariant satisfaction to relational vocabularies. Each sentence depends on finitely many symbols, and satisfaction respects renaming and vocabulary expansion (our own). A regular logic here extends first-order logic and admits Boolean operations, existential quantification and relativization to unary predicates (our own).

**Problem.** Among these regular abstract logics, first-order logic is strongest with countable compactness and the downward Löwenheim–Skolem property. Countable compactness gives a model to each countable finitely satisfiable theory. Downward Löwenheim–Skolem gives a countable model to each sentence with an infinite model.

**How the definition helps.** Comparing logics by definable classes of structures makes “strongest” precise (our own). Lindström’s theorem says every sentence of a qualifying extension already defines a first-order definable class (our own).

**Wikipedia:** [Lindström's theorem](https://en.wikipedia.org/wiki/Lindstr%C3%B6m%27s_theorem). It says: “Lindström's theorem is perhaps the best known result of what later became known as abstract model theory, the basic notion of which is an abstract logic”

**Sources:**

- [Lindström, P. (1969). On extensions of elementary logic. Theoria 35, 1–11.](https://doi.org/10.1111/j.1755-2567.1969.tb00356.x)

### Coding whole computation histories makes the halting check primitive recursive

**Remember:** Search for the whole computation, then read off its answer.

*True by definition.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D10. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Kleene's T(e, i, x) holds when x codes a complete computation history of program e on input i that ends in a halting state. A primitive recursive U reads the output from x.

**Problem.** Kleene's normal form theorem: every computable function f equals U(μx T(e, n, x)) for some index e. Here μx means the least x with the property.

**How the definition helps.** Under standard computation coding, checking each step of a proposed finite halting history and reading its output are primitive recursive (our own). Choose an index computing f and search for the least valid history code (our own). Its output is f(n), and the search diverges exactly when the computation does (our own).

**Wikipedia:** [Kleene's T predicate](https://en.wikipedia.org/wiki/Kleene%27s_T_predicate). It says: “By the theorem, the definition of every general recursive function f can be rewritten into a normal form such that the μ operator is used only once”

**Sources:**

- [Kleene, S. C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical Society 53, 41–73.](https://doi.org/10.1090/S0002-9947-1943-0007371-8)

### Productive sets turn Gödel's first incompleteness theorem into one sentence

**Remember:** A productive set beats every list you offer with a new member.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03F40. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A set P is productive if a computable function f does the following. For every index e with Wₑ ⊆ P, the number f(e) lies in P but not in Wₑ. Here Wₑ is the e-th computably enumerable set.

**Problem.** Gödel's first incompleteness theorem: no sound, effectively axiomatized theory proves all true sentences of arithmetic.

**How the definition helps.** The productivity theorem for arithmetic truth gives a missing truth for every effective enumeration of truths (our own). Enumerate the arithmetic theorems of the given effective theory (our own). Soundness puts them all among the truths, so productivity supplies a true sentence outside the enumeration (our own).

**Wikipedia:** [Creative and productive sets](https://en.wikipedia.org/wiki/Creative_and_productive_sets). It says: “whenever W is a recursively enumerable set of true sentences, there is at least one true sentence that is not in W.”

**Sources:**

- [Post, E. L. (1944). Recursively enumerable sets of positive integers and their decision problems. Bulletin of the American Mathematical Society 50, 284–316.](https://doi.org/10.1090/S0002-9904-1944-08111-1)
- [Myhill, J. (1955). Creative sets. Zeitschrift für mathematische Logik und Grundlagen der Mathematik 1, 97–108.](https://doi.org/10.1002/malq.19550010205)

### Simple sets are noncomputable by definition

**Remember:** A simple set's complement hides from every enumeration, so it is not computable.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A set S is simple if it is computably enumerable, its complement is infinite, and its complement contains no infinite computably enumerable set.

**Problem.** Every simple set is computably enumerable but not computable.

**How the definition helps.** Computable enumerability is part of simplicity. If S were computable, its infinite complement would itself be computably enumerable, contrary to the defining condition (our own).

**Wikipedia:** [Simple set](https://en.wikipedia.org/wiki/Simple_set). It says: “He succeeded in the first part (which is obvious by definition), but for the other part, he managed only to prove nonexistence of a many-one reduction.”

**Sources:**

- [Post, E. L. (1944). Recursively enumerable sets of positive integers and their decision problems. Bulletin of the American Mathematical Society 50, 284–316.](https://doi.org/10.1090/S0002-9904-1944-08111-1)

### Martin-Löf random sequences pass every test an algorithm can make

**Remember:** Random means avoiding every null set that an algorithm can describe.

*Rules out counterexamples.* MSC 03D32 (Algorithmic randomness and dimension). arXiv math.LO. Level 3: graduate.

**Definition.** For fair-coin measure, a Martin-Löf test is a uniformly computably enumerable sequence of open sets Uₙ with measure at most 2⁻ⁿ. A binary sequence is Martin-Löf random if, for every such test, it lies outside some Uₙ (our own).

**Problem.** Almost every infinite binary sequence is Martin-Löf random. Every random sequence obeys every probability-one law with effectively null exceptions, including the large-number and iterated-logarithm laws for fair coin tosses.

**How the definition helps.** Each test intersection has measure zero, and there are only countably many algorithms describing tests (our own). Their union is null, so almost every sequence passes every test (our own). Effective forms of the two probability laws cover their exceptions by such tests (our own). Allowing arbitrary null sets would exclude every sequence through its own singleton (our own).

**Wikipedia:** [Algorithmically random sequence](https://en.wikipedia.org/wiki/Algorithmically_random_sequence). It says: “defined "Martin-Löf randomness" by only allowing laws of randomness that are Turing-computable.”

**Sources:**

- [Martin-Löf, P. (1966). The definition of random sequences. Information and Control 9(6), 602–619.](https://doi.org/10.1016/S0019-9958(66)80018-9)

### Prefix-free programs make the halting probability a real number

**Remember:** Prefix-free programs share a total budget of 1.

*True by definition.* MSC 03D32 (Algorithmic randomness and dimension), 68Q30. arXiv math.LO, cs.IT. Level 3: graduate.

**Definition.** Chaitin's constant Ω is the sum of 2 to the power −\|p\| over all programs p that halt, where \|p\| is the length of p. The programs run on a universal machine whose set of halting programs is prefix-free. Prefix-free means that no halting program is the start of another halting program.

**Problem.** Chaitin's constant Ω, the halting probability of a prefix-free universal machine, is a real number between 0 and 1.

**How the definition helps.** Distinct halting programs determine disjoint binary cylinders, of measures 2⁻ˡ for program length l (our own). Kraft’s inequality therefore bounds their sum by 1, and universality gives a halting program, so the sum is positive. Equality with 1 would let enumeration reach total weight above 1 − 2⁻ⁿ, deciding halting for all programs of length n (our own). This contradicts undecidability for a universal machine (our own).

**Wikipedia:** [Chaitin's constant](https://en.wikipedia.org/wiki/Chaitin%27s_constant), [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “The requirement that the domain be prefix-free, together with Kraft's inequality, ensures that this sum converges to a real number between 0 and 1.”

**Sources:**

- [Chaitin, G. J. (1975). A theory of program size formally identical to information theory. Journal of the ACM 22, 329–340.](https://doi.org/10.1145/321892.321894)

### Bounded quantifiers in Σ₀ make Σ₁ sets exactly the computably enumerable sets

**Remember:** Bounded checks are computable, so one search in front gives semidecidable.

*True by definition. Confidence: medium.* MSC 03D55 (Hierarchies of computability and definability), 03D25. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** In first-order arithmetic, a bounded formula has only quantifiers bounded by terms independent of the quantified variable. A set is Σ⁰₁ if an existential block followed by a bounded formula defines membership (our own).

**Problem.** A set of natural numbers is Σ⁰₁ if and only if it is computably enumerable, that is, some program lists its members. This is the first level of Post's theorem.

**How the definition helps.** Bounded formulas are decidable, so searching witness tuples semidecides membership (our own). Conversely, membership in an enumerable set is witnessed by a finite accepting computation (our own). The arithmetic computation-coding lemma expresses existence of that history by existential quantifiers with a bounded check (our own).

**Wikipedia:** [Arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy). It says: “The Σ⁰₁ sets of numbers are those definable by a formula of the form ∃n₁ ⋯ ∃nₖ ψ(n₁,…,nₖ,m) where ψ has only bounded quantifiers. These are exactly the recursively enumerable sets.”

**Sources:**

- [Kleene, S. C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical Society 53, 41–73.](https://doi.org/10.1090/S0002-9947-1943-0007371-8)

### Define computable reals by approximations, not by digits

**Remember:** Ask for approximations, not for digits.

*Makes the theorem clean to state or prove.* MSC 03D78 (Computation over the reals, computable analysis). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A real a is computable if some algorithm returns a rational r with \|r − a\| ≤ ε for every positive rational error bound ε.

**Problem.** With ε-approximations, one algorithm computes the sum and the product of any two computable reals from the programs that represent them. With decimal digits, no such algorithm exists.

**How the definition helps.** Error bounds let one choose enough input precision for either operation (our own). Coarse input bounds suffice to estimate how multiplication amplifies errors. Decimal output can require deciding a carry from arbitrarily distant digits, which prevents uniform arithmetic.

**Wikipedia:** [Computable number](https://en.wikipedia.org/wiki/Computable_number). It says: “This lack of uniformity is one reason why the contemporary definition of computable numbers uses ε approximations rather than decimal expansions.”

**Sources:**

- [Turing, A. M. (1936/1937). On computable numbers, with an application to the Entscheidungsproblem. Proc. London Math. Soc. (2) 42, 230–265.](https://doi.org/10.1112/plms/s2-42.1.230)
- [Hirst, J. L. (2007). Representations of reals in reverse mathematics. Bull. Polish Acad. Sci. Math. 55(4), 303–316.](https://doi.org/10.4064/ba55-4-2)

### Every computable function on the real numbers is continuous

**Remember:** A finite look at the input can only fix the output approximately.

*True by definition. Confidence: medium.* MSC 03D78 (Computation over the reals, computable analysis). arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A name for x is a rational sequence (qₙ) satisfying \|qₙ − x\| ≤ 2⁻ⁿ for every natural number n. A function f is computable if one algorithm, reading any name for any x, produces a name for f(x).

**Problem.** Every computable function from ℝ to ℝ is continuous.

**How the definition helps.** Each output approximation depends on finitely many input terms (our own). Choose a name for x with strict error bounds throughout. Every sufficiently close point admits a name agreeing on those finitely many terms, so its output shares that approximation. The two output values thus differ by at most twice its error bound, which can be arbitrarily small.

**Wikipedia:** [Computable analysis](https://en.wikipedia.org/wiki/Computable_analysis). It says: “One of the basic results of computable analysis is that every computable function from ℝ to ℝ is continuous.”

**Sources:**

- [K. Weihrauch, Computable Analysis: An Introduction, Springer (2000)](https://doi.org/10.1007/978-3-642-56999-9)

### Cardinals as initial ordinals make the supremum of cardinals their union

**Remember:** Take the union of the representatives to get the least cardinal bound.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** Represent each well-orderable cardinal by its initial ordinal. An initial ordinal is an ordinal with no bijection to a smaller ordinal. The alternative treats each size as the class of all sets in bijection with a given set.

**Problem.** The union of any set of initial ordinals is an initial ordinal, and it is their least upper bound.

**How the definition helps.** With initial ordinals, the supremum is a plain union, which is already the least ordinal upper bound (our own). It remains to show that the union U is initial (our own). If a smaller ordinal β had a bijection with U, then β lies below some member κ, and κ ⊆ U injects into β. By the Schröder–Bernstein theorem κ would then have a bijection with β &lt; κ, which contradicts that κ is initial (our own).

**Paper or page:** [Proposition 1.9.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If every member of X is a cardinal, then ⋃ X is a cardinal.”

**Sources:** none listed. No primary source with a working link was found.

### Cofinality as the shortest unbounded sequence is always a regular ordinal

**Remember:** A shorter unbounded map would compose to give a shorter witness.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** For a nonzero limit ordinal α, cf(α) is the least ordinal admitting a nondecreasing map into α with unbounded image. An image is unbounded if it exceeds every ordinal below α. A nonzero limit ordinal is regular if it equals its cofinality.

**Problem.** For every nonzero limit ordinal α, cf(α) is regular, that is, cf(cf(α)) = cf(α).

**How the definition helps.** Composing two nondecreasing unbounded maps gives another such map (our own). The least possible domain δ = cf(α) is a nonzero limit, since an empty or last value cannot witness unboundedness. A shorter witness for cf(δ) would therefore give a shorter witness for cf(α). The identity on δ witnesses the opposite bound.

**nLab:** [cofinality](https://ncatlab.org/nlab/show/cofinality). It says: “In general, an ordinal number α such that ocf(α) = α is called regular, so every ordinal cofinality is regular.”

**Sources:** none listed. No primary source with a working link was found.

### Constructive well-orders are transitive, extensional and well-founded, not total

**Remember:** A well-order is a relation for induction, where predecessors determine the element.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 3: graduate.

**Definition.** A constructive well-order is a transitive relation ≺ on a set S in which elements with identical predecessors coincide and induction holds. Induction means every subset P of S equals S if it contains each x whose predecessors all belong to P.

**Problem.** With this definition, every well-ordered set has an ordinal, by well-founded recursion without excluded middle. Under excluded middle, the definition agrees with the classical one.

**How the definition helps.** Well-founded recursion assigns each element the set of values assigned to its predecessors (our own). Extensionality makes this assignment injective, and transitivity makes its image an ordinal. Classical comparison of ordinals gives totality under excluded middle. Constructively, a classical well-order even on a set with two unequal elements would imply excluded middle.

**nLab:** [well-order](https://ncatlab.org/nlab/show/well-order). It says: “A classically well-ordered set is a choice set, and so if any set with at least 2 unequal elements has a classical well-order, then excluded middle follows.”

**Sources:**

- [P. Taylor, Intuitionistic sets and ordinals, Journal of Symbolic Logic 61 (1996)](https://doi.org/10.2307/2275781)

### Continuity at limits gives every normal function arbitrarily large fixed points

**Remember:** Without continuity, α ↦ α + 1 jumps over every fixed point.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** A function f on the ordinals is normal if it is strictly increasing and continuous at every nonzero limit. Continuity at γ means f(γ) = sup{f(ν) ∣ ν &lt; γ}.

**Problem.** Every normal function has arbitrarily large fixed points. For example, the map from α to the α-th aleph number is normal. So some cardinals κ equal the κ-th aleph number.

**How the definition helps.** Continuity rules out the successor function, which jumps over the supremum at every nonzero limit. Start above any given ordinal and iterate f (our own). Strict increase gives f(α) ≥ α, so the iterates either stabilize or increase to a limit. Continuity makes that limit a fixed point.

**Wikipedia:** [Normal function](https://en.wikipedia.org/wiki/Normal_function). It says: “But f(α) = α + 1 is not normal because it is not continuous at any limit ordinal”

**Sources:**

- [Veblen, O. (1908). Continuous increasing functions of finite and transfinite ordinals. Transactions of the American Mathematical Society 9, 280–292.](https://doi.org/10.1090/S0002-9947-1908-1500814-9)

### Hartogs numbers make trichotomy of cardinals imply the axiom of choice

**Remember:** Every set has an ordinal too big to fit inside it.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** The Hartogs number of X is the least ordinal that admits no injection into X.

**Problem.** If any two cardinalities are comparable, then every set can be well-ordered. So trichotomy for cardinals is equivalent to the axiom of choice.

**How the definition helps.** Comparability forces X to inject into its Hartogs number (our own). Pulling back the ordinal order well-orders X. Hartogs’s theorem supplies the ordinal without choice, and the well-ordering theorem identifies well-orderability of every set with choice. Conversely, choice lets us compare sizes by comparing initial ordinals.

**Wikipedia:** [Hartogs number](https://en.wikipedia.org/wiki/Hartogs_number). It says: “Conversely, trichotomy for cardinal numbers (the statement that any two cardinal numbers are comparable) thus implies that every set can be well-ordered, and hence implies the axiom of choice.”

**Sources:**

- [Hartogs, F. (1915). Über das Problem der Wohlordnung. Mathematische Annalen 76, 438–443.](https://doi.org/10.1007/BF01458215)

### Regular cardinals defined by small unions keep small colimits small

**Remember:** Fewer than κ small sets still give a small disjoint union.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** An infinite cardinal κ is regular if every disjoint union of fewer than κ sets of size less than κ has size less than κ.

**Problem.** Let κ be a regular cardinal. Every diagram of fewer than κ sets, each of size less than κ, has a colimit of size less than κ. A colimit glues the sets of a diagram together along its maps.

**How the definition helps.** The disjoint union of the diagram’s sets has size less than κ by regularity (our own). The colimit identifies elements of that union along the diagram’s maps. Well-order the union and send each equivalence class to its least element to obtain the same size bound.

**nLab:** [regular cardinal](https://ncatlab.org/nlab/show/regular+cardinal). It says: “has all colimits (or just all coproducts) of size &lt; κ.”

**Sources:** none listed. No primary source with a working link was found.

### Scott's trick defines cardinality as the lowest-rank sets of that size

**Remember:** Do not take the class of all copies; take the lowest-rank copies, a set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** The Scott cardinal of X consists of all sets in bijection with X having the least rank among such sets.

**Problem.** With the axiom of foundation and no axiom of choice, every set has a cardinality in this sense, which is a set. Two sets have the same cardinality exactly when they are in bijection.

**How the definition helps.** Foundation gives X a rank, so a least rank ρ among its copies exists (our own). All copies of rank ρ lie in the set V<sub>ρ+1</sub>, where separation collects them without choice. Sets in bijection have the same copies. Conversely, equal Scott cardinals share a copy, giving a bijection by composition.

**nLab:** [cardinal number](https://ncatlab.org/nlab/show/cardinal+number). It says: “This will follow directly from the axiom of foundation; it will also follow from the axiom of choice, since then every set is isomorphic to a von Neumann ordinal.”

**Sources:**

- [Dana Scott, Definitions by abstraction in axiomatic set theory (abstract), Bulletin of the American Mathematical Society 61 (1955) 442](https://doi.org/10.1090/S0002-9904-1955-09941-5)

### Sign expansions make the surreal numbers totally ordered by first difference

**Remember:** The first difference decides the order, even if one sequence ends.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 12J15. arXiv math.LO. Level 3: graduate.

**Definition.** A surreal number in sign form is a function from an ordinal to {−, +}. Compare distinct functions at their first difference, ordering minus below an absent sign and an absent sign below plus.

**Problem.** Any two surreal numbers x and y satisfy exactly one of x &lt; y, x = y and y &lt; x.

**How the definition helps.** Distinct expansions have a first difference because their positions are well-ordered (our own). The sign order decides exactly one direction there. Identical expansions give equality. The equivalence with Conway’s recursive presentation carries the remaining work.

**Wikipedia:** [Surreal number](https://en.wikipedia.org/wiki/Surreal_number). It says: “For surreal numbers, define the binary relation &lt; to be lexicographic order”

**Sources:**

- [Harry Gonshor, An Introduction to the Theory of Surreal Numbers (1986)](https://doi.org/10.1017/cbo9780511629143)

### The Hessenberg sum makes ordinal addition commutative

**Remember:** The natural sum adds ordinals like polynomials in ω.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** Write both ordinals in Cantor normal form and use coefficient zero for each missing exponent. Their natural sum adds matching finite coefficients. Their natural product multiplies coefficients termwise across all pairs, naturally adds the paired exponents, and naturally sums the resulting monomials.

**Problem.** The natural sum is commutative and associative, and the natural product distributes over it.

**How the definition helps.** Coefficient addition gives commutativity and associativity of natural sum (our own). In a product, each coefficient distributes over a sum of coefficients at the same exponent. Collecting equal exponents gives distributivity of natural product.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “The natural sum and product are commutative and associative, and natural product distributes over natural sum.”

**Sources:** none listed. No primary source with a working link was found.

### Analytic sets repair Lebesgue's false claim about projections of Borel sets

**Remember:** Projecting a Borel set always gives an analytic set.

*Makes the theorem clean to state or prove.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A subset A of a Polish space X is analytic if it is a projection of a Borel set. The projection must be onto the first coordinate of X × Y for some Polish space Y.

**Problem.** The projection of a Borel subset of the plane is analytic, though not always Borel. Analytic sets are universally measurable: measurable for the completion of every Borel probability measure.

**How the definition helps.** The projection clause applies directly to Borel subsets of the plane (our own). Suslin found a projection that fails to be Borel. The universal measurability theorem for analytic sets supplies the measurability assertion.

**Wikipedia:** [Mikhail Suslin](https://en.wikipedia.org/wiki/Mikhail_Suslin), [Analytic set](https://en.wikipedia.org/wiki/Analytic_set), [Universally measurable set](https://en.wikipedia.org/wiki/Universally_measurable_set). It says: “he found an error in an argument of Lebesgue, who believed he had proved that for any Borel set in ℝ², the projection onto the real axis was also a Borel set.”

**Sources:** none listed. No primary source with a working link was found.

### Defining analytic sets as continuous images makes their continuous images analytic

**Remember:** Compose the given map with the map that parametrizes the set.

*True by definition.* MSC 03E15 (Descriptive set theory), 54H05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A subset A of a Polish space is analytic if some continuous map from a Polish space has image A. A Polish space admits a complete compatible metric and has a countable dense subset.

**Problem.** Let A be an analytic set, and let f be a continuous map from A into a Polish space. Then the image f(A) is analytic.

**How the definition helps.** Composition preserves the continuous parametrization (our own). If g maps a Polish space continuously onto A, then f ∘ g maps that space continuously onto f(A).

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “closed under countable unions and intersections, continuous images, and inverse images”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Defining Borel sets as analytic with analytic complement makes Borel bijections isomorphisms

**Remember:** A bijection sends a set and its complement to analytic complements.

*True by definition.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO. Level 3: graduate.

**Definition.** In a Polish space, call a set Borel if both it and its complement are analytic. A set is analytic if some continuous map from a Polish space has that set as its image.

**Problem.** Let f be a measurable bijection between standard Borel spaces. Then the inverse of f is measurable. A standard Borel space has the Borel sets of some Polish topology as its measurable sets.

**How the definition helps.** A Borel bijection sends each Borel set and its complement to complementary analytic sets (our own). Each image projects from the Borel graph restricted to the corresponding domain set. The image is therefore Borel, which gives measurability of the inverse. Souslin’s theorem identifies this criterion with the usual Borel definition.

**Wikipedia:** [Standard Borel space](https://en.wikipedia.org/wiki/Standard_Borel_space). It says: “a set that is both analytic and coanalytic is necessarily Borel”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Defining standard Borel spaces through Borel subsets makes Borel subspaces standard

**Remember:** A Borel subset of a Borel subset is still Borel.

*True by definition. Confidence: medium.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A standard Borel space is a measurable space that is isomorphic to a Borel subset of a Polish space, with the induced measurable sets. The usual definition asks for a Polish topology on the space itself whose Borel sets are the given measurable sets.

**Problem.** Let X be a standard Borel space, and let B be a measurable subset of X. Then B, with the induced measurable sets, is a standard Borel space.

**How the definition helps.** With this definition, the theorem becomes a fact about Borel sets in one Polish space. The isomorphism sends B to a Borel subset of a Borel subset, and such a set is Borel in the whole Polish space (our own). With the usual definition, B needs its own Polish topology with the same Borel sets (our own). That is the theorem, stated on the nLab, that each Borel subset of a Polish space has such a topology.

**nLab:** [standard Borel space](https://ncatlab.org/nlab/show/standard+Borel+space). It says: “Every Borel subset of a Polish space, equipped with the induced sigma-algebra, is standard Borel.”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### The game definition of Wadge reducibility turns Borel determinacy into Wadge's lemma

**Remember:** Each winner's strategy gives a reduction in one direction.

*True by definition.* MSC 03E15 (Descriptive set theory), 03E60. arXiv math.LO. Level 3: graduate.

**Definition.** For subsets A and B of Baire space, players alternately write natural numbers forming x and y respectively. Only the second player may pass, and wins exactly when y is infinite and membership of x in A matches membership of y in B. A reduces to B if the second player has a winning strategy.

**Problem.** Let A and B be Borel subsets of Baire space. Then A reduces to B, or B reduces to the complement of A.

**How the definition helps.** Borel determinacy gives one player a winning strategy because the payoff is Borel. A second-player win gives the first reduction by definition (our own). Otherwise feed any y without passes to the winning first-player strategy. Its replies form x continuously, with x outside A exactly when y belongs to B, giving the reverse reduction by the Wadge game characterization.

**Wikipedia:** [Wadge hierarchy](https://en.wikipedia.org/wiki/Wadge_hierarchy). It says: “Since Borel determinacy is proved in ZFC, ZFC implies Wadge's lemma for Borel sets.”

**Sources:**

- [Donald A. Martin, Borel Determinacy (1975)](https://doi.org/10.2307/1971035)

### The nested partition definition gives every standard Borel space a compact topology

**Remember:** Nested atoms describe each point as a path in a compact space.

*True by definition.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO. Level 3: graduate.

**Definition.** A measurable space is standard Borel if it admits a sequence of successively finer finite measurable partitions that separate points and generate its σ-algebra. Every nested choice of one part from each partition must have nonempty intersection.

**Problem.** Every standard Borel space has a compact metrizable topology whose Borel sets are exactly its measurable sets.

**How the definition helps.** Send each point to its sequence of parts (our own). The nested sequences form a closed subset of the compact metrizable product of finite discrete partitions. Separation and nested intersection give a bijection, and generation makes its coordinate cylinders generate exactly the original σ-algebra. The classification of standard Borel spaces supplies such partitions under the usual definition.

**nLab:** [standard Borel space](https://ncatlab.org/nlab/show/standard+Borel+space). It says: “The compatibility conditions are closed conditions, so K is a closed subspace of a countable product of finite discrete spaces.”

**Sources:** none listed. No primary source with a working link was found.

### The tree definition reduces every analytic set to the ill-founded trees

**Remember:** Fix the first coordinate and keep the tree of witnesses.

*True by definition. Confidence: medium.* MSC 03E15 (Descriptive set theory), 54H05. arXiv math.LO. Level 3: graduate.

**Definition.** A subset A of Baire space is analytic if some tree T on pairs of finite sequences of natural numbers represents A. Its nodes have coordinates of equal length and include every prefix of each node. A sequence x belongs to A exactly when some sequence y satisfies (x↾n, y↾n) ∈ T for every natural number n.

**Problem.** Every analytic subset of Baire space is the preimage, under a continuous map, of the set of trees with an infinite branch. Trees on natural numbers form a space in which each basic open set fixes finitely many membership questions.

**How the definition helps.** Fixing x gives a tree whose branches are precisely its witnesses (our own). Include a finite sequence t when (x↾n, t) belongs to T, where n is its length. Each membership test reads only n terms, so the map to trees is continuous. Its tree has a branch exactly when x belongs to A.

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “the projections of trees”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Tree codes make disjoint analytic sets stay disjoint after forcing

**Remember:** Two projections meet only if a combined tree has a branch.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E15 (Descriptive set theory), 03E40. arXiv math.LO. Level 3: graduate.

**Definition.** A tree on pairs consists of pairs of equally long finite sequences of natural numbers and contains every prefix of each node. Its projection contains exactly the infinite sequences x admitting an infinite y whose paired prefixes all belong to the tree. In a forcing extension, interpret the same tree using the sequences in that extension.

**Problem.** Let S and T be trees whose projections are disjoint. Then their projections stay disjoint in every forcing extension.

**How the definition helps.** The projections intersect exactly when a single tree of triples has a branch (our own). Its nodes (s,t,u) satisfy (s,t) ∈ S and (s,u) ∈ T. Ground-model disjointness makes this tree well-founded, so it has an ordinal rank decreasing along extensions. The rank persists after forcing and rules out any new branch.

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “the projections of trees”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Two adjoints make preimages preserve unions and intersections

**Remember:** A left adjoint preserves joins, and a right adjoint preserves meets.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 06A15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** For f from S to T, the preimage of B ⊆ T consists of those x ∈ S satisfying f(x) ∈ B. Maps L and R between inclusion orders are adjoint if L(A) ⊆ B exactly when A ⊆ R(B) for every A and B.

**Problem.** Preimage preserves all unions and intersections. Direct image preserves all unions but need not preserve intersections.

**How the definition helps.** Preimage has adjoints on both sides (our own). Direct image is its left adjoint, and A ↦ T ∖ f(S ∖ A) is its right adjoint. Left adjoints preserve unions and right adjoints preserve intersections. Distinct points with the same image give disjoint singletons whose images intersect.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “If f : X → Y is a function, then for any subset M of X we can form the image”

**Paper or page:** [Inverse Image Mapping is Upper Adjoint to Direct Image Mapping](https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Upper_Adjoint_to_Direct_Image_Mapping), [Inverse Image Mapping is Lower Adjoint to Composite Involving Direct Image Mapping](https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Lower_Adjoint_to_Composite_Involving_Direct_Image_Mapping). It says: “f←: 𝒫(T) → 𝒫(S) is the upper adjoint to f→: 𝒫(S) → 𝒫(T)”

**Sources:** none listed. No primary source with a working link was found.

### Ackermann coding makes the natural numbers a model of finite set theory

**Remember:** i is an element of j when bit i of j is 1.

*True by definition.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03C62. arXiv math.LO. Level 3: graduate.

**Definition.** A hereditarily finite set is a finite set whose elements are hereditarily finite sets, starting from the empty set. Ackermann coded each such set by a natural number. The code of a set is the sum of 2 to the power of the codes of its elements.

**Problem.** Define membership on natural numbers by reading the binary digits from position zero. With i belonging to j exactly when bit i of j is 1, they model Zermelo–Fraenkel set theory without infinity.

**How the definition helps.** Ackermann coding transports the standard hereditarily finite model to the natural numbers (our own). Induction decodes n by collecting the sets coded by the positions of its 1-bits, numbering positions from zero. Those positions are smaller than n, and uniqueness of binary expansion makes decoding inverse to coding. Membership in the finite model therefore gives exactly the stated bit test.

**Wikipedia:** [Hereditarily finite set](https://en.wikipedia.org/wiki/Hereditarily_finite_set). It says: “The Ackermann coding can be used to construct a model of finitary set theory in the natural numbers.”

**Sources:**

- [Ackermann, W. (1937). Die Widerspruchsfreiheit der allgemeinen Mengenlehre. Mathematische Annalen 114, 305–315.](https://doi.org/10.1007/bf01594179)

### Extensional well-founded relations collapse to membership on a unique transitive class

**Remember:** Different elements need different predecessors, or the collapse glues them together.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03E20. arXiv math.LO. Level 3: graduate.

**Definition.** A relation R on a class is well-founded if every nonempty subset has an R-minimal element. It is extensional if two different elements never have the same set of R-predecessors. It is set-like if the predecessors of each element form a set.

**Problem.** Every set-like, well-founded, extensional relation is isomorphic to the membership relation on a transitive class, a class that contains every element of its elements. The transitive class and the isomorphism are both unique.

**How the definition helps.** Extensionality is exactly the condition that makes the collapse map one-to-one. The collapse, defined by well-founded recursion, sends each element x to the set of images of the elements below x. Without extensionality, two elements with no predecessors both go to the empty set, and the map is only a homomorphism (our own example). Well-foundedness is also needed, since the lemma fails for a model of ZF that is not well-founded.

**Wikipedia:** [Mostowski collapse lemma](https://en.wikipedia.org/wiki/Mostowski_collapse_lemma). It says: “The homomorphism F is an isomorphism if and only if R is extensional.”

**Sources:**

- [Mostowski, A. (1949). An undecidable arithmetical statement. Fundamenta Mathematicae 36, 143–164.](https://doi.org/10.4064/fm-36-1-143-164)

### A complete Boolean algebra gives quantified formulas a truth value

**Remember:** Existential quantifiers are joins, so the joins must exist.

*Makes the theorem clean to state or prove.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 03C90, 06E10. arXiv math.LO. Level 3: graduate.

**Definition.** A Boolean algebra B is complete if every subset has a supremum in B. Complements then also give every subset an infimum.

**Problem.** Over a ground model of ZFC, every set-theoretic formula with parameters in Vᴮ has a Boolean value for every complete Boolean algebra B. Every ZFC axiom has value 1.

**How the definition helps.** Completeness supplies the joins for existential quantifiers and the meets for universal quantifiers (our own). Together with the recursive clauses for atomic formulas and connectives, these give every formula a value. The Boolean-valued model theorem, over a ground model of ZFC, gives every ZFC axiom value 1.

**Wikipedia:** [Boolean-valued model](https://en.wikipedia.org/wiki/Boolean-valued_model). It says: “The completeness of the Boolean algebra is required to define truth values for quantified formulas.”

**Sources:** none listed. No primary source with a working link was found.

### Defining forcing by Boolean values makes densely forced sentences forced

**Remember:** Below p, a dense set has p as its least upper bound.

*True by definition. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** In a complete Boolean algebra B, a condition is a nonzero element. A condition p forces a sentence φ with Boolean value ‖φ‖ exactly when p ≤ ‖φ‖.

**Problem.** Suppose every condition below p has a stronger condition that forces φ. Then p forces φ.

**How the definition helps.** With Boolean values, forcing is an inequality, and inequalities pass to least upper bounds. Every nonzero element below p has a condition forcing φ below it, so these conditions have least upper bound p (our own). Each of them lies below ‖φ‖, so p does too (our own). With the recursive definition, this fact is a lemma proved by induction on formulas.

**Wikipedia:** [Boolean-valued model](https://en.wikipedia.org/wiki/Boolean-valued_model). It says: “The truth value of a formula is an element of the complete Boolean algebra B.”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Defining properness by preserved stationary sets makes two-step iterations proper

**Remember:** Preserve the same stationary family at each step.

*True by definition.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A forcing order is proper if it preserves every stationary family of countable subsets of every uncountable set (our own formulation). A family is stationary if it meets every family unbounded under inclusion and closed under unions of increasing sequences of length ω.

**Problem.** Let P be proper, and suppose P forces that Q is proper. Then the two-step iteration, P followed by Q, is proper.

**How the definition helps.** Apply preservation twice to the same family (our own). Proper forcing preserves ω₁, so an originally uncountable set X remains uncountable after forcing with P. Each originally stationary family on X remains stationary there, and Q preserves it again. Shelah’s characterization identifies this preservation condition with properness.

**Wikipedia:** [Proper forcing axiom](https://en.wikipedia.org/wiki/Proper_forcing_axiom). It says: “forcing with P preserves stationary subsets”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Perfect trees make the Sacks fusion lemma statable by splitting levels

**Remember:** Keep each level of branching once it has been built.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A Sacks condition is a nonempty tree of finite binary strings, closed under prefixes, in which each node extends to a splitting node. A node splits if both one-bit extensions belong to the tree. Smaller trees are stronger conditions.

**Problem.** A node is an nth splitting node if it splits and has exactly n splitting nodes strictly below it. Let p₀ ⊇ p₁ ⊇ p₂ ⊇ … be Sacks conditions where each pₙ₊₁ keeps every nth splitting node of pₙ, still splitting. Then the intersection of the pₙ is a perfect tree.

**How the definition helps.** Keeping the nth splits also keeps every earlier split, since both sides extend to nth splits (our own). For any node t in the intersection choose n greater than its length. In pₙ some nth split extends t, and every later tree keeps that split and its two successors. Thus every node in the intersection extends to a split.

**Wikipedia:** [List of forcing notions](https://en.wikipedia.org/wiki/List_of_forcing_notions). It says: “A tree p is stronger than q if p is contained in q.”

**Sources:**

- [Gerald E. Sacks, Forcing with perfect closed sets (1971)](https://doi.org/10.1090/pspum/013.1/0276079)

### The countable chain condition stops forcing from collapsing cardinals

**Remember:** Countably many incompatible choices cannot make an uncountable set countable.

*Rules out counterexamples.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** Forcing adds a new set G, a generic filter on a partial order of conditions, to a model of set theory. Two conditions are incompatible when no condition lies below both. The order is ccc if every set of pairwise incompatible conditions is countable.

**Problem.** Forcing with a ccc partial order preserves all cardinals. In particular, Cohen's forcing that adds ℵ₂ new real numbers keeps ℵ₁ and ℵ₂ as cardinals.

**How the definition helps.** A maximal antichain deciding one ordinal value of a function name allows only countably many values under ccc (our own). For infinite domain size λ, the union of all these possibilities has size at most λ, ruling out a surjection onto a larger cardinal. Finite partial maps from ω to ω₁ violate ccc because assigning different values at zero gives an uncountable antichain. Their generic union surjects onto ω₁.

**Wikipedia:** [Forcing (mathematics)](https://en.wikipedia.org/wiki/Forcing_%28mathematics%29), [Countable chain condition](https://en.wikipedia.org/wiki/Countable_chain_condition). It says: “In the theory of forcing, ccc partial orders are used because forcing with any generic set over such an order preserves cardinals and cofinalities.”

**Sources:**

- [Cohen, P. J. (1963). The independence of the continuum hypothesis. Proceedings of the National Academy of Sciences 50, 1143–1148.](https://doi.org/10.1073/pnas.50.6.1143)

### The splitting condition makes every generic filter genuinely new

**Remember:** If every condition can split, no generic filter was already there.

*Rules out counterexamples.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A forcing order satisfies the splitting condition if every condition p has two extensions that are incompatible with each other. A filter G is generic over a model M if G meets every dense subset of the order that lies in M.

**Problem.** If the order satisfies the splitting condition, then no filter that is generic over M lies in M. So M\[G\] is a proper extension of M.

**How the definition helps.** Splitting makes the complement of any filter dense. At least one of two incompatible extensions of each condition must lie outside the filter (our own). A generic filter in M would have to meet its own complement. For the one-condition order, splitting fails and the entire order is already a generic filter in M.

**Wikipedia:** [Forcing (mathematics)](https://en.wikipedia.org/wiki/Forcing_%28mathematics%29). It says: “Due to the splitting condition on ℙ, if G is a filter, then ℙ ∖ G is dense. If G ∈ M, then ℙ ∖ G ∈ M because M is a model of ZFC.”

**Sources:**

- [Cohen, P. J. (1963). The independence of the continuum hypothesis. Proceedings of the National Academy of Sciences 50, 1143–1148.](https://doi.org/10.1073/pnas.50.6.1143)

### Constructible sets come with their own well-order

**Remember:** Every constructible set has a definition, and definitions can be listed in order.

*True by definition.* MSC 03E45 (Inner models, including constructibility, ordinal definability, and core models), 03E35, 03E50. arXiv math.LO. Level 3: graduate.

**Definition.** Start with L₀ = ∅ and take unions of earlier stages at limit ordinals. At each successor stage, collect all subsets of the preceding stage definable over it by first-order formulas with parameters from it. The class L consists of the sets in these stages.

**Problem.** The constructible universe L has a well-order of all its sets that a formula without parameters defines in L. So the axiom of choice holds in L, and if ZF is consistent, so is ZF with the axiom of choice.

**How the definition helps.** At each stage the earlier well-order orders the finite parameter tuples of each fixed length (our own). Give each new set its least defining code, comparing formula numbers first and then parameter tuples lexicographically. This uniform recursion defines a parameter-free well-order in L, yielding choice. Gödel’s inner model theorem supplies ZF in L and hence the relative consistency conclusion.

**Wikipedia:** [Constructible universe](https://en.wikipedia.org/wiki/Constructible_universe). It says: “Notice that this well-ordering can be defined within L itself by a formula of set theory with no parameters, only the free-variables x and y.”

**Sources:**

- [Gödel, K. (1938). The consistency of the axiom of choice and of the generalized continuum-hypothesis. Proceedings of the National Academy of Sciences 24, 556–557.](https://doi.org/10.1073/pnas.24.12.556)

### Grothendieck universes make every set small in a large enough universe

**Remember:** A universe is a whole world of sets, closed under the usual constructions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E55 (Large cardinals), 18A15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A Grothendieck universe U is a transitive set containing ∅ and closed under unordered pairs and power sets. For every I ∈ U and family (xᵢ) indexed by I with every xᵢ ∈ U, its union belongs to U. A set is U-small if it belongs to U.

**Problem.** Under the axiom of universes, the category of U-small sets and their functions is small in some larger universe. Theorems about small categories, such as the Yoneda lemma, then apply to it there.

**How the definition helps.** The axiom puts U in a universe W (our own). Inside W, the objects form the set U, and closure under the universe operations collects all maps between them into a set. Thus W contains the category data.

**nLab:** [Grothendieck universe](https://ncatlab.org/nlab/show/Grothendieck+universe). It says: “In other words, every set is small if your universe is large enough!”

**Sources:**

- [Pierre Gabriel, Des catégories abéliennes, Bulletin de la Société Mathématique de France 90 (1962) 323–448](http://www.numdam.org/item?id=BSMF_1962__90__323_0)
- [Saunders Mac Lane, One universe as a foundation for category theory, Reports of the Midwest Category Seminar III, Lecture Notes in Mathematics 106 (1969) 192–200](https://doi.org/10.1007/BFb0059147)

### Measurable cardinals are the critical points of embeddings of the universe

**Remember:** The first ordinal an embedding moves is a measurable cardinal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An elementary embedding j from V into a transitive class M preserves and reflects every first-order formula with parameters under their images. Its critical point is the least ordinal κ with j(κ) ≠ κ.

**Problem.** Let j be a nontrivial elementary embedding of V into a transitive class M. Then the critical point of j is a measurable cardinal.

**How the definition helps.** Use the family of all A ⊆ κ with κ ∈ j(A) (our own). Since κ &lt; j(κ), elementarity for complements and intersections makes this an ultrafilter. Every ordinal below κ stays fixed, so no singleton belongs and intersections indexed by shorter ordinals stay in the family. The standard critical-point lemma gives that κ is an uncountable cardinal.

**Wikipedia:** [Critical point (set theory)](https://en.wikipedia.org/wiki/Critical_point_%28set_theory%29). It says: “If N is V, then κ (the critical point of j) is always a measurable cardinal”

**Sources:** none listed. No primary source with a working link was found.

### Measurable cardinals need non-principal ultrafilters and uncountability

**Remember:** Ignore singletons and keep intersections of fewer than κ large sets.

*Rules out counterexamples. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An uncountable cardinal κ is measurable if some ultrafilter on κ contains no singleton and contains every intersection of fewer than κ members.

**Problem.** Every measurable cardinal κ is regular: it is not a union of fewer than κ sets, each of size less than κ.

**How the definition helps.** A principal ultrafilter would admit even singular cardinals such as ℵω (our own). Every singleton has its complement in the witnessing ultrafilter. Intersecting fewer than κ such complements shows that every small set has its complement in the ultrafilter. A cover by fewer than κ small sets would put the intersection of their complements in the ultrafilter, although that intersection is empty.

**Wikipedia:** [Measurable cardinal](https://en.wikipedia.org/wiki/Measurable_cardinal). It says: “Equivalently, κ is a measurable cardinal if and only if it is an uncountable cardinal with a κ-complete, non-principal ultrafilter.”

**Sources:**

- [Ulam, S. (1930). Zur Masstheorie in der allgemeinen Mengenlehre. Fundamenta Mathematicae 16, 140–150.](https://doi.org/10.4064/fm-16-1-140-150)

### Requiring inaccessible cardinals to be uncountable keeps ℵ₀ out

**Remember:** An inaccessible cardinal behaves like ℵ₀ but is required to be uncountable.

*Rules out counterexamples.* MSC 03E55 (Large cardinals), 03E30. arXiv math.LO. Level 3: graduate.

**Definition.** A strongly inaccessible cardinal κ is an uncountable cardinal that is regular and a strong limit. Regular means that κ is not a union of fewer than κ sets that each have fewer than κ elements. Strong limit means that 2 to the power λ is less than κ for every λ &lt; κ.

**Problem.** If κ is strongly inaccessible, then Vκ, the set of all sets of rank less than κ, is a model of ZFC. So, if ZFC is consistent, it does not prove that an inaccessible cardinal exists.

**How the definition helps.** Excluding ℵ₀ by hand is what makes inaccessible cardinals large. Without the word 'uncountable', ℵ₀ would qualify, since it is regular and a strong limit (our own remark). But Vω, the set of hereditarily finite sets, is a model of ZFC without the axiom of infinity. The step from Vκ to unprovability still needs Gödel's second incompleteness theorem (our own remark).

**Wikipedia:** [Inaccessible cardinal](https://en.wikipedia.org/wiki/Inaccessible_cardinal). It says: “From some perspectives, the requirement that a weakly or strongly inaccessible cardinal be uncountable is unnatural or unnecessary. Even though ℵ₀ is countable, it is regular and is a strong limit cardinal.”

**Sources:**

- [Sierpiński, W. and Tarski, A. (1930). Sur une propriété caractéristique des nombres inaccessibles. Fundamenta Mathematicae 15, 292–300.](https://doi.org/10.4064/fm-15-1-292-300)
- [Zermelo, E. (1930). Über Grenzzahlen und Mengenbereiche. Fundamenta Mathematicae 16, 29–47.](https://doi.org/10.4064/fm-16-1-29-47)

### The compactness definition gives weakly compact cardinals the tree property

**Remember:** Choose a node on each level, then forbid incompatible choices.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** Call an inaccessible cardinal κ weakly compact if the following holds for every theory of κ sentences in L<sub>κ,κ</sub>. If every subtheory of size less than κ has a model, so does the theory. The logic allows conjunctions, disjunctions and quantifier blocks of length less than κ.

**Problem.** Let κ be weakly compact. Every tree of height κ whose levels all have fewer than κ nodes has a branch through every level.

**How the definition helps.** A model can select compatible nodes at every level (our own). Give each node a propositional variable, require a disjunction at each level, and forbid selecting incomparable pairs. Fewer than κ constraints mention boundedly many levels by regularity, so the predecessors of a sufficiently high node satisfy them. Compactness selects a chain meeting every level.

**Wikipedia:** [Weakly compact cardinal](https://en.wikipedia.org/wiki/Weakly_compact_cardinal). It says: “and every subset with less than κ elements has a model, then Σ has a model”

**Sources:** none listed. No primary source with a working link was found.

### The embedding definition makes λ-supercompactness imply μ-supercompactness for smaller μ

**Remember:** The same embedding works for every smaller μ.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** For cardinals κ ≤ λ, call κ λ-supercompact if some elementary embedding j from V into a transitive class M has critical point κ. Require j(κ) &gt; λ and require M to contain every λ-sequence of its elements.

**Problem.** Suppose κ is λ-supercompact and κ ≤ μ ≤ λ. Then κ is μ-supercompact.

**How the definition helps.** The same embedding works because shorter sequences can be recovered from padded ones (our own). Pad any μ-sequence in M’s elements to length λ, then restrict the resulting member of M to μ inside M. The inequality j(κ) &gt; λ also gives j(κ) &gt; μ.

**Paper or page:** [Prikry type forcings and the Bukovský-Dehornoy phenomena](https://arxiv.org/abs/2308.05553v1). It says: “if and only if there is an elementary embedding”

**Sources:**

- [Yair Hayut, Prikry type forcings and the Bukovský-Dehornoy phenomena (arXiv 2023)](https://arxiv.org/abs/2308.05553v1)

### The filter extension definition makes strongly compact cardinals measurable at once

**Remember:** Extend the filter of sets with small complements.

*True by definition.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An uncountable regular cardinal κ is strongly compact if every proper κ-complete filter on any set extends to a κ-complete ultrafilter there. A filter is κ-complete if it contains every intersection of fewer than κ members.

**Problem.** Every strongly compact cardinal κ is measurable. That means κ carries a κ-complete ultrafilter that contains no singleton.

**How the definition helps.** Apply filter extension to the subsets of κ with complements of size less than κ (our own). Regularity makes their filter κ-complete. An extending κ-complete ultrafilter contains the complement of every singleton, so it contains no singleton.

**nLab:** [strongly compact cardinal](https://ncatlab.org/nlab/show/strongly+compact+cardinal). It says: “Strongly compact cardinals are measurable cardinals.”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Weakly compact cardinals must be uncountable to keep ℵ₀ out

**Remember:** Ramsey's theorem makes ℵ₀ look weakly compact, so ℵ₀ is excluded.

*Rules out counterexamples. Confidence: medium.* MSC 03E55 (Large cardinals), 03E02. arXiv math.LO. Level 3: graduate.

**Definition.** A cardinal κ is weakly compact if it is uncountable and has a partition property. The property says: colour each pair of elements of κ with one of two colours. Then some set of size κ has all its pairs of the same colour.

**Problem.** Every weakly compact cardinal is inaccessible. So, if ZFC is consistent, ZFC cannot prove that a weakly compact cardinal exists.

**How the definition helps.** Ramsey’s theorem gives the partition property at ℵ₀, which fails inaccessibility (our own). For uncountable cardinals, the Erdős–Tarski theorem on the partition property gives strong inaccessibility. An inaccessible κ gives a model Vκ of ZFC, so Gödel’s second incompleteness theorem yields the stated unprovability.

**Wikipedia:** [Weakly compact cardinal](https://en.wikipedia.org/wiki/Weakly_compact_cardinal). It says: “a cardinal κ is defined to be weakly compact if it is uncountable”

**Sources:** none listed. No primary source with a working link was found.

### The Banach–Mazur game definition makes determinacy give the Baire property

**Remember:** Test the game in every basic open set.

*True by definition.* MSC 03E60 (Determinacy principles), 54E52, 91A44. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A set A of natural number sequences has the Baire property if the following game is determined from every finite starting string. Players alternately append nonempty finite strings of natural numbers. The first player wins exactly when the resulting infinite sequence belongs to A.

**Problem.** The axiom of determinacy implies that every set of natural number sequences has the Baire property. The axiom says that every infinite game with natural number moves has a winning strategy for one player.

**How the definition helps.** Code each nonempty finite string by a natural number (our own). Determinacy then supplies a winning strategy in every starting position, as the game definition requires. The Banach–Mazur game characterization identifies this condition with differing from an open set by a meager set.

**Wikipedia:** [Banach–Mazur game](https://en.wikipedia.org/wiki/Banach%E2%80%93Mazur_game). It says: “X is comeager in some non-empty open subset”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Proofs without the cut rule contain only parts of their conclusion

**Remember:** A cut-free proof uses nothing that its conclusion does not already contain.

*True by definition.* MSC 03F05 (Cut-elimination and normal-form theorems), 03F07. arXiv math.LO. Level 3: graduate.

**Definition.** A cut-free derivation in Gentzen’s sequent calculus is a proof tree with no use of the cut rule. Cut combines Γ ⊢ Δ,A and A,Π ⊢ Λ to conclude Γ,Π ⊢ Δ,Λ.

**Problem.** In the sequent calculus without cut, the empty sequent ⊢, which stands for a contradiction, has no proof.

**How the definition helps.** In pure cut-free Gentzen calculus, inspection of the last inference rules out the empty sequent (our own). Each initial sequent contains a formula. Each logical or structural rule requires a formula in its conclusion, except exchange, which can only permute existing formulas. Gentzen’s cut-elimination theorem transfers consistency to the calculus with cut.

**nLab:** [subformula property](https://ncatlab.org/nlab/show/subformula+property), [sequent calculus](https://ncatlab.org/nlab/show/sequent+calculus). It says: “while it is not obvious in a cut-full system that the contradiction/empty sequent · ⊢ · is not derivable, it is a corollary of the subformula property that · ⊢ · is not derivable”

**Sources:**

- [Gerhard Gentzen, Untersuchungen über das logische Schließen I, Mathematische Zeitschrift 39 (1935) 176–210](https://doi.org/10.1007/BF01201353)

### Generalized axioms and shared contexts make weakening keep proof height

**Remember:** Add the extra formula everywhere without changing the tree.

*True by definition. Confidence: medium.* MSC 03F07 (Structure of proofs), 03F05. arXiv math.LO. Level 3: graduate.

**Definition.** Use sequents with multiset contexts and initial sequents Γ, A ⇒ A, Δ for every formula A and all contexts Γ and Δ. In each logical rule, copy the side contexts of the conclusion unchanged into every premise.

**Problem.** In this calculus, suppose Γ ⇒ Δ has a proof of height n. Then Γ, C ⇒ Δ has a proof of height at most n.

**How the definition helps.** Induct on proof height, adding C to the left context throughout (our own). Rename eigenvariables first so none occurs free in C. The enlarged leaves remain axioms, and each inference still has the required side contexts. The proof tree keeps its height.

**Wikipedia:** [Sequent calculus](https://en.wikipedia.org/wiki/Sequent_calculus). It says: “Any weakening that appears in a derivation can then be moved to the beginning of the proof.”

**Sources:**

- [Negri and von Plato (2001), Structural Proof Theory, Cambridge University Press](https://doi.org/10.1017/CBO9780511527340)

### Hereditary base notation lets ordinals prove Goodstein's theorem

**Remember:** Replace the base by ω, and every Goodstein sequence goes down.

*Makes the theorem clean to state or prove.* MSC 03F15 (Recursive ordinals and ordinal notations), 03F30, 03E10. arXiv math.LO. Level 3: graduate.

**Definition.** For a base b ≥ 2, expand a natural number in base b and recursively expand each exponent in the same way. Starting at base 2, each Goodstein step replaces every base symbol by the next base and subtracts one from the resulting positive number. Stop at zero.

**Problem.** Every Goodstein sequence reaches zero.

**How the definition helps.** Reading each hereditary expression with ω for its base gives an ordinal unchanged by the base increase (our own). At any fixed base this reading preserves strict order, by comparison at the largest differing exponent, recursively through the exponents. Subtracting one therefore strictly decreases the ordinal. No infinite strictly decreasing sequence of ordinals exists.

**Wikipedia:** [Goodstein's theorem](https://en.wikipedia.org/wiki/Goodstein%27s_theorem). It says: “This notation is very similar to usual base-n positional notation for natural numbers, but the usual notation does not suffice for the purposes of Goodstein's theorem.”

**Sources:**

- [Goodstein, R. L. (1944). On the restricted ordinal theorem. Journal of Symbolic Logic 9, 33–41.](https://doi.org/10.2307/2268019)
- [Kirby, L.; Paris, J. (1982). Accessible independence results for Peano arithmetic. Bulletin of the London Mathematical Society 14, 285–293.](https://doi.org/10.1112/blms/14.4.285)

### Adding congruence predicates gives Presburger arithmetic quantifier elimination

**Remember:** Name the remainders, and the quantifiers disappear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F30 (First-order arithmetic and fragments), 03C10, 03B25. arXiv math.LO. Level 3: graduate.

**Definition.** Presburger arithmetic describes the natural numbers with 0, 1 and addition. Expand its language by the usual order and congruence modulo each integer n ≥ 2. Two numbers are congruent modulo n if n divides their difference.

**Problem.** Presburger arithmetic is decidable and complete.

**How the definition helps.** Presburger’s quantifier-elimination theorem reduces every sentence effectively to a Boolean combination of closed arithmetic tests (our own). Evaluating those tests decides the sentence, and the theory proves the result of each test. The order and congruence predicates are definable using addition, so this applies to the original language.

**Wikipedia:** [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic). It says: “The decidability of Presburger arithmetic can be shown using quantifier elimination, supplemented by reasoning about arithmetical congruence.”

**Sources:** none listed. No primary source with a working link was found.

### Robinson's finite arithmetic Q makes first-order validity undecidable

**Remember:** Seven axioms are enough to make logic itself undecidable.

*True by definition.* MSC 03F30 (First-order arithmetic and fragments), 03D35. arXiv math.LO. Level 3: graduate.

**Definition.** A theory is finitely axiomatizable if a finite list of sentences has exactly its consequences. It is undecidable if no algorithm decides theoremhood for every input sentence.

**Problem.** Church's theorem: no algorithm decides which first-order sentences are valid, that is, true in every structure.

**How the definition helps.** Robinson arithmetic Q is both finitely axiomatizable and undecidable. Conjoin its seven axioms into a sentence θ (our own). By first-order completeness, Q proves φ exactly when θ → φ is valid. Deciding validity would therefore decide Q.

**Wikipedia:** [Robinson arithmetic](https://en.wikipedia.org/wiki/Robinson_arithmetic). It says: “Q is important and interesting because it is a finitely axiomatized fragment of PA that is recursively incompletable and essentially undecidable.”

**Sources:**

- [Church, A. (1936). A note on the Entscheidungsproblem. Journal of Symbolic Logic 1, 40–41.](https://doi.org/10.2307/2269326)

### Gödel's β function codes finite sequences with only addition and multiplication

**Remember:** Two numbers and a remainder can hold any finite list.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03D20. arXiv math.LO. Level 3: graduate.

**Definition.** For natural numbers a, b and i, Gödel’s β(a,b,i) is the unique remainder of a upon division by 1 + (i + 1)b.

**Problem.** Every primitive recursive function, built from simple functions by composition and recursion, is definable in the language of addition and multiplication. This lets Gödel's incompleteness theorem apply to Peano arithmetic without an exponent symbol.

**How the definition helps.** The β lemma codes every finite computation history using two numbers (our own). Remainders are definable by addition, multiplication and a bound on the remainder. One can therefore quantify over a history, test its initial value and each recursive step, and read its last value. Basic functions and composition are already definable, so induction on primitive recursive constructions gives the result.

**Wikipedia:** [Gödel's β function](https://en.wikipedia.org/wiki/G%C3%B6del%27s_%CE%B2_function). It says: “The β function is used, in particular, in showing that the class of arithmetically definable functions is closed under primitive recursion, and therefore includes all primitive recursive functions.”

**Sources:**

- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Three derivability conditions make Gödel's second theorem a few lines

**Remember:** Three rules for 'provable' turn the second incompleteness theorem into algebra.

*True by definition.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F45. arXiv math.LO. Level 3: graduate.

**Definition.** Write □φ for the assertion that T proves φ. The derivability conditions require, for every φ and ψ, that T prove □φ whenever T proves φ. They also require T to prove □(φ → ψ) → (□φ → □ψ) and □φ → □□φ.

**Problem.** A consistent, computably axiomatized extension T of Peano arithmetic cannot prove its own standard consistency statement ¬□⊥.

**How the definition helps.** Löb’s theorem applies to the standard provability predicate by the derivability conditions and the diagonal lemma (our own). If T proved ¬□⊥, it would prove □⊥ → ⊥. Löb’s theorem would then give a proof of ⊥ in T, contrary to consistency.

**Wikipedia:** [Hilbert–Bernays–Löb provability conditions](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Bernays%E2%80%93L%C3%B6b_provability_conditions). It says: “The Hilbert–Bernays–Löb provability conditions, combined with the diagonal lemma, allow proving both of Gödel's incompleteness theorems shortly.”

**Sources:**

- [Löb, M. H. (1955). Solution of a problem of Leon Henkin. Journal of Symbolic Logic 20, 115–118.](https://doi.org/10.2307/2266895)

### Realizers carry witnesses, so Heyting arithmetic has the existence property

**Remember:** A realizer of 'there exists' must name the thing.

*True by definition.* MSC 03F50 (Metamathematics of constructive systems), 03F55, 03F30. arXiv math.LO. Level 3: graduate.

**Definition.** In realizability with truth for Heyting arithmetic, an existential realizer codes a witness n and a realizer of its instance A(n). The truth clause also requires the instance itself to hold (our own variant).

**Problem.** Heyting arithmetic is Peano arithmetic without the law of excluded middle. It has the existence property: if it proves a sentence ∃x A(x), then it proves A(n) for some numeral n.

**How the definition helps.** The formalized soundness theorem for realizability with truth extracts a closed realizer with a provable correctness assertion from an arithmetic proof (our own). For an existential sentence, evaluate its witness component to a numeral n. The truth clause in the correctness assertion yields a proof of A(n) in Heyting arithmetic.

**Wikipedia:** [Realizability](https://en.wikipedia.org/wiki/Realizability), [Disjunction and existence properties](https://en.wikipedia.org/wiki/Disjunction_and_existence_properties). It says: “A pair (n,m) realizes a formula (∃ x)A(x) if and only if m is a realizer for A(n). Thus a realizer for an existential formula produces an explicit witness for the quantifier”

**Sources:**

- [Kleene, S. C. (1945). On the interpretation of intuitionistic number theory. Journal of Symbolic Logic 10, 109–124.](https://doi.org/10.2307/2269016)

### Finiteness by a covering list survives surjections without excluded middle

**Remember:** Run the map on the list and keep the repeats.

*True by definition.* MSC 03F65 (Other constructive mathematics), 03E20. arXiv math.LO. Level 3: graduate.

**Definition.** Call a set finitely indexed if some list of n elements covers it, with repeats allowed. Equivalently, some surjection maps {1, …, n} onto it. The usual definition of finite asks for a bijection with {1, …, n}.

**Problem.** In constructive mathematics, which does not assume excluded middle, a surjective image of a finitely indexed set is finitely indexed. A surjective image of a finite set need not be finite there.

**How the definition helps.** Compose the covering list with the surjection to cover the image (our own). For the second claim, identify 0 and 1 in a two-element set exactly when a proposition p holds. A bijective enumeration of the quotient would decide equality of those two classes and hence decide p. Constructive logic does not decide arbitrary propositions.

**nLab:** [finite set](https://ncatlab.org/nlab/show/finite+set). It says: “that is, it is a quotient set of a finite set.”

**Sources:** none listed. No primary source with a working link was found.

### With Heyting fields, the real numbers form a field constructively

**Remember:** Divide by x when x is apart from 0, not merely nonzero.

*Rules out counterexamples.* MSC 03F65 (Other constructive mathematics), 26E40. arXiv math.LO, math.AC. Level 3: graduate.

**Definition.** A Heyting field is a commutative local ring with 0 ≠ 1 in which every element that lacks an inverse equals zero.

**Problem.** In constructive mathematics, without the law of excluded middle, the located Dedekind real numbers form a Heyting field. They cannot be shown to form a field in the classical sense, nor a discrete field.

**How the definition helps.** A located real has an inverse precisely when its distance from zero exceeds some positive rational (our own). If no such bound exists, the real equals zero. Locatedness also gives locality, since at least one of x and 1 − x has distance from zero exceeding 1/3. Constructively, inequality with zero need not supply a positive distance bound, and a zero-or-invertible test would decide equality with zero.

**nLab:** [Heyting field](https://ncatlab.org/nlab/show/Heyting+field), [field](https://ncatlab.org/nlab/show/field). It says: “This is how 'practising' constructive analysts of the Bishop school usually define the simple word 'field'. An advantage is that the (located Dedekind) real numbers form a Heyting field”

**Sources:**

- [Peter Johnstone, Rings, Fields, and Spectra, Journal of Algebra 49 (1977) 238–260](https://doi.org/10.1016/0021-8693(77)90284-8)
- [Ray Mines, Fred Richman, Wim Ruitenburg, A Course in Constructive Algebra, Springer (1988)](https://doi.org/10.1007/978-1-4419-8640-5)

### Glivenko's theorem follows from the Boolean reflection of a Heyting algebra

**Remember:** Classical logic is intuitionistic logic seen through double negation.

*Makes the theorem clean to state or prove.* MSC 03G05 (Logical aspects of Boolean algebras), 03F55, 03F25. arXiv math.LO. Level 3: graduate.

**Definition.** For a Heyting algebra H, its Boolean reflection consists of elements x satisfying ¬¬x = x. Evaluate each operation there by applying the Heyting operation and then taking double negation. The reflection map sends x to ¬¬x.

**Problem.** Glivenko's theorem: p ⇒ q is a classical propositional tautology if and only if ¬¬p ⇒ ¬¬q is an intuitionistic tautology. More generally, p is a classical tautology if and only if its double negation translation pᴺ is an intuitionistic one.

**How the definition helps.** The reflection of the free Heyting algebra is the free Boolean algebra. The reflection map therefore interprets each classical formula by its double-negation translation (our own). An implication holds classically exactly when the reflected value of its premise lies below the reflected value of its conclusion. That inequality is precisely intuitionistic validity of ¬¬p ⇒ ¬¬q.

**nLab:** [double negation translation](https://ncatlab.org/nlab/show/double+negation+translation). It says: “To say p ⇒ q is a classical tautology means that 1 ≤ (p ⇒ q) holds when interpreted in Bool(S). But since Bool(S) = Heyt(S)\_¬¬, this is equivalent to saying that”

**Sources:** none listed. No primary source with a working link was found.

### A classifying topos defined by its universal model tests geometric sequents

**Remember:** What holds in the generic model holds in every model.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18B25. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A classifying topos for a geometric theory T is a Grothendieck topos S\[T\] with a T-model U satisfying a universal property. For every Grothendieck topos E, pulling back U induces an equivalence between geometric morphisms E → S\[T\] and T-models in E.

**Problem.** A geometric sequent holds in every model of T in every Grothendieck topos exactly when it holds in the universal model.

**How the definition helps.** The universal property makes every model a pullback of one model, so one check suffices (our own). Inverse images keep geometric sequents true, so truth in U passes to every f\*(U) (our own). The converse is immediate, since U is itself a model (our own). The work moves to building the classifying topos from T and proving the universal property (our own).

**nLab:** [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “f\* maps the T-model U to the model X.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Cartesian logic quantifies only over unique witnesses, so images always exist

**Remember:** In cartesian logic, say 'there exists' only when there is at most one.

*Rules out counterexamples.* MSC 03G30 (Categorical logic, topoi), 18C30, 18C10. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A cartesian theory uses sequents built from atomic formulas, truth, finite conjunction and existential quantification with provably unique witnesses whenever they exist. Each occurrence ∃x φ must satisfy the provable sequent φ(x) ∧ φ(y) ⊢ x = y, with the other variables held fixed.

**Problem.** Every cartesian theory has a sound interpretation in any category with finite limits.

**How the definition helps.** Uniqueness makes the projection from the satisfying assignments to their context a monomorphism. Its image is therefore the same subobject. Unrestricted quantification could require the image of a projection that has no image in a category with finite limits. Finite limits interpret the remaining cartesian operations (our own).

**nLab:** [cartesian logic](https://ncatlab.org/nlab/show/cartesian+logic). It says: “the existential quantifier is interpreted as an image factorization, but the subterminality side condition ensures the image exists even in an arbitrary category with finite limits.”

**Sources:**

- [E. Palmgren, S. Vickers, Partial Horn logic and cartesian categories, Annals of Pure and Applied Logic 145 (2007) 314–353](https://doi.org/10.1016/j.apal.2006.10.001)

### Defining classifying toposes by a universal model makes base change a composite

**Remember:** Pulling back twice equals pulling back once along the composite.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18F10. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A classifying topos for a geometric theory T is a Grothendieck topos S\[T\] with a T-model U. For every Grothendieck topos E, pulling back U gives an equivalence between geometric morphisms E → S\[T\] and T-models in E.

**Problem.** Let g from E to S\[T\] classify a model X in E, and let f be a geometric morphism from F to E. Then g∘f classifies the pulled-back model f\*X.

**How the definition helps.** The definition fixes a map by the model that it pulls back, so composite maps pull back by composite pullbacks (our own). In symbols, (g∘f)\*U ≅ f\*(g\*U) ≅ f\*X (our own). The work moves into proving that a concrete construction, sheaves on a category built from the formulas of T, has this universal property (our own).

**nLab:** [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “the classifying topos for the geometric theory T is a Grothendieck topos S\[T\] equipped with a "universal model U of T".”

**Sources:** none listed. No primary source with a working link was found.

### Geometric logic is chosen so that inverse images preserve its formulas

**Remember:** Finite limits and colimits carry geometric logic along.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18B25. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Geometric formulas start with atomic formulas, including equality, and allow finite conjunctions, set-indexed disjunctions and existential quantification. A geometric sequent asserts that one such formula implies another for every assignment to their shared context.

**Problem.** Inverse image along a geometric morphism sends models of a geometric theory to models and keeps geometric sequents true.

**How the definition helps.** Inverse images preserve each operation used to interpret a geometric formula (our own). They preserve finite limits by definition and colimits because they have right adjoints. These constructions give conjunctions, unions and images, the last of which interpret existential quantification. Consequently inverse images preserve the subobject inclusions interpreting sequents and carry models to models.

**nLab:** [geometric morphism](https://ncatlab.org/nlab/show/geometric+morphism), [geometric theory](https://ncatlab.org/nlab/show/geometric+theory). It says: “necessarily preserves all constructions in geometric logic.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Morleyization turns Deligne's theorem into classical completeness

**Remember:** Name every formula and its negation, and the theory becomes coherent.

*Makes the theorem clean to state or prove.* MSC 03G30 (Categorical logic, topoi), 03B10, 18F10. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Classical Morleyization names each formula by a predicate on its free variables and names its complement. Coherent axioms make the two names complementary and enforce the recursive clauses for atoms, conjunction, disjunction and existential quantification. Express the other classical connectives and universal quantification using these operations and complements.

**Problem.** Gödel's completeness theorem: in classical first-order logic, a statement that holds in every model in Set is provable.

**How the definition helps.** Morleyization expresses classical provability and satisfaction through a coherent theory. Deligne’s theorem gives its classifying topos enough points, and those points correspond to models in Set. Hence validity in all such models detects coherent provability. Translating back gives classical completeness.

**nLab:** [coherent logic](https://ncatlab.org/nlab/show/coherent+logic). It says: “It follows that models in Set are sufficient to detect provability in coherent logic. By Morleyization, we can obtain from this the classical completeness theorem for first-order logic.”

**Sources:**

- [M. Makkai, G. E. Reyes, First Order Categorical Logic, Lecture Notes in Mathematics 611, Springer (1977)](https://doi.org/10.1007/BFb0066201)

### Natural numbers as an initial algebra make successor injective and never zero

**Remember:** A bijection from one point plus a copy keeps both parts apart.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Define (ℕ,0,s) as an initial set with a point and a self-map. For each pointed set (X,a) with self-map f, exactly one map h from ℕ to X satisfies h(0) = a and h∘s = f∘h.

**Problem.** In ℕ, zero is not a successor, and the successor map is injective.

**How the definition helps.** Lambek’s lemma makes the structure map from the disjoint union 1 + ℕ to ℕ a bijection (our own). It sends the separate point to zero and acts by successor on the other summand. Injectivity separates zero from every successor and separates successors of distinct numbers.

**nLab:** [initial algebra of an endofunctor](https://ncatlab.org/nlab/show/initial+algebra+of+an+endofunctor). It says: “If F has an initial algebra α: F(X) → X, then X is isomorphic to F(X) via α.”

**Sources:**

- [Joachim Lambek, A fixpoint theorem for complete categories (1968)](https://doi.org/10.1007/bf01110627)

### Defining sets as a terminal coalgebra makes anti-foundation hold

**Remember:** A graph decoration is a map into the terminal coalgebra, so it is unique.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03E65, 18A30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A small-powerset coalgebra assigns each node a small set of children. A map preserves this structure if each image node has exactly the images of the original node’s children as its children. A terminal coalgebra receives exactly one such map from every coalgebra.

**Problem.** In V⁰∞, every graph with a small set of children at each node has exactly one decoration. A decoration assigns sets to nodes so that each assigned set has exactly the sets assigned to the children as members.

**How the definition helps.** A graph is itself a coalgebra, because each node has a set of children. A decoration is then a coalgebra map into V⁰∞, so terminality gives exactly one decoration (our own account of the standard argument). The hard work is to build the terminal coalgebra and to show that its membership relation is extensional. The latest version of the paper notes that this construction needs propositional resizing, an extra axiom.

**Paper or page:** [Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory](https://arxiv.org/abs/2001.06696), [Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory](https://arxiv.org/abs/2001.06696). It says: “The ∈-structure (V⁰∞, ∈), with any ordered pairing structure, satisfies anti-foundation.”

**Sources:**

- [Håkon Robbestad Gylterud, Elisabeth Stenholm and Niccolò Veltri, Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory, arXiv:2001.06696](https://arxiv.org/abs/2001.06696)

### Defining surreals as a higher inductive type makes Conway's equality real equality

**Remember:** Build Conway's equality into the type, and no quotient step remains.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 12J15, 03E10. arXiv math.LO. Level 4: research.

**Definition.** The surreal type NO is generated jointly with its order. Each cut gives a number whenever every left option is strictly less than every right option. An identification constructor equates any x and y satisfying both x ≤ y and y ≤ x.

**Problem.** Suppose z lies strictly between all left and right options of x, but no option of z does. Then x = z in NO.

**How the definition helps.** Conway’s simplicity argument proves the two order inequalities for the indicated cut (our own). The identification constructor then turns those inequalities into equality in NO. This last step uses the identity type directly.

**nLab:** [surreal number](https://ncatlab.org/nlab/show/surreal+number). It says: “In homotopy type theory, the surreal numbers can be defined as a higher inductive type, roughly following Conway's definition but imposing the "defined" notion of equality as the "actual" equality with an identification-constructor.”

**Paper or page:** [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Suppose x and z are surreal numbers defined by cuts, and that the following hold. xᴸ &lt; z &lt; xᴿ for all L and R. … Then x = z.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Groups as pointed connected 1-types let Nielsen–Schreier be stated in HoTT

**Remember:** Model the subgroup by a pointed connected cover of the group’s delooping.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55R35, 20E05. arXiv math.LO, math.AT. Level 4: research.

**Definition.** A delooping of G is a pointed connected type whose path types are sets and whose base-point loop group is isomorphic to G. A subgroup corresponds to a set-valued family over the delooping with connected total space and a chosen lift of the base point.

**Problem.** In homotopy type theory, every finite index subgroup of a free group is free, without the axiom of choice. With the axiom of choice, every subgroup of a free group is free.

**How the definition helps.** For a free group the delooping has a graph presentation, which lifts to a graph presenting the cover (our own). A spanning tree exhibits its loop group as free on the remaining edges. The paper proves the finite-index case constructively and uses choice for the general case.

**Paper or page:** [On the Nielsen-Schreier Theorem in Homotopy Type Theory](https://arxiv.org/abs/2010.01187), [On the Nielsen-Schreier Theorem in Homotopy Type Theory](https://arxiv.org/abs/2010.01187). It says: “We give a formulation of the Nielsen-Schreier theorem (subgroups of free groups are free) in homotopy type theory using the presentation of groups as pointed connected 1-truncated types. We show the special case of finite index subgroups holds constructively”

**Sources:**

- [Andrew W. Swan, On the Nielsen-Schreier Theorem in Homotopy Type Theory, Logical Methods in Computer Science 18(1) (2022), arXiv:2010.01187](https://arxiv.org/abs/2010.01187)

### In homotopy type theory, the epimorphisms are exactly the acyclic maps

**Remember:** Test epimorphisms by precomposition and acyclicity by suspending each fiber.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55P10. arXiv cs.LO, math.AT. Level 4: research.

**Definition.** A map f is an epimorphism if precomposition with f on maps into X is an embedding for every type X. A map is an embedding if each of its fibers is a proposition. A map is acyclic if the suspension of each fiber is contractible.

**Problem.** In homotopy type theory, a map of types is an epimorphism exactly when it is acyclic.

**How the definition helps.** The definition asks for an embedding, not just an injection, so it keeps track of all higher paths. Theorem 2.9 turns this into gluing: glue two copies of B along A, and the folding map back to B must be an equivalence. Fiber by fiber, this gluing is the suspension of the fiber, so the condition is acyclicity (our own reading of the theorem). What stays hard is proving that particular types are acyclic.

**Paper or page:** [Epimorphisms and Acyclic Types in Univalent Foundations](https://arxiv.org/abs/2401.14106v3). It says: “We characterize the epimorphisms in homotopy type theory (HoTT) as the fiberwise acyclic maps and develop a type-theoretic treatment of acyclic maps and types in the context of synthetic homotopy theory as developed in univalent foundations.”

**Sources:**

- [Ulrik Buchholtz, Tom de Jong, Egbert Rijke, Epimorphisms and Acyclic Types in Univalent Foundations, arXiv:2401.14106 (2024)](https://arxiv.org/abs/2401.14106v3)

### Instantiating polymorphic types only with variables makes type checking decidable

**Remember:** Instantiate only with variables, and polymorphism costs nothing for type checking.

*Rules out counterexamples. Confidence: medium.* MSC 03B38 (Type theory), 03B40. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** System F is the polymorphic lambda calculus: a term of type ∀X.A can be used at type A with X replaced by any type. Atomic System F allows the replacement only by type variables, not by compound types.

**Problem.** For unannotated terms in atomic System F, typability coincides with simple typability, and checking against a given type is decidable. Checking unannotated terms against a given type in full System F is undecidable.

**How the definition helps.** Variable-only instantiation survives erasure to simple types (our own). Lemma 4.1 erases quantifiers and identifies type variables, while every simple typing already belongs to the fragment. Theorem 4.2 gives the separate algorithm for checking a specified type. Full System F admits compound instantiations and has undecidable Curry-style type checking.

**Paper or page:** [What's Decidable about (Atomic) Polymorphism](https://arxiv.org/abs/2105.00748v1). It says: “In this paper we investigate System Fat, or atomic System F, a very weak predicative fragment of System F whose typable terms coincide with the simply typable ones. We show that the type-checking problem for Fat is decidable”

**Sources:**

- [Paolo Pistone, Luca Tranchini, What's Decidable about (Atomic) Polymorphism, arXiv:2105.00748 (2021)](https://arxiv.org/abs/2105.00748v1)

### Iterative sets give univalent foundations a universe that is a set

**Remember:** At every node, an embedding indexes the children without repetitions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 03F65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** An iterative set is a well-founded tree whose children at every node form a small family indexed by an embedding into the type of trees. Write V⁰ for the type of these trees and decode each tree as the indexing type of its children.

**Problem.** The type V⁰ of iterative sets is an h-set, a type in which any two proofs of an equality are equal. It forms a category with families that models extensional type theory inside homotopy type theory. The type of all h-sets cannot play this role, since univalence makes it not an h-set.

**How the definition helps.** The embedding condition gives a universe of codes whose identity types are propositions, by Gylterud’s theorem (our own). Decoding a code supplies its type of elements. The paper constructs the category with families and the operations needed for extensional type theory. In the universe of all h-sets, univalence turns distinct automorphisms into distinct self-identifications.

**Paper or page:** [The Category of Iterative Sets in Homotopy Type Theory and Univalent Foundations](https://arxiv.org/abs/2402.04893v1). It says: “This enables us to organize it into a category with families with the structure necessary to model extensional type theory internally in HoTT/UF.”

**Sources:**

- [Daniel Gratzer, Håkon Gylterud, Anders Mörtberg, Elisabeth Stenholm, The Category of Iterative Sets in Homotopy Type Theory and Univalent Foundations, Math. Struct. Comp. Sci. 34 (2024) 945–970, arXiv:2402.04893](https://arxiv.org/abs/2402.04893v1)

### Local universes make type formers commute strictly with substitution

**Remember:** Form the general type once and change only its parameters.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A local universe type over Γ consists of a context Δ, a type A over Δ and a map f from Γ to Δ. Substitution along g replaces f by f∘g and keeps Δ and A.

**Problem.** Under the hypotheses of the Lumsdaine–Warren coherence theorem, the lifted type formers, including dependent products when present, commute strictly with substitution.

**How the definition helps.** A lifted type former acts on universal parameters, so substitution only changes their classifying map (our own). Associativity of composition gives strict agreement after substitution. The Lumsdaine–Warren coherence theorem constructs the lifts under its hypotheses on the original model.

**nLab:** [categorical semantics of dependent type theory](https://ncatlab.org/nlab/show/categorical+semantics+of+dependent+type+theory). It says: “Type-theoretically, we can regard (f,A) as a type A with a "delayed substitution" f. This produces a split fibration (the chosen cartesian arrows are given by composition of morphisms in C), and it was proven by Lumsdaine &amp; Warren (2015) that essentially all type formers can be extended to it from E.”

**Sources:**

- [Lumsdaine and Warren (2015), The Local Universes Model](https://doi.org/10.1145/2754931)

### Observational type theory defines equality separately for each type

**Remember:** Equality is whatever you can observe, and you observe a function by applying it.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Observational type theory defines equality recursively on types. At a function type, equality compares outputs on equal inputs using the equality of the output type. In its specified universe of propositions, equality compares propositions by mutual implication.

**Problem.** In observational type theory, function extensionality holds without extra axioms, and so does propositional extensionality for a specified universe of propositions. Function extensionality says that functions with equal values are equal.

**How the definition helps.** The function clause turns pointwise equality into function equality, using transport along input equalities (our own). In the specified universe, maps in both directions give equality of propositions by the proposition clause.

**nLab:** [observational type theory](https://ncatlab.org/nlab/show/observational+type+theory). It says: “Since equality is defined type-by-type, OTT enjoys function extensionality, and a form of propositional extensionality at least for a specified universe of propositions”

**Sources:**

- [Thorsten Altenkirch, Conor McBride, Wouter Swierstra, Observational Equality, Now!, PLPV 2007, 57–68](https://doi.org/10.1145/1292597.1292608)

### On a univalent category, a representable presheaf map has unique representations

**Remember:** In a univalent category, existence of representations gives unique representations.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18N45, 18F20. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A category is univalent if, for every pair of objects, the canonical map from their identity type to their isomorphisms is an equivalence.

**Problem.** If a category 𝒞 is univalent, the forgetful map from CwF structures to representable maps of presheaves on 𝒞 is an equivalence. So every representable map carries a unique choice of context extensions.

**How the definition helps.** For each required context extension, the representing object with its universal data is unique up to unique compatible isomorphism (our own). Univalence turns this into contractibility of the type of representing data whenever it is inhabited. Representability therefore supplies a unique choice at each context and type, giving the inverse to forgetting the choices.

**Paper or page:** [Categorical structures for type theory in univalent foundations](https://arxiv.org/abs/1705.04310). It says: “If 𝒞 is a univalent category, then the forgetful map from CwF structures to representable maps of presheaves on 𝒞 is an equivalence. That is, any representable map of presheaves on 𝒞 carries a unique choice of representing data.”

**Sources:**

- [Benedikt Ahrens, Peter LeFanu Lumsdaine and Vladimir Voevodsky, Categorical structures for type theory in univalent foundations, Logical Methods in Computer Science 14(3) (2018), arXiv:1705.04310](https://arxiv.org/abs/1705.04310)

### Pointed maps into a homogeneous type are equal when their functions are

**Remember:** Move the base point to each point by a chosen self-equivalence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55Q05. arXiv math.AT, math.LO. Level 4: research.

**Definition.** A pointed type B with base point b₀ is homogeneous if it comes with a family of self-equivalences eᵦ indexed by b ∈ B. Each eᵦ comes with a path from eᵦ(b₀) to b.

**Problem.** Let B be homogeneous and let f, g : A → B be pointed maps. If f = g as plain functions, then f = g as pointed maps.

**How the definition helps.** The chosen equivalences let a homotopy between the functions be adjusted to respect the pointing (our own). Cavallo’s lemma gives this adjustment for every homogeneous target. The adjusted homotopy gives equality of the pointed maps.

**Paper or page:** [Symmetric Monoidal Smash Products in Homotopy Type Theory](https://arxiv.org/abs/2402.03523), [Computational Synthetic Cohomology Theory in Homotopy Type Theory](https://arxiv.org/abs/2401.16336). It says: “Let f ,g : A →⋆ B and let B be homogeneous. If f = g as plain functions, then f = g as pointed functions.”

**Sources:**

- [Axel Ljungström, Symmetric Monoidal Smash Products in Homotopy Type Theory, Math. Struct. Comp. Sci. (2024), arXiv:2402.03523](https://doi.org/10.1017/s0960129524000318)
- [Axel Ljungström, Anders Mörtberg, Computational Synthetic Cohomology Theory in Homotopy Type Theory, Math. Struct. Comp. Sci. 35 (2025) e16, arXiv:2401.16336](https://doi.org/10.1017/s0960129525000131)

### Set-theoretic and type-theoretic ordinals coincide, and univalence makes them equal

**Remember:** Two definitions of ordinal, one isomorphism, and univalence makes them one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 03E10. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** A type-theoretic ordinal is a set with a proposition-valued, transitive, extensional and well-founded relation. A set-theoretic ordinal is a transitive set of transitive sets in the cumulative hierarchy V, ordered by membership.

**Problem.** The type Ord of type-theoretic ordinals and the type 𝕍ᵒʳᵈ of set-theoretic ordinals are isomorphic as type-theoretic ordinals. So, by univalence, they are equal.

**How the definition helps.** The ordinal comparison theorem supplies an order isomorphism between the two types of ordinals. Structure identity for ordinals then turns that isomorphism into an equality by univalence (our own). The comparison must establish that every set-theoretic ordinal occurs as an image, as well as identify the two orders.

**Paper or page:** [Set-Theoretic and Type-Theoretic Ordinals Coincide](https://arxiv.org/abs/2301.10696v3). It says: “The ordinals Ord and 𝕍ᵒʳᵈ are isomorphic (as type-theoretic ordinals). Hence, by univalence, they are equal.”

**Sources:**

- [Tom de Jong, Nicolai Kraus, Fredrik Nordvall Forsberg, Chuangjie Xu, Set-Theoretic and Type-Theoretic Ordinals Coincide, LICS 2023, arXiv:2301.10696](https://doi.org/10.1109/LICS56636.2023.10175762)

### Two-level type theory adds strict equality to define semisimplicial types

**Remember:** Use strict face identities to index fibrant families of simplices by their boundaries.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 18N40. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A strict n-truncated semisimplicial diagram assigns types to dimensions 0 through n and face maps dᵢ between consecutive dimensions. The maps satisfy dᵢ∘dⱼ = dⱼ₋₁∘dᵢ for i &lt; j wherever both composites exist, using outer strict equality. In the fibrant-family presentation, higher simplices are fibrant types indexed by their compatible boundaries.

**Problem.** In two-level type theory with two natural numbers types, there is a fibrant type of n-truncated semisimplicial types for each n. A semisimplicial type is the type version of a semisimplicial set, a simplicial set without degeneracy maps.

**How the definition helps.** Outer equality expresses boundary compatibility without an infinite list of higher coherences (our own). The finite-stage construction extends the previous data by fibrant families over those boundaries. The two-level construction proves fibrancy of the resulting type at each finite stage.

**nLab:** [two-level type theory](https://ncatlab.org/nlab/show/two-level+type+theory). It says: “Two-level type theories (including HTS and ACK) were motivated to a large extent by the technical difficulties encountered in formalizing semisimplicial types in default homotopy type theory (HoTT).”

**Sources:**

- [Danil Annenkov, Paolo Capriotti, Nicolai Kraus, Christian Sattler, Two-Level Type Theory and Applications, Mathematical Structures in Computer Science (2023); arXiv:1705.03307](https://arxiv.org/abs/1705.03307)

### Weakly constant endomaps give the generalized Hedberg theorem

**Remember:** Weakly constant means all values are equal, not that one value exists.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory), 03F65. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A function f from A to B is weakly constant if f(x) = f(y) for all x and y in A.

**Problem.** A type A has a map from its propositional truncation ‖A‖ to A exactly when it admits a weakly constant endomap. Consequently A is a set exactly when every identity type of A admits such an endomap. In particular, every type with decidable equality is a set.

**How the definition helps.** The fixed-point lemma identifies the fixed-point type of a weakly constant endomap with ‖A‖ (our own). Projection gives the required map, and conversely a map from ‖A‖ gives a weakly constant endomap by composition with truncation. Applied to identity types, the fixed-point lemma gives the generalized Hedberg theorem. Decidable equality supplies the required endomaps by returning the chosen path whenever one exists.

**nLab:** [weakly constant function](https://ncatlab.org/nlab/show/weakly+constant+function), [Hedberg's theorem](https://ncatlab.org/nlab/show/Hedberg%27s+theorem), [split support](https://ncatlab.org/nlab/show/split+support). It says: “A type A has split support if and only if it admits a weakly constant endomap f:A→A.”

**Sources:**

- [Nicolai Kraus, Martín Escardó, Thierry Coquand, Thorsten Altenkirch, Generalizations of Hedberg's theorem, TLCA 2013, Lecture Notes in Computer Science 7941](https://doi.org/10.1007/978-3-642-38946-7_14)
- [Nicolai Kraus, Martín Escardó, Thierry Coquand, Thorsten Altenkirch, Notions of anonymous existence in Martin-Löf type theory, Logical Methods in Computer Science 13 (2017), arXiv:1610.03346](https://arxiv.org/abs/1610.03346)

### With univalence, Aczel's W-type with its identity type models multisets

**Remember:** Equal index types count multiplicities, so the identity type gives multisets.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03F50. arXiv math.LO. Level 4: research.

**Definition.** A multiset tree sup(A,f) has a small type A of occurrences and a subtree f(a) at each occurrence a. These well-founded trees form Aczel’s W-type, with equality given by its identity type. Membership z ∈ sup(A,f) is the type of pairs (a,p) with a ∈ A and p an identification of f(a) with z.

**Problem.** With univalence, Aczel's W-type with its identity type is a model of multisets. In particular, two multisets x and y are equal exactly when, for every z, the types z ∈ x and z ∈ y are equivalent.

**How the definition helps.** Univalence identifies tree equality with an equivalence of occurrence types matching their subtrees (our own). Such an equivalence restricts to equivalences of the occurrence fibers at every z. Conversely, summing those fiber equivalences reconstructs the matching equivalence of occurrence types. The model construction verifies the remaining multiset axioms.

**Paper or page:** [Multisets in Type Theory](https://arxiv.org/abs/1610.08027), [Multisets in Type Theory](https://arxiv.org/abs/1610.08027). It says: “Our investigation takes this W-type and instead considers the identity type on it, which can be computed from the Univalence Axiom. Our thesis is that this gives a model of multisets.”

**Sources:**

- [Håkon Robbestad Gylterud, Multisets in Type Theory, arXiv:1610.08027 (2016)](https://arxiv.org/abs/1610.08027)

### Explicit substitutions without a composition rule keep strong normalization

**Remember:** Finish the inner substitution before you touch the outer one.

*Rules out counterexamples.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** An explicit substitution M⟨x≔N⟩ records a pending replacement of free occurrences of x in M by N. The Bloo–Rose calculus propagates substitutions through term constructors without a rule for composing nested substitutions.

**Problem.** In the Bloo–Rose calculus, every ordinary λ-term that is strongly normalizing remains strongly normalizing under explicit substitution. In particular, every reduction sequence from a simply typed λ-term is finite.

**How the definition helps.** Omitting composition excludes the interacting substitutions used in Melliès’s typed counterexample (our own). Bloo and Rose prove preservation of strong normalization for their particular reduction rules. Simply typed terms satisfy the ordinary normalization hypothesis.

**nLab:** [explicit substitution](https://ncatlab.org/nlab/show/explicit+substitution). It says: “such a rule is undesirable because it destroys the strong normalization property of the reduction system”

**Sources:**

- [M. Abadi, L. Cardelli, P.-L. Curien, J.-J. Lévy, Explicit substitutions, J. Funct. Program. 1 (1991) 375–416](https://doi.org/10.1017/S0956796800000186)
- [P.-A. Melliès, Typed λ-calculi with explicit substitutions may not terminate, Typed Lambda Calculi and Applications (TLCA 1995), Lecture Notes in Computer Science 902 (1995) 328–334](https://doi.org/10.1007/bfb0014062)
- [Roel Bloo, Kristoffer H. Rose, Preservation of strong normalisation in named lambda calculi with explicit substitution and garbage collection, CSN-95: Computer Science in the Netherlands (1995)](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.51.5026) (link not checked)

### Strongly scoped syntax makes substitution avoid variable capture automatically

**Remember:** Every term declares its free variables, and binders must use other names.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus), 03B38. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A strongly scoped term has an index V containing every variable that may occur free in it. A binder in context V introduces names X disjoint from V, and its body has context V ∪ X.

**Problem.** In strongly scoped syntax, the substitution M\[N/x\] never captures a free variable of N under a binder of M.

**How the definition helps.** Under substitution, each binder must be fresh for the output context, which contains the replacement’s free names (our own). Rename a conflicting binder and its bound occurrences before descending into its body. The disjointness condition then prevents the binder from capturing any free occurrence in the replacement.

**nLab:** [Initiality Project - Raw Syntax](https://ncatlab.org/nlab/show/Initiality+Project+-+Raw+Syntax). It says: “Note that substitution is automatically "capture-avoiding" because of our "strong scoping" and local Barendregt convention.”

**Sources:**

- [Robert Harper, Practical Foundations for Programming Languages, 2nd ed., Cambridge University Press, 2016](https://doi.org/10.1017/CBO9781316576892)

### An opremum detects modal irreducibility

**Remember:** One element lies in every nontrivial filter closed under the modal operation.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)), 08B26. arXiv math.LO. Level 4: research.

**Definition.** In a modal algebra, an opremum is an element c &lt; 1 satisfying the following condition. For every a &lt; 1 there is a natural number n such that a ∧ □a ∧ ⋯ ∧ □ⁿa ≤ c.

**Problem.** A modal algebra is subdirectly irreducible exactly when it has an opremum. Subdirect irreducibility means there is a least congruence strictly larger than equality.

**How the definition helps.** The displayed inequality says exactly that c belongs to the modal filter generated by a (our own). Thus the filter generated by c is the least filter strictly above {1}. Conversely, any c &lt; 1 in such a least filter meets the definition. The congruence–filter correspondence identifies existence of that least filter with subdirect irreducibility.

**Paper or page:** [Stable Canonical Rules and Formulas for Pre-transitive Logics via Definable Filtration](https://arxiv.org/abs/2510.22638v1). It says: “A modal algebra A is s.i. iff A has an opremum”

**Sources:**

- [Tenyo Takahashi, Stable Canonical Rules and Formulas for Pre-transitive Logics via Definable Filtration, Proposition 2.1](https://arxiv.org/abs/2510.22638v1)

### In hybrid logic every pure axiom is complete for its frames

**Remember:** Name the worlds, and every pure axiom proves exactly its frames.

*Makes the theorem clean to state or prove.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv cs.LO, math.LO. Level 4: research.

**Definition.** In hybrid logic, each nominal names exactly one world, @ᵢ evaluates at world i, and ↓x binds x to the current world. A pure sentence has no free state variables and contains no ordinary propositional variables.

**Problem.** The basic hybrid calculus with @ and ↓ plus any set Σ of pure sentences is sound and strongly complete for the frames satisfying Σ.

**How the definition helps.** Pure sentences impose frame conditions independently of valuations of ordinary propositional variables (our own). The pure completeness theorem builds a named model for each consistent set of assumptions. Its frame validates the pure axioms because the construction enforces their instances under renaming.

**Paper or page:** [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder](https://arxiv.org/abs/2207.01288v1), [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder](https://arxiv.org/abs/2207.01288v1). It says: “For any set Σ of pure ℒ(@,↓)-sentences, 𝐊ℋ(@,↓) + Σ is sound and strongly complete with respect to the class of frames defined by Σ.”

**Sources:**

- [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder, arXiv:2207.01288 (2022)](https://arxiv.org/abs/2207.01288v1)
- [Patrick Blackburn, Balder ten Cate, Pure Extensions, Proof Rules, and Hybrid Axiomatics, Studia Logica (2006)](https://doi.org/10.1007/s11225-006-9009-6)

### In the antithesis interpretation, one affine statement gives both constructive versions

**Remember:** Every statement carries its own way to be refuted, and affine logic tracks both.

*Makes the theorem clean to state or prove.* MSC 03B47 (Substructural logics (including relevance, entailment, linear logic, Lambek calculus, BCK and BCI logics)), 03F25, 03F65. arXiv math.LO. Level 4: research.

**Definition.** An affine proposition is a pair (P⁺,P⁻) of intuitionistic propositions with P⁺ ∧ P⁻ implying false. An entailment from P to Q requires a forward implication P⁺ → Q⁺ and a backward implication Q⁻ → P⁻. Linear negation exchanges the two components.

**Problem.** The antithesis interpretation is sound: if Pᴸ ⊢ Qᴸ in affine logic, then P⁺ ⊢ Q⁺ and Q⁻ ⊢ P⁻ in intuitionistic logic.

**How the definition helps.** The order on pairs gives the two directions of every interpreted entailment (our own). The soundness theorem for the antithesis interpretation verifies that each affine inference preserves this order. Reading the two components of a derivable entailment gives the claimed intuitionistic sequents.

**nLab:** [antithesis interpretation](https://ncatlab.org/nlab/show/antithesis+interpretation). It says: “The point of the antithesis interpretation is that the pair (P⁺, P⁻) may be derived systematically from a single statement Pᴸ in affine logic.”

**Sources:**

- [M. Shulman, Affine logic for constructive mathematics, Bull. Symb. Logic 28 (2022) 327–386, arXiv:1805.07518](https://arxiv.org/abs/1805.07518)

### Kripke's partial truth predicate lets a language talk about its own truth

**Remember:** Give the liar no truth value, and a language can discuss its own truth.

*Rules out counterexamples. Confidence: medium.* MSC 03B60 (Other nonclassical logic), 03B50, 03A05. arXiv math.LO. Level 4: research.

**Definition.** A partial interpretation of truth consists of disjoint sets of sentence codes T and F. A truth assertion about a sentence is true for codes in T, false for codes in F, and undefined otherwise. Kripke’s jump evaluates sentences using these assignments and the strong Kleene rules to produce the next pair.

**Problem.** Kripke's monotone construction reaches a least fixed point. This gives a language a consistent partial truth predicate for its own sentences, in which the liar has no truth value.

**How the definition helps.** The liar cannot consistently receive either classical value, and strong Kleene evaluation leaves it undefined (our own). Start with both sets empty, iterate the monotone jump, and take unions at limit stages. Each strict increase assigns a previously unassigned sentence a value, so the sequence must stabilize. Monotonicity keeps every stage below every fixed point, proving leastness.

**Wikipedia:** [Semantic theory of truth](https://en.wikipedia.org/wiki/Semantic_theory_of_truth). It says: “Based on partial logic (a logic of partially defined truth predicates instead of Tarski's logic of totally defined truth predicates), Kripke allows a language to contain its own truth predicate”

**Sources:**

- [Kripke, S. (1975). Outline of a theory of truth. Journal of Philosophy 72, 690–716.](https://doi.org/10.2307/2024634)

### Coalgebras of the pebbling comonad are tree decompositions

**Remember:** Tree-width at most k − 1 means having a coalgebra for k pebbles.

*Makes the theorem clean to state or prove.* MSC 03C13 (Model theory of finite structures), 18C15, 68Q19. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** A k-pebble play is a nonempty finite sequence of moves, each assigning one of k pebbles to an element of A. A coalgebra is a homomorphism α from A into its play structure ℙₖA satisfying ε∘α = id and δ∘α = ℙₖα∘α. Here ε returns the final element, and δ replaces each played element by the prefix ending there, keeping its pebble label.

**Problem.** A relational structure A has a coalgebra A → ℙₖA if and only if its tree-width is at most k − 1.

**How the definition helps.** The counit makes each assigned play end at its element, and coassociativity makes its prefixes agree with earlier assignments (our own). The pebbling coalgebra theorem identifies these assignments with pebble forest covers and proves their existence exactly at tree-width below k. The equivalence concerns existence on each side.

**Paper or page:** [Lovász-Type Theorems and Game Comonads](https://arxiv.org/abs/2105.03274v1), [An invitation to game comonads](https://arxiv.org/abs/2407.00606v1), [The Pebble-Relation Comonad in Finite Model Theory](https://arxiv.org/abs/2110.08196v6). It says: “A σ-structure A admits a coalgebra structure α : A → ℙₖ(A) if, and only if, it has tree-width at most k−1.”

**Sources:**

- [Samson Abramsky, Anuj Dawar, Pengming Wang, The pebbling comonad in Finite Model Theory, LICS 2017](https://doi.org/10.1109/LICS.2017.8005129)
- [Anuj Dawar, Tomáš Jakl, Luca Reggio, Lovász-Type Theorems and Game Comonads, LICS 2021, arXiv:2105.03274](https://doi.org/10.1109/LICS52264.2021.9470609)
- [Samson Abramsky, Luca Reggio, An invitation to game comonads, arXiv:2407.00606 (2024)](https://arxiv.org/abs/2407.00606v1)
- [Yoàv Montacute, Nihil Shah, The Pebble-Relation Comonad in Finite Model Theory, Logical Methods in Computer Science 20(2) (2024), arXiv:2110.08196](https://arxiv.org/abs/2110.08196v6)

### Beth definability for an infinitary logic gives Stone–Weierstrass

**Remember:** Implicit definitions become explicit, and separating sublattices become dense.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C40 (Interpolation, preservation, definability), 08A65, 46E05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** Term Beth definability means that every implicitly defined operation agrees with a term in its input variables wherever the defining theory holds. Implicit definition requires that any two outputs satisfying the theory for the same inputs coincide.

**Problem.** Let G be a family of continuous real functions on a compact Hausdorff space X that contains the constant function 1 and separates points. If G is closed under real scalar multiples, sums and maxima, it is uniformly dense in the continuous real functions on X. This follows from Beth definability for the equational logic of Δ.

**How the definition helps.** The paper identifies Beth definability for its infinitary logic with surjectivity of epimorphisms in Δ. Its algebraic form of Stone–Weierstrass converts that surjectivity into uniform density of the separating function lattice. The translation between the two statements uses the paper’s representation of these algebras (our own).

**Paper or page:** [Beth definability and the Stone-Weierstrass Theorem](https://arxiv.org/abs/2007.05281). It says: “We introduce an equational logic ⊨Δ associated with an infinitary variety Δ and show that the Stone-Weierstrass Theorem is a consequence of the Beth definability property of ⊨Δ, stating that every implicit definition can be made explicit.”

**Sources:**

- [Luca Reggio, Beth definability and the Stone-Weierstrass Theorem, arXiv:2007.05281 (2021)](https://arxiv.org/abs/2007.05281)

### Defining pseudofinite groups by finite-group sentences makes definable injections surjective

**Remember:** A first-order counting rule true in all finite groups holds here too.

*True by definition. Confidence: medium.* MSC 03C60 (Model-theoretic algebra), 20A15, 03C13. arXiv math.LO. Level 4: research.

**Definition.** A group is pseudofinite if it is infinite and satisfies every first-order sentence that is true in all finite groups. Another definition asks for an infinite group with the same first-order sentences as an ultraproduct of finite groups.

**Problem.** In a pseudofinite group, every injective map from the group to itself that a formula defines, even with parameters, is surjective.

**How the definition helps.** Each formula gives one first-order sentence to which pseudofiniteness applies (our own). Quantify over every parameter tuple and assert that whenever the formula defines a total injective self-map, it defines a surjective one. Every finite group satisfies this sentence by counting. The pseudofinite group therefore satisfies it too.

**Paper or page:** [A note on pseudofinite groups of finite centraliser dimension](https://arxiv.org/abs/2106.05698v1). It says: “Let G ≡ ∏ᵢ∈I Gᵢ/U be a pseudofinite group with cd(G) = k.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded phase gives definable volumes

**Remember:** A bounded phase needs only a restricted sine.

*Makes the theorem clean to state or prove.* MSC 03C64 (Model theory of ordered structures; o-minimality), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Consider the integral of exp(−f)ω over a closed set G in ℂⁿ cut out by real polynomial conditions over ℚ, oriented on its smooth part. Here f and ω are rational over ℚ and regular on G, and the degree of ω is the real dimension of G. Say the phase is bounded if f has compact preimages of compact sets on G, bounded imaginary part, and real part bounded below.

**Problem.** With bounded phase, the real and imaginary parts of each such integral are, up to sign, volumes of compact sets. These sets are defined without extra real constants, using the ordered field operations, the exponential, and sine on \[0, 1\].

**How the definition helps.** A bounded imaginary part lets restricted sine describe the oscillation of the exponential weight. In our own explanation, angle addition expresses sine and cosine on any fixed bounded interval using sine on \[0,1\]. The volume theorem turns the resulting signed integrals into volumes of compact sets.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “Permitting the integrand Q to be the product of an algebraic function and the exponential of an algebraic function”

**Sources:**

- [Commelin, Habegger and Huber, Exponential periods and o-minimality](https://aif.centre-mersenne.org/articles/10.5802/aif.3801/)

### The geometric theory of natural numbers has only the standard model

**Remember:** An infinite 'or' says each number is 0 followed by finitely many successors.

*Rules out counterexamples. Confidence: medium.* MSC 03C75 (Other infinitary logic), 03G30, 03C35. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The standard successor theory has a sort N, a constant 0 and an injective successor s whose image omits 0. Its geometric covering axiom says that each element equals sⁿ(0) for some external natural number n, using a disjunction over all n.

**Problem.** Set classifies the standard successor theory. Every Grothendieck topos therefore has a unique model up to isomorphism, its natural numbers object, and the theory has no proper consistent quotient.

**How the definition helps.** The covering axiom rules out elements beyond the numerals. Injectivity and omission of zero make distinct numeral subobjects disjoint, so the model is the coproduct of one terminal object per numeral (our own). This construction is preserved by inverse images and has only the identity endomorphism, giving classification by Set. Its only proper subtopos is degenerate.

**nLab:** [geometric theory](https://ncatlab.org/nlab/show/geometric+theory). It says: “The classifying topos is Set. But due to the trivial subtopos lattice, theories classified by Set admit no consistent quotient theories; thus the geometric theory of natural numbers is complete!”

**Sources:**

- [Steven Vickers, Locales and Toposes as Spaces, in Handbook of Spatial Logics, Springer (2007) 429–496](https://doi.org/10.1007/978-1-4020-5587-4_8)

### Fullness is exactly what Łoś's theorem needs in Boolean-valued models

**Remember:** Finitely many witnesses cover the existential value, so each ultrafilter picks one.

*True by definition. Confidence: medium.* MSC 03C90 (Nonclassical models (Boolean-valued, sheaf, etc.)), 03E40. arXiv math.LO. Level 4: research.

**Definition.** A Boolean-valued model is full if finitely many instances attain each existential value jointly. For every formula φ(x) with parameters, the join of their values must equal ‖∃x φ(x)‖.

**Problem.** A Boolean-valued model satisfies Łoś's theorem exactly when it is full. Łoś's theorem says that, for each ultrafilter G on B, the quotient by G satisfies φ(\[a\]) exactly when the value of φ(a) is in G.

**How the definition helps.** An ultrafilter containing a finite join contains one of its terms, giving a witness in the quotient (our own). Induction handles the Boolean connectives by the ultrafilter laws. Conversely, if no finite join suffices, the existential value and the complements of all instance values have the finite intersection property. An ultrafilter extending them violates the existential clause of Łoś’s theorem.

**Paper or page:** [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852). It says: “We also give an exact topological characterization (the so called fullness property) of which boolean valued models satisfy Loś Theorem”

**Sources:**

- [Moreno Pierobon and Matteo Viale, Boolean valued models, presheaves, and étalé spaces, arXiv:2006.14852 (2023)](https://arxiv.org/abs/2006.14852)

### Mixing supplies existential witnesses

**Remember:** Refine the join into disjoint pieces, then mix the witnesses.

*Rules out counterexamples.* MSC 03C90 (Nonclassical models (Boolean-valued, sheaf, etc.)), 06E10. arXiv math.LO. Level 4: research.

**Definition.** Mixing in a Boolean-valued model requires a simultaneous choice for every family of elements aᵢ indexed by pairwise disjoint nonzero Boolean values bᵢ. Some element a must satisfy bᵢ ≤ ‖a = aᵢ‖ for every i.

**Problem.** In a Boolean-valued model with mixing, every existential truth value equals the value given by some single witness.

**How the definition helps.** Choose maximal disjoint nonzero pieces, each below some witness value (our own). Their join is the existential value, since any uncovered part would meet another witness value. Mixing their witnesses produces an element whose formula value covers every piece and hence attains the join. Without mixing, a predicate on two ordinarily distinct elements can take complementary nonzero values, neither attaining their join.

**Paper or page:** [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852v5). It says: “Assume that ℳ satisfies the κ-mixing property for some κ ≥ min {\|𝖡\|, \|M\|}. Then ℳ is full.”

**Sources:**

- [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852v5)

### Effective discontinuity gives the Weihrauch lattice a weakest discontinuous problem

**Remember:** Continuously turn each candidate realizer’s code into an input where it fails.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D30 (Other degrees and reducibilities in computability and recursion theory), 03D78. arXiv math.LO. Level 4: research.

**Definition.** Fix a universal evaluator U for partial continuous functions on Baire space. A problem is effectively discontinuous if a continuous function sends every code p to a valid input name where U(p) fails as a realizer. Failure means divergence or failure to name an allowed output.

**Problem.** Under continuous Weihrauch reducibility, the discontinuity problem reduces to a problem exactly when that problem is effectively discontinuous. In ZF with dependent choice and determinacy, the discontinuity problem is therefore the weakest discontinuous problem.

**How the definition helps.** The uniform counterexample function is exactly what the paper’s reduction characterization extracts from a continuous Weihrauch reduction (our own). Its game determinacy theorem supplies such a function for every discontinuous problem under the stated axioms. Together the two theorems give the least discontinuous degree.

**Paper or page:** [The Discontinuity Problem](https://arxiv.org/abs/2012.02143). It says: “We introduce the discontinuity problem, and we show that it is reducible exactly to the effectively discontinuous problems, defined in a suitable way.”

**Sources:**

- [Vasco Brattka, The Discontinuity Problem, Journal of Symbolic Logic 88(3) (2023) 1191–1212, arXiv:2012.02143](https://arxiv.org/abs/2012.02143)

### Church's thesis as an axiom gives synthetic proofs of Tennenbaum's theorem

**Remember:** When every function is computable, "computable" needs no coding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D75 (Abstract and axiomatic computability and recursion theory), 03B38, 03C62. arXiv math.LO. Level 4: research.

**Definition.** The paper’s Church thesis requires a representing arithmetic formula for every function from ℕ to ℕ. For each input numeral, Peano arithmetic proves that the formula holds of exactly the numeral for its output.

**Problem.** Assume Church's thesis and Markov's principle. Then a model of Peano arithmetic with decidable equality, whose elements some function can list, is the standard model. This is a synthetic form of Tennenbaum's theorem.

**How the definition helps.** The thesis replaces external computability conditions by internal functions on natural numbers (our own). An enumeration and decidable equality let the model’s operations be tracked on natural numbers. The paper’s constructive Tennenbaum theorem uses this representation with Markov’s principle to obtain standardness.

**Paper or page:** [An Analysis of Tennenbaum's Theorem in Constructive Type Theory](https://arxiv.org/abs/2302.14699). It says: “assuming a version of Church's thesis, which expresses that any function on natural numbers is representable by a formula in PA. This assumption provides for a conveniently abstract setup to carry out rigorous computability arguments”

**Sources:**

- [Marc Hermes and Dominik Kirst, An Analysis of Tennenbaum's Theorem in Constructive Type Theory, Logical Methods in Computer Science 20(1) (2024), arXiv:2302.14699](https://arxiv.org/abs/2302.14699)

### The relativized notion of computable type is the better behaved one

**Remember:** Ask for computable type relative to every oracle, and topology takes over.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D78 (Computation over the reals, computable analysis), 54C56. arXiv math.LO, math.GN. Level 4: research.

**Definition.** A compact metrizable space X has strong computable type if every homeomorphic copy K in the Hilbert cube satisfies the following condition. For every oracle A enumerating all finite rational open covers of K, A can also enumerate all basic open balls meeting K.

**Problem.** A compact space that is minimal with nonzero Čech cohomology in degree n has strong computable type.

**How the definition helps.** The paper gives a criterion using a Σ⁰₂ invariant of compact sets (our own account). If X has the invariant and no proper compact subset has it, the criterion gives strong computable type. Its cohomology criterion applies this argument to nonvanishing Čech cohomology in the stated degree.

**Paper or page:** [Strong computable type](https://arxiv.org/abs/2210.08309). It says: “We argue that the stronger, relativized version of computable type, is better behaved and prone to topological analysis. We obtain characterizations of strong computable type, related to the descriptive complexity of topological invariants, as well as purely topological criteria.”

**Sources:**

- [Djamel Eddine Amir and Mathieu Hoyrup, Strong computable type, arXiv:2210.08309 (2023)](https://arxiv.org/abs/2210.08309)

### The elementary substructure test makes stationary families survive restriction

**Remember:** Restrict the elementary substructure to the named subset.

*True by definition. Confidence: medium.* MSC 03E05 (Other combinatorial set theory). arXiv math.LO. Level 4: research.

**Definition.** A family S of countable subsets of X is stationary if it passes the following test. Every structure on X in a countable language must have an elementary substructure with universe in S. An elementary substructure agrees with the structure on all first-order formulas with parameters in its universe.

**Problem.** Let S be a stationary family of countable subsets of X, and let Y be an uncountable subset of X. Then the infinite sets x ∩ Y, for x in S, form a stationary family on Y.

**How the definition helps.** Extend any given structure on Y to X, naming Y by a predicate and naming infinitely many distinct elements of Y by constants (our own). Stationarity supplies an elementary substructure with universe x ∈ S. Relativizing quantifiers to the predicate shows that x ∩ Y is elementary in the original structure. The named points make x ∩ Y infinite.

**Wikipedia:** [Stationary set](https://en.wikipedia.org/wiki/Stationary_set). It says: “for any such structure M there is an elementary substructure of M that belongs to S”

**Sources:** none listed. No primary source with a working link was found.

### By construction, X cannot be mapped onto its Lindenbaum number

**Remember:** Start with zero and collect every ordinal X maps onto.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 4: research.

**Definition.** For a set X, its Lindenbaum number ℵ\*(X) consists of 0 and every ordinal onto which X maps surjectively (our own convention).

**Problem.** Without the axiom of choice, there is no surjection from X onto ℵ\*(X). So ℵ\*(X) is a well-ordered set that is not a quotient of X.

**How the definition helps.** This collection is an ordinal because every smaller positive ordinal is a quotient of every larger ordinal (our own). A surjection from X onto ℵ\*(X) would therefore put ℵ\*(X) inside itself, which no ordinal permits.

**nLab:** [Lindenbaum number](https://ncatlab.org/nlab/show/Lindenbaum+number). It says: “By construction, if there were a surjection function X → ℵ\*(X), then ℵ\*(X) would be order isomorphic to one of its own elements, and hence to a proper initial segment of itself, which is impossible.”

**Sources:**

- [A. Karagila, Embedding Posets Into Cardinals With DCκ, arXiv:1212.4396v1 (2012), where the name appears](https://arxiv.org/abs/1212.4396v1)

### Defining the surjection order by subquotients needs no empty-set exception

**Remember:** B is a quotient of a part of A.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 4: research.

**Definition.** Write \|B\| ≤\* \|A\| when B is a subquotient of A. This means that there is a set B′ with a surjection B′ → B and an injection B′ → A. The classical definition says instead that there is a surjection A → B, or B is empty.

**Problem.** Constructively, \|B\| ≤ \|A\| implies \|B\| ≤\* \|A\|, with no separate case for the empty set. Here \|B\| ≤ \|A\| means that there is an injection B → A.

**How the definition helps.** Take B′ = B and use the identity map onto B together with the given injection into A (our own). The same witnesses work when B is empty.

**nLab:** [surjection](https://ncatlab.org/nlab/show/surjection). It says: “To make this definition less piecemeal and more constructive, one can define \|B\| ≤\* \|A\| to mean B is a subquotient of A, in other words one has a surjection B′ → B and an injection B′ → A.”

**Sources:** none listed. No primary source with a working link was found.

### Plump ordinals make x ≤ y &lt; z imply x &lt; z constructively

**Remember:** Every member is plump and brings all smaller or equal plump ordinals with it.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 4: research.

**Definition.** Define plumpness recursively. An ordinal A is plump if every B &lt; A is plump and every plump C ≤ B &lt; A satisfies C &lt; A.

**Problem.** Without excluded middle, plump ordinals satisfy the law that x ≤ y &lt; z implies x &lt; z. If this law held for all constructive ordinals, excluded middle would follow.

**How the definition helps.** The second condition gives x &lt; z whenever x is plump and x ≤ y &lt; z. For unrestricted ordinals, take y = 1, z = 2 and x = {0 ∣ P} for any proposition P (our own). Then x ≤ 1, but x &lt; 2 forces x = 0 or x = 1, deciding P (our own).

**nLab:** [plump ordinal](https://ncatlab.org/nlab/show/plump+ordinal). It says: “However, Paul Taylor (Taylor) realized that this last property can be recovered by essentially "restricting to the subclass of ordinals z for which it holds hereditarily". These are the plump ordinals.”

**Sources:**

- [Paul Taylor, Intuitionistic Sets and Ordinals, Journal of Symbolic Logic 61 (1996) 705–744](http://www.paultaylor.eu/ordinals/)

### The compact-space definition makes universally Baire sets closed under continuous preimages

**Remember:** Pull back twice by composing the two maps.

*True by definition.* MSC 03E15 (Descriptive set theory). arXiv math.LO. Level 4: research.

**Definition.** A subset A of Baire space is universally Baire if it passes every compact Hausdorff test. For each compact Hausdorff space K and each continuous f from K to Baire space, f⁻¹(A) must have the Baire property. This means its symmetric difference with some open set is meager.

**Problem.** Let g be a continuous map from Baire space to itself, and let A be universally Baire. Then the preimage of A under g is universally Baire.

**How the definition helps.** Each continuous test map f for g⁻¹(A) gives a continuous test map g ∘ f for A. Since f⁻¹(g⁻¹(A)) equals (g ∘ f)⁻¹(A), it has the Baire property (our own). The Feng–Magidor–Woodin theorem identifies this definition with the tree formulation.

**Wikipedia:** [Universally Baire set](https://en.wikipedia.org/wiki/Universally_Baire_set). It says: “the preimage of A under f has the property of Baire in Ω.”

**Sources:**

- [Qi Feng, Menachem Magidor, and W. Hugh Woodin, Universally Baire Sets of Reals (1992)](https://doi.org/10.1007/978-1-4613-9754-0_15)

### The increasing-union definition makes actions of locally finite groups hyperfinite

**Remember:** Finite subgroups give finite orbits.

*True by definition.* MSC 03E15 (Descriptive set theory), 37A20. arXiv math.LO, math.DS. Level 4: research.

**Definition.** A Borel equivalence relation is hyperfinite if it is the union of an increasing sequence of Borel equivalence relations with finite classes.

**Problem.** Let a countable group G act in a Borel way on a standard Borel space. Suppose G is locally finite, meaning that each finitely generated subgroup is finite. Then the orbit relation is hyperfinite.

**How the definition helps.** Enumerate G and let Fₙ be the finite subgroup generated by the first n elements (our own). Each Fₙ has a Borel orbit relation with finite classes. These relations increase and their union is the orbit relation of G.

**Wikipedia:** [Hyperfinite equivalence relation](https://en.wikipedia.org/wiki/Hyperfinite_equivalence_relation). It says: “a filtration of the orbit equivalence relation of the action of G on X into finite Borel equivalence relations”

**Sources:**

- [Randall Dougherty, Steve Jackson, and Alexander S. Kechris, The structure of hyperfinite Borel equivalence relations (1994)](https://doi.org/10.1090/S0002-9947-1994-1149121-0)

### The increasing-union definition makes every subrelation of a hyperfinite relation hyperfinite

**Remember:** Intersect each finite approximation with the smaller relation.

*True by definition.* MSC 03E15 (Descriptive set theory), 37A20. arXiv math.LO, math.DS. Level 4: research.

**Definition.** A Borel equivalence relation is hyperfinite if it is the union of an increasing sequence of Borel equivalence relations with finite classes.

**Problem.** Let E be a hyperfinite Borel equivalence relation, and let F be a Borel equivalence relation contained in E. Then F is hyperfinite.

**How the definition helps.** Write E as the increasing union of finite-class Borel equivalence relations Eₙ (our own). The intersections F ∩ Eₙ are Borel equivalence relations with finite classes. They increase and their union is F.

**Wikipedia:** [Hyperfinite equivalence relation](https://en.wikipedia.org/wiki/Hyperfinite_equivalence_relation). It says: “A subequivalence relation of a hyperfinite equivalence relation is hyperfinite.”

**Sources:**

- [Randall Dougherty, Steve Jackson, and Alexander S. Kechris, The structure of hyperfinite Borel equivalence relations (1994)](https://doi.org/10.1090/S0002-9947-1994-1149121-0)

### Tree pairs make the interpretation of a universally Baire set well defined

**Remember:** Cross the first tree of one pair with the second tree of the other.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E15 (Descriptive set theory), 03E40. arXiv math.LO. Level 4: research.

**Definition.** A set A of reals is universally Baire if every forcing order admits two ground-model trees whose projections are A and its complement. Their projections must remain complementary in every extension by that order. A tree projects to the first coordinates of its infinite branches.

**Problem.** Take two tree pairs for the same universally Baire set A. In any forcing extension where both pairs stay complementary, the two first trees project to the same set.

**How the definition helps.** Synchronize the first tree of one pair with the second tree of the other along their real coordinate (our own). The resulting tree has no ground-model branch because the projections are disjoint. Its ground-model rank function still excludes branches in the extension. Complementarity gives one inclusion between the first projections, and exchanging the pairs gives the reverse inclusion.

**Paper or page:** [Uniformization and Internal Absoluteness](https://arxiv.org/abs/2108.09688v4). It says: “A set of reals A is universally Baire if and only if for every ordinal λ”

**Sources:**

- [Qi Feng, Menachem Magidor, and W. Hugh Woodin, Universally Baire Sets of Reals (1992)](https://doi.org/10.1007/978-1-4613-9754-0_15)
- [Sandra Müller and Philipp Schlicht, Uniformization and Internal Absoluteness (arXiv 2022)](https://arxiv.org/abs/2108.09688v4)

### A choice principle weak enough to survive in every Grothendieck topos

**Remember:** Maybe no section, but a small set of covers refines every cover.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E25 (Axiom of choice and related propositions), 03F65, 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** WISC says that every set X has a set of surjections onto it such that each surjection onto X admits a refinement from that set. A surjection refines another if it factors through the other over X.

**Problem.** Assume WISC. Then the category of anafunctors between two small categories is essentially small, that is, equivalent to a small category. Every Grothendieck topos and every realizability topos inherits WISC from its base, so the result holds inside them too.

**How the definition helps.** WISC supplies a set of covers of the source object set sufficient to represent every anafunctor up to isomorphism (our own). For small categories, the functor data on each such cover form a set. Van den Berg’s inheritance theorem gives the same hypothesis inside the stated toposes.

**nLab:** [WISC](https://ncatlab.org/nlab/show/WISC). It says: “any Grothendieck topos or realizability topos inherits WISC from its base topos of sets (even if the latter is constructive or even predicative); see van den Berg.”

**Sources:**

- [B. van den Berg, Predicative toposes, 2012, arXiv:1207.0959](https://arxiv.org/abs/1207.0959)
- [B. van den Berg, I. Moerdijk, The axiom of multiple choice and models for constructive set theory, 2012, arXiv:1204.4045](https://arxiv.org/abs/1204.4045)

### Mathias's criterion makes infinite subsequences of Prikry sequences generic

**Remember:** Every infinite subsequence still lies eventually in each measure-one set.

*True by definition. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 03E55. arXiv math.LO. Level 4: research.

**Definition.** Fix a ground model M with a normal measure U on κ. An increasing cofinal sequence of length ω in κ is Prikry generic over M if it lies eventually in every member of U.

**Problem.** Every infinite subsequence of a Prikry generic sequence is Prikry generic over the same ground model.

**How the definition helps.** With Mathias's criterion, genericity is a condition on tails, and subsequences inherit tail conditions. If all but finitely many terms of the sequence lie in a set A, the same holds for any infinite subsequence. An infinite subsequence also still has supremum κ, so it passes the criterion (our own). The work moves to Mathias's theorem that the criterion detects every dense set.

**Wikipedia:** [List of forcing notions](https://en.wikipedia.org/wiki/List_of_forcing_notions). It says: “change the cofinality of κ while preserving all cardinals”

**Sources:**

- [A. R. D. Mathias, On sequences generic in the sense of Prikry (1973)](https://doi.org/10.1017/S1446788700028755)

### The function definition of Woodin cardinals puts measurable cardinals in every club

**Remember:** Let f jump to the next point of the club.

*True by definition.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 4: research.

**Definition.** A cardinal δ is Woodin if each f ∶ δ→δ admits κ &lt; δ and an elementary embedding j ∶ V→M satisfying the following conditions. Here M is transitive, f\[κ\] ⊆ κ, and κ is the critical point of j. Every set of rank below j(f)(κ) belongs to M.

**Problem.** Let δ be a Woodin cardinal, and let C be a club, a closed unbounded subset of δ. Closed means that C contains every limit below δ of its own points. Then C contains a measurable cardinal.

**How the definition helps.** Send each β &lt; δ to the least point of C above β (our own). Below the resulting κ, these values stay below κ and are cofinal there. Closure gives κ ∈ C, and the critical point of such an elementary embedding is measurable.

**Wikipedia:** [Woodin cardinal](https://en.wikipedia.org/wiki/Woodin_cardinal). It says: “preceded by a stationary set of measurable cardinals”

**Sources:**

- [Akihiro Kanamori, The Higher Infinite (2003)](https://doi.org/10.1007/978-3-540-88867-3)

### The indiscernibles definition lets Ramsey cardinals handle fewer than κ colors

**Remember:** Give each color its own relation symbol.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals), 03E02. arXiv math.LO. Level 4: research.

**Definition.** An uncountable cardinal κ is Ramsey if every structure on κ in a language of size less than κ has κ many order indiscernibles. Increasing tuples of order indiscernibles of equal length satisfy the same parameter-free formulas.

**Problem.** Let κ be a Ramsey cardinal. Color the finite subsets of κ with fewer than κ colors. Then some set of size κ is homogeneous.

**How the definition helps.** For each positive arity and color, introduce a relation selecting tuples whose underlying set has that color (our own). The language has size less than κ. Indiscernibility makes each relation constant on increasing tuples of its arity, giving homogeneity.

**Paper or page:** [Large cardinal ideals](https://arxiv.org/abs/2102.09591v1). It says: “Every structure 𝒜 in a language of size less than κ”

**Sources:**

- [Brent Cody, Large cardinal ideals (arXiv 2021)](https://arxiv.org/abs/2102.09591v1)

### Strong extensionality makes simulations unique

**Remember:** Two elements that nothing can tell apart, step by step forever, are equal.

*True by definition. Confidence: medium.* MSC 03E65 (Other set-theoretic hypotheses and axioms), 03E20. arXiv math.LO. Level 4: research.

**Definition.** A bisimulation R on T matches predecessors whenever x R y. Each predecessor of x must relate by R to some predecessor of y, and conversely each predecessor of y must receive such a match. A relation on T is strongly extensional if every bisimulation on T relates only equal elements.

**Problem.** A relation ≺ on T is strongly extensional exactly when any two simulations from any S into T are equal. A simulation is a map that preserves ≺ and sends the ≺-predecessors of x onto the ≺-predecessors of its image.

**How the definition helps.** For simulations f and g, the pairs (f(s), g(s)) form a bisimulation because both maps send predecessors onto predecessors (our own). Strong extensionality therefore gives f = g. Conversely, give any bisimulation its coordinatewise predecessor relation. Its projections are simulations, so uniqueness makes their values equal at every pair (our own).

**nLab:** [extensional relation](https://ncatlab.org/nlab/show/extensional+relation). It says: “Note that there is at most one simulation from S to T; in fact, strong extensionality for T is equivalent to saying that any two simulations S ⇉ T are equal.”

**Sources:**

- [P. Aczel, Non-Well-Founded Sets, CSLI Lecture Notes 14 (1988), Chapter 4](https://web.archive.org/web/20161020002632/https://standish.stanford.edu/pdf/00000056.pdf)

### Zadeh's fuzzy extension of a map commutes with taking iterates

**Remember:** Taking a supremum in stages gives the same result as taking it at once.

*True by definition.* MSC 03E72 (Theory of fuzzy sets, etc.), 37B02. arXiv math.DS. Level 4: research.

**Definition.** A fuzzy set gives each point a membership value between zero and one. The Zadeh extension of a map assigns each output point the supremum of membership values over its preimages. It uses zero if there is no preimage.

**Problem.** For a continuous map on a metric space, iterating its Zadeh extension gives the Zadeh extension of the iterated map.

**How the definition helps.** Taking suprema over successive preimages is the same as taking one supremum over all original preimages. In our own explanation, two inverse steps group the original preimages by their intermediate point. The regrouping does not change their supremum. The remaining work is showing that the extension preserves the class of fuzzy sets under study.

**Paper or page:** [Topological dynamics for the endograph metric II: Extremely radical properties](https://arxiv.org/abs/2510.19337v1). It says: “the composition of f̂ with itself n times coincides with the fuzzification of fⁿ;”

**Sources:**

- [Antoni López-Martínez, Topological dynamics for the endograph metric II: Extremely radical properties, arXiv:2510.19337 (2025)](https://arxiv.org/abs/2510.19337v1)

### With display logic, one theorem gives cut elimination for many logics

**Remember:** Any formula can be displayed alone on one side of the turnstile.

*Makes the theorem clean to state or prove.* MSC 03F05 (Cut-elimination and normal-form theorems), 03F52. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A sequent calculus has the display property if reversible structural rules can isolate any substructure as an entire side of a sequent. A display calculus has structural connectives and rules with this property.

**Problem.** Belnap’s cut-elimination theorem makes cut admissible in every display calculus satisfying his eight conditions.

**How the definition helps.** Displaying the cut formula gives one cut rule for all these calculi. Belnap’s theorem then reduces cut admissibility for a particular calculus to checking his conditions on its rules.

**nLab:** [display logic](https://ncatlab.org/nlab/show/display+logic). It says: “Any display logic satisfying a list of eight natural conditions automatically satisfies cut admissibility.”

**Sources:**

- [N. D. Belnap, Display logic, Journal of Philosophical Logic 11 (1982) 375–417](https://doi.org/10.1007/BF00284976)

### Focused proofs give each Tamari order sequent exactly one derivation

**Remember:** The left edge and the right formula tell you which rule to use.

*Rules out counterexamples.* MSC 03F07 (Structure of proofs), 06A07. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** In this Tamari calculus, a focused derivation expands a leftmost product by the left rule whenever possible. The right product rule requires its left premise to start with an atom, and identity applies only to atoms.

**Problem.** Every provable sequent in this Tamari calculus has exactly one focused derivation.

**How the definition helps.** The restrictions exclude competing rule orders by determining the final rule from the sequent (our own). Zeilberger’s Lemma 1.18 gives uniqueness, and his focusing theorem gives existence for each provable sequent.

**Paper or page:** [A sequent calculus for a semi-associative law](https://arxiv.org/abs/1803.10080v3). It says: “Every derivable sequent has exactly one focused derivation.”

**Sources:**

- [Noam Zeilberger (2019), A Sequent Calculus for a Semi-Associative Law, Logical Methods in Computer Science 15(1)](https://doi.org/10.23638/LMCS-15(1:9)2019)

### Proof nets forget the order of rules and keep only the links

**Remember:** A proof net keeps which atoms are linked and forgets the order of rules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F52 (Proof-theoretic aspects of linear logic and other substructural logics), 18M45. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** In unit-free multiplicative linear logic, a proof structure consists of the sequent’s formula trees and a perfect matching of dual atomic occurrences. A proof net is a proof structure obtained from a cut-free sequent proof.

**Problem.** Permuting independent rules in a cut-free sequent proof preserves its proof net. In unit-free multiplicative linear logic without Mix, a proof structure is a net exactly when every switching gives a connected acyclic graph. A switching keeps exactly one premise edge at each par.

**How the definition helps.** Permuting independent rules preserves the formula trees and the links between dual atoms (our own). The Danos–Regnier correctness theorem characterizes the resulting graphs by their switchings.

**nLab:** [proof net](https://ncatlab.org/nlab/show/proof+net). It says: “can be viewed as graphical normal forms of proofs freed from 'the bureaucracy of syntax' (Girard).”

**Sources:**

- [Jean-Yves Girard, Linear logic, Theoretical Computer Science 50 (1987) 1–101](https://doi.org/10.1016/0304-3975(87)90045-4)
- [Vincent Danos, Laurent Regnier, The structure of multiplicatives, Archive for Mathematical Logic 28 (1989) 181–203](https://doi.org/10.1007/BF01622878)

### Truncated existence keeps Brouwer's continuity principle consistent

**Remember:** Say that a modulus exists; do not ask for a choice of one.

*Rules out counterexamples.* MSC 03F55 (Intuitionistic mathematics), 03B38. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** For f ∶ ℕᴺ → ℕ, a modulus at α is a natural number n with the following property. Every β agreeing with α on the first n terms satisfies f(β) = f(α). Truncated continuity requires, at every α, the propositional truncation of the type of such moduli, recording existence without selecting a witness.

**Problem.** Truncated continuity for every f ∶ ℕᴺ → ℕ holds in Johnstone’s topological topos, giving consistency with intuitionistic type theory. The untruncated principle implies 0 = 1.

**How the definition helps.** Truncation removes the operation that chooses a modulus for each function and input (our own). Escardó and Xu derive a contradiction from that choice operation. Johnstone’s topological topos supplies a model of the truncated principle.

**nLab:** [Brouwer's continuity principle](https://ncatlab.org/nlab/show/Brouwer%27s+continuity+principle), [BHK interpretation](https://ncatlab.org/nlab/show/BHK+interpretation). It says: “The statement that all functions from the Baire space of sequences ℕ<sup>ℕ</sup> to the natural numbers have a choice of modulus of pointwise continuity is inconsistent.”

**Sources:**

- [Martín Escardó, Chuangjie Xu, The inconsistency of a Brouwerian continuity principle with the Curry–Howard interpretation, TLCA 2015, LIPIcs 38, 153–164](https://doi.org/10.4230/LIPIcs.TLCA.2015.153)

### Antisubalgebras give constructive quotients that keep an apartness

**Remember:** Apart outputs require apart inputs, and the anticongruence is open in the product apartness.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F65 (Other constructive mathematics), 08A30, 08A05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** On an algebra X with tight apartness \# and strongly extensional operations, an anticongruence R is an apartness on X satisfying two conditions. For every p ∈ R and q ∈ X², either q ∈ R or some corresponding coordinates of p and q are apart. For every basic operation f, if f(a₁,…,aₙ) R f(b₁,…,bₙ), then aᵢ R bᵢ for some i.

**Problem.** Without excluded middle, the quotient of an algebra by an anticongruence carries a tight apartness, and its operations stay strongly extensional. A normal subgroup or ideal alone does not give an apartness on the quotient.

**How the definition helps.** Identify x and y when ¬(x R y), and declare their classes apart when x R y (our own). Cotransitivity makes this independent of representatives, and the quotient apartness is tight by construction. The operation condition makes the operations descend and remain strongly extensional.

**nLab:** [antisubalgebra](https://ncatlab.org/nlab/show/antisubalgebra). It says: “However, if we want the quotient algebra to inherit an apartness from the original algebra, then we need antisubgroups and antiideals.”

**Sources:**

- [A. S. Troelstra, D. van Dalen, Constructivism in Mathematics: An Introduction, Volume II, Studies in Logic and the Foundations of Mathematics 123, North-Holland (1988)](https://shop.elsevier.com/books/constructivism-in-mathematics-vol-2/troelstra/978-0-444-70358-3)

### Quasidecidable propositions form a dominance without countable choice

**Remember:** Quasidecidable means 'closed under countable or' by construction.

*Makes the theorem clean to state or prove.* MSC 03F65 (Other constructive mathematics), 18F70. arXiv math.LO, math.GN. Level 4: research.

**Definition.** The quasidecidable truth values form the smallest set of truth values that contains true and false and is closed under existential quantification over ℕ. Equivalently, they form the initial σ-frame. A σ-frame is a lattice with finite meets and countable joins, in which finite meets distribute over countable joins.

**Problem.** Without countable choice, the quasidecidable propositions form a dominance that is closed under existential quantification over ℕ. The semidecidable propositions form one only under an extra axiom, such as countable choice.

**How the definition helps.** The definition gives closure under countable existential quantification directly. The dominance theorem of Bidlingmaier, Faissole and Spitters supplies the further closure needed for a dominance. Countable choice supplies the corresponding closure for semidecidable propositions.

**nLab:** [quasidecidable proposition](https://ncatlab.org/nlab/show/quasidecidable+proposition), [Smyth's dictionary](https://ncatlab.org/nlab/show/Smyth%27s+dictionary). It says: “unlike the set of semidecidable propositions, even in the absence of countable choice, the set of quasidecidable propositions is always an ℕ-overt dominance”

**Sources:**

- [Martin E. Bidlingmaier, Florian Faissole, Bas Spitters, Synthetic topology in homotopy type theory for probabilistic programming, Mathematical Structures in Computer Science 31 (2021), arXiv:1912.07339](https://arxiv.org/abs/1912.07339)

### The axiom of fullness builds the Dedekind reals without choice

**Remember:** Fullness gives a set of enough multivalued functions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F65 (Other constructive mathematics), 03F60, 26E40. arXiv math.LO, math.CA. Level 4: research.

**Definition.** An entire relation R ⊆ X × Y relates every x ∈ X to some y ∈ Y. Fullness requires a set S of entire relations for every pair of sets X and Y. Every entire relation from X to Y must contain some member of S.

**Problem.** With the axiom of fullness, the located Dedekind real numbers form a set, without the power set axiom, excluded middle or countable choice.

**How the definition helps.** Fullness bounds the multivalued sequences needed to represent located cuts by a set of representatives (our own). One restricts a covering family of entire relations to regular multivalued sequences and identifies those representing the same cut. Using relations allows these approximations without choosing one value at each index.

**nLab:** [axiom of fullness](https://ncatlab.org/nlab/show/axiom+of+fullness). It says: “it is strong enough to construct the set ℝ of (located Dedekind) real numbers from the set ℕ of natural numbers without assuming excluded middle or countable choice.”

**Sources:**

- [M. Shulman, Comparing material and structural set theories, arXiv:1808.05204 (2018)](https://arxiv.org/abs/1808.05204)

### An initial category with a natural numbers object gives IΣ₁'s total functions

**Remember:** Zero starts the recursion, successor continues it, and parameters stay available.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 03F30, 03D20. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A parametrised natural numbers object N has zero 0 and successor s. For every a ∶ P→X and b ∶ P×X→X, there is a unique h ∶ P×N→X satisfying two equations. They are h(p,0) = a(p) and h(p,s(n)) = b(p,h(p,n)).

**Problem.** The provably total functions of 𝕋 are exactly the primitive recursive functions. Since 𝕋 is the Π₂ fragment of IΣ₁, the same holds for IΣ₁, Peano arithmetic with induction only for Σ₁ formulas.

**How the definition helps.** Initiality sends each definable numerical map to a map in the paper’s coherent category of primitive recursive data. Conversely, composition and parametrised recursion represent primitive recursive functions in 𝕋 (our own). The paper’s initiality and Π₂-fragment results transfer this characterization to IΣ₁.

**Paper or page:** [Categorical Structure in Theory of Arithmetic](https://arxiv.org/abs/2304.05477). It says: “prove that 𝕋 presents the initial coherent category equipped with a parametrised natural number object. This allows us to derive the provably total functions in 𝕋 are exactly the primitive recursive ones”

**Sources:**

- [Lingyuan Ye, Categorical Structure in Theory of Arithmetic, arXiv:2304.05477 (2023)](https://arxiv.org/abs/2304.05477)

### Equality in a hyperdoctrine is existential quantification along the diagonal

**Remember:** x = y is the least relation that holds on the diagonal.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18C10. arXiv math.LO, math.CT. Level 4: research.

**Definition.** For an object A in a first-order hyperdoctrine with equality, let δ ∶ A → A × A be the diagonal. Define equality on A by ∃δ(⊤), where ∃δ is left adjoint to substitution along δ. The equality doctrine requires these adjunctions to satisfy the substitution laws in every parameter context.

**Problem.** In a first-order hyperdoctrine with equality, this equality predicate gives a sound interpretation of first-order logic with equality, including reflexivity and substitution of equals.

**How the definition helps.** The adjunction makes equality the least predicate on pairs whose restriction to the diagonal is true. Its unit gives reflexivity, and elimination along the diagonal gives substitution of equals in context. The Beck–Chevalley condition makes the interpretation stable when parameters change.

**nLab:** [first-order hyperdoctrine](https://ncatlab.org/nlab/show/first-order+hyperdoctrine). It says: “This assures that the equality predicate is well behaved in the sense that it allows a sound interpretation of first order logic with equality in the hyperdoctrine.”

**Sources:**

- [F. William Lawvere, Equality in hyperdoctrines and comprehension schema as an adjoint functor, in: Applications of Categorical Algebra, Proc. Sympos. Pure Math. 17, AMS (1970)](https://doi.org/10.1090/pspum/017/0257175)

### In a constructively well-pointed topos, internal truth is truth for global elements

**Remember:** Global points detect subobjects, lift through covers, and choose a disjoint summand.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18B25, 03F65. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A topos is constructively well-pointed if its terminal object is a noninitial, indecomposable, projective strong generator. Indecomposable means every binary coproduct decomposition has an initial summand. Projectivity lifts global elements through epimorphisms, and strong generation means a subobject containing every global element is the whole object.

**Problem.** In a constructively well-pointed topos, a statement of the internal logic holds exactly when it holds for all global elements. So the topos behaves like a category of sets.

**How the definition helps.** Induction on formulas compares internal satisfaction with truth on global elements (our own). Strong generation detects subobjects, and noninitiality handles falsehood. Indecomposability handles alternatives together with strong generation, while projectivity supplies witnesses for existence.

**nLab:** [well-pointed topos](https://ncatlab.org/nlab/show/well-pointed+topos). It says: “To maintain this logical result in constructive mathematics (that is, without excluded middle in the metalogic), one must add the following requirements:”

**Sources:**

- [P. Freyd, Aspects of topoi, Bulletin of the Australian Mathematical Society 7 (1972) 1–76](https://doi.org/10.1017/S0004972700044828)
- [M. Shulman, Comparing material and structural set theories, Annals of Pure and Applied Logic 170 (2019) 465–504, arXiv:1808.05204](https://doi.org/10.1016/j.apal.2018.11.002)

### Models as functors make elementary embeddings exactly the natural transformations

**Remember:** A natural map respects every definable set, including each complement.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 03C07. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The model functor of a classical first-order model sends each formula in context to its solution set and each definable function to its interpretation. A natural transformation assigns a map to each such solution set and commutes with every definable function.

**Problem.** The natural transformations between two such model functors are exactly those induced by elementary embeddings of their models.

**How the definition helps.** Naturality for coordinate projections forces each component to apply the underlying sort maps coordinatewise (our own). Inclusions of solution sets give preservation of formulas, and inclusions of their complements give reflection. Conversely, an elementary embedding preserves each definable function’s graph, so its restrictions form a natural transformation (our own).

**nLab:** [elementary embedding](https://ncatlab.org/nlab/show/elementary+embedding). It says: “Elementary embeddings are natural transformations between these functors.”

**Sources:** none listed. No primary source with a working link was found.

### Pretoposes are exactly the conceptually complete coherent categories

**Remember:** A pretopos already contains every sort that a model can see.

*Makes the theorem clean to state or prove.* MSC 03G30 (Categorical logic, topoi), 18E08, 03C40. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A pretopos is a coherent category with disjoint, pullback-stable finite coproducts and effective quotients of all internal equivalence relations. An effective quotient has the given relation as its kernel pair.

**Problem.** Conceptual completeness (Makkai–Reyes) says this. Suppose an interpretation of coherent theories induces an equivalence of their categories of models. Then the theories are bi-interpretable up to elimination of imaginaries.

**How the definition helps.** Pretopos completion adds sorts for finite coproducts and quotients without changing the category of set-valued models. The Makkai–Reyes conceptual completeness theorem turns the induced equivalence on models into an equivalence of the completed pretoposes. This gives bi-interpretability after adding those sorts.

**nLab:** [conceptual completeness](https://ncatlab.org/nlab/show/conceptual+completeness). It says: “the conceptual completeness theorem can be rephrased by saying that pretoposes are conceptually complete, thus characterizing pretoposes as the conceptually complete (coherent) categories.”

**Sources:**

- [M. Makkai, G. E. Reyes, First Order Categorical Logic, Lecture Notes in Math. 611, Springer (1977)](https://doi.org/10.1007/BFb0066201)

### Program tracking makes natural-number maps in the effective topos computable

**Remember:** A map on natural numbers computes with those numbers as codes.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 03D80. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A program tracks a function between realized sets if it halts on every realizer of each input and returns a realizer of the corresponding output. In the natural numbers object of the effective topos, the only realizer of n is n.

**Problem.** Each map from the natural numbers object to itself in the effective topos gives a total computable function on ordinary natural numbers.

**How the definition helps.** On this object a tracker must halt on n and return f(n) for every n (our own). It therefore computes f everywhere. The work lies in the tracked-map description of maps between these objects in the effective topos (our own).

**nLab:** [effective topos](https://ncatlab.org/nlab/show/effective+topos). It says: “it is provable that every total function from natural numbers to natural numbers is recursive”

**Sources:**

- [J. M. E. Hyland, The effective topos, in A. S. Troelstra, D. van Dalen (eds.), The L. E. J. Brouwer Centenary Symposium, North-Holland (1982), 165–216](https://doi.org/10.1016/S0049-237X(09)70129-6)
