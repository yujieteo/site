### A left identity and left inverses are enough to make a group

**Remember:** Check only one side, but the same side for identity and inverses.

*Makes the theorem clean to state or prove.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** Take a set with an associative operation and an element e with ex = x for every x. Require that every x has some left inverse y, with yx = e.

**Problem.** To show that a structure is a group, it is enough to check associativity, a left identity and left inverses. The left inverses are then two-sided, and so is the identity.

**How the definition helps.** A left inverse of a left inverse forces both sides to agree (our own). With yx = e and zy = e, xy = (zy)(xy) = z(yx)y = z(ey) = zy = e (our own). Then xe = x(yx) = (xy)x = ex = x (our own).

**Paper or page:** [Equivalence of Axiom Schemata for Groups](https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups), [Left Identity in Semigroup may not be Unique](https://proofwiki.org/wiki/Left_Identity_in_Semigroup_may_not_be_Unique). It says: “there exists at least one element e ∈ G such that e is a left identity; For any element g in a group G, there exists at least one left inverse of g.”

**Sources:**

- [ProofWiki, Equivalence of Axiom Schemata for Groups](https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups)
- [ProofWiki, Left Identity in Semigroup may not be Unique](https://proofwiki.org/wiki/Left_Identity_in_Semigroup_may_not_be_Unique)

### An infinite cyclic group has no nonzero period

**Remember:** A nonzero period makes the quotient finite.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A cyclic group is the set of integer powers of one element g, with gᵃgᵇ = gᵃ⁺ᵇ. Equivalently, it is ℤ modulo the subgroup mℤ of exponents n with gⁿ the identity, for some m ≥ 0.

**Problem.** Every infinite cyclic group is isomorphic to ℤ under addition.

**How the definition helps.** For m &gt; 0, division with remainder leaves only m distinct powers, so an infinite cyclic group has m = 0 (our own). Then n ↦ gⁿ is one-to-one and onto, and it turns addition into multiplication (our own).

**nLab:** [cyclic group](https://ncatlab.org/nlab/show/cyclic+group). It says: “For n = 0 this subgroup is the trivial group, hence this quotient is just the integers itself”

**Paper or page:** [Infinite Cyclic Group is Isomorphic to Integers](https://proofwiki.org/wiki/Infinite_Cyclic_Group_is_Isomorphic_to_Integers). It says: “Let G be an infinite cyclic group.”

**Sources:** none listed. No primary source with a working link was found.

### Closure under division gives a one-step subgroup test

**Remember:** Keep every right quotient of two members inside the nonempty set.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subset of a group is closed under right division if ab⁻¹ lies in it whenever a and b do.

**Problem.** A nonempty subset of a group is a subgroup exactly when it is closed under right division.

**How the definition helps.** One division test gives the identity, inverses and products (our own). With a in the subset, aa⁻¹ = e, then eb⁻¹ = b⁻¹, then a(b⁻¹)⁻¹ = ab (our own). Conversely, a subgroup contains every ab⁻¹ (our own).

**Paper or page:** [One-Step Subgroup Test using Subset Product](https://proofwiki.org/wiki/One-Step_Subgroup_Test_using_Subset_Product). It says: “HH⁻¹ ⊆ H”

**Sources:** none listed. No primary source with a working link was found.

### Cosets as classes give Lagrange’s theorem by counting

**Remember:** A group splits into equally sized copies of its subgroup.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For a subgroup H, a left coset is a class of elements that differ by right multiplication by an element of H, so the cosets partition the group (our own). Each coset gH is the set of products gh, a copy of H through h ↦ gh (our own).

**Problem.** The size of a finite group equals the size of any subgroup times its number of left cosets.

**How the definition helps.** As equivalence classes, the cosets cover the group without overlap, and each has \|H\| elements (our own). So the group size is \|H\| times the number of cosets (our own). The only check is that differing by right multiplication by H is an equivalence relation, which uses that H is a subgroup (our own).

**nLab:** [coset](https://ncatlab.org/nlab/show/coset). It says: “the set of equivalence classes of elements of G where two are regarded as equivalent if they differ by right multiplication with an element in H.”

**Paper or page:** [Theorem 5.1. (Lagrange's theorem)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let G be a finite group, and let H be any subgroup. Then \|H\| divides \|G\|.”

**Sources:** none listed. No primary source with a working link was found.

### Cosets count the size of a subgroup product

**Remember:** Count the distinct copies of K rather than all products.

*Makes the theorem clean to state or prove.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The set product HK of two subgroups is the set of all products hk with h in H and k in K. It is the union of the left cosets hK, and hK = h′K exactly when h⁻¹h′ lies in H ∩ K (our own).

**Problem.** For finite subgroups H and K, the size of HK is \|H\| · \|K\| divided by \|H ∩ K\|.

**How the definition helps.** So the distinct cosets hK correspond to the cosets of H ∩ K in H, and there are \|H\| / \|H ∩ K\| of them (our own). Each has \|K\| elements and distinct cosets are disjoint, which gives the formula (our own).

**Paper or page:** [Order of Subgroup Product](https://proofwiki.org/wiki/Order_of_Subgroup_Product). It says: “\|HK\| = \|H\| \|K\| / \|H ∩ K\|”

**Sources:** none listed. No primary source with a working link was found.

### Counting cosets makes indices multiply down a subgroup chain

**Remember:** Count cosets inside each larger coset, then count the larger cosets.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The index \[G:H\] is the number of distinct left cosets gH, the sets of products gh with h in H, even for infinite groups. Each coset of K is a union of cosets of H, and multiplying by g moves the H-cosets inside K onto those inside gK (our own).

**Problem.** For subgroups H ⊆ K ⊆ G with both indices \[G:K\] and \[K:H\] finite, \[G:H\] = \[G:K\] · \[K:H\].

**How the definition helps.** So each of the \[G:K\] cosets of K contains exactly \[K:H\] cosets of H, and every H-coset lies in one of them (our own). Counting gives the product without dividing group sizes (our own).

**nLab:** [index of a subgroup](https://ncatlab.org/nlab/show/index+of+a+subgroup). It says: “\|G : K\| · \|K : H\| = \|G : H\|”

**Sources:** none listed. No primary source with a working link was found.

### Counting powers makes every group of prime order cyclic

**Remember:** An element’s order is the size of its subgroup of powers.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The order of g is the size of the cyclic subgroup it generates, the set of all integer powers of g. A nonidentity g has at least two powers, the identity and g (our own).

**Problem.** In a group of prime size, every element except the identity generates the whole group.

**How the definition helps.** As the size of a subgroup, the order divides the group size by Lagrange’s theorem (our own). With prime group size p, an order of at least two must be p, so the powers of g fill the group (our own).

**Paper or page:** [Prime Group is Cyclic](https://proofwiki.org/wiki/Prime_Group_is_Cyclic). It says: “Let G be a group whose order is p. Then G is cyclic.”

**Sources:** none listed. No primary source with a working link was found.

### Equal outputs identify kernel cosets

**Remember:** Inputs have the same output exactly when they share a kernel coset.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** Put two inputs of a group homomorphism f in the same class when their outputs agree. These classes are the cosets of the kernel, because f(a) = f(b) exactly when a⁻¹b maps to the identity.

**Problem.** The quotient by the kernel of a group homomorphism is isomorphic to its image.

**How the definition helps.** Labeling each class by its common output gives a bijection with the image. Multiplying representatives is well defined because the output of a product is the product of the outputs, so the bijection preserves multiplication (our own).

**Paper or page:** [First Isomorphism Theorem/Groups](https://proofwiki.org/wiki/First_Isomorphism_Theorem/Groups). It says: “Then: Img φ ≅ G₁ / ker φ where ≅ denotes group isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Finite nonempty product closure is enough for a subgroup

**Remember:** On a finite set, multiplication cannot miss a point if it never merges points.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subset of a group is closed under products if it contains ab whenever it contains a and b. For a finite such subset, multiplying by a member h is a one-to-one map of the subset to itself, hence onto (our own).

**Problem.** A nonempty finite subset of a group is a subgroup if and only if it is closed under products.

**How the definition helps.** Since x ↦ hx is onto, hx = h has a solution, which is the identity, and then hy = e gives the inverse of h (our own). The positive integers show that finiteness is needed: they are closed under addition but lack zero and inverses (our own).

**Paper or page:** [Finite Subgroup Test](https://proofwiki.org/wiki/Finite_Subgroup_Test). It says: “Let H be a non-empty finite subset of G.”

**Sources:** none listed. No primary source with a working link was found.

### Power maps make images of cyclic groups cyclic

**Remember:** Follow the power map through the next map.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups), 20K01. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A cyclic group is the image of a homomorphism from the integers, a map that turns addition into multiplication. Its generator is the image of 1 (our own).

**Problem.** The image of a cyclic group under a map preserving multiplication is cyclic. The image of its generator generates the new group.

**How the definition helps.** Composing that map with a homomorphism gives another homomorphism from the integers, so its image is cyclic (our own). The composite sends 1 to the image of the original generator, which therefore generates the new group (our own).

**nLab:** [cyclic group](https://ncatlab.org/nlab/show/cyclic+group). It says: “A cyclic group is a quotient group of the additive group of integers”

**Paper or page:** [Homomorphic Image of Cyclic Group is Cyclic Group](https://proofwiki.org/wiki/Homomorphic_Image_of_Cyclic_Group_is_Cyclic_Group). It says: “is a cyclic group with generator ϕ(g).”

**Sources:** none listed. No primary source with a working link was found.

### Set products form subgroups when their factors can trade places

**Remember:** Swap the middle sets to gather each subgroup with itself.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For subgroups H and K, the set product HK is the set of all products hk with h in H and k in K. The subgroups permute when HK = KH, so any product kh can be rewritten as some h′k′.

**Problem.** For subgroups H and K, the set product HK is a subgroup exactly when HK = KH.

**How the definition helps.** Permutability gives HKHK = HHKK = HK, so HK is closed under products (our own). The inverses of the elements of HK form KH, so HK = KH also gives closure under inverses (our own). Conversely, a subgroup equals its set of inverses, so KH = HK (our own).

**Paper or page:** [Subset Product of Subgroups/Sufficient Condition](https://proofwiki.org/wiki/Subset_Product_of_Subgroups/Sufficient_Condition). It says: “Then H ∘ K is a subgroup of G.”

**Sources:** none listed. No primary source with a working link was found.

### The order of a power comes from its first multiple

**Remember:** A power of g is trivial exactly when the order divides it.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The order of g is the least positive n with gⁿ the identity, or infinite if there is none. Then gʲ is the identity exactly when n divides j (our own).

**Problem.** If g has finite order n, then its mth power has order n/gcd(m,n) for every integer m. Here gcd means greatest common divisor.

**How the definition helps.** The order of gᵐ is the least positive k with gᵐᵏ the identity, that is with n dividing mk (our own). With d = gcd(m,n), n divides mk exactly when n/d divides k, since n/d and m/d are coprime (our own).

**Paper or page:** [Order of Power of Group Element](https://proofwiki.org/wiki/Order_of_Power_of_Group_Element). It says: “∀m ∈ ℤ: order(gᵐ) = n/gcd{m,n}”

**Sources:** none listed. No primary source with a working link was found.

### The smallest subgroup definition makes generators determine homomorphisms

**Remember:** Every subgroup containing the generators contains the subgroup they generate.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The subgroup generated by S is the smallest subgroup containing S, the intersection of all subgroups containing S.

**Problem.** Two homomorphisms from G to the same group agree everywhere if they agree on a set generating G.

**How the definition helps.** Two homomorphisms from G agree on a subgroup, because they preserve products and inverses (our own). That subgroup contains S, so by minimality it contains the subgroup generated by S, which is G (our own).

**Paper or page:** [Homomorphism of Generated Group](https://proofwiki.org/wiki/Homomorphism_of_Generated_Group). It says: “Let ϕ: G → H and ψ: G → H be homomorphisms.”

**Sources:** none listed. No primary source with a working link was found.

### The subgroup test asks for nonempty, since the empty set passes

**Remember:** The empty set passes both closure tests, so require one member.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup of a group G is a subset that is a group under the operation of G. So it contains an identity and is never empty, while the empty set is vacuously closed under products and inverses.

**Problem.** A subset H of a group G is a subgroup exactly when H is nonempty, closed under products and closed under inverses.

**How the definition helps.** The closure conditions hold vacuously for ∅, so only the nonempty clause brings in the identity. Given a in H, closure gives a⁻¹ and then e = aa⁻¹ in H (our own).

**Paper or page:** [Two-Step Subgroup Test](https://proofwiki.org/wiki/Two-Step_Subgroup_Test), [Empty Set is Submagma of Magma](https://proofwiki.org/wiki/Empty_Set_is_Submagma_of_Magma), [Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty). It says: “(1): H ≠ ∅, that is, H is non-empty (2): a, b ∈ H ⟹ a ∘ b ∈ H (3): a ∈ H ⟹ a⁻¹ ∈ H.”

**Sources:**

- [ProofWiki, Two-Step Subgroup Test](https://proofwiki.org/wiki/Two-Step_Subgroup_Test)
- [ProofWiki, Empty Set is Submagma of Magma](https://proofwiki.org/wiki/Empty_Set_is_Submagma_of_Magma)
- [ProofWiki, Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty)

### Two cosets leave no room for a nonnormal subgroup

**Remember:** With two cosets, the only other coset is the complement.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup H is normal when each left coset gH equals the right coset Hg. Its index counts the distinct left cosets, and the left cosets partition the group, as do the right cosets (our own).

**Problem.** Every subgroup of index two is normal, even in an infinite group.

**How the definition helps.** With index two, the left cosets are H and its complement, and so are the right cosets, because inversion turns left cosets into right cosets (our own). So for g outside H both gH and Hg are the complement, and for g in H both are H (our own).

**Paper or page:** [Subgroup of Index 2 is Normal](https://proofwiki.org/wiki/Subgroup_of_Index_2_is_Normal). It says: “A subgroup of index 2 is always normal.”

**Sources:** none listed. No primary source with a working link was found.

### Numbering vertices gives two forms for every dihedral symmetry

**Remember:** Choose the first vertex and the direction around the polygon.

*True by definition.* MSC 20B05 (General theory for finite permutation groups), 20A05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** Number the n vertices of a regular polygon 0, …, n − 1 around the boundary, as integers modulo n. A symmetry keeps neighbors adjacent, so it is fixed by where it sends 0 and by its direction, giving x ↦ a + x or x ↦ a − x (our own).

**Problem.** For n ≥ 3, the dihedral group of a regular n-gon has 2n elements. Its rotations are the n translations of the labels and its reflections are the other n maps.

**How the definition helps.** There are n choices of a and two directions, so there are 2n symmetries (our own). Each formula is realized, the translations by rotations and the others by reflections (our own). The work is to check that a symmetry preserving adjacency is fixed by the images of vertices 0 and 1 (our own).

**Paper or page:** [Order of Dihedral Group](https://proofwiki.org/wiki/Order_of_Dihedral_Group). It says: “The dihedral group Dₙ is of order 2n.”

**Sources:** none listed. No primary source with a working link was found.

### Transitive actions on inhabited sets are coset spaces

**Remember:** Transitive means one orbit, and one orbit needs at least one point.

*Rules out counterexamples. Confidence: medium.* MSC 20B05 (General theory for finite permutation groups), 20B07, 18B40. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A G-set X is inhabited if it has at least one point. It is transitive if any point can be moved to any other: for all x, y ∈ X, some g ∈ G satisfies gx = y.

**Problem.** Let G act transitively on an inhabited set X, and let H be the stabilizer of a point. Then X is isomorphic to the coset space G/H, and the transitive inhabited G-sets are exactly the connected objects of the category of G-sets.

**How the definition helps.** Pick a point x, which exists because X is inhabited, and let H be its stabilizer. Transitivity makes gH ↦ gx an equivariant bijection, while the empty action has no base point and is not connected (our own). Every G-set is the disjoint union of its orbits, so the connected ones are the nonempty single orbits (our own).

**nLab:** [transitive action](https://ncatlab.org/nlab/show/transitive+action). It says: “Let \* : G × X → X be a transitive action and suppose that X is inhabited. Then \* is equivalent to the action of G by multiplication on a coset space G/H”

**Sources:** none listed. No primary source with a working link was found.

### Counting inversions makes the sign of a permutation well defined

**Remember:** Count the pairs out of order; one swap flips the parity.

*True by definition. Confidence: medium.* MSC 20B30 (Symmetric groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** An inversion of a permutation σ of {1, …, n} is a pair i &lt; j that σ puts out of order, σ(i) &gt; σ(j). The sign of σ is +1 if σ has an even number of inversions and −1 if it has an odd number.

**Problem.** The sign is a homomorphism from Sₙ to {+1, −1}, so every product of transpositions equal to σ has the same parity of factors. Its kernel is the alternating group Aₙ of even permutations.

**How the definition helps.** The inversion count depends on σ alone, so the sign is well defined from the start. Swapping two adjacent positions changes the count by exactly one, and every transposition is an odd number of adjacent swaps (our own). A sign defined by counting transpositions would need a separate proof that the parity does not depend on the decomposition.

**Wikipedia:** [Parity of a permutation](https://en.wikipedia.org/wiki/Parity_of_a_permutation). It says: “We can thus define the parity of σ to be that of its number of constituent transpositions in any decomposition. And this must agree with the parity of the number of inversions under any ordering, as seen above.”

**Sources:** none listed. No primary source with a working link was found.

### Cycle lengths determine permutation order

**Remember:** Every cycle must finish a whole number of laps.

*True by definition.* MSC 20B30 (Symmetric groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** Describe a permutation of a finite set by its disjoint cycles, each letter moving to the next letter of its cycle. A cycle of length k brings each of its letters home exactly at the multiples of k steps (our own).

**Problem.** The order of a permutation of a finite set is the smallest positive power that fixes every letter. It equals the least common multiple of the cycle lengths.

**How the definition helps.** A power fixes every letter exactly when it is a multiple of every cycle length, so the smallest such power is their least common multiple (our own). The cycles exist because following an unused letter must return to it, by finiteness and injectivity (our own).

**Paper or page:** [Order of Product of Disjoint Permutations](https://proofwiki.org/wiki/Order_of_Product_of_Disjoint_Permutations). It says: “Let π be a product of disjoint permutations of orders k₁, k₂, …, kᵣ. Then: \|π\| = lcm {k₁, k₂, …, kᵣ}”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint cycles are the orbits of repeated permutation

**Remember:** Keep applying the permutation until you come back home.

*True by definition.* MSC 20B30 (Symmetric groups), 20B05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** The orbit of a point under a permutation of a finite set is the list of points reached by applying the permutation again and again. Each point has exactly one preimage, so the orbit returns to its start and forms a cycle (our own).

**Problem.** Every permutation of a finite set is a product of disjoint cycles. With fixed points included, the cycles are unique up to their order and choice of starting points.

**How the definition helps.** The orbits partition the set and each orbit is a cycle, so the permutation is the product of these disjoint cycles (our own). Finiteness forces a repeat, and unique preimages make the first repeat the starting point (our own). Each next point is forced, so only the starting points and the order of the cycles are free (our own).

**nLab:** [symmetric group](https://ncatlab.org/nlab/show/symmetric+group). It says: “The orbits of this action partition the set X into a disjoint union of cycles, called the cyclic decomposition of the permutation σ.”

**Sources:** none listed. No primary source with a working link was found.

### Inversions show why adjacent swaps generate every permutation

**Remember:** Each neighbor swap fixes or makes exactly one out-of-order pair.

*Makes the theorem clean to state or prove.* MSC 20B30 (Symmetric groups), 05A05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** Write a permutation as the list of its values on 1 through n. An inversion is a pair of positions where the larger value comes first. A swap of two neighbors changes the number of inversions by exactly one (our own).

**Problem.** Every permutation of {1, …, n} is a product of swaps of neighboring positions. The fewest such swaps needed equals its number of inversions.

**How the definition helps.** A neighboring swap changes the order of only that one pair, so it moves the inversion count by exactly one (our own). An unsorted list has a neighboring pair out of order, and swapping it lowers the count by one (our own). So the inversion count is the number of swaps needed, since each swap removes at most one inversion (our own).

**Paper or page:** [Transpositions of Adjacent Elements generate Symmetric Group](https://proofwiki.org/wiki/Transpositions_of_Adjacent_Elements_generate_Symmetric_Group). It says: “for 1 ≤ k &lt; n are a set of generators for Sₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Left translations give Cayley’s embedding

**Remember:** A left translation reveals its group element at the identity.

*True by definition.* MSC 20B35 (Subgroups of symmetric groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The left translation by a group element g is the permutation x ↦ gx of the group. It sends the identity to g, and translating by h and then by g is translating by gh (our own).

**Problem.** Every group is isomorphic to a subgroup of the permutations of its underlying set.

**How the definition helps.** So the map from g to its left translation respects products, and it is injective because each translation sends the identity to its own g (our own). Each translation has the translation by g⁻¹ as inverse, so the image is a subgroup of the permutations isomorphic to the group (our own).

**nLab:** [Cayley's theorem](https://ncatlab.org/nlab/show/Cayley%27s+theorem). It says: “namely as the group of permutations of elements of G by left-multiplication with G on itself”

**Sources:** none listed. No primary source with a working link was found.

### Defining Sylow subgroups as maximal p-subgroups makes every p-subgroup lie in one

**Remember:** A Sylow subgroup is a p-subgroup with no room to grow.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For a prime p, a p-subgroup is a subgroup whose elements all have order a power of p. A Sylow p-subgroup of G is a maximal p-subgroup, one that lies in no larger p-subgroup.

**Problem.** In a finite group, every p-subgroup lies in some Sylow p-subgroup. Sylow's theorems add that all Sylow p-subgroups are conjugate and have order pⁿ, the largest power of p that divides the order of G.

**How the definition helps.** In a finite group, enlarge a p-subgroup step by step; its order grows each time, so the process stops at a maximal one (our own). Sylow's theorems then show that all maximal p-subgroups are conjugate and have order pⁿ.

**Wikipedia:** [Sylow theorems](https://en.wikipedia.org/wiki/Sylow_theorems). It says: “A Sylow p-subgroup of a group G is a maximal p-subgroup—that is, a p-subgroup of G not contained in any strictly larger p-subgroup.”

**Sources:**

- [L. Sylow, Théorèmes sur les groupes de substitutions, Mathematische Annalen 5 (1872) 584–594](https://doi.org/10.1007/BF01442913)

### Conjugates generate the normal closure

**Remember:** Throw in every conjugate of S and close up.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The normal closure of a subset S of G is the subgroup generated by all conjugates gsg⁻¹ of elements s ∈ S. Conjugating a product of such conjugates gives again a product of such conjugates (our own).

**Problem.** The subgroup generated by all conjugates of S is the smallest normal subgroup containing S.

**How the definition helps.** Conjugation by g sends each generator to another generator and preserves products, so the subgroup is normal (our own). Any normal subgroup containing S contains every conjugate, so it contains this subgroup (our own).

**nLab:** [normal closure](https://ncatlab.org/nlab/show/normal+closure). It says: “The normal closure is clearly a normal subgroup of G.”

**Sources:** none listed. No primary source with a working link was found.

### Normal subgroups are exactly the kernels, so quotient groups exist

**Remember:** Normal means the cosets can be multiplied.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup N of G is normal if conjugation by every g ∈ G maps N onto itself, gNg⁻¹ = N. Equivalently, the coset g₁g₂N depends only on the cosets g₁N and g₂N.

**Problem.** For a subgroup N of G, the rule (g₁N)(g₂N) = g₁g₂N makes the cosets G/N a group exactly when N is normal. Normal subgroups are then the same as kernels of homomorphisms and as congruences on G.

**How the definition helps.** The rule (g₁N)(g₂N) = g₁g₂N is well defined exactly when conjugation preserves N (our own). Then the group laws pass to the cosets, and N is the kernel of the quotient map (our own). Every kernel is normal, and each congruence is fixed by its class of the identity, the kernel of its quotient map (our own).

**nLab:** [normal subgroup](https://ncatlab.org/nlab/show/normal+subgroup). It says: “Thus normal subgroups may also be defined as kernels f⁻¹(e) of group homomorphisms G → H (e ∈ H is the identity), and this is largely the point of normal subgroups: they are equivalent to congruence relations in the category of groups.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizers are largest groups preserving subgroups

**Remember:** Preserve the subgroup as a set, not point by point.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The normalizer of a subgroup H in G consists of the elements g with gHg⁻¹ = H. This asks g to preserve H as a set, not to fix each element.

**Problem.** The normalizer of H is the largest subgroup of G in which H is normal.

**How the definition helps.** The elements g with gHg⁻¹ = H form a subgroup containing H, and H is normal in it by definition (our own). Any subgroup in which H is normal consists of such elements, so it lies inside the normalizer (our own).

**nLab:** [normalizer](https://ncatlab.org/nlab/show/normalizer). It says: “If the subset S is in fact a subgroup of G, then it is a normal subgroup of the normalizer Nɢ(S)”

**Paper or page:** [Normalizer of Subgroup is Largest Subgroup containing that Subgroup as Normal Subgroup](https://proofwiki.org/wiki/Normalizer_of_Subgroup_is_Largest_Subgroup_containing_that_Subgroup_as_Normal_Subgroup). It says: “Then Nɢ(H), the normalizer of H in G, is the largest subgroup of G containing H as a normal subgroup.”

**Sources:** none listed. No primary source with a working link was found.

### Subgroups of cyclic groups stay cyclic

**Remember:** Lift the subgroup to the integers and send its generator back down.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A cyclic group is the image of the integers under a group homomorphism n ↦ gⁿ, for a generator g.

**Problem.** Every subgroup of a cyclic group is cyclic.

**How the definition helps.** The preimage of a subgroup H is a subgroup of ℤ, and its image is H again (our own). By division with remainder, every subgroup of ℤ is mℤ for some m ≥ 0 (our own). So H is generated by the image of m (our own).

**Paper or page:** [Subgroup of Cyclic Group is Cyclic](https://proofwiki.org/wiki/Subgroup_of_Cyclic_Group_is_Cyclic). It says: “Then H is cyclic.”

**Sources:** none listed. No primary source with a working link was found.

### The trivial group is not simple, so composition factors are unique

**Remember:** Simple means exactly two normal subgroups, not at most two.

*Rules out counterexamples.* MSC 20E32 (Simple groups), 20D30, 20D05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A group G is simple if it has exactly two normal subgroups, the trivial subgroup and G itself, so the trivial group is not simple.

**Problem.** Any two composition series of a finite group have the same length and the same simple factors, up to order (the Jordan–Hölder theorem). A composition series is a chain of subgroups, each normal in the next, whose successive quotients are simple.

**How the definition helps.** Since the trivial group is not simple, no step of a composition series can repeat a subgroup. Trivial factors would let a series be padded with repeated terms, so lengths would not be unique (our own). With padding excluded, the Jordan–Hölder induction proves that the lengths and the factors agree (our own).

**nLab:** [simple group](https://ncatlab.org/nlab/show/simple+group), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple), [Jordan-Hölder theorem](https://ncatlab.org/nlab/show/Jordan-H%C3%B6lder+theorem). It says: “Note that the trivial group does not itself count as simple, on the grounds that it has only \*one\* quotient group (or only one normal subgroup).”

**Sources:**

- [David Speyer, The Jordan–Hölder theorem, course notes for Math 594, University of Michigan (2013)](https://web.archive.org/web/20210926062254/http://www.math.lsa.umich.edu/~speyer/594_2013/JordanHolder.pdf)

### Characteristic subgroups pass normality down, which normal subgroups cannot

**Remember:** Fixed by every automorphism, so fixed by conjugation from above.

*Rules out counterexamples.* MSC 20F28 (Automorphism groups of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup H of G is characteristic if every automorphism of G maps H onto itself. Normality asks this only for the conjugations by elements of G.

**Problem.** If H is characteristic in K and K is normal in G, then H is normal in G. Also, a characteristic subgroup of a characteristic subgroup is characteristic.

**How the definition helps.** Conjugation by g ∈ G maps normal K onto itself, so it restricts to an automorphism of K and maps characteristic H onto itself (our own). The same restriction works for every automorphism of G when K is characteristic (our own). In the dihedral group of order eight, a reflection subgroup is normal in a normal Klein four-subgroup but not in the whole group (our own).

**Wikipedia:** [Characteristic subgroup](https://en.wikipedia.org/wiki/Characteristic_subgroup). It says: “Moreover, while normality is not transitive, it is true that every characteristic subgroup of a normal subgroup is normal.”

**Sources:** none listed. No primary source with a working link was found.

### Discreteness gives every frieze group a shortest positive shift

**Remember:** Every period is a whole number of shortest shifts.

*Rules out counterexamples.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** A frieze group is a discrete group of plane symmetries whose translation vectors span one line, with one direction along it called positive. Discrete means that the identity is isolated, so the nonzero translations cannot be arbitrarily short.

**Problem.** Every translation in a frieze group is an integer multiple of its shortest positive shift.

**How the definition helps.** The translations form a group, and discreteness gives it a shortest positive translation t (our own). Division with remainder writes any translation as a multiple of t plus a shorter remainder, which must be zero (our own). Without discreteness, the group of all translations along the line has no shortest one (our own).

**Wikipedia:** [Frieze group](https://en.wikipedia.org/wiki/Frieze_group). It says: “The inclusion of the discrete condition is to exclude the group containing all translations”

**Sources:** none listed. No primary source with a working link was found.

### Inverting rotations reveals the center of a dihedral group

**Remember:** Only a rotation equal to its inverse can sit in the center.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** The dihedral group of a regular n-gon is generated by a one-step rotation r and a reflection s. They satisfy srs = r⁻¹, so conjugating a rotation by a reflection reverses it.

**Problem.** For a polygon with n ≥ 3 sides, the center contains only the identity when n is odd. When n is even, it contains exactly the identity and the half-turn.

**How the definition helps.** A rotation rᵏ commutes with s exactly when rᵏ = r⁻ᵏ (our own). That holds only for the identity and, when n is even, the half-turn (our own). A reflection srᵏ commutes with r only if r = r⁻¹, which fails for n ≥ 3 (our own).

**Paper or page:** [Center of Dihedral Group](https://proofwiki.org/wiki/Center_of_Dihedral_Group). It says: “Dₙ = ⟨α, β: αⁿ = β² = e, βαβ = α⁻¹⟩”

**Sources:** none listed. No primary source with a working link was found.

### The linear part makes translations the kernel of Euclidean motions

**Remember:** Keep the matrix and forget the shift.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** A Euclidean isometry has the form x ↦ Ax + b, with A an orthogonal matrix, one that preserves dot products. Its linear part is the matrix A, which forgets the shift b.

**Problem.** Taking linear parts gives every orthogonal matrix and respects composition. Its kernel, the set of motions sent to the identity matrix, consists exactly of translations.

**How the definition helps.** Composing x ↦ Ax + b with x ↦ Cx + d gives x ↦ CAx + Cb + d, so linear parts multiply (our own). The linear part is the identity exactly for a translation x ↦ x + b, and each orthogonal A is the linear part of x ↦ Ax (our own). The real work is the theorem that every distance-preserving map has the form x ↦ Ax + b (our own).

**Wikipedia:** [Euclidean group](https://en.wikipedia.org/wiki/Euclidean_group). It says: “the linear part of the isometry”

**Sources:** none listed. No primary source with a working link was found.

### Finite cyclic groups have one model per order

**Remember:** The first power that returns to the identity gives the modulus.

*True by definition.* MSC 20K01 (Finite abelian groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A cyclic group is the image of the additive integers ℤ under n ↦ gⁿ, for a generator g, and hence a quotient of ℤ.

**Problem.** Any finite cyclic group of order n is isomorphic to the integers modulo n.

**How the definition helps.** The kernel of n ↦ gⁿ is a subgroup of ℤ, so it is mℤ, with m the first positive power that gives the identity (our own). In a group of order n, the powers g⁰, …, gⁿ⁻¹ are distinct and fill the group, so m = n (our own). The first isomorphism theorem then gives ℤ/nℤ (our own).

**Paper or page:** [Cyclic Groups of Same Order are Isomorphic](https://proofwiki.org/wiki/Cyclic_Groups_of_Same_Order_are_Isomorphic). It says: “Two cyclic groups of the same order are isomorphic to each other.”

**Sources:** none listed. No primary source with a working link was found.

### Residues that are units generate the finite cyclic group

**Remember:** To generate all residues, it is enough to reach one.

*True by definition.* MSC 20K01 (Finite abelian groups), 20A05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A residue k generates ℤ/nℤ if adding and subtracting copies of k reaches every residue. It is enough to reach 1, since copies of 1 reach everything (our own).

**Problem.** The residue of k generates ℤ/nℤ exactly when the greatest common divisor of k and n is 1. Thus the group has φ(n) generators, the number of residues coprime to n.

**How the definition helps.** Reaching 1 means ak + bn = 1 for some integers a and b (our own). By Bézout's identity, such a and b exist exactly when k and n have greatest common divisor 1 (our own). So the generators are the φ(n) residues coprime to n (our own).

**Paper or page:** [Finite Cyclic Group has Euler Phi Generators](https://proofwiki.org/wiki/Finite_Cyclic_Group_has_Euler_Phi_Generators). It says: “Then Cₙ has φ(n) generators, where φ(n) denotes the Euler φ function.”

**Sources:** none listed. No primary source with a working link was found.

### Coprime orders make cyclic products cyclic

**Remember:** A pair repeats when both coordinates repeat.

*Rules out counterexamples.* MSC 20K25 (Direct sums, direct products, etc. for abelian groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** In the direct product H × K, multiplication is coordinate by coordinate, so (h,k)ⁿ = (hⁿ,kⁿ). A pair returns to the identity exactly when both coordinates do (our own).

**Problem.** The direct product of two finite cyclic groups is cyclic exactly when their orders are coprime.

**How the definition helps.** For cyclic factors of orders m and n, every pair returns to the identity by the power lcm(m,n) (our own). The product has mn elements, and lcm(m,n) = mn exactly when m and n are coprime, when a pair of generators has order mn (our own). For example, C₂ × C₂ has no element of order four.

**Paper or page:** [Group Direct Product of Cyclic Groups/Examples/C2 x C2](https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups/Examples/C2_x_C2), [Group Direct Product of Cyclic Groups](https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups). It says: “The group direct product C₂ × C₂ is not a cyclic group.”

**Sources:** none listed. No primary source with a working link was found.

### Setting a⁰ equal to the identity gives index laws for all integers

**Remember:** The empty product is the identity, so a⁰ = e.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20M10 (General structure theory for semigroups), 20M17. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a monoid element a, put a⁰ = e, the empty product, and aⁿ⁺¹ = aⁿ ∘ a for each integer n ≥ 0. If a is invertible, put a⁻ⁿ = (a⁻¹)ⁿ for each positive integer n.

**Problem.** For an invertible element a of a monoid and all integers m and n, a to the power nm equals (aᵐ)ⁿ and (aⁿ)ᵐ.

**How the definition helps.** With these choices, k ↦ aᵏ is a homomorphism from ℤ to the invertible elements (our own). Both k ↦ (aᵐ)ᵏ and k ↦ aᵐᵏ are then homomorphisms from ℤ that agree at 1, so they agree everywhere (our own).

**Paper or page:** [Index Laws for Monoids/Product of Indices](https://proofwiki.org/wiki/Index_Laws_for_Monoids/Product_of_Indices). It says: “Then: ∀ m, n ∈ ℤ: aⁿᵐ = (aᵐ)ⁿ = (aⁿ)ᵐ”

**Sources:**

- [ProofWiki, Index Laws for Monoids/Product of Indices](https://proofwiki.org/wiki/Index_Laws_for_Monoids/Product_of_Indices)

### Commutators give a quotient through which all abelian images factor

**Remember:** Killing every commutator makes every pair commute.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The abelianization of G is its quotient by the subgroup generated by all commutators x⁻¹y⁻¹xy. A commutator is trivial exactly when x and y commute.

**Problem.** The abelianization is abelian. Every homomorphism from G to an abelian group factors uniquely through it.

**How the definition helps.** In the quotient every commutator is trivial, so every pair of elements commutes (our own). A homomorphism to an abelian group kills every commutator, so it kills the commutator subgroup and factors uniquely through the quotient (our own). The commutator subgroup is normal because conjugation sends commutators to commutators (our own).

**nLab:** [abelianization](https://ncatlab.org/nlab/show/abelianization). It says: “The abelianization is an abelian group. Indeed, it is the universal abelian group induced by G, in the following sense:”

**Sources:** none listed. No primary source with a working link was found.

### Defining quotients by their maps out makes the third isomorphism theorem automatic

**Remember:** Killing N and then H/N kills exactly the elements of H.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define G/N by its maps out: it is a group with a homomorphism from G that kills N. Every homomorphism from G that kills N factors through it in exactly one way.

**Problem.** Let N and H be normal subgroups of G, with N inside H. Then H/N is normal in G/N, and (G/N)/(H/N) is isomorphic to G/H.

**How the definition helps.** Homomorphisms out of (G/N)/(H/N) correspond to homomorphisms out of G that kill N and H, that is, that kill H (our own). That is the universal property of G/H, so the two groups are isomorphic (our own). H/N is normal because it is the kernel of the induced map G/N → G/H (our own).

**Paper or page:** [Third Isomorphism Theorem/Groups](https://proofwiki.org/wiki/Third_Isomorphism_Theorem/Groups). It says: “(G / N) / (H / N) ≅ G / H”

**Sources:** none listed. No primary source with a working link was found.

### Order as a kernel generator makes image orders divide original orders

**Remember:** More exponents kill f(a), so its order divides a's order.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The exponents n with aⁿ = e form a subgroup of ℤ, the kernel of n ↦ aⁿ. The order of a is the positive generator of this kernel, and a has infinite order if the kernel is {0}.

**Problem.** If f is a group homomorphism and a has finite order, then the order of f(a) divides the order of a.

**How the definition helps.** Every exponent that kills a also kills f(a), so the kernel for f(a) contains the kernel for a (our own). If dℤ contains mℤ, then d divides m (our own).

**Wikipedia:** [Order (group theory)](https://en.wikipedia.org/wiki/Order_%28group_theory%29). It says: “Group homomorphisms tend to reduce the orders of elements: if f: G → H is a homomorphism, and a is an element of G of finite order, then ord(f(a)) divides ord(a).”

**Sources:** none listed. No primary source with a working link was found.

### Powers defined by a group homomorphism obey the exponent law

**Remember:** A homomorphism from ℤ turns sums of exponents into products.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups), 97H20. arXiv math.GR, math.HO. Level 2: later undergraduate.

**Definition.** For b in a group G, let h:ℤ → G be the unique homomorphism with h(1) = b. Define bⁿ = h(n) for each integer n.

**Problem.** For all integers m and n, bᵐ⁺ⁿ = bᵐbⁿ.

**How the definition helps.** The homomorphism rule gives h(m+n) = h(m)h(n), exactly the exponent law (our own). Existence and uniqueness of h follow because ℤ is freely generated by 1 (our own).

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “This definition of exponentiation with negative exponents is the only one that allows extending the identity bᵐ⁺ⁿ = bᵐ · bⁿ to negative exponents (consider the case m = −n).”

**Sources:** none listed. No primary source with a working link was found.

### The kernel definition makes preimages of normal subgroups normal

**Remember:** The preimage of a kernel is the kernel of the composite.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Call a subgroup N of G normal if it is the kernel of some group homomorphism out of G. The kernel is the set of elements sent to the identity.

**Problem.** Let φ from G₁ to G₂ be any group homomorphism and H a normal subgroup of G₂. The preimage of H is normal in G₁.

**How the definition helps.** Write H as the kernel of a homomorphism q out of G₂. Then φ⁻¹(H) is the kernel of q ∘ φ, so it is normal (our own).

**Paper or page:** [Preimage of Normal Subgroup under Epimorphism is Normal Subgroup](https://proofwiki.org/wiki/Preimage_of_Normal_Subgroup_under_Epimorphism_is_Normal_Subgroup). It says: “φ⁻¹\[H\] is a normal subgroup of (G₁, ∘)”

**Sources:** none listed. No primary source with a working link was found.

### The smallest prime index forces a subgroup to be normal

**Remember:** Act on the p cosets; only a group of order p fits.

*True by definition.* MSC 20B05 (General theory for finite permutation groups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A subgroup H of index p gives a homomorphism from G to the permutations of its p left cosets, by left multiplication. Its kernel lies inside H, the stabilizer of the coset H (our own).

**Problem.** If the index of a subgroup H of a finite group G is the smallest prime p dividing \|G\|, then H is normal.

**How the definition helps.** The image of the coset action has order dividing both \|G\| and p!. Since p is the smallest prime factor of \|G\|, their greatest common divisor is p (our own). The action is transitive, so the image has order p, and the kernel has index p and equals H (our own).

**Wikipedia:** [Index of a subgroup](https://en.wikipedia.org/wiki/Index_of_a_subgroup). It says: “a subgroup of index p where p is the smallest prime factor of the order of G (if G is finite) is necessarily normal”

**Sources:** none listed. No primary source with a working link was found.

### Primitive actions are exactly the actions on cosets of maximal subgroups

**Remember:** No block to keep means no subgroup in between.

*True by definition.* MSC 20B15 (Primitive groups), 20E28. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A transitive action on a set with at least two points is primitive if its only invariant partitions are the singletons and the whole set.

**Problem.** For H properly contained in G, the action on G/H is primitive exactly when H is maximal. Isomorphism classes of primitive G-sets thus correspond to conjugacy classes of maximal subgroups.

**How the definition helps.** In G/H, the block through the point H of an invariant partition is K/H for a subgroup K between H and G (our own). Every such K gives an invariant partition, so nontrivial blocks exist exactly when H is not maximal (our own). Changing the base point conjugates H, which gives the correspondence with conjugacy classes (our own).

**Wikipedia:** [Primitive permutation group](https://en.wikipedia.org/wiki/Primitive_permutation_group). It says: “A group action is primitive if it is isomorphic to G/H for a maximal subgroup H of G, and imprimitive otherwise”

**Sources:** none listed. No primary source with a working link was found.

### Cycle lengths classify conjugacy in the full symmetric group

**Remember:** Match loops of equal lengths and relabel along each loop.

*Rules out counterexamples.* MSC 20B30 (Symmetric groups), 20B05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The cycle type of a permutation is the multiset of its cycle lengths, counting fixed points as cycles of length one. Conjugating by π relabels points: it sends each cycle (a₁ … a<sub>k</sub>) to (π(a₁) … π(a<sub>k</sub>)).

**Problem.** Two permutations of the same finite set are conjugate in its full symmetric group exactly when they have the same cycle type.

**How the definition helps.** Conjugation only relabels points, so it keeps the cycle type (our own). Given equal cycle types, pair cycles of equal length and let π send each point to its partner in cycle order (our own). In A₃, which allows fewer relabelings, (123) and (132) have the same type but are not conjugate.

**Wikipedia:** [Alternating group](https://en.wikipedia.org/wiki/Alternating_group). It says: “The two permutations (123) and (132) are not conjugates in A₃, although they have the same cycle shape”

**Paper or page:** [Conjugate of Cycle](https://proofwiki.org/wiki/Conjugate_of_Cycle). It says: “Then the conjugate πσπ⁻¹ is a cycle of length k.”

**Sources:** none listed. No primary source with a working link was found.

### Pairing swaps shows why three-point cycles generate even permutations

**Remember:** Pair the swaps, then replace each pair by cycles of length three.

*True by definition.* MSC 20B30 (Symmetric groups), 20B05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** An even permutation is a product of an even number of swaps, that is, a product of pairs of swaps (our own).

**Problem.** For n ≥ 3, the alternating group Aₙ of even permutations is generated by its cycles of length three.

**How the definition helps.** Each pair of swaps is a product of three-cycles: equal swaps cancel, (ab)(ac) = (acb), and (ab)(cd) = (ab)(bc)·(bc)(cd) (our own). Conversely, every three-cycle is a pair of swaps, so it is even (our own).

**Paper or page:** [Alternating Group is Generated by 3-Cycles](https://proofwiki.org/wiki/Alternating_Group_is_Generated_by_3-Cycles). It says: “Then Aₙ can be generated by the set of 3-cycles:”

**Sources:** none listed. No primary source with a working link was found.

### The sign kernel makes the alternating group normal with index two

**Remember:** The two signs give the two cosets of the kernel.

*True by definition.* MSC 20B30 (Symmetric groups), 20B35. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For n ≥ 2, the sign of a permutation in Sₙ is the determinant of its permutation matrix, which is +1 or −1. The alternating group Aₙ is the kernel of this sign map.

**Problem.** For n ≥ 2, the alternating group Aₙ is normal in Sₙ with index two, so it has n!/2 elements.

**How the definition helps.** Determinants multiply, so the sign is a homomorphism and its kernel Aₙ is normal (our own). A transposition has sign −1, so the sign map is onto {+1, −1} and Aₙ has index two (our own).

**Wikipedia:** [Parity of a permutation](https://en.wikipedia.org/wiki/Parity_of_a_permutation), [Alternating group](https://en.wikipedia.org/wiki/Alternating_group). It says: “It is the kernel of the signature group homomorphism sgn : Sₙ → {1, −1} explained under symmetric group.”

**Sources:** none listed. No primary source with a working link was found.

### An invariant basis orbit identifies the regular representation

**Remember:** One vector whose translates form a basis gives the regular representation.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The left regular representation has a basis e<sub>g</sub> indexed by the group elements, and h sends e<sub>g</sub> to e<sub>hg</sub>. So the translates of the single basis vector of the identity element form the basis (our own).

**Problem.** A representation of a finite group is isomorphic to its left regular representation exactly when the group translates of one vector form a group-indexed basis.

**How the definition helps.** Suppose the translates gv of one vector form a basis. Sending e<sub>g</sub> to gv is then a linear bijection that respects the action, since h(gv) = (hg)v (our own). Conversely, the translates of the basis vector of the identity element are the basis e<sub>g</sub>.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “is isomorphic to the left-regular representation if and only if there exists”

**Sources:** none listed. No primary source with a working link was found.

### An invertible group order makes Maschke averaging work

**Remember:** Divide by the group order to average a projection.

*Rules out counterexamples.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The order \|G\| of a finite group is invertible in a field k when \|G\|·1, the sum of \|G\| copies of 1, is nonzero in k. Then one can divide by \|G\| to take averages.

**Problem.** If the group order is invertible in the field, every invariant subspace of a finite-dimensional representation has an invariant complement.

**How the definition helps.** Dividing by \|G\| lets us average the group conjugates of a linear projection onto the invariant subspace (our own). The average is still such a projection and commutes with the group, so its kernel is an invariant complement (our own). Over the field with two elements, swapping two basis vectors fixes only the line of their sum, which has no invariant complement.

**nLab:** [Maschke's theorem](https://ncatlab.org/nlab/show/Maschke%27s+theorem). It says: “If \|G\| · 1ₖ is invertible in k, then an exact sequence of k\[G\]-modules splits iff it splits after applying the forgetful functor”

**Sources:** none listed. No primary source with a working link was found.

### Coset blocks give the induced character formula

**Remember:** Only cosets fixed by an element contribute to its induced trace.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Induce from a subgroup H of G by placing one copy of the H-space at each left coset tH, for chosen representatives t. An element g carries the copy at tH to the copy at gtH = sH, acting there by s⁻¹gt ∈ H.

**Problem.** If χ is the subgroup character, the induced character at g sums χ(t⁻¹gt) over representatives t of the left cosets fixed by g.

**How the definition helps.** The trace of g sees only the diagonal blocks, which belong to the cosets that g fixes (our own). If gtH = tH, the block acts by t⁻¹gt ∈ H, so it contributes χ(t⁻¹gt) (our own). This block model agrees with tensor-product induction, since the representatives form a basis of the group algebra over the subgroup algebra.

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “where the sum is taken over a system of representatives of the left cosets”

**Sources:** none listed. No primary source with a working link was found.

### Defining induction as a tensor product makes Frobenius reciprocity automatic

**Remember:** Induction is a tensor product, so Frobenius reciprocity is the tensor–hom rule.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 16D20. arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** Let V be a representation of a subgroup H of G over a field 𝕂. The induced representation Ind V is 𝕂\[G\] ⊗ V over 𝕂\[H\], with G multiplying the first factor on the left.

**Problem.** Maps of G-representations from Ind V to W correspond naturally to maps of H-representations from V to the restriction Res W. For finite groups over ℂ, the inner product over G of Ind χ and ψ equals the inner product over H of χ and Res ψ.

**How the definition helps.** Frobenius reciprocity is then the tensor–hom rule: a G-map out of 𝕂\[G\] ⊗ V is fixed by its values on 1 ⊗ V (our own). Conversely, any H-map f extends by g ⊗ v ↦ g f(v) (our own). For finite groups over ℂ, the dimensions of these map spaces are the character inner products (our own).

**nLab:** [induced representation](https://ncatlab.org/nlab/show/induced+representation), [Frobenius reciprocity](https://ncatlab.org/nlab/show/Frobenius+reciprocity). It says: “is the statement that the induction functor for representations of groups (or in some other algebraic categories) is left adjoint to the restriction functor.”

**Sources:**

- [George Mackey, Induced representations of locally compact groups I, Annals of Math. 55 (1952) 101–139](https://doi.org/10.2307/1969423)

### Group algebra modules extend group actions uniquely

**Remember:** Make group elements a basis, then extend their action linearly.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The group algebra k\[G\] over a field k is the vector space with the group elements as a basis. Its multiplication is the group law, extended linearly.

**Problem.** Every linear group action extends uniquely to a unital module over the group algebra. Every such module restricts to a linear group action.

**How the definition helps.** A linear map is fixed by its values on a basis, so a group action has exactly one linear extension to k\[G\] (our own). Expanding on basis elements checks the module rules (our own). Conversely, a unital module gives a group action, because g⁻¹ acts as the inverse of g (our own).

**Wikipedia:** [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “As a ring, its addition law is that of the free module and its multiplication extends "by linearity" the given group law on the basis.”

**Sources:** none listed. No primary source with a working link was found.

### Inducing the trivial action gives the action on cosets

**Remember:** One trivial line per coset gives one permuted basis vector.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Induction from H to G takes k\[G\] ⊗ V modulo the relations gh ⊗ v = g ⊗ hv, with G multiplying the first factor. For the trivial module k, the relation reads gh ⊗ 1 = g ⊗ 1, so g ⊗ 1 depends only on the coset gH.

**Problem.** Inducing the trivial representation from a subgroup gives the permutation representation on its left cosets.

**How the definition helps.** The vectors g ⊗ 1, one for each coset gH, form a basis of the induced module (our own). Left multiplication by g′ sends g ⊗ 1 to g′g ⊗ 1, which is the permutation action on cosets (our own).

**nLab:** [induced representation of the trivial representation](https://ncatlab.org/nlab/show/induced+representation+of+the+trivial+representation). It says: “is the permutation representation k\[G/H\] of the coset G-set G/H”

**Sources:** none listed. No primary source with a working link was found.

### Representations as group algebra modules turn Maschke into Wedderburn structure

**Remember:** Representations are modules over the group algebra.

*Makes the theorem clean to state or prove.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 16S34. arXiv math.RT, math.RA. Level 2: later undergraduate.

**Definition.** The complex group algebra ℂ\[G\] of a finite group G has basis G, with the group law extended bilinearly. A complex representation of G is the same as a module over ℂ\[G\].

**Problem.** For finite G, ℂ\[G\] is a product of matrix algebras of size dim V, one for each irreducible type V, so the numbers (dim V)² sum to \|G\|. The number of irreducible types equals the number of conjugacy classes.

**How the definition helps.** Maschke's theorem makes ℂ\[G\] semisimple, so the Wedderburn–Artin theorem splits it into matrix algebras, one for each simple module. Counting dimensions gives the sum of squares (our own). The center has one dimension per factor and has the class sums as a basis, one per conjugacy class (our own).

**Wikipedia:** [Maschke's theorem](https://en.wikipedia.org/wiki/Maschke%27s_theorem), [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “The importance of this result stems from the well developed theory of semisimple rings, in particular, their classification as given by the Wedderburn–Artin theorem.”

**Sources:**

- [Maschke, H. (1898). Ueber den arithmetischen Charakter der Coefficienten der Substitutionen endlicher linearer Substitutionsgruppen. Mathematische Annalen 50, 492–498.](https://doi.org/10.1007/BF01444297)

### Twisting the coset copies explains induction after restriction

**Remember:** Move the action on each coset copy into the tensor factor.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Induction from a subgroup H of a finite group G uses symbols \[g, v\], linear in v, with \[gh, v\] = \[g, hv\] for h in H. The group G multiplies the first entry on the left.

**Problem.** Restricting a complex G-representation V to H and then inducing it gives ℂ\[G/H\] ⊗ V with the group acting on both factors. Here ℂ\[G/H\] is the permutation space of the left cosets.

**How the definition helps.** When V is a G-representation, \[g, v\] ↦ gH ⊗ gv needs no coset representatives, since \[gh, h⁻¹v\] has the same image (our own). The map respects left translation, and its inverse sends gH ⊗ w to \[g, g⁻¹w\] (our own).

**Paper or page:** [Foams, iterated wreath products, field extensions and Sylvester sums](https://arxiv.org/abs/2107.07845v2). It says: “Consequently, the composition of restriction and induction functors is isomorphic to the functor of tensor product with the induced representation Indᴳₕ(k).”

**Sources:**

- [Mee Seong Im and Mikhail Khovanov, Foams, iterated wreath products, field extensions and Sylvester sums, Lemma 4.1](https://arxiv.org/abs/2107.07845v2)

### A character detects its kernel at full degree

**Remember:** Only identity actions give the full degree as trace.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The character value at g is the trace of g's action, the sum of its eigenvalues. Each eigenvalue is a root of unity because g has finite order (our own), and the degree is the dimension.

**Problem.** In a finite-dimensional complex representation of a finite group, an element acts as the identity exactly when its character value equals the degree.

**How the definition helps.** Each root of unity has real part at most 1, so the trace equals the degree only when every eigenvalue is 1 (our own). The action of g satisfies xᵐ − 1 = 0, whose roots are distinct, so it is diagonalizable (our own). With all eigenvalues 1, it is the identity (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “Since the trace of the identity matrix is the number of rows”

**Sources:** none listed. No primary source with a working link was found.

### Algebraic closure removes nonscalar maps from Schur’s lemma

**Remember:** An eigenvalue gives Schur’s lemma its scalar.

*Rules out counterexamples.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** A field is algebraically closed if every nonconstant polynomial over it has a root in the field. So every linear map on a nonzero finite-dimensional space has an eigenvalue (our own).

**Problem.** Over an algebraically closed field, every linear map commuting with a finite-dimensional irreducible group action is a scalar multiple of the identity.

**How the definition helps.** A commuting map T has an eigenvalue c, and the kernel of T − c is a nonzero invariant subspace (our own). Irreducibility makes this kernel the whole space, so T = c·id (our own). Over the real numbers, a rotation by a third of a turn acts irreducibly on the plane and commutes with itself without being scalar.

**nLab:** [Schur's lemma](https://ncatlab.org/nlab/show/Schur%27s+lemma). It says: “are multiples c · id of the identity operator.”

**Sources:** none listed. No primary source with a working link was found.

### Averaging rank-one maps gives matrix coefficient orthogonality

**Remember:** Average a single-entry map, then use Schur’s lemma.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Let U and V be finite-dimensional unitary representations of a finite group G, with orthonormal bases. Average a linear map A from U to V as the group mean of V(g) A U(g⁻¹). For A with one nonzero entry, the average's entries are inner products of matrix coefficients, the action-matrix entries as functions of g (our own).

**Problem.** For pairwise inequivalent irreducible unitary representations of G, distinct indexed coefficients in orthonormal bases are orthogonal under the group-average inner product. Each coefficient of a representation of dimension d has squared norm 1/d.

**How the definition helps.** The average commutes with the actions, so Schur's lemma makes it zero between inequivalent irreducibles and a scalar within one irreducible (our own). Averaging keeps the trace, so the scalar is trace(A)/d: 1/d for a diagonal single-entry matrix and 0 otherwise (our own).

**Wikipedia:** [Schur orthogonality relations](https://en.wikipedia.org/wiki/Schur_orthogonality_relations). It says: “only valid for matrix elements of irreducible representations”

**Sources:** none listed. No primary source with a working link was found.

### Averaging the action counts fixed vectors by trace

**Remember:** Average the action, then take its trace to count fixed dimensions.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a complex representation of a finite group, the averaging operator is the sum of the action maps divided by the group order. It is a projection onto the fixed vectors (our own).

**Problem.** For a finite-dimensional complex representation of a finite group, the dimension of its fixed subspace is the average of its character values.

**How the definition helps.** Multiplying the average by any group element permutes its terms, so its image consists of fixed vectors, and it fixes each fixed vector (our own). The trace of a projection is the dimension of its image (our own). The trace of the average is the average of the character values.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “Since the trace of the projection is the sum of all eigenvalues”

**Sources:** none listed. No primary source with a working link was found.

### Character averages project onto each irreducible type

**Remember:** Weight an action average by a character to select its type.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 20C05. arXiv math.RT. Level 2: later undergraduate.

**Definition.** Let χ be an irreducible complex character of degree d of a finite group G, and ρ a representation of G. The operator sums ρ(g) over g ∈ G, each with weight d times the complex conjugate of χ(g), divided by \|G\|.

**Problem.** In any finite-dimensional complex representation of a finite group, this operator projects onto the sum of all irreducible subspaces with character χ.

**How the definition helps.** The weights are constant on conjugacy classes, so the operator commutes with the group (our own). By Schur's lemma it is a scalar on each irreducible summand (our own). Character orthogonality makes that scalar 1 on summands with character χ and 0 on the others (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “The projection pⱼ: V → V(τⱼ) corresponding to the canonical decomposition is given by”

**Sources:** none listed. No primary source with a working link was found.

### Character coordinates determine the whole representation

**Remember:** Character coordinates count copies of the irreducible representations.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** A class function is constant on conjugacy classes. The inner product of two complex class functions is the group average of the first times the complex conjugate of the second. Pairing a character with an irreducible character counts the copies of that irreducible (our own).

**Problem.** Two finite-dimensional complex representations of a finite group are isomorphic if and only if their characters agree.

**How the definition helps.** By Maschke's theorem, each representation is a sum of irreducibles (our own). By Schur orthogonality, the inner products with irreducible characters read off the multiplicities, so equal characters give isomorphic representations (our own).

**nLab:** [character of a linear representation](https://ncatlab.org/nlab/show/character+of+a+linear+representation). It says: “in characteristic zero the character homomorphism is injective”

**Sources:** none listed. No primary source with a working link was found.

### Conjugation turns maps of representations into fixed vectors

**Remember:** A map of representations is fixed by the action on maps.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Let ρ and σ be representations of a finite group G on finite-dimensional complex spaces V and W. Let G act on linear maps f from V to W by f ↦ σ(g) f ρ(g⁻¹). Its fixed maps are exactly the maps of representations (our own).

**Problem.** For these representations, the dimension of the equivariant map space equals the group average of trace(ρ(g⁻¹)) trace(σ(g)).

**How the definition helps.** The dimension of the fixed vectors of any representation is the group average of its character (our own). The trace of f ↦ σ(g) f ρ(g⁻¹) is trace(ρ(g⁻¹)) trace(σ(g)), which gives the formula (our own).

**nLab:** [character of a linear representation](https://ncatlab.org/nlab/show/character+of+a+linear+representation). It says: “Then the Schur inner product of the two representation equals the convolution product of their characters, normalized by the order of G”

**Sources:** none listed. No primary source with a working link was found.

### Counting maps makes Schur orthogonality a direct consequence

**Remember:** Count equivariant maps, and Schur's lemma becomes orthonormality.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For finite-dimensional complex representations V and W of a finite group G, let ⟨V,W⟩ be the dimension of the space of G-equivariant maps from V to W. Extend it to formal differences by bilinearity.

**Problem.** The distinct irreducible representations form an orthonormal basis of the representation ring, the group of formal differences of representations.

**How the definition helps.** Schur's lemma says exactly that this pairing is 0 between nonisomorphic irreducibles and 1 for an irreducible with itself. Complete reducibility writes every representation as a sum of irreducibles, so they also span (our own).

**nLab:** [Schur's lemma](https://ncatlab.org/nlab/show/Schur%27s+lemma). It says: “the isomorphism classes of irreducible representations form an orthogonal basis for the representation ring, and even an orthonormal basis if the ground field is algebraically closed.”

**Sources:** none listed. No primary source with a working link was found.

### Defining induced characters by reciprocity makes them characters at once

**Remember:** Define by reciprocity, and nonnegative integer coefficients come for free.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** Let θ be a complex character of a subgroup H of a finite group G. Define θᴳ as the class function on G with ⟨θᴳ,χ⟩ = ⟨θ,χ restricted to H⟩ for each irreducible character χ of G. Each right-hand side counts common irreducible summands, so it is a nonnegative integer.

**Problem.** The induced class function θᴳ is a character of G, that is, the character of an actual representation.

**How the definition helps.** So θᴳ is the sum of the irreducible characters χ with these nonnegative integer coefficients. The direct sum of that many copies of each irreducible representation has character θᴳ.

**Wikipedia:** [Character theory](https://en.wikipedia.org/wiki/Character_theory). It says: “this definition makes it clear that θᴳ is a non-negative integer combination of irreducible characters of G, so is indeed a character of G.”

**Sources:** none listed. No primary source with a working link was found.

### Eigenvalue sums make character values algebraic integers

**Remember:** A character value is a sum of roots of unity.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The character value at g is the sum of the eigenvalues of g's action. Each eigenvalue is a root of unity, a root of xᵐ − 1 with m the order of g (our own). So it is an algebraic integer, a root of a monic integer polynomial.

**Problem.** Every character value of a finite-dimensional complex representation of a finite group is an algebraic integer.

**How the definition helps.** Algebraic integers are closed under addition, so the sum of the eigenvalues is an algebraic integer.

**Paper or page:** [Character of Representations over C are Algebraic Integers](https://proofwiki.org/wiki/Character_of_Representations_over_C_are_Algebraic_Integers). It says: “Then for all g ∈ G, it follows that χ(g) is an algebraic integer.”

**Sources:** none listed. No primary source with a working link was found.

### Full character modulus detects the group centre

**Remember:** A central element acts by one phase on each irreducible.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The normalized character of a nonzero complex representation at g is the trace of g's action divided by the degree, the average of its eigenvalues. These lie on the unit circle, so the average has absolute value one exactly when g acts as a scalar (our own).

**Problem.** An element of a finite group is central exactly when every irreducible complex character has normalized value of absolute value one at that element.

**How the definition helps.** By Schur's lemma, a central element acts as a scalar on every irreducible (our own). Conversely, such an element commutes with everything in the regular representation, a sum of irreducibles (our own). The regular representation is faithful, so the element is central (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “these eigenvalues are all m-th roots of unity.”

**Sources:** none listed. No primary source with a working link was found.

### Grouping equivalent summands makes the decomposition canonical

**Remember:** Group all copies of one type before asking for uniqueness.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The isotypic component of an irreducible representation W in a representation V is the sum of all invariant subspaces of V isomorphic to W. It takes every copy at once instead of choosing some.

**Problem.** Every finite-dimensional complex representation of a finite group is the direct sum of its isotypic components. This decomposition is unique, although a decomposition into individual irreducible copies need not be.

**How the definition helps.** The component needs no choice of splitting, so the decomposition is unique once it exists (our own). Maschke's theorem gives a splitting into irreducibles (our own). Schur's lemma shows that every copy of W lies in the sum of the summands of type W (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “This decomposition is uniquely determined. It is called the canonical decomposition.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant forms explain the three Frobenius–Schur values

**Remember:** At most one invariant form survives, so its symmetry decides the sign.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For an irreducible complex representation V of a finite group G, the invariant bilinear forms on V make up a space of dimension at most one (our own). A form B is invariant when B(gv,gw) = B(v,w) for all g, v, w. The Frobenius–Schur indicator of V is the dimension of its invariant symmetric forms minus that of its invariant alternating forms.

**Problem.** The indicator is 1 if V admits a nonzero invariant symmetric form, −1 if it admits a nonzero invariant alternating form, and 0 otherwise.

**How the definition helps.** Since the invariant forms make up at most a line, the indicator can only be 1, −1 or 0 (our own). The bound holds because invariant forms are G-maps V → V\*, and Schur’s lemma bounds these by one dimension (our own). The symmetric and alternating parts of an invariant form are invariant, so a nonzero form is purely one or the other (our own).

**Wikipedia:** [Frobenius–Schur indicator](https://en.wikipedia.org/wiki/Frobenius%E2%80%93Schur_indicator). It says: “The inner product counts the multiplicities of direct summands; the equivalence of the definitions then follows immediately.”

**Sources:** none listed. No primary source with a working link was found.

### One generator gives the multiplicities in the regular representation

**Remember:** Maps out of ℂ\[G\] are vectors: just say where 1 goes.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT. Level 2: later undergraduate.

**Definition.** The regular representation of a finite group G is the group algebra ℂ\[G\], the complex space with basis G, with G acting by left multiplication. It is free on the generator 1: a G-map from ℂ\[G\] to V is fixed by where it sends 1, and 1 can go to any vector.

**Problem.** Every irreducible complex representation V of G occurs in ℂ\[G\] with multiplicity dim V. Thus the squares of the dimensions of the distinct irreducible representations sum to \|G\|.

**How the definition helps.** Evaluation at 1 makes the space of G-maps ℂ\[G\] → V have dimension dim V (our own). By Maschke’s theorem and Schur’s lemma, the same space has dimension equal to the multiplicity of V in ℂ\[G\] (our own). Counting dimensions in the decomposition of ℂ\[G\] gives the sum of squares (our own).

**nLab:** [regular representation](https://ncatlab.org/nlab/show/regular+representation). It says: “Over the complex numbers, the regular representation of a finite group is a direct sum that contains each irreducible representation ρᵢ with multiplicity its dimension:”

**Sources:** none listed. No primary source with a working link was found.

### Ordered pairs detect irreducibility of the permutation complement

**Remember:** Two orbits on ordered pairs mean one irreducible piece beyond constants.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a finite group acting transitively on a finite set X, the augmentation subspace holds the vectors whose coordinates sum to zero in the complex space with basis X. The permutation character counts fixed points, so its square counts fixed ordered pairs. The action is doubly transitive when it has exactly two orbits on ordered pairs: the diagonal and the pairs of distinct points.

**Problem.** For a transitive finite group action on at least two points, the augmentation subspace is irreducible exactly when the action is doubly transitive.

**How the definition helps.** By the orbit-counting lemma, the squared norm of the permutation character is the number of orbits on ordered pairs (our own). Transitivity gives exactly one constant summand, so the augmentation character has squared norm one less (our own). It is irreducible exactly when that norm is one, that is, when there are exactly two orbits on pairs (our own).

**nLab:** [permutation representation](https://ncatlab.org/nlab/show/permutation+representation). It says: “The characters of permutation representations are the Burnside marks of the underlying G-sets:”

**Sources:** none listed. No primary source with a working link was found.

### Product groups have tensor products as their irreducibles

**Remember:** On a direct product, take one irreducible from each factor.

*Makes the theorem clean to state or prove.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For representations V of G and W of H, the outer tensor product is V ⊗ W, with (g, h) acting as g on V and h on W. Its character is the product of the two characters, χ<sub>V</sub>(g)χ<sub>W</sub>(h).

**Problem.** The irreducible complex representations of a direct product of finite groups are exactly the outer tensor products of pairs of irreducibles.

**How the definition helps.** Because characters multiply, inner products of these characters split into an inner product over G times one over H (our own). So the outer product of two irreducibles has norm one, and distinct pairs give orthogonal characters (our own). These are all the irreducibles, because the product has one conjugacy class for each pair of classes (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “This representation is called outer tensor product”

**Sources:** none listed. No primary source with a working link was found.

### Quotient actions recover normal subgroups from character kernels

**Remember:** Inflated characters see only cosets, so their kernels cut out exactly N.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a normal subgroup N of G, a representation of G/N inflates to G by letting each g act as its coset gN does. The kernel of the inflated character, the elements acting as the identity, is the inverse image of the kernel in G/N, so it always contains N.

**Problem.** Every normal subgroup N of a finite group G is the intersection of the kernels of the irreducible characters inflated from G/N.

**How the definition helps.** Inflation reduces the claim to the quotient G/N, where the kernels of the irreducible characters must meet only in the identity (our own). There the regular representation is faithful and, by Maschke’s theorem, a sum of irreducibles (our own). Taking inverse images turns this trivial intersection into N (our own).

**Wikipedia:** [Character theory](https://en.wikipedia.org/wiki/Character_theory). It says: “Each normal subgroup of G is the intersection of the kernels of some of the irreducible characters of G.”

**Sources:** none listed. No primary source with a working link was found.

### Swapping tensor factors gives both square character formulas

**Remember:** The swap splits V ⊗ V into its +1 and −1 halves.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a finite-dimensional complex representation V, the swap S exchanges the two factors of V ⊗ V. The symmetric square and the exterior square are its +1 and −1 eigenspaces, cut out by the projections (1 + S)/2 and (1 − S)/2.

**Problem.** For an element g of a finite group, the symmetric square has character value (χ(g)² + χ(g²))/2, where χ is the original character. The exterior square has value (χ(g)² − χ(g²))/2.

**How the definition helps.** The projections commute with g ⊗ g, so the two characters are (tr(g ⊗ g) ± tr((g ⊗ g)S))/2 (our own). The first trace is χ(g)². In an eigenbasis of g, only pairs of equal basis vectors contribute to the second trace, which gives the sum of squared eigenvalues, χ(g²) (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “These subspaces are G–invariant”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products make induction transitive

**Remember:** Induction is tensoring with the group algebra, and tensoring is associative.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** For a field k and a subgroup H of G, the representation induced from an H-module W is k\[G\] ⊗ W, with the tensor product taken over k\[H\]. The group G acts by left multiplication on the factor k\[G\].

**Problem.** Let H ≤ G ≤ K be finite groups and W a representation of H over k. Inducing through G gives a representation isomorphic to the one induced directly to K.

**How the definition helps.** With this definition, transitivity is the associativity of tensor products (our own). Inducing in two steps gives k\[K\] ⊗ (k\[G\] ⊗ W), and associativity regroups it as (k\[K\] ⊗ k\[G\]) ⊗ W (our own). Multiplication identifies k\[K\] ⊗ k\[G\], taken over k\[G\], with k\[K\], which gives the direct induction (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “Transitivity of induction. Let W be a representation of H and let H ≤ G ≤ K be an ascending series of groups.”

**Sources:** none listed. No primary source with a working link was found.

### The character norm tests irreducibility

**Remember:** Squared norm is a sum of integer squares; one means one.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a finite group, the squared norm of a character is the average of its squared absolute value. Write a character, or a virtual character (an integer combination of irreducible characters), in terms of the irreducible characters. Schur orthogonality makes its squared norm the sum of the squares of the coefficients.

**Problem.** A finite-dimensional complex representation of a finite group is irreducible exactly when its character has squared norm one. A virtual character is irreducible exactly when it has squared norm one and positive value at the identity.

**How the definition helps.** A sum of integer squares equals one exactly when one coefficient is ±1 and the others are zero (our own). For a representation, the coefficients are multiplicities, which are nonnegative by Maschke’s theorem (our own). For a virtual character, positive value at the identity rules out the coefficient −1 (our own).

**nLab:** [Schur orthogonality relation](https://ncatlab.org/nlab/show/Schur+orthogonality+relation). It says: “form an orthonormal basis of the space of class functions under this inner product”

**Sources:** none listed. No primary source with a working link was found.

### The group algebra centre counts irreducible representations

**Remember:** Count the centre once by class sums and once by matrix factors.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT. Level 2: later undergraduate.

**Definition.** The centre of the complex group algebra ℂ\[G\] consists of the sums whose coefficients are constant on each conjugacy class. So the conjugacy class sums form a basis of the centre, and its dimension is the number of classes.

**Problem.** There are as many irreducible complex representations of a finite group, up to isomorphism, as there are conjugacy classes.

**How the definition helps.** The proof counts the dimension of the centre a second way (our own). By Maschke’s theorem and Wedderburn–Artin, ℂ\[G\] is a product of matrix algebras, one for each irreducible representation (our own). Each matrix algebra has a one-dimensional centre, so the dimension is also the number of irreducibles (our own).

**Wikipedia:** [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “The center is equal to the set of class functions, that is the set of elements that are constant on each conjugacy class”

**Sources:** none listed. No primary source with a working link was found.

### Weighting the character table makes column orthogonality automatic

**Remember:** A square table with orthonormal rows has orthonormal columns.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** In the character table, the rows are the irreducible characters and the columns are the conjugacy classes. Weight it by multiplying the column of each class C by √(\|C\|/\|G\|), so the character inner product becomes the ordinary Hermitian inner product of rows.

**Problem.** The weighted complex character table of a finite group has orthonormal columns. Before weighting, distinct columns are orthogonal and each squared column norm equals the group order divided by its class size.

**How the definition helps.** Character orthogonality makes the rows of the weighted table orthonormal, and the table is square because there are as many irreducible characters as classes (our own). A square matrix with orthonormal rows is unitary, so its columns are orthonormal too (our own). Removing the weights gives the unweighted column relations (our own).

**Wikipedia:** [Schur orthogonality relations](https://en.wikipedia.org/wiki/Schur_orthogonality_relations). It says: “this implies that the columns of the character table are orthogonal.”

**Sources:** none listed. No primary source with a working link was found.

### Abelian factors make solvable composition factors cyclic of prime order

**Remember:** An abelian quotient with no room to refine has prime order.

*True by definition.* MSC 20D10 (Finite solvable groups, theory of formations, Schunck classes, Fitting classes, \\(\\pi\\)-length, ranks). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A finite group is solvable if it has a chain of subgroups from the identity to the group, each normal in the next, with abelian quotients. Its composition factors are the quotients of a composition series, a chain that cannot be refined. So each factor is simple, with no proper nontrivial normal subgroup.

**Problem.** A finite group is solvable exactly when its composition factors are all cyclic of prime order. This statement holds for any composition series.

**How the definition helps.** A finite abelian group is simple exactly when it is cyclic of prime order, since all its subgroups are normal (our own). So a solvable chain refines to a composition series with such factors, and such a series is itself a solvable chain (our own). Jordan–Hölder makes the factors the same, up to order and isomorphism, in every composition series (our own).

**nLab:** [solvable group](https://ncatlab.org/nlab/show/solvable+group). It says: “A group is solvable if it is a finite iterated group extension of an abelian group by abelian groups.”

**Paper or page:** [Factors of Solvable Group are Prime](https://proofwiki.org/wiki/Factors_of_Solvable_Group_are_Prime). It says: “Then all factor groups of ℋ must be prime.”

**Sources:** none listed. No primary source with a working link was found.

### A semidirect product shows when order pq forces cyclicity

**Remember:** A nontrivial twist needs an automorphism of order p.

*Rules out counterexamples.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For primes p &lt; q, a homomorphism α from Cₚ to Aut(C<sub>q</sub>) twists C<sub>q</sub> × Cₚ into a semidirect product, with (x,a)(y,b) = (x·α(a)(y), ab). Since Aut(C<sub>q</sub>) has order q − 1, a nontrivial α exists only if p divides q − 1.

**Problem.** Let p and q be primes with p &lt; q. Every group of order pq is cyclic if p does not divide q − 1.

**How the definition helps.** When p does not divide q − 1, every α is trivial, so every such semidirect product is the direct product C<sub>q</sub> × Cₚ (our own). Sylow’s theorems make every group of order pq such a semidirect product, with a normal subgroup of order q (our own). The direct product is cyclic because p and q are coprime (our own).

**Paper or page:** [Group of Order p q is Cyclic](https://proofwiki.org/wiki/Group_of_Order_p_q_is_Cyclic). It says: “Let p, q be primes such that p &lt; q and p does not divide q − 1.”

**Sources:** none listed. No primary source with a working link was found.

### Asking order coprime to index lets Sylow's theorem extend to solvable groups

**Remember:** Put every π-prime in the subgroup order and none in its index.

*Makes the theorem clean to state or prove.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20D10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a set of primes π, a Hall π-subgroup of a finite group G has order using only primes in π and index using none. So it contains the full power of each prime in π that divides \|G\|, as a Sylow subgroup does for one prime (our own).

**Problem.** For every set of primes π, a finite solvable group has a Hall π-subgroup, and all such subgroups are conjugate. Conversely, a finite group with a Hall π-subgroup for every π is solvable.

**How the definition helps.** Asking for the full π-part of \|G\| picks one order for each π, and Hall’s theorems give existence, conjugacy and the converse for that family (our own). Asking for every divisor of \|G\| fails: the solvable group A₄ of order 12 has no subgroup of order 6.

**Wikipedia:** [Hall subgroup](https://en.wikipedia.org/wiki/Hall_subgroup). It says: “The alternating group A₄ of order 12 is solvable but has no subgroups of order 6 even though 6 divides 12, showing that Hall's theorem (see below) cannot be extended to all divisors of the order of a solvable group.”

**Sources:**

- [P. Hall, A note on soluble groups, Journal of the London Mathematical Society 3 (1928) 98–105](https://doi.org/10.1112/jlms/s1-3.2.98)

### Fixed cosets put every p-subgroup in a conjugate Sylow subgroup

**Remember:** A coset fixed by Q places Q inside that conjugate of P.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A Sylow p-subgroup P of a finite group G has order the largest power of p dividing \|G\|. So the number of its left cosets is prime to p (our own). A subgroup Q fixes the coset gP when qgP = gP for every q in Q, which says exactly that g⁻¹Qg ⊆ P (our own).

**Problem.** Every subgroup Q of p-power order lies inside a conjugate of P. In particular, all Sylow p-subgroups are conjugate.

**How the definition helps.** A coset fixed by Q puts Q inside the conjugate gPg⁻¹, so it is enough to find one (our own). By orbit–stabilizer, the orbits of Q on the cosets have p-power size, and the number of cosets is prime to p, so some orbit has one coset (our own). When Q has the same order as P, containment is equality (our own).

**Paper or page:** [Second Sylow Theorem](https://proofwiki.org/wiki/Second_Sylow_Theorem). It says: “Then Q is a subset of a conjugate of P.”

**Sources:**

- [Ludwig Sylow, Théorèmes sur les groupes de substitutions (1872)](https://doi.org/10.1007/BF01442913)

### Index prime to p makes Sylow subgroups survive quotients

**Remember:** Sylow means p-power order and index prime to p; images keep both.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a prime p, a Sylow p-subgroup of a finite group is a subgroup of p-power order whose index, the number of its cosets, is prime to p.

**Problem.** A surjective homomorphism of finite groups sends a Sylow p-subgroup to a Sylow p-subgroup.

**How the definition helps.** A surjection f sends P to a subgroup whose order divides \|P\| and whose index divides the index of P, so both conditions survive (our own). The index claim holds because the index of f(P) equals the index of its full preimage, which contains P (our own).

**Paper or page:** [Quotient of Sylow P-Subgroup](https://proofwiki.org/wiki/Quotient_of_Sylow_P-Subgroup). It says: “Then PN/N is a Sylow p-subgroup of G/N.”

**Sources:** none listed. No primary source with a working link was found.

### Normal Hall subgroups always have a complement

**Remember:** Coprime order and index let a normal subgroup split off.

*Makes the theorem clean to state or prove.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A normal Hall subgroup N of a finite group G is a normal subgroup whose order is coprime to its index. A complement of N is a subgroup K with N ∩ K trivial and NK = G, so that G is a semidirect product of N and K.

**Problem.** Every normal Hall subgroup of a finite group has a complement, and all its complements are conjugate.

**How the definition helps.** The Hall condition is the coprimality hypothesis of the Schur–Zassenhaus theorem, which gives existence and conjugacy of complements (our own). Without it the claim fails: in C₄, the subgroup of order two has no complement, because it holds the only element of order two.

**Wikipedia:** [Schur–Zassenhaus theorem](https://en.wikipedia.org/wiki/Schur%E2%80%93Zassenhaus_theorem), [Hall subgroup](https://en.wikipedia.org/wiki/Hall_subgroup). It says: “If we do not impose the coprime condition, the theorem is not true: consider for example the cyclic group C₄ and its normal subgroup C₂.”

**Sources:** none listed. No primary source with a working link was found.

### Normal subgroups inherit every Sylow intersection

**Remember:** Conjugates stay inside a normal subgroup, so one lands in P.

*Rules out counterexamples.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A subgroup N of G is normal if gNg⁻¹ = N for every g in G, so every conjugate of a subgroup of N stays inside N (our own). A Sylow p-subgroup has order the largest power of p dividing the group order.

**Problem.** Let N be normal in a finite group G. For every Sylow p-subgroup P of G, the intersection P ∩ N is a Sylow p-subgroup of N.

**How the definition helps.** Normality keeps every conjugate of a Sylow p-subgroup of N inside N, and Sylow’s theorem in G puts one such conjugate inside P (our own). So P ∩ N contains a Sylow p-subgroup of N, and as a p-subgroup of N it can be no larger (our own). Without normality the claim fails: two distinct reflection subgroups of the triangle’s symmetry group meet only in the identity (our own).

**Paper or page:** [Intersection of Normal Subgroup with Sylow P-Subgroup](https://proofwiki.org/wiki/Intersection_of_Normal_Subgroup_with_Sylow_P-Subgroup), [Intersection of Sylow p-Subgroup with Subgroup not necessarily Sylow p-Subgroup](https://proofwiki.org/wiki/Intersection_of_Sylow_p-Subgroup_with_Subgroup_not_necessarily_Sylow_p-Subgroup). It says: “Then P ∩ N is a Sylow p-subgroup of N.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizers measure the number of Sylow subgroups

**Remember:** The normalizer is P’s stabilizer, so its cosets count P’s conjugates.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The normalizer of a subgroup P of G is its stabilizer when G acts on subgroups by conjugation: the elements g with gPg⁻¹ = P. A Sylow p-subgroup has order the largest power of p dividing the group order.

**Problem.** The number of Sylow p-subgroups in a finite group G equals the index of the normalizer of any one of them. It divides the index of that Sylow subgroup.

**How the definition helps.** Orbit–stabilizer makes the number of conjugates of P equal the index of its normalizer (our own). Sylow conjugacy says these conjugates are all the Sylow p-subgroups (our own). The normalizer contains P, so its index divides the index of P (our own).

**Paper or page:** [Fifth Sylow Theorem](https://proofwiki.org/wiki/Fifth_Sylow_Theorem), [Third Sylow Theorem](https://proofwiki.org/wiki/Third_Sylow_Theorem). It says: “The number of Sylow p-subgroups of a finite group is a divisor of their common index.”

**Sources:**

- [Ludwig Sylow, Théorèmes sur les groupes de substitutions (1872)](https://doi.org/10.1007/BF01442913)

### Rotating tuples gives Cauchy’s theorem

**Remember:** Rotation fixes only constant tuples, and p divides their number.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a prime p, take the ordered lists of p elements of G whose product is the identity. There are \|G\|ᵖ⁻¹ of them, since the first p − 1 entries fix the last (our own). Rotating a list keeps its product equal to the identity, and a list fixed by rotation is constant, (g, …, g) with gᵖ = 1 (our own).

**Problem.** If a prime p divides the order of a finite group G, then G contains an element of order p.

**How the definition helps.** Rotation orbits have size 1 or p, so the number of constant lists is divisible by p, like the total \|G\|ᵖ⁻¹ (our own). The constant list of identities is one of them, so at least p − 1 others exist, and each gives an element of order p (our own).

**Wikipedia:** [Cauchy's theorem (group theory)](https://en.wikipedia.org/wiki/Cauchy%27s_theorem_%28group_theory%29). It says: “as the last element must be the inverse of the product of those preceding elements.”

**Paper or page:** [Cauchy's Group Theorem](https://proofwiki.org/wiki/Cauchy's_Group_Theorem). It says: “Then G has a subgroup of order p.”

**Sources:** none listed. No primary source with a working link was found.

### Translating subsets gives Sylow subgroups as stabilizers

**Remember:** Find a q-element subset whose orbit size is prime to p.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Let q be the largest power of a prime p dividing \|G\|, and let G act on its q-element subsets by left translation, S ↦ gS. The stabilizer of S, the elements g with gS = S, is a subgroup whose right cosets fill S, so its order divides q (our own).

**Problem.** Some q-element subset has a stabilizer of order q. This stabilizer is a Sylow p-subgroup, a subgroup of the largest possible p-power order.

**How the definition helps.** Write \|G\| = qm; since (1+x)<sup>q</sup> ≡ 1 + x<sup>q</sup> modulo p, the number of q-element subsets is m modulo p, which is not zero (our own). So some orbit has size prime to p, and orbit–stabilizer makes q divide the order of its stabilizer (our own). With the bound from the definition, that stabilizer has order exactly q (our own).

**Paper or page:** [First Sylow Theorem](https://proofwiki.org/wiki/First_Sylow_Theorem), [Group Action on Prime Power Order Subset/Stabilizer of Maximal Power Order Subset](https://proofwiki.org/wiki/Group_Action_on_Prime_Power_Order_Subset/Stabilizer_of_Maximal_Power_Order_Subset). It says: “That is, the set of all subsets of G whose cardinality is the power of a prime number.”

**Sources:**

- [Ludwig Sylow, Théorèmes sur les groupes de substitutions (1872)](https://doi.org/10.1007/BF01442913)

### Setting Φ(G) = G without maximal subgroups keeps Φ the non-generators

**Remember:** An empty intersection of subgroups is the whole group.

*True by definition.* MSC 20D25 (Special subgroups (Frattini, Fitting, etc.)), 20E28. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The Frattini subgroup Φ(G) is the intersection of all maximal subgroups of G, and it is G itself when there are none, as an empty intersection. A non-generator is an element x such that every set S for which S ∪ {x} generates G already generates G.

**Problem.** For every group G, Φ(G) is exactly the set of non-generators.

**How the definition helps.** A maximal subgroup M that misses x shows that x is not a non-generator, since M ∪ {x} generates G and M does not (our own). Conversely, if S ∪ {x} generates G but S generates a proper subgroup H, Zorn’s lemma gives a maximal subgroup containing H and missing x (our own). So a group with no maximal subgroups has only non-generators, which the convention Φ(G) = G matches (our own).

**Wikipedia:** [Frattini subgroup](https://en.wikipedia.org/wiki/Frattini_subgroup). It says: “For the case that G has no maximal subgroups, for example the trivial group {e} or a Prüfer group, it is defined by Φ(G)=G.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclic reduction shows that free groups have no torsion

**Remember:** A cyclically reduced word stays reduced when you repeat it.

*Rules out counterexamples.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A reduced word in a free group has no letter next to its inverse. It is cyclically reduced if it is also nonempty and its first and last letters are not inverses, so writing it twice in a row causes no cancellation (our own).

**Problem.** In a free group, no nonidentity element has a positive power equal to the identity.

**How the definition helps.** Every positive power of a cyclically reduced word is a nonempty reduced word, so it is not the identity (our own). Stripping inverse pairs from the two ends conjugates any nonidentity element to a cyclically reduced word (our own). A conjugate of the identity is the identity, so no positive power of the original element is the identity either (our own).

**Wikipedia:** [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “A reduced word is called cyclically reduced if its first and last letter are not inverse to each other.”

**Sources:** none listed. No primary source with a working link was found.

### Defining abelianization by its maps out makes abelianized free groups free abelian

**Remember:** Maps out of Gᵃᵇ are maps from G into abelian groups.

*True by definition.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The abelianization of G is an abelian group Gᵃᵇ with a homomorphism from G through which every homomorphism from G to an abelian group factors in exactly one way. One model is G divided by its commutator subgroup, the subgroup generated by the elements xyx⁻¹y⁻¹.

**Problem.** Let F be the free group on a set X. Then the abelianization of F is the free abelian group on X.

**How the definition helps.** For every abelian group A, homomorphisms from the abelianization of F to A match homomorphisms F → A, which match functions X → A (our own). This matching is the defining property of the free abelian group on X (our own).

**Paper or page:** [Abelianization of Free Group is Free Abelian Group](https://proofwiki.org/wiki/Abelianization_of_Free_Group_is_Free_Abelian_Group). It says: “is a free abelian group on X.”

**Sources:** none listed. No primary source with a working link was found.

### Defining free groups by maps out lets homomorphism counts fix the rank

**Remember:** A basis of size n gives 2ⁿ maps to ℤ/2.

*True by definition. Confidence: medium.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A subset S of a group F is a free basis if every function from S to any group extends uniquely to a homomorphism from F. In particular, homomorphisms from F to ℤ/2 match the functions from S to ℤ/2.

**Problem.** Any two free bases of the same free group have the same size.

**How the definition helps.** A finite basis of size n gives exactly 2ⁿ homomorphisms F → ℤ/2, so this count fixes n (our own). An infinite basis gives infinitely many, so it cannot occur beside a finite one (our own). Two infinite bases S both have the cardinality of F, since F consists of the finite reduced words in S (our own).

**Wikipedia:** [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “That is, homomorphisms F<sub>S</sub>→G are in one-to-one correspondence with functions S→G.”

**Sources:** none listed. No primary source with a working link was found.

### Defining free groups by their maps out makes surjections onto them split

**Remember:** Maps out of a free group: choose each generator’s image freely.

*True by definition. Confidence: medium.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The free group F(S) on a set S contains S, and every function from S to a group extends to exactly one homomorphism from F(S). So a homomorphism out of F(S) is just a choice of image for each element of S.

**Problem.** Every surjective homomorphism p from a group G onto a free group F(S) has a homomorphism s back with p∘s the identity.

**How the definition helps.** Choose a preimage in G of each element of S, and extend this choice to a homomorphism s from F(S) to G (our own). Then p∘s fixes every element of S, so uniqueness in the definition makes p∘s the identity (our own).

**nLab:** [free group](https://ncatlab.org/nlab/show/free+group). It says: “The free group on a given set S is the free object on S in the category of groups.”

**Sources:** none listed. No primary source with a working link was found.

### Free groupoids prove Nielsen–Schreier without covering spaces

**Remember:** Each edge off the spanning tree gives one free generator.

*True by definition.* MSC 20E05 (Free nonabelian groups), 18B40. arXiv math.GR, math.AT. Level 2: later undergraduate.

**Definition.** The free groupoid on a directed graph has the vertices as objects and reduced paths as arrows, where a path may use edges backwards and adjacent inverse steps cancel. Its group of loops at one vertex is free, with one generator for each edge outside a spanning tree (our own).

**Problem.** Every subgroup H of a free group is free. If H has finite index n in a free group of finite rank k, then H has rank nk − n + 1.

**How the definition helps.** Apply this to the coset graph of H, whose reduced loops at H are exactly the reduced words in H, so H is free (our own). Its vertices are the right cosets of H, with one edge leaving each coset for each free generator (our own). With n vertices and nk edges, a spanning tree uses n − 1 edges, which leaves nk − n + 1 generators (our own).

**nLab:** [Nielsen-Schreier theorem](https://ncatlab.org/nlab/show/Nielsen-Schreier+theorem). It says: “The second proof is quite similar in spirit but is based on groupoids (another way of viewing homotopy 1-types), and has the advantage that it circumvents the point-set topology considerations inherent to covering space theory.”

**Sources:**

- [Otto Schreier, Die Untergruppen der freien Gruppen, Abh. Math. Semin. Univ. Hamburg 5 (1927) 161–183](https://doi.org/10.1007/BF02952517)
- [P. J. Higgins, Categories and groupoids, reprint of the 1971 original, Reprints in Theory and Applications of Categories 7 (2005)](http://www.tac.mta.ca/tac/reprints/articles/7/tr7abs.html)

### Reduced words make equality in free groups a string comparison

**Remember:** Reduced words are equal exactly when their letters match.

*True by definition.* MSC 20E05 (Free nonabelian groups), 20F10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The free group on S is the set of reduced words, strings of letters from S and their formal inverses with no letter next to its inverse. To multiply, join two words and cancel adjacent inverse pairs until none remain.

**Problem.** Two words in the generators and their inverses represent the same free group element exactly when they reduce to the same word.

**How the definition helps.** Each element is one reduced word, so two words give the same element exactly when cancelling reduces them to the same word. This needs the fact that cancelling gives the same result in any order (our own). One must also check that this multiplication is associative.

**Wikipedia:** [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “The free group Fₛ is defined to be the group of all reduced words in S, with concatenation of words (followed by reduction if necessary) as group operation.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of free groups gives every group a presentation

**Remember:** Send the generators anywhere; the relations say what must die.

*True by definition.* MSC 20E05 (Free nonabelian groups), 20F05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The free group F(S) on a set S has the universal property that every function from S to a group G extends to a unique homomorphism F(S) → G. A presentation ⟨S \| R⟩ is the quotient of F(S) by the normal closure of R, the smallest normal subgroup containing the words in R.

**Problem.** Every group has a presentation. Von Dyck: a map from S to G gives a homomorphism from ⟨S \| R⟩ exactly when it sends every word in R to 1.

**How the definition helps.** Both statements combine extending a function from S with factoring through a quotient (our own). Taking S = G gives a surjection F(G) → G, and its kernel serves as R. A function S → G extends through ⟨S \| R⟩ exactly when its extension to F(S) kills every word in R, and so their normal closure (our own).

**Wikipedia:** [Presentation of a group](https://en.wikipedia.org/wiki/Presentation_of_a_group), [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “Formally, the group G is said to have the above presentation if it is isomorphic to the quotient of a free group on S by the normal subgroup generated by the relations R.”

**Sources:**

- [W. Dyck, Gruppentheoretische Studien, Mathematische Annalen 20 (1882) 1–44](https://doi.org/10.1007/BF01443322)

### Defining free products by maps out makes each factor an embedded retract

**Remember:** Kill the other factors and the chosen factor comes back.

*True by definition. Confidence: medium.* MSC 20E06 (Free products of groups, free products with amalgamation, Higman-Neumann-Neumann extensions, and generalizations). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The free product of groups Gᵢ is a group with a homomorphism from each Gᵢ. Any family of homomorphisms from the Gᵢ into one group H extends to exactly one homomorphism from the free product.

**Problem.** Each factor Gⱼ maps injectively into the free product. There is also a homomorphism back onto Gⱼ whose composite with this map is the identity on Gⱼ.

**How the definition helps.** The definition extends the identity on Gⱼ and the trivial map on the other factors to a homomorphism from the free product onto Gⱼ (our own). Its composite with the map from Gⱼ is the identity, so that map is injective (our own).

**nLab:** [free product of groups](https://ncatlab.org/nlab/show/free+product+of+groups). It says: “is universal with this property”

**Sources:** none listed. No primary source with a working link was found.

### The normal core measures when a coset action is faithful

**Remember:** Fixing every coset means lying in every conjugate of H.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The normal core of a subgroup H of G is the intersection of all its conjugates gHg⁻¹. An element a fixes the coset gH exactly when g⁻¹ag lies in H, that is, when a lies in gHg⁻¹ (our own).

**Problem.** The elements acting trivially on all left cosets of H form the normal core of H. So the action is faithful, with only the identity acting trivially, exactly when the core is trivial.

**How the definition helps.** An element fixes every coset exactly when it lies in every conjugate gHg⁻¹, which is the definition of the core (our own).

**Wikipedia:** [Core (group theory)](https://en.wikipedia.org/wiki/Core_%28group_theory%29). It says: “the normal core of any isotropy subgroup is precisely the kernel of the action.”

**Paper or page:** [Stabilizer of Coset under Group Action on Coset Space](https://proofwiki.org/wiki/Stabilizer_of_Coset_under_Group_Action_on_Coset_Space). It says: “Then the stabilizer of aH under ∗ is given by:”

**Sources:** none listed. No primary source with a working link was found.

### A longest subnormal chain gives a composition series

**Remember:** A longest chain has no room for another subgroup.

*True by definition.* MSC 20E15 (Chains and lattices of subgroups, subnormal subgroups), 20E32. arXiv math.GR. Level 2: later undergraduate.

**Definition.** In a subnormal chain of subgroups, each subgroup is normal in the next. A composition series is a strict subnormal chain from the identity to the group into which no further subgroup can be inserted.

**Problem.** Every finite group has a composition series. Its successive quotient groups are all nontrivial and simple.

**How the definition helps.** A finite group has finitely many subgroups, so a longest strict subnormal chain exists, and no subgroup can be inserted into it (our own). By the correspondence theorem, a subgroup that can be inserted between neighbours A ◁ B matches a proper nontrivial normal subgroup of B/A (our own). So each quotient is nontrivial and simple (our own).

**nLab:** [composition series](https://ncatlab.org/nlab/show/composition+series). It says: “is a subnormal series, (that is, a sequence of subgroups, each a normal subgroup of the next one)”

**Paper or page:** [Finite Group has Composition Series](https://proofwiki.org/wiki/Finite_Group_has_Composition_Series). It says: “Then G has a composition series.”

**Sources:** none listed. No primary source with a working link was found.

### Full coset preimages recover subgroups of a quotient

**Remember:** A subgroup above N must contain whole cosets.

*True by definition.* MSC 20E15 (Chains and lattices of subgroups, subnormal subgroups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For N normal in G, the projection π sends g to its coset gN. The full preimage π⁻¹(T) of a set T of cosets is the union of those cosets, so a subgroup containing N is the full preimage of its own image (our own).

**Problem.** Full preimages pair the subgroups of G/N with the subgroups of G containing N. This pairing preserves inclusion and normality in both directions.

**How the definition helps.** A subgroup containing N is a union of cosets of N, so taking its image and then the full preimage gives it back (our own). Since π is surjective, projecting a full preimage also gives back the original cosets, and both operations preserve inclusion (our own). Since π sends conjugates to conjugates and is surjective, normality passes in both directions (our own).

**Paper or page:** [Correspondence Theorem (Group Theory)](https://proofwiki.org/wiki/Correspondence_Theorem_(Group_Theory)). It says: “This bijection maps normal subgroups of G/N onto normal subgroups of G which contain N.”

**Sources:** none listed. No primary source with a working link was found.

### A homomorphic section turns a quotient into a semidirect product

**Remember:** A section chooses one representative per coset and respects multiplication.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A surjective homomorphism q from G to H splits if it has a section, a homomorphism s from H to G with q(s(h)) = h for all h. Then each g in G is uniquely n·s(q(g)) with n in the kernel N, namely n = g·s(q(g))⁻¹ (our own).

**Problem.** If q splits, G is a semidirect product of its kernel and the image of the section.

**How the definition helps.** The unique expressions g = n·s(h) identify G with pairs (n, h), and conjugation by s(h) on N gives the twist of the semidirect product (our own). The section must be a homomorphism: reduction from ℤ/4 to ℤ/2 has no homomorphic section, since neither odd residue has order two (our own).

**nLab:** [semidirect product group](https://ncatlab.org/nlab/show/semidirect+product+group). It says: “such that every element of H can be written uniquely in the form γg, for γ ∈ Γ and g ∈ G.”

**Wikipedia:** [Semidirect product](https://en.wikipedia.org/wiki/Semidirect_product). It says: “a group G is isomorphic to a semidirect product of the two groups N and H”

**Sources:** none listed. No primary source with a working link was found.

### An action by automorphisms makes twisted multiplication associative

**Remember:** An action combines successive twists in the same order as multiplication.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Let H act on N by automorphisms: each h gives an automorphism φ(h) of N, with φ(hk) = φ(h)φ(k). Multiply pairs in N × H by (n, h)(m, k) = (n·φ(h)(m), hk).

**Problem.** This multiplication is associative and makes N × H a group called the semidirect product.

**How the definition helps.** Expanding both groupings of a triple product gives the same result, because each φ(h) is a homomorphism and φ(hk) = φ(h)φ(k) (our own). The identity is (1, 1), and (n, h) has inverse (φ(h⁻¹)(n⁻¹), h⁻¹) (our own). The action law is needed: an element of order two cannot act on ℤ/5 by doubling, since doubling twice is not the identity (our own).

**nLab:** [semidirect product group](https://ncatlab.org/nlab/show/semidirect+product+group). It says: “but whose multiplication is twisted by ρ:”

**Paper or page:** [Semidirect Product of Groups is Group](https://proofwiki.org/wiki/Semidirect_Product_of_Groups_is_Group). It says: “Then N ⋊φ H is a group.”

**Sources:** none listed. No primary source with a working link was found.

### Two normal factors with trivial intersection give a direct product

**Remember:** Two normal factors commute when they share only the identity.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** G is the internal direct product of subgroups N and H if each element is uniquely nh, with n in N and h in H. Also, every element of N commutes with every element of H, so (n, h) ↦ nh is an isomorphism from N × H to G.

**Problem.** If two normal subgroups N and H generate G and meet only in the identity, G is their internal direct product. The map (n, h) ↦ nh identifies it with the coordinatewise product.

**How the definition helps.** For normal N and H, the commutator n⁻¹h⁻¹nh lies in both, so trivial intersection makes N and H commute (our own). Then the products nh form a subgroup, hence all of G, and two expressions nh can differ only by an element of the intersection (our own). Both must be normal: in the triangle’s symmetry group, the rotations and one reflection generate and meet trivially, but the product is not direct (our own).

**Paper or page:** [Conditions for Internal Group Direct Product](https://proofwiki.org/wiki/Conditions_for_Internal_Group_Direct_Product), [Internal Direct Product Theorem/General Result](https://proofwiki.org/wiki/Internal_Direct_Product_Theorem/General_Result). It says: “Then G is the internal group direct product of H and K”

**Sources:** none listed. No primary source with a working link was found.

### Finitely generated residually finite groups never map onto themselves with a kernel

**Remember:** A finite quotient catches each element that a self-surjection tries to kill.

*True by definition. Confidence: medium.* MSC 20E26 (Residual properties and generalizations; residually finite groups), 20E36. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A group is residually finite if every element other than the identity has a nonidentity image in some finite quotient. It has the Hopf property if every surjective homomorphism from the group to itself is injective, hence an isomorphism.

**Problem.** Every finitely generated residually finite group has the Hopf property.

**How the definition helps.** Let φ be a surjection of the group onto itself; for each finite group F, precomposition with φ maps the homomorphisms to F into themselves injectively (our own). Finite generation makes this set finite, so precomposition is onto, and every homomorphism to F kills the kernel of φ (our own). Residual finiteness then makes the kernel of φ trivial (our own).

**Paper or page:** [Chasing finite shadows of infinite groups through geometry](https://arxiv.org/abs/2504.11684v1). It says: “If a finitely generated group Γ is residually finite, then it has the Hopf property, i.e. every epimorphism φ∶Γ→Γ is an isomorphism.”

**Sources:**

- [Martin R. Bridson, Chasing finite shadows of infinite groups through geometry, arXiv:2504.11684v1 (2025)](https://arxiv.org/abs/2504.11684v1)

### Conjugacy classes as orbits give the class equation

**Remember:** Conjugates form an orbit whose stabilizer is the centralizer.

*True by definition.* MSC 20E45 (Conjugacy classes for groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Let G act on itself by conjugation, so g sends x to gxg⁻¹. The conjugacy class of x is its orbit, and the centralizer of x, the elements commuting with x, is its stabilizer (our own).

**Problem.** In a finite group, the class of x has size equal to the number of cosets of its centralizer. The group order is the sum of these sizes, one per class.

**How the definition helps.** The orbit–stabilizer theorem matches the class of x with the left cosets of its centralizer (our own). The classes partition G, so their sizes add up to the order of G (our own).

**Paper or page:** [Number of Conjugates is Number of Cosets of Centralizer](https://proofwiki.org/wiki/Number_of_Conjugates_is_Number_of_Cosets_of_Centralizer), [Conjugacy Action on Group Elements is Group Action](https://proofwiki.org/wiki/Conjugacy_Action_on_Group_Elements_is_Group_Action). It says: “the number of different conjugates of a in G equals the number of different (left) cosets”

**Sources:** none listed. No primary source with a working link was found.

### Adding relators presents the corresponding quotient group

**Remember:** To kill more words, add them to the relator list.

*True by definition.* MSC 20F05 (Generators, relations, and presentations of groups), 20E05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A presentation sets certain words in the generators, the relators, equal to the identity. The presented group is the free group on the generators divided by the normal closure of the relators, the smallest normal subgroup that contains them.

**Problem.** Adding words to the relator list presents the quotient of the old group by the normal subgroup generated by those words.

**How the definition helps.** Adding words enlarges the normal closure to the one generated by the old relators and the new words (our own). By the third isomorphism theorem, dividing by the old closure and then by the image of the new words gives the same group (our own).

**Wikipedia:** [Presentation of a group](https://en.wikipedia.org/wiki/Presentation_of_a_group). It says: “take the quotient of Fₛ by the smallest normal subgroup that contains each element of R.”

**Sources:** none listed. No primary source with a working link was found.

### Defining presented groups by maps out shows defined generators change nothing

**Remember:** An extra generator defined by an old word gives no new choices.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The group with generators S and relators R is characterised by its maps out. For every group H, its homomorphisms to H match the assignments S → H under which every word in R evaluates to the identity.

**Problem.** Adding a generator y with the relation y = w for a word w in the old generators gives an isomorphic presented group.

**How the definition helps.** Under the new relation y = w, each valid assignment of the old generators allows exactly one image for y, the image of w (our own). So for every target group the two presentations have the same maps out, and the Yoneda lemma makes the groups isomorphic (our own).

**Wikipedia:** [Tietze transformations](https://en.wikipedia.org/wiki/Tietze_transformations). It says: “Given a presentation it is possible to add a new generator that is expressed as a word in the original generators.”

**Sources:**

- [Heinrich Tietze, Über die topologischen Invarianten mehrdimensionaler Mannigfaltigkeiten (1908).](https://doi.org/10.1007/bf01736688)

### Defining presented groups by maps out shows joined presentations give free products

**Remember:** Separate relations on separate generators impose no rule between the factors.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 20E06. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The group with generators S and relators R is characterised by its maps out. For every group H, its homomorphisms to H match the assignments S → H under which every word in R evaluates to the identity.

**Problem.** Let each group Gᵢ have a presentation ⟨Sᵢ \| Rᵢ⟩. Then the disjoint union of the Sᵢ and of the Rᵢ presents the free product of the Gᵢ.

**How the definition helps.** An assignment on the disjoint union of the Sᵢ is one assignment on each Sᵢ, and it kills all relators exactly when each part kills its own Rᵢ (our own). So for every H, maps out of the joined presentation match families of homomorphisms Gᵢ → H (our own). That is the defining property of the free product (our own).

**nLab:** [free product of groups](https://ncatlab.org/nlab/show/free+product+of+groups). It says: “If all the Gᵢ have group presentations, then their free product ⋆ᵢ Gᵢ has a group presentation as follows:”

**Sources:** none listed. No primary source with a working link was found.

### Commutators act coordinatewise so direct products preserve solvability

**Remember:** Take commutators in each coordinate until both coordinates reach the identity.

*True by definition.* MSC 20F16 (Solvable groups, supersolvable groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The derived series of a group starts with the group and replaces each term by the subgroup generated by its commutators x⁻¹y⁻¹xy. A group is solvable when this series reaches the identity in finitely many steps. In a direct product, commutators are computed in each coordinate (our own).

**Problem.** A direct product of two solvable groups is solvable.

**How the definition helps.** Commutators in G × H are pairs of commutators, so each derived term of the product is the product of the two derived terms (our own). The series of the product reaches the identity once both series have (our own).

**Paper or page:** [Direct Product of Solvable Groups is Solvable](https://proofwiki.org/wiki/Direct_Product_of_Solvable_Groups_is_Solvable). It says: “Then their (external) direct product G × H is also solvable.”

**Sources:** none listed. No primary source with a working link was found.

### Defining solvable groups as stacked abelian extensions makes extensions stay solvable

**Remember:** Solvable means stacked abelian layers; two stacks make one stack.

*True by definition.* MSC 20F16 (Solvable groups, supersolvable groups), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The solvable groups are the smallest class of groups that contains all abelian groups and is closed under extensions. Here G is an extension of Q by N when G has a normal subgroup isomorphic to N with quotient isomorphic to Q.

**Problem.** Let N be a normal subgroup of G. If N and G/N are solvable, then G is solvable.

**How the definition helps.** G is an extension of G/N by N, so closure under extensions gives the claim at once (our own). This class agrees with the usual one, where the derived series reaches the identity (our own). For example, if the series of G/N ends after k steps, the kth derived subgroup of G lies in N, whose own series then finishes (our own).

**nLab:** [solvable group](https://ncatlab.org/nlab/show/solvable+group). It says: “If 1 → G′ → G → G″ → 1 is a group extension and both G′ and G″ are solvable, then G is solvable.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal subgroups of finite supersolvable groups have prime index

**Remember:** Prime-order normal factors force maximal subgroups to have prime index.

*Rules out counterexamples.* MSC 20F16 (Solvable groups, supersolvable groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A finite group is supersolvable if a chain of subgroups, each normal in the whole group, runs from the identity to the group with quotients of prime order. Its first nontrivial step is a normal subgroup of prime order.

**Problem.** Every maximal proper subgroup of a finite supersolvable group has prime index.

**How the definition helps.** For N normal of prime order and H maximal, either N lies in H, or N meets H trivially and NH is the whole group (our own proof). In the first case use induction in the quotient by N, which is supersolvable. In the second case the index of H is the prime \|N\|; in our own counterexample, the solvable group A₄ has a maximal subgroup of index four.

**Wikipedia:** [Supersolvable group](https://en.wikipedia.org/wiki/Supersolvable_group). It says: “Every maximal subgroup in a supersolvable group has prime index.”

**Sources:** none listed. No primary source with a working link was found.

### Solvable groups match equations that radicals can solve

**Remember:** Abelian layers in the group, one radical per layer in the field.

*Makes the theorem clean to state or prove.* MSC 20F16 (Solvable groups, supersolvable groups), 12F10. arXiv math.GR, math.AC. Level 2: later undergraduate.

**Definition.** A group G is solvable if it has a chain of subgroups 1 = G₀ ◁ G₁ ◁ … ◁ Gₙ = G, each normal in the next, with abelian quotients Gᵢ₊₁/Gᵢ. These quotients mirror a radical tower, since adjoining an n-th root to a field containing the n-th roots of unity gives a cyclic Galois group (our own).

**Problem.** Over a field of characteristic 0, a polynomial equation is solvable by radicals if and only if its Galois group is solvable. Solvable by radicals means that we can write the roots with field operations and n-th roots.

**How the definition helps.** Galois’s theorem matches a tower of radical extensions with a chain of subgroups whose quotients are those abelian Galois groups (our own). So the roots can be written by radicals exactly when the Galois group has a chain with abelian quotients (our own).

**Wikipedia:** [Solvable group](https://en.wikipedia.org/wiki/Solvable_group). It says: “Historically, the word "solvable" arose from Galois theory and the proof of the general unsolvability of quintic equations.”

**Sources:**

- [J. S. Milne, Fields and Galois Theory, course notes (2022), p. 45](https://www.jmilne.org/math/CourseNotes/FT.pdf)

### The derived series passes solvability to subgroups and quotients

**Remember:** Commutators stay in subgroups and pass through quotient maps.

*True by definition.* MSC 20F16 (Solvable groups, supersolvable groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The derived series starts with the group and replaces each term by the subgroup generated by all commutators x⁻¹y⁻¹xy in that term. A group is solvable if this reaches the identity subgroup after finitely many steps.

**Problem.** Subgroups and quotient groups of a solvable group are solvable.

**How the definition helps.** A homomorphism sends commutators to commutators (our own). So each derived term of a subgroup lies in the group’s derived term, and each derived term of a quotient is the image of the group’s term (our own). Once the original series reaches the identity, both other series have reached it too (our own).

**nLab:** [solvable group](https://ncatlab.org/nlab/show/solvable+group). It says: “A group is solvable if the series of groups produced by repeatedly taking the commutator subgroup, the derived series, terminates with the trivial group after finitely many steps.”

**Paper or page:** [Subgroup of Solvable Group is Solvable](https://proofwiki.org/wiki/Subgroup_of_Solvable_Group_is_Solvable). It says: “Then H is solvable.”

**Sources:** none listed. No primary source with a working link was found.

### Defining nilpotent groups as iterated central extensions makes central extensions stay nilpotent

**Remember:** A central kernel adds at most one step to nilpotency.

*True by definition.* MSC 20F18 (Nilpotent groups), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A group is nilpotent if a finite chain of central extensions builds it from the trivial group. Each step is a surjection onto the previous group whose kernel lies in the centre. The nilpotency class is the least number of such steps.

**Problem.** Let G be a central extension of a nilpotent group Q. Then G is nilpotent, and its nilpotency class is at most one more than that of Q.

**How the definition helps.** G adds one central extension on top of a chain for Q, so the theorem and the bound on the class hold by definition (our own summary). This definition agrees with the usual one. A chain of central extensions gives a central series, and the lower central series descends at least as fast as any central series.

**nLab:** [nilpotent group](https://ncatlab.org/nlab/show/nilpotent+group). It says: “If 1 → G′ → G → G″ → 1 is a central extension (so that in particular, G′ is abelian) and G″ is nilpotent, then G is nilpotent.”

**Sources:** none listed. No primary source with a working link was found.

### Nilpotence makes normalizers grow

**Remember:** The first central layer escaping a subgroup supplies a new normalizer element.

*Rules out counterexamples.* MSC 20F18 (Nilpotent groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The upper central series starts with the identity subgroup, and each next term is the inverse image of the centre of the quotient by the current term. So each element of a term commutes with every element of the group, modulo the previous term. A group is nilpotent if this series reaches the whole group in finitely many steps.

**Problem.** Every proper subgroup H of a finite nilpotent group is strictly contained in its normalizer. The normalizer consists of the elements whose conjugation preserves H.

**How the definition helps.** Take the first term of the series that is not inside H, and pick g in it but outside H (our own). For h in H, the commutator ghg⁻¹h⁻¹ lies in the previous term, which is inside H, so gHg⁻¹ = H and g normalizes H (our own). Nilpotence is needed: in S₃ the subgroup generated by (12) is its own normalizer (our own).

**Wikipedia:** [Nilpotent group](https://en.wikipedia.org/wiki/Nilpotent_group). It says: “This is called the normalizer property and can be phrased simply as "normalizers grow".”

**Sources:** none listed. No primary source with a working link was found.

### Artin’s presentation gives braid groups infinite cyclic abelianization

**Remember:** Once generators commute, the braid relation identifies neighboring generators.

*True by definition.* MSC 20F36 (Braid groups; Artin groups). arXiv math.GR, math.GT. Level 2: later undergraduate.

**Definition.** The Artin presentation of the braid group Bₙ has generators σ₁, …, σₙ₋₁. Nonadjacent generators commute, and adjacent ones satisfy σᵢσᵢ₊₁σᵢ = σᵢ₊₁σᵢσᵢ₊₁.

**Problem.** For n ≥ 2, the abelianization of Bₙ is ℤ. The quotient makes all braids commute and sends each σᵢ to 1.

**How the definition helps.** Abelianizing adds commutativity, and in additive notation the braid relation becomes 2σᵢ + σᵢ₊₁ = σᵢ + 2σᵢ₊₁, so σᵢ = σᵢ₊₁ (our own). So the abelianization is cyclic, generated by the common image of the σᵢ. The map to ℤ that sends every σᵢ to 1 respects the relations, so this generator has infinite order.

**Wikipedia:** [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “There is a homomorphism Bₙ → ℤ defined by σᵢ ↦ 1.”

**Sources:**

- [Emil Artin, Theory of Braids, Annals of Mathematics (1947)](https://doi.org/10.2307/1969218)

### Defining the Weyl sign as a determinant makes length parity multiplicative

**Remember:** Each reflection contributes one minus sign to the determinant.

*True by definition. Confidence: medium.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR. Level 2: later undergraduate.

**Definition.** In a finite Weyl group W, the group generated by the reflections in the roots of a root system, define the sign of w as its determinant, ±1. Each simple reflection has determinant −1, so a product of k simple reflections has sign (−1)ᵏ.

**Problem.** The map sending w to −1 raised to the length ℓ(w) is a group homomorphism from the Weyl group to {±1}.

**How the definition helps.** The determinant is multiplicative, so the sign is a homomorphism (our own). Writing w as a product of ℓ(w) simple reflections, the fewest possible, gives determinant (−1)<sup>ℓ</sup>(w), so the two signs agree (our own).

**Wikipedia:** [Coxeter group](https://en.wikipedia.org/wiki/Coxeter_group). It says: “the minimum number of uses of generators required to express a group element”

**Sources:** none listed. No primary source with a working link was found.

### Missing Coxeter edges split the group into direct factors

**Remember:** No edge means commute, so separate components give a direct product.

*True by definition.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A Coxeter diagram presents a group with one generator of order two for each vertex. Generators s and t joined by an edge labelled m satisfy (st)ᵐ = 1, with no relation for the label ∞, and generators with no edge commute.

**Problem.** A Coxeter group with a finite diagram is the direct product of the Coxeter groups of its connected components.

**How the definition helps.** Generators in different components have no edge, so they commute, and no other relation links components (our own). These are exactly the relations of the direct product of the components’ groups (our own).

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “the product of two Coxeter groups is specified by the disjoint union of their Coxeter diagrams.”

**Sources:** none listed. No primary source with a working link was found.

### Separating mirrors give word length in a finite reflection group

**Remember:** Each letter crosses one mirror, and every separating mirror must be crossed.

*Makes the theorem clean to state or prove.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** For a finite real reflection group, a chamber is one of the open regions cut out by all the mirrors. Fix a chamber C and generate the group by the reflections in the walls of C. A word in these generators is then a walk from C through neighbouring chambers, crossing one mirror per letter (our own).

**Problem.** The fewest generators needed to express an element g equals the number of mirrors separating C from its image gC.

**How the definition helps.** A word for g walks from C to gC, so it crosses every mirror that separates them at least once (our own). A suitable straight segment from C to gC crosses exactly the separating mirrors, once each, and avoids their intersections (our own). The group acts freely and transitively on chambers, so this walk spells a word for g (our own).

**Wikipedia:** [Reflection group](https://en.wikipedia.org/wiki/Reflection_group). It says: “The reflections in the faces of a fixed fundamental "chamber" are generators”

**Sources:** none listed. No primary source with a working link was found.

### Two mirrors encode a dihedral group by their angle

**Remember:** Two mirrors at angle π/m make a rotation of order m.

*True by definition.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** The two-mirror Coxeter group is generated by two elements s and t with s² = t² = 1 and one more relation (st)ᵐ = 1. It models two mirrors at angle π/m, where st is the rotation by 2π/m (our own).

**Problem.** For each integer m ≥ 2, the two-generator presentation gives the dihedral group of order 2m.

**How the definition helps.** Since s and t are involutions and (st)ᵐ = 1, every word reduces to (st)ᵏ or (st)ᵏs with 0 ≤ k &lt; m (our own). So the group has at most 2m elements (our own). The mirror model shows all 2m are distinct: m rotations by 2πk/m and m reflections (our own).

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “where π/mᵢⱼ is the dihedral angle between Hᵢ and Hⱼ.”

**Sources:**

- [H. S. M. Coxeter, Discrete Groups Generated by Reflections, 1934](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/Coxeter.1934.pdf)

### A full period lattice makes the wallpaper point group finite

**Remember:** A linear part keeps lengths and keeps the lattice.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** The point group of a wallpaper group is the set of linear parts A of its isometries x ↦ Ax + b. Each such A is orthogonal and maps the translation lattice, the integer combinations of two independent periods, onto itself (our own).

**Problem.** The wallpaper point group is finite and is isomorphic to the wallpaper group divided by its translation subgroup.

**How the definition helps.** A lattice-preserving orthogonal map sends two basis periods to lattice vectors of the same lengths, and only finitely many exist (our own). Taking linear parts is a homomorphism with kernel exactly the translations, so the point group is the quotient (our own). A preserves the lattice because conjugating the translation by v gives the translation by Av (our own).

**nLab:** [wallpaper group](https://ncatlab.org/nlab/show/wallpaper+group). It says: “is generated by two linearly independent vectors”

**Sources:** none listed. No primary source with a working link was found.

### Complex affine forms classify all plane isometries

**Remember:** A complex coefficient records the turn, and a bar records the flip.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Use a complex coordinate z in the plane. Every isometry has one of two forms: z ↦ az + b, which keeps orientation, or z ↦ a z̄ + b, which reverses it (our own). Here \|a\| = 1, and z̄ is the mirror image of z in the real axis.

**Problem.** Every plane isometry is a translation, rotation, reflection or glide reflection, which is a reflection followed by a nonzero shift along the mirror. The identity counts as a zero translation.

**How the definition helps.** For z ↦ az + b, a = 1 gives a translation, and otherwise the fixed point b/(1 − a) is a rotation centre (our own). For z ↦ a z̄ + b, rotating the axes makes a = 1 (our own). Then the imaginary part of b places the mirror, and the real part of b is the glide, zero for a reflection (our own).

**Wikipedia:** [Euclidean plane isometry](https://en.wikipedia.org/wiki/Euclidean_plane_isometry). It says: “It can be shown that there are four types of Euclidean plane isometries.”

**Sources:** none listed. No primary source with a working link was found.

### Discreteness gives wallpaper groups a lattice of periods

**Remember:** Periods cannot crowd, so the two shortest independent periods span all.

*Rules out counterexamples.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A wallpaper group is a discrete group of plane isometries that contains two independent translations. Discrete means the identity is isolated, so every nonzero translation vector has length at least some fixed ε &gt; 0.

**Problem.** The translation vectors of a wallpaper group form a lattice: all integer combinations of two independent period vectors.

**How the definition helps.** Discreteness leaves only finitely many periods in any bounded region, so there is a shortest period and a shortest period independent of it (our own). They form a basis: reducing any period by them to coefficients of size at most 1/2 leaves a shorter period, which must be zero (our own). Without discreteness, the translations could be all rational pairs, which form no lattice (our own).

**Wikipedia:** [Wallpaper group](https://en.wikipedia.org/wiki/Wallpaper_group). It says: “contains two linearly independent translations”

**Sources:** none listed. No primary source with a working link was found.

### Orbifold feature costs reduce wallpaper classification to one sum

**Remember:** Features cost two in total exactly when the quotient is flat.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** An orbifold signature lists the features of the quotient of the plane by a wallpaper group: handles, crosscaps, mirror boundaries, cone points and mirror corners. A handle costs 2, a crosscap or mirror boundary 1, an order-n cone point 1 − 1/n, and a mirror corner of angle π/n half that. The total cost is 2 minus the orbifold Euler characteristic, so cost 2 means a flat quotient (our own).

**Problem.** Up to affine equivalence, the 17 wallpaper groups correspond exactly to the orbifold signatures with total cost 2.

**How the definition helps.** The quotient by a wallpaper group is a compact flat orbifold, so its Euler characteristic is 0 and its cost is 2 (our own). Listing the signatures of cost 2 gives seven without mirrors and ten with mirrors (our own). The classification of flat two-dimensional orbifolds matches each signature with exactly one wallpaper group type (our own).

**Wikipedia:** [Orbifold notation](https://en.wikipedia.org/wiki/Orbifold_notation). It says: “the 17 wallpaper groups are exactly those with the sum of the feature values equal to 2.”

**Sources:**

- [John H. Conway and Daniel H. Huson, The Orbifold Notation for Two-Dimensional Groups, 2002, Table II](https://doi.org/10.1023/A:1015851621002)

### Orbit counting restricts the pole orders of finite rotation groups

**Remember:** Count each rotation twice, once at each end of its axis.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** For a finite group G of rotations about the origin in three-space, a pole is a unit vector fixed by a nonidentity element of G. Each such rotation fixes exactly two poles, and a pole with stabilizer of size m has an orbit of \|G\|/m poles (our own).

**Problem.** For nontrivial G, take one pole from each orbit and list the stabilizer sizes in increasing order. The possibilities are (n,n), (2,2,n), (2,3,3), (2,3,4) and (2,3,5), with n ≥ 2.

**How the definition helps.** Counting pairs of a rotation and a pole it fixes in two ways gives 2(\|G\| − 1) = ∑ (\|G\|/m)(m − 1), summed over orbits (our own). Dividing by \|G\| gives a sum of terms 1 − 1/m equal to 2 − 2/\|G\|, which lies in \[1, 2) (our own). Each term lies in \[1/2, 1), so there are two or three orbits, and checking the cases gives the lists (our own).

**Paper or page:** [H113: Action](https://venhance.github.io/napkin/Napkin.pdf). It says: “There is a natural bijection between 𝒪 and left cosets.”

**Sources:** none listed. No primary source with a working link was found.

### Rotation and reflection cosets classify finite plane point groups

**Remember:** Rotations form a cycle, and one reflection gives all the others.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A finite plane point group is a finite group of orthogonal maps of the plane. Its rotations form a subgroup, and each other element is a reflection, equal to one fixed reflection times a rotation (our own).

**Problem.** Every finite plane point group consists either of rotations generated by one rotation, or of these rotations and their products with one reflection. The latter groups are called dihedral.

**How the definition helps.** The theorem combines two facts: finite rotation groups are cyclic, and one reflection accounts for all the others (our own). The smallest positive angle generates every angle by division with remainder, and with no positive angle only the identity remains (our own). For reflections s and s′, the product ss′ is a rotation and s′ = s(ss′) (our own).

**nLab:** [dihedral group](https://ncatlab.org/nlab/show/dihedral+group). It says: “It may be defined as the symmetry group of a regular n-gon in the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Splitting the shift gives the screw axis of a motion

**Remember:** Move the axis to absorb the sideways shift.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A screw displacement is a rotation about a line followed by a shift along that line; either may be zero. Moving the axis sideways changes only the sideways part of the shift, so a good choice of axis cancels it (our own).

**Problem.** Every orientation-preserving isometry of Euclidean three-space is a screw displacement.

**How the definition helps.** Write the motion as x ↦ Ax + b, and place the axis so that it absorbs the part of b perpendicular to it (our own). Euler’s theorem gives A an axis, and moving the axis by p adds (I − A)p to the shift (our own). For a nonzero angle, I − A is invertible on the perpendicular plane, and a zero angle leaves a translation along b (our own).

**Wikipedia:** [Chasles' theorem (kinematics)](https://en.wikipedia.org/wiki/Chasles%27_theorem_%28kinematics%29). It says: “The displacement D of the center of mass can be decomposed into components parallel and perpendicular to the axis.”

**Sources:** none listed. No primary source with a working link was found.

### The lattice basis rules out fivefold wallpaper rotations

**Remember:** An integer trace 2 cos θ forbids fivefold rotations.

*Rules out counterexamples.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** The translation lattice of a wallpaper pattern is the set of vectors that shift the pattern onto itself, the integer combinations of two independent periods. The linear part of any symmetry maps this lattice to itself, so in a lattice basis its matrix has integer entries (our own).

**Problem.** Every rotation preserving a wallpaper pattern has order 1, 2, 3, 4 or 6.

**How the definition helps.** The trace of an integer matrix is an integer, and the trace of a rotation by θ is 2 cos θ (our own). So 2 cos θ is −2, −1, 0, 1 or 2, which gives the orders 2, 3, 4, 6 and 1 (our own). A regular pentagon has a fivefold rotation only because it has no lattice of periods (our own).

**Wikipedia:** [Crystallographic restriction theorem](https://en.wikipedia.org/wiki/Crystallographic_restriction_theorem). It says: “In 2D and 3D every rotation is a planar rotation, and the trace is a function of the angle alone.”

**Sources:** none listed. No primary source with a working link was found.

### The shortest period reduces frieze classification to seven cases

**Remember:** The horizontal glide offset is either zero or half a period.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** In a frieze group, the translations are the integer multiples of one shortest horizontal period. Its point group, the set of linear parts of its symmetries, is a subgroup of the four maps that reverse x, y, both or neither. A symmetry that reverses only y squares to a translation, so its shift along the axis is 0 or half a period, modulo whole periods (our own).

**Problem.** There are exactly seven frieze group types up to a change of scale and Euclidean coordinates.

**How the definition helps.** Each point group gives one type per possible glide offset, which makes seven types (our own). The trivial, x-reversing and half-turn point groups have one type each, and the two containing the map that reverses only y have two each (our own). Moving the origin removes other offsets, and examples realize all seven (our own).

**Wikipedia:** [Frieze group](https://en.wikipedia.org/wiki/Frieze_group). It says: “There are seven frieze groups, listed in the summary table.”

**Sources:**

- [John H. Conway and Daniel H. Huson, The Orbifold Notation for Two-Dimensional Groups, 2002, Table IV](https://doi.org/10.1023/A:1015851621002)

### Divisibility makes abelian invariant factors unique

**Remember:** Sort prime powers by size and line up the largest ends.

*Rules out counterexamples.* MSC 20K01 (Finite abelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The invariant-factor form writes a finite abelian group as ℤ/d<sub>1</sub> ⊕ … ⊕ ℤ/d<sub>k</sub>, with every d<sub>i</sub> &gt; 1 and each d<sub>i</sub> dividing d\_(i+1). Divisibility puts the largest power of each prime into d<sub>k</sub>, the next largest into d\_(k−1), and so on (our own).

**Problem.** Every finite abelian group has only one invariant-factor form: the orders d<sub>1</sub>, …, d<sub>k</sub> are unique.

**How the definition helps.** Divisibility makes the d<sub>i</sub> a fixed regrouping of the prime-power factors, so uniqueness follows from uniqueness of those factors (our own). The Chinese remainder theorem does the regrouping (our own). Without divisibility, ℤ/6 is also ℤ/2 ⊕ ℤ/3, and with d<sub>i</sub> = 1 allowed, trivial factors could appear anywhere (our own).

**Wikipedia:** [Finitely generated abelian group](https://en.wikipedia.org/wiki/Finitely_generated_abelian_group). It says: “are uniquely determined by G (here with a unique order).”

**Sources:** none listed. No primary source with a working link was found.

### Prime-power torsion identifies the parts of a finite abelian group

**Remember:** Test which prime power sends an element to zero.

*Makes the theorem clean to state or prove.* MSC 20K01 (Finite abelian groups), 20K10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a prime p, the p-primary part of an abelian group is the set of elements killed by some power of p. If the group has order n = pᵉm with p not dividing m, it equals the set of multiples mx (our own).

**Problem.** In a finite abelian group, each element is uniquely a sum of one element from each p-primary subgroup, taking primes dividing the group order.

**How the definition helps.** The cofactors m<sub>p</sub> = n/pᵉ have greatest common divisor 1, so Bézout splits each x into multiples of m<sub>p</sub> x, one per part (our own). Multiplication by m<sub>p</sub> kills the other parts and is invertible on the p-part, which gives uniqueness (our own).

**Wikipedia:** [Torsion subgroup](https://en.wikipedia.org/wiki/Torsion_subgroup). It says: “the direct sum of its p-power torsion subgroups over all prime numbers p:”

**Sources:** none listed. No primary source with a working link was found.

### Successive quotient sizes count cyclic factors

**Remember:** Order pᵉ adds one p to each of the first e quotients.

*True by definition.* MSC 20K01 (Finite abelian groups), 20K10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a finite abelian p-group A and k ≥ 1, the kth quotient is pᵏ⁻¹A/pᵏA, where pʲA is the set of all pʲx. A cyclic factor of order pᵉ adds a factor p to the sizes of the first e quotients only (our own calculation).

**Problem.** The sizes of these quotients determine the number of nontrivial cyclic factors of each order in a cyclic decomposition of A.

**How the definition helps.** If the kth quotient has size pᵈ, exactly d cyclic factors have order at least pᵏ (our own). The count for k minus the count for k + 1 is the number of factors of order exactly pᵏ. The structure theorem supplies the decomposition into cyclic factors.

**Wikipedia:** [Finitely generated abelian group](https://en.wikipedia.org/wiki/Finitely_generated_abelian_group). It says: “A primary cyclic group is one whose order is a power of a prime.”

**Paper or page:** [Theorem 2.4. (Fundamental theorem of finitely generated abelian groups)](https://venhance.github.io/napkin/Napkin.pdf). It says: “This decomposition is unique up to permutation”

**Sources:** none listed. No primary source with a working link was found.

### The integer quotient model lists all subgroups of a cyclic group

**Remember:** Subgroups between nℤ and ℤ correspond to divisors of n.

*True by definition.* MSC 20K01 (Finite abelian groups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Model a cyclic group of order n as ℤ/nℤ, the integers added modulo n. Its subgroups then match the subgroups of ℤ containing nℤ, which are the sets dℤ for positive divisors d of n (our own).

**Problem.** For every positive divisor d of n, a cyclic group of order n has exactly one subgroup of order d. It has no other subgroups.

**How the definition helps.** The subgroup of ℤ/nℤ that comes from dℤ has n/d elements, so each order has exactly one subgroup (our own). Division with remainder shows that every subgroup of ℤ is the set of multiples of its least positive member (our own). That member divides n when the subgroup contains nℤ (our own).

**nLab:** [cyclic group](https://ncatlab.org/nlab/show/cyclic+group). It says: “this is the subgroup generated by n/d”

**Paper or page:** [Bijection from Divisors to Subgroups of Cyclic Group](https://proofwiki.org/wiki/Bijection_from_Divisors_to_Subgroups_of_Cyclic_Group). It says: “Then ϕ is a bijection.”

**Sources:** none listed. No primary source with a working link was found.

### The torsion subgroup leaves a torsion-free quotient

**Remember:** If a positive multiple is torsion, the original element is torsion.

*Rules out counterexamples.* MSC 20K10 (Torsion groups, primary groups and generalized primary groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** In an abelian group A, the torsion subgroup T is the set of elements of finite order, those x with mx = 0 for some m ≥ 1. A group is torsion-free if 0 is its only such element.

**Problem.** For every abelian group A, the quotient A/T is torsion-free.

**How the definition helps.** If m(x + T) = 0 in A/T, then mx has finite order, so x has finite order and lies in T (our own). Commutativity is what makes T a subgroup (our own). Among isometries of a line, two reflections have finite order, but their product is a translation of infinite order (our own).

**nLab:** [torsion subgroup](https://ncatlab.org/nlab/show/torsion+subgroup). It says: “is the subgroup of all those elements g ∈ G, which have finite order,”

**Sources:** none listed. No primary source with a working link was found.

### Units modulo n are the automorphisms of a cyclic group

**Remember:** An automorphism is multiplication by a unit, fixed by where 1 goes.

*True by definition.* MSC 20K30 (Automorphisms, homomorphisms, endomorphisms, etc. for abelian groups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Model a cyclic group of order n as ℤ/nℤ, generated by 1. A homomorphism to itself is fixed by the image a of 1, so it is multiplication by a (our own). It is invertible exactly when a is a unit modulo n, a residue with a multiplicative inverse.

**Problem.** The automorphism group of a cyclic group of order n is isomorphic to the multiplicative group of units modulo n.

**How the definition helps.** Every homomorphism to itself is multiplication by its value at 1, and composition multiplies these values (our own). So these homomorphisms form the multiplicative monoid of ℤ/nℤ, whose invertible elements are the units (our own).

**Wikipedia:** [Cyclic group](https://en.wikipedia.org/wiki/Cyclic_group). It says: “This is the multiplicative group of units of the ring Z/nZ”

**Paper or page:** [Order of Automorphism Group of Cyclic Group](https://proofwiki.org/wiki/Order_of_Automorphism_Group_of_Cyclic_Group). It says: “order(Aut Cₙ) = ϕ(n)”

**Sources:** none listed. No primary source with a working link was found.

### Requiring identity preservation makes monoid homomorphisms preserve invertibility

**Remember:** Preserving the identity preserves the equations that define an inverse.

*Rules out counterexamples.* MSC 20M10 (General structure theory for semigroups), 08A05. arXiv math.RA, math.GR. Level 2: later undergraduate.

**Definition.** A monoid homomorphism f preserves both the product and the identity: f(xy) = f(x)f(y) and f(1) = 1. A semigroup homomorphism needs only to preserve products.

**Problem.** A monoid homomorphism sends invertible elements to invertible elements, giving a map of their groups of units. A map that only preserves products need not do so.

**How the definition helps.** Applying f to xy = 1 = yx gives f(x)f(y) = 1 = f(y)f(x), so f(y) is the inverse of f(x). Without f(1) = 1 this fails (our own). The constant map to 0 on {0, 1} under multiplication preserves products but sends the unit 1 to 0 (our own).

**Wikipedia:** [Monoid](https://en.wikipedia.org/wiki/Monoid). It says: “Not every semigroup homomorphism between monoids is a monoid homomorphism, since it may not map the identity to the identity of the target monoid, even though the identity is the identity of the image of the homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Defining group completion by pairs makes embedding equivalent to cancellation

**Remember:** The extra summand k records exactly what cancellation would remove.

*True by definition. Confidence: medium.* MSC 20M14 (Commutative semigroups), 19A99. arXiv math.GR, math.KT. Level 2: later undergraduate.

**Definition.** The group completion of a commutative monoid M consists of formal differences a − b, written as pairs (a, b) and added componentwise. Two pairs (a, b) and (c, d) are equal when a + d + k = b + c + k for some k ∈ M.

**Problem.** A commutative monoid M maps to its group completion by a ↦ (a, 0). This map is injective exactly when M has cancellation, that is, a + k = b + k implies a = b.

**How the definition helps.** The classes of (a, 0) and (b, 0) agree exactly when a + k = b + k for some k ∈ M (our own). So the map is injective exactly when every such equation forces a = b, which is cancellation (our own).

**Wikipedia:** [Grothendieck group](https://en.wikipedia.org/wiki/Grothendieck_group). It says: “For a commutative monoid M, the map i : M → K is injective if and only if M has the cancellation property”

**Sources:** none listed. No primary source with a working link was found.

### Heaps must be inhabited to have a structure group

**Remember:** A heap is a group without a chosen unit, never empty.

*Rules out counterexamples.* MSC 20N10 (Ternary systems (heaps, semiheaps, heapoids, etc.)), 20J15. arXiv math.GR, math.CT. Level 2: later undergraduate.

**Definition.** A heap is a nonempty set with a ternary operation t(x, y, z), thought of as xy⁻¹z. It satisfies t(x, x, y) = y = t(y, x, x) and t(t(a, b, c), d, e) = t(a, b, t(c, d, e)) for all elements.

**Problem.** Every heap is a torsor for a group, its structure group. Also, the category of heaps is equivalent to the category of pairs (G, H) of a group G and a G-torsor H.

**How the definition helps.** Choosing any point e makes t(x, e, y) a group product, and the translations z ↦ t(a, b, z) act freely and transitively (our own). A torsor gives back t(a, b, c) = gc with gb = a, and heap maps, carrying translations to translations, match equivariant maps with homomorphisms (our own). The empty set satisfies the laws but is a torsor for no group, so nonemptiness is needed (our own).

**nLab:** [heap](https://ncatlab.org/nlab/show/heap), [torsor](https://ncatlab.org/nlab/show/torsor). It says: “However, in this case, some of the above theorems relating heaps to groups break down.”

**Sources:**

- [Thomas Booker, Ross Street, Torsors, herds and flocks, Journal of Algebra 330 (2011) 346–374, arXiv:0912.4551](https://arxiv.org/abs/0912.4551)
- [Peter T. Johnstone, The 'closed subgroup theorem' for localic herds and pregroupoids, Journal of Pure and Applied Algebra 70 (1991) 97–106](https://doi.org/10.1016/0022-4049(91)90010-y)

### Subgroup marks determine finite actions

**Remember:** Count fixed points subgroup by subgroup to recover the orbits.

*True by definition.* MSC 20B05 (General theory for finite permutation groups), 19A22. arXiv math.GR. Level 3: graduate.

**Definition.** The mark of a subgroup H on a finite G-set X is the number of points of X fixed by every element of H. An orbit G/K has nonzero H-mark exactly when H is conjugate into K, so one works down from the largest stabilizers (our own).

**Problem.** Two finite sets with an action of a finite group G are isomorphic as G-sets if all their marks agree.

**How the definition helps.** Marks give the number of orbits of each type, and a finite G-set is the disjoint union of its orbits. Take the conjugacy classes of subgroups H from largest to smallest, and subtract the H-mark of the orbits with larger stabilizers already counted (our own). What remains comes only from orbits of type G/H, each contributing the positive number \|N<sub>G</sub>(H)/H\| (our own).

**nLab:** [table of marks](https://ncatlab.org/nlab/show/table+of+marks). It says: “Hence any two finite G-sets are isomorphic precisely if they have the same Burnside marks”

**Wikipedia:** [Burnside ring](https://en.wikipedia.org/wiki/Burnside_ring). It says: “if H is not conjugate to a subgroup of K then m(K, H) = 0.”

**Sources:**

- [L. Solomon, The Burnside algebra of a finite group, 1967](https://doi.org/10.1016/S0021-9800(67)80064-4)

### Mackey functors defined on spans have the double coset formula built in

**Remember:** Compose spans by pullback and split the result into double-coset orbits.

*True by definition. Confidence: medium.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 18B10, 55N91. arXiv math.RT, math.AT. Level 3: graduate.

**Definition.** For a finite group G, take the category whose objects are finite G-sets and whose arrows are isomorphism classes of spans A ← U → B, composed by pullback. A Mackey functor sends this category to an additive category and takes finite disjoint unions to products. Restriction and transfer are the spans with one leg the identity, so composing them is a pullback (our own).

**Problem.** For J,K ≤ H ≤ G, restriction to J after transfer from K sums one term per double coset JxK in H. Each term restricts to K ∩ x⁻¹Jx, conjugates by x, and transfers from J ∩ xKx⁻¹ to J.

**How the definition helps.** The double coset formula is the pullback of the transfer span and the restriction span, split into orbits (our own). The fiber product of G/J and G/K over G/H has one orbit for each double coset JxK in H, with stabilizer J ∩ xKx⁻¹ (our own). Each orbit is a span that factors as restriction, conjugation by x and transfer, and additivity sums them (our own).

**nLab:** [Mackey functor](https://ncatlab.org/nlab/show/Mackey+functor). It says: “writing Rᴴⱼ for the contravariant effect of in inclusion J ⊂ H and Iᴴⱼ for the covariant effect, M satisfies the double coset formula”

**Sources:**

- [H. Lindner, A remark on Mackey-functors, Manuscripta Mathematica 18 (1976) 273–278](https://doi.org/10.1007/BF01245921)
- [C. Barwick, Spectral Mackey functors and equivariant algebraic K-theory (I), Advances in Mathematics 304 (2017) 646–727, arXiv:1404.0108](https://arxiv.org/abs/1404.0108)
- [B. Guillou, J. P. May, Models of G-spectra as presheaves of spectra, arXiv:1110.3571 (2011)](https://arxiv.org/abs/1110.3571)

### Defining Temperley–Lieb algebras by planar diagrams makes their dimension Catalan

**Remember:** Count the planar pairings to get the dimension.

*True by definition.* MSC 20C08 (Hecke algebras and their representations), 05A15. arXiv math.QA, math.CO. Level 3: graduate.

**Definition.** Fix a field k and δ ∈ k. TLₙ(δ) is the vector space with basis the noncrossing pairings of 2n points, n on each of two opposite sides of a rectangle. Multiply by stacking rectangles and replacing each closed loop by δ.

**Problem.** The Temperley–Lieb algebra TLₙ(δ) has dimension equal to the nth Catalan number (2n)!/(n!(n + 1)!).

**How the definition helps.** With this basis, the dimension is the number of noncrossing pairings of 2n points, which is the nth Catalan number (our own). Splitting at the partner of the first point gives the Catalan recurrence (our own). The work moves to the theorem that this diagram algebra equals the algebra given by the usual generators and relations.

**Wikipedia:** [Temperley–Lieb algebra](https://en.wikipedia.org/wiki/Temperley%E2%80%93Lieb_algebra). It says: “the vector space over noncrossing pairings of 2n points on two opposite sides of a rectangle”

**Sources:**

- [Presentations for Temperley-Lieb algebras](https://arxiv.org/abs/2101.02862v2)

### Endomorphisms make Hecke algebra multiplication associative

**Remember:** Composition of maps is associative for free.

*True by definition. Confidence: medium.* MSC 20C08 (Hecke algebras and their representations). arXiv math.RT. Level 3: graduate.

**Definition.** For a subgroup K of a finite group G, the Hecke algebra is the set of G-equivariant linear self-maps of k\[G/K\], multiplied by composition. Here k is a field, and k\[G/K\] has the left cosets of K as basis, permuted by G.

**Problem.** The Hecke algebra is an associative unital algebra over k. It has a basis indexed by the double cosets KgK.

**How the definition helps.** Composition of maps is associative and has the identity as unit (our own). An equivariant map is a matrix on cosets whose entry at (xK, yK) depends only on Kx⁻¹yK, so double cosets index a basis (our own). In the function model, associativity instead needs two iterated convolution sums (our own).

**nLab:** [Hecke algebra](https://ncatlab.org/nlab/show/Hecke+algebra). It says: “Typically the term refers to an algebra which is the endomorphisms of a permutation representation of a topological group”

**Wikipedia:** [Hecke algebra of a pair](https://en.wikipedia.org/wiki/Hecke_algebra_of_a_pair). It says: “When G is a finite group and K is any subgroup of G, then the Hecke algebra is spanned by double cosets of K\\G/K.”

**Sources:** none listed. No primary source with a working link was found.

### Hecke algebra commutativity detects repeated representations

**Remember:** A repeated irreducible representation gives a noncommutative matrix block.

*True by definition.* MSC 20C08 (Hecke algebras and their representations), 20C15. arXiv math.RT. Level 3: graduate.

**Definition.** Let K be a subgroup of a finite group G, and let G permute the basis of left cosets of ℂ\[G/K\]. The Hecke algebra is the algebra of linear self-maps of ℂ\[G/K\] that commute with G. By Schur’s lemma it is a product of full m × m matrix algebras, one for each irreducible that occurs m times (our own).

**Problem.** The Hecke algebra is commutative exactly when each irreducible representation occurs at most once in ℂ\[G/K\]. This is the criterion for a Gelfand pair.

**How the definition helps.** A product of matrix algebras is commutative exactly when every matrix size is 1 (our own). The sizes are the multiplicities, because Maschke’s theorem splits ℂ\[G/K\] into irreducibles and Schur’s lemma allows no maps between different types (our own).

**Wikipedia:** [Gelfand pair](https://en.wikipedia.org/wiki/Gelfand_pair). It says: “The centralizer algebra (Schur algebra) of the permutation representation is commutative.”

**Sources:** none listed. No primary source with a working link was found.

### Central characters make normalized class values algebraic integers

**Remember:** A central character preserves monic polynomial equations over the integers.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** For an irreducible complex representation V of a finite group G, Schur’s lemma makes every central element of ℂ\[G\] act on V as a scalar. This gives a ring map ω from the centre to ℂ, the central character. The class sum of x, the sum of its h conjugates, acts by the scalar h·χ(x)/χ(1) (our own).

**Problem.** Let G be a finite group, V an irreducible complex representation and χ its character. For x in G with h conjugates, h·χ(x)/χ(1) is an algebraic integer, a root of a monic polynomial with integer coefficients.

**How the definition helps.** A class sum is a root of a monic integer polynomial, and a ring map keeps it one (our own). Multiplication by a class sum is an integer matrix on the class sums, so its characteristic polynomial kills the class sum (our own). Taking the trace of the scalar action gives the value h·χ(x)/χ(1) (our own).

**Wikipedia:** [Character theory](https://en.wikipedia.org/wiki/Character_theory). It says: “If F = ℂ and χ is irreducible, then \[G:C<sub>G</sub>(x)\]\\frac{\\chi(x)}{\\chi(1)} is an algebraic integer for all x in G.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicity-free restriction passes upward

**Remember:** A bigger subgroup fixes fewer elements, so commutativity passes upward.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 43A90. arXiv math.RT. Level 3: graduate.

**Definition.** For H ≤ G finite, let A<sub>H</sub> be the set of elements of ℂ\[G\] fixed under conjugation by every h ∈ H. The pair (G, H) is a strong Gelfand pair when A<sub>H</sub> is commutative, and a larger H gives a smaller A<sub>H</sub> (our own).

**Problem.** If a finite group forms a strong Gelfand pair with a subgroup, it also does so with each intermediate subgroup.

**How the definition helps.** For K ≤ H, an element fixed by conjugation under H is fixed under K, so A<sub>H</sub> is a subalgebra of the commutative algebra A<sub>K</sub> (our own). Schur’s lemma and the matrix-block decomposition of ℂ\[G\] show this definition agrees with multiplicity-free restriction (our own).

**Paper or page:** [Strong Gelfand pairs of the sporadic groups and their extensions](https://arxiv.org/abs/2510.25790). It says: “Suppose K ≤ H ≤ G are groups. If (G, H) is not a strong Gelfand pair, then neither is (G, K).”

**Sources:** none listed. No primary source with a working link was found.

### Strong Gelfand pairs survive quotients

**Remember:** Passing to the quotient cannot create a repeated summand.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 43A90. arXiv math.RT. Level 3: graduate.

**Definition.** For H ≤ G finite, (G, H) is a strong Gelfand pair if each irreducible complex representation of G restricts to H without repeated irreducible summands. For N normal in G and contained in H, the representations of G/N are those of G on which N acts trivially (our own).

**Problem.** A strong Gelfand pair remains strong after quotienting both groups by a common normal subgroup of the larger group.

**How the definition helps.** An irreducible representation of G/N stays irreducible when pulled back to G (our own). N acts trivially on it, so its restriction to H decomposes exactly as its restriction to H/N does (our own). A repeated summand for (G/N, H/N) would therefore be a repeated summand for (G, H) (our own).

**Paper or page:** [Almost Commutative Terwilliger Algebras II: Strong Gelfand Pairs](https://arxiv.org/abs/2509.16174). It says: “Suppose N ≤ H ≤ G with N ◁ G. If (G,H) is a SGP, then (G/N,H/N) is a SGP.”

**Sources:** none listed. No primary source with a working link was found.

### Virtual representations let Brauer write every representation from one-dimensional ones

**Remember:** Allow subtraction, and induced lines generate every representation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** The representation ring of a finite group consists of formal differences \[V\] − \[W\] of finite-dimensional complex representations. Addition is direct sum and the product is tensor product, so elements are integer combinations with possibly negative coefficients.

**Problem.** In the representation ring, every finite-dimensional complex representation of a finite group is an integer combination of representations induced from one-dimensional subgroup representations.

**How the definition helps.** Formal differences make room for the negative coefficients that Brauer’s formula needs (our own). Brauer’s induction theorem then says that representations induced from one-dimensional representations of subgroups span the representation ring over ℤ (our own).

**nLab:** [Brauer induction theorem](https://ncatlab.org/nlab/show/Brauer+induction+theorem). It says: “finite-dimensional linear representations V of a finite group G all arise as virtual combinations of induced representations … of just 1-dimensional representations”

**Sources:**

- [Brauer, R. (1947). On Artin's L-series with general group characters. Annals of Mathematics 48.](https://doi.org/10.2307/1969183)

### Brauer characters lift eigenvalues to complex numbers in characteristic p

**Remember:** Replace each eigenvalue by its complex twin, then add.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C20 (Modular representations and characters). arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** Fix a group isomorphism from the roots of unity of an algebraically closed field of characteristic p to the complex roots of unity of order prime to p. The Brauer character sends each element of order prime to p to the sum of the complex lifts of its eigenvalues, with multiplicity.

**Problem.** For a finite-dimensional representation of a finite group, its Brauer character determines its composition factors with multiplicity. On elements of order prime to p, each ordinary irreducible character is a unique nonnegative integer combination of irreducible Brauer characters.

**How the definition helps.** Lifted eigenvalues add as complex numbers, so the Brauer character is additive on short exact sequences and sums the characters of the composition factors (our own). Brauer’s linear independence of the irreducible Brauer characters makes the multiplicities recoverable (our own). Reducing an invariant lattice of an ordinary representation gives a representation with the same character on prime-to-p elements, whose composition multiplicities are the coefficients (our own).

**Wikipedia:** [Modular representation theory](https://en.wikipedia.org/wiki/Modular_representation_theory). It says: “the Brauer character of a representation assigns to each group element of order coprime to p the sum of complex roots of unity corresponding to the eigenvalues (including multiplicities) of that element in the given representation.”

**Sources:**

- [Brauer, R., Nesbitt, C. (1941). On the modular characters of groups. Annals of Mathematics 42.](https://doi.org/10.2307/1968918)

### Projective representations become ordinary ones on a central extension

**Remember:** Enlarge the group by scalars and the scalar ambiguity disappears.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C25 (Projective representations and multipliers), 20E22. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** A projective representation of G on a nonzero vector space V over F is a homomorphism ρ from G to GL(V) modulo nonzero scalars. So each ρ(g) is a matrix known only up to a scalar factor. A central extension of G is a surjection E → G with kernel in the centre of E, which can absorb those scalars (our own).

**Problem.** Every projective representation of G is the image of an ordinary linear representation of some central extension of G. Whether it lifts to G itself is measured by a class in the second cohomology group H²(G, F\*).

**How the definition helps.** The pairs (g, A), with A a matrix for ρ(g), form a central extension of G by F\*, and (g, A) ↦ A is a linear representation lifting ρ (our own). Representatives L(g) satisfy L(g)L(h) = c(g, h)L(gh) with c a 2-cocycle, and rescaling them changes c by a coboundary (our own). So ρ lifts to G exactly when the class of c in H²(G, F\*) is zero (our own).

**Wikipedia:** [Projective representation](https://en.wikipedia.org/wiki/Projective_representation). It says: “However, one can lift a projective representation ρ of G to a linear representation of a different group H, which will be a central extension of G.”

**Sources:**

- [Schur, I. (1904). Über die Darstellung der endlichen Gruppen durch gebrochen lineare Substitutionen. Journal für die reine und angewandte Mathematik 127.](https://doi.org/10.1515/crll.1904.127.20)

### The generalized Fitting subgroup always contains its own centralizer

**Remember:** With components added, the Fitting subgroup contains its own centralizer.

*Makes the theorem clean to state or prove.* MSC 20D25 (Special subgroups (Frattini, Fitting, etc.)), 20D35. arXiv math.GR. Level 3: graduate.

**Definition.** For finite G, the generalized Fitting subgroup F\*(G) is generated by F(G), the largest normal nilpotent subgroup, and all components. A component is a perfect subnormal subgroup L with L/Z(L) nonabelian simple.

**Problem.** For every finite group G, the centralizer of F\*(G) lies inside F\*(G). So G modulo the center of F\*(G) embeds in the automorphism group of F\*(G), and only finitely many groups have a given F\*(G).

**How the definition helps.** Adding components makes C<sub>G</sub>(F\*(G)) ≤ F\*(G) true for every finite group, even a simple one with F(G) = 1 (our own). The centralizer is then Z(F\*(G)), so conjugation embeds G/Z(F\*(G)) in Aut(F\*(G)) (our own). This bounds \|G\| in terms of F\*(G), which leaves finitely many groups (our own).

**Wikipedia:** [Fitting subgroup](https://en.wikipedia.org/wiki/Fitting_subgroup), [Quasisimple group](https://en.wikipedia.org/wiki/Quasisimple_group). It says: “More generally, if G is a finite group, then the generalized Fitting subgroup contains its own centralizer.”

**Sources:**

- [H. Bender, On groups with abelian Sylow 2-subgroups, Mathematische Zeitschrift 117 (1970) 164–176](https://doi.org/10.1007/BF01109839)

### HNN extensions make isomorphic subgroups conjugate by construction

**Remember:** Add one letter whose job is to conjugate H to K.

*True by definition.* MSC 20E06 (Free products of groups, free products with amalgamation, Higman-Neumann-Neumann extensions, and generalizations). arXiv math.GR. Level 3: graduate.

**Definition.** Given a group G and an isomorphism α between subgroups H and K, the HNN extension adjoins a generator t to G. Its additional relations are t⁻¹ht = α(h) for every h ∈ H.

**Problem.** Any isomorphism between two subgroups of a group G becomes conjugation by an element of some larger group that contains G.

**How the definition helps.** The defining relations implement α by conjugation on the image of G (our own). Britton’s lemma shows that the natural map from G is injective, so the extension contains a copy of G (our own).

**Wikipedia:** [HNN extension](https://en.wikipedia.org/wiki/HNN_extension). It says: “A consequence is that two isomorphic subgroups of a given group are always conjugate in some overgroup; the desire to show this was the original motivation for the construction.”

**Sources:**

- [G. Higman, B. H. Neumann, H. Neumann, Embedding theorems for groups, Journal of the London Mathematical Society 24 (1949) 247–254](https://doi.org/10.1112/jlms/s1-24.4.247)

### Modelling free groups by graphs makes Schreier's index formula an edge count

**Remember:** Count the edges outside a spanning tree to count subgroup generators.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth), 57M10. arXiv math.GR, math.GT. Level 3: graduate.

**Definition.** View the free group on k generators as the fundamental group of a graph with one vertex and k loops. A subgroup of index n is then the fundamental group of an n-sheeted covering graph, which has n vertices and nk edges (our own).

**Problem.** A subgroup of finite index n in a free group of finite rank k is free of rank nk − n + 1.

**How the definition helps.** The fundamental group of a connected graph is free on the edges outside a spanning tree (our own). The covering graph has nk edges, and a spanning tree uses n − 1 of them, leaving nk − n + 1 (our own).

**nLab:** [Nielsen-Schreier theorem](https://ncatlab.org/nlab/show/Nielsen-Schreier+theorem). It says: “then H is free on n k − n + 1 generators.”

**Sources:**

- [Otto Schreier, Die Untergruppen der freien Gruppen (1927).](https://doi.org/10.1007/bf02952517)

### Banning edge flips gives stabilizer inclusions

**Remember:** No flips means each edge stabilizer lies in both vertex stabilizers.

*Rules out counterexamples.* MSC 20E08 (Groups acting on trees). arXiv math.GR. Level 3: graduate.

**Definition.** A group acts on a tree without edge inversions if no element swaps the endpoints of an edge, so whatever fixes an edge fixes both endpoints. Then each edge stabilizer is a subgroup of both endpoint stabilizers, which is the data of a graph of groups (our own).

**Problem.** When a group acts on a tree without edge inversions, the quotient graph records the orbits of vertices and edges. Its graph of stabilizer groups determines the acting group up to isomorphism.

**How the definition helps.** Without inversions, the stabilizers form a graph of groups on the quotient graph, with edge groups embedded in vertex groups (our own). The Bass–Serre theorem identifies the acting group with the fundamental group of this graph of groups (our own). An involution that flips one edge fixes neither endpoint, so its edge group embeds in neither vertex group (our own).

**Paper or page:** [On acylindrical tree actions and outer automorphism group of Baumslag-Solitar groups](https://arxiv.org/abs/2501.01754v2). It says: “Then G can be identified with the fundamental group of a certain graph of groups (Γ, 𝒢), where Γ is the quotient graph X/G.”

**Sources:**

- [J.-P. Serre, Trees, 1980](https://doi.org/10.1007/978-3-642-61856-7)

### Graphs of groups make the Kurosh subgroup theorem a short corollary

**Remember:** Let the subgroup act on the tree, then read off its pieces.

*Makes the theorem clean to state or prove.* MSC 20E08 (Groups acting on trees), 20E06. arXiv math.GR. Level 3: graduate.

**Definition.** A graph of groups assigns a group to each vertex and edge of a graph, with each edge group embedded in its two endpoint groups. When every edge group is trivial, its fundamental group is the free product of the vertex groups with a free group (our own).

**Problem.** Kurosh (1934): let H be a subgroup of a free product A ∗ B. Then H is a free product of a free group and of intersections of H with conjugates of A and B.

**How the definition helps.** A ∗ B acts on its Bass–Serre tree with trivial edge stabilizers and with vertex stabilizers the conjugates of A and B (our own). Restricted to H, edge stabilizers stay trivial and vertex stabilizers become intersections of H with those conjugates. The Bass–Serre structure theorem then writes H as their free product, one vertex per orbit, with a free group (our own).

**Wikipedia:** [Kurosh subgroup theorem](https://en.wikipedia.org/wiki/Kurosh_subgroup_theorem), [Bass–Serre theory](https://en.wikipedia.org/wiki/Bass%E2%80%93Serre_theory). It says: “In modern terms, the Kurosh subgroup theorem is a straightforward corollary of the basic structural results of Bass–Serre theory about groups acting on trees.”

**Sources:**

- [J.-P. Serre, Trees, translated by J. Stillwell, Springer (1980); French original Arbres, amalgames, SL₂, Astérisque 46 (1977)](https://doi.org/10.1007/978-3-642-61856-7)

### Completion commutes with abelianization

**Remember:** Close the commutator subgroup before taking the profinite abelian quotient.

*True by definition. Confidence: medium.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** The profinite completion of G is the limit of its finite quotients, and its continuous maps to a finite group are the homomorphisms from G (our own). The Hausdorff abelianization of a topological group kills the closure of its commutator subgroup. Its maps to a finite abelian group are the continuous maps that kill commutators (our own).

**Problem.** The profinite completion of an abelianization is the Hausdorff abelianization of the profinite completion.

**How the definition helps.** Both groups are profinite abelian groups whose continuous maps to each finite abelian group F are the homomorphisms from G to F (our own). A map from G to F kills commutators, so its continuous extension to the completion kills their closure (our own). A profinite group is determined by its continuous maps to finite groups, which gives the isomorphism (our own).

**nLab:** [profinite completion of a group](https://ncatlab.org/nlab/show/profinite+completion+of+a+group). It says: “the limit (in the category of topological groups) over the diagram with objects all the finite quotient groups”

**Sources:** none listed. No primary source with a working link was found.

### Completion preserves quotients

**Remember:** Take the closure of the old kernel to get the new kernel.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** The profinite completion of a group G is the limit of its finite quotients, with the topology from their product. Its continuous homomorphisms to a finite group F correspond exactly to the homomorphisms from G to F.

**Problem.** For N normal in G, the profinite completion of G/N is the completion of G modulo the closure of the image of N.

**How the definition helps.** Both sides are profinite groups whose continuous maps to a finite group F are the maps from G to F that kill N (our own). A continuous map from the completion kills the closure of the image of N exactly when its restriction to G kills N (our own). Quotients by closed normal subgroups stay profinite, and profinite groups are determined by their maps to finite groups (our own).

**Paper or page:** [Profinite almost rigidity in 3-manifolds](https://arxiv.org/abs/2410.16002v4). It says: “The profinite completion functor is right exact”

**Sources:**

- [L. Ribes and P. Zalesskii, Profinite Groups, 2010](https://doi.org/10.1007/978-3-642-01642-4)

### Completion turns conjugacy into closure

**Remember:** Close the conjugacy class by letting the conjugator lie in the completion.

*True by definition. Confidence: medium.* MSC 20E18 (Limits, profinite groups), 20E45. arXiv math.GR. Level 3: graduate.

**Definition.** The profinite topology on G has the finite-index normal subgroups as basic neighbourhoods of the identity, and the completion is the limit of the finite quotients. When G is residually finite, G sits densely inside its compact completion, with the profinite topology induced from it (our own).

**Problem.** Let G be residually finite, so finite quotients distinguish its elements. In G, the profinite closure of a conjugacy class consists exactly of elements conjugate to its representative in the completion.

**How the definition helps.** For x in G, the class of x in the completion is the image of a compact group under h ↦ hxh⁻¹, hence closed (our own). G is dense in the completion, so the conjugates of x by G are dense in that class. Intersecting with G gives the profinite closure in G (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group), [profinite completion of a group](https://ncatlab.org/nlab/show/profinite+completion+of+a+group). It says: “Any group has a profinite completion, given by taking the projective limit of the group's quotients by its finite index normal subgroups.”

**Sources:** none listed. No primary source with a working link was found.

### Frattini quotients count pro-p generators

**Remember:** A set generates exactly when it spans the Frattini quotient.

*True by definition. Confidence: medium.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** A pro-p group is an inverse limit of finite groups of p-power order, and its Frattini subgroup Φ(G) is the intersection of its maximal open subgroups. Each maximal open subgroup is normal of index p, so G/Φ(G) is a vector space over 𝔽ₚ (our own).

**Problem.** The minimum number of topological generators of a finitely generated pro-p group is the dimension of its Frattini quotient over 𝔽ₚ.

**How the definition helps.** A set generates G topologically exactly when its image spans G/Φ(G), because every proper closed subgroup lies in a maximal open subgroup (our own). So the minimum number of generators is the dimension, attained by lifting a basis (our own). Finite generation makes this dimension finite.

**Wikipedia:** [Frattini subgroup](https://en.wikipedia.org/wiki/Frattini_subgroup), [Pro-p group](https://en.wikipedia.org/wiki/Pro-p_group). It says: “then k is the smallest number of generators for G”

**Sources:** none listed. No primary source with a working link was found.

### Inverse limits give profinite completion its unique extension property

**Remember:** Each map to a finite group factors through one finite quotient.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** The profinite completion Ĝ of G is the inverse limit of its finite quotients G/N: the families of cosets that agree under the quotient maps. The map η sends g to its family of cosets gN.

**Problem.** Every abstract homomorphism from G to a profinite group extends uniquely to a continuous homomorphism from Ĝ.

**How the definition helps.** A map from G to a profinite group H induces compatible maps to the finite quotients of H, and these combine into the extension (our own). η(G) is dense, since finitely many coordinates can be tested in one finite quotient, so the extension is unique (our own).

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “The homomorphism η is characterized by the following universal property: given any profinite group H and any continuous group homomorphism f : G → H”

**Sources:** none listed. No primary source with a working link was found.

### Inverse limits make profinite groups compact and totally disconnected

**Remember:** Compatible families form a closed subset of a product of finite groups.

*True by definition.* MSC 20E18 (Limits, profinite groups), 22C05. arXiv math.GR, math.GN. Level 3: graduate.

**Definition.** A profinite group is an inverse limit of finite discrete groups. Its elements are the tuples, one entry per group, that agree under every transition map, with the product topology.

**Problem.** An inverse limit of finite discrete groups is compact, Hausdorff and totally disconnected.

**How the definition helps.** Each compatibility condition defines a closed subset of a compact, Hausdorff, totally disconnected product, so the limit is one too. Tychonoff’s theorem gives compactness of the product. Two distinct tuples differ in one finite discrete coordinate, and its fibres split them into disjoint open and closed sets (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “The finite groups are considered as compact discrete topological groups and so the inverse limit, as a closed subspace of the compact space that is the product of all those finite groups has the inverse limit topology”

**Paper or page:** [Topology, Lemma 5.30.4](https://stacks.math.columbia.edu/tag/0BR1). It says: “The following are equivalent G as a topological space is profinite, G is a limit of a diagram of finite discrete topological groups, G is a cofiltered limit of finite discrete topological groups.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite limits preserve surjections

**Remember:** Compact fibers turn finite compatibility into a compatible lift.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** An inverse limit of groups is the set of tuples whose coordinates agree under the maps of the system. A profinite group is such a limit of finite discrete groups, with the product topology, and so it is compact (our own).

**Problem.** Consider two inverse systems of profinite groups indexed by the same directed set, where any two indices have a common later index. Compatible continuous surjections at each index give a surjection between the inverse limits.

**How the definition helps.** Over a fixed target tuple, the possible lifts form a product of nonempty compact fibres, in which each compatibility condition is a closed subset (our own). Any finitely many conditions can be met by lifting at a common later index and projecting (our own). Compactness then gives a lift that meets all conditions at once (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “The projective limit of a system of profinite groups is an exact functor”

**Sources:** none listed. No primary source with a working link was found.

### The topological definition makes closed subgroups of profinite groups profinite

**Remember:** A closed subgroup inherits compactness, the Hausdorff property and total disconnectedness.

*True by definition.* MSC 20E18 (Limits, profinite groups), 22C05. arXiv math.GR. Level 3: graduate.

**Definition.** A profinite group is a compact, Hausdorff, totally disconnected topological group, where totally disconnected means that its only nonempty connected subsets are points. Each of these three properties passes to closed subsets (our own).

**Problem.** Every closed subgroup of a profinite group is profinite.

**How the definition helps.** A closed subset of a compact space is compact, and every subspace of a Hausdorff, totally disconnected space is Hausdorff and totally disconnected (our own). The work moves into the theorem that these groups are exactly the inverse limits of finite discrete groups.

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “Every closed subgroup of a profinite group is itself profinite; the topology arising from the profiniteness agrees with the subspace topology.”

**Sources:** none listed. No primary source with a working link was found.

### Complete normal subgroups split off

**Remember:** Every automorphism is conjugation by exactly one group element.

*True by definition.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 3: graduate.

**Definition.** A group N is complete if every automorphism of N is conjugation by exactly one element of N. Equivalently, N has trivial centre and every automorphism is inner.

**Problem.** If a normal subgroup N of G is complete, then G is the direct product of N and the elements that commute with N.

**How the definition helps.** Each g in G acts on the normal subgroup N by an automorphism, which completeness writes as conjugation by a unique φ(g) in N (our own). Uniqueness makes φ a homomorphism that is the identity on N, and its kernel is the centralizer C of N. Then g = φ(g)·(φ(g)⁻¹g), and N ∩ C is the trivial centre of N, so G = N × C (our own).

**Wikipedia:** [Complete group](https://en.wikipedia.org/wiki/Complete_group). It says: “If the kernel, N, is a complete group then the extension splits:”

**Sources:** none listed. No primary source with a working link was found.

### Counting extensions up to equivalence, not isomorphism, lets H² classify them

**Remember:** Keep track of the kernel and the quotient, and cohomology counts.

*Makes the theorem clean to state or prove.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** An extension 1 → K → G → H → 1 presents K as a normal subgroup of G with quotient H. Two such extensions are equivalent if some isomorphism G → G′ is the identity on K and induces the identity on H. So the maps from K and onto H are data, and isomorphic middle groups can give inequivalent extensions.

**Problem.** For an abelian group A, the equivalence classes of central extensions with kernel A and quotient G correspond one-to-one to H²(G, A), with G acting trivially. The split extension A × G corresponds to 0.

**How the definition helps.** Equivalence that fixes both ends is exactly what the cocycle of a section records (our own). A set-theoretic section of the quotient map fails to be multiplicative by an A-valued 2-cocycle, and changing the section adds a coboundary (our own). The extension classification theorem identifies the classes, and a homomorphic section gives the zero cocycle (our own).

**Wikipedia:** [Group extension](https://en.wikipedia.org/wiki/Group_extension). It says: “It may happen that the extensions 1→K→G→H→1 and 1→K→G′→H→1 are inequivalent but G and G′ are isomorphic as groups.”

**Sources:** none listed. No primary source with a working link was found.

### Crossed homomorphisms as sections of the semidirect product match complements

**Remember:** A subgroup that projects bijectively is the image of a section.

*True by definition.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** Let G act on an abelian group M. A crossed homomorphism is a map d: G → M such that g ↦ (d(g), g) is a homomorphic section of the projection M ⋊ G → G (our own). This says d(gh) = d(g) + g·d(h) for all g, h ∈ G.

**Problem.** Crossed homomorphisms from G to M correspond to complements of M in M ⋊ G. A complement is a subgroup that meets M trivially and, with M, generates the whole group.

**How the definition helps.** Such a section has a complement as image, and a complement projects bijectively onto G, so it comes from exactly one section (our own). The projection is injective on a complement because it meets M trivially, and surjective because it and M generate the group.

**nLab:** [Beck module](https://ncatlab.org/nlab/show/Beck+module). It says: “M-valued derivations of G are precisely crossed homomorphisms G → M”

**Sources:** none listed. No primary source with a working link was found.

### Only perfect groups have a universal central extension

**Remember:** Exactly one map to every central extension forces perfectness.

*Makes the theorem clean to state or prove.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J05. arXiv math.GR. Level 3: graduate.

**Definition.** A central extension of G is a surjection E → G whose kernel lies in the centre of E. It is universal if it has exactly one map over G to every other central extension of G.

**Problem.** A group has a universal central extension exactly when it is perfect, that is, equal to its commutator subgroup. For a finite perfect group, this extension is unique up to isomorphism and perfect, with kernel the Schur multiplier H₂(G, ℤ).

**How the definition helps.** Any homomorphism f from U to an abelian A gives a map u ↦ (its image, f(u)) into G × A, so uniqueness forces f = 0 (our own). So U and G are perfect, and for perfect G = F/R with F free, \[F,F\]/\[F,R\] is universal with kernel H₂(G, ℤ) by Hopf’s formula. Two universal extensions map uniquely to each other, so they are isomorphic (our own).

**Wikipedia:** [Schur multiplier](https://en.wikipedia.org/wiki/Schur_multiplier), [Perfect group](https://en.wikipedia.org/wiki/Perfect_group). It says: “It is also called more briefly a universal central extension, but note that there is no largest central extension, as the direct product of G and an abelian group form a central extension of G of arbitrary size.”

**Sources:**

- [I. Schur, Über die Darstellung der endlichen Gruppen durch gebrochen lineare Substitutionen, Journal für die reine und angewandte Mathematik 127 (1904) 20–50](https://doi.org/10.1515/crll.1904.127.20)

### Finite quotients detect surviving elements

**Remember:** An element survives if some finite quotient sees it.

*Rules out counterexamples.* MSC 20E26 (Residual properties and generalizations; residually finite groups), 20E18. arXiv math.GR. Level 3: graduate.

**Definition.** A group is residually finite if each element other than the identity has nontrivial image in some finite quotient. The profinite completion map sends each element to its tuple of images in all finite quotients.

**Problem.** The map from a group to its profinite completion is injective exactly for residually finite groups.

**How the definition helps.** An element lies in the kernel exactly when its image in every finite quotient is trivial, so the kernel is trivial exactly for residually finite groups. The additive group ℚ is not residually finite (our own). Every rational is m times another rational, so every map to a finite group of order m is trivial (our own).

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “The homomorphism η is injective if and only if the group G is residually finite”

**Sources:** none listed. No primary source with a working link was found.

### Quasisimple groups have central proper normal subgroups

**Remember:** Perfectness stops a proper normal subgroup from covering the simple quotient.

*Rules out counterexamples.* MSC 20E32 (Simple groups). arXiv math.GR. Level 3: graduate.

**Definition.** A quasisimple group is a perfect group, one generated by its commutators, whose quotient by its centre is nonabelian simple.

**Problem.** Every proper normal subgroup of a quasisimple group lies in its center.

**How the definition helps.** If N mapped onto the simple quotient G/Z(G), then G = NZ(G), so G/N would be abelian and perfect, hence trivial (our own). So the image of N is trivial, and N lies in Z(G) (our own). Without perfectness, A₅ × C₂ has a simple quotient by its centre, yet A₅ × {1} is a noncentral proper normal subgroup (our own).

**Paper or page:** [Quasirandom and quasisimple groups](https://arxiv.org/abs/2404.05550v3). It says: “Let G be a quasisimple group, and let N ◁ G be a proper normal subgroup. Then N ⊆ Z(G), and G/N is again quasisimple.”

**Sources:**

- [Quasirandom and quasisimple groups, Lemma 2.10](https://arxiv.org/abs/2404.05550v3)

### BN-pair axioms prove simplicity for all groups of Lie type at once

**Remember:** A simple reflection moves each double coset into at most two.

*Makes the theorem clean to state or prove.* MSC 20E42 (Groups with a \\(BN\\)-pair; buildings), 20D06. arXiv math.GR. Level 3: graduate.

**Definition.** A BN-pair in G is two subgroups B and N that generate G, with B ∩ N normal in N and W = N/(B ∩ N) generated by involutions S. Each s in S sends a double coset into at most two: sBw ⊆ BswB ∪ BwB for all w in W. Also sBs⁻¹ ⊈ B for every s in S.

**Problem.** Tits's simplicity theorem: let G have a BN-pair with B solvable, all conjugates of B meeting only in the identity, and S not split into two nonempty commuting parts. If G equals its commutator subgroup, then G is simple.

**How the definition helps.** The proof uses only these axioms, so one argument covers every group of Lie type at once. For a normal subgroup H, the condition on S forces HB to be B or G (our own). If HB = B, then H is in every conjugate of B and is trivial; if HB = G, then G/H is solvable and perfect, so H = G (our own).

**Wikipedia:** [(B, N) pair](https://en.wikipedia.org/wiki/%28B%2C_N%29_pair), [Group of Lie type](https://en.wikipedia.org/wiki/Group_of_Lie_type). It says: “a (B, N) pair is a structure on groups of Lie type that allows one to give uniform proofs of many results, instead of giving a large number of case-by-case proofs.”

**Sources:**

- [J. Tits, Algebraic and abstract simple groups, Annals of Mathematics 80 (1964) 313–329](https://doi.org/10.2307/1970394)

### A coset absorbs twisted conjugation

**Remember:** Twisting by φ is just conjugating by the new generator t.

*True by definition.* MSC 20E45 (Conjugacy classes for groups). arXiv math.GR. Level 3: graduate.

**Definition.** The φ-twisted conjugates of x in G are the elements hxφ(h)⁻¹ for h in G. Adjoin an element t with tgt⁻¹ = φ(g), forming the semidirect product of G with the infinite cyclic group ⟨t⟩, so that applying φ becomes conjugating by t.

**Problem.** Multiplication by t matches φ-twisted conjugacy classes in G with ordinary conjugacy classes in the coset Gt.

**How the definition helps.** Ordinary conjugation of xt by h in G gives h(xt)h⁻¹ = hxφ(h)⁻¹t, the twisted formula followed by t (our own). Conjugation by t adds no new classes, because t(xt)t⁻¹ = x⁻¹(xt)x (our own).

**Paper or page:** [Twisted Conjugacy in Big Mapping Class Groups](https://arxiv.org/abs/2112.06612v2). It says: “The map x ↦ xt gives a bijection between the set of φ-twisted conjugacy classes of G and the set of conjugacy classes of Gφ contained in the coset G · t.”

**Sources:**

- [Sushil Bhunia and Swathi Krishna, Twisted Conjugacy in Big Mapping Class Groups, Corollary 2.9](https://arxiv.org/abs/2112.06612v2)

### Defining finitely presented groups as compact objects makes retracts finitely presented

**Remember:** Maps out of a compact group reach a colimit through some stage.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 18C35. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** A group G is compact if every map from G into a filtered colimit of groups factors through some stage. Two such factorizations that agree in the colimit must agree at a later stage. Equivalently, colim Hom(G, Dᵢ) → Hom(G, colim Dᵢ) is bijective for every small filtered diagram D.

**Problem.** A retract of a finitely presented group is finitely presented. H is a retract of G when maps i from H to G and r from G to H satisfy r∘i = identity.

**How the definition helps.** Composing with r and i makes the maps out of H a retract of the maps out of G, and a retract of a bijection is a bijection (our own). For example, a map f from H gives f∘r, which factors through a stage; composing with i then factors f (our own). The nLab's theorem that compact groups are exactly the finitely presented ones gives the stated result.

**nLab:** [compact object](https://ncatlab.org/nlab/show/compact+object). It says: “In C = Grp an object is compact precisely if it is finitely presented as a group.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Fox derivatives as coordinates makes Fox's fundamental formula hold by definition

**Remember:** A Fox derivative reads one coordinate of u − ε(u).

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 16S34. arXiv math.GR. Level 3: graduate.

**Definition.** For a free group F on generators xᵢ, the augmentation ε on ℤF sums the coefficients. Its kernel is a free left ℤF-module with basis the elements xᵢ − 1, and ∂u/∂xᵢ is the coordinate of u − ε(u) at xᵢ − 1 in this basis.

**Problem.** For every element u of ℤF, with ε(u) the sum of its coefficients, u − ε(u) equals the sum over i of (∂u/∂xᵢ)(xᵢ − 1).

**How the definition helps.** The formula only writes u − ε(u) in the basis, so it holds by definition (our own). The work moves to the theorem that the elements xᵢ − 1 form a free left basis of the augmentation ideal (our own).

**nLab:** [Fox derivative](https://ncatlab.org/nlab/show/Fox+derivative). It says: “u − ε(u) 1<sub>F</sub> = ∑ᵢ (∂u/∂xᵢ)(xᵢ − 1)”

**Sources:**

- [Ralph H. Fox, Free Differential Calculus. I: Derivation in the Free Group Ring (1953).](https://doi.org/10.2307/1969736)

### The small cancellation condition C′(1/6) makes Dehn's algorithm solve the word problem

**Remember:** Relators overlap little, so a trivial word shows over half a relator.

*Makes the theorem clean to state or prove.* MSC 20F06 (Cancellation theory of groups; application of van Kampen diagrams), 20F10. arXiv math.GR. Level 3: graduate.

**Definition.** Close the cyclically reduced relators under cyclic shifts and inverses. A piece is a nonempty word that begins two distinct relators of this set, so it is where two relators overlap. The condition C′(λ) requires every piece that begins a relator r to have length less than λ\|r\|.

**Problem.** For a C′(1/6) presentation, a freely reduced word equals the identity if and only if Dehn's algorithm reduces it to the empty word. So the word problem is solvable for finite C′(1/6) presentations.

**How the definition helps.** Short overlaps make Greendlinger's lemma apply: every nonempty freely reduced word equal to the identity contains more than half of some relator. Replacing that half by the inverse of the shorter rest keeps the group element and shortens the word. So Dehn's algorithm reaches the empty word exactly for words equal to the identity, and it always stops (our own).

**Wikipedia:** [Small cancellation theory](https://en.wikipedia.org/wiki/Small_cancellation_theory). It says: “Note that the assumption λ ≤ 1/6 implies that (1 − 3λ) ≥ 1/2, so that w contains a subword more than a half of some defining relator.”

**Sources:** none listed. No primary source with a working link was found.

### Residual finiteness decides word problems

**Remember:** Finite quotients detect nonidentity words in residually finite groups.

*Rules out counterexamples.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** A group is residually finite if every nonidentity element has nonidentity image in some finite quotient.

**Problem.** A finitely presented residually finite group has an algorithm to decide if a word in its generators is the identity.

**How the definition helps.** Residual finiteness gives every nonidentity word a finite witness, so both answers can be found by search (our own). One search derives consequences of the relators; the other tries maps to finite groups until one keeps the word. Boone's finitely presented group with unsolvable word problem is therefore not residually finite (our own).

**nLab:** [residually finite group](https://ncatlab.org/nlab/show/residually+finite+group). It says: “The intersection of all normal subgroups N ⊂ G of finite index \[G : N\] ∈ ℕ is trivial.”

**Wikipedia:** [Residually finite group](https://en.wikipedia.org/wiki/Residually_finite_group). It says: “Finitely presented residually finite groups have a solvable word problem”

**Sources:** none listed. No primary source with a working link was found.

### Subgroup separability decides subgroup membership

**Remember:** Finite quotients certify nonmembership when the group is subgroup separable.

*Rules out counterexamples.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** A group G is subgroup separable if finite quotients separate each finitely generated subgroup from every element outside it. That is, for every finitely generated subgroup H and every g ∉ H, some map q onto a finite group has q(g) ∉ q(H).

**Problem.** In a subgroup separable Artin group given by a finite presentation, an algorithm decides membership in any subgroup given by finitely many generators.

**How the definition helps.** Separability gives every nonmember a finite witness, so both answers can be found by search (our own). One search lists products of the subgroup generators; the other tries finite quotients until the input's image leaves the subgroup's image. Mihailova's subgroup of F₂ × F₂, a right-angled Artin group, has undecidable membership, so F₂ × F₂ is not subgroup separable (our own).

**Paper or page:** [Membership problems in braid groups and Artin groups](https://arxiv.org/abs/2409.11335v3). It says: “Every subgroup separable Artin group has decidable rational subset membership problem.”

**Sources:** none listed. No primary source with a working link was found.

### Isoclinism makes the Schur cover of every finite group unique

**Remember:** Same commutator table, possibly different centres.

*Makes the theorem clean to state or prove.* MSC 20F12 (Commutator calculus), 20C25. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** Two groups G and H are isoclinic when they have the same commutator table. That is, isomorphisms G/Z(G) ≅ H/Z(H) and \[G, G\] ≅ \[H, H\] match the commutator of two cosets with the commutator of their images.

**Problem.** Every finite group G has Schur covers, central extensions of least order to which every complex projective representation of G lifts. All Schur covers of G are isoclinic, although they need not be isomorphic.

**How the definition helps.** Isoclinism keeps the commutator structure that all Schur covers share and forgets the central part where they can differ (our own). Schur's covering group theorem supplies existence and this comparison. For the Klein four-group, the dihedral and quaternion groups of order eight are two non-isomorphic Schur covers (our own).

**Wikipedia:** [Schur multiplier](https://en.wikipedia.org/wiki/Schur_multiplier), [Isoclinism of groups](https://en.wikipedia.org/wiki/Isoclinism_of_groups). It says: “The Schur cover of a perfect group is uniquely determined up to isomorphism, but the Schur cover of a general finite group is only determined up to isoclinism.”

**Sources:**

- [P. Hall, The classification of prime-power groups, Journal für die reine und angewandte Mathematik 182 (1940) 130–141](https://doi.org/10.1515/crll.1940.182.130)

### Polycyclic groups have finite presentations

**Remember:** Finitely many cyclic layers give a finite list of relations.

*Rules out counterexamples.* MSC 20F16 (Solvable groups, supersolvable groups), 20F05. arXiv math.GR. Level 3: graduate.

**Definition.** A polycyclic group is one built from finitely many cyclic groups by repeated extensions. That is, a finite chain of subgroups runs from the identity to the whole group, each normal in the next, with every successive quotient cyclic.

**Problem.** Every polycyclic group has a presentation using finitely many generators and relations.

**How the definition helps.** Cyclic groups are finitely presented, and an extension of finitely presented groups is finitely presented, so induction along the chain gives the result (our own). The lamplighter group ℤ/2 wr ℤ shows the cyclic condition matters: it is solvable and finitely generated but has no finite presentation. Every subgroup of a polycyclic group is finitely generated, but the lamp subgroup of the lamplighter group is not (our own).

**Wikipedia:** [Polycyclic group](https://en.wikipedia.org/wiki/Polycyclic_group), [Lamplighter group](https://en.wikipedia.org/wiki/Lamplighter_group). It says: “Polycyclic groups are finitely presented, which makes them interesting from a computational point of view.”

**Sources:**

- [Gilbert Baumslag, Wreath products and finitely presented groups (1961).](https://doi.org/10.1007/bf01211007)

### Virtually nilpotent, not nilpotent, matches polynomial growth exactly

**Remember:** Nilpotent up to finite index, because growth cannot see finite index.

*Makes the theorem clean to state or prove.* MSC 20F19 (Generalizations of solvable and nilpotent groups), 20F69. arXiv math.GR. Level 3: graduate.

**Definition.** A group is virtually nilpotent if some subgroup of finite index is nilpotent. So the condition, like growth, does not change when one passes to a subgroup of finite index.

**Problem.** Gromov (1981): a finitely generated group has polynomial growth if and only if it has a nilpotent subgroup of finite index.

**How the definition helps.** Growth does not change on passing to a subgroup of finite index, so an exact description must ignore finite index too. Plain nilpotency fails: the infinite dihedral group has linear growth but is not nilpotent (our own). The easy direction is due to Wolf, and the hard direction is Gromov's.

**Wikipedia:** [Virtually](https://en.wikipedia.org/wiki/Virtually), [Gromov's theorem on groups of polynomial growth](https://en.wikipedia.org/wiki/Gromov%27s_theorem_on_groups_of_polynomial_growth). It says: “Gromov's theorem states that the finitely generated groups with polynomial growth are precisely the finitely generated virtually nilpotent groups.”

**Sources:**

- [M. Gromov, Groups of polynomial growth and expanding maps (with an appendix by J. Tits), Publications Mathématiques de l'IHÉS 53 (1981) 53–73](https://doi.org/10.1007/BF02698687)

### Virtually solvable makes the Tits alternative hold for finitely generated linear groups

**Remember:** Solvable up to finite index, or else a free subgroup appears.

*Makes the theorem clean to state or prove.* MSC 20F19 (Generalizations of solvable and nilpotent groups), 20H20. arXiv math.GR. Level 3: graduate.

**Definition.** A linear group, a subgroup of GL(n, k) for a field k, is virtually solvable if some subgroup of finite index is solvable. So every finite group counts, and a finite group never contains a free group on two generators.

**Problem.** Tits (1972): a finitely generated linear group either is virtually solvable or contains a free group on two generators.

**How the definition helps.** Some finite linear groups, such as A₅, are not solvable, yet contain no free group on two generators (our own). So plain solvability would make the alternative false, and virtual solvability absorbs these groups. Tits's theorem supplies a free subgroup on two generators whenever virtual solvability fails (our own).

**Wikipedia:** [Tits alternative](https://en.wikipedia.org/wiki/Tits_alternative), [Amenable group](https://en.wikipedia.org/wiki/Amenable_group), [Virtually](https://en.wikipedia.org/wiki/Virtually). It says: “every subgroup of GL(n,k) with k a field either has a normal solvable subgroup of finite index (and therefore is amenable) or contains the free group on two generators.”

**Sources:**

- [J. Tits, Free subgroups in linear groups, Journal of Algebra 20 (1972) 250–270](https://doi.org/10.1016/0021-8693(72)90058-0)

### Configuration space proves braid groups have no torsion

**Remember:** A finite-dimensional classifying space rules out torsion in its fundamental group.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 55R80. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** The braid group Bₙ is the fundamental group of the space of unordered sets of n distinct points in the plane. This space is aspherical and has real dimension 2n, so it is a finite-dimensional classifying space for Bₙ.

**Problem.** Bₙ has no nonidentity element of finite order.

**How the definition helps.** A finite-dimensional classifying space rules out torsion, because a finite cyclic subgroup would get a 2n-dimensional classifying space from a covering space (our own). A nontrivial finite cyclic group has nonzero integral cohomology in every even positive degree, which this dimension forbids (our own). Asphericity of the space follows from the Fadell–Neuwirth fibrations.

**Wikipedia:** [Configuration space (mathematics)](https://en.wikipedia.org/wiki/Configuration_space_%28mathematics%29), [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “It follows from this definition and the fact that Confₙ(ℝ²) and UConfₙ(ℝ²) are Eilenberg–MacLane spaces of type K(π,1), that the unordered configuration space of the plane UConfₙ(ℝ²) is a classifying space for the Artin braid group”

**Sources:**

- [Edward Fadell and Lee Neuwirth, Configuration spaces, Mathematica Scandinavica (1962)](https://doi.org/10.7146/math.scand.a-10517)

### Ordered configurations split pure braid groups into free group factors

**Remember:** Forget one point to reveal a punctured plane and its free group.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 55R80. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** The pure braid group Pₙ is the fundamental group of the space of ordered lists of n distinct points in the plane. Forgetting the last point maps this space onto the one for n − 1 points, and each fibre is a plane with n − 1 punctures.

**Problem.** For n ≥ 2, the sequence 1 → Fₙ₋₁ → Pₙ → Pₙ₋₁ → 1 splits. Here Fₙ₋₁ is the free group on n − 1 generators.

**How the definition helps.** The forgetful map is a Fadell–Neuwirth fibration whose fibre has fundamental group Fₙ₋₁, which gives the exact sequence (our own). It has a section that adds a new point on the real axis, one unit to the right of every existing point. The section splits the map on fundamental groups and kills the connecting map from π₂ of the base (our own).

**Wikipedia:** [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “Pure braid groups fit into a short exact sequence 1 → Fₙ₋₁ → Pₙ → Pₙ₋₁ → 1. This sequence splits and therefore pure braid groups are realized as iterated semi-direct products of free groups.”

**Sources:**

- [Edward Fadell and Lee Neuwirth, Configuration spaces, Mathematica Scandinavica (1962)](https://doi.org/10.7146/math.scand.a-10517)

### Punctured disk mapping classes give Artin’s action on a free group

**Remember:** A disk homeomorphism acts on loops, and isotopy does not change the action.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 57K20. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** The braid group Bₙ is the group of homeomorphisms of an n-punctured disk that fix the boundary pointwise and permute the punctures, up to isotopy through such maps. Each one fixes a boundary basepoint, so it acts on the fundamental group of the punctured disk, a free group.

**Problem.** The action of braids on the free group of the punctured disk is a group homomorphism. In the usual basis it is Artin's action.

**How the definition helps.** Composing homeomorphisms composes their actions on the fundamental group, and isotopic maps act the same, so the action is a homomorphism (our own). Following the standard loops around the punctures under a swap of two adjacent punctures gives Artin's formulas (our own).

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “the MCG-presentation of the braid group (above) induces a group homomorphism of the braid group into the automorphism group of a free group, which turns out to be faithful.”

**Sources:**

- [Joan S. Birman, Mapping class groups and their relationship to braid groups, Communications on Pure and Applied Mathematics (1969)](https://doi.org/10.1002/cpa.3160220206)
- [Emil Artin, Theory of Braids, Annals of Mathematics (1947)](https://doi.org/10.2307/1969218)

### The cyclic cover makes the reduced Burau action a homomorphism

**Remember:** A fixed boundary lift makes braid composition agree with composition upstairs.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 57M10. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** Take the infinite cyclic cover C of the n-punctured disk in which a loop lifts to a loop exactly when it winds zero times in total about the punctures. Fixing a lift of a boundary point picks one lift of each braid to C (our own). The reduced Burau representation is the action of these lifts on H₁(C, ℤ), with t acting as the positive deck transformation.

**Problem.** The reduced Burau matrices give a group homomorphism from Bₙ into the invertible matrices over ℤ\[t, t⁻¹\].

**How the definition helps.** The chosen lifts compose like the braids and do not change under isotopy, so the action is a homomorphism (our own). Braids preserve the winding number, so their lifts commute with t and act ℤ\[t, t⁻¹\]-linearly (our own). A basis of this free module of rank n − 1 then gives Burau's matrices (our own).

**Wikipedia:** [Burau representation](https://en.wikipedia.org/wiki/Burau_representation). It says: “By the basic theory of covering spaces, Bₙ acts on H₁(Cₙ), and this representation is called the reduced Burau representation.”

**Sources:** none listed. No primary source with a working link was found.

### Coxeter presentations turn finite reflection groups into diagrams to classify

**Remember:** Record the angles between mirrors, and the group is determined.

*Makes the theorem clean to state or prove.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** A Coxeter system is a group with generators s in a set S, each of order two, and only the relations (st)ᵐ = 1 where m = m(s,t) is finite. Its diagram records the numbers m(s,t) in {2, 3, …, ∞}, so the diagram alone determines the group.

**Problem.** The finite Euclidean reflection groups are exactly the groups admitting a finite Coxeter system. Coxeter’s classification lists these systems by their diagrams.

**How the definition helps.** Because a diagram determines its group, classifying finite reflection groups reduces to listing diagrams (our own). Coxeter showed that the simple reflections of a finite reflection group satisfy only these relations, and that every finite Coxeter group is a reflection group. His classification then lists the diagrams of finite type (our own).

**Wikipedia:** [Coxeter group](https://en.wikipedia.org/wiki/Coxeter_group). It says: “In this way, every reflection group may be presented as a Coxeter group. The converse is partially true: every finite Coxeter group admits a faithful representation as a finite reflection group of some Euclidean space.”

**Sources:**

- [H. S. M. Coxeter, Discrete groups generated by reflections, Annals of Mathematics 35 (1934) 588–621](https://doi.org/10.2307/1968753)
- [H. S. M. Coxeter, The complete enumeration of finite groups of the form Rᵢ² = (RᵢRⱼ)ᵏⁱʲ = 1, Journal of the London Mathematical Society 10 (1935) 21–25](https://doi.org/10.1112/jlms/s1-10.37.21)

### Defining affine Weyl groups as semidirect products splits off translations

**Remember:** Each element is one lattice translation after one finite Weyl element.

*True by definition. Confidence: medium.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)), 17B22. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** The affine Weyl group of a reduced crystallographic root system is the semidirect product Q∨ ⋊ W, whose pairs (v, w) act by x ↦ v + w(x). Here Q∨ is the lattice spanned by the coroots 2α/(α,α), and W is the finite Weyl group, generated by the root reflections.

**Problem.** In the affine Weyl group of a root system, the translations form the coroot lattice Q∨. The quotient by them is the finite Weyl group W, and the linear reflections give a section.

**How the definition helps.** In this form the translations are exactly the pairs (v, 1), which form Q∨, and projection onto W has the section w ↦ (0, w) (our own). The comparison with affine reflections uses the formula x ↦ kα∨ + sα(x) for reflection across (α,x) = k (our own).

**Paper or page:** [Affine Kazhdan-Lusztig polynomials on the subregular cell in non simply-laced Lie algebras: with an application to character formulae (with an appendix by Roman Bezrukavnikov, Vasily Krylov, and Kenta Suzuki), Proposition 3.7](https://arxiv.org/abs/2401.06605v2). It says: “Let Ŵ = Q∨ ⋊ W be the affine Weyl group of type C.”

**Sources:** none listed. No primary source with a working link was found.

### Finite support preserves wreath bi-orders

**Remember:** Finite support gives the sequence a last place where two values differ.

*Rules out counterexamples.* MSC 20F60 (Ordered groups (group-theoretic aspects)), 20E22. arXiv math.GR. Level 3: graduate.

**Definition.** The restricted wreath product ℤ wr ℤ is the semidirect product in which ℤ shifts integer sequences indexed by ℤ that are nonzero at only finitely many places. So two distinct such sequences have a last place where they differ (our own); the unrestricted product allows all sequences. A bi-order is a total order preserved by multiplication on both sides.

**Problem.** The restricted wreath product of ℤ by ℤ admits a bi-order. The unrestricted wreath product of the same groups does not.

**How the definition helps.** Comparing sequences at their last differing place is shift invariant, so ordering first by the shift exponent and then this way gives a bi-order (our own). In the unrestricted product, the shift sends the sequence alternating 1 and −1 to its inverse (our own). In a bi-ordered group no nonidentity element is conjugate to its inverse (our own).

**Paper or page:** [The complexity of knapsack problems in wreath products](https://arxiv.org/abs/2002.08086v2). It says: “This holds only for the restricted wreath product; which is the wreath product construction we are dealing with.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ends through Cayley graphs makes them invariants of the group

**Remember:** Rays represent one end when no finite cut separates their tails.

*Makes the theorem clean to state or prove.* MSC 20F65 (Geometric group theory), 20E08. arXiv math.GR, math.GT. Level 3: graduate.

**Definition.** In a locally finite connected graph, two rays define the same end if their tails lie in one component after any finite set of vertices is deleted. The ends of a finitely generated group are the ends of a Cayley graph for a finite generating set. So ends depend only on the large-scale shape of the group.

**Problem.** Every finitely generated infinite group has one, two or infinitely many ends. A finitely generated group has multiple ends exactly when it splits nontrivially over a finite subgroup as an amalgamated free product or HNN extension.

**How the definition helps.** Ends see a graph only outside finite sets, so they survive the quasi-isometry between Cayley graphs for different finite generating sets (our own). The Freudenthal–Hopf theorem gives the possible counts, and Stallings's theorem matches more than one end with a splitting over a finite subgroup (our own).

**Wikipedia:** [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry), [Stallings theorem about ends of groups](https://en.wikipedia.org/wiki/Stallings_theorem_about_ends_of_groups). It says: “The ends of a finitely generated group are defined to be the ends of the corresponding Cayley graph; this definition is independent of the choice of a finite generating set.”

**Sources:**

- [H. Freudenthal, Über die Enden diskreter Räume und Gruppen, Commentarii Mathematici Helvetici 17 (1944) 1–38](https://doi.org/10.1007/BF02566233)
- [J. R. Stallings, On torsion-free groups with infinitely many ends, Annals of Mathematics 88 (1968) 312–334](https://doi.org/10.2307/1970577)

### Homogeneous quasimorphisms ignore conjugation

**Remember:** Additive up to bounded error, and exactly additive on powers.

*Rules out counterexamples.* MSC 20F65 (Geometric group theory), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** A quasimorphism is a map f from a group to ℝ that is additive up to a bounded error D: \|f(xy) − f(x) − f(y)\| ≤ D. It is homogeneous if f(xⁿ) = n f(x) for every integer n, so a fixed error vanishes after dividing by n.

**Problem.** Homogeneous quasimorphisms are constant on conjugacy classes. Quasimorphisms without the power condition need not be.

**How the definition helps.** Since (hxh⁻¹)ⁿ = hxⁿh⁻¹ and f(h⁻¹) = −f(h), homogeneity gives \|n f(hxh⁻¹) − n f(x)\| ≤ 2D (our own). Dividing by n and letting n grow gives f(hxh⁻¹) = f(x). Without homogeneity, the indicator of one transposition in S₃ is bounded, hence a quasimorphism, and it separates conjugates (our own).

**Wikipedia:** [Quasimorphism](https://en.wikipedia.org/wiki/Quasimorphism). It says: “It is constant on conjugacy classes”

**Paper or page:** [On conjugation invariant norms, asymptotic cones, metric ultraproducts and contractibility](https://arxiv.org/abs/2203.10889v1). It says: “The homogenisation ψ̄ of a quasimorphism ψ : G → ℝ is a homogeneous quasimorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Marked limits preserve group laws

**Remember:** Eventually every finite ball of the Cayley graph matches the limit.

*True by definition.* MSC 20F65 (Geometric group theory), 20F70. arXiv math.GR. Level 3: graduate.

**Definition.** A marked group is a group with an ordered list of k generators, for a fixed k. A sequence converges when, for each radius R, its labeled Cayley-graph balls of radius R eventually match the limit's ball. So each fixed word is eventually trivial exactly when it is trivial in the limit (our own).

**Problem.** A word law is an equation that holds for every substitution of group elements for its variables. A limit of marked groups satisfying the same word law also satisfies it.

**How the definition helps.** A failure of the law in the limit is a single nonidentity word in the generators, found by writing the substituted elements as words (our own). Convergence makes that word nonidentity in all late groups of the sequence, where the law holds, a contradiction (our own).

**Paper or page:** [Bounded conciseness in the space of marked groups](https://arxiv.org/abs/2502.05070v1). It says: “have balls of radius R isomorphic as labeled directed graphs”

**Sources:** none listed. No primary source with a working link was found.

### Thin triangles survive quasi-isometry, so hyperbolic groups need no chosen generators

**Remember:** Some δ always works; which δ depends on the generators.

*Makes the theorem clean to state or prove.* MSC 20F67 (Hyperbolic groups and nonpositively curved groups). arXiv math.GR, math.MG. Level 3: graduate.

**Definition.** A finitely generated group is hyperbolic if some Cayley graph for a finite generating set has δ-thin geodesic triangles for some δ ≥ 0. That means each side lies within δ of the union of the other two sides. Thin triangles survive quasi-isometries between geodesic spaces, with a new δ.

**Problem.** Hyperbolicity is independent of the finite generating set. A group is hyperbolic exactly when it acts properly discontinuously and cocompactly by isometries on a proper hyperbolic length space.

**How the definition helps.** Cayley graphs for different finite generating sets are quasi-isometric, and the Morse lemma shows that thin triangles survive this, so the generators do not matter (our own). The Švarc–Milnor lemma makes the group quasi-isometric to any proper length space on which it acts properly discontinuously and cocompactly. Conversely, the group acts this way on its own Cayley graph (our own).

**Wikipedia:** [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group), [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry). It says: “Thus we can legitimately speak of a finitely generated group G being hyperbolic without referring to a generating set.”

**Sources:**

- [M. Gromov, Hyperbolic groups, in Essays in Group Theory, MSRI Publications 8 (1987) 75–263](https://doi.org/10.1007/978-1-4613-9586-7_3)

### Comparing growth functions up to rescaling makes group growth independent of generators

**Remember:** Up to rescaling, how fast balls grow belongs to the group.

*True by definition.* MSC 20F69 (Asymptotic properties of groups), 20F65. arXiv math.GR. Level 3: graduate.

**Definition.** For a finite symmetric generating set, the growth function counts the elements that are products of at most n generators. Two growth functions a and b are equivalent if a(n) ≤ b(Cn) and b(n) ≤ a(Cn) for some integer C ≥ 1 and all n ≥ 0. So a constant rescaling of the radius does not matter.

**Problem.** The growth rate does not depend on the finite generating set. So polynomial growth, its degree, and exponential growth are properties of the group itself.

**How the definition helps.** Each generator in one finite set is a word of length at most C in the other set (our own). So each ball of radius n for one set lies in the ball of radius Cn for the other, which gives both inequalities. Rescaling n by C keeps polynomial degree and exponential growth (our own).

**Wikipedia:** [Word metric](https://en.wikipedia.org/wiki/Word_metric), [Growth rate (group theory)](https://en.wikipedia.org/wiki/Growth_rate_%28group_theory%29). It says: “The bilipschitz equivalence of word metrics implies in turn that the growth rate of a finitely generated group is a well-defined isomorphism invariant of the group, independent of the choice of a finite generating set.”

**Sources:**

- [J. Milnor, A note on curvature and fundamental group, Journal of Differential Geometry 2 (1968) 1–7](https://doi.org/10.4310/jdg/1214501132)

### Dehn functions up to equivalence make linear isoperimetry mean hyperbolic

**Remember:** Up to rescaling, the area cost of relations belongs to the group.

*Makes the theorem clean to state or prove.* MSC 20F69 (Asymptotic properties of groups), 20F67. arXiv math.GR, math.MG. Level 3: graduate.

**Definition.** The area of a word equal to the identity is the fewest conjugates of relators or their inverses whose product is that word in the free group. The Dehn function D(n) is the largest area of such words of length at most n. Two functions f, g are equivalent if, for some integer C ≥ 1, f(n) ≤ Cg(Cn+C)+Cn+C and g(n) ≤ Cf(Cn+C)+Cn+C for all n.

**Problem.** The equivalence class of the Dehn function depends only on the group, not on the finite presentation; it is even a quasi-isometry invariant. Gromov: a finitely presented group is hyperbolic if and only if its Dehn function is linear.

**How the definition helps.** Changing the finite presentation changes areas by at most a constant factor and lengths by a linear amount, which the equivalence absorbs (our own). Quasi-isometry invariance of the Dehn function gives the same class for quasi-isometric finitely presented groups. Gromov's linear isoperimetric theorem identifies the class of n with hyperbolicity (our own).

**Wikipedia:** [Dehn function](https://en.wikipedia.org/wiki/Dehn_function), [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group). It says: “A finitely presented group is word-hyperbolic group if and only if its Dehn function is equivalent to n, that is, if and only if every finite presentation of this group satisfies a linear isoperimetric inequality.”

**Sources:**

- [M. Gromov, Hyperbolic groups, in Essays in Group Theory, MSRI Publications 8 (1987) 75–263](https://doi.org/10.1007/978-1-4613-9586-7_3)
- [M. Dehn, Über unendliche diskontinuierliche Gruppen, Mathematische Annalen 71 (1911) 116–144](https://doi.org/10.1007/BF01456932)

### Defining Borel subgroups by complete quotients makes conjugacy short

**Remember:** A fixed coset puts one Borel subgroup inside a conjugate of the other.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups). arXiv math.AG, math.GR. Level 3: graduate.

**Definition.** For a connected linear algebraic group G over an algebraically closed field, a Borel subgroup is a closed connected solvable subgroup B with G/B complete.

**Problem.** Over an algebraically closed field, any two Borel subgroups of a connected linear algebraic group are conjugate.

**How the definition helps.** Another Borel subgroup B′ acts on the complete variety G/B and, being connected and solvable, fixes a coset gB, so B′ ⊆ gBg⁻¹ (our own). Likewise B lies in a conjugate of B′, so the dimensions agree and connectedness gives B′ = gBg⁻¹ (our own). The work goes into the Borel fixed point theorem and into proving that the two definitions agree (Milne 18.4 and 18.12).

**nLab:** [Borel subgroup](https://ncatlab.org/nlab/show/Borel+subgroup). It says: “the Borel subgroup B ⊂ G is a solvable connected subgroup such that G/B is a complete (equivalently projective) variety.”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), Corollary 18.4 and Theorem 18.12 (§18a–b)](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Defining Langlands duals by swapping root data makes double duals obvious

**Remember:** Swapping the two halves of a root datum twice changes nothing.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups), 20G20. arXiv math.RT, math.AG. Level 3: graduate.

**Definition.** A root datum of a connected complex reductive group lists, for a maximal torus, its characters, its one-parameter subgroups, the roots and the coroots. The Langlands dual is the group whose root datum is the same list with characters swapped with one-parameter subgroups and roots swapped with coroots.

**Problem.** The Langlands dual of the Langlands dual of a connected complex reductive group is isomorphic to the original group.

**How the definition helps.** Swapping twice gives back the original root datum, so the double dual has the same root datum as the group. The isomorphism theorem says that a root datum determines a reductive group up to isomorphism. The existence theorem, that every root datum comes from a group, makes the dual defined at all (our own).

**nLab:** [geometric Satake equivalence](https://ncatlab.org/nlab/show/geometric+Satake+equivalence). It says: “The geometric Satake equivalence categorifies the Satake isomorphism in the setting of local geometric Langlands.”

**Wikipedia:** [Root datum](https://en.wikipedia.org/wiki/Root_datum). It says: “by switching the characters with the 1-parameter subgroups, and switching the roots with the coroots.”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), §22l (the isogeny theorem) and Chapter 25 (the existence theorem)](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Defining parabolics by complete quotients makes subgroups containing Borels parabolic

**Remember:** A complete quotient maps onto every coarser quotient, which is then complete.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups), 14M17. arXiv math.AG, math.GR. Level 3: graduate.

**Definition.** Let G be a connected linear algebraic group over an algebraically closed field. A closed subgroup P is parabolic if G/P is complete. A Borel subgroup is a connected solvable parabolic subgroup.

**Problem.** Over an algebraically closed field, a closed subgroup that contains a Borel subgroup is parabolic. So its quotient is projective.

**How the definition helps.** If B ⊆ P, then G/B maps onto G/P, and the image of a complete variety is complete, so G/P is complete (Milne, proof of Theorem 18.21). The work goes into proving that a maximal connected solvable subgroup has a complete quotient (Milne Theorem 18.12). The step from complete to projective uses Milne 9.39.

**nLab:** [parabolic subgroup](https://ncatlab.org/nlab/show/parabolic+subgroup), [Borel subgroup](https://ncatlab.org/nlab/show/Borel+subgroup). It says: “A minimal (with respect to inclusion) parabolic subgroup of a linear algebraic group is called a Borel subgroup; in fact, given a Borel subgroup B, any closed subgroup P ⊃ B is parabolic. \| This is equivalent, and taken as a definition for arbitrary algebraic groups, to saying that the Borel subgroup B ⊂ G is a solvable connected subgroup such that G/B is a complete (equivalently projective) variety.”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), Definition 18.19 and Theorem 18.21 (§18b)](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Defining unipotent groups inside unitriangular matrices makes them nilpotent

**Remember:** Each commutator moves one step farther from the diagonal.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups), 20F18. arXiv math.AG, math.GR. Level 3: graduate.

**Definition.** A unipotent algebraic group is one isomorphic to a closed subgroup of the upper triangular matrices with ones on the diagonal. In that matrix group, each commutator with the whole group pushes the nonzero entries one more step above the diagonal.

**Problem.** Every unipotent algebraic group is nilpotent. So its repeated commutators with the whole group end at the identity.

**How the definition helps.** For n × n matrices, repeated commutators clear one more superdiagonal at each step and reach the identity after n − 1 steps; subgroups inherit this bound (our own). Kolchin's theorem shows that this agrees with the definition that every element has all eigenvalues equal to one (our own). Milne's Proposition 15.23 gives the subgroup argument.

**Wikipedia:** [Unipotent](https://en.wikipedia.org/wiki/Unipotent). It says: “In particular any unipotent group is a nilpotent group, though the converse is not true”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), Proposition 15.23 and 3.28](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Building Tamagawa measure from one global form makes it independent of scaling

**Remember:** One global scalar changes local volumes by factors whose product is one.

*True by definition.* MSC 20G35 (Linear algebraic groups over adèles and other rings and schemes), 11R56. arXiv math.NT. Level 3: graduate.

**Definition.** Tamagawa measure on the adelic points of a semisimple group G over a global field k is the product, over all places v, of the local Haar measures \|ω\|ᵥ. Here ω is one nonzero invariant top-degree form defined over k, with the standard normalization for k.

**Problem.** Replacing ω by cω, for a nonzero c in k, does not change the Tamagawa measure.

**How the definition helps.** Replacing ω by cω multiplies the local measure at v by \|c\|ᵥ, so the product measure changes by ∏ᵥ \|c\|ᵥ (our own). The product formula for normalized absolute values says this product is 1 for nonzero c in k.

**Wikipedia:** [Tamagawa number](https://en.wikipedia.org/wiki/Tamagawa_number). It says: “using the product formula for valuations.”

**Sources:**

- [André Weil, Adeles and Algebraic Groups (1982)](https://doi.org/10.1007/978-1-4684-9156-2)

### Finitely generated linear groups are residually finite

**Remember:** Finite matrix generators let finite quotients detect nonidentity elements.

*Rules out counterexamples.* MSC 20H20 (Other matrix groups over fields), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** A finitely generated linear group is a group of invertible matrices of one fixed size over a field, generated by finitely many matrices. All its entries then lie in one finitely generated ring, the ring generated by the entries of the generators and their inverses (our own).

**Problem.** Every finitely generated complex linear group is residually finite. Thus each nonidentity element survives in some finite quotient.

**How the definition helps.** Malcev maps this finitely generated ring onto a finite field so that a chosen nonidentity matrix stays nonidentity, and reduction gives the finite quotient (our own). Finite generation is needed: the unitriangular 2 × 2 matrices with rational upper entry form a copy of ℚ (our own). Every rational is n times another, so every map from ℚ to a group of order n is trivial (our own).

**Paper or page:** [Residual finiteness and discrete subgroups of Lie groups](https://arxiv.org/abs/2407.07680v2). It says: “Let $\\Gamma$ be a finitely generated subgroup of $\\operatorname{GL}<sub>N</sub>(\\mathbb{C})$ for some $N \\ge 1$. Then $\\Gamma$ is residually finite.”

**Sources:** none listed. No primary source with a working link was found.

### Cohomological dimension at most one means every abelian-kernel extension splits

**Remember:** No second cohomology means no nonsplit abelian extensions.

*Makes the theorem clean to state or prove.* MSC 20J05 (Homological methods in group theory), 20E05, 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** A group G has integral cohomological dimension at most n if Hᵏ(G, M) = 0 for every G-module M and every k &gt; n. For n = 1 this includes H²(G, M) = 0, and H²(G, M) classifies the extensions of G with abelian kernel M.

**Problem.** A group G has cohomological dimension at most 1 exactly when every extension of G with abelian kernel splits. By the Stallings–Swan theorem, these groups are exactly the free groups.

**How the definition helps.** Extensions of G with abelian kernel M and a given action are classified by H²(G, M), with split ones at 0. So all of them split exactly when H² vanishes for every module, and dimension shifting gives vanishing in higher degrees (our own). The Stallings–Swan theorem identifies these groups with the free groups.

**Wikipedia:** [Cohomological dimension](https://en.wikipedia.org/wiki/Cohomological_dimension). It says: “The Stallings-Swan theorem for a group G says that G is free if and only if every extension by G with abelian kernel is split.”

**Sources:**

- [Richard G. Swan, Groups of cohomological dimension one, Journal of Algebra 12 (1969) 585–610](https://doi.org/10.1016/0021-8693(69)90030-1)
- [John R. Stallings, On torsion-free groups with infinitely many ends, Annals of Mathematics 88 (1968) 312–334](https://doi.org/10.2307/1970577)

### Defining H₂ as a derived functor makes Hopf's quotient independent of presentation

**Remember:** Homology knows the group, so Hopf's quotient forgets the presentation.

*True by definition.* MSC 20J05 (Homological methods in group theory), 20F05, 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** The second homology H₂(G, ℤ) is Tor₂ of ℤ with ℤ over the group ring ℤ\[G\]. Any two projective resolutions of ℤ give the same answer, so it depends only on G. A presentation of G is a free group F with a normal subgroup R such that G ≅ F/R.

**Problem.** For every presentation G ≅ F/R, H₂(G, ℤ) ≅ (R ∩ \[F, F\])/\[F, R\]. So this quotient is the same for all presentations of G.

**How the definition helps.** Hopf's formula equates the presentation quotient with this invariant of G, so the quotient cannot depend on the presentation (our own). The five-term homology sequence for 1 → R → F → G → 1 embeds H₂(G, ℤ) into R/\[F, R\], because H₂(F, ℤ) = 0. Its image is the kernel of R/\[F, R\] → F/\[F, F\], namely (R ∩ \[F, F\])/\[F, R\] (our own).

**Wikipedia:** [Schur multiplier](https://en.wikipedia.org/wiki/Schur_multiplier), [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “H₂(G, ℤ) ≅ (R ∩ \[F, F\])/\[F, R\] where G ≅ F/R and F is a free group.”

**Sources:**

- [Heinz Hopf, Fundamentalgruppe und zweite Bettische Gruppe, Commentarii Mathematici Helvetici 14 (1942) 257–309](https://doi.org/10.1007/BF02565622)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Excluding proper-power relators gives one-relator groups cohomological dimension at most two

**Remember:** A relator that is no proper power creates no torsion.

*Rules out counterexamples.* MSC 20J05 (Homological methods in group theory), 20F05. arXiv math.GR. Level 3: graduate.

**Definition.** A relator r is a proper power if r = sᵐ in the free group for some element s and some integer m ≥ 2. Then s has finite order dividing m in the group the relator defines.

**Problem.** If r is not a proper power, the group ⟨x₁,…,xₙ \| r⟩ is torsion-free and has integral cohomological dimension at most two. For m ≥ 2, the group ⟨x \| xᵐ⟩ is cyclic of order m and has infinite integral cohomological dimension.

**How the definition helps.** When r is not a proper power, Lyndon's identity theorem makes the presentation complex aspherical, and its universal cover gives a free resolution of length two (our own). Finite integral cohomological dimension excludes nontrivial finite cyclic subgroups, which have cohomology in arbitrarily high degrees (our own). The relator xᵐ with m ≥ 2 shows this torsion for proper powers.

**Wikipedia:** [One-relator group](https://en.wikipedia.org/wiki/One-relator_group). It says: “If r ∈ F(x₁,…,xₙ) is not a proper power then a one-relator group G has cohomological dimension ≤ 2.”

**Sources:**

- [Roger C. Lyndon, Cohomology theory of groups with a single defining relation, Annals of Mathematics 52 (1950) 650–665](https://doi.org/10.2307/1969440)

### A free group's augmentation ideal is free, so higher cohomology vanishes

**Remember:** A resolution of length one leaves no room for H².

*True by definition.* MSC 20J06 (Cohomology of groups), 20E05. arXiv math.GR. Level 3: graduate.

**Definition.** Group cohomology Hⁿ(G, M) is Extⁿ over ℤ\[G\] from ℤ to M, and any projective resolution of ℤ computes it. The augmentation ideal I is the kernel of the map ℤ\[G\] → ℤ that sends each group element to 1. When I is projective, 0 → I → ℤ\[G\] → ℤ → 0 is a resolution of length one.

**Problem.** For a free group F on a set S, Hᵏ(F, M) = 0 for all k ≥ 2 and all F-modules M. If S is finite, H¹(F, ℤ) is free abelian of rank \|S\|.

**How the definition helps.** For a free group F, the ideal I is free with basis s − 1 for s in S, so Ext vanishes above degree one (our own). With trivial coefficients ℤ, the induced differential is zero because every s − 1 acts by zero. So H¹(F, ℤ) has one free integer coordinate per generator when S is finite (our own).

**Wikipedia:** [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “Notice the augmentation map aug: ℤ\[G\] → ℤ<sub>triv</sub> has kernel given by the free submodule I<sub>S</sub> generated by the set {s − 1 : s ∈ S}”

**Sources:**

- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Abstract kernels put the obstruction to nonabelian extensions in third cohomology

**Remember:** Fix the outer action first, and the obstruction lands in H³.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups), 20E22. arXiv math.GR. Level 3: graduate.

**Definition.** An abstract kernel is a homomorphism from a group G to Out(K), the automorphisms of a group K modulo the inner ones. Every extension 1 → K → E → G → 1 gives one by conjugation. Inner automorphisms fix the centre Z(K) pointwise, so an abstract kernel already makes Z(K) a G-module.

**Problem.** Each abstract kernel has an obstruction class in H³(G, Z(K)), and some extension realizes it exactly when the class is 0. Then the extensions that realize it, up to equivalence, form a set on which H²(G, Z(K)) acts simply transitively.

**How the definition helps.** Fixing only the outer action fixes the coefficient module Z(K), where both the obstruction and the choices live (our own). Lifting the action to automorphisms leaves inner errors whose associativity defect is a 3-cocycle in Z(K) (our own). The Eilenberg–Mac Lane theorem says extensions exist exactly when its class is 0, and H²(G, Z(K)) then acts simply transitively on them (our own).

**Wikipedia:** [Group extension](https://en.wikipedia.org/wiki/Group_extension). It says: “There is a similar classification of all extensions of G by A in terms of homomorphisms from G→Out(A), a tedious but explicitly checkable existence condition involving H³(G, Z(A)) and the cohomology group H²(G, Z(A)).”

**Sources:**

- [Samuel Eilenberg and Saunders MacLane, Cohomology theory in abstract groups II. Group extensions with a non-Abelian kernel, Annals of Mathematics 48 (1947) 326–341](https://doi.org/10.2307/1969174)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Characterizing projective profinite groups by cohomological dimension makes closed subgroups projective

**Remember:** Dimension cannot grow on subgroups, so projectivity passes down.

*True by definition. Confidence: medium.* MSC 20J06 (Cohomology of groups), 20E18, 12G10. arXiv math.GR. Level 3: graduate.

**Definition.** A profinite group G is projective if every continuous surjection from a profinite group onto G has a continuous homomorphic section. This is equivalent to cd(G) ≤ 1, that is, to H²(G, M) = 0 for every torsion discrete G-module M.

**Problem.** Every closed subgroup of a projective profinite group is projective. In particular, closed subgroups of free profinite groups are projective, though they need not be free.

**How the definition helps.** Cohomological dimension cannot increase on closed subgroups, so the condition cd ≤ 1 passes down at once. That inequality follows from Shapiro's lemma, which turns cohomology of a closed subgroup into cohomology of G with induced coefficients (our own). The work went into the equivalence of lifting with cd(G) ≤ 1, since a section for the subgroup is hard to build directly (our own).

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “Projectivity for a profinite group G is equivalent to either of the two properties: the cohomological dimension cd(G) ≤ 1; for every prime p the Sylow p-subgroups of G are free pro-p-groups.”

**Sources:**

- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Classifying spaces give graded commutativity

**Remember:** The group cup product inherits the sign rule from space cohomology.

*True by definition. Confidence: medium.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** The integral cohomology ring of a discrete group G is the integer cohomology ring, under cup product, of a classifying space BG. Here BG is a connected cell complex with fundamental group G and contractible universal cover.

**Problem.** The integral cohomology ring of a group is graded commutative. Interchanging factors of degrees p and q introduces a minus sign precisely when both degrees are odd.

**How the definition helps.** Cup product on the cohomology of any space is graded commutative, so the group's ring inherits the sign rule at once (our own). For the algebraic definition with functions on tuples of group elements, one must also show that the products agree, not only the groups (our own).

**Wikipedia:** [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “The group cohomology of a discrete group G is the singular cohomology of a suitable space having G as its fundamental group”

**Sources:** none listed. No primary source with a working link was found.

### Cohomological dimension decreases on restriction

**Remember:** Restrict the resolution to the subgroup; it stays projective and short.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** Over a nonzero ring R, the cohomological dimension of G is the least length of a projective resolution of the trivial module R over the group ring RG. It is infinity if no such resolution is finite. Projective means a direct summand of a free module, and RG is free over RH for every subgroup H (our own).

**Problem.** The cohomological dimension of a subgroup over R is at most that of the whole group over R.

**How the definition helps.** Restricting a resolution from RG to RH keeps it exact and keeps its length (our own). Its terms stay projective because RG is free over RH, so the subgroup has a resolution no longer than that of G (our own).

**Wikipedia:** [Cohomological dimension](https://en.wikipedia.org/wiki/Cohomological_dimension). It says: “if the trivial RG-module R has a projective resolution of length n”

**Sources:** none listed. No primary source with a working link was found.

### Cohomology as Ext makes Shapiro’s lemma an adjunction

**Remember:** The maps in a resolution match term by term under coinduction.

*True by definition.* MSC 20J06 (Cohomology of groups), 18G15. arXiv math.GR, math.KT. Level 3: graduate.

**Definition.** For a group G and a left ℤ\[G\]-module M, Hⁿ(G, M) is Extⁿ over ℤ\[G\] from the trivial module ℤ to M. To compute it, apply Hom over ℤ\[G\] into M to a projective resolution of ℤ and take cohomology in degree n.

**Problem.** Let H be a subgroup of G and N a left ℤ\[H\]-module. The cohomology of G with coefficients in the coinduced module, the ℤ\[H\]-linear maps ℤ\[G\] → N, equals the cohomology of H with coefficients in N.

**How the definition helps.** Coinduction is right adjoint to restriction, so Hom from each resolution term into the coinduced module equals Hom from the restricted term into N (our own). A projective resolution of ℤ over ℤ\[G\] stays projective over ℤ\[H\], because ℤ\[G\] is free over ℤ\[H\] by the coset decomposition (our own). The identification respects the differentials, so the two complexes have the same cohomology (our own).

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology). It says: “For A an abelian group equipped with a G-action, the degree-n group cohomology of G with coefficients in A is the nth-Ext-group”

**Wikipedia:** [Shapiro's lemma](https://en.wikipedia.org/wiki/Shapiro%27s_lemma). It says: “If S is projective as a left R-module, then:
\\operatorname{Ext}<sup>n<sub>R</sub></sup>({}<sub>R</sub> M,N) \\cong \\operatorname{Ext}<sup>n<sub>S</sub></sup>(M,\\operatorname{Hom}<sub>R</sub>(S,N))”

**Sources:** none listed. No primary source with a working link was found.

### Continuous cohomology of profinite groups is torsion, unlike abstract cohomology

**Remember:** Every continuous class lives on a finite quotient, so it is torsion.

*Rules out counterexamples.* MSC 20J06 (Cohomology of groups), 20E18, 12G05. arXiv math.GR, math.NT. Level 3: graduate.

**Definition.** A discrete module for a profinite group G is a G-module in which every element is fixed by an open subgroup. Continuous cohomology is the right derived functor of invariants on these modules, so Hⁱ(G, M) is the direct limit of Hⁱ(G/U, Mᵁ) over open normal subgroups U.

**Problem.** For a profinite group G, the continuous cohomology Hⁱ(G, M) is a torsion group for every i &gt; 0 and every discrete module M. If M is a ℚ-vector space, then Hⁱ(G, M) = 0 for i &gt; 0.

**How the definition helps.** Each class therefore comes from a finite group G/U, and transfer shows that \|G/U\| kills its positive-degree cohomology (our own). If M is a ℚ-vector space, multiplication by this integer is invertible, so the class vanishes. Abstract H¹(Ẑ, ℚ) with trivial action is not torsion: it contains a homomorphism Ẑ → ℚ extending the inclusion ℤ → ℚ, which exists by divisibility of ℚ (our own).

**Paper or page:** [Etale Cohomology, Lemma 59.57.6](https://stacks.math.columbia.edu/tag/0DV3). It says: “Let G be a profinite topological group. Then Hⁱ(G, M) is torsion for i &gt; 0 and any G-module M, and Hⁱ(G, M) = 0 if M is a Q-vector space.”

**Sources:**

- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Corestriction after restriction is the index, so finite groups have torsion cohomology

**Remember:** Restrict then transfer back, and you multiply by the index.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a subgroup H of finite index in G, the transfer, or corestriction, is a map from Hⁿ(H, M) to Hⁿ(G, M). In degree 0 it sends an H-fixed element m to the sum of gm over representatives g of the cosets of H. In higher degrees it is the unique extension of this map that commutes with the connecting maps of long exact sequences.

**Problem.** If G is finite, then \|G\| kills Hⁿ(G, M) for every n ≥ 1 and every G-module M. So Hⁿ(G, M) = 0 for n ≥ 1 when multiplication by \|G\| is invertible on M.

**How the definition helps.** This definition reduces the identity cor ∘ res = \[G : H\] to degree 0, where restriction then transfer adds \[G : H\] copies of m (our own). Both sides commute with connecting maps, so they agree in every degree (our own). Take H trivial: its positive-degree cohomology is 0, so \|G\| kills every class (our own).

**Wikipedia:** [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “If the order of G is invertible in a G-module M (for example, if M is a ℚ-vector space), the transfer map can be used to show that Hⁿ(G,M) = 0 for n ⩾ 1.”

**Sources:**

- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Coset sums give relative cohomology

**Remember:** The kernel of the coset sum measures how G differs from H.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For H ≤ G, let D be the kernel of the map ℤ\[G/H\] → ℤ that sums coefficients over left cosets, so 0 → D → ℤ\[G/H\] → ℤ → 0 is exact (our own). Relative cohomology Hⁿ(G, H; M), for n ≥ 1, is Extⁿ⁻¹ over ℤ\[G\] from D to M.

**Problem.** The relative cohomology of a group pair fits into a long exact sequence with the cohomologies of G and H.

**How the definition helps.** Ext applied to the short exact sequence 0 → D → ℤ\[G/H\] → ℤ → 0 gives the long exact sequence at once (our own). Shapiro's lemma identifies Ext from ℤ\[G/H\] with the cohomology of H, and Ext from ℤ is the cohomology of G (our own). No connecting maps need to be built on functions of group elements (our own).

**Paper or page:** [Relative cohomological dimension of a relatively hyperbolic pair](https://arxiv.org/abs/2505.04349v1). It says: “For any group pair (G,H) and any G-module M, there is a long exact sequence in cohomology:”

**Sources:**

- [R. Bieri and B. Eckmann, Relative homology and Poincaré duality for group pairs, 1978](https://doi.org/10.1016/0022-4049(78)90012-9)

### Group cohomology as a derived functor gets long exact sequences for free

**Remember:** Derive the invariants functor to get group cohomology.

*True by definition. Confidence: medium.* MSC 20J06 (Cohomology of groups), 18G10. arXiv math.GR, math.AT. Level 3: graduate.

**Definition.** For a group G and G-module A, the invariants Aᴳ are the elements fixed by every g in G. Define Hⁿ(G,A) as the nth right derived functor of invariants, equivalently Extⁿ over ℤ\[G\] from the trivial module ℤ to A.

**Problem.** Every short exact sequence of G-modules gives a long exact sequence in group cohomology. The cohomology does not depend on the choice of projective resolution.

**How the definition helps.** Invariants form a left exact functor, so its right derived functors give long exact sequences (our own). The resolution comparison theorem gives chain homotopy equivalences between projective resolutions of ℤ. Applying Hom into A therefore gives the same cohomology (our own).

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology), [derived functor in homological algebra](https://ncatlab.org/nlab/show/derived+functor+in+homological+algebra), [delta-functor](https://ncatlab.org/nlab/show/delta-functor), [Ext](https://ncatlab.org/nlab/show/Ext). It says: “powerful tools of homological algebra can be applied and group cohomology of ordinary groups may be computed in terms of of Ext-functors.”

**Sources:**

- [Alexander Grothendieck, Sur quelques points d'algèbre homologique (I), Tôhoku Math. J. 9 (1957) 119–221](https://doi.org/10.2748/tmj/1178244839)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Tate cohomology joins homology and cohomology so reciprocity is one isomorphism

**Remember:** Glue homology below and cohomology above with the norm map.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups), 11S31. arXiv math.GR, math.NT. Level 3: graduate.

**Definition.** For a finite group G, Tate cohomology Ĥⁿ(G, A) joins homology and cohomology into one sequence indexed by all integers n. It is Hⁿ(G, A) for n ≥ 1 and H₋ₙ₋₁(G, A) for n ≤ −2. In degrees −1 and 0 it is the kernel and cokernel of the norm a ↦ ∑ ga from coinvariants to invariants.

**Problem.** Suppose that for every subgroup H, H¹(H, A) = 0 and H²(H, A) is cyclic of order \|H\|, generated by the restriction of one class. Then cup product with that class is an isomorphism from Ĥⁿ(G, ℤ) to Ĥⁿ⁺²(G, A) for every n.

**How the definition helps.** In one sequence over all degrees, cup product with a degree-2 class can be an isomorphism everywhere, including the negative degrees (our own). The Tate–Nakayama theorem gives this isomorphism under the subgroup hypotheses. In degree −2 it pairs the abelianization of G with invariants modulo norms, which is reciprocity in local class field theory (our own).

**Wikipedia:** [Tate cohomology group](https://en.wikipedia.org/wiki/Tate_cohomology_group). It says: “Tate cohomology groups are a slightly modified form of the usual cohomology groups of a finite group that combine homology and cohomology groups into one sequence.”

**Sources:**

- [John Tate, The higher dimensional cohomology groups of class field theory, Annals of Mathematics 56 (1952)](https://doi.org/10.2307/1969801)

### Tate cohomology makes cyclic group cohomology two-periodic in every degree

**Remember:** A cyclic group's two-sided resolution repeats every two steps.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a finite group G, a complete resolution is an exact sequence of projective ℤ\[G\]-modules, infinite in both directions, whose part in degrees ≥ 0 resolves ℤ. Tate cohomology Ĥⁿ(G, A) is the nth cohomology of Hom over ℤ\[G\] from it into A, for every integer n.

**Problem.** For a finite cyclic group G of order k and every G-module A, Ĥᵐ(G, A) ≅ Ĥᵐ⁺²(G, A) for every integer m.

**How the definition helps.** For a cyclic group with generator t, a complete resolution has ℤ\[G\] in every degree. Its maps alternate between multiplication by t − 1 and by the norm 1 + t + ⋯ + tᵏ⁻¹, so it repeats every two degrees (our own). Hom into A then repeats every two degrees too, in every degree (our own).

**Wikipedia:** [Herbrand quotient](https://en.wikipedia.org/wiki/Herbrand_quotient), [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “If instead we use the Tate cohomology groups then the periodicity extends down to n=0.”

**Sources:**

- [John Tate, The higher dimensional cohomology groups of class field theory, Annals of Mathematics 56 (1952) 294–297](https://doi.org/10.2307/1969801)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Tate cohomology vanishes on induced modules in every degree, including degree zero

**Remember:** Divide fixed points by norms, and induced modules become invisible.

*Rules out counterexamples.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For finite G, Tate cohomology Ĥⁿ is ordinary Hⁿ for n ≥ 1 and homology H₋ₙ₋₁ for n ≤ −2. In degrees −1 and 0 it is the kernel and cokernel of the norm a ↦ ∑ ga from coinvariants to invariants, so Ĥ⁰ is invariants modulo norms.

**Problem.** Every induced module ℤ\[G\] ⊗ B, for an abelian group B, has Ĥⁿ(G, ℤ\[G\] ⊗ B) = 0 for all integers n. So an embedding of A into an induced module with quotient C gives Ĥⁿ⁺¹(G, A) ≅ Ĥⁿ(G, C) in every degree.

**How the definition helps.** For ℤ\[G\] ⊗ B the norm is an isomorphism from coinvariants to invariants, so Ĥ⁻¹ and Ĥ⁰ vanish, while ordinary H⁰ would be B (our own). Shapiro's lemma for the trivial subgroup gives vanishing in the other degrees. The long exact Tate sequence for the embedding then gives the stated shifts (our own).

**Wikipedia:** [Tate cohomology group](https://en.wikipedia.org/wiki/Tate_cohomology_group). It says: “If A is an induced G module (meaning, induced from a module for the trivial group) then all Tate cohomology groups of A vanish.”

**Sources:**

- [John Tate, The higher dimensional cohomology groups of class field theory, Annals of Mathematics 56 (1952) 294–297](https://doi.org/10.2307/1969801)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### The Herbrand quotient is multiplicative and equals one on finite modules

**Remember:** Even Tate group's order over odd Tate group's order.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups), 11R37. arXiv math.NT, math.GR. Level 3: graduate.

**Definition.** Let G be a finite cyclic group and A a G-module with Ĥ⁰(G, A) and Ĥ¹(G, A) finite. The Herbrand quotient h(A) is the order of Ĥ⁰(G, A) divided by the order of Ĥ¹(G, A). Tate cohomology of a cyclic group has period 2, so these two groups are all of it.

**Problem.** For an exact sequence 0 → A → B → C → 0 of G-modules, if two Herbrand quotients are defined, so is the third, and h(B) = h(A)h(C). If A is finite, then h(A) = 1, so a submodule of finite index has the same quotient.

**How the definition helps.** Period 2 folds the long exact Tate sequence into an exact hexagon of six finite groups (our own). In an exact cycle of finite groups the alternating product of orders is 1, and here that product is h(A)h(C)/h(B) (our own). For finite A, the kernel and image of 1 − t, and of the norm, have orders that balance, so h(A) = 1 (our own).

**Wikipedia:** [Herbrand quotient](https://en.wikipedia.org/wiki/Herbrand_quotient). It says: “The Herbrand quotient is multiplicative on short exact sequences.”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)

### Two-stage invariants give spectral sequences

**Remember:** Take fixed elements first under the kernel and then under the quotient.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** Group cohomology Hⁿ(G, M) is the nth right derived functor of invariants M ↦ Mᴳ, the elements fixed by all of G. For N normal in G, taking G-invariants is the same as taking N-invariants and then G/N-invariants (our own).

**Problem.** For N normal in G, a spectral sequence computes group cohomology in stages, starting with Hᵖ(G/N, Hᑫ(N, M)) on its second page. The final terms of total degree n describe successive quotients of a chain of subgroups in Hⁿ(G, M).

**How the definition helps.** The Grothendieck spectral sequence of this composite of functors gives the stated second page and filtration (our own). It applies because taking N-invariants sends injective modules to injective ones, since its left adjoint, inflation, is exact.

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology). It says: “This decomposition gives rise to a Grothendieck spectral sequence for the group cohomology”

**Sources:** none listed. No primary source with a working link was found.

### Virtual dimension handles torsion

**Remember:** Pass to a torsion-free subgroup before measuring dimension.

*Rules out counterexamples.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** Suppose G has a torsion-free subgroup H of finite index. Its virtual cohomological dimension is the integral cohomological dimension of H, the supremum of the degrees in which H has nonzero cohomology with some module. Passing to H discards the nontrivial finite subgroups, whose cohomology never stops (our own).

**Problem.** The group SL₂(ℤ) has virtual cohomological dimension one but infinite integral cohomological dimension.

**How the definition helps.** SL₂(ℤ) has a nontrivial free subgroup of finite index, so its virtual dimension is one (our own). The subgroup generated by −I has order two and nonzero integral cohomology in every positive even degree. Since a subgroup's dimension cannot exceed the group's, SL₂(ℤ) has infinite integral dimension (our own).

**nLab:** [virtual cohomological dimension](https://ncatlab.org/nlab/show/virtual+cohomological+dimension). It says: “all such subgroups have the same cohomological dimension; this common dimension is called the virtual cohomological dimension of G”

**Sources:**

- [A. Borel and J.-P. Serre, Corners and arithmetic groups, 1973](https://doi.org/10.1007/bf02566134)

### Defining free groupoids by a universal property makes them preserve pushouts

**Remember:** Free constructions are left adjoints, so they respect gluing.

*True by definition.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18A30. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** The free groupoid on a directed graph comes with a map from the graph, and every map from the graph into a groupoid extends uniquely to a functor from it. So it is left adjoint to the functor that sends a groupoid to its underlying graph.

**Problem.** The free groupoid on a pushout of directed graphs is the pushout of the free groupoids. A pushout glues two objects along a common part.

**How the definition helps.** Left adjoints preserve all colimits, so the free groupoid preserves pushouts. With the concrete construction by reduced words in the edges and their formal inverses, one would have to describe the glued groupoid directly (our own). The real work is in proving that reduced words satisfy the universal property (our own).

**nLab:** [free groupoid](https://ncatlab.org/nlab/show/free+groupoid). It says: “This construction is the left adjoint free construction to the forgetful functor that sends a groupoid to its underlying directed graph.”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence, not isomorphism, makes every groupoid a disjoint union of groups

**Remember:** One object per component, with all its symmetries, is enough.

*Makes the theorem clean to state or prove.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.CT, math.GR. Level 3: graduate.

**Definition.** Call two groupoids, categories in which every arrow is invertible, the same when they are equivalent, that is, joined by a functor with an inverse up to natural isomorphism. An equivalence keeps only the components and the symmetry group of one object in each (our own).

**Problem.** With the axiom of choice, every groupoid is equivalent to a disjoint union of one-object groupoids, one per component, each the symmetry group of an object there. This fails for isomorphism, because a component can have many objects.

**How the definition helps.** Pick one object in each component; the full subgroupoid on these objects is a disjoint union of their automorphism groups. Its inclusion is fully faithful and essentially surjective, hence an equivalence by the criterion that uses choice (our own).

**nLab:** [groupoid](https://ncatlab.org/nlab/show/groupoid). It says: “every groupoid is equivalent to a disjoint union of group deloopings”

**Sources:** none listed. No primary source with a working link was found.

### Representations as functors are invariant under equivalence of groupoids

**Remember:** A representation is a functor, so equivalences carry it across.

*True by definition.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** A linear representation of a groupoid is a functor to vector spaces, giving a vector space for each object and a linear isomorphism for each arrow. Being a functor, it can be pulled back along any functor between groupoids.

**Problem.** Equivalent groupoids have equivalent categories of linear representations. So a connected groupoid has the same representations as the symmetry group of any one of its objects.

**How the definition helps.** Precomposition with an equivalence and with its inverse up to isomorphism gives mutually inverse functors on representation categories, up to isomorphism (our own). For a connected groupoid, the one-object full subgroupoid on any object is equivalent to the whole, and it is that object's automorphism group (our own).

**nLab:** [groupoid representation](https://ncatlab.org/nlab/show/groupoid+representation), [groupoid](https://ncatlab.org/nlab/show/groupoid). It says: “A linear representation of 𝒢 is a groupoid homomorphism (functor)”

**Sources:** none listed. No primary source with a working link was found.

### The action groupoid has unique arrow lifts, which characterize group actions

**Remember:** Each label and source fix exactly one arrow.

*True by definition. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** For a left action of G on S, the action groupoid has the points x of S as objects and one arrow (g,x) from x to gx for each g ∈ G. Arrows (g,x) and (h,gx) compose to (hg,x), so the label and the source fix the arrow.

**Problem.** The projection from the action groupoid to the one-object groupoid of G has unique lifting: for each object x and each g, exactly one arrow starts at x and lies over g. Conversely, every functor to the one-object groupoid of G with unique lifting comes from an action, up to isomorphism.

**How the definition helps.** Unique lifting says exactly that the label g and the source x fix the arrow (g,x). Conversely, define gx as the target of the unique lift of g from x; uniqueness makes the lift of 1 the identity and the lift of hg the composite of successive lifts (our own). So these targets define an action whose action groupoid is the original one (our own).

**nLab:** [action groupoid](https://ncatlab.org/nlab/show/action+groupoid). It says: “Notice also that an action of G on the set S gives rise to a morphism p : S ⋊ G → G which has the property of unique path lifting”

**Sources:** none listed. No primary source with a working link was found.

### The double coset groupoid keeps the stabilizers H ∩ gKg⁻¹

**Remember:** Keep the arrows, and the stabilizers become H ∩ gKg⁻¹.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18N10. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** For subgroups H and K of G, let H × K act on G by (h,k)·g = hgk⁻¹, and take the action groupoid. Unlike the set of double cosets, it keeps an arrow (h,k) from g to hgk⁻¹, so it records which pairs fix g.

**Problem.** The components of this groupoid are the double cosets HgK. The symmetry group of g is isomorphic to H ∩ gKg⁻¹.

**How the definition helps.** Components are the orbits of H × K, namely the double cosets HgK (our own). An arrow (h,k) fixes g exactly when k = g⁻¹hg, so h ↦ (h, g⁻¹hg) identifies H ∩ gKg⁻¹ with the symmetry group of g (our own).

**nLab:** [double coset](https://ncatlab.org/nlab/show/double+coset), [2-pullback](https://ncatlab.org/nlab/show/2-pullback). It says: “can be defined as the homotopy pullback of maps of delooped groups”

**Sources:** none listed. No primary source with a working link was found.

### The loop groupoid of a group shows centralizers as symmetry groups

**Remember:** An arrow conjugates, and a loop commutes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 20E45. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** The loop groupoid of G has the elements g of G as objects and one arrow labeled h from g to its conjugate h⁻¹gh for each h ∈ G. Labels h then k compose to hk, and an arrow is a loop at g exactly when h⁻¹gh = g.

**Problem.** The components of the loop groupoid are the conjugacy classes of G. The symmetry group of an object g is its centralizer, the set of elements that commute with g.

**How the definition helps.** Two objects share a component exactly when they are conjugate. An arrow labeled h is a loop at g exactly when h commutes with g (our own). Composition reverses the order of labels, so inversion turns the loops at g into the centralizer as a group (our own).

**nLab:** [loop groupoid](https://ncatlab.org/nlab/show/loop+groupoid). It says: “This is the groupoid whose objects are the elements of G, and whose morphisms are of the form”

**Sources:** none listed. No primary source with a working link was found.

### The universal property makes group completion preserve direct sums

**Remember:** Maps out of a sum are pairs, before and after completing.

*True by definition.* MSC 20M14 (Commutative semigroups), 18A40. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The group completion of a commutative monoid M is an abelian group K(M) with a monoid map i from M, through which every monoid map from M to an abelian group factors by a unique group homomorphism.

**Problem.** The group completion of M ⊕ N is naturally isomorphic to K(M) ⊕ K(N).

**How the definition helps.** K(M) ⊕ K(N) has the universal property of the completion of M ⊕ N, so the two are naturally isomorphic (our own). A monoid map from M ⊕ N to an abelian group is one map from each summand, and each extends uniquely to its completion (our own).

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “The forgetful functor U: Ab → CMon from the category Ab to the category CMon has a left adjoint F (the corresponding free functor), the group completion functor”

**Wikipedia:** [Grothendieck group](https://en.wikipedia.org/wiki/Grothendieck_group). It says: “one thus obtains a functor from the category of commutative monoids to the category of abelian groups which sends the commutative monoid M to its Grothendieck group K. This functor is left adjoint to the forgetful functor”

**Sources:** none listed. No primary source with a working link was found.

### Naming the inverse operation makes inverse semigroups a variety

**Remember:** Name the inverse as an operation, and the axioms become equations.

*True by definition. Confidence: medium.* MSC 20M18 (Inverse semigroups), 08B20. arXiv math.GR. Level 3: graduate.

**Definition.** Treat inversion x ↦ x⁻¹ as a named unary operation beside the associative product, and impose only equations: xx⁻¹x = x, (x⁻¹)⁻¹ = x, (xy)⁻¹ = y⁻¹x⁻¹ and xx⁻¹yy⁻¹ = yy⁻¹xx⁻¹. These give exactly the semigroups in which each element has a unique inverse.

**Problem.** Inverse semigroups, with inverse as a specified operation, form a variety, a class defined by equations. So free inverse semigroups exist on every nonempty set of generators.

**How the definition helps.** A class defined by equations is closed under quotients, subalgebras and products, so the general free algebra theorem gives free objects (our own). Subalgebras must now be closed under inverse as well as product. The real work is to show that these equations give exactly the semigroups with unique inverses.

**Wikipedia:** [Inverse semigroup](https://en.wikipedia.org/wiki/Inverse_semigroup). It says: “A presentation of the free inverse semigroup on a set X may be obtained by considering the free semigroup with involution, where involution is the taking of the inverse, and then taking the quotient by the Vagner congruence”

**Sources:** none listed. No primary source with a working link was found.

### Monoid actions as functors form a presheaf topos

**Remember:** Actions are functors on one-object categories, so the presheaf theorem applies.

*True by definition.* MSC 20M30 (Representation of semigroups; actions of semigroups on sets), 18F10. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** View a monoid M as a one-object category with multiplication as composition. A left M-action is a functor from this category to sets, and a map of actions is a natural transformation.

**Problem.** The category of left actions of any monoid M on sets is a Grothendieck topos. This means it is equivalent to a category of sheaves on a small category with a notion of covering.

**How the definition helps.** A functor from the one-object category M to sets is a presheaf on its opposite, so M-actions with their maps form a presheaf category (our own). Presheaves on any small category form a Grothendieck topos (our own).

**nLab:** [action](https://ncatlab.org/nlab/show/action), [category](https://ncatlab.org/nlab/show/category). It says: “The category of actions of M in C is then defined to be the functor category C<sup>(𝐁M)</sup>. When C is Set this is called MSet.”

**Wikipedia:** [Monoid](https://en.wikipedia.org/wiki/Monoid). It says: “A monoid is, essentially, the same thing as a category with a single object.”

**Sources:** none listed. No primary source with a working link was found.

### The syntactic congruence makes its monoid divide every recognizer

**Remember:** Words agree when no context can tell them apart.

*True by definition.* MSC 20M35 (Semigroups in automata theory, linguistics, etc.), 68Q70. arXiv cs.FL, math.GR. Level 3: graduate.

**Definition.** Two words u, v are syntactically congruent for a language L when no context tells them apart: xuy ∈ L exactly when xvy ∈ L for all words x, y. The syntactic monoid is the free monoid divided by this congruence, the coarsest one that respects membership in L.

**Problem.** The syntactic monoid of L is a quotient of a submonoid of any monoid that recognizes L. A language therefore has a finite recognizing monoid if and only if its syntactic monoid is finite.

**How the definition helps.** If a monoid recognizes L, words with the same image in it also agree in every context, so they are syntactically congruent (our own). So the image of the free monoid, a submonoid, maps onto the syntactic monoid. The syntactic monoid itself recognizes L, which gives the finiteness equivalence (our own).

**Wikipedia:** [Syntactic monoid](https://en.wikipedia.org/wiki/Syntactic_monoid). It says: “It can be shown that it is the smallest monoid that recognizes S; that is, M(S) recognizes S, and for every monoid N recognizing S, M(S) is a quotient of a submonoid of N.”

**Sources:** none listed. No primary source with a working link was found.

### Making division an operation turns quasigroups into an equational theory

**Remember:** Make division an operation, and the axioms become equations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20N05 (Loops, quasigroups), 08B05. arXiv math.RA. Level 3: graduate.

**Definition.** A quasigroup has three binary operations, multiplication, right division / and left division ∖, tied by the equations (x/y)y = x, (xy)/y = x, x(x∖y) = y and x∖(xy) = y. They say that division undoes multiplication on each side.

**Problem.** With the two divisions as operations, quasigroups form a variety, defined by equations alone, and they match quasigroups in which ax = b and ya = b have unique solutions. So quasigroups can be defined inside any category with finite products.

**How the definition helps.** The equations make left and right multiplication by any a invertible, with the divisions as inverses, so ax = b and ya = b have unique solutions (our own). Conversely, unique solutions determine the divisions, and equations in finite products make sense in any category with finite products (our own).

**nLab:** [quasigroup](https://ncatlab.org/nlab/show/quasigroup). It says: “Thus quasigroups are described by a Lawvere theory and can therefore be internalized into any cartesian monoidal category.”

**Sources:**

- [R. H. Bruck, A Survey of Binary Systems, Springer (1958)](https://doi.org/10.1007/978-3-662-35338-7)

### Cores and weights of multipartitions classify blocks of Ariki–Koike algebras

**Remember:** Merge the multipartition into one partition, then strip e-hooks.

*Makes the theorem clean to state or prove.* MSC 20C08 (Hecke algebras and their representations), 05E10. arXiv math.RT, math.CO. Level 4: research.

**Definition.** Fix e ≥ 2 and a multicharge, and turn the charged multipartition into a single partition by the Uglov map. Strip rim hooks of e boxes from that partition until none can be removed: the e-core is what is left, and the e-weight is the number of hooks removed.

**Problem.** For an Ariki–Koike algebra whose quantum parameter has finite order e ≥ 2, two multipartitions label modules in the same block exactly when their e-cores and e-weights agree. A block is an indecomposable two-sided summand of the algebra.

**How the definition helps.** Because the Uglov map turns the charged data into one partition, ordinary rim-hook removal gives both invariants (our own). The paper's block classification then shows that these invariants agree exactly on blocks.

**Paper or page:** [Cores and weights of multipartitions and blocks of Ariki-Koike algebras](https://arxiv.org/abs/2408.10626v3). It says: “We do not place any restriction on the multicharge for these definitions. We show how these definitions lead to the definition of the e-core and the e-weight of a block”

**Sources:**

- [Yanbo Li, Kai Meng Tan, Cores and weights of multipartitions and blocks of Ariki-Koike algebras, arXiv:2408.10626 (2025)](https://arxiv.org/abs/2408.10626v3)

### Equal traces of powers detect representations agreeing on a finite-index subgroup

**Remember:** Take powers before taking traces.

*Makes the theorem clean to state or prove.* MSC 20C15 (Ordinary representations and characters), 11F80. arXiv math.NT, math.RT. Level 4: research.

**Definition.** The m-power character of a representation ρ is g ↦ tr(ρ(gᵐ)), which reads ρ only on m-th powers. Two representations are potentially equivalent if their restrictions to some finite-index subgroup are isomorphic.

**Problem.** Let ρ₁ and ρ₂ be semisimple representations, direct sums of irreducibles, of any group in GLₙ(F) with F of characteristic zero. They are potentially equivalent exactly when their m-power characters agree for some positive integer m.

**How the definition helps.** If they agree on a finite-index subgroup, they agree on its normal core N, and with m the index of N every gᵐ lies in N, so the m-power characters agree (our own). The paper's potential-equivalence theorem gives the converse.

**Paper or page:** [Finiteness theorems for potentially equivalent Galois representations: extension of Faltings' finiteness criteria](https://arxiv.org/abs/2012.15598v2). It says: “potential equivalence of a representation ρ is determined by an equality of an m-power character g ↦ Tr(ρ(gᵐ)) for some natural number m”

**Sources:**

- [Plawan Das, C. S. Rajan, Finiteness theorems for potentially equivalent Galois representations: extension of Faltings' finiteness criteria, arXiv:2012.15598v2 (2021)](https://arxiv.org/abs/2012.15598v2)

### Killing projectives turns the spectrum into Proj of group cohomology

**Remember:** Projectives sit at the irrelevant point, so killing them leaves Proj.

*Makes the theorem clean to state or prove.* MSC 20C20 (Modular representations and characters), 20J06, 18G80. arXiv math.RT, math.CT. Level 4: research.

**Definition.** For a finite group G and field k, the stable module category stmod kG has finitely generated kG-modules as objects, with maps taken modulo those that factor through a projective module. So projective modules become zero.

**Problem.** Let G be a finite group and k a field of characteristic p. Then Spc(Dᵇ(mod kG)) is homeomorphic to Specʰ H\*(G,k), and Spc(stmod kG) is homeomorphic to Proj H\*(G,k).

**How the definition helps.** Killing projectives removes exactly the support at the irrelevant ideal of positive degree, so Specʰ H\*(G,k) shrinks to Proj H\*(G,k). Rickard's theorem identifies stmod kG with the bounded derived category modulo perfect complexes, which have support at that point (our own). The derived spectrum comparison gives Specʰ H\*(G,k), and tensor triangular localization removes the point (our own).

**Paper or page:** [The Balmer spectrum of certain Deligne-Mumford stacks](https://arxiv.org/abs/2101.01446), [Lattices over finite group schemes and stratification](https://arxiv.org/abs/2307.16271). It says: “The category Perf(AG) of perfect complexes of AG-modules is a thick tensor ideal in Dᵇ(AG)<sub>A</sub>-perf.”

**Sources:**

- [Dave Benson, Jon F. Carlson and Jeremy Rickard, Thick subcategories of the stable module category, Fund. Math. 153 (1997) 59–80](https://doi.org/10.4064/fm-153-1-59-80)
- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)

### Strong completeness forces continuity

**Remember:** Strong completeness makes every finite-index subgroup open.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 4: research.

**Definition.** A profinite group, an inverse limit of finite groups, is strongly complete if every subgroup of finite index is open.

**Problem.** Every abstract homomorphism from a strongly complete profinite group to a profinite group is continuous. This covers every topologically finitely generated source, one with a finitely generated dense subgroup.

**How the definition helps.** The preimage of an open normal subgroup of the target has finite index, so it is open by strong completeness (our own). These subgroups form a neighbourhood basis of the identity, which gives continuity (our own). The Nikolov–Segal theorem makes every topologically finitely generated profinite group strongly complete.

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “A finite index subgroup of a profinite group is not necessarily open.”

**Paper or page:** [Groups of finite type: classification and structural properties](https://arxiv.org/abs/2509.03927v1). It says: “Every topologically finitely generated profinite group is strongly complete.”

**Sources:**

- [N. Nikolov and D. Segal, On finitely generated profinite groups, I, 2007](https://doi.org/10.4007/annals.2007.165.171)

### Relators without powers give local indicability

**Remember:** Forbid relators of the form uᵏ, and subgroups map onto ℤ.

*Rules out counterexamples.* MSC 20F05 (Generators, relations, and presentations of groups). arXiv math.GR. Level 4: research.

**Definition.** A one-relator group is given by free generators and one word set equal to the identity. The relator is a proper power if it equals, in the free group, a power uᵏ with k ≥ 2, which gives the element u finite order (our own).

**Problem.** A group with a single nontrivial relator that is not a proper power is locally indicable. This means every nontrivial finitely generated subgroup maps onto ℤ.

**How the definition helps.** The Brodskii–Howie local indicability theorem applies to a nontrivial one-relator word that is not a proper power. The excluded presentation ⟨a \| a²⟩ gives a nontrivial finite group, which cannot map onto ℤ (our own). Torsion-freeness alone does not prove local indicability (our own).

**Paper or page:** [The theory of one-relator groups: history and recent progress](https://arxiv.org/abs/2501.18306v1). It says: “If X = (Λ, λ) is a one-relator complex with deg(λ) = 1, then π₁(X) is locally indicable.”

**Sources:**

- [James Howie, On locally indicable groups (1982).](https://doi.org/10.1007/bf01214717)

### Polyhedral descriptions of rational sets give rational growth in virtually abelian groups

**Remember:** Turn regular words into lattice points before counting by word length.

*Makes the theorem clean to state or prove.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20F69, 68Q45. arXiv math.GR, cs.FL. Level 4: research.

**Definition.** In a finitely generated virtually abelian group, fix a free abelian subgroup of finite index with a basis, and choose coset representatives. A subset is coset-wise polyhedral if, in each coset, its lattice coordinates form a finite union of sets cut out by finitely many integer-linear equations, inequalities and congruences.

**Problem.** In a finitely generated virtually abelian group, the rational subsets are exactly the coset-wise polyhedral ones. For every finite generating set, each has a rational growth series, the power series counting its elements by word length.

**How the definition helps.** Lattice coordinates count each element once, even when several accepted words represent it, so counting becomes counting lattice points in polyhedral sets (our own). The paper's equivalence theorem gives the polyhedral description, and its rational growth theorem controls word length in these coordinates (our own).

**Paper or page:** [Rational sets in virtually abelian groups: languages and growth](https://arxiv.org/abs/2205.05621v2), [Rational sets in virtually abelian groups: languages and growth](https://arxiv.org/abs/2205.05621v2). It says: “We prove equivalences between the structures used in the literature, and establish the rationality of important classes of sets in G”

**Sources:**

- [Laura Ciobanu, Alex Evetts, Rational sets in virtually abelian groups: languages and growth, arXiv:2205.05621v2 (2023)](https://arxiv.org/abs/2205.05621v2)

### Measuring nilpotence against the whole brace makes nilpotent ideals closed under sums

**Remember:** Measure centrality against the whole brace, and sums stay nilpotent.

*Rules out counterexamples.* MSC 20F18 (Nilpotent groups), 16T25. arXiv math.GR, math.QA. Level 4: research.

**Definition.** An ideal I of a brace B is B-centrally nilpotent if some finite chain of ideals of B from 0 to I has each factor K/J central in the whole quotient B/J, not only in I/J. Central means each element a of K/J satisfies a∘b = a+b = b+a = b∘a for every b in B/J.

**Problem.** Let I and J be B-centrally nilpotent ideals of a brace B, of classes n and m. Then I + J is B-centrally nilpotent, of class at most n + m.

**How the definition helps.** Centrality against all of B also covers the elements of the other ideal, which lets two such chains be combined (our own). The paper's sum theorem gives the class bound n + m. Example B shows why testing each ideal only inside itself is not enough.

**Paper or page:** [Central nilpotency of left skew braces and solutions of the Yang-Baxter equation](https://arxiv.org/abs/2310.07474v2), [Central nilpotency of left skew braces and solutions of the Yang-Baxter equation](https://arxiv.org/abs/2310.07474v2). It says: “the product of centrally nilpotent ideals need not be centrally nilpotent (Example B), a rather peculiar fact. To cope with these examples, we introduce a special type of nilpotent ideal”

**Sources:**

- [Adolfo Ballester-Bolinches, Ramón Esteban-Romero, Maria Ferrara, Vicent Pérez-Calabuig, Marco Trombetti, Central nilpotency of left skew braces and solutions of the Yang-Baxter equation, Pacific J. Math. 335 (2025) 1-32](https://arxiv.org/abs/2310.07474v2)

### Skew bracoids extend the skew brace correspondence to non-Galois separable extensions

**Remember:** Let the action have stabilizers, so the group can act on cosets.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F29 (Representations of groups as automorphism groups of algebraic systems), 16T05, 12F10. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A skew bracoid is a pair of groups G and N with a transitive action of G on N such that g·(xy) = (g·x)(g·1)⁻¹(g·y) for all g ∈ G and x, y ∈ N. Unlike for a skew brace, the action may have nontrivial stabilizers, so N can be a coset space G/H (our own).

**Problem.** Let G be the Galois group of the Galois closure of a finite separable extension L/K, and H the subgroup fixing L. Hopf–Galois structures on L/K correspond to group structures on G/H with identity H that make the natural G-action a skew bracoid.

**How the definition helps.** The Galois group acts on G/H with stabilizer H, which a skew bracoid allows (our own). Greither–Pareigis identifies Hopf–Galois structures with regular permutation groups on G/H normalized by G. Taking H as the identity turns each such group into a compatible group structure on G/H (our own).

**Paper or page:** [Skew bracoids](https://arxiv.org/abs/2305.15848v1). It says: “finite skew bracoids correspond with Hopf-Galois structures on finite separable extensions of fields, generalizing the existing connection between finite skew braces and Hopf-Galois structures on finite Galois extensions.”

**Sources:**

- [Isabel Martin-Lyons, Paul J. Truman, Skew bracoids, arXiv:2305.15848v1 (2023)](https://arxiv.org/abs/2305.15848v1)

### Relative hyperbolicity covers the cusped hyperbolic manifolds that hyperbolic groups miss

**Remember:** Allow the cusp groups, and ask hyperbolicity only of the rest.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F67 (Hyperbolic groups and nonpositively curved groups). arXiv math.GR, math.MG. Level 4: research.

**Definition.** A group is hyperbolic relative to a finite family of subgroups if it acts on a connected hyperbolic graph with finitely many edge orbits and finite edge stabilizers. The graph must be fine, with each edge in finitely many simple circuits of each length. Its infinite vertex stabilizers are exactly the conjugates of the listed infinite subgroups, which escape any hyperbolicity test (our own).

**Problem.** The fundamental group of a complete noncompact finite-volume hyperbolic 3-manifold is not hyperbolic, since each cusp gives a ℤ² subgroup, but it is hyperbolic relative to its cusp subgroups. Farb's theorem then gives a solvable word problem whenever the cusp subgroups have one.

**How the definition helps.** Peripheral subgroups only stabilize vertices, so they may contain ℤ² (our own). The relative hyperbolicity theorem for finite-volume hyperbolic manifolds identifies the cusp subgroups as the peripheral ones, and Farb's theorem then applies (our own).

**Wikipedia:** [Relatively hyperbolic group](https://en.wikipedia.org/wiki/Relatively_hyperbolic_group). It says: “Illustrative examples of relatively hyperbolic groups are provided by the fundamental groups of complete noncompact hyperbolic manifolds of finite volume.”

**Sources:**

- [B. Farb, Relatively hyperbolic groups, Geometric and Functional Analysis 8 (1998) 810–840](https://doi.org/10.1007/s000390050075)
- [B. H. Bowditch, Relatively hyperbolic groups, International Journal of Algebra and Computation 22 (2012) 1250016](https://doi.org/10.1142/S0218196712500166)

### Cohomological generator and relation counts make Golod–Shafarevich a statement about the group

**Remember:** Count generators and relators in a minimal pro-p presentation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20J05 (Homological methods in group theory), 20D15, 20F05. arXiv math.GR, math.NT. Level 4: research.

**Definition.** For a finite p-group G, the generator rank d is the fewest generators, and the pro-p relation rank r is the fewest relators in a pro-p presentation on d generators. Both are cohomology dimensions: d = dim H¹(G,𝔽ₚ) and r = dim H²(G,𝔽ₚ).

**Problem.** For a nontrivial finite p-group G, its generator rank d and pro-p relation rank r satisfy r &gt; d²/4. Thus every presentation of G on d generators has more than d²/4 relators.

**How the definition helps.** With these counts, which depend only on G, the Golod–Shafarevich theorem is a statement about G itself (our own). It gives r &gt; d²/4. Any abstract presentation on d generators also presents G as a pro-p group, so it has at least r relators (our own).

**Wikipedia:** [Golod–Shafarevich theorem](https://en.wikipedia.org/wiki/Golod%E2%80%93Shafarevich_theorem). It says: “If G is a non-trivial finite p-group, then r &gt; d²/4, where d = dim H¹(G,ℤ/pℤ) and r = dim H²(G,ℤ/pℤ) (the mod p cohomology groups of G).”

**Sources:**

- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Invariant means make bounded cocycles of amenable groups into dual modules coboundaries

**Remember:** Average a bounded cocycle, and you get its primitive.

*True by definition.* MSC 20J06 (Cohomology of groups), 43A07. arXiv math.GR, math.FA. Level 4: research.

**Definition.** A discrete group Γ is amenable if it has an invariant mean: a positive linear functional m on bounded real functions with m(1) = 1 and m(h ↦ u(gh)) = m(u) for every bounded u and g ∈ Γ.

**Problem.** Suppose an amenable discrete group Γ acts by linear isometries on a Banach space E, with the induced dual action on E\*. Every bounded 1-cocycle f from Γ to E\* satisfies f(g) = g·φ − φ for some φ ∈ E\* and every g ∈ Γ.

**How the definition helps.** Average the bounded functions h ↦ f(h)(x) with the mean to get a bounded linear functional ψ on E, extending the mean complex-linearly if needed (our own). Averaging the cocycle identity f(gh) = f(g) + g·f(h) over h and using invariance gives ψ = f(g) + g·ψ. So φ = −ψ satisfies f(g) = g·φ − φ (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “If Γ acts by isometries on a (separable) Banach space E and f in ℓ∞(Γ, E\*) is a bounded 1-cocycle, i.e. f(gh) = f(g) + g·f(h), then f is a 1-coboundary”

**Sources:**

- [Barry Edward Johnson, Cohomology in Banach algebras, Memoirs of the American Mathematical Society 127 (1972)](https://doi.org/10.1090/memo/0127)

### Mislin's completion vanishes on every object of finite projective dimension

**Remember:** Zero on projectives means zero on anything a finite resolution reaches.

*True by definition.* MSC 20J06 (Cohomology of groups), 18G15. arXiv math.GR, math.KT. Level 4: research.

**Definition.** A cohomological functor is a family of functors Tⁿ, for all integers n, that turns short exact sequences into long exact sequences. Its Mislin completion T̂ is the universal such functor under T that vanishes on projective objects.

**Problem.** If an object M has finite projective dimension, then T̂ⁿ(M) = 0 for every integer n. So complete cohomology, the Mislin completion of group cohomology, vanishes for every group of finite cohomological dimension.

**How the definition helps.** Vanishing on projectives turns the long exact sequence for 0 → K → P → M → 0 into isomorphisms T̂ⁿ(M) ≅ T̂ⁿ⁺¹(K). Iterating along a finite projective resolution ends at a projective, where every degree vanishes (our own). For groups of finite cohomological dimension, the trivial module has such a resolution, giving vanishing of complete group cohomology (our own).

**Paper or page:** [On a Completion of Cohomological Functors Generalising Tate Cohomology II, Lemma 1.1](https://arxiv.org/abs/2405.03634v2). It says: “If M ∈ obj(𝒞) has finite projective dimension, then T̂ⁿ(M) = 0 for every n ∈ ℤ.”

**Sources:**

- [Guido Mislin, Tate cohomology for arbitrary groups via satellites, Topology and its Applications 56 (1994) 293–300](https://doi.org/10.1016/0166-8641(94)90081-7)
- [Max Gheorghiu, On a Completion of Cohomological Functors Generalising Tate Cohomology II, arXiv:2405.03634 (2024)](https://arxiv.org/abs/2405.03634)

### Profinite completion's universal property gives every group separable first cohomology

**Remember:** Maps to finite groups extend, so derivations extend.

*True by definition.* MSC 20J06 (Cohomology of groups), 20E18. arXiv math.GR. Level 4: research.

**Definition.** The profinite completion Γ̂ is the inverse limit of the finite quotients of Γ, with its canonical map ι from Γ. Every homomorphism from Γ to a finite discrete group factors uniquely through ι by a continuous homomorphism.

**Problem.** Every group has separable cohomology in degree 1. That is, for every finite Γ̂-module M, the map from continuous H¹(Γ̂, M) to H¹(Γ, M) is an isomorphism.

**How the definition helps.** A derivation f into a finite module M is a homomorphism g ↦ (f(g), q(g)) into the finite group M ⋊ Q, where q is the action map onto its finite image Q (our own). It extends uniquely and continuously to Γ̂, and density keeps the second coordinate equal to q, so f extends. Principal derivations match on both sides, giving the isomorphism on H¹ (our own).

**Paper or page:** [Cohomological Separability of Baumslag--Solitar groups and Their Generalisations, Lemma 2.4](https://arxiv.org/abs/2406.03960v1), [Cohomological Separability of Baumslag--Solitar groups and Their Generalisations, Lemma 3.2](https://arxiv.org/abs/2406.03960v1). It says: “All groups have separable cohomology in dimension 1.”

**Sources:**

- [William D. Cohen and Julian Wykowski, Cohomological Separability of Baumslag–Solitar groups and Their Generalisations, arXiv:2406.03960 (2024)](https://arxiv.org/abs/2406.03960)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### The twisting identity makes the twisted product of monoids associative

**Remember:** Charge the same total for both ways of multiplying three elements.

*True by definition.* MSC 20M10 (General structure theory for semigroups), 20M20. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A twisting on a monoid S is a map Φ: S × S → ℕ with Φ(a,b) + Φ(ab,c) = Φ(a,bc) + Φ(b,c) for all a, b, c, so both bracketings of abc collect the same total. For an additive commutative monoid M and q ∈ M, the twisted product on M × S is (i,a)(j,b) = (i + j + Φ(a,b)q, ab).

**Problem.** The twisted product is associative. Such products appear for diagram monoids, where Φ counts the floating components made by joining diagrams.

**How the definition helps.** Both bracketings give first coordinate i + j + k plus q times Φ(a,b) + Φ(ab,c) or Φ(a,bc) + Φ(b,c), and the twisting identity makes these equal (our own). Associativity of S matches the second coordinates (our own).

**Paper or page:** [Twisted products of monoids](https://arxiv.org/abs/2507.04486v2). It says: “A twisting of a monoid S is a map Φ:S×S→ℕ satisfying the identity Φ(a,b) + Φ(ab,c) = Φ(a,bc) + Φ(b,c).”

**Sources:**

- [James East, Robert D. Gray, P. A. Azeef Muhammed, Nik Ruškuc, Twisted products of monoids, arXiv:2507.04486v2 (2025)](https://arxiv.org/abs/2507.04486v2)

### ACCP on generators characterizes atomic monoids

**Remember:** Check the chain condition only on generators, not every element.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20M13 (Arithmetic theory of semigroups), 13A05. arXiv math.AC, math.RA. Level 4: research.

**Definition.** An element a of a monoid M satisfies the ascending chain condition on principal ideals (ACCP) if every ascending chain of principal two-sided ideals starting at MaM stabilizes. A monoid is atomic if every nonunit is a finite product of atoms, nonunits that are not products of two nonunits.

**Problem.** An acyclic monoid is atomic exactly when it has a generating set each of whose elements satisfies the ACCP. Acyclic means that x = uxv only when u and v are units.

**How the definition helps.** Asking ACCP only of a generating set is weak enough to hold in every atomic acyclic monoid, since atoms and units generate it and each atom satisfies ACCP (our own reading). The converse is the hard direction, and it rests on the paper's Theorem 2.4 on monoids with a preorder (our own reading).

**Paper or page:** [A characterization of atomicity](https://arxiv.org/abs/2209.05238v2). It says: “An acyclic monoid is atomic if and only if it has a generating set each of whose elements satisfies the ACCP.”

**Sources:**

- [Salvatore Tringali, A characterization of atomicity, arXiv:2209.05238 (2022), Math. Proc. Cambridge Phil. Soc. 175 (2023), No. 2, 459-465](https://arxiv.org/abs/2209.05238v2)
- [Anne Grams, Atomic rings and the ascending chain condition for principal ideals, Math. Proc. Cambridge Phil. Soc. 75 (1974), 321-329](https://doi.org/10.1017/s0305004100048532)

### One purity test for monoid acts detects exactly the right coherent monoids

**Remember:** Test only finitely presented subacts, and coherence appears.

*Makes the theorem clean to state or prove.* MSC 20M30 (Representation of semigroups; actions of semigroups on sets), 20M50. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A monoid S is right coherent if every finitely generated subact of a finitely presented right S-act is finitely presented. A right act A is absolutely pure if every map into A from such a subact extends over its ambient act. It is mfp-pure if this holds for finitely presented subacts of cyclic finitely presented acts.

**Problem.** A monoid S is right coherent exactly when every mfp-pure right S-act is absolutely pure. Absolutely pure acts are always mfp-pure, so the condition says the two classes coincide.

**How the definition helps.** Coherence makes the finitely generated test subacts finitely presented, so the narrower mfp test reaches them (our own). The paper's characterization also handles the restriction to cyclic ambient acts and proves the converse. Testing finitely generated subacts of cyclic finitely presented acts instead gives almost purity, which can match absolute purity without coherence (our own).

**Paper or page:** [Coherency for monoids and purity for their acts](https://arxiv.org/abs/2209.01915v3). It says: “Our second main result is that a monoid S is right coherent if and only if the classes of mfp-pure and absolutely pure S-acts coincide”

**Sources:**

- [Yang Dandan, Victoria Gould, Coherency for monoids and purity for their acts, arXiv:2209.01915v3 (2023)](https://arxiv.org/abs/2209.01915v3)
