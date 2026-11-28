### Bayesian odds update by multiplication

**Remember:** Odds are a ratio, so the shared evidence probability cancels.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The odds of a hypothesis H are P(H)/P(not H), the chance for it divided by the chance against it. The posterior odds after evidence E are the same ratio of conditional probabilities, P(H \| E)/P(not H \| E).

**Problem.** Posterior odds equal prior odds times the ratio of the evidence probabilities under the hypothesis and its complement. Assume the prior odds are finite and nonzero, and the evidence has positive probability under the complement.

**How the definition helps.** In Bayes’ formula both conditional probabilities have the denominator P(E), so it cancels in the ratio (our own). What remains is P(E \| H)P(H) divided by P(E \| not H)P(not H), the prior odds times the likelihood ratio.

**Wikipedia:** [Bayes' theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem). It says: “This is often summarized by saying that the posterior odds are the prior odds times the likelihood.”

**Sources:** none listed. No primary source with a working link was found.

### Countable additivity makes probability continuous on nested events

**Remember:** Split into new pieces; the whole is the limit of partial sums.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A probability measure assigns each event a nonnegative number and assigns 1 to the whole space. It is countably additive: the probability of a union of countably many disjoint events is the sum, so the limit of the partial sums, of their probabilities.

**Problem.** When each event contains the previous one, their probabilities approach the probability of their union. When each event lies inside the previous one, their probabilities approach the probability of their intersection.

**How the definition helps.** Split an increasing union into the new pieces added at each step (our own). Countable additivity makes its probability the limit of the partial sums, which are the probabilities of the successive events (our own). Complements give the decreasing case, while finite additivity alone would need a separate continuity assumption (our own).

**Paper or page:** [Probability of Limit of Sequence of Events/Increasing](https://proofwiki.org/wiki/Probability_of_Limit_of_Sequence_of_Events/Increasing). It says: “P(A) = limₙ→∞ P(Aₙ)”

**Sources:** none listed. No primary source with a working link was found.

### Indicators count how many events occur on average

**Remember:** Count with zeros and ones, then average each one separately.

*True by definition. Confidence: medium.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** An event indicator equals 1 when its event occurs and 0 otherwise, so its average is the event’s probability. The number of events that occur is the sum of their indicators.

**Problem.** For any finite list of events, the expected number that occur is the sum of their probabilities. The events need not be independent.

**How the definition helps.** Linearity of expectation turns the average of the sum into the sum of the averages, which are the event probabilities (our own). No joint outcomes need to be listed, so independence is not needed (our own).

**Paper or page:** [Integral of Characteristic Function](https://proofwiki.org/wiki/Integral_of_Characteristic_Function). It says: “The integral of the characteristic function of a measurable set over a measure space equals the measure of that set.”

**Sources:** none listed. No primary source with a working link was found.

### Mean squared deviation makes variance nonnegative and unchanged by shifts

**Remember:** Squares cannot be negative, and shifting X also shifts its mean.

*True by definition. Confidence: medium.* MSC 60A05 (Axioms; other general questions in probability), 62A01. arXiv math.PR, math.ST. Level 1: early undergraduate.

**Definition.** The variance of a real random variable X with finite second moment and mean μ is its average squared distance from the mean, E\[(X − μ)²\].

**Problem.** Variance is nonnegative and vanishes exactly when X is constant with probability one. Adding a constant to X does not change its variance.

**How the definition helps.** A squared deviation is nonnegative, so its mean is nonnegative. It has mean zero exactly when X equals μ almost surely (our own). Adding a constant shifts X and μ equally and preserves their difference (our own).

**Wikipedia:** [Variance](https://en.wikipedia.org/wiki/Variance). It says: “Variance is non-negative because the squares are positive or zero”

**Sources:** none listed. No primary source with a working link was found.

### Mutual independence asks every subfamily to multiply, excluding pairwise-only examples

**Remember:** Pairs are not enough; every finite subfamily must multiply.

*Rules out counterexamples.* MSC 60A05 (Axioms; other general questions in probability), 60A10. arXiv math.PR. Level 1: early undergraduate.

**Definition.** Random variables are mutually independent if every finite subfamily passes a product test, not just every pair. For distinct indices and a measurable set for each, the probability that all variables fall in their sets must equal the product of the individual probabilities.

**Problem.** For mutually independent random variables, the joint law is the product of the marginal laws. The expectation of a product of finitely many distinct integrable ones is the product of their expectations, and measurable functions of disjoint groups are independent.

**How the definition helps.** The defining test fixes the joint law on measurable rectangles, which determine the product law (our own). Product integration and grouping give the other claims (our own). Pairwise tests do not suffice: for two fair coins, first heads, second heads and agreement are pairwise independent, but the first two force the third (our own).

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29). It says: “For example, he gave the first example showing that pairwise independence does not imply mutual independence.”

**Sources:**

- [A. Kolmogoroff, Grundbegriffe der Wahrscheinlichkeitsrechnung, Springer, 1933](https://doi.org/10.1007/978-3-642-49888-6)

### Restricted probabilities become a probability measure after normalization

**Remember:** Keep only the outcomes in B, then scale their total to one.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Conditioning on an event B with P(B) &gt; 0 keeps only the part of each event inside B and rescales by P(B): P(A \| B) = P(A ∩ B)/P(B).

**Problem.** For fixed B with P(B) &gt; 0, the conditional probabilities P(A given B) form a probability measure on the original events.

**How the definition helps.** Intersecting with B keeps disjoint events disjoint, so their probabilities still add (our own). Dividing by P(B) preserves these sums and gives the whole space probability one (our own).

**Paper or page:** [Conditional Probability Defines Probability Space](https://proofwiki.org/wiki/Conditional_Probability_Defines_Probability_Space). It says: “Then (Ω, Σ, Q) is a probability space.”

**Sources:** none listed. No primary source with a working link was found.

### The probability product rule makes independence symmetric even for null events

**Remember:** The intersection and the product do not depend on event order.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Events A and B are independent if P(A ∩ B) = P(A)P(B), a condition with no division that is symmetric in A and B. When P(B) &gt; 0 it is equivalent to the conditional test P(A \| B) = P(A).

**Problem.** If A is independent of B, then B is independent of A. Every event is independent of every event with probability zero.

**How the definition helps.** Swapping A and B changes neither the intersection nor the product, so symmetry is immediate. If P(B) = 0, then P(A ∩ B) = 0 as well, so both sides vanish (our own). When P(B) &gt; 0, dividing by P(B) turns the product rule into the conditional test.

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29). It says: “they are not the preferred definition, as the conditional probabilities may be undefined if P(A) or P(B) are 0. Furthermore, the preferred definition makes clear by symmetry that when A is independent of B, B is also independent of A.”

**Sources:** none listed. No primary source with a working link was found.

### The product rule defines independence even for events of probability zero

**Remember:** Multiply, do not condition, and events of probability zero cause no trouble.

*Makes the theorem clean to state or prove.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Events A and B are independent when Pr(A ∩ B) = Pr(A) Pr(B), a test that needs no division. The conditional alternative Pr(A \| B) = Pr(A) needs Pr(B) &gt; 0.

**Problem.** With the product rule, independence is symmetric in A and B, and an event of probability 0 is independent of every event (our own). When Pr(A) &gt; 0 and Pr(B) &gt; 0, the product rule agrees with the conditional definition.

**How the definition helps.** The product form needs no division, so it makes sense for every pair of events and is visibly symmetric. The conditional form breaks down when the conditioning event has probability 0. When both forms make sense, their agreement is one line of algebra.

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29). It says: “Although the derived expressions may seem more intuitive, they are not the preferred definition, as the conditional probabilities may be undefined if P(A) or P(B) are 0.”

**Paper or page:** [Equivalence of Definitions of Independent Events](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Independent_Events). It says: “Let A, B ∈ Σ be events of 𝓔 such that Pr(A) &gt; 0 and Pr(B) &gt; 0.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Independent Events](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Independent_Events)

### A squared deviation detects constancy with probability one

**Remember:** Zero variance ignores changes on events of probability zero.

*Rules out counterexamples.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Variance is the mean squared distance of X from its mean, so it ignores what X does on events of probability zero (our own). X is constant almost surely if it equals one constant with probability one.

**Problem.** If E\[X²\] is finite, X has zero variance exactly when it is constant almost surely.

**How the definition helps.** A nonnegative variable has mean zero exactly when it is zero with probability one (our own). So zero variance means X equals its mean almost surely. Without almost surely the claim fails: if U is uniform on \[0, 1\], the indicator of U = ½ takes two values yet has zero variance (our own).

**Paper or page:** [Random Variable has Zero Variance iff Almost Surely Constant](https://proofwiki.org/wiki/Random_Variable_has_Zero_Variance_iff_Almost_Surely_Constant). It says: “That is, X is almost surely constant.”

**Sources:** none listed. No primary source with a working link was found.

### Averages on partition cells let known factors come out

**Remember:** A factor known on a cell is constant throughout that cell.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Split the outcomes into finitely many disjoint groups, each with positive probability. Given the group, the conditional expectation of X is the average of X over that group, with probabilities rescaled to total one.

**Problem.** Suppose E\[\|X\|\] is finite and Y takes one real value on each group. The conditional expectation of XY given the group equals Y times the conditional expectation of X given the group.

**How the definition helps.** Within each group Y is a constant, and a constant factor comes out of an average (our own). Multiplying each group average by the group probability gives the integral of X over that group (our own). So the identity agrees with the general definition on every union of groups (our own).

**Paper or page:** [Rule for Extracting Random Variable from Conditional Expectation of Product](https://proofwiki.org/wiki/Rule_for_Extracting_Random_Variable_from_Conditional_Expectation_of_Product). It says: “E\[XY ∣ G\] = Y E\[X ∣ G\] almost everywhere.”

**Sources:** none listed. No primary source with a working link was found.

### Centered products make uncorrelated variances add

**Remember:** Zero covariance leaves only the individual variances.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The covariance of X and Y is the average product of their deviations from their means, E\[(X − E\[X\])(Y − E\[Y\])\]. X and Y are uncorrelated when this is zero.

**Problem.** Suppose each variable in a finite list has a finite average square and each distinct pair is uncorrelated. The variance of their sum equals the sum of their variances.

**How the definition helps.** The variance of a sum is the average square of the summed deviations (our own). Expanding it gives each variance plus one covariance for each ordered pair of distinct variables (our own). For uncorrelated pairs these cross terms vanish (our own).

**Paper or page:** [Covariance of Sums of Random Variables](https://proofwiki.org/wiki/Covariance_of_Sums_of_Random_Variables). It says: “Cov(Σᵢ₌₁ⁿ Xᵢ, Σⱼ₌₁ⁿ Yⱼ) = Σᵢ₌₁ⁿ Σⱼ₌₁ⁿ Cov(Xᵢ, Yⱼ)”

**Sources:** none listed. No primary source with a working link was found.

### Centering at the mean splits squared prediction error

**Remember:** Center at the mean and the mixed term disappears.

*True by definition. Confidence: medium.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The centered variable X − E\[X\] is the deviation of X from its mean, and it has mean zero.

**Problem.** If E\[X²\] is finite, the mean of X is the unique constant a that minimizes the expected squared error E\[(X − a)²\].

**How the definition helps.** Write X − a as (X − m) + (m − a), with m the mean, and square it; the cross term averages to a constant times E\[X − m\] = 0 (our own). So E\[(X − a)²\] = E\[(X − m)²\] + (m − a)², which is smallest exactly at a = m (our own).

**Paper or page:** [First Central Moment is Zero](https://proofwiki.org/wiki/First_Central_Moment_is_Zero). It says: “Then the first central moment μ₁ of X is equal to 0.”

**Sources:** none listed. No primary source with a working link was found.

### Separate tail averages show that Cauchy variables have no mean

**Remember:** Average both tails before subtracting them.

*Rules out counterexamples.* MSC 60A10 (Probabilistic measure theory), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** A random variable X has an expectation only if its positive part max(X, 0) and its negative part max(−X, 0) both have finite averages. The expectation is then the first average minus the second.

**Problem.** The standard Cauchy law, with density 1/(π(1 + x²)), has no expectation. Cutting the integral at equal distances on both sides of zero gives zero instead.

**How the definition helps.** Each tail of the Cauchy law has infinite average, because x/(1 + x²) has a divergent integral from zero to infinity (our own). So no expectation exists. Symmetric cutoffs give zero only by cancelling infinity against infinity, which the definition forbids (our own).

**Wikipedia:** [Cauchy distribution](https://en.wikipedia.org/wiki/Cauchy_distribution). It says: “The Cauchy distribution does not have finite moments of order greater than or equal to one”

**Sources:** none listed. No primary source with a working link was found.

### Convergence in distribution ignores the jumps of the limit

**Remember:** Check the distribution function only where the limit has no jump.

*Rules out counterexamples.* MSC 60B10 (Convergence of probability measures), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** Real random variables Xₙ converge in distribution to X if their distribution functions satisfy Fₙ(x) → F(x) at every point x where F has no jump.

**Problem.** If Xₙ is uniform on (0, 1/n), then Xₙ converges in distribution to the constant 0.

**How the definition helps.** Convergence fails only at x = 0, where Fₙ(0) = 0 but F(0) = 1 (our own). The definition skips that point because F jumps there (our own). For x &lt; 0 both functions are 0, and for x &gt; 0 both equal 1 once 1/n &lt; x.

**Wikipedia:** [Convergence of random variables](https://en.wikipedia.org/wiki/Convergence_of_random_variables). It says: “The requirement that only the continuity points of F should be considered is essential.”

**Sources:** none listed. No primary source with a working link was found.

### Top-k truncation is as far in total variation as its discarded mass

**Remember:** Keep the largest weights, rescale them, and test the discarded set.

*True by definition.* MSC 60B10 (Convergence of probability measures), 68T07. arXiv cs.LG, math.PR. Level 1: early undergraduate.

**Definition.** Top-k truncation of an attention distribution P over n positions keeps the k largest probabilities and rescales them to sum to 1. Total variation distance is the largest difference between the probabilities that two distributions give to one event.

**Problem.** The total variation distance between P and its top-k truncation equals the probability that P gives to the discarded positions.

**How the definition helps.** The discarded set loses its entire probability, while kept positions can only gain probability (our own). Their total gain equals the discarded mass. No event can gain or lose more than that mass, so the discarded set attains the maximum.

**Paper or page:** [A Mathematical Theory of Top-k Sparse Attention via Total Variation Distance](https://arxiv.org/abs/2512.07647v1). It says: “we show that the total-variation distance coincides with the discarded softmax tail mass”

**Sources:**

- [Georgios Tzachristas, Lei Deng, Ioannis Tzachristas, Gong Zhang, Renhai Chen, A Mathematical Theory of Top-k Sparse Attention via Total Variation Distance, arXiv:2512.07647v1 (2025)](https://arxiv.org/abs/2512.07647v1)

### All medians minimize absolute error

**Remember:** Keep both halves balanced, even when that leaves a whole interval.

*Makes the theorem clean to state or prove.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A median of X is any number m with P(X ≤ m) ≥ ½ and P(X ≥ m) ≥ ½. So at least half the probability lies on each side, and the medians may fill a whole interval.

**Problem.** For a random variable with finitely many possible values, the medians are exactly the numbers that minimize mean absolute error.

**How the definition helps.** The convex function m ↦ E\[\|X − m\|\] has left slope P(X &lt; m) − P(X ≥ m) and right slope P(X ≤ m) − P(X &gt; m) (our own). The two median inequalities say exactly that zero lies between these slopes, the condition for a minimum.

**Wikipedia:** [Median](https://en.wikipedia.org/wiki/Median). It says: “m is a median of X if and only if m is a minimizer of the mean absolute error with respect to X.”

**Sources:** none listed. No primary source with a working link was found.

### Counting Bernoulli successes gives the binomial law and moments

**Remember:** A binomial count is a sum of independent zero-one trials.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A binomial variable X counts successes in n independent trials, each with the same success probability p. So X is a sum of n independent indicators, each equal to 1 with probability p (our own).

**Problem.** For 0 &lt; p &lt; 1 and integers 0 ≤ k ≤ n, P(X = k) equals C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ. The mean is np and the variance is np(1 − p).

**How the definition helps.** X = k means that some set of k trials succeeds, and there are C(n, k) ways to choose that set (our own). By independence each choice has probability pᵏ(1 − p)ⁿ⁻ᵏ (our own). Each indicator has mean p and variance p(1 − p), and independent variances add, giving np and np(1 − p) (our own).

**Paper or page:** [Probability Mass Function of Binomial Distribution](https://proofwiki.org/wiki/Probability_Mass_Function_of_Binomial_Distribution). It says: “The probability mass function (pmf) of a binomially distributed random variable X is equal to:”

**Sources:** none listed. No primary source with a working link was found.

### Counting endpoints gives right continuity

**Remember:** Count the point itself to get the limit from the right.

*Rules out counterexamples.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The cumulative distribution function at x is the probability of a value at or below x, so it counts the point x itself.

**Problem.** Every cumulative distribution function is right-continuous, even at a point with positive probability.

**How the definition helps.** As thresholds decrease to x, the events below each threshold shrink to the event of a value at or below x (our own). Continuity of probability then gives right continuity (our own). Counting only values below x fails: for a variable always equal to zero, that function is 0 at zero but 1 just to its right (our own).

**Wikipedia:** [Cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function). It says: “Every probability distribution defined on the real numbers, discrete or "mixed" as well as continuous, is uniquely identified by a right-continuous monotone increasing function”

**Sources:** none listed. No primary source with a working link was found.

### Counting trials to the last success adds geometric waits

**Remember:** Break the wait at each success.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Trials are independent with the same success probability p, where 0 &lt; p ≤ 1. The negative binomial wait counts trials through the rth success, for a positive integer r. Cut at each success, it splits into r geometric waits, each counting trials through the next success (our own).

**Problem.** The negative binomial wait is distributed as a sum of r independent geometric waits with success probability p. Its mean is r/p for 0 &lt; p ≤ 1.

**How the definition helps.** Trial independence makes the r blocks independent, each a geometric wait with success probability p (our own). A geometric wait has mean 1/p, so linearity gives the mean r/p (our own).

**Wikipedia:** [Negative binomial distribution](https://en.wikipedia.org/wiki/Negative_binomial_distribution). It says: “The expected total number of trials needed to see r successes is r/p.”

**Sources:** none listed. No primary source with a working link was found.

### Distribution function jumps give exact point probabilities

**Remember:** Subtract the probability strictly below x from the probability at or below x.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The distribution function of a real random variable X is F(x) = P(X ≤ x), which counts the point x itself. Its jump at x is F(x) minus the limit of F(y) as y approaches x from below.

**Problem.** The jump of F at x equals P(X = x).

**How the definition helps.** The at-or-below convention includes x, while the left limit counts only outcomes below x (our own). Continuity of probability along increasing events identifies that left limit (our own).

**Paper or page:** [Left Limit of Distribution Function of Finite Borel Measure](https://proofwiki.org/wiki/Left_Limit_of_Distribution_Function_of_Finite_Borel_Measure). It says: “limᵧ→ₓ⁻ Fμ(y) = μ((−∞, x))”

**Sources:** none listed. No primary source with a working link was found.

### Exponential minimum rates add

**Remember:** The minimum exceeds a threshold exactly when every wait exceeds it.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** An exponential wait of rate λ &gt; 0 is a waiting time X whose chance of lasting past each time t ≥ 0 is P(X &gt; t) = exp(−λt).

**Problem.** The minimum of finitely many independent exponential waits is exponential, with rate equal to the sum of their rates.

**How the definition helps.** The minimum lasts past t exactly when every wait lasts past t (our own). By independence that chance is exp(−λ₁t)⋯exp(−λₙt) = exp(−(λ₁ + ⋯ + λₙ)t), so the rates add (our own).

**Wikipedia:** [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution). It says: “is also exponentially distributed, with parameter λ = λ₁ + ⋯ + λₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Exponential tail probabilities cancel away elapsed time

**Remember:** Divide two exponential tails and the elapsed time cancels.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** An exponential wait of rate λ &gt; 0 is a waiting time X whose chance of lasting past each time t ≥ 0 is P(X &gt; t) = exp(−λt).

**Problem.** An exponential wait is memoryless. For s, t ≥ 0, P(X &gt; s + t given X &gt; s) = P(X &gt; t).

**How the definition helps.** The conditional chance is the ratio exp(−λ(s + t))/exp(−λs) of two tails, and the factor exp(−λs) cancels (our own).

**Wikipedia:** [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution). It says: “The exponential distribution and the geometric distribution are the only memoryless probability distributions.”

**Sources:** none listed. No primary source with a working link was found.

### Factorial moments count distinct successes

**Remember:** Factorial moments average the number of ordered lists of distinct successes.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** For a nonnegative integer variable X, the kth factorial moment is E\[X(X − 1)⋯(X − k + 1)\]. When X counts items, this product is the number of ordered lists of k distinct items, so the moment is their average number.

**Problem.** Let X count successes in n independent trials with common success probability p. For 1 ≤ k ≤ n, its kth factorial moment equals n(n − 1)⋯(n − k + 1) times pᵏ.

**How the definition helps.** There are n(n − 1)⋯(n − k + 1) ordered lists of k distinct trials, and each list succeeds entirely with probability pᵏ by independence (our own). The average number of successful lists is their count times pᵏ (our own).

**Wikipedia:** [Factorial moment](https://en.wikipedia.org/wiki/Factorial_moment). It says: “then the factorial moments of X are E\[(X)ᵣ\] = (n choose r) pʳ r! = (n)ᵣ pʳ,”

**Sources:**

- [R. B. Potts, Note on the Factorial Moments of Standard Distributions, Australian Journal of Physics 6 (1953), 498–499.](https://doi.org/10.1071/ph530498)

### Geometric waits forget past failures

**Remember:** Every trial starts afresh, so past failures change nothing.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The geometric wait is the number of independent trials, each with the same success probability p &gt; 0, up to and including the first success.

**Problem.** Given no success in the first m trials, the remaining wait has the original geometric law. Assume that the event we condition on has positive probability.

**How the definition helps.** The remaining wait counts the trials after trial m up to the first success among them (our own). Those trials are independent of the first m and have the same success probability, so the count has the same law (our own).

**Wikipedia:** [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution). It says: “The geometric distribution is the only memoryless discrete probability distribution.”

**Sources:** none listed. No primary source with a working link was found.

### Independent binomial counts add

**Remember:** Join the two trial lists, and the success counts add.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A binomial count is the number of successes in a fixed number of independent trials, each with the same success probability p.

**Problem.** The sum of independent binomial counts from m and n trials with the same success probability is binomial with m + n trials.

**How the definition helps.** Independence of the two counts lets us realize them by two independent lists of m and n trials (our own). Joined, these form one list of m + n independent trials with probability p, and the sum counts its successes (our own).

**Paper or page:** [Sum of Independent Binomial Random Variables](https://proofwiki.org/wiki/Sum_of_Independent_Binomial_Random_Variables). It says: “Then their sum Z = X + Y is distributed as: Z ∼ Binomial(m + n, p)”

**Sources:** none listed. No primary source with a working link was found.

### Joint normality makes uncorrelated normal variables independent

**Remember:** Every mixture aX + bY is normal, not just each variable.

*Rules out counterexamples.* MSC 60E05 (Probability distributions: general theory), 62H05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** Real random variables X and Y are jointly normal if every linear combination aX + bY is normal, counting constants as normal of variance zero (our own).

**Problem.** If X and Y are jointly normal and uncorrelated, then they are independent.

**How the definition helps.** A jointly normal law is fixed by its means and covariances, so zero covariance gives the law of independent normal coordinates (our own). The condition excludes Y = WX, with X standard normal and W an independent fair sign: both are normal and uncorrelated but dependent (our own example). Their sum X + Y is zero with probability ½, so it is not normal (our own example).

**Wikipedia:** [Misconceptions about the normal distribution](https://en.wikipedia.org/wiki/Misconceptions_about_the_normal_distribution). It says: “In that case, if X and Y are uncorrelated then they are independent.”

**Sources:** none listed. No primary source with a working link was found.

### Standardization makes correlation unitless

**Remember:** Remove the offset and the units before multiplying.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The correlation of two variables with finite positive variances is the average product of their standardized values. A standardized value is the variable minus its mean, divided by its standard deviation, so it has no origin and no units.

**Problem.** Adding constants to the two variables, or multiplying them by positive constants, does not change their correlation. Assume both variances are finite and positive.

**How the definition helps.** Adding a constant shifts the mean by the same amount, and multiplying by c &gt; 0 multiplies the deviation and the standard deviation by c (our own). So each standardized value is unchanged, and so is their average product (our own).

**Wikipedia:** [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient). It says: “A key mathematical property of the Pearson correlation coefficient is that it is invariant under separate changes in location and scale in the two variables.”

**Sources:** none listed. No primary source with a working link was found.

### Subset overlap reveals hypergeometric symmetry

**Remember:** The overlap does not care which subset you draw first.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The hypergeometric count is the number of elements shared by two independent, uniformly random subsets of sizes K and n of a population of size N.

**Problem.** In the hypergeometric law, swapping the number of marked elements and the sample size leaves the count distribution unchanged.

**How the definition helps.** The overlap of two sets does not depend on which one is called marked, so K and n play symmetric roles (our own). Conditioning on the first subset gives the usual model, since relabeling the population shows every fixed marked set gives the same law (our own).

**Wikipedia:** [Hypergeometric distribution](https://en.wikipedia.org/wiki/Hypergeometric_distribution). It says: “The symmetry in K and n stems from the fact that the two rounds are independent”

**Sources:** none listed. No primary source with a working link was found.

### The generalized inverse makes inverse-transform sampling work for every distribution

**Remember:** Q(p) is the first x where F reaches p.

*True by definition.* MSC 60E05 (Probability distributions: general theory), 65C10. arXiv math.PR, stat.CO. Level 1: early undergraduate.

**Definition.** The quantile function of a distribution function F is Q(p) = inf{x : F(x) ≥ p} for p in (0, 1), the smallest x at which F reaches p. Because F is increasing and right continuous, Q(p) ≤ x holds exactly when p ≤ F(x).

**Problem.** If U is uniform on (0, 1), then Q(U) has distribution function F. This holds for every F, including those with jumps and flat parts.

**How the definition helps.** By that equivalence, P(Q(U) ≤ x) = P(U ≤ F(x)), which is F(x) because U is uniform (our own). Jumps and flat parts of F do not matter, since the equivalence uses only monotonicity and right continuity (our own).

**Wikipedia:** [Quantile function](https://en.wikipedia.org/wiki/Quantile_function). It says: “the quantile function returns the minimum value of x from amongst all those values whose c.d.f value exceeds p”

**Sources:** none listed. No primary source with a working link was found.

### Generating function coefficients give every count probability

**Remember:** The coefficient at degree k is the chance of count k.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** The probability generating function of a nonnegative integer count X is the power series G(s) = ∑ₖ P(X = k)sᵏ, whose kth coefficient is the chance that X = k. It converges for −1 &lt; s &lt; 1.

**Problem.** Two nonnegative integer counts have the same law if their probability generating functions agree on an interval around zero.

**How the definition helps.** A power series is determined by its values near zero, since its kth derivative at zero is k! times its kth coefficient (our own). So equal generating functions give equal chances P(X = k) for every k (our own).

**Paper or page:** [Probability Generating Function defines Probability Distribution](https://proofwiki.org/wiki/Probability_Generating_Function_defines_Probability_Distribution). It says: “∀ k ∈ ℕ: P(X = k) = P(Y = k)”

**Sources:** none listed. No primary source with a working link was found.

### Squared deviations turn Markov’s inequality into Chebyshev’s inequality

**Remember:** Square the deviation before you apply Markov’s inequality.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The variance of X is E\[(X − μ)²\], the mean of the nonnegative variable (X − μ)², where μ is the mean of X.

**Problem.** If X has mean μ and finite variance, the chance that \|X − μ\| ≥ t is at most Var(X)/t² for each t &gt; 0.

**How the definition helps.** The event \|X − μ\| ≥ t is the event (X − μ)² ≥ t² (our own). Markov’s inequality for the nonnegative variable (X − μ)² bounds its chance by E\[(X − μ)²\]/t² = Var(X)/t² (our own).

**Paper or page:** [Bienaymé-Chebyshev Inequality](https://proofwiki.org/wiki/Bienaymé-Chebyshev_Inequality). It says: “Pr(\|X − μ\| ≥ kσ) ≤ 1/k²”

**Sources:** none listed. No primary source with a working link was found.

### Aperiodicity rules out the flip-flop chain and gives convergence

**Remember:** Return times with greatest common divisor one prevent a fixed rhythm.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The period of a state i with possible returns is the greatest common divisor of the times n ≥ 1 with Pⁿ(i,i) &gt; 0. A chain is aperiodic if every state has period one, so its returns are not locked to a fixed rhythm.

**Problem.** Let a finite Markov chain be irreducible, so every state can reach every other, and aperiodic. Then from any start, its distribution after k steps converges to the stationary distribution.

**How the definition helps.** For a finite irreducible chain, period one means some power of the transition matrix has all entries positive (our own). The Perron–Frobenius theorem then gives convergence to the stationary distribution (our own). Aperiodicity excludes the two-state chain that swaps states each step, whose returns take only even times and whose distributions alternate forever (our own).

**Wikipedia:** [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “If the Markov chain is additionally irreducible and aperiodic, then there is a unique stationary distribution π. In this case Pᵏ converges to a rank-one matrix in which each row is the stationary distribution π”

**Sources:** none listed. No primary source with a working link was found.

### Detailed balance makes stationarity a one-line check

**Remember:** Balance each pair of states, and the whole chain balances.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A distribution π satisfies detailed balance for transition probabilities Pᵢⱼ when πᵢPᵢⱼ = πⱼPⱼᵢ for every pair of states i, j. In words, the probability flow from i to j equals the flow back from j to i.

**Problem.** If π satisfies detailed balance, then π is a stationary distribution: πP = π. The Metropolis–Hastings algorithm uses this to sample from a given distribution.

**How the definition helps.** Summing the balance equation over i gives ∑ᵢ πᵢPᵢⱼ = πⱼ∑ᵢ Pⱼᵢ = πⱼ, because row j sums to one (our own). Metropolis–Hastings chooses its acceptance probabilities so that the target law satisfies this balance (our own).

**Wikipedia:** [Detailed balance](https://en.wikipedia.org/wiki/Detailed_balance). It says: “The detailed balance condition is stronger than that required merely for a stationary distribution, because there are Markov processes with stationary distributions that do not have detailed balance.”

**Sources:**

- [N. Metropolis, A. W. Rosenbluth, M. N. Rosenbluth, A. H. Teller and E. Teller, Equation of State Calculations by Fast Computing Machines, Journal of Chemical Physics 21 (1953)](https://doi.org/10.1063/1.1699114)

### Transition matrix powers compose Markov chain steps

**Remember:** Matrix multiplication sums over the states where you join two paths.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 1: early undergraduate.

**Definition.** For a finite Markov chain whose step rules do not change with time, the n-step transition matrix P⁽ⁿ⁾ has entry (i, j) equal to the chance of moving from i to j in n steps. By the Markov property, the future after any time depends only on the state at that time.

**Problem.** The transition matrix for n + m steps is the product of the matrices for n steps and m steps.

**How the definition helps.** To go from i to j in n + m steps, the chain passes through some state k at time n (our own). By the Markov property this happens with chance P⁽ⁿ⁾ᵢₖP⁽ᵐ⁾ₖⱼ, and summing over k is matrix multiplication (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Paper or page:** [Chapman-Kolmogorov Equation](https://proofwiki.org/wiki/Chapman-Kolmogorov_Equation). It says: “P⁽ⁿ ⁺ ᵐ⁾ = P⁽ⁿ⁾ P⁽ᵐ⁾”

**Sources:** none listed. No primary source with a working link was found.

### Countable additivity blocks fair integer lotteries

**Remember:** Countably many equal chances cannot add to one.

*Rules out counterexamples.* MSC 60A05 (Axioms; other general questions in probability), 01A60. arXiv math.PR, math.HO. Level 2: later undergraduate.

**Definition.** Kolmogorov’s probability is countably additive: the probability of a union of countably many disjoint events is the sum of their probabilities, not only for finite unions.

**Problem.** There is no countably additive probability on the positive integers with equal probabilities for every single outcome.

**How the definition helps.** The positive integers are the disjoint union of countably many single points, so the equal point probabilities must sum to one (our own). A common positive value gives an infinite sum, and a common zero gives zero (our own). Giving finite sets 0 and cofinite sets 1 is finitely additive, so finite additivity alone does not exclude a fair lottery (our own).

**Wikipedia:** [Probability axioms](https://en.wikipedia.org/wiki/Probability_axioms). It says: “The third axiom, σ-additivity, is relatively modern, and originates with Lebesgue's measure theory.”

**Sources:**

- [A. N. Kolmogorov, Foundations of the Theory of Probability (1933, English translation 1950)](https://archive.org/details/foundationsofthe00kolm)

### Independence of σ-algebras makes functions of independent variables independent

**Remember:** A function of X knows no more than X.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability), 60A10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Two sub-σ-algebras 𝒜 and ℬ are independent if P(A ∩ B) = P(A)P(B) for every A in 𝒜 and B in ℬ. Random variables X and Y are independent when σ(X) and σ(Y) are, where σ(X) holds the events {X ∈ U} for measurable U.

**Problem.** If X and Y are independent and f and g are measurable functions, then f(X) and g(Y) are independent. Also, a random variable that is almost surely constant is independent of every other random variable.

**How the definition helps.** Measurability gives σ(f(X)) ⊆ σ(X) and σ(g(Y)) ⊆ σ(Y), so every pair of events to check was already checked (our own). If X is almost surely constant, each event in σ(X) has probability 0 or 1, and either value satisfies the product rule with any B (our own).

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29), [Pi-system](https://en.wikipedia.org/wiki/Pi-system). It says: “Two random variables X and Y defined over Ω are independent (in the old sense) if and only if the σ-algebras that they generate are independent (in the new sense).”

**Sources:**

- [A. Kolmogoroff, Grundbegriffe der Wahrscheinlichkeitsrechnung, Springer, 1933](https://doi.org/10.1007/978-3-642-49888-6)

### Expectation as an integral is linear without independence

**Remember:** Integrate everything over one sample space, so dependence never enters.

*True by definition. Confidence: medium.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The expectation E\[X\] is the Lebesgue integral of X over the sample space, with respect to the probability measure. All variables on that space are integrated against the same measure, whatever their dependence.

**Problem.** For integrable real random variables X and Y on the same space and a real constant a, E\[X + aY\] = E\[X\] + aE\[Y\]. The variables need not be independent.

**How the definition helps.** Linearity of expectation is then linearity of the Lebesgue integral, which needs no information about the joint law (our own explanation). Discrete or density formulas use only the law of each variable, so they would first need the law of X + aY (our own comparison).

**Wikipedia:** [Expected value](https://en.wikipedia.org/wiki/Expected_value). It says: “is linear in the sense that, for any random variables X and Y, and a constant a,”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing density slices gives conditional laws

**Remember:** Divide each slice by its area.

*Makes the theorem clean to state or prove.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For real variables X and Y with joint density f, the conditional density of Y given X = x is the slice y ↦ f(x, y) divided by its area g(x) = ∫ f(x, y) dy. Here g is the marginal density of X, and the rule applies wherever 0 &lt; g(x) &lt; ∞.

**Problem.** For measurable sets A and B, integrating P(Y ∈ B given X = x) times g(x) over A gives P(X ∈ A, Y ∈ B). Any measurable choice of conditional laws where g is zero or infinite gives the same probabilities.

**How the definition helps.** Multiplying the normalized slice back by g(x) returns f(x, y), so integrating over B and then A gives P(X ∈ A, Y ∈ B) by Tonelli’s theorem (our own). The points where g is zero or infinite have probability zero under the law of X, so the choice there does not matter (our own).

**Wikipedia:** [Conditional probability distribution](https://en.wikipedia.org/wiki/Conditional_probability_distribution). It says: “Also in this case it is necessary that fₓ(x) &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Product laws make expectations multiply under independence

**Remember:** Independent coordinates can be averaged one at a time.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Real variables X and Y are independent when their joint law is the product of their separate laws, which gives each rectangle A × B the probability P(X ∈ A)P(Y ∈ B).

**Problem.** If independent real variables X and Y have finite expected absolute values, so does XY. Their expectations satisfy E\[XY\] = E\[X\] E\[Y\].

**How the definition helps.** Under a product law, Tonelli’s theorem gives E\|XY\| = E\|X\|E\|Y\|, which is finite (our own). Fubini’s theorem then averages XY first over x and then over y, giving E\[XY\] = E\[X\]E\[Y\] (our own).

**Paper or page:** [Expectation of Product of Independent Random Variables is Product of Expectations/Corollary](https://proofwiki.org/wiki/Expectation_of_Product_of_Independent_Random_Variables_is_Product_of_Expectations/Corollary). It says: “E\[XY\] = E\[X\] E\[Y\]”

**Sources:** none listed. No primary source with a working link was found.

### The image measure definition of law gives the expectation formula

**Remember:** The law assigns each set the probability that X lands there.

*True by definition. Confidence: medium.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The law of a random element X is the image measure that gives each measurable set B in its target space the probability P(X ∈ B).

**Problem.** For measurable g, E\[g(X)\] equals the integral of g against the law of X whenever g is nonnegative or g(X) is integrable.

**How the definition helps.** For the indicator of B, both sides equal P(X ∈ B) by this definition (our own explanation). Linearity and monotone convergence extend this to all nonnegative g, and positive and negative parts handle integrable g (our own explanation).

**Wikipedia:** [Law of the unconscious statistician](https://en.wikipedia.org/wiki/Law_of_the_unconscious_statistician). It says: “However, in the framework of measure theory, the discrete case generalizes straightforwardly to general (not necessarily discrete) random elements”

**Sources:** none listed. No primary source with a working link was found.

### A covariance matrix is a matrix of inner products

**Remember:** A weighted sum of centered variables has a nonnegative average square.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The covariance matrix C of real variables X₁, …, Xₙ with means μ₁, …, μₙ has entry (i, j) equal to E\[(Xᵢ − μᵢ)(Xⱼ − μⱼ)\]. It records the average product of each pair of centered variables, like a table of inner products.

**Problem.** Every covariance matrix C of finitely many real variables with finite second moments is positive semidefinite. This means aᵀCa ≥ 0 for every real vector a.

**How the definition helps.** By linearity of expectation, aᵀCa is the average of the square (∑ᵢ aᵢ(Xᵢ − μᵢ))², and an average of squares is nonnegative (our own).

**Wikipedia:** [Covariance matrix](https://en.wikipedia.org/wiki/Covariance_matrix). It says: “Any covariance matrix is symmetric and positive semi-definite and its main diagonal contains variances”

**Sources:** none listed. No primary source with a working link was found.

### A quadratic exponent keeps affine sums of normals normal

**Remember:** Normal transforms are exponentials of quadratics, and products keep that form.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function of X is M(t) = E\[exp(tX)\]. A normal law with mean μ and variance σ² &gt; 0 has M(t) = exp(μt + σ²t²/2), the exponential of a quadratic in t.

**Problem.** Take finitely many independent normal variables Xᵢ with means μᵢ and positive variances σᵢ². For real b and real weights aᵢ, some nonzero, b + Σᵢ aᵢXᵢ is normal with mean b + Σᵢ aᵢμᵢ and variance Σᵢ aᵢ²σᵢ².

**How the definition helps.** By independence, the transform of b + ∑ᵢ aᵢXᵢ is exp(tb)∏ᵢ Mᵢ(aᵢt), again the exponential of a quadratic (our own). Its exponent is (b + ∑ᵢ aᵢμᵢ)t + (∑ᵢ aᵢ²σᵢ²)t²/2, and uniqueness of the transform identifies that normal law (our own).

**Paper or page:** [Moment Generating Function of Normal Distribution](https://proofwiki.org/wiki/Moment_Generating_Function_of_Normal_Distribution). It says: “Mₓ(t) = exp(μt + ½σ²t²)”

**Sources:** none listed. No primary source with a working link was found.

### A shared rate makes independent gamma shapes add

**Remember:** The same base lets you add the powers.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function of X is M(t) = E\[exp(tX)\]. A gamma law with shape α &gt; 0 and rate β &gt; 0 has M(t) = (1 − t/β)⁻ᵅ for t &lt; β, a base fixed by the rate raised to a power fixed by the shape.

**Problem.** The sum of finitely many independent gamma variables with the same rate is gamma with that rate and the sum of their shapes.

**How the definition helps.** Independence multiplies the transforms, and equal rates give them the same base, so the exponents add (our own). Uniqueness of moment generating functions near zero identifies the gamma law with the summed shape (our own).

**Paper or page:** [Moment Generating Function of Gamma Distribution](https://proofwiki.org/wiki/Moment_Generating_Function_of_Gamma_Distribution). It says: “Mₓ(t) = (1 − t/β)⁻ᵅ, t &lt; β”

**Sources:** none listed. No primary source with a working link was found.

### Counting ordered pairs makes Poisson variance equal its mean

**Remember:** Average X(X − 1) to count ordered pairs of distinct items.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For a count X, the second factorial moment E\[X(X − 1)\] is the average number of ordered pairs of distinct items. Against the Poisson probabilities e<sup>(−λ)</sup>λᵏ/k!, the factor k(k − 1) cancels two factors of k! (our own).

**Problem.** A Poisson variable of parameter λ &gt; 0 has mean and variance both equal to λ.

**How the definition helps.** The cancellation gives E\[X(X − 1)\] = λ², and cancelling one factor gives E\[X\] = λ (our own). Then Var(X) = E\[X(X − 1)\] + E\[X\] − (E\[X\])² = λ² + λ − λ² = λ (our own).

**Paper or page:** [Expectation and Variance of Poisson Distribution equal its Parameter](https://proofwiki.org/wiki/Expectation_and_Variance_of_Poisson_Distribution_equal_its_Parameter). It says: “Then the expectation of X equals the variance of X, that is, λ itself.”

**Sources:** none listed. No primary source with a working link was found.

### Exponentiating a normal gives every real moment of a log-normal

**Remember:** A power of exp(Y) is exp of a multiple of Y.

*True by definition.* MSC 60E05 (Probability distributions: general theory), 62E15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A variable X is log-normal if X = exp(Y) for a normal variable Y with mean μ and variance σ², where σ &gt; 0. Then every real power Xⁿ is exp(nY) (our own).

**Problem.** For every real n, the moment E\[Xⁿ\] equals exp(nμ + n²σ²/2).

**How the definition helps.** So E\[Xⁿ\] is the normal moment generating function E\[exp(tY)\] = exp(μt + σ²t²/2) at t = n (our own). No log-normal density needs to be integrated (our own).

**Wikipedia:** [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). It says: “For any real or complex number n, the n-th moment of a log-normally distributed variable X is given by”

**Sources:** none listed. No primary source with a working link was found.

### Exponentiating normals makes independent log-normal products log-normal

**Remember:** Multiplying log-normal variables adds their normal logarithms.

*True by definition.* MSC 60E05 (Probability distributions: general theory), 62E15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A variable X is log-normal if X = exp(Y) for a normal variable Y, called its logarithm. A product exp(Y₁)exp(Y₂) is then exp(Y₁ + Y₂) (our own).

**Problem.** If X₁ and X₂ are independent log-normal variables, then their product is log-normal. The mean and variance of its logarithm are the respective sums of those of the original logarithms.

**How the definition helps.** The product X₁X₂ is exp(Y₁ + Y₂), where the logarithms Y₁ and Y₂ are independent normal variables (our own). Their sum is normal with the summed mean and variance, so the product is log-normal with those parameters (our own).

**Wikipedia:** [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). It says: “If two independent, log-normal variables X₁ and X₂ are multiplied \[divided\], the product \[ratio\] is again log-normal”

**Sources:** none listed. No primary source with a working link was found.

### Generating functions show that Poisson means add

**Remember:** Adding Poisson counts adds the coefficients in their exponents.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The probability generating function of a count N is G(s) = E\[sᴺ\] for 0 &lt; s &lt; 1. Define the Poisson law of parameter λ &gt; 0 as the law with G(s) = exp(λ(s − 1)), so λ sits in the exponent.

**Problem.** The sum of independent Poisson variables of means λ and μ is Poisson of mean λ + μ.

**How the definition helps.** Independence multiplies generating functions, and exp(λ(s − 1))exp(μ(s − 1)) = exp((λ + μ)(s − 1)) (our own). A generating function determines the law, so the sum is Poisson of mean λ + μ (our own).

**Paper or page:** [Sum of Independent Poisson Random Variables is Poisson](https://proofwiki.org/wiki/Sum_of_Independent_Poisson_Random_Variables_is_Poisson). It says: “X + Y ∼ Poisson(λ₁ + λ₂)”

**Sources:** none listed. No primary source with a working link was found.

### Product-measure convolution gives the law of independent sums

**Remember:** Independence gives the product law, and addition gives the convolution.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The convolution of laws μ and ν is the image of the product measure μ ⊗ ν under addition. It gives a set A the μ ⊗ ν measure of the pairs (x, y) with x + y in A.

**Problem.** If X and Y are independent real random variables with laws μ and ν, the law of X + Y is their convolution. Neither law needs to be discrete or have a density.

**How the definition helps.** Independence makes μ ⊗ ν the joint law of (X, Y), so its image under addition is exactly the law of X + Y (our own explanation). No sum or density formula is needed (our own comparison). For densities, Fubini’s theorem recovers the usual integral formula (our own explanation).

**Wikipedia:** [Convolution](https://en.wikipedia.org/wiki/Convolution), [Convolution of probability distributions](https://en.wikipedia.org/wiki/Convolution_of_probability_distributions). It says: “This agrees with the convolution defined above when μ and ν are regarded as distributions”

**Sources:** none listed. No primary source with a working link was found.

### Projecting a joint law gives its marginal laws

**Remember:** Forget one coordinate to get the law of the other.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The first marginal of the joint law of real variables (X, Y) gives each measurable set A the joint probability of the strip A × ℝ. That strip holds the pairs whose first coordinate lies in A.

**Problem.** Projecting the joint law onto the first coordinate gives the law of X. For a joint density, the marginal density of X is the integral over the second coordinate.

**How the definition helps.** The event that (X, Y) lies in A × ℝ is exactly the event X ∈ A, so the marginal is the law of X (our own). With a joint density, Tonelli’s theorem integrates over the second coordinate first and gives the marginal density (our own).

**nLab:** [joint and marginal probability](https://ncatlab.org/nlab/show/joint+and+marginal+probability). It says: “marginal distributions by pushing forward along the product projections.”

**Sources:** none listed. No primary source with a working link was found.

### Standardization makes correlation a cosine

**Remember:** Correlation is the cosine between two unit deviations.

*Rules out counterexamples.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The Pearson correlation of two variables with finite positive variances is E\[UV\], where U and V are their standardized values. Standardizing subtracts the mean and divides by the standard deviation, so E\[U²\] = E\[V²\] = 1 (our own).

**Problem.** Pearson correlation lies between −1 and 1. It reaches either endpoint exactly when the two standardized variables agree up to sign with probability one.

**How the definition helps.** The Cauchy–Schwarz inequality gives \|E\[UV\]\| ≤ √(E\[U²\]E\[V²\]) = 1, with equality exactly when U = ±V with probability one (our own). The positive-variance condition excludes a constant variable, which cannot be standardized (our own).

**Paper or page:** [Square of Covariance is Less Than or Equal to Product of Variances](https://proofwiki.org/wiki/Square_of_Covariance_is_Less_Than_or_Equal_to_Product_of_Variances). It says: “Cov(X, Y)² ≤ Var(X) Var(Y)”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic functions exist for every distribution

**Remember:** Because \|exp(itX)\| = 1, the characteristic function never diverges.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60E10 (Characteristic functions; other transforms), 60F05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The characteristic function of a real random variable X is φ(t) = E\[exp(itX)\] for each real t, where i² = −1. The integrand exp(itX) has absolute value one, so the expectation always exists.

**Problem.** Every real random variable has a characteristic function. A sequence of real random variables converges in distribution exactly when its characteristic functions converge pointwise to a function continuous at zero.

**How the definition helps.** A bounded integrand is integrable under every law, so φ exists for every X, unlike the moment generating function (our own). Lévy’s continuity theorem gives the convergence criterion, including continuity at zero (our own).

**Wikipedia:** [Characteristic function (probability theory)](https://en.wikipedia.org/wiki/Characteristic_function_%28probability_theory%29). It says: “The characteristic function always exists when treated as a function of a real-valued argument, unlike the moment-generating function.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic functions turn independent sums into products

**Remember:** Exponentials turn sums into products, and independence lets the expectations multiply.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The characteristic function of a real random variable X is φ(t) = E\[exp(itX)\] for real t, where i² = −1. Because exp(it(x + y)) = exp(itx)exp(ity), the exponential turns sums into products (our own explanation).

**Problem.** If X and Y are independent, the characteristic function of X + Y is the product of their characteristic functions.

**How the definition helps.** For independent X and Y, the expectation of exp(itX)exp(itY) is the product of the two expectations (our own explanation). No density is needed for either variable (our own comparison).

**Wikipedia:** [Characteristic function (probability theory)](https://en.wikipedia.org/wiki/Characteristic_function_%28probability_theory%29). It says: “Characteristic functions are particularly useful for dealing with linear functions of independent random variables.”

**Sources:** none listed. No primary source with a working link was found.

### Exponential transforms make independent sums into products

**Remember:** Addition inside the exponential becomes multiplication outside it.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 60E05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function of X is M(t) = E\[exp(tX)\]. The exponential turns a sum into a product, since exp(t(X + Y)) = exp(tX)exp(tY) (our own).

**Problem.** Suppose independent variables X and Y have finite moment generating functions on an open interval containing zero. On that interval, their product is the moment generating function of X + Y.

**How the definition helps.** For independent X and Y, the expectation of exp(tX)exp(tY) is the product of the two expectations (our own). So on the common interval the transform of X + Y is the product, with no convolution of laws (our own).

**Wikipedia:** [Moment generating function](https://en.wikipedia.org/wiki/Moment_generating_function). It says: “Mₛₙ(t) = Mₓ₁(a₁t) Mₓ₂(a₂t) ⋯ Mₓₙ(aₙt).”

**Sources:** none listed. No primary source with a working link was found.

### Logarithms of generating functions show cumulants add for independent sums

**Remember:** Independence multiplies moment generating functions, and logarithms turn products into sums.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 62E10. arXiv math.PR, math.ST. Level 2: later undergraduate.

**Definition.** When M(t) = E\[exp(tX)\] is finite on an open interval around zero, the cumulants of X are read from the Taylor series of log M(t) at zero. The nth cumulant is n! times the coefficient of tⁿ.

**Problem.** Let X and Y be independent, with moment generating functions that exist near 0. Then every cumulant of X + Y is the sum of the corresponding cumulants of X and Y.

**How the definition helps.** Independence makes the moment generating function of X + Y the product of the two, so their logarithms add (our own). Adding two power series adds their coefficients, so the cumulants add (our own).

**Wikipedia:** [Cumulant](https://en.wikipedia.org/wiki/Cumulant). It says: “In particular, when two or more random variables are statistically independent, the nth-order cumulant of their sum is equal to the sum of their nth-order cumulants.”

**Sources:** none listed. No primary source with a working link was found.

### Probability generating functions compose for independent random sums

**Remember:** Plug the summand’s generating function into the count’s.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The probability generating function of a nonnegative integer variable X is G(z), the average of z raised to the power X, for 0 ≤ z ≤ 1 with 0⁰ = 1. A sum of n independent copies of X then has generating function G(z)ⁿ.

**Problem.** Let X₁, X₂, and so on be independent copies of X. Let N be a nonnegative integer-valued random variable independent of all the copies. If G and F are the generating functions of X and N, the sum of the first N copies has generating function F(G(z)).

**How the definition helps.** Given N = n, the sum of n copies has generating function G(z)ⁿ, and the empty sum gives one (our own). Averaging over the independent N gives E\[G(z)ᴺ\] = F(G(z)) (our own).

**Wikipedia:** [Probability generating function](https://en.wikipedia.org/wiki/Probability_generating_function). It says: “Probability generating functions are particularly useful for dealing with functions of independent random variables.”

**Paper or page:** [PGF of Sum of Independent Discrete Random Variables](https://proofwiki.org/wiki/PGF_of_Sum_of_Independent_Discrete_Random_Variables). It says: “Π<sub>Z</sub>(s) = Π<sub>X</sub>(s) Π<sub>Y</sub>(s) where Π<sub>Z</sub>(s) is the probability generating function of Z.”

**Sources:** none listed. No primary source with a working link was found.

### The exponential series packs moments into one function

**Remember:** Read the expected powers by differentiating at zero.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 60E05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function of X is M(t) = E\[exp(tX)\]. When M is finite near zero, expanding the exponential gives M(t) = ∑ₙ E\[Xⁿ\]tⁿ/n! for small \|t\|, so each moment sits beside tⁿ/n! (our own).

**Problem.** If M is finite on an open interval around zero, its nth derivative at zero equals E\[Xⁿ\] for every positive integer n.

**How the definition helps.** The nth derivative of a power series at zero is n! times its nth coefficient, which here is E\[Xⁿ\]/n! (our own). Finiteness of M on both sides of zero justifies averaging the series term by term (our own).

**Paper or page:** [Moment in terms of Moment Generating Function](https://proofwiki.org/wiki/Moment_in_terms_of_Moment_Generating_Function). It says: “E\[Xⁿ\] = Mₓ⁽ⁿ⁾(0)”

**Sources:** none listed. No primary source with a working link was found.

### A constant limit makes convergence in law convergence in probability

**Remember:** Test against a continuous function that is zero at c.

*Rules out counterexamples.* MSC 60F05 (Central limit and other weak theorems), 60B10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Random variables Xₙ converge in law to a constant c when E\[f(Xₙ)\] tends to f(c) for every bounded continuous function f.

**Problem.** If random variables converge in law to a constant c, the chance of an error larger than any fixed positive distance tends to zero.

**How the definition helps.** Take f(x) = min(1, \|x − c\|/ε), which is continuous, zero at c and one at distance ε or more (our own). Then P(\|Xₙ − c\| ≥ ε) ≤ E\[f(Xₙ)\], which tends to f(c) = 0 (our own). For a random limit this fails: a fair random sign and its negative have the same law but always differ (our own).

**Wikipedia:** [Convergence of random variables](https://en.wikipedia.org/wiki/Convergence_of_random_variables). It says: “when the limiting random variable X is a constant.”

**Sources:** none listed. No primary source with a working link was found.

### A transform turns the central limit theorem into a power limit

**Remember:** Convert sums to products before taking the limit.

*True by definition.* MSC 60F05 (Central limit and other weak theorems), 60E10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The characteristic function of a random variable X is φ(t) = E\[exp(itX)\] for each real t, where i² = −1. For independent variables, the characteristic function of the sum is the product of theirs.

**Problem.** Let independent observations have the same distribution, mean μ and finite positive variance σ². Their sum, centered by subtracting nμ and divided by σ√n, converges in distribution to the normal law with mean zero and variance one.

**How the definition helps.** Let ψ be the characteristic function of one observation minus μ, divided by σ; mean zero and variance one give ψ(u) = 1 − u²/2 + o(u²) (our own). The normalized sum then has characteristic function ψ(t/√n)ⁿ, which tends to exp(−t²/2) (our own). Lévy’s continuity theorem identifies the standard normal limit (our own).

**Paper or page:** [Central Limit Theorem](https://proofwiki.org/wiki/Central_Limit_Theorem). It says: “that is, converges in distribution to a standard normal distribution.”

**Sources:**

- [David Williams, Probability with Martingales, Chapter 18](https://doi.org/10.1017/CBO9780511813658.022)

### Tail failures multiply in the second Borel–Cantelli lemma

**Remember:** Finitely many successes means a whole tail of failures.

*Makes the theorem clean to state or prove.* MSC 60F15 (Strong limit theorems). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The limit inferior of a sequence of events is the set of outcomes that lie in every event from some index on. It is the union over n of the intersections of the events from n onward.

**Problem.** For independent events whose probabilities have infinite sum, the limit inferior of their complements has probability zero. Thus infinitely many events occur with probability one.

**How the definition helps.** For the complements, this is a countable union of tails of failures, so it suffices that each tail has probability zero (our own). By independence a block of failures from n to m has probability ∏(1 − pₖ) ≤ exp(−∑pₖ), which tends to zero as m grows (our own).

**Paper or page:** [Second Borel-Cantelli Lemma](https://proofwiki.org/wiki/Second_Borel-Cantelli_Lemma). It says: “Then the probability that infinitely many of them occur is 1.”

**Sources:** none listed. No primary source with a working link was found.

### The set limit superior gives the first Borel–Cantelli lemma

**Remember:** Infinitely often means at least once in every tail.

*Makes the theorem clean to state or prove.* MSC 60F15 (Strong limit theorems). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The limit superior of a sequence of events is the set of outcomes in infinitely many of them. It is the intersection over n of the unions of the events from n onward.

**Problem.** If the sum of the event probabilities is finite, their limit superior has probability zero.

**How the definition helps.** The limit superior lies in each tail union, whose probability is at most the tail sum by the union bound (our own). A convergent series has tail sums that tend to zero (our own).

**Paper or page:** [Borel-Cantelli Lemma](https://proofwiki.org/wiki/Borel-Cantelli_Lemma). It says: “where limsup denotes limit superior of sets.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted partial sums give the finite variance strong law

**Remember:** Divide each centered step by its index before adding the steps.

*True by definition.* MSC 60F15 (Strong limit theorems), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The weighted partial sum through n is ∑ₖ₌₁ⁿ (Xₖ − μ)/k, the first n observations minus their common mean μ, each divided by its index.

**Problem.** Sample means of independent variables with the same law and finite variance converge to their common mean with probability one.

**How the definition helps.** Dividing step k by k divides its variance by k², so the weighted sums form a martingale with bounded second moments, which converges almost surely (our own). Kronecker’s lemma turns convergence of this weighted series into convergence of the centered sample means to zero (our own).

**Wikipedia:** [Law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers). It says: “the sample average converges almost surely to the expected value”

**Sources:**

- [David Williams, Probability with Martingales, Sections 12.7–12.8](https://assets.cambridge.org/97805214/06055/frontmatter/9780521406055_frontmatter.pdf)

### Tail events are independent of themselves

**Remember:** A tail event ignores every beginning, so it is independent of itself.

*Makes the theorem clean to state or prove.* MSC 60F20 (Zero-one laws), 60A05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** For a sequence X₁, X₂, …, an event A is a tail event if it lies in σ(Xₙ, Xₙ₊₁, …) for every n ≥ 1. So A is decided by the terms after any finite beginning.

**Problem.** For a sequence of independent random variables, every tail event has probability zero or one.

**How the definition helps.** Under independence, A is independent of each finite block X₁, …, Xₙ, and the monotone class theorem extends this to every event decided by the whole sequence (our own). A is one such event, so P(A) = P(A)², which forces 0 or 1 (our own).

**Wikipedia:** [Kolmogorov's zero–one law](https://en.wikipedia.org/wiki/Kolmogorov%27s_zero%E2%80%93one_law). It says: “Tail events are precisely those events whose occurrence can still be determined”

**Sources:** none listed. No primary source with a working link was found.

### Mean square convergence gives the finite variance weak law

**Remember:** Mean square convergence means the expected squared error tends to zero.

*True by definition.* MSC 60F25 (\\(L<sup>p\\</sup>)-limit theorems), 60F05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A sequence converges in mean square to a number when its expected squared distance from that number tends to zero.

**Problem.** Sample means of independent variables with the same law and finite variance converge in mean square to their common mean. They also converge in probability.

**How the definition helps.** Independence makes the expected squared error of the sample mean equal to the variance divided by the sample size, which tends to zero (our own). Markov’s inequality for the squared error then gives convergence in probability (our own).

**Wikipedia:** [Convergence of random variables](https://en.wikipedia.org/wiki/Convergence_of_random_variables). It says: “converges in mean square (or in quadratic mean) to X.”

**Sources:** none listed. No primary source with a working link was found.

### A stopping time lets each included step keep its mean

**Remember:** Decide whether to include a step before seeing its value.

*Rules out counterexamples.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60G50. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A stopping time is a random time T in {0, 1, 2, …} such that the first n steps decide whether T ≤ n. So whether step k is included, the event T ≥ k, is known before step k is seen.

**Problem.** For independent steps with the same law and finite absolute mean, stop using only the steps observed so far. If the stopping time has finite mean, the expected sum equals the step mean times the mean stopping time.

**How the definition helps.** Step k is counted on the event T ≥ k, which depends only on earlier steps and so is independent of step k (our own). Summing E\[X\]P(T ≥ k) over k gives the step mean times E\[T\], and finite E\|X\| and E\[T\] justify the exchange of sum and expectation (our own). Counting one fair toss only when it lands tails gives zero heads, though the mean number of counted tosses is positive (our own).

**Wikipedia:** [Wald's equation](https://en.wikipedia.org/wiki/Wald%27s_equation). It says: “is a stopping time for a sequence of independent random variables”

**Sources:** none listed. No primary source with a working link was found.

### Stopping times cannot see the future, so fair games stay fair

**Remember:** A stopping rule a gambler can follow without knowing the future.

*Rules out counterexamples.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A stopping time τ is a random time such that, for every n, the event {τ ≤ n} is decided by the information 𝓕ₙ known at time n. So the decision to stop at time n uses no knowledge of the future.

**Problem.** Let X be a martingale, a process whose expected next value given the past equals its present value. If τ is a bounded stopping time, then E(X\_τ) = E(X₀), so no such stopping rule beats a fair game.

**How the definition helps.** The event {τ ≥ k} is known before step k, so each included martingale increment has mean zero (our own). Since τ is bounded, adding finitely many such terms gives E\[X\_τ\] = E\[X₀\]. Peeking at one fair ±1 step and stopping at zero only if it is −1 gives mean ½, but that rule sees the future (our own).

**Wikipedia:** [Stopping time](https://en.wikipedia.org/wiki/Stopping_time), [Optional stopping theorem](https://en.wikipedia.org/wiki/Optional_stopping_theorem), [Martingale (betting system)](https://en.wikipedia.org/wiki/Martingale_%28betting_system%29). It says: “Playing until they obtain the maximum amount ahead they will ever be is not a stopping rule and does not provide a stopping time, as it requires information about the future as well as the present and past.”

**Sources:** none listed. No primary source with a working link was found.

### A predictable drift makes the Doob decomposition unique

**Remember:** A predictable process is known one step before it happens.

*Makes the theorem clean to state or prove.* MSC 60G42 (Martingales with discrete parameter), 60G07. arXiv math.PR. Level 2: later undergraduate.

**Definition.** In discrete time, a process A is predictable if each Aₙ is known one step early, that is, measurable with respect to 𝓕ₙ₋₁ for every n ≥ 1.

**Problem.** Every adapted integrable discrete-time process X has a decomposition X = M + A, unique up to almost sure equality. Here M is a martingale and A is predictable with A₀ = 0.

**How the definition helps.** Since M must have conditional mean increment zero, predictability forces Aₙ − Aₙ₋₁ = E\[Xₙ − Xₙ₋₁ given 𝓕ₙ₋₁\] (our own). Summing these from A₀ = 0 constructs A, and M = X − A is then a martingale. Conditional expectations are unique almost surely, so both parts are unique in that sense.

**Wikipedia:** [Doob decomposition theorem](https://en.wikipedia.org/wiki/Doob_decomposition_theorem). It says: “the Doob decomposition theorem gives a unique decomposition of every adapted and integrable stochastic process as the sum of a martingale and a predictable process (or "drift") starting at zero.”

**Sources:** none listed. No primary source with a working link was found.

### Predictable bets preserve a martingale

**Remember:** A fair bet needs a stake fixed before the outcome.

*Rules out counterexamples.* MSC 60G42 (Martingales with discrete parameter). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A stake for step k is predictable if the information at time k − 1 fixes it, before the step’s outcome. The gain on step k is the stake times the martingale’s increment, which has conditional mean zero given the past.

**Problem.** The running gains from bounded predictable stakes on a martingale form a martingale.

**How the definition helps.** A bounded predictable stake comes out of the conditional mean, leaving the stake times zero (our own). If the stake could depend on the next fair coin toss, betting only on wins would give a positive mean gain (our own).

**Paper or page:** [Introduction to Martingales](https://arxiv.org/abs/2407.11914v1). It says: “and X is a martingale, then so is C · X”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal coordinates make planar return probabilities squares

**Remember:** In diagonal coordinates, one grid step is two independent fair signs.

*True by definition.* MSC 60G50 (Sums of independent random variables; random walks), 60J10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** In a simple random walk on the square grid, each step goes to one of the four neighbors with equal chance, independently of earlier steps. In the diagonal coordinates x + y and x − y, each step changes both coordinates by independent fair signs ±1 (our own).

**Problem.** After 2n steps the grid walk’s return probability equals the square of the fair line walk’s return probability. The grid walk therefore returns to its start with probability one.

**How the definition helps.** So the two diagonal coordinates are independent fair line walks, and the grid walk is at its start exactly when both are (our own). The line return probability after 2n steps is about 1/√(πn) by Stirling’s formula, so the squares have infinite sum (our own). An infinite expected number of returns gives recurrence (our own).

**Wikipedia:** [Random walk](https://en.wikipedia.org/wiki/Random_walk). It says: “where each variable is either 1 or −1, with a 50% probability for either value”

**Sources:**

- [Peter G. Doyle and J. Laurie Snell, Random Walks and Electric Networks, Section 2.3.6](https://math.dartmouth.edu/~doyle/docs/walkspdf/walks.pdf)

### The first crossing splits a bound for the whole walk

**Remember:** Stop at the first partial sum whose absolute value reaches the threshold.

*True by definition.* MSC 60G50 (Sums of independent random variables; random walks), 60E15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The first crossing time is the first step at which the absolute partial sum reaches the threshold t, or infinity if this never happens. The event that some partial sum reaches t splits into the disjoint events that the first crossing is at step k (our own).

**Problem.** Consider finitely many independent steps with mean zero and finite variance. The chance that any partial sum has absolute value at least t &gt; 0 is at most the sum of the variances divided by t².

**How the definition helps.** On the event that the first crossing is at step k, the later steps are independent of it and have mean zero, so the cross term in the final square has mean zero (our own). Hence the final square averages at least t² on that event (our own). Summing over k bounds t² times the crossing chance by the expected final square, the sum of the variances (our own).

**Wikipedia:** [Kolmogorov's inequality](https://en.wikipedia.org/wiki/Kolmogorov%27s_inequality). It says: “gives a bound on the probability that the partial sums of a finite collection of independent random variables exceed some specified bound.”

**Sources:** none listed. No primary source with a working link was found.

### Generating functions split Poisson counts into independent counts

**Remember:** Independent counts have a generating function that splits into factors.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60E10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The joint probability generating function of counts U and V is the average of s raised to U times t raised to V. Its coefficients are the joint probabilities, so it splits as a function of s times a function of t exactly when U and V are independent (our own).

**Problem.** Keep each event of a rate λ Poisson process independently with probability p. The kept and removed events form independent Poisson processes of rates pλ and (1 − p)λ.

**How the definition helps.** On an interval of length h, each of the N events contributes a factor ps + (1 − p)t, and averaging over N gives exp(λhp(s − 1))exp(λh(1 − p)(t − 1)) (our own). This product form shows independent Poisson counts of means pλh and (1 − p)λh. Independent increments and marks give the same factorization jointly over disjoint intervals (our own).

**Paper or page:** [Mott's law for the v.r.h. random resistor network and for Mott's random walk](https://arxiv.org/abs/2301.06318v4). It says: “The p–thinning of PPP\[ρ\] is given by PPP\[pρ\].”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting the mean makes a Poisson count a martingale

**Remember:** Subtract the mean growth, and every future increment averages zero.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A rate-λ Poisson process N starts at zero and has independent Poisson counts on disjoint intervals, each with mean λ times the length. The compensated count Nₜ − λt subtracts that mean, so each future increment is independent of the past and has mean zero (our own).

**Problem.** The compensated count Nₜ − λt is a martingale: given the observations so far, its expected later value equals its current value.

**How the definition helps.** The future increment is independent of the past and has mean zero, so the conditional mean of the later value is the current value (our own).

**Wikipedia:** [Martingale (probability theory)](https://en.wikipedia.org/wiki/Martingale_%28probability_theory%29). It says: “the compensated Poisson process {Nₜ − λt : t ≥ 0} is a continuous-time martingale”

**Sources:** none listed. No primary source with a working link was found.

### Uniform arrival times build Poisson counts on a fixed interval

**Remember:** Draw how many points first, then scatter them uniformly.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** On an interval of length T, first draw a Poisson count with mean λT. Then place that many independent uniform points in the interval and sort them to get the arrival times.

**Problem.** Given n arrivals of a positive-rate Poisson process in a fixed interval, their ordered times have the law of n sorted independent uniform draws.

**How the definition helps.** Conditioning on the count undoes the first step, so the arrival times are the sorted uniform points of the second step. The work is checking that this construction gives a Poisson process (our own). Points split among disjoint subintervals give independent Poisson counts with means proportional to their lengths (our own).

**Wikipedia:** [Poisson point process](https://en.wikipedia.org/wiki/Poisson_point_process). It says: “For the homogeneous case in one dimension, all points are uniformly and independently placed in the window or interval W.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Markov chains by conditional independence gives the data processing inequality

**Remember:** Once Y is known, Z tells nothing new about X.

*True by definition.* MSC 60J05 (Discrete-time Markov processes on general state spaces), 94A17. arXiv math.IT, math.PR. Level 2: later undergraduate.

**Definition.** Random variables form a Markov chain X → Y → Z if X and Z are conditionally independent given Y. So once Y is known, Z carries no more information about X, that is, I(X;Z\|Y) = 0 (our own).

**Problem.** If X → Y → Z is a Markov chain, then I(X;Y) ≥ I(X;Z). So no processing of Y, random or not, increases the information that it carries about X.

**How the definition helps.** Since I(X;Z\|Y) = 0, the chain rule gives I(X;Y) = I(X;Y,Z) = I(X;Z) + I(X;Y\|Z) (our own). The last term is nonnegative, which gives the inequality (our own).

**Wikipedia:** [Data processing inequality](https://en.wikipedia.org/wiki/Data_processing_inequality). It says: “Let three random variables form the Markov chain X → Y → Z, implying that the conditional distribution of Z depends only on Y and is conditionally independent of X.”

**Sources:** none listed. No primary source with a working link was found.

### A return cycle gives the stationary mass as a reciprocal

**Remember:** Each cycle visits home once, so home gets one over cycle length.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A return cycle runs from a visit to state i up to, but not including, the next visit to i, so it visits i exactly once (our own). The cycle occupation law gives each state its expected number of visits per cycle divided by the mean cycle length.

**Problem.** In a chain where all states can reach each other, suppose the mean return time to i is finite. The cycle occupation law is stationary and gives i probability equal to the reciprocal of its mean return time.

**How the definition helps.** State i gets one visit per cycle, so its mass is one over the mean cycle length, which is the mean return time (our own). The law is stationary because one step forward drops the first visit to i and adds the final one, leaving expected counts unchanged (our own).

**Paper or page:** [Finite Markov chains and multiple orthogonal polynomials](https://arxiv.org/abs/2308.00182v4). It says: “in terms of the expected return times t̄ᵢ”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 9.1 and its proof](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Counting visits turns recurrence into a divergent sum

**Remember:** Expected visits are the sum of return probabilities.

*Makes the theorem clean to state or prove.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The visit count of a state is the number of times n ≥ 0 at which the chain started there is in that state, possibly infinite. Its mean is the sum over n of the probabilities of being there at time n.

**Problem.** A state is recurrent if a chain starting there returns with probability one. This holds exactly when the probabilities of being there at time n have infinite sum over n.

**How the definition helps.** The mean visit count is the sum of return probabilities, and it is infinite exactly when return is certain (our own). By the strong Markov property, the chance of at least k returns is fᵏ, where f is the first-return probability (our own). So the mean count is 1/(1 − f), finite exactly when f &lt; 1 (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 5.3](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Finite step hitting probabilities select the least solution

**Remember:** Hitting chances grow step by step from the target indicator.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The n-step hitting probability is the chance of reaching a target set by step n, counting time zero. These start at the target indicator, and each step updates states outside the target by averaging over one transition.

**Problem.** For a discrete-time Markov chain on a countable state space, eventual hitting probabilities form the least nonnegative solution of the first-step equations. These equations set the value to one on the target and require one-step averages elsewhere.

**How the definition helps.** Each update keeps the n-step probabilities below every nonnegative solution, so their limit, the hitting probability, is the least solution (our own). Monotone convergence shows that this limit solves the equations (our own). For a walk biased upward on the nonnegative integers with target zero, minimality rejects the all-ones solution (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 3.4 and Example 3.5](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Independent return gaps give the long run visit fraction

**Remember:** Average time between visits, inverted, is the share of visits.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)), 60F15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A return gap is the number of steps between successive visits to a given state, counted after the first visit. At each return the chain starts afresh at that state, so the gaps are independent and identically distributed (our own).

**Problem.** Suppose all states can reach each other and every state has finite mean return time. From any start, each state’s fraction of visits converges with probability one to its stationary probability.

**How the definition helps.** The strong law makes the average gap converge to the mean return time (our own). The visits up to time n count the gaps that fit in n steps, so the visit fraction tends to the reciprocal (our own). The return-cycle formula identifies that reciprocal with the stationary probability (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 10.2](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Irreducibility and positive recurrence give exactly one stationary distribution

**Remember:** Positive recurrent means every state returns home in finite mean time.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** An irreducible chain can reach every state from every other state in finitely many steps. A state i is positive recurrent if the chain started at i has finite mean return time Eᵢ\[Tᵢ\]. The chain is positive recurrent if every state is.

**Problem.** An irreducible chain on a countable state space has a stationary distribution if and only if it is positive recurrent. The distribution is then unique and equals πᵢ = 1/E\[Tᵢ\].

**How the definition helps.** A finite mean return time lets one divide expected visit counts in a return cycle by it, giving a stationary law with πᵢ = 1/Eᵢ\[Tᵢ\] (our own). Conversely, Kac’s formula πᵢEᵢ\[Tᵢ\] = 1 holds in any stationary irreducible chain, which forces finite means and uniqueness (our own). Simple symmetric random walk on the integers returns almost surely but has infinite mean return time, so it has no stationary law (our own).

**Wikipedia:** [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “If a finite Markov chain is irreducible, then all states are positive recurrent, and it has a unique stationary distribution given by πᵢ = 1/E\[Tᵢ\].”

**Sources:** none listed. No primary source with a working link was found.

### Shifted averages give every finite chain a stationary law

**Remember:** One transition changes only the two ends of the average.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A stationary law is a probability vector that one transition leaves unchanged. The Cesàro average is the arithmetic mean of the laws at times 0 through n − 1. One transition changes it only by the two end terms divided by n.

**Problem.** Every finite Markov chain has a stationary law, even when the laws at individual times do not converge.

**How the definition helps.** One transition turns the average into the average over times 1 through n, which differs by at most 2/n in total mass (our own). Probability vectors on a finite set form a compact set, so a subsequence of averages converges, and its limit is unchanged by a transition (our own). This works even for the chain that alternates between two states, whose laws do not converge (our own).

**Wikipedia:** [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “a left eigenvector e of P with eigenvalue of 1.”

**Sources:** none listed. No primary source with a working link was found.

### The fundamental matrix counts visits before absorption

**Remember:** Add the probability of being in the state at each step.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Take a finite Markov chain and a set that the chain can reach from every state and cannot leave. Let Q hold the transition probabilities among the states outside this set. The fundamental matrix is I + Q + Q² + ⋯, and entry (i,j) of Qᵏ is the chance of being at j at step k before entry.

**Problem.** For states i and j outside the set, entry (i,j) gives the expected number of visits to j before entry when starting at i. The count includes time zero.

**How the definition helps.** Each entry of Qᵏ is the mean of a visit indicator at step k, so by monotone convergence the series gives the mean visit counts (our own). The chain enters the set eventually, so the series converges, and the matrix geometric series gives (I − Q)⁻¹ (our own).

**Wikipedia:** [Absorbing Markov chain](https://en.wikipedia.org/wiki/Absorbing_Markov_chain). It says: “obtained by summing Qᵏ for all k (from 0 to ∞).”

**Sources:** none listed. No primary source with a working link was found.

### Equilibrium weighting makes generators symmetric

**Remember:** Equal flows both ways make the generator symmetric in equilibrium weights.

*True by definition.* MSC 60J27 (Continuous-time Markov processes on discrete state spaces), 82C31. arXiv math-ph, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** For a finite continuous-time Markov chain, weight the inner product of state functions by a positive equilibrium distribution π. Detailed balance says the flow π(x)q(x,y) from x to y, probability times jump rate, equals the flow back π(y)q(y,x) for every pair of states.

**Problem.** Under detailed balance, the generator, the matrix giving the instantaneous change of expected state functions, is self-adjoint in this inner product. A change of coordinates therefore makes it real symmetric.

**How the definition helps.** In the weighted inner product, the coefficient of f(x)g(y) in ⟨f, Lg⟩ for x ≠ y is the flow from x to y (our own). So detailed balance makes ⟨f, Lg⟩ symmetric in f and g (our own). Multiplying each coordinate by the square root of its equilibrium probability gives Euclidean coordinates, where the generator is a real symmetric matrix (our own).

**Paper or page:** [Characterizing the detailed balance property by means of measurements in chemical networks](https://arxiv.org/abs/2402.12935v1). It says: “Then the matrix B = S⁻¹AS is symmetric”

**Sources:**

- [\[, ', E, u, g, e, n, i, a,  , F, r, a, n, c, o, ', ,,  , ', B, e, r, n, h, a, r, d,  , K, e, p, k, a, ', ,,  , ', J, u, a, n,  , J, .,  , L, .,  , V, e, l, á, z, q, u, e, z, ', \], Characterizing the detailed balance property by means of measurements in chemical networks](https://arxiv.org/abs/2402.12935v1)

### Dividing out mean growth makes population size a martingale

**Remember:** Divide by the mean growth, and the population becomes a fair game.

*True by definition.* MSC 60J80 (Branching processes (Galton-Watson, birth-and-death, etc.)), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Start with one ancestor, and let each individual independently have a random number of children with the same law and finite positive mean m. Each generation is then on average m times the one before (our own), and the normalized population divides the size of generation n by mⁿ to cancel that growth (our own).

**Problem.** The normalized population is a nonnegative martingale, so its expected next value given the past equals its current value. It converges to a finite limit with probability one.

**How the definition helps.** Given the current generation, the next has mean m times its size, so dividing by mⁿ⁺¹ makes the conditional mean equal the current normalized value (our own). Nonnegative martingales converge almost surely, which gives the finite limit (our own).

**Wikipedia:** [Branching process](https://en.wikipedia.org/wiki/Branching_process). It says: “the expected size of generation n equals μⁿ where μ is the expected number of children of each individual.”

**Sources:**

- [David Williams, Probability with Martingales, Sections 0.2–0.7](https://assets.cambridge.org/97805214/06055/frontmatter/9780521406055_frontmatter.pdf)

### Removing the one-child case makes the extinction threshold exact

**Remember:** A critical population dies out unless every parent has exactly one child.

*Rules out counterexamples.* MSC 60J80 (Branching processes (Galton-Watson, birth-and-death, etc.)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** In a Galton–Watson process, each individual independently has a random number of children with the same law. Exclude the law that gives every individual exactly one child, which has mean one yet never dies out.

**Problem.** Start with one ancestor and suppose the mean child count is finite. Under this exclusion, extinction has probability one exactly when the mean is at most one.

**How the definition helps.** The extinction probability is the least fixed point in \[0,1\] of the offspring generating function, the mean of s raised to the child count (our own). Without the one-child law, convexity keeps this function above the diagonal on \[0,1) when the mean is at most one (our own). With mean above one, its slope at one exceeds one, which forces a fixed point below one (our own).

**Wikipedia:** [Galton–Watson process](https://en.wikipedia.org/wiki/Galton%E2%80%93Watson_process). It says: “the probability of final extinction is equal to 1 if E\[ξ₁\] ≤ 1”

**Sources:** none listed. No primary source with a working link was found.

### The offspring generating function selects the extinction probability

**Remember:** Average s to the child count to step extinction back a generation.

*True by definition.* MSC 60J80 (Branching processes (Galton-Watson, birth-and-death, etc.)), 60E10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The offspring generating function f(s) is the mean of s raised to the child count, for 0 ≤ s ≤ 1, with s⁰ = 1. Child lines are independent, so if each dies out within n generations with probability q, the parent’s line dies out within n + 1 with probability f(q).

**Problem.** Start with one ancestor and let each individual independently draw its child count from the same distribution. The extinction probability is the smallest number in \[0,1\] that the offspring generating function leaves unchanged.

**How the definition helps.** Extinction within n generations has probability fⁿ(0), the n-fold iterate, and these numbers increase to the extinction probability (our own). By continuity the limit is a fixed point, and by monotonicity fⁿ(0) stays below every fixed point, so it is the least one (our own). When the mean exceeds one, this rule rejects the fixed point one (our own).

**Wikipedia:** [Branching process](https://en.wikipedia.org/wiki/Branching_process). It says: “each of these lines must die out in m − 1 generations.”

**Sources:** none listed. No primary source with a working link was found.

### Condition on a σ-algebra, not on a single event of probability zero

**Remember:** Condition on an observation, never on one null event alone.

*Rules out counterexamples.* MSC 60A10 (Probabilistic measure theory), 28A50. arXiv math.PR. Level 3: graduate.

**Definition.** A conditional probability of A given an observation Y is a measurable function q of the observed value. Its integral over each measurable set B of values, against the law of Y, must be P(A ∩ {Y ∈ B}) (our own). This fixes q only up to null sets, so a single null event, such as one great circle, gets no fixed answer (our own).

**Problem.** For a uniform sphere point, shrinking latitude bands give uniform arclength on their equator. Treating the same great circle as a pair of opposite meridians, shrinking longitude bands give arclength density proportional to cos φ at latitude φ.

**How the definition helps.** The great circle has probability zero, so its conditional law depends on which observation’s bands shrink to it (our own). Latitude bands give equal area to equal longitude intervals, so their limit is uniform. Longitude bands are wider near the equator, with area proportional to cos φ at latitude φ by the spherical area formula.

**Wikipedia:** [Borel–Kolmogorov paradox](https://en.wikipedia.org/wiki/Borel%E2%80%93Kolmogorov_paradox), [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation). It says: “The concept of a conditional probability with regard to an isolated hypothesis whose probability equals 0 is inadmissible.”

**Sources:**

- [Kolmogoroff, A. (1933). Grundbegriffe der Wahrscheinlichkeitsrechnung. Springer, Berlin.](https://doi.org/10.1007/978-3-642-49888-6)

### Conditional expectation as an L² projection is the best mean-square predictor

**Remember:** Conditional expectation is the nearest guess among variables known from ℋ.

*True by definition.* MSC 60A10 (Probabilistic measure theory), 60G25. arXiv math.PR. Level 3: graduate.

**Definition.** For square-integrable X and a sub-σ-algebra ℋ, E(X \| ℋ) is the point nearest to X in the closed subspace of square-integrable ℋ-measurable variables, its orthogonal projection. So the error X − E(X \| ℋ) is orthogonal to every such variable.

**Problem.** Among all ℋ-measurable square-integrable random variables Y, E(X \| ℋ) minimizes the mean squared error E((X − Y)²). In regression language, the conditional mean of X given another variable Z is the best predictor of X from Z.

**How the definition helps.** The projection is by definition the nearest point, so it minimizes E((X − Y)²). Pythagoras in L² shows that the excess error of Y is E((E(X \| ℋ) − Y)²). Extending the definition to integrable variables needs a limit argument or the Radon–Nikodym theorem.

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation). It says: “This allows to define and prove the existence of the conditional expectation based on the Hilbert projection theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Conditional expectation as projection makes total variance Pythagoras

**Remember:** Residual and prediction are perpendicular, so their variances add.

*True by definition.* MSC 60A10 (Probabilistic measure theory), 46N30. arXiv math.PR. Level 3: graduate.

**Definition.** For square-integrable X and a sub-σ-algebra G, E\[X \| G\] is the orthogonal projection of X onto the square-integrable G-measurable variables. So the residual X − E\[X \| G\] is perpendicular to every such variable, including the centered prediction E\[X \| G\] − E\[X\] (our own).

**Problem.** If E\[X²\] is finite, then Var(X) = E\[Var(X \| G)\] + Var(E\[X \| G\]). Here Var(X \| G) = E\[(X − E\[X \| G\])² \| G\].

**How the definition helps.** X − E\[X\] is the sum of the residual and the centered prediction, which are perpendicular, so Pythagoras adds their squared lengths. The prediction has mean E\[X\], so its squared length is Var(E\[X \| G\]) (our own). Averaging the conditional residual square shows that the residual’s squared length is E\[Var(X \| G)\] (our own).

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation), [Law of total variance](https://en.wikipedia.org/wiki/Law_of_total_variance). It says: “This allows to define and prove the existence of the conditional expectation based on the Hilbert projection theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Conditional expectation defined as a Radon–Nikodym derivative

**Remember:** A coarse version of X that keeps every coarse average.

*Makes the theorem clean to state or prove.* MSC 60A10 (Probabilistic measure theory), 28A50. arXiv math.PR. Level 3: graduate.

**Definition.** Given integrable X and a sub-σ-algebra 𝓗, a conditional expectation is an integrable 𝓗-measurable variable with the same integral as X over every event in 𝓗. So it is a density, with respect to P on 𝓗, of the signed measure A ↦ E\[X 1<sub>A</sub>\] (our own).

**Problem.** For every integrable X and every sub-σ-algebra 𝓗, E(X \| 𝓗) exists and is unique up to a null set. In particular, one can condition on a continuous random variable Y, although each event {Y = y} has probability zero.

**How the definition helps.** That measure gives null events the value zero, so it is absolutely continuous with respect to P on 𝓗 (our own). The Radon–Nikodym theorem then gives a density, unique up to null sets. Taking 𝓗 = σ(Y) conditions on a continuous Y without dividing by P(Y = y) = 0 (our own).

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation), [Conditional probability](https://en.wikipedia.org/wiki/Conditional_probability). It says: “It was Andrey Kolmogorov who, in 1933, formalized it using the Radon–Nikodym theorem.”

**Sources:**

- [Kolmogoroff, A. (1933). Grundbegriffe der Wahrscheinlichkeitsrechnung. Springer, Berlin.](https://doi.org/10.1007/978-3-642-49888-6)

### Conditional expectations defined by event averages obey the tower property

**Remember:** Same averages on every event means the same conditional expectation.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 3: graduate.

**Definition.** For integrable X and a sub-σ-algebra G, E\[X \| G\] is a G-measurable integrable variable matching X’s integral over every event in G. Such variables agree almost surely.

**Problem.** If H and G are σ-algebras with H contained in G, then E\[E\[X \| G\] \| H\] = E\[X \| H\] almost surely.

**How the definition helps.** Each event of H lies in G, so E\[E\[X \| G\] \| H\] and X have the same integral on it (our own). By uniqueness, E\[E\[X \| G\] \| H\] equals E\[X \| H\] almost surely (our own).

**nLab:** [conditional expectation](https://ncatlab.org/nlab/show/conditional+expectation). It says: “Note that it does not follow from the preceding definition that the conditional expectation exists. This is a consequence of the Radon-Nikodym theorem”

**Paper or page:** [Tower Property of Conditional Expectation](https://proofwiki.org/wiki/Tower_Property_of_Conditional_Expectation). It says: “Then: E(E(X \| G) \| H) = E(X \| H) almost everywhere.”

**Sources:** none listed. No primary source with a working link was found.

### Testing laws against bounded continuous functions proves the continuous mapping theorem

**Remember:** A bounded continuous test after g is still a bounded continuous test.

*True by definition.* MSC 60B10 (Convergence of probability measures), 60B05. arXiv math.PR. Level 3: graduate.

**Definition.** Random elements Xₙ of a metric space converge in distribution to X if E f(Xₙ) tends to E f(X) for every bounded continuous real function f.

**Problem.** If Xₙ converges in distribution to X and g is continuous between metric spaces, then g(Xₙ) converges in distribution to g(X). The same holds for measurable g if X almost surely avoids its discontinuities.

**How the definition helps.** If f is bounded and continuous, so is f ∘ g, so the definition applied to f ∘ g gives the claim at once. With distribution functions, each g would need a separate argument, and only on the real line. The case with g discontinuous on a null set needs the portmanteau theorem with closed sets (our own).

**Wikipedia:** [Continuous mapping theorem](https://en.wikipedia.org/wiki/Continuous_mapping_theorem), [Convergence of measures](https://en.wikipedia.org/wiki/Convergence_of_measures). It says: “Note that F = f ∘ g is itself a bounded continuous functional. And so the claim follows from the statement above.”

**Sources:**

- [H. B. Mann and A. Wald, On Stochastic Limit and Order Relationships, Annals of Mathematical Statistics 14 (1943)](https://doi.org/10.1214/aoms/1177731415)

### The Lévy–Prokhorov metric turns weak convergence into convergence in a metric

**Remember:** Close laws differ by moving a little mass or losing a little.

*Makes the theorem clean to state or prove.* MSC 60B10 (Convergence of probability measures), 60B05. arXiv math.PR. Level 3: graduate.

**Definition.** The Lévy–Prokhorov distance between Borel probability measures μ and ν on a metric space is the infimum of the ε &gt; 0 that pass a test. For every Borel set A, the test asks μ(A) ≤ ν(Aᵋ) + ε and ν(A) ≤ μ(Aᵋ) + ε, where Aᵋ is the set of points closer than ε to A. So the test allows moving mass by less than ε and losing mass ε (our own).

**Problem.** On a separable metric space, convergence in the Lévy–Prokhorov metric is the same as weak convergence. If the base space is Polish, so is the space of probability measures with this metric.

**How the definition helps.** The Lévy–Prokhorov metrization theorem identifies convergence in this metric with weak convergence on separable spaces. For a complete separable base space, it also makes the space of probability measures complete and separable (our own).

**Wikipedia:** [Lévy–Prokhorov metric](https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Prokhorov_metric), [Convergence of measures](https://en.wikipedia.org/wiki/Convergence_of_measures). It says: “If (M, d) is separable, convergence of measures in the Lévy–Prokhorov metric is equivalent to weak convergence of measures.”

**Sources:**

- [Yu. V. Prokhorov, Convergence of Random Processes and Limit Theorems in Probability Theory, Theory of Probability and Its Applications 1 (1956)](https://doi.org/10.1137/1101016)

### The supremum over events makes total variation contract under measurable maps

**Remember:** Every event downstream was already an event upstream.

*True by definition.* MSC 60B10 (Convergence of probability measures), 62B10. arXiv math.PR, math.ST. Level 3: graduate.

**Definition.** The total variation distance between probability laws P and Q is the supremum of \|P(A) − Q(A)\| over all measurable events A.

**Problem.** A measurable map f sends a law P to the law of f(X) when X has law P. This map cannot increase the total variation distance between two laws.

**How the definition helps.** Each event B after f is the event f⁻¹(B) before f, with the same probabilities under both laws, so after f the supremum runs over fewer events (our own). The density formula, half the integral of \|p − q\|, does not show this directly (our own). It agrees with the event formula by taking A where p exceeds q.

**Wikipedia:** [Total variation distance of probability measures](https://en.wikipedia.org/wiki/Total_variation_distance_of_probability_measures). It says: “This result can be shown by noticing that the supremum in the definition is achieved exactly at the set where one distribution dominates the other.”

**Sources:** none listed. No primary source with a working link was found.

### Tightness stops probability mass from escaping to infinity

**Remember:** One compact set holds almost all the mass of every measure.

*Rules out counterexamples.* MSC 60B10 (Convergence of probability measures), 60B05, 28A33. arXiv math.PR. Level 3: graduate.

**Definition.** A family of probability measures is tight if no mass escapes to infinity uniformly. For each ε &gt; 0, one compact set K must have probability at least 1 − ε under every measure in the family.

**Problem.** By Prokhorov’s theorem, on a Polish space a family of probability measures is tight exactly when every sequence in it has a weakly convergent subsequence. Weak convergence means convergence of integrals of every bounded continuous function.

**How the definition helps.** One compact set must hold most of every measure’s mass, which excludes point masses drifting to infinity (our own), such as the masses at successive positive integers. Prokhorov’s theorem identifies tightness with relative compactness for weak convergence on a Polish space (our own). Weak convergence is metrizable there, which gives the subsequence criterion.

**Wikipedia:** [Tightness of measures](https://en.wikipedia.org/wiki/Tightness_of_measures). It says: “The intuitive idea is that a given collection of measures does not "escape to infinity".”

**Sources:**

- [Prokhorov, Yu. V. (1956). Convergence of random processes and limit theorems in probability theory. Theory of Probability and Its Applications 1, 157–214.](https://doi.org/10.1137/1101016)

### Weak-star convergence makes probability measures on compact metric spaces compact

**Remember:** Probability measures are positive functionals inside the compact dual unit ball.

*True by definition. Confidence: medium.* MSC 60B10 (Convergence of probability measures), 28A33. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** A Borel probability measure on a compact metric space integrates continuous real functions, giving a positive linear functional with value one at the constant one. These functionals lie in the dual unit ball, and weak convergence is weak-star convergence, that is, convergence at every continuous f.

**Problem.** On a compact metric space, every sequence of Borel probability measures has a weakly convergent subsequence with a probability measure as its limit.

**How the definition helps.** Banach–Alaoglu makes the dual unit ball weak-star compact, and positivity and the value one at the constant are closed conditions (our own). The continuous functions form a separable space, so this ball is metrizable and every sequence has a convergent subsequence. Riesz representation identifies the limit as a Borel probability measure (our own).

**Wikipedia:** [Convergence of measures](https://en.wikipedia.org/wiki/Convergence_of_measures), [Prokhorov's theorem](https://en.wikipedia.org/wiki/Prokhorov%27s_theorem). It says: “in this case weak convergence of measures is a special case of weak-\* convergence.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic functions show that one-dimensional projections determine multivariate laws

**Remember:** Each value of φ is one projection’s characteristic function at one.

*True by definition. Confidence: medium.* MSC 60E10 (Characteristic functions; other transforms), 60B10. arXiv math.PR. Level 3: graduate.

**Definition.** The characteristic function of a random vector X is φ(t) = E\[exp(i t·X)\], where t·X is the dot product and i² = −1. Its value at t is the characteristic function of the scalar t·X at 1, so the laws of all projections t·X determine φ (our own explanation).

**Problem.** If t·X and t·Y have the same law for every vector t, then X and Y have the same law. Further, if every t·Xₙ converges in distribution to t·X, then Xₙ converges in distribution to X.

**How the definition helps.** The laws of the projections give every value of φ, so uniqueness of characteristic functions gives the first claim (our own). For the second, convergence of every t·Xₙ makes φ converge pointwise, and Lévy’s continuity theorem gives convergence in distribution (our own).

**Wikipedia:** [Cramér–Wold theorem](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Wold_theorem). It says: “is uniquely determined by the totality of its one-dimensional projections.”

**Sources:** none listed. No primary source with a working link was found.

### Ordered couplings show stochastic dominance survives independent sums

**Remember:** Dominance means sampling both together with X always on top.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings). arXiv math.PR. Level 3: graduate.

**Definition.** A real variable X stochastically dominates Y if some joint sampling of copies with their laws, called a coupling, gives X′ ≥ Y′ almost surely.

**Problem.** Suppose X₁ dominates Y₁ and X₂ dominates Y₂. If X₁ and X₂ are independent and Y₁ and Y₂ are independent, then X₁ + X₂ dominates Y₁ + Y₂.

**How the definition helps.** Couple each pair independently of the other pair, and add the two inequalities X₁′ ≥ Y₁′ and X₂′ ≥ Y₂′ (our own explanation). Independence of the two couplings gives each sum its required law (our own explanation). This definition agrees with P(X ≤ t) ≤ P(Y ≤ t) for all t: build both copies from one uniform number through inverse distribution functions.

**nLab:** [stochastic order](https://ncatlab.org/nlab/show/stochastic+order). It says: “In decision theory, economics and related fields, this order is also known as first-order stochastic dominance, especially on the real line.”

**Wikipedia:** [Stochastic dominance](https://en.wikipedia.org/wiki/Stochastic_dominance). It says: “The third definition states that we can construct a pair of gambles X, Y with distributions ρ, ν, such that gamble X always pays at least as much as gamble Y.”

**Sources:**

- [V. Strassen, The existence of probability measures with given marginals, Annals of Mathematical Statistics 36 (1965)](https://doi.org/10.1214/aoms/1177700153)

### Sub-Gaussian variance proxies add for independent sums

**Remember:** Exponential moments below a Gaussian’s multiply, so the proxies add.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings). arXiv math.PR. Level 3: graduate.

**Definition.** A mean-zero variable X has sub-Gaussian variance proxy s² if its exponential moments are at most those of a normal variable with variance s². That is, E\[exp(tX)\] ≤ exp(s²t²/2) for all real t.

**Problem.** If independent mean-zero variables X and Y have variance proxies a² and b², their sum has variance proxy a² + b².

**How the definition helps.** Independence makes the exponential moment of X + Y the product of the two, so the bounds multiply and the exponents a²t²/2 and b²t²/2 add. A tail-bound definition would need a separate estimate (our own comparison).

**Wikipedia:** [Sub-Gaussian distribution](https://en.wikipedia.org/wiki/Sub-Gaussian_distribution). It says: “If independent, then use that the cumulant of independent random variables is additive.”

**Sources:**

- [R. Vershynin, High-Dimensional Probability, Cambridge University Press (2018)](https://doi.org/10.1017/9781108231596)

### Utility tests make first-order dominance imply second-order dominance

**Remember:** First order tests every nondecreasing utility; second order only concave ones.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings), 91B06. arXiv econ.TH, math.PR. Level 3: graduate.

**Definition.** For bounded payoffs, X dominates Y in the first order if every nondecreasing utility u gives E\[u(X)\] ≥ E\[u(Y)\]. Second-order dominance asks this only for nondecreasing concave u, so it uses fewer tests.

**Problem.** First-order dominance implies second-order dominance. Both orders are transitive.

**How the definition helps.** Every second-order test is also a first-order test, so passing all first-order tests passes all second-order ones. Transitivity follows by chaining the inequalities for each utility separately. The work lies in proving that these utility tests agree with the usual tests by distribution functions.

**Wikipedia:** [Stochastic dominance](https://en.wikipedia.org/wiki/Stochastic_dominance). It says: “These relations are transitive and increasingly more inclusive.”

**Sources:** none listed. No primary source with a working link was found.

### Utility tests show why a mean-preserving spread lowers expected utility

**Remember:** Adding fair noise cannot raise expected utility for a risk-averse buyer.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings), 91B06. arXiv econ.TH, math.PR. Level 3: graduate.

**Definition.** For bounded payoffs, A dominates B in the second order when every nondecreasing concave utility gives A at least as much expected utility. B is a mean-preserving spread of A if B has the law of A plus noise whose conditional mean given A is zero.

**Problem.** If B is a mean-preserving spread of A, then A dominates B in the second order.

**How the definition helps.** The utility definition makes this conditional Jensen’s inequality: for concave u, the conditional mean of u(A plus noise) given A is at most u(A). Taking expectations gives the comparison for each utility. The definition by integrals of distribution functions would instead need an inequality between the two distributions (our own comparison).

**Wikipedia:** [Stochastic dominance](https://en.wikipedia.org/wiki/Stochastic_dominance). It says: “If B is a mean-preserving spread of A, then A second-order stochastically dominates B.”

**Sources:**

- [Michael Rothschild and Joseph E. Stiglitz, Increasing risk: I. A definition, Journal of Economic Theory 2 (1970) 225–243](https://doi.org/10.1016/0022-0531(70)90038-4)

### Two particles test chaos

**Remember:** Chaos means every fixed group approaches independent draws from the same law.

*Makes the theorem clean to state or prove.* MSC 60F05 (Central limit and other weak theorems), 82B21. arXiv math.PR, math-ph. Level 3: graduate.

**Definition.** Laws of n particles are chaotic with limit μ if, for every fixed k, k labeled particles converge jointly in law to k independent samples from μ as n grows. The empirical measure puts mass 1/n at each particle position.

**Problem.** Assume the position space has a complete separable metric and each joint law is invariant under particle permutations. If the two-particle law converges to two independent samples from μ, the laws are chaotic with limit μ.

**How the definition helps.** For exchangeable particles and bounded continuous f, the one- and two-particle laws fix the mean and variance of the empirical average of f (our own). Two-particle convergence makes the limit variance zero, so the empirical measure tends to μ in probability (our own). Drawing k particles then differs little from drawing with replacement from the empirical measure (our own).

**Paper or page:** [Aspects of Coulomb gases](https://arxiv.org/abs/2108.10653v2). It says: “For all μ ∈ ℳ₁(E), the following properties are equivalent”

**Sources:**

- [Djalil Chafaï, Aspects of Coulomb gases](https://arxiv.org/abs/2108.10653v2)

### Lower semicontinuity makes the large deviations rate function unique

**Remember:** Small neighborhoods recover the value of a lower semicontinuous rate function.

*Rules out counterexamples. Confidence: medium.* MSC 60F10 (Large deviations). arXiv math.PR. Level 3: graduate.

**Definition.** A rate function I maps a metric space into \[0,∞\] and is lower semicontinuous: every sublevel set {x ∣ I(x) ≤ a} is closed. Equivalently, the infimum of I over shrinking balls around x tends to I(x) (our own).

**Problem.** If the same laws at the same scale satisfy a large deviation principle with two rate functions on a metric space, those functions coincide.

**How the definition helps.** The lower bound for I on an open ball around x and the upper bound for J on its closure give inf J over the closed ball ≤ I(x). Shrinking the ball, lower semicontinuity gives J(x) ≤ I(x), and exchanging I and J gives equality (our own). Raising the uniform law’s zero rate only at 0 on \[0,1\] keeps both bounds but breaks lower semicontinuity (our own).

**Wikipedia:** [Rate function](https://en.wikipedia.org/wiki/Rate_function). It says: “given a sequence of probability measures (μδ)δ&gt;0 on X satisfying the large deviation principle for two rate functions I and J, it follows that I(x) = J(x) for all x ∈ X.”

**Sources:** none listed. No primary source with a working link was found.

### The Laplace principle gives contraction by composing test functions

**Remember:** Compose the test function with the map to test the input.

*True by definition.* MSC 60F10 (Large deviations). arXiv math.PR. Level 3: graduate.

**Definition.** Xε satisfies the Laplace principle with rate I if ε log E\[exp(−h(Xε)/ε)\] tends to −inf(h + I) as ε tends to zero, for every bounded continuous h. The rate I is good if it is nonnegative and each set {I ≤ c} with c finite is compact.

**Problem.** Let Xε satisfy the Laplace principle with good rate I. For a continuous map f between complete separable metric spaces, f(Xε) satisfies it with rate J(y) = inf{I(x) \| f(x) = y}, an empty infimum being infinity.

**How the definition helps.** The test h ∘ f is bounded and continuous, and grouping inf(h ∘ f + I) by the value of f gives inf(h + J) (our own explanation). Each finite sublevel set of J is the image of a compact sublevel set of I, so J is good (our own explanation). A proof from the open- and closed-set bounds would instead check preimages separately (our own comparison).

**Wikipedia:** [Contraction principle (large deviations theory)](https://en.wikipedia.org/wiki/Contraction_principle_%28large_deviations_theory%29). It says: “the contraction principle is a theorem that states how a large deviation principle on one space "pushes forward”

**Paper or page:** [Large deviation principle for a stochastic nonlinear damped Schrodinger equation, Lemma 3.2 (Bryc's Lemma)](https://arxiv.org/abs/2510.06110v1), [Large deviation principle for a stochastic nonlinear damped Schrodinger equation, Lemma 3.1 (Varadhan's Lemma)](https://arxiv.org/abs/2510.06110v1). It says: “The Laplace principle implies the LDP with the same rate function.”

**Sources:**

- [P. Dupuis and R. S. Ellis, A Weak Convergence Approach to the Theory of Large Deviations, Wiley (1997)](https://doi.org/10.1002/9781118165904)

### Uniform integrability is exactly what L¹ convergence needs

**Remember:** Uniformly integrable means no member hides mass far out in the tail.

*Makes the theorem clean to state or prove.* MSC 60F25 (\\(L<sup>p\\</sup>)-limit theorems), 28A20. arXiv math.PR, math.CA. Level 3: graduate.

**Definition.** A family of random variables is uniformly integrable if the part of the mean coming from large values vanishes uniformly. That is, sup E(\|X\|·1{\|X\| ≥ K}) over the family tends to 0 as K → ∞.

**Problem.** For integrable random variables on a probability space, Vitali’s theorem characterizes L¹ convergence. Xₙ converges to X in L¹ exactly when Xₙ converges to X in probability and the sequence is uniformly integrable.

**How the definition helps.** Convergence in probability controls the bulk of the values, and uniform integrability controls the tail part of the mean, which is all that Vitali’s theorem needs. On (0,1) with uniform probability, let Xₙ be n on (0,1/n) and zero elsewhere (our own example). Then Xₙ tends to zero pointwise, but its mean stays one, all in the tail, so uniform integrability fails.

**Wikipedia:** [Uniform integrability](https://en.wikipedia.org/wiki/Uniform_integrability), [Vitali convergence theorem](https://en.wikipedia.org/wiki/Vitali_convergence_theorem). It says: “In probability terms, a sequence of random variables converging in probability also converge in the mean if and only if they are uniformly integrable.”

**Sources:**

- [G. Vitali, Sull'integrazione per serie, Rendiconti del Circolo Matematico di Palermo 23 (1907)](https://doi.org/10.1007/BF03013514)

### Markov kernels give infinite products of dependent steps without topology

**Remember:** Give each step's law given the past, and the whole sequence exists.

*Makes the theorem clean to state or prove.* MSC 60G05 (Foundations of stochastic processes), 28A35, 60J05. arXiv math.PR. Level 3: graduate.

**Definition.** A Markov kernel from E to F assigns to each point x of E a probability measure K(x,·) on F. Each map x ↦ K(x,A), for measurable A ⊆ F, must be measurable. With E the space of past histories, it gives the next step’s law given the past.

**Problem.** Given a starting law and Markov kernels on arbitrary measurable spaces, a unique probability measure on the infinite product has finite-dimensional laws built step by step from the kernels. This constructs Markov chains and Markov decision processes on any state space.

**How the definition helps.** Iterated integration of the kernels gives consistent finite-dimensional laws, and the Ionescu–Tulcea theorem extends them uniquely to the product σ-algebra (our own). Unlike Kolmogorov’s extension theorem, it needs no topology on the spaces (our own).

**Wikipedia:** [Ionescu-Tulcea theorem](https://en.wikipedia.org/wiki/Ionescu-Tulcea_theorem), [Kolmogorov extension theorem](https://en.wikipedia.org/wiki/Kolmogorov_extension_theorem). It says: “In particular, the individual events may be independent or dependent with respect to each other. Thus, the statement goes beyond the mere existence of countable product measures.”

**Sources:** none listed. No primary source with a working link was found.

### Progressive measurability makes a process stopped at a random time measurable

**Remember:** Jointly measurable in time and chance up to each time t.

*True by definition.* MSC 60G07 (General theory of stochastic processes), 60G40. arXiv math.PR. Level 3: graduate.

**Definition.** A process X is progressively measurable if, for each t, the map (s, ω) ↦ Xₛ(ω) on \[0, t\] × Ω is jointly measurable. Here \[0, t\] carries its Borel sets and Ω carries Fₜ. This is stronger than adapted, which asks only that each Xₜ be Fₜ-measurable.

**Problem.** Where a stopping time τ is finite, a progressively measurable X at time τ is measurable for the events known at time τ. Every adapted process with right- or left-continuous paths is progressively measurable.

**How the definition helps.** Joint measurability lets one insert the Fₜ-measurable time min(τ,t), so X at min(τ,t) is Fₜ-measurable and equals X at τ on {τ ≤ t} (our own). On \[0,t\], step processes built from grid values on the right or left are jointly measurable and converge by the matching path continuity (our own).

**Wikipedia:** [Progressively measurable process](https://en.wikipedia.org/wiki/Progressively_measurable_process). It says: “A progressively measurable process, while defined quite technically, is important because it implies the stopped process is measurable.”

**Sources:**

- [I. Karatzas and S. E. Shreve, Brownian Motion and Stochastic Calculus, 2nd ed., Springer](https://doi.org/10.1007/978-1-4612-0949-2)

### Spectral atoms obstruct Gaussian ergodicity

**Remember:** A frequency with positive mass leaves a shift-invariant random amplitude.

*Makes the theorem clean to state or prove.* MSC 60G10 (Stationary stochastic processes), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** For a real centered stationary Gaussian process on ℝ, continuous in mean square, the spectral measure is the finite measure on frequencies whose Fourier transform is the covariance function. An atom, a frequency with positive mass, gives the process a component at that frequency with a random amplitude (our own).

**Problem.** Time shifts are ergodic, meaning every shift-invariant event up to null sets has probability zero or one, exactly when the spectral measure has no atoms. A nondegenerate Gaussian random constant has an atom at frequency zero and is not ergodic.

**How the definition helps.** An atom gives a random amplitude that the shifts leave unchanged but that is not constant, so ergodicity fails, as the random constant shows (our own). Maruyama’s Gaussian ergodicity theorem gives the converse (our own).

**Paper or page:** [Langevin equation and fractional dynamics](https://arxiv.org/abs/1810.02412). It says: “A stationary Gaussian process is ergodic if and only if its spectral measure has no atoms.”

**Sources:**

- [Maruyama, The Harmonic Analysis of Stationary Stochastic Processes (1949)](https://doi.org/10.2206/kyushumfs.4.45)

### Stationarity on path space survives functions of whole paths

**Remember:** A map that commutes with the shift preserves shift invariance of the law.

*True by definition.* MSC 60G10 (Stationary stochastic processes), 37A50. arXiv math.PR, math.DS. Level 3: graduate.

**Definition.** A process (Xₙ) with n ≥ 0 is stationary if the law of its whole path is unchanged by the left shift, which drops the first entry.

**Problem.** Let (Xₙ) be stationary and let F be a measurable function of a path. Then Yₙ = F(Xₙ, Xₙ₊₁, Xₙ₊₂, …) is stationary.

**How the definition helps.** The path map x ↦ (F(σⁿx))ₙ commutes with the left shift σ, so it carries a shift-invariant law to a shift-invariant law (our own). The finite-tuple definition does not directly handle F depending on infinitely many times. The two definitions agree because events on finitely many coordinates determine a law on paths.

**nLab:** [stationary stochastic process](https://ncatlab.org/nlab/show/stationary+stochastic+process), [shift](https://ncatlab.org/nlab/show/shift). It says: “Equivalently, it is stationary if the complete joint distribution on Xᵀ is shift-invariant, i.e. it is a measure-preserving dynamical system.”

**Sources:** none listed. No primary source with a working link was found.

### Gaussian white noise gives Brownian motion independent increments by orthogonality

**Remember:** Covariance is inner product, so disjoint intervals give independent increments.

*True by definition. Confidence: medium.* MSC 60G15 (Gaussian processes), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** Gaussian white noise on the positive half-line is a centered jointly Gaussian family W(h), indexed by square-integrable h, with covariances equal to inner products. Set B(t) = W(1\_\[0,t\]), so increments over disjoint intervals come from orthogonal indicators (our own explanation).

**Problem.** The process B has independent increments, and B(t) − B(s) is normal with mean zero and variance t − s for s &lt; t. It has a Brownian version with continuous paths that agrees with B almost surely at each fixed time.

**How the definition helps.** Orthogonal indicators give uncorrelated increments, and uncorrelated jointly normal variables are independent (our own explanation). The squared norm of an interval indicator is its length, which gives the variance (our own explanation). The work lies in constructing the Gaussian family and in Kolmogorov’s continuity theorem for continuous paths (our own explanation).

**Paper or page:** [Limit theorems for Gaussian fields via Chaos Expansions and Applications, Proposition 2.2.2](https://arxiv.org/abs/2406.15801v2). It says: “Then there exists an isonormal Gaussian field over H. Moreover, when X, X' are isonormal Gaussian field over H, they are equal in law.”

**Sources:** none listed. No primary source with a working link was found.

### Pairings recover ordinary Gaussian products

**Remember:** The Wick product is the ordinary product with Gaussian variance divided out.

*True by definition.* MSC 60G15 (Gaussian processes). arXiv math.PR. Level 3: graduate.

**Definition.** For centered jointly Gaussian X₁,…,Xₙ and formal variables t₁,…,tₙ, put S = t₁X₁ + ⋯ + tₙXₙ. The ordinary product is the coefficient of t₁⋯tₙ in exp(S) (our own), and the Wick product is that coefficient in exp(S − Var(S)/2). The empty Wick product is one.

**Problem.** The ordinary product is a sum over all ways to pair disjoint indices, including the empty pairing. Each term multiplies the covariances of the pairs by the Wick product of the remaining variables.

**How the definition helps.** Since exp(S) = exp(S − Var(S)/2)·exp(Var(S)/2), compare the coefficients of t₁⋯tₙ (our own). Each pair chosen from exp(Var(S)/2) supplies one covariance (our own). The remaining indices take their coefficient from the first factor, which is their Wick product (our own).

**Wikipedia:** [Wick product](https://en.wikipedia.org/wiki/Wick_product). It says: “For the higher-order products the adjustment involves subtracting off lower order (ordinary) products of the random variables”

**Paper or page:** [On a pinning model in correlated Gaussian random environments](https://arxiv.org/abs/2501.00445). It says: “Let $(\\omega \_n)<sub>n\\in \\mathbb N</sub>$ be Gaussian. Then\\\[ \\omega \_{\\boldsymbol {n}<sub>\\llbracket m\\rrbracket </sub>}=\\sum <sub>j=0</sub><sup>{</sup>\[\\frac{m}{2}\]}\\sum \_{\\substack {B\\subset \\llbracket m \\rrbracket \\\\ \|B\|=m-2j}}\\omega \_{\\boldsymbol {n}<sub>B</sub>}<sup>\\diamond</sup> \\mathbb {E}\[\\omega \_{\\boldsymbol {n}<sub>\\llbracket m \\rrbracket \\backslash B</sub>}\], \\\]”

**Sources:**

- [On a pinning model in correlated Gaussian random environments](https://arxiv.org/abs/2501.00445)

### Modifications let Kolmogorov's theorem give Brownian motion continuous paths

**Remember:** A modification agrees almost surely at each fixed time.

*Makes the theorem clean to state or prove.* MSC 60G17 (Sample path properties), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** A modification (or version) of a process X is a process X̃ with X̃ₜ = Xₜ with probability 1 at each fixed time t. It has the same finite-dimensional laws as X, which are all a moment bound can see, but its paths can look very different.

**Problem.** Let X take values in a complete separable metric space on a compact time interval, with E\[d(Xₜ,Xₛ)ᵅ\] ≤ K\|t−s\|¹⁺ᵝ for all s,t and some α,β,K &gt; 0. Then X has a modification with Hölder paths of every positive order below β/α, which gives Brownian motion a continuous version.

**How the definition helps.** Moment bounds see only finitely many times at once, so they cannot control the paths of X, only of some modification. For U uniform on \[0, 1\], let Xₜ be 1 when t = U and 0 otherwise (our own example). Every path is discontinuous, yet X is a modification of the zero process.

**Wikipedia:** [Kolmogorov continuity theorem](https://en.wikipedia.org/wiki/Kolmogorov_continuity_theorem). It says: “a stochastic process that satisfies certain constraints on the moments of its increments will be continuous (or, more precisely, have a "continuous version").”

**Sources:** none listed. No primary source with a working link was found.

### Requiring continuous paths gives Brownian motion one law on path space

**Remember:** Fixed-time laws cannot see paths, so put continuity in the definition.

*Makes the theorem clean to state or prove.* MSC 60G17 (Sample path properties), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** Brownian motion starts at zero, has independent centered Gaussian increments with variance equal to elapsed time, and has continuous paths almost surely. Two processes are modifications of each other if they agree almost surely at each fixed time, and indistinguishable if they agree at all times outside one null set.

**Problem.** Any two almost surely continuous modifications of the same process are indistinguishable, so the continuous version is unique up to a null set. The law of Brownian motion is therefore one measure, Wiener measure, on the space of continuous paths.

**How the definition helps.** Two modifications agree at all rational times outside one null set, and continuous paths that agree on the rationals agree everywhere (our own). Evaluations at rational times generate the Borel σ-algebra on continuous path space, so the finite-dimensional laws fix Wiener measure (our own).

**Wikipedia:** [Wiener process](https://en.wikipedia.org/wiki/Wiener_process), [Stochastic process](https://en.wikipedia.org/wiki/Stochastic_process), [Kolmogorov continuity theorem](https://en.wikipedia.org/wiki/Kolmogorov_continuity_theorem). It says: “Pre-Brownian motions do not necessarily have continuous paths, but by Kolmogorov's continuity criterion, there exists a modification of W̃ that does. Therefore, the Wiener process W can be defined as a pre-Brownian motion that has continuous paths.”

**Sources:**

- [N. Wiener, Differential-Space, Journal of Mathematics and Physics 2 (1923)](https://doi.org/10.1002/sapm192321131)

### The Skorokhod topology makes the space of paths with jumps Polish

**Remember:** Let the clock bend a little, and nearby jumps become close.

*Makes the theorem clean to state or prove.* MSC 60G17 (Sample path properties), 60F17, 60B10. arXiv math.PR. Level 3: graduate.

**Definition.** A càdlàg path on \[0,1\] is right-continuous before 1 and has a left limit at every positive time. Paths xₙ converge to x in the Skorokhod J₁ sense if, after a small change of clock, they are uniformly close to x. Precisely, increasing homeomorphisms λₙ of \[0,1\] must exist with λₙ → identity and xₙ ∘ λₙ → x, both uniformly.

**Problem.** With the Skorokhod topology, the space of càdlàg paths is Polish, that is separable with a complete compatible metric. So Prokhorov's theorem and tightness criteria apply, and limit theorems for processes with jumps can be stated as weak convergence on this space.

**How the definition helps.** The change of clock lets jumps at nearby times become close, while under uniform distance the distinct step paths 1\_\[t,1\] stay one unit apart (our own). Skorokhod’s metrization theorem gives the J₁ topology a complete separable metric, so Prokhorov’s theorem applies (our own).

**Wikipedia:** [Càdlàg](https://en.wikipedia.org/wiki/C%C3%A0dl%C3%A0g), [Stochastic process](https://en.wikipedia.org/wiki/Stochastic_process). It says: “Skorokhod space can be assigned a topology that intuitively allows us to "wiggle space and time a bit" (whereas the traditional topology of uniform convergence only allows us to "wiggle space a bit").”

**Sources:**

- [A. V. Skorokhod, Limit Theorems for Stochastic Processes, Theory of Probability and Its Applications 1 (1956)](https://doi.org/10.1137/1101022)

### The cumulative event test makes minima and maxima stopping times

**Remember:** Whether the stop has happened by time t is known at t.

*True by definition.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory). arXiv math.PR. Level 3: graduate.

**Definition.** A filtration (Fₜ) is an increasing family of σ-algebras. A random time τ is a stopping time if, for every t, the event {τ ≤ t} that τ has happened by t lies in Fₜ.

**Problem.** For two stopping times of the same filtration, their minimum and their maximum are stopping times.

**How the definition helps.** {min(τ₁,τ₂) ≤ t} is the union and {max(τ₁,τ₂) ≤ t} the intersection of {τ₁ ≤ t} and {τ₂ ≤ t}, which are both in Fₜ (our own). An exact-time test with {τ = t} fails in continuous time, because a σ-algebra need not contain an uncountable union of its events (our own).

**Wikipedia:** [Stopping time](https://en.wikipedia.org/wiki/Stopping_time). It says: “then their minimum τ₁ ∧ τ₂, their maximum τ₁ ∨ τ₂, and their sum τ₁ + τ₂ are also stopping times.”

**Sources:** none listed. No primary source with a working link was found.

### The usual conditions make hitting times of measurable sets into stopping times

**Remember:** Add null sets and the instant future, and hitting times stop.

*Makes the theorem clean to state or prove.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60G07. arXiv math.PR. Level 3: graduate.

**Definition.** A filtration satisfies the usual conditions if it is right-continuous and complete. Right-continuous means each Fₜ is the intersection of all Fₛ with s &gt; t, and complete means F₀ contains every subset of every null event.

**Problem.** The début theorem: under the usual conditions, the first time a progressively measurable process enters a measurable set is a stopping time. That is, the event that it has entered by time t is known at time t.

**How the definition helps.** Completeness lets the measurable projection theorem, whose output is measurable only up to null sets, place {τ &lt; t} in Fₜ (our own). Right-continuity then puts {τ ≤ t}, the intersection of the events {τ &lt; t + 1/n}, in Fₜ (our own).

**Wikipedia:** [Hitting time](https://en.wikipedia.org/wiki/Hitting_time), [Filtration (probability theory)](https://en.wikipedia.org/wiki/Filtration_%28probability_theory%29). It says: “The Début theorem says that the hitting time of a measurable set F, for a progressively measurable process with respect to a right continuous and complete filtration, is a stopping time.”

**Sources:**

- [C. Dellacherie, Capacités et processus stochastiques, Springer, 1972](https://doi.org/10.1007/978-3-662-59107-9)

### The σ-algebra at a stopping time makes the strong Markov property statable

**Remember:** Information up to a random time is a σ-algebra too.

*Makes the theorem clean to state or prove.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60J25. arXiv math.PR. Level 3: graduate.

**Definition.** For a stopping time τ, the σ-algebra at τ holds the events known by time τ. These are the events A for which A ∩ {τ ≤ t} is known at time t, for every t.

**Problem.** Brownian motion has the strong Markov property for its usual augmented natural filtration. Its increments after any almost surely finite stopping time τ form a Brownian motion independent of the σ-algebra at τ.

**How the definition helps.** This σ-algebra names the past that the future increments must be independent of, so the strong Markov property can be stated (our own). The strong Markov theorem for Brownian motion proves the independence and the Brownian law of the increments (our own).

**Wikipedia:** [Markov property](https://en.wikipedia.org/wiki/Markov_property), [Stopping time](https://en.wikipedia.org/wiki/Stopping_time). It says: “The term strong Markov property is similar to the Markov property, except that the meaning of "present" is defined in terms of a random variable known as a stopping time.”

**Sources:**

- [G. A. Hunt, Some theorems concerning Brownian motion, Transactions of the American Mathematical Society 81 (1956)](https://doi.org/10.1090/S0002-9947-1956-0079377-3)
- [E. B. Dynkin and A. A. Yushkevich, Strong Markov Processes, Theory of Probability and Its Applications 1 (1956)](https://doi.org/10.1137/1101012)

### Conditional expectation as projection makes martingale increments orthogonal

**Remember:** Each increment is a projection error and is perpendicular to the past.

*True by definition. Confidence: medium.* MSC 60G42 (Martingales with discrete parameter). arXiv math.PR. Level 3: graduate.

**Definition.** For square-integrable variables, conditional expectation given F is orthogonal projection onto the square-integrable F-measurable variables. A square-integrable martingale is an adapted sequence whose projection at each step onto the previous information is the previous value. So each increment is perpendicular to everything known before it (our own explanation).

**Problem.** For a square-integrable martingale, M₀ and all later increments are pairwise orthogonal. The expected square of Mₙ equals E\[M₀²\] plus the sum of the expected squares of the first n increments.

**How the definition helps.** Each increment is perpendicular to M₀ and to all earlier increments, which are known at the preceding step, so Pythagoras adds the expected squares (our own explanation). With event averages, one must derive this orthogonality by testing the increment against variables known at the preceding step (our own comparison).

**nLab:** [martingale](https://ncatlab.org/nlab/show/martingale). It says: “one takes averages over the data which are not yet known”

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation). It says: “is orthogonal to the space M of all functions of Y.”

**Sources:** none listed. No primary source with a working link was found.

### Class D is exactly the condition for the Doob–Meyer decomposition

**Remember:** Values at all finite stopping times are uniformly integrable.

*Makes the theorem clean to state or prove.* MSC 60G44 (Martingales with continuous parameter), 60G40. arXiv math.PR. Level 3: graduate.

**Definition.** A càdlàg submartingale Z is of class D if its values Zτ at all finite stopping times τ form a uniformly integrable family. So no Zτ hides much mass in its tail.

**Problem.** Assume the usual filtration conditions and let Z be a càdlàg submartingale of class D. Then Z decomposes into a uniformly integrable martingale and a predictable increasing process starting at zero. The decomposition is unique up to indistinguishability.

**How the definition helps.** Class D asks for uniform integrability exactly at the stopping times that the decomposition uses, which lets the martingale part be uniformly integrable (our own). The Doob–Meyer theorem constructs the predictable increasing part and proves uniqueness.

**Wikipedia:** [Doob–Meyer decomposition theorem](https://en.wikipedia.org/wiki/Doob%E2%80%93Meyer_decomposition_theorem). It says: “In honor of Doob, Meyer used the term "class D" to refer to the class of supermartingales for which his unique decomposition theorem applied.”

**Sources:**

- [Meyer, P.-A. (1962). A decomposition theorem for supermartingales. Illinois Journal of Mathematics 6, 193–205.](https://doi.org/10.1215/ijm/1255632318)

### Quadratic variation lets Lévy characterize Brownian motion among continuous martingales

**Remember:** Quadratic variation sums squared increments; Brownian motion’s equals elapsed time.

*Makes the theorem clean to state or prove.* MSC 60G44 (Martingales with continuous parameter), 60H05, 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** The quadratic variation \[M\]ₜ of a continuous local martingale M is the sum of its squared increments over \[0,t\]. Precisely, it is the limit in probability along deterministic partitions whose mesh tends to zero.

**Problem.** Lévy's characterization: a continuous local martingale starting at 0 with quadratic variation t at time t is a standard Brownian motion. No Gaussian assumption is made.

**How the definition helps.** With \[M\]ₜ = t, Itô’s formula makes exp(iuMₜ + u²t/2) a local martingale for each real u, bounded on finite intervals and so a true martingale (our own). Conditioning at an earlier time then gives each increment the Gaussian characteristic function, independent of the past (our own).

**Wikipedia:** [Wiener process](https://en.wikipedia.org/wiki/Wiener_process). It says: “A continuous (local) martingale W with W₀ = 0 is a Wiener process if and only if its quadratic variation is \[W, W\]ₜ = t”

**Sources:**

- [H. Kunita and S. Watanabe, On Square Integrable Martingales, Nagoya Mathematical Journal 30 (1967)](https://doi.org/10.1017/S0027763000012484)

### Using quadratic variation as a clock turns continuous martingales into Brownian motion

**Remember:** Run a continuous martingale on its own clock, and it is Brownian.

*Makes the theorem clean to state or prove.* MSC 60G44 (Martingales with continuous parameter), 60H05, 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** For a continuous local martingale M from zero, ⟨M⟩ is its quadratic variation, the continuous adapted increasing process from zero making M² − ⟨M⟩ a local martingale. Use it as a clock: Tₜ = inf{s ≥ 0 ∣ ⟨M⟩ₛ &gt; t}, with inf ∅ = ∞, is the first time this clock passes t.

**Problem.** Let M be a continuous local martingale with M₀ = 0 whose quadratic variation ⟨M⟩ tends to infinity. Then B, the value of M at time Tₜ, is a Brownian motion. And M at time t equals B at time ⟨M⟩ₜ.

**How the definition helps.** Run on this clock, M has quadratic variation exactly t at time t, so Lévy’s characterization makes it Brownian. The condition that ⟨M⟩ tends to infinity makes every Tₜ finite; without it one may need to enlarge the probability space. B is Brownian for the time-changed filtration, not for the original one.

**Wikipedia:** [Dubins–Schwarz theorem](https://en.wikipedia.org/wiki/Dubins%E2%80%93Schwarz_theorem). It says: “the Dubins–Schwarz theorem (or Dambis–Dubins–Schwarz theorem) is a theorem that says all continuous local martingales and martingales are time-changed Brownian motions.”

**Sources:**

- [L. E. Dubins and G. Schwarz, On Continuous Martingales, Proceedings of the National Academy of Sciences 53 (1965)](https://doi.org/10.1073/pnas.53.5.913)

### Semimartingales are exactly the good integrators

**Remember:** Good integrators turn bounded simple integrands into integrals bounded in probability.

*True by definition.* MSC 60G48 (Generalizations of martingales), 60H05. arXiv math.PR. Level 3: graduate.

**Definition.** An adapted càdlàg process is a good integrator if, at each finite time t, its integrals of simple predictable integrands bounded by one are bounded in probability. A semimartingale is an adapted càdlàg process that is a local martingale plus an adapted process of locally finite variation.

**Problem.** By the Bichteler–Dellacherie theorem, an adapted càdlàg process is a semimartingale if and only if it is a good integrator. So semimartingales are the largest class of integrators for which the stochastic integral has this continuity.

**How the definition helps.** The good-integrator definition puts the continuity of the integral, which is what extends it to general integrands, into the definition itself (our own reading). The Bichteler–Dellacherie theorem is the hard step: this continuity forces the decomposition into a local martingale and a finite-variation part.

**Wikipedia:** [Semimartingale](https://en.wikipedia.org/wiki/Semimartingale). It says: “Semimartingales are "good integrators", forming the largest class of processes with respect to which the Itô integral and the Stratonovich integral can be defined.”

**Sources:**

- [Bichteler, K. (1981). Stochastic integration and Lᵖ-theory of semimartingales. Annals of Probability 9, 49–89.](https://doi.org/10.1214/aop/1176994509)

### Semimartingales survive every absolutely continuous change of measure

**Remember:** Noise plus drift: a new measure only moves noise into drift.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60G48 (Generalizations of martingales), 60H05. arXiv math.PR. Level 3: graduate.

**Definition.** A semimartingale is an adapted càdlàg process that splits into a local martingale (the noise) plus an adapted process of finite variation (the drift) on every bounded time interval. A measure Q is absolutely continuous with respect to P if every P-null event is Q-null.

**Problem.** If Q is absolutely continuous with respect to P, then every P-semimartingale is a Q-semimartingale. For Brownian motion, Girsanov's theorem gives the explicit new drift.

**How the definition helps.** Under Q, the local martingale part becomes a Q-local martingale plus a finite-variation correction, so the noise-plus-drift split survives (our own). For Brownian motion, Girsanov's theorem gives this correction as an explicit drift (our own).

**Wikipedia:** [Girsanov theorem](https://en.wikipedia.org/wiki/Girsanov_theorem). It says: “if Q is a measure being absolutely continuous with respect to P, then every P-semimartingale is also a Q-semimartingale.”

**Sources:**

- [I. V. Girsanov, On Transforming a Certain Class of Stochastic Processes by Absolutely Continuous Substitution of Measures, Theory of Probability and Its Applications 5 (1960)](https://doi.org/10.1137/1105027)

### The good integrator definition preserves semimartingales under smaller filtrations

**Remember:** Fewer integrands to test means fewer chances to fail.

*True by definition. Confidence: medium.* MSC 60G48 (Generalizations of martingales), 60H05. arXiv math.PR. Level 3: graduate.

**Definition.** An adapted càdlàg process X is a good integrator if, for every finite t, the integrals over \[0,t\] against X of all simple predictable integrands bounded by one form a family bounded in probability. This is a test on integrands built only from the filtration's information (our own explanation).

**Problem.** Let X be a semimartingale for filtration F. If X is also adapted to a smaller filtration G, then X is also a semimartingale for G.

**How the definition helps.** Every simple predictable integrand for G is also one for F, with the same integral, so the tests for G are among the tests for F that X already passes (our own explanation). The Bichteler–Dellacherie theorem shows that good integrators are exactly the semimartingales. The decomposition definition is harder here, because the local martingale part need not be adapted to G (our own comparison).

**Wikipedia:** [Semimartingale](https://en.wikipedia.org/wiki/Semimartingale). It says: “The property of being a semimartingale is preserved under shrinking the filtration.”

**Sources:**

- [P. E. Protter, Stochastic Integration and Differential Equations, 2nd edition, Springer (2005)](https://doi.org/10.1007/978-3-662-10061-5)

### Continuity in probability rules out wild Lévy processes

**Remember:** Small time steps bring small moves, so paths can be tamed.

*Rules out counterexamples. Confidence: medium.* MSC 60G51 (Processes with independent increments; Lévy processes), 60E07. arXiv math.PR. Level 3: graduate.

**Definition.** A Lévy process starts at 0, has independent and stationary increments, and is continuous in probability, so small time steps make large moves unlikely. Precisely, for every ε &gt; 0, the probability that \|Xₜ₊ₕ − Xₜ\| &gt; ε tends to 0 as h tends to 0.

**Problem.** Every Lévy process has a version with right-continuous paths that have left limits.

**How the definition helps.** With continuity in probability, the regularization theorem for processes with stationary independent increments gives a càdlàg version (our own). The condition rules out the deterministic process Xₜ = f(t) with f additive but not linear (our own). Its increments are stationary and independent, yet f is unbounded on every interval (our own).

**Wikipedia:** [Lévy process](https://en.wikipedia.org/wiki/L%C3%A9vy_process). It says: “If X is a Lévy process then one may construct a version of X such that t ↦ Xₜ is almost surely right-continuous with left limits.”

**Sources:** none listed. No primary source with a working link was found.

### Stationary independent increments make the law at time 1 infinitely divisible

**Remember:** Cut \[0,1\] into n equal steps; X₁ splits into n copies.

*Makes the theorem clean to state or prove.* MSC 60G51 (Processes with independent increments; Lévy processes), 60E07. arXiv math.PR. Level 3: graduate.

**Definition.** A Lévy process starts at 0, is continuous in probability, and has independent stationary increments, so increments over disjoint steps of equal length are independent copies of one another. A law is infinitely divisible if, for each n, it is the law of a sum of n independent identically distributed variables.

**Problem.** Lévy processes correspond one to one, in law, with infinitely divisible distributions, through the law of X at time 1. The Lévy–Khintchine formula describes them all by a drift, a Gaussian part and a jump measure.

**How the definition helps.** Splitting \[0,1\] into n equal intervals writes X₁ as a sum of n independent increments with the same law, so its law is infinitely divisible (our own). For the converse and uniqueness in law, the Lévy–Khintchine formula and the existence theorem for Lévy processes do the work (our own).

**Wikipedia:** [Lévy process](https://en.wikipedia.org/wiki/L%C3%A9vy_process). It says: “Conversely, for each infinitely divisible probability distribution F, there is a Lévy process X such that the law of X₁ is given by F.”

**Sources:**

- [K. Itô, On stochastic processes (I) (Infinitely divisible laws of probability), Japanese Journal of Mathematics 18 (1941)](https://doi.org/10.4099/jjm1924.18.0_261)

### Augmented filtrations give Feller processes càdlàg strong Markov versions

**Remember:** A semigroup continuous at zero, and a filtration that sees right limits.

*Makes the theorem clean to state or prove.* MSC 60G53 (Feller processes), 60G40, 60J25. arXiv math.PR. Level 3: graduate.

**Definition.** A Feller process is a time-homogeneous Markov process whose transition operators Pₜ map C₀, the continuous functions vanishing at infinity, into itself, with ‖Pₜf − f‖∞ tending to zero as t decreases to zero for every f in C₀. An augmented filtration is right-continuous and contains, from time zero, all subsets of null events.

**Problem.** Let X be a Feller process for an augmented filtration on a locally compact separable metric state space. Then X has a càdlàg modification with the strong Markov property.

**How the definition helps.** Feller continuity lets the Markov property pass to stopping times approximated from the right by discrete times, and a right-continuous filtration holds these right limits (our own). The càdlàg version comes from supermartingale convergence along rational times, and completeness keeps it adapted (our own). The Markov property alone does not give the strong Markov property.

**Wikipedia:** [Markov property](https://en.wikipedia.org/wiki/Markov_property), [Feller process](https://en.wikipedia.org/wiki/Feller_process), [Filtration (probability theory)](https://en.wikipedia.org/wiki/Filtration_%28probability_theory%29). It says: “If the filtration (𝓕ₜ)ₜ≥₀ is augmented, then X has a modification with right-continuous (even càdlàg) paths, and this modification has the strong Markov property.”

**Sources:**

- [W. Feller, The Parabolic Differential Equations and the Associated Semi-Groups of Transformations, Annals of Mathematics 55 (1952)](https://doi.org/10.2307/1969644)

### Conditioning preserves determinantal particle laws

**Remember:** Empty sites follow I − K; conditioning is a Schur complement.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR, math-ph. Level 3: graduate.

**Definition.** A finite determinantal process picks a random set of sites using a matrix K, so that given sites are all occupied with probability equal to the minor of K on those rows and columns. Its empty sites form a determinantal process with kernel I − K, so the chance that given sites are all empty is also a minor.

**Problem.** Conditioning a finite determinantal process to leave a specified set empty gives a determinantal process on the remaining sites. This holds when the conditioning event has positive probability.

**How the definition helps.** Conditioning on a set of holes divides minors of I − K by the positive minor for those holes (our own). By the block determinant formula, this ratio is a principal minor of a Schur complement, so the holes among the remaining sites stay determinantal (our own). Taking complements again gives the conditional particle kernel (our own).

**Paper or page:** [Determinantal point processes conditioned on randomly incomplete configurations](https://arxiv.org/abs/2112.10642v2). It says: “Then Pᶿ₍∣∅₎ is also a DPP”

**Sources:**

- [\[, ', T, o, m,  , C, l, a, e, y, s, ', ,,  , ', G, a, b, r, i, e, l,  , G, l, e, s, n, e, r, ', \], Determinantal point processes conditioned on randomly incomplete configurations](https://arxiv.org/abs/2112.10642v2)

### Paired kernels give equal particle counts

**Remember:** The count law sees only eigenvalues, and W\*W, WW\* share them.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR, math-ph. Level 3: graduate.

**Definition.** A finite determinantal process with kernel K contains each set A with probability det(K<sub>A</sub>), the minor on the rows and columns in A, and its point count N satisfies E\[zᴺ\] = det(I + (z − 1)K) (our own). For a rectangular matrix W with singular values at most one, the kernels W\*W and WW\* (W\* the conjugate transpose) share their nonzero eigenvalues (our own).

**Problem.** The determinantal processes with kernels W\*W and WW\* have the same distribution for their total number of points.

**How the definition helps.** det(I + (z − 1)K) is the product of 1 + (z − 1)λ over the eigenvalues λ of K, and zero eigenvalues give factors of one, so the two count laws agree (our own). The generating function formula follows by expanding the determinant in principal minors (our own).

**Paper or page:** [Partial Isometries, Duality, and Determinantal Point Processes](https://arxiv.org/abs/1903.04945v4). It says: “P(Ξ₁⁽Λ₂⁾(Λ₁)=m) = P(Ξ₂⁽Λ₁⁾(Λ₂)=m)”

**Sources:**

- [\[, ', M, a, k, o, t, o,  , K, a, t, o, r, i, ', ,,  , ', T, o, m, o, y, u, k, i,  , S, h, i, r, a, i, ', \], Partial Isometries, Duality, and Determinantal Point Processes](https://arxiv.org/abs/1903.04945v4)

### Poisson point processes defined by counts are closed under superposition

**Remember:** Add counts rather than merge waiting times.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR. Level 3: graduate.

**Definition.** A Poisson point process with mean measure Λ is described by its counts: a random counting measure N whose counts on disjoint measurable sets are independent. Each count N(A) is Poisson with mean Λ(A) if this is finite, and is infinite almost surely otherwise.

**Problem.** Superpose independent Poisson point processes by adding their counting measures on the same space. If the sum of their mean measures is finite on bounded sets, the result is Poisson with that summed mean measure.

**How the definition helps.** With counts as the definition, superposition adds independent Poisson counts, and a sum of independent Poisson variables is Poisson with the summed mean (our own explanation). Counts on disjoint sets come from separate independent groups of variables, so they stay independent (our own explanation). A waiting-time definition would need the memoryless property of exponential waits instead (our own comparison).

**Wikipedia:** [Poisson point process](https://en.wikipedia.org/wiki/Poisson_point_process). It says: “will also be a Poisson point process with mean measure”

**Paper or page:** [Sum of Independent Poisson Random Variables is Poisson](https://proofwiki.org/wiki/Sum_of_Independent_Poisson_Random_Variables_is_Poisson). It says: “Then their sum X + Y is distributed: X + Y ∼ Poisson(λ₁ + λ₂)”

**Sources:**

- [J. F. C. Kingman, Poisson Processes, Oxford University Press (1992)](https://doi.org/10.1093/oso/9780198536932.001.0001)

### Poisson point processes defined by counts stay Poisson under measurable maps

**Remember:** Count image points by counting the original points in their preimages.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60G57. arXiv math.PR. Level 3: graduate.

**Definition.** A Poisson point process with mean measure Λ is described by its counts: a random counting measure with independent counts on disjoint measurable sets. Each measurable set A has a Poisson count with mean Λ(A) if this is finite, and an infinite count almost surely otherwise.

**Problem.** Let f be a measurable map, and suppose the target is a countable union of sets B with Λ(f⁻¹(B)) finite. Then the image counting measure is Poisson with mean measure B ↦ Λ(f⁻¹(B)).

**How the definition helps.** The count of image points in a set B is the original count in f⁻¹(B), which is Poisson with mean Λ(f⁻¹(B)) (our own explanation). Disjoint target sets have disjoint preimages, so their counts are independent (our own explanation). A waiting-time construction gives no such proof, since f can reorder or merge the points (our own comparison).

**Wikipedia:** [Poisson point process](https://en.wikipedia.org/wiki/Poisson_point_process). It says: “the resulting mapped (or transformed) collection of points also form a Poisson point process, and this result is sometimes referred to as the mapping theorem.”

**Sources:**

- [J. F. C. Kingman, Poisson Processes, Oxford University Press (1992)](https://doi.org/10.1093/oso/9780198536932.001.0001)

### Variance subtraction gives mass martingales

**Remember:** Divide each exponential by its mean, and the total stays fair.

*True by definition.* MSC 60G57 (Random measures), 60G60. arXiv math.PR. Level 3: graduate.

**Definition.** Build a random density by adding independent, jointly measurable, centered real Gaussian layers on a space with a fixed finite measure. After n layers, with sum S at a point, the density is exp(γS − γ²Var(S)/2) for fixed real γ, which is the exponential divided by its own mean.

**Problem.** The integral of this density over any fixed measurable set forms a nonnegative martingale. Given the first n layers, the next integral has conditional mean equal to the current integral.

**How the definition helps.** Subtracting half the variance divides by the mean, so the factor from the next independent layer has conditional mean one at each point (our own). Integrating over the set, which is allowed because the factors are nonnegative, gives the martingale identity (our own). Without the correction, each layer also multiplies the mean by a deterministic variance factor.

**Paper or page:** [Subcritical Gaussian Multiplicative Chaos in the Wiener Space: Construction, Moments and Volume Decay](https://arxiv.org/abs/2211.08996). It says: “For every Borel set $A \\subset \\Omega $ and $\\gamma &gt;0$, $$ \\left ( \\int \_A \\exp \\left \\{ \\gamma {H}<sub>T</sub>(\\omega ) - \\frac {\\gamma ^2}{2}T (\\phi \\star \\phi )(0) \\right \\} \\d \\P \_0(\\omega ) \\right )<sub>T&gt;0</sub> $$ is a martingale.”

**Sources:**

- [Subcritical Gaussian Multiplicative Chaos in the Wiener Space: Construction, Moments and Volume Decay](https://arxiv.org/abs/2211.08996)

### Boundary energy governs Gaussian shifts

**Remember:** Finite energy and zero on the boundary: only such shifts go unnoticed.

*Rules out counterexamples.* MSC 60G60 (Random fields). arXiv math.PR. Level 3: graduate.

**Definition.** On a bounded smooth planar domain, the zero-boundary Gaussian free field is the centered Gaussian random distribution with covariance the inverse of −Δ under zero boundary values. Its energy space, the completion of smooth compactly supported functions in the L² norm of their gradients, holds finite-energy functions that vanish on the boundary.

**Problem.** A deterministic distributional shift preserves the null sets of this field law exactly when it belongs to that energy space. In particular, a nonzero constant shift gives a mutually singular law.

**How the definition helps.** The Cameron–Martin theorem says that the shifts preserving the null sets of a Gaussian law form a Hilbert space, and every other shift gives a mutually singular law. For this field that space is the energy space, as an expansion of the inverse Laplacian in its eigenfunctions shows (our own explanation). A nonzero constant fails the zero boundary condition, so it lies outside.

**Wikipedia:** [Cameron–Martin theorem](https://en.wikipedia.org/wiki/Cameron%E2%80%93Martin_theorem). It says: “If $h\\not\\in H\_\\gamma$ the two measures are singular.”

**Paper or page:** [Radial conformal welding in Liouville quantum gravity](https://arxiv.org/abs/2411.19810). It says: “the law of h under the reweighted measure agrees with the law of h + g under the unreweighted measure.”

**Sources:** none listed. No primary source with a working link was found.

### Energy projections split free fields

**Remember:** Split the energy space at U: zero outside, harmonic inside.

*True by definition.* MSC 60G60 (Random fields). arXiv math.PR. Level 3: graduate.

**Definition.** On a bounded smooth planar domain D, the zero-boundary Gaussian free field is a centered Gaussian family indexed by the energy space, the completion of smooth compactly supported functions under the L² norm of the gradient, with covariance the gradient inner product. For a smooth subdomain U with closure inside D, the energy space of U, extended by zero, is a closed subspace whose orthogonal complement consists of the functions harmonic in U (our own).

**Problem.** The field on D splits into two independent random distributions: the zero-boundary field on U extended by zero, and a part with zero Laplacian inside U. The second part agrees with the original field outside the closure of U.

**How the definition helps.** Orthogonal projection onto the two complementary subspaces splits the field into two parts that are uncorrelated and jointly Gaussian, hence independent (our own). The first part has the covariance of the zero-boundary field on U, and the second is harmonic in U by orthogonality to tests supported there (our own). Outside the closure of U the first part vanishes, so the second agrees with the original field (our own).

**Paper or page:** [Quantum triangles and imaginary geometry flow lines](https://arxiv.org/abs/2211.04580). It says: “h₂ is the same as h outside U and harmonic inside U.”

**Sources:**

- [Quantum triangles and imaginary geometry flow lines](https://arxiv.org/abs/2211.04580)
- [Sheffield, Gaussian free fields for mathematicians (2007), Section 2.6](https://doi.org/10.1007/s00440-006-0050-1)

### Defining stochastic exponentials by integrals preserves the local martingale property

**Remember:** Z is built by integrating against M, so it inherits local fairness.

*True by definition.* MSC 60H05 (Stochastic integrals), 60G44. arXiv math.PR. Level 3: graduate.

**Definition.** For a continuous semimartingale X, its stochastic exponential is the unique continuous adapted process Z with Z(t) = 1 + ∫₀ᵗ Z(s) dX(s) for all t almost surely, so Z − 1 is a stochastic integral against X (our own explanation).

**Problem.** If M is a continuous local martingale, its stochastic exponential is a local martingale. It need not be an ordinary martingale.

**How the definition helps.** When X is a continuous local martingale M, Z − 1 is the integral of a continuous adapted integrand against M, and such integrals are local martingales (our own explanation). Starting from the explicit formula exp(M − \[M\]/2) instead needs Itô's formula to reach this integral form (our own comparison).

**Wikipedia:** [Doléans-Dade exponential](https://en.wikipedia.org/wiki/Dol%C3%A9ans-Dade_exponential). It says: “Stochastic exponential of a local martingale is again a local martingale.”

**Sources:**

- [C. Doléans-Dade, Quelques applications de la formule de changement de variables pour les semimartingales, Z. Wahrscheinlichkeitstheorie verw. Gebiete 16 (1970)](https://doi.org/10.1007/BF00534595)

### Left-endpoint Itô integrals of local martingales are local martingales

**Remember:** Bet before the coin lands, and the game stays fair.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60H05 (Stochastic integrals), 60G44. arXiv math.PR. Level 3: graduate.

**Definition.** For a simple predictable integrand, the Itô integral sums each coefficient, fixed by information at the left endpoint, times the following increment of the integrator. The stochastic integration theorem extends it to locally bounded predictable integrands, those measurable for the σ-algebra generated by left-continuous adapted processes, against local martingales.

**Problem.** If M is a local martingale and H is locally bounded and predictable, then the Itô integral H · M is a local martingale.

**How the definition helps.** A bet fixed before a martingale increment keeps its conditional mean zero, so after localization the simple integrals are martingales (our own). The stochastic integration theorem passes this property, locally, to every locally bounded predictable integrand (our own).

**Wikipedia:** [Itô calculus](https://en.wikipedia.org/wiki/It%C3%B4_calculus), [Local martingale](https://en.wikipedia.org/wiki/Local_martingale). It says: “An important property of the Itô integral is that it preserves the local martingale property.”

**Sources:**

- [Itô, K. (1944). Stochastic integral. Proceedings of the Imperial Academy 20, 519–524.](https://doi.org/10.3792/pia/1195572786)

### The extension definition of the Itô integral preserves its isometry

**Remember:** An isometry on a dense set extends without changing norms.

*True by definition.* MSC 60H05 (Stochastic integrals). arXiv math.PR. Level 3: graduate.

**Definition.** For a predictable step process H, the Brownian Itô integral sums each step value times the Brownian increment over that step, and its expected square equals E\[∫H(t)² dt\]. For any square-integrable predictable process, the integral is the L² limit of these step integrals as step processes approximate it in L² of time and probability.

**Problem.** Let H be predictable, that is, measurable for the σ-algebra generated by left-continuous adapted processes, with E\[∫₀ᵀ H(t)² dt\] finite. Then the expected square of the Itô integral of H over \[0, T\] equals E\[∫₀ᵀ H(t)² dt\].

**How the definition helps.** Both sides are continuous in L², so an identity that holds on step processes passes to their limits. For step processes, independent Brownian increments give the identity. The remaining work is to show that step processes approximate every such integrand (our own explanation).

**Wikipedia:** [Itô calculus](https://en.wikipedia.org/wiki/It%C3%B4_calculus), [Itô isometry](https://en.wikipedia.org/wiki/It%C3%B4_isometry). It says: “to be the unique extension of this isometry from a certain class of simple integrands to all bounded and predictable processes.”

**Sources:** none listed. No primary source with a working link was found.

### The Stratonovich integral keeps the ordinary chain rule

**Remember:** Average both ends of each step, and ordinary calculus returns.

*True by definition.* MSC 60H05 (Stochastic integrals), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** For continuous semimartingales H and X, sum the increments of X times the average of H at each interval’s two endpoints. The Stratonovich integral on \[0,t\] is the limit in probability of these sums along deterministic partitions with mesh tending to zero.

**Problem.** For a smooth function f and Brownian motion W, the Stratonovich integral satisfies the ordinary chain rule df(Wₜ) = f′(Wₜ) ∘ dWₜ.

**How the definition helps.** Endpoint averaging adds half the quadratic covariation \[f′(W), W\] to the Itô integral (our own). That term is half the time integral of f″(W), exactly the correction in Itô's formula, so the Stratonovich integral absorbs it (our own).

**Wikipedia:** [Stratonovich integral](https://en.wikipedia.org/wiki/Stratonovich_integral), [Itô calculus](https://en.wikipedia.org/wiki/It%C3%B4_calculus). It says: “Unlike the Itô calculus, Stratonovich integrals are defined such that the chain rule of ordinary calculus holds.”

**Sources:**

- [Stratonovich, R. L. (1966). A new representation for stochastic integrals and equations. SIAM Journal on Control 4, 362–371.](https://doi.org/10.1137/0304028)

### Projecting Gaussian kernels gives conditioning

**Remember:** Project every argument, and only the observed directions survive.

*True by definition.* MSC 60H07 (Stochastic calculus of variations and the Malliavin calculus). arXiv math.PR. Level 3: graduate.

**Definition.** Every square-integrable function of a centered Gaussian family W on a real separable Hilbert space, with covariance its inner product, expands in Gaussian chaos with symmetric coefficient tensors. For P the orthogonal projection onto finitely many orthonormal directions, Γ(P) applies P to every argument of every tensor and leaves constants unchanged, so it keeps only the parts built from those directions.

**Problem.** For every square-integrable function of W, Γ(P) gives its conditional expectation given the Gaussian coordinates in the chosen directions.

**How the definition helps.** Γ(P) and conditional expectation both delete exactly the chaos terms that involve an unobserved direction (our own). In a Hermite basis that starts with the observed directions, such a term has a mean-zero factor independent of the observed coordinates (our own). Completeness of the Gaussian polynomial expansion extends this to all square-integrable functions.

**Paper or page:** [Feynman-Kac formula for the heat equation driven by time-homogeneous white noise potential](https://arxiv.org/abs/2108.12406). It says: “the second quantization operator $\\Gamma (A<sub>K</sub>)$ coincides with the conditional expectation $\\mathbb E\[\\bullet \|\\sigma (Z<sub>1</sub>,...,Z<sub>K</sub>)\]$”

**Sources:**

- [Feynman-Kac formula for the heat equation driven by time-homogeneous white noise potential](https://arxiv.org/abs/2108.12406)

### Weak solutions give Tanaka's equation a solution where strong solutions fail

**Remember:** Let the solution pick its own noise, and Tanaka's equation works.

*Makes the theorem clean to state or prove.* MSC 60H10 (Stochastic ordinary differential equations (aspects of stochastic analysis)). arXiv math.PR. Level 3: graduate.

**Definition.** A weak solution may choose its own filtered probability space and Brownian motion B, together with an adapted process X that solves the integral equation almost surely. A strong solution must use a prescribed Brownian motion and, for deterministic initial data, be adapted to its augmented natural filtration, so X is a function of the noise.

**Problem.** For sgn(x) = 1 when x ≥ 0 and −1 otherwise, Tanaka’s equation dXₜ = sgn(Xₜ) dBₜ starts at X₀ = 0. It has a weak solution unique in law and no strong solution.

**How the definition helps.** Take X Brownian and set B = ∫sgn(X) dX; B is Brownian by Lévy's characterization, and since sgn² = 1, X solves the equation (our own). The same characterization makes every solution Brownian, so the law is unique (our own). By Tanaka's formula B depends only on \|X\|, which cannot reveal the sign of X, so X is not adapted to B (our own).

**Wikipedia:** [Tanaka equation](https://en.wikipedia.org/wiki/Tanaka_equation), [Yamada–Watanabe theorem](https://en.wikipedia.org/wiki/Yamada%E2%80%93Watanabe_theorem). It says: “Tanaka's equation is an example of a stochastic differential equation which admits a weak solution but has no strong solution.”

**Sources:**

- [T. Yamada and S. Watanabe, On the uniqueness of solutions of stochastic differential equations, Journal of Mathematics of Kyoto University 11 (1971)](https://doi.org/10.1215/kjm/1250523691)

### Test functions realize white noise

**Remember:** White noise acts on tests, not on individual points.

*Rules out counterexamples.* MSC 60H40 (White noise theory), 60G60. arXiv math.PR. Level 3: graduate.

**Definition.** Gaussian white noise on ℝⁿ is a random tempered distribution, a continuous linear functional on smooth test functions that decrease rapidly with all their derivatives. Its values on real tests are jointly centered Gaussian with covariance equal to their L² inner product, so orthonormal tests give independent standard normals (our own).

**Problem.** Exactly one probability law has these properties. On each fixed nonempty open ball, the noise almost surely has no square-integrable representative.

**How the definition helps.** The Bochner–Minlos theorem gives a unique law with this Gaussian characteristic functional. Inside a ball, infinitely many orthonormal smooth tests with compact support give independent standard normals, whose squares sum to infinity almost surely (our own). For a square-integrable representative, Bessel's inequality would bound that sum (our own).

**Paper or page:** [Multiparameter Lévy white noise theory and applications](https://arxiv.org/abs/2510.25525). It says: “There exists a unique probability measure $\\mathbb {P}$ on ${\\cal B}({\\cal S}'({\\mathbb { R}}<sup>n</sup>))$ with the following property:\\\[ \\mathbb {E}\[e<sup>i\\langle \\cdot ,\\phi \\rangle </sup>\]:=\\int \\limits <sub>\\cal S'</sub>e<sup>i\\langle \\omega , \\phi \\rangle </sup>d\\mathbb {P}(\\omega )=e<sup>{-\\tfrac</sup> {1}{2} \\Vert \\phi \\Vert ^2};\\quad i=\\sqrt{-1} \\\]”

**Sources:**

- [Multiparameter Lévy white noise theory and applications](https://arxiv.org/abs/2510.25525)

### Harris chains carry Markov chain convergence to uncountable state spaces

**Remember:** Revisit a region, not a point, and flip a coin there.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60J05 (Discrete-time Markov processes on general state spaces). arXiv math.PR. Level 3: graduate.

**Definition.** A Harris chain has a measurable region A that it visits infinitely often almost surely from every start, and from which it can restart afresh. Precisely, some ε &gt; 0 and probability measure ρ satisfy P(x,C) ≥ ερ(C) for every x in A and every measurable C.

**Problem.** An aperiodic recurrent Harris chain with stationary distribution π converges to π in total variation from every start. Total variation distance is the largest difference between the probabilities that two distributions give to one event.

**How the definition helps.** On each visit to A, the chain restarts from ρ with probability ε (our own). These restarts are regeneration times that act like returns to a single state, and the convergence theorem for aperiodic positive Harris chains applies (our own). With diffuse transitions, a single point is returned to with probability zero, so no recurrent state is available (our own).

**Wikipedia:** [Harris chain](https://en.wikipedia.org/wiki/Harris_chain), [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “Many results for discrete-time Markov chains with finite state space can be generalized to chains with uncountable state space through Harris chains.”

**Sources:** none listed. No primary source with a working link was found.

### Detailed balance excludes one-way cycles

**Remember:** Pairwise balance reverses an entire path, one step at a time.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)), 82C31. arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** A stationary chain balances the total probability flowing into and out of each state. Detailed balance asks more: in equilibrium each one-step move x → y is as likely as its reverse, that is, π(x)P(x,y) = π(y)P(y,x).

**Problem.** A finite stationary Markov chain has the same path law when read backward exactly when it satisfies detailed balance.

**How the definition helps.** Applying detailed balance to each move of a path in turn carries the factor π from its start to its end, giving the probability of the reversed path (our own). Paths with one step give the converse (our own). A deterministic cycle on four states is stationary under the uniform law, but each forward move has a reverse of probability zero (our own).

**nLab:** [detailed balance](https://ncatlab.org/nlab/show/detailed+balance). It says: “A Markov process satisfies detailed balance if and only if it is time-reversible.”

**Sources:** none listed. No primary source with a working link was found.

### Conditional independence makes the Markov property survive time reversal

**Remember:** Reversing time swaps two sides of a symmetric independence condition.

*True by definition.* MSC 60J25 (Continuous-time Markov processes on general state spaces), 60J10. arXiv math.PR. Level 3: graduate.

**Definition.** A process is Markov if, given its present value, its past and its future are conditionally independent. This condition is symmetric in past and future, unlike the one-sided form, in which the law of the future given the past depends only on the present.

**Problem.** Let X be a Markov process for its natural information, the values seen so far, and fix T &gt; 0. Then X(T − t) for 0 ≤ t ≤ T is Markov, though its transition probabilities need not be constant over time.

**How the definition helps.** Reversing time swaps past and future, and the symmetric condition does not change (our own explanation). The work is the equivalence with the one-sided definition, shown by averaging the product of a past-event indicator and a future-event indicator (our own explanation). A proof with transition probabilities would instead need a rule for conditioning backward in time (our own comparison).

**Wikipedia:** [Markov property](https://en.wikipedia.org/wiki/Markov_property). It says: “from a time T&gt;0 has again the Markov property.”

**Sources:** none listed. No primary source with a working link was found.

### Coupling total variation bounds Markov chain error by failure to meet

**Remember:** Once the coupled chains meet, neither can differ from the other.

*True by definition.* MSC 60J27 (Continuous-time Markov processes on discrete state spaces), 60B10. arXiv math.PR. Level 3: graduate.

**Definition.** A coupling of laws P and Q is a pair (X, Y) on one probability space with those separate laws. For laws on a countable set, the total variation distance is the least probability that X ≠ Y over all couplings, so the disagreement probability of any one coupling bounds it (our own).

**Problem.** Couple a continuous-time Markov chain on a countable set, started at a fixed state, with a stationary copy of law π that stays with it after they meet at time T. Then the first chain's total variation distance from π at time t is at most P(T &gt; t).

**How the definition helps.** At time t the two states form one coupling of the two laws, and they differ only if they have not yet met, so the distance is at most P(T &gt; t) (our own). The coupling definition agrees with the event definition, the supremum of \|P(A) − Q(A)\| over events A, by the maximal coupling (our own).

**Wikipedia:** [Total variation distance of probability measures](https://en.wikipedia.org/wiki/Total_variation_distance_of_probability_measures). It says: “The total variation distance (or half the norm) arises as the optimal transportation cost”

**Paper or page:** [Convergence Rate Analysis of the Join-the-Shortest-Queue System](https://arxiv.org/abs/2503.15736v2). It says: “let T = inf {t &gt; 0: Xₜ = Yₜ} denote the first time that they meet. Then dTV(ℙₓᵗ, π) ≤ ℙ(T ≥ t).”

**Sources:** none listed. No primary source with a working link was found.

### Tanaka's definition of local time exposes the decomposition of reflected Brownian motion

**Remember:** Local time is what \|B\| gains beyond its martingale part.

*True by definition. Confidence: medium.* MSC 60J55 (Local time and additive functionals), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** Tanaka local time at zero is what \|B\| has beyond its martingale part: L(t) = \|B(t)\| − ∫₀ᵗ sgn(B(s)) dB(s) for Brownian motion B started at zero. Here sgn is 1 on positive numbers and −1 on negative numbers, and we may take it to be zero at zero.

**Problem.** For Brownian motion B started at zero, \|B\| is the sum of the martingale ∫₀ᵗ sgn(B(s)) dB(s) and the increasing process L(t). The process L can increase only when B is zero.

**How the definition helps.** The definition gives the decomposition at once, and the integral is a martingale because its integrand is bounded (our own explanation). The definition alone does not show that L increases, or that it grows only when B is zero (our own explanation). That needs the occupation limit, the time spent within ε of zero divided by 2ε, and its identification with L (our own explanation).

**Wikipedia:** [Local time (mathematics)](https://en.wikipedia.org/wiki/Local_time_%28mathematics%29). It says: “Tanaka's formula provides the explicit Doob–Meyer decomposition for the one-dimensional reflecting Brownian motion”

**Sources:**

- [D. Revuz and M. Yor, Continuous Martingales and Brownian Motion, 3rd edition, Springer (1999)](https://doi.org/10.1007/978-3-662-06400-9)

### Gaussian covariance identifies Ornstein–Uhlenbeck motion as rescaled time-changed Brownian motion

**Remember:** A centered Gaussian process is its covariance, nothing more.

*True by definition.* MSC 60J60 (Diffusion processes), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** For θ, σ &gt; 0, the Ornstein–Uhlenbeck process started at zero is the continuous centered Gaussian process with covariance (σ²/2θ)(exp(−θ\|t−s\|) − exp(−θ(t+s))) for s, t ≥ 0. A continuous centered Gaussian process is determined in law by its covariance, so matching covariances identifies it.

**Problem.** For Brownian motion W, the process (σ/√(2θ)) exp(−θt) W(exp(2θt) − 1) has the law of the Ornstein–Uhlenbeck process started at zero.

**How the definition helps.** The time-changed process is continuous, centered and Gaussian, so one covariance computation identifies it. For s ≤ t its covariance is (σ²/2θ) exp(−θ(s + t))(exp(2θs) − 1), which equals the defining covariance. An equation-based definition would instead need to solve the linear equation and use the Itô isometry (our own comparison).

**Wikipedia:** [Ornstein–Uhlenbeck process](https://en.wikipedia.org/wiki/Ornstein%E2%80%93Uhlenbeck_process). It says: “can be represented as a scaled, time-transformed Wiener process”

**Sources:** none listed. No primary source with a working link was found.

### Brownian motion defined by covariance stays Brownian under time inversion

**Remember:** Brownian motion is just covariance min(s,t) plus continuous paths.

*True by definition.* MSC 60J65 (Brownian motion), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** Brownian motion is the centered Gaussian process with continuous paths and covariance min(s, t), so every finite linear combination of values is normal and the covariance fixes the law.

**Problem.** Let W be Brownian motion, and set V(0) = 0 and V(t) = t·W(1/t) for t &gt; 0. Then V is Brownian motion.

**How the definition helps.** V is centered Gaussian with covariance st·min(1/s, 1/t) = min(s, t), so only continuity remains (our own calculation). Paths of V are continuous for t &gt; 0, and at zero the Brownian strong law W(u)/u → 0 gives continuity (our own explanation). The independent-increment definition would need a proof that the inverted increments are independent (our own comparison).

**Wikipedia:** [Wiener process](https://en.wikipedia.org/wiki/Wiener_process). It says: “The Wiener process can be equivalently defined as a Gaussian process”

**Sources:**

- [D. Revuz and M. Yor, Continuous Martingales and Brownian Motion, 3rd edition, Springer (1999)](https://doi.org/10.1007/978-3-662-06400-9)

### Subtracting the endpoint line makes the Brownian bridge independent of it

**Remember:** Subtract the line to the endpoint to get an independent Gaussian residual.

*True by definition.* MSC 60J65 (Brownian motion), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** The standard Brownian bridge is Brownian motion on \[0, 1\] with the straight line to its endpoint removed: B(t) = W(t) − t·W(1). This avoids conditioning on the event W(1) = 0, which has probability zero.

**Problem.** The entire bridge B is independent of W(1). Thus W(t) splits into B(t) and the independent random line t·W(1).

**How the definition helps.** The bridge and W(1) are jointly Gaussian with Cov(B(t), W(1)) = t − t = 0, so they are independent (our own calculation). Continuous paths pass this from rational times to the whole bridge (our own explanation). The split also gives the conditional law given W(1) = y, namely the law of B(t) + ty (our own explanation).

**Wikipedia:** [Brownian bridge](https://en.wikipedia.org/wiki/Brownian_bridge). It says: “is a standard Brownian bridge, independent of W(1).”

**Sources:**

- [D. Revuz and M. Yor, Continuous Martingales and Brownian Motion, 3rd edition, Springer (1999)](https://doi.org/10.1007/978-3-662-06400-9)

### An initial atom inverts renewal

**Remember:** Count the initial arrival so convolution has its identity term.

*True by definition. Confidence: medium.* MSC 60K05 (Renewal theory), 45E10. arXiv math.PR. Level 3: graduate.

**Definition.** Take independent positive waiting times with common law F. The renewal measure U sums the laws of all arrival times, counting the start as an arrival, so it includes the unit mass δ₀ at time zero.

**Problem.** Then U − F ∗ U = δ₀, where convolution ∗ adds independent waiting times. For locally bounded measurable forcing g vanishing before zero, u = U ∗ g solves u = g + F ∗ u.

**How the definition helps.** Convolution by F moves each arrival law one wait later, so F ∗ U is U without its first term δ₀ (our own). U is finite on bounded intervals, since E\[exp(−T)\] &lt; 1 for one positive wait T makes the discounted arrival masses sum geometrically (our own). Hence U ∗ g is well defined, and convolving the identity with g gives u = g + F ∗ u (our own).

**Wikipedia:** [Renewal theory](https://en.wikipedia.org/wiki/Renewal_theory). It says: “The renewal function satisfies a recursive integral equation”

**Sources:** none listed. No primary source with a working link was found.

### Iterated-integral signatures turn joining paths into multiplying in a tensor algebra

**Remember:** Split the ordered times at the join to multiply signatures.

*True by definition.* MSC 60L20 (Rough paths), 15A69. arXiv math.PR. Level 3: graduate.

**Definition.** The signature of a continuous bounded-variation path x in ℝᵈ on \[s, t\] is the series of its iterated integrals in the completed tensor algebra: 1 at level zero, and at level k the integral of dx(t₁) ⊗ ⋯ ⊗ dx(tₖ) over s &lt; t₁ &lt; ⋯ &lt; tₖ &lt; t. At any time u between s and t, each ordered set of times splits into those before u and those after u.

**Problem.** Chen's identity says that the signature of two joined paths is the tensor product of their signatures. So the signature is a homomorphism from the monoid of paths, under joining end to start, into the grouplike elements of the tensor algebra.

**How the definition helps.** At the join, the ordered times split into a first group in the first path and the rest in the second (our own). Summing over the size of the first group gives the degree-k part of the tensor product, and continuity makes the join time itself negligible (our own). The shuffle identities show that the signature is grouplike (our own).

**Paper or page:** [Rough paths, Signatures and the modelling of functions on streams](https://arxiv.org/abs/1405.4537v1). It says: “The Signature is a homomorphism from the monoid of paths into the grouplike elements of a closed tensor algebra.”

**Sources:**

- [Terry Lyons, Rough paths, Signatures and the modelling of functions on streams, arXiv:1405.4537 (2014)](https://arxiv.org/abs/1405.4537v1)
- [Kuo-Tsai Chen, Iterated Integrals and Exponential Homomorphisms, Proceedings of the London Mathematical Society (1954)](https://doi.org/10.1112/plms/s3-4.1.502)

### Kolmogorov products let zero-one laws be proved in any Markov category

**Remember:** A Kolmogorov product is the Kolmogorov extension theorem turned into an axiom.

*Makes the theorem clean to state or prove.* MSC 60A05 (Axioms; other general questions in probability), 18M05, 60F20. arXiv math.PR, math.CT. Level 4: research.

**Definition.** In a Markov category, a Kolmogorov product is an infinite product of the kind the Kolmogorov extension theorem builds: it has deterministic projections onto all finite subproducts, and every compatible family of finite marginals from any object determines a unique arrow into it. This limit property must still hold after tensoring the diagram and its limit with any object.

**Problem.** Fritz and Rischel prove abstract versions of the zero-one laws of Kolmogorov and Hewitt–Savage in Markov categories with Kolmogorov products. The classical laws follow because Markov kernels on standard Borel spaces have countable Kolmogorov products.

**How the definition helps.** Zero-one laws speak about infinite sequences, and such a product lets them do so through finite marginals alone (our own). Fritz and Rischel prove the abstract laws from this structure. For Markov kernels on standard Borel spaces, the Kolmogorov extension theorem supplies countable Kolmogorov products, which gives the classical laws.

**nLab:** [Kolmogorov extension theorem](https://ncatlab.org/nlab/show/Kolmogorov+extension+theorem), [Markov category](https://ncatlab.org/nlab/show/Markov+category), [zero-one law](https://ncatlab.org/nlab/show/zero-one+law). It says: “In Markov categories the Kolmogorov extension theorem appears in the form of an axiom that the category can satisfy, an abstraction of the universal property in the category of Markov kernels given above.”

**Sources:**

- [Tobias Fritz, Eigil Fjeldgren Rischel, Infinite products and zero-one laws in categorical probability, Compositionality 2(3) (2020); arXiv:1912.02769](https://arxiv.org/abs/1912.02769)

### Quasi-Borel spaces give probability a cartesian closed category

**Remember:** Describe a space by its random elements, not its measurable sets.

*Makes the theorem clean to state or prove.* MSC 60A05 (Axioms; other general questions in probability), 28A05, 18D15. arXiv cs.PL, math.PR. Level 4: research.

**Definition.** A quasi-Borel space is a set X described by its random elements, a chosen family M of maps ℝ → X. M contains every constant map and is closed under precomposition by Borel maps ℝ → ℝ and under gluing its members along every countable Borel partition of ℝ.

**Problem.** Quasi-Borel spaces form a cartesian closed category, so they have function spaces X → Y with measurable evaluation. They carry a probability monad that agrees with the Giry monad on standard Borel spaces.

**How the definition helps.** Function spaces come for free: a map from ℝ into the maps X → Y counts as a random element when its uncurried form ℝ × X → Y preserves random elements (our own). This makes evaluation and currying morphisms, so the category is cartesian closed (our own). The quasi-Borel probability monad theorem gives agreement with the Giry monad on standard Borel spaces (our own).

**nLab:** [quasi-Borel space](https://ncatlab.org/nlab/show/quasi-Borel+space). It says: “The category of quasi-Borel spaces is cartesian closed, unlike the category of measurable spaces.”

**Sources:**

- [Chris Heunen, Ohad Kammar, Sam Staton, Hongseok Yang, A convenient category for higher-order probability theory, LICS 2017; arXiv:1701.02547](https://arxiv.org/abs/1701.02547)

### In the category of couplings, Bayesian inversion is built in

**Remember:** A joint distribution does not care which variable you call the input.

*True by definition.* MSC 60A10 (Probabilistic measure theory), 28A50, 18M35. arXiv math.PR, math.CT. Level 4: research.

**Definition.** In the category of couplings, objects are standard Borel spaces with probability laws, and an arrow from (X, p) to (Y, q) is a joint law on X × Y with marginals p and q. Disintegration identifies such an arrow with a kernel taking p to q, unique up to p-almost sure equality.

**Problem.** Every measure-preserving Markov kernel k: (X, p) → (Y, q) has a Bayesian inverse k†: (Y, q) → (X, p), the conditional law of x given y, unique up to almost sure equality. Taking inverses is a dagger structure, an involution that reverses the direction of arrows.

**How the definition helps.** A joint law read with its factors swapped is an arrow back, and that arrow is the Bayesian inverse, so existence and the dagger are immediate. The work moves into composing couplings and into the match with kernels up to almost sure equality. Both use regular conditional distributions, which is why the objects are standard Borel spaces.

**nLab:** [Bayesian inversion](https://ncatlab.org/nlab/show/Bayesian+inversion), [category of couplings](https://ncatlab.org/nlab/show/category+of+couplings). It says: “Categorical abstractions of the category of coupling via dagger categories have therefore the concept of Bayesian inversion already built in.”

**Sources:**

- [Fredrik Dahlqvist, Vincent Danos, Ilias Garnier, Alexandra Silva, Borel kernels and their approximation, categorically, MFPS 34 (2018), arXiv:1803.02651](https://arxiv.org/abs/1803.02651)

### Nonsymmetric Kesten criterion compares a walk with its projection to the abelianization

**Remember:** Compare a biased walk with its abelian quotient, not with one.

*Makes the theorem clean to state or prove.* MSC 60B15 (Probability measures on groups or semigroups, Fourier transforms, factorization), 43A07. arXiv math.GR, math.PR. Level 4: research.

**Definition.** For a random walk from the identity with step law μ, the return radius λ(G, μ) is limsup pₙ¹⁄ⁿ, where pₙ is the probability of being back at step n. Compare it with the image walk μ̄ on the abelianization Ḡ, the quotient by the commutator subgroup, which keeps the walk's drift.

**Problem.** Let G be finitely generated and μ finitely supported, with support generating G as a semigroup; then G is amenable exactly when λ(G, μ) = λ(Ḡ, μ̄). For symmetric μ, λ(Ḡ, μ̄) = 1, which recovers Kesten's criterion λ(G, μ) = 1.

**How the definition helps.** Drift alone lowers the return radius even on amenable groups, and comparison with the abelianization cancels that effect (our own). On ℤ, the walk stepping right with probability 2/3 has return radius 2√2/3 &lt; 1 (our own). The nonsymmetric Kesten criterion gives the equality test, and a symmetric walk on the amenable abelian quotient has radius one (our own).

**Paper or page:** [A non-symmetric Kesten criterion and ratio limit theorem for random walks on amenable groups](https://arxiv.org/abs/2309.01766v1). It says: “G amenable ⇔ λ(G,μ) = λ(Ḡ,μ̄).”

**Sources:**

- [Rhiannon Dougall, Richard Sharp, A non-symmetric Kesten criterion and ratio limit theorem for random walks on amenable groups, arXiv:2309.01766v1 (2023)](https://arxiv.org/abs/2309.01766v1)

### Variance normalization orders Gaussian masses

**Remember:** Normalize each point to mean one before changing the covariances.

*Makes the theorem clean to state or prove.* MSC 60E15 (Inequalities; stochastic orderings), 60G60. arXiv math.PR. Level 4: research.

**Definition.** For a finite centered Gaussian vector X and fixed positive weights pⱼ, the mass is M(X) = ∑ⱼ pⱼ exp(Xⱼ − Var(Xⱼ)/2), with each term normalized to mean one. So the mean of M(X) is ∑ⱼ pⱼ, whatever the covariance.

**Problem.** Suppose X and Y have the same index set and Cov(Xᵢ,Xⱼ) ≤ Cov(Yᵢ,Yⱼ) for every pair. Then 𝔼\[F(M(X))\] ≤ 𝔼\[F(M(Y))\] for every twice continuously differentiable convex F with bounded first and second derivatives.

**How the definition helps.** Interpolate between the two covariance matrices; because each mean is fixed at one, the first-derivative terms cancel (our own). Gaussian integration by parts leaves only covariance increases times F″ and positive exponential factors, which convexity makes nonnegative (our own). Approximation by nonsingular covariance matrices covers the singular case (our own).

**Paper or page:** [Moment bounds for Gaussian multiplicative chaos with higher-dimensional singularities](https://arxiv.org/abs/2302.06097). It says: “Let $\\bm {X}$, $\\bm {Y}$ be two Gaussian vectors indexed by $T$ such that $\\bm {Y}$ dominates $\\bm {X}$ in covariance on $T<sup>2$</sup>. Then for any \\emph{convex} functional $F$ with subgaussian growth at infinity as well as in its first and second derivatives, and for any \\emph{positive} weights $\\{ p<sub>i</sub>\\} <sub>i\\in T</sub>$, \\begin{equation\*}  \\mathbb {E}\[F(\\sum <sub>i\\in T</sub>p<sub>ie</sub><sup>{X<sub>i</sub>-\\frac{1}{2}\\mathbb</sup> {E}\[X<sub>i</sub><sup>2</sup>\]})\]\\leq \\mathbb {E}\[F(\\sum <sub>i\\in T</sub>p<sub>ie</sub><sup>{Y<sub>i</sub>-\\frac{1}{2}\\mathbb</sup> {E}\[Y<sub>i</sub><sup>2</sup>\]})\]. \\end{equation\*}”

**Sources:**

- [Moment bounds for Gaussian multiplicative chaos with higher-dimensional singularities](https://arxiv.org/abs/2302.06097)

### Borel data structures give one de Finetti theorem for graphs and arrays

**Remember:** Give every finite label set its own data space, then demand symmetry.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60G09 (Exchangeability for stochastic processes), 18A05, 28A05. arXiv math.PR. Level 4: research.

**Definition.** A Borel data structure gives each finite label set a standard Borel space of data, and each injection of label sets a measurable restriction map in the reverse direction, compatible with identities and composites. A family of laws is exchangeable if every restriction carries it to the law on the smaller label set.

**Problem.** For a Borel data structure with exchangeable laws, the ergodic exchangeable laws, the extreme points that are not proper mixtures, form a measurable set. Every exchangeable law is a unique mixture of them.

**How the definition helps.** Sequences, graphs and arrays are all Borel data structures, so one theorem covers them, and de Finetti's theorem is the case where each label carries a single value (our own). The proof must still show that the ergodic laws form a measurable set and that the mixture exists and is unique. The paper's representation theorems rest on Hoover's representation of exchangeable arrays.

**Paper or page:** [Exchangeable Laws in Borel Data Structures](https://arxiv.org/abs/2208.10667v1), [Exchangeable Laws in Borel Data Structures](https://arxiv.org/abs/2208.10667v1). It says: “A generalization of de Finetti's theorem is shown and natural transformations are used to present functional representation theorems”

**Sources:**

- [Julian Gerstenberg, Exchangeable Laws in Borel Data Structures, arXiv:2208.10667 (2022)](https://arxiv.org/abs/2208.10667v1)

### De Finetti's theorem says that probability measures form a limit

**Remember:** The space of probability measures represents exchangeable processes.

*Makes the theorem clean to state or prove.* MSC 60G09 (Exchangeability for stochastic processes), 60A05, 18M05. arXiv math.PR, math.CT. Level 4: research.

**Definition.** A probability measure on the sequence space Xᴺ is exchangeable if finite permutations of the coordinates leave it unchanged. The iid sampling map from P X, the space of probability measures on X, to Xᴺ sends p to the law of an independent sequence whose terms all have law p.

**Problem.** For standard Borel X, P X with the iid sampling map is the limit of the diagram of finite permutations of Xᴺ, in the category of Markov kernels. Equivalently, every exchangeable probability measure on Xᴺ is a unique mixture of iid measures.

**How the definition helps.** As a limit, the theorem says that every exchangeable kernel into Xᴺ factors uniquely through iid sampling from P X. Uniqueness of the mixture is uniqueness of this factorization. The limit language restates the theorem without proving it, and Fritz, Gonda and Perrone give the proof in representable Markov categories with conditionals and Kolmogorov products.

**nLab:** [de Finetti's theorem](https://ncatlab.org/nlab/show/de+Finetti%27s+theorem). It says: “The Giry monad is the limit of an exchangeable process in the category of Markov kernels.”

**Sources:**

- [Bart Jacobs, Sam Staton, De Finetti's construction as a categorical limit, CMCS 2020, LNCS 12094; arXiv:2003.01964](https://arxiv.org/abs/2003.01964)
- [Tobias Fritz, Tomáš Gonda, Paolo Perrone, De Finetti's theorem in categorical probability, Journal of Stochastic Analysis 2(4) (2021); arXiv:2105.02639](https://arxiv.org/abs/2105.02639)

### Allowing a delayed start reduces multi-marginal Skorokhod embeddings to one period

**Remember:** Make the previous stopping time the earliest time for the next stop.

*Makes the theorem clean to state or prove.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60J65, 60G44. arXiv math.PR. Level 4: research.

**Definition.** Fix Brownian motion B, a target law ν, and a stopping time σ, the delay. A delayed Skorokhod embedding is a stopping time τ ≥ σ such that Bτ has law ν, so the previous stage's stopping time can serve as the delay.

**Problem.** Assume the Brownian starting law and target laws have finite second moments and increase in convex order. Then multi-marginal Root and Rost solutions, with randomization allowed for Rost, embed the targets at successive stopping times, and both admit optimal stopping representations.

**How the definition helps.** Each stage is a one-period embedding delayed by the previous stopping time, so the one-period theory applies stage by stage (our own). The paper's delayed extension of the switching identities of Backhoff, Cox, Grass and Huesmann gives the optimal stopping representations.

**Paper or page:** [Delayed switching identities and multi-marginal solutions to the Skorokhod embedding problem](https://arxiv.org/abs/2312.04218v1). It says: “We achieve this by rephrasing the multi-period problem into a one-period framework with delay.”

**Sources:**

- [Alexander M. G. Cox, Annemarie M. Grass, Delayed switching identities and multi-marginal solutions to the Skorokhod embedding problem, arXiv:2312.04218 (2023)](https://arxiv.org/abs/2312.04218v1)

### Pointwise continuity at time zero makes generalized Feller semigroups strongly continuous

**Remember:** Pointwise continuity plus a local norm bound gives continuity in norm.

*Rules out counterexamples. Confidence: medium.* MSC 60G53 (Feller processes), 47D07, 60J35. arXiv math.PR, math.FA. Level 4: research.

**Definition.** On a completely regular Hausdorff space E, take a weight ρ &gt; 0 with compact sublevel sets, and let Bρ(E) be the completion of C<sub>b</sub>(E) in the norm sup \|f\|/ρ. A generalized Feller semigroup is a family of positive bounded operators P(t) on Bρ(E) with P(0) = I and P(t + s) = P(t)P(s), whose norms stay bounded near zero. It is only required to converge pointwise: P(t)f(x) tends to f(x) as t decreases to zero, for every f and x.

**Problem.** Every generalized Feller semigroup is strongly continuous. That is, P(t)f tends to f in the weighted norm as t tends to zero, for every f in Bρ(E).

**How the definition helps.** The local norm bound and pointwise convergence give weak continuity at zero, by the weighted measure representation and dominated convergence (our own). For semigroups, weak continuity implies strong continuity (our own). Without pointwise continuity, on two points a, b the positive contractions P(0) = I and P(t)f ≡ f(a) for t &gt; 0 fail both (our own).

**Paper or page:** [Ramifications of generalized Feller theory](https://arxiv.org/abs/2308.03858v1), [Ramifications of generalized Feller theory](https://arxiv.org/abs/2308.03858v1). It says: “We also provide a counterexample, which shows that no condition of the basic definition of generalized Feller semigroups can be dropped.”

**Sources:**

- [Christa Cuchiero, Tonio Möllmann, Josef Teichmann, Ramifications of generalized Feller theory, arXiv:2308.03858 (2023)](https://arxiv.org/abs/2308.03858v1)

### Strong operator convergence gives one proof of the three random-matrix scaling limits

**Remember:** Let the operators converge instead of comparing their kernels point by point.

*Makes the theorem clean to state or prove.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60B20, 47A10. arXiv math-ph, math.PR. Level 4: research.

**Definition.** Operators Aₙ on one Hilbert space converge strongly to A if ‖Aₙf − Af‖ tends to zero for every vector f. Here the operators are the scaled determinantal kernels, viewed as spectral projections of rescaled Sturm–Liouville operators.

**Problem.** For this notion of convergence, the Dyson, Airy and Bessel kernels are universal limits in the bulk, soft-edge and hard-edge scalings. This gives a short, unified derivation of the scaling limits for the Gaussian, Laguerre and Jacobi unitary ensembles.

**How the definition helps.** Strong convergence of these spectral projections follows from convergence of the underlying differential operators, so one Sturm–Liouville argument replaces separate kernel asymptotics for each ensemble (our own reading). The idea comes from Borodin and Olshanski. The work is to check that the scaled differential operators converge and to pass this to their projections (our own reading).

**Paper or page:** [On the Scaling Limits of Determinantal Point Processes with Kernels Induced by Sturm-Liouville Operators](https://arxiv.org/abs/1104.0153v4). It says: “Instead of studying the convergence of the kernels as functions, the method directly addresses the strong convergence of the induced integral operators.”

**Sources:**

- [Folkmar Bornemann, On the Scaling Limits of Determinantal Point Processes with Kernels Induced by Sturm-Liouville Operators, arXiv:1104.0153v4 (2016), SIGMA 12 (2016), 083, 20 pages, doi:10.3842/sigma.2016.083](https://arxiv.org/abs/1104.0153v4)

### Dirichlet covariance makes the planar Gaussian free field conformally invariant

**Remember:** Conformal maps keep Dirichlet energy, so they keep the field.

*True by definition. Confidence: medium.* MSC 60G60 (Random fields), 60G15, 81T40. arXiv math.PR, math-ph. Level 4: research.

**Definition.** The zero-boundary Gaussian free field on a planar domain is the centered jointly Gaussian family indexed by the energy space, the completion of smooth compactly supported functions under the L² norm of the gradient. Its covariance is the Dirichlet inner product ∫∇f·∇g, so its law depends only on that inner product.

**Problem.** Let φ be a conformal bijection between planar domains, so it preserves angles. It transports the zero-boundary Gaussian free field on one domain to the field on the other.

**How the definition helps.** In the plane, a conformal map preserves the Dirichlet inner product, since the change of area cancels the two gradient factors (our own explanation). A centered jointly normal family is determined by its covariances, so the law is preserved (our own explanation). A Green-function definition would need to transform the kernel and the test functions together (our own comparison).

**Wikipedia:** [Gaussian free field](https://en.wikipedia.org/wiki/Gaussian_free_field). It says: “the conformal invariance of the continuum GFF is clear from the invariance of the Dirichlet inner product.”

**Sources:**

- [S. Sheffield, Gaussian free fields for mathematicians, Probability Theory and Related Fields 139 (2007)](https://doi.org/10.1007/s00440-006-0050-1)

### Wick products remove internal cumulants

**Remember:** Remove each block's own cumulants before combining the blocks.

*Makes the theorem clean to state or prove.* MSC 60G60 (Random fields). arXiv math.PR. Level 4: research.

**Definition.** For a finite block of real variables with all moments, give each occurrence its own formal variable tⱼ and set S = ∑ⱼ tⱼXⱼ. The Wick product is the coefficient of the product of all tⱼ in exp(S)/𝔼\[exp(S)\], with expectation taken coefficient by coefficient. Dividing by 𝔼\[exp(S)\] strips the block's own cumulants from the generating series.

**Problem.** The expected product of several Wick products is a sum over partitions of all occurrences into parts that each meet at least two blocks, of the product of the parts' joint cumulants. A part's joint cumulant is its multilinear coefficient in log 𝔼\[exp(S)\], using only that part's variables.

**How the definition helps.** In the joint generating series, the denominators remove every cumulant term confined to one block (our own). Expanding the exponential of the remaining cumulant terms and keeping those that use each variable once gives exactly the stated partitions (our own).

**Paper or page:** [A scaling limit of the parabolic Anderson model with exclusion interaction](https://arxiv.org/abs/2103.13479). It says: “One has the \`\`diagram formula"
\\begin{equation}
\\label{eq:diagram}
{\\symb E}\\bigg(\\prod<sub>k=1</sub><sup>p</sup>\\Wick{\\prod<sub>i=1</sub><sup>m</sup>X<sub>(i,k)</sub>}\\bigg)
= \\sum\_{\\pi\\in\\mathcal{P}M(M\\times P)}\\prod{B\\in\\pi}{\\symb E}c(X{B}).
\\end{equation}”

**Sources:**

- [A scaling limit of the parabolic Anderson model with exclusion interaction](https://arxiv.org/abs/2103.13479)

### Optimal strong stationary times give quasi-stationary laws without an absorbing state

**Remember:** Not yet stationary takes the place of not yet absorbed.

*Makes the theorem clean to state or prove.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)), 60G40. arXiv math.PR. Level 4: research.

**Definition.** For a chain started from α, a strong stationary time τ is a randomized stopping time at which the chain has reached π exactly: Xτ has law π, independently of τ. It is optimal if P(τ &gt; t) is as small as possible among all such times, for every t.

**Problem.** Let the chain be finite, irreducible and reversible with all eigenvalues positive, and fix a starting law α ≠ π. Conditioned on the optimal strong stationary time exceeding t, the law of the state at time t converges as t tends to infinity.

**How the definition helps.** The event {τ &gt; t}, not yet stationary, plays the role of not yet absorbed, so no absorbing state is needed. The paper proves convergence of the conditional law from the spectral expansion of the reversible transition matrix (our own).

**Paper or page:** [Quasi-stationary distributions of non-absorbing Markov chains](https://arxiv.org/abs/2409.19246v1), [Quasi-stationary distributions of non-absorbing Markov chains](https://arxiv.org/abs/2409.19246v1). It says: “In our setting, the hitting time of the absorbing set is replaced by an optimal strong stationary time”

**Sources:**

- [Roberto Fernandez, Francesco Manzo, Matteo Quattropani, Elisabetta Scoppola, Quasi-stationary distributions of non-absorbing Markov chains, arXiv:2409.19246 (2024)](https://arxiv.org/abs/2409.19246v1)

### Averaging a Markov generator with its time reversal gives reversibility

**Remember:** Average each rate with its reverse, and the flows balance.

*True by definition.* MSC 60J27 (Continuous-time Markov processes on discrete state spaces), 60J35. arXiv math.PR. Level 4: research.

**Definition.** Fix a finite-state generator L, a strictly positive law π, and a symmetric mean M that is homogeneous of degree one on nonnegative numbers. The mean reversiblization averages each rate with its π-reversed rate: for x ≠ y the new rate is M(L(x,y), π(y)L(y,x)/π(x)), and each diagonal entry is minus the sum of the rest of its row.

**Problem.** Every such mean reversiblization is π-reversible. That is, π(x) times the new rate from x to y equals π(y) times the new rate from y to x.

**How the definition helps.** Multiplying by π(x) and using homogeneity gives π(x)M(L(x,y), π(y)L(y,x)/π(x)) = M(π(x)L(x,y), π(y)L(y,x)) (our own proof). This is unchanged when x and y swap because M is symmetric, which is detailed balance (our own proof).

**Paper or page:** [Systematic approaches to generate reversiblizations of Markov chains](https://arxiv.org/abs/2303.03650v4). It says: “In this second approach, we construct new reversiblizations via different natural notions of generalized means such as the Cauchy mean or the dual mean.”

**Sources:**

- [Michael C. H. Choi, Geoffrey Wolfer, Systematic approaches to generate reversiblizations of Markov chains, arXiv:2303.03650 (2023)](https://arxiv.org/abs/2303.03650v4)

### A weak Poincaré inequality gives convergence rates for slowly mixing Markov chains

**Remember:** Allow a small remainder to measure slower mixing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60J46 (Dirichlet form methods in Markov processes), 60J05, 60J22. arXiv math.ST, stat.CO. Level 4: research.

**Definition.** For a Markov operator P preserving π, let Q = P\*P on L²(π), where P\* is its adjoint. A weak Poincaré inequality bounds variance by energy up to a remainder of any size r &gt; 0: Varπ(f) ≤ α(r)⟨f,(I−Q)f⟩ + r(sup f − inf f)² for every bounded real f, with α(r) finite.

**Problem.** A weak Poincaré inequality for a reversible-type operator built from the chain gives explicit bounds on how fast the chain approaches equilibrium. The bounds can be slower than geometric, which covers cases such as pseudo-marginal methods.

**How the definition helps.** The energy ⟨f,(I−Q)f⟩ equals Varπ(f) − Varπ(Pf), the variance one step of P removes (our own). So the inequality bounds the variance of each iterate recursively, since applying P cannot increase oscillation (our own). Choosing r in that recursion gives rates governed by α, including rates slower than geometric (our own).

**Paper or page:** [Comparison of Markov chains via weak Poincaré inequalities with application to pseudo-marginal MCMC](https://arxiv.org/abs/2112.05605v2). It says: “Associated proofs are simpler than those relying on drift/minorization conditions and the tools developed allow us to recover and further extend known results as particular cases.”

**Sources:**

- [Christophe Andrieu, Anthony Lee, Sam Power, Andi Q. Wang, Comparison of Markov chains via weak Poincaré inequalities with application to pseudo-marginal MCMC, Ann. Statist. 50(6): 3592-3618 (December 2022)](https://arxiv.org/abs/2112.05605v2)

### Enhanced Brownian rough paths give diffusion large deviations by contraction

**Remember:** Enhance the driving noise so that its solution depends continuously on it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60L20 (Rough paths), 60F10, 60H10. arXiv math.PR. Level 4: research.

**Definition.** For 2 &lt; p &lt; 3, enhanced Brownian motion records each Brownian increment together with its second iterated Stratonovich integral. In its p-variation topology, level one converges in p-variation and level two in p/2-variation, and in this topology the solution map of the equation is continuous.

**Problem.** Take a Stratonovich equation on a finite interval with fixed initial value, smooth bounded coefficients with bounded derivatives, and Brownian noise scaled by √ε. Its solutions satisfy a large deviation principle with the Freidlin–Wentzell rate, the least energy ½∫\|ḣ\|² of an absolutely continuous driving path h from zero that produces the given path.

**How the definition helps.** Lyons' universal limit theorem makes the solution map continuous in the rough path metric, so the contraction principle transfers the large deviation principle of enhanced Brownian motion to the solutions. The rate becomes the infimum of driving energies over the paths that produce each solution (our own explanation). In the uniform metric on ordinary paths the solution map need not be continuous (our own comparison).

**Wikipedia:** [Rough path](https://en.wikipedia.org/wiki/Rough_path). It says: “Therefore, the Contraction principle in large deviations theory reduces Freidlin–Wentzell's problem to demonstrating the large deviation principle for (t,√εBₜ) in the p-variation topology.”

**Sources:**

- [T. Lyons, Differential equations driven by rough signals, Revista Matemática Iberoamericana 14 (1998)](https://doi.org/10.4171/RMI/240)
- [M. Ledoux, Z. Qian and T. Zhang, Large deviations and support theorem for diffusion processes via rough paths, Stochastic Processes and their Applications 102 (2002)](https://doi.org/10.1016/S0304-4149(02)00176-X)

### Geometric rough paths defined by limits preserve the product rule

**Remember:** Limits of smooth paths keep the rules of smooth calculus.

*True by definition. Confidence: medium.* MSC 60L20 (Rough paths), 60H05. arXiv math.PR. Level 4: research.

**Definition.** For p ≥ 1, a geometric p-rough path is a limit of the signatures of smooth paths, truncated after degree ⌊p⌋, where each level k from 1 to ⌊p⌋ converges in p/k-variation. So it is a limit of smooth data, for which ordinary calculus holds (our own explanation).

**Problem.** Let U and V be real solution coordinates driven by the same geometric rough path. Then d(UV) = U dV + V dU if the equations have smooth bounded coefficients with bounded derivatives.

**How the definition helps.** Smooth solutions obey the ordinary product rule, and the continuity theorem for rough solutions and their integrals carries it to the limit (our own explanation). For the Itô definition, the product rule instead adds a term from the accumulated products of the two increments (our own comparison). For Brownian motion, building a geometric enhancement is a separate step (our own explanation).

**Wikipedia:** [Rough path](https://en.wikipedia.org/wiki/Rough_path). It says: “In fact any enhancement of Brownian motion as a geometric rough path will give rise a calculus that satisfies this classical product rule.”

**Sources:**

- [T. Lyons, Differential equations driven by rough signals, Revista Matemática Iberoamericana 14 (1998)](https://doi.org/10.4171/RMI/240)

### Tree-like equivalence makes the path signature one-to-one

**Remember:** Retraced pieces leave no trace, so the signature forgets exactly those.

*Rules out counterexamples.* MSC 60L20 (Rough paths), 26A45. arXiv math.CA, math.PR. Level 4: research.

**Definition.** A loop is tree-like if it factors as φ ∘ h, where φ is continuous and h is a continuous loop in a real tree, a space in which any two points are joined by a unique arc. Two paths based at zero are tree-like equivalent if the first followed by the translated reverse of the second is a tree-like loop.

**Problem.** Two continuous finite-variation paths in ℝᵈ based at zero have equal signatures exactly when they are tree-like equivalent. Thus signatures distinguish the equivalence classes.

**How the definition helps.** A tree-like loop only retraces its steps, so its signature is trivial, and signatures multiply when paths are joined, so equivalent paths have equal signatures (our own). A segment followed by its reverse shows that the signature is not one-to-one on plain paths (our own example). The hard converse, that equal signatures force tree-like equivalence, is the theorem of Hambly and Lyons.

**Paper or page:** [Topologies on unparameterised path space](https://arxiv.org/abs/2206.11153v2). It says: “The 2010 paper \[12\] of Hambly and Lyons showed that the signature is injective on the space of continuous finite-variation paths up to a general notion of reparameterisation called tree-like equivalence.”

**Sources:**

- [Thomas Cass, William F. Turner, Topologies on unparameterised path space, arXiv:2206.11153 (2022)](https://arxiv.org/abs/2206.11153v2)
- [Hambly, Lyons, Uniqueness for the signature of a path of bounded variation and the reduced path group, Annals of Mathematics 171 (2010), 109–167](https://doi.org/10.4007/annals.2010.171.109)
