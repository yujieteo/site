### Counting fixed points as cycles gives Cayley's distance formula

**Remember:** Count fixed points as cycles, and distance is n minus the cycles.

*Rules out counterexamples. Confidence: medium.* MSC 05A05 (Permutations, words, matrices), 20B30. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The Cayley distance between two permutations of n elements is the least number of swaps of two elements that turns one into the other. A cycle of a permutation is one of its orbits, written as a loop of elements. A fixed point counts as a cycle of length 1.

**Problem.** The Cayley distance between π and σ equals n minus the number of cycles of π∘σ⁻¹.

**How the definition helps.** Counting fixed points as cycles of length 1 makes the formula exact, also for equal permutations. The theorem says so: its set of cycles includes 1-cycles. If one ignores fixed points, the identity permutation has no cycles, and the formula gives n, not 0 (our own example). Each swap changes the number of cycles by exactly one, and this gives the formula (our own summary).

**Paper or page:** [Improving the Gilbert-Varshamov bound for permutation Codes in the Cayley metric and Kendall $τ$-Metric](https://arxiv.org/abs/2404.15126). It says: “The Cayley distance distance dC(π,σ) between π and σ equals n minus the number of permutation cycles in π∘σ⁻¹”

**Sources:**

- [The Nguyen, Improving the Gilbert–Varshamov bound for permutation codes in the Cayley metric and Kendall τ-metric, arXiv:2404.15126 (2024)](https://arxiv.org/abs/2404.15126)

### Cycle lengths give permutation sign

**Remember:** A cycle contributes a minus sign exactly when its length is even.

*True by definition.* MSC 05A05 (Permutations, words, matrices). arXiv math.CO. Level 1: early undergraduate.

**Definition.** For a permutation of a finite set, count the cycles of even length in its disjoint cycle decomposition. Define its sign as +1 when this count is even and −1 when it is odd. The usual swap definition counts swaps in an expression for the permutation.

**Problem.** A permutation has sign −1 exactly when its cycle decomposition has an odd number of even-length cycles.

**How the definition helps.** The cycle definition makes the sign readable directly from the cycle lengths. To recover the swap definition, observe that a swap merges two cycles or splits one cycle into two. The combined length stays the same, so the number of even cycles changes by one. Each swap therefore reverses the sign.

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

### Binomial coefficients outside Pascal's triangle are zero

**Remember:** There are no ways to choose −1 or n + 1 things from n things.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Let n be a non-negative integer, and let k be an integer with k &lt; 0 or k &gt; n. Then C(n, k) = 0 by definition. This matches the number of k-element subsets of an n-element set, which is zero.

**Problem.** Pascal's rule C(n, k) = C(n − 1, k − 1) + C(n − 1, k) and many other identities should hold with no separate edge cases.

**How the definition helps.** The zero values make the identities hold at the edges of the triangle, so no special cases are needed. With this convention, Pascal's rule holds for every n ≥ 1 and every integer k, including k = 0 and k = n. The rule then builds the whole triangle from C(0, 0) = 1. The article notes that a different extension, through the gamma function, gives non-zero values for k &lt; 0. It also notes that this extension makes most binomial identities fail, even Pascal's identity at the origin.

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “this causes most binomial coefficient identities to fail, and thus is not widely used by the majority of definitions”

**Sources:** none listed. No primary source with a working link was found.

### Binomial coefficients with any top number give Newton's series

**Remember:** Keep the falling product on top and the top number may be anything.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 30B10. arXiv math.CO, math.CA. Level 1: early undergraduate.

**Definition.** For any number α and any non-negative integer k, C(α, k) = α(α − 1)⋯(α − k + 1)/k!. The top of the fraction is a product of k factors, each 1 less than the one before. This multiplicative formula makes sense for negative, fractional or complex α.

**Problem.** Newton's binomial series says that (1 + X) to the power α equals Σₖ C(α, k) Xᵏ when \|X\| &lt; 1.

**How the definition helps.** With the multiplicative definition, one formula covers both the finite binomial theorem and the infinite series. When α is a non-negative integer n, every term with k &gt; n contains the factor n − n = 0. So the series stops, and it gives the ordinary binomial theorem. For other α, for example α = −1, the series is truly infinite. Convergence for \|X\| &lt; 1 must still be proved separately (our own remark).

**Wikipedia:** [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient). It says: “If α is a nonnegative integer n, then all terms with k &gt; n are zero, and the infinite series becomes a finite sum, thereby recovering the binomial formula.”

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

**How the definition helps.** The subset definition makes Pascal’s rule a split into two groups. Choose one element X. Subsets with X come from choosing k − 1 of the other n − 1 elements. Subsets without X come from choosing k of those elements. The factorial definition instead gives a common-denominator calculation. The work moves into showing that the two definitions agree by counting all orders of each chosen subset (our own comparison).

**Wikipedia:** [Pascal's rule](https://en.wikipedia.org/wiki/Pascal%27s_rule). It says: “Every subset of k elements either contains X or not.”

**Sources:** none listed. No primary source with a working link was found.

### Counting subsets makes the binomial theorem a matter of choosing factors

**Remember:** Choose x or y from each factor, and count the choices with C(n, k).

*True by definition.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Define the binomial coefficient C(n, k) as the number of k-element subsets of an n-element set. The formula C(n, k) = n!/(k!(n − k)!) can serve as another definition.

**Problem.** For every natural number n, (x + y)ⁿ is the sum over k from 0 to n of C(n, k) xⁿ⁻ᵏyᵏ. This holds in every commutative ring.

**How the definition helps.** The subset definition gives each coefficient by counting which factors supply y. Expanding n factors of x + y gives one term for each choice of x or y in each factor. The terms with k choices of y all have the form xⁿ⁻ᵏyᵏ because multiplication commutes. The set of factors supplying y has k elements, so there are C(n, k) choices. With the factorial definition, one must also count those subsets by counting ordered choices and dividing by k! (our own explanation). The proof still uses the distributive law to expand the product.

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

**Problem.** Sum a sequence a from q up to n, then sum the results again, m times in all. The result is the single sum of C(n − i + m − 1, m − 1)·aᵢ over i from q to n. The paper uses this to simplify repeated harmonic sums.

**How the definition helps.** The definition makes the weights binomial coefficients by construction. In the repeated sum, the weight of aᵢ counts the chains of indices i ≤ N₂ ≤ … ≤ Nₘ ≤ n. That count is a repeated sum of ones with m − 1 levels, in our own argument. So by the definition it is C(n − i + m − 1, m − 1). The paper also checks the definition against the usual binomial coefficients with many sum identities.

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

### Setting 0! = 1 keeps the binomial formulas exact

**Remember:** There is exactly one way to arrange nothing.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The factorial n! is the product 1·2·…·n. For n = 0 this is the empty product (a product with no factors), which equals 1. So 0! = 1.

**Problem.** Some formulas should hold for all allowed values, including k = 0, k = n and n = 0. Examples are the binomial coefficient C(n,k) = n!/(k!(n−k)!), the recurrence n! = n·(n−1)! and the series eˣ = Σ xⁿ/n!.

**How the definition helps.** With 0! = 1, these formulas need no special cases at the edges. The number of ways to choose all n elements of an n-element set is n!/(n!·0!) = 1, as it must be. The recurrence n! = n·(n−1)! holds at n = 1, so a recursion needs only the base case 0. The exponential series has 0! in its first term, x⁰/0!. The gamma function extends the factorial, with Γ(n + 1) = n!. It gives Γ(1) = 1 with no separate choice, so it agrees with 0! = 1.

**Wikipedia:** [Factorial](https://en.wikipedia.org/wiki/Factorial), [Empty product](https://en.wikipedia.org/wiki/Empty_product). It says: “This convention makes many identities in combinatorics valid for all valid choices of their parameters.”

**Sources:** none listed. No primary source with a working link was found.

### Setting 0⁰ = 1 makes the binomial theorem hold at zero

**Remember:** x⁰ is the empty product, so it is 1 for every x.

*Makes the theorem clean to state or prove.* MSC 05A10 (Factorials, binomial coefficients, combinatorial functions), 13B25. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** In algebra and combinatorics, 0⁰ is defined to be 1. Then the monomial x⁰ is the constant 1 for every value of x, including x = 0.

**Problem.** Make the binomial theorem (1+x)ⁿ = Σ C(n,k)xᵏ hold at x = 0. The same applies to identities such as 1/(1−x) = Σ xⁿ and eˣ = Σ xⁿ/n!.

**How the definition helps.** With 0⁰ = 1, polynomial and power series formulas hold at x = 0 with no special case. A polynomial is written a₀x⁰ + … + aₙxⁿ. When you evaluate it at 0, you must get a₀, and this needs 0⁰ = 1. Without the convention, every power series identity needs a separate case at x = 0. Knuth argued strongly for this convention. Limits in analysis are still different: the two-variable function xʸ has no limit at (0,0), so 0⁰ stays an indeterminate form for limits.

**Wikipedia:** [Zero to the power of zero](https://en.wikipedia.org/wiki/Zero_to_the_power_of_zero). It says: “Defining 0⁰ = 1 is necessary for many polynomial identities. For example, the binomial theorem (1+x)ⁿ = ∑ₖ₌₀ⁿ C(n,k) xᵏ holds for x = 0 only if 0⁰ = 1.”

**Sources:**

- [D. E. Knuth, Two Notes on Notation, American Mathematical Monthly 99 (1992) 403–422](https://doi.org/10.1080/00029890.1992.11995869)

### Balanced parentheses give the Catalan recurrence

**Remember:** Split at the closing parenthesis that matches the very first opening.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 1: early undergraduate.

**Definition.** Let C(n) count balanced strings of n opening and n closing parentheses. In every prefix, the number of openings must be at least the number of closings. Count the empty string once. The binomial formula instead counts n-element subsets of a 2n-element set and divides by n+1.

**Problem.** For n ≥ 1, C(n) equals the sum of C(i)C(n−1−i) over the integers i from 0 to n−1.

**How the definition helps.** Balanced strings split uniquely at the closing parenthesis that matches the first opening (our own). If the enclosed string has i pairs, the string after it has n−1−i pairs (our own). Any two balanced strings of those sizes give one such string (our own). Agreement with the binomial formula requires another argument, such as reflecting the first unbalanced prefix (our own).

**nLab:** [Catalan number](https://ncatlab.org/nlab/show/Catalan+number). It says: “strings consisting of n well-balanced pairs of parentheses (also known as "Dyck words")”

**Sources:** none listed. No primary source with a working link was found.

### Bars make allocation counts binomial

**Remember:** Choose the bars and the stars fill the remaining positions.

*True by definition.* MSC 05A15 (Exact enumeration problems, generating functions), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** Describe an ordered allocation of n identical objects to k labeled bins as a row of n stars and k − 1 bars. The bars mark bin boundaries. Allow empty runs of stars to represent empty bins.

**Problem.** Take n ≥ 0 identical objects and k ≥ 1 labeled bins. The allocation count equals the number of ways to choose k − 1 slots among n + k − 1.

**How the definition helps.** The string definition makes every allocation a choice of bar positions (our own). The work lies in checking the correspondence in both directions, including empty runs at the ends and between two bars (our own).

**Wikipedia:** [Stars and bars (combinatorics)](https://en.wikipedia.org/wiki/Stars_and_bars_%28combinatorics%29). It says: “In terms of configurations involving objects and bins, bins are now allowed to be empty.”

**Sources:** none listed. No primary source with a working link was found.

### With (−1)!! = 1, double factorial formulas start at n = 0

**Remember:** There is exactly one way to pair up the empty set.

*True by definition. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05C70, 60E05. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The double factorial (2n−1)!! is the product (2n−1)(2n−3)⋯3·1 of the odd numbers up to 2n−1. An equivalent formula is (2n−1)!! = (2n)! / (2ⁿ n!). For n = 0, this formula gives (−1)!! = 1.

**Problem.** Three statements should hold for all n ≥ 0 with no exception. (2n−1)!! counts the perfect matchings (fixed-point-free involutions) of a set with 2n elements, and it is the 2n-th moment of the standard Gaussian. Also, the sequence with these values at even places and 0 at odd places has exponential generating function exp(x²/2).

**How the definition helps.** The factorial formula gives (−1)!! = 1, so the n = 0 case of each statement is true with no exception. The empty set has exactly one perfect matching, the empty one. The 0-th Gaussian moment is the total mass, which is 1. The constant term of exp(x²/2) is 1. This point is our own reading. The nLab states the definition and the uniform statements, and the agreement at n = 0 follows at once from them.

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

**How the definition helps.** Positive parts make the number of compositions finite, so it can be counted. A part equal to zero can be inserted anywhere without changing the sum, so weak compositions of length not fixed are infinite in number. With positive parts, write n ones in a row. A composition is a choice of plus sign or comma in each of the n − 1 gaps. Weak compositions become finite in number again when the number of parts is fixed. Then adding one to each part turns them into compositions of n + k (our own remark).

**Wikipedia:** [Composition (combinatorics)](https://en.wikipedia.org/wiki/Composition_%28combinatorics%29). It says: “As a consequence every positive integer admits infinitely many weak compositions (if their length is not bounded).”

**Sources:**

- [S. Heubach and T. Mansour, Combinatorics of Compositions and Words, CRC Press (2009)](https://doi.org/10.1201/9781420072686)

### Reflecting partition diagrams swaps parts and largest part

**Remember:** Reflect the diagram to turn rows into columns.

*True by definition. Confidence: medium.* MSC 05A17 (Combinatorial aspects of partitions of integers), 05A19. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A partition of n writes n as a sum of positive integers without regard to order. Draw its parts as left-aligned rows of dots, from longest to shortest. Define the conjugate by reflecting the diagram across its main diagonal. In a list of parts, the conjugate’s jth part counts the original parts of size at least j.

**Problem.** For positive integers n and k, as many partitions of n have exactly k parts as have largest part k.

**How the definition helps.** Reflection makes the equality immediate because it swaps the row count with the column count. The row count is the number of parts, and the column count is the largest part. In the list definition, one instead checks that applying the counting formula twice gives the original list (our own). The work in the diagram proof is to check that the reflection still has rows of decreasing lengths and the same number of dots.

**Wikipedia:** [Integer partition](https://en.wikipedia.org/wiki/Integer_partition). It says: “By taking conjugates, the number pₖ(n) of partitions of n into exactly k parts is equal to the number of partitions of n in which the largest part has size k.”

**Sources:** none listed. No primary source with a working link was found.

### Blocks of a partition are nonempty, so partitions match equivalence relations

**Remember:** No empty blocks, so each equivalence relation gives exactly one partition.

*Rules out counterexamples.* MSC 05A18 (Partitions of sets), 03E20. arXiv math.CO, math.LO. Level 1: early undergraduate.

**Definition.** A partition of a set X is a set of nonempty, pairwise disjoint subsets of X whose union is X. The subsets are called blocks. An equivalence relation is a reflexive, symmetric and transitive relation.

**Problem.** Partitions of X correspond one-to-one to equivalence relations on X. The blocks are the equivalence classes.

**How the definition helps.** Every equivalence class contains an element, so classes are never empty, and the definition of a partition matches this. If empty blocks were allowed, the partitions {X} and {X, ∅} of the same set would give the same equivalence relation (our own example). Then the correspondence would fail to be one-to-one. The condition also makes the Stirling numbers of the second kind and the Bell numbers count equivalence relations. The empty set then has exactly one partition, the empty family.

**Wikipedia:** [Partition of a set](https://en.wikipedia.org/wiki/Partition_of_a_set). It says: “A partition of a set X is a set of non-empty subsets of X such that every element x in X is in exactly one of these subsets”

**Sources:**

- [P. R. Halmos, Naive Set Theory, Undergraduate Texts in Mathematics, Springer (1974)](https://doi.org/10.1007/978-1-4757-1645-0)

### One partition of the empty set makes B₀ = 1

**Remember:** The empty set has one partition, the empty one, so B₀ = 1.

*Rules out counterexamples.* MSC 05A18 (Partitions of sets), 05A15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** The Bell number Bₙ counts the partitions of a set with n elements. The empty set has exactly one partition, the family with no blocks, so B₀ = 1.

**Problem.** The Bell numbers satisfy Bₙ₊₁ = the sum over k from 0 to n of (n choose k)·Bₖ. Their exponential generating function is exp(eˣ − 1).

**How the definition helps.** Counting the empty partition lets the recurrence and the generating function hold from n = 0 with no special case. The recurrence chooses the block of the new element, and the rest of the set is partitioned in Bₖ ways. When the new block takes everything, the rest is empty and must count once. For n = 0 the recurrence reads B₁ = B₀, so it needs B₀ = 1 (our own check). The constant term of exp(eˣ − 1) is also 1. This is the same empty-product reason that makes 0! = 1 (our own remark).

**Wikipedia:** [Bell number](https://en.wikipedia.org/wiki/Bell_number), [Partition of a set](https://en.wikipedia.org/wiki/Partition_of_a_set). It says: “B₀ is 1 because there is exactly one partition of the empty set. This partition is itself the empty set; it can be interpreted as a family of subsets of the empty set, consisting of zero subsets.”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 1, second edition, Cambridge University Press (2011)](https://doi.org/10.1017/CBO9781139058520)

### A fixed rank splits a subset count

**Remember:** Choose the element of rank m + 1, then fill both sides.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 97K20. arXiv math.CO, math.HO. Level 1: early undergraduate.

**Definition.** Define a binomial coefficient as the number of subsets of a given size, rather than as a quotient of factorials.

**Problem.** Let l, m and n be nonnegative integers with l + m ≤ n. How many subsets of {0, …, n} have l + m + 1 elements?

**How the definition helps.** Counting subsets lets us sort them by their element of rank m + 1 in increasing order. In our own proof, call that element k. Choose m smaller elements from k possibilities and l larger elements from n − k possibilities. Summing (k choose m) times (n − k choose l) from k = m to n − l counts every subset once. The factorial formula follows by counting ordered selections and dividing by their possible orders.

**Paper or page:** [Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388). It says: “Let l, m, n ∈ ℕ be natural numbers such that l + m ≤ n. Then we have the following identity: \\sum <sub>k=m</sub><sup>n-l</sup>\\binom km\\binom {n-k}l=\\binom {n+1}{l+m+1}”

**Sources:**

- [Regula Krapf, Arrow-chasing in Pascal's triangle -- Visual proofs for summation formulas involving binomial coefficients](https://arxiv.org/abs/2508.16388)

### Indicators give inclusion and exclusion

**Remember:** Multiply the indicators of absence and subtract the result from one.

*True by definition.* MSC 05A19 (Combinatorial identities, bijective combinatorics). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The indicator of a set assigns 1 to elements in the set and 0 to other elements. It replaces each membership condition by a number.

**Problem.** The size of a finite union of finite sets is an alternating sum of intersection sizes. Include each nonempty selection of sets once. Add its intersection size for an odd number of selected sets and subtract it for an even number.

**How the definition helps.** Indicators turn intersections into products, so the distributive law supplies every term of inclusion and exclusion. In our own presentation, subtract each indicator from 1 and multiply the resulting functions. The product equals 1 exactly outside the union. Subtract the product from 1, expand, and sum over the union. This replaces counting how often each element appears with ordinary multiplication.

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

### Counting labelled trees gives Cayley's formula nⁿ⁻²

**Remember:** Name the vertices and the count becomes nⁿ⁻².

*Makes the theorem clean to state or prove.* MSC 05C05 (Trees), 05C30. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A labelled tree on n vertices is a tree whose vertex set is {1, …, n}. Two labelled trees are the same only if they have the same edges. Unlabelled trees are counted only up to isomorphism.

**Problem.** Count the trees on n vertices.

**How the definition helps.** Labels remove the symmetries that make the count up to isomorphism hard. As labelled objects, there are exactly nⁿ⁻² trees on n vertices, and this formula has short proofs. Up to isomorphism, no closed formula is known. There are generating-function methods, and there is Otter's asymptotic estimate t(n) ∼ Cαⁿn⁻⁵ᐟ². Here t(n) is the number of trees on n vertices up to isomorphism, and C and α are constants.

**Wikipedia:** [Cayley's formula](https://en.wikipedia.org/wiki/Cayley%27s_formula), [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29). It says: “No closed formula for the number t(n) of trees with n vertices up to graph isomorphism is known.”

**Sources:**

- [R. Otter, The number of trees, Annals of Mathematics 49 (1948) 583–599](https://doi.org/10.2307/1969046)

### Minimal connectivity gives a spanning tree

**Remember:** Delete edges while keeping the graph connected until none can go.

*True by definition. Confidence: medium.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A tree is a connected graph that disconnects whenever one edge is removed. Another definition requires a connected graph with no cycles.

**Problem.** Every finite connected graph has a spanning tree, which uses all its vertices and only edges of the graph.

**How the definition helps.** The minimal-connectivity definition gives a tree by taking a connected subgraph with all vertices and the fewest edges (our own). Removing any edge would violate that choice, so it meets the definition. Starting with the no-cycle definition, one must also show that an edge on a cycle can be removed without losing connectivity. That fact and its converse are the work behind the equivalence of the definitions (our own).

**Wikipedia:** [Tree (graph theory)](https://en.wikipedia.org/wiki/Tree_%28graph_theory%29). It says: “G is connected, but would become disconnected if any single edge is removed from G.”

**Sources:** none listed. No primary source with a working link was found.

### The graph with no vertices is not a tree

**Remember:** A tree has one more vertex than edges; the empty graph has zero of each.

*Rules out counterexamples.* MSC 05C05 (Trees). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A tree is a connected graph with no cycles and at least one vertex. This excludes the graph of order zero, which has no vertices. That graph may be called a forest with zero trees.

**Problem.** A tree with n vertices has exactly n − 1 edges. The equivalent descriptions of trees should also hold without exceptions.

**How the definition helps.** The rule 'at least one vertex' keeps the edge count and the equivalent descriptions true. The graph of order zero is vacuously connected (it has no two vertices to join) and has no cycles. Without the extra condition it would be a tree with 0 vertices and 0 edges, and that breaks the rule 'edges = vertices − 1'. The Null graph article notes the general trade-off. If you include the empty graph, formulas such as counts of components need exceptions, so many authors require at least one vertex. Harary and Read discussed this in 'Is the null-graph a pointless concept?'.

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

**Definition.** In a multigraph (a graph that may have loops and repeated edges), the degree of a vertex is the number of edge ends at that vertex. A loop has both ends at the same vertex, so it adds 2 to the degree.

**Problem.** The degree sum formula says that the sum of all degrees equals twice the number of edges. So the number of vertices of odd degree is even.

**How the definition helps.** Counting edge ends makes the formula true by the definition of degree. Euler's double-counting proof counts pairs of a vertex and an edge end at that vertex. Each edge has exactly two ends. Our own example: if a loop counted only 1, a single vertex with one loop would have degree sum 1. It has one edge, so the formula would give 2, and it would fail.

**Wikipedia:** [Degree (graph theory)](https://en.wikipedia.org/wiki/Degree_%28graph_theory%29), [Handshaking lemma](https://en.wikipedia.org/wiki/Handshaking_lemma). It says: “For graphs that are allowed to contain loops connecting a vertex to itself, a loop should be counted as contributing two units to the degree of its endpoint for the purposes of the handshaking lemma.”

**Sources:** none listed. No primary source with a working link was found.

### Euler's formula for plane graphs needs connectedness, or a count of components

**Remember:** Connected plane graphs, outer face included, always give V − E + F = 2.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A plane graph is a graph drawn in the plane without crossings. Its faces are the connected regions left when the drawing is removed, and the unbounded outer region counts as a face.

**Problem.** A connected plane graph has V − E + F = 2. A plane graph with C connected components has V − E + F = 1 + C.

**How the definition helps.** Connectedness rules out the graphs for which V − E + F = 2 fails. Two separate triangles have V − E + F = 6 − 6 + 3 = 3 (our own example). The outer face is shared. The base case of the proof is a tree, with E = V − 1 and one face, the outer one. Counting the outer face makes the plane behave like the sphere, so the value 2 matches Euler's formula for convex polyhedra. Without the outer face the formula would read 1, which is true but hides the link to the sphere (our own remark). For a disconnected graph, the same induction gives V − E + F = 1 + C.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic), [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “The Euler characteristic can be defined for connected plane graphs by the same V − E + F formula as for polyhedral surfaces, where F is the number of faces in the graph, including the exterior face.”

**Sources:** none listed. No primary source with a working link was found.

### Letting dual graphs have loops and parallel edges makes duality exact

**Remember:** One dual edge per edge, even if it makes a loop or a parallel pair.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory). arXiv math.CO. Level 1: early undergraduate.

**Definition.** A plane graph is a graph drawn in the plane with no crossing edges. Its dual graph has one vertex for each face. It has one edge for each edge of the original graph, joining the faces on the two sides of that edge. Loops and multiple edges are allowed.

**Problem.** Duality should be symmetric: the dual of the dual of a connected plane graph is the original graph. Properties should also translate one for one, for example bridges into loops. (A bridge is an edge whose removal disconnects the graph.)

**How the definition helps.** Allowing loops and parallel edges gives each edge exactly one dual edge, so nothing is lost. The dual of a simple graph is often not simple. For example, the dual of an n-cycle has two vertices joined by n parallel edges. Our own remark: if duals had to be simple, parallel edges would merge, the edge counts would not match, and taking the dual twice would not return the original graph. With multigraphs, each edge has exactly one dual edge. The bridges of G then correspond exactly to the loops of the dual, which is called cut–cycle duality.

**Wikipedia:** [Dual graph](https://en.wikipedia.org/wiki/Dual_graph). It says: “The dual of a simple graph need not be simple: it may have self-loops (an edge with both endpoints at the same vertex) or multiple edges connecting the same two vertices”

**Sources:**

- [Hassler Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)

### Simple planar graphs have at most 3v − 6 edges

**Remember:** No loops or double edges, so every face needs three sides.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C35. arXiv math.CO. Level 1: early undergraduate.

**Definition.** A simple graph has no loops and no parallel edges. A face of a planar drawing is a region of the plane cut out by the edges.

**Problem.** A simple planar graph with v ≥ 3 vertices has at most 3v − 6 edges. So K₅ is not planar, and every planar graph has a vertex of degree at most 5.

**How the definition helps.** Simplicity guarantees that each face has at least three sides, which with Euler's formula bounds the edges. In a multigraph two parallel edges can bound a face of two sides, and a loop a face of one side. Then the bound fails (our own example). Two vertices joined by 100 parallel edges are planar, but 3·2 − 6 = 0. The condition v ≥ 3 excludes the single edge for the same reason. The bound shows with little work that K₅ is not planar and that planar graphs have average degree below 6. It does not show that K₃,₃ is non-planar; that needs the bound 2v − 4 for graphs with no triangles (our own remark).

**Wikipedia:** [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “In a finite, connected, simple, planar graph, any face (except possibly the outer one) is bounded by at least three edges and every edge touches at most two faces, so 3f ≤ 2e”

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

**Problem.** Every finite loopless graph has a proper colouring, so its chromatic number is defined. Theorems such as Brooks' theorem and the four colour theorem are then stated for loopless graphs.

**How the definition helps.** A loop asks a vertex to differ in colour from itself, so no colouring exists, and the convention removes this. Once loops are gone, giving each vertex its own colour always works (our own remark). So the chromatic number is at most the number of vertices. Parallel edges, in contrast, make no difference to vertex colouring (our own remark). In the homomorphism view, a graph with a loop has no map to any complete graph Kₖ, since Kₖ has no loops (our own remark).

**Wikipedia:** [Graph coloring](https://en.wikipedia.org/wiki/Graph_coloring), [Graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism). It says: “Since a vertex with a loop (i.e. a connection directly back to itself) could never be properly colored, it is understood that graphs in this context are loopless.”

**Sources:**

- [T. R. Jensen and B. Toft, Graph Coloring Problems, Wiley (1994)](https://doi.org/10.1002/9781118032497)

### Reachability orders acyclic graphs

**Remember:** Order all prerequisites, not just neighboring ones.

*Rules out counterexamples.* MSC 05C20 (Directed graphs (digraphs), tournaments). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In a finite directed graph, say one vertex precedes another if a nonempty directed walk leads from the first to the second. Use this relation on graphs with no directed cycles.

**Problem.** The vertices can be listed with every edge pointing forward exactly when the graph has no directed cycle.

**How the definition helps.** Without a directed cycle, reachability gives consistent instructions about which vertices must come first. In our own proof, some remaining vertex must have no incoming edge from another remaining vertex. Otherwise, following incoming edges backward would eventually repeat a vertex and give a cycle. Repeatedly place such a vertex next and remove it. Conversely, a forward ordering cannot follow a cycle back to its starting vertex.

**Wikipedia:** [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting). It says: “A topological ordering is possible if and only if the graph has no directed cycles”

**Sources:**

- [A. B. Kahn, Topological sorting of large networks, Communications of the ACM (1962).](https://doi.org/10.1145/368996.369025)

### Color counts give deletion and contraction

**Remember:** After deleting an edge, split colorings by whether its endpoints match.

*True by definition.* MSC 05C31 (Graph polynomials), 05C15. arXiv math.CO. Level 1: early undergraduate.

**Definition.** For a finite simple graph G, define its chromatic polynomial by its values at positive integers k. Each value counts assignments of k available colors with different colors at adjacent vertices. One can instead specify the polynomial by a recurrence.

**Problem.** Choose an edge e in G. Subtracting the count after contraction from the count after deletion gives the count for G. Contraction merges the endpoints, removes e, and merges any repeated edges.

**How the definition helps.** Counting colorings lets us split the colorings after deletion by whether the endpoints have the same color. Different colors give exactly the colorings of G. Equal colors give exactly the colorings after contraction. For an edgeless graph, each vertex has k independent choices (our own). Induction on the number of edges then proves the count is a polynomial (our own).

**Wikipedia:** [Chromatic polynomial](https://en.wikipedia.org/wiki/Chromatic_polynomial). It says: “This follows from the observation that every k-coloring of G either gives different colors to u and v, or the same colors.”

**Sources:** none listed. No primary source with a working link was found.

### Distance parity detects bipartite graphs

**Remember:** An edge within one parity gives an odd cycle.

*Rules out counterexamples.* MSC 05C38 (Paths and cycles). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In each connected piece of a graph, choose a starting vertex and group vertices by even or odd distance from it. A graph is bipartite if its vertices split into two groups with every edge between groups.

**Problem.** A finite undirected graph is bipartite exactly when it contains no odd cycle.

**How the definition helps.** Grouping vertices by distance parity gives a bipartition unless some edge joins vertices in the same group. In our own proof, take shortest paths from the starting vertex to both ends of that edge. Follow one path out, cross the edge, and return along the other path. This closed walk has odd length. Such a walk contains an odd cycle. Conversely, a cycle in a bipartite graph alternates groups and must have even length.

**Wikipedia:** [Bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph). It says: “a graph is bipartite if and only if it has no odd cycle as a subgraph”

**Paper or page:** [Graph containing Closed Walk of Odd Length also contains Odd Cycle](https://proofwiki.org/wiki/Graph_containing_Closed_Walk_of_Odd_Length_also_contains_Odd_Cycle). It says: “Let G have a closed walk of odd length. Then G has an odd cycle.”

**Sources:** none listed. No primary source with a working link was found.

### Counting one remaining vertex gives Kₙ connectivity n − 1

**Remember:** Remove n − 1 vertices from Kₙ: one vertex is left, and that counts.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** The connectivity of a graph is the least number of vertices whose removal leaves either a disconnected graph or a single vertex. With this definition, the complete graph Kₙ has connectivity n − 1.

**Problem.** A graph is k-connected when its connectivity is at least k. Menger's theorem, in the global form due to Whitney, says this: a graph with at least two vertices is k-connected exactly when every pair of vertices is joined by k paths that share no inner vertices.

**How the definition helps.** The 'single vertex' clause gives complete graphs the same value as the path count, so Menger's theorem needs no exception. The Wikipedia page on vertex connectivity says that no set of vertices disconnects a complete graph. So the plain definition, the size of the smallest disconnecting set, gives no value for Kₙ. If a single remaining vertex also counts, Kₙ gets connectivity n − 1. That is the same value that the path definition gives. So the two definitions agree on all graphs with at least two vertices.

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

### Reachability classes make graph components partition the vertices

**Remember:** Group together all vertices that can reach one another.

*True by definition.* MSC 05C40 (Connectivity). arXiv math.CO. Level 1: early undergraduate.

**Definition.** In an undirected graph, relate two vertices if a walk joins them. A walk follows edges and may repeat vertices. Define a component as an equivalence class together with every edge joining vertices in it. Another definition takes the maximal connected subgraphs.

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

**Definition.** For a finite simple graph, put 1 in a matrix entry if its row and column vertices share an edge. Put 0 otherwise. This replaces an edge list with a table of one-step walk counts.

**Problem.** For n ≥ 0, entry (i,j) of the nth matrix power counts walks of length n from i to j.

**How the definition helps.** Matrix multiplication counts every choice of the next edge from the endpoint of a walk. A walk follows consecutive edges and may repeat vertices. Our own proof starts with the identity matrix, which counts walks of length zero. Unlike an edge list, each matrix entry already counts one-step walks. Removing the last edge splits each longer walk uniquely, so induction gives the formula.

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

**Problem.** Matchings correspond to independent sets in the line graph, with the same size. A matching has no shared endpoints, and an independent set contains no adjacent vertices.

**How the definition helps.** The line graph turns the rule against shared endpoints into the rule against adjacent vertices. In our own comparison, the original matching problem selects edges directly. The correspondence preserves size because each edge supplies exactly one vertex.

**Wikipedia:** [Line graph](https://en.wikipedia.org/wiki/Line_graph). It says: “corresponds to a set of vertices in L(G) no two of which are adjacent, that is, an independent set.”

**Sources:** none listed. No primary source with a working link was found.

### Forbidding objects of size zero makes sequence and set constructions countable

**Remember:** Nothing of size zero, or sequences pile up for free.

*Rules out counterexamples.* MSC 05A15 (Exact enumeration problems, generating functions). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A combinatorial class is a set of objects with a size, with finitely many objects of each size. Its generating function is the power series whose n-th coefficient counts objects of size n. The sequence and set constructions build new classes from old ones.

**Problem.** If a class B has no object of size 0, sequences of B-objects have generating function 1/(1 − B(z)). Labelled sets of B-objects have exponential generating function exp(B(z)).

**How the definition helps.** Objects of size zero could be added to a sequence without changing its size (our own example). Then there would be infinitely many structures of each size. The power series agree. When B has no constant term, the sums of the powers B(z)ᵏ, with or without 1/k!, add finitely many terms to each coefficient. With the condition, each construction gives a class with finitely many objects of each size. Then the rules for translating constructions into generating functions are automatic. The hard part is the analysis that reads asymptotics from the singularities.

**Wikipedia:** [Symbolic method (combinatorics)](https://en.wikipedia.org/wiki/Symbolic_method_%28combinatorics%29). It says: “In the labelled case we have the additional requirement that X not contain elements of size zero.”

**Sources:**

- [P. Flajolet and R. Sedgewick, Analytic Combinatorics, Cambridge University Press (2009)](https://doi.org/10.1017/CBO9780511801655)

### Set partitions make Stirling numbers nonnegative integers

**Remember:** Count maps by grouping inputs that have the same output.

*True by definition. Confidence: medium.* MSC 05A18 (Partitions of sets), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Define S(n, k) as the number of partitions of an n-element set into k nonempty unlabelled sets. Another definition uses the coefficient of x(x − 1)⋯(x − k + 1) when expanding xⁿ in these products. The product for k = 0 is 1.

**Problem.** Every coefficient in this expansion of xⁿ is a nonnegative integer.

**How the definition helps.** The partition definition makes nonnegativity immediate because the coefficient counts partitions. The coefficient definition alone does not display this count. The work moves into showing that the definitions agree. For positive integer x, both sides count maps from n inputs to x outputs (our own). Group inputs with the same output, then assign distinct outputs to the k groups in x(x − 1)⋯(x − k + 1) ways. Equality at infinitely many integers gives the polynomial identity (our own).

**Wikipedia:** [Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind). It says: “The Stirling numbers of the second kind may be characterized as the numbers that arise when one expresses powers of an indeterminate x in terms of the falling factorials”

**Sources:** none listed. No primary source with a working link was found.

### Partitions in a box make Gaussian binomials nonnegative

**Remember:** Each coefficient counts partitions that fit inside a box.

*True by definition.* MSC 05A30 (\\(q\\)-calculus and related topics), 05A17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A partition lists positive integers in decreasing order, allowing ties. For integers m, n ≥ 0, take partitions with at most m parts, each at most n. Define the Gaussian binomial by adding one power of q per partition, with exponent equal to the sum of its parts. Another definition is a quotient of products of factors 1 − qⁱ.

**Problem.** The Gaussian binomial coefficient is a polynomial with nonnegative integer coefficients. It is unchanged when m and n are swapped.

**How the definition helps.** The box definition gives nonnegative coefficients immediately because each coefficient counts partitions of one size. Reflecting the diagram, whose row lengths are the parts, swaps m and n (our own). With the quotient definition, exact division and nonnegative coefficients both need a proof. The work moves into showing that the box sum and the quotient satisfy the same recurrence. Split the partitions according to whether they have a part of size n, and remove such a part if present (our own).

**Wikipedia:** [Gaussian binomial coefficient](https://en.wikipedia.org/wiki/Gaussian_binomial_coefficient). It says: “Although the formula at first appears to be a rational function, it actually is a polynomial, because the division is exact in Z\[q\].”

**Sources:** none listed. No primary source with a working link was found.

### Requiring incomplete blocks makes Fisher's inequality true

**Remember:** No block is everything, so a point is in more blocks than a pair.

*Rules out counterexamples.* MSC 05B05 (Combinatorial aspects of block designs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A balanced incomplete block design has v points and b blocks. Each block has k points, with 1 ≤ k &lt; v. Every point lies in r blocks, and every pair of points lies in λ blocks. 'Incomplete' here means that no block contains all the points.

**Problem.** Fisher's inequality: a 2-design has at least as many blocks as points, b ≥ v.

**How the definition helps.** The condition k &lt; v gives r &gt; λ, and that is the fact the proof needs. Let M be the incidence matrix, with entry 1 when a point lies in a block and 0 otherwise. Then M Mᵀ has r on the diagonal and λ elsewhere. This matrix is invertible because r ≠ λ, so v ≤ rank M ≤ b. Without k &lt; v, a single block equal to the whole set is a 'design' with b = 1 &lt; v, and that breaks the inequality (our own example). The general version for pairwise balanced designs likewise excludes the 'trivial' design whose blocks are all copies of the point set.

**Wikipedia:** [Fisher's inequality](https://en.wikipedia.org/wiki/Fisher%27s_inequality), [Block design](https://en.wikipedia.org/wiki/Block_design). It says: “(To avoid degenerate examples, it is also assumed that v &gt; k, so that no block contains all the elements of the set.”

**Sources:**

- [R. A. Fisher, An examination of the different possible solutions of a problem in incomplete blocks, Annals of Eugenics 10 (1940) 52–75](https://doi.org/10.1111/j.1469-1809.1940.tb02237.x)

### Triples make every conjugate of a Latin square Latin

**Remember:** Permute rows, columns and symbols without changing the rule for pairs.

*True by definition.* MSC 05B15 (Orthogonal arrays, Latin squares, Room squares). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Define a Latin square of order n as a set of n² triples of row, column and symbol, with each entry from 1 to n. No two triples agree in any two positions. The array definition uses an n by n table with every symbol once in each row and each column. A conjugate applies the same permutation to the three positions in every triple.

**Problem.** Every permutation of the row, column and symbol roles produces another Latin square.

**How the definition helps.** The triple definition makes this immediate because it imposes the same rule on all three pairs of positions (our own). In the table definition, exchanging roles requires checking that the new entries are well defined and do not repeat. The work moves into the equivalence with the triple definition. Since there are n² triples and n² possible pairs in any two positions, uniqueness also gives existence (our own). This recovers the table and its row and column rules.

**Wikipedia:** [Latin square](https://en.wikipedia.org/wiki/Latin_square). It says: “Altogether there are 6 possibilities including "do nothing", giving us 6 Latin squares called the conjugates (also parastrophes) of the original square.”

**Sources:** none listed. No primary source with a working link was found.

### Every matroid has a dual, even when the graph is not planar

**Remember:** Take complements of bases and you always get the dual matroid.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A matroid on a finite set E is given by its bases, a family of subsets that behave like the bases of a vector space (you can exchange elements between any two of them). The dual of a matroid M is the matroid on E whose bases are the complements E ∖ B of the bases B of M. This dual exists for every matroid.

**Problem.** In graph duality, the faces of a drawing in the plane become vertices. This works only for planar graphs, so statements about duality need a planarity hypothesis.

**How the definition helps.** Each graph has a cycle matroid, and each matroid has a dual, so every graph gets a dual object. The cycle matroid of a graph has the edges as its set E, and its bases are the spanning forests. This works even for a non-planar graph, so duality theorems can be stated for all matroids without exception. A graphic matroid is the cycle matroid of some graph. Whitney's planarity criterion becomes a clean statement: the dual of a graphic matroid is graphic exactly when the graph is planar. In that case the dual is the matroid of the dual graph. The price is that the dual of the matroid of a non-planar graph is not the matroid of any graph.

**Wikipedia:** [Dual matroid](https://en.wikipedia.org/wiki/Dual_matroid), [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “The dual of a graphic matroid is itself graphic if and only if the underlying graph is planar; the matroid of the dual of a planar graph is the same as the dual of the matroid of the graph.”

**Sources:**

- [Hassler Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)
- [Hassler Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)

### Matroids are exactly where the greedy algorithm always works

**Remember:** Small independent sets can always grow from bigger ones, and greedy needs nothing more.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO, cs.DS. Level 2: later undergraduate.

**Definition.** A matroid is a finite set with a non-empty family of subsets that are called 'independent'. Every subset of an independent set is independent. If an independent set A is smaller than an independent set B, then some x in B but not in A makes A ∪ {x} independent. This last rule is the exchange axiom.

**Problem.** The greedy algorithm takes the heaviest element that keeps the set independent, and repeats. For which families of sets does it find a maximum-weight independent set for every choice of weights?

**How the definition helps.** The exchange axiom is exactly the condition that the greedy algorithm needs, so greedy is optimal on every matroid. Whitney chose the axioms as an abstract form of linear independence in matrices and of forests in graphs. The converse also holds. If a family is closed under subsets and greedy works on it for all weights, then the family is a matroid. So the definition and the algorithm characterize each other. Some problems need more than one matroid at once, such as matroid intersection (finding a largest set that is independent in two matroids). Greedy does not solve them, and they stay harder (our own remark).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “no matter how the sets are weighted, the greedy algorithm finds a maximum-weight set in the family, then F must be the family of independent sets of a matroid.”

**Sources:**

- [Jack Edmonds, Matroids and the greedy algorithm, Mathematical Programming (1971)](https://doi.org/10.1007/BF01584082)
- [Hassler Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Matroids make the dual of a planar graph unique

**Remember:** Different drawings give different duals, but one dual matroid.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The graphic matroid of a graph has its edges as elements, and a set of edges is independent when it contains no cycle. The dual of a matroid has the complements of the maximal independent sets as its maximal independent sets. The dual graph of a plane drawing has a vertex for each face, and an edge across each edge of the drawing.

**Problem.** If G is planar, the dual of its graphic matroid is the graphic matroid of any planar dual of G. So all planar duals of G have the same matroid, though they may be non-isomorphic graphs.

**How the definition helps.** The dual graph depends on the drawing, but the matroid keeps only which edge sets form cycles, so the dependence disappears. For connected G, cycles of the dual graph are the minimal edge cuts of G, which do not depend on the drawing (our own remark). So the statement "the dual of G" makes sense for matroids though not for graphs. Whitney's 2-isomorphism theorem says that graphs with no cut vertex and the same matroid differ only by simple twists (our own remark). Whitney's planarity criterion then reads: G is planar exactly when the dual of its matroid is graphic.

**Wikipedia:** [Graphic matroid](https://en.wikipedia.org/wiki/Graphic_matroid). It says: “While G may have multiple dual graphs, their graphic matroids are all isomorphic.”

**Sources:**

- [H. Whitney, Non-separable and planar graphs, Transactions of the American Mathematical Society 34 (1932) 339–362](https://doi.org/10.1090/S0002-9947-1932-1501641-2)
- [H. Whitney, 2-isomorphic graphs, American Journal of Mathematics 55 (1933) 245](https://doi.org/10.2307/2371127)

### Simple matroids correspond one-to-one with geometric lattices

**Remember:** Simple means every pair of elements has rank two.

*Rules out counterexamples. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A matroid is simple if it has no loops and no parallel elements. That is, every one-element set and every two-element set is independent. A geometric lattice is a finite lattice that is atomistic and semimodular. Atomistic means that every element is a join of atoms, the elements just above the bottom.

**Problem.** The lattice of flats of a matroid should determine the matroid. A flat is a set of elements such that adding any other element raises its rank. This would give a one-to-one correspondence between matroids and geometric lattices.

**How the definition helps.** Simple matroids leave out the elements that the lattice of flats cannot see. The elements of the matroid become the atoms of the lattice. For simple matroids, the two constructions are inverse to each other. The matroid built from a geometric lattice is always simple. A loop lies in every flat, and parallel elements always lie in the same flats, so the lattice cannot see them. So you cannot recover a non-simple matroid from its lattice (our own explanation). Restricting to simple matroids removes these cases.

**Wikipedia:** [Geometric lattice](https://en.wikipedia.org/wiki/Geometric_lattice). It says: “These two constructions, of a simple matroid from a lattice and of a lattice from a matroid, are inverse to each other”

**Sources:**

- [G. Birkhoff, Abstract linear dependence and lattices, American Journal of Mathematics 57 (1935) 800–804](https://doi.org/10.2307/2371015)

### The augmentation axiom makes all bases of a matroid the same size

**Remember:** A smaller independent set can always grow, so bases match in size.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A matroid is a finite set with a family of independent subsets. The family contains the empty set and is closed under subsets. The augmentation axiom says that if U and V are independent and V is smaller, some element of U can be added to V. A base is a maximal independent set.

**Problem.** In a matroid, all bases have the same number of elements, and this number is the rank of the matroid.

**How the definition helps.** If one base were smaller than another, the augmentation axiom would let it grow, so it would not be maximal. So the theorem is almost the axiom itself. In our own comparison, in linear algebra the same fact is the invariance of dimension, which needs the Steinitz exchange lemma. ProofWiki also lists a definition that asks for equal-size maximal independent subsets inside every subset. The work moves into showing that the definitions agree.

**Paper or page:** [All Bases of Matroid have same Cardinality](https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality), [Equivalence of Definitions of Matroid/Definition 1 implies Definition 4](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_4). It says: “That is, all bases of M have the same cardinality, which is the rank of M.”

**Sources:**

- [ProofWiki, All Bases of Matroid have same Cardinality](https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality)
- [ProofWiki, Equivalence of Definitions of Matroid/Definition 1 implies Definition 4](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid/Definition_1_implies_Definition_4)

### Euler's formula holds on every surface when each face is a disk

**Remember:** Ask that every face is a disk, and vertices minus edges plus faces is fixed.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 57K20. arXiv math.CO, math.GT. Level 2: later undergraduate.

**Definition.** A graph is 2-cell embedded in a surface when it is drawn there without crossings and every face is an open disk. A face is a region that remains after one removes the drawing from the surface. The Euler characteristic χ(S) is a number fixed by the surface, for example 2 for the sphere and 0 for the torus.

**Problem.** For a graph drawn on a closed surface S with every face a disk, the number of vertices minus edges plus faces equals χ(S).

**How the definition helps.** When every face is a disk, the drawing cuts the surface into cells (our own remark). Then n − e + f is the Euler characteristic by its definition (our own remark). Without the condition the count changes. Take one loop around the torus that does not bound a disk (our own example). It has 1 vertex, 1 edge and 1 face, so n − e + f = 1, but χ is 0. The hard part is the topology: one must know that χ does not depend on the chosen cell decomposition.

**Paper or page:** [Efficient polynomial-time approximation scheme for the genus of dense graphs](https://arxiv.org/abs/2011.08049). It says: “Let G be a graph which is 2-cell embedded in a surface S. If G has n vertices, e edges and f faces in S, then χ(S)=n−e+f.”

**Sources:**

- [Yifan Jing, Bojan Mohar, Efficient polynomial-time approximation scheme for the genus of dense graphs, arXiv:2011.08049 (2020)](https://arxiv.org/abs/2011.08049)

### Faces that are disks make embeddings the same as rotation systems

**Remember:** When every face is a disk, the cyclic orders at vertices determine everything.

*Makes the theorem clean to state or prove.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C62. arXiv math.CO, math.GT. Level 2: later undergraduate.

**Definition.** An embedding of a graph on a surface draws it with no crossings. A 2-cell (cellular) embedding is one in which every face is an open disk. A rotation system gives, at each vertex, a cyclic order of the edges around it.

**Problem.** Cellular embeddings of a connected multigraph on closed oriented surfaces, up to orientation-preserving homeomorphism, correspond one-to-one to rotation systems. So a topological question becomes a question about permutations.

**How the definition helps.** When every face is a disk, the faces carry no hidden topology, so the cyclic orders at the vertices determine the surface. One traces the faces by following the rotation, glues in disks, and gets back the surface. If a face could be an annulus or a punctured torus, the same rotation system would fit many different surfaces (our own remark). Heffter settled a dual form of this in the 1890s, and Edmonds gave the direct form in 1960. Gross and Alpert extended it to multigraphs in 1974. Finding the minimum genus of a graph stays hard: it is NP-hard (our own remark).

**Wikipedia:** [Combinatorial map](https://en.wikipedia.org/wiki/Combinatorial_map), [Graph embedding](https://en.wikipedia.org/wiki/Graph_embedding). It says: “Every rotation scheme defines a unique 2-cell embedding of a connected multigraph on a closed oriented surface (up to orientation-preserving topological equivalence).”

**Sources:**

- [L. Heffter, Ueber das Problem der Nachbargebiete, Mathematische Annalen 38 (1891) 477–508](https://doi.org/10.1007/BF01203357)
- [J. R. Edmonds, A combinatorial representation for oriented polyhedral surfaces, Master's thesis, University of Maryland (1960)](https://hdl.handle.net/1903/24820)

### Fáry's theorem holds for simple graphs, since parallel edges cannot be straight

**Remember:** Two points fix one straight segment, so straight drawings need simple graphs.

*Rules out counterexamples.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C62. arXiv math.CO, cs.CG. Level 2: later undergraduate.

**Definition.** A simple graph has no loops and at most one edge between any two vertices. A planar graph is one that can be drawn in the plane with no two edges crossing.

**Problem.** Every simple planar graph has a crossing-free drawing in which every edge is a straight line segment. So curved edges do not let more graphs be drawn.

**How the definition helps.** The word simple removes the only graphs that obviously cannot be drawn straight. Two parallel edges would have to be the same segment (our own remark). A loop cannot be a segment at all. Yet every planar multigraph has a crossing-free drawing with curves, so the theorem is false without the restriction. After the restriction, the proof is an induction on maximal planar graphs, or it follows from the circle packing theorem. Wagner, Fáry, Stein and Tutte gave proofs.

**Wikipedia:** [Fáry's theorem](https://en.wikipedia.org/wiki/F%C3%A1ry%27s_theorem), [Planar graph](https://en.wikipedia.org/wiki/Planar_graph). It says: “Fáry's theorem states that any simple, planar graph can be drawn without crossings so that its edges are straight line segments.”

**Sources:**

- [S. K. Stein, Convex maps, Proceedings of the American Mathematical Society 2 (1951) 464–466](https://doi.org/10.1090/S0002-9939-1951-0041425-5)
- [W. T. Tutte, How to draw a graph, Proceedings of the London Mathematical Society 13 (1963) 743–767](https://doi.org/10.1112/plms/s3-13.1.743)

### Landmark distances bound graph size

**Remember:** Every nonlandmark needs its own list of positive distances.

*True by definition.* MSC 05C12 (Distance in graphs). arXiv cs.DM. Level 2: later undergraduate.

**Definition.** Landmarks resolve a connected graph if every pair of vertices has different distances to at least one landmark. Equivalently, each vertex has a unique list of distances to the landmarks in a fixed order. The metric dimension is the fewest landmarks needed. The diameter is the largest distance between vertices.

**Problem.** Let β be the metric dimension and D the diameter of a finite connected graph. If β ≥ 1, the graph has at most Dᵝ + β vertices.

**How the definition helps.** Distance lists turn pairwise separation into an injection, so counting possible lists bounds the graph’s size. Each nonlandmark has a positive integer distance of at most D to each landmark. There are at most Dᵝ such lists and β landmarks to add. In our own explanation, the definitions agree because unequal lists differ in at least one coordinate.

**Wikipedia:** [Metric dimension (graph theory)](https://en.wikipedia.org/wiki/Metric_dimension_%28graph_theory%29). It says: “each vertex that is not in the resolving set is uniquely determined by a distance vector”

**Sources:**

- [Samir Khuller, Balaji Raghavachari, and Azriel Rosenfeld, Landmarks in Graphs (1996)](https://doi.org/10.1016/0166-218X(95)00106-2)

### Brooks' theorem needs connected graphs to name its exceptions

**Remember:** Ask for connected simple graphs, and only odd cycles and cliques need Δ + 1.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The chromatic number χ(G) is the least number of colours that give adjacent vertices different colours. Δ(G) is the largest degree of a vertex. A simple graph has no loops and no parallel edges.

**Problem.** Brooks' theorem says that a connected simple graph needs Δ + 1 colours only when it is an odd cycle or a complete graph.

**How the definition helps.** The word connected keeps the list of exceptions short and exact. Without it, take K₄ together with one isolated vertex (our own example). This graph needs Δ + 1 = 4 colours, but it is neither complete nor an odd cycle. For graphs that are not connected, one must say that some component is an exception (our own remark). The condition simple removes loops, which make colouring impossible. The proof of the inequality χ ≤ Δ in the other cases stays the real work.

**Paper or page:** [On Lattice Diameter Segments and A Discrete Borsuk Partition Problem](https://arxiv.org/abs/2508.20009). It says: “If G is a connected simple graph, then χ(G) ≤ Δ(G)+1, with equality if and only if G is an odd cycle or a complete graph.”

**Sources:**

- [Anouk E. Brose, Jesús A. De Loera, Gyivan Lopez-Campos, Antonio J. Torres, On Lattice Diameter Segments and A Discrete Borsuk Partition Problem, arXiv:2508.20009 (2025)](https://arxiv.org/abs/2508.20009)

### In the four colour theorem, touching at a corner is not adjacency

**Remember:** Countries touching only at a corner may share a colour.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Two regions of a map are adjacent if they share a boundary segment of non-zero length. Regions that meet only at isolated points, such as corners, are not adjacent. Regions must also be well-behaved: for example, their boundaries are made of finitely many line segments.

**Problem.** The four colour theorem: you can colour the regions of every planar map with four colours so that adjacent regions get different colours.

**How the definition helps.** The definition removes two kinds of map that would need more than four colours. If meeting at a point counted as adjacency, a map like a pie chart would have arbitrarily many regions that all meet at the centre. That map would need arbitrarily many colours. Hudson showed that bizarre regions, such as regions with finite area and infinitely long boundary, can also need more than four colours. With the definition, the theorem becomes a statement about loopless planar graphs. Its proof still needs a large computer check.

**Wikipedia:** [Four color theorem](https://en.wikipedia.org/wiki/Four_color_theorem). It says: “Otherwise, a map in a shape of a pie chart would make an arbitrarily large number of regions 'adjacent' to each other at a common corner, and require an arbitrarily large number of colors as a result.”

**Sources:**

- [Kenneth Appel and Wolfgang Haken, Every planar map is four colorable. Part I: Discharging, Illinois Journal of Mathematics 21 (1977) 429–490](https://doi.org/10.1215/ijm/1256049011)
- [Hud Hudson, Four colors do not suffice, The American Mathematical Monthly 110 (2003) 417–423](https://doi.org/10.1080/00029890.2003.11919979)

### Vertex orders make the greedy colouring bound immediate

**Remember:** Fewer than κ earlier neighbours leave a colour free among κ colours.

*True by definition.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The colouring number is the least integer κ for which some vertex order gives every vertex fewer than κ earlier neighbours. An equivalent definition is one plus the degeneracy, the largest minimum degree among nonempty subgraphs.

**Problem.** A finite nonempty simple graph can be coloured with at most its colouring number of colours. Adjacent vertices must receive different colours.

**How the definition helps.** The order definition makes the bound immediate because colouring in that order leaves an unused colour at each step (our own). With the degree definition, first prove such an order exists. Repeatedly remove a vertex of minimum degree and reverse the removal order (our own). The converse comes from taking the last vertex in any nonempty subgraph in the chosen order (our own). The work moves into that equivalence.

**Wikipedia:** [Degeneracy (graph theory)](https://en.wikipedia.org/wiki/Degeneracy_%28graph_theory%29). It says: “By using a greedy coloring algorithm on an ordering with optimal coloring number, one can graph color a k-degenerate graph using at most k+1 colors.”

**Sources:**

- [P. Erdős and A. Hajnal, On chromatic number of graphs and set-systems, Acta Math. Acad. Sci. Hungar. 17 (1966) 61–99](https://doi.org/10.1007/BF02020444)
- [G. Szekeres and H. S. Wilf, An inequality for the chromatic number of a graph, Journal of Combinatorial Theory 4 (1968) 1–3](https://doi.org/10.1016/S0021-9800(68)80081-X)

### Vizing's Δ + 1 bound needs simple graphs

**Remember:** Simple graphs need at most one extra colour beyond the maximum degree.

*Rules out counterexamples.* MSC 05C15 (Coloring of graphs and hypergraphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** An edge colouring gives edges that share a vertex different colours. The maximum degree Δ is the largest number of edges at one vertex. The multiplicity μ is the largest number of parallel edges between two vertices.

**Problem.** Every simple graph has an edge colouring with Δ + 1 colours. A loopless multigraph needs at most Δ + μ colours.

**How the definition helps.** Simplicity stops many edges from crowding between the same few vertices, which is what forces many colours. Shannon's triangle shows this (our own example): take a triangle and double each edge. Then Δ = 4, but all six edges meet each other, so six colours are needed, more than Δ + 1 = 5. Shannon had shown that multigraphs need at most 3Δ/2 colours. For simple graphs, the proof is an exchange of colours along alternating paths. Deciding whether Δ colours suffice is still NP-complete.

**Wikipedia:** [Vizing's theorem](https://en.wikipedia.org/wiki/Vizing%27s_theorem). It says: “Vizing's theorem states that every simple undirected graph may be edge colored using a number of colors that is at most one larger than the maximum degree Δ of the graph.”

**Sources:**

- [C. E. Shannon, A theorem on coloring the lines of a network, Journal of Mathematics and Physics 28 (1949) 148–152](https://doi.org/10.1002/sapm1949281148)
- [C. Berge and J. C. Fournier, A short proof for a generalization of Vizing's theorem, Journal of Graph Theory 15 (1991) 333–336](https://doi.org/10.1002/jgt.3190150309)

### An elimination order gives an optimal colouring of chordal graphs

**Remember:** Colour backwards so each vertex sees only a clique of coloured neighbours.

*True by definition.* MSC 05C17 (Perfect graphs), 05C15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A perfect elimination order lists the vertices so that each vertex and its later neighbours form a clique, a set of pairwise adjacent vertices. Define a chordal graph as a finite simple graph with such an order. The usual definition requires a chord in every cycle of length at least four. A chord is an edge between nonconsecutive vertices on that cycle.

**Problem.** The fewest colours needed for a proper colouring of a chordal graph is the size ω of its largest clique. A proper colouring gives adjacent vertices different colours.

**How the definition helps.** The elimination order makes ω colours enough because, in reverse order, each vertex has at most ω − 1 already coloured neighbours (our own). These neighbours and the vertex form a clique, which proves the bound. A largest clique also needs ω different colours, so no fewer can work (our own). The chord definition does not supply the order. The work moves into the theorem that the chord condition is equivalent to having an elimination order.

**Wikipedia:** [Chordal graph](https://en.wikipedia.org/wiki/Chordal_graph). It says: “an optimal coloring may be obtained by applying a greedy coloring algorithm to the vertices in the reverse of a perfect elimination ordering.”

**Sources:**

- [D. R. Fulkerson and O. A. Gross, Incidence matrices and interval graphs, Pacific Journal of Mathematics 15 (1965) 835–855](https://doi.org/10.2140/pjm.1965.15.835)
- [D. J. Rose, Triangulated graphs and the elimination process, Journal of Mathematical Analysis and Applications 32 (1970) 597–609](https://doi.org/10.1016/0022-247X(70)90282-9)

### Perfect graphs restate Kőnig's theorem as perfection of bipartite complements

**Remember:** Kőnig's matching theorem is the perfection of a bipartite graph's complement.

*Makes the theorem clean to state or prove.* MSC 05C17 (Perfect graphs), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is perfect when, in it and in every induced subgraph, the chromatic number equals the size of the largest clique. A bipartite graph has its vertices split into two sides, with every edge going between the sides.

**Problem.** Kőnig's theorem says that in a bipartite graph the largest matching has the same size as the smallest vertex cover. A matching is a set of edges with no shared vertex. A vertex cover is a set of vertices that touches every edge.

**How the definition helps.** The notion of a perfect graph turns several separate theorems of Kőnig into one kind of statement. Let G be bipartite with n vertices. A clique of the complement is an independent set of G, so the clique number is n minus the smallest vertex cover (our own detail). A colour class of the complement is a clique of G, so an edge or a single vertex. So the fewest colours is n minus the largest matching. Equality of the two numbers is exactly Kőnig's theorem, and induced subgraphs are again complements of bipartite graphs. In the same way, the perfection of line graphs of bipartite graphs is Kőnig's edge-colouring theorem.

**Wikipedia:** [Bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph), [Perfect graph](https://en.wikipedia.org/wiki/Perfect_graph). It says: “Perfection of bipartite graphs is easy to see (their chromatic number is two and their maximum clique size is also two) but perfection of the complements of bipartite graphs is less trivial, and is another restatement of Kőnig's theorem.”

**Sources:**

- [L. Lovász, Normal hypergraphs and the perfect graph conjecture, Discrete Mathematics 2 (1972) 253–267](https://doi.org/10.1016/0012-365X(72)90006-4)

### Conservative weights bound closed walks

**Remember:** Check cycles once, but do not traverse a negative edge twice.

*Rules out counterexamples.* MSC 05C22 (Signed and weighted graphs), 05C38. arXiv cs.DM, cs.DS. Level 2: later undergraduate.

**Definition.** In a simple undirected graph, an edge weighting is conservative if every simple cycle has nonnegative total weight. This lets some individual edges have negative weights.

**Problem.** Every closed walk that uses each negative edge at most once has nonnegative weight under a conservative weighting.

**How the definition helps.** Conservativity rules out negative simple cycles, leaving only immediate returns along one edge to check. In our own proof, split the walk at repeated vertices until each piece is a simple cycle or a two-step return. A return uses its edge twice, so the restriction forbids a negative return. A negative triangle shows why the cycle condition matters. Traversing one negative edge twice shows why the repetition restriction matters.

**Paper or page:** [Shortest Odd Paths in Undirected Graphs with Conservative Weight Functions](https://arxiv.org/abs/2308.12653v1). It says: “If W is a closed walk that does not contain any edge of E⁻ more than once, then w(W) ≥ w(E(W)) ≥ 0.”

**Sources:**

- [Shortest Odd Paths in Undirected Graphs with Conservative Weight Functions](https://arxiv.org/abs/2308.12653v1)

### Switching turns Harary's balance theorem into one change of signs

**Remember:** A signed graph is balanced exactly when switching can make every edge positive.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C22 (Signed and weighted graphs). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A signed graph has a sign + or − on each edge. It is balanced when every cycle has an even number of negative edges. Switching at a vertex changes the sign of every edge at that vertex. Switching does not change the sign of any cycle.

**Problem.** Harary's balance theorem says when a signed graph is balanced. The vertices must split into two parts, with positive edges inside the parts and negative edges between them. The cited statement adds a third equivalent form: some switching makes all edges positive.

**How the definition helps.** With switching, the two-part form of Harary's theorem becomes one statement: some switching makes every edge positive. The two parts are just the vertices that one switches and the vertices that one does not (our own remark). Because switching keeps the sign of each cycle, the all-positive graph is clearly balanced (our own remark). The remaining work is to find the switching, which one does along a spanning tree.

**Paper or page:** [Circular Game Coloring of Signed Graphs](https://arxiv.org/abs/2505.21586). It says: “There exists a switching function ζ : V → {+1,−1} such that the switched signature σᶻ satisfies σᶻ(e) = +1 for all e∈E”

**Sources:**

- [Pie Desire Ebode Atanhgana, Circular Game Coloring of Signed Graphs, arXiv:2505.21586 (2025)](https://arxiv.org/abs/2505.21586)

### An elimination order factors the chordal chromatic polynomial

**Remember:** A clique of N later neighbours rules out exactly N colours.

*True by definition.* MSC 05C31 (Graph polynomials), 05C17. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Define a chordal graph as a finite simple graph with a vertex order v₁, …, vₙ in which each vertex’s later neighbours are pairwise adjacent. Let Nᵢ count the later neighbours of vᵢ. The chromatic polynomial P(x) counts assignments of x colours that give adjacent vertices different colours. The other definition of chordal requires every cycle of length at least four to have an edge joining nonconsecutive vertices.

**Problem.** For this vertex order, P(x) = (x − N₁)(x − N₂)⋯(x − Nₙ).

**How the definition helps.** The elimination order gives one factor per vertex because its later neighbours must use distinct colours (our own). Start with the last vertex and work backwards. For x ≥ n, each step has exactly x − Nᵢ choices, no matter which colours the later neighbours used. The counts multiply, and equality at infinitely many integers proves the polynomial identity (our own). Without the order one can use the deletion–contraction recurrence for chromatic polynomials. Here the work moves into proving that the chord condition guarantees the order.

**Wikipedia:** [Chordal graph](https://en.wikipedia.org/wiki/Chordal_graph). It says: “The chromatic polynomial equals (x−N₁)(x−N₂)⋯(x−Nₙ).”

**Sources:**

- [D. J. Rose, Triangulated graphs and the elimination process, Journal of Mathematical Analysis and Applications 32 (1970) 597–609](https://doi.org/10.1016/0022-247X(70)90282-9)

### Tutte subset sums count forests and spanning edge sets

**Remember:** Set a variable to one to keep only terms with exponent zero.

*True by definition.* MSC 05C31 (Graph polynomials), 05C05. arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a finite graph G with vertices V, sum one term for each edge set A. Use powers of x − 1 and y − 1 with exponents k(A) − k(E) and \|A\| − \|V\| + k(A), respectively. Here E is the full edge set, and k(A) counts components including isolated vertices. Another definition uses a recursion that deletes or contracts an edge.

**Problem.** T(1,1) counts forests that connect every component of G, and T(2,1) counts all edge sets with no cycle. T(1,2) counts edge sets with the same components as G.

**How the definition helps.** The subset sum turns evaluations into counts because setting a variable to 1 keeps just the terms with exponent zero (our own). The first exponent is zero exactly when A connects each component of G. The second is zero exactly when A contains no cycle. Setting a variable to 2 gives 1 to every power of that variable minus one (our own). Under the recursion definition, one must prove that the counts obey the recursion (our own). Here the work is to check that the subset sum obeys that recursion.

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “T<sub>G</sub>(1,1) counts the number of spanning forests (edge subsets without cycles and the same number of connected components as G).”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)

### Tutte subset sums multiply over disjoint unions

**Remember:** Edge sets split and ranks add, so the sum factors.

*True by definition. Confidence: medium.* MSC 05C31 (Graph polynomials). arXiv math.CO. Level 2: later undergraduate.

**Definition.** For a finite graph G, the Tutte polynomial sums a term for each subset A of its edges E. Define r(A) as the number of vertices minus the number of components of the subgraph with edges A and all vertices. Each term uses powers of x − 1 and y − 1 with exponents r(E) − r(A) and \|A\| − r(A). Another definition uses a recursion that deletes or contracts an edge.

**Problem.** The Tutte polynomial of a disjoint union of graphs is the product of their Tutte polynomials.

**How the definition helps.** The subset sum factors because each edge subset splits uniquely into one subset from each graph (our own). The exponents add because the sizes and ranks of those two subsets add (our own). Distributing the product of the two sums now gives the required sum. With the recursion definition, one proves multiplicativity by induction using deletion and contraction (our own). The work moves into checking that the subset sum satisfies that recursion.

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “The Tutte polynomial factors into connected components. If G is the union of disjoint graphs H and H′ then T<sub>G</sub> = T<sub>H</sub> · T<sub>H′</sub>”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)

### An edge boundary map gives the cycle space dimension

**Remember:** Subtract the rank of the boundary map from the number of edges.

*True by definition.* MSC 05C38 (Paths and cycles), 05C50. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Use vectors over the two-element field to represent edge sets of a finite simple undirected graph. The boundary map sends an edge set to its vertices of odd degree. Define the cycle space as the kernel of this map, the edge sets with no odd-degree vertices. Another definition takes the span of vectors for individual cycles.

**Problem.** A graph with m edges, n vertices and c connected components has a cycle space of dimension m − n + c.

**How the definition helps.** The kernel definition reduces the dimension to the rank of the boundary map by rank–nullity (our own). The image consists of vertex sets of even size in every component. Each edge has two ends in its component, and the boundary of a path is its two endpoints. Pairing vertices within each component proves that every such even set occurs (our own). These c independent parity conditions give rank n − c. The cycle-span proof instead constructs a basis from a spanning forest. Here the work is computing the image and proving that all even-degree edge sets decompose into cycles (our own).

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

**Definition.** In a finite simple undirected graph, relate edges if they are equal or lie on one simple cycle, which does not repeat vertices. Form a block from the edges in each equivalence class. The other definition uses maximal connected subgraphs with at least three vertices that stay connected after removal of any one vertex. It also counts bridges, edges whose removal increases the number of components, and isolated vertices.

**Problem.** Every edge lies in exactly one block. Distinct blocks can still share a vertex.

**How the definition helps.** The equivalence-class definition gives the edge partition immediately because equivalence classes are disjoint and exhaust the edge set. The key work is transitivity. When two cycles share an edge, another simple cycle can contain the specified edge from each cycle, as the source explains. With maximal subgraphs, one instead proves that distinct blocks cannot share an edge. To connect the two definitions, one must also identify the classes with the maximal subgraphs or bridges (our own). Isolated vertices have no edges and do not affect the partition.

**Wikipedia:** [Biconnected component](https://en.wikipedia.org/wiki/Biconnected_component). It says: “Less obviously, this is a transitive relation: if there exists a simple cycle containing edges e and f, and another simple cycle containing edges f and g, then one can combine these two cycles”

**Sources:** none listed. No primary source with a working link was found.

### Leaving K₀ out of connected graphs makes the exponential formula work

**Remember:** Components are never empty, so the logarithm counts connected graphs.

*Rules out counterexamples.* MSC 05C40 (Connectivity), 05C30, 05A15. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A connected graph has at least one vertex, and any two vertices are joined by a path. The graph with no vertices, K₀, is not counted as connected.

**Problem.** Let G(x) be the exponential generating function of all labelled graphs and C(x) that of connected ones. Then G(x) = exp(C(x)). The same holds for any structure built as a set of connected pieces.

**How the definition helps.** Every graph splits in exactly one way into connected components, and this works only if no component is empty. If K₀ counted as connected, one could add any number of empty components, and the splitting would not be unique (our own remark). In the formula, C(x) then has no constant term, so exp(C(x)) is a well-defined power series. The empty graph appears once, as the set of zero components, through the empty product equal to 1. Taking the logarithm of G(x) then gives C(x). And G(x) is known, since there are 2 to the power n(n − 1)/2 labelled graphs on n vertices.

**Wikipedia:** [Exponential formula](https://en.wikipedia.org/wiki/Exponential_formula), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “or the definition of connected graphs has to be modified not to include K₀”

**Sources:**

- [R. P. Stanley, Enumerative Combinatorics, Volume 2, Cambridge University Press (1999)](https://doi.org/10.1017/CBO9780511609589)

### Requiring more than three vertices keeps the triangle out of Steinitz's theorem

**Remember:** A triangle is not a solid, so 3-connected starts at four vertices.

*Rules out counterexamples.* MSC 05C40 (Connectivity), 05C10, 52B10. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** A graph is 3-connected if it has more than three vertices and stays connected after any two vertices are removed. Steinitz's theorem also restricts to finite simple graphs.

**Problem.** A graph is the graph of a three-dimensional convex polyhedron exactly when it is planar and 3-connected.

**How the definition helps.** The vertex count in the definition rules out the triangle, which would otherwise pass trivially (our own example). Removing any two vertices of a triangle leaves one vertex, which is connected, but no convex polyhedron has three vertices. Simplicity rules out parallel edges, which no polyhedron has. With these conditions the theorem is exact, and the smallest case is the tetrahedron, K₄. The hard direction is still to build a polyhedron from each such graph. Steinitz did this by an induction on reductions, and later proofs use springs or circle packings.

**Wikipedia:** [Steinitz's theorem](https://en.wikipedia.org/wiki/Steinitz%27s_theorem). It says: “A graph is 3-connected if it has more than three vertices and, after the removal of any two of its vertices, any other pair of vertices remain connected by a path.”

**Sources:**

- [B. Grünbaum, Convex Polytopes, Graduate Texts in Mathematics 221, Springer (2003)](https://doi.org/10.1007/978-1-4613-0019-9)
- [E. Steinitz, Polyeder und Raumeinteilungen, Encyclopädie der mathematischen Wissenschaften, Band 3 (Geometrie), Teil IIIAB12 (1922) 1–139](https://gdz.sub.uni-goettingen.de/dms/load/img/?PPN=PPN360609767&DMDID=dmdlog203)

### An incidence factor makes the graph Laplacian positive semidefinite

**Remember:** The Laplacian’s quadratic form is a sum of squares.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** Give each edge of a finite simple undirected graph an arbitrary direction. In the incidence matrix B, each edge gives one column with +1 at one end, −1 at the other and zeros elsewhere. Define the Laplacian as L = BBᵀ. The usual definition is the diagonal matrix of vertex degrees minus the adjacency matrix, which records which vertex pairs share an edge.

**Problem.** The real symmetric matrix L is positive semidefinite, meaning xᵀLx ≥ 0 for every real vector x. This quadratic form is the sum of (xᵤ − xᵥ)² over the edges uv.

**How the definition helps.** The product definition makes positivity immediate because xᵀLx is the squared length of Bᵀx (our own). The entries of Bᵀx are the differences along edges, which gives the sum of squares (our own). The degree-minus-adjacency proof uses the fact that the diagonal entry of each row equals the sum of the magnitudes of the other entries. The work moves into multiplying out BBᵀ to recover the usual matrix (our own).

**Wikipedia:** [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix). It says: “Even though the edges in this definition are technically directed, their directions can be arbitrary, still resulting in the same symmetric Laplacian \|v\| × \|v\| matrix L defined as L = BBᵀ”

**Sources:** none listed. No primary source with a working link was found.

### An incidence factor makes the Laplacian kernel count components

**Remember:** Zero Laplacian energy forces equal values along each edge.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C40. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Give each edge of a finite simple undirected graph an arbitrary direction. The incidence matrix B has one column per edge, with +1 and −1 at its endpoints and zeros elsewhere. Define the Laplacian as L = BBᵀ. The usual definition is the diagonal matrix of vertex degrees minus the adjacency matrix.

**Problem.** The real kernel of the Laplacian has dimension equal to the number of connected components.

**How the definition helps.** The product definition makes the kernel easy to read because xᵀLx equals the squared length of Bᵀx (our own). Thus Lx = 0 exactly when Bᵀx = 0. The last condition says that x has equal values at the ends of every edge. Each component then contributes one free constant. With the usual definition, one can instead show that a vertex where x is largest forces its neighbours to have the same value (our own). The product proof moves the work into verifying the matrix factorization.

**Wikipedia:** [Laplacian matrix](https://en.wikipedia.org/wiki/Laplacian_matrix). It says: “The number of connected components in the graph is the dimension of the nullspace of the Laplacian and the algebraic multiplicity of the 0 eigenvalue.”

**Sources:** none listed. No primary source with a working link was found.

### Excluding trivial cases makes strongly regular graphs those with three eigenvalues

**Remember:** Leave out the trivial cases, and three eigenvalues mark strong regularity.

*Rules out counterexamples. Confidence: medium.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C75. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A graph is strongly regular with parameters (v, k, λ, μ) if it has v vertices, each of degree k. Every two adjacent vertices have λ common neighbours, and every two non-adjacent vertices have μ common neighbours. Disjoint unions of equal complete graphs meet this trivially, and so do their complements, the complete multipartite graphs with equal parts.

**Problem.** A connected regular graph that is not complete is strongly regular exactly when its adjacency matrix has three distinct eigenvalues. Brouwer and van Maldeghem use this as the definition.

**How the definition helps.** Setting aside the disconnected trivial graphs is what lets three eigenvalues mark strong regularity. Two disjoint triangles satisfy the definition with μ = 0 (our own example). But their only eigenvalues are 2 and −1, and 2 has multiplicity 2. A complete graph has only two distinct eigenvalues. The adjacency matrix A satisfies A² = kI + λA + μ(J − I − A), where J is the all-ones matrix. For a connected graph that is not complete, this forces exactly two eigenvalues besides k. Complete multipartite graphs with equal parts are excluded by convention but still have three eigenvalues (our own remark), so the match is not exact.

**Wikipedia:** [Strongly regular graph](https://en.wikipedia.org/wiki/Strongly_regular_graph). It says: “By convention, graphs which satisfy the definition trivially are excluded from detailed studies and lists of strongly regular graphs.”

**Sources:**

- [R. C. Bose, Strongly regular graphs, partial geometries and partially balanced designs, Pacific Journal of Mathematics 13 (1963) 389–419](https://doi.org/10.2140/pjm.1963.13.389)

### Transpose maps make the cut space orthogonal to the cycle space

**Remember:** A kernel is the orthogonal complement of the image of the transpose.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C38. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Work over the two-element field on a finite undirected graph. The boundary matrix B sends each edge to the sum of its endpoints, and the cycle space is its kernel. Define the cut space as the image of Bᵀ. The graph definition instead spans the edge sets that cross between a vertex set and its complement.

**Problem.** The cut and cycle spaces are orthogonal complements. An edge set lies in either space exactly when it meets every set in the other space in an even number of edges.

**How the definition helps.** With these definitions, orthogonality follows from the matrix identity that the kernel of B is the orthogonal complement of the image of Bᵀ (our own). The dot product over the two-element field counts intersections modulo 2. The graph definitions give a direct parity proof in one direction (our own). The reverse direction needs an argument that every edge set meeting cycles evenly is a cut. Here the work is to identify the image of Bᵀ with the graph cuts. Applying Bᵀ to a vertex set gives precisely the edges with one endpoint in it (our own).

**Wikipedia:** [Cycle space](https://en.wikipedia.org/wiki/Cycle_space). It says: “the cycle space and the cut space of the graph (the family of edge sets that span the cuts of the graph) are the orthogonal complements of each other within the edge space.”

**Sources:** none listed. No primary source with a working link was found.

### Colourings as maps to complete graphs make the Gallai–Roy theorem a composition

**Remember:** A colouring is a map to a complete graph.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 05C15, 05C20. arXiv math.CO. Level 2: later undergraduate.

**Definition.** A homomorphism from a graph G to a graph H maps vertices to vertices and sends every edge to an edge. A k-colouring is then a homomorphism to Kₖ, the complete graph on k vertices.

**Problem.** A graph is k-colourable exactly when some orientation of it has no directed path with k + 1 vertices. This is the Gallai–Hasse–Roy–Vitaver theorem.

**How the definition helps.** With colourings as homomorphisms, the theorem follows by combining two simple facts about maps. First, G maps to Kₖ exactly when some orientation of G maps to the transitive tournament on k vertices. That tournament has an arc from i to j whenever i &lt; j. Second, a directed graph with no directed cycle maps to that tournament exactly when it has no directed path with k + 1 vertices. For this, send each vertex to the number of vertices on the longest directed path ending there (our own remark). An orientation with directed cycles needs one more step, which uses a maximal acyclic subgraph (our own remark). Deciding whether a homomorphism exists is still NP-complete for most targets.

**Wikipedia:** [Graph homomorphism](https://en.wikipedia.org/wiki/Graph_homomorphism). It says: “The k-colorings of G correspond exactly to homomorphisms from G to the complete graph Kₖ.”

**Sources:**

- [P. Hell and J. Nešetřil, Graphs and Homomorphisms, Oxford University Press (2004)](https://doi.org/10.1093/acprof:oso/9780198528173.001.0001)

### The extension property makes the countable random graph unique

**Remember:** Every finite wish for neighbours is granted, so only one such graph exists.

*Makes the theorem clean to state or prove.* MSC 05C63 (Infinite graphs), 03C15, 05C80. arXiv math.CO, math.LO. Level 2: later undergraduate.

**Definition.** Take any two disjoint finite sets of vertices U and V. A countable graph has the extension property if some other vertex is always joined to all of U and none of V. The Rado graph is the countable graph with this property.

**Problem.** Join each pair of countably many vertices independently, with a fixed probability strictly between 0 and 1. With probability 1 the result is isomorphic to the Rado graph. So there is essentially one countable random graph.

**How the definition helps.** The extension property is a list of countably many conditions, each of which a random graph meets with probability 1. Each vertex outside U and V succeeds with a fixed positive probability, and there are infinitely many tries. Uniqueness then follows from a back-and-forth argument: the extension property lets one extend a finite isomorphism one vertex at a time in both directions. So the probabilistic statement splits into two short steps. Erdős and Rényi proved the almost-sure result in 1963, and Rado gave an explicit construction in 1964.

**Wikipedia:** [Rado graph](https://en.wikipedia.org/wiki/Rado_graph). It says: “The Rado graph is uniquely defined, among countable graphs, by an extension property that guarantees the correctness of this algorithm”

**Sources:**

- [P. Erdős and A. Rényi, Asymmetric graphs, Acta Mathematica Academiae Scientiarum Hungaricae 14 (1963) 295–315](https://doi.org/10.1007/BF01895716)
- [R. Rado, Universal graphs and universal functions, Acta Arithmetica 9 (1964) 331–340](https://doi.org/10.4064/aa-9-4-331-340)

### Domino tilings as perfect matchings make Hall's theorem decide tileability

**Remember:** Each domino is one edge between a black and a white square.

*True by definition. Confidence: medium.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05B45. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Make a graph with one vertex for each square of the region. Join two vertices when their squares share a side. A domino tiling is then a perfect matching, a set of edges that covers each vertex exactly once.

**Problem.** Color a finite region of squares like a chessboard, with equally many black and white squares. The region has a domino tiling exactly when every set of black squares has at least as many white neighbors.

**How the definition helps.** The matching definition makes the tiling question a direct case of Hall's marriage theorem. It says that a bipartite graph has a matching covering one side exactly when each set on that side has enough neighbors. The grid graph is bipartite, meaning every edge joins the two color classes, because squares that share a side have different colors. With equally many black and white squares, a matching that covers the black squares is perfect. The work goes into Hall's theorem itself. The page gives the matching description, and the use of Hall's theorem is our own.

**Wikipedia:** [Domino tiling](https://en.wikipedia.org/wiki/Domino_tiling). It says: “Equivalently, it is a perfect matching in the grid graph formed by placing a vertex at the center of each square of the region”

**Sources:** none listed. No primary source with a working link was found.

### Allowing parallel edges makes deletion and contraction count spanning trees exactly

**Remember:** Keep the extra edges after contracting, and the count of spanning trees adds up.

*Makes the theorem clean to state or prove.* MSC 05C76 (Graph operations (line graphs, products, etc.)), 05C05, 05C31. arXiv math.CO. Level 2: later undergraduate.

**Definition.** Deleting an edge removes it. Contracting an edge merges its two ends into one vertex and keeps all other edges, so parallel edges and loops may appear. A multigraph may have such parallel edges and loops.

**Problem.** The number of spanning trees satisfies t(G) = t(G minus e) + t(G contract e) for any edge e that is not a loop. The Tutte polynomial and the chromatic polynomial satisfy similar recursions.

**How the definition helps.** If contraction keeps the parallel edges, the spanning trees that use e match the spanning trees of the contracted graph one to one. If we merged parallel edges to stay simple, the formula would fail (our own example). In a triangle, t = 3; deleting an edge leaves a path with t = 1. Contracting gives two vertices joined by two edges, with t = 2, and 1 + 2 = 3. A simple contraction would give one edge, t = 1, and a wrong sum of 2. So the Tutte polynomial is defined for all multigraphs, with loops and bridges as base cases.

**Wikipedia:** [Edge contraction](https://en.wikipedia.org/wiki/Edge_contraction), [Deletion–contraction formula](https://en.wikipedia.org/wiki/Deletion%E2%80%93contraction_formula), [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “As defined below, an edge contraction operation may result in a graph with multiple edges even if the original graph was a simple graph.”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)
- [W. T. Tutte, Graph-polynomials, Advances in Applied Mathematics 32 (2004) 5–9](https://doi.org/10.1016/S0196-8858(03)00041-1)

### Subtracting one from the largest bag gives trees treewidth one

**Remember:** Minus one, so trees score one and forests stay at one.

*True by definition.* MSC 05C83 (Graph minors), 05C75. arXiv math.CO, cs.DM. Level 2: later undergraduate.

**Definition.** A tree decomposition of a graph puts its vertices into bags arranged along a tree. Every edge must lie in some bag, and the bags that hold a given vertex must form a connected subtree. The width is the size of the largest bag minus one. The treewidth is the least width over all tree decompositions.

**Problem.** A graph with at least one edge has treewidth 1 exactly when it is a forest. More generally, the treewidth is one less than the smallest clique number of a chordal graph that contains it. A chordal graph has a chord in every cycle of four or more vertices.

**How the definition helps.** The minus one is chosen so that the scale starts with trees, the simplest graphs with edges. A tree decomposes into bags of two vertices, one bag per edge, so its width is 2 minus 1 = 1. Any cycle forces some bag of three vertices, so graphs with cycles have treewidth at least 2. The same shift makes the complete graph on k + 1 vertices have treewidth k, and the null graph have treewidth −1. The real theorems, such as the duality with brambles and the grid minor theorem, remain hard.

**Wikipedia:** [Treewidth](https://en.wikipedia.org/wiki/Treewidth), [Null graph](https://en.wikipedia.org/wiki/Null_graph). It says: “In this definition, the size of the largest set is diminished by one in order to make the treewidth of a tree equal to one.”

**Sources:**

- [N. Robertson and P. D. Seymour, Graph minors. III. Planar tree-width, Journal of Combinatorial Theory, Series B 36 (1984) 49–64](https://doi.org/10.1016/0095-8956(84)90013-3)
- [R. Halin, S-functions for graphs, Journal of Geometry 8 (1976) 171–186](https://doi.org/10.1007/BF01917434)

### Minimal time windows answer reachability

**Remember:** A larger window needs no record if a smaller one already works.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 68R10. arXiv cs.DS, cs.DM. Level 2: later undergraduate.

**Definition.** In a graph with finitely many timed contacts, a temporal route uses contacts in increasing time order. Its window runs from departure to arrival. For each ordered pair of distinct vertices, store only route windows that contain no strictly smaller route window for the same pair.

**Problem.** A target can be reached from a source inside a query window exactly when that window contains a stored minimal window.

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

**Definition.** Number the vertices of a finite directed graph with real edge weights. For each ordered pair, record the cheapest walk whose interior vertices belong to the first k vertices. Allow an empty walk of cost zero and record infinity if no walk exists.

**Problem.** Assume the graph has no negative cycles. Allow one more interior vertex. The new distance is the smaller of the old distance and the sum of the two old distances through that vertex.

**How the definition helps.** Restricting the allowed interior vertices splits the ordinary shortest-distance problem into two cases at each step. In our own proof, remove cycles from a cheapest walk without raising its cost. The resulting path either avoids the new vertex or visits it once, splitting into two previously allowed paths. Conversely, joining the two old walks gives an allowed walk. The work moves to computing the restricted distances in order.

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

### The infinite Hall theorem needs every set to be finite

**Remember:** Infinitely many boys is fine if each boy knows only finitely many girls.

*Rules out counterexamples.* MSC 05D15 (Transversal (matching) theory), 05C70. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The marriage condition says that, for every k, any k sets of the family together contain at least k elements. For an infinite family, the condition applies to every finite subfamily. In the infinite version, every set in the family must be finite, but the family itself can be infinite.

**Problem.** Hall's marriage theorem: a family of sets has a system of distinct representatives exactly when the marriage condition holds. A system of distinct representatives, also called a transversal, picks one element from each set and never picks the same element twice.

**How the definition helps.** Requiring finite sets removes the counterexample that breaks the infinite case. Philip Hall proved the theorem for finite families. For infinite families, the theorem fails if infinite sets are allowed. Marshall Hall Jr.'s example is A₀ = ℕ and Aᵢ = {i − 1} for i ≥ 1. This family satisfies the marriage condition but has no transversal. When each set must be finite, this example is excluded, and the theorem holds for families of any size. The infinite case still needs a compactness or choice argument (our own remark).

**Wikipedia:** [Hall's marriage theorem](https://en.wikipedia.org/wiki/Hall%27s_marriage_theorem). It says: “Suppose that F = {Aᵢ}ᵢ∈I, is a (possibly infinite) family of finite sets that need not be distinct, then F has a transversal if and only if F satisfies the marriage condition.”

**Sources:**

- [Philip Hall, On representatives of subsets, Journal of the London Mathematical Society 10 (1935) 26–30](https://doi.org/10.1112/jlms/s1-10.37.26)
- [M. Hall Jr., Distinct representatives of subsets, Bulletin of the American Mathematical Society 54 (1948) 922–926](https://doi.org/10.1090/S0002-9904-1948-09098-X)

### Elementary symmetric polynomials work over every ring, power sums need characteristic zero

**Remember:** Elementary symmetric polynomials generate over any ring; power sums need division by integers.

*Rules out counterexamples.* MSC 05E05 (Symmetric functions and generalizations), 13F20. arXiv math.CO, math.AC. Level 2: later undergraduate.

**Definition.** The elementary symmetric polynomial eₖ is the sum of all products of k different variables. The power sum pₖ is x₁ᵏ + ⋯ + xₙᵏ. A polynomial is symmetric when it does not change under any permutation of the variables.

**Problem.** The fundamental theorem of symmetric polynomials says that every symmetric polynomial is a polynomial in e₁, …, eₙ, in exactly one way.

**How the definition helps.** The elementary symmetric polynomials need no division, so the theorem holds over every commutative ring. Over a field of characteristic zero, the power sums generate the same ring, as the paper's Theorem 2.2 states. Over the integers, e₂ = (p₁² − p₂)/2 needs division by 2, so the power sums do not generate (our own example). This is why the elementary basis is the standard choice (our own remark).

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

### A rank formula makes matroid contractions and deletions commute

**Remember:** Subtracting ranks cancels the intermediate terms in successive contractions.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A finite matroid specifies which subsets of E are independent, and r(A) is the largest size of an independent subset of A. Contract T by assigning rank r(A ∪ T) − r(T) to A ⊆ E ∖ T. Deleting T just restricts r to the remaining elements. Another definition tests independence after adjoining a largest independent subset of T.

**Problem.** For disjoint subsets T and U, contracting both in either order equals contraction by T ∪ U. Deleting U and contracting T also commute.

**How the definition helps.** The rank definition reduces successive contractions to a subtraction in which the two intermediate terms r(T) cancel (our own). The final rank is r(A ∪ U ∪ T) − r(U ∪ T). Deleting U does not affect the ranks used in contraction by T, since none of those sets contains elements of U (our own). The independence definition needs a proof that the choice of a largest independent subset of T does not matter. The work moves into proving that the rank formula defines a matroid and agrees with that test.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “If T is a subset of E, the contraction of M by T, written M/T, is the matroid on the underlying set E − T whose rank function is r′(A) = r(A ∪ T) − r(T).”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### Complements of bases make matroid duality an involution

**Remember:** Complement every basis twice to recover the original bases.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A basis of a finite matroid on E is a maximal independent set. Define the dual matroid by declaring a subset of E to be a basis exactly when its complement is an original basis. Another definition specifies the dual rank of S as \|S\| − r(E) + r(E ∖ S). Here r(S) is the largest size of an independent subset of S.

**Problem.** The dual of the dual of a finite matroid is the original matroid.

**How the definition helps.** The basis definition makes the double dual immediate because taking complements twice leaves every basis unchanged (our own). The bases determine all independent sets, since an independent set is any subset of a basis. The rank definition gives another short proof, but it requires substituting the rank formula twice. The work in the basis approach is proving that the complements satisfy the exchange rule for matroid bases.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “It is not difficult to verify that M\* is a matroid and that the dual of M\* is M.”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935) 509–533](https://doi.org/10.2307/2371182)

### In a pregeometry, the exchange condition makes dimension well defined

**Remember:** Exchange lets you swap one generator for another, so all bases have equal size.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 03C45. arXiv math.LO, math.CO. Level 3: graduate.

**Definition.** A pregeometry on a set X is a closure operator cl on subsets of X that is finitary and satisfies the exchange condition. Finitary means that each point of cl(A) is already in cl(F) for some finite F ⊆ A. The exchange condition says: if a ∈ cl(A ∪ {b}), then a ∈ cl(A) or b ∈ cl(A ∪ {a}). A basis of Y is an independent set (a set in which no element is in the closure of the others) whose closure contains Y.

**Problem.** Define one notion of dimension for three cases: the dimension of a vector space, the transcendence degree of an algebraically closed field, and the dimension of a strongly minimal set in model theory. A strongly minimal set is a definable set whose definable subsets are all finite or cofinite, also in every elementary extension.

**How the definition helps.** For any pregeometry, all bases of a set have the same cardinality, so one proof gives a well-defined dimension for all examples. Linear span in a vector space satisfies the exchange condition. So does algebraic closure in an algebraically closed field. The nLab credits the field case to Steinitz, with a footnote that Steinitz's 1913 lemma was about vector spaces. Baldwin and Lachlan's theorem says that model-theoretic algebraic closure on a minimal set is a pregeometry, so such sets get a dimension for free. Proving the exchange condition for each example is still real work.

**nLab:** [geometric stability theory](https://ncatlab.org/nlab/show/geometric+stability+theory). It says: “An independent set A said to be a basis for Y ∈ P X if Y ⊆ cl(A). All bases of Y have the same cardinality, called the dimension of Y.”

**Sources:**

- [J. T. Baldwin, A. H. Lachlan, On strongly minimal sets, Journal of Symbolic Logic 36 (1971) 79–96](https://doi.org/10.2307/2271517)

### Minkowski sums of generalized polymatroids are given by summing their bounds

**Remember:** Add the subset bounds to add the feasible sets.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 90C27. arXiv math.OC, math.CO. Level 3: graduate.

**Definition.** A paramodular pair (p, b) has p supermodular and b submodular on subsets of a finite set. It must also satisfy b(X) − p(Y) ≥ b(X∖Y) − p(Y∖X) for all subsets X and Y. The generalized polymatroid of the pair is the set of vectors x with p(Z) ≤ x(Z) ≤ b(Z) for every subset Z. Here x(Z) is the sum of the coordinates of x in Z.

**Problem.** For paramodular pairs (pⁱ, bⁱ), the Minkowski sum of their generalized polymatroids is the generalized polymatroid of (Σpⁱ, Σbⁱ).

**How the definition helps.** The definition uses only subset sums, which add under vector addition, so the sum lies inside the polymatroid of the summed bounds. The reverse inclusion is the hard part. A vector that meets the summed bounds must split into admissible pieces, by our own account. In our own view, this needs the cross inequality between p and b, which is why the definition includes it. The result goes back to Frank's work.

**Paper or page:** [Integrating Aggregated Electric Vehicle Flexibilities in Unit Commitment Models using Submodular Optimization](https://arxiv.org/abs/2511.11191v1). It says: “In particular, g-polymatroids are stable by Minkowski sum.”

**Sources:**

- [Hélène Arvis, Olivier Beaude, Nicolas Gast, Stéphane Gaubert, Bruno Gaujal, Integrating Aggregated Electric Vehicle Flexibilities in Unit Commitment Models using Submodular Optimization, arXiv:2511.11191v1 (2025)](https://arxiv.org/abs/2511.11191v1)
- [András Frank, Generalized polymatroids (1984)](https://doi.org/10.1016/b978-0-444-86893-0.50021-8)

### Rank axioms make the contraction formula define a matroid

**Remember:** Adding T to both sets preserves the union and intersection rules for rank.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** A finite matroid has an integer rank r(A) for each subset A, with 0 ≤ r(A) ≤ \|A\|. Rank cannot decrease when A grows. Also r(A ∪ B) + r(A ∩ B) ≤ r(A) + r(B), a rule called submodularity. The other definition uses independent sets, with the rule that a larger independent set can supply an element to extend a smaller one.

**Problem.** Let r be a matroid rank on E and let T be a subset of E. Then r′(A) = r(A ∪ T) − r(T) is a matroid rank on E ∖ T. The new matroid is the contraction by T.

**How the definition helps.** The rank definition makes the contraction formula a direct check of inequalities already true for r. Apply submodularity to A ∪ T and B ∪ T to get submodularity for r′. Monotonicity of r gives monotonicity and nonnegativity for r′. Since A misses T, submodularity gives r′(A) ≤ r(A) ≤ \|A\|. This is our own proof. The independence approach instead adjoins a maximal independent subset of T and must check that the result does not depend on that choice. The equivalence of the two axiom systems is the work behind the rank proof.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “If T is a subset of E, the contraction of M by T, written M/T, is the matroid on the underlying set E − T whose rank function is r′(A) = r(A ∪ T) − r(T).”

**Sources:**

- [H. Whitney, On the abstract properties of linear dependence, American Journal of Mathematics 57 (1935)](https://doi.org/10.2307/2371182)

### Rank separators show that matroid duality preserves connectedness

**Remember:** The rank condition for a separator is unchanged by duality.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices). arXiv math.CO. Level 3: graduate.

**Definition.** In a finite matroid on E, r(S) is the largest size of an independent subset of S. A separator is a subset S with r(S) + r(E ∖ S) = r(E). A matroid is connected when only ∅ and E are separators. Another definition requires every pair of distinct elements to lie in a circuit, a minimal dependent set.

**Problem.** A finite nonempty matroid is connected if and only if its dual is connected. The dual has the complements of the original maximal independent sets as its maximal independent sets.

**How the definition helps.** The rank definition makes duality immediate after substitution because the separator condition becomes the same equation for the original matroid (our own). The dual rank of S is \|S\| − r(E) + r(E ∖ S). Adding the dual ranks of S and E ∖ S replaces their sizes by \|E\| (our own). The circuit definition does not give this equation and needs a separate argument. The work moves into the dual rank formula and the equivalence of the separator and circuit definitions.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “A separator of M is a subset S of E such that r(S) + r(E−S) = r(M).”

**Sources:** none listed. No primary source with a working link was found.

### Rank sums make Tutte duality a swap of variables

**Remember:** Complement each subset to swap the two exponents.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C31. arXiv math.CO. Level 3: graduate.

**Definition.** A finite matroid describes independence on a finite set E, and its rank r(S) is the largest size of an independent subset of S. Its bases are its maximal independent sets. Define its Tutte polynomial by summing powers of x − 1 and y − 1 over S ⊆ E. The exponents are r(E) − r(S) and \|S\| − r(S), respectively.

**Problem.** The Tutte polynomial of the dual matroid is the original polynomial with x and y swapped. The dual matroid has the complements of the original bases as its bases.

**How the definition helps.** The subset sum proves duality by matching each subset in the dual with its complement in the original (our own). The dual rank formula makes the two exponents trade places (our own). One can instead use induction with the recursion, since deleting an element in the dual means contracting it in the original (our own). The work moves into deriving the dual rank formula from complements of bases and checking that the subset sum satisfies the recursion.

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid), [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “The rank function of the dual is r\*(S) = \|S\| − r(M) + r(E∖S).”

**Sources:**

- [H. H. Crapo, The Tutte polynomial, Aequationes Mathematicae 3 (1969) 211–229](https://doi.org/10.1007/BF01817442)

### Spanning complements identify the dual of a cycle matroid

**Remember:** Edges that can be removed leave a spanning set behind.

*True by definition. Confidence: medium.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C40. arXiv math.CO. Level 3: graduate.

**Definition.** For a finite connected graph, the cycle matroid has the acyclic edge sets as its independent sets. A set spans a matroid when it contains a maximal independent set, called a basis. Define dual independence by requiring the complement to span the original matroid. In the bond matroid, the minimal dependent sets are the minimal edge sets whose removal disconnects the graph.

**Problem.** The bond matroid of a finite connected graph is the dual of the cycle matroid.

**How the definition helps.** The spanning-complement definition makes dual independence the condition that removing a set leaves the graph connected (our own). The bases of the cycle matroid are spanning trees, which are connected acyclic subgraphs on all vertices. A remaining edge set contains a spanning tree exactly when it stays connected. The minimal failures of dual independence are therefore the circuits specified by the bond definition (our own). The complement-of-bases definition instead first compares the spanning tree complements with the maximal sets that can be removed. The work moves into showing that spanning complements describe precisely the subsets of dual bases (our own).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “A set is independent in M\* if and only if its complement spans M.”

**Sources:** none listed. No primary source with a working link was found.

### Subset sums make the characteristic polynomial a Tutte evaluation

**Remember:** Use the same subsets and ranks in both polynomials.

*True by definition.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 05C31. arXiv math.CO. Level 3: graduate.

**Definition.** For a finite loopless matroid on E, let r(S) be the largest size of an independent subset of S. Loopless means every singleton is independent. Define the characteristic polynomial by summing (−1) to the power \|S\| times λ to the power r(E) − r(S) over all S. Another definition uses flats, the sets whose rank increases whenever an outside element is added.

**Problem.** The characteristic polynomial is T(1 − λ, 0) multiplied by (−1) to the power r(E), where T is the Tutte polynomial.

**How the definition helps.** The subset sums for the two polynomials match term by term after the substitution (our own). In the Tutte sum, the exponents of x − 1 and y − 1 are r(E) − r(S) and \|S\| − r(S). Substituting x = 1 − λ and y = 0 gives an overall sign of (−1) to the power r(E) + \|S\| (our own). The work moves into the proof of the flat formula. Group the signed subset contributions by the smallest flat containing each subset (our own). The cumulative sum for a flat F is the sum of (−1) to the power \|S\| over all S ⊆ F. These sums vanish except for F = ∅, so Möbius inversion recovers the weight of each flat (our own).

**Wikipedia:** [Matroid](https://en.wikipedia.org/wiki/Matroid). It says: “From this definition it is easy to see that the characteristic polynomial is, up to a simple factor, an evaluation of T<sub>M</sub>, specifically, p<sub>M</sub>(λ) = (−1)<sup>r(M)</sup> T<sub>M</sub>(1−λ,0).”

**Sources:**

- [G.-C. Rota, On the foundations of combinatorial theory I. Theory of Möbius functions, Z. Wahrscheinlichkeitstheorie verw. Gebiete 2 (1964) 340–368](https://doi.org/10.1007/BF00531932)

### Rooted maps have no automorphisms, so they are easy to count

**Remember:** Pin down one dart, and nothing can move.

*True by definition.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C30, 05A15. arXiv math.CO. Level 3: graduate.

**Definition.** A combinatorial map describes a graph drawn on a surface by permutations. It is a set D of elements called darts, with permutations that act transitively on D. A rooted map is a map with one chosen dart, the root. Choosing a dart is the same as choosing a vertex, an edge and a face that all touch each other.

**Problem.** Count maps on surfaces, for example triangulations of the plane. Symmetries of a map would make you count the same map more than once.

**How the definition helps.** The root removes all symmetries, so each rooted map is counted once. An automorphism of a rooted map must fix the root. The permutations generate a group that acts transitively on the darts. So every dart is the image of the root under some word in the permutations, the automorphism fixes every dart, and it is the identity. So you count each rooted map exactly once and need no Burnside-type corrections (the averaging over symmetries in Burnside's lemma). Tutte used this idea, starting from rooted triangulations, in his censuses of planar maps. Counting unrooted maps, which can have symmetries, stays harder.

**nLab:** [combinatorial map](https://ncatlab.org/nlab/show/combinatorial+map). It says: “Later I realized that the distinguishing feature and the great advantage of rooted maps is that they have no symmetry. Automorphisms seem to complicate enumerative problems.”

**Sources:**

- [W. T. Tutte, A Census of Planar Triangulations, Canadian Journal of Mathematics 14 (1962)](https://doi.org/10.4153/CJM-1962-002-9)
- [W. T. Tutte, A Census of Planar Maps, Canadian Journal of Mathematics (1963)](https://doi.org/10.4153/CJM-1963-029-x)

### Requiring perfection in every induced subgraph keeps complements perfect

**Remember:** Perfect means perfect in every part, so complements stay perfect.

*Rules out counterexamples.* MSC 05C17 (Perfect graphs). arXiv math.CO. Level 3: graduate.

**Definition.** The chromatic number of a graph is the least number of colours that give adjacent vertices different colours. The clique number is the size of the largest set of pairwise adjacent vertices. A graph is perfect when these two numbers are equal in the graph and in every induced subgraph. An induced subgraph keeps some vertices and all the edges between them.

**Problem.** The perfect graph theorem says that the complement of a perfect graph is perfect. The complement has an edge exactly where the graph has none.

**How the definition helps.** The condition on every induced subgraph stops a large clique from hiding a bad part of the graph. Without it the theorem fails (our own example): take a 5-cycle and a separate triangle. That graph has chromatic number 3 and clique number 3. Its complement joins a 5-cycle to three independent vertices, so it has clique number 3 but chromatic number 4. With the hereditary condition, odd cycles of length at least 5 are not perfect, and such examples are ruled out. The proof of the theorem is still real work. Lovász proved it in 1972, and the strong perfect graph theorem came only in 2006.

**Wikipedia:** [Perfect graph](https://en.wikipedia.org/wiki/Perfect_graph). It says: “A graph is perfect when these numbers are equal, and remain equal after the deletion of arbitrary subsets of vertices.”

**Sources:**

- [L. Lovász, Normal hypergraphs and the perfect graph conjecture, Discrete Mathematics 2 (1972) 253–267](https://doi.org/10.1016/0012-365X(72)90006-4)

### Quasi-transitive orientations are enough to find transitive ones

**Remember:** Ask only for the edge, not its direction, and you lose no graphs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C20 (Directed graphs (digraphs), tournaments), 06A07. arXiv math.CO. Level 3: graduate.

**Definition.** An orientation of a graph gives each edge a direction. It is transitive when arcs a→b and b→c force an arc a→c. It is quasi-transitive when they only force some edge between a and c. A comparability graph is a graph with a transitive orientation, so it comes from a partial order.

**Problem.** Ghouila-Houri's theorem says that a graph has a quasi-transitive orientation exactly when it has a transitive orientation.

**How the definition helps.** The weaker condition is easier to check and to build, but it gives the same class of graphs. So one can recognise comparability graphs with a weaker local test (our own remark). A given quasi-transitive orientation need not be transitive. For example, the directed triangle a→b→c→a is quasi-transitive but not transitive (our own example). The hard part is to turn a quasi-transitive orientation into a transitive one.

**Paper or page:** [Extending Ghouila-Houri's Characterization of Comparability Graphs to Temporal Graphs](https://arxiv.org/abs/2510.06849). It says: “A fundamental result presented by Ghouila-Houri guarantees that any static graph admitting a quasi-transitive orientation also admits a transitive orientation.”

**Sources:**

- [Pierre Charbit, Michel Habib, Amalia Sorondo, Extending Ghouila-Houri's Characterization of Comparability Graphs to Temporal Graphs, arXiv:2510.06849 (2025)](https://arxiv.org/abs/2510.06849)

### Flows with values in a group shorten the six-flow theorem

**Remember:** Let flows take values in a group, and six splits into two and three.

*Makes the theorem clean to state or prove.* MSC 05C21 (Flows in graphs). arXiv math.CO. Level 3: graduate.

**Definition.** A flow on a directed graph puts a value from an abelian group on each edge. At each vertex, the values that come in sum to the values that go out. The flow is nowhere-zero when no edge gets the value 0. A k-flow uses integers strictly between −k and k.

**Problem.** Seymour's theorem says that every bridgeless graph has a nowhere-zero 6-flow. A graph is bridgeless, or 2-edge-connected, when no single edge disconnects it.

**How the definition helps.** Flows with values in a group let one work with the group ℤ₂ × ℤ₃, which has six elements, instead of integer 6-flows. Tutte showed that a graph has a nowhere-zero flow in an abelian group of order k exactly when it has a nowhere-zero k-flow. So the theorem about ℤ₂ × ℤ₃ gives the theorem about 6-flows. The group splits into a ℤ₂ part and a ℤ₃ part, and the proof can find each part separately (our own summary). The 5-flow conjecture of Tutte stays open.

**Wikipedia:** [https://en.wikipedia.org/wiki/Nowhere-zero<sub>flow</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Nowhere-zero_flow). It says: “(Tutte 1950) A graph G has an M-flow if and only if it has a \|M\|-flow.”

**Paper or page:** [A short proof of Seymour's 6-flow theorem](https://arxiv.org/abs/2307.04768). It says: “Every 2-edge-connected digraph has a nowhere-zero ℤ₂ × ℤ₃-flow.”

**Sources:**

- [Matt DeVos, Kathryn Nurse, A short proof of Seymour's 6-flow theorem, arXiv:2307.04768 (2023)](https://arxiv.org/abs/2307.04768)

### A subset sum makes the Tutte polynomial well defined

**Remember:** Sum over all edge sets without choosing an order.

*True by definition.* MSC 05C31 (Graph polynomials). arXiv math.CO. Level 3: graduate.

**Definition.** Let G be a finite graph with vertex set V and edge set E. For A ⊆ E, let k(A) count components of the subgraph with vertices V and edges A. Sum (x − 1) to the power k(A) − k(E) times (y − 1) to the power k(A) + \|A\| − \|V\| over all A. Another definition uses deletion and contraction, which removes an edge or merges its endpoints.

**Problem.** The Tutte polynomial is a polynomial in x and y that does not depend on any order of the edges.

**How the definition helps.** The subset sum makes well-definedness immediate because it uses no order and both exponents are nonnegative. Adding edges can only merge components (our own). At least \|V\| − k(A) edges are needed to connect the vertices within the components (our own). If you start with the recursion, you must show that different choices of edges give the same result. The work moves into checking the recursion for the subset sum. The activity formula counts spanning trees in each component using an order on the edges. Crapo’s equivalence with the activity formula explains why the coefficients in x and y are nonnegative.

**Wikipedia:** [Tutte polynomial](https://en.wikipedia.org/wiki/Tutte_polynomial). It says: “In this definition it is clear that T<sub>G</sub> is well-defined and a polynomial in x and y.”

**Sources:**

- [W. T. Tutte, A contribution to the theory of chromatic polynomials, Canadian Journal of Mathematics 6 (1954) 80–91](https://doi.org/10.4153/CJM-1954-010-9)
- [H. H. Crapo, The Tutte polynomial, Aequationes Mathematicae 3 (1969) 211–229](https://doi.org/10.1007/BF01817442)

### Allowing a few irregular pairs makes Szemerédi's regularity lemma true

**Remember:** Most pairs regular, not all: half graphs make exceptions unavoidable.

*Rules out counterexamples.* MSC 05C35 (Extremal problems in graph theory), 05C75. arXiv math.CO. Level 3: graduate.

**Definition.** The edge density of a pair (A, B) of vertex sets is the fraction of pairs in A × B that are edges. The pair is ε-regular if each X ⊆ A, Y ⊆ B with \|X\| ≥ ε\|A\|, \|Y\| ≥ ε\|B\| has density within ε of it. An ε-regular partition splits the vertices into nearly equal parts, with all but an ε fraction of the pairs of parts ε-regular.

**Problem.** For every ε &gt; 0 and every positive integer m there is a number M with this property. Every graph with at least M vertices has an ε-regular partition into k parts, for some k with m ≤ k ≤ M.

**How the definition helps.** The lemma lets a small fraction of pairs be irregular, because some graphs force irregular pairs. The half graph is the counterexample. It has vertices a₁, …, aₙ and b₁, …, bₙ, with aᵢ joined to bⱼ when i ≤ j (our own description). The page notes that half graphs need many irregular pairs, though only a small fraction of all pairs. Malliaris and Shelah showed that graphs with only small half graphs have partitions with no irregular pairs. The cost of the lemma is the bound on M, which grows as a tower of twos, and Gowers showed this growth is needed.

**Wikipedia:** [Szemerédi regularity lemma](https://en.wikipedia.org/wiki/Szemer%C3%A9di_regularity_lemma). It says: “However, some graphs, such as the half graphs, require many pairs of partitions (but a small fraction of all pairs) to be irregular.”

**Sources:**

- [D. Conlon and J. Fox, Bounds for graph regularity and removal lemmas, Geometric and Functional Analysis 22 (2012) 1191–1256](https://doi.org/10.1007/s00039-012-0171-x)

### A matrix quotient makes the sandpile group order a determinant

**Remember:** The determinant counts the classes of integer vectors in the quotient.

*True by definition.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C57. arXiv math.CO. Level 3: graduate.

**Definition.** Take a finite connected undirected graph without loops and choose a vertex as a sink, where grains can leave. Its Laplacian is the diagonal matrix of vertex degrees minus the adjacency matrix. Remove the sink row and column to get the reduced matrix Δ′. Define the sandpile group as the group of integer vectors modulo integer combinations of the columns of Δ′.

**Problem.** The sandpile group has order det Δ′, which is the number of spanning trees of the graph.

**How the definition helps.** The matrix quotient makes the order a determinant by the general formula for the index of a full-rank integer lattice (our own). The matrix-tree theorem makes det Δ′ positive and identifies it with the number of spanning trees. The other definition uses stable states that can be reached from any stable state by adding grains and toppling. A vertex can topple when it has enough grains to send one along each incident edge. To add states, combine their grains and topple until stable. The work moves into proving that these states form a group isomorphic to the matrix quotient.

**Wikipedia:** [Abelian sandpile model](https://en.wikipedia.org/wiki/Abelian_sandpile_model). It says: “Given the isomorphisms stated above, the order of the sandpile group is the determinant of Δ′, which by the matrix tree theorem is the number of spanning trees of the graph.”

**Paper or page:** [The critical group of a combinatorial map](https://arxiv.org/abs/2308.13342v2). It says: “Let G be a connected, loopless, abstract graph. Then the order of its critical group K(G) is the number of spanning trees of G.”

**Sources:**

- [D. Dhar, Self-organized critical state of sandpile automaton models, Physical Review Letters 64 (1990) 1613–1616](https://doi.org/10.1103/PhysRevLett.64.1613)

### Extension axioms give the zero-one law for random finite graphs

**Remember:** Each first-order sentence about random graphs is almost surely true or almost surely false.

*Makes the theorem clean to state or prove.* MSC 05C63 (Infinite graphs), 03C13, 05C80. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** A first-order sentence about graphs uses variables for vertices, the adjacency relation, equality, the connectives and the quantifiers. The k-extension axiom is about disjoint sets U and V with at most k vertices together. It says that some other vertex is joined to all of U and none of V.

**Problem.** For every first-order sentence, the probability that a uniformly random graph on n vertices satisfies it tends to 0 or to 1 as n grows. This is the zero-one law of Glebskii and coauthors and of Fagin.

**How the definition helps.** The extension axioms reduce the zero-one law to two facts that are easy to check. Each k-extension axiom holds in almost all finite graphs, by a simple count (our own remark). The axioms together have exactly one countable model, the Rado graph (our own summary of the standard proof). So their theory is complete: it proves each sentence or its negation. By compactness, any sentence or its negation follows from finitely many axioms, and those hold with probability tending to 1. The limit value is then 1 exactly when the Rado graph satisfies the sentence.

**Wikipedia:** [Rado graph](https://en.wikipedia.org/wiki/Rado_graph). It says: “The first-order logic sentences that are true of the Rado graph are also true of almost all random finite graphs, and the sentences that are false for the Rado graph are also false for almost all finite graphs.”

**Sources:**

- [R. Fagin, Probabilities on finite models, The Journal of Symbolic Logic 41 (1976) 50–58](https://doi.org/10.2307/2272945)

### The extension property makes every countable graph embed in the random graph

**Remember:** To embed the next vertex, ask for exactly its earlier neighbors.

*True by definition.* MSC 05C63 (Infinite graphs), 03C15, 05C80. arXiv math.CO, math.LO. Level 3: graduate.

**Definition.** The countable random graph, or Rado graph, is defined by the extension property. Take any two disjoint finite sets of vertices. Some vertex outside both is joined to every vertex of the first set and to none of the second. Another definition joins each pair of vertices by an independent fair coin flip.

**Problem.** Every countable simple graph is isomorphic to an induced subgraph of the countable random graph. An induced subgraph keeps exactly the edges between its chosen vertices.

**How the definition helps.** The extension property gives exactly the step needed to embed one more vertex, in our own argument. List the vertices of the countable graph. Each new vertex needs an image joined to the images of its earlier neighbors and to no other earlier image. The extension property supplies such an image outside the earlier images, in our own argument. With the coin-flip definition, the work moves into showing that the extension property holds with probability one, in our own account. There are countably many requests, and each one fails with probability zero, in our own account.

**nLab:** [countable random graph](https://ncatlab.org/nlab/show/countable+random+graph). It says: “there exists a vertex not in either subset which is connected to all the points in one subset and disconnected from the other.”

**Sources:** none listed. No primary source with a working link was found.

### Decision diagrams turn coloring into flow

**Remember:** Replace weights on whole paths by flows along their edges.

*True by definition.* MSC 05C72 (Fractional graph theory, fuzzy graph theory), 05C85. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** A fractional coloring assigns nonnegative weights to sets of pairwise nonadjacent vertices. The sets containing each vertex must have total weight at least one. An exact decision diagram represents precisely these sets by paths from a start node to an end node in a directed acyclic graph. Each path tests every vertex once and includes it exactly when the path takes an edge marked for inclusion.

**Problem.** The minimum total coloring weight equals the least flow from start to end that sends at least one unit through each vertex’s inclusion edges collectively.

**How the definition helps.** Exactness lets us replace weighted sets by weighted paths with identical vertex coverage. In our own explanation, send each set’s weight along a path representing it. Flow adds along shared edges and balances at every intermediate node. Conversely, the flow decomposition theorem splits any such nonnegative flow into weighted paths. Their sets give a fractional coloring with the same total weight.

**Paper or page:** [Fractional Chromatic Numbers from Exact Decision Diagrams](https://arxiv.org/abs/2411.03003v1). It says: “Then the linear relaxation $(F')$ is equivalent to (\\ref{VCLP}).”

**Sources:**

- [Fractional Chromatic Numbers from Exact Decision Diagrams](https://arxiv.org/abs/2411.03003v1)

### The exponential graph turns Hedetniemi's conjecture into a question about one graph

**Remember:** Product into K means a map into the exponential graph.

*Makes the theorem clean to state or prove.* MSC 05C76 (Graph operations (line graphs, products, etc.)), 05C15, 05C60. arXiv math.CO. Level 3: graduate.

**Definition.** A homomorphism G → K maps vertices to vertices and edges to edges. G × H is the categorical product of graphs, also called the tensor product. The exponential graph Kᴳ has all maps from the vertices of G to the vertices of K as vertices. Two maps f and g are adjacent when f(v) is adjacent to g(v′) for every edge vv′ of G.

**Problem.** Hedetniemi's conjecture said that χ(G × H) = min(χ(G), χ(H)). Shitov disproved it in 2019.

**How the definition helps.** The exponential graph changes a statement about all graphs H into a statement about one graph, Kᴳ. A colouring of G × H with k colours is a homomorphism into the complete graph Kₖ (our own remark). So the conjecture for G says that Kₖᴳ is k-colourable when G is not, as the Wikipedia text states. Wikipedia also notes that G × Kₖᴳ is the hardest case: any counterexample G × H gives the counterexample G × Kₖᴳ. Wikipedia credits this reformulation to El-Zahar and Sauer, who proved the case of 3 colours. The easy inequality χ(G × H) ≤ min(χ(G), χ(H)) comes from the projections (our own remark). Shitov's counterexample shows that the full conjecture is false.

**Wikipedia:** [https://en.wikipedia.org/wiki/Hedetniemi%27s<sub>conjecture</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Hedetniemi%2527s_conjecture). It says: “In other words, Hedetniemi's conjecture can be seen as a statement on exponential graphs: for every integer k, the graph Kₖᴳ is either k-colorable, or it contains a loop (meaning G is k-colorable).”

**Paper or page:** [A survey on Hedetniemi's conjecture](https://arxiv.org/abs/2502.16078). It says: “For any graphs G,H,K, G × H → K if and only if H → Kᴳ.”

**Sources:**

- [Xuding Zhu, A survey on Hedetniemi's conjecture, arXiv:2502.16078 (2025)](https://arxiv.org/abs/2502.16078)

### Graphons complete the space of graphs, so graph sequences have limits

**Remember:** Graphons are to dense graphs what real numbers are to fractions.

*Makes the theorem clean to state or prove.* MSC 05C80 (Random graphs (graph-theoretic aspects)), 05C35. arXiv math.CO, math.PR. Level 3: graduate.

**Definition.** A graphon is a symmetric measurable function W from \[0,1\]² to \[0,1\]. Each finite graph gives a graphon as a step function from its adjacency matrix. The cut distance compares two graphons by their largest edge-density difference over rectangles, minimized over relabellings.

**Problem.** Every sequence of finite graphs has a subsequence that converges in cut distance to a graphon. So questions about large dense graphs become questions about one limit object.

**How the definition helps.** Graphons fill the gaps in the space of graphs, as the real numbers fill the gaps in the rationals, so limits exist. For example, random graphs G(n, 1/2) converge with probability 1 to the constant graphon 1/2, which comes from no finite graph (our own example). Compactness of the space of graphons implies a strong form of Szemerédi's regularity lemma. Many notions of convergence for dense graphs turn out to agree with cut distance. The proof of compactness still needs the weak regularity lemma. Sparse graphs all converge to the zero graphon, so they need other limit objects (our own remark).

**Wikipedia:** [Graphon](https://en.wikipedia.org/wiki/Graphon). It says: “This space turns out to be compact. Moreover, it contains the set of all finite graphs, represented by their associated graphons, as a dense subset.”

**Sources:**

- [L. Lovász and B. Szegedy, Limits of dense graph sequences, Journal of Combinatorial Theory, Series B 96 (2006) 933–957](https://doi.org/10.1016/j.jctb.2006.05.002)
- [L. Lovász and B. Szegedy, Szemerédi's lemma for the analyst, Geometric and Functional Analysis 17 (2007) 252–270](https://doi.org/10.1007/s00039-007-0599-6)

### Brambles give an exact certificate for large treewidth

**Remember:** To prove treewidth is large, show one bramble of large order.

*Makes the theorem clean to state or prove.* MSC 05C83 (Graph minors). arXiv math.CO, cs.DM. Level 3: graduate.

**Definition.** A bramble is a family of connected subgraphs that all touch: any two share a vertex or are joined by an edge. Its order is the least number of vertices that meet every member. Treewidth tw(G) measures how far a graph is from a tree; trees have treewidth 1.

**Problem.** The duality theorem of Seymour and Thomas relates brambles and treewidth. A graph has treewidth at least k exactly when it has a bramble of order k + 1.

**How the definition helps.** Treewidth is a minimum over all tree decompositions, so an upper bound needs only one decomposition. A bramble gives a matching lower bound with one object. For example, in a k by k grid, a cross is one row together with one column. The crosses form a bramble of order k (our own example). So the grid has treewidth at least k − 1. The hard part is the duality theorem itself, which says that some bramble always matches the treewidth.

**Wikipedia:** [https://en.wikipedia.org/wiki/Bramble\_(graph<sub>theory</sub>)](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Bramble_%28graph_theory%29). It says: “Seymour and Thomas proved that the order of a bramble (or equivalently, of a haven) characterizes treewidth: if k is the largest possible order among all brambles of a graph, then the graph has treewidth k − 1.”

**Paper or page:** [Combing a Linkage in an Annulus](https://arxiv.org/abs/2207.04798). It says: “A graph G has a bramble of order k+1 if and only if tw(G) ≥ k.”

**Sources:**

- [Petr A. Golovach, Giannos Stamoulis, Dimitrios M. Thilikos, Combing a Linkage in an Annulus, arXiv:2207.04798 (2022)](https://arxiv.org/abs/2207.04798)

### Using minors, not topological minors, makes the Robertson–Seymour theorem true

**Remember:** Allowing contraction lets finitely many forbidden minors describe every minor-closed family.

*Rules out counterexamples.* MSC 05C83 (Graph minors). arXiv math.CO. Level 3: graduate.

**Definition.** A graph H is a minor of a graph G if you can get H from G by deleting vertices, deleting edges and contracting edges. Contracting an edge merges its two ends into one vertex. A topological minor is a stricter relation: a subdivision of H must appear as a subgraph of G. A subdivision of H is a graph that you get when you replace edges of H by paths.

**Problem.** Wagner's conjecture, now the Robertson–Seymour theorem, says this: in every infinite set of finite graphs, one graph is a minor of another. Equivalently, every minor-closed family is defined by finitely many forbidden minors. A family is minor-closed when every minor of a graph in the family is also in the family.

**How the definition helps.** The minor relation is generous enough to remove infinite antichains, so every minor-closed family has a finite set of forbidden minors. An antichain is a set of graphs in which no graph is related to another. For topological minors the analogue of the Robertson–Seymour theorem is false, because that relation has infinite antichains (Ding 1996). Wagner's theorem uses minors: planar graphs are those with no K₅ or K₃,₃ minor. Kuratowski's older version uses subdivisions instead (our own remark). The proof of the Robertson–Seymour theorem is still very hard: it takes twenty papers and more than 500 pages.

**Wikipedia:** [Robertson–Seymour theorem](https://en.wikipedia.org/wiki/Robertson%E2%80%93Seymour_theorem), [Graph minor](https://en.wikipedia.org/wiki/Graph_minor). It says: “The topological minor relation is not a well-quasi-ordering on the set of finite graphs and hence the result of Robertson and Seymour does not apply to topological minors.”

**Sources:**

- [Neil Robertson and Paul D. Seymour, Graph Minors. XX. Wagner's conjecture, Journal of Combinatorial Theory, Series B (2004)](https://doi.org/10.1016/j.jctb.2004.08.001)
- [Guoli Ding, Excluding a long double path minor, Journal of Combinatorial Theory, Series B 66 (1996) 11–23](https://doi.org/10.1006/jctb.1996.0002)

### Optimal eliminations can leave cliques last

**Remember:** Root at the bag containing the clique and eliminate toward it.

*True by definition.* MSC 05C85 (Graph algorithms (graph-theoretic aspects)), 05C83. arXiv cs.DS, cs.DM. Level 3: graduate.

**Definition.** To eliminate a vertex, join every pair of its remaining neighbors and delete it. An order costs one plus the largest remaining neighbor count at any deletion. A tree decomposition puts vertex sets called bags on a tree so that each edge has both ends in some bag. The bags containing each vertex form a nonempty connected subtree.

**Problem.** For any clique, a set of pairwise adjacent vertices, some minimum-cost order eliminates all other vertices first.

**How the definition helps.** A tree decomposition puts the whole clique in one bag, which our own proof saves for last. The minimum possible largest bag size equals the minimum elimination cost. Take a decomposition attaining that minimum. The clique vertices occur in pairwise intersecting subtrees, which share a node in a tree. Root the tree there and repeatedly delete vertices unique to a nonroot leaf bag, then discard that bag. All remaining neighbors of each deleted vertex fit in its bag, including neighbors joined by earlier deletions. In the root bag, delete the vertices outside the clique first.

**Paper or page:** [On Sparsification for Computing Treewidth](https://arxiv.org/abs/1308.3665v1). It says: “There is a minimum-cost elimination order π∗ of G that eliminates all vertices of A before eliminating any vertex of B.”

**Sources:** none listed. No primary source with a working link was found.

### A ratio of alternating determinants makes Schur polynomials symmetric

**Remember:** Swapping variables flips both determinant signs, so the ratio stays fixed.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** A partition λ with at most n parts gives a decreasing list λ₁, …, λₙ, padded with zeros. Define its Schur polynomial by dividing the determinant with entries xᵢ raised to λⱼ + n − j by the determinant for λ = 0. Another definition sums one monomial per filling of the rows of lengths λᵢ by labels from 1 to n. Labels never decrease along rows and strictly increase down columns, and each label i contributes a factor xᵢ.

**Problem.** The determinant ratio is a polynomial invariant under every permutation of the variables. In the filling definition, permuting the counts of the labels leaves the number of fillings unchanged.

**How the definition helps.** The ratio makes symmetry immediate because swapping variables swaps two rows of each determinant, changing both signs. The denominator is the product of the differences xᵢ − xⱼ for i &lt; j. Every difference divides the numerator, since setting the corresponding variables equal gives two equal rows (our own). For the filling definition, a separate bijection can exchange the counts of adjacent labels (our own). The work moves into proving divisibility and showing that the two definitions agree.

**nLab:** [Schur function](https://ncatlab.org/nlab/show/Schur+function). It says: “Then the Schur polynomial attached to λ is the quotient”

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “This is a symmetric function because the numerator and denominator are both alternating, and a polynomial since all alternating polynomials are divisible by the Vandermonde determinant.”

**Sources:** none listed. No primary source with a working link was found.

### Power sums make the symmetric function involution immediate

**Remember:** Apply the same sign twice to recover each generator.

*True by definition. Confidence: medium.* MSC 05E05 (Symmetric functions and generalizations). arXiv math.CO. Level 3: graduate.

**Definition.** Over the rationals, the symmetric function ring uses symmetric polynomials in arbitrarily many variables, compatible under setting extra variables to zero. Its free polynomial generators pₖ sum the kth powers of the variables. Define the ring map ω by multiplying pₖ by (−1) to the power k − 1. Another definition sends the sum eₖ of square-free degree-k monomials to the sum hₖ of all degree-k monomials.

**Problem.** Applying ω twice gives the identity.

**How the definition helps.** The power-sum definition makes the second application of ω cancel the sign on every generator (our own). Starting with eₖ sent to hₖ, one instead uses the relations between the two families to prove that ω sends hₖ back to eₖ. The work moves into deriving the signed action from those relations (our own). This definition also needs the fact that the power sums freely generate the ring over the rationals. Over the integers the power sums do not generate the ring.

**Wikipedia:** [Ring of symmetric functions](https://en.wikipedia.org/wiki/Ring_of_symmetric_functions). It says: “The fact that ω is an involution of Λ<sub>R</sub> follows from the symmetry between elementary and complete homogeneous symmetric functions expressed by the first set of relations given above.”

**Sources:** none listed. No primary source with a working link was found.

### Schur characters make Littlewood–Richardson coefficients nonnegative

**Remember:** Multiply characters and count how often each irreducible piece occurs.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 05E10, 20G05. arXiv math.CO, math.RT. Level 3: graduate.

**Definition.** Use complex polynomial representations of the group of invertible n by n matrices. Each representation assigns matrices acting on a vector space, with entries polynomial in the original matrix entries. Define the Schur polynomial for a partition λ with at most n parts as the trace on diagonal matrices in the corresponding irreducible representation. An irreducible representation has no proper nonzero invariant subspace.

**Problem.** The product of two Schur polynomials in n variables expands in the Schur basis with nonnegative integer coefficients. These are the Littlewood–Richardson coefficients for the partitions with at most n parts.

**How the definition helps.** The character definition makes each coefficient a count of irreducible summands (our own). The product of two traces is the trace on the tensor product, where each original matrix acts on both factors (our own). Over the complex numbers, the tensor product splits into irreducible polynomial representations. The determinant or tableau definition needs a separate proof of nonnegativity. The work here is the splitting theorem and the character formula that identifies the traces with the Schur polynomials.

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “In representation theory they are the characters of polynomial irreducible representations of general linear groups.”

**Sources:** none listed. No primary source with a working link was found.

### Tableaux make Kostka numbers nonnegative

**Remember:** Each coefficient counts fillings of a fixed shape and weight.

*True by definition.* MSC 05E05 (Symmetric functions and generalizations), 05E10. arXiv math.CO, math.RT. Level 3: graduate.

**Definition.** Let λ be a partition, a decreasing list of row lengths allowing ties. A tableau here fills those rows with labels from 1 to n that never decrease along rows and strictly increase down columns. Define the Schur polynomial by adding one monomial per tableau, with a factor xᵢ for each occurrence of i. Another definition takes a ratio of two alternating determinants, which change sign under a swap of variables.

**Problem.** The Schur polynomial expands in monomial symmetric polynomials with nonnegative integer coefficients called Kostka numbers. Each basis polynomial sums all distinct monomials whose exponents are permutations of a fixed list.

**How the definition helps.** The filling definition makes positivity immediate because each monomial coefficient counts fillings with the prescribed label counts. Symmetry makes the coefficients equal for monomials in the same basis polynomial. In the determinant definition, the quotient of signed sums does not show that the coefficients are nonnegative. The work moves into proving that the filling sum equals the determinant ratio, which also gives symmetry.

**Wikipedia:** [Schur polynomial](https://en.wikipedia.org/wiki/Schur_polynomial). It says: “The Kostka numbers K\_λμ are given by the number of semi-standard Young tableaux of shape λ and weight μ.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized permutons are the limit objects for sequences of ordered selections

**Remember:** Represent each selection by a measure on the square and let it converge.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A05 (Permutations, words, matrices), 60B10. arXiv math.PR, math.CO. Level 4: research.

**Definition.** An ordered selection, called an (n, m)-permutation in the paper, lists distinct elements chosen from a finite ordered set. A permuton, the usual limit object for permutations, is a probability measure on the unit square with uniform marginals. A generalized permuton is a probability measure on the unit square whose marginals are not fixed in advance (our own reading of Proposition 3.1). Convergence means convergence of pattern densities and of marginal distributions.

**Problem.** Theorem 1.1 says that every convergent sequence of ordered selections has a generalized permuton as its limit. Theorem 1.2 says that every generalized permuton is such a limit. This generalizes the classical result that permutons are exactly the limits of permutation sequences.

**How the definition helps.** Embedding selections into measures on the square lets compactness of that space supply the limits (our own). Pattern densities and marginals then pass to the limit (our own). The paper shows that several notions of convergence agree on generalized permutons. Theorem 1.2 still needs an explicit approximation of each generalized permuton by finite selections (our own).

**Paper or page:** [Convergence of sequences of ordered selections](https://arxiv.org/abs/2511.12800v1). It says: “We prove that any convergent sequence of ordered selections has a limit which is a generalized permuton. Moreover, any generalized permuton is the limit of a sequence of ordered selections.”

**Sources:**

- [B. Fazekas, I. Fazekas, Convergence of sequences of ordered selections, arXiv:2511.12800 (2025)](https://arxiv.org/abs/2511.12800v1)

### Setting 0⁰ = 1 lets one Eulerian series hold for every n

**Remember:** With 0⁰ = 1, the case n = 1 needs no separate statement.

*Rules out counterexamples. Confidence: medium.* MSC 05A15 (Exact enumeration problems, generating functions), 05A05. arXiv math.CO. Level 4: research.

**Definition.** The convention 0⁰ = 1 says that the empty product is 1. The left side is a generating function built from directed friends-and-seats graphs, which the paper links to generalized Eulerian numbers. The right side is a power series in x.

**Problem.** The generating function identity holds for every positive integer n.

**How the definition helps.** The convention makes the m = 0 term correct at n = 1, so one formula covers every n. At n = 1 the right side is Σ m⁰ xᵐ (our own check). Its term m = 0 must be 1 to give 1/(1 − x). With 0⁰ = 0 or undefined, the formula would need a special case for n = 1. For n ≥ 2 the term m = 0 is 0 in either case (our own remark). The identity itself still needs a counting argument.

**Paper or page:** [Generalized Eulerian Numbers and Directed Friends-and-seats Graphs](https://arxiv.org/abs/2403.00966). It says: “For all positive integers n, we have that ODP(Tourₙ, Cycleₙ)/(1−x)ⁿ = n Σₘ≥₀ mⁿ⁻¹ xᵐ, where, by convention, 0⁰ = 1.”

**Sources:**

- [David Dong, Generalized Eulerian Numbers and Directed Friends-and-seats Graphs, arXiv:2403.00966 (2024)](https://arxiv.org/abs/2403.00966)

### Cobordisms of signed sets make the involution principle a composition

**Remember:** Compose sign-cancelling matchings, and you get a bijection between the ends.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A19 (Combinatorial identities, bijective combinatorics), 18M80. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A signed set is a finite set whose elements each carry a sign + or −. A cobordism between two signed sets is, roughly, a matching that may pair elements across the two sets or cancel elements of opposite sign. Composition joins two cobordisms end to end.

**Problem.** The Garsia–Milne involution principle builds a bijection between two sets from sign-reversing involutions on larger signed sets.

**How the definition helps.** Once cobordisms form a category, the involution principle is just composition of a chain of cobordisms. The abstract says the principle then reveals itself to have little to do with involutions. The bijection at the end comes from following each element along the chain until it reaches the other end (our own summary). The hard part is to show that composition is well defined and associative.

**Paper or page:** [A category for bijective combinatorics](https://arxiv.org/abs/1907.09015). It says: “The category of matchings between finite sets extends to the category of cobordisms of signed sets. A chain of cobordisms that starts and ends with unsigned sets A and B yields a matching from A to B.”

**Sources:**

- [Peter G. Doyle, A category for bijective combinatorics, arXiv:1907.09015 (2019)](https://arxiv.org/abs/1907.09015)

### Fixing the distance from the middle coefficient makes Gaussian polynomial unimodality easy

**Remember:** Track the same distance from the middle as the box grows.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05A30 (\\(q\\)-calculus and related topics), 05A17. arXiv math.NT, math.CO. Level 4: research.

**Definition.** The Gaussian polynomial with parameters N and m is Σ p(n, m, N) qⁿ. Here p(n, m, N) counts partitions of n into at most m parts, each at most N. A perpendicular generating function fixes m and a distance A from the middle degree mN/2. It then sums the coefficient at that distance over all N, as a power series in z.

**Problem.** The coefficients of a Gaussian polynomial are unimodal, which means they rise to the middle and then fall. For small m, this follows easily from the perpendicular generating functions.

**How the definition helps.** Unimodality compares neighbouring coefficients, and a perpendicular series holds one such coefficient for all N at once. For m = 4, Proposition 1.5 gives each series as an explicit rational function. In our own explanation, subtracting the series for distances A + 1 and A gives a series of coefficient differences. Unimodality then says that this difference series has nonnegative coefficients. In our own account, the work is finding the rational forms and checking those signs.

**Paper or page:** [An Orthogonal View of Gaußian Polynomials](https://arxiv.org/abs/2510.14124v1). It says: “For small values of m, unimodality of the coefficients of Gaussian polynomials is easily proved from these generating functions.”

**Sources:**

- [Christian Krattenthaler, Brandt Kronholm, Paul Marsh, An Orthogonal View of Gaußian Polynomials, arXiv:2510.14124v1 (2025)](https://arxiv.org/abs/2510.14124v1)

### Linear weak maps make the direct sum a coproduct of q-matroids

**Remember:** Allow rank to drop, but keep the maps linear.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 18A30. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A q-matroid assigns a rank to each subspace of a finite-dimensional vector space over a finite field, with matroid-like axioms. A linear weak map is a linear map under which the image of each subspace has rank at most that of the subspace. A coproduct of two objects comes with a map from each. Any pair of maps out of the two objects factors uniquely through it.

**Problem.** In the category of q-matroids with linear weak maps, the direct sum of two q-matroids is their coproduct. For each of the paper's five other kinds of maps, some pairs of representable q-matroids have no coproduct.

**How the definition helps.** Linear weak maps let the direct sum play the same universal role it plays for vector spaces. In our own explanation, linearity forces the only possible map out of the direct sum of the underlying spaces. The weak condition then asks only that this map does not raise rank, which the paper proves.

**Paper or page:** [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3), [Coproducts in Categories of q-Matroids](https://arxiv.org/abs/2111.09723v3). It says: “This is the category where the morphisms are linear weak maps, that is, the rank of the image of any subspace is not larger than the rank of the subspace itself.”

**Sources:**

- [Heide Gluesing-Luerssen, Benjamin Jany, Coproducts in Categories of q-Matroids, arXiv:2111.09723 (2023)](https://arxiv.org/abs/2111.09723v3)
- [Heide Gluesing-Luerssen and Benjamin Jany, Coproducts in categories of q-matroids, European Journal of Combinatorics 112 (2023), 103733](https://doi.org/10.1016/j.ejc.2023.103733)

### Scaled ranks make q-polymatroid independence the independence of a q-matroid

**Remember:** Test scaled rank on every subspace.

*Makes the theorem clean to state or prove.* MSC 05B35 (Combinatorial aspects of matroids and geometric lattices), 11T71. arXiv math.CO, cs.IT. Level 4: research.

**Definition.** A q-polymatroid assigns a rational rank ρ to each subspace of a finite-dimensional vector space, with matroid-like axioms. Fix a positive integer μ such that μρ is integer-valued. A space V is μ-independent if μρ(W) ≥ dim W for every subspace W of V.

**Problem.** Define r(V) as the minimum of μρ(W) + dim V − dim W over subspaces W of V. Then r is the rank function of a q-matroid, a q-polymatroid whose ranks are integers. Its independent spaces, those with r(V) = dim V, are exactly the μ-independent spaces.

**How the definition helps.** Testing every subspace is what lets one integer rank function encode the condition. Taking W = 0 shows r(V) ≤ dim V. So r(V) = dim V exactly when μρ(W) ≥ dim W for every W, which is μ-independence. That step is our own reading of the formula. The hard step is proving that r satisfies the q-matroid rank axioms. Then the known properties of q-matroid independent spaces carry over.

**Paper or page:** [Independent Spaces of q-Polymatroids](https://arxiv.org/abs/2105.01802v1), [Independent Spaces of q-Polymatroids](https://arxiv.org/abs/2105.01802v1). It says: “With the aid of an auxiliary q-matroid it is shown that the collection of independent spaces satisfies the same properties as for q-matroids.”

**Sources:**

- [Heide Gluesing-Luerssen, Benjamin Jany, Independent Spaces of q-Polymatroids, arXiv:2105.01802 (2021)](https://arxiv.org/abs/2105.01802v1)
- [Heide Gluesing-Luerssen and Benjamin Jany, Independent Spaces of q-Polymatroids, Algebraic Combinatorics 5 (2022), 727–744](https://doi.org/10.5802/alco.241)

### Rooted forests as presheaves on the natural numbers form a topos

**Remember:** A forest is a list of levels, and each vertex points down to its parent.

*True by definition. Confidence: medium.* MSC 05C05 (Trees), 18F20, 18B25. arXiv math.CO, math.CT. Level 4: research.

**Definition.** A rooted forest is a functor F : ℕᵒᵖ → Set, where ℕ is the ordered set 0 ≤ 1 ≤ 2 ≤ …. F(n) is the set of vertices at height n. The map F(n+1) → F(n) sends each vertex to its parent. A rooted tree is a forest in which F(0) is a single point.

**Problem.** The category of rooted trees, and the category of rooted forests, is a Grothendieck topos. A Grothendieck topos is a category of sheaves on a site, and it behaves much like the category of sets.

**How the definition helps.** With the functor definition, forests form a presheaf category (a category of functors from the opposite of a category to Set), so they form a Grothendieck topos by definition. The category of trees is equivalent to the category of forests: remove the root, or add a new root. So the category of trees is a topos too. Unrooted trees do not have these properties, which is a reason to prefer rooted trees.

**nLab:** [tree](https://ncatlab.org/nlab/show/tree). It says: “The functor description makes it clear that the category of forests is a (presheaf) topos, indeed a Grothendieck topos; therefore the category of trees, which is equivalent, is also a topos.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing multi-edges and non-simple drawings shortens the 4-planar edge bound

**Remember:** A more general setting gave Ackerman's bound a much shorter proof.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 05C10 (Planar graphs; geometric and topological aspects of graph theory), 05C35. arXiv math.CO, cs.CG. Level 4: research.

**Definition.** A graph is k-planar when it has a drawing in the plane in which each edge is crossed at most k times. A drawing is simple when two edges meet at most once. Multi-edges are several edges between the same two vertices.

**Problem.** Ackerman proved that a 4-planar graph on n ≥ 3 vertices has at most 6(n − 2) edges. His proof is long and works for simple graphs with simple drawings. The new proof also allows multi-edges and non-simple drawings, under conditions that the paper states.

**How the definition helps.** Our own guess at why the wider class helps: the proof can redraw and merge edges without leaving the class. The abstract says that the new proof is much shorter than Ackerman's. It also says that the proof relaxes the conditions on the graph and its drawing. The proof moves charge between the faces of the drawing, a method called discharging (our own reading of its lemmas). The discharging steps remain detailed.

**Paper or page:** [A Simplified Proof for the Edge-Density of 4-Planar Graphs](https://arxiv.org/abs/2509.20999). It says: “We provide a much shorter proof while at the same time relaxing the conditions on the graph and its embedding, i.e., allowing multi-edges and non-simple drawings.”

**Sources:**

- [Aaron Büngener, A Simplified Proof for the Edge-Density of 4-Planar Graphs, arXiv:2509.20999 (2025)](https://arxiv.org/abs/2509.20999)

### Generalised colouring numbers give a short proof for exact distance graphs

**Remember:** Bound the weak colouring number, and exact distance graphs are easy to colour.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C12. arXiv math.CO. Level 4: research.

**Definition.** The exact distance-p graph has the same vertices as G, with an edge when two vertices are at distance exactly p in G. In a fixed vertex order, v weakly r-reaches u when some path of length at most r joins them and u is its earliest vertex. The weak r-colouring number is the least, over all orders, of the largest number of vertices that one vertex weakly r-reaches, itself included. A class has bounded expansion when the graphs that one gets by contracting small disjoint subgraphs stay sparse.

**Problem.** For odd p, the chromatic number of the exact distance-p graph is at most the weak (2p − 1)-colouring number of G.

**How the definition helps.** Our own summary: the weak colouring number gives one vertex order in which each vertex weakly reaches few vertices. The proof builds the colouring from this order. This gives a short proof that, for odd p, classes with bounded expansion have exact distance-p graphs of bounded chromatic number. The abstract says that the new proof also gives better bounds. For even p, the bound has an extra factor, the maximum degree. The real input is Zhu's theorem that classes with bounded expansion have bounded weak colouring numbers (our own remark).

**Paper or page:** [Chromatic Numbers of Exact Distance Graphs](https://arxiv.org/abs/1612.02160). It says: “Using the notion of generalised colouring numbers, we give a much simpler proof for the result of Nešetřil and Ossona de Mendez, which at the same time gives significantly better bounds.”

**Sources:**

- [Jan van den Heuvel, H. A. Kierstead and Daniel A. Quiroz, Chromatic numbers of exact distance graphs, Journal of Combinatorial Theory, Series B 134 (2019), 143–163](https://doi.org/10.1016/j.jctb.2018.05.007)

### Raising the independence series to the q-th power counts hypergraph multicolorings

**Remember:** Each of the q factors chooses the vertices of one color.

*True by definition. Confidence: medium.* MSC 05C15 (Coloring of graphs and hypergraphs), 05C65, 05A15. arXiv math.CO. Level 4: research.

**Definition.** A set of vertices of a hypergraph is independent when it contains no whole edge. The multivariate independence series adds, over all independent sets S, the product of the variables xᵥ for v in S. The empty set contributes 1. A multicoloring gives each vertex a set of colors, and no color may be common to all vertices of any edge.

**Problem.** Fix q ≥ 0 and a vector m of nonnegative integers. In the q-th power of the series, the coefficient of the monomial with exponents m counts multicolorings with q colors where each vertex v gets mᵥ colors. The paper proves a more general version for marked hypergraphs, in which some vertices are special.

**How the definition helps.** The definition makes each factor of the power choose one legal color class, so expanding the power lists the colorings directly. In our own explanation, a product of q such choices is a list of q color classes. The exponent of xᵥ then counts the colors at v, and independence is exactly the coloring rule. The empty set lets a color go unused.

**Paper or page:** [Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements](https://arxiv.org/abs/2507.20847v1), [Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements](https://arxiv.org/abs/2507.20847v1). It says: “We show that the coefficients of the q-th power of the marked independence series of a hypergraph coincide with its marked chromatic polynomials in q, thereby generalizing a corresponding result for graphs”

**Sources:**

- [Chaithra P, Shushma Rani, R. Venkatesh, Marked multi-colorings and marked chromatic polynomials of hypergraphs and subspace arrangements, arXiv:2507.20847 (2025)](https://arxiv.org/abs/2507.20847v1)

### A cone of valid configurations makes signed chip-firing copy unsigned firing

**Remember:** Change coordinates with M L⁻¹, and signed firing becomes unsigned firing.

*True by definition.* MSC 05C25 (Graphs and abstract algebra (groups, rings, fields, etc.)), 05C22. arXiv math.CO. Level 4: research.

**Definition.** A signed graph has each edge marked positive or negative. Its reduced Laplacian L is the matrix whose column i records the chip changes when vertex i fires, with the sink vertex left out. M is the reduced Laplacian of the same graph with every edge positive. An integer vector c of chips is valid when M L⁻¹ c has no negative entry.

**Problem.** Write a valid configuration as c = L M⁻¹ x, where x has no negative entry. Then c is stable, reachable, critical or superstable exactly when x has the same property in ordinary chip-firing with matrix M. Superstable means that no nonempty set of vertices can fire together and leave a valid configuration.

**How the definition helps.** The cone is defined through the change of coordinates x = M L⁻¹ c, so each property of c becomes the same property of x. Firing vertex i subtracts column i of L from c. The map M L⁻¹ sends that column to column i of M, so each signed firing move is an unsigned firing move. This short derivation is our own. The paper's main work lies elsewhere, in counting these configurations and computing critical groups of signed graphs.

**Paper or page:** [Chip-firing and critical groups of signed graphs](https://arxiv.org/abs/2306.09315v2), [Chip-firing and critical groups of signed graphs](https://arxiv.org/abs/2306.09315v2). It says: “The valid chip configurations are given by the lattice points of a rational cone determined by Gᵩ and the underlying graph G.”

**Sources:**

- [Matthew Cho, Anton Dochtermann, Ryota Inagaki, Suho Oh, Dylan Snustad, Bailee Zacovic, Chip-firing and critical groups of signed graphs, arXiv:2306.09315 (2024)](https://arxiv.org/abs/2306.09315v2)
- [Matthew Cho, Anton Dochtermann, Ryota Inagaki, Suho Oh, Dylan Snustad, Bailee Zacovic, Chip-Firing and Critical Groups of Signed Graphs, SIAM Journal on Discrete Mathematics (2025)](https://doi.org/10.1137/24m1655287)

### Compatible Eulerian tours give the sandpile group a canonical action without roots

**Remember:** A tour is a cycle with no start, so no root is needed.

*Makes the theorem clean to state or prove.* MSC 05C25 (Graphs and abstract algebra (groups, rings, fields, etc.)), 05C45, 05C10. arXiv math.CO. Level 4: research.

**Definition.** An Eulerian digraph has in-degree equal to out-degree at every vertex. An Eulerian tour traverses each arc once and returns to its start. A ribbon structure fixes a cyclic order of the arcs at each vertex, for example from an embedding in a surface. A compatible Eulerian tour is one that agrees with this cyclic order at every vertex, in a sense that the paper makes precise.

**Problem.** The sandpile group of a digraph is the group of chip configurations up to firing moves. For an Eulerian ribbon digraph, the paper defines an action of this group on compatible Eulerian tours. The action needs no choice of root, and exactly one group element takes any compatible tour to any other.

**How the definition helps.** A tour is a cycle with no first vertex, so an action on tours need not depend on a root. The known rotor-routing action on spanning trees needs a root vertex, and it depends on the root unless the graph is embedded in the plane. The paper cuts a tour at an arc to get a rooted spanning tree and uses the rotor-routing action there. The hard step proves that cutting at different arcs gives the same action. With this, the paper gives a new proof that rotor-routing is root-independent exactly for plane embeddings.

**Paper or page:** [On canonical sandpile actions of embedded graphs](https://arxiv.org/abs/2504.05275v1). It says: “The tour-rotor action is a well-defined, canonical simply transitive action of the sandpile group of an Eulerian ribbon digraph on the set of compatible Eulerian tours.”

**Sources:**

- [Lilla Tóthmérész, On canonical sandpile actions of embedded graphs, arXiv:2504.05275 (2025)](https://arxiv.org/abs/2504.05275v1)
- [Lilla Tóthmérész, On canonical sandpile actions of embedded graphs, Advances in Combinatorics (2026)](https://doi.org/10.19086/aic.2026.6)

### Defining hypergraph parking functions by cuts makes them the superstable configurations

**Remember:** Every set of vertices has a member too poor to fire.

*True by definition.* MSC 05C25 (Graphs and abstract algebra (groups, rings, fields, etc.)), 05C65. arXiv math.CO. Level 4: research.

**Definition.** A hypergraph allows an edge to contain any number of vertices. Fix a sink vertex q and give every other vertex a nonnegative number of chips. For a vertex i in a set T, count the edges that contain i and leave T. A configuration is an H-parking function when every nonempty set T of non-sink vertices has a vertex with fewer chips than this count.

**Problem.** In the paper's chip-firing on hypergraphs, a fired vertex may choose where its chips go inside each edge. A set T is ready to fire exactly when each vertex of T has at least as many chips as its edges that leave T. A configuration is superstable when no nonempty set is ready to fire, and these are exactly the H-parking functions.

**How the definition helps.** The cut definition is the exact negation of the firing test, so the corollary follows at once. The firing test is a separate lemma, Lemma 5.9, and the choice rule for chips is what makes it hold. Once that lemma is proved, “no set is ready to fire” says that every set has a vertex short of chips.

**Paper or page:** [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1), [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1), [Parking functions and chip-firing on hypergraphs](https://arxiv.org/abs/2508.09720v1). It says: “We also show how H-parking functions can be recovered as the superstable configurations in a version of chip-firing on H, where chips have a choice of where to go when fired.”

**Sources:**

- [Timothy Blanton, Anton Dochtermann, Isabelle Hong, SuHo Oh, Zhan Zhan, Parking functions and chip-firing on hypergraphs, arXiv:2508.09720 (2025)](https://arxiv.org/abs/2508.09720v1)

### A Tutte polynomial for embedded graphs keeps duality on every surface

**Remember:** Define the polynomial on the surface, and duality swaps x and y everywhere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C31 (Graph polynomials), 05C10. arXiv math.CO. Level 4: research.

**Definition.** An embedded graph here is a graph drawn on a surface without crossings, with every face a disk. Its dual has one vertex for each face and one edge across each edge. The paper builds a Tutte polynomial T(𝔾; x, y) for such graphs by deletion and contraction rules for embedded graphs. It is also known as the ribbon graph polynomial, or the two-variable Bollobás–Riordan polynomial.

**Problem.** For plane graphs, the Tutte polynomial of the dual is the Tutte polynomial with x and y exchanged. The theorem gives the same identity for graphs on any surface.

**How the definition helps.** The polynomial uses the embedding as well as the graph, so duality of embedded graphs becomes an exchange of the two variables. The ordinary Tutte polynomial of the abstract graph loses this identity off the plane. On the torus, the dual depends on the embedding, not only on the graph (our own remark). So the ordinary Tutte polynomials of a graph and its dual need not be related (our own remark). The work is in the choice of deletion and contraction rules that make a well-defined polynomial.

**Paper or page:** [Constructing a Tutte polynomial for graphs embedded in surfaces](https://arxiv.org/abs/2502.15318). It says: “Let 𝔾 be an embedded graph. Then T(𝔾\*;x,y) = T(𝔾;y,x).”

**Sources:**

- [Iain Moffatt, Constructing a Tutte polynomial for graphs embedded in surfaces, arXiv:2502.15318 (2025)](https://arxiv.org/abs/2502.15318)

### Perron eigenvector weights give an expander mixing lemma for irregular graphs

**Remember:** Weight vertices by the leading eigenvector.

*Makes the theorem clean to state or prove.* MSC 05C48 (Expander graphs), 05C50. arXiv math.CO. Level 4: research.

**Definition.** Let ν be the Perron eigenvector of the adjacency matrix, the unit eigenvector for the largest eigenvalue λ₁ with nonnegative entries. Give each vertex u the weight νᵤ. The weighted edge count between sets S and T sums νᵤνᵥ over edges from u in S to v in T. The weight of a set S is the sum of νᵤ² over u in S.

**Problem.** For any vertex sets S and T, the weighted edge count between them is close to λ₁ times the product of their weights. The error is at most λ times the square roots of the weights of S, T and their complements, multiplied together. Here λ is the largest absolute value among the other eigenvalues.

**How the definition helps.** With these weights, the inner product of ν with ν restricted to S is the weight of S. In our own explanation, split ν restricted to S into its projection onto ν and a perpendicular part. The projections give the main term, λ₁ times the two set weights. The perpendicular parts give the error, at most λ times their lengths. Each length is the square root of the weight of a set times that of its complement, since ν has length one.

**Paper or page:** [A unified framework for the Expander Mixing Lemma for irregular graphs and its applications](https://arxiv.org/abs/2401.07125v2), [A unified framework for the Expander Mixing Lemma for irregular graphs and its applications](https://arxiv.org/abs/2401.07125v2). It says: “we instead propose to use the Perron eigenvector entries as vertex weights, which is a way to regularise the graph.”

**Sources:**

- [Aida Abiad, Sjanne Zeijlemaker, A unified framework for the Expander Mixing Lemma for irregular graphs and its applications, arXiv:2401.07125 (2024)](https://arxiv.org/abs/2401.07125v2)

### Reweighted eigenvalues give vertex expansion Cheeger

**Remember:** Choose the best edge weights, and eigenvalues see vertex expansion.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C48 (Expander graphs), 05C50. arXiv cs.DS, math.CO. Level 4: research.

**Definition.** The vertex expansion ψ of a graph measures how many outside neighbours every small vertex set has, relative to its size. The reweighted eigenvalue λ₂\* is the largest second-smallest Laplacian eigenvalue over all edge weightings. In each weighting, the weighted degree of each vertex is at most 1.

**Problem.** Cheeger's inequality links edge expansion to the second Laplacian eigenvalue λ₂. No eigenvalue of the plain Laplacian controls vertex expansion in the same way (our own remark).

**How the definition helps.** Optimising over edge weights lets an eigenvalue measure vertex expansion, so a Cheeger-type inequality can be stated at all. The paper improves the bound to ψ²/log d ≲ λ₂\* ≲ ψ, with d the maximum degree. The abstract says this is optimal if the small-set expansion conjecture, a standard hardness assumption, is true. So the loss of a log d factor probably cannot be removed. The paper then finds vertex analogues of Trevisan's bipartiteness result, of higher-order Cheeger inequalities and of the improved Cheeger inequality.

**Paper or page:** [Cheeger Inequalities for Vertex Expansion and Reweighted Eigenvalues](https://arxiv.org/abs/2203.06168). It says: “Recently, Olesker-Taylor and Zanetti discovered a Cheeger-type inequality ψ²/log\|V\| ≲ λ₂\* ≲ ψ connecting the vertex expansion ψ of a graph G=(V,E) and the maximum reweighted second smallest eigenvalue λ₂\* of the Laplacian matrix.”

**Sources:**

- [Tsz Chiu Kwok, Lap Chi Lau, Kam Chuen Tung, Cheeger Inequalities for Vertex Expansion and Reweighted Eigenvalues, arXiv:2203.06168 (2022)](https://arxiv.org/abs/2203.06168)

### Graphons with the same spectrum are those with equal cycle densities

**Remember:** Cycle densities are power sums of the nonzero spectrum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C80. arXiv math.CO, math.SP. Level 4: research.

**Definition.** A graphon is a symmetric measurable function W from \[0,1\]² to \[0,1\]. It defines an integral operator on functions on \[0,1\]. Two graphons are cospectral when their operators have the same nonzero eigenvalues, counted with multiplicity.

**Problem.** Two graphons are cospectral exactly when their k-cycle densities agree for every k &gt; 3. The k-cycle density integrates W(x₁,x₂)W(x₂,x₃)⋯W(xₖ,x₁) over all points. Equality for infinitely many odd and infinitely many even k already suffices.

**How the definition helps.** Cycle densities are power sums of the eigenvalues, so cospectral graphons have equal cycle densities at once. In our own explanation, the k-cycle density is the trace of the kth power of the operator. The converse needs a proof that the power sums determine the nonzero eigenvalues with multiplicity. The paper also shows that cospectral graphons need not be limits of cospectral finite graphs.

**Paper or page:** [On cospectral graphons](https://arxiv.org/abs/2411.13229v1), [On cospectral graphons](https://arxiv.org/abs/2411.13229v1), [On cospectral graphons](https://arxiv.org/abs/2411.13229v1). It says: “As in the graph case, we give three equivalent definitions: by equality of spectra, by equality of cycle densities, and by a unitary transformation.”

**Sources:**

- [Jan Hladký, Daniel Iľkovič, Jared León, Xichao Shu, On cospectral graphons, arXiv:2411.13229 (2024)](https://arxiv.org/abs/2411.13229v1)

### The 1-Laplacian makes Cheeger's constant an exact eigenvalue

**Remember:** Absolute values, not squares, turn Cheeger's bounds into an equality.

*Makes the theorem clean to state or prove.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 35P30. arXiv math.SP, math.CO. Level 4: research.

**Definition.** For a function x on the vertices of a graph, let I(x) be the sum over edges of \|x(i) − x(j)\|. The 1-Laplacian Δ₁ is the set-valued derivative of I, because I is not smooth. Its eigenvalues are the critical values of I on the set where the sum of d(i)\|x(i)\| is 1, with d(i) the degree. The Cheeger constant h(G) is the smallest ratio of cut edges to the volume of the smaller side.

**Problem.** For the usual graph Laplacian, the second eigenvalue only bounds the Cheeger constant from above and below. One wants an eigenvalue that equals the Cheeger constant exactly.

**How the definition helps.** Our own reason: the energy I uses absolute values, which is the same shape as the count of cut edges in the Cheeger constant. On the indicator function of a vertex set, I is exactly the number of edges that leave the set (our own remark). So the second eigenvalue problem and the cut problem become one problem (our own). Theorem 5.15 proves μ₂ = h(G) for every connected graph. The usual Laplacian uses squares, and it only gives the two-sided Cheeger inequalities. The proof of Theorem 5.15 still needs the paper's minimax theory for Δ₁ (our own judgement). Computation stays hard, because finding the Cheeger constant is NP-hard in general (our own).

**Paper or page:** [Spectrum of the 1-Laplacian and Cheeger's constant on graphs](https://arxiv.org/abs/1412.1150), [Spectrum of the 1-Laplacian and Cheeger's constant on graphs](https://arxiv.org/abs/1412.1150). It says: “Cheeger's constant, which has only some upper and lower bounds in linear spectral theory, equals to the first non-zero Δ₁ eigenvalue for connected graphs.”

**Sources:**

- [Kung Ching Chang, Spectrum of the 1-Laplacian and Cheeger's constant on graphs, arXiv:1412.1150 (2014)](https://arxiv.org/abs/1412.1150)
- [K. C. Chang, Spectrum of the 1-Laplacian and Cheeger's Constant on Graphs, J. Graph Theory 81, no. 2, 167–207 (2015)](https://doi.org/10.1002/jgt.21871)

### Triangular rank-one perturbations of Laplacians give short spanning-tree counts

**Remember:** Turn the tree-count determinant into a diagonal product.

*Makes the theorem clean to state or prove.* MSC 05C50 (Graphs and linear algebra (matrices, eigenvalues, etc.)), 05C30, 05C05. arXiv math.CO. Level 4: research.

**Definition.** The Laplacian of a graph is the diagonal matrix of degrees minus the adjacency matrix. With edge weights, both matrices use the weights. The Laplacian L admits a triangular rank-one perturbation if L + uvᵀ is triangular for some vectors u, v and some vertex order.

**Problem.** The construction gives short proofs of weighted spanning-tree formulas for threshold graphs and Ferrers graphs. Build a threshold graph by adding vertices that meet all earlier vertices or none. In a Ferrers graph, the neighbor sets on one side of a bipartite graph are nested.

**How the definition helps.** A triangular matrix has determinant equal to the product of its diagonal entries, so det(L + uvᵀ) becomes an explicit product. In our own explanation, the matrix-tree theorem gives det(L + uvᵀ) = τ(∑u)(∑v). Here τ is the weighted number of spanning trees, and ∑u is the sum of the entries of u. The work moves to finding the vertex order and the two vectors. The paper shows this is possible exactly for special 2-threshold graphs.

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

**Definition.** In an oriented graph, pushing a vertex set X reverses every arc with exactly one end in X. A pushable homomorphism is a vertex map that preserves arcs after some pushes. In a signed graph, switching a set X flips the sign of every edge with exactly one end in X. A bipartite graph with parts U and W gets signs from its orientation: positive for arcs from U to W, negative otherwise.

**Problem.** Pair each of two oriented bipartite graphs with its associated signed graph. A vertex map between the oriented graphs is a pushable homomorphism exactly when it is a homomorphism of the signed graphs. A signed homomorphism preserves edges and signs after some switching.

**How the definition helps.** Under the sign rule, pushing a set and switching that set have the same effect, so the two kinds of homomorphism match. In our own explanation, reversing an arc between U and W flips its sign under the rule. The paper still has to check that the correspondence does not depend on which part is called U. The result lets theorems about signed graphs transfer to oriented graphs.

**Paper or page:** [On fundamental results for pushable homomorphisms of oriented graphs](https://arxiv.org/abs/2310.07227v2), [On fundamental results for pushable homomorphisms of oriented graphs](https://arxiv.org/abs/2310.07227v2). It says: “We build a one-to-one correspondence between the equivalence classes of oriented and signed bipartite graphs.”

**Sources:**

- [Tapas Das, Pavan P D, Sagnik Sen, S Taruni, On fundamental results for pushable homomorphisms of oriented graphs, arXiv:2310.07227 (2024)](https://arxiv.org/abs/2310.07227v2)

### Tree homomorphism counts capture colour refinement

**Remember:** Colour refinement counts maps from trees and nothing more.

*Makes the theorem clean to state or prove.* MSC 05C60 (Isomorphism problems in graph theory (reconstruction conjecture, etc.) and homomorphisms (subgraph embedding, etc.)), 68R10. arXiv cs.DS, cs.DM. Level 4: research.

**Definition.** A homomorphism from a graph F to a graph G is a map on vertices that sends edges to edges. Lovász's idea is to describe a graph G by the list of numbers Hom(F,G), one number for each graph F. Two graphs are homomorphism-indistinguishable over a class of graphs when these numbers agree for every F in the class.

**Problem.** Colour refinement is a fast heuristic for graph isomorphism. It repeatedly colours each vertex by the multiset of its neighbours' colours. The question is exactly which pairs of graphs it cannot tell apart.

**How the definition helps.** Homomorphism counts give a precise algebraic name for the information that colour refinement collects. The theorem says that the algorithm fails on G and H exactly when every tree has the same number of homomorphisms into both graphs. The same theorem adds a third equivalent condition, fractional isomorphism, a linear-programming relaxation of isomorphism. Tinhofer proved that fractional isomorphism is equivalent to colour refinement, as the abstract says. The paper lifts this to graphs of treewidth k and the k-dimensional Weisfeiler–Leman algorithm; treewidth measures how close a graph is to a tree. A consequence is a quasi-linear time test for whether some tree has different counts. The work is in the proof of the equivalence, which uses Lovász's theory of homomorphism counts (our own summary).

**Paper or page:** [Lovász Meets Weisfeiler and Leman](https://arxiv.org/abs/1802.08876). It says: “We prove that two graphs G and H are indistinguishable by the color refinement algorithm if and only if, for all trees T, the number Hom(T,G) of homomorphisms from T to G equals the corresponding number Hom(T,H) for H.”

**Sources:**

- [Holger Dell, Martin Grohe, Gaurav Rattan, Lovász Meets Weisfeiler and Leman, arXiv:1802.08876 (2018)](https://arxiv.org/abs/1802.08876)

### Even or infinite cuts characterise cycle partitions of infinite graphs

**Remember:** In infinite graphs, test cuts, not degrees, and allow infinite cuts.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C63 (Infinite graphs), 05C20, 05C45. arXiv math.CO. Level 4: research.

**Definition.** A cut is the set of edges between a vertex set and its complement. A partition into cycles writes every edge in exactly one cycle. In an infinite graph, a cut can have infinitely many edges.

**Problem.** Nash-Williams' theorem says that the edges of any graph split into cycles exactly when every cut is even or infinite. Thomassen conjectured a directed version: every vertex set must have as many edges going in as going out. The paper proves this conjecture.

**How the definition helps.** The condition on cuts is the right replacement for even degrees, so the finite theorem extends to all graphs. For finite graphs, even degrees and even cuts are the same condition (our own remark). In an infinite graph, even degrees are not enough (our own example). A two-way infinite path has degree 2 at each vertex but contains no cycle. One side of a single edge gives a cut with exactly one edge, so the cut condition sees the problem (our own remark). The proof for infinite graphs is still hard, though Thomassen gave a simpler one.

**Paper or page:** [On partitioning the edges of an infinite digraph into directed cycles](https://arxiv.org/abs/1704.08830). It says: “Nash-Williams proved that for an undirected graph G the set E(G) can be partitioned into cycles if and only if every cut has either even or infinite number of edges.”

**Sources:**

- [Attila Joó, On partitioning the edges of an infinite digraph into directed cycles, Advances in Combinatorics (2021)](https://doi.org/10.19086/aic.18702)

### A sum-based hypergraph makes Gowers uniformity equivalent to hypergraph quasirandomness

**Remember:** An edge is a list of points whose sum lands in A.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C65 (Hypergraphs), 11B30, 05D40. arXiv math.CO. Level 4: research.

**Definition.** Let A be a subset of a finite abelian group G, with density δ. Its Cayley hypergraph has vertex set G, and k vertices form an edge when their sum lies in A. The Gowers norm of degree d + 1 averages products of the balanced indicator of A over the corners of cubes in G. A is uniform of degree d when this norm is small.

**Problem.** Take k ≥ d + 1. If A is ε-uniform of degree d, then its Cayley hypergraph is ε-quasirandom of order d. Conversely, quasirandomness with error ε gives uniformity with error 2εᶜ, where c depends on k and d. Quasirandom of order d means that edges are spread evenly relative to every structure built from sets of d vertices.

**How the definition helps.** The sum rule makes the edges a direct copy of membership in A, so additive patterns become edge patterns. In our own explanation, the corners of a cube in G match a pattern of edges that share vertices. The hard work is proving that a small error on one side forces a small error on the other side.

**Paper or page:** [Quasirandom additive sets and Cayley hypergraphs](https://arxiv.org/abs/2305.03012v1), [Quasirandom additive sets and Cayley hypergraphs](https://arxiv.org/abs/2305.03012v1). It says: “we show a strong connection between the notions of Gowers uniformity in the additive setting and discrepancy-type measures of quasirandomness in the hypergraph setting.”

**Sources:**

- [Davi Castro-Silva, Quasirandom additive sets and Cayley hypergraphs, arXiv:2305.03012 (2023)](https://arxiv.org/abs/2305.03012v1)

### Vertex-extendability reduces hypergraph stability to checking one vertex

**Remember:** Stability follows if one extra vertex always fits the extremal pattern.

*Makes the theorem clean to state or prove.* MSC 05C65 (Hypergraphs), 05C35. arXiv math.CO. Level 4: research.

**Definition.** A hypergraph has edges that may contain more than two vertices. Fix a forbidden family and a class of extremal configurations. The family is vertex-extendable if the following holds for every large hypergraph H with high minimum degree that avoids it. If H minus one vertex lies inside an extremal configuration, then H does too.

**Problem.** Suppose the forbidden family has positive Turán density, the limiting edge density of hypergraphs that avoid it. Suppose blowing up vertices into copies keeps hypergraphs free of it, and the extremal class is closed under deleting vertices. Then symmetrized stability and vertex-extendability together give minimum-degree stability.

**How the definition helps.** Vertex-extendability replaces a global structural question with a local question about how one vertex attaches. The main theorem does the global work once, for all problems of this kind. It also needs symmetrized stability, a stability test only for hypergraphs made of groups of interchangeable vertex copies. Minimum-degree stability says every large hypergraph that avoids the family and has nearly extremal minimum degree lies in the extremal class. The paper uses this to give short new proofs of known stability theorems.

**Paper or page:** [A unified approach to hypergraph stability](https://arxiv.org/abs/2104.00167v2), [A unified approach to hypergraph stability](https://arxiv.org/abs/2104.00167v2). It says: “We illustrate our approach by giving new short proofs of hypergraph stability results of Pikhurko, Hefetz-Keevash, Brandt-Irwin-Jiang, Bene Watts-Norin-Yepremyan and others.”

**Sources:**

- [Xizhi Liu, Dhruv Mubayi, Christian Reiher, A unified approach to hypergraph stability, arXiv:2104.00167 (2022). J. Combin. Theory Ser. B 158 (2023), 36-62](https://arxiv.org/abs/2104.00167v2)

### Subtracting labels from their caps turns packing problems into domination problems

**Remember:** Subtract every label from its cap.

*True by definition.* MSC 05C69 (Vertex subsets with special properties (dominating sets, independent sets, cliques, etc.)), 05C70. arXiv math.CO. Level 4: research.

**Definition.** Each vertex v has a cap u(v), and a function f gives v an integer label between 0 and u(v). The closed neighborhood N\[v\] is v together with its neighbors. A packing function satisfies f(N\[v\]) ≤ k(v) for every v. A domination function satisfies f(N\[v\]) ≥ k(v) instead.

**Problem.** Set k′(v) = u(N\[v\]) − k(v). Then the largest total of a packing function for bounds k equals u(V) minus the smallest total of a domination function for bounds k′. Here u(V) is the sum of all caps.

**How the definition helps.** The caps make the map from f to u − f a bijection that reverses every neighborhood inequality. In our own derivation, (u − f)(N\[v\]) = u(N\[v\]) − f(N\[v\]). So f(N\[v\]) ≤ k(v) holds exactly when (u − f)(N\[v\]) ≥ k′(v). The total of u − f is u(V) minus the total of f, so maximizing one total minimizes the other. The paper uses this to transfer complexity results between the two problems.

**Paper or page:** [A unified approach for domination and packing problems in graphs](https://arxiv.org/abs/2501.14789v1), [A unified approach for domination and packing problems in graphs](https://arxiv.org/abs/2501.14789v1). It says: “Interestingly, their associated optimization problems turn out to be equivalent, providing insight to explain the observed coincidences in computational complexity results for graph classes”

**Sources:**

- [E. Hinrichsen, G. Nasini, N. Vansteenkiste, A unified approach for domination and packing problems in graphs, arXiv:2501.14789 (2025)](https://arxiv.org/abs/2501.14789v1)

### Unimodular matchings make optimal matching on infinite random trees well posed

**Remember:** On an infinite tree, maximize the expected weight at the root edge.

*Makes the theorem clean to state or prove.* MSC 05C70 (Edge subsets with special properties (factorization, matching, partitioning, covering and packing, etc.)), 05C80, 60J80. arXiv math.PR, math.CO. Level 4: research.

**Definition.** A unimodular random tree has a random root, here an edge, chosen so that on average the tree looks the same from every edge. A matching is a set of edges with no shared vertex. A matching is unimodular when the tree together with the matching is still unimodular. It is optimal when it maximizes the expected weight of the root edge, counted only if that edge is matched.

**Problem.** Take an edge-rooted unimodular Bienaymé–Galton–Watson tree, a random branching tree, whose offspring law has finite mean. Give the edges independent weights with finite mean and no atoms, so no single value has positive probability. Then an optimal unimodular matching exists, and its law is unique.

**How the definition helps.** The expected weight at the root edge gives a finite quantity to maximize, so optimality makes sense on an infinite tree (our own). The total weight of a matching there is usually infinite (our own). Unimodularity stops a matching from treating the root differently from other edges (our own). With this definition, uniqueness in law can be stated and proved. The paper also shows that this law is the local limit of maximum-weight matchings on finite random graphs. That convergence needs separate work.

**Paper or page:** [Optimal Unimodular Matching](https://arxiv.org/abs/2407.03141v2), [Optimal Unimodular Matching](https://arxiv.org/abs/2407.03141v2). It says: “in law, there is a unique optimal unimodular matching for a given unimodular tree.”

**Sources:**

- [Nathanaël Enriquez, Mike Liu, Laurent Ménard, Vianney Perchet, Optimal Unimodular Matching, arXiv:2407.03141 (2025)](https://arxiv.org/abs/2407.03141v2)

### Each factor's automorphism group embeds in the automorphisms of the free product

**Remember:** Record a position in every factor so factor symmetries extend.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C76 (Graph operations (line graphs, products, etc.)), 05C25. arXiv math.GR, math.CO. Level 4: research.

**Definition.** The free product of connected graphs Γ₁, …, Γₙ is a tree-like graph built from copies of the factors. Each vertex lies in exactly one copy of each factor, as in the Cayley graph of a free product of groups. In our own reading, the construction records a vertex of each factor instead of always gluing at fixed base vertices. For vertex-transitive factors, where symmetries move any vertex to any other, it agrees with earlier definitions.

**Problem.** For every connected factor Γⱼ, the automorphism group of Γⱼ embeds as a topological group in the automorphism group of the free product. The factors need not be vertex-transitive. The paper also gives conditions for the automorphism group of the free product to be non-discrete.

**How the definition helps.** The paper designs the definition so that the automorphism group of the free product is as large as possible. In our own reading, a factor automorphism can then move the recorded vertices and carry the attached copies with it. With gluing at fixed base vertices, only automorphisms fixing those vertices would extend this directly (our own comparison). The paper proves that the extended maps are automorphisms and give a topological embedding.

**Paper or page:** [On free products of graphs](https://arxiv.org/abs/2002.10639v2), [On free products of graphs](https://arxiv.org/abs/2002.10639v2). It says: “The new definition is designed for the automorphism group of the free product to be as large as possible, and we give sufficient criteria for it to be non-discrete.”

**Sources:**

- [Max Carter, Stephan Tornier, George A. Willis, On free products of graphs, AUSTRALASIAN JOURNAL OF COMBINATORICS 78.1 (2020): 154-176](https://arxiv.org/abs/2002.10639v2)

### Bidimensionality removes apices and vortices from the Graph Minors Structure Theorem

**Remember:** Measure the bad part by bidimensionality, and apices and vortices disappear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 05C83 (Graph minors), 05C10. arXiv math.CO. Level 4: research.

**Definition.** A minor comes from a subgraph by contracting edges. The bidimensionality of a vertex set X is the largest k for which the graph has a k × k grid minor rooted at X. Rooted means, roughly, that the grid minor uses X well. Apices and vortices are the extra vertices and the non-embedded pieces in the classical structure theorem.

**Problem.** Graphs with no Kₖ minor are exactly those with a tree decomposition of a special kind, with bounds that depend on k. In each part, removing a set of bounded bidimensionality leaves a graph that embeds in a surface of bounded Euler genus.

**How the definition helps.** One parameter, bidimensionality, replaces two kinds of exceptional structure, so the theorem states more simply. The classical Graph Minors Structure Theorem of Robertson and Seymour needs apex vertices and vortices. The new form also lets one define a surface version of treewidth, as the abstract says. The deep work of the original structure theorem is still used (our own remark).

**Paper or page:** [The Graph Minors Structure Theorem through Bidimensionality](https://arxiv.org/abs/2306.01724). It says: “This notion allows for the following version of the Graph Minors Structure Theorem (GMST) that avoids the use of apices and vortices”

**Sources:**

- [Dimitrios M. Thilikos and Sebastian Wiederrecht, The Graph Minors Structure Theorem through Bidimensionality, arXiv:2306.01724 (2023)](https://arxiv.org/abs/2306.01724)

### Half-integral packing makes the Erdős–Pósa property hold for every graph

**Remember:** Allow each vertex to serve two models.

*Rules out counterexamples.* MSC 05C83 (Graph minors), 05C35. arXiv math.CO. Level 4: research.

**Definition.** A model of a graph H in a host graph G assigns disjoint connected vertex sets to the vertices of H. Sets for adjacent vertices of H must be joined by an edge. In a half-integral packing of models, each vertex of G lies in at most two models. A cover is a set of vertices of G that meets every model of H.

**Problem.** For every graph H there is a function f with the following property. Every graph G has either a half-integral packing of k models of H, or a cover of at most f(k) vertices.

**How the definition helps.** Allowing each vertex to lie in two models restores the packing-or-cover alternative for every H. With disjoint models, Robertson and Seymour showed that the alternative holds exactly when H is planar. Their constructions give counterexamples for every nonplanar H. Liu proved the half-integral version, which confirmed a conjecture of Thomas, and his proof is hard and nonconstructive. The cited paper reports this and studies constructive versions.

**Paper or page:** [Delineating Half-Integrality of the Erdős-Pósa Property for Minors: the Case of Surfaces](https://arxiv.org/abs/2406.16647v1). It says: “Recently, Liu confirmed a conjecture of Thomas and showed that every graph has the half-integral Erdős-Pósa property for minors.”

**Sources:**

- [Christophe Paul, Evangelos Protopapas, Dimitrios M. Thilikos, Sebastian Wiederrecht, Delineating Half-Integrality of the Erdős-Pósa Property for Minors: the Case of Surfaces, arXiv:2406.16647 (2024)](https://arxiv.org/abs/2406.16647v1)
- [Neil Robertson and Paul Seymour, Graph minors. V. Excluding a planar graph, Journal of Combinatorial Theory, Series B (1986)](https://doi.org/10.1016/0095-8956(86)90030-4)

### Requiring pairwise shared vertices makes strict brambles detect cycles exactly

**Remember:** With shared vertices required, order one everywhere means no cycles.

*Rules out counterexamples.* MSC 05C83 (Graph minors), 05C38. arXiv math.CO. Level 4: research.

**Definition.** A strict bramble is a nonempty family of connected subgraphs, each two of which share a vertex. Its order is the least number of vertices needed to meet every member. In an ordinary bramble, two subgraphs joined by an edge also count as touching.

**Problem.** A graph with at least one vertex is a forest exactly when every strict bramble has order one.

**How the definition helps.** Requiring shared vertices lets the Helly property of subtrees apply, so pairwise-meeting subtrees of a tree share a vertex. In a forest this gives every strict bramble order one. For the converse, in our own construction, split a cycle into three nonempty arcs and take the three unions of two arcs. These are connected, meet pairwise, and no vertex lies in all three, so the order is two. Ordinary brambles fail here, since one edge gives two touching single vertices with no common vertex. The paper's harder results describe graphs with larger strict bramble number.

**Paper or page:** [On Strict Brambles](https://arxiv.org/abs/2201.05783v1). It says: “The strict bramble number of G can be seen as a way to extend the notion of acyclicity, departing from the fact that (non-empty) acyclic graphs are exactly the graphs where every strict bramble has order one.”

**Sources:**

- [Emmanouil Lardas, Evangelos Protopapas, Dimitrios M. Thilikos, Dimitris Zoros, On Strict Brambles, arXiv:2201.05783 (2022)](https://arxiv.org/abs/2201.05783v1)
- [Emmanouil Lardas, Evangelos Protopapas, Dimitrios M. Thilikos and Dimitris Zoros, On Strict Brambles, Graphs and Combinatorics 39 (2023), article 24](https://doi.org/10.1007/s00373-023-02618-y)

### Requiring nonempty families makes the cross-intersecting size bound nontrivial

**Remember:** An empty family forces no intersection at all.

*Rules out counterexamples.* MSC 05D05 (Extremal set theory). arXiv math.CO. Level 4: research.

**Definition.** Two families cross-intersect if each set from one meets each set from the other. In a nonempty pairwise cross-intersecting collection, every family has at least one member and each pair of families cross-intersects.

**Problem.** Take nonempty cross-intersecting families A and B of k-element subsets of an n-element set, with n ≥ 2k. Then \|A\| + \|B\| is at most the larger total of two constructions. Either both families are all sets through one point, or A is one set F and B is all k-sets meeting F.

**How the definition helps.** The nonempty condition rules out the trivial answer of one full family and one empty family. In our own example, with n = 5 and k = 2, all ten pairs fit in A when B is empty. With both nonempty, the bound is 8, reached by either construction. The bound for t families is due to Shi, Frankl and Qian, and the cited paper restates it as Corollary 1.6. The hard part is proving that no other choice does better.

**Paper or page:** [Non-empty pairwise cross-intersecting families](https://arxiv.org/abs/2306.03473v2). It says: “If 𝒜₁, 𝒜₂, …, 𝒜ₜ ⊂ \[n\] choose k are non-empty pairwise cross-intersecting families”

**Sources:**

- [Yang Huang, Yuejian Peng, Non-empty pairwise cross-intersecting families, arXiv:2306.03473 (2024)](https://arxiv.org/abs/2306.03473v2)

### Double posets make the antipode of quasisymmetric functions reverse one order

**Remember:** The antipode reverses the first order and gives sign −1 for odd size.

*Makes the theorem clean to state or prove.* MSC 05E05 (Symmetric functions and generalizations), 06A11, 16T05. arXiv math.CO. Level 4: research.

**Definition.** A double poset is a finite set E with two partial orders &lt;₁ and &lt;₂. Consider maps φ from E to the positive integers that weakly increase along &lt;₁. They must strictly increase on pairs e &lt;₁ f with f &lt;₂ e. The generating function adds, for each such map, the product over e of the variable indexed by φ(e).

**Problem.** Suppose the second order is total. Then the antipode sends the generating function of (E, &lt;₁, &lt;₂) to that of (E, &gt;₁, &lt;₂), times −1 when E has odd size. The antipode is the inversion map of the Hopf algebra of quasisymmetric functions, an algebra that also has a rule for splitting elements.

**How the definition helps.** Two independent orders let one recipe describe both sides of the formula, with only the first order reversed. Many classical functions are special cases, including Schur functions and P-partition enumerators. So one antipode formula covers them all. The formula restates a result of Malvenuto and Reutenauer, and the paper gives a new self-contained proof that produces the sign.

**Paper or page:** [Double posets and the antipode of QSym](https://arxiv.org/abs/1509.08355v3), [Double posets and the antipode of QSym](https://arxiv.org/abs/1509.08355v3). It says: “We prove a formula for the antipode of this function that holds under certain conditions (which are satisfied when the second order of the double poset is total, but also in some other cases)”

**Sources:**

- [Darij Grinberg, Double posets and the antipode of QSym, arXiv:1509.08355 (2017). The Electronic Journal of Combinatorics 24(2) (2017), \#P2.22 (published with minor changes to Section 2 and without ancillary file)](https://arxiv.org/abs/1509.08355v3)

### A useless edge makes both path complexes cones, hence contractible

**Remember:** An edge on no path can join every face.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 05C38. arXiv math.CO, math.AT. Level 4: research.

**Definition.** Fix a directed graph with chosen vertices s and t. Its path-free complex consists of the edge sets that contain no directed path from s to t. Its path-missing complex consists of the edge sets whose complement contains such a path. A useless edge lies on no directed path from s to t.

**Problem.** Suppose the graph has a useless edge e and some directed path from s to t. Then adding e to any face of either complex gives another face, so both complexes are cones with apex e. A cone is contractible, so both complexes are contractible.

**How the definition helps.** Membership in either complex depends only on which paths from s to t an edge set contains, and a useless edge lies on none. In our own explanation, adding or removing that edge never creates or destroys such a path. This settles the contractible case of the paper's result that each complex is contractible or homotopy equivalent to a sphere. The harder case, with every edge useful, uses discrete Morse theory, a combinatorial way to simplify complexes.

**Paper or page:** [The path-missing and path-free complexes of a directed graph](https://arxiv.org/abs/2102.07894v3). It says: “Assume that G has a useless edge e. Then, both 𝒫ℱ(G) and 𝒫ℳ(G) are cones with apex e.”

**Sources:**

- [Darij Grinberg, Lukas Katthän, Joel Brewster Lewis, The path-missing and path-free complexes of a directed graph, arXiv:2102.07894 (2025)](https://arxiv.org/abs/2102.07894v3)

### Effective resistance as an orthogonal projection makes Foster's theorem a trace identity

**Remember:** The trace of a projection counts the directions it keeps.

*True by definition.* MSC 05E45 (Combinatorial aspects of simplicial complexes), 05C50, 55U10. arXiv math.CO, math.AT. Level 4: research.

**Definition.** A p-chain is a real combination of oriented p-simplices, such as edges or triangles, and each simplex has a positive weight. The paper defines effective resistance by a bilinear form taken from circuit theory. It proves that the resistance operator ∂\*(∂\*)⁺ is the orthogonal projection onto the chains perpendicular to all cycles. Here a cycle is a chain with zero boundary, ∂\* is the adjoint of the boundary map and ⁺ marks the pseudoinverse.

**Problem.** For a finite weighted simplicial complex and each degree p, the sum of w(σ)·r(σ) over all p-simplices σ equals the rank of the boundary map. Here w(σ) is the weight and r(σ) the effective resistance of σ. For a graph and p = 1 this is Foster's theorem: the sum equals the number of vertices minus the number of connected components.

**How the definition helps.** Once resistance is a projection, the weighted sum is the trace of that projection, the sum of its diagonal entries. In our own explanation, a projection has only the eigenvalues 0 and 1, so its trace equals its rank. Its image is the image of ∂\*, whose dimension is the rank of the boundary map. The real work comes earlier, in showing that the operator is this projection and that its diagonal entries are the products w(σ)·r(σ).

**Paper or page:** [Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties](https://arxiv.org/abs/2511.10749v1), [Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties](https://arxiv.org/abs/2511.10749v1). It says: “The p-th effective resistance operator 𝒯ₚ = ∂ₚ∗(∂ₚ∗)⁺ on chains is the orthogonal projection”

**Sources:**

- [Inés García-Redondo, Claudia Landi, Sarah Percival, Anda Skeja, Bei Wang, Ling Zhou, Effective Resistance in Simplicial Complexes as Bilinear Forms: Generalizations and Properties, arXiv:2511.10749 (2025)](https://arxiv.org/abs/2511.10749v1)
