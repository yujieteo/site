### Prefix codes decode instantly

**Remember:** When you reach a codeword, stop reading that symbol.

*Rules out counterexamples.* MSC 94A45 (Prefix, length-variable, comma-free codes), 68P30. arXiv cs.IT, math.IT. Level 1: early undergraduate.

**Definition.** A binary prefix code assigns distinct nonempty bit strings to symbols. No codeword begins with another codeword. Unique decodability means each complete encoded string splits into codewords in only one way.

**Problem.** With a prefix code, a decoder can emit each symbol as soon as its last bit arrives.

**How the definition helps.** The prefix rule excludes any longer word once a codeword has arrived. Our own counterexample is {0, 01}, which is uniquely decodable but cannot emit a symbol as soon as it reads 0. It still needs a next bit or an end marker. Our own comparison moves the work to constructing a prefix code with suitable lengths, which Kraft’s theorem addresses.

**Wikipedia:** [Prefix code](https://en.wikipedia.org/wiki/Prefix_code). It says: “Prefix codes are also known as prefix-free codes, prefix condition codes and instantaneous codes.”

**Sources:** none listed. No primary source with a working link was found.

### An extra parity bit separates single and double errors

**Remember:** Extend to even weight, so a distance of three becomes four.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 1: early undergraduate.

**Definition.** In a binary Hamming code the smallest number of positions separating two codewords is three. Its extension appends one bit to make the number of ones even.

**Problem.** The extended code can correct every single flip and report every double flip as an error.

**How the definition helps.** Even parity makes each distance even, so every distance of three becomes four (our own argument). Larger distances cannot shrink. A single flip leaves exactly one codeword within one flip. Two flips leave none there, so the decoder reports an error.

**Wikipedia:** [Hamming code](https://en.wikipedia.org/wiki/Hamming_code). It says: “Thus the decoder can detect and correct a single error and at the same time detect (but not correct) a double error.”

**Sources:**

- [Richard W. Hamming, Error Detecting and Error Correcting Codes (1950)](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)

### Even parity detects exactly the odd numbers of bit flips

**Remember:** Each flip toggles parity, and two toggles cancel.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 1: early undergraduate.

**Definition.** Define an even parity code by appending one bit to make the sum of all bits even. Check a received word by adding all its bits modulo two.

**Problem.** An even parity code detects a pattern of bit flips exactly when the number of flips is odd.

**How the definition helps.** Every bit flip switches the sum between even and odd (our own argument). Starting from an even sum, the check fails exactly after an odd number of flips. Two flips can change 000 into the accepted word 110.

**Wikipedia:** [Parity bit](https://en.wikipedia.org/wiki/Parity_bit). It says: “the parity bit is selected so the total number of set bits (including the parity bit) is even”

**Sources:** none listed. No primary source with a working link was found.

### The lightest nonzero word gives a linear code’s distance

**Remember:** Subtract one codeword to turn a pair into a single nonzero word.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 1: early undergraduate.

**Definition.** A linear code is a vector space of words over a finite field. A word’s weight counts its nonzero entries. Define the distance between two words as the weight of their difference.

**Problem.** In a linear code containing two or more words, the smallest distance between distinct words equals the smallest weight of a nonzero codeword.

**How the definition helps.** The differences between distinct codewords are exactly the nonzero codewords (our own argument). Subtraction stays inside the code, and every nonzero word is its own difference from zero. The distance agrees with counting mismatches because subtraction gives zero exactly where the symbols agree.

**Wikipedia:** [Linear code](https://en.wikipedia.org/wiki/Linear_code). It says: “The non-zero codeword with the smallest weight has then the minimum distance to the zero codeword, and hence determines the minimum distance of the code.”

**Paper or page:** [Minimum Distance of Linear Code is Smallest Weight of Non-Zero Codeword](https://proofwiki.org/wiki/Minimum_Distance_of_Linear_Code_is_Smallest_Weight_of_Non-Zero_Codeword). It says: “where w u denotes the weight of u.”

**Sources:** none listed. No primary source with a working link was found.

### Single edits make Hamming distance a metric

**Remember:** Joining two replacement paths gives a path between their endpoints.

*True by definition.* MSC 94B25 (Combinatorial codes). arXiv math.CO, cs.IT. Level 1: early undergraduate.

**Definition.** The Hamming distance between two strings of equal length is the fewest single-symbol replacements that turn one into the other.

**Problem.** Hamming distance is a metric. In particular, passing through a third string cannot shorten the distance.

**How the definition helps.** Joining two sequences of replacements proves the triangle inequality (our own argument). Reversing a sequence preserves its length, and zero replacements work exactly when the strings agree. This agrees with counting mismatches because each differing position needs one replacement.

**Paper or page:** [Hamming Distance is Distance Function](https://proofwiki.org/wiki/Hamming_Distance_is_Distance_Function). It says: “Then d defines a distance function in the sense of a metric space.”

**Sources:**

- [Richard W. Hamming, Error Detecting and Error Correcting Codes (1950)](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)

### Odd repetition makes majority decoding unambiguous

**Remember:** An odd number of binary votes always has a majority.

*Rules out counterexamples.* MSC 94B30 (Majority codes), 94B05. arXiv cs.IT. Level 1: early undergraduate.

**Definition.** An odd binary repetition code sends a bit as 2t + 1 copies, where t is a nonnegative integer. Majority decoding chooses the more frequent bit.

**Problem.** Every received word is within t flips of exactly one word of the odd binary repetition code. Majority vote finds that word.

**How the definition helps.** Odd length guarantees that one bit occurs at least t + 1 times (our own argument). Changing at most t bits therefore reaches its repeated word, while reaching the other takes at least t + 1 changes. With four copies, 0011 ties.

**nLab:** [error correcting code](https://ncatlab.org/nlab/show/error+correcting+code). It says: “The simplest example is the repetition code, where the inclusion is the diagonal on the n-fold Cartesian product”

**Wikipedia:** [Repetition code](https://en.wikipedia.org/wiki/Repetition_code). It says: “If the length of a binary repetition code is odd, then it's a perfect code.”

**Sources:** none listed. No primary source with a working link was found.

### Averaged conditional entropy makes the chain rule an identity

**Remember:** Learn X first, then pay only for what remains of Y.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For discrete X and Y, H(Y\|X) is the mean of H(Y\|X = x), with each positive-probability x weighted by its probability.

**Problem.** The joint entropy splits as H(X,Y) = H(X) + H(Y\|X). For many variables, the joint entropy is the sum of each entropy conditioned on the ones before.

**How the definition helps.** Because p(x,y) = p(x)p(y\|x), the logarithm splits into two terms, and taking expectations gives the chain rule at once. The entropy of Y given one fixed value of X satisfies no such rule (our own). The page warns that this one-value entropy can exceed H(Y), while the average never does.

**Wikipedia:** [Conditional entropy](https://en.wikipedia.org/wiki/Conditional_entropy). It says: “The chain rule follows from the above definition of conditional entropy”

**Sources:** none listed. No primary source with a working link was found.

### Block surprisal turns typicality into a sample average

**Remember:** An independent block’s surprise is the sum of its symbols’ surprises.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** The surprisal of an observed block is −log₂ of its probability. Dividing by the block length gives the surprisal per symbol. Entropy is the mean surprisal of one symbol.

**Problem.** For independent draws from the same finite source, the surprisal per symbol converges in probability to the entropy. For every positive tolerance, the chance of a larger deviation tends to zero.

**How the definition helps.** Taking logarithms converts the product of symbol probabilities into a sum of individual surprisals (our own argument). Dividing by length gives their sample mean. The weak law of large numbers gives the limit without estimating individual block probabilities.

**Wikipedia:** [Asymptotic equipartition property](https://en.wikipedia.org/wiki/Asymptotic_equipartition_property). It says: “The weak law of large numbers gives the asymptotic equipartition property with convergence in probability,”

**Paper or page:** [Khinchin's Law](https://proofwiki.org/wiki/Khinchin's_Law). It says: “where ⟶ᵖ denotes convergence in probability.”

**Sources:**

- [Claude E. Shannon, A Mathematical Theory of Communication (1948)](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

### Conditional divergences make the relative entropy chain rule add

**Remember:** Split the joint probability ratio into a marginal ratio and a conditional ratio.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For positive probability laws p and q on a finite set, relative entropy averages log₂(p/q) under p. Conditional relative entropy compares two joint laws of X and Y. It averages the relative entropies between the conditional laws of Y, weighting each X by its probability under the first law.

**Problem.** The relative entropy of two joint laws equals that of their X marginals plus their conditional relative entropy for Y given X.

**How the definition helps.** Weighting by the first law makes the conditional term exactly the remainder after removing the contribution from X (our own argument). Factor each joint probability into the probability of X times the conditional probability of Y. Taking logarithms and averaging gives the two terms.

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “S(p/q) := ∑ₖ₌₁ⁿ pₖ(log pₖ − log qₖ).”

**Sources:** none listed. No primary source with a working link was found.

### Conditional entropy turns mixing into an entropy increase

**Remember:** With the label hidden, the outcome cannot get easier to predict.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A mixture first chooses a label at random, then draws an outcome from the finite distribution with that label. The conditional entropy given the label is the weighted average of the component entropies.

**Problem.** The entropy of a mixture of finite probability laws is at least the weighted average of their entropies.

**How the definition helps.** The label turns the mixture bound into the inequality that conditioning cannot increase entropy on average (our own argument). Hiding the label gives the mixture entropy, and revealing it gives the weighted average.

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “is concave in the probability mass function p”

**Sources:** none listed. No primary source with a working link was found.

### Conditional information makes the mutual information chain rule telescope

**Remember:** The entropy after the first observation cancels.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For finite variables, I(X;Y) = H(X) − H(X\|Y). Conditional mutual information is I(X;Z\|Y) = H(X\|Y) − H(X\|Y,Z).

**Problem.** Information about X from the pair (Y, Z) equals information from Y plus information from Z given Y.

**How the definition helps.** Adding the two drops cancels the entropy after observing Y (our own argument). Only the initial entropy and the entropy after both observations remain. The entropy chain rule identifies these drops with the usual mean log probability ratios.

**Wikipedia:** [Conditional mutual information](https://en.wikipedia.org/wiki/Conditional_mutual_information). It says: “The chain rule (as derived above) provides two ways to decompose I(X;Y,Z):”

**Sources:** none listed. No primary source with a working link was found.

### Cross entropy measures the cost of using the wrong probabilities

**Remember:** Wrong probabilities add relative entropy to the average log cost.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For finite probability laws p and q, cross entropy averages the cost −log₂ q(x) over draws from p. A possible outcome with q(x) = 0 has infinite cost. Using p for the prediction gives the entropy of p.

**Problem.** The cross entropy of finite laws p and q equals the entropy of p plus the relative entropy from p to q. It equals the entropy of p only when q = p.

**How the definition helps.** Subtracting the mean cost under correct predictions leaves the mean log₂ ratio p(x)/q(x) (our own argument). This is relative entropy, with infinite value when a possible outcome receives zero probability. Gibbs’ inequality gives the equality condition.

**Wikipedia:** [Cross-entropy](https://en.wikipedia.org/wiki/Cross-entropy). It says: “H(p, q) = H(p) + Dₖₗ(p ∥ q),”

**Sources:** none listed. No primary source with a working link was found.

### Defining information as minus log probability makes independent information add

**Remember:** Probabilities multiply, logarithms add, so information adds.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For an event of probability 0 &lt; p ≤ 1, its surprisal is I(p) = −log p. Discrete entropy is the expected surprisal of the observed outcome.

**Problem.** The information from two independent events is the sum of their information, and the entropy of independent random variables is additive. Conversely, every twice continuously differentiable decreasing I with I(1) = 0 and this additivity is a constant multiple of −log p.

**How the definition helps.** Taking logs of independent probabilities gives additive surprisal, and averaging gives additive entropy (our own). Conversely, differentiate I(uv) = I(u) + I(v) in v at one to obtain uI′(u) = I′(1) (our own). Integration using I(1) = 0 gives I(u) = I′(1) log u, with the natural logarithm (our own).

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “In fact, the only possible values of I are I(u) = k log u for k&lt;0.”

**Sources:**

- [C. E. Shannon, A Mathematical Theory of Communication, Bell System Technical Journal 27 (1948)](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Error flags reveal Fano’s bound

**Remember:** One bit marks the error, then only wrong choices remain.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy), 94B70. arXiv math.IT. Level 2: later undergraduate.

**Definition.** Let X be a message from a set of M possibilities, with M at least two. Let X̃ guess it from the same set. Add a flag E that says whether the guess is wrong.

**Problem.** The uncertainty remaining about X given X̃ is at most h(p) + p log₂(M − 1) bits. Here p is the error probability, and h(p) is the entropy of a bit that equals one with probability p.

**How the definition helps.** The flag is determined by X and X̃, so the chain rule gives H(X\|X̃) = H(E\|X̃) + H(X\|E,X̃). Conditioning bounds the first term by h(p) (our own). A correct guess determines X, while an error leaves at most M − 1 possibilities. Averaging gives at most p log₂(M − 1) for the second term (our own).

**Wikipedia:** [Fano's inequality](https://en.wikipedia.org/wiki/Fano%27s_inequality). It says: “Consider H(E,X\|X̃). We can use the chain rule for entropies to expand this in two different ways”

**Sources:** none listed. No primary source with a working link was found.

### Independent collision entropies add

**Remember:** Independent matches multiply, so their collision entropies add.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The collision entropy of a finite law is minus the logarithm of the chance that two independent draws agree. The Rényi formula of order two instead uses a sum of squared outcome probabilities.

**Problem.** The collision entropy of a pair of independent finite variables is the sum of their collision entropies.

**How the definition helps.** A match between pairs requires a match in both independent components. Our own derivation multiplies the two match probabilities and then takes minus the logarithm. Our own comparison puts the work into identifying the match probability with the sum of squared probabilities.

**nLab:** [collision entropy](https://ncatlab.org/nlab/show/collision+entropy). It says: “hence is the negative logarithm of the "collision probability", i.e., of the probability that two independent random variables, both described by p, will take the same value.”

**Sources:** none listed. No primary source with a working link was found.

### Mutual information as divergence vanishes exactly at independence

**Remember:** The joint law equals the product law exactly at independence.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A15. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Mutual information I(X; Y) is the relative entropy of the joint law from the product of the two separate laws. Relative entropy averages the log density ratio under the first law, or is infinite if that law has no density relative to the second. For finite-valued variables, an alternative definition is the entropy of X minus its average entropy given Y.

**Problem.** Mutual information is nonnegative and is zero exactly when X and Y are independent. It also stays the same if we swap X and Y.

**How the definition helps.** The divergence definition makes independence the equality case because equality of the two laws means independence. Gibbs’ inequality supplies the work by showing that relative entropy is nonnegative and vanishes only for equal laws (our own). Swapping coordinates preserves both laws’ density ratio, so the value is unchanged (our own). The entropy-difference formula hides symmetry until we write the joint entropy in both orders (our own).

**Wikipedia:** [Mutual information](https://en.wikipedia.org/wiki/Mutual_information). It says: “Notice, as per property of the Kullback–Leibler divergence, that I(X;Y) is equal to zero precisely when the joint distribution coincides with the product of the marginals, i.e. when X and Y are independent”

**Sources:** none listed. No primary source with a working link was found.

### Mutual information as relative entropy shows conditioning reduces entropy

**Remember:** Mutual information measures distance from independence, so it is never negative.

*True by definition.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** Mutual information is the relative entropy of the joint law from the product of its marginals. For discrete variables it averages log(p(x,y)/(p(x)p(y))) over pairs with positive joint probability.

**Problem.** Mutual information is nonnegative and vanishes exactly at independence. For discrete variables with finite H(X), this gives H(X) ≥ H(X\|Y).

**How the definition helps.** Written as a relative entropy, mutual information inherits nonnegativity and its equality case from Gibbs' inequality, so both facts come for free. The page says that I(X;Y) is zero precisely when the joint distribution equals the product of the marginals. The identity I(X;Y) = H(X) − H(X\|Y) then turns nonnegativity into the statement that conditioning reduces entropy. What stays hard is Gibbs' inequality itself, which needs Jensen's inequality for the convex function −log.

**Wikipedia:** [Mutual information](https://en.wikipedia.org/wiki/Mutual_information), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Because I(X;Y) is non-negative, consequently, H(X) ≥ H(X∣Y).”

**Sources:**

- [S. Kullback and R. A. Leibler, On Information and Sufficiency, Annals of Mathematical Statistics 22 (1951)](https://doi.org/10.1214/aoms/1177729694)

### Mutual information survives a change of variables, but differential entropy does not

**Remember:** Information measured by comparing two distributions does not care about the units.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Mutual information is the relative entropy of the joint law from the product of its marginals. This averages the log density ratio under the joint law and equals infinity if absolute continuity fails.

**Problem.** For real random variables, discrete mutual information converges to mutual information along refining finite partitions generating each Borel σ-algebra. Separate homeomorphisms preserve mutual information. Differential entropy, when finite, shifts under rescaling and can be negative.

**How the definition helps.** The relative entropy approximation theorem gives the partition limit, and homeomorphisms transport corresponding partitions bijectively (our own). For a density, rescaling by a positive factor a adds log a to differential entropy (our own). A uniform law on an interval shorter than one has negative differential entropy (our own).

**Wikipedia:** [Differential entropy](https://en.wikipedia.org/wiki/Differential_entropy), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Unlike the discrete analog, the differential entropy has an offset that depends on the units used to measure X.”

**Sources:**

- [Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal 27, 379–423.](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Normalizing the convex function makes relative entropy nonnegative

**Remember:** Subtract the tangent at one to make every term nonnegative.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For finite probability laws p and strictly positive q, define relative entropy as the sum of q times f(p/q) over outcomes. Use f(t) = t ln t − t + 1, with f(0) = 1.

**Problem.** Relative entropy is nonnegative and is zero exactly when the two laws agree.

**How the definition helps.** The adjusted function makes every summand nonnegative (our own argument). Strict convexity puts t ln t above its tangent t − 1 except at one. The adjustment leaves the usual log-ratio sum unchanged because both probability laws sum to one.

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “S(p/q) := ∑ₖ₌₁ⁿ pₖ(log pₖ − log qₖ).”

**Wikipedia:** [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Relative entropy is always non-negative”

**Sources:**

- [Solomon Kullback and Richard A. Leibler, On Information and Sufficiency (1951)](https://doi.org/10.1214/aoms/1177729694)

### The convention 0 log 0 = 0 makes entropy continuous

**Remember:** An outcome that never happens adds no uncertainty.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For a law p on a finite set, Shannon entropy is H(p) = −∑ₓ p(x) log p(x). Assign zero to each summand with p(x) = 0.

**Problem.** With the convention, entropy is a continuous function on the whole set of probability distributions, including its boundary. Also, adding outcomes of probability zero does not change the entropy.

**How the definition helps.** The convention fills the only gap in the formula with its limit value, so entropy has no exceptions at the boundary of the simplex. Without it, the entropy of a point mass would be undefined (our own). The fact that entropy is zero exactly for a certain outcome would then need special cases (our own).

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “the value of the corresponding summand ... is taken to be 0, which is consistent with the limit”

**Sources:** none listed. No primary source with a working link was found.

### The uniform law turns an entropy bound into nonnegative divergence

**Remember:** Subtract entropy from log₂ n to measure departure from uniformity.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For probabilities p on n outcomes, entropy is the mean of −log₂ p over outcomes with positive probability. Relative entropy to the uniform law is the mean of log₂(np) over those same draws.

**Problem.** Entropy on n outcomes is at most log₂ n bits. Equality holds exactly for the uniform law.

**How the definition helps.** The constant reference probability turns relative entropy into exactly log₂ n minus entropy (our own argument). Gibbs’ inequality makes this gap nonnegative and gives equality exactly when the two laws agree.

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “Uniform probability yields maximum uncertainty and therefore maximum entropy.”

**Sources:** none listed. No primary source with a working link was found.

### Types separate counts from probabilities

**Remember:** Count words once, then multiply by one word’s probability.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A29. arXiv math.IT. Level 2: later undergraduate.

**Definition.** Group length-n words by type, the vector of their symbol frequencies. Let T be the class of words of type Q. Draw the symbols independently from a positive law P.

**Problem.** The probability of T under P equals its probability under Q times 2 raised to −nD. Here D is the sum of Q(s) log₂(Q(s)/P(s)) over symbols s with positive frequency.

**How the definition helps.** All words of type Q have the same probability ratio under P and Q (our own). Each contains nQ(s) copies of symbol s, so independence gives log₂(P(word)/Q(word)) = −nD (our own). Summing over T preserves that common factor (our own).

**Wikipedia:** [Method of types](https://en.wikipedia.org/wiki/Method_of_types). It says: “The sets of sequences having empirical distribution Q, are called the type classes”

**Sources:** none listed. No primary source with a working link was found.

### Defined by mutual information, channel capacity adds over independent channels

**Remember:** Maximize mutual information over input distributions.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)), 94A40. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** A channel is a conditional distribution p(y\|x) of output given input. Its capacity is C = sup I(X;Y), the supremum of the mutual information between input and output over all input distributions.

**Problem.** For two independent channels used side by side, the capacity of the product channel equals the sum of the two capacities.

**How the definition helps.** Independent input laws give additive mutual information, hence the lower bound after taking suprema (our own). For arbitrary inputs, the chain rule and data processing give I(X₁,X₂;Y₁,Y₂) ≤ I(X₁;Y₁) + I(X₂;Y₂) for the product channel (our own). Each term is bounded by its channel capacity (our own).

**Wikipedia:** [Channel capacity](https://en.wikipedia.org/wiki/Channel_capacity). It says: “Channel capacity is additive over independent channels. It means that using two independent channels in a combined manner provides the same theoretical capacity as using them independently.”

**Sources:**

- [C. E. Shannon, A Mathematical Theory of Communication, Bell System Technical Journal 27 (1948)](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### The information maximum gives a short channel coding converse

**Remember:** Each use conveys at most C bits about the message.

*Makes the theorem clean to state or prove.* MSC 94A24 (Coding theorems (Shannon theory)), 94A17. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For a finite channel, mutual information measures how much observing the output reduces uncertainty about the input, in bits. Define information capacity C as the maximum of this quantity over input distributions.

**Problem.** On a finite memoryless channel, codes sending equally likely messages at a fixed rate above C bits per use cannot achieve vanishing average error.

**How the definition helps.** Maximizing over input laws gives the same upper bound C at every use (our own argument). Memorylessness means each output depends only on its own input. The entropy chain rule then bounds the information conveyed in n uses by nC. Fano’s inequality implies that vanishing error would require at least the message rate in bits of information per use in the limit.

**Wikipedia:** [Noisy-channel coding theorem](https://en.wikipedia.org/wiki/Noisy-channel_coding_theorem). It says: “If R &gt; C, an arbitrarily small probability of error is not achievable.”

**Sources:**

- [Claude E. Shannon, A Mathematical Theory of Communication (1948)](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

### Arithmetic codes as grid intervals stay within two bits of entropy

**Remember:** Fit a whole binary grid cell inside each block’s probability interval.

*True by definition. Confidence: low.* MSC 94A29 (Source coding), 94A45. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Partition \[0,1) into half-open intervals, one per positive-probability block, each of length equal to its probability. Each binary word of length k represents the half-open dyadic interval of width 2⁻ᵏ starting at its binary fractional value. Choose any shortest word whose interval lies inside the block interval.

**Problem.** For a finite source of fixed-length blocks, this code is a prefix code with expected length less than the block entropy plus two bits. In a prefix code no codeword begins another.

**How the definition helps.** Disjoint block intervals give disjoint code intervals, excluding every prefix relation (our own). For block probability p, take k = ⌈−log₂ p⌉ + 1 (our own). Width 2⁻ᵏ ≤ p/2 ensures that the first grid cell starting inside the block interval fits entirely (our own). The shortest word therefore has length at most k &lt; −log₂ p + 2, giving the bound after averaging (our own).

**Wikipedia:** [Arithmetic coding](https://en.wikipedia.org/wiki/Arithmetic_coding). It says: “Arithmetic coding achieves compression by subdividing the interval \[0, 1) into sub-intervals proportional to symbol probabilities.”

**Sources:**

- [Ian H. Witten, Radford M. Neal and John G. Cleary, Arithmetic Coding for Data Compression (1987)](https://doi.org/10.1145/214762.214771)

### Support entropy gives fixed-length cost

**Remember:** Fixed-length codes need room for rare outcomes too.

*Rules out counterexamples.* MSC 94A29 (Source coding), 94A17. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For a finite source, Hartley entropy is the base-two logarithm of the number of possible outcomes. Shannon entropy instead averages minus the base-two log probability over those outcomes.

**Problem.** The smallest fixed bit length for zero-error encoding of one source symbol is the Hartley entropy rounded up.

**How the definition helps.** Zero-error encoding requires a distinct bit string for every positive-probability outcome (our own). Exactly 2<sup>ℓ</sup> strings have length ℓ, so an assignment exists precisely when that count covers the support (our own). For three symbols of probabilities 0.98, 0.01 and 0.01, rounding Shannon entropy up gives only one bit (our own).

**nLab:** [max-entropy](https://ncatlab.org/nlab/show/max-entropy). It says: “the logarithm of the number of outcomes with non-zero probability.”

**Sources:** none listed. No primary source with a working link was found.

### The typical set makes the source coding theorem short

**Remember:** Typical sequences are the ones whose probability is about 2 to the power −nH.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A29 (Source coding), 94A24. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Fix a block length n, a tolerance ε &gt; 0 and a source with entropy H in bits. A positive-probability word x of length n is typical if \|−log₂ P(x)/n − H\| ≤ ε.

**Problem.** For independent identically distributed finite-alphabet symbols, fixed-length compression with vanishing block error is achievable at every rate above H bits per symbol. No rate below H permits vanishing block error.

**How the definition helps.** The weak law applied to symbol surprisals gives the typical set probability tending to one (our own). Each typical word has probability at least 2⁻ⁿ⁽ᴴ⁺ε⁾, so at most 2ⁿ⁽ᴴ⁺ε⁾ indices suffice (our own). At rate R &lt; H − ε, decoded typical words carry total probability at most 2ⁿᴿ2⁻ⁿ⁽ᴴ⁻ε⁾ (our own). Choosing ε smaller than the rate gap proves each claim (our own).

**Wikipedia:** [Typical set](https://en.wikipedia.org/wiki/Typical_set), [Asymptotic equipartition property](https://en.wikipedia.org/wiki/Asymptotic_equipartition_property). It says: “it provides a theoretical means for compressing data, allowing us to represent almost all sequences Xⁿ using nH(X) bits on average, and, hence, justifying the use of entropy as a measure of information from a source.”

**Sources:**

- [Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal 27, 379–423.](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Equal column sums let uniform input reach channel capacity

**Remember:** Row symmetry fixes the noise entropy, and column symmetry makes the output uniform.

*Rules out counterexamples. Confidence: medium.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A17. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A finite channel gives a row of output probabilities for each input. It is weakly symmetric if each row rearranges the same probabilities and all column sums are equal.

**Problem.** A weakly symmetric channel with m possible outputs has capacity log₂ m minus the entropy of one row.

**How the definition helps.** Row permutations fix the average noise entropy, and equal column sums make the output uniform under uniform input (our own argument). Uniform output attains the maximum entropy log₂ m. Maximizing output entropy minus noise entropy therefore gives the stated capacity. Two identical rows (¾, ¼) have zero capacity and show why the column condition matters.

**Wikipedia:** [Binary symmetric channel](https://en.wikipedia.org/wiki/Binary_symmetric_channel). It says: “a uniform probability distribution of the input results in a uniform probability distribution of the output.”

**Sources:** none listed. No primary source with a working link was found.

### Erasure markers give capacity directly

**Remember:** A visible erasure either loses the whole bit or loses nothing.

*True by definition.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A24. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** In a memoryless binary erasure channel, each use independently replaces the input bit by a distinct erasure marker with probability p. Otherwise the output equals the input. Define information capacity as the largest reduction in input uncertainty from observing one output, measured in bits.

**Problem.** The capacity of the binary erasure channel is 1 − p bits per use.

**How the definition helps.** Observing a bit determines it, while observing the independent erasure marker leaves its original entropy H(X) (our own). Thus H(X\|Y) = pH(X) and I(X;Y) = (1 − p)H(X) (our own). A uniform input maximizes H(X) at one bit.

**Wikipedia:** [Binary erasure channel](https://en.wikipedia.org/wiki/Binary_erasure_channel). It says: “The channel capacity of a BEC is 1−Pₑ, attained with a uniform distribution for X”

**Sources:** none listed. No primary source with a working link was found.

### McMillan's theorem lets prefix codes stand in for all decodable codes

**Remember:** A prefix tree can realize every uniquely decodable list of lengths.

*Makes the theorem clean to state or prove.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A29. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** A code is uniquely decodable if every finite concatenation of codewords determines exactly one source sequence. A prefix code assigns distinct words to symbols and forbids any codeword from being a proper prefix of another.

**Problem.** Take code word lengths ℓ₁, …, ℓₙ over an alphabet of size r. They belong to a uniquely decodable code if and only if the sum of r to the power −ℓᵢ is at most 1. The same lengths then belong to a prefix code.

**How the definition helps.** McMillan’s inequality puts the lengths of every uniquely decodable code within Kraft’s bound. Kraft’s converse constructs a prefix tree with those lengths. Its leaves decode unambiguously, proving sufficiency (our own).

**Wikipedia:** [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “For every uniquely decodable code, there exists a prefix code with the same length distribution.”

**Sources:**

- [B. McMillan, Two inequalities implied by unique decipherability, IRE Transactions on Information Theory 2 (1956)](https://doi.org/10.1109/TIT.1956.1056818)

### Normalizing code lengths gives the entropy lower bound

**Remember:** Normalize the code weights to split the excess length into two nonnegative terms.

*True by definition.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A17. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A binary prefix code has no codeword that begins with another codeword. Give each codeword of length ℓ the weight one half raised to the power ℓ. Divide each weight by their sum S to obtain probabilities q.

**Problem.** For a finite source, every binary prefix code has mean length at least the source entropy in bits.

**How the definition helps.** Normalization turns each length into −log₂ q minus log₂ S (our own argument). The mean length therefore exceeds entropy by the relative entropy from the source to q plus −log₂ S. Gibbs’ inequality makes the first term nonnegative, and Kraft’s inequality gives S ≤ 1.

**Wikipedia:** [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “it must have total measure less than or equal to one.”

**Sources:** none listed. No primary source with a working link was found.

### Rounding each surprise up keeps code length within one bit

**Remember:** Round each surprise upward by less than one bit.

*True by definition.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A17. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For each symbol of a finite source, its surprise is −log₂ p bits, where p is its probability. Assume at least two symbols and positive probabilities throughout. A Shannon code assigns each symbol a length equal to its surprise rounded upward to an integer.

**Problem.** A Shannon code exists with these lengths. Its mean length is at least the source entropy and less than the entropy plus one bit.

**How the definition helps.** Rounding adds at least zero and less than one bit to each surprise (our own argument). Taking the mean preserves both bounds because entropy is the mean surprise. Each rounded length has binary weight at most p, so Kraft’s theorem supplies a prefix code.

**Wikipedia:** [Shannon coding](https://en.wikipedia.org/wiki/Shannon_coding). It says: “Here ⌈x⌉ denotes the ceiling function (which rounds x up to the next integer value).”

**Sources:**

- [Claude E. Shannon, A Mathematical Theory of Communication (1948)](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

### Trees make Huffman merging optimal

**Remember:** Merge the two lightest leaves, then solve the smaller tree.

*Makes the theorem clean to state or prove.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A29. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** A binary prefix tree assigns symbols to distinct leaves and encodes each symbol by the edge labels along its root-to-leaf path. Merging sibling leaves replaces them by their parent with their combined probability.

**Problem.** For finitely many positive symbol probabilities, Huffman’s repeated merging of the two smallest weights minimizes the mean binary prefix code length.

**How the definition helps.** Splitting a merged leaf increases mean depth by exactly its combined probability (our own). An optimal tree has no unary nodes, so some deepest leaves are siblings (our own). Exchanging labels puts the two smallest weights there without increasing mean depth (our own). Any improvement after merging would improve the original tree after splitting, so induction proves optimality (our own).

**Wikipedia:** [Huffman coding](https://en.wikipedia.org/wiki/Huffman_coding). It says: “equivalently, a tree with minimum weighted path length from the root”

**Sources:**

- [David A. Huffman, A Method for the Construction of Minimum-Redundancy Codes (1952)](https://doi.org/10.1109/JRPROC.1952.273898)

### A Diffie–Hellman mask makes ElGamal decrypt by cancellation

**Remember:** Derive the same group element, then divide it out.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** In ElGamal encryption, the recipient publishes gˣ in a cyclic group generated by g and keeps x secret. The sender chooses a fresh exponent r and sends gʳ together with the group message multiplied by (gˣ)ʳ.

**Problem.** ElGamal decryption recovers every message in the group by multiplying the masked message by the inverse mask.

**How the definition helps.** Viewing the ciphertext as a message times a shared mask reduces decryption to cancellation (our own argument). The recipient computes the mask as (gʳ)ˣ. Diffie–Hellman agreement identifies this with (gˣ)ʳ, and multiplication by its inverse recovers the message.

**Wikipedia:** [ElGamal encryption](https://en.wikipedia.org/wiki/ElGamal_encryption). It says: “and thus it is the same shared secret that was used by Bob in encryption.”

**Sources:**

- [Taher Elgamal, A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms (1985)](https://doi.org/10.1109/TIT.1985.1057074)

### A uniform fresh key makes an additive pad perfectly secret

**Remember:** Adding a fixed message only rearranges the equally likely keys.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR, cs.IT. Level 2: later undergraduate.

**Definition.** An additive pad encrypts a message by adding a key in a finite abelian group. The key is independent of the message. A one-time pad chooses the key uniformly and uses it once.

**Problem.** An additive pad has perfect secrecy for every message distribution exactly when its key is uniform. Perfect secrecy means that observing the ciphertext leaves the message probabilities unchanged.

**How the definition helps.** Adding a message permutes the keys, so a uniform key produces uniform ciphertext for every message (our own argument). Conversely, take every message to have positive probability. Secrecy makes all translations of the key distribution identical, forcing all key values to have equal probability.

**Wikipedia:** [One-time pad](https://en.wikipedia.org/wiki/One-time_pad). It says: “the ciphertext C gives absolutely no additional information about the plaintext.”

**Sources:**

- [Claude E. Shannon, Communication Theory of Secrecy Systems (1949)](https://doi.org/10.1002/j.1538-7305.1949.tb00928.x)

### Exponent classes make discrete logarithms single valued and additive

**Remember:** Products of group elements add their exponent classes.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** Fix a generator g of a finite cyclic group of order n. For every element a, its discrete logarithm to base g is the residue class of integers k satisfying gᵏ = a, modulo n.

**Problem.** Every element has exactly one discrete logarithm class. The logarithm of a product is the sum of the logarithms modulo n.

**How the definition helps.** Exponent classes identify exactly the integers that give the same power (our own argument). Indeed, two powers agree exactly when the generator raised to the difference is the identity, which requires a multiple of n. The product law for powers now gives addition modulo n.

**Wikipedia:** [Discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm). It says: “logᵦ a is unique only up to congruence modulo n”

**Sources:** none listed. No primary source with a working link was found.

### Perfect hiding rules out perfect binding

**Remember:** Identical commitment laws cannot have disjoint supports.

*True by definition.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 2: later undergraduate.

**Definition.** In a bit commitment, the sender publishes a randomized value and later opens it by supplying evidence for the committed bit. Perfect hiding means the two bits induce identical distributions of public values. Perfect binding means no public value admits valid openings for both bits.

**Problem.** Assume finitely many public values and perfect correctness, so every honest opening succeeds. Such a commitment cannot have both properties.

**How the definition helps.** Equal distributions force the two bits to share possible public values, whereas binding requires disjoint sets. Pick a public value of positive probability for bit zero (our own). It also has positive probability for bit one, and correctness supplies openings to both bits (our own).

**Wikipedia:** [Commitment scheme](https://en.wikipedia.org/wiki/Commitment_scheme). It says: “no commitment scheme can be at the same time perfectly binding and perfectly hiding”

**Sources:** none listed. No primary source with a working link was found.

### Prime field coordinates make RSA decryption work for every message

**Remember:** In each field, the powers undo each other and leave zero unchanged.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** Represent a residue modulo pq by its two remainders modulo distinct primes p and q. Define the RSA maps by powering both coordinates with e for encryption and d for decryption. Choose positive e and d so ed is one modulo both p − 1 and q − 1.

**Problem.** RSA decryption recovers every residue modulo pq, including messages with a common factor with pq.

**How the definition helps.** Prime coordinates separate the zero case from the nonzero case (our own argument). Zero stays zero under positive powers. For each nonzero coordinate, Fermat’s little theorem makes the combined power ed act as the identity. The Chinese remainder theorem identifies the coordinate pair with a unique residue modulo pq.

**Wikipedia:** [RSA cryptosystem](https://en.wikipedia.org/wiki/RSA_cryptosystem). It says: “it suffices (and in fact is equivalent) to check that they are congruent mod p and mod q separately.”

**Paper or page:** [Fermat's Little Theorem](https://proofwiki.org/wiki/Fermat's_Little_Theorem). It says: “nᵖ⁻¹ ≡ 1 mod p”

**Sources:**

- [R. L. Rivest, A. Shamir and L. Adleman, A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (1978)](https://people.csail.mit.edu/rivest/Rsapaper.pdf)

### Zero-information secrecy needs at least as much key entropy as message entropy

**Remember:** The key must supply all the information the ciphertext hides.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 94A17. arXiv cs.CR, cs.IT. Level 2: later undergraduate.

**Definition.** Define perfect secrecy as zero mutual information between message and ciphertext. Mutual information is the drop in the message's entropy once the ciphertext is seen. The probability definition says that seeing the ciphertext leaves every message probability unchanged.

**Problem.** In a perfectly secret scheme with finitely many values and exact decryption, the key entropy is at least the message entropy. This is Shannon's bound.

**How the definition helps.** Perfect secrecy gives H(M\|C) = H(M), while exact decryption gives H(M\|C,K) = 0 (our own). Subtracting yields H(M) = I(M;K\|C) ≤ H(K\|C) ≤ H(K) (our own).

**Wikipedia:** [One-time pad](https://en.wikipedia.org/wiki/One-time_pad). It says: “the ciphertext C gives absolutely no additional information about the plaintext.”

**Sources:**

- [Claude E. Shannon, Communication Theory of Secrecy Systems (1949)](https://doi.org/10.1002/j.1538-7305.1949.tb00928.x)

### Finite fields protect Shamir shares

**Remember:** Over a finite field, all secrets fit equally many polynomials.

*Rules out counterexamples.* MSC 94A62 (Authentication, digital signatures and secret sharing). arXiv cs.CR, math.IT. Level 2: later undergraduate.

**Definition.** Choose a finite field and assign distinct nonzero field elements to the participants. Form a polynomial of degree at most k − 1 with the secret as constant term and independent uniform coefficients otherwise, independent of the secret. Each share is the value at its participant’s point.

**Problem.** For k ≥ 2, fewer than k shares give no information about the secret.

**How the definition helps.** Finite field arithmetic gives the same number of compatible polynomials for each possible secret. Our own derivation fixes the secret as the value at zero and uses interpolation through zero and the share points. Including zero gives one extra constraint and the number of free coefficients does not depend on the secret. Our own counterexample uses integer coefficients, k = 2 and a share at 2, which reveals the parity of the secret.

**Wikipedia:** [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing). It says: “This problem can be remedied by using finite field arithmetic.”

**Sources:**

- [Adi Shamir, How to share a secret (1979)](https://doi.org/10.1145/359168.359176)

### Pairwise independence protects one tag

**Remember:** One observed tag leaves every tag for a different message uniform.

*Rules out counterexamples.* MSC 94A62 (Authentication, digital signatures and secret sharing). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** Choose a secret function h uniformly from a finite family and label each message m with its tag h(m). Pairwise independence means the tags for any two distinct messages are independent and uniform. A universal family only requires their collision probability to be at most the reciprocal of the number of tags.

**Problem.** An observer sees one message and its tag, then chooses a different message. Any guess for the new tag succeeds with probability one divided by the number of tags.

**How the definition helps.** Pairwise independence leaves the second tag uniform even after conditioning on the first. The work is proving pairwise independence for the chosen family. Our own counterexample uses a public injective function as the only choice, with an alphabet at least as large as the input set. It has no collisions but its tags are known.

**Wikipedia:** [Message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code). It says: “pairwise independent hash functions provide a secure message authentication code as long as the key is used at most once.”

**Sources:**

- [Mark N. Wegman and J. Lawrence Carter, New hash functions and their use in authentication and set equality (1981)](https://doi.org/10.1016/0022-0000(81)90033-7)

### An identity block gives parity checks without solving equations

**Remember:** The check matrix subtracts the extra symbols the message predicts.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A systematic encoder sends a message row u to the word (u, uP) over a finite field. Its check matrix is \[−Pᵀ \| I\], where Pᵀ is the transpose of P and I is the identity matrix.

**Problem.** A row word belongs to this code exactly when multiplying it by the transposed check matrix gives zero.

**How the definition helps.** For a word (u, v), the check computes v − uP (our own argument). It vanishes exactly when v contains the extra symbols prescribed by the encoder. Row reduction supplies systematic coordinates for a general linear code.

**Wikipedia:** [Linear code](https://en.wikipedia.org/wiki/Linear_code). It says: “H = \[−Pᵀ \| Iₙ₋ₖ\] is a check matrix for C.”

**Sources:** none listed. No primary source with a working link was found.

### An identity block lets systematic codes reveal their messages

**Remember:** An identity block copies the message into the codeword.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A generator matrix encodes a message row by matrix multiplication. A systematic generator starts with an identity block, which copies the message into the first positions.

**Problem.** Every linear code admits a systematic generator after a suitable reordering of positions. The first positions of an uncorrupted codeword then give the original message.

**How the definition helps.** The identity block copies each message symbol directly (our own argument). For a general generator with independent rows, row reduction makes the pivot columns an identity matrix. Row operations preserve the code, and reordering moves those columns to the front.

**Paper or page:** [Standard Generator Matrix for Linear Code/Examples/(3, 2) code in Z2](https://proofwiki.org/wiki/Standard_Generator_Matrix_for_Linear_Code/Examples/(3,_2)_code_in_Z2). It says: “G generates the linear code C:”

**Sources:** none listed. No primary source with a working link was found.

### Codes as check-matrix kernels have distance equal to the fewest dependent columns

**Remember:** A light codeword is a short dependence among check columns.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Define a linear code over a finite field as the kernel of a matrix H, called its check matrix. The usual alternative describes the code by a generator matrix whose rows span it.

**Problem.** Take a nonzero linear code with check matrix H. Its minimum distance equals the smallest number of linearly dependent columns of H.

**How the definition helps.** A nonzero kernel vector gives a dependence on its support, so its weight bounds the smallest dependent set from above (our own). Conversely, a dependent set supplies a nonzero kernel vector supported within that set (our own). Thus the minima agree, and linearity identifies minimum nonzero weight with minimum distance (our own).

**Wikipedia:** [Linear code](https://en.wikipedia.org/wiki/Linear_code). It says: “The distance d of a linear code C also equals the minimum number of linearly dependent columns of the check matrix H.”

**Sources:** none listed. No primary source with a working link was found.

### Doubly even codes are self-orthogonal

**Remember:** Multiples of four force even overlaps.

*Rules out counterexamples.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 2: later undergraduate.

**Definition.** A binary linear code is a vector space of bit strings under addition modulo two. A doubly even code requires every word to have a multiple of four ones. An even code requires only a multiple of two.

**Problem.** Any two words in a doubly even binary linear code have dot product zero modulo two.

**How the definition helps.** Divisibility by four forces any two words to share an even number of ones. Our own proof counts ones in their sum by adding their individual counts and subtracting twice their overlap. All three counts are divisible by four, so twice the overlap is divisible by four. The even code spanned by 110 and 011 fails this test because those words share just one position.

**nLab:** [binary linear code](https://ncatlab.org/nlab/show/binary+linear+code). It says: “Notice that the quadratic form (hence the bilinear form) vanishes on a type II code C, so that we have C ⊂ C⊥ (i.e., C is isotropic).”

**Paper or page:** [Construction for both self-dual codes and LCD codes](https://arxiv.org/abs/2108.12544v1). It says: “If C is doubly even, then C is a self-orthogonal code.”

**Sources:** none listed. No primary source with a working link was found.

### Dual distance gives uniform projections

**Remember:** A biased projection would expose a short dual word.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B25. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For a linear code C over a finite field, the dual consists of all vectors orthogonal to every codeword. Assume the dual contains a nonzero vector. The dual distance is the smallest number of nonzero positions in such a vector.

**Problem.** Choose a codeword uniformly. On any set of fewer positions than the dual distance, all patterns of field elements occur equally often.

**How the definition helps.** A missing pattern makes the projected code a proper subspace, which has a nonzero orthogonal vector (our own). Padding that vector with zeros gives a dual word supported on fewer positions than the dual distance (our own). Thus the projection is onto, and its fibers have equal size by linearity (our own).

**Wikipedia:** [Orthogonal array](https://en.wikipedia.org/wiki/Orthogonal_array). It says: “Then C⊥ (the orthogonal complement of the vector subspace C) is a (linear) OA(qⁿ⁻ᵐ, n, q, d − 1)”

**Sources:** none listed. No primary source with a working link was found.

### Gram matrices detect code hulls

**Remember:** Pairwise dot products reveal which codewords are orthogonal to the code.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 2: later undergraduate.

**Definition.** The hull of a linear code with the ordinary dot product consists of its codewords orthogonal to every codeword. For a matrix G whose rows form a code basis, GGᵀ is the Gram matrix of that basis.

**Problem.** For a code of dimension k, the hull dimension equals k minus the rank of GGᵀ. The hull is zero exactly when GGᵀ is invertible.

**How the definition helps.** The Gram matrix turns orthogonality to the whole code into one matrix equation. Our own proof writes each codeword uniquely as aG, where a lists its coefficients in the chosen basis. Its dot products with the basis rows form aGGᵀ. The hull therefore corresponds to the left kernel of GGᵀ, whose dimension follows from rank–nullity.

**Paper or page:** [Construction for both self-dual codes and LCD codes](https://arxiv.org/abs/2108.12544v1). It says: “Then rank(GGᵀ) = k − dim(Hull(C)).”

**Sources:** none listed. No primary source with a working link was found.

### Hamming check matrices with every nonzero column make Hamming codes perfect

**Remember:** Each nonzero check result names exactly one bit.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B35. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For a positive integer m, form a binary matrix H using each nonzero m-bit column exactly once. The binary Hamming code consists of the words x satisfying Hx = 0.

**Problem.** Every binary word of length 2ᵐ − 1 is within one bit change of exactly one codeword. Codes with this property are called perfect.

**How the definition helps.** Flipping bit j adds column j to Hx (our own). A zero result identifies a codeword, and any single flip then gives a nonzero result (our own). For a nonzero result, exactly one column equals that result, so exactly one flip makes it zero (our own).

**Wikipedia:** [Hamming code](https://en.wikipedia.org/wiki/Hamming_code). It says: “The parity-check matrix H of a Hamming code is constructed by listing all columns of length m that are pair-wise independent.”

**Sources:**

- [Richard W. Hamming, Error Detecting and Error Correcting Codes (1950)](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)

### Independent columns preserve dual optimality

**Remember:** Independent columns rule out short dual words.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv math.IT. Level 2: later undergraduate.

**Definition.** A length-n linear code of dimension k is maximum distance separable if its minimum distance equals n − k + 1. Equivalently, every k columns of a generator matrix are linearly independent.

**Problem.** If 0 &lt; k &lt; n, the dual of a maximum distance separable linear code is also maximum distance separable. The dual consists of all words orthogonal to the code.

**How the definition helps.** A nonzero dual word gives a dependence among the generator columns on its support (our own). Every set of at most k columns is independent, so this support has size at least k + 1 (our own). The dual has dimension n − k, so its Singleton bound is k + 1 (our own).

**Wikipedia:** [Singleton bound](https://en.wikipedia.org/wiki/Singleton_bound). It says: “C⊥ is an MDS code.”

**Sources:** none listed. No primary source with a working link was found.

### Ordering Hamming checks by field powers makes shifts preserve the code

**Remember:** One position forward is multiplication by the same field element.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For r ≥ 2, label the coordinates by the nonzero elements of the field with 2ʳ elements. The binary Hamming code contains the words whose labels at positions containing ones sum to zero. Order the labels as successive powers of a generator of the nonzero elements.

**Problem.** Every binary Hamming code is cyclic after a suitable reordering of its coordinates.

**How the definition helps.** A cyclic shift multiplies every label by the same generator, so a zero sum stays zero (our own argument). The last label wraps around because the next power is one. The finite-field theorem supplies a generator, and writing the labels as binary vectors gives the usual Hamming check columns.

**nLab:** [Hamming code](https://ncatlab.org/nlab/show/Hamming+code). It says: “A certain class of linear codes used for error correction in communication protocols.”

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “any binary Hamming code of the form Ham(r, 2) is equivalent to a cyclic code,”

**Sources:** none listed. No primary source with a working link was found.

### Reed–Solomon codes as polynomial evaluations have distance n − k + 1

**Remember:** Two low-degree polynomials agree only at roots of their difference.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A Reed–Solomon word lists the values of a polynomial of degree less than k at n distinct points of a finite field. A cyclic version instead takes the word as the coefficients of a polynomial with prescribed roots.

**Problem.** A Reed–Solomon code of length n with 1 ≤ k ≤ n has minimum distance n − k + 1.

**How the definition helps.** Distinct polynomials agree at most k − 1 times by the root bound, giving distance at least n − k + 1 (our own). For equality, compare zero with the product of the factors x − a over any k − 1 evaluation points a (our own). For k = 1 the empty product is one (our own).

**Wikipedia:** [Reed–Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction). It says: “every codeword of the Reed–Solomon code is a sequence of function values of a polynomial of degree less than k.”

**Sources:**

- [Irving S. Reed and Gustave Solomon, Polynomial Codes Over Certain Finite Fields (1960)](https://doi.org/10.1137/0108018)

### A complementary factor gives one polynomial test for cyclic codes

**Remember:** The check factor completes the generator to a multiple of the modulus.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A length-n cyclic code over a finite field consists of multiples of g modulo xⁿ − 1. Its check factor h satisfies gh = xⁿ − 1.

**Problem.** A word polynomial c belongs to the cyclic code exactly when c times h has remainder zero modulo xⁿ − 1.

**How the definition helps.** The check replaces division by g with multiplication by its complementary factor (our own argument). If c = ag, then ch = a(xⁿ − 1). Conversely, ch = a(xⁿ − 1) gives ch = agh, and cancellation gives c = ag. The generator theorem supplies g from the usual definition by cyclic shifts.

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “This must be a divisor of xⁿ − 1.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclic codes as polynomial ideals have unique monic generators

**Remember:** Rotating a word multiplies its polynomial by x.

*True by definition. Confidence: medium.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Represent a word of length n by its coefficient polynomial modulo xⁿ − 1. Define a cyclic code as an ideal of this ring, that is, a subspace closed under multiplication by any polynomial. The usual definition is a linear code closed under rotating positions.

**Problem.** Every cyclic code of length n over a finite field is generated by exactly one monic polynomial that divides xⁿ − 1. Monic means that the leading coefficient is one.

**How the definition helps.** The inverse image of the code under reduction modulo xⁿ − 1 is an ideal containing xⁿ − 1 (our own). The polynomial division algorithm gives this ideal a unique monic generator, which must divide xⁿ − 1 (our own). Every monic divisor generating the code also generates this inverse image, proving uniqueness (our own).

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “Cyclic codes can be linked to ideals in certain rings.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial generators make cyclic code dimensions a degree count

**Remember:** Count the coefficients in the multiplier, not the codewords.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Over a finite field, represent each length-n word by its coefficient polynomial of degree below n, allowing the zero polynomial. A cyclic code consists of multiples of a generator g modulo xⁿ − 1, where g divides xⁿ − 1.

**Problem.** If g has degree d, a cyclic code of length n has dimension n − d.

**How the definition helps.** The polynomial description gives one free coefficient for each possible multiplier degree below n − d (our own argument). Reducing a multiple modulo xⁿ − 1 preserves divisibility by g. Ordinary polynomial division then recovers the unique multiplier. The generator theorem converts the usual definition by closure under cyclic shifts into this description.

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “If the generator polynomial g has degree d then the rank of the code C is n−d.”

**Sources:** none listed. No primary source with a working link was found.

### Reversing the check factor generates the dual cyclic code

**Remember:** Reversal turns coefficient matching into multiplication.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A cyclic code over a finite field has a generator g dividing xⁿ − 1. Its dual consists of the words whose dot product with every codeword is zero. The reciprocal of h = (xⁿ − 1)/g reverses the order of its coefficients.

**Problem.** The dual is cyclic, and its generator is the reciprocal of h scaled to have leading coefficient one.

**How the definition helps.** Reversing one word turns dot products with every cyclic shift into coefficients of one polynomial product (our own argument). Thus b belongs to the dual exactly when g(x)b(x⁻¹) vanishes modulo xⁿ − 1. Cancelling g before taking remainders says that b(x⁻¹) belongs to the multiples of h. Substituting x⁻¹ again reverses h up to a power of x, which is invertible modulo xⁿ − 1.

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “If C is a cyclic code, the dual code C⊥ is also a cyclic code.”

**Sources:** none listed. No primary source with a working link was found.

### A constant term detects bursts

**Remember:** Remove the delay, then compare the burst degree with the generator degree.

*Rules out counterexamples.* MSC 94B20 (Burst-correcting codes), 94B15. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** Over the binary field, a cyclic redundancy check accepts exactly the polynomial multiples of its generator g. Here g has degree r ≥ 1 and constant term one. A nonzero burst of length at most r has all its flipped bits within r consecutive positions.

**Problem.** The check detects every nonzero burst confined to at most r consecutive positions.

**How the definition helps.** The constant term makes g coprime to the delay factor x. Our own derivation writes a burst as a power of x times a nonzero polynomial of degree less than r. If g divided the burst, it would divide that smaller polynomial, which is impossible. Our own counterexample drops the condition and takes g(x) = x², so the one-bit error x² passes.

**Wikipedia:** [Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check). It says: “if it includes the "+1" term, the code will be able to detect error patterns that are confined to a window of r contiguous bits.”

**Sources:**

- [W. W. Peterson and D. T. Brown, Cyclic Codes for Error Detection (1961)](https://doi.org/10.1109/JRPROC.1961.287814)

### A factor of x plus one catches every odd bit error

**Remember:** At x = 1, a binary polynomial reports its parity.

*Rules out counterexamples.* MSC 94B20 (Burst-correcting codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A cyclic redundancy check treats bits as polynomial coefficients and adds them modulo two. The check accepts exactly the multiples of a chosen generator polynomial.

**Problem.** A cyclic redundancy check with generator divisible by x + 1 detects every odd number of bit flips.

**How the definition helps.** A generator with factor x + 1 forces every accepted polynomial to vanish at one (our own argument). An odd number of flipped coefficients changes that value by one, so the received word fails. Without this factor the generator itself has odd weight and passes undetected as an error whenever it fits the block.

**Wikipedia:** [Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check). It says: “which adds to the code the ability to detect all errors affecting an odd number of bits.”

**Sources:** none listed. No primary source with a working link was found.

### A lightest error in each coset gives nearest decoding

**Remember:** Find the lightest possible error, then subtract it.

*True by definition.* MSC 94B35 (Decoding), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A coset is the set formed by adding one fixed word to every word of a linear code. Choose a coset leader of least weight in each coset, with weight counting nonzero symbols.

**Problem.** Subtracting the leader of a received word’s coset gives a nearest codeword. Tied leaders may give different nearest codewords.

**How the definition helps.** The coset lists exactly the errors obtained by subtracting each possible sent codeword from the received word (our own argument). Error weight counts changed positions, so minimizing weight selects a nearest codeword. Choosing one leader in advance settles ties and avoids repeating the search.

**Wikipedia:** [Standard array](https://en.wikipedia.org/wiki/Standard_array). It says: “Choose any vector of minimum weight not already in the array.”

**Paper or page:** [Element of Group is in Unique Coset of Subgroup/Left](https://proofwiki.org/wiki/Element_of_Group_is_in_Unique_Coset_of_Subgroup/Left). It says: “Let H be a subgroup of G.”

**Sources:** none listed. No primary source with a working link was found.

### Error locators linearize Reed–Solomon decoding

**Remember:** Multiply by a polynomial that vanishes at every error.

*Makes the theorem clean to state or prove.* MSC 94B35 (Decoding). arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** Let rᵢ be the received values at distinct field points aᵢ for a Reed–Solomon message polynomial f of degree below k. For error bound t, take polynomials E,N with deg E ≤ t and deg N &lt; k + t. The decoding equations require N(aᵢ) = E(aᵢ)rᵢ for every i.

**Problem.** Suppose at most t errors occur and n − k is at least twice t. Solve for N of degree below k + t and E of degree at most t. Any nonzero solution gives f = N/E.

**How the definition helps.** The error locator makes the fitting equations linear in the unknown coefficients. Our own proof takes E as the product of the linear factors at the error positions and sets N = Ef. For any solution, N − Ef has degree below k + t and at least n − t ≥ k + t distinct roots. Hence N = Ef, and every nonzero solution has E nonzero.

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “Then, N₁/E₁ = N₂/E₂ = f.”

**Sources:** none listed. No primary source with a working link was found.

### Rare independent bit flips make nearest decoding most likely

**Remember:** When flips are rare, every extra difference makes a candidate less likely.

*Rules out counterexamples.* MSC 94B35 (Decoding), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A binary symmetric channel flips each transmitted bit independently with probability p. Assume 0 &lt; p &lt; ½ and equally likely codewords.

**Problem.** Given the received word, the most probable sent codewords are exactly those differing from it in the fewest positions.

**How the definition helps.** Each extra mismatch multiplies the probability of the observed word by p/(1 − p), which is below one (our own argument). Equal prior probabilities make this ranking apply to the sent codewords after observation. At p = ½ every candidate ties, and above ½ the ranking reverses.

**Wikipedia:** [Binary symmetric channel](https://en.wikipedia.org/wiki/Binary_symmetric_channel). It says: “D is called a maximum likelihood decoding function.”

**Sources:** none listed. No primary source with a working link was found.

### Syndromes label cosets

**Remember:** Equal syndromes mean the difference is a codeword.

*True by definition.* MSC 94B35 (Decoding), 94B05. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** For a matrix H over a finite field, let C be its kernel. The syndrome of a column word x is Hx, and its coset is x + C.

**Problem.** Two words have the same syndrome exactly when they belong to the same translate of C.

**How the definition helps.** The syndrome turns a coset test into an equality of matrix products. Hx = Hy means H(x − y) = 0, so x − y lies in C. Our own comparison uses the generator description, where one must first find a matrix whose kernel is that span.

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “𝒞(a) = 𝒞(b) ⇔ Haᵀ = Hbᵀ.”

**Sources:** none listed. No primary source with a working link was found.

### The decoding radius excludes ties

**Remember:** Stop strictly before half the distance to rule out a tie.

*Rules out counterexamples.* MSC 94B35 (Decoding). arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** The Hamming distance counts the positions where two words differ. Let d be the least distance between different codewords. Define the guaranteed decoding radius as ⌊(d − 1)/2⌋, not ⌊d/2⌋.

**Problem.** Every word within the guaranteed radius of a codeword has exactly one codeword within that radius.

**How the definition helps.** The strict half-distance cutoff leaves too little room for two codewords near the same word. The triangle inequality would put those codewords less than d apart. Our own example is the code {0000, 1111}, where 0011 is two positions from both. Our own comparison puts the work into proving the minimum distance for the chosen code.

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “balls of radius (d−1)/2 centered at codewords are disjoint”

**Sources:** none listed. No primary source with a working link was found.

### Gray labels preserve Lee distance

**Remember:** A four-point circle is a two-bit square.

*True by definition.* MSC 94B60 (Other types of codes). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Label the residues 0, 1, 2, 3 by 00, 01, 11, 10. Lee distance counts the shorter way around the four residues, then adds these counts across positions.

**Problem.** Applying the labels at each position converts Lee distance into Hamming distance, the number of differing bits.

**How the definition helps.** The chosen labels turn each step around the four residues into one change of a bit. Our own proof compares this with counting differing residues, which would charge one even for a pair of opposite residues. The four neighboring pairs differ in one bit, and the two opposite pairs differ in two bits. Both distances add over positions.

**Wikipedia:** [Lee distance](https://en.wikipedia.org/wiki/Lee_distance). It says: “However, there exists a Gray isometry (weight-preserving bijection)”

**Sources:** none listed. No primary source with a working link was found.

### Erasure recovery by projection gives the Singleton bound on code size

**Remember:** A projection that keeps words apart cannot have fewer outputs than words.

*True by definition. Confidence: medium.* MSC 94B65 (Bounds on codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Say that a code corrects e erasures if deleting any e positions never makes two codewords equal. The usual description uses the minimum distance, the least number of positions where two codewords differ.

**Problem.** Take a code of length n over q symbols with at least two words and minimum distance d. It has at most qⁿ⁻ᵈ⁺¹ words. This is the Singleton bound.

**How the definition helps.** Deleting d − 1 positions preserves a difference between every pair of distinct codewords (our own). This projection is injective into the qⁿ⁻ᵈ⁺¹ strings on the remaining positions, giving the size bound (our own).

**Wikipedia:** [Erasure code](https://en.wikipedia.org/wiki/Erasure_code). It says: “any k out of the n code word symbols are sufficient to recover the original message”

**Sources:**

- [Richard C. Singleton, Maximum Distance q-nary Codes (1964)](https://doi.org/10.1109/TIT.1964.1053661)

### Lists extend the sphere-packing bound

**Remember:** Each received word has room for L candidates.

*True by definition.* MSC 94B65 (Bounds on codes), 94B35. arXiv math.IT. Level 2: later undergraduate.

**Definition.** Instead of requiring one possible answer, allow up to L codewords within t changes of each received word. Such a code is called list decodable at radius t.

**Problem.** If words have length n over q symbols, the code size times the radius-t ball size is at most L times qⁿ.

**How the definition helps.** The list limit bounds the number of decoding balls that can cover any word. Our own count pairs each codeword with every word obtained by changing at most t positions. Counting by codeword gives the code size times the ball size. Counting by received word gives at most L times qⁿ.

**Wikipedia:** [List decoding](https://en.wikipedia.org/wiki/List_decoding). It says: “the number of codewords c ∈ C within Hamming distance pn from y is at most L.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal codes cover the space

**Remember:** Where no codeword reaches, add a word.

*True by definition.* MSC 94B65 (Bounds on codes). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Use length-n words over q symbols and fix an integer d between 1 and n. Require different codewords to differ in at least d positions. A code is maximal by inclusion if adding any word breaks this rule.

**Problem.** A maximal code covers every word with balls of radius d − 1, where a ball contains words within that many changes of its center. Its size is at least the number of all words divided by the size of one such ball.

**How the definition helps.** If an omitted word lay at distance at least d from every codeword, adding it would preserve the distance rule (our own). Thus the radius-(d − 1) balls cover the entire space (our own). Each ball has the same size, so summing their sizes gives at least qⁿ, even with overlap (our own).

**Wikipedia:** [Gilbert–Varshamov bound](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound). It says: “since otherwise we could add x to the code whilst maintaining the code's minimum Hamming distance d”

**Sources:** none listed. No primary source with a working link was found.

### Signed words yield Plotkin’s bound

**Remember:** Different bits subtract from the dot product.

*True by definition.* MSC 94B65 (Bounds on codes). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Represent a binary word by a vector with +1 for each zero and −1 for each one. If two words differ at s positions, their vectors have dot product n − 2s, where n is the word length.

**Problem.** For a binary code of length n with at least two words, let d be the smallest number of positions where two distinct words differ. If d &gt; n/2, the code size is at most 2d divided by 2d − n.

**How the definition helps.** Each pair of distinct signed words has dot product at most n − 2d. Our own proof sums the M vectors and expands the squared length. Nonnegativity gives 0 ≤ Mn + M(M − 1)(n − 2d). Rearranging yields M ≤ 2d/(2d − n).

**Wikipedia:** [Plotkin bound](https://en.wikipedia.org/wiki/Plotkin_bound). It says: “The bound is proved by bounding the quantity ∑\[(x,y) ∈ C², x ≠ y\] d(x,y) in two different ways.”

**Sources:**

- [Morris Plotkin, Binary Codes with Specified Minimum Distance (1960)](https://doi.org/10.1109/TIT.1960.1057584)

### Causal conditioning splits feedback information

**Remember:** Predict each output from past and present inputs, each input from past outputs.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A24. arXiv math.IT. Level 3: graduate.

**Definition.** Write Xⁱ and Yⁱ for histories through time i, with empty histories at time zero. Forward directed information sums I(Xⁱ; Yᵢ ∣ Yⁱ⁻¹) over all times i. Delayed reverse information sums I(Yⁱ⁻¹; Xᵢ ∣ Xⁱ⁻¹) over the same times.

**Problem.** For equal-length streams of finite-valued symbols, forward information plus delayed reverse information equals their mutual information, the average uncertainty either stream removes about the other.

**How the definition helps.** Our own proof applies the entropy chain rule in the order X₁, Y₁, X₂, Y₂, and so on. Subtract the resulting joint entropy from the sum of the two stream entropies. Grouping the differences by predicted symbol gives exactly the forward and delayed reverse sums.

**Wikipedia:** [Directed information](https://en.wikipedia.org/wiki/Directed_information). It says: “except one conditions on "past" and "present" symbols yⁱ rather than all symbols yⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Collision bias bounds distance from uniform

**Remember:** Count matching outputs to bound how far the hash is from uniform.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A60. arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** Choose h uniformly from a finite family of maps to the same set of m outputs. Independently of h, draw X and X′ independently from the same input law. The collision bias is ε = m Pr\[h(X) = h(X′)\] − 1.

**Problem.** The mean total variation distance from uniform is at most ½ √ε. Total variation is half the sum of the absolute differences between outcome probabilities.

**How the definition helps.** The collision probability is a sum of squared masses, so subtracting the uniform value gives a squared distance. Our own derivation uses Cauchy–Schwarz to bound the sum of absolute differences. Averaging and using concavity of the square root gives the claim. Our own comparison puts the work into counting collisions rather than estimating each output probability separately.

**nLab:** [collision entropy](https://ncatlab.org/nlab/show/collision+entropy). It says: “of the probability that two independent random variables, both described by p, will take the same value.”

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “𝔼ₕ(Δ(𝒟(h), 𝒰)) ≤ ½ √ε.”

**Sources:**

- [Thomas Debris-Alazard, Code-based Cryptography: Lecture Notes (2023)](https://arxiv.org/abs/2304.03541v1)

### Conditional entropies converge monotonically to the stationary entropy rate

**Remember:** More past information cannot raise the next symbol’s average entropy.

*True by definition.* MSC 94A17 (Measures of information, entropy), 60G10. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** For a finite-valued process X₁, X₂, …, define entropy rate as the limit of H(Xₙ ∣ X₁, …, Xₙ₋₁), if it exists. This is the average entropy of Xₙ after the preceding values are known. The alternative definition takes the limit of H(X₁, …, Xₙ)/n, the joint entropy per symbol.

**Problem.** For a stationary process on a finite set of symbols, the conditional entropies never increase and converge to a limit. The joint entropy per symbol tends to the same limit.

**How the definition helps.** The conditional definition makes convergence follow from monotonicity (our own). Dropping X₁ from the conditioning data and shifting the indices by stationarity compares consecutive terms (our own). Since conditioning cannot raise average entropy, the terms decrease and stay nonnegative (our own). The chain rule makes the joint entropy per symbol the running average of these terms, so it has the same limit (our own).

**Wikipedia:** [Entropy rate](https://en.wikipedia.org/wiki/Entropy_rate). It says: “For strongly stationary stochastic processes, the entropy rate equals the limit of that sequence”

**Sources:** none listed. No primary source with a working link was found.

### Entropy power adds at fixed shape

**Remember:** Use a Gaussian’s variance scale instead of its entropy scale.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** For a random vector X with density p in dimension n, differential entropy is the mean of −log p(X). If finite, match this entropy with that of an n-dimensional Gaussian having independent coordinates of equal variance. Their common variance is the entropy power.

**Problem.** For independent Gaussian vectors with positive definite proportional covariances, the entropy power of their sum equals the sum of their entropy powers.

**How the definition helps.** The Gaussian entropy formula gives entropy power as the nth root of the covariance determinant. In our own calculation, the covariances K and cK give entropy powers N and cN. Independence gives covariance (1 + c)K for the sum, hence entropy power (1 + c)N.

**Wikipedia:** [Entropy power inequality](https://en.wikipedia.org/wiki/Entropy_power_inequality). It says: “In particular, N(X) = \|K\|¹⁄ⁿ when X is normally distributed with covariance matrix K.”

**Sources:** none listed. No primary source with a working link was found.

### Jensen–Shannon divergence as mutual information cannot exceed one bit

**Remember:** Learning the outcome of a fair coin can give at most one bit.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 3: graduate.

**Definition.** Toss a fair coin Z, then draw X from P for one outcome and from Q for the other. Define the Jensen–Shannon divergence as the mutual information between X and Z, which measures how much X tells us about the coin. Its alternative formula averages the relative entropies of P and Q from their mixture (P + Q)/2.

**Problem.** With logarithms to base 2, Jensen–Shannon divergence lies between 0 and 1. It is 0 exactly when P and Q are the same law.

**How the definition helps.** The coin definition gives the upper bound because learning about a coin cannot reveal more than its one bit of entropy. The lower bound is nonnegativity of mutual information. Zero information means that the draw and the coin are independent, so the two conditional laws P and Q coincide (our own). The work shifts to expanding the mutual information to recover the average of relative entropies (our own).

**Wikipedia:** [Jensen–Shannon divergence](https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence). It says: “It follows from the above result that the Jensen–Shannon divergence is bounded by 0 and 1 because mutual information is non-negative and bounded by H(Z) = 1 in base 2 logarithm.”

**Sources:**

- [J. Lin, Divergence measures based on the Shannon entropy, IEEE Transactions on Information Theory 37 (1991) 145–151](https://doi.org/10.1109/18.61115)

### Likelihood ratios encode Rényi moments

**Remember:** One ratio distribution stores the whole Rényi curve.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** Start with two probability laws p and q on a finite set, with q positive. Replace the original outcome by its likelihood ratio p/q and record that ratio’s distribution under q.

**Problem.** The Rényi divergences of orders in any open subinterval of (0, ∞) determine this ratio distribution on a finite set.

**How the definition helps.** For each order a ≠ 1, the divergence gives the moment of (p/q)ᵃ under q. Our own proof expands that moment as a sum of exponentials in a, weighted by the masses of the positive ratios. Linear independence of distinct exponentials on an open interval determines those ratios and weights uniquely. The remaining probability mass belongs to zero.

**Paper or page:** [Sufficiency of Rényi divergences](https://arxiv.org/abs/2304.12989v6). It says: “Let p ≪ q be probability distributions on a measurable space X. Then there is a probability measure q̃ on (−∞,∞\]”

**Sources:**

- [Sufficiency of Rényi divergences](https://arxiv.org/abs/2304.12989v6)

### Likelihood ratios survive sufficient compression

**Remember:** Keep the likelihood ratio and you keep every f-information value.

*True by definition.* MSC 94A17 (Measures of information, entropy), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** For finite variables X and Y, divide each joint probability by the product of its marginal probabilities wherever that product is positive. Apply a finite convex function f with f(1) = 0 to each ratio. The mean under the product distribution is called f-information.

**Problem.** Suppose statistics S of X and T of Y determine this ratio. Replacing X and Y by S and T preserves their f-information.

**How the definition helps.** Within each group with the same statistics, the ratio has one value. Our own proof sums the joint and product probabilities in each group. Their ratio still has that value, so the grouped mean is identical. The paper connects this ratio condition to sufficiency, usually expressed by requiring each statistic to preserve the other variable’s conditional distribution.

**Paper or page:** [Separable Computation of Information Measures](https://arxiv.org/abs/2501.15301v1). It says: “we have I𝒻(X; Y) = I𝒻(S; T).”

**Sources:**

- [Xiangxiang Xu, Lizhong Zheng, Separable Computation of Information Measures (2025)](https://arxiv.org/abs/2501.15301v1)

### Moment-matched exponential densities uniquely maximize entropy

**Remember:** Matching means makes the entropy gap equal relative entropy.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.ST. Level 3: graduate.

**Definition.** Fix a reference measure, real-valued functions f₁, …, fₙ and target means a₁, …, aₙ. An exponential-family candidate p\* has density proportional to exp(λ₁f₁ + ⋯ + λₙfₙ) relative to the reference measure. Choose the coefficients so that p\* exists and gives each fⱼ mean aⱼ.

**Problem.** Among densities with those same finite means and finite entropy, p\* uniquely maximizes entropy, provided its entropy is finite. Here entropy means the average of minus the log density.

**How the definition helps.** Matching the prescribed means makes the entropy gap equal relative entropy (our own). The log density of p\* is a constant plus a linear combination of the constrained functions. Its means under q and p\* therefore coincide, giving H(p\*) − H(q) = D(q‖p\*) (our own). Gibbs’ inequality gives nonnegativity and permits equality only for densities equal almost everywhere (our own).

**Wikipedia:** [Maximum entropy probability distribution](https://en.wikipedia.org/wiki/Maximum_entropy_probability_distribution). It says: “In the case of equality constraints, this theorem is proved with the calculus of variations and Lagrange multipliers.”

**Sources:** none listed. No primary source with a working link was found.

### Relative entropy by the Donsker–Varadhan formula cannot grow under maps

**Remember:** Every test on the output pulls back to a test on the input.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Define the relative entropy of P from Q as a supremum over real test functions f. The quantity to maximize is the mean of f under P minus the logarithm of the mean of eᶠ under Q. The usual formula is the mean, under P, of the logarithm of the probability ratio.

**Problem.** Applying the same map to two distributions on a finite set cannot increase their relative entropy.

**How the definition helps.** In our own proof, composing any output test with the map gives an input test with the same value. Taking suprema therefore gives the inequality. The Donsker–Varadhan formula identifies these suprema with relative entropy.

**Wikipedia:** [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Donsker and Varadhan's variational formula”

**Sources:**

- [Monroe D. Donsker and S. R. Srinivasa Varadhan, Asymptotic Evaluation of Certain Markov Process Expectations for Large Time IV (1983)](https://doi.org/10.1002/cpa.3160360204)

### Rényi entropy as a slope of log moments decreases with order

**Remember:** A convex function has increasing slopes from a fixed point.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 3: graduate.

**Definition.** For X drawn from a finite probability vector p, set F(t) = log 𝔼\[p(X)ᵗ\]. For t ≥ −1 and t ≠ 0, the Rényi entropy of order 1 + t is −F(t)/t. At order one, use −F′(0), the Shannon entropy.

**Problem.** Rényi entropy does not increase as its order α ≥ 0 grows, with Shannon entropy at order one.

**How the definition helps.** Written as a slope, monotonicity is just a property of convex functions. F is convex by Hölder's inequality, so its slopes from zero increase with t, and their negatives decrease. The work goes into checking that the slope formula equals the usual power-sum formula, and that the slope at zero gives Shannon entropy. The slope view and the proof are our own; the nLab states only the monotonicity.

**nLab:** [Rényi entropy](https://ncatlab.org/nlab/show/R%C3%A9nyi+entropy). It says: “The Rényi entropy is an anti-monotone function in the order-parameter α”

**Sources:** none listed. No primary source with a working link was found.

### Sufficiency preserves the information bottleneck

**Remember:** Keep the predictive law and discard detail the bottleneck never needs.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** A statistic S of X is sufficient for Y if the conditional law of Y given X depends only on S. For each target r, the bottleneck minimizes I(U; X) subject to I(U; Y) ≥ r over representations U drawn using only X.

**Problem.** For finite variables, replacing X by a sufficient statistic S leaves the information bottleneck trade-off with Y unchanged.

**How the definition helps.** Sufficiency lets us resample a representation using only S. Draw the replacement from the conditional law of U given S. The resampling lemma preserves its joint law with Y and gives information cost at most I(U; X). Conversely, any representation drawn from S has the same cost when used through X (our own).

**Paper or page:** [Separable Computation of Information Measures](https://arxiv.org/abs/2501.15301v1). It says: “the optimal U that achieves L\*IB(X, Y; β) satisfies U-S-X-Y.”

**Sources:**

- [Xiangxiang Xu, Lizhong Zheng, Separable Computation of Information Measures (2025)](https://arxiv.org/abs/2501.15301v1)

### The Donsker–Varadhan supremum makes relative entropy convex and lower semicontinuous

**Remember:** A supremum of convex continuous pieces is convex and lower semicontinuous.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 60F10. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** Relative entropy D(P‖Q) is the P-average of log(dP/dQ), where dP/dQ is the density of P relative to Q. It is infinite if Q assigns zero probability to a set with positive P-probability. The Donsker–Varadhan formula instead takes the supremum of ∫g dP − log ∫exp(g) dQ over bounded measurable functions g.

**Problem.** Relative entropy is jointly convex in P and Q. On a complete separable metric space, it is also lower semicontinuous under weak convergence. This means the value at the limit cannot exceed the lower limit of the values when both laws converge against bounded continuous tests.

**How the definition helps.** The supremum formula gives both properties from the corresponding properties of each term (our own). For fixed g, its term is linear in P and convex in Q because negative log is convex (our own). Bounded continuous functions suffice on this metric space, and for them each term is continuous under weak convergence (our own). The work shifts to proving equality with the density formula, including the restriction to bounded continuous functions (our own).

**Wikipedia:** [F-divergence](https://en.wikipedia.org/wiki/F-divergence), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “D<sub>KL</sub>(P; Q) = sup<sub>g</sub> E<sub>P</sub>\[g(X)\] − ln E<sub>Q</sub>\[e<sup>g(X)</sup>\].”

**Paper or page:** [Large Deviations and Information theory for Sub-Critical SINR Randon Network Models](https://arxiv.org/abs/2104.03443v2). It says: “The function Iᵦ(φ) is convex and lower semi-continuous on the space ℳ(𝒲 × 𝒲).”

**Sources:**

- [M. D. Donsker and S. R. S. Varadhan, Asymptotic evaluation of certain Markov process expectations for large time IV, Communications on Pure and Applied Mathematics 36 (1983) 183–212](https://doi.org/10.1002/cpa.3160360204)

### The perspective definition makes all f-divergences jointly convex

**Remember:** Convex pointwise means convex after integration.

*True by definition.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.ST. Level 3: graduate.

**Definition.** Let p and q be probability densities under one measure, and let f be convex on the positive reals with f(1) = 0. Their f-divergence integrates q·f(p/q) wherever both densities are positive. Use the one-sided limit when exactly one density vanishes, and zero where both vanish.

**Problem.** Mix two pairs (P₁, Q₁) and (P₂, Q₂) using the same weight λ between 0 and 1 for the first pair. The divergence of the mixed pair is at most λD(P₁‖Q₁) + (1 − λ)D(P₂‖Q₂).

**How the definition helps.** Convexity of the integrand gives joint convexity after integration. For positive densities, the mixed ratio averages the two ratios with weights proportional to their contributions to the mixed denominator (our own). Convexity of f gives the pointwise inequality, which extends to zero densities by the defining limits (our own).

**Wikipedia:** [F-divergence](https://en.wikipedia.org/wiki/F-divergence). It says: “This follows from the convexity of the mapping (p,q) ↦ q f(p/q) on ℝ₊².”

**Sources:** none listed. No primary source with a working link was found.

### The supremum over partitions gives coarser information no more entropy

**Remember:** Fewer available partitions cannot give a larger supremum.

*True by definition.* MSC 94A17 (Measures of information, entropy), 28D20. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** On a probability space with law μ, consider all finite partitions into events of a given σ-algebra. Its entropy is the supremum of −∑ μ(A) log μ(A) over those partitions, summing over parts A and counting zero-probability terms as zero.

**Problem.** A smaller σ-algebra has at most the entropy of a larger one on the same probability space. Thus H(f(Y)) ≤ H(Y) for any measurable f, with each variable’s entropy taken for the events it determines.

**How the definition helps.** The supremum definition shows the inequality because a smaller σ-algebra offers fewer finite partitions (our own). Every event determined by f(Y) is also determined by Y (our own). The discrete sum formula instead uses the chain rule for entropy after grouping the values of Y (our own). The work shifts to proving that the partition supremum recovers the sum formula for variables with countably many values.

**nLab:** [entropy](https://ncatlab.org/nlab/show/entropy). It says: “the entropy is the supremum, over all ways of expressing X as an internal disjoint union of finitely many elements of the σ-algebra M”

**Sources:** none listed. No primary source with a working link was found.

### Tree factors simplify distribution matching

**Remember:** Keep the tree with the most information on its edges.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** Choose a rooted spanning tree on the variables. A tree model multiplies the root probability by one conditional probability per child, given its parent.

**Problem.** For a finite joint law, a tree of maximum total pairwise mutual information minimizes relative entropy from the original law to the model. The model uses the original root and conditional probabilities.

**How the definition helps.** The tree product turns the log probability into a sum with one term per child and one for the root. Our own fixed-tree argument minimizes each term separately using nonnegativity of relative entropy. Substituting the optimal probabilities leaves a constant minus the sum of edge weights. Thus a tree with maximum weight gives minimum error.

**Wikipedia:** [Chow–Liu tree](https://en.wikipedia.org/wiki/Chow%E2%80%93Liu_tree). It says: “only the sum of the pairwise mutual informations”

**Sources:**

- [C. K. Chow and C. N. Liu, Approximating Discrete Probability Distributions with Dependence Trees (1968)](https://doi.org/10.1109/TIT.1968.1054142)

### Giving polar channels the earlier bit preserves total symmetric capacity

**Remember:** Revealing the earlier bit turns the two terms into a chain rule.

*True by definition. Confidence: low.* MSC 94A24 (Coding theorems (Shannon theory)), 94A40. arXiv cs.IT. Level 3: graduate.

**Definition.** For independent fair bits U₁ and U₂, send U₁ + U₂ modulo two and U₂ through separate uses of the channel. Both new channels report both outputs, but the channel for U₂ also reports U₁. Symmetric capacity is the mutual information between a fair input bit and the channel output.

**Problem.** For a binary-input memoryless channel, the two new channels have total symmetric capacity twice that of the original channel.

**How the definition helps.** Revealing U₁ to the second channel supplies the conditioning in the mutual information chain rule (our own proof). Since the bits are independent, the capacities sum to the information both outputs give about the input pair. The transform is invertible and produces independent fair inputs, so independent channel uses give twice the original symmetric capacity.

**Wikipedia:** [Polar code (coding theory)](https://en.wikipedia.org/wiki/Polar_code_%28coding_theory%29). It says: “which transforms the physical channel into virtual outer channels.”

**Sources:**

- [Erdal Arıkan, Channel Polarization (2009)](https://doi.org/10.1109/TIT.2009.2021379)

### Orthonormal representations make the Lovász number bound Shannon capacity

**Remember:** Distinguishable words give orthogonal tensor products.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)), 05C50. arXiv cs.IT, math.CO. Level 3: graduate.

**Definition.** An orthonormal representation of a finite graph assigns each vertex i a real unit vector uᵢ, with nonadjacent vertices receiving orthogonal vectors. The Lovász number minimizes maxᵢ 1/(c·uᵢ)² over all such representations and unit vectors c, taking division by zero as infinity.

**Problem.** Let G be the confusability graph of a channel, with edges between symbols the channel can confuse. Its Shannon capacity, the best number of distinguishable symbols per use, is at most the Lovász number.

**How the definition helps.** A distinguishing coordinate makes the tensor vectors of distinct codewords orthogonal (our own explanation of Lovász’s proof). For an optimal representation with Lovász number θ, each length-n codeword has squared overlap at least θ⁻ⁿ with the tensor power of c. Bessel’s inequality bounds the sum of the squared overlaps by one, giving at most θⁿ codewords and capacity at most θ.

**Wikipedia:** [Lovász number](https://en.wikipedia.org/wiki/Lov%C3%A1sz_number). It says: “the Lovász number provides an upper bound on the Shannon capacity of graph”

**Sources:**

- [László Lovász, On the Shannon Capacity of a Graph (1979)](https://doi.org/10.1109/TIT.1979.1055985)

### Zero-error codes as independent sets in strong powers have convergent rates

**Remember:** Pairing two good codes multiplies their sizes.

*True by definition. Confidence: medium.* MSC 94A24 (Coding theorems (Shannon theory)), 05C69. arXiv cs.IT, math.CO. Level 3: graduate.

**Definition.** Join distinct channel inputs when they can produce a common output. In the nth strong power, distinct words are adjacent when their symbols are equal or adjacent in every position. A zero-error code is an independent set in this graph, meaning a set containing no adjacent pair.

**Problem.** For a memoryless channel with finite input and output sets, the zero-error rate (1/n) log α(Gⁿ) converges as n grows. Here α(Gⁿ) is the largest size of a code of length n.

**How the definition helps.** With codes as independent sets, joining a code of length a and a code of length b gives a code of length a + b. So the largest code sizes are supermultiplicative, and Fekete's lemma gives convergence of the rates to their supremum. The work goes into checking that independent channel uses confuse two words exactly when each position is equal or confusable. The Wikipedia text gives the strong power model; the convergence argument is our own.

**Wikipedia:** [Shannon capacity of a graph](https://en.wikipedia.org/wiki/Shannon_capacity_of_a_graph). It says: “the graph representing the length-two codewords and their confusable pairs is G ⊠ G”

**Sources:**

- [Claude E. Shannon, The Zero Error Capacity of a Noisy Channel (1956)](https://doi.org/10.1109/TIT.1956.1056798)

### Confusion graphs make maximal classes factor

**Remember:** One conflicting coordinate prevents two sequences from sharing a class.

*Makes the theorem clean to state or prove.* MSC 94A29 (Source coding), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Join two source symbols in a confusion graph if the decoder must tell them apart. For sequences, join two sequences if their symbols are joined in at least one position. An independent set is a class with no joined pair.

**Problem.** Every maximal independent set of the sequence confusion graph is a product of maximal independent sets of the symbol confusion graph.

**How the definition helps.** In our own proof, a conflict in any coordinate prevents two words from sharing an independent set. Hence each coordinate projection is independent, and their product is an independent superset. Maximality forces equality with that product. Enlarging any projection while keeping it independent would enlarge the product, so each projection is maximal.

**Paper or page:** [Information Leakage in Zero-Error Source Coding: A Graph-Theoretic Perspective](https://arxiv.org/abs/2102.01908v1). It says: “Consider any maximal independent set T ∈ 𝓘ₘₐₓ(Γₜ). We have T = T₁ × T₂ × ⋯ × Tₜ”

**Sources:**

- [Yucheng Liu, Lawrence Ong, Sarah Johnson, Joerg Kliewer, Parastoo Sadeghi, Phee Lep Yeoh, Information Leakage in Zero-Error Source Coding: A Graph-Theoretic Perspective (2021)](https://arxiv.org/abs/2102.01908v1)

### Tunstall dictionaries as trees make greedy splitting maximize mean phrase length

**Remember:** Splitting a leaf adds its probability to the mean phrase length.

*True by definition. Confidence: low.* MSC 94A29 (Source coding), 94A45. arXiv cs.IT. Level 3: graduate.

**Definition.** A finite complete dictionary consists of the root-to-leaf words in a finite tree where every internal node has one child for each source symbol.

**Problem.** Take a memoryless source with at least two symbols, all of positive probability. Among complete dictionaries of the same size, the one built by always splitting the most probable leaf has the largest mean phrase length.

**How the definition helps.** Our own proof counts the mean phrase length by summing the probabilities of reaching internal nodes. Each split adds the same number of leaves, so dictionary size fixes the number of splits. Every descendant is less probable than its ancestor. Thus the most probable unsplit node is an available leaf, and greedy splitting collects the largest possible sum.

**Wikipedia:** [Tunstall coding](https://en.wikipedia.org/wiki/Tunstall_coding). It says: “The dictionary in question, D, is constructed as a tree of probabilities, in which each edge is associated to a letter from the input alphabet.”

**Sources:** none listed. No primary source with a working link was found.

### Test channels make rate distortion convex

**Remember:** Mix two test channels to mix their allowed distortions.

*Makes the theorem clean to state or prove.* MSC 94A34 (Rate-distortion theory in information and communication theory). arXiv math.IT, cs.IT. Level 3: graduate.

**Definition.** Fix a source distribution and a distortion cost for each source symbol and reproduction pair. A test channel assigns a probability distribution on reproductions to every source symbol. The rate–distortion function at D minimizes mutual information between source and reproduction over test channels with mean distortion at most D.

**Problem.** For a finite source and a finite reproduction alphabet, the rate–distortion function is convex on its feasible distortion range.

**How the definition helps.** The channel definition lets us mix two candidates, so their mean distortions mix linearly. Our own proof uses convexity of mutual information in the channel with fixed input law. The work moves to the rate–distortion theorem, which identifies the optimization with the best rate for long blocks.

**Wikipedia:** [Rate–distortion theory](https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory). It says: “monotonically decreasing convex (U) function and thus the shape for the function in the examples is typical”

**Sources:** none listed. No primary source with a working link was found.

### Unital channels cannot lower entropy

**Remember:** Fix the most mixed state and entropy cannot go down.

*Rules out counterexamples.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A17. arXiv cs.IT, quant-ph. Level 3: graduate.

**Definition.** A density matrix is a positive semidefinite matrix with trace one. A quantum channel is a linear map preserving trace and positivity, even when tensored with the identity on any auxiliary system. On a fixed finite-dimensional space, a channel is unital if it fixes the state whose eigenvalues are all equal.

**Problem.** A finite-dimensional unital quantum channel cannot decrease the Shannon entropy of the eigenvalues of a density matrix.

**How the definition helps.** Unitality keeps the uniform state fixed and excludes a channel that resets every input to one pure state (our own). Relative entropy from the uniform state equals log dimension minus the entropy of the eigenvalues. Lindblad’s inequality says applying the same channel to both states cannot increase relative entropy, so entropy cannot decrease (our own derivation).

**nLab:** [unital quantum channel](https://ncatlab.org/nlab/show/unital+quantum+channel). It says: “is called unital if it preserves the maximally mixed quantum state.”

**Sources:**

- [Göran Lindblad, Completely positive maps and entropy inequalities (1975)](https://doi.org/10.1007/BF01609396)

### Generators that fool all tests and double length are one-way functions

**Remember:** An inverter becomes a test, since few strings have seeds.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A length-doubling pseudorandom generator efficiently maps each n-bit seed to a 2n-bit string. For every probabilistic polynomial-time test, its acceptance probabilities on a uniform seed’s output and on uniform 2n-bit strings differ negligibly in n.

**Problem.** Such a generator is a one-way function. That is, no efficient algorithm finds a seed for its output with non-negligible probability.

**How the definition helps.** Our own proof uses an alleged inverter as a test by checking whether its proposed seed generates the test string. On generated strings the test succeeds exactly when inversion succeeds. On uniform strings it succeeds with probability at most 2⁻ⁿ because at most 2ⁿ strings have seeds. Pseudorandomness therefore forces inversion success to be negligible.

**Wikipedia:** [Pseudorandom generator](https://en.wikipedia.org/wiki/Pseudorandom_generator). It says: “The pseudorandom generator theorem shows that cryptographically secure pseudorandom generators exist if and only if one-way functions exist.”

**Sources:** none listed. No primary source with a working link was found.

### Hard-core bits defined by indistinguishability extend one-way permutations into generators

**Remember:** A permutation gives uniform output, and a hard-core bit adds one more.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** For uniform n-bit X, an efficiently computable bit b is hard-core for f if (f(X), b(X)) and (f(X), B) are computationally indistinguishable. Here B is an independent fair bit. Every probabilistic polynomial-time test must have negligible acceptance-probability difference as n grows.

**Problem.** Let f be a length-preserving one-way permutation with hard-core bit b. Then x ↦ (f(x), b(x)) is a pseudorandom generator that stretches by one bit.

**How the definition helps.** A permutation sends uniform X to uniform f(X), so appending an independent fair bit gives a uniform string. The hard-core definition makes the generator output computationally indistinguishable from that string (our own proof).

**Wikipedia:** [Hard-core predicate](https://en.wikipedia.org/wiki/Hard-core_predicate). It says: “Hard-core predicates give a way to construct a pseudorandom generator from any one-way permutation.”

**Sources:** none listed. No primary source with a working link was found.

### Indistinguishability makes semantic security provable for real ciphers

**Remember:** Choose two equal-length messages and guess which one the ciphertext encrypts.

*True by definition.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 3: graduate.

**Definition.** In the public-key game, a probabilistic polynomial-time adversary sees a fresh public key and chooses two equal-length messages. It receives a fresh encryption of the message selected by an independent fair bit and guesses that bit. Indistinguishability requires every such adversary’s success probability to differ negligibly from one half as the security parameter grows.

**Problem.** Semantic security and indistinguishability are equivalent, as Goldwasser and Micali proved. So a proof that the indistinguishability game is hard for a scheme shows that it hides all partial information about its messages.

**How the definition helps.** Goldwasser and Micali’s equivalence theorem reduces semantic security to this single guessing game. Semantic security requires that any efficiently obtainable message information can also be obtained with comparable success from the permitted prior information alone.

**Wikipedia:** [Semantic security](https://en.wikipedia.org/wiki/Semantic_security). It says: “This latter definition is more common than the original definition of semantic security because it better facilitates proving the security of practical cryptosystems.”

**Sources:**

- [S. Goldwasser and S. Micali, Probabilistic encryption, Journal of Computer and System Sciences 28 (1984) 270–299](https://doi.org/10.1016/0022-0000(84)90070-9)

### Negligible success probabilities stay negligible under polynomially many repeats

**Remember:** Smaller than one over every polynomial, even after polynomially many tries.

*True by definition.* MSC 94A60 (Cryptography), 68Q15. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A function μ on the natural numbers is negligible if, for every positive polynomial p, \|μ(n)\| &lt; 1/p(n) for all large n. Cryptography uses it to say that an attack succeeds with essentially zero probability, as a function of the key length n.

**Problem.** If μ is negligible and p is a positive polynomial, then p(n)μ(n) is negligible. So an attack repeated polynomially many times still succeeds only with negligible probability.

**How the definition helps.** To bound \|p(n)μ(n)\| by 1/q(n), apply negligibility of μ to the positive polynomial pq (our own proof). The resulting bound holds eventually for each positive polynomial q. The union bound now covers polynomially many attempts, each with success probability at most μ(n).

**Wikipedia:** [Negligible function](https://en.wikipedia.org/wiki/Negligible_function). It says: “if an attack succeeds in violating a security condition only with negligible probability, and the attack is repeated a polynomial number of times, the success probability of the overall attack still remains negligible.”

**Sources:**

- [O. Goldreich, Foundations of Cryptography, Volume 1: Basic Tools, Cambridge University Press (2001)](https://doi.org/10.1017/CBO9780511546891)

### Passing the next-bit test means passing every efficient statistical test

**Remember:** If no one can guess the next bit, no one can tell it from random.

*True by definition.* MSC 94A60 (Cryptography), 68Q15. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** Consider distributions on bit strings of polynomial length indexed by a security parameter n. Given a uniform random prefix length below the string length and the corresponding sampled prefix, each probabilistic polynomial-time predictor must have negligible advantage over chance. Advantage is its probability of correctly predicting the next bit minus one half.

**Problem.** A family of bit strings that passes the next-bit test also passes Yao's test. So no efficient algorithm can tell it from truly random strings.

**How the definition helps.** Yao’s hybrid argument compares strings with progressively longer sampled prefixes and uniform suffixes (our own summary). A nonnegligible distinction between the endpoints yields a prediction advantage at a random prefix length, losing at most a polynomial factor.

**Wikipedia:** [Next-bit test](https://en.wikipedia.org/wiki/Next-bit_test). It says: “The next-bit test is a particular case of Yao's test for random sequences, and passing it is therefore a necessary condition for passing Yao's test. However, it has also been shown a sufficient condition by Yao.”

**Sources:**

- [A. C. Yao, Theory and application of trapdoor functions, FOCS 1982](https://doi.org/10.1109/SFCS.1982.45)

### Single-challenge indistinguishability extends to many challenges by swapping one at a time

**Remember:** Replace one challenge ciphertext at a time.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 3: graduate.

**Definition.** After seeing a fresh public key, a probabilistic polynomial-time adversary chooses two equal-length messages. It sees one fresh encryption, selected by an independent fair bit, and guesses the bit. Single-challenge security requires every such adversary’s guessing advantage over chance to be negligible in the security parameter.

**Problem.** Single-challenge indistinguishability implies indistinguishability for polynomially many challenges under the same public key. Each encryption uses fresh independent randomness.

**How the definition helps.** Our own hybrid proof switches the selected message in one challenge at a time. The public key lets the reduction encrypt all other messages with independent randomness. A nonnegligible total difference across polynomially many switches gives a nonnegligible single-challenge advantage by choosing a random switch.

**Wikipedia:** [Ciphertext indistinguishability](https://en.wikipedia.org/wiki/Ciphertext_indistinguishability). It says: “an adversary will be unable to distinguish pairs of ciphertext based on the message that they encrypt.”

**Sources:**

- [Shafi Goldwasser and Silvio Micali, Probabilistic Encryption (1984)](https://doi.org/10.1016/0022-0000(84)90070-9)

### Witness indistinguishability survives parallel repetition, unlike zero knowledge

**Remember:** Switch the witness and the verifier’s view stays indistinguishable.

*True by definition.* MSC 94A60 (Cryptography), 68Q10. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** For every efficient verifier and every true instance, compare its views when the prover uses either of two valid witnesses. Witness indistinguishability requires computational indistinguishability for every such witness pair and every auxiliary input, as the instance length grows.

**Problem.** Witness indistinguishability survives polynomially many parallel repetitions with independent prover randomness. Zero knowledge does not always survive parallel repetition.

**How the definition helps.** Our own summary of the Feige–Shamir argument changes the witness in one parallel copy at a time. A verifier with the witnesses as auxiliary input can simulate the other copies, so a noticeable overall difference would distinguish one copy. Goldreich and Krawczyk give the zero-knowledge counterexample (our own attribution).

**Wikipedia:** [Witness-indistinguishable proof](https://en.wikipedia.org/wiki/Witness-indistinguishable_proof). It says: “Unlike zero-knowledge proofs, they remain secure when multiple proofs are being performed in parallel.”

**Sources:**

- [U. Feige and A. Shamir, Witness indistinguishable and witness hiding protocols, STOC 1990](https://doi.org/10.1145/100216.100272)

### Zero knowledge with auxiliary input is closed under sequential composition

**Remember:** If prior knowledge cannot help, earlier proofs cannot help either.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68Q10. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** For each probabilistic polynomial-time verifier there must exist an efficient simulator that receives the true statement and the verifier’s auxiliary string. Its output must be computationally indistinguishable from the verifier’s real view for every true statement and auxiliary input.

**Problem.** If a proof is zero knowledge with auxiliary input, then running it polynomially many times in sequence is still zero knowledge.

**How the definition helps.** The auxiliary input can encode the verifier’s state after all earlier runs (our own summary). The simulator can therefore simulate the next run from that state. Goldreich and Oren’s sequential composition theorem justifies repeating this step polynomially many times (our own attribution).

**Wikipedia:** [Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof). It says: “The auxiliary string z in the definition plays the role of "prior knowledge" (including the random coins of V̂).”

**Sources:**

- [O. Goldreich and Y. Oren, Definitions and properties of zero-knowledge proof systems, Journal of Cryptology 7 (1994) 1–32](https://doi.org/10.1007/BF00195207)

### Balanced key tables give perfect secrecy

**Remember:** Balance every output across message positions to hide the message.

*True by definition.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** For a finite key table, assign every key-message pair a set of the same positive size, disjoint across messages for each key. The table is equitably ordered if, for each output, equally many keys allow that output for each message.

**Problem.** Choose the key uniformly and independently of the message. Choose an output uniformly from its assigned set. Equitable ordering makes the output independent of the message.

**How the definition helps.** Equal counts make each output equally likely under every message (our own counting argument). Its conditional probability is the number of keys allowing that output for the message divided by the key count and the common set size. Thus the output is independent of the message.

**Paper or page:** [Splitting authentication codes with perfect secrecy: new results, constructions and connections with algebraic manipulation detection codes](https://arxiv.org/abs/2104.11076v2). It says: “If a splitting BIBD is equitably ordered, then it yields an authentication code with perfect secrecy.”

**Sources:**

- [Maura B. Paterson, Douglas R. Stinson, Splitting authentication codes with perfect secrecy: new results, constructions and connections with algebraic manipulation detection codes (2021)](https://arxiv.org/abs/2104.11076v2)

### Entropy-defined threshold schemes need each share as large as the secret

**Remember:** The last share must supply all the missing entropy.

*True by definition. Confidence: medium.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A17. arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** For a secret S and n shares, fix a threshold k with 1 ≤ k ≤ n. A perfect threshold scheme requires H(S ∣ A) = H(S) for every collection A of fewer than k shares. It requires H(S ∣ A) = 0 for every collection of k shares.

**Problem.** In a perfect threshold scheme with finitely many values, every share has entropy at least the entropy of the secret.

**How the definition helps.** In our own proof, choose any share X and a collection A of k − 1 other shares. Adding X drops the secret’s conditional entropy from H(S) to zero. This drop equals I(S; X ∣ A), which is at most H(X ∣ A) ≤ H(X).

**Wikipedia:** [Secret sharing](https://en.wikipedia.org/wiki/Secret_sharing). It says: “Each share of the secret must be at least as large as the secret itself.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudorandom functions defined by oracle tests give secure message authentication codes

**Remember:** A random function gives a fresh message an independent tag.

*True by definition. Confidence: medium.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** A pseudorandom function family consists of efficiently evaluated keyed functions with common finite input and output sets at each security parameter. Every probabilistic polynomial-time oracle test must have negligible acceptance-probability difference between a uniformly keyed member and a uniformly random function. The test may choose its queries adaptively.

**Problem.** Use the function value as the tag of a message. Then no efficient attacker who can ask for tags of chosen messages can produce a valid tag for a new message, except with negligible probability. This needs tags long enough that guessing one is negligible.

**How the definition helps.** Our own reduction runs the attacker with the test oracle supplying tags, then checks the proposed fresh-message tag against that oracle. For a random function the fresh tag is independent and uniform, so guessing succeeds with probability one divided by the tag count. Pseudorandomness changes this negligible probability by at most a negligible amount.

**Wikipedia:** [Pseudorandom function family](https://en.wikipedia.org/wiki/Pseudorandom_function_family). It says: “Constructing deterministic, memoryless authentication schemes”

**Sources:**

- [Oded Goldreich, Shafi Goldwasser and Silvio Micali, On the Cryptographic Applications of Random Functions (1985)](https://doi.org/10.1007/3-540-39568-7_22)
- [Oded Goldreich, Shafi Goldwasser and Silvio Micali, How to Construct Random Functions (1986)](https://doi.org/10.1145/6490.6503)

### Fourier weights count dual words

**Remember:** One Fourier transform changes each zero and one factor.

*Makes the theorem clean to state or prove.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 3: graduate.

**Definition.** The weight enumerator of a binary code sums one monomial for each word. The monomial has a factor x for each zero and a factor y for each one, so it is a product of one-bit factors.

**Problem.** For a binary linear code C, substitute x + y and x − y for the respective variables in its weight enumerator. Dividing by \|C\| gives the enumerator of the dual, the words orthogonal to every word of C.

**How the definition helps.** Our own proof averages a sign over u in C for each binary word v, taking +1 for orthogonal pairs and −1 otherwise. Character orthogonality makes this average one for dual words and zero otherwise. Weight each v by its monomial and sum first over v. Each coordinate contributes x + y or x − y according as the corresponding bit of u is zero or one.

**Wikipedia:** [Enumerator polynomial](https://en.wikipedia.org/wiki/Enumerator_polynomial). It says: “W(C⊥;x,y) = (1/\|C\|) W(C;y−x,y+x).”

**Paper or page:** [Steiner systems S(2,4,2ᵐ) supported by a family of extended cyclic codes](https://arxiv.org/abs/1904.02310v2). It says: “A<sup>\\perp</sup> (z)=q<sup>-\\kappa </sup>\\Big(1+(q-1)z\\Big)<sup>vA\\Big</sup>(\\frac{1-z}{1+(q-1)z}\\Big).”

**Sources:**

- [Jessie MacWilliams, A Theorem on the Distribution of Weights in a Systematic Code (1963)](https://doi.org/10.1002/j.1538-7305.1963.tb04003.x)

### Reed–Muller codes as polynomial evaluations make their duals Reed–Muller codes

**Remember:** A monomial missing a variable sums to zero over the cube.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 3: graduate.

**Definition.** RM(r, m) consists of evaluation vectors of polynomials over the two-element field of total degree at most r at all binary m-tuples in fixed order.

**Problem.** For 0 ≤ r &lt; m, the dual of RM(r, m) is RM(m − r − 1, m). The dual is the set of words orthogonal to every codeword.

**How the definition helps.** In our own proof, the dot product sums a polynomial product of degree at most m − 1 over the binary cube. Every monomial misses a variable, so its values cancel in pairs. Squarefree monomials of degree at most r give a basis for RM(r, m). Complementing variable sets shows the two code dimensions add to 2ᵐ, turning orthogonality into equality with the dual.

**Wikipedia:** [Reed–Muller code](https://en.wikipedia.org/wiki/Reed%E2%80%93Muller_code). It says: “The dual code to RM(r,m) is RM(m-r-1,m).”

**Sources:** none listed. No primary source with a working link was found.

### Consecutive roots bound BCH distance

**Remember:** Consecutive roots rule out a word with too few nonzero symbols.

*True by definition.* MSC 94B15 (Cyclic codes), 94B65. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Represent a length-n word over a finite field by its polynomial of degree below n, using the symbols as coefficients. Choose α of multiplicative order n in that field or a larger field. Define a narrow-sense BCH code by requiring every word polynomial to vanish at the first d − 1 positive powers of α.

**Problem.** For 2 ≤ d ≤ n, any two distinct words of this code differ in at least d positions.

**How the definition helps.** A difference of codewords has the same prescribed roots, so it suffices to rule out nonzero differences of weight s &lt; d (our own). At occupied positions j, the first s root equations have columns consisting of powers one through s of αʲ. Dividing each column by αʲ gives a Vandermonde matrix on distinct nodes. Its nonzero determinant forces every coefficient to vanish.

**Wikipedia:** [BCH code](https://en.wikipedia.org/wiki/BCH_code). It says: “A BCH code has minimal Hamming distance at least d.”

**Sources:** none listed. No primary source with a working link was found.

### Different twists give complementary duals

**Remember:** Different twists force a code and its dual apart.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv math.IT. Level 3: graduate.

**Definition.** Take a linear code over a finite field. A twisted shift moves each entry right one place and wraps the last entry to the front multiplied by a nonzero λ. Call the code constacyclic when it is closed under this shift.

**Problem.** If λ² ≠ 1, the only codeword orthogonal to every codeword under the ordinary dot product is zero.

**How the definition helps.** In our own proof the dual uses inverse twist, since opposite twists preserve dot products. Shift a nonzero shared word until its last entry is nonzero, using identical shifts while that entry vanishes. Subtracting the next shifts puts the first unit vector in the sum, since λ ≠ λ⁻¹. The shifts differ only there, so the sum is shift-invariant and contains every unit vector, forcing zero intersection by dimensions.

**Paper or page:** [The ℓ-intersection Pairs of Constacyclic and Conjucyclic Codes](https://arxiv.org/abs/2309.01985v1). It says: “such that λ² ≠ 1. Then C is an LCD code.”

**Sources:**

- [The ℓ-intersection Pairs of Constacyclic and Conjucyclic Codes](https://arxiv.org/abs/2309.01985v1)

### Pole budgets bound code distance

**Remember:** Each zero spends one unit of the pole budget.

*True by definition.* MSC 94B27 (Geometric methods (including applications of algebraic geometry) applied to coding theory), 94B65. arXiv math.IT. Level 3: graduate.

**Definition.** Choose n distinct rational points on a smooth projective geometrically irreducible curve over a finite field. At other specified rational points prescribe maximum pole orders totaling m. At the n chosen points, evaluate every rational function defined over the field that obeys these bounds and has no other poles.

**Problem.** If m &lt; n, any two different codewords differ in at least n − m positions.

**How the definition helps.** The pole restriction limits the number of positions where two evaluations can agree. Our own proof applies the degree theorem for rational functions to the difference of the functions. Its zeros and poles have equal total order when counted over the algebraic closure. Its poles have total order at most m, so at most m evaluation points can be zeros.

**Paper or page:** [Attaining Sudan's decoding radius with no genus penalty for algebraic geometry codes](https://arxiv.org/abs/2103.11188v2). It says: “d(C) ≥ n − deg G”

**Sources:** none listed. No primary source with a working link was found.

### Tilting bounds code spheres

**Remember:** Choose the tilt that makes the target weight average.

*Makes the theorem clean to state or prove.* MSC 94B65 (Bounds on codes). arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Give each symbol a nonnegative weight w, with minimum zero and some positive weight in the finite alphabet. For y &gt; 0, the tilted distribution assigns a symbol of weight w probability yʷ/F(y), where F(y) sums yʷ over all symbols. A word’s weight is the sum of its symbol weights.

**Problem.** Let W/n lie strictly between zero and the mean symbol weight under uniform sampling. The number of length-n words of weight W is at most F(y)ⁿ divided by y raised to W. The best bound occurs when the mean symbol weight equals W/n.

**How the definition helps.** Independent sampling gives every word of weight W the same probability, so counting those words gives the bound. Our own calculation differentiates the logarithm of the bound with respect to log y. The derivative is n times the mean symbol weight minus W. The mean increases strictly with y, so matching the mean gives the minimum.

**Paper or page:** [Bounds on Sphere Sizes in the Sum-Rank Metric and Coordinate-Additive Metrics](https://arxiv.org/abs/2404.10666v3). It says: “the minimum on the right-hand side is attained at y = q⁻ᵝ”

**Sources:**

- [Hugo Beeloo-Sauerbier Couvée, Thomas Jerkovits, Jessica Bariffi, Bounds on Sphere Sizes in the Sum-Rank Metric and Coordinate-Additive Metrics (2025)](https://arxiv.org/abs/2404.10666v3)

### Sibson information as a minimum over product laws obeys data processing

**Remember:** Push the trial product law through the same channel.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT, math.IT. Level 4: research.

**Definition.** For finite random variables X and Y, fix an order α &gt; 0. Sibson information is the minimum Rényi divergence from their joint law to Pₓ ⊗ Q over all laws Q on Y’s alphabet. At order one use relative entropy.

**Problem.** Let X, Y and Z have finitely many values, with Z depending on X only through Y. Then for every order α &gt; 0, Sibson information between X and Z is at most that between X and Y.

**How the definition helps.** Our own proof applies Rényi data processing to the channel that keeps X and sends Y to Z. It sends the joint law to the joint law of X and Z and every trial product to another admissible product. Starting with a minimizing product for Y therefore gives an admissible value for Z no larger than the original minimum.

**Paper or page:** [Sibson α-Mutual Information and Its Variational Representations](https://arxiv.org/abs/2405.08352v2). It says: “Data processing inequality: Let X,Y,Z be three random variables jointly distributed”

**Sources:**

- [Sibson α-Mutual Information and Its Variational Representations, Theorem 4.1](https://arxiv.org/abs/2405.08352v2)

### Spectrum distance controls Shannon capacity

**Remember:** Uniformly close bounds have uniformly close minima.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)). arXiv math.IT. Level 4: research.

**Definition.** A spectrum function assigns nonnegative values to finite graphs, gives one to the one-vertex graph, adds under disjoint union and multiplies under strong product. A vertex map preserving distinct nonneighbors must send a graph to one of at least equal value. Spectrum distance is the maximum absolute difference between the two graphs’ values over all spectrum functions.

**Problem.** The absolute difference in Shannon capacities is at most the spectrum distance between two finite graphs.

**How the definition helps.** The distance bounds every spectrum value’s change, so it bounds the change in their minimum. This quantitative argument is our own. Shannon capacity measures the growth of the largest distinguishable message set over repeated channel uses. The graph form of Strassen’s duality theorem identifies that growth factor with the minimum spectrum value.

**Paper or page:** [The asymptotic spectrum distance, graph limits, and the Shannon capacity](https://arxiv.org/abs/2404.16763v1). It says: “converges to a graph H in the asymptotic spectrum distance, then (Θ(Gᵢ))ᵢ∈ℕ converges to Θ(H).”

**Sources:**

- [The asymptotic spectrum distance, graph limits, and the Shannon capacity](https://arxiv.org/abs/2404.16763v1)

### Asking only indistinguishability lets obfuscation escape the impossibility theorem

**Remember:** Hide which program you wrote, not everything about the program.

*Rules out counterexamples.* MSC 94A60 (Cryptography), 68Q06. arXiv cs.CR, cs.CC. Level 4: research.

**Definition.** An indistinguishability obfuscator outputs a circuit of polynomially bounded size computing the input circuit’s function. For every pair of equal-size equivalent circuit families, their randomized obfuscations must be computationally indistinguishable as the security parameter grows. The inefficient variant allows unbounded computation when producing the circuit.

**Problem.** Barak et al. showed that black-box obfuscation is impossible for some programs. Their counterexample does not apply to indistinguishability obfuscation, and an inefficient indistinguishability obfuscator exists for all circuits.

**How the definition helps.** Revealing a property common to every implementation can violate black-box security while preserving indistinguishability (our own explanation). For an inefficient construction, enumerate circuits by increasing size with a fixed order for ties. Output the first equivalent circuit, testing equivalence by exhaustive evaluation. Equivalent circuits then give identical outputs.

**Wikipedia:** [Indistinguishability obfuscation](https://en.wikipedia.org/wiki/Indistinguishability_obfuscation), [Black-box obfuscation](https://en.wikipedia.org/wiki/Black-box_obfuscation). It says: “Barak et al. constructed a family of unobfuscatable programs, for which an efficient attacker can always learn more from any obfuscated code than from black-box access.”

**Sources:**

- [B. Barak, O. Goldreich, R. Impagliazzo, S. Rudich, A. Sahai, S. Vadhan and K. Yang, On the (im)possibility of obfuscating programs, Journal of the ACM 59 (2012)](https://doi.org/10.1145/2160158.2160159)

### Universally composable security keeps protocols secure inside any larger system

**Remember:** If no environment can tell, no surrounding system can tell either.

*Makes the theorem clean to state or prove.* MSC 94A60 (Cryptography), 68M25. arXiv cs.CR. Level 4: research.

**Definition.** For each efficient real attacker, some efficient ideal attacker must simulate interaction with the ideal functionality. For every efficient environment supplying inputs, reading outputs and communicating with the attacker, the real and ideal output distributions must be computationally indistinguishable.

**Problem.** Under Canetti’s universal composition theorem, replacing ideal calls with a securely emulating protocol preserves security in efficient surrounding protocols satisfying the theorem’s session conditions. Stand-alone security alone gives no such guarantee.

**How the definition helps.** Canetti’s proof treats the surrounding computation as part of the distinguishing environment (our own summary). Universal quantification over environments then covers the larger execution under the composition theorem’s conditions.

**Wikipedia:** [Universal composability](https://en.wikipedia.org/wiki/Universal_composability). It says: “Protocols remain secure even if arbitrarily composed with other instances of the same or other protocols.”

**Sources:**

- [R. Canetti, Universally composable security: a new paradigm for cryptographic protocols, FOCS 2001](https://doi.org/10.1109/SFCS.2001.959888)

### Gabidulin codes as linearized polynomial evaluations reach the rank Singleton bound

**Remember:** A big kernel would force too many roots.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Let K be a finite extension of degree m of a field with q elements. Choose n points in K linearly independent over the smaller field, with 1 ≤ k ≤ n ≤ m. The Gabidulin code evaluates all polynomials ∑ᵢ aᵢ x<sup>(qⁱ)</sup> at these points, with 0 ≤ i &lt; k and coefficients in K.

**Problem.** Every nonzero word of a Gabidulin code of dimension k has rank at least n − k + 1. The rank of a word is the dimension of the span of its entries over the small field.

**How the definition helps.** In our own proof a nonzero evaluation polynomial is linear over the small field and has degree at most q<sup>(k−1)</sup>. Its kernel has at most that many elements, hence dimension at most k − 1. Rank and nullity on the n-dimensional evaluation span give image dimension at least n − k + 1.

**Paper or page:** [On the list decodability of rank-metric codes containing Gabidulin codes](https://arxiv.org/abs/2103.07547v1). It says: “be a generalized Gabidulin code with minimum distance d = n − k + 1”

**Sources:** none listed. No primary source with a working link was found.

### Noncatastrophic encoders admit parity checks

**Remember:** A polynomial right inverse lets parity checks describe the code exactly.

*Rules out counterexamples.* MSC 94B10 (Convolutional codes). arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Over the polynomial ring with coefficients modulo a prime power, a k-row encoder G with independent rows generates all polynomial words uG. The code is noncatastrophic if it has such an encoder with a polynomial right inverse.

**Problem.** The code has an exact polynomial parity check precisely when it is noncatastrophic. Here an exact check is a matrix with n rows and n − k independent columns whose left kernel equals the code.

**How the definition helps.** A polynomial right inverse allows the encoder rows to extend to an invertible square matrix by the paper’s completion theorem. In these coordinates an exact check reads the last n − k coordinates. The converse is the paper’s characterization of codes admitting exact polynomial parity checks.

**Paper or page:** [Noncatastrophic convolutional codes over a finite ring](https://arxiv.org/abs/2104.06754v1). It says: “if and only if 𝒞 is noncatastrophic.”

**Sources:**

- [Diego Napp, Raquel Pinto, Conceição Rocha, Noncatastrophic convolutional codes over a finite ring (2021)](https://arxiv.org/abs/2104.06754v1)

### Lifting matrices to graph subspaces doubles their rank distance

**Remember:** Two graphs meet exactly where their maps agree.

*True by definition.* MSC 94B60 (Other types of codes), 94B05. arXiv cs.IT, math.IT. Level 4: research.

**Definition.** For an m-by-n matrix A over a field, its graph consists of all pairs (x, xA) with x a row vector of length m. This is the row space of \[I A\]. The rank distance between two matrices of the same size over that field is the rank of their difference.

**Problem.** For two matrices of the same size, the subspace distance between their graphs is twice their rank distance. The subspace distance of two spaces is the sum of their dimensions minus twice the dimension of their intersection.

**How the definition helps.** With the graph view, the intersection of two graphs is the graph over the kernel of A − B. Rank and nullity then give its dimension, and the distance formula gives twice the rank (our own). The work goes into checking that the graph equals the row space of \[I A\].

**Paper or page:** [On the list decodability of rank-metric codes containing Gabidulin codes](https://arxiv.org/abs/2103.07547v1). It says: “is a constant dimension subspace code with parameters”

**Sources:** none listed. No primary source with a working link was found.

### Shortest paths measure phase rotations

**Remember:** One edge means one allowed change.

*True by definition.* MSC 94B60 (Other types of codes), 94B65. arXiv math.IT. Level 4: research.

**Definition.** Use words of equal length over a finite field. A move changes one coordinate or adds the same nonzero field element to every coordinate. Join words related by one move.

**Problem.** The shortest path distance between two words equals their phase-rotation distance. The latter minimizes the number of coordinate changes plus one if a common shift is used.

**How the definition helps.** Every path counts coordinate changes and common shifts as individual moves (our own proof). Coordinate additions commute with shifts, so all shifts combine into at most one. After fixing that shift, the remaining cost is at least the number of mismatches. Changing each mismatched coordinate once attains this cost.

**Paper or page:** [The Eigenvalue Method in Coding Theory](https://arxiv.org/abs/2509.08917v1). It says: “coincides with the phase-rotation distance.”

**Sources:**

- [The Eigenvalue Method in Coding Theory](https://arxiv.org/abs/2509.08917v1)
