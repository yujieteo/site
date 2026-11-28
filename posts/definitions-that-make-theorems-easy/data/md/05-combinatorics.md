### Counting fixed points as cycles gives Cayley's distance formula

**Remember:** Count fixed points as cycles, and distance is n minus the cycles.

*Rules out counterexamples. Confidence: medium.* MSC 05A05 (Permutations, words, matrices), 20B30. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The Cayley distance between two permutations of n elements is the least number of swaps of two elements that turns one into the other. When counting the cycles of a permutation, each fixed point counts as a cycle of length 1.

**Problem.** The Cayley distance between π and σ equals n minus the number of cycles of π∘σ⁻¹.

**How the definition helps.** With fixed points counted, the identity has exactly n cycles, and each swap changes the cycle count by exactly one, because it splits one cycle or merges two (our own). So reaching the identity from π∘σ⁻¹ takes at least n minus its cycle count swaps. Splitting one element off a nontrivial cycle at each step attains this bound (our own).

**Paper or page:** [Improving the Gilbert-Varshamov bound for permutation Codes in the Cayley metric and Kendall $τ$-Metric](https://arxiv.org/abs/2404.15126). It says: “The Cayley distance distance dC(π,σ) between π and σ equals n minus the number of permutation cycles in π∘σ⁻¹”

**Sources:**

- [The Nguyen, Improving the Gilbert–Varshamov bound for permutation codes in the Cayley metric and Kendall τ-metric, arXiv:2404.15126 (2024)](https://arxiv.org/abs/2404.15126)

### Cycle lengths give permutation sign

**Remember:** A cycle contributes a minus sign exactly when its length is even.

*True by definition.* MSC 05A05 (Permutations, words, matrices). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The sign of a permutation of a finite set is +1 if its disjoint cycle decomposition has an even number of cycles of even length, and −1 otherwise. Fixed points count as cycles of length 1.

**Problem.** Composing a permutation with a swap reverses its sign. So any expression as k swaps gives sign (−1)ᵏ, and all such expressions have the same parity of length.

**How the definition helps.** A swap either merges two cycles or splits one cycle into two, and the total length stays the same. In each case the number of even cycles changes by exactly one, so the sign reverses. The identity has sign +1, so k swaps give (−1)ᵏ.

**nLab:** [signature of a permutation](https://ncatlab.org/nlab/show/signature+of+a+permutation). It says: “Each cycle of period k contributes a sign (−1)ᵏ⁻¹, and the overall sign is the product of these contributions taken over all the cycles.”

**Sources:** none listed. No primary source with a working link was found.

### Permutation matrices compose on basis vectors

**Remember:** The matrix moves basis vectors exactly as σ moves positions.

*True by definition.* MSC 05A05 (Permutations, words, matrices). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The matrix of a permutation σ sends the jth standard basis vector e<sub>j</sub> to e\_σ(j). So column j has a 1 in row σ(j) and zeros elsewhere.

**Problem.** The matrix for applying τ and then σ equals the matrix of σ times the matrix of τ.

**How the definition helps.** With this definition, a matrix product moves each basis vector by the two permutations in turn (our own). The matrix of τ sends e<sub>j</sub> to e\_τ(j), and the matrix of σ then sends it to e\_σ(τ(j)) (our own). That is what the matrix of σ∘τ does, and a linear map is fixed by its values on a basis (our own).

**Wikipedia:** [Permutation matrix](https://en.wikipedia.org/wiki/Permutation_matrix). It says: “pre-multiplying just once by the combined Cσ∘τ.”

**Sources:** none listed. No primary source with a working link was found.

### Reading a permutation backward gives Eulerian symmetry

**Remember:** Reading backward trades every fall for a rise.

*True by definition.* MSC 05A05 (Permutations, words, matrices), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A descent of a permutation is a position whose next entry is smaller, and a rise is a position whose next entry is larger. The Eulerian number A(n,k) counts the permutations of 1 through n with exactly k descents.

**Problem.** For n ≥ 1 and 0 ≤ k &lt; n, A(n,k) equals A(n,n − 1 − k).

**How the definition helps.** Reversing a permutation turns its descents into rises and its rises into descents. Each of the n − 1 adjacent positions is one or the other, so k descents become n − 1 − k, and reversing twice gives back the original. Starting instead from the coefficients in Worpitzky’s identity would first require proving that they count descents (our own).

**Wikipedia:** [Eulerian number](https://en.wikipedia.org/wiki/Eulerian_number). It says: “Fully reversing a permutation with k ascents creates another permutation in which there are n-k-1 ascents.”

**Sources:** none listed. No primary source with a working link was found.

### Binomial coefficients outside Pascal's triangle are zero

**Remember:** There are no ways to choose −1 or n + 1 things from n things.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** C(n,k) is the number of k-element subsets of an n-element set, for every integer k. So C(n,k) = 0 when k &lt; 0 or k &gt; n, because no subset has that size.

**Problem.** For every integer n ≥ 1 and every integer k, Pascal’s rule reads C(n,k) = C(n−1,k−1) + C(n−1,k), including the boundary cases.

**How the definition helps.** With the subset count for every k, Pascal’s rule needs no boundary cases. Split the k-element subsets by whether they contain a fixed element: the two parts have C(n − 1,k − 1) and C(n − 1,k) members, and either count may be zero (our own).

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “this causes most binomial coefficient identities to fail, and thus is not widely used by the majority of definitions”

**Sources:** none listed. No primary source with a working link was found.

### Binomial coefficients with any top number give Newton's series

**Remember:** Keep the falling product on top; the top may be anything.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 30B10. arXiv math.CO, math.CA. Level 1: early undergraduate.

**Definition.** For any complex number α and nonnegative integer k, C(α,k) = α(α − 1)⋯(α − k + 1)/k!, a product of k factors falling by 1, divided by k!. The formula needs no counting, so α may be negative, fractional or complex.

**Problem.** For complex α and \|X\| &lt; 1, Newton’s binomial series gives (1 + X)ᵅ = ∑ₖ₌₀<sup>∞</sup> C(α,k) Xᵏ. The power uses the analytic branch with value 1 at X = 0.

**How the definition helps.** The falling product gives one coefficient formula for every complex α, so the series can be written at all. Newton’s binomial series theorem supplies the identity on \|X\| &lt; 1 (our own). For a nonnegative integer α, every coefficient with k &gt; α has the factor 0, so the series becomes the binomial formula.

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “If α is a nonnegative integer n, then all terms with k &gt; n are zero, and the infinite series becomes a finite sum, thereby recovering the binomial formula.”

**Sources:** none listed. No primary source with a working link was found.

### Choosing letters makes the multinomial theorem a count of words

**Remember:** Each factor chooses one letter, and the word records all choices.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A multinomial coefficient counts the words of length n with k₁ copies of the first letter, k₂ copies of the second, and so on. Counting the n! orders of distinct copies and dividing by k₁!⋯kₘ! gives the same number.

**Problem.** In the nth power of a sum of distinct variables, each coefficient equals the multinomial coefficient for its exponents. The exponents are nonnegative integers with sum n.

**How the definition helps.** Expanding the nth power picks one variable from each of the n factors, which is a word of length n. Words with the same letter counts give the same monomial, so its coefficient is the number of such words. The factorial formula follows because permuting copies of one letter leaves a word unchanged (our own).

**nLab:** [multinomial coefficient](https://ncatlab.org/nlab/show/multinomial+coefficient). It says: “This number is the number of ways of drawing k₁ elements and then k₂ elements and so forth from n elements, all in an unordered way.”

**Paper or page:** [Multinomial Theorem](https://proofwiki.org/wiki/Multinomial_Theorem). It says: “(n choose k₁, k₂, …, kₘ) = n!/(k₁! k₂! ⋯ kₘ!) denotes a multinomial coefficient.”

**Sources:** none listed. No primary source with a working link was found.

### Counting ordered blocks factors multinomial coefficients into binomial coefficients

**Remember:** Choose each box from the elements that are still free.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A multinomial coefficient counts the ways to divide an n-element set into labeled boxes of given sizes k₁, …, kₘ with sum n. Boxes may be empty.

**Problem.** A multinomial coefficient is the product of the successive binomial coefficients for choosing each box from the elements still free.

**How the definition helps.** Filling the boxes in order turns one division into successive subset choices, each from the elements still free. Each binomial coefficient counts the choices for the next box, and a division’s boxes recover those choices, so the product counts each division once (our own). The factorial formula would instead need cancellation of the factorials of the remaining sizes.

**nLab:** [multinomial coefficient](https://ncatlab.org/nlab/show/multinomial+coefficient). It says: “This number is the number of ways of drawing k₁ elements and then k₂ elements and so forth from n elements, all in an unordered way.”

**Sources:** none listed. No primary source with a working link was found.

### Counting subsets makes binomial coefficients integers

**Remember:** A count of subsets cannot be a fraction.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** For nonnegative integers n and k, n choose k is the number of k-element subsets of an n-element set. As the size of a finite set, it is a nonnegative integer.

**Problem.** For integers 0 ≤ k ≤ n, the factorial quotient that gives n choose k is an integer.

**How the definition helps.** Integrality is immediate from the subset definition, so the work moves to showing that the factorial quotient equals the subset count. Count the n!/(n − k)! ordered choices of k distinct elements, then divide by the k! orders of each subset (our own).

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “This shows in particular that (ⁿₖ) is a natural number for any natural numbers n and k.”

**Paper or page:** [Binomial Coefficient is Integer](https://proofwiki.org/wiki/Binomial_Coefficient_is_Integer). It says: “Then (ⁿₖ) is an integer.”

**Sources:** none listed. No primary source with a working link was found.

### Counting subsets makes Pascal's rule a one-line split

**Remember:** Each subset either contains the chosen element or it does not.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** C(n,k) is the number of k-element subsets of an n-element set.

**Problem.** Let n and k be integers with 0 &lt; k &lt; n. Then C(n, k) = C(n − 1, k − 1) + C(n − 1, k).

**How the definition helps.** Fix one element: each k-element subset either contains it or does not. Those containing it match the (k − 1)-element subsets of the other n − 1 elements, and those missing it match the k-element subsets. Adding the two counts gives Pascal’s rule.

**Wikipedia:** [Pascal's rule](https://en.wikipedia.org/wiki/Pascal%27s_rule). It says: “Every subset of k elements either contains X or not.”

**Sources:** none listed. No primary source with a working link was found.

### Counting subsets makes the binomial theorem a matter of choosing factors

**Remember:** Pick y from k of the n factors: C(n,k) ways.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** C(n,k) is the number of k-element subsets of an n-element set, such as the ways to pick which k of the n factors of (x + y)ⁿ supply y.

**Problem.** For every natural number n, (x + y)ⁿ is the sum over k from 0 to n of C(n, k) xⁿ⁻ᵏyᵏ. This holds in every commutative ring.

**How the definition helps.** Expanding (x + y)ⁿ by distributivity gives one term for each subset of factors that supply y (our own). Since multiplication commutes, a subset of size k gives xⁿ⁻ᵏyᵏ. So the coefficient of xⁿ⁻ᵏyᵏ is the number of such subsets, C(n,k).

**Wikipedia:** [Binomial theorem](https://en.wikipedia.org/wiki/Binomial_theorem). It says: “C(n, k), either by definition, or by a short combinatorial argument if one is defining C(n, k) as n!/(k! (n−k)!).”

**Sources:** none listed. No primary source with a working link was found.

### Cycles give the Stirling recurrence

**Remember:** The new element starts a cycle or follows an old element.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The unsigned Stirling number c(n,k) counts the permutations of n elements with exactly k cycles, where a fixed element counts as a cycle of length one.

**Problem.** For integers n ≥ 1 and k ≥ 1, c(n + 1,k) = n c(n,k) + c(n,k − 1).

**How the definition helps.** A new element either forms a cycle alone, which adds a cycle, or goes right after one of the n old elements in its cycle, which keeps the count. Deleting the new element gives back the old permutation in both cases. So c(n + 1,k) = n c(n,k) + c(n,k − 1).

**Wikipedia:** [Stirling numbers of the first kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_first_kind). It says: “We prove the recurrence relation using the definition of Stirling numbers in terms of permutations with a given number of cycles”

**Sources:** none listed. No primary source with a working link was found.

### Defining binomial coefficients as repeated sums of ones simplifies nested sums

**Remember:** One more row of running totals raises the lower index by one.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A15. arXiv math.CO, math.GM. Level 1: early undergraduate.

**Definition.** Start with a row of ones indexed from zero, and replace each term by the running total of all terms up to it. After k such steps, term n is C(n + k, k).

**Problem.** For integers q ≤ n and m ≥ 1, m successive partial sums of a from q through n equal ∑ᵢ₌qⁿ C(n−i+m−1,m−1)aᵢ.

**How the definition helps.** After m running-total steps, aᵢ is counted once for each chain of m − 1 weakly increasing indices from i to n (our own). Those chains are counted by m − 1 running totals of ones at index n − i. So the definition gives the weight C(n − i + m − 1, m − 1).

**Paper or page:** [Repeated Sums and Binomial Coefficients](https://arxiv.org/abs/2102.12391v2), [Repeated Sums and Binomial Coefficients](https://arxiv.org/abs/2102.12391v2). It says: “In this paper, we introduce a new way of defining binomial coefficients as repeated sums of ones.”

**Sources:**

- [Roudy El Haddad, Repeated Sums and Binomial Coefficients, arXiv:2102.12391v2 (2021)](https://arxiv.org/abs/2102.12391v2)

### Falling factorials simplify finite differences

**Remember:** Shifting the factors leaves only two end factors to subtract.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The falling factorial Fₘ(x) is the product of m consecutive factors x(x − 1)⋯(x − m + 1), with F₀(x) = 1.

**Problem.** For m ≥ 1, Fₘ(x + 1) − Fₘ(x) = m Fₘ₋₁(x).

**How the definition helps.** Fₘ(x + 1) and Fₘ(x) share the m − 1 factors x(x − 1)⋯(x − m + 2), which form Fₘ₋₁(x) (our own). The remaining end factors are x + 1 and x − m + 1, which differ by m (our own). So the difference is m Fₘ₋₁(x).

**Paper or page:** [Forward Difference of Falling Factorial](https://proofwiki.org/wiki/Forward_Difference_of_Falling_Factorial). It says: “Δ(xᵐ̲) = m x⁽ᵐ⁻¹⁾̲”

**Sources:** none listed. No primary source with a working link was found.

### Marked paths explain Pascal’s weights

**Remember:** Mark one right step and choose the rest freely.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 97K20. arXiv math.CO, math.HO. Level 1: early undergraduate.

**Definition.** Entry k in row n of Pascal’s triangle counts the paths of n steps, each down-left or down-right, with exactly k down-right steps.

**Problem.** For n ≥ 1, the sum of k times the entry in column k of row n is n · 2ⁿ⁻¹.

**How the definition helps.** Counting paths turns the weight k into a choice of one marked down-right step, so the sum counts paths with one marked down-right step. Choose the position of the marked step in n ways (our own). Each of the other n − 1 steps then goes either way, which gives 2ⁿ⁻¹ choices.

**Paper or page:** [Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388). It says: “\\sum \\limits <sub>k=0</sub><sup>nk\\cdot</sup> \\binom nk=n\\cdot 2<sup>n-1</sup>”

**Sources:**

- [Regula Krapf, Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388)

### Marking a member gives the binomial absorption identity

**Remember:** Choose the member first or choose the subset first.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** n choose k is the number of k-element subsets of an n-element set. So k times it counts marked subsets, k-element subsets with one member singled out.

**Problem.** For 1 ≤ k ≤ n, k times (n choose k) equals n times (n − 1 choose k − 1).

**How the definition helps.** Both sides count marked subsets, chosen in two orders. Choosing the subset first gives n choose k subsets with k marks each (our own). Choosing the mark first gives n marks, and then the other k − 1 members come from the remaining n − 1 elements.

**Wikipedia:** [Double counting (proof technique)](https://en.wikipedia.org/wiki/Double_counting_%28proof_technique%29). It says: “Double counting can also be used to prove the following identity related to binomial coefficient”

**Sources:** none listed. No primary source with a working link was found.

### Setting 0! = 1 keeps the binomial formulas exact

**Remember:** There is exactly one way to arrange nothing.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The factorial n! is the product 1·2·…·n, the number of ways to arrange n objects. For n = 0 it is the empty product, with no factors, so 0! = 1.

**Problem.** For integers 0 ≤ k ≤ n, C(n,k) = n!/(k!(n−k)!), and n! = n·(n−1)! for every n ≥ 1. The exponential series eˣ = ∑ₙ≥₀ xⁿ/n! includes its constant term x⁰/0!.

**How the definition helps.** With 0! = 1, these formulas need no special cases at the edges. For example, C(n,n) = n!/(n!·0!) = 1, and the recurrence gives 1! = 1·0!.

**Wikipedia:** [Factorial](https://en.wikipedia.org/wiki/Factorial), [Empty product](https://en.wikipedia.org/wiki/Empty_product). It says: “This convention makes many identities in combinatorics valid for all valid choices of their parameters.”

**Sources:** none listed. No primary source with a working link was found.

### Setting 0⁰ = 1 makes the binomial theorem hold at zero

**Remember:** x⁰ is the empty product, so it is 1 for every x.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 13B25. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** x⁰ is the empty product, with no factors, so it equals 1 for every x. In algebra and combinatorics this includes 0⁰ = 1.

**Problem.** With 0⁰ = 1, the binomial theorem (1+x)ⁿ = Σ C(n,k)xᵏ holds at x = 0. So do the identities 1/(1−x) = Σ xⁿ and eˣ = Σ xⁿ/n!.

**How the definition helps.** A polynomial or power series a₀x⁰ + a₁x + ⋯ must take the value a₀ at x = 0, and this needs 0⁰ = 1. So these identities hold at x = 0 with no special case. In analysis 0⁰ stays an indeterminate form for limits, because xʸ has no limit at (0, 0).

**Wikipedia:** [Zero to the power of zero](https://en.wikipedia.org/wiki/Zero_to_the_power_of_zero). It says: “Defining 0⁰ = 1 is necessary for many polynomial identities. For example, the binomial theorem (1+x)ⁿ = ∑ₖ₌₀ⁿ C(n,k) xᵏ holds for x = 0 only if 0⁰ = 1.”

**Sources:**

- [D. E. Knuth, Two Notes on Notation, American Mathematical Monthly 99 (1992) 403–422](https://doi.org/10.1080/00029890.1992.11995869)

### A fixed boundary edge turns triangulations into binary trees

**Remember:** Follow the root triangle, then follow its two sides.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Fix one boundary edge of a triangulated convex polygon as the root. The triangle on the root edge cuts the rest into two smaller polygons, left and right in boundary order, just as a vertex of a full ordered binary tree has either no children or an ordered pair of two.

**Problem.** For n ≥ 1, triangulations of a fixed convex polygon with n + 2 vertices correspond to full ordered binary trees with n branching vertices.

**How the definition helps.** The root triangle becomes the root vertex, and its two other sides lead to the left and right children (our own). Continue in each smaller polygon, and put a leaf at a side with no triangle left. In reverse, the size of the left subtree fixes the third vertex of the root triangle, so every diagonal is recovered.

**Wikipedia:** [Catalan number](https://en.wikipedia.org/wiki/Catalan_number). It says: “The dark triangle is the root node, the light triangles correspond to internal nodes of the binary trees”

**Sources:** none listed. No primary source with a working link was found.

### Balanced parentheses give the Catalan recurrence

**Remember:** Split at the closing parenthesis that matches the very first opening.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** C(n) counts the balanced strings of n opening and n closing parentheses, in which every prefix has at least as many openings as closings. The empty string counts once, so C(0) = 1.

**Problem.** For n ≥ 1, C(n) equals the sum of C(i)C(n−1−i) over the integers i from 0 to n−1.

**How the definition helps.** Each nonempty balanced string splits uniquely as (A)B, where the first opening parenthesis closes just before B and A and B are balanced (our own). If A has i pairs, then B has n − 1 − i pairs, and any such A and B give a balanced string (our own). Summing over i gives the recurrence.

**nLab:** [Catalan number](https://ncatlab.org/nlab/show/Catalan+number). It says: “strings consisting of n well-balanced pairs of parentheses (also known as "Dyck words")”

**Sources:** none listed. No primary source with a working link was found.

### Bars make allocation counts binomial

**Remember:** Choose the bars and the stars fill the remaining positions.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** An allocation of n identical objects to k labeled bins is a row of n stars and k − 1 bars: the stars before the first bar go in bin 1, those between the first two bars in bin 2, and so on. Runs of stars may be empty, so bins may be empty.

**Problem.** For integers n ≥ 0 and k ≥ 1, there are C(n+k−1,k−1) allocations of n identical objects to k labeled bins.

**How the definition helps.** The row has n + k − 1 positions, so an allocation is a choice of which k − 1 positions hold bars (our own). Reading off the runs of stars gives back the allocation, including empty runs at the ends and between two bars (our own).

**Wikipedia:** [Stars and bars (combinatorics)](https://en.wikipedia.org/wiki/Stars_and_bars_%28combinatorics%29). It says: “In terms of configurations involving objects and bins, bins are now allowed to be empty.”

**Sources:** none listed. No primary source with a working link was found.

### Cycles give a short recurrence for derangements

**Remember:** The marked element sits in a two-cycle or a longer cycle.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A derangement is a permutation with no fixed point, that is, every one of its cycles has length at least two.

**Problem.** Let D(n) count derangements of n elements, including D(0) = 1. For n ≥ 2, D(n) = (n − 1)(D(n − 2) + D(n − 1)).

**How the definition helps.** Look at the cycle that contains a marked element and its successor, chosen in n − 1 ways (our own). If that cycle has length two, removing both elements leaves a derangement of n − 2 elements. Otherwise removing the marked element alone leaves a derangement of n − 1 elements, and it goes back in just before its successor.

**Paper or page:** [Recurrence Relation for Number of Derangements on Finite Set](https://proofwiki.org/wiki/Recurrence_Relation_for_Number_of_Derangements_on_Finite_Set). It says: “Dₙ = (n − 1)(Dₙ₋₁ + Dₙ₋₂) where D₁ = 0, D₂ = 1.”

**Sources:** none listed. No primary source with a working link was found.

### Derangements count permutations with exactly a given number of fixed points

**Remember:** Choose exactly what stays, then move everything else.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A derangement is a permutation with no fixed points, that is, no element stays in place. D(m) counts the derangements of m elements, with D(0) = 1 for the empty permutation.

**Problem.** For 0 ≤ k ≤ n, exactly (n choose k) × D(n − k) permutations of n elements have k fixed points.

**How the definition helps.** A permutation with exactly k fixed points is a choice of those k points together with a derangement of the other n − k elements. The derangement makes sure that no further point is fixed, so each permutation is counted once. In our own example, fixing one of three elements and allowing the identity on the other two gives three fixed points.

**Wikipedia:** [Rencontres numbers](https://en.wikipedia.org/wiki/Rencontres_numbers). It says: “choose the k fixed points out of n”

**Sources:** none listed. No primary source with a working link was found.

### Dyck paths give the Catalan formula by reflection

**Remember:** Reflect the tail of each path that first steps above the diagonal.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A Dyck path goes from (0,0) to (n,n) by unit steps right or up and never rises above the diagonal y = x; C(n) counts them. A bad path, one that rises above the diagonal, must touch the line y = x + 1.

**Problem.** For n ≥ 0, C(n) is (2n choose n) divided by n + 1.

**How the definition helps.** Reflecting the tail of a bad path after its first touch of y = x + 1 gives a bijection with all paths to (n − 1, n + 1). So C(n) = (2n choose n) − (2n choose n + 1), which equals (2n choose n)/(n + 1) (our own). At n = 0 the empty path gives C(0) = 1.

**nLab:** [Catalan number](https://ncatlab.org/nlab/show/Catalan+number). It says: “Cₙ = 1/(n+1) (2n choose n)”

**Wikipedia:** [Catalan number](https://en.wikipedia.org/wiki/Catalan_number). It says: “The part of the bad path from P to (n, n) reflected across the line y = x + 1 is the rest of the reflected path.”

**Sources:** none listed. No primary source with a working link was found.

### Generating functions turn partial sums into a geometric factor

**Remember:** Multiply by the series of ones to take running totals.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A formal generating function stores term aₙ of a sequence as the coefficient of zⁿ, starting at n = 0. In a product of two series, the coefficient of zⁿ is ∑ aₖbₙ₋ₖ over k from 0 to n.

**Problem.** If A(z) generates the sequence a₀, a₁, …, then A(z)/(1−z) generates its partial sums. In particular, the harmonic numbers have generating function −log(1−z)/(1−z), with H₀ = 0.

**How the definition helps.** Since 1/(1 − z) = 1 + z + z² + ⋯, every bₖ is 1, so the coefficient of zⁿ in A(z)/(1 − z) is a₀ + ⋯ + aₙ (our own). For the harmonic numbers take a₀ = 0 and aₙ = 1/n for n ≥ 1. Their series is −log(1 − z), found by integrating the geometric series.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “Multiplying generating functions in the same variable gives”

**Paper or page:** [Generating Function for Sequence of Partial Sums of Series](https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Partial_Sums_of_Series). It says: “Let {cₙ} denote the sequence of partial sums of s.”

**Sources:** none listed. No primary source with a working link was found.

### The last multiplication makes parenthesizations into binary trees

**Remember:** The last multiplication is the root; its factors are the branches.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A full ordered binary tree is a leaf, or a root with a left and a right full ordered binary tree; its size is the number of vertices with children. A fully parenthesized product has the same shape: a single letter, or a product of a left and a right parenthesized product.

**Problem.** For n ≥ 0, fully parenthesized products of n + 1 letters in fixed order correspond exactly to full ordered binary trees of size n.

**How the definition helps.** Both objects follow the same recursive rule, so the last multiplication becomes the root and its two factors become the subtrees. Each letter becomes a leaf, and n + 1 letters need n multiplications, so the tree has n branching vertices. Reading the leaves from left to right and multiplying at each branching vertex inverts the map (our own).

**nLab:** [Catalan number](https://ncatlab.org/nlab/show/Catalan+number). It says: “The mapping T ↦ m(T) defines a bijection from the set Binₙ of isomorphism clases of rooted planar binary trees with n internal vertices to the set Mag(x)ₙ of magma words with n+1 instances of x.”

**Paper or page:** [Number of Distinct Parenthesizations on Word](https://proofwiki.org/wiki/Number_of_Distinct_Parenthesizations_on_Word). It says: “The number of distinct parenthesizations of wₙ is the Catalan number Cₙ₋₁”

**Sources:** none listed. No primary source with a working link was found.

### With (−1)!! = 1, double factorial formulas start at n = 0

**Remember:** There is exactly one way to pair up the empty set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05C70, 60E05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The double factorial (2n−1)!! is the product 1·3⋯(2n−1) of the odd numbers up to 2n−1, which equals (2n)!/(2ⁿ n!). At n = 0 it is the empty product, so (−1)!! = 1.

**Problem.** For all n ≥ 0, (2n−1)!! is the number of perfect matchings of a 2n-element set and the 2n-th moment of the standard Gaussian. The sequence with these values at even places and 0 at odd places has exponential generating function exp(x²/2).

**How the definition helps.** With (−1)!! = 1, each formula holds at n = 0 without a special case (our own). Pairing a fixed element with one of the 2n − 1 others gives the matching recurrence, and Gaussian integration by parts gives the same recurrence for moments. Dividing by (2n)! gives 1/(2ⁿ n!), the coefficient of x²ⁿ in exp(x²/2) (our own).

**nLab:** [double factorial](https://ncatlab.org/nlab/show/double+factorial). It says: “(2n−1)!! = (1/2ⁿ)(2n)!/n! so that in particular, (−1)!! is defined to be 1.”

**Sources:** none listed. No primary source with a working link was found.

### Binary counts match odd and distinct partitions

**Remember:** Binary digits fuse copies of an odd part into distinct parts.

*True by definition.* MSC 05A17 (Combinatorial aspects of partitions of integers), 11P81. arXiv math.CO, math.NT. Level 1: early undergraduate.

**Definition.** Describe a partition of n into odd parts by how many times each odd part d appears, and write that number in binary. Each binary digit 1 in position i then stands for one part d·2ⁱ, and all these parts are distinct.

**Problem.** For every positive integer n, the number of partitions of n into odd parts equals the number into distinct parts.

**How the definition helps.** Replacing each group of 2ⁱ copies of d by one part d·2ⁱ keeps the total n and gives distinct parts (our own). The inverse writes each distinct part uniquely as an odd number times a power of two (our own). Unique binary expansion makes the two maps undo each other (our own).

**Wikipedia:** [Glaisher's theorem](https://en.wikipedia.org/wiki/Glaisher%27s_theorem). It says: “the number of partitions of n into distinct parts is equal to the number of partitions of n into odd parts.”

**Sources:** none listed. No primary source with a working link was found.

### Positive parts give every n exactly 2ⁿ⁻¹ compositions

**Remember:** Zero parts add nothing, so allowing them makes the count infinite.

*Rules out counterexamples.* MSC 05A17 (Combinatorial aspects of partitions of integers), 05A15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A composition of n writes n as an ordered sum of positive integers, and the empty sequence is the one composition of 0. A weak composition also allows parts equal to 0.

**Problem.** Each positive integer n has exactly 2ⁿ⁻¹ compositions, and (n − 1 choose k − 1) of them have k parts.

**How the definition helps.** With positive parts, a composition of n is a choice of cuts among the n − 1 gaps in a row of n ones (our own). Each gap is cut or not, which gives 2ⁿ⁻¹ compositions, and k − 1 cuts give k parts (our own). Allowing zero parts would let one insert any number of zeros without changing n, so the count would be infinite.

**Wikipedia:** [Composition (combinatorics)](https://en.wikipedia.org/wiki/Composition_%28combinatorics%29). It says: “As a consequence every positive integer admits infinitely many weak compositions (if their length is not bounded).”

**Sources:**

- [S. Heubach and T. Mansour, Combinatorics of Compositions and Words, CRC Press (2009)](https://doi.org/10.1201/9781420072686)

### Reflecting partition diagrams swaps parts and largest part

**Remember:** Reflect the diagram to turn rows into columns.

*True by definition. Confidence: medium.* MSC 05A17 (Combinatorial aspects of partitions of integers), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Draw a partition as left-aligned rows of dots, one row per part, longest first. Its conjugate reflects this diagram across the main diagonal, so rows become columns.

**Problem.** For positive integers n and k, as many partitions of n have exactly k parts as have largest part k.

**How the definition helps.** Reflection turns the number of rows, which is the number of parts, into the length of the first row, which is the largest part. It keeps the number of dots, and reflecting twice gives back the original diagram, so it is a bijection.

**Wikipedia:** [Integer partition](https://en.wikipedia.org/wiki/Integer_partition). It says: “By taking conjugates, the number pₖ(n) of partitions of n into exactly k parts is equal to the number of partitions of n in which the largest part has size k.”

**Sources:** none listed. No primary source with a working link was found.

### Blocks of a partition are nonempty, so partitions match equivalence relations

**Remember:** No empty blocks, so each equivalence relation gives exactly one partition.

*Rules out counterexamples.* MSC 05A18 (Partitions of sets), 03E20. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** A partition of a set X is a set of nonempty, pairwise disjoint subsets of X, called blocks, whose union is X. So each element lies in exactly one block.

**Problem.** Partitions of X correspond one-to-one to equivalence relations on X. The blocks are the equivalence classes.

**How the definition helps.** Relate two elements when they lie in the same block; the classes are then the blocks, because each block is nonempty and so contains an element (our own). Conversely, the classes of an equivalence relation are nonempty, disjoint and cover X. For nonempty X, adding an empty block would give a second partition with the same relation (our own).

**Wikipedia:** [Partition of a set](https://en.wikipedia.org/wiki/Partition_of_a_set). It says: “A partition of a set X is a set of non-empty subsets of X such that every element x in X is in exactly one of these subsets”

**Sources:**

- [P. R. Halmos, Naive Set Theory, Undergraduate Texts in Mathematics, Springer (1974)](https://doi.org/10.1007/978-1-4757-1645-0)

### Nonempty blocks give the Stirling count for onto functions

**Remember:** One nonempty block goes to each target element.

*Rules out counterexamples.* MSC 05A18 (Partitions of sets), 11B73, 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A set partition splits a set into disjoint, nonempty blocks. For an onto function, the inputs sent to each target form a nonempty block, because the function uses every target.

**Problem.** The number of onto functions from m inputs to n targets equals n! times the number of partitions of the inputs into n blocks.

**How the definition helps.** The fibers of an onto function form a partition of the inputs into n nonempty blocks, and the function labels those blocks by its targets. Each partition into n blocks has n! such labelings (our own). Allowing an empty block would count functions that miss its target.

**Paper or page:** [Cardinality of Set of Surjections](https://proofwiki.org/wiki/Cardinality_of_Set_of_Surjections). It says: “Let C be the number of surjections from S to T. Then: C = n! {m brace n} where {m brace n} denotes a Stirling number of the second kind.”

**Sources:** none listed. No primary source with a working link was found.

### One partition of the empty set makes B₀ = 1

**Remember:** The empty set has one partition, the empty one, so B₀ = 1.

*Makes the theorem clean to state or prove.* MSC 05A18 (Partitions of sets), 05A15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The Bell number Bₙ counts the partitions of a set with n elements. The empty set has exactly one partition, the family with no blocks, so B₀ = 1.

**Problem.** The Bell numbers satisfy Bₙ₊₁ = ∑ₖ₌₀ⁿ (n choose k)·Bₖ. Their exponential generating function is exp(eˣ − 1).

**How the definition helps.** B₀ = 1 makes the recurrence and the series start correctly. To form a partition of n + 1 elements, choose the k old elements outside the new element’s block and partition them in Bₖ ways; the empty partition counts k = 0 once (our own). The recurrence gives B′(x) = eˣB(x), and B(0) = 1 gives B(x) = exp(eˣ − 1) (our own).

**Wikipedia:** [Bell number](https://en.wikipedia.org/wiki/Bell_number), [Partition of a set](https://en.wikipedia.org/wiki/Partition_of_a_set). It says: “B₀ is 1 because there is exactly one partition of the empty set. This partition is itself the empty set; it can be interpreted as a family of subsets of the empty set, consisting of zero subsets.”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 1, second edition, Cambridge University Press (2011)](https://doi.org/10.1017/CBO9781139058520)

### A fixed rank splits a subset count

**Remember:** Choose the element of rank m + 1, then fill both sides.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 97K20. arXiv math.CO, math.HO. Level 1: early undergraduate.

**Definition.** C(n,k) is the number of k-element subsets of an n-element set. A subset of {0, 1, …, n} with l + m + 1 elements has one element of rank m + 1, with m elements below it and l above.

**Problem.** Let l, m and n be nonnegative integers with l + m ≤ n. Summing C(k,m)C(n−k,l) from k = m through n−l gives C(n+1,l+m+1).

**How the definition helps.** Group the (l + m + 1)-element subsets of {0, …, n} by their element of rank m + 1 (our own). If that element is k, choose m elements from the k below it and l from the n − k above it, in C(k,m)C(n−k,l) ways. Each subset falls in exactly one group.

**Paper or page:** [Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388). It says: “Let l, m, n ∈ ℕ be natural numbers such that l + m ≤ n. Then we have the following identity: \\sum <sub>k=m</sub><sup>n-l</sup>\\binom km\\binom {n-k}l=\\binom {n+1}{l+m+1}”

**Sources:**

- [Regula Krapf, Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388)

### Indicators give inclusion and exclusion

**Remember:** Multiply the indicators of absence and subtract the result from one.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The indicator 1<sub>A</sub> of a set A is 1 on elements of A and 0 elsewhere. It turns set operations into arithmetic: 1 − 1<sub>A</sub> marks absence from A, and a product of indicators is the indicator of the intersection.

**Problem.** The size of a finite union of finite sets is the sum, over each nonempty selection of the sets, of the size of its intersection. The sign is + when an odd number of sets is selected and − when an even number is.

**How the definition helps.** The product of the absence indicators 1 − 1<sub>Aᵢ</sub> is 1 outside the union and 0 inside it (our own). So 1 minus this product is the indicator of the union, and expanding it gives each nonempty selection’s intersection indicator with sign + for odd size. Summing over the elements gives the formula.

**Wikipedia:** [Inclusion–exclusion principle](https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle). It says: “An algebraic proof can be obtained using indicator functions (also known as characteristic functions).”

**Paper or page:** [Inclusion-Exclusion Principle](https://proofwiki.org/wiki/Inclusion-Exclusion_Principle). It says: “Let A₁, A₂, …, Aₙ be finite sets.”

**Sources:** none listed. No primary source with a working link was found.

### Largest elements give hockey stick sums

**Remember:** Choose the largest element, then choose the rest below it.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** C(j,m) is the number of m-element subsets of a j-element set, so C(j,m) = 0 when m &gt; j.

**Problem.** For nonnegative integers m and n, the sum of C(j,m) from j = 0 to n equals C(n+1,m+1).

**How the definition helps.** Group the (m + 1)-element subsets of {1, …, n + 1} by their largest element (our own). If it is j + 1, the other m elements come from {1, …, j}, in C(j,m) ways, which is zero when j &lt; m (our own). Summing over j from 0 to n counts every subset once.

**Paper or page:** [Sum of Binomial Coefficients over Upper Index](https://proofwiki.org/wiki/Sum_of_Binomial_Coefficients_over_Upper_Index). It says: “(0 choose m) + (1 choose m) + (2 choose m) + ⋯ + (n choose m) = (n + 1 choose m + 1)”

**Sources:** none listed. No primary source with a working link was found.

### Subset counts give Vandermonde’s identity

**Remember:** Count the whole choice by how many come from the first set.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** C(n,k) is the number of k-element subsets of an n-element set, so C(n,k) = 0 when k &gt; n.

**Problem.** For nonnegative integers r, s and n, C(r+s,n) equals the sum of C(r,k)C(s,n−k) over k from 0 to n.

**How the definition helps.** Take disjoint sets of sizes r and s, and group the n-element subsets of their union by the number k taken from the first set (our own). Group k has C(r,k)C(s,n−k) subsets, and the zero values cover k &gt; r or n − k &gt; s (our own). Summing over k gives C(r+s,n).

**Paper or page:** [Chu-Vandermonde Identity](https://proofwiki.org/wiki/Chu-Vandermonde_Identity). It says: “The sum of products of binomial coefficients binom r k and binom s n minus k, for k from 0 to n, equals binom r plus s n.”

**Sources:** none listed. No primary source with a working link was found.

### Toggling cancels alternating binomial sums

**Remember:** Toggle one fixed element to pair every even subset with an odd one.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** C(n,k) is the number of k-element subsets of an n-element set. In the alternating sum, each subset then counts +1 if its size is even and −1 if it is odd.

**Problem.** For an integer n ≥ 1, add C(n,k) with a plus sign for even k and a minus sign for odd k. The sum over k from 0 to n is zero.

**How the definition helps.** For n ≥ 1, fix one element and toggle it: add it if it is absent, remove it if it is present (our own). This pairs each even subset with an odd one, and toggling twice gives back the subset, so every subset is paired (our own). The +1 and −1 cancel in pairs, so the sum is zero.

**Paper or page:** [Alternating Sum and Difference of Binomial Coefficients for Given n](https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_Binomial_Coefficients_for_Given_n). It says: “∀ n ∈ ℤ≥0: ∑ᵢ₌₀ⁿ (−1)ⁱ (n choose i) = δₙ₀”

**Sources:** none listed. No primary source with a working link was found.

### Missing symbol sets turn Latin rectangle completion into Hall’s theorem

**Remember:** A new row is one distinct available symbol per column.

*Rules out counterexamples.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares), 05D15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A full-width Latin rectangle has n columns and uses n symbols, each once per row and at most once per column. A column’s available set is the symbols not yet in it, and a new row picks one available symbol per column, all different.

**Problem.** Every full-width Latin rectangle with fewer than n rows can be completed to an n by n Latin square by adding rows.

**How the definition helps.** Full width makes each column miss n − r symbols and each symbol miss n − r columns when r rows are filled. So any j columns together have at least j available symbols (our own), and Hall’s theorem gives a new row. Without full width, rows (1,2) and (2,1) would both need symbol 3 in column three.

**Paper or page:** [Hall's marriage theorem](https://arxiv.org/abs/2503.23159v1). It says: “A Latin rectangle can be extended to a Latin square by adding extra rows.”

**Sources:** none listed. No primary source with a working link was found.

### Counting labelled trees gives Cayley's formula nⁿ⁻²

**Remember:** Name the vertices and the count becomes nⁿ⁻².

*Makes the theorem clean to state or prove.* MSC 05C05 (Trees), 05C30. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A labelled tree on n vertices is a tree with vertex set {1, …, n}. Two labelled trees are the same only when they have the same edges, not merely the same shape.

**Problem.** For each positive integer n, there are nⁿ⁻² labelled trees on n vertices.

**How the definition helps.** Labels let the Prüfer code record a tree as a sequence of n − 2 labels, each from 1 to n (our own). For n ≥ 2 the Prüfer code is a bijection onto all such sequences, so there are nⁿ⁻² trees, and for n = 1 there is one tree. Up to isomorphism, no closed formula is known.

**Wikipedia:** [Cayley's formula](https://en.wikipedia.org/wiki/Cayley%27s_formula), [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29). It says: “No closed formula for the number t(n) of trees with n vertices up to graph isomorphism is known.”

**Sources:**

- [R. Otter, The number of trees, Annals of Mathematics 49 (1948) 583–599](https://doi.org/10.2307/1969046)

### Distinct edge weights force one cheapest spanning tree

**Remember:** The lightest disagreement can replace a heavier edge.

*Rules out counterexamples.* MSC 05C05 (Trees), 05C22. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A minimum spanning tree of a connected weighted graph connects every vertex without cycles and has least total edge weight. Distinct weights means no two edges weigh the same, so any set of edges has exactly one lightest edge.

**Problem.** A finite connected graph with distinct edge weights has exactly one minimum spanning tree.

**How the definition helps.** Suppose two minimum spanning trees differ, and let e be the lightest edge in exactly one of them, say T₁. Adding e to T₂ makes a cycle with an edge f outside T₁, and f is heavier than e, so swapping f for e lowers the weight of T₂, a contradiction. Our own counterexample without distinct weights is a triangle with three equal edges.

**Wikipedia:** [Minimum spanning tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree). It says: “If each edge has a distinct weight then there will be only one, unique minimum spanning tree”

**Sources:** none listed. No primary source with a working link was found.

### Finite branching makes an infinite tree have an infinite path

**Remember:** At least one of finitely many branches must keep going forever.

*Rules out counterexamples.* MSC 05C05 (Trees), 05C63. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A rooted tree is finitely branching if each vertex has only finitely many children, its neighbors one step farther from the root. Then a vertex with infinitely many descendants must have a child with infinitely many descendants.

**Problem.** An infinite finitely branching rooted tree contains an infinite path starting at its root.

**How the definition helps.** Start at the root, which has infinitely many descendants, and keep stepping to a child that also has infinitely many (our own). This never stops, so it builds an infinite path. Our own counterexample is a root with infinitely many children, all of them leaves.

**Paper or page:** [König's Tree Lemma](https://proofwiki.org/wiki/König's_Tree_Lemma). It says: “each with a finite number of children. Then T has a branch of infinite length.”

**Sources:** none listed. No primary source with a working link was found.

### Minimal connectivity gives a spanning tree

**Remember:** Delete edges while keeping the graph connected until none can go.

*True by definition. Confidence: medium.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A tree is a minimally connected graph: it is connected, and removing any one edge disconnects it.

**Problem.** Every finite connected graph has a spanning tree, which uses all its vertices and only edges of the graph.

**How the definition helps.** Among connected subgraphs that use all vertices, take one with the fewest edges (our own). Removing any edge would give a smaller one, so every removal disconnects it, and it is a tree by definition. With the no-cycle definition, one must also show that removing an edge on a cycle keeps the graph connected (our own).

**Wikipedia:** [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29). It says: “G is connected, but would become disconnected if any single edge is removed from G.”

**Sources:** none listed. No primary source with a working link was found.

### Parent edges count the edges of a forest

**Remember:** Each vertex pays for one edge, except each root.

*True by definition.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A forest is a graph without cycles. Root each connected part at one vertex, and give every other vertex its parent, the next vertex on its unique path to the root.

**Problem.** A finite forest with n vertices and c connected parts has n − c edges.

**How the definition helps.** Each edge joins a vertex to its parent, so edges match the non-root vertices one to one. In our own proof, an edge uv lies on the unique root path of one endpoint, which makes the other its parent. There are n − c non-root vertices, since each part has one root.

**Paper or page:** [Number of Edges in Forest](https://proofwiki.org/wiki/Number_of_Edges_in_Forest). It says: “Then F contains n − m edges.”

**Sources:** none listed. No primary source with a working link was found.

### The graph with no vertices is not a tree

**Remember:** A tree needs at least one vertex, so it has a root.

*Rules out counterexamples.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A tree is a connected graph with no cycles that has at least one vertex. So the graph with no vertices, though vacuously connected, is not a tree.

**Problem.** Every finite tree with n vertices has exactly n − 1 edges.

**How the definition helps.** The graph with no vertices has zero edges, not −1, so including it would break the formula. A nonempty tree has a root, and each other vertex has one edge toward it (our own). This counts every edge exactly once.

**Wikipedia:** [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “the order-zero graph (graph with no vertices) is generally not considered to be a tree: while it is vacuously connected as a graph”

**Sources:**

- [Frank Harary and Ronald C. Read, Is the null-graph a pointless concept?, in Graphs and Combinatorics, Lecture Notes in Mathematics 406 (1974) 37–44](https://doi.org/10.1007/bfb0066433)

### Unique paths make tree edges bridges

**Remember:** The edge is the only road between its ends.

*True by definition.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A tree is a nonempty simple undirected graph with exactly one simple path, a path that repeats no vertex, between each pair of distinct vertices.

**Problem.** Every edge of a tree is a bridge, an edge whose deletion disconnects the graph.

**How the definition helps.** An edge is itself a simple path between its endpoints, so it is the only one, and deleting it separates them (our own). This definition agrees with “connected with no cycles”. A cycle gives two paths, and two distinct simple paths with the same ends contain a cycle.

**Paper or page:** [Edge of Tree is Bridge](https://proofwiki.org/wiki/Edge_of_Tree_is_Bridge). It says: “Let T be a tree. Let e be an edge of T. Then e is a bridge of T.”

**Sources:** none listed. No primary source with a working link was found.

### Counting a loop twice makes the degree sum formula hold

**Remember:** A loop is one edge with two ends, and both ends count.

*True by definition.* MSC 05C07 (Vertex degrees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In an undirected multigraph, the degree of a vertex counts the edge ends at that vertex. A loop has two ends at the same vertex, so it contributes 2.

**Problem.** In a finite undirected multigraph, the sum of all vertex degrees equals twice the number of edges. The number of vertices of odd degree is even.

**How the definition helps.** Summing degrees counts both ends of every edge, including every loop. The resulting sum is even, so an even number of its summands are odd (our own).

**Wikipedia:** [Degree (graph theory)](https://en.wikipedia.org/wiki/Degree_%28graph_theory%29), [Handshaking lemma](https://en.wikipedia.org/wiki/Handshaking_lemma). It says: “For graphs that are allowed to contain loops connecting a vertex to itself, a loop should be counted as contributing two units to the degree of its endpoint for the purposes of the handshaking lemma.”

**Sources:** none listed. No primary source with a working link was found.

### Counting face sides makes the bipartite planar bound immediate

**Remember:** Count both sides of each edge, even when a face touches both.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In a crossing-free drawing, the length of a face counts the edge sides on its boundary, both sides of a bridge included. Each edge has two sides, so the face lengths add up to 2e.

**Problem.** A simple bipartite planar graph with v ≥ 3 vertices has at most 2v − 4 edges.

**How the definition helps.** In a bipartite graph every face boundary alternates between the two vertex parts, so each face has even length, at least 4 when v ≥ 3. Then 4f ≤ 2e, and Euler’s formula gives e ≤ 2v − 4. For a disconnected graph, first join its parts by bridges, swapping vertex parts as needed (our own).

**Wikipedia:** [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “each edge contributes exactly two incidences.”

**Sources:** none listed. No primary source with a working link was found.

### Euler's formula for plane graphs needs connectedness, or a count of components

**Remember:** Count the outer face, and one extra for each component.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A plane graph is a graph drawn in the plane without crossings. Its faces are the connected regions left when the drawing is removed, the unbounded outer region included.

**Problem.** For a finite connected nonempty plane graph, V − E + F = 2. For a finite plane graph with C connected components, V − E + F = 1 + C.

**How the definition helps.** Deleting an edge on a cycle merges two faces, so V − E + F and the component count C stay the same (our own). Repeat until a spanning forest remains, with V − C edges and one face, giving 1 + C. Two disjoint triangles therefore give 3, not 2.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic), [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “The Euler characteristic can be defined for connected plane graphs by the same V − E + F formula as for polyhedral surfaces, where F is the number of faces in the graph, including the exterior face.”

**Sources:** none listed. No primary source with a working link was found.

### Letting dual graphs have loops and parallel edges makes duality exact

**Remember:** One dual edge per edge, even if it makes a loop or a parallel pair.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The geometric dual of a finite plane graph has one vertex in each face. Each original edge gets exactly one dual edge across it, joining the faces on its two sides, with no crossings. Loops and parallel edges are kept to make this possible.

**Problem.** The geometric dual of the geometric dual of a connected nonempty finite plane graph is isomorphic to the original graph. The bridges of the original graph correspond exactly to the loops of its dual.

**How the definition helps.** Since each edge has exactly one dual edge, crossing the dual edges again recovers every original edge, parallel ones included. For a connected graph, each dual face holds exactly one original vertex (our own). A bridge has the same face on both sides, so its dual edge is a loop, while a cycle edge separates two faces.

**Wikipedia:** [Dual graph](https://en.wikipedia.org/wiki/Dual_graph). It says: “The dual of a simple graph need not be simple: it may have self-loops (an edge with both endpoints at the same vertex) or multiple edges connecting the same two vertices”

**Sources:**

- [Hassler Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)

### Simple planar graphs have at most 3v − 6 edges

**Remember:** No loops or double edges, so every face needs three sides.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C35. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A simple graph has no loops and no parallel edges. So in a connected plane drawing with at least three vertices, every face, a region left by the drawing, is bounded by at least three edge sides.

**Problem.** A finite simple planar graph with v ≥ 3 vertices has at most 3v − 6 edges. Consequently K₅ is nonplanar, and every nonempty finite simple planar graph has a vertex of degree at most 5.

**How the definition helps.** Each edge has two sides, so 3f ≤ 2e, and Euler’s formula gives e ≤ 3v − 6; adding bridges reduces disconnected graphs to this case (our own). A triangle with a doubled edge shows why simplicity matters. K₅ has 10 &gt; 9 edges, and the bound keeps the average degree below 6, trivially so when v &lt; 3 (our own).

**Wikipedia:** [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “In a finite, connected, simple, planar graph, any face (except possibly the outer one) is bounded by at least three edges and every edge touches at most two faces, so 3f ≤ 2e”

**Sources:** none listed. No primary source with a working link was found.

### Triangular faces force the maximal planar edge count

**Remember:** Add no more edges: every face is already a triangle.

*True by definition.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A maximal planar graph is a simple planar graph to which no edge can be added without losing planarity. For v ≥ 3, every face of its drawing, the outer face included, is a triangle.

**Problem.** Every crossing-free plane drawing of a finite maximal planar graph with v ≥ 3 vertices has 3v − 6 edges and 2v − 4 faces.

**How the definition helps.** Triangular faces give 3f = 2e, since each edge has two sides. Euler’s formula v − e + f = 2 then gives e = 3v − 6 and f = 2v − 4. The face augmentation lemma does the work, since a face that is not a triangle would admit a new edge.

**Wikipedia:** [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “All faces (including the outer one) are then bounded by three edges”

**Sources:** none listed. No primary source with a working link was found.

### Shortest walks give graph distance

**Remember:** Join two walks to bound the shortest one.

*True by definition.* MSC 05C12 (Distance in graphs). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The distance between two vertices is the least number of edges in a walk joining them, where a walk may repeat vertices, or ∞ if no walk exists.

**Problem.** Graph distance obeys the triangle inequality even between vertices in different connected components.

**How the definition helps.** A shortest walk from u to w followed by one from w to v is a walk from u to v, so d(u,v) ≤ d(u,w) + d(w,v) (our own). If either term is ∞, the bound holds trivially. A shortest walk never repeats a vertex, so it is a path, as in the usual definition.

**Wikipedia:** [Distance (graph theory)](https://en.wikipedia.org/wiki/Distance_%28graph_theory%29). It says: “is the number of edges in a shortest path (also called a graph geodesic) connecting them.”

**Sources:** none listed. No primary source with a working link was found.

### Graph colouring assumes no loops, so every graph has a chromatic number

**Remember:** A loop would clash with itself, so colouring theory leaves loops out.

*Rules out counterexamples. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C60. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A proper vertex colouring gives the two ends of every edge different colours. Graphs here are loopless, since a loop, an edge from a vertex to itself, would need its vertex to differ from itself.

**Problem.** Every finite loopless graph has a proper colouring, so its chromatic number is defined and is at most the number of vertices.

**How the definition helps.** Without loops, giving every vertex its own colour is proper, so the chromatic number exists and is at most n (our own). With a loop, no proper colouring exists. Parallel edges change nothing (our own).

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring), [Graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism). It says: “Since a vertex with a loop (i.e. a connection directly back to itself) could never be properly colored, it is understood that graphs in this context are loopless.”

**Sources:**

- [T. R. Jensen and B. Toft, Graph Coloring Problems, Wiley (1994)](https://doi.org/10.1002/9781118032497)

### Independent color classes give a lower bound on colors

**Remember:** Divide the vertex count by the most one color can hold.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C69. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A proper vertex coloring splits the vertices into color classes with no edge inside any class. So each class is an independent set and has at most α vertices (our own).

**Problem.** Suppose a finite loopless graph has n ≥ 1 vertices, and its largest independent set has size α. Every proper coloring uses at least ⌈n⁄α⌉ colors.

**How the definition helps.** If k classes of at most α vertices cover all n vertices, then kα ≥ n, so k ≥ ⌈n⁄α⌉ (our own).

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring). It says: “every such class forms an independent set.”

**Sources:** none listed. No primary source with a working link was found.

### Reachability orders acyclic graphs

**Remember:** Order all prerequisites, not just neighboring ones.

*Rules out counterexamples.* MSC 05C20 (Directed graphs (digraphs), tournaments). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In a finite directed graph, one vertex precedes another if a nonempty directed walk leads from the first to the second. With no directed cycles, no vertex precedes itself, so this is a strict partial order (our own).

**Problem.** The vertices can be listed with every edge pointing forward exactly when the graph has no directed cycle.

**How the definition helps.** Repeatedly list a vertex that no remaining vertex precedes, and every edge then points forward (our own). Conversely, a directed cycle would force some edge to point backward.

**Wikipedia:** [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting). It says: “A topological ordering is possible if and only if the graph has no directed cycles”

**Sources:**

- [A. B. Kahn, Topological sorting of large networks, Communications of the ACM (1962).](https://doi.org/10.1145/368996.369025)

### Color counts give deletion and contraction

**Remember:** After deleting an edge, split colorings by whether its endpoints match.

*True by definition.* MSC 05C31 (Graph polynomials), 05C15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The chromatic polynomial P(G) of a finite simple graph G is the polynomial whose value at each positive integer k is a count. It counts the colorings with k colors that give adjacent vertices different colors.

**Problem.** For an edge e of G, the chromatic polynomial satisfies P(G) = P(G − e) − P(G / e). Here G − e deletes e, and G / e merges its endpoints, removes e, and merges any repeated edges.

**How the definition helps.** Colorings of G − e split by whether the ends of e get different colors or the same color (our own). The first kind are the colorings of G, and the second are the colorings of G / e. Subtracting gives the identity at every positive integer, hence as polynomials.

**Wikipedia:** [Chromatic polynomial](https://en.wikipedia.org/wiki/Chromatic_polynomial). It says: “This follows from the observation that every k-coloring of G either gives different colors to u and v, or the same colors.”

**Sources:** none listed. No primary source with a working link was found.

### Distance parity detects bipartite graphs

**Remember:** An edge within one parity gives an odd cycle.

*Rules out counterexamples.* MSC 05C38 (Paths and cycles). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A graph is bipartite if its vertices split into two groups with every edge between groups. In each connected piece, the natural groups are the vertices at even and at odd distance from a chosen start.

**Problem.** A finite undirected graph is bipartite exactly when it contains no odd cycle.

**How the definition helps.** An edge inside one parity group closes an odd walk through the start, and an odd closed walk contains an odd cycle (our own). So without odd cycles the parity groups form a bipartition. Conversely, every cycle in a bipartite graph alternates groups, so it has even length.

**Wikipedia:** [Bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph). It says: “a graph is bipartite if and only if it has no odd cycle as a subgraph”

**Paper or page:** [Graph containing Closed Walk of Odd Length also contains Odd Cycle](https://proofwiki.org/wiki/Graph_containing_Closed_Walk_of_Odd_Length_also_contains_Odd_Cycle). It says: “Let G have a closed walk of odd length. Then G has an odd cycle.”

**Sources:** none listed. No primary source with a working link was found.

### Counting one remaining vertex gives Kₙ connectivity n − 1

**Remember:** Kₙ never disconnects, so stop when one vertex remains.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The connectivity of a graph is the least number of vertices whose removal leaves a disconnected graph or a single vertex. The single-vertex clause gives Kₙ the value n − 1, although no removal disconnects it.

**Problem.** Let G be a finite simple graph with at least two vertices and k a positive integer. Its connectivity is at least k exactly when each pair of distinct vertices has k distinct paths between them sharing only their endpoints.

**How the definition helps.** In Kₙ each pair has n − 1 paths sharing only their ends, which matches the value n − 1 (our own). These are the direct edge and one path through each other vertex. Whitney’s global form of Menger’s theorem gives the equivalence for general graphs.

**Wikipedia:** [Vertex connectivity](https://en.wikipedia.org/wiki/Vertex_connectivity). It says: “This definition produces the same answer, n − 1, for the connectivity of the complete graph Kn.”

**Sources:**

- [H. Whitney, Congruent graphs and the connectivity of graphs, American Journal of Mathematics 54 (1932), 150–168](https://doi.org/10.2307/2371086)

### Maximal forests force every bridge

**Remember:** A bridge cannot close a cycle, so a maximal forest cannot omit it.

*True by definition.* MSC 05C40 (Connectivity), 05C05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A spanning tree of a connected graph is a maximal cycle-free set of its edges, where maximal means that adding any unused edge creates a cycle.

**Problem.** In a finite connected simple graph, an edge is a bridge exactly when every spanning tree contains it. A bridge is an edge whose deletion disconnects the graph.

**How the definition helps.** A bridge lies on no cycle, so adding it never creates one, and every maximal cycle-free set must contain it (our own). If an edge is not a bridge, a maximal cycle-free set in the graph without it still connects all vertices (our own). That set is a spanning tree omitting the edge (our own).

**Paper or page:** [Edge is Bridge iff in All Spanning Trees](https://proofwiki.org/wiki/Edge_is_Bridge_iff_in_All_Spanning_Trees). It says: “e belongs to every spanning tree for G.”

**Sources:** none listed. No primary source with a working link was found.

### Nonadjacent endpoints make Menger’s vertex separator exist

**Remember:** An edge between the ends survives every internal vertex deletion.

*Rules out counterexamples.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** For two distinct nonadjacent vertices, a vertex separator is a set of other vertices whose removal leaves no path between them. Nonadjacency guarantees that one exists, since all other vertices will do (our own).

**Problem.** Fix two distinct nonadjacent vertices in a finite undirected graph. The minimum separator size equals the largest number of paths between them that share only their ends.

**How the definition helps.** Without nonadjacency the minimum is undefined, because in the two-vertex complete graph there is a path but no separator (our own). Menger’s theorem does the work of finding as many such paths as the minimum separator size.

**Wikipedia:** [Menger's theorem](https://en.wikipedia.org/wiki/Menger%27s_theorem). It says: “the minimum number of vertices, distinct from x and y, whose removal disconnects x and y”

**Sources:** none listed. No primary source with a working link was found.

### Reachability classes make graph components partition the vertices

**Remember:** Group together all vertices that can reach one another.

*True by definition.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In an undirected graph, two vertices are related if a walk joins them, allowing walks of length zero. A connected component is the subgraph induced by one equivalence class of this relation.

**Problem.** Every vertex of an undirected graph lies in exactly one connected component.

**How the definition helps.** Equivalence classes are disjoint and cover the vertex set, so each vertex lies in exactly one component. The relation is an equivalence because one can stay at a vertex, reverse a walk, or join two walks.

**Wikipedia:** [Component (graph theory)](https://en.wikipedia.org/wiki/Component_%28graph_theory%29). It says: “The equivalence classes of this relation partition the vertices of the graph into disjoint sets, subsets of vertices that are all reachable from each other, with no additional reachable pairs outside of any of these subsets.”

**Paper or page:** [Graph Components are Equivalence Classes](https://proofwiki.org/wiki/Graph_Components_are_Equivalence_Classes). It says: “The components of a graph are equivalence classes under the relation is connected to on the set of vertices.”

**Sources:** none listed. No primary source with a working link was found.

### Euler tours need connected edges

**Remember:** Keep the edges together, but ignore isolated vertices.

*Rules out counterexamples.* MSC 05C45 (Eulerian and Hamiltonian graphs), 05C40. arXiv math.CO. Level 1: early undergraduate.

**Definition.** An Euler tour is a closed walk that uses every edge exactly once. A graph’s edges lie in one connected component if any two vertices that have edges can reach each other, with isolated vertices ignored.

**Problem.** Take a finite simple graph with at least one edge. It has an Euler tour exactly when every vertex has even degree and its edges lie in one connected component.

**How the definition helps.** This condition rules out two disjoint triangles, which have even degrees but no single tour, yet allows a triangle beside an isolated vertex (our own). Hierholzer’s argument does the work by joining closed trails until they cover all edges (our own).

**Wikipedia:** [Eulerian path](https://en.wikipedia.org/wiki/Eulerian_path). It says: “all of its vertices with nonzero degree belong to a single connected component.”

**Sources:**

- [Carl Hierholzer and Chr. Wiener, Ueber die Möglichkeit, einen Linienzug ohne Wiederholung und ohne Unterbrechung zu umfahren (1873).](https://doi.org/10.1007/bf01442866)

### Adjacency matrix powers count walks

**Remember:** Multiplication counts all ways to join two walks.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The adjacency matrix A of a finite simple graph has entry 1 when its row and column vertices share an edge, and 0 otherwise. So entry (i,j) of A counts walks of length one from i to j.

**Problem.** For n ≥ 0, entry (i,j) of the nth matrix power counts walks of length n from i to j.

**How the definition helps.** Matrix multiplication sums over the next-to-last vertex, so it counts every way to extend a walk by one edge. Removing the last edge splits each longer walk uniquely, so induction gives the formula. The identity matrix starts the induction, since it counts walks of length zero (our own).

**nLab:** [adjacency matrix](https://ncatlab.org/nlab/show/adjacency+matrix). It says: “entry bᵢ,ⱼ in Aⁿ is the number of n-step walks between vertex vᵢ ∈ G and vⱼ ∈ G.”

**Sources:** none listed. No primary source with a working link was found.

### Free endpoints identify larger matchings

**Remember:** Only an alternating path with two free ends adds a matching edge.

*Rules out counterexamples.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A matching is a set of edges with no shared vertices. An augmenting path joins two distinct unmatched vertices and alternates between edges outside and inside the matching, so swapping its edges gives one more matching edge (our own).

**Problem.** In a finite graph, a matching is largest exactly when it has no augmenting path.

**How the definition helps.** Swapping along an augmenting path enlarges the matching, so a largest matching has none; an alternating path with a matched end gains nothing (our own). Conversely, compare the matching with a larger one, using the edges in exactly one of them (our own). These form alternating paths and cycles, and some path has more edges of the larger matching, so it is augmenting (our own).

**Wikipedia:** [Berge's theorem](https://en.wikipedia.org/wiki/Berge%27s_theorem). It says: “a path that starts and ends on free (unmatched) vertices, and alternates between edges in and not in the matching”

**Sources:**

- [Claude Berge, Two Theorems in Graph Theory (1957).](https://doi.org/10.1073/pnas.43.9.842)

### Line graphs turn matchings into independent sets

**Remember:** Edges that do not meet become vertices that are not adjacent.

*True by definition.* MSC 05C76 (Graph operations (line graphs, products, etc.)). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The line graph of a simple undirected graph G has one vertex for each edge of G, with two vertices adjacent exactly when their edges share an endpoint.

**Problem.** A set of edges of G is a matching exactly when the corresponding vertices of the line graph form an independent set. This correspondence preserves size.

**How the definition helps.** The line graph turns the rule against shared endpoints into the rule against adjacent vertices. The correspondence preserves size because each edge supplies exactly one vertex.

**Wikipedia:** [Line graph](https://en.wikipedia.org/wiki/Line_graph). It says: “corresponds to a set of vertices in L(G) no two of which are adjacent, that is, an independent set.”

**Sources:** none listed. No primary source with a working link was found.

### Complement pairs classify the largest intersecting families on 2k points

**Remember:** When both halves have size k, each pair allows one choice.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** On a ground set of size 2k, with k ≥ 1, pair each k-element subset with its complement. Two k-element sets are disjoint exactly when they form such a pair.

**Problem.** An intersecting family, one with no two disjoint sets, of k-element subsets of a 2k-element set contains at most half the k-element subsets. Any choice of one set from each complement pair attains the bound.

**How the definition helps.** An intersecting family takes at most one set from each complement pair, so it has at most half the sets (our own). A choice of one set per pair has no disjoint members, so it attains the bound.

**Paper or page:** [Stabilities of the Kleitman diameter theorem](https://arxiv.org/abs/2411.08325v2). It says: “Let $k \\geq 2$ and $n \\geq 2 k$ be integers. Let $\\mathcal{F} \\subseteq \\binom {\[n\]}{k}$ be an intersecting family. Then\\\[  \|\\mathcal{F}\|\\leq \\binom {n-1}{k-1}.  \\\]”

**Sources:** none listed. No primary source with a working link was found.

### Coloring by differences turns Schur’s theorem into Ramsey’s theorem

**Remember:** Three edges on a number line give two gaps and their sum.

*True by definition.* MSC 05D10 (Ramsey theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Given a coloring of 1 to N, color each edge of the complete graph on vertices 0 to N by the color of the difference of its endpoints.

**Problem.** For each positive number of colors c, some N forces x, y and x + y to share a color in every c-coloring of 1,…,N. The summands may be equal.

**How the definition helps.** In a triangle a &lt; b &lt; c, the differences b − a and c − b add up to c − a (our own). Ramsey’s theorem gives a one-color triangle when N is large, so x = b − a, y = c − b and x + y share a color.

**Paper or page:** [Schur's Theorem (Ramsey Theory)](https://proofwiki.org/wiki/Schur's_Theorem_(Ramsey_Theory)). It says: “there exists a positive integer $S$ such that:
 for every partition of the integers $\\set {1, \\ldots, S}$ into $r$ parts, one of the parts contains integers $x$, $y$ and $z$ such that:
$$x + y = z$”

**Sources:** none listed. No primary source with a working link was found.

### Counting bad sets gives an exponential Ramsey lower bound

**Remember:** If bad sets average below one, some coloring has none.

*True by definition.* MSC 05D10 (Ramsey theory), 05D40. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Color each pair of n vertices red or blue independently, with equal chances. A bad set is a set of k vertices whose m = k(k − 1)/2 edges all share one color.

**Problem.** For n ≥ k ≥ 2, let m = k(k − 1)/2. If (n choose k) &lt; 2ᵐ⁻¹, some coloring has no such set.

**How the definition helps.** Each k-set is bad with probability 2/2ᵐ, so the expected number of bad sets is (n choose k)2¹⁻ᵐ, which is below one (our own). Some coloring therefore has no bad set.

**Wikipedia:** [Probabilistic method](https://en.wikipedia.org/wiki/Probabilistic_method). It says: “Color each edge independently with probability 1/2 of being red and 1/2 of being blue.”

**Sources:** none listed. No primary source with a working link was found.

### Mixed corners give Goodman’s lower bound on single-color triangles

**Remember:** Every mixed triangle has exactly two mixed corners.

*True by definition.* MSC 05D10 (Ramsey theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Color every pair of n vertices red or blue. A mixed corner is a pair of edges of different colors at a shared vertex. A two-colored triangle contains exactly two mixed corners, and a one-color triangle none.

**Problem.** Every such coloring has at least n(n − 1)(n − 5)/24 triangles with all three edges the same color.

**How the definition helps.** Counting mixed corners at each vertex bounds the two-colored triangles. A vertex with r red edges has r(n − 1 − r) ≤ (n − 1)²/4 mixed corners, so there are at most n(n − 1)²/8 two-colored triangles. Our own subtraction from (n choose 3) gives the bound.

**Wikipedia:** [Goodman's theorem](https://en.wikipedia.org/wiki/Goodman%27s_theorem). It says: “Every nonmonochromatic triangle contributes such a pair at exactly two of its vertices, while a monochromatic triangle contributes none.”

**Sources:**

- [A. W. Goodman, On sets of acquaintances and strangers at any party (1959)](https://doi.org/10.1080/00029890.1959.11989408)

### Elementary symmetric products give Viète’s formulas at once

**Remember:** Choose k roots and attach one minus sign for each.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 12D05. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** The elementary symmetric polynomial eₖ of n variables is the sum of the products of all choices of k of them. It is the degree-k part of (1 + r₁) ⋯ (1 + rₙ).

**Problem.** A complex polynomial with leading coefficient 1 has coefficient (−1)ᵏeₖ at the term k places below its leading term. The list counts each root as often as it occurs.

**How the definition helps.** In (x − r₁) ⋯ (x − rₙ), the term k places below the top takes −rᵢ from k factors, giving (−1)ᵏeₖ (our own). The fundamental theorem of algebra supplies the factorization.

**nLab:** [elementary symmetric polynomial](https://ncatlab.org/nlab/show/elementary+symmetric+polynomial). It says: “Equivalently these are the degree-k summands in the polynomial (1+X₁)(1+X₂) ⋯ (1+Xₙ)”

**Paper or page:** [Elementary Symmetric Function/Examples/Monic Polynomial](https://proofwiki.org/wiki/Elementary_Symmetric_Function/Examples/Monic_Polynomial). It says: “has coefficients which are parity operators times an elementary symmetric function”

**Sources:** none listed. No primary source with a working link was found.

### Factorial weights give binomial inversion by canceling exponentials

**Remember:** Multiply by exp(x) to transform, and by exp(−x) to reverse.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The exponential generating function of a real sequence a is the formal power series ∑ₙ≥₀ a(n)xⁿ/n!. With these factorial weights, the binomial sum that defines b becomes multiplication by exp(x).

**Problem.** Suppose b(n) is the sum of (n choose k) a(k) over 0 ≤ k ≤ n. Then a(n) is the sum of (n choose k) (−1)ⁿ⁻ᵏ b(k) over the same range.

**How the definition helps.** The series of b is exp(x) times the series of a, so multiplying by exp(−x) recovers a (our own). Reading the coefficient of xⁿ/n! in that product gives the alternating sum.

**Wikipedia:** [Binomial transform](https://en.wikipedia.org/wiki/Binomial_transform). It says: “The binomial convolution arises naturally from the product of the exponential generating functions.”

**Paper or page:** [Alternating Summation of Binomial Coefficient of Summation of Binomial Coefficient of Sequence](https://proofwiki.org/wiki/Alternating_Summation_of_Binomial_Coefficient_of_Summation_of_Binomial_Coefficient_of_Sequence). It says: “(−1)ⁿ bₙ = ∑ₛ₌₀ⁿ (n choose s) (−1)ˢ aₛ”

**Sources:** none listed. No primary source with a working link was found.

### Function fibers explain the Stirling expansion of powers

**Remember:** Group equal outputs first, then give the groups distinct outputs.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A18. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A fiber of a function is the set of inputs with one given output. A function on n inputs amounts to a partition of the inputs into nonempty fibers, plus distinct outputs, one for each fiber.

**Problem.** For n ≥ 0, xⁿ is the sum over 0 ≤ k ≤ n of S(n,k) x(x − 1)⋯(x − k + 1), where the empty product is 1. Here S(n,k) counts partitions of n inputs into k nonempty blocks.

**How the definition helps.** For a positive integer x, a partition into k blocks has x(x − 1)⋯(x − k + 1) choices of distinct outputs. Summing over partitions counts all xⁿ functions (our own). Equality at every positive integer makes the two polynomials equal.

**Wikipedia:** [Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind). It says: “the numbers that arise when one expresses powers of an indeterminate x in terms of the falling factorials”

**Paper or page:** [Stirling Numbers of the Second Kind/Examples/5th Power](https://proofwiki.org/wiki/Stirling_Numbers_of_the_Second_Kind/Examples/5th_Power). It says: “x⁵ = x⁵̲ + 10 x⁴̲ + 25 x³̲ + 15 x²̲ + x¹̲”

**Sources:** none listed. No primary source with a working link was found.

### Sorting tied letters by position gives Worpitzky’s identity

**Remember:** Ties can occur only where the sorted positions rise.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A(n,d) counts permutations of 1 through n with d descents, steps to a smaller entry. Sort the n positions of a word with letters 1 to x by letter, breaking ties by position. The sorted order is a permutation, and a tie can occur only where consecutive sorted positions rise.

**Problem.** For positive integers n and x, summing A(n,d) × (x+n−1−d choose n) over 0 ≤ d &lt; n gives xⁿ. A binomial coefficient is zero when its upper number is smaller than its lower number.

**How the definition helps.** So a sorted order with d descents forces d strict increases in the sorted letters. In our own proof, subtracting the forced increases leaves a nondecreasing list of n letters from 1 to x − d, counted by the binomial coefficient. Summing over permutations counts all xⁿ words.

**Wikipedia:** [Eulerian number](https://en.wikipedia.org/wiki/Eulerian_number). It says: “Worpitzky's identity expresses xⁿ as the linear combination of Eulerian numbers with binomial coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Additive size makes ordinary generating functions multiply

**Remember:** Add sizes by multiplying powers.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** An ordinary generating function records the number of objects of size n as the coefficient of xⁿ, where sizes are nonnegative integers. An ordered pair gets the sum of its two sizes, so its power of x is the product of its members’ powers.

**Problem.** The series for ordered pairs is the product of the two classes’ series if both have finite counts at each size. For cumulative totals of a counting sequence with series A(x), the series is A(x)/(1 − x).

**How the definition helps.** Grouping pairs by their first size gives exactly the coefficient rule for multiplying series (our own). For cumulative totals, pair each object with a filler integer j ≥ 0 that makes up the remaining size. The fillers have series 1/(1 − x).

**Wikipedia:** [Symbolic method (combinatorics)](https://en.wikipedia.org/wiki/Symbolic_method_%28combinatorics%29). It says: “The product of two combinatorial classes A and B is specified by defining the size of an ordered pair as the sum of the sizes of the elements in the pair.”

**Sources:** none listed. No primary source with a working link was found.

### Aperiodic necklaces let every class use the same divisor

**Remember:** Exclude repeated words, then divide by the number of rotations.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A necklace is a word up to cyclic shift. A word is aperiodic if it is not two or more copies of a shorter word, and then its n rotations are all different.

**Problem.** Fix a finite alphabet and n ≥ 1. The number of aperiodic necklaces of length n equals the number of aperiodic words of length n divided by n.

**How the definition helps.** Each aperiodic necklace therefore contains exactly n words, so dividing by n counts necklaces. In our own proof, a rotation by j fixing a word makes it repeat a block of length gcd(n,j). By contrast, AA has two starting positions but only one distinct rotation.

**Wikipedia:** [Necklace (combinatorics)](https://en.wikipedia.org/wiki/Necklace_%28combinatorics%29). It says: “An aperiodic necklace of length n is a rotation equivalence class having size n”

**Sources:** none listed. No primary source with a working link was found.

### Cycles without singletons give the derangement exponential series

**Remember:** Remove singleton cycles before taking the exponential.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A derangement of n labels is a permutation with no fixed point, that is, an unordered set of disjoint cycles of length at least two that use every label.

**Problem.** If D(n) counts derangements on n labels, its exponential generating function, the sum of D(n)xⁿ/n!, equals exp(−x)/(1 − x). Thus D(n) equals n! times the sum of (−1)ᵏ/k! over 0 ≤ k ≤ n.

**How the definition helps.** The exponential formula turns the series for one allowed cycle into the series for sets of cycles by exponentiating. In our own count, k labels form (k − 1)! cycles, so one cycle has series −log(1 − x), and dropping length one leaves −log(1 − x) − x. Its exponential is exp(−x)/(1 − x).

**Wikipedia:** [Exponential formula](https://en.wikipedia.org/wiki/Exponential_formula). It says: “the exponential generating function for structures on finite sets is the exponential of the exponential generating function for connected structures.”

**Paper or page:** [Closed Form for Number of Derangements on Finite Set](https://proofwiki.org/wiki/Closed_Form_for_Number_of_Derangements_on_Finite_Set). It says: “Dₙ = n! ∑ₖ₌₀ⁿ (−1)ᵏ/k!”

**Sources:** none listed. No primary source with a working link was found.

### Forbidding objects of size zero makes sequence and set constructions countable

**Remember:** Nothing of size zero, or sequences pile up for free.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A combinatorial class gives each object a nonnegative integer size, with finitely many objects of each size. A positive class has no object of size zero, so a structure of size n has at most n components.

**Problem.** For a positive class with ordinary generating function B(z), finite ordered sequences have ordinary generating function 1/(1 − B(z)). For a positive labelled class with exponential generating function B(z), sets on disjoint labels have exponential generating function exp(B(z)).

**How the definition helps.** With at most n components, only the powers B(z)ᵏ with k ≤ n reach degree n, so the sums ∑ B(z)ᵏ and ∑ B(z)ᵏ/k! make sense. They give 1/(1 − B(z)) for sequences and exp(B(z)) for labelled sets. An empty component could repeat without limit, giving infinitely many sequences of size zero (our own).

**Wikipedia:** [Symbolic method (combinatorics)](https://en.wikipedia.org/wiki/Symbolic_method_%28combinatorics%29). It says: “In the labelled case we have the additional requirement that X not contain elements of size zero.”

**Sources:**

- [P. Flajolet and R. Sedgewick, Analytic Combinatorics, Cambridge University Press (2009)](https://doi.org/10.1017/CBO9780511801655)

### Keeping cycle lengths makes Pólya’s color inventory a substitution

**Remember:** Each cycle takes one color for all its positions.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05E18. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite group permutes a finite set of positions. For each permutation, take one factor uⱼ for each of its cycles of length j, because a fixed coloring is constant on each cycle. The cycle index averages these products over the group.

**Problem.** For finitely many colors, substituting the sum of the jth powers of their variables for uⱼ gives the polynomial counting colorings up to symmetry. Each coefficient counts the classes with the color totals given by its exponents.

**How the definition helps.** A cycle of length j takes one color for all j positions, so substituting the sum of jth powers counts fixed colorings by their color totals (our own). Burnside’s lemma then counts classes as the average number of fixed colorings.

**Wikipedia:** [Pólya enumeration theorem](https://en.wikipedia.org/wiki/P%C3%B3lya_enumeration_theorem). It says: “the function φ is constant on every cycle q of g.”

**Sources:** none listed. No primary source with a working link was found.

### Label choices become multiplication in exponential generating functions

**Remember:** Divide by factorials so multiplication chooses the labels.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** If a(n) is the finite number of structures on a set of n labels, its exponential generating function sums a(n)xⁿ/n! over n ≥ 0. The factorials make the product of two such series carry the binomial coefficient (n choose k) that chooses labels.

**Problem.** Multiplying two exponential generating functions counts ordered pairs of structures on disjoint label sets that together use all labels.

**How the definition helps.** The coefficient of xⁿ/n! in the product is the sum of (n choose k)a(k)b(n − k), since n!/(k!(n − k)!) appears (our own). This counts choices of k labels for the first structure, then each structure independently.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “exponential generating functions (EGFs) apply to unordered sets (whose elements may be distinguished by having different labels).”

**Paper or page:** [Product of Exponential Generating Functions](https://proofwiki.org/wiki/Product_of_Exponential_Generating_Functions). It says: “∀ n ∈ ℤ≥₀: cₙ = ∑ₖ∈ℤ (n choose k) aₖ bₙ₋ₖ”

**Sources:** none listed. No primary source with a working link was found.

### Marked starts give the ballot probability even for repeated words

**Remember:** Count starting positions even when two starts read the same votes.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A rooted circular vote order includes a chosen starting position. A root is good when every nonempty prefix from that position has more A votes than B votes.

**Problem.** Suppose A has p votes and B has q, with p &gt; q ≥ 0. In a uniformly random order, A stays strictly ahead with probability (p − q)/(p + q).

**How the definition helps.** Counting positions, not distinct rotations, lets the cycle lemma give exactly p − q good roots out of p + q. So a uniform random root is good with probability (p − q)/(p + q), and rotating a uniform random order keeps it uniform (our own). For example, AABAAB has six positions but only three distinct rotations (our own).

**Wikipedia:** [Bertrand's ballot theorem](https://en.wikipedia.org/wiki/Bertrand%27s_ballot_theorem). It says: “The cycle lemma asserts that any sequence of p A's and q B's, where p &gt; q, has precisely p-q dominating cyclic permutations.”

**Paper or page:** [Bertrand's Ballot Theorem](https://proofwiki.org/wiki/Bertrand's_Ballot_Theorem). It says: “In other words, the probability that candidate A is always ahead of candidate B in the count is: (p − q)/(p + q)”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicity bounds give one factor for each part size

**Remember:** One factor chooses how many copies of one part size to use.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05A17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A partition is an unordered sum of positive integers, and the multiplicity of a part size is how often it occurs. Allow each size k any multiplicity from 0 to a fixed bound b(k), chosen independently of the other sizes.

**Problem.** The series whose coefficient of xⁿ counts these partitions is a product over all positive sizes k. Its factor for k is the sum of x raised to kj over integers 0 ≤ j ≤ b(k).

**How the definition helps.** Independent multiplicities give one factor per size, with the term xᵏʲ for using k exactly j times (our own). Picking one term from each factor gives one partition, and the exponents add up to its total. Only sizes up to n affect the coefficient of xⁿ.

**Wikipedia:** [Integer partition](https://en.wikipedia.org/wiki/Integer_partition). It says: “where m₁ is the number of 1's, m₂ is the number of 2's, etc.”

**Sources:** none listed. No primary source with a working link was found.

### Nonattacking rook placements make forbidden positions count correctly

**Remember:** Only forbidden squares in different rows and columns can occur together.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** On an n × n board, a permutation uses one square in each row and each column. The rook number r(k) counts the sets of k forbidden squares in distinct rows and columns, the sets that one permutation can use together.

**Problem.** On an n × n board, the number of permutations using no forbidden square equals the sum of (−1)ᵏr(k)(n − k)! for k from 0 to n.

**How the definition helps.** Each such set of k squares extends to (n − k)! permutations by matching the remaining rows and columns (our own). Inclusion–exclusion over the forbidden squares used then gives the alternating sum.

**Wikipedia:** [Rook polynomial](https://en.wikipedia.org/wiki/Rook_polynomial). It says: “rₖ(B) is the number of ways to place k non-attacking rooks on the board B.”

**Sources:**

- [I. Kaplansky and J. Riordan, The problem of the rooks and its applications, Duke Mathematical Journal 13 (1946), 259–268](https://doi.org/10.1215/S0012-7094-46-01324-5)

### Nonempty labeled blocks give the Stirling generating functions

**Remember:** Build ordered nonempty blocks, then forget their order.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A18. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A set partition into k blocks is an unordered collection of k nonempty blocks that use each label once. One nonempty block has exponential generating function ∑ₙ≥₁ xⁿ/n! = exp(x) − 1, one block for each positive label count.

**Problem.** For k ≥ 0, partitions into k blocks have exponential generating function (exp(x) − 1)ᵏ/k!.

**How the definition helps.** The product rule for exponential generating functions makes (exp(x) − 1)ᵏ count k ordered nonempty blocks (our own). Each partition appears in k! orders, so dividing by k! gives the result.

**Paper or page:** [Power Series Expansion for Integer Power of Exponential Function minus 1](https://proofwiki.org/wiki/Power_Series_Expansion_for_Integer_Power_of_Exponential_Function_minus_1). It says: “(eᶻ − 1)ⁿ = n! ∑ₖ∈ℤ {k brace n} zᵏ/k!”

**Sources:** none listed. No primary source with a working link was found.

### A unique nearest pole gives one leading coefficient term

**Remember:** One closest pole sets the growth, and farther poles fade.

*Rules out counterexamples.* MSC 05A16 (Asymptotic enumeration). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The poles of a rational generating function A(z) are the zeros of its denominator after cancellation. A dominant pole is one nearest zero, and it is unique when every other pole is strictly farther away.

**Problem.** Let ρ be the unique dominant pole, of order m, and let C = lim as z → ρ of (1−z/ρ)ᵐ A(z). The nth coefficient is asymptotic to Cρ⁻ⁿnᵐ⁻¹/(m−1)!.

**How the definition helps.** A pole ρ contributes terms of size about \|ρ\|⁻ⁿ, so the other poles are exponentially smaller. Partial fractions and the binomial series give the leading term at ρ (our own). A tie can fail, since 1/(1 − z²) has poles ±1 and coefficients alternating between 1 and 0.

**Paper or page:** [Trees with flowers: A catalog of integer partition and integer composition trees with their asymptotic analysis](https://arxiv.org/abs/2402.16111v2). It says: “Suppose that f(z) has a single dominant singularity at α &gt; 0 which is a pole of order r ≥ 1.”

**Sources:**

- [Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics, Theorem IV.9 and Note IV.26](https://ac.cs.princeton.edu/40complex/)

### Normalized pole terms give exact rational coefficient formulas

**Remember:** Write each pole as (1 − z/ρ)⁻ʲ and read off binomials.

*True by definition.* MSC 05A16 (Asymptotic enumeration), 39A06. arXiv math.CO, math.CA. Level 2: later undergraduate.

**Definition.** Write each pole part of a rational function regular at zero as constants times (1 − z/ρ)⁻ʲ, for j from 1 to the pole’s order m. The constant at j = m is nonzero, and (1 − z/ρ)⁻ʲ has nth coefficient ρ⁻ⁿ(n + j − 1 choose j − 1) (our own).

**Problem.** For a rational power series, the coefficients eventually equal a sum of terms ρ⁻ⁿ times polynomials in n, one for each pole ρ. Each polynomial has degree one less than the order of its pole.

**How the definition helps.** That binomial coefficient is a polynomial in n of degree j − 1, so the top term j = m gives degree m − 1 (our own). Partial fractions supply the decomposition, whose polynomial part changes only finitely many coefficients.

**Wikipedia:** [Generating function](https://en.wikipedia.org/wiki/Generating_function). It says: “we are able to extract an exact formula for the sequence by taking the partial fraction expansion of the last generating function.”

**Sources:**

- [Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics, Theorem IV.9](https://doi.org/10.1017/CBO9780511801655)

### The Catalan binomial quotient gives the coefficient growth

**Remember:** The Catalan quotient is a central binomial coefficient divided by n+1.

*True by definition.* MSC 05A16 (Asymptotic enumeration), 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The nth Catalan number Cₙ is (2n)! divided by (n!)²(n + 1), the central binomial coefficient divided by n + 1. It is also the nth coefficient of the series T(z) with constant term 1 that satisfies T(z) = 1 + zT(z)².

**Problem.** The nth coefficient Cₙ of T(z) is asymptotic to 4ⁿ/(√π n√n).

**How the definition helps.** Stirling’s formula gives (2n)!/(n!)² asymptotic to 4ⁿ/√(πn), and dividing by n + 1 gives the result (our own). Matching the closed form with the series coefficient needs solving the quadratic equation and expanding its square root.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “The coefficient of zⁿ in T(z) is the nth Catalan number”

**Sources:** none listed. No primary source with a working link was found.

### Zero padding makes subtraction of a staircase reversible for partitions

**Remember:** Pad with zeros so every part has a staircase step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A17 (Combinatorial aspects of partitions of integers), 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Write a partition with at most k parts as a nonincreasing list of exactly k nonnegative integers, padded with trailing zeros. Then every such list has k positions for the staircase (k, k − 1, …, 1).

**Problem.** Fix nonnegative integers n and k. Partitions of n into k distinct parts correspond to partitions of n − k(k + 1)/2 into at most k parts.

**How the definition helps.** Padding lets our own map subtract the staircase entry by entry from k distinct positive parts, leaving a nonincreasing list with entries at least zero. Adding the staircase back gives distinct positive parts, so the map is reversible. For k = 0 the staircase is empty.

**Wikipedia:** [Integer partition](https://en.wikipedia.org/wiki/Integer_partition). It says: “subtracting 1 from each part of such a partition yields a partition of n − M into at most M parts.”

**Sources:** none listed. No primary source with a working link was found.

### Set partitions make Stirling numbers nonnegative integers

**Remember:** Count maps by grouping inputs that have the same output.

*True by definition. Confidence: medium.* MSC 05A18 (Partitions of sets), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For integers 0 ≤ k ≤ n, S(n,k) counts partitions of an n-element set into k nonempty unlabelled blocks. These blocks are the nonempty fibers of a map, its sets of inputs with a common output.

**Problem.** When xⁿ is written as a combination of falling factorials, every coefficient is a nonnegative integer.

**How the definition helps.** A map from n inputs to x outputs is a partition into k fibers plus k distinct outputs (our own). So xⁿ is the sum of S(n,k) x(x − 1)⋯(x − k + 1). This holds at every positive integer x, so it is a polynomial identity whose coefficients are counts.

**Wikipedia:** [Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind). It says: “The Stirling numbers of the second kind may be characterized as the numbers that arise when one expresses powers of an indeterminate x in terms of the falling factorials”

**Sources:** none listed. No primary source with a working link was found.

### Partitions in a box make Gaussian binomials nonnegative

**Remember:** Each coefficient counts partitions that fit inside a box.

*True by definition.* MSC 05A30 (q-calculus and related topics), 05A17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For integers m, n ≥ 0, the Gaussian binomial adds qˢ for each partition in an m × n box, where s is the partition’s size. A partition fits the box when it has at most m parts, each at most n.

**Problem.** The Gaussian binomial coefficient is a polynomial with nonnegative integer coefficients. It is unchanged when m and n are swapped.

**How the definition helps.** Each coefficient counts the partitions of one size in the box, so it is a nonnegative integer. Transposing each partition’s diagram swaps the box dimensions, giving the symmetry (our own). The usual quotient agrees through the shared recurrence and boundary values.

**Wikipedia:** [Gaussian binomial coefficient](https://en.wikipedia.org/wiki/Gaussian_binomial_coefficient). It says: “Although the formula at first appears to be a rational function, it actually is a polynomial, because the division is exact in Z\[q\].”

**Sources:** none listed. No primary source with a working link was found.

### A fixed point turns one design level into the next lower one

**Remember:** Put the fixed point back to recover the old count.

*True by definition. Confidence: medium.* MSC 05B05 (Combinatorial aspects of block designs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A t-design on v points has blocks of size k, with exactly λ blocks containing each t-point subset, where t ≤ k ≤ v. Deriving at a point p keeps the blocks through p and removes p from each.

**Problem.** For t ≥ 2, deriving at a point produces a (t−1)-design on v−1 points with block size k−1. Each (t−1)-point subset belongs to exactly λ blocks.

**How the definition helps.** A (t − 1)-point subset S avoiding p lies in a derived block exactly when S together with p lies in the original block (our own). That t-point subset lies in exactly λ original blocks, so S lies in exactly λ derived blocks.

**nLab:** [block design](https://ncatlab.org/nlab/show/block+design). It says: “the number of b ∈ B such that {x₁,…,xₛ} ⊂ b is independent of the choice of such a subset and equals λ.”

**Sources:** none listed. No primary source with a working link was found.

### Complementing blocks preserves design balance and order

**Remember:** A pair occurs in a new block when its old block misses both points.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A 2-design has v points and b blocks of size k, with each point in r blocks and each distinct pair in λ blocks. Its order is r − λ. The complement design replaces each block by the points outside it.

**Problem.** For 2 ≤ k ≤ v−2, each complement block has size v−k. Every point lies in b−r complement blocks, and every distinct pair lies in b−2r+λ. Both designs have the same order.

**How the definition helps.** A pair lies in a complement block exactly when the old block misses both points, which by inclusion–exclusion happens b − 2r + λ times. A point lies in b − r complement blocks, and our own subtraction gives (b − r) − (b − 2r + λ) = r − λ.

**Wikipedia:** [Block design](https://en.wikipedia.org/wiki/Block_design). It says: “A 2-design and its complement have the same order.”

**Sources:** none listed. No primary source with a working link was found.

### Lines in a finite plane form a symmetric design

**Remember:** One block through each pair gives one line through each pair.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs), 05B25. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A 2-design with parameters (v, k, λ) has v points, blocks of size k, and exactly λ blocks through each pair of points. Reading blocks as lines, λ = 1 says that two points lie on exactly one line.

**Problem.** For integers q ≥ 2, projective planes of order q are exactly the 2-designs with parameters (q²+q+1, q+1, 1).

**How the definition helps.** The condition λ = 1 is the axiom that two points span one line, and the parameters are the counts for a plane of order q (our own). Counting gives as many lines as points, so symmetric design duality makes two lines meet in one point. The sides of a triangle cover only 3q points, which leaves a fourth point for the last axiom.

**Wikipedia:** [Bruck–Ryser–Chowla theorem](https://en.wikipedia.org/wiki/Bruck%E2%80%93Ryser%E2%80%93Chowla_theorem). It says: “the design parameters are v = b = q² + q + 1, r = k = q + 1, λ = 1.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring incomplete blocks makes Fisher's inequality true

**Remember:** No block is full, so points lie in more blocks than pairs.

*Rules out counterexamples.* MSC 05B05 (Combinatorial aspects of block designs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A balanced incomplete block design puts v points into b blocks of size k, with 1 ≤ k &lt; v, so no block holds every point. Each point lies in the same positive number r of blocks, and each pair of distinct points lies in exactly λ blocks.

**Problem.** Fisher's inequality: a balanced incomplete block design has at least as many blocks as points, b ≥ v.

**How the definition helps.** Because no block is complete, counting gives r(k − 1) = λ(v − 1), so r &gt; λ (our own proof). Then the incidence matrix M has MMᵀ = (r − λ)I + λJ, with J all ones, which is positive definite of rank v, so b ≥ v. A single block holding all v points, with v &gt; 1, breaks the bound.

**Wikipedia:** [Fisher's inequality](https://en.wikipedia.org/wiki/Fisher%27s_inequality), [Block design](https://en.wikipedia.org/wiki/Block_design). It says: “(To avoid degenerate examples, it is also assumed that v &gt; k, so that no block contains all the elements of the set.”

**Sources:**

- [R. A. Fisher, An examination of the different possible solutions of a problem in incomplete blocks, Annals of Eugenics 10 (1940) 52–75](https://doi.org/10.1111/j.1469-1809.1940.tb02237.x)

### Square incidence makes even symmetric designs have square order

**Remember:** A square determinant equals k² times an odd power of the order.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs), 05B20. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A symmetric 2-design has v points and v blocks of size k, with 2 ≤ k &lt; v, and each pair of distinct points lies in λ blocks. Its order is k − λ, and its square 0–1 incidence matrix M has an integer determinant.

**Problem.** A symmetric 2-design with an even number v of points has an order k − λ that is a perfect square.

**How the definition helps.** The square (det M)² equals det(MMᵀ) = k²(k − λ)ᵛ⁻¹, read off from the eigenvalues of MMᵀ (our own proof). MMᵀ has k on the diagonal and λ elsewhere, so it has eigenvalue k² on constant vectors and k − λ with multiplicity v − 1. For even v the exponent v − 1 is odd, so k − λ must itself be a square.

**Paper or page:** [Invariants of Quadratic Forms and applications in Design Theory](https://arxiv.org/abs/2308.06008v2). It says: “If v is even then k − λ is the square of an integer.”

**Sources:**

- [S. Chowla and H. J. Ryser, Combinatorial problems (1950), Theorem 3](https://doi.org/10.4153/CJM-1950-009-8)

### Transposing square incidence makes symmetric designs closed under duality

**Remember:** Square incidence lets balance on point pairs pass to block pairs.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs), 05B20. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A symmetric 2-design has v points and v blocks, each block of size k, and each pair of distinct points lies in λ blocks. Its dual swaps the roles of points and blocks, which transposes the square 0–1 incidence matrix M.

**Problem.** For 2 ≤ k &lt; v, the dual of a symmetric 2-design is a symmetric 2-design with the same parameters. In particular, any two distinct blocks meet in λ points.

**How the definition helps.** Blocks meet as MᵀM says, so it suffices to show MᵀM = MMᵀ (our own proof). MMᵀ = (k − λ)I + λJ, with J all ones, is invertible because k &gt; λ, so M is invertible. All row and column sums are k, so M commutes with J, and MᵀM = M⁻¹(MMᵀ)M = MMᵀ.

**Wikipedia:** [Block design](https://en.wikipedia.org/wiki/Block_design). It says: “in a symmetric design every two distinct blocks meet in λ points.”

**Sources:** none listed. No primary source with a working link was found.

### Third points turn products of Steiner systems into coordinate calculations

**Remember:** A product triple gets its third point one coordinate at a time.

*True by definition. Confidence: medium.* MSC 05B07 (Triple systems), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a Steiner triple system each pair of distinct points lies in exactly one triple, so x ⋆ y, the third point of that triple, is defined, and x ⋆ x = x. On the product of two such systems, apply ⋆ in each coordinate and take the sets {x, y, x ⋆ y} for distinct x and y as triples.

**Problem.** The product of the point sets of any two Steiner triple systems carries a Steiner triple system.

**How the definition helps.** Checking the Steiner rule for product triples reduces to identities in each coordinate (our own proof). There x ⋆ x = x, x ⋆ y = y ⋆ x and x ⋆ (x ⋆ y) = y hold. So x ⋆ y differs from distinct x and y, and any two points of a triple give back the third, so each pair lies in exactly one triple.

**nLab:** [Steiner system](https://ncatlab.org/nlab/show/Steiner+system). It says: “such that every l-element subset of S is in precisely one block.”

**Sources:** none listed. No primary source with a working link was found.

### Choosing one point per group encodes orthogonal Latin squares

**Remember:** One point per group, and each cross-group pair in one block.

*Makes the theorem clean to state or prove.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A transversal design has k disjoint groups of n points. Each block takes exactly one point from each group, and any two points from different groups lie in exactly one block.

**Problem.** For k ≥ 3, a transversal design with k groups of size n exists exactly when there are k − 2 mutually orthogonal Latin squares of order n.

**How the definition helps.** Write each cell as a block listing its row, its column and its symbol in each square, one entry per group (our own construction). The pair rule then says each cell has one entry for rows with columns, is the Latin rule for a row or column with a square, and is orthogonality for two squares. Reading the first two groups as cell coordinates reverses the construction (our own).

**Paper or page:** [Combinatorial solutions to the Social Golfer Problem and Social Golfer Problem with Adjacent Group Sizes](https://arxiv.org/abs/2507.23376v2). It says: “The existence of a TD(k,n) is equivalent to the existence of k-2 MOLS of order n.”

**Sources:** none listed. No primary source with a working link was found.

### Disagreement classes complete an almost full set of orthogonal squares

**Remember:** The missing square labels classes of completely different rows.

*True by definition. Confidence: medium.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Write n − 2 mutually orthogonal Latin squares of order n as an array with one row per cell, listing its row, column and symbols, so any two columns show each ordered pair exactly once. Call two array rows related when they are equal or disagree in every column.

**Problem.** For n ≥ 2, any n − 2 mutually orthogonal Latin squares of order n extend to n − 1 such squares.

**How the definition helps.** The classes of this relation are the symbol classes of the missing square (our own construction). Two rows that disagree everywhere have the same n(n − 1) rows agreeing with them somewhere, so the relation is transitive. Its classes have size n and use each value once in every old column, so labelling each cell by its class gives a new orthogonal Latin square.

**Paper or page:** [New Nonuniform Group Divisible Designs and Mixed Steiner Systems](https://arxiv.org/abs/2510.24132v1). It says: “There exists a set of k-1 pairwise orthogonal Latin squares of order k if and only if there exists a set of k-2 pairwise orthogonal Latin squares of order k.”

**Sources:** none listed. No primary source with a working link was found.

### Finite field slopes give a full set of orthogonal Latin squares

**Remember:** Two distinct slopes let two symbols recover one cell.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Over the field of q elements, label rows and columns by field elements, and for each nonzero a let the slope square put ax + y in cell (x, y). Fixing a symbol in each of two slope squares gives two linear equations in x and y.

**Problem.** For each prime power q, the q − 1 slope squares are Latin, with each symbol once in every row and column. They are pairwise orthogonal, so every ordered symbol pair occurs in exactly one cell.

**How the definition helps.** The equations ax + y = s and bx + y = t have exactly one solution when a ≠ b, which is orthogonality (our own). Within one square, fixing x or y makes the other coordinate run through every symbol, because a ≠ 0. A field of q elements exists for each prime power q.

**Wikipedia:** [Mutually orthogonal Latin squares](https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares). It says: “exists whenever q is a prime or prime power.”

**Sources:** none listed. No primary source with a working link was found.

### Missing symbol degrees give Ryser’s Latin rectangle completion test

**Remember:** Missing symbols become edges, and each colour class is a new column.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares), 05D15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Given an r × s Latin rectangle on n symbols, join each row to each symbol missing from it in a bipartite graph. Each row has n − s such edges, and a set of edges with no shared endpoint that covers every row is a valid new column.

**Problem.** An r × s Latin rectangle on n symbols, with 1 ≤ r, s ≤ n, extends to an n × n Latin square exactly when each symbol occurs at least r + s − n times.

**How the definition helps.** The threshold says each symbol is missing from at most n − s rows, so the graph has maximum degree n − s (our own proof). Kőnig's edge-colouring theorem splits its edges into n − s new columns, and the resulting r × n rectangle always completes to a square. A symbol missing from more rows cannot enter all of them in n − s columns.

**Paper or page:** [Latin cubes with disjoint subcubes of two orders](https://arxiv.org/abs/2511.06768v1). It says: “Then L can be extended to an n × n latin square if and only if N(i) ≥ r + s − n for all i ∈ \[n\].”

**Sources:** none listed. No primary source with a working link was found.

### Product symbols preserve orthogonality in Latin squares

**Remember:** Pair the entries, and each check splits into two smaller checks.

*True by definition. Confidence: medium.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The product of a Latin square A of order m and a Latin square B of order n has order mn. Its cell in row (i, k) and column (j, l) holds the pair (A(i, j), B(k, l)), so every check on the product splits into one check on A and one on B (our own).

**Problem.** If orders m and n each admit t pairwise orthogonal Latin squares, order mn does too.

**How the definition helps.** Pair the i-th squares of the two collections (our own proof). Each pair of product symbols then fixes one cell in each factor, by the Latin rule within a square and by orthogonality between two squares. So it fixes exactly one product cell.

**nLab:** [Latin square](https://ncatlab.org/nlab/show/Latin+square). It says: “a square array of numbers from 1 to n such that each row and each column contains every number from 1 to n.”

**Sources:** none listed. No primary source with a working link was found.

### Recording cell coordinates makes the bound on orthogonal squares a count

**Remember:** Two different cells can agree in at most one recorded column.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For mutually orthogonal Latin squares of order n, the orthogonal array has one row per cell, listing its row, its column and its symbol in each square. The Latin rule and orthogonality say any two columns show each ordered pair once, so two distinct array rows agree in at most one column.

**Problem.** A collection of mutually orthogonal Latin squares of order n has at most n − 1 squares when n ≥ 2.

**How the definition helps.** Fix one array row: each column gives n − 1 other rows agreeing with it there, and these rows are all distinct (our own count). So c columns need c(n − 1) ≤ n² − 1, giving c ≤ n + 1. Two columns hold the coordinates, which leaves at most n − 1 squares.

**Wikipedia:** [Mutually orthogonal Latin squares](https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares). It says: “every ordered pair of symbols appears in exactly one row of A”

**Sources:** none listed. No primary source with a working link was found.

### Triples make every conjugate of a Latin square Latin

**Remember:** Permute rows, columns and symbols without changing the rule for pairs.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A Latin square of order n is a set of n² triples (row, column, symbol) with entries from 1 to n, in which no two distinct triples agree in two positions. A conjugate applies one permutation of the three positions to every triple.

**Problem.** Every permutation of the row, column and symbol roles produces another Latin square.

**How the definition helps.** The rule treats the three positions alike, so permuting them keeps it (our own proof). Each pair of positions then takes each of its n² value pairs exactly once. Reading the first two positions as a cell gives a table with each symbol once per row and column.

**Wikipedia:** [Latin square](https://en.wikipedia.org/wiki/Latin_square). It says: “Altogether there are 6 possibilities including "do nothing", giving us 6 Latin squares called the conjugates (also parastrophes) of the original square.”

**Sources:** none listed. No primary source with a working link was found.

### Affine directions give cells and symbols for orthogonal Latin squares

**Remember:** Two directions name a cell, and each remaining direction supplies a symbol.

*True by definition.* MSC 05B25 (Combinatorial aspects of finite geometries), 05B15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In an affine plane of order n, a direction is a class of parallel lines, and there are n + 1 directions (our own). Two directions serve as row and column labels, so each point is a cell. Each other direction labels every point by its line in that direction.

**Problem.** For n ≥ 2, affine planes of order n exist exactly when there are n−1 pairwise orthogonal Latin squares of order n.

**How the definition helps.** Two lines from different directions meet in exactly one point, which gives the Latin rule and orthogonality for the n − 1 squares. Conversely, take the n² cells as points, and as lines the rows, columns and symbol classes of each square. Two cells agree in at most one label, and our own count of (n + 1)(n − 1) other cells through each cell shows every pair is joined.

**Wikipedia:** [Affine plane (incidence geometry)](https://en.wikipedia.org/wiki/Affine_plane_%28incidence_geometry%29). It says: “construct a set of n − 1 mutually orthogonal latin squares.”

**Sources:** none listed. No primary source with a working link was found.

### Parallel classes become points in projective completion

**Remember:** Parallel lines meet at the point named by their direction.

*True by definition.* MSC 05B25 (Combinatorial aspects of finite geometries), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In an affine plane of order n, parallel lines form n + 1 classes, called directions. The projective completion adds one new point per direction, lying on every line of that direction, and one new line made of all the new points.

**Problem.** Every finite affine plane of order n ≥ 2 extends to a projective plane of order n. In the extension, any two lines meet once and any two points determine one line.

**How the definition helps.** Parallel lines now meet at the new point of their direction, and other lines already met once (our own proof). Each old point lies on one line of each direction, so it joins each new point once, and the new line joins any two new points. Each completed line has n + 1 points.

**Wikipedia:** [Affine plane (incidence geometry)](https://en.wikipedia.org/wiki/Affine_plane_%28incidence_geometry%29). It says: “each of whose points is that point at infinity where an equivalence class of parallel lines meets.”

**Sources:** none listed. No primary source with a working link was found.

### Subspace incidence constructs a projective plane over every finite field

**Remember:** Span joins two points, and intersection is where two lines meet.

*True by definition. Confidence: medium.* MSC 05B25 (Combinatorial aspects of finite geometries), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Over the field of q elements, the points are the one-dimensional subspaces of a three-dimensional space, the lines are the two-dimensional subspaces, and incidence is inclusion. Two distinct points span a plane, and two distinct planes meet in a one-dimensional subspace.

**Problem.** For each prime power q, the subspace construction gives a plane with q + 1 points per line. Two points determine one line, two lines meet once, and some four points have no three on a line.

**How the definition helps.** Joining and meeting become span and intersection, so linear algebra in three dimensions gives both axioms (our own). A two-dimensional subspace has q² − 1 nonzero vectors, and dividing by the q − 1 scalars gives q + 1 points per line. The three coordinate axes and the span of (1, 1, 1) are four points with no three in one plane.

**nLab:** [projective plane](https://ncatlab.org/nlab/show/projective+plane). It says: “As the set of lines through the origin in F³”

**Sources:** none listed. No primary source with a working link was found.

### Every matroid has a dual, even when the graph is not planar

**Remember:** Take complements of bases and you always get the dual matroid.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A matroid on a finite set E is given by a nonempty family of bases with the exchange property: for bases B, C and e ∈ B ∖ C, some f ∈ C ∖ B makes (B ∖ {e}) ∪ {f} a basis. The dual matroid takes the complements E ∖ B as bases, and these again satisfy exchange (our own).

**Problem.** Every finite matroid has a dual, including the cycle matroid of every finite graph. That cycle matroid has a graphic dual exactly when the graph is planar. In a plane embedding, the dual matroid is the cycle matroid of the dual graph.

**How the definition helps.** Complements of bases satisfy the exchange property, so every matroid has a dual (our own account). The cycle matroid of a graph has its maximal forests as bases. Whitney's planarity criterion says this dual is graphic exactly when the graph is planar, and then the plane dual graph represents it.

**Wikipedia:** [Dual matroid](https://en.wikipedia.org/wiki/Dual_matroid), [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “The dual of a graphic matroid is itself graphic if and only if the underlying graph is planar; the matroid of the dual of a planar graph is the same as the dual of the matroid of the graph.”

**Sources:**

- [Hassler Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)
- [Hassler Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)

### Matroids are exactly where the greedy algorithm always works

**Remember:** Small sets grow from bigger ones, and greedy needs nothing more.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO, cs.DS. Level 2: later undergraduate.

**Definition.** A matroid on a finite set is a nonempty family of independent sets, closed under subsets, in which a smaller set can always grow from a larger one. That is, if \|A\| &lt; \|B\|, some x ∈ B ∖ A makes A ∪ {x} independent.

**Problem.** Consider a nonempty family of subsets of a finite set, closed under taking subsets. Greedy finds a maximum-weight member for every assignment of nonnegative element weights exactly when the family defines a matroid.

**How the definition helps.** Augmentation makes greedy take as many elements as possible from every top-weight part of the order, which gives the best total weight (our own explanation). If augmentation fails, some nonnegative weights make greedy pick a worse set. The matroid greedy theorem proves both directions.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “no matter how the sets are weighted, the greedy algorithm finds a maximum-weight set in the family, then F must be the family of independent sets of a matroid.”

**Sources:**

- [Jack Edmonds, Matroids and the greedy algorithm, Mathematical Programming (1971)](https://doi.org/10.1007/BF01584082)
- [Hassler Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Matroids make the dual of a planar graph unique

**Remember:** Different drawings give different duals, but one dual matroid.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The graphic matroid of a graph has the edges as elements, and its bases are the spanning forests. Its dual matroid has the complements of these bases as bases, so it depends only on the graph, not on any drawing.

**Problem.** If G is planar, the graphic matroid of any planar dual of G is the dual of the graphic matroid of G. So all planar duals of G have the same matroid, though they may be non-isomorphic graphs.

**How the definition helps.** The dual matroid depends only on G, so it suffices that each planar dual represents it (our own argument). For a connected plane graph, complements of spanning trees are exactly the duals of spanning trees of the dual graph. A disconnected G is first joined by bridges inside faces, which lie in every spanning tree and whose dual loops lie in none.

**Wikipedia:** [Graphic matroid](https://en.wikipedia.org/wiki/Graphic_matroid). It says: “While G may have multiple dual graphs, their graphic matroids are all isomorphic.”

**Sources:**

- [H. Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)
- [H. Whitney, 2-isomorphic graphs, American Journal of Mathematics 55 (1933) 245](https://doi.org/10.2307/2371127)

### Simple matroids correspond one-to-one with geometric lattices

**Remember:** No loops, no parallel pairs, so each element is its own atom.

*Rules out counterexamples. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite matroid is simple if it has no loops and no parallel pairs, so every singleton and every two-element set is independent. Then each element is its own flat of rank one, an atom of the lattice of flats, where a flat is a set whose rank grows when any outside element is added.

**Problem.** The flats of a simple matroid form a geometric lattice, a finite atomistic semimodular lattice. Every geometric lattice arises in this way from exactly one simple matroid, up to isomorphism.

**How the definition helps.** Simplicity makes the elements the atoms of the lattice, so the matroid can be read back from it, and the two constructions are inverse. A loop lies in every flat, and parallel elements lie in the same flats, so the lattice cannot see them (our own explanation). So a non-simple matroid cannot be recovered from its lattice.

**Wikipedia:** [Geometric lattice](https://en.wikipedia.org/wiki/Geometric_lattice). It says: “These two constructions, of a simple matroid from a lattice and of a lattice from a matroid, are inverse to each other”

**Sources:**

- [G. Birkhoff, Abstract linear dependence and lattices, American Journal of Mathematics 57 (1935) 800–804](https://doi.org/10.2307/2371015)

### The augmentation axiom makes all bases of a matroid the same size

**Remember:** A smaller independent set can always grow, so bases match in size.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A matroid on a finite set is a nonempty family of independent sets, closed under subsets, in which a smaller set can always grow from a larger one. That is, if \|U\| &gt; \|V\|, some x ∈ U ∖ V makes V ∪ {x} independent, and a base is an independent set that is maximal under inclusion.

**Problem.** In a matroid, all bases have the same number of elements, and this number is the rank of the matroid.

**How the definition helps.** A smaller base could grow by an element of a larger base, which contradicts its maximality (our own proof). So all bases have the same size, called the rank.

**Paper or page:** [All Bases of Matroid have same Cardinality](https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality), [Equivalence of Definitions of Matroid/Definition 1 implies Definition 4](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_4). It says: “That is, all bases of M have the same cardinality, which is the rank of M.”

**Sources:**

- [ProofWiki, All Bases of Matroid have same Cardinality](https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality)
- [ProofWiki, Equivalence of Definitions of Matroid/Definition 1 implies Definition 4](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_4)

### Prüfer sequences count trees with prescribed degrees

**Remember:** Each label appears once for every lost edge except its last.

*True by definition.* MSC 05C05 (Trees), 05C30. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The Prüfer sequence of a tree on vertices labelled 1 to n, with n ≥ 2, records the neighbour of the smallest-labelled leaf and then deletes that leaf, until two vertices remain. Vertex i is recorded once for each edge it loses before its last, so it appears exactly dᵢ − 1 times.

**Problem.** Take n ≥ 2 labeled vertices with prescribed positive degrees d₁ through dₙ totaling 2n − 2. The number of trees with those degrees is (n − 2)! divided by the product of all (dᵢ − 1)!.

**How the definition helps.** Prüfer sequences correspond one-to-one to labelled trees, so trees with degrees d₁ to dₙ match sequences of length n − 2 with i appearing dᵢ − 1 times. Arranging these labels gives the multinomial coefficient (n − 2)! / ∏(dᵢ − 1)! (our own count).

**Wikipedia:** [Prüfer sequence](https://en.wikipedia.org/wiki/Pr%C3%BCfer_sequence). It says: “For each node set its degree to the number of times it appears in the sequence plus 1.”

**Sources:** none listed. No primary source with a working link was found.

### A dual bond corresponds to one simple cycle

**Remember:** A simple closed curve cuts the dual in two.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C40. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A bond is a minimal cut: a nonempty set of edges whose deletion disconnects a connected graph, while no proper subset does. In the plane dual, with a vertex per face and an edge across each edge, the dual edges of a simple cycle are exactly those crossing the closed curve the cycle draws.

**Problem.** In a finite connected plane graph, the dual edges of any simple cycle form a bond of the dual, and every bond of the dual arises this way. A loop or a pair of parallel edges counts as a cycle.

**How the definition helps.** By the Jordan curve theorem, a simple cycle splits the faces into an inside and an outside, each connected in the dual, and only its dual edges cross between them. Conversely, in our own argument, the original edges of a dual bond have even degree at every vertex, so they split into cycles. One cycle already separates the dual, so minimality leaves only that cycle.

**Wikipedia:** [Dual graph](https://en.wikipedia.org/wiki/Dual_graph). It says: “every simple cycle of G corresponds to a minimal cutset in the dual of G, and vice versa.”

**Sources:** none listed. No primary source with a working link was found.

### Euler's formula holds on every surface when each face is a disk

**Remember:** Every face a disk, so the cells count the surface.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 57K20. arXiv math.CO, math.GT. Level 2: later undergraduate.

**Definition.** A cellular embedding draws a finite graph on a closed surface without crossings so that every face, each region of the complement, is an open disk. The vertices, edges and faces then form a cell decomposition of the surface.

**Problem.** For a graph drawn on a closed surface S with every face a disk, the number of vertices minus edges plus faces equals χ(S).

**How the definition helps.** Disk faces make the drawing a cell decomposition of S, so the alternating count is χ(S) (our own explanation). Without the condition the count fails: one nonseparating loop on a torus leaves an annulus. That gives 1 − 1 + 1 = 1, although the torus has Euler characteristic zero.

**Paper or page:** [Efficient polynomial-time approximation scheme for the genus of dense graphs](https://arxiv.org/abs/2011.08049). It says: “Let G be a graph which is 2-cell embedded in a surface S. If G has n vertices, e edges and f faces in S, then χ(S)=n−e+f.”

**Sources:**

- [Yifan Jing, Bojan Mohar, Efficient polynomial-time approximation scheme for the genus of dense graphs, arXiv:2011.08049 (2020)](https://arxiv.org/abs/2011.08049)

### Faces that are disks make embeddings the same as rotation systems

**Remember:** When every face is a disk, vertex orders determine everything.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C62. arXiv math.CO, math.GT. Level 2: later undergraduate.

**Definition.** An embedding is cellular if every face is an open disk. A rotation system records, at each vertex, the cyclic order of the edge ends around it, counting the two ends of a loop separately, and following it traces the face boundaries.

**Problem.** Cellular embeddings of a connected multigraph on closed oriented surfaces, up to orientation-preserving homeomorphism, correspond one-to-one to rotation systems. So a topological question becomes a question about permutations.

**How the definition helps.** Disk faces carry no topology of their own, so the surface is the graph with disks glued along the face boundaries that the rotation traces. Conversely, every rotation system traces closed face walks, and gluing disks to them gives a closed oriented surface. If a face could be an annulus or a punctured torus, one rotation system would fit many surfaces (our own remark).

**Wikipedia:** [Combinatorial map](https://en.wikipedia.org/wiki/Combinatorial_map), [Graph embedding](https://en.wikipedia.org/wiki/Graph_embedding). It says: “Every rotation scheme defines a unique 2-cell embedding of a connected multigraph on a closed oriented surface (up to orientation-preserving topological equivalence).”

**Sources:**

- [L. Heffter, Ueber das Problem der Nachbargebiete, Mathematische Annalen 38 (1891) 477–508](https://doi.org/10.1007/BF01203357)
- [J. R. Edmonds, A combinatorial representation for oriented polyhedral surfaces, Master's thesis, University of Maryland (1960)](https://hdl.handle.net/1903/24820)

### Forbidden minors reduce planarity to two graphs

**Remember:** Contract the stretched parts and look for just two graphs.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C83. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A minor is what remains of a graph after deleting vertices or edges and contracting edges, where contracting merges the two ends and drops loops and duplicate edges. Contraction shrinks any path to one edge, so a subdivided K₅ or K₃,₃ in a graph gives K₅ or K₃,₃ as a minor.

**Problem.** A finite simple graph is planar exactly when neither K₅ nor K₃,₃ is a minor. K₅ joins every pair of five vertices, and K₃,₃ joins each of three vertices to each of three others.

**How the definition helps.** Kuratowski's theorem finds a subdivided K₅ or K₃,₃ in every nonplanar graph, and contraction turns it into K₅ or K₃,₃ itself. Conversely, both graphs are nonplanar, and taking minors preserves planarity (our own reduction).

**nLab:** [planar graph](https://ncatlab.org/nlab/show/planar+graph). It says: “Wagner's theorem that this is the case iff K₅, K₃,₃ are not graph minors of G”

**Sources:** none listed. No primary source with a working link was found.

### Fáry's theorem holds for simple graphs, since parallel edges cannot be straight

**Remember:** Two points fix one straight segment, so straight drawings need simple graphs.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C62. arXiv math.CO, cs.CG. Level 2: later undergraduate.

**Definition.** A simple graph has no loops and at most one edge between any two vertices, just as two points have one straight segment between them. A planar graph is one that can be drawn in the plane with no two edges crossing.

**Problem.** Every simple planar graph has a crossing-free drawing in which every edge is a straight line segment. So curved edges do not let more graphs be drawn.

**How the definition helps.** Simplicity removes the only graphs that plainly cannot be drawn straight (our own remark). Two parallel edges would be the same segment, and a loop cannot be a segment at all (our own remark). Every planar multigraph has a curved crossing-free drawing, so the theorem fails without the restriction.

**Wikipedia:** [Fáry's theorem](https://en.wikipedia.org/wiki/F%C3%A1ry%27s_theorem), [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “Fáry's theorem states that any simple, planar graph can be drawn without crossings so that its edges are straight line segments.”

**Sources:**

- [S. K. Stein, Convex maps, Proceedings of the American Mathematical Society 2 (1951) 464–466](https://doi.org/10.1090/S0002-9939-1951-0041425-5)
- [W. T. Tutte, How to draw a graph, Proceedings of the London Mathematical Society 13 (1963) 743–767](https://doi.org/10.1112/plms/s3-13.1.743)

### One universal vertex turns outerplanarity into planarity

**Remember:** The added vertex marks the face that must touch every old vertex.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C83. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is outerplanar if it has a crossing-free drawing with every vertex on the outer face. Its cone adds one new vertex joined to every vertex, and in a drawing that vertex must sit in a face touching every old vertex.

**Problem.** A finite simple graph is outerplanar exactly when its cone can be drawn without crossings.

**How the definition helps.** In an outerplanar drawing, put the new vertex in the outer face and draw its edges there. Conversely, deleting the new vertex from a drawing of the cone merges its regions into one face touching every old vertex, which can be made the outer face (our own explanation).

**Wikipedia:** [Outerplanar graph](https://en.wikipedia.org/wiki/Outerplanar_graph). It says: “the graph formed from G by adding a new vertex, with edges connecting it to all the other vertices, is a planar graph.”

**Sources:** none listed. No primary source with a working link was found.

### Subdivisions let two forbidden graphs characterize planarity

**Remember:** Bending an edge through extra vertices cannot remove a crossing obstruction.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A subdivision replaces each edge of a graph by a path through new vertices, used by no other path. A subdivided K₅ (five vertices, all joined) or K₃,₃ (three joined to each of three) is a stretched copy that is still nonplanar.

**Problem.** A finite simple graph can be drawn without crossings exactly when it contains no subdivision of K₅ or K₃,₃ as a subgraph.

**How the definition helps.** Subdividing edges does not change planarity, so a stretched K₅ or K₃,₃ is still an obstruction, and Kuratowski's theorem finds one in every nonplanar graph. Plain subgraphs are not enough: subdividing every edge of K₃,₃ once gives a nonplanar graph with neither as a subgraph (our own example).

**nLab:** [planar graph](https://ncatlab.org/nlab/show/planar+graph). It says: “G is planar iff it does not contain a subgraph that is an edge subdivision of K₅ or K₃,₃”

**Sources:**

- [Casimir Kuratowski, Sur le problème des courbes gauches en Topologie (1930)](https://doi.org/10.4064/fm-15-1-271-283)

### The complement of a spanning tree gives a dual spanning tree

**Remember:** Edges left out of a tree form a tree of the dual.

*True by definition.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The plane dual has a vertex for every face, including the outer face, and an edge across each original edge. For a spanning tree T of a plane graph, the dual complement keeps every dual vertex and the duals of the edges not in T.

**Problem.** For a finite connected plane graph, the duals of the edges outside any spanning tree form a spanning tree of the dual.

**How the definition helps.** Cycles in one graph match minimal cuts in the other, so the tree properties of T pass to its dual complement (our own proof). A cycle in the dual complement would give a minimal cut missed by T, so T would be disconnected. A disconnected dual complement would miss a minimal dual cut, which is a cycle inside T.

**Wikipedia:** [Dual graph](https://en.wikipedia.org/wiki/Dual_graph). It says: “spanning trees are dual to the complements of spanning trees”

**Sources:** none listed. No primary source with a working link was found.

### Landmark distances bound graph size

**Remember:** Every nonlandmark needs its own list of positive distances.

*True by definition.* MSC 05C12 (Distance in graphs). arXiv cs.DM. Level 2: later undergraduate.

**Definition.** A set of β landmarks resolves a finite connected graph if every vertex has its own list of distances to the landmarks, in a fixed order. The metric dimension is the smallest such β, and the diameter D is the largest distance, so each vertex outside the set has a distinct list of β integers from 1 to D.

**Problem.** Let β be the metric dimension and D the diameter of a finite connected graph. If β ≥ 1, the graph has at most Dᵝ + β vertices.

**How the definition helps.** Distinct lists give a one-to-one map from the vertices outside the set into the Dᵝ lists of integers from 1 to D (our own explanation). Adding the β landmarks gives at most Dᵝ + β vertices.

**Wikipedia:** [Metric dimension (graph theory)](https://en.wikipedia.org/wiki/Metric_dimension_%28graph_theory%29). It says: “each vertex that is not in the resolving set is uniquely determined by a distance vector”

**Sources:**

- [Samir Khuller, Balaji Raghavachari, and Azriel Rosenfeld, Landmarks in Graphs (1996)](https://doi.org/10.1016/0166-218X(95)00106-2)

### Brooks' theorem needs connected graphs to name its exceptions

**Remember:** Connected and simple: only odd cycles and cliques need Δ + 1.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is connected if a path joins every pair of vertices, so it is a single component, and simple if it has no loops or repeated edges. Its maximum degree Δ is the largest number of neighbours of a vertex.

**Problem.** Brooks' theorem says that a connected simple graph needs Δ + 1 colours only when it is an odd cycle or a complete graph.

**How the definition helps.** Connectedness makes the exceptional component the whole graph, so the exceptions can be named. In our own example, K₄ plus an isolated vertex needs Δ + 1 colours but is neither complete nor an odd cycle. Brooks' theorem proves the bound for the other connected simple graphs.

**Paper or page:** [On Lattice Diameter Segments and A Discrete Borsuk Partition Problem](https://arxiv.org/abs/2508.20009). It says: “If G is a connected simple graph, then χ(G) ≤ Δ(G)+1, with equality if and only if G is an odd cycle or a complete graph.”

**Sources:**

- [Anouk E. Brose, Jesús A. De Loera, Gyivan Lopez-Campos, Antonio J. Torres, On Lattice Diameter Segments and A Discrete Borsuk Partition Problem, arXiv:2508.20009 (2025)](https://arxiv.org/abs/2508.20009)

### Four face colors give three edge colors by subtraction

**Remember:** Three different face colors produce three different nonzero edge labels.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Colour faces with the four pairs of bits, added coordinatewise modulo two, so that faces across an edge get different colours. Label each edge by the sum of its two face colours, which is one of the three nonzero pairs.

**Problem.** Take a finite connected graph drawn without crossings, with three edges at each vertex and no edge whose removal disconnects it. Its faces admit a proper four-coloring exactly when its edges admit three colors with different colors at each vertex.

**How the definition helps.** At each vertex the three faces have distinct colours, so the three edge labels are distinct and nonzero, giving three edge colours. Conversely, in our own proof, use the three nonzero pairs as edge labels; they sum to zero at each vertex, so labels crossed along any closed curve sum to zero. So adding labels along a path from a fixed face gives a well-defined face colour that changes across each edge.

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring). It says: “every planar cubic bridgeless graph admits a Tait coloring.”

**Sources:** none listed. No primary source with a working link was found.

### In the four colour theorem, touching at a corner is not adjacency

**Remember:** Countries touching only at a corner may share a colour.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a finite plane drawing, the regions are the connected parts of the complement. Two distinct regions are adjacent if some edge of the drawing borders both, and meeting at a single point does not count.

**Problem.** The four colour theorem: you can colour the regions of every planar map with four colours so that adjacent regions get different colours.

**How the definition helps.** Edge adjacency turns region colouring into vertex colouring of the plane dual with loops removed, a planar graph (our own reduction). The four colour theorem for planar graphs then applies. If corner contact counted, five pie slices meeting at the centre would need five colours.

**Wikipedia:** [Four color theorem](https://en.wikipedia.org/wiki/Four_color_theorem). It says: “Otherwise, a map in a shape of a pie chart would make an arbitrarily large number of regions 'adjacent' to each other at a common corner, and require an arbitrarily large number of colors as a result.”

**Sources:**

- [Kenneth Appel and Wolfgang Haken, Every planar map is four colorable. Part I: Discharging, Illinois Journal of Mathematics 21 (1977) 429–490](https://doi.org/10.1215/ijm/1256049011)
- [Hud Hudson, Four colors do not suffice, The American Mathematical Monthly 110 (2003) 417–423](https://doi.org/10.1080/00029890.2003.11919979)

### Regular completion turns bipartite edge coloring into perfect matchings

**Remember:** Complete the degrees, peel off matchings, and discard the added edges.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A regular completion of a bipartite graph with maximum degree Δ adds vertices and edges, parallel edges allowed, until both sides have equal size and every vertex has degree Δ. In a regular bipartite graph, a perfect matching takes one edge at every vertex and leaves a regular graph.

**Problem.** If a finite bipartite graph has maximum degree Δ, its edges can be colored with Δ colors so that incident edges have different colors. Fewer colors cannot suffice.

**How the definition helps.** Removing Δ perfect matchings from the completion one after another gives Δ colour classes, and Hall's theorem supplies each matching (our own construction). Discarding the added edges leaves a proper Δ-colouring of the original graph. A vertex of degree Δ needs all Δ colours.

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring). It says: “equivalent to the problem of partitioning the edge set into k matchings.”

**Paper or page:** [Total coloring graphs with large minimum degree](https://arxiv.org/abs/2507.05548). It says: “Every bipartite multigraph G satisfies χ′(G) = Δ(G).”

**Sources:** none listed. No primary source with a working link was found.

### Vertex orders make the greedy colouring bound immediate

**Remember:** Fewer than κ earlier neighbours leave a colour free among κ colours.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The colouring number κ of a graph is the least integer such that some vertex order gives each vertex fewer than κ earlier neighbours. It equals one plus the degeneracy, the largest minimum degree of a nonempty subgraph.

**Problem.** A finite nonempty simple graph has a proper colouring with at most its colouring number of colours.

**How the definition helps.** Colour greedily in that order: each vertex has fewer than κ earlier neighbours, so one of κ colours is still free (our own proof). Using it keeps the colouring proper at every step.

**Wikipedia:** [Degeneracy (graph theory)](https://en.wikipedia.org/wiki/Degeneracy_%28graph_theory%29). It says: “By using a greedy coloring algorithm on an ordering with optimal coloring number, one can graph color a k-degenerate graph using at most k+1 colors.”

**Sources:**

- [P. Erdős and A. Hajnal, On chromatic number of graphs and set-systems, Acta Math. Acad. Sci. Hungar. 17 (1966) 61–99](https://doi.org/10.1007/BF02020444)
- [G. Szekeres and H. S. Wilf, An inequality for the chromatic number of a graph, Journal of Combinatorial Theory 4 (1968) 1–3](https://doi.org/10.1016/S0021-9800(68)80081-X)

### Vizing's Δ + 1 bound needs simple graphs

**Remember:** One edge per pair, so multiplicity costs at most one colour.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A simple graph has no loops and at most one edge between two vertices, so its largest edge multiplicity μ is at most 1. A proper edge colouring gives different colours to edges that share a vertex, and Δ is the largest degree.

**Problem.** Every simple graph has a proper edge colouring with Δ + 1 colours. More generally, a loopless multigraph with largest edge multiplicity μ needs at most Δ + μ colours.

**How the definition helps.** Simplicity stops many edges from crowding between few vertices, which is what forces extra colours. In Shannon's triangle, our own example, each edge of a triangle is doubled, so Δ = 4 but all six edges meet and six colours are needed. For simple graphs, the proof swaps colours along alternating paths.

**Wikipedia:** [Vizing's theorem](https://en.wikipedia.org/wiki/Vizing%27s_theorem). It says: “Vizing's theorem states that every simple undirected graph may be edge colored using a number of colors that is at most one larger than the maximum degree Δ of the graph.”

**Sources:**

- [C. E. Shannon, A theorem on coloring the lines of a network, Journal of Mathematics and Physics 28 (1949) 148–152](https://doi.org/10.1002/sapm1949281148)
- [C. Berge and J. C. Fournier, A short proof for a generalization of Vizing's theorem, Journal of Graph Theory 15 (1991) 333–336](https://doi.org/10.1002/jgt.3190150309)

### An elimination order gives an optimal colouring of chordal graphs

**Remember:** Colour backwards so each vertex sees only a clique of coloured neighbours.

*True by definition.* MSC 05C17 (Perfect graphs), 05C15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is chordal if its vertices can be listed so that each vertex's later neighbours are pairwise adjacent, called a perfect elimination order. So each vertex forms a clique with its later neighbours.

**Problem.** The fewest colours needed for a proper colouring of a chordal graph is the size ω of its largest clique. A proper colouring gives adjacent vertices different colours.

**How the definition helps.** Colour greedily in reverse order: a vertex's coloured neighbours form a clique with it, so at most ω − 1 colours are blocked (our own proof). A clique of size ω needs ω colours. The perfect elimination ordering theorem matches this with the usual definition, a chord in every cycle of length at least four.

**Wikipedia:** [Chordal graph](https://en.wikipedia.org/wiki/Chordal_graph). It says: “an optimal coloring may be obtained by applying a greedy coloring algorithm to the vertices in the reverse of a perfect elimination ordering.”

**Sources:**

- [D. R. Fulkerson and O. A. Gross, Incidence matrices and interval graphs, Pacific Journal of Mathematics 15 (1965) 835–855](https://doi.org/10.2140/pjm.1965.15.835)
- [D. J. Rose, Triangulated graphs and the elimination process, Journal of Mathematical Analysis and Applications 32 (1970) 597–609](https://doi.org/10.1016/0022-247X(70)90282-9)

### Perfect graphs restate Kőnig's theorem as perfection of bipartite complements

**Remember:** Perfect means clique size equals colour count in every induced subgraph.

*Makes the theorem clean to state or prove.* MSC 05C17 (Perfect graphs), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is perfect when, in it and in every induced subgraph, the fewest colours needed equals the size of the largest clique. In the complement of a bipartite graph, a clique is a set with no bipartite edge inside, and a colour class is one vertex or the two ends of a bipartite edge.

**Problem.** The complement of a bipartite graph is perfect. This is a restatement of Kőnig's theorem that in a bipartite graph the largest matching has the size of the smallest vertex cover.

**How the definition helps.** So on n vertices the largest clique has n minus the smallest vertex cover, and the fewest colours is n minus the largest matching (our own count). Kőnig's theorem says the cover and matching sizes are equal. Every induced subgraph is again the complement of a bipartite graph, so the same holds there.

**Wikipedia:** [Bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph), [Perfect graph](https://en.wikipedia.org/wiki/Perfect_graph). It says: “Perfection of bipartite graphs is easy to see (their chromatic number is two and their maximum clique size is also two) but perfection of the complements of bipartite graphs is less trivial, and is another restatement of Kőnig's theorem.”

**Sources:**

- [L. Lovász, Normal hypergraphs and the perfect graph conjecture, Discrete Mathematics 2 (1972) 253–267](https://doi.org/10.1016/0012-365X(72)90006-4)

### Conservative weights bound closed walks

**Remember:** Check cycles once, but do not traverse a negative edge twice.

*Rules out counterexamples.* MSC 05C22 (Signed and weighted graphs), 05C38. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** An edge weighting of a simple undirected graph is conservative if every simple cycle has total weight at least zero, even though single edges may be negative.

**Problem.** Every closed walk that uses each negative edge at most once has nonnegative weight under a conservative weighting.

**How the definition helps.** Split the closed walk at repeated vertices into simple cycles and back-and-forth steps along one edge (our own proof). Each simple cycle weighs at least zero, and a back-and-forth step uses its edge twice, so that edge is not negative. Adding the pieces gives total weight at least zero.

**Paper or page:** [Shortest Odd Paths in Undirected Graphs with Conservative Weight Functions](https://arxiv.org/abs/2308.12653v1). It says: “If W is a closed walk that does not contain any edge of E⁻ more than once, then w(W) ≥ w(E(W)) ≥ 0.”

**Sources:**

- [Shortest Odd Paths in Undirected Graphs with Conservative Weight Functions](https://arxiv.org/abs/2308.12653v1)

### Switching turns Harary's balance theorem into one change of signs

**Remember:** Switch vertex signs in pairs along edges to preserve every cycle product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C22 (Signed and weighted graphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A signed graph gives each edge a sign +1 or −1 and is balanced if every cycle has sign product +1. Switching picks a sign s(v) at each vertex and multiplies the sign of each edge uv by s(u)s(v), which leaves every cycle product unchanged.

**Problem.** Harary's balance theorem: a signed graph is balanced exactly when some switching makes every edge positive. Equivalently, the vertices split into two parts, with negative edges exactly between the parts.

**How the definition helps.** Switching keeps balance, since each vertex sign enters a cycle product twice, and an all-positive graph is balanced. Conversely, in our own proof, switch so that a spanning forest is all positive, and balance forces every other edge positive on its fundamental cycle. The two classes of switching signs put exactly the original negative edges between them.

**Paper or page:** [Circular Game Coloring of Signed Graphs](https://arxiv.org/abs/2505.21586). It says: “There exists a switching function ζ : V → {+1,−1} such that the switched signature σᶻ satisfies σᶻ(e) = +1 for all e∈E”

**Sources:**

- [Pie Desire Ebode Atanhgana, Circular Game Coloring of Signed Graphs, arXiv:2505.21586 (2025)](https://arxiv.org/abs/2505.21586)

### An elimination order factors the chordal chromatic polynomial

**Remember:** A clique of N later neighbours rules out exactly N colours.

*True by definition.* MSC 05C31 (Graph polynomials), 05C17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite simple graph is chordal if its vertices have an order v₁, …, vₙ in which the later neighbours of each vertex form a clique, and Nᵢ counts those of vᵢ. The chromatic polynomial P(x) counts proper colourings with x available colours.

**Problem.** For this vertex order, P(x) = (x − N₁)(x − N₂)⋯(x − Nₙ).

**How the definition helps.** Colour in reverse order: the Nᵢ later neighbours of vᵢ are already coloured and form a clique, so they block exactly Nᵢ of the x colours (our own proof). Multiplying the choices gives the product for every x at least n, and hence as polynomials.

**Wikipedia:** [Chordal graph](https://en.wikipedia.org/wiki/Chordal_graph). It says: “The chromatic polynomial equals (x−N₁)(x−N₂)⋯(x−Nₙ).”

**Sources:**

- [D. J. Rose, Triangulated graphs and the elimination process, Journal of Mathematical Analysis and Applications 32 (1970) 597–609](https://doi.org/10.1016/0022-247X(70)90282-9)

### Partitions into independent sets make the coloring count polynomial

**Remember:** Partition first, then supply different names for the classes.

*True by definition.* MSC 05C31 (Graph polynomials), 05C15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a finite graph, aₖ counts partitions of the vertices into k nonempty sets, none containing two adjacent vertices. These are the proper colourings with the colour names forgotten.

**Problem.** For each nonnegative integer q, the number of proper colorings with q available colors is a polynomial in q. Its term for k classes is aₖ times the product of k descending factors starting at q.

**How the definition helps.** Each partition into k classes gets k distinct colour names in q(q − 1)⋯(q − k + 1) ways, and each colouring comes from exactly one partition (our own). Summing over k gives the polynomial, with the empty product equal to one when k = 0.

**Wikipedia:** [Chromatic polynomial](https://en.wikipedia.org/wiki/Chromatic_polynomial). It says: “counts the number of partitions of the vertex set into k (non-empty) independent sets.”

**Sources:** none listed. No primary source with a working link was found.

### Tutte subset sums count forests and spanning edge sets

**Remember:** Set a variable to one to keep only terms with exponent zero.

*True by definition.* MSC 05C31 (Graph polynomials), 05C05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a finite graph G = (V, E), the Tutte polynomial sums (x − 1)ᵃ(y − 1)ᵇ over all edge sets A ⊆ E, where k counts components, isolated vertices included. Here a = k(A) − k(E) is zero exactly when A connects each component of G. And b = \|A\| − \|V\| + k(A) is zero exactly when A has no cycle.

**Problem.** T(1,1) counts spanning forests, the edge sets with no cycle that connect each component of G. T(2,1) counts all edge sets with no cycle, and T(1,2) counts edge sets with the same components as G.

**How the definition helps.** Setting a variable to 1 keeps only the terms whose exponent is zero, and setting it to 2 gives every term weight 1 in that variable (our own). So T(1,1) counts edge sets with a = b = 0, T(2,1) those with b = 0, and T(1,2) those with a = 0 (our own).

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “T<sub>G</sub>(1,1) counts the number of spanning forests (edge subsets without cycles and the same number of connected components as G).”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)

### Tutte subset sums multiply over disjoint unions

**Remember:** Edge sets split and ranks add, so the sum factors.

*True by definition. Confidence: medium.* MSC 05C31 (Graph polynomials). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The Tutte polynomial of a finite graph sums (x − 1)ᵃ(y − 1)ᵇ over edge sets A ⊆ E, with a = r(E) − r(A) and b = \|A\| − r(A). The rank r(A), all vertices minus the components of the spanning subgraph on A, adds over disjoint pieces, as does \|A\|.

**Problem.** The Tutte polynomial of a disjoint union of graphs is the product of their Tutte polynomials.

**How the definition helps.** An edge set of a disjoint union is one edge set from each graph, and both exponents add, so each term is a product of two terms (our own proof). Summing over both choices multiplies the two polynomials.

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “The Tutte polynomial factors into connected components. If G is the union of disjoint graphs H and H′ then T<sub>G</sub> = T<sub>H</sub> · T<sub>H′</sub>”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)

### Vertex weights reduce Turán’s edge bound to a weighted maximum

**Remember:** Uniform weights count edges, and some optimal weights occupy a clique.

*True by definition.* MSC 05C35 (Extremal problems in graph theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Give the vertices of a graph nonnegative weights summing to one, and add the product of the endpoint weights over all edges. Uniform weights give the edge count divided by n², and moving weight between nonadjacent vertices puts some best weighting on a clique, a set of pairwise joined vertices (our own).

**Problem.** A simple graph on n vertices without a clique of size r + 1 has at most (1 − 1/r)n²/2 edges for r ≥ 2.

**How the definition helps.** Moving the weight of one of two nonadjacent vertices onto the one with more neighbour weight never lowers the sum, so a best weighting lives on a clique of at most r vertices (our own proof). There the sum is (1 − ∑ wᵢ²)/2 ≤ (1 − 1/r)/2. Uniform weights then give at most (1 − 1/r)n²/2 edges.

**Paper or page:** [An edge-spectral Erdős-Stone-Simonovits theorem and its stability](https://arxiv.org/abs/2508.15271v1). It says: “\\sum <sub>ij \\in E(G)</sub> x<sub>ix</sub><sub>j</sub> \\le \\frac{1}{2}\\left( 1- \\frac{1}{r} \\right).”

**Sources:**

- [T. Motzkin and E. Straus, Maxima for graphs and a new proof of a theorem of Turán (1965)](https://doi.org/10.4153/CJM-1965-053-6)

### An edge boundary map gives the cycle space dimension

**Remember:** Subtract the rank of the boundary map from the number of edges.

*True by definition.* MSC 05C38 (Paths and cycles), 05C50. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Write each edge set of a finite simple graph as a vector over the two-element field, and let the boundary map send it to its set of odd-degree vertices. The cycle space is the kernel, the edge sets with even degree at every vertex.

**Problem.** A graph with m edges, n vertices and c connected components has a cycle space of dimension m − n + c.

**How the definition helps.** By rank–nullity, the dimension is m minus the rank of the boundary map (our own proof). The boundaries are exactly the vertex sets with an even number of vertices in each component, since degree sums force this and paths joining paired vertices give every such set. These are c independent conditions, so the rank is n − c.

**Wikipedia:** [Cycle space](https://en.wikipedia.org/wiki/Cycle_space). It says: “consists of the elements of the edge space that map to the zero element of the vertex space; these are exactly the Eulerian subgraphs.”

**Sources:**

- [O. Veblen, An application of modular equations in analysis situs, Annals of Mathematics 14 (1912) 86–94](https://doi.org/10.2307/1967604)

### Cycle addition samples uniform even subgraphs

**Remember:** Equal-sized fibers turn fair cycle choices into a uniform subgraph.

*True by definition.* MSC 05C38 (Paths and cycles), 60K35. arXiv math.PR. Level 2: later undergraduate.

**Definition.** An even subgraph of a finite graph has even degree at every vertex. With symmetric difference as addition, the even subgraphs form a vector space over the two-element field, and summing a chosen subset of the listed cycles is a linear map onto it (our own).

**Problem.** Choose any finite list of cycles that spans this space. Independently keep each listed cycle with probability one half. Their sum is uniform over all even subgraphs.

**How the definition helps.** The map from coin flips to sums of cycles is linear and onto, because the cycles span (our own). Every even subgraph has the same number of preimages, a translate of the kernel (our own). So fair independent flips give the uniform distribution (our own).

**Paper or page:** [Uniform even subgraphs and graphical representations of Ising as factors of i.i.d](https://arxiv.org/abs/2112.03228v1). It says: “then L ≔ ∑ εᵢ Cᵢ is a uniform even subgraph of G.”

**Sources:**

- [\[, ', O, m, e, r,  , A, n, g, e, l, ', ,,  , ', G, o, u, r, a, b,  , R, a, y, ', ,,  , ', Y, i, n, o, n,  , S, p, i, n, k, a, ', \], Uniform even subgraphs and graphical representations of Ising as factors of i.i.d](https://arxiv.org/abs/2112.03228v1)

### An edge equivalence relation makes blocks partition the edges

**Remember:** Classify edges by common cycles to give each edge exactly one block.

*True by definition.* MSC 05C40 (Connectivity), 05C38. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a finite simple undirected graph, call two edges related if they are equal or lie on a common simple cycle. A block is one class of this equivalence relation, so the blocks split the edges.

**Problem.** Every edge lies in exactly one block. Distinct blocks can still share a vertex.

**How the definition helps.** Classes of an equivalence relation partition the edges, so only transitivity needs proof. Two cycles sharing an edge have a 2-connected union, in which any two edges lie on a common cycle. In our own example, two cycles meeting at one vertex give distinct blocks sharing that vertex.

**Wikipedia:** [Biconnected component](https://en.wikipedia.org/wiki/Biconnected_component). It says: “Less obviously, this is a transitive relation: if there exists a simple cycle containing edges e and f, and another simple cycle containing edges f and g, then one can combine these two cycles”

**Sources:** none listed. No primary source with a working link was found.

### Blocks and cut vertices give a tree of attachments

**Remember:** Blocks meet through cut vertices without forming a ring.

*Makes the theorem clean to state or prove.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The block-cut graph has a vertex for each block, a maximal 2-connected subgraph, a bridge or an isolated vertex, and one for each cut vertex, a vertex whose removal disconnects the graph. Each block is joined to the cut vertices it contains.

**Problem.** For a finite connected graph, the resulting block-cut graph is a tree.

**How the definition helps.** Paths in the graph give paths between blocks, so the block-cut graph is connected (our own argument). A cycle in it would give a ring of blocks whose union stays connected after deleting any one vertex. Then these blocks would lie in one block, which contradicts maximality.

**Wikipedia:** [Biconnected component](https://en.wikipedia.org/wiki/Biconnected_component). It says: “There is an edge in the block-cut tree for each pair of a block and an articulation point that belongs to that block.”

**Sources:** none listed. No primary source with a working link was found.

### Leaving K₀ out of connected graphs makes the exponential formula work

**Remember:** Components are never empty, so the logarithm counts connected graphs.

*Rules out counterexamples.* MSC 05C40 (Connectivity), 05C30, 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A connected graph has at least one vertex, and any two vertices are joined by a path, so the empty graph K₀ is not connected. Then every graph splits in exactly one way into a set of nonempty connected components.

**Problem.** Let G(x) be the exponential generating function of all labelled graphs and C(x) that of connected ones. Then G(x) = exp(C(x)). The same holds for any structure built as a set of connected pieces.

**How the definition helps.** Each labelled graph is exactly one set of connected graphs, which is what exp(C(x)) counts, and C(x) has no constant term, so exp(C(x)) is defined. If K₀ were connected, any number of empty components could be added, and the splitting would not be unique (our own remark). The empty graph appears once, as the set of zero components.

**Wikipedia:** [Exponential formula](https://en.wikipedia.org/wiki/Exponential_formula), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “or the definition of connected graphs has to be modified not to include K₀”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 2, Cambridge University Press (1999)](https://doi.org/10.1017/CBO9780511609589)

### Open ears build exactly the two-connected graphs

**Remember:** Each new path attaches at two different places.

*Makes the theorem clean to state or prove.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** An open ear decomposition builds a graph from a cycle by adding paths, called ears, until every edge is used. Each ear hangs from two distinct vertices already present and has only new vertices inside.

**Problem.** A finite simple graph with at least three vertices stays connected after any single vertex deletion exactly when it has an open ear decomposition.

**How the definition helps.** An ear hung from two distinct vertices stays connected to the rest after any one vertex is deleted, so each step keeps the graph 2-connected. For our own converse, start from a cycle; any part not yet covered attaches at two different vertices, or its one attachment would be a cut vertex. A path through that part is the next ear, and a leftover edge is itself an ear.

**Wikipedia:** [Ear decomposition](https://en.wikipedia.org/wiki/Ear_decomposition). It says: “is 2-vertex-connected if and only if it has an open ear decomposition.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring more than three vertices keeps the triangle out of Steinitz's theorem

**Remember:** A triangle is not a solid, so 3-connected starts at four vertices.

*Rules out counterexamples.* MSC 05C40 (Connectivity), 05C10, 52B10. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** A graph is 3-connected if it has more than three vertices and stays connected after any two vertices are removed. The four-vertex floor keeps out the triangle, which passes the deletion test but is the graph of no solid (our own).

**Problem.** A finite simple graph is the graph of a three-dimensional convex polytope exactly when it is planar and 3-connected.

**How the definition helps.** The four-vertex minimum removes small graphs such as the triangle, which pass the deletion test yet are no polytope's graph (our own example). Steinitz's theorem then does the work in both directions for finite simple graphs.

**Wikipedia:** [Steinitz's theorem](https://en.wikipedia.org/wiki/Steinitz%27s_theorem). It says: “A graph is 3-connected if it has more than three vertices and, after the removal of any two of its vertices, any other pair of vertices remain connected by a path.”

**Sources:**

- [B. Grünbaum, Convex Polytopes, Graduate Texts in Mathematics 221, Springer (2003)](https://doi.org/10.1007/978-1-4613-0019-9)
- [E. Steinitz, Polyeder und Raumeinteilungen, Encyclopädie der mathematischen Wissenschaften, Band 3 (Geometrie), Teil IIIAB12 (1922) 1–139](https://gdz.sub.uni-goettingen.de/dms/load/img/?PPN=PPN360609767&DMDID=dmdlog203)

### Splitting vertices turns Menger’s vertex theorem into a flow theorem

**Remember:** A one-unit gate lets only one path use a vertex.

*True by definition.* MSC 05C40 (Connectivity), 05C21. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Split each vertex other than s and t into an entrance and an exit, joined by an arc of capacity one, so at most one unit of flow can pass through it. Each edge from u to v becomes an arc of capacity n, the number of vertices, from u's exit to v's entrance (s and t serve as both).

**Problem.** Take distinct vertices s and t in a finite directed graph with no edge from s to t. The minimum number of internal vertices blocking all directed s-to-t paths equals the maximum number of such paths sharing only their ends.

**How the definition helps.** A gate of capacity one lets only one path through each vertex, so an integral flow is a family of internally disjoint paths (our own reduction). Cutting every gate costs less than n, so a minimum cut uses only gates and these form a blocking vertex set (our own argument). Integral max-flow min-cut then equates the two counts (our own account).

**Wikipedia:** [Menger's theorem](https://en.wikipedia.org/wiki/Menger%27s_theorem). It says: “equal to the maximum number of pairwise internally disjoint paths from x to y.”

**Sources:** none listed. No primary source with a working link was found.

### The two Menger theorems put vertex connectivity below edge connectivity

**Remember:** Paths that share no internal vertices share no edges either.

*True by definition.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Vertex connectivity is the minimum, over pairs of distinct vertices, of the largest number of paths joining the pair that share only their ends. Edge connectivity is the same with paths that share no edge.

**Problem.** For a finite connected simple graph with at least two vertices, vertex connectivity is at most edge connectivity. Edge connectivity is at most the smallest vertex degree.

**How the definition helps.** Paths that share only their ends share no edge either, so for each pair the first count is at most the second (our own comparison). Edge-disjoint paths leave a vertex by different edges, so there are at most as many as its degree (our own argument). The global forms of Menger's theorem match these counts with the usual deletion definitions (our own account).

**Wikipedia:** [Connectivity (graph theory)](https://en.wikipedia.org/wiki/Connectivity_%28graph_theory%29). It says: “The edge-connectivity for a graph with at least 2 vertices is less than or equal to the minimum degree of the graph”

**Sources:** none listed. No primary source with a working link was found.

### Two internally disjoint paths put a pair on a cycle

**Remember:** Two routes with no common middle make one cycle.

*True by definition.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is 2-connected if it has at least three vertices and every pair of vertices is joined by two paths that share only their endpoints.

**Problem.** A finite connected simple graph with at least three vertices is 2-connected exactly when every pair lies on a common cycle.

**How the definition helps.** Two such paths together form a cycle through the pair, and any cycle through the pair splits into two such paths (our own explanation). Menger's theorem shows that this path form agrees with the usual form, where deleting any one vertex leaves the graph connected (our own account).

**Wikipedia:** [Connectivity (graph theory)](https://en.wikipedia.org/wiki/Connectivity_%28graph_theory%29). It says: “for every set of k vertices in the graph there is a cycle that passes through all the vertices in the set.”

**Sources:** none listed. No primary source with a working link was found.

### Unit capacities turn edge Menger into max-flow min-cut

**Remember:** One unit per edge buys one route per edge.

*True by definition.* MSC 05C40 (Connectivity), 05C21. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Replace each edge of the undirected graph by two opposite arcs of capacity one, and cancel any flow that runs both ways along an edge. Then each edge carries at most one unit, so an integral flow is a set of edge-disjoint paths and a cut counts edges.

**Problem.** Between any two distinct vertices in a finite undirected graph, the largest number of edge-disjoint paths equals the fewest edge deletions that separate them.

**How the definition helps.** The integral max-flow min-cut theorem equates the largest flow with the smallest cut. With unit capacities, the flow value counts edge-disjoint paths and the cut value counts edges (our own explanation). Cancelling two-way flow and splitting the flow into paths gives undirected paths.

**Wikipedia:** [Max-flow min-cut theorem](https://en.wikipedia.org/wiki/Max-flow_min-cut_theorem). It says: “the maximum number of edge-disjoint s-t paths in an undirected graph is equal to the minimum number of edges in an s-t cut-set.”

**Sources:** none listed. No primary source with a working link was found.

### Hamiltonian closure makes the degree criteria immediate

**Remember:** Join any pair whose degrees sum to n; Hamiltonicity never changes.

*True by definition.* MSC 05C45 (Eulerian and Hamiltonian graphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The Hamiltonian closure of a simple graph on n vertices comes from repeatedly joining two nonadjacent vertices whose current degrees sum to at least n, until no such pair remains.

**Problem.** A finite simple graph on n ≥ 3 vertices has a cycle through every vertex if every nonadjacent pair has degree sum at least n. In particular, minimum degree at least n⁄2 suffices.

**How the definition helps.** If every nonadjacent pair already has degree sum at least n, the closure is the complete graph, which has a Hamiltonian cycle for n ≥ 3 (our own deduction). The Bondy–Chvátal theorem says a graph is Hamiltonian exactly when its closure is. Minimum degree at least n⁄2 makes every degree sum at least n.

**Wikipedia:** [Hamiltonian path](https://en.wikipedia.org/wiki/Hamiltonian_path). It says: “A graph is Hamiltonian if and only if its closure is Hamiltonian.”

**Paper or page:** [Ore's Theorem](https://proofwiki.org/wiki/Ore's_Theorem), [Dirac's Theorem](https://proofwiki.org/wiki/Dirac's_Theorem). It says: “Then G is Hamiltonian.”

**Sources:**

- [J. A. Bondy and V. Chvátal, A method in graph theory (1976)](https://doi.org/10.1016/0012-365X(76)90078-9)

### An incidence factor makes the graph Laplacian positive semidefinite

**Remember:** The Laplacian’s quadratic form is a sum of squares.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The Laplacian of a finite simple undirected graph is L = BBᵀ, where B is the incidence matrix of any orientation: one column per edge, with +1 at one end and −1 at the other. So xᵀLx is the squared length of Bᵀx, whose entries are the differences of x across the edges.

**Problem.** The real symmetric matrix L is positive semidefinite, meaning xᵀLx ≥ 0 for every real vector x. This quadratic form is the sum of (xᵤ − xᵥ)² over the edges uv.

**How the definition helps.** A squared length is never negative, so L is positive semidefinite (our own). Each entry of Bᵀx is xᵤ − xᵥ for one edge uv, which gives the sum of squares (our own). Multiplying out BBᵀ recovers the usual degree-minus-adjacency matrix (our own).

**Wikipedia:** [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix). It says: “Even though the edges in this definition are technically directed, their directions can be arbitrary, still resulting in the same symmetric Laplacian \|v\| × \|v\| matrix L defined as L = BBᵀ”

**Sources:** none listed. No primary source with a working link was found.

### An incidence factor makes the Laplacian kernel count components

**Remember:** Zero Laplacian energy forces equal values along each edge.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C40. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The Laplacian of a finite simple undirected graph is L = BBᵀ, where B is the incidence matrix of any orientation: one column per edge, with +1 at one end and −1 at the other. So xᵀLx is the sum of (xᵤ − xᵥ)² over the edges uv.

**Problem.** The real kernel of the Laplacian has dimension equal to the number of connected components.

**How the definition helps.** If Lx = 0 then xᵀLx = 0, so every edge difference vanishes and x is constant on each connected component (our own proof). Conversely, every such vector is in the kernel, with one free value per component.

**Wikipedia:** [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix). It says: “The number of connected components in the graph is the dimension of the nullspace of the Laplacian and the algebraic multiplicity of the 0 eigenvalue.”

**Sources:** none listed. No primary source with a working link was found.

### An incidence matrix turns Kirchhoff’s determinant into a tree count

**Remember:** One squared determinant counts one tree or nothing.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The reduced incidence matrix B has one column per edge, with −1 at its tail and +1 at its head, and leaves out the row of one chosen vertex. Any n − 1 of its columns have determinant ±1 if those edges form a spanning tree, and 0 otherwise (our own).

**Problem.** For a finite simple graph with n ≥ 2 vertices, det(BBᵀ) counts the trees that contain every vertex and use only graph edges.

**How the definition helps.** Cauchy–Binet writes det(BBᵀ) as the sum of the squared determinants of all choices of n − 1 columns, so each spanning tree adds 1 and every other choice adds 0 (our own proof). A choice with a cycle has dependent columns. A spanning tree gives ±1 by expanding along a leaf that is not the deleted vertex.

**Wikipedia:** [Kirchhoff's theorem](https://en.wikipedia.org/wiki/Kirchhoff%27s_theorem). It says: “the Laplacian L can be factored into the product of the incidence matrix and its transpose”

**Sources:** none listed. No primary source with a working link was found.

### Excluding trivial cases makes strongly regular graphs those with three eigenvalues

**Remember:** Count common neighbours separately for adjacent pairs and nonadjacent pairs.

*Rules out counterexamples. Confidence: medium.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C75. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite simple graph is strongly regular if it is regular and two distinct vertices have exactly λ common neighbours if adjacent and exactly μ if not.

**Problem.** A connected regular graph that is not complete is strongly regular exactly when its adjacency matrix has exactly three distinct eigenvalues.

**How the definition helps.** The two counts say A² = kI + λA + μ(J − I − A), where J is the all-ones matrix, so A has at most two eigenvalues on vectors orthogonal to the constants (our own). Connectedness and noncompleteness give exactly two there besides k, and conversely two such eigenvalues a, b make (A − aI)(A − bI) a multiple of J. Without these exclusions, two disjoint triangles meet the counts with μ = 0 but have only two eigenvalues (our own example).

**Wikipedia:** [Strongly regular graph](https://en.wikipedia.org/wiki/Strongly_regular_graph). It says: “By convention, graphs which satisfy the definition trivially are excluded from detailed studies and lists of strongly regular graphs.”

**Sources:**

- [R. C. Bose, Strongly regular graphs, partial geometries and partially balanced designs, Pacific Journal of Mathematics 13 (1963) 389–419](https://doi.org/10.2140/pjm.1963.13.389)

### Transpose maps make the cut space orthogonal to the cycle space

**Remember:** Cycles are the kernel; cuts are the image of the transpose.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C38. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Over the two-element field, the boundary matrix B sends each edge to the sum of its two endpoints, and its transpose sends a vertex set to the edges with exactly one end in it (our own). The cycle space is the kernel of B, and the cut space is the image of Bᵀ.

**Problem.** The cut and cycle spaces are orthogonal complements. An edge set lies in either space exactly when it meets every set in the other space in an even number of edges.

**How the definition helps.** Over any field, the kernel of B is the orthogonal complement of the image of Bᵀ, so the result is linear algebra (our own). The dot product of two edge sets counts their common edges modulo 2.

**Wikipedia:** [Cycle space](https://en.wikipedia.org/wiki/Cycle_space). It says: “the cycle space and the cut space of the graph (the family of edge sets that span the cuts of the graph) are the orthogonal complements of each other within the edge space.”

**Sources:** none listed. No primary source with a working link was found.

### Colourings as maps to complete graphs make the Gallai–Roy theorem a composition

**Remember:** A colouring is a map to a complete graph.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 05C15, 05C20. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A k-colouring of a graph is a homomorphism to Kₖ, the complete graph on k vertices: a vertex map that sends every edge to an edge, so adjacent vertices get different colours.

**Problem.** A graph is k-colourable exactly when some orientation of it has no directed path with k + 1 vertices. This is the Gallai–Hasse–Roy–Vitaver theorem.

**How the definition helps.** Orient each edge from the smaller colour to the larger, so every directed path climbs through distinct colours and has at most k vertices (our own argument). Conversely, the Gallai–Hasse–Roy–Vitaver theorem says every orientation has a directed path with at least as many vertices as the chromatic number, so a bound of k forces a map to Kₖ.

**Wikipedia:** [Graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism). It says: “The k-colorings of G correspond exactly to homomorphisms from G to the complete graph Kₖ.”

**Sources:**

- [P. Hell and J. Nešetřil, Graphs and Homomorphisms, Oxford University Press (2004)](https://doi.org/10.1093/acprof:oso/9780198528173.001.0001)

### The extension property makes the countable random graph unique

**Remember:** Every finite wish for neighbours is granted, so the graph is unique.

*Makes the theorem clean to state or prove.* MSC 05C63 (Infinite graphs), 03C15, 05C80. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** A countable graph has the extension property if, for any two disjoint finite vertex sets U and V, some other vertex is joined to all of U and to none of V. The Rado graph is the countable graph with this property.

**Problem.** Join every pair in a countably infinite vertex set independently with the same probability p, where 0 &lt; p &lt; 1. With probability one the graph is isomorphic to the Rado graph.

**How the definition helps.** The random graph has the extension property almost surely, since each of the countably many requests is met by infinitely many independent outside vertices with the same positive probability (our own). A back-and-forth argument, using the property alternately in each graph, shows any two countable graphs with it are isomorphic.

**Wikipedia:** [Rado graph](https://en.wikipedia.org/wiki/Rado_graph). It says: “The Rado graph is uniquely defined, among countable graphs, by an extension property that guarantees the correctness of this algorithm”

**Sources:**

- [P. Erdős and A. Rényi, Asymmetric graphs, Acta Mathematica Academiae Scientiarum Hungaricae 14 (1963) 295–315](https://doi.org/10.1007/BF01895716)
- [R. Rado, Universal graphs and universal functions, Acta Arithmetica 9 (1964) 331–340](https://doi.org/10.4064/aa-9-4-331-340)

### Bridgeless cubic graphs have perfect matchings by counting odd cuts

**Remember:** An odd component needs at least three edges out, not just one.

*Rules out counterexamples.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C40. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A cubic graph, with every vertex of degree three, is bridgeless if deleting no single edge disconnects its component. So no vertex set is joined to the rest of its component by exactly one edge.

**Problem.** Every finite bridgeless cubic graph has a perfect matching, which matches every vertex exactly once.

**How the definition helps.** Delete a vertex set S and take an odd component C of what remains: 3\|C\| is odd, so an odd number of edges join C to S, and bridgelessness makes it at least three (our own count). S sends out at most 3\|S\| edges, so there are at most \|S\| odd components. Tutte's matching theorem then gives a perfect matching.

**Wikipedia:** [Petersen's theorem](https://en.wikipedia.org/wiki/Petersen%27s_theorem). It says: “Every cubic, bridgeless graph contains a perfect matching.”

**Sources:**

- [Julius Petersen, Die Theorie der regulären graphs (1891)](https://doi.org/10.1007/BF02392606)

### Cut capacities give Hall’s theorem and the exact matching size

**Remember:** Deficiency counts the largest shortfall of neighbours across all left subsets.

*Makes the theorem clean to state or prove.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C21. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The left deficiency d of a bipartite graph is the largest shortfall \|S\| − \|N(S)\| over all sets S of left vertices, where N(S) is the set of their neighbours. The empty set gives 0, so d ≥ 0.

**Problem.** In a finite bipartite graph with m left vertices, the largest matching, a set of edges with no shared endpoints, has m − d edges. It covers every left vertex exactly when d = 0.

**How the definition helps.** A set S with shortfall d leaves at least d of its vertices unmatched, so no matching has more than m − d edges. In our own flow proof, give source and sink arcs capacity one and middle edges capacity m + 1, so the cheapest cut with left set S on the source side costs m − \|S\| + \|N(S)\|. Integral max-flow min-cut gives a matching of size m − d.

**Wikipedia:** [Hall's marriage theorem](https://en.wikipedia.org/wiki/Hall%27s_marriage_theorem). It says: “The max-flow min-cut theorem”

**Paper or page:** [Hall's Marriage Theorem/Finite Set](https://proofwiki.org/wiki/Hall's_Marriage_Theorem/Finite_Set). It says: “There exists an injection f: I → Y such that”

**Sources:**

- [Philip Hall, On Representatives of Subsets (1935)](https://doi.org/10.1112/jlms/s1-10.37.26)

### Domino tilings as perfect matchings make Hall's theorem decide tileability

**Remember:** Each domino is one edge between a black and a white square.

*True by definition. Confidence: medium.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05B45. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Make a graph whose vertices are the squares, joining two squares that share a side, so every edge joins a black square to a white one. A domino tiling is then a perfect matching, a set of edges covering every square exactly once.

**Problem.** Color a finite region of squares like a chessboard, with equally many black and white squares. The region has a domino tiling exactly when every set of black squares has at least as many white neighbors.

**How the definition helps.** A domino covers two adjacent squares, so a tiling is exactly a perfect matching of this bipartite graph (our own application). Hall's theorem gives a matching covering all black squares exactly under the neighbour condition. Equal colour counts make that matching cover all white squares too.

**Wikipedia:** [Domino tiling](https://en.wikipedia.org/wiki/Domino_tiling). It says: “Equivalently, it is a perfect matching in the grid graph formed by placing a vertex at the center of each square of the region”

**Sources:** none listed. No primary source with a working link was found.

### Splitting heads and tails gives the even regular factorization

**Remember:** Matching head copies and tail copies gives one arrival and one departure.

*True by definition.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C45. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Orient a 2k-regular graph along an Euler circuit of each component, so every vertex has k arrivals and k departures. Split each vertex into a tail copy and a head copy, and turn each arrow from u to v into an edge from u's tail copy to v's head copy.

**Problem.** The edges of a finite 2k-regular simple graph, for k ≥ 1, partition into k spanning subgraphs of degree two.

**How the definition helps.** The split graph is k-regular and bipartite, and a perfect matching of it picks one departure and one arrival at each vertex, which is a spanning subgraph of degree two (our own proof). Kőnig's edge-colouring theorem splits it into k perfect matchings.

**Wikipedia:** [2-factor theorem](https://en.wikipedia.org/wiki/2-factor_theorem). It says: “the edges of G can be partitioned into k edge-disjoint 2-factors.”

**Sources:**

- [Julius Petersen, Die Theorie der regulären graphs (1891)](https://doi.org/10.1007/BF02392606)

### Allowing parallel edges makes deletion and contraction count spanning trees exactly

**Remember:** Contract but keep every parallel edge, and tree counts add up.

*Makes the theorem clean to state or prove.* MSC 05C76 (Graph operations (line graphs, products, etc.)), 05C05, 05C31. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Contracting an edge merges its two ends into one vertex and keeps every other edge, even when this creates parallel edges or loops. So we work with multigraphs, which allow both.

**Problem.** The number of spanning trees satisfies t(G) = t(G minus e) + t(G contract e) for any edge e that is not a loop. The Tutte polynomial and the chromatic polynomial satisfy similar recursions.

**How the definition helps.** Spanning trees that avoid e are the spanning trees of G minus e, and those that use e match the spanning trees of G contract e, because each other edge keeps its identity. For a triangle, deletion leaves one tree and contraction leaves two parallel edges, which give the other two trees (our own example).

**Wikipedia:** [Edge contraction](https://en.wikipedia.org/wiki/Edge_contraction), [Deletion–contraction formula](https://en.wikipedia.org/wiki/Deletion%E2%80%93contraction_formula), [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “As defined below, an edge contraction operation may result in a graph with multiple edges even if the original graph was a simple graph.”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)
- [W. T. Tutte, Graph-polynomials, Advances in Applied Mathematics 32 (2004) 5–9](https://doi.org/10.1016/S0196-8858(03)00041-1)

### Subtracting one from the largest bag gives trees treewidth one

**Remember:** Minus one, so trees score one and forests stay at one.

*True by definition.* MSC 05C83 (Graph minors), 05C75. arXiv math.CO, cs.DM. Level 2: later undergraduate.

**Definition.** A tree decomposition assigns vertex sets called bags to the nodes of a tree. Each graph vertex appears in a nonempty connected subtree of bags, and some bag contains both endpoints of each edge. Treewidth is the minimum, over decompositions, of the largest bag size minus one.

**Problem.** A finite simple graph with at least one edge has treewidth 1 exactly when it is a forest.

**How the definition helps.** A forest has a decomposition of width one (our own construction). Give each vertex of a rooted forest a bag with itself and its parent, link bags along edges, and join the root bags into a tree. Conversely, a graph of treewidth one has a vertex of degree at most one, found in a leaf bag, so deleting it and inducting shows the graph is a forest.

**Wikipedia:** [Treewidth](https://en.wikipedia.org/wiki/Treewidth), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “In this definition, the size of the largest set is diminished by one in order to make the treewidth of a tree equal to one.”

**Sources:**

- [N. Robertson and P. D. Seymour, Graph minors. III. Planar tree-width, Journal of Combinatorial Theory, Series B 36 (1984) 49–64](https://doi.org/10.1016/0095-8956(84)90013-3)
- [R. Halin, S-functions for graphs, Journal of Geometry 8 (1976) 171–186](https://doi.org/10.1007/BF01917434)

### Minimal time windows answer reachability

**Remember:** Store only the tightest windows; any wider window inherits their routes.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 68R10. arXiv cs.DS, cs.DM. Level 2: later undergraduate.

**Definition.** A temporal route uses timed contacts in increasing time order, and its window runs from departure to arrival. For each ordered pair of vertices, keep only the minimal windows, the route windows that contain no strictly smaller route window for that pair.

**Problem.** For distinct source and target vertices, a route fits inside a query window exactly when that window contains a stored minimal window for the pair.

**How the definition helps.** A route inside a smaller window is also inside any larger window. Conversely, a route inside the query window has its own window inside it, and that contains a minimal one because there are finitely many contacts (our own converse).

**Paper or page:** [A Dynamic Data Structure for Temporal Reachability with Unsorted Contact Insertions](https://arxiv.org/abs/2102.04187v2). It says: “If u can reach v within ℐ₁, then u can reach v within ℐ₂.”

**Sources:**

- [A Dynamic Data Structure for Temporal Reachability with Unsorted Contact Insertions](https://arxiv.org/abs/2102.04187v2)

### Negative cycles prevent cheapest walks

**Remember:** Each extra lap of a negative cycle makes the walk cheaper.

*Rules out counterexamples.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 05C12. arXiv cs.DS, cs.DM. Level 2: later undergraduate.

**Definition.** The distance from s to t is the infimum of the costs of all walks from s to t, which may repeat vertices, or infinity if no walk exists. A cheapest walk is one whose cost equals this infimum.

**Problem.** For a reachable target in a finite directed graph, a cheapest walk exists exactly when no negative cycle lies on a source-to-target walk.

**How the definition helps.** If a negative cycle lies on a walk from s to t, one more lap around it lowers the cost, so no walk is cheapest (our own counterexample). Otherwise deleting a cycle from a walk never raises its cost, so the cheapest of the finitely many simple paths is a cheapest walk (our own proof).

**Wikipedia:** [Bellman–Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm). It says: “any path that has a point on the negative cycle can be made cheaper by one more walk around the negative cycle.”

**Sources:** none listed. No primary source with a working link was found.

### Restricted paths give Floyd’s recurrence

**Remember:** Allow one more interior vertex and compare routes with and without it.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 68W05. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Number the vertices of a finite directed graph with real edge weights and no negative cycles. For each pair and index k, take the minimum cost of walks whose interior vertices all have numbers at most k. Allow an empty walk at each vertex and use infinity when no walk exists.

**Problem.** When the next vertex becomes available, the new distance equals the smaller of two costs. These are the old distance and the sum of the two old distances through that vertex.

**How the definition helps.** A cheapest walk allowed once vertex k is available either avoids k inside it or passes through k (our own proof). With no negative cycles it can be taken as a path, which meets k once and splits there into two walks allowed before. Conversely, joining two such walks at k gives an allowed walk.

**Wikipedia:** [Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm). It says: “using vertices only from the set {1,2,…,k} as intermediate points along the way.”

**Sources:**

- [Robert W. Floyd, Algorithm 97: Shortest Path (1962)](https://doi.org/10.1145/367766.368168)

### Tour minima find common ancestors

**Remember:** Between two visits, the shallowest vertex is their lowest common ancestor.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 68W05. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Walk a rooted tree from the root, returning along each edge after visiting its descendants. Record the vertex and its depth at every visit. Use the first recorded visit to represent each queried vertex.

**Problem.** The lowest common ancestor, the deepest ancestor of both queried vertices, is the shallowest vertex between their first visits, including the endpoints. Count each vertex as its own ancestor.

**How the definition helps.** Between the first visits to the two queried vertices, the tour stays inside the subtree of their lowest common ancestor and passes through that ancestor, or starts there (our own proof). So a lowest common ancestor query becomes a search for the minimum depth in an interval.

**Wikipedia:** [Lowest common ancestor](https://en.wikipedia.org/wiki/Lowest_common_ancestor). It says: “a lowest common ancestor query can then be transformed into a query that seeks the minimum value occurring within some subinterval of this sequence of numbers.”

**Sources:**

- [Michael A. Bender and Martin Farach-Colton, The LCA Problem Revisited (2000)](https://doi.org/10.1007/10719839_9)

### A bounded set size rules out nested sunflower counterexamples

**Remember:** Bounded set size stops endless nested chains, which grow no sunflowers.

*Rules out counterexamples.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A sunflower consists of distinct sets whose pairwise intersections are all the same set, called the core. A family of rank at most k has no set larger than k.

**Problem.** Take integers k ≥ 0 and r ≥ 3. A family of rank at most k with more than k!(r−1)ᵏ distinct sets contains a sunflower with r members.

**How the definition helps.** The rank bound excludes long nested chains, which contain no three-set sunflower (our own example). Pad each set to exactly k points with new private points, which keeps intersections; a maximal disjoint subfamily then gives r petals, or at most k(r − 1) points meet every set (our own reduction). So some point lies in more than (k − 1)!(r − 1)ᵏ⁻¹ sets, and removing it gives induction on k.

**Wikipedia:** [Sunflower (mathematics)](https://en.wikipedia.org/wiki/Sunflower_%28mathematics%29). It says: “the pairwise intersections must be the exact same set, not just the same size.”

**Sources:** none listed. No primary source with a working link was found.

### A uniform random chain turns the LYM inequality into an expectation

**Remember:** A random chain can hit an antichain at most once.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Shuffle the n points uniformly at random; the empty set and the successive initial segments of the shuffle form a random chain. The Lubell mass of a family is the expected number of its members on this chain.

**Problem.** An antichain is a family in which no distinct member contains another. For an antichain of subsets of n points, summing 1/(n choose \|A\|) over its members A gives at most one.

**How the definition helps.** An antichain meets a chain at most once, so its Lubell mass is at most one (our own). A set A lies on the chain exactly when its points come first, which has probability 1/(n choose \|A\|), so linearity of expectation gives the sum (our own).

**Wikipedia:** [Lubell–Yamamoto–Meshalkin inequality](https://en.wikipedia.org/wiki/Lubell%E2%80%93Yamamoto%E2%80%93Meshalkin_inequality). It says: “Since this number is at most the total number of all permutations,”

**Paper or page:** [A Relationship for LYM Inequalities between Boolean Lattices and Linear Lattices with Applications](https://arxiv.org/abs/2403.04817v1). It says: “If $\\mathcal{F} \\subseteq 2<sup>\[n\]</sup>$ is an antichain, then\\\[ l(\\mathcal{F}) = \\sum \_{F \\in \\mathcal{F}}\\frac{1}{{{n} \\choose {\|F\|}}} \\leq 1. \\\]”

**Sources:**

- [D. Lubell, A short proof of Sperner’s lemma (1966)](https://sites.math.rutgers.edu/~zeilberg/akherim/lubell1966.pdf)

### Circular intervals reduce the Erdős–Ko–Rado bound to local pairs

**Remember:** On a circle, pairwise-meeting intervals of length k number at most k.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Fix a cyclic order of the n points; a k-interval is a run of k consecutive points, wrapping past the end. When n ≥ 2k, an intersecting family, one with no two disjoint sets, contains at most k of the n intervals (our own).

**Problem.** Suppose n ≥ 2k and k ≥ 1. Among intersecting families of k-element sets on n points, a star attains the maximum size (n−1 choose k−1).

**How the definition helps.** Given one interval in the family, the other intervals that meet it fall into k − 1 pairs of disjoint intervals, so at most k intervals are in the family (our own argument). Averaging over random cyclic orders, each k-set is an interval with probability n/(n choose k), so the family has at most (n−1 choose k−1) members. A star, all k-sets through one point, attains this.

**Wikipedia:** [Erdős–Ko–Rado theorem](https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Ko%E2%80%93Rado_theorem). It says: “The two intervals that separate these elements are disjoint”

**Sources:**

- [G. O. H. Katona, A simple proof of the Erdős–Chao Ko–Rado theorem (1972)](https://real.mtak.hu/21117/1/paper_20.pdf)

### Precedence events give Bollobás’s set pair inequality

**Remember:** Cross intersections make two precedence events impossible together.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A Bollobás system is a finite list of pairs of finite sets (Aᵢ, Bᵢ) with Aᵢ ∩ Bⱼ empty exactly when i = j. Under a uniformly random order of all points, event i says that every element of Aᵢ comes before every element of Bᵢ, and no two such events can happen together.

**Problem.** For a finite Bollobás system, the sum of 1/(\|A\| + \|B\| choose \|A\|) over its pairs is at most one.

**How the definition helps.** The events are disjoint, so their probabilities sum to at most one (our own proof). For i ≠ j, pick x in Aᵢ ∩ Bⱼ and y in Aⱼ ∩ Bᵢ: event i puts x before y and event j puts y before x. Event i has probability 1/(\|Aᵢ\| + \|Bᵢ\| choose \|Aᵢ\|), since all placements of Aᵢ within Aᵢ ∪ Bᵢ are equally likely.

**Paper or page:** [Some new Bollobás-type inequalities](https://arxiv.org/abs/2405.17639v2). It says: “\\sum <sub>i=1</sub><sup>m\\frac{1}{\\binom</sup> {\|A<sub>i</sub>\|+\|B<sub>i</sub>\|}{\|A<sub>i</sub>\|}}\\leqslant 1.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric chains give the largest family avoiding a long chain

**Remember:** Symmetric chains are centred, so middle layers catch the most of each.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A symmetric chain decomposition splits all subsets of n points into chains of nested sets, each with one set of every size from a to n − a for some a. So every chain is centred on the middle sizes near n/2.

**Problem.** For 1 ≤ k ≤ n + 1, the k consecutive middle layers form a largest family without k + 1 strictly nested sets. Either central choice works in a tie.

**How the definition helps.** A family with no k + 1 nested sets meets each chain in at most k sets, or the whole chain if it is shorter (our own). The k middle layers meet every centred chain in exactly that many sets and contain no k + 1 nested sets. The symmetric chain decomposition theorem supplies the partition (our own argument).

**Wikipedia:** [Sperner's theorem](https://en.wikipedia.org/wiki/Sperner%27s_theorem). It says: “the largest size of an r-chain-free family is the sum of the r largest binomial coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Weights from random maximal chains give Sperner’s bound

**Remember:** A chain can hit an antichain only once.

*True by definition.* MSC 05D05 (Extremal set theory), 06A06. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Order the n elements uniformly at random; the first k elements, for each k from 0 to n, form a random chain of nested subsets. The weight of a subset is the chance that it lies on this chain, which is 1/(n choose k) for a k-set by symmetry (our own).

**Problem.** Among families of subsets of an n-element set with no member strictly containing another, the largest has as many members as the middle layer. That layer consists of all subsets of size ⌊n ∕ 2⌋.

**How the definition helps.** A chain meets the family at most once, so the family's weights sum to at most one. Middle-layer sets have the smallest weight, so the family has at most as many members as the middle layer, which itself attains the bound.

**Wikipedia:** [Lubell–Yamamoto–Meshalkin inequality](https://en.wikipedia.org/wiki/Lubell%E2%80%93Yamamoto%E2%80%93Meshalkin_inequality). It says: “Each permutation may only be associated with a single set in A”

**Sources:** none listed. No primary source with a working link was found.

### Color complements expose a parity improvement for Ramsey numbers

**Remember:** An odd number of vertices cannot all have odd red degree.

*True by definition.* MSC 05D10 (Ramsey theory), 05C55. arXiv math.CO. Level 2: later undergraduate.

**Definition.** R(r, s) is the least n such that every red-blue colouring of the edges of the complete graph on n vertices has a red r-clique or a blue s-clique. So in a colouring with neither, each vertex has fewer than R(r − 1, s) red neighbours and fewer than R(r, s − 1) blue neighbours (our own).

**Problem.** For r,s ≥ 2, put a = R(r − 1,s) and b = R(r,s − 1). If a and b are even, then R(r,s) ≤ a + b − 1.

**How the definition helps.** On a + b − 1 vertices with neither clique, each vertex has red degree at most a − 1 and blue degree at most b − 1, and these sum to its degree a + b − 2, so both bounds are attained (our own argument). Then every red degree is the odd number a − 1 on an odd number of vertices, which contradicts the even degree sum.

**Wikipedia:** [Ramsey's theorem](https://en.wikipedia.org/wiki/Ramsey%27s_theorem). It says: “are both even, the induction inequality can be strengthened to”

**Sources:** none listed. No primary source with a working link was found.

### One color per earlier vertex gives a monochromatic clique

**Remember:** Choose vertices with one forward color, then keep a single color.

*True by definition.* MSC 05D10 (Ramsey theory), 05C55. arXiv math.CO. Level 2: later undergraduate.

**Definition.** An ordered list of vertices is end-homogeneous if, for each vertex, all edges to later vertices have one colour, which is assigned to that vertex; the last vertex gets any colour. Then vertices with the same assigned colour are joined entirely in that colour.

**Problem.** For positive integers q and k, every sufficiently large complete graph with edges in q colors has k vertices joined entirely in one color. A countably infinite complete graph with finitely many edge colors has an infinite such set.

**How the definition helps.** Build the list by choosing a vertex and keeping the largest group of remaining vertices joined to it in one colour (our own proof). A list of q(k − 1) + 1 vertices has k with the same assigned colour, and these form the clique. From infinitely many vertices some group stays infinite each time, and some colour is assigned infinitely often.

**Paper or page:** [Ramsey's Theorem](https://proofwiki.org/wiki/Ramsey's_Theorem), [Infinite Ramsey's Theorem](https://proofwiki.org/wiki/Infinite_Ramsey's_Theorem). It says: “In any coloring of the edges of a sufficiently large complete graph, one will find monochromatic complete subgraphs.”

**Sources:**

- [Frank P. Ramsey, On a Problem of Formal Logic (1930)](https://doi.org/10.1112/plms/s2-30.1.264)

### The infinite Hall theorem needs every set to be finite

**Remember:** Infinitely many boys is fine if each knows finitely many girls.

*Rules out counterexamples.* MSC 05D15 (Transversal (matching) theory), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A system of distinct representatives of a family (Aᵢ) picks a different element f(i) ∈ Aᵢ for each index i. The marriage condition says that the union of the sets over any finite set J of indices has at least \|J\| elements.

**Problem.** A family of finite sets, of any size, has a system of distinct representatives exactly when it satisfies the marriage condition.

**How the definition helps.** When every set is finite, compactness passes from finite subfamilies, which the finite Hall theorem solves, to the whole family (our own argument). Without finiteness, take the singletons {n} for all n ≥ 0 and the set of all nonnegative integers. Every finite subfamily meets the condition, but the singletons use up every representative (our own example).

**Wikipedia:** [Hall's marriage theorem](https://en.wikipedia.org/wiki/Hall%27s_marriage_theorem). It says: “Suppose that F = {Aᵢ}ᵢ∈I, is a (possibly infinite) family of finite sets that need not be distinct, then F has a transversal if and only if F satisfies the marriage condition.”

**Sources:**

- [Philip Hall, On representatives of subsets, Journal of the London Mathematical Society 10 (1935) 26–30](https://doi.org/10.1112/jlms/s1-10.37.26)
- [M. Hall Jr., Distinct representatives of subsets, Bulletin of the American Mathematical Society 54 (1948) 922–926](https://doi.org/10.1090/S0002-9904-1948-09098-X)

### Random circle multiplication finds a large sum free subset

**Remember:** Two points in the middle third add outside it.

*True by definition.* MSC 05D40 (Probabilistic methods in extremal combinatorics, including polynomial methods (combinatorial Nullstellensatz, etc.)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a real number x, keep each integer a whose multiple ax has fractional part strictly between 1/3 and 2/3. Two kept fractional parts add to a number strictly between 2/3 and 4/3, outside the middle third modulo one, so the kept integers are sum-free (our own).

**Problem.** Every finite set of N positive integers has a sum-free subset of size at least N/3. In a sum-free set, x + y = z has no solution even if x = y.

**How the definition helps.** Each kept set is sum-free because the middle third is not closed under addition modulo one (our own). For x uniform in \[0, 1), the fractional part of ax is uniform for each positive integer a, so on average N/3 integers are kept. Some choice of x therefore keeps at least N/3.

**Paper or page:** [The largest (k, ℓ)-sum-free subsets](https://arxiv.org/abs/2001.05632v3). It says: “$A$ contains a $(k,\\ell )$-sum-free subsets of size at least $\\frac{1}{k+\\ell }N$.”

**Sources:**

- [P. Erdős, Extremal problems in number theory (1965)](https://renyi.hu/~p_erdos/1965-02.pdf)

### A root product turns Newton’s identities into coefficient comparisons

**Remember:** Differentiate the product once to recover every power sum.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO, math.AC. Level 2: later undergraduate.

**Definition.** Let E(t) be the product of the factors 1 + rt over the roots r, listed with repetition, and let e(k) be its coefficient of tᵏ. Then E′(t)/E(t) is the sum of r/(1 + rt), which expands as the sum of (−1)ⁱ⁻¹ p(i) tⁱ⁻¹, where p(i) is the sum of the i-th powers of the roots.

**Problem.** For every k ≥ 1, k e(k) equals the sum of (−1)ⁱ⁻¹ p(i)e(k − i) over i from 1 to k.

**How the definition helps.** Multiply this expansion of E′/E by E and compare the coefficients of tᵏ⁻¹: the left side gives k e(k) and the right side gives the stated sum (our own proof).

**Paper or page:** [Newton-Girard Identities](https://proofwiki.org/wiki/Newton-Girard_Identities). It says: “k eₖ(X) = ∑ᵢ₌₁ᵏ (−1)ⁱ⁻¹ eₖ₋ᵢ(X) pᵢ(X)”

**Sources:** none listed. No primary source with a working link was found.

### Counting each rearranged monomial once gives a basis in every characteristic

**Remember:** Count each rearranged term once, even if several permutations give it.

*Rules out counterexamples.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO, math.AC. Level 2: later undergraduate.

**Definition.** Define a monomial symmetric polynomial as the sum of the distinct terms obtained by permuting the variables in one monomial. Do not count all permutations with repeats.

**Problem.** Over any field, taking one monomial symmetric polynomial per group of rearranged terms gives a basis of the symmetric polynomials.

**How the definition helps.** Counting distinct terms gives each term of the group coefficient one, so no group sum vanishes, even in characteristic two. Symmetry forces equal coefficients within each group, and different groups share no terms, so every symmetric polynomial expands uniquely (our own proof). Counting both permutations of x₁x₂ would give 2x₁x₂, which is 0 over the field with two elements (our own example).

**Wikipedia:** [Symmetric polynomial](https://en.wikipedia.org/wiki/Symmetric_polynomial). It says: “These monomial symmetric polynomials form a vector space basis”

**Sources:** none listed. No primary source with a working link was found.

### Elementary symmetric polynomials work over every ring, power sums need characteristic zero

**Remember:** Elementary polynomials generate over any ring; power sums need division.

*Rules out counterexamples.* MSC 05E05 (Symmetric functions and generalizations), 13F20. arXiv math.CO, math.AC. Level 2: later undergraduate.

**Definition.** The elementary symmetric polynomial eₖ is the sum of all products of k different variables, so its leading monomial x₁x₂⋯xₖ has coefficient 1. The power sum pₖ is x₁ᵏ + ⋯ + xₙᵏ.

**Problem.** Over any commutative ring, every symmetric polynomial is a polynomial in e₁, …, eₙ, in exactly one way.

**How the definition helps.** Cancel the lexicographically largest monomial with a product of elementary polynomials whose powers are the differences of successive exponents; no division is needed because each leading coefficient is 1 (our own proof). Distinct products have distinct leading monomials, which gives uniqueness. Power sums fail over ℤ: in two variables, p₁² and p₂ have even coefficient on x₁x₂, so they cannot give e₂ (our own).

**Paper or page:** [On Newton's identities in positive characteristic](https://arxiv.org/abs/2305.19850), [On Newton's identities in positive characteristic](https://arxiv.org/abs/2305.19850). It says: “Let R be a commutative ring. Then R\[e₁,…,eₙ\] ⊂ R\[x₁,…,xₙ\] is equal to the ring of symmetric polynomials over R, and the set {e₁,…,eₙ} is algebraically independent.”

**Sources:**

- [Sjoerd de Vries, On Newton's identities in positive characteristic, arXiv:2305.19850 (2023)](https://arxiv.org/abs/2305.19850)

### Permutation characters count fixed points, so Burnside's lemma counts invariants

**Remember:** A basis vector contributes to the trace exactly when g fixes it.

*True by definition.* MSC 05E18 (Group actions on combinatorial structures), 20B05. arXiv math.CO, math.RT. Level 2: later undergraduate.

**Definition.** For a finite set S with an action of G, the permutation representation ℂ\[S\] has basis S, and each g in G permutes that basis. So the trace of g counts the points of S that g fixes.

**Problem.** For a finite group G, the number of orbits on S is the average number of points fixed by a group element.

**How the definition helps.** The trace of g is its number of fixed points, since a basis vector adds one to the trace exactly when g fixes it. Averaging the operators gives the projection onto fixed vectors, which have one basis vector per orbit, so its trace is the orbit count (our own).

**nLab:** [permutation representation](https://ncatlab.org/nlab/show/permutation+representation). It says: “Here in the first step we spelled out the definition of trace in the canonical basis”

**Sources:** none listed. No primary source with a working link was found.

### Core and quotient split partitions

**Remember:** Each quotient cell records one bead move of size t.

*Makes the theorem clean to state or prove.* MSC 05A17 (Combinatorial aspects of partitions of integers), 11P84. arXiv math.CO, math.NT. Level 3: graduate.

**Definition.** Put a bead at λᵢ − i for each row i, padding with zero rows, and slide beads down in steps of t within each residue class until none has a gap below. The packed beads give the t-core, and each step removes a rim hook of t cells. Each class's step counts, in descending bead order, form its quotient partition.

**Problem.** The size of a partition is the size of its t-core plus t times the sum of the sizes of its t quotient partitions. The core and the t ordered quotient partitions determine the original partition.

**How the definition helps.** Each quotient cell records one step, and each step lowers the size by t, so the sizes add up (our own argument). Moving each packed bead back by its recorded count recovers the partition.

**Wikipedia:** [Core partition](https://en.wikipedia.org/wiki/Core_partition). It says: “We call λ⁽ᵗ⁾ the t-core of λ”

**Sources:** none listed. No primary source with a working link was found.

### Gapless log-concavity survives convolution

**Remember:** No internal zeros lets adjacent inequalities control every pair of rows.

*Rules out counterexamples.* MSC 05A20 (Combinatorial inequalities). arXiv math.CO. Level 3: graduate.

**Definition.** A sequence of nonnegative numbers is log-concave without internal zeros if aⱼ² ≥ aⱼ₋₁aⱼ₊₁ for every j and no zero lies between two positive terms. Together these say that every two-by-two minor of the matrix with entries aⱼ₋ᵢ is nonnegative (our own).

**Problem.** The product of two polynomials with such coefficients has such coefficients.

**How the definition helps.** Multiplying polynomials multiplies these matrices, and Cauchy–Binet writes each minor of the product as a sum of products of nonnegative minors (our own proof). Without the gap condition, 1 + x³ passes every adjacent test, but its product with 1 + 2x + x² fails at degree two.

**Paper or page:** [Genus Polynomials of Cubic Graphs with Non-Real Roots](https://arxiv.org/abs/2212.09971v1). It says: “If A(x) and B(x) are log-concave polynomials with non-negative coefficients and no internal zero coefficients, then so is A(x)B(x).”

**Sources:**

- [S. G. Hoggar, Chromatic polynomials and logarithmic concavity (1974)](https://doi.org/10.1016/0095-8956(74)90071-9)

### A rank formula makes matroid contractions and deletions commute

**Remember:** Subtracting ranks cancels the intermediate terms in successive contractions.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** Contracting a set T gives each set A disjoint from T the rank r(A ∪ T) − r(T). Deleting T keeps the same rank on subsets of the rest.

**Problem.** For disjoint subsets T and U, contracting both in either order equals contraction by T ∪ U. Deleting U and contracting T also commute.

**How the definition helps.** Contracting T and then U subtracts r(T) twice in opposite signs, leaving r(A ∪ U ∪ T) − r(U ∪ T), which is symmetric in T and U (our own calculation). Deleting U leaves every rank in the contraction formula unchanged for A outside T ∪ U.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “If T is a subset of E, the contraction of M by T, written M/T, is the matroid on the underlying set E − T whose rank function is r′(A) = r(A ∪ T) − r(T).”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Complements of bases make matroid duality an involution

**Remember:** Complement every basis twice to recover the original bases.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** The dual of a finite matroid on E has as bases, its maximal independent sets, the complements in E of the original bases.

**Problem.** The dual of the dual of a finite matroid is the original matroid.

**How the definition helps.** Taking complements twice returns every basis, so the double dual has the original bases (our own). The bases determine the matroid, since the independent sets are the subsets of bases. The real work is showing that the complements obey the basis exchange rule, so that the dual is a matroid.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “It is not difficult to verify that M\* is a matroid and that the dual of M\* is M.”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Convolution factors matroid characteristic polynomials

**Remember:** Inversion and rank both separate across a direct sum.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** The characteristic polynomial of a matroid sums μ(0̂, F) t<sup>(r(E) − r(F))</sup> over its flats F, the closed sets, where μ is the Möbius function of the lattice of flats and 0̂ is the least flat. In a direct sum, the flats are pairs of flats and ranks add (our own).

**Problem.** The characteristic polynomial of a direct sum of finite loopless matroids is the product of their characteristic polynomials.

**How the definition helps.** The Möbius function of a product of posets is the product of their Möbius functions (our own). Since flats of a direct sum are pairs and ranks add, each term of the sum factors, and so does the sum (our own).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “The Möbius function of the cartesian product P × Q of two posets P and Q is the product of their Möbius functions”

**Sources:**

- [Gian-Carlo Rota, On the foundations of combinatorial theory I. Theory of Möbius functions (1964)](https://doi.org/10.1007/bf00531932)

### Generic minors detect transversal independence

**Remember:** Every matching contributes its own determinant monomial.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05D15. arXiv math.CO. Level 3: graduate.

**Definition.** A set of elements of a transversal matroid is independent when its elements can be matched to distinct allowed slots. Represent it by a slot-by-element matrix with its own variable in each allowed position and zero elsewhere, so each matching gives its own monomial in the minors.

**Problem.** Over every sufficiently large field, one can choose column vectors whose linearly independent sets are exactly the matchable sets.

**How the definition helps.** Each matching contributes a distinct monomial with coefficient ±1, so a set of columns is matchable exactly when some maximal square minor on them is a nonzero polynomial (our own). Over a field larger than the total degree of the product of all nonzero minors, some evaluation keeps them all nonzero.

**Paper or page:** [A theory of q-transversals](https://arxiv.org/abs/2503.12201v1). It says: “Transversal matroids are representable over all sufficiently large fields. Thus they are representable over fields of every characteristic.”

**Sources:** none listed. No primary source with a working link was found.

### In a pregeometry, the exchange condition makes dimension well defined

**Remember:** Exchange swaps generators one for one, so all bases match in size.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 03C45. arXiv math.LO, math.CO. Level 3: graduate.

**Definition.** A pregeometry is a closure operator cl in which a ∈ cl(A) always follows from a finite part of A, and exchange holds: if a ∈ cl(A ∪ {b}) but a ∉ cl(A), then b ∈ cl(A ∪ {a}). A basis of Y is a subset of Y that spans Y and in which no element lies in the closure of the others.

**Problem.** In any pregeometry, all bases of a set have the same cardinality. So vector spaces, algebraically closed fields and strongly minimal sets all get a well-defined dimension.

**How the definition helps.** Exchange lets one swap an element of one basis for an element of another, as in linear algebra, so the basis exchange theorem gives equal cardinalities (our own explanation). Linear span, field-theoretic algebraic closure, and model-theoretic algebraic closure on a strongly minimal set all satisfy exchange.

**nLab:** [geometric stability theory](https://ncatlab.org/nlab/show/geometric+stability+theory). It says: “An independent set A said to be a basis for Y ∈ P X if Y ⊆ cl(A). All bases of Y have the same cardinality, called the dimension of Y.”

**Sources:**

- [J. T. Baldwin, A. H. Lachlan, On strongly minimal sets, Journal of Symbolic Logic 36 (1971) 79–96](https://doi.org/10.2307/2271517)

### Maximizing faces select matroid bases

**Remember:** Keep the top face and read off its bases.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A matroid's base polytope is the convex hull of the indicator vectors of its bases. Its edges are all parallel to differences eᵢ − eⱼ of coordinate vectors. This edge rule characterizes matroid base polytopes among 0/1 polytopes (our own).

**Problem.** The maximum-weight bases of any finite matroid form the bases of a matroid on the same ground set.

**How the definition helps.** The face where a linear weight is maximized has the maximum-weight bases as vertices, and its edges are edges of the base polytope (our own). So its edges follow the eᵢ − eⱼ rule, and the edge criterion makes the face the base polytope of a matroid (our own).

**Wikipedia:** [Matroid polytope](https://en.wikipedia.org/wiki/Matroid_polytope). It says: “Every edge of a matroid polytope Pₘ is a parallel translate of eᵢ−eⱼ for some i,j∈E”

**Sources:**

- [I. M. Gelfand, R. M. Goresky, R. D. MacPherson and V. V. Serganova, Combinatorial geometries, convex polyhedra, and Schubert cells (1987)](https://doi.org/10.1016/0001-8708(87)90059-4)

### Minkowski sums of generalized polymatroids are given by summing their bounds

**Remember:** Add the subset bounds to add the feasible sets.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 90C27. arXiv math.OC, math.CO. Level 3: graduate.

**Definition.** A paramodular pair is a supermodular p and a submodular b on subsets of a finite set, both zero at ∅, with b(X) − p(Y) ≥ b(X∖Y) − p(Y∖X) for all X and Y. Its generalized polymatroid is the set of vectors whose coordinate sum over each subset Z lies between p(Z) and b(Z).

**Problem.** For paramodular pairs (pⁱ, bⁱ), the Minkowski sum of their generalized polymatroids is the generalized polymatroid of (Σpⁱ, Σbⁱ).

**How the definition helps.** Adding feasible vectors adds their subset sums, so the summed bounds give one inclusion (our own explanation). Frank’s generalized polymatroid sum theorem gives the reverse inclusion by decomposing each feasible vector for the summed bounds.

**Paper or page:** [Integrating Aggregated Electric Vehicle Flexibilities in Unit Commitment Models using Submodular Optimization](https://arxiv.org/abs/2511.11191v1). It says: “In particular, g-polymatroids are stable by Minkowski sum.”

**Sources:**

- [Hélène Arvis, Olivier Beaude, Nicolas Gast, Stéphane Gaubert, Bruno Gaujal, Integrating Aggregated Electric Vehicle Flexibilities in Unit Commitment Models using Submodular Optimization, arXiv:2511.11191v1 (2025)](https://arxiv.org/abs/2511.11191v1)
- [András Frank, Generalized polymatroids (1984)](https://doi.org/10.1016/b978-0-444-86893-0.50021-8)

### Rank axioms make the contraction formula define a matroid

**Remember:** Adding T to both sets preserves the union and intersection rules for rank.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A matroid rank on finite E assigns each A ⊆ E an integer satisfying 0 ≤ r(A) ≤ \|A\|. For all subsets A,B, inclusion A ⊆ B implies r(A) ≤ r(B), and r(A ∪ B) + r(A ∩ B) ≤ r(A) + r(B).

**Problem.** Let r be a matroid rank on E and let T be a subset of E. Then r′(A) = r(A ∪ T) − r(T) is a matroid rank on E ∖ T. The new matroid is the contraction by T.

**How the definition helps.** Each rank axiom for r′ is the same axiom for r applied to sets enlarged by T (our own proof). Monotonicity gives 0 ≤ r′(A) ≤ r′(B) for A ⊆ B, and submodularity for A ∪ T and B ∪ T gives submodularity of r′. Submodularity for the disjoint sets A and T gives r′(A) ≤ r(A) ≤ \|A\|.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “If T is a subset of E, the contraction of M by T, written M/T, is the matroid on the underlying set E − T whose rank function is r′(A) = r(A ∪ T) − r(T).”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935)](https://doi.org/10.2307/2371182)

### Rank separators show that matroid duality preserves connectedness

**Remember:** The rank condition for a separator is unchanged by duality.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A separator of a finite matroid with rank r on E is a subset S satisfying r(S) + r(E ∖ S) = r(E). The matroid is connected if every separator is ∅ or E.

**Problem.** A finite nonempty matroid is connected if and only if its dual is connected. The dual has the complements of the original maximal independent sets as its maximal independent sets.

**How the definition helps.** A separator is defined by a rank equation that duality leaves unchanged. The dual rank is r\*(S) = \|S\| − r(E) + r(E ∖ S), so r\*(S) + r\*(E ∖ S) − r\*(E) equals r(S) + r(E ∖ S) − r(E) (our own substitution). So a matroid and its dual have the same separators.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “A separator of M is a subset S of E such that r(S) + r(E−S) = r(M).”

**Sources:** none listed. No primary source with a working link was found.

### Rank sums make Tutte duality a swap of variables

**Remember:** Complement each subset to swap the two exponents.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C31. arXiv math.CO. Level 3: graduate.

**Definition.** For a finite matroid on E with rank r, assign each subset S the term (x − 1)<sup>(r(E) − r(S))</sup>(y − 1)<sup>(\|S\| − r(S))</sup>. The Tutte polynomial is the sum of these terms.

**Problem.** The Tutte polynomial of the dual matroid is the original polynomial with x and y swapped. The dual matroid has the complements of the original bases as its bases.

**How the definition helps.** Matching each subset S in the dual with its complement E ∖ S swaps the two exponents (our own). This uses the dual rank r\*(S) = \|S\| − r(E) + r(E ∖ S), which gives r\*(E) − r\*(S) = \|E ∖ S\| − r(E ∖ S) and \|S\| − r\*(S) = r(E) − r(E ∖ S) (our own).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid), [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “The rank function of the dual is r\*(S) = \|S\| − r(M) + r(E∖S).”

**Sources:**

- [H. H. Crapo, The Tutte polynomial, Aequationes Mathematicae 3 (1969) 211–229](https://doi.org/10.1007/BF01817442)

### Spanning complements identify the dual of a cycle matroid

**Remember:** Edges that can be removed leave a spanning set behind.

*True by definition. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C40. arXiv math.CO. Level 3: graduate.

**Definition.** In the dual of a matroid, a set is independent exactly when its complement spans, that is, contains a basis. For the cycle matroid of a connected graph, whose independent sets are forests, an edge set spans exactly when it keeps the graph connected.

**Problem.** The bond matroid of a finite connected graph is the dual of the cycle matroid.

**How the definition helps.** So a set is independent in the dual exactly when removing it leaves the graph connected (our own). The minimal dependent sets of the dual are then the minimal disconnecting edge sets, which are the circuits of the bond matroid (our own).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “A set is independent in M\* if and only if its complement spans M.”

**Sources:** none listed. No primary source with a working link was found.

### Subset sums make the characteristic polynomial a Tutte evaluation

**Remember:** Same subsets, same ranks: only signs and variables differ.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C31. arXiv math.CO. Level 3: graduate.

**Definition.** For a finite loopless matroid on E, the characteristic polynomial sums (−1)<sup>\|S\|</sup> λ<sup>(r(E) − r(S))</sup> over all subsets S of E. It uses the same subsets and the same ranks as the subset sum for the Tutte polynomial.

**Problem.** The characteristic polynomial is T(1 − λ, 0) multiplied by (−1) to the power r(E), where T is the Tutte polynomial.

**How the definition helps.** Both polynomials are sums over the same subsets, so they can be matched term by term (our own). The Tutte term (x − 1)<sup>(r(E) − r(S))</sup> (y − 1)<sup>(\|S\| − r(S))</sup> becomes (−1)<sup>(r(E) + \|S\|)</sup> λ<sup>(r(E) − r(S))</sup> at x = 1 − λ, y = 0 (our own). The real work is to show that this subset sum agrees with the usual formula over flats, by Möbius inversion (our own).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “From this definition it is easy to see that the characteristic polynomial is, up to a simple factor, an evaluation of T<sub>M</sub>, specifically, p<sub>M</sub>(λ) = (−1)<sup>r(M)</sup> T<sub>M</sub>(1−λ,0).”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Rooted maps have no automorphisms, so they are easy to count

**Remember:** Pin down one dart, and nothing can move.

*True by definition.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C30, 05A15. arXiv math.CO. Level 3: graduate.

**Definition.** A connected map is a set of darts (half-edges) with two permutations: one turns darts around vertices, and a fixed-point-free involution pairs them into edges. Together they reach every dart from any one. A rooted map marks one dart, the root, which every automorphism must fix.

**Problem.** A rooted map has no automorphism other than the identity. So rooted maps, such as rooted triangulations of the plane, can be counted with no correction for symmetry.

**How the definition helps.** An automorphism commutes with both permutations and fixes the root, so it fixes every image of the root under them. Connectedness makes every dart such an image, so the automorphism is the identity.

**nLab:** [combinatorial map](https://ncatlab.org/nlab/show/combinatorial+map). It says: “Later I realized that the distinguishing feature and the great advantage of rooted maps is that they have no symmetry. Automorphisms seem to complicate enumerative problems.”

**Sources:**

- [W. T. Tutte, A Census of Planar Triangulations, Canadian Journal of Mathematics 14 (1962)](https://doi.org/10.4153/CJM-1962-002-9)
- [W. T. Tutte, A Census of Planar Maps, Canadian Journal of Mathematics (1963)](https://doi.org/10.4153/CJM-1963-029-x)

### Requiring perfection in every induced subgraph keeps complements perfect

**Remember:** Perfect in every induced part, so complements stay perfect too.

*Makes the theorem clean to state or prove.* MSC 05C17 (Perfect graphs). arXiv math.CO. Level 3: graduate.

**Definition.** A finite simple graph is perfect if every induced subgraph has chromatic number (fewest colours needed) equal to clique number (most pairwise adjacent vertices).

**Problem.** The complement of a perfect graph, which has an edge exactly where the graph has none, is again perfect.

**How the definition helps.** Complementation commutes with taking induced subgraphs, so the hereditary condition can be tested in the same way on both sides (our own); Lovász's perfect graph theorem proves the equivalence. The word every is needed: a disjoint triangle and five-cycle have both numbers three, but their complement has clique number three and needs four colours (our own).

**Wikipedia:** [Perfect graph](https://en.wikipedia.org/wiki/Perfect_graph). It says: “A graph is perfect when these numbers are equal, and remain equal after the deletion of arbitrary subsets of vertices.”

**Sources:**

- [L. Lovász, Normal hypergraphs and the perfect graph conjecture, Discrete Mathematics 2 (1972) 253–267](https://doi.org/10.1016/0012-365X(72)90006-4)

### Quasi-transitive orientations are enough to find transitive ones

**Remember:** Ask only that the shortcut edge exists, not which way it points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C20 (Directed graphs (digraphs), tournaments), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** An orientation of a simple graph is quasi-transitive if every directed path a→b→c has an edge between a and c, in either direction. It is transitive if that edge always points from a to c.

**Problem.** Ghouila-Houri's theorem says that a graph has a quasi-transitive orientation exactly when it has a transitive orientation.

**How the definition helps.** Both conditions test the same two-edge paths, and Ghouila-Houri's theorem builds a transitive orientation from any quasi-transitive one (our own wording). For one fixed orientation the conditions differ: a directed triangle is quasi-transitive but not transitive (our own).

**Paper or page:** [Extending Ghouila-Houri's Characterization of Comparability Graphs to Temporal Graphs](https://arxiv.org/abs/2510.06849). It says: “A fundamental result presented by Ghouila-Houri guarantees that any static graph admitting a quasi-transitive orientation also admits a transitive orientation.”

**Sources:**

- [Pierre Charbit, Michel Habib, Amalia Sorondo, Extending Ghouila-Houri's Characterization of Comparability Graphs to Temporal Graphs, arXiv:2510.06849 (2025)](https://arxiv.org/abs/2510.06849)

### Flows with values in a group shorten the six-flow theorem

**Remember:** Let flows take group values, and six splits as two times three.

*Makes the theorem clean to state or prove.* MSC 05C21 (Flows in graphs). arXiv math.CO. Level 3: graduate.

**Definition.** A flow on an oriented finite graph gives each edge a value in an abelian group, such as ℤ₂ × ℤ₃, so that inflow equals outflow at every vertex. It is nowhere-zero if no edge gets zero, and an integer k-flow uses integers strictly between −k and k.

**Problem.** Every bridgeless finite graph, one with no edge whose removal increases the number of components, has a nowhere-zero integer 6-flow.

**How the definition helps.** Group values let one prove the theorem for the group ℤ₂ × ℤ₃, which has six elements: Seymour shows that every bridgeless graph has a nowhere-zero ℤ₂ × ℤ₃-flow. Tutte's theorem, that a nowhere-zero M-flow exists exactly when a nowhere-zero integer \|M\|-flow exists, turns this into an integer 6-flow.

**Wikipedia:** [https://en.wikipedia.org/wiki/Nowhere-zero<sub>flow</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Nowhere-zero_flow). It says: “(Tutte 1950) A graph G has an M-flow if and only if it has a \|M\|-flow.”

**Paper or page:** [A short proof of Seymour's 6-flow theorem](https://arxiv.org/abs/2307.04768). It says: “Every 2-edge-connected digraph has a nowhere-zero ℤ₂ × ℤ₃-flow.”

**Sources:**

- [Matt DeVos, Kathryn Nurse, A short proof of Seymour's 6-flow theorem, arXiv:2307.04768 (2023)](https://arxiv.org/abs/2307.04768)

### A subset sum makes the Tutte polynomial well defined

**Remember:** Sum over all edge sets without choosing an order.

*True by definition.* MSC 05C31 (Graph polynomials). arXiv math.CO. Level 3: graduate.

**Definition.** The Tutte polynomial of a finite graph (V,E) is the sum over all edge subsets A of (x − 1)<sup>(k(A) − k(E))</sup> (y − 1)<sup>(k(A) + \|A\| − \|V\|)</sup>, where k(A) counts the components of the graph (V,A).

**Problem.** The Tutte polynomial is a polynomial in x and y that does not depend on any order of the edges.

**How the definition helps.** The sum uses no order of the edges, so its value cannot depend on one, and it is a polynomial because both exponents are nonnegative. Adding edges can only merge components, and A needs at least \|V\| − k(A) edges to form its components (our own). Starting from the deletion–contraction recursion instead, one must show that every order of edges gives the same result.

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “In this definition it is clear that T<sub>G</sub> is well-defined and a polynomial in x and y.”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)
- [H. H. Crapo, The Tutte polynomial, Aequationes Mathematicae 3 (1969) 211–229](https://doi.org/10.1007/BF01817442)

### Acyclic orientations reveal chromatic reciprocity

**Remember:** Orient edges uphill by colour; negating k turns strict into weak.

*Makes the theorem clean to state or prove.* MSC 05C31 (Graph polynomials), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** An acyclic orientation directs each edge with no directed cycle. A proper colouring by 1 to k orients each edge toward its higher colour. So χ(k) counts pairs of an acyclic orientation and a labeling by 1 to k that strictly increases along arrows.

**Problem.** Let χ be the chromatic polynomial of a finite simple graph on n vertices, and let k be a positive integer. Then (−1)ⁿχ(−k) counts pairs of an acyclic orientation and a labeling by 1 to k that weakly increases along every arrow.

**How the definition helps.** For one orientation, χ(k) counts strictly order-preserving maps of a poset (our own). Order-polynomial reciprocity turns its value at −k into (−1)ⁿ times the count of weakly order-preserving maps (our own). Summing over orientations gives the result, and these weak labelings need not be proper colourings (our own).

**Paper or page:** [q-Chromatic polynomials](https://arxiv.org/abs/2403.19573v1). It says: “where the sum is over all pairs of an n-coloring c and a compatible acyclic orientation ρ.”

**Sources:**

- [q-Chromatic polynomials](https://arxiv.org/abs/2403.19573v1)

### Allowing a few irregular pairs makes Szemerédi's regularity lemma true

**Remember:** Most pairs regular, not all: half graphs make exceptions unavoidable.

*Makes the theorem clean to state or prove.* MSC 05C35 (Extremal problems in graph theory), 05C75. arXiv math.CO. Level 3: graduate.

**Definition.** Disjoint vertex sets A, B form an ε-regular pair if all X ⊆ A, Y ⊆ B with \|X\| ≥ ε\|A\|, \|Y\| ≥ ε\|B\| have edge density within ε of that of A, B. Here density is the edge count divided by the product of the set sizes. An ε-regular partition has part sizes differing by at most one and lets up to ε times the number of part pairs be irregular.

**Problem.** For every ε &gt; 0 and every positive integer m there is a number M with this property. Every graph with at least M vertices has an ε-regular partition into k parts, for some k with m ≤ k ≤ M.

**How the definition helps.** Allowing an ε fraction of irregular pairs is what makes a bound on the number of parts possible at all (our own explanation). Half graphs need some irregular pairs in every partition into boundedly many parts. Szemerédi's regularity lemma then supplies the bound M.

**Wikipedia:** [Szemerédi regularity lemma](https://en.wikipedia.org/wiki/Szemer%C3%A9di_regularity_lemma). It says: “However, some graphs, such as the half graphs, require many pairs of partitions (but a small fraction of all pairs) to be irregular.”

**Sources:**

- [D. Conlon and J. Fox, Bounds for graph regularity and removal lemmas, Geometric and Functional Analysis 22 (2012) 1191–1256](https://doi.org/10.1007/s00039-012-0171-x)

### Cut norms control graph densities

**Remember:** Cut norm: the worst density gap over any two vertex sets.

*Rules out counterexamples.* MSC 05C35 (Extremal problems in graph theory), 05C80. arXiv math.CO. Level 3: graduate.

**Definition.** A graphon is a symmetric measurable function from \[0,1\]² to \[0,1\], and the cut norm of U − W is the largest absolute integral of U − W over a measurable rectangle S × T. The density t(F,W) gives the vertices of F independent uniform labels in \[0,1\] and averages the product of W over the edges of F.

**Problem.** Let F be a finite simple graph with e edges, and let U and W be graphons. Then \|t(F,U) − t(F,W)\| is at most e times the cut norm of U − W.

**How the definition helps.** Change U to W one edge factor at a time; with the other labels fixed, each change is an integral of U − W against a(x)b(y), with a and b valued in \[0,1\] (our own). Writing a and b as averages of indicators of their level sets bounds each change by the cut norm, so e changes give the bound (our own). Edge density alone fails: the constant one-half graphon and the balanced complete bipartite graphon differ in triangle density (our own).

**Paper or page:** [Prominent examples of flip processes](https://arxiv.org/abs/2206.03884v1). It says: “Suppose that we have a graph F of order k and two graphons U and W. Then we have \|t(F,U) − t(F,W)\| ≤ (k choose 2)d□(U, W).”

**Sources:** none listed. No primary source with a working link was found.

### A matrix quotient makes the sandpile group order a determinant

**Remember:** Integer vectors modulo the reduced Laplacian: determinant many classes.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C57. arXiv math.CO. Level 3: graduate.

**Definition.** For a finite connected loopless graph with a sink vertex, the sandpile group is the integer vectors off the sink modulo the integer span of Δ′'s columns. Here Δ′ is the reduced Laplacian: the degree matrix minus the adjacency matrix, with the sink row and column removed.

**Problem.** The sandpile group has order det Δ′, which is the number of spanning trees of the graph.

**How the definition helps.** A full-rank integer lattice has index equal to the absolute value of its basis determinant, so the group has order \|det Δ′\| (our own). The matrix-tree theorem says det Δ′ is the number of spanning trees, so it is positive. With the other definition, by recurrent sandpile states, the work is to prove that these states form a group isomorphic to this quotient.

**Wikipedia:** [Abelian sandpile model](https://en.wikipedia.org/wiki/Abelian_sandpile_model). It says: “Given the isomorphisms stated above, the order of the sandpile group is the determinant of Δ′, which by the matrix tree theorem is the number of spanning trees of the graph.”

**Paper or page:** [The critical group of a combinatorial map](https://arxiv.org/abs/2308.13342v2). It says: “Let G be a connected, loopless, abstract graph. Then the order of its critical group K(G) is the number of spanning trees of G.”

**Sources:**

- [D. Dhar, Self-organized critical state of sandpile automaton models, Physical Review Letters 64 (1990) 1613–1616](https://doi.org/10.1103/PhysRevLett.64.1613)

### Directed edges turn cycle products into determinants

**Remember:** A directed edge remembers enough to forbid the next reversal.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C30. arXiv math.CO. Level 3: graduate.

**Definition.** The edge matrix M is indexed by the directed edges of a finite simple graph. M(e,f) = 1 when f starts where e ends and is not the reverse of e, else 0. The Ihara zeta function multiplies 1/(1 − tˡ) over cyclic classes of primitive closed nonbacktracking walks of length ℓ, with no backtracking at the closing step either.

**Problem.** The reciprocal of the Ihara zeta function equals det(I − tM).

**How the definition helps.** Because M forbids reversal at each step, its closed walks are exactly the closed nonbacktracking walks, and tr Mᵐ counts them with a marked start (our own). Then log det(I − tM)⁻¹ is the sum of tr(Mᵐ)tᵐ/m over m ≥ 1 (our own). Grouping the walks by their primitive cycle turns this sum into the logarithm of the zeta product (our own).

**Paper or page:** [On the double covers of a line graph](https://arxiv.org/abs/2202.04756v2). It says: “Let M be the edge adjacency matrix of a graph X. Then ζₓ(u)⁻¹ = det(I−Mu).”

**Sources:** none listed. No primary source with a working link was found.

### Extension axioms give the zero-one law for random finite graphs

**Remember:** Every finite adjacency pattern has a fresh witness.

*Makes the theorem clean to state or prove.* MSC 05C63 (Infinite graphs), 03C13, 05C80. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** The k-extension axiom says that for all disjoint vertex sets U, V with \|U\| + \|V\| ≤ k, some vertex outside both is adjacent to every vertex of U and to none of V.

**Problem.** For every first-order sentence, the probability that a uniformly random graph on n vertices satisfies it tends to 0 or to 1 as n grows. This is the zero-one law of Glebskii and coauthors and of Fagin.

**How the definition helps.** All extension axioms together have one countable model, the Rado graph, so they form a complete theory (our own). By compactness, each first-order sentence or its negation follows from a single k-extension axiom, since the k-extension axiom implies those for smaller k. Each fixed k-extension axiom holds with probability tending to one, so the sentence has probability tending to 1 or to 0.

**Wikipedia:** [Rado graph](https://en.wikipedia.org/wiki/Rado_graph). It says: “The first-order logic sentences that are true of the Rado graph are also true of almost all random finite graphs, and the sentences that are false for the Rado graph are also false for almost all finite graphs.”

**Sources:**

- [R. Fagin, Probabilities on finite models, The Journal of Symbolic Logic 41 (1976) 50–58](https://doi.org/10.2307/2272945)

### The extension property makes every countable graph embed in the random graph

**Remember:** To embed the next vertex, ask for exactly its earlier neighbors.

*True by definition.* MSC 05C63 (Infinite graphs), 03C15, 05C80. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** The Rado graph is the countably infinite simple graph, unique up to isomorphism, with the extension property. For all disjoint finite vertex sets U,V, some vertex outside both is adjacent to every member of U and none of V.

**Problem.** Every countable simple graph is isomorphic to an induced subgraph of the countable random graph. An induced subgraph keeps exactly the edges between its chosen vertices.

**How the definition helps.** The extension property lets each new vertex find an image with exactly the right adjacencies to the earlier images (our own). Enumerate the graph to embed. For the next vertex, take U as the images of its earlier neighbours and V as the images of its earlier non-neighbours.

**nLab:** [countable random graph](https://ncatlab.org/nlab/show/countable+random+graph). It says: “there exists a vertex not in either subset which is connected to all the points in one subset and disconnected from the other.”

**Sources:** none listed. No primary source with a working link was found.

### Decision diagrams turn coloring into flow

**Remember:** Replace weights on whole paths by flows along their edges.

*True by definition.* MSC 05C72 (Fractional graph theory, fuzzy graph theory), 05C85. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** An exact decision diagram for the independent sets of a graph is a finite acyclic directed graph whose start-to-end paths correspond to the independent sets. Each path tests each vertex once and takes that vertex's inclusion edge exactly when the vertex lies in its set. A fractional colouring gives nonnegative weights to independent sets so that each vertex is covered by total weight at least one.

**Problem.** The least total weight of a fractional colouring equals the least value of a start-to-end flow sending at least one unit in total through each vertex's inclusion edges.

**How the definition helps.** Paths and independent sets correspond, so weights on sets and flows along paths carry the same data (our own explanation). A set's weight sent along its path gives a feasible flow of equal value. Conversely, the flow decomposition theorem splits any feasible flow into weighted paths, which are weights on independent sets.

**Paper or page:** [Fractional Chromatic Numbers from Exact Decision Diagrams](https://arxiv.org/abs/2411.03003v1). It says: “Then the linear relaxation $(F')$ is equivalent to (\\ref{VCLP}).”

**Sources:**

- [Fractional Chromatic Numbers from Exact Decision Diagrams](https://arxiv.org/abs/2411.03003v1)

### The exponential graph turns Hedetniemi's conjecture into a question about one graph

**Remember:** Colouring G × H with K means mapping H into Kᴳ.

*Makes the theorem clean to state or prove.* MSC 05C76 (Graph operations (line graphs, products, etc.)), 05C15, 05C60. arXiv math.CO. Level 3: graduate.

**Definition.** The exponential graph Kᴳ has the functions from V(G) to V(K) as vertices. Functions f, g are adjacent when f(u) and g(v) are adjacent in K for every edge uv of G, in both orders. So H maps to Kᴳ exactly when G × H, which joins pairs adjacent in both coordinates, maps to K.

**Problem.** G × H is k-colourable exactly when H maps homomorphically to Kₖᴳ. For fixed G,k, every k-colourable product G × H has a k-colourable factor exactly when G or Kₖᴳ is k-colourable.

**How the definition helps.** A colouring c of G × H becomes the map sending h to the function g ↦ c(g,h), and the adjacency rule says this map preserves edges (our own). If G is not k-colourable, every H with G × H k-colourable maps to Kₖᴳ. And H = Kₖᴳ is itself such a factor.

**Wikipedia:** [https://en.wikipedia.org/wiki/Hedetniemi%27s<sub>conjecture</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Hedetniemi%2527s_conjecture). It says: “In other words, Hedetniemi's conjecture can be seen as a statement on exponential graphs: for every integer k, the graph Kₖᴳ is either k-colorable, or it contains a loop (meaning G is k-colorable).”

**Paper or page:** [A survey on Hedetniemi's conjecture](https://arxiv.org/abs/2502.16078). It says: “For any graphs G,H,K, G × H → K if and only if H → Kᴳ.”

**Sources:**

- [Xuding Zhu, A survey on Hedetniemi's conjecture, arXiv:2502.16078 (2025)](https://arxiv.org/abs/2502.16078)

### Graphons complete the space of graphs, so graph sequences have limits

**Remember:** Replace each adjacency entry by a square and compare integrals over rectangles.

*Makes the theorem clean to state or prove.* MSC 05C80 (Random graphs (graph-theoretic aspects)), 05C35. arXiv math.CO, math.PR. Level 3: graduate.

**Definition.** A graphon is a symmetric measurable function from \[0,1\]² to \[0,1\], and a finite graph becomes one by spreading its adjacency matrix over equal squares. Cut distance is the infimum, over measure-preserving relabelings, of the largest absolute integral of the difference of two graphons over a rectangle.

**Problem.** Every sequence of finite graphs has a subsequence that converges in cut distance to a graphon. So questions about large dense graphs become questions about one limit object.

**How the definition helps.** Finite graphs and their limits now live in one space (our own explanation), and this space is compact in cut distance once graphons at distance zero are identified. Compactness gives the convergent subsequence. The compactness proof uses the weak regularity lemma.

**Wikipedia:** [Graphon](https://en.wikipedia.org/wiki/Graphon). It says: “This space turns out to be compact. Moreover, it contains the set of all finite graphs, represented by their associated graphons, as a dense subset.”

**Sources:**

- [L. Lovász and B. Szegedy, Limits of dense graph sequences, Journal of Combinatorial Theory, Series B 96 (2006) 933–957](https://doi.org/10.1016/j.jctb.2006.05.002)
- [L. Lovász and B. Szegedy, Szemerédi's lemma for the analyst, Geometric and Functional Analysis 17 (2007) 252–270](https://doi.org/10.1007/s00039-007-0599-6)

### Brambles give an exact certificate for large treewidth

**Remember:** Pairwise touching connected pieces that no small vertex set can hit.

*Makes the theorem clean to state or prove.* MSC 05C83 (Graph minors). arXiv math.CO, cs.DM. Level 3: graduate.

**Definition.** A bramble in a finite graph is a nonempty family of connected subgraphs that pairwise touch, meaning any two share a vertex or are joined by an edge. Its order is the fewest vertices in a set that meets every member.

**Problem.** A finite graph has treewidth at least k exactly when it has a bramble of order k + 1, by the duality theorem of Seymour and Thomas.

**How the definition helps.** In every tree decomposition some bag meets every member of a bramble, so that bag has at least the bramble's order of vertices (our own). This gives the easy direction. The Seymour–Thomas theorem gives the converse, a bramble whose order is the treewidth plus one.

**Wikipedia:** [https://en.wikipedia.org/wiki/Bramble\_(graph<sub>theory</sub>)](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Bramble_%28graph_theory%29). It says: “Seymour and Thomas proved that the order of a bramble (or equivalently, of a haven) characterizes treewidth: if k is the largest possible order among all brambles of a graph, then the graph has treewidth k − 1.”

**Paper or page:** [Combing a Linkage in an Annulus](https://arxiv.org/abs/2207.04798). It says: “A graph G has a bramble of order k+1 if and only if tw(G) ≥ k.”

**Sources:**

- [Petr A. Golovach, Giannos Stamoulis, Dimitrios M. Thilikos, Combing a Linkage in an Annulus, arXiv:2207.04798 (2022)](https://arxiv.org/abs/2207.04798)

### Using minors, not topological minors, makes the Robertson–Seymour theorem true

**Remember:** Allowing contraction lets finitely many forbidden minors describe every minor-closed family.

*Makes the theorem clean to state or prove.* MSC 05C83 (Graph minors). arXiv math.CO. Level 3: graduate.

**Definition.** A finite graph H is a minor of G if deleting vertices, deleting edges and contracting edges, that is merging the two ends of an edge, turns G into H. Unlike a topological minor, a minor may contract edges at vertices of any degree.

**Problem.** In every infinite set of finite graphs, one graph is a minor of another; this is the Robertson–Seymour theorem. Equivalently, every family closed under taking minors is defined by finitely many forbidden minors.

**How the definition helps.** The Robertson–Seymour theorem does the work, and the choice of minors matters, because topological minors are not a well-quasi-ordering. The equivalence holds because the minimal excluded graphs of a minor-closed family form an antichain (our own).

**Wikipedia:** [Robertson–Seymour theorem](https://en.wikipedia.org/wiki/Robertson%E2%80%93Seymour_theorem), [Graph minor](https://en.wikipedia.org/wiki/Graph_minor). It says: “The topological minor relation is not a well-quasi-ordering on the set of finite graphs and hence the result of Robertson and Seymour does not apply to topological minors.”

**Sources:**

- [Neil Robertson and Paul D. Seymour, Graph Minors. XX. Wagner's conjecture, Journal of Combinatorial Theory, Series B (2004)](https://doi.org/10.1016/j.jctb.2004.08.001)
- [Guoli Ding, Excluding a long double path minor, Journal of Combinatorial Theory, Series B 66 (1996) 11–23](https://doi.org/10.1006/jctb.1996.0002)

### Optimal eliminations can leave cliques last

**Remember:** Root at the bag containing the clique and eliminate toward it.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 05C83. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** Eliminating a vertex joins all pairs of its remaining neighbours and then deletes it. An order costs one plus the most remaining neighbours of any deleted vertex. The least cost equals the smallest possible largest bag of a tree decomposition (our own).

**Problem.** For any clique, a set of pairwise adjacent vertices, some minimum-cost order eliminates all other vertices first.

**How the definition helps.** Take an optimal tree decomposition; the subtrees of the clique's vertices meet pairwise, so by the Helly property for subtrees one bag holds the whole clique (our own). Root the tree there and repeatedly eliminate the vertices that occur only in a leaf bag, then drop that leaf. Every fill edge stays inside a bag, so the cost stays optimal and the clique, in the root bag, comes last.

**Paper or page:** [On Sparsification for Computing Treewidth](https://arxiv.org/abs/1308.3665v1). It says: “There is a minimum-cost elimination order π∗ of G that eliminates all vertices of A before eliminating any vertex of B.”

**Sources:** none listed. No primary source with a working link was found.

### Colex order computes minimum shadows

**Remember:** Colex fills up small elements first; compare sets by their largest difference.

*Makes the theorem clean to state or prove.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 3: graduate.

**Definition.** Colex order compares two k-element sets by the largest element in which they differ, and the set containing it comes later. So an initial colex segment uses only small elements for as long as possible. The lower shadow of a family is the set of (k − 1)-sets obtained by removing one element from a member.

**Problem.** Among families of fixed size, an initial colex segment has minimum lower shadow. Its shadow is also an initial colex segment.

**How the definition helps.** The Kruskal–Katona theorem says that initial colex segments have the least shadow among families of their size. Their shadow is again an initial segment, because grouping sets by their largest element leaves smaller initial segments once that element is removed (our own).

**Paper or page:** [Diversity](https://arxiv.org/abs/1811.01111v1). It says: “If ℱ ⊆ (\[n\] choose k), then \|∂ℱ\| ≥ ∂𝒞(\[n\],\|ℱ\|,k).”

**Sources:** none listed. No primary source with a working link was found.

### Grid weights isolate top-degree coefficients

**Remember:** A highest-degree monomial survives the weighted grid sum.

*True by definition.* MSC 05D40 (Probabilistic methods in extremal combinatorics, including polynomial methods (combinatorial Nullstellensatz, etc.)). arXiv math.CO. Level 3: graduate.

**Definition.** For a monomial x₁ᵏ¹⋯xₙᵏⁿ of maximum total degree in a polynomial P over a field, take a grid S₁ × ⋯ × Sₙ with \|Sᵢ\| = kᵢ + 1. Weight each grid point s by the product over i of 1/∏(sᵢ − s′), with s′ over the other elements of Sᵢ. These weights make the one-variable sum of tᵐ over Sᵢ equal 0 for m &lt; kᵢ and 1 for m = kᵢ (our own).

**Problem.** The weighted sum of P over the grid equals the coefficient of the chosen monomial. So if that coefficient is nonzero, P does not vanish on the whole grid.

**How the definition helps.** The weighted sum splits over coordinates, so each monomial gives a product of one-variable sums (our own). Every other monomial of degree at most deg P has some exponent below kᵢ and gives zero, while the target gives one (our own). Without the maximum-degree condition this fails: x − x² vanishes on {0,1} although its x-coefficient is nonzero (our own).

**Paper or page:** [Additive colorings of planar graphs](https://arxiv.org/abs/1202.0667v2). It says: “Suppose that there is a nonvanishing monomial x₁ᵏ¹⋯xₙᵏⁿ in P such that k₁+⋯+kₙ=deg(P).”

**Sources:**

- [Noga Alon, Combinatorial Nullstellensatz (1999)](https://doi.org/10.1017/S0963548398003411)

### Stable subset laws survive conditioning

**Remember:** Set a variable to zero for absence, and differentiate for presence.

*True by definition.* MSC 05D40 (Probabilistic methods in extremal combinatorics, including polynomial methods (combinatorial Nullstellensatz, etc.)). arXiv math.CO. Level 3: graduate.

**Definition.** Encode a random subset of a finite set by its generating polynomial, the sum over subsets S of P(S) times the product of the variables xᵢ for i in S. The law is strongly Rayleigh when this polynomial is stable, that is, it has no zero with every variable in the open upper half-plane.

**Problem.** Conditioning a strongly Rayleigh random subset on inclusion or exclusion of an element preserves the property if the event has positive probability.

**How the definition helps.** Conditioning becomes an operation on one polynomial: setting xᵢ = 0 keeps the subsets without i, and differentiating in xᵢ, then multiplying by xᵢ, keeps those with i (our own). These operations preserve stability, and dividing by the positive event probability does too (our own).

**Paper or page:** [Stable multivariate Narayana polynomials and labeled plane trees](https://arxiv.org/abs/2403.15058v2). It says: “Given i,j ∈ \[n\], the following operations preserve real stability of f ∈ ℝ\[x\]:”

**Sources:** none listed. No primary source with a working link was found.

### A ratio of alternating determinants makes Schur polynomials symmetric

**Remember:** Swapping variables flips both determinant signs, so the ratio stays fixed.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** The Schur polynomial of a partition λ with at most n parts is the ratio of two alternating determinants: det(xᵢ<sup>(λⱼ + n − j)</sup>) divided by the Vandermonde determinant det(xᵢ<sup>(n − j)</sup>).

**Problem.** The determinant ratio is a polynomial that is invariant under every permutation of the variables.

**How the definition helps.** Swapping two variables swaps two rows of each determinant, so both change sign and their ratio is symmetric. It is a polynomial because setting xᵢ = xⱼ makes two numerator rows equal, so each xᵢ − xⱼ divides the numerator. The Vandermonde determinant is the product of these distinct irreducible factors, so it divides the numerator too (our own explanation).

**nLab:** [Schur function](https://ncatlab.org/nlab/show/Schur+function). It says: “Then the Schur polynomial attached to λ is the quotient”

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “This is a symmetric function because the numerator and denominator are both alternating, and a polynomial since all alternating polynomials are divisible by the Vandermonde determinant.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing indices merge quasisymmetric products

**Remember:** Merge index lists and add exponents at shared indices.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** For a list α = (α₁, …, αₖ) of positive integers, M\_α is the sum of all monomials x<sub>i</sub>₁<sup>α₁</sup> ⋯ x<sub>i</sub>ₖ<sup>αₖ</sup> with i₁ &lt; ⋯ &lt; iₖ. So a term of M\_α is fixed by an increasing list of indices that carry the entries of α in order.

**Problem.** M\_α M\_β sums M\_γ over all quasi-shuffles γ of α and β, counted with multiplicity. At each step take the next entry of either list, or take both next entries and record their sum, until both lists are exhausted.

**How the definition helps.** In a product of a term of M\_α with a term of M\_β, only how the two increasing index lists interleave and coincide matters (our own). Each quasi-shuffle records one such pattern, with coinciding indices adding their exponents, and summing over the actual indices gives M\_γ (our own).

**nLab:** [quasi-symmetric function](https://ncatlab.org/nlab/show/quasi-symmetric+function). It says: “Let X be a totally ordered set of indeterminants.”

**Paper or page:** [The Bernstein homomorphism via Aguiar-Bergeron-Sottile universality](https://arxiv.org/abs/1604.02969v2). It says: “Mα₁Mα₂⋯Mαₖ = ∑\[A ∈ ℕᵏ˒• Cred, (Aɡ,•)ʳᵉᵈ = αɡ for each g\] Mcolumn A.”

**Sources:** none listed. No primary source with a working link was found.

### Ordered variables split quasisymmetric functions

**Remember:** Two ordered lists cut each exponent list once.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** M\_α is the sum of all monomials that put the entries of α, in order, as exponents on variables with strictly increasing indices. Its coproduct substitutes two alphabets, all of the first before all of the second, and reads a product of monomials from the two alphabets as a tensor.

**Problem.** The coproduct of M\_α sums M\_β ⊗ M\_γ over all cuts of α into consecutive pieces β and γ. Empty pieces are allowed, with M of the empty list equal to one.

**How the definition helps.** An increasing index list crosses from the first alphabet to the second once, possibly at an end, so it cuts α in two (our own). For each cut, the sum splits into a product of independent sums, which gives M\_β ⊗ M\_γ (our own).

**Paper or page:** [The Bernstein homomorphism via Aguiar-Bergeron-Sottile universality](https://arxiv.org/abs/1604.02969v2). It says: “Let γ ∈ Comp and k ∈ ℕ. Then, Δ⁽ᵏ⁻¹⁾Mγ = ∑\[(γ₁, γ₂, …, γₖ) ∈ Compᵏ, γ₁γ₂⋯γₖ = γ\] Mγ₁ ⊗ Mγ₂ ⊗ ⋯ ⊗ Mγₖ.”

**Sources:** none listed. No primary source with a working link was found.

### Power sums make the symmetric function involution immediate

**Remember:** A sign applied twice disappears, and power sums generate everything.

*True by definition. Confidence: medium.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** The power sums pₖ, each the sum of the kth powers of all variables, freely generate the ring of symmetric functions over ℚ. So a ring map is fixed by its values on them, and the ring map ω sends each pₖ to (−1)ᵏ⁻¹pₖ.

**Problem.** Applying ω twice gives the identity.

**How the definition helps.** Applying ω twice multiplies each pₖ by ((−1)ᵏ⁻¹)² = 1, and a ring map that fixes the free generators is the identity (our own).

**Wikipedia:** [Ring of symmetric functions](https://en.wikipedia.org/wiki/Ring_of_symmetric_functions). It says: “The fact that ω is an involution of Λ<sub>R</sub> follows from the symmetry between elementary and complete homogeneous symmetric functions expressed by the first set of relations given above.”

**Sources:** none listed. No primary source with a working link was found.

### Schur characters make Littlewood–Richardson coefficients nonnegative

**Remember:** Multiply characters and count how often each irreducible piece occurs.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 05E10, 20G05. arXiv math.CO, math.RT. Level 3: graduate.

**Definition.** For a partition λ with at most n parts, take the irreducible polynomial representation of GLₙ(ℂ) with highest weight λ. Its character at the diagonal matrix with entries x₁, …, xₙ is the Schur polynomial s\_λ.

**Problem.** The product of two Schur polynomials in n variables expands in the Schur basis with nonnegative integer coefficients. These are the Littlewood–Richardson coefficients for the partitions with at most n parts.

**How the definition helps.** A product of two Schur polynomials is the character of a tensor product, which splits into irreducible polynomial representations by complete reducibility (our own). So each coefficient is the number of times an irreducible summand occurs, a nonnegative integer.

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “In representation theory they are the characters of polynomial irreducible representations of general linear groups.”

**Sources:** none listed. No primary source with a working link was found.

### Tableau weights explain the Cauchy identity

**Remember:** Sum the variable products of all fillings, weak across and strict down.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** A semistandard filling of the shape of λ puts positive integers in its boxes, weakly increasing along rows and strictly increasing down columns. The Schur function s\_λ sums, over all such fillings, the product of the variables x<sub>i</sub> over the entries i.

**Problem.** The sum over all shapes λ of s\_λ(x₁, x₂, …) s\_λ(y₁, y₂, …) equals the product of 1/(1 − xᵢyⱼ) over all pairs i, j.

**How the definition helps.** With fillings, both sides count nonnegative integer matrices by their row and column sums: each factor 1/(1 − xᵢyⱼ) chooses one matrix entry, and the left side counts pairs of fillings of equal shape (our own). The Robinson–Schensted–Knuth correspondence is a bijection between the two, and proving it is the main work (our own).

**nLab:** [Schur function](https://ncatlab.org/nlab/show/Schur+function). It says: “the corresponding Schur polynomial sλ is equal to the sum over the monomials”

**Paper or page:** [Growth diagram proofs for the Littlewood identities](https://arxiv.org/abs/2404.04014v1). It says: “\\sum<sub>\\lambda</sub> s\_\\lambda(\\mathbf{x})s\_\\lambda(\\mathbf{y}) &amp;= \\prod\_{\\substack{1 \\leq i \\leq n \\\\ 1 \\leq j \\leq m}} \\frac{1}{1-x<sub>iy</sub><sub>j</sub>},”

**Sources:** none listed. No primary source with a working link was found.

### Tableaux make Kostka numbers nonnegative

**Remember:** Each coefficient counts fillings of a fixed shape and weight.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 05E10. arXiv math.CO, math.RT. Level 3: graduate.

**Definition.** A semistandard tableau of shape λ fills the rows of λ with labels 1 to n, weakly increasing across rows and strictly increasing down columns. The Schur polynomial sums, over these tableaux, the monomial with one factor xᵢ for each label i.

**Problem.** The Schur polynomial expands in monomial symmetric polynomials with nonnegative integer coefficients, the Kostka numbers. Each basis polynomial sums the distinct monomials whose exponents rearrange a fixed list.

**How the definition helps.** The coefficient of x<sup>μ</sup> counts tableaux with μᵢ labels equal to i, so it is a nonnegative integer. The symmetry of the Schur polynomial makes this count the same for every rearrangement of μ, so it is the coefficient of one monomial symmetric polynomial. With this definition the work is to prove symmetry, for example by the Bender–Knuth involutions (our own).

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “The Kostka numbers K\_λμ are given by the number of semi-standard Young tableaux of shape λ and weight μ.”

**Sources:** none listed. No primary source with a working link was found.

### Thresholds triangulate the order polytope

**Remember:** As the threshold rises, the upper sets form a nested chain.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** The order polytope of a finite poset is the set of maps from the poset to \[0,1\] that weakly increase along the order. Each such map is a convex combination of the indicators of its threshold sets, the upper sets where its value is at least t. These sets form a nested chain.

**Problem.** The canonical simplices of the order polytope are exactly the convex hulls of indicator vectors on chains of upper sets.

**How the definition helps.** The values of a point split \[0,1\] into gaps, and each gap's length weights one threshold set, so the point lies in one chain's simplex (our own). The sets with positive weight are fixed by the point, so two chain simplices meet in their common subchain's simplex, a common face (our own).

**Paper or page:** [Equatorial Flow Triangulations of Gorenstein Flow Polytopes](https://arxiv.org/abs/2408.05320v2). It says: “chains of nested upper order ideals correspond to the simplicies of the canonical triangulation.”

**Sources:** none listed. No primary source with a working link was found.

### Setting 0⁰ = 1 lets one Eulerian series hold for every n

**Remember:** With 0⁰ = 1, the case n = 1 needs no separate statement.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 4: research.

**Definition.** A power xⁿ is a product of n copies of x, so x⁰ is the empty product and equals 1 for every x, including x = 0. This makes the m = 0 term of Σ mⁿ⁻¹ xᵐ equal to 1 when n = 1 and to 0 when n ≥ 2.

**Problem.** For every positive integer n, ODP(Tourₙ, Cycleₙ)/(1 − x)ⁿ = n Σ<sub>m≥0</sub> mⁿ⁻¹ xᵐ.

**How the definition helps.** With this convention, the right side for n = 1 is Σ xᵐ = 1/(1 − x), so one formula covers every n (our own check). The identity itself comes from the paper's generating-function argument.

**Paper or page:** [Generalized Eulerian Numbers and Directed Friends-and-seats Graphs](https://arxiv.org/abs/2403.00966). It says: “For all positive integers n, we have that ODP(Tourₙ, Cycleₙ)/(1−x)ⁿ = n Σₘ≥₀ mⁿ⁻¹ xᵐ, where, by convention, 0⁰ = 1.”

**Sources:**

- [David Dong, Generalized Eulerian Numbers and Directed Friends-and-seats Graphs, arXiv:2403.00966 (2024)](https://arxiv.org/abs/2403.00966)

### Cobordisms of signed sets make the involution principle a composition

**Remember:** Compose sign-cancelling matchings, and you get a bijection between the ends.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 18M80. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A signed finite set has each element marked positive or negative, and an unsigned set has only positive elements. A cobordism from A to B is a perfect matching of the disjoint union of A and B that pairs opposite signs once the signs in A are reversed.

**Problem.** A chain of cobordisms that starts and ends with unsigned sets A and B yields a matching from A to B. The Garsia–Milne involution principle is a special case.

**How the definition helps.** Composing cobordisms glues matchings along the shared sets, and following paths from the ends gives a new matching, because inner points have degree two (our own). When A and B are unsigned, reversed A is all negative and B all positive, so every pair joins A to B and the matching is a bijection.

**Paper or page:** [A category for bijective combinatorics](https://arxiv.org/abs/1907.09015). It says: “The category of matchings between finite sets extends to the category of cobordisms of signed sets. A chain of cobordisms that starts and ends with unsigned sets A and B yields a matching from A to B.”

**Sources:**

- [Peter G. Doyle, A category for bijective combinatorics, arXiv:1907.09015 (2019)](https://arxiv.org/abs/1907.09015)

### Lorentzian quadratics control coefficient exchanges

**Remember:** One positive eigenvalue controls each pair of exchanged exponents.

*Rules out counterexamples.* MSC 05A20 (Combinatorial inequalities). arXiv math.CO. Level 4: research.

**Definition.** A homogeneous polynomial f of degree d ≥ 2 with nonnegative coefficients is Lorentzian if two things hold. Its support satisfies the exchange rule: for α, β in it with αᵢ &gt; βᵢ, some j with αⱼ &lt; βⱼ has α − eᵢ + eⱼ in it. Every (d − 2)th partial derivative is a quadratic form with at most one positive eigenvalue.

**Problem.** If f = Σ c\_α x<sup>α</sup>/α! is Lorentzian, then c\_α² ≥ c<sub>α+eᵢ−eⱼ</sub> c<sub>α−eᵢ+eⱼ</sub> for every exponent vector α and indices i, j.

**How the definition helps.** Differentiating f by α − eᵢ − eⱼ leaves a quadratic form whose i, j block has diagonal c<sub>α+eᵢ−eⱼ</sub>, c<sub>α−eᵢ+eⱼ</sub> and off-diagonal c\_α (our own). At most one positive eigenvalue makes that block's determinant nonpositive, which is the inequality; missing coefficients count as zero. The exchange rule alone fails: x² + xy + y² has normalized coefficients 2, 1, 2 and violates it (our own).

**Paper or page:** [Log-concavity in Combinatorics](https://arxiv.org/abs/2404.10284v1). It says: “If f = ∑α cαxα/α! is a Lorentzian polynomial, then cα² ≥ cα₊ₑᵢ₋ₑⱼ cα₋ₑᵢ₊ₑⱼ”

**Sources:** none listed. No primary source with a working link was found.

### Fixing the distance from the middle coefficient makes Gaussian polynomial unimodality easy

**Remember:** Track the same distance from the middle as the box grows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A30 (q-calculus and related topics), 05A17. arXiv math.NT, math.CO. Level 4: research.

**Definition.** The coefficient of qⁿ in a Gaussian polynomial counts partitions of n that fit in an m by N box. A perpendicular series fixes m and a distance A from the middle degree mN/2. Its coefficient of zᴺ is the count at degree mN/2 − A, or zero if that degree is not allowed.

**Problem.** The coefficients of a Gaussian polynomial are unimodal, which means they rise to the middle and then fall. For small m, this follows easily from the perpendicular generating functions.

**How the definition helps.** Unimodality says that the count at distance A is at most the count at distance A − 1, for every N at once (our own explanation). So it is one coefficientwise inequality between two perpendicular series. For m = 4, Proposition 1.5 gives these series as rational functions, and their difference has nonnegative coefficients.

**Paper or page:** [An Orthogonal View of Gaußian Polynomials](https://arxiv.org/abs/2510.14124v1). It says: “For small values of m, unimodality of the coefficients of Gaussian polynomials is easily proved from these generating functions.”

**Sources:**

- [Christian Krattenthaler, Brandt Kronholm, Paul Marsh, An Orthogonal View of Gaußian Polynomials, arXiv:2510.14124v1 (2025)](https://arxiv.org/abs/2510.14124v1)

### Bergman augmentation makes bases count spheres

**Remember:** Bases sit alone as top faces, and each closes up a sphere.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05E45. arXiv math.CO. Level 4: research.

**Definition.** A face of the augmented Bergman complex of a finite matroid is an independent set I with a chain of proper flats F₁ ⊊ ⋯ ⊊ Fₖ each containing I; either part may be empty. A flat is a set that keeps every element whose addition leaves its rank unchanged. No proper flat contains a basis, so each basis is a maximal face by itself (our own).

**Problem.** Let the matroid have positive rank r. Its augmented Bergman complex has the homotopy type of spheres of dimension r − 1 joined at one point. There is one sphere for each basis, a maximal independent set.

**How the definition helps.** A shelling can list the basis faces last, and each attaches along its whole boundary, so each adds one (r − 1)-sphere to the wedge (our own). The work is to build this shelling and check that only the basis faces attach along their full boundary (our own).

**Paper or page:** [Topology of augmented Bergman complexes](https://arxiv.org/abs/2108.13394v2). It says: “For a matroid M, the augmented Bergman complex Δₘ is homotopy equivalent to a β-fold wedge of (r(M)−1)-spheres”

**Sources:**

- [Topology of augmented Bergman complexes](https://arxiv.org/abs/2108.13394v2)

### Linear weak maps make the direct sum a coproduct of q-matroids

**Remember:** Allow rank to drop, but keep the maps linear.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 18A30. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A linear weak map between q-matroids over the same finite field is a linear map f of the underlying spaces that never raises rank: r(f(U)) ≤ r(U) for every subspace U.

**Problem.** In the category of q-matroids with linear weak maps, the direct sum of two q-matroids is their coproduct. For each of the paper's five other kinds of maps, some pairs of representable q-matroids have no coproduct.

**How the definition helps.** Linearity makes a map out of the direct sum of the underlying spaces determined by its two restrictions, as for vector spaces (our own explanation). The paper's coproduct theorem shows that this map is again a weak map. For the five other kinds of maps, separate arguments give pairs with no coproduct.

**Paper or page:** [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3). It says: “This is the category where the morphisms are linear weak maps, that is, the rank of the image of any subspace is not larger than the rank of the subspace itself.”

**Sources:**

- [Heide Gluesing-Luerssen, Benjamin Jany, Coproducts in Categories of q-Matroids, arXiv:2111.09723 (2023)](https://arxiv.org/abs/2111.09723v3)
- [Heide Gluesing-Luerssen and Benjamin Jany, Coproducts in categories of q-matroids, European Journal of Combinatorics 112 (2023), 103733](https://doi.org/10.1016/j.ejc.2023.103733)

### Scaled ranks make q-polymatroid independence the independence of a q-matroid

**Remember:** Independent means scaled rank is at least dimension on every subspace.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 11T71. arXiv math.CO, cs.IT. Level 4: research.

**Definition.** Let ρ be a rational-valued q-polymatroid rank and let μ be a positive integer such that μρ is integer-valued. A subspace V is μ-independent if μρ(W) ≥ dim W for every subspace W ⊆ V.

**Problem.** Let r(V) be the minimum of μρ(W) + dim V − dim W over subspaces W of V. Then r is the rank function of a q-matroid, a q-polymatroid with integer ranks, and its independent spaces, those with r(V) = dim V, are exactly the μ-independent spaces.

**How the definition helps.** Taking W = 0 gives r(V) ≤ dim V, and r(V) = dim V says every term is at least dim V, which is μ-independence (our own calculation). The paper's auxiliary q-matroid theorem shows that r satisfies the rank axioms.

**Paper or page:** [Independent Spaces of q-Polymatroids](https://arxiv.org/abs/2105.01802v1), [Independent Spaces of q-Polymatroids](https://arxiv.org/abs/2105.01802v1). It says: “With the aid of an auxiliary q-matroid it is shown that the collection of independent spaces satisfies the same properties as for q-matroids.”

**Sources:**

- [Heide Gluesing-Luerssen, Benjamin Jany, Independent Spaces of q-Polymatroids, arXiv:2105.01802 (2021)](https://arxiv.org/abs/2105.01802v1)
- [Heide Gluesing-Luerssen and Benjamin Jany, Independent Spaces of q-Polymatroids, Algebraic Combinatorics 5 (2022), 727–744](https://doi.org/10.5802/alco.241)

### Rooted forests as presheaves on the natural numbers form a topos

**Remember:** A forest is levels of vertices, each pointing to its parent.

*True by definition. Confidence: medium.* MSC 05C05 (Trees), 18F20, 18B25. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A rooted forest is a presheaf on the natural numbers, that is a functor from ℕᵒᵖ to sets: a set of vertices at each level n and a parent map from level n + 1 to level n. Forest maps are its natural transformations, and a rooted tree is a forest with one vertex at level zero.

**Problem.** The category of rooted forests is a Grothendieck topos, and so is the equivalent category of rooted trees. A Grothendieck topos is a category of sheaves on a site, and it behaves much like the category of sets.

**How the definition helps.** Forests are by definition presheaves, and a presheaf category is a Grothendieck topos, the sheaves for the trivial topology (our own explanation). Adding a common root, which shifts every level up by one, gives the equivalence with rooted trees, and deleting the root is its inverse.

**nLab:** [tree](https://ncatlab.org/nlab/show/tree). It says: “The functor description makes it clear that the category of forests is a (presheaf) topos, indeed a Grothendieck topos; therefore the category of trees, which is equivalent, is also a topos.”

**Sources:** none listed. No primary source with a working link was found.

### Generalised colouring numbers give a short proof for exact distance graphs

**Remember:** Order vertices so each weakly reaches few, then colour exact distances.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C12. arXiv math.CO. Level 4: research.

**Definition.** Fix a linear order of the vertices of a finite graph G; a vertex v weakly r-reaches u if some path of length at most r from v to u has u as its earliest vertex. The weak r-colouring number is the least, over all orders, of the largest number of vertices that one vertex weakly r-reaches, counting itself.

**Problem.** For a positive odd integer p, join two vertices exactly when their distance in G is p. The chromatic number of this graph is at most the weak (2p − 1)-colouring number of G.

**How the definition helps.** The theorem uses one vertex order in which every vertex weakly (2p − 1)-reaches few vertices (our own explanation). The paper's argument colours the exact distance-p graph from that order. This simplifies and improves a result of Nešetřil and Ossona de Mendez.

**Paper or page:** [Chromatic Numbers of Exact Distance Graphs](https://arxiv.org/abs/1612.02160). It says: “Using the notion of generalised colouring numbers, we give a much simpler proof for the result of Nešetřil and Ossona de Mendez, which at the same time gives significantly better bounds.”

**Sources:**

- [Jan van den Heuvel, H. A. Kierstead and Daniel A. Quiroz, Chromatic numbers of exact distance graphs, Journal of Combinatorial Theory, Series B 134 (2019), 143–163](https://doi.org/10.1016/j.jctb.2018.05.007)

### Raising the independence series to the q-th power counts hypergraph multicolorings

**Remember:** Each of the q factors chooses the vertices of one color.

*True by definition. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C65, 05A15. arXiv math.CO. Level 4: research.

**Definition.** An independent set of a hypergraph contains no whole edge. The independence series sums the product of xᵥ for v in S over independent sets S, with 1 for the empty set. A multicoloring gives each vertex a set of colors so that each color class is independent.

**Problem.** Fix a nonnegative integer q and nonnegative integer demands mᵥ. In the qth power of the series, the coefficient with exponents mᵥ counts multicolorings assigning each vertex v exactly mᵥ of the q colors.

**How the definition helps.** The qth power chooses one independent set for each of the q colors, possibly empty, which is exactly a multicoloring (our own explanation). The exponent of xᵥ in the product then counts the colors at v.

**Paper or page:** [Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements](https://arxiv.org/abs/2507.20847v1), [Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements](https://arxiv.org/abs/2507.20847v1). It says: “We show that the coefficients of the q-th power of the marked independence series of a hypergraph coincide with its marked chromatic polynomials in q, thereby generalizing a corresponding result for graphs”

**Sources:**

- [Chaithra P, Shushma Rani, R. Venkatesh, Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements, arXiv:2507.20847 (2025)](https://arxiv.org/abs/2507.20847v1)

### Compatible Eulerian tours give the sandpile group a canonical action without roots

**Remember:** A tour is a cycle with no start, so no root is needed.

*Makes the theorem clean to state or prove.* MSC 05C25 (Graphs and abstract algebra (groups, rings, fields, etc.)), 05C45, 05C10. arXiv math.CO. Level 4: research.

**Definition.** In a connected Eulerian digraph, a ribbon structure fixes a cyclic order of the outgoing arcs at each vertex. A compatible tour is a cyclic traversal using every arc once whose successive departures at each vertex follow that cyclic order.

**Problem.** For an Eulerian ribbon digraph, the sandpile group acts simply transitively on the compatible Eulerian tours, by an action that needs no choice of root. The sandpile group is the group of chip configurations up to firing moves.

**How the definition helps.** A tour has no start, so an action on tours need not choose a root, while cutting it at an arc gives rotor-routing data (our own explanation). The paper's tour-rotor theorem shows that the action does not depend on the cut and is simply transitive.

**Paper or page:** [On canonical sandpile actions of embedded graphs](https://arxiv.org/abs/2504.05275v1). It says: “The tour-rotor action is a well-defined, canonical simply transitive action of the sandpile group of an Eulerian ribbon digraph on the set of compatible Eulerian tours.”

**Sources:**

- [Lilla Tóthmérész, On canonical sandpile actions of embedded graphs, arXiv:2504.05275 (2025)](https://arxiv.org/abs/2504.05275v1)
- [Lilla Tóthmérész, On canonical sandpile actions of embedded graphs, Advances in Combinatorics (2026)](https://doi.org/10.19086/aic.2026.6)

### Defining hypergraph parking functions by cuts makes them the superstable configurations

**Remember:** Every set of vertices has a member too poor to fire.

*True by definition.* MSC 05C25 (Graphs and abstract algebra (groups, rings, fields, etc.)), 05C65. arXiv math.CO. Level 4: research.

**Definition.** Fix a finite hypergraph with sink q and a chip count cᵢ ≥ 0 at each other vertex. For a set T of non-sink vertices and i in T, let dᵀ(i) count the edges at i that also meet the outside of T. An H-parking function requires every nonempty such T to contain a vertex i that is too poor to fire, with cᵢ &lt; dᵀ(i).

**Problem.** In hypergraph chip-firing with a choice of destination within each incident edge, the superstable configurations are exactly the H-parking functions.

**How the definition helps.** By the paper's firing lemma, a nonempty set T can fire exactly when cᵢ ≥ dᵀ(i) for every i in T. A configuration is superstable when no such set can fire, which is the parking condition word for word (our own explanation).

**Paper or page:** [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1), [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1), [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1). It says: “We also show how H-parking functions can be recovered as the superstable configurations in a version of chip-firing on H, where chips have a choice of where to go when fired.”

**Sources:**

- [Timothy Blanton, Anton Dochtermann, Isabelle Hong, SuHo Oh, Zhan Zhan, Parking functions and chip-firing on hypergraphs, arXiv:2508.09720 (2025)](https://arxiv.org/abs/2508.09720v1)

### A Tutte polynomial for embedded graphs keeps duality on every surface

**Remember:** Duality swaps kept and removed edges, so it swaps x and y.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C31 (Graph polynomials), 05C10. arXiv math.CO. Level 4: research.

**Definition.** For a graph embedded in a surface with v vertices, thicken each spanning subgraph with edge set A into a ribbon surface, let b(A) count its boundary components, and put ρ(A) = (v + \|A\| − b(A))/2. The surface Tutte polynomial sums (x − 1)<sup>(ρ(E) − ρ(A))</sup> (y − 1)<sup>(\|A\| − ρ(A))</sup> over all A ⊆ E.

**Problem.** For every cellularly embedded graph, passing to the dual exchanges the two variables of its surface Tutte polynomial.

**How the definition helps.** The ribbon subgraph on A and the dual ribbon subgraph on the complementary edges have the same boundary components (our own explanation). Putting this into the two rank formulas exchanges the two exponents term by term, which swaps x and y.

**Paper or page:** [Constructing a Tutte polynomial for graphs embedded in surfaces](https://arxiv.org/abs/2502.15318). It says: “Let 𝔾 be an embedded graph. Then T(𝔾\*;x,y) = T(𝔾;y,x).”

**Sources:**

- [Iain Moffatt, Constructing a Tutte polynomial for graphs embedded in surfaces, arXiv:2502.15318 (2025)](https://arxiv.org/abs/2502.15318)

### Rooted flags multiply density limits

**Remember:** Fix the labels, then sample the two remaining parts separately.

*Makes the theorem clean to state or prove.* MSC 05C35 (Extremal problems in graph theory). arXiv math.CO. Level 4: research.

**Definition.** Fix a labeled graph, the type; a flag is a graph with some vertices labeled so that they induce the type. The product of two flags sums, over flags H with the shared labels, the probability that a uniform ordered split of H's unlabeled vertices induces the two factors.

**Problem.** Along a convergent sequence of increasingly large flagged graphs with fixed label type, each product density tends to the product of its factors’ limit densities. Thus the limit functional is a homomorphism of the flag algebra.

**How the definition helps.** A product density counts what two independent samples around the same labels see, and differs from the product of densities only on overlaps (our own). In large graphs overlap has probability tending to zero (our own). One also checks that averaging a flag over larger samples gives the same limit (our own).

**Wikipedia:** [Flag algebra](https://en.wikipedia.org/wiki/Flag_algebra). It says: “One can show that the set of limit functionals Φ is exactly the set of positive homomorphisms”

**Sources:**

- [Alexander A. Razborov, Flag algebras (2007)](https://doi.org/10.2178/jsl/1203350785)

### Perron eigenvector weights give an expander mixing lemma for irregular graphs

**Remember:** Weight vertices by the squared leading eigenvector, and the graph looks regular.

*Makes the theorem clean to state or prove.* MSC 05C48 (Expander graphs), 05C50. arXiv math.CO. Level 4: research.

**Definition.** Weight each vertex u by νᵤ², where ν is a nonnegative unit eigenvector for the largest adjacency eigenvalue λ₁, and let ν(S) be the total weight of S. Weight each ordered edge (u,v) by νᵤνᵥ, so e(S,T) sums Aᵤᵥνᵤνᵥ over u ∈ S, v ∈ T.

**Problem.** For any vertex sets S and T, \|e(S, T) − λ₁ν(S)ν(T)\| ≤ λ √(ν(S)ν(Sᶜ)ν(T)ν(Tᶜ)), where λ is the largest absolute value of the other eigenvalues.

**How the definition helps.** With these weights, e(S,T) is the bilinear form of A on the restrictions of ν to S and T, and their parts along ν give the main term λ₁ν(S)ν(T) (our own). The other parts are orthogonal to ν, where A has norm λ, and their lengths are √(ν(S)ν(Sᶜ)) and √(ν(T)ν(Tᶜ)).

**Paper or page:** [A unified framework for the Expander Mixing Lemma for irregular graphs and its applications](https://arxiv.org/abs/2401.07125v2), [A unified framework for the Expander Mixing Lemma for irregular graphs and its applications](https://arxiv.org/abs/2401.07125v2). It says: “we instead propose to use the Perron eigenvector entries as vertex weights, which is a way to regularise the graph.”

**Sources:**

- [Aida Abiad, Sjanne Zeijlemaker, A unified framework for the Expander Mixing Lemma for irregular graphs and its applications, arXiv:2401.07125 (2024)](https://arxiv.org/abs/2401.07125v2)

### Reweighted eigenvalues give vertex expansion Cheeger

**Remember:** Choose the best edge weights, and eigenvalues see vertex expansion.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C48 (Expander graphs), 05C50. arXiv cs.DS, math.CO. Level 4: research.

**Definition.** The vertex expansion ψ of a finite graph on n vertices is the least ratio \|N(S) ∖ S\|/\|S\| over vertex sets S with 1 ≤ \|S\| ≤ n/2. The reweighted eigenvalue λ₂\* is the largest second-smallest Laplacian eigenvalue over nonnegative edge weights that give each vertex weighted degree at most one.

**Problem.** For a finite graph with maximum degree d ≥ 2, ψ²/log d ≲ λ₂\* ≲ ψ, with absolute implied constants.

**How the definition helps.** Optimizing over edge weights gives one spectral number to compare with vertex expansion (our own explanation). The paper's Cheeger inequality improves the earlier bound of Olesker-Taylor and Zanetti, replacing the logarithm of the vertex count by log d.

**Paper or page:** [Cheeger Inequalities for Vertex Expansion and Reweighted Eigenvalues](https://arxiv.org/abs/2203.06168). It says: “Recently, Olesker-Taylor and Zanetti discovered a Cheeger-type inequality ψ²/log\|V\| ≲ λ₂\* ≲ ψ connecting the vertex expansion ψ of a graph G=(V,E) and the maximum reweighted second smallest eigenvalue λ₂\* of the Laplacian matrix.”

**Sources:**

- [Tsz Chiu Kwok, Lap Chi Lau, Kam Chuen Tung, Cheeger Inequalities for Vertex Expansion and Reweighted Eigenvalues, arXiv:2203.06168 (2022)](https://arxiv.org/abs/2203.06168)

### Graphons with the same spectrum are those with equal cycle densities

**Remember:** Cycle densities are power sums of the nonzero spectrum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C80. arXiv math.CO, math.SP. Level 4: research.

**Definition.** A graphon W, a symmetric measurable function from \[0,1\]² to \[0,1\], acts on L²\[0,1\] by sending f to x ↦ ∫ W(x,y)f(y) dy. Two graphons are cospectral if their operators have the same nonzero eigenvalues with multiplicity. The k-cycle density, the integral of W(x₁,x₂)W(x₂,x₃)⋯W(xₖ,x₁), is the trace of the kth power, the sum of λᵏ over these eigenvalues.

**Problem.** Two graphons are cospectral exactly when their k-cycle densities agree for every k &gt; 3. Equality for infinitely many odd and infinitely many even k already suffices.

**How the definition helps.** Each cycle density is a power sum of the nonzero eigenvalues, so cospectral graphons have equal cycle densities (our own explanation). The converse is the work: one proves that these power sums determine the nonzero eigenvalues with multiplicity.

**Paper or page:** [On cospectral graphons](https://arxiv.org/abs/2411.13229v1), [On cospectral graphons](https://arxiv.org/abs/2411.13229v1), [On cospectral graphons](https://arxiv.org/abs/2411.13229v1). It says: “As in the graph case, we give three equivalent definitions: by equality of spectra, by equality of cycle densities, and by a unitary transformation.”

**Sources:**

- [Jan Hladký, Daniel Iľkovič, Jared León, Xichao Shu, On cospectral graphons, arXiv:2411.13229 (2024)](https://arxiv.org/abs/2411.13229v1)

### The 1-Laplacian makes Cheeger's constant an exact eigenvalue

**Remember:** Absolute values, not squares, turn Cheeger's bounds into an equality.

*Makes the theorem clean to state or prove.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 35P30. arXiv math.SP, math.CO. Level 4: research.

**Definition.** The 1-Laplacian uses absolute values instead of squares: I(x) sums \|xᵤ − xᵥ\| over edges uv, and J(x) sums deg(v)\|xᵥ\| over vertices. A real λ is an eigenvalue if 0 ∈ ∂I(x) − λ∂J(x) for some nonzero x, with ∂ the convex subdifferential. For nonempty S with at most half the total degree, the Cheeger constant minimizes I/J on the indicator of S: cut size over degree sum.

**Problem.** For every finite connected graph with at least two vertices, the first positive 1-Laplacian eigenvalue equals its Cheeger constant.

**How the definition helps.** The coarea formula writes I(x) as an integral of cut sizes of the threshold sets of x (our own explanation). So if x has degree-weighted median zero, then I(x)/J(x) is at least the Cheeger constant (our own). The graph 1-Laplacian Cheeger theorem then identifies the Cheeger constant with the first positive eigenvalue.

**Paper or page:** [Spectrum of the 1-Laplacian and Cheeger's constant on graphs](https://arxiv.org/abs/1412.1150), [Spectrum of the 1-Laplacian and Cheeger's constant on graphs](https://arxiv.org/abs/1412.1150). It says: “Cheeger's constant, which has only some upper and lower bounds in linear spectral theory, equals to the first non-zero Δ₁ eigenvalue for connected graphs.”

**Sources:**

- [Kung Ching Chang, Spectrum of the 1-Laplacian and Cheeger's constant on graphs, arXiv:1412.1150 (2014)](https://arxiv.org/abs/1412.1150)
- [K. C. Chang, Spectrum of the 1-Laplacian and Cheeger's Constant on Graphs, J. Graph Theory 81, no. 2, 167–207 (2015)](https://doi.org/10.1002/jgt.21871)

### Triangular rank-one perturbations of Laplacians give short spanning-tree counts

**Remember:** Turn the tree-count determinant into a diagonal product.

*Makes the theorem clean to state or prove.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C30, 05C05. arXiv math.CO. Level 4: research.

**Definition.** The weighted Laplacian L is the diagonal matrix of weighted degrees minus the weighted adjacency matrix. It admits a triangular rank-one perturbation if L + uvᵀ is triangular for some vectors u, v and vertex order. Then det(L + uvᵀ) is the product of its diagonal entries.

**Problem.** If L + uvᵀ is triangular and ∑u and ∑v are nonzero, the weighted spanning-tree count is its diagonal product divided by (∑u)(∑v). Threshold and Ferrers graphs admit such perturbations, which gives short proofs of their spanning-tree formulas.

**How the definition helps.** The matrix-tree theorem gives det(L + uvᵀ) = τ(∑u)(∑v), with τ the weighted spanning-tree count (our own), and triangularity makes this determinant the diagonal product. The work is to find the vertex order and the two vectors. The paper finds them for threshold and Ferrers graphs, and shows they exist exactly for special 2-threshold graphs.

**Paper or page:** [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1), [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1), [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1), [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1). It says: “We present new short proofs of known spanning tree enumeration formulae for threshold and Ferrers graphs by showing that the Laplacian matrices of such graphs admit triangular rank-one perturbations.”

**Sources:**

- [Christian Go, Zhong Xuan Khwa, Xinyu Luo, Matthew T. Stamps, Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians, arXiv:2103.13596 (2021)](https://arxiv.org/abs/2103.13596v1)
- [Christian Go, Zhong Xuan Khwa, Xinyu Luo and Matthew T. Stamps, Spanning tree enumeration and nearly triangular graph Laplacians, Discrete Applied Mathematics 320 (2022), 356–369](https://doi.org/10.1016/j.dam.2022.04.022)

### Level-one Lasserre equivalence means equal homomorphism counts from outerplanar graphs

**Remember:** Equal counts of maps from every outerplanar graph.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 90C22. arXiv math.CO, cs.CC. Level 4: research.

**Definition.** Graphs G and H are homomorphism indistinguishable over outerplanar graphs if every outerplanar graph has equally many edge-preserving vertex maps to G and to H. An outerplanar graph has a plane drawing with every vertex on the outer face.

**Problem.** The Lasserre hierarchy is a sequence of semidefinite programs that test whether two graphs are isomorphic. Its first level, without nonnegativity constraints, fails to separate G and H exactly when they are homomorphism indistinguishable over outerplanar graphs.

**How the definition helps.** The definition turns the failure of a semidefinite program into equal counts of maps from one familiar class of graphs. The paper does the hard part: it matches each level of the hierarchy with a class of labelled graphs. At level one, their underlying graphs are exactly the outerplanar graphs.

**Paper or page:** [Lasserre Hierarchy for Graph Isomorphism and Homomorphism Indistinguishability](https://arxiv.org/abs/2302.10538v3), [Lasserre Hierarchy for Graph Isomorphism and Homomorphism Indistinguishability](https://arxiv.org/abs/2302.10538v3). It says: “The class of unlabelled graphs underlying an element of ℒ₁ coincides with the class of outerplanar graphs.”

**Sources:**

- [David E. Roberson, Tim Seppelt, Lasserre Hierarchy for Graph Isomorphism and Homomorphism Indistinguishability, arXiv:2302.10538 (2024). TheoretiCS, Volume 3 (September 2, 2024) theoretics:12321](https://arxiv.org/abs/2302.10538v3)

### Signing edges by direction turns pushable maps into signed graph homomorphisms

**Remember:** Reversing arcs across a cut is flipping signs across that cut.

*True by definition. Confidence: medium.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 05C20, 05C22. arXiv math.CO. Level 4: research.

**Definition.** Turn an oriented bipartite graph with parts U and W into a signed graph: an arc from U to W gets sign +, and an arc from W to U gets sign −. Then pushing a vertex set X, which reverses every arc between X and the rest, is exactly switching X, which negates the signs of those edges.

**Problem.** A vertex map between two oriented bipartite graphs is a pushable homomorphism exactly when it is a homomorphism of their signed graphs. A signed homomorphism preserves edges and signs after some switching.

**How the definition helps.** Each push of the source is the switch of the same vertex set, so the two existence tests match (our own argument). The map may exchange the target parts on a connected component, which reverses every sign there. Switching one whole bipartition class of that component corrects this.

**Paper or page:** [On fundamental results for pushable homomorphisms of oriented graphs](https://arxiv.org/abs/2310.07227v2), [On fundamental results for pushable homomorphisms of oriented graphs](https://arxiv.org/abs/2310.07227v2). It says: “We build a one-to-one correspondence between the equivalence classes of oriented and signed bipartite graphs.”

**Sources:**

- [Tapas Das, Pavan P D, Sagnik Sen, S Taruni, On fundamental results for pushable homomorphisms of oriented graphs, arXiv:2310.07227 (2024)](https://arxiv.org/abs/2310.07227v2)

### Tree homomorphism counts capture colour refinement

**Remember:** Colour refinement counts maps from trees and nothing more.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 68R10. arXiv cs.DS, cs.DM. Level 4: research.

**Definition.** Describe a graph G by its homomorphism counts Hom(F,G), the numbers of vertex maps from F to G that send edges to edges, one count for each graph F. Two graphs are homomorphism-indistinguishable over a class when these counts agree for every F in the class.

**Problem.** Colour refinement starts with one colour and repeatedly recolours each vertex by its old colour and the multiset of its neighbours' colours. It fails to distinguish two finite graphs exactly when they are homomorphism-indistinguishable over finite trees.

**How the definition helps.** After k rounds, a vertex colour records the tree of walks of length k from it, and tree homomorphism counts carry the same information (our own summary). The proof of the equivalence uses Lovász's theory of homomorphism counts. The paper lifts this to treewidth k and the k-dimensional Weisfeiler–Leman algorithm.

**Paper or page:** [Lovász Meets Weisfeiler and Leman](https://arxiv.org/abs/1802.08876). It says: “We prove that two graphs G and H are indistinguishable by the color refinement algorithm if and only if, for all trees T, the number Hom(T,G) of homomorphisms from T to G equals the corresponding number Hom(T,H) for H.”

**Sources:**

- [Holger Dell, Martin Grohe, Gaurav Rattan, Lovász Meets Weisfeiler and Leman, arXiv:1802.08876 (2018)](https://arxiv.org/abs/1802.08876)

### Even or infinite cuts characterise cycle partitions of infinite graphs

**Remember:** In infinite graphs, test cuts, not degrees, and allow infinite cuts.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C63 (Infinite graphs), 05C20, 05C45. arXiv math.CO. Level 4: research.

**Definition.** A cut is the set of edges with exactly one endpoint in a chosen vertex set. A cycle partition puts every edge in exactly one finite cycle, and each finite cycle crosses every cut an even number of times.

**Problem.** An undirected graph admits a cycle partition exactly when each finite cut has even size.

**How the definition helps.** Each cycle meets a cut evenly, so every finite cut of a graph with a cycle partition is even. Nash-Williams’ cycle decomposition theorem supplies the converse. Testing cuts rather than degrees excludes the two-way infinite path, whose degrees are even but which has single-edge cuts (our own example).

**Paper or page:** [On partitioning the edges of an infinite digraph into directed cycles](https://arxiv.org/abs/1704.08830). It says: “Nash-Williams proved that for an undirected graph G the set E(G) can be partitioned into cycles if and only if every cut has either even or infinite number of edges.”

**Sources:**

- [Attila Joó, On partitioning the edges of an infinite digraph into directed cycles, Advances in Combinatorics (2021)](https://doi.org/10.19086/aic.18702)

### Pair coverage equates hypergraph densities

**Remember:** Every pair shares an edge, so blow-ups never create a copy.

*Rules out counterexamples.* MSC 05C65 (Hypergraphs), 05C35. arXiv math.CO. Level 4: research.

**Definition.** An r-uniform hypergraph F covers pairs when every two of its vertices lie in a common edge. So in a blow-up, where each vertex becomes a class of copies, a copy of F uses distinct classes, and blow-ups of F-free hypergraphs stay F-free. The Lagrangian density is the supremum, over F-free hypergraphs and vertex weights summing to one, of r! times the sum over edges of the weight products.

**Problem.** If an r-uniform hypergraph F covers pairs, its Turán density equals its Lagrangian density. The Turán density is the limiting largest edge fraction of F-free hypergraphs.

**How the definition helps.** Blow up an F-free hypergraph with class sizes proportional to the weights: it stays F-free, and its edge density tends to r! times the weighted sum (our own). Uniform weights give the reverse bound (our own). Without pair coverage equality fails: graphs without a two-edge path are matchings of density zero, but one edge with equal weights gives one half (our own).

**Paper or page:** [Lagrangian densities of some 3-uniform hypergraphs](https://arxiv.org/abs/2209.13250v1). It says: “In particular, if F covers pairs, then π(F) = πλ(F).”

**Sources:** none listed. No primary source with a working link was found.

### Vertex-extendability reduces hypergraph stability to checking one vertex

**Remember:** If H minus one vertex fits the pattern, H fits too.

*Makes the theorem clean to state or prove.* MSC 05C65 (Hypergraphs), 05C35. arXiv math.CO. Level 4: research.

**Definition.** Fix an r-uniform forbidden family with Turán density π and a target class C. The family is vertex-extendable if some ε &gt; 0 and N make every family-free H on n ≥ N vertices with minimum degree ≥ (π/(r−1)! − ε)n<sup>(r−1)</sup> pass a test. The test: if H − v lies in a member of C for some vertex v, then H does too.

**Problem.** Suppose the forbidden family has positive Turán density, blowing up vertices keeps hypergraphs free of it, and the target class is closed under deleting vertices. Then symmetrized stability and vertex-extendability together give minimum-degree stability.

**How the definition helps.** Vertex-extendability means a failure of the target structure cannot hide behind one deleted vertex (our own explanation). The paper’s stability theorem combines this one-vertex test with stability for symmetrized hypergraphs to give minimum-degree stability.

**Paper or page:** [A unified approach to hypergraph stability](https://arxiv.org/abs/2104.00167v2), [A unified approach to hypergraph stability](https://arxiv.org/abs/2104.00167v2). It says: “We illustrate our approach by giving new short proofs of hypergraph stability results of Pikhurko, Hefetz-Keevash, Brandt-Irwin-Jiang, Bene Watts-Norin-Yepremyan and others.”

**Sources:**

- [Xizhi Liu, Dhruv Mubayi, Christian Reiher, A unified approach to hypergraph stability, arXiv:2104.00167 (2022). J. Combin. Theory Ser. B 158 (2023), 36-62](https://arxiv.org/abs/2104.00167v2)

### Subtracting labels from their caps turns packing problems into domination problems

**Remember:** Subtract every label from its cap.

*True by definition.* MSC 05C69 (Vertex subsets with special properties (dominating sets, independent sets, cliques, etc.)), 05C70. arXiv math.CO. Level 4: research.

**Definition.** On a finite graph, fix nonnegative integer caps u(v) and bounds k(v), and use integer labels 0 ≤ f(v) ≤ u(v). A packing needs f(N\[v\]) ≤ k(v) at every vertex v, where N\[v\] is v with its neighbours and f(N\[v\]) the sum of labels there, and a domination function needs f(N\[v\]) ≥ k(v). The complement u(v) − f(v) is again a label, and its sum over N\[v\] is u(N\[v\]) − f(N\[v\]).

**Problem.** Put k′(v) = u(N\[v\]) − k(v), and let u(V) be the sum of all caps. Then the largest total of a packing for bounds k equals u(V) minus the smallest total of a domination function for bounds k′.

**How the definition helps.** Complementing labels turns each packing for k into a domination function for k′ and back, because u(N\[v\]) − f(N\[v\]) ≥ k′(v) exactly when f(N\[v\]) ≤ k(v) (our own). The totals of f and its complement add to u(V), so the largest of one is u(V) minus the smallest of the other.

**Paper or page:** [A unified approach for domination and packing problems in graphs](https://arxiv.org/abs/2501.14789v1), [A unified approach for domination and packing problems in graphs](https://arxiv.org/abs/2501.14789v1). It says: “Interestingly, their associated optimization problems turn out to be equivalent, providing insight to explain the observed coincidences in computational complexity results for graph classes”

**Sources:**

- [E. Hinrichsen, G. Nasini, N. Vansteenkiste, A unified approach for domination and packing problems in graphs, arXiv:2501.14789 (2025)](https://arxiv.org/abs/2501.14789v1)

### Unimodular matchings make optimal matching on infinite random trees well posed

**Remember:** On an infinite tree, maximize the expected weight at the root edge.

*Makes the theorem clean to state or prove.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C80, 60J80. arXiv math.PR, math.CO. Level 4: research.

**Definition.** A unimodular matching is a random set of edges with no common endpoints whose joint law with an edge-rooted tree makes the root edge typical. That is, for every nonnegative invariant transport, the root's expected mass sent equals its expected mass received. An optimal one maximizes the expected weight of the root edge counted when matched, among such laws with the given weighted tree.

**Problem.** Take an edge-rooted unimodular Bienaymé–Galton–Watson tree whose offspring law has finite mean. Independently of the tree, give its edges independent identically distributed integrable weights with an atomless law. Then an optimal unimodular matching exists and its law is unique.

**How the definition helps.** On an infinite tree the total matched weight can be infinite or undefined, so the definition optimizes the expected matched weight at a typical edge instead (our own explanation). The mass transport condition makes this root quantity stand for the whole matching. The paper’s optimal matching theorem supplies existence and uniqueness in law.

**Paper or page:** [Optimal Unimodular Matching](https://arxiv.org/abs/2407.03141v2), [Optimal Unimodular Matching](https://arxiv.org/abs/2407.03141v2). It says: “in law, there is a unique optimal unimodular matching for a given unimodular tree.”

**Sources:**

- [Nathanaël Enriquez, Mike Liu, Laurent Ménard, Vianney Perchet, Optimal Unimodular Matching, arXiv:2407.03141 (2025)](https://arxiv.org/abs/2407.03141v2)

### Bidimensionality removes apices and vortices from the Graph Minors Structure Theorem

**Remember:** Measure the bad part by bidimensionality, and apices and vortices disappear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C83 (Graph minors), 05C10. arXiv math.CO. Level 4: research.

**Definition.** The bidimensionality of a vertex set X is the largest k such that the graph has a k by k grid minor rooted on X, or zero if there is none. Rooted means the grid vertices get disjoint connected branch sets that each meet X, with an edge between the sets of adjacent grid vertices.

**Problem.** Every graph excluding Kₖ as a minor has a tree decomposition with the following property. In each part, deleting a vertex set of bounded bidimensionality leaves a graph embeddable in a surface of bounded Euler genus. Both bounds depend only on k.

**How the definition helps.** One set of bounded bidimensionality per part replaces the separate lists of apices and vortices (our own reading). The paper’s version of the Graph Minors Structure Theorem supplies the decomposition and both bounds.

**Paper or page:** [The Graph Minors Structure Theorem through Bidimensionality](https://arxiv.org/abs/2306.01724). It says: “This notion allows for the following version of the Graph Minors Structure Theorem (GMST) that avoids the use of apices and vortices”

**Sources:**

- [Dimitrios M. Thilikos and Sebastian Wiederrecht, The Graph Minors Structure Theorem through Bidimensionality, arXiv:2306.01724 (2023)](https://arxiv.org/abs/2306.01724)

### Half-integral packing makes the Erdős–Pósa property hold for every graph

**Remember:** Allow each vertex to serve two models.

*Makes the theorem clean to state or prove.* MSC 05C83 (Graph minors), 05C35. arXiv math.CO. Level 4: research.

**Definition.** A half-integral packing of models of H in G lets each vertex of G lie in at most two models. A model of H is a choice of disjoint connected vertex sets of G, one for each vertex of H, with an edge between the sets of adjacent vertices.

**Problem.** For each finite graph H there is a function f such that the following holds for every positive integer k and finite graph G. Either G has a half-integral packing of k models of H, or at most f(k) vertices meet every model.

**How the definition helps.** Allowing each host vertex two uses gives the packing-or-cover statement for every H, while disjoint models give it only for planar H (our own explanation). Liu’s half-integral Erdős–Pósa theorem supplies the function f.

**Paper or page:** [Delineating Half-Integrality of the Erdős-Pósa Property for Minors: the Case of Surfaces](https://arxiv.org/abs/2406.16647v1). It says: “Recently, Liu confirmed a conjecture of Thomas and showed that every graph has the half-integral Erdős-Pósa property for minors.”

**Sources:**

- [Christophe Paul, Evangelos Protopapas, Dimitrios M. Thilikos, Sebastian Wiederrecht, Delineating Half-Integrality of the Erdős-Pósa Property for Minors: the Case of Surfaces, arXiv:2406.16647 (2024)](https://arxiv.org/abs/2406.16647v1)
- [Neil Robertson and Paul Seymour, Graph minors. V. Excluding a planar graph, Journal of Combinatorial Theory, Series B (1986)](https://doi.org/10.1016/0095-8956(86)90030-4)

### Requiring pairwise shared vertices makes strict brambles detect cycles exactly

**Remember:** Members must share vertices, and in forests they share one.

*Rules out counterexamples.* MSC 05C83 (Graph minors), 05C38. arXiv math.CO. Level 4: research.

**Definition.** A strict bramble is a nonempty family of connected subgraphs in which every two members share a vertex, and its order is the least number of vertices meeting every member. An ordinary bramble also lets two members merely touch by an edge.

**Problem.** A finite simple graph with at least one vertex is a forest exactly when every strict bramble has order one.

**How the definition helps.** In a forest the members are subtrees, and pairwise-intersecting subtrees share a vertex by the Helly property, so the order is one. In a cycle, split the vertices into three nonempty consecutive blocks; the three unions of two blocks meet pairwise but share no vertex (our own construction). Ordinary brambles already fail on one edge, whose two endpoints touch but share no vertex (our own example).

**Paper or page:** [On Strict Brambles](https://arxiv.org/abs/2201.05783v1). It says: “The strict bramble number of G can be seen as a way to extend the notion of acyclicity, departing from the fact that (non-empty) acyclic graphs are exactly the graphs where every strict bramble has order one.”

**Sources:**

- [Emmanouil Lardas, Evangelos Protopapas, Dimitrios M. Thilikos, Dimitris Zoros, On Strict Brambles, arXiv:2201.05783 (2022)](https://arxiv.org/abs/2201.05783v1)
- [Emmanouil Lardas, Evangelos Protopapas, Dimitrios M. Thilikos and Dimitris Zoros, On Strict Brambles, Graphs and Combinatorics 39 (2023), article 24](https://doi.org/10.1007/s00373-023-02618-y)

### Requiring nonempty families makes the cross-intersecting size bound nontrivial

**Remember:** An empty family meets everything, so both families need members.

*Rules out counterexamples.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 4: research.

**Definition.** Two families of sets cross-intersect when every set in one meets every set in the other. Requiring both families to be nonempty rules out the vacuous pair of all k-sets with the empty family.

**Problem.** For nonempty cross-intersecting families A and B of k-subsets of an n-set with n ≥ 2k, \|A\| + \|B\| is at most the larger of two totals. Either both families are all k-sets through one point, or A is one set F and B is all k-sets meeting F.

**How the definition helps.** Without nonemptiness, all k-sets with the empty family would beat both constructions; for n = 5 and k = 2 it totals ten against eight (our own example). The Hilton–Milner bound for two nonempty uniform families supplies the upper bound.

**Paper or page:** [Non-empty pairwise cross-intersecting families](https://arxiv.org/abs/2306.03473v2). It says: “If 𝒜₁, 𝒜₂, …, 𝒜ₜ ⊂ \[n\] choose k are non-empty pairwise cross-intersecting families”

**Sources:**

- [Yang Huang, Yuejian Peng, Non-empty pairwise cross-intersecting families, arXiv:2306.03473 (2024)](https://arxiv.org/abs/2306.03473v2)

### Double posets make the antipode of quasisymmetric functions reverse one order

**Remember:** The antipode reverses the first order, up to the sign (−1)<sup>\|E\|</sup>.

*Makes the theorem clean to state or prove.* MSC 05E05 (Symmetric functions and generalizations), 06A11, 16T05. arXiv math.CO. Level 4: research.

**Definition.** A double poset is a finite set E with two strict partial orders. Its generating function sums the monomial ∏ x\_φ(e) over all maps φ from E to positive integers that weakly increase along the first order and strictly increase on pairs reversed by the second order.

**Problem.** If the second order is total, the antipode sends the generating function to (−1)<sup>\|E\|</sup> times the generating function with the first order reversed.

**How the definition helps.** Reversing the first order gives another double poset, so the answer is again a generating function of the same kind (our own explanation). The Malvenuto–Reutenauer antipode formula supplies the sign and this identification.

**Paper or page:** [Double posets and the antipode of QSym](https://arxiv.org/abs/1509.08355v3), [Double posets and the antipode of QSym](https://arxiv.org/abs/1509.08355v3). It says: “We prove a formula for the antipode of this function that holds under certain conditions (which are satisfied when the second order of the double poset is total, but also in some other cases)”

**Sources:**

- [Darij Grinberg, Double posets and the antipode of QSym, arXiv:1509.08355 (2017). The Electronic Journal of Combinatorics 24(2) (2017), \#P2.22 (published with minor changes to Section 2 and without ancillary file)](https://arxiv.org/abs/1509.08355v3)

### Orbit counts constrain cyclic sieving

**Remember:** Evaluations count fixed points, and fixed points come in whole orbits.

*Rules out counterexamples.* MSC 05E18 (Group actions on combinatorial structures), 05A15. arXiv math.CO. Level 4: research.

**Definition.** Let a cyclic group of order m, generated by g, act on a finite set X, and let ω be a primitive m-th root of unity. A polynomial f exhibits cyclic sieving if f(ωʲ) is the number of points of X fixed by gʲ, for every integer j.

**Problem.** For each divisor d of m, sum μ(d/j)f(ωʲ) over positive divisors j of d, using the Möbius function μ. Cyclic sieving requires every such sum to be nonnegative. Nonnegative integer evaluations at roots of unity alone do not suffice.

**How the definition helps.** The points fixed by gʲ are those in orbits whose size divides j, so Möbius inversion makes the sum the number of points in orbits of size d (our own argument). For m = 4, the polynomial 4 + 2q + 2q³ takes the values 8, 4, 0, 4 at 1, i, −1, −i. This is impossible, since the 4 points fixed by g would also be fixed by g².

**Paper or page:** [Skew Schur polynomials and cyclic sieving phenomenon](https://arxiv.org/abs/2112.12394v3). It says: “Then there exists an action of a cyclic group C of order m on X such that (X, C, f(q)) exhibits the cyclic sieving phenomenon if and only if for each d ∣ m, ∑\[j ∣ d\] μ(d/j)f(ωₘʲ) ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### A useless edge makes both path complexes cones, hence contractible

**Remember:** An edge on no path can join every face.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 05C38. arXiv math.CO, math.AT. Level 4: research.

**Definition.** Fix vertices s ≠ t in a digraph. An edge is useless if no directed s-to-t path uses it, so adding it to or removing it from an edge set never changes whether that set contains such a path. The path-free complex has the edge sets containing no such path, and the path-missing complex has those whose complement contains one.

**Problem.** If the graph has a useless edge e and some directed path from s to t, then both complexes are cones with apex e. So both complexes are contractible.

**How the definition helps.** Adding e to a face of either complex leaves a face, so every face joins with e, which is what a cone with apex e means (our own explanation). A cone is contractible.

**Paper or page:** [The path-missing and path-free complexes of a directed graph](https://arxiv.org/abs/2102.07894v3). It says: “Assume that G has a useless edge e. Then, both 𝒫ℱ(G) and 𝒫ℳ(G) are cones with apex e.”

**Sources:**

- [Darij Grinberg, Lukas Katthän, Joel Brewster Lewis, The path-missing and path-free complexes of a directed graph, arXiv:2102.07894 (2025)](https://arxiv.org/abs/2102.07894v3)

### Effective resistance as an orthogonal projection makes Foster's theorem a trace identity

**Remember:** The trace of a projection counts the directions it keeps.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 05C50, 55U10. arXiv math.CO, math.AT. Level 4: research.

**Definition.** On the real p-chains of a positively weighted finite simplicial complex, let P be the orthogonal projection, in the weighted inner product, onto the complement of the kernel of the boundary map. The effective resistance of a p-simplex σ is r(σ) = P(σ,σ)/w(σ), so w(σ)r(σ) is a diagonal entry of P.

**Problem.** For a finite weighted simplicial complex and each degree p, the sum of w(σ)·r(σ) over all p-simplices σ equals the rank of the boundary map. Here w(σ) is the weight and r(σ) the effective resistance of σ. For a graph and p = 1 this is Foster's theorem: the sum equals the number of vertices minus the number of connected components.

**How the definition helps.** The sum of w(σ)r(σ) is the trace of P, and the trace of a projection is its rank (our own explanation). That rank is the codimension of the boundary kernel, which is the rank of the boundary map. The paper’s resistance operator theorem supplies the projection formula.

**Paper or page:** [Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties](https://arxiv.org/abs/2511.10749v1), [Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties](https://arxiv.org/abs/2511.10749v1). It says: “The p-th effective resistance operator 𝒯ₚ = ∂ₚ∗(∂ₚ∗)⁺ on chains is the orthogonal projection”

**Sources:**

- [Inés García-Redondo, Claudia Landi, Sarah Percival, Anda Skeja, Bei Wang, Ling Zhou, Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties, arXiv:2511.10749 (2025)](https://arxiv.org/abs/2511.10749v1)
