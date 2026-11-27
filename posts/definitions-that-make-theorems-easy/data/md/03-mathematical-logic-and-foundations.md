### False rows build conjunctive normal form

**Remember:** One clause rules out one false row.

*True by definition.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** A clause joins letters or their negations with OR. A conjunctive normal form joins clauses with AND. Its truth-table construction uses one clause for each false row.

**Problem.** Every propositional formula has an equivalent conjunctive normal form.

**How the definition helps.** Each clause rejects exactly its designated row, so their conjunction has the required truth table. In each clause, negate the letters that are true on its row and leave the others unchanged. This replaces repeated algebraic rewrites with a single construction. In our own convention, an empty conjunction is true and an empty clause is false.

**Wikipedia:** [Conjunctive normal form](https://en.wikipedia.org/wiki/Conjunctive_normal_form). It says: “A CNF equivalent of a formula can be derived from its truth table.”

**Paper or page:** [Existence of Conjunctive Normal Form of Statement](https://proofwiki.org/wiki/Existence_of_Conjunctive_Normal_Form_of_Statement). It says: “Any propositional formula can be expressed in conjunctive normal form (CNF).”

**Sources:** none listed. No primary source with a working link was found.

### Universal statements about S conflict only when S is nonempty

**Remember:** If there are no unicorns, all unicorns fly and no unicorn flies.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 1: early undergraduate.

**Definition.** In modern logic, 'all S are P' means ∀x (S(x) ⟹ P(x)), and 'no S are P' means ∀x (S(x) ⟹ ¬P(x)). Two statements are contrary when they cannot both be true. They are subcontrary when they cannot both be false.

**Problem.** The traditional square of opposition says that 'all S are P' and 'no S are P' are contrary. It says that 'some S are P' and 'some S are not P' are subcontrary. Under the modern reading, these laws hold exactly when something is S.

**How the definition helps.** The modern reading makes universal statements true when nothing is S, so the contrary law needs the extra assumption that S is not empty. ProofWiki proves that the two universal statements are contrary exactly when S is not vacuous. It proves the same condition for the two particular statements being subcontrary. The predicate-logic form shows the equivalence in one line. Our own remark: traditional logic assumed that every term applies to something, which is called existential import. Our own remark: with that assumption the whole square of opposition holds without exceptions.

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

### Measuring size by one-to-one correspondence settles Galileo's paradox

**Remember:** Pair them off: squares and integers match, so they are equally many.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Two sets have the same cardinality if there is a one-to-one correspondence between them. A set is smaller than another if it maps one-to-one into it, but no one-to-one correspondence between them exists.

**Problem.** Galileo noted that the squares are only some of the positive integers, yet each integer has its own square. He concluded that less, equal and greater do not apply to infinite collections.

**How the definition helps.** Taking one-to-one correspondence as the meaning of equal size makes Galileo's observation a theorem. The squares and the positive integers have the same cardinality. The paradox goes away, because for infinite sets a part can have the same size as the whole. Dedekind later used exactly this property to define infinite sets (our own). The definition also lets one prove that some infinite sets are strictly larger than others. An example is the real numbers compared with the integers (our own). What stays hard is the comparison of arbitrary sizes, which needs the axiom of choice (our own).

**Wikipedia:** [Galileo's paradox](https://en.wikipedia.org/wiki/Galileo%27s_paradox). It says: “it is possible to define comparisons amongst infinite sets in a meaningful way (by which definition the two sets, integers and squares, have "the same size"), and that by this definition some infinite sets are strictly larger than others.”

**Sources:**

- [Cantor, G. (1878). Ein Beitrag zur Mannigfaltigkeitslehre. Journal für die reine und angewandte Mathematik 84, 242–258.](https://doi.org/10.1515/crll.1878.84.242)

### Subsets keep their countable labels

**Remember:** A subset keeps the labels it already has.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Call a set countable if its elements can receive distinct natural number labels. An alternative is to list the elements using a function from the natural numbers that reaches each element.

**Problem.** Every subset of a countable set is countable, including the empty set.

**How the definition helps.** An injection on the whole set remains an injection on every subset. In our own comparison, a list indexed by all natural numbers cannot list the empty set. To recover the usual enumeration of an infinite subset, list its labels in increasing order.

**Wikipedia:** [Countable set](https://en.wikipedia.org/wiki/Countable_set). It says: “A subset of a countable set is countable.”

**Sources:** none listed. No primary source with a working link was found.

### Adding indicator functions modulo two makes symmetric difference associative

**Remember:** Membership adds modulo two, and that addition is associative.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 06E20. arXiv math.LO, math.CO. Level 1: early undergraduate.

**Definition.** The indicator function of a set takes the value 1 on the set and 0 elsewhere. For two subsets of a common set, define their symmetric difference by adding their indicator functions modulo two. This gives the usual set definition, (A ∖ B) ∪ (B ∖ A), because the sum is 1 exactly when one indicator is 1.

**Problem.** For any three subsets A, B and C of a common set, A Δ (B Δ C) = (A Δ B) Δ C.

**How the definition helps.** The indicator definition makes the two sides sums of the same three numbers modulo two at each point. Addition modulo two is associative, so the two sets have the same indicator function. With the set formula, one can instead check the eight possible membership patterns (our own). The comparison goes through the two possible indicator values for each set. This argument uses ordinary classical membership, where every point is either in or out.

**nLab:** [symmetric difference](https://ncatlab.org/nlab/show/symmetric+difference). It says: “The term symmetric difference, however, is usually used as the addition in a Boolean ring and so interpreted as an associative operation”

**Wikipedia:** [Symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference). It says: “the indicator function (denoted here by χ) of the symmetric difference, being the XOR (or addition mod 2) of the indicator functions of its two arguments”

**Paper or page:** [Symmetric Difference is Associative](https://proofwiki.org/wiki/Symmetric_Difference_is_Associative). It says: “Symmetric difference is associative”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence relations must state reflexivity, which symmetry and transitivity do not give

**Remember:** The empty relation is symmetric and transitive but relates nothing to itself.

*Rules out counterexamples.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 08A02. arXiv math.LO. Level 1: early undergraduate.

**Definition.** An equivalence relation on a set S is reflexive (x R x for every x), symmetric and transitive. The class of x is the set of all y with x R y.

**Problem.** Each element lies in its own equivalence class. So no class is empty and the classes cover S.

**How the definition helps.** Reflexivity puts x in its own class, and symmetry and transitivity cannot do this alone. A well-known false proof takes x R y, gets y R x by symmetry, and then x R x by transitivity. ProofWiki points out that this needs some y with x R y in the first place. ProofWiki uses the relation on {0, 1} that relates only 1 to 1. Our own example is the empty relation on {0, 1}: then the class of 0 is empty, and 0 lies in no class. With reflexivity in the definition, ProofWiki's result that no class is empty is immediate. The fact that two classes are equal or disjoint still uses symmetry and transitivity.

**Paper or page:** [Symmetric and Transitive therefore Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_therefore_Reflexive), [Symmetric and Transitive Relation is not necessarily Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_Relation_is_not_necessarily_Reflexive), [Equivalence Class is not Empty](https://proofwiki.org/wiki/Equivalence_Class_is_not_Empty). It says: “Unless it is the case that ∀x ∈ S: ∃y ∈ S: x ℛ y, it is not necessarily the case that also y ℛ x, and so the reasoning does not follow.”

**Sources:**

- [ProofWiki, Symmetric and Transitive therefore Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_therefore_Reflexive)
- [ProofWiki, Symmetric and Transitive Relation is not necessarily Reflexive](https://proofwiki.org/wiki/Symmetric_and_Transitive_Relation_is_not_necessarily_Reflexive)
- [ProofWiki, Equivalence Class is not Empty](https://proofwiki.org/wiki/Equivalence_Class_is_not_Empty)

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

**Definition.** An integer is defined as a class of pairs (x, y) of natural numbers, where the pair stands for x − y. Two pairs (x₁, y₁) and (x₂, y₂) are equivalent when x₁ + y₂ = x₂ + y₁. Addition is done pair by pair.

**Problem.** Addition of pairs gives a well-defined operation on the classes, and the result is a group that contains the natural numbers.

**How the definition helps.** The equivalence uses only addition, so no subtraction in ℕ is needed to define the integers. Associativity and commutativity of integer addition then follow straight from those laws in ℕ. The class of (0, y) is the inverse of the class of (y, 0), so inverses exist by construction; this is our own remark. The work moves into the check that addition does not depend on the chosen pairs.

**Paper or page:** [Integer Addition is Well-Defined](https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined), [Inverse Completion of Natural Numbers](https://proofwiki.org/wiki/Inverse_Completion_of_Natural_Numbers). It says: “(x₁, y₁) ⊠ (x₂, y₂) ⟺ x₁ + y₂ = x₂ + y₁”

**Sources:**

- [ProofWiki, Integer Addition is Well-Defined](https://proofwiki.org/wiki/Integer_Addition_is_Well-Defined)
- [ProofWiki, Inverse Completion of Natural Numbers](https://proofwiki.org/wiki/Inverse_Completion_of_Natural_Numbers)

### Kuratowski's definition reduces ordered pairs, and so relations, to sets

**Remember:** The first element is in both sets, and that records which came first.

*Makes the theorem clean to state or prove.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)). arXiv math.LO. Level 1: early undergraduate.

**Definition.** Kuratowski (1921) defined the ordered pair as (a, b) = {{a}, {a, b}}.

**Problem.** The characteristic property of ordered pairs says that (a, b) = (c, d) if and only if a = c and b = d. This property should be a theorem, not an extra axiom.

**How the definition helps.** With a set-theoretic definition, the axioms of set theory prove both the existence of pairs and the characteristic property. Bourbaki's first edition instead took the ordered pair as a primitive and assumed its characteristic property as an axiom. With pairs as sets, relations and functions are just sets of pairs. Wiener's 1914 definition was the first. Van Heijenoort says that it 'reduced the theory of relations to that of classes'. The shorter definition {a, {a, b}} also works, but its proof needs the axiom of regularity (every nonempty set has an element disjoint from it).

**Wikipedia:** [Ordered pair](https://en.wikipedia.org/wiki/Ordered_pair). It says: “This can be done in several ways and has the advantage that existence and the characteristic property can be proven from the axioms that define the set theory.”

**Sources:**

- [Kuratowski, C. (1921). Sur la notion de l'ordre dans la Théorie des Ensembles. Fundamenta Mathematicae 2, 161–171.](https://doi.org/10.4064/fm-2-1-161-171)

### Maps as relations make mⁿ count maps even between empty sets

**Remember:** One map leaves the empty set, and none enters it from a nonempty set.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 05A05. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** A mapping from X to Y is a relation R ⊆ X × Y. It relates each x in X to exactly one y in Y. When X = ∅, the only relation is the empty one, and it meets this condition vacuously.

**Problem.** The number of mappings from an n-element set to an m-element set is mⁿ. This should hold for all m, n ≥ 0, including the cases with empty sets.

**How the definition helps.** With mappings defined as relations, the cases with empty sets follow from the definition and need no convention. From ∅ to any set T there is exactly one map, the empty mapping. ProofWiki shows that the set of such maps has one element, which matches m⁰ = 1. ProofWiki also shows that a relation from a set S to ∅ is a mapping only when S is empty. This matches 0ⁿ = 0 for n ≥ 1. ProofWiki shows that the empty mapping is injective, and that it is a bijection when the codomain is also empty. Our own remark: so ∅ is the initial object of the category of sets, and the count follows by induction on n.

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

### Taking the empty intersection as the whole set keeps intersection order-reversing

**Remember:** Fewer sets to meet means a bigger intersection, and none gives everything.

*Makes the theorem clean to state or prove.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 03B10. arXiv math.LO. Level 1: early undergraduate.

**Definition.** Let 𝓕 be a family of subsets of a fixed set U. Its intersection ⋂𝓕 is the set of points of U that lie in every member of 𝓕. For the empty family, every point of U passes this test vacuously, so ⋂∅ = U.

**Problem.** If 𝓕 ⊆ 𝓖, then ⋂𝓖 ⊆ ⋂𝓕. This rule should hold for all families, the empty family included.

**How the definition helps.** Inside a fixed set U, the convention is what the definition gives vacuously. It is also the only value that keeps the rule true for 𝓕 = ∅. Since ∅ ⊆ 𝓖 for every 𝓖, the rule asks ⋂𝓖 ⊆ ⋂∅ for every 𝓖, and ⋂{U} = U. So ⋂∅ must contain U. Without a fixed U, the empty intersection would be the class of all sets. ProofWiki calls this 'a paradoxical result', because that class is not a set. So the convention needs the fixed set U, and then the rule has no exception.

**Paper or page:** [Intersection is Decreasing](https://proofwiki.org/wiki/Intersection_is_Decreasing), [Intersection of Empty Set](https://proofwiki.org/wiki/Intersection_of_Empty_Set). It says: “Then 𝓕 ⊆ 𝓖 ⟹ ⋂𝓖 ⊆ ⋂𝓕, where by convention ⋂∅ = U.”

**Sources:**

- [ProofWiki, Intersection is Decreasing](https://proofwiki.org/wiki/Intersection_is_Decreasing)
- [ProofWiki, Intersection of Empty Set](https://proofwiki.org/wiki/Intersection_of_Empty_Set)

### Defining the natural numbers as a closure makes induction true by definition

**Remember:** The smallest closed set lies inside every closed set, so induction holds.

*True by definition.* MSC 03F30 (First-order arithmetic and fragments), 03E20. arXiv math.LO. Level 1: early undergraduate.

**Definition.** Following Dedekind, a Dedekind algebra is a set N with an element o and an injective function s from N to N. The element o is not a value of s. Also N is the closure of o under s: the smallest set that contains o and is closed under s.

**Problem.** Arithmetical induction: any set that contains o and is closed under s on N contains all of N.

**How the definition helps.** N is the smallest set that contains o and is closed under s. A lemma in the text says this closure lies inside every such set. So induction is just the minimality clause of the definition. The work moves into existence. The text proves that a Dedekind algebra exists if a Dedekind infinite set exists. Such a set has an injection onto a proper subset of itself. That assumption is where the axiom of infinity enters (our own).

**Paper or page:** [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Sets Functions Relations: Infinite](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Let N, s, o comprise a Dedekind algebra. Then for any set X: if o ∈ X and (∀n ∈ N ∩ X) s(n) ∈ X, then N ⊆ X.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Brackets in the definition of formula make every formula parse uniquely

**Remember:** Every bracket closes once, so every formula reads one way only.

*Rules out counterexamples.* MSC 03B05 (Classical propositional logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** The Open Logic text defines formulas by rules. ⊥, ⊤ and the propositional variables are formulas. If B and C are formulas, so are ¬B, (B ∧ C), (B ∨ C), (B → C) and (B ↔︎ C). So each binary connective brings its own brackets.

**Problem.** Unique readability: every formula has exactly one parsing as one of these forms. This is what makes definitions by recursion on formulas, such as the truth value under a valuation, well defined.

**How the definition helps.** A count of left and right brackets shows that no proper initial segment of a formula is a formula (our own outline). Suppose (B ∧ C) were also (B′ ∨ C′). Then one of B and B′ is an initial segment of the other, so they are equal, and so are the rest (our own outline). Without brackets, p ∧ q ∨ r has two parsings (our own example). With p false and r true, (p ∧ q) ∨ r is true but p ∧ (q ∨ r) is false. The lambda calculus chapter proves unique readability for terms in the same way. Nothing deep stays hard (our own).

**Paper or page:** [Open Logic Project: Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Propositional Logic: Syntax And Semantics](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “No proper initial segment of a formula is a formula.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Valuations as points of a compact product space give propositional compactness

**Remember:** A formula tests only finitely many coordinates.

*True by definition.* MSC 03B05 (Classical propositional logic), 54B10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A valuation assigns true or false to each propositional variable. Treat the set of valuations as a product of two-point discrete spaces, one for each variable. A basic open set fixes the values of finitely many variables.

**Problem.** A set of propositional formulas has a satisfying valuation if every finite subset has one.

**How the definition helps.** The valuations that satisfy one formula form a closed set, so compactness of the product space finishes the proof, in our own argument. The set is closed because the formula uses only finitely many variables, in our own argument. Finite satisfiability says that every finite family of these closed sets has a common point, in our own argument. In a compact space, the whole family then has a common point, which is a valuation that satisfies all the formulas. Wikipedia states that propositional compactness follows from Tychonoff's theorem, which says that products of compact spaces are compact. So the work moves into Tychonoff's theorem for products of two-point spaces.

**Wikipedia:** [Compactness theorem](https://en.wikipedia.org/wiki/Compactness_theorem). It says: “The compactness theorem for the propositional calculus is a consequence of Tychonoff's theorem”

**Sources:** none listed. No primary source with a working link was found.

### Defining consequence by finite proofs makes compactness follow from completeness

**Remember:** A finite proof can use only finitely many premises.

*True by definition.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A sentence is a semantic consequence of some premises if it is true in every model of the premises. It is a proof-theoretic consequence if a formal proof derives it from the premises. A formal proof is a finite list of steps.

**Problem.** If a first-order sentence is a semantic consequence of a set of premises, it is a semantic consequence of some finite subset.

**How the definition helps.** A formal proof is finite, so a proof-theoretic consequence follows from finitely many premises by definition. The nLab proves compactness this way, with the completeness theorem and the finiteness of formal proofs. Completeness says that every semantic consequence has a formal proof. That proof uses only a finite subset of the premises. Soundness then makes the sentence a semantic consequence of that subset, in our own wording of the last step. So the real work is in the completeness theorem.

**nLab:** [compactness theorem](https://ncatlab.org/nlab/show/compactness+theorem). It says: “the essential finitude of the notion of formal proof”

**Sources:** none listed. No primary source with a working link was found.

### Henkin witnesses make the proof of the completeness theorem simple

**Remember:** In a Henkin theory, everything that exists has a name.

*Makes the theorem clean to state or prove.* MSC 03B10 (Classical first-order logic), 03C30. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Henkin theory has a witness constant c(ψ) for each formula ψ(x). It also has the axiom ∃x ψ(x) → ψ(c(ψ)): if something satisfies ψ, then c(ψ) satisfies ψ. So every existential statement has a named witness.

**Problem.** Gödel's completeness theorem says that every sentence that is true in all models of a theory T can be proved from T. Equivalently, every consistent theory has a model.

**How the definition helps.** Witnesses let you build a model out of the names in the language itself. Henkin's proof has three steps. First add witnesses, then extend to a complete consistent theory (one that proves or refutes every sentence) by Lindenbaum's lemma. Then build a model whose elements are the closed terms (terms with no variables). The witness axioms make this term model satisfy every existential statement that the theory proves, so the model satisfies the theory. Henkin's proof replaced Gödel's 1929 proof in modern textbooks. For uncountable languages, the step to a complete extension needs a form of the axiom of choice (our own remark).

**Wikipedia:** [Gödel's completeness theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_completeness_theorem). It says: “It was then simplified when Leon Henkin observed in his Ph.D. thesis that the hard part of the proof can be presented as the Model Existence Theorem (published in 1949).”

**Sources:**

- [Henkin, L. (1949). The completeness of the first-order functional calculus. Journal of Symbolic Logic 14, 159–166.](https://doi.org/10.2307/2267044)

### Nonempty domains keep the classical laws of logic valid

**Remember:** Classical logic assumes that at least one thing exists.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic), 03B60. arXiv math.LO. Level 2: later undergraduate.

**Definition.** In standard first-order logic, every structure must have a nonempty domain, the set that the variables range over. Logics that also allow the empty domain are called inclusive logics. They are a kind of free logic.

**Problem.** Some laws should be valid: ∀x φ → ∃x φ, ∃x (x = x), and the rule that moves a quantifier past a formula. That rule gives prenex form, with all quantifiers at the front.

**How the definition helps.** Banning the empty domain makes these laws valid, because each one needs some individual to exist. In the empty domain every sentence ∀x φ is true and every sentence ∃x φ is false, so ∀x φ → ∃x φ fails. The equivalence of (∀x φ) ∧ ψ with ∀x (φ ∧ ψ), for x not free in ψ, also needs at least one individual. So prenex normal form depends on the convention. Free logics by Hailperin, Quine and others drop the convention and pay with a more careful proof system (our own remark on the cost).

**Wikipedia:** [Empty domain](https://en.wikipedia.org/wiki/Empty_domain), [Free logic](https://en.wikipedia.org/wiki/Free_logic), [Prenex normal form](https://en.wikipedia.org/wiki/Prenex_normal_form). It says: “In traditional and classical logic, domains are restrictedly non-empty in order that certain theorems be valid.”

**Sources:**

- [Quine, W. V. (1951). Mathematical Logic, revised edition. Harvard University Press.](https://doi.org/10.4159/9780674042469)
- [Hailperin, T. (1957). A theory of restricted quantification I. Journal of Symbolic Logic 22, 19–35.](https://doi.org/10.2307/2964055)

### Kripke's implication clause makes truth persist in intuitionistic models

**Remember:** Implication looks at every future world, so what is known stays known.

*Makes the theorem clean to state or prove.* MSC 03B20 (Subsystems of classical logic (including intuitionistic logic)), 03F55. arXiv math.LO. Level 2: later undergraduate.

**Definition.** An intuitionistic Kripke model is a preordered set of worlds, ordered by w ≤ u, with a forcing relation ⊩. Atoms forced at w stay forced at every u ≥ w. A world w forces A → B if every u ≥ w that forces A also forces B, including w itself.

**Problem.** Intuitionistic logic is sound and complete for Kripke models. Excluded middle, A ∨ ¬A, must fail in some model.

**How the definition helps.** Because → and ¬ quantify over all later worlds, persistence holds for every formula by induction, and soundness follows. Our own example: take two worlds w ≤ u, with p true only at u. Then w forces neither p nor ¬p, so excluded middle fails. The completeness proof, with models built from prime theories, is the remaining work (our own).

**Wikipedia:** [Kripke semantics](https://en.wikipedia.org/wiki/Kripke_semantics). It says: “Intuitively, the additional requirement for w ⊩ A → B is to ensure the monotonicity even for compound propositions, i.e., for any proposition A, if w ≤ u and w ⊩ A, then u ⊩ A.”

**Sources:**

- [Kripke, S. A. (1965). Semantical analysis of intuitionistic logic I. In Formal Systems and Recursive Functions, Studies in Logic 40, 92–130.](https://doi.org/10.1016/S0049-237X(08)71685-9)

### Prime theories as worlds make the canonical intuitionistic model respect disjunction

**Remember:** Kripke disjunction needs a witness, so the worlds must be prime.

*True by definition.* MSC 03B20 (Subsystems of classical logic (including intuitionistic logic)), 03F55. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Kripke model for intuitionistic logic has worlds ordered by an accessibility relation, and true atoms stay true at later worlds. A world makes B ∨ C true exactly when it makes B true or makes C true. A set of formulas is prime if it is consistent and contains every formula it proves. It must also contain B or C whenever it proves B ∨ C.

**Problem.** Completeness of intuitionistic logic for Kripke models: if Γ does not prove A, some model and world make Γ true and A false. The key step is the truth lemma. In the model built from prime sets, a formula is true at a world exactly when that world's set proves it.

**How the definition helps.** Primeness is exactly the condition that the disjunction case of the truth lemma needs (our own). The truth lemma must match the Kripke clause for B ∨ C. So each world must contain B or C whenever it proves B ∨ C (our own). Maximal consistent sets would not work (our own argument). Each one contains A or ¬A for every A, so a model built only from them refutes no classical law. Lindenbaum's lemma, as stated in the text, gives a prime extension that still does not prove A. What stays hard is the implication clause, which needs prime extensions of each world's theory (our own).

**Paper or page:** [Open Logic Project: Intuitionistic Logic: Soundness Completeness](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Intuitionistic Logic: Soundness Completeness](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If Γ ⊬ A, there is a Γ\* ⊇ Γ such that Γ\* is prime and Γ\* ⊬ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Church numerals express addition and multiplication by composing iterations

**Remember:** Apply the same function in succession to add, or nest iterations to multiply.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO. Level 2: later undergraduate.

**Definition.** The Church numeral for n is λf x. f(f(⋯(f x))), with n applications of f. Here λf x means a function with inputs f and x. A Scott numeral instead exposes the predecessor when its input is a successor.

**Problem.** Lambda calculus can compute the Church numeral for the sum or product of two input numerals.

**How the definition helps.** Church numerals build in the iteration that arithmetic needs. The term λm n f x. m f (n f x) runs f first n times, then m more times (our own). The term λm n f x. m (n f) x repeats the n-fold iterate m times. A construction with Scott numerals must instead supply the iteration (our own). The cost of the Church encoding appears in the predecessor, which the numeral does not expose directly (our own).

**Wikipedia:** [Mogensen–Scott encoding](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding), [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “Church numerals, on the other hand, already embody the primitive recursion and perform the folding / looping on their own”

**Paper or page:** [Open Logic Project: Lambda Calculus: Lambda Definability](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Multiplication is lambda definable by the term Mult ≡ λab. λfx. a (b f) x”

**Sources:** none listed. No primary source with a working link was found.

### Church numerals make a product m blocks of n applications

**Remember:** Repeat m times a step that itself repeats n times.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus). arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** Represent n by the operation that applies a function from a type to itself n times. Multiply two encoded numbers by using one iteration as the step for the other. The usual natural numbers instead start with zero and successor.

**Problem.** The Church product of m and n applies a function in m blocks of n applications.

**How the definition helps.** Church multiplication is defined as λf. m (n f), so the block structure is the definition itself. Our own comparison must still show that this is the numeral for m × n. Wikipedia names the law it needs: m blocks of n applications equal m × n applications. That law is proved by induction on m. Ordinary recursive multiplication needs the same induction to describe repeated application.

**Wikipedia:** [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “The higher-order function that represents natural number n is a function that maps any function f to its n-fold composition.”

**Sources:** none listed. No primary source with a working link was found.

### Church-encoded lists make the fold of an append hold by definition

**Remember:** The left list starts where the right list finishes.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, math.LO. Level 2: later undergraduate.

**Definition.** A Church-encoded list is its own right fold, a function that takes a combining operation c and an initial result n. Append l and r as λc n. l c (r c n), so the right list's fold becomes the left list's initial result. Ordinary lists instead use empty and prepend constructors.

**Problem.** Folding an appended list equals folding the left list with the folded right list as its initial result.

**How the definition helps.** Under this encoding, folding a list means applying it, so the equation is the definition of append. Wikipedia gives this append and says that a Church list is its own fold. For ordinary lists, our own comparison proves the equation by induction on the left list. That same induction shows that the encoding sends ordinary append to Church append.

**Wikipedia:** [Church encoding](https://en.wikipedia.org/wiki/Church_encoding). It says: “Since Church encoded list is its own folding function, folding it just means applying that function to the supplied arguments.”

**Sources:** none listed. No primary source with a working link was found.

### Scott numerals give the predecessor in a fixed number of reductions

**Remember:** The successor case receives the predecessor itself.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 2: later undergraduate.

**Definition.** A Scott numeral supplies one case for zero and one for a successor. Zero is λz s. z, and the successor of n is λz s. s n. The successor case receives n directly. Church numerals instead represent a number by that many iterations of a function.

**Problem.** For an input already in Scott numeral form, the predecessor takes at most four function-application reductions to return the encoded result.

**How the definition helps.** The Scott definition gives the successor case the predecessor itself, so no traversal is needed. Use λn. n Z (λm. m), with Z the Scott zero, to send zero to zero (our own). Applying this term takes at most four reductions if evaluation stops at the returned numeral (our own). This counts reductions, not the cost of copying a large expression (our own). In the usual Church predecessor construction, a pair of successive values is advanced once per iteration (our own). Scott numerals move the work to operations such as addition, which must supply recursion explicitly (our own).

**Wikipedia:** [Mogensen–Scott encoding](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding). It says: “The key difference is that Scott's handler's argument is the number's own predecessor Scott numeral, unprocessed, whereas Church's folding / looping function's argument is the result of folding / looping over its predecessor.”

**Sources:** none listed. No primary source with a working link was found.

### Working up to renaming of bound variables makes substitution always defined

**Remember:** Rename bound variables first, and substitution never captures.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** In the Open Logic text, putting a term R for the variable y in a lambda term M is defined only without capture. Capture means that a free variable of R would be bound by a λ inside M. Two terms are α-equivalent when they differ only by renaming bound variables, as λx.x and λz.z do.

**Problem.** For any M, R and y, some α-equivalent M′ and R′ make the substitution defined, and any two such results are α-equivalent. So substitution is a total operation on α-equivalence classes.

**How the definition helps.** Renaming the bound variables of M away from the free variables of R removes every capture (our own). A lemma in the text shows that α-equivalent inputs give α-equivalent results, so the choice of renaming does not matter. Capture is the bad case: putting x for y in λx.y, without renaming, would give λx.x, the identity, and change the meaning (our own example). With α-classes, β-reduction, the step that applies a function to its argument, needs no side conditions (our own). What stays hard is that later definitions and proofs, such as the Church–Rosser theorem, must be checked to respect α-equivalence (our own).

**Paper or page:** [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Lambda Calculus: Syntax](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “For any M, R, and y, there exists a pair of M′ and R′ such that M′ ≡α M, R ≡α R′ and M′\[R′/y\] is defined.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Filtrations through subformulas give modal logic K the finite model property

**Remember:** Merge worlds that the subformulas cannot tell apart; the model becomes finite.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A Kripke model has a set W of worlds, an accessibility relation, and a valuation that says which variables hold at each world. For a set Γ of formulas closed under subformulas, two worlds are equivalent when they make the same formulas of Γ true. A filtration is a model on these classes in which two classes are related when some of their worlds are related. It may relate two classes only when each formula □A of Γ true at the first has A true at the second.

**Problem.** The basic modal logic K has the finite model property: every satisfiable formula has a finite model. The Open Logic text shows the same for S5.

**How the definition helps.** Because Γ is closed under subformulas, an induction on formulas shows that the classes decide the truth of every formula in Γ (our own outline). If Γ is finite, the text shows that every filtration through Γ is finite. Taking Γ as the n subformulas of one formula gives at most 2ⁿ worlds (our own count). With a finite axiom system, the finite model property gives a decision procedure for K (our own). What stays hard is that a filtration need not keep the properties of the accessibility relation (our own). The text shows that the coarsest filtration keeps symmetry, transitivity and the euclidean property when Γ is modally closed.

**Paper or page:** [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf), [Open Logic Project: Normal Modal Logic: Filtrations](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If M\* is a filtration of M through Γ, then for every A ∈ Γ and w ∈ W, we have M, w ⊩ A if and only if M\*, \[w\] ⊩ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### The canonical model makes completeness of modal logic K immediate

**Remember:** Let the worlds be the consistent theories, and truth is membership.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A normal modal logic L is a set of modal formulas that contains the axioms of K and is closed under its rules. The canonical model of L has as worlds the maximal L-consistent sets of formulas, that is, consistent sets that cannot grow. World w sees world v when every A with □A in w is in v. A propositional variable is true at w when it belongs to w.

**Problem.** Completeness: every formula valid in all Kripke frames is provable in K. A Kripke frame is a set of worlds with an accessibility relation, and K is the smallest normal modal logic.

**How the definition helps.** The accessibility relation is chosen so that the truth lemma holds: a formula is true at a world exactly when it belongs to that world. The truth lemma is a short induction on formulas. If K does not prove φ, then {¬φ} extends to a maximal consistent set, by Lindenbaum's lemma, and φ fails at that world. For other logics the method can fail. The frame of the canonical model may lack the properties, such as transitivity, that the logic needs. The provability logic GL is an example (our own remark). There one uses other methods, such as filtration, which shrinks a model to a finite one.

**Wikipedia:** [Kripke semantics](https://en.wikipedia.org/wiki/Kripke_semantics). It says: “The main application of canonical models are completeness proofs. Properties of the canonical model of K immediately imply completeness of K with respect to the class of all Kripke frames.”

**Sources:**

- [D. Makinson, On some completeness theorems in modal logic, Zeitschrift für mathematische Logik und Grundlagen der Mathematik 12 (1966) 379–384](https://doi.org/10.1002/malq.19660120131)
- [Kripke, S. A. (1963). Semantical analysis of modal logic I. Normal modal propositional calculi. Zeitschrift für mathematische Logik und Grundlagen der Mathematik 9, 67–96.](https://doi.org/10.1002/malq.19630090502)

### Tarski defines satisfaction for all formulas to handle free variables

**Remember:** Truth is satisfaction for formulas with no free variables.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Tarski defines when a variable assignment s satisfies a formula φ in a structure M, written M, s ⊨ φ. The definition is by recursion on φ. A sentence (a formula with no free variables) is true if every assignment satisfies it; equivalently, if some assignment satisfies it.

**Problem.** Give a recursive, formally correct definition of truth for a language with quantifiers, one that meets Convention T (the requirement that the definition implies each sentence of the form "'P' is true if and only if P").

**How the definition helps.** Satisfaction is defined for all formulas, so the recursion can pass through every quantifier step, and truth comes out as a special case. A recursion on sentences alone fails. If you remove the quantifier from ∀x φ(x), you get φ(x), which has a free variable and no truth value. What stays hard is Tarski's undefinability theorem (our own remark). It says that no formula of a language defines truth for that same language, so the truth predicate must live in a metalanguage (a separate language used to talk about the first one).

**Wikipedia:** [Semantic theory of truth](https://en.wikipedia.org/wiki/Semantic_theory_of_truth). It says: “Removing a quantifier from a sentence can produce a free variable, which is not a sentence and thus cannot have a truth value.”

**Sources:** none listed. No primary source with a working link was found.

### Countability relative to a model removes Skolem's paradox

**Remember:** Countable means countable by a bijection that the model has.

*True by definition.* MSC 03C62 (Models of arithmetic and set theory), 03C15. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A set is countable inside a model M of set theory if M contains a bijection between the set and the natural numbers. So countability depends on the model.

**Problem.** Reconcile two theorems. The Löwenheim–Skolem theorem says that ZFC has a countable model, if it has a model at all. Cantor's theorem says that ZFC proves that uncountable sets exist.

**How the definition helps.** When you read countability inside the model, the two theorems do not contradict each other. Take a set that a countable model calls uncountable. From outside, it has only countably many elements. Inside the model it is uncountable, because the model contains no bijection between it and ω, the set of natural numbers. Skolem made this point in 1922. Countable transitive models later became a standard tool for forcing. A transitive model contains every element of each of its members, and forcing is Cohen's method to build new models of set theory.

**Wikipedia:** [Skolem's paradox](https://en.wikipedia.org/wiki/Skolem%27s_paradox). It says: “He explained that the countability of a set is not absolute, but relative to the model in which the cardinality is measured.”

**Sources:** none listed. No primary source with a working link was found.

### A formal definition of algorithm answers the Entscheidungsproblem

**Remember:** To prove that no algorithm exists, first say what an algorithm is.

*Makes the theorem clean to state or prove.* MSC 03D10 (Turing machines and related notions), 03D35, 03B10. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** An algorithm is defined as a Turing machine. An equivalent definition uses the functions that you can define in Church's λ-calculus.

**Problem.** Hilbert and Ackermann asked the Entscheidungsproblem (German for 'decision problem'). Is there an algorithm that decides whether a first-order statement is universally valid, that is, true in every interpretation?

**How the definition helps.** A precise definition of algorithm makes it possible to prove a statement about all algorithms. A positive answer needs only one algorithm. A negative answer is a statement about all algorithms, so it needs a precise definition. Church (1935–36) and Turing (1936) gave such definitions. Turing showed that the two definitions are equivalent, and both men proved that no algorithm decides validity. The claim that these definitions capture every intuitive algorithm is the Church–Turing thesis, and it is not a theorem.

**Wikipedia:** [Entscheidungsproblem](https://en.wikipedia.org/wiki/Entscheidungsproblem). It says: “Before the question could be answered, the notion of "algorithm" had to be formally defined.”

**Sources:**

- [Turing, A. M. (1936/1937). On computable numbers, with an application to the Entscheidungsproblem. Proc. London Math. Soc. (2) 42, 230–265.](https://doi.org/10.1112/plms/s2-42.1.230)
- [Church, A. (1936). An unsolvable problem of elementary number theory. American Journal of Mathematics 58(2), 345–363.](https://doi.org/10.2307/2371045)

### A precise definition of computability lets you state unsolvability

**Remember:** To prove that no algorithm exists, you must first say what an algorithm is.

*Makes the theorem clean to state or prove.* MSC 03D10 (Turing machines and related notions), 03D35, 03B10. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** Church and Turing each proposed a precise definition of an 'effectively calculable' function. Church used λ-definability and general recursion. Turing used Turing machines. The three definitions turned out to be equivalent.

**Problem.** Hilbert's Entscheidungsproblem: is there an effective method that decides whether a first-order formula is valid?

**How the definition helps.** A precise definition turns 'no method exists' into a mathematical statement. A positive answer needs only an algorithm, but a negative answer needs a statement about every possible method. Rosser wrote in 1939 that such proofs presuppose a precise definition of 'effective'. With the formal definition, Church and Turing proved in 1936 that no such method exists. The Church–Turing thesis says that the formal notion captures the intuitive one, and it is not a theorem. Post warned that hiding it under a definition 'blinds us to the need of its continual verification'.

**Wikipedia:** [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis). It says: “Clearly the existence of CC and RC \[meaning Church's and Rosser's proofs of the statement that there is no effective method for deciding truth\] presupposes a precise definition of 'effective'.”

**Sources:**

- [Church, A. (1936). An unsolvable problem of elementary number theory. American Journal of Mathematics 58, 345–363.](https://doi.org/10.2307/2371045)
- [Turing, A. M. (1937). On computable numbers, with an application to the Entscheidungsproblem. Proceedings of the London Mathematical Society (2) 42, 230–265.](https://doi.org/10.1112/plms/s2-42.1.230)

### Partial functions escape the diagonal argument, so all programs can be listed

**Remember:** Let programs run forever, and you can list all programs.

*Makes the theorem clean to state or prove.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D45. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A partial recursive (μ-recursive) function is built like a primitive recursive function, with one more operation. That operation is the unbounded search μ, which looks for the least input that makes a function zero and may never stop. So the function may be undefined at some inputs.

**Problem.** We want one effective list, a universal function, that contains every computable function.

**How the definition helps.** A partial function can be undefined exactly where the diagonal argument needs a value, so the argument gives no contradiction. Any effective list f₀, f₁, f₂, … of total functions (functions defined at every input) misses the diagonal function g(n) = fₙ(n) + 1. This is how one shows that the primitive recursive functions miss some total computable functions, such as Ackermann's function. For partial functions, g is undefined exactly where fₙ(n) is undefined. If g is the entry fₑ, then fₑ(e) is simply undefined, so there is no contradiction, and the Turing machine codes list all partial computable functions. What remains hard is the price: one cannot decide which entries of the list are total (the halting problem).

**Wikipedia:** [Primitive recursive function](https://en.wikipedia.org/wiki/Primitive_recursive_function). It says: “Note however that the partial computable functions (those that need not be defined for all arguments) can be explicitly enumerated, for instance by enumerating Turing machine encodings.”

**Sources:**

- [Ackermann, W. (1928). Zum Hilbertschen Aufbau der reellen Zahlen. Mathematische Annalen. (The counterexample: a total computable function that is not primitive recursive.)](https://doi.org/10.1007/BF01459088)

### The recursion theorem fixes the computed function, not the program number

**Remember:** A fixed point is a program that does the same thing as its transform.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D45. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** Programs are numbered by indices. A fixed point of a function F on indices is an index e such that the programs e and F(e) compute the same partial function. This can be true even if e ≠ F(e).

**Problem.** Every total computable transformation of programs has a fixed point. This is Rogers's theorem, a form of Kleene's second recursion theorem.

**How the definition helps.** Measuring 'fixed' by the function computed makes the theorem true for every total computable F. Many total computable F have no fixed point with e = F(e), for example F(e) = e + 1. The definition compares partial functions with ≃. It means that both sides are undefined, or both are defined and equal. The short proof is a version of the Y combinator for partial functions. The Y combinator is the standard λ-calculus term that gives fixed points. The theorem gives quines (programs that print their own text) and other self-referential programs. The view of the fixed point as a choice of definition is our own.

**Wikipedia:** [Kleene's recursion theorem](https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem). It says: “Note that the comparison of in- and outputs here is not in terms of numerical values, but in terms of their associated partial recursive functions.”

**Sources:**

- [Kleene, S. C. (1938). On notation for ordinal numbers. Journal of Symbolic Logic 3, 150–155.](https://doi.org/10.2307/2267778)

### Defining enumerable sets as domains removes the empty-set exception

**Remember:** Every set where some program halts is enumerable, the empty set included.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A set S of natural numbers is computably enumerable if some partial computable function is defined exactly on S. An older definition says S is the range of a total computable function, or S is empty.

**Problem.** The intersection of two computably enumerable sets is computably enumerable. A set is computable if and only if it and its complement are computably enumerable.

**How the definition helps.** With the domain definition, both proofs run programs side by side and need no special case for the empty set. For an intersection, run both programs on n and halt when both halt (our own). With the range definition, an empty intersection would need a separate clause. The range of a total function is never empty, which forces the clause 'or empty'. The page says the domain definition is preferred because it extends better to α-recursion theory. The proof that the definitions agree, by running all computations in parallel, is the remaining work.

**Wikipedia:** [Computably enumerable set](https://en.wikipedia.org/wiki/Computably_enumerable_set). It says: “The definition of a computably enumerable set as the domain of a partial function, rather than the range of a total computable function, is common in contemporary texts.”

**Sources:**

- [Post, E. L. (1944). Recursively enumerable sets of positive integers and their decision problems. Bulletin of the American Mathematical Society 50, 284–316.](https://doi.org/10.1090/S0002-9904-1944-08111-1)

### Halting domains preserve computable enumerability under intersections and computable preimages

**Remember:** Run both programs in order and halt only if both finish.

*True by definition. Confidence: medium.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A set of natural numbers is computably enumerable if it is the domain of a partial computable function. This is the set of inputs on which some program halts. The listing definition takes the set of outputs of a partial computable function instead.

**Problem.** The intersection of two computably enumerable sets is computably enumerable. The preimage of a computably enumerable set under any total computable function is also computably enumerable.

**How the definition helps.** The domain definition turns both claims into running one program after another. For the intersection, run both membership programs on the same input and halt after both finish. For a preimage, first compute the function value and then run the membership program on it. This account of the proofs is our own. With the listing definition, one instead runs both listings in alternating steps and outputs numbers once they appear on both lists. The comparison theorem moves that scheduling work to the proof that the domains themselves can be listed.

**Paper or page:** [Computability: Computability Theory, Theorem 1.1](https://builds.openlogicproject.org/open-logic-complete.pdf), [Computability: Computability Theory, Theorem 1.1](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “Suppose A and B are computably enumerable. Then so are A ∩ B and A ∪ B.”

**Sources:** none listed. No primary source with a working link was found.

### Rice's theorem needs properties that are semantic and nontrivial

**Remember:** Rice's theorem is about what a program does, not how it is written.

*Rules out counterexamples.* MSC 03D35 (Undecidability and degrees of sets of sentences), 03D20. arXiv math.LO, cs.LO. Level 2: later undergraduate.

**Definition.** A property of programs is semantic (or extensional) if it depends only on the partial function that the program computes. The function is partial because the program may run forever on some inputs. A property is nontrivial if some programs have it and some do not.

**Problem.** Rice's theorem: every nontrivial semantic property of programs is undecidable.

**How the definition helps.** Each condition removes a kind of property that is easy to decide. Syntactic properties, such as 'contains an if-then-else statement', are easy to decide. Trivial properties, which hold for all programs or for none, are also easy to decide. When both are excluded, a reduction from the halting problem works for every remaining property. The theorem does not stop static analysis that is sound but incomplete (it never accepts a bad program but may reject a good one), such as type systems. These decide stronger syntactic properties.

**Wikipedia:** [Rice's theorem](https://en.wikipedia.org/wiki/Rice%27s_theorem). It says: “A semantic property is one about the program's behavior (for instance, "does the program terminate for all inputs?"), unlike a syntactic property”

**Sources:**

- [Rice, H. G. (1953). Classes of recursively enumerable sets and their decision problems. Transactions of the American Mathematical Society 74, 358–366.](https://doi.org/10.1090/s0002-9947-1953-0053041-6)

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

**Definition.** Define a + b as the size of a disjoint union and ab as the size of a Cartesian product. A disjoint union tags each element with the set it came from. For natural numbers, the alternative defines + and × by recursion from the successor map, as in Peano arithmetic.

**Problem.** For all cardinals a, b and c, a(b + c) = ab + ac.

**How the definition helps.** With sets, the law needs only one bijection, from A × (B ⊔ C) to (A × B) ⊔ (A × C) (our own). It sends a pair (x, y) to the product that matches the tag of y (our own). Peano recursion proves the law for natural numbers by induction, using earlier laws of addition (our own). The set definition also covers infinite cardinals at no extra cost (our own). The work moves to checking that bijections between representatives give bijections between the sums and products (our own).

**Paper or page:** [Cardinal Product Distributes over Cardinal Sum](https://proofwiki.org/wiki/Cardinal_Product_Distributes_over_Cardinal_Sum). It says: “Let a, b and c be cardinals. Then: a(b + c) = ab + ac”

**Sources:**

- [Georg Cantor, Beiträge zur Begründung der transfiniten Mengenlehre (1895)](https://doi.org/10.1007/bf02124929)

### Dedekind's definition of infinite needs no natural numbers

**Remember:** Infinite means you can remove something and still have the same size.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A set is Dedekind-infinite if it is in one-to-one correspondence with a proper subset of itself. For example, the natural numbers correspond to the even numbers. A set is Dedekind-finite if this is not possible.

**Problem.** Dedekind wanted to construct the natural numbers from sets and prove induction for them. A definition of infinite that uses the natural numbers would be circular.

**How the definition helps.** The definition talks only about sets and maps, so it can define the natural numbers without circularity. Dedekind did this in his 1888 essay (our own). A Dedekind-infinite set contains a copy of the natural numbers, an infinite sequence without repeats. The cost is a new theorem: that Dedekind-infinite is the same as not finite. This needs a weak form of the axiom of choice, strictly weaker than countable choice. There are models of ZF, set theory without choice, with infinite sets that are Dedekind-finite. Most nineteenth-century mathematicians assumed the two notions agree.

**Wikipedia:** [Dedekind-infinite set](https://en.wikipedia.org/wiki/Dedekind-infinite_set). It says: “It is notable that this definition was the first definition of "infinite" that did not rely on the definition of the natural numbers”

**Sources:**

- [Dedekind, R. (1888). Was sind und was sollen die Zahlen? Vieweg, Braunschweig. Reprint, 1961.](https://doi.org/10.1007/978-3-663-02788-1)

### Defining cardinals as initial ordinals makes them comparable sets

**Remember:** A cardinal is the first ordinal of its size.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Assume the axiom of choice. The cardinal number of a set X is the least ordinal that is in bijection with X, called its initial ordinal. The infinite cardinals are the initial ordinals ω₀, ω₁, …, written ℵ₀, ℵ₁, ….

**Problem.** Cardinal numbers should be actual sets, and any two of them should be comparable.

**How the definition helps.** The definition makes each cardinal an ordinal, so it is a set, and the ordinal order compares any two cardinals (our own remark). The Frege–Russell cardinal of X is the class of all sets equinumerous with X (in bijection with X). In ZFC this is a proper class (a collection too large to be a set) when X is nonempty, but the least ordinal is a set. The article says that without choice, some cardinals are incomparable with some alephs, by Hartogs's theorem. The definition needs the axiom of choice, because a set without a well-order has no initial ordinal. Cardinal arithmetic and ordinal arithmetic must then be kept apart: ℵ₀² = ℵ₀ but ω² &gt; ω.

**Wikipedia:** [Cardinal number](https://en.wikipedia.org/wiki/Cardinal_number), [Ordinal number](https://en.wikipedia.org/wiki/Ordinal_number). It says: “The most commonly used (strong) cardinal assignment, which relies on the axiom of choice, is the von Neumann cardinal assignment”

**Sources:** none listed. No primary source with a working link was found.

### Finite-support functions make an ordinal power of a sum a product

**Remember:** The later exponent block is compared first, then the earlier block.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** For ordinals α and β, take the functions from β to α that are zero at all but finitely many places. Compare two such functions at the largest place where they differ. The order type of this set is α to the power β. The usual alternative defines the power by transfinite recursion on β.

**Problem.** If α &gt; 0, then α to the power β + γ equals α to the power β times α to the power γ.

**How the definition helps.** With functions, the law is a bijection that splits each function at β (our own). A function on β + γ is a pair of finite-support functions, one on β and one on γ (our own). The part on γ holds the larger places, so it is compared first (our own). That is the order of the ordinal product, which compares the second factor first (our own). The recursive definition needs transfinite induction on γ instead (our own). The work moves to proving that this order is a well order and satisfies the recursion (our own).

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “This set is ordered lexicographically with the least significant position first”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero coefficients and decreasing exponents make Cantor normal form unique

**Remember:** No zero coefficients and no repeated powers, so each ordinal has one form.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** The Cantor normal form writes an ordinal α as a finite sum of terms. Each term is ω to the power β times c, where c is a nonzero natural number. The exponents β strictly decrease from left to right. The ordinal 0 is the empty sum.

**Problem.** Every ordinal has exactly one Cantor normal form. Two ordinals in normal form can be compared term by term, like numbers written in a base.

**How the definition helps.** The two conditions remove every way to write the same ordinal twice, so the form behaves like a positional numeral. Without them, ω·1 + ω·1 and ω·2 would be two forms of the same ordinal (our own). Also, a term with coefficient 0 could be added anywhere (our own). With the conditions, two forms are compared lexicographically: first exponents, then first coefficients, and so on. The proof of Goodstein's theorem uses this form (our own). What stays limited is that the form does not reduce every ordinal to smaller ones. At ε₀, the least ordinal equal to ω to its own power, the first exponent is the ordinal itself.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “This decomposition of α is called the Cantor normal form of α, and can be considered the base-ω positional numeral system.”

**Sources:**

- [Cantor, G. (1897). Beiträge zur Begründung der transfiniten Mengenlehre (Zweiter Artikel). Mathematische Annalen 49, 207–246.](https://doi.org/10.1007/BF01444205)

### Ordinal powers need finite support, since infinite lexicographic products fail

**Remember:** Ordinal powers use finitely many nonzero places, compared from the top.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 06A05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The lexicographic order compares two families at the least index where they differ, using the order of that factor. Cantor's ordinal power αᵝ uses only the functions from β to α with finitely many nonzero values. It compares two such functions at the greatest index where they differ.

**Problem.** For infinitely many well-ordered factors, the lexicographic order can have an infinite descending chain. So the ordinal power αᵝ needs a different definition from the full product.

**How the definition helps.** Finite support and comparison at the largest differing index remove the infinite descending chains. ProofWiki proves that the order on a pair of well-ordered sets is a well-order, and that the case of a family fails. Our own example: with infinitely many factors {0, 1}, let eₙ be 1 at place n and 0 elsewhere. Comparing at the least differing place gives e₀ &gt; e₁ &gt; e₂ &gt; …, which never ends. Our own remark: with finite support, any two functions differ at only finitely many places, so a greatest differing place exists. A short induction then shows that the order is a well-order, so αᵝ is an ordinal. That it agrees with the recursive definition of ordinal powers is a separate theorem.

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

**Definition.** Define α + β as the order type of a copy of α followed by a copy of β. A well order is a total order in which every nonempty subset has a least element. Its order type records only the order, not the names of the elements. The usual alternative defines α + β by transfinite recursion on β, taking unions at limit ordinals.

**Problem.** For all ordinals α, β and γ, (α + β) + γ = α + (β + γ).

**How the definition helps.** With appended well orders, both groupings give the same three blocks in the same order (our own). So the identity map between them preserves the order, and the order types agree (our own). The recursive definition needs a proof by transfinite induction on γ instead (our own). The work moves to proving that appended well orders satisfy the recursion, including its rule at limits (our own).

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “every element of S is smaller than every element of T”

**Sources:** none listed. No primary source with a working link was found.

### Ordinal sums as appended well orders make left subtraction read the tail

**Remember:** To subtract an initial block, read the order of what remains.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Define α + β by placing a copy of β after a copy of α. Take each ordinal to be the set of smaller ordinals, so β ≤ α means that β is an initial segment of α. The usual alternative defines addition by transfinite recursion on the second term.

**Problem.** For any ordinals β ≤ α, there is exactly one ordinal γ with β + γ = α.

**How the definition helps.** With appended orders, γ must be the order type of the tail of α after β (our own). That type works, because α is the block β followed by its tail (our own). If also α = β + γ′, an order-preserving bijection carries the β block onto an initial segment of α of type β (our own). That segment is β itself, because a well order has at most one initial segment of each type (our own). So the same tail has types γ and γ′, and γ = γ′ (our own). The recursive definition needs transfinite induction for cancellation instead (our own). The work moves to proving that appending agrees with recursive addition (our own).

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “Furthermore, one can define left subtraction for ordinals β ≤ α: there is a unique γ such that α = β + γ.”

**Sources:** none listed. No primary source with a working link was found.

### Von Neumann ordinals make each limit ordinal the union of smaller ones

**Remember:** Each ordinal is the set of smaller ordinals, so suprema are unions.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set that the relation ∈ well-orders, so each ordinal is the set of all smaller ordinals. A limit ordinal is a nonzero ordinal that is not a successor α ∪ {α}.

**Problem.** Show that a limit ordinal is the supremum of the ordinals below it.

**How the definition helps.** Since an ordinal is the set of the ordinals below it, a supremum is a union, and the theorem is almost immediate. Our own sketch: the union ⋃λ is the set of ordinals that lie below some element of λ. For a limit λ, every β &lt; λ has β + 1 &lt; λ, so β lies in ⋃λ. Our own remark: for a successor α + 1, the union is only α, which is why the theorem needs a limit. Our own: if ordinals were classes of isomorphic well-orders, suprema would need a separate construction. ProofWiki's alternative definition, a transitive set that ∈ strictly well-orders, is the one that makes this work.

**Paper or page:** [Limit Ordinal Equals its Union](https://proofwiki.org/wiki/Limit_Ordinal_Equals_its_Union), [Alternative Definition of Ordinal](https://proofwiki.org/wiki/Alternative_Definition_of_Ordinal). It says: “Let λ be a limit ordinal. Then: λ = ⋃λ where ⋃λ denotes the union of λ.”

**Sources:**

- [ProofWiki, Limit Ordinal Equals its Union](https://proofwiki.org/wiki/Limit_Ordinal_Equals_its_Union)
- [ProofWiki, Alternative Definition of Ordinal](https://proofwiki.org/wiki/Alternative_Definition_of_Ordinal)

### Von Neumann ordinals make each order type a single set

**Remember:** An ordinal is the set of the ordinals that come before it.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set (a set that contains every element of its elements) that ∈ strictly well-orders. Each ordinal is the set of all smaller ordinals: 0 = ∅, n + 1 = n ∪ {n}, and ω = {0, 1, 2, …}.

**Problem.** Every well-ordered set should have exactly one ordinal as its order type, and that ordinal should be a set, not a proper class.

**How the definition helps.** Von Neumann picks one set from each class of isomorphic well-orders, so the order type is a set. The Principia Mathematica definition takes the order type to be the class of all isomorphic well-orders. In ZF that class is too large to be a set. With von Neumann's definition, the order relation is simply ∈, and the natural number n is a set with n elements. With the axiom of replacement, one proves that every well-ordered set is isomorphic to exactly one ordinal. Uniqueness holds because no well-order is isomorphic to a proper initial segment of itself. The Burali-Forti paradox becomes the theorem that the ordinals form a proper class.

**Wikipedia:** [Ordinal number](https://en.wikipedia.org/wiki/Ordinal_number), [Set-theoretic definition of natural numbers](https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers). It says: “Every well-ordered set S is order-isomorphic to exactly one ordinal, known as its order type.”

**Sources:** none listed. No primary source with a working link was found.

### Von Neumann ordinals show directly that no set contains every ordinal

**Remember:** A set of all ordinals would be an ordinal inside itself.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A von Neumann ordinal is a transitive set that is well ordered by membership. Transitive means that every element of a member is also a member. So each ordinal is the set of all smaller ordinals. The alternative treats ordinals as order types of well orders, without making them sets of their predecessors.

**Problem.** There is no set of all ordinals.

**How the definition helps.** With von Neumann ordinals, a set Ω of all ordinals would itself be an ordinal (our own). It is transitive, and membership well orders it (our own). Then Ω ∈ Ω, which is impossible because membership is a strict order on an ordinal (our own). The cited ProofWiki proof uses order types instead, and shows that the order type of all ordinals exceeds each ordinal. The work moves to proving that membership totally orders every set of ordinals (our own).

**Paper or page:** [Burali-Forti Paradox](https://proofwiki.org/wiki/Burali-Forti_Paradox). It says: “Hence the set of all ordinals is not an allowable set.”

**Sources:** none listed. No primary source with a working link was found.

### Well-orders have no nontrivial automorphisms, so comparisons between them are unique

**Remember:** A well-order cannot be shifted, because its least element must stay put.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers), 06A05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A well-ordering is a total order in which every nonempty subset has a least element. An order isomorphism is a bijection that preserves the order in both directions.

**Problem.** Every order automorphism of a well-ordered set or class is the identity. So between two well-ordered sets there is at most one order isomorphism.

**How the definition helps.** The least-element condition lets an induction fix every point in place. Our own sketch: take the least point a that φ moves. Then both φ(a) &lt; a and φ(a) &gt; a contradict the fact that φ is an order bijection. Our own example: the integers have no least element, and the shift n ↦ n + 1 is a nontrivial automorphism. Because the isomorphism is unique, 'the' isomorphism between two well-orders makes sense, and ordinals can be compared without any choices. The nLab adds that simulations, the order-preserving maps whose image is an initial segment, are also unique. The hard part, that any two well-orders are comparable, is a separate theorem.

**nLab:** [well-order](https://ncatlab.org/nlab/show/well-order). It says: “Note that any simulation of S in T must be unique.”

**Paper or page:** [Order Automorphism on Well-Ordered Class is Identity Mapping](https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Identity_Mapping), [Well-Ordered Classes are Isomorphic at Most Uniquely](https://proofwiki.org/wiki/Well-Ordered_Classes_are_Isomorphic_at_Most_Uniquely). It says: “Let (A, ≼) be a well-ordered class. Let φ be an order isomorphism on (A, ≼). Then φ is the identity mapping”

**Sources:**

- [ProofWiki, Order Automorphism on Well-Ordered Class is Identity Mapping](https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Identity_Mapping)
- [ProofWiki, Well-Ordered Classes are Isomorphic at Most Uniquely](https://proofwiki.org/wiki/Well-Ordered_Classes_are_Isomorphic_at_Most_Uniquely)

### Finite character makes the existence of a basis one line

**Remember:** If finite pieces decide membership, a maximal member exists.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions), 15A03. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A family of sets has finite character if a set belongs to the family exactly when all of its finite subsets belong to it. The Teichmüller–Tukey lemma says that every member of such a family is contained in a maximal member.

**Problem.** Every vector space has a basis, and many similar maximal objects should exist. With Zorn's lemma, each proof must check that chains have upper bounds.

**How the definition helps.** Finite character builds the chain condition of Zorn's lemma into the definition. So each application only checks that membership depends on finite subsets. The union of a chain of members is a member, because each of its finite subsets lies in one member (our own). Linear independence has finite character, since it is a condition on finite linear combinations. So a maximal linearly independent set exists, and the page says it spans the space. Over ZF, the lemma is equivalent to the axiom of choice. So choice is still needed, but it is used once, inside the lemma.

**Wikipedia:** [Teichmüller–Tukey lemma](https://en.wikipedia.org/wiki/Teichm%C3%BCller%E2%80%93Tukey_lemma). It says: “This is a collection of finite character. Thus, a maximal set exists, which must then span V and be a basis for V.”

**Sources:**

- [Tukey, J. W. (1940). Convergence and Uniformity in Topology. Annals of Mathematics Studies 2, Princeton University Press.](https://doi.org/10.1515/9781400882199)

### The empty chain makes the set in Zorn's lemma non-empty

**Remember:** The empty chain needs an upper bound too, so P cannot be empty.

*True by definition.* MSC 03E25 (Axiom of choice and related propositions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** Zorn's lemma says the following. Let P be a partially ordered set in which every chain has an upper bound in P. Then P has a maximal element. The empty set counts as a chain.

**Problem.** Zorn's lemma is false for the empty partially ordered set. That set has no non-empty chains, so the condition on them holds trivially, but it has no maximal element.

**How the definition helps.** The empty chain must have an upper bound, so the hypothesis already says that P is non-empty. So we need no separate non-emptiness condition. In practice, we check that P is non-empty and then check the non-empty chains. Examples are the proofs that every vector space has a basis and that every ring has a maximal ideal. Bourbaki calls such partially ordered sets 'inductive', and that name includes non-emptiness for the same reason.

**Wikipedia:** [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma). It says: “property (1) is redundant, since property (2) says, in particular, that the empty chain has an upper bound in P, implying P is nonempty.”

**Sources:**

- [Max Zorn, A remark on method in transfinite algebra, Bulletin of the American Mathematical Society 41 (1935) 667–670](https://doi.org/10.1090/S0002-9904-1935-06166-X)

### Zorn's lemma packages transfinite induction into one condition to check

**Remember:** Zorn's lemma: if no chain can climb forever, there is a top.

*Makes the theorem clean to state or prove.* MSC 03E25 (Axiom of choice and related propositions). arXiv math.LO. Level 2: later undergraduate.

**Definition.** A chain is a subset in which any two elements are comparable. A partially ordered set is inductive if every chain, including the empty chain, has an upper bound. Zorn's lemma says that every inductive set has a maximal element.

**Problem.** Prove existence results such as 'every vector space has a basis' or 'every nontrivial ring with 1 has a maximal ideal' without writing a transfinite induction each time.

**How the definition helps.** The lemma states once the conditions under which a step-by-step transfinite construction succeeds. So the user only checks that chains have upper bounds. Because the empty chain counts, a separate hypothesis that the set P is nonempty is not needed. Kuratowski (1922) proved a version in order to remove transfinite numbers from proofs. The lemma is equivalent to the axiom of choice. It fails for classes: in the class of ordinals, every chain that is a set has an upper bound, but there is no maximal element.

**Wikipedia:** [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma). It says: “Zorn's lemma tidies up the conditions a situation needs to satisfy in order for such an argument to work and enables mathematicians to not have to repeat the transfinite induction argument by hand each time”

**Sources:**

- [Kuratowski, C. (1922). Une méthode d'élimination des nombres transfinis des raisonnements mathématiques. Fundamenta Mathematicae 3, 76–108.](https://doi.org/10.4064/fm-3-1-76-108)
- [Zorn, M. (1935). A remark on method in transfinite algebra. Bulletin of the American Mathematical Society.](https://doi.org/10.1090/S0002-9904-1935-06166-X)

### Separation instead of comprehension blocks Russell's paradox

**Remember:** Cut a subset out of a set; never collect everything with a property.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments). arXiv math.LO. Level 2: later undergraduate.

**Definition.** The axiom schema of separation lets you form {x ∈ A : φ(x)} only inside a set A that you already have. Unrestricted comprehension would form {x : φ(x)} for every property φ, and it is not allowed.

**Problem.** Prove that no set contains all sets, and avoid Russell's paradox. The paradox: the set R = {x : x ∉ x} would satisfy R ∈ R if and only if R ∉ R.

**How the definition helps.** Separation turns Russell's paradox into a proof that no set contains all sets. Apply the Russell argument to {x ∈ A : x ∉ x}. It no longer gives a contradiction. Instead it proves that this set is not an element of A. The cost is that comprehension gave many sets for free, and these must now come from separate existence axioms: pairing, union, power set, replacement and infinity. Separation does not prove that the theory is consistent. By Gödel's second incompleteness theorem, ZF cannot prove its own consistency if it is consistent (our own remark).

**Wikipedia:** [Axiom schema of specification](https://en.wikipedia.org/wiki/Axiom_schema_of_specification), [Axiom of regularity](https://en.wikipedia.org/wiki/Axiom_of_regularity). It says: “Because restricting comprehension avoids Russell's paradox, several mathematicians including Zermelo, Fraenkel, and Gödel considered it the most important axiom of set theory.”

**Sources:**

- [Zermelo, E. (1908). Untersuchungen über die Grundlagen der Mengenlehre. I. Mathematische Annalen, 261–281.](https://doi.org/10.1007/BF01449999)

### The axiom of regularity gives every set a rank

**Remember:** Every nonempty set has a bottom element under membership.

*Makes the theorem clean to state or prove.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03E10. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The axiom of regularity says that every nonempty set A has an element that has no element in common with A. In other words, the membership relation ∈ is well-founded.

**Problem.** Every set should appear at some stage V(α) of the cumulative hierarchy. This hierarchy builds sets in stages: each stage is the power set of the stage before, and limit stages take unions. One should also be able to prove statements about all sets by induction on membership (∈-induction).

**How the definition helps.** Regularity lets every set be placed at a stage of the hierarchy, so induction on stages reaches every set. Over the other ZF axioms, regularity is equivalent to the ∈-induction principle. It is also equivalent to the statement that the union of all stages V(α) is the class of all sets. So every set gets an ordinal rank (which records the stage where it appears), and induction and recursion on rank work for every set. Without regularity, Quine atoms (sets x with x = {x}) are consistent, and these sets have no rank. The article notes that almost all ordinary mathematics does not need the axiom. With pairing, regularity also rules out infinite descending ∈-chains; the converse direction needs dependent choice (a weak form of the axiom of choice).

**Wikipedia:** [Axiom of regularity](https://en.wikipedia.org/wiki/Axiom_of_regularity), [Well-founded relation](https://en.wikipedia.org/wiki/Well-founded_relation). It says: “However, regularity makes some properties of ordinals easier to prove; and it not only allows induction to be done on well-ordered sets but also on proper classes that are well-founded relational structures”

**Sources:**

- [Zermelo, E. (1930). Über Grenzzahlen und Mengenbereiche. Fundamenta Mathematicae 16, 29–47.](https://doi.org/10.4064/fm-16-1-29-47)

### One formula on the right turns Gentzen's LK into intuitionistic logic

**Remember:** One formula on the right is all that separates intuitionistic from classical.

*Makes the theorem clean to state or prove.* MSC 03F05 (Cut-elimination and normal-form theorems), 03B20. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A sequent Γ ⊢ Δ says that the formulas in Γ together give at least one formula in Δ. The classical sequent calculus LK lets Δ hold any number of formulas. Gentzen's LJ uses the same rules, but Δ may hold at most one formula.

**Problem.** Intuitionistic logic has the disjunction property. If A ∨ B is provable with no assumptions, then A is provable or B is provable.

**How the definition helps.** With one formula on the right, the last rule of a cut-free proof of ⊢ A ∨ B must introduce the ∨. So that proof comes from a proof of ⊢ A or of ⊢ B. Here the cut rule is the rule that uses a lemma, and a cut-free proof has no lemmas. In LK, the usual proof of A ∨ ¬A has A and ¬A on the right together before a contraction joins them (our own example). The single-formula restriction blocks this proof of excluded middle. The hard work is the cut-elimination theorem for LJ, which Gentzen proved in the same paper.

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

**Problem.** All models of the Peano axioms should be isomorphic to the natural numbers. A theory with this property is called categorical.

**How the definition helps.** Induction over all subsets removes every element that cannot be reached from 0 by taking successors. Dedekind (1888) proved that any two models of the second-order axioms are isomorphic, by a unique map that respects 0 and successor. With the first-order induction schema (one induction axiom for each formula), the compactness theorem gives non-standard models with infinite elements. Quantifying over all subsets excludes them, because the standard part of a non-standard model is a set that contains 0, is closed under successor, and is not the whole model (our own explanation). The cost is that second-order logic with full semantics (where set variables range over all subsets) has no complete proof system. So categoricity does not give a proof of every true arithmetic sentence (our own remark).

**Wikipedia:** [Peano axioms](https://en.wikipedia.org/wiki/Peano_axioms). It says: “any two models of the Peano axioms (including the second-order induction axiom) are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Gödel numbering turns statements about proofs into statements about numbers

**Remember:** Code every formula and proof as a number, and proofs become arithmetic.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F30. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A Gödel numbering gives a unique natural number to each symbol, formula and proof of a formal language. Gödel coded a sequence of codes x₁, …, xₙ as one number. The number is 2 to the power x₁, times 3 to the power x₂, and so on, up to the nth prime pₙ to the power xₙ.

**Problem.** We want to state and prove, inside arithmetic, facts about provability in arithmetic. An example is the Gödel sentence, which says "I am not provable".

**How the definition helps.** The numbering lets a theory of arithmetic talk about its own syntax. Under the numbering, "is a formula", "is an axiom" and "is a proof of" become relations between numbers. In fact they are primitive recursive, which means they can be computed with only bounded loops. Unique prime factorization lets one decode a number back into its sequence. Our own remark: the hard part that remains is the diagonal lemma, and showing that the theory proves enough about these relations. (The diagonal lemma builds a sentence that speaks about its own number.)

**Wikipedia:** [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering). It says: “syntactic properties of a statement—such as being a well-formed formula, being an axiom, or being provable—correspond to arithmetical properties of its Gödel number, so that questions about the system become questions about numbers.”

**Sources:**

- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Rosser's provability predicate removes the need for ω-consistency

**Remember:** Rosser asks whether a proof comes before any proof of the opposite.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F30. arXiv math.LO. Level 2: later undergraduate.

**Definition.** Rosser's provability predicate says: "there is a proof of φ, and no smaller proof of ¬φ". Here proofs are compared by their code numbers. The Rosser sentence ρ says of itself that it is not provable in this sense.

**Problem.** The first incompleteness theorem should need only consistency, not Gödel's stronger hypothesis of ω-consistency. (A theory is ω-consistent if it never proves that some number has a property while also proving, for each number n, that n does not have it.)

**How the definition helps.** With the Rosser predicate, both halves of the theorem follow from plain consistency. With Gödel's sentence, consistency shows only that the sentence is not provable. To show that its negation is not provable, Gödel needed ω-consistency. In a consistent theory, Rosser-provability and ordinary provability hold for the same formulas. But the theory proves different things about the two predicates. Our own remark: so the second incompleteness theorem needs the standard provability predicate, not Rosser's.

**Wikipedia:** [Rosser's trick](https://en.wikipedia.org/wiki/Rosser%27s_trick). It says: “Rosser's trick is a method for proving a variant of Gödel's incompleteness theorems not relying on the assumption that the theory being considered is ω-consistent”

**Sources:**

- [Rosser, J. B. (1936). Extensions of some theorems of Gödel and Church. Journal of Symbolic Logic 1, 87–91.](https://doi.org/10.2307/2269028)
- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Defining well-foundedness by induction makes induction valid constructively

**Remember:** Well-founded means exactly that induction along ≺ is valid.

*True by definition.* MSC 03F65 (Other constructive mathematics), 06A06. arXiv math.LO. Level 2: later undergraduate.

**Definition.** A subset A of a set S is ≺-inductive if x is in A whenever every t ≺ x is in A. A relation ≺ on S is well-founded if the only ≺-inductive subset of S is S itself.

**Problem.** Proofs by well-founded induction should be valid. The notion should also be usable in constructive mathematics (mathematics without the law of excluded middle).

**How the definition helps.** With this definition, the induction principle is the definition itself, so it holds with no proof. The classical definition says that every inhabited subset (a subset with an element) has a minimal element. It implies excluded middle as soon as some relation y ≺ x holds, so it is too strong for constructive mathematics. The definition "there is no infinite descending sequence" is too weak to be of much use there. Classically all three definitions are equivalent. But the step from no infinite descent to minimal elements uses the axiom of dependent choice.

**nLab:** [well-founded relation](https://ncatlab.org/nlab/show/well-founded+relation). It says: “the infinite descent condition is too weak to be of much use in constructive mathematics. It is the inductive notion of well-foundedness that is just right.”

**Sources:**

- [Paul Taylor, Intuitionistic sets and ordinals, Journal of Symbolic Logic 61 (1996) 705–744](https://doi.org/10.2307/2275781)

### The Lindenbaum–Tarski algebra turns complete theories into ultrafilters

**Remember:** Sentences up to provable equivalence form an algebra, and logic becomes algebra.

*Makes the theorem clean to state or prove.* MSC 03G05 (Logical aspects of Boolean algebras), 06E05. arXiv math.LO. Level 2: later undergraduate.

**Definition.** The Lindenbaum–Tarski algebra of a theory T is the set of sentences, with two sentences identified when T proves each from the other. The logical connectives become the operations. For classical logic it is a Boolean algebra.

**Problem.** Lindenbaum's lemma says that every consistent theory extends to a complete consistent theory. This is a key step in the proof of the completeness theorem.

**How the definition helps.** Once provably equal sentences are identified, theories become subsets of an algebra, and their properties become algebraic. A theory closed under deduction is then a filter, a set closed upward and under ∧. A complete consistent theory is an ultrafilter, a maximal proper filter. So Lindenbaum's lemma becomes the ultrafilter lemma for Boolean algebras, and the page says the two are equivalent. The same method gives Heyting algebras for intuitionistic logic and interior algebras for the modal logic S4. It fails for logics such as S1, S2 and S3, where provably equivalent sentences can have provably different necessitations. The ultrafilter lemma itself is not provable without some form of the axiom of choice (our own).

**Wikipedia:** [Lindenbaum–Tarski algebra](https://en.wikipedia.org/wiki/Lindenbaum%E2%80%93Tarski_algebra). It says: “Moreover, an ultrafilter in A corresponds to a complete consistent theory, establishing the equivalence between Lindenbaum's lemma and the ultrafilter lemma.”

**Sources:** none listed. No primary source with a working link was found.

### Hilbert's ε-operator gives quantifiers and choice from one axiom

**Remember:** ε picks a witness if there is one.

*True by definition.* MSC 03B10 (Classical first-order logic), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** For each property P(x) there is a term εx.P(x), with the axiom P(a) → P(εx.P(x)). In words: if anything has the property, then the chosen term εx.P(x) has it.

**Problem.** Derive the quantifiers and the axiom of choice from a small set of basic notions.

**How the definition helps.** The ε-term names a witness, and quantifiers and choice functions need nothing more than a witness. With ε as a basic symbol, you can define ∃x.P(x) as P(εx.P(x)). You then define ∀ from ∃ by negation, so the calculus needs no separate quantifiers. A choice function for a family (Aᵤ) of inhabited sets (sets with at least one element) is simply u ↦ εx.(x ∈ Aᵤ). So in many cases the ε-operator implies the axiom of choice, and often global choice (one choice function for all inhabited sets at once). The cost is that the ε axioms are strong: with ε-extensionality they imply excluded middle. ε-extensionality says that equivalent properties give the same ε-term.

**nLab:** [choice operator](https://ncatlab.org/nlab/show/choice+operator). It says: “This has the advantage of also allowing the existential and universal quantifiers to be constructed explicitly, since ∃x translates to P(ε<sub>x</sub>(P(x))).”

**Sources:**

- [David Hilbert, Über das Unendliche, Mathematische Annalen 95 (1926)](https://doi.org/10.1007/BF01206605)

### Requiring unique existence makes extensions by definitions conservative

**Remember:** Every old model can interpret the new name in exactly one way.

*Rules out counterexamples.* MSC 03B10 (Classical first-order logic). arXiv math.LO. Level 3: graduate.

**Definition.** An extension by definitions adds a new symbol with one defining axiom in the old language. For a new relation symbol, the axiom says that it holds exactly when a fixed old formula holds. For a new function symbol, the old theory must first prove that each input has exactly one output that satisfies the defining formula.

**Problem.** An extension by definitions proves no new sentences in the old language. In other words, it is a conservative extension.

**How the definition helps.** The existence-and-uniqueness condition lets every model of the old theory interpret the new symbol, so no old model is lost, in our own argument. Wikipedia states that the extension is conservative, so the defining axiom proves no new theorems. Without the condition, this can fail, in our own example. Add a constant c to the theory of fields with the axiom c·c = 2. The new theory proves the old sentence ∃y (y·y = 2), which the theory of fields does not prove. The completeness theorem turns the argument about models into a statement about proofs, in our own account.

**Wikipedia:** [Extension by definition](https://en.wikipedia.org/wiki/Extension_by_definition). It says: “The fact that T' is a conservative extension of T shows that the defining axiom of R cannot be used to prove new theorems.”

**Sources:** none listed. No primary source with a working link was found.

### A higher inductive free group has its universal property by definition

**Remember:** Constructors are the group laws, so maps out need nothing else.

*True by definition.* MSC 03B38 (Type theory), 20E05. arXiv math.LO, math.GR. Level 3: graduate.

**Definition.** A higher inductive type is a type given by constructors for elements and also for equalities. The HoTT Book defines F(A) as such a type, with a map η : A → F(A), a multiplication, a unit and an inverse. It has one equality constructor for each group law, and a last constructor makes F(A) a set.

**Problem.** Show that F(A) is the free group on A: group maps from F(A) to a group G match functions from A to G. The book then shows, for a set A, that F(A) is also a quotient of words, where a letter next to its inverse cancels.

**How the definition helps.** The constructors are exactly the group operations and the group laws, so the induction principle of F(A) is the universal property (our own). No words, reduced forms or cancellation arguments are needed for this step (our own). The work moves into the second theorem, which identifies F(A) with the classical construction from words. That theorem needs A to be a set, and it uses a quotient of words rather than reduced words. In our own view, reduced words would need a way to decide whether two letters are equal, which a general set does not give.

**Paper or page:** [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “F(A) is the free group on A. In other words, for any (set) group G, composition with η : A → F(A) determines an equivalence”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### A type is n-connected exactly when its maps into n-types are constant

**Remember:** Connected means the truncation is a point, so maps out are constant.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55P60. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** An n-type is a type with no homotopy information above dimension n; sets are the 0-types. The n-truncation of A is the best approximation of A by an n-type. A type is n-connected if its n-truncation is contractible, that is, equivalent to a point.

**Problem.** Show that A is n-connected exactly when every map from A to an n-type is constant.

**How the definition helps.** By the universal property of truncation, maps from A to an n-type B match maps from the n-truncation of A to B. If the truncation is a point, such maps are the same as elements of B, that is, constant maps (our own outline). So the theorem follows almost at once from the definition. For n = 0, a connected type is one whose maps to every set are constant (our own example). What stays hard is to construct truncations and prove their universal property, which the book does with higher inductive types.

**Paper or page:** [HoTT Book: Hlevels](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hlevels](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “A type A is n-connected if and only if the map λb.λa.b : B → (A → B) is an equivalence for every n-type B. In other words, “every map from A to an n-type is constant”.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### An interval type with definitional computation rules proves function extensionality

**Remember:** When paths are maps from an interval, pointwise paths make a path of functions.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** An interval type has two points 0 and 1 and a path between them. Its recursor, the rule that defines maps out of it, sends the two points to given values by judgmental equality. Judgmental (definitional) equality is equality that holds by definition and that the type checker sees directly. In cubical type theory, a path in a type is a map out of an interval of this kind.

**Problem.** Function extensionality says: if f(x) = g(x) for all x : A, then f = g. In Martin-Löf type theory you must assume it as an axiom.

**How the definition helps.** Because the computation rules hold by definition, swapping arguments turns a family of paths into one path of functions. Suppose you have a path from f(x) to g(x) for each x. Swap the arguments to get a map from the interval into A → B. Its ends are f and g judgmentally, because the computation rules hold judgmentally. The proof also uses the uniqueness rule (η rule) for function types, which says that a function f equals λx. f(x). This is why function extensionality is a theorem in cubical type theory. The nLab stresses that an interval type with only typal computation rules (rules that hold only up to a path) does not imply function extensionality, because the needed step is then function extensionality itself.

**nLab:** [function extensionality](https://ncatlab.org/nlab/show/function+extensionality), [cubical type theory](https://ncatlab.org/nlab/show/cubical+type+theory). It says: “Postulating an interval type with judgmental computation rules for the point constructors of the interval type implies function extensionality.”

**Sources:**

- [Mike Shulman, An interval type implies function extensionality, Homotopy Type Theory blog (4 April 2011)](https://homotopytypetheory.org/2011/04/04/an-interval-type-implies-function-extensionality/)
- [Cyril Cohen, Thierry Coquand, Simon Huber, Anders Mörtberg, Cubical Type Theory: a constructive interpretation of the univalence axiom, TYPES 2015, LIPIcs 69 (2018); arXiv:1611.02108](https://arxiv.org/abs/1611.02108)

### Cauchy reals with limits as constructors embed into every complete Archimedean field

**Remember:** Rationals and limits are the constructors, so maps out follow them.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 26E40, 03F60. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** The HoTT Book defines the Cauchy reals ℝc as a higher inductive type, a type with constructors for equalities as well as for elements. It has a constructor for each rational number and a constructor lim that sends a Cauchy approximation to a real number. A Cauchy approximation is a family x indexed by positive rationals ε, with xδ and xε closer than δ + ε. An equality constructor makes two reals equal when they are ε-close for every ε.

**Problem.** For every Cauchy complete Archimedean ordered field F, there is an embedding of ℝc into F. So ℝc is the smallest such field.

**How the definition helps.** F has rationals and limits of Cauchy approximations, and these are exactly the constructors of ℝc (our own). So the recursion principle of ℝc gives the map into F (our own outline). With classes of Cauchy sequences, a limit of reals first needs a chosen sequence for each real (our own). That step uses countable choice. What stays hard is to define closeness together with ℝc (our own). One must also show that the map keeps the order and the field operations (our own). The book also shows that ℝc equals the Dedekind reals if excluded middle or countable choice holds.

**Paper or page:** [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “The Cauchy reals embed into every Cauchy complete archimedean ordered field.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Contractible fibres make equivalence in type theory a mere proposition

**Remember:** A family of propositions is itself a proposition, so fibrewise contractibility is a property.

*True by definition.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** In homotopy type theory, a path is evidence of equality between two elements of a type. A type is contractible if it has a centre with a path from that centre to each element. A function is an equivalence if each fibre is contractible. The fibre over y consists of pairs of an input x and a path from f(x) to y.

**Problem.** For any function, the type asserting that it is an equivalence is a mere proposition. This means any two witnesses of equivalence are equal.

**How the definition helps.** The contractible-fibre definition turns the claim into a product of mere propositions, one for each fibre. Lemma 12.3 says any two witnesses of contractibility of a given type are equal. Function extensionality, which equates functions that agree at each input, gives equality for the whole family. A different test uses a quasi-inverse, a map back with paths making both composites equal to the appropriate identity. Those data need not form a mere proposition, as Theorem 2.3 shows. The work is in proving that both tests hold for the same functions, as Chapter 4 shows.

**Paper or page:** [Equivalences, Lemma 5.3](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [Logic, Lemma 12.3](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [Equivalences, Theorem 2.3](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “For any f, the type isContr(f) is a mere proposition.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Chapter 4](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Contractible-fiber equivalences make pullbacks of equivalences into equivalences

**Remember:** The fiber of a pullback map is the fiber over the image.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** Call a map an equivalence if each fiber has a chosen point and a path from it to every point. The fiber at y contains a point x and a path from its image to y. An alternative uses a map back with inverse laws up to paths.

**Problem.** Pulling back an equivalence along any function gives an equivalence. Here a pullback keeps the path that witnesses agreement, as a homotopy pullback does.

**How the definition helps.** With this definition, being an equivalence is a property of the fibers, and pulling back does not change fibers. Our own proof identifies the fiber of the pulled-back map at a point with the old fiber over its image. The contraction therefore carries over. With the inverse-up-to-paths definition, one must build an inverse of the pulled-back map and check its laws. The nLab notes that the two definitions agree, citing the HoTT book around Theorem 4.4.5.

**nLab:** [equivalence of types](https://ncatlab.org/nlab/show/equivalence+of+types). It says: “if all its pre-images are essentially unique, namely if all its fiber types are contractible types.”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Cubical paths make the action of a composite function compute strictly

**Remember:** Compose functions point by point along the path.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** In cubical type theory, a path is a function from an interval type, with given values at the two ends. A function f acts on a path p by the path i ↦ f(p(i)). With Martin-Löf identity types, one defines this action by path induction, the rule that reduces a claim about all paths to reflexivity paths.

**Problem.** Applying g ∘ f to a cubical path gives, by computation alone, the same path as applying f and then g.

**How the definition helps.** Both sides are the function i ↦ g(f(p(i))), so they agree by computation. With identity types, our own comparison proves only a path between the two sides, by path induction. The nLab says that cubical type theory defines paths as maps out of an interval primitive. The work moves into giving cubical paths composition and transport operations, so that they satisfy path induction up to a path.

**nLab:** [cubical type theory](https://ncatlab.org/nlab/show/cubical+type+theory), [cubical path type](https://ncatlab.org/nlab/show/cubical+path+type). It says: “maps out of an interval primitive is used to define cubical path types, rather than the inductive family of Martin-Löf identity types”

**Sources:**

- [Cohen, Coquand, Huber and Mörtberg (2018), Cubical Type Theory — a constructive interpretation of the univalence axiom, TYPES 2015, LIPIcs 69](https://doi.org/10.4230/LIPIcs.TYPES.2015.5)

### Define equivalences so that being an equivalence is a property

**Remember:** Contractible fibers or two separate one-sided inverses give a property, not extra structure.

*Rules out counterexamples.* MSC 03B38 (Type theory). arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A function f : A → B is an equivalence if every fiber of f is contractible. The fiber over a point b is the type of points a with an identification f(a) = b, and a type is contractible if it has a point to which every point is equal. Equivalently, f is an equivalence if it has a left inverse and a separately given right inverse; such an f is called bi-invertible. These definitions replace the naive one, which asks for a single two-sided inverse up to homotopy, called a quasi-inverse.

**Problem.** The type isEquiv(f), which says that f is an equivalence, should be a mere proposition: a type with at most one element up to equality. Then the type of equivalences is a subtype of the function type A → B. Also, two equivalences are then equal when their underlying functions are equal.

**How the definition helps.** With these definitions, a function can be an equivalence in only one way. The naive type of quasi-inverses consists of a function g with homotopies g ∘ f = id and f ∘ g = id. In general, this type is not a mere proposition (HoTT book, Theorem 4.1.3). The nLab says that it is one only if you assume axiom K or uniqueness of identity proofs, which are rules that make any two identifications of the same two points equal. So with the naive definition, a function can be an equivalence in several different ways, and the type of equivalences is wrong. With contractible fibers or bi-invertibility, and with function extensionality (functions that are equal at every point are equal), isEquiv(f) is a mere proposition. Quasi-inverses stay the easiest way to show that a given f is an equivalence.

**nLab:** [equivalence of types](https://ncatlab.org/nlab/show/equivalence+of+types). It says: “Moreover, at least if we assume function extensionality, the evident types of "homotopy isomorphisms" and of functions with contractible fibers are equivalent and are h-propositions.”

**Sources:**

- [Vladimir Voevodsky, Univalent Foundations Project (2010), a modified version of an NSF grant application, p. 8 and p. 10](http://www.math.ias.edu/~vladimir/Site3/Univalent_Foundations_files/univalent_foundations_project.pdf)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Defining syntax as trees gives structural induction for free

**Remember:** A term is a tree, and a string is just a way to write it.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03B40. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Raw terms and types are not strings of symbols. They are well-founded labelled trees, defined as an inductive family with one constructor for variables and one constructor for each operator. Such a tree is called an abstract binding tree. Written strings such as (A × B) × C are only notation for these trees.

**Problem.** You want to define functions on terms by recursion, and to prove statements about all terms by induction. For this you need an induction principle for terms. You also need unique readability: each term can be read in only one way.

**How the definition helps.** If terms are an inductive type, the induction and recursion principles come with the definition. Here terms are an inductive type in the metatheory (the mathematics in which you study the formal system). With strings of symbols, you must first prove unique readability: each well-formed string parses in exactly one way. You also need extra parentheses to make this true. The nLab page says that a complete account still needs the passage from strings to trees, that is, parsing. But that step is well understood, and it is kept apart from the real mathematics.

**nLab:** [Initiality Project - Raw Syntax](https://ncatlab.org/nlab/show/Initiality+Project+-+Raw+Syntax). It says: “This way we obtain automatically an induction principle for defining functions by recursion and proving theorems by induction over the set of terms, which in the strings-of-symbols approach one has to prove by hand.”

**Sources:**

- [Robert Harper, Practical Foundations for Programming Languages, 2nd ed., Cambridge University Press, 2016](https://doi.org/10.1017/CBO9781316576892)

### Defining the cofiber by constructors makes its maps out classify nullhomotopies

**Remember:** A path to the new point records how to kill each image.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** To form the cofiber of f : A → B, add a new point to B. For every a in A, add a path from f(a) to the new point. This is a higher inductive type, one given by point and path constructors. The geometric construction instead glues the base of the cone on A to B along f.

**Problem.** A pointed map preserves the chosen point, here the new point. Pointed maps out of the cofiber correspond to maps g from B with a homotopy from g ∘ f to a constant map.

**How the definition helps.** The mapping rule of the constructors is exactly this data, so the correspondence holds by definition. Our own proof reads it off: give the image of B, of the new point and of each added path. The pointed condition fixes the image of the new point. Our own comparison uses the theorem that the geometric mapping cone has the same mapping rule up to homotopy.

**nLab:** [cofiber type](https://ncatlab.org/nlab/show/cofiber+type). It says: “the cofiber type takes the image of the function f:A → B and makes it contractible”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Defining the smash product as a pushout gives its maps out directly

**Remember:** To map out, give a map and tell how to collapse the axes.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55U35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The wedge of pointed types A and B joins them at their basepoints, inside the product A × B. A pushout glues types along a common part with paths, not strict equations. Define the smash product as the pushout that collapses the wedge to a point. The geometric definition instead takes the quotient of the product by the wedge.

**Problem.** Pointed maps from the smash product correspond to maps from the product with a specified homotopy to the constant map on the wedge.

**How the definition helps.** The pushout's mapping rule is this data, so the correspondence holds by definition. Our own proof reads it off: a map on the product, the image of the collapsed point, and paths on the wedge. Our own comparison uses the theorem that the quotient computes the homotopy pushout when the wedge inclusion is a cofibration. A cofibration is an inclusion along which homotopies extend, as for well-pointed spaces.

**nLab:** [smash product type](https://ncatlab.org/nlab/show/smash+product+type). It says: “The smash product type of two pointed types A,B can be defined as the pushout type of the span”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### Defining unique existence as contractibility makes unique choice provable

**Remember:** If unique existence means 'the type of solutions is contractible', you hold the solution.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** In homotopy type theory, 'there exists a unique x : X with P(x)' means that the dependent sum Σ(x : X) P(x) is contractible. This dependent sum is the type of pairs of an x and a proof of P(x). A contractible type has a center: a point to which every point is equal. So this kind of unique existence carries its witness.

**Problem.** The principle of unique choice says this: a relation that is total and functional determines a function. Total means that each input has at least one related output, and functional means that it has at most one.

**How the definition helps.** With this definition, the center of contraction gives the value of the function. The nLab says that whether unique choice is provable depends mostly on which notion of proposition you use. It is not provable with the primitive propositions of observational type theory or Rocq. It also fails in the internal language of a tripos, a structure used to build models of logic such as realizability models. Now use mere propositions (types with at most one element up to equality) and define unique existence as contractibility. Then unique choice is provable in Martin-Löf type theory once function extensionality holds. The reason is that the center of contraction of each Σ(y : B(a)) R(a, y) gives the value of the function at a.

**nLab:** [principle of unique choice](https://ncatlab.org/nlab/show/principle+of+unique+choice). It says: “Whether unique choice is provable or not depends mostly on what notion of proposition is used. It is not provable using the primitive notion of proposition in OTT or Rocq.”

**Sources:**

- [Martín Hötzel Escardó, Introduction to Univalent Foundations of Mathematics with Agda (2019), arXiv:1911.00580](https://arxiv.org/abs/1911.00580)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Embeddings, not injections, make surjective maps of types into equivalences

**Remember:** For types, injective is too weak; ask for an embedding.

*Rules out counterexamples.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A function f : A → B is an embedding if each map from x = y to f(x) = f(y) is an equivalence. It is surjective if each b in B merely has some a with f(a) = b; “merely” means that no particular a is named. It is injective if f(x) = f(y) implies x = y.

**Problem.** Classically, a function is a bijection exactly when it is injective and surjective. In homotopy type theory, the same holds for all types when injective is replaced by embedding.

**How the definition helps.** An embedding has fibres with at most one element, and surjectivity gives each fibre some element (our own). So each fibre is contractible, that is, equivalent to a point (our own). Contractible fibres are one of the book's definitions of an equivalence, and injectivity alone fails for types that are not sets (our own). Our own counterexample is the map from the one-point type to the type of two-element sets. It is injective, and it is surjective because each two-element set is merely equal to the standard one. It is not an equivalence, because the swap of the two points is a second self-equality. For sets, embeddings and injections agree, so the classical statement returns (our own).

**nLab:** [embedding of types](https://ncatlab.org/nlab/show/embedding+of+types). It says: “The analogue in dependent type theory of the concept of injection in set theory, embedding of topological spaces in topology, and embedding in category theory.”

**Paper or page:** [HoTT Book: Equivalences](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “A function f : A → B is an equivalence if and only if it is both surjective and an embedding.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Excluded middle for mere propositions is consistent with univalence

**Remember:** A mere proposition can be true or false, but not true in two ways.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03F25. arXiv math.LO. Level 3: graduate.

**Definition.** In homotopy type theory, a type A is a mere proposition if any two of its elements are equal. Formally, the type Π(x y : A), x = y has an element: a function that gives, for all x and y in A, a proof that x = y. Logic is then done with these types only, not with all types.

**Problem.** Excluded middle can be added to homotopy type theory with the univalence axiom without a contradiction. (The univalence axiom says that equivalent types are equal.)

**How the definition helps.** A mere proposition has no nontrivial automorphisms, so excluded middle for mere propositions avoids the clash with univalence. Suppose that you state excluded middle for all types (propositions as types). Then it gives a choice of element for every inhabited type, and this choice must commute with all automorphisms. Univalence makes the swap of the two booleans a nontrivial path, so this version contradicts univalence (HoTT Book). Restricting excluded middle to mere propositions removes this problem. The consistency of the restricted version comes from models, such as Voevodsky's simplicial set model built in classical set theory. That is the real work.

**nLab:** [mere proposition](https://ncatlab.org/nlab/show/mere+proposition). It says: “the PAT version of excluded middle contradicts the univalence axiom, whereas the mere-propositional version does not”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study, 2013](https://homotopytypetheory.org/book/)

### Higher inductive quotients map out by definition, and effectiveness becomes the theorem

**Remember:** Constructors give maps out for free; proving effectiveness takes the real work.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18A32. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** For a type A and a relation R whose values are mere propositions, the set-quotient A/R is a higher inductive type. Such a type has constructors for elements and for equalities. It has a map q : A → A/R and an equality q(a) = q(b) for each proof of R(a, b). A last constructor makes it a set, and A⫽R is the type of equivalence classes.

**Problem.** A quotient should have two properties. Maps from A/R to a set should match maps from A that respect R. And, for an equivalence relation R, it should be effective: q(a) = q(b) holds exactly when R(a, b).

**How the definition helps.** The constructors list exactly what a map out of the quotient must respect, so the universal property is the induction principle of A/R (our own). The work moves into effectiveness and into the comparison with the type of equivalence classes. Effectiveness is not automatic (our own). The constructors put in an equality for each proof of R(a, b), but they say nothing about other equalities. In our own reading of the book, the proof uses univalence for mere propositions, which says that two propositions that imply each other are equal.

**Paper or page:** [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Hits](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Equivalence relations are effective and there is an equivalence A/R ≃ A⫽R.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Homotopy-initial algebras make inductive types unique as elements, not just isomorphic

**Remember:** Ask for a contractible space of maps, and initial objects become unique.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory), 18C15. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** An ℕ-algebra is a type C with a point of C and a map from C to C. It is homotopy-initial (h-initial) if, for every other ℕ-algebra, the type of algebra maps into it is contractible. Contractible means it has exactly one element up to equality. W-types, the general inductive types of trees, use the same notion.

**Problem.** Characterize the natural numbers, and each W-type, by a universal property. The book shows that the types that satisfy the rules for W-types, with computation rules up to equality, are exactly the h-initial algebras. It also shows that any two h-initial ℕ-algebras are equal.

**How the definition helps.** A contractible type of maps is the homotopy-correct way to say “exactly one map”, so initiality becomes a property and not extra data. A mere proposition is a type with at most one element. Because the property is one, the book can say that two h-initial algebras are equal, not only isomorphic. In our own reading, this equality uses univalence, the axiom that equivalent types are equal. A single strictly unique map is not the right notion in homotopy type theory, because maps agree only up to paths (our own). The second theorem turns the usual type-theoretic rules into this universal property. In our own reading, its proof needs function extensionality, the principle that functions with equal values are equal.

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Any two h-initial ℕ-algebras are equal. Thus, the type of h-initial ℕ-algebras is a mere proposition.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)
- [Steve Awodey, Nicola Gambino, Kristina Sojakova, Inductive Types in Homotopy Type Theory, 27th Annual IEEE Symposium on Logic in Computer Science (2012)](https://doi.org/10.1109/lics.2012.21)
- [Steve Awodey, Nicola Gambino, Kristina Sojakova, Homotopy-Initial Algebras in Type Theory, Journal of the ACM (2017)](https://doi.org/10.1145/3006383)

### Identity systems reduce describing equality in a type to one contractibility check

**Remember:** Guess what equality means, then check one total space is contractible.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A pointed predicate over a pointed type (A, a₀) is a family of types R(b), for b in A, with an element r₀ of R(a₀). It is an identity system at a₀ if it has an induction principle like path induction, the basic rule for using equalities. So a statement about all b and all r in R(b) needs a proof only for a₀ and r₀. A type is contractible if it has exactly one element up to equality.

**Problem.** Being an identity system is equivalent to the map from a₀ = b to R(b) being an equivalence for every b. It is also equivalent to the type of pairs (b, r), with r in R(b), being contractible.

**How the definition helps.** To find out what equality in a type means, one guesses a family R and proves one contractibility statement. The theorem then identifies R(b) with the type of equalities a₀ = b. The loops on the circle are one case. The book shows that a family of codes on the circle, with the point 0, is an identity system at the base point. Function extensionality, the principle that functions with equal values are equal, fits the same form, as the nLab notes. What stays hard is to guess R and to prove the contractibility (our own).

**nLab:** [identity system](https://ncatlab.org/nlab/show/identity+system). It says: “Identity systems are very useful in characterizing the extensionality principle of types such as function types, dependent function types, and Tarski universes.”

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Homotopy](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “For a pointed predicate (R, r₀) over (A, a₀), the following are logically equivalent. (R, r₀) is an identity system at a₀. … The type ∑ b:A R(b) is contractible.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### In type theory, the axiom of choice is a theorem

**Remember:** If a proof of 'there exists' gives the witness, choice just reads it off.

*True by definition.* MSC 03B38 (Type theory), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** Under propositions as types, a statement is read as the type of its proofs. Then 'for all x : A there is y : B with R(x, y)' is the dependent product of dependent sums, Π(x : A) Σ(y : B) R(x, y). A dependent sum is a type of pairs of a y and a proof of R(x, y), and a dependent product is a type of functions whose output type can depend on the input. Here 'there is' means a dependent sum without truncation, so an element of it contains a chosen witness y.

**Problem.** The axiom of choice says this: from Π(x : A) Σ(y : B) R(x, y), get a function f : A → B with Π(x : A) R(x, f(x)). In words, if each x has some related y, then some function picks a related y for each x.

**How the definition helps.** The proof of 'there is' already contains the witness, so choice only has to take it out. For an element g of Π(x : A) Σ(y : B) R(x, y), the choice function is λx. π₁(g(x)), which takes the first part of each pair. Its proof is λx. π₂(g(x)), which takes the second part. So the rules for dependent products and dependent sums prove the statement. For this reason, the nLab says the name should be 'principle of choice'. The usual, non-trivial axiom of choice comes back when 'there exists' is read as the propositional truncation of the dependent sum, which forgets which witness was found. That version does not follow from the rules alone.

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

**Definition.** The Edinburgh logical framework LF is a small type theory for encoding other languages. It has dependent function types but no inductive types (types given by their constructors, which allow definition by cases). So you cannot define a function on an encoded type such as tm, the type of terms, by pattern matching on its argument. LF encodes a binder such as lambda as lam : (tm → tm) → tm, so the body of a lambda is an LF function.

**Problem.** The adequacy theorem says that the encoding is faithful. There is a bijection between the syntax of the encoded language and the canonical LF terms (terms in full normal form) of the matching LF type. The bijection is compositional: it respects substitution.

**How the definition helps.** LF is too weak to define bad functions, so every LF function tm → tm stands for a real lambda body. Suppose that tm were an inductive type in LF. Then you could define a function tm → tm by cases on the shape of its argument and pass it to lam. The result would be an 'exotic term' that represents no real lambda term, and adequacy would fail. In LF the only definable functions tm → tm substitute their argument into a fixed term, so exotic terms do not exist. The price is that LF cannot express many functions, for example most functions nat → nat. You must also check properties such as the totality of a relation outside LF.

**nLab:** [logical framework](https://ncatlab.org/nlab/show/logical+framework). It says: “In fact, this weakness is essential in order to guarantee "adequacy" of the HOAS encoding.”

**Sources:**

- [Robert Harper, Furio Honsell, Gordon Plotkin, A framework for defining logics, Journal of the ACM 40(1) (1993) 143–184](https://doi.org/10.1145/138027.138060)

### Numbers as sizes of finite types make disjoint sums add sizes

**Remember:** Disjoint sum is addition before forgetting the labels.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A finite type is one equivalent to {1, …, n} for some n. Define a natural number as a finite type up to equivalence, the set truncation of the type of finite types. Set truncation keeps only whether two elements are equal and forgets how. Define addition there by disjoint sum.

**Problem.** The cardinality of a disjoint sum of finite types is the sum of their cardinalities.

**How the definition helps.** With this definition, the size of A + B is the class of A + B, which is the sum by definition. The nLab gives this definition of addition and the equivalence of ℕ with the set truncation. The usual definition starts from zero and successor and defines addition by recursion. Our own comparison then needs that finite types are classified by their size. It also needs an equivalence between {1, …, m + n} and the disjoint sum of {1, …, m} and {1, …, n}.

**nLab:** [type of finite types](https://ncatlab.org/nlab/show/type+of+finite+types). It says: “The arithmetic operations and order relations on the natural numbers type can be defined by induction on set truncation”

**Sources:** none listed. No primary source with a working link was found.

### Parametric polymorphism gives theorems for free

**Remember:** If code cannot see the type, the type alone gives a law it obeys.

*True by definition.* MSC 03B38 (Type theory), 03B40, 68N18. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A parametrically polymorphic function is written once with a type variable. It works the same way at every type and does not inspect which type it is used at. In System F (the polymorphic lambda calculus), parametricity is the statement that such functions respect all relations between instances of the type variables.

**Problem.** Prove algebraic laws about a function when you know only its type. For example, every f : A × B → A satisfies α ∘ f = f ∘ (α × β) for all functions α and β. In words, applying α after f gives the same result as applying α and β to the inputs first.

**How the definition helps.** A parametric function must act the same way at all types, so its type alone fixes a naturality law for it. You do not need to read its code. This law is Wadler's free theorem. The real content is Reynolds' abstraction theorem (the parametricity theorem), which must be proved for each language. The nLab notes that it fails in type theories with typecase, a construct that can inspect types.

**nLab:** [polymorphism](https://ncatlab.org/nlab/show/polymorphism). It says: “In type systems with parametric polymorphism, such as System F, there is a family of proofs for every polymorphic type signature which each give an algebraic law for any function with that signature.”

**Sources:**

- [P. Wadler, Theorems for free!, Proceedings of FPCA 1989, ACM](https://doi.org/10.1145/99370.99404)

### Propositional truncation is localization at the map from booleans to unit

**Remember:** Make every pair of points equal, and what is left is a proposition.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18N55. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** In homotopy type theory, a proposition is a type in which any two elements are equal. A type T is local for the unique function 𝟚 → 𝟙, from the booleans to the unit type, when precomposition with this function is an equivalence. In words, every pair of elements of T comes from a single element. The propositional truncation \[A\] of a type A, also called the bracket type, is the localization of A at 𝟚 → 𝟙: the universal local type that receives a map from A.

**Problem.** \[A\] should be a proposition. Maps \[A\] → P to a proposition P should be the same as maps A → P.

**How the definition helps.** The local types for 𝟚 → 𝟙 are exactly the propositions, so the universal property of the localization is the universal property that we want. A type is local for 𝟚 → 𝟙 exactly when the diagonal map into its pairs is an equivalence. That means any two of its elements are equal, so the type is a proposition. So \[A\] is a proposition by definition, and its universal property among propositions is the universal property of the localization. The real work is the general existence of localizations, as a higher inductive type (a type given by generators that can include equalities), and the identification of local types with propositions. This is the case n = −1 of n-truncation as localization at the map from the (n+1)-sphere to the point. The step from 'local for 𝟚 → 𝟙' to 'proposition' is our own reading; the nLab states the definition and the link to n-truncation.

**nLab:** [bracket type](https://ncatlab.org/nlab/show/bracket+type), [n-truncation modality](https://ncatlab.org/nlab/show/n-truncation+modality). It says: “By definition, the type of functions (𝟙 → \[A\]) → (𝟚 → \[A\]) is an equivalence of types.”

**Sources:**

- [E. Rijke, M. Shulman, B. Spitters, Modalities in homotopy type theory, Logical Methods in Computer Science 16 (2020), arXiv:1706.07526](https://arxiv.org/abs/1706.07526)

### Relational parametricity makes Church-encoded pairs correspond exactly to ordinary pairs

**Remember:** Ask the encoded pair for both parts with the identity map.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** A Church pair of A and B is a family P indexed by sets R. For each R, it sends each map A × B → R to an element of R. Call P parametric if it preserves relations as R varies. The direct representation is an ordinary pair in A × B.

**Problem.** Every parametric Church pair is evaluation at one unique pair in A × B.

**How the definition helps.** Parametricity lets the graph of each map do the work. Let p be P applied to the identity map of A × B. For any map h from A × B to R, the identity and h are related through the graph of h. Preservation puts p and P(h) in that graph, so P(h) = h(p). This proof is our own, and Wikipedia gives the idea of parametricity. The work moves to Reynolds's abstraction theorem, which shows that typed programs are parametric.

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “Parametricity is the abstract property enjoyed by the uniformly acting families”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Relational parametricity makes every polymorphic function from X to X the identity

**Remember:** A relation with only one pair leaves no room to move.

*True by definition.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Consider a family F with one function F(X) from X to X for each set X. Call F parametric if it preserves relations. If a relation between sets X and Y holds for x and y, it must hold for F(x) and F(y). A syntactic alternative shows that every closed program of this type normalizes to the identity.

**Problem.** Every parametric family F is the identity on each set.

**How the definition helps.** Parametricity lets one tiny relation decide the output. Take x in X and the relation on X whose only pair is (x, x). Preservation forces the pair (F(x), F(x)) into this relation, so F(x) = x. This proof is our own, and Wikipedia gives the idea of parametricity. The work moves to Reynolds's abstraction theorem, which shows that typed programs are parametric.

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “parametricity is an abstract uniformity property enjoyed by parametrically polymorphic functions, which captures the intuition that all instances of a polymorphic function act the same way.”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Relational parametricity makes uniform iterators exactly the Church numerals

**Remember:** Count how often F applies successor, starting from zero.

*True by definition.* MSC 03B38 (Type theory), 68N15. arXiv cs.PL, cs.LO. Level 3: graduate.

**Definition.** Consider a family F that gives, for each set X, a function from X → X to X → X. Call F parametric if it preserves relations. If f and g send related inputs to related outputs, then F(f) and F(g) must do so too. A syntactic alternative studies closed programs of this type and their normal forms.

**Problem.** Every parametric family F acts as f ↦ fⁿ for one fixed natural number n.

**How the definition helps.** Parametricity lets one well-chosen relation replace an analysis of all programs. Let n be F applied to successor on the natural numbers, evaluated at 0. For a set X, a function f and a point x, relate k to fᵏ(x). Successor and f respect this relation, and 0 is related to x. So F(f)(x) = fⁿ(x). This proof is our own, and Wikipedia states the result. The work moves to Reynolds's abstraction theorem, which shows that typed programs are parametric.

**Wikipedia:** [Parametricity](https://en.wikipedia.org/wiki/Parametricity). It says: “the parametrically polymorphic functions of type ∀X. T(X) → T(X) are one-to-one with natural numbers.”

**Sources:**

- [John C. Reynolds, Types, abstraction, and parametric polymorphism](https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf)

### Singleton induction makes extending a value from the center hold by definition

**Remember:** A value at the center extends across the whole type.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A type family over A assigns a type to each point of A, and a section chooses a value in each. Define a contractible type as a type with a point c that satisfies singleton induction. That rule extends any value at c to a section that returns that value at c. The usual definition instead gives a path from c to every point.

**Problem.** Every type family over a contractible type has a section that takes a given value at the center.

**How the definition helps.** The theorem is the defining rule, so nothing is left to prove. The nLab gives singleton induction as one of three equivalent definitions of a contractible type. With the usual definition, our own comparison moves the value along the given paths. That section returns the given value at c only after transport along the path from c to itself. So one must first adjust the paths so that this one is reflexivity.

**nLab:** [contractible type](https://ncatlab.org/nlab/show/contractible+type). It says: “A contractible type is a pointed type which satisfies singleton induction.”

**Sources:** none listed. No primary source with a working link was found.

### Streams as a terminal coalgebra make unique stream generation true by definition

**Remember:** One output and one next state determine the whole stream.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO. Level 3: graduate.

**Definition.** A coalgebra here is a state type S with an output map S → A and a next-state map S → S. Define streams of A as the terminal coalgebra. This means that every coalgebra has exactly one structure-preserving map into it. An alternative represents a stream as a function from natural numbers to A.

**Problem.** Given an output and a next state for every state, exactly one map from states to streams respects both operations.

**How the definition helps.** Terminality is exactly the claim of existence and uniqueness, so nothing is left to prove. The nLab says that coinductive types can be defined as terminal coalgebras in homotopy type theory. Our own comparison shows that functions from natural numbers have this property. It defines the n-th entry by recursion. It proves uniqueness by induction on n and function extensionality, which says that pointwise equal functions are equal.

**nLab:** [coinductive type](https://ncatlab.org/nlab/show/coinductive+type). It says: “it is possible instead to dualize the alternative characterization of inductive types as initial algebras for a notion of coinductive types as terminal coalgebras”

**Sources:**

- [Ahrens, Capriotti and Spadotti (2015), Non-wellfounded Trees in Homotopy Type Theory, TLCA 2015, LIPIcs 38](https://doi.org/10.4230/LIPIcs.TLCA.2015.17)

### Subtypes defined by mere propositions get their equality from the underlying type

**Remember:** If proofs carry no data, only the element matters.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A mere proposition is a type with at most one element up to equality. The subtype of A cut out by P is the type ∑ x:A P(x). Its elements are pairs of an x in A and a proof of P(x).

**Problem.** Two elements of a subtype are equal when their underlying elements of A are equal. So the subtype sits inside A like a subset.

**How the definition helps.** Since P(x) has at most one element, the second part of a pair carries no information. So equality of pairs reduces to equality of first parts. If P(x) were an arbitrary type, two pairs with the same x and different proofs would be different elements (our own). For example, the type of groups with a chosen element is not a subtype of the type of groups (our own example). This is why the HoTT Book uses mere propositions for properties and subsets (our own reading). Little stays hard; in our own reading, the proof uses only the description of equality in pair types.

**nLab:** [embedding of types](https://ncatlab.org/nlab/show/embedding+of+types). It says: “with the witness that π₁ is an embedding given by the fact that the membership relation x ∈ P is a proposition for all elements x:A and material subtypes P:A → Prop.”

**Paper or page:** [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Suppose P : A → 𝒰 is a type family such that P(x) is a mere proposition for all x : A. If u, v : ∑ x:A P(x) are such that pr₁(u) = pr₁(v), then u = v.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Suspension as a higher inductive type gives the loop space adjunction

**Remember:** The basepoint meridian turns the other meridians into loops.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 55P40, 55P35. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A higher inductive type is given by point constructors and path constructors. The suspension of X has two points, north and south, and one path from north to south for each point of X. Take north as the basepoint and assume X has a basepoint. The geometric definition instead collapses each end of the cylinder X × \[0, 1\] to a point.

**Problem.** Pointed maps preserve the chosen point. Pointed maps out of the suspension correspond naturally to pointed maps from X into the space of loops at the target's chosen point.

**How the definition helps.** The mapping rule of the constructors is already the data of the adjunction, so only a basepoint correction remains. Our own proof uses that rule: a map out of the suspension is a value at each pole and a path for each meridian. The basepoint meridian identifies the south value with the north value. This turns each other meridian into a loop at the north value. Our own comparison uses the theorem that the geometric suspension has the same mapping rule up to homotopy.

**nLab:** [suspension type](https://ncatlab.org/nlab/show/suspension+type). It says: “representing the meridians from the north to the south pole”

**Sources:**

- [Univalent Foundations Program (2013), Homotopy Type Theory — Univalent Foundations of Mathematics](https://homotopytypetheory.org/book/)

### The circle as a higher inductive type has fundamental group ℤ

**Remember:** The circle is freely made from one point and one loop, and nothing else.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 03B38 (Type theory), 55Q05. arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** A higher inductive type is a type given by generators for its points and also for its identifications (paths). The circle type S¹ is the higher inductive type generated by one point base : S¹ and one identification loop : base = base. Its induction principle says that to map out of S¹, one gives a point and a loop.

**Problem.** The fundamental group of the circle is the integers. That is, the loop space Ω(S¹, base) is equivalent to ℤ.

**How the definition helps.** With the circle defined by its generators, the statement is about a type, not about a topological subspace of ℝ². So it can be proved synthetically, from the rules of homotopy type theory alone, using the univalence axiom (equivalent types are equal); Licata and Shulman did this. In our own summary of their proof, not the nLab's: the induction principle of the circle lets one build a family of types over S¹ that plays the role of the universal cover. Univalence lets the loop act on ℤ as the successor map. That argument is the real work. The nLab states that a synthetic proof exists. It does not claim that this proof is shorter than the classical one.

**nLab:** [circle type](https://ncatlab.org/nlab/show/circle+type), [higher inductive type](https://ncatlab.org/nlab/show/higher+inductive+type), [fundamental group of the circle is the integers](https://ncatlab.org/nlab/show/fundamental+group+of+the+circle+is+the+integers). It says: “Using the univalence axiom, one can prove that the loop space \`base == base\` of the circle type is equivalent to the integers.”

**Sources:**

- [Daniel R. Licata, Michael Shulman, Calculating the Fundamental Group of the Circle in Homotopy Type Theory, LICS 2013, arXiv:1301.3443](https://arxiv.org/abs/1301.3443)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### The cumulative hierarchy as a higher inductive type has extensionality built in

**Remember:** Put extensionality into the constructors, and V satisfies it by definition.

*True by definition.* MSC 03B38 (Type theory), 03E30, 03E70. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A higher inductive type is a type given by constructors for elements and also for equalities. The HoTT Book defines V this way, and one constructor forces V to be a set. One constructor makes a set from a small type A and a map f : A → V, with the values of f as elements. A path constructor makes two such sets equal when each value of one map is a value of the other, and conversely.

**Problem.** Show that V satisfies the axioms of set theory. With the axiom of choice and a universe, V is a model of ZFC. Equality in V is the same as bisimulation.

**How the definition helps.** Extensionality is one of the constructors of V, so two sets with the same elements are equal by definition. A lemma in the same chapter shows that equality in V is exactly bisimulation. Bisimulation is defined by recursion, and two sets are bisimilar when each element of either one is bisimilar to some element of the other. Another approach divides a type of well-founded trees by bisimulation; here that step is part of the definition (our own comparison). What stays hard is the rest of the axioms. In our own reading, membership must be defined by recursion on V. The book proves full separation using the axiom of choice.

**Paper or page:** [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Set Math](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “In type theory with AC and a universe 𝒰, the cumulative hierarchy V is a model of Zermelo–Fraenkel set theory with choice, ZFC.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### The HoTT axiom of choice asks for a set as index type

**Remember:** Choice is safe over sets, not over types with hidden symmetries.

*Rules out counterexamples.* MSC 03B38 (Type theory), 03E25. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** In homotopy type theory, a set is a type in which any two equalities between the same two elements are equal. The brackets ‖ ‖ turn a type into a mere proposition, so ‖Y(x)‖ says only that Y(x) has some element, without naming one. The axiom of choice takes a set X and a set Y(x) for each x. If each Y(x) has some element, then there merely exists a function that picks an element of each Y(x).

**Problem.** State the axiom of choice so that it is consistent with univalence, the axiom that equal types are the same as equivalent types. The book's next lemma shows that the statement is false if X may be any type.

**How the definition helps.** The condition that X is a set removes the index types with hidden symmetries, and these are what break choice. The next lemma in the book gives a type X and a family of sets over it for which the choice statement fails. In our own summary of the proof, X is the type of all two-element sets. Y(x) is the type of equalities from the standard one to x. Each Y(x) has some element, but a choice function would make X contractible, that is, equivalent to a point (our own). Univalence forbids this, because the swap of the two points is a nontrivial self-equality (our own). With the set condition, the axiom is consistent with univalence, but that proof needs a model (our own).

**Paper or page:** [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Logic](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “The axiom of choice is equivalent to the statement that for any set X and any Y : X → 𝒰 such that each Y(x) is a set, we have (∏ x:X ‖Y(x)‖) → ‖∏ x:X Y(x)‖.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Univalence lets you prove facts about equivalences by checking identities

**Remember:** Check the identity map, and univalence gives every equivalence.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** An equivalence A ≃ B between types is a function with an inverse up to homotopy, defined so that being an equivalence is a property. Univalence is the axiom that equalities between types are the same as equivalences between them. Precisely, the map from equalities A = B in the universe 𝒰 to equivalences A ≃ B is itself an equivalence.

**Problem.** Prove a statement D(A, B, e) for every equivalence e between two types. It is enough to prove D(A, A, id) for each identity equivalence.

**How the definition helps.** Univalence makes equivalences behave like equalities. Statements about all equalities reduce to the reflexivity case by path induction, the basic rule for using equalities in type theory. So a statement about all equivalences reduces to the identity case. For example, to show that some construction respects every equivalence, one checks that it respects the identity map, which is usually trivial (our own example). The nLab notes that equivalence induction is equal in strength to univalence. What stays hard is univalence itself: in the book it is an axiom, and its justification needs a model such as simplicial sets (our own).

**nLab:** [equivalence induction](https://ncatlab.org/nlab/show/equivalence+induction). It says: “Conversely, corollary 5.8.5 of the HoTT Book derives equivalence induction from the univalence axiom.”

**Paper or page:** [HoTT Book: Induction](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Given any type family D … and function d : ∏ A:𝒰 D(A, A, id A), there exists f : ∏ A,B:𝒰 ∏ e:A≃B D(A, B, e) such that f(A, A, id A) = d(A) for all A : 𝒰.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Univalence makes isomorphic structures equal

**Remember:** Under univalence, type identifications are equivalences; structure identifications are structure-preserving equivalences.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, math.AT. Level 3: graduate.

**Definition.** The univalence axiom is about types A and B in a universe, which is a type whose elements are types. It says that the canonical map from identifications A = B to equivalences A ≃ B is itself an equivalence. You then encode a structure such as a group as a type together with nested dependent pairs, dependent functions and identity types.

**Problem.** Two isomorphic mathematical structures, for example two isomorphic groups, should be equal. Then every property of one transfers to the other.

**How the definition helps.** Once you assume univalence, 'isomorphic groups are equal' comes close to unfolding definitions. Univalence is an axiom, not a definition. Extensionality principles for dependent functions and dependent pairs follow from it. A group structure is a telescope of such types: a sequence of types in which each type can depend on the ones before it. So an identification of two groups unfolds, step by step, into a bijection of the underlying types together with the homomorphism property. The real work moves into the axiom itself and into building models where it holds.

**nLab:** [structure identity principle](https://ncatlab.org/nlab/show/structure+identity+principle), [univalence axiom](https://ncatlab.org/nlab/show/univalence+axiom). It says: “the above extensionality principles (eq:ExtensionalityPrinciples) imply that the type of identifications of groups is equivalently that of bijections of the underlying types and equipped with the group homomorphism-property”

**Sources:**

- [Thierry Coquand, Nils Anders Danielsson, Isomorphism is equality, Indagationes Mathematicae 24 (2013) 1105–1120](https://doi.org/10.1016/j.indag.2013.09.002)
- [Benedikt Ahrens, Paige Randall North, Michael Shulman, Dimitris Tsementzis, A higher structure identity principle, LICS 2020, arXiv:2004.06572](https://arxiv.org/abs/2004.06572)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Univalent categories make fully faithful, essentially surjective functors equivalences without choice

**Remember:** In a univalent category, isomorphic objects are equal, so equality sees no more than isomorphism.

*Rules out counterexamples.* MSC 03B38 (Type theory), 18A05. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** In homotopy type theory, a precategory is a category whose objects form a type and whose maps between two objects form a set. A precategory is univalent (or saturated) if the canonical map from identifications a = b of objects to isomorphisms a ≅ b is an equivalence of types. So in a univalent category, two objects are equal in exactly as many ways as they are isomorphic.

**Problem.** A functor that is fully faithful (bijective on maps) and essentially surjective (every object is isomorphic to an image) should be an equivalence of categories.

**How the definition helps.** In a univalent domain, all preimages of an object are equal, so there is nothing to choose. For strict categories (precategories whose objects form a set) this statement is equivalent to the axiom of choice, and for precategories it is false. When the domain is a univalent category, it holds with no choice principle. The functor is fully faithful and isomorphic objects are equal, so any two preimages of an object, with their isomorphisms, are equal. So the type of preimages is a proposition (a type whose elements are all equal), and its mere existence gives an actual preimage, which defines the inverse functor. This does not cost generality: every precategory is weakly equivalent to a univalent category, its Rezk completion, built from representable presheaves. The nLab notes that one could instead keep precategories and use split essentially surjective functors, which come with chosen preimages.

**nLab:** [univalent category](https://ncatlab.org/nlab/show/univalent+category), [Rezk completion](https://ncatlab.org/nlab/show/Rezk+completion). It says: “the statement "a fully faithful and essentially surjective functor is an equivalence" for strict categories is equivalent to the axiom of choice, for precategories it is just false, and for univalent categories it is just true.”

**Sources:**

- [Benedikt Ahrens, Chris Kapulkin, Michael Shulman, Univalent categories and the Rezk completion, Mathematical Structures in Computer Science 25 (2015) 1010–1039, arXiv:1303.0584](https://arxiv.org/abs/1303.0584)
- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)

### Binder-free combinators make confluence follow from nonoverlapping rewrite rules

**Remember:** Without binders, rewriting cannot capture a free variable.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus), 68Q42. arXiv cs.LO. Level 3: graduate.

**Definition.** Combinatory logic builds terms by application from constants S and K, without any operation that binds variables. The rewrite rules are K x y → x and S x y z → x z (y z). In the lambda calculus, replacing a function’s parameter by its argument must avoid accidental binding of free variables.

**Problem.** The S and K rules are confluent. Any two terms obtained from one term by rewriting can be rewritten further to a common term.

**How the definition helps.** Removing binders makes the rules ordinary tree rewrites, with no binding to track. Each left-hand pattern uses each variable once, and the patterns overlap only where a variable can stand for any term (our own). A general rewrite theorem gives confluence under these conditions (our own). The work moves to bracket abstraction, which translates a lambda binder into combinators. The rules do not by themselves simulate arbitrary reductions inside lambda binders (our own).

**nLab:** [combinatory logic](https://ncatlab.org/nlab/show/combinatory+logic). It says: “Since this move circumvents the necessity of variable management, combinatory logic is important for applications in computer science and linguistics.”

**Wikipedia:** [Combinatory logic](https://en.wikipedia.org/wiki/Combinatory_logic). It says: “In contrast, evaluating expressions in combinatory logic is much simpler, because there is no notion of substitution.”

**Sources:** none listed. No primary source with a working link was found.

### De Bruijn indices make α-equivalence the same as equality

**Remember:** A nameless variable says how many λs back its binder is.

*True by definition.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A de Bruijn index replaces each bound variable in a λ-term by a number. The number counts the λs you pass, going outward from the variable, until you reach its binder, and it includes the binder. For example, λx. λy. x becomes λ λ 2.

**Problem.** Terms that differ only in the names of bound variables (α-equivalent terms) should be equal. Substitution should not need renaming.

**How the definition helps.** With indices, α-equivalence is the same as syntactic equality by definition. With named variables, every operation on terms must handle α-conversion (renaming of bound variables). The article calls this 'cumbersome, inefficient, and often error-prone'. De Bruijn introduced the indices for automatic manipulation of formulas. He applied them to the Church–Rosser theorem. What remains is index shifting during substitution, which is easy to get wrong in a different way (our own remark).

**Wikipedia:** [De Bruijn index](https://en.wikipedia.org/wiki/De_Bruijn_index). It says: “Terms written using these indices are invariant with respect to α-conversion, so the check for α-equivalence is the same as that for syntactic equality.”

**Sources:**

- [de Bruijn, N. G. (1972). Lambda calculus notation with nameless dummies, a tool for automatic formula manipulation, with application to the Church–Rosser theorem. Indagationes Mathematicae 34, 381–392.](https://doi.org/10.1016/1385-7258(72)90034-0)

### Parallel reduction gives a short proof of the Church–Rosser theorem

**Remember:** Reduce all chosen redexes at once, and the diamond closes in one step.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A β-redex is a subterm of the form (λx.M)N, which one β-step replaces by M with N put in for x. Parallel reduction M ⇒ M′ contracts any set of β-redexes in a term at the same time, including the empty set. Its reflexive transitive closure is the same relation as ↠β, which is β-reduction in any number of steps.

**Problem.** The Church–Rosser theorem says: if a λ-term reduces to N₁ and to N₂, then N₁ and N₂ reduce to a common term.

**How the definition helps.** Parallel reduction has the diamond property and single-step reduction does not, so the proof can tile diamonds. The diamond property means: if M ⇒ N₁ and M ⇒ N₂, then N₁ ⇒ P and N₂ ⇒ P for some term P. Single-step β-reduction lacks it, because one step can copy a redex several times (our own explanation). For parallel reduction, a simple induction on terms proves it. The relation ↠β is the transitive closure of parallel reduction, so tiling diamonds gives the Church–Rosser property of ↠β. This proof is due to Tait and Martin-Löf. Church and Rosser's 1936 proof, by 'finiteness of developments', was for the λI-calculus.

**Wikipedia:** [Church–Rosser theorem](https://en.wikipedia.org/wiki/Church%E2%80%93Rosser_theorem). It says: “We introduce a new reduction →∥ whose reflexive transitive closure is ↠β and which satisfies the diamond property.”

**Sources:**

- [Church, A. and Rosser, J. B. (1936). Some properties of conversion. Transactions of the American Mathematical Society 39, 472–482.](https://doi.org/10.1090/S0002-9947-1936-1501858-0)

### Reducibility defined by type makes strong normalization provable by induction

**Remember:** Good functions are those that send good inputs to good outputs.

*Makes the theorem clean to state or prove.* MSC 03B40 (Combinatory logic and lambda calculus), 03B38. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** In the simply typed λ-calculus, Tait defines a set of reducible terms for each type. At a base type, the reducible terms are the strongly normalizing ones, which have no infinite reduction sequence. At a function type U → V, a term t is reducible if t u is reducible at V for every reducible u at U.

**Problem.** Strong normalization says every reduction sequence of a well-typed term ends. A direct induction on terms fails, because reducing an application can create new places to reduce and larger terms.

**How the definition helps.** The predicate is strengthened at function types so that it is preserved by application, which is exactly where plain induction breaks. By induction on the type, one proves three facts. Reducible terms are strongly normalizing, reducibility is kept under reduction, and a variable or application whose one-step reducts are all reducible is itself reducible. Then the fundamental lemma, that every well-typed term is reducible, goes by induction on the term. The induction substitutes reducible terms for the free variables (our own remark). Strong normalization follows from the first fact. The method extends to System F, the λ-calculus with quantified types, using Girard's reducibility candidates (our own).

**nLab:** [logical relation](https://ncatlab.org/nlab/show/logical+relation). It says: “Although there is no precise definition, typically a logical relation (or logical predicate) corresponds to a family of (sometimes unary) relations defined by induction on types”

**Sources:**

- [W. W. Tait, Intensional interpretations of functionals of finite type I, Journal of Symbolic Logic 32 (1967) 198–212](https://doi.org/10.2307/2271658)

### Terms without head normal form, not without normal form, are meaningless

**Remember:** A term means something once its head settles.

*Rules out counterexamples.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv cs.LO, cs.PL. Level 3: graduate.

**Definition.** A λ-term is in head normal form if it has the shape λx₁…xₙ. y M₁ … Mₖ, with a variable y at the head. A term with no head normal form is called unsolvable, and is treated as meaningless. Barendregt's Böhm trees give each term a meaning, with ⊥ for the meaningless parts.

**Problem.** One wants a consistent theory of the untyped λ-calculus that makes all undefined terms equal. Church's idea, to call terms without normal form meaningless, does not work.

**How the definition helps.** A term with a head normal form can give a result when applied to suitable arguments, so only terms without one are truly useless. The page shows why lack of a normal form is the wrong test. The term X = λx.xΩ has no normal form, yet X(KI) reduces to I, while Ω(KI) only reduces to itself. Equating all terms without normal form is even inconsistent (our own; Barendregt proves it). For example, λx.xKΩ and λx.xSΩ both lack a normal form, and applying both to K would give K = S. Equating only the unsolvable terms is consistent, and Böhm trees make this precise. Having a head normal form is undecidable, as the page notes.

**Wikipedia:** [Böhm tree](https://en.wikipedia.org/wiki/B%C3%B6hm_tree). It says: “We thus see that not all non-normalizing terms are equivalent.”

**Sources:**

- [H. P. Barendregt, The type free lambda calculus, in Handbook of Mathematical Logic, North-Holland 1977, 1091–1132](https://doi.org/10.1016/S0049-237X(08)71129-7)

### Bisimulations copy the diamond clause, so bisimilar worlds satisfy the same formulas

**Remember:** Match every move both ways, and no modal formula can tell the difference.

*True by definition. Confidence: medium.* MSC 03B45 (Modal logic (including the logic of norms)), 03B42, 68Q85. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A Kripke model has worlds, accessibility relations (one per agent in epistemic logic), and a valuation of the variables at each world. A bisimulation between two models relates worlds that agree on all variables. If related worlds w₁ and w₂ are given, each successor of w₁ must be related to some successor of w₂, and conversely. The formula ◇A, 'possibly A', is true at a world when A is true at some successor.

**Problem.** Two worlds related by a bisimulation satisfy the same modal formulas.

**How the definition helps.** The two back-and-forth clauses of a bisimulation are exactly what the induction step for the possibility operator ◇ needs (our own). The variable clause handles atomic formulas, and the connectives pass through (our own). So the theorem is a direct induction on formulas. Isomorphism would be too strict (our own example). A world with one successor and a world with two identical successors satisfy the same formulas, but they are not isomorphic. The converse is the hard part (our own). By the Hennessy–Milner theorem, it holds when each world has finitely many successors, but it fails in general.

**Paper or page:** [Open Logic Project: Applied Modal Logic: Epistemic Logic](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If ⟨M₁, w₁⟩ ↔︎ ⟨M₂, w₂⟩, then for every formula A, we have that M₁, w₁ ⊩ A iff M₂, w₂ ⊩ A.”

**Sources:**

- [The Open Logic Project, The Open Logic Text (complete build)](https://builds.openlogicproject.org/open-logic-complete.pdf)

### Necessity and possibility as base change give the S5 modal laws

**Remember:** Necessary means true in every world, possible means true in some world.

*True by definition. Confidence: medium.* MSC 03B45 (Modal logic (including the logic of norms)), 03G30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Let W be a type of possible worlds, and let P be a proposition that depends on a world w : W. Necessity □P means 'for all w in W, P', and possibility ◇P means 'there is w in W with P'. Each result is pulled back again, so that it depends on W, but trivially. These operations come from the adjoint triple ∃ ⊣ W\* ⊣ ∀ of base change along the map W → ∗ to the one-point type. Here W\* turns a proposition into one that ignores the world, and F ⊣ G means that F is left adjoint to G.

**Problem.** The modal laws of S5 Kripke semantics hold; in S5, the relation 'world v is possible from world w' is an equivalence relation. Examples are □P → P, □P → □□P, P → ◇P and ◇P → □◇P, and □ preserves implication.

**How the definition helps.** The adjunctions make □ a comonad and ◇ a monad, and their structure maps are the S5 laws. □ = W\* ∘ ∀ is the composite of an adjoint pair, so it is a comonad. In the same way, ◇ = W\* ∘ ∃ is a monad, and ◇ ⊣ □. The counit □P → P is axiom T, the unit P → ◇P is its dual, and the comultiplication □P → □□P is axiom 4. ◇P depends only trivially on the world, so it implies its own value in all worlds: ◇P → □◇P, which is axiom 5. The nLab says the S5 modal operators are exactly those that come from base change along the quotient map of a Kripke frame. It notes that this is obvious but rarely written down. The check of each axiom above is our own reading.

**nLab:** [necessity and possibility](https://ncatlab.org/nlab/show/necessity+and+possibility), [S5 modal logic](https://ncatlab.org/nlab/show/S5+modal+logic). It says: “it is just the interpretation of the universal quantifier "for all" ∀ and of the existential quantifier "there exists" ∃.”

**Sources:**

- [Steve Awodey, Category Theory, Oxford University Press (2006), p. 279](https://doi.org/10.1093/acprof:oso/9780198568612.001.0001)
- [Gavin M. Bierman, Valeria de Paiva, On an intuitionistic modal logic, Studia Logica 65 (2000) 383–416](https://doi.org/10.1023/A:1005291931660)

### Defining types as ultrafilters of formulas makes the type space compact

**Remember:** Types are ultrafilters, and spaces of ultrafilters are always compact.

*True by definition.* MSC 03C07 (Basic properties of first-order languages and structures), 06E15. arXiv math.LO. Level 3: graduate.

**Definition.** Take the formulas in variables x, and identify two formulas that the theory T proves equivalent. These classes form a Boolean algebra. A complete type is an ultrafilter on this algebra, a consistent set that contains each formula or its negation. A basic open set consists of the types that contain a fixed formula.

**Problem.** The space of complete types of a first-order theory is compact.

**How the definition helps.** With this definition, the type space is the Stone space of a Boolean algebra, its space of ultrafilters, and every Stone space is compact. The nLab says that the type space inherits this topology by Stone duality, the match between Boolean algebras and such spaces. Compactness of a Stone space comes from the ultrafilter lemma, which extends every proper filter to an ultrafilter, in our own account. Suppose a type is instead the set of formulas that a tuple satisfies in some model. Then compactness needs the compactness theorem of logic, in our own account. The two definitions agree by the completeness theorem, in our own account. So the work moves into the ultrafilter lemma and that agreement.

**nLab:** [type (in model theory)](https://ncatlab.org/nlab/show/type+%28in+model+theory%29). It says: “By Stone duality, the set of all complete x-types of a theory T inherits a Stone topology”

**Sources:** none listed. No primary source with a working link was found.

### The elementary diagram turns elementary embeddings into models of one theory

**Remember:** Name every element, then record every true sentence about the names.

*Makes the theorem clean to state or prove.* MSC 03C07 (Basic properties of first-order languages and structures), 03C30. arXiv math.LO. Level 3: graduate.

**Definition.** Let M be a structure. Add a new constant symbol for each element of M. The elementary diagram of M is the set of all sentences in this larger language that are true in M.

**Problem.** Let N be a structure for the larger language. N is a model of the elementary diagram of M exactly when the map sending each element to its named value is an elementary embedding. An elementary embedding is a map that preserves and reflects every first-order formula.

**How the definition helps.** The diagram lists every true formula about the named elements, so a model of it satisfies them by definition. The nLab states that a model of the elementary diagram contains M as an elementary substructure. The sentences saying that distinct names are unequal make the map injective, in our own unpacking. Without the diagram, an elementary embedding is a map with a condition on every formula, which is not a first-order theory. With the diagram, the compactness theorem applies to elementary extensions, in our own account. For example, add a type over M, a set of formulas about one new element. This builds an elementary extension that contains such an element, in our own example.

**nLab:** [diagram of a first-order structure](https://ncatlab.org/nlab/show/diagram+of+a+first-order+structure). It says: “The elementary diagram of M, written EDiag(M), is the set of all ℒ-sentences possibly using constants cₘ which are true in M”

**Sources:** none listed. No primary source with a working link was found.

### Existentially closed fields make the weak Nullstellensatz almost a definition

**Remember:** Solvable somewhere means solvable here, in an algebraically closed field.

*True by definition. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics), 03C60, 14A10. arXiv math.LO, math.AC. Level 3: graduate.

**Definition.** A model M of a theory T is existentially closed if this holds. An existential statement with parameters from M that is true in some extension of M modelling T is already true in M. Robinson called a theory model complete if every embedding between its models is elementary, that is, preserves all first-order truths.

**Problem.** Hilbert's weak Nullstellensatz: polynomials over an algebraically closed field K that generate a proper ideal have a common zero in K.

**How the definition helps.** Existential closedness turns 'has a zero in some larger field' into 'has a zero in K'. A proper ideal of K\[x₁, …, xₙ\] lies in a maximal ideal m. The field K\[x₁, …, xₙ\]/m extends K and contains a common zero. So existential closedness puts a zero in K (our own outline of Robinson's proof). The work moves into a different theorem: the existentially closed fields are exactly the algebraically closed ones. This follows from model completeness of algebraically closed fields, which comes from quantifier elimination. The page lists algebraically closed fields as the model completion of the theory of fields.

**Wikipedia:** [Existentially closed model](https://en.wikipedia.org/wiki/Existentially_closed_model), [Model complete theory](https://en.wikipedia.org/wiki/Model_complete_theory). It says: “If A is a subfield of B, then A is existentially closed in B if and only if every system of polynomials over A that has a solution in B also has a solution in A.”

**Sources:**

- [Robinson, A. (1956). Complete Theories. Studies in Logic and the Foundations of Mathematics, North-Holland, Amsterdam.](https://doi.org/10.1016/S0049-237X(08)X7071-5)

### Naming every orbit of an oligomorphic group gives quantifier elimination

**Remember:** Name the orbits, and every formula becomes a finite list of names.

*True by definition. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics), 03C35, 20B07. arXiv math.LO. Level 3: graduate.

**Definition.** A permutation group on a countable set is oligomorphic if it has finitely many orbits on n-tuples for each n. Its canonical structure has one relation symbol for each such orbit. This replaces a smaller, hand-chosen set of basic relations.

**Problem.** The theory of the canonical structure of an oligomorphic permutation group eliminates quantifiers. That is, every formula is equivalent to a formula without quantifiers.

**How the definition helps.** Every formula defines a finite union of named orbits, so a disjunction of those names is the equivalent formula, in our own argument. The formula defines a union of orbits because each permutation in the group preserves every orbit relation, in our own argument. There are finitely many orbits on n-tuples, so the union is finite, in our own argument. The nLab states that this canonical structure is ω-categorical, which means its theory has exactly one countably infinite model up to isomorphism. With a smaller choice of basic relations, quantifier elimination needs work, in our own account. For example, the rational numbers with only their order need an argument that extends finite partial isomorphisms step by step, in our own example.

**nLab:** [omega-categorical structure](https://ncatlab.org/nlab/show/omega-categorical+structure). It says: “The canonical (orbit) structure induced by an oligomorphic (finitely many orbits in each power) permutation group on a countable set is ω-categorical.”

**Sources:** none listed. No primary source with a working link was found.

### Substructure completeness is a semantic test for quantifier elimination

**Remember:** Fix a substructure, and all models that contain it agree on everything.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C10 (Quantifier elimination, model completeness, and related topics). arXiv math.LO. Level 3: graduate.

**Definition.** A first-order theory T is substructure complete if the following holds for every model M of T and every substructure A ⊆ M. Take T together with the quantifier-free diagram of A (the quantifier-free facts about the elements of A). This theory describes the models of T into which A embeds, and it must be complete.

**Problem.** Prove quantifier elimination for T: every formula is equivalent in T to a quantifier-free formula.

**How the definition helps.** Substructure completeness is a statement about models, so you can check it with model-theoretic tools. Quantifier elimination, by contrast, is a syntactic statement about all formulas. In our own reading, this is how quantifier elimination is often proved in practice, for example for algebraically closed fields and dense linear orders. The nLab lists these examples only as consequences of quantifier elimination. The real content is the theorem that the two conditions are equivalent. Its proof uses the compactness theorem to turn the semantic condition into an explicit quantifier-free equivalent. The page notes that substructure completeness implies the weaker model completeness (every embedding between models of T is elementary).

**nLab:** [substructure complete theory](https://ncatlab.org/nlab/show/substructure+complete+theory). It says: “One wants an equivalent and purely semantic characterization of quantifier elimination.”

**Sources:**

- [David Marker, Model Theory: An Introduction, Graduate Texts in Mathematics 217, Springer, 2002 (theorem 3.14 as cited by the nLab)](https://doi.org/10.1007/b98860)

### Defining an ultraproduct as a colimit gives it first-order structure for free

**Remember:** Each symbol has finitely many arguments, so it passes through the gluing.

*True by definition.* MSC 03C20 (Ultraproducts and related constructions), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** An ultrafilter U is a family of index sets, closed under supersets and finite intersections, with exactly one of each set and its complement. For each set A in U, take the product of the structures over the indices in A. The ultraproduct is the filtered colimit of these products, a gluing in which two tuples become equal if they agree on some set in U. The usual definition takes the quotient of the full product by agreement on a set in U.

**Problem.** An ultraproduct of structures for one first-order language carries a canonical structure for that language.

**How the definition helps.** Under the colimit definition, the structure comes for free because filtered colimits of sets commute with finite limits, as the nLab says. Each function or relation symbol has finite arity, so finite products and subsets describe it. Each product over a set in U carries the structure coordinate by coordinate. With the quotient definition, one checks by hand that each operation respects agreement on a set in U, in our own account. The work moves into the general theorem that filtered colimits commute with finite limits in sets. Matching the colimit with the quotient of the full product needs every factor to be nonempty, in our own account.

**nLab:** [ultraproduct](https://ncatlab.org/nlab/show/ultraproduct). It says: “since the taking of filtered colimits commutes with finite limits in Set, we get a canonically induced structure on the ultraproduct”

**Sources:** none listed. No primary source with a working link was found.

### One conclusion per Horn clause lets reduced products preserve it

**Remember:** A filter keeps finitely many premises true together on one large set.

*Rules out counterexamples.* MSC 03C20 (Ultraproducts and related constructions), 08C15. arXiv math.LO. Level 3: graduate.

**Definition.** A universal Horn sentence says that for all x, if finitely many atomic formulas hold, then one atomic formula holds. The conclusion may also be false, which forbids the premises from holding together. A reduced product uses a proper filter, a family of index sets closed under supersets and finite intersections that does not contain the empty set. An atomic formula holds in the reduced product when the set of coordinates where it holds lies in the filter.

**Problem.** A universal Horn sentence that is true in every factor is true in their reduced product.

**How the definition helps.** The premises hold on a common set in the filter, so the single conclusion holds there too, in our own argument. For a false conclusion, the intersection would be empty, which a proper filter excludes, in our own argument. Two alternative conclusions are not preserved, in our own counterexample: take a one-element structure where only P holds and another where only Q holds. The sentence ∀x (P(x) ∨ Q(x)) holds in both but fails in their direct product. A direct product is the reduced product by the filter containing only the whole index set. Wikipedia states the converse, that Horn sentences are exactly the sentences preserved under reduced products. That converse is the deep theorem, in our own account.

**Wikipedia:** [Horn clause](https://en.wikipedia.org/wiki/Horn_clause). It says: “From the model-theoretical point of view, Horn sentences are important since they are exactly (up to logical equivalence) those sentences preserved under reduced products”

**Sources:**

- [Alfred Horn, On sentences which are true of direct unions of algebras (1951)](https://doi.org/10.2307/2268661)

### Ultrafilters make Łoś's theorem hold for every first-order formula

**Remember:** An ultrafilter decides every subset, so the ultraproduct decides every formula.

*Rules out counterexamples. Confidence: medium.* MSC 03C20 (Ultraproducts and related constructions). arXiv math.LO. Level 3: graduate.

**Definition.** A filter on a set X is a collection of subsets of X that does not contain the empty set and is closed under finite intersections and supersets. An ultrafilter is a filter such that, for every subset A, either A or its complement belongs to it. An ultraproduct of a family of structures identifies two families of elements when they agree on a set in the ultrafilter.

**Problem.** Łoś's theorem says: a first-order formula holds in an ultraproduct exactly when it holds in a 'large' set of factors, that is, a set in the ultrafilter. In particular, an ultrapower of a model of a theory T is again a model of T. (An ultrapower is an ultraproduct of copies of one structure.)

**How the definition helps.** Only the disjunction step needs the ultrafilter condition, and the other steps work for any proper filter. For any proper filter, the reduced product (the same quotient, taken with that filter) is well defined. It preserves finite limits, because filtered colimits commute with finite limits. It also preserves the empty set and quotients, and the last step uses the axiom of choice. Disjunction needs the ultrafilter condition, because a product of disjoint sums must collapse to one summand on a large set. The nLab proof shows that the ultraproduct functor is a pretopos morphism (a functor that keeps the structure used to interpret first-order logic), and only the disjoint-sum step uses that the filter is maximal. So maximality extends the theorem from formulas built with ∧, ∃ and = to formulas with ∨ and ¬, and so to all first-order formulas.

**nLab:** [ultrapower](https://ncatlab.org/nlab/show/ultrapower), [Łoś ultraproduct theorem](https://ncatlab.org/nlab/show/%C5%81o%C5%9B+ultraproduct+theorem). It says: “Here one needs all of the ultrafilter conditions, in particular one needs condition 4 in order to accommodate satisfaction of formulas involving instances of negation.”

**Sources:**

- [Hisashi Aratake, Sheaves of Structures, Heyting-Valued Structures, and a Generalization of Łoś's Theorem, 2020, arXiv:2012.04317](https://arxiv.org/abs/2012.04317)

### Skolem functions turn the downward Löwenheim–Skolem theorem into a closure argument

**Remember:** Close a small set under witness-choosing functions and it becomes an elementary substructure.

*True by definition.* MSC 03C30 (Other model constructions), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** For each formula φ(y, x₁, …, xₙ), a Skolem function fᵩ picks a witness y for given x₁, …, xₙ. It does so whenever a witness exists in the model M. The Skolem hull of a subset A of M is the smallest set containing A and closed under all these functions.

**Problem.** The downward Löwenheim–Skolem theorem: every structure M has an elementary substructure containing a given set A, of size at most \|A\| + \|σ\| + ℵ₀. Here σ is the language. An elementary substructure is a substructure with the same first-order truths about its elements.

**How the definition helps.** The hull contains a witness for every existential statement with parameters in it, so the Tarski–Vaught test makes it elementary. Counting the functions bounds its size. Löwenheim's 1915 proof is usually seen as faulty. Skolem gave a correct proof in 1920 with what became Skolem normal form. The page notes that the choice of Skolem functions needs the axiom of choice. Skolem showed in 1922 how to get a weaker version without choice.

**Wikipedia:** [Löwenheim–Skolem theorem](https://en.wikipedia.org/wiki/L%C3%B6wenheim%E2%80%93Skolem_theorem), [Skolem normal form](https://en.wikipedia.org/wiki/Skolem_normal_form). It says: “The trick used in this proof is essentially due to Skolem, who introduced function symbols for the Skolem functions fᵩ into the language.”

**Sources:**

- [Löwenheim, L. (1915). Über Möglichkeiten im Relativkalkül. Mathematische Annalen 76, 447–470.](https://doi.org/10.1007/BF01458217)

### Counting models of one cardinality makes Morley's theorem statable

**Remember:** Fix the size first, then ask whether the model is unique.

*Makes the theorem clean to state or prove.* MSC 03C35 (Categoricity and completeness of theories), 03C45. arXiv math.LO. Level 3: graduate.

**Definition.** Veblen (1904) called a theory categorical if all its models are isomorphic. A theory is κ-categorical if it has exactly one model of cardinality κ, up to isomorphism.

**Problem.** Morley's theorem says: a countable first-order theory that is categorical in one uncountable cardinal is categorical in every uncountable cardinal.

**How the definition helps.** Veblen's notion is empty for first-order theories with infinite models, so the size must be fixed before uniqueness can mean anything. With κ-categoricity, Łoś could ask his question and Morley could answer it. For example, algebraically closed fields of characteristic 0 are categorical in every uncountable size but not in size ℵ₀ (our own example). The proof of Morley's theorem remains deep. It created stability theory, with Morley rank and totally transcendental theories.

**Wikipedia:** [Categorical theory](https://en.wikipedia.org/wiki/Categorical_theory). It says: “By the upward Löwenheim–Skolem theorem, if a first-order theory has a model of infinite cardinality κ, then it has a model of any cardinality κ' &gt; κ. So it cannot be categorical.”

**Sources:**

- [Morley, M. (1965). Categoricity in power. Transactions of the American Mathematical Society 114, 514–538.](https://doi.org/10.1090/S0002-9947-1965-0175782-0)
- [Łoś, J. (1954). On the categoricity in power of elementary deductive systems and some related problems. Colloquium Mathematicum 3, 58–62.](https://doi.org/10.4064/cm-3-1-58-62)

### With no finite models, categoricity in one size gives completeness

**Remember:** Finite models escape Löwenheim–Skolem, so they must be ruled out.

*Rules out counterexamples.* MSC 03C35 (Categoricity and completeness of theories). arXiv math.LO. Level 3: graduate.

**Definition.** A theory is complete if it proves each sentence or its negation. The Łoś–Vaught test asks for a satisfiable theory with no finite model. The theory must be κ-categorical for some infinite κ at least the size of the language.

**Problem.** Show that theories like dense linear orders without endpoints, or algebraically closed fields of a fixed characteristic, are complete.

**How the definition helps.** Without finite models, every model can be moved to size κ while keeping its truths, and there it is unique. Finite models cannot be moved to a larger size, so they could disagree with the infinite ones. Counterexample (our own): the empty theory in the language of equality is categorical in every infinite size. But it is not complete, because it does not decide whether there are exactly two elements. Adding 'there are at least n elements' for every n gives the complete theory of infinite sets. The work moves into checking categoricity for each theory.

**Wikipedia:** [Łoś–Vaught test](https://en.wikipedia.org/wiki/%C5%81o%C5%9B%E2%80%93Vaught_test), [Categorical theory](https://en.wikipedia.org/wiki/Categorical_theory). It says: “Therefore, the theory is complete as all models are equivalent. The assumption that the theory have no finite models is necessary.”

**Sources:**

- [Łoś, J. (1954). On the categoricity in power of elementary deductive systems and some related problems. Colloquium Mathematicum 3, 58–62.](https://doi.org/10.4064/cm-3-1-58-62)
- [Vaught, R. L. (1954). Applications of the Löwenheim–Skolem–Tarski theorem to problems of completeness and decidability. Indagationes Mathematicae 16, 467–472.](https://doi.org/10.1016/S1385-7258(54)50058-2)

### Craig interpolation gives Beth definability as a corollary

**Remember:** Interpolate between two copies of a definition, and get an explicit definition.

*True by definition. Confidence: medium.* MSC 03C40 (Interpolation, preservation, definability), 03B45. arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A logic has Craig interpolation if, whenever φ entails ψ, some formula θ in their shared symbols fits between them. That is, φ entails θ, and θ entails ψ. It has Beth definability if every symbol p that a formula φ fixes implicitly also has an explicit definition without p. Fixing p implicitly means that two models of φ that agree on all other symbols also agree on p.

**Problem.** Beth definability says that implicit definitions can always be made explicit. A direct proof of this for each logic is not obvious (our own remark).

**How the definition helps.** With interpolation as the property, Beth definability follows in a few lines. Copy the formula φ(p) as φ(q) with a new symbol q (our own sketch). Implicit definability says that φ(p) and φ(q) together entail p → q. Put φ(p) and p on one side and φ(q) → q on the other (our own sketch). An interpolant θ uses neither p nor q, and it is the explicit definition (our own sketch). Craig gave this argument in his 1957 paper (our own remark). The work then moves into interpolation itself, which for propositional dynamic logic needed a long tableau proof (our own remark).

**Paper or page:** [Interpolation for the two-way modal mu-calculus](https://arxiv.org/abs/2505.12899v3), [Propositional Dynamic Logic has Craig Interpolation: a tableau-based proof](https://arxiv.org/abs/2503.13276v1). It says: “The two-way modal μ-calculus has the Craig interpolation property and, as a corollary, the Beth definability property.”

**Sources:**

- [Interpolation for the two-way modal mu-calculus, arXiv:2505.12899 (2025)](https://arxiv.org/abs/2505.12899v3)
- [William Craig, Three uses of the Herbrand-Gentzen theorem in relating model theory and proof theory, Journal of Symbolic Logic 22 (1957)](https://doi.org/10.2307/2963594)

### Defining definable closure as the smallest closed set makes it idempotent

**Remember:** Closing a set twice adds nothing the second time.

*True by definition.* MSC 03C40 (Interpolation, preservation, definability), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** A set of elements of a model is definably closed if it is closed under functions definable without parameters. A function is definable if a formula defines its graph, and a function with no inputs is a definable constant. The definable closure of A is the smallest definably closed set that contains A. Another definition takes the elements that are the unique solution of a formula with parameters from A.

**Problem.** The definable closure of the definable closure of A equals the definable closure of A.

**How the definition helps.** The smallest closed set containing an already closed set is that set itself, so idempotence holds by definition, in our own argument. The nLab defines definable closure as this smallest set. An intersection of definably closed sets is definably closed, so a smallest one exists, in our own argument. With the unique-solution definition, idempotence needs a proof, in our own account. That proof joins the defining formulas and quantifies over the intermediate elements, in our own account. The same work appears when one shows that the two definitions agree, in our own account.

**nLab:** [definable set](https://ncatlab.org/nlab/show/definable+set). It says: “there is the minimal definably closed subset B such that A ⊂ B ⊂ M, the definable closure B = dcl(A) of A”

**Sources:** none listed. No primary source with a working link was found.

### Ehrenfeucht–Fraïssé games turn inexpressibility into a winning strategy

**Remember:** If Duplicator survives n rounds, no n-quantifier sentence tells the structures apart.

*Makes the theorem clean to state or prove.* MSC 03C40 (Interpolation, preservation, definability), 03C13. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** In the n-round game on structures A and B, Spoiler picks an element in either structure each round, and Duplicator answers in the other. Duplicator wins if the chosen elements satisfy the same atomic formulas in both structures.

**Problem.** Show that a property is not first-order definable. A standard example is that 'the finite linear order has even length' is not first-order.

**How the definition helps.** A winning strategy for Duplicator in n rounds means that the two structures agree on all sentences with n nested quantifiers. So inexpressibility becomes a combinatorial game. Our own example: linear orders of lengths at least 2ⁿ cannot be told apart in n rounds, so parity of length is not definable. The finite language condition is needed for the converse. Finding the winning strategy is the remaining work.

**Wikipedia:** [Ehrenfeucht–Fraïssé game](https://en.wikipedia.org/wiki/Ehrenfeucht%E2%80%93Fra%C3%AFss%C3%A9_game). It says: “It is easy to prove that if Duplicator wins this game for all finite n, that is, 𝔄 ∼ 𝔅, then 𝔄 and 𝔅 are elementarily equivalent.”

**Sources:**

- [Ehrenfeucht, A. (1961). An application of games to the completeness problem for formalized theories. Fundamenta Mathematicae 49, 129–141.](https://doi.org/10.4064/fm-49-2-129-141)

### Shelah's construction adds every definable quotient, so imaginaries are eliminated

**Remember:** Every definable quotient can be coded by a tuple of ordinary elements.

*True by definition. Confidence: medium.* MSC 03C45 (Classification theory, stability, and related concepts in model theory), 03C40. arXiv math.LO. Level 3: graduate.

**Definition.** A first-order theory T has elimination of imaginaries if a tuple can code each definable set X. That is, there are a formula ψ(x, y) and a tuple c such that X is the set of m with ψ(m, c), and c is the only parameter that gives X. Shelah's theory T<sup>eq</sup> adds a new sort X/E and a projection from X to X/E for every definable equivalence relation E on a definable set X. A sort is a separate kind of element in a many-sorted language.

**Problem.** Classify definable objects up to automorphism, for example with a Galois theory of definably closed extensions. In stability theory, also count the models of a theory.

**How the definition helps.** T<sup>eq</sup> contains every quotient by construction, so it eliminates imaginaries automatically. In a general theory, quotients by definable equivalence relations are not definable sets. So the match between equivalence relations and surjections fails. T<sup>eq</sup> adds all such quotients, and it does so conservatively, so it proves no new statements about T. It is also universal among the theories that interpret T and eliminate imaginaries. Poizat showed that elimination of imaginaries gives a Galois theory in terms of closed subgroups of a profinite automorphism group. Makkai identified T<sup>eq</sup> with the pretopos completion of the syntactic category of T.

**nLab:** [elimination of imaginaries](https://ncatlab.org/nlab/show/elimination+of+imaginaries). It says: “Shelah found he needed to eliminate imaginaries in a universal way, so he found a way to conservatively interpret each theory T in a theory Tᵉᵠ which eliminated all the imaginaries of T.”

**Sources:**

- [Bruno Poizat, Une théorie de Galois imaginaire, Journal of Symbolic Logic 48 no. 4 (1983) 1151–1170](https://doi.org/10.2307/2273680)

### Strong minimality holds in every extension, so models are classified by dimension

**Remember:** Minimal in every extension means one number, the dimension, decides the model.

*Rules out counterexamples. Confidence: medium.* MSC 03C45 (Classification theory, stability, and related concepts in model theory), 03C35. arXiv math.LO. Level 3: graduate.

**Definition.** A structure is minimal if it is infinite and every subset of it that is definable with parameters is finite or cofinite. A definable set is strongly minimal if this stays true in every elementary extension, a larger structure with the same first-order truths about old elements.

**Problem.** A model of a strongly minimal theory is determined up to isomorphism by one cardinal, its dimension. So such a theory in a countable language is categorical in every uncountable cardinality.

**How the definition helps.** Because the condition survives extensions, algebraic closure gives a well-behaved dimension, like a basis of a vector space. The excluded case is a minimal structure whose elementary extensions are not minimal. Our own example: (ℕ, &lt;) is minimal. But an elementary extension has an infinite element a, and the elements below a form an infinite, coinfinite set. The page notes this cannot happen for o-minimality, where the whole theory is automatically o-minimal. The proof that dimension determines the model is Baldwin and Lachlan's work.

**Wikipedia:** [Strongly minimal theory](https://en.wikipedia.org/wiki/Strongly_minimal_theory), [O-minimal theory](https://en.wikipedia.org/wiki/O-minimal_theory). It says: “It is called a strongly minimal set if this is true even in all elementary extensions.”

**Sources:**

- [Baldwin, J. T.; Lachlan, A. H. (1971). On strongly minimal sets. Journal of Symbolic Logic 36, 79–96.](https://doi.org/10.2307/2271517)

### In a monster model, types become orbits of automorphisms

**Remember:** The monster realizes every small situation and extends every small symmetry.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)). arXiv math.LO. Level 3: graduate.

**Definition.** Let T be a complete first-order theory. A monster model of T is a model 𝕄 of a large cardinality κ with two properties. It is κ-saturated: it realizes every type over a set of parameters of size less than κ. It is κ-homogeneous: every elementary map between small subsets extends to an automorphism of 𝕄.

**Problem.** Work with the types, models and definable sets of T without a change of model or a new elementary extension at each step.

**How the definition helps.** Every small model of T embeds elementarily into the monster, so you can work inside one fixed structure. Two tuples have the same type over a small set A exactly when an automorphism of 𝕄 that fixes A moves one tuple to the other. So a notion from syntax becomes a notion from geometry. Compactness and saturation also give this: a small family of definable sets with the finite intersection property has a nonempty intersection. The cost is an assumption about size, often an inaccessible cardinal, or a model that is a proper class.

**nLab:** [monster model](https://ncatlab.org/nlab/show/monster+model), [type (in model theory)](https://ncatlab.org/nlab/show/type+%28in+model+theory%29). It says: “The most important aspects of monster models are saturation and homogeneity: all types over parameter sets of a certain size are realized, and all elementary embeddings of subsets can be extended to automorphisms.”

**Sources:**

- [John Baldwin, The Monster Model (notes)](http://homepages.math.uic.edu/~jbaldwin/pub/monster.pdf)

### Saturation uses parameter sets smaller than the model, or nothing is saturated

**Remember:** A model cannot realize the type that says 'I differ from everything here'.

*Rules out counterexamples.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)). arXiv math.LO. Level 3: graduate.

**Definition.** A type over a set A is a consistent set of formulas, with parameters from A, that describes a possible element. A model M is κ-saturated if it realizes every complete type over every parameter set of size less than κ. M is saturated if it is \|M\|-saturated.

**Problem.** Saturated models should exist and be unique for their size. Any two saturated models of a complete theory with the same cardinality should be isomorphic.

**How the definition helps.** Small parameter sets make saturation possible, and then a back-and-forth argument gives uniqueness. The excluded counterexample is the type {x ≠ m : m ∈ M}, which is consistent by compactness but never realized in M. The page also explains why parameters are allowed at all: types without parameters give weak saturation, which is too weak. The uniqueness proof is our own summary of Morley and Vaught. Existence of saturated models still needs set-theoretic assumptions or stability.

**Wikipedia:** [Saturated model](https://en.wikipedia.org/wiki/Saturated_model). It says: “The reason we only require parameter sets that are strictly smaller than the model is trivial: without this restriction, no infinite model is saturated.”

**Sources:**

- [Morley, M.; Vaught, R. (1962). Homogeneous universal models. Mathematica Scandinavica 11, 37–57.](https://doi.org/10.7146/math.scand.a-10648)

### The omitting types theorem needs a countable language and a non-isolated type

**Remember:** One formula forces a type to appear; without it, a countable model avoids it.

*Rules out counterexamples. Confidence: medium.* MSC 03C50 (Models with special properties (saturated, rigid, etc.)), 03C07. arXiv math.LO. Level 3: graduate.

**Definition.** A type p is isolated if one formula consistent with the theory implies every formula in p. A model omits p if no tuple in it satisfies all formulas of p.

**Problem.** In a countable language, a type that is not isolated is omitted by some countable model. This is used to build prime and atomic models.

**How the definition helps.** In a complete theory, every model realizes an isolated type, so non-isolated is exactly the right condition (the page). The countable language lets a Henkin construction handle each formula in turn. The counterexample with an uncountable language is our own, a standard textbook exercise. Take ℵ₁ constants cᵢ, countably many constants dₙ, and the theory that says only that the cᵢ are distinct. The type {x ≠ dₙ : n ∈ ℕ} is not isolated, since a formula names only finitely many dₙ. Yet every model realizes it, because some cᵢ is not any dₙ. The proof itself is a careful Henkin construction.

**Wikipedia:** [Type (model theory)](https://en.wikipedia.org/wiki/Type_%28model_theory%29). It says: “The omitting types theorem says that conversely if p is not isolated then there is a countable model omitting p (provided that the language is countable).”

**Sources:** none listed. No primary source with a working link was found.

### O-minimal structures give a topology without pathological sets

**Remember:** In an o-minimal structure, every definable subset of the line is as simple as possible.

*Rules out counterexamples. Confidence: low.* MSC 03C64 (Model theory of ordered structures; o-minimality). arXiv math.LO. Level 3: graduate.

**Definition.** Take a structure on a dense linear order (R, &lt;) without endpoints. A set is definable if a first-order formula in the language of the structure, with parameters, describes it. The structure is o-minimal if its definable subsets of R are exactly the finite unions of points and open intervals; the intervals may be unbounded. The model example is the semialgebraic sets over ℝ, which are the sets described by polynomial equations and inequalities.

**Problem.** Grothendieck hoped for a 'tame topology': a setting for geometry and topology without pathological objects.

**How the definition helps.** The condition restricts only subsets of the line, but the nLab notes that 'quite a lot' can then be said about definable sets in all dimensions. People have proposed o-minimality as an axiomatic approach to Grothendieck's tame topology. Tame topology aims to exclude pathologies such as space-filling curves and the Banach–Tarski paradox. The nLab does not state the structure theorems. The main one, from the literature, is the cell decomposition theorem: every definable subset of Rⁿ is a finite union of simple pieces called cells. That theorem is the real content, and it is hard work. O-minimality also has applications in number theory through the Pila–Wilkie theorem.

**nLab:** [o-minimal structure](https://ncatlab.org/nlab/show/o-minimal+structure), [tame topology](https://ncatlab.org/nlab/show/tame+topology). It says: “avoids 'pathological' objects like space-filling curves or counter-intuitive results like the Banach-Tarski paradox that occur in the traditional approach.”

**Sources:**

- [Lou van den Dries, Tame Topology and O-minimal Structures, London Mathematical Society Lecture Note Series 248, Cambridge University Press (1998)](https://doi.org/10.1017/CBO9780511525919)

### Requiring interval endpoints in the structure gives o-minimal sets their suprema

**Remember:** A bounded finite union of intervals has a last right endpoint.

*Rules out counterexamples.* MSC 03C64 (Model theory of ordered structures; o-minimality). arXiv math.LO. Level 3: graduate.

**Definition.** An ordered structure is o-minimal if every definable subset of the line is a finite union of points and open intervals. The endpoints of the intervals lie in the structure or are ±∞. A weaker notion, weak o-minimality, allows finite unions of convex sets instead.

**Problem.** In an o-minimal structure, every nonempty definable set that is bounded above has a least upper bound.

**How the definition helps.** Because the endpoints lie in the structure, the supremum is the largest right endpoint or the largest isolated point, in our own argument. A convex set need not have its endpoints in the structure, so the weaker definition loses this. Wikipedia gives the example of the ordered field of real algebraic numbers with a new predicate for the numbers between 0 and π. Wikipedia states that this structure is weakly o-minimal but not o-minimal. The predicate defines a bounded set with no supremum in the structure, because π is not algebraic, in our own remark. So the work moves into proving that a given structure is o-minimal, in our own account. For the real algebraic numbers, Tarski's theorem that every formula is equivalent to one without quantifiers does this, in our own account.

**Wikipedia:** [O-minimal theory](https://en.wikipedia.org/wiki/O-minimal_theory), [Weakly o-minimal structure](https://en.wikipedia.org/wiki/Weakly_o-minimal_structure). It says: “there are finitely many open intervals I₁,…,Iᵣ in M ∪ {±∞} and a finite set X₀ such that”

**Sources:**

- [Anand Pillay and Charles Steinhorn, Definable sets in ordered structures. I (1986)](https://doi.org/10.1090/S0002-9947-1986-0833697-X)

### Henkin semantics gives second-order logic a complete proof system

**Remember:** Let each model choose its own sets, and completeness comes back.

*Makes the theorem clean to state or prove.* MSC 03C85 (Second- and higher-order model theory), 03B16. arXiv math.LO. Level 3: graduate.

**Definition.** In standard semantics, second-order variables range over all subsets of the domain. In Henkin semantics, each model also gives its own collection of subsets, and set quantifiers range only over that collection. Often the collection is also required to satisfy the comprehension axioms.

**Problem.** Find a sound, complete and effective proof system for second-order logic. With standard semantics this is impossible by Gödel's incompleteness theorem.

**How the definition helps.** Henkin semantics is really many-sorted first-order logic, so first-order completeness applies. The price is that compactness and Löwenheim–Skolem come back too. So second-order Peano arithmetic is no longer categorical. Nonstandard sets of numbers appear, and the page says this cannot be fixed with more axioms.

**Wikipedia:** [Second-order logic](https://en.wikipedia.org/wiki/Second-order_logic). It says: “Henkin proved that the standard deductive system for first-order logic is sound, complete, and effective for second-order logic with Henkin semantics”

**Sources:**

- [Henkin, L. (1950). Completeness in the theory of types. Journal of Symbolic Logic 15, 81–91.](https://doi.org/10.2307/2266967)

### Abstract logics make Lindström's theorem possible to state

**Remember:** To call a logic the strongest, you first need a notion of logic in general.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C95 (Abstract model theory). arXiv math.LO. Level 3: graduate.

**Definition.** An abstract logic gives a class of sentences and a satisfaction relation between structures and sentences. It must meet closure conditions, such as having classical negation. This lets one compare first-order logic with its extensions.

**Problem.** First-order logic is the strongest logic that has both the countable compactness property and the downward Löwenheim–Skolem property. Countable compactness means that a countable set of sentences has a model if every finite subset has one. The downward Löwenheim–Skolem property means that a sentence with an infinite model also has a countable model.

**How the definition helps.** With logics as mathematical objects, 'the strongest logic with these properties' gets a precise meaning. Before this notion existed, the phrase had no precise meaning (our own remark). Lindström then proved a characterisation of first-order logic. Any abstract logic stronger than first-order logic loses compactness or the Löwenheim–Skolem property. The result started abstract model theory. Versions for modal logics followed later.

**Wikipedia:** [Lindström's theorem](https://en.wikipedia.org/wiki/Lindstr%C3%B6m%27s_theorem). It says: “Lindström's theorem is perhaps the best known result of what later became known as abstract model theory, the basic notion of which is an abstract logic”

**Sources:**

- [Lindström, P. (1969). On extensions of elementary logic. Theoria 35, 1–11.](https://doi.org/10.1111/j.1755-2567.1969.tb00356.x)

### Coding whole computation histories makes the halting check primitive recursive

**Remember:** Search for the whole computation, then read off its answer.

*True by definition.* MSC 03D20 (Recursive functions and relations, subrecursive hierarchies), 03D10. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** Kleene's T(e, i, x) holds when x codes a complete computation history of program e on input i that ends in a halting state. A primitive recursive U reads the output from x.

**Problem.** Kleene's normal form theorem: every computable function f equals U(μx T(e, n, x)) for some index e. Here μx means the least x with the property.

**How the definition helps.** Checking a given history is a bounded, step-by-step test, so T is primitive recursive and only the search for x needs unbounded μ. The theorem then follows by definition once T is built. The same T gives the halting set K = {e : ∃x T(e, 0, x)}. The page says K is Σ₁-complete: every computably enumerable set reduces to it. The work moves into coding Turing machine configurations as numbers.

**Wikipedia:** [Kleene's T predicate](https://en.wikipedia.org/wiki/Kleene%27s_T_predicate). It says: “By the theorem, the definition of every general recursive function f can be rewritten into a normal form such that the μ operator is used only once”

**Sources:**

- [Kleene, S. C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical Society 53, 41–73.](https://doi.org/10.1090/S0002-9947-1943-0007371-8)

### Productive sets turn Gödel's first incompleteness theorem into one sentence

**Remember:** A productive set beats every list you offer with a new member.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees), 03F40. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A set P is productive if a computable function f does the following. For every index e with Wₑ ⊆ P, the number f(e) lies in P but not in Wₑ. Here Wₑ is the e-th computably enumerable set.

**Problem.** Gödel's first incompleteness theorem: no sound, effectively axiomatized theory proves all true sentences of arithmetic.

**How the definition helps.** The theorems of a sound effective theory form a computably enumerable set of truths, so productivity hands us a truth that is missing. The work moves into showing that the set of true sentences is productive, which the page states. It follows because the complement of the halting set reduces to it (our own). Myhill proved that productive sets are exactly those to which this complement reduces.

**Wikipedia:** [Creative and productive sets](https://en.wikipedia.org/wiki/Creative_and_productive_sets). It says: “whenever W is a recursively enumerable set of true sentences, there is at least one true sentence that is not in W.”

**Sources:**

- [Post, E. L. (1944). Recursively enumerable sets of positive integers and their decision problems. Bulletin of the American Mathematical Society 50, 284–316.](https://doi.org/10.1090/S0002-9904-1944-08111-1)
- [Myhill, J. (1955). Creative sets. Zeitschrift für mathematische Logik und Grundlagen der Mathematik 1, 97–108.](https://doi.org/10.1002/malq.19550010205)

### Simple sets are noncomputable by definition

**Remember:** A simple set's complement hides from every enumeration, so it is not computable.

*True by definition.* MSC 03D25 (Recursively (computably) enumerable sets and degrees). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A set S is simple if it is computably enumerable, its complement is infinite, and its complement contains no infinite computably enumerable set.

**Problem.** Post's problem asks for a computably enumerable set that is neither computable nor as hard as the halting problem. Post wanted simple sets to be the answer.

**How the definition helps.** If S were computable, its complement would be an infinite computably enumerable subset of itself, which the definition forbids. Post also showed that simple sets are not many-one complete. That is, the halting set does not reduce to them by a computable map of numbers. But some simple sets are Turing complete, as the page notes for effectively simple sets. So the hard part remained: Friedberg and Muchnik needed the priority method to find a simple set that does not compute the halting set.

**Wikipedia:** [Simple set](https://en.wikipedia.org/wiki/Simple_set). It says: “He succeeded in the first part (which is obvious by definition), but for the other part, he managed only to prove nonexistence of a many-one reduction.”

**Sources:**

- [Post, E. L. (1944). Recursively enumerable sets of positive integers and their decision problems. Bulletin of the American Mathematical Society 50, 284–316.](https://doi.org/10.1090/S0002-9904-1944-08111-1)

### Martin-Löf random sequences pass every test an algorithm can make

**Remember:** Random means avoiding every null set that an algorithm can describe.

*Rules out counterexamples.* MSC 03D32 (Algorithmic randomness and dimension). arXiv math.LO. Level 3: graduate.

**Definition.** An infinite binary sequence is Martin-Löf random if it lies in no effective null set. An effective null set is a set of measure zero that an algorithm can cover by open sets of smaller and smaller measure. Informally, a random sequence passes every Turing-computable test of randomness.

**Problem.** Define an individual random sequence so that random sequences exist and obey the laws of probability.

**How the definition helps.** Martin-Löf allowed only tests that an algorithm can describe, so there are few enough tests for random sequences to exist, and enough tests for them to obey the usual laws. Von Mises' collectives, made precise as Mises–Wald–Church random sequences, are too weak. Ville found a collective whose running frequency of ones stays at or below 1/2, which violates the law of the iterated logarithm. Asking for every law that holds with probability 1 fails the other way. Each single sequence y gives the law 'x ≠ y', so no sequence would be random. Martin-Löf's computable tests are countably many, so almost every sequence is random. Every random sequence obeys each probability-one law whose exceptions form an effective null set, such as the law of large numbers and the law of the iterated logarithm. That this captures the intuitive idea of randomness is the Martin-Löf–Chaitin thesis, not a theorem.

**Wikipedia:** [Algorithmically random sequence](https://en.wikipedia.org/wiki/Algorithmically_random_sequence). It says: “defined "Martin-Löf randomness" by only allowing laws of randomness that are Turing-computable.”

**Sources:**

- [Martin-Löf, P. (1966). The definition of random sequences. Information and Control 9(6), 602–619.](https://doi.org/10.1016/S0019-9958(66)80018-9)

### Prefix-free programs make the halting probability a real number

**Remember:** Prefix-free programs share a total budget of 1.

*True by definition.* MSC 03D32 (Algorithmic randomness and dimension), 68Q30. arXiv math.LO, cs.IT. Level 3: graduate.

**Definition.** Chaitin's constant Ω is the sum of 2 to the power −\|p\| over all programs p that halt, where \|p\| is the length of p. The programs run on a universal machine whose set of halting programs is prefix-free. Prefix-free means that no halting program is the start of another halting program.

**Problem.** We want to define 'the probability that a random program halts' as a real number between 0 and 1.

**How the definition helps.** The prefix-free condition keeps the sum at most 1, so Ω is a real number between 0 and 1 at once. Without the condition the sum can diverge. For example, suppose that a fixed fraction of the 2ⁿ programs of each length n halts; then each length adds the same positive amount (our own example). For a prefix-free set, Kraft's inequality gives that the sum is at most 1. Proving that Ω is random and not computable is the real work.

**Wikipedia:** [Chaitin's constant](https://en.wikipedia.org/wiki/Chaitin%27s_constant), [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “The requirement that the domain be prefix-free, together with Kraft's inequality, ensures that this sum converges to a real number between 0 and 1.”

**Sources:**

- [Chaitin, G. J. (1975). A theory of program size formally identical to information theory. Journal of the ACM 22, 329–340.](https://doi.org/10.1145/321892.321894)

### Bounded quantifiers in Σ₀ make Σ₁ sets exactly the computably enumerable sets

**Remember:** Bounded checks are computable, so one search in front gives semidecidable.

*True by definition. Confidence: medium.* MSC 03D55 (Hierarchies of computability and definability), 03D25. arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A formula is Σ⁰₀ if all its quantifiers are bounded, of the form ∀x &lt; t or ∃x &lt; t. A set is Σ⁰₁ if it is defined by a block of unbounded existential quantifiers in front of a Σ⁰₀ formula.

**Problem.** A set of natural numbers is Σ⁰₁ if and only if it is computably enumerable, that is, some program lists its members. This is the first level of Post's theorem.

**How the definition helps.** A bounded-quantifier formula can be checked by trying all cases. So a program can search for a witness, and a Σ⁰₁ set is computably enumerable at once. The other direction uses Kleene's T predicate, which says that a number codes a halting computation. It writes this predicate as existential quantifiers in front of a bounded core (our own link). The bounded quantifiers let the core check each step of a coded computation. Removing the bounded universal quantifier too, so that only polynomial equations remain, is the much harder theorem of Matiyasevich, Robinson, Davis and Putnam.

**Wikipedia:** [Arithmetical hierarchy](https://en.wikipedia.org/wiki/Arithmetical_hierarchy). It says: “The Σ⁰₁ sets of numbers are those definable by a formula of the form ∃n₁ ⋯ ∃nₖ ψ(n₁,…,nₖ,m) where ψ has only bounded quantifiers. These are exactly the recursively enumerable sets.”

**Sources:**

- [Kleene, S. C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical Society 53, 41–73.](https://doi.org/10.1090/S0002-9947-1943-0007371-8)

### Define computable reals by approximations, not by digits

**Remember:** Ask for approximations, not for digits.

*Makes the theorem clean to state or prove.* MSC 03D78 (Computation over the reals, computable analysis). arXiv math.LO, cs.LO. Level 3: graduate.

**Definition.** A real number a is computable if there is an algorithm with this property: given a rational ε &gt; 0, it outputs a rational number r with \|r − a\| ≤ ε.

**Problem.** Make arithmetic on computable reals computable from the programs that represent the inputs.

**How the definition helps.** With approximations, one algorithm adds or multiplies any two computable reals, but with digits no such algorithm exists. Turing's 1936 paper defined computable numbers by algorithms for the decimal digits. Both definitions give the same set of numbers. But to output one digit of a sum, an algorithm may have to look arbitrarily far to the right for a carry. Hirst showed that no algorithm converts an ε-approximation program into a digit program. With ε-approximations, one algorithm computes addition, multiplication and other operations for all inputs. What stays hard: no algorithm decides equality or order of computable reals.

**Wikipedia:** [Computable number](https://en.wikipedia.org/wiki/Computable_number). It says: “This lack of uniformity is one reason why the contemporary definition of computable numbers uses ε approximations rather than decimal expansions.”

**Sources:**

- [Turing, A. M. (1936/1937). On computable numbers, with an application to the Entscheidungsproblem. Proc. London Math. Soc. (2) 42, 230–265.](https://doi.org/10.1112/plms/s2-42.1.230)
- [Hirst, J. L. (2007). Representations of reals in reverse mathematics. Bull. Polish Acad. Sci. Math. 55(4), 303–316.](https://doi.org/10.4064/ba55-4-2)

### Every computable function on the real numbers is continuous

**Remember:** A finite look at the input can only fix the output approximately.

*True by definition. Confidence: medium.* MSC 03D78 (Computation over the reals, computable analysis). arXiv cs.LO, math.LO. Level 3: graduate.

**Definition.** A function on the real numbers is computable if an algorithm does the following. Given any sequence of approximations of the input, it produces approximations of the output to any required precision.

**Problem.** Every computable function from ℝ to ℝ is continuous.

**How the definition helps.** In our own sketch, the definition makes continuity almost automatic. The algorithm must produce each output approximation after it reads only finitely many input approximations. So a small enough change of the input cannot change that output approximation, and this is continuity. So discontinuous functions, such as a step function, are not computable. Differentiation of real functions is also not computable, because differentiation is discontinuous. The result suggests an analogy between computability and topology. Continuity does not settle everything: Myhill gave a computable function with a continuous derivative that is not computable.

**Wikipedia:** [Computable analysis](https://en.wikipedia.org/wiki/Computable_analysis). It says: “One of the basic results of computable analysis is that every computable function from ℝ to ℝ is continuous.”

**Sources:**

- [K. Weihrauch, Computable Analysis: An Introduction, Springer (2000)](https://doi.org/10.1007/978-3-642-56999-9)

### Cardinals as initial ordinals make the supremum of cardinals their union

**Remember:** Take the union of the representatives to get the least cardinal bound.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** Represent each well-orderable cardinal by its initial ordinal. An initial ordinal is an ordinal with no bijection to a smaller ordinal. The alternative treats each size as the class of all sets in bijection with a given set.

**Problem.** The union of any set of initial ordinals is an initial ordinal, and it is their least upper bound.

**How the definition helps.** With initial ordinals, the supremum is a plain union, which is already the least ordinal upper bound (our own). It remains to show that the union U is initial (our own). Suppose that a smaller ordinal β had a bijection with U (our own). Then β lies below some member κ, and κ ⊆ U injects into β (our own). By the Schröder–Bernstein theorem, κ would then have a bijection with β &lt; κ, which contradicts that κ is initial (our own). The work moves to two facts, that a union of ordinals is their least upper bound and that this union is initial (our own).

**Paper or page:** [Proposition 1.9.](https://builds.openlogicproject.org/open-logic-complete.pdf). It says: “If every member of X is a cardinal, then ⋃ X is a cardinal.”

**Sources:** none listed. No primary source with a working link was found.

### Cofinality as the shortest unbounded sequence is always a regular ordinal

**Remember:** A shorter unbounded map would compose to give a shorter witness.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** For a nonzero limit ordinal α, cf(α) is the least ordinal δ with an unbounded nondecreasing map from δ to α. Unbounded means that the values have no upper bound below α. An ordinal is regular if it equals its own cofinality. The alternative takes the least size of an unbounded subset of α.

**Problem.** For every nonzero limit ordinal α, cf(α) is regular, that is, cf(cf(α)) = cf(α).

**How the definition helps.** With maps, a short unbounded map into cf(α) composes with one into α (our own). Let f be a nondecreasing unbounded map from cf(α) to α (our own). If g maps a smaller δ unboundedly into cf(α), then f ∘ g maps δ unboundedly into α (our own). This contradicts the minimality of cf(α) (our own). Also cf(α) is a nonzero limit, because an empty or successor length cannot carry an unbounded nondecreasing map (our own). The nLab states the same equation constructively from its own definition. The work moves to proving that the subset definition gives the same value, which needs a recursive construction of an increasing sequence (our own).

**nLab:** [cofinality](https://ncatlab.org/nlab/show/cofinality). It says: “In general, an ordinal number α such that ocf(α) = α is called regular, so every ordinal cofinality is regular.”

**Sources:** none listed. No primary source with a working link was found.

### Constructive well-orders are transitive, extensional and well-founded, not total

**Remember:** A well-order is a relation for induction, where predecessors determine the element.

*Rules out counterexamples. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 3: graduate.

**Definition.** A well-order on a set S is a relation ≺ that is transitive, extensional and well-founded. Extensional means that two elements with the same predecessors are equal. Well-founded means that you can prove statements by induction over ≺. Totality (any two elements are comparable) is not part of the definition.

**Problem.** In constructive mathematics (mathematics without the law of excluded middle), well-ordered sets should still correspond to ordinals. There should also be examples that are not trivial.

**How the definition helps.** This definition keeps induction and recursion, which ordinals need, and drops the part that forces excluded middle. The classical definition is a total order in which every inhabited subset (a subset with at least one element) has a least element. Constructively this is too strong: if any set with two unequal elements has such an order, then excluded middle follows. Classically, the definition by transitivity, extensionality and well-foundedness is equivalent to the classical one. It still supports well-founded recursion to the ordinal of S without excluded middle. The proof that such a relation is a total order uses excluded middle, so totality is lost constructively.

**nLab:** [well-order](https://ncatlab.org/nlab/show/well-order). It says: “A classically well-ordered set is a choice set, and so if any set with at least 2 unequal elements has a classical well-order, then excluded middle follows.”

**Sources:**

- [P. Taylor, Intuitionistic sets and ordinals, Journal of Symbolic Logic 61 (1996)](https://doi.org/10.2307/2275781)

### Continuity at limits gives every normal function arbitrarily large fixed points

**Remember:** Without continuity, α ↦ α + 1 jumps over every fixed point.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** A function f from ordinals to ordinals is normal if it is strictly increasing and continuous. Continuous means that at each limit ordinal γ, f(γ) is the supremum of f(ν) for ν &lt; γ.

**Problem.** Every normal function has arbitrarily large fixed points. For example, the map from α to the α-th aleph number is normal. So some cardinals κ equal the κ-th aleph number.

**How the definition helps.** Continuity lets one reach a fixed point as a limit. Start above any ordinal, apply f again and again, and take the supremum, which f must then fix. The function α ↦ α + 1 is strictly increasing but has no fixed point at all. It is excluded because it is not continuous at limit ordinals. Normal functions include β + α, β·α for β ≥ 1 and β to the power α for β ≥ 2, all in α. The aleph and beth functions are normal too. The fixed points of a normal function, listed in order, form a normal function again (our own), and Veblen built his hierarchy this way.

**Wikipedia:** [Normal function](https://en.wikipedia.org/wiki/Normal_function). It says: “But f(α) = α + 1 is not normal because it is not continuous at any limit ordinal”

**Sources:**

- [Veblen, O. (1908). Continuous increasing functions of finite and transfinite ordinals. Transactions of the American Mathematical Society 9, 280–292.](https://doi.org/10.1090/S0002-9947-1908-1500814-9)

### Hartogs numbers make trichotomy of cardinals imply the axiom of choice

**Remember:** Every set has an ordinal too big to fit inside it.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** The Hartogs number of a set X is the least ordinal α that has no one-to-one map into X. Its existence is proved without the axiom of choice. For a well-orderable X, it is the successor cardinal of the size of X.

**Problem.** If any two cardinalities are comparable, then every set can be well-ordered. So trichotomy for cardinals is equivalent to the axiom of choice.

**How the definition helps.** The definition gives, for every set X, a well-ordered set that does not inject into X, so comparability must go the other way. If trichotomy holds, then X injects into its Hartogs number α, and the well-order of α pulls back to a well-order of X. The work is in showing that the Hartogs number exists in ZF, set theory without the axiom of choice. One collects the well-orderings of subsets of X, which form a set by the power set and separation axioms, and takes their order types. Hartogs proved this in 1915 in Zermelo set theory. The same number gives the aleph numbers without choice: the next aleph after a well-orderable size is its Hartogs number.

**Wikipedia:** [Hartogs number](https://en.wikipedia.org/wiki/Hartogs_number). It says: “Conversely, trichotomy for cardinal numbers (the statement that any two cardinal numbers are comparable) thus implies that every set can be well-ordered, and hence implies the axiom of choice.”

**Sources:**

- [Hartogs, F. (1915). Über das Problem der Wohlordnung. Mathematische Annalen 76, 438–443.](https://doi.org/10.1007/BF01458215)

### Regular cardinals defined by small unions keep small colimits small

**Remember:** Form the disjoint union, then identify elements without making the set larger.

*True by definition.* MSC 03E10 (Ordinal and cardinal numbers), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Call an infinite cardinal κ regular if each disjoint union of fewer than κ sets, each smaller than κ, is smaller than κ. The alternative calls κ regular if its cofinality is κ. The cofinality of κ is the least size of a subset of κ with no upper bound below κ.

**Problem.** Let κ be a regular cardinal. Every diagram of fewer than κ sets, each of size less than κ, has a colimit of size less than κ. A colimit glues the sets of a diagram together along its maps.

**How the definition helps.** With the union definition, the colimit is a quotient of the disjoint union of the sets, and that union is already small (our own). A quotient of a set smaller than κ is no larger, since one can pick the least element of each class (our own). The nLab lists this colimit property among the equivalent definitions of a regular cardinal. The work moves to proving that the cofinality definition implies the union condition (our own). That step uses the axiom of choice and the fact that κ · κ = κ for infinite κ (our own).

**nLab:** [regular cardinal](https://ncatlab.org/nlab/show/regular+cardinal). It says: “has all colimits (or just all coproducts) of size &lt; κ.”

**Sources:** none listed. No primary source with a working link was found.

### Scott's trick defines cardinality as the lowest-rank sets of that size

**Remember:** Do not take the class of all copies; take the lowest-rank copies, a set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 3: graduate.

**Definition.** The cardinality of a set X is the set of all well-founded pure sets that are in bijection with X and have the least possible rank in the von Neumann hierarchy. A pure set is a set whose elements are sets, all the way down. The rank of a set is the stage of the von Neumann hierarchy at which it first appears.

**Problem.** Define cardinal numbers without the axiom of choice so that three things hold. Every set has a cardinality, and every cardinal is a cardinality. Two sets have the same cardinality exactly when they are in bijection.

**How the definition helps.** Taking only the copies of least rank cuts a proper class down to a set, and this needs no choice. The naive definition, the isomorphism class of X, is a proper class. The usual definition, the least ordinal in bijection with X, needs the well-ordering theorem. So without choice it works only for well-orderable sets. Restricting to the copies of least rank gives a set, and the three properties hold for every set that is isomorphic to a well-founded set. This follows from the axiom of foundation, so choice is not needed.

**nLab:** [cardinal number](https://ncatlab.org/nlab/show/cardinal+number). It says: “This will follow directly from the axiom of foundation; it will also follow from the axiom of choice, since then every set is isomorphic to a von Neumann ordinal.”

**Sources:**

- [Dana Scott, Definitions by abstraction in axiomatic set theory (abstract), Bulletin of the American Mathematical Society 61 (1955) 442](https://doi.org/10.1090/S0002-9904-1955-09941-5)

### Sign expansions make the surreal numbers totally ordered by first difference

**Remember:** The first difference decides the order, even if one sequence ends.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 12J15. arXiv math.LO. Level 3: graduate.

**Definition.** A sign expansion is a sequence of pluses and minuses indexed by the ordinals below some ordinal, its length. Gonshor defines surreal numbers as sign expansions. Compare two of them at their first difference, treating a missing sign as between minus and plus. Conway instead defines surreals as pairs of sets of earlier surreals and compares them recursively.

**Problem.** Any two surreal numbers x and y satisfy exactly one of x &lt; y, x = y and y &lt; x.

**How the definition helps.** With sign expansions, the order is a lexicographic order, which is total by its form (our own). Two different expansions differ at a first place, or one ends where the other continues, and the rule compares them there (our own). Wikipedia states this lexicographic rule. With Conway's pairs, equality is a defined relation, and totality needs an induction over both numbers (our own). The work moves to proving that sign expansions match Conway's numbers and order (our own).

**Wikipedia:** [Surreal number](https://en.wikipedia.org/wiki/Surreal_number). It says: “For surreal numbers, define the binary relation &lt; to be lexicographic order”

**Sources:**

- [Harry Gonshor, An Introduction to the Theory of Surreal Numbers (1986)](https://doi.org/10.1017/cbo9780511629143)

### The Hessenberg sum makes ordinal addition commutative

**Remember:** The natural sum adds ordinals like polynomials in ω.

*Makes the theorem clean to state or prove.* MSC 03E10 (Ordinal and cardinal numbers). arXiv math.LO. Level 3: graduate.

**Definition.** The natural (Hessenberg) sum α ⊕ β writes α and β in Cantor normal form, as sums of powers ωᵞ. It then adds the terms like polynomials, in decreasing order of exponent.

**Problem.** Find an addition and a multiplication of ordinals that are commutative and associative, with multiplication distributing over addition.

**How the definition helps.** Adding like polynomials does not depend on the order of the summands, so the natural sum is commutative. Ordinary ordinal addition is not commutative: 1 + ω = ω, but ω + 1 &gt; ω. The natural sum is commutative and associative, and the natural product distributes over it. The cost is continuity: 1 ⊕ n tends to ω as n grows, but 1 ⊕ ω = ω + 1. The natural operations agree with Conway's surreal-number arithmetic restricted to ordinals.

**Wikipedia:** [Ordinal arithmetic](https://en.wikipedia.org/wiki/Ordinal_arithmetic). It says: “The natural sum and product are commutative and associative, and natural product distributes over natural sum.”

**Sources:** none listed. No primary source with a working link was found.

### Analytic sets repair Lebesgue's false claim about projections of Borel sets

**Remember:** Projections of Borel sets are not Borel, but they are analytic.

*Makes the theorem clean to state or prove.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A subset of a Polish space is analytic if it is a continuous image of a Polish space. Equivalently, it is the projection onto X of a Borel subset of X × Y, for some Polish space Y. Luzin and his student Suslin defined these sets in 1917.

**Problem.** Analytic sets are Lebesgue measurable, and indeed universally measurable: measurable for the completion of every Borel probability measure. Suslin's theorem says that a set is Borel exactly when both it and its complement are analytic.

**How the definition helps.** The new class is closed under projection by definition, so the step that Lebesgue got wrong becomes true for analytic sets. The counterexample is that some projections of Borel sets in the plane are not Borel, which Suslin found. The page states that analytic sets are still universally measurable. So probability arguments that take projections, such as for the first time a process enters a set, keep working up to null sets (our own). What stays hard is the measurability proof, which uses the Suslin operation and capacities.

**Wikipedia:** [Mikhail Suslin](https://en.wikipedia.org/wiki/Mikhail_Suslin), [Analytic set](https://en.wikipedia.org/wiki/Analytic_set), [Universally measurable set](https://en.wikipedia.org/wiki/Universally_measurable_set). It says: “he found an error in an argument of Lebesgue, who believed he had proved that for any Borel set in ℝ², the projection onto the real axis was also a Borel set.”

**Sources:** none listed. No primary source with a working link was found.

### Defining analytic sets as continuous images makes their continuous images analytic

**Remember:** Compose the given map with the map that parametrizes the set.

*True by definition.* MSC 03E15 (Descriptive set theory), 54H05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** An analytic set is the image of a Polish space under a continuous map. A Polish space is a space with a complete metric and a countable dense subset. The empty set counts as a Polish space. Another definition uses projections of closed subsets of the product with Baire space, the space of infinite sequences of natural numbers.

**Problem.** Let A be an analytic set, and let f be a continuous map from A into a Polish space. Then the image f(A) is analytic.

**How the definition helps.** With this definition, the image of an analytic set is again a continuous image of a Polish space. If g maps a Polish space P onto A, then f ∘ g maps P onto f(A) (our own). With the projection definition, the witness space becomes the product of a Polish space with Baire space. Turning that back into Baire space needs the theorem that every nonempty Polish space is a continuous image of Baire space (our own). So the work moves into the proof that the two definitions agree (our own). Wikipedia states the closure under continuous images.

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “closed under countable unions and intersections, continuous images, and inverse images”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Defining Borel sets as analytic with analytic complement makes Borel bijections isomorphisms

**Remember:** A bijection sends a set and its complement to analytic complements.

*True by definition.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO. Level 3: graduate.

**Definition.** Call a subset of a Polish space Borel if both it and its complement are analytic. A set is analytic if it is a continuous image of a Polish space. A Polish space has a complete metric and a countable dense subset. The usual definition generates the Borel sets from the open sets by complements and countable unions.

**Problem.** Let f be a measurable bijection between standard Borel spaces. Then the inverse of f is measurable. A standard Borel space has the Borel sets of some Polish topology as its measurable sets.

**How the definition helps.** With this definition, the image of a Borel set is Borel as soon as it and its complement are analytic. Take a Borel set B. Its image f(B) is analytic, because it is the projection of the part of the graph of f over B, a Borel set (our own). Since f is a bijection, the image of the complement of B is the complement of f(B) (our own). Both sets are analytic, so f(B) is Borel by this definition. The work moves to Souslin's theorem that this definition agrees with the usual one. It also needs the fact that the graph of a measurable map is Borel.

**Wikipedia:** [Standard Borel space](https://en.wikipedia.org/wiki/Standard_Borel_space). It says: “a set that is both analytic and coanalytic is necessarily Borel”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Defining standard Borel spaces through Borel subsets makes Borel subspaces standard

**Remember:** A Borel subset of a Borel subset is still Borel.

*True by definition. Confidence: medium.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** A standard Borel space is a measurable space that is isomorphic to a Borel subset of a Polish space. The Borel subset carries the induced measurable sets. A Polish space has a complete metric and a countable dense subset. The usual definition asks for a Polish topology on the space itself whose Borel sets are the given measurable sets.

**Problem.** Let X be a standard Borel space, and let B be a measurable subset of X. Then B, with the induced measurable sets, is a standard Borel space.

**How the definition helps.** With this definition, the theorem becomes a fact about Borel sets in one Polish space. The isomorphism sends B to a Borel subset of a Borel subset of a Polish space (our own). Such a set is Borel in the whole Polish space, so B is standard by definition (our own). With the usual definition, B needs its own Polish topology with the same Borel sets (our own). That is the theorem that each Borel subset of a Polish space has such a topology. The nLab states this fact, and it links the two definitions.

**nLab:** [standard Borel space](https://ncatlab.org/nlab/show/standard+Borel+space). It says: “Every Borel subset of a Polish space, equipped with the induced sigma-algebra, is standard Borel.”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### The game definition of Wadge reducibility turns Borel determinacy into Wadge's lemma

**Remember:** Each winner's strategy gives a reduction in one direction.

*True by definition.* MSC 03E15 (Descriptive set theory), 03E60. arXiv math.LO. Level 3: graduate.

**Definition.** Say A reduces to B if the second player has a winning strategy in the Wadge game for A and B. The first player writes a sequence x of natural numbers, and the second writes a sequence y but may skip turns. The second player wins if y is infinite and x lies in A exactly when y lies in B. The alternative asks for a continuous map whose preimage of B is A.

**Problem.** Let A and B be Borel subsets of Baire space. Then A reduces to B, or B reduces to the complement of A.

**How the definition helps.** With the game definition, a winning strategy for the second player is a reduction, so determinacy does most of the work. The game has a Borel payoff, so Borel determinacy gives a winner. If the second player wins, A reduces to B by definition. If the first player wins, the second player in the game for B and the complement of A can copy that strategy (our own). The copy turns each input y into an output x that misses A exactly when y lies in B (our own). The work moves to Borel determinacy and to the match between strategies and continuous maps.

**Wikipedia:** [Wadge hierarchy](https://en.wikipedia.org/wiki/Wadge_hierarchy). It says: “Since Borel determinacy is proved in ZFC, ZFC implies Wadge's lemma for Borel sets.”

**Sources:**

- [Donald A. Martin, Borel Determinacy (1975)](https://doi.org/10.2307/1971035)

### The nested partition definition gives every standard Borel space a compact topology

**Remember:** Nested atoms describe each point as a path in a compact space.

*True by definition.* MSC 03E15 (Descriptive set theory), 28A05. arXiv math.LO. Level 3: graduate.

**Definition.** Take an increasing sequence of finite families of measurable sets, each closed under finite unions and complements, that generates all measurable sets. Each family splits the space into finitely many atoms, its smallest nonempty pieces, and together the families separate points. Require every nested sequence of atoms, one from each family, to have a point in common. The usual definition asks for a Polish topology whose Borel sets are the given measurable sets.

**Problem.** Every standard Borel space has a compact metrizable topology whose Borel sets are exactly its measurable sets.

**How the definition helps.** With this definition, the compact topology is already visible in the data. Send each point to its sequence of atoms. These sequences form a closed subset of a countable product of finite discrete spaces, which is compact and metrizable. Point separation and the nested condition make the map a bijection, and the generating condition makes it a measurable isomorphism. The nLab gives this proof. The work moves to the converse, that every standard Borel space in the usual sense has such families. The nLab derives that from the classification by cardinality, which already gives compact models.

**nLab:** [standard Borel space](https://ncatlab.org/nlab/show/standard+Borel+space). It says: “The compatibility conditions are closed conditions, so K is a closed subspace of a countable product of finite discrete spaces.”

**Sources:** none listed. No primary source with a working link was found.

### The tree definition reduces every analytic set to the ill-founded trees

**Remember:** Fix the first coordinate and keep the tree of witnesses.

*True by definition. Confidence: medium.* MSC 03E15 (Descriptive set theory), 54H05. arXiv math.LO. Level 3: graduate.

**Definition.** An analytic subset of Baire space is the projection of a tree on pairs of natural numbers. Baire space is the space of infinite sequences of natural numbers. Such a tree is a set of pairs of finite sequences of equal length, closed under initial segments. A point x lies in the set if some y makes every initial segment of the pair (x, y) lie in the tree.

**Problem.** Every analytic subset of Baire space is the preimage, under a continuous map, of the set of trees with an infinite branch. Trees on natural numbers form a space in which each basic open set fixes finitely many membership questions.

**How the definition helps.** With the tree definition, each point already comes with its own tree of possible witnesses. Send x to the tree of finite sequences t that pair with the start of x to give a node of the tree (our own). Whether t is in this tree depends on finitely many terms of x, so the map is continuous (our own). This tree has an infinite branch exactly when x has a witness (our own). With the continuous-image definition, one must first find such a tree, which is the tree representation theorem. Wikipedia states this representation.

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “the projections of trees”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Tree codes make disjoint analytic sets stay disjoint after forcing

**Remember:** Two projections meet only if a combined tree has a branch.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E15 (Descriptive set theory), 03E40. arXiv math.LO. Level 3: graduate.

**Definition.** Code an analytic set of sequences by a tree on pairs of natural numbers, as the set of first coordinates of its branches. Forcing builds a larger model by adding a generic object. In the larger model, read the same tree again and allow its new branches. The alternative defines analytic sets as continuous images of Polish spaces, which does not say which set to take in the larger model.

**Problem.** Let S and T be trees whose projections are disjoint. Then their projections stay disjoint in every forcing extension.

**How the definition helps.** Tree codes give analytic sets a meaning in the extension, and they turn disjointness into a statement about one tree. Combine S and T into one tree of triples that share the first coordinate (our own). A branch of this tree is exactly a common point with witnesses from both trees (our own). In the ground model the combined tree has no branch. So it has a rank function, a map to the ordinals that decreases along the tree. The rank function survives in the extension, so no new branch appears (our own). The work moves to this rank theorem for trees without infinite branches.

**Wikipedia:** [Analytic set](https://en.wikipedia.org/wiki/Analytic_set). It says: “the projections of trees”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Two adjoints make preimages preserve unions and intersections

**Remember:** A left adjoint preserves joins, and a right adjoint preserves meets.

*True by definition.* MSC 03E20 (Other classical set theory (including functions, relations, and set algebra)), 06A15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** For f: S → T, the usual preimage f⁻¹(B) consists of points x with f(x) ∈ B. Another description uses f(A) ⊆ B exactly when A ⊆ f⁻¹(B), making preimage a right adjoint to image. The other order test is f⁻¹(B) ⊆ A exactly when B ⊆ T ∖ f(S ∖ A). This makes preimage a left adjoint to the map sending A to T ∖ f(S ∖ A).

**Problem.** Preimage preserves all unions and intersections. Direct image preserves all unions but need not preserve intersections.

**How the definition helps.** The two adjoint descriptions give both preservation laws at once. Left adjoints preserve joins, which are unions here. Right adjoints preserve meets, which are intersections here. Compared with checking each law point by point, the work lies in proving the two order tests from the usual preimage definition. In our own example, two distinct points with the same image give disjoint singleton sets whose images intersect.

**Wikipedia:** [Galois connection](https://en.wikipedia.org/wiki/Galois_connection). It says: “If f : X → Y is a function, then for any subset M of X we can form the image”

**Paper or page:** [Inverse Image Mapping is Upper Adjoint to Direct Image Mapping](https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Upper_Adjoint_to_Direct_Image_Mapping), [Inverse Image Mapping is Lower Adjoint to Composite Involving Direct Image Mapping](https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Lower_Adjoint_to_Composite_Involving_Direct_Image_Mapping). It says: “f←: 𝒫(T) → 𝒫(S) is the upper adjoint to f→: 𝒫(S) → 𝒫(T)”

**Sources:** none listed. No primary source with a working link was found.

### Ackermann coding makes the natural numbers a model of finite set theory

**Remember:** i is an element of j when bit i of j is 1.

*True by definition.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03C62. arXiv math.LO. Level 3: graduate.

**Definition.** A hereditarily finite set is a finite set whose elements are hereditarily finite sets, starting from the empty set. Ackermann coded each such set by a natural number. The code of a set is the sum of 2 to the power of the codes of its elements.

**Problem.** Finite set theory and arithmetic should be two views of the same thing. One wants a precise translation between them.

**How the definition helps.** With this coding, membership becomes a simple arithmetic relation: i is an element of j exactly when the i-th binary digit of j is 1. The coding is a bijection, so each natural number is exactly one hereditarily finite set. The page says that the natural numbers with this relation are a model of Zermelo–Fraenkel set theory without the axiom of infinity. Extensionality holds because a number is fixed by its binary digits. Pairing and union become arithmetic operations on binary digits (our own). Ackermann used the coding in a 1937 consistency proof.

**Wikipedia:** [Hereditarily finite set](https://en.wikipedia.org/wiki/Hereditarily_finite_set). It says: “The Ackermann coding can be used to construct a model of finitary set theory in the natural numbers.”

**Sources:**

- [Ackermann, W. (1937). Die Widerspruchsfreiheit der allgemeinen Mengenlehre. Mathematische Annalen 114, 305–315.](https://doi.org/10.1007/bf01594179)

### Extensional well-founded relations collapse to membership on a unique transitive class

**Remember:** Different elements need different predecessors, or the collapse glues them together.

*Rules out counterexamples.* MSC 03E30 (Axiomatics of classical set theory and its fragments), 03E20. arXiv math.LO. Level 3: graduate.

**Definition.** A relation R on a class is well-founded if every nonempty subset has an R-minimal element. It is extensional if two different elements never have the same set of R-predecessors. It is set-like if the predecessors of each element form a set.

**Problem.** Every set-like, well-founded, extensional relation is isomorphic to the membership relation on a transitive class, a class that contains every element of its elements. The transitive class and the isomorphism are both unique.

**How the definition helps.** Extensionality is exactly the condition that makes the collapse map one-to-one. The collapse sends each element x to the set of images of the elements below x. Well-founded recursion defines it for any well-founded set-like relation. If two different elements have the same predecessors, they go to the same set, and the map is only a homomorphism. For example, two elements with no predecessors both go to the empty set (our own example). Well-foundedness is also needed: the page describes a model of ZF (Zermelo–Fraenkel set theory) that is not well-founded, and the lemma fails for it. The main use is that every well-founded model of ZF is isomorphic to a unique transitive model.

**Wikipedia:** [Mostowski collapse lemma](https://en.wikipedia.org/wiki/Mostowski_collapse_lemma). It says: “The homomorphism F is an isomorphism if and only if R is extensional.”

**Sources:**

- [Mostowski, A. (1949). An undecidable arithmetical statement. Fundamenta Mathematicae 36, 143–164.](https://doi.org/10.4064/fm-36-1-143-164)

### Limitation of size gives several set existence axioms

**Remember:** A class is too big to be a set exactly when it matches everything.

*Makes the theorem clean to state or prove.* MSC 03E30 (Axiomatics of classical set theory and its fragments). arXiv math.LO. Level 3: graduate.

**Definition.** Classes are collections that may be too big to be sets. Von Neumann's axiom of limitation of size says that a class is a proper class (a class that is not a set) if and only if some function maps it onto the universe V of all sets.

**Problem.** Derive the set existence axioms from one principle that explains which classes are sets.

**How the definition helps.** One principle about size does the work of several axioms. Von Neumann showed that his axiom implies replacement, separation and global choice (one choice function for all nonempty sets at once). Lévy (1968) showed that it also implies union. The proof of global choice uses the Burali-Forti argument: the class of ordinals is a proper class, so it maps onto V, and this gives a well-order of V. In NBG (von Neumann–Bernays–Gödel set theory), the axiom is equivalent to replacement, union and global choice together. The article notes that power set and infinity must still be assumed separately.

**Wikipedia:** [Axiom of limitation of size](https://en.wikipedia.org/wiki/Axiom_of_limitation_of_size). It says: “Von Neumann's axiom implies the axioms of replacement, separation, union, and global choice.”

**Sources:**

- [von Neumann, J. (1925). Eine Axiomatisierung der Mengenlehre. Journal für die reine und angewandte Mathematik 154, 219–240.](https://doi.org/10.1515/crll.1925.154.219)

### A complete Boolean algebra gives quantified formulas a truth value

**Remember:** Existential quantifiers are joins, so the joins must exist.

*Makes the theorem clean to state or prove.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 03C90, 06E10. arXiv math.LO. Level 3: graduate.

**Definition.** A Boolean-valued model gives each statement a truth value in a fixed Boolean algebra B, not just true or false. The value of ∃x φ(x) is the supremum of the values of φ(a) over all elements a. B must be complete, so that every subset has a supremum.

**Problem.** Forcing should be done over the whole universe V, without countable transitive models or generic objects that do not exist. One wants every axiom of ZFC to get truth value 1 in the model Vᴮ.

**How the definition helps.** Completeness lets ∃ and ∀ be the supremum and infimum of possibly infinite sets of values, so every formula gets a value by plain recursion. Then independence proofs say: a statement and the axioms have value 1, so the statement is consistent. The page says this gives forcing a semantics without fictional generic objects. Each forcing order has a completion, the regular open algebra, so no forcing is lost. What stays hard is computing the truth values of specific statements, such as the continuum hypothesis.

**Wikipedia:** [Boolean-valued model](https://en.wikipedia.org/wiki/Boolean-valued_model). It says: “The completeness of the Boolean algebra is required to define truth values for quantified formulas.”

**Sources:** none listed. No primary source with a working link was found.

### Defining forcing by Boolean values makes densely forced sentences forced

**Remember:** Below p, a dense set has p as its least upper bound.

*True by definition. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** Let B be a complete Boolean algebra, one in which every subset has a least upper bound. Each sentence φ has a Boolean value ‖φ‖ in B. A nonzero element p forces φ when p ≤ ‖φ‖. The usual alternative defines forcing directly on a partial order, by recursion on names and formulas.

**Problem.** Suppose every condition below p has a stronger condition that forces φ. Then p forces φ.

**How the definition helps.** With Boolean values, forcing is an inequality, and inequalities pass to least upper bounds. Let D be the set of conditions below p that force φ (our own). Every nonzero element below p has a member of D below it, so the least upper bound of D is p (our own). Each member of D lies below ‖φ‖, so p does too (our own). With the recursive definition, this fact is a lemma proved by induction on formulas. The work moves to building the Boolean values and showing that they match the recursive forcing relation.

**Wikipedia:** [Boolean-valued model](https://en.wikipedia.org/wiki/Boolean-valued_model). It says: “The truth value of a formula is an element of the complete Boolean algebra B.”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Defining properness by preserved stationary sets makes two-step iterations proper

**Remember:** Preserve the same stationary family at each step.

*True by definition.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** Call a forcing order proper if it keeps stationary every stationary family of countable subsets of every uncountable set. A family is stationary if it meets every closed unbounded family of countable subsets. The usual definition asks for conditions that are generic over countable elementary submodels of a large structure. Shelah proved that the two definitions agree.

**Problem.** Let P be proper, and suppose P forces that Q is proper. Then the two-step iteration, P followed by Q, is proper.

**How the definition helps.** With the preservation definition, properness passes through each step in turn. Take a stationary family S of countable subsets of an uncountable set X in the ground model. Forcing with P keeps S stationary, and X stays uncountable because proper forcing keeps ω₁ (our own). In that extension Q is proper, so it keeps S stationary again (our own). Wikipedia states the definition only for regular uncountable cardinals λ. Such λ may stop being regular after the first step, so we use all uncountable sets (our own). The work moves to Shelah's theorem that the two definitions agree.

**Wikipedia:** [Proper forcing axiom](https://en.wikipedia.org/wiki/Proper_forcing_axiom). It says: “forcing with P preserves stationary subsets”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Finite supports keep iterated ccc forcing ccc, so ω₁ survives

**Remember:** Finitely many active stages keep antichains countable.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 03E50. arXiv math.LO. Level 3: graduate.

**Definition.** Forcing builds a larger model of set theory from a partial order of conditions. Iterated forcing repeats it along an ordinal. A forcing is ccc when every set of pairwise incompatible conditions is countable. A condition in a finite support iteration is a sequence of conditions that is trivial at all but finitely many stages.

**Problem.** Martin's axiom together with the failure of the continuum hypothesis is consistent with ZFC. Martin's axiom says, roughly, that every ccc forcing problem with fewer than continuum many requirements has a solution.

**How the definition helps.** Finite supports let the countable chain condition pass through limit stages, so the whole iteration is ccc and preserves all cardinals. Solovay and Tennenbaum introduced iterated forcing to build a model with no Suslin tree, which settles Suslin's problem about the real line. They also used it to force Martin's axiom with a large continuum. Each small instance of the axiom is met at some stage of the iteration (our own remark). For other preservation needs, Shelah later used countable supports with proper forcing.

**Wikipedia:** [Iterated forcing](https://en.wikipedia.org/wiki/Iterated_forcing). It says: “Finite support iteration of c.c.c. forcings (see countable chain condition) are c.c.c. and thus preserve ω₁.”

**Sources:**

- [Solovay, R. M.; Tennenbaum, S. (1971). Iterated Cohen extensions and Souslin's problem. Annals of Mathematics 94, 201–245.](https://doi.org/10.2307/1970860)

### Perfect trees make the Sacks fusion lemma statable by splitting levels

**Remember:** Keep each level of branching once it has been built.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** Take Sacks forcing conditions to be perfect binary trees, ordered by inclusion. A binary tree is a set of finite 0–1 strings closed under initial segments. It is perfect if every node has an extension whose two one-bit extensions are both in the tree. The alternative uses nonempty closed sets of infinite 0–1 sequences with no isolated points.

**Problem.** A node is an nth splitting node if it splits and has exactly n splitting nodes strictly below it. Let p₀ ⊇ p₁ ⊇ p₂ ⊇ … be Sacks conditions where each pₙ₊₁ keeps every nth splitting node of pₙ, still splitting. Then the intersection of the pₙ is a perfect tree.

**How the definition helps.** Trees give names to the levels of splitting, so the fusion condition can be written down. Closed sets have no such levels until one passes to their trees (our own). Take a node t of the intersection, and choose n larger than the length of t (our own). Some nth splitting node s of pₙ extends t, because every branch through t meets one (our own). Each later tree keeps s as a splitting node, so both one-bit extensions of s lie in the intersection (our own). Wikipedia defines Sacks forcing by perfect trees. The work moves to the match between perfect trees and perfect closed sets.

**Wikipedia:** [List of forcing notions](https://en.wikipedia.org/wiki/List_of_forcing_notions). It says: “A tree p is stronger than q if p is contained in q.”

**Sources:**

- [Gerald E. Sacks, Forcing with perfect closed sets (1971)](https://doi.org/10.1090/pspum/013.1/0276079)

### The countable chain condition stops forcing from collapsing cardinals

**Remember:** Countably many incompatible choices cannot make an uncountable set countable.

*Rules out counterexamples.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** Forcing adds a new set G, a generic filter on a partial order of conditions, to a model of set theory. Two conditions are incompatible when no condition lies below both. The order is ccc if every set of pairwise incompatible conditions is countable.

**Problem.** Cohen's model of the negation of the continuum hypothesis adds ℵ₂ new real numbers. One must show that ℵ₁ and ℵ₂ of the old model stay cardinals in the new model.

**How the definition helps.** Under ccc, each value of a new function has only countably many possible values in the old model. So a new surjection between infinite ordinals gives one in the old model, and cardinals cannot collapse. The page gives the excluded case: finite partial functions from ω to ω₁ add a bijection from ω onto ω₁. So ω₁ becomes countable. The page shows that Cohen's poset of finite partial functions into 2 is ccc. Its proof shrinks an uncountable family to conditions of one fixed size n. That counting step is the hard part that stays.

**Wikipedia:** [Forcing (mathematics)](https://en.wikipedia.org/wiki/Forcing_%28mathematics%29), [Countable chain condition](https://en.wikipedia.org/wiki/Countable_chain_condition). It says: “In the theory of forcing, ccc partial orders are used because forcing with any generic set over such an order preserves cardinals and cofinalities.”

**Sources:**

- [Cohen, P. J. (1963). The independence of the continuum hypothesis. Proceedings of the National Academy of Sciences 50, 1143–1148.](https://doi.org/10.1073/pnas.50.6.1143)

### The splitting condition makes every generic filter genuinely new

**Remember:** If every condition can split, no generic filter was already there.

*Rules out counterexamples.* MSC 03E40 (Other aspects of forcing and Boolean-valued models). arXiv math.LO. Level 3: graduate.

**Definition.** A forcing order satisfies the splitting condition if every condition p has two extensions that are incompatible with each other. A filter G is generic over a model M if G meets every dense subset of the order that lies in M.

**Problem.** Forcing should add something: the generic filter G should not lie in the ground model M. Then M\[G\] is a proper extension of M.

**How the definition helps.** Splitting makes the complement of any filter dense, so a generic filter must meet its own complement if it lies in M, which is absurd. Without splitting, a condition p may have only pairwise compatible extensions. Then a generic filter containing p can be defined inside M, so the extension adds nothing (our own example). The hard work of forcing, the truth and definability lemmas, is not touched by this condition.

**Wikipedia:** [Forcing (mathematics)](https://en.wikipedia.org/wiki/Forcing_%28mathematics%29). It says: “Due to the splitting condition on ℙ, if G is a filter, then ℙ ∖ G is dense. If G ∈ M, then ℙ ∖ G ∈ M because M is a model of ZFC.”

**Sources:**

- [Cohen, P. J. (1963). The independence of the continuum hypothesis. Proceedings of the National Academy of Sciences 50, 1143–1148.](https://doi.org/10.1073/pnas.50.6.1143)

### Constructible sets come with their own well-order

**Remember:** Every constructible set has a definition, and definitions can be listed in order.

*True by definition.* MSC 03E45 (Inner models, including constructibility, ordinal definability, and core models), 03E35, 03E50. arXiv math.LO. Level 3: graduate.

**Definition.** Gödel's constructible universe L is built in stages. Stage α+1 is the set of those subsets of stage α that a first-order formula with parameters defines over stage α. L is the union of all stages.

**Problem.** Show that the axiom of choice and the generalized continuum hypothesis are consistent with ZF.

**How the definition helps.** Each set in L has a definition, and definitions can be listed in order, so L has an explicit well-order. Every set in L appears at a first stage and has a definition by a formula and parameters. Order the sets first by stage, then by the Gödel number of the formula, then by the parameters; this well-orders all of L. So the axiom of choice holds in L almost by construction, even if it fails in V, the universe of all sets. A formula with no parameters defines this well-order in L. The generalized continuum hypothesis in L needs more work. By Gödel's condensation argument, every constructible subset of an infinite set S already appears at a stage of cardinality at most that of S.

**Wikipedia:** [Constructible universe](https://en.wikipedia.org/wiki/Constructible_universe). It says: “Notice that this well-ordering can be defined within L itself by a formula of set theory with no parameters, only the free-variables x and y.”

**Sources:**

- [Gödel, K. (1938). The consistency of the axiom of choice and of the generalized continuum-hypothesis. Proceedings of the National Academy of Sciences 24, 556–557.](https://doi.org/10.1073/pnas.24.12.556)

### Martin's axiom stops below the continuum because the continuum case is false

**Remember:** Martin's axiom claims every case that could be true, and no more.

*Rules out counterexamples.* MSC 03E50 (Continuum hypothesis and Martin's axiom), 03E40. arXiv math.LO. Level 3: graduate.

**Definition.** MA(κ) says: for any ccc partial order and any at most κ dense subsets, some filter meets them all. A set D is dense if every element has an element of D below it. A filter is an upward-closed set in which any two members have a common lower bound in the set. The countable chain condition (ccc) means that every set of pairwise incompatible elements is countable; Martin's axiom says MA(κ) for every κ &lt; 𝔠.

**Problem.** Martin's axiom must be consistent with ZFC and with the failure of the continuum hypothesis. It should also have strong consequences, for example that fewer than 𝔠 null sets have a null union.

**How the definition helps.** The bound κ &lt; 𝔠 removes the cases that are provably false, so the axiom can be consistent. MA(𝔠) already fails for the open subsets of \[0, 1\]. There, 𝔠 dense sets force a filter to avoid every point while it shrinks to a point. MA(ℵ₀) is already a theorem, the Rasiowa–Sikorski lemma. The ccc condition also excludes a bad case (our own). Finite partial maps from ω to ω₁ give ℵ₁ dense sets that no filter meets, since such a filter would map ω onto ω₁. The hard part is the consistency proof by iterated forcing.

**Wikipedia:** [Martin's axiom](https://en.wikipedia.org/wiki/Martin%27s_axiom). It says: “Martin's axiom is then that MA(κ) holds for every κ for which it could: Martin's axiom (MA): MA(κ) holds for every κ&lt;𝔠.”

**Sources:**

- [Martin, D. A.; Solovay, R. M. (1970). Internal Cohen extensions. Annals of Mathematical Logic 2, 143–178.](https://doi.org/10.1016/0003-4843(70)90009-4)

### Grothendieck universes make every set small in a large enough universe

**Remember:** A universe is a whole world of sets, closed under the usual constructions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E55 (Large cardinals), 18A15. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A Grothendieck universe is a set U that contains the empty set and is transitive: every element of an element of U is also in U. U is also closed under power sets and under unions indexed by elements of U. The sets in U are called small. Grothendieck's axiom of universes says that every set lies in some universe.

**Problem.** The aim is to use theorems about small categories on large categories such as Set, Grp or the category of all small categories. Examples of such theorems are the Yoneda lemma and facts about presheaf categories and functor categories. This must not lead to paradoxes of Russell's type.

**How the definition helps.** Universes make every large category small when you look at it from a bigger universe. With universes, 'small' means 'in U'. A large category such as U-Set (the category of sets in U) is itself a set, so it is small relative to a bigger universe U′. So you can form, for example, presheaves on U-Set and use theorems proved for small categories. The cost is a large-cardinal axiom: there must be arbitrarily large inaccessible cardinals (cardinals so large that the usual axioms of set theory cannot prove that they exist). Also, every notion that depends on size, such as completeness or local presentability, must be made relative to U. You must then check how each such notion behaves when you change the universe.

**nLab:** [Grothendieck universe](https://ncatlab.org/nlab/show/Grothendieck+universe). It says: “In other words, every set is small if your universe is large enough!”

**Sources:**

- [Pierre Gabriel, Des catégories abéliennes, Bulletin de la Société Mathématique de France 90 (1962) 323–448](http://www.numdam.org/item?id=BSMF_1962__90__323_0)
- [Saunders Mac Lane, One universe as a foundation for category theory, Reports of the Midwest Category Seminar III, Lecture Notes in Mathematics 106 (1969) 192–200](https://doi.org/10.1007/BFb0059147)

### Measurable cardinals are the critical points of embeddings of the universe

**Remember:** The first ordinal an embedding moves is a measurable cardinal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** An elementary embedding j from the universe V into a transitive class M keeps the truth of every formula of set theory. Its critical point is the least ordinal κ with j(κ) ≠ κ. An uncountable cardinal κ is measurable if some ultrafilter on κ contains no one-element set and is closed under intersections of fewer than κ sets.

**Problem.** Let j be a nontrivial elementary embedding of V into a transitive class M. Then the critical point of j is a measurable cardinal.

**How the definition helps.** With the embedding form, the ultrafilter comes for free: it is the family of sets A ⊆ κ with κ in j(A). Elementarity of j gives the closure under intersections of fewer than κ sets (our own). In the other direction, an ultrapower of V by such an ultrafilter gives an embedding (our own). An ultrapower is a model made from functions on κ, compared on sets in the ultrafilter. Stronger large cardinals are then stated by asking M to contain more of V (our own). The limit of this method is Kunen's inconsistency theorem: with the axiom of choice, M cannot be all of V (our own).

**Wikipedia:** [Critical point (set theory)](https://en.wikipedia.org/wiki/Critical_point_%28set_theory%29). It says: “If N is V, then κ (the critical point of j) is always a measurable cardinal”

**Sources:** none listed. No primary source with a working link was found.

### Measurable cardinals need non-principal ultrafilters and uncountability

**Remember:** A measurable cardinal has a two-valued measure that ignores every single point.

*Rules out counterexamples. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** A cardinal κ is measurable if it is uncountable and carries a κ-complete non-principal ultrafilter. An ultrafilter is κ-complete if it contains the intersection of any fewer than κ of its sets, and non-principal if it contains no one-point set. Equivalently, there is a two-valued measure on all subsets of κ that gives every single point measure 0. In this measure, any union of fewer than κ null sets (sets of measure 0) is null.

**Problem.** Every measurable cardinal is regular: it is not a union of fewer than κ sets, each of size less than κ. So the definition picks out genuinely large cardinals, not every cardinal.

**How the definition helps.** Each of the two conditions removes a family of trivial examples. Principal ultrafilters, the ones that contain a fixed point, exist on every set and are κ-complete. So without 'non-principal', every cardinal would be measurable, including singular cardinals such as ℵω (our own explanation). ℵ₀ carries non-principal ultrafilters, and they are trivially ℵ₀-complete, because that asks only for closure under finite intersections. So 'uncountable' is also needed (our own explanation). With both conditions, κ is regular, which the article calls trivial to note: every set of size less than κ is null, so κ is not a union of fewer than κ smaller sets. Ulam (1930) introduced the notion and showed that the least cardinal with a non-trivial countably additive two-valued measure has a κ-additive one.

**Wikipedia:** [Measurable cardinal](https://en.wikipedia.org/wiki/Measurable_cardinal). It says: “Equivalently, κ is a measurable cardinal if and only if it is an uncountable cardinal with a κ-complete, non-principal ultrafilter.”

**Sources:**

- [Ulam, S. (1930). Zur Masstheorie in der allgemeinen Mengenlehre. Fundamenta Mathematicae 16, 140–150.](https://doi.org/10.4064/fm-16-1-140-150)

### Requiring inaccessible cardinals to be uncountable keeps ℵ₀ out

**Remember:** An inaccessible cardinal behaves like ℵ₀ but is required to be uncountable.

*Rules out counterexamples.* MSC 03E55 (Large cardinals), 03E30. arXiv math.LO. Level 3: graduate.

**Definition.** A strongly inaccessible cardinal κ is an uncountable cardinal that is regular and a strong limit. Regular means that κ is not a union of fewer than κ sets that each have fewer than κ elements. Strong limit means that 2 to the power λ is less than κ for every λ &lt; κ.

**Problem.** An inaccessible cardinal should be a genuinely new large cardinal whose existence ZFC cannot prove. Also, Vκ, the collection of all sets of rank less than κ, should be a model of ZFC. Such a Vκ is a Grothendieck universe, a set inside which one can do ordinary mathematics.

**How the definition helps.** Excluding ℵ₀ by hand is what makes inaccessible cardinals large. Our own remark: without the word "uncountable", ℵ₀ would qualify. It is regular and a strong limit, and Vω is the set of hereditarily finite sets (finite sets whose elements are finite sets, and so on down). Vω is a model of ZFC without the axiom of infinity. The article notes that some people find this requirement unnatural, and Zermelo (1930) still counted ℵ₀ among his "Grenzzahlen". Our own remark: showing that ZFC cannot prove that an inaccessible exists still needs Gödel's second incompleteness theorem, because Vκ is a model of ZFC.

**Wikipedia:** [Inaccessible cardinal](https://en.wikipedia.org/wiki/Inaccessible_cardinal). It says: “From some perspectives, the requirement that a weakly or strongly inaccessible cardinal be uncountable is unnatural or unnecessary. Even though ℵ₀ is countable, it is regular and is a strong limit cardinal.”

**Sources:**

- [Sierpiński, W. and Tarski, A. (1930). Sur une propriété caractéristique des nombres inaccessibles. Fundamenta Mathematicae 15, 292–300.](https://doi.org/10.4064/fm-15-1-292-300)
- [Zermelo, E. (1930). Über Grenzzahlen und Mengenbereiche. Fundamenta Mathematicae 16, 29–47.](https://doi.org/10.4064/fm-16-1-29-47)

### The compactness definition gives weakly compact cardinals the tree property

**Remember:** Choose a node on each level, then forbid incompatible choices.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** Let κ be inaccessible: uncountable, not a union of fewer than κ smaller sets, and larger than 2 to the power of each smaller cardinal. Call κ weakly compact if a compactness theorem holds for the logic whose conjunctions and disjunctions may have fewer than κ terms. The theorem says that a set of κ sentences has a model if each subset of fewer than κ sentences has one. The usual definition asks that every two-coloring of pairs from κ have a one-color subset of size κ.

**Problem.** Let κ be weakly compact. Every tree of height κ whose levels all have fewer than κ nodes has a branch through every level.

**How the definition helps.** With the compactness definition, a branch is just a model of a set of sentences. Use one constant for each node and a predicate B for the branch (our own). For each level, say that B holds of some node on it, a disjunction of fewer than κ terms. For each pair of incomparable nodes, say that B fails for one of them (our own). Fewer than κ of these sentences mention only levels below some bound, and the predecessors of one high node satisfy them (our own). Compactness gives a model, and the nodes where B holds form a branch. The work moves to the theorem that this definition agrees with the coloring definition.

**Wikipedia:** [Weakly compact cardinal](https://en.wikipedia.org/wiki/Weakly_compact_cardinal). It says: “and every subset with less than κ elements has a model, then Σ has a model”

**Sources:** none listed. No primary source with a working link was found.

### The embedding definition makes λ-supercompactness imply μ-supercompactness for smaller μ

**Remember:** The same embedding works for every smaller μ.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** Call κ λ-supercompact if there is an elementary embedding j of the universe into a transitive class M, one containing the elements of its elements. Such an embedding preserves the truth of every formula, and its least moved ordinal, the critical point, must be κ. Require that j(κ) &gt; λ and that M contain every sequence of length λ of its elements. The alternative asks for a fine normal κ-complete ultrafilter on the subsets of λ of size less than κ.

**Problem.** Suppose κ is λ-supercompact and κ ≤ μ ≤ λ. Then κ is μ-supercompact.

**How the definition helps.** With the embedding definition, the witness for λ is already a witness for μ. A sequence of length μ can be padded to length λ, so M contains it, and j(κ) &gt; λ ≥ μ (our own). With the ultrafilter definition, one must push the ultrafilter along the map x ↦ x ∩ μ and check fineness and normality (our own). The work moves to the Reinhardt–Magidor theorem that normal ultrafilters and such embeddings give the same notion. The cited lemma states that theorem.

**Paper or page:** [Prikry type forcings and the Bukovský-Dehornoy phenomena](https://arxiv.org/abs/2308.05553v1). It says: “if and only if there is an elementary embedding”

**Sources:**

- [Yair Hayut, Prikry type forcings and the Bukovský-Dehornoy phenomena (arXiv 2023)](https://arxiv.org/abs/2308.05553v1)

### The filter extension definition makes strongly compact cardinals measurable at once

**Remember:** Extend the filter of sets with small complements.

*True by definition.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 3: graduate.

**Definition.** Call an uncountable regular cardinal κ strongly compact if every κ-complete filter extends to a κ-complete ultrafilter. A filter is a family of sets closed under supersets and finite intersections. It is κ-complete if closed under intersections of fewer than κ members, and an ultrafilter contains each set or its complement. The alternative asks for a compactness theorem for the infinitary logic with conjunctions and quantifier blocks of fewer than κ terms.

**Problem.** Every strongly compact cardinal κ is measurable. That means κ carries a κ-complete ultrafilter that contains no singleton.

**How the definition helps.** With the filter extension definition, measurability needs only one well-chosen filter. Take the subsets of κ whose complements have fewer than κ elements, and regularity of κ makes this filter κ-complete (our own). Extend it to a κ-complete ultrafilter. The ultrafilter contains the complement of each singleton, so it contains no singleton (our own). With the logic definition, one must first build this ultrafilter from a set of sentences (our own). That step is the theorem that the two definitions agree. The nLab gives the filter definition and states that such cardinals are measurable.

**nLab:** [strongly compact cardinal](https://ncatlab.org/nlab/show/strongly+compact+cardinal). It says: “Strongly compact cardinals are measurable cardinals.”

**Sources:**

- [Thomas Jech, Set Theory (2003)](https://doi.org/10.1007/3-540-44761-X)

### Weakly compact cardinals must be uncountable to keep ℵ₀ out

**Remember:** Ramsey's theorem makes ℵ₀ look weakly compact, so ℵ₀ is excluded.

*Rules out counterexamples. Confidence: medium.* MSC 03E55 (Large cardinals), 03E02. arXiv math.LO. Level 3: graduate.

**Definition.** A cardinal κ is weakly compact if it is uncountable and has a partition property. The property says: colour each pair of elements of κ with one of two colours. Then some set of size κ has all its pairs of the same colour.

**Problem.** Weakly compact cardinals should be large cardinals whose existence ZFC, the usual axioms of set theory, cannot prove. Their equivalent forms, such as inaccessible with the tree property, should all hold.

**How the definition helps.** The partition property alone is true of ℵ₀ by the infinite Ramsey theorem (our own). So the word uncountable is needed to make the notion a large cardinal (our own). The tree property, an equivalent form about trees of height κ, also holds for ℵ₀ by König's lemma (our own). The page lists the equivalent forms only for uncountable κ. With that condition, a weakly compact cardinal is inaccessible: sums and power sets of smaller sizes cannot reach it. So ZFC cannot prove that one exists. Erdős and Tarski introduced the notion in 1961.

**Wikipedia:** [Weakly compact cardinal](https://en.wikipedia.org/wiki/Weakly_compact_cardinal). It says: “a cardinal κ is defined to be weakly compact if it is uncountable”

**Sources:** none listed. No primary source with a working link was found.

### The Banach–Mazur game definition makes determinacy give the Baire property

**Remember:** Test the game in every basic open set.

*True by definition.* MSC 03E60 (Determinacy principles), 54E52, 91A44. arXiv math.LO, math.GN. Level 3: graduate.

**Definition.** Say a set A of natural number sequences has the Baire property if its Banach–Mazur game is determined in each basic open set. In this game the players take turns extending a finite sequence, and the first player wants the limit in A. The usual definition asks that A differ from an open set by a meager set, a countable union of nowhere dense sets. The two definitions agree on Baire space.

**Problem.** The axiom of determinacy implies that every set of natural number sequences has the Baire property. The axiom says that every infinite game with natural number moves has a winning strategy for one player.

**How the definition helps.** With the game definition, the axiom of determinacy applies directly. Each finite sequence is coded by a natural number, so each local Banach–Mazur game is a game with natural number moves (our own). The axiom makes all these games determined, which is the definition. The work moves to the theorem that this definition agrees with the usual one. Wikipedia states one half: the first player wins exactly when A is comeager, with meager complement, in some nonempty open subset. It also states that the second player wins exactly when A is meager in the open set. Then A differs by a meager set from the union of the open sets where A is comeager (our own).

**Wikipedia:** [Banach–Mazur game](https://en.wikipedia.org/wiki/Banach%E2%80%93Mazur_game). It says: “X is comeager in some non-empty open subset”

**Sources:**

- [Alexander S. Kechris, Classical Descriptive Set Theory (1995)](https://doi.org/10.1007/978-1-4612-4190-4)

### Proofs without the cut rule contain only parts of their conclusion

**Remember:** A cut-free proof uses nothing that its conclusion does not already contain.

*Makes the theorem clean to state or prove.* MSC 03F05 (Cut-elimination and normal-form theorems), 03F07. arXiv math.LO. Level 3: graduate.

**Definition.** In Gentzen's sequent calculus, a proof derives sequents Γ ⊢ Δ, which say that the formulas in Γ together give one of the formulas in Δ. Each logical rule adds one connective on one side of a sequent. The cut rule is the only rule whose premises contain a formula that is not in its conclusion. So a proof without cut has the subformula property: every formula in it is a subformula of a formula in the conclusion.

**Problem.** Show that the empty sequent ⊢, which stands for a contradiction, has no proof. More generally, reason about what is provable by induction on proofs.

**How the definition helps.** In the calculus without cut, consistency is immediate, because the conclusion of every rule contains at least one formula. So no rule can have the empty sequent as its conclusion. In a system with cut, this is not obvious. The real content is Gentzen's cut-elimination theorem (the Hauptsatz). It says that you can change every proof with cut into a proof without cut.

**nLab:** [subformula property](https://ncatlab.org/nlab/show/subformula+property), [sequent calculus](https://ncatlab.org/nlab/show/sequent+calculus). It says: “while it is not obvious in a cut-full system that the contradiction/empty sequent · ⊢ · is not derivable, it is a corollary of the subformula property that · ⊢ · is not derivable”

**Sources:**

- [Gerhard Gentzen, Untersuchungen über das logische Schließen I, Mathematische Zeitschrift 39 (1935) 176–210](https://doi.org/10.1007/BF01201353)

### Generalized axioms and shared contexts make weakening keep proof height

**Remember:** Add the extra formula everywhere without changing the tree.

*True by definition. Confidence: medium.* MSC 03F07 (Structure of proofs), 03F05. arXiv math.LO. Level 3: graduate.

**Definition.** A sequent Γ ⇒ Δ lists assumptions Γ and possible conclusions Δ, here as multisets. Allow every sequent Γ, A ⇒ A, Δ as an axiom, with arbitrary extra formulas. Give each two-premise rule the same side formulas in both premises. Gentzen's calculus instead has the axiom A ⇒ A and an explicit weakening rule.

**Problem.** In this calculus, suppose Γ ⇒ Δ has a proof of height n. Then Γ, C ⇒ Δ has a proof of height at most n.

**How the definition helps.** The extra formula can ride along in every axiom and every shared context, so no rule has to change. Wikipedia says that the broader axiom makes weakening admissible, meaning that it proves no new sequents. Our own proof is an induction on height that adds C to every sequent in the tree. In Gentzen's calculus, weakening is a primitive rule instead. Negri and von Plato build their G3 calculi this way so that the structural rules become admissible.

**Wikipedia:** [Sequent calculus](https://en.wikipedia.org/wiki/Sequent_calculus). It says: “Any weakening that appears in a derivation can then be moved to the beginning of the proof.”

**Sources:**

- [Negri and von Plato (2001), Structural Proof Theory, Cambridge University Press](https://doi.org/10.1017/CBO9780511527340)

### The Dialectica translation puts every formula in ∃∀ form over System T

**Remember:** Every formula becomes 'some functional beats every challenger'.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F10 (Functionals in proof theory), 03F25, 03F55. arXiv math.LO. Level 3: graduate.

**Definition.** Gödel's Dialectica interpretation maps each formula A of Heyting arithmetic to a formula ∃x ∀y A′(x, y) with A′ quantifier-free. Here x and y are functionals of System T, the theory of primitive recursive functionals of finite type. Such functionals may take functions as inputs. For A → B, the functionals turn witnesses of A into witnesses of B, and challenges to B into challenges to A.

**Problem.** Prove that Heyting arithmetic, which is Peano arithmetic without excluded middle, is consistent relative to a quantifier-free theory of functionals. The same then holds for Peano arithmetic.

**How the definition helps.** Because every translated formula has the same ∃∀ shape, each proof rule becomes a construction of explicit terms of System T. So a proof of a contradiction in arithmetic would give a proof of 0 = 1 in System T. The Gödel–Gentzen negative translation first reduces Peano arithmetic to Heyting arithmetic. What stays hard is the consistency of System T itself, which needs induction up to the ordinal ε₀ (our own remark).

**Wikipedia:** [Dialectica interpretation](https://en.wikipedia.org/wiki/Dialectica_interpretation). It says: “Gödel's motivation for developing the dialectica interpretation was to obtain a relative consistency proof for Heyting arithmetic (and hence for Peano arithmetic).”

**Sources:**

- [Gödel, K. (1958). Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes. Dialectica 12, 280–287.](https://doi.org/10.1111/j.1746-8361.1958.tb01464.x)

### Hereditary base notation lets ordinals prove Goodstein's theorem

**Remember:** Replace the base by ω, and every Goodstein sequence goes down.

*Makes the theorem clean to state or prove.* MSC 03F15 (Recursive ordinals and ordinal notations), 03F30, 03E10. arXiv math.LO. Level 3: graduate.

**Definition.** To write a number in hereditary base-n notation, write it in base n. Then write each exponent in base n, and repeat until only numbers below n appear. A Goodstein sequence writes its current term in hereditary base n, replaces every n by n + 1, and subtracts 1.

**Problem.** Goodstein's theorem says that every Goodstein sequence reaches 0. The terms first grow enormously, so the claim looks false.

**How the definition helps.** Every n appears in the notation, even in the exponents. So one can replace the base by the first infinite ordinal ω, and get an ordinal that does not depend on the base. Changing the base leaves this ordinal the same, and subtracting 1 makes it strictly smaller. So the Goodstein sequence gives a strictly decreasing sequence of ordinals, which must stop, because ordinals are well-ordered. Ordinary base-n notation does not work, because the exponents themselves can exceed the base. What stays hard is the Kirby–Paris theorem: Peano arithmetic, the usual axioms for the natural numbers, cannot prove Goodstein's theorem. Its proof uses nonstandard models of arithmetic (our own).

**Wikipedia:** [Goodstein's theorem](https://en.wikipedia.org/wiki/Goodstein%27s_theorem). It says: “This notation is very similar to usual base-n positional notation for natural numbers, but the usual notation does not suffice for the purposes of Goodstein's theorem.”

**Sources:**

- [Goodstein, R. L. (1944). On the restricted ordinal theorem. Journal of Symbolic Logic 9, 33–41.](https://doi.org/10.2307/2268019)
- [Kirby, L.; Paris, J. (1982). Accessible independence results for Peano arithmetic. Bulletin of the London Mathematical Society 14, 285–293.](https://doi.org/10.1112/blms/14.4.285)

### Adding congruence predicates gives Presburger arithmetic quantifier elimination

**Remember:** Name the remainders, and the quantifiers disappear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F30 (First-order arithmetic and fragments), 03C10, 03B25. arXiv math.LO. Level 3: graduate.

**Definition.** Presburger arithmetic is the first-order theory of the natural numbers with 0, 1 and addition. The usual proof adds the order &lt; and, for each n, a predicate x ≡ y (mod n) to the language.

**Problem.** Presburger arithmetic is decidable and complete.

**How the definition helps.** With the congruence predicates, each formula ∃x φ can be replaced by an equivalent formula without quantifiers, and quantifier-free sentences are easy to check. Without them, 'x is even' is ∃y (y + y = x) (our own example). No quantifier-free formula in 0, 1, + and &lt; says it. The new predicates are themselves definable, so no expressive power is added. The elimination step for linear inequalities with congruences is the remaining work.

**Wikipedia:** [Presburger arithmetic](https://en.wikipedia.org/wiki/Presburger_arithmetic). It says: “The decidability of Presburger arithmetic can be shown using quantifier elimination, supplemented by reasoning about arithmetical congruence.”

**Sources:** none listed. No primary source with a working link was found.

### Robinson's finite arithmetic Q makes first-order validity undecidable

**Remember:** Seven axioms are enough to make logic itself undecidable.

*Makes the theorem clean to state or prove.* MSC 03F30 (First-order arithmetic and fragments), 03D35. arXiv math.LO. Level 3: graduate.

**Definition.** Robinson arithmetic Q is Peano arithmetic without the induction schema. It has seven axioms about zero, successor, addition and multiplication. A theory is essentially undecidable if every consistent extension of it is undecidable.

**Problem.** Church's theorem: no algorithm decides which first-order sentences are valid, that is, true in every structure.

**How the definition helps.** Because Q has finitely many axioms, Q proves φ exactly when the sentence 'conjunction of Q's axioms implies φ' is valid (our own step). A decision method for validity would then decide Q, which is impossible. Peano arithmetic has infinitely many axioms, so it cannot be used this way directly. The remaining work is to show that all computable functions are representable in Q, that is, that Q proves each of their values.

**Wikipedia:** [Robinson arithmetic](https://en.wikipedia.org/wiki/Robinson_arithmetic). It says: “Q is important and interesting because it is a finitely axiomatized fragment of PA that is recursively incompletable and essentially undecidable.”

**Sources:**

- [Church, A. (1936). A note on the Entscheidungsproblem. Journal of Symbolic Logic 1, 40–41.](https://doi.org/10.2307/2269326)

### Gödel's β function codes finite sequences with only addition and multiplication

**Remember:** Two numbers and a remainder can hold any finite list.

*Makes the theorem clean to state or prove.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03D20. arXiv math.LO. Level 3: graduate.

**Definition.** β(a, b, i) is the remainder of a divided by 1 + (i + 1)·b. The β lemma says this about every finite sequence a₀, …, aₙ. There are numbers a and b with β(a, b, i) = aᵢ for every i ≤ n.

**Problem.** Every primitive recursive function, built from simple functions by composition and recursion, is definable in the language of addition and multiplication. This lets Gödel's incompleteness theorem apply to Peano arithmetic without an exponent symbol.

**How the definition helps.** With β, 'there is a sequence of values that obeys the recursion' becomes 'there are two numbers a and b', a first-order statement. The β function itself is defined with remainders, which only need + and ×. The β lemma is proved with the Chinese remainder theorem, since the numbers 1 + (i + 1)·b are pairwise coprime for a suitable b. Gödel used it in 1931 and named it in 1934.

**Wikipedia:** [Gödel's β function](https://en.wikipedia.org/wiki/G%C3%B6del%27s_%CE%B2_function). It says: “The β function is used, in particular, in showing that the class of arithmetically definable functions is closed under primitive recursion, and therefore includes all primitive recursive functions.”

**Sources:**

- [Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38, 173–198.](https://doi.org/10.1007/BF01700692)

### Three derivability conditions make Gödel's second theorem a few lines

**Remember:** Three rules for 'provable' turn the second incompleteness theorem into algebra.

*True by definition.* MSC 03F40 (Gödel numberings and issues of incompleteness), 03F45. arXiv math.LO. Level 3: graduate.

**Definition.** A provability predicate Prov(x) for a theory T must satisfy three conditions. If T proves φ, then T proves Prov(\#φ). T proves Prov(\#φ) → Prov(\#Prov(\#φ)). T proves that Prov(\#(φ → ψ)) and Prov(\#φ) give Prov(\#ψ).

**Problem.** Gödel's second incompleteness theorem: a consistent theory T that contains enough arithmetic does not prove its own consistency.

**How the definition helps.** Once Prov satisfies the conditions, the second theorem follows from the Gödel sentence by short modal reasoning. The same conditions give Löb's theorem. The work moves into another theorem: that the standard predicate for Peano arithmetic satisfies the conditions. The page says that the main effort of Gödel's proofs lay there. The second condition is the hardest (our own). T must prove that it can verify its own true Σ₁ statements, those of the form 'some number has a checkable property'.

**Wikipedia:** [Hilbert–Bernays–Löb provability conditions](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Bernays%E2%80%93L%C3%B6b_provability_conditions). It says: “The Hilbert–Bernays–Löb provability conditions, combined with the diagonal lemma, allow proving both of Gödel's incompleteness theorems shortly.”

**Sources:**

- [Löb, M. H. (1955). Solution of a problem of Leon Henkin. Journal of Symbolic Logic 20, 115–118.](https://doi.org/10.2307/2266895)

### Realizers carry witnesses, so Heyting arithmetic has the existence property

**Remember:** A realizer of 'there exists' must name the thing.

*True by definition.* MSC 03F50 (Metamathematics of constructive systems), 03F55, 03F30. arXiv math.LO. Level 3: graduate.

**Definition.** In Kleene's 1945 realizability, a natural number realizes a formula of arithmetic. A realizer of A ∨ B says which side holds and realizes it. A realizer of ∃x A(x) is a pair of a witness n and a realizer of A(n). A realizer of A → B is the index of a computable function that turns realizers of A into realizers of B.

**Problem.** Heyting arithmetic is Peano arithmetic without the law of excluded middle. It has the existence property: if it proves a sentence ∃x A(x), then it proves A(n) for some numeral n.

**How the definition helps.** Kleene's definition puts the witness inside the realizer of an existential sentence, so a proof of ∃x A(x) leads straight to a number n. Every theorem of Heyting arithmetic has a realizer. Plain realizability only shows that A(n) is realized, not that Heyting arithmetic proves A(n). A variant of realizability that also asks for provability closes this gap (our own remark). Rose showed that some realized formulas are not provable, so realizability does not match provability exactly. Our own remark: no number realizes 'every program halts or does not', since it would decide the halting problem.

**Wikipedia:** [Realizability](https://en.wikipedia.org/wiki/Realizability), [Disjunction and existence properties](https://en.wikipedia.org/wiki/Disjunction_and_existence_properties). It says: “A pair (n,m) realizes a formula (∃ x)A(x) if and only if m is a realizer for A(n). Thus a realizer for an existential formula produces an explicit witness for the quantifier”

**Sources:**

- [Kleene, S. C. (1945). On the interpretation of intuitionistic number theory. Journal of Symbolic Logic 10, 109–124.](https://doi.org/10.2307/2269016)

### Finiteness by a covering list survives surjections without excluded middle

**Remember:** Run the map on the list and keep the repeats.

*True by definition.* MSC 03F65 (Other constructive mathematics), 03E20. arXiv math.LO. Level 3: graduate.

**Definition.** Call a set finitely indexed if some list of n elements covers it, with repeats allowed. Equivalently, some surjection maps {1, …, n} onto it. The usual definition of finite asks for a bijection with {1, …, n}.

**Problem.** In constructive mathematics, which does not assume excluded middle, a surjective image of a finitely indexed set is finitely indexed. A surjective image of a finite set need not be finite there.

**How the definition helps.** With covering lists, the theorem is a composition, because a surjection after a surjection is a surjection (our own). With bijections, the image may have repeats that one cannot detect or remove (our own). For example, divide {0, 1} by the relation that makes 0 equal to 1 exactly when a proposition p holds (our own). If the result were finite, its size would decide whether p holds (our own). The work moves to the nLab theorem that a finitely indexed set with decidable equality is finite. Decidable equality means that any two elements are either equal or not.

**nLab:** [finite set](https://ncatlab.org/nlab/show/finite+set). It says: “that is, it is a quotient set of a finite set.”

**Sources:** none listed. No primary source with a working link was found.

### With Heyting fields, the real numbers form a field constructively

**Remember:** Divide by x when x is apart from 0, not merely nonzero.

*Rules out counterexamples.* MSC 03F65 (Other constructive mathematics), 26E40. arXiv math.LO, math.AC. Level 3: graduate.

**Definition.** A Heyting field is a local ring with 0 ≠ 1 in which every element that is not invertible equals 0. Here a local ring is a ring in which, if a sum is invertible, one of its terms is invertible. Equivalently, the relation x \# y, defined as "x − y is invertible", is a tight apartness relation, and every element apart from 0 is invertible. An apartness relation is a positive form of "not equal", and tight means that elements that are not apart are equal.

**Problem.** The real numbers should form a field in constructive mathematics (mathematics without the law of excluded middle), as they do in classical mathematics.

**How the definition helps.** The definition asks for inverses only of elements that are positively apart from 0, and the real numbers can supply those. The classical definition of a field is not satisfied constructively by the real numbers, however they are defined. Neither is the stronger notion of a discrete field, in which every element is 0 or invertible. The definition with a tight apartness relation is one that the located Dedekind real numbers do satisfy. Analysts of the Bishop school define "field" in this way. The cost is that the axiom is not coherent (it cannot be written in coherent logic, the restricted logic that many categories can interpret), so it can be internalized in fewer categories. Also, the MacNeille real numbers, which are less located, need not form a Heyting field.

**nLab:** [Heyting field](https://ncatlab.org/nlab/show/Heyting+field), [field](https://ncatlab.org/nlab/show/field). It says: “This is how 'practising' constructive analysts of the Bishop school usually define the simple word 'field'. An advantage is that the (located Dedekind) real numbers form a Heyting field”

**Sources:**

- [Peter Johnstone, Rings, Fields, and Spectra, Journal of Algebra 49 (1977) 238–260](https://doi.org/10.1016/0021-8693(77)90284-8)
- [Ray Mines, Fred Richman, Wim Ruitenburg, A Course in Constructive Algebra, Springer (1988)](https://doi.org/10.1007/978-1-4419-8640-5)

### Glivenko's theorem follows from the Boolean reflection of a Heyting algebra

**Remember:** Classical logic is intuitionistic logic seen through double negation.

*Makes the theorem clean to state or prove.* MSC 03G05 (Logical aspects of Boolean algebras), 03F55, 03F25. arXiv math.LO. Level 3: graduate.

**Definition.** Let L be a Heyting algebra, the algebraic form of intuitionistic propositional logic. Let L¬¬ (L with subscript ¬¬) be the set of regular elements: the x with ¬¬x = x. This set is a Boolean algebra, and the map x ↦ ¬¬x is the universal map from L to a Boolean algebra. So the free Boolean algebra Bool(S) on a set S is Heyt(S)¬¬, where Heyt(S) is the free Heyting algebra on S.

**Problem.** Glivenko's theorem: p ⇒ q is a classical propositional tautology if and only if ¬¬p ⇒ ¬¬q is an intuitionistic tautology. More generally, p is a classical tautology if and only if its double negation translation pᴺ is an intuitionistic one.

**How the definition helps.** Once Bool(S) is described as Heyt(S)¬¬, the proof is three lines. A classical tautology is a statement 1 ≤ (p ⇒ q) in Heyt(S)¬¬. Double negation preserves meets and implication. So this statement is the same as 1 ≤ (¬¬p ⇒ ¬¬q) in Heyt(S), which is the intuitionistic statement. The work moves into three lemmas: L¬¬ is a Boolean algebra, ¬¬ is the left adjoint to the inclusion Bool → Heyt, and ¬¬ preserves ∧ and ⇒. The same argument gives the syntactic translation p ↦ pᴺ, because ¬¬ preserves all the Heyting operations except ∨.

**nLab:** [double negation translation](https://ncatlab.org/nlab/show/double+negation+translation). It says: “To say p ⇒ q is a classical tautology means that 1 ≤ (p ⇒ q) holds when interpreted in Bool(S). But since Bool(S) = Heyt(S)\_¬¬, this is equivalent to saying that”

**Sources:** none listed. No primary source with a working link was found.

### A classifying topos defined by its universal model tests geometric sequents

**Remember:** What holds in the generic model holds in every model.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18B25. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A geometric theory T has axioms that are geometric sequents. Define its classifying topos S\[T\] as a Grothendieck topos with a universal model U. Every model in a Grothendieck topos E is f\*(U) for an essentially unique geometric morphism f : E → S\[T\]. The explicit construction uses sheaves on a category built from the formulas of T.

**Problem.** A geometric sequent holds in every model of T in every Grothendieck topos exactly when it holds in the universal model.

**How the definition helps.** The universal property makes every model a pullback of one model, so one check suffices (our own). Inverse images keep geometric sequents true, so truth in U passes to every f\*(U) (our own). The converse is immediate, since U is itself a model (our own). The work moves to building the classifying topos from T and proving the universal property (our own).

**nLab:** [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “f\* maps the T-model U to the model X.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Cartesian logic quantifies only over unique witnesses, so images always exist

**Remember:** In cartesian logic, say 'there exists' only when there is at most one.

*Rules out counterexamples.* MSC 03G30 (Categorical logic, topoi), 18C30, 18C10. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A cartesian theory is a first-order theory that uses only =, ⊤ (true), ∧ (and) and the existential quantifier ∃x.φ. It may use ∃x.φ only when φ is provably subterminal: φ(x) and φ(y) together prove x = y. So the theory uses ∃ only when the witness is unique.

**Problem.** Show that every theory of this kind has sound models in any category with finite limits. Also show that every cartesian theory has an initial model, so that forgetful functors between categories of models have left adjoints.

**How the definition helps.** Because the witness is unique, the formula is already its own image, so no image factorization is needed. In general, the interpretation of ∃ needs image factorizations (a map written as an epimorphism followed by a monomorphism), which a category with only finite limits does not have. The projection Γ × A → Γ forgets the variable x of type A. The subterminality side condition makes this projection, restricted to φ, a monomorphism. So φ is already its own image. This is what lets cartesian logic be the internal logic of every finitely complete category. The existence of initial models is a further theorem; Palmgren and Vickers gave a new proof of it in weak foundations.

**nLab:** [cartesian logic](https://ncatlab.org/nlab/show/cartesian+logic). It says: “the existential quantifier is interpreted as an image factorization, but the subterminality side condition ensures the image exists even in an arbitrary category with finite limits.”

**Sources:**

- [E. Palmgren, S. Vickers, Partial Horn logic and cartesian categories, Annals of Pure and Applied Logic 145 (2007) 314–353](https://doi.org/10.1016/j.apal.2006.10.001)

### Defining classifying toposes by a universal model makes base change a composite

**Remember:** Pulling back twice equals pulling back once along the composite.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18F10. arXiv math.CT, math.LO. Level 3: graduate.

**Definition.** A Grothendieck topos is a category of sheaves, which behaves like a universe of sets, and a geometric morphism is a map between toposes. A geometric theory uses only conjunction, possibly infinite disjunction and existential quantifiers. The classifying topos of such a theory T is a topos S\[T\] with a universal model U. Every model of T in any topos E is the pullback of U along a geometric morphism from E to S\[T\], unique up to isomorphism.

**Problem.** Let g from E to S\[T\] classify a model X in E, and let f be a geometric morphism from F to E. Then g∘f classifies the pulled-back model f\*X.

**How the definition helps.** The definition fixes a map by the model that it pulls back, so composite maps pull back by composite pullbacks, in our own argument. The nLab defines the classifying topos by the universal model U and this correspondence. In our own wording, (g∘f)\*U ≅ f\*(g\*U) ≅ f\*X. The work moves into proving that a concrete construction has this universal property, in our own account. That construction takes sheaves on a category built from the formulas of T, as the nLab describes.

**nLab:** [classifying topos](https://ncatlab.org/nlab/show/classifying+topos). It says: “the classifying topos for the geometric theory T is a Grothendieck topos S\[T\] equipped with a "universal model U of T".”

**Sources:** none listed. No primary source with a working link was found.

### Geometric logic is chosen so that inverse images preserve its formulas

**Remember:** Finite limits and colimits carry geometric logic along.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18B25. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** A topos is a category that behaves like a category of sheaves. The inverse image of a geometric morphism preserves finite limits and has a right adjoint. Geometric formulas use only true, false, finite ∧, arbitrary ∨ and ∃. Implication and ∀ appear only once, at the top level, in a sequent φ ⊢ ψ.

**Problem.** Inverse image along a geometric morphism sends models of a geometric theory to models and keeps geometric sequents true.

**How the definition helps.** Each geometric connective is built from finite limits and colimits, which inverse images preserve (our own). The nLab notes that inverse images preserve finite limits by definition and all colimits as left adjoints. Conjunction is a pullback, disjunction is a union, and ∃ is an image (our own). Unions and images are built from finite limits and colimits (our own). Implication and ∀ are left out because inverse images do not preserve them in general (our own).

**nLab:** [geometric morphism](https://ncatlab.org/nlab/show/geometric+morphism), [geometric theory](https://ncatlab.org/nlab/show/geometric+theory). It says: “necessarily preserves all constructions in geometric logic.”

**Sources:**

- [Saunders Mac Lane and Ieke Moerdijk, Sheaves in Geometry and Logic, Springer (1992; Universitext printing 1994)](https://doi.org/10.1007/978-1-4612-0927-0)

### Morleyization turns Deligne's theorem into classical completeness

**Remember:** Name every formula and its negation, and the theory becomes coherent.

*Makes the theorem clean to state or prove.* MSC 03G30 (Categorical logic, topoi), 03B10, 18F10. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Coherent logic is the part of first-order logic built from finite 'and', finite 'or' and 'there exists', with axioms of the form 'φ implies ψ'. The Morleyization of a finitary first-order theory adds a new relation symbol for each first-order formula and for its negation. It also adds coherent axioms that make these relations mean what they should over classical logic. So the result is a coherent theory.

**Problem.** Prove Gödel's completeness theorem for classical first-order logic. It says that models in Set detect provability: a statement that holds in every model is provable.

**How the definition helps.** Morleyization moves a classical theory into coherent logic, where Deligne's theorem already gives completeness. Over classical logic, every finitary first-order theory is equivalent to its Morleyization, which is coherent. Deligne's theorem says that every coherent topos has enough points, which means that its points can tell different subobjects apart. The classifying topos of a coherent theory is such a topos, and its points are the models of the theory in Set. So models in Set detect provability in coherent logic, and applied to the Morleyization, this gives the classical completeness theorem. The real content is Deligne's theorem; Morleyization only moves the classical theory into the coherent fragment.

**nLab:** [coherent logic](https://ncatlab.org/nlab/show/coherent+logic). It says: “It follows that models in Set are sufficient to detect provability in coherent logic. By Morleyization, we can obtain from this the classical completeness theorem for first-order logic.”

**Sources:**

- [M. Makkai, G. E. Reyes, First Order Categorical Logic, Lecture Notes in Mathematics 611, Springer (1977)](https://doi.org/10.1007/BFb0066201)

### Natural numbers as an initial algebra make successor injective and never zero

**Remember:** A bijection from one point plus a copy keeps both parts apart.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 18A30. arXiv math.LO, math.CT. Level 3: graduate.

**Definition.** Define ℕ as the initial set with a chosen point and a map to itself. Initial means that it has exactly one map to any other such set that preserves the point and the map. Such a structure is an algebra for the construction X ↦ 1 + X, which adds one new point to a set. The Peano axioms instead list separate conditions on zero and successor.

**Problem.** In ℕ, zero is not a successor, and the successor map is injective.

**How the definition helps.** Lambek's lemma turns both claims into one fact, that zero and successor together give a bijection from 1 + ℕ to ℕ (our own). The nLab states this lemma: the structure map of an initial algebra is an isomorphism. Here 1 + ℕ is one new point plus a separate copy of ℕ (our own). A bijection is injective, so the point and the copy have disjoint images, and successor is injective (our own). The Peano approach takes both claims as axioms instead (our own). The work moves to proving Lambek's lemma and showing by induction that a Peano system is initial (our own).

**nLab:** [initial algebra of an endofunctor](https://ncatlab.org/nlab/show/initial+algebra+of+an+endofunctor). It says: “If F has an initial algebra α: F(X) → X, then X is isomorphic to F(X) via α.”

**Sources:**

- [Joachim Lambek, A fixpoint theorem for complete categories (1968)](https://doi.org/10.1007/bf01110627)

### Bidirectional typing confines type conversion to one rule

**Remember:** Type equality is used in one place only: where synthesis switches to checking.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 18C50. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Replace the typing judgment T : A by two judgments. T ⇒ A says that T synthesizes the type A, so T determines A. T ⇐ A says that T checks against the type A. The only way to derive T ⇐ B is the mode-switching rule: from T ⇒ A and A ≡ B, conclude T ⇐ B.

**Problem.** Prove an initiality theorem for dependent type theory. The theorem says that the syntax forms the initial model, so each derivation has a well-defined meaning.

**How the definition helps.** Bidirectional typing puts every use of type equality at one known step, so the semantics has fewer derivations to identify. In the usual presentation, the conversion rule (from T : A and A ≡ B, conclude T : B) can be applied anywhere and again and again. So one judgment has many derivations, and the semantics must identify them; the page calls this the ickiest part of an initiality proof. With fully annotated terms and this variant of bidirectional typing, every term former synthesizes its type, and judgmental equality is used exactly when the mode switches. This factors type conversion out cleanly and matches the structure of the partial interpretation. It does not make the initiality theorem trivial: the project still has to do the full interpretation.

**nLab:** [Initiality Project - Type Theory](https://ncatlab.org/nlab/show/Initiality+Project+-+Type+Theory), [bidirectional typechecking](https://ncatlab.org/nlab/show/bidirectional+typechecking). It says: “This variant doesn't help with typechecking algorithms, but it still factors out type conversion cleanly: the equality judgment is used when, and only when, the mode switches.”

**Sources:**

- [Jana Dunfield, Neel Krishnaswami, Bidirectional typing, ACM Computing Surveys 54(5) (2021), arXiv:1908.05839](https://arxiv.org/abs/1908.05839)

### Defining sets as a terminal coalgebra makes anti-foundation hold

**Remember:** A graph decoration is a map into the terminal coalgebra, so it is unique.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03E65, 18A30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A coalgebra for the small powerset functor is a type X with a map that sends each x to a small subset of X. We read this subset as the members of x. A coalgebra is terminal if every other coalgebra has exactly one structure-preserving map into it. The paper builds such a terminal coalgebra V⁰∞ in homotopy type theory.

**Problem.** Aczel's anti-foundation axiom says that every graph has exactly one decoration. A decoration gives each node a set whose members are the sets given to its children. It allows sets such as x = {x}.

**How the definition helps.** A graph is itself a coalgebra, because each node has a set of children. A decoration is then a coalgebra map into V⁰∞, so terminality gives exactly one decoration (our own account of the standard argument). So anti-foundation is nearly the universal property. The hard work is to build the terminal coalgebra and to show that its membership relation is extensional. The data set also proves a multiset version of anti-foundation for a larger hierarchy M∞. The abstract of the latest version adds a caveat. There, the model of Aczel's axiom comes from the Aczel–Mendler terminal coalgebra theorem and needs propositional resizing, an extra axiom.

**Paper or page:** [Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory](https://arxiv.org/abs/2001.06696), [Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory](https://arxiv.org/abs/2001.06696). It says: “The ∈-structure (V⁰∞, ∈), with any ordered pairing structure, satisfies anti-foundation.”

**Sources:**

- [Håkon Robbestad Gylterud, Elisabeth Stenholm and Niccolò Veltri, Terminal Coalgebras and Non-wellfounded Sets in Homotopy Type Theory, arXiv:2001.06696](https://arxiv.org/abs/2001.06696)

### Defining surreals as a higher inductive type makes Conway's equality real equality

**Remember:** Build Conway's equality into the type, and no quotient step remains.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 12J15, 03E10. arXiv math.LO. Level 4: research.

**Definition.** Conway makes a surreal number from two sets of earlier numbers, the left and right options, with each left option less than each right option. Classically, two such forms count as the same number when each is ≤ the other, so numbers are equivalence classes. The HoTT Book defines the type NO and its order as a higher inductive type, which has constructors for equalities as well as for elements. One constructor makes a number from a cut, and an equality constructor gives x = y whenever x ≤ y and y ≤ x.

**Problem.** Conway's simplicity theorem gives x = z when z lies strictly between the options of x, under two further conditions. The book also shows that NO is a set.

**How the definition helps.** The equality constructor makes Conway's two-sided ≤ into the equality of NO, so there is no separate quotient step. The simplicity theorem therefore ends with a real equality x = z. Classically, one must first define games and then show that each operation respects the equivalence (our own comparison). What stays hard is that NO and its order must be defined at the same time (our own). Even the fact that every number satisfies x ≤ x is a theorem in the book, Conway's Theorem 0.

**nLab:** [surreal number](https://ncatlab.org/nlab/show/surreal+number). It says: “In homotopy type theory, the surreal numbers can be defined as a higher inductive type, roughly following Conway's definition but imposing the "defined" notion of equality as the "actual" equality with an identification-constructor.”

**Paper or page:** [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf), [HoTT Book: Reals](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf). It says: “Suppose x and z are surreal numbers defined by cuts, and that the following hold. xᴸ &lt; z &lt; xᴿ for all L and R. … Then x = z.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics (the HoTT Book), Institute for Advanced Study (2013)](https://hott.github.io/book/hott-online-78-g0bb33d2.pdf)

### Fully annotated syntax lets plain recursion define the interpretation

**Remember:** Each term carries its own type, so you can read its meaning from the term.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 18C50. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Write each term with all its type information. For example, an application App(M, N) also records the Π-type (x:A)B of M, the type of dependent functions that M has. Then every term that has a type synthesizes a canonical type from its context and its own syntax.

**Problem.** Prove the initiality theorem, following Streicher's proof. The theorem says that the syntax of a dependent type theory (a type theory in which types can depend on terms) is the initial model among its categorical models. Initial means that it has exactly one structure-preserving map to every other model.

**How the definition helps.** With full annotations, you can define the interpretation by plain recursion on raw terms (terms before type checking). First you define a partial interpretation this way. Then you show that it is total on derivable judgments. The project page says that it is at best unclear whether syntax with fewer annotations can be used in an initiality theorem without a step that amounts to adding the annotations. The project also uses Lumsdaine's change: the interpretation of the context is an input of the interpretation, not an output. The long part, the proof of totality, remains; it takes about 40 pages in Streicher.

**nLab:** [Initiality Project - Overview](https://ncatlab.org/nlab/show/Initiality+Project+-+Overview). It says: “It is, at best, unclear whether any less than fully annotated syntax can be used in an initiality theorem without preprocessing that is tantamount to annotating it.”

**Sources:**

- [Thomas Streicher, Semantics of Type Theory: Correctness, Completeness and Independence Results, Birkhäuser (1991)](https://doi.org/10.1007/978-1-4612-0433-6)

### Groups as pointed connected 1-types let Nielsen–Schreier be stated in HoTT

**Remember:** A subgroup is a covering space, so freeness means finding a spanning tree.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55R35, 20E05. arXiv math.LO, math.AT. Level 4: research.

**Definition.** In homotopy type theory, a group G can be given as a type BG that is pointed, connected and 1-truncated. 1-truncated means that it has no nontrivial paths between paths. The group is the type of loops at the base point. A subgroup then corresponds to a connected covering space over BG, that is, a family of sets indexed by BG.

**Problem.** The Nielsen–Schreier theorem says that every subgroup of a free group is free.

**How the definition helps.** In this form, a subgroup is a covering space whose total space is a graph, so freeness reduces to finding a spanning tree. The data set proves that every subgroup of a free group is the geometric realisation of a graph. If the graph has a spanning tree, its realisation is the free group on the edges outside the tree. A spanning tree exists constructively when there are finitely many vertices and the edges form a set with decidable equality. So the finite index case holds. In general the paper uses the axiom of choice to find a spanning tree. Swan also shows that the theorem fails in a Boolean ∞-topos, and that an "untruncated" version is false.

**Paper or page:** [On the Nielsen-Schreier Theorem in Homotopy Type Theory](https://arxiv.org/abs/2010.01187), [On the Nielsen-Schreier Theorem in Homotopy Type Theory](https://arxiv.org/abs/2010.01187). It says: “We give a formulation of the Nielsen-Schreier theorem (subgroups of free groups are free) in homotopy type theory using the presentation of groups as pointed connected 1-truncated types. We show the special case of finite index subgroups holds constructively”

**Sources:**

- [Andrew W. Swan, On the Nielsen-Schreier Theorem in Homotopy Type Theory, Logical Methods in Computer Science 18(1) (2022), arXiv:2010.01187](https://arxiv.org/abs/2010.01187)

### Half 2-adjoint data make being an equivalence a property again

**Remember:** At each level of coherence, ask for half, not all.

*Rules out counterexamples. Confidence: medium.* MSC 03B38 (Type theory), 18N45. arXiv math.LO, math.CT. Level 4: research.

**Definition.** In homotopy type theory, quasi-inverse data for a map f are an inverse g and homotopies gf ∼ id and fg ∼ id. A half adjoint equivalence adds one coherence. A half 2-adjoint equivalence (ish2adj) adds half of the next level of coherence.

**Problem.** We want the type of equivalence data to be a proposition, so that being an equivalence is a property and not extra structure. The HoTT book does this with half adjoint equivalences, because quasi-inverses are not a proposition. The question is what happens when we add the next level of coherence.

**How the definition helps.** Asking for only half of each new coherence makes the extra data contractible, that is, unique up to paths. Asking for both halves leaves free choices. The data set shows the bad cases. The quasi-inverse data for the identity map of the circle S¹ do not form a proposition. Full adjoint data and full 2-adjoint data for the identity of the 2-sphere S² do not form a proposition either. For an equivalence f, full adjoint data amount to a choice of a 2-dimensional loop at each point, and S² has nontrivial such loops. The half 2-adjoint version avoids these examples and is a proposition.

**Paper or page:** [2-adjoint equivalences in homotopy type theory](https://arxiv.org/abs/2008.12433), [2-adjoint equivalences in homotopy type theory](https://arxiv.org/abs/2008.12433). It says: “For any f : A → B, the type ish2adj f is a proposition.”

**Sources:**

- [Daniel Carranza, Jonathan Chang, Chris Kapulkin and Ryan Sandford, 2-adjoint equivalences in homotopy type theory, Logical Methods in Computer Science 17(1) (2021), arXiv:2008.12433](https://arxiv.org/abs/2008.12433)

### In homotopy type theory, the epimorphisms are exactly the acyclic maps

**Remember:** Homotopy epimorphisms are the maps whose fibers have contractible suspensions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55P10. arXiv cs.LO, math.AT. Level 4: research.

**Definition.** A map f : A → B of types is an epimorphism if composing with f is an embedding, the homotopy version of an injective map. The embedding goes from maps B → X to maps A → X, for every type X. A type is acyclic if its suspension, which glues two points along the type, is contractible, that is, equivalent to a point. A map is acyclic if all its fibers, the homotopy preimages of points, are acyclic.

**Problem.** In sets, epimorphisms are the surjections. In homotopy type theory, types carry higher structure, so one asks which maps are epimorphisms.

**How the definition helps.** The definition asks for an embedding, not just an injection, so it keeps track of all higher paths. Theorem 2.9 turns this into gluing: glue two copies of B along A, and the folding map back to B must be an equivalence. Fiber by fiber, this gluing is the suspension of the fiber, so the condition is acyclicity (our own reading of the theorem). Groups correspond to pointed connected 1-types, whose only structure is a group of loops. Through this, the result gives applications in group theory, such as the acyclicity of the Higman group. What stays hard is proving that particular types are acyclic.

**Paper or page:** [Epimorphisms and Acyclic Types in Univalent Foundations](https://arxiv.org/abs/2401.14106v3). It says: “We characterize the epimorphisms in homotopy type theory (HoTT) as the fiberwise acyclic maps and develop a type-theoretic treatment of acyclic maps and types in the context of synthetic homotopy theory as developed in univalent foundations.”

**Sources:**

- [Ulrik Buchholtz, Tom de Jong, Egbert Rijke, Epimorphisms and Acyclic Types in Univalent Foundations, arXiv:2401.14106 (2024)](https://arxiv.org/abs/2401.14106v3)

### Instantiating polymorphic types only with variables makes type checking decidable

**Remember:** Instantiate only with variables, and polymorphism costs nothing for type checking.

*Rules out counterexamples. Confidence: medium.* MSC 03B38 (Type theory), 03B40. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** System F is the polymorphic lambda calculus: a term of type ∀X.A can be used at type A with X replaced by any type. Atomic System F allows the replacement only by type variables, not by compound types.

**Problem.** In full System F, type checking and type inhabitation are undecidable. One wants a polymorphic system where type checking is decidable.

**How the definition helps.** The restriction keeps polymorphism so weak that it disappears when one erases the quantifiers. The paper's Lemma 4.1 maps every typing in the atomic system to a simply typed one. It deletes each ∀ and sends each type variable to one base type. So the typable terms are exactly the simply typable ones, and typability is decidable (Corollary 4.1). Type checking, where the type is given, needs a separate algorithm, which the paper gives (Theorem 4.2). Type inhabitation, whether some term has a given type, stays undecidable (Corollary 3.1). Contextual equivalence, whether two terms behave the same in every program, is undecidable too, unlike in the simply typed calculus.

**Paper or page:** [What's Decidable about (Atomic) Polymorphism](https://arxiv.org/abs/2105.00748v1). It says: “In this paper we investigate System Fat, or atomic System F, a very weak predicative fragment of System F whose typable terms coincide with the simply typable ones. We show that the type-checking problem for Fat is decidable”

**Sources:**

- [Paolo Pistone, Luca Tranchini, What's Decidable about (Atomic) Polymorphism, arXiv:2105.00748 (2021)](https://arxiv.org/abs/2105.00748v1)

### Iterative sets give univalent foundations a universe that is a set

**Remember:** A universe of sets that is itself a set can model type theory.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 03F65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** An iterative set is a well-founded tree, as in Aczel's model of set theory in type theory. The children of each node are indexed by a type, and the indexing must be an embedding at every level, so no child repeats. The type of all iterative sets is written V⁰. The paper makes V⁰ a universe, in which each iterative set is the code of the type of its elements.

**Problem.** In homotopy type theory, h-sets play the role of sets. An h-set is a type in which any two proofs of an equality are equal. The univalence axiom implies that the type of all h-sets is not an h-set, as the abstract says.

**How the definition helps.** V⁰ is itself an h-set, so it can serve as the strict universe of sets that internal models of type theory need (our own remark). Gylterud proved in 2018 that V⁰ is an h-set (our own remark). The paper shows that V⁰ has many good properties of h-sets. It makes V⁰ a locally cartesian closed category, which can interpret dependent function types (our own gloss). That structure gives a category with families, the standard notion of model of dependent type theory, as quoted. This works in a small univalent type theory with W-types, which are types of well-founded trees, and without higher inductive types. What stays different is that V⁰ as a category is strict and not univalent, unlike the usual category of h-sets.

**Paper or page:** [The Category of Iterative Sets in Homotopy Type Theory and Univalent Foundations](https://arxiv.org/abs/2402.04893v1). It says: “This enables us to organize it into a category with families with the structure necessary to model extensional type theory internally in HoTT/UF.”

**Sources:**

- [Daniel Gratzer, Håkon Gylterud, Anders Mörtberg, Elisabeth Stenholm, The Category of Iterative Sets in Homotopy Type Theory and Univalent Foundations, Math. Struct. Comp. Sci. 34 (2024) 945–970, arXiv:2402.04893](https://arxiv.org/abs/2402.04893v1)

### Local universes make type formers commute strictly with substitution

**Remember:** Form the general type once and change only its parameters.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** Represent a type over a context Γ as a pair (f, A). Here f, which the nLab calls a delayed substitution, is a map from Γ to some Δ, and A is a type over Δ. Substitution along a map g then only composes g with f. The usual representation pulls A back along each substitution, which is associative only up to isomorphism.

**Problem.** In the local universes model, essentially all type formers, such as dependent products, commute strictly with substitution. Forming a type before or after substitution gives the same type, not just an isomorphic one.

**How the definition helps.** Substitution changes only the map f, so a type formed once over its own base cannot be disturbed by later substitution. The nLab says that Lumsdaine and Warren extend essentially all type formers to this representation. The work moves into that extension. Our own reading is that each new type must be formed over a suitable new base, which the paper builds from local universes.

**nLab:** [categorical semantics of dependent type theory](https://ncatlab.org/nlab/show/categorical+semantics+of+dependent+type+theory). It says: “Type-theoretically, we can regard (f,A) as a type A with a "delayed substitution" f. This produces a split fibration (the chosen cartesian arrows are given by composition of morphisms in C), and it was proven by Lumsdaine &amp; Warren (2015) that essentially all type formers can be extended to it from E.”

**Sources:**

- [Lumsdaine and Warren (2015), The Local Universes Model](https://doi.org/10.1145/2754931)

### Observational type theory defines equality separately for each type

**Remember:** Equality is whatever you can observe, and you observe a function by applying it.

*True by definition.* MSC 03B38 (Type theory). arXiv math.LO, cs.LO. Level 4: research.

**Definition.** In observational type theory, the equality type is not one inductive family for all types. Instead, each type gets its own definition of equality, by recursion on how the type is built.

**Problem.** Function extensionality, and propositional extensionality for a given universe of propositions, should hold without being added as axioms. (Function extensionality says that functions with equal values are equal. Propositional extensionality says that logically equivalent propositions are equal.)

**How the definition helps.** Equality of functions is defined by their behaviour, so function extensionality holds by definition. A form of propositional extensionality, for a specified universe of propositions, is also built in. The cost is that this works for types that behave like sets. The nLab compares the types of observational type theory to h-sets in homotopy type theory (types in which any two proofs of an equality are equal). Higher observational type theory studies the extension to higher types.

**nLab:** [observational type theory](https://ncatlab.org/nlab/show/observational+type+theory). It says: “Since equality is defined type-by-type, OTT enjoys function extensionality, and a form of propositional extensionality at least for a specified universe of propositions”

**Sources:**

- [Thorsten Altenkirch, Conor McBride, Wouter Swierstra, Observational Equality, Now!, PLPV 2007, 57–68](https://doi.org/10.1145/1292597.1292608)

### On a univalent category, a representable presheaf map has unique representations

**Remember:** In a univalent category, existence of representations gives unique representations.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 18N45, 18F20. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A category is univalent when isomorphic objects are equal, in the sense of the univalence principle. A category with families (CwF) is a model of dependent type theory: it is a category with a chosen context extension for each type. A representable map of presheaves only asks that such extensions exist.

**Problem.** There are several categorical structures that model dependent type theory, and one wants to compare them. Categories with families contain a choice of context extensions, while representable maps of presheaves only assert that the extensions exist.

**How the definition helps.** In a univalent category, a representing object is unique up to unique isomorphism, and isomorphism is equality. So a choice is no extra information (our own explanation). Hence the forgetful map from CwF structures to representable maps is an equivalence. In a category that is not univalent, the two structures can differ, because one carries a choice and the other does not (our own). The data set has a similar result for universes relative to a fully faithful functor.

**Paper or page:** [Categorical structures for type theory in univalent foundations](https://arxiv.org/abs/1705.04310). It says: “If 𝒞 is a univalent category, then the forgetful map from CwF structures to representable maps of presheaves on 𝒞 is an equivalence. That is, any representable map of presheaves on 𝒞 carries a unique choice of representing data.”

**Sources:**

- [Benedikt Ahrens, Peter LeFanu Lumsdaine and Vladimir Voevodsky, Categorical structures for type theory in univalent foundations, Logical Methods in Computer Science 14(3) (2018), arXiv:1705.04310](https://arxiv.org/abs/1705.04310)

### Pointed maps into a homogeneous type are equal when their functions are

**Remember:** In a homogeneous type, the base point needs no extra care.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 55Q05. arXiv math.AT, math.LO. Level 4: research.

**Definition.** In homotopy type theory, a pointed type B is homogeneous when each point b of B has a self-equivalence of B. That equivalence must send the base point to b. Eilenberg–MacLane types and loop spaces are homogeneous.

**Problem.** Two pointed maps are equal only when there is a path between the functions and a compatible path between their base-point proofs. The second part is often the hard part of a proof.

**How the definition helps.** Homogeneity lets one move any point to the base point. So the base-point data can always be corrected afterwards, and only the plain functions need to agree. The lemma is due to Evan Cavallo, and the second paper calls it Evan's trick. It removes much coherence work in proofs about cohomology. The hard part is to show that the target type is homogeneous. For a type that is not homogeneous, equal functions can still give different pointed maps (our own).

**Paper or page:** [Symmetric Monoidal Smash Products in Homotopy Type Theory](https://arxiv.org/abs/2402.03523), [Computational Synthetic Cohomology Theory in Homotopy Type Theory](https://arxiv.org/abs/2401.16336). It says: “Let f ,g : A →⋆ B and let B be homogeneous. If f = g as plain functions, then f = g as pointed functions.”

**Sources:**

- [Axel Ljungström, Symmetric Monoidal Smash Products in Homotopy Type Theory, Math. Struct. Comp. Sci. (2024), arXiv:2402.03523](https://doi.org/10.1017/s0960129524000318)
- [Axel Ljungström, Anders Mörtberg, Computational Synthetic Cohomology Theory in Homotopy Type Theory, Math. Struct. Comp. Sci. 35 (2025) e16, arXiv:2401.16336](https://doi.org/10.1017/s0960129525000131)

### Set-theoretic and type-theoretic ordinals coincide, and univalence makes them equal

**Remember:** Two definitions of ordinal, one isomorphism, and univalence makes them one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 03E10. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** In univalent type theory, a type-theoretic ordinal is a set with a relation &lt; that is proposition-valued, transitive, extensional and well-founded. A set-theoretic ordinal is a transitive set of transitive sets in the cumulative hierarchy V, which is the type of sets built inside type theory. Its order is membership. The univalence axiom says that equivalent types, and so isomorphic structures, are equal.

**Problem.** Type theory and set theory give two different definitions of ordinal. One wants to know that they describe the same collection, with &lt; matching membership.

**How the definition helps.** With univalence, an isomorphism of ordinals is already an equality, so the comparison needs only a map that preserves and reflects the order. The work moves into building that map: the paper's map Φ from type-theoretic ordinals to V is injective and turns &lt; into membership (Lemma 28). A map Ψ in the other direction is a section of Φ on 𝕍ᵒʳᵈ (Proposition 32). What stays hard is size. Ψ(x) and the type of members of x are isomorphic but not equal (Corollary 46). They live in different universes, the nested levels of types.

**Paper or page:** [Set-Theoretic and Type-Theoretic Ordinals Coincide](https://arxiv.org/abs/2301.10696v3). It says: “The ordinals Ord and 𝕍ᵒʳᵈ are isomorphic (as type-theoretic ordinals). Hence, by univalence, they are equal.”

**Sources:**

- [Tom de Jong, Nicolai Kraus, Fredrik Nordvall Forsberg, Chuangjie Xu, Set-Theoretic and Type-Theoretic Ordinals Coincide, LICS 2023, arXiv:2301.10696](https://doi.org/10.1109/LICS56636.2023.10175762)

### Two-level type theory adds strict equality to define semisimplicial types

**Remember:** Use strict equality as scaffolding, then keep only the fibrant result.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B38 (Type theory), 18N40. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Two-level type theory has two layers. The inner layer holds the usual fibrant types of homotopy type theory, in which equality behaves like homotopy. The outer layer holds pretypes with a strict equality that is not fibrant. The outer layer is modelled on the strict structure of a model category that presents the homotopy theory.

**Problem.** Define semisimplicial types, and similar infinite coherent structures, inside a type theory based on homotopy type theory. A semisimplicial type is the type version of a semisimplicial set (a simplicial set without degeneracy maps).

**How the definition helps.** The strict outer equality lets one state the simplicial identities strictly, instead of up to coherent homotopy. In plain homotopy type theory, formalizing semisimplicial types meets technical difficulties. The reason is that the simplicial identities can only be imposed up to coherent homotopy. The nLab notes a remaining limitation. With two natural numbers types, one can define a fibrant type of n-truncated semisimplicial types for each n. One cannot define the untruncated ones without extra rules.

**nLab:** [two-level type theory](https://ncatlab.org/nlab/show/two-level+type+theory). It says: “Two-level type theories (including HTS and ACK) were motivated to a large extent by the technical difficulties encountered in formalizing semisimplicial types in default homotopy type theory (HoTT).”

**Sources:**

- [Danil Annenkov, Paolo Capriotti, Nicolai Kraus, Christian Sattler, Two-Level Type Theory and Applications, Mathematical Structures in Computer Science (2023); arXiv:1705.03307](https://arxiv.org/abs/1705.03307)

### Weakly constant endomaps give the generalized Hedberg theorem

**Remember:** Weakly constant means all values are equal, not that one value exists.

*Makes the theorem clean to state or prove.* MSC 03B38 (Type theory), 03F65. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** In homotopy type theory, a function f : A → B is weakly constant if f x = f y for all x, y : A. This does not ask for a value b with f = λx.b. So the identity function of the empty type is weakly constant.

**Problem.** A type A has split support (a map ‖A‖ → A, where the truncation ‖A‖ is A with all its elements made equal) if and only if A has a weakly constant endomap. Corollary: A is a set (h-set: a type whose identity types have at most one element) if and only if each identity type x = y has a weakly constant endomap. Hedberg's theorem follows: a type with decidable equality is a set.

**How the definition helps.** Weak constancy is just enough to make the fixed points of f a proposition, and it needs no given point. For a weakly constant endomap f, the type of fixed points Σ x, f x = x is a proposition (a type with at most one element) and is equivalent to ‖A‖. Its first projection then splits the support of A. Because the definition asks for no point, it also covers empty types. Kraus, Escardó, Coquand and Altenkirch then derive Hedberg's theorem: decidable equality gives a weakly constant endomap on each identity type, which sends every path to a chosen path when one exists. This step is in their paper, not on the nLab page. The fixed-point lemma is the real work, and the nLab remarks that weak constancy is only an 'incoherent approximation' to factoring through a proposition.

**nLab:** [weakly constant function](https://ncatlab.org/nlab/show/weakly+constant+function), [Hedberg's theorem](https://ncatlab.org/nlab/show/Hedberg%27s+theorem), [split support](https://ncatlab.org/nlab/show/split+support). It says: “A type A has split support if and only if it admits a weakly constant endomap f:A→A.”

**Sources:**

- [Nicolai Kraus, Martín Escardó, Thierry Coquand, Thorsten Altenkirch, Generalizations of Hedberg's theorem, TLCA 2013, Lecture Notes in Computer Science 7941](https://doi.org/10.1007/978-3-642-38946-7_14)
- [Nicolai Kraus, Martín Escardó, Thierry Coquand, Thorsten Altenkirch, Notions of anonymous existence in Martin-Löf type theory, Logical Methods in Computer Science 13 (2017), arXiv:1610.03346](https://arxiv.org/abs/1610.03346)

### With univalence, Aczel's W-type with its identity type models multisets

**Remember:** Equal index types count multiplicities, so the identity type gives multisets.

*True by definition. Confidence: medium.* MSC 03B38 (Type theory), 03F50. arXiv math.LO. Level 4: research.

**Definition.** Aczel's W-type has an element sup(A, f) for each small type A and map f from A to the W-type. Aczel identifies two elements when they have the same members up to his inductive equivalence, and this gives sets. Here one uses the identity type instead. With univalence, sup(A, f) = sup(B, g) means, roughly, an equivalence between A and B that matches f with g.

**Problem.** We want a model of multisets in Martin-Löf type theory. A multiset is like a set, but it records how many times each element occurs. The model should satisfy suitable versions of the axioms of constructive set theory.

**How the definition helps.** Equality given by equivalences of index types keeps track of how often each element occurs. The data set proves multiset extensionality from univalence. Two multisets x and y are equal exactly when, for every z, the types z ∈ x and z ∈ y are equivalent. Here z ∈ x is a type, and its size counts how often z occurs in x (our own gloss). Aczel's equivalence relation forgets the multiplicities, and this is why it gives sets. The work is to adapt the axioms of constructive set theory to multisets and to check them in the model.

**Paper or page:** [Multisets in Type Theory](https://arxiv.org/abs/1610.08027), [Multisets in Type Theory](https://arxiv.org/abs/1610.08027). It says: “Our investigation takes this W-type and instead considers the identity type on it, which can be computed from the Univalence Axiom. Our thesis is that this gives a model of multisets.”

**Sources:**

- [Håkon Robbestad Gylterud, Multisets in Type Theory, arXiv:1610.08027 (2016)](https://arxiv.org/abs/1610.08027)

### Explicit substitutions without a composition rule keep strong normalization

**Remember:** Finish the inner substitution before you touch the outer one.

*Rules out counterexamples.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** A calculus of explicit substitutions adds a term M⟨x≔N⟩, which means 'M with N put in for x, not yet done'. Its rules push the substitution through the term one step at a time. The good definition gives no rule that combines two substitutions, such as (M⟨x≔N⟩)⟨y≔P⟩ → M⟨x≔N, y≔P⟩.

**Problem.** Preservation of strong normalization: every simply typed term has only finite reduction sequences.

**How the definition helps.** Bloo and Rose proved that a calculus without any way to combine substitutions preserves strong normalization. A rule that swaps two substitutions allows infinite reduction sequences that only interchange substitutions. Melliès showed that even simultaneous substitutions with a composition rule allow infinite reductions of typed terms. The price is that an outer substitution must wait until the inner one has been pushed out of the head.

**nLab:** [explicit substitution](https://ncatlab.org/nlab/show/explicit+substitution). It says: “such a rule is undesirable because it destroys the strong normalization property of the reduction system”

**Sources:**

- [M. Abadi, L. Cardelli, P.-L. Curien, J.-J. Lévy, Explicit substitutions, J. Funct. Program. 1 (1991) 375–416](https://doi.org/10.1017/S0956796800000186)
- [P.-A. Melliès, Typed λ-calculi with explicit substitutions may not terminate, Typed Lambda Calculi and Applications (TLCA 1995), Lecture Notes in Computer Science 902 (1995) 328–334](https://doi.org/10.1007/bfb0014062)
- [Roel Bloo, Kristoffer H. Rose, Preservation of strong normalisation in named lambda calculi with explicit substitution and garbage collection, CSN-95: Computer Science in the Netherlands (1995)](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.51.5026) (link not checked)

### Strongly scoped syntax makes substitution avoid variable capture automatically

**Remember:** Every term declares its free variables, and binders must use other names.

*True by definition. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus), 03B38. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Raw terms are indexed by the finite set V of variables that may occur free in them. A binder may only bind a set of variables X with V ∩ X = ∅, that is, X shares no names with V. So bound names never clash with declared free names. This is a local form of the Barendregt convention, the habit of choosing bound names different from all free names.

**Problem.** The substitution M\[N/x\] puts N in place of x in M. It must not capture free variables of N under binders of M. In a naive named syntax, one must rename bound variables by hand and prove that this is correct.

**How the definition helps.** Capture cannot happen, because the types of the terms forbid it. The type Raw(V, s) declares the set V of free variables, and bound variables must be disjoint from it. So a binder in M can never bind a variable that is free in N. To push N under a binder, the definition first weakens N by freshening the bound variables, and the typing of the definition forces that step. So capture-avoidance is not a theorem to prove afterwards; it is built into which substitutions are well defined. The cost is that weakening needs explicit renaming. One must also still prove that substitution respects α-equivalence (equality up to renaming of bound variables).

**nLab:** [Initiality Project - Raw Syntax](https://ncatlab.org/nlab/show/Initiality+Project+-+Raw+Syntax). It says: “Note that substitution is automatically "capture-avoiding" because of our "strong scoping" and local Barendregt convention.”

**Sources:**

- [Robert Harper, Practical Foundations for Programming Languages, 2nd ed., Cambridge University Press, 2016](https://doi.org/10.1017/CBO9781316576892)

### The linear substitution calculus shows β-steps are a fair measure of time

**Remember:** Substitute one occurrence at a time, in place, like a box in a proof net.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03B40 (Combinatory logic and lambda calculus), 68N18, 03D15. arXiv cs.LO, cs.CC. Level 4: research.

**Definition.** The linear substitution calculus of Accattoli and Kesner is a λ-calculus with explicit substitutions, that is, substitutions written into the term as pending steps. These substitutions act 'at a distance': a redex (a part of the term that can reduce) may fire even with substitutions in between. Each substitution replaces one occurrence of a variable at a time.

**Problem.** Show that leftmost-outermost β-reduction, which always reduces the leftmost outermost redex first, is a reasonable cost model. This means that the number of β-steps measures time up to a polynomial.

**How the definition helps.** The calculus gives a compact way to write shared computation, and that makes the proof short enough to do. One β-step may copy a large term, so most people expected β-steps not to be a fair measure of time. Accattoli and Dal Lago proved that it is fair. Their proof uses the linear substitution calculus to express shared computation compactly. In the same calculus, the bookkeeping steps of abstract machines become structural equivalences, so each reduction strategy 'distills' a machine. The calculus does not make the invariance theorem trivial. It gives the language in which the proof is short enough to do.

**nLab:** [explicit substitution](https://ncatlab.org/nlab/show/explicit+substitution). It says: “Beniamino Accattoli and Ugo Dal Lago showed that the answer is in fact "yes", and their proof uses the LSC in a crucial way, in particular its capability of succinctly expressing computation thanks to sharing.”

**Sources:**

- [B. Accattoli, U. Dal Lago, (Leftmost-outermost) beta reduction is invariant, indeed, Log. Methods Comput. Sci. 2016, arXiv:1601.01233](https://arxiv.org/abs/1601.01233)
- [B. Accattoli, P. Barenbaum, D. Mazza, Distilling abstract machines, 2014, arXiv:1406.2370](https://arxiv.org/abs/1406.2370)

### An opremum detects modal irreducibility

**Remember:** One element lies in every nontrivial filter closed under the modal operation.

*True by definition.* MSC 03B45 (Modal logic (including the logic of norms)), 08B26. arXiv math.LO. Level 4: research.

**Definition.** A modal algebra is a Boolean algebra with an operation □ preserving intersections and 1. A modal filter contains 1 and is closed upwards, under intersections, and under □. An opremum is an element c strictly below 1 with the following property. For every a strictly below 1, some finite meet a ∧ □a ∧ … ∧ □ⁿa is at most c.

**Problem.** A modal algebra is subdirectly irreducible exactly when it has an opremum. Subdirect irreducibility means there is a least congruence strictly larger than equality.

**How the definition helps.** The inequality replaces a test over all congruences by a test on individual elements (our own explanation). The hard step identifies congruences with modal filters, ordered by inclusion. The filter generated by a consists of the elements above one of the displayed meets. Thus every filter larger than {1} contains the opremum, and the filter it generates is the least such filter. Conversely, any element below 1 in the least such filter satisfies the inequality.

**Paper or page:** [Stable Canonical Rules and Formulas for Pre-transitive Logics via Definable Filtration](https://arxiv.org/abs/2510.22638v1). It says: “A modal algebra A is s.i. iff A has an opremum”

**Sources:**

- [Tenyo Takahashi, Stable Canonical Rules and Formulas for Pre-transitive Logics via Definable Filtration, Proposition 2.1](https://arxiv.org/abs/2510.22638v1)

### In hybrid logic every pure axiom is complete for its frames

**Remember:** Name the worlds, and every pure axiom proves exactly its frames.

*Makes the theorem clean to state or prove.* MSC 03B45 (Modal logic (including the logic of norms)). arXiv cs.LO, math.LO. Level 4: research.

**Definition.** Hybrid logic extends modal logic with nominals, which are symbols true at exactly one world. The operator @ᵢφ says that φ holds at the world named i, and the binder ↓x gives the current world the name x. A formula is pure if it contains no ordinary propositional variables; it may contain nominals.

**Problem.** In ordinary modal logic, an axiom need not give a logic that is complete for its frames (our own remark). Incomplete modal logics exist. Sahlqvist's theorem gives completeness only for a special syntactic class.

**How the definition helps.** Nominals let a formula name worlds directly, so a pure axiom states a condition on frames (our own explanation). The completeness proof builds a model whose worlds all have names, and pure axioms stay true on its frame (our own explanation). So completeness holds for every set of pure axioms at once, as the quoted theorem states. The paper takes this theorem from a 2005 work by Balder ten Cate, as Theorem 9.4.4 there (our own reading of the citation). It covers frame conditions that no ordinary modal formula can define, such as irreflexivity, written @ᵢ¬◇i (our own example). Then the paper extends completeness to skeletal Sahlqvist formulas, which may contain ordinary propositional variables (Theorem 7.8). For those formulas the hard step is an algorithm that removes the propositional variables (our own summary).

**Paper or page:** [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder](https://arxiv.org/abs/2207.01288v1), [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder](https://arxiv.org/abs/2207.01288v1). It says: “For any set Σ of pure ℒ(@,↓)-sentences, 𝐊ℋ(@,↓) + Σ is sound and strongly complete with respect to the class of frames defined by Σ.”

**Sources:**

- [Sahlqvist-Type Completeness Theory for Hybrid Logic with Binder, arXiv:2207.01288 (2022)](https://arxiv.org/abs/2207.01288v1)
- [Patrick Blackburn, Balder ten Cate, Pure Extensions, Proof Rules, and Hybrid Axiomatics, Studia Logica (2006)](https://doi.org/10.1007/s11225-006-9009-6)

### In the antithesis interpretation, one affine statement gives both constructive versions

**Remember:** Every statement carries its own way to be refuted, and affine logic tracks both.

*Makes the theorem clean to state or prove.* MSC 03B47 (Substructural logics (including relevance, entailment, linear logic, Lambek calculus, BCK and BCI logics)), 03F25, 03F65. arXiv math.LO. Level 4: research.

**Definition.** An affine proposition is a pair (P⁺, P⁻) of intuitionistic propositions that cannot both hold. P⁺ is the thesis and P⁻ is the antithesis. The connectives of affine logic (linear logic in which you may drop hypotheses) act on such pairs; for example, linear negation swaps the two parts. Additive conjunction gives (P⁺ ∧ Q⁺, P⁻ ∨ Q⁻).

**Problem.** In constructive mathematics, a classical statement splits into a positive version and a separate negative version. For example, 'x is rational' becomes ∃q, x = q, and 'x is irrational' becomes ∀q, x \# q, where \# is apartness (a positive form of inequality). One wants to derive both versions and prove theorems about both at once.

**How the definition helps.** One affine proof gives two constructive theorems at once. The interpretation derives the pair (P⁺, P⁻) from one statement in affine logic, in a systematic way. It is sound: if Pᴸ ⊢ Qᴸ in affine logic, then P⁺ ⊢ Q⁺ and Q⁻ ⊢ P⁻ in intuitionistic logic. Here Pᴸ and Qᴸ are the affine statements. It also explains why weak and strong versions of a notion appear. For example, inequality and apartness come from the two readings of transitivity of equality.

**nLab:** [antithesis interpretation](https://ncatlab.org/nlab/show/antithesis+interpretation). It says: “The point of the antithesis interpretation is that the pair (P⁺, P⁻) may be derived systematically from a single statement Pᴸ in affine logic.”

**Sources:**

- [M. Shulman, Affine logic for constructive mathematics, Bull. Symb. Logic 28 (2022) 327–386, arXiv:1805.07518](https://arxiv.org/abs/1805.07518)

### Kripke's partial truth predicate lets a language talk about its own truth

**Remember:** Give the liar no truth value, and a language can discuss its own truth.

*Rules out counterexamples. Confidence: medium.* MSC 03B60 (Other nonclassical logic), 03B50, 03A05. arXiv math.LO. Level 4: research.

**Definition.** Kripke's truth predicate is partial. Its extension is the set of sentences it calls true, and its anti-extension is the set it calls false. Some sentences, such as the liar ('this sentence is not true'), are in neither set. Kripke builds the predicate in stages, up to the least fixed point of a monotone evaluation under the strong Kleene rules (a logic with three values: true, false and undefined).

**Problem.** Let a language contain its own truth predicate without the liar paradox making it contradictory.

**How the definition helps.** A partial predicate avoids the liar contradiction, because the liar never gets a value. Tarski's undefinability theorem rules out a total truth predicate inside the language. The construction is monotone: each stage keeps every value given at earlier stages. So transfinite induction reaches a fixed point, where one more stage adds nothing. Our own remark: the cost is that the language cannot say of the liar that it is 'not true' in a way that is itself true. So a version of the paradox comes back in the metalanguage (the language used to describe the original language).

**Wikipedia:** [Semantic theory of truth](https://en.wikipedia.org/wiki/Semantic_theory_of_truth). It says: “Based on partial logic (a logic of partially defined truth predicates instead of Tarski's logic of totally defined truth predicates), Kripke allows a language to contain its own truth predicate”

**Sources:**

- [Kripke, S. (1975). Outline of a theory of truth. Journal of Philosophy 72, 690–716.](https://doi.org/10.2307/2024634)

### Coalgebras of the pebbling comonad are tree decompositions

**Remember:** Tree-width at most k − 1 means having a coalgebra for k pebbles.

*Makes the theorem clean to state or prove.* MSC 03C13 (Model theory of finite structures), 18C15, 68Q19. arXiv cs.LO, math.CT. Level 4: research.

**Definition.** For a relational structure A, the pebbling comonad ℙₖ builds the structure of finite plays of the k-pebble game on A. Each move puts one of k pebbles on an element. A comonad is a construction with maps 'extract' and 'duplicate' that satisfy unit and associativity laws. A coalgebra for it is a map A → ℙₖA that is compatible with these maps.

**Problem.** Tree-width is a combinatorial measure of how tree-like a graph is, and k-variable logic is a logical notion. Finite model theory relates them case by case; one wants one framework for both.

**How the definition helps.** Since the comonad is built from plays, a coalgebra consistently picks, for each element, a play that ends on it. This is the same data as a tree decomposition, a tree of small overlapping pieces that covers the structure (our own summary). So tree-width becomes 'has a coalgebra', as the quoted proposition states. In the coKleisli category, a map from A to B is a map ℙₖA → B, which is a strategy in the game (our own). There, morphisms and isomorphisms capture fragments of infinitary k-variable logic, which allows infinite conjunctions but only k variables (Montacute–Shah abstract). The same recipe gives tree-depth from the Ehrenfeucht–Fraïssé comonad and pathwidth from the pebble-relation comonad. What stays hard is the combinatorial argument that matches coalgebras with decompositions for each new comonad.

**Paper or page:** [Lovász-Type Theorems and Game Comonads](https://arxiv.org/abs/2105.03274v1), [An invitation to game comonads](https://arxiv.org/abs/2407.00606v1), [The Pebble-Relation Comonad in Finite Model Theory](https://arxiv.org/abs/2110.08196v6). It says: “A σ-structure A admits a coalgebra structure α : A → ℙₖ(A) if, and only if, it has tree-width at most k−1.”

**Sources:**

- [Samson Abramsky, Anuj Dawar, Pengming Wang, The pebbling comonad in Finite Model Theory, LICS 2017](https://doi.org/10.1109/LICS.2017.8005129)
- [Anuj Dawar, Tomáš Jakl, Luca Reggio, Lovász-Type Theorems and Game Comonads, LICS 2021, arXiv:2105.03274](https://doi.org/10.1109/LICS52264.2021.9470609)
- [Samson Abramsky, Luca Reggio, An invitation to game comonads, arXiv:2407.00606 (2024)](https://arxiv.org/abs/2407.00606v1)
- [Yoàv Montacute, Nihil Shah, The Pebble-Relation Comonad in Finite Model Theory, Logical Methods in Computer Science 20(2) (2024), arXiv:2110.08196](https://arxiv.org/abs/2110.08196v6)

### Ultracategories let one recover a coherent theory from its models

**Remember:** An ultracategory is a category that knows how to take ultraproducts.

*Makes the theorem clean to state or prove.* MSC 03C20 (Ultraproducts and related constructions), 03G30, 03C52. arXiv math.LO, math.CT. Level 4: research.

**Definition.** An ultracategory is a category M with abstract ultraproduct functors ∫ − dμ : Mᴵ × βI → M for each set I, subject to coherence conditions. Here βI is the set of ultrafilters on I, so the functor takes an I-indexed family of objects and an ultrafilter μ and gives their ultraproduct. Ultrafunctors are functors that preserve these ultraproducts up to coherent isomorphism.

**Problem.** Recover a coherent theory, up to Morita equivalence, from its models. A coherent theory is a first-order theory that uses only ∧, ∨, ∃, true and false.

**How the definition helps.** The ultraproduct structure is exactly the extra data that makes the reconstruction theorem true. The bare category Mod(T) of models does not determine the theory. An equivalence Mod(T₁) ≃ Mod(T₂) need not come from an equivalence of syntactic pretoposes (the categories built from the formulas of the theories). Makkai's theorem uses the ultracategory structure. It says that evaluation P → Ult(Mod(P), Set), into the category of ultrafunctors from Mod(P) to sets, is an equivalence for every small pretopos P. The proof of Makkai's theorem is still hard, and Lurie later extended it to coherent toposes.

**nLab:** [ultracategory](https://ncatlab.org/nlab/show/ultracategory). It says: “it becomes sufficient to reconstruct the theory up to Morita equivalence once it is endowed with the structure of an ultracategory.”

**Sources:**

- [Michael Makkai, Stone duality for first order logic, Advances in Mathematics 65 (1987) 97–170](https://doi.org/10.1016/0001-8708(87)90020-X)

### Beth definability for an infinitary logic gives Stone–Weierstrass

**Remember:** Implicit definitions become explicit, and separating sublattices become dense.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C40 (Interpolation, preservation, definability), 08A65, 46E05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** A variety is a class of algebras defined by equations, and an infinitary variety may use operations with infinitely many arguments. The paper attaches an equational logic ⊨Δ to such a variety Δ. The Beth definability property says that if a theory fixes the meaning of a symbol uniquely, then some term defines the symbol explicitly.

**Problem.** The paper uses Stone's lattice version of the Stone–Weierstrass theorem on a compact Hausdorff space X. Let G be a set of continuous real functions on X that contains 1 and separates points. If G is closed under scalar multiples, sums and maxima, then G is uniformly dense.

**How the definition helps.** The logic is chosen so that the Stone–Weierstrass theorem becomes an instance of a general logical property. In our own reading, Δ is a class of algebras that is dual to compact Hausdorff spaces, from earlier work of Marra and Reggio. The paper shows that the Beth property is equivalent to this: every epimorphism in Δ is surjective. An epimorphism is a map that can be cancelled from the right of a composite. In our own reading, a separating set of functions gives such a map, so it must be onto. The paper proves the Beth property, and the Stone–Weierstrass theorem follows. It also gives a Hilbert-style calculus whose consequence relation coincides with ⊨Δ.

**Paper or page:** [Beth definability and the Stone-Weierstrass Theorem](https://arxiv.org/abs/2007.05281). It says: “We introduce an equational logic ⊨Δ associated with an infinitary variety Δ and show that the Stone-Weierstrass Theorem is a consequence of the Beth definability property of ⊨Δ, stating that every implicit definition can be made explicit.”

**Sources:**

- [Luca Reggio, Beth definability and the Stone-Weierstrass Theorem, arXiv:2007.05281 (2021)](https://arxiv.org/abs/2007.05281)

### Positive logic lets hyperimaginaries be added as ordinary sorts

**Remember:** Without built-in negation, quotients by infinite formulas become ordinary sorts.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03C45 (Classification theory, stability, and related concepts in model theory), 03C95. arXiv math.LO. Level 4: research.

**Definition.** In positive logic, the basic formulas use only ∧, ∨ and ∃, and negation is added only where it is wanted. The models of interest are the existentially closed ones, in which every positive formula that holds in some extension already holds. A hyperimaginary is a class of an equivalence relation that is defined by an infinite set of formulas (a type-definable equivalence relation).

**Problem.** Model theorists want independence theory for hyperimaginaries in NSOP₁ theories, a broad class of unstable theories that includes the simple theories. In full first-order logic, a hyperimaginary cannot in general be a sort, so theorems about sorts do not apply to it directly (our own).

**How the definition helps.** A type-definable relation may be a basic relation of a positive theory (our own explanation). This is because positive logic does not require its complement to be definable. Adding hyperimaginary sorts thus gives another positive theory, and the abstract says this keeps NSOP₁ and other properties. The paper proves that Kim-independence over existentially closed models has its usual properties in thick positive NSOP₁ theories. Thickness, the assumption that being an indiscernible sequence is type-definable, is the condition that remains.

**Paper or page:** [Kim-independence in positive logic](https://arxiv.org/abs/2105.07788). It says: “a proper generalisation of first-order logic where negation is not built in, but can be added as desired. For example, an important application is that we can add hyperimaginary sorts to a positive theory to get another positive theory”

**Sources:**

- [Jan Dobrowolski and Mark Kamsma, Kim-independence in positive logic, Model Theory 1 (2022) 55–113, arXiv:2105.07788](https://arxiv.org/abs/2105.07788)

### Defining pseudofinite groups by finite-group sentences makes definable injections surjective

**Remember:** A first-order counting rule true in all finite groups holds here too.

*True by definition. Confidence: medium.* MSC 03C60 (Model-theoretic algebra), 20A15, 03C13. arXiv math.LO. Level 4: research.

**Definition.** A group is pseudofinite if it is infinite and satisfies every first-order sentence that is true in all finite groups. Another definition asks for an infinite group with the same first-order sentences as an ultraproduct of finite groups. An ultraproduct identifies two sequences of elements when they agree on a set in an ultrafilter, a chosen family of large index sets.

**Problem.** In a pseudofinite group, every injective map from the group to itself that a formula defines, even with parameters, is surjective.

**How the definition helps.** Under the first definition, the result holds as soon as it is written as one sentence true in all finite groups, in our own argument. Fix a formula φ(x, y, z) in which z are the parameters. The sentence says that for all z, if φ defines an injective map from the group to itself, then that map is surjective. This sentence holds in every finite group, so it holds in every pseudofinite group, in our own argument. With the ultraproduct definition, one also needs Łoś's theorem, which carries first-order truth into an ultraproduct, in our own account. The data-set paper uses the ultraproduct form of the definition. The work moves into showing that the two definitions agree, with Łoś's theorem and a choice of ultrafilter, in our own account.

**Paper or page:** [A note on pseudofinite groups of finite centraliser dimension](https://arxiv.org/abs/2106.05698v1). It says: “Let G ≡ ∏ᵢ∈I Gᵢ/U be a pseudofinite group with cd(G) = k.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded phase gives definable volumes

**Remember:** A bounded phase needs only a restricted sine.

*Makes the theorem clean to state or prove.* MSC 03C64 (Model theory of ordered structures; o-minimality), 14F40. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Integrate exp(−f)ω over a closed set G in complex affine space given by real polynomial conditions over ℚ. Orient its smooth part outside a lower-dimensional subset. Take f and ω rational over ℚ and regular on G, with the degree of ω equal to the real dimension of G. Require f to have compact preimages of compact sets on G, bounded imaginary part, and real part bounded below.

**Problem.** The real and imaginary parts of each such integral are, up to sign, volumes of compact sets. Formulas defining those sets use ordered real field operations, the exponential, and sine on \[0,1\], without extra real constants.

**How the definition helps.** A bounded imaginary part lets restricted sine describe the oscillation of the exponential weight. In our own explanation, angle addition expresses sine and cosine on any fixed bounded interval using sine on \[0,1\]. The volume theorem turns the resulting signed integrals into volumes of compact sets.

**Wikipedia:** [Period (number theory)](https://en.wikipedia.org/wiki/Period_%28number_theory%29). It says: “Permitting the integrand Q to be the product of an algebraic function and the exponential of an algebraic function”

**Sources:**

- [Commelin, Habegger and Huber, Exponential periods and o-minimality](https://aif.centre-mersenne.org/articles/10.5802/aif.3801/)

### The many definitions of definable compactness agree in o-minimal structures

**Remember:** In o-minimal geometry, curves, types and closed families give one compactness.

*True by definition. Confidence: medium.* MSC 03C64 (Model theory of ordered structures; o-minimality), 54D30. arXiv math.LO, math.GN. Level 4: research.

**Definition.** An o-minimal structure is an ordered structure in which every definable subset of the line is a finite union of points and intervals. A type is a consistent, complete set of formulas that describes a possible point. A definable topological space is definably compact if every definable downward directed family of nonempty closed sets has nonempty intersection. Other versions ask that every definable type has a limit, or that every definable curve can be completed with a limit point.

**Problem.** Peterzil and Steinhorn (1999) and Johnson (2018) asked whether these definitions of definable compactness agree for definable topological spaces.

**How the definition helps.** Once the definitions agree, each proof may use the definition that makes it easiest. The work moves into the equivalence theorem, Theorem A in the data set. The versions with closed families and with types agree in every definable topological space. The curve version follows from them, and is equivalent to them if the topology is Hausdorff or the structure has definable choice. Over the real numbers, the paper deduces that definable compactness is the same as compactness. In our own words, curves suit geometric arguments, types suit model-theoretic arguments, and closed families copy the finite intersection property.

**Paper or page:** [Definable compactness in o-minimal structures](https://arxiv.org/abs/2405.07112). It says: “Specifically, we prove the equivalence of various definitions of definable compactness in the literature, including those in terms of definable curves, definable types, and definable downward directed families of closed sets.”

**Sources:**

- [Pablo Andújar Guerrero, Definable compactness in o-minimal structures, Model Theory 4 (2025) 101–130, arXiv:2405.07112](https://arxiv.org/abs/2405.07112)

### The geometric theory of natural numbers has only the standard model

**Remember:** An infinite 'or' says each number is 0 followed by finitely many successors.

*Rules out counterexamples. Confidence: medium.* MSC 03C75 (Other infinitary logic), 03G30, 03C35. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The geometric theory of the standard successor algebra has one sort N, a constant 0 and a function s. Its axioms say that s is injective and that 0 is not a successor. A third axiom uses an infinite disjunction (an infinite 'or'): every n equals 0, or s(0), or s(s(0)), and so on. Geometric logic is a logic that allows such infinite disjunctions.

**Problem.** Axiomatize the natural numbers so that the theory has no nonstandard models, which first-order arithmetic cannot do. The theory should also be complete, in the sense that it has no consistent quotient theories (theories with extra axioms in the same language).

**How the definition helps.** The infinite disjunction says what first-order axioms cannot say, so it rules out nonstandard models. First-order axioms cannot say 'every number is reached from 0 in finitely many steps', so they have nonstandard models. The classifying topos of the theory is Set, the terminal topos. The classifying topos is the topos for which models of the theory in a topos E correspond to geometric morphisms from E into it. In our own gloss, this means that every Grothendieck topos has exactly one model up to isomorphism, its natural numbers object. Set has no nontrivial subtoposes, so the theory has no consistent quotient theories. This is the sense in which the nLab calls it complete.

**nLab:** [geometric theory](https://ncatlab.org/nlab/show/geometric+theory). It says: “The classifying topos is Set. But due to the trivial subtopos lattice, theories classified by Set admit no consistent quotient theories; thus the geometric theory of natural numbers is complete!”

**Sources:**

- [Steven Vickers, Locales and Toposes as Spaces, in Handbook of Spatial Logics, Springer (2007) 429–496](https://doi.org/10.1007/978-1-4020-5587-4_8)

### Fullness is exactly what Łoś's theorem needs in Boolean-valued models

**Remember:** Łoś needs one witness that reaches the supremum, and fullness supplies it.

*True by definition. Confidence: medium.* MSC 03C90 (Nonclassical models (Boolean-valued, sheaf, etc.)), 03E40. arXiv math.LO. Level 4: research.

**Definition.** A Boolean-valued model gives each formula a truth value in a complete Boolean algebra B, not only "true" or "false". The model is full if, for every formula φ(x), some element a has the whole value of ∃x φ(x). That is, the value of φ(a) equals the supremum of the values of φ(b) over all b. The mixing property is a stronger condition: elements can be glued along any antichain of B.

**Problem.** Łoś's theorem for a Boolean-valued model M concerns an ultrafilter G on B. It says that the quotient of M by G satisfies φ(\[a\]) exactly when the value of φ(a) is in G. We want to know which Boolean-valued models satisfy it.

**How the definition helps.** The only hard step in a proof of Łoś's theorem is the existential quantifier, and fullness asks exactly for the witness that this step needs. The steps for ∧, ∨ and ¬ work in every Boolean-valued model, because an ultrafilter respects finite meets and complements (our own). Without fullness, the value of ∃x φ(x) can be in G while each single value of φ(a) is outside G (our own). Then Łoś's theorem fails for ∃x φ(x). Forcing in set theory uses models with the mixing property, and the paper shows that mixing is strictly stronger than fullness. The real work of the paper is the description of fullness in terms of sheaves and étalé spaces.

**Paper or page:** [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852). It says: “We also give an exact topological characterization (the so called fullness property) of which boolean valued models satisfy Loś Theorem”

**Sources:**

- [Moreno Pierobon and Matteo Viale, Boolean valued models, presheaves, and étalé spaces, arXiv:2006.14852 (2023)](https://arxiv.org/abs/2006.14852)

### Mixing supplies existential witnesses

**Remember:** Refine the join into disjoint pieces, then mix the witnesses.

*Rules out counterexamples.* MSC 03C90 (Nonclassical models (Boolean-valued, sheaf, etc.)), 06E10. arXiv math.LO. Level 4: research.

**Definition.** A Boolean-valued model assigns formulas values in a Boolean algebra with all least upper bounds, called joins. An existential formula has value equal to the join of its possible witnesses’ values. Mixing allows any family of witnesses on pairwise disjoint nonzero Boolean pieces to agree with one element on their respective pieces. Agreement on a piece means that the Boolean value of equality contains that piece.

**Problem.** In a Boolean-valued model with mixing, every existential truth value equals the value given by some single witness.

**How the definition helps.** Mixing combines witnesses from disjoint pieces into one witness with the full existential value. Our own proof chooses a maximal disjoint family of pieces, each below the value of some witness. Their join is the existential value, since any uncovered part would meet another witness value. Choose a witness on each piece and mix them. Substitution for Boolean equality makes the formula true on each piece for the resulting witness. Our own counterexample assigns a predicate complementary nonzero values on a two-element model with ordinary equality. Its existential value is one, yet neither element attains it.

**Paper or page:** [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852v5). It says: “Assume that ℳ satisfies the κ-mixing property for some κ ≥ min {\|𝖡\|, \|M\|}. Then ℳ is full.”

**Sources:**

- [Boolean valued models, presheaves, and étalé spaces](https://arxiv.org/abs/2006.14852v5)

### Free memo lookups make ramified recurrence feasible

**Remember:** Charge nothing for memo lookups, and soundness follows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D15 (Complexity of computation (including implicit computational complexity)), 68Q25. arXiv cs.CC, cs.LO. Level 4: research.

**Definition.** A cost model assigns a running time to each program. It is invariant when that time is polynomially related to the time of a Turing machine. Ramified recurrence writes recursive functions with data split into tiers. A recursion then cannot feed its own output back as a recursion argument.

**Problem.** Show that every function defined by general ramified recurrence can be computed in polynomial time. This was an open problem in implicit computational complexity.

**How the definition helps.** Memoization turns an exponential tree of recursive calls into a polynomial set of distinct calls (our own). So it is natural to charge only for new calls. Once this cost model is known to be invariant, soundness is a corollary, as the abstract says. The work moves into the invariance proof, which must show that sharing and lookups can be simulated on a real machine with polynomial overhead. The data-set theorems give this as polynomial bounds on configurations and on the size of values represented as graphs with sharing.

**Paper or page:** [On Sharing, Memoization, and Polynomial Time (Long Version)](https://arxiv.org/abs/1501.00894). It says: “a natural cost model in which lookup for an already computed value has no cost is indeed invariant. As a corollary, we then prove that the most general notion of ramified recurrence is sound for polynomial time”

**Sources:**

- [Martin Avanzini, Ugo Dal Lago, On Sharing, Memoization, and Polynomial Time, arXiv:1501.00894 (2015)](https://arxiv.org/abs/1501.00894)

### Effective discontinuity gives the Weihrauch lattice a weakest discontinuous problem

**Remember:** A uniform witness of discontinuity is the weakest kind of discontinuity.

*True by definition. Confidence: medium.* MSC 03D30 (Other degrees and reducibilities in computability and recursion theory), 03D78. arXiv math.LO. Level 4: research.

**Definition.** A problem is a multi-valued function, and Weihrauch reducibility compares problems by continuous pre-processing and post-processing. Roughly, a problem is effectively discontinuous if, from any proposed continuous solution method, one can compute an input on which that method fails. The discontinuity problem takes a code p of a partial continuous function and asks for any output different from that function's value at p.

**Problem.** Matthias Schröder asked whether the continuous Weihrauch lattice has a weakest discontinuous problem, that is, a weakest unsolvable problem.

**How the definition helps.** The definition asks for a uniform witness of discontinuity, and the discontinuity problem is the task of producing one. So the reduction is nearly built in (our own reading). The real question moves to another theorem: is every discontinuous problem effectively discontinuous? The abstract says yes in Zermelo–Fraenkel set theory with dependent choice and the axiom of determinacy. The proof uses Wadge-style games: player II wins exactly for continuous problems, and player I wins exactly for effectively discontinuous problems. With the full axiom of choice, there are problems that are discontinuous but not effectively so.

**Paper or page:** [The Discontinuity Problem](https://arxiv.org/abs/2012.02143). It says: “We introduce the discontinuity problem, and we show that it is reducible exactly to the effectively discontinuous problems, defined in a suitable way.”

**Sources:**

- [Vasco Brattka, The Discontinuity Problem, Journal of Symbolic Logic 88(3) (2023) 1191–1212, arXiv:2012.02143](https://arxiv.org/abs/2012.02143)

### Optimal oracles give Marstrand's theorem directly

**Remember:** Optimal oracles carry exactly what a projection argument needs.

*True by definition.* MSC 03D32 (Algorithmic randomness and dimension), 28A78. arXiv cs.CC, math.LO. Level 4: research.

**Definition.** The effective dimension of a point measures how much information its digits hold for programs with an oracle A, a set of natural numbers. By the point-to-set principle, the Hausdorff dimension of E is the least, over all oracles A, of the supremum of these dimensions over E. An oracle that attains this least value is a Hausdorff oracle for E. It is optimal when, after adding any further oracle B, many points of E still keep almost full effective dimension (Proposition 4).

**Problem.** Marstrand's theorem says that almost every orthogonal projection of a planar set E keeps its Hausdorff dimension, capped at 1. Classical proofs need E to be analytic or similar.

**How the definition helps.** The definition asks for the property that the pointwise proof of Marstrand's theorem uses, so the theorem holds for every set that has optimal oracles. The work then moves into a second question: which sets have optimal oracles? The paper shows that analytic sets do; these are continuous images of Borel sets. So do sets whose Hausdorff dimension equals their packing dimension, a dimension defined by packing disjoint balls. So do sets with exact gauge functions, which are size functions that give the set a positive finite measure (our own gloss). This extends the known conditions for Marstrand's theorem. Under the axiom of choice and the continuum hypothesis, the paper builds sets with no optimal oracles.

**Paper or page:** [Optimal Oracles for Point-to-Set Principles](https://arxiv.org/abs/2101.11152). It says: “One of the primary motivations of this definition is that, if E has optimal oracles, then the conclusion of Marstrand's projection theorem holds for E. We show that every analytic set has optimal oracles.”

**Sources:**

- [D. M. Stull, Optimal Oracles for Point-to-Set Principles, arXiv:2101.11152 (2021)](https://arxiv.org/abs/2101.11152)

### Point-to-set principle computes Hausdorff dimension pointwise

**Remember:** To bound a set's dimension, bound the information in its points.

*Makes the theorem clean to state or prove.* MSC 03D32 (Algorithmic randomness and dimension), 28A78. arXiv cs.CC, math.LO. Level 4: research.

**Definition.** An oracle A is a set of natural numbers that programs may query. The effective dimension dimᴬ(x) of a point x is the lower limit of Kᴬ(x↾r)/r as r grows. Here Kᴬ(x↾r) is the length of the shortest program with oracle A that prints x to r bits of precision. The point-to-set principle says that the Hausdorff dimension of E is the minimum over oracles A of the supremum of dimᴬ(x) over x in E.

**Problem.** Prove lower bounds on the Hausdorff dimension of sets in classical geometric measure theory. Examples are Kakeya sets, projections and pinned distance sets.

**How the definition helps.** The principle turns a statement about covers of a whole set into a statement about the information content of single points. To show that E has dimension at least s, take any oracle A. Then find points of E whose effective dimension relative to A comes arbitrarily close to s. Such pointwise bounds come from short arguments about compressing descriptions (our own remark). Lutz and Lutz used this method to give a new proof of Davies's theorem that plane Kakeya sets have dimension 2 (our own example). The hard part moves into the pointwise estimates, which can be delicate for projections (our own remark).

**Paper or page:** [Optimal Oracles for Point-to-Set Principles](https://arxiv.org/abs/2101.11152), [Optimal Oracles for Point-to-Set Principles](https://arxiv.org/abs/2101.11152). It says: “The point-to-set principle characterizes the Hausdorff dimension of a subset E⊆ℝⁿ by the effective (or algorithmic) dimension of its individual points. This characterization has been used to prove several results in classical, i.e., without any computability requirements, analysis.”

**Sources:**

- [D. M. Stull, Optimal Oracles for Point-to-Set Principles, arXiv:2101.11152 (2021)](https://arxiv.org/abs/2101.11152)
- [Jack H. Lutz, Neil Lutz, Algorithmic Information, Plane Kakeya Sets, and Conditional Dimension, ACM Transactions on Computation Theory (2018)](https://doi.org/10.1145/3201783)

### Church's thesis as an axiom gives synthetic proofs of Tennenbaum's theorem

**Remember:** When every function is computable, "computable" needs no coding.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D75 (Abstract and axiomatic computability and recursion theory), 03B38, 03C62. arXiv math.LO. Level 4: research.

**Definition.** In constructive type theory, every function that one can define can be shown computable from outside the theory. The authors add, as an axiom, a version of Church's thesis: every function from ℕ to ℕ is represented by a formula of Peano arithmetic. Computability arguments then talk about functions directly, with no machine model.

**Problem.** Tennenbaum's theorem says that the only countable model of Peano arithmetic with computable addition and multiplication is the standard model of the natural numbers.

**How the definition helps.** With Church's thesis as an axiom, "computable function" just means "function", so the proofs need no coding of machines. The abstract says that this gives a convenient setup for rigorous computability arguments, also in the Coq mechanization. The authors make several classical proofs constructive and give one proof that is inherently constructive. The constructive setting also shows differences in the assumptions of the classical proofs. One version assumes Markov's principle, a weak form of classical reasoning, and decidable equality in the model. Then a model whose elements some function can list is standard. The condition on computable operations disappears, because every function counts as computable (our own reading).

**Paper or page:** [An Analysis of Tennenbaum's Theorem in Constructive Type Theory](https://arxiv.org/abs/2302.14699). It says: “assuming a version of Church's thesis, which expresses that any function on natural numbers is representable by a formula in PA. This assumption provides for a conveniently abstract setup to carry out rigorous computability arguments”

**Sources:**

- [Marc Hermes and Dominik Kirst, An Analysis of Tennenbaum's Theorem in Constructive Type Theory, Logical Methods in Computer Science 20(1) (2024), arXiv:2302.14699](https://arxiv.org/abs/2302.14699)

### The relativized notion of computable type is the better behaved one

**Remember:** Ask for computable type relative to every oracle, and topology takes over.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03D78 (Computation over the reals, computable analysis), 54C56. arXiv math.LO, math.GN. Level 4: research.

**Definition.** A compact set has computable type if every homeomorphic copy of it that is semicomputable is computable. Semicomputable means that an algorithm can list open balls that cover the complement of the copy. Strong computable type asks for the same relative to every oracle, that is, when the algorithm may use any extra information. The paper works more generally with pairs (X, A), where A lies inside X.

**Problem.** Miller showed that spheres have computable type, and later work showed it for many manifolds. One wants general tools to prove or disprove the property for a given space.

**How the definition helps.** The relativized notion can be characterized by topological invariants of low descriptive complexity, which gives general tools. The paper uses Σ⁰₂ invariants, a low level in the descriptive hierarchy of sets of spaces. Suppose a space has such an invariant but no proper subset of it does. Then the space has strong computable type. For example, a compact space that is minimal with nonzero Čech cohomology in degree n has strong computable type. Every connected compact n-manifold is minimal in this sense, so the known manifold results follow again. The paper also shows that the older definitions, for metric spaces and for Hausdorff spaces, agree.

**Paper or page:** [Strong computable type](https://arxiv.org/abs/2210.08309). It says: “We argue that the stronger, relativized version of computable type, is better behaved and prone to topological analysis. We obtain characterizations of strong computable type, related to the descriptive complexity of topological invariants, as well as purely topological criteria.”

**Sources:**

- [Djamel Eddine Amir and Mathieu Hoyrup, Strong computable type, arXiv:2210.08309 (2023)](https://arxiv.org/abs/2210.08309)

### The elementary substructure test makes stationary families survive restriction

**Remember:** Restrict the elementary substructure to the named subset.

*True by definition. Confidence: medium.* MSC 03E05 (Other combinatorial set theory). arXiv math.LO. Level 4: research.

**Definition.** Test stationarity of a family S of countable subsets of X with structures. S passes if each structure on X in a countable language has a countable elementary substructure whose universe lies in S. An elementary substructure satisfies the same first-order formulas, with parameters from itself, as the whole structure. The usual definition asks that S meet every closed unbounded family of countable subsets of X.

**Problem.** Let S be a stationary family of countable subsets of X, and let Y be an uncountable subset of X. Then the infinite sets x ∩ Y, for x in S, form a stationary family on Y.

**How the definition helps.** With the substructure test, a structure on Y can be tested through a structure on X. Extend the structure on Y to X, and add a predicate for Y and constants for countably many points of Y (our own). The test gives an elementary substructure N whose universe is in S. Then N ∩ Y is an elementary substructure of the structure on Y, because witnesses inside Y can be found in N (our own). The constants make N ∩ Y infinite (our own). Wikipedia states the test for stationary families of arbitrary subsets of X, so this countable version is our own. The work moves to the theorem that the test agrees with the closed unbounded definition.

**Wikipedia:** [Stationary set](https://en.wikipedia.org/wiki/Stationary_set). It says: “for any such structure M there is an elementary substructure of M that belongs to S”

**Sources:** none listed. No primary source with a working link was found.

### A trichotomous least element gives ordinal exponentiation a constructive list form

**Remember:** Split off the bottom as 1 + α′, and exponentiation is built from lists.

*Rules out counterexamples. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv cs.LO, math.LO. Level 4: research.

**Definition.** A least element ⊥ of an ordinal α is trichotomous if every element x satisfies ⊥ = x or ⊥ &lt; x. By the paper's Lemma 15, this holds exactly when α = 1 + α′ for an ordinal α′. For such α, the paper defines exp(α, β) concretely by lists of pairs, ordered lexicographically.

**Problem.** Classical ordinal exponentiation is defined by cases: zero, successor and limit. Constructively one cannot decide which case an ordinal is in. So one asks whether αᵝ can be defined for all ordinals with its usual equations.

**How the definition helps.** With a trichotomous least element, α splits as 1 + α′, so lists give an explicit construction (our own summary). The quoted Proposition 4 shows why some restriction is needed: the specification for all bases is equivalent to the law of excluded middle (LEM). An abstract construction meets the specification for all bases α ≥ 1 (Theorem 9). The concrete list construction meets it for bases with a trichotomous least element (Theorem 20), and the two agree there (Theorem 24). For such bases it also satisfies exp(α, β × γ) = exp(exp(α, β), γ) (Corollary 26) and keeps decidable equality (Proposition 22). What stays hard is monotonicity in the base, which still implies LEM even for such bases (Proposition 34).

**Paper or page:** [Constructive Ordinal Exponentiation](https://arxiv.org/abs/2501.14542v5), [Constructive Ordinal Exponentiation](https://arxiv.org/abs/2501.14542v5). It says: “There is an exponentiation operation exp : Ord × Ord → Ord satisfying the specification if and only if LEM holds.”

**Sources:**

- [Tom de Jong, Nicolai Kraus, Fredrik Nordvall Forsberg, Chuangjie Xu, Constructive Ordinal Exponentiation, Journal of the ACM (2026), arXiv:2501.14542](https://arxiv.org/abs/2501.14542v5)

### By construction, X cannot be mapped onto its Lindenbaum number

**Remember:** Collect every ordinal X can be squashed onto; X cannot be squashed onto the collection.

*True by definition. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03E25. arXiv math.LO. Level 4: research.

**Definition.** The Lindenbaum number ℵ\*(X) of a set X is the set of ordinals α that admit a surjection X → α. It is the smallest well-ordered set that is not a quotient of X. Here a quotient of X means the image of a surjection from X.

**Problem.** Without the axiom of choice, find a well-ordered set that is not a quotient of a given set X. This is a version of Hartogs' theorem with surjections in place of injections (Hartogs' theorem gives a well-ordered set that does not inject into X).

**How the definition helps.** The definition collects all the ordinals that X maps onto, so the collection cannot be one of them. Suppose X mapped onto ℵ\*(X). Then ℵ\*(X) would be one of its own elements, so it would be order isomorphic to a proper initial segment of itself, which is impossible. So the theorem holds by construction, with no choice. Our own remark: for nonempty X, the ordinal 0 must be added for ℵ\*(X) to be an ordinal, and the nLab leaves this detail implicit. The harder facts compare ℵ\*(X) with the Hartogs number. The statement that the two are equal for all sets is equivalent to the axiom of choice for well-orderable families (Pincus, in Pelc 1978).

**nLab:** [Lindenbaum number](https://ncatlab.org/nlab/show/Lindenbaum+number). It says: “By construction, if there were a surjection function X → ℵ\*(X), then ℵ\*(X) would be order isomorphic to one of its own elements, and hence to a proper initial segment of itself, which is impossible.”

**Sources:**

- [A. Karagila, Embedding Posets Into Cardinals With DCκ, arXiv:1212.4396v1 (2012), where the name appears](https://arxiv.org/abs/1212.4396v1)

### Defining the surjection order by subquotients needs no empty-set exception

**Remember:** B is a quotient of a part of A.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 4: research.

**Definition.** Write \|B\| ≤\* \|A\| when B is a subquotient of A. This means that there is a set B′ with a surjection B′ → B and an injection B′ → A. The classical definition says instead that there is a surjection A → B, or B is empty.

**Problem.** Show that \|B\| ≤ \|A\| implies \|B\| ≤\* \|A\|, where \|B\| ≤ \|A\| means that there is an injection B → A. The proof must be constructive, and it must not need a separate case for the empty set.

**How the definition helps.** With the subquotient definition, the implication is immediate: take B′ = B. With the classical definition, you must turn an injection B → A into a surjection A → B. That needs a case split on whether B is empty, and then a default value in B. The case split uses excluded middle (the rule that every statement is true or false). For inhabited B (a set B that has an element), excluded middle shows that the two definitions agree. So nothing classical is lost.

**nLab:** [surjection](https://ncatlab.org/nlab/show/surjection). It says: “To make this definition less piecemeal and more constructive, one can define \|B\| ≤\* \|A\| to mean B is a subquotient of A, in other words one has a surjection B′ → B and an injection B′ → A.”

**Sources:** none listed. No primary source with a working link was found.

### Plump ordinals make x ≤ y &lt; z imply x &lt; z constructively

**Remember:** A plump ordinal is closed under going down by ≤ and then down by &lt;.

*Rules out counterexamples.* MSC 03E10 (Ordinal and cardinal numbers), 03F65. arXiv math.LO. Level 4: research.

**Definition.** An ordinal A is plump if two conditions hold. Every ordinal B &lt; A is plump. And whenever C ≤ B &lt; A with C plump, then C &lt; A. So the definition keeps only the ordinals on which the missing law holds all the way down.

**Problem.** The usual laws of &lt; and ≤ for ordinals should hold in constructive mathematics (mathematics without the law of excluded middle). The key law is "if x ≤ y &lt; z then x &lt; z".

**How the definition helps.** The definition builds the missing law into the ordinals, so Taylor's plump ordinals satisfy it by definition. For constructive ordinals all the usual laws hold except this one. If it held for all ordinals, excluded middle would follow. To see this, take z = 2, y = 1 and x = {0 \| P}, the set that contains 0 exactly when the proposition P is true. The cost is that plump ordinals differ from the classical ones: 2 is plump only if excluded middle holds, and the plump version of 2 is the set Ω of all truth values. The definition also needs power sets, so it is not obviously sensible in predicative mathematics (mathematics that avoids power sets).

**nLab:** [plump ordinal](https://ncatlab.org/nlab/show/plump+ordinal). It says: “However, Paul Taylor (Taylor) realized that this last property can be recovered by essentially "restricting to the subclass of ordinals z for which it holds hereditarily". These are the plump ordinals.”

**Sources:**

- [Paul Taylor, Intuitionistic Sets and Ordinals, Journal of Symbolic Logic 61 (1996) 705–744](http://www.paultaylor.eu/ordinals/)

### The compact-space definition makes universally Baire sets closed under continuous preimages

**Remember:** Pull back twice by composing the two maps.

*True by definition.* MSC 03E15 (Descriptive set theory). arXiv math.LO. Level 4: research.

**Definition.** A subset A of Baire space is universally Baire if it passes a test for every compact Hausdorff space Ω. For each continuous map f from Ω to Baire space, the preimage of A must have the Baire property in Ω. A set has the Baire property if it differs from an open set by a meager set, a countable union of nowhere dense sets. The alternative uses pairs of trees whose projections stay complementary in forcing extensions.

**Problem.** Let g be a continuous map from Baire space to itself, and let A be universally Baire. Then the preimage of A under g is universally Baire.

**How the definition helps.** With the compact-space definition, every test for the preimage is already a test for A. For f from Ω to Baire space, the preimage of g⁻¹(A) under f is the preimage of A under g ∘ f (our own). The map g ∘ f is continuous, so this set has the Baire property. With the tree definition, one must build new tree pairs from a code for g (our own). The work moves to the Feng–Magidor–Woodin theorem that the two definitions agree. Wikipedia lists both definitions as equivalent.

**Wikipedia:** [Universally Baire set](https://en.wikipedia.org/wiki/Universally_Baire_set). It says: “the preimage of A under f has the property of Baire in Ω.”

**Sources:**

- [Qi Feng, Menachem Magidor, and W. Hugh Woodin, Universally Baire Sets of Reals (1992)](https://doi.org/10.1007/978-1-4613-9754-0_15)

### The increasing-union definition makes actions of locally finite groups hyperfinite

**Remember:** Finite subgroups give finite orbits.

*True by definition.* MSC 03E15 (Descriptive set theory), 37A20. arXiv math.LO, math.DS. Level 4: research.

**Definition.** A countable Borel equivalence relation is hyperfinite if it is an increasing union of Borel equivalence relations with finite classes. The alternative asks for one Borel bijection whose iterates have exactly the same orbits.

**Problem.** Let a countable group G act in a Borel way on a standard Borel space. Suppose G is locally finite, meaning that each finitely generated subgroup is finite. Then the orbit relation is hyperfinite.

**How the definition helps.** With the union definition, the group structure gives the finite approximations directly. Local finiteness lets us write G as an increasing union of finite subgroups Fₙ. The orbit relation of each Fₙ is Borel and has finite classes. These relations increase, and their union is the orbit relation of G. Wikipedia gives this argument. With the single-bijection definition, one would have to replace all the actions of the Fₙ by one Borel bijection (our own). The work moves to the theorem that the two definitions agree.

**Wikipedia:** [Hyperfinite equivalence relation](https://en.wikipedia.org/wiki/Hyperfinite_equivalence_relation). It says: “a filtration of the orbit equivalence relation of the action of G on X into finite Borel equivalence relations”

**Sources:**

- [Randall Dougherty, Steve Jackson, and Alexander S. Kechris, The structure of hyperfinite Borel equivalence relations (1994)](https://doi.org/10.1090/S0002-9947-1994-1149121-0)

### The increasing-union definition makes every subrelation of a hyperfinite relation hyperfinite

**Remember:** Intersect each finite approximation with the smaller relation.

*True by definition.* MSC 03E15 (Descriptive set theory), 37A20. arXiv math.LO, math.DS. Level 4: research.

**Definition.** A countable Borel equivalence relation is hyperfinite if it is an increasing union of Borel equivalence relations whose classes are all finite. Countable means that every class is countable. The alternative asks that it be the orbit relation of a single Borel bijection and its iterates.

**Problem.** Let E be a hyperfinite Borel equivalence relation, and let F be a Borel equivalence relation contained in E. Then F is hyperfinite.

**How the definition helps.** With the union definition, the approximations of the larger relation restrict to the smaller one. If E is the union of the finite relations Eₙ, then F is the union of the relations F ∩ Eₙ (our own). Each F ∩ Eₙ is Borel and has finite classes (our own). With the single-bijection definition, one must build a new Borel bijection whose orbits are the classes of F (our own). The work moves to the theorem that the two definitions agree. Wikipedia lists the subrelation property.

**Wikipedia:** [Hyperfinite equivalence relation](https://en.wikipedia.org/wiki/Hyperfinite_equivalence_relation). It says: “A subequivalence relation of a hyperfinite equivalence relation is hyperfinite.”

**Sources:**

- [Randall Dougherty, Steve Jackson, and Alexander S. Kechris, The structure of hyperfinite Borel equivalence relations (1994)](https://doi.org/10.1090/S0002-9947-1994-1149121-0)

### Tree pairs make the interpretation of a universally Baire set well defined

**Remember:** Cross the first tree of one pair with the second tree of the other.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E15 (Descriptive set theory), 03E40. arXiv math.LO. Level 4: research.

**Definition.** For each partial order used for forcing, a universally Baire set A comes with a pair of trees. In the ground model, the first coordinates of branches of the first tree form A, and those of the second tree form its complement. In every extension by that order, the two projections must stay complementary. The alternative tests whether continuous preimages from compact Hausdorff spaces have the Baire property.

**Problem.** Take two tree pairs for the same universally Baire set A. In any forcing extension where both pairs stay complementary, the two first trees project to the same set.

**How the definition helps.** Tree pairs give A a meaning in the extension, and the theorem says that this meaning does not depend on the pair. Combine the first tree of one pair with the second tree of the other into one tree on a shared input (our own). A branch would give a point in both A and its complement, so the ground model has no branch (our own). Its rank function survives forcing, so it has no branch in the extension either. So the first projection of one pair misses the second projection of the other (our own). Complementarity puts it inside the other first projection, and symmetry gives equality (our own). The work moves to the theorem that tree pairs exist for universally Baire sets.

**Paper or page:** [Uniformization and Internal Absoluteness](https://arxiv.org/abs/2108.09688v4). It says: “A set of reals A is universally Baire if and only if for every ordinal λ”

**Sources:**

- [Qi Feng, Menachem Magidor, and W. Hugh Woodin, Universally Baire Sets of Reals (1992)](https://doi.org/10.1007/978-1-4613-9754-0_15)
- [Sandra Müller and Philipp Schlicht, Uniformization and Internal Absoluteness (arXiv 2022)](https://arxiv.org/abs/2108.09688v4)

### A choice principle weak enough to survive in every Grothendieck topos

**Remember:** Maybe no section, but a small set of covers refines every cover.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E25 (Axiom of choice and related propositions), 03F65, 03G30. arXiv math.LO, math.CT. Level 4: research.

**Definition.** WISC stands for 'weakly initial set of covers'. It says: for every set X there is a set of surjections onto X such that every surjection onto X is refined by one of them. One surjection refines another when it factors through it. WISC says that the axiom of choice fails only in a small way.

**Problem.** We want anafunctor categories between small categories to be essentially small (equivalent to a small category). An anafunctor is a functor that is defined only after you replace its source by a cover of its object set, so it needs no choice. We also want the principle used for this to survive passage to Grothendieck and realizability toposes.

**How the definition helps.** To make the anafunctor category small, you only need to replace each cover by one from a fixed set, and WISC gives exactly that. So the anafunctor category Catₐₙₐ(X, Y) is essentially small. Stronger principles such as COSHEP (every set is the image of a projective set) or SVC (small violations of choice) also give this. But they fail in some Grothendieck toposes, even over a model of ZFC. Every Grothendieck or realizability topos inherits WISC from its base, so the smallness result holds inside it too. The stability result is a theorem of van den Berg, and WISC itself is not provable in ZF.

**nLab:** [WISC](https://ncatlab.org/nlab/show/WISC). It says: “any Grothendieck topos or realizability topos inherits WISC from its base topos of sets (even if the latter is constructive or even predicative); see van den Berg.”

**Sources:**

- [B. van den Berg, Predicative toposes, 2012, arXiv:1207.0959](https://arxiv.org/abs/1207.0959)
- [B. van den Berg, I. Moerdijk, The axiom of multiple choice and models for constructive set theory, 2012, arXiv:1204.4045](https://arxiv.org/abs/1204.4045)

### Forcing with sheaves makes the generic object exist by construction

**Remember:** Do not look for a generic set outside the universe; build sheaves that contain one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 18F10. arXiv math.LO, math.CT. Level 4: research.

**Definition.** In structural set theory (set theory that describes sets by the functions between them), one replaces the forcing extension of a model V by the topos of sheaves on a suitable site in V. A topos is a category that behaves like the category of sets and has its own internal logic. This topos is the classifying topos of the theory of the wanted generic object G, that is, the topos that contains a universal model of that theory. So it contains a generic G in its internal logic.

**Problem.** Cohen's independence results need a model of set theory with a generic object. An example is the independence of the continuum hypothesis from ZFC.

**How the definition helps.** The sheaf topos contains the generic object by its definition, so no one has to find it. In the material approach (set theory with membership as the basic notion), the generic set G does not in general exist unless V is countable. So one uses a countable model (by the downward Löwenheim–Skolem theorem), forcing semantics, or Boolean-valued models. In the topos approach, the sheaf topos is universal over V: it is the classifying topos of the theory of G, so it contains a generic G by definition. Kripke–Joyal semantics, the way to read formulas inside a topos, then plays the role of the forcing relation. The remaining work is to show that the topos has the wanted properties, often after a double-negation step. For example, one shows that the continuum hypothesis fails in it.

**nLab:** [forcing](https://ncatlab.org/nlab/show/forcing), [Kripke-Joyal semantics](https://ncatlab.org/nlab/show/Kripke-Joyal+semantics). It says: “In structural set theory, this construction is simply that of the topos of sheaves on a suitable site, in the model V.”

**Sources:**

- [Paul J. Cohen, The independence of the Continuum Hypothesis, PNAS 50 (1963) 1143–1148](https://doi.org/10.1073/pnas.50.6.1143)
- [Myles Tierney, Forcing Topologies and Classifying Topoi, in: Alex Heller, Myles Tierney (eds.), Algebra, Topology, and Category Theory: A Collection of Papers in Honor of Samuel Eilenberg, Academic Press (1976) 211–219](https://doi.org/10.1016/C2013-0-10841-0)

### Mathias's criterion makes infinite subsequences of Prikry sequences generic

**Remember:** Every infinite subsequence still lies eventually in each measure-one set.

*True by definition. Confidence: medium.* MSC 03E40 (Other aspects of forcing and Boolean-valued models), 03E55. arXiv math.LO. Level 4: research.

**Definition.** Fix a normal measure U on a measurable cardinal κ, a κ-complete ultrafilter with an extra closure property. An increasing sequence with supremum κ is Prikry generic if, for each set in U, all but finitely many terms lie in it. Mathias proved that this matches the forcing definition. That definition asks the filter given by the sequence to meet every dense set of the ground model.

**Problem.** Every infinite subsequence of a Prikry generic sequence is Prikry generic over the same ground model.

**How the definition helps.** With Mathias's criterion, genericity is a condition on tails, and subsequences inherit tail conditions. If all but finitely many terms of the sequence lie in a set A, the same holds for any infinite subsequence. An infinite subsequence of an increasing sequence with supremum κ still has supremum κ. So the subsequence passes the criterion (our own). The work moves to Mathias's theorem that the criterion detects every dense set. Wikipedia only describes Prikry forcing and its effect on cofinality.

**Wikipedia:** [List of forcing notions](https://en.wikipedia.org/wiki/List_of_forcing_notions). It says: “change the cofinality of κ while preserving all cardinals”

**Sources:**

- [A. R. D. Mathias, On sequences generic in the sense of Prikry (1973)](https://doi.org/10.1017/S1446788700028755)

### The function definition of Woodin cardinals puts measurable cardinals in every club

**Remember:** Let f jump to the next point of the club.

*True by definition.* MSC 03E55 (Large cardinals). arXiv math.LO. Level 4: research.

**Definition.** Call δ a Woodin cardinal if each function f from δ to δ has a closure point κ below δ with an elementary embedding j. The map j goes from the universe into a class M containing the elements of its elements, preserves all formulas, and first moves κ. Also M must contain every set of rank below j(f)(κ), and closure means f(β) &lt; κ for all β &lt; κ. The alternative asks, for each subset A of the sets of rank below δ, for embeddings that preserve A up to high ranks.

**Problem.** Let δ be a Woodin cardinal, and let C be a club, a closed unbounded subset of δ. Closed means that C contains every limit below δ of its own points. Then C contains a measurable cardinal.

**How the definition helps.** With this definition, a well-chosen f forces the closure point into C. Let f send each ordinal to the least point of C above it (our own). A closure point κ of f has points of C cofinally below it, so κ lies in C because C is closed (our own). The least ordinal moved by an elementary embedding of the universe is measurable, so κ is measurable. Wikipedia states that a Woodin cardinal has a stationary set of measurable cardinals below it. The work moves to the theorem that such critical points are measurable, and to the equivalence with the alternative definition.

**Wikipedia:** [Woodin cardinal](https://en.wikipedia.org/wiki/Woodin_cardinal). It says: “preceded by a stationary set of measurable cardinals”

**Sources:**

- [Akihiro Kanamori, The Higher Infinite (2003)](https://doi.org/10.1007/978-3-540-88867-3)

### The indiscernibles definition lets Ramsey cardinals handle fewer than κ colors

**Remember:** Give each color its own relation symbol.

*True by definition. Confidence: medium.* MSC 03E55 (Large cardinals), 03E02. arXiv math.LO. Level 4: research.

**Definition.** Call κ Ramsey if every structure containing κ, in a language with fewer than κ symbols, has a set of κ indiscernibles. A set is indiscernible if all increasing tuples of the same length from it satisfy the same formulas. The usual definition asks that each two-coloring of the finite subsets of κ have a homogeneous set of size κ. Homogeneous means that all its subsets of the same size get the same color.

**Problem.** Let κ be a Ramsey cardinal. Color the finite subsets of κ with fewer than κ colors. Then some set of size κ is homogeneous.

**How the definition helps.** With the indiscernibles definition, each color becomes a relation symbol, and indiscernibility becomes homogeneity. For each length n and color c, add the relation of n-tuples whose set has color c (our own). This language has fewer than κ symbols, because κ is uncountable. A set of κ indiscernibles gives all its increasing n-tuples the same color, for each n. The cited theorem proves this equivalence for ideals that contain the nonstationary sets, so the classical form here is our own. The work moves to getting indiscernibles from two-color homogeneous sets.

**Paper or page:** [Large cardinal ideals](https://arxiv.org/abs/2102.09591v1). It says: “Every structure 𝒜 in a language of size less than κ”

**Sources:**

- [Brent Cody, Large cardinal ideals (arXiv 2021)](https://arxiv.org/abs/2102.09591v1)

### Strong extensionality makes simulations unique

**Remember:** Two elements that nothing can tell apart, step by step forever, are equal.

*Rules out counterexamples. Confidence: medium.* MSC 03E65 (Other set-theoretic hypotheses and axioms), 03E20. arXiv math.LO. Level 4: research.

**Definition.** Let ≺ be a relation on a set. A bisimulation is a relation ∼ with this property: if x ∼ y, then every a ≺ x has some b ≺ y with a ∼ b, and every b ≺ y has some a ≺ x with a ∼ b. The relation ≺ is strongly extensional when every bisimulation is contained in equality.

**Problem.** We want to extend the axiom of extensionality to relations that are not well-founded, so that sets with such relations still behave like (non-well-founded) sets. Then simulations between them are unique and injective, so they form a poset. A simulation is a map that preserves ≺ and sends the ≺-predecessors of x onto the ≺-predecessors of its image.

**How the definition helps.** Strong extensionality forbids distinct elements that no bisimulation can tell apart, and this makes simulations unique. Weak extensionality (two elements with the same members are equal) is enough for well-founded relations, but not in general. Take {0, 1} with 0 ≺ 1 and 1 ≺ 0. This relation is weakly extensional, yet swapping 0 and 1 is an automorphism, so the two elements cannot really be told apart. Strong extensionality rules this out, and it is equivalent to the statement that any two simulations into the structure are equal. Simulations are then injective, so these structures form a large poset and can be read as transitive sets. For well-founded relations all the notions agree.

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

**Definition.** A display logic is a sequent calculus with enough structural connectives and structural rules to have the display property. Structural connectives join whole parts of a sequent, as the comma does. The display property: you can move any formula in a sequent to stand alone on the left or the right of an equivalent sequent.

**Problem.** Cut admissibility means that the cut rule can be removed from proofs. For each new sequent calculus, this usually needs its own long proof.

**How the definition helps.** Display logic replaces many separate cut-elimination proofs with one general theorem and a checklist. With the display property, the cut rule takes a simple form: from Γ ⊢ A and A ⊢ Δ, infer Γ ⊢ Δ. This works because the cut formula A can always be displayed alone. Belnap then proves one general theorem: any display logic that satisfies eight natural conditions on its rules admits cut. For a new logic, it is enough to check these conditions rule by rule. The hard part moves into the general theorem, and into the design of structural rules that satisfy the conditions.

**nLab:** [display logic](https://ncatlab.org/nlab/show/display+logic). It says: “Any display logic satisfying a list of eight natural conditions automatically satisfies cut admissibility.”

**Sources:**

- [N. D. Belnap, Display logic, Journal of Philosophical Logic 11 (1982) 375–417](https://doi.org/10.1007/BF00284976)

### Focused proofs give each Tamari order sequent exactly one derivation

**Remember:** The left edge and the right formula tell you which rule to use.

*Rules out counterexamples.* MSC 03F07 (Structure of proofs), 06A07. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** The Tamari order on bracketings is generated by right reassociation, from (A · B) · C to A · (B · C). Zeilberger represents it by sequents, with a list of formulas on the left and one formula on the right. A focused proof must first break up a product at the left edge, and otherwise uses restricted right rules.

**Problem.** Every provable sequent in this Tamari calculus has exactly one focused derivation.

**How the definition helps.** The focusing restrictions exclude the reorderings of rules that give unrestricted proofs of one sequent many derivations. The paper's Lemma 1.18 proves that each sequent has at most one focused derivation. Its Proposition 1.8 puts every sequent into one of three kinds, so the rules leave no choice of rule. The work moves into showing that every derivable sequent has a focused derivation. The two results together give the quoted coherence theorem.

**Paper or page:** [A sequent calculus for a semi-associative law](https://arxiv.org/abs/1803.10080v3). It says: “Every derivable sequent has exactly one focused derivation.”

**Sources:**

- [Noam Zeilberger (2019), A Sequent Calculus for a Semi-Associative Law, Logical Methods in Computer Science 15(1)](https://doi.org/10.23638/LMCS-15(1:9)2019)

### Periodic sets of ordinals give GLP a usable class of complete models

**Remember:** Keep Icard's topologies, but only allow periodic sets as values.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F45 (Provability logics and related algebras (e.g., diagonalizable algebras)), 03E10. arXiv math.LO. Level 4: research.

**Definition.** GLP is a provability logic with one modality for each natural number, for provability of increasing strength. In topological semantics, the n-th possibility operator sends a set to its set of limit points in the n-th topology. A general topological frame also fixes an algebra of subsets, and formulas may only take values in that algebra. Here the algebra consists of periodic sets of ordinals, which generalize ultimately periodic infinite binary words.

**Problem.** GLP is not complete for Kripke frames. It is complete for topological semantics, but the topologies in the proof are highly non-constructive. Completeness for natural topologies on ordinals depends on large cardinal axioms and is still open.

**How the definition helps.** Restricting formula values to a well-chosen algebra of sets gives completeness for the same natural topologies. The abstract says that the key point is an algebra of subsets of an ordinal that is closed under the Boolean and derivative operations. The derivative of a set is its set of limit points. So the topologies stay those of Icard, and only the allowed sets change. GLP is then sound and complete for this countable class of frames. What stays open is completeness when every subset of the ordinal is allowed as a value.

**Paper or page:** [Periodic frames](https://arxiv.org/abs/2407.10190). It says: “In this paper we define a natural class of countable general topological frames on ordinals for which GLP is sound and complete. The associated topologies are the same as the ordinal topologies introduced by Thomas Icard.”

**Sources:**

- [Lev D. Beklemishev and Yunsong Wang, Periodic frames, arXiv:2407.10190 (2024)](https://arxiv.org/abs/2407.10190)

### Proof nets forget the order of rules and keep only the links

**Remember:** A proof net keeps which atoms are linked and forgets the order of rules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F52 (Proof-theoretic aspects of linear logic and other substructural logics), 18M45. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** Multiplicative linear logic is the part of linear logic with only the connectives tensor (⊗) and par (⅋). A proof structure for it is a graph of the connectives of a sequent, with links that pair the occurrences of atomic formulas. A proof net is a proof structure that comes from a proof in the sequent calculus.

**Problem.** Say when two proofs in the sequent calculus are "the same proof", whatever the order of their rule applications. Also find which graphs among all proof structures are correct proofs.

**How the definition helps.** Proof nets make the identity of proofs simple: two proofs are the same when they give equal nets. Proofs that differ only in the order of rule applications, or by exchange steps, give the same proof net. This reading is ours; the nLab speaks of freeing proofs from 'the bureaucracy of syntax'. Not every proof structure comes from a proof, so you need a correctness criterion to exclude the bad graphs. The theorem of Girard and of Danos and Regnier covers formulas without units. It says that a proof structure is a proof net if each of its switchings, where you remove one of the two edges at each par, is a connected acyclic graph. Its proof is technical, and Danos and Regnier also showed that you can decide the criterion in polynomial time.

**nLab:** [proof net](https://ncatlab.org/nlab/show/proof+net). It says: “can be viewed as graphical normal forms of proofs freed from 'the bureaucracy of syntax' (Girard).”

**Sources:**

- [Jean-Yves Girard, Linear logic, Theoretical Computer Science 50 (1987) 1–101](https://doi.org/10.1016/0304-3975(87)90045-4)
- [Vincent Danos, Laurent Regnier, The structure of multiplicatives, Archive for Mathematical Logic 28 (1989) 181–203](https://doi.org/10.1007/BF01622878)

### Truncated existence keeps Brouwer's continuity principle consistent

**Remember:** Say that a modulus exists; do not ask for a choice of one.

*Rules out counterexamples.* MSC 03F55 (Intuitionistic mathematics), 03B38. arXiv math.LO, cs.LO. Level 4: research.

**Definition.** In type theory, 'there exists' can mean two things. The dependent sum Σ carries a witness. Its propositional truncation ‖Σ‖ only says that a witness exists, and does not give one. The continuity principle says that every function ℕᴺ → ℕ (from infinite sequences of natural numbers to natural numbers) is continuous, and 'continuous' contains 'there exists a modulus'. A modulus at a sequence is a number n such that the value depends only on the first n terms.

**Problem.** Brouwer's principle that all functions ℕᴺ → ℕ are continuous should be consistent with intuitionistic type theory.

**How the definition helps.** Truncation states that a modulus exists without a function that picks one, and only the picking leads to a contradiction. Escardó and Xu showed that the untruncated version proves 0 = 1. In that version, each function comes with a chosen modulus of continuity, so existence is a Σ-type. Σ turns 'each function has a modulus' into a function that picks a modulus, and this gives the contradiction. With existence as the propositional truncation of Σ, the principle is consistent: the nLab says that it holds in Johnstone's topological topos. For uniform continuity on Cantor space (infinite sequences of 0s and 1s), the nLab says that the truncated and untruncated versions are equivalent. So the problem is specific to Baire space ℕᴺ.

**nLab:** [Brouwer's continuity principle](https://ncatlab.org/nlab/show/Brouwer%27s+continuity+principle), [BHK interpretation](https://ncatlab.org/nlab/show/BHK+interpretation). It says: “The statement that all functions from the Baire space of sequences ℕ<sup>ℕ</sup> to the natural numbers have a choice of modulus of pointwise continuity is inconsistent.”

**Sources:**

- [Martín Escardó, Chuangjie Xu, The inconsistency of a Brouwerian continuity principle with the Curry–Howard interpretation, TLCA 2015, LIPIcs 38, 153–164](https://doi.org/10.4230/LIPIcs.TLCA.2015.153)

### Lower reals make the extreme value theorem a fact about semicontinuity

**Remember:** A lower real is known only from below, which is all a supremum needs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F60 (Constructive and recursive analysis), 26A15, 54D30. arXiv math.LO, math.CA. Level 4: research.

**Definition.** A lower real number is given only by a lower cut: the set of rationals below it. The lower reals form the set \]−∞, ∞\], so they include ∞. In constructive mathematics, a lower real need not be located, that is, you may not be able to approximate it from above. Every inhabited set of lower reals (a set with at least one element) has a supremum.

**Problem.** The extreme value theorem in this form says: a lower semicontinuous function from an inhabited compact space to the lower reals has a minimum. A function f is lower semicontinuous if the set where f &gt; a is open for each a. Dually, an upper semicontinuous function has a maximum.

**How the definition helps.** The lower reals are defined so that every inhabited set has a supremum, so part of the work is free. The range of any function into the lower reals has a supremum automatically. The theorem then reduces to one claim: when the domain is compact, the infimum exists and the function attains it. This shows that the theorem is really about semicontinuous functions. You get the version for continuous real-valued functions by applying the theorem to f and to −f. The nLab notes that, constructively, the statement holds in locale theory (topology done with lattices of open sets instead of points). But it fails for pointwise functions on a real interval, and its relation to the fan theorem (a constructive principle about infinite binary trees) is subtle.

**nLab:** [extreme value theorem](https://ncatlab.org/nlab/show/extreme+value+theorem). It says: “Recall that the lower real numbers are more general than the real numbers in just the way needed to guarantee that any inhabited set of lower reals has a supremum”

**Sources:** none listed. No primary source with a working link was found.

### Antisubalgebras give constructive quotients that keep an apartness

**Remember:** An antisubalgebra lists what is positively outside the subalgebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F65 (Other constructive mathematics), 08A30, 08A05. arXiv math.LO, math.RA. Level 4: research.

**Definition.** In constructive mathematics, an apartness x ≠ y is a positive way to say that two elements differ; it is tight when 'not apart' implies 'equal'. Take an algebra with a tight apartness and strongly extensional operations (if two outputs are apart, then some pair of inputs is apart). An antisubalgebra is a ≠-open subset A such that, whenever fᵢ(p₁, …, pₙ) ∈ A, some pⱼ ∈ A. ≠-open means that for each a ∈ A and each x, either x ∈ A or x ≠ a. Classically an antisubalgebra is the complement of a subalgebra. An anticongruence is an apartness relation that is also an antisubalgebra of X × X.

**Problem.** In constructive algebra (algebra without excluded middle), form quotient groups and quotient rings that still carry a tight apartness with strongly extensional operations. Also, say positively when a substructure is proper.

**How the definition helps.** An anticongruence gives the quotient its apartness directly, so you do not need excluded middle. A normal subgroup or an ideal is enough to form the quotient, but without excluded middle it does not give an apartness on the quotient. So you take the quotient by an anticongruence instead, for example one built from a normal antisubgroup or an antiideal. Then the anticongruence becomes a tight apartness on the quotient, and the operations stay strongly extensional. Properness becomes a positive statement: an antisubalgebra is proper when it is inhabited, and an antiideal is proper when 1 ∈ A. In general you cannot go back from an arbitrary subalgebra to an antisubalgebra.

**nLab:** [antisubalgebra](https://ncatlab.org/nlab/show/antisubalgebra). It says: “However, if we want the quotient algebra to inherit an apartness from the original algebra, then we need antisubgroups and antiideals.”

**Sources:**

- [A. S. Troelstra, D. van Dalen, Constructivism in Mathematics: An Introduction, Volume II, Studies in Logic and the Foundations of Mathematics 123, North-Holland (1988)](https://shop.elsevier.com/books/constructivism-in-mathematics-vol-2/troelstra/978-0-444-70358-3)

### Quasidecidable propositions form a dominance without countable choice

**Remember:** Quasidecidable means 'closed under countable or' by construction.

*Makes the theorem clean to state or prove.* MSC 03F65 (Other constructive mathematics), 18F70. arXiv math.LO, math.GN. Level 4: research.

**Definition.** The quasidecidable truth values form the smallest set of truth values that contains true and false and is closed under existential quantification over ℕ. Equivalently, they form the initial σ-frame. A σ-frame is a lattice with finite meets and countable joins, in which finite meets distribute over countable joins.

**Problem.** Synthetic topology needs a dominance of 'open' propositions that is closed under countable existential quantification. A dominance is a set of propositions that contains true and is closed under a dependent form of 'and'; it says which subsets count as open. You cannot prove constructively that the semidecidable propositions form such a dominance without an extra axiom, such as countable choice.

**How the definition helps.** The definition builds in closure under countable 'or', so it needs no extra axiom for that. A semidecidable proposition has the form ∃n. f(n) = 1 for a binary sequence f. The claim that ∃ over ℕ of such propositions is again semidecidable is equivalent to a choice principle (Rosolini's dominance axiom), which follows from countable choice. The quasidecidable propositions are defined as the closure under this operation, so closure under ∃ over ℕ holds by construction. That they also form a dominance is a theorem (Bidlingmaier, Faissole and Spitters; Escardó), not part of the definition. With countable choice, for example in the effective topos, they coincide with the semidecidable ones, which form the Rosolini dominance.

**nLab:** [quasidecidable proposition](https://ncatlab.org/nlab/show/quasidecidable+proposition), [Smyth's dictionary](https://ncatlab.org/nlab/show/Smyth%27s+dictionary). It says: “unlike the set of semidecidable propositions, even in the absence of countable choice, the set of quasidecidable propositions is always an ℕ-overt dominance”

**Sources:**

- [Martin E. Bidlingmaier, Florian Faissole, Bas Spitters, Synthetic topology in homotopy type theory for probabilistic programming, Mathematical Structures in Computer Science 31 (2021), arXiv:1912.07339](https://arxiv.org/abs/1912.07339)

### The axiom of fullness builds the Dedekind reals without choice

**Remember:** Fullness gives a set of enough multivalued functions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03F65 (Other constructive mathematics), 03F60, 26E40. arXiv math.LO, math.CA. Level 4: research.

**Definition.** An entire relation from X to Y relates each x to at least one y, so it is a kind of multivalued function. The axiom of fullness says that for sets X and Y there is a set of entire relations such that every entire relation contains one of them. This axiom is stronger than the function set axiom and weaker than the power set axiom.

**Problem.** Construct the set ℝ of located Dedekind real numbers predicatively, that is, without the power set axiom. A located cut is one where, for any rationals a &lt; b, a is below the cut or b is above it. Do not use excluded middle or countable choice.

**How the definition helps.** Fullness lets one use multivalued sequences in place of sequences, and these give the Dedekind reals with no choice. With only function sets, one gets the Cauchy reals as a subquotient (a quotient of a subset) of the set of functions ℕ → ℕ. The Cauchy reals equal the Dedekind reals only under a weak countable choice principle. In some Grothendieck toposes the two differ. With fullness, one uses regular multivalued sequences instead, taken from the set of enough entire relations from ℕ to ℕ. Their subquotient is the Dedekind reals, with no choice. The nLab also warns that this axiom is overkill for real numbers alone, and that no one knows how to define the locale of real numbers with fullness alone.

**nLab:** [axiom of fullness](https://ncatlab.org/nlab/show/axiom+of+fullness). It says: “it is strong enough to construct the set ℝ of (located Dedekind) real numbers from the set ℕ of natural numbers without assuming excluded middle or countable choice.”

**Sources:**

- [M. Shulman, Comparing material and structural set theories, arXiv:1808.05204 (2018)](https://arxiv.org/abs/1808.05204)

### A general law of excluded middle characterizes semisimple logics

**Remember:** Given an inconsistency lemma, semisimple means having a general excluded middle.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03G25 (Other algebras related to logic), 03B47. arXiv math.LO. Level 4: research.

**Definition.** A logic is semisimple when every model is a subdirect product of simple models, that is, models with no non-trivial quotients. The authors state the law of the excluded middle in a general form that does not mention any particular connective. They prove that a logic is semisimple if and only if it has this law, given a weak form of Raftery's inconsistency lemma.

**Problem.** Kowalski and Kracht characterized the semisimple varieties of FLew-algebras and of Boolean algebras with operators. FLew-algebras are residuated lattices that model substructural logics with exchange and weakening. Their proofs were algebraic.

**How the definition helps.** The definition turns semisimplicity, an algebraic property, into a law that one can check by deriving formulas. So the older characterizations follow from short syntactic derivations. The same equivalence extends them to FLe-algebras and to Heyting algebras with operators. Under stronger assumptions it also gives Glivenko theorems, such as those relating intuitionistic and classical logic, and S4 and S5. What stays hard is the general equivalence itself, and the inconsistency lemma must still be checked for each logic.

**Paper or page:** [Semisimplicity, Glivenko theorems, and the excluded middle](https://arxiv.org/abs/2101.03528). It says: “this equivalence can be used to provide simple syntactic proofs of the theorems of Kowalski and Kracht characterizing the semisimple varieties of FLew-algebras and Boolean algebras with operators”

**Sources:**

- [Tomáš Lávička and Adam Přenosil, Semisimplicity, Glivenko theorems, and the excluded middle, arXiv:2101.03528 (2021)](https://arxiv.org/abs/2101.03528)

### An initial category with a natural numbers object gives IΣ₁'s total functions

**Remember:** In the initial arithmetic category, every total map is primitive recursive.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 03F30, 03D20. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A coherent category has finite limits, images and unions that are stable under pullback. These operations model ∧, ∨ and ∃, and A parametrised natural numbers object is an object N with a zero and a successor. In it, definitions by primitive recursion with parameters have unique solutions.

**Problem.** A classical result says that the provably total recursive functions of IΣ₁ are exactly the primitive recursive functions. IΣ₁ is Peano arithmetic with induction only for Σ₁ formulas.

**How the definition helps.** Initiality turns a question about all proofs into a question about one structure-preserving functor. The paper builds a category of primitive recursive data with the same structure. Initiality gives a functor from the category of 𝕋 into it. A provably total function of 𝕋 is a map Nⁿ → N in the first category, so it goes to a primitive recursive function. The abstract says that 𝕋 is exactly the Π₂ fragment of IΣ₁, so the result transfers to IΣ₁. The work moves to proving that 𝕋 presents the initial category.

**Paper or page:** [Categorical Structure in Theory of Arithmetic](https://arxiv.org/abs/2304.05477). It says: “prove that 𝕋 presents the initial coherent category equipped with a parametrised natural number object. This allows us to derive the provably total functions in 𝕋 are exactly the primitive recursive ones”

**Sources:**

- [Lingyuan Ye, Categorical Structure in Theory of Arithmetic, arXiv:2304.05477 (2023)](https://arxiv.org/abs/2304.05477)

### Arboreal categories give one proof of resource-preserving homomorphism preservation

**Remember:** Axiomatize the game trees once, and preservation theorems follow everywhere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 03C40, 03C13. arXiv math.LO, math.CT. Level 4: research.

**Definition.** An arboreal category is a category with special objects called paths, such that every object is assembled from its paths in a tree-like way. It describes abstractly the tree-shaped unfoldings that are used in model comparison games. A resource is a measure of the complexity of sentences, such as quantifier rank or modal depth.

**Problem.** By the Łoś–Lyndon–Tarski theorem, a first-order sentence φ is preserved under homomorphisms exactly when it is equivalent to an existential positive sentence ψ. Such a sentence is built from atoms with ∧, ∨ and ∃. An equi-resource version also requires ψ to be no more complex than φ.

**How the definition helps.** The axioms capture what the proof needs, so it is done once and then applied to each logic. The abstract says that the framework gives new homomorphism preservation results and improves known ones for first-order, guarded and modal logic. What stays hard is to check that the axioms hold for each logic and each resource.

**Paper or page:** [Arboreal Categories and Equi-resource Homomorphism Preservation Theorems](https://arxiv.org/abs/2211.15808). It says: “We describe an axiomatic approach to equi-resource homomorphism preservation theorems based on the notion of arboreal category. This framework is then employed to establish novel homomorphism preservation results, and improve on known ones, for various logic fragments”

**Sources:**

- [Samson Abramsky and Luca Reggio, Arboreal Categories and Equi-resource Homomorphism Preservation Theorems, arXiv:2211.15808 (2024)](https://arxiv.org/abs/2211.15808)

### Equality in a hyperdoctrine is existential quantification along the diagonal

**Remember:** x = y is the least relation that holds on the diagonal.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18C10. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A first-order hyperdoctrine gives each object A a poset of predicates on A, and each map a substitution between these posets; left adjoints of substitution interpret ∃. In it, the equality predicate on A comes from the diagonal map δ : A → A × A. It is the left adjoint of substitution along δ, applied to the top predicate ⊤ (true). A hyperdoctrine with equality also asks for the Beck–Chevalley condition for the squares built from δ × B. This condition says that substitution and quantification commute.

**Problem.** Interpret first-order logic with equality soundly in a categorical model. Equality must obey the usual rules: reflexivity and substitution of equals.

**How the definition helps.** Equality is not added as new structure: it is defined from the same left adjoints that interpret ∃. So its introduction and elimination rules are the unit and the universal property of this adjunction. The extra Beck–Chevalley condition makes this equality stable under substitution, and soundness needs that. This differs from the entry on quantifiers as adjoints. Here the point is that equality, too, is one of those adjoints.

**nLab:** [first-order hyperdoctrine](https://ncatlab.org/nlab/show/first-order+hyperdoctrine). It says: “This assures that the equality predicate is well behaved in the sense that it allows a sound interpretation of first order logic with equality in the hyperdoctrine.”

**Sources:**

- [F. William Lawvere, Equality in hyperdoctrines and comprehension schema as an adjoint functor, in: Applications of Categorical Algebra, Proc. Sympos. Pure Math. 17, AMS (1970)](https://doi.org/10.1090/pspum/017/0257175)

### In a constructively well-pointed topos, internal truth is truth for global elements

**Remember:** Constructively, 1 must also not split into two parts and must lift through epimorphisms.

*Rules out counterexamples. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 18B25, 03F65. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A topos is well-pointed if two conditions hold. First, the terminal object 1 is a generator: two maps out of A are equal when they agree on all global elements 1 → A. Second, 1 is not initial. In constructive mathematics one also asks that 1 be indecomposable (it does not split as a coproduct of two parts that are not initial) and projective (maps out of 1 lift through every epimorphism).

**Problem.** In a well-pointed topos, a statement in the internal logic should hold exactly when it holds for all global elements. Then the topos behaves like a category of sets.

**How the definition helps.** The two added conditions do for 'or' and 'there exists' what 'not initial' does for falsehood. If the metalogic has excluded middle, the two basic conditions already have strong consequences. They make the topos Boolean (its internal logic has excluded middle), two-valued (1 has exactly two subobjects) and with split supports. They also make internal truth equal to external truth. Without excluded middle these consequences do not follow, so the nLab adds that 1 is indecomposable and projective. These two conditions handle disjunction and the existential quantifier in the same way that nondegeneracy handles falsehood. Classically the two added conditions follow from the first two, so the definition does not change in classical mathematics.

**nLab:** [well-pointed topos](https://ncatlab.org/nlab/show/well-pointed+topos). It says: “To maintain this logical result in constructive mathematics (that is, without excluded middle in the metalogic), one must add the following requirements:”

**Sources:**

- [P. Freyd, Aspects of topoi, Bulletin of the Australian Mathematical Society 7 (1972) 1–76](https://doi.org/10.1017/S0004972700044828)
- [M. Shulman, Comparing material and structural set theories, Annals of Pure and Applied Logic 170 (2019) 465–504, arXiv:1808.05204](https://doi.org/10.1016/j.apal.2018.11.002)

### Models as functors make elementary embeddings exactly the natural transformations

**Remember:** A natural map respects every definable set, including each complement.

*True by definition.* MSC 03G30 (Categorical logic, topoi), 03C07. arXiv math.LO, math.CT. Level 4: research.

**Definition.** Present a model of a classical first-order theory T as a functor, a structure-preserving map, from the syntactic category of T to sets. The syntactic category has the definable sets of T as objects and the definable functions as maps. The functor sends each definable set to its set of solutions in the model. A natural transformation is a family of maps, one for each object, that commutes with every map of the category.

**Problem.** A family of maps between two such model functors is a natural transformation exactly when it preserves and reflects every formula. That is, it is an elementary embedding.

**How the definition helps.** Naturality along inclusions of definable sets already says that the maps preserve every formula. The nLab proves the rest with complements. If an element is not in a definable set X, it lies in the complement ¬X, so its image lies in the image of ¬X. The model functor sends X and ¬X to disjoint sets, so the image is not in X either. The usual definition of an elementary embedding asks for this preservation and reflection of every formula directly, in our own account. The work moves into building the syntactic category and showing that models are the functors that preserve its logical structure, in our own account.

**nLab:** [elementary embedding](https://ncatlab.org/nlab/show/elementary+embedding). It says: “Elementary embeddings are natural transformations between these functors.”

**Sources:** none listed. No primary source with a working link was found.

### Pretoposes are exactly the conceptually complete coherent categories

**Remember:** A pretopos already contains every sort that a model can see.

*Rules out counterexamples.* MSC 03G30 (Categorical logic, topoi), 18E08, 03C40. arXiv math.LO, math.CT. Level 4: research.

**Definition.** A coherent category is a category with finite limits, images and unions of subobjects, all stable under pullback; it can interpret coherent logic. A pretopos is a coherent category that also has disjoint finite coproducts and quotients of equivalence relations. Coherent theories correspond to pretoposes up to elimination of imaginaries, that is, up to adding sorts for such coproducts and quotients. A model is a pretopos morphism to Set.

**Problem.** Conceptual completeness (Makkai–Reyes) says this. Suppose an interpretation of coherent theories induces an equivalence of their categories of models. Then the theories are bi-interpretable up to elimination of imaginaries.

**How the definition helps.** Passing to pretoposes adds the coproducts and quotients that coherent functors preserve anyway. For plain coherent categories the theorem is false. The embedding of a coherent category into its pretopos completion induces an equivalence of model categories, but in general it is not an equivalence. The nLab notes that the theorem can be rephrased as a characterization: the pretoposes are exactly the conceptually complete coherent categories. The theorem is still hard. Makkai and Reyes used model theory, and Pitts later gave a categorical proof by interpolation.

**nLab:** [conceptual completeness](https://ncatlab.org/nlab/show/conceptual+completeness). It says: “the conceptual completeness theorem can be rephrased by saying that pretoposes are conceptually complete, thus characterizing pretoposes as the conceptually complete (coherent) categories.”

**Sources:**

- [M. Makkai, G. E. Reyes, First Order Categorical Logic, Lecture Notes in Math. 611, Springer (1977)](https://doi.org/10.1007/BFb0066201)

### Program tracking makes natural-number maps in the effective topos computable

**Remember:** A map on natural numbers computes with those numbers as codes.

*True by definition. Confidence: medium.* MSC 03G30 (Categorical logic, topoi), 03D80. arXiv math.LO, math.CT. Level 4: research.

**Definition.** The effective topos is a category with its own logic that uses natural numbers as codes, called realizers, for computational evidence. Its object that represents the natural numbers has each number realized by itself. On this kind of object, a tracking program converts any input realizer into a realizer of the output.

**Problem.** Each map from the natural numbers object to itself in the effective topos gives a total computable function on ordinary natural numbers.

**How the definition helps.** Program tracking gives a map on numbers a program that must return the output number itself (our own). Each input number is its own realizer, so the tracker must halt on every natural number (our own). In the ordinary category of sets, functions need not come with any such program (our own). The work lies in identifying the topos’s natural numbers object and proving that this tracked-map description applies to it (our own). The quoted internal result is stronger and needs the interpretation of the topos’s logic (our own).

**nLab:** [effective topos](https://ncatlab.org/nlab/show/effective+topos). It says: “it is provable that every total function from natural numbers to natural numbers is recursive”

**Sources:**

- [J. M. E. Hyland, The effective topos, in A. S. Troelstra, D. van Dalen (eds.), The L. E. J. Brouwer Centenary Symposium, North-Holland (1982), 165–216](https://doi.org/10.1016/S0049-237X(09)70129-6)
