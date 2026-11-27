### Prefix codes decode instantly

**Remember:** When you reach a codeword, stop reading that symbol.

*Rules out counterexamples.* MSC 94A45 (Prefix, length-variable, comma-free codes), 68P30. arXiv cs.IT, math.IT. Level 1: early undergraduate.

**Definition.** A binary prefix code assigns distinct nonempty bit strings to symbols. No codeword begins with another codeword. Unique decodability means each complete encoded string splits into codewords in only one way.

**Problem.** With a prefix code, a decoder can emit each symbol as soon as its last bit arrives.

**How the definition helps.** The prefix rule excludes any longer word once a codeword has arrived. Our own counterexample is {0, 01}, which is uniquely decodable but cannot emit a symbol as soon as it reads 0. It still needs a next bit or an end marker. Our own comparison moves the work to constructing a prefix code with suitable lengths, which Kraft’s theorem addresses.

**Wikipedia:** [Prefix code](https://en.wikipedia.org/wiki/Prefix_code). It says: “Prefix codes are also known as prefix-free codes, prefix condition codes and instantaneous codes.”

**Sources:** none listed. No primary source with a working link was found.

### Averaged conditional entropy makes the chain rule an identity

**Remember:** Learn X first, then pay only for what remains of Y.

*True by definition.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The conditional entropy H(Y\|X) is the average, over the values x of X, of the entropy of Y given X = x. Equivalently, it is the expectation of −log p(y\|x).

**Problem.** The joint entropy splits as H(X,Y) = H(X) + H(Y\|X). For many variables, the joint entropy is the sum of each entropy conditioned on the ones before.

**How the definition helps.** Because p(x,y) = p(x)p(y\|x), the logarithm splits into two terms, and taking expectations gives the chain rule at once. The page says that the chain rule follows from the definition. The page also notes that it has the same form as the chain rule of probability, with addition in place of multiplication. Our own: the entropy of Y given one fixed value of X satisfies no such rule. The page also warns that this one-value entropy can be larger than H(Y). Only the average behaves well, and the page says it never exceeds H(Y).

**Wikipedia:** [Conditional entropy](https://en.wikipedia.org/wiki/Conditional_entropy). It says: “The chain rule follows from the above definition of conditional entropy”

**Sources:** none listed. No primary source with a working link was found.

### Defining information as minus log probability makes independent information add

**Remember:** Probabilities multiply, logarithms add, so information adds.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The information content, or surprisal, of an event with probability p is I(p) = −log p. Entropy is the expected information content of a random outcome.

**Problem.** The information from two independent events is the sum of their information, and the entropy of independent random variables is additive. Conversely, the logarithm is the only twice continuously differentiable decreasing choice of I with I(1) = 0 and this additivity.

**How the definition helps.** Independent probabilities multiply, and the logarithm turns products into sums, so additivity holds by definition. The page lists the required properties: I decreases, I(1) = 0, information from independent events adds, and I is twice continuously differentiable. It then says that these force I(u) = k log u. So the definition is not one choice among many but the only one. The choice of k is only the choice of unit, such as bits or nats. What stays hard is to justify the axioms themselves, which the page motivates by counting the bits needed to encode outcomes.

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “In fact, the only possible values of I are I(u) = k log u for k&lt;0.”

**Sources:**

- [C. E. Shannon, A Mathematical Theory of Communication, Bell System Technical Journal 27 (1948)](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Error flags reveal Fano’s bound

**Remember:** One bit marks the error, then only wrong choices remain.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy), 94B70. arXiv math.IT. Level 2: later undergraduate.

**Definition.** Let X be a message from a set of M possibilities, with M at least two. Let X̃ guess it from the same set. Add a flag E that says whether the guess is wrong.

**Problem.** The uncertainty remaining about X given X̃ is at most h(p) + p log₂(M − 1) bits. Here p is the error probability, and h(p) is the entropy of a bit that equals one with probability p.

**How the definition helps.** The flag leaves only one possible message after a correct guess and at most M − 1 after an error. Given both the guess and the message, the flag is known. The entropy chain rule therefore splits the remaining uncertainty into uncertainty about the flag and uncertainty after learning its value. In our own wording, the first term is at most h(p), since conditioning cannot increase average uncertainty. The second averages to at most p log₂(M − 1).

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

**Definition.** The mutual information I(X;Y) is the relative entropy (Kullback–Leibler divergence) of the joint distribution of X and Y from the product of their marginal distributions. Relative entropy measures how far one distribution is from another, and it is never negative.

**Problem.** Mutual information is nonnegative, and it is zero exactly when X and Y are independent. As a result, H(X) ≥ H(X\|Y): on average, knowing Y never increases the uncertainty about X.

**How the definition helps.** Written as a relative entropy, mutual information inherits nonnegativity and its equality case from Gibbs' inequality, so both facts come for free. The page says that I(X;Y) is zero precisely when the joint distribution equals the product of the marginals. The identity I(X;Y) = H(X) − H(X\|Y) then turns nonnegativity into the statement that conditioning reduces entropy. What stays hard is Gibbs' inequality itself, which needs Jensen's inequality for the convex function −log.

**Wikipedia:** [Mutual information](https://en.wikipedia.org/wiki/Mutual_information), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Because I(X;Y) is non-negative, consequently, H(X) ≥ H(X∣Y).”

**Sources:**

- [S. Kullback and R. A. Leibler, On Information and Sufficiency, Annals of Mathematical Statistics 22 (1951)](https://doi.org/10.1214/aoms/1177729694)

### Mutual information survives a change of variables, but differential entropy does not

**Remember:** Information measured by comparing two distributions does not care about the units.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Mutual information I(X;Y) is the relative entropy (Kullback–Leibler divergence) of the joint distribution of X and Y from the product of their marginal distributions. Relative entropy measures how far one probability distribution is from another. For continuous variables, mutual information equals the limit of discrete mutual information over finer and finer partitions.

**Problem.** Carry the information measures of discrete variables over to continuous variables, and keep their meaning.

**How the definition helps.** Mutual information compares two distributions, so it does not depend on how you measure each variable. Differential entropy, the naive analogue of Shannon entropy, changes when the units change: it shifts by log 1000 from metres to millimetres. It can also be negative. Mutual information is the limit of discrete values, and it is invariant under homeomorphisms (continuous maps with continuous inverses) of each variable. So, in our own words, theorems such as channel capacity for continuous channels can be stated with mutual information. Relative entropy needs absolute continuity of one distribution with respect to the other: every set of probability zero under the second must have probability zero under the first.

**Wikipedia:** [Differential entropy](https://en.wikipedia.org/wiki/Differential_entropy), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Unlike the discrete analog, the differential entropy has an offset that depends on the units used to measure X.”

**Sources:**

- [Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal 27, 379–423.](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### The convention 0 log 0 = 0 makes entropy continuous

**Remember:** An outcome that never happens adds no uncertainty.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** The Shannon entropy of a distribution p on a finite set is H = −Σ p(x) log p(x). When p(x) = 0, the term 0 log 0 is taken to be 0, because p log p goes to 0 as p goes to 0.

**Problem.** With the convention, entropy is a continuous function on the whole set of probability distributions, including its boundary. Also, adding outcomes of probability zero does not change the entropy.

**How the definition helps.** The convention fills the only gap in the formula with its limit value, so entropy has no exceptions at the edge of the simplex. The page says that the value 0 agrees with the limit. Our own: without it, the entropy of a point mass would be undefined. The fact that entropy is zero exactly for a certain outcome would then need special cases. Our own: the continuity axiom in the page's alternative characterization also needs this convention. What stays hard is the characterization itself, which shows that −Σ p log p is the only function with the listed properties.

**Wikipedia:** [Entropy (information theory)](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29). It says: “the value of the corresponding summand ... is taken to be 0, which is consistent with the limit”

**Sources:** none listed. No primary source with a working link was found.

### Types separate counts from probabilities

**Remember:** Count words once, then multiply by one word’s probability.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A29. arXiv math.IT. Level 2: later undergraduate.

**Definition.** Group length-n words by type, the vector of their symbol frequencies. Let T be the class of words of type Q. Draw the symbols independently from a positive law P.

**Problem.** The probability of T under P equals its probability under Q times 2 raised to −nD. Here D is the sum of Q(s) log₂(Q(s)/P(s)) over symbols s with positive frequency.

**How the definition helps.** Grouping by frequency makes the probability ratio constant throughout each group. Our own calculation compares this with adding the probability of every word separately. A word of type Q contains nQ(s) copies of symbol s. Independence makes its log probability ratio under P versus Q equal to −nD. The common factor therefore comes outside the sum over words.

**Wikipedia:** [Method of types](https://en.wikipedia.org/wiki/Method_of_types). It says: “The sets of sequences having empirical distribution Q, are called the type classes”

**Sources:** none listed. No primary source with a working link was found.

### Defined by mutual information, channel capacity adds over independent channels

**Remember:** Two independent channels together carry exactly the sum of their capacities.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)), 94A40. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** A channel is a conditional distribution p(y\|x) of output given input. Its capacity is C = sup I(X;Y), the supremum of the mutual information between input and output over all input distributions.

**Problem.** For two independent channels used side by side, the capacity of the product channel equals the sum of the two capacities.

**How the definition helps.** The formula turns capacity into an optimization of mutual information, and mutual information splits over independent parts, so additivity takes a short proof. The page proves one inequality with independent inputs. The other inequality uses the fact that, for the product channel, the mutual information of the joint output is at most the sum. Our own: with the operational definition, as a best rate of reliable codes, the same fact would need a coding argument. The noisy-channel coding theorem shows that the two definitions agree, and that is where the work is.

**Wikipedia:** [Channel capacity](https://en.wikipedia.org/wiki/Channel_capacity). It says: “Channel capacity is additive over independent channels. It means that using two independent channels in a combined manner provides the same theoretical capacity as using them independently.”

**Sources:**

- [C. E. Shannon, A Mathematical Theory of Communication, Bell System Technical Journal 27 (1948)](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Arithmetic codes as grid intervals stay within two bits of entropy

**Remember:** A grid cell half as wide as the interval always fits.

*True by definition. Confidence: low.* MSC 94A29 (Source coding), 94A45. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Give each source block of positive probability its own interval in \[0, 1), of length equal to the block's probability. Its codeword is the shortest binary word whose binary grid interval fits inside. The point description instead sends a single number inside the block's interval.

**Problem.** For a finite source of fixed-length blocks, this code is a prefix code with expected length less than the block entropy plus two bits. In a prefix code no codeword begins another.

**How the definition helps.** With codewords as grid intervals, the prefix property is just disjointness of intervals. A word begins another exactly when its grid interval contains the other's. A grid cell of width at most half the block interval always fits inside it. Its word is shorter than minus the logarithm of the probability, plus two. Averaging gives the bound. The work goes into showing that nested subdivision gives intervals of the right length, by the chain rule of probability. The proof is our own.

**Wikipedia:** [Arithmetic coding](https://en.wikipedia.org/wiki/Arithmetic_coding). It says: “Arithmetic coding achieves compression by subdividing the interval \[0, 1) into sub-intervals proportional to symbol probabilities.”

**Sources:**

- [Ian H. Witten, Radford M. Neal and John G. Cleary, Arithmetic Coding for Data Compression (1987)](https://doi.org/10.1145/214762.214771)

### Support entropy gives fixed-length cost

**Remember:** Fixed-length codes need room for rare outcomes too.

*Rules out counterexamples.* MSC 94A29 (Source coding), 94A17. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** For a finite source, Hartley entropy is the base-two logarithm of the number of possible outcomes. Shannon entropy instead averages minus the base-two log probability over those outcomes.

**Problem.** The smallest fixed bit length for zero-error encoding of one source symbol is the Hartley entropy rounded up.

**How the definition helps.** The definition counts the outcomes that the code must distinguish. Our own proof uses the fact that ℓ bits have exactly 2 to the power ℓ possible strings. Our own counterexample assigns probabilities 0.98, 0.01 and 0.01 to three symbols. Rounding Shannon entropy up gives one bit, which cannot encode all three. Our own comparison puts the work into finding the support, without estimating the individual probabilities.

**nLab:** [max-entropy](https://ncatlab.org/nlab/show/max-entropy). It says: “the logarithm of the number of outcomes with non-zero probability.”

**Sources:** none listed. No primary source with a working link was found.

### The typical set makes the source coding theorem short

**Remember:** Typical sequences are the ones whose probability is about 2 to the power −nH.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 94A29 (Source coding), 94A24. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Let H be the entropy of the source. The typical set is the set of length-n sequences x whose probability lies between 2 to the power −n(H+ε) and 2 to the power −n(H−ε).

**Problem.** Shannon's source coding theorem: you can compress n symbols from a source of entropy H to about nH bits, and not fewer.

**How the definition helps.** The definition turns compression into counting. By the asymptotic equipartition property, the typical set has probability close to 1 and contains about 2 to the power nH sequences. So an index of the typical sequences takes about nH bits. You can code the other sequences crudely at little cost. For independent identically distributed symbols, the asymptotic equipartition property is just the weak law of large numbers. The harder step is to prove it for stationary ergodic sources (the Shannon–McMillan–Breiman theorem).

**Wikipedia:** [Typical set](https://en.wikipedia.org/wiki/Typical_set), [Asymptotic equipartition property](https://en.wikipedia.org/wiki/Asymptotic_equipartition_property). It says: “it provides a theoretical means for compressing data, allowing us to represent almost all sequences Xⁿ using nH(X) bits on average, and, hence, justifying the use of entropy as a measure of information from a source.”

**Sources:**

- [Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal 27, 379–423.](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)

### Erasure markers give capacity directly

**Remember:** A visible erasure either loses the whole bit or loses nothing.

*True by definition.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A24. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** In a memoryless binary erasure channel, each use independently replaces the input bit by a distinct erasure marker with probability p. Otherwise the output equals the input. Define information capacity as the largest reduction in input uncertainty from observing one output, measured in bits.

**Problem.** The capacity of the binary erasure channel is 1 − p bits per use.

**How the definition helps.** The marker splits the uncertainty calculation into a known bit and an erased bit. Our own derivation observes that seeing the marker leaves the original uncertainty, since erasure is independent of the input. Seeing a bit leaves zero uncertainty. The mean reduction is therefore 1 − p times the original uncertainty. A uniform bit has the largest uncertainty, one bit. The coding theorem identifies this information capacity with the highest rate achievable with arbitrarily small error over long blocks.

**Wikipedia:** [Binary erasure channel](https://en.wikipedia.org/wiki/Binary_erasure_channel). It says: “The channel capacity of a BEC is 1−Pₑ, attained with a uniform distribution for X”

**Sources:** none listed. No primary source with a working link was found.

### McMillan's theorem lets prefix codes stand in for all decodable codes

**Remember:** Restrict to prefix codes, because you lose nothing by it.

*Makes the theorem clean to state or prove.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A29. arXiv math.IT, cs.IT. Level 2: later undergraduate.

**Definition.** A code is uniquely decodable when every string of code words splits into code words in only one way. A prefix code is a code in which no code word is the beginning of another one. Every prefix code is uniquely decodable.

**Problem.** Take code word lengths ℓ₁, …, ℓₙ over an alphabet of size r. They belong to a uniquely decodable code if and only if the sum of r to the power −ℓᵢ is at most 1. The same lengths then belong to a prefix code.

**How the definition helps.** Prefix codes are the leaves of a tree, so Kraft's inequality for them follows by counting leaves. McMillan's theorem extends the inequality to all uniquely decodable codes, so the narrower and simpler definition loses nothing. As a result, source coding results can be stated and proved with prefix codes alone. Prefix codes can also be decoded one word at a time, without waiting for later symbols (our own). What stays hard is McMillan's proof, which raises the Kraft sum to a high power and counts strings of each length.

**Wikipedia:** [Kraft–McMillan inequality](https://en.wikipedia.org/wiki/Kraft%E2%80%93McMillan_inequality). It says: “For every uniquely decodable code, there exists a prefix code with the same length distribution.”

**Sources:**

- [B. McMillan, Two inequalities implied by unique decipherability, IRE Transactions on Information Theory 2 (1956)](https://doi.org/10.1109/TIT.1956.1056818)

### Trees make Huffman merging optimal

**Remember:** Merge the two lightest leaves, then solve the smaller tree.

*Makes the theorem clean to state or prove.* MSC 94A45 (Prefix, length-variable, comma-free codes), 94A29. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** In a binary prefix code, no symbol’s bit string starts with another symbol’s entire bit string. Represent a string by a path from the root of a binary tree, taking the branch labeled by each bit. Symbols then occupy leaves, and path lengths give code lengths. Merge two sibling leaves by replacing them with a leaf carrying their combined probability.

**Problem.** For finitely many positive symbol probabilities, Huffman’s repeated merging of the two smallest weights minimizes the mean binary prefix code length.

**How the definition helps.** The tree makes merging two siblings change the mean length by exactly their combined probability. Our own proof starts with an optimal tree on at least two symbols. Every internal vertex has two children because removing a vertex with one child shortens some paths. Two deepest leaves share a parent. Swapping smaller probabilities onto deeper leaves never raises the mean length, so the two smallest probabilities can occupy those siblings. Their merged tree must be optimal since any improvement would also improve the original tree after splitting the leaf. Induction now proves the rule.

**Wikipedia:** [Huffman coding](https://en.wikipedia.org/wiki/Huffman_coding). It says: “equivalently, a tree with minimum weighted path length from the root”

**Sources:**

- [David A. Huffman, A Method for the Construction of Minimum-Redundancy Codes (1952)](https://doi.org/10.1109/JRPROC.1952.273898)

### Perfect hiding rules out perfect binding

**Remember:** Identical commitment laws cannot have disjoint supports.

*True by definition.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 2: later undergraduate.

**Definition.** To commit to a bit, the sender publishes a value computed from the bit and private randomness. Later the sender reveals information that lets the receiver verify the bit. Perfect hiding means both bits give the same distribution of public values. Perfect binding means no public value can be opened as both bits.

**Problem.** Assume finitely many public values and perfect correctness, so every honest opening succeeds. Such a commitment cannot have both properties.

**How the definition helps.** Equal distributions force the two bits to share possible public values, whereas binding requires disjoint sets. Our own proof picks a value of positive probability for bit zero. It also has positive probability for bit one, and correctness supplies both openings. Our own comparison starts with the guessing definition of hiding. No observer can guess a fair bit with advantage. The work there is showing that unequal probabilities for even one event give an observer an advantage.

**Wikipedia:** [Commitment scheme](https://en.wikipedia.org/wiki/Commitment_scheme). It says: “no commitment scheme can be at the same time perfectly binding and perfectly hiding”

**Sources:** none listed. No primary source with a working link was found.

### Zero-information secrecy needs at least as much key entropy as message entropy

**Remember:** The key must supply all the information the ciphertext hides.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 94A17. arXiv cs.CR, cs.IT. Level 2: later undergraduate.

**Definition.** Define perfect secrecy as zero mutual information between message and ciphertext. Mutual information is the drop in the message's entropy once the ciphertext is seen. The probability definition says that seeing the ciphertext leaves every message probability unchanged.

**Problem.** In a perfectly secret scheme with finitely many values and exact decryption, the key entropy is at least the message entropy. This is Shannon's bound.

**How the definition helps.** With the entropy definition the bound is a short chain. Secrecy leaves the full message entropy after the ciphertext is seen. Exact decryption leaves none once the key is also seen. So the key supplies all of the message entropy, and by the chain rule this is at most the key entropy. The work goes into proving that zero mutual information is the same as independence. The proof is our own; the quote states only the secrecy property of the one-time pad.

**Wikipedia:** [One-time pad](https://en.wikipedia.org/wiki/One-time_pad). It says: “the ciphertext C gives absolutely no additional information about the plaintext.”

**Sources:**

- [Claude E. Shannon, Communication Theory of Secrecy Systems (1949)](https://doi.org/10.1002/j.1538-7305.1949.tb00928.x)

### Finite fields protect Shamir shares

**Remember:** Over a finite field, all secrets fit equally many polynomials.

*Rules out counterexamples.* MSC 94A62 (Authentication, digital signatures and secret sharing). arXiv cs.CR, math.IT. Level 2: later undergraduate.

**Definition.** Choose a finite field with enough distinct nonzero points for all participants. Use the secret as the constant term of a polynomial of degree at most k − 1. Choose the other k − 1 coefficients independently and uniformly, independently of the secret. Each participant receives the polynomial’s value at their assigned point.

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

### Codes as check-matrix kernels have distance equal to the fewest dependent columns

**Remember:** A light codeword is a short dependence among check columns.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Define a linear code over a finite field as the kernel of a matrix H, called its check matrix. The usual alternative describes the code by a generator matrix whose rows span it.

**Problem.** Take a nonzero linear code with check matrix H. Its minimum distance equals the smallest number of linearly dependent columns of H.

**How the definition helps.** With the kernel definition, a codeword is literally a list of coefficients of a dependence among the columns of H. So a codeword of weight w is a dependence among w columns, and conversely. For a linear code, the minimum distance is the smallest nonzero weight, since c − c′ is again a codeword. With only a generator matrix, one must first compute the check matrix as the space orthogonal to its rows. This comparison and the proof are our own.

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

**How the definition helps.** The dual definition turns any missing pattern in a projection into a constraint on just those positions. Our own proof observes that a proper projected subspace has a nonzero vector orthogonal to it. Padding that vector with zeros gives a dual word with too few nonzero positions. The projection is therefore onto, and its fibers have equal size by linearity. This replaces the orthogonal-array definition, which asks us to count every pattern on each selection of positions.

**Wikipedia:** [Orthogonal array](https://en.wikipedia.org/wiki/Orthogonal_array). It says: “Then C⊥ (the orthogonal complement of the vector subspace C) is a (linear) OA(qⁿ⁻ᵐ, n, q, d − 1)”

**Sources:** none listed. No primary source with a working link was found.

### Gram matrices detect code hulls

**Remember:** Pairwise dot products reveal which codewords are orthogonal to the code.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Take a linear code over a finite field with the ordinary dot product. Its hull consists of the codewords orthogonal to every codeword. Let G have a basis of codewords as its rows. Instead of constructing the dual separately, form the Gram matrix GGᵀ of dot products between basis rows.

**Problem.** For a code of dimension k, the hull dimension equals k minus the rank of GGᵀ. The hull is zero exactly when GGᵀ is invertible.

**How the definition helps.** The Gram matrix turns orthogonality to the whole code into one matrix equation. Our own proof writes each codeword uniquely as aG, where a lists its coefficients in the chosen basis. Its dot products with the basis rows form aGGᵀ. The hull therefore corresponds to the left kernel of GGᵀ, whose dimension follows from rank–nullity.

**Paper or page:** [Construction for both self-dual codes and LCD codes](https://arxiv.org/abs/2108.12544v1). It says: “Then rank(GGᵀ) = k − dim(Hull(C)).”

**Sources:** none listed. No primary source with a working link was found.

### Hamming check matrices with every nonzero column make Hamming codes perfect

**Remember:** Each nonzero check result names exactly one bit.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B35. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Define the binary Hamming code of order m by a check matrix. Its columns are all the nonzero binary columns of length m, each used once. The usual description is a systematic encoder, which keeps the message bits and appends parity bits.

**Problem.** Every binary word of length 2ᵐ − 1 is within one bit change of exactly one codeword. Codes with this property are called perfect.

**How the definition helps.** With this check matrix, flipping bit j adds column j to the check result. So a word with check result zero is a codeword. A word with a nonzero result s becomes a codeword when we flip the one bit whose column is s. No other single flip works, because the columns are distinct and nonzero. The work goes into showing that this matrix gives the same code as the systematic encoder. Its columns contain an identity matrix, so the checks determine the parity bits. The proof and the comparison are our own.

**Wikipedia:** [Hamming code](https://en.wikipedia.org/wiki/Hamming_code). It says: “The parity-check matrix H of a Hamming code is constructed by listing all columns of length m that are pair-wise independent.”

**Sources:**

- [Richard W. Hamming, Error Detecting and Error Correcting Codes (1950)](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)

### Independent columns preserve dual optimality

**Remember:** Independent columns rule out short dual words.

*True by definition.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv math.IT. Level 2: later undergraduate.

**Definition.** The minimum distance of a linear code is the fewest nonzero entries in any nonzero codeword. For length n and dimension k, the Singleton bound says this distance is at most n − k + 1. A code attaining equality is maximum distance separable. A generator matrix has the vectors of a code basis as its rows.

**Problem.** If 0 &lt; k &lt; n, the dual of a maximum distance separable linear code is also maximum distance separable. The dual consists of all words orthogonal to the code.

**How the definition helps.** The independent-column description turns a short dual word into a forbidden dependence. Our own argument starts with the usual distance definition. A nonzero combination of generator rows vanishes on k selected positions exactly when those k columns fail to span. Thus attaining the Singleton bound means every k columns are independent. A nonzero dual word gives a dependence among the columns at its nonzero positions, so it has at least k + 1 such positions. The dual has dimension n − k, so its Singleton bound gives the matching upper limit.

**Wikipedia:** [Singleton bound](https://en.wikipedia.org/wiki/Singleton_bound). It says: “C⊥ is an MDS code.”

**Sources:** none listed. No primary source with a working link was found.

### Reed–Solomon codes as polynomial evaluations have distance n − k + 1

**Remember:** Two low-degree polynomials agree only at roots of their difference.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** A Reed–Solomon word lists the values of a polynomial of degree less than k at n distinct points of a finite field. A cyclic version instead takes the word as the coefficients of a polynomial with prescribed roots.

**Problem.** A Reed–Solomon code of length n with 1 ≤ k ≤ n has minimum distance n − k + 1.

**How the definition helps.** With the evaluation definition, two distinct codewords agree only where the difference polynomial vanishes, which is at most k − 1 points. A polynomial that vanishes at k − 1 of the points shows that the bound is attained. The work goes into proving that the two definitions agree when the points are the powers of a primitive field element. That proof uses the discrete Fourier transform over the field. The argument and the comparison are our own.

**Wikipedia:** [Reed–Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction). It says: “every codeword of the Reed–Solomon code is a sequence of function values of a polynomial of degree less than k.”

**Sources:**

- [Irving S. Reed and Gustave Solomon, Polynomial Codes Over Certain Finite Fields (1960)](https://doi.org/10.1137/0108018)

### Cyclic codes as polynomial ideals have unique monic generators

**Remember:** Rotating a word multiplies its polynomial by x.

*True by definition. Confidence: medium.* MSC 94B15 (Cyclic codes), 94B05. arXiv cs.IT. Level 2: later undergraduate.

**Definition.** Represent a word of length n by its coefficient polynomial modulo xⁿ − 1. Define a cyclic code as an ideal of this ring, that is, a subspace closed under multiplication by any polynomial. The usual definition is a linear code closed under rotating positions.

**Problem.** Every cyclic code of length n over a finite field is generated by exactly one monic polynomial that divides xⁿ − 1. Monic means that the leading coefficient is one.

**How the definition helps.** As an ideal, the code lifts to an ideal of the polynomial ring. The division algorithm shows that this ideal has one monic generator. This lifted ideal contains xⁿ − 1, so the generator divides xⁿ − 1. The work goes into the agreement of the two definitions. Rotation is multiplication by x, so closure under rotation and linearity gives closure under all polynomial multiples. The proof and the comparison are our own; the quote only says that cyclic codes link to ideals.

**Wikipedia:** [Cyclic code](https://en.wikipedia.org/wiki/Cyclic_code). It says: “Cyclic codes can be linked to ideals in certain rings.”

**Sources:** none listed. No primary source with a working link was found.

### A constant term detects bursts

**Remember:** Remove the delay, then compare the burst degree with the generator degree.

*Rules out counterexamples.* MSC 94B20 (Burst-correcting codes), 94B15. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** Represent a bit string by a polynomial with coefficients zero or one, using arithmetic modulo two. A cyclic redundancy check accepts exactly the multiples of a generator polynomial g of degree r ≥ 1. Require g to have constant term one. A burst is a nonzero error confined to consecutive bit positions.

**Problem.** The check detects every nonzero burst confined to at most r consecutive positions.

**How the definition helps.** The constant term makes g coprime to the delay factor x. Our own derivation writes a burst as a power of x times a nonzero polynomial of degree less than r. If g divided the burst, it would divide that smaller polynomial, which is impossible. Our own counterexample drops the condition and takes g(x) = x², so the one-bit error x² passes.

**Wikipedia:** [Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check). It says: “if it includes the "+1" term, the code will be able to detect error patterns that are confined to a window of r contiguous bits.”

**Sources:**

- [W. W. Peterson and D. T. Brown, Cyclic Codes for Error Detection (1961)](https://doi.org/10.1109/JRPROC.1961.287814)

### Error locators linearize Reed–Solomon decoding

**Remember:** Multiply by a polynomial that vanishes at every error.

*Makes the theorem clean to state or prove.* MSC 94B35 (Decoding). arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** A Reed–Solomon word records the values of a polynomial f of degree less than k at n distinct elements of a finite field. Instead of fitting f directly, look for a polynomial E that vanishes at the errors, and its product N = Ef. At each point require the value of N to be E times the received value.

**Problem.** Suppose at most t errors occur and n − k is at least twice t. Solve for N of degree below k + t and E of degree at most t. Any nonzero solution gives f = N/E.

**How the definition helps.** The error locator makes the fitting equations linear in the unknown coefficients. Our own proof takes E as the product of the linear factors at the error positions and sets N = Ef. For any solution, N − Ef has degree below k + t and at least n − t ≥ k + t distinct roots. Hence N = Ef, and every nonzero solution has E nonzero.

**Paper or page:** [Code-based Cryptography: Lecture Notes](https://arxiv.org/abs/2304.03541v1). It says: “Then, N₁/E₁ = N₂/E₂ = f.”

**Sources:** none listed. No primary source with a working link was found.

### Syndromes label cosets

**Remember:** Equal syndromes mean the difference is a codeword.

*True by definition.* MSC 94B35 (Decoding), 94B05. arXiv cs.IT, math.IT. Level 2: later undergraduate.

**Definition.** Take a matrix H over a finite field. Its kernel is a linear code C, and the syndrome of a column vector x is Hx. A coset is a translate of C. A generator matrix instead describes C by a basis.

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

**How the definition helps.** With the erasure description the bound is a count. Deleting d − 1 positions is injective, and the remaining n − d + 1 positions allow only qⁿ⁻ᵈ⁺¹ values. The work goes into the link between the two descriptions. Deleting d − 1 positions never merges two codewords, while deleting the d differing positions of a closest pair does. The proof is our own; the quote states only the recovery property of optimal codes.

**Wikipedia:** [Erasure code](https://en.wikipedia.org/wiki/Erasure_code). It says: “any k out of the n code word symbols are sufficient to recover the original message”

**Sources:**

- [Richard C. Singleton, Maximum Distance q-nary Codes (1964)](https://doi.org/10.1109/TIT.1964.1053661)

### Lists extend the sphere-packing bound

**Remember:** Each received word has room for L candidates.

*Makes the theorem clean to state or prove.* MSC 94B65 (Bounds on codes), 94B35. arXiv math.IT. Level 2: later undergraduate.

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

**How the definition helps.** Inclusion maximality turns each omitted word into evidence that some codeword lies within d − 1 changes. The source chooses a code of maximum size, which has this property. Our own formulation needs only inclusion maximality. Each codeword covers the same number of words because relabeling symbols preserves distance. Counting the covered words with overlaps gives the bound.

**Wikipedia:** [Gilbert–Varshamov bound](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound). It says: “since otherwise we could add x to the code whilst maintaining the code's minimum Hamming distance d”

**Sources:** none listed. No primary source with a working link was found.

### Signed words yield Plotkin’s bound

**Remember:** Different bits subtract from the dot product.

*True by definition.* MSC 94B65 (Bounds on codes). arXiv math.IT. Level 2: later undergraduate.

**Definition.** Represent a binary word by a vector with +1 for each zero and −1 for each one. If two words differ at s positions, their vectors have dot product n − 2s, where n is the word length.

**Problem.** For a binary code of length n with at least two words, let d be the smallest number of positions where two distinct words differ. If d &gt; n/2, the code size is at most 2d divided by 2d − n.

**How the definition helps.** The signed representation turns a minimum distance into an upper bound on dot products. The usual proof counts disagreements across ordered pairs in two ways. Our own proof sums the M signed vectors and expands the squared length of their sum. The diagonal terms total Mn, and each of the M(M − 1) remaining terms is at most n − 2d. The squared length is nonnegative, which gives the stated bound.

**Wikipedia:** [Plotkin bound](https://en.wikipedia.org/wiki/Plotkin_bound). It says: “The bound is proved by bounding the quantity ∑\[(x,y) ∈ C², x ≠ y\] d(x,y) in two different ways.”

**Sources:**

- [Morris Plotkin, Binary Codes with Specified Minimum Distance (1960)](https://doi.org/10.1109/TIT.1960.1057584)

### Causal conditioning splits feedback information

**Remember:** Put each new symbol on just one side of the ledger.

*True by definition.* MSC 94A17 (Measures of information, entropy), 94A24. arXiv math.IT. Level 3: graduate.

**Definition.** Directed information measures how much the source history through each time reduces uncertainty about the current output, given earlier outputs. Sum these average reductions in uncertainty over time. For delayed reverse information, exchange source and output and use only the strictly earlier output history to predict each source symbol.

**Problem.** For equal-length streams of finite-valued symbols, forward information plus delayed reverse information equals their mutual information, the average uncertainty either stream removes about the other.

**How the definition helps.** Using the strict past in the reverse direction assigns each part of the shared information exactly once. Our own proof expands the joint probability by taking each source symbol immediately before its matching output. Divide by the product of the separate stream probabilities, then take the mean logarithm. This is the usual definition of mutual information. Grouping its terms by stream gives the two directed sums.

**Wikipedia:** [Directed information](https://en.wikipedia.org/wiki/Directed_information). It says: “except one conditions on "past" and "present" symbols yⁱ rather than all symbols yⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Collision bias bounds distance from uniform

**Remember:** Count matching outputs to bound how far the hash is from uniform.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy), 94A60. arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** Choose a function h uniformly from a finite family with the same finite output set. Apply h to two independent draws from one input distribution. Divide their match probability, averaged over h, by the match probability for two independent uniform outputs. Subtract one to obtain the collision bias ε.

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

**How the definition helps.** The conditional definition makes convergence follow from monotonicity (our own). Stationarity means that shifting every time index leaves the joint laws unchanged (our own). Drop X₁ from the conditioning data and shift the indices back by one to compare consecutive terms (our own). Since conditioning cannot raise average entropy, the terms decrease and stay nonnegative (our own). The entropy chain rule makes the joint entropy per symbol the running average of these terms (our own). The work shifts to showing that conditioning reduces entropy and proving the chain rule (our own).

**Wikipedia:** [Entropy rate](https://en.wikipedia.org/wiki/Entropy_rate). It says: “For strongly stationary stochastic processes, the entropy rate equals the limit of that sequence”

**Sources:** none listed. No primary source with a working link was found.

### Entropy power adds at fixed shape

**Remember:** Use a Gaussian’s variance scale instead of its entropy scale.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** For a random vector with a density, its differential entropy is the mean negative logarithm of that density evaluated at the vector. When this mean is finite, match it with a Gaussian vector whose coordinates are independent and have equal variance. Their common variance is the entropy power.

**Problem.** For independent Gaussian vectors with positive definite proportional covariances, the entropy power of their sum equals the sum of their entropy powers.

**How the definition helps.** Entropy power expresses Gaussian entropy on a scale that adds when covariance matrices are proportional. The Gaussian entropy formula gives the entropy power as the nth root of the covariance determinant in dimension n. Our own calculation writes the two matrices as K and cK with c positive. Independence makes the sum’s covariance (1 + c)K. Its determinant root is therefore 1 + c times that of K.

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

**How the definition helps.** The ratio distribution turns each divergence order into a moment calculation. For order a ≠ 1, multiply the divergence by a − 1 to get the logarithm of the mean of (p/q)ᵃ under q. Our own finite-set proof writes that mean as a sum of exponential functions of a, one per distinct positive ratio. Distinct exponentials are linearly independent on any open interval, so the moments determine the positive ratios and their masses. The remaining mass belongs to zero.

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

**How the definition helps.** The exponential form makes the entropy gap equal relative entropy, which cannot be negative (our own). Since log p\* is a constant plus a linear combination of the constrained functions, its average is the same under q and p\* (our own). Thus H(p\*) − H(q) = D(q‖p\*), the average under q of log(q/p\*) (our own). This is zero only when the densities agree almost everywhere, by Gibbs’ inequality (our own). The usual variation proof looks for a stationary density first. The work here shifts to finding coefficients that meet the means, which need not exist for arbitrary targets (our own).

**Wikipedia:** [Maximum entropy probability distribution](https://en.wikipedia.org/wiki/Maximum_entropy_probability_distribution). It says: “In the case of equality constraints, this theorem is proved with the calculus of variations and Lagrange multipliers.”

**Sources:** none listed. No primary source with a working link was found.

### Relative entropy by the Donsker–Varadhan formula cannot grow under maps

**Remember:** Every test on the output pulls back to a test on the input.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Define the relative entropy of P from Q as a supremum over real test functions f. The quantity to maximize is the mean of f under P minus the logarithm of the mean of eᶠ under Q. The usual formula is the mean, under P, of the logarithm of the probability ratio.

**Problem.** Applying the same map to two distributions on a finite set cannot increase their relative entropy.

**How the definition helps.** With the supremum definition, a test on the outputs composed with the map is a test on the inputs with the same value. So the output supremum runs over fewer tests and cannot be larger. The work goes into the Donsker–Varadhan theorem that the supremum equals the usual formula. For positive probabilities the best test is the logarithm of the ratio. The proof is our own; the page states the formula.

**Wikipedia:** [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “Donsker and Varadhan's variational formula”

**Sources:**

- [Monroe D. Donsker and S. R. Srinivasa Varadhan, Asymptotic Evaluation of Certain Markov Process Expectations for Large Time IV (1983)](https://doi.org/10.1002/cpa.3160360204)

### Rényi entropy as a slope of log moments decreases with order

**Remember:** A convex function has increasing slopes from a fixed point.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT. Level 3: graduate.

**Definition.** Let p be a finite probability vector and let X be drawn from it. Let F(t) be the logarithm of the mean of p(X)ᵗ, so F(0) = 0. Then the Rényi entropy of order 1 + t is −F(t)/t, minus the slope of F from 0 to t. The usual formula is the logarithm of a sum of powers of the probabilities, divided by 1 − α.

**Problem.** Rényi entropy does not increase as its order α ≥ 0 grows, with Shannon entropy at order one.

**How the definition helps.** Written as a slope, monotonicity is just a property of convex functions. F is convex by Hölder's inequality, so its slopes from zero increase with t, and their negatives decrease. The work goes into checking that the slope formula equals the usual power-sum formula, and that the slope at zero gives Shannon entropy. The slope view and the proof are our own; the nLab states only the monotonicity.

**nLab:** [Rényi entropy](https://ncatlab.org/nlab/show/R%C3%A9nyi+entropy). It says: “The Rényi entropy is an anti-monotone function in the order-parameter α”

**Sources:** none listed. No primary source with a working link was found.

### Sufficiency preserves the information bottleneck

**Remember:** Keep the predictive law and discard detail the bottleneck never needs.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** A representation U is drawn using only X. Mutual information measures how much observing one variable reduces uncertainty about another. The information bottleneck minimizes the mutual information between U and X for a required amount between U and Y. A statistic S of X is sufficient for Y when the conditional law of Y given X depends only on S.

**Problem.** For finite variables, replacing X by a sufficient statistic S leaves the information bottleneck trade-off with Y unchanged.

**How the definition helps.** Sufficiency lets us replace any representation by one drawn using only the statistic. Draw the replacement from the original representation’s conditional law given S. The paper’s resampling lemma shows this preserves the joint law with Y. It also shows that the new representation carries no more information about X. Our own reverse direction uses any representation of S as a representation of X.

**Paper or page:** [Separable Computation of Information Measures](https://arxiv.org/abs/2501.15301v1). It says: “the optimal U that achieves L\*IB(X, Y; β) satisfies U-S-X-Y.”

**Sources:**

- [Xiangxiang Xu, Lizhong Zheng, Separable Computation of Information Measures (2025)](https://arxiv.org/abs/2501.15301v1)

### The Donsker–Varadhan supremum makes relative entropy convex and lower semicontinuous

**Remember:** A supremum of convex continuous pieces is convex and lower semicontinuous.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy), 60F10. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** Relative entropy D(P‖Q) is the P-average of log(dP/dQ), where dP/dQ is the density of P relative to Q. It is infinite if Q assigns zero probability to a set with positive P-probability. The Donsker–Varadhan formula instead takes the supremum of ∫g dP − log ∫exp(g) dQ over bounded measurable functions g.

**Problem.** Relative entropy is jointly convex in P and Q. On a complete separable metric space, it is also lower semicontinuous under weak convergence. This means the value at the limit cannot exceed the lower limit of the values when both laws converge against bounded continuous tests.

**How the definition helps.** The supremum formula gives both properties from the corresponding properties of each term (our own). For fixed g, its term is linear in P and convex in Q because negative log is convex (our own). Bounded continuous functions suffice on this metric space, and for them each term is continuous under weak convergence (our own). The work shifts to proving equality with the density formula, including the restriction to bounded continuous functions (our own). The quoted paper uses a related supremum for its rate function, not the general two-law claim.

**Wikipedia:** [F-divergence](https://en.wikipedia.org/wiki/F-divergence), [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence). It says: “D<sub>KL</sub>(P; Q) = sup<sub>g</sub> E<sub>P</sub>\[g(X)\] − ln E<sub>Q</sub>\[e<sup>g(X)</sup>\].”

**Paper or page:** [Large Deviations and Information theory for Sub-Critical SINR Randon Network Models](https://arxiv.org/abs/2104.03443v2). It says: “The function Iᵦ(φ) is convex and lower semi-continuous on the space ℳ(𝒲 × 𝒲).”

**Sources:**

- [M. D. Donsker and S. R. S. Varadhan, Asymptotic evaluation of certain Markov process expectations for large time IV, Communications on Pure and Applied Mathematics 36 (1983) 183–212](https://doi.org/10.1002/cpa.3160360204)

### The perspective definition makes all f-divergences jointly convex

**Remember:** Convex pointwise means convex after integration.

*True by definition.* MSC 94A17 (Measures of information, entropy), 62B10. arXiv cs.IT, math.ST. Level 3: graduate.

**Definition.** Let f be convex on the positive reals with f(1) = 0, and let p and q be densities relative to a common measure. The f-divergence D(P‖Q) integrates q·f(p/q), called the perspective of f. When exactly one density is zero, take the limit as that density decreases to zero. When both are zero, set the integrand to zero.

**Problem.** Mix two pairs (P₁, Q₁) and (P₂, Q₂) using the same weight λ between 0 and 1 for the first pair. The divergence of the mixed pair is at most λD(P₁‖Q₁) + (1 − λ)D(P₂‖Q₂).

**How the definition helps.** The definition puts the convex part inside the integral, so the same inequality works for every f. For positive q, the ratio of mixed densities is an average of the separate ratios, with weights proportional to their contributions to q (our own). Convexity of f gives the pointwise bound, and integration gives the result (our own). The work shifts from separate proofs, such as the log-sum inequality for relative entropy, to that one convexity argument and its boundary limits (our own).

**Wikipedia:** [F-divergence](https://en.wikipedia.org/wiki/F-divergence). It says: “This follows from the convexity of the mapping (p,q) ↦ q f(p/q) on ℝ₊².”

**Sources:** none listed. No primary source with a working link was found.

### The supremum over partitions gives coarser information no more entropy

**Remember:** Fewer available partitions cannot give a larger supremum.

*True by definition.* MSC 94A17 (Measures of information, entropy), 28D20. arXiv cs.IT, math.PR. Level 3: graduate.

**Definition.** A σ-algebra is a collection of events closed under complements and countable unions. Its entropy is the supremum of the entropies of its finite partitions, which split the space into disjoint events. A partition has entropy Σ −μ(A)·log μ(A) over its parts A, with zero terms set to zero. The alternative sum formula for a discrete variable uses the probabilities of its individual values.

**Problem.** A smaller σ-algebra has at most the entropy of a larger one on the same probability space. Thus H(f(Y)) ≤ H(Y) for any measurable f, with each variable’s entropy taken for the events it determines.

**How the definition helps.** The supremum definition shows the inequality because a smaller σ-algebra offers fewer finite partitions (our own). Every event determined by f(Y) is also determined by Y (our own). The discrete sum formula instead uses the chain rule for entropy after grouping the values of Y (our own). The work shifts to proving that the partition supremum recovers the sum formula for variables with countably many values.

**nLab:** [entropy](https://ncatlab.org/nlab/show/entropy). It says: “the entropy is the supremum, over all ways of expressing X as an internal disjoint union of finitely many elements of the σ-algebra M”

**Sources:** none listed. No primary source with a working link was found.

### Tree factors simplify distribution matching

**Remember:** Keep the tree with the most information on its edges.

*Makes the theorem clean to state or prove.* MSC 94A17 (Measures of information, entropy). arXiv math.IT. Level 3: graduate.

**Definition.** A tree model chooses one variable as its root and gives every other variable one parent. Multiply the root probability by the probability of each child given its parent. Measure the approximation error by relative entropy. This is the mean log ratio of original probability to model probability, averaged under the original law.

**Problem.** For a finite joint law, choose a tree connecting all variables with the largest total edge weight. Each edge weight is mutual information, the relative entropy of its pair’s law against the product of their individual laws. Use the original root and conditional probabilities wherever the parent has positive probability.

**How the definition helps.** The tree product turns the log probability into a sum with one term per child and one for the root. Our own fixed-tree argument minimizes each term separately using nonnegativity of relative entropy. Substituting the optimal probabilities leaves a constant minus the sum of edge weights. Thus a tree with maximum weight gives minimum error.

**Wikipedia:** [Chow–Liu tree](https://en.wikipedia.org/wiki/Chow%E2%80%93Liu_tree). It says: “only the sum of the pairwise mutual informations”

**Sources:**

- [C. K. Chow and C. N. Liu, Approximating Discrete Probability Distributions with Dependence Trees (1968)](https://doi.org/10.1109/TIT.1968.1054142)

### Giving polar channels the earlier bit preserves total symmetric capacity

**Remember:** Revealing the earlier bit turns the two terms into a chain rule.

*True by definition. Confidence: low.* MSC 94A24 (Coding theorems (Shannon theory)), 94A40. arXiv cs.IT. Level 3: graduate.

**Definition.** The basic polar transform takes two fair bits U₁ and U₂. It sends U₁ + U₂ modulo two and U₂ over two uses of a channel. The first new channel goes from U₁ to both outputs, and the second from U₂ to both outputs together with U₁. The symmetric capacity of a channel is the mutual information of a fair input bit and the output.

**Problem.** For a binary-input memoryless channel, the two new channels have total symmetric capacity twice that of the original channel.

**How the definition helps.** The second channel also sees U₁. So the two capacities are the two terms of the chain rule for the information that the outputs give about (U₁, U₂). The map from (U₁, U₂) to the channel inputs is invertible and the two uses are independent. So the total is twice the original capacity. The work goes into the decoder, which must recover U₁ before U₂ to use this definition. The proof is our own; Arıkan's paper states the result.

**Wikipedia:** [Polar code (coding theory)](https://en.wikipedia.org/wiki/Polar_code_%28coding_theory%29). It says: “which transforms the physical channel into virtual outer channels.”

**Sources:**

- [Erdal Arıkan, Channel Polarization (2009)](https://doi.org/10.1109/TIT.2009.2021379)

### Orthonormal representations make the Lovász number bound Shannon capacity

**Remember:** Distinguishable words give orthogonal tensor products.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)), 05C50. arXiv cs.IT, math.CO. Level 3: graduate.

**Definition.** An orthonormal representation of a graph gives each vertex a unit vector, with orthogonal vectors for nonadjacent vertices. The Lovász number is the smallest, over such representations and unit vectors c, of the largest value of 1/(c·uᵢ)². An equivalent formula optimizes over positive semidefinite matrices.

**Problem.** Let G be the confusability graph of a channel, with edges between symbols the channel can confuse. Its Shannon capacity, the best number of distinguishable symbols per use, is at most the Lovász number.

**How the definition helps.** With this definition, representations multiply under tensor products. Two words of a zero-error code differ in some position by nonadjacent symbols, so their tensor product vectors are orthogonal. Bessel's inequality for the tensor power of c then bounds the code size by the Lovász number to the power of the length. The work goes into the equivalence with the matrix formula, which makes the number computable. This is Lovász's own proof, in our words.

**Wikipedia:** [Lovász number](https://en.wikipedia.org/wiki/Lov%C3%A1sz_number). It says: “the Lovász number provides an upper bound on the Shannon capacity of graph”

**Sources:**

- [László Lovász, On the Shannon Capacity of a Graph (1979)](https://doi.org/10.1109/TIT.1979.1055985)

### Zero-error codes as independent sets in strong powers have convergent rates

**Remember:** Pairing two good codes multiplies their sizes.

*True by definition. Confidence: medium.* MSC 94A24 (Coding theorems (Shannon theory)), 05C69. arXiv cs.IT, math.CO. Level 3: graduate.

**Definition.** Use a graph whose edges join distinct channel inputs that the channel can confuse. Define a zero-error code of length n as an independent set in the n-th strong power of this graph. An independent set has no edges inside it. In the strong power, two distinct words are adjacent if in every position their symbols are equal or adjacent.

**Problem.** For a memoryless channel with finite input and output sets, the zero-error rate (1/n) log α(Gⁿ) converges as n grows. Here α(Gⁿ) is the largest code of length n.

**How the definition helps.** With codes as independent sets, joining a code of length a and a code of length b gives a code of length a + b. So the largest code sizes are supermultiplicative, and Fekete's lemma gives convergence of the rates to their supremum. The work goes into checking that independent channel uses confuse two words exactly when each position is equal or confusable. The Wikipedia text gives the strong power model; the convergence argument is our own.

**Wikipedia:** [Shannon capacity of a graph](https://en.wikipedia.org/wiki/Shannon_capacity_of_a_graph). It says: “the graph representing the length-two codewords and their confusable pairs is G ⊠ G”

**Sources:**

- [Claude E. Shannon, The Zero Error Capacity of a Noisy Channel (1956)](https://doi.org/10.1109/TIT.1956.1056798)

### Confusion graphs make maximal classes factor

**Remember:** One conflicting coordinate prevents two sequences from sharing a class.

*Makes the theorem clean to state or prove.* MSC 94A29 (Source coding), 68P30. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Join two source symbols in a confusion graph if the decoder must tell them apart. For sequences, join two sequences if their symbols are joined in at least one position. An independent set is a class with no joined pair.

**Problem.** Every maximal independent set of the sequence confusion graph is a product of maximal independent sets of the symbol confusion graph.

**How the definition helps.** The rule for joining sequences makes independence a condition on each coordinate separately. Our own proof projects an independent set onto each coordinate. Each projection is independent, so their product is independent and contains the original set. A maximal set cannot grow, so it equals that product. Enlarging any one projection would enlarge the product, so every projection is maximal.

**Paper or page:** [Information Leakage in Zero-Error Source Coding: A Graph-Theoretic Perspective](https://arxiv.org/abs/2102.01908v1). It says: “Consider any maximal independent set T ∈ 𝓘ₘₐₓ(Γₜ). We have T = T₁ × T₂ × ⋯ × Tₜ”

**Sources:**

- [Yucheng Liu, Lawrence Ong, Sarah Johnson, Joerg Kliewer, Parastoo Sadeghi, Phee Lep Yeoh, Information Leakage in Zero-Error Source Coding: A Graph-Theoretic Perspective (2021)](https://arxiv.org/abs/2102.01908v1)

### Tunstall dictionaries as trees make greedy splitting maximize mean phrase length

**Remember:** Splitting a leaf adds its probability to the mean phrase length.

*True by definition. Confidence: low.* MSC 94A29 (Source coding), 94A45. arXiv cs.IT. Level 3: graduate.

**Definition.** Define a complete dictionary as the leaves of a source tree in which each internal node has one child per source symbol. The list definition requires every infinite source string to begin with exactly one dictionary phrase.

**Problem.** Take a memoryless source with at least two symbols, all of positive probability. Among complete dictionaries of the same size, the one built by always splitting the most probable leaf has the largest mean phrase length.

**How the definition helps.** In the tree view, the mean phrase length is the sum of the probabilities of the internal nodes. The dictionary size fixes the number of internal nodes. Every ancestor is more probable than its descendants, so the most probable nodes form a tree, and greedy splitting finds them. The work goes into showing that complete dictionaries are exactly the leaf sets of such trees. The proof is our own; the page gives only the algorithm.

**Wikipedia:** [Tunstall coding](https://en.wikipedia.org/wiki/Tunstall_coding). It says: “The dictionary in question, D, is constructed as a tree of probabilities, in which each edge is associated to a letter from the input alphabet.”

**Sources:** none listed. No primary source with a working link was found.

### Test channels make rate distortion convex

**Remember:** Mix two test channels to mix their allowed distortions.

*Makes the theorem clean to state or prove.* MSC 94A34 (Rate-distortion theory in information and communication theory). arXiv math.IT, cs.IT. Level 3: graduate.

**Definition.** Fix a distribution on source symbols and a cost, called distortion, for each input and reproduction pair. A test channel assigns a distribution of reproductions to each input. Mutual information measures how much observing the reproduction reduces uncertainty about the input. Define the rate–distortion function by minimizing this information over test channels with mean distortion at most D.

**Problem.** For a finite source and a finite reproduction alphabet, the rate–distortion function is convex on its feasible distortion range.

**How the definition helps.** The channel definition lets us mix two candidates, so their mean distortions mix linearly. Our own proof uses convexity of mutual information in the channel with fixed input law. The work moves to the rate–distortion theorem, which identifies the optimization with the best rate for long blocks.

**Wikipedia:** [Rate–distortion theory](https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory). It says: “monotonically decreasing convex (U) function and thus the shape for the function in the examples is typical”

**Sources:** none listed. No primary source with a working link was found.

### Unital channels cannot lower entropy

**Remember:** Fix the most mixed state and entropy cannot go down.

*Rules out counterexamples.* MSC 94A40 (Channel models (including quantum) in information and communication theory), 94A17. arXiv cs.IT, quant-ph. Level 3: graduate.

**Definition.** A density matrix is a positive semidefinite matrix with trace one. A quantum channel is a linear map preserving trace and positivity, even when tensored with the identity on any auxiliary system. On a fixed finite-dimensional space, a channel is unital if it fixes the state whose eigenvalues are all equal.

**Problem.** A finite-dimensional unital quantum channel cannot decrease the Shannon entropy of the eigenvalues of a density matrix.

**How the definition helps.** Fixing the uniform state lets the same reference state measure entropy before and after the channel. Our own derivation uses quantum relative entropy, a measure of how well two states can be distinguished. Relative to the uniform state, it equals the logarithm of the dimension minus the entropy of the state. Lindblad’s inequality says a channel cannot increase relative entropy. Our own counterexample resets every state to a fixed state of entropy zero, even when the input has positive entropy.

**nLab:** [unital quantum channel](https://ncatlab.org/nlab/show/unital+quantum+channel). It says: “is called unital if it preserves the maximally mixed quantum state.”

**Sources:**

- [Göran Lindblad, Completely positive maps and entropy inequalities (1975)](https://doi.org/10.1007/BF01609396)

### Generators that fool all tests and double length are one-way functions

**Remember:** An inverter becomes a test, since few strings have seeds.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** Define a pseudorandom generator as an efficient map from n-bit seeds to 2n-bit strings whose output no efficient test can tell from uniform. The next-bit definition instead requires that no efficient algorithm predicts each output bit from the earlier ones.

**Problem.** Such a generator is a one-way function. That is, no efficient algorithm finds a seed for its output with non-negligible probability.

**How the definition helps.** With the all-tests definition, any inverter gives a test at once. The test runs the inverter and checks that the generator maps its answer to the given string. On generator output it succeeds as often as the inverter does. On a uniform string it succeeds with probability at most 2⁻ⁿ, since at most 2ⁿ strings have seeds. With the next-bit definition, one first needs Yao's theorem that the two definitions agree. A generator that stretches by only one bit must first be iterated to double length. The proof is our own.

**Wikipedia:** [Pseudorandom generator](https://en.wikipedia.org/wiki/Pseudorandom_generator). It says: “The pseudorandom generator theorem shows that cryptographically secure pseudorandom generators exist if and only if one-way functions exist.”

**Sources:** none listed. No primary source with a working link was found.

### Hard-core bits defined by indistinguishability extend one-way permutations into generators

**Remember:** A permutation gives uniform output, and a hard-core bit adds one more.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** Call an efficiently computable bit b(x) hard-core for f if no efficient test can tell the pair (f(x), b(x)) from (f(x), a fair coin). The usual definition says that no efficient algorithm predicts b(x) from f(x) much better than a fair guess.

**Problem.** Let f be a length-preserving one-way permutation with hard-core bit b. Then x ↦ (f(x), b(x)) is a pseudorandom generator that stretches by one bit.

**How the definition helps.** With the indistinguishability definition, the claim is almost immediate. Because f is a permutation, f(x) is uniform, so (f(x), fair coin) is uniform. The definition then says the output cannot be told from uniform. The work goes into showing that a test for the bit gives a predictor for it, so that the two definitions agree. The Goldreich–Levin theorem supplies a hard-core bit for a slightly modified permutation. The proof and the comparison are our own.

**Wikipedia:** [Hard-core predicate](https://en.wikipedia.org/wiki/Hard-core_predicate). It says: “Hard-core predicates give a way to construct a pseudorandom generator from any one-way permutation.”

**Sources:** none listed. No primary source with a working link was found.

### Indistinguishability makes semantic security provable for real ciphers

**Remember:** If you cannot tell two ciphertexts apart, you learn nothing from either.

*True by definition.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 3: graduate.

**Definition.** An encryption scheme is semantically secure if no efficient algorithm learns anything about a message from its ciphertext beyond its length. Efficient means probabilistic polynomial time. In the indistinguishability game, an adversary picks two messages of equal length and gets the encryption of one at random. The scheme is indistinguishable if no adversary guesses which one with probability much above one half.

**Problem.** Show that a concrete scheme, such as Goldwasser–Micali or ElGamal, hides all partial information about its messages. Goldwasser and Micali proved that semantic security and indistinguishability are equivalent.

**How the definition helps.** The indistinguishability game names one concrete task, so a security proof only has to show that this one task is hard. Semantic security speaks about every distribution of messages and every kind of partial information, which is hard to check directly. With the equivalence theorem, a reduction from a hard problem to the two-message game gives semantic security at once. The work moves into the equivalence theorem, which Goldwasser and Micali proved. The page also notes that the game forces encryption to use randomness. A deterministic public-key scheme fails, because the adversary can encrypt both messages itself and compare. Neither notion covers attackers who may ask for decryptions, which need stronger definitions.

**Wikipedia:** [Semantic security](https://en.wikipedia.org/wiki/Semantic_security). It says: “This latter definition is more common than the original definition of semantic security because it better facilitates proving the security of practical cryptosystems.”

**Sources:**

- [S. Goldwasser and S. Micali, Probabilistic encryption, Journal of Computer and System Sciences 28 (1984) 270–299](https://doi.org/10.1016/0022-0000(84)90070-9)

### Negligible success probabilities stay negligible under polynomially many repeats

**Remember:** Smaller than one over every polynomial, even after polynomially many tries.

*Makes the theorem clean to state or prove.* MSC 94A60 (Cryptography), 68Q15. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A function μ on the natural numbers is negligible if, for every positive polynomial p, \|μ(n)\| &lt; 1/p(n) for all large n. Cryptography uses it to say that an attack succeeds with essentially zero probability, as a function of the key length n.

**Problem.** A security proof often runs an attacker many times or adds up many small error terms. The total error must stay small in the same sense.

**How the definition helps.** The definition is matched to polynomial-time attackers, so negligible functions stay negligible when multiplied by any polynomial. Thus polynomially many repeats, or a sum of polynomially many negligible terms, are still negligible. A fixed bound such as 1/n² has no such closure property (our own example). For instance, n³ independent tries that each succeed with probability 1/n² succeed almost surely for large n (our own). This closure lets theorems say simply secure or not secure, with no constants to track. What stays hard is concrete security, because the asymptotic statement says nothing about one fixed key length, as the page notes.

**Wikipedia:** [Negligible function](https://en.wikipedia.org/wiki/Negligible_function). It says: “if an attack succeeds in violating a security condition only with negligible probability, and the attack is repeated a polynomial number of times, the success probability of the overall attack still remains negligible.”

**Sources:**

- [O. Goldreich, Foundations of Cryptography, Volume 1: Basic Tools, Cambridge University Press (2001)](https://doi.org/10.1017/CBO9780511546891)

### Passing the next-bit test means passing every efficient statistical test

**Remember:** If no one can guess the next bit, no one can tell it from random.

*True by definition.* MSC 94A60 (Cryptography), 68Q15. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** A family of bit strings passes the next-bit test if no efficient algorithm predicts the next bit from the earlier bits noticeably better than chance. Yao's test, the general definition of pseudorandomness, asks that no efficient algorithm can tell the strings from truly random strings at all.

**Problem.** To prove that a generator is pseudorandom, one must defeat every efficient distinguisher. That is a quantifier over all possible tests.

**How the definition helps.** The next-bit test speaks about one kind of attacker only, so a proof for a concrete generator rules out one prediction task. Yao's theorem says this is enough, so pseudorandomness reduces to unpredictability. The work moves into Yao's theorem, which uses a hybrid argument. One walks from the real string to a random one, one bit at a time (our own summary). A distinguisher must notice some step, and that step gives a predictor. Generators such as the Blum–Micali generator are then proved secure by showing each next bit is hard to predict (our own).

**Wikipedia:** [Next-bit test](https://en.wikipedia.org/wiki/Next-bit_test). It says: “The next-bit test is a particular case of Yao's test for random sequences, and passing it is therefore a necessary condition for passing Yao's test. However, it has also been shown a sufficient condition by Yao.”

**Sources:**

- [A. C. Yao, Theory and application of trapdoor functions, FOCS 1982](https://doi.org/10.1109/SFCS.1982.45)

### Single-challenge indistinguishability extends to many challenges by swapping one at a time

**Remember:** Replace one challenge ciphertext at a time.

*True by definition. Confidence: medium.* MSC 94A60 (Cryptography), 68P25. arXiv cs.CR. Level 3: graduate.

**Definition.** For public-key encryption, require that no efficient test can tell which of two chosen equal-length messages one challenge ciphertext encrypts. Semantic security instead says that the ciphertext gives no efficient advantage in learning anything about the message.

**Problem.** Single-challenge indistinguishability implies indistinguishability for polynomially many challenges under the same public key. Each encryption uses fresh independent randomness.

**How the definition helps.** Indistinguishability compares two experiments, so a chain of experiments that change one challenge at a time applies. This chain is called a hybrid argument. The public key lets a test make all the other encryptions itself, so single-challenge security bounds each step. Summing the steps gives the many-challenge bound. With semantic security as the definition, one first needs the theorem that the two definitions agree. The proof is our own; the quote states only the definition.

**Wikipedia:** [Ciphertext indistinguishability](https://en.wikipedia.org/wiki/Ciphertext_indistinguishability). It says: “an adversary will be unable to distinguish pairs of ciphertext based on the message that they encrypt.”

**Sources:**

- [Shafi Goldwasser and Silvio Micali, Probabilistic Encryption (1984)](https://doi.org/10.1016/0022-0000(84)90070-9)

### Witness indistinguishability survives parallel repetition, unlike zero knowledge

**Remember:** Weaker secrecy, stronger composition: witness indistinguishability survives running in parallel.

*Rules out counterexamples.* MSC 94A60 (Cryptography), 68Q10. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** In a proof of an NP statement, the prover holds a witness, such as a satisfying assignment of a formula. A proof is witness indistinguishable if no verifier can tell which of two valid witnesses the prover used. Zero knowledge asks for more: an efficient simulator that knows no witness can produce everything the verifier sees.

**Problem.** Proofs are often run many times at once to make cheating less likely. One wants the secrecy guarantee to hold for the combined protocol.

**How the definition helps.** Witness indistinguishability carries over from one run to many parallel runs, by changing one witness at a time. So parallel composition holds with no exception (our own sketch of the Feige–Shamir proof). Zero knowledge has no such theorem. Goldreich and Krawczyk showed that some zero-knowledge proofs stop being zero knowledge when run in parallel (our own; not on the page). The weaker definition gives something up. When the statement has only one witness, witness indistinguishability promises nothing, as the page notes. Feige and Shamir use statements with two independent witnesses to get witness hiding proofs from it.

**Wikipedia:** [Witness-indistinguishable proof](https://en.wikipedia.org/wiki/Witness-indistinguishable_proof). It says: “Unlike zero-knowledge proofs, they remain secure when multiple proofs are being performed in parallel.”

**Sources:**

- [U. Feige and A. Shamir, Witness indistinguishable and witness hiding protocols, STOC 1990](https://doi.org/10.1145/100216.100272)

### Zero knowledge with auxiliary input is closed under sequential composition

**Remember:** If prior knowledge cannot help, earlier proofs cannot help either.

*Rules out counterexamples. Confidence: medium.* MSC 94A60 (Cryptography), 68Q10. arXiv cs.CR, cs.CC. Level 3: graduate.

**Definition.** An interactive proof is zero knowledge if, for each efficient verifier, an efficient simulator can produce the verifier's view from the true statement alone. No efficient test can tell the simulated view from the real one. In the auxiliary-input version, the verifier and the simulator also get an arbitrary string z, the verifier's prior knowledge. The simulation must work for every z.

**Problem.** Proofs are often repeated one after another to reduce the chance of cheating. One wants the repeated proof to stay zero knowledge.

**How the definition helps.** A verifier in the second proof can treat all it saw in the first proof as prior knowledge (our own summary). So the auxiliary-input definition covers it, and the simulations can be chained. Goldreich and Oren proved that auxiliary-input zero knowledge is closed under sequential composition (our own; not on the page). They also showed that the original definition without auxiliary input is not closed in this way, under a reasonable assumption (our own). The page explains the point of z: a verifier cannot use prior knowledge to extract information, because the simulator gets it too. Parallel and concurrent composition stay hard and need other ideas (our own).

**Wikipedia:** [Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof). It says: “The auxiliary string z in the definition plays the role of "prior knowledge" (including the random coins of V̂).”

**Sources:**

- [O. Goldreich and Y. Oren, Definitions and properties of zero-knowledge proof systems, Journal of Cryptology 7 (1994) 1–32](https://doi.org/10.1007/BF00195207)

### Balanced key tables give perfect secrecy

**Remember:** Balance every output across message positions to hide the message.

*Rules out counterexamples.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** For each key, give each message a disjoint set of possible outputs, all of the same size. Call the table equitably ordered if each output occurs equally often in every message position across the keys.

**Problem.** Choose the key uniformly and independently of the message. Choose an output uniformly from its assigned set. Equitable ordering makes the output independent of the message.

**How the definition helps.** Equal counts give each output the same conditional probability for every message. The paper applies this count to splitting designs, which arrange the output sets into blocks. Our own counterexample uses three keys, one for each pair from {1, 2, 3}. Assign the smaller element to the first message and the larger to the second. Every pair occurs, but output 1 reveals the first message.

**Paper or page:** [Splitting authentication codes with perfect secrecy: new results, constructions and connections with algebraic manipulation detection codes](https://arxiv.org/abs/2104.11076v2). It says: “If a splitting BIBD is equitably ordered, then it yields an authentication code with perfect secrecy.”

**Sources:**

- [Maura B. Paterson, Douglas R. Stinson, Splitting authentication codes with perfect secrecy: new results, constructions and connections with algebraic manipulation detection codes (2021)](https://arxiv.org/abs/2104.11076v2)

### Entropy-defined threshold schemes need each share as large as the secret

**Remember:** The last share must supply all the missing entropy.

*True by definition. Confidence: medium.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A17. arXiv cs.CR, cs.IT. Level 3: graduate.

**Definition.** Define a perfect threshold scheme with threshold k by two entropy conditions. Fewer than k shares leave the secret's entropy unchanged. Any k shares leave it zero. The operational version says that too few shares give no information and enough shares recover the secret.

**Problem.** In a perfect threshold scheme with finitely many values, every share has entropy at least the entropy of the secret.

**How the definition helps.** With the entropy definition the proof is one chain of inequalities. Add the chosen share to k − 1 others, and the secret's conditional entropy falls from its full value to zero. That fall is the information the share gives, which is at most the share's entropy. The work goes into showing that the entropy conditions match the operational ones. Zero conditional entropy means exact recovery, and unchanged entropy means independence. The proof and the comparison are our own; the quote states only the result.

**Wikipedia:** [Secret sharing](https://en.wikipedia.org/wiki/Secret_sharing). It says: “Each share of the secret must be at least as large as the secret itself.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudorandom functions defined by oracle tests give secure message authentication codes

**Remember:** A random function gives a fresh message an independent tag.

*True by definition. Confidence: medium.* MSC 94A62 (Authentication, digital signatures and secret sharing), 94A60. arXiv cs.CR. Level 3: graduate.

**Definition.** Define a pseudorandom function family by this rule. No efficient test that queries the function on inputs of its choice can tell a random member from a uniform random function. The test may choose each query after seeing earlier answers.

**Problem.** Use the function value as the tag of a message. Then no efficient attacker who can ask for tags of chosen messages can produce a valid tag for a new message, except with negligible probability. This needs tags long enough that guessing one is negligible.

**How the definition helps.** The oracle definition lets the attack itself serve as a test. With a truly random function, the tag of a new message is uniform and independent of all answers seen. So a guess succeeds with probability one over the number of tags. A test that runs the attacker and checks its forgery would therefore detect any larger success. The work goes into constructing such families from pseudorandom generators, as Goldreich, Goldwasser and Micali did. The reduction is our own wording of the standard proof.

**Wikipedia:** [Pseudorandom function family](https://en.wikipedia.org/wiki/Pseudorandom_function_family). It says: “Constructing deterministic, memoryless authentication schemes”

**Sources:**

- [Oded Goldreich, Shafi Goldwasser and Silvio Micali, On the Cryptographic Applications of Random Functions (1985)](https://doi.org/10.1007/3-540-39568-7_22)
- [Oded Goldreich, Shafi Goldwasser and Silvio Micali, How to Construct Random Functions (1986)](https://doi.org/10.1145/6490.6503)

### Fourier weights count dual words

**Remember:** One Fourier transform changes each zero and one factor.

*Makes the theorem clean to state or prove.* MSC 94B05 (Linear codes (general theory)). arXiv math.IT. Level 3: graduate.

**Definition.** A binary code’s weight enumerator sums a monomial for each word. Give each zero a factor x and each one a factor y, reversing the source’s variable names. Regard the monomial as a product of one-bit functions.

**Problem.** If C is a binary linear code, substitute x + y and x − y for x and y in its enumerator. Divide by the size of C to get the enumerator of its dual, the words orthogonal to C.

**How the definition helps.** The polynomial records all weight counts in one substitution. Our own proof weights each binary word by multiplying x for every zero and y for every one. For a fixed word u, multiply each weight by the sign (−1) raised to the dot product with u. Summing over all words gives a factor x + y at each zero of u and x − y at each one. Averaging the signs over u in C leaves one on words orthogonal to C and zero elsewhere.

**Wikipedia:** [Enumerator polynomial](https://en.wikipedia.org/wiki/Enumerator_polynomial). It says: “W(C⊥;x,y) = (1/\|C\|) W(C;y−x,y+x).”

**Paper or page:** [Steiner systems S(2,4,2ᵐ) supported by a family of extended cyclic codes](https://arxiv.org/abs/1904.02310v2). It says: “A<sup>\\perp</sup> (z)=q<sup>-\\kappa </sup>\\Big(1+(q-1)z\\Big)<sup>vA\\Big</sup>(\\frac{1-z}{1+(q-1)z}\\Big).”

**Sources:**

- [Jessie MacWilliams, A Theorem on the Distribution of Weights in a Systematic Code (1963)](https://doi.org/10.1002/j.1538-7305.1963.tb04003.x)

### Reed–Muller codes as polynomial evaluations make their duals Reed–Muller codes

**Remember:** A monomial missing a variable sums to zero over the cube.

*True by definition.* MSC 94B05 (Linear codes (general theory)). arXiv cs.IT. Level 3: graduate.

**Definition.** The binary Reed–Muller code RM(r, m) lists the values of each polynomial of degree at most r on the binary m-dimensional cube. An equivalent recursive definition builds it from two shorter codes as the words (u, u + v).

**Problem.** For 0 ≤ r &lt; m, the dual of RM(r, m) is RM(m − r − 1, m). The dual is the set of words orthogonal to every codeword.

**How the definition helps.** With the evaluation definition, orthogonality becomes a sum over the cube of a product of two polynomials. That product has degree at most m − 1, so each of its monomials misses a variable and its values cancel in pairs. The two dimensions, the binomial sums up to r and up to m − r − 1, add to 2ᵐ, so orthogonality gives equality. The work goes into showing that squarefree monomials give independent evaluation words, and into relating the evaluation definition to the recursive one. The proof and the comparison are our own.

**Wikipedia:** [Reed–Muller code](https://en.wikipedia.org/wiki/Reed%E2%80%93Muller_code). It says: “The dual code to RM(r,m) is RM(m-r-1,m).”

**Sources:** none listed. No primary source with a working link was found.

### Consecutive roots bound BCH distance

**Remember:** Consecutive roots rule out a word with too few nonzero symbols.

*True by definition.* MSC 94B15 (Cyclic codes), 94B65. arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Represent a length-n word over a finite field by its polynomial of degree below n, using the symbols as coefficients. Choose α of multiplicative order n in that field or a larger field. Define a narrow-sense BCH code by requiring every word polynomial to vanish at the first d − 1 positive powers of α.

**Problem.** For 2 ≤ d ≤ n, any two distinct words of this code differ in at least d positions.

**How the definition helps.** The consecutive roots give enough independent equations to rule out a nonzero word with fewer than d nonzero symbols. Suppose a word has s such symbols, with 0 &lt; s &lt; d. The first s equations use consecutive powers of s distinct nonzero field elements, one for each occupied position. After dividing each column by its first entry, the determinant is a product of nonzero differences. All s symbols would have to vanish. Our own comparison replaces testing pairwise distances by testing zeros of word polynomials, since the difference of two codewords is a codeword.

**Wikipedia:** [BCH code](https://en.wikipedia.org/wiki/BCH_code). It says: “A BCH code has minimal Hamming distance at least d.”

**Sources:** none listed. No primary source with a working link was found.

### Different twists give complementary duals

**Remember:** Different twists force a code and its dual apart.

*Rules out counterexamples.* MSC 94B15 (Cyclic codes), 94B05. arXiv math.IT. Level 3: graduate.

**Definition.** Take a linear code over a finite field. A twisted shift moves each entry right one place and wraps the last entry to the front multiplied by a nonzero λ. Call the code constacyclic when it is closed under this shift.

**Problem.** If λ² ≠ 1, the only codeword orthogonal to every codeword under the ordinary dot product is zero.

**How the definition helps.** Different twists let our own proof isolate a single coordinate in the sum of the code and its dual. The dual uses the inverse twist because shifting two vectors with opposite twists preserves their dot product. Given a nonzero shared word, shift while the last entry is zero, when both shifts agree. Once the last entry is nonzero, subtract the two shifts and rescale to obtain the first unit vector in the sum. The sum is now shift-invariant because the two shifts differ only by a multiple of that unit vector. Its shifts span the whole space, so the dimension formula forces zero intersection, a contradiction. With λ = 1, the binary code {00, 11} equals its dual.

**Paper or page:** [The ℓ-intersection Pairs of Constacyclic and Conjucyclic Codes](https://arxiv.org/abs/2309.01985v1). It says: “such that λ² ≠ 1. Then C is an LCD code.”

**Sources:**

- [The ℓ-intersection Pairs of Constacyclic and Conjucyclic Codes](https://arxiv.org/abs/2309.01985v1)

### Pole budgets bound code distance

**Remember:** Each zero spends one unit of the pole budget.

*Rules out counterexamples.* MSC 94B27 (Geometric methods (including applications of algebraic geometry) applied to coding theory), 94B65. arXiv math.IT. Level 3: graduate.

**Definition.** Choose n distinct points with coordinates in a finite field on a smooth projective curve over that field. Assume the curve stays irreducible over the field’s algebraic closure. Form codewords by evaluating rational functions at those points. Allow poles only at other specified field points, with maximum orders totaling m.

**Problem.** If m &lt; n, any two different codewords differ in at least n − m positions.

**How the definition helps.** The pole restriction limits the number of positions where two evaluations can agree. Our own proof applies the degree theorem for rational functions to the difference of the functions. Its zeros and poles have equal total order when counted over the algebraic closure. Its poles have total order at most m, so at most m evaluation points can be zeros.

**Paper or page:** [Attaining Sudan's decoding radius with no genus penalty for algebraic geometry codes](https://arxiv.org/abs/2103.11188v2). It says: “d(C) ≥ n − deg G”

**Sources:** none listed. No primary source with a working link was found.

### Tilting bounds code spheres

**Remember:** Choose the tilt that makes the target weight average.

*Makes the theorem clean to state or prove.* MSC 94B65 (Bounds on codes). arXiv cs.IT, math.IT. Level 3: graduate.

**Definition.** Give each symbol of a finite alphabet a nonnegative weight, with minimum zero and at least one positive weight. A word’s weight is the sum of its symbol weights. For y &gt; 0, assign each symbol of weight w a factor equal to y raised to w. Divide each factor by their sum F(y) to get the symbol probabilities.

**Problem.** Let W/n lie strictly between zero and the mean symbol weight under uniform sampling. The number of length-n words of weight W is at most F(y)ⁿ divided by y raised to W. The best bound occurs when the mean symbol weight equals W/n.

**How the definition helps.** Independent sampling gives every word of weight W the same probability, so counting those words gives the bound. Our own calculation differentiates the logarithm of the bound with respect to log y. The derivative is n times the mean symbol weight minus W. The mean increases strictly with y, so matching the mean gives the minimum.

**Paper or page:** [Bounds on Sphere Sizes in the Sum-Rank Metric and Coordinate-Additive Metrics](https://arxiv.org/abs/2404.10666v3). It says: “the minimum on the right-hand side is attained at y = q⁻ᵝ”

**Sources:**

- [Hugo Beeloo-Sauerbier Couvée, Thomas Jerkovits, Jessica Bariffi, Bounds on Sphere Sizes in the Sum-Rank Metric and Coordinate-Additive Metrics (2025)](https://arxiv.org/abs/2404.10666v3)

### Sibson information as a minimum over product laws obeys data processing

**Remember:** Push the trial product law through the same channel.

*True by definition. Confidence: medium.* MSC 94A17 (Measures of information, entropy). arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Define Sibson's α-mutual information of X and Y as a minimum of Rényi divergences of order α. The minimum runs from the joint law to each product of the law of X with a law of Y. Rényi divergence measures how far one distribution is from another. The equivalent closed formula uses powers and sums of the joint probabilities.

**Problem.** Let X, Y and Z have finitely many values, with Z depending on X only through Y. Then for every order α &gt; 0, Sibson information between X and Z is at most that between X and Y.

**How the definition helps.** With the minimum definition, data processing reduces to the same fact for Rényi divergence. Pass the joint law and each trial product law through the channel from Y to Z. The joint law becomes the law of X and Z, and a product law stays a product law. Divergence cannot increase, so the minimum cannot increase. The work goes into the data processing inequality for Rényi divergence and into the agreement with Sibson's closed formula. The proof is our own; the paper states the inequality.

**Paper or page:** [Sibson α-Mutual Information and Its Variational Representations](https://arxiv.org/abs/2405.08352v2). It says: “Data processing inequality: Let X,Y,Z be three random variables jointly distributed”

**Sources:**

- [Sibson α-Mutual Information and Its Variational Representations, Theorem 4.1](https://arxiv.org/abs/2405.08352v2)

### Spectrum distance controls Shannon capacity

**Remember:** Uniformly close bounds have uniformly close minima.

*True by definition.* MSC 94A24 (Coding theorems (Shannon theory)). arXiv math.IT. Level 4: research.

**Definition.** A spectrum function assigns nonnegative numbers to finite graphs and sends the one-vertex graph to one. It adds under disjoint union and multiplies under strong product, where distinct tuples are adjacent when corresponding entries are equal or adjacent. Its value cannot decrease under a vertex map that sends distinct nonneighbors to distinct nonneighbors. The spectrum distance is the largest absolute difference between two graphs’ values over all such functions.

**Problem.** The absolute difference in Shannon capacities is at most the spectrum distance between two finite graphs.

**How the definition helps.** The distance bounds every spectrum value’s change, so it bounds the change in their minimum. This quantitative argument is our own. Shannon capacity measures the growth of the largest distinguishable message set over repeated channel uses. The graph form of Strassen’s duality theorem identifies that growth factor with the minimum spectrum value.

**Paper or page:** [The asymptotic spectrum distance, graph limits, and the Shannon capacity](https://arxiv.org/abs/2404.16763v1). It says: “converges to a graph H in the asymptotic spectrum distance, then (Θ(Gᵢ))ᵢ∈ℕ converges to Θ(H).”

**Sources:**

- [The asymptotic spectrum distance, graph limits, and the Shannon capacity](https://arxiv.org/abs/2404.16763v1)

### Asking only indistinguishability lets obfuscation escape the impossibility theorem

**Remember:** Hide which program you wrote, not everything about the program.

*Rules out counterexamples.* MSC 94A60 (Cryptography), 68Q06. arXiv cs.CR, cs.CC. Level 4: research.

**Definition.** A black-box obfuscator rewrites a program so that its code reveals nothing beyond what one learns by running it on inputs. An indistinguishability obfuscator asks for less. If two circuits of the same size compute the same function, no efficient algorithm can tell their obfuscations apart.

**Problem.** One wants a notion of obfuscation that is not ruled out for all circuits and is still useful for building cryptography.

**How the definition helps.** The weaker definition only compares programs with the same input–output behaviour, so the unobfuscatable programs of Barak et al. are no longer a counterexample. Those programs hide a secret that any code for them gives away, so black-box obfuscation is impossible in general. Indistinguishability obfuscation survives: Barak et al. noted that an inefficient one exists, namely the first circuit in a fixed order that computes the same function. Candidate constructions came much later. The first rested on an assumption about multilinear maps, a kind of encoding that allows limited multiplication, and that assumption was later broken. Jain, Lin and Sahai used well-studied assumptions in 2020. Using such a weak guarantee needed new proof techniques (our own).

**Wikipedia:** [Indistinguishability obfuscation](https://en.wikipedia.org/wiki/Indistinguishability_obfuscation), [Black-box obfuscation](https://en.wikipedia.org/wiki/Black-box_obfuscation). It says: “Barak et al. constructed a family of unobfuscatable programs, for which an efficient attacker can always learn more from any obfuscated code than from black-box access.”

**Sources:**

- [B. Barak, O. Goldreich, R. Impagliazzo, S. Rudich, A. Sahai, S. Vadhan and K. Yang, On the (im)possibility of obfuscating programs, Journal of the ACM 59 (2012)](https://doi.org/10.1145/2160158.2160159)

### Universally composable security keeps protocols secure inside any larger system

**Remember:** If no environment can tell, no surrounding system can tell either.

*Makes the theorem clean to state or prove.* MSC 94A60 (Cryptography), 68M25. arXiv cs.CR. Level 4: research.

**Definition.** In Canetti's framework, a protocol is secure if it emulates an ideal functionality, an imagined trusted party that computes the right outputs. Emulation means that each real attacker has a simulated attacker against the ideal functionality, and no environment can tell the two worlds apart. The environment is any efficient program that gives inputs, reads outputs and talks with the attacker during the whole run.

**Problem.** The universal composition theorem says that a secure protocol stays secure as a part of any other protocol, next to any other protocols. Stand-alone definitions of security give no such guarantee.

**How the definition helps.** Because the environment may be any efficient program, it can play the part of any larger system around the protocol. So a protocol that fools every environment also fools every surrounding system. Canetti's proof makes the rest of the system part of the environment (our own summary). The page notes that no bit commitment protocol is universally composable without set-up assumptions. Bit commitment lets a party fix a bit now and reveal it later. So extra assumptions are needed, such as a shared random string, which the page calls a common reference string.

**Wikipedia:** [Universal composability](https://en.wikipedia.org/wiki/Universal_composability). It says: “Protocols remain secure even if arbitrarily composed with other instances of the same or other protocols.”

**Sources:**

- [R. Canetti, Universally composable security: a new paradigm for cryptographic protocols, FOCS 2001](https://doi.org/10.1109/SFCS.2001.959888)

### Gabidulin codes as linearized polynomial evaluations reach the rank Singleton bound

**Remember:** A big kernel would force too many roots.

*True by definition. Confidence: medium.* MSC 94B05 (Linear codes (general theory)), 94B65. arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Take n elements of the field with qᵐ elements that are linearly independent over the field with q elements, with k ≤ n ≤ m. A Gabidulin code of dimension k evaluates certain polynomials at these points. Each is a sum of multiples of x raised to 1, q, q², and so on up to qᵏ⁻¹. The matrix description uses a generator matrix whose rows are powers of the points.

**Problem.** Every nonzero word of a Gabidulin code of dimension k has rank at least n − k + 1. The rank of a word is the dimension of the span of its entries over the small field.

**How the definition helps.** With the polynomial definition, a codeword is the image of the points under a linear map. Such a polynomial is linear over the small field and has degree at most qᵏ⁻¹. So a nonzero one has a kernel of dimension at most k − 1. Rank and nullity on the span of the points give rank at least n − k + 1. The matrix description would need a determinant argument instead. The proof and the comparison are our own; the paper states only the distance.

**Paper or page:** [On the list decodability of rank-metric codes containing Gabidulin codes](https://arxiv.org/abs/2103.07547v1). It says: “be a generalized Gabidulin code with minimum distance d = n − k + 1”

**Sources:** none listed. No primary source with a working link was found.

### Noncatastrophic encoders admit parity checks

**Remember:** A polynomial right inverse lets parity checks describe the code exactly.

*Rules out counterexamples.* MSC 94B10 (Convolutional codes). arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Work with polynomials over the integers modulo a prime power. An encoder with k independent rows maps a polynomial input u to the word uG of length n. Its image is the code. Call the code noncatastrophic if some encoder G has a polynomial right inverse.

**Problem.** The code has an exact polynomial parity check precisely when it is noncatastrophic. Here an exact check is a matrix with n rows and n − k independent columns whose left kernel equals the code.

**How the definition helps.** A polynomial right inverse lets the encoder become part of an invertible change of coordinates. In those coordinates a parity check just reads the coordinates that must be zero. The work is the paper’s matrix completion theorem, which extends a right-invertible encoder to a square invertible matrix. Our own counterexample over the binary field is the image of the encoder ((1 + D), (1 + D)). Any polynomial parity check that vanishes on that image also vanishes on (1, 1), which is not in the image.

**Paper or page:** [Noncatastrophic convolutional codes over a finite ring](https://arxiv.org/abs/2104.06754v1). It says: “if and only if 𝒞 is noncatastrophic.”

**Sources:**

- [Diego Napp, Raquel Pinto, Conceição Rocha, Noncatastrophic convolutional codes over a finite ring (2021)](https://arxiv.org/abs/2104.06754v1)

### Lifting matrices to graph subspaces doubles their rank distance

**Remember:** Two graphs meet exactly where their maps agree.

*True by definition.* MSC 94B60 (Other types of codes), 94B05. arXiv cs.IT, math.IT. Level 4: research.

**Definition.** Lift a matrix A to its graph, the subspace of all pairs (x, xA). This is the row space of the block matrix \[I A\]. The rank distance of two matrices is the rank of their difference.

**Problem.** For two matrices of the same size, the subspace distance between their graphs is twice their rank distance. The subspace distance of two spaces is the sum of their dimensions minus twice the dimension of their intersection.

**How the definition helps.** With the graph view, the intersection of two graphs is the graph over the kernel of A − B. Rank and nullity then give its dimension, and the distance formula gives twice the rank. The work goes into checking that the graph equals the row space of \[I A\]. The data set states the result as a proposition of Silva and coauthors. The proof is our own.

**Paper or page:** [On the list decodability of rank-metric codes containing Gabidulin codes](https://arxiv.org/abs/2103.07547v1). It says: “is a constant dimension subspace code with parameters”

**Sources:** none listed. No primary source with a working link was found.

### Shortest paths measure phase rotations

**Remember:** One edge means one allowed change.

*True by definition.* MSC 94B60 (Other types of codes), 94B65. arXiv math.IT. Level 4: research.

**Definition.** Use words of equal length over a finite field. A move changes one coordinate or adds the same nonzero field element to every coordinate. Join words related by one move.

**Problem.** The shortest path distance between two words equals their phase-rotation distance. The latter minimizes the number of coordinate changes plus one if a common shift is used.

**How the definition helps.** Graph edges let us count a sequence of moves by its path length. Our own proof compares this with the formula allowing just one common shift. Write each coordinate change as addition in that coordinate. These additions commute with common shifts, and all common shifts combine into at most one. The remaining coordinate changes cost at least the number of mismatched positions, which one change per mismatch attains.

**Paper or page:** [The Eigenvalue Method in Coding Theory](https://arxiv.org/abs/2509.08917v1). It says: “coincides with the phase-rotation distance.”

**Sources:**

- [The Eigenvalue Method in Coding Theory](https://arxiv.org/abs/2509.08917v1)
