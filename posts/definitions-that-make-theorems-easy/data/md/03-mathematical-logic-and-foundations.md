### Equal truth functions let equivalent formulas replace each other

**Remember:** Equivalent formulas share a truth table, so swapping them changes nothing.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Two formulas are logically equivalent when they give the same truth value under every assignment of true or false to their letters, that is, when they compute the same truth function.

**Problem.** Replacing any subformula by a logically equivalent one leaves the whole propositional formula logically equivalent to the original.

**How the definition helps.** Each connective sees only the truth values of its inputs, so replacing an input by one with the same values keeps the output. Repeating this step from the replaced part up to the whole formula proves the theorem (our own argument).

**Wikipedia:** [Logical equivalence](https://en.wikipedia.org/wiki/Logical_equivalence). It says: “if they have the same truth value in every model.”

**Sources:** none listed. No primary source with a working link was found.

### False rows build conjunctive normal form

**Remember:** One clause rules out one false row.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A conjunctive normal form is an AND of clauses, each an OR of letters or negated letters. The truth-table construction takes one clause for each false row: the clause that is false on that row and true on every other row.

**Problem.** Every propositional formula has an equivalent conjunctive normal form.

**How the definition helps.** The AND of these clauses is false exactly on the false rows, so it has the formula's truth table. The clause for a row negates the letters that are true on that row and keeps the others; an empty AND counts as true (our own convention).

**Wikipedia:** [Conjunctive normal form](https://en.wikipedia.org/wiki/Conjunctive_normal_form). It says: “A CNF equivalent of a formula can be derived from its truth table.”

**Paper or page:** [Existence of Conjunctive Normal Form of Statement](https://proofwiki.org/wiki/Existence_of_Conjunctive_Normal_Form_of_Statement). It says: “Any propositional formula can be expressed in conjunctive normal form (CNF).”

**Sources:** none listed. No primary source with a working link was found.

### Finite truth tables decide propositional validity

**Remember:** Check only the letters you see.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A truth table lists every assignment of true or false to the finitely many letters in a formula, with the formula's value in each row. Letters outside the formula cannot change its value, so these rows cover every assignment.

**Problem.** A propositional formula is valid, or true under every assignment, exactly when every row is true. Checking these finitely many rows decides validity.

**How the definition helps.** Any assignment agrees with exactly one row on the formula's letters and gives the formula that row's value. Induction on how the formula is built shows that other letters do not matter (our own argument).

**Paper or page:** [Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Suppose that v₁ and v₂ are valuations that agree on the propositional variables occurring in A”

**Sources:** none listed. No primary source with a working link was found.

### Material implication turns a premise into an antecedent

**Remember:** The same counterexample refutes both claims.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The implication A → B is false exactly when A is true and B is false. A conclusion follows from premises when no assignment makes all the premises true and the conclusion false.

**Problem.** B follows from a set of premises together with A exactly when A → B follows from those premises alone.

**How the definition helps.** Both sides fail exactly when one assignment makes the premises and A true and B false (our own comparison). In a proof system based on axioms, the same fact needs a deduction theorem (our own).

**Paper or page:** [Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Γ ⊨ A → B if and only if Γ ∪ {A} ⊨ B.”

**Sources:** none listed. No primary source with a working link was found.

### True rows give a unique full disjunctive normal form

**Remember:** One full term per true row, joined by OR.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A full disjunctive normal form is an OR of distinct terms, where each term is an AND that uses every letter once, plain or negated, in a fixed order. Each term is true on exactly one row of the truth table. An empty AND means true, and an empty OR means false.

**Problem.** Every rule assigning true or false to each row of a finite truth table has one full disjunctive normal form, up to term order.

**How the definition helps.** Each term picks out one row, so the OR of the terms for the true rows has the given truth table. Adding or omitting a term changes its row's value, so no other set of terms works (our own argument).

**Wikipedia:** [Disjunctive normal form](https://en.wikipedia.org/wiki/Disjunctive_normal_form). It says: “The full DNF of a formula can be read off its truth table.”

**Paper or page:** [Existence of Disjunctive Normal Form of Statement](https://proofwiki.org/wiki/Existence_of_Disjunctive_Normal_Form_of_Statement). It says: “Any propositional formula can be expressed in disjunctive normal form (DNF).”

**Sources:** none listed. No primary source with a working link was found.

### Universal statements about S conflict only when S is nonempty

**Remember:** If there are no unicorns, all unicorns fly and no unicorn flies.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In modern logic, 'all S are P' means ∀x (S(x) ⟹ P(x)), and 'no S are P' means ∀x (S(x) ⟹ ¬P(x)), so both are true when nothing is S. Contrary statements cannot both be true, and subcontrary statements cannot both be false.

**Problem.** Under the modern reading, 'all S are P' and 'no S are P' are contrary exactly when something is S. Likewise, 'some S are P' and 'some S are not P' are subcontrary exactly when something is S.

**How the definition helps.** Any element of S satisfies P or fails P, so it falsifies one universal statement and makes one particular statement true (our own argument). If S is empty, both universals are true and both particulars are false.

**Paper or page:** [Universal Affirmative and Universal Negative are Contrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_and_Universal_Negative_are_Contrary_iff_First_Predicate_is_not_Vacuous), [Particular Affirmative and Particular Negative are Subcontrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Particular_Affirmative_and_Particular_Negative_are_Subcontrary_iff_First_Predicate_is_not_Vacuous). It says: “Using the symbology of predicate logic: ∃x: S(x) ⟺ ¬((∀x: S(x) ⟹ P(x)) ∧ (∀x: S(x) ⟹ ¬P(x)))”

**Sources:**

- [ProofWiki, Universal Affirmative and Universal Negative are Contrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_and_Universal_Negative_are_Contrary_iff_First_Predicate_is_not_Vacuous)
- [ProofWiki, Particular Affirmative and Particular Negative are Subcontrary iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Particular_Affirmative_and_Particular_Negative_are_Subcontrary_iff_First_Predicate_is_not_Vacuous)

### Without existential import, all-S-are-P and some-S-are-not-P are exact opposites

**Remember:** If nothing is an S, then every claim about all S is true.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In modern logic, 'all S are P' means ∀x (S(x) ⟹ P(x)) and has no existential import: it does not claim that some S exists, so it is true when nothing is S.

**Problem.** With the modern reading, 'all S are P' and 'some S is not P' are contradictory: exactly one is true. The traditional rule 'all S are P, so some S is P' holds only when some S exists.

**How the definition helps.** Under this reading 'all S are P' is the exact negation of 'some S is not P', by the usual rules for negating quantifiers. With existential import, both would be false when there is no S (our own point). The cost is the old rule of subalternation, which ProofWiki shows needs the condition ∃x S(x).

**Paper or page:** [Universal Affirmative and Particular Negative are Contradictory](https://proofwiki.org/wiki/Universal_Affirmative_and_Particular_Negative_are_Contradictory), [Universal Affirmative implies Particular Affirmative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_implies_Particular_Affirmative_iff_First_Predicate_is_not_Vacuous), [Universal Negative implies Particular Negative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Negative_implies_Particular_Negative_iff_First_Predicate_is_not_Vacuous). It says: “¬((∀x: S(x) ⟹ P(x)) ⟺ (∃x: S(x) ∧ ¬P(x)))”

**Sources:**

- [ProofWiki, Universal Affirmative and Particular Negative are Contradictory](https://proofwiki.org/wiki/Universal_Affirmative_and_Particular_Negative_are_Contradictory)
- [ProofWiki, Universal Affirmative implies Particular Affirmative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Affirmative_implies_Particular_Affirmative_iff_First_Predicate_is_not_Vacuous)
- [ProofWiki, Universal Negative implies Particular Negative iff First Predicate is not Vacuous](https://proofwiki.org/wiki/Universal_Negative_implies_Particular_Negative_iff_First_Predicate_is_not_Vacuous)

### Binary digits count finite subsets

**Remember:** A finite subset is a binary number with finitely many ones.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A set is countable when its elements carry distinct nonnegative integer labels. Code each finite subset by the integer whose binary digits are 1 exactly at its members' labels.

**Problem.** The finite subsets of a countable set form a countable set.

**How the definition helps.** Binary expansions are unique, so the codes are distinct integer labels for the finite subsets. The empty subset gets 0, and one code replaces separate lists for each subset size (our own proof).

**Paper or page:** [Set of Finite Subsets of Countable Set is Countable](https://proofwiki.org/wiki/Set_of_Finite_Subsets_of_Countable_Set_is_Countable). It says: “Then the set of finite subsets of A is countable.”

**Sources:** none listed. No primary source with a working link was found.

### Binary indicators count every subset of a finite set

**Remember:** Read membership as one binary digit per element.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Identify each subset of A with its indicator, the function on A that is 1 on the subset and 0 elsewhere. A subset of an n-element set is then n independent binary choices.

**Problem.** A set with n elements has exactly 2ⁿ subsets.

**How the definition helps.** Each of the n elements has two independent choices, so the product rule gives 2ⁿ. The points where an indicator is 1 give back its subset, so the identification is a bijection (our own account).

**Paper or page:** [Cardinality of Power Set of Finite Set](https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Finite_Set). It says: “\|𝒫(S)\| = 2ⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Counting by lists with repeats makes the rationals countable

**Remember:** List every fraction and let repeats stay.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A set is countable if it is empty or is the range of a list indexed by the natural numbers, with repeats allowed.

**Problem.** The rational numbers form a countably infinite set.

**How the definition helps.** Repeats do not matter, so it is enough to list every fraction (our own proof). List the integer pairs (p, q) with q &gt; 0 by increasing \|p\| + q; each group is finite, and p/q reaches every rational. Keeping only first appearances gives a list without repeats, which is infinite because it contains every integer.

**Paper or page:** [Rational Numbers are Countably Infinite](https://proofwiki.org/wiki/Rational_Numbers_are_Countably_Infinite). It says: “The set ℚ of rational numbers is countably infinite.”

**Sources:** none listed. No primary source with a working link was found.

### Measuring size by one-to-one correspondence settles Galileo's paradox

**Remember:** Pair them off: squares and integers match, so they are equally many.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Two sets have the same cardinality when a one-to-one correspondence pairs them off. Size is measured only by pairing, not by whether one set contains the other.

**Problem.** The positive perfect squares and the positive integers have the same cardinality, although the positive squares form a proper subset.

**How the definition helps.** Sending n to n² pairs the positive integers with the positive squares, since each positive square has exactly one positive square root (our own argument). Being a proper subset does not prevent such a pairing.

**Wikipedia:** [Galileo's paradox](https://en.wikipedia.org/wiki/Galileo%27s_paradox). It says: “it is possible to define comparisons amongst infinite sets in a meaningful way (by which definition the two sets, integers and squares, have "the same size"), and that by this definition some infinite sets are strictly larger than others.”

**Sources:**

- [Cantor, G. (1878). Ein Beitrag zur Mannigfaltigkeitslehre. Journal für die reine und angewandte Mathematik 84, 242–258.](https://doi.org/10.1515/crll.1878.84.242)

### Subsets keep their countable labels

**Remember:** A subset keeps the labels it already has.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A set is countable if some injection sends it into the natural numbers, so that each element gets its own label.

**Problem.** Every subset of a countable set is countable, including the empty set.

**How the definition helps.** An injection restricted to a subset is still an injection. With this definition the empty set is countable, while a list indexed by all natural numbers could not list it (our own comparison).

**Wikipedia:** [Countable set](https://en.wikipedia.org/wiki/Countable_set). It says: “A subset of a countable set is countable.”

**Sources:** none listed. No primary source with a working link was found.

### Two-valued functions turn Cantor’s diagonal into a bit flip

**Remember:** Flip the entry where each row meets its own label.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Treat the power set of A as the set of indicator functions on A, which are 1 at members and 0 elsewhere. A function from A to the power set is then a table whose row x is a 0–1 sequence indexed by A.

**Problem.** No function from A onto its power set exists. The power set is strictly larger than A.

**How the definition helps.** The indicator whose value at x is the opposite of row x's value at x differs from every row, so no function from A onto the power set exists (our own proof). Sending x to {x} is one-to-one, so the power set is strictly larger.

**Paper or page:** [Cantor's Theorem](https://proofwiki.org/wiki/Cantor's_Theorem). It says: “There is no surjection from a set S to its power set for any set S.”

**Sources:** none listed. No primary source with a working link was found.

### A product point supplies defaults for every coordinate projection

**Remember:** Keep a default tuple and replace the coordinate you want.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A point of a Cartesian product chooses one value in each factor, and a projection reads one coordinate. A right inverse of a projection sends each value of that factor to a point whose coordinate there is that value.

**Problem.** If a Cartesian product is nonempty, each coordinate projection has a right inverse. Thus each projection maps onto its factor.

**How the definition helps.** A fixed product point supplies values for all the other coordinates, so replace the chosen coordinate by the desired value (our own construction). Without a product point the claim fails: the projection from {0} × ∅ to {0} misses 0.

**Paper or page:** [Projection is Surjection/Family of Sets](https://proofwiki.org/wiki/Projection_is_Surjection/Family_of_Sets). It says: “is a surjection.”

**Sources:** none listed. No primary source with a working link was found.

### Adding indicator functions modulo two makes symmetric difference associative

**Remember:** Membership adds modulo two, and that addition is associative.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 06E20. arXiv math.LO, math.CO. Level 1: early undergraduate.

**Definition.** Describe a subset of U by its indicator, which is 1 on the subset and 0 elsewhere in U. The symmetric difference of two subsets is the subset whose indicator is the sum of their indicators modulo two.

**Problem.** For any three subsets A, B and C of a common set, A Δ (B Δ C) = (A Δ B) Δ C.

**How the definition helps.** At each point, both sides have as indicator the sum of the three indicators modulo two, because that addition is associative (our own argument). Equal indicators give equal sets.

**nLab:** [symmetric difference](https://ncatlab.org/nlab/show/symmetric+difference). It says: “The term symmetric difference, however, is usually used as the addition in a Boolean ring and so interpreted as an associative operation”

**Wikipedia:** [Symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference). It says: “the indicator function (denoted here by χ) of the symmetric difference, being the XOR (or addition mod 2) of the indicator functions of its two arguments”

**Paper or page:** [Symmetric Difference is Associative](https://proofwiki.org/wiki/Symmetric_Difference_is_Associative). It says: “Symmetric difference is associative”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence relations must state reflexivity, which symmetry and transitivity do not give

**Remember:** Reflexive means every element sits in its own class.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 08A02. arXiv math.LO. Level 1: early undergraduate.

**Definition.** An equivalence relation on a set S is reflexive (x R x for every x), symmetric and transitive. Reflexivity puts each x in its own class, the set of all y with x R y.

**Problem.** Each element lies in its own equivalence class. So no class is empty and the classes cover S.

**How the definition helps.** Since x lies in its own class, the classes cover S and none is empty. Symmetry and transitivity alone do not give this: on {0, 1}, the relation with only (1, 1) is symmetric and transitive, but the class of 0 is empty (our own check).

**Paper or page:** [Symmetric and Transitive therefore Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_therefore_Reflexive), [Symmetric and Transitive Relation is not necessarily Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_Relation_is_not_necessarily_Reflexive), [Equivalence Class is not Empty](https://proofwiki.org/wiki/Equivalence_Class_is_not_Empty). It says: “Unless it is the case that ∀x ∈ S: ∃y ∈ S: x ℛ y, it is not necessarily the case that also y ℛ x, and so the reasoning does not follow.”

**Sources:**

- [ProofWiki, Symmetric and Transitive therefore Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_therefore_Reflexive)
- [ProofWiki, Symmetric and Transitive Relation is not necessarily Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_Relation_is_not_necessarily_Reflexive)
- [ProofWiki, Equivalence Class is not Empty](https://proofwiki.org/wiki/Equivalence_Class_is_not_Empty)

### Fiber classes identify the quotient of a domain with its image

**Remember:** One distinct output gives one class of inputs.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The fiber of a value is the set of inputs that give it. The quotient of the domain has the nonempty fibers as its elements, one for each value in the image.

**Problem.** Sending each fiber to its output pairs every element of the quotient with exactly one element of the image, and vice versa.

**How the definition helps.** Each value in the image has exactly one nonempty fiber, so sending a fiber to its value is a bijection. These fibers are the usual classes, since two inputs share a class exactly when they give the same output (our own account).

**Paper or page:** [Constructive semigroups with apartness -- a state of the art](https://arxiv.org/abs/2304.07290). It says: “If f is surjective, then φ is a bijection, i.e. we have T ≅ S/ker f.”

**Sources:** none listed. No primary source with a working link was found.

### Flat tuples let Cartesian products be regrouped without changing coordinates

**Remember:** Keep the coordinate labels and forget the parentheses.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A tuple is a function from coordinate labels to values. Tuples on disjoint label sets combine by joining these functions into one, not by nesting them as ordered pairs.

**Problem.** Combining three blocks of labeled coordinates yields the same tuples in either grouping. Each of the usual nested Cartesian products is in bijection with this set of tuples.

**How the definition helps.** Joining functions takes the union of their sets of labeled pairs, and union is associative, so both groupings give the same tuples (our own construction). Restricting to each block and pairing in order recovers either nested product.

**Wikipedia:** [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product). It says: “If a tuple is defined as a function on {1, 2, ..., n}”

**Paper or page:** [Cartesian Product is not Associative](https://proofwiki.org/wiki/Cartesian_Product_is_not_Associative). It says: “A × (B × C) ≠ (A × B) × C”

**Sources:** none listed. No primary source with a working link was found.

### Indicators split across disjoint unions

**Remember:** Choose the indicator on each piece independently.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Represent a subset by its indicator, the function that is 1 on the subset and 0 off it. On a disjoint union, such a function is the same as one function on each part.

**Problem.** The subsets of a disjoint union correspond one-to-one to pairs of subsets of its two parts.

**How the definition helps.** Restricting the indicator to the two parts gives the pair of subsets, and because the parts are disjoint any two indicators glue to one (our own proof). The points with value 1 recover the subset.

**nLab:** [characteristic function](https://ncatlab.org/nlab/show/characteristic+function). It says: “that takes a in X to the truth value of the statement that a ∈ U.”

**Paper or page:** [Bijection between Power Set of Disjoint Union and Cartesian Product of Power Sets](https://proofwiki.org/wiki/Bijection_between_Power_Set_of_Disjoint_Union_and_Cartesian_Product_of_Power_Sets). It says: “Then there exists a bijection between 𝒫(S ∪ T) and (𝒫S) × (𝒫T).”

**Sources:** none listed. No primary source with a working link was found.

### Injections preserve image intersections

**Remember:** An output shared by two images has the same input in both sets.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A function is injective when each output has at most one input, so an output reached from both A and B comes from a single point of A ∩ B. Here the image of a set is the set of outputs reached from it.

**Problem.** A function preserves every intersection of two sets under direct image exactly when it is injective.

**How the definition helps.** Injectivity gives f\[A\] ∩ f\[B\] ⊆ f\[A ∩ B\], and the other inclusion always holds. If two distinct inputs share an output, their singletons are disjoint but their images overlap, as squaring sends −1 and 1 to 1 (our own example).

**Paper or page:** [Image of Intersection under Injection](https://proofwiki.org/wiki/Image_of_Intersection_under_Injection). It says: “∀ A, B ⊆ S: f\[A ∩ B\] = f\[A\] ∩ f\[B\]”

**Sources:** none listed. No primary source with a working link was found.

### Integers as classes of pairs of naturals inherit their laws from ℕ

**Remember:** Read the pair (x, y) as x − y, but never subtract.

*True by definition. Confidence: medium.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 20M14. arXiv math.LO, math.GR. Level 1: early undergraduate.

**Definition.** An integer is a class of pairs (a, b) of natural numbers, including 0, read as a − b, where (a, b) and (c, d) are equivalent exactly when a + d = c + b. Addition adds pairs coordinate by coordinate.

**Problem.** Addition of pairs gives a well-defined operation on the classes, and the result is a group that contains the natural numbers.

**How the definition helps.** Each law reduces to an equation between natural numbers, with no subtraction (our own check). Adding the equations for equivalent representatives shows that sums are equivalent, and associativity holds coordinate by coordinate (our own check). \[(0, 0)\] is the identity, \[(b, a)\] is the inverse of \[(a, b)\], and n ↦ \[(n, 0)\] is injective and preserves sums.

**Paper or page:** [Integer Addition is Well-Defined](https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined), [Inverse Completion of Natural Numbers](https://proofwiki.org/wiki/Inverse_Completion_of_Natural_Numbers). It says: “(x₁, y₁) ⊠ (x₂, y₂) ⟺ x₁ + y₂ = x₂ + y₁”

**Sources:**

- [ProofWiki, Integer Addition is Well-Defined](https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined)
- [ProofWiki, Inverse Completion of Natural Numbers](https://proofwiki.org/wiki/Inverse_Completion_of_Natural_Numbers)

### Kuratowski's definition reduces ordered pairs, and so relations, to sets

**Remember:** The first entry sits in both sets.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Kuratowski (1921) defined the ordered pair as (a, b) = {{a}, {a, b}}. The first entry a lies in both members, and b is the other element, if there is one.

**Problem.** With this definition, (a, b) = (c, d) if and only if a = c and b = d.

**How the definition helps.** The intersection of the members is {a} and their union is {a, b}, so a pair determines a and then b (our own proof). If the union contains only a, then b = a.

**Wikipedia:** [Ordered pair](https://en.wikipedia.org/wiki/Ordered_pair). It says: “This can be done in several ways and has the advantage that existence and the characteristic property can be proven from the axioms that define the set theory.”

**Sources:**

- [Kuratowski, C. (1921). Sur la notion de l'ordre dans la Théorie des Ensembles. Fundamenta Mathematicae 2, 161–171.](https://doi.org/10.4064/fm-2-1-161-171)

### Mapping sets of possible outputs makes relation composition associative

**Remember:** Send the whole set of possible outputs into the next rule.

*True by definition. Confidence: medium.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Treat a relation from A to B as a function from sets of inputs to sets of outputs, which sends a set to the union of the possible outputs of its elements. Composing relations is then composing these functions.

**Problem.** Composing three relations gives the same relation in either grouping.

**How the definition helps.** Composition of functions is associative, so regrouping changes nothing (our own proof). Two successive rules give exactly the outputs reachable through some middle value, as the usual composite requires. Applying a rule to one-element sets recovers the relation.

**Paper or page:** [Composition of Relations is Associative](https://proofwiki.org/wiki/Composition_of_Relations_is_Associative). It says: “The composition of relations is an associative binary operation:”

**Sources:** none listed. No primary source with a working link was found.

### Maps as relations make mⁿ count maps even between empty sets

**Remember:** Exactly one map leaves the empty set; none reaches it.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 05A05. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** A mapping from X to Y is a relation R ⊆ X × Y that relates each x in X to exactly one y in Y. When X is empty, the empty relation meets this condition vacuously.

**Problem.** For all m, n ≥ 0, including empty sets, there are exactly mⁿ mappings from an n-element set to an m-element set.

**How the definition helps.** Each of the n inputs picks one of m outputs, so the product rule gives mⁿ (our own count). With no inputs the empty relation is the one mapping, matching m⁰ = 1. With inputs but no outputs no relation qualifies, matching 0ⁿ = 0.

**Paper or page:** [Empty Mapping to Empty Set is Bijective](https://proofwiki.org/wiki/Empty_Mapping_to_Empty_Set_is_Bijective), [Empty Mapping is Injective](https://proofwiki.org/wiki/Empty_Mapping_is_Injective), [Relation to Empty Set is Mapping iff Domain is Empty](https://proofwiki.org/wiki/Relation_to_Empty_Set_is_Mapping_iff_Domain_is_Empty), [Cardinality of Set of All Mappings from Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_from_Empty_Set). It says: “Let ν: ∅ → ∅ be an empty mapping. Then ν is a bijection.”

**Sources:**

- [ProofWiki, Empty Mapping to Empty Set is Bijective](https://proofwiki.org/wiki/Empty_Mapping_to_Empty_Set_is_Bijective)
- [ProofWiki, Empty Mapping is Injective](https://proofwiki.org/wiki/Empty_Mapping_is_Injective)
- [ProofWiki, Relation to Empty Set is Mapping iff Domain is Empty](https://proofwiki.org/wiki/Relation_to_Empty_Set_is_Mapping_iff_Domain_is_Empty)
- [ProofWiki, Cardinality of Set of All Mappings from Empty Set](https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings_from_Empty_Set)

### Quotient maps use any representative

**Remember:** To give a class a value, give every member the same value.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A quotient map q from S onto Q sends equivalent elements to the same image, and every function f on S that is constant on classes factors uniquely as f = g ∘ q. So a function on Q is the same as a function on S that gives all members of a class one value.

**Problem.** The set of equivalence classes satisfies this definition when q sends each element to its class.

**How the definition helps.** Take Q as the set of classes and q sending each element to its class (our own verification). Define g on a class as f at any member: constancy makes this independent of the member, and since every class has a member, g is unique.

**nLab:** [quotient set](https://ncatlab.org/nlab/show/quotient+set). It says: “two elements are now considered equal if in S they were merely equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Reading sets as truth tests gives De Morgan’s laws

**Remember:** Not every means at least one fails, and none means all fail.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Identify a subset of a fixed set U with its yes-or-no membership test. Union asks whether at least one test says yes, intersection asks whether every test says yes, and complement reverses the answer.

**Problem.** For any family of subsets of U, the complement of its intersection is the union of the complements. The complement of its union is the intersection of the complements.

**How the definition helps.** Negating “every test passes” gives “at least one fails”, and negating “at least one passes” gives “every test fails”. Equal membership tests describe equal sets, so the laws follow (our own proof).

**Paper or page:** [De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Intersection](https://proofwiki.org/wiki/De_Morgan's_Laws_(Set_Theory)/Set_Complement/Family_of_Sets/Complement_of_Intersection), [De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Union](https://proofwiki.org/wiki/De_Morgan's_Laws_(Set_Theory)/Set_Complement/Family_of_Sets/Complement_of_Union). It says: “be a family of sets, all of which are subsets of a universal set 𝕌.”

**Sources:** none listed. No primary source with a working link was found.

### Reversing a function graph tests for a two-sided inverse

**Remember:** Turn the arrows around and check for one arrow per input.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Reverse every pair (a, f(a)) in the graph of f from A to B. A two-sided inverse is a function from B to A that undoes f in both orders, and its graph can only be this reversed relation.

**Problem.** A function has a two-sided inverse exactly when every element of B occurs once as the first entry of a reversed pair.

**How the definition helps.** The reversed relation is a function on B exactly when each b occurs once as a first entry: at least once so that the inverse has an output, and at most once so that it is unique (our own test). Following a pair and then its reverse returns the starting value in either order.

**Paper or page:** [Bijective Relation has Left and Right Inverse](https://proofwiki.org/wiki/Bijective_Relation_has_Left_and_Right_Inverse), [Bijection iff exists Mapping which is Left and Right Inverse](https://proofwiki.org/wiki/Bijection_iff_exists_Mapping_which_is_Left_and_Right_Inverse). It says: “Let ℛ⁻¹ be the inverse relation of ℛ.”

**Sources:** none listed. No primary source with a working link was found.

### Tags let maps on overlapping sets combine without conflict

**Remember:** The label tells you which rule to use.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** The disjoint union of an indexed family consists of the pairs (i, x) with x in the i-th set, so each element carries a label saying which set it came from. An element shared by two sets becomes two different pairs.

**Problem.** Suppose each set in the family has a function to the same target. Exactly one function on the disjoint union agrees with each given function on its labeled copy.

**How the definition helps.** Each pair names exactly one function, so apply that function to its second entry. On an ordinary union, two functions sending a shared element to 0 and 1 cannot be combined (our own example).

**nLab:** [disjoint union](https://ncatlab.org/nlab/show/disjoint+union). It says: “the set of all (ordered) pairs (i,a) with i in the index set I and a in Aᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Taking the empty intersection as the whole set keeps intersection order-reversing

**Remember:** Fewer sets to meet means a bigger intersection, and none gives everything.

*Makes the theorem clean to state or prove.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 03B10. arXiv math.LO. Level 1: early undergraduate.

**Definition.** The intersection of a family 𝓕 of subsets of U is the set of points of U that belong to every member of 𝓕. Each member is a requirement, so the empty family imposes none and its intersection is all of U.

**Problem.** For all families 𝓕 ⊆ 𝓖 of subsets of U, the empty family included, ⋂𝓖 ⊆ ⋂𝓕.

**How the definition helps.** A point meeting every requirement in 𝓖 meets every requirement in the smaller family 𝓕 (our own argument). This includes an empty 𝓕.

**Paper or page:** [Intersection is Decreasing](https://proofwiki.org/wiki/Intersection_is_Decreasing), [Intersection of Empty Set](https://proofwiki.org/wiki/Intersection_of_Empty_Set). It says: “Then 𝓕 ⊆ 𝓖 ⟹ ⋂𝓖 ⊆ ⋂𝓕, where by convention ⋂∅ = U.”

**Sources:**

- [ProofWiki, Intersection is Decreasing](https://proofwiki.org/wiki/Intersection_is_Decreasing)
- [ProofWiki, Intersection of Empty Set](https://proofwiki.org/wiki/Intersection_of_Empty_Set)

### The cancellation tests make injections and surjections compose

**Remember:** Cancel one map at a time.

*True by definition. Confidence: medium.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A function f is left cancellable when f ∘ u = f ∘ v forces u = v, and right cancellable when u ∘ f = v ∘ f forces u = v. Injections are exactly the left cancellable functions, and surjections exactly the right cancellable ones.

**Problem.** A composite of two injections is injective. A composite of two surjections is surjective.

**How the definition helps.** If two functions cancel, their composite cancels in two steps, one function at a time (our own proof). Equal outputs having equal inputs gives left cancellation, and reaching every target gives right cancellation. Conversely, maps from a one-element set detect a failure of injectivity, and two maps that differ only at a missed target detect a failure of surjectivity.

**Paper or page:** [Surjection iff Right Cancellable/Sufficient Condition](https://proofwiki.org/wiki/Surjection_iff_Right_Cancellable/Sufficient_Condition), [Injection iff Left Cancellable/Sufficient Condition](https://proofwiki.org/wiki/Injection_iff_Left_Cancellable/Sufficient_Condition). It says: “Then f is a surjection.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the natural numbers as a closure makes induction true by definition

**Remember:** The smallest closed set lies inside every closed set, so induction holds.

*True by definition.* MSC 03F30 (First-order arithmetic and fragments), 03E20. arXiv math.LO. Level 1: early undergraduate.

**Definition.** A Dedekind algebra is a set N with an element o and an injective map s from N to N whose values never equal o. N must be the closure of o under s, the smallest set that contains o and is closed under s.

**Problem.** Arithmetical induction: any set that contains o and is closed under s on N contains all of N.

**How the definition helps.** The smallest such set lies inside every subset of N that contains o and is closed under s. For X as in the theorem, X ∩ N is such a subset (our own argument), so N ⊆ X.

**Paper or page:** [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Let N, s, o comprise a Dedekind algebra. Then for any set X: if o ∈ X and (∀n ∈ N ∩ X) s(n) ∈ X, then N ⊆ X.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Brackets in the definition of formula make every formula parse uniquely

**Remember:** Every bracket closes once, so every formula reads one way only.

*Rules out counterexamples.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Formulas are the strings built from propositional variables, ⊥ and ⊤ by two rules: from B form ¬B, and from B and C form (B ◦ C), where ◦ is ∧, ∨, → or ↔︎. Each binary step adds its own pair of brackets.

**Problem.** Unique readability: every formula is built by these rules in exactly one way. So definitions by recursion on formulas, such as the truth value under a valuation, are well defined.

**How the definition helps.** The brackets ensure that no formula is a proper prefix of another, so the first operand, then the connective and the second operand, are fixed (our own argument). Induction then fixes the whole parse. Without brackets, p ∧ q ∨ r has two parses (our own example).

**Paper or page:** [Open Logic Project: Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “No proper initial segment of a formula is a formula.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Discharging an assumption makes the deduction theorem one rule

**Remember:** Close the assumption and write an implication.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In natural deduction, the rule for introducing A → B closes a proof of B from a temporary assumption A, which the proof may leave unused. So moving A from the premises into an implication is a single rule.

**Problem.** In natural deduction, B is provable from given premises and A exactly when A → B is provable from the premises alone.

**How the definition helps.** The introduction rule gives the forward direction in one step, and for the reverse, A and A → B give B (our own step). In a Hilbert proof system the same theorem needs an induction on the proof of B.

**nLab:** [deduction theorem](https://ncatlab.org/nlab/show/deduction+theorem). It says: “it is the introduction rule for the implication/function type in natural deduction.”

**Paper or page:** [First Order Logic: Axiomatic Deduction](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Γ ∪ {A} ⊢ B if and only if Γ ⊢ A → B.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal consistent sets supply satisfying truth assignments

**Remember:** A maximal consistent set supplies a whole truth assignment.

*Rules out counterexamples.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In classical propositional natural deduction, a set of formulas is consistent if no contradiction follows from it. It is maximal consistent if it is consistent and adding any missing formula makes it inconsistent. A maximal consistent set gives a truth assignment: a letter is true exactly when it belongs to the set.

**Problem.** Every consistent set of propositional formulas has a truth assignment that makes all its formulas true.

**How the definition helps.** Lindenbaum's lemma extends any consistent set to a maximal consistent one. The truth lemma shows that a formula is true under its assignment exactly when it belongs to the set, so all the original formulas are true. For the set {p ∨ q}, which is not maximal, the same rule makes both letters false (our own example).

**Paper or page:** [Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If Γ is consistent then Γ is satisfiable.”

**Sources:** none listed. No primary source with a working link was found.

### Proof trees let one proof replace an assumption

**Remember:** Replace an open assumption with its proof.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In propositional natural deduction, a proof is a finite tree of rule applications, with each closed assumption marked by the rule that closes it. The unmarked leaves are the open assumptions, so a proof of A can be grafted onto any open leaf A.

**Problem.** In propositional natural deduction, suppose one set of premises proves A and another set together with A proves B. The union of the two sets proves B.

**How the definition helps.** Replacing each open leaf A by a copy of a proof of A, with fresh discharge labels, keeps every rule valid (our own construction). The only open assumptions left come from the two original sets. In a numbered list of proof lines, the same step also needs the line references updated.

**nLab:** [natural deduction](https://ncatlab.org/nlab/show/natural+deduction). It says: “we should annotate each bracket somehow to indicate which rule discharged that assumption.”

**Paper or page:** [First Order Logic: Natural Deduction](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If Γ ⊢ A and {A} ∪ Δ ⊢ B, then Γ ∪ Δ ⊢ B.”

**Sources:** none listed. No primary source with a working link was found.

### Valuations as points of a compact product space give propositional compactness

**Remember:** A formula tests only finitely many coordinates.

*True by definition.* MSC 03B05 (Classical propositional logic), 54B10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Treat valuations as points of the product of two-point discrete spaces, one for each propositional variable. This space is compact by Tychonoff's theorem, and each formula depends on only finitely many coordinates.

**Problem.** A set of propositional formulas has a satisfying valuation if every finite subset has one.

**How the definition helps.** The valuations that satisfy one formula form a closed set, because the formula uses only finitely many variables (our own argument). Finite satisfiability says that every finite family of these closed sets meets, so by compactness they all share a point, which satisfies every formula. Wikipedia names Tychonoff's theorem as the source of propositional compactness.

**Wikipedia:** [Compactness theorem](https://en.wikipedia.org/wiki/Compactness_theorem). It says: “The compactness theorem for the propositional calculus is a consequence of Tychonoff's theorem”

**Sources:** none listed. No primary source with a working link was found.

### Defining consequence by finite proofs makes compactness follow from completeness

**Remember:** A finite proof can use only finitely many premises.

*True by definition.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A formal proof is a finite list of steps, so it uses only finitely many premises. A sentence is a proof-theoretic consequence of premises if a formal proof derives it, and a semantic consequence if it is true in every model of them.

**Problem.** If a first-order sentence is a semantic consequence of a set of premises, it is a semantic consequence of some finite subset.

**How the definition helps.** Completeness turns a semantic consequence into a formal proof, which uses only finitely many premises. Soundness makes the sentence a semantic consequence of those premises (our own wording).

**nLab:** [compactness theorem](https://ncatlab.org/nlab/show/compactness+theorem). It says: “the essential finitude of the notion of formal proof”

**Sources:** none listed. No primary source with a working link was found.

### Fresh parameters make universal introduction sound

**Remember:** An arbitrary object needs a name with no prior commitments.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic), 03C07. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In natural deduction, universal introduction infers ∀x P(x) from P(c) only when c is a fresh name, one that occurs neither in the open assumptions nor in P(x). Such a name carries no information, so it can stand for any object.

**Problem.** If the open assumptions entail P(c) for a fresh name c, they also entail ∀x P(x). Thus universal introduction preserves truth from the open assumptions.

**How the definition helps.** Changing the object that c names leaves the open assumptions and P(x) unchanged, so by the substitution lemma P(x) holds at every object (our own argument). Without freshness, assume P(c) in a two-object structure where only c satisfies P: the assumption holds but ∀x P(x) fails.

**Paper or page:** [First Order Logic: Natural Deduction](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If c is a constant not occurring in Γ or A(x) and Γ ⊢ A(c), then Γ ⊢ ∀x A(x).”

**Sources:** none listed. No primary source with a working link was found.

### Nonempty domains keep the classical laws of logic valid

**Remember:** Classical logic assumes that at least one thing exists.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic), 03B60. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In standard first-order semantics, every structure has a domain D with at least one element, and individual variables range over D.

**Problem.** With nonempty domains, ∀x φ → ∃x φ and ∃x (x = x) are valid. If x is not free in ψ, then (∀x φ) ∧ ψ is equivalent to ∀x (φ ∧ ψ), a move used to put formulas in prenex form.

**How the definition helps.** Any element of D witnesses x = x and turns a universal truth into an existential witness (our own argument). A ψ without free x has one truth value at every choice of x, and some choice exists. In an empty domain the first two laws fail, and a false ψ breaks the third.

**Wikipedia:** [Empty domain](https://en.wikipedia.org/wiki/Empty_domain), [Free logic](https://en.wikipedia.org/wiki/Free_logic), [Prenex normal form](https://en.wikipedia.org/wiki/Prenex_normal_form). It says: “In traditional and classical logic, domains are restrictedly non-empty in order that certain theorems be valid.”

**Sources:**

- [Quine, W. V. (1951). Mathematical Logic, revised edition. Harvard University Press.](https://doi.org/10.4159/9780674042469)
- [Hailperin, T. (1957). A theory of restricted quantification I. Journal of Symbolic Logic 22, 19–35.](https://doi.org/10.2307/2964055)

### Witness functions remove existential quantifiers without losing satisfiability

**Remember:** Name the witness as a function of earlier choices.

*Makes the theorem clean to state or prove.* MSC 03B10 (Classical first-order logic), 03C07. arXiv math.LO. Level 2: later undergraduate.

**Definition.** After all quantifiers are moved to the front, a Skolem function names the witness for an existential variable as a function of the earlier universal variables. Each witness gets a fresh function symbol, or a fresh constant when no universal variable comes before it.

**Problem.** Every first-order sentence can be converted to a sentence with only universal quantifiers, all at the front. The new sentence uses an expanded language and is satisfiable exactly when the original is.

**How the definition helps.** The new symbols name the witnesses, so the existential quantifiers can be dropped. Given a model of the original, choose a witness for each tuple of earlier values to interpret the symbols (our own proof). A model of the new sentence supplies witnesses by evaluating the added symbols.

**Wikipedia:** [Skolem normal form](https://en.wikipedia.org/wiki/Skolem_normal_form). It says: “it is satisfiable if and only if the original one is satisfiable.”

**Sources:** none listed. No primary source with a working link was found.

### Prime theories as worlds make the canonical intuitionistic model respect disjunction

**Remember:** Kripke disjunction needs a witness, so the worlds must be prime.

*Rules out counterexamples.* MSC 03B20 (Subsystems of classical logic (including intuitionistic logic)), 03F55. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A prime theory is consistent, contains everything it proves, and contains B or C whenever it contains B ∨ C. The canonical Kripke model takes these theories as worlds, ordered by inclusion, with an atom true at a world exactly when the world contains it.

**Problem.** Truth lemma: in the Kripke model whose worlds are the prime sets, a formula is true at a world exactly when that world's set proves it. With Lindenbaum's lemma this gives completeness of intuitionistic logic: if Γ does not prove A, some world makes Γ true and A false.

**How the definition helps.** Primeness is exactly the disjunction step of the truth lemma, since a Kripke disjunction needs a true disjunct (our own argument). The prime extension lemma gives the implication step and extends Γ to a prime world that omits A. A closed theory generated by p ∨ q contains neither disjunct, so it could not serve as a world.

**Paper or page:** [Open Logic Project: Intuitionistic Logic: Soundness Completeness](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Intuitionistic Logic: Soundness Completeness](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If Γ ⊬ A, there is a Γ\* ⊇ Γ such that Γ\* is prime and Γ\* ⊬ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Church numerals express addition and multiplication by composing iterations

**Remember:** Run f n times, then m more to add; nest to multiply.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO. Level 2: later undergraduate.

**Definition.** The Church numeral for n is λf x. f(f(⋯(f x))), the function that applies f to x n times.

**Problem.** For Church numerals m and n, the term λf x. m f (n f x) represents their sum. The term λf x. m (n f) x represents their product.

**How the definition helps.** Church numerals already contain the iteration that arithmetic needs. The sum applies f n times and then m more times, and the product repeats the n-fold iterate m times (our own). The cost is the predecessor, which a Church numeral does not expose directly (our own).

**Wikipedia:** [Mogensen–Scott encoding](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding), [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “Church numerals, on the other hand, already embody the primitive recursion and perform the folding / looping on their own”

**Paper or page:** [Open Logic Project: Lambda Calculus: Lambda Definability](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Multiplication is lambda definable by the term Mult ≡ λab. λfx. a (b f) x”

**Sources:** none listed. No primary source with a working link was found.

### Church numerals make a product m blocks of n applications

**Remember:** Repeat m times a step that itself repeats n times.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus). arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** The Church numeral for n is the operation that applies a function n times. The Church product of m and n is λf. m (n f), which repeats the n-fold iterate m times.

**Problem.** The Church product of the numerals for m and n is the Church numeral for m × n.

**How the definition helps.** By definition the product applies f in m blocks of n applications. Induction on m shows that m blocks of n applications equal m × n applications.

**Wikipedia:** [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “The higher-order function that represents natural number n is a function that maps any function f to its n-fold composition.”

**Sources:** none listed. No primary source with a working link was found.

### Church-encoded lists make the fold of an append hold by definition

**Remember:** The left list starts where the right list finishes.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** A Church list is its own right fold: given a combining function c and a seed n, the empty list returns n, and x prepended to a tail returns c applied to x and the tail's fold. Append is append(l, r) = λc n. l c (r c n), so the right list's fold becomes the left list's seed.

**Problem.** Folding an appended list equals folding the left list with the folded right list as its initial result.

**How the definition helps.** Folding a Church list is applying it, so the equation is the definition of append, which Wikipedia gives. For ordinary lists the same equation needs induction on the left list (our own comparison).

**Wikipedia:** [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “Since Church encoded list is its own folding function, folding it just means applying that function to the supplied arguments.”

**Sources:** none listed. No primary source with a working link was found.

### Scott numerals give the predecessor in a fixed number of reductions

**Remember:** The successor case receives the predecessor itself.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 2: later undergraduate.

**Definition.** A Scott numeral takes a zero handler and a successor handler: zero is Z = λz s. z, and the successor of n is λz s. s n. So a successor hands its stored predecessor n straight to the successor handler.

**Problem.** For an input already in Scott numeral form, the predecessor takes at most four function-application reductions to return the encoded result.

**How the definition helps.** The predecessor is therefore λn. n Z I with I = λm. m (our own calculation). On a successor, one reduction inserts the numeral, two select and apply the handler, and one removes I. On zero, three reductions return Z.

**Wikipedia:** [Mogensen–Scott encoding](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding). It says: “The key difference is that Scott's handler's argument is the number's own predecessor Scott numeral, unprocessed, whereas Church's folding / looping function's argument is the result of folding / looping over its predecessor.”

**Sources:** none listed. No primary source with a working link was found.

### Working up to renaming of bound variables makes substitution always defined

**Remember:** Rename bound variables first, and substitution never captures.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** Substituting R for y in a lambda term M is allowed only when no free variable of R falls under a λ in M that binds it. Terms are α-equivalent when they differ only by renaming bound variables, as λx.x and λz.z do, so the λs of M can always be renamed away from R (our own).

**Problem.** For any M, R and y, some α-equivalent M′ and R′ make the substitution defined, and any two such results are α-equivalent. So substitution is a total operation on α-equivalence classes.

**How the definition helps.** Renaming the bound variables of M away from the free variables of R removes every capture (our own). A lemma in the Open Logic text shows that α-equivalent inputs give α-equivalent results, so the choice of renaming does not matter. Without renaming, putting x for y in λx.y would give the identity λx.x and change the meaning (our own example).

**Paper or page:** [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “For any M, R, and y, there exists a pair of M′ and R′ such that M′ ≡α M, R ≡α R′ and M′\[R′/y\] is defined.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Filtrations through subformulas give modal logic K the finite model property

**Remember:** Merge worlds that the subformulas cannot tell apart; the model becomes finite.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A filtration through a finite subformula-closed set Γ merges worlds that agree on every formula in Γ and keeps the truth values of atoms in Γ. It contains every edge induced by an original edge, and it allows an edge from class C to class D only if A holds throughout D whenever □A ∈ Γ holds throughout C.

**Problem.** The basic modal logic K has the finite model property: every satisfiable formula has a finite model. The Open Logic text shows the same for S5.

**How the definition helps.** The filtration lemma keeps the truth of every formula in Γ, and a formula with n subformulas gives at most 2ⁿ classes (our own count). For K the induced edges alone form a filtration. For S5 their equivalence closure is also a filtration, because each □A in Γ keeps its truth value along every path and reflexivity then gives A (our own argument).

**Paper or page:** [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M\* is a filtration of M through Γ, then for every A ∈ Γ and w ∈ W, we have M, w ⊩ A if and only if M\*, \[w\] ⊩ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### The canonical model makes completeness of modal logic K immediate

**Remember:** Worlds are maximal consistent sets, and truth is membership.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** The canonical model of K has the maximal K-consistent sets of formulas as worlds. World w sees v when v contains every A with □A in w, and an atom holds at w when w contains it.

**Problem.** Completeness: every formula valid in all Kripke frames is provable in K, the smallest normal modal logic.

**How the definition helps.** The canonical truth lemma shows that a formula holds at a world exactly when the world contains it. If K does not prove φ, Lindenbaum’s lemma extends {¬φ} to a maximal K-consistent set, and φ fails at that world (our own argument).

**Wikipedia:** [Kripke semantics](https://en.wikipedia.org/wiki/Kripke_semantics). It says: “The main application of canonical models are completeness proofs. Properties of the canonical model of K immediately imply completeness of K with respect to the class of all Kripke frames.”

**Sources:**

- [D. Makinson, On some completeness theorems in modal logic, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 12 (1966) 379–384](https://doi.org/10.1002/malq.19660120131)
- [Kripke, S. A. (1963). Semantical analysis of modal logic I. Normal modal propositional calculi. Zeitschrift für mathematische Logik und Grundlagen der Mathematik 9, 67–96.](https://doi.org/10.1002/malq.19630090502)

### Back-and-forth families turn two enumerations into an isomorphism

**Remember:** Each finite match can grow to include any object on either side.

*True by definition.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A back-and-forth family is a nonempty set of bijections between finite subsets of two structures, each preserving and reflecting all basic formulas. Every map in the family extends, inside the family, to include any chosen object on either side.

**Problem.** Two countable structures with such a family are isomorphic.

**How the definition helps.** The two extension rules let one build an isomorphism one object at a time (our own construction). Alternate between enumerations of the two structures, extending the current map to include the next object. The union is a bijection, and it respects each basic fact because that fact involves only finitely many objects.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M ≅ₚ N and M and N are enumerable, then M ≅ N.”

**Sources:** none listed. No primary source with a working link was found.

### Capture-free substitution preserves the meaning of term replacement

**Remember:** Do not let a quantifier bind a letter you insert.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Capture-free substitution replaces the free occurrences of x by a term t, after renaming any bound variable that would bind a variable of t. The new name must be absent from both the formula and t.

**Problem.** Evaluating a formula after capture-free substitution of t for x gives the same truth value as evaluating the original with x assigned the value of t.

**How the definition helps.** Renaming keeps every variable of t tied to its original value, so an induction on formulas goes through (our own proof). Our own counterexample replaces x by y in ∀y (x = y) without renaming. The result ∀y (y = y) is true, but the original is false on any two-element set.

**Paper or page:** [First Order Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Let M be a structure, A a formula, t′ a term, and s a variable assignment.”

**Sources:** none listed. No primary source with a working link was found.

### Elementary chains preserve truth at their union

**Remember:** An elementary stage already has any witness it needs.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A chain of structures is elementary when each stage is an elementary substructure of every later stage, agreeing with it on all first-order formulas with parameters from the earlier stage.

**Problem.** In an elementary chain, every stage is an elementary substructure of the union.

**How the definition helps.** Induction on formulas shows that each stage agrees with the union (our own argument). For an existential formula, any witness in the union lies in some later stage, and elementarity carries the truth back. Our own counterexample is the ordinary chain of initial segments {0, …, n} of ℕ, whose stages have greatest elements while the union does not.

**nLab:** [elementary embedding](https://ncatlab.org/nlab/show/elementary+embedding). It says: “it is an injection f: M → N such that for any first-order formula φ written in the language of σ”

**Sources:**

- [Alfred Tarski and Robert L. Vaught, Arithmetical extensions of relational systems (1957), Theorem 1.9](https://www.numdam.org/item/CM_1956-1958__13__81_0/)

### Existential quantifiers keep projections of definable sets definable

**Remember:** To drop a coordinate, ask whether some value fits.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A definable set is the set of tuples that satisfy some first-order formula in a fixed structure, where the formula may use quantifiers and not only basic facts joined by AND, OR and NOT. So if φ(x, y) defines a set, ∃y φ(x, y) defines its projection.

**Problem.** Dropping one coordinate from all tuples in a definable set gives another definable set.

**How the definition helps.** The existential quantifier asks whether some value of the dropped coordinate completes the tuple. Our own counterexample is a graph with one edge and one isolated vertex, in the language of equality and adjacency. Projecting the edge relation gives the vertices with a neighbor, but every quantifier-free test on x alone gives the same answer at every vertex.

**nLab:** [definable set](https://ncatlab.org/nlab/show/definable+set). It says: “evaluates to a truth value on each a = (a₁, …, aₙ) ∈ Mⁿ”

**Paper or page:** [First Order Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “M ⊨ ∃x B(x)\[s\] iff there is an x-variant s′ of s so that M ⊨ B(x)\[s′\].”

**Sources:** none listed. No primary source with a working link was found.

### Finite size bounds let compactness produce an infinite model

**Remember:** Infinite means at least n distinct objects, for every n.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Infinitude is expressed by a set of first-order sentences, not by one sentence. For each positive integer n, one sentence says that there are at least n pairwise distinct objects.

**Problem.** A first-order theory with equality and arbitrarily large finite models has an infinite model.

**How the definition helps.** Any finite set of these sentences holds in a large enough finite model of the theory (our own argument). Compactness then gives one model of the theory satisfying all of them, and that model is infinite.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If a set Γ of sentences has arbitrarily large finite models, then it has an infinite model.”

**Sources:** none listed. No primary source with a working link was found.

### Finite size bounds show why infinitude needs infinitely many axioms

**Remember:** No finite list of lower bounds forces infinity.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** With equality, infinitude is expressed by an infinite set of sentences. For each positive integer n, one sentence says that there are at least n pairwise distinct objects.

**Problem.** No single first-order sentence, or finite list of sentences, characterizes infinite structures in a language with equality.

**How the definition helps.** Suppose a sentence A holds exactly in the infinite structures (our own argument). Then every finite part of ¬A plus the size sentences holds in a large finite structure, so compactness gives an infinite model of ¬A. A finite list of axioms reduces to one sentence by joining them with AND.

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

**Definition.** An isomorphism is a bijection that respects the named constants and functions and both preserves and reflects every relation. A bijective homomorphism only preserves relations.

**Problem.** Isomorphic structures satisfy the same first-order sentences.

**How the definition helps.** Matching each object and each quantifier choice through the bijection shows, by induction on formulas, that every formula keeps its truth value (our own argument). Our own counterexample is the identity map from an edgeless two-vertex graph to one with an edge. It is a bijective homomorphism, but the sentence saying an edge exists separates the two graphs.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M ≅ M′ then M ≡ M′.”

**Sources:**

- [Alfred Tarski and Robert L. Vaught, Arithmetical extensions of relational systems (1957), Corollary 1.5](https://www.numdam.org/item/CM_1956-1958__13__81_0/)

### Keeping witnesses is enough to test elementary substructures

**Remember:** For each solvable formula, keep one solution.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A substructure N of M passes the Tarski–Vaught test if, whenever a formula with parameters from N has a solution in M, some solution lies in N. Truth is always checked in M.

**Problem.** A substructure is elementary, meaning it agrees on every formula with parameters from it, exactly when it keeps witnesses.

**How the definition helps.** The test supplies the existential step in an induction on formulas that compares truth in N and in M (our own proof). Atomic formulas agree by restriction, and connectives keep agreement. Conversely, an elementary N inherits every true existence statement, and its witness also works in M.

**Wikipedia:** [Elementary equivalence](https://en.wikipedia.org/wiki/Elementary_equivalence). It says: “A substructure N of M is elementary if and only if it passes the Tarski–Vaught test”

**Sources:**

- [Alfred Tarski and Robert L. Vaught, Arithmetical extensions of relational systems (1957), Theorem 1.10](https://www.numdam.org/item/CM_1956-1958__13__81_0/)

### Naming every object pins down a finite structure

**Remember:** List the facts and leave no unnamed objects.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** The characteristic sentence of a finite structure (our own construction) says that there exist objects x<sub>1</sub>, …, x<sub>n</sub>, all distinct and making up the whole domain, that satisfy every recorded fact. The facts are all values of constants and functions and, for each relation and tuple, whether it holds or fails.

**Problem.** In a finite first-order language with equality, each finite structure is characterized up to isomorphism by a single sentence.

**How the definition helps.** In any model of the sentence the witnesses give a bijection with the structure, and the recorded facts make it an isomorphism (our own construction). The finite language keeps the list of facts finite, so their conjunction is one sentence.

**nLab:** [diagram of a first-order structure](https://ncatlab.org/nlab/show/diagram+of+a+first-order+structure). It says: “adding to L new constant symbols cₘ for each m ∈ M”

**Paper or page:** [First Order Logic: Models Theories](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “is true in structure M iff the domain M contains exactly n elements.”

**Sources:**

- [Herbert B. Enderton, A Mathematical Introduction to Logic, 2nd ed. (2001), Section 2.2, Exercise 17](https://www.cs.mcgill.ca/~akroit/math/logic/Enderton%20A%20Mathematical%20Introduction%20to%20Logic.pdf)

### Negative facts make atomic diagrams describe embeddings

**Remember:** Record what fails as well as what holds.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** In a language with equality, the atomic diagram of a structure gives each object its own name. It lists every true atomic statement about the named terms and the negation of every false one.

**Problem.** A structure with these names satisfies the atomic diagram exactly when interpreting the names gives an embedding. An embedding preserves and reflects the basic facts.

**How the definition helps.** The negative facts keep distinct names on distinct objects and keep false relations false, so the map reflects basic facts. The positive facts make it preserve functions, constants and true relations. Our own counterexample uses equality alone: mapping two objects to one preserves every true equation but is not an embedding.

**nLab:** [diagram of a first-order structure](https://ncatlab.org/nlab/show/diagram+of+a+first-order+structure). It says: “into which M embeds as a substructure and elementary substructure, respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Restricting relations makes universal sentences pass to substructures

**Remember:** Keep the same facts on the remaining objects.

*Rules out counterexamples.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A substructure is a subset that contains the named constants and is closed under the functions, with the functions and relations of the larger structure restricted to it exactly.

**Problem.** If a universal sentence, one with only universal quantifiers in front of a quantifier-free formula, holds in a structure, then it holds in every substructure.

**How the definition helps.** Exact restriction keeps every quantifier-free formula true or false on each remaining tuple, so a universal sentence only checks fewer tuples and stays true. Our own counterexample deletes the edge from two adjacent vertices, and then “every two distinct vertices are adjacent” fails.

**Wikipedia:** [Model theory](https://en.wikipedia.org/wiki/Model_theory). It says: “by restricting all functions and relations in σ to the subset.”

**Sources:** none listed. No primary source with a working link was found.

### Tarski defines satisfaction for all formulas to handle free variables

**Remember:** Truth is satisfaction for formulas with no free variables.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Satisfaction is defined for all formulas relative to an assignment of objects to variables: atomic formulas by evaluation, negation and conjunction as usual, and ∀x φ when every reassignment of x satisfies φ. A sentence is true when every assignment satisfies it.

**Problem.** Truth for a quantified first-order language has a recursive definition that satisfies Convention T: each sentence is true exactly when what it asserts holds under the interpretation.

**How the definition helps.** Removing a quantifier leaves a formula with a free variable, and assignments give that formula a value, so the recursion goes through. Induction on sentences then matches each sentence’s truth condition with what it asserts (our own argument).

**Wikipedia:** [Semantic theory of truth](https://en.wikipedia.org/wiki/Semantic_theory_of_truth). It says: “Removing a quantifier from a sentence can produce a free variable, which is not a sentence and thus cannot have a truth value.”

**Sources:** none listed. No primary source with a working link was found.

### A new name above every numeral gives nonstandard arithmetic

**Remember:** One new element exceeds every ordinary numeral.

*Makes the theorem clean to state or prove.* MSC 03C62 (Models of arithmetic and set theory), 03C07. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Add to true arithmetic, the set of all first-order sentences true in ℕ, a fresh constant c and the sentences c &gt; 0, c &gt; 1, c &gt; 2, and so on.

**Problem.** Some countable model satisfies all of true arithmetic but is not isomorphic to the natural numbers.

**How the definition helps.** Every finite part holds in ℕ with c a large number, so compactness gives a model, and downward Löwenheim–Skolem makes it countable (our own argument). In that model c lies above every numeral, so no isomorphism with ℕ exists.

**Paper or page:** [Model Theory: Basics](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “There are non-standard enumerable models of true arithmetic.”

**Sources:**

- [Herbert B. Enderton, A Mathematical Introduction to Logic, 2nd ed. (2001), Section 2.6](https://www.cs.mcgill.ca/~akroit/math/logic/Enderton%20A%20Mathematical%20Introduction%20to%20Logic.pdf)

### Countability relative to a model removes Skolem's paradox

**Remember:** Countability inside a model needs an injection the model itself recognizes.

*True by definition.* MSC 03C62 (Models of arithmetic and set theory), 03C15. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A model M regards a set a as countable if M contains an injection from a into M’s own natural numbers.

**Problem.** If ZFC has a model, then by the Löwenheim–Skolem theorem it has a countable model. That model contains sets that it calls uncountable, and this is no contradiction.

**How the definition helps.** The definition asks for an injection that lies in M, and a countable M can lack one even when one exists outside. Downward Löwenheim–Skolem gives a countable model of ZFC, where some set a is uncountable in M’s sense (our own explanation). Seen from outside, a has only countably many members, but no injection that shows this lies in M.

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

**Definition.** The self-halting set consists of the program codes e for which program e halts when run on its own code e.

**Problem.** The self-halting set is undecidable, so the ordinary halting problem is undecidable too.

**How the definition helps.** Self-input makes a supposed decider answer about the very program that uses its answer (our own). The program that halts exactly when the decider says its input runs forever on itself would, on its own code, halt exactly when it runs forever (our own). A decider for ordinary halting would decide self-halting by using the same code as program and input (our own).

**Paper or page:** [Turing Machines: Undecidability, Theorem 1.5. (Unsolvability of the Halting Problem)](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “The halting problem is unsolvable, i.e., the function h is not Turing computable.”

**Sources:** none listed. No primary source with a working link was found.

### Standard tape layouts let Turing machines compose

**Remember:** Leave the tape as the next machine expects it.

*True by definition.* MSC 03D10 (Turing machines and related notions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A disciplined Turing machine keeps its left end marker and never moves past it. It halts in one designated halt state with its head on the first input cell. Its numerical output uses the same tape format as a numerical input.

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

**Definition.** Specializing a register-machine program fixes its first few inputs to given values: the new program loads those values, then runs the original instructions on the remaining inputs. Because a program code encodes the instruction list, building the new code is a computation on codes, not a run of the program (our own).

**Problem.** For fixed input counts, an algorithm takes a program code and fixed values and returns a specialized program code. The new program behaves on the remaining inputs as the original does with the fixed values supplied first.

**How the definition helps.** A prefix moves the remaining inputs to their expected cells and loads the fixed values (our own). The original instructions follow, with jump addresses shifted by the length of the prefix (our own). The coding must make these list and address operations computable (our own).

**Paper or page:** [Computability: Computability Theory, Theorem 1.1.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “For each pair of natural numbers n and m, there is a primitive recursive function sᵐₙ”

**Sources:** none listed. No primary source with a working link was found.

### The recursion theorem fixes the computed function, not the program number

**Remember:** A fixed point is a program that does the same thing as its transform.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D45. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A fixed point of a program transformation F is an index e such that programs e and F(e) compute the same partial function, with the same domain and values. Indices come from an acceptable numbering, one with universal simulation and effective specialization of parameters.

**Problem.** Every total computable transformation of programs has a fixed point. This is Rogers's theorem, a form of Kleene's second recursion theorem.

**How the definition helps.** Asking only for the same computed function, not the same index, allows fixed points even for F(e) = e + 1, which moves every index (our own example). Rogers’s fixed-point theorem supplies such an index for each total computable F in an acceptable numbering.

**Wikipedia:** [Kleene's recursion theorem](https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem). It says: “Note that the comparison of in- and outputs here is not in terms of numerical values, but in terms of their associated partial recursive functions.”

**Sources:**

- [Kleene, S. C. (1938). On notation for ordinal numbers. Journal of Symbolic Logic 3, 150–155.](https://doi.org/10.2307/2267778)

### A known member makes enumeration total without adding new values

**Remember:** Return a known member whenever the proposed output fails its check.

*Rules out counterexamples.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03D20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A set is computably enumerable if some program accepts exactly its members. A primitive recursive enumeration of it is a primitive recursive function, defined on every input, whose range is exactly the set, so every output must be a member.

**Problem.** A nonempty set of natural numbers is computably enumerable exactly when it is the range of a primitive recursive function.

**How the definition helps.** Decode the input as a pair (x, t), and return x if the program accepts x within t steps, and a fixed known member otherwise (our own). Pair decoding and bounded simulation are primitive recursive, and searching an enumeration recognizes its range (our own). The empty set has no fallback, since every total function has some output.

**Paper or page:** [Recursively Enumerable Set is Image of Primitive Recursive Function/Corollary](https://proofwiki.org/wiki/Recursively_Enumerable_Set_is_Image_of_Primitive_Recursive_Function/Corollary). It says: “Suppose S is non-empty. Then there exists a primitive recursive function f: ℕ → ℕ such that:”

**Sources:** none listed. No primary source with a working link was found.

### A uniform list keeps countable unions computably enumerable

**Remember:** One recognizer for all indices makes a fair search possible.

*Rules out counterexamples. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03D10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A sequence of sets is uniformly computably enumerable when one recognizer takes both the set number and the candidate member as input. It accepts exactly when that member is in the numbered set.

**Problem.** The union of a uniformly computably enumerable sequence of sets is computably enumerable.

**How the definition helps.** One recognizer lets a single search run over all set numbers at once (our own). At stage t, run it for t steps on each set number up to t, and accept if any run accepts (our own). Without uniformity, put {e} at index e when e is in a set B that no program recognizes, and ∅ otherwise: each set is decidable, but the union is B (our own).

**Paper or page:** [Computability: Computability Theory, Theorem 1.2.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “A set S is computably enumerable if and only if there is a computable relation R(x,y) such that S = {x ∣ ∃y R(x,y)}.”

**Sources:** none listed. No primary source with a working link was found.

### Defining enumerable sets as domains removes the empty-set exception

**Remember:** Every set where some program halts is enumerable, the empty set included.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A set S of natural numbers is computably enumerable if some partial computable function is defined exactly on S. An older definition says S is the range of a total computable function, or S is empty.

**Problem.** The intersection of two computably enumerable sets is computably enumerable. A set is computable if and only if it and its complement are computably enumerable.

**How the definition helps.** Programs recognize sets by halting, and the empty set is the domain of a program that never halts, so no exception is needed. For an intersection, run both programs and halt once both halt (our own). For a set and its complement, alternate steps of the two programs until one halts; conversely, a decider can halt on exactly one side (our own).

**Wikipedia:** [Computably enumerable set](https://en.wikipedia.org/wiki/Computably_enumerable_set). It says: “The definition of a computably enumerable set as the domain of a partial function, rather than the range of a total computable function, is common in contemporary texts.”

**Sources:**

- [Post, E. L. (1944). Recursively enumerable sets of positive integers and their decision problems. Bulletin of the American Mathematical Society 50, 284–316.](https://doi.org/10.1090/S0002-9904-1944-08111-1)

### Halting domains preserve computable enumerability under intersections and computable preimages

**Remember:** Run both programs in order and halt only if both finish.

*True by definition. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A set of natural numbers is computably enumerable if it is the domain of a partial computable function, that is, the set of inputs on which some program halts. The listing definition uses the set of outputs instead.

**Problem.** The intersection of two computably enumerable sets is computably enumerable. The preimage of a computably enumerable set under any total computable function is also computably enumerable.

**How the definition helps.** Both claims follow by running programs in sequence (our own argument). For an intersection, run both programs on the input and halt after both finish. For a preimage, compute the function value and run the membership program on that value.

**Paper or page:** [Computability: Computability Theory, Theorem 1.1](https://builds.openlogicproject.org/open-logic-complete.pdf), [Computability: Computability Theory, Theorem 1.1](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Suppose A and B are computably enumerable. Then so are A ∩ B and A ∪ B.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing enumerations turn an infinite search into a decision

**Remember:** An increasing list can settle no by passing the target.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03D10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** An increasing computable enumeration of a set is a total computable function whose outputs strictly increase and whose range is the set.

**Problem.** An infinite set of natural numbers is decidable exactly when it has an increasing computable enumeration.

**How the definition helps.** An increasing list decides whether n is a member: compute outputs until one reaches or passes n (our own). For the converse, use the decision procedure to find the first member, then each next larger member, and infinitude makes every search end (our own). An unordered list never signals that a missing number will not appear (our own).

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

**How the definition helps.** A total translation always reaches the decider for B, so the decider for A halts too (our own). A partial translation could simulate the input and return 0 only on halting (our own). Counting divergence as a no would then reduce the undecidable halting set to the decidable set {0} (our own).

**Paper or page:** [Computability: Computability Theory, Proposition 1.1.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If A ≤ₘ B and B ≤ₘ C, then A ≤ₘ C.”

**Sources:** none listed. No primary source with a working link was found.

### Rice's theorem needs properties that are semantic and nontrivial

**Remember:** Behavior alone decides membership, and some programs qualify while others do not.

*Rules out counterexamples.* MSC 03D35 (Undecidability and degrees of sets of sentences), 03D20. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A property of programs is semantic if it depends only on the partial function that a program computes, and nontrivial if some programs have it and some do not.

**Problem.** Rice's theorem: every nontrivial semantic property of programs is undecidable.

**How the definition helps.** Semantic invariance lets a halting reduction carry the answer in a program’s behavior, not its text (our own outline). Complement the property if needed, so that programs that never halt lack it and some program P has it. The program that first runs a halting instance and then runs P has the property exactly when the instance halts.

**Wikipedia:** [Rice's theorem](https://en.wikipedia.org/wiki/Rice%27s_theorem). It says: “A semantic property is one about the program's behavior (for instance, "does the program terminate for all inputs?"), unlike a syntactic property”

**Sources:**

- [Rice, H. G. (1953). Classes of recursively enumerable sets and their decision problems. Transactions of the American Mathematical Society 74, 358–366.](https://doi.org/10.1090/s0002-9947-1953-0053041-6)

### Adding an ordinal to itself as a member gives its successor

**Remember:** Any larger ordinal must already contain the new member.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a set that contains every member of its elements and is well-ordered by membership, so each ordinal is the set of smaller ordinals. The successor of α is α ∪ {α}.

**Problem.** The successor of an ordinal α is the least ordinal strictly greater than α.

**How the definition helps.** Any ordinal greater than α contains α and every member of α, so it contains α ∪ {α}. The new set is again an ordinal, with α as its last element (our own check).

**Paper or page:** [Successor of Element of Ordinal is Subset](https://proofwiki.org/wiki/Successor_of_Element_of_Ordinal_is_Subset). It says: “x ∈ y ⇔ x⁺ ⊆ y”

**Sources:** none listed. No primary source with a working link was found.

### Cardinal powers as function sets make iterated powers multiply exponents

**Remember:** A function of two inputs can take them one at a time.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** μ to the power κ is the size of the set of all functions from a set of size κ to a set of size μ. Defining powers by recursion, as repeated multiplication, works only for natural numbers.

**Problem.** For all cardinals μ, κ and λ, μ to the power κ, raised to the power λ, equals μ to the power κ · λ.

**How the definition helps.** With function sets, the law is the currying bijection, so no induction is needed (our own). A function on K × L is the same as a function on L whose values are functions on K (our own). Recursion instead proves the law for natural numbers by induction, after the law for sums of exponents (our own).

**nLab:** [cardinal arithmetic](https://ncatlab.org/nlab/show/cardinal+arithmetic). It says: “the exponential of one cardinality raised to the power of the other is the cardinality of their function set”

**Sources:**

- [Georg Cantor, Beiträge zur Begründung der transfiniten Mengenlehre (1895)](https://doi.org/10.1007/bf02124929)

### Cardinal powers as function sets turn exponent sums into products

**Remember:** A function on a disjoint union is one function per piece.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** μ to the power κ is the size of the set of all functions from a set of size κ to a set of size μ. Defining powers by recursion, as repeated multiplication, works only for natural numbers.

**Problem.** For cardinals μ, κ and λ, μ to the power κ + λ is the product of μ to the powers κ and λ.

**How the definition helps.** With function sets, the law is one bijection, so no induction is needed (our own). A function on a disjoint union K ⊔ L is a pair of functions, one on K and one on L (our own). Recursion instead proves the law for natural numbers by induction on λ (our own).

**nLab:** [cardinal arithmetic](https://ncatlab.org/nlab/show/cardinal+arithmetic). It says: “the exponential of one cardinality raised to the power of the other is the cardinality of their function set”

**Sources:**

- [Georg Cantor, Beiträge zur Begründung der transfiniten Mengenlehre (1895)](https://doi.org/10.1007/bf02124929)

### Cardinal sums and products as sets make distributivity one bijection

**Remember:** A pair keeps the tag of its tagged entry.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For sets A and B of sizes a and b, a + b is the size of their disjoint union, whose elements carry a tag 0 or 1 for their summand, even when A = B. The product ab is the size of A × B.

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

**Definition.** A set is countable if it is empty or some list indexed by the natural numbers covers it, with repeats allowed.

**Problem.** Assuming countable choice, the union of a sequence of countable sets is countable.

**How the definition helps.** Repeats let every nonempty set have a full list, so the lists fill the rows of a grid without any check for overlaps. Countable choice picks all these lists at once. Reading the grid by increasing row plus column, skipping empty rows, lists the union (our own).

**nLab:** [countable unions of countable sets are countable](https://ncatlab.org/nlab/show/countable+unions+of+countable+sets+are+countable). It says: “this requires the axiom of countable choice”

**Paper or page:** [Countable Union of Countable Sets is Countable](https://proofwiki.org/wiki/Countable_Union_of_Countable_Sets_is_Countable). It says: “Then it can be proved that a countable union of countable sets is countable.”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero coefficients and decreasing exponents make Cantor normal form unique

**Remember:** No zero coefficients and no repeated powers, so each ordinal has one form.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Cantor normal form for α is a finite ordinal sum equal to α. Its terms have the form ωᵝ · c with strictly decreasing ordinal exponents β and positive integer coefficients c. The empty sum represents zero.

**Problem.** Every ordinal has exactly one Cantor normal form. Two ordinals in normal form can be compared term by term, like numbers written in a base.

**How the definition helps.** Each nonzero remainder determines its largest power ωᵝ and then its largest finite coefficient, so the two conditions leave no choice (our own outline). The remainder after that block is below ωᵝ, so exponents decrease, the process stops, and the first differing term decides comparison. Repeated exponents would also allow ω + ω for ω · 2, and zero coefficients would add unused terms.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “This decomposition of α is called the Cantor normal form of α, and can be considered the base-ω positional numeral system.”

**Sources:**

- [Cantor, G. (1897). Beiträge zur Begründung der transfiniten Mengenlehre (Zweiter Artikel). Mathematische Annalen 49, 207–246.](https://doi.org/10.1007/BF01444205)

### Ordinal powers need finite support, since infinite lexicographic products fail

**Remember:** Ordinal powers use finitely many nonzero places, compared from the top.

*Rules out counterexamples. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 06A05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The lexicographic order compares two families at the least index where they differ, using the order of that factor. Cantor's ordinal power αᵝ uses only the functions from β to α with finitely many nonzero values. It compares two such functions at the greatest index where they differ.

**Problem.** The finite-support functions from β to α, compared at the greatest differing place, form a well-order, so αᵝ is an ordinal. The full lexicographic product of infinitely many well-orders need not be well-ordered.

**How the definition helps.** Finite support blocks the descending chains that infinitely many nonzero places allow (our own). Induction on β does the rest: successor steps give well-ordered sums of earlier powers, and limit steps give nested unions of well-ordered initial segments. In the full binary product on ℕ, compared at the least index, the single 1s at places 0, 1, 2, … descend forever (our own example).

**Paper or page:** [Lexicographic Order of Family of Well-Ordered Sets is not necessarily Well-Ordered](https://proofwiki.org/wiki/Lexicographic_Order_of_Family_of_Well-Ordered_Sets_is_not_necessarily_Well-Ordered), [Lexicographic Order on Pair of Well-Ordered Sets is Well-Ordering](https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Well-Ordered_Sets_is_Well-Ordering). It says: “Then it is not necessarily the case that (D, ≼D) is also a well-ordered set.”

**Sources:**

- [ProofWiki, Lexicographic Order of Family of Well-Ordered Sets is not necessarily Well-Ordered](https://proofwiki.org/wiki/Lexicographic_Order_of_Family_of_Well-Ordered_Sets_is_not_necessarily_Well-Ordered)
- [ProofWiki, Lexicographic Order on Pair of Well-Ordered Sets is Well-Ordering](https://proofwiki.org/wiki/Lexicographic_Order_on_Pair_of_Well-Ordered_Sets_is_Well-Ordering)

### Ordinal products as reverse lexicographic orders make multiplication associative

**Remember:** In either grouping, the last coordinate decides first.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Define α · β as the order type of the set of pairs (a, b) with a in α and b in β. Compare two pairs by their second coordinates first, and use the first coordinates only to break ties. The usual alternative defines α · β by recursion on β, adding a copy of α at each successor step.

**Problem.** For all ordinals α, β and γ, (α · β) · γ = α · (β · γ).

**How the definition helps.** Both groupings order triples (a, b, c) by c first, then b, then a, so regrouping is an order-preserving bijection (our own). The recursive definition needs transfinite induction on γ and the left distributive law first (our own).

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “Effectively, each element of T is replaced by a disjoint copy of S.”

**Sources:** none listed. No primary source with a working link was found.

### Ordinal sums and products as block orders give left distributivity

**Remember:** Replace the points before or after joining the two blocks.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Define α · β by replacing each point of β with an ordered copy of α. Define α + β by placing a copy of β after a copy of α. The usual alternative defines both operations by transfinite recursion.

**Problem.** For all ordinals α, β and γ, α · (β + γ) = α · β + α · γ. The right distributive law fails, since (1 + 1) · ω = ω but 1 · ω + 1 · ω = ω · 2.

**How the definition helps.** In α · (β + γ), every copy of α indexed by β comes before every copy indexed by γ (our own). So the same pairs in the same order form α · β followed by α · γ (our own). The recursive definitions need transfinite induction on γ instead (our own).

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

**Definition.** A von Neumann ordinal is a set that contains every member of its elements and is well-ordered by membership. The natural numbers start at the empty set, and each successor is n ∪ {n}, so each number is the set of the numbers before it.

**Problem.** The set of all von Neumann natural numbers is the least infinite ordinal.

**How the definition helps.** Each successor contains exactly the earlier numbers, by induction (our own). Their set is therefore transitive, and membership gives its usual well-order (our own). It is infinite, and every smaller ordinal is one of its finite members (our own).

**Paper or page:** [Set of Natural Numbers is Ordinal](https://proofwiki.org/wiki/Set_of_Natural_Numbers_is_Ordinal). It says: “The set of natural numbers ℕ is an ordinal.”

**Sources:** none listed. No primary source with a working link was found.

### Ternary digits zero and two avoid collisions when coding subsets

**Remember:** Leave a gap between the digits so the tail cannot erase a difference.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Encode a subset of the positive integers by a base-three fraction. Put 2 in position n if n belongs to the subset, and put 0 there otherwise.

**Problem.** The real numbers and the power set of the natural numbers have the same cardinality.

**How the definition helps.** Two different subsets first differ at some place, where the digits differ by 2 units of that place, while all later places add at most 1 unit (our own). Binary would collide, since 0.0111… = 0.1000… (our own). In reverse, send each real to the indices of the rationals below it, which is injective, and the Schröder–Bernstein theorem gives a bijection.

**Wikipedia:** [Cantor set](https://en.wikipedia.org/wiki/Cantor_set). It says: “it must admit a numeral representation consisting entirely of 0s and 2s.”

**Paper or page:** [Cardinality of Power Set of Natural Numbers Equals Cardinality of Real Numbers](https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Natural_Numbers_Equals_Cardinality_of_Real_Numbers). It says: “The cardinality of the power set of the natural numbers is equal to the cardinality of the real numbers.”

**Sources:** none listed. No primary source with a working link was found.

### The union of any set of ordinals is its supremum

**Remember:** For ordinals, take the union to get the least upper bound.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set, one containing every member of each of its elements, that membership well-orders. Ordinals are compared by inclusion, so α ≤ β means α ⊆ β.

**Problem.** Every set of ordinals has a supremum, or least upper bound, given by its union. The empty set has supremum zero.

**How the definition helps.** Because the order is inclusion, the least upper bound is the smallest set containing all the ordinals, which is their union. The ordinal union theorem makes the union an ordinal (our own). The empty union is ∅, the ordinal zero (our own).

**Paper or page:** [Union of Set of Ordinals is Ordinal](https://proofwiki.org/wiki/Union_of_Set_of_Ordinals_is_Ordinal). It says: “Then ⋃ A is an ordinal.”

**Sources:** none listed. No primary source with a working link was found.

### Von Neumann ordinals make each limit ordinal the union of smaller ones

**Remember:** No single step reaches a limit, so a limit is a union.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set that ∈ well-orders, so each ordinal is the set of all smaller ordinals. A limit ordinal λ is a nonzero ordinal that is not a successor α ∪ {α}, so with each β &lt; λ it also contains β ∪ {β} (our own).

**Problem.** Every limit ordinal λ is the union of the ordinals below it: λ = ⋃λ.

**How the definition helps.** Each β in λ lies in its successor, which is also in λ, so λ ⊆ ⋃λ (our own). Transitivity gives ⋃λ ⊆ λ (our own). The successor lies in λ because it is at most λ and cannot equal the limit λ (our own).

**Paper or page:** [Limit Ordinal Equals its Union](https://proofwiki.org/wiki/Limit_Ordinal_Equals_its_Union), [Alternative Definition of Ordinal](https://proofwiki.org/wiki/Alternative_Definition_of_Ordinal). It says: “Let λ be a limit ordinal. Then: λ = ⋃λ where ⋃λ denotes the union of λ.”

**Sources:**

- [ProofWiki, Limit Ordinal Equals its Union](https://proofwiki.org/wiki/Limit_Ordinal_Equals_its_Union)
- [ProofWiki, Alternative Definition of Ordinal](https://proofwiki.org/wiki/Alternative_Definition_of_Ordinal)

### Von Neumann ordinals make each order type a single set

**Remember:** An ordinal is the set of the ordinals that come before it.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set that membership strictly well-orders. A set is transitive if it contains every element of each member (our own). So each ordinal is the set of the ordinals below it (our own).

**Problem.** Every well-ordered set is order-isomorphic to exactly one von Neumann ordinal, and that ordinal is a set, not a proper class.

**How the definition helps.** Since an ordinal is the set of its predecessors, send each point of the well-order to the set of images of its predecessors (our own). Well-founded recursion and replacement make this an isomorphism onto an ordinal (our own). Distinct ordinals are never isomorphic, because one is a proper initial segment of the other (our own).

**Wikipedia:** [Ordinal number](https://en.wikipedia.org/wiki/Ordinal_number), [Set-theoretic definition of natural numbers](https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers). It says: “Every well-ordered set S is order-isomorphic to exactly one ordinal, known as its order type.”

**Sources:** none listed. No primary source with a working link was found.

### Von Neumann ordinals show directly that no set contains every ordinal

**Remember:** A set of all ordinals would be an ordinal inside itself.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set that membership strictly well-orders. A set is transitive if it contains every element of each member (our own). Strictness means no member is a member of itself, so no ordinal belongs to itself (our own).

**Problem.** There is no set of all ordinals.

**How the definition helps.** A set Ω of all ordinals would be transitive because every member of an ordinal is an ordinal (our own). The ordinal comparison theorem makes membership a well-order on any set of ordinals (our own). Thus Ω would itself be an ordinal and satisfy Ω ∈ Ω, contradicting strictness (our own).

**Paper or page:** [Burali-Forti Paradox](https://proofwiki.org/wiki/Burali-Forti_Paradox). It says: “Hence the set of all ordinals is not an allowable set.”

**Sources:** none listed. No primary source with a working link was found.

### Well-orders have no nontrivial automorphisms, so comparisons between them are unique

**Remember:** A well-order cannot be shifted, because its least element must stay put.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers), 06A05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A well-order is a total order in which every nonempty subset, or every nonempty subclass for a class (our own), has a least element.

**Problem.** Every order automorphism of a well-ordered set or class is the identity. So between two well-ordered sets there is at most one order isomorphism.

**How the definition helps.** Take the least point a that an automorphism moves (our own). It fixes everything below a, so it maps the points from a upward onto themselves and must fix their least point a (our own). Two isomorphisms differ by an automorphism, so they agree (our own).

**nLab:** [well-order](https://ncatlab.org/nlab/show/well-order). It says: “Note that any simulation of S in T must be unique.”

**Paper or page:** [Order Automorphism on Well-Ordered Class is Identity Mapping](https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Identity_Mapping), [Well-Ordered Classes are Isomorphic at Most Uniquely](https://proofwiki.org/wiki/Well-Ordered_Classes_are_Isomorphic_at_Most_Uniquely). It says: “Let (A, ≼) be a well-ordered class. Let φ be an order isomorphism on (A, ≼). Then φ is the identity mapping”

**Sources:**

- [ProofWiki, Order Automorphism on Well-Ordered Class is Identity Mapping](https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Identity_Mapping)
- [ProofWiki, Well-Ordered Classes are Isomorphic at Most Uniquely](https://proofwiki.org/wiki/Well-Ordered_Classes_are_Isomorphic_at_Most_Uniquely)

### Intersecting equivalence relations gives the greatest common refinement

**Remember:** Keep two points together only when both partitions do.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A partition splits a set into nonempty blocks and is recorded as the relation of pairs lying in the same block. One partition refines another exactly when its relation is contained in the other's.

**Problem.** The nonempty intersections of blocks from two partitions form a partition that refines both. Every partition refining both also refines this one.

**How the definition helps.** Since refinement is inclusion of relations, the intersection of the two relations is the largest relation inside both. Its blocks are the nonempty intersections of blocks (our own).

**nLab:** [partition](https://ncatlab.org/nlab/show/partition). It says: “Refinement corresponds to implication between relations.”

**Sources:** none listed. No primary source with a working link was found.

### Appending at the end lets Zorn’s lemma give well-orders

**Remember:** Never add a new predecessor to an old point.

*Rules out counterexamples.* MSC 03E25 (Axiom of choice and related propositions), 03E10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A well-order is a total order in which every nonempty subset has a least element. An end extension of a well-ordered subset keeps the old order and places every new point after all old points.

**Problem.** Assuming Zorn’s lemma, every set admits a well-order.

**How the definition helps.** In a union of a chain of end extensions, a subset's least point in any stage it meets stays least, because later points come after it. So chains have upper bounds, and Zorn's lemma gives a maximal well-ordered subset, which is everything because a missing point could be appended. In our own counterexample, ordering ever longer finite lists of natural numbers backwards gives a union with no least element.

**nLab:** [Zorn's lemma](https://ncatlab.org/nlab/show/Zorn%27s+lemma). It says: “If C is a chain in the poset consisting of subsets Xα, then their union X is a well-order”

**Sources:** none listed. No primary source with a working link was found.

### Choice on fibers gives right inverses to surjections

**Remember:** To undo an onto map, pick one input for each output.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 03E20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A right inverse of a surjection f picks, for each target value y, one input from the fiber over y, the nonempty set of inputs that f sends to y.

**Problem.** The axiom of choice holds exactly when every surjection between sets has a right inverse.

**How the definition helps.** A right inverse is exactly a choice of one point from each fiber, so the axiom of choice gives one. Conversely (our own), send each pair (i, x), with x in the set labelled i, to i. A right inverse of this surjection picks an element from every set (our own).

**nLab:** [axiom of choice](https://ncatlab.org/nlab/show/axiom+of+choice). It says: “The axiom of choice is then also the statement that all epimorphisms are split epimorphisms in the category Set of sets.”

**Sources:** none listed. No primary source with a working link was found.

### Defining products as choice functions exposes the axiom of choice

**Remember:** A point in a product is one choice at every index.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 03E20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The Cartesian product of an indexed family of sets is the set of functions that pick, for each index, an element of that index's set.

**Problem.** The axiom of choice is equivalent to saying that every Cartesian product of nonempty sets is nonempty.

**How the definition helps.** An element of the product is by definition a choice function, so the two statements say the same thing (our own). For the empty family, the empty function lies in the product.

**Wikipedia:** [Axiom of choice](https://en.wikipedia.org/wiki/Axiom_of_choice). It says: “The Cartesian product of any collection of nonempty sets is nonempty.”

**Sources:** none listed. No primary source with a working link was found.

### Finite character makes the existence of a basis one line

**Remember:** A set is in exactly when every finite piece is in.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 15A03. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A family of subsets has finite character if a set belongs to it exactly when all its finite subsets belong. Linearly independent sets form such a family, since every linear relation uses only finitely many vectors (our own).

**Problem.** Every vector space has a basis.

**How the definition helps.** The Teichmüller–Tukey lemma gives a maximal member of a nonempty family of finite character, here a maximal independent set containing ∅. A vector outside its span could be added while keeping independence, contradicting maximality (our own).

**Wikipedia:** [Teichmüller–Tukey lemma](https://en.wikipedia.org/wiki/Teichm%C3%BCller%E2%80%93Tukey_lemma). It says: “This is a collection of finite character. Thus, a maximal set exists, which must then span V and be a basis for V.”

**Sources:**

- [Tukey, J. W. (1940). Convergence and Uniformity in Topology. Annals of Mathematics Studies 2, Princeton University Press.](https://doi.org/10.1515/9781400882199)

### Ordering chains by inclusion gives a maximal chain

**Remember:** Use inclusion so nested chains have a union above them.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A chain is a subset in which every two elements are comparable. Order the chains that contain a given chain by inclusion, so a nonempty nested family of them has its union as an upper bound.

**Problem.** Assuming Zorn’s lemma, every chain in a partially ordered set lies in a maximal chain.

**How the definition helps.** The union of a nested family of chains is a chain, because any two of its points lie together in one member. The given chain bounds the empty family, so Zorn's lemma gives a maximal chain containing it. That chain is maximal among all chains, since any larger chain also contains the given one (our own).

**Wikipedia:** [Hausdorff maximal principle](https://en.wikipedia.org/wiki/Hausdorff_maximal_principle). It says: “a union of a totally ordered set of chains is a chain”

**Paper or page:** [Zorn's Lemma implies Hausdorff's Maximal Principle](https://proofwiki.org/wiki/Zorn's_Lemma_implies_Hausdorff's_Maximal_Principle). It says: “Then Hausdorff's Maximal Principle holds.”

**Sources:** none listed. No primary source with a working link was found.

### The empty chain makes the set in Zorn's lemma non-empty

**Remember:** The empty chain needs an upper bound too, so P cannot be empty.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Zorn's lemma requires every chain of P, a subset of pairwise comparable elements, to have an upper bound in P. This includes the empty chain, which every element of P bounds.

**Problem.** Zorn's lemma needs no separate hypothesis that P is non-empty. Without the empty chain, the lemma would be false for the empty partially ordered set, which has no maximal element.

**How the definition helps.** Any element of P bounds the empty chain, so the hypothesis already says that P is nonempty. If only nonempty chains needed bounds, the empty order would satisfy it vacuously yet have no maximal element (our own).

**Wikipedia:** [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma). It says: “property (1) is redundant, since property (2) says, in particular, that the empty chain has an upper bound in P, implying P is nonempty.”

**Sources:**

- [Max Zorn, A remark on method in transfinite algebra, Bulletin of the American Mathematical Society 41 (1935) 667–670](https://doi.org/10.1090/S0002-9904-1935-06166-X)

### The least element rule turns a well-order into choices

**Remember:** Choose the first element of each set.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 03E10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A well-order is a total order in which each nonempty subset has a least element. So it chooses one element from every nonempty subset, its least one.

**Problem.** Every family of nonempty subsets of a well-ordered set has a choice function. If every set can be well-ordered, then every family of nonempty sets has a choice function.

**How the definition helps.** Sending each subset to its least element is a choice function. For any family of nonempty sets, apply this to a well-order of their union. In our own example, the usual order on the integers fails, because the whole set has no least element.

**Paper or page:** [Choice Function Exists for Well-Orderable Union of Sets](https://proofwiki.org/wiki/Choice_Function_Exists_for_Well-Orderable_Union_of_Sets). It says: “Let the union ⋃𝕊 be well-orderable.”

**Sources:** none listed. No primary source with a working link was found.

### Zorn's lemma packages transfinite induction into one condition to check

**Remember:** Every chain has an upper bound, including the empty chain.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A partially ordered set is inductive if every chain, meaning every subset of pairwise comparable elements, has an upper bound in it, the empty chain included.

**Problem.** Every vector space has a basis, and every nontrivial ring with 1 has a maximal ideal.

**How the definition helps.** Zorn's lemma gives every inductive set a maximal element, so only chains need checking. Under inclusion, independent sets and proper ideals are inductive: chain unions stay independent or omit 1, and ∅ or the zero ideal bounds the empty chain (our own). A maximal independent set spans, since any vector outside its span could be added (our own).

**Wikipedia:** [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma). It says: “Zorn's lemma tidies up the conditions a situation needs to satisfy in order for such an argument to work and enables mathematicians to not have to repeat the transfinite induction argument by hand each time”

**Sources:**

- [Kuratowski, C. (1922). Une méthode d'élimination des nombres transfinis des raisonnements mathématiques. Fundamenta Mathematicae 3, 76–108.](https://doi.org/10.4064/fm-3-1-76-108)
- [Zorn, M. (1935). A remark on method in transfinite algebra. Bulletin of the American Mathematical Society.](https://doi.org/10.1090/S0002-9904-1935-06166-X)

### Separation instead of comprehension blocks Russell's paradox

**Remember:** Cut a subset out of a set; never collect everything with a property.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For each set A and each set-theoretic formula φ(x) with fixed parameters, separation gives the set of exactly those x ∈ A satisfying φ(x).

**Problem.** With separation, no set contains all sets. For every set A, the subset {x ∈ A : x ∉ x} lies outside A.

**How the definition helps.** Separation only cuts subsets out of a given set A, so R = {x ∈ A : x ∉ x} exists (our own). If R were in A, then R ∈ R exactly when R ∉ R, so R lies outside A (our own).

**Wikipedia:** [Axiom schema of specification](https://en.wikipedia.org/wiki/Axiom_schema_of_specification), [Axiom of regularity](https://en.wikipedia.org/wiki/Axiom_of_regularity). It says: “Because restricting comprehension avoids Russell's paradox, several mathematicians including Zermelo, Fraenkel, and Gödel considered it the most important axiom of set theory.”

**Sources:**

- [Zermelo, E. (1908). Untersuchungen über die Grundlagen der Mengenlehre. I. Mathematische Annalen, 261–281.](https://doi.org/10.1007/BF01449999)

### The axiom of regularity gives every set a rank

**Remember:** Every nonempty set has a bottom element under membership.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03E10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The axiom of regularity says that every nonempty set A has a member sharing no element with A, so membership ∈ is well-founded.

**Problem.** Over the other ZF axioms, regularity places every set in some stage V(α) of the cumulative hierarchy. Every set has an ordinal rank, and induction on membership reaches every set.

**How the definition helps.** Well-founded recursion assigns each set the supremum of its members' successor ranks, and a set of rank α lies in V(α + 1) (our own). Induction on rank then gives induction on membership (our own). Regularity excludes a Quine atom x = {x}, which could have no rank (our own).

**Wikipedia:** [Axiom of regularity](https://en.wikipedia.org/wiki/Axiom_of_regularity), [Well-founded relation](https://en.wikipedia.org/wiki/Well-founded_relation). It says: “However, regularity makes some properties of ordinals easier to prove; and it not only allows induction to be done on well-ordered sets but also on proper classes that are well-founded relational structures”

**Sources:**

- [Zermelo, E. (1930). Über Grenzzahlen und Mengenbereiche. Fundamenta Mathematicae 16, 29–47.](https://doi.org/10.4064/fm-16-1-29-47)

### One formula on the right turns Gentzen's LK into intuitionistic logic

**Remember:** An intuitionistic sequent has at most one conclusion.

*Makes the theorem clean to state or prove.* MSC 03F05 (Cut-elimination and normal-form theorems), 03B20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Gentzen's LJ is the sequent calculus LK restricted so that each sequent Γ ⊢ Δ has at most one formula in Δ.

**Problem.** Intuitionistic logic has the disjunction property. If A ∨ B is provable with no assumptions, then A is provable or B is provable.

**How the definition helps.** In a cut-free proof of ⊢ A ∨ B, with no assumptions and one conclusion, the last rule must introduce the disjunction and so picks one disjunct (our own). Its premise proves that disjunct with no assumptions (our own). Gentzen's cut-elimination theorem supplies the cut-free proof.

**Wikipedia:** [Sequent calculus](https://en.wikipedia.org/wiki/Sequent_calculus), [Disjunction and existence properties](https://en.wikipedia.org/wiki/Disjunction_and_existence_properties). It says: “The resulting system is called LJ. It is sound and complete with respect to intuitionistic logic and admits a similar cut-elimination proof. This can be used in proving disjunction and existence properties.”

**Sources:**

- [Gentzen, G. (1935). Untersuchungen über das logische Schließen. I. Mathematische Zeitschrift 39, 176–210.](https://doi.org/10.1007/BF01201353)

### Multiset sequents make reordering formulas need no exchange rule

**Remember:** Keep the repetitions and drop the order.

*True by definition.* MSC 03F07 (Structure of proofs). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Treat each side of a sequent as a multiset, a collection that keeps repetitions but ignores order.

**Problem.** In the classical sequent calculus with multiset contexts, permuting either side does not change a sequent or its derivability.

**How the definition helps.** A reordered sequent is then the very same sequent, so no exchange rule is needed. Our own comparison turns each multiset proof into a proof with ordered sequences by inserting swaps of adjacent formulas where a rule needs them.

**Wikipedia:** [Sequent calculus](https://en.wikipedia.org/wiki/Sequent_calculus). It says: “A common simplification involves the use of multisets of formulas in the interpretation of the sequent, rather than sequences, eliminating the need for an explicit permutation rule.”

**Sources:**

- [Negri and von Plato (2001), Structural Proof Theory, Cambridge University Press](https://doi.org/10.1017/CBO9780511527340)

### Second-order induction makes the natural numbers unique up to isomorphism

**Remember:** Second-order induction leaves no room for extra numbers.

*Rules out counterexamples.* MSC 03F35 (Second- and higher-order arithmetic and fragments), 03C85, 03C35. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Peano's induction axiom is second-order: every set of numbers that contains 0 and is closed under successor contains all numbers.

**Problem.** Under full second-order semantics, any two Peano models admit exactly one isomorphism preserving zero and successor.

**How the definition helps.** The iterates of successor from zero form such a set, so in every model they are all the numbers, leaving no nonstandard extras (our own). Successor is injective and zero has no predecessor, so these iterates are distinct (our own). An isomorphism must match corresponding iterates, and this matching works (our own).

**Wikipedia:** [Peano axioms](https://en.wikipedia.org/wiki/Peano_axioms). It says: “any two models of the Peano axioms (including the second-order induction axiom) are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Gödel numbering turns statements about proofs into statements about numbers

**Remember:** Code every formula and proof as a number, and proofs become arithmetic.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F30. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Gödel numbering effectively assigns distinct natural numbers to formulas, proofs and other syntactic objects. In prime-power coding, a sequence of positive symbol codes becomes the product of the successive primes raised to those codes (our own).

**Problem.** With this coding and primitive recursive syntax, axiom tests and rule checks, formulahood, axiomhood and proof checking are primitive recursive. Sufficiently strong arithmetic can express provability and construct a sentence asserting its own unprovability.

**How the definition helps.** Factoring a code recovers its symbols by bounded searches, so checking formulas, axioms and proof steps is primitive recursive (our own). Arithmetic represents these checks, and the diagonal lemma supplies the self-referential sentence (our own).

**Wikipedia:** [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering). It says: “syntactic properties of a statement—such as being a well-formed formula, being an axiom, or being provable—correspond to arithmetical properties of its Gödel number, so that questions about the system become questions about numbers.”

**Sources:**

- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Rosser's provability predicate removes the need for ω-consistency

**Remember:** Rosser asks whether a proof comes before any proof of the opposite.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F30. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A sentence φ is Rosser provable if some proof of φ has a code p and no code smaller than p proves ¬φ. The Rosser sentence ρ is a diagonal fixed point asserting that ρ is not Rosser provable (our own).

**Problem.** In any consistent, effectively axiomatized extension of Robinson arithmetic, the Rosser sentence is neither provable nor refutable. Consistency alone suffices.

**How the definition helps.** Comparing proof codes is a finite check, which arithmetic verifies and consistency settles (our own). A proof of ρ has no earlier proof of ¬ρ, so arithmetic proves ρ Rosser provable and refutes ρ (our own). A proof of ¬ρ with code q has no earlier proof of ρ, so checking codes below q proves ρ (our own).

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

**Definition.** The Lindenbaum–Tarski algebra of a theory T consists of sentences up to provable equivalence in T, with the connectives as operations; for classical logic it is a Boolean algebra. A deductively closed consistent extension of T is a proper filter in it, and it is complete exactly when that filter is an ultrafilter (our own).

**Problem.** Every consistent classical first-order theory extends to a complete consistent theory. In its Lindenbaum–Tarski algebra, this says that every proper filter extends to an ultrafilter.

**How the definition helps.** Under this correspondence, extending a consistent theory to a complete one is extending a proper filter to an ultrafilter. The Boolean ultrafilter lemma gives that extension.

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

**Definition.** An extension by definitions adds a fresh symbol defined by a formula of the old language. For a function symbol, the old theory must prove that each input tuple has exactly one output satisfying the formula, so every old model interprets the symbol in exactly one way (our own).

**Problem.** An extension by definitions proves no new sentences in the old language. In other words, it is a conservative extension.

**How the definition helps.** Every model of the old theory expands to a model of the new one, so by completeness no new old-language sentence becomes provable (our own). Without unique existence, adjoining a square root of 2 to field theory proves a new old-language sentence, that such a root exists (our own).

**Wikipedia:** [Extension by definition](https://en.wikipedia.org/wiki/Extension_by_definition). It says: “The fact that T' is a conservative extension of T shows that the defining axiom of R cannot be used to prove new theorems.”

**Sources:** none listed. No primary source with a working link was found.

### A higher inductive free group has its universal property by definition

**Remember:** Constructors are the group laws, so maps out need nothing else.

*True by definition.* MSC 03B38 (Type theory), 20E05. arXiv math.LO, math.GR. Level 3: graduate.

**Definition.** The HoTT Book defines F(A) as a higher inductive type with constructors η : A → F(A), multiplication, unit and inverse. It also has one equality constructor for each group law, and one that makes F(A) a set.

**Problem.** F(A) is the free group on A. For each set-level group G, restriction to generators identifies homomorphisms F(A) → G with functions A → G.

**How the definition helps.** A map out of F(A) needs only an image for each constructor, and a set-level group G supplies all of them: its operations, its laws and its being a set (our own). So every function A → G extends to a homomorphism, and induction makes the extension unique (our own).

**Paper or page:** [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “F(A) is the free group on A. In other words, for any (set) group G, composition with η : A → F(A) determines an equivalence”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### A type is n-connected exactly when its maps into n-types are constant

**Remember:** Connected means the truncation is a point, so maps out are constant.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55P60. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A type A is n-connected if its n-truncation is contractible, where the n-truncation is the n-type through which every map from A to an n-type factors uniquely.

**Problem.** A type A is n-connected exactly when, for every n-type B, the constant-function map B → (A → B) is an equivalence.

**How the definition helps.** Maps from A to an n-type B are maps from the truncation, and a contractible truncation is a point, so these maps are constant (our own). Conversely, take B to be the truncation: its identity map is then constant, which gives a contraction (our own).

**Paper or page:** [HoTT Book: Hlevels](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hlevels](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “A type A is n-connected if and only if the map λb.λa.b : B → (A → B) is an equivalence for every n-type B. In other words, “every map from A to an n-type is constant”.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### An interval type with definitional computation rules proves function extensionality

**Remember:** When paths are maps from an interval, pointwise paths make a path of functions.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** The interval is the higher inductive type with points 0 and 1 and a path s between them. Its recursion sends s to any chosen path p from b to c, with endpoint values b and c computing judgmentally.

**Problem.** In type theory with this interval and function η, pointwise equal functions are equal.

**How the definition helps.** A pointwise equality of f and g gives, for each x, a function hₓ from the interval with endpoints f(x) and g(x) by computation (our own). Applying i ↦ (x ↦ hₓ(i)) to s gives a path whose endpoints function η identifies with f and g (our own).

**nLab:** [function extensionality](https://ncatlab.org/nlab/show/function+extensionality), [cubical type theory](https://ncatlab.org/nlab/show/cubical+type+theory). It says: “Postulating an interval type with judgmental computation rules for the point constructors of the interval type implies function extensionality.”

**Sources:**

- [Mike Shulman, An interval type implies function extensionality, Homotopy Type Theory blog (4 April 2011)](https://homotopytypetheory.org/2011/04/04/an-interval-type-implies-function-extensionality/)
- [Cyril Cohen, Thierry Coquand, Simon Huber, Anders Mörtberg, Cubical Type Theory: a constructive interpretation of the univalence axiom, TYPES 2015, LIPIcs 69 (2018); arXiv:1611.02108](https://arxiv.org/abs/1611.02108)

### Contractible fibres make equivalence in type theory a mere proposition

**Remember:** Every fiber is contractible, and contractibility is a property.

*True by definition.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A function f is an equivalence if every fiber of f, the pairs (x, p) with p a path from f(x) to y, is contractible: it has a center with a path to every point.

**Problem.** With function extensionality, the type asserting that a function is an equivalence is a mere proposition. Any two witnesses are equal.

**How the definition helps.** Being an equivalence is a product, over all y, of contractibility of a fiber (our own). Contractibility of one type is a mere proposition, and function extensionality makes a product of mere propositions a mere proposition (our own).

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

**Remember:** Contractible fibers make being an equivalence a property, not extra structure.

*Rules out counterexamples.* MSC 03B38 (Type theory). arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A function f is an equivalence if every fiber, the pairs (x, p) with p a path from f(x) to y, is contractible. Equivalently, f is bi-invertible: it has a left inverse and a separate right inverse, each up to homotopy.

**Problem.** With either definition and function extensionality, isEquiv(f) is a mere proposition. So two equivalences are equal when their underlying functions are equal.

**How the definition helps.** Contractibility of each fiber is a mere proposition, and function extensionality keeps this for the whole family; bi-invertibility gives an equivalent witness type (our own). A single quasi-inverse with two homotopies fails, because it can carry extra loop data, as for the identity on the circle (our own).

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

**Definition.** The cofiber of f : A → B is the higher inductive type with a point for each b ∈ B, a new basepoint, and a path from f(a) to the basepoint for each a ∈ A (our own).

**Problem.** Pointed maps from the cofiber into a pointed type Y correspond to maps g from B to Y with a specified homotopy. That homotopy takes g ∘ f to the constant map at the basepoint of Y.

**How the definition helps.** A pointed map out of the cofiber sends each constructor somewhere: the points of B give g, the basepoint goes to the base of Y, and the paths give the homotopy (our own).

**nLab:** [cofiber type](https://ncatlab.org/nlab/show/cofiber+type). It says: “the cofiber type takes the image of the function f:A → B and makes it contractible”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Defining the smash product as a pushout gives its maps out directly

**Remember:** To map out, give a map and tell how to collapse the axes.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** For pointed types A and B, the smash product is the pushout of A × B that collapses the wedge A ∨ B, the two axes through the basepoints, to a single point (our own).

**Problem.** Pointed maps from the smash product correspond to maps from the product with a specified homotopy to the constant map on the wedge.

**How the definition helps.** A map out of a pushout is a map on each piece with a homotopy on the shared part (our own). Pointedness sends the collapsed point to the target basepoint, leaving a map on A × B and a homotopy on the wedge to the constant map (our own).

**nLab:** [smash product type](https://ncatlab.org/nlab/show/smash+product+type). It says: “The smash product type of two pointed types A,B can be defined as the pushout type of the span”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Defining unique existence as contractibility makes unique choice provable

**Remember:** Unique existence means a contractible solution type, whose center is the solution.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** Unique existence of x with P(x) means that the type of pairs (x, p), with p a witness of P(x), is contractible: it has a center with a path to each point (our own).

**Problem.** Assume function extensionality in Martin-Löf type theory. If each type of pairs (y, r) with y ∈ B(a) and r witnessing R(a, y) is contractible, some function f satisfies R(a, f(a)) everywhere.

**How the definition helps.** Contractibility hands over its center, so at each a set f(a) to the first component of the center (our own). The second component witnesses R(a, f(a)) (our own).

**nLab:** [principle of unique choice](https://ncatlab.org/nlab/show/principle+of+unique+choice). It says: “Whether unique choice is provable or not depends mostly on what notion of proposition is used. It is not provable using the primitive notion of proposition in OTT or Rocq.”

**Sources:**

- [Martín Hötzel Escardó, Introduction to Univalent Foundations of Mathematics with Agda (2019), arXiv:1911.00580](https://arxiv.org/abs/1911.00580)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Embeddings, not injections, make surjective maps of types into equivalences

**Remember:** For types, injective is too weak; ask for an embedding.

*Rules out counterexamples.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A map f is an embedding if its action on paths from x to y is an equivalence for all x and y, which makes every fiber a mere proposition (our own). It is surjective if every fiber is merely inhabited, and injective if equal images imply equal inputs (our own).

**Problem.** Classically, a function is a bijection exactly when it is injective and surjective. In homotopy type theory, the same holds for all types when injective is replaced by embedding.

**How the definition helps.** A merely inhabited mere proposition is contractible, so a surjective embedding has contractible fibers, and conversely (our own). Injective is too weak: under univalence, the point picking the booleans in the type of sets merely equivalent to them is injective and surjective (our own). The boolean swap gives a nontrivial loop at that image, so this map is no embedding (our own).

**nLab:** [embedding of types](https://ncatlab.org/nlab/show/embedding+of+types). It says: “The analogue in dependent type theory of the concept of injection in set theory, embedding of topological spaces in topology, and embedding in category theory.”

**Paper or page:** [HoTT Book: Equivalences](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “A function f : A → B is an equivalence if and only if it is both surjective and an embedding.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Excluded middle for mere propositions is consistent with univalence

**Remember:** A mere proposition can be true or false, but not true in two ways.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03F25. arXiv math.LO. Level 3: graduate.

**Definition.** A type P is a mere proposition if every pair of elements of P admits a path between them.

**Problem.** Excluded middle restricted to mere propositions is consistent with univalent type theory relative to the classical assumptions of its simplicial set model.

**How the definition helps.** Restricting excluded middle to mere propositions removes the boolean swap counterexample, and the classical simplicial set model satisfies the restricted principle with univalence (our own). Full excluded middle would choose an element of every inhabited type, which needs a boolean fixed by the swap (our own). A mere proposition has no such problem, since any two of its elements are equal (our own).

**nLab:** [mere proposition](https://ncatlab.org/nlab/show/mere+proposition). It says: “the PAT version of excluded middle contradicts the univalence axiom, whereas the mere-propositional version does not”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study, 2013](https://homotopytypetheory.org/book/)

### Higher inductive quotients map out by definition, and effectiveness becomes the theorem

**Remember:** Add a point per input and a path per related pair, then truncate to sets.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18A32. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** For a proposition-valued relation R on A, its set-quotient is freely generated as a set by points q(a) for all a ∈ A. For each witness of R(a, b), it has a path from q(a) to q(b) (our own).

**Problem.** Maps from A/R to a set correspond to maps from A that respect R. For an equivalence relation R, the quotient is effective: q(a) = q(b) holds exactly when R(a, b).

**How the definition helps.** Recursion out of the quotient asks for an image of each point and of each path, which is exactly a map into a set that respects R (our own). For effectiveness, quotient induction and propositional univalence extend R(a, –) to a proposition on classes, and transporting reflexivity along q(a) = q(b) gives R(a, b) (our own). The path constructor gives the converse (our own).

**Paper or page:** [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Equivalence relations are effective and there is an equivalence A/R ≃ A⫽R.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Homotopy-initial algebras make inductive types unique as elements, not just isomorphic

**Remember:** Ask for a contractible space of maps, and initial objects become unique.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory), 18C15. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** An algebra for a signature, such as a type with a point and an endomorphism for ℕ, is homotopy-initial if its structure-preserving maps to every algebra form a contractible type. So there is one such map, unique up to a path (our own).

**Problem.** In univalent type theory, any two homotopy-initial ℕ-algebras are equal, so their type is a mere proposition. For a W-type signature, induction with propositional computation holds exactly for homotopy-initial algebras.

**How the definition helps.** Contractibility gives maps both ways and identifies their composites with identities, so two homotopy-initial algebras are equivalent, and univalence makes them equal (our own). The homotopy-initiality characterization of W-types identifies induction with propositional computation with this same mapping condition (our own).

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Any two h-initial ℕ-algebras are equal. Thus, the type of h-initial ℕ-algebras is a mere proposition.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)
- [Steve Awodey, Nicola Gambino, Kristina Sojakova, Inductive Types in Homotopy Type Theory, 27th Annual IEEE Symposium on Logic in Computer Science (2012)](https://doi.org/10.1109/lics.2012.21)
- [Steve Awodey, Nicola Gambino, Kristina Sojakova, Homotopy-Initial Algebras in Type Theory, Journal of the ACM (2017)](https://doi.org/10.1145/3006383)

### Identity systems reduce describing equality in a type to one contractibility check

**Remember:** Guess what equality means, then check one total space is contractible.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A pointed family (R, r₀) over (A, a₀) is an identity system if it has the induction rule of the identity type: every family over pairs (b, r) with a value at (a₀, r₀) has a section taking that value there, up to a path (our own).

**Problem.** Being an identity system is equivalent to the map from a₀ = b to R(b) being an equivalence for every b. It is also equivalent to the type of pairs (b, r), with r in R(b), being contractible.

**How the definition helps.** The fundamental theorem of identity types shows that this induction rule holds exactly when the total space of pairs (b, r) is contractible (our own). It also shows both conditions are equivalent to the canonical map from a₀ = b to R(b), sending reflexivity to r₀, being an equivalence for every b (our own).

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

**Definition.** Present ℤ as the inductive type generated by 0 and an equivalence s : ℤ → ℤ, an invertible successor. To map out of it, one gives an image of 0 and an equivalence of the target.

**Problem.** For any set with a bijection and a chosen point, exactly one map from ℤ sends 0 to the point and commutes with the successor.

**How the definition helps.** Existence is the defining rule, and uniqueness follows by one induction, so no case analysis is needed. In our own comparison, the usual integers need the bijection on positive numbers, its inverse on negative ones, and a separate check at 0.

**nLab:** [integers type](https://ncatlab.org/nlab/show/integers+type). It says: “the integers type is the inductive type generated by an element and an equivalence of types”

**Sources:** none listed. No primary source with a working link was found.

### Leaving inductive types out of LF makes binder encodings adequate

**Remember:** LF cannot look inside a term, so functions tm → tm only substitute.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03B40, 18C50. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** In the LF encoding of untyped lambda terms, tm is a base type with constants for application, taking two terms, and abstraction, taking a function tm → tm (our own). Because LF has no inductive types, such a function cannot analyse its argument and can only substitute it into a fixed term (our own).

**Problem.** In contexts of term variables, untyped lambda terms up to renaming bound variables correspond bijectively to canonical LF terms of type tm for this signature. The correspondence respects substitution.

**How the definition helps.** Canonical LF terms of type tm are therefore variables, applications, or abstractions with a canonical body in an extended context, with no exotic binders (our own). Induction on canonical forms recovers each object term, and LF substitution implements its substitution (our own).

**nLab:** [logical framework](https://ncatlab.org/nlab/show/logical+framework). It says: “In fact, this weakness is essential in order to guarantee "adequacy" of the HOAS encoding.”

**Sources:**

- [Robert Harper, Furio Honsell, Gordon Plotkin, A framework for defining logics, Journal of the ACM 40(1) (1993) 143–184](https://doi.org/10.1145/138027.138060)

### Numbers as sizes of finite types make disjoint sums add sizes

**Remember:** Disjoint sum is addition before forgetting the labels.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A finite type is one merely equivalent to {1, …, n} for some natural number n. Its cardinality is its class in the set truncation of finite types, and the sum of two classes is the class of their disjoint sum (our own).

**Problem.** The cardinality of a disjoint sum of finite types is the sum of their cardinalities.

**How the definition helps.** So \[A\] + \[B\] = \[A + B\] holds by definition, and the right side is the cardinality of the disjoint sum (our own).

**nLab:** [type of finite types](https://ncatlab.org/nlab/show/type+of+finite+types). It says: “The arithmetic operations and order relations on the natural numbers type can be defined by induction on set truncation”

**Sources:** none listed. No primary source with a working link was found.

### Parametric polymorphism gives theorems for free

**Remember:** Code blind to the type must obey a law from the type.

*True by definition.* MSC 03B38 (Type theory), 03B40, 68N18. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A family of maps f₍A,B₎ : A × B → A, one for all sets A and B, is parametric if it preserves relations: for any relations on the inputs, coordinatewise related pairs give outputs related by the relation on A (our own).

**Problem.** Every closed System F term of type ∀A B. A × B → A commutes with every pair of functions α : A → C and β : B → D. In symbols, α ∘ f₍A,B₎ = f₍C,D₎ ∘ (α × β).

**How the definition helps.** Take the graphs of α and β as the relations: then the outputs lie in the graph of α, which is the stated equation (our own). Reynolds' abstraction theorem makes every closed System F term parametric.

**nLab:** [polymorphism](https://ncatlab.org/nlab/show/polymorphism). It says: “In type systems with parametric polymorphism, such as System F, there is a family of proofs for every polymorphic type signature which each give an algebraic law for any function with that signature.”

**Sources:**

- [P. Wadler, Theorems for free!, Proceedings of FPCA 1989, ACM](https://doi.org/10.1145/99370.99404)

### Propositional truncation is localization at the map from booleans to unit

**Remember:** Make every pair of points equal, and what is left is a proposition.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18N55. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A type T is local for 𝟚 → 𝟙 if its diagonal T → T × T is an equivalence, which says any two points of T are equal (our own). \[A\] is the localization of A: a local type with a map from A through which every map to a local type factors uniquely (our own).

**Problem.** \[A\] is a proposition, and maps \[A\] → P to any proposition P correspond to maps A → P.

**How the definition helps.** The local types are exactly the mere propositions, so \[A\] is a proposition and its mapping rule covers every proposition (our own).

**nLab:** [bracket type](https://ncatlab.org/nlab/show/bracket+type), [n-truncation modality](https://ncatlab.org/nlab/show/n-truncation+modality). It says: “By definition, the type of functions (𝟙 → \[A\]) → (𝟚 → \[A\]) is an equivalence of types.”

**Sources:**

- [E. Rijke, M. Shulman, B. Spitters, Modalities in homotopy type theory, Logical Methods in Computer Science 16 (2020), arXiv:1706.07526](https://arxiv.org/abs/1706.07526)

### Relational parametricity makes Church-encoded pairs correspond exactly to ordinary pairs

**Remember:** Ask the encoded pair for both parts with the identity map.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A Church pair P for sets A and B gives an element P(h) of R for every set R and every map h : A × B → R. It is parametric if, for every relation between target sets, pointwise related maps give related outputs (our own).

**Problem.** Every parametric Church pair is evaluation at one unique pair in A × B.

**How the definition helps.** Let p be P applied to the identity map of A × B (our own). For each h, the identity and h are pointwise related by the graph of h, so parametricity gives P(h) = h(p) (our own). Evaluating at the identity forces p to be unique (our own).

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “Parametricity is the abstract property enjoyed by the uniformly acting families”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Relational parametricity makes every polymorphic function from X to X the identity

**Remember:** A relation with only one pair leaves no room to move.

*True by definition.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A family F of maps Fₓ : X → X, one for every set X, is parametric if, for every relation R between sets X and Y, R-related inputs x and y give R-related outputs Fₓ(x) and Fᵧ(y) (our own).

**Problem.** Every parametric family F is the identity on each set.

**How the definition helps.** For each x ∈ X, use the relation {(x, x)} on X (our own). Preservation forces (Fₓ(x), Fₓ(x)) into that singleton, hence Fₓ(x) = x (our own).

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “parametricity is an abstract uniformity property enjoyed by parametrically polymorphic functions, which captures the intuition that all instances of a polymorphic function act the same way.”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Relational parametricity makes uniform iterators exactly the Church numerals

**Remember:** Count how often F applies successor, starting from zero.

*True by definition.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A family F sends each endomorphism f of a set X to an endomorphism Fₓ(f) of X. It is parametric if, whenever f and g preserve a relation R between their sets, Fₓ(f) and Fᵧ(g) also preserve R (our own).

**Problem.** Every parametric family F acts as f ↦ fⁿ for one fixed natural number n.

**How the definition helps.** Let n = Fℕ(successor)(0), and for f : X → X and x ∈ X relate each natural number k to fᵏ(x) (our own). Successor and f preserve this relation, so Fℕ(successor) and Fₓ(f) send the related pair (0, x) to a related pair (n, Fₓ(f)(x)) (our own). Hence Fₓ(f)(x) = fⁿ(x) (our own).

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “the parametrically polymorphic functions of type ∀X. T(X) → T(X) are one-to-one with natural numbers.”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Singleton induction makes extending a value from the center hold by definition

**Remember:** Singleton induction extends any value at the center to a section.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A contractible type can be defined as a pointed type, one with a chosen center, that satisfies singleton induction. That is, for every type family over it, each value at the center extends to a section taking that value there.

**Problem.** Every type family over a contractible type has a section that takes a given value at the center.

**How the definition helps.** The theorem is singleton induction itself, applied to the given family and value. The computation rule gives the equality at the center (our own).

**nLab:** [contractible type](https://ncatlab.org/nlab/show/contractible+type). It says: “A contractible type is a pointed type which satisfies singleton induction.”

**Sources:** none listed. No primary source with a working link was found.

### Streams as a terminal coalgebra make unique stream generation true by definition

**Remember:** One output and one next state determine the whole stream.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A stream coalgebra is a set of states S with an output map S → A and a next-state map S → S. Streams form the terminal one: every stream coalgebra has exactly one map into streams that preserves output and next state (our own).

**Problem.** Given an output and a next state for every state, exactly one map from states to streams respects both operations.

**How the definition helps.** The theorem is terminality read in words (our own). A map preserves the two operations exactly when each state's stream has the current output as head and the next state's stream as tail (our own).

**nLab:** [coinductive type](https://ncatlab.org/nlab/show/coinductive+type). It says: “it is possible instead to dualize the alternative characterization of inductive types as initial algebras for a notion of coinductive types as terminal coalgebras”

**Sources:**

- [Ahrens, Capriotti and Spadotti (2015), Non-wellfounded Trees in Homotopy Type Theory, TLCA 2015, LIPIcs 38](https://doi.org/10.4230/LIPIcs.TLCA.2015.17)

### Subtypes defined by mere propositions get their equality from the underlying type

**Remember:** If proofs carry no data, only the element matters.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Let P assign to each x in A a mere proposition, a type with a path between any two elements. The subtype of A cut out by P consists of pairs (x, p) with p a proof of P(x).

**Problem.** Two elements of a subtype are equal when their underlying elements of A are equal. So the subtype sits inside A like a subset.

**How the definition helps.** Proofs of P(x) carry no data, so a pair is fixed by its first component (our own). A path between first components transports the first proof to a proof that equals the second, because that fiber is a mere proposition (our own). The equality rule for dependent pairs then gives the path (our own).

**nLab:** [embedding of types](https://ncatlab.org/nlab/show/embedding+of+types). It says: “with the witness that π₁ is an embedding given by the fact that the membership relation x ∈ P is a proposition for all elements x:A and material subtypes P:A → Prop.”

**Paper or page:** [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Suppose P : A → 𝒰 is a type family such that P(x) is a mere proposition for all x : A. If u, v : ∑ x:A P(x) are such that pr₁(u) = pr₁(v), then u = v.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Suspension as a higher inductive type gives the loop space adjunction

**Remember:** The basepoint meridian turns the other meridians into loops.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55P40, 55P35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The suspension of a pointed space X is freely generated by two points, north and south, and a path from north to south (our own), a meridian, for each point of X. Its chosen point is north, and the meridian at the basepoint of X ties south to north (our own).

**Problem.** Pointed maps, which preserve the chosen point, out of the suspension of X correspond naturally to pointed maps from X into the loop space of the target.

**How the definition helps.** By suspension recursion, a map out of the suspension is just an image for each pole and a path for each meridian (our own). Pointedness fixes the image of north, and the basepoint meridian ties the image of south to it (our own). Each meridian image followed by the reversed basepoint meridian image is a loop, and conversely loops give meridians with the target basepoint at both poles (our own).

**nLab:** [suspension type](https://ncatlab.org/nlab/show/suspension+type). It says: “representing the meridians from the north to the south pole”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### The circle as a higher inductive type has fundamental group ℤ

**Remember:** The circle is freely made from one point and one loop, and nothing else.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 03B38 (Type theory), 55Q05. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The circle type is freely generated by a point base and a path loop from base to itself.

**Problem.** The loop space of the circle at base is equivalent to ℤ. Consequently its fundamental group is isomorphic to the additive group of integers.

**How the definition helps.** The definition makes the statement possible: it describes the loops of a type made freely from one point and one loop. The Licata–Shulman encode–decode proof does the work, with univalence turning the successor equivalence of ℤ into a family over the circle that counts winding numbers (our own).

**nLab:** [circle type](https://ncatlab.org/nlab/show/circle+type), [higher inductive type](https://ncatlab.org/nlab/show/higher+inductive+type), [fundamental group of the circle is the integers](https://ncatlab.org/nlab/show/fundamental+group+of+the+circle+is+the+integers). It says: “Using the univalence axiom, one can prove that the loop space \`base == base\` of the circle type is equivalent to the integers.”

**Sources:**

- [Daniel R. Licata, Michael Shulman, Calculating the Fundamental Group of the Circle in Homotopy Type Theory, LICS 2013, arXiv:1301.3443](https://arxiv.org/abs/1301.3443)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### The cumulative hierarchy as a higher inductive type has extensionality built in

**Remember:** Put extensionality into the constructors, and V satisfies it by definition.

*True by definition.* MSC 03B38 (Type theory), 03E30, 03E70. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** V is the higher inductive set freely generated by sets sup(f), one for each map f from a small type into V. Its path constructor makes sup(f) = sup(g) whenever each value of either map merely occurs among the values of the other (our own).

**Problem.** V satisfies extensionality: two sets with the same elements are equal. More precisely, equality in V is exactly bisimulation.

**How the definition helps.** The path constructor is extensionality: having the same elements is exactly its hypothesis (our own). For bisimulation, induction on V turns matching bisimilar children into matching equal children, and the converse holds by reflexivity and transport (our own).

**Paper or page:** [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “In type theory with AC and a universe 𝒰, the cumulative hierarchy V is a model of Zermelo–Fraenkel set theory with choice, ZFC.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### The HoTT axiom of choice asks for a set as index type

**Remember:** Choice is safe over sets, not over types with hidden symmetries.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03E25. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Set-indexed choice says the following for a set X, a type where any two paths with the same endpoints are equal. If each set Y(x) is merely inhabited, known to be nonempty with no witness chosen, then a section of Y merely exists.

**Problem.** For a set X and a family of sets Y(x), the axiom of choice (∏ x:X ‖Y(x)‖) → ‖∏ x:X Y(x)‖ is consistent with univalence. If X may be any type, the statement is false.

**How the definition helps.** Requiring a set as index rules out types with nontrivial loops, such as the type of two-element sets, whose swap is a nonidentity loop (our own). Over that type, paths from a fixed point to each index form merely inhabited sets, and a section would contract the type and kill the swap (our own). For set indices, the simplicial set model gives relative consistency (our own).

**Paper or page:** [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “The axiom of choice is equivalent to the statement that for any set X and any Y : X → 𝒰 such that each Y(x) is a set, we have (∏ x:X ‖Y(x)‖) → ‖∏ x:X Y(x)‖.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Univalence lets you prove facts about equivalences by checking identities

**Remember:** Check the identity map, and univalence gives every equivalence.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Univalence is the axiom that the canonical map from equalities A = B in a universe to equivalences A ≃ B is itself an equivalence. So equivalences between types are the same as equalities between them.

**Problem.** Equivalence induction reduces any family D(A, B, e), indexed by types and equivalences between them, to the identity cases. A witness of D(A, A, id) for each A gives a witness in every case.

**How the definition helps.** Under univalence, a family over equivalences is a family over equalities, and path induction reduces a statement about all equalities to reflexivity. Reflexivity corresponds to the identity equivalence, so the identity case suffices. The nLab notes that equivalence induction is in fact equal in strength to univalence.

**nLab:** [equivalence induction](https://ncatlab.org/nlab/show/equivalence+induction). It says: “Conversely, corollary 5.8.5 of the HoTT Book derives equivalence induction from the univalence axiom.”

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Given any type family D … and function d : ∏ A:𝒰 D(A, A, id A), there exists f : ∏ A,B:𝒰 ∏ e:A≃B D(A, B, e) such that f(A, A, id A) = d(A) for all A : 𝒰.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Univalence makes isomorphic structures equal

**Remember:** Equal types are equivalent types, so equal groups are isomorphic groups.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The univalence axiom says that, for types A and B in a universe, the canonical map from identifications A = B to equivalences A ≃ B is itself an equivalence. A group is a type with structure built from dependent pairs, dependent functions and identity types, so an identification of groups unfolds through these layers.

**Problem.** Under univalence, the type of identifications of two groups is equivalent to the type of group isomorphisms between them. So isomorphic groups are equal, and every property of one transfers to the other.

**How the definition helps.** Univalence gives extensionality principles for dependent pairs and dependent functions. A group structure is a stack of such types, so an identification of two groups unfolds, layer by layer, into a bijection of carriers with the homomorphism property.

**nLab:** [structure identity principle](https://ncatlab.org/nlab/show/structure+identity+principle), [univalence axiom](https://ncatlab.org/nlab/show/univalence+axiom). It says: “the above extensionality principles (eq:ExtensionalityPrinciples) imply that the type of identifications of groups is equivalently that of bijections of the underlying types and equipped with the group homomorphism-property”

**Sources:**

- [Thierry Coquand, Nils Anders Danielsson, Isomorphism is equality, Indagationes Mathematicae 24 (2013) 1105–1120](https://doi.org/10.1016/j.indag.2013.09.002)
- [Benedikt Ahrens, Paige Randall North, Michael Shulman, Dimitris Tsementzis, A higher structure identity principle, LICS 2020, arXiv:2004.06572](https://arxiv.org/abs/2004.06572)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Univalent categories make fully faithful, essentially surjective functors equivalences without choice

**Remember:** Isomorphic objects are uniquely equal, so preimages need no choice.

*True by definition.* MSC 03B38 (Type theory), 18A05. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A precategory is univalent if equalities of objects are the same as isomorphisms between them. Precisely, for every two objects, the canonical function from their equality type to their isomorphism type is an equivalence.

**Problem.** A fully faithful and essentially surjective functor whose domain is a univalent category is an equivalence of categories, with no choice principle.

**How the definition helps.** By full faithfulness and source univalence, the preimages with a chosen isomorphism to a given target object form a mere proposition, so no choice principle is needed (our own). Essential surjectivity then gives one preimage for each object, and full faithfulness lifts arrows to give the inverse functor (our own).

**nLab:** [univalent category](https://ncatlab.org/nlab/show/univalent+category), [Rezk completion](https://ncatlab.org/nlab/show/Rezk+completion). It says: “the statement "a fully faithful and essentially surjective functor is an equivalence" for strict categories is equivalent to the axiom of choice, for precategories it is just false, and for univalent categories it is just true.”

**Sources:**

- [Benedikt Ahrens, Chris Kapulkin, Michael Shulman, Univalent categories and the Rezk completion, Mathematical Structures in Computer Science 25 (2015) 1010–1039, arXiv:1303.0584](https://arxiv.org/abs/1303.0584)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Binder-free combinators make confluence follow from nonoverlapping rewrite rules

**Remember:** Two rules, no binders, no overlaps, so rewriting always rejoins.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus), 68Q42. arXiv cs.LO. Level 3: graduate.

**Definition.** Combinatory logic builds terms by application alone from the constants S and K, with no variable binding. It rewrites by K x y → x and S x y z → x z (y z). In these two left sides each variable occurs once, and they do not overlap (our own).

**Problem.** The S and K rules are confluent. Any two terms obtained from one term by rewriting can be rewritten further to a common term.

**How the definition helps.** These two facts make the system orthogonal (our own). The confluence theorem for orthogonal term rewriting then gives a common reduct (our own).

**nLab:** [combinatory logic](https://ncatlab.org/nlab/show/combinatory+logic). It says: “Since this move circumvents the necessity of variable management, combinatory logic is important for applications in computer science and linguistics.”

**Wikipedia:** [Combinatory logic](https://en.wikipedia.org/wiki/Combinatory_logic). It says: “In contrast, evaluating expressions in combinatory logic is much simpler, because there is no notion of substitution.”

**Sources:** none listed. No primary source with a working link was found.

### De Bruijn indices make α-equivalence the same as equality

**Remember:** A nameless variable says how many λs back its binder is.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A de Bruijn index replaces each bound variable by the number of λs between it and its binder, counting the binder, so λx. λy. x becomes λ λ 2.

**Problem.** With de Bruijn indices, two terms are α-equivalent exactly when they are syntactically equal, and substitution needs no renaming of bound variables.

**How the definition helps.** An index names its binder by position, so the name of the bound variable disappears. Thus, with free variables fixed, two terms are α-equivalent exactly when they have the same indexed tree (our own). Substitution shifts indices under binders and never renames (our own).

**Wikipedia:** [De Bruijn index](https://en.wikipedia.org/wiki/De_Bruijn_index). It says: “Terms written using these indices are invariant with respect to α-conversion, so the check for α-equivalence is the same as that for syntactic equality.”

**Sources:**

- [de Bruijn, N. G. (1972). Lambda calculus notation with nameless dummies, a tool for automatic formula manipulation, with application to the Church–Rosser theorem. Indagationes Mathematicae 34, 381–392.](https://doi.org/10.1016/1385-7258(72)90034-0)

### Parallel reduction gives a short proof of the Church–Rosser theorem

**Remember:** Reduce all chosen redexes at once, and the diamond closes in one step.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** Parallel β-reduction M ⇒ M′ contracts any chosen set of redexes in M at once, possibly none. Formally, it is the least relation that fixes variables and acts on all immediate subterms at once. It also sends (λx.M)N to M′\[x := N′\] whenever M ⇒ M′ and N ⇒ N′ (our own).

**Problem.** If a λ-term reduces to N₁ and to N₂, then N₁ and N₂ reduce to a common term (the Church–Rosser theorem).

**How the definition helps.** Parallel reduction has the diamond property, and its reflexive transitive closure is ordinary β-reduction, so the diamond extends to many steps. The diamond holds because every parallel reduct of M reaches the complete development of M, which contracts all its redexes, in one parallel step (our own).

**Wikipedia:** [Church–Rosser theorem](https://en.wikipedia.org/wiki/Church%E2%80%93Rosser_theorem). It says: “We introduce a new reduction →∥ whose reflexive transitive closure is ↠β and which satisfies the diamond property.”

**Sources:**

- [Church, A. and Rosser, J. B. (1936). Some properties of conversion. Transactions of the American Mathematical Society 39, 472–482.](https://doi.org/10.1090/S0002-9947-1936-1501858-0)

### Reducibility defined by type makes strong normalization provable by induction

**Remember:** Good functions are those that send good inputs to good outputs.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 03B38. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** Tait defines the reducible terms of the simply typed λ-calculus by induction on type. At a base type they are the strongly normalizing terms, those with no infinite reduction sequence. At U → V, a term t is reducible when t u is reducible for every reducible u of type U.

**Problem.** Strong normalization: in the simply typed λ-calculus, every reduction sequence of a well-typed term ends.

**How the definition helps.** The arrow clause makes reducibility pass through application, so an induction on typings goes through where strong normalization alone fails (our own). Type induction shows that reducible terms are strongly normalizing, and typing induction shows that substituting reducible terms for variables gives a reducible term (our own). Variables are reducible, so every well-typed term is reducible and hence strongly normalizing (our own).

**nLab:** [logical relation](https://ncatlab.org/nlab/show/logical+relation). It says: “Although there is no precise definition, typically a logical relation (or logical predicate) corresponds to a family of (sometimes unary) relations defined by induction on types”

**Sources:**

- [W. W. Tait, Intensional interpretations of functionals of finite type I, Journal of Symbolic Logic 32 (1967) 198–212](https://doi.org/10.2307/2271658)

### Terms without head normal form, not without normal form, are meaningless

**Remember:** A term means something once its head settles.

*Rules out counterexamples.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A λ-term is unsolvable if no sequence of β-reductions takes it to a head normal form λx₁…xₙ. y M₁ … Mₖ, a term with a variable y at its head (n, k ≥ 0) (our own).

**Problem.** Equating all unsolvable terms, those without a head normal form, gives a consistent theory of the untyped λ-calculus. Equating all terms without a normal form, as Church proposed, is inconsistent.

**How the definition helps.** Unsolvable terms never expose a head variable, so Böhm-tree semantics can send them all to ⊥ and still separate distinct heads, which gives consistency (our own). Terms without a normal form can still have a head: with Ω = (λx.xx)(λx.xx), the terms λx.xKΩ and λx.xSΩ give K and S when applied to K (our own). Equating these two terms would thus equate K and S, which collapses the calculus (our own).

**Wikipedia:** [Böhm tree](https://en.wikipedia.org/wiki/B%C3%B6hm_tree). It says: “We thus see that not all non-normalizing terms are equivalent.”

**Sources:**

- [H. P. Barendregt, The type free lambda calculus, in Handbook of Mathematical Logic, North-Holland 1977, 1091–1132](https://doi.org/10.1016/S0049-237X(08)71129-7)

### Bisimulations copy the diamond clause, so bisimilar worlds satisfy the same formulas

**Remember:** Match every move both ways, and no modal formula can tell the difference.

*True by definition. Confidence: medium.* MSC 03B45 (Modal logic (including the logic of norms)), 03B42, 68Q85. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A bisimulation is a relation between worlds of two Kripke models such that related worlds agree on every propositional variable. For each accessibility relation, every successor of either related world must have a related successor of the other.

**Problem.** Two worlds related by a bisimulation satisfy the same modal formulas.

**How the definition helps.** The back-and-forth clause is exactly what the truth clause for ◇ needs, so induction on the formula goes through (our own). Variables and Boolean connectives are immediate, and for ◇ a witnessing successor on one side has a related successor on the other side (our own).

**Paper or page:** [Open Logic Project: Applied Modal Logic: Epistemic Logic](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If ⟨M₁, w₁⟩ ↔︎ ⟨M₂, w₂⟩, then for every formula A, we have that M₁, w₁ ⊩ A iff M₂, w₂ ⊩ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Necessity and possibility as base change give the S5 modal laws

**Remember:** Necessary means true in every world, possible means true in some world.

*True by definition. Confidence: medium.* MSC 03B45 (Modal logic (including the logic of norms)), 03G30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** For propositions P indexed by worlds W, □P holds at a world when P(w) holds for all w ∈ W. ◇P holds at a world when P(w) holds for some w ∈ W, so neither depends on the current world (our own).

**Problem.** These operators satisfy □(P → Q) → (□P → □Q), □P → P, □P → □□P, P → ◇P, and ◇P → □◇P.

**How the definition helps.** Since □P and ◇P do not depend on the current world, once true they hold everywhere, which gives □P → □□P and ◇P → □◇P (our own). The current world is one of all worlds, which gives □P → P and P → ◇P, and applying implication world by world gives distribution (our own).

**nLab:** [necessity and possibility](https://ncatlab.org/nlab/show/necessity+and+possibility), [S5 modal logic](https://ncatlab.org/nlab/show/S5+modal+logic). It says: “it is just the interpretation of the universal quantifier "for all" ∀ and of the existential quantifier "there exists" ∃.”

**Sources:**

- [Steve Awodey, Category Theory, Oxford University Press (2006), p. 279](https://doi.org/10.1093/acprof:oso/9780198568612.001.0001)
- [Gavin M. Bierman, Valeria de Paiva, On an intuitionistic modal logic, Studia Logica 65 (2000) 383–416](https://doi.org/10.1023/A:1005291931660)

### Defining types as ultrafilters of formulas makes the type space compact

**Remember:** Types are ultrafilters, and spaces of ultrafilters are always compact.

*True by definition.* MSC 03C07 (Basic properties of first-order languages and structures), 06E15. arXiv math.LO. Level 3: graduate.

**Definition.** A complete type in variables x of a classical first-order theory T is an ultrafilter on the Boolean algebra of x-formulas modulo provable equivalence in T. Each formula gives a basic open set: the types that contain it.

**Problem.** The space of complete types of a first-order theory is compact.

**How the definition helps.** This makes the type space exactly the Stone space of the formula algebra. Stone spaces are compact, by the ultrafilter lemma (our own).

**nLab:** [type (in model theory)](https://ncatlab.org/nlab/show/type+%28in+model+theory%29). It says: “By Stone duality, the set of all complete x-types of a theory T inherits a Stone topology”

**Sources:** none listed. No primary source with a working link was found.

### The elementary diagram turns elementary embeddings into models of one theory

**Remember:** Name every element, then record every true sentence about the names.

*True by definition.* MSC 03C07 (Basic properties of first-order languages and structures), 03C30. arXiv math.LO. Level 3: graduate.

**Definition.** The elementary diagram of a structure M is the set of all sentences true in M, in the language with a new constant naming each element of M.

**Problem.** A structure N in the expanded language models the elementary diagram of M exactly when the named values define an elementary embedding M → N. This embedding preserves and reflects every first-order formula in the original language.

**How the definition helps.** N satisfies the diagram exactly when every true statement about named elements of M stays true of their values in N, which is what an elementary embedding requires (our own). The diagram holds each such sentence or its negation, so truth is reflected too, and the sentences a ≠ b give injectivity (our own).

**nLab:** [diagram of a first-order structure](https://ncatlab.org/nlab/show/diagram+of+a+first-order+structure). It says: “The elementary diagram of M, written EDiag(M), is the set of all ℒ-sentences possibly using constants cₘ which are true in M”

**Sources:** none listed. No primary source with a working link was found.

### Existentially closed fields make the weak Nullstellensatz almost a definition

**Remember:** Solvable in some extension means already solvable here.

*True by definition. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics), 03C60, 14A10. arXiv math.LO, math.AC. Level 3: graduate.

**Definition.** A model M of a theory T is existentially closed if every existential statement with parameters in M that holds in some extension of M modelling T also holds in M.

**Problem.** If polynomials generate a proper ideal in K\[x₁, …, xₙ\], with K algebraically closed, then they have a common zero in Kⁿ (the weak Nullstellensatz).

**How the definition helps.** A proper ideal has a common zero in some extension field of K, namely the quotient by a maximal ideal containing it (our own). By Hilbert's basis theorem finitely many generators suffice, so this zero is an existential statement, and algebraically closed fields are existentially closed among fields (our own). That last fact follows from quantifier elimination for algebraically closed fields and the existence of algebraic closures (our own).

**Wikipedia:** [Existentially closed model](https://en.wikipedia.org/wiki/Existentially_closed_model), [Model complete theory](https://en.wikipedia.org/wiki/Model_complete_theory). It says: “If A is a subfield of B, then A is existentially closed in B if and only if every system of polynomials over A that has a solution in B also has a solution in A.”

**Sources:**

- [Robinson, A. (1956). Complete Theories. Studies in Logic and the Foundations of Mathematics, North-Holland, Amsterdam.](https://doi.org/10.1016/S0049-237X(08)X7071-5)

### Naming every orbit of an oligomorphic group gives quantifier elimination

**Remember:** Name the orbits, and every formula becomes a finite list of names.

*True by definition. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics), 03C35, 20B07. arXiv math.LO. Level 3: graduate.

**Definition.** A permutation group on a countable set is oligomorphic if it has finitely many orbits on n-tuples for every n. Its canonical structure has one relation for each orbit, interpreted as exactly that orbit (our own).

**Problem.** The theory of the canonical structure of an oligomorphic permutation group eliminates quantifiers. That is, every formula is equivalent to a formula without quantifiers.

**How the definition helps.** Every group element preserves the named orbits, so each parameter-free formula defines a union of orbits (our own). There are finitely many orbits, so that union is a finite disjunction of orbit relations, or false if it is empty (our own).

**nLab:** [omega-categorical structure](https://ncatlab.org/nlab/show/omega-categorical+structure). It says: “The canonical (orbit) structure induced by an oligomorphic (finitely many orbits in each power) permutation group on a countable set is ω-categorical.”

**Sources:** none listed. No primary source with a working link was found.

### Substructure completeness is a semantic test for quantifier elimination

**Remember:** Fix a substructure, and all models that contain it agree on everything.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics). arXiv math.LO. Level 3: graduate.

**Definition.** A theory T is substructure complete if T plus all quantifier-free facts about a substructure A is complete, for every model M of T and every substructure A of M. In words, all models of T that contain A agree on every statement about A.

**Problem.** Allow empty substructures and the quantifier-free sentences true and false. Then a first-order theory eliminates quantifiers exactly when it is substructure complete.

**How the definition helps.** Quantifier elimination reduces each statement about A to a quantifier-free fact, which the facts about A decide (our own). Conversely, tuples with the same quantifier-free type generate isomorphic substructures, so they get the same full type (our own). Compactness turns this into a quantifier-free equivalent for each formula (our own).

**nLab:** [substructure complete theory](https://ncatlab.org/nlab/show/substructure+complete+theory). It says: “One wants an equivalent and purely semantic characterization of quantifier elimination.”

**Sources:**

- [David Marker, Model Theory: An Introduction, Graduate Texts in Mathematics 217, Springer, 2002 (theorem 3.14 as cited by the nLab)](https://doi.org/10.1007/b98860)

### Defining an ultraproduct as a colimit gives it first-order structure for free

**Remember:** Each symbol has finitely many arguments, so it passes through the gluing.

*True by definition.* MSC 03C20 (Ultraproducts and related constructions), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Let U be an ultrafilter on an index set I. The ultraproduct of structures indexed by I is the filtered colimit of the products over the sets in U, along restriction to smaller sets in U.

**Problem.** An ultraproduct of structures for one first-order language carries a canonical structure for that language.

**How the definition helps.** Filtered colimits of sets commute with finite products, so every finite-arity operation of the products passes to the colimit. Each product carries the language coordinatewise, and restrictions preserve it (our own). A relation holds on a tuple when its representatives satisfy it on some set in U (our own).

**nLab:** [ultraproduct](https://ncatlab.org/nlab/show/ultraproduct). It says: “since the taking of filtered colimits commutes with finite limits in Set, we get a canonically induced structure on the ultraproduct”

**Sources:** none listed. No primary source with a working link was found.

### One conclusion per Horn clause lets reduced products preserve it

**Remember:** Premises meet inside the filter, and a single conclusion cannot split.

*Rules out counterexamples.* MSC 03C20 (Ultraproducts and related constructions), 08C15. arXiv math.LO. Level 3: graduate.

**Definition.** A universal Horn sentence says: for all x, if finitely many atomic formulas hold, then one atomic formula holds, or falsity. In a reduced product modulo a proper filter, an atomic formula holds when the set of factors where it holds lies in the filter (our own).

**Problem.** A universal Horn sentence that is true in every factor is true in their reduced product.

**How the definition helps.** A filter is closed under finite intersections, so the premises hold together on one filter set, and the single conclusion holds there too (our own). Falsity as conclusion would make that set empty, against properness (our own). Two conclusions fail: singleton factors satisfying only P and only Q both satisfy ∀x (P(x) ∨ Q(x)), but their direct product satisfies neither at its one point (our own).

**Wikipedia:** [Horn clause](https://en.wikipedia.org/wiki/Horn_clause). It says: “From the model-theoretical point of view, Horn sentences are important since they are exactly (up to logical equivalence) those sentences preserved under reduced products”

**Sources:**

- [Alfred Horn, On sentences which are true of direct unions of algebras (1951)](https://doi.org/10.2307/2268661)

### Ultrafilters make Łoś's theorem hold for every first-order formula

**Remember:** An ultrafilter decides every subset, so the ultraproduct decides every formula.

*Rules out counterexamples. Confidence: medium.* MSC 03C20 (Ultraproducts and related constructions). arXiv math.LO. Level 3: graduate.

**Definition.** An ultrafilter on X is a family of subsets, closed under finite intersections and supersets and not containing ∅, that contains A or its complement for every A ⊆ X. The ultraproduct identifies tuples that agree on a set in the ultrafilter.

**Problem.** A first-order formula holds of an ultraproduct tuple exactly when its coordinate truth set belongs to the ultrafilter. In particular, an ultrapower of a model of T is again a model of T.

**How the definition helps.** Choosing A or its complement makes the truth set of ¬φ lie in the ultrafilter exactly when that of φ does not, so the induction on formulas passes negation. Atoms hold by the product structure, conjunction uses intersections, and ∃ uses witnesses chosen coordinate by coordinate (our own). The filter on two indices that contains only their union fails at negation on either singleton (our own).

**nLab:** [ultrapower](https://ncatlab.org/nlab/show/ultrapower), [Łoś ultraproduct theorem](https://ncatlab.org/nlab/show/%C5%81o%C5%9B+ultraproduct+theorem). It says: “Here one needs all of the ultrafilter conditions, in particular one needs condition 4 in order to accommodate satisfaction of formulas involving instances of negation.”

**Sources:**

- [Hisashi Aratake, Sheaves of Structures, Heyting-Valued Structures, and a Generalization of Łoś's Theorem, 2020, arXiv:2012.04317](https://arxiv.org/abs/2012.04317)

### Skolem functions turn the downward Löwenheim–Skolem theorem into a closure argument

**Remember:** Add a witness for every true existential, and truth is preserved.

*True by definition.* MSC 03C30 (Other model constructions), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** For each formula φ(y, x), choose a Skolem function that returns a witness y for parameters x whenever one exists in M, and any element otherwise. The Skolem hull of A is the least subset of M containing A and closed under all these functions, nullary ones included (our own).

**Problem.** Every structure M in a language σ has an elementary substructure containing a given set A, of size at most \|A\| + \|σ\| + ℵ₀ (the downward Löwenheim–Skolem theorem). An elementary substructure has the same first-order truths about its elements as M.

**How the definition helps.** A set closed under witness functions contains a witness for every true existential statement, including y = f(x), so it is a substructure that passes the Tarski–Vaught test (our own). There are at most \|σ\| + ℵ₀ witness functions, each of finite arity, so countably many closure stages give the size bound (our own).

**Wikipedia:** [Löwenheim–Skolem theorem](https://en.wikipedia.org/wiki/L%C3%B6wenheim%E2%80%93Skolem_theorem), [Skolem normal form](https://en.wikipedia.org/wiki/Skolem_normal_form). It says: “The trick used in this proof is essentially due to Skolem, who introduced function symbols for the Skolem functions fᵩ into the language.”

**Sources:**

- [Löwenheim, L. (1915). Über Möglichkeiten im Relativkalkül. Mathematische Annalen 76, 447–470.](https://doi.org/10.1007/BF01458217)

### Counting models of one cardinality makes Morley's theorem statable

**Remember:** Fix the size first, then ask whether the model is unique.

*Makes the theorem clean to state or prove.* MSC 03C35 (Categoricity and completeness of theories), 03C45. arXiv math.LO. Level 3: graduate.

**Definition.** A theory is κ-categorical if it has exactly one model of cardinality κ, up to isomorphism.

**Problem.** Morley's theorem says: a countable first-order theory that is categorical in one uncountable cardinal is categorical in every uncountable cardinal.

**How the definition helps.** Fixing one cardinality makes the statement nontrivial (our own), since by upward Löwenheim–Skolem a theory with an infinite model has models of every larger size. Morley's categoricity theorem, a long proof, then transfers uniqueness from one uncountable size to all of them (our own).

**Wikipedia:** [Categorical theory](https://en.wikipedia.org/wiki/Categorical_theory). It says: “By the upward Löwenheim–Skolem theorem, if a first-order theory has a model of infinite cardinality κ, then it has a model of any cardinality κ' &gt; κ. So it cannot be categorical.”

**Sources:**

- [Morley, M. (1965). Categoricity in power. Transactions of the American Mathematical Society 114, 514–538.](https://doi.org/10.1090/S0002-9947-1965-0175782-0)
- [Łoś, J. (1954). On the categoricity in power of elementary deductive systems and some related problems. Colloquium Mathematicum 3, 58–62.](https://doi.org/10.4064/cm-3-1-58-62)

### With no finite models, categoricity in one size gives completeness

**Remember:** Finite models escape Löwenheim–Skolem, so they must be ruled out.

*Rules out counterexamples.* MSC 03C35 (Categoricity and completeness of theories). arXiv math.LO. Level 3: graduate.

**Definition.** A theory is complete if it proves each sentence or its negation. It is κ-categorical if it has exactly one model of cardinality κ, up to isomorphism.

**Problem.** Łoś–Vaught test: a satisfiable theory with no finite models that is κ-categorical for some infinite κ at least the size of its language is complete. So the theories of dense linear orders without endpoints and of algebraically closed fields of a fixed characteristic are complete.

**How the definition helps.** Every model is infinite, so Löwenheim–Skolem gives it an elementarily equivalent model of size κ, and categoricity makes all these the same model (our own). So all models agree on every sentence, and the completeness theorem turns this into proofs (our own). Without the hypothesis, pure equality is categorical in every infinite size but does not decide whether exactly two elements exist (our own).

**Wikipedia:** [Łoś–Vaught test](https://en.wikipedia.org/wiki/%C5%81o%C5%9B%E2%80%93Vaught_test), [Categorical theory](https://en.wikipedia.org/wiki/Categorical_theory). It says: “Therefore, the theory is complete as all models are equivalent. The assumption that the theory have no finite models is necessary.”

**Sources:**

- [Łoś, J. (1954). On the categoricity in power of elementary deductive systems and some related problems. Colloquium Mathematicum 3, 58–62.](https://doi.org/10.4064/cm-3-1-58-62)
- [Vaught, R. L. (1954). Applications of the Löwenheim–Skolem–Tarski theorem to problems of completeness and decidability. Indagationes Mathematicae 16, 467–472.](https://doi.org/10.1016/S1385-7258(54)50058-2)

### Craig interpolation gives Beth definability as a corollary

**Remember:** Interpolate between two copies of a definition, and get an explicit definition.

*True by definition. Confidence: medium.* MSC 03C40 (Interpolation, preservation, definability), 03B45. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** Craig interpolation says that whenever φ ⊨ ψ, some formula θ in only their shared nonlogical symbols has φ ⊨ θ and θ ⊨ ψ. A formula φ implicitly fixes p if any two models of φ that agree on the other symbols agree on p (our own).

**Problem.** For propositional logics with classical Boolean connectives and uniform renaming, Craig interpolation gives Beth definability. Every propositional symbol implicitly fixed by a formula has an explicit definition using its other symbols.

**How the definition helps.** Implicit definability is an entailment between two copies of φ, so its interpolant is an explicit definition (our own). With q fresh, φ(p) ∧ p ⊨ φ(q) → q, and an interpolant θ mentions neither p nor q (our own). Then φ(p) ∧ p ⊨ θ and, renaming q to p, φ(p) ∧ θ ⊨ p, so φ(p) ⊨ p ↔︎ θ (our own).

**Paper or page:** [Interpolation for the two-way modal mu-calculus](https://arxiv.org/abs/2505.12899v3), [Propositional Dynamic Logic has Craig Interpolation: a tableau-based proof](https://arxiv.org/abs/2503.13276v1). It says: “The two-way modal μ-calculus has the Craig interpolation property and, as a corollary, the Beth definability property.”

**Sources:**

- [Interpolation for the two-way modal mu-calculus, arXiv:2505.12899 (2025)](https://arxiv.org/abs/2505.12899v3)
- [William Craig, Three uses of the Herbrand-Gentzen theorem in relating model theory and proof theory, Journal of Symbolic Logic 22 (1957)](https://doi.org/10.2307/2963594)

### Defining definable closure as the smallest closed set makes it idempotent

**Remember:** Closing a set twice adds nothing the second time.

*True by definition.* MSC 03C40 (Interpolation, preservation, definability), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** A subset of a model is definably closed if it contains every unique solution of a formula with parameters from that subset. The definable closure of A is the smallest such set containing A, the intersection of all of them (our own).

**Problem.** The definable closure of the definable closure of A equals the definable closure of A.

**How the definition helps.** Intersections preserve this closure condition because all the defining parameters belong to every set in the intersection (our own). Thus the definable closure is already closed, and taking its closure again returns the same set (our own).

**nLab:** [definable set](https://ncatlab.org/nlab/show/definable+set). It says: “there is the minimal definably closed subset B such that A ⊂ B ⊂ M, the definable closure B = dcl(A) of A”

**Sources:** none listed. No primary source with a working link was found.

### Ehrenfeucht–Fraïssé games turn inexpressibility into a winning strategy

**Remember:** Matching moves for n rounds preserves formulas of quantifier depth at most n.

*Makes the theorem clean to state or prove.* MSC 03C40 (Interpolation, preservation, definability), 03C13. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** In the n-round Ehrenfeucht–Fraïssé game on structures A and B, each round Spoiler picks an element in either structure and Duplicator answers in the other. Duplicator wins if the chosen elements satisfy the same atomic formulas in both, so each round mirrors one quantifier (our own).

**Problem.** If Duplicator has a winning strategy for n rounds, the structures agree on every sentence of quantifier depth at most n. Consequently, no first-order sentence defines even length among finite linear orders.

**How the definition helps.** Each quantifier is one move, so a winning strategy for n rounds keeps agreement through quantifier depth n, by the Ehrenfeucht–Fraïssé theorem (our own). On linear orders, Duplicator keeps corresponding gaps equal or both at least 2ʳ − 1 with r rounds left, matching short distances to the nearest end (our own). So orders of even and odd length at least 2ⁿ agree up to depth n (our own).

**Wikipedia:** [Ehrenfeucht–Fraïssé game](https://en.wikipedia.org/wiki/Ehrenfeucht%E2%80%93Fra%C3%AFss%C3%A9_game). It says: “It is easy to prove that if Duplicator wins this game for all finite n, that is, 𝔄 ∼ 𝔅, then 𝔄 and 𝔅 are elementarily equivalent.”

**Sources:**

- [Ehrenfeucht, A. (1961). An application of games to the completeness problem for formalized theories. Fundamenta Mathematicae 49, 129–141.](https://doi.org/10.4064/fm-49-2-129-141)

### Shelah's construction adds every definable quotient, so imaginaries are eliminated

**Remember:** Add a sort for every definable quotient, and nothing stays imaginary.

*True by definition. Confidence: medium.* MSC 03C45 (Classification theory, stability, and related concepts in model theory), 03C40. arXiv math.LO. Level 3: graduate.

**Definition.** Tᵉᵠ adds to T a new sort for every parameter-free definable equivalence relation E on tuples. The elements of that sort are the E-classes, and a new map sends each tuple to its class (our own).

**Problem.** Tᵉᵠ eliminates imaginaries. It is a conservative extension of T and is universal among the theories that interpret T and eliminate imaginaries.

**How the definition helps.** A quotient of imaginary tuples pulls back along the class maps to a quotient of real tuples, which already has a sort (our own). Every model of T expands uniquely by its actual quotients, which gives conservativity (our own). An interpretation in a theory that eliminates imaginaries extends along the quotient codes, uniquely up to definable isomorphism (our own).

**nLab:** [elimination of imaginaries](https://ncatlab.org/nlab/show/elimination+of+imaginaries). It says: “Shelah found he needed to eliminate imaginaries in a universal way, so he found a way to conservatively interpret each theory T in a theory Tᵉᵠ which eliminated all the imaginaries of T.”

**Sources:**

- [Bruno Poizat, Une théorie de Galois imaginaire, Journal of Symbolic Logic 48 no. 4 (1983) 1151–1170](https://doi.org/10.2307/2273680)

### Strong minimality holds in every extension, so models are classified by dimension

**Remember:** Minimal in every extension means one number, the dimension, decides the model.

*Rules out counterexamples. Confidence: medium.* MSC 03C45 (Classification theory, stability, and related concepts in model theory), 03C35. arXiv math.LO. Level 3: graduate.

**Definition.** A complete theory with infinite models is strongly minimal if, in every model, every subset of the home sort definable with parameters is finite or cofinite (our own).

**Problem.** A model of a strongly minimal theory is determined up to isomorphism by one cardinal, its dimension. So such a theory in a countable language is categorical in every uncountable cardinality.

**How the definition helps.** Strong minimality makes algebraic closure behave like linear span, with exchange, and gives a unique non-algebraic type over each set (our own). So each model is fixed by the size of an algebraic-closure basis, its dimension, which equals the model's size when the model is uncountable and the language countable (our own). The order (ℕ, &lt;) is minimal but not strongly minimal: a nonstandard element splits its extension into two infinite definable parts (our own).

**Wikipedia:** [Strongly minimal theory](https://en.wikipedia.org/wiki/Strongly_minimal_theory), [O-minimal theory](https://en.wikipedia.org/wiki/O-minimal_theory). It says: “It is called a strongly minimal set if this is true even in all elementary extensions.”

**Sources:**

- [Baldwin, J. T.; Lachlan, A. H. (1971). On strongly minimal sets. Journal of Symbolic Logic 36, 79–96.](https://doi.org/10.2307/2271517)

### In a monster model, types become orbits of automorphisms

**Remember:** The monster realizes every small situation and extends every small symmetry.

*True by definition. Confidence: medium.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)). arXiv math.LO. Level 3: graduate.

**Definition.** A monster model of a complete theory is a model of large size κ, in which small means of size below κ. It realizes every complete one-variable type over every small set, and it extends every elementary map between small sets to an automorphism.

**Problem.** Two small tuples in a monster model have the same type over a small set A exactly when an automorphism fixing A pointwise matches them. Every small model of T embeds elementarily into the monster.

**How the definition helps.** Equal types over A give an elementary map fixing A, which homogeneity extends to an automorphism, and conversely such an automorphism preserves all formulas over A (our own). A small model embeds by realizing, one element at a time, the type of the next element over the image so far (our own).

**nLab:** [monster model](https://ncatlab.org/nlab/show/monster+model), [type (in model theory)](https://ncatlab.org/nlab/show/type+%28in+model+theory%29). It says: “The most important aspects of monster models are saturation and homogeneity: all types over parameter sets of a certain size are realized, and all elementary embeddings of subsets can be extended to automorphisms.”

**Sources:**

- [John Baldwin, The Monster Model (notes)](http://homepages.math.uic.edu/~jbaldwin/pub/monster.pdf)

### Saturation uses parameter sets smaller than the model, or nothing is saturated

**Remember:** A model cannot realize the type that says 'I differ from everything here'.

*Rules out counterexamples.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)). arXiv math.LO. Level 3: graduate.

**Definition.** A model M is κ-saturated if it realizes every complete type, a consistent description of a possible element, over every parameter set of size less than κ. M is saturated if it is \|M\|-saturated.

**Problem.** Any two saturated models of a complete theory with the same cardinality are isomorphic. Without the limit on the size of parameter sets, no infinite model would be saturated.

**How the definition helps.** Small parameter sets let saturation extend a partial elementary bijection by one element on either side, so a back-and-forth construction gives the isomorphism (our own). Over all of an infinite M, the formulas x ≠ m for m ∈ M are finitely satisfiable (our own). By compactness they extend to a complete type that M does not realize (our own).

**Wikipedia:** [Saturated model](https://en.wikipedia.org/wiki/Saturated_model). It says: “The reason we only require parameter sets that are strictly smaller than the model is trivial: without this restriction, no infinite model is saturated.”

**Sources:**

- [Morley, M.; Vaught, R. (1962). Homogeneous universal models. Mathematica Scandinavica 11, 37–57.](https://doi.org/10.7146/math.scand.a-10648)

### The omitting types theorem needs a countable language and a non-isolated type

**Remember:** One formula forces a type to appear; without it, a countable model avoids it.

*Rules out counterexamples. Confidence: medium.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** A type p is isolated if one formula consistent with the theory implies every formula in p. A model omits p if no tuple in it satisfies all formulas of p.

**Problem.** For a consistent theory in a countable language, any nonisolated type in finitely many variables is omitted by some at most countable model. This is used to build prime and atomic models.

**How the definition helps.** A non-isolated type has no single formula forcing it, so a Henkin construction can make each named tuple miss some formula of the type at a finite stage (our own). A countable language gives countably many such tasks, so all of them can be met (our own). An isolated type cannot be omitted in a complete theory, since its isolating formula is realized in every model (our own).

**Wikipedia:** [Type (model theory)](https://en.wikipedia.org/wiki/Type_%28model_theory%29). It says: “The omitting types theorem says that conversely if p is not isolated then there is a countable model omitting p (provided that the language is countable).”

**Sources:** none listed. No primary source with a working link was found.

### Requiring interval endpoints in the structure gives o-minimal sets their suprema

**Remember:** A bounded finite union of intervals has a last right endpoint.

*Rules out counterexamples.* MSC 03C64 (Model theory of ordered structures; o-minimality). arXiv math.LO. Level 3: graduate.

**Definition.** An expansion of a dense linear order without endpoints is o-minimal if every definable subset of the line, with parameters, is a finite union of points and open intervals. The endpoints of these intervals must lie in the order or be ±∞.

**Problem.** In an o-minimal structure, every nonempty definable subset of the underlying line that is bounded above has a least upper bound.

**How the definition helps.** The endpoints lie in the structure, so the supremum of a nonempty bounded definable set is its largest right endpoint or largest isolated point (our own argument). Weak o-minimality allows convex pieces whose endpoints need not lie in the structure. For example, add to the real algebraic numbers a predicate for those between 0 and π; that bounded set has no supremum, because π is not algebraic (our own remark).

**Wikipedia:** [O-minimal theory](https://en.wikipedia.org/wiki/O-minimal_theory), [Weakly o-minimal structure](https://en.wikipedia.org/wiki/Weakly_o-minimal_structure). It says: “there are finitely many open intervals I₁,…,Iᵣ in M ∪ {±∞} and a finite set X₀ such that”

**Sources:**

- [Anand Pillay and Charles Steinhorn, Definable sets in ordered structures. I (1986)](https://doi.org/10.1090/S0002-9947-1986-0833697-X)

### Henkin semantics gives second-order logic a complete proof system

**Remember:** Let each model choose its own sets, and completeness comes back.

*Makes the theorem clean to state or prove.* MSC 03C85 (Second- and higher-order model theory), 03B16. arXiv math.LO. Level 3: graduate.

**Definition.** A Henkin model of second-order logic gives a domain and, for each arity, a chosen collection of relations satisfying the comprehension axioms. Relation quantifiers range only over the chosen collections (our own).

**Problem.** With Henkin semantics, the standard first-order deductive system is sound, complete and effective for second-order logic. With standard semantics no such system exists, by Gödel's incompleteness theorem.

**How the definition helps.** Each collection then acts as one more first-order sort with an application relation, so first-order soundness and completeness apply (our own). Standard semantics uses all relations and makes second-order arithmetic categorical, so a complete effective system would list all true arithmetic sentences, which Gödel's theorem forbids (our own).

**Wikipedia:** [Second-order logic](https://en.wikipedia.org/wiki/Second-order_logic). It says: “Henkin proved that the standard deductive system for first-order logic is sound, complete, and effective for second-order logic with Henkin semantics”

**Sources:**

- [Henkin, L. (1950). Completeness in the theory of types. Journal of Symbolic Logic 15, 81–91.](https://doi.org/10.2307/2266967)

### Abstract logics make Lindström's theorem possible to state

**Remember:** To call a logic the strongest, you first need a notion of logic in general.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C95 (Abstract model theory). arXiv math.LO. Level 3: graduate.

**Definition.** An abstract logic assigns to each relational vocabulary a set of sentences, each using finitely many symbols, and an isomorphism-invariant satisfaction relation that respects renaming and vocabulary expansion (our own). It is regular if it contains first-order logic and is closed under Boolean operations, existential quantification and relativization to unary predicates (our own).

**Problem.** Among regular abstract logics, first-order logic is the strongest with countable compactness and the downward Löwenheim–Skolem property. These say that every countable finitely satisfiable theory has a model, and every sentence with an infinite model has a countable model.

**How the definition helps.** A class of all logics, compared by the classes of structures they define, is needed before “strongest” means anything (our own). Lindström's proof then shows that each sentence of such a logic defines a first-order definable class (our own).

**Wikipedia:** [Lindström's theorem](https://en.wikipedia.org/wiki/Lindstr%C3%B6m%27s_theorem). It says: “Lindström's theorem is perhaps the best known result of what later became known as abstract model theory, the basic notion of which is an abstract logic”

**Sources:**

- [Lindström, P. (1969). On extensions of elementary logic. Theoria 35, 1–11.](https://doi.org/10.1111/j.1755-2567.1969.tb00356.x)

### Coding whole computation histories makes the halting check primitive recursive

**Remember:** Search for the whole computation, then read off its answer.

*True by definition.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D10. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Kleene's T(e, i, x) says that x codes a whole halting computation of program e on input i, and a primitive recursive U reads the output off x. Because x is the finished history, checking T needs only bounded loops, so T is primitive recursive (our own).

**Problem.** Kleene's normal form theorem: every computable function f equals U(μx T(e, n, x)) for some index e. Here μx means the least x with the property.

**How the definition helps.** Only the search for x is unbounded, so f(n) = U(μx T(e, n, x)) for an index e of f (our own). The search diverges exactly when the computation does (our own).

**Wikipedia:** [Kleene's T predicate](https://en.wikipedia.org/wiki/Kleene%27s_T_predicate). It says: “By the theorem, the definition of every general recursive function f can be rewritten into a normal form such that the μ operator is used only once”

**Sources:**

- [Kleene, S. C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical Society 53, 41–73.](https://doi.org/10.1090/S0002-9947-1943-0007371-8)

### Productive sets turn Gödel's first incompleteness theorem into one sentence

**Remember:** A productive set beats every list you offer with a new member.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03F40. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A set P is productive if a computable function f escapes every computably enumerable subset of P. That is, whenever the e-th computably enumerable set Wₑ lies inside P, f(e) lies in P but not in Wₑ.

**Problem.** Gödel's first incompleteness theorem: no sound, effectively axiomatized theory proves all true sentences of arithmetic.

**How the definition helps.** The set of true arithmetic sentences is productive, so no effective list of truths is complete (our own). The theorems of a sound, effectively axiomatized theory form such a list, so some true sentence is missing (our own).

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

**Definition.** A Martin-Löf test is a uniformly computably enumerable sequence of open sets Uₙ of binary sequences, each of fair-coin measure at most 2⁻ⁿ. A sequence is Martin-Löf random if no test catches it, that is, for every test it lies outside some Uₙ (our own).

**Problem.** Almost every infinite binary sequence is Martin-Löf random. Every random sequence obeys every probability-one law with effectively null exceptions, including the large-number and iterated-logarithm laws for fair coin tosses.

**How the definition helps.** Each test catches only a null set, and there are countably many tests, so almost every sequence is random (our own). Effective forms of the large-number and iterated-logarithm laws cover their exceptions by tests (our own). Allowing all null sets would exclude every sequence, since each singleton is null (our own).

**Wikipedia:** [Algorithmically random sequence](https://en.wikipedia.org/wiki/Algorithmically_random_sequence). It says: “defined "Martin-Löf randomness" by only allowing laws of randomness that are Turing-computable.”

**Sources:**

- [Martin-Löf, P. (1966). The definition of random sequences. Information and Control 9(6), 602–619.](https://doi.org/10.1016/S0019-9958(66)80018-9)

### Prefix-free programs make the halting probability a real number

**Remember:** Prefix-free programs share a total budget of 1.

*True by definition.* MSC 03D32 (Algorithmic randomness and dimension), 68Q30. arXiv math.LO, cs.IT. Level 3: graduate.

**Definition.** Chaitin's constant Ω is the sum of 2 to the power −\|p\| over all halting programs p of a universal machine. The halting programs must be prefix-free, meaning that no halting program is the start of another.

**Problem.** Chaitin's constant Ω, the halting probability of a prefix-free universal machine, is a real number between 0 and 1.

**How the definition helps.** Prefix-free programs mark disjoint sets of infinite binary sequences, of measure 2 to the power −\|p\| (our own), so the sum is at most 1 by Kraft's inequality. Universality gives a halting program, so Ω &gt; 0. If Ω were 1, enumerating halting programs until the sum passes 1 − 2⁻ⁿ would decide halting for all programs of length n, which is impossible (our own).

**Wikipedia:** [Chaitin's constant](https://en.wikipedia.org/wiki/Chaitin%27s_constant), [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “The requirement that the domain be prefix-free, together with Kraft's inequality, ensures that this sum converges to a real number between 0 and 1.”

**Sources:**

- [Chaitin, G. J. (1975). A theory of program size formally identical to information theory. Journal of the ACM 22, 329–340.](https://doi.org/10.1145/321892.321894)

### Bounded quantifiers in Σ₀ make Σ₁ sets exactly the computably enumerable sets

**Remember:** Bounded checks are computable, so one search in front gives semidecidable.

*True by definition. Confidence: medium.* MSC 03D55 (Hierarchies of computability and definability), 03D25. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A bounded formula has only quantifiers bounded by terms that do not contain the quantified variable. A set of natural numbers is Σ⁰₁ if a block of existential quantifiers in front of a bounded formula defines membership (our own).

**Problem.** A set of natural numbers is Σ⁰₁ if and only if it is computably enumerable, that is, some program lists its members. This is the first level of Post's theorem.

**How the definition helps.** A bounded formula can be checked by a finite search, so searching through witness tuples semidecides membership (our own). Conversely, membership in an enumerable set is witnessed by a finite computation, and checking a coded computation needs only bounded quantifiers (our own).

**Wikipedia:** [Arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy). It says: “The Σ⁰₁ sets of numbers are those definable by a formula of the form ∃n₁ ⋯ ∃nₖ ψ(n₁,…,nₖ,m) where ψ has only bounded quantifiers. These are exactly the recursively enumerable sets.”

**Sources:**

- [Kleene, S. C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical Society 53, 41–73.](https://doi.org/10.1090/S0002-9947-1943-0007371-8)

### Define computable reals by approximations, not by digits

**Remember:** Ask for approximations, not for digits.

*Makes the theorem clean to state or prove.* MSC 03D78 (Computation over the reals, computable analysis). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A real a is computable if some algorithm returns a rational r with \|r − a\| ≤ ε for every positive rational error bound ε.

**Problem.** With ε-approximations, one algorithm computes the sum and the product of any two computable reals from the programs that represent them. With decimal digits, no such algorithm exists.

**How the definition helps.** With error bounds, an algorithm can ask for its inputs to whatever precision the output needs (our own). For a product, a coarse first approximation bounds the inputs and so how much errors grow. With digits, the first digit of a sum can depend on whether a run of 9s in an input ever ends, which no algorithm can decide (our own).

**Wikipedia:** [Computable number](https://en.wikipedia.org/wiki/Computable_number). It says: “This lack of uniformity is one reason why the contemporary definition of computable numbers uses ε approximations rather than decimal expansions.”

**Sources:**

- [Turing, A. M. (1936/1937). On computable numbers, with an application to the Entscheidungsproblem. Proc. London Math. Soc. (2) 42, 230–265.](https://doi.org/10.1112/plms/s2-42.1.230)
- [Hirst, J. L. (2007). Representations of reals in reverse mathematics. Bull. Polish Acad. Sci. Math. 55(4), 303–316.](https://doi.org/10.4064/ba55-4-2)

### Every computable function on the real numbers is continuous

**Remember:** A finite look at the input can only fix the output approximately.

*True by definition. Confidence: medium.* MSC 03D78 (Computation over the reals, computable analysis). arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A name for x is a rational sequence (qₙ) satisfying \|qₙ − x\| ≤ 2⁻ⁿ for every natural number n. A function f is computable if one algorithm, reading any name for any x, produces a name for f(x).

**Problem.** Every computable function from ℝ to ℝ is continuous.

**How the definition helps.** An algorithm writes each output approximation after reading finitely many input terms, so points close to x get that same approximation (our own). Precisely, take a name of x with strict error bounds. Every nearby point has a name with the same first terms, so its value lies within twice that output error of f(x).

**Wikipedia:** [Computable analysis](https://en.wikipedia.org/wiki/Computable_analysis). It says: “One of the basic results of computable analysis is that every computable function from ℝ to ℝ is continuous.”

**Sources:**

- [K. Weihrauch, Computable Analysis: An Introduction, Springer (2000)](https://doi.org/10.1007/978-3-642-56999-9)

### Cardinals as initial ordinals make the supremum of cardinals their union

**Remember:** Take the union of the representatives to get the least cardinal bound.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** Represent each well-orderable cardinal by its initial ordinal, an ordinal with no bijection to any smaller ordinal.

**Problem.** The union of any set of initial ordinals is an initial ordinal, and it is their least upper bound.

**How the definition helps.** The union of a set of ordinals is already their least ordinal upper bound, so only initiality needs checking (our own). If a smaller ordinal β had a bijection with the union U, then β lies below some member κ, and κ ⊆ U injects into β (our own). The Schröder–Bernstein theorem then puts κ in bijection with β &lt; κ, which contradicts that κ is initial (our own).

**Paper or page:** [Proposition 1.9.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If every member of X is a cardinal, then ⋃ X is a cardinal.”

**Sources:** none listed. No primary source with a working link was found.

### Cofinality as the shortest unbounded sequence is always a regular ordinal

**Remember:** Cofinality is the shortest climb to the top, and it cannot shorten.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** The cofinality cf(α) of a nonzero limit ordinal α is the length of the shortest nondecreasing sequence in α with no upper bound below α. A nonzero limit ordinal is regular if it equals its cofinality.

**Problem.** For every nonzero limit ordinal α, cf(α) is regular, that is, cf(cf(α)) = cf(α).

**How the definition helps.** Composing two nondecreasing unbounded maps gives another one, so an unbounded sequence in cf(α) shorter than cf(α) would give a shorter unbounded sequence in α (our own). Here cf(α) is a nonzero limit, since a sequence with a last value is bounded. The identity on cf(α) gives the other inequality.

**nLab:** [cofinality](https://ncatlab.org/nlab/show/cofinality). It says: “In general, an ordinal number α such that ocf(α) = α is called regular, so every ordinal cofinality is regular.”

**Sources:** none listed. No primary source with a working link was found.

### Constructive well-orders are transitive, extensional and well-founded, not total

**Remember:** A well-order is a relation for induction, where predecessors determine the element.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 3: graduate.

**Definition.** A constructive well-order is a transitive relation ≺ on a set S in which elements with the same predecessors are equal and induction holds. Induction says that any subset of S containing each x whose predecessors all lie in it is all of S.

**Problem.** With this definition, every well-ordered set has an ordinal, by well-founded recursion without excluded middle. Under excluded middle, the definition agrees with the classical one.

**How the definition helps.** Induction allows well-founded recursion, which sends each element to the set of values of its predecessors (our own). Extensionality makes this map injective and transitivity makes its image an ordinal, without excluded middle, and with excluded middle totality follows by comparing ordinals. Totality is left out because a classical well-order on any set with two unequal elements would imply excluded middle.

**nLab:** [well-order](https://ncatlab.org/nlab/show/well-order). It says: “A classically well-ordered set is a choice set, and so if any set with at least 2 unequal elements has a classical well-order, then excluded middle follows.”

**Sources:**

- [P. Taylor, Intuitionistic sets and ordinals, Journal of Symbolic Logic 61 (1996)](https://doi.org/10.2307/2275781)

### Continuity at limits gives every normal function arbitrarily large fixed points

**Remember:** A normal function arrives exactly where its earlier values were heading.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** A function f on the ordinals is normal if it is strictly increasing and continuous at limits. Continuity means that at every nonzero limit γ, f(γ) is the supremum of the values f(ν) for ν &lt; γ, so f lands exactly where its earlier values were heading.

**Problem.** Every normal function has arbitrarily large fixed points. For example, α ↦ ℵ\_α is normal, so some cardinals κ satisfy κ = ℵ\_κ.

**How the definition helps.** Iterate f from any ordinal: the iterates increase to a limit, and continuity makes that limit a fixed point (our own). Strict increase gives f(α) ≥ α, so the iterates never decrease. The successor map α ↦ α + 1 is strictly increasing but not continuous at limits, and it has no fixed point.

**Wikipedia:** [Normal function](https://en.wikipedia.org/wiki/Normal_function). It says: “But f(α) = α + 1 is not normal because it is not continuous at any limit ordinal”

**Sources:**

- [Veblen, O. (1908). Continuous increasing functions of finite and transfinite ordinals. Transactions of the American Mathematical Society 9, 280–292.](https://doi.org/10.1090/S0002-9947-1908-1500814-9)

### Hartogs numbers make trichotomy of cardinals imply the axiom of choice

**Remember:** Every set has an ordinal too big to fit inside it.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** The Hartogs number of a set X is the least ordinal that does not inject into X. It exists without the axiom of choice.

**Problem.** If any two cardinalities are comparable, then every set can be well-ordered. So trichotomy for cardinals is equivalent to the axiom of choice.

**How the definition helps.** If cardinalities are comparable, X must inject into its Hartogs number, since that ordinal does not inject into X (our own). Pulling back the ordinal order along this injection well-orders X, and the well-ordering theorem turns this into choice. Conversely, under choice every cardinality is an initial ordinal, and ordinals are comparable.

**Wikipedia:** [Hartogs number](https://en.wikipedia.org/wiki/Hartogs_number). It says: “Conversely, trichotomy for cardinal numbers (the statement that any two cardinal numbers are comparable) thus implies that every set can be well-ordered, and hence implies the axiom of choice.”

**Sources:**

- [Hartogs, F. (1915). Über das Problem der Wohlordnung. Mathematische Annalen 76, 438–443.](https://doi.org/10.1007/BF01458215)

### Regular cardinals defined by small unions keep small colimits small

**Remember:** Fewer than κ small sets still give a small disjoint union.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** An infinite cardinal κ is regular if every disjoint union of fewer than κ sets of size less than κ has size less than κ.

**Problem.** Let κ be a regular cardinal. Every diagram of fewer than κ sets, each of size less than κ, has a colimit, the sets glued along the diagram's maps, of size less than κ.

**How the definition helps.** The colimit is a quotient of the disjoint union of the diagram's sets, and regularity makes that union smaller than κ (our own). A quotient is no larger than its source, since a well-order of the union picks one element from each class.

**nLab:** [regular cardinal](https://ncatlab.org/nlab/show/regular+cardinal). It says: “has all colimits (or just all coproducts) of size &lt; κ.”

**Sources:** none listed. No primary source with a working link was found.

### Scott's trick defines cardinality as the lowest-rank sets of that size

**Remember:** Keep only the lowest-rank copies, and the class becomes a set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** The Scott cardinal of X is the collection of sets in bijection with X whose rank is least among all such sets. These sets all lie in one stage V<sub>ρ+1</sub> of the set hierarchy, so they form a set.

**Problem.** With the axiom of foundation and no axiom of choice, every set has a cardinality in this sense, which is a set. Two sets have the same cardinality exactly when they are in bijection.

**How the definition helps.** Foundation gives every set a rank, so a least rank ρ exists, and separation collects the copies of rank ρ from V<sub>ρ+1</sub> without choice (our own). Sets in bijection have the same copies, so they have the same Scott cardinal. Conversely, equal Scott cardinals share a copy, and composing bijections through it gives a bijection.

**nLab:** [cardinal number](https://ncatlab.org/nlab/show/cardinal+number). It says: “This will follow directly from the axiom of foundation; it will also follow from the axiom of choice, since then every set is isomorphic to a von Neumann ordinal.”

**Sources:**

- [Dana Scott, Definitions by abstraction in axiomatic set theory (abstract), Bulletin of the American Mathematical Society 61 (1955) 442](https://doi.org/10.1090/S0002-9904-1955-09941-5)

### Sign expansions make the surreal numbers totally ordered by first difference

**Remember:** The first difference decides the order, even if one sequence ends.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 12J15. arXiv math.LO. Level 3: graduate.

**Definition.** In sign form, a surreal number is a sequence of signs − and + indexed by the positions below some ordinal. Two such sequences compare at their first difference, where − is below an empty place and an empty place is below +.

**Problem.** Any two surreal numbers x and y satisfy exactly one of x &lt; y, x = y and y &lt; x.

**How the definition helps.** Two different sequences have a first difference because their positions are ordinals, which are well-ordered (our own). At that position the sign order decides exactly one direction, and identical sequences are equal. The equivalence with Conway's recursive definition carries this order to his surreal numbers.

**Wikipedia:** [Surreal number](https://en.wikipedia.org/wiki/Surreal_number). It says: “For surreal numbers, define the binary relation &lt; to be lexicographic order”

**Sources:**

- [Harry Gonshor, An Introduction to the Theory of Surreal Numbers (1986)](https://doi.org/10.1017/cbo9780511629143)

### The Hessenberg sum makes ordinal addition commutative

**Remember:** Treat ordinals as polynomials in ω and add like terms.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** Write both ordinals in Cantor normal form, as polynomials in ω with finite coefficients. Their natural sum adds the coefficients of matching powers of ω. Their natural product multiplies the polynomials term by term, naturally adding exponents, and collects the terms by natural sum.

**Problem.** The natural sum is commutative and associative, and the natural product distributes over it.

**How the definition helps.** Both operations work coefficient by coefficient, so they inherit the laws of natural number arithmetic (our own). Adding coefficients is commutative and associative. Multiplying out and collecting equal exponents gives distributivity, as for polynomials.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “The natural sum and product are commutative and associative, and natural product distributes over natural sum.”

**Sources:** none listed. No primary source with a working link was found.

### Analytic sets repair Lebesgue's false claim about projections of Borel sets

**Remember:** A shadow of a Borel set is analytic, not always Borel.

*Makes the theorem clean to state or prove.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A subset of a Polish space X is analytic if it is the projection onto X of a Borel subset of X × Y, for some Polish space Y.

**Problem.** The projection of a Borel subset of the plane is analytic, though not always Borel. Analytic sets are universally measurable: measurable for the completion of every Borel probability measure.

**How the definition helps.** A projection of a Borel subset of the plane is analytic by the definition, with X = Y = ℝ (our own). Suslin found such a projection that is not Borel. The theorem that analytic sets are universally measurable gives the last claim.

**Wikipedia:** [Mikhail Suslin](https://en.wikipedia.org/wiki/Mikhail_Suslin), [Analytic set](https://en.wikipedia.org/wiki/Analytic_set), [Universally measurable set](https://en.wikipedia.org/wiki/Universally_measurable_set). It says: “he found an error in an argument of Lebesgue, who believed he had proved that for any Borel set in ℝ², the projection onto the real axis was also a Borel set.”

**Sources:** none listed. No primary source with a working link was found.

### Defining analytic sets as continuous images makes their continuous images analytic

**Remember:** An analytic set is a continuous image of a Polish space.

*True by definition.* MSC 03E15 (Descriptive set theory), 54H05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A subset A of a Polish space is analytic if it is the image of a continuous map from some Polish space, a separable space with a complete metric.

**Problem.** Let A be an analytic set, and let f be a continuous map from A into a Polish space. Then the image f(A) is analytic.

**How the definition helps.** Continuous maps compose, so the map that parametrizes A, followed by f, parametrizes f(A) (our own). In symbols, if g maps a Polish space continuously onto A, then f ∘ g maps it continuously onto f(A).

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “closed under countable unions and intersections, continuous images, and inverse images”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Defining Borel sets as analytic with analytic complement makes Borel bijections isomorphisms

**Remember:** Borel means analytic from both sides.

*True by definition.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO. Level 3: graduate.

**Definition.** In a Polish space, call a set Borel if both it and its complement are analytic, that is, continuous images of Polish spaces.

**Problem.** Let f be a measurable bijection between standard Borel spaces, spaces whose measurable sets are the Borel sets of a Polish topology. Then the inverse of f is measurable.

**How the definition helps.** The inverse is measurable when f sends Borel sets to Borel sets, so f must send each Borel set and its complement to analytic sets (our own). Each image is a projection of the Borel graph of f, and bijectivity makes the two images complements. Souslin's theorem matches this definition with the usual one.

**Wikipedia:** [Standard Borel space](https://en.wikipedia.org/wiki/Standard_Borel_space). It says: “a set that is both analytic and coanalytic is necessarily Borel”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Defining standard Borel spaces through Borel subsets makes Borel subspaces standard

**Remember:** A Borel subset of a Borel subset is still Borel.

*True by definition. Confidence: medium.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A standard Borel space is a measurable space isomorphic to a Borel subset of a Polish space, with the induced measurable sets.

**Problem.** Let X be a standard Borel space, and let B be a measurable subset of X. Then B, with the induced measurable sets, is a standard Borel space.

**How the definition helps.** The isomorphism sends B to a Borel subset of a Borel subset, which is Borel in the whole Polish space (our own). The usual definition asks for a Polish topology on the space itself, so B would need its own Polish topology with the same Borel sets (our own). That is the theorem, stated on the nLab, that every Borel subset of a Polish space is standard Borel.

**nLab:** [standard Borel space](https://ncatlab.org/nlab/show/standard+Borel+space). It says: “Every Borel subset of a Polish space, equipped with the induced sigma-algebra, is standard Borel.”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### The game definition of Wadge reducibility turns Borel determinacy into Wadge's lemma

**Remember:** Reduction is a game: answer x with y matching membership.

*True by definition.* MSC 03E15 (Descriptive set theory), 03E60. arXiv math.LO. Level 3: graduate.

**Definition.** A reduces to B if the second player has a winning strategy in the following game. The players alternately write natural numbers, building x and y respectively, and only the second player may pass. The second player wins exactly when y is infinite and x ∈ A holds exactly when y ∈ B.

**Problem.** Let A and B be Borel subsets of Baire space. Then A reduces to B, or B reduces to the complement of A.

**How the definition helps.** Borel determinacy gives one player a winning strategy, and a second-player win is a reduction of A to B by definition. A winning first-player strategy turns each y continuously into an x with x ∉ A exactly when y ∈ B (our own). By the Wadge game characterization, this continuous map reduces B to the complement of A.

**Wikipedia:** [Wadge hierarchy](https://en.wikipedia.org/wiki/Wadge_hierarchy). It says: “Since Borel determinacy is proved in ZFC, ZFC implies Wadge's lemma for Borel sets.”

**Sources:**

- [Donald A. Martin, Borel Determinacy (1975)](https://doi.org/10.2307/1971035)

### The nested partition definition gives every standard Borel space a compact topology

**Remember:** Each point is a path through nested finite partitions.

*True by definition.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO. Level 3: graduate.

**Definition.** A measurable space is standard Borel if it has a sequence of ever finer finite measurable partitions that separate points and generate its σ-algebra. Every nested choice of one part from each partition must have nonempty intersection, so each point is exactly a path of nested parts.

**Problem.** Every standard Borel space has a compact metrizable topology whose Borel sets are exactly its measurable sets.

**How the definition helps.** Sending each point to its path of parts identifies the space with the nested paths, a closed subset of a countable product of finite discrete spaces, hence compact metrizable (our own). Separation and nonempty intersection make this map a bijection, and generation makes the Borel sets match the measurable sets. Under the usual definition, the classification of standard Borel spaces supplies such partitions.

**nLab:** [standard Borel space](https://ncatlab.org/nlab/show/standard+Borel+space). It says: “The compatibility conditions are closed conditions, so K is a closed subspace of a countable product of finite discrete spaces.”

**Sources:** none listed. No primary source with a working link was found.

### The tree definition reduces every analytic set to the ill-founded trees

**Remember:** x is in A when its tree of witnesses has a branch.

*True by definition. Confidence: medium.* MSC 03E15 (Descriptive set theory), 54H05. arXiv math.LO. Level 3: graduate.

**Definition.** A subset A of Baire space is analytic if it is the projection of a tree T on pairs: x ∈ A exactly when some y makes every prefix pair (x↾n, y↾n) a node of T. A tree on pairs is a set of pairs of equally long finite sequences, closed under prefixes.

**Problem.** Every analytic subset of Baire space is the preimage, under a continuous map, of the set of trees with an infinite branch. Here the trees on ℕ form a space whose basic open sets fix finitely many membership questions.

**How the definition helps.** For each x, the tree of witnesses T(x), the sequences t with (x↾n, t) ∈ T for n the length of t, has a branch exactly when x ∈ A (our own). Deciding whether t is in T(x) reads only the first n terms of x, so x ↦ T(x) is continuous.

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “the projections of trees”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Tree codes make disjoint analytic sets stay disjoint after forcing

**Remember:** Two projections meet only if a combined tree has a branch.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E15 (Descriptive set theory), 03E40. arXiv math.LO. Level 3: graduate.

**Definition.** The projection of a tree T on pairs of equally long finite sequences is the set of x for which some y keeps every prefix pair (x↾n, y↾n) in T. In a forcing extension, the same tree defines its projection from the sequences of that extension.

**Problem.** Let S and T be trees whose projections are disjoint. Then their projections stay disjoint in every forcing extension.

**How the definition helps.** Two projections meet exactly when the tree of triples (s, t, u), with (s, t) ∈ S and (s, u) ∈ T, has an infinite branch (our own). Disjointness in the ground model makes this tree well-founded, so it has a rank function into the ordinals. The rank function survives forcing and still rules out a branch.

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “the projections of trees”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Two adjoints make preimages preserve unions and intersections

**Remember:** Preimage has adjoints on both sides, so it preserves everything.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 06A15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** The preimage of B ⊆ T under f: S → T is the set of x ∈ S with f(x) ∈ B. It is adjoint on both sides: f(A) ⊆ B exactly when A ⊆ f⁻¹(B), and f⁻¹(B) ⊆ A exactly when B ⊆ T ∖ f(S ∖ A).

**Problem.** Preimage preserves all unions and intersections. Direct image preserves all unions but need not preserve intersections.

**How the definition helps.** Left adjoints preserve all unions and right adjoints preserve all intersections, and preimage is both (our own). Direct image is only a left adjoint, so it preserves unions. Two distinct points with the same image give disjoint singletons whose images meet.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “If f : X → Y is a function, then for any subset M of X we can form the image”

**Paper or page:** [Inverse Image Mapping is Upper Adjoint to Direct Image Mapping](https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Upper_Adjoint_to_Direct_Image_Mapping), [Inverse Image Mapping is Lower Adjoint to Composite Involving Direct Image Mapping](https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Lower_Adjoint_to_Composite_Involving_Direct_Image_Mapping). It says: “f←: 𝒫(T) → 𝒫(S) is the upper adjoint to f→: 𝒫(S) → 𝒫(T)”

**Sources:** none listed. No primary source with a working link was found.

### Ackermann coding makes the natural numbers a model of finite set theory

**Remember:** i is an element of j when bit i of j is 1.

*True by definition.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03C62. arXiv math.LO. Level 3: graduate.

**Definition.** Ackermann coding numbers each hereditarily finite set, a finite set built from ∅ whose elements are again such sets. The code of a set is the sum of 2<sup>c</sup> over the codes c of its elements, so the elements are read off from the 1-bits.

**Problem.** Define i ∈ j on the natural numbers to hold exactly when bit i of j is 1, counting bits from zero. With this membership, the natural numbers model Zermelo–Fraenkel set theory without infinity.

**How the definition helps.** The coding is a bijection that turns membership into this bit test, so it carries the model of hereditarily finite sets to the natural numbers (our own). Uniqueness of binary expansion makes it bijective, and the 1-bit positions of n are smaller than n, so decoding works by induction.

**Wikipedia:** [Hereditarily finite set](https://en.wikipedia.org/wiki/Hereditarily_finite_set). It says: “The Ackermann coding can be used to construct a model of finitary set theory in the natural numbers.”

**Sources:**

- [Ackermann, W. (1937). Die Widerspruchsfreiheit der allgemeinen Mengenlehre. Mathematische Annalen 114, 305–315.](https://doi.org/10.1007/bf01594179)

### Extensional well-founded relations collapse to membership on a unique transitive class

**Remember:** Different elements need different predecessors, or the collapse glues them together.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03E20. arXiv math.LO. Level 3: graduate.

**Definition.** A relation R on a class is well-founded if every nonempty subset has an R-minimal element, and set-like if the predecessors of each element form a set. It is extensional if different elements always have different sets of R-predecessors.

**Problem.** Every set-like, well-founded, extensional relation is isomorphic to the membership relation on a transitive class, a class that contains every element of its elements. The transitive class and the isomorphism are both unique.

**How the definition helps.** Well-founded recursion defines the collapse, which sends each x to the set of images of its R-predecessors, and extensionality is exactly what makes it one-to-one. Without extensionality, two elements with no predecessors both go to ∅ (our own example). Without well-foundedness the lemma fails, as for a model of ZF that is not well-founded.

**Wikipedia:** [Mostowski collapse lemma](https://en.wikipedia.org/wiki/Mostowski_collapse_lemma). It says: “The homomorphism F is an isomorphism if and only if R is extensional.”

**Sources:**

- [Mostowski, A. (1949). An undecidable arithmetical statement. Fundamenta Mathematicae 36, 143–164.](https://doi.org/10.4064/fm-36-1-143-164)

### A complete Boolean algebra gives quantified formulas a truth value

**Remember:** Existential quantifiers are joins, so the joins must exist.

*Makes the theorem clean to state or prove.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 03C90, 06E10. arXiv math.LO. Level 3: graduate.

**Definition.** A Boolean algebra B is complete if every subset has a supremum in B. With complements, every subset then has an infimum too, so the join or meet of any family of truth values exists.

**Problem.** Over a ground model of ZFC, every set-theoretic formula with parameters in Vᴮ has a Boolean value for every complete Boolean algebra B. Every ZFC axiom has value 1.

**How the definition helps.** The value of ∃x φ is the join of the values of φ(a) over all names a, and ∀ uses the meet, so completeness gives these values (our own). Atomic formulas and connectives have recursive clauses, so every formula gets a value. The Boolean-valued model theorem, over a ground model of ZFC, gives every ZFC axiom value 1.

**Wikipedia:** [Boolean-valued model](https://en.wikipedia.org/wiki/Boolean-valued_model). It says: “The completeness of the Boolean algebra is required to define truth values for quantified formulas.”

**Sources:** none listed. No primary source with a working link was found.

### Defining forcing by Boolean values makes densely forced sentences forced

**Remember:** To force a sentence is to lie below its truth value.

*True by definition. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** In a complete Boolean algebra B, a condition is a nonzero element, and p forces φ exactly when p ≤ ‖φ‖, the Boolean value of φ.

**Problem.** Suppose every condition below p has a stronger condition that forces φ. Then p forces φ.

**How the definition helps.** Forcing is now an inequality, and an element lies below ‖φ‖ when everything in a set with join p does (our own). The conditions below p that force φ are dense below p, so their join is p (our own). Each of them lies below ‖φ‖, so p does too (our own).

**Wikipedia:** [Boolean-valued model](https://en.wikipedia.org/wiki/Boolean-valued_model). It says: “The truth value of a formula is an element of the complete Boolean algebra B.”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Defining properness by preserved stationary sets makes two-step iterations proper

**Remember:** Preserve the same stationary family at each step.

*True by definition.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A forcing order is proper if, for every uncountable set X, it keeps every stationary family of countable subsets of X stationary (our own formulation). A family is stationary if it meets every family of countable subsets that is unbounded under inclusion and closed under unions of increasing ω-sequences.

**Problem.** Let P be proper, and suppose P forces that Q is proper. Then the two-step iteration, P followed by Q, is proper.

**How the definition helps.** Preservation done twice is still preservation (our own). P preserves ω₁, so X stays uncountable, and a stationary family stays stationary after P and again after Q. Shelah's characterization matches this preservation condition with properness.

**Wikipedia:** [Proper forcing axiom](https://en.wikipedia.org/wiki/Proper_forcing_axiom). It says: “forcing with P preserves stationary subsets”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Perfect trees make the Sacks fusion lemma statable by splitting levels

**Remember:** Keep each level of branching once it has been built.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A Sacks condition is a nonempty tree of finite binary strings, closed under prefixes, in which every node extends to a splitting node, one whose two one-bit extensions are both in the tree. Smaller trees are stronger conditions.

**Problem.** Call a splitting node an nth splitting node if exactly n splitting nodes lie strictly below it. If Sacks conditions p₀ ⊇ p₁ ⊇ … are such that each pₙ₊₁ keeps every nth splitting node of pₙ as a splitting node, then their intersection is a perfect tree.

**How the definition helps.** Keeping the nth splitting nodes keeps every earlier one too, since each earlier one extends to an nth one (our own). For a node t of the intersection, take n greater than its length, so some nth splitting node of pₙ extends t. Every later tree keeps that node splitting, so it splits in the intersection.

**Wikipedia:** [List of forcing notions](https://en.wikipedia.org/wiki/List_of_forcing_notions). It says: “A tree p is stronger than q if p is contained in q.”

**Sources:**

- [Gerald E. Sacks, Forcing with perfect closed sets (1971)](https://doi.org/10.1090/pspum/013.1/0276079)

### The countable chain condition stops forcing from collapsing cardinals

**Remember:** Countably many incompatible choices cannot make an uncountable set countable.

*Rules out counterexamples.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A partial order of forcing conditions is ccc if every antichain, a set of pairwise incompatible conditions with no common extension, is countable.

**Problem.** Forcing with a ccc partial order preserves all cardinals. In particular, Cohen's forcing that adds ℵ₂ new real numbers keeps ℵ₁ and ℵ₂ as cardinals.

**How the definition helps.** Under ccc, each value f(α) of a function in the extension has only countably many possible values in the ground model (our own). So a surjection in the extension from an infinite λ onto a larger cardinal κ would give, in the ground model, a set of size λ covering κ, which is impossible. Finite partial maps from ω to ω₁ are not ccc, and their generic union maps ω onto ω₁.

**Wikipedia:** [Forcing (mathematics)](https://en.wikipedia.org/wiki/Forcing_%28mathematics%29), [Countable chain condition](https://en.wikipedia.org/wiki/Countable_chain_condition). It says: “In the theory of forcing, ccc partial orders are used because forcing with any generic set over such an order preserves cardinals and cofinalities.”

**Sources:**

- [Cohen, P. J. (1963). The independence of the continuum hypothesis. Proceedings of the National Academy of Sciences 50, 1143–1148.](https://doi.org/10.1073/pnas.50.6.1143)

### The splitting condition makes every generic filter genuinely new

**Remember:** If every condition can split, no generic filter was already there.

*Rules out counterexamples.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A forcing order satisfies the splitting condition if every condition p has two extensions that are incompatible with each other. A filter G is generic over a model M if G meets every dense subset of the order that lies in M.

**Problem.** If the order satisfies the splitting condition, then no filter that is generic over M lies in M. So M\[G\] is a proper extension of M.

**How the definition helps.** Splitting makes the complement of any filter dense, since two incompatible extensions cannot both lie in a filter (our own). If G were in M, its complement would be a dense set in M that G misses. In the one-condition order, splitting fails, and the whole order is a generic filter that lies in M.

**Wikipedia:** [Forcing (mathematics)](https://en.wikipedia.org/wiki/Forcing_%28mathematics%29). It says: “Due to the splitting condition on ℙ, if G is a filter, then ℙ ∖ G is dense. If G ∈ M, then ℙ ∖ G ∈ M because M is a model of ZFC.”

**Sources:**

- [Cohen, P. J. (1963). The independence of the continuum hypothesis. Proceedings of the National Academy of Sciences 50, 1143–1148.](https://doi.org/10.1073/pnas.50.6.1143)

### Constructible sets come with their own well-order

**Remember:** Each constructible set has a definition, and definitions line up in order.

*True by definition.* MSC 03E45 (Inner models, including constructibility, ordinal definability, and core models), 03E35, 03E50. arXiv math.LO. Level 3: graduate.

**Definition.** L is built in stages: start from ∅, take unions at limit stages, and at each successor stage add exactly the subsets of the previous stage that are definable over it with parameters. So every constructible set has a definition, made of a formula and finitely many earlier parameters.

**Problem.** The constructible universe L has a well-order of all its sets that a formula without parameters defines in L. So the axiom of choice holds in L, and if ZF is consistent, so is ZF with the axiom of choice.

**How the definition helps.** Definitions can be ordered, so each set inherits the order of its least definition (our own). By recursion on stages, compare formula numbers first and then parameter tuples by the earlier order; this defines a well-order in L without parameters. Gödel's theorem that ZF holds in L then gives choice in L and the relative consistency.

**Wikipedia:** [Constructible universe](https://en.wikipedia.org/wiki/Constructible_universe). It says: “Notice that this well-ordering can be defined within L itself by a formula of set theory with no parameters, only the free-variables x and y.”

**Sources:**

- [Gödel, K. (1938). The consistency of the axiom of choice and of the generalized continuum-hypothesis. Proceedings of the National Academy of Sciences 24, 556–557.](https://doi.org/10.1073/pnas.24.12.556)

### Grothendieck universes make every set small in a large enough universe

**Remember:** A universe is a whole world of sets, closed under the usual constructions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E55 (Large cardinals), 18A15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A Grothendieck universe U is a transitive set closed under the usual set constructions: it contains ∅, and it contains pairs and power sets of its members and the union of any family of members indexed by a member. A set is U-small if it belongs to U.

**Problem.** Under the axiom of universes, the category of U-small sets and their functions is small in some larger universe. Theorems about small categories, such as the Yoneda lemma, then apply to it there.

**How the definition helps.** The axiom of universes puts U inside a larger universe W, and W contains U and all functions between its members (our own). So the objects and arrows of the category of U-small sets form sets in W, and the category is small there.

**nLab:** [Grothendieck universe](https://ncatlab.org/nlab/show/Grothendieck+universe). It says: “In other words, every set is small if your universe is large enough!”

**Sources:**

- [Pierre Gabriel, Des catégories abéliennes, Bulletin de la Société Mathématique de France 90 (1962) 323–448](http://www.numdam.org/item?id=BSMF_1962__90__323_0)
- [Saunders Mac Lane, One universe as a foundation for category theory, Reports of the Midwest Category Seminar III, Lecture Notes in Mathematics 106 (1969) 192–200](https://doi.org/10.1007/BFb0059147)

### Measurable cardinals are the critical points of embeddings of the universe

**Remember:** The first ordinal an embedding moves is a measurable cardinal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An elementary embedding j: V → M into a transitive class keeps every first-order formula true or false when its parameters are replaced by their images. Its critical point is the least ordinal κ that j moves, that is, with j(κ) ≠ κ.

**Problem.** Let j be a nontrivial elementary embedding of V into a transitive class M. Then the critical point of j is a measurable cardinal.

**How the definition helps.** The sets A ⊆ κ with κ ∈ j(A) form an ultrafilter, by elementarity for complements and intersections (our own). Because j fixes every ordinal below κ, this ultrafilter contains no singleton and is closed under intersections of fewer than κ members. A standard lemma shows that κ is an uncountable cardinal, so κ is measurable.

**Wikipedia:** [Critical point (set theory)](https://en.wikipedia.org/wiki/Critical_point_%28set_theory%29). It says: “If N is V, then κ (the critical point of j) is always a measurable cardinal”

**Sources:** none listed. No primary source with a working link was found.

### Measurable cardinals need non-principal ultrafilters and uncountability

**Remember:** Ignore singletons and keep intersections of fewer than κ large sets.

*Rules out counterexamples. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An uncountable cardinal κ is measurable if some ultrafilter on κ contains no singleton and contains every intersection of fewer than κ members.

**Problem.** Every measurable cardinal κ is regular: it is not a union of fewer than κ sets, each of size less than κ.

**How the definition helps.** The ultrafilter contains the complement of each singleton, and intersecting fewer than κ of these puts the complement of every set of size less than κ in it (our own). If fewer than κ such small sets covered κ, the empty intersection of their complements would be in the ultrafilter. A principal ultrafilter would let singular cardinals such as ℵω qualify (our own).

**Wikipedia:** [Measurable cardinal](https://en.wikipedia.org/wiki/Measurable_cardinal). It says: “Equivalently, κ is a measurable cardinal if and only if it is an uncountable cardinal with a κ-complete, non-principal ultrafilter.”

**Sources:**

- [Ulam, S. (1930). Zur Masstheorie in der allgemeinen Mengenlehre. Fundamenta Mathematicae 16, 140–150.](https://doi.org/10.4064/fm-16-1-140-150)

### Requiring inaccessible cardinals to be uncountable keeps ℵ₀ out

**Remember:** An inaccessible cardinal behaves like ℵ₀ but is required to be uncountable.

*Rules out counterexamples.* MSC 03E55 (Large cardinals), 03E30. arXiv math.LO. Level 3: graduate.

**Definition.** A strongly inaccessible cardinal κ is an uncountable cardinal that is regular, not a union of fewer than κ sets each smaller than κ, and a strong limit, with 2<sup>λ</sup> &lt; κ for every λ &lt; κ.

**Problem.** If κ is strongly inaccessible, then Vκ, the set of all sets of rank less than κ, is a model of ZFC. So, if ZFC is consistent, it does not prove that an inaccessible cardinal exists.

**How the definition helps.** Uncountability makes Vκ satisfy the axiom of infinity, and regularity and the strong limit property close Vκ under the other axioms (our own remark). Without it, ℵ₀ would qualify, since it is regular and a strong limit, but Vω satisfies ZFC without infinity. Gödel's second incompleteness theorem turns the model Vκ into the unprovability (our own remark).

**Wikipedia:** [Inaccessible cardinal](https://en.wikipedia.org/wiki/Inaccessible_cardinal). It says: “From some perspectives, the requirement that a weakly or strongly inaccessible cardinal be uncountable is unnatural or unnecessary. Even though ℵ₀ is countable, it is regular and is a strong limit cardinal.”

**Sources:**

- [Sierpiński, W. and Tarski, A. (1930). Sur une propriété caractéristique des nombres inaccessibles. Fundamenta Mathematicae 15, 292–300.](https://doi.org/10.4064/fm-15-1-292-300)
- [Zermelo, E. (1930). Über Grenzzahlen und Mengenbereiche. Fundamenta Mathematicae 16, 29–47.](https://doi.org/10.4064/fm-16-1-29-47)

### The compactness definition gives weakly compact cardinals the tree property

**Remember:** Choose a node on each level, then forbid incompatible choices.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An inaccessible cardinal κ is weakly compact if a theory of κ sentences in L<sub>κ,κ</sub> has a model whenever each of its subtheories of fewer than κ sentences has one. In L<sub>κ,κ</sub>, conjunctions, disjunctions and quantifier blocks may have length less than κ.

**Problem.** Let κ be weakly compact. Every tree of height κ whose levels all have fewer than κ nodes has a branch through every level.

**How the definition helps.** A branch is a choice of one node per level with all choices comparable, and this can be written as a theory of κ sentences (our own). Use one propositional variable per node, a disjunction at each level saying some node there is chosen, and a ban on choosing two incomparable nodes. Fewer than κ of these sentences mention boundedly many levels, by regularity, so the predecessors of one high node satisfy them, and compactness gives a model.

**Wikipedia:** [Weakly compact cardinal](https://en.wikipedia.org/wiki/Weakly_compact_cardinal). It says: “and every subset with less than κ elements has a model, then Σ has a model”

**Sources:** none listed. No primary source with a working link was found.

### The embedding definition makes λ-supercompactness imply μ-supercompactness for smaller μ

**Remember:** The same embedding works for every smaller μ.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** For cardinals κ ≤ λ, κ is λ-supercompact if some elementary embedding j: V → M, with M transitive, has critical point κ, moves κ above λ, and has M closed under λ-sequences of its elements.

**Problem.** Suppose κ is λ-supercompact and κ ≤ μ ≤ λ. Then κ is μ-supercompact.

**How the definition helps.** The same embedding works for μ, since M is also closed under shorter sequences and j(κ) &gt; λ ≥ μ (our own). To see this closure, pad a μ-sequence of elements of M to length λ, then restrict the resulting member of M back to μ inside M.

**Paper or page:** [Prikry type forcings and the Bukovský-Dehornoy phenomena](https://arxiv.org/abs/2308.05553v1). It says: “if and only if there is an elementary embedding”

**Sources:**

- [Yair Hayut, Prikry type forcings and the Bukovský-Dehornoy phenomena (arXiv 2023)](https://arxiv.org/abs/2308.05553v1)

### The filter extension definition makes strongly compact cardinals measurable at once

**Remember:** Extend the filter of sets with small complements.

*True by definition.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An uncountable regular cardinal κ is strongly compact if every proper κ-complete filter on any set extends to a κ-complete ultrafilter there. A filter is κ-complete if it contains every intersection of fewer than κ members.

**Problem.** Every strongly compact cardinal κ is measurable. That means κ carries a κ-complete ultrafilter that contains no singleton.

**How the definition helps.** Extending the filter of subsets of κ with complements of size less than κ gives a κ-complete ultrafilter with no singleton (our own). Regularity makes that filter κ-complete. The ultrafilter contains the complement of each singleton, so it contains no singleton.

**nLab:** [strongly compact cardinal](https://ncatlab.org/nlab/show/strongly+compact+cardinal). It says: “Strongly compact cardinals are measurable cardinals.”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Weakly compact cardinals must be uncountable to keep ℵ₀ out

**Remember:** Ramsey's theorem makes ℵ₀ look weakly compact, so ℵ₀ is excluded.

*Rules out counterexamples. Confidence: medium.* MSC 03E55 (Large cardinals), 03E02. arXiv math.LO. Level 3: graduate.

**Definition.** A cardinal κ is weakly compact if it is uncountable and, whenever each pair of elements of κ gets one of two colours, some subset of size κ has all its pairs the same colour.

**Problem.** Every weakly compact cardinal is inaccessible. So, if ZFC is consistent, ZFC cannot prove that a weakly compact cardinal exists.

**How the definition helps.** Uncountability excludes ℵ₀, which has this partition property by Ramsey's theorem but is not inaccessible (our own). For uncountable cardinals, the Erdős–Tarski theorem turns the partition property into strong inaccessibility. Then Vκ is a model of ZFC, and Gödel's second incompleteness theorem gives the unprovability.

**Wikipedia:** [Weakly compact cardinal](https://en.wikipedia.org/wiki/Weakly_compact_cardinal). It says: “a cardinal κ is defined to be weakly compact if it is uncountable”

**Sources:** none listed. No primary source with a working link was found.

### The Banach–Mazur game definition makes determinacy give the Baire property

**Remember:** Someone wins the string game from every starting position.

*True by definition.* MSC 03E60 (Determinacy principles), 54E52, 91A44. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A set A of sequences of natural numbers has the Baire property if, from every finite starting string, its Banach–Mazur game is determined. In that game the players alternately append nonempty finite strings, and the first player wins exactly when the infinite result lies in A.

**Problem.** The axiom of determinacy, which says that every infinite game with natural-number moves has a winning strategy for one player, implies that every set of natural-number sequences has the Baire property.

**How the definition helps.** Finite strings can be coded by natural numbers, so each Banach–Mazur game is a game that the axiom covers, and it is determined (our own). The Banach–Mazur game characterization matches this condition with the usual one, differing from an open set by a meager set.

**Wikipedia:** [Banach–Mazur game](https://en.wikipedia.org/wiki/Banach%E2%80%93Mazur_game). It says: “X is comeager in some non-empty open subset”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Proofs without the cut rule contain only parts of their conclusion

**Remember:** A cut-free proof uses nothing that its conclusion does not already contain.

*True by definition.* MSC 03F05 (Cut-elimination and normal-form theorems), 03F07. arXiv math.LO. Level 3: graduate.

**Definition.** A cut-free derivation is a proof tree in Gentzen's sequent calculus that never uses cut. Cut is the one rule whose premises contain a formula A that need not be a subformula of its conclusion (our own). From Γ ⊢ Δ,A and A,Π ⊢ Λ it infers Γ,Π ⊢ Δ,Λ.

**Problem.** In the sequent calculus without cut, the empty sequent ⊢, which stands for a contradiction, has no proof.

**How the definition helps.** Without cut, no rule can empty a sequent, so the empty sequent has no proof (our own). Initial sequents contain a formula, and each other rule turns nonempty premises into a nonempty conclusion. Gentzen's cut-elimination theorem carries this to the calculus with cut.

**nLab:** [subformula property](https://ncatlab.org/nlab/show/subformula+property), [sequent calculus](https://ncatlab.org/nlab/show/sequent+calculus). It says: “while it is not obvious in a cut-full system that the contradiction/empty sequent · ⊢ · is not derivable, it is a corollary of the subformula property that · ⊢ · is not derivable”

**Sources:**

- [Gerhard Gentzen, Untersuchungen über das logische Schließen I, Mathematische Zeitschrift 39 (1935) 176–210](https://doi.org/10.1007/BF01201353)

### Generalized axioms and shared contexts make weakening keep proof height

**Remember:** Add the extra formula everywhere without changing the tree.

*True by definition. Confidence: medium.* MSC 03F07 (Structure of proofs), 03F05. arXiv math.LO. Level 3: graduate.

**Definition.** Use sequents with multiset contexts and initial sequents Γ, A ⇒ A, Δ for every formula A and all contexts Γ and Δ. In each logical rule, copy the side contexts of the conclusion unchanged into every premise.

**Problem.** In this calculus, suppose Γ ⇒ Δ has a proof of height n. Then Γ, C ⇒ Δ has a proof of height at most n.

**How the definition helps.** Adding C to the left of every sequent in the proof gives a proof of the same height (our own). Leaves stay initial sequents because these allow any context, and each rule still applies because it copies contexts. First rename eigenvariables so that none occurs free in C.

**Wikipedia:** [Sequent calculus](https://en.wikipedia.org/wiki/Sequent_calculus). It says: “Any weakening that appears in a derivation can then be moved to the beginning of the proof.”

**Sources:**

- [Negri and von Plato (2001), Structural Proof Theory, Cambridge University Press](https://doi.org/10.1017/CBO9780511527340)

### Hereditary base notation lets ordinals prove Goodstein's theorem

**Remember:** Replace the base by ω, and every Goodstein sequence goes down.

*Makes the theorem clean to state or prove.* MSC 03F15 (Recursive ordinals and ordinal notations), 03F30, 03E10. arXiv math.LO. Level 3: graduate.

**Definition.** Write a number in hereditary base b: expand it in base b, then expand each exponent in base b, and so on. A Goodstein sequence starts in base 2, and each step replaces every b by b + 1 and then subtracts one, stopping at zero.

**Problem.** Every Goodstein sequence reaches zero.

**How the definition helps.** Replacing the base by ω turns each term into an ordinal that the base change does not alter, and subtracting one strictly lowers it (our own). The ordinal reading preserves order at a fixed base, by comparing at the largest differing exponent, recursively. Ordinals have no infinite strictly decreasing sequence, so the sequence reaches zero.

**Wikipedia:** [Goodstein's theorem](https://en.wikipedia.org/wiki/Goodstein%27s_theorem). It says: “This notation is very similar to usual base-n positional notation for natural numbers, but the usual notation does not suffice for the purposes of Goodstein's theorem.”

**Sources:**

- [Goodstein, R. L. (1944). On the restricted ordinal theorem. Journal of Symbolic Logic 9, 33–41.](https://doi.org/10.2307/2268019)
- [Kirby, L.; Paris, J. (1982). Accessible independence results for Peano arithmetic. Bulletin of the London Mathematical Society 14, 285–293.](https://doi.org/10.1112/blms/14.4.285)

### Adding congruence predicates gives Presburger arithmetic quantifier elimination

**Remember:** Name the remainders, and the quantifiers disappear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F30 (First-order arithmetic and fragments), 03C10, 03B25. arXiv math.LO. Level 3: graduate.

**Definition.** Presburger arithmetic is the theory of the natural numbers with 0, 1 and addition. Add to its language the order and, for each n ≥ 2, congruence modulo n, both already definable from addition.

**Problem.** Presburger arithmetic is decidable and complete.

**How the definition helps.** In the expanded language every formula is equivalent to one without quantifiers, by Presburger's theorem, so every sentence reduces effectively to closed arithmetic tests (our own). Evaluating those tests decides the sentence, and the theory proves each result, which gives completeness. The new predicates are definable from addition, so this holds for the original language.

**Wikipedia:** [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic). It says: “The decidability of Presburger arithmetic can be shown using quantifier elimination, supplemented by reasoning about arithmetical congruence.”

**Sources:** none listed. No primary source with a working link was found.

### Robinson's finite arithmetic Q makes first-order validity undecidable

**Remember:** Seven axioms are enough to make logic itself undecidable.

*True by definition.* MSC 03F30 (First-order arithmetic and fragments), 03D35. arXiv math.LO. Level 3: graduate.

**Definition.** Robinson arithmetic Q is a theory with seven axioms about 0, successor, addition and multiplication. It is finitely axiomatizable, yet no algorithm decides which sentences it proves.

**Problem.** Church's theorem: no algorithm decides which first-order sentences are valid, that is, true in every structure.

**How the definition helps.** The conjunction θ of Q's axioms turns provability in Q into validity: by the completeness theorem, Q proves φ exactly when θ → φ is valid (our own). An algorithm for validity would therefore decide Q, which is impossible.

**Wikipedia:** [Robinson arithmetic](https://en.wikipedia.org/wiki/Robinson_arithmetic). It says: “Q is important and interesting because it is a finitely axiomatized fragment of PA that is recursively incompletable and essentially undecidable.”

**Sources:**

- [Church, A. (1936). A note on the Entscheidungsproblem. Journal of Symbolic Logic 1, 40–41.](https://doi.org/10.2307/2269326)

### Gödel's β function codes finite sequences with only addition and multiplication

**Remember:** Two numbers and a remainder can hold any finite list.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03D20. arXiv math.LO. Level 3: graduate.

**Definition.** Gödel's β(a, b, i) is the remainder of a on division by 1 + (i + 1)b. By the Chinese remainder theorem, every finite sequence of numbers is β(a, b, 0), …, β(a, b, n) for suitable a and b.

**Problem.** Every primitive recursive function, built from simple functions by composition and recursion, is definable in the language of addition and multiplication. This lets Gödel's incompleteness theorem apply to Peano arithmetic without an exponent symbol.

**How the definition helps.** With β, a quantifier over two numbers ranges over all finite computation histories, so primitive recursion becomes definable (our own). Remainders are definable from addition and multiplication, so a formula can say that a history starts correctly, follows each recursion step and ends with the value. Basic functions and composition are already definable, and induction on the construction finishes the proof.

**Wikipedia:** [Gödel's β function](https://en.wikipedia.org/wiki/G%C3%B6del%27s_%CE%B2_function). It says: “The β function is used, in particular, in showing that the class of arithmetically definable functions is closed under primitive recursion, and therefore includes all primitive recursive functions.”

**Sources:**

- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Three derivability conditions make Gödel's second theorem a few lines

**Remember:** Three rules for 'provable' turn the second incompleteness theorem into algebra.

*True by definition.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F45. arXiv math.LO. Level 3: graduate.

**Definition.** The derivability conditions on the provability predicate □ of T, where □φ says that T proves φ, are three. If T proves φ, then T proves □φ; and T proves □(φ → ψ) → (□φ → □ψ) and □φ → □□φ.

**Problem.** A consistent, computably axiomatized extension T of Peano arithmetic cannot prove its own standard consistency statement ¬□⊥.

**How the definition helps.** These conditions and the diagonal lemma prove Löb's theorem: if T proves □φ → φ, then T proves φ (our own). If T proved ¬□⊥, it would prove □⊥ → ⊥, and Löb's theorem would give a proof of ⊥, contrary to consistency.

**Wikipedia:** [Hilbert–Bernays–Löb provability conditions](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Bernays%E2%80%93L%C3%B6b_provability_conditions). It says: “The Hilbert–Bernays–Löb provability conditions, combined with the diagonal lemma, allow proving both of Gödel's incompleteness theorems shortly.”

**Sources:**

- [Löb, M. H. (1955). Solution of a problem of Leon Henkin. Journal of Symbolic Logic 20, 115–118.](https://doi.org/10.2307/2266895)

### Realizers carry witnesses, so Heyting arithmetic has the existence property

**Remember:** A realizer of 'there exists' must name the thing.

*True by definition.* MSC 03F50 (Metamathematics of constructive systems), 03F55, 03F30. arXiv math.LO. Level 3: graduate.

**Definition.** In realizability with truth for Heyting arithmetic, a realizer of ∃x A(x) is a pair of a witness n and a realizer of A(n), and A(n) must also be true (our own variant).

**Problem.** Heyting arithmetic, Peano arithmetic without excluded middle, has the existence property: if it proves ∃x A(x), then it proves A(n) for some numeral n.

**How the definition helps.** By the formalized soundness theorem, a proof of ∃x A(x) yields a closed realizer whose correctness Heyting arithmetic proves (our own). Its first component evaluates to a numeral n, and the truth clause in the correctness statement gives a proof of A(n).

**Wikipedia:** [Realizability](https://en.wikipedia.org/wiki/Realizability), [Disjunction and existence properties](https://en.wikipedia.org/wiki/Disjunction_and_existence_properties). It says: “A pair (n,m) realizes a formula (∃ x)A(x) if and only if m is a realizer for A(n). Thus a realizer for an existential formula produces an explicit witness for the quantifier”

**Sources:**

- [Kleene, S. C. (1945). On the interpretation of intuitionistic number theory. Journal of Symbolic Logic 10, 109–124.](https://doi.org/10.2307/2269016)

### Finiteness by a covering list survives surjections without excluded middle

**Remember:** Run the map on the list and keep the repeats.

*True by definition.* MSC 03F65 (Other constructive mathematics), 03E20. arXiv math.LO. Level 3: graduate.

**Definition.** A set is finitely indexed if some finite list x<sub>1</sub>, …, x<sub>n</sub> covers it, with repeats allowed, that is, if some map from {1, …, n} onto it exists.

**Problem.** In constructive mathematics, without excluded middle, a surjective image of a finitely indexed set is finitely indexed. A surjective image of a finite set, one in bijection with some {1, …, n}, need not be finite.

**How the definition helps.** Applying the surjection to the covering list gives a list that covers the image (our own). For the second claim, glue 0 and 1 in {0, 1} exactly when a proposition p holds. A bijection of the quotient with some {1, …, n} would decide whether the two classes are equal, and so decide p.

**nLab:** [finite set](https://ncatlab.org/nlab/show/finite+set). It says: “that is, it is a quotient set of a finite set.”

**Sources:** none listed. No primary source with a working link was found.

### With Heyting fields, the real numbers form a field constructively

**Remember:** Divide by x when x is apart from 0, not merely nonzero.

*Rules out counterexamples.* MSC 03F65 (Other constructive mathematics), 26E40. arXiv math.LO, math.AC. Level 3: graduate.

**Definition.** A Heyting field is a commutative local ring with 0 ≠ 1 in which every element that lacks an inverse equals zero.

**Problem.** In constructive mathematics, without the law of excluded middle, the located Dedekind real numbers form a Heyting field. They cannot be shown to form a field in the classical sense, nor a discrete field.

**How the definition helps.** A located real is invertible exactly when its distance from zero exceeds some positive rational, and if no such bound exists it equals zero (our own). Locatedness also makes the ring local, since one of x and 1 − x has distance from zero greater than 1/3. Constructively, a real that is not zero need not have such a bound, and a zero-or-invertible test would decide equality with zero.

**nLab:** [Heyting field](https://ncatlab.org/nlab/show/Heyting+field), [field](https://ncatlab.org/nlab/show/field). It says: “This is how 'practising' constructive analysts of the Bishop school usually define the simple word 'field'. An advantage is that the (located Dedekind) real numbers form a Heyting field”

**Sources:**

- [Peter Johnstone, Rings, Fields, and Spectra, Journal of Algebra 49 (1977) 238–260](https://doi.org/10.1016/0021-8693(77)90284-8)
- [Ray Mines, Fred Richman, Wim Ruitenburg, A Course in Constructive Algebra, Springer (1988)](https://doi.org/10.1007/978-1-4419-8640-5)

### Glivenko's theorem follows from the Boolean reflection of a Heyting algebra

**Remember:** Classical logic is intuitionistic logic seen through double negation.

*Makes the theorem clean to state or prove.* MSC 03G05 (Logical aspects of Boolean algebras), 03F55, 03F25. arXiv math.LO. Level 3: graduate.

**Definition.** The Boolean reflection of a Heyting algebra H is the set of its elements with ¬¬x = x, a Boolean algebra whose operations are the Heyting ones followed by ¬¬. The map x ↦ ¬¬x sends H onto it and preserves the operations.

**Problem.** Glivenko's theorem: p ⇒ q is a classical propositional tautology if and only if ¬¬p ⇒ ¬¬q is an intuitionistic tautology. More generally, p is a classical tautology if and only if its double negation translation pᴺ is an intuitionistic one.

**How the definition helps.** The reflection of the free Heyting algebra is the free Boolean algebra, so p is a classical tautology exactly when its reflected value ¬¬p equals 1 (our own). For an implication, ¬¬(p ⇒ q) = 1 exactly when ¬¬p ≤ ¬¬q, which is intuitionistic validity of ¬¬p ⇒ ¬¬q.

**nLab:** [double negation translation](https://ncatlab.org/nlab/show/double+negation+translation). It says: “To say p ⇒ q is a classical tautology means that 1 ≤ (p ⇒ q) holds when interpreted in Bool(S). But since Bool(S) = Heyt(S)\_¬¬, this is equivalent to saying that”

**Sources:** none listed. No primary source with a working link was found.

### A classifying topos defined by its universal model tests geometric sequents

**Remember:** What holds in the generic model holds in every model.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18B25. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A classifying topos for a geometric theory T is a Grothendieck topos S\[T\] with a universal T-model U. For every Grothendieck topos E, sending a geometric morphism f: E → S\[T\] to f\*(U) is an equivalence onto the T-models in E.

**Problem.** A geometric sequent holds in every model of T in every Grothendieck topos exactly when it holds in the universal model.

**How the definition helps.** Every model is a pullback f\*(U) of the one model U, so checking U suffices (our own). Inverse images keep geometric sequents true, so truth in U passes to every model, and the converse holds because U is itself a model (our own).

**nLab:** [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “f\* maps the T-model U to the model X.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Cartesian logic quantifies only over unique witnesses, so images always exist

**Remember:** Say 'there exists' only when at most one thing exists.

*Rules out counterexamples.* MSC 03G30 (Categorical logic, topoi), 18C30, 18C10. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A cartesian theory uses sequents built from atomic formulas, truth, finite conjunction and existential quantification. A formula ∃x φ is allowed only when the theory proves its witness unique, φ(x) ∧ φ(y) ⊢ x = y, with the other variables fixed.

**Problem.** Every cartesian theory has a sound interpretation in any category with finite limits.

**How the definition helps.** Uniqueness makes the projection from the solutions of φ to their context a monomorphism, so it is its own image (our own). Unrestricted ∃ would need the image of a projection, which a category with finite limits may lack. Finite limits interpret the other operations (our own).

**nLab:** [cartesian logic](https://ncatlab.org/nlab/show/cartesian+logic). It says: “the existential quantifier is interpreted as an image factorization, but the subterminality side condition ensures the image exists even in an arbitrary category with finite limits.”

**Sources:**

- [E. Palmgren, S. Vickers, Partial Horn logic and cartesian categories, Annals of Pure and Applied Logic 145 (2007) 314–353](https://doi.org/10.1016/j.apal.2006.10.001)

### Defining classifying toposes by a universal model makes base change a composite

**Remember:** Pulling back twice equals pulling back once along the composite.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18F10. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A classifying topos for a geometric theory T is a Grothendieck topos S\[T\] with a T-model U. For every Grothendieck topos E, sending a geometric morphism f: E → S\[T\] to f\*(U) is an equivalence onto the T-models in E.

**Problem.** Let g from E to S\[T\] classify a model X in E, and let f be a geometric morphism from F to E. Then g∘f classifies the pulled-back model f\*X.

**How the definition helps.** A map into S\[T\] is fixed by the model it pulls back, and pulling back along a composite is pulling back twice (our own). In symbols, (g∘f)\*U ≅ f\*(g\*U) ≅ f\*X (our own).

**nLab:** [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “the classifying topos for the geometric theory T is a Grothendieck topos S\[T\] equipped with a "universal model U of T".”

**Sources:** none listed. No primary source with a working link was found.

### Geometric logic is chosen so that inverse images preserve its formulas

**Remember:** Finite limits and colimits carry geometric logic along.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18B25. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Geometric formulas are built from atomic formulas, including equality, by finite conjunctions, set-indexed disjunctions and existential quantification, operations interpreted by finite limits and arbitrary colimits (our own). A geometric sequent says that one such formula implies another in their shared context.

**Problem.** Inverse image along a geometric morphism sends models of a geometric theory to models and keeps geometric sequents true.

**How the definition helps.** Inverse images preserve finite limits by definition and all colimits as left adjoints, so they preserve the conjunctions, unions and images that interpret geometric formulas (our own). They therefore preserve the subobject inclusions that interpret sequents, and they carry models to models.

**nLab:** [geometric morphism](https://ncatlab.org/nlab/show/geometric+morphism), [geometric theory](https://ncatlab.org/nlab/show/geometric+theory). It says: “necessarily preserves all constructions in geometric logic.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Morleyization turns Deligne's theorem into classical completeness

**Remember:** Name every formula and its negation, and the theory becomes coherent.

*Makes the theorem clean to state or prove.* MSC 03G30 (Categorical logic, topoi), 03B10, 18F10. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Classical Morleyization adds a predicate for each first-order formula and one for its complement, with coherent axioms that make them complementary and match the clauses for atoms, ∧, ∨ and ∃. Classical provability and truth in Set-models then become coherent provability and truth.

**Problem.** Gödel's completeness theorem: in classical first-order logic, a statement that holds in every model in Set is provable.

**How the definition helps.** Deligne's theorem gives the classifying topos of the coherent theory enough points, which are models in Set, so models in Set detect coherent provability. Morleyization translates this back into classical completeness.

**nLab:** [coherent logic](https://ncatlab.org/nlab/show/coherent+logic). It says: “It follows that models in Set are sufficient to detect provability in coherent logic. By Morleyization, we can obtain from this the classical completeness theorem for first-order logic.”

**Sources:**

- [M. Makkai, G. E. Reyes, First Order Categorical Logic, Lecture Notes in Mathematics 611, Springer (1977)](https://doi.org/10.1007/BFb0066201)

### Natural numbers as an initial algebra make successor injective and never zero

**Remember:** ℕ is exactly one point plus a copy of itself.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** (ℕ, 0, s) is the initial set with a point and a self-map: for every set X with a point a and a self-map f, exactly one map h: ℕ → X satisfies h(0) = a and h∘s = f∘h.

**Problem.** In ℕ, zero is not a successor, and the successor map is injective.

**How the definition helps.** By Lambek's lemma, the structure map of an initial algebra is an isomorphism. So the map from 1 + ℕ to ℕ that sends the extra point to 0 and n to s(n) is a bijection (our own). Injectivity across the two parts says 0 is not a successor, and injectivity on the copy says s is injective.

**nLab:** [initial algebra of an endofunctor](https://ncatlab.org/nlab/show/initial+algebra+of+an+endofunctor). It says: “If F has an initial algebra α: F(X) → X, then X is isomorphic to F(X) via α.”

**Sources:**

- [Joachim Lambek, A fixpoint theorem for complete categories (1968)](https://doi.org/10.1007/bf01110627)

### Defining sets as a terminal coalgebra makes anti-foundation hold

**Remember:** A graph decoration is a map into the terminal coalgebra, so it is unique.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03E65, 18A30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** V⁰∞ is the terminal coalgebra for small sets of children: every graph whose nodes each have a small set of children has exactly one structure-preserving map into it. A map preserves structure if the children of each image node are exactly the images of the original node’s children.

**Problem.** In V⁰∞, every graph with a small set of children at each node has exactly one decoration. A decoration assigns sets to nodes so that each node’s set has exactly its children’s sets as members.

**How the definition helps.** A decoration is exactly a structure-preserving map from the graph into V⁰∞, so terminality gives exactly one (our own account of the standard argument). The hard work is to build V⁰∞ and to show that its membership is extensional. The latest version of the paper notes that this needs propositional resizing, an extra axiom.

**Paper or page:** [Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory](https://arxiv.org/abs/2001.06696), [Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory](https://arxiv.org/abs/2001.06696). It says: “The ∈-structure (V⁰∞, ∈), with any ordered pairing structure, satisfies anti-foundation.”

**Sources:**

- [Håkon Robbestad Gylterud, Elisabeth Stenholm and Niccolò Veltri, Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory, arXiv:2001.06696](https://arxiv.org/abs/2001.06696)

### Defining surreals as a higher inductive type makes Conway's equality real equality

**Remember:** Build Conway's equality into the type, and no quotient step remains.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 12J15, 03E10. arXiv math.LO. Level 4: research.

**Definition.** The surreal type NO is built together with its order: each cut whose left options all lie strictly below its right options gives a number. An extra identification constructor makes x and y equal whenever x ≤ y and y ≤ x.

**Problem.** Suppose z lies strictly between all left and right options of x, but no option of z does. Then x = z in NO.

**How the definition helps.** The identification constructor turns the two order inequalities directly into equality in NO, so no quotient step is needed. Conway’s simplicity argument proves x ≤ z and z ≤ x for the given cut (our own).

**nLab:** [surreal number](https://ncatlab.org/nlab/show/surreal+number). It says: “In homotopy type theory, the surreal numbers can be defined as a higher inductive type, roughly following Conway's definition but imposing the "defined" notion of equality as the "actual" equality with an identification-constructor.”

**Paper or page:** [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Suppose x and z are surreal numbers defined by cuts, and that the following hold. xᴸ &lt; z &lt; xᴿ for all L and R. … Then x = z.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Groups as pointed connected 1-types let Nielsen–Schreier be stated in HoTT

**Remember:** A subgroup is a connected cover of the group’s delooping.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55R35, 20E05. arXiv math.LO, math.AT. Level 4: research.

**Definition.** A group G is represented by its delooping, a pointed connected type whose path types are sets and whose loops at the base point form G. A subgroup is then a cover of the delooping: a set-valued family over it with connected total space and a chosen point over the base point.

**Problem.** In homotopy type theory, every finite index subgroup of a free group is free, without the axiom of choice. With the axiom of choice, every subgroup of a free group is free.

**How the definition helps.** For a free group the delooping is presented by a graph, and its cover is again presented by a graph (our own). A spanning tree shows that the cover’s loop group is free on the remaining edges. The paper proves the finite-index case constructively and uses choice for the general case.

**Paper or page:** [On the Nielsen-Schreier Theorem in Homotopy Type Theory](https://arxiv.org/abs/2010.01187), [On the Nielsen-Schreier Theorem in Homotopy Type Theory](https://arxiv.org/abs/2010.01187). It says: “We give a formulation of the Nielsen-Schreier theorem (subgroups of free groups are free) in homotopy type theory using the presentation of groups as pointed connected 1-truncated types. We show the special case of finite index subgroups holds constructively”

**Sources:**

- [Andrew W. Swan, On the Nielsen-Schreier Theorem in Homotopy Type Theory, Logical Methods in Computer Science 18(1) (2022), arXiv:2010.01187](https://arxiv.org/abs/2010.01187)

### In homotopy type theory, the epimorphisms are exactly the acyclic maps

**Remember:** Epi: restricting to A loses no paths between maps out of B.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55P10. arXiv cs.LO, math.AT. Level 4: research.

**Definition.** A map f : A → B is an epimorphism if, for every type X, precomposition with f from maps B → X to maps A → X is an embedding, a map whose fibers are propositions. A map is acyclic if the suspension of each of its fibers is contractible.

**Problem.** In homotopy type theory, a map of types is an epimorphism exactly when it is acyclic.

**How the definition helps.** By Theorem 2.9, f is an epimorphism exactly when the folding map from two copies of B glued along A back to B is an equivalence. Over each point of B, this glued type is the suspension of the fiber of f, so the condition says each suspension is contractible (our own reading of the theorem).

**Paper or page:** [Epimorphisms and Acyclic Types in Univalent Foundations](https://arxiv.org/abs/2401.14106v3). It says: “We characterize the epimorphisms in homotopy type theory (HoTT) as the fiberwise acyclic maps and develop a type-theoretic treatment of acyclic maps and types in the context of synthetic homotopy theory as developed in univalent foundations.”

**Sources:**

- [Ulrik Buchholtz, Tom de Jong, Egbert Rijke, Epimorphisms and Acyclic Types in Univalent Foundations, arXiv:2401.14106 (2024)](https://arxiv.org/abs/2401.14106v3)

### Instantiating polymorphic types only with variables makes type checking decidable

**Remember:** Instantiate only with variables, and polymorphism costs nothing for type checking.

*Rules out counterexamples. Confidence: medium.* MSC 03B38 (Type theory), 03B40. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** Atomic System F is the fragment of the polymorphic lambda calculus in which a term of type ∀X.A may be instantiated only at type variables, never at compound types.

**Problem.** For unannotated terms in atomic System F, typability coincides with simple typability, and checking against a given type is decidable. Checking unannotated terms against a given type in full System F is undecidable.

**How the definition helps.** With only variable instantiations, erasing quantifiers and identifying type variables turns every typing into a simple typing, and every simple typing already belongs to the fragment (Lemma 4.1, our own reading). Theorem 4.2 gives a separate algorithm for checking against a given type. Full System F allows compound instantiations, and there Curry-style type checking is undecidable.

**Paper or page:** [What's Decidable about (Atomic) Polymorphism](https://arxiv.org/abs/2105.00748v1). It says: “In this paper we investigate System Fat, or atomic System F, a very weak predicative fragment of System F whose typable terms coincide with the simply typable ones. We show that the type-checking problem for Fat is decidable”

**Sources:**

- [Paolo Pistone, Luca Tranchini, What's Decidable about (Atomic) Polymorphism, arXiv:2105.00748 (2021)](https://arxiv.org/abs/2105.00748v1)

### Iterative sets give univalent foundations a universe that is a set

**Remember:** Children indexed without repetition make tree equality a mere proposition.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 03F65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** An iterative set is a well-founded tree whose children at each node are indexed, without repetition, by an embedding of a small type into the type V⁰ of such trees. Each tree decodes to the indexing type of its children.

**Problem.** The type V⁰ of iterative sets is an h-set (any two proofs of an equality are equal) and forms a category with families that models extensional type theory inside homotopy type theory. The type of all h-sets cannot play this role, since univalence makes it not an h-set.

**How the definition helps.** Because children are indexed by an embedding, equality of trees is a proposition, so V⁰ is an h-set by Gylterud’s theorem (our own). The paper then builds the category with families and the operations of extensional type theory. In the type of all h-sets, univalence turns distinct automorphisms into distinct self-identifications.

**Paper or page:** [The Category of Iterative Sets in Homotopy Type Theory and Univalent Foundations](https://arxiv.org/abs/2402.04893v1). It says: “This enables us to organize it into a category with families with the structure necessary to model extensional type theory internally in HoTT/UF.”

**Sources:**

- [Daniel Gratzer, Håkon Gylterud, Anders Mörtberg, Elisabeth Stenholm, The Category of Iterative Sets in Homotopy Type Theory and Univalent Foundations, Math. Struct. Comp. Sci. 34 (2024) 945–970, arXiv:2402.04893](https://arxiv.org/abs/2402.04893v1)

### Local universes make type formers commute strictly with substitution

**Remember:** Form the general type once and change only its parameters.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A local universe type over Γ is a type A over some context Δ together with a map f from Γ to Δ, that is, a type with a delayed substitution. Substituting along g replaces f by f∘g and leaves Δ and A unchanged.

**Problem.** Under the hypotheses of the Lumsdaine–Warren coherence theorem, the lifted type formers, including dependent products when present, commute strictly with substitution.

**How the definition helps.** A lifted type former acts on A over Δ, so substitution changes only the map f (our own). Associativity of composition makes the results agree strictly. The Lumsdaine–Warren coherence theorem constructs the lifts under its hypotheses on the original model.

**nLab:** [categorical semantics of dependent type theory](https://ncatlab.org/nlab/show/categorical+semantics+of+dependent+type+theory). It says: “Type-theoretically, we can regard (f,A) as a type A with a "delayed substitution" f. This produces a split fibration (the chosen cartesian arrows are given by composition of morphisms in C), and it was proven by Lumsdaine &amp; Warren (2015) that essentially all type formers can be extended to it from E.”

**Sources:**

- [Lumsdaine and Warren (2015), The Local Universes Model](https://doi.org/10.1145/2754931)

### Observational type theory defines equality separately for each type

**Remember:** Equality is whatever you can observe, and you observe a function by applying it.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Observational type theory defines equality type by type, as what can be observed. Two functions are equal when they give equal outputs on equal inputs, and two propositions in its specified universe are equal when each implies the other.

**Problem.** In observational type theory, function extensionality (functions with equal values are equal) holds without extra axioms. So does propositional extensionality for a specified universe of propositions.

**How the definition helps.** Both laws are the defining clauses of equality at function types and at the universe of propositions. Transport along input equalities turns pointwise equality into equality on equal inputs (our own).

**nLab:** [observational type theory](https://ncatlab.org/nlab/show/observational+type+theory). It says: “Since equality is defined type-by-type, OTT enjoys function extensionality, and a form of propositional extensionality at least for a specified universe of propositions”

**Sources:**

- [Thorsten Altenkirch, Conor McBride, Wouter Swierstra, Observational Equality, Now!, PLPV 2007, 57–68](https://doi.org/10.1145/1292597.1292608)

### On a univalent category, a representable presheaf map has unique representations

**Remember:** Univalent: unique up to unique isomorphism becomes simply unique.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18N45, 18F20. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A category is univalent if the canonical map from identifications of two objects to isomorphisms between them is an equivalence. So data that is unique up to unique isomorphism is unique outright.

**Problem.** If a category 𝒞 is univalent, the forgetful map from CwF structures to representable maps of presheaves on 𝒞 is an equivalence. So every representable map carries a unique choice of context extensions.

**How the definition helps.** Each context extension is a representing object, unique up to unique isomorphism, so univalence makes the type of such choices contractible once it is inhabited (our own). Representability inhabits it at each context and type, which inverts the forgetful map.

**Paper or page:** [Categorical structures for type theory in univalent foundations](https://arxiv.org/abs/1705.04310). It says: “If 𝒞 is a univalent category, then the forgetful map from CwF structures to representable maps of presheaves on 𝒞 is an equivalence. That is, any representable map of presheaves on 𝒞 carries a unique choice of representing data.”

**Sources:**

- [Benedikt Ahrens, Peter LeFanu Lumsdaine and Vladimir Voevodsky, Categorical structures for type theory in univalent foundations, Logical Methods in Computer Science 14(3) (2018), arXiv:1705.04310](https://arxiv.org/abs/1705.04310)

### Pointed maps into a homogeneous type are equal when their functions are

**Remember:** Move the base point to each point by a chosen self-equivalence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55Q05. arXiv math.AT, math.LO. Level 4: research.

**Definition.** A pointed type B with base point b₀ is homogeneous if every point looks like the base point: each b ∈ B has a chosen self-equivalence eᵦ of B and a path from eᵦ(b₀) to b.

**Problem.** Let B be homogeneous and let f, g : A → B be pointed maps. If f = g as plain functions, then f = g as pointed maps.

**How the definition helps.** The chosen equivalences let a homotopy between f and g be corrected so that it respects the base point (our own). Cavallo’s lemma gives this correction for every homogeneous target, and the corrected homotopy is an equality of pointed maps.

**Paper or page:** [Symmetric Monoidal Smash Products in Homotopy Type Theory](https://arxiv.org/abs/2402.03523), [Computational Synthetic Cohomology Theory in Homotopy Type Theory](https://arxiv.org/abs/2401.16336). It says: “Let f ,g : A →⋆ B and let B be homogeneous. If f = g as plain functions, then f = g as pointed functions.”

**Sources:**

- [Axel Ljungström, Symmetric Monoidal Smash Products in Homotopy Type Theory, Math. Struct. Comp. Sci. (2024), arXiv:2402.03523](https://doi.org/10.1017/s0960129524000318)
- [Axel Ljungström, Anders Mörtberg, Computational Synthetic Cohomology Theory in Homotopy Type Theory, Math. Struct. Comp. Sci. 35 (2025) e16, arXiv:2401.16336](https://doi.org/10.1017/s0960129525000131)

### Set-theoretic and type-theoretic ordinals coincide, and univalence makes them equal

**Remember:** Two definitions of ordinal, one isomorphism, and univalence makes them one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 03E10. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** A type-theoretic ordinal is a set with a proposition-valued, transitive, extensional and well-founded relation. A set-theoretic ordinal is a transitive set of transitive sets in the cumulative hierarchy V, ordered by membership. Under univalence, isomorphic type-theoretic ordinals are equal.

**Problem.** The type Ord of type-theoretic ordinals and the type 𝕍ᵒʳᵈ of set-theoretic ordinals are isomorphic as type-theoretic ordinals. So, by univalence, they are equal.

**How the definition helps.** The ordinal comparison theorem gives an order isomorphism between the two types of ordinals, and univalence turns it into an equality (our own). The work is in the comparison, which must show that the map is onto and that it matches the two orders.

**Paper or page:** [Set-Theoretic and Type-Theoretic Ordinals Coincide](https://arxiv.org/abs/2301.10696v3). It says: “The ordinals Ord and 𝕍ᵒʳᵈ are isomorphic (as type-theoretic ordinals). Hence, by univalence, they are equal.”

**Sources:**

- [Tom de Jong, Nicolai Kraus, Fredrik Nordvall Forsberg, Chuangjie Xu, Set-Theoretic and Type-Theoretic Ordinals Coincide, LICS 2023, arXiv:2301.10696](https://doi.org/10.1109/LICS56636.2023.10175762)

### Two-level type theory adds strict equality to define semisimplicial types

**Remember:** Strict face identities, so boundaries need no tower of coherences.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 18N40. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A strict semisimplicial diagram up to dimension n assigns types to dimensions 0 to n and face maps dᵢ between consecutive dimensions. The face identities dᵢ∘dⱼ = dⱼ₋₁∘dᵢ for i &lt; j hold as strict outer equalities, not as paths, so they need no higher coherences.

**Problem.** In two-level type theory with two natural numbers types, there is a fibrant type of n-truncated semisimplicial types for each n. A semisimplicial type is the type version of a semisimplicial set, a simplicial set without degeneracy maps.

**How the definition helps.** With strict face identities, the boundary of a simplex is finite data with no infinite tower of coherences (our own). Each stage adds a fibrant type of simplices indexed by compatible boundaries, and the two-level theory proves each stage fibrant.

**nLab:** [two-level type theory](https://ncatlab.org/nlab/show/two-level+type+theory). It says: “Two-level type theories (including HTS and ACK) were motivated to a large extent by the technical difficulties encountered in formalizing semisimplicial types in default homotopy type theory (HoTT).”

**Sources:**

- [Danil Annenkov, Paolo Capriotti, Nicolai Kraus, Christian Sattler, Two-Level Type Theory and Applications, Mathematical Structures in Computer Science (2023); arXiv:1705.03307](https://arxiv.org/abs/1705.03307)

### Weakly constant endomaps give the generalized Hedberg theorem

**Remember:** Weakly constant means all values are equal, not that one value exists.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory), 03F65. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A function f from A to B is weakly constant if any two of its values are equal: f(x) = f(y) for all x and y in A.

**Problem.** A type A has a map from its propositional truncation ‖A‖ to A exactly when it has a weakly constant endomap. So A is a set exactly when every identity type of A has one, and in particular every type with decidable equality is a set.

**How the definition helps.** The fixed points of a weakly constant endomap form a proposition equivalent to ‖A‖, and projection gives a map ‖A‖ → A (our own). Conversely, composing truncation with a map ‖A‖ → A gives a weakly constant endomap. Decidable equality gives one on each identity type: return a chosen path when one exists.

**nLab:** [weakly constant function](https://ncatlab.org/nlab/show/weakly+constant+function), [Hedberg's theorem](https://ncatlab.org/nlab/show/Hedberg%27s+theorem), [split support](https://ncatlab.org/nlab/show/split+support). It says: “A type A has split support if and only if it admits a weakly constant endomap f:A→A.”

**Sources:**

- [Nicolai Kraus, Martín Escardó, Thierry Coquand, Thorsten Altenkirch, Generalizations of Hedberg's theorem, TLCA 2013, Lecture Notes in Computer Science 7941](https://doi.org/10.1007/978-3-642-38946-7_14)
- [Nicolai Kraus, Martín Escardó, Thierry Coquand, Thorsten Altenkirch, Notions of anonymous existence in Martin-Löf type theory, Logical Methods in Computer Science 13 (2017), arXiv:1610.03346](https://arxiv.org/abs/1610.03346)

### With univalence, Aczel's W-type with its identity type models multisets

**Remember:** Equal index types count multiplicities, so the identity type gives multisets.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03F50. arXiv math.LO. Level 4: research.

**Definition.** A multiset tree sup(A,f) has a small type A of occurrences and a subtree f(a) at each occurrence; these trees form Aczel’s W-type, with equality given by its identity type. Membership z ∈ sup(A,f) is the type of occurrences a with an identification of f(a) with z, so it counts how often z occurs.

**Problem.** With univalence, Aczel's W-type with its identity type is a model of multisets. In particular, two multisets x and y are equal exactly when, for every z, the types z ∈ x and z ∈ y are equivalent.

**How the definition helps.** By univalence, two trees are equal when an equivalence of occurrence types matches their subtrees (our own). Such an equivalence is the same as an equivalence of membership types at every z, since it sums the fibers at each z. The model construction verifies the remaining multiset axioms.

**Paper or page:** [Multisets in Type Theory](https://arxiv.org/abs/1610.08027), [Multisets in Type Theory](https://arxiv.org/abs/1610.08027). It says: “Our investigation takes this W-type and instead considers the identity type on it, which can be computed from the Univalence Axiom. Our thesis is that this gives a model of multisets.”

**Sources:**

- [Håkon Robbestad Gylterud, Multisets in Type Theory, arXiv:1610.08027 (2016)](https://arxiv.org/abs/1610.08027)

### Explicit substitutions without a composition rule keep strong normalization

**Remember:** Finish the inner substitution before you touch the outer one.

*Rules out counterexamples.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** An explicit substitution M⟨x≔N⟩ is a term that records a pending replacement of free occurrences of x in M by N. The Bloo–Rose calculus pushes substitutions through terms one constructor at a time and has no rule that composes nested substitutions.

**Problem.** In the Bloo–Rose calculus, every ordinary λ-term that is strongly normalizing remains strongly normalizing under explicit substitution. In particular, every reduction sequence from a simply typed λ-term is finite.

**How the definition helps.** Without a composition rule, nested substitutions cannot interact, which removes Melliès’s typed counterexample (our own). Bloo and Rose prove that their rules preserve strong normalization, and simply typed terms are strongly normalizing.

**nLab:** [explicit substitution](https://ncatlab.org/nlab/show/explicit+substitution). It says: “such a rule is undesirable because it destroys the strong normalization property of the reduction system”

**Sources:**

- [M. Abadi, L. Cardelli, P.-L. Curien, J.-J. Lévy, Explicit substitutions, J. Funct. Program. 1 (1991) 375–416](https://doi.org/10.1017/S0956796800000186)
- [P.-A. Melliès, Typed λ-calculi with explicit substitutions may not terminate, Typed Lambda Calculi and Applications (TLCA 1995), Lecture Notes in Computer Science 902 (1995) 328–334](https://doi.org/10.1007/bfb0014062)
- [Roel Bloo, Kristoffer H. Rose, Preservation of strong normalisation in named lambda calculi with explicit substitution and garbage collection, CSN-95: Computer Science in the Netherlands (1995)](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.51.5026) (link not checked)

### Strongly scoped syntax makes substitution avoid variable capture automatically

**Remember:** Every term declares its free variables, and binders must use other names.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus), 03B38. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A strongly scoped term carries an index V that lists every variable that may occur free in it. A binder in a term of context V must introduce names X disjoint from V, and its body has context V ∪ X.

**Problem.** In strongly scoped syntax, the substitution M\[N/x\] never captures a free variable of N under a binder of M.

**How the definition helps.** Substituting N into M gives a term whose context contains the free names of N, so each binder must be fresh for them (our own). A conflicting binder is renamed before substitution enters its body, and disjointness then forbids capture.

**nLab:** [Initiality Project - Raw Syntax](https://ncatlab.org/nlab/show/Initiality+Project+-+Raw+Syntax). It says: “Note that substitution is automatically "capture-avoiding" because of our "strong scoping" and local Barendregt convention.”

**Sources:**

- [Robert Harper, Practical Foundations for Programming Languages, 2nd ed., Cambridge University Press, 2016](https://doi.org/10.1017/CBO9781316576892)

### An opremum detects modal irreducibility

**Remember:** One element lies in every nontrivial filter closed under the modal operation.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)), 08B26. arXiv math.LO. Level 4: research.

**Definition.** In a modal algebra, an opremum is an element c &lt; 1 that lies in the modal filter generated by every a &lt; 1. Concretely, for every a &lt; 1 there is a natural number n with a ∧ □a ∧ ⋯ ∧ □ⁿa ≤ c.

**Problem.** A modal algebra is subdirectly irreducible exactly when it has an opremum. Subdirect irreducibility means there is a least congruence strictly larger than equality.

**How the definition helps.** An opremum lies in every modal filter other than {1}, so it generates the least such filter (our own). Modal filters correspond to congruences, so a least filter above {1} is a least congruence above equality. Conversely, any c &lt; 1 in such a least filter is an opremum.

**Paper or page:** [Stable Canonical Rules and Formulas for Pre-transitive Logics via Definable Filtration](https://arxiv.org/abs/2510.22638v1). It says: “A modal algebra A is s.i. iff A has an opremum”

**Sources:**

- [Tenyo Takahashi, Stable Canonical Rules and Formulas for Pre-transitive Logics via Definable Filtration, Proposition 2.1](https://arxiv.org/abs/2510.22638v1)

### In hybrid logic every pure axiom is complete for its frames

**Remember:** Name the worlds, and every pure axiom proves exactly its frames.

*Makes the theorem clean to state or prove.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv cs.LO, math.LO. Level 4: research.

**Definition.** In hybrid logic, nominals name single worlds, @ᵢ evaluates at the world named i, and ↓x binds x to the current world. A pure sentence has no ordinary propositional variables and no free state variables.

**Problem.** The basic hybrid calculus with @ and ↓ plus any set Σ of pure sentences is sound and strongly complete for the frames satisfying Σ.

**How the definition helps.** A pure sentence has no ordinary propositional variables, so its validity depends only on the frame (our own). The pure completeness theorem builds a named model for each consistent set, and the construction enforces every instance of the pure axioms, so its frame satisfies Σ.

**Paper or page:** [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder](https://arxiv.org/abs/2207.01288v1), [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder](https://arxiv.org/abs/2207.01288v1). It says: “For any set Σ of pure ℒ(@,↓)-sentences, 𝐊ℋ(@,↓) + Σ is sound and strongly complete with respect to the class of frames defined by Σ.”

**Sources:**

- [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder, arXiv:2207.01288 (2022)](https://arxiv.org/abs/2207.01288v1)
- [Patrick Blackburn, Balder ten Cate, Pure Extensions, Proof Rules, and Hybrid Axiomatics, Studia Logica (2006)](https://doi.org/10.1007/s11225-006-9009-6)

### In the antithesis interpretation, one affine statement gives both constructive versions

**Remember:** Each statement pairs a proof side with a refutation side.

*Makes the theorem clean to state or prove.* MSC 03B47 (Substructural logics (including relevance, entailment, linear logic, Lambek calculus, BCK and BCI logics)), 03F25, 03F65. arXiv math.LO. Level 4: research.

**Definition.** An affine proposition is a pair (P⁺,P⁻) of intuitionistic propositions, a proof side and a refutation side, that cannot both hold. P entails Q when P⁺ implies Q⁺ and Q⁻ implies P⁻, and linear negation swaps the two sides.

**Problem.** The antithesis interpretation is sound: if Pᴸ ⊢ Qᴸ in affine logic, then P⁺ ⊢ Q⁺ and Q⁻ ⊢ P⁻ in intuitionistic logic.

**How the definition helps.** The soundness theorem checks that every affine rule preserves this two-way order (our own reading). Reading off the two sides of a derivable entailment gives the two intuitionistic sequents.

**nLab:** [antithesis interpretation](https://ncatlab.org/nlab/show/antithesis+interpretation). It says: “The point of the antithesis interpretation is that the pair (P⁺, P⁻) may be derived systematically from a single statement Pᴸ in affine logic.”

**Sources:**

- [M. Shulman, Affine logic for constructive mathematics, Bull. Symb. Logic 28 (2022) 327–386, arXiv:1805.07518](https://arxiv.org/abs/1805.07518)

### Kripke's partial truth predicate lets a language talk about its own truth

**Remember:** Leave the liar undefined, and a language can hold its truth.

*Rules out counterexamples. Confidence: medium.* MSC 03B60 (Other nonclassical logic), 03B50, 03A05. arXiv math.LO. Level 4: research.

**Definition.** A partial truth predicate is given by disjoint sets T and F of sentence codes, the sentences called true and false; all others are undefined. Kripke’s jump re-evaluates every sentence by the strong Kleene rules, which may leave a sentence undefined, and gives the next pair.

**Problem.** Kripke's monotone construction reaches a least fixed point. This gives a language a consistent partial truth predicate for its own sentences, in which the liar has no truth value.

**How the definition helps.** The jump is monotone, so iterating it from empty sets, with unions at limits, grows until it stops at a least fixed point. The liar cannot consistently enter T or F, so strong Kleene evaluation leaves it undefined (our own).

**Wikipedia:** [Semantic theory of truth](https://en.wikipedia.org/wiki/Semantic_theory_of_truth). It says: “Based on partial logic (a logic of partially defined truth predicates instead of Tarski's logic of totally defined truth predicates), Kripke allows a language to contain its own truth predicate”

**Sources:**

- [Kripke, S. (1975). Outline of a theory of truth. Journal of Philosophy 72, 690–716.](https://doi.org/10.2307/2024634)

### Coalgebras of the pebbling comonad are tree decompositions

**Remember:** Tree-width at most k − 1 means having a coalgebra for k pebbles.

*Makes the theorem clean to state or prove.* MSC 03C13 (Model theory of finite structures), 18C15, 68Q19. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** ℙₖA is the structure of k-pebble plays on A, nonempty finite sequences of moves that each place one of k pebbles on an element. A coalgebra is a homomorphism α : A → ℙₖA giving each element a play that ends at it (ε∘α = id), whose prefixes are the plays given to the elements played earlier (δ∘α = ℙₖα∘α).

**Problem.** A relational structure A has a coalgebra A → ℙₖA if and only if its tree-width is at most k − 1.

**How the definition helps.** These consistent plays form a forest in which each element ends its own branch, a pebble forest cover (our own). The pebbling coalgebra theorem shows that such covers exist exactly when the tree-width is below k.

**Paper or page:** [Lovász-Type Theorems and Game Comonads](https://arxiv.org/abs/2105.03274v1), [An invitation to game comonads](https://arxiv.org/abs/2407.00606v1), [The Pebble-Relation Comonad in Finite Model Theory](https://arxiv.org/abs/2110.08196v6). It says: “A σ-structure A admits a coalgebra structure α : A → ℙₖ(A) if, and only if, it has tree-width at most k−1.”

**Sources:**

- [Samson Abramsky, Anuj Dawar, Pengming Wang, The pebbling comonad in Finite Model Theory, LICS 2017](https://doi.org/10.1109/LICS.2017.8005129)
- [Anuj Dawar, Tomáš Jakl, Luca Reggio, Lovász-Type Theorems and Game Comonads, LICS 2021, arXiv:2105.03274](https://doi.org/10.1109/LICS52264.2021.9470609)
- [Samson Abramsky, Luca Reggio, An invitation to game comonads, arXiv:2407.00606 (2024)](https://arxiv.org/abs/2407.00606v1)
- [Yoàv Montacute, Nihil Shah, The Pebble-Relation Comonad in Finite Model Theory, Logical Methods in Computer Science 20(2) (2024), arXiv:2110.08196](https://arxiv.org/abs/2110.08196v6)

### Beth definability for an infinitary logic gives Stone–Weierstrass

**Remember:** Implicit definitions become explicit, and separating sublattices become dense.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C40 (Interpolation, preservation, definability), 08A65, 46E05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** A theory implicitly defines an operation if any two outputs that satisfy the theory for the same inputs coincide. Term Beth definability says that every implicitly defined operation is given by a term in its inputs wherever the theory holds.

**Problem.** Let G be a family of continuous real functions on a compact Hausdorff space X that contains 1, separates points, and is closed under real scalar multiples, sums and maxima. Then G is uniformly dense in the continuous real functions on X, and this follows from Beth definability for the equational logic of Δ.

**How the definition helps.** The paper shows that, in Δ, Beth definability means every epimorphism is surjective. Its algebraic Stone–Weierstrass theorem turns that surjectivity into uniform density of a separating function lattice, using its representation of these algebras (our own).

**Paper or page:** [Beth definability and the Stone-Weierstrass Theorem](https://arxiv.org/abs/2007.05281). It says: “We introduce an equational logic ⊨Δ associated with an infinitary variety Δ and show that the Stone-Weierstrass Theorem is a consequence of the Beth definability property of ⊨Δ, stating that every implicit definition can be made explicit.”

**Sources:**

- [Luca Reggio, Beth definability and the Stone-Weierstrass Theorem, arXiv:2007.05281 (2021)](https://arxiv.org/abs/2007.05281)

### Defining pseudofinite groups by finite-group sentences makes definable injections surjective

**Remember:** A first-order counting rule true in all finite groups holds here too.

*True by definition. Confidence: medium.* MSC 03C60 (Model-theoretic algebra), 20A15, 03C13. arXiv math.LO. Level 4: research.

**Definition.** A group is pseudofinite if it is infinite and satisfies every first-order sentence that is true in all finite groups.

**Problem.** In a pseudofinite group, every injective map from the group to itself that a formula defines, even with parameters, is surjective.

**How the definition helps.** For each formula, the claim that, for every choice of parameters, it defines a surjection whenever it defines an injective self-map is a single first-order sentence (our own). Every finite group satisfies this sentence by counting, so every pseudofinite group satisfies it too.

**Paper or page:** [A note on pseudofinite groups of finite centraliser dimension](https://arxiv.org/abs/2106.05698v1). It says: “Let G ≡ ∏ᵢ∈I Gᵢ/U be a pseudofinite group with cd(G) = k.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded phase gives definable volumes

**Remember:** A bounded phase needs only a restricted sine.

*Makes the theorem clean to state or prove.* MSC 03C64 (Model theory of ordered structures; o-minimality), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** The integral of exp(−f)ω over G has bounded phase when, on G, f has bounded imaginary part, real part bounded below, and compact preimages of compact sets. Here G ⊆ ℂⁿ is closed, cut out by real polynomial conditions over ℚ and oriented on its smooth part. The forms f and ω are rational over ℚ and regular on G, and the degree of ω is the real dimension of G.

**Problem.** With bounded phase, the real and imaginary parts of each such integral are, up to sign, volumes of compact sets. These sets are defined without extra real constants, using the ordered field operations, the exponential, and sine on \[0, 1\].

**How the definition helps.** Because the imaginary part of f stays in a bounded interval, the oscillation of exp(−f) needs sine and cosine only on that interval, and angle addition reduces them to sine on \[0, 1\] (our own). The volume theorem then turns the real and imaginary parts into volumes of compact sets.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “Permitting the integrand Q to be the product of an algebraic function and the exponential of an algebraic function”

**Sources:**

- [Commelin, Habegger and Huber, Exponential periods and o-minimality](https://aif.centre-mersenne.org/articles/10.5802/aif.3801/)

### The geometric theory of natural numbers has only the standard model

**Remember:** An infinite 'or' says each number is 0 followed by finitely many successors.

*Rules out counterexamples. Confidence: medium.* MSC 03C75 (Other infinitary logic), 03G30, 03C35. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The standard successor theory has a sort N, a constant 0 and an injective successor s whose image omits 0. Its geometric covering axiom, an infinite disjunction over all natural numbers n, says that every element equals sⁿ(0) for some n.

**Problem.** Set classifies the standard successor theory. Every Grothendieck topos therefore has a unique model up to isomorphism, its natural numbers object, and the theory has no proper consistent quotient.

**How the definition helps.** The covering axiom leaves no elements beyond the numerals, and injectivity with 0 outside the image of s keeps them distinct, so every model is one point per numeral (our own). This model is preserved by inverse images and has only the identity endomorphism, so Set classifies the theory. Set has no proper subtopos except the degenerate one, so no proper quotient is consistent.

**nLab:** [geometric theory](https://ncatlab.org/nlab/show/geometric+theory). It says: “The classifying topos is Set. But due to the trivial subtopos lattice, theories classified by Set admit no consistent quotient theories; thus the geometric theory of natural numbers is complete!”

**Sources:**

- [Steven Vickers, Locales and Toposes as Spaces, in Handbook of Spatial Logics, Springer (2007) 429–496](https://doi.org/10.1007/978-1-4020-5587-4_8)

### Fullness is exactly what Łoś's theorem needs in Boolean-valued models

**Remember:** Finitely many witnesses cover the existential value, so each ultrafilter picks one.

*True by definition. Confidence: medium.* MSC 03C90 (Nonclassical models (Boolean-valued, sheaf, etc.)), 03E40. arXiv math.LO. Level 4: research.

**Definition.** A Boolean-valued model is full if each existential value is attained by finitely many witnesses together. For every formula φ(x) with parameters, some a₁,…,aₙ satisfy ‖φ(a₁)‖ ∨ ⋯ ∨ ‖φ(aₙ)‖ = ‖∃x φ(x)‖.

**Problem.** A Boolean-valued model satisfies Łoś's theorem exactly when it is full. Łoś's theorem says that, for each ultrafilter G on B, the quotient by G satisfies φ(\[a\]) exactly when the value of φ(a) is in G.

**How the definition helps.** An ultrafilter that contains a finite join contains one of its terms, so it contains the value of a witness, and induction on formulas gives Łoś’s theorem (our own). Conversely, if no finite join suffices, the existential value and the complements of all instance values have the finite intersection property. An ultrafilter containing them contains ‖∃x φ(x)‖ but no instance value, so Łoś’s theorem fails for ∃x φ(x).

**Paper or page:** [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852). It says: “We also give an exact topological characterization (the so called fullness property) of which boolean valued models satisfy Loś Theorem”

**Sources:**

- [Moreno Pierobon and Matteo Viale, Boolean valued models, presheaves, and étalé spaces, arXiv:2006.14852 (2023)](https://arxiv.org/abs/2006.14852)

### Mixing supplies existential witnesses

**Remember:** Refine the join into disjoint pieces, then mix the witnesses.

*Rules out counterexamples.* MSC 03C90 (Nonclassical models (Boolean-valued, sheaf, etc.)), 06E10. arXiv math.LO. Level 4: research.

**Definition.** A Boolean-valued model has mixing if elements can be glued along disjoint Boolean values. For every family of elements aᵢ and pairwise disjoint nonzero values bᵢ, some element a has bᵢ ≤ ‖a = aᵢ‖ for every i.

**Problem.** In a Boolean-valued model with mixing, every existential truth value equals the value given by some single witness.

**How the definition helps.** Split the existential value into maximal disjoint nonzero pieces, each below the value of some witness, and glue those witnesses by mixing (our own). The glued element attains the whole existential value. Without mixing, a predicate on two distinct elements can take complementary nonzero values, and neither attains their join.

**Paper or page:** [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852v5). It says: “Assume that ℳ satisfies the κ-mixing property for some κ ≥ min {\|𝖡\|, \|M\|}. Then ℳ is full.”

**Sources:**

- [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852v5)

### Effective discontinuity gives the Weihrauch lattice a weakest discontinuous problem

**Remember:** Continuously turn each candidate realizer’s code into an input where it fails.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D30 (Other degrees and reducibilities in computability and recursion theory), 03D78. arXiv math.LO. Level 4: research.

**Definition.** A problem is effectively discontinuous if a continuous function turns each code p of a candidate solver into a valid input name on which that solver fails. Codes are read by a fixed universal evaluator for partial continuous functions on Baire space, and failure means divergence or no allowed output.

**Problem.** Under continuous Weihrauch reducibility, the discontinuity problem reduces to a problem exactly when that problem is effectively discontinuous. In ZF with dependent choice and determinacy, the discontinuity problem is therefore the weakest discontinuous problem.

**How the definition helps.** The paper’s reduction theorem shows that a continuous Weihrauch reduction from the discontinuity problem is the same as such a counterexample function (our own reading). Its game determinacy theorem gives such a function for every discontinuous problem under the stated axioms, so the discontinuity problem is the weakest.

**Paper or page:** [The Discontinuity Problem](https://arxiv.org/abs/2012.02143). It says: “We introduce the discontinuity problem, and we show that it is reducible exactly to the effectively discontinuous problems, defined in a suitable way.”

**Sources:**

- [Vasco Brattka, The Discontinuity Problem, Journal of Symbolic Logic 88(3) (2023) 1191–1212, arXiv:2012.02143](https://arxiv.org/abs/2012.02143)

### Church's thesis as an axiom gives synthetic proofs of Tennenbaum's theorem

**Remember:** When every function is computable, "computable" needs no coding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D75 (Abstract and axiomatic computability and recursion theory), 03B38, 03C62. arXiv math.LO. Level 4: research.

**Definition.** The paper’s Church thesis requires a representing arithmetic formula for every function from ℕ to ℕ. For each input numeral, Peano arithmetic proves that the formula holds of exactly the numeral for its output.

**Problem.** Assume Church's thesis and Markov's principle. Then a model of Peano arithmetic with decidable equality, whose elements some function can list, is the standard model. This is a synthetic form of Tennenbaum's theorem.

**How the definition helps.** Under the thesis, every function on ℕ is computable in a form that PA expresses, so no external coding of computability is needed (our own). An enumeration with decidable equality tracks the model’s operations by functions on ℕ. The paper’s constructive Tennenbaum argument with Markov’s principle then gives standardness.

**Paper or page:** [An Analysis of Tennenbaum's Theorem in Constructive Type Theory](https://arxiv.org/abs/2302.14699). It says: “assuming a version of Church's thesis, which expresses that any function on natural numbers is representable by a formula in PA. This assumption provides for a conveniently abstract setup to carry out rigorous computability arguments”

**Sources:**

- [Marc Hermes and Dominik Kirst, An Analysis of Tennenbaum's Theorem in Constructive Type Theory, Logical Methods in Computer Science 20(1) (2024), arXiv:2302.14699](https://arxiv.org/abs/2302.14699)

### The relativized notion of computable type is the better behaved one

**Remember:** Ask for computable type relative to every oracle, and topology takes over.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D78 (Computation over the reals, computable analysis), 54C56. arXiv math.LO, math.GN. Level 4: research.

**Definition.** A compact metrizable space X has strong computable type if the following holds for every copy K of X in the Hilbert cube and every oracle A. If A can enumerate the finite rational open covers of K, then A can enumerate the basic open balls that meet K.

**Problem.** A compact space that is minimal with nonzero Čech cohomology in degree n has strong computable type.

**How the definition helps.** Because the condition holds relative to every oracle, it depends only on topology, and the paper gives a topological criterion through a Σ⁰₂ invariant (our own account). A space with the invariant whose proper compact subsets lack it has strong computable type. The paper applies this to nonzero Čech cohomology in degree n.

**Paper or page:** [Strong computable type](https://arxiv.org/abs/2210.08309). It says: “We argue that the stronger, relativized version of computable type, is better behaved and prone to topological analysis. We obtain characterizations of strong computable type, related to the descriptive complexity of topological invariants, as well as purely topological criteria.”

**Sources:**

- [Djamel Eddine Amir and Mathieu Hoyrup, Strong computable type, arXiv:2210.08309 (2023)](https://arxiv.org/abs/2210.08309)

### The elementary substructure test makes stationary families survive restriction

**Remember:** Restrict the elementary substructure to the named subset.

*True by definition. Confidence: medium.* MSC 03E05 (Other combinatorial set theory). arXiv math.LO. Level 4: research.

**Definition.** A family S of countable subsets of X is stationary if every structure on X in a countable language has an elementary substructure whose universe lies in S.

**Problem.** Let S be a stationary family of countable subsets of X, and let Y be an uncountable subset of X. Then the infinite sets x ∩ Y, for x in S, form a stationary family on Y.

**How the definition helps.** Extend a structure on Y to one on X with a predicate for Y and constants for infinitely many points of Y (our own). Stationarity gives an elementary substructure with universe x ∈ S, and relativizing quantifiers to Y shows that x ∩ Y is elementary in the original. The constants make x ∩ Y infinite.

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

**Definition.** B is a subquotient of A, written \|B\| ≤\* \|A\|, when some set B′ maps onto B and injects into A. The classical definition asks instead for a surjection A → B, or for B to be empty.

**Problem.** Constructively, \|B\| ≤ \|A\| implies \|B\| ≤\* \|A\|, with no separate case for the empty set. Here \|B\| ≤ \|A\| means that there is an injection B → A.

**How the definition helps.** Take B′ = B and use the identity map onto B together with the given injection into A (our own). The same witnesses work when B is empty.

**nLab:** [surjection](https://ncatlab.org/nlab/show/surjection). It says: “To make this definition less piecemeal and more constructive, one can define \|B\| ≤\* \|A\| to mean B is a subquotient of A, in other words one has a surjection B′ → B and an injection B′ → A.”

**Sources:** none listed. No primary source with a working link was found.

### Plump ordinals make x ≤ y &lt; z imply x &lt; z constructively

**Remember:** A plump ordinal contains every plump ordinal below any of its members.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 4: research.

**Definition.** Plump ordinals are defined recursively. An ordinal A is plump if every member B &lt; A is plump, and every plump C with C ≤ B for some B &lt; A is itself a member, C &lt; A.

**Problem.** Without excluded middle, plump ordinals satisfy the law that x ≤ y &lt; z implies x &lt; z. If this law held for all constructive ordinals, excluded middle would follow.

**How the definition helps.** The second clause is the law itself, for plump x. For arbitrary ordinals, take y = 1, z = 2 and x = {0 ∣ P} for a proposition P (our own). Then x ≤ 1, but x &lt; 2 forces x = 0 or x = 1, which decides P (our own).

**nLab:** [plump ordinal](https://ncatlab.org/nlab/show/plump+ordinal). It says: “However, Paul Taylor (Taylor) realized that this last property can be recovered by essentially "restricting to the subclass of ordinals z for which it holds hereditarily". These are the plump ordinals.”

**Sources:**

- [Paul Taylor, Intuitionistic Sets and Ordinals, Journal of Symbolic Logic 61 (1996) 705–744](http://www.paultaylor.eu/ordinals/)

### The compact-space definition makes universally Baire sets closed under continuous preimages

**Remember:** Pull back twice by composing the two maps.

*True by definition.* MSC 03E15 (Descriptive set theory). arXiv math.LO. Level 4: research.

**Definition.** A subset A of Baire space is universally Baire if every continuous preimage of it in a compact Hausdorff space has the Baire property. That is, for each compact Hausdorff K and continuous f from K to Baire space, f⁻¹(A) differs from an open set by a meager set.

**Problem.** Let g be a continuous map from Baire space to itself, and let A be universally Baire. Then the preimage of A under g is universally Baire.

**How the definition helps.** If f tests g⁻¹(A), then g ∘ f tests A, and f⁻¹(g⁻¹(A)) = (g ∘ f)⁻¹(A) has the Baire property (our own). The Feng–Magidor–Woodin theorem shows that this definition agrees with the tree formulation.

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

**Definition.** A set A of reals is universally Baire if, for every forcing order, some pair of ground-model trees projects to A and to its complement and stays complementary in every extension by that order. A tree projects to the first coordinates of its infinite branches.

**Problem.** Take two tree pairs for the same universally Baire set A. In any forcing extension where both pairs stay complementary, the two first trees project to the same set.

**How the definition helps.** Combine the first tree of one pair with the second tree of the other along their real coordinate; it has no ground-model branch because the projections are disjoint (our own). Its ground-model rank function excludes branches in the extension too, which gives one inclusion between the first projections. Exchanging the pairs gives the other inclusion.

**Paper or page:** [Uniformization and Internal Absoluteness](https://arxiv.org/abs/2108.09688v4). It says: “A set of reals A is universally Baire if and only if for every ordinal λ”

**Sources:**

- [Qi Feng, Menachem Magidor, and W. Hugh Woodin, Universally Baire Sets of Reals (1992)](https://doi.org/10.1007/978-1-4613-9754-0_15)
- [Sandra Müller and Philipp Schlicht, Uniformization and Internal Absoluteness (arXiv 2022)](https://arxiv.org/abs/2108.09688v4)

### A choice principle weak enough to survive in every Grothendieck topos

**Remember:** Maybe no section, but a small set of covers refines every cover.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E25 (Axiom of choice and related propositions), 03F65, 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** WISC, the weakly initial set of covers, says that every set X has a set of surjections onto X such that every surjection onto X is refined by one of them. A surjection refines another if it factors through it over X.

**Problem.** Assume WISC. Then the category of anafunctors between two small categories is essentially small, that is, equivalent to a small category. Every Grothendieck topos and every realizability topos inherits WISC from its base, so the result holds inside them too.

**How the definition helps.** WISC gives a set of covers of the object set that is enough to represent every anafunctor up to isomorphism, and the functor data on each cover form a set (our own). Van den Berg’s inheritance theorem gives WISC inside the stated toposes.

**nLab:** [WISC](https://ncatlab.org/nlab/show/WISC). It says: “any Grothendieck topos or realizability topos inherits WISC from its base topos of sets (even if the latter is constructive or even predicative); see van den Berg.”

**Sources:**

- [B. van den Berg, Predicative toposes, 2012, arXiv:1207.0959](https://arxiv.org/abs/1207.0959)
- [B. van den Berg, I. Moerdijk, The axiom of multiple choice and models for constructive set theory, 2012, arXiv:1204.4045](https://arxiv.org/abs/1204.4045)

### Mathias's criterion makes infinite subsequences of Prikry sequences generic

**Remember:** Every infinite subsequence still lies eventually in each measure-one set.

*True by definition. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 03E55. arXiv math.LO. Level 4: research.

**Definition.** Fix a ground model M with a normal measure U on κ. By Mathias’s criterion, an increasing ω-sequence cofinal in κ is Prikry generic over M exactly when it lies eventually in every member of U.

**Problem.** Every infinite subsequence of a Prikry generic sequence is Prikry generic over the same ground model.

**How the definition helps.** The criterion is a condition on tails, and an infinite subsequence inherits it: it is still cofinal in κ and lies eventually in every set that the sequence eventually lies in (our own). The work is Mathias’s theorem that the criterion detects every dense set.

**Wikipedia:** [List of forcing notions](https://en.wikipedia.org/wiki/List_of_forcing_notions). It says: “change the cofinality of κ while preserving all cardinals”

**Sources:**

- [A. R. D. Mathias, On sequences generic in the sense of Prikry (1973)](https://doi.org/10.1017/S1446788700028755)

### The function definition of Woodin cardinals puts measurable cardinals in every club

**Remember:** Let f jump to the next point of the club.

*True by definition.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 4: research.

**Definition.** A cardinal δ is Woodin if, for every f : δ → δ, some κ &lt; δ is closed under f, f\[κ\] ⊆ κ, and is the critical point of an elementary embedding j : V → M. Here M is transitive and contains every set of rank below j(f)(κ).

**Problem.** Let δ be a Woodin cardinal and C a club in δ, a closed unbounded subset that contains each of its limit points below δ. Then C contains a measurable cardinal.

**How the definition helps.** Let f send each β &lt; δ to the least point of C above β (our own). A κ closed under f is a limit of points of C, so κ ∈ C, and a critical point is measurable.

**Wikipedia:** [Woodin cardinal](https://en.wikipedia.org/wiki/Woodin_cardinal). It says: “preceded by a stationary set of measurable cardinals”

**Sources:**

- [Akihiro Kanamori, The Higher Infinite (2003)](https://doi.org/10.1007/978-3-540-88867-3)

### The indiscernibles definition lets Ramsey cardinals handle fewer than κ colors

**Remember:** Give each color its own relation symbol.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals), 03E02. arXiv math.LO. Level 4: research.

**Definition.** An uncountable cardinal κ is Ramsey if every structure on κ in a language with fewer than κ symbols has κ many order indiscernibles, elements whose increasing tuples of equal length satisfy the same parameter-free formulas.

**Problem.** Let κ be a Ramsey cardinal. Color the finite subsets of κ with fewer than κ colors. Then some set of size κ is homogeneous.

**How the definition helps.** Give each positive arity and color a relation that holds of the increasing tuples whose set has that color (our own). There are fewer than κ such relations, and indiscernibility makes each one constant on increasing tuples, which is homogeneity.

**Paper or page:** [Large cardinal ideals](https://arxiv.org/abs/2102.09591v1). It says: “Every structure 𝒜 in a language of size less than κ”

**Sources:**

- [Brent Cody, Large cardinal ideals (arXiv 2021)](https://arxiv.org/abs/2102.09591v1)

### Strong extensionality makes simulations unique

**Remember:** Two elements that nothing can tell apart, step by step forever, are equal.

*True by definition. Confidence: medium.* MSC 03E65 (Other set-theoretic hypotheses and axioms), 03E20. arXiv math.LO. Level 4: research.

**Definition.** A bisimulation on T is a relation R that matches predecessors: if x R y, every predecessor of x is R-related to some predecessor of y, and conversely. A relation ≺ on T is strongly extensional if every bisimulation relates only equal elements.

**Problem.** A relation ≺ on T is strongly extensional exactly when any two simulations from any S into T are equal. A simulation is a map that preserves ≺ and sends the ≺-predecessors of x onto the ≺-predecessors of its image.

**How the definition helps.** For simulations f and g, the pairs (f(s), g(s)) form a bisimulation, since both maps send predecessors onto predecessors, so f = g (our own). Conversely, the two projections of any bisimulation, with the coordinatewise predecessor relation, are simulations, and uniqueness makes them equal (our own).

**nLab:** [extensional relation](https://ncatlab.org/nlab/show/extensional+relation). It says: “Note that there is at most one simulation from S to T; in fact, strong extensionality for T is equivalent to saying that any two simulations S ⇉ T are equal.”

**Sources:**

- [P. Aczel, Non-Well-Founded Sets, CSLI Lecture Notes 14 (1988), Chapter 4](https://web.archive.org/web/20161020002632/https://standish.stanford.edu/pdf/00000056.pdf)

### Zadeh's fuzzy extension of a map commutes with taking iterates

**Remember:** Taking a supremum in stages gives the same result as taking it at once.

*True by definition.* MSC 03E72 (Theory of fuzzy sets, etc.), 37B02. arXiv math.DS. Level 4: research.

**Definition.** The Zadeh extension of a map f sends a fuzzy set u, which gives each point a membership value in \[0, 1\], to the fuzzy set whose value at y is the supremum of u over the preimage of y, or zero if that preimage is empty.

**Problem.** For a continuous map on a metric space, iterating its Zadeh extension gives the Zadeh extension of the iterated map.

**How the definition helps.** A preimage under f∘f is the union of the preimages under f of the points of a preimage, so taking the supremum in two stages equals taking it at once (our own). The remaining work is showing that the extension keeps the fuzzy sets in the class under study.

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

**Definition.** A focused derivation in this Tamari calculus leaves no choice of rule. It applies the left rule to a leftmost product whenever possible, the right product rule only when its left premise starts with an atom, and identity only to atoms.

**Problem.** Every provable sequent in this Tamari calculus has exactly one focused derivation.

**How the definition helps.** These restrictions make the last rule of a derivation determined by the sequent, so focused derivations are unique (Zeilberger’s Lemma 1.18; our own gloss). His focusing theorem gives existence for each provable sequent.

**Paper or page:** [A sequent calculus for a semi-associative law](https://arxiv.org/abs/1803.10080v3). It says: “Every derivable sequent has exactly one focused derivation.”

**Sources:**

- [Noam Zeilberger (2019), A Sequent Calculus for a Semi-Associative Law, Logical Methods in Computer Science 15(1)](https://doi.org/10.23638/LMCS-15(1:9)2019)

### Proof nets forget the order of rules and keep only the links

**Remember:** A proof net keeps which atoms are linked and forgets the order of rules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F52 (Proof-theoretic aspects of linear logic and other substructural logics), 18M45. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** In unit-free multiplicative linear logic, a proof structure is the formula trees of a sequent together with links that pair each atom with a dual atom. A proof net is a proof structure that comes from a cut-free sequent proof.

**Problem.** Permuting independent rules in a cut-free sequent proof does not change its proof net. In unit-free multiplicative linear logic without Mix, a proof structure is a net exactly when every switching, which keeps one premise edge at each par, gives a connected acyclic graph.

**How the definition helps.** Permuting independent rules preserves the formula trees and the links between dual atoms (our own). The Danos–Regnier correctness theorem characterizes the resulting graphs by their switchings.

**nLab:** [proof net](https://ncatlab.org/nlab/show/proof+net). It says: “can be viewed as graphical normal forms of proofs freed from 'the bureaucracy of syntax' (Girard).”

**Sources:**

- [Jean-Yves Girard, Linear logic, Theoretical Computer Science 50 (1987) 1–101](https://doi.org/10.1016/0304-3975(87)90045-4)
- [Vincent Danos, Laurent Regnier, The structure of multiplicatives, Archive for Mathematical Logic 28 (1989) 181–203](https://doi.org/10.1007/BF01622878)

### Truncated existence keeps Brouwer's continuity principle consistent

**Remember:** Say that a modulus exists; do not ask for a choice of one.

*Rules out counterexamples.* MSC 03F55 (Intuitionistic mathematics), 03B38. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Truncated continuity says that every f : ℕᴺ → ℕ has a modulus at every α, without a chosen one: the propositional truncation of the type of moduli is inhabited. A modulus at α is an n such that every β that agrees with α on the first n terms has f(β) = f(α).

**Problem.** Truncated continuity for every f ∶ ℕᴺ → ℕ holds in Johnstone’s topological topos, giving consistency with intuitionistic type theory. The untruncated principle implies 0 = 1.

**How the definition helps.** Truncation removes the function that chooses a modulus for each f and α, and Escardó and Xu derive 0 = 1 from that function (our own). Johnstone’s topological topos supplies a model of the truncated principle.

**nLab:** [Brouwer's continuity principle](https://ncatlab.org/nlab/show/Brouwer%27s+continuity+principle), [BHK interpretation](https://ncatlab.org/nlab/show/BHK+interpretation). It says: “The statement that all functions from the Baire space of sequences ℕ<sup>ℕ</sup> to the natural numbers have a choice of modulus of pointwise continuity is inconsistent.”

**Sources:**

- [Martín Escardó, Chuangjie Xu, The inconsistency of a Brouwerian continuity principle with the Curry–Howard interpretation, TLCA 2015, LIPIcs 38, 153–164](https://doi.org/10.4230/LIPIcs.TLCA.2015.153)

### Antisubalgebras give constructive quotients that keep an apartness

**Remember:** Apart outputs need apart inputs, so the quotient inherits apartness.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F65 (Other constructive mathematics), 08A30, 08A05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** On an algebra X with tight apartness \# and strongly extensional operations, an anticongruence R is an apartness on X satisfying two conditions. For every p ∈ R and q ∈ X², either q ∈ R or some corresponding coordinates of p and q are apart. For every basic operation f, if f(a₁,…,aₙ) R f(b₁,…,bₙ), then aᵢ R bᵢ for some i.

**Problem.** Without excluded middle, the quotient of an algebra by an anticongruence carries a tight apartness, and its operations stay strongly extensional. A normal subgroup or ideal alone does not give an apartness on the quotient.

**How the definition helps.** Make x and y equal in the quotient when ¬(x R y), and their classes apart when x R y (our own). The first condition makes this independent of representatives, and the quotient apartness is tight by construction. The operation condition lets operations descend and stay strongly extensional.

**nLab:** [antisubalgebra](https://ncatlab.org/nlab/show/antisubalgebra). It says: “However, if we want the quotient algebra to inherit an apartness from the original algebra, then we need antisubgroups and antiideals.”

**Sources:**

- [A. S. Troelstra, D. van Dalen, Constructivism in Mathematics: An Introduction, Volume II, Studies in Logic and the Foundations of Mathematics 123, North-Holland (1988)](https://shop.elsevier.com/books/constructivism-in-mathematics-vol-2/troelstra/978-0-444-70358-3)

### Quasidecidable propositions form a dominance without countable choice

**Remember:** Quasidecidable means 'closed under countable or' by construction.

*Makes the theorem clean to state or prove.* MSC 03F65 (Other constructive mathematics), 18F70. arXiv math.LO, math.GN. Level 4: research.

**Definition.** The quasidecidable truth values are the smallest set of truth values that contains true and false and is closed under existential quantification over ℕ. Equivalently, they form the initial σ-frame, a lattice whose finite meets distribute over countable joins.

**Problem.** Without countable choice, the quasidecidable propositions form a dominance that is closed under existential quantification over ℕ. The semidecidable propositions form one only under an extra axiom, such as countable choice.

**How the definition helps.** Closure under existential quantification over ℕ holds by definition, so it needs no countable choice. The dominance theorem of Bidlingmaier, Faissole and Spitters supplies the rest of the dominance property. For semidecidable propositions, the same closure needs countable choice.

**nLab:** [quasidecidable proposition](https://ncatlab.org/nlab/show/quasidecidable+proposition), [Smyth's dictionary](https://ncatlab.org/nlab/show/Smyth%27s+dictionary). It says: “unlike the set of semidecidable propositions, even in the absence of countable choice, the set of quasidecidable propositions is always an ℕ-overt dominance”

**Sources:**

- [Martin E. Bidlingmaier, Florian Faissole, Bas Spitters, Synthetic topology in homotopy type theory for probabilistic programming, Mathematical Structures in Computer Science 31 (2021), arXiv:1912.07339](https://arxiv.org/abs/1912.07339)

### The axiom of fullness builds the Dedekind reals without choice

**Remember:** Every multivalued function contains one from a fixed set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F65 (Other constructive mathematics), 03F60, 26E40. arXiv math.LO, math.CA. Level 4: research.

**Definition.** An entire relation from X to Y is a multivalued function: it relates every x ∈ X to at least one y ∈ Y. Fullness says that for all sets X and Y there is a set S of entire relations from X to Y such that every entire relation from X to Y contains a member of S.

**Problem.** With the axiom of fullness, the located Dedekind real numbers form a set, without the power set axiom, excluded middle or countable choice.

**How the definition helps.** Fullness lets one work with a set of multivalued approximations to each cut instead of a proper class (our own). Taking the regular multivalued sequences from such a set and identifying those that represent the same cut gives a set of located reals. Relations allow this without choosing one value at each index.

**nLab:** [axiom of fullness](https://ncatlab.org/nlab/show/axiom+of+fullness). It says: “it is strong enough to construct the set ℝ of (located Dedekind) real numbers from the set ℕ of natural numbers without assuming excluded middle or countable choice.”

**Sources:**

- [M. Shulman, Comparing material and structural set theories, arXiv:1808.05204 (2018)](https://arxiv.org/abs/1808.05204)

### An initial category with a natural numbers object gives IΣ₁'s total functions

**Remember:** Zero starts, successor steps, and parameters ride along unchanged.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 03F30, 03D20. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A parametrised natural numbers object is an object N with zero 0 and successor s that allows primitive recursion with parameters: for all a ∶ P→X and b ∶ P×X→X there is a unique h ∶ P×N→X with h(p,0) = a(p) and h(p,s(n)) = b(p,h(p,n)). The theory 𝕋 presents the initial coherent category with such an object.

**Problem.** The provably total functions of 𝕋, the Π₂ fragment of IΣ₁, are exactly the primitive recursive functions. So the same holds for IΣ₁, Peano arithmetic with induction only for Σ₁ formulas.

**How the definition helps.** Since 𝕋 presents the initial coherent category with this object, its provably total functions are the maps N → N there. Parametrised recursion builds every primitive recursive function, and initiality maps the category to the paper’s category of primitive recursive data, so nothing more appears (our own). The result transfers to IΣ₁ because 𝕋 is its Π₂ fragment.

**Paper or page:** [Categorical Structure in Theory of Arithmetic](https://arxiv.org/abs/2304.05477). It says: “prove that 𝕋 presents the initial coherent category equipped with a parametrised natural number object. This allows us to derive the provably total functions in 𝕋 are exactly the primitive recursive ones”

**Sources:**

- [Lingyuan Ye, Categorical Structure in Theory of Arithmetic, arXiv:2304.05477 (2023)](https://arxiv.org/abs/2304.05477)

### Equality in a hyperdoctrine is existential quantification along the diagonal

**Remember:** x = y is the least relation that holds on the diagonal.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18C10. arXiv math.LO, math.CT. Level 4: research.

**Definition.** Equality on A is the least predicate on A × A that is true on the diagonal: it is ∃δ(⊤), where ∃δ is left adjoint to substitution along the diagonal δ ∶ A → A × A. The doctrine requires these adjoints to satisfy the Beck–Chevalley condition, so they commute with substitution in every parameter context.

**Problem.** In a first-order hyperdoctrine with equality, this equality predicate gives a sound interpretation of first-order logic with equality, including reflexivity and substitution of equals.

**How the definition helps.** Being least among predicates true on the diagonal gives exactly reflexivity and substitution of equals. The unit of the adjunction gives reflexivity, and the adjunction says that a predicate true on the diagonal holds on all equal pairs. The Beck–Chevalley condition keeps this stable when parameters change.

**nLab:** [first-order hyperdoctrine](https://ncatlab.org/nlab/show/first-order+hyperdoctrine). It says: “This assures that the equality predicate is well behaved in the sense that it allows a sound interpretation of first order logic with equality in the hyperdoctrine.”

**Sources:**

- [F. William Lawvere, Equality in hyperdoctrines and comprehension schema as an adjoint functor, in: Applications of Categorical Algebra, Proc. Sympos. Pure Math. 17, AMS (1970)](https://doi.org/10.1090/pspum/017/0257175)

### In a constructively well-pointed topos, internal truth is truth for global elements

**Remember:** Global points act like set elements: detect, lift, never split.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18B25, 03F65. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A topos is constructively well-pointed if its global elements, the maps from the terminal object 1, behave like elements of sets. Exactly: 1 is not initial, any coproduct decomposition of 1 has an initial summand, global elements lift through epimorphisms, and a subobject containing every global element is the whole object.

**Problem.** In a constructively well-pointed topos, a statement of the internal logic holds exactly when it holds for all global elements. So the topos behaves like a category of sets.

**How the definition helps.** Each condition handles one logical step in an induction on formulas (our own). Strong generation detects subobjects, so truth for all global elements is internal truth, and noninitiality handles falsehood. Indecomposability handles disjunction, and projectivity supplies witnesses for existential statements.

**nLab:** [well-pointed topos](https://ncatlab.org/nlab/show/well-pointed+topos). It says: “To maintain this logical result in constructive mathematics (that is, without excluded middle in the metalogic), one must add the following requirements:”

**Sources:**

- [P. Freyd, Aspects of topoi, Bulletin of the Australian Mathematical Society 7 (1972) 1–76](https://doi.org/10.1017/S0004972700044828)
- [M. Shulman, Comparing material and structural set theories, Annals of Pure and Applied Logic 170 (2019) 465–504, arXiv:1808.05204](https://doi.org/10.1016/j.apal.2018.11.002)

### Models as functors make elementary embeddings exactly the natural transformations

**Remember:** A natural map respects every definable set, including each complement.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 03C07. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The model functor of a classical first-order model sends each formula in context to its solution set and each definable function to its interpretation. A natural transformation between two model functors gives a map on each solution set that commutes with every definable function, including the inclusions of a definable set and of its complement.

**Problem.** The natural transformations between two such model functors are exactly those induced by elementary embeddings of their models.

**How the definition helps.** Naturality along projections makes the maps act coordinatewise by one map on each sort (our own). Commuting with the inclusion of a solution set gives preservation of the formula, and commuting with the inclusion of its complement gives reflection, so the map is elementary. Conversely, an elementary embedding preserves each definable function’s graph, so it gives a natural transformation (our own).

**nLab:** [elementary embedding](https://ncatlab.org/nlab/show/elementary+embedding). It says: “Elementary embeddings are natural transformations between these functors.”

**Sources:** none listed. No primary source with a working link was found.

### Pretoposes are exactly the conceptually complete coherent categories

**Remember:** A pretopos already contains every sort that a model can see.

*Makes the theorem clean to state or prove.* MSC 03G30 (Categorical logic, topoi), 18E08, 03C40. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A pretopos is a coherent category that already contains the sorts a theory can build by cases or by quotients. Exactly: it has disjoint, pullback-stable finite coproducts, and every internal equivalence relation is the kernel pair of its quotient map.

**Problem.** Conceptual completeness (Makkai–Reyes): if an interpretation of coherent theories induces an equivalence of their categories of models, then the theories are bi-interpretable up to elimination of imaginaries.

**How the definition helps.** A theory and its pretopos completion have the same set-valued models, since the completion only adds coproduct and quotient sorts. The Makkai–Reyes theorem turns the equivalence on models into an equivalence of the completed pretoposes. That is bi-interpretability after adding those sorts.

**nLab:** [conceptual completeness](https://ncatlab.org/nlab/show/conceptual+completeness). It says: “the conceptual completeness theorem can be rephrased by saying that pretoposes are conceptually complete, thus characterizing pretoposes as the conceptually complete (coherent) categories.”

**Sources:**

- [M. Makkai, G. E. Reyes, First Order Categorical Logic, Lecture Notes in Math. 611, Springer (1977)](https://doi.org/10.1007/BFb0066201)

### Program tracking makes natural-number maps in the effective topos computable

**Remember:** On natural numbers, the tracking program simply computes the function.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 03D80. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A map between realized sets in the effective topos is a function that some program tracks: the program halts on every realizer (code) of each input and returns a realizer of the output. In the natural numbers object, the only realizer of the number n is n itself.

**Problem.** Each map from the natural numbers object to itself in the effective topos gives a total computable function on ordinary natural numbers.

**How the definition helps.** A tracker for a map f from the natural numbers object to itself halts on each n and returns f(n), so it computes f everywhere (our own). The work lies in the fact that maps between such realized sets are exactly the tracked functions (our own).

**nLab:** [effective topos](https://ncatlab.org/nlab/show/effective+topos). It says: “it is provable that every total function from natural numbers to natural numbers is recursive”

**Sources:**

- [J. M. E. Hyland, The effective topos, in A. S. Troelstra, D. van Dalen (eds.), The L. E. J. Brouwer Centenary Symposium, North-Holland (1982), 165–216](https://doi.org/10.1016/S0049-237X(09)70129-6)
