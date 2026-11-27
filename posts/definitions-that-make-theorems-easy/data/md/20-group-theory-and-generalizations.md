### A left identity and left inverses are enough to make a group

**Remember:** Check only one side, but the same side for identity and inverses.

*Makes the theorem clean to state or prove.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A group is a set with an associative operation, an identity e with ex = xe = x, and two-sided inverses. The weaker scheme asks only for some e with ex = x for all x and, for each x, some y with yx = e.

**Problem.** To show that a structure is a group, it is enough to check associativity, a left identity and left inverses. The left inverses are then two-sided, and so is the identity.

**How the definition helps.** The weaker axioms halve the work of checking a group, and associativity supplies the other side. Our own sketch: if yx = e and zy = e, then xy = (zy)(xy) = z(yx)y = zy = e, and then xe = x(yx) = (xy)x = ex = x. The two sides must match: on a set with two or more elements, put xy = y. Then every element is a left identity and has a right inverse, but the set is not a group (our own example).

**Paper or page:** [Equivalence of Axiom Schemata for Groups](https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups), [Left Identity in Semigroup may not be Unique](https://proofwiki.org/wiki/Left_Identity_in_Semigroup_may_not_be_Unique). It says: “there exists at least one element e ∈ G such that e is a left identity; For any element g in a group G, there exists at least one left inverse of g.”

**Sources:**

- [ProofWiki, Equivalence of Axiom Schemata for Groups](https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups)
- [ProofWiki, Left Identity in Semigroup may not be Unique](https://proofwiki.org/wiki/Left_Identity_in_Semigroup_may_not_be_Unique)

### Equal outputs identify kernel cosets

**Remember:** Inputs have the same output exactly when they share a kernel coset.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The kernel of a group homomorphism f consists of the elements mapped to the identity. Define classes by putting two inputs together whenever their outputs agree. The usual quotient uses cosets, which are translates of the kernel.

**Problem.** The quotient by the kernel of a group homomorphism is isomorphic to its image.

**How the definition helps.** Labeling each class by its common output gives an immediate bijection with the image. Our own proof multiplies classes by multiplying representatives. The output of a product is the product of the outputs, so this rule is well defined and preserves multiplication. Finally, f(a) = f(b) exactly when a⁻¹b lies in the kernel, so the classes are precisely its cosets.

**Paper or page:** [First Isomorphism Theorem/Groups](https://proofwiki.org/wiki/First_Isomorphism_Theorem/Groups). It says: “Then: Img φ ≅ G₁ / ker φ where ≅ denotes group isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### The subgroup test asks for nonempty, since the empty set passes

**Remember:** The empty set is closed under everything, so test for nonempty first.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup of a group G is a subset H that is a group under the operation of G. A group always contains an identity, so it is never empty.

**Problem.** A subset H of a group G is a subgroup exactly when H is nonempty, closed under products and closed under inverses.

**How the definition helps.** Closure under products and inverses holds vacuously for the empty set, so the nonempty clause is what brings the identity into H. Our own sketch: with some a in H, closure gives a⁻¹ in H, and then e = aa⁻¹ is in H. Without the nonempty clause, the test would accept ∅, which is not a group. Nothing hard remains.

**Paper or page:** [Two-Step Subgroup Test](https://proofwiki.org/wiki/Two-Step_Subgroup_Test), [Empty Set is Submagma of Magma](https://proofwiki.org/wiki/Empty_Set_is_Submagma_of_Magma), [Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty). It says: “(1): H ≠ ∅, that is, H is non-empty (2): a, b ∈ H ⟹ a ∘ b ∈ H (3): a ∈ H ⟹ a⁻¹ ∈ H.”

**Sources:**

- [ProofWiki, Two-Step Subgroup Test](https://proofwiki.org/wiki/Two-Step_Subgroup_Test)
- [ProofWiki, Empty Set is Submagma of Magma](https://proofwiki.org/wiki/Empty_Set_is_Submagma_of_Magma)
- [ProofWiki, Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty)

### Transitive actions on inhabited sets are coset spaces

**Remember:** Transitive means one orbit, and one orbit needs at least one point.

*Rules out counterexamples. Confidence: medium.* MSC 20B05 (General theory for finite permutation groups), 20B07, 18B40. arXiv math.GR. Level 1: early undergraduate.

**Definition.** An action of a group G on a set X is transitive when, for all x and y in X, there is g in G with y = g · x. Often one also requires X to be inhabited, that is, nonempty.

**Problem.** Let G act transitively on an inhabited set X, and let H be the stabilizer of a point. Then X is isomorphic to the coset space G/H, and the transitive inhabited G-sets are exactly the connected objects of the category of G-sets.

**How the definition helps.** Asking for at least one point removes the empty set, the one case that breaks both statements. The empty set carries a transitive action by the literal definition, but it is not a coset space and not a connected object. For inhabited X, pick x and let H be its stabilizer; transitivity makes gH ↦ g · x a bijection G/H → X. Every G-set splits uniquely as a coproduct of transitive ones, which gives the second claim.

**nLab:** [transitive action](https://ncatlab.org/nlab/show/transitive+action). It says: “Let \* : G × X → X be a transitive action and suppose that X is inhabited. Then \* is equivalent to the action of G by multiplication on a coset space G/H”

**Sources:** none listed. No primary source with a working link was found.

### Counting inversions makes the sign of a permutation well defined

**Remember:** Inversions fix the sign; transpositions only flip it.

*True by definition. Confidence: medium.* MSC 20B30 (Symmetric groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** An inversion of a permutation σ of {1, …, n} is a pair i &lt; j with σ(i) &gt; σ(j). The sign of σ is +1 if the number of inversions is even and −1 if it is odd.

**Problem.** The sign is a homomorphism from the symmetric group Sₙ to {+1, −1}. Every way of writing σ as a product of transpositions uses a number of transpositions with the same parity. The even permutations form the alternating group Aₙ, the kernel of the sign.

**How the definition helps.** The number of inversions depends on σ alone, so the sign is well defined from the start. The work moves into one lemma: composing with a transposition of two adjacent positions changes the number of inversions by exactly one. Every transposition is a product of an odd number of adjacent ones, so every transposition changes the sign (our own). If the sign were defined by counting transpositions, a separate proof would be needed that the parity does not depend on the decomposition.

**Wikipedia:** [Parity of a permutation](https://en.wikipedia.org/wiki/Parity_of_a_permutation). It says: “We can thus define the parity of σ to be that of its number of constituent transpositions in any decomposition. And this must agree with the parity of the number of inversions under any ordering, as seen above.”

**Sources:** none listed. No primary source with a working link was found.

### Cycle lengths determine permutation order

**Remember:** Every cycle must finish a whole number of laps.

*True by definition.* MSC 20B30 (Symmetric groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A permutation of a finite set is a bijection from the set to itself. Equivalently, partition the set into cycles and send each letter to the next in its cycle, wrapping around at the end.

**Problem.** The order of a finite permutation is the smallest positive power that fixes every letter. It equals the least common multiple of the cycle lengths, with value one for the identity.

**How the definition helps.** Each cycle returns to its starting position exactly at multiples of its length. Our own proof therefore takes the first positive multiple common to all lengths. To pass from a bijection to the cycle description, follow each unused letter until it returns. Finiteness and injectivity ensure that these cycles partition the set.

**Paper or page:** [Order of Product of Disjoint Permutations](https://proofwiki.org/wiki/Order_of_Product_of_Disjoint_Permutations). It says: “Let π be a product of disjoint permutations of orders k₁, k₂, …, kᵣ. Then: \|π\| = lcm {k₁, k₂, …, kᵣ}”

**Sources:** none listed. No primary source with a working link was found.

### Left translations give Cayley’s embedding

**Remember:** A left translation reveals its group element at the identity.

*True by definition.* MSC 20B35 (Subgroups of symmetric groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** Use the left translation by g, which sends every x in a group to gx. Unlike right translation, this choice keeps the order of multiplication when composing maps.

**Problem.** Every group is isomorphic to a subgroup of the permutations of its underlying set.

**How the definition helps.** Left translation makes the translating element recoverable by evaluating its permutation at the identity (our own). This proves that different elements give different permutations (our own). Associativity gives the multiplication law for these maps, and translation by the inverse supplies the inverse map (our own).

**nLab:** [Cayley's theorem](https://ncatlab.org/nlab/show/Cayley%27s+theorem). It says: “namely as the group of permutations of elements of G by left-multiplication with G on itself”

**Sources:** none listed. No primary source with a working link was found.

### Defining Sylow subgroups as maximal p-subgroups makes every p-subgroup lie in one

**Remember:** Sylow subgroups are the largest p-subgroups, so every p-subgroup grows into one.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For a prime p, a p-group is a group in which the order of every element is a power of p. A p-subgroup is a subgroup that is a p-group. A Sylow p-subgroup of a group G is a p-subgroup that is not contained in any larger p-subgroup.

**Problem.** In a finite group, every p-subgroup lies in some Sylow p-subgroup. Sylow's theorems add that all Sylow p-subgroups are conjugate and have order pⁿ, the largest power of p that divides the order of G.

**How the definition helps.** With the maximal definition the containment is almost automatic: in a finite group, enlarge a p-subgroup step by step until it cannot grow. The work moves into Sylow's other theorems, that a subgroup of order pⁿ exists and that all maximal p-subgroups are conjugate to it. The same definition makes sense in infinite groups, but there conjugacy can fail (our own). In the infinite dihedral group, each reflection generates a maximal 2-subgroup of order 2, and these form two conjugacy classes (our own).

**Wikipedia:** [Sylow theorems](https://en.wikipedia.org/wiki/Sylow_theorems). It says: “A Sylow p-subgroup of a group G is a maximal p-subgroup—that is, a p-subgroup of G not contained in any strictly larger p-subgroup.”

**Sources:**

- [L. Sylow, Théorèmes sur les groupes de substitutions, Mathematische Annalen 5 (1872) 584–594](https://doi.org/10.1007/BF01442913)

### Conjugates generate the normal closure

**Remember:** Take products of conjugates and their inverses.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** To form the normal closure of S in G, generate a subgroup from all conjugates gsg⁻¹ of elements s in S. Alternatively, intersect all normal subgroups of G that contain S. A normal subgroup stays unchanged under conjugation.

**Problem.** The subgroup generated by all conjugates of S is the smallest normal subgroup containing S.

**How the definition helps.** The generator description makes normality follow from conjugating one generator at a time (our own). Conjugation preserves products and carries each generator to another generator (our own). Every normal subgroup containing S contains each conjugate, so the generated subgroup lies in every such subgroup (our own).

**nLab:** [normal closure](https://ncatlab.org/nlab/show/normal+closure). It says: “The normal closure is clearly a normal subgroup of G.”

**Sources:** none listed. No primary source with a working link was found.

### Normal subgroups are exactly the kernels, so quotient groups exist

**Remember:** Normal means the cosets can be multiplied.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup N of G is normal if gNg⁻¹ = N for all g ∈ G. Equivalently, the coset g₁g₂N of a product depends only on the cosets g₁N and g₂N.

**Problem.** For a subgroup N of G, the rule (g₁N)(g₂N) = g₁g₂N makes the cosets G/N a group exactly when N is normal. Normal subgroups are then the same as kernels of homomorphisms and as congruences on G.

**How the definition helps.** Normality is exactly the condition that makes coset multiplication well defined; for an arbitrary subgroup it is not. For normal N, G/N is a group and N is the kernel of G → G/N. Conversely, every kernel is normal, so normal subgroups, kernels and congruences match.

**nLab:** [normal subgroup](https://ncatlab.org/nlab/show/normal+subgroup). It says: “Thus normal subgroups may also be defined as kernels f⁻¹(e) of group homomorphisms G → H (e ∈ H is the identity), and this is largely the point of normal subgroups: they are equivalent to congruence relations in the category of groups.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizers are largest groups preserving subgroups

**Remember:** Preserve the subgroup as a set, not point by point.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The normalizer of a subgroup H in G consists of the elements g with gHg⁻¹ = H. This asks g to preserve H as a set, not to fix each element.

**Problem.** The normalizer of H is the largest subgroup of G in which H is normal.

**How the definition helps.** Testing conjugation one element at a time collects every possible member of a subgroup in which H is normal. Our own proof checks that the test holds for the identity, products, inverses, and every element of H. The resulting subgroup therefore contains H as a normal subgroup. Describing the normalizer by maximality alone would leave its existence to prove.

**nLab:** [normalizer](https://ncatlab.org/nlab/show/normalizer). It says: “If the subset S is in fact a subgroup of G, then it is a normal subgroup of the normalizer Nɢ(S)”

**Paper or page:** [Normalizer of Subgroup is Largest Subgroup containing that Subgroup as Normal Subgroup](https://proofwiki.org/wiki/Normalizer_of_Subgroup_is_Largest_Subgroup_containing_that_Subgroup_as_Normal_Subgroup). It says: “Then Nɢ(H), the normalizer of H in G, is the largest subgroup of G containing H as a normal subgroup.”

**Sources:** none listed. No primary source with a working link was found.

### Subgroups of cyclic groups stay cyclic

**Remember:** Lift the subgroup to the integers and send its generator back down.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** View a cyclic group as an image of the integers under a group homomorphism. The equivalent description is a group generated by the powers of one element.

**Problem.** Every subgroup of a cyclic group is cyclic.

**How the definition helps.** Describing the group as an image lets us lift the subgroup to the integers (our own). Its inverse image is a subgroup of the integers, and mapping back gives the original subgroup (our own). The division algorithm shows that the least positive member generates any nonzero subgroup of the integers (our own). The zero subgroup has generator zero, so in every case one generator maps to a generator downstairs (our own).

**Paper or page:** [Subgroup of Cyclic Group is Cyclic](https://proofwiki.org/wiki/Subgroup_of_Cyclic_Group_is_Cyclic). It says: “Then H is cyclic.”

**Sources:** none listed. No primary source with a working link was found.

### The trivial group is not simple, so composition factors are unique

**Remember:** Simple means exactly two normal subgroups, not at most two.

*Rules out counterexamples.* MSC 20E32 (Simple groups), 20D30, 20D05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A group G is simple if it has exactly two normal subgroups: the trivial subgroup and G itself. So the trivial group is not simple, because it has only one normal subgroup.

**Problem.** Any two composition series of a finite group have the same length and the same simple factors, up to order (the Jordan–Hölder theorem). A composition series is a chain of subgroups, each normal in the next, whose successive quotients are simple.

**How the definition helps.** The rule of exactly two normal subgroups forbids trivial factors, so the length of a composition series is well defined. If the trivial group counted as simple, one could pad a series by repeating a term, which adds a trivial factor (our own reading). The nLab compares this with 1 not being prime: for cyclic groups, composition series match prime factorizations. The proof of Jordan–Hölder is still an induction on the order of the group.

**nLab:** [simple group](https://ncatlab.org/nlab/show/simple+group), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple), [Jordan-Hölder theorem](https://ncatlab.org/nlab/show/Jordan-H%C3%B6lder+theorem). It says: “Note that the trivial group does not itself count as simple, on the grounds that it has only \*one\* quotient group (or only one normal subgroup).”

**Sources:**

- [David Speyer, The Jordan–Hölder theorem, course notes for Math 594, University of Michigan (2013)](https://web.archive.org/web/20210926062254/http://www.math.lsa.umich.edu/~speyer/594_2013/JordanHolder.pdf)

### Characteristic subgroups pass normality down, which normal subgroups cannot

**Remember:** Fixed by every automorphism, so fixed by conjugation from above.

*Rules out counterexamples.* MSC 20F28 (Automorphism groups of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup H of G is characteristic if every automorphism of G maps H onto itself. A normal subgroup needs only to be fixed by the inner automorphisms, the conjugations by elements of G.

**Problem.** If H is characteristic in K and K is normal in G, then H is normal in G. Also, a characteristic subgroup of a characteristic subgroup is characteristic.

**How the definition helps.** A characteristic subgroup is fixed by all automorphisms, so it survives conjugation from a larger group, and the proof is one line (our own). Conjugation by an element of G restricts to an automorphism of the normal subgroup K, which need not be inner but still fixes H (our own). Plain normality fails in the dihedral group of order 8 (our own). There a reflection generates a subgroup that is normal in a Klein four-subgroup, which is normal in the whole group, but the reflection subgroup is not normal in the whole group (our own).

**Wikipedia:** [Characteristic subgroup](https://en.wikipedia.org/wiki/Characteristic_subgroup). It says: “Moreover, while normality is not transitive, it is true that every characteristic subgroup of a normal subgroup is normal.”

**Sources:** none listed. No primary source with a working link was found.

### Finite cyclic groups have one model per order

**Remember:** The first power that returns to the identity gives the modulus.

*True by definition.* MSC 20K01 (Finite abelian groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** View a cyclic group as a quotient of the additive group of integers. Equivalently, it is a group whose elements are all powers of one generator.

**Problem.** Any finite cyclic group of order n is isomorphic to the integers modulo n.

**How the definition helps.** The quotient description identifies exponents exactly when their difference is a multiple of the first return time (our own). Send each integer to the corresponding power of a generator (our own). The powers before the first return are distinct and exhaust the group, so the first return time is n (our own). The kernel therefore consists of the multiples of n (our own). The first isomorphism theorem identifies the group with the additive integers modulo n (our own).

**Paper or page:** [Cyclic Groups of Same Order are Isomorphic](https://proofwiki.org/wiki/Cyclic_Groups_of_Same_Order_are_Isomorphic). It says: “Two cyclic groups of the same order are isomorphic to each other.”

**Sources:** none listed. No primary source with a working link was found.

### Coprime orders make cyclic products cyclic

**Remember:** A pair repeats when both coordinates repeat.

*Rules out counterexamples.* MSC 20K25 (Direct sums, direct products, etc. for abelian groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The order of a finite group is its size. Two group orders are coprime if they share no prime factor. A cyclic group consists of all integer powers of one element.

**Problem.** The direct product of two finite cyclic groups is cyclic exactly when their orders are coprime.

**How the definition helps.** With coprime orders, a pair of generators visits the whole product before returning to the identity (our own). Its first return occurs at the least common multiple of the two group orders (our own). Every pair returns by then because powers act separately on the two coordinates (our own). This common multiple equals the product size exactly when the orders are coprime (our own). Two groups of order 2 give four elements but no element of order 4.

**Paper or page:** [Group Direct Product of Cyclic Groups/Examples/C2 x C2](https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups/Examples/C2_x_C2), [Group Direct Product of Cyclic Groups](https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups). It says: “The group direct product C₂ × C₂ is not a cyclic group.”

**Sources:** none listed. No primary source with a working link was found.

### Setting a⁰ equal to the identity gives index laws for all integers

**Remember:** The empty product is the identity, so a⁰ = e.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20M10 (General structure theory for semigroups), 20M17. arXiv math.RA. Level 1: early undergraduate.

**Definition.** In a monoid, a⁰ is defined as the identity element e, and aⁿ⁺¹ = aⁿ ∘ a. For an invertible a, a⁻ⁿ is defined as (a⁻¹)ⁿ.

**Problem.** For an invertible element a of a monoid and all integers m and n, a to the power nm equals (aᵐ)ⁿ and (aⁿ)ᵐ.

**How the definition helps.** The value a⁰ = e is the empty product. For an invertible a, it is the only value that keeps aᵐ⁺ⁿ = aᵐ ∘ aⁿ true when m or n is 0. With it, the recursive definition starts at 0 and the laws need no separate cases for zero. In a semigroup without identity, a⁰ has no meaning, and the laws hold only for positive exponents; this remark is our own. The proof for negative exponents still needs the inverse of a.

**Paper or page:** [Index Laws for Monoids/Product of Indices](https://proofwiki.org/wiki/Index_Laws_for_Monoids/Product_of_Indices). It says: “Then: ∀ m, n ∈ ℤ: aⁿᵐ = (aᵐ)ⁿ = (aⁿ)ᵐ”

**Sources:**

- [ProofWiki, Index Laws for Monoids/Product of Indices](https://proofwiki.org/wiki/Index_Laws_for_Monoids/Product_of_Indices)

### Defining quotients by their maps out makes the third isomorphism theorem automatic

**Remember:** Killing N and then H/N kills exactly the elements of H.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the quotient G/N by a homomorphism from G that sends N to the identity. Every other homomorphism from G that sends N to the identity must factor through it in exactly one way. The usual definition builds G/N from the cosets gN, the translates of N.

**Problem.** Let N and H be normal subgroups of G, with N inside H. Then H/N is normal in G/N, and (G/N)/(H/N) is isomorphic to G/H.

**How the definition helps.** With this definition, both sides are defined by the same maps out, so they are isomorphic. A homomorphism from (G/N)/(H/N) is a homomorphism from G/N that sends H/N to the identity. That is the same as a homomorphism from G that sends N and H to the identity. G/H has exactly these maps out, so a uniqueness argument (the Yoneda lemma) gives the isomorphism. This argument is our own; ProofWiki proves the theorem with cosets. The work moves to showing that the coset construction has this mapping property, which needs coset multiplication to be well defined.

**Paper or page:** [Third Isomorphism Theorem/Groups](https://proofwiki.org/wiki/Third_Isomorphism_Theorem/Groups). It says: “(G / N) / (H / N) ≅ G / H”

**Sources:** none listed. No primary source with a working link was found.

### Order as a kernel generator makes image orders divide original orders

**Remember:** A larger subgroup of ℤ has a generator that divides the smaller subgroup’s generator.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a group element a, take the homomorphism n ↦ aⁿ from ℤ and let K be its kernel. If K is not just {0}, define the order of a as its positive generator. If K = {0}, the order is infinite. The usual definition calls the order the least positive n with aⁿ = e, where e is the identity.

**Problem.** If f is a group homomorphism and a has finite order, then the order of f(a) divides the order of a.

**How the definition helps.** The generator definition makes the divisibility claim a containment of subgroups of ℤ. Whenever aⁿ = e, we have f(a)ⁿ = e. So if m and d are the orders of a and f(a), then mℤ is contained in dℤ. This containment says d divides m. Our own account moves the work from proving a divisibility rule for powers to proving that subgroups of ℤ are cyclic. Division with remainder shows that the least positive member generates such a subgroup.

**Wikipedia:** [Order (group theory)](https://en.wikipedia.org/wiki/Order_%28group_theory%29). It says: “Group homomorphisms tend to reduce the orders of elements: if f: G → H is a homomorphism, and a is an element of G of finite order, then ord(f(a)) divides ord(a).”

**Sources:** none listed. No primary source with a working link was found.

### Powers defined by a group homomorphism obey the exponent law

**Remember:** A homomorphism turns sums into products, so bᵐ⁺ⁿ = bᵐbⁿ is built in.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups), 97H20. arXiv math.GR, math.HO. Level 2: later undergraduate.

**Definition.** Fix an element b of a group G. Let h be the unique homomorphism from the integers under addition to G with h(1) = b. A homomorphism here sends sums of integers to products in G. Define bⁿ = h(n).

**Problem.** For all integers m and n, bᵐ⁺ⁿ = bᵐbⁿ.

**How the definition helps.** The homomorphism definition makes the exponent law the rule that h sends sums to products. The usual definition instead uses repeated multiplication and defines negative powers using inverses. With that definition, the law needs a check that positive and negative powers combine correctly. The work moves into proving that the integers under addition have exactly one such homomorphism for each b. Proving existence from repeated products and inverses does the same check once for all groups (our own framing).

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “This definition of exponentiation with negative exponents is the only one that allows extending the identity bᵐ⁺ⁿ = bᵐ · bⁿ to negative exponents (consider the case m = −n).”

**Sources:** none listed. No primary source with a working link was found.

### The kernel definition makes preimages of normal subgroups normal

**Remember:** The preimage of a kernel is the kernel of the composite.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A subgroup N of G is normal if it is the kernel of a group homomorphism out of G. The kernel is the set of elements sent to the identity. The usual definition instead requires gNg⁻¹ = N for every g in G.

**Problem.** Let φ from G₁ to G₂ be any group homomorphism and H a normal subgroup of G₂. The preimage of H is normal in G₁.

**How the definition helps.** The kernel definition makes the preimage the kernel of one composite homomorphism. If H is the kernel of q, then its preimage under φ is the kernel of q ∘ φ. This argument is our own and does not require φ to be onto, as in the cited statement. The usual proof instead conjugates in G₁ and uses normality of H after applying φ. The work behind the kernel definition is constructing G/N and checking that its quotient map has kernel N.

**Paper or page:** [Preimage of Normal Subgroup under Epimorphism is Normal Subgroup](https://proofwiki.org/wiki/Preimage_of_Normal_Subgroup_under_Epimorphism_is_Normal_Subgroup). It says: “φ⁻¹\[H\] is a normal subgroup of (G₁, ∘)”

**Sources:** none listed. No primary source with a working link was found.

### Primitive actions are exactly the actions on cosets of maximal subgroups

**Remember:** No block to keep means no subgroup in between.

*True by definition.* MSC 20B15 (Primitive groups), 20E28. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A transitive action of G on a set X is primitive if it preserves no partition of X except the two trivial ones. These are the partition into one block and the partition into single points.

**Problem.** A transitive action of G on the cosets G/H is primitive if and only if H is a maximal subgroup of G. So listing the primitive actions of G is the same as listing its maximal subgroups up to conjugacy.

**How the definition helps.** The blocks that contain the base point correspond to the subgroups between H and G, so the equivalence is almost a restatement (our own). A subgroup K with H &lt; K &lt; G gives the block of cosets kH for k in K, and every block that contains the base point arises this way (our own). Transitivity in the definition excludes one bad case: the trivial group on a two-element set preserves only trivial partitions but is not transitive. The hard work moves to the lists of maximal subgroups of the simple groups (our own).

**Wikipedia:** [Primitive permutation group](https://en.wikipedia.org/wiki/Primitive_permutation_group). It says: “A group action is primitive if it is isomorphic to G/H for a maximal subgroup H of G, and imprimitive otherwise”

**Sources:** none listed. No primary source with a working link was found.

### The sign kernel makes the alternating group normal with index two

**Remember:** The two signs give the two cosets of the kernel.

*True by definition.* MSC 20B30 (Symmetric groups), 20B35. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For n ≥ 2 let Sₙ be the group of permutations of n letters. Take the sign of a permutation to be the determinant of the matrix that permutes the standard basis in the same way. The alternating group Aₙ is the kernel of this sign map. The alternative defines Aₙ as the permutations expressible as a product of an even number of swaps.

**Problem.** For n ≥ 2, the alternating group Aₙ is normal in Sₙ and has index two. That means Sₙ has two cosets of Aₙ, so Aₙ has n!/2 elements.

**How the definition helps.** The kernel definition makes normality automatic and makes the index the number of signs. Determinants multiply, so sign is a homomorphism. The identity has sign 1 and a swap has sign −1, so both occur. This is our own account of the kernel argument. Starting with swaps, one must show that no permutation has both an even and an odd expression. The determinant comparison does that work because a product of k swaps has sign (−1)ᵏ.

**Wikipedia:** [Parity of a permutation](https://en.wikipedia.org/wiki/Parity_of_a_permutation), [Alternating group](https://en.wikipedia.org/wiki/Alternating_group). It says: “It is the kernel of the signature group homomorphism sgn : Sₙ → {1, −1} explained under symmetric group.”

**Sources:** none listed. No primary source with a working link was found.

### Defining induction as a tensor product makes Frobenius reciprocity automatic

**Remember:** Induction is a tensor product, so Frobenius reciprocity is the tensor–hom rule.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 16D20. arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** Let H be a subgroup of a group G, and let V be a representation of H. The induced representation Ind V is the tensor product 𝕂\[G\] ⊗ V over the group algebra 𝕂\[H\].

**Problem.** Maps of G-representations from Ind V to W correspond naturally to maps of H-representations from V to the restriction Res W. For finite groups over ℂ, the inner product over G of Ind χ and ψ equals the inner product over H of χ and Res ψ.

**How the definition helps.** With this definition, Frobenius reciprocity is a case of the tensor–hom adjunction for modules, so it holds almost by definition. That adjunction says that maps out of M ⊗ V match maps from V into the module of maps out of M. For finite groups over ℂ, the character identity follows by taking dimensions of the two spaces of maps. What stays hard is, for example, Mackey's formula for the restriction of an induced representation.

**nLab:** [induced representation](https://ncatlab.org/nlab/show/induced+representation), [Frobenius reciprocity](https://ncatlab.org/nlab/show/Frobenius+reciprocity). It says: “is the statement that the induction functor for representations of groups (or in some other algebraic categories) is left adjoint to the restriction functor.”

**Sources:**

- [George Mackey, Induced representations of locally compact groups I, Annals of Math. 55 (1952) 101–139](https://doi.org/10.2307/1969423)

### Representations as group algebra modules turn Maschke into Wedderburn structure

**Remember:** The complex group algebra is one matrix algebra per irreducible representation.

*Makes the theorem clean to state or prove.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 16S34. arXiv math.RT, math.RA. Level 2: later undergraduate.

**Definition.** The group algebra K\[G\] has the elements of the finite group G as a basis, with multiplication from the group. A representation of G on V is the same as a K\[G\]-module structure on V. By Maschke's theorem, K\[G\] is semisimple when the characteristic of K does not divide the order of G. Semisimple means that every module is a direct sum of simple modules.

**Problem.** Over the complex numbers, ℂ\[G\] is a product of matrix algebras, one for each irreducible representation, of size its dimension. So the squares of the dimensions of the irreducible representations add up to the order of G. The number of irreducible representations equals the number of conjugacy classes.

**How the definition helps.** Viewing representations as modules over one algebra lets the Wedderburn–Artin theorem do the counting. That theorem says that a semisimple algebra is a product of matrix algebras over division rings, which over ℂ are ℂ itself. Comparing dimensions gives the sum of squares, and comparing the dimensions of the centers gives the count of conjugacy classes, since the center of ℂ\[G\] has a basis of class sums (our own). When the characteristic divides the order, the algebra is not semisimple and the structure is much harder.

**Wikipedia:** [Maschke's theorem](https://en.wikipedia.org/wiki/Maschke%27s_theorem), [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “The importance of this result stems from the well developed theory of semisimple rings, in particular, their classification as given by the Wedderburn–Artin theorem.”

**Sources:**

- [Maschke, H. (1898). Ueber den arithmetischen Charakter der Coefficienten der Substitutionen endlicher linearer Substitutionsgruppen. Mathematische Annalen 50, 492–498.](https://doi.org/10.1007/BF01444297)

### Conjugation turns maps of representations into fixed vectors

**Remember:** A map of representations is fixed by the action on maps.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Let ρ and σ be representations of a finite group G on complex vector spaces V and W. On the space of all linear maps f from V to W, define the action of g by f ↦ σ(g) f ρ(g⁻¹). One can instead describe maps of representations directly by the equations σ(g) f = f ρ(g).

**Problem.** The space of G-equivariant maps from V to W has dimension equal to the average over g in G of trace ρ(g⁻¹) times trace σ(g).

**How the definition helps.** The action on all linear maps turns the theorem into the general formula for the dimension of fixed vectors (our own). Its fixed-vector equation is exactly the direct equation for a map of representations (our own). Averaging the action gives a projection onto the fixed vectors, and the projection has trace equal to its rank (our own). The other step computes the trace of f ↦ σ(g) f ρ(g⁻¹) as the product of the two traces (our own).

**nLab:** [character of a linear representation](https://ncatlab.org/nlab/show/character+of+a+linear+representation). It says: “Then the Schur inner product of the two representation equals the convolution product of their characters, normalized by the order of G”

**Sources:** none listed. No primary source with a working link was found.

### Counting maps makes Schur orthogonality a direct consequence

**Remember:** With the map pairing, Schur’s lemma is the orthonormality statement.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For finite-dimensional complex representations V and W of a finite group G, set ⟨V,W⟩ to the dimension of the space of G-equivariant maps. Extend the pairing to formal differences of representations by bilinearity. The usual character pairing averages the character of V at g⁻¹ times the character of W at g over G. A character gives the trace of each group operator.

**Problem.** The distinct irreducible representations form an orthonormal basis of the representation ring, the group of formal differences of representations.

**How the definition helps.** The map pairing makes orthonormality exactly Schur’s lemma. Maps between nonisomorphic irreducible representations vanish, and the self-maps of each irreducible representation are the scalars. Complete reducibility gives the basis, since every representation is a sum of irreducible ones (our own). To compare with the character pairing, average the group action on the space of linear maps (our own). This projects onto the equivariant maps, and the trace of the projection yields the character average (our own).

**nLab:** [Schur's lemma](https://ncatlab.org/nlab/show/Schur%27s+lemma). It says: “the isomorphism classes of irreducible representations form an orthogonal basis for the representation ring, and even an orthonormal basis if the ground field is algebraically closed.”

**Sources:** none listed. No primary source with a working link was found.

### Defining induced characters by reciprocity makes them characters at once

**Remember:** Define by reciprocity, and positive integer coefficients come for free.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** A character of a representation is the function g ↦ trace of g; a class function is one that is constant on conjugacy classes. Let H be a subgroup of a finite group G and θ a character of H. Frobenius defined θᴳ as the unique class function on G with ⟨θᴳ, χ⟩ = ⟨θ, χ restricted to H⟩ for each irreducible χ. The inner product averages one function times the conjugate of the other.

**Problem.** The induced class function θᴳ is a character of G, that is, the character of an actual representation.

**How the definition helps.** The definition fixes the coefficients of θᴳ in the basis of irreducible characters. Each coefficient is ⟨θ, χ restricted to H⟩, an inner product of two characters of H, so it is a nonnegative integer, and θᴳ is a character. Here reciprocity is the definition, so the work moves into the theorem that irreducible characters form an orthonormal basis of class functions. The explicit formula for θᴳ as a sum over coset representatives is a separate result.

**Wikipedia:** [Character theory](https://en.wikipedia.org/wiki/Character_theory). It says: “this definition makes it clear that θᴳ is a non-negative integer combination of irreducible characters of G, so is indeed a character of G.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant forms explain the three Frobenius–Schur values

**Remember:** At most one invariant form survives, so its symmetry decides the sign.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For an irreducible complex representation V of a finite group G, consider its invariant symmetric and invariant alternating bilinear forms. A form B is invariant if B(gv,gw) = B(v,w). Define the indicator as the dimension of the symmetric space minus the dimension of the alternating space. The character definition instead averages χ(g²) over G, where χ(g) is the trace of g on V.

**Problem.** The indicator is 1 if V admits a nonzero invariant symmetric form, −1 if it admits a nonzero invariant alternating form, and 0 otherwise.

**How the definition helps.** Counting forms makes the three values immediate once Schur's lemma bounds the total dimension by one (our own). Invariant forms are maps of representations from V to its dual, so Schur's lemma gives that bound, and the symmetric and alternating parts of an invariant form are both invariant (our own). To compare with the character definition, group averaging projects onto invariant forms, so the average trace difference on symmetric and alternating forms counts the indicator (our own). That trace difference is χ(g⁻²), whose average equals the average of χ(g²) (our own).

**Wikipedia:** [Frobenius–Schur indicator](https://en.wikipedia.org/wiki/Frobenius%E2%80%93Schur_indicator). It says: “The inner product counts the multiplicities of direct summands; the equivalence of the definitions then follows immediately.”

**Sources:** none listed. No primary source with a working link was found.

### One generator gives the multiplicities in the regular representation

**Remember:** A map out of the group algebra is determined by the image of 1.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT. Level 2: later undergraduate.

**Definition.** The regular representation of a finite group G acts by left multiplication on a complex vector space with basis G. View this space as ℂ\[G\], the group algebra, whose multiplication extends that of G. Then ℂ\[G\] is a free module on the single generator 1.

**Problem.** Every irreducible complex representation V of G occurs in ℂ\[G\] with multiplicity dim V. Thus the squares of the dimensions of the distinct irreducible representations sum to \|G\|.

**How the definition helps.** The free-module model makes evaluation at 1 an isomorphism from the space of G-maps ℂ\[G\] → V to V (our own). The character proof instead computes traces of group operators and uses character orthogonality to extract multiplicities (our own). The free-module proof uses complete reducibility, or Maschke’s theorem, to split ℂ\[G\] into irreducible representations (our own). Schur’s lemma says only copies isomorphic to V contribute maps to V, each with a one-dimensional space of maps. Thus the number of copies is the dimension of the full space of maps, namely dim V (our own).

**nLab:** [regular representation](https://ncatlab.org/nlab/show/regular+representation). It says: “Over the complex numbers, the regular representation of a finite group is a direct sum that contains each irreducible representation ρᵢ with multiplicity its dimension:”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products make induction transitive

**Remember:** Tensoring twice along a chain gives the same result as tensoring once.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** Let W be a representation of a subgroup H of G over a field k. The group algebra k\[G\] has basis G and extends the group multiplication linearly. Define induction as k\[G\] ⊗ W over k\[H\]. The coset construction instead gives one copy of W for each left coset gH, with an action built from coset representatives.

**Problem.** Let H ≤ G ≤ K be finite groups and W a representation of H over k. Inducing through G gives a representation isomorphic to the one induced directly to K.

**How the definition helps.** The tensor definition makes transitivity an instance of associativity of tensor products (our own). Over k\[G\], multiplication identifies k\[K\] ⊗ k\[G\] with k\[K\] (our own). The coset proof instead has to match representatives along the two steps (our own). The work moves to comparing the constructions, using coset representatives as a right k\[H\]-module basis of k\[G\] (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “Transitivity of induction. Let W be a representation of H and let H ≤ G ≤ K be an ascending series of groups.”

**Sources:** none listed. No primary source with a working link was found.

### The group algebra centre counts irreducible representations

**Remember:** Each matrix algebra contributes one dimension to the centre.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT. Level 2: later undergraduate.

**Definition.** A complex representation of a finite group G is a module over the group algebra ℂ\[G\], which has basis G. The centre of ℂ\[G\] consists of the sums whose coefficients are constant on conjugacy classes. The character approach instead counts independent class functions.

**Problem.** There are as many irreducible complex representations of a finite group, up to isomorphism, as there are conjugacy classes.

**How the definition helps.** The group-algebra model lets both counts be read from the dimension of the centre of ℂ\[G\] (our own). The conjugacy class sums form a basis of the centre, so this dimension is the number of classes (our own). Maschke's theorem and the Wedderburn–Artin theorem split ℂ\[G\] into one full matrix algebra per irreducible representation, and each has a one-dimensional centre of scalars (our own). The character proof instead shows that the irreducible characters form a basis of the class functions (our own).

**Wikipedia:** [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “The center is equal to the set of class functions, that is the set of elements that are constant on each conjugacy class”

**Sources:** none listed. No primary source with a working link was found.

### Asking order coprime to index lets Sylow's theorem extend to solvable groups

**Remember:** Coprime order and index: solvable groups have all such subgroups.

*Rules out counterexamples.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20D10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A Hall subgroup of a finite group G is a subgroup whose order is coprime to its index. For a set of primes π, a Hall π-subgroup has order a product of primes in π and index divisible by no prime in π.

**Problem.** Hall (1928): if G is finite and solvable, then for every set of primes π, G has a Hall π-subgroup, and any two are conjugate. Conversely, a finite group with a Hall π-subgroup for every π is solvable.

**How the definition helps.** The coprime condition rules out divisors such as 6 in A₄, where existence fails, so Sylow's theorem extends to solvable groups with no exceptions. The divisor 6 is not allowed, because 6 and its index 2 share the factor 2. Sylow subgroups are the case where π has one prime. The converse shows that solvability is needed: A₅ has no subgroups of order 15 or 20, although these orders are coprime to their indices.

**Wikipedia:** [Hall subgroup](https://en.wikipedia.org/wiki/Hall_subgroup). It says: “The alternating group A₄ of order 12 is solvable but has no subgroups of order 6 even though 6 divides 12, showing that Hall's theorem (see below) cannot be extended to all divisors of the order of a solvable group.”

**Sources:**

- [P. Hall, A note on soluble groups, Journal of the London Mathematical Society 3 (1928) 98–105](https://doi.org/10.1112/jlms/s1-3.2.98)

### Normal Hall subgroups always have a complement

**Remember:** Coprime orders split the group into a semidirect product.

*Rules out counterexamples.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A complement of a normal subgroup N in G is a subgroup K with N ∩ K trivial and NK = G. Then G is a semidirect product of N and K. A normal Hall subgroup is a normal subgroup whose order is coprime to its index.

**Problem.** Schur–Zassenhaus theorem: let N be a normal subgroup of a finite group G, with \|N\| and \|G/N\| coprime. Then N has a complement, and all complements are conjugate.

**How the definition helps.** The coprime condition rules out the extensions in which N and the quotient share a prime, so a complement always exists. In C₄ with normal subgroup C₂, a complement would need a second element of order 2, and C₄ has only one. When N is abelian, existence and conjugacy come from the vanishing of H²(G/N, N) and H¹(G/N, N), because the orders are coprime. In general, conjugacy needs N or G/N to be solvable, which always holds but only by the Feit–Thompson theorem.

**Wikipedia:** [Schur–Zassenhaus theorem](https://en.wikipedia.org/wiki/Schur%E2%80%93Zassenhaus_theorem), [Hall subgroup](https://en.wikipedia.org/wiki/Hall_subgroup). It says: “If we do not impose the coprime condition, the theorem is not true: consider for example the cyclic group C₄ and its normal subgroup C₂.”

**Sources:** none listed. No primary source with a working link was found.

### Setting Φ(G) = G without maximal subgroups keeps Φ the non-generators

**Remember:** An empty intersection of subgroups is the whole group.

*Rules out counterexamples.* MSC 20D25 (Special subgroups (Frattini, Fitting, etc.)), 20E28. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The Frattini subgroup Φ(G) is the intersection of all maximal subgroups of G. If G has no maximal subgroups, the convention is Φ(G) = G. A non-generator is an element that can be removed from every generating set that contains it.

**Problem.** For every group G, Φ(G) is exactly the set of non-generators.

**How the definition helps.** The convention is the usual rule that an empty intersection is everything, and it keeps the non-generator description true with no exception. In our own example, the Prüfer p-group has only finite proper subgroups, so it has no maximal subgroup. Every generating set of it is infinite, and removing one element leaves an infinite set that still generates the whole group (our own). So every element is a non-generator, and Φ(G) = G is the right answer.

**Wikipedia:** [Frattini subgroup](https://en.wikipedia.org/wiki/Frattini_subgroup). It says: “For the case that G has no maximal subgroups, for example the trivial group {e} or a Prüfer group, it is defined by Φ(G)=G.”

**Sources:** none listed. No primary source with a working link was found.

### Defining abelianization by its maps out makes abelianized free groups free abelian

**Remember:** Two steps defined by maps out compose to one such step.

*True by definition.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the abelianization of G as an abelian group Gᵃᵇ with a homomorphism from G. Every homomorphism from G to an abelian group must factor through it in exactly one way. The usual construction divides G by its commutator subgroup, the subgroup generated by the elements xyx⁻¹y⁻¹.

**Problem.** Let F be the free group on a set X. Then the abelianization of F is the free abelian group on X.

**How the definition helps.** Both free groups and abelianizations are defined by maps out, so their composite is too. A function from X to an abelian group A extends uniquely to a homomorphism from F, which then factors uniquely through the abelianization (our own). So homomorphisms from the abelianization to A match functions from X to A, which is the definition of free abelian on X (our own). The work moves to showing that the commutator quotient has this mapping property.

**Paper or page:** [Abelianization of Free Group is Free Abelian Group](https://proofwiki.org/wiki/Abelianization_of_Free_Group_is_Free_Abelian_Group). It says: “is a free abelian group on X.”

**Sources:** none listed. No primary source with a working link was found.

### Defining free groups by maps out lets homomorphism counts fix the rank

**Remember:** A basis of size n gives exactly 2ⁿ maps to the two-element group.

*True by definition. Confidence: medium.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define a free basis S of a group F by its maps out. Every function from S to a group must extend to exactly one homomorphism from F. The word definition asks that each element of F be exactly one reduced word in S, with no letter next to its inverse.

**Problem.** Any two free bases of the same free group have the same size.

**How the definition helps.** The definition counts homomorphisms out of F at once. A homomorphism from F to ℤ/2 is any function from S to ℤ/2, so a basis of n elements gives exactly 2ⁿ of them, a number that depends only on F (our own count). If one basis is infinite, so is the other, and counting the elements of F finishes the proof (our own). The work moves to proving that reduced words have the extension property.

**Wikipedia:** [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “That is, homomorphisms F<sub>S</sub>→G are in one-to-one correspondence with functions S→G.”

**Sources:** none listed. No primary source with a working link was found.

### Defining free groups by their maps out makes surjections onto them split

**Remember:** Pick a preimage for each generator, and the definition builds the splitting.

*True by definition. Confidence: medium.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the free group F(S) on a set S by a map from S into it. Every function from S to a group must extend to exactly one homomorphism from F(S). The concrete model uses reduced words, strings of letters and inverse letters with no letter next to its own inverse.

**Problem.** Every surjective homomorphism p from a group G onto a free group F(S) has a homomorphism s back with p∘s the identity.

**How the definition helps.** The definition says that a homomorphism out of F(S) is only a choice of images for the generators. So choose a preimage in G of each generator and extend this choice to a homomorphism s (our own). Then p∘s fixes every generator, and uniqueness in the definition makes p∘s the identity (our own). The work moves to proving that reduced words form a group with this extension property.

**nLab:** [free group](https://ncatlab.org/nlab/show/free+group). It says: “The free group on a given set S is the free object on S in the category of groups.”

**Sources:** none listed. No primary source with a working link was found.

### Free groupoids prove Nielsen–Schreier without covering spaces

**Remember:** Do covering-space theory with groupoids, and the topology drops out.

*Makes the theorem clean to state or prove.* MSC 20E05 (Free nonabelian groups), 18B40. arXiv math.GR, math.AT. Level 2: later undergraduate.

**Definition.** A groupoid is a category in which every morphism is invertible. The free groupoid on a directed graph is generated by its edges with no relations. The free group F(S) is the vertex group of the free groupoid on a bouquet of S loops.

**Problem.** The Nielsen–Schreier theorem says that every subgroup H of a free group is free. If H has index n and the free group has rank k, then H has rank nk − n + 1.

**How the definition helps.** The groupoid version replaces covering spaces of graphs and their point-set topology with a short algebraic argument. The quotient of the universal cover groupoid F(S)//F(S) by H is again a free groupoid, on the quotient of the Cayley graph by H. A connected free groupoid has a free vertex group, so H is free. Our own remark: this last fact still needs a maximal tree, chosen with Zorn's lemma.

**nLab:** [Nielsen-Schreier theorem](https://ncatlab.org/nlab/show/Nielsen-Schreier+theorem). It says: “The second proof is quite similar in spirit but is based on groupoids (another way of viewing homotopy 1-types), and has the advantage that it circumvents the point-set topology considerations inherent to covering space theory.”

**Sources:**

- [Otto Schreier, Die Untergruppen der freien Gruppen, Abh. Math. Semin. Univ. Hamburg 5 (1927) 161–183](https://doi.org/10.1007/BF02952517)
- [P. J. Higgins, Categories and groupoids, reprint of the 1971 original, Reprints in Theory and Applications of Categories 7 (2005)](http://www.tac.mta.ca/tac/reprints/articles/7/tr7abs.html)

### Reduced words make equality in free groups a string comparison

**Remember:** Reduced words are equal exactly when their letters match.

*True by definition.* MSC 20E05 (Free nonabelian groups), 20F10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A reduced word has no letter adjacent to its formal inverse. Define the free group on a set S as the set of reduced words in S and its formal inverses. Multiply by joining words and cancelling adjacent inverse pairs. The other construction identifies words by the group relations and then proves that each class has a unique reduced word.

**Problem.** Two words in the generators and their inverses represent the same free group element exactly when they reduce to the same word.

**How the definition helps.** Defining the elements as reduced words makes equality a direct comparison of letters. To compare two input words, cancel adjacent inverse pairs in each and compare the results. Our own account of the work is that cancellations must give the same result in any order. One must also prove that the resulting product is associative and that every assignment of the generators extends uniquely to a group homomorphism.

**Wikipedia:** [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “The free group Fₛ is defined to be the group of all reduced words in S, with concatenation of words (followed by reduction if necessary) as group operation.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of free groups gives every group a presentation

**Remember:** Send the generators anywhere; the relations say what must die.

*True by definition.* MSC 20E05 (Free nonabelian groups), 20F05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The free group F(S) on a set S has this universal property. Every function from S to a group G extends to a unique homomorphism from F(S) to G. A presentation ⟨S \| R⟩ is the quotient of F(S) by the smallest normal subgroup that contains the words in R.

**Problem.** Every group has a presentation. Von Dyck: a map from S to G gives a homomorphism from ⟨S \| R⟩ exactly when it sends every word in R to 1.

**How the definition helps.** Both facts follow almost at once from the universal property and the definition as a quotient. Take S to be the set G itself, and extend the identity function to a surjection from F(G) onto G with kernel K, so G is isomorphic to ⟨G \| K⟩. For von Dyck's theorem, the homomorphism from F(S) kills R, so it kills the normal subgroup that R generates and factors through the quotient (our own). The work moves to showing that free groups exist, for example as reduced words.

**Wikipedia:** [Presentation of a group](https://en.wikipedia.org/wiki/Presentation_of_a_group), [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “Formally, the group G is said to have the above presentation if it is isomorphic to the quotient of a free group on S by the normal subgroup generated by the relations R.”

**Sources:**

- [W. Dyck, Gruppentheoretische Studien, Mathematische Annalen 20 (1882) 1–44](https://doi.org/10.1007/BF01443322)

### Defining free products by maps out makes each factor an embedded retract

**Remember:** Send the other factors to the identity to get the chosen factor back.

*True by definition. Confidence: medium.* MSC 20E06 (Free products of groups, free products with amalgamation, Higman-Neumann-Neumann extensions, and generalizations). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the free product of groups Gᵢ as a group with a homomorphism from each Gᵢ. Any family of homomorphisms from the Gᵢ into one group H must extend to exactly one homomorphism from the free product. The concrete model uses reduced words, whose letters are not the identity and come from different factors in turn.

**Problem.** Each factor Gⱼ maps injectively into the free product. There is also a homomorphism back onto Gⱼ whose composite with this map is the identity on Gⱼ.

**How the definition helps.** The definition builds the map back from one choice of homomorphism per factor. Take the identity on Gⱼ and the trivial map on every other factor; these extend to a homomorphism r onto Gⱼ that fixes Gⱼ (our own). So the map from Gⱼ is injective, because it has a left inverse (our own). In the word model, injectivity instead needs the normal form theorem.

**nLab:** [free product of groups](https://ncatlab.org/nlab/show/free+product+of+groups). It says: “is universal with this property”

**Sources:** none listed. No primary source with a working link was found.

### Finitely generated residually finite groups never map onto themselves with a kernel

**Remember:** A finite quotient catches each element that a self-surjection tries to kill.

*True by definition. Confidence: medium.* MSC 20E26 (Residual properties and generalizations; residually finite groups), 20E36. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A group is residually finite if every element other than the identity has a nonidentity image in some finite quotient. A group has the Hopf property if every surjective homomorphism from the group to itself is an isomorphism.

**Problem.** Every finitely generated residually finite group has the Hopf property.

**How the definition helps.** Residual finiteness gives a finite test for each nontrivial element, so a nontrivial kernel element would be caught (our own). For a finite group F, there are only finitely many homomorphisms from the finitely generated group Γ to F. Precomposition with the surjection φ is injective on this finite set, so it is onto, and every homomorphism to F kills the kernel of φ (our own). Residual finiteness then forces the kernel to be trivial.

**Paper or page:** [Chasing finite shadows of infinite groups through geometry](https://arxiv.org/abs/2504.11684v1). It says: “If a finitely generated group Γ is residually finite, then it has the Hopf property, i.e. every epimorphism φ∶Γ→Γ is an isomorphism.”

**Sources:**

- [Martin R. Bridson, Chasing finite shadows of infinite groups through geometry, arXiv:2504.11684v1 (2025)](https://arxiv.org/abs/2504.11684v1)

### Defining presented groups by maps out shows defined generators change nothing

**Remember:** An extra generator defined by an old word gives no new choices.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the group ⟨S \| R⟩ by its homomorphisms out. A homomorphism to a group H is a function from S to H that sends each relator in R to the identity. A relator is a word that is required to equal the identity. The concrete construction divides the free group on S by the smallest normal subgroup containing R.

**Problem.** Add a new generator y and a new relation y = w, where w is a word in the old generators. The new presentation defines the same group.

**How the definition helps.** With this definition, it is enough to compare the maps out of the two presentations. Each valid assignment of the old generators allows exactly one image for y, namely the image of w (our own). So the valid assignments match for every target group, and the Yoneda lemma makes the groups isomorphic (our own). The work moves to proving that the free group quotient has this mapping property.

**Wikipedia:** [Tietze transformations](https://en.wikipedia.org/wiki/Tietze_transformations). It says: “Given a presentation it is possible to add a new generator that is expressed as a word in the original generators.”

**Sources:**

- [Heinrich Tietze, Über die topologischen Invarianten mehrdimensionaler Mannigfaltigkeiten (1908).](https://doi.org/10.1007/bf01736688)

### Defining presented groups by maps out shows joined presentations give free products

**Remember:** Separate relations on separate generators impose no rule between the factors.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 20E06. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the group ⟨S \| R⟩ by its homomorphisms out. A homomorphism to a group H is a function from S to H that sends every relator in R to the identity. A relator is a word required to equal the identity. The concrete construction divides the free group on S by the smallest normal subgroup containing R.

**Problem.** Let each group Gᵢ have a presentation ⟨Sᵢ \| Rᵢ⟩. Then the disjoint union of the Sᵢ and of the Rᵢ presents the free product of the Gᵢ.

**How the definition helps.** Both sides are defined by maps out, so it is enough to match their maps to any group H. A function on the disjoint union of the Sᵢ is one function on each Sᵢ, and it kills all relators exactly when each part kills its own Rᵢ (our own). So it is one homomorphism from each Gᵢ, which is one homomorphism from the free product (our own). The work moves to showing that the free group quotient has this mapping property.

**nLab:** [free product of groups](https://ncatlab.org/nlab/show/free+product+of+groups). It says: “If all the Gᵢ have group presentations, then their free product ⋆ᵢ Gᵢ has a group presentation as follows:”

**Sources:** none listed. No primary source with a working link was found.

### Defining solvable groups as stacked abelian extensions makes extensions stay solvable

**Remember:** Solvable groups are stacks of abelian layers, so two stacks make one stack.

*True by definition.* MSC 20F16 (Solvable groups, supersolvable groups), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the solvable groups as the smallest class of groups that contains all abelian groups and is closed under extensions. G is an extension of Q by N when N is a normal subgroup of G and G/N is isomorphic to Q. The usual definition asks that the derived series reach the identity. This series takes the commutator subgroup, generated by the elements xyx⁻¹y⁻¹, again and again.

**Problem.** Let N be a normal subgroup of G. If N and G/N are solvable, then G is solvable.

**How the definition helps.** With this definition the theorem is one of the closure rules, so it holds by definition. The work moves to showing that this class equals the usual one, defined by the derived series (our own summary). If the derived series of G/N ends after k steps, the k-th term of the series of G lies in N, and the series of N finishes the job. Conversely, a group with a finite derived series is built from its abelian layers by extensions.

**nLab:** [solvable group](https://ncatlab.org/nlab/show/solvable+group). It says: “If 1 → G′ → G → G″ → 1 is a group extension and both G′ and G″ are solvable, then G is solvable.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal subgroups of finite supersolvable groups have prime index

**Remember:** Prime-order normal factors force maximal subgroups to have prime index.

*Rules out counterexamples.* MSC 20F16 (Solvable groups, supersolvable groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A finite group is supersolvable if it has a chain from the identity subgroup to the whole group with prime-order quotients. Every subgroup in the chain must be normal in the whole group.

**Problem.** Every maximal proper subgroup of a finite supersolvable group has prime index.

**How the definition helps.** Supersolvability gives a normal subgroup N of prime order, and N either lies in a maximal subgroup H or meets it trivially (our own proof). If N lies in H, use induction in the quotient by N. Otherwise HN is the whole group and H meets N trivially, so the index of H equals the prime order of N. In our own counterexample, the solvable group A₄ has a maximal subgroup of order three and index four.

**Wikipedia:** [Supersolvable group](https://en.wikipedia.org/wiki/Supersolvable_group). It says: “Every maximal subgroup in a supersolvable group has prime index.”

**Sources:** none listed. No primary source with a working link was found.

### Solvable groups match equations that radicals can solve

**Remember:** A solvable group is built from abelian pieces, one radical at a time.

*Makes the theorem clean to state or prove.* MSC 20F16 (Solvable groups, supersolvable groups), 12F10. arXiv math.GR, math.AC. Level 2: later undergraduate.

**Definition.** A group G is solvable if it has a chain of subgroups 1 = G₀ ◁ G₁ ◁ … ◁ Gₙ = G. Here each Gᵢ is a normal subgroup of the next one. Each quotient Gᵢ₊₁/Gᵢ must be abelian.

**Problem.** Over a field of characteristic 0, a polynomial equation is solvable by radicals if and only if its Galois group is solvable. Solvable by radicals means that we can write the roots with field operations and n-th roots.

**How the definition helps.** The definition of a solvable group records exactly the shape that radicals give, so Galois's criterion has a clean statement. In our own summary, after adding the roots of unity, each radical gives an extension with cyclic Galois group. So a tower of radicals gives a chain of groups with abelian quotients. The insolvability of the general quintic then reduces to the fact that S₅ is not solvable, because A₅ is simple and not abelian.

**Wikipedia:** [Solvable group](https://en.wikipedia.org/wiki/Solvable_group). It says: “Historically, the word "solvable" arose from Galois theory and the proof of the general unsolvability of quintic equations.”

**Sources:**

- [J. S. Milne, Fields and Galois Theory, course notes (2022), p. 45](https://www.jmilne.org/math/CourseNotes/FT.pdf)

### Defining nilpotent groups as iterated central extensions makes central extensions stay nilpotent

**Remember:** A central kernel adds at most one step to nilpotency.

*True by definition.* MSC 20F18 (Nilpotent groups), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the nilpotent groups as those built from the trivial group by finitely many central extensions. An extension G of Q by N is central when N lies in the center of G, so N commutes with every element of G. The usual definition asks that the lower central series reach the identity. This series repeatedly takes commutators with the whole group.

**Problem.** Let G be a central extension of a nilpotent group Q. Then G is nilpotent. Its nilpotency class, the least number of steps needed, is at most one more than that of Q.

**How the definition helps.** With this definition the theorem holds by definition, since G adds one more central extension, and so does the bound on the class. The work moves to a comparison with the usual definition (our own summary). A chain of central extensions gives a central series, and the lower central series descends at least as fast as any central series. So both definitions give the same groups and the same class.

**nLab:** [nilpotent group](https://ncatlab.org/nlab/show/nilpotent+group). It says: “If 1 → G′ → G → G″ → 1 is a central extension (so that in particular, G′ is abelian) and G″ is nilpotent, then G is nilpotent.”

**Sources:** none listed. No primary source with a working link was found.

### Nilpotence makes normalizers grow

**Remember:** In a nilpotent group, normalizers of proper subgroups grow.

*Rules out counterexamples.* MSC 20F18 (Nilpotent groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Start with the identity subgroup. At each step take the inverse image of the center of the quotient by the current subgroup. A group is nilpotent if this process reaches the whole group in finitely many steps.

**Problem.** Every proper subgroup H of a finite nilpotent group is strictly contained in its normalizer. The normalizer consists of the elements whose conjugation preserves H.

**How the definition helps.** The first central layer outside H supplies an element that normalizes H, in our own proof. Choose g outside H in that layer. For each h in H, the commutator ghg⁻¹h⁻¹ lies in the preceding layer, hence in H. The same holds for g⁻¹, so conjugation by g preserves H. In our own example, only the identity and (12) normalize the subgroup generated by (12) in the solvable group S₃.

**Wikipedia:** [Nilpotent group](https://en.wikipedia.org/wiki/Nilpotent_group). It says: “This is called the normalizer property and can be phrased simply as "normalizers grow".”

**Sources:** none listed. No primary source with a working link was found.

### Artin’s presentation gives braid groups infinite cyclic abelianization

**Remember:** Once generators commute, the braid relation identifies neighboring generators.

*True by definition.* MSC 20F36 (Braid groups; Artin groups). arXiv math.GR, math.GT. Level 2: later undergraduate.

**Definition.** The Artin presentation for Bₙ has generators σ₁ through σₙ₋₁, each a crossing of adjacent strands. Nonadjacent generators commute. Adjacent generators satisfy σᵢσᵢ₊₁σᵢ = σᵢ₊₁σᵢσᵢ₊₁. The geometric definition instead uses strands that can move without intersecting while their ends stay fixed.

**Problem.** For n ≥ 2, the abelianization of Bₙ is ℤ. The quotient makes all braids commute and sends each σᵢ to 1.

**How the definition helps.** Artin's presentation makes abelianization a matter of adding commutativity to the given relations (our own). In additive notation the adjacent relation becomes 2σᵢ + σᵢ₊₁ = σᵢ + 2σᵢ₊₁, so the two generators agree (our own). One generator remains, and the map to ℤ that sends it to 1 shows it has infinite order. The work shifts to Artin's theorem that the presentation describes geometric braids (our own).

**Wikipedia:** [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “There is a homomorphism Bₙ → ℤ defined by σᵢ ↦ 1.”

**Sources:**

- [Emil Artin, Theory of Braids, Annals of Mathematics (1947)](https://doi.org/10.2307/1969218)

### Defining the Weyl sign as a determinant makes length parity multiplicative

**Remember:** Each reflection contributes one minus sign to the determinant.

*True by definition. Confidence: medium.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Let W be a finite Weyl group, the group generated by the reflections in the roots of a root system. Define the sign of an element as its determinant. The other definition is −1 raised to the length ℓ(w), the fewest simple reflections whose product is w.

**Problem.** The map sending w to −1 raised to the length ℓ(w) is a group homomorphism from the Weyl group to {±1}.

**How the definition helps.** The determinant of a product is the product of the determinants, so the determinant sign is a homomorphism (our own). The work moves to showing that the two signs agree (our own). Each simple reflection has determinant −1, so every word for w has length of the same parity as ℓ(w). The route through the Coxeter presentation is also short, but it needs the theorem that Weyl groups have that presentation (our own comparison).

**Wikipedia:** [Coxeter group](https://en.wikipedia.org/wiki/Coxeter_group). It says: “the minimum number of uses of generators required to express a group element”

**Sources:** none listed. No primary source with a working link was found.

### Requiring identity preservation makes monoid homomorphisms preserve invertibility

**Remember:** Preserving the identity preserves the equations that define an inverse.

*Rules out counterexamples.* MSC 20M10 (General structure theory for semigroups), 08A05. arXiv math.RA, math.GR. Level 2: later undergraduate.

**Definition.** A monoid is a set with an associative product and an identity element. Its homomorphisms preserve the product and the identity. The weaker definition of a semigroup homomorphism requires only preservation of products.

**Problem.** A monoid homomorphism sends invertible elements to invertible elements, giving a map of their groups of units. A map that only preserves products need not do so.

**How the definition helps.** The identity requirement preserves the two inverse equations, so it makes the inverse of the image the image of the inverse. Our own counterexample is the constant map to 0 on {0, 1} under multiplication. It preserves products but sends the invertible element 1 to 0, which is not invertible.

**Wikipedia:** [Monoid](https://en.wikipedia.org/wiki/Monoid). It says: “Not every semigroup homomorphism between monoids is a monoid homomorphism, since it may not map the identity to the identity of the target monoid, even though the identity is the identity of the image of the homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Defining group completion by pairs makes embedding equivalent to cancellation

**Remember:** The extra summand k records exactly what cancellation would remove.

*True by definition. Confidence: medium.* MSC 20M14 (Commutative semigroups), 19A99. arXiv math.GR, math.KT. Level 2: later undergraduate.

**Definition.** A commutative monoid is a set with an associative, commutative addition and a zero. Its group completion consists of pairs (a, b), thought of as a − b. Two pairs (a, b) and (c, d) are equal when a + d + k = b + c + k for some k. The other definition is the free abelian group on the monoid, modulo the relations \[a + b\] = \[a\] + \[b\].

**Problem.** A commutative monoid M maps to its group completion by a ↦ (a, 0). This map is injective exactly when M has cancellation, that is, a + k = b + k implies a = b.

**How the definition helps.** With pairs, (a, 0) equals (b, 0) exactly when a + k = b + k for some k, so injectivity is cancellation (our own). In the presentation by generators and relations, it is hard to see which elements become equal (our own). The work moves to two checks (our own). The pair relation must be an equivalence relation, which needs the extra k, and the pair group must have the universal property of the presentation.

**Wikipedia:** [Grothendieck group](https://en.wikipedia.org/wiki/Grothendieck_group). It says: “For a commutative monoid M, the map i : M → K is injective if and only if M has the cancellation property”

**Sources:** none listed. No primary source with a working link was found.

### Heaps must be inhabited to have a structure group

**Remember:** A heap is a group that forgot its unit, but it still has an element.

*Rules out counterexamples.* MSC 20N10 (Ternary systems (heaps, semiheaps, heapoids, etc.)), 20J15. arXiv math.GR, math.CT. Level 2: later undergraduate.

**Definition.** A heap is an inhabited set H (a set with at least one element) with a ternary operation t(a, b, c), thought of as a b⁻¹ c. It satisfies t(b, b, c) = c = t(c, b, b) and an associativity law. Likewise, a G-torsor is an inhabited set with a free and transitive action of the group G. Without the inhabited condition, it is a pseudo-torsor.

**Problem.** Every heap is a torsor for a group, its structure group. Also, the category of heaps is equivalent to the category of pairs (G, H) of a group G and a G-torsor H.

**How the definition helps.** The inhabited condition removes the one heap that has no structure group. The empty set carries a unique heap structure, but a group needs a unit element, and the empty heap gives no element to use. Allowing it would make heaps an algebraic category, defined only by operations and equations, but some theorems relating heaps to groups would break down. The nLab also shows the other repair: allow an 'empty group', an invertible semigroup or associative quasigroup, and the correspondence then holds for all heaps.

**nLab:** [heap](https://ncatlab.org/nlab/show/heap), [torsor](https://ncatlab.org/nlab/show/torsor). It says: “However, in this case, some of the above theorems relating heaps to groups break down.”

**Sources:**

- [Thomas Booker, Ross Street, Torsors, herds and flocks, Journal of Algebra 330 (2011) 346–374, arXiv:0912.4551](https://arxiv.org/abs/0912.4551)
- [Peter T. Johnstone, The 'closed subgroup theorem' for localic herds and pregroupoids, Journal of Pure and Applied Algebra 70 (1991) 97–106](https://doi.org/10.1016/0022-4049(91)90010-y)

### Subgroup marks determine finite actions

**Remember:** Count fixed points subgroup by subgroup to recover the orbits.

*True by definition.* MSC 20B05 (General theory for finite permutation groups), 19A22. arXiv math.GR. Level 3: graduate.

**Definition.** The mark of a subgroup H on a finite group action counts points fixed by all of H. Use all subgroup marks rather than only the fixed-point counts of individual elements.

**Problem.** Two finite sets with an action of a finite group G are isomorphic as G-sets if all their marks agree.

**How the definition helps.** Counting points fixed by whole subgroups lets us recover orbit counts one subgroup at a time. Every orbit is a coset space G/K, where K fixes a chosen point. A subgroup H fixes a coset only if some conjugate of H lies in K. Start with the largest stabilizers and subtract the contributions of orbit types already counted (our own). Among the remaining types, only G/H contributes to the H count, and H fixes at least the identity coset (our own).

**nLab:** [table of marks](https://ncatlab.org/nlab/show/table+of+marks). It says: “Hence any two finite G-sets are isomorphic precisely if they have the same Burnside marks”

**Wikipedia:** [Burnside ring](https://en.wikipedia.org/wiki/Burnside_ring). It says: “if H is not conjugate to a subgroup of K then m(K, H) = 0.”

**Sources:**

- [L. Solomon, The Burnside algebra of a finite group, 1967](https://doi.org/10.1016/S0021-9800(67)80064-4)

### Mackey functors defined on spans have the double coset formula built in

**Remember:** A Mackey functor is a functor on spans; composing spans is the double coset formula.

*True by definition. Confidence: medium.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 18B10, 55N91. arXiv math.RT, math.AT. Level 3: graduate.

**Definition.** For a finite group G, a span of finite G-sets is a pair of maps A ← U → B. The Burnside category has finite G-sets as objects and spans as morphisms. A Mackey functor is a functor from the Burnside category to an additive category that preserves products. A span G/H ← U → G/K encodes a restriction followed by a transfer.

**Problem.** In a Mackey functor, for subgroups J and K of H, restriction from H to J of a transfer from K to H equals a sum over the double cosets JxK in H. Each term is a transfer after a restriction.

**How the definition helps.** With this definition the formula comes from composing spans, so it is not an axiom to check, as it is in Dress's original definition. Spans compose by a pullback of finite G-sets (our own explanation, which the nLab does not spell out). The pullback of G/J → G/H ← G/K splits into orbits, one for each double coset in J∖H/K (our own). The work moves to the nLab's statement that a product-preserving functor on spans breaks down into restrictions and transfers.

**nLab:** [Mackey functor](https://ncatlab.org/nlab/show/Mackey+functor). It says: “writing Rᴴⱼ for the contravariant effect of in inclusion J ⊂ H and Iᴴⱼ for the covariant effect, M satisfies the double coset formula”

**Sources:**

- [H. Lindner, A remark on Mackey-functors, Manuscripta Mathematica 18 (1976) 273–278](https://doi.org/10.1007/BF01245921)
- [C. Barwick, Spectral Mackey functors and equivariant algebraic K-theory (I), Advances in Mathematics 304 (2017) 646–727, arXiv:1404.0108](https://arxiv.org/abs/1404.0108)
- [B. Guillou, J. P. May, Models of G-spectra as presheaves of spectra, arXiv:1110.3571 (2011)](https://arxiv.org/abs/1110.3571)

### Defining Temperley–Lieb algebras by planar diagrams makes their dimension Catalan

**Remember:** Count the planar pairings to get the dimension.

*True by definition.* MSC 20C08 (Hecke algebras and their representations), 05A15. arXiv math.QA, math.CO. Level 3: graduate.

**Definition.** Define TLₙ(δ) as the vector space with a basis of noncrossing pairings of 2n points, n on each of two opposite sides of a rectangle. Multiply two pairings by stacking rectangles and replacing each closed loop by the scalar δ. The generator presentation instead uses e₁, …, eₙ₋₁ with eᵢ² = δeᵢ and local relations between neighbouring generators.

**Problem.** The Temperley–Lieb algebra TLₙ(δ) has dimension equal to the nth Catalan number (2n)!/(n!(n + 1)!).

**How the definition helps.** In the diagram definition, the dimension is the number of basis diagrams (our own). Noncrossing pairings of 2n points satisfy the Catalan recurrence, found by splitting at the partner of the first point (our own). The work moves into the theorem that the diagram algebra has the generator presentation. That theorem shows that the generators span all diagrams and that no further relations hold.

**Wikipedia:** [Temperley–Lieb algebra](https://en.wikipedia.org/wiki/Temperley%E2%80%93Lieb_algebra). It says: “the vector space over noncrossing pairings of 2n points on two opposite sides of a rectangle”

**Sources:**

- [Presentations for Temperley-Lieb algebras](https://arxiv.org/abs/2101.02862v2)

### Endomorphisms make Hecke algebra multiplication associative

**Remember:** Composition gives associative multiplication before any convolution calculation.

*True by definition. Confidence: medium.* MSC 20C08 (Hecke algebras and their representations). arXiv math.RT. Level 3: graduate.

**Definition.** Let K be a subgroup of a finite group G. The permutation module k\[G/K\] has the left cosets of K as a basis, with G acting by permutation. Define its Hecke algebra as the algebra of G-equivariant self-maps under composition. The convolution model instead uses functions constant on double cosets KgK, with multiplication defined by a sum over cosets.

**Problem.** The Hecke algebra is an associative unital algebra over k. It has a basis indexed by the double cosets KgK.

**How the definition helps.** The self-map definition makes associativity and the unit automatic because it uses composition (our own). In the function model one instead expands the two iterated convolution sums (our own). The comparison sends a function F to the operator with matrix entry F(x⁻¹y) at cosets xK and yK (our own). Equivariance says precisely that an entry depends only on the double coset Kx⁻¹yK (our own).

**nLab:** [Hecke algebra](https://ncatlab.org/nlab/show/Hecke+algebra). It says: “Typically the term refers to an algebra which is the endomorphisms of a permutation representation of a topological group”

**Wikipedia:** [Hecke algebra of a pair](https://en.wikipedia.org/wiki/Hecke_algebra_of_a_pair). It says: “When G is a finite group and K is any subgroup of G, then the Hecke algebra is spanned by double cosets of K\\G/K.”

**Sources:** none listed. No primary source with a working link was found.

### Hecke algebra commutativity detects repeated representations

**Remember:** A repeated irreducible representation gives a noncommutative matrix block.

*True by definition.* MSC 20C08 (Hecke algebras and their representations), 20C15. arXiv math.RT. Level 3: graduate.

**Definition.** Let K be a subgroup of a finite group G. The space ℂ\[G/K\] has basis the left cosets of K, which G permutes. Define the Hecke algebra as the linear self-maps of this space that commute with G, with composition as multiplication. The other definition uses convolution, a product of functions constant on each double coset KgK.

**Problem.** The Hecke algebra is commutative exactly when each irreducible representation occurs at most once in ℂ\[G/K\]. This is the criterion for a Gelfand pair.

**How the definition helps.** The self-map definition makes commutativity a test on the sizes of matrix blocks (our own). By Maschke's theorem and Schur's lemma, m copies of one irreducible representation in ℂ\[G/K\] give a full m × m matrix block of self-maps (our own). Such a block is commutative exactly when m = 1 (our own). For the convolution definition, the extra work is identifying the product of functions with composition of these maps (our own).

**Wikipedia:** [Gelfand pair](https://en.wikipedia.org/wiki/Gelfand_pair). It says: “The centralizer algebra (Schur algebra) of the permutation representation is commutative.”

**Sources:** none listed. No primary source with a working link was found.

### Central characters make normalized class values algebraic integers

**Remember:** A central character preserves monic polynomial equations over the integers.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** For an irreducible complex representation V, each central element of ℂ\[G\] acts as a scalar by Schur’s lemma. These scalars give a ring map from the centre to ℂ, called the central character. For x in G, apply that map to the sum of the h elements conjugate to x, rather than taking the trace of x directly.

**Problem.** Let G be a finite group, V an irreducible complex representation and χ its character. For x in G with h conjugates, h·χ(x)/χ(1) is an algebraic integer, a root of a monic polynomial with integer coefficients.

**How the definition helps.** As a central character value, the number is the image of an integral element under a ring map (our own). Multiplication by a class sum is an integer matrix on the class sums, so its characteristic polynomial annihilates the class sum (our own). Taking traces of the scalar action identifies the image with h·χ(x)/χ(1) (our own). Ordinary character values are sums of roots of unity, but that alone does not justify dividing by χ(1) (our own).

**Wikipedia:** [Character theory](https://en.wikipedia.org/wiki/Character_theory). It says: “If F = ℂ and χ is irreducible, then \[G:C<sub>G</sub>(x)\]\\frac{\\chi(x)}{\\chi(1)} is an algebraic integer for all x in G.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicity-free restriction passes upward

**Remember:** More conjugation symmetries leave fewer sums to test for commutativity.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 43A90. arXiv math.RT. Level 3: graduate.

**Definition.** For a subgroup H of a finite group G, take the formal complex sums of group elements unchanged by conjugation by H. Multiply sums by extending group multiplication linearly. One definition calls (G,H) a strong Gelfand pair if these sums commute. Equivalently, each irreducible complex representation of G splits over H into distinct irreducibles, meaning components with no proper nonzero invariant subspace.

**Problem.** If a finite group forms a strong Gelfand pair with a subgroup, it also does so with each intermediate subgroup.

**How the definition helps.** A larger subgroup imposes more conjugation symmetries, so its invariant sums form a subalgebra of the original commutative algebra (our own). They therefore still commute (our own). The matrix decomposition of the group algebra and Schur’s lemma identify commutativity with the absence of repeated components (our own).

**Paper or page:** [Strong Gelfand pairs of the sporadic groups and their extensions](https://arxiv.org/abs/2510.25790). It says: “Suppose K ≤ H ≤ G are groups. If (G, H) is not a strong Gelfand pair, then neither is (G, K).”

**Sources:** none listed. No primary source with a working link was found.

### Strong Gelfand pairs survive quotients

**Remember:** Passing to the quotient cannot create a repeated summand.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 43A90. arXiv math.RT. Level 3: graduate.

**Definition.** Let H be a subgroup of a finite group G. Call (G,H) a strong Gelfand pair if restricting any irreducible complex representation of G to H gives distinct irreducible summands. An irreducible representation has no proper nonzero invariant subspace. An equivalent definition asks whether convolution commutes for functions unchanged by conjugation by H.

**Problem.** A strong Gelfand pair remains strong after quotienting both groups by a common normal subgroup of the larger group.

**How the definition helps.** Our own explanation uses restriction to read the quotient multiplicities without calculating convolutions. Every quotient representation gives a representation upstairs by composition with the quotient map. Both actions have exactly the same invariant subspaces, even after restriction to the smaller group. The equivalence with the convolution definition uses the decomposition of the group algebra into matrix blocks.

**Paper or page:** [Almost Commutative Terwilliger Algebras II: Strong Gelfand Pairs](https://arxiv.org/abs/2509.16174). It says: “Suppose N ≤ H ≤ G with N ◁ G. If (G,H) is a SGP, then (G/N,H/N) is a SGP.”

**Sources:** none listed. No primary source with a working link was found.

### Virtual representations let Brauer write every representation from one-dimensional ones

**Remember:** Allow subtraction, and induced lines generate every representation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** A virtual representation is a formal difference of two representations. The virtual representations of G form the representation ring, with sum given by direct sum and product by tensor product. An induced representation is built from a representation of a subgroup H, with one copy for each coset of H.

**Problem.** Over the complex numbers, every representation of a finite group G is an integer combination of representations induced from one-dimensional representations of subgroups. The integers may be negative.

**How the definition helps.** Allowing negative coefficients is what makes the statement true (our own). An irreducible representation that is not induced from a line needs a negative coefficient, for example a two-dimensional one of SL(2, 3) (our own). In the representation ring the question becomes whether certain classes generate the ring, which is a question about characters. The hard part remains the proof through elementary subgroups, products of a p-group and a cyclic group.

**nLab:** [Brauer induction theorem](https://ncatlab.org/nlab/show/Brauer+induction+theorem). It says: “finite-dimensional linear representations V of a finite group G all arise as virtual combinations of induced representations … of just 1-dimensional representations”

**Sources:**

- [Brauer, R. (1947). On Artin's L-series with general group characters. Annals of Mathematics 48.](https://doi.org/10.2307/1969183)

### Brauer characters lift eigenvalues to complex numbers in characteristic p

**Remember:** Replace each eigenvalue by its complex twin, then add.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C20 (Modular representations and characters). arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** Let K be an algebraically closed field of characteristic p and G a finite group. Fix a matching between roots of unity in K and complex roots of unity of order prime to p. The Brauer character of a representation over K sends each element of order prime to p to the sum of the matching complex eigenvalues.

**Problem.** The Brauer character of a representation determines its composition factors, the simple modules in a composition series. Restricted to elements of order prime to p, each ordinary irreducible character is a unique nonnegative integer combination of irreducible Brauer characters.

**How the definition helps.** The ordinary trace in characteristic p loses information, because it only records a sum in K. For example, p copies of the trivial representation have trace p = 0, the same as the zero representation (our own). The Brauer character keeps the eigenvalues as complex numbers, so the methods of complex characters work again. It fixes composition factors, not the isomorphism class.

**Wikipedia:** [Modular representation theory](https://en.wikipedia.org/wiki/Modular_representation_theory). It says: “the Brauer character of a representation assigns to each group element of order coprime to p the sum of complex roots of unity corresponding to the eigenvalues (including multiplicities) of that element in the given representation.”

**Sources:**

- [Brauer, R., Nesbitt, C. (1941). On the modular characters of groups. Annals of Mathematics 42.](https://doi.org/10.2307/1968918)

### Projective representations become ordinary ones on a central extension

**Remember:** Enlarge the group by scalars and the scalar ambiguity disappears.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C25 (Projective representations and multipliers), 20E22. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** A projective representation of a group G is a homomorphism from G to PGL(V), the invertible linear maps modulo scalars. A central extension of G is a group H with a surjection onto G whose kernel lies in the center of H.

**Problem.** Every projective representation of G is the image of an ordinary linear representation of some central extension of G. Whether it lifts to G itself is measured by a class in the second cohomology group H²(G, F\*).

**How the definition helps.** Allowing a central extension absorbs the scalar ambiguity into the group, so projective representations are studied with the tools for linear ones. The page builds H as the pairs (g, A) with A in GL(V) mapping to ρ(g). Choosing a lift L(g) for each g gives scalars c(g, h) with L(g)L(h) = c(g, h)L(gh), and c is a 2-cocycle, defined up to a coboundary. The standard example is SO(3), whose spin representations become linear on its double cover SU(2).

**Wikipedia:** [Projective representation](https://en.wikipedia.org/wiki/Projective_representation). It says: “However, one can lift a projective representation ρ of G to a linear representation of a different group H, which will be a central extension of G.”

**Sources:**

- [Schur, I. (1904). Über die Darstellung der endlichen Gruppen durch gebrochen lineare Substitutionen. Journal für die reine und angewandte Mathematik 127.](https://doi.org/10.1515/crll.1904.127.20)

### The generalized Fitting subgroup always contains its own centralizer

**Remember:** Add the components, and the Fitting subgroup controls every finite group.

*Rules out counterexamples.* MSC 20D25 (Special subgroups (Frattini, Fitting, etc.)), 20D35. arXiv math.GR. Level 3: graduate.

**Definition.** The Fitting subgroup F(G) of a finite group G is its largest normal nilpotent subgroup. A component of G is a subnormal subgroup, one linked to G by a chain of subgroups each normal in the next. Components must also be quasisimple, that is, perfect central extensions of simple groups. The generalized Fitting subgroup F\*(G) is generated by F(G) and all components.

**Problem.** For every finite group G, the centralizer of F\*(G) lies inside F\*(G). So G modulo the center of F\*(G) embeds in the automorphism group of F\*(G), and only finitely many groups have a given F\*(G).

**How the definition helps.** The definition adds exactly the pieces that the plain Fitting subgroup misses, so the self-centralizing property holds for every finite group. For a nonabelian simple group such as A₅, F(G) is trivial, so its centralizer is the whole group (our own). A minimal piece of the centralizer outside F\*(G) is a product of cyclic groups, which F(G) absorbs, or of nonabelian simple groups, which the components absorb. For solvable groups, F\*(G) = F(G).

**Wikipedia:** [Fitting subgroup](https://en.wikipedia.org/wiki/Fitting_subgroup), [Quasisimple group](https://en.wikipedia.org/wiki/Quasisimple_group). It says: “More generally, if G is a finite group, then the generalized Fitting subgroup contains its own centralizer.”

**Sources:**

- [H. Bender, On groups with abelian Sylow 2-subgroups, Mathematische Zeitschrift 117 (1970) 164–176](https://doi.org/10.1007/BF01109839)

### HNN extensions make isomorphic subgroups conjugate by construction

**Remember:** Add one letter whose job is to conjugate H to K.

*True by definition.* MSC 20E06 (Free products of groups, free products with amalgamation, Higman-Neumann-Neumann extensions, and generalizations). arXiv math.GR. Level 3: graduate.

**Definition.** Take a group G and an isomorphism α from a subgroup H to a subgroup K. The HNN extension adds one new generator t and the relations t⁻¹ h t = α(h) for all h in H. Higman, B. H. Neumann and H. Neumann introduced it in 1949.

**Problem.** Any isomorphism between two subgroups of a group G becomes conjugation by an element of some larger group that contains G.

**How the definition helps.** The conjugation is written into the presentation, so the conjugacy holds by definition. The work moves into another theorem: the natural map from G into the HNN extension is injective, so G really sits inside. Britton's lemma, a normal form theorem, gives this and most other basic properties. HNN extensions are then a key step in Higman's embedding theorem and in proofs of the Novikov–Boone theorem on groups with unsolvable word problem.

**Wikipedia:** [HNN extension](https://en.wikipedia.org/wiki/HNN_extension). It says: “A consequence is that two isomorphic subgroups of a given group are always conjugate in some overgroup; the desire to show this was the original motivation for the construction.”

**Sources:**

- [G. Higman, B. H. Neumann, H. Neumann, Embedding theorems for groups, Journal of the London Mathematical Society 24 (1949) 247–254](https://doi.org/10.1112/jlms/s1-24.4.247)

### Modelling free groups by graphs makes Schreier's index formula an edge count

**Remember:** Count the edges outside a spanning tree to count subgroup generators.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth), 57M10. arXiv math.GR, math.GT. Level 3: graduate.

**Definition.** Model the free group on k generators as the fundamental group of a graph with one vertex and k loops. The fundamental group of a connected graph is free, with one generator for each edge outside a spanning tree. A spanning tree is a tree in the graph that contains every vertex. The word model uses reduced strings of generators and their inverses.

**Problem.** Let H be a subgroup of index n in a free group of finite rank k. Then H is free of rank nk − n + 1.

**How the definition helps.** The graph model turns the rank of H into a count of edges. H is the fundamental group of an n-sheeted covering graph, with n vertices and nk edges. A spanning tree uses n − 1 edges, which leaves nk − n + 1 generators. The work moves to covering space theory and to the theorem that a connected graph has a free fundamental group on the edges outside a spanning tree.

**nLab:** [Nielsen-Schreier theorem](https://ncatlab.org/nlab/show/Nielsen-Schreier+theorem). It says: “then H is free on n k − n + 1 generators.”

**Sources:**

- [Otto Schreier, Die Untergruppen der freien Gruppen (1927).](https://doi.org/10.1007/bf02952517)

### Banning edge flips gives stabilizer inclusions

**Remember:** No flips means each edge stabilizer lies in both vertex stabilizers.

*Rules out counterexamples.* MSC 20E08 (Groups acting on trees). arXiv math.GR. Level 3: graduate.

**Definition.** A tree action has no edge inversions if every element that preserves an edge also fixes both endpoints. A graph of groups attaches groups to vertices and edges and embeds each edge group into its endpoint groups.

**Problem.** When a group acts on a tree without edge inversions, the quotient graph records the orbits of vertices and edges. Its graph of stabilizer groups determines the acting group up to isomorphism.

**How the definition helps.** Banning flips makes every element preserving an edge fix each endpoint (our own). Thus the edge stabilizer, the subgroup preserving that edge, embeds in each endpoint stabilizer (our own). Conjugation transports these inclusions to the chosen orbit representatives (our own). A group of order two flipping a single edge preserves the edge but has trivial endpoint stabilizers (our own). The Bass–Serre theorem reconstructs the acting group from the graph and these inclusions (our own).

**Paper or page:** [On acylindrical tree actions and outer automorphism group of Baumslag-Solitar groups](https://arxiv.org/abs/2501.01754v2). It says: “Then G can be identified with the fundamental group of a certain graph of groups (Γ, 𝒢), where Γ is the quotient graph X/G.”

**Sources:**

- [J.-P. Serre, Trees, 1980](https://doi.org/10.1007/978-3-642-61856-7)

### Graphs of groups make the Kurosh subgroup theorem a short corollary

**Remember:** Let the subgroup act on the tree, then read off its pieces.

*Makes the theorem clean to state or prove.* MSC 20E08 (Groups acting on trees), 20E06. arXiv math.GR. Level 3: graduate.

**Definition.** A graph of groups puts a group at each vertex and edge of a graph, with injective maps from edge groups into their end groups. Its fundamental group generalizes free products with amalgamation and HNN extensions. By the structure theorem, a group acting on a tree without inversions is the fundamental group of its quotient graph of groups. Without inversions means that no element swaps the two ends of an edge.

**Problem.** Kurosh (1934): let H be a subgroup of a free product A ∗ B. Then H is a free product of a free group and of intersections of H with conjugates of A and B.

**How the definition helps.** Bass–Serre theory turns a free product into an action on a tree, and every subgroup acts on the same tree. The group A ∗ B acts on its Bass–Serre tree with vertex stabilizers conjugate to A or B and trivial edge stabilizers. So the structure theorem writes H as the fundamental group of a graph of groups with trivial edge groups, which is a free product of the vertex groups and a free group (our own). The hard part is the structure theorem itself, set out in Serre's book Trees.

**Wikipedia:** [Kurosh subgroup theorem](https://en.wikipedia.org/wiki/Kurosh_subgroup_theorem), [Bass–Serre theory](https://en.wikipedia.org/wiki/Bass%E2%80%93Serre_theory). It says: “In modern terms, the Kurosh subgroup theorem is a straightforward corollary of the basic structural results of Bass–Serre theory about groups acting on trees.”

**Sources:**

- [J.-P. Serre, Trees, translated by J. Stillwell, Springer (1980); French original Arbres, amalgames, SL₂, Astérisque 46 (1977)](https://doi.org/10.1007/978-3-642-61856-7)

### Completion commutes with abelianization

**Remember:** Close the commutator subgroup before taking the profinite abelian quotient.

*True by definition. Confidence: medium.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** The profinite completion consists of compatible elements in all finite quotients, with the topology inherited from their product. Abelianization kills the subgroup generated by commutators. Hausdorff abelianization kills its closure, so distinct points of the quotient have disjoint neighborhoods.

**Problem.** The profinite completion of an abelianization is the Hausdorff abelianization of the profinite completion.

**How the definition helps.** Both constructions are determined by the same maps to finite abelian groups (our own). Such maps kill all commutators in the discrete case and their closure in the continuous case (our own). The work is in showing that maps to finite groups extend uniquely to the completion (our own).

**nLab:** [profinite completion of a group](https://ncatlab.org/nlab/show/profinite+completion+of+a+group). It says: “the limit (in the category of topological groups) over the diagram with objects all the finite quotient groups”

**Sources:** none listed. No primary source with a working link was found.

### Completion preserves quotients

**Remember:** Take the closure of the old kernel to get the new kernel.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** The profinite completion of a group consists of compatible elements in its finite quotients, with the topology inherited from their product. Equivalently, every homomorphism to a finite discrete group extends uniquely to a continuous homomorphism from the completion.

**Problem.** For N normal in G, the profinite completion of G/N is the completion of G modulo the closure of the image of N.

**How the definition helps.** Using finite quotient maps identifies both groups by the same family of quotients (our own). A map from G to a finite group factors through G/N exactly when it kills N (our own). Its continuous extension then kills the closure of the image of N (our own). The extension theorem and the fact that quotients by closed normal subgroups remain profinite justify this comparison (our own).

**Paper or page:** [Profinite almost rigidity in 3-manifolds](https://arxiv.org/abs/2410.16002v4). It says: “The profinite completion functor is right exact”

**Sources:**

- [L. Ribes and P. Zalesskii, Profinite Groups, 2010](https://doi.org/10.1007/978-3-642-01642-4)

### Completion turns conjugacy into closure

**Remember:** Close the conjugacy class by allowing the conjugating element to lie in the completion.

*True by definition. Confidence: medium.* MSC 20E18 (Limits, profinite groups), 20E45. arXiv math.GR. Level 3: graduate.

**Definition.** Give a group its profinite topology, with normal finite-index subgroups as neighborhoods of the identity. Its completion is the compact group of compatible elements of all finite quotients.

**Problem.** Let G be residually finite, so finite quotients distinguish its elements. In G, the profinite closure of a conjugacy class consists exactly of elements conjugate to its representative in the completion.

**How the definition helps.** Allowing the conjugating element to range over the completion replaces separate finite quotient tests with one compact image (our own). Fix x in G and map each element h of the completion to hxh⁻¹ (our own). The image is compact and hence closed, while density of G makes the original conjugates dense in it (our own). Intersecting that image with G gives the required closure (our own). The completion theorem supplies the dense embedding with the stated topology (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group), [profinite completion of a group](https://ncatlab.org/nlab/show/profinite+completion+of+a+group). It says: “Any group has a profinite completion, given by taking the projective limit of the group's quotients by its finite index normal subgroups.”

**Sources:** none listed. No primary source with a working link was found.

### Frattini quotients count pro-p generators

**Remember:** Generators are detected in the largest quotient that is a vector space over 𝔽ₚ.

*True by definition. Confidence: medium.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a prime p, a pro-p group G is an inverse limit of finite groups of p-power order. Its Frattini subgroup is the intersection of its maximal proper open subgroups. Topological generators generate a dense subgroup.

**Problem.** The minimum number of topological generators of a finitely generated pro-p group is the dimension of its Frattini quotient over 𝔽ₚ.

**How the definition helps.** The intersection definition detects exactly when proposed generators lie in a maximal proper open subgroup (our own). Every proper closed subgroup has proper image in some finite quotient, where a maximal subgroup contains that image (our own). In a finite p-group every maximal subgroup is normal of index p, so the same holds for maximal proper open subgroups (our own). Their intersection therefore gives a quotient that embeds in a product of groups of order p (our own). For finitely many topological generators this vector space is finite, and lifting a basis gives a smallest topological generating set (our own).

**Wikipedia:** [Frattini subgroup](https://en.wikipedia.org/wiki/Frattini_subgroup), [Pro-p group](https://en.wikipedia.org/wiki/Pro-p_group). It says: “then k is the smallest number of generators for G”

**Sources:** none listed. No primary source with a working link was found.

### Inverse limits give profinite completion its unique extension property

**Remember:** Each map to a finite group factors through one finite quotient.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** The profinite completion Ĝ of G is the inverse limit of its finite quotients G/N, where N is normal. The limit consists of compatible families in the product of these quotients. The map η sends each element of G to its family of cosets.

**Problem.** Every abstract homomorphism from G to a profinite group extends uniquely to a continuous homomorphism from Ĝ.

**How the definition helps.** The inverse limit definition builds each finite quotient map into the completion. A map to a profinite group gives compatible maps to its finite quotients, so the limit combines their extensions (our own). Uniqueness uses density of η(G), which follows because finitely many coordinates can be tested in one finite quotient (our own).

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “The homomorphism η is characterized by the following universal property: given any profinite group H and any continuous group homomorphism f : G → H”

**Sources:** none listed. No primary source with a working link was found.

### Inverse limits make profinite groups compact and totally disconnected

**Remember:** Compatible families form a closed subset of a product of finite groups.

*True by definition.* MSC 20E18 (Limits, profinite groups), 22C05. arXiv math.GR, math.GN. Level 3: graduate.

**Definition.** Define a profinite group as an inverse limit of finite discrete groups. This limit is a subspace of their product, consisting of families whose entries agree under the maps between the groups. The other definition is a compact Hausdorff topological group that is totally disconnected, meaning its only nonempty connected subsets are singletons.

**Problem.** An inverse limit of finite discrete groups is compact, Hausdorff and totally disconnected.

**How the definition helps.** The inverse limit definition gives a closed subspace of a product of finite discrete groups. The product is compact by Tychonoff’s theorem, and finite coordinates distinguish points and separate any two by open and closed sets (our own). The compatibility equations are closed, so the limit inherits the three properties (our own). The work lies in the converse. A compact Hausdorff totally disconnected group has arbitrarily small open normal subgroups and is the inverse limit of the corresponding finite quotients.

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “The finite groups are considered as compact discrete topological groups and so the inverse limit, as a closed subspace of the compact space that is the product of all those finite groups has the inverse limit topology”

**Paper or page:** [Topology, Lemma 5.30.4](https://stacks.math.columbia.edu/tag/0BR1). It says: “The following are equivalent G as a topological space is profinite, G is a limit of a diagram of finite discrete topological groups, G is a cofiltered limit of finite discrete topological groups.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite limits preserve surjections

**Remember:** Compact fibers turn finite compatibility into a compatible lift.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** An inverse system consists of groups and compatible maps from later groups to earlier ones. Its inverse limit consists of tuples whose coordinates agree under these maps. A profinite group is an inverse limit of finite discrete groups with the topology inherited from their product.

**Problem.** Consider two inverse systems of profinite groups indexed by the same directed set, where any two indices have a common later index. Compatible continuous surjections at each index give a surjection between the inverse limits.

**How the definition helps.** Viewing the groups as compact spaces turns simultaneous lifting into a finite compatibility test (our own). Fix a target tuple and take the product of its nonempty compact coordinate fibers, in which each compatibility equation defines a closed subset (our own). For finitely many equations, lift at a common later index and project to the required coordinates (our own). Compactness then gives a lift satisfying all equations (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “The projective limit of a system of profinite groups is an exact functor”

**Sources:** none listed. No primary source with a working link was found.

### The topological definition makes closed subgroups of profinite groups profinite

**Remember:** A closed subgroup inherits compactness, the Hausdorff property and total disconnectedness.

*True by definition.* MSC 20E18 (Limits, profinite groups), 22C05. arXiv math.GR. Level 3: graduate.

**Definition.** Define a profinite group as a compact, Hausdorff, totally disconnected topological group. Totally disconnected means that every nonempty connected subset is a singleton. The equivalent definition is an inverse limit, a group of compatible families in a product of finite discrete groups.

**Problem.** Every closed subgroup of a profinite group is profinite.

**How the definition helps.** The topological definition makes the result follow from three properties of closed subspaces (our own). A closed subset of a compact space is compact, and all subspaces inherit the Hausdorff property and total disconnectedness (our own). With the limit definition, one instead shows that the subgroup is the inverse limit of its images in the finite quotients (our own). The work moved to the theorem identifying compact Hausdorff totally disconnected groups with inverse limits of finite discrete groups.

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “Every closed subgroup of a profinite group is itself profinite; the topology arising from the profiniteness agrees with the subspace topology.”

**Sources:** none listed. No primary source with a working link was found.

### Complete normal subgroups split off

**Remember:** A complete normal subgroup has a canonical projection from its ambient group.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 3: graduate.

**Definition.** A group is complete if conjugation identifies the group with its full automorphism group. This requires both a trivial center and that every automorphism come from conjugation.

**Problem.** If a normal subgroup N of G is complete, then G is the direct product of N and the elements that commute with N.

**How the definition helps.** Completeness makes conjugation by each element of G agree on N with conjugation by a unique element of N. This gives a homomorphism onto N that fixes N pointwise. Its kernel consists of the elements commuting with N, giving the direct product. In S₅, the centerless subgroup A₅ admits conjugation by an odd permutation that no element of A₅ induces (our own). The order-two subgroup of C₄ has only the identity automorphism but has no direct complement (our own).

**Wikipedia:** [Complete group](https://en.wikipedia.org/wiki/Complete_group). It says: “If the kernel, N, is a complete group then the extension splits:”

**Sources:** none listed. No primary source with a working link was found.

### Counting extensions up to equivalence, not isomorphism, lets H² classify them

**Remember:** Keep track of the kernel and the quotient, and cohomology counts.

*Makes the theorem clean to state or prove.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** An extension 1 → K → G → H → 1 makes K a normal subgroup of G with quotient H. Two extensions G and G′ are equivalent if some isomorphism G → G′ is the identity on K and induces the identity on H. So the identifications of K and H are part of the data.

**Problem.** Let A be an abelian group. The equivalence classes of central extensions with kernel A and quotient G correspond one-to-one to the elements of H²(G, A). The split extension A × G corresponds to 0.

**How the definition helps.** Equivalence keeps the identifications of K and H fixed, so an extension becomes a 2-cocycle up to a coboundary, and these classes form a group (our own). Isomorphism of the middle groups forgets the identifications, and the count then has no group structure (our own). For example, there are 8 inequivalent central extensions of the Klein four-group by ℤ/2ℤ, but only four groups of order 8 arise as middle groups. What stays hard is to decide which middle groups are isomorphic.

**Wikipedia:** [Group extension](https://en.wikipedia.org/wiki/Group_extension). It says: “It may happen that the extensions 1→K→G→H→1 and 1→K→G′→H→1 are inequivalent but G and G′ are isomorphic as groups.”

**Sources:** none listed. No primary source with a working link was found.

### Crossed homomorphisms as sections of the semidirect product match complements

**Remember:** A subgroup that projects bijectively is the image of a section.

*True by definition.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** Let G act on an abelian group M, and form the semidirect product M ⋊ G. Define a crossed homomorphism as a group map from G to M ⋊ G that is a right inverse of the projection. Such a map has the form g ↦ (d(g), g). The coordinate definition asks d(gh) = d(g) + g·d(h).

**Problem.** Crossed homomorphisms from G to M correspond to complements of M in M ⋊ G. A complement is a subgroup that meets M trivially and, with M, generates the whole group.

**How the definition helps.** With crossed homomorphisms as sections, the claim becomes a general fact about split extensions. The image of a section is a complement. Conversely, the projection restricted to a complement is an isomorphism onto G, and its inverse is a section. The nLab states that derivations of G into M are the crossed homomorphisms. Expanding the semidirect product gives the coordinate rule; this comparison is our own.

**nLab:** [Beck module](https://ncatlab.org/nlab/show/Beck+module). It says: “M-valued derivations of G are precisely crossed homomorphisms G → M”

**Sources:** none listed. No primary source with a working link was found.

### Only perfect groups have a universal central extension

**Remember:** Perfect groups stop you from padding extensions with abelian factors.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J05. arXiv math.GR. Level 3: graduate.

**Definition.** A central extension of G is a surjective homomorphism E → G whose kernel lies in the center of E. A group is perfect if it equals its commutator subgroup. A universal central extension of G is a central extension with exactly one map over G to every other central extension of G.

**Problem.** A group has a universal central extension exactly when it is perfect. For a finite perfect group, this extension is unique up to isomorphism and is itself perfect. Its kernel is the Schur multiplier, the second homology group H₂(G, ℤ).

**How the definition helps.** Perfectness removes the abelian factors that block a universal extension: G × A is a central extension of G for every abelian group A. The maps from a universal extension U to these over G must be unique, and this forces U, and so G, to be perfect (our own). For a perfect group, the page builds the extension from a free presentation G = F/R as \[F,F\]/\[F,R\]. What stays hard is to compute the multiplier of each simple group.

**Wikipedia:** [Schur multiplier](https://en.wikipedia.org/wiki/Schur_multiplier), [Perfect group](https://en.wikipedia.org/wiki/Perfect_group). It says: “It is also called more briefly a universal central extension, but note that there is no largest central extension, as the direct product of G and an abelian group form a central extension of G of arbitrary size.”

**Sources:**

- [I. Schur, Über die Darstellung der endlichen Gruppen durch gebrochen lineare Substitutionen, Journal für die reine und angewandte Mathematik 127 (1904) 20–50](https://doi.org/10.1515/crll.1904.127.20)

### Finite quotients detect surviving elements

**Remember:** An element survives if some finite quotient sees it.

*Rules out counterexamples.* MSC 20E26 (Residual properties and generalizations; residually finite groups), 20E18. arXiv math.GR. Level 3: graduate.

**Definition.** Form the profinite completion from compatible tuples in all finite quotient groups. A group is residually finite if each nonidentity element survives in some finite quotient.

**Problem.** The map from a group to its profinite completion is injective exactly for residually finite groups.

**How the definition helps.** The completion map sends an element to the tuple of its images, so residual finiteness makes its kernel trivial. In our own example, every homomorphism from additive ℚ to a finite group of order m is trivial. Indeed, every rational is m times another rational, and multiplication by m kills the image.

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “The homomorphism η is injective if and only if the group G is residually finite”

**Sources:** none listed. No primary source with a working link was found.

### Quasisimple groups have central proper normal subgroups

**Remember:** No proper normal subgroup of a quasisimple group can cover its simple quotient.

*Rules out counterexamples.* MSC 20E32 (Simple groups). arXiv math.GR. Level 3: graduate.

**Definition.** A group is perfect if its commutators generate it. A quasisimple group is perfect and becomes nonabelian simple after quotienting by its center.

**Problem.** Every proper normal subgroup of a quasisimple group lies in its center.

**How the definition helps.** Perfectness prevents a proper normal subgroup N from mapping onto the simple quotient (our own). A nontrivial image would fill that quotient, giving G = NZ(G), where Z(G) denotes the center (our own). Then G/N would be both abelian and perfect, hence trivial (our own). The direct product A₅ × C₂ has simple central quotient but contains the noncentral proper normal subgroup A₅ × {1} (our own).

**Paper or page:** [Quasirandom and quasisimple groups](https://arxiv.org/abs/2404.05550v3). It says: “Let G be a quasisimple group, and let N ◁ G be a proper normal subgroup. Then N ⊆ Z(G), and G/N is again quasisimple.”

**Sources:**

- [Quasirandom and quasisimple groups, Lemma 2.10](https://arxiv.org/abs/2404.05550v3)

### BN-pair axioms prove simplicity for all groups of Lie type at once

**Remember:** Check the axioms once instead of checking each family.

*Makes the theorem clean to state or prove.* MSC 20E42 (Groups with a \\(BN\\)-pair; buildings), 20D06. arXiv math.GR. Level 3: graduate.

**Definition.** A BN pair in G is a pair of subgroups B and N that generate G, with T = B ∩ N normal in N. The quotient W = N/T is generated by a set S of elements of order 2. For s in S and w in W, sBw ⊆ BswB ∪ BwB, and no s in S normalizes B.

**Problem.** Tits's simplicity theorem: let G have a BN pair with B solvable and with trivial intersection of all conjugates of B. Suppose also that S does not split into two nonempty sets that commute with each other. Then G is simple whenever it is perfect, that is, equal to its commutator subgroup.

**How the definition helps.** The axioms capture what every group of Lie type shares with GL(n), so one proof covers every family. In GL(n), B is the group of upper triangular matrices and N the group of monomial matrices. In practice all the conditions except perfectness are easy to check. Perfectness needs some messy calculations, and it fails for a few small groups of Lie type.

**Wikipedia:** [(B, N) pair](https://en.wikipedia.org/wiki/%28B%2C_N%29_pair), [Group of Lie type](https://en.wikipedia.org/wiki/Group_of_Lie_type). It says: “a (B, N) pair is a structure on groups of Lie type that allows one to give uniform proofs of many results, instead of giving a large number of case-by-case proofs.”

**Sources:**

- [J. Tits, Algebraic and abstract simple groups, Annals of Mathematics 80 (1964) 313–329](https://doi.org/10.2307/1970394)

### A coset absorbs twisted conjugation

**Remember:** Multiply by the new generator to absorb the twist.

*True by definition.* MSC 20E45 (Conjugacy classes for groups). arXiv math.GR. Level 3: graduate.

**Definition.** For an automorphism φ of G, twisted conjugation by h sends x to hxφ(h)⁻¹. Form the semidirect product of G with an infinite cyclic group whose generator t satisfies tgt⁻¹ = φ(g).

**Problem.** Multiplication by t matches φ-twisted conjugacy classes in G with ordinary conjugacy classes in the coset Gt.

**How the definition helps.** The new generator turns the twisted formula into ordinary conjugation because h(xt)h⁻¹ = hxφ(h)⁻¹t (our own). Conjugation by t adds no new classes because t(xt)t⁻¹ = x⁻¹(xt)x (our own). The semidirect product construction keeps G embedded while imposing the required relation (our own).

**Paper or page:** [Twisted Conjugacy in Big Mapping Class Groups](https://arxiv.org/abs/2112.06612v2). It says: “The map x ↦ xt gives a bijection between the set of φ-twisted conjugacy classes of G and the set of conjugacy classes of Gφ contained in the coset G · t.”

**Sources:**

- [Sushil Bhunia and Swathi Krishna, Twisted Conjugacy in Big Mapping Class Groups, Corollary 2.9](https://arxiv.org/abs/2112.06612v2)

### Defining finitely presented groups as compact objects makes retracts finitely presented

**Remember:** Maps out of a retract pass through the larger group and back.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 18C35. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** Call G compact when maps out of G commute with filtered colimits, gluings of systems where any two stages map to a later stage. Each map from G to such a colimit must come from some stage. Two stage maps that agree in the colimit must also agree at a later stage. The usual definition asks for finitely many generators and finitely many relations.

**Problem.** A retract of a finitely presented group is finitely presented. H is a retract of G when maps i from H to G and r from G to H satisfy r∘i = identity.

**How the definition helps.** With this definition the proof is formal, because the maps out of H are a retract of the maps out of G (our own). Take a map f from H to a filtered colimit, make f∘r come from a stage, and compose that stage map with i (our own). Two stage maps that agree in the colimit are handled in the same way. The work moves to the comparison theorem, stated by the nLab, that a group is compact exactly when it is finitely presented.

**nLab:** [compact object](https://ncatlab.org/nlab/show/compact+object). It says: “In C = Grp an object is compact precisely if it is finitely presented as a group.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Fox derivatives as coordinates makes Fox's fundamental formula hold by definition

**Remember:** A Fox derivative reads one coordinate of u − ε(u).

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 16S34. arXiv math.GR. Level 3: graduate.

**Definition.** Let F be a free group on generators xᵢ, with group ring ℤF, the integer combinations of elements of F. The augmentation ideal is the kernel of ε, where ε(u) is the sum of the coefficients of u. It is a free left ℤF-module with basis the elements xᵢ − 1. Define the Fox derivative ∂u/∂xᵢ as the coefficient of xᵢ − 1 in u − ε(u).

**Problem.** For every element u of ℤF, u − ε(u) equals the sum over i of (∂u/∂xᵢ)(xᵢ − 1).

**How the definition helps.** With this definition, the formula only expands u − ε(u) in the basis, so it holds by definition (our own framing). The usual definition gives Fox derivatives by rules: ∂xⱼ/∂xᵢ is 1 or 0, and ∂(uv) = ∂u + u∂v for group elements u and v. The work moves to the standard theorem that the elements xᵢ − 1 form a basis (our own account). The product rule then follows from the identity uv − 1 = (u − 1) + u(v − 1).

**nLab:** [Fox derivative](https://ncatlab.org/nlab/show/Fox+derivative). It says: “u − ε(u) 1<sub>F</sub> = ∑ᵢ (∂u/∂xᵢ)(xᵢ − 1)”

**Sources:**

- [Ralph H. Fox, Free Differential Calculus. I: Derivation in the Free Group Ring (1953).](https://doi.org/10.2307/1969736)

### The small cancellation condition C′(1/6) makes Dehn's algorithm solve the word problem

**Remember:** Relators overlap little, so a trivial word shows over half a relator.

*Makes the theorem clean to state or prove.* MSC 20F06 (Cancellation theory of groups; application of van Kampen diagrams), 20F10. arXiv math.GR. Level 3: graduate.

**Definition.** A piece of a presentation is a word that occurs as a common subword of two different relators, counting cyclic permutations and inverses. A presentation satisfies C′(λ) if every piece in a relator r is shorter than λ times the length of r. Dehn's algorithm replaces any subword that is more than half of a relator by the inverse of the rest, and repeats.

**Problem.** For a C′(1/6) presentation, a freely reduced word equals the identity if and only if Dehn's algorithm reduces it to the empty word. So the word problem is solvable for finite C′(1/6) presentations.

**How the definition helps.** The number 1/6 is chosen so that Greendlinger's lemma gives a subword longer than half a relator, which is exactly what Dehn's algorithm needs. Each step of the algorithm then makes the word shorter, so it ends after finitely many steps (our own). The hard part is Greendlinger's lemma itself, proved with van Kampen diagrams and a combinatorial Gauss–Bonnet argument.

**Wikipedia:** [Small cancellation theory](https://en.wikipedia.org/wiki/Small_cancellation_theory). It says: “Note that the assumption λ ≤ 1/6 implies that (1 − 3λ) ≥ 1/2, so that w contains a subword more than a half of some defining relator.”

**Sources:** none listed. No primary source with a working link was found.

### Residual finiteness decides word problems

**Remember:** Finite quotients detect nonidentity words in residually finite groups.

*Rules out counterexamples.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** A group is residually finite if each element other than the identity survives in some finite quotient. A finite presentation by itself guarantees no such quotient.

**Problem.** A finitely presented residually finite group has an algorithm to decide if a word in its generators is the identity.

**How the definition helps.** Residual finiteness supplies a finite witness whenever a word represents a nonidentity element, in our own proof. Enumerate proofs from the defining relations while also enumerating maps from the generators to finite groups. Test each map against the relations and check whether it sends the word away from the identity. One search must finish. In our own comparison, Boone’s finitely presented group with undecidable word problem cannot have this property.

**nLab:** [residually finite group](https://ncatlab.org/nlab/show/residually+finite+group). It says: “The intersection of all normal subgroups N ⊂ G of finite index \[G : N\] ∈ ℕ is trivial.”

**Wikipedia:** [Residually finite group](https://en.wikipedia.org/wiki/Residually_finite_group). It says: “Finitely presented residually finite groups have a solvable word problem”

**Sources:** none listed. No primary source with a working link was found.

### Subgroup separability decides subgroup membership

**Remember:** Finite quotients certify nonmembership when the group is subgroup separable.

*Rules out counterexamples.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** Subgroup separability means each element outside a finitely generated subgroup stays outside its image in some finite quotient. An Artin group has generators with relations equating two alternating words of equal length in a pair of generators.

**Problem.** In a subgroup separable Artin group given by a finite presentation, an algorithm decides membership in any subgroup given by finitely many generators.

**How the definition helps.** Subgroup separability lets a finite quotient certify a negative answer, in our own proof. Search through maps to finite groups that satisfy the defining relations, and at the same time enumerate subgroup words and proofs that they equal the input word. One search must find a certificate. In our own comparison, Mihailova constructed a finitely generated subgroup with undecidable membership in the product of two rank-two free groups.

**Paper or page:** [Membership problems in braid groups and Artin groups](https://arxiv.org/abs/2409.11335v3). It says: “Every subgroup separable Artin group has decidable rational subset membership problem.”

**Sources:** none listed. No primary source with a working link was found.

### Isoclinism makes the Schur cover of every finite group unique

**Remember:** Isoclinism ignores the center, which is where Schur covers differ.

*Makes the theorem clean to state or prove.* MSC 20F12 (Commutator calculus), 20C25. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** The commutator map of G sends two cosets of the center Z(G) to the commutator of their representatives. Two groups are isoclinic if isomorphisms between the quotients by the centers and between the commutator subgroups match these maps.

**Problem.** Every finite group G has a Schur cover. This is a central extension C of G of least order to which every projective representation of G (a representation up to scalar factors) lifts. Schur covers need not be isomorphic, but all Schur covers of G are isoclinic.

**How the definition helps.** Isoclinism compares groups only through their central quotients and commutator subgroups, so the differences between Schur covers disappear. For example, the dihedral and quaternion groups of order 8 are both Schur covers of the Klein four-group (our own). They are not isomorphic, but the page notes that they are isoclinic. For a perfect group, the Schur cover is unique up to isomorphism, so the weaker relation is needed only for the other groups.

**Wikipedia:** [Schur multiplier](https://en.wikipedia.org/wiki/Schur_multiplier), [Isoclinism of groups](https://en.wikipedia.org/wiki/Isoclinism_of_groups). It says: “The Schur cover of a perfect group is uniquely determined up to isomorphism, but the Schur cover of a general finite group is only determined up to isoclinism.”

**Sources:**

- [P. Hall, The classification of prime-power groups, Journal für die reine und angewandte Mathematik 182 (1940) 130–141](https://doi.org/10.1515/crll.1940.182.130)

### Polycyclic groups have finite presentations

**Remember:** Finitely many cyclic layers give a finite list of relations.

*Rules out counterexamples.* MSC 20F16 (Solvable groups, supersolvable groups), 20F05. arXiv math.GR. Level 3: graduate.

**Definition.** A polycyclic group has a finite chain from the identity subgroup to the whole group. Each subgroup is normal in the next, and each successive quotient is cyclic. A solvable group allows abelian quotients in such a chain.

**Problem.** Every polycyclic group has a presentation using finitely many generators and relations.

**How the definition helps.** Cyclic layers let us build a finite presentation one layer at a time, in our own explanation. An extension has a finite presentation when both the normal subgroup and the quotient have one, and every cyclic group has one. The lamplighter group, ℤ/2 wreath ℤ, is solvable and finitely generated, yet has no finite presentation. Its lamp changes alone form a subgroup requiring infinitely many generators, which a polycyclic group cannot contain (our own explanation).

**Wikipedia:** [Polycyclic group](https://en.wikipedia.org/wiki/Polycyclic_group), [Lamplighter group](https://en.wikipedia.org/wiki/Lamplighter_group). It says: “Polycyclic groups are finitely presented, which makes them interesting from a computational point of view.”

**Sources:**

- [Gilbert Baumslag, Wreath products and finitely presented groups (1961).](https://doi.org/10.1007/bf01211007)

### Virtually nilpotent, not nilpotent, matches polynomial growth exactly

**Remember:** Growth cannot see finite index, so the theorem must say virtually.

*Rules out counterexamples.* MSC 20F19 (Generalizations of solvable and nilpotent groups), 20F69. arXiv math.GR. Level 3: graduate.

**Definition.** A group is virtually P if it has a subgroup of finite index with property P. So a group is virtually nilpotent if some subgroup of finite index is nilpotent.

**Problem.** Gromov (1981): a finitely generated group has polynomial growth if and only if it has a nilpotent subgroup of finite index.

**How the definition helps.** Growth does not change when one passes to a subgroup of finite index, so an exact description must use a property with the same freedom. Plain nilpotency fails: every finite group has polynomial growth, but the symmetric group S₃ is not nilpotent (our own). The infinite dihedral group has linear growth but is not nilpotent, because its lower central series never reaches the trivial group (our own). The easy direction is due to Wolf, and the hard direction is Gromov's.

**Wikipedia:** [Virtually](https://en.wikipedia.org/wiki/Virtually), [Gromov's theorem on groups of polynomial growth](https://en.wikipedia.org/wiki/Gromov%27s_theorem_on_groups_of_polynomial_growth). It says: “Gromov's theorem states that the finitely generated groups with polynomial growth are precisely the finitely generated virtually nilpotent groups.”

**Sources:**

- [M. Gromov, Groups of polynomial growth and expanding maps (with an appendix by J. Tits), Publications Mathématiques de l'IHÉS 53 (1981) 53–73](https://doi.org/10.1007/BF02698687)

### Virtually solvable makes the Tits alternative hold for finitely generated linear groups

**Remember:** A linear group is nearly solvable, or it holds a free group.

*Rules out counterexamples.* MSC 20F19 (Generalizations of solvable and nilpotent groups), 20H20. arXiv math.GR. Level 3: graduate.

**Definition.** A linear group is a subgroup of GL(n, k), the invertible n × n matrices over a field k. It is virtually solvable if it has a solvable subgroup of finite index.

**Problem.** Tits (1972): a finitely generated linear group either is virtually solvable or contains a free group on two generators.

**How the definition helps.** Finite groups are the obstacle to a plain alternative, and the word virtually absorbs them. A finite simple group such as A₅ is linear, contains no free subgroup and is not solvable, so the statement with solvable alone would be false (our own). Every finite group is virtually solvable, since the trivial subgroup has finite index. The hard part is Tits's construction of free subgroups, which uses algebraic geometry.

**Wikipedia:** [Tits alternative](https://en.wikipedia.org/wiki/Tits_alternative), [Amenable group](https://en.wikipedia.org/wiki/Amenable_group), [Virtually](https://en.wikipedia.org/wiki/Virtually). It says: “every subgroup of GL(n,k) with k a field either has a normal solvable subgroup of finite index (and therefore is amenable) or contains the free group on two generators.”

**Sources:**

- [J. Tits, Free subgroups in linear groups, Journal of Algebra 20 (1972) 250–270](https://doi.org/10.1016/0021-8693(72)90058-0)

### Configuration space proves braid groups have no torsion

**Remember:** A finite-dimensional classifying space rules out torsion in its fundamental group.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 55R80. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** Define Bₙ as the fundamental group of the space of unordered sets of n distinct points in the plane. The geometric definition instead uses n strands that can move without intersecting while their ends stay fixed.

**Problem.** Bₙ has no nonidentity element of finite order.

**How the definition helps.** The configuration space is a classifying space for Bₙ of dimension 2n, a space with fundamental group Bₙ and contractible universal cover (our own). A finite cyclic subgroup would have its own classifying space, a covering of the same dimension (our own). But a nontrivial finite cyclic group has nonzero integral cohomology in arbitrarily high degrees, and a 2n-dimensional manifold has none above degree 2n (our own). The work lies in proving the universal cover contractible via the Fadell–Neuwirth bundles that forget a point (our own).

**Wikipedia:** [Configuration space (mathematics)](https://en.wikipedia.org/wiki/Configuration_space_%28mathematics%29), [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “It follows from this definition and the fact that Confₙ(ℝ²) and UConfₙ(ℝ²) are Eilenberg–MacLane spaces of type K(π,1), that the unordered configuration space of the plane UConfₙ(ℝ²) is a classifying space for the Artin braid group”

**Sources:**

- [Edward Fadell and Lee Neuwirth, Configuration spaces, Mathematica Scandinavica (1962)](https://doi.org/10.7146/math.scand.a-10517)

### Ordered configurations split pure braid groups into free group factors

**Remember:** Forget one point to reveal a punctured plane and its free group.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 55R80. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** Define Pₙ as the fundamental group of the space of ordered lists of n distinct points in the plane. In the algebraic definition, Pₙ consists of braids that induce the identity permutation of the strand ends.

**Problem.** For n ≥ 2, the sequence 1 → Fₙ₋₁ → Pₙ → Pₙ₋₁ → 1 splits. Here Fₙ₋₁ is the free group on n − 1 generators.

**How the definition helps.** The configuration definition shows the kernel and a splitting in the same map, the projection that forgets the last point (our own). Its fiber, the plane minus n − 1 points, has free fundamental group on n − 1 loops, and the homotopy sequence of the bundle gives the exact sequence (our own). A section adds a point on the positive horizontal axis beyond all the existing points, and it splits the sequence (our own). The real work is the Fadell–Neuwirth theorem that the projection is a bundle (our own).

**Wikipedia:** [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “Pure braid groups fit into a short exact sequence 1 → Fₙ₋₁ → Pₙ → Pₙ₋₁ → 1. This sequence splits and therefore pure braid groups are realized as iterated semi-direct products of free groups.”

**Sources:**

- [Edward Fadell and Lee Neuwirth, Configuration spaces, Mathematica Scandinavica (1962)](https://doi.org/10.7146/math.scand.a-10517)

### Punctured disk mapping classes give Artin’s action on a free group

**Remember:** A disk homeomorphism acts on loops, and isotopy does not change the action.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 57K20. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** Define Bₙ by homeomorphisms of a disk that fix its boundary and preserve its n punctures as a set. Identify homeomorphisms that deform into each other through such homeomorphisms, an equivalence called isotopy. The punctured disk has free fundamental group on n loops based at one boundary point. Artin's algebraic construction gives formulas for what each braid generator does to those loops.

**Problem.** The action of braids on the free group of the punctured disk is a group homomorphism. In the usual basis it is Artin's action.

**How the definition helps.** The mapping class definition lets homeomorphisms act directly on loops, so one need not check the braid relations on formulas (our own). The boundary point stays fixed during isotopy, so isotopic homeomorphisms act identically on the fundamental group (our own). Composition of homeomorphisms induces composition of their actions (our own). The work lies in identifying this group with geometric braids and recovering Artin's formulas from exchanges of adjacent punctures (our own). The separate theorem that the action is faithful, meaning it has trivial kernel, does not follow from this argument (our own).

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “the MCG-presentation of the braid group (above) induces a group homomorphism of the braid group into the automorphism group of a free group, which turns out to be faithful.”

**Sources:**

- [Joan S. Birman, Mapping class groups and their relationship to braid groups, Communications on Pure and Applied Mathematics (1969)](https://doi.org/10.1002/cpa.3160220206)
- [Emil Artin, Theory of Braids, Annals of Mathematics (1947)](https://doi.org/10.2307/1969218)

### The cyclic cover makes the reduced Burau action a homomorphism

**Remember:** A fixed boundary lift makes braid composition agree with composition upstairs.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 57M10. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** View braids as isotopy classes of homeomorphisms of an n-punctured disk fixing its boundary and permuting the punctures. Take the infinite cyclic cover C defined by sending each positive loop around a puncture to 1 in ℤ. The reduced Burau action is on H₁(C; ℤ), with the variable t acting by a shift of the cover. Burau's matrix construction instead specifies one matrix for each braid generator.

**Problem.** The reduced Burau matrices give a group homomorphism from Bₙ into the invertible matrices over ℤ\[t, t⁻¹\].

**How the definition helps.** The covering definition makes the action a homomorphism by choosing lifts that respect composition (our own). Disk homeomorphisms preserve the puncture-loop map to ℤ, so they lift to C and commute with t (our own). Fixing a lift of a boundary point chooses one lift of each homeomorphism, and this choice respects composition and isotopy (our own). The work left is to choose a basis for the free module of rank n − 1 and recover Burau's generator matrices (our own).

**Wikipedia:** [Burau representation](https://en.wikipedia.org/wiki/Burau_representation). It says: “By the basic theory of covering spaces, Bₙ acts on H₁(Cₙ), and this representation is called the reduced Burau representation.”

**Sources:** none listed. No primary source with a working link was found.

### Coxeter presentations turn finite reflection groups into diagrams to classify

**Remember:** Record the angles between mirrors, and the group is determined.

*Makes the theorem clean to state or prove.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** A Coxeter group has generators r₁, …, rₙ and relations (rᵢrⱼ) to the power mᵢⱼ equal to 1. Here mᵢᵢ = 1, and for i ≠ j, mᵢⱼ = mⱼᵢ is at least 2 or is ∞, which means no relation. The numbers mᵢⱼ are drawn as a labelled graph, the Coxeter diagram.

**Problem.** Coxeter (1934, 1935): the finite groups generated by reflections of Euclidean space are exactly the finite Coxeter groups. They are classified by their Coxeter diagrams.

**How the definition helps.** The presentation records only the angle between each pair of mirrors, so a whole reflection group is coded by a small labelled graph. The classification then becomes a question about which graphs give a finite group, which Coxeter answered by listing diagrams. Not every infinite Coxeter group is a reflection group of Euclidean space, so the clean equality holds only for finite groups. The hard step is to show that the reflection group satisfies no extra relations beyond those in the presentation (our own).

**Wikipedia:** [Coxeter group](https://en.wikipedia.org/wiki/Coxeter_group). It says: “In this way, every reflection group may be presented as a Coxeter group. The converse is partially true: every finite Coxeter group admits a faithful representation as a finite reflection group of some Euclidean space.”

**Sources:**

- [H. S. M. Coxeter, Discrete groups generated by reflections, Annals of Mathematics 35 (1934) 588–621](https://doi.org/10.2307/1968753)
- [H. S. M. Coxeter, The complete enumeration of finite groups of the form Rᵢ² = (RᵢRⱼ)ᵏⁱʲ = 1, Journal of the London Mathematical Society 10 (1935) 21–25](https://doi.org/10.1112/jlms/s1-10.37.21)

### Defining affine Weyl groups as semidirect products splits off translations

**Remember:** Each element is one lattice translation after one finite Weyl element.

*True by definition. Confidence: medium.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)), 17B22. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** Define the affine Weyl group of a reduced crystallographic root system as Q∨ ⋊ W. Here Q∨ is the integer span of the coroots α∨ = 2α/(α, α), acting by translations. W is the finite group generated by the root reflections. The geometric definition generates the group by the reflections in the hyperplanes where a root takes an integer value.

**Problem.** In the affine Weyl group of a root system, the translations form the coroot lattice Q∨. The quotient by them is the finite Weyl group W, and the linear reflections give a section.

**How the definition helps.** In a semidirect product, the normal factor, the quotient and the section are all part of the definition (our own argument; the quoted paper only uses this definition). The work moves to comparing it with the geometric definition (our own account). The reflection in the hyperplane where α equals k is the translation by kα∨ after the linear reflection in α. So two parallel reflections give a translation by a coroot.

**Paper or page:** [Affine Kazhdan-Lusztig polynomials on the subregular cell in non simply-laced Lie algebras: with an application to character formulae (with an appendix by Roman Bezrukavnikov, Vasily Krylov, and Kenta Suzuki), Proposition 3.7](https://arxiv.org/abs/2401.06605v2). It says: “Let Ŵ = Q∨ ⋊ W be the affine Weyl group of type C.”

**Sources:** none listed. No primary source with a working link was found.

### Finite support preserves wreath bi-orders

**Remember:** Finite support gives the sequence a last place where two values differ.

*Rules out counterexamples.* MSC 20F60 (Ordered groups (group-theoretic aspects)), 20E22. arXiv math.GR. Level 3: graduate.

**Definition.** In the restricted wreath product of ℤ by ℤ, one copy of ℤ shifts doubly infinite integer sequences. The sequences add coordinatewise and have only finitely many nonzero entries. The unrestricted product allows every such sequence, including those with infinitely many nonzero entries. A bi-order is a total order that multiplication on either side preserves.

**Problem.** The restricted wreath product of ℤ by ℤ admits a bi-order. The unrestricted wreath product of the same groups does not.

**How the definition helps.** Finite support gives a greatest differing index, so lexicographic comparison from that end is shift invariant (our own). Order first by the shift exponent, then by this comparison on the sequence group (our own). In the unrestricted product, shifting the sequence with entries alternating 1 and −1 sends it to its inverse (our own). A nonidentity element cannot be conjugate to its inverse in a bi-ordered group (our own).

**Paper or page:** [The complexity of knapsack problems in wreath products](https://arxiv.org/abs/2002.08086v2). It says: “This holds only for the restricted wreath product; which is the wreath product construction we are dealing with.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ends through Cayley graphs makes them invariants of the group

**Remember:** Count the different ways to run off to infinity.

*Makes the theorem clean to state or prove.* MSC 20F65 (Geometric group theory), 20E08. arXiv math.GR, math.GT. Level 3: graduate.

**Definition.** The number of ends of a connected graph in which each vertex has finitely many neighbours counts its ways to infinity. It is the largest number of infinite connected pieces left after removing a finite set of vertices. The ends of a finitely generated group are the ends of one of its Cayley graphs.

**Problem.** Freudenthal and Hopf: every finitely generated infinite group has 1, 2 or infinitely many ends. Stallings: a finitely generated group has more than one end exactly when it splits over a finite subgroup. Splitting means being an amalgamated free product or an HNN extension over that subgroup.

**How the definition helps.** The number of ends does not change under quasi-isometry, so it depends only on the group, and theorems about ends become theorems about groups. For example, ℤ has two ends, ℤ² has one, and a free group of rank 2 has infinitely many (our own). Stallings' theorem is the hard part; Stallings first proved it for torsion-free groups in 1968. One application is his proof that finitely generated groups of cohomological dimension one are free.

**Wikipedia:** [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry), [Stallings theorem about ends of groups](https://en.wikipedia.org/wiki/Stallings_theorem_about_ends_of_groups). It says: “The ends of a finitely generated group are defined to be the ends of the corresponding Cayley graph; this definition is independent of the choice of a finite generating set.”

**Sources:**

- [H. Freudenthal, Über die Enden diskreter Räume und Gruppen, Commentarii Mathematici Helvetici 17 (1944) 1–38](https://doi.org/10.1007/BF02566233)
- [J. R. Stallings, On torsion-free groups with infinitely many ends, Annals of Mathematics 88 (1968) 312–334](https://doi.org/10.2307/1970577)

### Homogeneous quasimorphisms ignore conjugation

**Remember:** Taking powers makes the bounded error from conjugation disappear.

*Rules out counterexamples.* MSC 20F65 (Geometric group theory), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** A real quasimorphism has a uniform bound on the absolute difference between f(xy) and f(x) + f(y). It is homogeneous if its value on any integer power is the exponent times its value on the element.

**Problem.** Homogeneous quasimorphisms are constant on conjugacy classes. Quasimorphisms without the power condition need not be.

**How the definition helps.** Homogeneity lets one divide away a bounded error to obtain exact conjugacy invariance (our own). Conjugation changes the value on any positive power by at most twice the addition error bound, since f(h⁻¹) = −f(h); divide by the exponent and let it grow (our own). In S₃ the indicator of one transposition is bounded, hence a quasimorphism, and it distinguishes conjugates (our own).

**Wikipedia:** [Quasimorphism](https://en.wikipedia.org/wiki/Quasimorphism). It says: “It is constant on conjugacy classes”

**Paper or page:** [On conjugation invariant norms, asymptotic cones, metric ultraproducts and contractibility](https://arxiv.org/abs/2203.10889v1). It says: “The homogenisation ψ̄ of a quasimorphism ψ : G → ℝ is a homogeneous quasimorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Marked limits preserve group laws

**Remember:** A failed law has a finite witness in the marked generators.

*True by definition.* MSC 20F65 (Geometric group theory), 20F70. arXiv math.GR. Level 3: graduate.

**Definition.** Mark each group by an ordered generating list of the same finite length. Convergence means that each word in these generators eventually equals the identity exactly when it does in the limit. Equivalently, the groups eventually agree on every fixed-radius neighborhood of the identity in their labeled Cayley graphs. These graphs have a directed edge for multiplication by each named generator.

**Problem.** A word law is an equation that holds for every substitution of group elements for its variables. A limit of marked groups satisfying the same word law also satisfies it.

**How the definition helps.** Eventual agreement passes each tested word equation to the limit (our own). Write the elements being tested as words in the marked generators and substitute these into the law (our own). The work moves to proving that word equality in a fixed finite range is determined by the corresponding labeled balls (our own).

**Paper or page:** [Bounded conciseness in the space of marked groups](https://arxiv.org/abs/2502.05070v1). It says: “have balls of radius R isomorphic as labeled directed graphs”

**Sources:** none listed. No primary source with a working link was found.

### Thin triangles survive quasi-isometry, so hyperbolic groups need no chosen generators

**Remember:** Some δ always works; which δ depends on the generators.

*Makes the theorem clean to state or prove.* MSC 20F67 (Hyperbolic groups and nonpositively curved groups). arXiv math.GR, math.MG. Level 3: graduate.

**Definition.** Gromov (1987): a finitely generated group is hyperbolic if its Cayley graph, with edges of length one, is δ-hyperbolic for some δ &gt; 0. This means that each side of every geodesic triangle lies within distance δ of the union of the other two sides.

**Problem.** Being hyperbolic is a property of the group, not of a generating set. A group is hyperbolic if and only if it acts properly discontinuously, with compact quotient, on a proper hyperbolic length space.

**How the definition helps.** Gromov chose a condition that survives quasi-isometry, that is, maps that distort distances by at most a fixed factor plus a constant. Cayley graphs for two finite generating sets are quasi-isometric, so hyperbolicity does not depend on the choice. The constant δ itself does change, so only the existence of some δ is a property of the group. The work moves into the theorem that a geodesic space quasi-isometric to a hyperbolic one is hyperbolic, which uses the Morse lemma.

**Wikipedia:** [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group), [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry). It says: “Thus we can legitimately speak of a finitely generated group G being hyperbolic without referring to a generating set.”

**Sources:**

- [M. Gromov, Hyperbolic groups, in Essays in Group Theory, MSRI Publications 8 (1987) 75–263](https://doi.org/10.1007/978-1-4613-9586-7_3)

### Comparing growth functions up to rescaling makes group growth independent of generators

**Remember:** Up to rescaling, how fast balls grow belongs to the group.

*Makes the theorem clean to state or prove.* MSC 20F69 (Asymptotic properties of groups), 20F65. arXiv math.GR. Level 3: graduate.

**Definition.** Fix a finite symmetric generating set of a group, and let b(n) be the number of elements that are products of at most n generators. Call two growth functions a and b equivalent if a(n/C) ≤ b(n) ≤ a(Cn) for some constant C. The growth rate of the group is the equivalence class of b.

**Problem.** The growth rate does not depend on the finite generating set. So polynomial growth, its degree, and exponential growth are properties of the group itself.

**How the definition helps.** Changing generators changes word lengths by at most a constant factor, and the equivalence is chosen to absorb exactly such factors. So 2ⁿ and 3ⁿ are equivalent, and all exponential rates form one class. With this, statements like Gromov's theorem on groups of polynomial growth have a meaning. What stays hard is to know which growth types occur.

**Wikipedia:** [Word metric](https://en.wikipedia.org/wiki/Word_metric), [Growth rate (group theory)](https://en.wikipedia.org/wiki/Growth_rate_%28group_theory%29). It says: “The bilipschitz equivalence of word metrics implies in turn that the growth rate of a finitely generated group is a well-defined isomorphism invariant of the group, independent of the choice of a finite generating set.”

**Sources:**

- [J. Milnor, A note on curvature and fundamental group, Journal of Differential Geometry 2 (1968) 1–7](https://doi.org/10.4310/jdg/1214501132)

### Dehn functions up to equivalence make linear isoperimetry mean hyperbolic

**Remember:** Up to rescaling, the area cost of relations belongs to the group.

*Makes the theorem clean to state or prove.* MSC 20F69 (Asymptotic properties of groups), 20F67. arXiv math.GR, math.MG. Level 3: graduate.

**Definition.** For a finite presentation, the area of a word that equals 1 is the least number of conjugates of relators whose product is the word. The Dehn function Dehn(n) is the largest area of such words of length at most n. Dehn functions are compared up to an equivalence that allows constant rescaling of the argument and of the value, and adding linear terms.

**Problem.** The equivalence class of the Dehn function depends only on the group, not on the finite presentation; it is even a quasi-isometry invariant. Gromov: a finitely presented group is hyperbolic if and only if its Dehn function is linear.

**How the definition helps.** Different finite presentations of a group change the area of words only by bounded rescalings, so the equivalence class is a property of the group. Without the equivalence, no statement like 'linear Dehn function' could be about the group. Dehn's algorithm for closed surface groups of genus at least two shows that Dehn(n) ≤ n for their standard presentations. The hard part is Gromov's isoperimetric gap: a Dehn function that grows slower than n² is already linear.

**Wikipedia:** [Dehn function](https://en.wikipedia.org/wiki/Dehn_function), [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group). It says: “A finitely presented group is word-hyperbolic group if and only if its Dehn function is equivalent to n, that is, if and only if every finite presentation of this group satisfies a linear isoperimetric inequality.”

**Sources:**

- [M. Gromov, Hyperbolic groups, in Essays in Group Theory, MSRI Publications 8 (1987) 75–263](https://doi.org/10.1007/978-1-4613-9586-7_3)
- [M. Dehn, Über unendliche diskontinuierliche Gruppen, Mathematische Annalen 71 (1911) 116–144](https://doi.org/10.1007/BF01456932)

### Defining Borel subgroups by complete quotients makes conjugacy short

**Remember:** A fixed coset puts one Borel subgroup inside a conjugate of the other.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups). arXiv math.AG, math.GR. Level 3: graduate.

**Definition.** Over an algebraically closed field, let G be a connected linear algebraic group. Define a Borel subgroup B as a closed, connected, solvable subgroup with G/B complete, that is, proper over the field. Solvable means that repeated commutator subgroups end at the trivial group. The usual definition takes B maximal among closed, connected, solvable subgroups.

**Problem.** Over an algebraically closed field, any two Borel subgroups of a connected linear algebraic group are conjugate.

**How the definition helps.** The definition puts a complete variety G/B in place, so the Borel fixed point theorem applies at once (our own argument). B′ acts on G/B and, being connected and solvable, fixes a coset gB, so B′ lies in gBg⁻¹ (our own). Likewise B lies in a conjugate of B′, so equal dimensions and connectedness give B′ = gBg⁻¹ (our own). The work goes into the fixed point theorem and into proving that the two definitions agree (Milne 18.4 and 18.12).

**nLab:** [Borel subgroup](https://ncatlab.org/nlab/show/Borel+subgroup). It says: “the Borel subgroup B ⊂ G is a solvable connected subgroup such that G/B is a complete (equivalently projective) variety.”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), Corollary 18.4 and Theorem 18.12 (§18a–b)](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Defining Langlands duals by swapping root data makes double duals obvious

**Remember:** Swapping the two halves of a root datum twice changes nothing.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups), 20G20. arXiv math.RT, math.AG. Level 3: graduate.

**Definition.** Define the Langlands dual of a connected complex reductive group by its root datum with the two halves swapped. The root datum lists the characters and the one-parameter subgroups of a maximal torus, and the roots and the coroots.

**Problem.** The Langlands dual of the Langlands dual of a connected complex reductive group is isomorphic to the original group.

**How the definition helps.** With the swap definition, the double dual has literally the same root datum as the group. In our own account, the work is in the classification of reductive groups by root data. Existence gives a group for each root datum, so the dual is defined at all. The isomorphism theorem says that the root datum determines the group up to isomorphism.

**nLab:** [geometric Satake equivalence](https://ncatlab.org/nlab/show/geometric+Satake+equivalence). It says: “The geometric Satake equivalence categorifies the Satake isomorphism in the setting of local geometric Langlands.”

**Wikipedia:** [Root datum](https://en.wikipedia.org/wiki/Root_datum). It says: “by switching the characters with the 1-parameter subgroups, and switching the roots with the coroots.”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), §22l (the isogeny theorem) and Chapter 25 (the existence theorem)](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Defining parabolics by complete quotients makes subgroups containing Borels parabolic

**Remember:** A complete quotient maps onto every coarser quotient, which is then complete.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups), 14M17. arXiv math.AG, math.GR. Level 3: graduate.

**Definition.** Over an algebraically closed field, a closed subgroup P of a connected linear algebraic group G is parabolic if G/P is complete, the algebraic analogue of compact. A Borel subgroup is a closed connected solvable subgroup B with G/B complete. The usual definition takes B maximal among closed connected solvable subgroups.

**Problem.** Over an algebraically closed field, a closed subgroup that contains a Borel subgroup is parabolic. So its quotient is projective.

**How the definition helps.** With both definitions, G/B maps onto G/P, and the image of a complete variety is complete (Milne, proof of Theorem 18.21). The work goes into the Borel subgroups. One must prove that a maximal connected solvable subgroup has a complete quotient (Milne Theorem 18.12). The step from complete to projective uses Milne 9.39.

**nLab:** [parabolic subgroup](https://ncatlab.org/nlab/show/parabolic+subgroup), [Borel subgroup](https://ncatlab.org/nlab/show/Borel+subgroup). It says: “A minimal (with respect to inclusion) parabolic subgroup of a linear algebraic group is called a Borel subgroup; in fact, given a Borel subgroup B, any closed subgroup P ⊃ B is parabolic. \| This is equivalent, and taken as a definition for arbitrary algebraic groups, to saying that the Borel subgroup B ⊂ G is a solvable connected subgroup such that G/B is a complete (equivalently projective) variety.”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), Definition 18.19 and Theorem 18.21 (§18b)](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Defining unipotent groups inside unitriangular matrices makes them nilpotent

**Remember:** Each commutator moves one step farther from the diagonal.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups), 20F18. arXiv math.AG, math.GR. Level 3: graduate.

**Definition.** Define a unipotent algebraic group as one that embeds as a closed subgroup of the upper triangular matrices with ones on the diagonal. The other definition asks that every element is unipotent, meaning that all its eigenvalues equal one.

**Problem.** Every unipotent algebraic group is nilpotent. So its repeated commutators with the whole group end at the identity.

**How the definition helps.** The unitriangular group is nilpotent, and a subgroup of a nilpotent group is nilpotent. Milne gives this proof (Proposition 15.23). In our own account, the work moves to the Kolchin theorem. It puts a group of unipotent matrices into triangular form in one common basis. Wikipedia notes that the converse fails, because the diagonal matrices are nilpotent but not unipotent.

**Wikipedia:** [Unipotent](https://en.wikipedia.org/wiki/Unipotent). It says: “In particular any unipotent group is a nilpotent group, though the converse is not true”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), Proposition 15.23 and 3.28](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Building Tamagawa measure from one global form makes it independent of scaling

**Remember:** One global scalar changes local volumes by factors whose product is one.

*True by definition.* MSC 20G35 (Linear algebraic groups over adèles and other rings and schemes), 11R56. arXiv math.NT. Level 3: graduate.

**Definition.** Let k be a global field, which is a number field or a function field of a curve over a finite field. Let G be a semisimple group over k, with a top-degree invariant differential form ω defined over k. At each place v, an absolute value of k up to equivalence, ω gives a translation-invariant (Haar) measure on G(kᵥ). The Tamagawa measure is the product of these measures on G(𝔸), the group of points over the adeles.

**Problem.** Replacing ω by cω, for a nonzero c in k, does not change the Tamagawa measure.

**How the definition helps.** Because one global form gives all local measures, rescaling changes them by linked factors that cancel. Separate normalizations at each place would not tie the local factors together (our own). At each place v, the local measure changes by the factor \|c\|ᵥ (our own). The product of all these factors is 1, by the product formula for a global field. The work goes into the product formula and into showing that the product of local measures converges for semisimple G (our own).

**Wikipedia:** [Tamagawa number](https://en.wikipedia.org/wiki/Tamagawa_number). It says: “using the product formula for valuations.”

**Sources:**

- [André Weil, Adeles and Algebraic Groups (1982)](https://doi.org/10.1007/978-1-4684-9156-2)

### Finitely generated linear groups are residually finite

**Remember:** Finite matrix generators let finite quotients detect nonidentity elements.

*Rules out counterexamples.* MSC 20H20 (Other matrix groups over fields), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** A linear group is a subgroup of the invertible matrices of some fixed finite size over a field. It is finitely generated if it is generated as a group by finitely many matrices.

**Problem.** Every finitely generated complex linear group is residually finite. Thus each nonidentity element survives in some finite quotient.

**How the definition helps.** Finite generation places the entries of all group elements in one finitely generated ring, in our own explanation. Malcev's proof reduces this ring to a finite field where a chosen matrix still differs from the identity. In our own counterexample, the unitriangular two-by-two matrices with rational upper entry form a copy of the additive group ℚ. Every rational is n times another rational, so every homomorphism from ℚ to a finite group of order n is trivial.

**Paper or page:** [Residual finiteness and discrete subgroups of Lie groups](https://arxiv.org/abs/2407.07680v2). It says: “Let $\\Gamma$ be a finitely generated subgroup of $\\operatorname{GL}<sub>N</sub>(\\mathbb{C})$ for some $N \\ge 1$. Then $\\Gamma$ is residually finite.”

**Sources:** none listed. No primary source with a working link was found.

### Classifying spaces give graded commutativity

**Remember:** The group cup product inherits the sign rule from space cohomology.

*True by definition. Confidence: medium.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a discrete group G, choose a connected cell complex BG with fundamental group G and contractible universal cover. Define its integral group cohomology ring as the integer cohomology of BG with its usual multiplication, the cup product.

**Problem.** The integral cohomology ring of a group is graded commutative. Interchanging factors of degrees p and q introduces a minus sign precisely when both degrees are odd.

**How the definition helps.** The space definition gives the sign rule immediately from graded commutativity of the cup product in ordinary cohomology (our own). To obtain the same rule for the algebraic definition, one must identify the products, as well as the groups (our own). That comparison relates cohomology of BG to the calculation using functions on tuples of group elements (our own).

**Wikipedia:** [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “The group cohomology of a discrete group G is the singular cohomology of a suitable space having G as its fundamental group”

**Sources:** none listed. No primary source with a working link was found.

### Cohomological dimension decreases on restriction

**Remember:** A group ring stays free over the group ring of a subgroup.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** Fix a nonzero ring R with identity, and let G act trivially on R. A projective resolution of R is an exact sequence ending in R whose preceding terms are direct summands of free modules over the group ring. Cohomological dimension over R is the least length of such a resolution, or infinity if none has finite length.

**Problem.** The cohomological dimension of a subgroup over R is at most that of the whole group over R.

**How the definition helps.** Using resolution length lets the same resolution give a bound for every subgroup (our own). Choosing coset representatives gives a basis for the larger group ring over the smaller one (our own). Free modules therefore stay free, their direct summands stay projective, and the sequence stays exact (our own). The comparison theorem identifies this length with the supremum of degrees that can have nonzero cohomology (our own).

**Wikipedia:** [Cohomological dimension](https://en.wikipedia.org/wiki/Cohomological_dimension). It says: “if the trivial RG-module R has a projective resolution of length n”

**Sources:** none listed. No primary source with a working link was found.

### Cohomology as Ext makes Shapiro’s lemma an adjunction

**Remember:** The maps in a resolution match term by term under coinduction.

*True by definition.* MSC 20J06 (Cohomology of groups), 18G15. arXiv math.GR, math.KT. Level 3: graduate.

**Definition.** Write ℤ\[G\] for the group algebra with integer coefficients. Define group cohomology as Extⁿ from the trivial module ℤ to the coefficient module over ℤ\[G\]. Here Extⁿ is computed by taking maps out of a projective resolution, an exact sequence of projective modules ending in ℤ. The group-cochain definition instead uses functions of n group elements with a specified differential.

**Problem.** Let H be a subgroup of G and N a left ℤ\[H\]-module. The cohomology of G with coefficients in the coinduced module, the ℤ\[H\]-linear maps ℤ\[G\] → N, equals the cohomology of H with coefficients in N.

**How the definition helps.** With Ext, Shapiro's lemma is the same correspondence of maps in every term of a resolution (our own). Coinduction is right adjoint to restriction, so maps into the coinduced module are the same as restricted maps into N (our own). A projective resolution of ℤ over ℤ\[G\] stays projective over ℤ\[H\], because ℤ\[G\] is free over ℤ\[H\] by the coset decomposition (our own). The correspondence respects the differentials, so the two complexes give the same cohomology (our own).

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology). It says: “For A an abelian group equipped with a G-action, the degree-n group cohomology of G with coefficients in A is the nth-Ext-group”

**Wikipedia:** [Shapiro's lemma](https://en.wikipedia.org/wiki/Shapiro%27s_lemma). It says: “If S is projective as a left R-module, then:
\\operatorname{Ext}<sup>n<sub>R</sub></sup>({}<sub>R</sub> M,N) \\cong \\operatorname{Ext}<sup>n<sub>S</sub></sup>(M,\\operatorname{Hom}<sub>R</sub>(S,N))”

**Sources:** none listed. No primary source with a working link was found.

### Coset sums give relative cohomology

**Remember:** The kernel of the coset sum measures the difference between the two cohomologies.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a subgroup H of G, form the free abelian group on the cosets G/H, with G acting by left multiplication. Let D be the kernel of the map adding the coefficients. For n ≥ 1, define relative cohomology with coefficients M as Ext in degree n − 1 from D to M over ℤ\[G\]. Ext gives the higher groups obtained by applying module homomorphisms into M to a projective resolution, an exact replacement by summands of free modules.

**Problem.** The relative cohomology of a group pair fits into a long exact sequence with the cohomologies of G and H.

**How the definition helps.** The kernel definition gives the desired sequence directly from the long exact sequence for Ext (our own). It avoids constructing connecting maps on functions of group elements (our own). The sum map gives a short exact sequence from D through the coset module to ℤ (our own). Shapiro’s lemma identifies Ext from the coset module with the cohomology of H (our own).

**Paper or page:** [Relative cohomological dimension of a relatively hyperbolic pair](https://arxiv.org/abs/2505.04349v1). It says: “For any group pair (G,H) and any G-module M, there is a long exact sequence in cohomology:”

**Sources:**

- [R. Bieri and B. Eckmann, Relative homology and Poincaré duality for group pairs, 1978](https://doi.org/10.1016/0022-4049(78)90012-9)

### Group cohomology as a derived functor gets long exact sequences for free

**Remember:** Group cohomology is taking invariants, done correctly up to homotopy.

*True by definition. Confidence: medium.* MSC 20J06 (Cohomology of groups), 18G10. arXiv math.GR, math.AT. Level 3: graduate.

**Definition.** Let G be a group and A a G-module. The group cohomology Hⁿ(G, A) is Extⁿ(ℤ, A), computed over the group ring ℤ\[G\]. These groups are the right derived functors of the invariants functor, which sends A to Aᴳ = Hom(ℤ, A) over ℤ\[G\]. Equivalently, Hⁿ(G, A) is the cohomology of the classifying space BG with local coefficients in A.

**Problem.** Every short exact sequence of G-modules gives a long exact sequence in group cohomology. The cohomology does not depend on the choice of projective resolution.

**How the definition helps.** Derived functors have these properties in general, so group cohomology gets them by definition. Right derived functors of a left exact functor form a universal δ-functor (Grothendieck), a family with connecting maps that give long exact sequences and that is unique up to unique isomorphism. So computations can use any convenient projective resolution of ℤ, such as the periodic resolution for a cyclic group. That H² classifies extensions is a separate theorem, proved with explicit cocycles.

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology), [derived functor in homological algebra](https://ncatlab.org/nlab/show/derived+functor+in+homological+algebra), [delta-functor](https://ncatlab.org/nlab/show/delta-functor), [Ext](https://ncatlab.org/nlab/show/Ext). It says: “powerful tools of homological algebra can be applied and group cohomology of ordinary groups may be computed in terms of of Ext-functors.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique (I), Tôhoku Math. J. 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Tate cohomology joins homology and cohomology so reciprocity is one isomorphism

**Remember:** Glue homology below and cohomology above with the norm map.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups), 11S31. arXiv math.GR, math.NT. Level 3: graduate.

**Definition.** For a finite group G and a G-module A, Tate cohomology agrees with cohomology in degrees 1 and up. In degree 0 it is the fixed points modulo the norms. In degree −1 it is the kernel of the norm modulo the elements σa − a. In degrees −2 and below it is homology, shifted by one.

**Problem.** Suppose that for every subgroup H, H¹(H, A) = 0 and H²(H, A) is cyclic of order \|H\|, generated by the restriction of one class. Then cup product with that class is an isomorphism from Ĥⁿ(G, ℤ) to Ĥⁿ⁺²(G, A) for every n.

**How the definition helps.** With one sequence in all degrees, a single cup product can be an isomorphism everywhere, including negative degrees. In degree −2, the group with ℤ coefficients is the abelianization of G (our own). The isomorphism then gives the local reciprocity law: K× modulo norms is isomorphic to the abelianized Galois group (our own). Ordinary cohomology has no degree −2, so this case could not be stated.

**Wikipedia:** [Tate cohomology group](https://en.wikipedia.org/wiki/Tate_cohomology_group). It says: “Tate cohomology groups are a slightly modified form of the usual cohomology groups of a finite group that combine homology and cohomology groups into one sequence.”

**Sources:**

- [John Tate, The higher dimensional cohomology groups of class field theory, Annals of Mathematics 56 (1952)](https://doi.org/10.2307/1969801)

### Two-stage invariants give spectral sequences

**Remember:** Take fixed elements first under the kernel and then under the quotient.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** A G-module M is an abelian group on which G acts by automorphisms. Group cohomology measures in successive degrees how taking fixed elements can fail to preserve exact sequences of modules. One can also compute it from functions on tuples of group elements.

**Problem.** For N normal in G, a spectral sequence computes group cohomology in stages, starting with Hᵖ(G/N, Hᑫ(N, M)) on its second page. The final terms of total degree n describe successive quotients of a chain of subgroups in Hⁿ(G, M).

**How the definition helps.** The fixed-element definition splits the calculation into two steps, so the spectral sequence for composed functors applies. First take elements fixed by N, then take those fixed by G/N. The theorem requires modules used to resolve M to have no higher quotient cohomology after the first step (our own). One uses injective modules, meaning maps into them extend from any submodule to the whole module (our own). Taking N-fixed elements preserves injectivity because viewing a quotient action as a G-action preserves inclusions (our own).

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology). It says: “This decomposition gives rise to a Grothendieck spectral sequence for the group cohomology”

**Sources:** none listed. No primary source with a working link was found.

### Virtual dimension handles torsion

**Remember:** Pass to a torsion-free subgroup before measuring dimension.

*Rules out counterexamples.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** The integral cohomological dimension of a group is the largest degree with nonzero group cohomology for some coefficient module. If G has a torsion-free subgroup H of finite index, the virtual cohomological dimension of G is the integral cohomological dimension of H. Torsion-free means that only the identity has finite order.

**Problem.** The group SL₂(ℤ) has virtual cohomological dimension one but infinite integral cohomological dimension.

**How the definition helps.** Passing to a torsion-free subgroup removes the obstruction from elements of finite order (our own). In SL₂(ℤ), the negative identity generates a subgroup of order two with nonzero integer cohomology in every positive even degree (our own). Cohomological dimension cannot increase on passing to a subgroup, so SL₂(ℤ) has infinite dimension (our own). It has a nontrivial free subgroup of finite index, and such groups have dimension one (our own). Independence of the chosen torsion-free subgroup is a separate theorem.

**nLab:** [virtual cohomological dimension](https://ncatlab.org/nlab/show/virtual+cohomological+dimension). It says: “all such subgroups have the same cohomological dimension; this common dimension is called the virtual cohomological dimension of G”

**Sources:**

- [A. Borel and J.-P. Serre, Corners and arithmetic groups, 1973](https://doi.org/10.1007/bf02566134)

### Defining free groupoids by a universal property makes them preserve pushouts

**Remember:** Glue the graphs first or freely add inverse arrows first.

*True by definition.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18A30. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** The free groupoid on a directed graph is defined by a universal property. Each map from the graph into a groupoid extends uniquely to a functor. A concrete construction uses reduced words in the edges and their formal inverses.

**Problem.** The free groupoid on a pushout of directed graphs is the pushout of the free groupoids. A pushout glues two objects along a common part.

**How the definition helps.** The universal property makes the free groupoid a left adjoint, and left adjoints preserve all colimits, including pushouts. The nLab states that the free groupoid is left adjoint to the functor that forgets composition and keeps the graph. With reduced words alone, one would have to describe the glued groupoid directly, which is hard. The real work is in proving that reduced words satisfy the universal property; this account is our own.

**nLab:** [free groupoid](https://ncatlab.org/nlab/show/free+groupoid). It says: “This construction is the left adjoint free construction to the forgetful functor that sends a groupoid to its underlying directed graph.”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence, not isomorphism, makes every groupoid a disjoint union of groups

**Remember:** Keep one object per component and keep all its symmetries.

*Makes the theorem clean to state or prove.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** A groupoid is a category in which every arrow has an inverse. Call two groupoids the same when they are equivalent as categories. An equivalence is a functor with an inverse up to natural isomorphism.

**Problem.** With the axiom of choice, every groupoid is equivalent to a disjoint union of one-object groupoids. Each one-object part is the symmetry group of one object in a component. The claim fails for isomorphism, because a component can have many objects.

**How the definition helps.** Equivalence ignores how many objects a component has, so each component can shrink to one object. The nLab states the result and proves it by choosing one object in each component. In our own summary, the inclusion of the chosen objects is full, faithful and meets every isomorphism class. A standard theorem says that such a functor is an equivalence. That theorem, which uses choice to build an inverse, holds the real work.

**nLab:** [groupoid](https://ncatlab.org/nlab/show/groupoid). It says: “every groupoid is equivalent to a disjoint union of group deloopings”

**Sources:** none listed. No primary source with a working link was found.

### Representations as functors are invariant under equivalence of groupoids

**Remember:** An inverse up to isomorphism still gives inverse changes of representation.

*True by definition.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** Define a linear representation of a groupoid as a functor to vector spaces. It gives a vector space for each object and a linear isomorphism for each arrow. A group-based description picks one object in each component and uses its symmetry group.

**Problem.** Equivalent groupoids have equivalent categories of linear representations. So a connected groupoid has the same representations as the symmetry group of any one of its objects.

**How the definition helps.** As functors, representations can be precomposed with an equivalence, so invariance follows at once. Precomposing with the equivalence and with its inverse up to isomorphism gives inverse functors up to natural isomorphism. The nLab defines representations in this way. The nLab page on groupoids states that groupoid representations are tuples of group representations. The real work for that is the theorem that every groupoid is equivalent to a disjoint union of groups.

**nLab:** [groupoid representation](https://ncatlab.org/nlab/show/groupoid+representation), [groupoid](https://ncatlab.org/nlab/show/groupoid). It says: “A linear representation of 𝒢 is a groupoid homomorphism (functor)”

**Sources:** none listed. No primary source with a working link was found.

### The action groupoid has unique arrow lifts, which characterize group actions

**Remember:** Keep each group label and the source determines the target.

*True by definition. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** For a group G acting on a set S, the action groupoid has the points of S as objects. For each point x and each g in G, it has one arrow labelled g from x to gx. The orbit set keeps only the components.

**Problem.** The projection from the action groupoid to the one-object groupoid of G has unique lifting. For each object x and each g, exactly one arrow starts at x and lies over g. Conversely, every functor to the one-object groupoid of G with unique lifting comes from an action, up to isomorphism.

**How the definition helps.** The definition puts exactly one arrow labelled g at each source, so unique lifting holds by definition. The nLab states this property and calls such maps covering morphisms of groupoids. The converse is our own: let g send x to the target of the unique lift of g from x. Composition of lifts then gives the laws of an action. This converse holds the real work.

**nLab:** [action groupoid](https://ncatlab.org/nlab/show/action+groupoid). It says: “Notice also that an action of G on the set S gives rise to a morphism p : S ⋊ G → G which has the property of unique path lifting”

**Sources:** none listed. No primary source with a working link was found.

### The double coset groupoid keeps the stabilizers H ∩ gKg⁻¹

**Remember:** Keep the arrows and the subgroup intersections become stabilizers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18N10. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** For subgroups H and K of G, let H × K act on G by (h, k)·g = hgk⁻¹. Use the action groupoid of this action. The ordinary set of double cosets keeps only the orbits.

**Problem.** The components of this groupoid are the double cosets HgK. The symmetry group of g is isomorphic to H ∩ gKg⁻¹.

**How the definition helps.** The groupoid keeps the arrows, so the stabilizers become symmetry groups that a set of double cosets cannot express. In our own check, (h, k) fixes g when hgk⁻¹ = g, that is, when k = g⁻¹hg. Then h ↦ (h, g⁻¹hg) identifies H ∩ gKg⁻¹ with the stabilizer. The nLab defines this groupoid as a homotopy pullback, a pullback that matches objects up to isomorphism. Matching that definition with the action groupoid is the real work, and our account of it is our own.

**nLab:** [double coset](https://ncatlab.org/nlab/show/double+coset), [2-pullback](https://ncatlab.org/nlab/show/2-pullback). It says: “can be defined as the homotopy pullback of maps of delooped groups”

**Sources:** none listed. No primary source with a working link was found.

### The loop groupoid of a group shows centralizers as symmetry groups

**Remember:** An arrow conjugates, and a loop commutes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 20E45. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** For a group G, the loop groupoid has the elements of G as objects. An arrow h from g goes to h⁻¹gh. The set of conjugacy classes keeps only the components and forgets these arrows.

**Problem.** The components of the loop groupoid are the conjugacy classes of G. The symmetry group of an object g is its centralizer, the set of elements that commute with g.

**How the definition helps.** The groupoid keeps the conjugating elements, so the centralizer becomes a symmetry group that a set of classes cannot express. The nLab gives these objects and arrows. In our own check, an arrow h from g to itself means h⁻¹gh = g, so h commutes with g. The nLab defines the loop groupoid as the free loop space object of the one-object groupoid of G. Matching that definition with the explicit description is the real work, and our account of it is our own.

**nLab:** [loop groupoid](https://ncatlab.org/nlab/show/loop+groupoid). It says: “This is the groupoid whose objects are the elements of G, and whose morphisms are of the form”

**Sources:** none listed. No primary source with a working link was found.

### The universal property makes group completion preserve direct sums

**Remember:** Maps out of a completed sum split into maps out of the two monoids.

*True by definition.* MSC 20M14 (Commutative semigroups), 18A40. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The group completion K(M) of a commutative monoid M is an abelian group with a monoid map i from M. Every monoid map from M to an abelian group factors uniquely through i by a group homomorphism. The concrete construction uses pairs (m, n) to represent m − n. Pairs (m, n) and (m′, n′) agree if m + n′ + k = m′ + n + k for some k in M.

**Problem.** The group completion of M ⊕ N is naturally isomorphic to K(M) ⊕ K(N).

**How the definition helps.** The universal property lets us compare maps out of the two groups without calculating with pairs. In our own argument, a monoid map from M ⊕ N to a group is a pair of monoid maps. Each one extends uniquely to a group homomorphism from its completion. Such pairs of group homomorphisms are exactly the maps out of K(M) ⊕ K(N). The work moves into proving that the construction with pairs has the universal property.

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “The forgetful functor U: Ab → CMon from the category Ab to the category CMon has a left adjoint F (the corresponding free functor), the group completion functor”

**Wikipedia:** [Grothendieck group](https://en.wikipedia.org/wiki/Grothendieck_group). It says: “one thus obtains a functor from the category of commutative monoids to the category of abelian groups which sends the commutative monoid M to its Grothendieck group K. This functor is left adjoint to the forgetful functor”

**Sources:** none listed. No primary source with a working link was found.

### Naming the inverse operation makes inverse semigroups a variety

**Remember:** Name the inverse as an operation so products and quotients preserve the equations.

*True by definition. Confidence: medium.* MSC 20M18 (Inverse semigroups), 08B20. arXiv math.GR. Level 3: graduate.

**Definition.** An inverse semigroup is a set with an associative product in which each x has exactly one y with xyx = x and yxy = y. In the equational definition, take the inverse x⁻¹ as a unary operation. Require associativity and the equations xx⁻¹x = x and (x⁻¹)⁻¹ = x. Also require xx⁻¹yy⁻¹ = yy⁻¹xx⁻¹.

**Problem.** Inverse semigroups form a variety, a class defined by equations, once inverse is a specified operation. They have free inverse semigroups on every nonempty set of generators.

**How the definition helps.** Naming the inverse makes the axioms equations, so quotients, subalgebras and products preserve them. A subalgebra must now be closed under inverse as well as multiplication. In our own argument, the general free algebra theorem then gives existence without a special construction. The work is to prove that these equations give exactly the semigroups with unique inverses.

**Wikipedia:** [Inverse semigroup](https://en.wikipedia.org/wiki/Inverse_semigroup). It says: “A presentation of the free inverse semigroup on a set X may be obtained by considering the free semigroup with involution, where involution is the taking of the inverse, and then taking the quotient by the Vagner congruence”

**Sources:** none listed. No primary source with a working link was found.

### Monoid actions as functors form a presheaf topos

**Remember:** Actions are functors on one-object categories, so the presheaf theorem applies.

*True by definition.* MSC 20M30 (Representation of semigroups; actions of semigroups on sets), 18F10. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** A monoid M is a set with an associative product and an identity. Regard M as a category with one object, with elements as maps and multiplication as composition. Define a left action as a functor from this category to sets, and maps between actions as natural transformations. The elementwise definition instead uses 1x = x and (mn)x = m(nx).

**Problem.** The category of left actions of any monoid M on sets is a Grothendieck topos. This means it is equivalent to a category of sheaves on a small category with a notion of covering.

**How the definition helps.** The functor definition identifies actions with presheaves on the opposite of the one-object category for M, and natural transformations with maps of sets that commute with the action. This avoids constructing the topos operations separately for monoid actions. The work moves into the general theorem that presheaves on a small category form a topos. Our own check uses that the functor laws give exactly the two elementwise action laws.

**nLab:** [action](https://ncatlab.org/nlab/show/action), [category](https://ncatlab.org/nlab/show/category). It says: “The category of actions of M in C is then defined to be the functor category C<sup>(𝐁M)</sup>. When C is Set this is called MSet.”

**Wikipedia:** [Monoid](https://en.wikipedia.org/wiki/Monoid). It says: “A monoid is, essentially, the same thing as a category with a single object.”

**Sources:** none listed. No primary source with a working link was found.

### The syntactic congruence makes its monoid divide every recognizer

**Remember:** The broadest equivalence that respects the language gives the smallest recognizing monoid.

*True by definition.* MSC 20M35 (Semigroups in automata theory, linguistics, etc.), 68Q70. arXiv cs.FL, math.GR. Level 3: graduate.

**Definition.** The syntactic congruence of a language L identifies words u and v if xuy and xvy always have the same membership in L. This must hold for every pair of words x and y. The equivalence classes form the syntactic monoid under concatenation. A monoid recognizes L if a homomorphism from words to that monoid makes L the preimage of a subset.

**Problem.** The syntactic monoid of L is a quotient of a submonoid of any monoid that recognizes L. A language therefore has a finite recognizing monoid if and only if its syntactic monoid is finite.

**How the definition helps.** Defining equivalence by all contexts makes it broad enough to identify any words sent to the same element by a recognizing map. In our own argument, the image of that map is a submonoid, and sending each image element to its syntactic class gives the quotient. The work moves into checking that equivalence in every context respects concatenation.

**Wikipedia:** [Syntactic monoid](https://en.wikipedia.org/wiki/Syntactic_monoid). It says: “It can be shown that it is the smallest monoid that recognizes S; that is, M(S) recognizes S, and for every monoid N recognizing S, M(S) is a quotient of a submonoid of N.”

**Sources:** none listed. No primary source with a working link was found.

### Making division an operation turns quasigroups into an equational theory

**Remember:** Make division an operation, and the axioms become equations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20N05 (Loops, quasigroups), 08B05. arXiv math.RA. Level 3: graduate.

**Definition.** A quasigroup is a set with three binary operations: product, right division / and left division ∖. They satisfy four equations: (x / y) y = x, x (x ∖ y) = y, (x y) / y = x and x ∖ (x y) = y.

**Problem.** With the two divisions as operations, quasigroups form a variety, a class of algebras defined by equations only. This matches the first definition, in which a x = b and y a = b have unique solutions. So quasigroups can be defined inside any category with finite products.

**How the definition helps.** A unique-solution condition is not an equation, but four equations can be read in any category with finite products. Making the two divisions into operations turns unique solvability into these equations; without associativity it cannot be derived from the product alone. Then quasigroups are the models of a Lawvere theory, so they can be internalized in any cartesian monoidal category. By Birkhoff's theorem, subalgebras, products and homomorphic images of quasigroups are again quasigroups.

**nLab:** [quasigroup](https://ncatlab.org/nlab/show/quasigroup). It says: “Thus quasigroups are described by a Lawvere theory and can therefore be internalized into any cartesian monoidal category.”

**Sources:**

- [R. H. Bruck, A Survey of Binary Systems, Springer (1958)](https://doi.org/10.1007/978-3-662-35338-7)

### Cores and weights of multipartitions classify blocks of Ariki–Koike algebras

**Remember:** Combine the charged partitions first, then strip hooks from the single partition.

*Makes the theorem clean to state or prove.* MSC 20C08 (Hecke algebras and their representations), 05E10. arXiv math.RT, math.CO. Level 4: research.

**Definition.** A multipartition is a list of integer partitions, and a multicharge assigns an integer to each entry. The Uglov map encodes these data as a single partition. Remove strips of e boxes along the partition boundary until no more can be removed. The e-core is what remains, and the e-weight counts the strips.

**Problem.** Fix an Ariki–Koike algebra whose quantum parameter has finite order e of at least two. Two multipartitions label modules in the same block exactly when their e-cores and e-weights agree. A block is an indecomposable two-sided summand of the algebra.

**How the definition helps.** The Uglov map lets the classification use the familiar core and weight of one partition for an arbitrary multicharge. The two quantities do not need a separate definition for special choices of charge. The work is proving the block classification and agreement with Fayers's earlier definition of the weight.

**Paper or page:** [Cores and weights of multipartitions and blocks of Ariki-Koike algebras](https://arxiv.org/abs/2408.10626v3). It says: “We do not place any restriction on the multicharge for these definitions. We show how these definitions lead to the definition of the e-core and the e-weight of a block”

**Sources:**

- [Yanbo Li, Kai Meng Tan, Cores and weights of multipartitions and blocks of Ariki-Koike algebras, arXiv:2408.10626 (2025)](https://arxiv.org/abs/2408.10626v3)

### Equal traces of powers detect representations agreeing on a finite-index subgroup

**Remember:** Take powers before taking traces.

*Makes the theorem clean to state or prove.* MSC 20C15 (Ordinary representations and characters), 11F80. arXiv math.NT, math.RT. Level 4: research.

**Definition.** The m-power character of a representation ρ sends g to the trace of ρ(gᵐ). Two representations of a group are potentially equivalent if they become isomorphic on some subgroup of finite index.

**Problem.** Let ρ₁ and ρ₂ be semisimple representations of any group in GLₙ(F), where F has characteristic zero. Semisimple means a direct sum of irreducible representations. They are potentially equivalent exactly when their m-power characters agree for some m.

**How the definition helps.** The power character turns a search for a subgroup into a comparison of ordinary trace functions. In our own argument, suppose the representations agree on a normal subgroup of index m. Every gᵐ lies in that subgroup, so the m-power characters agree. The converse is the hard direction. The paper uses the result to extend Faltings' finiteness criteria.

**Paper or page:** [Finiteness theorems for potentially equivalent Galois representations: extension of Faltings' finiteness criteria](https://arxiv.org/abs/2012.15598v2). It says: “potential equivalence of a representation ρ is determined by an equality of an m-power character g ↦ Tr(ρ(gᵐ)) for some natural number m”

**Sources:**

- [Plawan Das, C. S. Rajan, Finiteness theorems for potentially equivalent Galois representations: extension of Faltings' finiteness criteria, arXiv:2012.15598v2 (2021)](https://arxiv.org/abs/2012.15598v2)

### For free group automorphisms, real pretrees detect exactly the exponentially growing elements

**Remember:** Keep the intervals and drop the distances when growth rates differ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20E08 (Groups acting on trees), 20E36, 20F65. arXiv math.GR, math.GT. Level 4: research.

**Definition.** A real tree is a metric space in which any two points are joined by a unique arc, which is a geodesic. A real pretree keeps only betweenness, that is, which points lie in the interval between two others, and has no distance. Its intervals are ordered like intervals of real numbers. An element acts loxodromically if it translates along an invariant line instead of fixing a point.

**Problem.** Let φ be an automorphism of a free group F of finite rank. The paper builds a rigid action of F on a real pretree with trivial arc stabilizers. Its loxodromic elements are exactly those whose conjugacy class length grows exponentially under iteration of φ.

**How the definition helps.** Without a metric, the construction can blow up a tree action using other trees whose length scales need not match. In our own explanation, a metric tree built from the fastest-growing part of φ sees only that part. Elements that grow exponentially only elsewhere then fix a point of that tree. The paper blows up an isometric action on a real tree with respect to other real trees. All the work uses intervals, and topology plays no role.

**Paper or page:** [Limit pretrees for free group automorphisms: existence](https://arxiv.org/abs/2112.10846v3). It says: “get a rigid action on a treelike structure known as a real pretree. Topology plays no role in this construction as all the work is done in the language of pretrees (intervals).”

**Sources:**

- [Jean Pierre Mutanguha, Limit pretrees for free group automorphisms: existence, Forum Math. Sigma 12 (2024) e57](https://arxiv.org/abs/2112.10846v3)

### Strong completeness forces continuity

**Remember:** Finite quotients cannot forget the topology of a strongly complete group.

*Rules out counterexamples.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 4: research.

**Definition.** A profinite group is an inverse limit of finite discrete groups, with the topology inherited from their product. It is strongly complete if every subgroup of finite index is open. A group is topologically finitely generated if finitely many elements generate a dense subgroup.

**Problem.** Every abstract homomorphism from a strongly complete group to a profinite group is continuous. This applies in particular when the source is topologically finitely generated.

**How the definition helps.** Strong completeness makes preimages of open normal subgroups open, because these preimages have finite index (our own). Open normal subgroups form a neighborhood base at the identity in the target, so this proves continuity (our own). In the countable product of groups of order two, sequences with finitely many nonzero entries form a proper dense vector subspace (our own). Some nonzero linear functional vanishes there, so its index-two kernel is dense and cannot be open (our own). Nikolov and Segal proved that finitely many topological generators suffice for strong completeness.

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “A finite index subgroup of a profinite group is not necessarily open.”

**Paper or page:** [Groups of finite type: classification and structural properties](https://arxiv.org/abs/2509.03927v1). It says: “Every topologically finitely generated profinite group is strongly complete.”

**Sources:**

- [N. Nikolov and D. Segal, On finitely generated profinite groups, I, 2007](https://doi.org/10.4007/annals.2007.165.171)

### Characteristic p type, defined through F\*, shows which field a group needs

**Remember:** Read the field's characteristic from the F\* of local subgroups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20E25 (Local properties of groups), 20D05, 20D25. arXiv math.GR. Level 4: research.

**Definition.** A p-local subgroup of G is the normalizer of a nontrivial p-subgroup. G has characteristic p type if the generalized Fitting subgroup F\*(Y) is a p-group for every p-local subgroup Y. Here F\*(Y) is the subgroup generated by the largest normal nilpotent subgroup and the subnormal quasisimple subgroups.

**Problem.** In the classification of finite simple groups, every simple group whose 2-rank is not small is of component type or of characteristic 2 type. The 2-rank is the largest rank of an elementary abelian 2-subgroup. The groups of characteristic 2 type are roughly the groups of Lie type over fields of characteristic 2, with a handful of others.

**How the definition helps.** The definition copies a property that every group of Lie type in characteristic p has, so the class is built to catch exactly these groups. With it, the classification can state a split into two cases and treat each with its own tools. The split itself is a theorem: for sectional 2-rank at least 5, MacWilliams showed that the Sylow 2-subgroups are connected, and the balance theorem then gives the two cases. A notorious part of this case was the quasithin groups, finished by Aschbacher and Smith in 2004.

**Wikipedia:** [Fitting subgroup](https://en.wikipedia.org/wiki/Fitting_subgroup), [Classification of finite simple groups](https://en.wikipedia.org/wiki/Classification_of_finite_simple_groups). It says: “A finite group is said to be of characteristic p type if F\*(G) is a p-group for every p-local subgroup, because any group of Lie type defined over a field of characteristic p has this property.”

**Sources:**

- [M. Aschbacher, R. Lyons, S. D. Smith, R. Solomon, The Classification of Finite Simple Groups: Groups of Characteristic 2 Type, AMS Mathematical Surveys and Monographs 172 (2011)](https://doi.org/10.1090/surv/172)

### Relators without powers give local indicability

**Remember:** A single relator that is not a proper power gives local indicability.

*Rules out counterexamples.* MSC 20F05 (Generators, relations, and presentations of groups). arXiv math.GR. Level 4: research.

**Definition.** A one-relator presentation defines a group by setting one word in free generators equal to the identity. A proper power is a word equal in the free group to a power with exponent at least two.

**Problem.** A group with a single nontrivial relator that is not a proper power is locally indicable. This means every nontrivial finitely generated subgroup maps onto ℤ.

**How the definition helps.** Excluding proper powers prevents the defining word from introducing finite-order elements, in our own explanation. The one-relator torsion theorem gives that conclusion. The stronger Brodskii–Howie theorem gives local indicability. In our own example, the presentation with one generator a and relation a² = 1 gives a group of order two. It cannot map onto ℤ.

**Paper or page:** [The theory of one-relator groups: history and recent progress](https://arxiv.org/abs/2501.18306v1). It says: “If X = (Λ, λ) is a one-relator complex with deg(λ) = 1, then π₁(X) is locally indicable.”

**Sources:**

- [James Howie, On locally indicable groups (1982).](https://doi.org/10.1007/bf01214717)

### Polyhedral descriptions of rational sets give rational growth in virtually abelian groups

**Remember:** Turn regular words into lattice points before counting by word length.

*Makes the theorem clean to state or prove.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20F69, 68Q45. arXiv math.GR, cs.FL. Level 4: research.

**Definition.** A rational subset of a group is the set of values of the words in a language accepted by a finite automaton. A virtually abelian group has a free abelian subgroup ℤⁿ of finite index. A subset is coset-wise polyhedral if its part in each coset of ℤⁿ is a finite union of polyhedral pieces. A polyhedral piece is a set of integer points cut out by linear equations, inequalities and congruences.

**Problem.** In a finitely generated virtually abelian group, the rational subsets are exactly the coset-wise polyhedral ones. The growth series of such a set is rational for every finite generating set. The growth series is the power series whose coefficient of zⁿ counts the elements of the set with word length n.

**How the definition helps.** The polyhedral description turns a question about languages into counting lattice points, in our own explanation. A finite automaton can accept many words for one group element, so counting words directly gives the wrong answer, in our own account. A lattice point stands for exactly one element. The work is to prove that the two descriptions agree, and to control word length on each polyhedral piece, in our own summary.

**Paper or page:** [Rational sets in virtually abelian groups: languages and growth](https://arxiv.org/abs/2205.05621v2), [Rational sets in virtually abelian groups: languages and growth](https://arxiv.org/abs/2205.05621v2). It says: “We prove equivalences between the structures used in the literature, and establish the rationality of important classes of sets in G”

**Sources:**

- [Laura Ciobanu, Alex Evetts, Rational sets in virtually abelian groups: languages and growth, arXiv:2205.05621v2 (2023)](https://arxiv.org/abs/2205.05621v2)

### Letter quasimorphisms force stable commutator length at least one half

**Remember:** Alternating word labels force negative curvature on every surface bounding the element.

*Makes the theorem clean to state or prove.* MSC 20F12 (Commutator calculus), 20J06, 20F36. arXiv math.GR, math.GT. Level 4: research.

**Definition.** Fix a free group on two letters a and b. Take its reduced words whose letters alternate between a or a⁻¹ and b or b⁻¹. A letter quasimorphism maps a group to these alternating words and is a homomorphism up to a tightly restricted error. The stable commutator length scl(g) is the limit of cl(gⁿ)/n, where cl(h) is the least number of commutators with product h.

**Problem.** Let g be a nontrivial group element, and let a letter quasimorphism Φ satisfy Φ(g) ≠ 1 and Φ(gⁿ) = Φ(g)ⁿ for all integers n. Then scl(g) ≥ 1/2, a theorem of Heuer.

**How the definition helps.** The alternating words give labels from which the proof builds angles on each surface that bounds a power of g. The paper proves that these angle structures have total curvature at most −2π times the number of times the boundary winds around g. A discrete Gauss–Bonnet formula turns this into a bound on Euler characteristic, which gives scl(g) ≥ 1/2, in our own account. The paper says this generalises the proof of Duncan and Howie for free groups.

**Paper or page:** [From letter-quasimorphisms to angle structures and spectral gaps for scl](https://arxiv.org/abs/2402.13856v2), [From letter-quasimorphisms to angle structures and spectral gaps for scl](https://arxiv.org/abs/2402.13856v2), [From letter-quasimorphisms to angle structures and spectral gaps for scl](https://arxiv.org/abs/2402.13856v2). It says: “Our approach is to show that letter-quasimorphisms give rise to negatively curved angle structures on admissible surfaces.”

**Sources:**

- [Alexis Marchand, From letter-quasimorphisms to angle structures and spectral gaps for scl, arXiv:2402.13856v2 (2024)](https://arxiv.org/abs/2402.13856v2)

### Measuring nilpotence against the whole brace makes nilpotent ideals closed under sums

**Remember:** Measure centrality against the whole brace before adding ideals.

*Rules out counterexamples.* MSC 20F18 (Nilpotent groups), 16T25. arXiv math.GR, math.QA. Level 4: research.

**Definition.** A left skew brace has two group operations linked by a ∘ (b + c) = a ∘ b − a + a ∘ c. An ideal is a subset by which one can take a quotient for both operations. In our own paraphrase, an ideal I is B-centrally nilpotent if a finite chain of ideals runs from I to 0. Each step must be central relative to the whole brace B.

**Problem.** Let I and J be B-centrally nilpotent ideals of a brace B, of classes n and m. Then I + J is B-centrally nilpotent, of class at most n + m.

**How the definition helps.** In our own explanation, centrality relative to the whole brace is respected by the other ideal, so the two chains combine. This is the brace analogue of Fitting's theorem that two nilpotent normal subgroups have a nilpotent product (our own comparison). For braces the naive analogue fails. The paper's Example B gives centrally nilpotent ideals whose product is not centrally nilpotent. The relative notion lets the authors define a good Fitting ideal.

**Paper or page:** [Central nilpotency of left skew braces and solutions of the Yang-Baxter equation](https://arxiv.org/abs/2310.07474v2), [Central nilpotency of left skew braces and solutions of the Yang-Baxter equation](https://arxiv.org/abs/2310.07474v2). It says: “the product of centrally nilpotent ideals need not be centrally nilpotent (Example B), a rather peculiar fact. To cope with these examples, we introduce a special type of nilpotent ideal”

**Sources:**

- [Adolfo Ballester-Bolinches, Ramón Esteban-Romero, Maria Ferrara, Vicent Pérez-Calabuig, Marco Trombetti, Central nilpotency of left skew braces and solutions of the Yang-Baxter equation, Pacific J. Math. 335 (2025) 1-32](https://arxiv.org/abs/2310.07474v2)

### Skew bracoids extend the skew brace correspondence to non-Galois separable extensions

**Remember:** Allow point stabilizers so the group can act on cosets.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F29 (Representations of groups as automorphism groups of algebraic systems), 16T05, 12F10. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A skew brace is a set with two compatible group structures. A skew bracoid is a group G acting transitively on another group N, with g(ημ) = g(η) g(e)⁻¹ g(μ). So each g acts by an automorphism of N followed by left translation by g(e). Unlike in a skew brace, the action may have nontrivial point stabilizers.

**Problem.** Let L/K be a finite separable field extension that need not be Galois. Hopf–Galois structures on L/K correspond to finite skew bracoids built from the Galois group of its Galois closure. A Hopf–Galois structure is a Hopf algebra acting on L so that L behaves like a Galois extension for it.

**How the definition helps.** Allowing point stabilizers lets the group act on cosets of a subgroup rather than on itself, which a non-Galois extension needs. In the standard Greither–Pareigis description, Hopf–Galois structures on L/K are regular groups of permutations of G/G′ normalized by G (our own context). Here G is the Galois group of the Galois closure and G′ is the subgroup fixing L. A skew brace needs a free action, so it covers only the Galois case G′ = 1. The paper's work is to match these permutation groups with skew bracoids.

**Paper or page:** [Skew bracoids](https://arxiv.org/abs/2305.15848v1). It says: “finite skew bracoids correspond with Hopf-Galois structures on finite separable extensions of fields, generalizing the existing connection between finite skew braces and Hopf-Galois structures on finite Galois extensions.”

**Sources:**

- [Isabel Martin-Lyons, Paul J. Truman, Skew bracoids, arXiv:2305.15848v1 (2023)](https://arxiv.org/abs/2305.15848v1)

### Sublinearly Morse rays give a quasi-isometry invariant boundary for generic directions

**Remember:** Allow sublinear wandering, and the boundary is both stable and generic.

*Rules out counterexamples. Confidence: medium.* MSC 20F65 (Geometric group theory), 20F67. arXiv math.GT, math.GR. Level 4: research.

**Definition.** Fix a function κ that grows more slowly than linearly. A geodesic ray is κ-Morse if quasi-geodesics, paths with bounded linear distortion, that end on it stay near it. The allowed distance may grow like κ of the distance from the base point. The κ-Morse boundary is the set of such rays, up to rays that stay sublinearly close.

**Problem.** The κ-Morse boundary is a quasi-isometry invariant, so it is a boundary of the group and not of the space it acts on (Qing, Rafi and Tiozzo). In a broad context it also holds the generic directions, those of random walks.

**How the definition helps.** Random walks track geodesic rays only up to a sublinear error, as the abstract says, so asking for bounded error would miss them. Allowing a sublinear error is still rigid enough to pass through quasi-isometries. So examples of Croke and Kleiner, where the visual boundary of a CAT(0) space changes under quasi-isometry, no longer give different boundaries (our own remark). What stays hard is the choice of topology on this boundary.

**Paper or page:** [The geometry of genericity in mapping class groups and Teichmüller spaces via CAT(0) cube complexes](https://arxiv.org/abs/2207.06516), [Hyperbolic projections and topological invariance of sublinearly Morse boundaries](https://arxiv.org/abs/2212.09539). It says: “Qing-Rafi-Tiozzo recently introduced the sublinearly Morse boundary and proved that this boundary is a quasi-isometry invariant which captures a notion of generic direction in a broad context.”

**Sources:**

- [M. G. Durham, A. Zalloum, The geometry of genericity in mapping class groups and Teichmüller spaces via CAT(0) cube complexes, arXiv:2207.06516 (2022)](https://arxiv.org/abs/2207.06516)
- [Y. Qing, K. Rafi, Sublinearly Morse boundary I: CAT(0) spaces, Adv. Math. 404 (2022) 108442](https://doi.org/10.1016/j.aim.2022.108442)
- [C. Abbott, M. Incerti-Medici, Hyperbolic projections and topological invariance of sublinearly Morse boundaries, arXiv:2212.09539 (2022)](https://arxiv.org/abs/2212.09539)

### Coding boundary points by ray labels gives a short hyperfiniteness proof

**Remember:** Code each boundary point by the labels along a chosen ray.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F67 (Hyperbolic groups and nonpositively curved groups), 03E15, 37A20. arXiv math.GR, math.LO. Level 4: research.

**Definition.** The Cayley graph of a group joins each element g to gs for each generator s. The Gromov boundary of a hyperbolic group is its set of ideal endpoints of rays that go to infinity in this graph. The paper represents each boundary point by a coarsely geodesic ray and codes it by the ray's infinite sequence of generator labels. Two codes are tail equivalent if they agree after deleting finite starting segments, possibly of different lengths.

**Problem.** A finitely generated hyperbolic group acts on its Gromov boundary. The relation of lying in the same orbit is hyperfinite, which means it is an increasing union of Borel equivalence relations with finite classes. Marquis and Sabok first proved this, and the paper gives a shorter proof.

**How the definition helps.** The codes let the proof compare the orbit relation with tail equivalence on infinite words, a standard hyperfinite relation, in our own explanation. By the paper's Lemma 4.3, the codes of the points in a boundary ball meet at most a fixed number of tail classes. The bound does not depend on the radius of the ball. The paper then turns this bound into hyperfiniteness of the orbit relation. The hard part is to choose the rays in a Borel way and to prove the bound, in our own account.

**Paper or page:** [Hyperfiniteness and Borel asymptotic dimension of boundary actions of hyperbolic groups](https://arxiv.org/abs/2306.02056v1), [Hyperfiniteness and Borel asymptotic dimension of boundary actions of hyperbolic groups](https://arxiv.org/abs/2306.02056v1). It says: “We give a new short proof of the theorem due to Marquis and Sabok, which states that the orbit equivalence relation induced by the action of a finitely generated hyperbolic group on its Gromov boundary is hyperfinite.”

**Sources:**

- [Petr Naryshkin, Andrea Vaccaro, Hyperfiniteness and Borel asymptotic dimension of boundary actions of hyperbolic groups, arXiv:2306.02056v1 (2023)](https://arxiv.org/abs/2306.02056v1)

### Relative hyperbolicity covers the cusped hyperbolic manifolds that hyperbolic groups miss

**Remember:** Allow the cusp groups, and ask hyperbolicity only of the rest.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F67 (Hyperbolic groups and nonpositively curved groups). arXiv math.GR, math.MG. Level 4: research.

**Definition.** A group G is hyperbolic relative to some subgroups, called peripheral, if G looks hyperbolic once the cosets of these subgroups are made bounded. Farb's version joins each coset in the Cayley graph to a new vertex, and asks the new graph to be hyperbolic, with an extra condition. In Gromov's and Bowditch's version, G acts properly on a hyperbolic space, and conjugates of the peripheral subgroups fix points at infinity. The action need not have compact quotient, but it must after horoballs around these points are cut away.

**Problem.** The fundamental group of a finite-volume, noncompact hyperbolic 3-manifold contains a copy of ℤ² for each cusp, so it is not hyperbolic. It is hyperbolic relative to its cusp subgroups. Results for hyperbolic groups then extend; for example, the word problem is solvable if it is solvable in the peripheral subgroups (Farb).

**How the definition helps.** The definition lets the peripheral subgroups be any groups and asks hyperbolicity only of how they fit together. A hyperbolic group contains no copy of ℤ² (our own), so the cusp subgroups block plain hyperbolicity. After the cusp subgroups are made bounded, the obstruction disappears and the geometry of the manifold is hyperbolic again. What stayed hard was to show that the different definitions, by Gromov, Bowditch, Farb and others, agree under suitable conditions (our own).

**Wikipedia:** [Relatively hyperbolic group](https://en.wikipedia.org/wiki/Relatively_hyperbolic_group). It says: “Illustrative examples of relatively hyperbolic groups are provided by the fundamental groups of complete noncompact hyperbolic manifolds of finite volume.”

**Sources:**

- [B. Farb, Relatively hyperbolic groups, Geometric and Functional Analysis 8 (1998) 810–840](https://doi.org/10.1007/s000390050075)
- [B. H. Bowditch, Relatively hyperbolic groups, International Journal of Algebra and Computation 22 (2012) 1250016](https://doi.org/10.1142/S0218196712500166)

### Sofic groups give finite models that make injective cellular automata surjective

**Remember:** Model local rules on finite sets so counting becomes available.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F69 (Asymptotic properties of groups), 37B15. arXiv math.GR, math.DS. Level 4: research.

**Definition.** A group is sofic if any finite set of its elements can be modelled by permutations of a large finite set. On most points, the permutations respect the products of those elements, and each nonidentity element moves the point. A cellular automaton on a group recolours every element by one fixed rule that reads the colours on a fixed finite neighbourhood.

**Problem.** On a sofic group, every injective cellular automaton with a finite alphabet is surjective. Gromov and Weiss proved this. Groups with this property are called surjunctive, and Gottschalk conjectured that all groups are surjunctive.

**How the definition helps.** The definition supplies large finite models of the group, where patterns can be counted, in our own explanation. Injectivity gives a local rule that decodes each image pattern, in our own account. The proof must still control the errors of the models and show that they cannot hide a missing output pattern, in our own summary.

**Paper or page:** [Surjunctivity does not characterize cosoficity of invariant random subgroups](https://arxiv.org/abs/2511.06586v1). It says: “Gromov and Weiss termed the notion of sofic groups, and proved that all such groups are surjunctive”

**Sources:**

- [Lewis Bowen, Michael Chapman, Surjunctivity does not characterize cosoficity of invariant random subgroups, arXiv:2511.06586v1 (2025)](https://arxiv.org/abs/2511.06586v1)

### Vanishing of asymptotic second cohomology implies uniform stability of almost representations

**Remember:** Turn a multiplication defect into a class and make it vanish.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups), 22D10, 22E40. arXiv math.GR, math.RT. Level 4: research.

**Definition.** An almost representation of a group Γ maps Γ to unitary matrices and is multiplicative up to a small error in a submultiplicative norm. Asymptotic cohomology uses cochains, which are functions on tuples of group elements, and treats negligibly small errors as zero. The paper describes it as roughly an asymptotic version of bounded cohomology.

**Problem.** Uniform stability means every almost representation is uniformly close to a true unitary representation, with closeness controlled by the defect. The paper proves that vanishing of second asymptotic cohomology implies uniform stability. It then proves this for most lattices, meaning discrete subgroups of finite covolume, in higher-rank semisimple groups.

**How the definition helps.** The cohomology turns the multiplication defect of an almost representation into a class, and a zero class means the defect can be corrected. In our own reading, a first-order correction is not yet a true representation. So the paper needs estimates that make repeated corrections converge. Proving vanishing for the lattices is separate work. This extends results of Kazhdan for amenable groups and of Burger, Ozawa and Thom for SL(n, ℤ) with n &gt; 2.

**Paper or page:** [Asymptotic Cohomology and Uniform Stability for Lattices in Semisimple Groups](https://arxiv.org/abs/2301.00476v4). It says: “we first build an elaborate cohomological theory capturing the obstruction to such stability, and show that the vanishing of second cohomology implies uniform stability in this setting.”

**Sources:**

- [Lev Glebsky, Alexander Lubotzky, Nicolas Monod, Bharatram Rangarajan, Asymptotic Cohomology and Uniform Stability for Lattices in Semisimple Groups, arXiv:2301.00476v4 (2023)](https://arxiv.org/abs/2301.00476v4)

### The twisting identity makes the twisted product of monoids associative

**Remember:** Charge the same total for both ways of multiplying three elements.

*True by definition.* MSC 20M10 (General structure theory for semigroups), 20M20. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A twisting of a monoid S is a map Φ from S × S to the natural numbers. It satisfies Φ(a,b) + Φ(ab,c) = Φ(a,bc) + Φ(b,c). Given a commutative monoid M and q in M, the twisted product on M × S is (i,a)(j,b) = (i + j + Φ(a,b)q, ab).

**Problem.** The twisted product is associative. Such products appear for diagram monoids, where Φ counts the floating components made by joining diagrams.

**How the definition helps.** The twisting identity says that the two bracketings of a triple product add the same correction, so associativity holds by definition. In our own calculation, both bracketings give first coordinate i + j + k plus that correction times q. This uses that M is commutative and associative. The second coordinates agree because S is associative. Our own remark is that the identity is the 2-cocycle condition familiar from group extensions.

**Paper or page:** [Twisted products of monoids](https://arxiv.org/abs/2507.04486v2). It says: “A twisting of a monoid S is a map Φ:S×S→ℕ satisfying the identity Φ(a,b) + Φ(ab,c) = Φ(a,bc) + Φ(b,c).”

**Sources:**

- [James East, Robert D. Gray, P. A. Azeef Muhammed, Nik Ruškuc, Twisted products of monoids, arXiv:2507.04486v2 (2025)](https://arxiv.org/abs/2507.04486v2)

### ACCP on generators characterizes atomic monoids

**Remember:** Atomic means the generators, not all elements, satisfy ACCP.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20M13 (Arithmetic theory of semigroups), 13A05. arXiv math.AC, math.RA. Level 4: research.

**Definition.** A monoid is atomic when every non-unit is a product of irreducible elements, also called atoms. The ascending chain condition on principal ideals (ACCP) says that no infinite strictly increasing chain of principal ideals exists. Here it is asked only of single elements. An element satisfies the ACCP when every such chain that starts at its ideal stops.

**Problem.** An acyclic monoid is atomic exactly when it has a generating set each of whose elements satisfies the ACCP. Acyclic means that x = uxv only when u and v are units.

**How the definition helps.** Asking ACCP only of a generating set, not of every element, gives the exact condition for atomicity. This answers a question left open after Grams's 1974 counterexample to Cohn's claim that atomic domains satisfy ACCP. In our own reading, one direction is easy, because the atoms and units generate an atomic monoid and each atom satisfies the ACCP. The work is in the converse, which rests on Theorem 2.4 on monoids with a preorder (our own reading).

**Paper or page:** [A characterization of atomicity](https://arxiv.org/abs/2209.05238v2). It says: “An acyclic monoid is atomic if and only if it has a generating set each of whose elements satisfies the ACCP.”

**Sources:**

- [Salvatore Tringali, A characterization of atomicity, arXiv:2209.05238 (2022), Math. Proc. Cambridge Phil. Soc. 175 (2023), No. 2, 459-465](https://arxiv.org/abs/2209.05238v2)
- [Anne Grams, Atomic rings and the ascending chain condition for principal ideals, Math. Proc. Cambridge Phil. Soc. 75 (1974), 321-329](https://doi.org/10.1017/s0305004100048532)

### One purity test for monoid acts detects exactly the right coherent monoids

**Remember:** Test only finitely presented subacts, and coherence appears.

*Rules out counterexamples.* MSC 20M30 (Representation of semigroups; actions of semigroups on sets), 20M50. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A right S-act is a set on which a monoid S acts on the right. S is right coherent if every finitely generated subact of a finitely presented right act is finitely presented. An act A is absolutely pure if maps into A from finitely generated subacts of finitely presented acts extend to the whole act. A is mfp-pure if this holds for finitely presented subacts of finitely presented acts with one generator.

**Problem.** A monoid S is right coherent exactly when every mfp-pure right S-act is absolutely pure. Absolutely pure acts are always mfp-pure, so the condition says the two classes coincide.

**How the definition helps.** The mfp test uses only finitely presented subacts, and right coherence says that finitely generated subacts are of this kind. In our own explanation, this is why the two tests match for coherent monoids. A simpler test, almost purity, uses finitely generated subacts of one-generator finitely presented acts. It agrees with absolute purity for coherent monoids. But the paper gives non-coherent monoids where it also agrees, so it cannot detect coherence, while mfp-purity can.

**Paper or page:** [Coherency for monoids and purity for their acts](https://arxiv.org/abs/2209.01915v3). It says: “Our second main result is that a monoid S is right coherent if and only if the classes of mfp-pure and absolutely pure S-acts coincide”

**Sources:**

- [Yang Dandan, Victoria Gould, Coherency for monoids and purity for their acts, arXiv:2209.01915v3 (2023)](https://arxiv.org/abs/2209.01915v3)
