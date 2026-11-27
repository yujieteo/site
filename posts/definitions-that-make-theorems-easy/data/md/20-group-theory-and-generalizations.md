### A left identity and left inverses are enough to make a group

**Remember:** Check only one side, but the same side for identity and inverses.

*Makes the theorem clean to state or prove.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A one-sided group axiom system uses a set with an associative binary operation and an element e satisfying ex = x for every x. For each x it requires some y satisfying yx = e.

**Problem.** To show that a structure is a group, it is enough to check associativity, a left identity and left inverses. The left inverses are then two-sided, and so is the identity.

**How the definition helps.** Choose y and z with yx = e and zy = e (our own). Then xy = (zy)(xy) = z(yx)y = z(ey) = zy = e (our own). Hence xe = x(yx) = (xy)x = ex = x (our own).

**Paper or page:** [Equivalence of Axiom Schemata for Groups](https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups), [Left Identity in Semigroup may not be Unique](https://proofwiki.org/wiki/Left_Identity_in_Semigroup_may_not_be_Unique). It says: “there exists at least one element e ∈ G such that e is a left identity; For any element g in a group G, there exists at least one left inverse of g.”

**Sources:**

- [ProofWiki, Equivalence of Axiom Schemata for Groups](https://proofwiki.org/wiki/Equivalence_of_Axiom_Schemata_for_Groups)
- [ProofWiki, Left Identity in Semigroup may not be Unique](https://proofwiki.org/wiki/Left_Identity_in_Semigroup_may_not_be_Unique)

### An infinite cyclic group has no nonzero period

**Remember:** A nonzero period makes the quotient finite.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A cyclic group consists of the integer powers of one element g. Equivalently, it is a quotient of the integers, with two exponents identified when they give the same power.

**Problem.** Every infinite cyclic group is isomorphic to ℤ under addition.

**How the definition helps.** In the quotient description, a repeated power would give a positive period m (our own). Division with remainder would then leave at most m different powers (our own). Thus in an infinite cyclic group the map sending each integer to its power is one-to-one and onto (our own). Adding exponents multiplies their powers, so this map preserves the group operation (our own).

**nLab:** [cyclic group](https://ncatlab.org/nlab/show/cyclic+group). It says: “For n = 0 this subgroup is the trivial group, hence this quotient is just the integers itself”

**Paper or page:** [Infinite Cyclic Group is Isomorphic to Integers](https://proofwiki.org/wiki/Infinite_Cyclic_Group_is_Isomorphic_to_Integers). It says: “Let G be an infinite cyclic group.”

**Sources:** none listed. No primary source with a working link was found.

### Closure under division gives a one-step subgroup test

**Remember:** Keep every right quotient of two members inside the nonempty set.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** Right division in a group sends a pair a, b to ab⁻¹. Closure under right division means that this result stays in the subset whenever a and b belong to it.

**Problem.** A nonempty subset of a group is a subgroup exactly when it is closed under right division.

**How the definition helps.** One division test recovers both usual subgroup tests, closure under products and closure under inverses (our own). Dividing a member by itself gives the identity (our own). Dividing the identity by a member gives its inverse (our own). Dividing a by the inverse of b gives the product ab (our own).

**Paper or page:** [One-Step Subgroup Test using Subset Product](https://proofwiki.org/wiki/One-Step_Subgroup_Test_using_Subset_Product). It says: “HH⁻¹ ⊆ H”

**Sources:** none listed. No primary source with a working link was found.

### Cosets as classes give Lagrange’s theorem by counting

**Remember:** A group splits into equally sized copies of its subgroup.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For a subgroup H, define a left coset as a class of elements that differ by right multiplication by an element of H. The usual description lists the coset as gH, the set of products gh with h in H.

**Problem.** The size of a finite group equals the size of any subgroup times its number of left cosets.

**How the definition helps.** Defining cosets as classes puts every group element in exactly one coset (our own). The work lies in checking that right multiplication by subgroup elements gives an equivalence relation (our own). Multiplication by g pairs each member h of H with exactly one member gh of the coset gH (our own).

**nLab:** [coset](https://ncatlab.org/nlab/show/coset). It says: “the set of equivalence classes of elements of G where two are regarded as equivalent if they differ by right multiplication with an element in H.”

**Paper or page:** [Theorem 5.1. (Lagrange's theorem)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let G be a finite group, and let H be any subgroup. Then \|H\| divides \|G\|.”

**Sources:** none listed. No primary source with a working link was found.

### Cosets count the size of a subgroup product

**Remember:** Count the distinct copies of K rather than all products.

*Makes the theorem clean to state or prove.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The set product HK of two subgroups consists of all products hk with h in H and k in K. For each fixed h, these products form the left coset hK.

**Problem.** For finite subgroups H and K, the size of HK is \|H\| · \|K\| divided by \|H ∩ K\|.

**How the definition helps.** The set product groups all possible outputs into equally large cosets hK (our own). For a and b in H, aK equals bK exactly when b⁻¹a belongs to H ∩ K (our own). Thus H contributes one distinct coset per \|H ∩ K\| elements, and each coset has \|K\| elements (our own).

**Paper or page:** [Order of Subgroup Product](https://proofwiki.org/wiki/Order_of_Subgroup_Product). It says: “\|HK\| = \|H\| \|K\| / \|H ∩ K\|”

**Sources:** none listed. No primary source with a working link was found.

### Counting cosets makes indices multiply down a subgroup chain

**Remember:** Count cosets inside each larger coset, then count the larger cosets.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A left coset gH consists of the products gh with h in the subgroup H. The index \[G:H\] counts distinct left cosets, even when both groups are infinite.

**Problem.** For subgroups H ⊆ K ⊆ G with both indices \[G:K\] and \[K:H\] finite, \[G:H\] = \[G:K\] · \[K:H\].

**How the definition helps.** Counting cosets groups the small cosets according to the larger coset containing them (our own). Multiplication by g pairs the H-cosets in K with the H-cosets in gK (our own). Each of the \[G:K\] larger cosets therefore contains \[K:H\] smaller ones, even when a ratio of group sizes is unavailable (our own).

**nLab:** [index of a subgroup](https://ncatlab.org/nlab/show/index+of+a+subgroup). It says: “\|G : K\| · \|K : H\| = \|G : H\|”

**Sources:** none listed. No primary source with a working link was found.

### Counting powers makes every group of prime order cyclic

**Remember:** Count all distinct integer powers to find the element’s order.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** Define the cyclic subgroup generated by g as the set of all integer powers of g. Define the order of g as the size of this subgroup, rather than by the first return to the identity.

**Problem.** In a group of prime size, every element except the identity generates the whole group.

**How the definition helps.** Defining order by subgroup size makes it a divisor of the group size by Lagrange’s theorem (our own). That theorem does the counting by splitting the group into equally large cosets (our own). A nonidentity element has at least two distinct powers, so its subgroup must have the full prime size (our own).

**Paper or page:** [Prime Group is Cyclic](https://proofwiki.org/wiki/Prime_Group_is_Cyclic). It says: “Let G be a group whose order is p. Then G is cyclic.”

**Sources:** none listed. No primary source with a working link was found.

### Equal outputs identify kernel cosets

**Remember:** Inputs have the same output exactly when they share a kernel coset.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The kernel of a group homomorphism f consists of the elements mapped to the identity. Define classes by putting two inputs together whenever their outputs agree. The usual quotient uses cosets, which are translates of the kernel.

**Problem.** The quotient by the kernel of a group homomorphism is isomorphic to its image.

**How the definition helps.** Labeling each class by its common output gives an immediate bijection with the image. Our own proof multiplies classes by multiplying representatives. The output of a product is the product of the outputs, so this rule is well defined and preserves multiplication. Finally, f(a) = f(b) exactly when a⁻¹b lies in the kernel, so the classes are precisely its cosets.

**Paper or page:** [First Isomorphism Theorem/Groups](https://proofwiki.org/wiki/First_Isomorphism_Theorem/Groups). It says: “Then: Img φ ≅ G₁ / ker φ where ≅ denotes group isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Finite nonempty product closure is enough for a subgroup

**Remember:** On a finite set, multiplication cannot miss a point if it never merges points.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subset of a group is closed under products if it contains ab whenever it contains a and b.

**Problem.** A nonempty finite subset of a group is a subgroup if and only if it is closed under products.

**How the definition helps.** Finiteness forces multiplication by each member to reach every member (our own). Indeed, product closure keeps the outputs inside, and cancellation makes them distinct (our own). For each member h, solving hx = h gives the identity, and then solving hy = 1 gives the inverse of h (our own). The positive integers are closed under addition but lack zero and additive inverses (our own).

**Paper or page:** [Finite Subgroup Test](https://proofwiki.org/wiki/Finite_Subgroup_Test). It says: “Let H be a non-empty finite subset of G.”

**Sources:** none listed. No primary source with a working link was found.

### Power maps make images of cyclic groups cyclic

**Remember:** Follow the power map through the next map.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups), 20K01. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A cyclic group consists of the powers of one element, called a generator. Equivalently, it is the image of a map from the integers that turns addition into multiplication.

**Problem.** The image of a cyclic group under a map preserving multiplication is cyclic. The image of its generator generates the new group.

**How the definition helps.** The image definition lets us compose two maps that preserve the group operations (our own). The composite still starts at the integers, so its image is cyclic (our own). The first map sends 1 to the original generator, and the second sends that generator to the new one (our own).

**nLab:** [cyclic group](https://ncatlab.org/nlab/show/cyclic+group). It says: “A cyclic group is a quotient group of the additive group of integers”

**Paper or page:** [Homomorphic Image of Cyclic Group is Cyclic Group](https://proofwiki.org/wiki/Homomorphic_Image_of_Cyclic_Group_is_Cyclic_Group). It says: “is a cyclic group with generator ϕ(g).”

**Sources:** none listed. No primary source with a working link was found.

### Set products form subgroups when their factors can trade places

**Remember:** Swap the middle sets to gather each subgroup with itself.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For subgroups H and K, the set product HK consists of all products hk with h in H and k in K. The subgroups are permutable when HK = KH.

**Problem.** For subgroups H and K, the set product HK is a subgroup exactly when HK = KH.

**How the definition helps.** Permutability lets us group the factors in HKHK as HHKK, which equals HK (our own). The inverses of the elements of HK form KH, so equality gives closure under inverses too (our own). Conversely, if HK is a subgroup, taking all its inverses leaves it unchanged, so KH equals HK (our own).

**Paper or page:** [Subset Product of Subgroups/Sufficient Condition](https://proofwiki.org/wiki/Subset_Product_of_Subgroups/Sufficient_Condition). It says: “Then H ∘ K is a subgroup of G.”

**Sources:** none listed. No primary source with a working link was found.

### The order of a power comes from its first multiple

**Remember:** Multiply the exponents until you reach a multiple of the order.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For g in a group, its order is the least positive integer n with gⁿ equal to the identity. If no such n exists, g has infinite order.

**Problem.** If g has finite order n, then its mth power has order n/gcd(m,n) for every integer m. Here gcd means greatest common divisor.

**How the definition helps.** The exponent definition reduces the order of the power to finding the least positive k for which n divides mk (our own). The work is ordinary divisibility after canceling the greatest common divisor of m and n (our own). To compare with counting the powers of g, use division with remainder to show they repeat exactly every n steps (our own).

**Paper or page:** [Order of Power of Group Element](https://proofwiki.org/wiki/Order_of_Power_of_Group_Element). It says: “∀m ∈ ℤ: order(gᵐ) = n/gcd{m,n}”

**Sources:** none listed. No primary source with a working link was found.

### The smallest subgroup definition makes generators determine homomorphisms

**Remember:** Every subgroup containing the generators contains the subgroup they generate.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** The subgroup generated by S is the smallest subgroup containing S. Equivalently, it consists of all finite products of elements of S and their inverses, including the empty product.

**Problem.** Two homomorphisms, or maps that preserve multiplication, from G to the same group agree everywhere if they agree on a set generating G.

**How the definition helps.** The smallest subgroup definition avoids writing each element as a product (our own). The maps preserve products and inverses, so the elements where they agree form a subgroup (our own). This subgroup contains the generators and therefore contains all of G (our own).

**Paper or page:** [Homomorphism of Generated Group](https://proofwiki.org/wiki/Homomorphism_of_Generated_Group). It says: “Let ϕ: G → H and ψ: G → H be homomorphisms.”

**Sources:** none listed. No primary source with a working link was found.

### The subgroup test asks for nonempty, since the empty set passes

**Remember:** Products and inverses stay inside the empty set vacuously, so require a member.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup of a group G is a subset H that is a group under the operation of G. A group always contains an identity, so it is never empty.

**Problem.** A subset H of a group G is a subgroup exactly when H is nonempty, closed under products and closed under inverses.

**How the definition helps.** Closure under products and inverses holds vacuously for the empty set, so the nonempty clause is what brings the identity into H. Our own sketch: with some a in H, closure gives a⁻¹ in H, and then e = aa⁻¹ is in H. Without the nonempty clause, the test would accept ∅, which is not a group. Nothing hard remains.

**Paper or page:** [Two-Step Subgroup Test](https://proofwiki.org/wiki/Two-Step_Subgroup_Test), [Empty Set is Submagma of Magma](https://proofwiki.org/wiki/Empty_Set_is_Submagma_of_Magma), [Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty). It says: “(1): H ≠ ∅, that is, H is non-empty (2): a, b ∈ H ⟹ a ∘ b ∈ H (3): a ∈ H ⟹ a⁻¹ ∈ H.”

**Sources:**

- [ProofWiki, Two-Step Subgroup Test](https://proofwiki.org/wiki/Two-Step_Subgroup_Test)
- [ProofWiki, Empty Set is Submagma of Magma](https://proofwiki.org/wiki/Empty_Set_is_Submagma_of_Magma)
- [ProofWiki, Monoid is not Empty](https://proofwiki.org/wiki/Monoid_is_not_Empty)

### Two cosets leave no room for a nonnormal subgroup

**Remember:** With two cosets, the only other coset is the complement.

*Rules out counterexamples.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For a subgroup H, a left coset gH contains all products gh with h in H. A right coset Hg uses the products hg. The index counts distinct left cosets, and H is normal when gH equals Hg for every g.

**Problem.** Every subgroup of index two is normal, even in an infinite group.

**How the definition helps.** Two left cosets leave only the complement of H for the second coset (our own). Taking inverses pairs left cosets with right cosets, so the second right coset is also that complement (our own). Thus gH and Hg both equal H for g in H, and both equal its complement otherwise (our own).

**Paper or page:** [Subgroup of Index 2 is Normal](https://proofwiki.org/wiki/Subgroup_of_Index_2_is_Normal). It says: “A subgroup of index 2 is always normal.”

**Sources:** none listed. No primary source with a working link was found.

### Numbering vertices gives two forms for every dihedral symmetry

**Remember:** Choose the first vertex and the direction around the polygon.

*True by definition.* MSC 20B05 (General theory for finite permutation groups), 20A05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** The dihedral group consists of the rotations and reflections of a regular polygon. Number its n vertices from 0 around the boundary, starting again at 0 after n − 1. In these labels its elements have the form x ↦ a + x or x ↦ a − x.

**Problem.** For n ≥ 3, the dihedral group of a regular n-gon has 2n elements. Its rotations are the n translations of the labels and its reflections are the other n maps.

**How the definition helps.** The numbered model separates a choice of starting point from a choice of direction, so there are 2n maps (our own). The work is to show that a symmetry preserves adjacency and is determined by where it sends vertices 0 and 1 (our own). Rotations and reflections realize all those choices (our own).

**Paper or page:** [Order of Dihedral Group](https://proofwiki.org/wiki/Order_of_Dihedral_Group). It says: “The dihedral group Dₙ is of order 2n.”

**Sources:** none listed. No primary source with a working link was found.

### Transitive actions on inhabited sets are coset spaces

**Remember:** Transitive means one orbit, and one orbit needs at least one point.

*Rules out counterexamples. Confidence: medium.* MSC 20B05 (General theory for finite permutation groups), 20B07, 18B40. arXiv math.GR. Level 1: early undergraduate.

**Definition.** An inhabited transitive G-set X contains at least one point. For every x,y ∈ X, some g ∈ G satisfies gx = y.

**Problem.** Let G act transitively on an inhabited set X, and let H be the stabilizer of a point. Then X is isomorphic to the coset space G/H, and the transitive inhabited G-sets are exactly the connected objects of the category of G-sets.

**How the definition helps.** Nonemptiness excludes the empty transitive action, which has no base point and is not connected (our own). For x ∈ X with stabilizer H, transitivity makes gH ↦ gx an equivariant bijection. Every G-set decomposes into its orbits, so the nonempty single-orbit sets are exactly the connected objects (our own).

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

### Disjoint cycles are the orbits of repeated permutation

**Remember:** Start anywhere on a loop and you get the same cycle.

*True by definition.* MSC 20B30 (Symmetric groups), 20B05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A permutation sends the points of a finite set to themselves, using each output exactly once. Its orbit through a point consists of all points reached by applying the permutation repeatedly, including the starting point.

**Problem.** Every permutation of a finite set is a product of disjoint cycles. With fixed points included, the cycles are unique up to their order and choice of starting points.

**How the definition helps.** Following an orbit constructs a cycle directly, without guessing factors of the permutation (our own). Finiteness forces a repeat, and unique predecessors force the first repeated point to be the starting point (our own). The orbits partition the set, so their cycles act on separate points and together give the permutation (our own). Each next point is prescribed, leaving only the starting point and the order of the cycles free (our own).

**nLab:** [symmetric group](https://ncatlab.org/nlab/show/symmetric+group). It says: “The orbits of this action partition the set X into a disjoint union of cycles, called the cyclic decomposition of the permutation σ.”

**Sources:** none listed. No primary source with a working link was found.

### Inversions show why adjacent swaps generate every permutation

**Remember:** Fix one neighboring inversion and the total drops by one.

*Makes the theorem clean to state or prove.* MSC 20B30 (Symmetric groups), 05A05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** Write a permutation as the list of its values on 1 through n. An inversion is a pair of positions where the earlier value exceeds the later one.

**Problem.** Every permutation of {1, …, n} is a product of swaps of neighboring positions. The fewest such swaps needed equals its number of inversions.

**How the definition helps.** Counting inversions gives a number that can be lowered exactly one step at a time (our own). An unsorted list has a neighboring pair out of order, and swapping that pair removes just its inversion (our own). The work is to check that all other pairs contribute the same total before and after any neighboring swap (our own). This also gives the lower bound, since any neighboring swap changes the count by only one (our own).

**Paper or page:** [Transpositions of Adjacent Elements generate Symmetric Group](https://proofwiki.org/wiki/Transpositions_of_Adjacent_Elements_generate_Symmetric_Group). It says: “for 1 ≤ k &lt; n are a set of generators for Sₙ.”

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

**Remember:** A Sylow subgroup cannot grow inside the group while remaining a p-subgroup.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 1: early undergraduate.

**Definition.** For a prime p, a p-group is a group in which the order of every element is a power of p. A p-subgroup is a subgroup that is a p-group. A Sylow p-subgroup of a group G is a p-subgroup that is not contained in any larger p-subgroup.

**Problem.** In a finite group, every p-subgroup lies in some Sylow p-subgroup. Sylow's theorems add that all Sylow p-subgroups are conjugate and have order pⁿ, the largest power of p that divides the order of G.

**How the definition helps.** In a finite group, repeatedly enlarge a p-subgroup until no strict enlargement remains possible (our own). Sylow’s theorems identify the resulting maximal p-subgroups as conjugate subgroups of the full p-power order.

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

**How the definition helps.** Coset multiplication respects representatives exactly when conjugation preserves N (our own). With that condition the group laws descend, and the quotient map has kernel N (our own). Every kernel is normal. Every group congruence identifies a and b exactly when a⁻¹b belongs to its identity class, the kernel of its quotient map (our own).

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

**How the definition helps.** Requiring two distinct normal subgroups excludes a trivial quotient at every step. Allowing trivial factors would permit repeated terms and arbitrary padding (our own). With these repetitions excluded, the Jordan–Hölder induction proves equality of lengths and equality of factor multisets (our own).

**nLab:** [simple group](https://ncatlab.org/nlab/show/simple+group), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple), [Jordan-Hölder theorem](https://ncatlab.org/nlab/show/Jordan-H%C3%B6lder+theorem). It says: “Note that the trivial group does not itself count as simple, on the grounds that it has only \*one\* quotient group (or only one normal subgroup).”

**Sources:**

- [David Speyer, The Jordan–Hölder theorem, course notes for Math 594, University of Michigan (2013)](https://web.archive.org/web/20210926062254/http://www.math.lsa.umich.edu/~speyer/594_2013/JordanHolder.pdf)

### Characteristic subgroups pass normality down, which normal subgroups cannot

**Remember:** Fixed by every automorphism, so fixed by conjugation from above.

*Rules out counterexamples.* MSC 20F28 (Automorphism groups of groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** A subgroup H of G is characteristic if every automorphism of G maps H onto itself. A normal subgroup needs only to be fixed by the inner automorphisms, the conjugations by elements of G.

**Problem.** If H is characteristic in K and K is normal in G, then H is normal in G. Also, a characteristic subgroup of a characteristic subgroup is characteristic.

**How the definition helps.** Each conjugation in G restricts to an automorphism of normal K and therefore preserves characteristic H (our own). If K is characteristic, every automorphism of G restricts in the same way (our own). In the dihedral group of order eight, a reflection subgroup is normal in a normal Klein four-subgroup but moves under conjugation (our own).

**Wikipedia:** [Characteristic subgroup](https://en.wikipedia.org/wiki/Characteristic_subgroup). It says: “Moreover, while normality is not transitive, it is true that every characteristic subgroup of a normal subgroup is normal.”

**Sources:** none listed. No primary source with a working link was found.

### Discreteness gives every frieze group a shortest positive shift

**Remember:** Every period is a whole number of shortest shifts.

*Rules out counterexamples.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** A frieze group is a discrete group of plane symmetries whose translation vectors span one line. Discrete means that the identity is isolated, so nonzero translation lengths stay away from zero. Choose one direction along the line as positive.

**Problem.** Every translation in a frieze group is an integer multiple of its shortest positive shift.

**How the definition helps.** Discreteness bounds the positive shifts away from zero, and differences of any two shifts are again shifts (our own). A sequence of positive shifts approaching the lower bound must therefore eventually be constant (our own). Division with remainder then gives the generator, while the excluded rational shifts have no shortest one (our own).

**Wikipedia:** [Frieze group](https://en.wikipedia.org/wiki/Frieze_group). It says: “The inclusion of the discrete condition is to exclude the group containing all translations”

**Sources:** none listed. No primary source with a working link was found.

### Inverting rotations reveals the center of a dihedral group

**Remember:** Only a rotation equal to its inverse can sit in the center.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** The dihedral group consists of the symmetries of a regular polygon. A one-step rotation and one reflection generate it, and reflecting before and after a rotation reverses that rotation. The center consists of the symmetries that commute with every symmetry.

**Problem.** For a polygon with n ≥ 3 sides, the center contains only the identity when n is odd. When n is even, it contains exactly the identity and the half-turn.

**How the definition helps.** A rotation commutes with a reflection exactly when it equals its inverse (our own). No reflection commutes with the one-step rotation, which has order at least three (our own). The work goes into deriving the presentation from the polygon’s symmetries (our own).

**Paper or page:** [Center of Dihedral Group](https://proofwiki.org/wiki/Center_of_Dihedral_Group). It says: “Dₙ = ⟨α, β: αⁿ = β² = e, βαβ = α⁻¹⟩”

**Sources:** none listed. No primary source with a working link was found.

### The linear part makes translations the kernel of Euclidean motions

**Remember:** Keep the matrix and forget the shift.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** A Euclidean isometry preserves all distances. Write it as x ↦ Ax + b, where A is an orthogonal matrix, meaning it preserves dot products. The linear part is A.

**Problem.** Taking linear parts gives every orthogonal matrix and respects composition. Its kernel, the set of motions sent to the identity matrix, consists exactly of translations.

**How the definition helps.** Linear parts multiply when maps compose, and A = I leaves only a translation (our own). Every orthogonal matrix already acts with b = 0, so the map is onto (our own). The work goes into proving that every distance-preserving map has this form (our own).

**Wikipedia:** [Euclidean group](https://en.wikipedia.org/wiki/Euclidean_group). It says: “the linear part of the isometry”

**Sources:** none listed. No primary source with a working link was found.

### Finite cyclic groups have one model per order

**Remember:** The first power that returns to the identity gives the modulus.

*True by definition.* MSC 20K01 (Finite abelian groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** View a cyclic group as a quotient of the additive group of integers. Equivalently, it is a group whose elements are all powers of one generator.

**Problem.** Any finite cyclic group of order n is isomorphic to the integers modulo n.

**How the definition helps.** The quotient description identifies exponents precisely when their difference belongs to the kernel (our own). The first n powers of a generator are distinct and exhaust the group, so its first positive return is n (our own). The kernel is therefore nℤ, and the first isomorphism theorem gives ℤ/nℤ (our own).

**Paper or page:** [Cyclic Groups of Same Order are Isomorphic](https://proofwiki.org/wiki/Cyclic_Groups_of_Same_Order_are_Isomorphic). It says: “Two cyclic groups of the same order are isomorphic to each other.”

**Sources:** none listed. No primary source with a working link was found.

### Residues that are units generate the finite cyclic group

**Remember:** To generate all residues, it is enough to reach one.

*True by definition.* MSC 20K01 (Finite abelian groups), 20A05. arXiv math.GR. Level 1: early undergraduate.

**Definition.** A cyclic group of size n consists of the powers of one generator. In its residue model, exponents become integers modulo n and multiplication becomes addition. A residue generates this group if adding and subtracting copies reaches every residue.

**Problem.** The residue of k generates ℤ/nℤ exactly when the greatest common divisor of k and n is 1. Thus the group has φ(n) generators, the number of residues coprime to n.

**How the definition helps.** In the residue model, reaching 1 by adding copies of k lets us reach every residue (our own). By Bézout’s identity, ak + bn = 1 has integer solutions exactly when k and n have greatest common divisor 1 (our own). Thus the generators are exactly the residues counted by φ(n) (our own).

**Paper or page:** [Finite Cyclic Group has Euler Phi Generators](https://proofwiki.org/wiki/Finite_Cyclic_Group_has_Euler_Phi_Generators). It says: “Then Cₙ has φ(n) generators, where φ(n) denotes the Euler φ function.”

**Sources:** none listed. No primary source with a working link was found.

### Coprime orders make cyclic products cyclic

**Remember:** A pair repeats when both coordinates repeat.

*Rules out counterexamples.* MSC 20K25 (Direct sums, direct products, etc. for abelian groups). arXiv math.GR. Level 1: early undergraduate.

**Definition.** In the direct product of groups H and K, elements are pairs with multiplication (h,k)(h′,k′) = (hh′,kk′). Thus each coordinate of a power is the same power of that coordinate.

**Problem.** The direct product of two finite cyclic groups is cyclic exactly when their orders are coprime.

**How the definition helps.** For cyclic factors of orders m and n, a pair of generators first returns after lcm(m,n) powers (our own). Every pair returns by that exponent, which equals mn exactly when the orders are coprime (our own). Two factors of order two therefore have no element of order four.

**Paper or page:** [Group Direct Product of Cyclic Groups/Examples/C2 x C2](https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups/Examples/C2_x_C2), [Group Direct Product of Cyclic Groups](https://proofwiki.org/wiki/Group_Direct_Product_of_Cyclic_Groups). It says: “The group direct product C₂ × C₂ is not a cyclic group.”

**Sources:** none listed. No primary source with a working link was found.

### Setting a⁰ equal to the identity gives index laws for all integers

**Remember:** The empty product is the identity, so a⁰ = e.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20M10 (General structure theory for semigroups), 20M17. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a monoid element a, put a⁰ = e and aⁿ⁺¹ = aⁿ ∘ a for every integer n ≥ 0. If a is invertible, put a⁻ⁿ = (a⁻¹)ⁿ for each positive integer n.

**Problem.** For an invertible element a of a monoid and all integers m and n, a to the power nm equals (aᵐ)ⁿ and (aⁿ)ᵐ.

**How the definition helps.** With a⁰ = e, adding zero exponents follows the same multiplication rule (our own). Associativity and inverses make k ↦ aᵏ a homomorphism from ℤ to the units (our own). Both k ↦ (aᵐ)ᵏ and k ↦ aᵐᵏ are homomorphisms agreeing at 1, so they agree everywhere (our own).

**Paper or page:** [Index Laws for Monoids/Product of Indices](https://proofwiki.org/wiki/Index_Laws_for_Monoids/Product_of_Indices). It says: “Then: ∀ m, n ∈ ℤ: aⁿᵐ = (aᵐ)ⁿ = (aⁿ)ᵐ”

**Sources:**

- [ProofWiki, Index Laws for Monoids/Product of Indices](https://proofwiki.org/wiki/Index_Laws_for_Monoids/Product_of_Indices)

### Commutators give a quotient through which all abelian images factor

**Remember:** Killing every commutator makes every pair commute.

*True by definition.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The abelianization of G is the quotient by the subgroup generated by all commutators x⁻¹y⁻¹xy. A commutator is the identity exactly when x and y commute.

**Problem.** The abelianization is abelian. Every homomorphism from G to an abelian group factors uniquely through it.

**How the definition helps.** The quotient construction enforces exactly the equalities needed to make elements commute (our own). Every map into an abelian group kills each commutator and therefore the subgroup they generate (our own). Conjugation preserves commutators, so this subgroup is normal (our own). The quotient mapping theorem now gives the unique factorization in the alternative definition by maps to abelian groups (our own).

**nLab:** [abelianization](https://ncatlab.org/nlab/show/abelianization). It says: “The abelianization is an abelian group. Indeed, it is the universal abelian group induced by G, in the following sense:”

**Sources:** none listed. No primary source with a working link was found.

### Defining quotients by their maps out makes the third isomorphism theorem automatic

**Remember:** Killing N and then H/N kills exactly the elements of H.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the quotient G/N by a homomorphism from G that sends N to the identity. Every other homomorphism from G that sends N to the identity must factor through it in exactly one way. The usual definition builds G/N from the cosets gN, the translates of N.

**Problem.** Let N and H be normal subgroups of G, with N inside H. Then H/N is normal in G/N, and (G/N)/(H/N) is isomorphic to G/H.

**How the definition helps.** The map G/N → G/H has kernel H/N, so H/N is normal (our own). Maps out of (G/N)/(H/N) correspond uniquely to maps out of G killing H (our own). This is precisely the universal property of G/H, giving the isomorphism (our own).

**Paper or page:** [Third Isomorphism Theorem/Groups](https://proofwiki.org/wiki/Third_Isomorphism_Theorem/Groups). It says: “(G / N) / (H / N) ≅ G / H”

**Sources:** none listed. No primary source with a working link was found.

### Order as a kernel generator makes image orders divide original orders

**Remember:** A larger subgroup of ℤ has a generator that divides the smaller subgroup’s generator.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a group element a, let K be the kernel of n ↦ aⁿ from ℤ. Its positive generator is the order of a when K ≠ {0}. When K = {0}, a has infinite order.

**Problem.** If f is a group homomorphism and a has finite order, then the order of f(a) divides the order of a.

**How the definition helps.** Every exponent killing a also kills f(a), so the second kernel contains the first (our own). If a has finite order m, the second kernel contains m and has a positive generator d (our own). Thus m ∈ dℤ, which says d divides m (our own).

**Wikipedia:** [Order (group theory)](https://en.wikipedia.org/wiki/Order_%28group_theory%29). It says: “Group homomorphisms tend to reduce the orders of elements: if f: G → H is a homomorphism, and a is an element of G of finite order, then ord(f(a)) divides ord(a).”

**Sources:** none listed. No primary source with a working link was found.

### Powers defined by a group homomorphism obey the exponent law

**Remember:** A homomorphism turns sums into products, so bᵐ⁺ⁿ = bᵐbⁿ is built in.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups), 97H20. arXiv math.GR, math.HO. Level 2: later undergraduate.

**Definition.** For b in a group G, let h:ℤ → G be the unique homomorphism with h(1) = b. Define bⁿ = h(n) for each integer n.

**Problem.** For all integers m and n, bᵐ⁺ⁿ = bᵐbⁿ.

**How the definition helps.** The homomorphism rule gives h(m+n) = h(m)h(n), exactly the exponent law (our own). Existence and uniqueness of h follow because ℤ is freely generated by 1 (our own).

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “This definition of exponentiation with negative exponents is the only one that allows extending the identity bᵐ⁺ⁿ = bᵐ · bⁿ to negative exponents (consider the case m = −n).”

**Sources:** none listed. No primary source with a working link was found.

### The kernel definition makes preimages of normal subgroups normal

**Remember:** The preimage of a kernel is the kernel of the composite.

*True by definition. Confidence: medium.* MSC 20A05 (Axiomatics and elementary properties of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A subgroup N of G is normal if it is the kernel of a group homomorphism out of G. The kernel is the set of elements sent to the identity. The usual definition instead requires gNg⁻¹ = N for every g in G.

**Problem.** Let φ from G₁ to G₂ be any group homomorphism and H a normal subgroup of G₂. The preimage of H is normal in G₁.

**How the definition helps.** Write H as the kernel of q from G₂. Then φ⁻¹(H) is the kernel of q ∘ φ, so it is normal (our own).

**Paper or page:** [Preimage of Normal Subgroup under Epimorphism is Normal Subgroup](https://proofwiki.org/wiki/Preimage_of_Normal_Subgroup_under_Epimorphism_is_Normal_Subgroup). It says: “φ⁻¹\[H\] is a normal subgroup of (G₁, ∘)”

**Sources:** none listed. No primary source with a working link was found.

### The smallest prime index forces a subgroup to be normal

**Remember:** Act on cosets and bound the image by both group orders.

*True by definition.* MSC 20B05 (General theory for finite permutation groups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A subgroup H of index p has p left cosets. Each group element permutes them by left multiplication. The kernel of this action consists of the elements fixing every coset.

**Problem.** A subgroup of a finite group is normal if its index p is the smallest prime divisor of the group’s order.

**How the definition helps.** The coset action has image order dividing both \|G\| and p!, whose greatest common divisor is p (our own). Transitivity makes the image order divisible by p, so the kernel has index p and equals H (our own).

**Wikipedia:** [Index of a subgroup](https://en.wikipedia.org/wiki/Index_of_a_subgroup). It says: “a subgroup of index p where p is the smallest prime factor of the order of G (if G is finite) is necessarily normal”

**Sources:** none listed. No primary source with a working link was found.

### Primitive actions are exactly the actions on cosets of maximal subgroups

**Remember:** No block to keep means no subgroup in between.

*True by definition.* MSC 20B15 (Primitive groups), 20E28. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A transitive action on a set with at least two points is primitive if its only invariant partitions are the singletons and the whole set.

**Problem.** For H properly contained in G, the action on G/H is primitive exactly when H is maximal. Isomorphism classes of primitive G-sets thus correspond to conjugacy classes of maximal subgroups.

**How the definition helps.** Blocks containing H correspond to intermediate subgroups K via the fiber over K of G/H → G/K (our own). Conversely, the stabilizer of such a block acts transitively on it, recovering K (our own). Changing the base point conjugates the stabilizer, giving the classification (our own).

**Wikipedia:** [Primitive permutation group](https://en.wikipedia.org/wiki/Primitive_permutation_group). It says: “A group action is primitive if it is isomorphic to G/H for a maximal subgroup H of G, and imprimitive otherwise”

**Sources:** none listed. No primary source with a working link was found.

### Cycle lengths classify conjugacy in the full symmetric group

**Remember:** Match loops of equal lengths and relabel along each loop.

*Rules out counterexamples.* MSC 20B30 (Symmetric groups), 20B05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The cycle type of a permutation is the multiset of its cycle lengths, including fixed points as cycles of length one. A multiset records repetitions but not order. Conjugacy in the full symmetric group means relabeling by any permutation of the points.

**Problem.** Two permutations of the same finite set are conjugate in its full symmetric group exactly when they have the same cycle type.

**How the definition helps.** The cycle type forgets just the labels, and the full group allows every relabeling (our own). The work is to pair cycles of equal length and match the points in their cycle order (our own). In the group of even permutations on three points, the two cycles (123) and (132) are not conjugate.

**Wikipedia:** [Alternating group](https://en.wikipedia.org/wiki/Alternating_group). It says: “The two permutations (123) and (132) are not conjugates in A₃, although they have the same cycle shape”

**Paper or page:** [Conjugate of Cycle](https://proofwiki.org/wiki/Conjugate_of_Cycle). It says: “Then the conjugate πσπ⁻¹ is a cycle of length k.”

**Sources:** none listed. No primary source with a working link was found.

### Pairing swaps shows why three-point cycles generate even permutations

**Remember:** Pair the swaps, then replace each pair by cycles of length three.

*True by definition.* MSC 20B30 (Symmetric groups), 20B05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define an even permutation as one that can be written as a product of an even number of swaps. This replaces the equivalent test that the determinant of its permutation matrix equals +1.

**Problem.** For n ≥ 3, the alternating group Aₙ of even permutations is generated by its cycles of length three.

**How the definition helps.** The even-swap definition lets us group the swaps into pairs (our own). Equal swaps cancel, and two swaps sharing exactly one point form a three-cycle (our own). Between disjoint swaps (ab) and (cd), insert (bc)(bc) to obtain two pairs sharing a point (our own). Conversely, every three-cycle is a pair of swaps, so these products are even (our own).

**Paper or page:** [Alternating Group is Generated by 3-Cycles](https://proofwiki.org/wiki/Alternating_Group_is_Generated_by_3-Cycles). It says: “Then Aₙ can be generated by the set of 3-cycles:”

**Sources:** none listed. No primary source with a working link was found.

### The sign kernel makes the alternating group normal with index two

**Remember:** The two signs give the two cosets of the kernel.

*True by definition.* MSC 20B30 (Symmetric groups), 20B35. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For n ≥ 2, the sign of a permutation in Sₙ is the determinant of its permutation matrix. The alternating group Aₙ is the kernel of this sign map.

**Problem.** For n ≥ 2, the alternating group Aₙ is normal in Sₙ and has index two. That means Sₙ has two cosets of Aₙ, so Aₙ has n!/2 elements.

**How the definition helps.** Determinants multiply, so the sign map is a homomorphism and its kernel is normal (our own). The identity has sign +1 and a transposition has sign −1, giving two cosets (our own). Each coset therefore has n!/2 elements (our own).

**Wikipedia:** [Parity of a permutation](https://en.wikipedia.org/wiki/Parity_of_a_permutation), [Alternating group](https://en.wikipedia.org/wiki/Alternating_group). It says: “It is the kernel of the signature group homomorphism sgn : Sₙ → {1, −1} explained under symmetric group.”

**Sources:** none listed. No primary source with a working link was found.

### An invariant basis orbit identifies the regular representation

**Remember:** One basis orbit with no repetitions gives the regular representation.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Build the left regular representation on a basis indexed by the group elements. Each group element acts by left multiplication on the basis labels.

**Problem.** A representation of a finite group is isomorphic to its left regular representation exactly when the group translates of one vector form a group-indexed basis.

**How the definition helps.** The group-indexed basis gives the change of coordinates explicitly. In our own proof, send the basis vector labelled g to the translate by g of the chosen vector. This map carries one basis onto the other and respects the action on labels. Conversely, the translates of the identity basis vector form the regular basis.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “is isomorphic to the left-regular representation if and only if there exists”

**Sources:** none listed. No primary source with a working link was found.

### An invertible group order makes Maschke averaging work

**Remember:** Divide by the group order to average a projection.

*Rules out counterexamples.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The order of a finite group is invertible in a field when the sum of that many copies of one has a multiplicative inverse.

**Problem.** If the group order is invertible in the field, every invariant subspace of a finite-dimensional representation has an invariant complement.

**How the definition helps.** Invertibility lets us average the group conjugates of a linear projection onto the subspace. In our own proof, the average still fixes the subspace and commutes with the group, so its kernel gives the complement. Over the field with two elements, let a group of order two swap two basis vectors. Their sum spans the only invariant line.

**nLab:** [Maschke's theorem](https://ncatlab.org/nlab/show/Maschke%27s+theorem). It says: “If \|G\| · 1ₖ is invertible in k, then an exact sequence of k\[G\]-modules splits iff it splits after applying the forgetful functor”

**Sources:** none listed. No primary source with a working link was found.

### Coset blocks give the induced character formula

**Remember:** Only cosets fixed by an element contribute to its induced trace.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** To induce a representation of a subgroup H of a finite group G, put one copy of its space at each left coset. Choose one representative per coset. If gt = sh with representatives t and s and h in H, let g move the copy at tH to sH by h.

**Problem.** If χ is the subgroup character, the induced character at g sums χ(t⁻¹gt) over representatives t of the left cosets fixed by g.

**How the definition helps.** Only fixed cosets contribute diagonal blocks to the action matrix. In our own proof, a fixed coset tH contributes the trace of the subgroup element t⁻¹gt. This block description agrees with tensor-product induction because the coset representatives form a basis of the group algebra as a right subgroup-algebra module.

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “where the sum is taken over a system of representatives of the left cosets”

**Sources:** none listed. No primary source with a working link was found.

### Defining induction as a tensor product makes Frobenius reciprocity automatic

**Remember:** Induction is a tensor product, so Frobenius reciprocity is the tensor–hom rule.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 16D20. arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** For H ≤ G and an H-representation V over a field 𝕂, form 𝕂\[G\] ⊗ V over 𝕂\[H\]. The induced G-action multiplies the first factor on the left.

**Problem.** Maps of G-representations from Ind V to W correspond naturally to maps of H-representations from V to the restriction Res W. For finite groups over ℂ, the inner product over G of Ind χ and ψ equals the inner product over H of χ and Res ψ.

**How the definition helps.** Restriction to 1 ⊗ V determines each G-map from the tensor product (our own). Every H-map f extends by g ⊗ v ↦ gf(v), which respects the tensor relation (our own). For finite-dimensional complex representations of finite groups, the dimensions of these map spaces give the character identity (our own).

**nLab:** [induced representation](https://ncatlab.org/nlab/show/induced+representation), [Frobenius reciprocity](https://ncatlab.org/nlab/show/Frobenius+reciprocity). It says: “is the statement that the induction functor for representations of groups (or in some other algebraic categories) is left adjoint to the restriction functor.”

**Sources:**

- [George Mackey, Induced representations of locally compact groups I, Annals of Math. 55 (1952) 101–139](https://doi.org/10.2307/1969423)

### Group algebra modules extend group actions uniquely

**Remember:** Make group elements a basis, then extend their action linearly.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The group algebra over a field has the group elements as a basis. Multiply basis elements by the group law and extend multiplication by linearity. A module over this algebra is a linear action that respects multiplication and identity.

**Problem.** Every linear group action extends uniquely to a unital module over the group algebra. Every such module restricts to a linear group action.

**How the definition helps.** Using group elements as a basis leaves only one linear extension of their action. In our own proof, the module multiplication rule follows by expanding both sides on basis elements. Conversely, each basis element acts invertibly on a module because its group inverse acts as the inverse map.

**Wikipedia:** [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “As a ring, its addition law is that of the free module and its multiplication extends "by linearity" the given group law on the basis.”

**Sources:** none listed. No primary source with a working link was found.

### Inducing the trivial action gives the action on cosets

**Remember:** One trivial line per coset gives one permuted basis vector.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For H ≤ G and an H-module V over k, induction takes k\[G\] ⊗ V modulo the relations gh ⊗ v = g ⊗ hv. Here g ∈ G, h ∈ H and v ∈ V vary freely, and G acts by left multiplication on the first factor. The trivial H-module is k with every h acting as the identity.

**Problem.** Inducing the trivial representation from a subgroup gives the permutation representation on its left cosets.

**How the definition helps.** The trivial action leaves the vector on each coset line unchanged while the group permutes the lines. In our own proof, the vector corresponding to one on each line gives a basis indexed by cosets. In tensor-product induction, multiplying a coset representative on the right by a subgroup element leaves the corresponding basis vector unchanged.

**nLab:** [induced representation of the trivial representation](https://ncatlab.org/nlab/show/induced+representation+of+the+trivial+representation). It says: “is the permutation representation k\[G/H\] of the coset G-set G/H”

**Sources:** none listed. No primary source with a working link was found.

### Representations as group algebra modules turn Maschke into Wedderburn structure

**Remember:** Extend the group action linearly to turn representations into group algebra modules.

*Makes the theorem clean to state or prove.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 16S34. arXiv math.RT, math.RA. Level 2: later undergraduate.

**Definition.** For a finite group G, the complex group algebra ℂ\[G\] has basis G and extends group multiplication bilinearly. Each complex representation acts on its vector space as a module over ℂ\[G\] by linear extension.

**Problem.** For finite G, ℂ\[G\] is a product of complex matrix algebras, one of size dim V for each irreducible type V. Their squared dimensions (dim V)² sum to the group order. The number of irreducible types equals the number of conjugacy classes.

**How the definition helps.** The module description lets Maschke’s theorem and the Wedderburn–Artin theorem identify the matrix factors. Each factor acts on its simple module of dimension equal to the matrix size. Comparing dimensions gives the sum of squares (our own). The center has one dimension per factor and one basis element per conjugacy class, its class sum (our own).

**Wikipedia:** [Maschke's theorem](https://en.wikipedia.org/wiki/Maschke%27s_theorem), [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “The importance of this result stems from the well developed theory of semisimple rings, in particular, their classification as given by the Wedderburn–Artin theorem.”

**Sources:**

- [Maschke, H. (1898). Ueber den arithmetischen Charakter der Coefficienten der Substitutionen endlicher linearer Substitutionsgruppen. Mathematische Annalen 50, 492–498.](https://doi.org/10.1007/BF01444297)

### Twisting the coset copies explains induction after restriction

**Remember:** Move the action on each coset copy into the tensor factor.

*True by definition.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a subgroup H of a finite group G, induction uses symbols \[g, v\] linear in the subgroup vector v. Impose \[gh, v\] = \[g, hv\] for h in H, and let G multiply the first entry on the left.

**Problem.** Restricting a complex G-representation V to H and then inducing it gives ℂ\[G/H\] ⊗ V with the group acting on both factors. Here ℂ\[G/H\] is the permutation space of the left cosets.

**How the definition helps.** The symbol relation gives a map to the tensor product without choosing coset representatives. In our own proof, send \[g, v\] to the basis vector for gH tensored with gv. Replacing g by gh and v by h⁻¹v leaves both factors unchanged, and left translation acts on both factors. The inverse sends the basis vector for gH tensored with w to \[g, g⁻¹w\].

**Paper or page:** [Foams, iterated wreath products, field extensions and Sylvester sums](https://arxiv.org/abs/2107.07845v2). It says: “Consequently, the composition of restriction and induction functors is isomorphic to the functor of tensor product with the induced representation Indᴳₕ(k).”

**Sources:**

- [Mee Seong Im and Mikhail Khovanov, Foams, iterated wreath products, field extensions and Sylvester sums, Lemma 4.1](https://arxiv.org/abs/2107.07845v2)

### A character detects its kernel at full degree

**Remember:** Only identity actions give the full degree as trace.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The character value at a group element is the trace of its action. Equivalently, it is the sum of the eigenvalues counted with multiplicity. The degree is the dimension of the representation.

**Problem.** In a finite-dimensional complex representation of a finite group, an element acts as the identity exactly when its character value equals the degree.

**How the definition helps.** Writing trace as an eigenvalue sum turns equality with the degree into equality in each real part. In our own proof, the matrix of an element of order m satisfies xᵐ − 1, so its eigenvalues are roots of unity. Each has real part at most one, with equality only at one. The polynomial has distinct roots, so the matrix is diagonalizable and all eigenvalues equal one exactly for the identity matrix.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “Since the trace of the identity matrix is the number of rows”

**Sources:** none listed. No primary source with a working link was found.

### Algebraic closure removes nonscalar maps from Schur’s lemma

**Remember:** An eigenvalue gives Schur’s lemma its scalar.

*Rules out counterexamples.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** A field is algebraically closed if every nonconstant polynomial over it has a root in the field.

**Problem.** Over an algebraically closed field, every linear map commuting with a finite-dimensional irreducible group action is a scalar multiple of the identity.

**How the definition helps.** Algebraic closure gives the linear map an eigenvalue. In our own proof, its eigenspace is nonzero and invariant, so irreducibility makes it the whole space. Over the real numbers, rotation by a third of a turn generates an irreducible action on the plane. The rotation itself commutes with that action and is not scalar.

**nLab:** [Schur's lemma](https://ncatlab.org/nlab/show/Schur%27s+lemma). It says: “are multiples c · id of the identity operator.”

**Sources:** none listed. No primary source with a working link was found.

### Averaging rank-one maps gives matrix coefficient orthogonality

**Remember:** Average a single-entry map, then use Schur’s lemma.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Let U and V be finite-dimensional unitary representations of a finite group G, with orthonormal bases. For each linear map A from U to V, its average is the group mean of V(g) A U(g⁻¹). A matrix coefficient records one entry of an action matrix as g varies.

**Problem.** For pairwise inequivalent irreducible unitary representations of G, distinct indexed coefficients in orthonormal bases are orthogonal under the group-average inner product. Each coefficient of a representation of dimension d has squared norm 1/d.

**How the definition helps.** Averaging a matrix with one nonzero entry packages the coefficient inner products as entries of a single map. In our own proof, the average respects the actions because multiplying group elements permutes its terms. Schur’s lemma gives zero between distinct irreducibles and a scalar within one irreducible. Averaging preserves trace in the latter case, giving scalar 1/d for a diagonal matrix unit and zero otherwise.

**Wikipedia:** [Schur orthogonality relations](https://en.wikipedia.org/wiki/Schur_orthogonality_relations). It says: “only valid for matrix elements of irreducible representations”

**Sources:** none listed. No primary source with a working link was found.

### Averaging the action counts fixed vectors by trace

**Remember:** Average the action, then take its trace to count fixed dimensions.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a complex representation of a finite group, the averaging operator is the sum of its action maps divided by the group order.

**Problem.** For a finite-dimensional complex representation of a finite group, the dimension of its fixed subspace is the average of its character values.

**How the definition helps.** The averaging operator measures the dimension of the fixed space without finding a basis for it. In our own proof, acting on the average permutes its terms, so its image consists of fixed vectors. It fixes those vectors and hence projects onto their space. Its trace equals both the dimension of that space and the average of the character values.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “Since the trace of the projection is the sum of all eigenvalues”

**Sources:** none listed. No primary source with a working link was found.

### Character averages project onto each irreducible type

**Remember:** Weight an action average by a character to select its type.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 20C05. arXiv math.RT. Level 2: later undergraduate.

**Definition.** Let χ be an irreducible complex character of a finite group G, with degree d. For a complex representation ρ of G, sum ρ(g) over all g ∈ G with weight d times the conjugate of χ(g) divided by \|G\|.

**Problem.** In any finite-dimensional complex representation of a finite group, this operator projects onto the sum of all irreducible subspaces with character χ.

**How the definition helps.** The weights select one irreducible type without choosing a decomposition to define the projection. In our own proof, the weights are constant on conjugacy classes, so the operator commutes with the group. Maschke’s theorem splits the space into irreducibles, and Schur’s lemma makes the operator scalar on each. Its trace there, by character orthogonality, equals the summand’s dimension for the selected type and zero otherwise.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “The projection pⱼ: V → V(τⱼ) corresponding to the canonical decomposition is given by”

**Sources:** none listed. No primary source with a working link was found.

### Character coordinates determine the whole representation

**Remember:** Character coordinates count copies of the irreducible representations.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** A class function takes equal values on conjugate elements. The inner product of two complex class functions averages the first function times the complex conjugate of the second over the group.

**Problem.** Two finite-dimensional complex representations of a finite group are isomorphic if and only if their characters agree.

**How the definition helps.** The inner product recovers multiplicities directly from traces, avoiding a search for a change of basis. In our own proof, Maschke’s theorem splits each representation into irreducible summands. Schur orthogonality makes the inner product with each irreducible character count the summands of its type. Equal characters therefore give the same decomposition up to isomorphism.

**nLab:** [character of a linear representation](https://ncatlab.org/nlab/show/character+of+a+linear+representation). It says: “in characteristic zero the character homomorphism is injective”

**Sources:** none listed. No primary source with a working link was found.

### Conjugation turns maps of representations into fixed vectors

**Remember:** A map of representations is fixed by the action on maps.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** Let ρ and σ be representations of a finite group G on finite-dimensional complex spaces V and W. Each g acts on a linear map f from V to W by f ↦ σ(g) f ρ(g⁻¹).

**Problem.** For these representations, the dimension of the equivariant map space equals the group average of trace(ρ(g⁻¹)) trace(σ(g)).

**How the definition helps.** The action on all linear maps turns the theorem into the general formula for the dimension of fixed vectors (our own). Its fixed-vector equation is exactly the direct equation for a map of representations (our own). Averaging the action gives a projection onto the fixed vectors, and the projection has trace equal to its rank (our own). The other step computes the trace of f ↦ σ(g) f ρ(g⁻¹) as the product of the two traces (our own).

**nLab:** [character of a linear representation](https://ncatlab.org/nlab/show/character+of+a+linear+representation). It says: “Then the Schur inner product of the two representation equals the convolution product of their characters, normalized by the order of G”

**Sources:** none listed. No primary source with a working link was found.

### Counting maps makes Schur orthogonality a direct consequence

**Remember:** With the map pairing, Schur’s lemma is the orthonormality statement.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For finite-dimensional complex representations V and W of a finite group G, set ⟨V,W⟩ to the dimension of the space of G-equivariant maps. Extend the pairing to formal differences of representations by bilinearity.

**Problem.** The distinct irreducible representations form an orthonormal basis of the representation ring, the group of formal differences of representations.

**How the definition helps.** The map pairing makes orthonormality exactly Schur’s lemma. Maps between nonisomorphic irreducibles vanish, and endomorphisms of each irreducible are scalars. Complete reducibility gives the basis because every representation splits into irreducibles with unique multiplicities (our own).

**nLab:** [Schur's lemma](https://ncatlab.org/nlab/show/Schur%27s+lemma). It says: “the isomorphism classes of irreducible representations form an orthogonal basis for the representation ring, and even an orthonormal basis if the ground field is algebraically closed.”

**Sources:** none listed. No primary source with a working link was found.

### Defining induced characters by reciprocity makes them characters at once

**Remember:** Define by reciprocity, and positive integer coefficients come for free.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** Let θ be a complex character of a subgroup H of a finite group G. Define θᴳ as the unique class function satisfying ⟨θᴳ,χ⟩ = ⟨θ,χ restricted to H⟩ for every irreducible complex character χ of G. Each inner product averages the first function times the conjugate of the second over its group.

**Problem.** The induced class function θᴳ is a character of G, that is, the character of an actual representation.

**How the definition helps.** Reciprocity gives the coefficients in the orthonormal basis of irreducible characters. Each coefficient counts common irreducible summands with multiplicity in the two H-characters. These nonnegative integers are the multiplicities of a representation with character θᴳ.

**Wikipedia:** [Character theory](https://en.wikipedia.org/wiki/Character_theory). It says: “this definition makes it clear that θᴳ is a non-negative integer combination of irreducible characters of G, so is indeed a character of G.”

**Sources:** none listed. No primary source with a working link was found.

### Eigenvalue sums make character values algebraic integers

**Remember:** A character value is a sum of roots of unity.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The character of a representation gives the trace of each action matrix, equivalently the sum of its eigenvalues with multiplicity. An algebraic integer satisfies a polynomial with integer coefficients and leading coefficient one.

**Problem.** Every character value of a finite-dimensional complex representation of a finite group is an algebraic integer.

**How the definition helps.** Using eigenvalues in place of diagonal entries expresses the trace as a sum of algebraic integers. In our own proof, each eigenvalue of an element of order m satisfies xᵐ − 1 = 0. The theorem that algebraic integers are closed under addition finishes the proof.

**Paper or page:** [Character of Representations over C are Algebraic Integers](https://proofwiki.org/wiki/Character_of_Representations_over_C_are_Algebraic_Integers). It says: “Then for all g ∈ G, it follows that χ(g) is an algebraic integer.”

**Sources:** none listed. No primary source with a working link was found.

### Full character modulus detects the group centre

**Remember:** A central element acts by one phase on each irreducible.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The normalized character of a nonzero complex representation is the trace divided by its degree. This is the average of the eigenvalues of the action.

**Problem.** An element of a finite group is central exactly when every irreducible complex character has normalized value of absolute value one at that element.

**How the definition helps.** Dividing the trace by the degree turns the scalar-action test into equality in the triangle inequality. In our own proof, a finite-order matrix is diagonalizable with eigenvalues on the unit circle, whose average has modulus one exactly when they coincide. Central elements act as scalars on irreducibles by Schur’s lemma. Conversely, scalar action on each irreducible summand commutes with the whole regular representation, which is faithful.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “these eigenvalues are all m-th roots of unity.”

**Sources:** none listed. No primary source with a working link was found.

### Grouping equivalent summands makes the decomposition canonical

**Remember:** Group all copies of one type before asking for uniqueness.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** An irreducible representation is nonzero and has no nonzero proper subspace preserved by the group. Its isotypic component in a representation is the sum of all invariant subspaces isomorphic to it.

**Problem.** Every finite-dimensional complex representation of a finite group is the direct sum of its isotypic components. This decomposition is unique, although a decomposition into individual irreducible copies need not be.

**How the definition helps.** Taking all copies of each type defines the component independently of any chosen splitting. In our own proof, Maschke’s theorem first supplies a direct sum of irreducibles. Schur’s lemma makes each irreducible subspace project to zero on every summand of a different type. Thus the summands of its own type span exactly the component.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “This decomposition is uniquely determined. It is called the canonical decomposition.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant forms explain the three Frobenius–Schur values

**Remember:** At most one invariant form survives, so its symmetry decides the sign.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For an irreducible complex representation V of a finite group G, a bilinear form B is invariant when B(gv,gw) = B(v,w) for all g,v,w. The Frobenius–Schur indicator of V is the dimension of its invariant symmetric forms minus the dimension of its invariant alternating forms.

**Problem.** The indicator is 1 if V admits a nonzero invariant symmetric form, −1 if it admits a nonzero invariant alternating form, and 0 otherwise.

**How the definition helps.** Schur’s lemma bounds the dimension of invariant bilinear forms by one because they correspond to equivariant maps V → V\* (our own). Splitting each form into symmetric and alternating parts gives the three cases (our own). Group averaging computes each invariant dimension by averaging traces (our own). The trace difference on the two form spaces is χ(g⁻²), whose average equals the average of χ(g²) (our own).

**Wikipedia:** [Frobenius–Schur indicator](https://en.wikipedia.org/wiki/Frobenius%E2%80%93Schur_indicator). It says: “The inner product counts the multiplicities of direct summands; the equivalence of the definitions then follows immediately.”

**Sources:** none listed. No primary source with a working link was found.

### One generator gives the multiplicities in the regular representation

**Remember:** A map out of the group algebra is determined by the image of 1.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT. Level 2: later undergraduate.

**Definition.** The regular representation of a finite group G acts by left multiplication on a complex vector space with basis G. View this space as ℂ\[G\], the group algebra, whose multiplication extends that of G. Then ℂ\[G\] is a free module on the single generator 1.

**Problem.** Every irreducible complex representation V of G occurs in ℂ\[G\] with multiplicity dim V. Thus the squares of the dimensions of the distinct irreducible representations sum to \|G\|.

**How the definition helps.** Evaluation at 1 identifies G-maps ℂ\[G\] → V with V because v determines the map g ↦ gv (our own). Maschke’s theorem splits ℂ\[G\] into irreducibles. Schur’s lemma makes each copy of V contribute one dimension to the map space and each other type zero (our own). Counting dimensions in the decomposition gives the sum of squares (our own).

**nLab:** [regular representation](https://ncatlab.org/nlab/show/regular+representation). It says: “Over the complex numbers, the regular representation of a finite group is a direct sum that contains each irreducible representation ρᵢ with multiplicity its dimension:”

**Sources:** none listed. No primary source with a working link was found.

### Ordered pairs detect irreducibility of the permutation complement

**Remember:** Two ordered-pair orbits mean one irreducible complement to constants.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The permutation character of a finite group acting on a finite set X counts the points fixed by each element. In the complex space with basis X, the augmentation subspace consists of vectors whose coordinates sum to zero. Double transitivity means transitivity on ordered pairs of distinct points.

**Problem.** For a transitive finite group action on at least two points, the augmentation subspace is irreducible exactly when the action is doubly transitive.

**How the definition helps.** Counting fixed points instead of taking matrix traces makes the squared character count fixed ordered pairs. In our own proof, the orbit-counting lemma makes its average the number of orbits on ordered pairs. Transitivity gives one constant summand, so character orthogonality makes the augmentation character’s squared norm one less than this orbit count. Irreducibility means norm one, leaving exactly the diagonal and one orbit of distinct pairs.

**nLab:** [permutation representation](https://ncatlab.org/nlab/show/permutation+representation). It says: “The characters of permutation representations are the Burnside marks of the underlying G-sets:”

**Sources:** none listed. No primary source with a working link was found.

### Product groups have tensor products as their irreducibles

**Remember:** On a direct product, take one irreducible from each factor.

*Makes the theorem clean to state or prove.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** The outer tensor product of representations of G and H uses their tensor product space. The element (g, h) acts by g on the first factor and h on the second.

**Problem.** The irreducible complex representations of a direct product of finite groups are exactly the outer tensor products of pairs of irreducibles.

**How the definition helps.** The outer tensor product names a representation of the product group using one representation from each factor. In our own proof, its character multiplies the two characters, so character inner products factor as well. Schur orthogonality then gives distinct irreducibles for distinct pairs of irreducible types. These exhaust the possibilities because conjugacy classes of the product are pairs of conjugacy classes.

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “This representation is called outer tensor product”

**Sources:** none listed. No primary source with a working link was found.

### Quotient actions recover normal subgroups from character kernels

**Remember:** The quotient’s irreducibles see everything outside the normal subgroup.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a normal subgroup N of G, inflate a complex representation of G/N by letting each g act as its coset gN. Its character kernel consists of the elements acting as the identity.

**Problem.** Every normal subgroup N of a finite group G is the intersection of the kernels of the irreducible characters inflated from G/N.

**How the definition helps.** Inflation makes each kernel the inverse image of a kernel in the quotient. In our own proof, the regular representation of G/N is faithful and splits into irreducibles by Maschke’s theorem. Every nonidentity coset therefore acts nontrivially on some irreducible summand. Taking inverse images turns the trivial intersection in the quotient into N.

**Wikipedia:** [Character theory](https://en.wikipedia.org/wiki/Character_theory). It says: “Each normal subgroup of G is the intersection of the kernels of some of the irreducible characters of G.”

**Sources:** none listed. No primary source with a working link was found.

### Swapping tensor factors gives both square character formulas

**Remember:** Use the swap to separate symmetric and exterior traces.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a finite-dimensional complex representation V, let S exchange the factors of V ⊗ V. Its +1 and −1 eigenspaces are the symmetric square and exterior square, respectively.

**Problem.** For an element g of a finite group, the symmetric square has character value (χ(g)² + χ(g²))/2, where χ is the original character. The exterior square has value (χ(g)² − χ(g²))/2.

**How the definition helps.** The swap separates the two squares by the projections (I + S)/2 and (I − S)/2. In our own proof, use an eigenbasis for g, which exists because g has finite order. The tensor square has trace χ(g)². After the swap, only pairs of identical basis vectors contribute to the trace, giving the sum of squared eigenvalues, χ(g²).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “These subspaces are G–invariant”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products make induction transitive

**Remember:** Tensoring twice along a chain gives the same result as tensoring once.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT, math.GR. Level 2: later undergraduate.

**Definition.** For a field k and subgroup H ≤ G, induce an H-module W by tensoring k\[G\] with W over k\[H\]. The group G acts by left multiplication on the first factor.

**Problem.** Let H ≤ G ≤ K be finite groups and W a representation of H over k. Inducing through G gives a representation isomorphic to the one induced directly to K.

**How the definition helps.** The tensor definition makes transitivity an instance of associativity of tensor products (our own). Over k\[G\], multiplication identifies k\[K\] ⊗ k\[G\] with k\[K\] (our own). The coset proof instead has to match representatives along the two steps (our own). The work moves to comparing the constructions, using coset representatives as a right k\[H\]-module basis of k\[G\] (our own).

**Wikipedia:** [Representation theory of finite groups](https://en.wikipedia.org/wiki/Representation_theory_of_finite_groups). It says: “Transitivity of induction. Let W be a representation of H and let H ≤ G ≤ K be an ascending series of groups.”

**Sources:** none listed. No primary source with a working link was found.

### The character norm tests irreducibility

**Remember:** An irreducible character has exactly one unit of squared norm.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** For a finite group, a character’s squared norm is the average of its squared absolute values. A virtual character is an integer combination of irreducible complex characters.

**Problem.** A finite-dimensional complex representation of a finite group is irreducible exactly when its character has squared norm one. A virtual character is irreducible exactly when it has squared norm one and positive value at the identity.

**How the definition helps.** The group average converts a test on invariant subspaces into a sum of integer squares. In our own proof, Schur orthogonality makes the squared norm equal the sum of the squared irreducible coefficients. Norm one leaves just one coefficient, either +1 or −1. Maschke’s theorem gives nonnegative coefficients for representations, and positive value at the identity excludes the negative sign for virtual characters.

**nLab:** [Schur orthogonality relation](https://ncatlab.org/nlab/show/Schur+orthogonality+relation). It says: “form an orthonormal basis of the space of class functions under this inner product”

**Sources:** none listed. No primary source with a working link was found.

### The group algebra centre counts irreducible representations

**Remember:** Count the centre once by class sums and once by matrix factors.

*True by definition. Confidence: medium.* MSC 20C15 (Ordinary representations and characters), 16S34. arXiv math.RT. Level 2: later undergraduate.

**Definition.** In the complex group algebra ℂ\[G\], the centre consists of sums whose coefficients agree on conjugate group elements.

**Problem.** There are as many irreducible complex representations of a finite group, up to isomorphism, as there are conjugacy classes.

**How the definition helps.** The centre has two bases whose sizes give the desired counts (our own). One basis consists of the conjugacy class sums. Maschke’s theorem and Wedderburn–Artin give one matrix factor per irreducible type (our own). The identity matrices of the factors form the other basis because each matrix algebra has scalar centre (our own).

**Wikipedia:** [Group ring](https://en.wikipedia.org/wiki/Group_ring). It says: “The center is equal to the set of class functions, that is the set of elements that are constant on each conjugacy class”

**Sources:** none listed. No primary source with a working link was found.

### Weighting the character table makes column orthogonality automatic

**Remember:** A square table with orthonormal rows has orthonormal columns.

*True by definition.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT. Level 2: later undergraduate.

**Definition.** In a character table, rows record irreducible characters and columns record conjugacy classes. For each column, divide the class size by the group order. Scale the column by the square root of that ratio.

**Problem.** The weighted complex character table of a finite group has orthonormal columns. Before weighting, distinct columns are orthogonal and each squared column norm equals the group order divided by its class size.

**How the definition helps.** Weighting converts the character inner product into the ordinary inner product of rows. In our own proof, character orthogonality gives orthonormal rows. The table is square because there is one irreducible character per conjugacy class. A square matrix with orthonormal rows has orthonormal columns.

**Wikipedia:** [Schur orthogonality relations](https://en.wikipedia.org/wiki/Schur_orthogonality_relations). It says: “this implies that the columns of the character table are orthogonal.”

**Sources:** none listed. No primary source with a working link was found.

### Abelian factors make solvable composition factors cyclic of prime order

**Remember:** An abelian quotient with no room to refine has prime order.

*True by definition.* MSC 20D10 (Finite solvable groups, theory of formations, Schunck classes, Fitting classes, \\(\\pi\\)-length, ranks). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A solvable group has a chain from the identity to the group with finitely many steps, each normal in the next, and abelian successive quotients. A composition series runs from the identity to the group with each subgroup normal in the next and all successive quotients simple. These quotients, called composition factors, are nontrivial and have no proper nontrivial normal subgroup.

**Problem.** A finite group is solvable exactly when its composition factors are all cyclic of prime order. This statement holds for any composition series.

**How the definition helps.** The chain definition makes solvability immediate whenever a composition series has cyclic factors of prime order (our own). Conversely, refine each finite abelian quotient until its factors are simple (our own). A finite simple abelian group is cyclic of prime order because every subgroup is normal (our own). Jordan–Hölder gives the same factors up to order and isomorphism in every composition series (our own).

**nLab:** [solvable group](https://ncatlab.org/nlab/show/solvable+group). It says: “A group is solvable if it is a finite iterated group extension of an abelian group by abelian groups.”

**Paper or page:** [Factors of Solvable Group are Prime](https://proofwiki.org/wiki/Factors_of_Solvable_Group_are_Prime). It says: “Then all factor groups of ℋ must be prime.”

**Sources:** none listed. No primary source with a working link was found.

### A semidirect product shows when order pq forces cyclicity

**Remember:** A nontrivial twist needs an automorphism of order p.

*Rules out counterexamples.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For primes p &lt; q, choose a homomorphism α from Cₚ to the automorphism group of C<sub>q</sub>. The semidirect product consists of pairs in C<sub>q</sub> × Cₚ, with multiplication (x,a)(y,b) = (xα(a)(y),ab).

**Problem.** Let p and q be primes with p &lt; q. Every group of order pq is cyclic if p does not divide q − 1.

**How the definition helps.** The hypothesis excludes every semidirect product with a nontrivial action (our own). Sylow’s theorems give a normal subgroup of order q and a complement of order p. Since Aut(C<sub>q</sub>) has order q − 1, its only subgroup of order dividing p is trivial (our own). The resulting direct product is cyclic because p and q are coprime (our own).

**Paper or page:** [Group of Order p q is Cyclic](https://proofwiki.org/wiki/Group_of_Order_p_q_is_Cyclic). It says: “Let p, q be primes such that p &lt; q and p does not divide q − 1.”

**Sources:** none listed. No primary source with a working link was found.

### Asking order coprime to index lets Sylow's theorem extend to solvable groups

**Remember:** Put every π-prime in the subgroup order and none in its index.

*Makes the theorem clean to state or prove.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20D10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A Hall subgroup of a finite group G is a subgroup whose order is coprime to its index. For a set of primes π, a Hall π-subgroup has order a product of primes in π and index divisible by no prime in π.

**Problem.** For every set of primes π, a finite solvable group has a Hall π-subgroup, and all such subgroups are conjugate. Conversely, a finite group with a Hall π-subgroup for every π is solvable.

**How the definition helps.** Hall π-subgroups specify exactly which prime powers must occur in the subgroup order (our own). Hall’s existence, conjugacy and converse theorems give the assertions for this single family (our own). In A₄, order six and index two share a prime, so Hall’s theorem does not require a subgroup of order six.

**Wikipedia:** [Hall subgroup](https://en.wikipedia.org/wiki/Hall_subgroup). It says: “The alternating group A₄ of order 12 is solvable but has no subgroups of order 6 even though 6 divides 12, showing that Hall's theorem (see below) cannot be extended to all divisors of the order of a solvable group.”

**Sources:**

- [P. Hall, A note on soluble groups, Journal of the London Mathematical Society 3 (1928) 98–105](https://doi.org/10.1112/jlms/s1-3.2.98)

### Fixed cosets put every p-subgroup in a conjugate Sylow subgroup

**Remember:** A coset fixed by Q places Q inside that conjugate of P.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A Sylow p-subgroup P of a finite group G has order equal to the largest power of p dividing \|G\|. A coset gP is fixed by Q if multiplying it on the left by any element of Q leaves it unchanged.

**Problem.** Every subgroup Q of p-power order lies inside a conjugate of P. In particular, all Sylow p-subgroups are conjugate.

**How the definition helps.** A fixed coset gP says exactly that g⁻¹Qg lies inside P (our own). Orbit–stabilizer makes every orbit of Q with more than one coset divisible in size by p (our own). The number of cosets of P is prime to p, so at least one is fixed (our own). When Q has the same order as P, containment is equality (our own).

**Paper or page:** [Second Sylow Theorem](https://proofwiki.org/wiki/Second_Sylow_Theorem). It says: “Then Q is a subset of a conjugate of P.”

**Sources:**

- [Ludwig Sylow, Théorèmes sur les groupes de substitutions (1872)](https://doi.org/10.1007/BF01442913)

### Index prime to p makes Sylow subgroups survive quotients

**Remember:** A quotient can merge cosets but the new index still divides the old.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a prime p, a Sylow p-subgroup P of a finite group has p-power order and index prime to p. The index counts its left cosets.

**Problem.** A surjective homomorphism of finite groups sends a Sylow p-subgroup to a Sylow p-subgroup.

**How the definition helps.** The index test avoids computing the largest power of p in the quotient order (our own). The image of P has p-power order because its order divides \|P\| (our own). Its index equals the index of its full preimage, which contains P (our own). That index divides the index of P and so is prime to p (our own).

**Paper or page:** [Quotient of Sylow P-Subgroup](https://proofwiki.org/wiki/Quotient_of_Sylow_P-Subgroup). It says: “Then PN/N is a Sylow p-subgroup of G/N.”

**Sources:** none listed. No primary source with a working link was found.

### Normal Hall subgroups always have a complement

**Remember:** A Hall subgroup has coprime order and index, and a complement meets it trivially.

*Makes the theorem clean to state or prove.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A complement of a normal subgroup N in G is a subgroup K with N ∩ K trivial and NK = G. Then G is a semidirect product of N and K. A normal Hall subgroup is a normal subgroup whose order is coprime to its index.

**Problem.** Every normal Hall subgroup of a finite group has a complement, and all its complements are conjugate.

**How the definition helps.** The Hall condition collects the coprimality hypotheses for both conclusions (our own). The Schur–Zassenhaus theorem supplies existence and conjugacy (our own). In C₄ the subgroup of order two has index two and lacks a complement because it contains the only element of order two.

**Wikipedia:** [Schur–Zassenhaus theorem](https://en.wikipedia.org/wiki/Schur%E2%80%93Zassenhaus_theorem), [Hall subgroup](https://en.wikipedia.org/wiki/Hall_subgroup). It says: “If we do not impose the coprime condition, the theorem is not true: consider for example the cyclic group C₄ and its normal subgroup C₂.”

**Sources:** none listed. No primary source with a working link was found.

### Normal subgroups inherit every Sylow intersection

**Remember:** Normality lets any Sylow choice in the larger group work.

*Rules out counterexamples.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A normal subgroup N of G is one that every element of G sends to itself by conjugation. A Sylow p-subgroup has order equal to the largest power of p dividing the group order.

**Problem.** Let N be normal in a finite group G. For every Sylow p-subgroup P of G, the intersection P ∩ N is a Sylow p-subgroup of N.

**How the definition helps.** Normality keeps every conjugate of a Sylow subgroup of N inside N (our own). Sylow containment and conjugacy in G put one such conjugate inside P (our own). Thus P ∩ N contains a Sylow subgroup of N and itself has p-power order (our own). Without normality, two distinct order-two subgroups of the triangle symmetry group meet only at the identity (our own).

**Paper or page:** [Intersection of Normal Subgroup with Sylow P-Subgroup](https://proofwiki.org/wiki/Intersection_of_Normal_Subgroup_with_Sylow_P-Subgroup), [Intersection of Sylow p-Subgroup with Subgroup not necessarily Sylow p-Subgroup](https://proofwiki.org/wiki/Intersection_of_Sylow_p-Subgroup_with_Subgroup_not_necessarily_Sylow_p-Subgroup). It says: “Then P ∩ N is a Sylow p-subgroup of N.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizers measure the number of Sylow subgroups

**Remember:** Count the cosets of the normalizer to count Sylow subgroups.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A Sylow p-subgroup P has order equal to the largest power of p dividing the group order. Its normalizer consists of the elements g with gPg⁻¹ = P.

**Problem.** The number of Sylow p-subgroups in a finite group G equals the index of the normalizer of any one of them. It divides the index of that Sylow subgroup.

**How the definition helps.** Viewing the normalizer as the subgroup fixing P turns counting distinct conjugates into counting left cosets (our own). Orbit–stabilizer gives that count, and Sylow conjugacy says it includes every Sylow p-subgroup (our own). Since the normalizer contains P, its index divides the index of P (our own).

**Paper or page:** [Fifth Sylow Theorem](https://proofwiki.org/wiki/Fifth_Sylow_Theorem), [Third Sylow Theorem](https://proofwiki.org/wiki/Third_Sylow_Theorem). It says: “The number of Sylow p-subgroups of a finite group is a divisor of their common index.”

**Sources:**

- [Ludwig Sylow, Théorèmes sur les groupes de substitutions (1872)](https://doi.org/10.1007/BF01442913)

### Rotating tuples gives Cauchy’s theorem

**Remember:** Rotate tuples whose product is the identity to find elements of order p.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a prime p, consider ordered lists of p group elements whose product is the identity. Rotation moves the first entry to the end and preserves the condition that the product equals the identity.

**Problem.** If a prime p divides the order of a finite group G, then G contains an element of order p.

**How the definition helps.** Rotation fixes exactly the constant product-one tuples, whose entries have pth power equal to the identity (our own). Every other tuple belongs to an orbit of size p because p is prime (our own). The total count is divisible by p because the first p − 1 entries are free and determine the last (our own). The fixed count is therefore divisible by p, so another constant tuple supplies a nonidentity entry of order p (our own).

**Wikipedia:** [Cauchy's theorem (group theory)](https://en.wikipedia.org/wiki/Cauchy%27s_theorem_%28group_theory%29). It says: “as the last element must be the inverse of the product of those preceding elements.”

**Paper or page:** [Cauchy's Group Theorem](https://proofwiki.org/wiki/Cauchy's_Group_Theorem). It says: “Then G has a subgroup of order p.”

**Sources:** none listed. No primary source with a working link was found.

### Translating subsets gives Sylow subgroups as stabilizers

**Remember:** Translate subsets of Sylow size until an orbit has size prime to p.

*True by definition.* MSC 20D20 (Sylow subgroups, Sylow properties, \\(\\pi\\)-groups, \\(\\pi\\)-structure). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Let q be the largest power of a prime p dividing the order of a finite group G. Translation sends a q-element subset S to gS. Its stabilizer consists of the elements g with gS = S.

**Problem.** Some q-element subset has a stabilizer of order q. This stabilizer is a Sylow p-subgroup, a subgroup of the largest possible p-power order.

**How the definition helps.** Write \|G\| = qm, with p not dividing m, and count q-element subsets modulo p (our own). The binomial theorem gives (1+x)<sup>q</sup> ≡ 1+x<sup>q</sup> modulo p, so the degree-q coefficient of (1+x)<sup>(qm)</sup> is m modulo p (our own). Some orbit has size prime to p, so q divides its stabilizer order (our own). The stabilizer acts freely on the subset, so its order also divides q (our own).

**Paper or page:** [First Sylow Theorem](https://proofwiki.org/wiki/First_Sylow_Theorem), [Group Action on Prime Power Order Subset/Stabilizer of Maximal Power Order Subset](https://proofwiki.org/wiki/Group_Action_on_Prime_Power_Order_Subset/Stabilizer_of_Maximal_Power_Order_Subset). It says: “That is, the set of all subsets of G whose cardinality is the power of a prime number.”

**Sources:**

- [Ludwig Sylow, Théorèmes sur les groupes de substitutions (1872)](https://doi.org/10.1007/BF01442913)

### Setting Φ(G) = G without maximal subgroups keeps Φ the non-generators

**Remember:** An empty intersection of subgroups is the whole group.

*True by definition.* MSC 20D25 (Special subgroups (Frattini, Fitting, etc.)), 20E28. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The Frattini subgroup Φ(G) is the intersection of all maximal subgroups of G. If G has no maximal subgroups, the convention is Φ(G) = G. A non-generator is an element that can be removed from every generating set that contains it.

**Problem.** For every group G, Φ(G) is exactly the set of non-generators.

**How the definition helps.** A maximal subgroup M missing x gives a generating set M ∪ {x} from which x cannot be removed (our own). Conversely, suppose S generates with x but generates a proper subgroup H after removing x (our own). By Zorn’s lemma, a maximal subgroup among those containing H and missing x exists because chain unions still miss x (our own). Every larger subgroup contains H and x, hence equals G, so this maximal subgroup witnesses x ∉ Φ(G) (our own).

**Wikipedia:** [Frattini subgroup](https://en.wikipedia.org/wiki/Frattini_subgroup). It says: “For the case that G has no maximal subgroups, for example the trivial group {e} or a Prüfer group, it is defined by Φ(G)=G.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclic reduction shows that free groups have no torsion

**Remember:** A cyclically reduced word stays reduced when you repeat it.

*Rules out counterexamples.* MSC 20E05 (Free nonabelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A reduced word has no neighboring inverse letters. A nonempty reduced word is cyclically reduced if its first and last letters are not inverses.

**Problem.** In a free group, no nonidentity element has a positive power equal to the identity.

**How the definition helps.** The endpoint condition prevents cancellation where one copy of the word meets the next (our own). A reduced word such as aba⁻¹ can lose letters there (our own). Conjugating away inverse endpoints turns any nonidentity element into a nonempty cyclically reduced word (our own). Every positive power of that word remains nonempty and reduced, so neither it nor the corresponding original power is the identity (our own).

**Wikipedia:** [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “A reduced word is called cyclically reduced if its first and last letter are not inverse to each other.”

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

**Definition.** A subset S of F is a free basis if every function from S to any group extends uniquely to a homomorphism from F.

**Problem.** Any two free bases of the same free group have the same size.

**How the definition helps.** The extension property makes the number of maps F → ℤ/2 equal to the number of binary choices on a basis (our own). A finite basis of size n gives 2ⁿ maps, determining n and excluding infinite bases (our own). For an infinite basis S, the finite reduced words have cardinality \|S\|, so \|F\| determines \|S\| (our own).

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

**Remember:** In the coset graph, loops outside a spanning tree freely generate the subgroup.

*True by definition.* MSC 20E05 (Free nonabelian groups), 18B40. arXiv math.GR, math.AT. Level 2: later undergraduate.

**Definition.** The free groupoid on a directed graph has its vertices as objects. Its arrows are paths using edges and formal inverses, with adjacent inverse pairs cancelled. Composition joins paths and reduces the result.

**Problem.** Every subgroup H of a free group is free. If H has finite index n in a free group of finite rank k, then H has rank nk − n + 1.

**How the definition helps.** Reduced loops based at H in the coset graph represent exactly the reduced words belonging to H (our own). Its vertices are right cosets, with one directed edge per generator leaving each vertex (our own). A spanning tree gives one free loop generator per edge outside the tree (our own). With n vertices and nk edges, this leaves nk − (n − 1) generators (our own).

**nLab:** [Nielsen-Schreier theorem](https://ncatlab.org/nlab/show/Nielsen-Schreier+theorem). It says: “The second proof is quite similar in spirit but is based on groupoids (another way of viewing homotopy 1-types), and has the advantage that it circumvents the point-set topology considerations inherent to covering space theory.”

**Sources:**

- [Otto Schreier, Die Untergruppen der freien Gruppen, Abh. Math. Semin. Univ. Hamburg 5 (1927) 161–183](https://doi.org/10.1007/BF02952517)
- [P. J. Higgins, Categories and groupoids, reprint of the 1971 original, Reprints in Theory and Applications of Categories 7 (2005)](http://www.tac.mta.ca/tac/reprints/articles/7/tr7abs.html)

### Reduced words make equality in free groups a string comparison

**Remember:** Reduced words are equal exactly when their letters match.

*True by definition.* MSC 20E05 (Free nonabelian groups), 20F10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The free group on S consists of reduced words in letters from S and their formal inverses. A reduced word contains no adjacent inverse pair. Multiplication joins two words and cancels adjacent inverse pairs until none remain.

**Problem.** Two words in the generators and their inverses represent the same free group element exactly when they reduce to the same word.

**How the definition helps.** Defining the elements as reduced words makes equality a direct comparison of letters. To compare two input words, cancel adjacent inverse pairs in each and compare the results. Our own account of the work is that cancellations must give the same result in any order. One must also prove that the resulting product is associative and that every assignment of the generators extends uniquely to a group homomorphism.

**Wikipedia:** [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “The free group Fₛ is defined to be the group of all reduced words in S, with concatenation of words (followed by reduction if necessary) as group operation.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of free groups gives every group a presentation

**Remember:** Send the generators anywhere; the relations say what must die.

*True by definition.* MSC 20E05 (Free nonabelian groups), 20F05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The free group F(S) on a set S has this universal property. Every function from S to a group G extends to a unique homomorphism from F(S) to G. A presentation ⟨S \| R⟩ is the quotient of F(S) by the smallest normal subgroup that contains the words in R.

**Problem.** Every group has a presentation. Von Dyck: a map from S to G gives a homomorphism from ⟨S \| R⟩ exactly when it sends every word in R to 1.

**How the definition helps.** Extending generator assignments and factoring through a quotient give both statements (our own). Taking G itself as the generating set gives a surjection F(G) → G whose kernel supplies a set of relators. An assignment extends through the quotient exactly when its extension from F(S) kills the normal closure of R (our own). This happens exactly when it kills each relator (our own).

**Wikipedia:** [Presentation of a group](https://en.wikipedia.org/wiki/Presentation_of_a_group), [Free group](https://en.wikipedia.org/wiki/Free_group). It says: “Formally, the group G is said to have the above presentation if it is isomorphic to the quotient of a free group on S by the normal subgroup generated by the relations R.”

**Sources:**

- [W. Dyck, Gruppentheoretische Studien, Mathematische Annalen 20 (1882) 1–44](https://doi.org/10.1007/BF01443322)

### Defining free products by maps out makes each factor an embedded retract

**Remember:** Send the other factors to the identity to get the chosen factor back.

*True by definition. Confidence: medium.* MSC 20E06 (Free products of groups, free products with amalgamation, Higman-Neumann-Neumann extensions, and generalizations). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Define the free product of groups Gᵢ as a group with a homomorphism from each Gᵢ. Any family of homomorphisms from the Gᵢ into one group H must extend to exactly one homomorphism from the free product. The concrete model uses reduced words, whose letters are not the identity and come from different factors in turn.

**Problem.** Each factor Gⱼ maps injectively into the free product. There is also a homomorphism back onto Gⱼ whose composite with this map is the identity on Gⱼ.

**How the definition helps.** The extension property constructs a retraction onto the chosen factor (our own). Use the identity on Gⱼ and the trivial map from every other factor (our own). The resulting homomorphism is a left inverse to the factor map, which is therefore injective (our own).

**nLab:** [free product of groups](https://ncatlab.org/nlab/show/free+product+of+groups). It says: “is universal with this property”

**Sources:** none listed. No primary source with a working link was found.

### The normal core measures when a coset action is faithful

**Remember:** The core is what all cosets fail to see.

*True by definition.* MSC 20E07 (Subgroup theorems; subgroup growth). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The normal core of a subgroup H is the intersection of all its conjugates in G. An action is faithful if no element other than the identity leaves every point in place.

**Problem.** The elements acting trivially on all left cosets of H form the normal core of H. Thus the action is faithful exactly when the core is trivial.

**How the definition helps.** Defining the core by intersecting conjugates makes fixing every coset a single membership test (our own). An element a fixes gH exactly when g⁻¹ag belongs to H (our own). Conjugation permutes the factors, and every normal subgroup inside H lies in each factor (our own).

**Wikipedia:** [Core (group theory)](https://en.wikipedia.org/wiki/Core_%28group_theory%29). It says: “the normal core of any isotropy subgroup is precisely the kernel of the action.”

**Paper or page:** [Stabilizer of Coset under Group Action on Coset Space](https://proofwiki.org/wiki/Stabilizer_of_Coset_under_Group_Action_on_Coset_Space). It says: “Then the stabilizer of aH under ∗ is given by:”

**Sources:** none listed. No primary source with a working link was found.

### A longest subnormal chain gives a composition series

**Remember:** Lengthen a subnormal chain until there is no room to insert a subgroup.

*True by definition.* MSC 20E15 (Chains and lattices of subgroups, subnormal subgroups), 20E32. arXiv math.GR. Level 2: later undergraduate.

**Definition.** In a subnormal chain, each subgroup is normal in the next. A composition series is a strict subnormal chain from the identity to the group, with no step that admits a strict insertion.

**Problem.** Every finite group has a composition series. Its successive quotient groups are all nontrivial and simple.

**How the definition helps.** Defining a composition series by the impossibility of inserting another subgroup makes any longest strict subnormal chain qualify (our own). A finite group has finitely many subgroups, so a longest chain exists (our own). The correspondence theorem identifies possible insertions with proper nontrivial normal subgroups of the quotient (our own). This recovers the usual definition by simple quotients, meaning quotients with no such normal subgroup (our own).

**nLab:** [composition series](https://ncatlab.org/nlab/show/composition+series). It says: “is a subnormal series, (that is, a sequence of subgroups, each a normal subgroup of the next one)”

**Paper or page:** [Finite Group has Composition Series](https://proofwiki.org/wiki/Finite_Group_has_Composition_Series). It says: “Then G has a composition series.”

**Sources:** none listed. No primary source with a working link was found.

### Full coset preimages recover subgroups of a quotient

**Remember:** A subgroup above N must contain whole cosets.

*True by definition.* MSC 20E15 (Chains and lattices of subgroups, subnormal subgroups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For N normal in G, let π(g) = gN. For any set T of cosets, π⁻¹(T) consists exactly of those g ∈ G with gN ∈ T.

**Problem.** Full preimages pair the subgroups of G/N with the subgroups of G containing N. This pairing preserves inclusion and normality in both directions.

**How the definition helps.** A subgroup containing N contains the whole coset of each of its elements, so taking its image loses no membership information (our own). Taking the full preimage recovers the subgroup, and projecting a full preimage recovers the original cosets (our own). Both operations preserve inclusion (our own). The projection sends conjugates to conjugates and reaches every coset, so normality passes in both directions (our own).

**Paper or page:** [Correspondence Theorem (Group Theory)](https://proofwiki.org/wiki/Correspondence_Theorem_(Group_Theory)). It says: “This bijection maps normal subgroups of G/N onto normal subgroups of G which contain N.”

**Sources:** none listed. No primary source with a working link was found.

### A homomorphic section turns a quotient into a semidirect product

**Remember:** A section chooses one representative per coset and respects multiplication.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A surjective homomorphism q from G to H splits if there is a homomorphism s from H to G with q(s(h)) = h. Such an s is a section.

**Problem.** If q splits, G is a semidirect product of its kernel and the image of the section.

**How the definition helps.** The section gives a unique expression g = ns(q(g)), with n in the kernel (our own). Conjugation by the image of s gives the action in the semidirect product (our own). The hard part is finding a section that preserves multiplication (our own). Neither odd residue modulo four has order two, so reduction modulo two does not split (our own).

**nLab:** [semidirect product group](https://ncatlab.org/nlab/show/semidirect+product+group). It says: “such that every element of H can be written uniquely in the form γg, for γ ∈ Γ and g ∈ G.”

**Wikipedia:** [Semidirect product](https://en.wikipedia.org/wiki/Semidirect_product). It says: “a group G is isomorphic to a semidirect product of the two groups N and H”

**Sources:** none listed. No primary source with a working link was found.

### An action by automorphisms makes twisted multiplication associative

**Remember:** An action combines successive twists in the same order as multiplication.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Let H act on N by automorphisms, which are invertible homomorphisms from N to itself. This means each h gives an automorphism φ(h) with φ(hk) = φ(h)φ(k). Multiply pairs by (n, h)(m, k) = (nφ(h)(m), hk).

**Problem.** This multiplication is associative and makes N × H a group called the semidirect product.

**How the definition helps.** The automorphism law distributes each twist across products, and φ(hk) = φ(h)φ(k) then gives associativity (our own). The identity is (1,1), and (n,h) has inverse (φ(h⁻¹)(n⁻¹),h⁻¹) (our own). Doubling modulo five cannot represent a generator of order two because doubling twice fails to fix one (our own).

**nLab:** [semidirect product group](https://ncatlab.org/nlab/show/semidirect+product+group). It says: “but whose multiplication is twisted by ρ:”

**Paper or page:** [Semidirect Product of Groups is Group](https://proofwiki.org/wiki/Semidirect_Product_of_Groups_is_Group). It says: “Then N ⋊φ H is a group.”

**Sources:** none listed. No primary source with a working link was found.

### Two normal factors with trivial intersection give a direct product

**Remember:** Two normal factors commute when they share only the identity.

*Rules out counterexamples.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** An internal direct product has a unique expression nh for each element, with n in N and h in H. The two subgroups commute element by element.

**Problem.** If two normal subgroups N and H generate G and meet only in the identity, G is their internal direct product. The map (n, h) ↦ nh identifies it with the coordinatewise product.

**How the definition helps.** Normality puts each commutator n⁻¹h⁻¹nh in both factors, so their trivial intersection forces n and h to commute (our own). Products nh therefore form a subgroup containing both factors, hence all of G (our own). Two expressions nh can agree only when their differences in the two factors give the same element of the intersection (our own). In a triangle, the rotations and one reflection generate all symmetries and meet trivially, but only the rotations form a normal factor (our own).

**Paper or page:** [Conditions for Internal Group Direct Product](https://proofwiki.org/wiki/Conditions_for_Internal_Group_Direct_Product), [Internal Direct Product Theorem/General Result](https://proofwiki.org/wiki/Internal_Direct_Product_Theorem/General_Result). It says: “Then G is the internal group direct product of H and K”

**Sources:** none listed. No primary source with a working link was found.

### Finitely generated residually finite groups never map onto themselves with a kernel

**Remember:** A finite quotient catches each element that a self-surjection tries to kill.

*True by definition. Confidence: medium.* MSC 20E26 (Residual properties and generalizations; residually finite groups), 20E36. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A group is residually finite if every element other than the identity has a nonidentity image in some finite quotient. A group has the Hopf property if every surjective homomorphism from the group to itself is an isomorphism.

**Problem.** Every finitely generated residually finite group has the Hopf property.

**How the definition helps.** Residual finiteness detects each nonidentity element in some finite quotient (our own). A finite generating set gives only finitely many homomorphisms to each finite group F (our own). Precomposition with a surjection φ is injective on that finite set and hence surjective (our own). Every such map therefore kills ker φ, so residual finiteness forces ker φ to be trivial (our own).

**Paper or page:** [Chasing finite shadows of infinite groups through geometry](https://arxiv.org/abs/2504.11684v1). It says: “If a finitely generated group Γ is residually finite, then it has the Hopf property, i.e. every epimorphism φ∶Γ→Γ is an isomorphism.”

**Sources:**

- [Martin R. Bridson, Chasing finite shadows of infinite groups through geometry, arXiv:2504.11684v1 (2025)](https://arxiv.org/abs/2504.11684v1)

### Conjugacy classes as orbits give the class equation

**Remember:** Conjugates form an orbit whose stabilizer is the centralizer.

*True by definition.* MSC 20E45 (Conjugacy classes for groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Let G act on itself by conjugation, so g sends x to gxg⁻¹. The conjugacy class of x is the set of points it can reach. Its centralizer is the subgroup of elements that commute with x.

**Problem.** In a finite group, the class of x has size equal to the number of cosets of its centralizer. The group order is the sum of these sizes, one per class.

**How the definition helps.** Viewing conjugates as an orbit turns the centralizer into the subgroup fixing x (our own). Instead of comparing conjugating elements in pairs, apply the orbit–stabilizer theorem, which matches orbit points with left cosets of that subgroup (our own). The orbits partition the group, so their sizes add up to its order (our own).

**Paper or page:** [Number of Conjugates is Number of Cosets of Centralizer](https://proofwiki.org/wiki/Number_of_Conjugates_is_Number_of_Cosets_of_Centralizer), [Conjugacy Action on Group Elements is Group Action](https://proofwiki.org/wiki/Conjugacy_Action_on_Group_Elements_is_Group_Action). It says: “the number of different conjugates of a in G equals the number of different (left) cosets”

**Sources:** none listed. No primary source with a working link was found.

### Adding relators presents the corresponding quotient group

**Remember:** To kill more words, add them to the relator list.

*True by definition.* MSC 20F05 (Generators, relations, and presentations of groups), 20E05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A relator is a word in the generators that the presentation sets equal to the identity. The presented group is the quotient of the free group on the generators by the smallest normal subgroup containing the relators.

**Problem.** Adding words to the relator list presents the quotient of the old group by the normal subgroup generated by those words.

**How the definition helps.** In the quotient construction, adding relators enlarges the normal subgroup by exactly the added words and their conjugates (our own). Taking that quotient in two stages gives the stated group by the third isomorphism theorem (our own). In the alternative description by maps out, the same step requires maps to send the added words to the identity (our own).

**Wikipedia:** [Presentation of a group](https://en.wikipedia.org/wiki/Presentation_of_a_group). It says: “take the quotient of Fₛ by the smallest normal subgroup that contains each element of R.”

**Sources:** none listed. No primary source with a working link was found.

### Defining presented groups by maps out shows defined generators change nothing

**Remember:** An extra generator defined by an old word gives no new choices.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A group with generators S and relators R has the following mapping property. For every group H, each assignment S → H making all words in R evaluate to the identity extends uniquely to a homomorphism.

**Problem.** Adding a generator y with the relation y = w for a word w in the old generators gives an isomorphic presented group.

**How the definition helps.** With this definition, it is enough to compare the maps out of the two presentations. Each valid assignment of the old generators allows exactly one image for y, namely the image of w (our own). So the valid assignments match for every target group, and the Yoneda lemma makes the groups isomorphic (our own). The work moves to proving that the free group quotient has this mapping property.

**Wikipedia:** [Tietze transformations](https://en.wikipedia.org/wiki/Tietze_transformations). It says: “Given a presentation it is possible to add a new generator that is expressed as a word in the original generators.”

**Sources:**

- [Heinrich Tietze, Über die topologischen Invarianten mehrdimensionaler Mannigfaltigkeiten (1908).](https://doi.org/10.1007/bf01736688)

### Defining presented groups by maps out shows joined presentations give free products

**Remember:** Separate relations on separate generators impose no rule between the factors.

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 20E06. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A group with generators S and relators R has the following mapping property. For every group H, each assignment S → H making all words in R evaluate to the identity extends uniquely to a homomorphism.

**Problem.** Let each group Gᵢ have a presentation ⟨Sᵢ \| Rᵢ⟩. Then the disjoint union of the Sᵢ and of the Rᵢ presents the free product of the Gᵢ.

**How the definition helps.** Assignments on disjoint generator sets can be chosen independently (our own). Each assignment must satisfy exactly its own relators, so it specifies one homomorphism Gᵢ → H (our own). For every target H, these are precisely the data defining a homomorphism from the free product (our own).

**nLab:** [free product of groups](https://ncatlab.org/nlab/show/free+product+of+groups). It says: “If all the Gᵢ have group presentations, then their free product ⋆ᵢ Gᵢ has a group presentation as follows:”

**Sources:** none listed. No primary source with a working link was found.

### Commutators act coordinatewise so direct products preserve solvability

**Remember:** Take commutators in each coordinate until both coordinates reach the identity.

*True by definition.* MSC 20F16 (Solvable groups, supersolvable groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** A solvable group reaches the identity subgroup when we repeatedly take the subgroup generated by its commutators x⁻¹y⁻¹xy. In a direct product, multiplication is coordinatewise.

**Problem.** A direct product of two solvable groups is solvable.

**How the definition helps.** The derived-series test replaces the search for a chain with abelian factors by a calculation in each coordinate (our own). A commutator in the product is a pair of commutators (our own). Using identity elements in either coordinate recovers both commutator subgroups independently (our own). Thus every derived term is a product, and the two series eventually reach the identity (our own).

**Paper or page:** [Direct Product of Solvable Groups is Solvable](https://proofwiki.org/wiki/Direct_Product_of_Solvable_Groups_is_Solvable). It says: “Then their (external) direct product G × H is also solvable.”

**Sources:** none listed. No primary source with a working link was found.

### Defining solvable groups as stacked abelian extensions makes extensions stay solvable

**Remember:** Solvable groups are stacks of abelian layers, so two stacks make one stack.

*True by definition.* MSC 20F16 (Solvable groups, supersolvable groups), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** The solvable groups form the smallest class of groups containing all abelian groups and closed under extensions. An extension of Q by N has a normal subgroup isomorphic to N with quotient isomorphic to Q.

**Problem.** Let N be a normal subgroup of G. If N and G/N are solvable, then G is solvable.

**How the definition helps.** Closure under extensions gives the assertion directly (our own). This definition agrees with termination of the derived series (our own). If the quotient series ends after k steps, the kth derived subgroup lies in N, whose derived series finishes the proof (our own). Conversely, a terminating derived series builds the group by extensions with abelian factors (our own).

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

**How the definition helps.** A finite chain with abelian quotients gives Galois’s criterion a single group condition (our own). After adjoining the required roots of unity, adjoining one radical gives a cyclic extension (our own). Galois’s solvability theorem relates the existence of a radical tower to solvability of the splitting field’s Galois group (our own).

**Wikipedia:** [Solvable group](https://en.wikipedia.org/wiki/Solvable_group). It says: “Historically, the word "solvable" arose from Galois theory and the proof of the general unsolvability of quintic equations.”

**Sources:**

- [J. S. Milne, Fields and Galois Theory, course notes (2022), p. 45](https://www.jmilne.org/math/CourseNotes/FT.pdf)

### The derived series passes solvability to subgroups and quotients

**Remember:** Commutators stay in subgroups and pass through quotient maps.

*True by definition.* MSC 20F16 (Solvable groups, supersolvable groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The derived series starts with the group and replaces each term by the subgroup generated by all commutators x⁻¹y⁻¹xy in that term. A group is solvable if this reaches the identity subgroup after finitely many steps.

**Problem.** Subgroups and quotient groups of a solvable group are solvable.

**How the definition helps.** The derived series tracks subgroups and quotients without requiring a separate chain of abelian factors for each group (our own). A homomorphism sends each commutator to the commutator of its images (our own). Each derived subgroup therefore lies in the corresponding original term under inclusion, and maps onto the corresponding quotient term under projection (our own). Once the original series reaches the identity, both other series have reached it (our own).

**nLab:** [solvable group](https://ncatlab.org/nlab/show/solvable+group). It says: “A group is solvable if the series of groups produced by repeatedly taking the commutator subgroup, the derived series, terminates with the trivial group after finitely many steps.”

**Paper or page:** [Subgroup of Solvable Group is Solvable](https://proofwiki.org/wiki/Subgroup_of_Solvable_Group_is_Solvable). It says: “Then H is solvable.”

**Sources:** none listed. No primary source with a working link was found.

### Defining nilpotent groups as iterated central extensions makes central extensions stay nilpotent

**Remember:** A central kernel adds at most one step to nilpotency.

*True by definition.* MSC 20F18 (Nilpotent groups), 20E22. arXiv math.GR. Level 2: later undergraduate.

**Definition.** A group is nilpotent if finitely many central extensions build it from the trivial group. Each step has a surjection onto the previous group whose kernel lies in the center. The nilpotency class is the least number of steps.

**Problem.** Let G be a central extension of a nilpotent group Q. Then G is nilpotent. Its nilpotency class, the least number of steps needed, is at most one more than that of Q.

**How the definition helps.** With this definition the theorem holds by definition, since G adds one more central extension, and so does the bound on the class. The work moves to a comparison with the usual definition (our own summary). A chain of central extensions gives a central series, and the lower central series descends at least as fast as any central series. So both definitions give the same groups and the same class.

**nLab:** [nilpotent group](https://ncatlab.org/nlab/show/nilpotent+group). It says: “If 1 → G′ → G → G″ → 1 is a central extension (so that in particular, G′ is abelian) and G″ is nilpotent, then G is nilpotent.”

**Sources:** none listed. No primary source with a working link was found.

### Nilpotence makes normalizers grow

**Remember:** The first central layer escaping a subgroup supplies a new normalizer element.

*Rules out counterexamples.* MSC 20F18 (Nilpotent groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Start with the identity subgroup. At each step take the inverse image of the center of the quotient by the current subgroup. A group is nilpotent if this process reaches the whole group in finitely many steps.

**Problem.** Every proper subgroup H of a finite nilpotent group is strictly contained in its normalizer. The normalizer consists of the elements whose conjugation preserves H.

**How the definition helps.** Choose g outside H in the first upper central layer that escapes H (our own). For h ∈ H, both ghg⁻¹h⁻¹ and g⁻¹hgh⁻¹ lie in the preceding layer, hence in H (our own). Thus gHg⁻¹ = H, so the normalizer strictly contains H (our own). In S₃ the subgroup generated by (12) equals its normalizer (our own).

**Wikipedia:** [Nilpotent group](https://en.wikipedia.org/wiki/Nilpotent_group). It says: “This is called the normalizer property and can be phrased simply as "normalizers grow".”

**Sources:** none listed. No primary source with a working link was found.

### Artin’s presentation gives braid groups infinite cyclic abelianization

**Remember:** Once generators commute, the braid relation identifies neighboring generators.

*True by definition.* MSC 20F36 (Braid groups; Artin groups). arXiv math.GR, math.GT. Level 2: later undergraduate.

**Definition.** The Artin presentation of Bₙ has generators σ₁ through σₙ₋₁. Nonadjacent generators commute, and each adjacent pair s = σᵢ and t = σᵢ₊₁ satisfies sts = tst.

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

### Missing Coxeter edges split the group into direct factors

**Remember:** Disconnected components commute without mixing.

*True by definition.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A Coxeter diagram presents a group by generators that square to the identity. Each pair has a label m specifying the relation that its product raised to m equals the identity. A missing edge means m = 2, and an infinite label means no relation for that pair.

**Problem.** A Coxeter group with a finite diagram is the direct product of the Coxeter groups of its connected components.

**How the definition helps.** Across components all generators commute, and those are the only relations linking the components (our own). The presentation of the direct product has exactly these relations (our own). For a geometric reflection group, the work goes into proving that the diagram gives a full presentation (our own).

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “the product of two Coxeter groups is specified by the disjoint union of their Coxeter diagrams.”

**Sources:** none listed. No primary source with a working link was found.

### Separating mirrors give word length in a finite reflection group

**Remember:** Every separating mirror must be crossed once in a shortest path.

*Makes the theorem clean to state or prove.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** For a finite real reflection group, a chamber is a connected component of the complement of all reflection mirrors. Fix a chamber C and take the reflections in its walls as generators.

**Problem.** The fewest generators needed to express an element g equals the number of mirrors separating C from its image gC.

**How the definition helps.** Each letter crosses one wall, so each separating mirror costs a letter (our own). A suitably chosen straight segment crosses those mirrors once each and avoids intersections of mirrors (our own). The work goes into proving that the group acts freely and transitively on the chambers, so the path determines the required element (our own).

**Wikipedia:** [Reflection group](https://en.wikipedia.org/wiki/Reflection_group). It says: “The reflections in the faces of a fixed fundamental "chamber" are generators”

**Sources:** none listed. No primary source with a working link was found.

### Two mirrors encode a dihedral group by their angle

**Remember:** Pair the mirrors to make the one-step rotation.

*True by definition.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A Coxeter presentation on two mirrors uses generators s and t with s² = t² = 1. For an angle π/m between the mirrors, impose the single extra relation (st)ᵐ = 1.

**Problem.** For each integer m ≥ 2, the two-generator presentation gives the dihedral group of order 2m.

**How the definition helps.** The defining relations reduce every word to a power of st or such a power followed by s (our own). Reducing the exponent modulo m leaves at most 2m words (our own). In the mirror model, st rotates by 2π/m, and composing its m powers with s gives m distinct reflections (our own). Thus all 2m words represent different elements (our own).

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “where π/mᵢⱼ is the dihedral angle between Hᵢ and Hⱼ.”

**Sources:**

- [H. S. M. Coxeter, Discrete Groups Generated by Reflections, 1934](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/Coxeter.1934.pdf)

### A full period lattice makes the wallpaper point group finite

**Remember:** A linear part preserves lengths and sends a period basis into the lattice.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Define the point group of a wallpaper group to be the linear parts of all its isometries. The translation lattice consists of the integer combinations of two independent period vectors.

**Problem.** The wallpaper point group is finite and is isomorphic to the wallpaper group divided by its translation subgroup.

**How the definition helps.** Each linear part sends a lattice basis vector to a lattice vector of the same length, leaving only finitely many choices (our own). Composition multiplies linear parts and the identity linear part is exactly a translation (our own). The work goes into proving the discrete periods form a lattice and that conjugating translations preserves it (our own).

**nLab:** [wallpaper group](https://ncatlab.org/nlab/show/wallpaper+group). It says: “is generated by two linearly independent vectors”

**Sources:** none listed. No primary source with a working link was found.

### Complex affine forms classify all plane isometries

**Remember:** A complex coefficient records the turn, and a bar records the flip.

*True by definition.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Use complex coordinates in the plane. The complex affine forms for isometries are z ↦ az + b and z ↦ a z̄ + b, where \|a\| = 1. The bar denotes conjugation, which reflects across the real axis.

**Problem.** Every plane isometry is a translation, rotation, reflection or glide reflection. A glide reflection combines reflection with a nonzero shift along the mirror, and the identity counts as a zero translation.

**How the definition helps.** In the first form, a = 1 gives a translation, and otherwise b/(1 − a) is a rotation center (our own). In the second form, choose axes in which the linear part is conjugation (our own). The vertical shift moves the mirror by half that shift, and the horizontal shift gives the glide (our own). The work goes into proving the two complex forms capture every distance-preserving map (our own).

**Wikipedia:** [Euclidean plane isometry](https://en.wikipedia.org/wiki/Euclidean_plane_isometry). It says: “It can be shown that there are four types of Euclidean plane isometries.”

**Sources:** none listed. No primary source with a working link was found.

### Discreteness gives wallpaper groups a lattice of periods

**Remember:** Two periods give a bounded cell, and discreteness keeps it finite.

*Rules out counterexamples.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Define a wallpaper group as a discrete group of plane isometries with two independent translations. Discrete means the identity is isolated, so nonzero translations do not accumulate at zero.

**Problem.** The translation vectors of a wallpaper group form a lattice. Every vector in it is an integer combination of two independent period vectors.

**How the definition helps.** Discreteness separates distinct periods by a fixed positive distance, so only finitely many fit inside a bounded parallelogram (our own). Subtracting multiples of two independent periods moves every period into their parallelogram, so their integer combinations have finite index (our own). The structure theorem for finitely generated abelian groups then gives a basis of two periods (our own). Translations by rational pairs show why discreteness matters (our own).

**Wikipedia:** [Wallpaper group](https://en.wikipedia.org/wiki/Wallpaper_group). It says: “contains two linearly independent translations”

**Sources:** none listed. No primary source with a working link was found.

### Orbifold feature costs reduce wallpaper classification to one sum

**Remember:** A wallpaper signature has total cost two.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** An orbifold signature records handles, crosscaps, mirror boundaries, cone points and mirror corners in the quotient by a wallpaper group. Count each handle twice and each crosscap or mirror boundary once. Each order-n cone point contributes 1 − 1/n, and each mirror corner of angle π/n contributes half that amount.

**Problem.** Up to affine equivalence, the 17 wallpaper groups correspond exactly to the orbifold signatures with total cost 2.

**How the definition helps.** The feature sum equals two precisely when the orbifold Euler characteristic vanishes (our own). Enumerating compact Euclidean orbifold signatures gives seven without mirrors and ten with mirrors (our own). The classification of Euclidean two-dimensional orbifolds identifies each signature with one affine wallpaper group type (our own).

**Wikipedia:** [Orbifold notation](https://en.wikipedia.org/wiki/Orbifold_notation). It says: “the 17 wallpaper groups are exactly those with the sum of the feature values equal to 2.”

**Sources:**

- [John H. Conway and Daniel H. Huson, The Orbifold Notation for Two-Dimensional Groups, 2002, Table II](https://doi.org/10.1023/A:1015851621002)

### Orbit counting restricts the pole orders of finite rotation groups

**Remember:** Count each rotation twice, once at each end of its axis.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A pole is a unit vector fixed by a nonidentity member of a finite group G of rotations about the origin in three dimensions. Its orbit contains all its images under G. Its stabilizer contains all members of G fixing it.

**Problem.** For nontrivial G, take one pole from each orbit and list the stabilizer sizes in increasing order. The possibilities are (n,n), (2,2,n), (2,3,3), (2,3,4) and (2,3,5), with n ≥ 2.

**How the definition helps.** Poles count each nonidentity rotation twice, once at each end of its axis (our own). An orbit with stabilizer size m contains \|G\|/m poles, each fixed by m − 1 nonidentity rotations (our own). Dividing the total by \|G\| gives a sum of terms 1 − 1/m equal to 2 − 2/\|G\| (our own). Each term is at least one half, and checking the two-term and three-term sums gives the lists (our own).

**Paper or page:** [H113: Action](https://venhance.github.io/napkin/Napkin.pdf). It says: “There is a natural bijection between 𝒪 and left cosets.”

**Sources:** none listed. No primary source with a working link was found.

### Rotation and reflection cosets classify finite plane point groups

**Remember:** The determinant splits rotations from the coset of a single reflection.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A finite plane point group is a finite subgroup of the orthogonal group of the real plane. Its rotation subgroup consists of elements with determinant +1, and every element with determinant −1 is a reflection.

**Problem.** Every finite plane point group consists either of rotations generated by one rotation, or of these rotations and their products with one reflection. The latter groups are called dihedral.

**How the definition helps.** Multiplying any two reflections gives a rotation, so one chosen reflection accounts for all the others (our own). In a finite rotation group, the smallest positive angle generates all angles by division with remainder (our own). If there is no positive angle, the rotation group contains only the identity (our own). A reflection reverses rotation angles, giving the dihedral multiplication rule (our own).

**nLab:** [dihedral group](https://ncatlab.org/nlab/show/dihedral+group). It says: “It may be defined as the symmetry group of a regular n-gon in the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Splitting the shift gives the screw axis of a motion

**Remember:** Move the axis to absorb the sideways shift.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Define a screw displacement as rotation about a line followed by translation along it. Allow a zero angle or a zero translation.

**Problem.** Every orientation-preserving isometry of Euclidean three-space is a screw displacement.

**How the definition helps.** Moving the axis absorbs the part of the shift perpendicular to it (our own). For linear rotation A, moving its axis by p adds the shift (I − A)p (our own). Euler’s theorem supplies an axis, and for a nonzero rotation angle I − A is invertible on the perpendicular plane (our own). The remaining shift runs along the axis, while pure translations use zero angle (our own).

**Wikipedia:** [Chasles' theorem (kinematics)](https://en.wikipedia.org/wiki/Chasles%27_theorem_%28kinematics%29). It says: “The displacement D of the center of mass can be decomposed into components parallel and perpendicular to the axis.”

**Sources:** none listed. No primary source with a working link was found.

### The lattice basis rules out fivefold wallpaper rotations

**Remember:** Integer matrix entries leave only five possible rotation orders.

*Rules out counterexamples.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** The translation lattice of a wallpaper pattern consists of all vectors that shift the pattern onto itself. These are exactly the integer combinations of two independent period vectors, called a lattice basis.

**Problem.** Every rotation preserving a wallpaper pattern has order 1, 2, 3, 4 or 6. The order counts how many repetitions first give the identity.

**How the definition helps.** The linear part of a rotation preserves period vectors, so its matrix in a lattice basis has integer entries (our own). Its trace, the sum of its diagonal entries, is therefore an integer (our own). In perpendicular unit coordinates the same trace equals twice the cosine of the angle, giving the five orders (our own). A regular pentagon admits fivefold rotation because its symmetry group requires no such lattice (our own).

**Wikipedia:** [Crystallographic restriction theorem](https://en.wikipedia.org/wiki/Crystallographic_restriction_theorem). It says: “In 2D and 3D every rotation is a planar rotation, and the trace is a function of the angle alone.”

**Sources:** none listed. No primary source with a working link was found.

### The shortest period reduces frieze classification to seven cases

**Remember:** The horizontal glide offset is either zero or half a period.

*Makes the theorem clean to state or prove.* MSC 20H15 (Other geometric groups, including crystallographic groups). arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** In a frieze group, the translations are integer multiples of one shortest horizontal period. Its point group consists of the linear parts of its symmetries, which can reverse either coordinate direction.

**Problem.** There are exactly seven frieze group types up to a change of scale and Euclidean coordinates.

**How the definition helps.** Using the shortest period as one unit leaves only two possible glide offsets along a horizontal mirror (our own). Squaring the glide gives an integer translation, so its offset modulo one is zero or one half (our own). The trivial, vertical-reflection and half-turn point groups each give one type, while horizontal-reflection and full point groups each give two (our own). Choosing origins removes other offsets, and examples realize all seven types (our own).

**Wikipedia:** [Frieze group](https://en.wikipedia.org/wiki/Frieze_group). It says: “There are seven frieze groups, listed in the summary table.”

**Sources:**

- [John H. Conway and Daniel H. Huson, The Orbifold Notation for Two-Dimensional Groups, 2002, Table IV](https://doi.org/10.1023/A:1015851621002)

### Divisibility makes abelian invariant factors unique

**Remember:** Sort prime powers by size and line up the largest ends.

*Rules out counterexamples.* MSC 20K01 (Finite abelian groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** The invariant-factor form for a finite abelian group uses only cyclic factors of order greater than one. Each order must divide the next.

**Problem.** The finite cyclic orders in invariant-factor form are unique for each finite abelian group.

**How the definition helps.** Divisibility forces the powers of each prime into increasing order, with missing powers only at the start (our own). The work goes into uniqueness of the prime-power factors and regrouping coprime orders by the Chinese remainder theorem (our own). Without divisibility, a cyclic group of order six also has cyclic factors of orders two and three (our own). Trivial factors could be inserted anywhere if they were allowed (our own).

**Wikipedia:** [Finitely generated abelian group](https://en.wikipedia.org/wiki/Finitely_generated_abelian_group). It says: “are uniquely determined by G (here with a unique order).”

**Sources:** none listed. No primary source with a working link was found.

### Prime-power torsion identifies the parts of a finite abelian group

**Remember:** Test which prime power sends an element to zero.

*Makes the theorem clean to state or prove.* MSC 20K01 (Finite abelian groups), 20K10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a prime p, the p-primary subgroup of an abelian group consists of all elements killed by a power of p. Here a power kills an element if multiplying it by that power gives zero.

**Problem.** In a finite abelian group, each element is uniquely a sum of one element from each p-primary subgroup, taking primes dividing the group order.

**How the definition helps.** The p-power test identifies each summand without generators (our own). For a nontrivial group of order n, set mₚ = n/pᵉ for each maximal prime power pᵉ dividing n (our own). The mₚ have greatest common divisor one, so Bézout expresses each element as a sum of multiples mₚx killed by pᵉ (our own). Multiplication by mₚ kills the other parts and is invertible on the p-part, proving uniqueness, while the trivial group has the empty sum (our own).

**Wikipedia:** [Torsion subgroup](https://en.wikipedia.org/wiki/Torsion_subgroup). It says: “the direct sum of its p-power torsion subgroups over all prime numbers p:”

**Sources:** none listed. No primary source with a working link was found.

### Successive quotient sizes count cyclic factors

**Remember:** Each cyclic factor contributes one factor of p until it vanishes.

*True by definition.* MSC 20K01 (Finite abelian groups), 20K10. arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a finite abelian p-group A and integer k ≥ 1, the kth quotient is pᵏ⁻¹A/pᵏA. Here pʲA consists of all pʲx with x ∈ A.

**Problem.** The sizes of these quotients determine the number of nontrivial cyclic factors of each order in a cyclic decomposition of A.

**How the definition helps.** Each cyclic factor of order pᵉ contributes a factor of p to the first e quotient sizes and one thereafter (our own calculation). Thus if the kth quotient has size pᵈ, exactly d factors have order at least pᵏ. Subtract the count for the next quotient to count factors of order exactly pᵏ. The structure theorem supplies the decomposition into cyclic factors.

**Wikipedia:** [Finitely generated abelian group](https://en.wikipedia.org/wiki/Finitely_generated_abelian_group). It says: “A primary cyclic group is one whose order is a power of a prime.”

**Paper or page:** [Theorem 2.4. (Fundamental theorem of finitely generated abelian groups)](https://venhance.github.io/napkin/Napkin.pdf). It says: “This decomposition is unique up to permutation”

**Sources:** none listed. No primary source with a working link was found.

### The integer quotient model lists all subgroups of a cyclic group

**Remember:** Subgroups between nℤ and ℤ correspond to divisors of n.

*True by definition.* MSC 20K01 (Finite abelian groups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Model a finite cyclic group of order n as ℤ/nℤ, the integers added modulo n. This replaces the description by powers of a chosen generator.

**Problem.** For every positive divisor d of n, a cyclic group of order n has exactly one subgroup of order d. It has no other subgroups.

**How the definition helps.** The quotient model lets us take all integer representatives of each subgroup at once (our own). These representatives form a subgroup of ℤ containing nℤ (our own). Division with remainder shows that they are exactly the multiples of their least positive member, which divides n (our own). For order d that member must be n/d, since its multiples give exactly d distinct residues (our own).

**nLab:** [cyclic group](https://ncatlab.org/nlab/show/cyclic+group). It says: “this is the subgroup generated by n/d”

**Paper or page:** [Bijection from Divisors to Subgroups of Cyclic Group](https://proofwiki.org/wiki/Bijection_from_Divisors_to_Subgroups_of_Cyclic_Group). It says: “Then ϕ is a bijection.”

**Sources:** none listed. No primary source with a working link was found.

### The torsion subgroup leaves a torsion-free quotient

**Remember:** If a positive multiple is torsion, the original element is torsion.

*Rules out counterexamples.* MSC 20K10 (Torsion groups, primary groups and generalized primary groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** In an abelian group, the torsion subgroup T consists of all elements with a positive multiple equal to zero. A group is torsion-free if only zero has this property.

**Problem.** For every abelian group A, the quotient A/T is torsion-free.

**How the definition helps.** Any representative whose positive multiple is torsion already has finite order (our own). Indeed, a further positive multiple sends that representative to zero (our own). Thus a coset of finite order has a representative in T and is zero (our own). Commutativity makes T a subgroup, whereas two distinct reflections of a line have finite order and their product has infinite order (our own).

**nLab:** [torsion subgroup](https://ncatlab.org/nlab/show/torsion+subgroup). It says: “is the subgroup of all those elements g ∈ G, which have finite order,”

**Sources:** none listed. No primary source with a working link was found.

### Units modulo n are the automorphisms of a cyclic group

**Remember:** Adding copies of one makes every map multiplication by one residue.

*True by definition.* MSC 20K30 (Automorphisms, homomorphisms, endomorphisms, etc. for abelian groups), 20A05. arXiv math.GR. Level 2: later undergraduate.

**Definition.** An automorphism is an invertible map from a group to itself that preserves its operation. Identify powers of a generator with their exponents modulo n, so multiplication becomes addition. A unit modulo n is a residue with a multiplicative inverse.

**Problem.** The automorphism group of a cyclic group of order n is isomorphic to the multiplicative group of units modulo n.

**How the definition helps.** In the integer quotient model, every homomorphism from the cyclic group to itself is multiplication by its value at 1 (our own). Composing these maps multiplies their residues, and a map has an inverse exactly when the residue does (our own). The work moves to matching the original cyclic group with ℤ/nℤ (our own).

**Wikipedia:** [Cyclic group](https://en.wikipedia.org/wiki/Cyclic_group). It says: “This is the multiplicative group of units of the ring Z/nZ”

**Paper or page:** [Order of Automorphism Group of Cyclic Group](https://proofwiki.org/wiki/Order_of_Automorphism_Group_of_Cyclic_Group). It says: “order(Aut Cₙ) = ϕ(n)”

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

**Definition.** For a commutative monoid M, its group completion consists of equivalence classes of pairs in M × M, with componentwise addition. Pairs (a,b) and (c,d) represent the same class exactly when some k ∈ M satisfies a+d+k = b+c+k.

**Problem.** A commutative monoid M maps to its group completion by a ↦ (a, 0). This map is injective exactly when M has cancellation, that is, a + k = b + k implies a = b.

**How the definition helps.** The classes of (a,0) and (b,0) agree exactly when a+k = b+k for some k ∈ M (our own). Injectivity therefore says precisely that every such equality implies a = b (our own).

**Wikipedia:** [Grothendieck group](https://en.wikipedia.org/wiki/Grothendieck_group). It says: “For a commutative monoid M, the map i : M → K is injective if and only if M has the cancellation property”

**Sources:** none listed. No primary source with a working link was found.

### Heaps must be inhabited to have a structure group

**Remember:** A heap is a group that forgot its unit, but it still has an element.

*Rules out counterexamples.* MSC 20N10 (Ternary systems (heaps, semiheaps, heapoids, etc.)), 20J15. arXiv math.GR, math.CT. Level 2: later undergraduate.

**Definition.** A heap is a nonempty set with a ternary operation t satisfying t(x,x,y) = y = t(y,x,x) for all x,y. For all a,b,c,d,e it satisfies t(t(a,b,c),d,e) = t(a,b,t(c,d,e)).

**Problem.** Every heap is a torsor for a group, its structure group. Also, the category of heaps is equivalent to the category of pairs (G, H) of a group G and a G-torsor H.

**How the definition helps.** Nonemptiness supplies e, and the heap laws make t(x,e,y) a group product with identity e and inverse t(e,x,e) (our own). Its left translations z ↦ t(a,b,z) act freely and transitively (our own). Conversely, a left torsor gives t(a,b,c) = gc for the unique g sending b to a (our own). Heap maps send translations indexed by (a,b) to those indexed by their images, yielding the corresponding equivariant maps and group homomorphisms (our own).

**nLab:** [heap](https://ncatlab.org/nlab/show/heap), [torsor](https://ncatlab.org/nlab/show/torsor). It says: “However, in this case, some of the above theorems relating heaps to groups break down.”

**Sources:**

- [Thomas Booker, Ross Street, Torsors, herds and flocks, Journal of Algebra 330 (2011) 346–374, arXiv:0912.4551](https://arxiv.org/abs/0912.4551)
- [Peter T. Johnstone, The 'closed subgroup theorem' for localic herds and pregroupoids, Journal of Pure and Applied Algebra 70 (1991) 97–106](https://doi.org/10.1016/0022-4049(91)90010-y)

### Subgroup marks determine finite actions

**Remember:** Count fixed points subgroup by subgroup to recover the orbits.

*True by definition.* MSC 20B05 (General theory for finite permutation groups), 19A22. arXiv math.GR. Level 3: graduate.

**Definition.** The mark of a subgroup H on a finite group action counts points fixed by all of H. Use all subgroup marks rather than only the fixed-point counts of individual elements.

**Problem.** Two finite sets with an action of a finite group G are isomorphic as G-sets if all their marks agree.

**How the definition helps.** Subgroup marks recover orbit multiplicities in descending order of stabilizer size (our own). An orbit G/K contributes to the H-mark only when a conjugate of H lies in K. Subtract the contributions already known from larger stabilizers (our own). Only type G/H can then contribute, and its H-mark is positive because H fixes the identity coset (our own).

**nLab:** [table of marks](https://ncatlab.org/nlab/show/table+of+marks). It says: “Hence any two finite G-sets are isomorphic precisely if they have the same Burnside marks”

**Wikipedia:** [Burnside ring](https://en.wikipedia.org/wiki/Burnside_ring). It says: “if H is not conjugate to a subgroup of K then m(K, H) = 0.”

**Sources:**

- [L. Solomon, The Burnside algebra of a finite group, 1967](https://doi.org/10.1016/S0021-9800(67)80064-4)

### Mackey functors defined on spans have the double coset formula built in

**Remember:** Compose spans by pullback and split the result into double-coset orbits.

*True by definition. Confidence: medium.* MSC 20C05 (Group rings of finite groups and their modules (group-theoretic aspects)), 18B10, 55N91. arXiv math.RT, math.AT. Level 3: graduate.

**Definition.** For a finite group G, use finite G-sets as objects and isomorphism classes of equivariant spans A ← U → B as arrows. Compose spans by pullback. A Mackey functor sends this category to an additive category and takes finite disjoint unions to products.

**Problem.** For J,K ≤ H ≤ G, restriction to J after transfer from K sums one term per double coset JxK in H. Each term restricts to K ∩ x⁻¹Jx, conjugates by x, and transfers from J ∩ xKx⁻¹ to J.

**How the definition helps.** The composite span has middle set the fiber product of G/J and G/K over G/H (our own). Its orbits have representatives (J,xK) indexed by J∖H/K, with stabilizers J ∩ xKx⁻¹ (our own). The two projections give the stated restriction, conjugation and transfer, and additivity sums the orbit contributions (our own).

**nLab:** [Mackey functor](https://ncatlab.org/nlab/show/Mackey+functor). It says: “writing Rᴴⱼ for the contravariant effect of in inclusion J ⊂ H and Iᴴⱼ for the covariant effect, M satisfies the double coset formula”

**Sources:**

- [H. Lindner, A remark on Mackey-functors, Manuscripta Mathematica 18 (1976) 273–278](https://doi.org/10.1007/BF01245921)
- [C. Barwick, Spectral Mackey functors and equivariant algebraic K-theory (I), Advances in Mathematics 304 (2017) 646–727, arXiv:1404.0108](https://arxiv.org/abs/1404.0108)
- [B. Guillou, J. P. May, Models of G-spectra as presheaves of spectra, arXiv:1110.3571 (2011)](https://arxiv.org/abs/1110.3571)

### Defining Temperley–Lieb algebras by planar diagrams makes their dimension Catalan

**Remember:** Count the planar pairings to get the dimension.

*True by definition.* MSC 20C08 (Hecke algebras and their representations), 05A15. arXiv math.QA, math.CO. Level 3: graduate.

**Definition.** Over a field k, choose δ ∈ k. The diagram algebra TLₙ(δ) has basis the noncrossing pairings of 2n boundary points, n on each of two opposite rectangle sides. Multiply by stacking rectangles and replacing each closed loop by δ.

**Problem.** The Temperley–Lieb algebra TLₙ(δ) has dimension equal to the nth Catalan number (2n)!/(n!(n + 1)!).

**How the definition helps.** In the diagram definition, the dimension is the number of basis diagrams (our own). Noncrossing pairings of 2n points satisfy the Catalan recurrence, found by splitting at the partner of the first point (our own). The work moves into the theorem that the diagram algebra has the generator presentation. That theorem shows that the generators span all diagrams and that no further relations hold.

**Wikipedia:** [Temperley–Lieb algebra](https://en.wikipedia.org/wiki/Temperley%E2%80%93Lieb_algebra). It says: “the vector space over noncrossing pairings of 2n points on two opposite sides of a rectangle”

**Sources:**

- [Presentations for Temperley-Lieb algebras](https://arxiv.org/abs/2101.02862v2)

### Endomorphisms make Hecke algebra multiplication associative

**Remember:** Composition gives associative multiplication before any convolution calculation.

*True by definition. Confidence: medium.* MSC 20C08 (Hecke algebras and their representations). arXiv math.RT. Level 3: graduate.

**Definition.** For a subgroup K of a finite group G and a field k, the permutation module k\[G/K\] has left cosets as basis. The group acts by left translation. Its Hecke algebra consists of G-equivariant linear self-maps, multiplied by composition.

**Problem.** The Hecke algebra is an associative unital algebra over k. It has a basis indexed by the double cosets KgK.

**How the definition helps.** The self-map definition makes associativity and the unit automatic because it uses composition (our own). In the function model one instead expands the two iterated convolution sums (our own). The comparison sends a function F to the operator with matrix entry F(x⁻¹y) at cosets xK and yK (our own). Equivariance says precisely that an entry depends only on the double coset Kx⁻¹yK (our own).

**nLab:** [Hecke algebra](https://ncatlab.org/nlab/show/Hecke+algebra). It says: “Typically the term refers to an algebra which is the endomorphisms of a permutation representation of a topological group”

**Wikipedia:** [Hecke algebra of a pair](https://en.wikipedia.org/wiki/Hecke_algebra_of_a_pair). It says: “When G is a finite group and K is any subgroup of G, then the Hecke algebra is spanned by double cosets of K\\G/K.”

**Sources:** none listed. No primary source with a working link was found.

### Hecke algebra commutativity detects repeated representations

**Remember:** A repeated irreducible representation gives a noncommutative matrix block.

*True by definition.* MSC 20C08 (Hecke algebras and their representations), 20C15. arXiv math.RT. Level 3: graduate.

**Definition.** Let K be a subgroup of a finite group G. The space ℂ\[G/K\] has basis the left cosets of K, which G permutes. Its Hecke algebra consists of linear self-maps commuting with G and uses composition as multiplication.

**Problem.** The Hecke algebra is commutative exactly when each irreducible representation occurs at most once in ℂ\[G/K\]. This is the criterion for a Gelfand pair.

**How the definition helps.** Maschke’s theorem splits the permutation space into irreducibles, grouped by type (our own). Schur’s lemma gives no maps between types and a full m × m matrix algebra for a type of multiplicity m (our own). Their product commutes exactly when every occurring type has multiplicity one (our own).

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

**Definition.** For H ≤ G finite, let A consist of the elements of ℂ\[G\] fixed under conjugation by every h ∈ H. The pair (G,H) is a strong Gelfand pair when multiplication in A is commutative.

**Problem.** If a finite group forms a strong Gelfand pair with a subgroup, it also does so with each intermediate subgroup.

**How the definition helps.** A larger subgroup imposes more conjugation symmetries, so its invariant sums form a subalgebra of the original commutative algebra (our own). They therefore still commute (our own). The matrix decomposition of the group algebra and Schur’s lemma identify commutativity with the absence of repeated components (our own).

**Paper or page:** [Strong Gelfand pairs of the sporadic groups and their extensions](https://arxiv.org/abs/2510.25790). It says: “Suppose K ≤ H ≤ G are groups. If (G, H) is not a strong Gelfand pair, then neither is (G, K).”

**Sources:** none listed. No primary source with a working link was found.

### Strong Gelfand pairs survive quotients

**Remember:** Passing to the quotient cannot create a repeated summand.

*True by definition.* MSC 20C15 (Ordinary representations and characters), 43A90. arXiv math.RT. Level 3: graduate.

**Definition.** For H ≤ G finite, (G,H) is a strong Gelfand pair if every irreducible complex G-representation restricts to a sum of pairwise nonisomorphic irreducible H-representations.

**Problem.** A strong Gelfand pair remains strong after quotienting both groups by a common normal subgroup of the larger group.

**How the definition helps.** Our own explanation uses restriction to read the quotient multiplicities without calculating convolutions. Every quotient representation gives a representation upstairs by composition with the quotient map. Both actions have exactly the same invariant subspaces, even after restriction to the smaller group. The equivalence with the convolution definition uses the decomposition of the group algebra into matrix blocks.

**Paper or page:** [Almost Commutative Terwilliger Algebras II: Strong Gelfand Pairs](https://arxiv.org/abs/2509.16174). It says: “Suppose N ≤ H ≤ G with N ◁ G. If (G,H) is a SGP, then (G/N,H/N) is a SGP.”

**Sources:** none listed. No primary source with a working link was found.

### Virtual representations let Brauer write every representation from one-dimensional ones

**Remember:** Allow subtraction, and induced lines generate every representation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C15 (Ordinary representations and characters). arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** The complex representation ring of a finite group uses isomorphism classes of finite-dimensional complex representations, with addition by direct sum and multiplication by tensor product. Its elements are formal differences, with \[V ⊕ W\] = \[V\] + \[W\].

**Problem.** In the representation ring, every finite-dimensional complex representation of a finite group is an integer combination of representations induced from one-dimensional subgroup representations.

**How the definition helps.** Formal differences allow the negative multiplicities needed in an induction formula (our own). Brauer’s induction theorem proves that characters induced from one-dimensional subgroup representations generate the additive group of the representation ring (our own).

**nLab:** [Brauer induction theorem](https://ncatlab.org/nlab/show/Brauer+induction+theorem). It says: “finite-dimensional linear representations V of a finite group G all arise as virtual combinations of induced representations … of just 1-dimensional representations”

**Sources:**

- [Brauer, R. (1947). On Artin's L-series with general group characters. Annals of Mathematics 48.](https://doi.org/10.2307/1969183)

### Brauer characters lift eigenvalues to complex numbers in characteristic p

**Remember:** Replace each eigenvalue by its complex twin, then add.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C20 (Modular representations and characters). arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** Fix a group isomorphism from the roots of unity in an algebraically closed field of characteristic p to the prime-to-p complex roots of unity. At each element of order prime to p, the Brauer character sums the matched complex eigenvalues with multiplicity.

**Problem.** For a finite-dimensional representation of a finite group, its Brauer character determines its composition factors with multiplicity. On elements of order prime to p, each ordinary irreducible character is a unique nonnegative integer combination of irreducible Brauer characters.

**How the definition helps.** Lifting eigenvalues lets their multiplicities add as ordinary integers in each short exact sequence (our own). Brauer’s linear independence theorem makes the coefficients of the simple characters unique (our own). Modular reduction of an invariant lattice gives a representation whose Brauer character agrees with the ordinary character on prime-to-p elements (our own). Its composition multiplicities give the required nonnegative coefficients (our own).

**Wikipedia:** [Modular representation theory](https://en.wikipedia.org/wiki/Modular_representation_theory). It says: “the Brauer character of a representation assigns to each group element of order coprime to p the sum of complex roots of unity corresponding to the eigenvalues (including multiplicities) of that element in the given representation.”

**Sources:**

- [Brauer, R., Nesbitt, C. (1941). On the modular characters of groups. Annals of Mathematics 42.](https://doi.org/10.2307/1968918)

### Projective representations become ordinary ones on a central extension

**Remember:** Enlarge the group by scalars and the scalar ambiguity disappears.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20C25 (Projective representations and multipliers), 20E22. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** For a nonzero vector space V over F, a projective representation is a homomorphism ρ from G to GL(V) modulo the nonzero scalar matrices. A central extension is a surjective group homomorphism whose kernel lies in the center of its domain.

**Problem.** Every projective representation of G is the image of an ordinary linear representation of some central extension of G. Whether it lifts to G itself is measured by a class in the second cohomology group H²(G, F\*).

**How the definition helps.** The pairs (g,A) with A representing ρ(g) form a group under componentwise multiplication (our own). Projection onto G has central scalar kernel, and projection onto GL(V) gives the required linear representation (our own). Representatives L(g) satisfy L(g)L(h) = c(g,h)L(gh), with associativity giving the cocycle law for c (our own). Rescaling the representatives changes c by a coboundary, so a lift exists precisely when its class vanishes (our own).

**Wikipedia:** [Projective representation](https://en.wikipedia.org/wiki/Projective_representation). It says: “However, one can lift a projective representation ρ of G to a linear representation of a different group H, which will be a central extension of G.”

**Sources:**

- [Schur, I. (1904). Über die Darstellung der endlichen Gruppen durch gebrochen lineare Substitutionen. Journal für die reine und angewandte Mathematik 127.](https://doi.org/10.1515/crll.1904.127.20)

### The generalized Fitting subgroup always contains its own centralizer

**Remember:** Add the components, and the Fitting subgroup controls every finite group.

*Makes the theorem clean to state or prove.* MSC 20D25 (Special subgroups (Frattini, Fitting, etc.)), 20D35. arXiv math.GR. Level 3: graduate.

**Definition.** For finite G, let F(G) be its largest normal nilpotent subgroup. A component is a subnormal subgroup L equal to its commutator subgroup with L/Z(L) nonabelian simple. The generalized Fitting subgroup F\*(G) is generated by F(G) and all components.

**Problem.** For every finite group G, the centralizer of F\*(G) lies inside F\*(G). So G modulo the center of F\*(G) embeds in the automorphism group of F\*(G), and only finitely many groups have a given F\*(G).

**How the definition helps.** Including components gives the generalized Fitting theorem a uniform statement, even when a simple group has trivial F(G) (our own). That theorem gives C<sub>G</sub>(F\*(G)) ≤ F\*(G), so the centralizer equals Z(F\*(G)) (our own). Conjugation therefore embeds G/Z(F\*(G)) into Aut(F\*(G)) (our own). This bounds \|G\| for fixed F\*(G), leaving finitely many multiplication tables up to isomorphism (our own).

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

**Definition.** The graph model of a free group on k generators is the fundamental group of one vertex with k loop edges. Each generator traverses its own loop once.

**Problem.** A subgroup of finite index n in a free group of finite rank k is free of rank nk − n + 1.

**How the definition helps.** The covering corresponding to H has n vertices and n lifts of each of the k loop edges (our own). A spanning tree uses n − 1 edges (our own). The spanning-tree description of a graph’s fundamental group gives one free generator for each of the remaining nk − n + 1 edges (our own).

**nLab:** [Nielsen-Schreier theorem](https://ncatlab.org/nlab/show/Nielsen-Schreier+theorem). It says: “then H is free on n k − n + 1 generators.”

**Sources:**

- [Otto Schreier, Die Untergruppen der freien Gruppen (1927).](https://doi.org/10.1007/bf02952517)

### Banning edge flips gives stabilizer inclusions

**Remember:** No flips means each edge stabilizer lies in both vertex stabilizers.

*Rules out counterexamples.* MSC 20E08 (Groups acting on trees). arXiv math.GR. Level 3: graduate.

**Definition.** A tree action has no edge inversions if every element that preserves an edge also fixes both endpoints. A graph of groups attaches groups to vertices and edges and embeds each edge group into its endpoint groups.

**Problem.** When a group acts on a tree without edge inversions, the quotient graph records the orbits of vertices and edges. Its graph of stabilizer groups determines the acting group up to isomorphism.

**How the definition helps.** Without inversions, the stabilizer of each edge fixes both endpoints and embeds in their stabilizers (our own). Conjugation transports these inclusions to the chosen orbit representatives (our own). An involution flipping a single edge fixes neither endpoint, so those inclusions would fail (our own). The Bass–Serre theorem identifies the acting group with the fundamental group of the resulting graph of groups (our own).

**Paper or page:** [On acylindrical tree actions and outer automorphism group of Baumslag-Solitar groups](https://arxiv.org/abs/2501.01754v2). It says: “Then G can be identified with the fundamental group of a certain graph of groups (Γ, 𝒢), where Γ is the quotient graph X/G.”

**Sources:**

- [J.-P. Serre, Trees, 1980](https://doi.org/10.1007/978-3-642-61856-7)

### Graphs of groups make the Kurosh subgroup theorem a short corollary

**Remember:** Let the subgroup act on the tree, then read off its pieces.

*Makes the theorem clean to state or prove.* MSC 20E08 (Groups acting on trees), 20E06. arXiv math.GR. Level 3: graduate.

**Definition.** A graph of groups assigns a group to every vertex and edge. For each end of each edge, it specifies an injective homomorphism from the edge group to the vertex group.

**Problem.** Kurosh (1934): let H be a subgroup of a free product A ∗ B. Then H is a free product of a free group and of intersections of H with conjugates of A and B.

**How the definition helps.** Restrict the Bass–Serre tree action of A ∗ B to H (our own). Its edge stabilizers are trivial, and its vertex stabilizers are intersections of H with conjugates of the factors. The Bass–Serre structure theorem gives their free product, taking one vertex per orbit, together with a free group (our own).

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

**Definition.** The profinite topology on G has all finite-index normal subgroups as a neighborhood basis at the identity. Its completion is the inverse limit of all finite quotient groups with their discrete topologies.

**Problem.** Let G be residually finite, so finite quotients distinguish its elements. In G, the profinite closure of a conjugacy class consists exactly of elements conjugate to its representative in the completion.

**How the definition helps.** The completion theorem embeds G densely in its compact Hausdorff completion with the profinite topology (our own). For fixed x in G, the continuous map h ↦ hxh⁻¹ has compact, hence closed, image there. Density makes the conjugates by G dense in that image. Intersecting the image with G gives the desired closure (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group), [profinite completion of a group](https://ncatlab.org/nlab/show/profinite+completion+of+a+group). It says: “Any group has a profinite completion, given by taking the projective limit of the group's quotients by its finite index normal subgroups.”

**Sources:** none listed. No primary source with a working link was found.

### Frattini quotients count pro-p generators

**Remember:** Generators are detected in the largest quotient that is a vector space over 𝔽ₚ.

*True by definition. Confidence: medium.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a prime p, a pro-p group G is an inverse limit of finite groups of p-power order. Its Frattini subgroup is the intersection of its maximal proper open subgroups. Topological generators generate a dense subgroup.

**Problem.** The minimum number of topological generators of a finitely generated pro-p group is the dimension of its Frattini quotient over 𝔽ₚ.

**How the definition helps.** Every proper closed subgroup lies in a maximal open subgroup, by passage to a finite p-group quotient (our own). Each maximal open subgroup is normal of index p, so the Frattini quotient embeds in a product of copies of 𝔽ₚ. Finite topological generation makes this vector space finite. A set generates densely exactly when its images span, so lifting a basis attains the minimum (our own).

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

**Definition.** A profinite group is an inverse limit of finite discrete groups. Its elements are tuples compatible with every transition map, with the topology inherited from the product.

**Problem.** An inverse limit of finite discrete groups is compact, Hausdorff and totally disconnected.

**How the definition helps.** Each compatibility equation defines a closed subset of the product, so the inverse limit is closed. Tychonoff’s theorem gives compactness. Distinct tuples differ in a finite discrete coordinate, whose fibers separate them by disjoint open and closed sets (our own).

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

**Remember:** Every automorphism is conjugation by exactly one group element.

*True by definition.* MSC 20E22 (Extensions, wreath products, and other compositions of groups). arXiv math.GR. Level 3: graduate.

**Definition.** A group is complete if conjugation identifies the group with its full automorphism group. This requires both a trivial center and that every automorphism come from conjugation.

**Problem.** If a normal subgroup N of G is complete, then G is the direct product of N and the elements that commute with N.

**How the definition helps.** Completeness assigns each g in G the unique element of N inducing the same conjugation on N (our own). This assignment is a homomorphism restricting to the identity on N. Its kernel centralizes N, and every g is a product of its assigned element and a kernel element (our own).

**Wikipedia:** [Complete group](https://en.wikipedia.org/wiki/Complete_group). It says: “If the kernel, N, is a complete group then the extension splits:”

**Sources:** none listed. No primary source with a working link was found.

### Counting extensions up to equivalence, not isomorphism, lets H² classify them

**Remember:** Keep track of the kernel and the quotient, and cohomology counts.

*Makes the theorem clean to state or prove.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** An extension 1 → K → G → H → 1 makes K a normal subgroup of G with quotient H. Two extensions G and G′ are equivalent if some isomorphism G → G′ is the identity on K and induces the identity on H. So the identifications of K and H are part of the data.

**Problem.** Let A be an abelian group. The equivalence classes of central extensions with kernel A and quotient G correspond one-to-one to the elements of H²(G, A). The split extension A × G corresponds to 0.

**How the definition helps.** A section of the quotient map records the failure of multiplicativity as an A-valued 2-cocycle (our own). Changing the section adds a coboundary. The extension classification theorem identifies equivalence fixing both ends with equality of these cohomology classes, using the trivial G-action on A. A homomorphic section gives the zero cocycle (our own).

**Wikipedia:** [Group extension](https://en.wikipedia.org/wiki/Group_extension). It says: “It may happen that the extensions 1→K→G→H→1 and 1→K→G′→H→1 are inequivalent but G and G′ are isomorphic as groups.”

**Sources:** none listed. No primary source with a working link was found.

### Crossed homomorphisms as sections of the semidirect product match complements

**Remember:** A subgroup that projects bijectively is the image of a section.

*True by definition.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** Suppose G acts on an abelian group M. A crossed homomorphism d from G to M satisfies d(gh) = d(g) + g·d(h) for every g,h ∈ G. Equivalently, g ↦ (d(g),g) is a homomorphic section of M ⋊ G → G (our own).

**Problem.** Crossed homomorphisms from G to M correspond to complements of M in M ⋊ G. A complement is a subgroup that meets M trivially and, with M, generates the whole group.

**How the definition helps.** Each section has a complement as its image (our own). On a complement the projection is injective by trivial intersection with M and surjective because the complement and M generate. Its inverse is the unique section with that image (our own).

**nLab:** [Beck module](https://ncatlab.org/nlab/show/Beck+module). It says: “M-valued derivations of G are precisely crossed homomorphisms G → M”

**Sources:** none listed. No primary source with a working link was found.

### Only perfect groups have a universal central extension

**Remember:** A universal central extension maps uniquely over the base to every central extension.

*Makes the theorem clean to state or prove.* MSC 20E22 (Extensions, wreath products, and other compositions of groups), 20J05. arXiv math.GR. Level 3: graduate.

**Definition.** A central extension of G is a surjective homomorphism E → G whose kernel lies in the center of E. A group is perfect if it equals its commutator subgroup. A universal central extension of G is a central extension with exactly one map over G to every other central extension of G.

**Problem.** A group has a universal central extension exactly when it is perfect. For a finite perfect group, this extension is unique up to isomorphism and is itself perfect. Its kernel is the Schur multiplier, the second homology group H₂(G, ℤ).

**How the definition helps.** Uniqueness allows only the zero homomorphism from U to any abelian A, by testing against G × A (our own). Thus U and its quotient G are perfect. For perfect G = F/R with F free, the universal central extension theorem constructs U as \[F,F\]/\[F,R\]. Hopf’s formula identifies its kernel with H₂(G, ℤ), and universality gives uniqueness up to isomorphism (our own).

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

**Remember:** Two subgroups generate, and each simple reflection permits only two double cosets.

*Makes the theorem clean to state or prove.* MSC 20E42 (Groups with a \\(BN\\)-pair; buildings), 20D06. arXiv math.GR. Level 3: graduate.

**Definition.** A BN-pair consists of subgroups B,N generating G together with B ∩ N normal in N and involutions S generating W = N/(B ∩ N). Using representatives in N, require sBw ⊆ BswB ∪ BwB for every s ∈ S and w ∈ W. Require sBs⁻¹ ⊈ B for every s ∈ S.

**Problem.** Tits's simplicity theorem: let G have a BN pair with B solvable and with trivial intersection of all conjugates of B. Suppose also that S does not split into two nonempty sets that commute with each other. Then G is simple whenever it is perfect, that is, equal to its commutator subgroup.

**How the definition helps.** The BN-pair axioms express the double-coset rules uniformly (our own). Tits’s simplicity theorem applies these rules under the stated hypotheses. For GL(n), upper triangular and monomial matrices supply B and N (our own).

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

**Definition.** A group G is compact if the natural map colim Hom(G,Dᵢ) → Hom(G,colim Dᵢ) is bijective for every small filtered diagram D of groups.

**Problem.** A retract of a finitely presented group is finitely presented. H is a retract of G when maps i from H to G and r from G to H satisfy r∘i = identity.

**How the definition helps.** With this definition the proof is formal, because the maps out of H are a retract of the maps out of G (our own). Take a map f from H to a filtered colimit, make f∘r come from a stage, and compose that stage map with i (our own). Two stage maps that agree in the colimit are handled in the same way. The work moves to the comparison theorem, stated by the nLab, that a group is compact exactly when it is finitely presented.

**nLab:** [compact object](https://ncatlab.org/nlab/show/compact+object). It says: “In C = Grp an object is compact precisely if it is finitely presented as a group.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Fox derivatives as coordinates makes Fox's fundamental formula hold by definition

**Remember:** A Fox derivative reads one coordinate of u − ε(u).

*True by definition. Confidence: medium.* MSC 20F05 (Generators, relations, and presentations of groups), 16S34. arXiv math.GR. Level 3: graduate.

**Definition.** For a free group F on generators xᵢ, augmentation ε on ℤF sums the coefficients. Define ∂u/∂xᵢ as the coordinate of u − ε(u) at xᵢ − 1 in the standard left ℤF-basis of ker ε.

**Problem.** For every element u of ℤF, u − ε(u) equals the sum over i of (∂u/∂xᵢ)(xᵢ − 1).

**How the definition helps.** The formula expands u − ε(u) in its basis (our own). The augmentation ideal basis theorem supplies the substantive step by identifying the elements xᵢ − 1 as a free left basis (our own).

**nLab:** [Fox derivative](https://ncatlab.org/nlab/show/Fox+derivative). It says: “u − ε(u) 1<sub>F</sub> = ∑ᵢ (∂u/∂xᵢ)(xᵢ − 1)”

**Sources:**

- [Ralph H. Fox, Free Differential Calculus. I: Derivation in the Free Group Ring (1953).](https://doi.org/10.2307/1969736)

### The small cancellation condition C′(1/6) makes Dehn's algorithm solve the word problem

**Remember:** Relators overlap little, so a trivial word shows over half a relator.

*Makes the theorem clean to state or prove.* MSC 20F06 (Cancellation theory of groups; application of van Kampen diagrams), 20F10. arXiv math.GR. Level 3: graduate.

**Definition.** Close the set of cyclically reduced relators under cyclic shifts and inverses. A piece is a nonempty common prefix of two distinct words in this set. The condition C′(λ) requires \|u\| &lt; λ\|r\| whenever a piece u begins a relator r in this set.

**Problem.** For a C′(1/6) presentation, a freely reduced word equals the identity if and only if Dehn's algorithm reduces it to the empty word. So the word problem is solvable for finite C′(1/6) presentations.

**How the definition helps.** Greendlinger’s lemma finds more than half a relator in every nonempty freely reduced word representing the identity. Replace that segment by the inverse of the remaining segment and freely reduce. Each step preserves the group element and shortens the word, so the test terminates (our own).

**Wikipedia:** [Small cancellation theory](https://en.wikipedia.org/wiki/Small_cancellation_theory). It says: “Note that the assumption λ ≤ 1/6 implies that (1 − 3λ) ≥ 1/2, so that w contains a subword more than a half of some defining relator.”

**Sources:** none listed. No primary source with a working link was found.

### Residual finiteness decides word problems

**Remember:** Finite quotients detect nonidentity words in residually finite groups.

*Rules out counterexamples.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** A group is residually finite if every nonidentity element has nonidentity image in some finite quotient.

**Problem.** A finitely presented residually finite group has an algorithm to decide if a word in its generators is the identity.

**How the definition helps.** Residual finiteness gives every nonidentity word a finite witness (our own). In parallel, enumerate proofs of triviality and assignments of generators to finite groups satisfying every relator. Stop on finding a proof or a finite image where the word survives. This excludes Boone’s finitely presented example with undecidable word problem (our own).

**nLab:** [residually finite group](https://ncatlab.org/nlab/show/residually+finite+group). It says: “The intersection of all normal subgroups N ⊂ G of finite index \[G : N\] ∈ ℕ is trivial.”

**Wikipedia:** [Residually finite group](https://en.wikipedia.org/wiki/Residually_finite_group). It says: “Finitely presented residually finite groups have a solvable word problem”

**Sources:** none listed. No primary source with a working link was found.

### Subgroup separability decides subgroup membership

**Remember:** Finite quotients certify nonmembership when the group is subgroup separable.

*Rules out counterexamples.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20E26. arXiv math.GR. Level 3: graduate.

**Definition.** A group G is subgroup separable if the following holds for every finitely generated subgroup H and every g outside H. Some finite quotient map q of G satisfies q(g) ∉ q(H).

**Problem.** In a subgroup separable Artin group given by a finite presentation, an algorithm decides membership in any subgroup given by finitely many generators.

**How the definition helps.** Subgroup separability supplies a finite quotient where the input lies outside the subgroup image whenever membership fails (our own). Enumerate finite group assignments satisfying the relators and test membership in each finite image. In parallel, enumerate subgroup words and proofs that they equal the input. These searches exclude Mihailova’s example of undecidable membership in a product of two free groups (our own).

**Paper or page:** [Membership problems in braid groups and Artin groups](https://arxiv.org/abs/2409.11335v3). It says: “Every subgroup separable Artin group has decidable rational subset membership problem.”

**Sources:** none listed. No primary source with a working link was found.

### Isoclinism makes the Schur cover of every finite group unique

**Remember:** Match both central quotients and commutator subgroups so that commutators correspond.

*Makes the theorem clean to state or prove.* MSC 20F12 (Commutator calculus), 20C25. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** The commutator map of G sends two cosets of the center Z(G) to the commutator of their representatives. Two groups are isoclinic if isomorphisms between the quotients by the centers and between the commutator subgroups match these maps.

**Problem.** Every finite group G has a central extension of least order to which every complex projective representation of G lifts. Such extensions are called Schur covers. All Schur covers of G are isoclinic, although their middle groups can differ up to isomorphism.

**How the definition helps.** Isoclinism expresses uniqueness by comparing the two commutator maps (our own). Schur’s covering group theorem supplies existence and establishes this comparison for covers of the same group. The dihedral and quaternion groups of order eight illustrate the distinction for the Klein four-group (our own).

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

**Remember:** Virtually nilpotent means nilpotent after passing to a subgroup of finite index.

*Makes the theorem clean to state or prove.* MSC 20F19 (Generalizations of solvable and nilpotent groups), 20F69. arXiv math.GR. Level 3: graduate.

**Definition.** A group is virtually P if it has a subgroup of finite index with property P. So a group is virtually nilpotent if some subgroup of finite index is nilpotent.

**Problem.** Gromov (1981): a finitely generated group has polynomial growth if and only if it has a nilpotent subgroup of finite index.

**How the definition helps.** Growth does not change when one passes to a subgroup of finite index, so an exact description must use a property with the same freedom. Plain nilpotency fails: every finite group has polynomial growth, but the symmetric group S₃ is not nilpotent (our own). The infinite dihedral group has linear growth but is not nilpotent, because its lower central series never reaches the trivial group (our own). The easy direction is due to Wolf, and the hard direction is Gromov's.

**Wikipedia:** [Virtually](https://en.wikipedia.org/wiki/Virtually), [Gromov's theorem on groups of polynomial growth](https://en.wikipedia.org/wiki/Gromov%27s_theorem_on_groups_of_polynomial_growth). It says: “Gromov's theorem states that the finitely generated groups with polynomial growth are precisely the finitely generated virtually nilpotent groups.”

**Sources:**

- [M. Gromov, Groups of polynomial growth and expanding maps (with an appendix by J. Tits), Publications Mathématiques de l'IHÉS 53 (1981) 53–73](https://doi.org/10.1007/BF02698687)

### Virtually solvable makes the Tits alternative hold for finitely generated linear groups

**Remember:** A solvable subgroup of finite index makes the whole group virtually solvable.

*Makes the theorem clean to state or prove.* MSC 20F19 (Generalizations of solvable and nilpotent groups), 20H20. arXiv math.GR. Level 3: graduate.

**Definition.** A linear group is a subgroup of GL(n, k), the invertible n × n matrices over a field k. It is virtually solvable if it has a solvable subgroup of finite index.

**Problem.** Tits (1972): a finitely generated linear group either is virtually solvable or contains a free group on two generators.

**How the definition helps.** Virtual solvability includes finite extensions of solvable groups, including every finite group (our own). For example, A₅ is linear and nonsolvable, and finiteness rules out a rank-two free subgroup. Tits’s alternative supplies the free subgroup whenever virtual solvability fails (our own).

**Wikipedia:** [Tits alternative](https://en.wikipedia.org/wiki/Tits_alternative), [Amenable group](https://en.wikipedia.org/wiki/Amenable_group), [Virtually](https://en.wikipedia.org/wiki/Virtually). It says: “every subgroup of GL(n,k) with k a field either has a normal solvable subgroup of finite index (and therefore is amenable) or contains the free group on two generators.”

**Sources:**

- [J. Tits, Free subgroups in linear groups, Journal of Algebra 20 (1972) 250–270](https://doi.org/10.1016/0021-8693(72)90058-0)

### Configuration space proves braid groups have no torsion

**Remember:** A finite-dimensional classifying space rules out torsion in its fundamental group.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 55R80. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** The braid group Bₙ is the fundamental group of the space of unordered configurations of n distinct points in the plane. This space has the quotient topology from ordered configurations under coordinate permutations.

**Problem.** Bₙ has no nonidentity element of finite order.

**How the definition helps.** The Fadell–Neuwirth bundles imply that the configuration space is aspherical, making it a 2n-dimensional classifying space for Bₙ. A finite cyclic subgroup would have a covering space of the same dimension as its classifying space (our own). A nontrivial finite cyclic group has nonzero integral cohomology in arbitrarily high degrees, which this dimension precludes (our own).

**Wikipedia:** [Configuration space (mathematics)](https://en.wikipedia.org/wiki/Configuration_space_%28mathematics%29), [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “It follows from this definition and the fact that Confₙ(ℝ²) and UConfₙ(ℝ²) are Eilenberg–MacLane spaces of type K(π,1), that the unordered configuration space of the plane UConfₙ(ℝ²) is a classifying space for the Artin braid group”

**Sources:**

- [Edward Fadell and Lee Neuwirth, Configuration spaces, Mathematica Scandinavica (1962)](https://doi.org/10.7146/math.scand.a-10517)

### Ordered configurations split pure braid groups into free group factors

**Remember:** Forget one point to reveal a punctured plane and its free group.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 55R80. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** Define Pₙ as the fundamental group of the space of ordered lists of n distinct points in the plane. In the algebraic definition, Pₙ consists of braids that induce the identity permutation of the strand ends.

**Problem.** For n ≥ 2, the sequence 1 → Fₙ₋₁ → Pₙ → Pₙ₋₁ → 1 splits. Here Fₙ₋₁ is the free group on n − 1 generators.

**How the definition helps.** Forgetting the last point gives a Fadell–Neuwirth bundle over the ordered configuration space of n − 1 points (our own). A continuous section adds a point of real coordinate one greater than the maximum existing real coordinate and imaginary coordinate zero. The section kills the connecting map from π₂ of the base and splits the projection on fundamental groups. The fiber is a plane with n − 1 punctures, giving the free kernel (our own).

**Wikipedia:** [Braid group](https://en.wikipedia.org/wiki/Braid_group). It says: “Pure braid groups fit into a short exact sequence 1 → Fₙ₋₁ → Pₙ → Pₙ₋₁ → 1. This sequence splits and therefore pure braid groups are realized as iterated semi-direct products of free groups.”

**Sources:**

- [Edward Fadell and Lee Neuwirth, Configuration spaces, Mathematica Scandinavica (1962)](https://doi.org/10.7146/math.scand.a-10517)

### Punctured disk mapping classes give Artin’s action on a free group

**Remember:** A disk homeomorphism acts on loops, and isotopy does not change the action.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 57K20. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** The braid group Bₙ consists of isotopy classes of disk homeomorphisms fixing the boundary pointwise and preserving the set of n punctures. Isotopies obey the same conditions, and multiplication is composition.

**Problem.** The action of braids on the free group of the punctured disk is a group homomorphism. In the usual basis it is Artin's action.

**How the definition helps.** A boundary basepoint stays fixed, so each homeomorphism acts on the fundamental group and isotopy preserves that action (our own). Functoriality gives the homomorphism. Tracking the standard puncture loops under adjacent exchanges identifies the action with Artin’s formulas (our own).

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “the MCG-presentation of the braid group (above) induces a group homomorphism of the braid group into the automorphism group of a free group, which turns out to be faithful.”

**Sources:**

- [Joan S. Birman, Mapping class groups and their relationship to braid groups, Communications on Pure and Applied Mathematics (1969)](https://doi.org/10.1002/cpa.3160220206)
- [Emil Artin, Theory of Braids, Annals of Mathematics (1947)](https://doi.org/10.2307/1969218)

### The cyclic cover makes the reduced Burau action a homomorphism

**Remember:** A fixed boundary lift makes braid composition agree with composition upstairs.

*True by definition.* MSC 20F36 (Braid groups; Artin groups), 57M10. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** In an n-punctured disk, take the cyclic cover C corresponding to the kernel of total winding number about the punctures. The reduced Burau representation acts on H₁(C, ℤ) through braid lifts fixing a chosen lift of a boundary point. The variable t acts by the positive deck generator.

**Problem.** The reduced Burau matrices give a group homomorphism from Bₙ into the invertible matrices over ℤ\[t, t⁻¹\].

**How the definition helps.** The covering definition makes the action a homomorphism by choosing lifts that respect composition (our own). Disk homeomorphisms preserve the puncture-loop map to ℤ, so they lift to C and commute with t (our own). Fixing a lift of a boundary point chooses one lift of each homeomorphism, and this choice respects composition and isotopy (our own). The work left is to choose a basis for the free module of rank n − 1 and recover Burau's generator matrices (our own).

**Wikipedia:** [Burau representation](https://en.wikipedia.org/wiki/Burau_representation). It says: “By the basic theory of covering spaces, Bₙ acts on H₁(Cₙ), and this representation is called the reduced Burau representation.”

**Sources:** none listed. No primary source with a working link was found.

### Coxeter presentations turn finite reflection groups into diagrams to classify

**Remember:** Record the angles between mirrors, and the group is determined.

*Makes the theorem clean to state or prove.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)). arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** A Coxeter system has a presentation on a set S with defining relations (st)ᵐ = 1 whenever m = m(s,t) is finite. The symmetric matrix m has diagonal 1 and off-diagonal entries in {2,3,…,∞}. Its diagram records these entries.

**Problem.** The finite Euclidean reflection groups are exactly the groups admitting a finite Coxeter system. Coxeter’s classification lists these systems by their diagrams.

**How the definition helps.** The presentation encodes all relations of a Coxeter system in one diagram (our own). Coxeter’s reflection theorem identifies finite reflection systems with finite Coxeter systems through simple reflections. His classification determines the diagrams of finite type (our own).

**Wikipedia:** [Coxeter group](https://en.wikipedia.org/wiki/Coxeter_group). It says: “In this way, every reflection group may be presented as a Coxeter group. The converse is partially true: every finite Coxeter group admits a faithful representation as a finite reflection group of some Euclidean space.”

**Sources:**

- [H. S. M. Coxeter, Discrete groups generated by reflections, Annals of Mathematics 35 (1934) 588–621](https://doi.org/10.2307/1968753)
- [H. S. M. Coxeter, The complete enumeration of finite groups of the form Rᵢ² = (RᵢRⱼ)ᵏⁱʲ = 1, Journal of the London Mathematical Society 10 (1935) 21–25](https://doi.org/10.1112/jlms/s1-10.37.21)

### Defining affine Weyl groups as semidirect products splits off translations

**Remember:** Each element is one lattice translation after one finite Weyl element.

*True by definition. Confidence: medium.* MSC 20F55 (Reflection and Coxeter groups (group-theoretic aspects)), 17B22. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** For a reduced crystallographic root system, the affine Weyl group is Q∨ ⋊ W with the natural linear action of W. The lattice Q∨ is the integer span of the coroots 2α/(α,α), and W is generated by the root reflections.

**Problem.** In the affine Weyl group of a root system, the translations form the coroot lattice Q∨. The quotient by them is the finite Weyl group W, and the linear reflections give a section.

**How the definition helps.** The affine action sends (v,w) to the map x ↦ v + w(x), so translations are exactly the pairs (v,1) (our own). Projection onto W has the section w ↦ (0,w). The comparison with affine reflections uses the formula x ↦ kα∨ + sα(x) for reflection across (α,x) = k (our own).

**Paper or page:** [Affine Kazhdan-Lusztig polynomials on the subregular cell in non simply-laced Lie algebras: with an application to character formulae (with an appendix by Roman Bezrukavnikov, Vasily Krylov, and Kenta Suzuki), Proposition 3.7](https://arxiv.org/abs/2401.06605v2). It says: “Let Ŵ = Q∨ ⋊ W be the affine Weyl group of type C.”

**Sources:** none listed. No primary source with a working link was found.

### Finite support preserves wreath bi-orders

**Remember:** Finite support gives the sequence a last place where two values differ.

*Rules out counterexamples.* MSC 20F60 (Ordered groups (group-theoretic aspects)), 20E22. arXiv math.GR. Level 3: graduate.

**Definition.** The restricted wreath product ℤ wr ℤ is a semidirect product: the acting copy of ℤ shifts finitely supported integer sequences indexed by ℤ. Sequences add coordinatewise, and the unrestricted version allows all integer sequences. A bi-order is a total order invariant under left and right multiplication.

**Problem.** The restricted wreath product of ℤ by ℤ admits a bi-order. The unrestricted wreath product of the same groups does not.

**How the definition helps.** Finite support gives a greatest differing index, so lexicographic comparison from that end is shift invariant (our own). Order first by the shift exponent, then by this comparison on the sequence group (our own). In the unrestricted product, shifting the sequence with entries alternating 1 and −1 sends it to its inverse (our own). A nonidentity element cannot be conjugate to its inverse in a bi-ordered group (our own).

**Paper or page:** [The complexity of knapsack problems in wreath products](https://arxiv.org/abs/2002.08086v2). It says: “This holds only for the restricted wreath product; which is the wreath product construction we are dealing with.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ends through Cayley graphs makes them invariants of the group

**Remember:** Rays represent one end when no finite cut separates their tails.

*Makes the theorem clean to state or prove.* MSC 20F65 (Geometric group theory), 20E08. arXiv math.GR, math.GT. Level 3: graduate.

**Definition.** In a locally finite connected graph, two infinite simple rays define the same end if their tails share a component after every finite vertex deletion. The ends of a finitely generated group are the resulting equivalence classes in a Cayley graph for a finite generating set.

**Problem.** Every finitely generated infinite group has one, two or infinitely many ends. A finitely generated group has multiple ends exactly when it splits nontrivially over a finite subgroup as an amalgamated free product or HNN extension.

**How the definition helps.** Cayley graphs for different finite generating sets are quasi-isometric, and quasi-isometries preserve their ends (our own). The Freudenthal–Hopf theorem gives the possible counts, and Stallings’s theorem characterizes multiple ends by a nontrivial splitting (our own).

**Wikipedia:** [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry), [Stallings theorem about ends of groups](https://en.wikipedia.org/wiki/Stallings_theorem_about_ends_of_groups). It says: “The ends of a finitely generated group are defined to be the ends of the corresponding Cayley graph; this definition is independent of the choice of a finite generating set.”

**Sources:**

- [H. Freudenthal, Über die Enden diskreter Räume und Gruppen, Commentarii Mathematici Helvetici 17 (1944) 1–38](https://doi.org/10.1007/BF02566233)
- [J. R. Stallings, On torsion-free groups with infinitely many ends, Annals of Mathematics 88 (1968) 312–334](https://doi.org/10.2307/1970577)

### Homogeneous quasimorphisms ignore conjugation

**Remember:** Taking powers makes the bounded error from conjugation disappear.

*Rules out counterexamples.* MSC 20F65 (Geometric group theory), 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** A real quasimorphism has a uniform bound on the absolute difference between f(xy) and f(x) + f(y). It is homogeneous if its value on any integer power is the exponent times its value on the element.

**Problem.** Homogeneous quasimorphisms are constant on conjugacy classes. Quasimorphisms without the power condition need not be.

**How the definition helps.** Homogeneity turns a fixed conjugation error into one that vanishes after division by the exponent (our own). If D bounds the addition error, then \|f(hxⁿh⁻¹) − f(xⁿ)\| ≤ 2D since f(h⁻¹) = −f(h). Divide by n and let n grow. The indicator of one transposition in S₃ is bounded and distinguishes conjugates (our own).

**Wikipedia:** [Quasimorphism](https://en.wikipedia.org/wiki/Quasimorphism). It says: “It is constant on conjugacy classes”

**Paper or page:** [On conjugation invariant norms, asymptotic cones, metric ultraproducts and contractibility](https://arxiv.org/abs/2203.10889v1). It says: “The homogenisation ψ̄ of a quasimorphism ψ : G → ℝ is a homogeneous quasimorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Marked limits preserve group laws

**Remember:** A failed law has a finite witness in the marked generators.

*True by definition.* MSC 20F65 (Geometric group theory), 20F70. arXiv math.GR. Level 3: graduate.

**Definition.** A marked group has an ordered finite generating list. Fix the list length throughout. Convergence means each generator word eventually represents the identity exactly when it does in the proposed limit.

**Problem.** A word law is an equation that holds for every substitution of group elements for its variables. A limit of marked groups satisfying the same word law also satisfies it.

**How the definition helps.** Eventual agreement passes each tested word equation to the limit (our own). Write the elements being tested as words in the marked generators and substitute these into the law (our own). The work moves to proving that word equality in a fixed finite range is determined by the corresponding labeled balls (our own).

**Paper or page:** [Bounded conciseness in the space of marked groups](https://arxiv.org/abs/2502.05070v1). It says: “have balls of radius R isomorphic as labeled directed graphs”

**Sources:** none listed. No primary source with a working link was found.

### Thin triangles survive quasi-isometry, so hyperbolic groups need no chosen generators

**Remember:** Some δ always works; which δ depends on the generators.

*Makes the theorem clean to state or prove.* MSC 20F67 (Hyperbolic groups and nonpositively curved groups). arXiv math.GR, math.MG. Level 3: graduate.

**Definition.** A finitely generated group is hyperbolic if some Cayley graph for a finite generating set has uniformly thin geodesic triangles. This means some δ ≥ 0 bounds the distance from each point on each side to the union of the other sides.

**Problem.** Hyperbolicity is independent of the finite generating set. A group is hyperbolic exactly when it acts properly discontinuously and cocompactly by isometries on a proper hyperbolic length space.

**How the definition helps.** Cayley graphs for finite generating sets are quasi-isometric, and the Morse lemma gives quasi-isometry invariance of hyperbolicity among geodesic spaces (our own). The Švarc–Milnor lemma applies the same comparison to the stated action. Conversely, a hyperbolic group acts this way on its Cayley graph (our own).

**Wikipedia:** [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group), [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry). It says: “Thus we can legitimately speak of a finitely generated group G being hyperbolic without referring to a generating set.”

**Sources:**

- [M. Gromov, Hyperbolic groups, in Essays in Group Theory, MSRI Publications 8 (1987) 75–263](https://doi.org/10.1007/978-1-4613-9586-7_3)

### Comparing growth functions up to rescaling makes group growth independent of generators

**Remember:** Up to rescaling, how fast balls grow belongs to the group.

*True by definition.* MSC 20F69 (Asymptotic properties of groups), 20F65. arXiv math.GR. Level 3: graduate.

**Definition.** For a finite symmetric generating set S, let bₛ(n) count elements expressible using at most n letters from S. Two growth functions a,b are equivalent if some positive integer C satisfies a(n) ≤ b(Cn) and b(n) ≤ a(Cn) for every integer n ≥ 0.

**Problem.** The growth rate does not depend on the finite generating set. So polynomial growth, its degree, and exponential growth are properties of the group itself.

**How the definition helps.** Every generator in either finite set has bounded word length in the other set (our own). Taking C to bound all these lengths gives both ball inclusions and hence both inequalities. Rescaling lengths by C preserves polynomial degree and exponential growth (our own).

**Wikipedia:** [Word metric](https://en.wikipedia.org/wiki/Word_metric), [Growth rate (group theory)](https://en.wikipedia.org/wiki/Growth_rate_%28group_theory%29). It says: “The bilipschitz equivalence of word metrics implies in turn that the growth rate of a finitely generated group is a well-defined isomorphism invariant of the group, independent of the choice of a finite generating set.”

**Sources:**

- [J. Milnor, A note on curvature and fundamental group, Journal of Differential Geometry 2 (1968) 1–7](https://doi.org/10.4310/jdg/1214501132)

### Dehn functions up to equivalence make linear isoperimetry mean hyperbolic

**Remember:** Up to rescaling, the area cost of relations belongs to the group.

*Makes the theorem clean to state or prove.* MSC 20F69 (Asymptotic properties of groups), 20F67. arXiv math.GR, math.MG. Level 3: graduate.

**Definition.** The area of a null word counts the fewest conjugates of relators or inverse relators whose product equals it in the free group. The Dehn function D(n) takes the maximum area for null words of length at most n. Equivalence requires an integer C ≥ 1 with f(n) ≤ Cg(Cn+C)+Cn+C and g(n) ≤ Cf(Cn+C)+Cn+C for all natural n.

**Problem.** The equivalence class of the Dehn function depends only on the group, not on the finite presentation; it is even a quasi-isometry invariant. Gromov: a finitely presented group is hyperbolic if and only if its Dehn function is linear.

**How the definition helps.** The comparison absorbs the area changes from replacing generators and relators, including linear error (our own). Quasi-isometry invariance of the Dehn function gives the same class for quasi-isometric finitely presented groups. Gromov’s linear isoperimetric theorem identifies the class of n with hyperbolicity (our own).

**Wikipedia:** [Dehn function](https://en.wikipedia.org/wiki/Dehn_function), [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group). It says: “A finitely presented group is word-hyperbolic group if and only if its Dehn function is equivalent to n, that is, if and only if every finite presentation of this group satisfies a linear isoperimetric inequality.”

**Sources:**

- [M. Gromov, Hyperbolic groups, in Essays in Group Theory, MSRI Publications 8 (1987) 75–263](https://doi.org/10.1007/978-1-4613-9586-7_3)
- [M. Dehn, Über unendliche diskontinuierliche Gruppen, Mathematische Annalen 71 (1911) 116–144](https://doi.org/10.1007/BF01456932)

### Defining Borel subgroups by complete quotients makes conjugacy short

**Remember:** A fixed coset puts one Borel subgroup inside a conjugate of the other.

*True by definition.* MSC 20G07 (Structure theory for linear algebraic groups). arXiv math.AG, math.GR. Level 3: graduate.

**Definition.** For a connected linear algebraic group G over an algebraically closed field, a Borel subgroup is a closed connected solvable subgroup B with G/B complete.

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

**Definition.** Let G be a connected linear algebraic group over an algebraically closed field. A closed subgroup P is parabolic if G/P is complete. A Borel subgroup is a connected solvable parabolic subgroup.

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

**How the definition helps.** Embedding in a unitriangular group bounds the nilpotency class by that of the ambient group. Commuting with the whole unitriangular group removes at least one more superdiagonal at each step (our own). Milne’s Proposition 15.23 gives the subgroup argument, and Kolchin’s theorem supplies simultaneous triangularization (our own).

**Wikipedia:** [Unipotent](https://en.wikipedia.org/wiki/Unipotent). It says: “In particular any unipotent group is a nilpotent group, though the converse is not true”

**Sources:**

- [J. S. Milne, Algebraic Groups, version 2.00 (2015), Proposition 15.23 and 3.28](https://www.jmilne.org/math/CourseNotes/iAG200.pdf)

### Building Tamagawa measure from one global form makes it independent of scaling

**Remember:** One global scalar changes local volumes by factors whose product is one.

*True by definition.* MSC 20G35 (Linear algebraic groups over adèles and other rings and schemes), 11R56. arXiv math.NT. Level 3: graduate.

**Definition.** Choose a nonzero invariant differential form ω of top degree on a semisimple group G over a global field k. Tamagawa measure on the adelic group uses the product of the local Haar measures \|ω\|ᵥ, with the standard normalization for k.

**Problem.** Replacing ω by cω, for a nonzero c in k, does not change the Tamagawa measure.

**How the definition helps.** Scaling one global form multiplies its local measures by linked factors (our own). At each place v the factor is \|c\|ᵥ, and the product formula for normalized absolute values gives ∏ᵥ \|c\|ᵥ = 1. Thus the adelic measure stays the same (our own).

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

### Cohomological dimension at most one means every abelian-kernel extension splits

**Remember:** No second cohomology means no nonsplit abelian extensions.

*Makes the theorem clean to state or prove.* MSC 20J05 (Homological methods in group theory), 20E05, 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** A group G has integral cohomological dimension at most n if Hᵏ(G,M) vanishes for every G-module M and every k &gt; n.

**Problem.** A group G has cohomological dimension at most 1 exactly when every extension of G with abelian kernel splits. By the Stallings–Swan theorem, these groups are exactly the free groups.

**How the definition helps.** The classification of extensions with fixed module action identifies splitting with the zero class in H²(G,M). Thus all abelian-kernel extensions split exactly when H² vanishes for every module. Dimension shifting then gives vanishing in every higher degree (our own). The Stallings–Swan theorem identifies groups of integral cohomological dimension at most one with free groups.

**Wikipedia:** [Cohomological dimension](https://en.wikipedia.org/wiki/Cohomological_dimension). It says: “The Stallings-Swan theorem for a group G says that G is free if and only if every extension by G with abelian kernel is split.”

**Sources:**

- [Richard G. Swan, Groups of cohomological dimension one, Journal of Algebra 12 (1969) 585–610](https://doi.org/10.1016/0021-8693(69)90030-1)
- [John R. Stallings, On torsion-free groups with infinitely many ends, Annals of Mathematics 88 (1968) 312–334](https://doi.org/10.2307/1970577)

### Defining H₂ as a derived functor makes Hopf's quotient independent of presentation

**Remember:** Homology knows the group, so Hopf's quotient forgets the presentation.

*True by definition.* MSC 20J05 (Homological methods in group theory), 20F05, 20J06. arXiv math.GR. Level 3: graduate.

**Definition.** The second homology H₂(G, ℤ) of a group G is Tor₂ of ℤ with ℤ over the group ring ℤ\[G\]. It depends only on G, because any two projective resolutions of ℤ are homotopy equivalent. A presentation of G is a free group F with a normal subgroup R such that G ≅ F/R.

**Problem.** For every presentation G ≅ F/R, H₂(G, ℤ) ≅ (R ∩ \[F, F\])/\[F, R\]. So this quotient is the same for all presentations of G.

**How the definition helps.** Hopf’s formula identifies the presentation quotient with an invariant defined from G alone (our own). The five-term homology sequence for the free presentation embeds H₂(G,ℤ) into R/\[F,R\] because H₂(F,ℤ) vanishes. Its image is the kernel of R/\[F,R\] → F/\[F,F\], namely (R ∩ \[F,F\])/\[F,R\] (our own).

**Wikipedia:** [Schur multiplier](https://en.wikipedia.org/wiki/Schur_multiplier), [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “H₂(G, ℤ) ≅ (R ∩ \[F, F\])/\[F, R\] where G ≅ F/R and F is a free group.”

**Sources:**

- [Heinz Hopf, Fundamentalgruppe und zweite Bettische Gruppe, Commentarii Mathematici Helvetici 14 (1942) 257–309](https://doi.org/10.1007/BF02565622)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Excluding proper-power relators gives one-relator groups cohomological dimension at most two

**Remember:** Forbid proper powers, and the two-cell picture is the whole story.

*Rules out counterexamples.* MSC 20J05 (Homological methods in group theory), 20F05. arXiv math.GR. Level 3: graduate.

**Definition.** A relator r is a proper power if r = sᵐ in the free group for some element s and some integer m ≥ 2.

**Problem.** If r is not a proper power, the group ⟨x₁,…,xₙ \| r⟩ is torsion-free and has integral cohomological dimension at most two. For m ≥ 2, the group ⟨x \| xᵐ⟩ is cyclic of order m and has infinite integral cohomological dimension.

**How the definition helps.** Lyndon’s identity theorem gives asphericity of the presentation complex when the relator is not a proper power. Its universal cover supplies a free resolution of length two (our own). Finite integral cohomological dimension excludes nontrivial finite cyclic subgroups, which have cohomology in arbitrarily high degrees (our own). The relator xᵐ with m ≥ 2 exhibits this obstruction.

**Wikipedia:** [One-relator group](https://en.wikipedia.org/wiki/One-relator_group). It says: “If r ∈ F(x₁,…,xₙ) is not a proper power then a one-relator group G has cohomological dimension ≤ 2.”

**Sources:**

- [Roger C. Lyndon, Cohomology theory of groups with a single defining relation, Annals of Mathematics 52 (1950) 650–665](https://doi.org/10.2307/1969440)

### A free group's augmentation ideal is free, so higher cohomology vanishes

**Remember:** A resolution of length one leaves no room for H².

*True by definition.* MSC 20J06 (Cohomology of groups), 20E05. arXiv math.GR. Level 3: graduate.

**Definition.** Group cohomology Hⁿ(G, M) is Extⁿ from ℤ to M over the group ring ℤ\[G\], and any projective resolution of ℤ computes it. The augmentation map from ℤ\[G\] to ℤ sends each group element to 1, and its kernel is the augmentation ideal I. So 0 → I → ℤ\[G\] → ℤ → 0 is a projective resolution whenever I is projective.

**Problem.** For a free group F on a set S, Hᵏ(F, M) = 0 for all k ≥ 2 and all F-modules M. If S is finite, H¹(F, ℤ) is free abelian of rank \|S\|.

**How the definition helps.** The augmentation ideal of ℤ\[F\] is free with basis s − 1 for s in S (our own). Its inclusion into ℤ\[F\] gives a resolution of length one, so higher Ext groups vanish. With trivial coefficients ℤ, the induced differential is zero because every s − 1 acts by zero. Thus H¹(F,ℤ) has one independent integer coordinate per generator when S is finite (our own).

**Wikipedia:** [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “Notice the augmentation map aug: ℤ\[G\] → ℤ<sub>triv</sub> has kernel given by the free submodule I<sub>S</sub> generated by the set {s − 1 : s ∈ S}”

**Sources:**

- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Abstract kernels put the obstruction to nonabelian extensions in third cohomology

**Remember:** Fix the outer action first, and the obstruction lands in H³.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups), 20E22. arXiv math.GR. Level 3: graduate.

**Definition.** An abstract kernel is a homomorphism from a group G to Out(K), the automorphisms of a group K modulo the inner ones. Every extension 1 → K → E → G → 1 gives one by conjugation. The centre Z(K) becomes a G-module through the abstract kernel.

**Problem.** Each abstract kernel has an obstruction class in H³(G, Z(K)), and some extension realizes it exactly when the class is 0. Then the extensions that realize it, up to equivalence, form a set on which H²(G, Z(K)) acts simply transitively.

**How the definition helps.** The outer action fixes the coefficient module Z(K), since inner automorphisms act trivially on the center (our own). Lifting the action to automorphisms gives inner multiplication errors whose associativity defect is a central 3-cocycle. The Eilenberg–Mac Lane obstruction theorem identifies its vanishing with realizability and the remaining choices with a simply transitive H²-action (our own).

**Wikipedia:** [Group extension](https://en.wikipedia.org/wiki/Group_extension). It says: “There is a similar classification of all extensions of G by A in terms of homomorphisms from G→Out(A), a tedious but explicitly checkable existence condition involving H³(G, Z(A)) and the cohomology group H²(G, Z(A)).”

**Sources:**

- [Samuel Eilenberg and Saunders MacLane, Cohomology theory in abstract groups II. Group extensions with a non-Abelian kernel, Annals of Mathematics 48 (1947) 326–341](https://doi.org/10.2307/1969174)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Characterizing projective profinite groups by cohomological dimension makes closed subgroups projective

**Remember:** Dimension cannot grow on subgroups, so projectivity passes down.

*True by definition. Confidence: medium.* MSC 20J06 (Cohomology of groups), 20E18, 12G10. arXiv math.GR. Level 3: graduate.

**Definition.** A profinite group G is projective if every continuous surjection from a profinite group onto G has a continuous homomorphic section. This is equivalent to cd(G) ≤ 1, that is, to H²(G, M) = 0 for every torsion discrete G-module M.

**Problem.** Every closed subgroup of a projective profinite group is projective. In particular, closed subgroups of free profinite groups are projective, though they need not be free.

**How the definition helps.** Cohomological dimension cannot increase on closed subgroups, so the condition cd ≤ 1 passes down at once. That inequality follows from Shapiro's lemma, which turns cohomology of a closed subgroup into cohomology of G with function-valued coefficients (our own). With the lifting definition, a section for the subgroup would have to be built by hand (our own). The work went into the equivalence of projectivity with cd(G) ≤ 1 (our own).

**Wikipedia:** [Profinite group](https://en.wikipedia.org/wiki/Profinite_group). It says: “Projectivity for a profinite group G is equivalent to either of the two properties: the cohomological dimension cd(G) ≤ 1; for every prime p the Sylow p-subgroups of G are free pro-p-groups.”

**Sources:**

- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

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

**Definition.** For a group G and a left ℤ\[G\]-module M, define Hⁿ(G,M) as Extⁿ over ℤ\[G\] from the trivial module ℤ to M. Compute it by applying Hom over ℤ\[G\] into M to a projective resolution of ℤ and taking degree-n cohomology.

**Problem.** Let H be a subgroup of G and N a left ℤ\[H\]-module. The cohomology of G with coefficients in the coinduced module, the ℤ\[H\]-linear maps ℤ\[G\] → N, equals the cohomology of H with coefficients in N.

**How the definition helps.** With Ext, Shapiro's lemma is the same correspondence of maps in every term of a resolution (our own). Coinduction is right adjoint to restriction, so maps into the coinduced module are the same as restricted maps into N (our own). A projective resolution of ℤ over ℤ\[G\] stays projective over ℤ\[H\], because ℤ\[G\] is free over ℤ\[H\] by the coset decomposition (our own). The correspondence respects the differentials, so the two complexes give the same cohomology (our own).

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology). It says: “For A an abelian group equipped with a G-action, the degree-n group cohomology of G with coefficients in A is the nth-Ext-group”

**Wikipedia:** [Shapiro's lemma](https://en.wikipedia.org/wiki/Shapiro%27s_lemma). It says: “If S is projective as a left R-module, then:
\\operatorname{Ext}<sup>n<sub>R</sub></sup>({}<sub>R</sub> M,N) \\cong \\operatorname{Ext}<sup>n<sub>S</sub></sup>(M,\\operatorname{Hom}<sub>R</sub>(S,N))”

**Sources:** none listed. No primary source with a working link was found.

### Continuous cohomology of profinite groups is torsion, unlike abstract cohomology

**Remember:** Every continuous class lives on a finite quotient, so it is torsion.

*Rules out counterexamples.* MSC 20J06 (Cohomology of groups), 20E18, 12G05. arXiv math.GR, math.NT. Level 3: graduate.

**Definition.** A discrete module M for a profinite group G is a G-module in which every element has an open stabilizer. Continuous cohomology takes the right derived functors of invariants in this category.

**Problem.** For a profinite group G, the continuous cohomology Hⁱ(G, M) is a torsion group for every i &gt; 0 and every discrete module M. If M is a ℚ-vector space, then Hⁱ(G, M) = 0 for i &gt; 0.

**How the definition helps.** Every continuous class comes from Hⁱ(G/U,Mᵁ) for some open normal subgroup U, by the direct-limit formula (our own). In positive degrees transfer kills that class by \|G/U\|. For rational coefficients multiplication by this integer is invertible, so the class vanishes. Abstract H¹(Ẑ,ℚ) with trivial action contains the inclusion ℤ → ℚ extended to Ẑ by divisibility of ℚ (our own).

**Paper or page:** [Etale Cohomology, Lemma 59.57.6](https://stacks.math.columbia.edu/tag/0DV3). It says: “Let G be a profinite topological group. Then Hⁱ(G, M) is torsion for i &gt; 0 and any G-module M, and Hⁱ(G, M) = 0 if M is a Q-vector space.”

**Sources:**

- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Corestriction after restriction is the index, so finite groups have torsion cohomology

**Remember:** Restrict then transfer back, and you multiply by the index.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a subgroup H of finite index in G, the transfer, or corestriction, is a map from Hⁿ(H, M) to Hⁿ(G, M). In degree 0 it sends an H-fixed element m to the sum of gm over representatives g of the cosets of H. In higher degrees it is the unique extension of this map that commutes with the connecting maps of long exact sequences.

**Problem.** If G is finite, then \|G\| kills Hⁿ(G, M) for every n ≥ 1 and every G-module M. So Hⁿ(G, M) = 0 for n ≥ 1 when multiplication by \|G\| is invertible on M.

**How the definition helps.** This definition of transfer reduces the identity cor ∘ res = \[G : H\] to a check in degree 0 (our own). In degree 0, restriction then transfer adds \[G : H\] copies of m (our own). Both sides commute with connecting maps, so they agree in all degrees; the cochain formula needs a cocycle computation instead (our own). Take H trivial: its positive-degree cohomology is 0, so \|G\| kills every class (our own).

**Wikipedia:** [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “If the order of G is invertible in a G-module M (for example, if M is a ℚ-vector space), the transfer map can be used to show that Hⁿ(G,M) = 0 for n ⩾ 1.”

**Sources:**

- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Coset sums give relative cohomology

**Remember:** The kernel of the coset sum measures the difference between the two cohomologies.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For H ≤ G, let D be the kernel of the coefficient-sum map ℤ\[G/H\] → ℤ on left cosets. For each G-module M and n ≥ 1, define Hⁿ(G,H;M) as Extⁿ⁻¹ over ℤ\[G\] from D to M.

**Problem.** The relative cohomology of a group pair fits into a long exact sequence with the cohomologies of G and H.

**How the definition helps.** The kernel definition gives the desired sequence directly from the long exact sequence for Ext (our own). It avoids constructing connecting maps on functions of group elements (our own). The sum map gives a short exact sequence from D through the coset module to ℤ (our own). Shapiro’s lemma identifies Ext from the coset module with the cohomology of H (our own).

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

**Definition.** For a finite group G and G-module A, Tate cohomology Ĥⁿ equals Hⁿ(G,A) for n ≥ 1 and H₋ₙ₋₁(G,A) for n ≤ −2. In degrees −1 and 0 it gives the kernel and cokernel, respectively, of the norm from coinvariants to invariants. The norm sends the class of a to ∑ over g ∈ G of ga.

**Problem.** Suppose that for every subgroup H, H¹(H, A) = 0 and H²(H, A) is cyclic of order \|H\|, generated by the restriction of one class. Then cup product with that class is an isomorphism from Ĥⁿ(G, ℤ) to Ĥⁿ⁺²(G, A) for every n.

**How the definition helps.** Tate degrees put homology and cohomology in one sequence on which cup product raises degree by two (our own). The Tate–Nakayama theorem gives the stated isomorphism under the subgroup hypotheses. Degree −2 pairs the abelianization with invariants modulo norms, yielding reciprocity in the local class field setting (our own).

**Wikipedia:** [Tate cohomology group](https://en.wikipedia.org/wiki/Tate_cohomology_group). It says: “Tate cohomology groups are a slightly modified form of the usual cohomology groups of a finite group that combine homology and cohomology groups into one sequence.”

**Sources:**

- [John Tate, The higher dimensional cohomology groups of class field theory, Annals of Mathematics 56 (1952)](https://doi.org/10.2307/1969801)

### Tate cohomology makes cyclic group cohomology two-periodic in every degree

**Remember:** A complete resolution computes Tate cohomology on both sides of degree zero.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a finite group G, take a complete projective resolution P of the trivial ℤ\[G\]-module ℤ. For each integer n and G-module A, define Ĥⁿ(G,A) as the nth cohomology of Hom over ℤ\[G\] from P to A.

**Problem.** For a finite cyclic group G of order k and every G-module A, Ĥᵐ(G, A) ≅ Ĥᵐ⁺²(G, A) for every integer m.

**How the definition helps.** A finite cyclic group has a complete resolution repeating every two degrees (our own). For a generator t its maps alternate between multiplication by t−1 and multiplication by the norm 1+t+⋯+tᵏ⁻¹. Applying Hom into A preserves this two-step pattern in every degree (our own).

**Wikipedia:** [Herbrand quotient](https://en.wikipedia.org/wiki/Herbrand_quotient), [Group cohomology](https://en.wikipedia.org/wiki/Group_cohomology). It says: “If instead we use the Tate cohomology groups then the periodicity extends down to n=0.”

**Sources:**

- [John Tate, The higher dimensional cohomology groups of class field theory, Annals of Mathematics 56 (1952) 294–297](https://doi.org/10.2307/1969801)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### Tate cohomology vanishes on induced modules in every degree, including degree zero

**Remember:** Divide fixed points by norms, and induced modules become invisible.

*Rules out counterexamples.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For finite G, Tate cohomology uses ordinary Hⁿ for n ≥ 1 and homology H₋ₙ₋₁ for n ≤ −2. Degrees −1 and 0 are the kernel and cokernel of the norm from coinvariants to invariants. The norm sends the class of a to the sum of ga over g ∈ G.

**Problem.** Every induced module ℤ\[G\] ⊗ B, for an abelian group B, has Ĥⁿ(G, ℤ\[G\] ⊗ B) = 0 for all integers n. So an embedding of A into an induced module with quotient C gives Ĥⁿ⁺¹(G, A) ≅ Ĥⁿ(G, C) in every degree.

**How the definition helps.** For ℤ\[G\] ⊗ B, summing all translates identifies coinvariants with invariants, so both middle Tate groups vanish (our own). Shapiro’s lemma gives vanishing in the other degrees because the inducing subgroup is trivial. The long exact Tate sequence for the embedding then gives the stated shifts (our own).

**Wikipedia:** [Tate cohomology group](https://en.wikipedia.org/wiki/Tate_cohomology_group). It says: “If A is an induced G module (meaning, induced from a module for the trivial group) then all Tate cohomology groups of A vanish.”

**Sources:**

- [John Tate, The higher dimensional cohomology groups of class field theory, Annals of Mathematics 56 (1952) 294–297](https://doi.org/10.2307/1969801)
- [Kenneth S. Brown, Cohomology of Groups, Graduate Texts in Mathematics 87, Springer (1982)](https://doi.org/10.1007/978-1-4684-9327-6)

### The Herbrand quotient is multiplicative and equals one on finite modules

**Remember:** Divide the order of even Tate cohomology by the order of odd Tate cohomology.

*Makes the theorem clean to state or prove.* MSC 20J06 (Cohomology of groups), 11R37. arXiv math.NT, math.GR. Level 3: graduate.

**Definition.** Let G be a finite cyclic group and A a G-module whose Tate groups Ĥ⁰(G, A) and Ĥ¹(G, A) are finite. The Herbrand quotient h(A) is the order of Ĥ⁰(G, A) divided by the order of Ĥ¹(G, A). By the period 2 of Tate cohomology, these two groups give all the Tate groups of A.

**Problem.** Let 0 → A → B → C → 0 be an exact sequence of G-modules. If two of the three Herbrand quotients are defined, so is the third, and h(B) = h(A)h(C). If A is finite, then h(A) = 1, so a submodule of finite index has the same quotient.

**How the definition helps.** Periodicity folds the long exact sequence of Tate groups into an exact hexagon of six groups (our own). In an exact cycle of finite groups, the alternating product of the orders is 1, and here that product is h(A)h(C)/h(B) (our own). For finite A, the orders of kernels and images of 1 − t and of the norm balance, so h(A) = 1 (our own). The work went into periodicity, which the Tate groups give in all degrees (our own).

**Wikipedia:** [Herbrand quotient](https://en.wikipedia.org/wiki/Herbrand_quotient). It says: “The Herbrand quotient is multiplicative on short exact sequences.”

**Sources:**

- [Jean-Pierre Serre, Local Fields, Graduate Texts in Mathematics 67, Springer (1979)](https://doi.org/10.1007/978-1-4757-5673-9)

### Two-stage invariants give spectral sequences

**Remember:** Take fixed elements first under the kernel and then under the quotient.

*True by definition.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a group G, define Hⁿ(G,M) as the nth right derived functor of M ↦ Mᴳ on G-modules. Here Mᴳ consists of the elements fixed by every g in G.

**Problem.** For N normal in G, a spectral sequence computes group cohomology in stages, starting with Hᵖ(G/N, Hᑫ(N, M)) on its second page. The final terms of total degree n describe successive quotients of a chain of subgroups in Hⁿ(G, M).

**How the definition helps.** For normal N, taking G-invariants is the composite of taking N-invariants and then G/N-invariants (our own). Taking N-invariants preserves injectives because its left adjoint, inflation, is exact. The Grothendieck spectral sequence for this composite gives the stated second page and filtration (our own).

**nLab:** [group cohomology](https://ncatlab.org/nlab/show/group+cohomology). It says: “This decomposition gives rise to a Grothendieck spectral sequence for the group cohomology”

**Sources:** none listed. No primary source with a working link was found.

### Virtual dimension handles torsion

**Remember:** Pass to a torsion-free subgroup before measuring dimension.

*Rules out counterexamples.* MSC 20J06 (Cohomology of groups). arXiv math.GR. Level 3: graduate.

**Definition.** Integral cohomological dimension is the supremum of degrees in which some group module has nonzero cohomology. If G has a torsion-free subgroup H of finite index, define its virtual cohomological dimension as the integral cohomological dimension of H.

**Problem.** The group SL₂(ℤ) has virtual cohomological dimension one but infinite integral cohomological dimension.

**How the definition helps.** Virtual dimension uses a nontrivial free subgroup of finite index in SL₂(ℤ), so it equals one (our own). The subgroup generated by −I has order two and nonzero integral cohomology in every positive even degree. Since subgroup dimension cannot exceed group dimension, SL₂(ℤ) has infinite integral dimension (our own).

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

**How the definition helps.** Choosing one object per component gives a full subgroupoid meeting every isomorphism class. Its inclusion is fully faithful and essentially surjective, hence an equivalence by the equivalence criterion with choice (our own). Each chosen object retains exactly its automorphism group.

**nLab:** [groupoid](https://ncatlab.org/nlab/show/groupoid). It says: “every groupoid is equivalent to a disjoint union of group deloopings”

**Sources:** none listed. No primary source with a working link was found.

### Representations as functors are invariant under equivalence of groupoids

**Remember:** An inverse up to isomorphism still gives inverse changes of representation.

*True by definition.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.CT, math.RT. Level 3: graduate.

**Definition.** Define a linear representation of a groupoid as a functor to vector spaces. It gives a vector space for each object and a linear isomorphism for each arrow. A group-based description picks one object in each component and uses its symmetry group.

**Problem.** Equivalent groupoids have equivalent categories of linear representations. So a connected groupoid has the same representations as the symmetry group of any one of its objects.

**How the definition helps.** Precomposition with an equivalence and its quasi-inverse gives quasi-inverse functors on representation categories (our own). For a connected groupoid, the full subgroupoid on any one object is equivalent to the whole groupoid. This identifies its representations with representations of that object’s automorphism group (our own).

**nLab:** [groupoid representation](https://ncatlab.org/nlab/show/groupoid+representation), [groupoid](https://ncatlab.org/nlab/show/groupoid). It says: “A linear representation of 𝒢 is a groupoid homomorphism (functor)”

**Sources:** none listed. No primary source with a working link was found.

### The action groupoid has unique arrow lifts, which characterize group actions

**Remember:** Keep each group label and the source determines the target.

*True by definition. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18B40. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** For a left G-action on S, the action groupoid has objects x ∈ S. Each g ∈ G gives one labeled arrow (g,x) from each x to gx. Successive arrows (g,x) and (h,gx) compose to (hg,x).

**Problem.** The projection from the action groupoid to the one-object groupoid of G has unique lifting. For each object x and each g, exactly one arrow starts at x and lies over g. Conversely, every functor to the one-object groupoid of G with unique lifting comes from an action, up to isomorphism.

**How the definition helps.** For each source x the projection sends exactly one arrow to each g. Conversely, define gx as the target of the unique lift of g from x (our own). Uniqueness identifies the lift of 1 with the identity and the lift of hg with the composite of successive lifts. Thus the targets define an action, and its labeled arrows recover the original groupoid (our own).

**nLab:** [action groupoid](https://ncatlab.org/nlab/show/action+groupoid). It says: “Notice also that an action of G on the set S gives rise to a morphism p : S ⋊ G → G which has the property of unique path lifting”

**Sources:** none listed. No primary source with a working link was found.

### The double coset groupoid keeps the stabilizers H ∩ gKg⁻¹

**Remember:** Keep the arrows and the subgroup intersections become stabilizers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 18N10. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** For subgroups H and K of G, let H × K act on G by (h, k)·g = hgk⁻¹. Use the action groupoid of this action. The ordinary set of double cosets keeps only the orbits.

**Problem.** The components of this groupoid are the double cosets HgK. The symmetry group of g is isomorphic to H ∩ gKg⁻¹.

**How the definition helps.** Two objects share a component exactly when they lie in the same H × K orbit, namely a double coset (our own). An arrow (h,k) fixes g exactly when k = g⁻¹hg. Thus h ↦ (h,g⁻¹hg) identifies H ∩ gKg⁻¹ with the automorphism group of g (our own).

**nLab:** [double coset](https://ncatlab.org/nlab/show/double+coset), [2-pullback](https://ncatlab.org/nlab/show/2-pullback). It says: “can be defined as the homotopy pullback of maps of delooped groups”

**Sources:** none listed. No primary source with a working link was found.

### The loop groupoid of a group shows centralizers as symmetry groups

**Remember:** An arrow conjugates, and a loop commutes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20L05 (Groupoids (i.e. small categories in which all morphisms are isomorphisms)), 20E45. arXiv math.GR, math.CT. Level 3: graduate.

**Definition.** The loop groupoid of G has objects g ∈ G and one arrow labeled h from g to h⁻¹gh for every h ∈ G. Successive labels h and k compose to hk.

**Problem.** The components of the loop groupoid are the conjugacy classes of G. The symmetry group of an object g is its centralizer, the set of elements that commute with g.

**How the definition helps.** Two objects share a component precisely when some group element conjugates one to the other. At g, an arrow labeled h is a loop precisely when h commutes with g (our own). With the stated right-action convention, inversion identifies the automorphism group with the centralizer (our own).

**nLab:** [loop groupoid](https://ncatlab.org/nlab/show/loop+groupoid). It says: “This is the groupoid whose objects are the elements of G, and whose morphisms are of the form”

**Sources:** none listed. No primary source with a working link was found.

### The universal property makes group completion preserve direct sums

**Remember:** Maps out of a completed sum split into maps out of the two monoids.

*True by definition.* MSC 20M14 (Commutative semigroups), 18A40. arXiv math.RA, math.CT. Level 3: graduate.

**Definition.** The group completion of a commutative monoid M is an abelian group K(M) with a monoid map i from M. Every monoid map from M to an abelian group factors uniquely through i by a group homomorphism.

**Problem.** The group completion of M ⊕ N is naturally isomorphic to K(M) ⊕ K(N).

**How the definition helps.** A monoid map from M ⊕ N to any abelian group amounts to one map from each summand (our own). Each extends uniquely to the corresponding completion. The pair therefore defines exactly one homomorphism from K(M) ⊕ K(N), which gives the required universal property (our own).

**nLab:** [Grothendieck group](https://ncatlab.org/nlab/show/Grothendieck+group). It says: “The forgetful functor U: Ab → CMon from the category Ab to the category CMon has a left adjoint F (the corresponding free functor), the group completion functor”

**Wikipedia:** [Grothendieck group](https://en.wikipedia.org/wiki/Grothendieck_group). It says: “one thus obtains a functor from the category of commutative monoids to the category of abelian groups which sends the commutative monoid M to its Grothendieck group K. This functor is left adjoint to the forgetful functor”

**Sources:** none listed. No primary source with a working link was found.

### Naming the inverse operation makes inverse semigroups a variety

**Remember:** Name the inverse as an operation so products and quotients preserve the equations.

*True by definition. Confidence: medium.* MSC 20M18 (Inverse semigroups), 08B20. arXiv math.GR. Level 3: graduate.

**Definition.** Use an associative product and a unary operation x ↦ x⁻¹. For all x,y require xx⁻¹x = x, (x⁻¹)⁻¹ = x and (xy)⁻¹ = y⁻¹x⁻¹. Also require xx⁻¹yy⁻¹ = yy⁻¹xx⁻¹ for every x,y.

**Problem.** Inverse semigroups form a variety, a class defined by equations, once inverse is a specified operation. They have free inverse semigroups on every nonempty set of generators.

**How the definition helps.** Naming the inverse makes the axioms equations, so quotients, subalgebras and products preserve them. A subalgebra must now be closed under inverse as well as multiplication. In our own argument, the general free algebra theorem then gives existence without a special construction. The work is to prove that these equations give exactly the semigroups with unique inverses.

**Wikipedia:** [Inverse semigroup](https://en.wikipedia.org/wiki/Inverse_semigroup). It says: “A presentation of the free inverse semigroup on a set X may be obtained by considering the free semigroup with involution, where involution is the taking of the inverse, and then taking the quotient by the Vagner congruence”

**Sources:** none listed. No primary source with a working link was found.

### Monoid actions as functors form a presheaf topos

**Remember:** Actions are functors on one-object categories, so the presheaf theorem applies.

*True by definition.* MSC 20M30 (Representation of semigroups; actions of semigroups on sets), 18F10. arXiv math.CT, math.RA. Level 3: graduate.

**Definition.** View a monoid M as a one-object category with multiplication as composition. A left M-action is a functor from this category to sets, and a map of actions is a natural transformation.

**Problem.** The category of left actions of any monoid M on sets is a Grothendieck topos. This means it is equivalent to a category of sheaves on a small category with a notion of covering.

**How the definition helps.** A left action is therefore a presheaf on the opposite of the one-object category M (our own). Natural transformations give the action-preserving maps. The theorem that presheaves on a small category form a Grothendieck topos applies directly (our own).

**nLab:** [action](https://ncatlab.org/nlab/show/action), [category](https://ncatlab.org/nlab/show/category). It says: “The category of actions of M in C is then defined to be the functor category C<sup>(𝐁M)</sup>. When C is Set this is called MSet.”

**Wikipedia:** [Monoid](https://en.wikipedia.org/wiki/Monoid). It says: “A monoid is, essentially, the same thing as a category with a single object.”

**Sources:** none listed. No primary source with a working link was found.

### The syntactic congruence makes its monoid divide every recognizer

**Remember:** The broadest equivalence that respects the language gives the smallest recognizing monoid.

*True by definition.* MSC 20M35 (Semigroups in automata theory, linguistics, etc.), 68Q70. arXiv cs.FL, math.GR. Level 3: graduate.

**Definition.** For a language L, two words u,v are syntactically congruent if xuy ∈ L exactly when xvy ∈ L for every pair of words x,y. The syntactic monoid is the quotient of the free monoid by this congruence.

**Problem.** The syntactic monoid of L is a quotient of a submonoid of any monoid that recognizes L. A language therefore has a finite recognizing monoid if and only if its syntactic monoid is finite.

**How the definition helps.** A recognizing homomorphism sending u,v to the same element also identifies their images in every context (our own). Its image therefore maps onto the syntactic monoid by sending each word image to its class. Conversely, membership in L is constant on each syntactic class, so the quotient map recognizes L (our own).

**Wikipedia:** [Syntactic monoid](https://en.wikipedia.org/wiki/Syntactic_monoid). It says: “It can be shown that it is the smallest monoid that recognizes S; that is, M(S) recognizes S, and for every monoid N recognizing S, M(S) is a quotient of a submonoid of N.”

**Sources:** none listed. No primary source with a working link was found.

### Making division an operation turns quasigroups into an equational theory

**Remember:** Make division an operation, and the axioms become equations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20N05 (Loops, quasigroups), 08B05. arXiv math.RA. Level 3: graduate.

**Definition.** A quasigroup has three binary operations, multiplication, right division / and left division ∖. For every x,y require (x/y)y = x and (xy)/y = x. Also require x(x∖y) = y and x∖(xy) = y.

**Problem.** With the two divisions as operations, quasigroups form a variety, a class of algebras defined by equations only. This matches the first definition, in which a x = b and y a = b have unique solutions. So quasigroups can be defined inside any category with finite products.

**How the definition helps.** For fixed a, the four identities make left and right multiplication by a invertible, with the corresponding divisions as inverses (our own). Thus each equation ax = b or ya = b has exactly one solution, and these solutions uniquely determine the divisions. The resulting finite-product equations define a variety and make sense in every category with finite products (our own).

**nLab:** [quasigroup](https://ncatlab.org/nlab/show/quasigroup). It says: “Thus quasigroups are described by a Lawvere theory and can therefore be internalized into any cartesian monoidal category.”

**Sources:**

- [R. H. Bruck, A Survey of Binary Systems, Springer (1958)](https://doi.org/10.1007/978-3-662-35338-7)

### Cores and weights of multipartitions classify blocks of Ariki–Koike algebras

**Remember:** Combine the charged partitions first, then strip hooks from the single partition.

*Makes the theorem clean to state or prove.* MSC 20C08 (Hecke algebras and their representations), 05E10. arXiv math.RT, math.CO. Level 4: research.

**Definition.** Fix e ≥ 2 and a multicharge, and take the Uglov image partition of the charged multipartition. Repeatedly remove a rim hook of e boxes, leaving a partition each time. The e-core is the terminal partition, and the e-weight is the number of removals.

**Problem.** Fix an Ariki–Koike algebra whose quantum parameter has finite order e of at least two. Two multipartitions label modules in the same block exactly when their e-cores and e-weights agree. A block is an indecomposable two-sided summand of the algebra.

**How the definition helps.** The Uglov map assigns one partition to the charged data, so ordinary rim-hook removal gives both invariants (our own). The paper’s block classification identifies equality of these invariants with membership in the same block for the fixed algebra.

**Paper or page:** [Cores and weights of multipartitions and blocks of Ariki-Koike algebras](https://arxiv.org/abs/2408.10626v3). It says: “We do not place any restriction on the multicharge for these definitions. We show how these definitions lead to the definition of the e-core and the e-weight of a block”

**Sources:**

- [Yanbo Li, Kai Meng Tan, Cores and weights of multipartitions and blocks of Ariki-Koike algebras, arXiv:2408.10626 (2025)](https://arxiv.org/abs/2408.10626v3)

### Equal traces of powers detect representations agreeing on a finite-index subgroup

**Remember:** Take powers before taking traces.

*Makes the theorem clean to state or prove.* MSC 20C15 (Ordinary representations and characters), 11F80. arXiv math.NT, math.RT. Level 4: research.

**Definition.** For a positive integer m, the m-power character of a representation ρ is g ↦ tr(ρ(gᵐ)). Two representations are potentially equivalent if their restrictions to some finite-index subgroup are isomorphic.

**Problem.** Let ρ₁ and ρ₂ be semisimple representations of any group in GLₙ(F), where F has characteristic zero. Semisimple means a direct sum of irreducible representations. They are potentially equivalent exactly when their m-power characters agree for some m.

**How the definition helps.** The power-character criterion expresses potential equivalence using one equality of functions. Replace a subgroup witnessing equivalence by its normal core, and let m be the index of that core (our own). Every gᵐ belongs to it, so the traces agree. The paper’s potential-equivalence theorem gives the converse.

**Paper or page:** [Finiteness theorems for potentially equivalent Galois representations: extension of Faltings' finiteness criteria](https://arxiv.org/abs/2012.15598v2). It says: “potential equivalence of a representation ρ is determined by an equality of an m-power character g ↦ Tr(ρ(gᵐ)) for some natural number m”

**Sources:**

- [Plawan Das, C. S. Rajan, Finiteness theorems for potentially equivalent Galois representations: extension of Faltings' finiteness criteria, arXiv:2012.15598v2 (2021)](https://arxiv.org/abs/2012.15598v2)

### Killing projectives turns the spectrum into Proj of group cohomology

**Remember:** Projectives sit at the irrelevant point, so killing them leaves Proj.

*True by definition.* MSC 20C20 (Modular representations and characters), 20J06, 18G80. arXiv math.RT, math.CT. Level 4: research.

**Definition.** For a finite group G and field k, stmod kG has finitely generated kG-modules as objects. Its morphisms are module homomorphisms modulo the subgroup of maps factoring through projective modules.

**Problem.** Let G be a finite group and k a field of characteristic p. Then Spc(Dᵇ(mod kG)) is homeomorphic to Specʰ H\*(G,k), and Spc(stmod kG) is homeomorphic to Proj H\*(G,k).

**How the definition helps.** Rickard’s equivalence identifies stmod kG with the derived category modulo perfect complexes (our own). The derived spectrum comparison identifies the spectrum with Specʰ H\*(G,k), where perfect complexes have support at the positive-degree ideal. Tensor triangular localization removes that support, leaving Proj H\*(G,k) (our own).

**Paper or page:** [The Balmer spectrum of certain Deligne-Mumford stacks](https://arxiv.org/abs/2101.01446), [Lattices over finite group schemes and stratification](https://arxiv.org/abs/2307.16271). It says: “The category Perf(AG) of perfect complexes of AG-modules is a thick tensor ideal in Dᵇ(AG)<sub>A</sub>-perf.”

**Sources:**

- [Dave Benson, Jon F. Carlson and Jeremy Rickard, Thick subcategories of the stable module category, Fund. Math. 153 (1997) 59–80](https://doi.org/10.4064/fm-153-1-59-80)
- [Paul Balmer, The spectrum of prime ideals in tensor triangulated categories, J. Reine Angew. Math. 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)

### Strong completeness forces continuity

**Remember:** Strong completeness makes every finite-index subgroup open.

*True by definition.* MSC 20E18 (Limits, profinite groups). arXiv math.GR. Level 4: research.

**Definition.** A profinite group is an inverse limit of finite discrete groups, with the topology inherited from their product. It is strongly complete if every subgroup of finite index is open. A group is topologically finitely generated if finitely many elements generate a dense subgroup.

**Problem.** Every abstract homomorphism from a strongly complete group to a profinite group is continuous. This applies in particular when the source is topologically finitely generated.

**How the definition helps.** Open normal subgroups in the target have finite index, so their preimages have finite index and are open by strong completeness (our own). These subgroups form a neighborhood basis at the identity, proving continuity (our own). The Nikolov–Segal theorem supplies strong completeness for topologically finitely generated profinite groups.

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “A finite index subgroup of a profinite group is not necessarily open.”

**Paper or page:** [Groups of finite type: classification and structural properties](https://arxiv.org/abs/2509.03927v1). It says: “Every topologically finitely generated profinite group is strongly complete.”

**Sources:**

- [N. Nikolov and D. Segal, On finitely generated profinite groups, I, 2007](https://doi.org/10.4007/annals.2007.165.171)

### Relators without powers give local indicability

**Remember:** A proper power repeats one free-group element at least twice.

*Rules out counterexamples.* MSC 20F05 (Generators, relations, and presentations of groups). arXiv math.GR. Level 4: research.

**Definition.** A one-relator presentation defines a group by setting one word in free generators equal to the identity. A proper power is a word equal in the free group to a power with exponent at least two.

**Problem.** A group with a single nontrivial relator that is not a proper power is locally indicable. This means every nontrivial finitely generated subgroup maps onto ℤ.

**How the definition helps.** The Brodskii–Howie local indicability theorem applies to a nontrivial one-relator word that is not a proper power. The excluded presentation ⟨a \| a²⟩ gives a nontrivial finite group, which cannot map onto ℤ (our own). Torsion-freeness alone does not prove local indicability (our own).

**Paper or page:** [The theory of one-relator groups: history and recent progress](https://arxiv.org/abs/2501.18306v1). It says: “If X = (Λ, λ) is a one-relator complex with deg(λ) = 1, then π₁(X) is locally indicable.”

**Sources:**

- [James Howie, On locally indicable groups (1982).](https://doi.org/10.1007/bf01214717)

### Polyhedral descriptions of rational sets give rational growth in virtually abelian groups

**Remember:** Turn regular words into lattice points before counting by word length.

*Makes the theorem clean to state or prove.* MSC 20F10 (Word problems, other decision problems, connections with logic and automata (group-theoretic aspects)), 20F69, 68Q45. arXiv math.GR, cs.FL. Level 4: research.

**Definition.** Fix a finite-index free abelian subgroup with a basis in a finitely generated virtually abelian group, and choose coset representatives. A subset is coset-wise polyhedral if its coordinates in each coset form a finite union of sets defined by finitely many integer-linear constraints. The constraints may be equations, inequalities or congruences.

**Problem.** In a finitely generated virtually abelian group, the rational subsets are exactly the coset-wise polyhedral ones. The growth series of such a set is rational for every finite generating set. The growth series is the power series whose coefficient of zⁿ counts the elements of the set with word length n.

**How the definition helps.** The paper’s equivalence theorem describes each rational subset by lattice points in cosets. Coordinates count elements once, even when several accepted words represent the same element (our own). The rational growth theorem also controls word length in these coordinates for the chosen generating set (our own).

**Paper or page:** [Rational sets in virtually abelian groups: languages and growth](https://arxiv.org/abs/2205.05621v2), [Rational sets in virtually abelian groups: languages and growth](https://arxiv.org/abs/2205.05621v2). It says: “We prove equivalences between the structures used in the literature, and establish the rationality of important classes of sets in G”

**Sources:**

- [Laura Ciobanu, Alex Evetts, Rational sets in virtually abelian groups: languages and growth, arXiv:2205.05621v2 (2023)](https://arxiv.org/abs/2205.05621v2)

### Measuring nilpotence against the whole brace makes nilpotent ideals closed under sums

**Remember:** Measure centrality against the whole brace before adding ideals.

*Rules out counterexamples.* MSC 20F18 (Nilpotent groups), 16T25. arXiv math.GR, math.QA. Level 4: research.

**Definition.** An ideal I is B-centrally nilpotent if a finite chain of B-ideals from zero to I has central factors relative to B. For successive terms J ≤ K, this requires K/J to lie in the annihilator of B/J. There each annihilator element a satisfies a∘b = a+b = b+a = b∘a for every b.

**Problem.** Let I and J be B-centrally nilpotent ideals of a brace B, of classes n and m. Then I + J is B-centrally nilpotent, of class at most n + m.

**How the definition helps.** The series tests each factor against the ambient quotient, so its centrality conditions also apply to elements of the other ideal (our own). The paper’s sum theorem gives the class bound n + m for two such ideals. Example B shows why testing each ideal only inside itself is insufficient.

**Paper or page:** [Central nilpotency of left skew braces and solutions of the Yang-Baxter equation](https://arxiv.org/abs/2310.07474v2), [Central nilpotency of left skew braces and solutions of the Yang-Baxter equation](https://arxiv.org/abs/2310.07474v2). It says: “the product of centrally nilpotent ideals need not be centrally nilpotent (Example B), a rather peculiar fact. To cope with these examples, we introduce a special type of nilpotent ideal”

**Sources:**

- [Adolfo Ballester-Bolinches, Ramón Esteban-Romero, Maria Ferrara, Vicent Pérez-Calabuig, Marco Trombetti, Central nilpotency of left skew braces and solutions of the Yang-Baxter equation, Pacific J. Math. 335 (2025) 1-32](https://arxiv.org/abs/2310.07474v2)

### Skew bracoids extend the skew brace correspondence to non-Galois separable extensions

**Remember:** Allow point stabilizers so the group can act on cosets.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F29 (Representations of groups as automorphism groups of algebraic systems), 16T05, 12F10. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A skew bracoid consists of groups G,N and a transitive action of G on the set N. For every g ∈ G and x,y ∈ N, require g·(xy) = (g·x)(g·1)⁻¹(g·y).

**Problem.** Let G be the Galois group of the Galois closure of a finite separable extension L/K, and H the subgroup fixing L. Hopf–Galois structures on L/K correspond to group structures on G/H with identity H that make the natural G-action a skew bracoid.

**How the definition helps.** The coset action has stabilizer H, which can be nontrivial, as a skew bracoid allows (our own). Greither–Pareigis identifies Hopf–Galois structures with regular permutation groups on G/H normalized by G. Using H as origin identifies these groups with translation groups for the compatible group structures (our own).

**Paper or page:** [Skew bracoids](https://arxiv.org/abs/2305.15848v1). It says: “finite skew bracoids correspond with Hopf-Galois structures on finite separable extensions of fields, generalizing the existing connection between finite skew braces and Hopf-Galois structures on finite Galois extensions.”

**Sources:**

- [Isabel Martin-Lyons, Paul J. Truman, Skew bracoids, arXiv:2305.15848v1 (2023)](https://arxiv.org/abs/2305.15848v1)

### Relative hyperbolicity covers the cusped hyperbolic manifolds that hyperbolic groups miss

**Remember:** Allow the cusp groups, and ask hyperbolicity only of the rest.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20F67 (Hyperbolic groups and nonpositively curved groups). arXiv math.GR, math.MG. Level 4: research.

**Definition.** A group is hyperbolic relative to a finite family of subgroups if it acts on a connected fine hyperbolic graph with finitely many edge orbits. Edge stabilizers must be finite, and the infinite vertex stabilizers must be exactly the conjugates of the listed infinite subgroups. Fineness means each edge belongs to finitely many simple circuits of each given length.

**Problem.** For a complete noncompact hyperbolic 3-manifold of finite volume, each cusp contributes a subgroup containing ℤ², which precludes hyperbolicity of the fundamental group. The group is hyperbolic relative to its cusp subgroups. Farb’s theorem gives a solvable word problem when the peripheral word problems are solvable.

**How the definition helps.** The peripheral subgroups can stabilize vertices even when they contain ℤ² (our own). The relative hyperbolicity theorem for finite-volume hyperbolic manifolds identifies precisely the cusp subgroups as peripheral. Farb’s word-problem theorem then applies (our own).

**Wikipedia:** [Relatively hyperbolic group](https://en.wikipedia.org/wiki/Relatively_hyperbolic_group). It says: “Illustrative examples of relatively hyperbolic groups are provided by the fundamental groups of complete noncompact hyperbolic manifolds of finite volume.”

**Sources:**

- [B. Farb, Relatively hyperbolic groups, Geometric and Functional Analysis 8 (1998) 810–840](https://doi.org/10.1007/s000390050075)
- [B. H. Bowditch, Relatively hyperbolic groups, International Journal of Algebra and Computation 22 (2012) 1250016](https://doi.org/10.1142/S0218196712500166)

### Cohomological generator and relation counts make Golod–Shafarevich a statement about the group

**Remember:** Count generators and relators in a minimal pro-p presentation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20J05 (Homological methods in group theory), 20D15, 20F05. arXiv math.GR, math.NT. Level 4: research.

**Definition.** For a finite p-group G, its generator rank is the minimum size of a generating set. Its pro-p relation rank is the minimum number of defining relators in a pro-p presentation on that many generators.

**Problem.** For a nontrivial finite p-group G, its generator rank d and pro-p relation rank r satisfy r &gt; d²/4. Thus every presentation of G on d generators has more than d²/4 relators.

**How the definition helps.** With trivial coefficients 𝔽ₚ, the presentation rank formulas identify the generator and relation ranks with d = dim H¹(G,𝔽ₚ) and r = dim H²(G,𝔽ₚ). These counts depend only on G (our own). Golod–Shafarevich gives the strict inequality, and any abstract presentation also presents its pro-p completion as a pro-p group (our own).

**Wikipedia:** [Golod–Shafarevich theorem](https://en.wikipedia.org/wiki/Golod%E2%80%93Shafarevich_theorem). It says: “If G is a non-trivial finite p-group, then r &gt; d²/4, where d = dim H¹(G,ℤ/pℤ) and r = dim H²(G,ℤ/pℤ) (the mod p cohomology groups of G).”

**Sources:**

- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### Invariant means make bounded cocycles of amenable groups into dual modules coboundaries

**Remember:** Average a bounded cocycle, and you get its primitive.

*True by definition.* MSC 20J06 (Cohomology of groups), 43A07. arXiv math.GR, math.FA. Level 4: research.

**Definition.** A discrete group Γ is amenable if bounded real functions on Γ admit a positive linear functional m with m(1) = 1. For every bounded u and every g ∈ Γ it must satisfy m(h ↦ u(gh)) = m(u).

**Problem.** Suppose an amenable discrete group Γ acts by linear isometries on a Banach space E, with the induced dual action on E\*. Every bounded 1-cocycle f from Γ to E\* satisfies f(g) = g·φ − φ for some φ ∈ E\* and every g ∈ Γ.

**How the definition helps.** Average h ↦ f(h)(x) for each x ∈ E to obtain ψ(x), extending the real mean complex-linearly if needed (our own). Linearity and boundedness give ψ ∈ E\*. Averaging the identity f(gh) = f(g) + g·f(h) gives ψ = f(g) + g·ψ by invariance. Thus φ = −ψ works (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “If Γ acts by isometries on a (separable) Banach space E and f in ℓ∞(Γ, E\*) is a bounded 1-cocycle, i.e. f(gh) = f(g) + g·f(h), then f is a 1-coboundary”

**Sources:**

- [Barry Edward Johnson, Cohomology in Banach algebras, Memoirs of the American Mathematical Society 127 (1972)](https://doi.org/10.1090/memo/0127)

### Mislin's completion vanishes on every object of finite projective dimension

**Remember:** Kill projectives, then shift until the resolution ends.

*True by definition.* MSC 20J06 (Cohomology of groups), 18G15. arXiv math.GR, math.KT. Level 4: research.

**Definition.** A cohomological functor is a family of functors Tⁿ, for all integers n, that turns short exact sequences into long exact sequences. Its Mislin completion T̂ is the universal such functor that vanishes on projective objects and receives a map from T. For group cohomology, T̂ is complete cohomology, which is Tate cohomology for finite groups.

**Problem.** If an object M has finite projective dimension, then T̂ⁿ(M) = 0 for every integer n. The paper also shows that complete cohomology vanishes for every group of finite cohomological dimension.

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

**How the definition helps.** For a finite continuous Γ̂-module M, let Q be the finite image of the action. A derivation f corresponds to a homomorphism g ↦ (f(g),q(g)) into M ⋊ Q over the action map q (our own). Its unique continuous extension still projects to q on Γ̂ by density, so its first coordinate extends f. Principal derivations use the same elements of M on both sides, giving the isomorphism on H¹ (our own).

**Paper or page:** [Cohomological Separability of Baumslag--Solitar groups and Their Generalisations, Lemma 2.4](https://arxiv.org/abs/2406.03960v1), [Cohomological Separability of Baumslag--Solitar groups and Their Generalisations, Lemma 3.2](https://arxiv.org/abs/2406.03960v1). It says: “All groups have separable cohomology in dimension 1.”

**Sources:**

- [William D. Cohen and Julian Wykowski, Cohomological Separability of Baumslag–Solitar groups and Their Generalisations, arXiv:2406.03960 (2024)](https://arxiv.org/abs/2406.03960)
- [Jean-Pierre Serre, Galois Cohomology, Springer (1997)](https://doi.org/10.1007/978-3-642-59141-9)

### The twisting identity makes the twisted product of monoids associative

**Remember:** Charge the same total for both ways of multiplying three elements.

*True by definition.* MSC 20M10 (General structure theory for semigroups), 20M20. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A twisting on a monoid S is a map Φ from S × S to ℕ. For all a,b,c in S it satisfies Φ(a,b)+Φ(ab,c) = Φ(a,bc)+Φ(b,c). For an additive commutative monoid M and q ∈ M, define (i,a)(j,b) = (i+j+Φ(a,b)q,ab) on M × S.

**Problem.** The twisted product is associative. Such products appear for diagram monoids, where Φ counts the floating components made by joining diagrams.

**How the definition helps.** Both bracketings have base term i+j+k in the first coordinate (our own). Their corrections multiply q by Φ(a,b)+Φ(ab,c) and Φ(a,bc)+Φ(b,c), respectively. The twisting identity equates these coefficients, and associativity in S equates the second coordinates (our own).

**Paper or page:** [Twisted products of monoids](https://arxiv.org/abs/2507.04486v2). It says: “A twisting of a monoid S is a map Φ:S×S→ℕ satisfying the identity Φ(a,b) + Φ(ab,c) = Φ(a,bc) + Φ(b,c).”

**Sources:**

- [James East, Robert D. Gray, P. A. Azeef Muhammed, Nik Ruškuc, Twisted products of monoids, arXiv:2507.04486v2 (2025)](https://arxiv.org/abs/2507.04486v2)

### ACCP on generators characterizes atomic monoids

**Remember:** Every ascending chain starting at a generator’s two-sided ideal must stabilize.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 20M13 (Arithmetic theory of semigroups), 13A05. arXiv math.AC, math.RA. Level 4: research.

**Definition.** An element a of a monoid M satisfies the ascending chain condition on principal ideals (ACCP) if no infinite strictly ascending chain starts at MaM. A monoid is atomic if each nonunit is a finite product of atoms, meaning nonunits that cannot factor into two nonunits.

**Problem.** An acyclic monoid is atomic exactly when it has a generating set each of whose elements satisfies the ACCP. Acyclic means that x = uxv only when u and v are units.

**How the definition helps.** Asking ACCP only of a generating set, not of every element, gives the exact condition for atomicity. This answers a question left open after Grams's 1974 counterexample to Cohn's claim that atomic domains satisfy ACCP. In our own reading, one direction is easy, because the atoms and units generate an atomic monoid and each atom satisfies the ACCP. The work is in the converse, which rests on Theorem 2.4 on monoids with a preorder (our own reading).

**Paper or page:** [A characterization of atomicity](https://arxiv.org/abs/2209.05238v2). It says: “An acyclic monoid is atomic if and only if it has a generating set each of whose elements satisfies the ACCP.”

**Sources:**

- [Salvatore Tringali, A characterization of atomicity, arXiv:2209.05238 (2022), Math. Proc. Cambridge Phil. Soc. 175 (2023), No. 2, 459-465](https://arxiv.org/abs/2209.05238v2)
- [Anne Grams, Atomic rings and the ascending chain condition for principal ideals, Math. Proc. Cambridge Phil. Soc. 75 (1974), 321-329](https://doi.org/10.1017/s0305004100048532)

### One purity test for monoid acts detects exactly the right coherent monoids

**Remember:** Test only finitely presented subacts, and coherence appears.

*Makes the theorem clean to state or prove.* MSC 20M30 (Representation of semigroups; actions of semigroups on sets), 20M50. arXiv math.GR, math.RA. Level 4: research.

**Definition.** A monoid S is right coherent if every finitely generated subact of a finitely presented right S-act is finitely presented. A right act A is absolutely pure if every map into A from such a subact extends over its ambient act. For mfp-purity require extension only for finitely presented subacts of cyclic finitely presented acts.

**Problem.** A monoid S is right coherent exactly when every mfp-pure right S-act is absolutely pure. Absolutely pure acts are always mfp-pure, so the condition says the two classes coincide.

**How the definition helps.** Coherence makes finite generation suffice for finite presentation of the test subacts (our own). The paper’s characterization also handles the restriction to cyclic ambient acts and proves the converse. Testing finitely generated subacts of cyclic finitely presented acts instead gives almost purity, which can agree with absolute purity without coherence (our own).

**Paper or page:** [Coherency for monoids and purity for their acts](https://arxiv.org/abs/2209.01915v3). It says: “Our second main result is that a monoid S is right coherent if and only if the classes of mfp-pure and absolutely pure S-acts coincide”

**Sources:**

- [Yang Dandan, Victoria Gould, Coherency for monoids and purity for their acts, arXiv:2209.01915v3 (2023)](https://arxiv.org/abs/2209.01915v3)
