### Prefix codes decode instantly

**Remember:** When you reach a codeword, stop reading that symbol.

*Rules out counterexamples.* MSC 94A45 (Prefix, length-variable, comma-free codes), 68P30. arXiv cs.IT, math.IT. Level 1: early undergraduate.

**Definition.** A prefix code assigns distinct nonempty bit strings to symbols so that no codeword begins another codeword. So once the bits read so far form a codeword, no longer codeword can continue them.

**Problem.** With a prefix code, a decoder can emit each symbol as soon as its last bit arrives.

**How the definition helps.** Once a codeword has arrived, no other codeword extends it, so the decoder can emit its symbol at once. The code {0, 01} is uniquely decodable, but after reading 0 it must wait for the next bit or an end marker (our own).

**Wikipedia:** [Prefix code](https://en.wikipedia.org/wiki/Prefix_code). It says: “Prefix codes are also known as prefix-free codes, prefix condition codes and instantaneous codes.”

**Sources:** none listed. No primary source with a working link was found.

### An extra parity bit separates single and double errors

**Remember:** Extend to even weight, so a distance of three becomes four.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 1: early undergraduate.

**Definition.** The extended binary Hamming code appends one parity bit to each Hamming codeword so that the number of ones is even. Hamming codewords differ in at least three places, and even-weight words differ in an even number, so the extended codewords differ in at least four (our own argument).

**Problem.** The extended code can correct every single flip and report every double flip as an error.

**How the definition helps.** With every distance at least four, a single flip leaves exactly one codeword within one flip, so the decoder corrects it. A double flip leaves no codeword within one flip, so the decoder reports an error.

**Wikipedia:** [Hamming code](https://en.wikipedia.org/wiki/Hamming_code). It says: “Thus the decoder can detect and correct a single error and at the same time detect (but not correct) a double error.”

**Sources:**

- [Richard W. Hamming, Error Detecting and Error Correcting Codes (1950)](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)

### Even parity detects exactly the odd numbers of bit flips

**Remember:** Each flip toggles parity, and two toggles cancel.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 1: early undergraduate.

**Definition.** An even parity code appends one bit so that the total number of ones is even, and the check accepts a received word exactly when its bits sum to zero modulo two.

**Problem.** An even parity code detects a pattern of bit flips exactly when the number of flips is odd.

**How the definition helps.** Every bit flip switches the sum between even and odd, so the check fails exactly after an odd number of flips (our own argument). Two flips can change 000 into the accepted word 110.

**Wikipedia:** [Parity bit](https://en.wikipedia.org/wiki/Parity_bit). It says: “the parity bit is selected so the total number of set bits (including the parity bit) is even”

**Sources:** none listed. No primary source with a working link was found.

### The lightest nonzero word gives a linear code’s distance

**Remember:** Subtract one codeword to turn a pair into a single nonzero word.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 1: early undergraduate.

**Definition.** In a linear code, a vector space of words over a finite field, the distance between two words is the weight of their difference, its number of nonzero entries. The difference of two codewords is again a codeword.

**Problem.** In a linear code containing two or more words, the smallest distance between distinct words equals the smallest weight of a nonzero codeword.

**How the definition helps.** The differences of distinct codewords are exactly the nonzero codewords, since the code is closed under subtraction and each codeword c equals c − 0 (our own argument). This distance counts mismatches, because the difference is zero exactly where the symbols agree.

**Wikipedia:** [Linear code](https://en.wikipedia.org/wiki/Linear_code). It says: “The non-zero codeword with the smallest weight has then the minimum distance to the zero codeword, and hence determines the minimum distance of the code.”

**Paper or page:** [Minimum Distance of Linear Code is Smallest Weight of Non-Zero Codeword](https://proofwiki.org/wiki/Minimum_Distance_of_Linear_Code_is_Smallest_Weight_of_Non-Zero_Codeword). It says: “where w u denotes the weight of u.”

**Sources:** none listed. No primary source with a working link was found.

### Single edits make Hamming distance a metric

**Remember:** Distance counts the fewest one-symbol changes between two strings.

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

**Definition.** An odd binary repetition code sends each bit as 2t + 1 copies, for an integer t ≥ 0. Majority decoding picks the more frequent bit, which always exists because the length is odd.

**Problem.** Every received word is within t flips of exactly one word of the odd binary repetition code. Majority vote finds that word.

**How the definition helps.** Odd length means one bit occurs at least t + 1 times, so its repeated word is within t flips, while the other needs at least t + 1 (our own argument). With four copies, 0011 ties.

**nLab:** [error correcting code](https://ncatlab.org/nlab/show/error+correcting+code). It says: “The simplest example is the repetition code, where the inclusion is the diagonal on the n-fold Cartesian product”

**Wikipedia:** [Repetition code](https://en.wikipedia.org/wiki/Repetition_code). It says: “If the length of a binary repetition code is odd, then it's a perfect code.”

**Sources:** none listed. No primary source with a working link was found.

### Averaged conditional entropy makes the chain rule an identity

**Remember:** Learn X first, then pay only for what remains of Y.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For discrete X and Y, H(Y\|X) is the mean of H(Y\|X = x), with each positive-probability x weighted by its probability.

**Problem.** The joint entropy splits as H(X,Y) = H(X) + H(Y\|X). For many variables, the joint entropy is the sum of each entropy conditioned on the ones before.

**How the definition helps.** Since p(x,y) = p(x)p(y\|x), the logarithm of the joint probability splits into two terms, and taking expectations gives the chain rule at once. A single value of X gives no such identity (our own), and the page notes that H(Y\|X = x) can even exceed H(Y).

**Wikipedia:** [Conditional entropy](https://en.wikipedia.org/wiki/Conditional_entropy). It says: “The chain rule follows from the above definition of conditional entropy”

**Sources:** none listed. No primary source with a working link was found.

### Block surprisal turns typicality into a sample average

**Remember:** An independent block’s surprise is the sum of its symbols’ surprises.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** The surprisal of a block is −log₂ of its probability, and for independent symbols it is the sum of the symbols’ surprisals. Dividing by the block length gives the surprisal per symbol, a sample mean whose expectation is the entropy.

**Problem.** For independent draws from the same finite source, the surprisal per symbol converges in probability to the entropy. For every positive tolerance, the chance of a larger deviation tends to zero.

**How the definition helps.** The surprisal per symbol is an average of independent identically distributed bounded surprisals with mean equal to the entropy, so the weak law of large numbers gives the limit (our own argument).

**Wikipedia:** [Asymptotic equipartition property](https://en.wikipedia.org/wiki/Asymptotic_equipartition_property). It says: “The weak law of large numbers gives the asymptotic equipartition property with convergence in probability,”

**Paper or page:** [Khinchin's Law](https://proofwiki.org/wiki/Khinchin's_Law). It says: “where ⟶ᵖ denotes convergence in probability.”

**Sources:**

- [Claude E. Shannon, A Mathematical Theory of Communication (1948)](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

### Conditional divergences make the relative entropy chain rule add

**Remember:** The joint ratio splits into a marginal ratio times a conditional ratio.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Conditional relative entropy compares two joint laws of X and Y by averaging, over X drawn from the first law, the relative entropy between their two conditional laws of Y. Relative entropy itself is the mean of log₂(p/q) under p, for positive laws on a finite set.

**Problem.** The relative entropy of two joint laws equals that of their X marginals plus their conditional relative entropy for Y given X.

**How the definition helps.** Each joint probability factors into the probability of X times the conditional probability of Y, so the log of the joint ratio is a marginal term plus a conditional term (our own argument). Averaging under the first law gives the two relative entropies.

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “S(p/q) := ∑ₖ₌₁ⁿ pₖ(log pₖ − log qₖ).”

**Sources:** none listed. No primary source with a working link was found.

### Conditional entropy turns mixing into an entropy increase

**Remember:** With the label hidden, the outcome cannot get easier to predict.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A mixture first picks a random label, then draws an outcome from the finite law with that label. Its entropy is the entropy of the outcome with the label hidden, and the weighted average of the component entropies is the conditional entropy given the label.

**Problem.** The entropy of a mixture of finite probability laws is at least the weighted average of their entropies.

**How the definition helps.** Conditioning cannot increase entropy on average, so the entropy with the label hidden is at least the entropy given the label (our own argument).

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “is concave in the probability mass function p”

**Sources:** none listed. No primary source with a working link was found.

### Conditional information makes the mutual information chain rule telescope

**Remember:** Information is the drop in uncertainty, and successive drops add.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For finite variables, mutual information is the drop in uncertainty about X from learning Y: I(X;Y) = H(X) − H(X\|Y). Conditional mutual information is the further drop from also learning Z: I(X;Z\|Y) = H(X\|Y) − H(X\|Y,Z).

**Problem.** Information about X from the pair (Y, Z) equals information from Y plus information from Z given Y.

**How the definition helps.** Adding the two drops cancels H(X\|Y) and leaves H(X) − H(X\|Y,Z), which is the information from the pair (our own argument).

**Wikipedia:** [Conditional mutual information](https://en.wikipedia.org/wiki/Conditional_mutual_information). It says: “The chain rule (as derived above) provides two ways to decompose I(X;Y,Z):”

**Sources:** none listed. No primary source with a working link was found.

### Cross entropy measures the cost of using the wrong probabilities

**Remember:** Wrong probabilities add relative entropy to the average log cost.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Cross entropy is the mean cost −log₂ q(x) when outcomes are drawn from p but coded as if they came from q, for finite laws p and q. A possible outcome with q(x) = 0 has infinite cost.

**Problem.** The cross entropy of finite laws p and q equals the entropy of p plus the relative entropy from p to q. It equals the entropy of p only when q = p.

**How the definition helps.** Subtracting the mean cost under correct predictions, the entropy of p, leaves the mean of log₂(p(x)/q(x)), which is the relative entropy (our own argument). Gibbs’ inequality makes it zero only when q = p.

**Wikipedia:** [Cross-entropy](https://en.wikipedia.org/wiki/Cross-entropy). It says: “H(p, q) = H(p) + Dₖₗ(p ∥ q),”

**Sources:** none listed. No primary source with a working link was found.

### Defining information as minus log probability makes independent information add

**Remember:** Probabilities multiply, logarithms add, so information adds.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The surprisal of an event of probability p, with 0 &lt; p ≤ 1, is I(p) = −log p, so multiplying probabilities adds surprisals. Discrete entropy is the expected surprisal of the observed outcome.

**Problem.** The information from two independent events is the sum of their information, and the entropy of independent random variables is additive. Conversely, every twice continuously differentiable decreasing I with I(1) = 0 and this additivity is a constant multiple of −log p.

**How the definition helps.** Independent events multiply their probabilities, so their surprisals add, and averaging makes entropy additive (our own). Conversely, differentiating I(uv) = I(u) + I(v) in v at v = 1 gives uI′(u) = I′(1), and I(1) = 0 then gives I(u) = I′(1) ln u (our own).

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “In fact, the only possible values of I are I(u) = k log u for k&lt;0.”

**Sources:**

- [C. E. Shannon, A Mathematical Theory of Communication, Bell System Technical Journal 27 (1948)](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Error flags reveal Fano’s bound

**Remember:** One bit marks the error, then only wrong choices remain.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy), 94B70. arXiv math.IT. Level 2: later undergraduate.

**Definition.** Let X̃ guess a message X from the same set of M ≥ 2 possibilities, and add the error flag E, which is one exactly when the guess is wrong. The flag splits the remaining uncertainty into whether an error happened and, if so, which of the M − 1 wrong values occurred.

**Problem.** The uncertainty remaining about X given X̃ is at most h(p) + p log₂(M − 1) bits. Here p is the error probability, and h(p) is the entropy of a bit that equals one with probability p.

**How the definition helps.** E is a function of X and X̃, so the chain rule gives H(X\|X̃) = H(E\|X̃) + H(X\|E,X̃), and the first term is at most h(p) (our own). A correct guess fixes X, while an error leaves at most M − 1 values, so the second term is at most p log₂(M − 1) (our own).

**Wikipedia:** [Fano's inequality](https://en.wikipedia.org/wiki/Fano%27s_inequality). It says: “Consider H(E,X\|X̃). We can use the chain rule for entropies to expand this in two different ways”

**Sources:** none listed. No primary source with a working link was found.

### Independent collision entropies add

**Remember:** Independent matches multiply, so their collision entropies add.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The collision entropy of a finite law is minus the logarithm of the collision probability, the chance that two independent draws agree. That chance is the sum of squared outcome probabilities, which gives Rényi’s formula of order two.

**Problem.** The collision entropy of a pair of independent finite variables is the sum of their collision entropies.

**How the definition helps.** Two independent draws of a pair agree only when both components agree, so collision probabilities multiply and their minus logarithms add (our own).

**nLab:** [collision entropy](https://ncatlab.org/nlab/show/collision+entropy). It says: “hence is the negative logarithm of the "collision probability", i.e., of the probability that two independent random variables, both described by p, will take the same value.”

**Sources:** none listed. No primary source with a working link was found.

### Mutual information as divergence vanishes exactly at independence

**Remember:** The joint law equals the product law exactly at independence.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A15. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Mutual information I(X; Y) is the relative entropy of the joint law from the product of the two separate laws, so it measures how far the pair is from independence. Relative entropy averages the log density ratio under the first law, or is infinite if that law has no density relative to the second.

**Problem.** Mutual information is nonnegative and is zero exactly when X and Y are independent. It also stays the same if we swap X and Y.

**How the definition helps.** Gibbs’ inequality makes relative entropy nonnegative and zero only for equal laws (our own), and the joint law equals the product law exactly at independence. Swapping X and Y swaps the coordinates in both laws without changing their density ratio, so the value stays the same (our own).

**Wikipedia:** [Mutual information](https://en.wikipedia.org/wiki/Mutual_information). It says: “Notice, as per property of the Kullback–Leibler divergence, that I(X;Y) is equal to zero precisely when the joint distribution coincides with the product of the marginals, i.e. when X and Y are independent”

**Sources:** none listed. No primary source with a working link was found.

### Mutual information as relative entropy shows conditioning reduces entropy

**Remember:** Mutual information measures distance from independence, so it is never negative.

*True by definition.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** Mutual information is the relative entropy of the joint law from the product of its marginals, so it measures distance from independence. For discrete variables it averages log(p(x,y)/(p(x)p(y))) over pairs with positive joint probability.

**Problem.** Mutual information is nonnegative and vanishes exactly at independence. For discrete variables with finite H(X), this gives H(X) ≥ H(X\|Y).

**How the definition helps.** As a relative entropy, mutual information is nonnegative and zero exactly at independence, by Gibbs’ inequality. The identity I(X;Y) = H(X) − H(X\|Y) then turns nonnegativity into H(X) ≥ H(X\|Y).

**Wikipedia:** [Mutual information](https://en.wikipedia.org/wiki/Mutual_information), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Because I(X;Y) is non-negative, consequently, H(X) ≥ H(X∣Y).”

**Sources:**

- [S. Kullback and R. A. Leibler, On Information and Sufficiency, Annals of Mathematical Statistics 22 (1951)](https://doi.org/10.1214/aoms/1177729694)

### Mutual information survives a change of variables, but differential entropy does not

**Remember:** Information measured by comparing two distributions does not care about the units.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Mutual information is the relative entropy of the joint law from the product of its marginals: the mean log density ratio under the joint law, or infinity if absolute continuity fails. It compares two laws with each other, so it needs no reference measure such as length (our own).

**Problem.** For real random variables, discrete mutual information converges to mutual information along refining finite partitions that generate each Borel σ-algebra, and separate homeomorphisms preserve it. Differential entropy, when finite, shifts under rescaling and can be negative.

**How the definition helps.** The relative entropy approximation theorem gives the partition limit, and homeomorphisms carry partitions to partitions, so mutual information is preserved (our own). Differential entropy uses length as its reference, so rescaling by a &gt; 0 adds log a, and a uniform law on an interval shorter than one has negative entropy (our own).

**Wikipedia:** [Differential entropy](https://en.wikipedia.org/wiki/Differential_entropy), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Unlike the discrete analog, the differential entropy has an offset that depends on the units used to measure X.”

**Sources:**

- [Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal 27, 379–423.](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Normalizing the convex function makes relative entropy nonnegative

**Remember:** Subtract the tangent at one to make every term nonnegative.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For finite laws p and strictly positive q, write relative entropy as the sum over outcomes of q f(p/q), with f(t) = t ln t − t + 1 and f(0) = 1. This f is t ln t minus its tangent line at one, so it is nonnegative and zero only at t = 1.

**Problem.** Relative entropy is nonnegative and is zero exactly when the two laws agree.

**How the definition helps.** Each summand is nonnegative and is zero exactly where p = q, so the sum is too (our own argument). The extra terms −p + q sum to zero because both laws sum to one, so this equals the usual log-ratio sum.

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “S(p/q) := ∑ₖ₌₁ⁿ pₖ(log pₖ − log qₖ).”

**Wikipedia:** [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Relative entropy is always non-negative”

**Sources:**

- [Solomon Kullback and Richard A. Leibler, On Information and Sufficiency (1951)](https://doi.org/10.1214/aoms/1177729694)

### The convention 0 log 0 = 0 makes entropy continuous

**Remember:** An outcome that never happens adds no uncertainty.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For a law p on a finite set, Shannon entropy is H(p) = −∑ₓ p(x) log p(x), with each summand where p(x) = 0 set to zero. Zero is the limit of t log t as t tends to zero.

**Problem.** With the convention, entropy is a continuous function on the whole set of probability distributions, including its boundary. Also, adding outcomes of probability zero does not change the entropy.

**How the definition helps.** The convention fills the only gap in the formula with its limit value, so entropy is continuous up to the boundary of the simplex. Zero-probability outcomes add zero terms, so adding them changes nothing.

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “the value of the corresponding summand ... is taken to be 0, which is consistent with the limit”

**Sources:** none listed. No primary source with a working link was found.

### The uniform law turns an entropy bound into nonnegative divergence

**Remember:** Subtract entropy from log₂ n to measure departure from uniformity.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For a law p on n outcomes, relative entropy to the uniform law is the mean of log₂(np(x)) under p, which equals log₂ n minus the entropy of p (our own argument). Both means are taken over outcomes with positive probability.

**Problem.** Entropy on n outcomes is at most log₂ n bits. Equality holds exactly for the uniform law.

**How the definition helps.** Gibbs’ inequality makes this relative entropy nonnegative, and zero exactly when p is uniform (our own argument).

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “Uniform probability yields maximum uncertainty and therefore maximum entropy.”

**Sources:** none listed. No primary source with a working link was found.

### Types separate counts from probabilities

**Remember:** Count words once, then multiply by one word’s probability.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A29. arXiv math.IT. Level 2: later undergraduate.

**Definition.** The type of a length-n word is its vector of symbol frequencies, and the type class T is the set of words with type Q. Under independent draws from a positive law P, all words in T have the same probability, since each contains exactly nQ(s) copies of each symbol s (our own).

**Problem.** The probability of T under P equals its probability under Q times 2 raised to −nD. Here D is the sum of Q(s) log₂(Q(s)/P(s)) over symbols s with positive frequency.

**How the definition helps.** So every word of T has the same ratio P(word)/Q(word), equal to 2 raised to −nD (our own). Summing over T keeps that common factor (our own).

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

**Definition.** The information capacity C of a finite channel is the largest mutual information between one input and its output over all input laws. It is the most that one use can reduce uncertainty about the input, in bits.

**Problem.** On a finite memoryless channel, codes sending equally likely messages at a fixed rate above C bits per use cannot achieve vanishing average error.

**How the definition helps.** Each use of a memoryless channel conveys at most C bits, so n uses convey at most nC bits about the message (our own argument). Fano’s inequality says that vanishing error needs about n times the message rate in bits, which is impossible above C.

**Wikipedia:** [Noisy-channel coding theorem](https://en.wikipedia.org/wiki/Noisy-channel_coding_theorem). It says: “If R &gt; C, an arbitrarily small probability of error is not achievable.”

**Sources:**

- [Claude E. Shannon, A Mathematical Theory of Communication (1948)](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

### Arithmetic codes as grid intervals stay within two bits of entropy

**Remember:** Fit a whole binary grid cell inside each block’s probability interval.

*True by definition. Confidence: low.* MSC 94A29 (Source coding), 94A45. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Partition \[0,1) into half-open intervals, one for each block of positive probability, with length equal to its probability. Code each block by a shortest binary word whose dyadic interval, starting at the word’s binary value with width 2 to the minus its length, fits inside the block interval.

**Problem.** For a finite source of fixed-length blocks, this code is a prefix code, in which no codeword begins another, with expected length less than the block entropy plus two bits.

**How the definition helps.** Disjoint block intervals give disjoint dyadic intervals, so no codeword is a prefix of another (our own). For probability p and k = ⌈−log₂ p⌉ + 1, the width 2⁻ᵏ ≤ p/2, so some grid cell of that width fits inside the block interval (our own). Hence the length is at most k &lt; −log₂ p + 2, and averaging gives the bound (our own).

**Wikipedia:** [Arithmetic coding](https://en.wikipedia.org/wiki/Arithmetic_coding). It says: “Arithmetic coding achieves compression by subdividing the interval \[0, 1) into sub-intervals proportional to symbol probabilities.”

**Sources:**

- [Ian H. Witten, Radford M. Neal and John G. Cleary, Arithmetic Coding for Data Compression (1987)](https://doi.org/10.1145/214762.214771)

### Support entropy gives fixed-length cost

**Remember:** Fixed-length codes need room for rare outcomes too.

*Rules out counterexamples.* MSC 94A29 (Source coding), 94A17. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The Hartley entropy of a finite source is log₂ of the number of outcomes with positive probability. It ignores the probabilities and counts only how many outcomes can occur.

**Problem.** The smallest fixed bit length for zero-error encoding of one source symbol is the Hartley entropy rounded up.

**How the definition helps.** Zero-error fixed-length coding needs a distinct string for each possible outcome, and there are 2<sup>ℓ</sup> strings of length ℓ, so length ℓ works exactly when ℓ is at least the Hartley entropy (our own). Shannon entropy would mislead: probabilities 0.98, 0.01 and 0.01 give less than one bit, yet three outcomes need two bits (our own).

**nLab:** [max-entropy](https://ncatlab.org/nlab/show/max-entropy). It says: “the logarithm of the number of outcomes with non-zero probability.”

**Sources:** none listed. No primary source with a working link was found.

### The typical set makes the source coding theorem short

**Remember:** Typical words each have probability about 2 to the −nH.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A29 (Source coding), 94A24. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A positive-probability word x of length n is typical if its probability is within a factor 2<sup>(±nε)</sup> of 2<sup>(−nH)</sup>, that is, \|−log₂ P(x)/n − H\| ≤ ε. Here H is the source entropy in bits and ε &gt; 0 is a fixed tolerance.

**Problem.** For independent identically distributed finite-alphabet symbols, fixed-length compression with vanishing block error is achievable at every rate above H bits per symbol. No rate below H permits vanishing block error.

**How the definition helps.** By the weak law, typical words carry probability tending to one, and each has probability at least 2⁻ⁿ⁽ᴴ⁺ε⁾, so at most 2ⁿ⁽ᴴ⁺ε⁾ indices suffice (our own). At rate R &lt; H − ε, the decodable typical words carry total probability at most 2ⁿᴿ2⁻ⁿ⁽ᴴ⁻ε⁾, which tends to zero (our own). Choosing ε smaller than the rate gap proves each claim (our own).

**Wikipedia:** [Typical set](https://en.wikipedia.org/wiki/Typical_set), [Asymptotic equipartition property](https://en.wikipedia.org/wiki/Asymptotic_equipartition_property). It says: “it provides a theoretical means for compressing data, allowing us to represent almost all sequences Xⁿ using nH(X) bits on average, and, hence, justifying the use of entropy as a measure of information from a source.”

**Sources:**

- [Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal 27, 379–423.](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Equal column sums let uniform input reach channel capacity

**Remember:** Shuffled rows fix the noise; equal columns make output uniform.

*Rules out counterexamples. Confidence: medium.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A17. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A finite channel gives a row of output probabilities for each input. It is weakly symmetric if every row is a rearrangement of the same probabilities, so every input has the same noise entropy, and all column sums are equal, so uniform input gives uniform output.

**Problem.** A weakly symmetric channel with m possible outputs has capacity log₂ m minus the entropy of one row.

**How the definition helps.** With the noise entropy the same for every input, capacity is the largest output entropy minus one row’s entropy (our own argument). Uniform input gives uniform output, which reaches the maximum log₂ m. Two identical rows (¾, ¼) have unequal column sums and zero capacity, so the column condition matters.

**Wikipedia:** [Binary symmetric channel](https://en.wikipedia.org/wiki/Binary_symmetric_channel). It says: “a uniform probability distribution of the input results in a uniform probability distribution of the output.”

**Sources:** none listed. No primary source with a working link was found.

### Erasure markers give capacity directly

**Remember:** A visible erasure either loses the whole bit or loses nothing.

*True by definition.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A24. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** In a memoryless binary erasure channel, each use independently replaces the input bit by a visible erasure marker with probability p, and otherwise delivers it unchanged. Information capacity is the largest reduction in uncertainty about the input from one output, in bits.

**Problem.** The capacity of the binary erasure channel is 1 − p bits per use.

**How the definition helps.** An unerased output reveals the bit, while an erasure, independent of the input, leaves all of H(X), so I(X;Y) = (1 − p)H(X) (our own). A uniform input maximizes H(X) at one bit.

**Wikipedia:** [Binary erasure channel](https://en.wikipedia.org/wiki/Binary_erasure_channel). It says: “The channel capacity of a BEC is 1−Pₑ, attained with a uniform distribution for X”

**Sources:** none listed. No primary source with a working link was found.

### McMillan's theorem lets prefix codes stand in for all decodable codes

**Remember:** A prefix tree can realize every uniquely decodable list of lengths.

*Makes the theorem clean to state or prove.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A29. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** A code is uniquely decodable if every finite concatenation of codewords determines exactly one source sequence. A prefix code is the special case where distinct symbols get distinct words and no codeword is a proper prefix of another.

**Problem.** Take code word lengths ℓ₁, …, ℓₙ over an alphabet of size r. They belong to a uniquely decodable code if and only if the sum of r to the power −ℓᵢ is at most 1. The same lengths then belong to a prefix code.

**How the definition helps.** McMillan’s inequality puts the lengths of every uniquely decodable code within Kraft’s bound, and Kraft’s converse builds a prefix tree with any lengths in that bound. So the two kinds of code allow the same lengths (our own).

**Wikipedia:** [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “For every uniquely decodable code, there exists a prefix code with the same length distribution.”

**Sources:**

- [B. McMillan, Two inequalities implied by unique decipherability, IRE Transactions on Information Theory 2 (1956)](https://doi.org/10.1109/TIT.1956.1056818)

### Normalizing code lengths gives the entropy lower bound

**Remember:** Read code lengths as probabilities, and the excess is divergence.

*True by definition.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A17. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Turn the lengths of a binary prefix code, where no codeword begins another, into probabilities: give a codeword of length ℓ weight 2<sup>(−ℓ)</sup>, and divide by the sum S of all weights to get q. Then each length is exactly −log₂ q − log₂ S (our own argument).

**Problem.** For a finite source, every binary prefix code has mean length at least the source entropy in bits.

**How the definition helps.** So the mean length minus the entropy is the relative entropy from the source to q plus −log₂ S (our own argument). Gibbs’ inequality makes the first term nonnegative, and Kraft’s inequality gives S ≤ 1, so the second is nonnegative too.

**Wikipedia:** [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “it must have total measure less than or equal to one.”

**Sources:** none listed. No primary source with a working link was found.

### Rounding each surprise up keeps code length within one bit

**Remember:** Round each surprise upward by less than one bit.

*True by definition.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A17. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A Shannon code gives each symbol of probability p a codeword of length ⌈−log₂ p⌉, its surprise rounded up to a whole number of bits. The source is finite, with at least two symbols, all of positive probability.

**Problem.** A Shannon code exists with these lengths. Its mean length is at least the source entropy and less than the entropy plus one bit.

**How the definition helps.** Rounding up adds at least zero and less than one bit to each surprise, and entropy is the mean surprise (our own argument). Each length ℓ has 2<sup>(−ℓ)</sup> ≤ p, so Kraft’s theorem supplies a prefix code with these lengths.

**Wikipedia:** [Shannon coding](https://en.wikipedia.org/wiki/Shannon_coding). It says: “Here ⌈x⌉ denotes the ceiling function (which rounds x up to the next integer value).”

**Sources:**

- [Claude E. Shannon, A Mathematical Theory of Communication (1948)](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

### Trees make Huffman merging optimal

**Remember:** Merge the two lightest leaves, then solve the smaller tree.

*Makes the theorem clean to state or prove.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A29. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** A binary prefix code is a binary tree whose leaves are the symbols, each coded by its root-to-leaf path. Merging two sibling leaves replaces them by their parent with their combined probability, and lowers the mean depth by exactly that probability.

**Problem.** For finitely many positive symbol probabilities, Huffman’s repeated merging of the two smallest weights minimizes the mean binary prefix code length.

**How the definition helps.** Merging lowers the mean depth by the same amount in every tree, so an optimal tree for the merged problem splits into an optimal tree for the original (our own). Some optimal tree has the two smallest weights as sibling deepest leaves, because optimal trees have no one-child nodes and exchanging labels does not hurt (our own). Induction on the number of symbols finishes the proof (our own).

**Wikipedia:** [Huffman coding](https://en.wikipedia.org/wiki/Huffman_coding). It says: “equivalently, a tree with minimum weighted path length from the root”

**Sources:**

- [David A. Huffman, A Method for the Construction of Minimum-Redundancy Codes (1952)](https://doi.org/10.1109/JRPROC.1952.273898)

### A Diffie–Hellman mask makes ElGamal decrypt by cancellation

**Remember:** Derive the same group element, then divide it out.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** In ElGamal encryption, the recipient publishes gˣ in a cyclic group generated by g and keeps x secret. To send a group element m, the sender picks a fresh exponent r and sends gʳ together with m times the mask (gˣ)ʳ.

**Problem.** ElGamal decryption recovers every message in the group by multiplying the masked message by the inverse mask.

**How the definition helps.** The recipient computes the same mask as (gʳ)ˣ = gˣʳ, and multiplying by its inverse recovers m.

**Wikipedia:** [ElGamal encryption](https://en.wikipedia.org/wiki/ElGamal_encryption). It says: “and thus it is the same shared secret that was used by Bob in encryption.”

**Sources:**

- [Taher Elgamal, A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms (1985)](https://doi.org/10.1109/TIT.1985.1057074)

### A uniform fresh key makes an additive pad perfectly secret

**Remember:** Adding a fixed message only rearranges the equally likely keys.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR, cs.IT. Level 2: later undergraduate.

**Definition.** An additive pad encrypts a message m in a finite abelian group as m + k, with the key k independent of the message, so a fixed message only shifts the key distribution. A one-time pad chooses the key uniformly and uses it once.

**Problem.** An additive pad has perfect secrecy for every message distribution exactly when its key is uniform. Perfect secrecy means that observing the ciphertext leaves the message probabilities unchanged.

**How the definition helps.** Every shift of the uniform law is uniform, so a uniform key gives uniform ciphertext whatever the message (our own argument). Conversely, with every message of positive probability, secrecy makes all shifts of the key distribution identical, so all keys are equally likely.

**Wikipedia:** [One-time pad](https://en.wikipedia.org/wiki/One-time_pad). It says: “the ciphertext C gives absolutely no additional information about the plaintext.”

**Sources:**

- [Claude E. Shannon, Communication Theory of Secrecy Systems (1949)](https://doi.org/10.1002/j.1538-7305.1949.tb00928.x)

### Exponent classes make discrete logarithms single valued and additive

**Remember:** Products of group elements add their exponent classes.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** Fix a generator g of a cyclic group of order n. The discrete logarithm of a is the set of integers k with gᵏ = a, which is one residue class modulo n because gᵏ = gʲ exactly when n divides k − j.

**Problem.** Every element has exactly one discrete logarithm class. The logarithm of a product is the sum of the logarithms modulo n.

**How the definition helps.** Two exponents give the same power exactly when they differ by a multiple of n, so the logarithm is a single class (our own argument). The rule gᵏgʲ = gᵏ⁺ʲ then makes the logarithm of a product the sum of the logarithms modulo n.

**Wikipedia:** [Discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm). It says: “logᵦ a is unique only up to congruence modulo n”

**Sources:** none listed. No primary source with a working link was found.

### Perfect hiding rules out perfect binding

**Remember:** Identical laws share every value, so some value opens both ways.

*True by definition.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 2: later undergraduate.

**Definition.** A bit commitment publishes a random value for a bit and later opens it with evidence for that bit. Perfect hiding means both bits give the same distribution of public values, so they share every value of positive probability. Perfect binding means no public value can be opened to both bits.

**Problem.** Assume finitely many public values and perfect correctness, so every honest opening succeeds. Such a commitment cannot have both properties.

**How the definition helps.** Hiding makes the two bits share every public value of positive probability, while binding needs them to share none (our own). Pick such a value: correctness gives honest openings of it to both bits, which breaks binding (our own).

**Wikipedia:** [Commitment scheme](https://en.wikipedia.org/wiki/Commitment_scheme). It says: “no commitment scheme can be at the same time perfectly binding and perfectly hiding”

**Sources:** none listed. No primary source with a working link was found.

### Prime field coordinates make RSA decryption work for every message

**Remember:** Check each prime separately; zero and Fermat both return x.

*True by definition.* MSC 94A60 (Cryptography). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** View a residue modulo pq as its pair of remainders modulo the distinct primes p and q, each an element of a field. RSA raises both remainders to the power e to encrypt and d to decrypt. Here e and d are positive and ed ≡ 1 modulo p − 1 and modulo q − 1.

**Problem.** RSA decryption recovers every residue modulo pq, including messages with a common factor with pq.

**How the definition helps.** In each prime field, x<sup>(ed)</sup> = x for every x: zero stays zero, and Fermat’s little theorem handles nonzero x (our own argument). The Chinese remainder theorem turns the pair of remainders back into a unique residue modulo pq.

**Wikipedia:** [RSA cryptosystem](https://en.wikipedia.org/wiki/RSA_cryptosystem). It says: “it suffices (and in fact is equivalent) to check that they are congruent mod p and mod q separately.”

**Paper or page:** [Fermat's Little Theorem](https://proofwiki.org/wiki/Fermat's_Little_Theorem). It says: “nᵖ⁻¹ ≡ 1 mod p”

**Sources:**

- [R. L. Rivest, A. Shamir and L. Adleman, A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (1978)](https://people.csail.mit.edu/rivest/Rsapaper.pdf)

### Zero-information secrecy needs at least as much key entropy as message entropy

**Remember:** The key must supply all the information the ciphertext hides.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 94A17. arXiv cs.CR, cs.IT. Level 2: later undergraduate.

**Definition.** Perfect secrecy means the ciphertext C tells nothing about the message M: their mutual information is zero. Equivalently, the message entropy does not drop once C is seen, so H(M ∣ C) = H(M).

**Problem.** In a perfectly secret scheme with finitely many values and exact decryption, the key entropy is at least the message entropy. This is Shannon's bound.

**How the definition helps.** With C known, the key must still supply all of H(M), because exact decryption gives H(M ∣ C, K) = 0 (our own). Hence H(M) = H(M ∣ C) = I(M; K ∣ C) ≤ H(K ∣ C) ≤ H(K) (our own).

**Wikipedia:** [One-time pad](https://en.wikipedia.org/wiki/One-time_pad). It says: “the ciphertext C gives absolutely no additional information about the plaintext.”

**Sources:**

- [Claude E. Shannon, Communication Theory of Secrecy Systems (1949)](https://doi.org/10.1002/j.1538-7305.1949.tb00928.x)

### Finite fields protect Shamir shares

**Remember:** Every secret fits the same number of polynomials through the shares.

*Rules out counterexamples.* MSC 94A62 (Authentication, digital signatures and secret sharing). arXiv cs.CR, math.IT. Level 2: later undergraduate.

**Definition.** Over a finite field, each participant gets the value at a distinct nonzero point of a random polynomial of degree at most k − 1. Its constant term is the secret, and its other coefficients are uniform and independent of the secret. By interpolation, fewer than k shares fit the same number of such polynomials for every candidate secret.

**Problem.** For k ≥ 2, fewer than k shares give no information about the secret.

**How the definition helps.** Fewer than k shares plus the value at zero are at most k interpolation conditions, so the number of fitting polynomials does not depend on the secret (our own). Polynomials with a given constant term are equally likely, so the shares have the same probability under every secret and reveal nothing (our own). Over the integers this fails: with k = 2, a share at 2 is the secret plus twice a coefficient, so it reveals the secret’s parity (our own).

**Wikipedia:** [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing). It says: “This problem can be remedied by using finite field arithmetic.”

**Sources:**

- [Adi Shamir, How to share a secret (1979)](https://doi.org/10.1145/359168.359176)

### Pairwise independence protects one tag

**Remember:** One observed tag leaves every tag for a different message uniform.

*Rules out counterexamples.* MSC 94A62 (Authentication, digital signatures and secret sharing). arXiv cs.CR. Level 2: later undergraduate.

**Definition.** Pick a secret tag function h uniformly from a finite family, and tag each message m with h(m). The family is pairwise independent if, for any two distinct messages, the pair of tags is uniform over all pairs of tags.

**Problem.** An observer sees one message and its tag, then chooses a different message. Any guess for the new tag succeeds with probability one divided by the number of tags.

**How the definition helps.** Since the pair of tags is uniform, knowing the first tag leaves the second tag uniform. A bound on collisions alone is not enough: a single public injective function has no collisions, yet every tag is known (our own).

**Wikipedia:** [Message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code). It says: “pairwise independent hash functions provide a secure message authentication code as long as the key is used at most once.”

**Sources:**

- [Mark N. Wegman and J. Lawrence Carter, New hash functions and their use in authentication and set equality (1981)](https://doi.org/10.1016/0022-0000(81)90033-7)

### An identity block gives parity checks without solving equations

**Remember:** The check matrix subtracts the extra symbols the message predicts.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A systematic encoder sends a message row u over a finite field to the word (u, uP), so the extra symbols are uP. Its check matrix H = \[−Pᵀ \| I\] is built so that multiplying a word (u, v) by Hᵀ gives v − uP.

**Problem.** A row word belongs to this code exactly when multiplying it by the transposed check matrix gives zero.

**How the definition helps.** The product v − uP is zero exactly when v holds the extra symbols that the encoder sends for u (our own argument). Row reduction and a reordering of positions give any linear code a systematic encoder.

**Wikipedia:** [Linear code](https://en.wikipedia.org/wiki/Linear_code). It says: “H = \[−Pᵀ \| Iₙ₋ₖ\] is a check matrix for C.”

**Sources:** none listed. No primary source with a working link was found.

### An identity block lets systematic codes reveal their messages

**Remember:** An identity block copies the message into the codeword.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A generator matrix G encodes a message row u as uG. G is systematic if it begins with an identity block, so uG starts with a copy of u.

**Problem.** Every linear code admits a systematic generator after a suitable reordering of positions. The first positions of an uncorrupted codeword then give the original message.

**How the definition helps.** The identity block copies each message symbol into the first positions (our own argument). For a general generator with independent rows, row reduction turns the pivot columns into an identity block without changing the code, and reordering positions moves them to the front.

**Paper or page:** [Standard Generator Matrix for Linear Code/Examples/(3, 2) code in Z2](https://proofwiki.org/wiki/Standard_Generator_Matrix_for_Linear_Code/Examples/(3,_2)_code_in_Z2). It says: “G generates the linear code C:”

**Sources:** none listed. No primary source with a working link was found.

### Codes as check-matrix kernels have distance equal to the fewest dependent columns

**Remember:** A light codeword is a short dependence among check columns.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Describe a linear code over a finite field as the kernel of a check matrix H. So a word is a codeword exactly when its entries are the coefficients of a combination of columns of H that sums to zero.

**Problem.** Take a nonzero linear code with check matrix H. Its minimum distance equals the smallest number of linearly dependent columns of H.

**How the definition helps.** A nonzero codeword of weight w is a dependence among the w columns on its support, and any dependent set of columns gives a nonzero codeword supported inside it (our own). For a linear code, minimum distance equals the least nonzero weight (our own).

**Wikipedia:** [Linear code](https://en.wikipedia.org/wiki/Linear_code). It says: “The distance d of a linear code C also equals the minimum number of linearly dependent columns of the check matrix H.”

**Sources:** none listed. No primary source with a working link was found.

### Doubly even codes are self-orthogonal

**Remember:** Multiples of four force even overlaps.

*Rules out counterexamples.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 2: later undergraduate.

**Definition.** A binary linear code is doubly even if every codeword has a multiple of four ones. The sum of two codewords is again a codeword, and its count of ones is the two counts minus twice their overlap (our own).

**Problem.** Any two words in a doubly even binary linear code have dot product zero modulo two.

**How the definition helps.** All three counts are multiples of four, so twice the overlap is too, and the overlap is even (our own proof). The even code spanned by 110 and 011 fails, since those words overlap in one position.

**nLab:** [binary linear code](https://ncatlab.org/nlab/show/binary+linear+code). It says: “Notice that the quadratic form (hence the bilinear form) vanishes on a type II code C, so that we have C ⊂ C⊥ (i.e., C is isotropic).”

**Paper or page:** [Construction for both self-dual codes and LCD codes](https://arxiv.org/abs/2108.12544v1). It says: “If C is doubly even, then C is a self-orthogonal code.”

**Sources:** none listed. No primary source with a working link was found.

### Dual distance gives uniform projections

**Remember:** A biased projection would expose a short dual word.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B25. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The dual distance of a linear code C over a finite field is the least number of nonzero positions of a nonzero vector orthogonal to all of C, assuming one exists. Such a vector is a linear relation that every codeword obeys on its support. So on fewer positions than the dual distance, the codewords obey no linear relation (our own).

**Problem.** Choose a codeword uniformly. On any set of fewer positions than the dual distance, all patterns of field elements occur equally often.

**How the definition helps.** With no linear relation on a set of positions, the projection of C there has zero orthogonal complement, so it is the whole space (our own). The projection is linear, so every pattern has the same number of preimages (our own).

**Wikipedia:** [Orthogonal array](https://en.wikipedia.org/wiki/Orthogonal_array). It says: “Then C⊥ (the orthogonal complement of the vector subspace C) is a (linear) OA(qⁿ⁻ᵐ, n, q, d − 1)”

**Sources:** none listed. No primary source with a working link was found.

### Gram matrices detect code hulls

**Remember:** Pairwise dot products reveal which codewords are orthogonal to the code.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 2: later undergraduate.

**Definition.** The hull of a linear code is the set of its codewords orthogonal to the whole code under the ordinary dot product. Write each codeword as aG for a basis matrix G; the dot products of aG with the basis rows are the entries of aGGᵀ.

**Problem.** For a code of dimension k, the hull dimension equals k minus the rank of GGᵀ. The hull is zero exactly when GGᵀ is invertible.

**How the definition helps.** So aG is in the hull exactly when a lies in the left kernel of GGᵀ, and a ↦ aG is injective (our own proof). Rank–nullity gives that kernel the dimension k − rank(GGᵀ).

**Paper or page:** [Construction for both self-dual codes and LCD codes](https://arxiv.org/abs/2108.12544v1). It says: “Then rank(GGᵀ) = k − dim(Hull(C)).”

**Sources:** none listed. No primary source with a working link was found.

### Hamming check matrices with every nonzero column make Hamming codes perfect

**Remember:** Each nonzero check result names exactly one bit.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B35. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For m ≥ 1, the binary Hamming code is the set of words x with Hx = 0, where the columns of H are all nonzero m-bit columns, each used once. Flipping bit j adds column j to Hx, so each nonzero result names exactly one bit (our own).

**Problem.** Every binary word of length 2ᵐ − 1 is within one bit change of exactly one codeword. Codes with this property are called perfect.

**How the definition helps.** If Hx = 0, every single flip gives a nonzero result, so no other codeword is within one change (our own). If Hx ≠ 0, exactly one column equals Hx, so exactly one flip reaches a codeword (our own).

**Wikipedia:** [Hamming code](https://en.wikipedia.org/wiki/Hamming_code). It says: “The parity-check matrix H of a Hamming code is constructed by listing all columns of length m that are pair-wise independent.”

**Sources:**

- [Richard W. Hamming, Error Detecting and Error Correcting Codes (1950)](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)

### Independent columns preserve dual optimality

**Remember:** Independent columns rule out short dual words.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv math.IT. Level 2: later undergraduate.

**Definition.** A linear code of length n and dimension k is maximum distance separable if its minimum distance is n − k + 1. Equivalently, every k columns of a generator matrix are linearly independent. A dual word, one orthogonal to the code, is exactly a linear dependence among those columns.

**Problem.** If 0 &lt; k &lt; n, the dual of a maximum distance separable linear code is also maximum distance separable.

**How the definition helps.** A nonzero dual word is a dependence among the columns on its support, so its support has more than k positions (our own). The dual has dimension n − k, so its Singleton bound is k + 1, which it therefore meets (our own).

**Wikipedia:** [Singleton bound](https://en.wikipedia.org/wiki/Singleton_bound). It says: “C⊥ is an MDS code.”

**Sources:** none listed. No primary source with a working link was found.

### Ordering Hamming checks by field powers makes shifts preserve the code

**Remember:** One position forward is multiplication by the same field element.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For r ≥ 2, label the positions by the nonzero elements of the field with 2ʳ elements, in the order 1, α, α², … for a generator α. The binary Hamming code is the set of words whose labels at their ones sum to zero. A cyclic shift then multiplies every label by α.

**Problem.** Every binary Hamming code is cyclic after a suitable reordering of its coordinates.

**How the definition helps.** Multiplying by α keeps a zero sum zero, and the last label wraps to 1 because α<sup>(2ʳ − 1)</sup> = 1 (our own argument). Written as binary vectors, the labels are the usual Hamming check columns, each nonzero r-bit column once.

**nLab:** [Hamming code](https://ncatlab.org/nlab/show/Hamming+code). It says: “A certain class of linear codes used for error correction in communication protocols.”

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “any binary Hamming code of the form Ham(r, 2) is equivalent to a cyclic code,”

**Sources:** none listed. No primary source with a working link was found.

### Reed–Solomon codes as polynomial evaluations have distance n − k + 1

**Remember:** Two low-degree polynomials agree only at roots of their difference.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A Reed–Solomon codeword lists the values of a polynomial of degree less than k at n distinct points of a finite field. Two distinct such polynomials differ by a nonzero polynomial of degree less than k, which has fewer than k roots (our own).

**Problem.** A Reed–Solomon code of length n with 1 ≤ k ≤ n has minimum distance n − k + 1.

**How the definition helps.** So two codewords agree in at most k − 1 places, which gives distance at least n − k + 1 (our own). The product of x − a over any k − 1 evaluation points a vanishes there, so its codeword has weight exactly n − k + 1; for k = 1 this product is 1 (our own).

**Wikipedia:** [Reed–Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction). It says: “every codeword of the Reed–Solomon code is a sequence of function values of a polynomial of degree less than k.”

**Sources:**

- [Irving S. Reed and Gustave Solomon, Polynomial Codes Over Certain Finite Fields (1960)](https://doi.org/10.1137/0108018)

### A complementary factor gives one polynomial test for cyclic codes

**Remember:** The check factor completes the generator to a multiple of the modulus.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A length-n cyclic code over a finite field consists of the multiples of g modulo xⁿ − 1, where g divides xⁿ − 1. Its check factor is the complementary factor h with gh = xⁿ − 1, so h turns every multiple of g into a multiple of xⁿ − 1.

**Problem.** A word polynomial c belongs to the cyclic code exactly when c times h has remainder zero modulo xⁿ − 1.

**How the definition helps.** If c = ag, then ch = a(xⁿ − 1) (our own argument). Conversely, if ch = a(xⁿ − 1) = agh, cancelling h gives c = ag.

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “This must be a divisor of xⁿ − 1.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclic codes as polynomial ideals have unique monic generators

**Remember:** Rotating a word multiplies its polynomial by x.

*True by definition. Confidence: medium.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Write a length-n word as a polynomial modulo xⁿ − 1, so rotating its positions multiplies it by x. A cyclic code is then an ideal of this ring: a subspace closed under multiplication by any polynomial.

**Problem.** Every cyclic code of length n over a finite field is generated by exactly one monic polynomial, one with leading coefficient one, that divides xⁿ − 1.

**How the definition helps.** The code’s preimage in the polynomial ring is an ideal containing xⁿ − 1, and division with remainder gives it a unique monic generator, which divides xⁿ − 1 (our own). Any monic divisor of xⁿ − 1 that generates the code also generates this preimage, so it is that generator (our own).

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “Cyclic codes can be linked to ideals in certain rings.”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial generators make cyclic code dimensions a degree count

**Remember:** Count the coefficients in the multiplier, not the codewords.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Over a finite field, write length-n words as polynomials of degree below n. A cyclic code with generator g, a divisor of xⁿ − 1 of degree d, is the set of these polynomials that g divides. These are exactly the products ag with a of degree below n − d.

**Problem.** If g has degree d, a cyclic code of length n has dimension n − d.

**How the definition helps.** The multiplier a has n − d free coefficients, and division by g recovers it uniquely (our own argument). Reducing a multiple of g modulo xⁿ − 1 keeps it divisible by g, so this matches the description by multiples modulo xⁿ − 1.

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “If the generator polynomial g has degree d then the rank of the code C is n−d.”

**Sources:** none listed. No primary source with a working link was found.

### Reversing the check factor generates the dual cyclic code

**Remember:** Reversal turns coefficient matching into multiplication.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A cyclic code of length n over a finite field has a generator g dividing xⁿ − 1 and check factor h = (xⁿ − 1)/g; the reciprocal of h lists its coefficients in reverse order. The dual is the set of words b with zero dot product with every codeword. Reversal makes this one product: the dot products of b with all shifts of c are the coefficients of c(x)b(x⁻¹) modulo xⁿ − 1 (our own).

**Problem.** The dual is cyclic, and its generator is the reciprocal of h scaled to have leading coefficient one.

**How the definition helps.** So b is in the dual exactly when g(x)b(x⁻¹) ≡ 0 modulo xⁿ − 1, that is, when b(x⁻¹) is a multiple of h (our own argument). Substituting x⁻¹ back turns h into its reciprocal times a power of x, which is invertible modulo xⁿ − 1.

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “If C is a cyclic code, the dual code C⊥ is also a cyclic code.”

**Sources:** none listed. No primary source with a working link was found.

### A constant term detects bursts

**Remember:** Strip the shift; a short error cannot be a multiple of g.

*Rules out counterexamples.* MSC 94B20 (Burst-correcting codes), 94B15. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** A binary cyclic redundancy check accepts exactly the multiples of its generator g, of degree r ≥ 1, with constant term one so that x does not divide g. A burst of length at most r is a nonzero error xⁱe(x), a shift of a polynomial e of degree below r.

**Problem.** The check detects every nonzero burst confined to at most r consecutive positions.

**How the definition helps.** Since g has no factor x, if g divided xⁱe it would divide e, whose degree is below r, which is impossible for nonzero e (our own). Without the constant term the check fails: for g = x², the one-bit error x² passes (our own).

**Wikipedia:** [Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check). It says: “if it includes the "+1" term, the code will be able to detect error patterns that are confined to a window of r contiguous bits.”

**Sources:**

- [W. W. Peterson and D. T. Brown, Cyclic Codes for Error Detection (1961)](https://doi.org/10.1109/JRPROC.1961.287814)

### A factor of x plus one catches every odd bit error

**Remember:** At x = 1, a binary polynomial reports its parity.

*Rules out counterexamples.* MSC 94B20 (Burst-correcting codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A cyclic redundancy check treats bits as the coefficients of a binary polynomial and accepts exactly the multiples of a generator g. If x + 1 divides g, every accepted polynomial vanishes at x = 1, which means it has an even number of ones.

**Problem.** A cyclic redundancy check with generator divisible by x + 1 detects every odd number of bit flips.

**How the definition helps.** An odd number of flips changes the value at x = 1, so the received word is not a multiple of g (our own argument). Without the factor x + 1, g has an odd number of ones, so the error pattern g itself passes whenever it fits the block.

**Wikipedia:** [Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check). It says: “which adds to the code the ability to detect all errors affecting an odd number of bits.”

**Sources:** none listed. No primary source with a working link was found.

### A lightest error in each coset gives nearest decoding

**Remember:** Find the lightest possible error, then subtract it.

*True by definition.* MSC 94B35 (Decoding), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** For a linear code C and a received word y, the coset y − C lists every possible error, one for each possible sent codeword. A coset leader is a word of least weight in a coset, where weight counts nonzero symbols.

**Problem.** Subtracting the leader of a received word’s coset gives a nearest codeword. Tied leaders may give different nearest codewords.

**How the definition helps.** The weight of y − c is the distance from y to c, so the lightest error marks a nearest codeword (our own argument). Fixing one leader per coset in advance settles ties and avoids repeating the search.

**Wikipedia:** [Standard array](https://en.wikipedia.org/wiki/Standard_array). It says: “Choose any vector of minimum weight not already in the array.”

**Paper or page:** [Element of Group is in Unique Coset of Subgroup/Left](https://proofwiki.org/wiki/Element_of_Group_is_in_Unique_Coset_of_Subgroup/Left). It says: “Let H be a subgroup of G.”

**Sources:** none listed. No primary source with a working link was found.

### Error locators linearize Reed–Solomon decoding

**Remember:** Multiply by a polynomial that vanishes at every error.

*Makes the theorem clean to state or prove.* MSC 94B35 (Decoding). arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** A Reed–Solomon message f of degree below k is sent as its values at distinct points aᵢ, and rᵢ is the value received at aᵢ. An error locator E is a nonzero polynomial of degree at most t that vanishes at every error position, so N = Ef satisfies N(aᵢ) = E(aᵢ)rᵢ for every i. These equations are linear in the coefficients of N and E.

**Problem.** Suppose at most t errors occur and n − k ≥ 2t. Every nonzero solution (N, E) of these equations with deg N &lt; k + t and deg E ≤ t gives f = N/E.

**How the definition helps.** The locator gives a solution, and for any solution, N − Ef has degree below k + t but vanishes at the n − t ≥ k + t correct points (our own proof). So N = Ef, and E ≠ 0 because otherwise N = 0 too.

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “Then, N₁/E₁ = N₂/E₂ = f.”

**Sources:** none listed. No primary source with a working link was found.

### Rare independent bit flips make nearest decoding most likely

**Remember:** When flips are rare, every extra difference makes a candidate less likely.

*Rules out counterexamples.* MSC 94B35 (Decoding), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A binary symmetric channel flips each sent bit of a length-n word independently with probability p, where 0 &lt; p &lt; ½. A codeword at distance s from the received word produces it with probability pˢ(1 − p)ⁿ⁻ˢ, which falls as s grows.

**Problem.** Suppose the codewords are equally likely. Given the received word, the most probable sent codewords are exactly those that differ from it in the fewest positions.

**How the definition helps.** Each extra mismatch multiplies this probability by p/(1 − p) &lt; 1 (our own argument). Equal priors make the posterior proportional to it, so the fewest mismatches win; at p = ½ all candidates tie.

**Wikipedia:** [Binary symmetric channel](https://en.wikipedia.org/wiki/Binary_symmetric_channel). It says: “D is called a maximum likelihood decoding function.”

**Sources:** none listed. No primary source with a working link was found.

### Syndromes label cosets

**Remember:** Equal syndromes mean the difference is a codeword.

*True by definition.* MSC 94B35 (Decoding), 94B05. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** Let C be the kernel of a matrix H over a finite field. The syndrome of a column word x is Hx, and since H is linear, equal syndromes mean H(x − y) = 0.

**Problem.** Two words have the same syndrome exactly when they belong to the same translate of C.

**How the definition helps.** H(x − y) = 0 says x − y lies in C, so x and y share the coset x + C; the converse reads the same steps backward.

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “𝒞(a) = 𝒞(b) ⇔ Haᵀ = Hbᵀ.”

**Sources:** none listed. No primary source with a working link was found.

### The decoding radius excludes ties

**Remember:** Stop strictly before half the distance to rule out a tie.

*Rules out counterexamples.* MSC 94B35 (Decoding). arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** Let d be the least Hamming distance, the number of differing positions, between distinct codewords. The guaranteed decoding radius is ⌊(d − 1)/2⌋, so twice the radius is less than d.

**Problem.** Every word within the guaranteed radius of a codeword has exactly one codeword within that radius.

**How the definition helps.** If two codewords were within this radius of one word, the triangle inequality would put them less than d apart. With radius ⌊d/2⌋ ties occur: in {0000, 1111}, the word 0011 is two positions from both (our own example).

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “balls of radius (d−1)/2 centered at codewords are disjoint”

**Sources:** none listed. No primary source with a working link was found.

### Gray labels preserve Lee distance

**Remember:** A four-point circle is a two-bit square.

*True by definition.* MSC 94B60 (Other types of codes). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Lee distance on the residues 0, 1, 2, 3 counts steps the short way around this four-point circle, summed over positions. The Gray labels 00, 01, 11, 10 go around a two-bit square, so neighboring residues differ in one bit and opposite residues in two.

**Problem.** Applying the labels at each position converts Lee distance into Hamming distance, the number of differing bits.

**How the definition helps.** So at each position the Lee distance of two residues equals the Hamming distance of their labels (our own proof). Both distances add over positions.

**Wikipedia:** [Lee distance](https://en.wikipedia.org/wiki/Lee_distance). It says: “However, there exists a Gray isometry (weight-preserving bijection)”

**Sources:** none listed. No primary source with a working link was found.

### Erasure recovery by projection gives the Singleton bound on code size

**Remember:** Delete d − 1 positions; distinct codewords stay distinct.

*True by definition. Confidence: medium.* MSC 94B65 (Bounds on codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A code corrects e erasures if deleting any e positions never makes two codewords equal. A code of minimum distance d corrects d − 1 erasures, since two codewords still differ somewhere outside any d − 1 positions (our own).

**Problem.** A code of length n over q symbols with at least two words and minimum distance d has at most qⁿ⁻ᵈ⁺¹ words; this is the Singleton bound.

**How the definition helps.** Deleting a fixed set of d − 1 positions maps the code injectively into the qⁿ⁻ᵈ⁺¹ strings on the remaining positions (our own).

**Wikipedia:** [Erasure code](https://en.wikipedia.org/wiki/Erasure_code). It says: “any k out of the n code word symbols are sufficient to recover the original message”

**Sources:**

- [Richard C. Singleton, Maximum Distance q-nary Codes (1964)](https://doi.org/10.1109/TIT.1964.1053661)

### Lists extend the sphere-packing bound

**Remember:** No word sits in more than L codeword balls.

*True by definition.* MSC 94B65 (Bounds on codes), 94B35. arXiv math.IT. Level 2: later undergraduate.

**Definition.** A code is list decodable with list size L at radius t if every word has at most L codewords within t changes. Equivalently, no word lies in more than L of the radius-t balls around codewords.

**Problem.** If words have length n over q symbols, the code size times the radius-t ball size is at most L times qⁿ.

**How the definition helps.** Count the pairs of a codeword and a word within t changes of it (our own). By codeword this is the code size times the ball size; by word it is at most L times qⁿ.

**Wikipedia:** [List decoding](https://en.wikipedia.org/wiki/List_decoding). It says: “the number of codewords c ∈ C within Hamming distance pn from y is at most L.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal codes cover the space

**Remember:** Where no codeword reaches, add a word.

*True by definition.* MSC 94B65 (Bounds on codes). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Take a code of length-n words over q symbols whose distinct codewords differ in at least d positions, with 1 ≤ d ≤ n. The code is maximal if no word can be added, so every word is within d − 1 changes of some codeword (our own).

**Problem.** A maximal code covers every word with balls of radius d − 1, where a ball contains words within that many changes of its center. Its size is at least the number of all words divided by the size of one such ball.

**How the definition helps.** So the balls of radius d − 1 around codewords cover all qⁿ words (our own). Each ball has the same size, so the code size times that size is at least qⁿ, even with overlaps (our own).

**Wikipedia:** [Gilbert–Varshamov bound](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound). It says: “since otherwise we could add x to the code whilst maintaining the code's minimum Hamming distance d”

**Sources:** none listed. No primary source with a working link was found.

### Signed words yield Plotkin’s bound

**Remember:** Far-apart words point away from each other.

*True by definition.* MSC 94B65 (Bounds on codes). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Represent a binary word of length n by the vector with +1 for each zero and −1 for each one. Two words that differ at s positions then have dot product n − 2s, which is negative when s &gt; n/2.

**Problem.** For a binary code of length n with at least two words, let d be the smallest number of positions where two distinct words differ. If d &gt; n/2, the code size is at most 2d divided by 2d − n.

**How the definition helps.** Distinct codewords have dot products at most n − 2d &lt; 0, yet the squared length of the sum of all M vectors is nonnegative (our own proof). Expanding gives 0 ≤ Mn + M(M − 1)(n − 2d), which rearranges to M ≤ 2d/(2d − n).

**Wikipedia:** [Plotkin bound](https://en.wikipedia.org/wiki/Plotkin_bound). It says: “The bound is proved by bounding the quantity ∑\[(x,y) ∈ C², x ≠ y\] d(x,y) in two different ways.”

**Sources:**

- [Morris Plotkin, Binary Codes with Specified Minimum Distance (1960)](https://doi.org/10.1109/TIT.1960.1057584)

### Causal conditioning splits feedback information

**Remember:** Outputs see present inputs; inputs see only past outputs.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A24. arXiv math.IT. Level 3: graduate.

**Definition.** Forward directed information adds, over times i, what the inputs through time i tell about Yᵢ beyond past outputs: I(Xⁱ; Yᵢ ∣ Yⁱ⁻¹). Delayed reverse information adds what past outputs tell about Xᵢ beyond past inputs: I(Yⁱ⁻¹; Xᵢ ∣ Xⁱ⁻¹). Here Xⁱ is the history through time i, empty at time zero.

**Problem.** For equal-length streams of finite-valued symbols, forward information plus delayed reverse information equals their mutual information, the average uncertainty either stream removes about the other.

**How the definition helps.** Both sums come from one entropy chain rule in the interleaved order X₁, Y₁, X₂, Y₂, … (our own proof). Subtract that joint entropy from the sum of the two stream entropies, and group the terms by the predicted symbol.

**Wikipedia:** [Directed information](https://en.wikipedia.org/wiki/Directed_information). It says: “except one conditions on "past" and "present" symbols yⁱ rather than all symbols yⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Collision bias bounds distance from uniform

**Remember:** Excess collisions measure squared distance from uniform.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A60. arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** Choose h uniformly from a finite family of maps to m outputs, and, independently of h, draw X and X′ independently from one input law. The collision bias is ε = m·Pr\[h(X) = h(X′)\] − 1. For fixed h, with output probabilities pᵧ, m times the collision probability minus 1 is m·∑ (pᵧ − 1/m)².

**Problem.** The mean total variation distance from uniform, half the sum of the absolute differences of output probabilities, is at most ½ √ε.

**How the definition helps.** Cauchy–Schwarz bounds ∑ \|pᵧ − 1/m\| by the square root of m·∑ (pᵧ − 1/m)², which is the bias for that h (our own derivation). Averaging over h and using concavity of the square root gives the claim.

**nLab:** [collision entropy](https://ncatlab.org/nlab/show/collision+entropy). It says: “of the probability that two independent random variables, both described by p, will take the same value.”

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “𝔼ₕ(Δ(𝒟(h), 𝒰)) ≤ ½ √ε.”

**Sources:**

- [Thomas Debris-Alazard, Code-based Cryptography: Lecture Notes (2023)](https://arxiv.org/abs/2304.03541v1)

### Conditional entropies converge monotonically to the stationary entropy rate

**Remember:** More past information cannot raise the next symbol’s average entropy.

*True by definition.* MSC 94A17 (Measures of information, entropy), 60G10. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** For a finite-valued process X₁, X₂, …, define the entropy rate as the limit of hₙ = H(Xₙ ∣ X₁, …, Xₙ₋₁), the uncertainty of each new symbol given all earlier ones. For a stationary process, hₙ₊₁ is the uncertainty of the same kind of symbol given one more past symbol than hₙ.

**Problem.** For a stationary process on a finite set of symbols, the conditional entropies never increase and converge to a limit. The joint entropy per symbol tends to the same limit.

**How the definition helps.** Extra conditioning cannot raise entropy, so stationarity gives hₙ₊₁ ≤ H(Xₙ₊₁ ∣ X₂, …, Xₙ) = hₙ, and hₙ ≥ 0 makes the sequence converge (our own). By the chain rule, H(X₁, …, Xₙ)/n is the average of h₁, …, hₙ, so it has the same limit (our own).

**Wikipedia:** [Entropy rate](https://en.wikipedia.org/wiki/Entropy_rate). It says: “For strongly stationary stochastic processes, the entropy rate equals the limit of that sequence”

**Sources:** none listed. No primary source with a working link was found.

### Entropy power adds at fixed shape

**Remember:** Entropy power scales linearly when the covariance scales.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** The entropy power of a random vector X in ℝⁿ with finite differential entropy is the common variance of a Gaussian with independent equal-variance coordinates and the same entropy. For a Gaussian with covariance K, it equals the nth root of det K.

**Problem.** For independent Gaussian vectors with positive definite proportional covariances, the entropy power of their sum equals the sum of their entropy powers.

**How the definition helps.** Covariances K and cK give entropy powers N and cN, because det(cK)<sup>(1/n)</sup> = c·det(K)<sup>(1/n)</sup> (our own calculation). Independence makes the sum Gaussian with covariance (1 + c)K, so its entropy power is (1 + c)N.

**Wikipedia:** [Entropy power inequality](https://en.wikipedia.org/wiki/Entropy_power_inequality). It says: “In particular, N(X) = \|K\|¹⁄ⁿ when X is normally distributed with covariance matrix K.”

**Sources:** none listed. No primary source with a working link was found.

### Jensen–Shannon divergence as mutual information cannot exceed one bit

**Remember:** Learning the outcome of a fair coin can give at most one bit.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 3: graduate.

**Definition.** Toss a fair coin Z, and draw X from P on heads and from Q on tails. The Jensen–Shannon divergence is the mutual information between X and Z: how much X reveals about the coin.

**Problem.** With logarithms to base 2, Jensen–Shannon divergence lies between 0 and 1. It is 0 exactly when P and Q are the same law.

**How the definition helps.** Information about a fair coin lies between 0 and its entropy, which is one bit. It is zero exactly when X and Z are independent, that is, when P and Q coincide (our own).

**Wikipedia:** [Jensen–Shannon divergence](https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence). It says: “It follows from the above result that the Jensen–Shannon divergence is bounded by 0 and 1 because mutual information is non-negative and bounded by H(Z) = 1 in base 2 logarithm.”

**Sources:**

- [J. Lin, Divergence measures based on the Shannon entropy, IEEE Transactions on Information Theory 37 (1991) 145–151](https://doi.org/10.1109/18.61115)

### Likelihood ratios encode Rényi moments

**Remember:** One ratio distribution stores the whole Rényi curve.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** For laws p and q on a finite set with q positive, the likelihood-ratio distribution is the law of p(x)/q(x) when x is drawn from q. The Rényi divergence of order a ≠ 1 is a function of the a-th moment 𝔼<sub>q</sub>\[(p/q)ᵃ\] of this law.

**Problem.** The Rényi divergences of orders in any open subinterval of (0, ∞) determine this ratio distribution on a finite set.

**How the definition helps.** That moment is ∑ wⱼ ρⱼᵃ, a sum of exponentials in a weighted by the q-masses wⱼ of the positive ratios ρⱼ (our own proof). Distinct exponentials are linearly independent on any open interval, so these moments fix the ratios and weights, and the remaining mass sits at zero.

**Paper or page:** [Sufficiency of Rényi divergences](https://arxiv.org/abs/2304.12989v6). It says: “Let p ≪ q be probability distributions on a measurable space X. Then there is a probability measure q̃ on (−∞,∞\]”

**Sources:**

- [Sufficiency of Rényi divergences](https://arxiv.org/abs/2304.12989v6)

### Likelihood ratios survive sufficient compression

**Remember:** Keep the likelihood ratio and you keep every f-information value.

*True by definition.* MSC 94A17 (Measures of information, entropy), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** For finite variables X and Y, let r be the joint probability divided by the product of the marginal probabilities, where that product is positive. The f-information is the mean of f(r) under the product law, for a finite convex f with f(1) = 0. So it depends only on the values of r and their weights under the product law.

**Problem.** Suppose statistics S of X and T of Y determine this ratio. Replacing X and Y by S and T preserves their f-information.

**How the definition helps.** If S and T determine r, each group of cells with the same values of S and T has one ratio, so the grouped joint and product probabilities have that same ratio (our own proof). The grouped mean is therefore unchanged. The paper links this ratio condition to sufficiency.

**Paper or page:** [Separable Computation of Information Measures](https://arxiv.org/abs/2501.15301v1). It says: “we have I𝒻(X; Y) = I𝒻(S; T).”

**Sources:**

- [Xiangxiang Xu, Lizhong Zheng, Separable Computation of Information Measures (2025)](https://arxiv.org/abs/2501.15301v1)

### Moment-matched exponential densities uniquely maximize entropy

**Remember:** Matching means makes the entropy gap equal relative entropy.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.ST. Level 3: graduate.

**Definition.** Given real functions f₁, …, fₙ and target means a₁, …, aₙ, let p\* have density proportional to exp(λ₁f₁ + ⋯ + λₙfₙ) with respect to a reference measure. Choose the coefficients so that p\* exists and each fⱼ has mean aⱼ. Its log density is a constant plus a combination of the fⱼ, so every density with the same means gives log p\* the same average (our own).

**Problem.** Among densities with those same finite means and finite entropy, p\* uniquely maximizes entropy, provided its entropy is finite. Here entropy means the average of minus the log density.

**How the definition helps.** Hence H(p\*) − H(q) = D(q‖p\*), the relative entropy of q from p\* (our own). Gibbs’ inequality makes this nonnegative, with equality only when q = p\* almost everywhere (our own).

**Wikipedia:** [Maximum entropy probability distribution](https://en.wikipedia.org/wiki/Maximum_entropy_probability_distribution). It says: “In the case of equality constraints, this theorem is proved with the calculus of variations and Lagrange multipliers.”

**Sources:** none listed. No primary source with a working link was found.

### Relative entropy by the Donsker–Varadhan formula cannot grow under maps

**Remember:** Every test on the output pulls back to a test on the input.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** By the Donsker–Varadhan formula, the relative entropy of P from Q is the best score over real test functions f, where the score is the mean of f under P minus the log of the mean of eᶠ under Q. A test on the output of a map, composed with the map, is a test on the input with the same score.

**Problem.** Applying the same map to two distributions on a finite set cannot increase their relative entropy.

**How the definition helps.** So every score on the output is also a score on the input, and the output supremum is at most the input supremum (our own proof). The Donsker–Varadhan theorem says this supremum is the usual relative entropy.

**Wikipedia:** [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Donsker and Varadhan's variational formula”

**Sources:**

- [Monroe D. Donsker and S. R. Srinivasa Varadhan, Asymptotic Evaluation of Certain Markov Process Expectations for Large Time IV (1983)](https://doi.org/10.1002/cpa.3160360204)

### Rényi entropy as a slope of log moments decreases with order

**Remember:** A convex function has increasing slopes from a fixed point.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 3: graduate.

**Definition.** For X drawn from a finite probability vector p, let F(t) = log 𝔼\[p(X)ᵗ\], a convex function with F(0) = 0. For t ≥ −1 and t ≠ 0, the Rényi entropy of order 1 + t is −F(t)/t, minus the slope of the chord of F from 0 to t. At order one it is −F′(0), the Shannon entropy.

**Problem.** Rényi entropy does not increase as its order α ≥ 0 grows, with Shannon entropy at order one.

**How the definition helps.** Hölder’s inequality makes F convex, so chord slopes from 0 increase with t and their negatives decrease (our own proof). The slope at zero gives Shannon entropy, which fits between them; the nLab states only the monotonicity.

**nLab:** [Rényi entropy](https://ncatlab.org/nlab/show/R%C3%A9nyi+entropy). It says: “The Rényi entropy is an anti-monotone function in the order-parameter α”

**Sources:** none listed. No primary source with a working link was found.

### Sufficiency preserves the information bottleneck

**Remember:** Keep the predictive law and discard detail the bottleneck never needs.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** A statistic S of X is sufficient for Y if Y depends on X only through S: the conditional law of Y given X is a function of S. For each target r, the bottleneck seeks the least I(U; X) among representations U drawn from X alone with I(U; Y) ≥ r.

**Problem.** For finite variables, replacing X by a sufficient statistic S leaves the information bottleneck trade-off with Y unchanged.

**How the definition helps.** Sufficiency lets us redraw any representation from S alone, using the conditional law of U given S, without changing its joint law with Y. Its cost becomes I(U; S) ≤ I(U; X). Conversely, a representation drawn from S is drawn from X at the same cost (our own).

**Paper or page:** [Separable Computation of Information Measures](https://arxiv.org/abs/2501.15301v1). It says: “the optimal U that achieves L\*IB(X, Y; β) satisfies U-S-X-Y.”

**Sources:**

- [Xiangxiang Xu, Lizhong Zheng, Separable Computation of Information Measures (2025)](https://arxiv.org/abs/2501.15301v1)

### The Donsker–Varadhan supremum makes relative entropy convex and lower semicontinuous

**Remember:** A supremum of convex continuous pieces is convex and lower semicontinuous.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 60F10. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** By the Donsker–Varadhan formula, relative entropy D(P‖Q) is the supremum of ∫g dP − log ∫eᵍ dQ over bounded measurable functions g. Each term is linear in P and convex in Q, and it is continuous under weak convergence when g is also continuous (our own).

**Problem.** Relative entropy is jointly convex in P and Q. On a complete separable metric space it is also lower semicontinuous under weak convergence: the value at the limit is at most the lower limit of the values.

**How the definition helps.** A supremum of jointly convex functions is jointly convex, and a supremum of continuous functions is lower semicontinuous (our own). On a complete separable metric space, bounded continuous g already give the full supremum (our own).

**Wikipedia:** [F-divergence](https://en.wikipedia.org/wiki/F-divergence), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “D<sub>KL</sub>(P; Q) = sup<sub>g</sub> E<sub>P</sub>\[g(X)\] − ln E<sub>Q</sub>\[e<sup>g(X)</sup>\].”

**Paper or page:** [Large Deviations and Information theory for Sub-Critical SINR Randon Network Models](https://arxiv.org/abs/2104.03443v2). It says: “The function Iᵦ(φ) is convex and lower semi-continuous on the space ℳ(𝒲 × 𝒲).”

**Sources:**

- [M. D. Donsker and S. R. S. Varadhan, Asymptotic evaluation of certain Markov process expectations for large time IV, Communications on Pure and Applied Mathematics 36 (1983) 183–212](https://doi.org/10.1002/cpa.3160360204)

### The perspective definition makes all f-divergences jointly convex

**Remember:** Convex pointwise means convex after integration.

*True by definition.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.ST. Level 3: graduate.

**Definition.** For a convex f on the positive reals with f(1) = 0, the f-divergence of densities p and q integrates q·f(p/q). Where exactly one density vanishes it uses the one-sided limit, and where both vanish it uses zero. The integrand (p, q) ↦ q·f(p/q) is jointly convex (our own).

**Problem.** Mix two pairs (P₁, Q₁) and (P₂, Q₂) using the same weight λ between 0 and 1 for the first pair. The divergence of the mixed pair is at most λD(P₁‖Q₁) + (1 − λ)D(P₂‖Q₂).

**How the definition helps.** Mixing the two pairs mixes p and q at every point, so the pointwise convexity of the integrand survives integration. Where both densities are positive, the mixed ratio averages the two ratios with weights given by their shares of the mixed denominator, so convexity of f gives the inequality (our own).

**Wikipedia:** [F-divergence](https://en.wikipedia.org/wiki/F-divergence). It says: “This follows from the convexity of the mapping (p,q) ↦ q f(p/q) on ℝ₊².”

**Sources:** none listed. No primary source with a working link was found.

### The supremum over partitions gives coarser information no more entropy

**Remember:** Fewer available partitions cannot give a larger supremum.

*True by definition.* MSC 94A17 (Measures of information, entropy), 28D20. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** The entropy of a σ-algebra on a probability space with law μ is the supremum of −∑ μ(A) log μ(A) over its finite partitions into events, with zero-probability parts counting zero. A smaller σ-algebra has fewer such partitions (our own).

**Problem.** A smaller σ-algebra has at most the entropy of a larger one on the same probability space. Thus H(f(Y)) ≤ H(Y) for any measurable f, with each variable’s entropy taken for the events it determines.

**How the definition helps.** A supremum over fewer partitions cannot be larger (our own). Every event determined by f(Y) is determined by Y, so H(f(Y)) ≤ H(Y) (our own).

**nLab:** [entropy](https://ncatlab.org/nlab/show/entropy). It says: “the entropy is the supremum, over all ways of expressing X as an internal disjoint union of finitely many elements of the σ-algebra M”

**Sources:** none listed. No primary source with a working link was found.

### Tree factors simplify distribution matching

**Remember:** Keep the tree with the most information on its edges.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** A tree model on a rooted spanning tree multiplies the root probability by one conditional probability per child, given its parent. Its log probability is therefore a sum with one term for the root and one term per edge.

**Problem.** For a finite joint law, a tree of maximum total pairwise mutual information minimizes relative entropy from the original law to the model. The model uses the original root and conditional probabilities.

**How the definition helps.** For a fixed tree, relative entropy splits term by term, and nonnegativity of relative entropy makes each term smallest with the original probabilities (our own). The minimum is then a constant minus the total mutual information on the tree edges, so the maximum-weight tree wins.

**Wikipedia:** [Chow–Liu tree](https://en.wikipedia.org/wiki/Chow%E2%80%93Liu_tree). It says: “only the sum of the pairwise mutual informations”

**Sources:**

- [C. K. Chow and C. N. Liu, Approximating Discrete Probability Distributions with Dependence Trees (1968)](https://doi.org/10.1109/TIT.1968.1054142)

### Giving polar channels the earlier bit preserves total symmetric capacity

**Remember:** Revealing the earlier bit turns the two terms into a chain rule.

*True by definition. Confidence: low.* MSC 94A24 (Coding theorems (Shannon theory)), 94A40. arXiv cs.IT. Level 3: graduate.

**Definition.** For independent fair bits U₁ and U₂, send U₁ + U₂ modulo two and U₂ through two uses of a channel. The first new channel sees both outputs and must find U₁; the second sees both outputs and U₁, and must find U₂. Symmetric capacity is the mutual information between a fair input bit and the output.

**Problem.** For a binary-input memoryless channel, the two new channels have total symmetric capacity twice that of the original channel.

**How the definition helps.** With U₁ revealed, the two capacities are the two terms of the chain rule, so they sum to the information both outputs give about (U₁, U₂) (our own proof). The transform is invertible, so the channel inputs are independent fair bits, and this total is twice the original capacity.

**Wikipedia:** [Polar code (coding theory)](https://en.wikipedia.org/wiki/Polar_code_%28coding_theory%29). It says: “which transforms the physical channel into virtual outer channels.”

**Sources:**

- [Erdal Arıkan, Channel Polarization (2009)](https://doi.org/10.1109/TIT.2009.2021379)

### Orthonormal representations make the Lovász number bound Shannon capacity

**Remember:** Distinguishable words give orthogonal tensor products.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)), 05C50. arXiv cs.IT, math.CO. Level 3: graduate.

**Definition.** An orthonormal representation of a finite graph gives each vertex i a real unit vector uᵢ, with nonadjacent vertices getting orthogonal vectors. The Lovász number θ is the least value of maxᵢ 1/(c·uᵢ)² over such representations and unit vectors c. So in an optimal representation every uᵢ has squared overlap at least 1/θ with c.

**Problem.** Let G be the confusability graph of a channel, with edges between symbols the channel can confuse. Its Shannon capacity, the best number of distinguishable symbols per use, is at most the Lovász number.

**How the definition helps.** Distinct codewords differ in a coordinate with nonadjacent symbols, so their tensor vectors are orthogonal (our own explanation of Lovász’s proof). Each has squared overlap at least θ⁻ⁿ with the tensor power of c, and Bessel’s inequality caps the total at one, giving at most θⁿ codewords.

**Wikipedia:** [Lovász number](https://en.wikipedia.org/wiki/Lov%C3%A1sz_number). It says: “the Lovász number provides an upper bound on the Shannon capacity of graph”

**Sources:**

- [László Lovász, On the Shannon Capacity of a Graph (1979)](https://doi.org/10.1109/TIT.1979.1055985)

### Zero-error codes as independent sets in strong powers have convergent rates

**Remember:** Pairing two good codes multiplies their sizes.

*True by definition. Confidence: medium.* MSC 94A24 (Coding theorems (Shannon theory)), 05C69. arXiv cs.IT, math.CO. Level 3: graduate.

**Definition.** Join two channel inputs when they can produce a common output. In the nth strong power, distinct words are joined when every position holds equal or joined symbols, and a zero-error code is an independent set, a set with no joined pair. Placing any word of one code before any word of another gives a code of the summed length.

**Problem.** For a memoryless channel with finite input and output sets, the zero-error rate (1/n) log α(Gⁿ) converges as n grows. Here α(Gⁿ) is the largest size of a code of length n.

**How the definition helps.** So α(Gᵃ⁺ᵇ) ≥ α(Gᵃ)α(Gᵇ), and Fekete’s lemma makes (1/n) log α(Gⁿ) converge to its supremum (our own argument). The rates are bounded by the log of the number of inputs.

**Wikipedia:** [Shannon capacity of a graph](https://en.wikipedia.org/wiki/Shannon_capacity_of_a_graph). It says: “the graph representing the length-two codewords and their confusable pairs is G ⊠ G”

**Sources:**

- [Claude E. Shannon, The Zero Error Capacity of a Noisy Channel (1956)](https://doi.org/10.1109/TIT.1956.1056798)

### Confusion graphs make maximal classes factor

**Remember:** One conflicting coordinate prevents two sequences from sharing a class.

*Makes the theorem clean to state or prove.* MSC 94A29 (Source coding), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** In a confusion graph, two source symbols are joined if the decoder must tell them apart. Two sequences are joined if their symbols are joined in at least one position, and an independent set is a class with no joined pair. So a set of sequences is independent exactly when, in each position, the symbols it uses form an independent set.

**Problem.** Every maximal independent set of the sequence confusion graph is a product of maximal independent sets of the symbol confusion graph.

**How the definition helps.** A maximal independent set lies inside the product of its projections, which is independent, so maximality makes them equal (our own proof). If a projection could grow, the product would grow too, so each projection is maximal.

**Paper or page:** [Information Leakage in Zero-Error Source Coding: A Graph-Theoretic Perspective](https://arxiv.org/abs/2102.01908v1). It says: “Consider any maximal independent set T ∈ 𝓘ₘₐₓ(Γₜ). We have T = T₁ × T₂ × ⋯ × Tₜ”

**Sources:**

- [Yucheng Liu, Lawrence Ong, Sarah Johnson, Joerg Kliewer, Parastoo Sadeghi, Phee Lep Yeoh, Information Leakage in Zero-Error Source Coding: A Graph-Theoretic Perspective (2021)](https://arxiv.org/abs/2102.01908v1)

### Tunstall dictionaries as trees make greedy splitting maximize mean phrase length

**Remember:** Splitting a leaf adds its probability to the mean phrase length.

*True by definition. Confidence: low.* MSC 94A29 (Source coding), 94A45. arXiv cs.IT. Level 3: graduate.

**Definition.** A complete dictionary is the set of root-to-leaf words of a finite tree in which every internal node has one child for each source symbol. Its mean phrase length is the sum of the probabilities of its internal nodes (our own), so splitting a leaf adds that leaf's probability.

**Problem.** Take a memoryless source with at least two symbols, all of positive probability. Among complete dictionaries of the same size, the one built by always splitting the most probable leaf has the largest mean phrase length.

**How the definition helps.** Each split adds the same number of leaves, so the dictionary size fixes the number of splits. A node is never more probable than its ancestor, so the most probable unsplit node is always a leaf, and greedy splitting collects the largest possible sum (our own proof).

**Wikipedia:** [Tunstall coding](https://en.wikipedia.org/wiki/Tunstall_coding). It says: “The dictionary in question, D, is constructed as a tree of probabilities, in which each edge is associated to a letter from the input alphabet.”

**Sources:** none listed. No primary source with a working link was found.

### Test channels make rate distortion convex

**Remember:** Mix two test channels to mix their allowed distortions.

*Makes the theorem clean to state or prove.* MSC 94A34 (Rate-distortion theory in information and communication theory). arXiv math.IT, cs.IT. Level 3: graduate.

**Definition.** Fix a source distribution and a distortion cost for each pair of source symbol and reproduction. A test channel gives each source symbol a probability distribution on reproductions, so mixing two test channels mixes their mean distortions linearly. The rate–distortion function at D is the least mutual information between source and reproduction over test channels with mean distortion at most D.

**Problem.** For a finite source and a finite reproduction alphabet, the rate–distortion function is convex on its feasible distortion range.

**How the definition helps.** Mix optimal test channels for D₁ and D₂ with weights t and 1 − t; the mix has mean distortion tD₁ + (1 − t)D₂. Mutual information is convex in the channel for a fixed input law, so the mix needs at most the mixed information (our own proof). The rate–distortion theorem makes this minimum the best rate for long blocks.

**Wikipedia:** [Rate–distortion theory](https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory). It says: “monotonically decreasing convex (U) function and thus the shape for the function in the examples is typical”

**Sources:** none listed. No primary source with a working link was found.

### Unital channels cannot lower entropy

**Remember:** Fix the most mixed state and entropy cannot go down.

*Rules out counterexamples.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A17. arXiv cs.IT, quant-ph. Level 3: graduate.

**Definition.** A quantum channel is a linear map on matrices that sends density matrices, positive semidefinite matrices of trace one, to density matrices, even when tensored with the identity on any auxiliary system. On a finite-dimensional space it is unital if it fixes the maximally mixed state, the one whose eigenvalues are all equal.

**Problem.** A finite-dimensional unital quantum channel cannot decrease the Shannon entropy of the eigenvalues of a density matrix.

**How the definition helps.** The entropy of the eigenvalues equals log of the dimension minus the relative entropy from the state to the maximally mixed state. Lindblad's inequality says a channel cannot increase relative entropy, and a unital channel keeps the maximally mixed state fixed, so entropy cannot decrease (our own derivation). Unitality excludes a channel that resets every input to one pure state (our own).

**nLab:** [unital quantum channel](https://ncatlab.org/nlab/show/unital+quantum+channel). It says: “is called unital if it preserves the maximally mixed quantum state.”

**Sources:**

- [Göran Lindblad, Completely positive maps and entropy inequalities (1975)](https://doi.org/10.1007/BF01609396)

### Generators that fool all tests and double length are one-way functions

**Remember:** An inverter becomes a test, since few strings have seeds.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A length-doubling pseudorandom generator is an efficient map from n-bit seeds to 2n-bit strings that fools every probabilistic polynomial-time test: the test's acceptance probabilities on the output of a uniform seed and on a uniform 2n-bit string differ negligibly in n. Only 2ⁿ of the 2²ⁿ strings can have a seed.

**Problem.** Such a generator is a one-way function. That is, no efficient algorithm finds a seed for its output with non-negligible probability.

**How the definition helps.** An inverter gives a test that accepts when the inverter's proposed seed really generates the string. On generated strings this test succeeds as often as inversion, but on uniform strings at most 2⁻ⁿ, since at most 2ⁿ strings have seeds. Pseudorandomness forces the gap, and so the inversion success, to be negligible (our own proof).

**Wikipedia:** [Pseudorandom generator](https://en.wikipedia.org/wiki/Pseudorandom_generator). It says: “The pseudorandom generator theorem shows that cryptographically secure pseudorandom generators exist if and only if one-way functions exist.”

**Sources:** none listed. No primary source with a working link was found.

### Hard-core bits defined by indistinguishability extend one-way permutations into generators

**Remember:** A permutation gives uniform output, and a hard-core bit adds one more.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** An efficiently computable bit b is hard-core for f if, for uniform n-bit X, no probabilistic polynomial-time test can tell (f(X), b(X)) from (f(X), B), with B an independent fair bit, except with negligible advantage in n.

**Problem.** Let f be a length-preserving one-way permutation with hard-core bit b. Then x ↦ (f(x), b(x)) is a pseudorandom generator that stretches by one bit.

**How the definition helps.** A permutation sends uniform X to uniform f(X), so (f(X), B) is a uniform string of n + 1 bits. The hard-core definition says exactly that the generator output (f(X), b(X)) cannot be told from it (our own proof).

**Wikipedia:** [Hard-core predicate](https://en.wikipedia.org/wiki/Hard-core_predicate). It says: “Hard-core predicates give a way to construct a pseudorandom generator from any one-way permutation.”

**Sources:** none listed. No primary source with a working link was found.

### Indistinguishability makes semantic security provable for real ciphers

**Remember:** Choose two equal-length messages and guess which one the ciphertext encrypts.

*True by definition.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 3: graduate.

**Definition.** A public-key scheme is indistinguishable if no probabilistic polynomial-time adversary, given a fresh public key, can choose two equal-length messages and then guess which one a fresh encryption hides, chosen by an independent fair bit, with success probability more than negligibly different from one half.

**Problem.** Semantic security, which says that a ciphertext reveals no partial information about its message beyond what prior information gives, is equivalent to indistinguishability. So a proof that the guessing game is hard for a scheme shows that the scheme hides all partial information.

**How the definition helps.** Goldwasser and Micali's equivalence theorem reduces semantic security, a statement about all partial information, to this one two-message game. One game is far easier to check against a real cipher than a condition over all functions of the message.

**Wikipedia:** [Semantic security](https://en.wikipedia.org/wiki/Semantic_security). It says: “This latter definition is more common than the original definition of semantic security because it better facilitates proving the security of practical cryptosystems.”

**Sources:**

- [S. Goldwasser and S. Micali, Probabilistic encryption, Journal of Computer and System Sciences 28 (1984) 270–299](https://doi.org/10.1016/0022-0000(84)90070-9)

### Negligible success probabilities stay negligible under polynomially many repeats

**Remember:** Below one over every polynomial, so a polynomial factor cannot lift it.

*True by definition.* MSC 94A60 (Cryptography), 68Q15. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A function μ on the natural numbers is negligible if it eventually falls below one over every positive polynomial: for each positive polynomial p, \|μ(n)\| &lt; 1/p(n) for all large n.

**Problem.** If μ is negligible and p is a positive polynomial, then p(n)μ(n) is negligible. So an attack repeated polynomially many times still succeeds only with negligible probability.

**How the definition helps.** To get below 1/q(n), apply the definition to the positive polynomial pq, so that \|p(n)μ(n)\| &lt; 1/q(n) for large n (our own proof). By the union bound, p(n) attempts that each succeed with probability at most μ(n) succeed together with probability at most p(n)μ(n).

**Wikipedia:** [Negligible function](https://en.wikipedia.org/wiki/Negligible_function). It says: “if an attack succeeds in violating a security condition only with negligible probability, and the attack is repeated a polynomial number of times, the success probability of the overall attack still remains negligible.”

**Sources:**

- [O. Goldreich, Foundations of Cryptography, Volume 1: Basic Tools, Cambridge University Press (2001)](https://doi.org/10.1017/CBO9780511546891)

### Passing the next-bit test means passing every efficient statistical test

**Remember:** If no one can guess the next bit, no one can tell it from random.

*True by definition.* MSC 94A60 (Cryptography), 68Q15. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A family of distributions on bit strings of polynomial length in a security parameter n passes the next-bit test if no probabilistic polynomial-time predictor, given a uniform random prefix length i and the first i sampled bits, guesses bit i + 1 with probability more than negligibly above one half.

**Problem.** A family of bit strings that passes the next-bit test also passes Yao's test. So no efficient algorithm can tell it from truly random strings.

**How the definition helps.** Yao's hybrid argument interpolates between the family and uniform strings: hybrid i keeps the first i sampled bits and makes the rest uniform. A test that tells the two ends apart must tell some adjacent hybrids apart, and that test becomes a next-bit predictor at a random prefix length, losing at most a polynomial factor (our own summary).

**Wikipedia:** [Next-bit test](https://en.wikipedia.org/wiki/Next-bit_test). It says: “The next-bit test is a particular case of Yao's test for random sequences, and passing it is therefore a necessary condition for passing Yao's test. However, it has also been shown a sufficient condition by Yao.”

**Sources:**

- [A. C. Yao, Theory and application of trapdoor functions, FOCS 1982](https://doi.org/10.1109/SFCS.1982.45)

### Single-challenge indistinguishability extends to many challenges by swapping one at a time

**Remember:** Swap one challenge at a time; the public key forges the rest.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 3: graduate.

**Definition.** A public-key scheme has single-challenge security if no probabilistic polynomial-time adversary, given a fresh public key, can choose two equal-length messages and guess which one a single fresh encryption hides, chosen by an independent fair bit, with more than negligible advantage. Anyone who holds the public key can make further encryptions alone.

**Problem.** Single-challenge indistinguishability implies indistinguishability for polynomially many challenges under the same public key. Each encryption uses fresh independent randomness.

**How the definition helps.** Switch the hidden message in one challenge at a time; a reduction plants the real challenge at a random switch and encrypts the other challenges itself with the public key and fresh randomness. A non-negligible total gap across polynomially many switches then gives a non-negligible single-challenge advantage (our own hybrid proof).

**Wikipedia:** [Ciphertext indistinguishability](https://en.wikipedia.org/wiki/Ciphertext_indistinguishability). It says: “an adversary will be unable to distinguish pairs of ciphertext based on the message that they encrypt.”

**Sources:**

- [Shafi Goldwasser and Silvio Micali, Probabilistic Encryption (1984)](https://doi.org/10.1016/0022-0000(84)90070-9)

### Witness indistinguishability survives parallel repetition, unlike zero knowledge

**Remember:** Switch the witness and the verifier’s view stays indistinguishable.

*True by definition.* MSC 94A60 (Cryptography), 68Q10. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A proof is witness indistinguishable if, for every efficient verifier, every true instance, every two valid witnesses and every auxiliary input, the verifier's views are computationally indistinguishable whichever witness the prover uses.

**Problem.** Witness indistinguishability survives polynomially many parallel repetitions with independent prover randomness. Zero knowledge does not always survive parallel repetition.

**How the definition helps.** Change the witness in one parallel copy at a time; a verifier that holds both witnesses as auxiliary input can run the other copies itself, so a non-negligible overall gap would distinguish one copy (our own summary of Feige and Shamir). Zero knowledge has no such hybrid, and Goldreich and Krawczyk give a protocol whose parallel repetition is not zero knowledge (our own attribution).

**Wikipedia:** [Witness-indistinguishable proof](https://en.wikipedia.org/wiki/Witness-indistinguishable_proof). It says: “Unlike zero-knowledge proofs, they remain secure when multiple proofs are being performed in parallel.”

**Sources:**

- [U. Feige and A. Shamir, Witness indistinguishable and witness hiding protocols, STOC 1990](https://doi.org/10.1145/100216.100272)

### Zero knowledge with auxiliary input is closed under sequential composition

**Remember:** If prior knowledge cannot help, earlier proofs cannot help either.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68Q10. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A proof is zero knowledge with auxiliary input if, for each probabilistic polynomial-time verifier, some efficient simulator, given the true statement and the verifier's auxiliary string (its prior knowledge), outputs something computationally indistinguishable from the verifier's real view, for every true statement and auxiliary string.

**Problem.** If a proof is zero knowledge with auxiliary input, then running it polynomially many times in sequence is still zero knowledge.

**How the definition helps.** The verifier's state after earlier runs is just another auxiliary string, so each run can be simulated from the simulated record of the earlier runs (our own summary). Goldreich and Oren's sequential composition theorem turns this into a proof for polynomially many runs (our own attribution).

**Wikipedia:** [Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof). It says: “The auxiliary string z in the definition plays the role of "prior knowledge" (including the random coins of V̂).”

**Sources:**

- [O. Goldreich and Y. Oren, Definitions and properties of zero-knowledge proof systems, Journal of Cryptology 7 (1994) 1–32](https://doi.org/10.1007/BF00195207)

### Balanced key tables give perfect secrecy

**Remember:** Every output has the same number of keys behind each message.

*True by definition.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** A key table gives each key-message pair a set of allowed outputs, all of one positive size, with disjoint sets for different messages under the same key. It is equitably ordered when every output is allowed by equally many keys for each message.

**Problem.** Choose the key uniformly and independently of the message, and the output uniformly from its set. If the table is equitably ordered, the output is independent of the message.

**How the definition helps.** The probability of an output given a message is the number of keys that allow it for that message, divided by the number of keys times the common set size. Equitable ordering makes this count the same for every message, so the output is independent of the message (our own counting argument).

**Paper or page:** [Splitting authentication codes with perfect secrecy: new results, constructions and connections with algebraic manipulation detection codes](https://arxiv.org/abs/2104.11076v2). It says: “If a splitting BIBD is equitably ordered, then it yields an authentication code with perfect secrecy.”

**Sources:**

- [Maura B. Paterson, Douglas R. Stinson, Splitting authentication codes with perfect secrecy: new results, constructions and connections with algebraic manipulation detection codes (2021)](https://arxiv.org/abs/2104.11076v2)

### Entropy-defined threshold schemes need each share as large as the secret

**Remember:** The last share must supply all the missing entropy.

*True by definition. Confidence: medium.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A17. arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** A perfect threshold scheme with threshold k, where 1 ≤ k ≤ n, splits a secret S into n shares so that any k shares determine S, H(S ∣ A) = 0, while any fewer than k shares reveal nothing, H(S ∣ A) = H(S).

**Problem.** In a perfect threshold scheme with finitely many values, every share has entropy at least the entropy of the secret.

**How the definition helps.** Take any share X and a collection A of k − 1 other shares: adding X lowers the secret's conditional entropy from H(S) to zero, so X must carry all of it. Formally H(S) = I(S; X ∣ A) ≤ H(X ∣ A) ≤ H(X) (our own proof).

**Wikipedia:** [Secret sharing](https://en.wikipedia.org/wiki/Secret_sharing). It says: “Each share of the secret must be at least as large as the secret itself.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudorandom functions defined by oracle tests give secure message authentication codes

**Remember:** A random function gives a fresh message an independent tag.

*True by definition. Confidence: medium.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** A pseudorandom function family is a family of efficiently computable keyed functions, with common finite input and output sets at each security parameter, that no probabilistic polynomial-time test with adaptively chosen oracle queries can tell from a uniformly random function, except with negligible advantage.

**Problem.** Tag each message with the function value, using tags long enough that guessing one is negligible. Then no efficient attacker who may request tags of chosen messages produces a valid tag for a new message, except with negligible probability.

**How the definition helps.** A forger becomes an oracle test: answer its tag requests with the oracle, then check its tag on the fresh message. Against a random function that fresh tag is uniform and independent, so the test passes with probability one over the number of tags. Pseudorandomness changes this by at most a negligible amount (our own reduction).

**Wikipedia:** [Pseudorandom function family](https://en.wikipedia.org/wiki/Pseudorandom_function_family). It says: “Constructing deterministic, memoryless authentication schemes”

**Sources:**

- [Oded Goldreich, Shafi Goldwasser and Silvio Micali, On the Cryptographic Applications of Random Functions (1985)](https://doi.org/10.1007/3-540-39568-7_22)
- [Oded Goldreich, Shafi Goldwasser and Silvio Micali, How to Construct Random Functions (1986)](https://doi.org/10.1145/6490.6503)

### Fourier weights count dual words

**Remember:** Each bit's factor transforms separately into a sum or a difference.

*Makes the theorem clean to state or prove.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 3: graduate.

**Definition.** The weight enumerator of a binary code sums, over its words, the monomial with a factor x for each zero and a factor y for each one. Each monomial is a product of one-bit factors, so a Fourier transform over binary words acts on each bit separately.

**Problem.** For a binary linear code C, substitute x + y and x − y for the respective variables in its weight enumerator. Dividing by \|C\| gives the enumerator of the dual, the words orthogonal to every word of C.

**How the definition helps.** Average the sign (−1)<sup>(u·v)</sup> over u in C: by character orthogonality it is one when v is in the dual and zero otherwise. Weight each v by its monomial and sum over v first; the sum factors bit by bit, giving x + y where u has a zero and x − y where u has a one (our own proof).

**Wikipedia:** [Enumerator polynomial](https://en.wikipedia.org/wiki/Enumerator_polynomial). It says: “W(C⊥;x,y) = (1/\|C\|) W(C;y−x,y+x).”

**Paper or page:** [Steiner systems S(2,4,2ᵐ) supported by a family of extended cyclic codes](https://arxiv.org/abs/1904.02310v2). It says: “A<sup>\\perp</sup> (z)=q<sup>-\\kappa </sup>\\Big(1+(q-1)z\\Big)<sup>vA\\Big</sup>(\\frac{1-z}{1+(q-1)z}\\Big).”

**Sources:**

- [Jessie MacWilliams, A Theorem on the Distribution of Weights in a Systematic Code (1963)](https://doi.org/10.1002/j.1538-7305.1963.tb04003.x)

### Reed–Muller codes as polynomial evaluations make their duals Reed–Muller codes

**Remember:** A monomial missing a variable sums to zero over the cube.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 3: graduate.

**Definition.** RM(r, m) is the binary code of value tables of polynomials of degree at most r over the two-element field, evaluated at all 2ᵐ points of the binary cube in a fixed order. A dot product of two such tables is the sum over the cube of the product polynomial, and a monomial that misses a variable sums to zero there.

**Problem.** For 0 ≤ r &lt; m, the dual of RM(r, m) is RM(m − r − 1, m). The dual is the set of words orthogonal to every codeword.

**How the definition helps.** Degrees at most r and m − r − 1 give a product of degree at most m − 1, so every monomial misses a variable and the codes are orthogonal (our own proof). Squarefree monomials give bases, and complementing variable sets shows that the two dimensions add to 2ᵐ. So orthogonality becomes equality with the dual.

**Wikipedia:** [Reed–Muller code](https://en.wikipedia.org/wiki/Reed%E2%80%93Muller_code). It says: “The dual code to RM(r,m) is RM(m-r-1,m).”

**Sources:** none listed. No primary source with a working link was found.

### Consecutive roots bound BCH distance

**Remember:** Consecutive roots rule out a word with too few nonzero symbols.

*True by definition.* MSC 94B15 (Cyclic codes), 94B65. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** A narrow-sense BCH code of length n over a finite field is the set of words whose polynomials, with the symbols as coefficients, vanish at α, α², …, α<sup>(d−1)</sup>, where α has multiplicative order n in that field or a larger one.

**Problem.** For 2 ≤ d ≤ n, any two distinct words of this code differ in at least d positions.

**How the definition helps.** A difference of codewords has the same roots, so it suffices that no nonzero word has weight s &lt; d (our own). At its s nonzero positions j, the first s root equations form a matrix with entries (αʲ)ⁱ, and dividing each column by αʲ gives a Vandermonde matrix on the distinct nodes αʲ. Its determinant is nonzero, so every coefficient vanishes.

**Wikipedia:** [BCH code](https://en.wikipedia.org/wiki/BCH_code). It says: “A BCH code has minimal Hamming distance at least d.”

**Sources:** none listed. No primary source with a working link was found.

### Different twists give complementary duals

**Remember:** Different twists force a code and its dual apart.

*True by definition.* MSC 94B15 (Cyclic codes), 94B05. arXiv math.IT. Level 3: graduate.

**Definition.** For nonzero λ, a linear code over a finite field is λ-constacyclic if it is closed under the twisted shift that moves each entry one place right and moves the last entry to the front multiplied by λ. Its dual under the ordinary dot product is then λ⁻¹-constacyclic, so when λ ≠ λ⁻¹ the code and its dual obey different twists (our own).

**Problem.** If λ² ≠ 1, a λ-constacyclic code meets its dual only in the zero word.

**How the definition helps.** In polynomial form, the code is the multiples of some g dividing xⁿ − λ, and its dual those of some h dividing xⁿ − λ⁻¹. These two polynomials differ by the constant λ⁻¹ − λ ≠ 0, so g and h are coprime, and deg g + deg h = n. A shared word of degree below n is then a multiple of gh, of degree n, so it is zero (our own proof).

**Paper or page:** [The ℓ-intersection Pairs of Constacyclic and Conjucyclic Codes](https://arxiv.org/abs/2309.01985v1). It says: “such that λ² ≠ 1. Then C is an LCD code.”

**Sources:**

- [The ℓ-intersection Pairs of Constacyclic and Conjucyclic Codes](https://arxiv.org/abs/2309.01985v1)

### Pole budgets bound code distance

**Remember:** Each zero spends one unit of the pole budget.

*True by definition.* MSC 94B27 (Geometric methods (including applications of algebraic geometry) applied to coding theory), 94B65. arXiv math.IT. Level 3: graduate.

**Definition.** An algebraic-geometry code evaluates, at n distinct rational points of a smooth projective geometrically irreducible curve over a finite field, every rational function over that field whose only poles lie at other specified rational points, with prescribed maximum orders totaling m.

**Problem.** If m &lt; n, any two different codewords differ in at least n − m positions.

**How the definition helps.** Two different codewords come from a nonzero difference function, which has a zero wherever they agree. A nonzero rational function has as many zeros as poles, counted with multiplicity over the algebraic closure, and this one has at most m poles. So the codewords agree at most at m of the n points (our own proof).

**Paper or page:** [Attaining Sudan's decoding radius with no genus penalty for algebraic geometry codes](https://arxiv.org/abs/2103.11188v2). It says: “d(C) ≥ n − deg G”

**Sources:** none listed. No primary source with a working link was found.

### Tilting bounds code spheres

**Remember:** Choose the tilt that makes the target weight average.

*Makes the theorem clean to state or prove.* MSC 94B65 (Bounds on codes). arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Give each symbol of a finite alphabet a nonnegative weight w, with minimum zero and some weight positive, and let F(y) be the sum of yʷ over the symbols. For y &gt; 0 the tilted distribution picks a symbol of weight w with probability yʷ/F(y), so n independent picks give every word of total weight W the same probability y<sup>W</sup>/F(y)ⁿ.

**Problem.** Let W/n lie strictly between zero and the mean symbol weight under uniform sampling. Then for every y &gt; 0 the number of length-n words of weight W is at most F(y)ⁿ/y<sup>W</sup>, and the bound is best when the tilted mean symbol weight equals W/n.

**How the definition helps.** The words of weight W have total probability at most one and each has probability y<sup>W</sup>/F(y)ⁿ, which gives the bound. The logarithm of the bound has derivative in log y equal to n times the tilted mean minus W, and the tilted mean increases strictly with y, so the minimum is where they match (our own calculation).

**Paper or page:** [Bounds on Sphere Sizes in the Sum-Rank Metric and Coordinate-Additive Metrics](https://arxiv.org/abs/2404.10666v3). It says: “the minimum on the right-hand side is attained at y = q⁻ᵝ”

**Sources:**

- [Hugo Beeloo-Sauerbier Couvée, Thomas Jerkovits, Jessica Bariffi, Bounds on Sphere Sizes in the Sum-Rank Metric and Coordinate-Additive Metrics (2025)](https://arxiv.org/abs/2404.10666v3)

### Sibson information as a minimum over product laws obeys data processing

**Remember:** Push the trial product law through the same channel.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Sibson information of order α &gt; 0 between finite random variables X and Y is the smallest Rényi divergence from their joint law to a product law Pₓ ⊗ Q, where Q ranges over laws on the alphabet of Y; at order one use relative entropy.

**Problem.** Let X, Y and Z have finitely many values, with Z depending on X only through Y. Then for every order α &gt; 0, Sibson information between X and Z is at most that between X and Y.

**How the definition helps.** The channel that keeps X and sends Y to Z maps the joint law of X and Y to that of X and Z, and maps each product Pₓ ⊗ Q to another product Pₓ ⊗ Q′. Rényi divergence cannot grow under a channel, so the minimizing product for Y gives an admissible value for Z no larger than the minimum (our own proof).

**Paper or page:** [Sibson α-Mutual Information and Its Variational Representations](https://arxiv.org/abs/2405.08352v2). It says: “Data processing inequality: Let X,Y,Z be three random variables jointly distributed”

**Sources:**

- [Sibson α-Mutual Information and Its Variational Representations, Theorem 4.1](https://arxiv.org/abs/2405.08352v2)

### Spectrum distance controls Shannon capacity

**Remember:** Uniformly close bounds have uniformly close minima.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)). arXiv math.IT. Level 4: research.

**Definition.** A spectrum function on finite graphs is nonnegative, equals one on the one-vertex graph, adds under disjoint union, multiplies under strong product, and does not decrease along a vertex map that keeps distinct nonadjacent vertices distinct and nonadjacent. The spectrum distance between two graphs is the largest absolute difference of their values over all spectrum functions.

**Problem.** The Shannon capacities of two finite graphs, the growth rates of their largest independent sets in strong powers, differ by at most their spectrum distance.

**How the definition helps.** The graph form of Strassen's duality theorem makes the Shannon capacity the minimum of the spectrum functions' values. If every value moves by at most the distance, so does the minimum (our own quantitative argument).

**Paper or page:** [The asymptotic spectrum distance, graph limits, and the Shannon capacity](https://arxiv.org/abs/2404.16763v1). It says: “converges to a graph H in the asymptotic spectrum distance, then (Θ(Gᵢ))ᵢ∈ℕ converges to Θ(H).”

**Sources:**

- [The asymptotic spectrum distance, graph limits, and the Shannon capacity](https://arxiv.org/abs/2404.16763v1)

### Asking only indistinguishability lets obfuscation escape the impossibility theorem

**Remember:** Hide which program you wrote, not everything about the program.

*Rules out counterexamples.* MSC 94A60 (Cryptography), 68Q06. arXiv cs.CR, cs.CC. Level 4: research.

**Definition.** An indistinguishability obfuscator turns a circuit into an equivalent circuit of polynomially bounded size, so that any two equivalent circuits of equal size give computationally indistinguishable obfuscations. It hides which implementation was given, not what the function does; the inefficient variant may take unbounded time.

**Problem.** Barak et al. showed that black-box obfuscation is impossible for some programs. Their counterexample does not apply to indistinguishability obfuscation, and an inefficient indistinguishability obfuscator exists for all circuits.

**How the definition helps.** Barak et al.'s counterexample leaks a property that every equivalent circuit shares, which breaks black-box security but not indistinguishability (our own explanation). An inefficient obfuscator outputs the first equivalent circuit in a fixed order by size, testing equivalence on all inputs. Equivalent circuits then have identical obfuscations.

**Wikipedia:** [Indistinguishability obfuscation](https://en.wikipedia.org/wiki/Indistinguishability_obfuscation), [Black-box obfuscation](https://en.wikipedia.org/wiki/Black-box_obfuscation). It says: “Barak et al. constructed a family of unobfuscatable programs, for which an efficient attacker can always learn more from any obfuscated code than from black-box access.”

**Sources:**

- [B. Barak, O. Goldreich, R. Impagliazzo, S. Rudich, A. Sahai, S. Vadhan and K. Yang, On the (im)possibility of obfuscating programs, Journal of the ACM 59 (2012)](https://doi.org/10.1145/2160158.2160159)

### Universally composable security keeps protocols secure inside any larger system

**Remember:** If no environment can tell, no surrounding system can tell either.

*Makes the theorem clean to state or prove.* MSC 94A60 (Cryptography), 68M25. arXiv cs.CR. Level 4: research.

**Definition.** A protocol securely emulates an ideal functionality in the universally composable sense if, for each efficient real attacker, some efficient ideal attacker makes the real and ideal outputs computationally indistinguishable to every efficient environment. The environment supplies inputs, reads outputs and talks freely with the attacker, so it can play any surrounding system.

**Problem.** By Canetti's universal composition theorem, replacing ideal calls with a securely emulating protocol keeps security in any efficient surrounding protocol that meets the theorem's session conditions. Stand-alone security gives no such guarantee.

**How the definition helps.** The surrounding protocol can be folded into the environment, which the definition already quantifies over (our own summary of Canetti's proof). So a larger system that told real from ideal would be an environment that does so.

**Wikipedia:** [Universal composability](https://en.wikipedia.org/wiki/Universal_composability). It says: “Protocols remain secure even if arbitrarily composed with other instances of the same or other protocols.”

**Sources:**

- [R. Canetti, Universally composable security: a new paradigm for cryptographic protocols, FOCS 2001](https://doi.org/10.1109/SFCS.2001.959888)

### Gabidulin codes as linearized polynomial evaluations reach the rank Singleton bound

**Remember:** A big kernel would force too many roots.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Let K be a degree-m extension of the field with q elements, and choose n points of K independent over that small field, with 1 ≤ k ≤ n ≤ m. The Gabidulin code evaluates at these points all polynomials ∑ᵢ aᵢ x<sup>(qⁱ)</sup> with 0 ≤ i &lt; k and coefficients in K. Each such polynomial is a linear map over the small field, and a nonzero one has at most q<sup>(k−1)</sup> roots, so a kernel of dimension at most k − 1.

**Problem.** Every nonzero word of a Gabidulin code of dimension k has rank at least n − k + 1, where the rank of a word is the dimension of the span of its entries over the small field.

**How the definition helps.** Rank and nullity on the n-dimensional span of the points give an image of dimension at least n − (k − 1) (our own proof). That image is the span of the codeword's entries.

**Paper or page:** [On the list decodability of rank-metric codes containing Gabidulin codes](https://arxiv.org/abs/2103.07547v1). It says: “be a generalized Gabidulin code with minimum distance d = n − k + 1”

**Sources:** none listed. No primary source with a working link was found.

### Noncatastrophic encoders admit parity checks

**Remember:** A polynomial right inverse lets parity checks describe the code exactly.

*Rules out counterexamples.* MSC 94B10 (Convolutional codes). arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Over the polynomial ring with coefficients modulo a prime power, a code is the set of polynomial words uG for a k-row encoder G with independent rows. It is noncatastrophic if some such encoder has a polynomial right inverse R, so that every message is read back as u = (uG)R.

**Problem.** The code has an exact polynomial parity check precisely when it is noncatastrophic. Here an exact check is a matrix with n rows and n − k independent columns whose left kernel equals the code.

**How the definition helps.** A polynomial right inverse lets the encoder rows extend to an invertible square polynomial matrix, by the paper's completion theorem. In the coordinates of that matrix the code is the set of words whose last n − k coordinates vanish, and reading those coordinates is an exact check. The converse is the paper's characterization of codes with exact polynomial parity checks.

**Paper or page:** [Noncatastrophic convolutional codes over a finite ring](https://arxiv.org/abs/2104.06754v1). It says: “if and only if 𝒞 is noncatastrophic.”

**Sources:**

- [Diego Napp, Raquel Pinto, Conceição Rocha, Noncatastrophic convolutional codes over a finite ring (2021)](https://arxiv.org/abs/2104.06754v1)

### Lifting matrices to graph subspaces doubles their rank distance

**Remember:** Two graphs meet exactly where their maps agree.

*True by definition.* MSC 94B60 (Other types of codes), 94B05. arXiv cs.IT, math.IT. Level 4: research.

**Definition.** The graph of an m-by-n matrix A over a field is the m-dimensional space of pairs (x, xA), the row space of \[I A\]. Two graphs share exactly the pairs with xA = xB, that is, with x in the left kernel of A − B.

**Problem.** For two matrices of the same size, the subspace distance between their graphs, dim U + dim V − 2 dim(U ∩ V), is twice the rank of their difference.

**How the definition helps.** By rank and nullity the intersection has dimension m − rank(A − B). So the subspace distance is 2m − 2(m − rank(A − B)) = 2 rank(A − B) (our own).

**Paper or page:** [On the list decodability of rank-metric codes containing Gabidulin codes](https://arxiv.org/abs/2103.07547v1). It says: “is a constant dimension subspace code with parameters”

**Sources:** none listed. No primary source with a working link was found.

### Shortest paths measure phase rotations

**Remember:** One edge means one allowed change.

*True by definition.* MSC 94B60 (Other types of codes), 94B65. arXiv math.IT. Level 4: research.

**Definition.** Join two words of equal length over a finite field when one move turns one into the other: either change one coordinate, or add the same nonzero field element to every coordinate.

**Problem.** The shortest path distance in this graph equals the phase-rotation distance, the least number of coordinate changes plus one if a common shift is also used.

**How the definition helps.** Coordinate changes and common shifts commute, so all shifts on a path combine into one shift or none (our own proof). After that shift, every mismatched coordinate needs its own move, and changing each mismatch once is enough.

**Paper or page:** [The Eigenvalue Method in Coding Theory](https://arxiv.org/abs/2509.08917v1). It says: “coincides with the phase-rotation distance.”

**Sources:**

- [The Eigenvalue Method in Coding Theory](https://arxiv.org/abs/2509.08917v1)
