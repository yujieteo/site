### Counting fixed points as cycles gives Cayley's distance formula

**Remember:** Count fixed points as cycles, and distance is n minus the cycles.

*Rules out counterexamples. Confidence: medium.* MSC 05A05 (Permutations, words, matrices), 20B30. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The Cayley distance between two permutations of n elements is the least number of swaps of two elements that turns one into the other. A cycle of a permutation is one of its orbits, written as a loop of elements. A fixed point counts as a cycle of length 1.

**Problem.** The Cayley distance between π and σ equals n minus the number of cycles of π∘σ⁻¹.

**How the definition helps.** With fixed points included, the identity has n cycles and distance zero (our own). Each swap splits one cycle or merges two, so reaching the identity requires at least n minus the initial cycle count. Repeatedly splitting a nontrivial cycle attains that bound (our own).

**Paper or page:** [Improving the Gilbert-Varshamov bound for permutation Codes in the Cayley metric and Kendall $τ$-Metric](https://arxiv.org/abs/2404.15126). It says: “The Cayley distance distance dC(π,σ) between π and σ equals n minus the number of permutation cycles in π∘σ⁻¹”

**Sources:**

- [The Nguyen, Improving the Gilbert–Varshamov bound for permutation codes in the Cayley metric and Kendall τ-metric, arXiv:2404.15126 (2024)](https://arxiv.org/abs/2404.15126)

### Cycle lengths give permutation sign

**Remember:** A cycle contributes a minus sign exactly when its length is even.

*True by definition.* MSC 05A05 (Permutations, words, matrices). arXiv math.CO. Level 1: early undergraduate.

**Definition.** For a permutation of a finite set, count the cycles of even length in its disjoint cycle decomposition. Define its sign as +1 when this count is even and −1 when it is odd. The usual swap definition counts swaps in an expression for the permutation.

**Problem.** Composing a permutation with a swap reverses its sign. Any expression as k swaps therefore gives sign (−1)ᵏ. All such expressions have the same parity of length.

**How the definition helps.** The cycle definition makes the sign readable directly from the cycle lengths, so it is well defined at once. A swap merges two cycles or splits one cycle into two. The combined length stays the same, so the number of even cycles changes by one. Each swap therefore reverses the sign.

**nLab:** [signature of a permutation](https://ncatlab.org/nlab/show/signature+of+a+permutation). It says: “Each cycle of period k contributes a sign (−1)ᵏ⁻¹, and the overall sign is the product of these contributions taken over all the cycles.”

**Sources:** none listed. No primary source with a working link was found.

### Permutation matrices compose on basis vectors

**Remember:** Follow one basis vector through both moves.

*True by definition.* MSC 05A05 (Permutations, words, matrices). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define the matrix of a permutation σ by sending the jth standard basis vector to the one in position σ(j). Equivalently, column j has a 1 in row σ(j) and zeros elsewhere.

**Problem.** The matrix for applying τ and then σ equals the matrix of σ times the matrix of τ.

**How the definition helps.** The basis-vector definition makes matrix multiplication follow the two moves in order (our own). Each basis vector first moves under τ and then under σ, so the product is the matrix of the composed permutation (our own). The work moves to checking that the column pattern implements the prescribed moves (our own).

**Wikipedia:** [Permutation matrix](https://en.wikipedia.org/wiki/Permutation_matrix). It says: “pre-multiplying just once by the combined Cσ∘τ.”

**Sources:** none listed. No primary source with a working link was found.

### Reading a permutation backward gives Eulerian symmetry

**Remember:** Reading backward trades every fall for a rise.

*True by definition.* MSC 05A05 (Permutations, words, matrices), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A descent is a position whose next entry is smaller. Define A(n,k) to count permutations of the numbers 1 through n with exactly k descents.

**Problem.** For n ≥ 1 and 0 ≤ k &lt; n, A(n,k) equals A(n,n − 1 − k).

**How the definition helps.** Reversing a permutation exchanges its k descents with its n − 1 − k rises. Reversing again recovers the original permutation. In our own comparison, starting with the algebraic coefficients in Worpitzky’s identity requires proving that they count permutations by descents.

**Wikipedia:** [Eulerian number](https://en.wikipedia.org/wiki/Eulerian_number). It says: “Fully reversing a permutation with k ascents creates another permutation in which there are n-k-1 ascents.”

**Sources:** none listed. No primary source with a working link was found.

### Binomial coefficients outside Pascal's triangle are zero

**Remember:** There are no ways to choose −1 or n + 1 things from n things.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Let n be a non-negative integer, and let k be an integer with k &lt; 0 or k &gt; n. Then C(n, k) = 0 by definition. This matches the number of k-element subsets of an n-element set, which is zero.

**Problem.** For every integer n ≥ 1 and every integer k, Pascal’s rule reads C(n,k) = C(n−1,k−1) + C(n−1,k), including the boundary cases.

**How the definition helps.** Partition the k-element subsets according to whether they contain a fixed element (our own). The two counts give C(n − 1, k − 1) and C(n − 1, k), including zero for impossible sizes.

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “this causes most binomial coefficient identities to fail, and thus is not widely used by the majority of definitions”

**Sources:** none listed. No primary source with a working link was found.

### Binomial coefficients with any top number give Newton's series

**Remember:** Keep the falling product on top and the top number may be anything.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 30B10. arXiv math.CO, math.CA. Level 1: early undergraduate.

**Definition.** For any number α and any non-negative integer k, C(α, k) = α(α − 1)⋯(α − k + 1)/k!. The top of the fraction is a product of k factors, each 1 less than the one before. This multiplicative formula makes sense for negative, fractional or complex α.

**Problem.** For complex α and \|X\| &lt; 1, Newton’s binomial series gives (1 + X)ᵅ = ∑ₖ₌₀<sup>∞</sup> C(α,k) Xᵏ. The power uses the analytic branch with value 1 at X = 0.

**How the definition helps.** The falling product gives the same coefficient formula for all complex α. For a nonnegative integer α, every coefficient beyond α vanishes. Newton’s binomial series theorem supplies the analytic identity on \|X\| &lt; 1 (our own).

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “If α is a nonnegative integer n, then all terms with k &gt; n are zero, and the infinite series becomes a finite sum, thereby recovering the binomial formula.”

**Sources:** none listed. No primary source with a working link was found.

### Choosing letters makes the multinomial theorem a count of words

**Remember:** Each factor chooses one letter, and the word records all choices.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A multinomial coefficient counts words with specified numbers of copies of each letter. The factorial formula counts the same words by first treating all copies as distinct.

**Problem.** In the nth power of a sum of distinct variables, each coefficient equals the multinomial coefficient for its exponents. The exponents are nonnegative integers with sum n.

**How the definition helps.** Each factor supplies one letter, so its position in the word records exactly which variable we chose. In our own count, permuting identical letters leaves the word unchanged. Dividing n! by the factorial of each letter count therefore gives the coefficient.

**nLab:** [multinomial coefficient](https://ncatlab.org/nlab/show/multinomial+coefficient). It says: “This number is the number of ways of drawing k₁ elements and then k₂ elements and so forth from n elements, all in an unordered way.”

**Paper or page:** [Multinomial Theorem](https://proofwiki.org/wiki/Multinomial_Theorem). It says: “(n choose k₁, k₂, …, kₘ) = n!/(k₁! k₂! ⋯ kₘ!) denotes a multinomial coefficient.”

**Sources:** none listed. No primary source with a working link was found.

### Counting ordered blocks factors multinomial coefficients into binomial coefficients

**Remember:** Choose each box from the elements that are still free.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A multinomial coefficient counts divisions of a set into labeled boxes of specified sizes. Boxes may be empty.

**Problem.** A multinomial coefficient is the product of the successive binomial coefficients for choosing each box from the elements still free.

**How the definition helps.** Filling labeled boxes in order breaks one division into successive subset choices. Each binomial coefficient counts the choices for the next box. In our own argument, multiplying counts every division once because its boxes recover those choices. Using the factorial formula instead requires canceling the factorials of the remaining set sizes.

**nLab:** [multinomial coefficient](https://ncatlab.org/nlab/show/multinomial+coefficient). It says: “This number is the number of ways of drawing k₁ elements and then k₂ elements and so forth from n elements, all in an unordered way.”

**Sources:** none listed. No primary source with a working link was found.

### Counting subsets makes binomial coefficients integers

**Remember:** A count of subsets cannot be a fraction.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** For nonnegative integers n and k, define n choose k as the number of k-element subsets of an n-element set. For 0 ≤ k ≤ n, another definition uses n! divided by the product of k! and (n − k)!.

**Problem.** For integers 0 ≤ k ≤ n, the factorial quotient that gives n choose k is an integer.

**How the definition helps.** The subset definition makes integrality immediate because it counts a finite set. The factorial quotient does not display that integrality. The work moves into showing that the quotient equals the subset count. Count ordered choices of k distinct elements, then divide by the k! orders of each subset (our own).

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “This shows in particular that (ⁿₖ) is a natural number for any natural numbers n and k.”

**Paper or page:** [Binomial Coefficient is Integer](https://proofwiki.org/wiki/Binomial_Coefficient_is_Integer). It says: “Then (ⁿₖ) is an integer.”

**Sources:** none listed. No primary source with a working link was found.

### Counting subsets makes Pascal's rule a one-line split

**Remember:** Each subset either contains the chosen element or it does not.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define the binomial coefficient C(n, k) as the number of k-element subsets of an n-element set. The formula C(n, k) = n!/(k!(n − k)!) can serve as another definition.

**Problem.** Let n and k be integers with 0 &lt; k &lt; n. Then C(n, k) = C(n − 1, k − 1) + C(n − 1, k).

**How the definition helps.** Fix one element of the n-element set. Subsets containing it correspond to (k − 1)-element subsets of the remaining set. Subsets missing it correspond to k-element subsets of the remaining set. Adding the two counts gives Pascal’s rule.

**Wikipedia:** [Pascal's rule](https://en.wikipedia.org/wiki/Pascal%27s_rule). It says: “Every subset of k elements either contains X or not.”

**Sources:** none listed. No primary source with a working link was found.

### Counting subsets makes the binomial theorem a matter of choosing factors

**Remember:** Choose x or y from each factor, and count the choices with C(n, k).

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define the binomial coefficient C(n, k) as the number of k-element subsets of an n-element set. The formula C(n, k) = n!/(k!(n − k)!) can serve as another definition.

**Problem.** For every natural number n, (x + y)ⁿ is the sum over k from 0 to n of C(n, k) xⁿ⁻ᵏyᵏ. This holds in every commutative ring.

**How the definition helps.** Distributivity gives one term for each subset of factors supplying y (our own). A subset of size k contributes xⁿ⁻ᵏyᵏ because multiplication commutes. Counting these subsets gives its coefficient C(n,k).

**Wikipedia:** [Binomial theorem](https://en.wikipedia.org/wiki/Binomial_theorem). It says: “C(n, k), either by definition, or by a short combinatorial argument if one is defining C(n, k) as n!/(k! (n−k)!).”

**Sources:** none listed. No primary source with a working link was found.

### Cycles give the Stirling recurrence

**Remember:** The new element starts a cycle or follows an old element.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define the unsigned Stirling number c(n,k) by counting permutations of n elements with k cycles. A fixed element counts as a cycle of length one. The algebraic alternative takes the coefficient of degree k in the product x(x + 1) ⋯ (x + n − 1).

**Problem.** For integers n ≥ 1 and k ≥ 1, c(n + 1,k) = n c(n,k) + c(n,k − 1).

**How the definition helps.** Cycles give two ways to add a new element. It can form a cycle alone or follow any of the n old elements in their cycles. Deleting it recovers the previous permutation in either case. To compare with the coefficient definition, expand the last factor and check that both counts have the same recurrence and starting values.

**Wikipedia:** [Stirling numbers of the first kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_first_kind). It says: “We prove the recurrence relation using the definition of Stirling numbers in terms of permutations with a given number of cycles”

**Sources:** none listed. No primary source with a working link was found.

### Defining binomial coefficients as repeated sums of ones simplifies nested sums

**Remember:** One more row of running totals raises the lower index by one.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A15. arXiv math.CO, math.GM. Level 1: early undergraduate.

**Definition.** Start with a row of ones indexed from zero. Replace each term by the sum of all terms up to it. After k such steps, term n equals C(n + k, k), the number of ways to choose k objects from n + k.

**Problem.** For integers q ≤ n and m ≥ 1, m successive partial sums of a from q through n equal ∑ᵢ₌qⁿ C(n−i+m−1,m−1)aᵢ.

**How the definition helps.** The weight of aᵢ counts chains of m − 1 weakly increasing indices between i and n (our own). Counting these chains takes m − 1 successive running totals of ones at index n − i. The definition gives the claimed coefficient.

**Paper or page:** [Repeated Sums and Binomial Coefficients](https://arxiv.org/abs/2102.12391v2), [Repeated Sums and Binomial Coefficients](https://arxiv.org/abs/2102.12391v2). It says: “In this paper, we introduce a new way of defining binomial coefficients as repeated sums of ones.”

**Sources:**

- [Roudy El Haddad, Repeated Sums and Binomial Coefficients, arXiv:2102.12391v2 (2021)](https://arxiv.org/abs/2102.12391v2)

### Falling factorials simplify finite differences

**Remember:** Shifting the factors leaves only two end factors to subtract.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The falling factorial of length m at x is the product of m consecutive terms x, x − 1, and so on. Define the length-zero product as 1. These polynomials can replace ordinary powers when expanding a polynomial.

**Problem.** Let Fₘ(x) be the falling factorial of length m at x. For m ≥ 1, Fₘ(x + 1) − Fₘ(x) equals m times Fₘ₋₁(x).

**How the definition helps.** The consecutive factors make the two products share all but their end factors (our own). Those end factors differ by m (our own). The work in using this rule for ordinary polynomials moves to changing from ordinary powers to falling factorials (our own).

**Paper or page:** [Forward Difference of Falling Factorial](https://proofwiki.org/wiki/Forward_Difference_of_Falling_Factorial). It says: “Δ(xᵐ̲) = m x⁽ᵐ⁻¹⁾̲”

**Sources:** none listed. No primary source with a working link was found.

### Marked paths explain Pascal’s weights

**Remember:** Mark one right step and choose the rest freely.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 97K20. arXiv math.CO, math.HO. Level 1: early undergraduate.

**Definition.** In row n of Pascal’s triangle, entry k counts paths of n steps, each either down-left or down-right, with exactly k down-right steps. The usual factorial quotient gives the same number.

**Problem.** For n ≥ 1, the sum of k times the entry in column k of row n is n · 2ⁿ⁻¹.

**How the definition helps.** Counting paths turns the weight k into a choice of one marked down-right step. In our own proof, choose its position in n ways. Each remaining step has two choices. To recover the usual factorial formula, count the choices of k down-right positions among n positions.

**Paper or page:** [Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388). It says: “\\sum \\limits <sub>k=0</sub><sup>nk\\cdot</sup> \\binom nk=n\\cdot 2<sup>n-1</sup>”

**Sources:**

- [Regula Krapf, Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388)

### Marking a member gives the binomial absorption identity

**Remember:** Choose the member first or choose the subset first.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** For integers 0 ≤ k ≤ n, define n choose k as the number of k-element subsets of an n-element set. A marked subset has one of its own elements singled out.

**Problem.** For 1 ≤ k ≤ n, k times (n choose k) equals n times (n − 1 choose k − 1).

**How the definition helps.** A marked subset can be chosen in either order. In our own count, choosing the subset first gives k possible marks. Choosing the mark first leaves k − 1 members to select from n − 1 elements. The factorial proof instead cancels the factors on both sides.

**Wikipedia:** [Double counting (proof technique)](https://en.wikipedia.org/wiki/Double_counting_%28proof_technique%29). It says: “Double counting can also be used to prove the following identity related to binomial coefficient”

**Sources:** none listed. No primary source with a working link was found.

### Setting 0! = 1 keeps the binomial formulas exact

**Remember:** There is exactly one way to arrange nothing.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The factorial n! is the product 1·2·…·n. For n = 0 this is the empty product (a product with no factors), which equals 1. So 0! = 1.

**Problem.** For integers 0 ≤ k ≤ n, C(n,k) = n!/(k!(n−k)!). The recurrence n! = n·(n−1)! holds for every integer n ≥ 1. The exponential series eˣ = ∑ₙ≥₀ xⁿ/n! includes its constant term x⁰/0!.

**How the definition helps.** With 0! = 1, these formulas need no special cases at the edges. The number of ways to choose all n elements of an n-element set is n!/(n!·0!) = 1, as it must be. The recurrence holds at n = 1, so a recursion needs only the base case 0. The gamma function, with Γ(n + 1) = n!, gives Γ(1) = 1 with no separate choice.

**Wikipedia:** [Factorial](https://en.wikipedia.org/wiki/Factorial), [Empty product](https://en.wikipedia.org/wiki/Empty_product). It says: “This convention makes many identities in combinatorics valid for all valid choices of their parameters.”

**Sources:** none listed. No primary source with a working link was found.

### Setting 0⁰ = 1 makes the binomial theorem hold at zero

**Remember:** x⁰ is the empty product, so it is 1 for every x.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 13B25. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** In algebra and combinatorics, 0⁰ is defined to be 1. Then the monomial x⁰ is the constant 1 for every value of x, including x = 0.

**Problem.** With 0⁰ = 1, the binomial theorem (1+x)ⁿ = Σ C(n,k)xᵏ holds at x = 0. So do the identities 1/(1−x) = Σ xⁿ and eˣ = Σ xⁿ/n!.

**How the definition helps.** With 0⁰ = 1, polynomial and power series formulas hold at x = 0 with no special case. A polynomial a₀x⁰ + … + aₙxⁿ must give a₀ at 0, and this needs 0⁰ = 1. Limits in analysis are different: the function xʸ has no limit at (0, 0), so 0⁰ stays an indeterminate form for limits.

**Wikipedia:** [Zero to the power of zero](https://en.wikipedia.org/wiki/Zero_to_the_power_of_zero). It says: “Defining 0⁰ = 1 is necessary for many polynomial identities. For example, the binomial theorem (1+x)ⁿ = ∑ₖ₌₀ⁿ C(n,k) xᵏ holds for x = 0 only if 0⁰ = 1.”

**Sources:**

- [D. E. Knuth, Two Notes on Notation, American Mathematical Monthly 99 (1992) 403–422](https://doi.org/10.1080/00029890.1992.11995869)

### A fixed boundary edge turns triangulations into binary trees

**Remember:** Follow the root triangle, then follow its two sides.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A triangulation divides a convex polygon into triangles using diagonals that do not cross. Fix one boundary edge as the root and read the boundary clockwise. A full ordered binary tree has either no children or two ordered children at each vertex.

**Problem.** For n ≥ 1, triangulations of a fixed convex polygon with n + 2 vertices correspond to full ordered binary trees with n branching vertices.

**How the definition helps.** The triangle at the root edge gives two sides in boundary order, one for each child. In our own construction, continue into each smaller polygon and use a leaf for a side with no remaining triangle. In reverse, the number of branching vertices in the first subtree determines the third vertex along the boundary. Repeating this step recovers every diagonal.

**Wikipedia:** [Catalan number](https://en.wikipedia.org/wiki/Catalan_number). It says: “The dark triangle is the root node, the light triangles correspond to internal nodes of the binary trees”

**Sources:** none listed. No primary source with a working link was found.

### Balanced parentheses give the Catalan recurrence

**Remember:** Split at the closing parenthesis that matches the very first opening.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Let C(n) count strings of n opening and n closing parentheses in which every prefix has at least as many openings as closings. This counts the empty string once.

**Problem.** For n ≥ 1, C(n) equals the sum of C(i)C(n−1−i) over the integers i from 0 to n−1.

**How the definition helps.** Balanced strings split uniquely at the closing parenthesis that matches the first opening (our own). If the enclosed string has i pairs, the string after it has n−1−i pairs (our own). Any two balanced strings of those sizes give one such string (our own). Agreement with the binomial formula requires another argument, such as reflecting the first unbalanced prefix (our own).

**nLab:** [Catalan number](https://ncatlab.org/nlab/show/Catalan+number). It says: “strings consisting of n well-balanced pairs of parentheses (also known as "Dyck words")”

**Sources:** none listed. No primary source with a working link was found.

### Bars make allocation counts binomial

**Remember:** Choose the bars and the stars fill the remaining positions.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Describe an ordered allocation of n identical objects to k labeled bins as a row of n stars and k − 1 bars. The bars mark bin boundaries. Allow empty runs of stars to represent empty bins.

**Problem.** For integers n ≥ 0 and k ≥ 1, there are C(n+k−1,k−1) allocations of n identical objects to k labeled bins.

**How the definition helps.** The string definition makes every allocation a choice of bar positions (our own). The work lies in checking the correspondence in both directions, including empty runs at the ends and between two bars (our own).

**Wikipedia:** [Stars and bars (combinatorics)](https://en.wikipedia.org/wiki/Stars_and_bars_%28combinatorics%29). It says: “In terms of configurations involving objects and bins, bins are now allowed to be empty.”

**Sources:** none listed. No primary source with a working link was found.

### Cycles give a short recurrence for derangements

**Remember:** The marked element either pairs with one neighbor or joins a longer cycle.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A permutation rearranges a finite set. Following each element through repeated applications splits the set into loops called cycles. A derangement has no cycle of length one.

**Problem.** Let D(n) count derangements of n elements, including D(0) = 1. For n ≥ 2, D(n) = (n − 1)(D(n − 2) + D(n − 1)).

**How the definition helps.** The cycle containing a marked element tells us how to remove it while leaving a derangement. In our own proof, first choose its successor in n − 1 ways. For a two-element cycle, remove both elements and recover them by restoring the pair. For a longer cycle, remove only the marked element and recover it by inserting it before its chosen successor.

**Paper or page:** [Recurrence Relation for Number of Derangements on Finite Set](https://proofwiki.org/wiki/Recurrence_Relation_for_Number_of_Derangements_on_Finite_Set). It says: “Dₙ = (n − 1)(Dₙ₋₁ + Dₙ₋₂) where D₁ = 0, D₂ = 1.”

**Sources:** none listed. No primary source with a working link was found.

### Derangements count permutations with exactly a given number of fixed points

**Remember:** Choose exactly what stays, then move everything else.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A fixed point is an element that a permutation leaves in place. A derangement has no fixed points. Write D(m) for the number of derangements on m elements, counting the empty permutation once.

**Problem.** For 0 ≤ k ≤ n, exactly (n choose k) × D(n − k) permutations of n elements have k fixed points.

**How the definition helps.** A derangement on the remaining elements guarantees that the selected points are the only fixed points. Each permutation determines its fixed points and its rearrangement of the rest. In our own example, fixing the first of three elements and allowing the identity on the other two would count three fixed points.

**Wikipedia:** [Rencontres numbers](https://en.wikipedia.org/wiki/Rencontres_numbers). It says: “choose the k fixed points out of n”

**Sources:** none listed. No primary source with a working link was found.

### Dyck paths give the Catalan formula by reflection

**Remember:** Reflect the tail of each path that first steps above the diagonal.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A Dyck path runs from (0,0) to (n,n) using unit steps right or up and stays on or below the diagonal. The Catalan number C(n) counts these paths.

**Problem.** For n ≥ 0, C(n) is (2n choose n) divided by n + 1.

**How the definition helps.** The diagonal identifies exactly where to reflect a path that crosses it. Reflect the tail after its first visit to y = x + 1 across that line. Every path to (n − 1,n + 1) crosses that line, so the same reflection reverses the construction. In our own count, subtracting these paths gives the formula for n ≥ 1, and the empty path gives C(0) = 1.

**nLab:** [Catalan number](https://ncatlab.org/nlab/show/Catalan+number). It says: “Cₙ = 1/(n+1) (2n choose n)”

**Wikipedia:** [Catalan number](https://en.wikipedia.org/wiki/Catalan_number). It says: “The part of the bad path from P to (n, n) reflected across the line y = x + 1 is the rest of the reflected path.”

**Sources:** none listed. No primary source with a working link was found.

### Generating functions turn partial sums into a geometric factor

**Remember:** Multiply by the series of ones to take running totals.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A formal generating function stores the nth term of a sequence as the coefficient of zⁿ, starting at n = 0. To multiply two such series, collect products whose degrees add to the required degree.

**Problem.** If A(z) generates the sequence a₀, a₁, …, then A(z)/(1−z) generates its partial sums. In particular, the harmonic numbers have generating function −log(1−z)/(1−z), with H₀ = 0.

**How the definition helps.** The product rule collects a running total in one coefficient. In our own proof, multiply A(z) by 1+z+z²+⋯, the series for 1/(1−z). Each term through degree n contributes once to the coefficient of zⁿ. Integrating the geometric series gives −log(1−z), whose positive-degree coefficients are the reciprocals 1/n.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “Multiplying generating functions in the same variable gives”

**Paper or page:** [Generating Function for Sequence of Partial Sums of Series](https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Partial_Sums_of_Series). It says: “Let {cₙ} denote the sequence of partial sums of s.”

**Sources:** none listed. No primary source with a working link was found.

### The last multiplication makes parenthesizations into binary trees

**Remember:** The last multiplication is the root, and its factors are the two branches.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A full ordered binary tree is a leaf or a root with a left and a right full binary tree. Its size is the number of vertices with children.

**Problem.** For n ≥ 0, fully parenthesized products of n + 1 letters in fixed order correspond exactly to full ordered binary trees of size n.

**How the definition helps.** The last multiplication gives the root its left and right factors. Each single letter gives a leaf. In our own inverse construction, label the leaves from left to right and multiply the two child expressions at each branching point.

**nLab:** [Catalan number](https://ncatlab.org/nlab/show/Catalan+number). It says: “The mapping T ↦ m(T) defines a bijection from the set Binₙ of isomorphism clases of rooted planar binary trees with n internal vertices to the set Mag(x)ₙ of magma words with n+1 instances of x.”

**Paper or page:** [Number of Distinct Parenthesizations on Word](https://proofwiki.org/wiki/Number_of_Distinct_Parenthesizations_on_Word). It says: “The number of distinct parenthesizations of wₙ is the Catalan number Cₙ₋₁”

**Sources:** none listed. No primary source with a working link was found.

### With (−1)!! = 1, double factorial formulas start at n = 0

**Remember:** There is exactly one way to pair up the empty set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05C70, 60E05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The double factorial (2n−1)!! is the product (2n−1)(2n−3)⋯3·1 of the odd numbers up to 2n−1. An equivalent formula is (2n−1)!! = (2n)! / (2ⁿ n!). For n = 0, this formula gives (−1)!! = 1.

**Problem.** For all n ≥ 0, (2n−1)!! is the number of perfect matchings of a 2n-element set and the 2n-th moment of the standard Gaussian. The sequence with these values at even places and 0 at odd places has exponential generating function exp(x²/2).

**How the definition helps.** The empty product gives 1 at n = 0 in all three formulas (our own). Pairing a fixed element gives the matching recurrence with factor 2n−1, and Gaussian integration by parts gives the same moment recurrence. Dividing the factorial formula by (2n)! gives 1/(2ⁿ n!), the coefficient of x²ⁿ in exp(x²/2) (our own).

**nLab:** [double factorial](https://ncatlab.org/nlab/show/double+factorial). It says: “(2n−1)!! = (1/2ⁿ)(2n)!/n! so that in particular, (−1)!! is defined to be 1.”

**Sources:** none listed. No primary source with a working link was found.

### Binary counts match odd and distinct partitions

**Remember:** Each binary digit fuses a group of equal odd parts into one distinct part.

*True by definition.* MSC 05A17 (Combinatorial aspects of partitions of integers), 11P81. arXiv math.CO, math.NT. Level 1: early undergraduate.

**Definition.** An integer partition is a sum of positive integers with order ignored. Describe it by the number of copies of each part instead of a list. For a partition into odd parts, write each such number of copies in binary.

**Problem.** For every positive integer n, the number of partitions of n into odd parts equals the number into distinct parts.

**How the definition helps.** Binary multiplicities group copies of odd parts into distinct parts without changing the total (our own). For an odd part d, a 1 in binary position i gives one part d times 2ⁱ (our own). The inverse uses the unique split of each positive integer into an odd factor and a power of two (our own). Unique binary expansion ensures the two constructions undo each other (our own).

**Wikipedia:** [Glaisher's theorem](https://en.wikipedia.org/wiki/Glaisher%27s_theorem). It says: “the number of partitions of n into distinct parts is equal to the number of partitions of n into odd parts.”

**Sources:** none listed. No primary source with a working link was found.

### Positive parts give every n exactly 2ⁿ⁻¹ compositions

**Remember:** Zero parts add nothing, so allowing them makes the count infinite.

*Rules out counterexamples.* MSC 05A17 (Combinatorial aspects of partitions of integers), 05A15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A composition of n writes n as an ordered sum of positive integers. A weak composition also allows parts equal to zero. By convention 0 has one composition, the empty sequence.

**Problem.** Each positive integer n has exactly 2ⁿ⁻¹ compositions, and (n − 1 choose k − 1) of them have k parts.

**How the definition helps.** Positive parts identify a composition with a choice of cuts in the n − 1 gaps between n ones. Each gap offers two choices, and exactly k − 1 cuts give k parts (our own). Allowing zero parts would permit arbitrarily many insertions without changing n.

**Wikipedia:** [Composition (combinatorics)](https://en.wikipedia.org/wiki/Composition_%28combinatorics%29). It says: “As a consequence every positive integer admits infinitely many weak compositions (if their length is not bounded).”

**Sources:**

- [S. Heubach and T. Mansour, Combinatorics of Compositions and Words, CRC Press (2009)](https://doi.org/10.1201/9781420072686)

### Reflecting partition diagrams swaps parts and largest part

**Remember:** Reflect the diagram to turn rows into columns.

*True by definition. Confidence: medium.* MSC 05A17 (Combinatorial aspects of partitions of integers), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Represent a partition by left-aligned rows of dots, with one row per part in nonincreasing order of length. Its conjugate is the partition obtained by reflecting this diagram across its main diagonal.

**Problem.** For positive integers n and k, as many partitions of n have exactly k parts as have largest part k.

**How the definition helps.** Reflection exchanges the number of rows with the length of the longest row. It preserves the number of dots and gives another partition diagram. Reflecting twice recovers the original diagram, so the correspondence is a bijection.

**Wikipedia:** [Integer partition](https://en.wikipedia.org/wiki/Integer_partition). It says: “By taking conjugates, the number pₖ(n) of partitions of n into exactly k parts is equal to the number of partitions of n in which the largest part has size k.”

**Sources:** none listed. No primary source with a working link was found.

### Blocks of a partition are nonempty, so partitions match equivalence relations

**Remember:** No empty blocks, so each equivalence relation gives exactly one partition.

*Rules out counterexamples.* MSC 05A18 (Partitions of sets), 03E20. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** A partition of a set X is a set of nonempty, pairwise disjoint subsets of X whose union is X. The subsets are called blocks. An equivalence relation is a reflexive, symmetric and transitive relation.

**Problem.** Partitions of X correspond one-to-one to equivalence relations on X. The blocks are the equivalence classes.

**How the definition helps.** Put two elements in relation when they share a block (our own). The resulting equivalence classes recover every block because each block contains an element. Conversely, the classes of an equivalence relation partition X. For nonempty X, allowing an extra empty block would give the same relation twice (our own).

**Wikipedia:** [Partition of a set](https://en.wikipedia.org/wiki/Partition_of_a_set). It says: “A partition of a set X is a set of non-empty subsets of X such that every element x in X is in exactly one of these subsets”

**Sources:**

- [P. R. Halmos, Naive Set Theory, Undergraduate Texts in Mathematics, Springer (1974)](https://doi.org/10.1007/978-1-4757-1645-0)

### Nonempty blocks give the Stirling count for onto functions

**Remember:** One nonempty block goes to each target element.

*Rules out counterexamples.* MSC 05A18 (Partitions of sets), 11B73, 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A set partition splits its elements into disjoint, nonempty blocks. An onto function uses every element of its target.

**Problem.** The number of onto functions from m inputs to n targets equals n! times the number of partitions of the inputs into n blocks.

**How the definition helps.** Nonempty blocks ensure that each target receives an input. In our own proof, inputs with the same output form one block, and the n targets label these blocks in n! ways. Allowing an empty block would count functions that miss its target.

**Paper or page:** [Cardinality of Set of Surjections](https://proofwiki.org/wiki/Cardinality_of_Set_of_Surjections). It says: “Let C be the number of surjections from S to T. Then: C = n! {m brace n} where {m brace n} denotes a Stirling number of the second kind.”

**Sources:** none listed. No primary source with a working link was found.

### One partition of the empty set makes B₀ = 1

**Remember:** The empty set has one partition, the empty one, so B₀ = 1.

*Makes the theorem clean to state or prove.* MSC 05A18 (Partitions of sets), 05A15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The Bell number Bₙ counts the partitions of a set with n elements. The empty set has exactly one partition, the family with no blocks, so B₀ = 1.

**Problem.** The Bell numbers satisfy Bₙ₊₁ = the sum over k from 0 to n of (n choose k)·Bₖ. Their exponential generating function is exp(eˣ − 1).

**How the definition helps.** Choose k old elements outside the new element’s block, then partition those k elements in Bₖ ways (our own). The empty partition counts the choice k = 0 once. For the exponential generating function B, the recurrence gives B′(x) = eˣB(x). With B(0) = 1 this gives B(x) = exp(eˣ − 1) (our own).

**Wikipedia:** [Bell number](https://en.wikipedia.org/wiki/Bell_number), [Partition of a set](https://en.wikipedia.org/wiki/Partition_of_a_set). It says: “B₀ is 1 because there is exactly one partition of the empty set. This partition is itself the empty set; it can be interpreted as a family of subsets of the empty set, consisting of zero subsets.”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 1, second edition, Cambridge University Press (2011)](https://doi.org/10.1017/CBO9781139058520)

### A fixed rank splits a subset count

**Remember:** Choose the element of rank m + 1, then fill both sides.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 97K20. arXiv math.CO, math.HO. Level 1: early undergraduate.

**Definition.** Define the binomial coefficient C(n, k) as the number of k-element subsets of an n-element set, rather than as a quotient of factorials.

**Problem.** Let l, m and n be nonnegative integers with l + m ≤ n. Summing C(k,m)C(n−k,l) from k = m through n−l gives C(n+1,l+m+1).

**How the definition helps.** Sort the subsets being counted by their element of rank m + 1 (our own). If this element is k, choose m elements below k and l above it. These choices contribute C(k,m)C(n−k,l), and every subset contributes once.

**Paper or page:** [Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388). It says: “Let l, m, n ∈ ℕ be natural numbers such that l + m ≤ n. Then we have the following identity: \\sum <sub>k=m</sub><sup>n-l</sup>\\binom km\\binom {n-k}l=\\binom {n+1}{l+m+1}”

**Sources:**

- [Regula Krapf, Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388)

### Indicators give inclusion and exclusion

**Remember:** Multiply the indicators of absence and subtract the result from one.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The indicator of a set assigns 1 to elements in the set and 0 to other elements. It replaces each membership condition by a number.

**Problem.** The size of a finite union of finite sets is an alternating sum of intersection sizes. Include each nonempty selection of sets once. Add its intersection size for an odd number of selected sets and subtract it for an even number.

**How the definition helps.** The product of the absence indicators equals 1 outside the union and 0 inside it (our own). Subtract it from 1 and expand. Each nonempty selection contributes the indicator of its intersection, with positive sign exactly for odd selection size. Summing over the union gives the formula.

**Wikipedia:** [Inclusion–exclusion principle](https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle). It says: “An algebraic proof can be obtained using indicator functions (also known as characteristic functions).”

**Paper or page:** [Inclusion-Exclusion Principle](https://proofwiki.org/wiki/Inclusion-Exclusion_Principle). It says: “Let A₁, A₂, …, Aₙ be finite sets.”

**Sources:** none listed. No primary source with a working link was found.

### Largest elements give hockey stick sums

**Remember:** Choose the largest element, then choose the rest below it.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Let C(j,m) count the m-element subsets of a set with j elements. The factorial formula is another definition when m ≤ j. If m &gt; j, the subset count is zero.

**Problem.** For nonnegative integers m and n, the sum of C(j,m) from j = 0 to n equals C(n+1,m+1).

**How the definition helps.** Counting subsets of {1, …, n+1} lets us group the subsets of size m+1 by their largest element (our own). If that element is j+1, choose the other m from {1, …, j} (our own). Each m-element subset has m! orderings, which gives the factorial formula (our own).

**Paper or page:** [Sum of Binomial Coefficients over Upper Index](https://proofwiki.org/wiki/Sum_of_Binomial_Coefficients_over_Upper_Index). It says: “(0 choose m) + (1 choose m) + (2 choose m) + ⋯ + (n choose m) = (n + 1 choose m + 1)”

**Sources:** none listed. No primary source with a working link was found.

### Subset counts give Vandermonde’s identity

**Remember:** Count the whole choice by how many come from the first set.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** For nonnegative integers n and k, write C(n,k) for the number of k-element subsets of an n-element set. This replaces the factorial quotient, with C(n,k) = 0 when k exceeds n.

**Problem.** For nonnegative integers r, s and n, C(r+s,n) equals the sum of C(r,k)C(s,n−k) over k from 0 to n.

**How the definition helps.** Counting subsets lets us group choices by how many elements come from each set (our own). Start with disjoint sets of sizes r and s (our own). Choosing k elements from the first leaves n−k to choose from the second (our own). The factorial formula follows because each k-element subset has k! orderings (our own).

**Paper or page:** [Chu-Vandermonde Identity](https://proofwiki.org/wiki/Chu-Vandermonde_Identity). It says: “The sum of products of binomial coefficients binom r k and binom s n minus k, for k from 0 to n, equals binom r plus s n.”

**Sources:** none listed. No primary source with a working link was found.

### Toggling cancels alternating binomial sums

**Remember:** Toggle one fixed element to pair every even subset with an odd one.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 05A10. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define C(n,k) as the number of k-element subsets of an n-element set. Give each subset weight +1 for even size and −1 for odd size. The factorial formula does not name the subsets that can be paired.

**Problem.** For an integer n ≥ 1, add C(n,k) with a plus sign for even k and a minus sign for odd k. The sum over k from 0 to n is zero.

**How the definition helps.** The subset definition lets us pair terms of opposite sign by toggling one fixed element (our own). Toggling twice gives back the original subset, so no subset goes unpaired (our own). The equivalence with the factorial formula uses the k! orderings of every k-element subset (our own).

**Paper or page:** [Alternating Sum and Difference of Binomial Coefficients for Given n](https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_Binomial_Coefficients_for_Given_n). It says: “∀ n ∈ ℤ≥0: ∑ᵢ₌₀ⁿ (−1)ⁱ (n choose i) = δₙ₀”

**Sources:** none listed. No primary source with a working link was found.

### Missing symbol sets turn Latin rectangle completion into Hall’s theorem

**Remember:** A new row is one distinct available symbol per column.

*Rules out counterexamples.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares), 05D15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A full-width Latin rectangle has n columns and uses n symbols, each once per row and at most once per column. Define each column’s available set to consist of the symbols not used in that column.

**Problem.** Every full-width Latin rectangle with fewer than n rows can be completed to an n by n Latin square by adding rows.

**How the definition helps.** Full width gives every column and every symbol the same number of available choices for the next row. With r rows filled, each column lacks n − r symbols and each symbol is missing from n − r columns. Our own count gives any j columns at least j available symbols together, so Hall’s theorem supplies another row. Without full width, rows (1,2) and (2,1) would both need symbol 3 in column three.

**Paper or page:** [Hall's marriage theorem](https://arxiv.org/abs/2503.23159v1). It says: “A Latin rectangle can be extended to a Latin square by adding extra rows.”

**Sources:** none listed. No primary source with a working link was found.

### Counting labelled trees gives Cayley's formula nⁿ⁻²

**Remember:** Name the vertices and the count becomes nⁿ⁻².

*Makes the theorem clean to state or prove.* MSC 05C05 (Trees), 05C30. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A labelled tree on n vertices is a tree whose vertex set is {1, …, n}. Two labelled trees are the same only if they have the same edges. Unlabelled trees are counted only up to isomorphism.

**Problem.** For each positive integer n, there are nⁿ⁻² labelled trees on n vertices.

**How the definition helps.** Labels let a Prüfer sequence record a tree with one label in each of n − 2 positions (our own). For n ≥ 2, the Prüfer bijection identifies these trees with all such sequences, giving nⁿ⁻² choices. For n = 1 there is one tree.

**Wikipedia:** [Cayley's formula](https://en.wikipedia.org/wiki/Cayley%27s_formula), [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29). It says: “No closed formula for the number t(n) of trees with n vertices up to graph isomorphism is known.”

**Sources:**

- [R. Otter, The number of trees, Annals of Mathematics 49 (1948) 583–599](https://doi.org/10.2307/1969046)

### Distinct edge weights force one cheapest spanning tree

**Remember:** The lightest disagreement can replace a heavier edge.

*Rules out counterexamples.* MSC 05C05 (Trees), 05C22. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A minimum spanning tree connects every vertex without cycles and has least total edge weight. In a graph with distinct edge weights, no two edges have the same weight.

**Problem.** A finite connected graph with distinct edge weights has exactly one minimum spanning tree.

**How the definition helps.** Distinct weights make the lightest edge belonging to just one of two cheapest trees strictly lighter than any other edge where they differ. Add it to the tree missing it. The resulting cycle contains an edge outside the first tree, and replacing that heavier edge lowers the total weight. Our own counterexample without distinct weights is a triangle with three equal edges.

**Wikipedia:** [Minimum spanning tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree). It says: “If each edge has a distinct weight then there will be only one, unique minimum spanning tree”

**Sources:** none listed. No primary source with a working link was found.

### Finite branching makes an infinite tree have an infinite path

**Remember:** At least one of finitely many branches must keep going forever.

*Rules out counterexamples.* MSC 05C05 (Trees), 05C63. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A rooted tree has a chosen root. It is finitely branching if each vertex has only finitely many children, its neighbors one step farther from the root.

**Problem.** An infinite finitely branching rooted tree contains an infinite path starting at its root.

**How the definition helps.** With finitely many children, a vertex with infinitely many descendants must have a child with infinitely many descendants. In our own proof, repeating that choice from the root builds an infinite path. Our own counterexample is a root with infinitely many children, all of them leaves.

**Paper or page:** [König's Tree Lemma](https://proofwiki.org/wiki/König's_Tree_Lemma). It says: “each with a finite number of children. Then T has a branch of infinite length.”

**Sources:** none listed. No primary source with a working link was found.

### Minimal connectivity gives a spanning tree

**Remember:** Delete edges while keeping the graph connected until none can go.

*True by definition. Confidence: medium.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A tree is a connected graph that disconnects whenever one edge is removed. Another definition requires a connected graph with no cycles.

**Problem.** Every finite connected graph has a spanning tree, which uses all its vertices and only edges of the graph.

**How the definition helps.** The minimal-connectivity definition gives a tree by taking a connected subgraph with all vertices and the fewest edges (our own). Removing any edge would violate that choice, so it meets the definition. Starting with the no-cycle definition, one must also show that an edge on a cycle can be removed without losing connectivity. That fact and its converse are the work behind the equivalence of the definitions (our own).

**Wikipedia:** [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29). It says: “G is connected, but would become disconnected if any single edge is removed from G.”

**Sources:** none listed. No primary source with a working link was found.

### Parent edges count the edges of a forest

**Remember:** Each vertex pays for one edge, except each root.

*True by definition.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A forest is a graph without cycles. In each connected part, choose one vertex as the root. Every other vertex has a parent, its next neighbor on the unique path to the root.

**Problem.** A finite forest with n vertices and c connected parts has n − c edges.

**How the definition helps.** Rooting the forest gives each edge exactly one child to count. In our own proof, the unique path to the root identifies the parent and shows that every edge joins a child to its parent. Counting children now counts all vertices except the roots.

**Paper or page:** [Number of Edges in Forest](https://proofwiki.org/wiki/Number_of_Edges_in_Forest). It says: “Then F contains n − m edges.”

**Sources:** none listed. No primary source with a working link was found.

### The graph with no vertices is not a tree

**Remember:** A tree has one more vertex than edges; the empty graph has zero of each.

*Rules out counterexamples.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A tree is a connected graph with no cycles and at least one vertex. This excludes the graph of order zero, which has no vertices. That graph may be called a forest with zero trees.

**Problem.** Every finite tree with n vertices has exactly n − 1 edges.

**How the definition helps.** Choose a root, which exists because the tree is nonempty (our own). Each other vertex has one edge toward the root, and this counts every edge exactly once. The graph with no vertices has zero edges, so including it would break the formula.

**Wikipedia:** [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “the order-zero graph (graph with no vertices) is generally not considered to be a tree: while it is vacuously connected as a graph”

**Sources:**

- [Frank Harary and Ronald C. Read, Is the null-graph a pointless concept?, in Graphs and Combinatorics, Lecture Notes in Mathematics 406 (1974) 37–44](https://doi.org/10.1007/bfb0066433)

### Unique paths make tree edges bridges

**Remember:** Remove the only path and its endpoints separate.

*True by definition.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define a tree as a nonempty simple undirected graph with exactly one simple path between each pair of distinct vertices. A simple path does not repeat a vertex. The usual alternative requires a connected graph with no cycles.

**Problem.** Every edge of a tree is a bridge, an edge whose deletion disconnects the graph.

**How the definition helps.** The edge itself is the only simple path between its endpoints. In our own proof, deleting it therefore disconnects those endpoints. The definitions agree because a cycle gives two paths between its vertices, and two distinct simple paths with the same endpoints contain a cycle.

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

**Definition.** A bipartite graph has two vertex parts, with every edge joining different parts. In a crossing-free drawing, the length of a face counts all edge sides on its boundary, including both sides of a bridge.

**Problem.** A simple bipartite planar graph with v ≥ 3 vertices has at most 2v − 4 edges.

**How the definition helps.** Alternating vertex parts force every face boundary in a connected drawing to have even length. With at least three vertices, simplicity rules out a two-sided face, so every face has at least four sides. Counting both sides of every edge and applying Euler’s formula gives the bound. In our own extension, join disconnected parts by bridges first, reversing their vertex parts as needed.

**Wikipedia:** [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “each edge contributes exactly two incidences.”

**Sources:** none listed. No primary source with a working link was found.

### Euler's formula for plane graphs needs connectedness, or a count of components

**Remember:** Connected plane graphs, outer face included, always give V − E + F = 2.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A plane graph is a graph drawn in the plane without crossings. Its faces are the connected regions left when the drawing is removed, and the unbounded outer region counts as a face.

**Problem.** For a finite connected nonempty plane graph, V − E + F = 2. For a finite plane graph with C connected components, V − E + F = 1 + C.

**How the definition helps.** Delete cycle edges until a spanning forest remains (our own). Each deletion merges two faces and preserves V − E + F and C. The forest has V − C edges and just the outer face. Two disjoint triangles therefore give 3, while a connected graph gives 2.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic), [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “The Euler characteristic can be defined for connected plane graphs by the same V − E + F formula as for polyhedral surfaces, where F is the number of faces in the graph, including the exterior face.”

**Sources:** none listed. No primary source with a working link was found.

### Letting dual graphs have loops and parallel edges makes duality exact

**Remember:** One dual edge per edge, even if it makes a loop or a parallel pair.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The geometric dual of a finite plane graph places one vertex in each face. For every original edge, draw one dual edge across it joining its incident faces, allowing loops and parallel edges. The dual edges avoid each other except at endpoints.

**Problem.** The geometric dual of the geometric dual of a connected nonempty finite plane graph is isomorphic to the original graph. Its bridges correspond exactly to loops in the first dual.

**How the definition helps.** In a connected plane graph, the dual faces surround the original vertices (our own). Crossing each dual edge again recovers the original incidence, even for parallel edges. A bridge has the same face on both sides, while a cycle edge has distinct incident faces. Thus exactly the bridges give dual loops.

**Wikipedia:** [Dual graph](https://en.wikipedia.org/wiki/Dual_graph). It says: “The dual of a simple graph need not be simple: it may have self-loops (an edge with both endpoints at the same vertex) or multiple edges connecting the same two vertices”

**Sources:**

- [Hassler Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)

### Simple planar graphs have at most 3v − 6 edges

**Remember:** No loops or double edges, so every face needs three sides.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C35. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A simple graph has no loops and no parallel edges. A face of a plane drawing is a connected component of the complement of the drawing.

**Problem.** A finite simple planar graph with v ≥ 3 vertices has at most 3v − 6 edges. Consequently K₅ is nonplanar, and every nonempty finite simple planar graph has a vertex of degree at most 5.

**How the definition helps.** Connect components by adding bridges, so bounding the connected case suffices (our own). For v ≥ 3, each face then has at least three edge sides, giving 3f ≤ 2e and Euler’s bound. A triangle with parallel copies of one edge shows why simplicity matters. K₅ exceeds the bound, and the average degree is below six, including when v &lt; 3 (our own).

**Wikipedia:** [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “In a finite, connected, simple, planar graph, any face (except possibly the outer one) is bounded by at least three edges and every edge touches at most two faces, so 3f ≤ 2e”

**Sources:** none listed. No primary source with a working link was found.

### Triangular faces force the maximal planar edge count

**Remember:** Each triangular face contributes exactly three edge sides.

*True by definition.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A plane triangulation is a connected simple graph drawn without crossings with three edges around every face, including the outer face. A simple planar graph is maximal planar if adding any missing edge between its vertices destroys planarity.

**Problem.** Every crossing-free plane drawing of a finite maximal planar graph with v ≥ 3 vertices has 3v − 6 edges and 2v − 4 faces.

**How the definition helps.** Triangular faces give 3f = 2e by counting the sides of edges. Euler’s formula then gives both counts. The work moves to the face augmentation lemma, which shows that a maximal planar graph has only triangular faces.

**Wikipedia:** [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “All faces (including the outer one) are then bounded by three edges”

**Sources:** none listed. No primary source with a working link was found.

### Shortest walks give graph distance

**Remember:** Join two walks to bound the shortest one.

*True by definition.* MSC 05C12 (Distance in graphs). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define the distance as the minimum number of edges in a walk joining two vertices. A walk may repeat vertices, unlike a simple path. Set the distance to ∞ if no walk joins the vertices.

**Problem.** Graph distance obeys the triangle inequality even between vertices in different connected components.

**How the definition helps.** Two walks always join to give another walk when the first ends where the second begins. In our own proof, joining shortest walks through a third vertex bounds the direct distance by the sum of their lengths. If either distance in the sum is infinite, the bound holds automatically. Deleting any segment between repeated vertices shortens a walk, so a shortest walk is a path.

**Wikipedia:** [Distance (graph theory)](https://en.wikipedia.org/wiki/Distance_%28graph_theory%29). It says: “is the number of edges in a shortest path (also called a graph geodesic) connecting them.”

**Sources:** none listed. No primary source with a working link was found.

### Graph colouring assumes no loops, so every graph has a chromatic number

**Remember:** A loop would clash with itself, so colouring theory leaves loops out.

*Rules out counterexamples. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C60. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A proper vertex colouring gives the two ends of every edge different colours. A loop is an edge from a vertex to itself.

**Problem.** Every finite loopless graph has a proper colouring, so its chromatic number is defined and is at most the number of vertices.

**How the definition helps.** A loop asks a vertex to differ in colour from itself, so no colouring exists, and the convention removes this. Once loops are gone, giving each vertex its own colour always works (our own remark). Parallel edges, in contrast, make no difference to vertex colouring (our own remark).

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring), [Graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism). It says: “Since a vertex with a loop (i.e. a connection directly back to itself) could never be properly colored, it is understood that graphs in this context are loopless.”

**Sources:**

- [T. R. Jensen and B. Toft, Graph Coloring Problems, Wiley (1994)](https://doi.org/10.1002/9781118032497)

### Independent color classes give a lower bound on colors

**Remember:** Divide the vertex count by the most one color can hold.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C69. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A proper vertex coloring partitions vertices into color classes with no edge inside a class. Such a class is an independent set.

**Problem.** Suppose a finite loopless graph has n ≥ 1 vertices, and its largest independent set has size α. Every proper coloring uses at least ⌈n⁄α⌉ colors.

**How the definition helps.** Each color class has at most α vertices, so counting the classes gives the bound, our own argument. Our own account uses only the equivalence with assigning different colors at each edge.

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring). It says: “every such class forms an independent set.”

**Sources:** none listed. No primary source with a working link was found.

### Reachability orders acyclic graphs

**Remember:** Order all prerequisites, not just neighboring ones.

*Rules out counterexamples.* MSC 05C20 (Directed graphs (digraphs), tournaments). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In a finite directed graph, say one vertex precedes another if a nonempty directed walk leads from the first to the second. Use this relation on graphs with no directed cycles.

**Problem.** The vertices can be listed with every edge pointing forward exactly when the graph has no directed cycle.

**How the definition helps.** Reachability is a strict partial order in an acyclic directed graph because walks concatenate and no vertex reaches itself (our own). Repeatedly listing a minimal remaining vertex gives a forward ordering of a finite graph. Conversely, a directed cycle would force a vertex to precede itself.

**Wikipedia:** [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting). It says: “A topological ordering is possible if and only if the graph has no directed cycles”

**Sources:**

- [A. B. Kahn, Topological sorting of large networks, Communications of the ACM (1962).](https://doi.org/10.1145/368996.369025)

### Color counts give deletion and contraction

**Remember:** After deleting an edge, split colorings by whether its endpoints match.

*True by definition.* MSC 05C31 (Graph polynomials), 05C15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** For a finite simple graph G, define its chromatic polynomial by its values at positive integers k. Each value counts assignments of k available colors with different colors at adjacent vertices. One can instead specify the polynomial by a recurrence.

**Problem.** For an edge e of G, the chromatic polynomial satisfies P(G) = P(G − e) − P(G / e). Here G − e deletes e, and G / e merges its endpoints, removes e, and merges any repeated edges.

**How the definition helps.** Split the colorings of G − e according to whether the endpoints of e have different colors (our own). Different colors give precisely the colorings of G. Equal colors give precisely the colorings of G / e. Subtracting gives the identity at every positive integer and hence as polynomials.

**Wikipedia:** [Chromatic polynomial](https://en.wikipedia.org/wiki/Chromatic_polynomial). It says: “This follows from the observation that every k-coloring of G either gives different colors to u and v, or the same colors.”

**Sources:** none listed. No primary source with a working link was found.

### Distance parity detects bipartite graphs

**Remember:** An edge within one parity gives an odd cycle.

*Rules out counterexamples.* MSC 05C38 (Paths and cycles). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In each connected piece of a graph, choose a starting vertex and group vertices by even or odd distance from it. A graph is bipartite if its vertices split into two groups with every edge between groups.

**Problem.** A finite undirected graph is bipartite exactly when it contains no odd cycle.

**How the definition helps.** An edge joining vertices of the same distance parity yields an odd closed walk using their two paths to the starting vertex (our own). An odd closed walk contains an odd cycle. Without such a cycle, the parity groups therefore give a bipartition. Conversely, every cycle in a bipartite graph alternates groups and has even length.

**Wikipedia:** [Bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph). It says: “a graph is bipartite if and only if it has no odd cycle as a subgraph”

**Paper or page:** [Graph containing Closed Walk of Odd Length also contains Odd Cycle](https://proofwiki.org/wiki/Graph_containing_Closed_Walk_of_Odd_Length_also_contains_Odd_Cycle). It says: “Let G have a closed walk of odd length. Then G has an odd cycle.”

**Sources:** none listed. No primary source with a working link was found.

### Counting one remaining vertex gives Kₙ connectivity n − 1

**Remember:** Remove n − 1 vertices from Kₙ: one vertex is left, and that counts.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The connectivity of a graph is the least number of vertices whose removal leaves either a disconnected graph or a single vertex. With this definition, the complete graph Kₙ has connectivity n − 1.

**Problem.** Let G be a finite simple graph with at least two vertices and k a positive integer. Its connectivity is at least k exactly when each pair of distinct vertices has k distinct paths between them sharing only their endpoints.

**How the definition helps.** The single-vertex clause gives Kₙ connectivity n − 1 because any two remaining vertices are adjacent. Each pair has the direct path and n − 2 paths through one other vertex, attaining that value (our own). Whitney’s global form of Menger’s theorem gives the equivalence for general graphs.

**Wikipedia:** [Vertex connectivity](https://en.wikipedia.org/wiki/Vertex_connectivity). It says: “This definition produces the same answer, n − 1, for the connectivity of the complete graph Kn.”

**Sources:**

- [H. Whitney, Congruent graphs and the connectivity of graphs, American Journal of Mathematics 54 (1932), 150–168](https://doi.org/10.2307/2371086)

### Maximal forests force every bridge

**Remember:** A bridge cannot close a cycle, so a maximal forest cannot omit it.

*True by definition.* MSC 05C40 (Connectivity), 05C05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A spanning tree of a connected graph keeps all vertices and uses a maximal set of edges with no cycle. Maximal means that adding any unused edge creates a cycle. The usual definition uses a connected, cycle-free subgraph on all vertices.

**Problem.** In a finite connected simple graph, an edge is a bridge exactly when every spanning tree contains it. A bridge is an edge whose deletion disconnects the graph.

**How the definition helps.** An edge set maximal without cycles must contain every bridge, since adding a missing bridge cannot create a cycle (our own). If an edge is not a bridge, delete it and choose a maximal cycle-free edge set in the remaining graph (our own). This set connects all vertices because otherwise an edge between two components could still be added (our own). It therefore gives a spanning tree that omits the deleted edge (our own).

**Paper or page:** [Edge is Bridge iff in All Spanning Trees](https://proofwiki.org/wiki/Edge_is_Bridge_iff_in_All_Spanning_Trees). It says: “e belongs to every spanning tree for G.”

**Sources:** none listed. No primary source with a working link was found.

### Nonadjacent endpoints make Menger’s vertex separator exist

**Remember:** An edge between the ends survives every internal vertex deletion.

*Rules out counterexamples.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** For two distinct nonadjacent vertices, a vertex separator is a set of other vertices whose removal leaves no path between the two.

**Problem.** Fix two distinct nonadjacent vertices in a finite undirected graph. The minimum separator size equals the largest number of paths between them that share only their ends.

**How the definition helps.** Nonadjacency makes a separator available because deleting all other vertices cuts every route, our own explanation. In the two-vertex complete graph there is one path but no internal separator, our own counterexample. Menger’s theorem still does the work of finding as many paths as the minimum separator permits.

**Wikipedia:** [Menger's theorem](https://en.wikipedia.org/wiki/Menger%27s_theorem). It says: “the minimum number of vertices, distinct from x and y, whose removal disconnects x and y”

**Sources:** none listed. No primary source with a working link was found.

### Reachability classes make graph components partition the vertices

**Remember:** Group together all vertices that can reach one another.

*True by definition.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In an undirected graph, two vertices are related if a walk joins them, allowing walks of length zero. A connected component is the subgraph induced by one equivalence class of this relation.

**Problem.** Every vertex of an undirected graph lies in exactly one connected component.

**How the definition helps.** The class definition gives the partition immediately because equivalence classes are disjoint and cover the vertices. With maximal connected subgraphs, one instead shows that two connected subgraphs with a common vertex have a connected union (our own). The class proof moves the work into showing that reachability is an equivalence relation. Staying at one vertex, reversing a walk and joining two walks give the three properties.

**Wikipedia:** [Component (graph theory)](https://en.wikipedia.org/wiki/Component_%28graph_theory%29). It says: “The equivalence classes of this relation partition the vertices of the graph into disjoint sets, subsets of vertices that are all reachable from each other, with no additional reachable pairs outside of any of these subsets.”

**Paper or page:** [Graph Components are Equivalence Classes](https://proofwiki.org/wiki/Graph_Components_are_Equivalence_Classes). It says: “The components of a graph are equivalence classes under the relation is connected to on the set of vertices.”

**Sources:** none listed. No primary source with a working link was found.

### Euler tours need connected edges

**Remember:** Keep the edges together, but ignore isolated vertices.

*Rules out counterexamples.* MSC 05C45 (Eulerian and Hamiltonian graphs), 05C40. arXiv math.CO. Level 1: early undergraduate.

**Definition.** An Euler tour is a closed walk that uses every edge exactly once. Say the edges lie in one connected component if any two vertices incident to edges can reach each other. Isolated vertices do not count against this condition.

**Problem.** Take a finite simple graph with at least one edge. It has an Euler tour exactly when every vertex has even degree and its edges lie in one connected component.

**How the definition helps.** Requiring the edges to lie together rules out two disjoint triangles, which have even degrees but no single tour (our own). The edge-based condition still allows a triangle beside an isolated vertex (our own). The work is Hierholzer’s argument that closed trails can be joined until they cover all edges (our own).

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

**Definition.** A matching is a set of edges with no shared vertices. An augmenting path has positive length, alternates between edges outside and inside the matching, and has two unmatched endpoints. An ordinary alternating path need not have unmatched endpoints.

**Problem.** In a finite graph, a matching is largest exactly when it has no augmenting path.

**How the definition helps.** The endpoint rule ensures that swapping the edges along the path adds one edge without creating a shared endpoint (our own). In a four-vertex path, matching the two end edges gives a largest matching, even though all three edges alternate (our own). The work in the converse compares two matchings using only edges that appear in exactly one of them (our own). Those edges form alternating paths and cycles, and a larger matching must contribute an extra edge on one path (our own).

**Wikipedia:** [Berge's theorem](https://en.wikipedia.org/wiki/Berge%27s_theorem). It says: “a path that starts and ends on free (unmatched) vertices, and alternates between edges in and not in the matching”

**Sources:**

- [Claude Berge, Two Theorems in Graph Theory (1957).](https://doi.org/10.1073/pnas.43.9.842)

### Line graphs turn matchings into independent sets

**Remember:** Edges that do not meet become vertices that are not adjacent.

*True by definition.* MSC 05C76 (Graph operations (line graphs, products, etc.)). arXiv math.CO. Level 1: early undergraduate.

**Definition.** For a simple undirected graph G, make one new vertex for each edge. Join two new vertices exactly when their edges in G share an endpoint. The resulting graph is the line graph of G.

**Problem.** A set of edges of G is a matching exactly when the corresponding vertices of the line graph form an independent set. This correspondence preserves size.

**How the definition helps.** The line graph turns the rule against shared endpoints into the rule against adjacent vertices. The correspondence preserves size because each edge supplies exactly one vertex.

**Wikipedia:** [Line graph](https://en.wikipedia.org/wiki/Line_graph). It says: “corresponds to a set of vertices in L(G) no two of which are adjacent, that is, an independent set.”

**Sources:** none listed. No primary source with a working link was found.

### Complement pairs classify the largest intersecting families on 2k points

**Remember:** When both halves have size k, each pair allows one choice.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Fix a ground set of size 2k, with k ≥ 1. Group its k-element subsets into pairs, each consisting of a set and its complement. An intersecting family has no two disjoint sets.

**Problem.** An intersecting family of k-element subsets of a 2k-element set contains at most half the k-element subsets. Any choice of one from each complement pair attains the bound.

**How the definition helps.** Our own partition replaces all disjointness tests with one choice per complement pair. Two disjoint k-element sets exhaust the 2k points, so they must be complements. Choosing one from each pair therefore attains the bound.

**Paper or page:** [Stabilities of the Kleitman diameter theorem](https://arxiv.org/abs/2411.08325v2). It says: “Let $k \\geq 2$ and $n \\geq 2 k$ be integers. Let $\\mathcal{F} \\subseteq \\binom {\[n\]}{k}$ be an intersecting family. Then\\\[  \|\\mathcal{F}\|\\leq \\binom {n-1}{k-1}.  \\\]”

**Sources:** none listed. No primary source with a working link was found.

### Coloring by differences turns Schur’s theorem into Ramsey’s theorem

**Remember:** Three edges on a number line give two gaps and their sum.

*True by definition.* MSC 05D10 (Ramsey theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Color the integers from 1 to N. On vertices 0 through N, color each edge with the color of the positive difference between its endpoints.

**Problem.** For each positive number of colors c, some N forces x, y and x + y to share a color in every c-coloring of 1,…,N. The summands may be equal.

**How the definition helps.** In our own difference coloring, the two shorter gaps of a triangle add to its longest gap. Ramsey’s theorem supplies a triangle whose three edges share one color when N is large enough.

**Paper or page:** [Schur's Theorem (Ramsey Theory)](https://proofwiki.org/wiki/Schur's_Theorem_(Ramsey_Theory)). It says: “there exists a positive integer $S$ such that:
 for every partition of the integers $\\set {1, \\ldots, S}$ into $r$ parts, one of the parts contains integers $x$, $y$ and $z$ such that:
$$x + y = z$”

**Sources:** none listed. No primary source with a working link was found.

### Counting bad sets gives an exponential Ramsey lower bound

**Remember:** Count monochromatic k-sets and look for a coloring whose count is below one.

*True by definition.* MSC 05D10 (Ramsey theory), 05D40. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Color every pair of n vertices red or blue independently, with equal chances. The bad-set count is the number of k-vertex sets whose edges all share one color.

**Problem.** For n ≥ k ≥ 2, let m = k(k − 1)/2. If (n choose k) &lt; 2ᵐ⁻¹, some coloring has no such set.

**How the definition helps.** Our own count averages one indicator for each k-set. Exactly two of its 2ᵐ equally likely edge patterns use one color. The expected count is below one, so some coloring has count zero.

**Wikipedia:** [Probabilistic method](https://en.wikipedia.org/wiki/Probabilistic_method). It says: “Color each edge independently with probability 1/2 of being red and 1/2 of being blue.”

**Sources:** none listed. No primary source with a working link was found.

### Mixed corners give Goodman’s lower bound on single-color triangles

**Remember:** Every mixed triangle has exactly two mixed corners.

*True by definition.* MSC 05D10 (Ramsey theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Color every pair of n vertices red or blue. A mixed corner consists of two edges of different colors sharing a vertex.

**Problem.** Every such coloring has at least n(n − 1)(n − 5)/24 triangles with all three edges the same color.

**How the definition helps.** Counting mixed corners at vertices replaces counting triangles one at a time. Each triangle using both colors gives two mixed corners. At each vertex the red and blue edge counts sum to n − 1, so their product is at most (n − 1)²/4. Our own subtraction removes at most n(n − 1)²/8 mixed triangles from the total of (n choose 3).

**Wikipedia:** [Goodman's theorem](https://en.wikipedia.org/wiki/Goodman%27s_theorem). It says: “Every nonmonochromatic triangle contributes such a pair at exactly two of its vertices, while a monochromatic triangle contributes none.”

**Sources:**

- [A. W. Goodman, On sets of acquaintances and strangers at any party (1959)](https://doi.org/10.1080/00029890.1959.11989408)

### Elementary symmetric products give Viète’s formulas at once

**Remember:** Choose k roots and attach one minus sign for each.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 12D05. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** For a list of n roots, form the product (1 + r₁) ⋯ (1 + rₙ), treating the entries as variables. Its degree-k part is the elementary symmetric polynomial eₖ, the sum of products from all choices of k positions.

**Problem.** A complex polynomial with leading coefficient 1 has coefficient (−1)ᵏeₖ at the term k places below its leading term. The list counts each root as often as it occurs.

**How the definition helps.** In our own proof, choosing k root terms in (x − r₁) ⋯ (x − rₙ) selects exactly the products defining eₖ. Each choice contributes k minus signs. The fundamental theorem of algebra supplies the factorization.

**nLab:** [elementary symmetric polynomial](https://ncatlab.org/nlab/show/elementary+symmetric+polynomial). It says: “Equivalently these are the degree-k summands in the polynomial (1+X₁)(1+X₂) ⋯ (1+Xₙ)”

**Paper or page:** [Elementary Symmetric Function/Examples/Monic Polynomial](https://proofwiki.org/wiki/Elementary_Symmetric_Function/Examples/Monic_Polynomial). It says: “has coefficients which are parity operators times an elementary symmetric function”

**Sources:** none listed. No primary source with a working link was found.

### Factorial weights give binomial inversion by canceling exponentials

**Remember:** Multiply by exp(x) to transform, and by exp(−x) to reverse.

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a real sequence a indexed by nonnegative integers, its exponential generating function is the formal power series ∑ₙ≥₀ a(n)xⁿ/n!.

**Problem.** Suppose b(n) is the sum of (n choose k) a(k) over 0 ≤ k ≤ n. Then a(n) is the sum of (n choose k) (−1)ⁿ⁻ᵏ b(k) over the same range.

**How the definition helps.** Factorial weights turn the forward sum into multiplication by exp(x). In our own proof, multiplying by exp(−x) undoes this step because the exponentials have product one. Reading the product coefficient gives the alternating sum.

**Wikipedia:** [Binomial transform](https://en.wikipedia.org/wiki/Binomial_transform). It says: “The binomial convolution arises naturally from the product of the exponential generating functions.”

**Paper or page:** [Alternating Summation of Binomial Coefficient of Summation of Binomial Coefficient of Sequence](https://proofwiki.org/wiki/Alternating_Summation_of_Binomial_Coefficient_of_Summation_of_Binomial_Coefficient_of_Sequence). It says: “(−1)ⁿ bₙ = ∑ₛ₌₀ⁿ (n choose s) (−1)ˢ aₛ”

**Sources:** none listed. No primary source with a working link was found.

### Function fibers explain the Stirling expansion of powers

**Remember:** Group equal outputs first, then give the groups distinct outputs.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A18. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A fiber of a function is the set of inputs with a given output. Define S(n,k) to count partitions of n inputs into k nonempty blocks. The kth falling factorial is x(x − 1)⋯(x − k + 1), with the empty product equal to 1.

**Problem.** For n ≥ 0, xⁿ is the sum of S(n,k) times the kth falling factorial of x, over 0 ≤ k ≤ n.

**How the definition helps.** Nonempty fibers split a function into a partition and a choice of distinct outputs for its blocks. In our own proof, for positive integer x, the kth falling factorial counts those choices from x outputs. Summing over partitions counts all xⁿ functions. Equality at every positive integer implies equality of the two polynomials.

**Wikipedia:** [Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind). It says: “the numbers that arise when one expresses powers of an indeterminate x in terms of the falling factorials”

**Paper or page:** [Stirling Numbers of the Second Kind/Examples/5th Power](https://proofwiki.org/wiki/Stirling_Numbers_of_the_Second_Kind/Examples/5th_Power). It says: “x⁵ = x⁵̲ + 10 x⁴̲ + 25 x³̲ + 15 x²̲ + x¹̲”

**Sources:** none listed. No primary source with a working link was found.

### Sorting tied letters by position gives Worpitzky’s identity

**Remember:** Ties can occur only where the sorted positions rise.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Define A(n,d) to count permutations of 1 through n with d descents. A descent is a step to a smaller entry. Sort word positions by their letters, breaking ties by original position.

**Problem.** For positive integers n and x, summing A(n,d) × (x+n−1−d choose n) over 0 ≤ d &lt; n gives xⁿ. A binomial coefficient is zero when its upper number is smaller than its lower number.

**How the definition helps.** Sorting by letter forces a strict increase in letter value wherever consecutive sorted positions decrease. In our own proof, subtracting the number of earlier forced increases leaves a nondecreasing list from 1 through x − d. Adding them back recovers the word for that position order. Counting these lists as multisets gives the binomial coefficient.

**Wikipedia:** [Eulerian number](https://en.wikipedia.org/wiki/Eulerian_number). It says: “Worpitzky's identity expresses xⁿ as the linear combination of Eulerian numbers with binomial coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Additive size makes ordinary generating functions multiply

**Remember:** Add sizes by multiplying powers.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Each object has a nonnegative integer size. An ordinary generating function records the count of objects of size n as the coefficient of xⁿ. Give an ordered pair the sum of its two sizes.

**Problem.** The series for ordered pairs is the product of the two classes’ series if both have finite counts at each size. For cumulative totals of a counting sequence with series A(x), the series is A(x)/(1 − x).

**How the definition helps.** Adding sizes makes the power for a pair equal the product of the powers for its members. In our own proof, grouping pairs by their first size gives exactly the coefficient rule for series multiplication. For cumulative totals, pair each object with the nonnegative integer needed to reach the desired size. Those integers have series 1/(1 − x).

**Wikipedia:** [Symbolic method (combinatorics)](https://en.wikipedia.org/wiki/Symbolic_method_%28combinatorics%29). It says: “The product of two combinatorial classes A and B is specified by defining the size of an ordered pair as the sum of the sizes of the elements in the pair.”

**Sources:** none listed. No primary source with a working link was found.

### Aperiodic necklaces let every class use the same divisor

**Remember:** Exclude repeated words, then divide by the number of rotations.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A necklace identifies words that differ only by a cyclic shift. Call a word aperiodic if it is not two or more copies of a shorter word.

**Problem.** Fix a finite alphabet and n ≥ 1. The number of aperiodic necklaces of length n equals the number of aperiodic words of length n divided by n.

**How the definition helps.** An aperiodic word has n different rotations, so each necklace accounts for n words. In our own proof, a rotation by j positions fixing the word makes it repeat a block of length gcd(n,j), the greatest common divisor. For example, AA has two starting positions but only one distinct rotation.

**Wikipedia:** [Necklace (combinatorics)](https://en.wikipedia.org/wiki/Necklace_%28combinatorics%29). It says: “An aperiodic necklace of length n is a rotation equivalence class having size n”

**Sources:** none listed. No primary source with a working link was found.

### Cycles without singletons give the derangement exponential series

**Remember:** Remove singleton cycles before taking the exponential.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Define a derangement as an unordered collection of disjoint cycles of length at least two that use every label. A cycle gives the next element for each label in a loop.

**Problem.** If D(n) counts derangements on n labels, its exponential generating function, the sum of D(n)xⁿ/n!, equals exp(−x)/(1 − x). Thus D(n) equals n! times the sum of (−1)ᵏ/k! over 0 ≤ k ≤ n.

**How the definition helps.** Forbidding cycles of length one removes the term x from the series for a single cycle. In our own count, k distinct labels form (k − 1)! cycles, giving the remaining cycle series −log(1 − x) − x. The exponential formula counts unordered collections of these cycles by exponentiating their series.

**Wikipedia:** [Exponential formula](https://en.wikipedia.org/wiki/Exponential_formula). It says: “the exponential generating function for structures on finite sets is the exponential of the exponential generating function for connected structures.”

**Paper or page:** [Closed Form for Number of Derangements on Finite Set](https://proofwiki.org/wiki/Closed_Form_for_Number_of_Derangements_on_Finite_Set). It says: “Dₙ = n! ∑ₖ₌₀ⁿ (−1)ᵏ/k!”

**Sources:** none listed. No primary source with a working link was found.

### Forbidding objects of size zero makes sequence and set constructions countable

**Remember:** Nothing of size zero, or sequences pile up for free.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A combinatorial class assigns each object a nonnegative integer size and has finitely many objects of each size. A positive class gives every object size at least one.

**Problem.** For a positive class with ordinary generating function B(z), finite ordered sequences have ordinary generating function 1/(1 − B(z)). For a positive labelled class with exponential generating function B(z), sets on disjoint labels have exponential generating function exp(B(z)).

**How the definition helps.** Positive sizes limit a structure of size n to at most n components. In our own example, repeating an empty component gives infinitely many sequences of size zero. The sequence product rule sums B(z)ᵏ over k ≥ 0. The labelled set formula divides each power by k! before summing.

**Wikipedia:** [Symbolic method (combinatorics)](https://en.wikipedia.org/wiki/Symbolic_method_%28combinatorics%29). It says: “In the labelled case we have the additional requirement that X not contain elements of size zero.”

**Sources:**

- [P. Flajolet and R. Sedgewick, Analytic Combinatorics, Cambridge University Press (2009)](https://doi.org/10.1017/CBO9780511801655)

### Keeping cycle lengths makes Pólya’s color inventory a substitution

**Remember:** Each cycle takes one color for all its positions.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05E18. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite group permutes a finite set of positions. For each permutation, form a product with one factor uⱼ for each cycle of length j. The cycle index is the average of these products.

**Problem.** For finitely many colors, substituting the sum of the jth powers of their variables for uⱼ gives the polynomial counting colorings up to symmetry. Each coefficient counts the classes with the color totals given by its exponents.

**How the definition helps.** A coloring stays fixed under a permutation exactly when each cycle uses a single color. In our own account, a cycle of length j supplies j copies of its chosen color. For each set of totals, Burnside’s lemma counts classes by averaging the numbers of fixed colorings.

**Wikipedia:** [Pólya enumeration theorem](https://en.wikipedia.org/wiki/P%C3%B3lya_enumeration_theorem). It says: “the function φ is constant on every cycle q of g.”

**Sources:** none listed. No primary source with a working link was found.

### Label choices become multiplication in exponential generating functions

**Remember:** Divide by factorials so multiplication chooses the labels.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Suppose a(n) counts structures on any set of n labels and is finite. Its exponential generating function sums a(n)xⁿ/n! over n ≥ 0. An ordinary generating function omits the factorial.

**Problem.** Multiplying two exponential generating functions counts ordered pairs of structures on disjoint label sets that together use all labels.

**How the definition helps.** The factorial weights supply exactly the number of ways to choose labels for the first structure. In our own count, choosing k of n labels contributes n! divided by k!(n − k)!. Once the labels split, the two structures can be chosen independently.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “exponential generating functions (EGFs) apply to unordered sets (whose elements may be distinguished by having different labels).”

**Paper or page:** [Product of Exponential Generating Functions](https://proofwiki.org/wiki/Product_of_Exponential_Generating_Functions). It says: “∀ n ∈ ℤ≥₀: cₙ = ∑ₖ∈ℤ (n choose k) aₖ bₙ₋ₖ”

**Sources:** none listed. No primary source with a working link was found.

### Marked starts give the ballot probability even for repeated words

**Remember:** Count starting positions even when two starts read the same votes.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A rooted circular vote order includes a chosen starting position. A root is good when every nonempty prefix from that position has more A votes than B votes.

**Problem.** Suppose A has p votes and B has q, with p &gt; q ≥ 0. In a uniformly random order, A stays strictly ahead with probability (p − q)/(p + q).

**How the definition helps.** Marking positions lets the cycle lemma count exactly p − q good starts, even when some rotations read alike. In our own example, AABAAB has six positions but only three different rotations. A uniform starting position therefore succeeds with probability (p − q)/(p + q). Rotating a uniformly random vote order preserves its distribution.

**Wikipedia:** [Bertrand's ballot theorem](https://en.wikipedia.org/wiki/Bertrand%27s_ballot_theorem). It says: “The cycle lemma asserts that any sequence of p A's and q B's, where p &gt; q, has precisely p-q dominating cyclic permutations.”

**Paper or page:** [Bertrand's Ballot Theorem](https://proofwiki.org/wiki/Bertrand's_Ballot_Theorem). It says: “In other words, the probability that candidate A is always ahead of candidate B in the count is: (p − q)/(p + q)”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicity bounds give one factor for each part size

**Remember:** One factor chooses how many copies of one part size to use.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05A17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A partition is an unordered sum of positive integers, and the multiplicity of a part size is its number of occurrences. For each positive size k, prescribe a nonnegative integer b(k) and allow every multiplicity from zero through b(k).

**Problem.** The series whose coefficient of xⁿ counts these partitions is a product over all positive sizes k. Its factor for k is the sum of x raised to kj over integers 0 ≤ j ≤ b(k).

**How the definition helps.** Multiplicities let us choose the number of copies of each size independently. In our own proof, choosing one term per factor specifies one partition, and multiplying the terms adds its parts in the exponent. Only sizes through n can contribute a positive part to degree n.

**Wikipedia:** [Integer partition](https://en.wikipedia.org/wiki/Integer_partition). It says: “where m₁ is the number of 1's, m₂ is the number of 2's, etc.”

**Sources:** none listed. No primary source with a working link was found.

### Nonattacking rook placements make forbidden positions count correctly

**Remember:** Only forbidden squares in different rows and columns can occur together.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** On a square board, a permutation uses one square in each row and each column. The rook number r(k) counts choices of k forbidden squares in distinct rows and distinct columns.

**Problem.** For an n × n board, the avoidance count equals the sum of (−1)ᵏr(k)(n − k)! for k from 0 to n.

**How the definition helps.** Only forbidden squares in distinct rows and columns can occur together in a permutation. In our own proof, each compatible choice leaves (n − k)! ways to match the remaining rows and columns. Inclusion–exclusion alternately subtracts and adds these counts to exclude every permutation using a forbidden square.

**Wikipedia:** [Rook polynomial](https://en.wikipedia.org/wiki/Rook_polynomial). It says: “rₖ(B) is the number of ways to place k non-attacking rooks on the board B.”

**Sources:**

- [I. Kaplansky and J. Riordan, The problem of the rooks and its applications, Duke Mathematical Journal 13 (1946), 259–268](https://doi.org/10.1215/S0012-7094-46-01324-5)

### Nonempty labeled blocks give the Stirling generating functions

**Remember:** Build ordered nonempty blocks, then forget their order.

*Makes the theorem clean to state or prove.* MSC 05A15 (Exact enumeration problems, generating functions), 05A18. arXiv math.CO. Level 2: later undergraduate.

**Definition.** An exponential generating function records each count on n labels with weight xⁿ/n!. A set partition is an unordered collection of nonempty blocks, each label used once.

**Problem.** For k ≥ 0, partitions into k blocks have exponential generating function (exp(x) − 1)ᵏ/k!.

**How the definition helps.** The series exp(x) − 1 counts one nonempty block because each positive label count contributes exactly one block. Our own proof uses the product rule for exponential generating functions to distribute labels among k ordered blocks. Each unordered partition occurs in k! orders.

**Paper or page:** [Power Series Expansion for Integer Power of Exponential Function minus 1](https://proofwiki.org/wiki/Power_Series_Expansion_for_Integer_Power_of_Exponential_Function_minus_1). It says: “(eᶻ − 1)ⁿ = n! ∑ₖ∈ℤ {k brace n} zᵏ/k!”

**Sources:** none listed. No primary source with a working link was found.

### A unique nearest pole gives one leading coefficient term

**Remember:** A tie at the smallest distance can make coefficients oscillate.

*Rules out counterexamples.* MSC 05A16 (Asymptotic enumeration). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a rational generating function, poles are the zeros of the denominator left after cancellation. A dominant pole lies nearest zero, and it is unique if all other poles lie farther away.

**Problem.** Let ρ be the unique dominant pole, of order m, and let C = lim as z → ρ of (1−z/ρ)ᵐ A(z). The nth coefficient is asymptotic to Cρ⁻ⁿnᵐ⁻¹/(m−1)!.

**How the definition helps.** Every pole farther from zero contributes an exponentially smaller term. In our own derivation, partial fractions and the binomial series give the leading term at ρ. Its lower-order fractions contribute smaller powers of n. A tie can matter because 1/(1−z²) has poles at ±1 and coefficients alternating between 1 and 0.

**Paper or page:** [Trees with flowers: A catalog of integer partition and integer composition trees with their asymptotic analysis](https://arxiv.org/abs/2402.16111v2). It says: “Suppose that f(z) has a single dominant singularity at α &gt; 0 which is a pole of order r ≥ 1.”

**Sources:**

- [Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics, Theorem IV.9 and Note IV.26](https://ac.cs.princeton.edu/40complex/)

### Normalized pole terms give exact rational coefficient formulas

**Remember:** One pole of order m gives an exponential times a polynomial of degree m−1.

*True by definition.* MSC 05A16 (Asymptotic enumeration), 39A06. arXiv math.CO, math.CA. Level 2: later undergraduate.

**Definition.** For a rational function regular at zero, write each pole term at ρ as a constant times (1−z/ρ)⁻ʲ instead of (z−ρ)⁻ʲ. At a pole of order m the indices run from 1 through m, with a nonzero coefficient at m.

**Problem.** For a rational power series, the coefficients eventually equal a sum of terms ρ⁻ⁿ times polynomials in n, one for each pole ρ. Each polynomial has degree one less than the order of its pole.

**How the definition helps.** The normalized fractions have the form of the binomial series, so each pole gives its coefficients directly. In our own calculation, the nth coefficient of (1−z/ρ)⁻ʲ is ρ⁻ⁿ times the binomial coefficient n+j−1 choose j−1. Its polynomial factor has degree j−1, and the highest pole term has nonzero coefficient. Partial fractions supply the decomposition, whose polynomial part affects only finitely many coefficients.

**Wikipedia:** [Generating function](https://en.wikipedia.org/wiki/Generating_function). It says: “we are able to extract an exact formula for the sequence by taking the partial fraction expansion of the last generating function.”

**Sources:**

- [Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics, Theorem IV.9](https://doi.org/10.1017/CBO9780511801655)

### The Catalan binomial quotient gives the coefficient growth

**Remember:** The Catalan quotient is a central binomial coefficient divided by n+1.

*True by definition.* MSC 05A16 (Asymptotic enumeration), 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Define the nth Catalan number Cₙ as (2n)! divided by the product (n!)²(n+1). Equivalently, Cₙ is the nth coefficient of the series T(z) with constant term 1 that satisfies T(z) = 1+zT(z)².

**Problem.** The nth coefficient Cₙ of T(z) is asymptotic to 4ⁿ/(√π n√n).

**How the definition helps.** The factorial quotient gives the growth directly from Stirling’s formula. In our own calculation, (2n)!/(n!)² is asymptotic to 4ⁿ/√(πn), and dividing by n+1 gives the result. Identifying that quotient with the series coefficient requires solving the quadratic equation and expanding its square root.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “The coefficient of zⁿ in T(z) is the nth Catalan number”

**Sources:** none listed. No primary source with a working link was found.

### Zero padding makes subtraction of a staircase reversible for partitions

**Remember:** Pad with zeros so every part has a staircase step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A17 (Combinatorial aspects of partitions of integers), 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A partition lists positive integers in decreasing or equal order. Represent a partition with at most k parts by adding trailing zeros until the list has length k.

**Problem.** Fix nonnegative integers n and k. Partitions of n into k distinct parts correspond to partitions of n − k(k + 1)/2 into at most k parts.

**How the definition helps.** Padding gives both lists exactly k positions, so our own map can add or subtract the same staircase. Subtract (k,k − 1,…,1) from the distinct parts to obtain a nonincreasing list with entries at least zero. Adding the staircase recovers distinct positive parts. For k = 0 the staircase is empty.

**Wikipedia:** [Integer partition](https://en.wikipedia.org/wiki/Integer_partition). It says: “subtracting 1 from each part of such a partition yields a partition of n − M into at most M parts.”

**Sources:** none listed. No primary source with a working link was found.

### Set partitions make Stirling numbers nonnegative integers

**Remember:** Count maps by grouping inputs that have the same output.

*True by definition. Confidence: medium.* MSC 05A18 (Partitions of sets), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For integers 0 ≤ k ≤ n, S(n,k) counts partitions of an n-element set into k nonempty unlabelled blocks.

**Problem.** When xⁿ is written as a combination of falling factorials, every coefficient is a nonnegative integer.

**How the definition helps.** In our own count, the nonempty fibers of a map to x possible outputs partition its inputs. Given k blocks, assigning distinct outputs contributes the falling factorial x(x − 1)⋯(x − k + 1). Summing over partitions counts all xⁿ maps for every positive integer x, hence gives a polynomial identity. The coefficient S(n,k) counts partitions.

**Wikipedia:** [Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind). It says: “The Stirling numbers of the second kind may be characterized as the numbers that arise when one expresses powers of an indeterminate x in terms of the falling factorials”

**Sources:** none listed. No primary source with a working link was found.

### Partitions in a box make Gaussian binomials nonnegative

**Remember:** Each coefficient counts partitions that fit inside a box.

*True by definition.* MSC 05A30 (\\(q\\)-calculus and related topics), 05A17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For integers m,n ≥ 0, take all partitions with at most m positive parts, each at most n. Define the Gaussian binomial as their sum of powers of q, with exponent equal to the sum of the parts.

**Problem.** The Gaussian binomial coefficient is a polynomial with nonnegative integer coefficients. It is unchanged when m and n are swapped.

**How the definition helps.** Each coefficient counts partitions of one size in a finite box. In our own proof, transposing the rows and columns of each partition exchanges the box dimensions. Agreement with the usual quotient follows from the Gaussian binomial recurrence and its boundary values.

**Wikipedia:** [Gaussian binomial coefficient](https://en.wikipedia.org/wiki/Gaussian_binomial_coefficient). It says: “Although the formula at first appears to be a rational function, it actually is a polynomial, because the division is exact in Z\[q\].”

**Sources:** none listed. No primary source with a working link was found.

### A fixed point turns one design level into the next lower one

**Remember:** Put the fixed point back to recover the old count.

*True by definition. Confidence: medium.* MSC 05B05 (Combinatorial aspects of block designs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A t-design on v points has blocks of size k, with exactly λ blocks containing each t-point subset, where t ≤ k ≤ v. To derive at a point, keep the blocks containing it and remove it from each.

**Problem.** For t ≥ 2, deriving at a point produces a (t−1)-design on v−1 points with block size k−1. Each (t−1)-point subset belongs to exactly λ blocks.

**How the definition helps.** Our own derived blocks are counted by adding the fixed point to the requested subset. The resulting t-point subset belongs to exactly λ old blocks by the original balance condition. Removing the fixed point from a block is reversible, so that count is unchanged.

**nLab:** [block design](https://ncatlab.org/nlab/show/block+design). It says: “the number of b ∈ B such that {x₁,…,xₛ} ⊂ b is independent of the choice of such a subset and equals λ.”

**Sources:** none listed. No primary source with a working link was found.

### Complementing blocks preserves design balance and order

**Remember:** A pair occurs in a new block when its old block misses both points.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A balanced design has v points and b blocks of size k. Each point belongs to r blocks, each distinct pair belongs to λ blocks, and the order is r − λ. The complement replaces each block by the points outside it.

**Problem.** For 2 ≤ k ≤ v−2, each complement block has size v−k. Every point lies in b−r complement blocks, and every distinct pair lies in b−2r+λ. Both designs have the same order.

**How the definition helps.** Complement membership makes the new pair count the number of old blocks missing both points. Inclusion and exclusion gives b − 2r + λ, while a single point has count b − r. Our own subtraction cancels b and gives the same order.

**Wikipedia:** [Block design](https://en.wikipedia.org/wiki/Block_design). It says: “A 2-design and its complement have the same order.”

**Sources:** none listed. No primary source with a working link was found.

### Lines in a finite plane form a symmetric design

**Remember:** One block through each pair gives one line through each pair.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs), 05B25. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A balanced 2-design with parameters v, k, λ has v points, blocks of size k, and λ blocks through every pair of points. Interpret the blocks as lines, with incidence given by membership.

**Problem.** For integers q ≥ 2, projective planes of order q are exactly the 2-designs with parameters (q²+q+1, q+1, 1).

**How the definition helps.** Our own design description turns the unique line through two points into the requirement λ = 1. Counting through a point gives q + 1 lines there, and counting memberships gives as many lines as points. Symmetric design duality gives unique line intersections, and the sides of a triangle cover only 3q points, leaving a fourth point. Conversely, counting along the lines through a point of a projective plane gives q² + q + 1 points.

**Wikipedia:** [Bruck–Ryser–Chowla theorem](https://en.wikipedia.org/wiki/Bruck%E2%80%93Ryser%E2%80%93Chowla_theorem). It says: “the design parameters are v = b = q² + q + 1, r = k = q + 1, λ = 1.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring incomplete blocks makes Fisher's inequality true

**Remember:** No block is everything, so a point is in more blocks than a pair.

*Rules out counterexamples.* MSC 05B05 (Combinatorial aspects of block designs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A balanced incomplete block design has v points and b blocks of size k, with 1 ≤ k &lt; v. Every point lies in the same positive number r of blocks, and every distinct pair lies in exactly λ blocks.

**Problem.** Fisher's inequality: a balanced incomplete block design has at least as many blocks as points, b ≥ v.

**How the definition helps.** In our own proof, counting other points in blocks through a fixed point gives r(k−1) = λ(v−1), hence r &gt; λ. For the point–block incidence matrix M, MMᵀ equals (r−λ)I plus λ times the all-ones matrix. This positive definite product has rank v, so b ≥ v. A single block containing all v points violates the bound when v &gt; 1.

**Wikipedia:** [Fisher's inequality](https://en.wikipedia.org/wiki/Fisher%27s_inequality), [Block design](https://en.wikipedia.org/wiki/Block_design). It says: “(To avoid degenerate examples, it is also assumed that v &gt; k, so that no block contains all the elements of the set.”

**Sources:**

- [R. A. Fisher, An examination of the different possible solutions of a problem in incomplete blocks, Annals of Eugenics 10 (1940) 52–75](https://doi.org/10.1111/j.1469-1809.1940.tb02237.x)

### Square incidence makes even symmetric designs have square order

**Remember:** An odd power of the order must be a square.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs), 05B20. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A symmetric 2-design has v points and v blocks of size k, with 2 ≤ k &lt; v. Every distinct point pair lies in λ blocks, and the order is k − λ. The incidence matrix marks membership with ones and all other entries with zeros.

**Problem.** A symmetric balanced 2-design with even v has square order k − λ. Here v is the number of points and k is the block size.

**How the definition helps.** Our own incidence matrix makes the determinant of MMᵀ the square of an integer. This product has diagonal k and all other entries λ. Its eigenvalue on constant vectors is k² by the row sums, and on the (v − 1)-dimensional perpendicular space it is k − λ. For even v, the odd multiplicity forces every prime exponent in k − λ to be even.

**Paper or page:** [Invariants of Quadratic Forms and applications in Design Theory](https://arxiv.org/abs/2308.06008v2). It says: “If v is even then k − λ is the square of an integer.”

**Sources:**

- [S. Chowla and H. J. Ryser, Combinatorial problems (1950), Theorem 3](https://doi.org/10.4153/CJM-1950-009-8)

### Transposing square incidence makes symmetric designs closed under duality

**Remember:** Square incidence lets point-pair balance pass to block pairs.

*True by definition.* MSC 05B05 (Combinatorial aspects of block designs), 05B20. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A symmetric 2-design has v points and v blocks of size k, with every distinct point pair in λ blocks. Its incidence matrix M marks membership with ones and all other entries with zeros. Interchanging points and blocks gives the dual design and transposes M.

**Problem.** For 2 ≤ k &lt; v, the dual is a symmetric 2-design with the original parameters. In particular, any two distinct old blocks meet in λ points.

**How the definition helps.** Our own matrix replaces counting common points of blocks with reversing the factors in MMᵀ. This product equals (k − λ)I + λJ, where I is the identity and J is all ones. Since k &gt; λ, the product is positive definite and M is invertible. All row and column sums equal k, so M commutes with J and conjugation gives MᵀM = MMᵀ.

**Wikipedia:** [Block design](https://en.wikipedia.org/wiki/Block_design). It says: “in a symmetric design every two distinct blocks meet in λ points.”

**Sources:** none listed. No primary source with a working link was found.

### Third points turn products of Steiner systems into coordinate calculations

**Remember:** A product triple gets its third point one coordinate at a time.

*True by definition. Confidence: medium.* MSC 05B07 (Triple systems), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a Steiner triple system, each pair of points lies in a unique triple. Define x ⋆ y as its third point for distinct x and y, and set x ⋆ x = x. Apply this rule separately in the two coordinates of a product.

**Problem.** The product of the point sets of any two Steiner triple systems carries a Steiner triple system.

**How the definition helps.** Our own operation replaces a search for product triples with a coordinatewise calculation. The identities x⋆x = x, x⋆y = y⋆x and x⋆(x⋆y) = y hold in each coordinate. For distinct product points x and y, these identities give a third point distinct from both. Each pair in the resulting triple recovers its remaining point, so the triples form a Steiner system.

**nLab:** [Steiner system](https://ncatlab.org/nlab/show/Steiner+system). It says: “such that every l-element subset of S is in precisely one block.”

**Sources:** none listed. No primary source with a working link was found.

### Choosing one point per group encodes orthogonal Latin squares

**Remember:** Two choices from different groups name one block.

*Makes the theorem clean to state or prove.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a transversal design, each block takes one point from each of k disjoint groups of size n. Every pair from different groups belongs to exactly one block. Latin squares use every symbol once per row and column, and orthogonal squares display every ordered symbol pair once across corresponding cells.

**Problem.** A transversal design with k groups of size n exists exactly when order n admits k − 2 mutually orthogonal Latin squares. Assume k ≥ 3.

**How the definition helps.** Our own design definition lets each cell become one block listing its row, column and symbols, each in a separate group. The cross-group pair rule is precisely the row and column rule or the orthogonality rule, depending on the groups. Our own reverse construction uses the first two groups as cell coordinates and reads the remaining groups as square entries.

**Paper or page:** [Combinatorial solutions to the Social Golfer Problem and Social Golfer Problem with Adjacent Group Sizes](https://arxiv.org/abs/2507.23376v2). It says: “The existence of a TD(k,n) is equivalent to the existence of k-2 MOLS of order n.”

**Sources:** none listed. No primary source with a working link was found.

### Disagreement classes complete an almost full set of orthogonal squares

**Remember:** The missing square labels classes of completely different rows.

*True by definition. Confidence: medium.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Record each cell as a row of an orthogonal array, listing its two coordinates and its symbols in the given squares. Each pair of columns displays every possible ordered pair once. Call rows related if they are equal or disagree in every column.

**Problem.** Any n − 2 mutually orthogonal Latin squares of order n can be extended to n − 1, for n ≥ 2.

**How the definition helps.** Our own construction labels each cell by its class of mutually disagreeing rows to form the missing square. Each row agrees somewhere with n(n − 1) others. Two disagreeing rows share that whole neighbor set because each ordered choice of distinct columns specifies a different common neighbor. Hence disagreement or equality partitions rows into classes of size n, each using every symbol once in each old column.

**Paper or page:** [New Nonuniform Group Divisible Designs and Mixed Steiner Systems](https://arxiv.org/abs/2510.24132v1). It says: “There exists a set of k-1 pairwise orthogonal Latin squares of order k if and only if there exists a set of k-2 pairwise orthogonal Latin squares of order k.”

**Sources:** none listed. No primary source with a working link was found.

### Finite field slopes give a full set of orthogonal Latin squares

**Remember:** Two distinct slopes let two symbols recover one cell.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Over the field of q elements, use field elements x and y as row and column labels. The slope square for nonzero a puts ax + y in cell (x,y).

**Problem.** For each prime power q, the q − 1 slope squares are Latin because every row and column uses each symbol once. They are pairwise orthogonal, meaning every ordered symbol pair occurs once in corresponding cells.

**How the definition helps.** Our own slope formulas replace the search for a cell with two linear equations. Subtracting equations with distinct slopes determines x, then either equation determines y. For a single square, fixing either coordinate makes the other run through every symbol because a is nonzero. Existence uses the finite-field theorem.

**Wikipedia:** [Mutually orthogonal Latin squares](https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares). It says: “exists whenever q is a prime or prime power.”

**Sources:** none listed. No primary source with a working link was found.

### Missing symbol degrees give Ryser’s Latin rectangle completion test

**Remember:** A color class gives one new column with no repeated symbol.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares), 05D15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a Latin rectangle, no symbol repeats within any row or column. Make a bipartite graph with the rows on one side and all n symbols on the other. Join each row to its missing symbols.

**Problem.** Consider an r by s Latin rectangle on n symbols, where 1 ≤ r,s ≤ n. It extends to an n by n Latin square exactly when each symbol occurs at least r + s − n times.

**How the definition helps.** Our own graph turns a new column into a set of edges with no shared endpoint. Each row lacks n − s symbols, and the threshold means each symbol is missing from at most n − s rows. The bipartite edge-coloring theorem splits the edges into n − s columns, after which full-width completion adds the remaining rows. A symbol missing from more rows could not enter them all in these columns.

**Paper or page:** [Latin cubes with disjoint subcubes of two orders](https://arxiv.org/abs/2511.06768v1). It says: “Then L can be extended to an n × n latin square if and only if N(i) ≥ r + s − n for all i ∈ \[n\].”

**Sources:** none listed. No primary source with a working link was found.

### Product symbols preserve orthogonality in Latin squares

**Remember:** Paired symbols preserve the two independent Latin rules.

*True by definition. Confidence: medium.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A Latin square uses each symbol once in every row and column. Two squares are orthogonal if each ordered symbol pair occurs once when their cells are matched. The product of two squares pairs their rows, columns and corresponding entries.

**Problem.** If orders m and n each admit t pairwise orthogonal Latin squares, order mn does too.

**How the definition helps.** Our own paired entries replace the search for a larger square with two independent cell calculations. Pair corresponding squares from the two collections. Each row or column contains every symbol pair once by the Latin rule in each factor. For two product squares, the requested entries determine one cell in each factor by orthogonality, hence exactly one product cell.

**nLab:** [Latin square](https://ncatlab.org/nlab/show/Latin+square). It says: “a square array of numbers from 1 to n such that each row and each column contains every number from 1 to n.”

**Sources:** none listed. No primary source with a working link was found.

### Recording cell coordinates makes the bound on orthogonal squares a count

**Remember:** Two different cells can agree in at most one recorded column.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A Latin square uses each symbol once per row and column. Two squares are orthogonal if every ordered symbol pair occurs once across corresponding cells. For several pairwise orthogonal squares, the orthogonal array lists each cell as one row containing its coordinates and its symbols in all the squares.

**Problem.** A collection of mutually orthogonal Latin squares of order n has at most n − 1 squares when n ≥ 2.

**How the definition helps.** The array turns orthogonality into a limit on agreement. Distinct rows agree in at most one column. For one fixed row, each column supplies n − 1 other rows agreeing there. Our own count bounds the number of columns by (n² − 1)/(n − 1), and two columns already hold the coordinates.

**Wikipedia:** [Mutually orthogonal Latin squares](https://en.wikipedia.org/wiki/Mutually_orthogonal_Latin_squares). It says: “every ordered pair of symbols appears in exactly one row of A”

**Sources:** none listed. No primary source with a working link was found.

### Triples make every conjugate of a Latin square Latin

**Remember:** Permute rows, columns and symbols without changing the rule for pairs.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A Latin square of order n consists of n² triples with entries from 1 through n. No two distinct triples agree in two positions. A conjugate applies one permutation of the three positions to every triple.

**Problem.** Every permutation of the row, column and symbol roles produces another Latin square.

**How the definition helps.** In our own proof, permuting positions preserves the rule on agreements. Each pair of positions admits n² possible value pairs, so all occur exactly once. Taking the first two positions as cell coordinates recovers a table with each symbol once per row and column.

**Wikipedia:** [Latin square](https://en.wikipedia.org/wiki/Latin_square). It says: “Altogether there are 6 possibilities including "do nothing", giving us 6 Latin squares called the conjugates (also parastrophes) of the original square.”

**Sources:** none listed. No primary source with a working link was found.

### Affine directions give cells and symbols for orthogonal Latin squares

**Remember:** Two directions name a cell, and each remaining direction supplies a symbol.

*True by definition.* MSC 05B25 (Combinatorial aspects of finite geometries), 05B15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In an affine plane, a direction consists of a line and all lines parallel to it. Two directions label rows and columns, and each remaining direction labels cells by their line in that direction. Orthogonal Latin squares use each symbol once per row and column and each ordered pair once across corresponding cells.

**Problem.** For n ≥ 2, affine planes of order n exist exactly when there are n−1 pairwise orthogonal Latin squares of order n.

**How the definition helps.** Direction labels make any two lines in different directions determine one cell, giving the Latin and orthogonality rules. Conversely, use cells as points and group them by row, column or common symbol in each square. Orthogonality and the Latin rule allow two distinct cells to agree in at most one label. Our own count finds (n + 1)(n − 1) other cells through each cell, so every pair has a joining line.

**Wikipedia:** [Affine plane (incidence geometry)](https://en.wikipedia.org/wiki/Affine_plane_%28incidence_geometry%29). It says: “construct a set of n − 1 mutually orthogonal latin squares.”

**Sources:** none listed. No primary source with a working link was found.

### Parallel classes become points in projective completion

**Remember:** Parallel lines meet at the point named by their direction.

*True by definition.* MSC 05B25 (Combinatorial aspects of finite geometries), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In an affine plane of order n, each line has n points, and equal or disjoint lines form parallel classes. Add one point per class to all its lines. Add one line consisting of all new points.

**Problem.** Every finite affine plane of order n ≥ 2 extends to a projective plane of order n. In the extension, any two lines meet once and any two points determine one line.

**How the definition helps.** In our own proof, the new point for each direction joins exactly the old parallel lines of that direction at one point. Each old point lies on exactly one line of each direction, giving its unique join to each new point. The new line joins any two new points. There are n + 1 directions, so every completed line has n + 1 points.

**Wikipedia:** [Affine plane (incidence geometry)](https://en.wikipedia.org/wiki/Affine_plane_%28incidence_geometry%29). It says: “each of whose points is that point at infinity where an equivalence class of parallel lines meets.”

**Sources:** none listed. No primary source with a working link was found.

### Subspace incidence constructs a projective plane over every finite field

**Remember:** Span joins two points, and intersection locates the meeting point of two lines.

*True by definition. Confidence: medium.* MSC 05B25 (Combinatorial aspects of finite geometries), 05B05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Over a finite field, take the points to be the one-dimensional subspaces of a three-dimensional vector space. Take lines to be its two-dimensional subspaces and use inclusion for incidence.

**Problem.** For each prime power q, the subspace construction gives a plane with q + 1 points per line. Two points determine one line, two lines meet once, and some four points have no three on a line.

**How the definition helps.** Our own construction replaces the two incidence axioms with span and intersection in three dimensions. Distinct point spaces span two dimensions, and distinct line spaces intersect in one dimension. Counting nonzero vectors up to scaling gives (q² − 1)/(q − 1) points per line. The coordinate axes and the span of (1,1,1) supply four suitable points over the field of q elements.

**nLab:** [projective plane](https://ncatlab.org/nlab/show/projective+plane). It says: “As the set of lines through the origin in F³”

**Sources:** none listed. No primary source with a working link was found.

### Every matroid has a dual, even when the graph is not planar

**Remember:** Take complements of bases and you always get the dual matroid.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite matroid on E has a nonempty family of subsets called bases. For bases B,C and every e ∈ B ∖ C, some f ∈ C ∖ B makes (B ∖ {e}) ∪ {f} a basis. The dual bases are the complements in E of the original bases.

**Problem.** Every finite matroid has a dual, including the cycle matroid of every finite graph. That cycle matroid has a graphic dual exactly when the graph is planar. In a plane embedding, the dual matroid is the cycle matroid of the dual graph.

**How the definition helps.** In our own account, the basis exchange theorem for complements ensures that the dual exists. For a finite graph, its cycle matroid takes maximal forests as bases. Whitney’s planarity criterion characterizes exactly when the dual is graphic, and plane graph duality identifies its representing graph for a planar embedding.

**Wikipedia:** [Dual matroid](https://en.wikipedia.org/wiki/Dual_matroid), [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “The dual of a graphic matroid is itself graphic if and only if the underlying graph is planar; the matroid of the dual of a planar graph is the same as the dual of the matroid of the graph.”

**Sources:**

- [Hassler Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)
- [Hassler Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)

### Matroids are exactly where the greedy algorithm always works

**Remember:** Small independent sets can always grow from bigger ones, and greedy needs nothing more.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO, cs.DS. Level 2: later undergraduate.

**Definition.** A finite matroid has a nonempty family of independent subsets closed under taking subsets. Whenever independent sets A,B satisfy \|A\| &lt; \|B\|, some x ∈ B ∖ A makes A ∪ {x} independent.

**Problem.** Consider a nonempty family of subsets of a finite set, closed under taking subsets. Greedy finds a maximum-weight member for every assignment of nonnegative element weights exactly when the family defines a matroid.

**How the definition helps.** Our own explanation uses augmentation to show that greedy takes as many elements as possible from every prefix in decreasing weight order. The matroid greedy theorem proves that this prefix property gives optimal total weight and that failure of augmentation permits weights defeating greedy.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “no matter how the sets are weighted, the greedy algorithm finds a maximum-weight set in the family, then F must be the family of independent sets of a matroid.”

**Sources:**

- [Jack Edmonds, Matroids and the greedy algorithm, Mathematical Programming (1971)](https://doi.org/10.1007/BF01584082)
- [Hassler Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Matroids make the dual of a planar graph unique

**Remember:** Different drawings give different duals, but one dual matroid.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The graphic matroid of a graph has its edges as elements, and a set of edges is independent when it contains no cycle. The dual of a matroid has the complements of the maximal independent sets as its maximal independent sets. The dual graph of a plane drawing has a vertex for each face, and an edge across each edge of the drawing.

**Problem.** If G is planar, the dual of its graphic matroid is the graphic matroid of any planar dual of G. So all planar duals of G have the same matroid, though they may be non-isomorphic graphs.

**How the definition helps.** In our own argument, the plane spanning-tree duality theorem makes the complementary edge sets the bases of the dual graphic matroid for connected graphs. For disconnected graphs, add bridges between components within faces to connect them. Those bridges belong to every spanning tree, and their dual loops belong to none. Thus complementary bases give the same dual matroid for every drawing.

**Wikipedia:** [Graphic matroid](https://en.wikipedia.org/wiki/Graphic_matroid). It says: “While G may have multiple dual graphs, their graphic matroids are all isomorphic.”

**Sources:**

- [H. Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)
- [H. Whitney, 2-isomorphic graphs, American Journal of Mathematics 55 (1933) 245](https://doi.org/10.2307/2371127)

### Simple matroids correspond one-to-one with geometric lattices

**Remember:** Every singleton and every pair of distinct elements must be independent.

*Rules out counterexamples. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite matroid is simple if every singleton and every two-element subset is independent. A flat is a subset whose rank increases whenever one adds an outside element. A geometric lattice is a finite atomistic semimodular lattice.

**Problem.** The flats of a simple matroid form a geometric lattice. Every geometric lattice arises in this way from exactly one simple matroid, up to isomorphism.

**How the definition helps.** A loop lies in every flat, and parallel elements lie in the same flats, so the lattice of flats cannot see them (our own explanation). So a non-simple matroid cannot be recovered from its lattice. For simple matroids, the elements become the atoms of the lattice, and the two constructions are inverse to each other.

**Wikipedia:** [Geometric lattice](https://en.wikipedia.org/wiki/Geometric_lattice). It says: “These two constructions, of a simple matroid from a lattice and of a lattice from a matroid, are inverse to each other”

**Sources:**

- [G. Birkhoff, Abstract linear dependence and lattices, American Journal of Mathematics 57 (1935) 800–804](https://doi.org/10.2307/2371015)

### The augmentation axiom makes all bases of a matroid the same size

**Remember:** A smaller independent set can always grow, so bases match in size.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite matroid has a nonempty family of independent subsets closed under taking subsets. If independent U has more elements than independent V, some x ∈ U ∖ V makes V ∪ {x} independent. A base is an independent set maximal under inclusion.

**Problem.** In a matroid, all bases have the same number of elements, and this number is the rank of the matroid.

**How the definition helps.** In our own proof, a smaller base could gain an element from a larger base while remaining independent. This contradicts maximality, so every base has the same size, called the rank.

**Paper or page:** [All Bases of Matroid have same Cardinality](https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality), [Equivalence of Definitions of Matroid/Definition 1 implies Definition 4](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_4). It says: “That is, all bases of M have the same cardinality, which is the rank of M.”

**Sources:**

- [ProofWiki, All Bases of Matroid have same Cardinality](https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality)
- [ProofWiki, Equivalence of Definitions of Matroid/Definition 1 implies Definition 4](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_4)

### Prüfer sequences count trees with prescribed degrees

**Remember:** Each label appears once for every lost edge except its last.

*True by definition.* MSC 05C05 (Trees), 05C30. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a tree on n ≥ 2 numbered vertices, repeatedly remove the smallest labeled leaf, a vertex with one edge, and record its neighbor’s label. Stop when two vertices remain. The recorded labels form the Prüfer sequence.

**Problem.** Take n ≥ 2 labeled vertices with prescribed positive degrees d₁ through dₙ totaling 2n − 2. The number of trees with those degrees is (n − 2)! divided by the product of all (dᵢ − 1)!.

**How the definition helps.** In our own count, a label appears whenever it loses an edge before its final edge, hence exactly dᵢ − 1 times. The Prüfer bijection counts each tree once, so arranging those repeated labels gives the stated multinomial coefficient.

**Wikipedia:** [Prüfer sequence](https://en.wikipedia.org/wiki/Pr%C3%BCfer_sequence). It says: “For each node set its degree to the number of times it appears in the sequence plus 1.”

**Sources:** none listed. No primary source with a working link was found.

### A dual bond corresponds to one simple cycle

**Remember:** A simple closed curve cuts the dual in two.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C40. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A bond is a nonempty set of edges whose deletion disconnects a connected graph, but no proper subset does. In a plane dual, each face becomes a vertex and each edge joins its two neighboring faces. Count a loop and a pair of parallel edges as cycles.

**Problem.** In a finite connected plane graph, the dual edges of any simple cycle form a bond. Every dual bond arises this way.

**How the definition helps.** A simple cycle separates the faces into two connected regions, so precisely its dual edges join those regions. The Jordan curve theorem supplies the separation. Conversely, in our own argument, the edges of a dual bond have even degree at every original vertex and therefore split into cycles. One cycle already separates the dual, so minimality leaves only that cycle.

**Wikipedia:** [Dual graph](https://en.wikipedia.org/wiki/Dual_graph). It says: “every simple cycle of G corresponds to a minimal cutset in the dual of G, and vice versa.”

**Sources:** none listed. No primary source with a working link was found.

### Euler's formula holds on every surface when each face is a disk

**Remember:** Ask that every face is a disk, and vertices minus edges plus faces is fixed.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 57K20. arXiv math.CO, math.GT. Level 2: later undergraduate.

**Definition.** A finite graph has a cellular embedding in a closed surface if it is drawn without crossings and each complementary region is an open disk.

**Problem.** For a graph drawn on a closed surface S with every face a disk, the number of vertices minus edges plus faces equals χ(S).

**How the definition helps.** In our own explanation, a cellular embedding gives one cell per vertex, edge and face. Their alternating count gives χ(S) by invariance of Euler characteristic under cell decomposition. One nonseparating loop on a torus leaves an annulus. With one vertex, one edge and one region, the count gives one although the torus has Euler characteristic zero.

**Paper or page:** [Efficient polynomial-time approximation scheme for the genus of dense graphs](https://arxiv.org/abs/2011.08049). It says: “Let G be a graph which is 2-cell embedded in a surface S. If G has n vertices, e edges and f faces in S, then χ(S)=n−e+f.”

**Sources:**

- [Yifan Jing, Bojan Mohar, Efficient polynomial-time approximation scheme for the genus of dense graphs, arXiv:2011.08049 (2020)](https://arxiv.org/abs/2011.08049)

### Faces that are disks make embeddings the same as rotation systems

**Remember:** When every face is a disk, the cyclic orders at vertices determine everything.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C62. arXiv math.CO, math.GT. Level 2: later undergraduate.

**Definition.** An embedding is cellular if every complementary region is an open disk. A rotation system assigns each vertex a cyclic order of its incident edge ends, counting the two ends of a loop separately.

**Problem.** Cellular embeddings of a connected multigraph on closed oriented surfaces, up to orientation-preserving homeomorphism, correspond one-to-one to rotation systems. So a topological question becomes a question about permutations.

**How the definition helps.** When every face is a disk, the faces carry no hidden topology, so the cyclic orders at the vertices determine the surface. One traces the faces by following the rotation, glues in disks, and gets back the surface. If a face could be an annulus or a punctured torus, one rotation system would fit many surfaces (our own remark).

**Wikipedia:** [Combinatorial map](https://en.wikipedia.org/wiki/Combinatorial_map), [Graph embedding](https://en.wikipedia.org/wiki/Graph_embedding). It says: “Every rotation scheme defines a unique 2-cell embedding of a connected multigraph on a closed oriented surface (up to orientation-preserving topological equivalence).”

**Sources:**

- [L. Heffter, Ueber das Problem der Nachbargebiete, Mathematische Annalen 38 (1891) 477–508](https://doi.org/10.1007/BF01203357)
- [J. R. Edmonds, A combinatorial representation for oriented polyhedral surfaces, Master's thesis, University of Maryland (1960)](https://hdl.handle.net/1903/24820)

### Forbidden minors reduce planarity to two graphs

**Remember:** Contract the stretched parts and look for just two graphs.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C83. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph obtained by deleting vertices or edges and contracting edges is called a minor. Contracting an edge merges its ends, after which loops and duplicate edges may be discarded.

**Problem.** A finite simple graph is planar exactly when neither K₅ nor K₃,₃ is a minor. K₅ joins every pair of five vertices, and K₃,₃ joins each of three vertices to each of three others.

**How the definition helps.** Contraction turns each path of a subdivided obstruction back into one edge, so two fixed minors suffice. Kuratowski’s theorem finds one of the two subdivisions in every nonplanar graph. Conversely, both forbidden graphs are nonplanar and taking minors preserves planarity, completing our own reduction.

**nLab:** [planar graph](https://ncatlab.org/nlab/show/planar+graph). It says: “Wagner's theorem that this is the case iff K₅, K₃,₃ are not graph minors of G”

**Sources:** none listed. No primary source with a working link was found.

### Fáry's theorem holds for simple graphs, since parallel edges cannot be straight

**Remember:** Two points fix one straight segment, so straight drawings need simple graphs.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C62. arXiv math.CO, cs.CG. Level 2: later undergraduate.

**Definition.** A simple graph has no loops and at most one edge between any two vertices. A planar graph is one that can be drawn in the plane with no two edges crossing.

**Problem.** Every simple planar graph has a crossing-free drawing in which every edge is a straight line segment. So curved edges do not let more graphs be drawn.

**How the definition helps.** The word simple removes the only graphs that obviously cannot be drawn straight. Two parallel edges would have to be the same segment, and a loop cannot be a segment at all (our own remark). Every planar multigraph has a curved crossing-free drawing, so the theorem is false without the restriction.

**Wikipedia:** [Fáry's theorem](https://en.wikipedia.org/wiki/F%C3%A1ry%27s_theorem), [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “Fáry's theorem states that any simple, planar graph can be drawn without crossings so that its edges are straight line segments.”

**Sources:**

- [S. K. Stein, Convex maps, Proceedings of the American Mathematical Society 2 (1951) 464–466](https://doi.org/10.1090/S0002-9939-1951-0041425-5)
- [W. T. Tutte, How to draw a graph, Proceedings of the London Mathematical Society 13 (1963) 743–767](https://doi.org/10.1112/plms/s3-13.1.743)

### One universal vertex turns outerplanarity into planarity

**Remember:** The added vertex marks the face that must touch every old vertex.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C83. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The cone over a graph adds one new vertex adjacent to all its vertices. Outerplanarity asks for a crossing-free drawing with every vertex on the boundary of the outer face.

**Problem.** A finite simple graph is outerplanar exactly when its cone can be drawn without crossings.

**How the definition helps.** The new vertex records one face that touches every old vertex. In an outerplanar drawing, place it in the outer face and draw its edges there. Conversely, deleting it from a drawing of the cone merges the incident regions into one face touching every old vertex. Our own explanation uses that face as the outer face.

**Wikipedia:** [Outerplanar graph](https://en.wikipedia.org/wiki/Outerplanar_graph). It says: “the graph formed from G by adding a new vertex, with edges connecting it to all the other vertices, is a planar graph.”

**Sources:** none listed. No primary source with a working link was found.

### Subdivisions let two forbidden graphs characterize planarity

**Remember:** Bending an edge through extra vertices cannot remove a crossing obstruction.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A subdivision replaces each edge with a path whose internal vertices are new and belong to no other replacement path. K₅ joins every pair of five vertices. K₃,₃ joins each of three vertices to each of three others.

**Problem.** A finite simple graph can be drawn without crossings exactly when it contains no subdivision of K₅ or K₃,₃ as a subgraph.

**How the definition helps.** Subdivisions let two fixed graphs describe obstructions with arbitrarily long replacement paths. In our own example, subdividing every edge of K₃,₃ once hides both ordinary forbidden subgraphs. Kuratowski’s theorem supplies the hard direction by finding a forbidden subdivision in every nonplanar graph.

**nLab:** [planar graph](https://ncatlab.org/nlab/show/planar+graph). It says: “G is planar iff it does not contain a subgraph that is an edge subdivision of K₅ or K₃,₃”

**Sources:**

- [Casimir Kuratowski, Sur le problème des courbes gauches en Topologie (1930)](https://doi.org/10.4064/fm-15-1-271-283)

### The complement of a spanning tree gives a dual spanning tree

**Remember:** Tree edges left out on one side make a tree on the other.

*True by definition.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The plane dual has a vertex for every face, including the outer face. Each original edge gives a dual edge joining the faces on its two sides. Given a tree connecting all original vertices, keep every dual vertex and only the dual edges corresponding to edges outside the tree.

**Problem.** For a finite connected plane graph, the duals of the edges outside any spanning tree form a spanning tree of the dual.

**How the definition helps.** In our own proof, cycle–bond duality exchanges cycles with minimal cuts. A cycle of selected dual edges would give a cut missed by the original tree. If the selected dual edges were disconnected, they would miss a minimal dual cut, giving a cycle inside the original tree.

**Wikipedia:** [Dual graph](https://en.wikipedia.org/wiki/Dual_graph). It says: “spanning trees are dual to the complements of spanning trees”

**Sources:** none listed. No primary source with a working link was found.

### Landmark distances bound graph size

**Remember:** Every nonlandmark needs its own list of positive distances.

*True by definition.* MSC 05C12 (Distance in graphs). arXiv cs.DM. Level 2: later undergraduate.

**Definition.** A set of landmarks resolves a finite connected graph if every vertex has a different distance list in the same landmark order. The metric dimension is the smallest size of a resolving set, and the diameter is the largest distance between vertices.

**Problem.** Let β be the metric dimension and D the diameter of a finite connected graph. If β ≥ 1, the graph has at most Dᵝ + β vertices.

**How the definition helps.** Distance lists turn pairwise separation into an injection, so counting possible lists bounds the graph’s size. Each nonlandmark has a positive integer distance of at most D to each landmark. There are at most Dᵝ such lists and β landmarks to add. In our own explanation, the definitions agree because unequal lists differ in at least one coordinate.

**Wikipedia:** [Metric dimension (graph theory)](https://en.wikipedia.org/wiki/Metric_dimension_%28graph_theory%29). It says: “each vertex that is not in the resolving set is uniquely determined by a distance vector”

**Sources:**

- [Samir Khuller, Balaji Raghavachari, and Azriel Rosenfeld, Landmarks in Graphs (1996)](https://doi.org/10.1016/0166-218X(95)00106-2)

### Brooks' theorem needs connected graphs to name its exceptions

**Remember:** Ask for connected simple graphs, and only odd cycles and cliques need Δ + 1.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is connected if a path joins every pair of vertices. It is simple if it has no loops and no repeated edges. Its maximum degree Δ is the largest number of neighbours of any vertex.

**Problem.** Brooks' theorem says that a connected simple graph needs Δ + 1 colours only when it is an odd cycle or a complete graph.

**How the definition helps.** Connectedness ensures that the exceptional component is the whole graph. In our own example, K₄ together with an isolated vertex needs Δ + 1 colours but is neither complete nor an odd cycle. Brooks’ theorem gives the bound for the remaining connected simple graphs.

**Paper or page:** [On Lattice Diameter Segments and A Discrete Borsuk Partition Problem](https://arxiv.org/abs/2508.20009). It says: “If G is a connected simple graph, then χ(G) ≤ Δ(G)+1, with equality if and only if G is an odd cycle or a complete graph.”

**Sources:**

- [Anouk E. Brose, Jesús A. De Loera, Gyivan Lopez-Campos, Antonio J. Torres, On Lattice Diameter Segments and A Discrete Borsuk Partition Problem, arXiv:2508.20009 (2025)](https://arxiv.org/abs/2508.20009)

### Four face colors give three edge colors by subtraction

**Remember:** Three different face colors produce three different nonzero edge labels.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Use pairs of bits as four face colors, adding or subtracting each coordinate modulo two. Faces on opposite sides of an edge must have different colors. Label each edge by the difference between its face colors.

**Problem.** Take a finite connected graph drawn without crossings, with three edges at each vertex and no edge whose removal disconnects it. Its faces admit a proper four-coloring exactly when its edges admit three colors with different colors at each vertex.

**How the definition helps.** Three distinct face colors at a vertex give three distinct nonzero edge differences. Conversely, in our own proof, assign the three nonzero bit pairs to the edge colors. They sum to zero around each vertex, so adding around any simple closed curve crossing edges gives zero by summing over the enclosed vertices. Thus adding labels along crossings from a fixed face gives consistent face colors, different across each edge.

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring). It says: “every planar cubic bridgeless graph admits a Tait coloring.”

**Sources:** none listed. No primary source with a working link was found.

### In the four colour theorem, touching at a corner is not adjacency

**Remember:** Countries touching only at a corner may share a colour.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a finite plane graph drawing, the regions are the connected components of the complement. Two distinct regions are adjacent if an edge of the drawing borders both.

**Problem.** The four colour theorem: you can colour the regions of every planar map with four colours so that adjacent regions get different colours.

**How the definition helps.** In our own reduction, edge adjacency makes region colouring equivalent to vertex colouring on the plane dual after removing loops. If point contact counted, five pie slices meeting at the centre would need five colours. With edge adjacency, the four colour theorem for planar graphs applies.

**Wikipedia:** [Four color theorem](https://en.wikipedia.org/wiki/Four_color_theorem). It says: “Otherwise, a map in a shape of a pie chart would make an arbitrarily large number of regions 'adjacent' to each other at a common corner, and require an arbitrarily large number of colors as a result.”

**Sources:**

- [Kenneth Appel and Wolfgang Haken, Every planar map is four colorable. Part I: Discharging, Illinois Journal of Mathematics 21 (1977) 429–490](https://doi.org/10.1215/ijm/1256049011)
- [Hud Hudson, Four colors do not suffice, The American Mathematical Monthly 110 (2003) 417–423](https://doi.org/10.1080/00029890.2003.11919979)

### Regular completion turns bipartite edge coloring into perfect matchings

**Remember:** Complete the degrees, peel off matchings, and discard the added edges.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A proper edge coloring partitions edges into matchings, sets of edges with no shared endpoint. In a bipartite graph, edges run between two vertex parts. A regular completion adds vertices and edges until the parts have equal size and every vertex has the original maximum degree.

**Problem.** If a finite bipartite graph has maximum degree Δ, its edges can be colored with Δ colors so that incident edges have different colors. Fewer colors cannot suffice.

**How the definition helps.** Each perfect matching supplies one color and removes exactly one edge at every vertex. In our own construction, equalize the part sizes with isolated vertices and fill equal degree deficits across the parts, allowing parallel edges. Hall’s theorem supplies a perfect matching at each positive degree because every left subset has at least as many neighbors as vertices. Discarding the added edges gives the coloring, and a vertex of maximum degree needs every color.

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring). It says: “equivalent to the problem of partitioning the edge set into k matchings.”

**Paper or page:** [Total coloring graphs with large minimum degree](https://arxiv.org/abs/2507.05548). It says: “Every bipartite multigraph G satisfies χ′(G) = Δ(G).”

**Sources:** none listed. No primary source with a working link was found.

### Vertex orders make the greedy colouring bound immediate

**Remember:** Fewer than κ earlier neighbours leave a colour free among κ colours.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The colouring number is the least integer κ for which some vertex order gives every vertex fewer than κ earlier neighbours. An equivalent definition is one plus the degeneracy, the largest minimum degree among nonempty subgraphs.

**Problem.** A finite nonempty simple graph has a proper colouring with at most its colouring number of colours.

**How the definition helps.** In our own proof, colour vertices in the specified order. Each vertex has fewer than κ earlier neighbours, so at least one of the κ colours remains available. Using that colour maintains a proper colouring at each step.

**Wikipedia:** [Degeneracy (graph theory)](https://en.wikipedia.org/wiki/Degeneracy_%28graph_theory%29). It says: “By using a greedy coloring algorithm on an ordering with optimal coloring number, one can graph color a k-degenerate graph using at most k+1 colors.”

**Sources:**

- [P. Erdős and A. Hajnal, On chromatic number of graphs and set-systems, Acta Math. Acad. Sci. Hungar. 17 (1966) 61–99](https://doi.org/10.1007/BF02020444)
- [G. Szekeres and H. S. Wilf, An inequality for the chromatic number of a graph, Journal of Combinatorial Theory 4 (1968) 1–3](https://doi.org/10.1016/S0021-9800(68)80081-X)

### Vizing's Δ + 1 bound needs simple graphs

**Remember:** Simplicity limits each pair to one edge, so multiplicity costs at most one colour.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A simple graph has no loops and at most one edge per vertex pair. In a loopless multigraph, Δ is the maximum degree and μ is the largest edge multiplicity, or zero for an edgeless graph. A proper edge colouring gives distinct colours to edges sharing a vertex.

**Problem.** Every simple graph has an edge colouring with Δ + 1 colours. A loopless multigraph needs at most Δ + μ colours.

**How the definition helps.** Simplicity stops many edges from crowding between the same few vertices, which is what forces many colours. Shannon's triangle shows this (our own example). Double each edge of a triangle; then Δ = 4, but all six edges meet each other, so six colours are needed. For simple graphs, the proof is an exchange of colours along alternating paths.

**Wikipedia:** [Vizing's theorem](https://en.wikipedia.org/wiki/Vizing%27s_theorem). It says: “Vizing's theorem states that every simple undirected graph may be edge colored using a number of colors that is at most one larger than the maximum degree Δ of the graph.”

**Sources:**

- [C. E. Shannon, A theorem on coloring the lines of a network, Journal of Mathematics and Physics 28 (1949) 148–152](https://doi.org/10.1002/sapm1949281148)
- [C. Berge and J. C. Fournier, A short proof for a generalization of Vizing's theorem, Journal of Graph Theory 15 (1991) 333–336](https://doi.org/10.1002/jgt.3190150309)

### An elimination order gives an optimal colouring of chordal graphs

**Remember:** Colour backwards so each vertex sees only a clique of coloured neighbours.

*True by definition.* MSC 05C17 (Perfect graphs), 05C15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A perfect elimination order lists the vertices of a finite simple graph so that each vertex’s later neighbours are pairwise adjacent. Define a chordal graph as one admitting such an order.

**Problem.** The fewest colours needed for a proper colouring of a chordal graph is the size ω of its largest clique. A proper colouring gives adjacent vertices different colours.

**How the definition helps.** In our own proof, colour in reverse order. Each vertex and its already coloured neighbours form a clique, so at most ω − 1 colours are unavailable. A clique of size ω needs ω colours. The perfect elimination ordering theorem identifies these graphs with those having a chord in every cycle of length at least four.

**Wikipedia:** [Chordal graph](https://en.wikipedia.org/wiki/Chordal_graph). It says: “an optimal coloring may be obtained by applying a greedy coloring algorithm to the vertices in the reverse of a perfect elimination ordering.”

**Sources:**

- [D. R. Fulkerson and O. A. Gross, Incidence matrices and interval graphs, Pacific Journal of Mathematics 15 (1965) 835–855](https://doi.org/10.2140/pjm.1965.15.835)
- [D. J. Rose, Triangulated graphs and the elimination process, Journal of Mathematical Analysis and Applications 32 (1970) 597–609](https://doi.org/10.1016/0022-247X(70)90282-9)

### Perfect graphs restate Kőnig's theorem as perfection of bipartite complements

**Remember:** Perfect means clique size equals colour count in every induced subgraph.

*Makes the theorem clean to state or prove.* MSC 05C17 (Perfect graphs), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is perfect when, in it and in every induced subgraph, the chromatic number equals the size of the largest clique. A bipartite graph has its vertices split into two sides, with every edge going between the sides.

**Problem.** The complement of a bipartite graph is perfect. This is a restatement of Kőnig's theorem that in a bipartite graph the largest matching has the size of the smallest vertex cover.

**How the definition helps.** In our own count on n vertices, a complement clique omits a vertex cover of the bipartite graph. Its maximum size is n minus the minimum cover size. Complement colour classes are singletons or matched pairs, so the minimum colour count is n minus the maximum matching size. Kőnig’s theorem equates the two sizes, and the same argument applies to each induced subgraph.

**Wikipedia:** [Bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph), [Perfect graph](https://en.wikipedia.org/wiki/Perfect_graph). It says: “Perfection of bipartite graphs is easy to see (their chromatic number is two and their maximum clique size is also two) but perfection of the complements of bipartite graphs is less trivial, and is another restatement of Kőnig's theorem.”

**Sources:**

- [L. Lovász, Normal hypergraphs and the perfect graph conjecture, Discrete Mathematics 2 (1972) 253–267](https://doi.org/10.1016/0012-365X(72)90006-4)

### Conservative weights bound closed walks

**Remember:** Check cycles once, but do not traverse a negative edge twice.

*Rules out counterexamples.* MSC 05C22 (Signed and weighted graphs), 05C38. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a simple undirected graph, an edge weighting is conservative if every simple cycle has nonnegative total weight. This lets some individual edges have negative weights.

**Problem.** Every closed walk that uses each negative edge at most once has nonnegative weight under a conservative weighting.

**How the definition helps.** In our own proof, split the walk at repeated vertices into simple cycles and two-step returns. Conservative weights give each simple cycle nonnegative weight. A two-step return uses its edge twice, so the hypothesis excludes a return along a negative edge. Adding the piece weights gives the bound.

**Paper or page:** [Shortest Odd Paths in Undirected Graphs with Conservative Weight Functions](https://arxiv.org/abs/2308.12653v1). It says: “If W is a closed walk that does not contain any edge of E⁻ more than once, then w(W) ≥ w(E(W)) ≥ 0.”

**Sources:**

- [Shortest Odd Paths in Undirected Graphs with Conservative Weight Functions](https://arxiv.org/abs/2308.12653v1)

### Switching turns Harary's balance theorem into one change of signs

**Remember:** Switch vertex signs in pairs along edges to preserve every cycle product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C22 (Signed and weighted graphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A signed graph assigns each edge a sign from {+1,−1} and is balanced if every cycle has sign product +1. A switching assigns each vertex v a sign s(v) and multiplies each edge sign at uv by s(u)s(v).

**Problem.** Harary's balance theorem: a signed graph is balanced exactly when some switching makes every edge positive. Equivalently, the vertices split into two parts, with negative edges exactly between the parts.

**How the definition helps.** Switching preserves each cycle product because every vertex sign in the product occurs twice. In our own proof, choose signs along a spanning forest to make its edges positive. Balance then forces each remaining edge positive on its fundamental cycle. The two vertex sign classes put exactly the original negative edges between classes.

**Paper or page:** [Circular Game Coloring of Signed Graphs](https://arxiv.org/abs/2505.21586). It says: “There exists a switching function ζ : V → {+1,−1} such that the switched signature σᶻ satisfies σᶻ(e) = +1 for all e∈E”

**Sources:**

- [Pie Desire Ebode Atanhgana, Circular Game Coloring of Signed Graphs, arXiv:2505.21586 (2025)](https://arxiv.org/abs/2505.21586)

### An elimination order factors the chordal chromatic polynomial

**Remember:** A clique of N later neighbours rules out exactly N colours.

*True by definition.* MSC 05C31 (Graph polynomials), 05C17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite simple graph is chordal if its vertices admit an order in which the later neighbours of each vertex form a clique. Let Nᵢ count the later neighbours of vertex vᵢ. At each positive integer x, the chromatic polynomial counts proper colourings with x available colours.

**Problem.** For this vertex order, P(x) = (x − N₁)(x − N₂)⋯(x − Nₙ).

**How the definition helps.** In our own proof, take x at least the number of vertices and colour in reverse order. The Nᵢ later neighbours form a clique, so their colours rule out exactly Nᵢ choices. Multiplying the available choices gives the claimed product for infinitely many x and hence as a polynomial.

**Wikipedia:** [Chordal graph](https://en.wikipedia.org/wiki/Chordal_graph). It says: “The chromatic polynomial equals (x−N₁)(x−N₂)⋯(x−Nₙ).”

**Sources:**

- [D. J. Rose, Triangulated graphs and the elimination process, Journal of Mathematical Analysis and Applications 32 (1970) 597–609](https://doi.org/10.1016/0022-247X(70)90282-9)

### Partitions into independent sets make the coloring count polynomial

**Remember:** Partition first, then supply different names for the classes.

*True by definition.* MSC 05C31 (Graph polynomials), 05C15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a finite graph, let aₖ count partitions of its vertex set into k nonempty sets containing no adjacent vertices. These sets are the unlabelled colour classes.

**Problem.** For each nonnegative integer q, the number of proper colorings with q available colors is a polynomial in q. Its term for k classes is aₖ times the product of k descending factors starting at q.

**How the definition helps.** Each partition into k classes needs k distinct color names, so it contributes q(q − 1)⋯(q − k + 1) colorings. For zero classes the product is one. Summing over all possible class counts gives the polynomial directly, our own comparison with deletion and contraction.

**Wikipedia:** [Chromatic polynomial](https://en.wikipedia.org/wiki/Chromatic_polynomial). It says: “counts the number of partitions of the vertex set into k (non-empty) independent sets.”

**Sources:** none listed. No primary source with a working link was found.

### Tutte subset sums count forests and spanning edge sets

**Remember:** Set a variable to one to keep only terms with exponent zero.

*True by definition.* MSC 05C31 (Graph polynomials), 05C05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a finite graph with vertex set V and edge set E, let k(A) count components of (V,A), including isolated vertices. The Tutte polynomial sums (x−1)ᵃ(y−1)ᵇ over all A ⊆ E, with a = k(A)−k(E) and b = \|A\|−\|V\|+k(A).

**Problem.** T(1,1) counts spanning forests, the edge sets with no cycle that connect each component of G. T(2,1) counts all edge sets with no cycle, and T(1,2) counts edge sets with the same components as G.

**How the definition helps.** The subset sum turns evaluations into counts because setting a variable to 1 keeps just the terms with exponent zero (our own). The first exponent is zero exactly when A connects each component of G. The second is zero exactly when A contains no cycle. Setting a variable to 2 gives every term weight 1 in that variable (our own).

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “T<sub>G</sub>(1,1) counts the number of spanning forests (edge subsets without cycles and the same number of connected components as G).”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)

### Tutte subset sums multiply over disjoint unions

**Remember:** Edge sets split and ranks add, so the sum factors.

*True by definition. Confidence: medium.* MSC 05C31 (Graph polynomials). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a finite graph with edge set E, the rank r(A) counts all vertices minus the number of components of the spanning subgraph on A. Its Tutte polynomial sums (x−1)ᵃ(y−1)ᵇ over A ⊆ E, with a = r(E)−r(A) and b = \|A\|−r(A).

**Problem.** The Tutte polynomial of a disjoint union of graphs is the product of their Tutte polynomials.

**How the definition helps.** In our own proof, choosing an edge subset of a disjoint union means choosing one subset in each graph. Edge counts and ranks add, so the summand is the product of the two separate summands. Summing over both choices multiplies the two polynomials.

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “The Tutte polynomial factors into connected components. If G is the union of disjoint graphs H and H′ then T<sub>G</sub> = T<sub>H</sub> · T<sub>H′</sub>”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)

### Vertex weights reduce Turán’s edge bound to a weighted maximum

**Remember:** Uniform weights count edges, and some optimal weights occupy a clique.

*True by definition.* MSC 05C35 (Extremal problems in graph theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A clique is a set of vertices joined in every pair. Give the vertices nonnegative weights totaling one. The weighted edge sum adds the product of the two endpoint weights for each edge.

**Problem.** A simple graph on n vertices without a clique of size r + 1 has at most (1 − 1/r)n²/2 edges for r ≥ 2.

**How the definition helps.** For n &gt; 0, uniform weights give the edge count divided by n². In our own proof, combine two nonadjacent positive weights at the vertex with at least as much total neighbour weight. This never decreases the sum and eventually leaves a clique of at most r positive weights. Their squares sum to at least 1/r, so the edge sum is at most (1 − 1/r)/2.

**Paper or page:** [An edge-spectral Erdős-Stone-Simonovits theorem and its stability](https://arxiv.org/abs/2508.15271v1). It says: “\\sum <sub>ij \\in E(G)</sub> x<sub>ix</sub><sub>j</sub> \\le \\frac{1}{2}\\left( 1- \\frac{1}{r} \\right).”

**Sources:**

- [T. Motzkin and E. Straus, Maxima for graphs and a new proof of a theorem of Turán (1965)](https://doi.org/10.4153/CJM-1965-053-6)

### An edge boundary map gives the cycle space dimension

**Remember:** Subtract the rank of the boundary map from the number of edges.

*True by definition.* MSC 05C38 (Paths and cycles), 05C50. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Represent edge sets of a finite simple undirected graph by vectors over the two-element field. The boundary map sends an edge set to its odd-degree vertices. The cycle space is its kernel.

**Problem.** A graph with m edges, n vertices and c connected components has a cycle space of dimension m − n + c.

**How the definition helps.** In our own proof, rank–nullity subtracts the boundary rank from m. Every boundary has even size in each component by the degree sum formula. Conversely, pair the marked vertices within each component and add paths joining the pairs to realize every such boundary. The c independent parity conditions give rank n − c.

**Wikipedia:** [Cycle space](https://en.wikipedia.org/wiki/Cycle_space). It says: “consists of the elements of the edge space that map to the zero element of the vertex space; these are exactly the Eulerian subgraphs.”

**Sources:**

- [O. Veblen, An application of modular equations in analysis situs, Annals of Mathematics 14 (1912) 86–94](https://doi.org/10.2307/1967604)

### Cycle addition samples uniform even subgraphs

**Remember:** Equal-sized fibers turn fair cycle choices into a uniform subgraph.

*True by definition.* MSC 05C38 (Paths and cycles), 60K35. arXiv math.PR. Level 2: later undergraduate.

**Definition.** In a finite graph, an even subgraph has even degree at every vertex. Add two edge sets by keeping the edges that occur in exactly one set. With this addition, the even subgraphs form a vector space over the two-element field.

**Problem.** Choose any finite list of cycles that spans this space. Independently keep each listed cycle with probability one half. Their sum is uniform over all even subgraphs.

**How the definition helps.** Cycle coordinates turn sampling subject to vertex constraints into a linear map from independent coin flips (our own). The map reaches every even subgraph because the cycles span (our own). Each fiber is a translate of the kernel, so every outcome has the same number of preimages (our own).

**Paper or page:** [Uniform even subgraphs and graphical representations of Ising as factors of i.i.d](https://arxiv.org/abs/2112.03228v1). It says: “then L ≔ ∑ εᵢ Cᵢ is a uniform even subgraph of G.”

**Sources:**

- [\[, ', O, m, e, r,  , A, n, g, e, l, ', ,,  , ', G, o, u, r, a, b,  , R, a, y, ', ,,  , ', Y, i, n, o, n,  , S, p, i, n, k, a, ', \], Uniform even subgraphs and graphical representations of Ising as factors of i.i.d](https://arxiv.org/abs/2112.03228v1)

### An edge equivalence relation makes blocks partition the edges

**Remember:** Classify edges by common cycles to give each edge exactly one block.

*True by definition.* MSC 05C40 (Connectivity), 05C38. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a finite simple undirected graph, relate two edges if they are equal or lie on one simple cycle. A block is the set of edges in one equivalence class. The usual definition takes maximal 2-connected subgraphs, together with bridges and isolated vertices.

**Problem.** Every edge lies in exactly one block. Distinct blocks can still share a vertex.

**How the definition helps.** Equivalence classes partition the edges once transitivity holds. Two cycles sharing an edge have a 2-connected union, so any two of its edges lie on a common cycle. This gives transitivity. In our own example, two cycles meeting at just one vertex give distinct blocks sharing that vertex.

**Wikipedia:** [Biconnected component](https://en.wikipedia.org/wiki/Biconnected_component). It says: “Less obviously, this is a transitive relation: if there exists a simple cycle containing edges e and f, and another simple cycle containing edges f and g, then one can combine these two cycles”

**Sources:** none listed. No primary source with a working link was found.

### Blocks and cut vertices give a tree of attachments

**Remember:** Blocks meet through cut vertices without forming a ring.

*Makes the theorem clean to state or prove.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A block is a maximal 2-connected subgraph, a bridge with its endpoints, or an isolated vertex. Make a new graph with a vertex for each block and cut vertex. Join a block to each cut vertex it contains.

**Problem.** For a finite connected graph, the resulting block-cut graph is a tree.

**How the definition helps.** The block-cut graph records each attachment as an edge, so a circular chain of attachments would give a cycle. Paths in the original graph show that the block-cut graph is connected. In our own argument, blocks around a cycle remain connected as a union after any single vertex deletion. They would therefore belong to one block.

**Wikipedia:** [Biconnected component](https://en.wikipedia.org/wiki/Biconnected_component). It says: “There is an edge in the block-cut tree for each pair of a block and an articulation point that belongs to that block.”

**Sources:** none listed. No primary source with a working link was found.

### Leaving K₀ out of connected graphs makes the exponential formula work

**Remember:** Components are never empty, so the logarithm counts connected graphs.

*Rules out counterexamples.* MSC 05C40 (Connectivity), 05C30, 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A connected graph has at least one vertex, and any two vertices are joined by a path. The graph with no vertices, K₀, is not counted as connected.

**Problem.** Let G(x) be the exponential generating function of all labelled graphs and C(x) that of connected ones. Then G(x) = exp(C(x)). The same holds for any structure built as a set of connected pieces.

**How the definition helps.** Every graph splits in exactly one way into connected components, and this works only if no component is empty. If K₀ counted as connected, one could add any number of empty components, and the splitting would not be unique (our own remark). Without K₀, C(x) has no constant term, so exp(C(x)) is a well-defined power series. The empty graph appears once, as the set of zero components.

**Wikipedia:** [Exponential formula](https://en.wikipedia.org/wiki/Exponential_formula), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “or the definition of connected graphs has to be modified not to include K₀”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 2, Cambridge University Press (1999)](https://doi.org/10.1017/CBO9780511609589)

### Open ears build exactly the two-connected graphs

**Remember:** Each new path attaches at two different places.

*Makes the theorem clean to state or prove.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** An open ear decomposition builds the entire graph from a cycle by adding paths of unused edges. Each path has two distinct endpoints already present and only new vertices between them.

**Problem.** A finite simple graph with at least three vertices stays connected after any single vertex deletion exactly when it has an open ear decomposition.

**How the definition helps.** Two distinct attachments keep each new path connected to the surviving graph after any one vertex is removed. For our own converse, start with a cycle. Each remaining connected part must attach at two different vertices, or deleting its only attachment would disconnect it. A path through that part supplies another ear, and any remaining edge is itself an ear.

**Wikipedia:** [Ear decomposition](https://en.wikipedia.org/wiki/Ear_decomposition). It says: “is 2-vertex-connected if and only if it has an open ear decomposition.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring more than three vertices keeps the triangle out of Steinitz's theorem

**Remember:** A triangle is not a solid, so 3-connected starts at four vertices.

*Rules out counterexamples.* MSC 05C40 (Connectivity), 05C10, 52B10. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** A graph is 3-connected if it has more than three vertices and stays connected after any two vertices are removed. Steinitz's theorem also restricts to finite simple graphs.

**Problem.** A finite simple graph is the graph of a three-dimensional convex polytope exactly when it is planar and 3-connected.

**How the definition helps.** The four-vertex minimum excludes the triangle in our own example. Deleting any two triangle vertices leaves a connected singleton, but a three-dimensional convex polytope needs at least four vertices. Steinitz’s theorem supplies the construction for finite simple planar graphs satisfying 3-connectivity.

**Wikipedia:** [Steinitz's theorem](https://en.wikipedia.org/wiki/Steinitz%27s_theorem). It says: “A graph is 3-connected if it has more than three vertices and, after the removal of any two of its vertices, any other pair of vertices remain connected by a path.”

**Sources:**

- [B. Grünbaum, Convex Polytopes, Graduate Texts in Mathematics 221, Springer (2003)](https://doi.org/10.1007/978-1-4613-0019-9)
- [E. Steinitz, Polyeder und Raumeinteilungen, Encyclopädie der mathematischen Wissenschaften, Band 3 (Geometrie), Teil IIIAB12 (1922) 1–139](https://gdz.sub.uni-goettingen.de/dms/load/img/?PPN=PPN360609767&DMDID=dmdlog203)

### Splitting vertices turns Menger’s vertex theorem into a flow theorem

**Remember:** A one-unit gate lets only one path use a vertex.

*True by definition.* MSC 05C40 (Connectivity), 05C21. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a split network, replace each internal vertex by an entrance and an exit joined by a directed edge of capacity one. Keep the start s and finish t unsplit. Give each original edge capacity n, the vertex count, leading from its tail’s exit to its head’s entrance wherever those copies exist.

**Problem.** Take distinct vertices s and t in a finite directed graph with no edge from s to t. The minimum number of internal vertices blocking all directed s-to-t paths equals the maximum number of such paths sharing only their ends.

**How the definition helps.** One-unit gates enforce vertex disjointness and price each deleted vertex at one, our own reduction. A minimum cut can pay only for gates since deleting every internal vertex costs less than n, our own argument. Integral max-flow min-cut and the decomposition of flow into paths do the remaining work, our own account.

**Wikipedia:** [Menger's theorem](https://en.wikipedia.org/wiki/Menger%27s_theorem). It says: “equal to the maximum number of pairwise internally disjoint paths from x to y.”

**Sources:** none listed. No primary source with a working link was found.

### The two Menger theorems put vertex connectivity below edge connectivity

**Remember:** Paths that share no internal vertices share no edges either.

*True by definition.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For each pair of distinct vertices, count the largest family of distinct paths between them sharing only their ends. Vertex connectivity is the smallest such count over all pairs. For edge connectivity, count paths sharing no edge instead.

**Problem.** For a finite connected simple graph with at least two vertices, vertex connectivity is at most edge connectivity. Edge connectivity is at most the smallest vertex degree.

**How the definition helps.** Internally disjoint paths are also edge-disjoint, so the path counts are ordered for each pair, our own comparison. No edge-disjoint family can use more paths than there are edges at its starting vertex, our own argument. The two global forms of Menger’s theorem identify these counts with connectivity measured by deletions, our own account.

**Wikipedia:** [Connectivity (graph theory)](https://en.wikipedia.org/wiki/Connectivity_%28graph_theory%29). It says: “The edge-connectivity for a graph with at least 2 vertices is less than or equal to the minimum degree of the graph”

**Sources:** none listed. No primary source with a working link was found.

### Two internally disjoint paths put a pair on a cycle

**Remember:** Two routes with no common middle make one cycle.

*True by definition.* MSC 05C40 (Connectivity). arXiv math.CO. Level 2: later undergraduate.

**Definition.** In the path form of 2-connectivity, a graph has at least three vertices and each pair has two paths sharing only their endpoints. The deletion form instead asks that removing any single vertex leave the graph connected.

**Problem.** A finite connected simple graph with at least three vertices is 2-connected exactly when every pair lies on a common cycle.

**How the definition helps.** The two paths join into a cycle, and any cycle through the pair splits into two such paths, our own explanation. Our own account leaves equivalence with the deletion definition to the global vertex form of Menger’s theorem.

**Wikipedia:** [Connectivity (graph theory)](https://en.wikipedia.org/wiki/Connectivity_%28graph_theory%29). It says: “for every set of k vertices in the graph there is a cycle that passes through all the vertices in the set.”

**Sources:** none listed. No primary source with a working link was found.

### Unit capacities turn edge Menger into max-flow min-cut

**Remember:** One unit per edge buys one route per edge.

*True by definition.* MSC 05C40 (Connectivity), 05C21. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In an undirected unit-capacity network, at most one unit of net flow can pass through each edge. Use a capacity-one arc in each direction and cancel any flow that goes both ways.

**Problem.** Between any two distinct vertices in a finite undirected graph, the largest number of edge-disjoint paths equals the fewest edge deletions that separate them.

**How the definition helps.** Unit capacities make a cut count edges and an integral flow count disjoint paths. The integral max-flow min-cut theorem does the work of equating the two. Cancellation and path decomposition turn its integral flow into undirected paths, our own explanation.

**Wikipedia:** [Max-flow min-cut theorem](https://en.wikipedia.org/wiki/Max-flow_min-cut_theorem). It says: “the maximum number of edge-disjoint s-t paths in an undirected graph is equal to the minimum number of edges in an s-t cut-set.”

**Sources:** none listed. No primary source with a working link was found.

### Hamiltonian closure makes the degree criteria immediate

**Remember:** Fill in safe edges until no eligible pair remains.

*True by definition.* MSC 05C45 (Eulerian and Hamiltonian graphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a simple graph with n vertices, repeatedly join nonadjacent vertices whose current degrees sum to at least n. Stop when no such pair remains to get its Hamiltonian closure.

**Problem.** A finite simple graph on n ≥ 3 vertices has a cycle through every vertex if every nonadjacent pair has degree sum at least n. In particular, minimum degree at least n⁄2 suffices.

**How the definition helps.** In our own deduction, the pair condition makes the closure complete, and any cyclic ordering there gives a Hamiltonian cycle. The Bondy–Chvátal theorem preserves Hamiltonicity under closure. Minimum degree at least n⁄2 gives the required degree sum for every nonadjacent pair.

**Wikipedia:** [Hamiltonian path](https://en.wikipedia.org/wiki/Hamiltonian_path). It says: “A graph is Hamiltonian if and only if its closure is Hamiltonian.”

**Paper or page:** [Ore's Theorem](https://proofwiki.org/wiki/Ore's_Theorem), [Dirac's Theorem](https://proofwiki.org/wiki/Dirac's_Theorem). It says: “Then G is Hamiltonian.”

**Sources:**

- [J. A. Bondy and V. Chvátal, A method in graph theory (1976)](https://doi.org/10.1016/0012-365X(76)90078-9)

### An incidence factor makes the graph Laplacian positive semidefinite

**Remember:** The Laplacian’s quadratic form is a sum of squares.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Orient each edge of a finite simple undirected graph. Its incidence matrix B has one column per edge, with opposite unit entries at the endpoints and zeros elsewhere. Define the Laplacian by L = BBᵀ.

**Problem.** The real symmetric matrix L is positive semidefinite, meaning xᵀLx ≥ 0 for every real vector x. This quadratic form is the sum of (xᵤ − xᵥ)² over the edges uv.

**How the definition helps.** The product definition makes positivity immediate because xᵀLx is the squared length of Bᵀx (our own). The entries of Bᵀx are the differences along edges, which gives the sum of squares (our own). The degree-minus-adjacency proof uses the fact that the diagonal entry of each row equals the sum of the magnitudes of the other entries. The work moves into multiplying out BBᵀ to recover the usual matrix (our own).

**Wikipedia:** [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix). It says: “Even though the edges in this definition are technically directed, their directions can be arbitrary, still resulting in the same symmetric Laplacian \|v\| × \|v\| matrix L defined as L = BBᵀ”

**Sources:** none listed. No primary source with a working link was found.

### An incidence factor makes the Laplacian kernel count components

**Remember:** Zero Laplacian energy forces equal values along each edge.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C40. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Orient each edge of a finite simple undirected graph. Its incidence matrix B has one column per edge, with opposite unit entries at the endpoints and zeros elsewhere. Define the Laplacian by L = BBᵀ.

**Problem.** The real kernel of the Laplacian has dimension equal to the number of connected components.

**How the definition helps.** In our own proof, xᵀLx is the squared length of Bᵀx, so Lx vanishes exactly when Bᵀx vanishes. Each entry of Bᵀx is the difference between the endpoint values of one edge. Thus x is constant on each connected component, with one free value per component.

**Wikipedia:** [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix). It says: “The number of connected components in the graph is the dimension of the nullspace of the Laplacian and the algebraic multiplicity of the 0 eigenvalue.”

**Sources:** none listed. No primary source with a working link was found.

### An incidence matrix turns Kirchhoff’s determinant into a tree count

**Remember:** One squared determinant counts one tree or nothing.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Orient each edge arbitrarily and give it a column with −1 at its tail and +1 at its head. All other entries are zero. Delete one vertex row to get the reduced incidence matrix B.

**Problem.** For a finite simple graph with n ≥ 2 vertices, det(BBᵀ) counts the trees that contain every vertex and use only graph edges.

**How the definition helps.** In our own proof, Cauchy–Binet expands det(BBᵀ) as a sum of squared determinants over choices of n − 1 edges. Any such choice containing a cycle has dependent columns. Every other choice is a spanning tree, and expansion at leaves other than the deleted vertex gives determinant ±1.

**Wikipedia:** [Kirchhoff's theorem](https://en.wikipedia.org/wiki/Kirchhoff%27s_theorem). It says: “the Laplacian L can be factored into the product of the incidence matrix and its transpose”

**Sources:** none listed. No primary source with a working link was found.

### Excluding trivial cases makes strongly regular graphs those with three eigenvalues

**Remember:** Count common neighbours separately for adjacent pairs and nonadjacent pairs.

*Rules out counterexamples. Confidence: medium.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C75. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite simple graph is strongly regular with parameters (v,k,λ,μ) if its v vertices all have degree k and satisfy two pair counts. Distinct adjacent vertices have exactly λ common neighbours, and distinct nonadjacent vertices have exactly μ.

**Problem.** A connected regular graph that is not complete is strongly regular exactly when its adjacency matrix has three distinct eigenvalues. Brouwer and van Maldeghem use this as the definition.

**How the definition helps.** In our own example, two disjoint triangles satisfy the pair counts with μ = 0 but have only two distinct eigenvalues. In a connected regular noncomplete graph, the common-neighbour counts make A² a combination of I, A and the all-ones matrix J. On vectors perpendicular to constants this gives at most two eigenvalues, and noncompleteness excludes just one. Conversely, two such eigenvalues a,b make (A−aI)(A−bI) a multiple of J, giving both pair counts.

**Wikipedia:** [Strongly regular graph](https://en.wikipedia.org/wiki/Strongly_regular_graph). It says: “By convention, graphs which satisfy the definition trivially are excluded from detailed studies and lists of strongly regular graphs.”

**Sources:**

- [R. C. Bose, Strongly regular graphs, partial geometries and partially balanced designs, Pacific Journal of Mathematics 13 (1963) 389–419](https://doi.org/10.2140/pjm.1963.13.389)

### Transpose maps make the cut space orthogonal to the cycle space

**Remember:** A kernel is the orthogonal complement of the image of the transpose.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C38. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Over the two-element field, the boundary matrix B of a finite undirected graph sends each edge to the sum of its endpoints. Its kernel is the cycle space, and the image of its transpose is the cut space.

**Problem.** The cut and cycle spaces are orthogonal complements. An edge set lies in either space exactly when it meets every set in the other space in an even number of edges.

**How the definition helps.** Over the two-element field, the kernel of B is the orthogonal complement of the image of Bᵀ, so orthogonality is linear algebra (our own). The dot product counts common edges modulo 2. The work is to identify the image of Bᵀ with the cuts. Bᵀ sends a vertex set to the edges with exactly one endpoint in it (our own).

**Wikipedia:** [Cycle space](https://en.wikipedia.org/wiki/Cycle_space). It says: “the cycle space and the cut space of the graph (the family of edge sets that span the cuts of the graph) are the orthogonal complements of each other within the edge space.”

**Sources:** none listed. No primary source with a working link was found.

### Colourings as maps to complete graphs make the Gallai–Roy theorem a composition

**Remember:** A colouring is a map to a complete graph.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 05C15, 05C20. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A homomorphism from a graph G to a graph H maps vertices to vertices and sends every edge to an edge. A k-colouring is then a homomorphism to Kₖ, the complete graph on k vertices.

**Problem.** A graph is k-colourable exactly when some orientation of it has no directed path with k + 1 vertices. This is the Gallai–Hasse–Roy–Vitaver theorem.

**How the definition helps.** In our own argument, orient each edge from the smaller colour to the larger. A directed path then uses at most k vertices. Conversely, the Gallai–Hasse–Roy–Vitaver directed path bound says every orientation contains a directed path with at least the chromatic number of vertices. Thus a bound of k on path size gives a homomorphism to Kₖ.

**Wikipedia:** [Graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism). It says: “The k-colorings of G correspond exactly to homomorphisms from G to the complete graph Kₖ.”

**Sources:**

- [P. Hell and J. Nešetřil, Graphs and Homomorphisms, Oxford University Press (2004)](https://doi.org/10.1093/acprof:oso/9780198528173.001.0001)

### The extension property makes the countable random graph unique

**Remember:** Every finite wish for neighbours is granted, so only one such graph exists.

*Makes the theorem clean to state or prove.* MSC 05C63 (Infinite graphs), 03C15, 05C80. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** Take any two disjoint finite sets of vertices U and V. A countable graph has the extension property if some other vertex is always joined to all of U and none of V. The Rado graph is the countable graph with this property.

**Problem.** Join every pair in a countably infinite vertex set independently with the same probability p, where 0 &lt; p &lt; 1. With probability one the graph is isomorphic to the Rado graph.

**How the definition helps.** For each fixed finite request, infinitely many outside vertices independently satisfy it with the same positive probability. In our own probability argument, at least one succeeds almost surely, and there are only countably many requests. Back-and-forth uses the extension property alternately in each graph to extend a finite isomorphism until it includes every vertex.

**Wikipedia:** [Rado graph](https://en.wikipedia.org/wiki/Rado_graph). It says: “The Rado graph is uniquely defined, among countable graphs, by an extension property that guarantees the correctness of this algorithm”

**Sources:**

- [P. Erdős and A. Rényi, Asymmetric graphs, Acta Mathematica Academiae Scientiarum Hungaricae 14 (1963) 295–315](https://doi.org/10.1007/BF01895716)
- [R. Rado, Universal graphs and universal functions, Acta Arithmetica 9 (1964) 331–340](https://doi.org/10.4064/aa-9-4-331-340)

### Bridgeless cubic graphs have perfect matchings by counting odd cuts

**Remember:** An odd component needs at least three edges out, not just one.

*Rules out counterexamples.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C40. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A cubic graph has degree three at every vertex. A bridge is an edge whose deletion increases the number of connected components. A bridgeless graph has no such edge.

**Problem.** Every finite bridgeless cubic graph has a perfect matching, which matches every vertex exactly once.

**How the definition helps.** In our own count, summing degrees in an odd component after vertex deletion shows that an odd number of edges leave it. A single exiting edge would be a bridge, so each such component needs at least three edges. Each deleted vertex supplies at most three, bounding the number of odd components by the number of deleted vertices. Tutte’s matching theorem gives a perfect matching.

**Wikipedia:** [Petersen's theorem](https://en.wikipedia.org/wiki/Petersen%27s_theorem). It says: “Every cubic, bridgeless graph contains a perfect matching.”

**Sources:**

- [Julius Petersen, Die Theorie der regulären graphs (1891)](https://doi.org/10.1007/BF02392606)

### Cut capacities give Hall’s theorem and the exact matching size

**Remember:** Deficiency counts the largest shortfall of neighbours across all left subsets.

*Makes the theorem clean to state or prove.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C21. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A bipartite graph has two vertex parts and edges only between the parts. Its left deficiency d is the largest difference between the size of a left subset and its number of distinct neighbors. The empty subset gives difference zero.

**Problem.** In a finite bipartite graph with m left vertices, the largest matching, a set of edges with no shared endpoints, has m − d edges. It covers every left vertex exactly when d = 0.

**How the definition helps.** Deficiency measures the greatest shortage of neighbors, so at least d left vertices must go unmatched. In our own flow proof, give each left-to-right edge capacity m + 1 and each source or sink connection capacity one. For left subset S on the source side, a cheapest cut there costs m − \|S\| plus its number of neighbors. Integral max-flow min-cut gives a matching of the minimum cut size, m − d.

**Wikipedia:** [Hall's marriage theorem](https://en.wikipedia.org/wiki/Hall%27s_marriage_theorem). It says: “The max-flow min-cut theorem”

**Paper or page:** [Hall's Marriage Theorem/Finite Set](https://proofwiki.org/wiki/Hall's_Marriage_Theorem/Finite_Set). It says: “There exists an injection f: I → Y such that”

**Sources:**

- [Philip Hall, On Representatives of Subsets (1935)](https://doi.org/10.1112/jlms/s1-10.37.26)

### Domino tilings as perfect matchings make Hall's theorem decide tileability

**Remember:** Each domino is one edge between a black and a white square.

*True by definition. Confidence: medium.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05B45. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Make a graph with one vertex for each square of the region. Join two vertices when their squares share a side. A domino tiling is then a perfect matching, a set of edges that covers each vertex exactly once.

**Problem.** Color a finite region of squares like a chessboard, with equally many black and white squares. The region has a domino tiling exactly when every set of black squares has at least as many white neighbors.

**How the definition helps.** In our own application, a domino covers two adjacent squares, so a tiling selects disjoint edges covering every square. Each edge joins opposite colours. Hall’s theorem gives a matching covering all black squares exactly under the stated neighbour condition. Equal colour counts ensure that this matching also covers all white squares.

**Wikipedia:** [Domino tiling](https://en.wikipedia.org/wiki/Domino_tiling). It says: “Equivalently, it is a perfect matching in the grid graph formed by placing a vertex at the center of each square of the region”

**Sources:** none listed. No primary source with a working link was found.

### Splitting heads and tails gives the even regular factorization

**Remember:** Matching head copies and tail copies gives one arrival and one departure.

*True by definition.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C45. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a graph where every degree is 2k, orient each component along a closed walk using every edge exactly once. Split each vertex into a left and a right copy. Replace each arrow by an edge from the left copy of its start to the right copy of its end.

**Problem.** The edges of a finite 2k-regular simple graph, for k ≥ 1, partition into k spanning subgraphs of degree two.

**How the definition helps.** In our own proof, a perfect matching of the copies selects one arrival and one departure at each original vertex. Euler’s circuit theorem gives the orientation and makes every copy have degree k. Kőnig’s edge-colouring theorem partitions the edges between copies into k perfect matchings. Each matching gives a spanning subgraph of degree two.

**Wikipedia:** [2-factor theorem](https://en.wikipedia.org/wiki/2-factor_theorem). It says: “the edges of G can be partitioned into k edge-disjoint 2-factors.”

**Sources:**

- [Julius Petersen, Die Theorie der regulären graphs (1891)](https://doi.org/10.1007/BF02392606)

### Allowing parallel edges makes deletion and contraction count spanning trees exactly

**Remember:** Keep the extra edges after contracting, and the count of spanning trees adds up.

*Makes the theorem clean to state or prove.* MSC 05C76 (Graph operations (line graphs, products, etc.)), 05C05, 05C31. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Deleting an edge removes it. Contracting an edge merges its two ends into one vertex and keeps all other edges, so parallel edges and loops may appear. A multigraph may have such parallel edges and loops.

**Problem.** The number of spanning trees satisfies t(G) = t(G minus e) + t(G contract e) for any edge e that is not a loop. The Tutte polynomial and the chromatic polynomial satisfy similar recursions.

**How the definition helps.** Trees omitting e survive deletion, and trees using e correspond bijectively to trees after contraction because each other edge keeps its identity. In our own example, a triangle has three spanning trees. Deletion leaves one tree, and contraction leaves two parallel choices, giving the other two trees.

**Wikipedia:** [Edge contraction](https://en.wikipedia.org/wiki/Edge_contraction), [Deletion–contraction formula](https://en.wikipedia.org/wiki/Deletion%E2%80%93contraction_formula), [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “As defined below, an edge contraction operation may result in a graph with multiple edges even if the original graph was a simple graph.”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)
- [W. T. Tutte, Graph-polynomials, Advances in Applied Mathematics 32 (2004) 5–9](https://doi.org/10.1016/S0196-8858(03)00041-1)

### Subtracting one from the largest bag gives trees treewidth one

**Remember:** Minus one, so trees score one and forests stay at one.

*True by definition.* MSC 05C83 (Graph minors), 05C75. arXiv math.CO, cs.DM. Level 2: later undergraduate.

**Definition.** A tree decomposition assigns vertex sets called bags to the nodes of a tree. Each graph vertex appears in a nonempty connected subtree of bags, and some bag contains both endpoints of each edge. Treewidth is the minimum, over decompositions, of the largest bag size minus one.

**Problem.** A finite simple graph with at least one edge has treewidth 1 exactly when it is a forest.

**How the definition helps.** In our own construction, give each rooted forest vertex a bag containing itself and its parent, if present. Link bags along forest edges and join the root bags into a tree. Conversely, prune leaf bags contained in adjacent bags. A sole bag or a vertex unique to a remaining leaf yields a vertex of degree at most one, so deletion gives induction.

**Wikipedia:** [Treewidth](https://en.wikipedia.org/wiki/Treewidth), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “In this definition, the size of the largest set is diminished by one in order to make the treewidth of a tree equal to one.”

**Sources:**

- [N. Robertson and P. D. Seymour, Graph minors. III. Planar tree-width, Journal of Combinatorial Theory, Series B 36 (1984) 49–64](https://doi.org/10.1016/0095-8956(84)90013-3)
- [R. Halin, S-functions for graphs, Journal of Geometry 8 (1976) 171–186](https://doi.org/10.1007/BF01917434)

### Minimal time windows answer reachability

**Remember:** A larger window needs no record if a smaller one already works.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 68R10. arXiv cs.DS, cs.DM. Level 2: later undergraduate.

**Definition.** In a graph with finitely many timed contacts, a temporal route uses contacts in increasing time order. Its window runs from departure to arrival. For each ordered pair of distinct vertices, store only route windows that contain no strictly smaller route window for the same pair.

**Problem.** For distinct source and target vertices, a route fits inside a query window exactly when that window contains a stored minimal window for the pair.

**How the definition helps.** The route that works in a smaller window also works in any containing window. Our own converse starts with a route inside the query window and shrinks its time window to a minimal one. For a finite list of contacts, a minimal window must exist. Our own note is that constructing and maintaining the list still takes work.

**Paper or page:** [A Dynamic Data Structure for Temporal Reachability with Unsorted Contact Insertions](https://arxiv.org/abs/2102.04187v2). It says: “If u can reach v within ℐ₁, then u can reach v within ℐ₂.”

**Sources:**

- [A Dynamic Data Structure for Temporal Reachability with Unsorted Contact Insertions](https://arxiv.org/abs/2102.04187v2)

### Negative cycles prevent cheapest walks

**Remember:** A reachable negative cycle can repeatedly lower the cost of reaching a later vertex.

*Rules out counterexamples.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 05C12. arXiv cs.DS, cs.DM. Level 2: later undergraduate.

**Definition.** Define distance as the infimum of the costs of walks, which may repeat vertices. If no walk exists, use infinity. In contrast, a simple path cannot revisit a vertex.

**Problem.** For a reachable target in a finite directed graph, a cheapest walk exists exactly when no negative cycle lies on a source-to-target walk.

**How the definition helps.** The walk definition isolates the obstruction, because one more circuit of a negative cycle lowers the cost again. Our own counterexample is a source joined to a negative cycle with an exit to the target. If there is no such cycle, our own proof deletes every repeated cycle without raising the cost. A cheapest simple path is then also a cheapest walk in our own argument.

**Wikipedia:** [Bellman–Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm). It says: “any path that has a point on the negative cycle can be made cheaper by one more walk around the negative cycle.”

**Sources:** none listed. No primary source with a working link was found.

### Restricted paths give Floyd’s recurrence

**Remember:** Allow one more interior vertex and compare routes with and without it.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 68W05. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Number the vertices of a finite directed graph with real edge weights and no negative cycles. For each pair and index k, take the minimum cost of walks whose interior vertices all have numbers at most k. Allow an empty walk at each vertex and use infinity when no walk exists.

**Problem.** When the next vertex becomes available, the new distance equals the smaller of two costs. These are the old distance and the sum of the two old distances through that vertex.

**How the definition helps.** In our own proof, deleting cycles never increases cost, so a reachable pair has a cheapest path with no repeated vertices. If the new vertex occurs inside this path, splitting there gives two previously allowed paths. Otherwise the old distance suffices. Conversely, concatenating two old walks through the new vertex gives an allowed walk.

**Wikipedia:** [Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm). It says: “using vertices only from the set {1,2,…,k} as intermediate points along the way.”

**Sources:**

- [Robert W. Floyd, Algorithm 97: Shortest Path (1962)](https://doi.org/10.1145/367766.368168)

### Tour minima find common ancestors

**Remember:** Between two visits, the shallowest vertex is their lowest common ancestor.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 68W05. arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Walk a rooted tree from the root, returning along each edge after visiting its descendants. Record the vertex and its depth at every visit. Use the first recorded visit to represent each queried vertex.

**Problem.** The lowest common ancestor, the deepest ancestor of both queried vertices, is the shallowest vertex between their first visits, including the endpoints. Count each vertex as its own ancestor.

**How the definition helps.** The recorded tour converts a search through ancestors into a search for the minimum depth in an interval. In our own proof, the tour stays inside the common ancestor’s subtree throughout that interval. It visits the ancestor when passing between branches, or starts there if one queried vertex is the ancestor. Precomputing interval minima does the work for fast repeated queries.

**Wikipedia:** [Lowest common ancestor](https://en.wikipedia.org/wiki/Lowest_common_ancestor). It says: “a lowest common ancestor query can then be transformed into a query that seeks the minimum value occurring within some subinterval of this sequence of numbers.”

**Sources:**

- [Michael A. Bender and Martin Farach-Colton, The LCA Problem Revisited (2000)](https://doi.org/10.1007/10719839_9)

### A bounded set size rules out nested sunflower counterexamples

**Remember:** Without a size bound, a long nested family defeats the lemma.

*Rules out counterexamples.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A sunflower consists of distinct sets whose pairwise intersections are all the same set, called the core. A family of rank at most k has no set larger than k.

**Problem.** Take integers k ≥ 0 and r ≥ 3. A family of rank at most k with more than k!(r−1)ᵏ distinct sets contains a sunflower with r members.

**How the definition helps.** Bounding rank excludes arbitrarily long nested families, which contain no three-set sunflower. Our own reduction pads each set to size k with private points, preserving pairwise intersections. For k ≥ 1, a maximal disjoint subfamily either supplies r petals or covers all sets with at most k(r − 1) points. Some point then occurs in more than (k − 1)!(r − 1)ᵏ⁻¹ sets, so deleting it permits induction.

**Wikipedia:** [Sunflower (mathematics)](https://en.wikipedia.org/wiki/Sunflower_%28mathematics%29). It says: “the pairwise intersections must be the exact same set, not just the same size.”

**Sources:** none listed. No primary source with a working link was found.

### A uniform random chain turns the LYM inequality into an expectation

**Remember:** A random chain can hit an antichain at most once.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Shuffle the n points uniformly. The empty set and successive initial sets of the shuffle form a chain. The Lubell mass of a family is the expected number of its sets on this chain.

**Problem.** An antichain is a family in which no distinct member contains another. For an antichain of subsets of n points, summing 1/(n choose \|A\|) over its members A gives at most one.

**How the definition helps.** Our own chain definition lets an antichain contribute zero or one on every draw. Our own count uses the fact that the first \|A\| points form a uniformly chosen \|A\|-element set. Linearity of expectation converts those hitting probabilities to the displayed sum.

**Wikipedia:** [Lubell–Yamamoto–Meshalkin inequality](https://en.wikipedia.org/wiki/Lubell%E2%80%93Yamamoto%E2%80%93Meshalkin_inequality). It says: “Since this number is at most the total number of all permutations,”

**Paper or page:** [A Relationship for LYM Inequalities between Boolean Lattices and Linear Lattices with Applications](https://arxiv.org/abs/2403.04817v1). It says: “If $\\mathcal{F} \\subseteq 2<sup>\[n\]</sup>$ is an antichain, then\\\[ l(\\mathcal{F}) = \\sum \_{F \\in \\mathcal{F}}\\frac{1}{{{n} \\choose {\|F\|}}} \\leq 1. \\\]”

**Sources:**

- [D. Lubell, A short proof of Sperner’s lemma (1966)](https://sites.math.rutgers.edu/~zeilberg/akherim/lubell1966.pdf)

### Circular intervals reduce the Erdős–Ko–Rado bound to local pairs

**Remember:** On any circle, intersecting k-intervals can contribute at most k hits.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a cyclic order, a k-interval consists of k consecutive points, allowing a wrap past the end of the list. A star consists of all k-sets through one point. An intersecting family has no two disjoint sets.

**Problem.** Suppose n ≥ 2k and k ≥ 1. Among intersecting families of k-element sets on n points, a star attains the maximum size (n−1 choose k−1).

**How the definition helps.** Fix a family interval starting at position 0 and label positions cyclically (our own argument). For 1 ≤ j &lt; k, the intervals starting at j and j − k are disjoint. These pairs exhaust the other candidates, so at most k family members appear. Each appears with probability n/(n choose k), giving the star bound by averaging.

**Wikipedia:** [Erdős–Ko–Rado theorem](https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Ko%E2%80%93Rado_theorem). It says: “The two intervals that separate these elements are disjoint”

**Sources:**

- [G. O. H. Katona, A simple proof of the Erdős–Chao Ko–Rado theorem (1972)](https://real.mtak.hu/21117/1/paper_20.pdf)

### Precedence events give Bollobás’s set pair inequality

**Remember:** Cross intersections make two precedence events impossible together.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A finite Bollobás system consists of finitely many indexed pairs of finite sets (Aᵢ,Bᵢ). The intersection Aᵢ ∩ Bⱼ is empty exactly when i = j. Order all points uniformly at random and define event i by requiring every element of Aᵢ to precede every element of Bᵢ.

**Problem.** For a finite Bollobás system, the sum of 1/(\|A\| + \|B\| choose \|A\|) over its pairs is at most one.

**How the definition helps.** Our own proof adds the probabilities of disjoint precedence events. For distinct i and j, choose x in Aᵢ ∩ Bⱼ and y in Aⱼ ∩ Bᵢ. The two events require opposite orders for x and y. Each event has probability 1/(\|Aᵢ\| + \|Bᵢ\| choose \|Aᵢ\|), since all position sets for Aᵢ within its pair are equally likely.

**Paper or page:** [Some new Bollobás-type inequalities](https://arxiv.org/abs/2405.17639v2). It says: “\\sum <sub>i=1</sub><sup>m\\frac{1}{\\binom</sup> {\|A<sub>i</sub>\|+\|B<sub>i</sub>\|}{\|A<sub>i</sub>\|}}\\leqslant 1.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric chains give the largest family avoiding a long chain

**Remember:** Every symmetric chain passes through as many middle layers as it can.

*True by definition.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A layer consists of all subsets of one size among n points. A symmetric chain has nested sets of every size from a to n − a, one per size. A symmetric chain decomposition partitions all subsets into such chains.

**Problem.** For 1 ≤ k ≤ n + 1, the k consecutive middle layers form a largest family without k + 1 strictly nested sets. Either central choice works in a tie.

**How the definition helps.** Our own symmetric chains let each chain contribute at most k sets, or its full size if shorter. The k middle layers meet every chain in exactly that many sets and contain no longer chain. Our own argument uses the symmetric chain decomposition theorem to supply the partition.

**Wikipedia:** [Sperner's theorem](https://en.wikipedia.org/wiki/Sperner%27s_theorem). It says: “the largest size of an r-chain-free family is the sum of the r largest binomial coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Weights from random maximal chains give Sperner’s bound

**Remember:** A chain can hit an antichain only once.

*True by definition.* MSC 05D05 (Extremal set theory), 06A06. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Order the elements of a finite set uniformly at random. Its first k elements form a subset for each k, including zero. Give each subset a weight equal to the probability that it occurs among these nested subsets.

**Problem.** Among families of subsets of an n-element set with no member strictly containing another, the largest has as many members as the middle layer. That layer consists of all subsets of size ⌊n ∕ 2⌋.

**How the definition helps.** The family’s weights sum to at most one because a chain hits the family at most once. Every k-set has weight 1/(n choose k) by symmetry (our own). Middle-layer sets have the smallest weight, so the family has at most the middle layer’s size. That layer itself attains the bound.

**Wikipedia:** [Lubell–Yamamoto–Meshalkin inequality](https://en.wikipedia.org/wiki/Lubell%E2%80%93Yamamoto%E2%80%93Meshalkin_inequality). It says: “Each permutation may only be associated with a single set in A”

**Sources:** none listed. No primary source with a working link was found.

### Color complements expose a parity improvement for Ramsey numbers

**Remember:** An odd number of vertices cannot all have odd red degree.

*True by definition.* MSC 05D10 (Ramsey theory), 05C55. arXiv math.CO. Level 2: later undergraduate.

**Definition.** R(r,s) is the least n such that every red-blue edge coloring of the complete graph on n vertices contains a red r-clique or blue s-clique. The red graph keeps every vertex and exactly the red edges.

**Problem.** For r,s ≥ 2, put a = R(r − 1,s) and b = R(r,s − 1). If a and b are even, then R(r,s) ≤ a + b − 1.

**How the definition helps.** In our own argument, avoiding both cliques bounds every red degree by a − 1 and every blue degree by b − 1. On a + b − 1 vertices these bounds sum to the total degree, so both are attained everywhere. Every red degree would be odd on an odd number of vertices. This contradicts the even degree sum of the red graph.

**Wikipedia:** [Ramsey's theorem](https://en.wikipedia.org/wiki/Ramsey%27s_theorem). It says: “are both even, the induction inequality can be strengthened to”

**Sources:** none listed. No primary source with a working link was found.

### One color per earlier vertex gives a monochromatic clique

**Remember:** Choose vertices with one forward color, then keep a single color.

*True by definition.* MSC 05D10 (Ramsey theory), 05C55. arXiv math.CO. Level 2: later undergraduate.

**Definition.** In a complete graph every pair of vertices has an edge. Call an ordered list end-homogeneous if all edges from each vertex to later vertices have one color. Assign that color to the vertex and choose any color for a last vertex.

**Problem.** For positive integers q and k, every sufficiently large complete graph with edges in q colors has k vertices joined entirely in one color. A countably infinite complete graph with finitely many edge colors has an infinite such set.

**How the definition helps.** In an end-homogeneous list, vertices assigned the same color have every edge between them in that color. In our own proof, repeatedly choose a vertex and retain its largest remaining group of neighbors joined to it in one color. Enough starting vertices give a list of q(k − 1) + 1, so some k receive the same color. Starting with infinitely many vertices keeps some group infinite each time, and one assigned color occurs infinitely often.

**Paper or page:** [Ramsey's Theorem](https://proofwiki.org/wiki/Ramsey's_Theorem), [Infinite Ramsey's Theorem](https://proofwiki.org/wiki/Infinite_Ramsey's_Theorem). It says: “In any coloring of the edges of a sufficiently large complete graph, one will find monochromatic complete subgraphs.”

**Sources:**

- [Frank P. Ramsey, On a Problem of Formal Logic (1930)](https://doi.org/10.1112/plms/s2-30.1.264)

### The infinite Hall theorem needs every set to be finite

**Remember:** Infinitely many boys is fine if each boy knows only finitely many girls.

*Rules out counterexamples.* MSC 05D15 (Transversal (matching) theory), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For an indexed family (Aᵢ), distinct representatives form an injection f with f(i) ∈ Aᵢ for every index i. The marriage condition requires the union over each finite set J of indices to contain at least \|J\| elements.

**Problem.** A family of finite sets, of any size, has a system of distinct representatives exactly when it satisfies the marriage condition.

**How the definition helps.** Finite sets exclude our own example consisting of all singletons {n} for n ≥ 0 and one additional set of all nonnegative integers. The singletons use every possible representative, although every finite subfamily satisfies the marriage condition. For finite sets, the finite Hall theorem solves every finite collection of distinctness constraints. Compactness in the product of the finite sets then solves all constraints together (our own argument).

**Wikipedia:** [Hall's marriage theorem](https://en.wikipedia.org/wiki/Hall%27s_marriage_theorem). It says: “Suppose that F = {Aᵢ}ᵢ∈I, is a (possibly infinite) family of finite sets that need not be distinct, then F has a transversal if and only if F satisfies the marriage condition.”

**Sources:**

- [Philip Hall, On representatives of subsets, Journal of the London Mathematical Society 10 (1935) 26–30](https://doi.org/10.1112/jlms/s1-10.37.26)
- [M. Hall Jr., Distinct representatives of subsets, Bulletin of the American Mathematical Society 54 (1948) 922–926](https://doi.org/10.1090/S0002-9904-1948-09098-X)

### Random circle multiplication finds a large sum free subset

**Remember:** Two points in the middle third add outside it.

*True by definition.* MSC 05D40 (Probabilistic methods in extremal combinatorics, including polynomial methods (combinatorial Nullstellensatz, etc.)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a real number x, keep each integer a whose product ax has fractional part strictly between 1/3 and 2/3. The fractional part is what remains after subtracting the largest integer at most ax.

**Problem.** Every finite set of N positive integers has a sum-free subset of size at least N/3. In a sum-free set, x + y = z has no solution even if x = y.

**How the definition helps.** Our own interval replaces testing every sum with one membership test per integer. Two retained fractional parts add to a number strictly between 2/3 and 4/3, outside the middle third even after subtracting one. For x uniform between zero and one, each positive integer a makes the fractional part of ax uniform there. The average number kept is N/3, so some choice keeps at least that many.

**Paper or page:** [The largest (k, ℓ)-sum-free subsets](https://arxiv.org/abs/2001.05632v3). It says: “$A$ contains a $(k,\\ell )$-sum-free subsets of size at least $\\frac{1}{k+\\ell }N$.”

**Sources:**

- [P. Erdős, Extremal problems in number theory (1965)](https://renyi.hu/~p_erdos/1965-02.pdf)

### A root product turns Newton’s identities into coefficient comparisons

**Remember:** Differentiate the product once to recover every power sum.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO, math.AC. Level 2: later undergraduate.

**Definition.** For roots listed with repetition, define E(t) as the product of all factors 1 + rt. Define e(k) as its coefficient of degree k, with missing coefficients equal to zero. Define p(i) as the sum of the i-th powers of the roots.

**Problem.** For every k ≥ 1, k e(k) equals the sum of (−1)ⁱ⁻¹ p(i)e(k − i) over i from 1 to k.

**How the definition helps.** The product definition gives one fraction r/(1 + rt) per root in the logarithmic derivative E′(t)/E(t). In our own proof, expanding each fraction as a geometric series in t and multiplying by E(t) gives the identity by coefficient comparison. Expanding the original product recovers the usual definition of e(k) as a sum of products from k positions.

**Paper or page:** [Newton-Girard Identities](https://proofwiki.org/wiki/Newton-Girard_Identities). It says: “k eₖ(X) = ∑ᵢ₌₁ᵏ (−1)ⁱ⁻¹ eₖ₋ᵢ(X) pᵢ(X)”

**Sources:** none listed. No primary source with a working link was found.

### Counting each rearranged monomial once gives a basis in every characteristic

**Remember:** Count each rearranged term once, even if several permutations give it.

*Rules out counterexamples.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO, math.AC. Level 2: later undergraduate.

**Definition.** Define a monomial symmetric polynomial as the sum of the distinct terms obtained by permuting the variables in one monomial. Do not count all permutations with repeats.

**Problem.** Over any field, taking one monomial symmetric polynomial per group of rearranged terms gives a basis of the symmetric polynomials.

**How the definition helps.** Counting distinct terms makes every coefficient in the group equal to one, even over a field with two elements. In our own proof, symmetry forces equal coefficients within each group, and different groups share no terms. Thus every symmetric polynomial has a unique expansion in the group sums. In our own two-variable example, counting both permutations of x₁x₂ gives 2x₁x₂ = 0.

**Wikipedia:** [Symmetric polynomial](https://en.wikipedia.org/wiki/Symmetric_polynomial). It says: “These monomial symmetric polynomials form a vector space basis”

**Sources:** none listed. No primary source with a working link was found.

### Elementary symmetric polynomials work over every ring, power sums need characteristic zero

**Remember:** Elementary symmetric polynomials generate over any ring; power sums need division by integers.

*Rules out counterexamples.* MSC 05E05 (Symmetric functions and generalizations), 13F20. arXiv math.CO, math.AC. Level 2: later undergraduate.

**Definition.** The elementary symmetric polynomial eₖ is the sum of all products of k different variables. The power sum pₖ is x₁ᵏ + ⋯ + xₙᵏ. A polynomial is symmetric when it does not change under any permutation of the variables.

**Problem.** Over any commutative ring, every symmetric polynomial is a polynomial in e₁, …, eₙ, in exactly one way.

**How the definition helps.** Our own proof cancels the lexicographically largest monomial using elementary symmetric polynomials, without dividing its coefficient. Its exponents decrease weakly, and their successive differences give the powers of the elementary polynomials needed for cancellation. Repeating within each degree terminates, and distinct products have distinct leading monomials, giving uniqueness. Over ℤ in two variables, the degree-two power-sum products p₁² and p₂ always have even coefficient on x₁x₂, excluding e₂.

**Paper or page:** [On Newton's identities in positive characteristic](https://arxiv.org/abs/2305.19850), [On Newton's identities in positive characteristic](https://arxiv.org/abs/2305.19850). It says: “Let R be a commutative ring. Then R\[e₁,…,eₙ\] ⊂ R\[x₁,…,xₙ\] is equal to the ring of symmetric polynomials over R, and the set {e₁,…,eₙ} is algebraically independent.”

**Sources:**

- [Sjoerd de Vries, On Newton's identities in positive characteristic, arXiv:2305.19850 (2023)](https://arxiv.org/abs/2305.19850)

### Permutation characters count fixed points, so Burnside's lemma counts invariants

**Remember:** A basis vector contributes to the trace exactly when g fixes it.

*True by definition.* MSC 05E18 (Group actions on combinatorial structures), 20B05. arXiv math.CO, math.RT. Level 2: later undergraduate.

**Definition.** For a finite set S with an action of G, the permutation representation ℂ\[S\] has basis S. Every g in G acts by permuting that basis.

**Problem.** For a finite group G, the number of orbits on S is the average number of points fixed by a group element.

**How the definition helps.** The permutation model turns the fixed-point count into a trace. Averaging the operators projects onto the fixed vectors, which have one basis vector per orbit (our own). The trace of the projection therefore gives the orbit count (our own).

**nLab:** [permutation representation](https://ncatlab.org/nlab/show/permutation+representation). It says: “Here in the first step we spelled out the definition of trace in the canonical basis”

**Sources:** none listed. No primary source with a working link was found.

### Core and quotient split partitions

**Remember:** Each quotient cell records one bead move of size t.

*Makes the theorem clean to state or prove.* MSC 05A17 (Combinatorial aspects of partitions of integers), 11P84. arXiv math.CO, math.NT. Level 3: graduate.

**Definition.** For partition row lengths λ₁ ≥ λ₂ ≥ ⋯ padded with zeros, place bead i at λᵢ − i. For integer t ≥ 1, pack each residue class downward by steps of t, preserving bead order, until no bead has a gap below it. The packed beads encode the t-core, and each class’s move counts in descending bead order form its quotient partition.

**Problem.** The size of a partition is the size of its t-core plus t times the sum of the sizes of its t quotient partitions. The core and the t ordered quotient partitions determine the original partition.

**How the definition helps.** Each quotient cell records one bead step, which reduces the sum of row lengths by t (our own argument). Summing those moves gives the size difference. Moving each packed bead back by its recorded count recovers the partition. The abacus correspondence identifies each legal step with removal of a rim hook of size t.

**Wikipedia:** [Core partition](https://en.wikipedia.org/wiki/Core_partition). It says: “We call λ⁽ᵗ⁾ the t-core of λ”

**Sources:** none listed. No primary source with a working link was found.

### Gapless log-concavity survives convolution

**Remember:** No internal zeros lets adjacent inequalities control every pair of rows.

*Rules out counterexamples.* MSC 05A20 (Combinatorial inequalities). arXiv math.CO. Level 3: graduate.

**Definition.** A nonnegative coefficient sequence with no internal zeros is log-concave when aⱼ² ≥ aⱼ₋₁aⱼ₊₁ for every j. Extend coefficients by zero outside the polynomial’s degree range. No internal zeros means that every coefficient between two positive coefficients is positive.

**Problem.** The product of two polynomials with such coefficients has such coefficients.

**How the definition helps.** Our own proof uses the equivalence between these conditions and nonnegative two-by-two minors of the matrix with entries aⱼ₋ᵢ. Coefficient convolution multiplies these matrices, and Cauchy–Binet makes each product minor a sum of nonnegative products. Without the gap condition, 1 + x³ passes every adjacent test. Its product with 1 + 2x + x² fails the test at degree two.

**Paper or page:** [Genus Polynomials of Cubic Graphs with Non-Real Roots](https://arxiv.org/abs/2212.09971v1). It says: “If A(x) and B(x) are log-concave polynomials with non-negative coefficients and no internal zero coefficients, then so is A(x)B(x).”

**Sources:**

- [S. G. Hoggar, Chromatic polynomials and logarithmic concavity (1974)](https://doi.org/10.1016/0095-8956(74)90071-9)

### A rank formula makes matroid contractions and deletions commute

**Remember:** Subtracting ranks cancels the intermediate terms in successive contractions.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** Let r be a finite matroid rank on E and fix T ⊆ E. Contraction gives each A ⊆ E ∖ T rank r(A ∪ T) − r(T). Deletion restricts r to subsets of E ∖ T.

**Problem.** For disjoint subsets T and U, contracting both in either order equals contraction by T ∪ U. Deleting U and contracting T also commute.

**How the definition helps.** In our own calculation, contracting T and then U subtracts two ranks that both contain the correction −r(T). Cancellation gives r(A ∪ U ∪ T) − r(U ∪ T), symmetric in T and U. Deleting U leaves every rank in the contraction formula unchanged for A ⊆ E ∖ (T ∪ U).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “If T is a subset of E, the contraction of M by T, written M/T, is the matroid on the underlying set E − T whose rank function is r′(A) = r(A ∪ T) − r(T).”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Complements of bases make matroid duality an involution

**Remember:** Complement every basis twice to recover the original bases.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** The dual of a finite matroid on E has as bases exactly the complements in E of the original bases. A basis is a maximal independent set.

**Problem.** The dual of the dual of a finite matroid is the original matroid.

**How the definition helps.** The basis definition makes the double dual immediate because taking complements twice leaves every basis unchanged (our own). The bases determine all independent sets, since an independent set is any subset of a basis. The rank definition gives another short proof, but it requires substituting the rank formula twice. The work in the basis approach is proving that the complements satisfy the exchange rule for matroid bases.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “It is not difficult to verify that M\* is a matroid and that the dual of M\* is M.”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Convolution factors matroid characteristic polynomials

**Remember:** Inversion and rank both separate across a direct sum.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** A flat of a matroid is a set that contains every element whose addition leaves its rank unchanged. The Möbius function μ on the flats is the inverse, under convolution over intervals, of the constant function one. The characteristic polynomial sums μ(0̂, F) t<sup>(r(E) − r(F))</sup> over all flats F, where 0̂ is the least flat.

**Problem.** The characteristic polynomial of a direct sum of finite loopless matroids is the product of their characteristic polynomials.

**How the definition helps.** Convolution makes inversion separate across pairs of flats without running the Möbius recursion on the combined order (our own). In a direct sum, flats form pairs and ranks add (our own). The product of the component Möbius functions inverts the constant function on the product order (our own). So the characteristic sum factors (our own).

**nLab:** [Möbius inversion](https://ncatlab.org/nlab/show/M%C3%B6bius+inversion). It says: “The Möbius function of the cartesian product P × Q of two posets P and Q is the product of their Möbius functions”

**Sources:**

- [Gian-Carlo Rota, On the foundations of combinatorial theory I. Theory of Möbius functions (1964)](https://doi.org/10.1007/bf00531932)

### Generic minors detect transversal independence

**Remember:** Every matching contributes its own determinant monomial.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05D15. arXiv math.CO. Level 3: graduate.

**Definition.** In a finite transversal matroid, a set is independent when its elements can occupy distinct allowed slots. Form a matrix with rows for slots and columns for elements. Give each allowed pair its own variable, and set all other entries to zero.

**Problem.** Over every sufficiently large field, one can choose column vectors whose linearly independent sets are exactly the matchable sets.

**How the definition helps.** Our own determinant expansion gives each matching a distinct monomial with coefficient 1 or −1. Thus a set of columns can be matched precisely when some maximal square minor on those columns is a nonzero polynomial. The product of all nonzero minors is nonzero. Over a field larger than its total degree, the polynomial nonvanishing bound gives one evaluation preserving them all.

**Paper or page:** [A theory of q-transversals](https://arxiv.org/abs/2503.12201v1). It says: “Transversal matroids are representable over all sufficiently large fields. Thus they are representable over fields of every characteristic.”

**Sources:** none listed. No primary source with a working link was found.

### In a pregeometry, the exchange condition makes dimension well defined

**Remember:** Exchange lets you swap one generator for another, so all bases have equal size.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 03C45. arXiv math.LO, math.CO. Level 3: graduate.

**Definition.** A pregeometry is a closure operator cl on X where membership in cl(A) always has a finite witness F ⊆ A and exchange holds. Exchange means that a ∈ cl(A ∪ {b}) ∖ cl(A) implies b ∈ cl(A ∪ {a}) for all A, a and b. A basis of Y is a subset B ⊆ Y spanning Y with b ∉ cl(B ∖ {b}) for every b ∈ B.

**Problem.** In any pregeometry, all bases of a set have the same cardinality. So vector spaces, algebraically closed fields and strongly minimal sets all get a well-defined dimension.

**How the definition helps.** The basis exchange theorem gives equal cardinalities for bases of any one set (our own explanation). Linear span and field-theoretic algebraic closure satisfy exchange. Model-theoretic algebraic closure on a strongly minimal set also gives a pregeometry.

**nLab:** [geometric stability theory](https://ncatlab.org/nlab/show/geometric+stability+theory). It says: “An independent set A said to be a basis for Y ∈ P X if Y ⊆ cl(A). All bases of Y have the same cardinality, called the dimension of Y.”

**Sources:**

- [J. T. Baldwin, A. H. Lachlan, On strongly minimal sets, Journal of Symbolic Logic 36 (1971) 79–96](https://doi.org/10.2307/2271517)

### Maximizing faces select matroid bases

**Remember:** Keep the top face and read off its bases.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A finite matroid specifies a nonempty family of equal-sized sets called bases, subject to the basis exchange rule. Its base polytope is the convex hull of their indicator vectors. A linear function on these vectors gives the total weight of each basis.

**Problem.** The maximum-weight bases of any finite matroid form the bases of a matroid on the same ground set.

**How the definition helps.** The maximizing face inherits the edge directions that characterize matroid base polytopes (our own). For equal-sized sets, the geometric criterion requires each edge to be parallel to a difference of coordinate vectors (our own). Its proof connects this condition to exchanging elements between bases (our own). Applying the criterion to the face replaces a new exchange proof for the maximizing bases (our own).

**Wikipedia:** [Matroid polytope](https://en.wikipedia.org/wiki/Matroid_polytope). It says: “Every edge of a matroid polytope Pₘ is a parallel translate of eᵢ−eⱼ for some i,j∈E”

**Sources:**

- [I. M. Gelfand, R. M. Goresky, R. D. MacPherson and V. V. Serganova, Combinatorial geometries, convex polyhedra, and Schubert cells (1987)](https://doi.org/10.1016/0001-8708(87)90059-4)

### Minkowski sums of generalized polymatroids are given by summing their bounds

**Remember:** Add the subset bounds to add the feasible sets.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 90C27. arXiv math.OC, math.CO. Level 3: graduate.

**Definition.** On subsets of a finite set, a paramodular pair consists of supermodular p and submodular b, both zero at ∅. For all X,Y it satisfies b(X) − p(Y) ≥ b(X∖Y) − p(Y∖X). Its generalized polymatroid consists of vectors whose coordinate sum over each subset Z lies between p(Z) and b(Z), inclusive.

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

**How the definition helps.** Our own proof applies the rank inequalities to sets enlarged by T. Monotonicity gives nonnegativity and monotonicity after subtracting r(T). Submodularity for A ∪ T and B ∪ T gives submodularity of r′. Since A misses T, submodularity for A and T gives r′(A) ≤ r(A) ≤ \|A\|.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “If T is a subset of E, the contraction of M by T, written M/T, is the matroid on the underlying set E − T whose rank function is r′(A) = r(A ∪ T) − r(T).”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935)](https://doi.org/10.2307/2371182)

### Rank separators show that matroid duality preserves connectedness

**Remember:** The rank condition for a separator is unchanged by duality.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A separator of a finite matroid with rank r on E is a subset S satisfying r(S) + r(E ∖ S) = r(E). The matroid is connected if every separator is ∅ or E.

**Problem.** A finite nonempty matroid is connected if and only if its dual is connected. The dual has the complements of the original maximal independent sets as its maximal independent sets.

**How the definition helps.** Our own substitution shows that every separator remains a separator in the dual and conversely. The dual rank is r\*(S) = \|S\| − r(E) + r(E ∖ S). Thus r\*(S) + r\*(E ∖ S) − r\*(E) equals r(S) + r(E ∖ S) − r(E).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “A separator of M is a subset S of E such that r(S) + r(E−S) = r(M).”

**Sources:** none listed. No primary source with a working link was found.

### Rank sums make Tutte duality a swap of variables

**Remember:** Complement each subset to swap the two exponents.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C31. arXiv math.CO. Level 3: graduate.

**Definition.** For a finite matroid on E with rank r, assign each subset S the term (x − 1)<sup>(r(E) − r(S))</sup>(y − 1)<sup>(\|S\| − r(S))</sup>. The Tutte polynomial is the sum of these terms.

**Problem.** The Tutte polynomial of the dual matroid is the original polynomial with x and y swapped. The dual matroid has the complements of the original bases as its bases.

**How the definition helps.** The subset sum proves duality by matching each subset in the dual with its complement in the original (our own). The dual rank formula makes the two exponents trade places (our own). One can instead use induction with the recursion, since deleting an element in the dual means contracting it in the original (our own). The work moves into deriving the dual rank formula from complements of bases and checking that the subset sum satisfies the recursion.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid), [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “The rank function of the dual is r\*(S) = \|S\| − r(M) + r(E∖S).”

**Sources:**

- [H. H. Crapo, The Tutte polynomial, Aequationes Mathematicae 3 (1969) 211–229](https://doi.org/10.1007/BF01817442)

### Spanning complements identify the dual of a cycle matroid

**Remember:** Edges that can be removed leave a spanning set behind.

*True by definition. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C40. arXiv math.CO. Level 3: graduate.

**Definition.** A matroid set spans if it contains a basis. A subset is independent in the dual exactly when its complement spans. For a connected graph, the cycle matroid has forests as independent sets, and the bond matroid has minimal disconnecting edge sets as circuits.

**Problem.** The bond matroid of a finite connected graph is the dual of the cycle matroid.

**How the definition helps.** The spanning-complement definition makes dual independence the condition that removing a set leaves the graph connected (our own). A remaining edge set spans the cycle matroid exactly when it contains a spanning tree, that is, when it stays connected. So the minimal dual-dependent sets are the minimal disconnecting edge sets, the circuits of the bond matroid (our own). The work moves into showing that spanning complements describe precisely the subsets of dual bases (our own).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “A set is independent in M\* if and only if its complement spans M.”

**Sources:** none listed. No primary source with a working link was found.

### Subset sums make the characteristic polynomial a Tutte evaluation

**Remember:** Use the same subsets and ranks in both polynomials.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C31. arXiv math.CO. Level 3: graduate.

**Definition.** For a finite loopless matroid on E with rank r, assign each subset S the term (−1)<sup>\|S\|</sup> λ<sup>(r(E) − r(S))</sup>. The characteristic polynomial sums these terms over all subsets of E.

**Problem.** The characteristic polynomial is T(1 − λ, 0) multiplied by (−1) to the power r(E), where T is the Tutte polynomial.

**How the definition helps.** The subset sums for the two polynomials match term by term after the substitution (our own). In the Tutte sum, the exponents of x − 1 and y − 1 are r(E) − r(S) and \|S\| − r(S). Substituting x = 1 − λ and y = 0 gives each term the sign (−1) to the power r(E) + \|S\| (our own). The work moves into showing that the subset sum agrees with the flat formula, by Möbius inversion over flats (our own).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “From this definition it is easy to see that the characteristic polynomial is, up to a simple factor, an evaluation of T<sub>M</sub>, specifically, p<sub>M</sub>(λ) = (−1)<sup>r(M)</sup> T<sub>M</sub>(1−λ,0).”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Rooted maps have no automorphisms, so they are easy to count

**Remember:** Pin down one dart, and nothing can move.

*True by definition.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C30, 05A15. arXiv math.CO. Level 3: graduate.

**Definition.** A connected oriented combinatorial map has darts, a permutation ordering darts around vertices, and a fixed-point-free involution pairing darts across edges. Together the two permutations act transitively on the darts. A rooted map distinguishes one dart, which every automorphism must fix.

**Problem.** A rooted map has no automorphism other than the identity. So rooted maps, such as rooted triangulations of the plane, can be counted with no correction for symmetry.

**How the definition helps.** An automorphism of a rooted map must fix the root. The permutations act transitively on the darts, so every dart is the image of the root under some word in the permutations. The automorphism commutes with the permutations, so it fixes every dart and is the identity. Counting unrooted maps, which can have symmetries, stays harder.

**nLab:** [combinatorial map](https://ncatlab.org/nlab/show/combinatorial+map). It says: “Later I realized that the distinguishing feature and the great advantage of rooted maps is that they have no symmetry. Automorphisms seem to complicate enumerative problems.”

**Sources:**

- [W. T. Tutte, A Census of Planar Triangulations, Canadian Journal of Mathematics 14 (1962)](https://doi.org/10.4153/CJM-1962-002-9)
- [W. T. Tutte, A Census of Planar Maps, Canadian Journal of Mathematics (1963)](https://doi.org/10.4153/CJM-1963-029-x)

### Requiring perfection in every induced subgraph keeps complements perfect

**Remember:** Perfect means perfect in every part, so complements stay perfect.

*Makes the theorem clean to state or prove.* MSC 05C17 (Perfect graphs). arXiv math.CO. Level 3: graduate.

**Definition.** A finite simple graph is perfect if every induced subgraph has chromatic number equal to clique number. These numbers count the fewest colours in a proper colouring and the most vertices in a clique, respectively.

**Problem.** The perfect graph theorem says that the complement of a perfect graph is perfect. The complement has an edge exactly where the graph has none.

**How the definition helps.** Complementation commutes with taking induced subgraphs, so perfection states the same hereditary condition on either side (our own observation). Lovász’s perfect graph theorem proves the equivalence. In our own example a disjoint triangle and five-cycle have both numbers equal to three. Their complement has clique number three and needs four colours, showing why the whole-graph test fails.

**Wikipedia:** [Perfect graph](https://en.wikipedia.org/wiki/Perfect_graph). It says: “A graph is perfect when these numbers are equal, and remain equal after the deletion of arbitrary subsets of vertices.”

**Sources:**

- [L. Lovász, Normal hypergraphs and the perfect graph conjecture, Discrete Mathematics 2 (1972) 253–267](https://doi.org/10.1016/0012-365X(72)90006-4)

### Quasi-transitive orientations are enough to find transitive ones

**Remember:** Ask only for the edge, not its direction, and you lose no graphs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C20 (Directed graphs (digraphs), tournaments), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** An orientation directs each edge of a simple graph. For every directed path a→b→c, transitivity requires a→c, while quasi-transitivity requires an edge between a and c in either direction.

**Problem.** Ghouila-Houri's theorem says that a graph has a quasi-transitive orientation exactly when it has a transitive orientation.

**How the definition helps.** Both conditions test the endpoints of each directed two-edge path (our own observation). A directed triangle passes the weaker test but fails the stronger one. Ghouila-Houri’s theorem supplies a transitive orientation whenever some orientation passes the weaker test.

**Paper or page:** [Extending Ghouila-Houri's Characterization of Comparability Graphs to Temporal Graphs](https://arxiv.org/abs/2510.06849). It says: “A fundamental result presented by Ghouila-Houri guarantees that any static graph admitting a quasi-transitive orientation also admits a transitive orientation.”

**Sources:**

- [Pierre Charbit, Michel Habib, Amalia Sorondo, Extending Ghouila-Houri's Characterization of Comparability Graphs to Temporal Graphs, arXiv:2510.06849 (2025)](https://arxiv.org/abs/2510.06849)

### Flows with values in a group shorten the six-flow theorem

**Remember:** Let flows take values in a group, and six splits into two and three.

*Makes the theorem clean to state or prove.* MSC 05C21 (Flows in graphs). arXiv math.CO. Level 3: graduate.

**Definition.** A flow on an oriented finite graph assigns abelian group values to edges, with incoming and outgoing sums equal at every vertex. A nowhere-zero flow avoids zero on every edge. An integer k-flow takes values strictly between −k and k.

**Problem.** Every bridgeless finite graph has a nowhere-zero integer 6-flow. A bridge is an edge whose removal increases the number of connected components.

**How the definition helps.** A nowhere-zero product flow pairs two flows whose supports cover all edges (our own explanation). Seymour’s six-flow theorem supplies this coverage for bridgeless graphs. Tutte’s group-flow theorem then gives a nowhere-zero integer 6-flow.

**Wikipedia:** [https://en.wikipedia.org/wiki/Nowhere-zero<sub>flow</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Nowhere-zero_flow). It says: “(Tutte 1950) A graph G has an M-flow if and only if it has a \|M\|-flow.”

**Paper or page:** [A short proof of Seymour's 6-flow theorem](https://arxiv.org/abs/2307.04768). It says: “Every 2-edge-connected digraph has a nowhere-zero ℤ₂ × ℤ₃-flow.”

**Sources:**

- [Matt DeVos, Kathryn Nurse, A short proof of Seymour's 6-flow theorem, arXiv:2307.04768 (2023)](https://arxiv.org/abs/2307.04768)

### A subset sum makes the Tutte polynomial well defined

**Remember:** Sum over all edge sets without choosing an order.

*True by definition.* MSC 05C31 (Graph polynomials). arXiv math.CO. Level 3: graduate.

**Definition.** For a finite graph with vertex set V and edge set E, let k(A) count components of (V,A). For each A ⊆ E take the term (x − 1)<sup>(k(A) − k(E))</sup>(y − 1)<sup>(k(A) + \|A\| − \|V\|)</sup>. The Tutte polynomial sums these terms.

**Problem.** The Tutte polynomial is a polynomial in x and y that does not depend on any order of the edges.

**How the definition helps.** The subset sum makes well-definedness immediate because it uses no order and both exponents are nonnegative. Adding edges can only merge components, and at least \|V\| − k(A) edges are needed to form the components of A (our own). If you start with the recursion, you must show that different choices of edges give the same result. The work moves into checking the recursion for the subset sum.

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “In this definition it is clear that T<sub>G</sub> is well-defined and a polynomial in x and y.”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)
- [H. H. Crapo, The Tutte polynomial, Aequationes Mathematicae 3 (1969) 211–229](https://doi.org/10.1007/BF01817442)

### Acyclic orientations reveal chromatic reciprocity

**Remember:** Orient edges by color, then switch strict inequalities to weak ones.

*Makes the theorem clean to state or prove.* MSC 05C31 (Graph polynomials), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** An acyclic orientation gives each edge a direction with no directed cycle. Each proper colouring gives one by orienting every edge toward its higher colour. So the chromatic polynomial at k counts pairs of an acyclic orientation and a colouring by 1 to k that strictly increases along arrows.

**Problem.** For a finite simple graph on n vertices, let χ denote its chromatic polynomial and take a positive integer k. Then (−1)ⁿχ(−k) counts pairs of an acyclic orientation and a vertex labeling by 1 through k that weakly increases along arrows.

**How the definition helps.** Grouping colourings by orientation makes each group a count of strictly order-preserving maps (our own). The work moves into order-polynomial reciprocity, which turns evaluation at a negative integer into a count of weakly order-preserving maps (our own). These compatible maps need not be proper colourings (our own).

**Paper or page:** [q-Chromatic polynomials](https://arxiv.org/abs/2403.19573v1). It says: “where the sum is over all pairs of an n-coloring c and a compatible acyclic orientation ρ.”

**Sources:**

- [q-Chromatic polynomials](https://arxiv.org/abs/2403.19573v1)

### Allowing a few irregular pairs makes Szemerédi's regularity lemma true

**Remember:** Most pairs regular, not all: half graphs make exceptions unavoidable.

*Makes the theorem clean to state or prove.* MSC 05C35 (Extremal problems in graph theory), 05C75. arXiv math.CO. Level 3: graduate.

**Definition.** For nonempty disjoint vertex sets A,B, density is their edge count divided by \|A\|\|B\|. They are ε-regular if every X ⊆ A,Y ⊆ B of relative sizes at least ε has density differing from theirs by at most ε. An ε-regular partition has part sizes differing by at most one and at most ε times the number of unordered part pairs irregular.

**Problem.** For every ε &gt; 0 and every positive integer m there is a number M with this property. Every graph with at least M vertices has an ε-regular partition into k parts, for some k with m ≤ k ≤ M.

**How the definition helps.** Counting exceptional pairs lets one bound the number of parts independently of graph size (our own explanation). Half graphs illustrate why requiring every pair to be regular is too strong. Szemerédi’s regularity lemma supplies the uniform bound.

**Wikipedia:** [Szemerédi regularity lemma](https://en.wikipedia.org/wiki/Szemer%C3%A9di_regularity_lemma). It says: “However, some graphs, such as the half graphs, require many pairs of partitions (but a small fraction of all pairs) to be irregular.”

**Sources:**

- [D. Conlon and J. Fox, Bounds for graph regularity and removal lemmas, Geometric and Functional Analysis 22 (2012) 1191–1256](https://doi.org/10.1007/s00039-012-0171-x)

### Cut norms control graph densities

**Remember:** Change one edge factor at a time and test it on rectangles.

*Rules out counterexamples.* MSC 05C35 (Extremal problems in graph theory), 05C80. arXiv math.CO. Level 3: graduate.

**Definition.** A graphon W is a symmetric measurable function from \[0,1\]² to \[0,1\]. The cut norm of U − W is the supremum of its absolute integral over measurable rectangles S × T. For t(F,W), give vertices independent uniform labels and average the product of W across the labeled endpoints of every edge.

**Problem.** Let F be a finite simple graph with e edges, and let U and W be graphons. Then \|t(F,U) − t(F,W)\| is at most e times the cut norm of U − W.

**How the definition helps.** Our own proof changes one edge factor at a time. Fixing the other labels leaves a product of two endpoint functions in \[0,1\], times a constant in \[0,1\]. Averaging indicators of their level sets bounds each change by the cut norm. Edge density alone misses the triangle-density difference between the constant one-half graphon and the balanced complete bipartite graphon.

**Paper or page:** [Prominent examples of flip processes](https://arxiv.org/abs/2206.03884v1). It says: “Suppose that we have a graph F of order k and two graphons U and W. Then we have \|t(F,U) − t(F,W)\| ≤ (k choose 2)d□(U, W).”

**Sources:** none listed. No primary source with a working link was found.

### A matrix quotient makes the sandpile group order a determinant

**Remember:** The determinant counts the classes of integer vectors in the quotient.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C57. arXiv math.CO. Level 3: graduate.

**Definition.** Take a finite connected undirected graph without loops and choose a vertex as a sink, where grains can leave. Its Laplacian is the diagonal matrix of vertex degrees minus the adjacency matrix. Remove the sink row and column to get the reduced matrix Δ′. Define the sandpile group as the group of integer vectors modulo integer combinations of the columns of Δ′.

**Problem.** The sandpile group has order det Δ′, which is the number of spanning trees of the graph.

**How the definition helps.** The matrix quotient makes the order a determinant by the general formula for the index of a full-rank integer lattice (our own). The matrix-tree theorem makes det Δ′ positive and identifies it with the number of spanning trees. The other definition uses recurrent stable states with addition followed by toppling. The work moves into proving that these states form a group isomorphic to the matrix quotient.

**Wikipedia:** [Abelian sandpile model](https://en.wikipedia.org/wiki/Abelian_sandpile_model). It says: “Given the isomorphisms stated above, the order of the sandpile group is the determinant of Δ′, which by the matrix tree theorem is the number of spanning trees of the graph.”

**Paper or page:** [The critical group of a combinatorial map](https://arxiv.org/abs/2308.13342v2). It says: “Let G be a connected, loopless, abstract graph. Then the order of its critical group K(G) is the number of spanning trees of G.”

**Sources:**

- [D. Dhar, Self-organized critical state of sandpile automaton models, Physical Review Letters 64 (1990) 1613–1616](https://doi.org/10.1103/PhysRevLett.64.1613)

### Directed edges turn cycle products into determinants

**Remember:** A directed edge remembers enough to forbid the next reversal.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C30. arXiv math.CO. Level 3: graduate.

**Definition.** Index both axes of M by the two directed versions of every edge of a finite simple graph. Its entry M(e,f) equals one if f starts where e ends without reversing e, and zero otherwise. The Ihara zeta function multiplies 1/(1 − tˡ) over cyclic shift classes of primitive closed nonbacktracking walks of length ℓ, including the closing transition.

**Problem.** The reciprocal of the Ihara zeta function equals det(I − tM).

**How the definition helps.** Closed walks of the matrix M already enforce the ban on backtracking (our own). The traces of powers of M count these walks with a marked start (our own). The work is to group walks by their primitive cycle and use the trace expansion of the logarithm of the determinant (our own).

**Paper or page:** [On the double covers of a line graph](https://arxiv.org/abs/2202.04756v2). It says: “Let M be the edge adjacency matrix of a graph X. Then ζₓ(u)⁻¹ = det(I−Mu).”

**Sources:** none listed. No primary source with a working link was found.

### Extension axioms give the zero-one law for random finite graphs

**Remember:** Every finite adjacency pattern has a fresh witness.

*Makes the theorem clean to state or prove.* MSC 05C63 (Infinite graphs), 03C13, 05C80. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** For an integer k ≥ 0, the k-extension axiom concerns every pair of disjoint vertex sets U,V with \|U\| + \|V\| ≤ k. It requires a vertex outside both adjacent to all of U and none of V.

**Problem.** For every first-order sentence, the probability that a uniformly random graph on n vertices satisfies it tends to 0 or to 1 as n grows. This is the zero-one law of Glebskii and coauthors and of Fagin.

**How the definition helps.** Our own argument uses the complete theory given by all extension axioms, whose unique countable model up to isomorphism is the Rado graph. Compactness makes finitely many axioms suffice for each first-order sentence or its negation. Each fixed axiom holds with probability tending to one, so those finitely many do too.

**Wikipedia:** [Rado graph](https://en.wikipedia.org/wiki/Rado_graph). It says: “The first-order logic sentences that are true of the Rado graph are also true of almost all random finite graphs, and the sentences that are false for the Rado graph are also false for almost all finite graphs.”

**Sources:**

- [R. Fagin, Probabilities on finite models, The Journal of Symbolic Logic 41 (1976) 50–58](https://doi.org/10.2307/2272945)

### The extension property makes every countable graph embed in the random graph

**Remember:** To embed the next vertex, ask for exactly its earlier neighbors.

*True by definition.* MSC 05C63 (Infinite graphs), 03C15, 05C80. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** The Rado graph is the countably infinite simple graph, unique up to isomorphism, with the extension property. For all disjoint finite vertex sets U,V, some vertex outside both is adjacent to every member of U and none of V.

**Problem.** Every countable simple graph is isomorphic to an induced subgraph of the countable random graph. An induced subgraph keeps exactly the edges between its chosen vertices.

**How the definition helps.** Our own construction uses the extension property once for each new image. Enumerate the graph to embed, and divide the earlier images according to adjacency to the next vertex. The property supplies a fresh image with exactly those required adjacencies.

**nLab:** [countable random graph](https://ncatlab.org/nlab/show/countable+random+graph). It says: “there exists a vertex not in either subset which is connected to all the points in one subset and disconnected from the other.”

**Sources:** none listed. No primary source with a working link was found.

### Decision diagrams turn coloring into flow

**Remember:** Replace weights on whole paths by flows along their edges.

*True by definition.* MSC 05C72 (Fractional graph theory, fuzzy graph theory), 05C85. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** A fractional coloring gives nonnegative weights to independent vertex sets, with total weight at least one covering each vertex. An exact decision diagram represents precisely those sets by directed paths from start to end in a finite acyclic graph. Each path tests each vertex once and includes it exactly when it takes an inclusion edge for that vertex.

**Problem.** The minimum total coloring weight equals the least flow from start to end that sends at least one unit through each vertex’s inclusion edges collectively.

**How the definition helps.** Exactness preserves coverage when weights move between paths and independent sets (our own explanation). Sending each set’s weight along a representing path produces a feasible flow of the same value. Conversely, the flow decomposition theorem splits any feasible nonnegative flow into weighted paths. Adding weights for paths representing each set gives a fractional coloring of equal value.

**Paper or page:** [Fractional Chromatic Numbers from Exact Decision Diagrams](https://arxiv.org/abs/2411.03003v1). It says: “Then the linear relaxation $(F')$ is equivalent to (\\ref{VCLP}).”

**Sources:**

- [Fractional Chromatic Numbers from Exact Decision Diagrams](https://arxiv.org/abs/2411.03003v1)

### The exponential graph turns Hedetniemi's conjecture into a question about one graph

**Remember:** Product into K means a map into the exponential graph.

*Makes the theorem clean to state or prove.* MSC 05C76 (Graph operations (line graphs, products, etc.)), 05C15, 05C60. arXiv math.CO. Level 3: graduate.

**Definition.** In G × H, vertex pairs are adjacent exactly when both coordinates are adjacent in their respective graphs. The vertices of Kᴳ are all functions from V(G) to V(K). Functions f,g are adjacent if f(u) and g(v) are adjacent in K for every ordered pair of adjacent vertices u,v in G.

**Problem.** G × H is k-colourable exactly when H maps homomorphically to Kₖᴳ. For fixed G,k, every k-colourable product G × H has a k-colourable factor exactly when G or Kₖᴳ is k-colourable.

**How the definition helps.** Our own argument rewrites a product colouring c as the map sending h to the function g ↦ c(g,h). The exponential adjacency condition says exactly that this map preserves edges. When G lacks a k-colouring, every qualifying H maps to Kₖᴳ, and taking H = Kₖᴳ tests the condition itself.

**Wikipedia:** [https://en.wikipedia.org/wiki/Hedetniemi%27s<sub>conjecture</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Hedetniemi%2527s_conjecture). It says: “In other words, Hedetniemi's conjecture can be seen as a statement on exponential graphs: for every integer k, the graph Kₖᴳ is either k-colorable, or it contains a loop (meaning G is k-colorable).”

**Paper or page:** [A survey on Hedetniemi's conjecture](https://arxiv.org/abs/2502.16078). It says: “For any graphs G,H,K, G × H → K if and only if H → Kᴳ.”

**Sources:**

- [Xuding Zhu, A survey on Hedetniemi's conjecture, arXiv:2502.16078 (2025)](https://arxiv.org/abs/2502.16078)

### Graphons complete the space of graphs, so graph sequences have limits

**Remember:** Replace each adjacency entry by a square and compare integrals over rectangles.

*Makes the theorem clean to state or prove.* MSC 05C80 (Random graphs (graph-theoretic aspects)), 05C35. arXiv math.CO, math.PR. Level 3: graduate.

**Definition.** A graphon is a symmetric measurable function from \[0,1\]² to \[0,1\]. A finite graph gives a step function by placing its adjacency entries on equal square cells. Cut distance takes the infimum over measure-preserving relabelings of the supremum of absolute integrals of the difference over measurable rectangles.

**Problem.** Every sequence of finite graphs has a subsequence that converges in cut distance to a graphon. So questions about large dense graphs become questions about one limit object.

**How the definition helps.** A finite graph and a proposed limit now belong to the same space (our own explanation). Compactness in cut distance gives a convergent subsequence. The compactness proof uses the weak regularity lemma.

**Wikipedia:** [Graphon](https://en.wikipedia.org/wiki/Graphon). It says: “This space turns out to be compact. Moreover, it contains the set of all finite graphs, represented by their associated graphons, as a dense subset.”

**Sources:**

- [L. Lovász and B. Szegedy, Limits of dense graph sequences, Journal of Combinatorial Theory, Series B 96 (2006) 933–957](https://doi.org/10.1016/j.jctb.2006.05.002)
- [L. Lovász and B. Szegedy, Szemerédi's lemma for the analyst, Geometric and Functional Analysis 17 (2007) 252–270](https://doi.org/10.1007/s00039-007-0599-6)

### Brambles give an exact certificate for large treewidth

**Remember:** To prove treewidth is large, show one bramble of large order.

*Makes the theorem clean to state or prove.* MSC 05C83 (Graph minors). arXiv math.CO, cs.DM. Level 3: graduate.

**Definition.** A bramble in a finite graph is a nonempty family of connected subgraphs such that any two share a vertex or have adjacent vertices. Its order is the minimum size of a vertex set meeting every member.

**Problem.** The duality theorem of Seymour and Thomas relates brambles and treewidth. A graph has treewidth at least k exactly when it has a bramble of order k + 1.

**How the definition helps.** One bramble certifies a lower bound on treewidth (our own explanation). The Seymour–Thomas duality theorem guarantees a bramble matching the best upper bound from tree decompositions.

**Wikipedia:** [https://en.wikipedia.org/wiki/Bramble\_(graph<sub>theory</sub>)](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Bramble_%28graph_theory%29). It says: “Seymour and Thomas proved that the order of a bramble (or equivalently, of a haven) characterizes treewidth: if k is the largest possible order among all brambles of a graph, then the graph has treewidth k − 1.”

**Paper or page:** [Combing a Linkage in an Annulus](https://arxiv.org/abs/2207.04798). It says: “A graph G has a bramble of order k+1 if and only if tw(G) ≥ k.”

**Sources:**

- [Petr A. Golovach, Giannos Stamoulis, Dimitrios M. Thilikos, Combing a Linkage in an Annulus, arXiv:2207.04798 (2022)](https://arxiv.org/abs/2207.04798)

### Using minors, not topological minors, makes the Robertson–Seymour theorem true

**Remember:** Allowing contraction lets finitely many forbidden minors describe every minor-closed family.

*Makes the theorem clean to state or prove.* MSC 05C83 (Graph minors). arXiv math.CO. Level 3: graduate.

**Definition.** A finite graph H is a minor of G if deleting vertices, deleting edges and contracting edges can turn G into H. Contracting an edge identifies its endpoints.

**Problem.** Wagner's conjecture, now the Robertson–Seymour theorem, says this: in every infinite set of finite graphs, one graph is a minor of another. Equivalently, every minor-closed family is defined by finitely many forbidden minors. A family is minor-closed when every minor of a graph in the family is also in the family.

**How the definition helps.** Closure under minors lets one describe a family by its minimal excluded graphs (our own explanation). These graphs form an antichain because none is a proper minor of another. The Robertson–Seymour graph minor theorem makes that antichain finite.

**Wikipedia:** [Robertson–Seymour theorem](https://en.wikipedia.org/wiki/Robertson%E2%80%93Seymour_theorem), [Graph minor](https://en.wikipedia.org/wiki/Graph_minor). It says: “The topological minor relation is not a well-quasi-ordering on the set of finite graphs and hence the result of Robertson and Seymour does not apply to topological minors.”

**Sources:**

- [Neil Robertson and Paul D. Seymour, Graph Minors. XX. Wagner's conjecture, Journal of Combinatorial Theory, Series B (2004)](https://doi.org/10.1016/j.jctb.2004.08.001)
- [Guoli Ding, Excluding a long double path minor, Journal of Combinatorial Theory, Series B 66 (1996) 11–23](https://doi.org/10.1006/jctb.1996.0002)

### Optimal eliminations can leave cliques last

**Remember:** Root at the bag containing the clique and eliminate toward it.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 05C83. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** To eliminate a vertex, join every pair of its remaining neighbors and delete it. An order costs one plus the largest remaining neighbor count at any deletion. A tree decomposition puts vertex sets called bags on a tree so that each edge has both ends in some bag. The bags containing each vertex form a nonempty connected subtree.

**Problem.** For any clique, a set of pairwise adjacent vertices, some minimum-cost order eliminates all other vertices first.

**How the definition helps.** Our own proof uses the equality between minimum elimination cost and minimum largest bag size. In an optimal decomposition, the clique’s vertex subtrees meet pairwise and hence share a bag by the tree Helly property. Root there, eliminate vertices exclusive to each leaf, then discard that leaf and repeat. All fill edges stay within a bag, and the root bag permits the clique to come last.

**Paper or page:** [On Sparsification for Computing Treewidth](https://arxiv.org/abs/1308.3665v1). It says: “There is a minimum-cost elimination order π∗ of G that eliminates all vertices of A before eliminating any vertex of B.”

**Sources:** none listed. No primary source with a working link was found.

### Colex order computes minimum shadows

**Remember:** Colex puts all sets with the same largest element together.

*Makes the theorem clean to state or prove.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 3: graduate.

**Definition.** The lower shadow of a family of k-element sets consists of all sets formed by removing one element. In colex order, compare two sets by the largest element where they differ. The set containing that element comes later.

**Problem.** Among families of fixed size, an initial colex segment has minimum lower shadow. Its shadow is also an initial colex segment.

**How the definition helps.** Colex gives a single candidate family of every size (our own explanation). Grouping sets by their largest element leaves smaller colex segments after that element is removed. This recursion gives another initial segment as the shadow. The Kruskal–Katona theorem gives its minimal size.

**Paper or page:** [Diversity](https://arxiv.org/abs/1811.01111v1). It says: “If ℱ ⊆ (\[n\] choose k), then \|∂ℱ\| ≥ ∂𝒞(\[n\],\|ℱ\|,k).”

**Sources:** none listed. No primary source with a working link was found.

### Grid weights isolate top-degree coefficients

**Remember:** A highest-degree monomial survives the weighted grid sum.

*True by definition.* MSC 05D40 (Probabilistic methods in extremal combinatorics, including polynomial methods (combinatorial Nullstellensatz, etc.)). arXiv math.CO. Level 3: graduate.

**Definition.** Take a polynomial P over a field and a monomial x₁ᵏ¹⋯xₙᵏⁿ of maximum total degree. A grid for it is a product S₁ × ⋯ × Sₙ with \|Sᵢ\| = kᵢ + 1. Weight each grid point by the product over i of 1/∏(sᵢ − s′), where s′ runs over the other elements of Sᵢ.

**Problem.** The weighted sum of P over the grid equals the coefficient of the chosen monomial. So if that coefficient is nonzero, P does not vanish on the whole grid.

**How the definition helps.** The weighted evaluations extract the target coefficient, turning a vanishing question into one interpolation identity (our own). One-variable interpolation gives zero below the target exponent and one at that exponent (our own). Every other monomial within the degree bound falls below the target in some coordinate (our own). Without the degree bound, x − x² vanishes on {0,1} despite its nonzero linear term (our own).

**Paper or page:** [Additive colorings of planar graphs](https://arxiv.org/abs/1202.0667v2). It says: “Suppose that there is a nonvanishing monomial x₁ᵏ¹⋯xₙᵏⁿ in P such that k₁+⋯+kₙ=deg(P).”

**Sources:**

- [Noga Alon, Combinatorial Nullstellensatz (1999)](https://doi.org/10.1017/S0963548398003411)

### Stable subset laws survive conditioning

**Remember:** Set a variable to zero for absence, and differentiate for presence.

*True by definition.* MSC 05D40 (Probabilistic methods in extremal combinatorics, including polynomial methods (combinatorial Nullstellensatz, etc.)). arXiv math.CO. Level 3: graduate.

**Definition.** Encode a random subset of a finite set by a polynomial. Each subset contributes its probability times the product of its variables. The law is strongly Rayleigh when this polynomial has no zero with every variable in the open upper half-plane.

**Problem.** Conditioning a strongly Rayleigh random subset on inclusion or exclusion of an element preserves the property if the event has positive probability.

**How the definition helps.** Encoding subsets as monomials turns conditioning into operations on one polynomial (our own). Setting a variable to zero selects subsets missing its element (our own). Differentiating in that variable, then multiplying it back, selects subsets containing the element (our own). Dividing by the event probability normalizes, and the work lies in proving that these operations preserve stability (our own).

**Paper or page:** [Stable multivariate Narayana polynomials and labeled plane trees](https://arxiv.org/abs/2403.15058v2). It says: “Given i,j ∈ \[n\], the following operations preserve real stability of f ∈ ℝ\[x\]:”

**Sources:** none listed. No primary source with a working link was found.

### A ratio of alternating determinants makes Schur polynomials symmetric

**Remember:** Swapping variables flips both determinant signs, so the ratio stays fixed.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** For a partition λ padded to n parts, let D(λ) be the determinant with entries xᵢ<sup>(λⱼ + n − j)</sup>. Its Schur polynomial is the quotient D(λ)/D(0).

**Problem.** The determinant ratio is a polynomial that is invariant under every permutation of the variables.

**How the definition helps.** Permuting variables permutes the rows of both determinants, so their signs cancel. The denominator is the Vandermonde product of xᵢ − xⱼ over i &lt; j. Equal variables give equal numerator rows, so each difference divides the numerator. These distinct irreducible factors therefore divide it collectively (our own explanation).

**nLab:** [Schur function](https://ncatlab.org/nlab/show/Schur+function). It says: “Then the Schur polynomial attached to λ is the quotient”

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “This is a symmetric function because the numerator and denominator are both alternating, and a polynomial since all alternating polynomials are divisible by the Vandermonde determinant.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing indices merge quasisymmetric products

**Remember:** Merge index lists and add exponents at shared indices.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** For a list α of k positive integers, choose any k strictly increasing positive variable indices. Give those variables the successive exponents of α and multiply. The monomial quasisymmetric function M\_α sums these products over all such choices.

**Problem.** M\_α M\_β sums M\_γ over all quasi-shuffles γ of α and β, counted with multiplicity. At each step take the next entry of either list, or take both next entries and record their sum, until both lists are exhausted.

**How the definition helps.** In the product, the only question is which variable indices of the two monomials coincide (our own). Each quasi-shuffle records exactly one pattern of shared indices, and shared indices add their exponents (our own). Once the merge is fixed, summing over the actual indices gives M\_γ (our own).

**nLab:** [quasi-symmetric function](https://ncatlab.org/nlab/show/quasi-symmetric+function). It says: “Let X be a totally ordered set of indeterminants.”

**Paper or page:** [The Bernstein homomorphism via Aguiar-Bergeron-Sottile universality](https://arxiv.org/abs/1604.02969v2). It says: “Mα₁Mα₂⋯Mαₖ = ∑\[A ∈ ℕᵏ˒• Cred, (Aɡ,•)ʳᵉᵈ = αɡ for each g\] Mcolumn A.”

**Sources:** none listed. No primary source with a working link was found.

### Ordered variables split quasisymmetric functions

**Remember:** Two ordered lists cut each exponent list once.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** For a list α of positive integers, M\_α sums all monomials placing its successive exponents on strictly increasing positive variable indices. Its coproduct evaluates M\_α on two alphabets ordered consecutively, interpreting products from the separate alphabets as tensors.

**Problem.** The coproduct of M\_α sums M\_β ⊗ M\_γ over all cuts of α into consecutive pieces β and γ. Empty pieces are allowed, with M of the empty list equal to one.

**How the definition helps.** Evaluation on consecutive lists forces each increasing index sequence to cross between lists at most once (our own). Each cut point therefore gives a product of independent sums (our own).

**Paper or page:** [The Bernstein homomorphism via Aguiar-Bergeron-Sottile universality](https://arxiv.org/abs/1604.02969v2). It says: “Let γ ∈ Comp and k ∈ ℕ. Then, Δ⁽ᵏ⁻¹⁾Mγ = ∑\[(γ₁, γ₂, …, γₖ) ∈ Compᵏ, γ₁γ₂⋯γₖ = γ\] Mγ₁ ⊗ Mγ₂ ⊗ ⋯ ⊗ Mγₖ.”

**Sources:** none listed. No primary source with a working link was found.

### Power sums make the symmetric function involution immediate

**Remember:** Apply the same sign twice to recover each generator.

*True by definition. Confidence: medium.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** In the rational symmetric function ring, the power sum pₖ sums the kth powers of all variables for each integer k ≥ 1. The ring map ω sends each pₖ to (−1)ᵏ⁻¹pₖ.

**Problem.** Applying ω twice gives the identity.

**How the definition helps.** Our own proof applies the same sign twice to each power sum. Its square is one, so every pₖ returns to itself. The power sums freely generate the rational symmetric function ring, so these values determine the entire map.

**Wikipedia:** [Ring of symmetric functions](https://en.wikipedia.org/wiki/Ring_of_symmetric_functions). It says: “The fact that ω is an involution of Λ<sub>R</sub> follows from the symmetry between elementary and complete homogeneous symmetric functions expressed by the first set of relations given above.”

**Sources:** none listed. No primary source with a working link was found.

### Schur characters make Littlewood–Richardson coefficients nonnegative

**Remember:** Multiply characters and count how often each irreducible piece occurs.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 05E10, 20G05. arXiv math.CO, math.RT. Level 3: graduate.

**Definition.** For a partition λ with at most n parts, take the irreducible polynomial representation of GLₙ(ℂ) with highest weight λ. Its character on the diagonal matrix with entries x₁,…,xₙ defines the Schur polynomial s\_λ.

**Problem.** The product of two Schur polynomials in n variables expands in the Schur basis with nonnegative integer coefficients. These are the Littlewood–Richardson coefficients for the partitions with at most n parts.

**How the definition helps.** Our own argument reads each coefficient as an irreducible summand’s multiplicity. The product of characters is the character of the tensor product. Complete reducibility decomposes that tensor product into irreducible polynomial representations. Their characters are the Schur polynomials, giving the claimed nonnegative integer coefficients.

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “In representation theory they are the characters of polynomial irreducible representations of general linear groups.”

**Sources:** none listed. No primary source with a working link was found.

### Tableau weights explain the Cauchy identity

**Remember:** Sum the variable products of all fillings, weak across and strict down.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** For a partition λ, fill its left-aligned rows with positive variable indices, weakly increasing across rows and strictly increasing down columns. The Schur function s\_λ sums the products of the variables in all such fillings.

**Problem.** The sum over all shapes λ of s\_λ(x₁, x₂, …) s\_λ(y₁, y₂, …) equals the product of 1/(1 − xᵢyⱼ) over all pairs i, j.

**How the definition helps.** The filling definition lets both sides count matrices by their row and column sums (our own). Expanding each geometric series chooses one nonnegative matrix entry (our own). The Robinson–Schensted–Knuth bijection turns each matrix into two fillings of equal shape with those variable counts (our own). The work lies in proving the bijection and identifying the filling sum with the usual determinant ratio (our own).

**nLab:** [Schur function](https://ncatlab.org/nlab/show/Schur+function). It says: “the corresponding Schur polynomial sλ is equal to the sum over the monomials”

**Paper or page:** [Growth diagram proofs for the Littlewood identities](https://arxiv.org/abs/2404.04014v1). It says: “\\sum<sub>\\lambda</sub> s\_\\lambda(\\mathbf{x})s\_\\lambda(\\mathbf{y}) &amp;= \\prod\_{\\substack{1 \\leq i \\leq n \\\\ 1 \\leq j \\leq m}} \\frac{1}{1-x<sub>iy</sub><sub>j</sub>},”

**Sources:** none listed. No primary source with a working link was found.

### Tableaux make Kostka numbers nonnegative

**Remember:** Each coefficient counts fillings of a fixed shape and weight.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 05E10. arXiv math.CO, math.RT. Level 3: graduate.

**Definition.** A tableau of partition shape λ fills its left-aligned rows with labels from 1 through n, weakly increasing across rows and strictly increasing down columns. Its Schur polynomial sums one monomial per tableau, with a factor xᵢ for each occurrence of i.

**Problem.** The Schur polynomial expands in monomial symmetric polynomials with nonnegative integer coefficients called Kostka numbers. Each basis polynomial sums all distinct monomials whose exponents are permutations of a fixed list.

**How the definition helps.** The filling definition makes positivity immediate because each monomial coefficient counts fillings with the prescribed label counts. Symmetry makes the coefficients equal for monomials in the same basis polynomial. In the determinant definition, the quotient of signed sums does not show that the coefficients are nonnegative. The work moves into proving that the filling sum equals the determinant ratio, which also gives symmetry.

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “The Kostka numbers K\_λμ are given by the number of semi-standard Young tableaux of shape λ and weight μ.”

**Sources:** none listed. No primary source with a working link was found.

### Thresholds triangulate the order polytope

**Remember:** As the threshold rises, the upper sets form a nested chain.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** An order polytope assigns each element of a finite ordered set a number between zero and one. The assigned numbers increase weakly along the order. Describe an assignment by its upper sets above each threshold, where an upper set contains everything above any member.

**Problem.** The canonical simplices of the order polytope are exactly the convex hulls of indicator vectors on chains of upper sets.

**How the definition helps.** Threshold sets express each point as a convex combination along one chain of upper sets (our own). Sorting coordinates usually describes this subdivision by inequalities (our own). Here the gaps between consecutive distinct values, including the endpoints zero and one, give the weights (our own). The sets with positive weights are uniquely determined, so two chain simplices intersect in their common face (our own).

**Paper or page:** [Equatorial Flow Triangulations of Gorenstein Flow Polytopes](https://arxiv.org/abs/2408.05320v2). It says: “chains of nested upper order ideals correspond to the simplicies of the canonical triangulation.”

**Sources:** none listed. No primary source with a working link was found.

### Setting 0⁰ = 1 lets one Eulerian series hold for every n

**Remember:** With 0⁰ = 1, the case n = 1 needs no separate statement.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 4: research.

**Definition.** For any x, the zeroth power x⁰ is the product of zero factors. An empty product equals the multiplicative identity, so this convention gives 0⁰ = 1.

**Problem.** For every positive integer n, ODP(Tourₙ, Cycleₙ)/(1 − x)ⁿ = n Σ<sub>m≥0</sub> mⁿ⁻¹ xᵐ.

**How the definition helps.** The empty product supplies the constant term when n = 1 (our own check). Then each m⁰ equals one and the series sums to 1/(1 − x). For n ≥ 2 the m = 0 term vanishes. The paper’s generating-function identity supplies the counting result.

**Paper or page:** [Generalized Eulerian Numbers and Directed Friends-and-seats Graphs](https://arxiv.org/abs/2403.00966). It says: “For all positive integers n, we have that ODP(Tourₙ, Cycleₙ)/(1−x)ⁿ = n Σₘ≥₀ mⁿ⁻¹ xᵐ, where, by convention, 0⁰ = 1.”

**Sources:**

- [David Dong, Generalized Eulerian Numbers and Directed Friends-and-seats Graphs, arXiv:2403.00966 (2024)](https://arxiv.org/abs/2403.00966)

### Cobordisms of signed sets make the involution principle a composition

**Remember:** Compose sign-cancelling matchings, and you get a bijection between the ends.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 18M80. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A signed finite set has positive and negative elements. A cobordism from A to B perfectly matches the disjoint union of A and B, pairing opposite signs after reversing the signs in A. An unsigned set has only positive elements.

**Problem.** A chain of cobordisms that starts and ends with unsigned sets A and B yields a matching from A to B. The Garsia–Milne involution principle is a special case.

**How the definition helps.** Our own explanation follows the matching paths after identifying adjacent copies of each intermediate signed set. Internal points have degree two, so paths from endpoints terminate at endpoints, and closed components have no endpoints. Path composition gives a cobordism between the outer sets. For unsigned ends every matched pair crosses from A to B, giving a bijection.

**Paper or page:** [A category for bijective combinatorics](https://arxiv.org/abs/1907.09015). It says: “The category of matchings between finite sets extends to the category of cobordisms of signed sets. A chain of cobordisms that starts and ends with unsigned sets A and B yields a matching from A to B.”

**Sources:**

- [Peter G. Doyle, A category for bijective combinatorics, arXiv:1907.09015 (2019)](https://arxiv.org/abs/1907.09015)

### Lorentzian quadratics control coefficient exchanges

**Remember:** One positive eigenvalue controls each pair of exchanged exponents.

*Rules out counterexamples.* MSC 05A20 (Combinatorial inequalities). arXiv math.CO. Level 4: research.

**Definition.** For homogeneous f of degree d ≥ 2 with nonnegative coefficients, let S be its exponent support. Whenever α,β ∈ S and αᵢ &gt; βᵢ, require some j with αⱼ &lt; βⱼ and α−eᵢ+eⱼ ∈ S. Call f Lorentzian if this holds and every order-(d − 2) partial derivative has at most one positive Hessian eigenvalue.

**Problem.** If f = Σ c\_α x<sup>α</sup>/α! is Lorentzian, then c\_α² ≥ c<sub>α+eᵢ−eⱼ</sub> c<sub>α−eᵢ+eⱼ</sub> for every exponent vector α and indices i, j.

**How the definition helps.** Our own proof takes missing coefficients as zero, making boundary cases immediate. For distinct i,j with αᵢ,αⱼ positive, differentiate with multi-index α − eᵢ − eⱼ. The principal Hessian block on i,j has the outer coefficients on its diagonal and c\_α off diagonal, so its determinant is nonpositive. The exchange rule alone allows x² + xy + y², whose normalized coefficients violate the inequality.

**Paper or page:** [Log-concavity in Combinatorics](https://arxiv.org/abs/2404.10284v1). It says: “If f = ∑α cαxα/α! is a Lorentzian polynomial, then cα² ≥ cα₊ₑᵢ₋ₑⱼ cα₋ₑᵢ₊ₑⱼ”

**Sources:** none listed. No primary source with a working link was found.

### Fixing the distance from the middle coefficient makes Gaussian polynomial unimodality easy

**Remember:** Track the same distance from the middle as the box grows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A30 (\\(q\\)-calculus and related topics), 05A17. arXiv math.NT, math.CO. Level 4: research.

**Definition.** For nonnegative m,N, the coefficient of qⁿ in the Gaussian polynomial counts partitions of n fitting in an m by N rectangle. A perpendicular series fixes m and a distance A from the middle degree mN/2. Its coefficient of zᴺ counts partitions at degree mN/2 − A, taking the count as zero for inadmissible degrees.

**Problem.** The coefficients of a Gaussian polynomial are unimodal, which means they rise to the middle and then fall. For small m, this follows easily from the perpendicular generating functions.

**How the definition helps.** Adjacent perpendicular series collect adjacent coefficient comparisons across many rectangle widths (our own explanation). For m = 4, Proposition 1.5 supplies rational forms for the series. To prove unimodality, subtract the series farther from the middle from the nearer one and check coefficientwise nonnegativity.

**Paper or page:** [An Orthogonal View of Gaußian Polynomials](https://arxiv.org/abs/2510.14124v1). It says: “For small values of m, unimodality of the coefficients of Gaussian polynomials is easily proved from these generating functions.”

**Sources:**

- [Christian Krattenthaler, Brandt Kronholm, Paul Marsh, An Orthogonal View of Gaußian Polynomials, arXiv:2510.14124v1 (2025)](https://arxiv.org/abs/2510.14124v1)

### Bergman augmentation makes bases count spheres

**Remember:** Put bases last in the shelling to count the spheres.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05E45. arXiv math.CO. Level 4: research.

**Definition.** An augmented Bergman face of a finite matroid consists of an independent set I and a strictly nested chain of proper flats, each containing I. Either part may be empty. A flat contains every element whose addition leaves its rank unchanged.

**Problem.** Let the matroid have positive rank r. Its augmented Bergman complex has the homotopy type of spheres of dimension r − 1 joined at one point. There is one sphere for each basis, a maximal independent set.

**How the definition helps.** The added independent-set faces let a shelling put the bases last (our own). A shelling orders maximal faces so their successive intersections are unions of faces one dimension smaller (our own). The work moves to proving this shelling and showing that precisely the basis faces attach along their full boundary (our own). The shelling theorem then gives one sphere per such face (our own).

**Paper or page:** [Topology of augmented Bergman complexes](https://arxiv.org/abs/2108.13394v2). It says: “For a matroid M, the augmented Bergman complex Δₘ is homotopy equivalent to a β-fold wedge of (r(M)−1)-spheres”

**Sources:**

- [Topology of augmented Bergman complexes](https://arxiv.org/abs/2108.13394v2)

### Linear weak maps make the direct sum a coproduct of q-matroids

**Remember:** Allow rank to drop, but keep the maps linear.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 18A30. arXiv math.CO, math.CT. Level 4: research.

**Definition.** For q-matroids over the same finite field, a linear weak map f is a linear map between their underlying vector spaces. For every subspace U, the target rank of f(U) must be at most the source rank of U.

**Problem.** In the category of q-matroids with linear weak maps, the direct sum of two q-matroids is their coproduct. For each of the paper's five other kinds of maps, some pairs of representable q-matroids have no coproduct.

**How the definition helps.** Linearity uniquely determines the map out of the underlying direct sum from its two restrictions (our own explanation). The paper’s coproduct theorem proves that this map satisfies the weak rank inequality. Its nonexistence results for the five other map classes require separate arguments.

**Paper or page:** [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3). It says: “This is the category where the morphisms are linear weak maps, that is, the rank of the image of any subspace is not larger than the rank of the subspace itself.”

**Sources:**

- [Heide Gluesing-Luerssen, Benjamin Jany, Coproducts in Categories of q-Matroids, arXiv:2111.09723 (2023)](https://arxiv.org/abs/2111.09723v3)
- [Heide Gluesing-Luerssen and Benjamin Jany, Coproducts in categories of q-matroids, European Journal of Combinatorics 112 (2023), 103733](https://doi.org/10.1016/j.ejc.2023.103733)

### Scaled ranks make q-polymatroid independence the independence of a q-matroid

**Remember:** Test scaled rank on every subspace.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 11T71. arXiv math.CO, cs.IT. Level 4: research.

**Definition.** Let ρ be a rational-valued q-polymatroid rank and let μ be a positive integer such that μρ is integer-valued. A subspace V is μ-independent if μρ(W) ≥ dim W for every subspace W ⊆ V.

**Problem.** Define r(V) as the minimum of μρ(W) + dim V − dim W over subspaces W of V. Then r is the rank function of a q-matroid, a q-polymatroid whose ranks are integers. Its independent spaces, those with r(V) = dim V, are exactly the μ-independent spaces.

**How the definition helps.** The zero subspace gives r(V) ≤ dim V in the minimum formula (our own calculation). Equality means every term is at least dim V, precisely the μ-independence test. The paper’s auxiliary q-matroid theorem proves that this minimum satisfies the rank axioms.

**Paper or page:** [Independent Spaces of q-Polymatroids](https://arxiv.org/abs/2105.01802v1), [Independent Spaces of q-Polymatroids](https://arxiv.org/abs/2105.01802v1). It says: “With the aid of an auxiliary q-matroid it is shown that the collection of independent spaces satisfies the same properties as for q-matroids.”

**Sources:**

- [Heide Gluesing-Luerssen, Benjamin Jany, Independent Spaces of q-Polymatroids, arXiv:2105.01802 (2021)](https://arxiv.org/abs/2105.01802v1)
- [Heide Gluesing-Luerssen and Benjamin Jany, Independent Spaces of q-Polymatroids, Algebraic Combinatorics 5 (2022), 727–744](https://doi.org/10.5802/alco.241)

### Rooted forests as presheaves on the natural numbers form a topos

**Remember:** A forest is a list of levels, and each vertex points down to its parent.

*True by definition. Confidence: medium.* MSC 05C05 (Trees), 18F20, 18B25. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A rooted forest is a functor from ℕᵒᵖ to sets, with vertices at each level and a parent map from each level to its predecessor. A forest map preserves levels and commutes with every parent map. A rooted tree is such a forest with one vertex at level zero.

**Problem.** The category of rooted forests is a Grothendieck topos, and so is the equivalent category of rooted trees. A Grothendieck topos is a category of sheaves on a site, and it behaves much like the category of sets.

**How the definition helps.** Forest maps are natural transformations, so forests form a presheaf category (our own explanation). Presheaves are sheaves for the trivial topology, giving a Grothendieck topos. Adding a common root shifts every level up one, and deleting it gives the inverse equivalence for trees.

**nLab:** [tree](https://ncatlab.org/nlab/show/tree). It says: “The functor description makes it clear that the category of forests is a (presheaf) topos, indeed a Grothendieck topos; therefore the category of trees, which is equivalent, is also a topos.”

**Sources:** none listed. No primary source with a working link was found.

### Generalised colouring numbers give a short proof for exact distance graphs

**Remember:** Bound the weak colouring number, and exact distance graphs are easy to colour.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C12. arXiv math.CO. Level 4: research.

**Definition.** Fix a vertex order on a finite graph G. Vertex v weakly r-reaches u if a path of length at most r from v to u has u as its earliest vertex. Minimize the maximum number weakly reached by any vertex over all orders to obtain the weak r-colouring number, counting each vertex itself.

**Problem.** For a positive odd integer p, join two vertices exactly when their distance in G is p. The chromatic number of this graph is at most the weak (2p − 1)-colouring number of G.

**How the definition helps.** A single order with bounded weak reach supplies the parameter in the odd-distance colouring theorem (our own explanation). The paper’s colouring argument proves the inequality using that order.

**Paper or page:** [Chromatic Numbers of Exact Distance Graphs](https://arxiv.org/abs/1612.02160). It says: “Using the notion of generalised colouring numbers, we give a much simpler proof for the result of Nešetřil and Ossona de Mendez, which at the same time gives significantly better bounds.”

**Sources:**

- [Jan van den Heuvel, H. A. Kierstead and Daniel A. Quiroz, Chromatic numbers of exact distance graphs, Journal of Combinatorial Theory, Series B 134 (2019), 143–163](https://doi.org/10.1016/j.jctb.2018.05.007)

### Raising the independence series to the q-th power counts hypergraph multicolorings

**Remember:** Each of the q factors chooses the vertices of one color.

*True by definition. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C65, 05A15. arXiv math.CO. Level 4: research.

**Definition.** A set of vertices of a hypergraph is independent when it contains no whole edge. The multivariate independence series adds, over all independent sets S, the product of the variables xᵥ for v in S. The empty set contributes 1. A multicoloring gives each vertex a set of colors, and no color may be common to all vertices of any edge.

**Problem.** Fix a nonnegative integer q and nonnegative integer demands mᵥ. In the qth power of the series, the coefficient with exponents mᵥ counts multicolorings assigning each vertex v exactly mᵥ of the q colors.

**How the definition helps.** The definition makes each factor of the power choose one legal color class, so expanding the power lists the colorings directly. In our own explanation, a product of q such choices is a list of q color classes. The exponent of xᵥ then counts the colors at v, and independence is exactly the coloring rule. The empty set lets a color go unused.

**Paper or page:** [Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements](https://arxiv.org/abs/2507.20847v1), [Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements](https://arxiv.org/abs/2507.20847v1). It says: “We show that the coefficients of the q-th power of the marked independence series of a hypergraph coincide with its marked chromatic polynomials in q, thereby generalizing a corresponding result for graphs”

**Sources:**

- [Chaithra P, Shushma Rani, R. Venkatesh, Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements, arXiv:2507.20847 (2025)](https://arxiv.org/abs/2507.20847v1)

### Compatible Eulerian tours give the sandpile group a canonical action without roots

**Remember:** A tour is a cycle with no start, so no root is needed.

*Makes the theorem clean to state or prove.* MSC 05C25 (Graphs and abstract algebra (groups, rings, fields, etc.)), 05C45, 05C10. arXiv math.CO. Level 4: research.

**Definition.** In a connected Eulerian digraph, a ribbon structure fixes a cyclic order of the outgoing arcs at each vertex. A compatible tour is a cyclic traversal using every arc once whose successive departures at each vertex follow that cyclic order.

**Problem.** For an Eulerian ribbon digraph, the sandpile group acts simply transitively on the compatible Eulerian tours, by an action that needs no choice of root. The sandpile group is the group of chip configurations up to firing moves.

**How the definition helps.** Cyclic tours have no distinguished start, so they can carry a root-independent action (our own explanation). Cutting a tour at an arc gives the rooted data for rotor routing. The paper’s tour-rotor theorem proves independence of that cut and simple transitivity.

**Paper or page:** [On canonical sandpile actions of embedded graphs](https://arxiv.org/abs/2504.05275v1). It says: “The tour-rotor action is a well-defined, canonical simply transitive action of the sandpile group of an Eulerian ribbon digraph on the set of compatible Eulerian tours.”

**Sources:**

- [Lilla Tóthmérész, On canonical sandpile actions of embedded graphs, arXiv:2504.05275 (2025)](https://arxiv.org/abs/2504.05275v1)
- [Lilla Tóthmérész, On canonical sandpile actions of embedded graphs, Advances in Combinatorics (2026)](https://doi.org/10.19086/aic.2026.6)

### Defining hypergraph parking functions by cuts makes them the superstable configurations

**Remember:** Every set of vertices has a member too poor to fire.

*True by definition.* MSC 05C25 (Graphs and abstract algebra (groups, rings, fields, etc.)), 05C65. arXiv math.CO. Level 4: research.

**Definition.** Fix a finite hypergraph with sink q and a nonnegative integer chip count cᵢ at each other vertex. For T excluding q and i ∈ T, let dᵀ(i) count incident edges that also meet the complement of T. An H-parking function requires every nonempty such T to contain some i with cᵢ &lt; dᵀ(i).

**Problem.** In hypergraph chip-firing with a choice of destination within each incident edge, the superstable configurations are exactly the H-parking functions.

**How the definition helps.** Our own explanation negates the firing criterion. The paper’s firing lemma permits a nonempty set T to fire exactly when cᵢ ≥ dᵀ(i) for every i ∈ T. Superstability forbids every such firing, precisely the parking-function condition.

**Paper or page:** [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1), [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1), [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1). It says: “We also show how H-parking functions can be recovered as the superstable configurations in a version of chip-firing on H, where chips have a choice of where to go when fired.”

**Sources:**

- [Timothy Blanton, Anton Dochtermann, Isabelle Hong, SuHo Oh, Zhan Zhan, Parking functions and chip-firing on hypergraphs, arXiv:2508.09720 (2025)](https://arxiv.org/abs/2508.09720v1)

### A Tutte polynomial for embedded graphs keeps duality on every surface

**Remember:** Define the polynomial on the surface, and duality swaps x and y everywhere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C31 (Graph polynomials), 05C10. arXiv math.CO. Level 4: research.

**Definition.** For an embedded graph with v vertices, let b(A) count boundary components of the thickened spanning subgraph with edge set A. Put ρ(A) = (v + \|A\| − b(A))/2. Its surface Tutte polynomial sums (x − 1)<sup>(ρ(E) − ρ(A))</sup>(y − 1)<sup>(\|A\| − ρ(A))</sup> over A ⊆ E.

**Problem.** For every cellularly embedded graph, passing to the dual exchanges the two variables of its surface Tutte polynomial.

**How the definition helps.** Our own explanation pairs each spanning ribbon subgraph with the complementary edges in the dual. The two thickened subgraphs have the same boundary count. Substituting this count in the two rank formulas exchanges the exponents, giving the duality identity term by term.

**Paper or page:** [Constructing a Tutte polynomial for graphs embedded in surfaces](https://arxiv.org/abs/2502.15318). It says: “Let 𝔾 be an embedded graph. Then T(𝔾\*;x,y) = T(𝔾;y,x).”

**Sources:**

- [Iain Moffatt, Constructing a Tutte polynomial for graphs embedded in surfaces, arXiv:2502.15318 (2025)](https://arxiv.org/abs/2502.15318)

### Rooted flags multiply density limits

**Remember:** Fix the labels, then sample the two remaining parts separately.

*Makes the theorem clean to state or prove.* MSC 05C35 (Extremal problems in graph theory). arXiv math.CO. Level 4: research.

**Definition.** Fix a labeled graph as the type. A flag contains distinguished labeled vertices inducing that type. In the product, each candidate union receives the probability that a uniform ordered split of its unlabeled vertices induces both factors with their common labels.

**Problem.** Along a convergent sequence of increasingly large flagged graphs with fixed label type, each product density tends to the product of its factors’ limit densities. Thus the limit functional is a homomorphism of the flag algebra.

**How the definition helps.** The product counts what two independent samples see, apart from accidental overlap (our own). That overlap has probability tending to zero for fixed sample sizes (our own). The work moves to showing that averaging a flag over larger samples gives the same limit (our own).

**Wikipedia:** [Flag algebra](https://en.wikipedia.org/wiki/Flag_algebra). It says: “One can show that the set of limit functionals Φ is exactly the set of positive homomorphisms”

**Sources:**

- [Alexander A. Razborov, Flag algebras (2007)](https://doi.org/10.2178/jsl/1203350785)

### Perron eigenvector weights give an expander mixing lemma for irregular graphs

**Remember:** Weight vertices by the leading eigenvector.

*Makes the theorem clean to state or prove.* MSC 05C48 (Expander graphs), 05C50. arXiv math.CO. Level 4: research.

**Definition.** For a finite undirected graph with adjacency matrix A, choose a nonnegative unit eigenvector ν for its largest eigenvalue λ₁. Set ν(S) equal to the sum of νᵤ² over u ∈ S. Define e(S,T) by summing Aᵤᵥνᵤνᵥ over ordered pairs (u,v) ∈ S × T.

**Problem.** For any vertex sets S and T, write e(S, T) for their weighted edge count and ν(S) for the weight of S. Then \|e(S, T) − λ₁ν(S)ν(T)\| ≤ λ √(ν(S)ν(Sᶜ)ν(T)ν(Tᶜ)), where λ is the largest absolute value among the other eigenvalues.

**How the definition helps.** Our own proof writes the weighted edge count as the bilinear form of A on the restrictions of ν to S and T. Their projections onto ν give λ₁ν(S)ν(T). The remaining vectors are perpendicular to ν, where the operator norm is λ. Their lengths are √(ν(S)ν(Sᶜ)) and √(ν(T)ν(Tᶜ)), giving the bound.

**Paper or page:** [A unified framework for the Expander Mixing Lemma for irregular graphs and its applications](https://arxiv.org/abs/2401.07125v2), [A unified framework for the Expander Mixing Lemma for irregular graphs and its applications](https://arxiv.org/abs/2401.07125v2). It says: “we instead propose to use the Perron eigenvector entries as vertex weights, which is a way to regularise the graph.”

**Sources:**

- [Aida Abiad, Sjanne Zeijlemaker, A unified framework for the Expander Mixing Lemma for irregular graphs and its applications, arXiv:2401.07125 (2024)](https://arxiv.org/abs/2401.07125v2)

### Reweighted eigenvalues give vertex expansion Cheeger

**Remember:** Choose the best edge weights, and eigenvalues see vertex expansion.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C48 (Expander graphs), 05C50. arXiv cs.DS, math.CO. Level 4: research.

**Definition.** For a finite graph on n vertices, let ψ minimize \|N(S) ∖ S\|/\|S\| over 1 ≤ \|S\| ≤ n/2. Give each edge a nonnegative weight so that each vertex has weighted degree at most one. The maximum second-smallest weighted Laplacian eigenvalue over these choices is λ₂\*.

**Problem.** For a finite graph with maximum degree d ≥ 2, ψ²/log d ≲ λ₂\* ≲ ψ, with absolute implied constants.

**How the definition helps.** Optimizing the Laplacian over feasible weights gives one spectral quantity to compare with vertex expansion (our own explanation). The quoted Olesker-Taylor–Zanetti bound uses the logarithm of the vertex count. The paper’s strengthened Cheeger inequality replaces that count with maximum degree.

**Paper or page:** [Cheeger Inequalities for Vertex Expansion and Reweighted Eigenvalues](https://arxiv.org/abs/2203.06168). It says: “Recently, Olesker-Taylor and Zanetti discovered a Cheeger-type inequality ψ²/log\|V\| ≲ λ₂\* ≲ ψ connecting the vertex expansion ψ of a graph G=(V,E) and the maximum reweighted second smallest eigenvalue λ₂\* of the Laplacian matrix.”

**Sources:**

- [Tsz Chiu Kwok, Lap Chi Lau, Kam Chuen Tung, Cheeger Inequalities for Vertex Expansion and Reweighted Eigenvalues, arXiv:2203.06168 (2022)](https://arxiv.org/abs/2203.06168)

### Graphons with the same spectrum are those with equal cycle densities

**Remember:** Cycle densities are power sums of the nonzero spectrum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C80. arXiv math.CO, math.SP. Level 4: research.

**Definition.** A graphon is a symmetric measurable function W from \[0,1\]² to \[0,1\]. Its operator on L²\[0,1\] sends f to the function x ↦ ∫₀¹ W(x,y)f(y) dy. Two graphons are cospectral if their nonzero eigenvalues agree with multiplicity.

**Problem.** Two graphons are cospectral exactly when their k-cycle densities agree for every k &gt; 3. The k-cycle density integrates W(x₁,x₂)W(x₂,x₃)⋯W(xₖ,x₁) over all points. Equality for infinitely many odd and infinitely many even k already suffices.

**How the definition helps.** Cycle densities are power sums of the eigenvalues, so cospectral graphons have equal cycle densities at once. In our own explanation, the k-cycle density is the trace of the kth power of the operator. The converse needs a proof that the power sums determine the nonzero eigenvalues with multiplicity. The paper also shows that cospectral graphons need not be limits of cospectral finite graphs.

**Paper or page:** [On cospectral graphons](https://arxiv.org/abs/2411.13229v1), [On cospectral graphons](https://arxiv.org/abs/2411.13229v1), [On cospectral graphons](https://arxiv.org/abs/2411.13229v1). It says: “As in the graph case, we give three equivalent definitions: by equality of spectra, by equality of cycle densities, and by a unitary transformation.”

**Sources:**

- [Jan Hladký, Daniel Iľkovič, Jared León, Xichao Shu, On cospectral graphons, arXiv:2411.13229 (2024)](https://arxiv.org/abs/2411.13229v1)

### The 1-Laplacian makes Cheeger's constant an exact eigenvalue

**Remember:** Absolute values, not squares, turn Cheeger's bounds into an equality.

*Makes the theorem clean to state or prove.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 35P30. arXiv math.SP, math.CO. Level 4: research.

**Definition.** For a finite graph, the 1-Laplacian energy I(x) sums \|xᵤ − xᵥ\| over edges uv. A real λ is an eigenvalue if some nonzero x satisfies 0 ∈ ∂I(x) − λ∂J(x), using convex subdifferentials and J(x) = ∑ᵥ deg(v)\|xᵥ\|. The Cheeger constant minimizes the cut size divided by the smaller side’s degree sum over nontrivial cuts.

**Problem.** For every finite connected graph with at least two vertices, the first positive 1-Laplacian eigenvalue equals its Cheeger constant.

**How the definition helps.** In our own explanation, threshold cuts connect the absolute-difference energy to cut sizes. Indicators realize cut sizes exactly, and the coarea formula expresses general energies as integrals of threshold cut sizes. The graph 1-Laplacian Cheeger theorem identifies the minimum cut ratio with the first positive eigenvalue.

**Paper or page:** [Spectrum of the 1-Laplacian and Cheeger's constant on graphs](https://arxiv.org/abs/1412.1150), [Spectrum of the 1-Laplacian and Cheeger's constant on graphs](https://arxiv.org/abs/1412.1150). It says: “Cheeger's constant, which has only some upper and lower bounds in linear spectral theory, equals to the first non-zero Δ₁ eigenvalue for connected graphs.”

**Sources:**

- [Kung Ching Chang, Spectrum of the 1-Laplacian and Cheeger's constant on graphs, arXiv:1412.1150 (2014)](https://arxiv.org/abs/1412.1150)
- [K. C. Chang, Spectrum of the 1-Laplacian and Cheeger's Constant on Graphs, J. Graph Theory 81, no. 2, 167–207 (2015)](https://doi.org/10.1002/jgt.21871)

### Triangular rank-one perturbations of Laplacians give short spanning-tree counts

**Remember:** Turn the tree-count determinant into a diagonal product.

*Makes the theorem clean to state or prove.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C30, 05C05. arXiv math.CO. Level 4: research.

**Definition.** The Laplacian of a graph is the diagonal matrix of degrees minus the adjacency matrix. With edge weights, both matrices use the weights. The Laplacian L admits a triangular rank-one perturbation if L + uvᵀ is triangular for some vectors u, v and some vertex order.

**Problem.** Suppose L + uvᵀ is triangular and both vector sums are nonzero. The weighted spanning-tree count equals its diagonal product divided by (∑u)(∑v). Threshold and Ferrers graphs admit such perturbations for their spanning-tree formulas.

**How the definition helps.** A triangular matrix has determinant equal to the product of its diagonal entries. The matrix-tree theorem gives det(L + uvᵀ) = τ(∑u)(∑v), where τ is the weighted number of spanning trees (our own). The work moves to finding the vertex order and the two vectors. The paper shows this is possible exactly for special 2-threshold graphs.

**Paper or page:** [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1), [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1), [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1), [Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians](https://arxiv.org/abs/2103.13596v1). It says: “We present new short proofs of known spanning tree enumeration formulae for threshold and Ferrers graphs by showing that the Laplacian matrices of such graphs admit triangular rank-one perturbations.”

**Sources:**

- [Christian Go, Zhong Xuan Khwa, Xinyu Luo, Matthew T. Stamps, Spanning tree enumeration via triangular rank-one perturbations of graph Laplacians, arXiv:2103.13596 (2021)](https://arxiv.org/abs/2103.13596v1)
- [Christian Go, Zhong Xuan Khwa, Xinyu Luo and Matthew T. Stamps, Spanning tree enumeration and nearly triangular graph Laplacians, Discrete Applied Mathematics 320 (2022), 356–369](https://doi.org/10.1016/j.dam.2022.04.022)

### Level-one Lasserre equivalence means equal homomorphism counts from outerplanar graphs

**Remember:** Count maps from outerplanar graphs to compare the targets.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 90C22. arXiv math.CO, cs.CC. Level 4: research.

**Definition.** Graphs G and H are homomorphism indistinguishable over a class if every graph F in it has equally many homomorphisms to G and to H. A homomorphism is a map of vertices that sends edges to edges. An outerplanar graph has a plane drawing with every vertex on the outer face.

**Problem.** The Lasserre hierarchy is a sequence of semidefinite programs that test whether two graphs are isomorphic. Its first level, without nonnegativity constraints, fails to separate G and H exactly when they are homomorphism indistinguishable over outerplanar graphs.

**How the definition helps.** Homomorphism indistinguishability turns a semidefinite feasibility question into counts of maps from familiar graphs. In our own explanation, one outerplanar graph with different counts certifies that the first level separates the pair. The hard work is building the class of labelled graphs that matches level t. The paper then shows the underlying graphs at level one are exactly the outerplanar graphs.

**Paper or page:** [Lasserre Hierarchy for Graph Isomorphism and Homomorphism Indistinguishability](https://arxiv.org/abs/2302.10538v3), [Lasserre Hierarchy for Graph Isomorphism and Homomorphism Indistinguishability](https://arxiv.org/abs/2302.10538v3). It says: “The class of unlabelled graphs underlying an element of ℒ₁ coincides with the class of outerplanar graphs.”

**Sources:**

- [David E. Roberson, Tim Seppelt, Lasserre Hierarchy for Graph Isomorphism and Homomorphism Indistinguishability, arXiv:2302.10538 (2024). TheoretiCS, Volume 3 (September 2, 2024) theoretics:12321](https://arxiv.org/abs/2302.10538v3)

### Signing edges by direction turns pushable maps into signed graph homomorphisms

**Remember:** Reversing arcs across a cut is flipping signs across that cut.

*True by definition. Confidence: medium.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 05C20, 05C22. arXiv math.CO. Level 4: research.

**Definition.** In an oriented bipartite graph with chosen parts U,W, give U-to-W arcs positive signs and the reverse arcs negative signs. Pushing X reverses each arc crossing from X to its complement in either direction. Switching X negates exactly those edge signs.

**Problem.** Pair each of two oriented bipartite graphs with its associated signed graph. A vertex map between the oriented graphs is a pushable homomorphism exactly when it is a homomorphism of the signed graphs. A signed homomorphism preserves edges and signs after some switching.

**How the definition helps.** Our own argument identifies each source push with switching the same vertex set. An underlying graph homomorphism preserves or exchanges the target parts consistently on each connected source component. On a part-exchanging component, switching one entire bipartition class corrects the resulting global sign reversal. Thus the same vertex maps satisfy the two existence tests.

**Paper or page:** [On fundamental results for pushable homomorphisms of oriented graphs](https://arxiv.org/abs/2310.07227v2), [On fundamental results for pushable homomorphisms of oriented graphs](https://arxiv.org/abs/2310.07227v2). It says: “We build a one-to-one correspondence between the equivalence classes of oriented and signed bipartite graphs.”

**Sources:**

- [Tapas Das, Pavan P D, Sagnik Sen, S Taruni, On fundamental results for pushable homomorphisms of oriented graphs, arXiv:2310.07227 (2024)](https://arxiv.org/abs/2310.07227v2)

### Tree homomorphism counts capture colour refinement

**Remember:** Colour refinement counts maps from trees and nothing more.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 68R10. arXiv cs.DS, cs.DM. Level 4: research.

**Definition.** A homomorphism from a graph F to a graph G is a map on vertices that sends edges to edges. Lovász's idea is to describe a graph G by the list of numbers Hom(F,G), one number for each graph F. Two graphs are homomorphism-indistinguishable over a class of graphs when these numbers agree for every F in the class.

**Problem.** Colour refinement starts with one colour and repeatedly records each vertex’s old colour and the multiset of its neighbours’ colours. It fails to distinguish two finite graphs exactly when every finite tree has equal homomorphism counts into them.

**How the definition helps.** Homomorphism counts give a precise algebraic name for the information that colour refinement collects. The same theorem adds a third equivalent condition, fractional isomorphism, a linear-programming relaxation of isomorphism. The paper lifts this to graphs of treewidth k and the k-dimensional Weisfeiler–Leman algorithm. The work is in the proof of the equivalence, which uses Lovász's theory of homomorphism counts (our own summary).

**Paper or page:** [Lovász Meets Weisfeiler and Leman](https://arxiv.org/abs/1802.08876). It says: “We prove that two graphs G and H are indistinguishable by the color refinement algorithm if and only if, for all trees T, the number Hom(T,G) of homomorphisms from T to G equals the corresponding number Hom(T,H) for H.”

**Sources:**

- [Holger Dell, Martin Grohe, Gaurav Rattan, Lovász Meets Weisfeiler and Leman, arXiv:1802.08876 (2018)](https://arxiv.org/abs/1802.08876)

### Even or infinite cuts characterise cycle partitions of infinite graphs

**Remember:** In infinite graphs, test cuts, not degrees, and allow infinite cuts.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C63 (Infinite graphs), 05C20, 05C45. arXiv math.CO. Level 4: research.

**Definition.** A cut contains exactly the edges with one endpoint in a chosen vertex set and the other outside it. A cycle partition assigns every edge to exactly one finite cycle.

**Problem.** An undirected graph admits a cycle partition exactly when each finite cut has even size.

**How the definition helps.** Testing cuts excludes the two-way infinite path, whose degrees are even although a single edge separates its two tails (our own example). Each finite cycle crosses every cut an even number of times, so any finite cut in a cycle partition is even. Nash-Williams’ cycle decomposition theorem supplies the converse.

**Paper or page:** [On partitioning the edges of an infinite digraph into directed cycles](https://arxiv.org/abs/1704.08830). It says: “Nash-Williams proved that for an undirected graph G the set E(G) can be partitioned into cycles if and only if every cut has either even or infinite number of edges.”

**Sources:**

- [Attila Joó, On partitioning the edges of an infinite digraph into directed cycles, Advances in Combinatorics (2021)](https://doi.org/10.19086/aic.18702)

### Pair coverage equates hypergraph densities

**Remember:** Pair coverage keeps forbidden copies from collapsing when vertices are duplicated.

*Rules out counterexamples.* MSC 05C65 (Hypergraphs), 05C35. arXiv math.CO. Level 4: research.

**Definition.** A uniform hypergraph has edges of one size, r, and covers pairs when every vertex pair lies in an edge. Its Turán density is the limiting largest edge fraction in hypergraphs avoiding a copy of it. Give vertices nonnegative weights totaling one, and sum the products of weights on edges. The Lagrangian density is the supremum of this sum times r! over all such weights and avoiding hypergraphs.

**Problem.** For a forbidden uniform hypergraph that covers pairs, its Turán density equals its Lagrangian density.

**How the definition helps.** Pair coverage forces the vertices of any forbidden copy into distinct classes when vertices are duplicated, so blowing up creates no forbidden copy (our own). Approximating vertex weights by class proportions turns the weighted sum into a limiting edge density, and uniform weights give the reverse bound (our own). Without pair coverage the equality fails. For the two-edge path, avoiding graphs are matchings with edge density zero, but one edge with equal weights gives Lagrangian density one half (our own).

**Paper or page:** [Lagrangian densities of some 3-uniform hypergraphs](https://arxiv.org/abs/2209.13250v1). It says: “In particular, if F covers pairs, then π(F) = πλ(F).”

**Sources:** none listed. No primary source with a working link was found.

### Vertex-extendability reduces hypergraph stability to checking one vertex

**Remember:** Stability follows if one extra vertex always fits the extremal pattern.

*Makes the theorem clean to state or prove.* MSC 05C65 (Hypergraphs), 05C35. arXiv math.CO. Level 4: research.

**Definition.** Fix an r-uniform forbidden family with Turán density π and a target class C. Vertex-extendability requires some ε &gt; 0 and N such that every avoiding n-vertex H with n ≥ N and minimum degree ≥ (π/(r−1)! − ε)n<sup>(r−1)</sup> passes this test. For every vertex v, if H − v embeds in a member of C, then H embeds in a member of C.

**Problem.** Suppose the forbidden family has positive Turán density, the limiting edge density of hypergraphs that avoid it. Suppose blowing up vertices into copies keeps hypergraphs free of it, and the extremal class is closed under deleting vertices. Then symmetrized stability and vertex-extendability together give minimum-degree stability.

**How the definition helps.** Vertex-extendability tests whether deleting a single vertex can hide failure of the target structure (our own explanation). The paper’s stability theorem combines this local test with stability for symmetrized graphs to obtain minimum-degree stability.

**Paper or page:** [A unified approach to hypergraph stability](https://arxiv.org/abs/2104.00167v2), [A unified approach to hypergraph stability](https://arxiv.org/abs/2104.00167v2). It says: “We illustrate our approach by giving new short proofs of hypergraph stability results of Pikhurko, Hefetz-Keevash, Brandt-Irwin-Jiang, Bene Watts-Norin-Yepremyan and others.”

**Sources:**

- [Xizhi Liu, Dhruv Mubayi, Christian Reiher, A unified approach to hypergraph stability, arXiv:2104.00167 (2022). J. Combin. Theory Ser. B 158 (2023), 36-62](https://arxiv.org/abs/2104.00167v2)

### Subtracting labels from their caps turns packing problems into domination problems

**Remember:** Subtract every label from its cap.

*True by definition.* MSC 05C69 (Vertex subsets with special properties (dominating sets, independent sets, cliques, etc.)), 05C70. arXiv math.CO. Level 4: research.

**Definition.** On a finite graph, fix nonnegative integer caps u(v) and bounds k(v), and choose integer labels 0 ≤ f(v) ≤ u(v). Write f(S) for the sum on S and N\[v\] for v together with its neighbours. A packing requires f(N\[v\]) ≤ k(v) everywhere, while a domination function requires the reverse inequalities.

**Problem.** Set k′(v) = u(N\[v\]) − k(v). Then the largest total of a packing function for bounds k equals u(V) minus the smallest total of a domination function for bounds k′. Here u(V) is the sum of all caps.

**How the definition helps.** Our own bijection sends each label f(v) to u(v) − f(v), preserving its allowed range. Each neighbourhood sum becomes u(N\[v\]) − f(N\[v\]), reversing the inequality with the stated new bound. The map is its own inverse, and the two totals add to u(V), so their extrema correspond.

**Paper or page:** [A unified approach for domination and packing problems in graphs](https://arxiv.org/abs/2501.14789v1), [A unified approach for domination and packing problems in graphs](https://arxiv.org/abs/2501.14789v1). It says: “Interestingly, their associated optimization problems turn out to be equivalent, providing insight to explain the observed coincidences in computational complexity results for graph classes”

**Sources:**

- [E. Hinrichsen, G. Nasini, N. Vansteenkiste, A unified approach for domination and packing problems in graphs, arXiv:2501.14789 (2025)](https://arxiv.org/abs/2501.14789v1)

### Unimodular matchings make optimal matching on infinite random trees well posed

**Remember:** On an infinite tree, maximize the expected weight at the root edge.

*Makes the theorem clean to state or prove.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C80, 60J80. arXiv math.PR, math.CO. Level 4: research.

**Definition.** A matching marks edges with no common endpoints. Its marked edge-rooted tree law is unimodular if expected mass sent from the root equals expected mass received for every nonnegative invariant edge-to-edge transport. An optimal unimodular matching maximizes the expected root weight times its matching indicator among such laws with the given weighted tree marginal.

**Problem.** Take an edge-rooted unimodular Bienaymé–Galton–Watson tree whose offspring law has finite mean. Independently of the tree, give its edges independent identically distributed integrable weights with an atomless law. Then an optimal unimodular matching exists and its law is unique.

**How the definition helps.** Our own explanation uses expected matched weight at the root as a finite objective. Mass transport makes the marking consistent with the given root law. The paper’s optimal matching theorem supplies existence and uniqueness in law.

**Paper or page:** [Optimal Unimodular Matching](https://arxiv.org/abs/2407.03141v2), [Optimal Unimodular Matching](https://arxiv.org/abs/2407.03141v2). It says: “in law, there is a unique optimal unimodular matching for a given unimodular tree.”

**Sources:**

- [Nathanaël Enriquez, Mike Liu, Laurent Ménard, Vianney Perchet, Optimal Unimodular Matching, arXiv:2407.03141 (2025)](https://arxiv.org/abs/2407.03141v2)

### Bidimensionality removes apices and vortices from the Graph Minors Structure Theorem

**Remember:** Measure the bad part by bidimensionality, and apices and vortices disappear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C83 (Graph minors), 05C10. arXiv math.CO. Level 4: research.

**Definition.** An X-rooted k by k grid minor assigns each grid vertex a disjoint connected branch set meeting X. Adjacent grid vertices must have an edge between their branch sets. The bidimensionality of X is the largest such k, or zero if none exists.

**Problem.** Every graph excluding Kₖ as a minor has a tree decomposition with the following property. In each part, deleting a vertex set of bounded bidimensionality leaves a graph embeddable in a surface of bounded Euler genus. Both bounds depend only on k.

**How the definition helps.** One exceptional set per part replaces separate lists of apices and vortices. Our own reading uses rooted grids to measure how widely this set spreads. The paper’s version of the Graph Minors Structure Theorem supplies the decomposition and both bounds.

**Paper or page:** [The Graph Minors Structure Theorem through Bidimensionality](https://arxiv.org/abs/2306.01724). It says: “This notion allows for the following version of the Graph Minors Structure Theorem (GMST) that avoids the use of apices and vortices”

**Sources:**

- [Dimitrios M. Thilikos and Sebastian Wiederrecht, The Graph Minors Structure Theorem through Bidimensionality, arXiv:2306.01724 (2023)](https://arxiv.org/abs/2306.01724)

### Half-integral packing makes the Erdős–Pósa property hold for every graph

**Remember:** Allow each vertex to serve two models.

*Makes the theorem clean to state or prove.* MSC 05C83 (Graph minors), 05C35. arXiv math.CO. Level 4: research.

**Definition.** A model of a graph H in a host graph G assigns disjoint connected vertex sets to the vertices of H. Sets for adjacent vertices of H must be joined by an edge. In a half-integral packing of models, each vertex of G lies in at most two models. A cover is a set of vertices of G that meets every model of H.

**Problem.** For each finite graph H there is a function f such that the following holds for every positive integer k and finite graph G. Either G has a half-integral packing of k models of H, or at most f(k) vertices meet every model.

**How the definition helps.** Allowing two uses of each host vertex gives one packing-or-cover statement for every forbidden minor (our own explanation). Disjoint models have this property only for planar H. Liu’s half-integral Erdős–Pósa theorem supplies the unrestricted conclusion.

**Paper or page:** [Delineating Half-Integrality of the Erdős-Pósa Property for Minors: the Case of Surfaces](https://arxiv.org/abs/2406.16647v1). It says: “Recently, Liu confirmed a conjecture of Thomas and showed that every graph has the half-integral Erdős-Pósa property for minors.”

**Sources:**

- [Christophe Paul, Evangelos Protopapas, Dimitrios M. Thilikos, Sebastian Wiederrecht, Delineating Half-Integrality of the Erdős-Pósa Property for Minors: the Case of Surfaces, arXiv:2406.16647 (2024)](https://arxiv.org/abs/2406.16647v1)
- [Neil Robertson and Paul Seymour, Graph minors. V. Excluding a planar graph, Journal of Combinatorial Theory, Series B (1986)](https://doi.org/10.1016/0095-8956(86)90030-4)

### Requiring pairwise shared vertices makes strict brambles detect cycles exactly

**Remember:** With shared vertices required, order one everywhere means no cycles.

*Rules out counterexamples.* MSC 05C83 (Graph minors), 05C38. arXiv math.CO. Level 4: research.

**Definition.** A strict bramble is a nonempty family of connected subgraphs, each two of which share a vertex. Its order is the least number of vertices needed to meet every member. In an ordinary bramble, two subgraphs joined by an edge also count as touching.

**Problem.** A finite simple graph with at least one vertex is a forest exactly when every strict bramble has order one.

**How the definition helps.** The Helly property gives every pairwise-intersecting family of subtrees in a finite forest a common vertex. Ordinary brambles already fail this test on the two endpoints of an edge (our own example). Conversely, partition a cycle’s vertices into three nonempty consecutive blocks and take the three unions of two blocks (our own construction). They induce connected subgraphs meeting pairwise with no common vertex.

**Paper or page:** [On Strict Brambles](https://arxiv.org/abs/2201.05783v1). It says: “The strict bramble number of G can be seen as a way to extend the notion of acyclicity, departing from the fact that (non-empty) acyclic graphs are exactly the graphs where every strict bramble has order one.”

**Sources:**

- [Emmanouil Lardas, Evangelos Protopapas, Dimitrios M. Thilikos, Dimitris Zoros, On Strict Brambles, arXiv:2201.05783 (2022)](https://arxiv.org/abs/2201.05783v1)
- [Emmanouil Lardas, Evangelos Protopapas, Dimitrios M. Thilikos and Dimitris Zoros, On Strict Brambles, Graphs and Combinatorics 39 (2023), article 24](https://doi.org/10.1007/s00373-023-02618-y)

### Requiring nonempty families makes the cross-intersecting size bound nontrivial

**Remember:** An empty family forces no intersection at all.

*Rules out counterexamples.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 4: research.

**Definition.** Two families cross-intersect if each set from one meets each set from the other. In a nonempty pairwise cross-intersecting collection, every family has at least one member and each pair of families cross-intersects.

**Problem.** Take nonempty cross-intersecting families A and B of k-element subsets of an n-element set, with n ≥ 2k. Then \|A\| + \|B\| is at most the larger total of two constructions. Either both families are all sets through one point, or A is one set F and B is all k-sets meeting F.

**How the definition helps.** Nonemptiness excludes the full family paired with the empty family. In our own example with n = 5 and k = 2, this excluded pair totals ten, while both stated constructions total eight. The Hilton–Milner cross-intersection bound for two nonempty uniform families supplies the upper bound.

**Paper or page:** [Non-empty pairwise cross-intersecting families](https://arxiv.org/abs/2306.03473v2). It says: “If 𝒜₁, 𝒜₂, …, 𝒜ₜ ⊂ \[n\] choose k are non-empty pairwise cross-intersecting families”

**Sources:**

- [Yang Huang, Yuejian Peng, Non-empty pairwise cross-intersecting families, arXiv:2306.03473 (2024)](https://arxiv.org/abs/2306.03473v2)

### Double posets make the antipode of quasisymmetric functions reverse one order

**Remember:** The antipode reverses the first order and gives sign −1 for odd size.

*Makes the theorem clean to state or prove.* MSC 05E05 (Symmetric functions and generalizations), 06A11, 16T05. arXiv math.CO. Level 4: research.

**Definition.** A double poset is a finite set E with two strict partial orders. Sum over maps φ to positive integers weakly increasing along the first order and strictly increasing on pairs reversed by the second order. Each map contributes the product of x indexed by φ(e) over all e ∈ E.

**Problem.** If the second order is total, the antipode sends the generating function to (−1)<sup>\|E\|</sup> times the generating function with the first order reversed.

**How the definition helps.** Reversing one order gives a second generating function by exactly the same recipe (our own explanation). The Malvenuto–Reutenauer antipode formula gives the sign and identifies this function with the antipode after multiplication by that sign.

**Paper or page:** [Double posets and the antipode of QSym](https://arxiv.org/abs/1509.08355v3), [Double posets and the antipode of QSym](https://arxiv.org/abs/1509.08355v3). It says: “We prove a formula for the antipode of this function that holds under certain conditions (which are satisfied when the second order of the double poset is total, but also in some other cases)”

**Sources:**

- [Darij Grinberg, Double posets and the antipode of QSym, arXiv:1509.08355 (2017). The Electronic Journal of Combinatorics 24(2) (2017), \#P2.22 (published with minor changes to Section 2 and without ancillary file)](https://arxiv.org/abs/1509.08355v3)

### Orbit counts constrain cyclic sieving

**Remember:** Fixed counts must grow along divisibility, not merely stay nonnegative.

*Rules out counterexamples.* MSC 05E18 (Group actions on combinatorial structures), 05A15. arXiv math.CO. Level 4: research.

**Definition.** Fix a generator g of a cyclic group acting on a finite set X and a primitive root ω of the group’s order m. A polynomial f exhibits cyclic sieving if f(ωʲ) counts the fixed points of gʲ for every integer j.

**Problem.** For each divisor d of m, sum μ(d/j)f(ωʲ) over positive divisors j of d, using the Möbius function μ. Cyclic sieving requires every such sum to be nonnegative. Nonnegative integer evaluations at roots of unity alone do not suffice.

**How the definition helps.** Our own argument groups fixed points of gʲ by orbit sizes dividing j. Möbius inversion gives the displayed sum as the number of points in orbits of size d. For m = 4, the polynomial 4 + 2q + 2q³ takes nonnegative integer values at all fourth roots. Its values at i and −1 drop from four to zero, although every point fixed by g remains fixed by g².

**Paper or page:** [Skew Schur polynomials and cyclic sieving phenomenon](https://arxiv.org/abs/2112.12394v3). It says: “Then there exists an action of a cyclic group C of order m on X such that (X, C, f(q)) exhibits the cyclic sieving phenomenon if and only if for each d ∣ m, ∑\[j ∣ d\] μ(d/j)f(ωₘʲ) ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### A useless edge makes both path complexes cones, hence contractible

**Remember:** An edge on no path can join every face.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 05C38. arXiv math.CO, math.AT. Level 4: research.

**Definition.** Fix distinct vertices s,t in a digraph and call an edge useless if no directed s-to-t path uses it. A path-free face contains no such path. A path-missing face has a complement containing at least one such path.

**Problem.** If the graph has a useless edge e and some directed path from s to t, then both complexes are cones with apex e. So both complexes are contractible.

**How the definition helps.** Adding a useless edge creates no path inside a path-free face (our own explanation). It also removes no path from the complement of a path-missing face. Thus adjoining the edge preserves both face conditions, giving a cone in each case.

**Paper or page:** [The path-missing and path-free complexes of a directed graph](https://arxiv.org/abs/2102.07894v3). It says: “Assume that G has a useless edge e. Then, both 𝒫ℱ(G) and 𝒫ℳ(G) are cones with apex e.”

**Sources:**

- [Darij Grinberg, Lukas Katthän, Joel Brewster Lewis, The path-missing and path-free complexes of a directed graph, arXiv:2102.07894 (2025)](https://arxiv.org/abs/2102.07894v3)

### Effective resistance as an orthogonal projection makes Foster's theorem a trace identity

**Remember:** The trace of a projection counts the directions it keeps.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 05C50, 55U10. arXiv math.CO, math.AT. Level 4: research.

**Definition.** On real p-chains of a positively weighted finite simplicial complex, project orthogonally onto the complement of the boundary map’s kernel using the weighted inner product. Write P for this projection in the oriented simplex basis. The projection formula gives the effective resistance of σ as P(σ,σ)/w(σ).

**Problem.** For a finite weighted simplicial complex and each degree p, the sum of w(σ)·r(σ) over all p-simplices σ equals the rank of the boundary map. Here w(σ) is the weight and r(σ) the effective resistance of σ. For a graph and p = 1 this is Foster's theorem: the sum equals the number of vertices minus the number of connected components.

**How the definition helps.** The projection formula identifies the weighted resistance sum with the trace of P (our own explanation). A projection’s trace equals its rank, here the codimension of the boundary kernel. Rank-nullity identifies this with the boundary rank. The paper’s resistance operator theorem supplies the projection formula.

**Paper or page:** [Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties](https://arxiv.org/abs/2511.10749v1), [Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties](https://arxiv.org/abs/2511.10749v1). It says: “The p-th effective resistance operator 𝒯ₚ = ∂ₚ∗(∂ₚ∗)⁺ on chains is the orthogonal projection”

**Sources:**

- [Inés García-Redondo, Claudia Landi, Sarah Percival, Anda Skeja, Bei Wang, Ling Zhou, Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties, arXiv:2511.10749 (2025)](https://arxiv.org/abs/2511.10749v1)
