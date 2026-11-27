### Bayesian odds update by multiplication

**Remember:** Multiply the old odds by how strongly the evidence favors the hypothesis.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The odds of a hypothesis are its probability divided by the probability of its complement. After observing evidence, use conditional probabilities in the same ratio.

**Problem.** Posterior odds equal prior odds times the ratio of the evidence probabilities under the hypothesis and its complement. Assume the prior odds are finite and nonzero, and the evidence has positive probability under the complement.

**How the definition helps.** Taking the ratio cancels the shared probability of the evidence in Bayes’ two formulas (our own). The work lies in Bayes’ theorem, which rewrites each conditional probability using the common joint event (our own).

**Wikipedia:** [Bayes' theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem). It says: “This is often summarized by saying that the posterior odds are the prior odds times the likelihood.”

**Sources:** none listed. No primary source with a working link was found.

### Countable additivity makes probability continuous on nested events

**Remember:** Add the new pieces at each step.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A probability measure assigns each event a nonnegative number and assigns 1 to the whole space. Countable additivity says that the probability of a union of countably many disjoint events equals the sum of their probabilities.

**Problem.** When each event contains the previous one, their probabilities approach the probability of their union. When each event lies inside the previous one, their probabilities approach the probability of their intersection.

**How the definition helps.** Countable additivity sums the pieces that enter for the first time at each step (our own). The partial sums give the successive event probabilities, and taking complements gives the decreasing case (our own). Starting with finite additivity instead requires a continuity assumption to pass from finite partial unions to the full union (our own).

**Paper or page:** [Probability of Limit of Sequence of Events/Increasing](https://proofwiki.org/wiki/Probability_of_Limit_of_Sequence_of_Events/Increasing). It says: “P(A) = limₙ→∞ P(Aₙ)”

**Sources:** none listed. No primary source with a working link was found.

### Indicators count how many events occur on average

**Remember:** Count with zeros and ones, then average each one separately.

*True by definition. Confidence: medium.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** An event indicator equals 1 when its event occurs and 0 otherwise. Define the count of events that occur as the sum of their indicators.

**Problem.** For any finite list of events, the expected number that occur is the sum of their probabilities. The events need not be independent.

**How the definition helps.** Writing the count as a sum lets us average each indicator without listing joint outcomes (our own). Linearity of expectation does the work, and each indicator’s average is its event probability (our own).

**Paper or page:** [Integral of Characteristic Function](https://proofwiki.org/wiki/Integral_of_Characteristic_Function). It says: “The integral of the characteristic function of a measurable set over a measure space equals the measure of that set.”

**Sources:** none listed. No primary source with a working link was found.

### Mean squared deviation makes variance nonnegative and unchanged by shifts

**Remember:** Squares cannot be negative, and shifting X also shifts its mean.

*True by definition. Confidence: medium.* MSC 60A05 (Axioms; other general questions in probability), 62A01. arXiv math.PR, math.ST. Level 1: early undergraduate.

**Definition.** Let X be a random variable for which the mean of X² is finite. The variance is the mean of (X − μ)², where μ is the mean of X. A common alternative formula subtracts the square of the mean from the mean of X².

**Problem.** Variance is nonnegative and vanishes exactly when X is constant with probability one. Adding a constant to X does not change its variance.

**How the definition helps.** The squared-deviation definition makes nonnegativity and invariance under shifts visible in the same formula. A nonnegative variable has mean zero only if it vanishes with probability one. Adding a constant shifts X and its mean equally, so the deviation does not change. With the alternative formula, nonnegativity needs an inequality such as Cauchy–Schwarz (our own). The comparison takes only an expansion of the square and linearity of the mean.

**Wikipedia:** [Variance](https://en.wikipedia.org/wiki/Variance). It says: “Variance is non-negative because the squares are positive or zero”

**Sources:** none listed. No primary source with a working link was found.

### Mutual independence asks every subfamily to multiply, excluding pairwise-only examples

**Remember:** Pairs are not enough; every finite subfamily must multiply.

*Rules out counterexamples.* MSC 60A05 (Axioms; other general questions in probability), 60A10. arXiv math.PR. Level 1: early undergraduate.

**Definition.** Events are pairwise independent if every two of them are independent. They are mutually independent if, for every finite subfamily, the probability of the intersection is the product of the probabilities. An infinite family is independent if all its finite subfamilies are.

**Problem.** For mutually independent random variables, the joint law is the product of the marginal laws. So the expectation of a product of several integrable ones is the product of their expectations. Functions of disjoint groups of them are again independent.

**How the definition helps.** Mutual independence says exactly that the joint law is the product measure, so the product rules follow at once. Pairwise independence does not give this. Toss two fair coins, let A and B be heads on the first and on the second coin, and let C be the event that they agree (our own example). Each pair of A, B, C is independent, but A and B together force C.

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29). It says: “For example, he gave the first example showing that pairwise independence does not imply mutual independence.”

**Sources:**

- [A. Kolmogoroff, Grundbegriffe der Wahrscheinlichkeitsrechnung, Springer, 1933](https://doi.org/10.1007/978-3-642-49888-6)

### Restricted probabilities become a probability measure after normalization

**Remember:** Keep only the outcomes in B, then scale their total to one.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** For an event B with P(B) &gt; 0, the conditional probability of A given B is P(A ∩ B)/P(B). For equally likely outcomes in a finite space, this ratio counts the fraction of outcomes in B that also belong to A.

**Problem.** For fixed B with P(B) &gt; 0, the conditional probabilities P(A given B) form a probability measure on the original events.

**How the definition helps.** Restricting each event to B keeps disjoint pieces disjoint, so their probabilities still add (our own). Dividing by P(B) preserves these sums and gives the whole space probability one (our own).

**Paper or page:** [Conditional Probability Defines Probability Space](https://proofwiki.org/wiki/Conditional_Probability_Defines_Probability_Space). It says: “Then (Ω, Σ, Q) is a probability space.”

**Sources:** none listed. No primary source with a working link was found.

### The probability product rule makes independence symmetric even for null events

**Remember:** The intersection and the product do not depend on event order.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Events A and B are independent if P(A ∩ B) = P(A)P(B). The conditional test P(A \| B) = P(A) gives the same condition when P(B) is positive.

**Problem.** If A is independent of B, then B is independent of A. Every event is independent of every event with probability zero.

**How the definition helps.** The product definition makes symmetry immediate because both the intersection and the product are unchanged when A and B switch places. If P(B) = 0, then A ∩ B also has probability zero, so both sides vanish (our own). The conditional test cannot be used when the conditioning event has probability zero. For a positive conditioning probability, multiplying or dividing by P(B) proves the two tests agree.

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29). It says: “they are not the preferred definition, as the conditional probabilities may be undefined if P(A) or P(B) are 0. Furthermore, the preferred definition makes clear by symmetry that when A is independent of B, B is also independent of A.”

**Sources:** none listed. No primary source with a working link was found.

### The product rule defines independence even for events of probability zero

**Remember:** Multiply, do not condition, and events of probability zero cause no trouble.

*Makes the theorem clean to state or prove.* MSC 60A05 (Axioms; other general questions in probability). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Events A and B are independent when Pr(A ∩ B) = Pr(A) Pr(B). The other definition asks Pr(A \| B) = Pr(A), which needs Pr(B) &gt; 0.

**Problem.** With the product rule, independence is symmetric in A and B, and an event of probability 0 is independent of every event (our own). When Pr(A) &gt; 0 and Pr(B) &gt; 0, the product rule agrees with the conditional definition.

**How the definition helps.** The product form needs no division, so it makes sense for every pair of events and is visibly symmetric. The conditional form breaks down when the conditioning event has probability 0. When both forms make sense, their agreement is one line of algebra.

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29). It says: “Although the derived expressions may seem more intuitive, they are not the preferred definition, as the conditional probabilities may be undefined if P(A) or P(B) are 0.”

**Paper or page:** [Equivalence of Definitions of Independent Events](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Independent_Events). It says: “Let A, B ∈ Σ be events of 𝓔 such that Pr(A) &gt; 0 and Pr(B) &gt; 0.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Independent Events](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Independent_Events)

### A squared deviation detects constancy with probability one

**Remember:** Zero variance ignores changes on events of probability zero.

*Rules out counterexamples.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Variance is the mean squared distance from the mean. Call X constant almost surely if it equals some constant with probability one, even if it differs on outcomes of probability zero.

**Problem.** If E\[X²\] is finite, X has zero variance exactly when it is constant almost surely.

**How the definition helps.** A squared distance can average to zero even when it is positive on an event of probability zero (our own). A nonnegative variable averages to zero exactly when it vanishes with probability one (our own). For a uniform draw from \[0, 1\], set X to 1 at ½ and to 0 elsewhere (our own). Then X takes two values and has zero variance (our own).

**Paper or page:** [Random Variable has Zero Variance iff Almost Surely Constant](https://proofwiki.org/wiki/Random_Variable_has_Zero_Variance_iff_Almost_Surely_Constant). It says: “That is, X is almost surely constant.”

**Sources:** none listed. No primary source with a working link was found.

### Averages on partition cells let known factors come out

**Remember:** A factor known on a cell is constant throughout that cell.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Split the outcomes into finitely many disjoint groups, each with positive probability. On each group, the conditional expectation of X equals the mean of X within that group, using probabilities rescaled to total one.

**Problem.** Suppose E\[\|X\|\] is finite and Y takes one real value on each group. The conditional expectation of XY given the group equals Y times the conditional expectation of X given the group.

**How the definition helps.** Within each group, Y is a constant multiplier in the weighted average (our own). To recover the general definition, multiply each group average by its group probability (our own). The result equals the integral of X over that group, and adding gives the same identity for every union of groups (our own).

**Paper or page:** [Rule for Extracting Random Variable from Conditional Expectation of Product](https://proofwiki.org/wiki/Rule_for_Extracting_Random_Variable_from_Conditional_Expectation_of_Product). It says: “E\[XY ∣ G\] = Y E\[X ∣ G\] almost everywhere.”

**Sources:** none listed. No primary source with a working link was found.

### Centered products make uncorrelated variances add

**Remember:** Zero covariance leaves only the individual variances.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The covariance of X and Y is the average of (X − E\[X\])(Y − E\[Y\]). Two variables are uncorrelated when their covariance is zero.

**Problem.** Suppose each variable in a finite list has a finite average square and each distinct pair is uncorrelated. The variance of their sum equals the sum of their variances.

**How the definition helps.** With centered variables, expanding the square of their sum leaves one covariance for each ordered pair of distinct variables (our own). These terms vanish, leaving the individual variances (our own). Expanding one centered product also gives the usual formula E\[XY\] − E\[X\]E\[Y\] (our own).

**Paper or page:** [Covariance of Sums of Random Variables](https://proofwiki.org/wiki/Covariance_of_Sums_of_Random_Variables). It says: “Cov(Σᵢ₌₁ⁿ Xᵢ, Σⱼ₌₁ⁿ Yⱼ) = Σᵢ₌₁ⁿ Σⱼ₌₁ⁿ Cov(Xᵢ, Yⱼ)”

**Sources:** none listed. No primary source with a working link was found.

### Centering at the mean splits squared prediction error

**Remember:** Center at the mean and the mixed term disappears.

*True by definition. Confidence: medium.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A centered variable is X − E\[X\], the deviation of X from its mean. This choice of origin gives the deviation mean zero.

**Problem.** If E\[X²\] is finite, the mean of X is the unique constant a that minimizes the expected squared error E\[(X − a)²\].

**How the definition helps.** Using the centered variable makes the cross term disappear when we square X − a and average (our own). Writing m for the mean gives E\[(X − a)²\] = E\[(X − m)²\] + (m − a)² (our own). A direct expansion around zero requires completing the square in a to reach the same formula (our own).

**Paper or page:** [First Central Moment is Zero](https://proofwiki.org/wiki/First_Central_Moment_is_Zero). It says: “Then the first central moment μ₁ of X is equal to 0.”

**Sources:** none listed. No primary source with a working link was found.

### Separate tail averages show that Cauchy variables have no mean

**Remember:** Average both tails before subtracting them.

*Rules out counterexamples.* MSC 60A10 (Probabilistic measure theory), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** To define a finite expectation, average the positive and negative parts separately and require both averages to be finite. The positive part is max(X, 0) and the negative part is max(−X, 0). Subtract the second average from the first.

**Problem.** The standard Cauchy law, with density 1/(π(1 + x²)), has no expectation. Cutting the integral at equal distances on both sides of zero gives zero instead.

**How the definition helps.** Separate averages prevent symmetric cutoffs from giving a false mean (our own). Each tail average diverges by the integral of x/(1 + x²) from zero to infinity (our own). Equal cutoffs cancel the two divergent tails, but the definition does not subtract infinity from infinity (our own).

**Wikipedia:** [Cauchy distribution](https://en.wikipedia.org/wiki/Cauchy_distribution). It says: “The Cauchy distribution does not have finite moments of order greater than or equal to one”

**Sources:** none listed. No primary source with a working link was found.

### Convergence in distribution ignores the jumps of the limit

**Remember:** Check the distribution function only where the limit has no jump.

*Rules out counterexamples.* MSC 60B10 (Convergence of probability measures), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** Xₙ converges in distribution to X when Fₙ(x) → F(x) at every point x where the distribution function F of X is continuous. The definition leaves out the points where F jumps on purpose.

**Problem.** If Xₙ is uniform on (0, 1/n), then Xₙ converges in distribution to the constant 0.

**How the definition helps.** Leaving out the jump points of F removes exactly the failure in this example. Here Fₙ(0) = 0 for every n, but the limit has F(0) = 1. At every other x the distribution functions converge. With this definition, convergence in distribution also matches the test with bounded continuous functions, but that equivalence needs a proof.

**Wikipedia:** [Convergence of random variables](https://en.wikipedia.org/wiki/Convergence_of_random_variables). It says: “The requirement that only the continuity points of F should be considered is essential.”

**Sources:** none listed. No primary source with a working link was found.

### Top-k truncation is as far in total variation as its discarded mass

**Remember:** The tail mass is exactly the total variation cost of dropping it.

*True by definition.* MSC 60B10 (Convergence of probability measures), 68T07. arXiv cs.LG, math.PR. Level 1: early undergraduate.

**Definition.** Attention gives a probability distribution P over n positions. Top-k truncation keeps the k largest probabilities and rescales them to sum to 1. Total variation distance is the largest difference between the probabilities that two distributions give to one event.

**Problem.** The total variation distance between P and its top-k truncation equals the probability that P gives to the discarded positions.

**How the definition helps.** Total variation is a maximum over events, and the set of discarded positions attains it. In our own argument, let m be the kept mass. The discarded set has probability 1 − m under P and 0 under the truncation. Every kept position gains probability, so no event loses more. The paper then bounds this mass using only the ordered scores.

**Paper or page:** [A Mathematical Theory of Top-k Sparse Attention via Total Variation Distance](https://arxiv.org/abs/2512.07647v1). It says: “we show that the total-variation distance coincides with the discarded softmax tail mass”

**Sources:**

- [Georgios Tzachristas, Lei Deng, Ioannis Tzachristas, Gong Zhang, Renhai Chen, A Mathematical Theory of Top-k Sparse Attention via Total Variation Distance, arXiv:2512.07647v1 (2025)](https://arxiv.org/abs/2512.07647v1)

### All medians minimize absolute error

**Remember:** Keep both halves balanced, even when that leaves a whole interval.

*Makes the theorem clean to state or prove.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A median is any number with at least half the probability at or below it and at least half at or above it. For an even list, a common convention picks the midpoint of the two middle values instead.

**Problem.** For a random variable with finitely many possible values, the medians are exactly the numbers that minimize mean absolute error.

**How the definition helps.** The two median inequalities give exactly the slope conditions for a minimum (our own). At a candidate m, the left slope of the expected error is 2P(X &lt; m) − 1 (our own). The right slope is 2P(X ≤ m) − 1 (our own). The error is convex, so it reaches a minimum exactly when these slopes bracket zero (our own). For equal probabilities at zero and two, every point between them minimizes the error (our own).

**Wikipedia:** [Median](https://en.wikipedia.org/wiki/Median). It says: “m is a median of X if and only if m is a minimizer of the mean absolute error with respect to X.”

**Sources:** none listed. No primary source with a working link was found.

### Counting Bernoulli successes gives the binomial law and moments

**Remember:** Count successes first, then read off their probabilities and moments.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A binomial variable X counts successes in n independent trials with the same success probability p. The binomial coefficient C(n, k) counts ways to choose k of the n trials.

**Problem.** For 0 &lt; p &lt; 1 and integers 0 ≤ k ≤ n, P(X = k) equals C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ. The mean is np and the variance is np(1 − p).

**How the definition helps.** Counting successes reduces X = k to choosing which k trials succeed (our own). Independence gives every such choice probability pᵏ (1 − p)ⁿ⁻ᵏ (our own). Each trial contributes 0 or 1, with mean p and variance p(1 − p) (our own). Adding independent contributions gives both moments directly from the trials instead of summing the probability formula (our own).

**Paper or page:** [Probability Mass Function of Binomial Distribution](https://proofwiki.org/wiki/Probability_Mass_Function_of_Binomial_Distribution). It says: “The probability mass function (pmf) of a binomially distributed random variable X is equal to:”

**Sources:** none listed. No primary source with a working link was found.

### Counting endpoints gives right continuity

**Remember:** Count the point itself to get the limit from the right.

*Rules out counterexamples.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Define the cumulative distribution function at x as the probability of a value at or below x. The strict alternative counts only values below x.

**Problem.** Every cumulative distribution function is right-continuous, even at a point with positive probability.

**How the definition helps.** As thresholds decrease to x, the shrinking events intersect in the event that the value is at or below x (our own). The work lies in continuity of probability for decreasing events, which follows from countable additivity (our own). For a variable always equal to zero, the strict alternative is zero at zero but one just to its right (our own).

**Wikipedia:** [Cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function). It says: “Every probability distribution defined on the real numbers, discrete or "mixed" as well as continuous, is uniquely identified by a right-continuous monotone increasing function”

**Sources:** none listed. No primary source with a working link was found.

### Counting trials to the last success adds geometric waits

**Remember:** Break the wait at each success.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A negative binomial wait counts trials through the rth success, where r is a positive integer. Trials are independent with the same success probability 0 &lt; p ≤ 1. A geometric wait counts trials through the next success.

**Problem.** The negative binomial wait is distributed as a sum of r independent geometric waits with success probability p. Its mean is r/p for 0 &lt; p ≤ 1.

**How the definition helps.** The waiting-time definition cuts the total into successive waits instead of starting from the probability formula (our own). Trial independence makes the probabilities of the prescribed blocks multiply (our own). A geometric wait has mean 1/p, so linearity gives the mean of the sum (our own).

**Wikipedia:** [Negative binomial distribution](https://en.wikipedia.org/wiki/Negative_binomial_distribution). It says: “The expected total number of trials needed to see r successes is r/p.”

**Sources:** none listed. No primary source with a working link was found.

### Distribution function jumps give exact point probabilities

**Remember:** The jump is exactly the mass at the point.

*Makes the theorem clean to state or prove.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The distribution function of a real random variable X is F(x) = P(X ≤ x). Its jump at x is F(x) minus the limit of F(y) as y approaches x from below.

**Problem.** The jump of F at x equals P(X = x).

**How the definition helps.** The at-or-below convention includes x, while the left limit counts only outcomes below x (our own). Continuity of probability along increasing events identifies that left limit (our own).

**Paper or page:** [Left Limit of Distribution Function of Finite Borel Measure](https://proofwiki.org/wiki/Left_Limit_of_Distribution_Function_of_Finite_Borel_Measure). It says: “limᵧ→ₓ⁻ Fμ(y) = μ((−∞, x))”

**Sources:** none listed. No primary source with a working link was found.

### Exponential minimum rates add

**Remember:** The minimum exceeds a threshold exactly when every wait exceeds it.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Define an exponential wait of rate λ by the chance exp(−λt) that it lasts past time t. Here λ is positive and t is nonnegative. The usual density instead gives probabilities by integrating over intervals.

**Problem.** The minimum of finitely many independent exponential waits is exponential, with rate equal to the sum of their rates.

**How the definition helps.** The minimum lasts past t exactly when every wait lasts past t (our own). Independence turns that probability into a product of exponentials, so their rates add (our own). To recover the density, differentiate one minus the probability of lasting past t (our own).

**Wikipedia:** [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution). It says: “is also exponentially distributed, with parameter λ = λ₁ + ⋯ + λₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Exponential tail probabilities cancel away elapsed time

**Remember:** Divide two exponential tails and elapsed time cancels.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Define an exponential wait of rate λ &gt; 0 by P(X &gt; t) = exp(−λt) for t ≥ 0. This uses the chance of still waiting, rather than a formula for the density.

**Problem.** An exponential wait is memoryless. For s, t ≥ 0, P(X &gt; s + t given X &gt; s) equals P(X &gt; t).

**How the definition helps.** The tail definition turns the conditional probability into the ratio exp(−λ(s + t))/exp(−λs) (our own). Subtracting exponents removes s, while a single derivative recovers the usual density from the tail (our own).

**Wikipedia:** [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution). It says: “The exponential distribution and the geometric distribution are the only memoryless probability distributions.”

**Sources:** none listed. No primary source with a working link was found.

### Factorial moments count distinct successes

**Remember:** Count distinct trials so every ordered group succeeds with the same probability.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The kth factorial moment is the average number of ways to choose k distinct items in order from X items. The ordinary kth moment instead averages the number of ordered choices that allow repeats.

**Problem.** Let X count successes in n independent trials with common success probability p. For 1 ≤ k ≤ n, its kth factorial moment equals n(n − 1)⋯(n − k + 1) times pᵏ.

**How the definition helps.** Every ordered group of k distinct trials succeeds with probability p to the kth power (our own). Add these probabilities to get the average count (our own). The work moves to interpreting a falling factorial as the count of ordered choices without repeats (our own).

**Wikipedia:** [Factorial moment](https://en.wikipedia.org/wiki/Factorial_moment). It says: “then the factorial moments of X are E\[(X)ᵣ\] = (n choose r) pʳ r! = (n)ᵣ pʳ,”

**Sources:**

- [R. B. Potts, Note on the Factorial Moments of Standard Distributions, Australian Journal of Physics 6 (1953), 498–499.](https://doi.org/10.1071/ph530498)

### Geometric waits forget past failures

**Remember:** Past failures leave the next toss unchanged.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Define the geometric wait as the number of trials up to and including the first success. The trials are independent and have the same positive success probability. The alternative lists the probability of each possible wait length.

**Problem.** Given no success in the first m trials, the remaining wait has the original geometric law. Assume that the event we condition on has positive probability.

**How the definition helps.** The future trials have the same law even after conditioning on earlier failures (our own). The work of recovering the probability formula lies in multiplying the probabilities of consecutive failures and one success (our own).

**Wikipedia:** [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution). It says: “The geometric distribution is the only memoryless discrete probability distribution.”

**Sources:** none listed. No primary source with a working link was found.

### Independent binomial counts add

**Remember:** Join the trial lists to add the counts.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A binomial random variable counts successes in a fixed number of independent trials with the same success probability. The alternative definition lists the probabilities using binomial coefficients.

**Problem.** The sum of independent binomial counts from m and n trials with the same success probability is binomial with m + n trials.

**How the definition helps.** Putting the trial lists together adds their counts without changing the success probability (our own). Independence of the two counts allows us to model them with two independent lists (our own). The work of recovering the probability formula lies in counting which trials succeed (our own).

**Paper or page:** [Sum of Independent Binomial Random Variables](https://proofwiki.org/wiki/Sum_of_Independent_Binomial_Random_Variables). It says: “Then their sum Z = X + Y is distributed as: Z ∼ Binomial(m + n, p)”

**Sources:** none listed. No primary source with a working link was found.

### Joint normality makes uncorrelated normal variables independent

**Remember:** Jointly normal means every straight-line mixture is normal, not just each variable alone.

*Rules out counterexamples.* MSC 60E05 (Probability distributions: general theory), 62H05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** Random variables X and Y are jointly normal (bivariate normal) when every linear combination aX + bY is normally distributed.

**Problem.** If X and Y are jointly normal and uncorrelated, then they are independent.

**How the definition helps.** For jointly normal variables, the mean and covariance fix the joint law, so zero covariance gives a product law. Without joint normality this fails. Let X be standard normal, W be ±1 with equal probability independent of X, and Y = WX; then X and Y are standard normal and uncorrelated, but \|Y\| = \|X\|. Joint normality excludes this example, because X + Y is 0 with probability 1/2.

**Wikipedia:** [Misconceptions about the normal distribution](https://en.wikipedia.org/wiki/Misconceptions_about_the_normal_distribution). It says: “In that case, if X and Y are uncorrelated then they are independent.”

**Sources:** none listed. No primary source with a working link was found.

### Standardization makes correlation unitless

**Remember:** Remove the offset and the units before multiplying.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Standardize each variable by subtracting its mean and dividing by its positive standard deviation. Define correlation as the average product of the two standardized variables. Another formula divides their covariance, the average product of the centered variables, by both standard deviations.

**Problem.** Adding constants or multiplying by positive constants separately does not change the population correlation. Assume both variances are finite and positive.

**How the definition helps.** Standardizing either variable cancels a change of origin or a positive change of scale (our own). Adding a constant shifts the mean by the same amount, so the centered value stays the same (our own). Positive rescaling multiplies the centered value and standard deviation by the same factor (our own). Taking the expected product gives the covariance formula (our own).

**Wikipedia:** [Pearson correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient). It says: “A key mathematical property of the Pearson correlation coefficient is that it is invariant under separate changes in location and scale in the two variables.”

**Sources:** none listed. No primary source with a working link was found.

### Subset overlap reveals hypergeometric symmetry

**Remember:** The overlap does not care which subset you draw first.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 1: early undergraduate.

**Definition.** Take two independent, uniformly chosen subsets of sizes K and n from a population of size N. Define the hypergeometric count as the number of elements they share. The usual sampling model fixes the K marked elements in advance.

**Problem.** In the hypergeometric law, swapping the number of marked elements and the sample size leaves the count distribution unchanged.

**How the definition helps.** Swapping the two subsets does not change their overlap (our own). To recover the usual model, condition on the marked subset (our own). Each fixed subset of size K gives the same count law because relabeling the population changes no sampling probabilities (our own).

**Wikipedia:** [Hypergeometric distribution](https://en.wikipedia.org/wiki/Hypergeometric_distribution). It says: “The symmetry in K and n stems from the fact that the two rounds are independent”

**Sources:** none listed. No primary source with a working link was found.

### The generalized inverse makes inverse-transform sampling work for every distribution

**Remember:** The quantile at p is the first x where the distribution function reaches p.

*Makes the theorem clean to state or prove.* MSC 60E05 (Probability distributions: general theory), 65C10. arXiv math.PR, stat.CO. Level 1: early undergraduate.

**Definition.** The quantile function of a distribution function F is Q(p) = inf{x : F(x) ≥ p} for p in (0, 1). In words, Q(p) is the smallest x at which F reaches p. It is the unique function with Q(p) ≤ x if and only if p ≤ F(x).

**Problem.** If U is uniform on (0, 1), then Q(U) has distribution function F. This holds for every F, including those with jumps and flat parts.

**How the definition helps.** The equivalence Q(p) ≤ x if and only if p ≤ F(x) gives P(Q(U) ≤ x) = P(U ≤ F(x)) = F(x) in one line (our own). The ordinary inverse F⁻¹ exists only when F is continuous and strictly increasing, so it fails for discrete distributions.

**Wikipedia:** [Quantile function](https://en.wikipedia.org/wiki/Quantile_function). It says: “the quantile function returns the minimum value of x from amongst all those values whose c.d.f value exceeds p”

**Sources:** none listed. No primary source with a working link was found.

### Generating function coefficients give every count probability

**Remember:** The coefficient at degree k is the chance of count k.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** The probability generating function of a nonnegative integer count X is the power series whose coefficient of degree k is P(X = k). The series converges for real inputs strictly between −1 and 1.

**Problem.** Two nonnegative integer counts have the same law if their probability generating functions agree on an interval around zero.

**How the definition helps.** Each coefficient is one count probability, so equality of series determines all those probabilities (our own). Differentiating at zero recovers each coefficient (our own). The usual definition averages s raised to X, and grouping outcomes by count gives this series (our own).

**Paper or page:** [Probability Generating Function defines Probability Distribution](https://proofwiki.org/wiki/Probability_Generating_Function_defines_Probability_Distribution). It says: “∀ k ∈ ℕ: P(X = k) = P(Y = k)”

**Sources:** none listed. No primary source with a working link was found.

### Squared deviations turn Markov’s inequality into Chebyshev’s inequality

**Remember:** Square the deviation before you apply Markov’s inequality.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings). arXiv math.PR. Level 1: early undergraduate.

**Definition.** The variance of X is the average of (X − μ)², where μ is its mean. This gives the same value as the difference E\[X²\] − μ².

**Problem.** If X has mean μ and finite variance, the chance that \|X − μ\| ≥ t is at most Var(X)/t² for each t &gt; 0.

**How the definition helps.** Mean squared deviation is exactly the expectation in Markov’s bound for the nonnegative variable (X − μ)² (our own). Using the difference E\[X²\] − μ² instead requires expanding the square to identify this expectation (our own).

**Paper or page:** [Bienaymé-Chebyshev Inequality](https://proofwiki.org/wiki/Bienaymé-Chebyshev_Inequality). It says: “Pr(\|X − μ\| ≥ kσ) ≤ 1/k²”

**Sources:** none listed. No primary source with a working link was found.

### Aperiodicity rules out the flip-flop chain and gives convergence

**Remember:** An aperiodic chain does not keep a rhythm, so it can forget where it started.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A state of a Markov chain has period k when every return to it takes a multiple of k steps, and k is the largest such number. The chain is aperiodic when the period is 1.

**Problem.** For a finite, irreducible and aperiodic Markov chain, the distribution after k steps converges to the stationary distribution from any start. Irreducible means that every state can reach every other state.

**How the definition helps.** Aperiodicity removes the periodic behaviour that blocks convergence. The chain that swaps two states at every step has stationary distribution (1/2, 1/2), but its k-step matrix Pᵏ alternates between the identity and the swap. Irreducibility alone gives a unique stationary distribution, but not convergence. With aperiodicity, Pᵏ converges to the rank-one matrix whose rows are the stationary distribution.

**Wikipedia:** [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “If the Markov chain is additionally irreducible and aperiodic, then there is a unique stationary distribution π. In this case Pᵏ converges to a rank-one matrix in which each row is the stationary distribution π”

**Sources:** none listed. No primary source with a working link was found.

### Detailed balance makes stationarity a one-line check

**Remember:** Balance each pair of states, and the whole chain balances.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 1: early undergraduate.

**Definition.** A Markov chain with transition probabilities Pᵢⱼ satisfies detailed balance for a distribution π when πᵢPᵢⱼ = πⱼPⱼᵢ for every pair of states i, j. In words, the flow from i to j equals the flow from j to i. Such a chain is called reversible.

**Problem.** If π satisfies detailed balance, then π is a stationary distribution: πP = π. The Metropolis–Hastings algorithm uses this to sample from a given distribution.

**How the definition helps.** Summing the detailed balance equation over i gives the stationarity equation at once, because each row of P sums to 1. The condition is local, one pair at a time, so the designer of a sampler can check it without solving πP = π. The price is that it is stronger than needed, since some chains have a stationary distribution without detailed balance.

**Wikipedia:** [Detailed balance](https://en.wikipedia.org/wiki/Detailed_balance). It says: “The detailed balance condition is stronger than that required merely for a stationary distribution, because there are Markov processes with stationary distributions that do not have detailed balance.”

**Sources:**

- [N. Metropolis, A. W. Rosenbluth, M. N. Rosenbluth, A. H. Teller and E. Teller, Equation of State Calculations by Fast Computing Machines, Journal of Chemical Physics 21 (1953)](https://doi.org/10.1063/1.1699114)

### Transition matrix powers compose Markov chain steps

**Remember:** Matrix multiplication sums over the states where you join two paths.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 1: early undergraduate.

**Definition.** In a finite Markov chain, the current state determines the probabilities for the next step. If these rules stay fixed, the transition matrix P lists them by starting row and destination column.

**Problem.** The transition matrix for n + m steps is the product of the matrices for n steps and m steps.

**How the definition helps.** Representing the step probabilities by powers of P turns the composition rule into the addition rule for exponents (our own). To justify that representation, condition on the state after one step and sum over its possible values (our own). Repeating this calculation gives Pⁿ for n steps (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Paper or page:** [Chapman-Kolmogorov Equation](https://proofwiki.org/wiki/Chapman-Kolmogorov_Equation). It says: “P⁽ⁿ ⁺ ᵐ⁾ = P⁽ⁿ⁾ P⁽ᵐ⁾”

**Sources:** none listed. No primary source with a working link was found.

### Countable additivity blocks fair integer lotteries

**Remember:** Countably many equal chances cannot add to one.

*Rules out counterexamples.* MSC 60A05 (Axioms; other general questions in probability), 01A60. arXiv math.PR, math.HO. Level 2: later undergraduate.

**Definition.** Kolmogorov’s definition makes probabilities add over countably many disjoint events, not just finitely many. In a fair lottery on positive integers, all single outcomes have equal probability.

**Problem.** There is no countably additive probability on the positive integers with equal probabilities for every single outcome.

**How the definition helps.** Countable additivity makes the probability of the whole lottery the sum of the single outcomes’ probabilities. In our own proof, any positive common probability would make a sufficiently large finite set have probability greater than one. A common probability of zero gives total probability zero. For our own finitely additive example, allow the finite sets and their complements as events. Give finite sets probability zero and their complements probability one.

**Wikipedia:** [Probability axioms](https://en.wikipedia.org/wiki/Probability_axioms). It says: “The third axiom, σ-additivity, is relatively modern, and originates with Lebesgue's measure theory.”

**Sources:**

- [A. N. Kolmogorov, Foundations of the Theory of Probability (1933, English translation 1950)](https://archive.org/details/foundationsofthe00kolm)

### Independence of σ-algebras makes functions of independent variables independent

**Remember:** A function of X knows no more than X, so independence passes on.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability), 60A10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Two sub-σ-algebras 𝒜 and ℬ are independent if P(A ∩ B) = P(A)P(B) for every A in 𝒜 and B in ℬ. Random variables are independent when the σ-algebras they generate are. The σ-algebra generated by X is the family of sets X⁻¹(U) for measurable U.

**Problem.** If X and Y are independent and f and g are measurable functions, then f(X) and g(Y) are independent. Also, a random variable that is almost surely constant is independent of every other random variable.

**How the definition helps.** The σ-algebra generated by f(X) lies inside the σ-algebra generated by X, so independence of the larger σ-algebras passes to the smaller ones at once (our own). A constant generates the trivial σ-algebra {∅, Ω}, which is independent of everything. With the definition by distribution functions, each fact would need a separate computation (our own). The work moves into checking independence in practice, where the π-λ theorem reduces it to generating π-systems such as the events X ≤ x.

**Wikipedia:** [Independence (probability theory)](https://en.wikipedia.org/wiki/Independence_%28probability_theory%29), [Pi-system](https://en.wikipedia.org/wiki/Pi-system). It says: “Two random variables X and Y defined over Ω are independent (in the old sense) if and only if the σ-algebras that they generate are independent (in the new sense).”

**Sources:**

- [A. Kolmogoroff, Grundbegriffe der Wahrscheinlichkeitsrechnung, Springer, 1933](https://doi.org/10.1007/978-3-642-49888-6)

### Expectation as an integral is linear without independence

**Remember:** Integrate over the same sample space to add variables, even when they depend.

*True by definition. Confidence: medium.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Define E\[X\] as the Lebesgue integral of X over the sample space with respect to its probability measure. Discrete and density formulas instead use the probabilities or density of X alone.

**Problem.** For integrable real random variables X and Y on the same space and a real constant a, E\[X + aY\] = E\[X\] + aE\[Y\]. The variables need not be independent.

**How the definition helps.** The sample-space definition makes linearity of expectation the linearity of the Lebesgue integral (our own explanation). Computing the distribution of X + aY first requires information about the joint distribution, rather than only the two separate laws (our own comparison). The work moves into proving linearity of the integral, starting with finite sums of indicators and passing to general integrable functions (our own explanation).

**Wikipedia:** [Expected value](https://en.wikipedia.org/wiki/Expected_value). It says: “is linear in the sense that, for any random variables X and Y, and a constant a,”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing density slices gives conditional laws

**Remember:** Divide each slice by its area.

*Makes the theorem clean to state or prove.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For real variables X and Y with joint density f, integrating f(x, y) over y gives the marginal density g(x) of X. Wherever 0 &lt; g(x) &lt; ∞, the conditional density of Y given X = x is f(x, y)/g(x).

**Problem.** For measurable sets A and B, integrating P(Y ∈ B given X = x) times g(x) over A gives P(X ∈ A, Y ∈ B). Any measurable choice of conditional laws where g is zero or infinite gives the same probabilities.

**How the definition helps.** Normalization turns each slice into a probability density even when the event X = x has probability zero (our own). Multiplying back by g cancels the normalization, and Tonelli’s theorem gives the joint probability by successive integration (our own).

**Wikipedia:** [Conditional probability distribution](https://en.wikipedia.org/wiki/Conditional_probability_distribution). It says: “Also in this case it is necessary that fₓ(x) &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Product laws make expectations multiply under independence

**Remember:** Independent coordinates can be averaged one at a time.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Independent real variables have a joint law equal to the product of their separate laws. A product law assigns each rectangle A × B the probability P(X ∈ A) P(Y ∈ B).

**Problem.** If independent real variables X and Y have finite expected absolute values, so does XY. Their expectations satisfy E\[XY\] = E\[X\] E\[Y\].

**How the definition helps.** A product law lets us integrate first over one coordinate and then over the other (our own). Agreement on rectangles determines the whole law, connecting this definition to the usual independence test on pairs of events (our own). Tonelli’s theorem factors the average of \|XY\| into two finite averages, so Fubini’s theorem permits successive integration of XY (our own).

**Paper or page:** [Expectation of Product of Independent Random Variables is Product of Expectations/Corollary](https://proofwiki.org/wiki/Expectation_of_Product_of_Independent_Random_Variables_is_Product_of_Expectations/Corollary). It says: “E\[XY\] = E\[X\] E\[Y\]”

**Sources:** none listed. No primary source with a working link was found.

### The image measure definition of law gives the expectation formula

**Remember:** Check the integral identity on indicators, then extend it by approximation.

*True by definition. Confidence: medium.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The law of X is its image measure, which gives a set B the probability P(X ∈ B). Another description of a law uses a density or a list of point probabilities. Those descriptions do not cover all laws.

**Problem.** If g is measurable and nonnegative, or if g(X) is integrable, E\[g(X)\] equals the integral of g against the law of X.

**How the definition helps.** The image measure definition makes both integrals equal P(X ∈ B) when g is the indicator of B (our own explanation). Additivity and monotone convergence extend this to all nonnegative g, and positive and negative parts handle integrable g (our own explanation). Computing the law of g(X) first can require a change of variables, which this proof avoids.

**Wikipedia:** [Law of the unconscious statistician](https://en.wikipedia.org/wiki/Law_of_the_unconscious_statistician). It says: “However, in the framework of measure theory, the discrete case generalizes straightforwardly to general (not necessarily discrete) random elements”

**Sources:** none listed. No primary source with a working link was found.

### A covariance matrix is a matrix of inner products

**Remember:** A weighted sum of centered variables has a nonnegative squared length.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Center each variable by subtracting its mean. The covariance matrix records the average product of each pair of centered variables, including each variable paired with itself.

**Problem.** Every covariance matrix C of finitely many real variables with finite second moments is positive semidefinite. This means aᵀCa ≥ 0 for every real vector a.

**How the definition helps.** The centered-product definition makes aᵀCa the average square of a weighted sum of centered variables (our own). Every square is nonnegative (our own). Expanding each centered product recovers the usual entry formula E\[XY\] − E\[X\]E\[Y\] (our own).

**Wikipedia:** [Covariance matrix](https://en.wikipedia.org/wiki/Covariance_matrix). It says: “Any covariance matrix is symmetric and positive semi-definite and its main diagonal contains variances”

**Sources:** none listed. No primary source with a working link was found.

### A quadratic exponent keeps affine sums of normals normal

**Remember:** Multiplying normal transforms adds their means and variances.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function of X is M(t) = E\[exp(tX)\]. A normal law with mean μ and variance σ² &gt; 0 has M(t) = exp(μt + σ²t²/2) for every real t.

**Problem.** Take finitely many independent normal variables Xᵢ with means μᵢ and positive variances σᵢ². For real b and real weights aᵢ, some nonzero, b + Σᵢ aᵢXᵢ is normal with mean b + Σᵢ aᵢμᵢ and variance Σᵢ aᵢ²σᵢ².

**How the definition helps.** The transform turns a weighted sum into a product with a quadratic exponent (our own). Multiplication by exp(tb) adds a linear term for the shift (our own). Completing the square checks the transform against the usual density, and transform uniqueness identifies the result (our own).

**Paper or page:** [Moment Generating Function of Normal Distribution](https://proofwiki.org/wiki/Moment_Generating_Function_of_Normal_Distribution). It says: “Mₓ(t) = exp(μt + ½σ²t²)”

**Sources:** none listed. No primary source with a working link was found.

### A shared rate makes independent gamma shapes add

**Remember:** The same base lets you add the powers.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function of X is M(t) = E\[exp(tX)\]. A gamma law with positive shape α and positive rate β has M(t) = (1 − t/β)⁻ᵅ for t &lt; β.

**Problem.** The sum of independent gamma variables with the same rate is gamma with that rate and the sum of their shapes.

**How the definition helps.** A common rate gives both generating functions the same base, so multiplying them adds their shape parameters (our own). Uniqueness of moment generating functions identifies the law, while a substitution in the density integral gives the defining transform (our own).

**Paper or page:** [Moment Generating Function of Gamma Distribution](https://proofwiki.org/wiki/Moment_Generating_Function_of_Gamma_Distribution). It says: “Mₓ(t) = (1 − t/β)⁻ᵅ, t &lt; β”

**Sources:** none listed. No primary source with a working link was found.

### Counting ordered pairs makes Poisson variance equal its mean

**Remember:** Remove repeated pairs before canceling factorials.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For a count X, the second factorial moment is E\[X(X − 1)\]. The product X(X − 1) counts ordered pairs of different items, so the factorial moment is their average number.

**Problem.** A Poisson variable of parameter λ &gt; 0 has mean and variance both equal to λ.

**How the definition helps.** The factorial moment cancels two factors of the factorial in the Poisson probabilities (our own). The remaining sum is λ² times the total probability, and canceling one factor likewise gives mean λ (our own). Adding the repeated pairs gives E\[X²\] = λ² + λ, so subtracting the squared mean leaves λ (our own).

**Paper or page:** [Expectation and Variance of Poisson Distribution equal its Parameter](https://proofwiki.org/wiki/Expectation_and_Variance_of_Poisson_Distribution_equal_its_Parameter). It says: “Then the expectation of X equals the variance of X, that is, λ itself.”

**Sources:** none listed. No primary source with a working link was found.

### Exponentiating a normal gives every real moment of a log-normal

**Remember:** A real power of a log-normal is an exponential of its normal logarithm.

*True by definition.* MSC 60E05 (Probability distributions: general theory), 62E15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A variable X is log-normal if X = exp(Y) for a normal variable Y with mean μ and variance σ², where σ &gt; 0. An alternative definition gives a density on the positive real line.

**Problem.** For every real n, the moment E\[Xⁿ\] equals exp(nμ + n²σ²/2).

**How the definition helps.** The exponential definition turns the power Xⁿ into exp(nY), so no log-normal density needs to be integrated (our own). Its mean is the normal moment generating function, the average of exp(tY), evaluated at t = n (our own). Compared with the density proof, the work shifts to one standard Gaussian integral for that function (our own).

**Wikipedia:** [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). It says: “For any real or complex number n, the n-th moment of a log-normally distributed variable X is given by”

**Sources:** none listed. No primary source with a working link was found.

### Exponentiating normals makes independent log-normal products log-normal

**Remember:** Multiplying log-normal variables adds their normal logarithms.

*True by definition.* MSC 60E05 (Probability distributions: general theory), 62E15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A variable X is log-normal if X = exp(Y) for a normal variable Y. Write μ for the mean of Y and σ² for its variance. The alternative definition gives a density on the positive real line when σ &gt; 0.

**Problem.** If X₁ and X₂ are independent log-normal variables, then their product is log-normal. The mean and variance of its logarithm are the respective sums of those of the original logarithms.

**How the definition helps.** The exponential definition turns the product into the exponential of a sum, with no density calculation (our own). The two logarithms are independent, so their sum is normal and its mean and variance add (our own). The density proof would instead compute the density of a product by integration (our own). The work shifts to proving once that independent normal variables add to a normal variable, and that exponentiation gives the log-normal density (our own).

**Wikipedia:** [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). It says: “If two independent, log-normal variables X₁ and X₂ are multiplied \[divided\], the product \[ratio\] is again log-normal”

**Sources:** none listed. No primary source with a working link was found.

### Generating functions show that Poisson means add

**Remember:** Adding Poisson counts adds the coefficients in their exponents.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A count’s probability generating function is the average of s raised to the count, for 0 &lt; s &lt; 1. Define the Poisson law of parameter λ &gt; 0 by the generating function exp(λ(s − 1)), rather than by its probability list.

**Problem.** The sum of independent Poisson variables of means λ and μ is Poisson of mean λ + μ.

**How the definition helps.** Independence multiplies the generating functions, so their exponents add (our own). Expanding the generating function recovers the usual probability list and the uniqueness of power series distinguishes the law (our own).

**Paper or page:** [Sum of Independent Poisson Random Variables is Poisson](https://proofwiki.org/wiki/Sum_of_Independent_Poisson_Random_Variables_is_Poisson). It says: “X + Y ∼ Poisson(λ₁ + λ₂)”

**Sources:** none listed. No primary source with a working link was found.

### Product-measure convolution gives the law of independent sums

**Remember:** Independence gives the product law, and addition gives the convolution.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Define the convolution of laws μ and ν as the image of their product measure under addition. That image assigns a set A the product measure of the pairs (x, y) with x + y in A. The alternative formulas use a sum for discrete probability laws or an integral for densities.

**Problem.** If X and Y are independent real random variables with laws μ and ν, the law of X + Y is their convolution. Neither law needs to be discrete or have a density.

**How the definition helps.** The image measure definition makes the convolution exactly the law of the sum once independence gives the product law (our own explanation). With the older formulas, one instead sums joint probabilities or integrates the joint density (our own comparison). Comparing the definitions in the density case uses Fubini's theorem, which evaluates a product integral by integrating one variable at a time (our own explanation).

**Wikipedia:** [Convolution](https://en.wikipedia.org/wiki/Convolution), [Convolution of probability distributions](https://en.wikipedia.org/wiki/Convolution_of_probability_distributions). It says: “This agrees with the convolution defined above when μ and ν are regarded as distributions”

**Sources:** none listed. No primary source with a working link was found.

### Projecting a joint law gives its marginal laws

**Remember:** Forget one coordinate to get the law of the other.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The joint law of real variables X and Y assigns each measurable set of pairs the probability that (X, Y) belongs to it. The first marginal assigns a set A the joint probability of the strip consisting of pairs whose first coordinate belongs to A.

**Problem.** Projecting the joint law onto the first coordinate gives the law of X. For a joint density, the marginal density of X is the integral over the second coordinate.

**How the definition helps.** The strip in the marginal definition describes exactly the event X ∈ A (our own). With a joint density, Tonelli’s theorem computes its probability by integrating first over all second coordinates (our own). This gives the usual marginal density formula (our own).

**nLab:** [joint and marginal probability](https://ncatlab.org/nlab/show/joint+and+marginal+probability). It says: “marginal distributions by pushing forward along the product projections.”

**Sources:** none listed. No primary source with a working link was found.

### Standardization makes correlation a cosine

**Remember:** Correlation is the cosine between two unit deviations.

*Rules out counterexamples.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For a real variable with positive finite variance, standardizing means subtracting its mean and dividing by the square root of its variance. The Pearson correlation of two such variables is the expected product of their standardized values.

**Problem.** Pearson correlation lies between −1 and 1. It reaches either endpoint exactly when the two standardized variables agree up to sign with probability one.

**How the definition helps.** Standardizing gives both deviations length one, so the inner-product bound and its equality case apply (our own). The positive-variance rule excludes a constant variable, whose centered version has zero length and no angle (our own). The work moves to the Cauchy–Schwarz inequality (our own).

**Paper or page:** [Square of Covariance is Less Than or Equal to Product of Variances](https://proofwiki.org/wiki/Square_of_Covariance_is_Less_Than_or_Equal_to_Product_of_Variances). It says: “Cov(X, Y)² ≤ Var(X) Var(Y)”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic functions exist for every distribution

**Remember:** Because \|exp(itX)\| = 1, the characteristic function never diverges.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60E10 (Characteristic functions; other transforms), 60F05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The characteristic function of a random variable X is φ(t) = E(exp(itX)) for real t.

**Problem.** Every random variable has a characteristic function. By Lévy's continuity theorem, Xₙ converges in distribution if and only if their characteristic functions converge pointwise to a function that is continuous at 0.

**How the definition helps.** The factor i makes \|exp(itX)\| = 1, so φ exists for every distribution, even one without moments. The moment-generating function E(exp(tX)) can be infinite; for the Cauchy distribution it is infinite for every t ≠ 0 (our own example). The continuity condition at 0 is still needed, because it excludes probability mass that escapes to infinity.

**Wikipedia:** [Characteristic function (probability theory)](https://en.wikipedia.org/wiki/Characteristic_function_%28probability_theory%29). It says: “The characteristic function always exists when treated as a function of a real-valued argument, unlike the moment-generating function.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic functions turn independent sums into products

**Remember:** Exponentials turn sums into products, and independence lets the expectations multiply.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Define the characteristic function of a real random variable X by φ(t) = E\[exp(itX)\], where t is real and i² = −1. The density approach describes an independent sum by an integral that combines the two densities.

**Problem.** If X and Y are independent, the characteristic function of X + Y is the product of their characteristic functions.

**How the definition helps.** The characteristic function turns addition inside the exponential into multiplication (our own explanation). Independence then lets us take the two expectations separately (our own explanation). Unlike a density calculation, this proof does not require either variable to have a density (our own comparison). To recover the law of the sum from the product, we need the uniqueness theorem for characteristic functions (our own explanation).

**Wikipedia:** [Characteristic function (probability theory)](https://en.wikipedia.org/wiki/Characteristic_function_%28probability_theory%29). It says: “Characteristic functions are particularly useful for dealing with linear functions of independent random variables.”

**Sources:** none listed. No primary source with a working link was found.

### Exponential transforms make independent sums into products

**Remember:** Addition inside the exponential becomes multiplication outside it.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 60E05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function M(t) of X is E\[exp(tX)\]. The exponential transform replaces the separate calculations of expected powers with one function.

**Problem.** Suppose independent variables X and Y have finite moment generating functions on an open interval containing zero. On that interval, their product is the moment generating function of X + Y.

**How the definition helps.** The exponential definition changes the sum in the exponent into a product before averaging (our own). The product rule for expectations of independent variables then gives the result without convolving their laws (our own).

**Wikipedia:** [Moment generating function](https://en.wikipedia.org/wiki/Moment_generating_function). It says: “Mₛₙ(t) = Mₓ₁(a₁t) Mₓ₂(a₂t) ⋯ Mₓₙ(aₙt).”

**Sources:** none listed. No primary source with a working link was found.

### Logarithms of generating functions show cumulants add for independent sums

**Remember:** Independence multiplies moment generating functions, and logarithms turn products into sums.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 62E10. arXiv math.PR, math.ST. Level 2: later undergraduate.

**Definition.** For a random variable X, the moment generating function is the mean of exp(tX). The cumulant of order n is n! times the coefficient of tⁿ in the logarithm of that function. The alternative definition uses polynomials in the moments, which are the means of powers of X.

**Problem.** Let X and Y be independent, with moment generating functions that exist near 0. Then every cumulant of X + Y is the sum of the corresponding cumulants of X and Y.

**How the definition helps.** Independence makes E\[exp(t(X + Y))\] the product of the two moment generating functions. The logarithm turns this product into a sum, so the coefficients add. If we start with cumulants as polynomials in moments, we must first connect those polynomials to the logarithm or prove additivity directly (our own).

**Wikipedia:** [Cumulant](https://en.wikipedia.org/wiki/Cumulant). It says: “In particular, when two or more random variables are statistically independent, the nth-order cumulant of their sum is equal to the sum of their nth-order cumulants.”

**Sources:** none listed. No primary source with a working link was found.

### Probability generating functions compose for independent random sums

**Remember:** Compose the generating function of the count with that of a single summand.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For a nonnegative integer-valued random variable X, its probability generating function G(z) is the expectation of z raised to X. Take 0 ≤ z ≤ 1, with the zeroth power equal to one. The coefficients of this power series are the probabilities P(X = k). The alternative is to work with those probabilities directly.

**Problem.** Let X₁, X₂, and so on be independent copies of X. Let N be a nonnegative integer-valued random variable independent of all the copies. If G and F are the generating functions of X and N, the sum of the first N copies has generating function F(G(z)).

**How the definition helps.** The generating function turns a sum of n independent copies into the nth power of G. Averaging those powers over N gives F(G(z)). Working with probability lists instead requires finding the sum law for each n and mixing those laws (our own comparison). The composition relies on the product rule for independent sums and the rule for averaging conditional expectations.

**Wikipedia:** [Probability generating function](https://en.wikipedia.org/wiki/Probability_generating_function). It says: “Probability generating functions are particularly useful for dealing with functions of independent random variables.”

**Paper or page:** [PGF of Sum of Independent Discrete Random Variables](https://proofwiki.org/wiki/PGF_of_Sum_of_Independent_Discrete_Random_Variables). It says: “Π<sub>Z</sub>(s) = Π<sub>X</sub>(s) Π<sub>Y</sub>(s) where Π<sub>Z</sub>(s) is the probability generating function of Z.”

**Sources:** none listed. No primary source with a working link was found.

### The exponential series packs moments into one function

**Remember:** Read the expected powers by differentiating at zero.

*True by definition.* MSC 60E10 (Characteristic functions; other transforms), 60E05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The moment generating function of X is M(t) = E\[exp(tX)\]. It encodes moments, the expected powers of X, in one function.

**Problem.** If M is finite on an open interval around zero, its nth derivative at zero equals E\[Xⁿ\] for every positive integer n.

**How the definition helps.** The exponential series puts E\[Xⁿ\] beside the nth power of t, divided by n factorial (our own). This replaces a separate integral for each moment with differentiation of one function (our own). Finite exponential averages on both sides of zero justify averaging the series term by term near zero (our own).

**Paper or page:** [Moment in terms of Moment Generating Function](https://proofwiki.org/wiki/Moment_in_terms_of_Moment_Generating_Function). It says: “E\[Xⁿ\] = Mₓ⁽ⁿ⁾(0)”

**Sources:** none listed. No primary source with a working link was found.

### A constant limit makes convergence in law convergence in probability

**Remember:** If the limit law is a single point, the observations must approach that point.

*Rules out counterexamples.* MSC 60F05 (Central limit and other weak theorems), 60B10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Random variables converge in law when the expectation of every bounded continuous function of them approaches its expectation under the limiting law. For a constant limit c, this last expectation is the function value at c.

**Problem.** If random variables converge in law to a constant c, the chance of an error larger than any fixed positive distance tends to zero.

**How the definition helps.** A continuous test can vanish at c and equal one everywhere at distance ε or more from c (our own). Use the smaller of one and \|x − c\|/ε, whose expectation bounds the error probability and tends to zero (our own). For a random limit this can fail because a fair random sign and its negative have the same law but always differ (our own).

**Wikipedia:** [Convergence of random variables](https://en.wikipedia.org/wiki/Convergence_of_random_variables). It says: “when the limiting random variable X is a constant.”

**Sources:** none listed. No primary source with a working link was found.

### A transform turns the central limit theorem into a power limit

**Remember:** Convert sums to products before taking the limit.

*Makes the theorem clean to state or prove.* MSC 60F05 (Central limit and other weak theorems), 60E10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The characteristic function of a random variable X is the average of exp(itX) for each real t, where i² = −1.

**Problem.** Let independent observations have the same distribution, mean μ and finite positive variance σ². Their sum, centered by subtracting nμ and divided by σ√n, converges in distribution to the normal law with mean zero and variance one.

**How the definition helps.** The characteristic function turns the sum of n independent observations into a product of n identical factors (our own). A second-order expansion using the variance gives exp(−t²/2) as the limit after centering and scaling (our own). Lévy’s continuity theorem converts this limit into convergence in distribution because it is the characteristic function of the standard normal law (our own).

**Paper or page:** [Central Limit Theorem](https://proofwiki.org/wiki/Central_Limit_Theorem). It says: “that is, converges in distribution to a standard normal distribution.”

**Sources:**

- [David Williams, Probability with Martingales, Chapter 18](https://doi.org/10.1017/CBO9780511813658.022)

### Tail failures multiply in the second Borel–Cantelli lemma

**Remember:** Finitely many successes means a whole tail of failures.

*Makes the theorem clean to state or prove.* MSC 60F15 (Strong limit theorems). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The limit inferior of a sequence of events is the union of the intersections of all events in each tail. It describes outcomes that belong to every event from some index onward.

**Problem.** For independent events whose probabilities have infinite sum, the limit inferior of their complements has probability zero. Thus infinitely many events occur with probability one.

**How the definition helps.** The limit inferior of the failure events splits the unwanted outcome into countably many tails (our own). Independence makes each finite block of failures a product (our own). The bound 1 − p ≤ exp(−p) forces each infinite tail to have probability zero (our own).

**Paper or page:** [Second Borel-Cantelli Lemma](https://proofwiki.org/wiki/Second_Borel-Cantelli_Lemma). It says: “Then the probability that infinitely many of them occur is 1.”

**Sources:** none listed. No primary source with a working link was found.

### The set limit superior gives the first Borel–Cantelli lemma

**Remember:** Infinitely often means at least once in every tail.

*Makes the theorem clean to state or prove.* MSC 60F15 (Strong limit theorems). arXiv math.PR. Level 2: later undergraduate.

**Definition.** The limit superior of a sequence of events contains the outcomes that occur in infinitely many of them. It is the intersection of all tail unions, where each union includes every event from one index onward.

**Problem.** If the sum of the event probabilities is finite, their limit superior has probability zero.

**How the definition helps.** The limit superior lies in every tail union, so each tail sum bounds its probability (our own). The union bound gives those upper bounds, and convergence of the series makes them tend to zero (our own).

**Paper or page:** [Borel-Cantelli Lemma](https://proofwiki.org/wiki/Borel-Cantelli_Lemma). It says: “where limsup denotes limit superior of sets.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted partial sums give the finite variance strong law

**Remember:** Divide each centered step by its index before adding the steps.

*Makes the theorem clean to state or prove.* MSC 60F15 (Strong limit theorems), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Center each observation by subtracting the common mean. The weighted partial sum through n adds the first n centered observations after dividing each by its index.

**Problem.** Sample means of independent variables with the same law and finite variance converge to their common mean with probability one.

**How the definition helps.** Dividing step k by k divides its variance by k², so the increment variances have finite sum (our own). The weighted sums form a martingale with bounded second moments and therefore converge with probability one (our own). Kronecker’s lemma turns convergence of this weighted series into convergence of the centered sample means to zero (our own).

**Wikipedia:** [Law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers). It says: “the sample average converges almost surely to the expected value”

**Sources:**

- [David Williams, Probability with Martingales, Sections 12.7–12.8](https://assets.cambridge.org/97805214/06055/frontmatter/9780521406055_frontmatter.pdf)

### Tail events are independent of themselves

**Remember:** Ignoring every finite beginning makes a tail event independent of itself for independent observations.

*Makes the theorem clean to state or prove.* MSC 60F20 (Zero-one laws), 60A05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A tail event is one that you can determine from the variables after any finite initial block. Formally it belongs to the intersection of the collections of events determined by each such tail.

**Problem.** For a sequence of independent random variables, every tail event has probability zero or one.

**How the definition helps.** The definition makes a tail event independent of the events from each finite initial block (our own). The monotone class theorem extends that independence to all events determined by the sequence (our own). This includes the tail event itself, so its probability is its own square (our own).

**Wikipedia:** [Kolmogorov's zero–one law](https://en.wikipedia.org/wiki/Kolmogorov%27s_zero%E2%80%93one_law). It says: “Tail events are precisely those events whose occurrence can still be determined”

**Sources:** none listed. No primary source with a working link was found.

### Mean square convergence gives the finite variance weak law

**Remember:** The mean squared error is the step variance divided by the sample size.

*Makes the theorem clean to state or prove.* MSC 60F25 (\\(L<sup>p\\</sup>)-limit theorems), 60F05. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A sequence converges in mean square to a number if its average squared distance from that number tends to zero. This is stronger than requiring only that large errors become unlikely.

**Problem.** Sample means of independent variables with the same law and finite variance converge in mean square to their common mean. They also converge in probability.

**How the definition helps.** Mean square convergence asks for one number, the expected squared error of the sample mean (our own). Independence makes this error equal to the common variance divided by the sample size (our own). Markov’s inequality then bounds the chance of any fixed positive error and gives convergence in probability.

**Wikipedia:** [Convergence of random variables](https://en.wikipedia.org/wiki/Convergence_of_random_variables). It says: “converges in mean square (or in quadratic mean) to X.”

**Sources:** none listed. No primary source with a working link was found.

### A stopping time lets each included step keep its mean

**Remember:** Decide whether to include a step before seeing its value.

*Rules out counterexamples.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60G50. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A stopping time is a nonnegative integer time T for which you know whether T ≤ n after seeing the first n steps. Thus before step k you know whether T ≥ k.

**Problem.** For independent steps with the same law and finite absolute mean, stop using only the steps observed so far. If the stopping time has finite mean, the expected sum equals the step mean times the mean stopping time.

**How the definition helps.** Before step k, the stopping rule already determines whether that step counts, independently of its value. Summing the mean contributions gives the formula because the inclusion probabilities sum to the mean stopping time (our own). Finite absolute mean and finite mean stopping time justify the exchange of sum and expectation (our own). Counting one fair toss only on tails gives zero heads despite a positive mean number of counted tosses (our own).

**Wikipedia:** [Wald's equation](https://en.wikipedia.org/wiki/Wald%27s_equation). It says: “is a stopping time for a sequence of independent random variables”

**Sources:** none listed. No primary source with a working link was found.

### Stopping times cannot see the future, so fair games stay fair

**Remember:** A stopping time is a rule that a gambler can follow without knowing the future.

*Rules out counterexamples.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A filtration (𝓕ₙ) records the information known at each time n, and this information grows with n. A random time τ is a stopping time for the filtration if the event {τ ≤ n} is in 𝓕ₙ for every n. So the decision to stop at time n uses only the information known at time n.

**Problem.** Let X be a martingale, a process whose expected next value given the past equals its present value. If τ is a bounded stopping time, then E(X\_τ) = E(X₀), so no such stopping rule beats a fair game.

**How the definition helps.** The definition excludes rules that look into the future, which the theorem cannot allow. The rule 'stop when the fortune is at its largest value ever' would give a stopped value above E(X₀) on average, but it needs knowledge of the future. Even for stopping times, the theorem needs an extra condition, such as a bounded time or uniform integrability. The doubling strategy, which doubles the bet after each loss and stops at the first win, shows why.

**Wikipedia:** [Stopping time](https://en.wikipedia.org/wiki/Stopping_time), [Optional stopping theorem](https://en.wikipedia.org/wiki/Optional_stopping_theorem), [Martingale (betting system)](https://en.wikipedia.org/wiki/Martingale_%28betting_system%29). It says: “Playing until they obtain the maximum amount ahead they will ever be is not a stopping rule and does not provide a stopping time, as it requires information about the future as well as the present and past.”

**Sources:** none listed. No primary source with a working link was found.

### A predictable drift makes the Doob decomposition unique

**Remember:** A predictable process is known one step before it happens.

*Makes the theorem clean to state or prove.* MSC 60G42 (Martingales with discrete parameter), 60G07. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A process (Aₙ) is predictable when each Aₙ is 𝓕ₙ₋₁-measurable. Here 𝓕ₙ₋₁ is the information available at time n − 1. So the value at time n is known one step ahead.

**Problem.** Every adapted integrable process X splits in exactly one way as X = M + A, where M is a martingale and A is predictable with A₀ = 0. Adapted means that each Xₙ is known at time n.

**How the definition helps.** Asking the drift to be predictable and to start at zero makes the split unique. Suppose M + A = M′ + A′ (our own argument). Then A − A′ is a predictable martingale, so each increment equals its own conditional mean, which is zero. The continuous-time version needs class D and is much harder.

**Wikipedia:** [Doob decomposition theorem](https://en.wikipedia.org/wiki/Doob_decomposition_theorem). It says: “the Doob decomposition theorem gives a unique decomposition of every adapted and integrable stochastic process as the sum of a martingale and a predictable process (or "drift") starting at zero.”

**Sources:** none listed. No primary source with a working link was found.

### Predictable bets preserve a martingale

**Remember:** A fair bet needs a stake fixed before the outcome.

*Rules out counterexamples.* MSC 60G42 (Martingales with discrete parameter). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A martingale has integrable values and zero expected change given all observations so far. A stake is predictable if those observations determine it before the next change. The gain equals the stake times the change.

**Problem.** The running gains from bounded predictable stakes on a martingale form a martingale.

**How the definition helps.** Predictability lets the stake come out of the conditional mean, leaving the next increment’s zero mean (our own). If the stake could depend on the next fair coin toss, betting only when it wins would give a positive mean gain (our own).

**Paper or page:** [Introduction to Martingales](https://arxiv.org/abs/2407.11914v1). It says: “and X is a martingale, then so is C · X”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal coordinates make planar return probabilities squares

**Remember:** In diagonal coordinates, one grid step is two independent fair signs.

*True by definition.* MSC 60G50 (Sums of independent random variables; random walks), 60J10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Write a square-grid walk at position (x,y) as the two diagonal coordinates x + y and x − y. Each step chooses one of the four nearest neighbors with equal probability, independently of earlier steps.

**Problem.** After 2n steps the grid walk’s return probability equals the square of the fair line walk’s return probability. The grid walk therefore returns to its start with probability one.

**How the definition helps.** Changing from ordinary to diagonal coordinates turns the four grid moves into four equally likely pairs of signs (our own). The two coordinates therefore walk independently, and a grid return requires both to return together (our own). The binomial formula and Stirling’s approximation give a line return probability proportional to 1/√n in the limit (our own). The squared probabilities have infinite sum, so the return criterion gives recurrence (our own).

**Wikipedia:** [Random walk](https://en.wikipedia.org/wiki/Random_walk). It says: “where each variable is either 1 or −1, with a 50% probability for either value”

**Sources:**

- [Peter G. Doyle and J. Laurie Snell, Random Walks and Electric Networks, Section 2.3.6](https://math.dartmouth.edu/~doyle/docs/walkspdf/walks.pdf)

### The first crossing splits a bound for the whole walk

**Remember:** At the first crossing, the remaining independent steps cannot undo the squared bound in expectation.

*Makes the theorem clean to state or prove.* MSC 60G50 (Sums of independent random variables; random walks), 60E15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The first crossing time is the first step when the absolute partial sum meets or exceeds a chosen threshold. Set the time to infinity if the walk never crosses.

**Problem.** Consider finitely many independent steps with mean zero and finite variance. The chance that any partial sum has absolute value at least t &gt; 0 is at most the sum of the variances divided by t².

**How the definition helps.** The first crossing time splits the event into one piece for each possible crossing step (our own). On each piece, independence and mean zero kill the mixed term in the final square (our own). Summing bounds the crossing probability times the squared threshold by the expected final square (our own).

**Wikipedia:** [Kolmogorov's inequality](https://en.wikipedia.org/wiki/Kolmogorov%27s_inequality). It says: “gives a bound on the probability that the partial sums of a finite collection of independent random variables exceed some specified bound.”

**Sources:** none listed. No primary source with a working link was found.

### Generating functions split Poisson counts into independent counts

**Remember:** An independent mark replaces the single argument by a weighted average.

*Makes the theorem clean to state or prove.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60E10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The joint probability generating function of counts U and V averages the product of s raised to U and t raised to V. Its coefficient for each pair of powers gives the probability of that pair of counts.

**Problem.** Keep each event of a rate λ Poisson process independently with probability p. The kept and removed events form independent Poisson processes of rates pλ and (1 − p)λ.

**How the definition helps.** A single mark contributes ps + (1 − p)t inside the original count’s generating function (our own). The Poisson generating function is exponential, so the result factors into one Poisson generating function per count (our own). Power series uniqueness and independence across disjoint time intervals then give the two independent processes (our own).

**Paper or page:** [Mott's law for the v.r.h. random resistor network and for Mott's random walk](https://arxiv.org/abs/2301.06318v4). It says: “The p–thinning of PPP\[ρ\] is given by PPP\[pρ\].”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting the mean makes a Poisson count a martingale

**Remember:** Subtract the average growth, and the next interval has mean zero.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A Poisson process of rate λ starts at zero and has independent counts on disjoint intervals. Each interval count has a Poisson distribution with mean λ times the interval length. The compensated count subtracts λt from the count at time t.

**Problem.** The compensated count is a martingale, meaning that its conditional mean at a later time equals its current value given the observations so far.

**How the definition helps.** The count definition gives a future increment independent of the past, and compensation makes its mean zero (our own). If you start from independent exponential waiting times, the work moves to proving the independent Poisson increment law (our own).

**Wikipedia:** [Martingale (probability theory)](https://en.wikipedia.org/wiki/Martingale_%28probability_theory%29). It says: “the compensated Poisson process {Nₜ − λt : t ≥ 0} is a continuous-time martingale”

**Sources:** none listed. No primary source with a working link was found.

### Uniform arrival times build Poisson counts on a fixed interval

**Remember:** Draw the count first, then place the points independently.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** On an interval of length T, draw a Poisson count of mean λT. Given that count, draw that many independent uniform points and sort them to get arrival times.

**Problem.** Given n arrivals of a positive-rate Poisson process in a fixed interval, their ordered times have the law of n sorted independent uniform draws.

**How the definition helps.** The conditional law is the second step of the construction. The work moves to checking the count definition of a Poisson process (our own). Allocating the points among disjoint subintervals splits the Poisson total into independent Poisson counts with means proportional to their lengths (our own).

**Wikipedia:** [Poisson point process](https://en.wikipedia.org/wiki/Poisson_point_process). It says: “For the homogeneous case in one dimension, all points are uniformly and independently placed in the window or interval W.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Markov chains by conditional independence gives the data processing inequality

**Remember:** Processing Y cannot tell you more about X than Y did.

*True by definition.* MSC 60J05 (Discrete-time Markov processes on general state spaces), 94A17. arXiv math.IT, math.PR. Level 2: later undergraduate.

**Definition.** Three random variables form a Markov chain X → Y → Z when Z is conditionally independent of X given Y. In other words, the joint distribution factors as p(x)p(y\|x)p(z\|y).

**Problem.** If X → Y → Z is a Markov chain, then I(X;Y) ≥ I(X;Z). So no processing of Y, random or not, increases the information that it carries about X.

**How the definition helps.** The Markov condition says exactly that the conditional mutual information I(X;Z\|Y) is zero, and this is the one term the proof must remove. The chain rule expands I(X;Y,Z) in two ways, as I(X;Z) + I(X;Y\|Z) and as I(X;Y) + I(X;Z\|Y). Since the last term is zero and the others are nonnegative, the inequality follows.

**Wikipedia:** [Data processing inequality](https://en.wikipedia.org/wiki/Data_processing_inequality). It says: “Let three random variables form the Markov chain X → Y → Z, implying that the conditional distribution of Z depends only on Y and is conditionally independent of X.”

**Sources:** none listed. No primary source with a working link was found.

### A return cycle gives the stationary mass as a reciprocal

**Remember:** One visit home per return cycle gives one over the mean cycle length.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A return cycle runs from a visit to state i up to, but excluding, the next visit to i. Its occupation law divides each state’s expected visit count during the cycle by the mean cycle length.

**Problem.** In a chain where all states can reach each other, suppose the mean return time to i is finite. The cycle occupation law is stationary and gives i probability equal to the reciprocal of its mean return time.

**How the definition helps.** Each cycle visits i exactly once, so its normalized count is one divided by the mean cycle length (our own). To recover the usual stationary law, shift the expected counts forward one step (our own). The shift removes the initial visit and adds the final visit at the same state, leaving all expected counts unchanged (our own).

**Paper or page:** [Finite Markov chains and multiple orthogonal polynomials](https://arxiv.org/abs/2308.00182v4). It says: “in terms of the expected return times t̄ᵢ”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 9.1 and its proof](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Counting visits turns recurrence into a divergent sum

**Remember:** Add return probabilities to get the expected number of visits.

*Makes the theorem clean to state or prove.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For a chain started in a given state, the visit count adds its indicators of being in that state at each time. Count time zero and allow an infinite sum.

**Problem.** A state is recurrent if a chain starting there returns with probability one. This holds exactly when the probabilities of being there at time n have infinite sum over n.

**How the definition helps.** Averaging the visit count gives the sum of return probabilities by monotone convergence (our own). The strong Markov property makes the probability of at least k further visits the kth power of the first-return probability (our own). Thus the mean count is finite exactly when that first-return probability is less than one (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 5.3](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Finite step hitting probabilities select the least solution

**Remember:** Start at zero off the target so impossible hits stay impossible.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A finite step hitting probability is the chance of visiting a target set by a fixed step, including time zero. Start with the target indicator, then update values outside the target by averaging over one more transition.

**Problem.** For a discrete-time Markov chain on a countable state space, eventual hitting probabilities form the least nonnegative solution of the first-step equations. These equations set the value to one on the target and require one-step averages elsewhere.

**How the definition helps.** The finite step probabilities start below every nonnegative solution and stay below it at each update (our own). Their increasing limit solves the equations by monotone convergence (our own). Minimality rejects the all-ones solution when an upward-biased walk can escape without hitting zero (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 3.4 and Example 3.5](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Independent return gaps give the long run visit fraction

**Remember:** Average the time per visit, then invert to get visits per unit time.

*Makes the theorem clean to state or prove.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)), 60F15. arXiv math.PR. Level 2: later undergraduate.

**Definition.** A return gap is the number of steps between successive visits to a given state. Start measuring after the first visit, so every gap starts at the same state.

**Problem.** Suppose all states can reach each other and every state has finite mean return time. From any start, each state’s fraction of visits converges with probability one to its stationary probability.

**How the definition helps.** At each return the chain starts afresh, so the gaps are independent and have the same distribution (our own). The strong law makes their average converge to the mean return time (our own). Each observation time lies between successive visits, so the visit fraction tends to the reciprocal mean return time (our own). The return-cycle formula identifies that reciprocal with the stationary probability (our own).

**nLab:** [Markov chain](https://ncatlab.org/nlab/show/Markov+chain). It says: “the probability of moving to the next state depends only upon the current state.”

**Sources:**

- [Richard Weber, Markov Chains, Theorem 10.2](https://www.dpmms.cam.ac.uk/~rrw1/markov/M.pdf)

### Irreducibility and positive recurrence give exactly one stationary distribution

**Remember:** Finite mean return time means a unique stationary distribution.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A Markov chain is irreducible when every state can reach every other state. A recurrent state i is positive recurrent when the expected return time E\[Tᵢ\] is finite, and null recurrent otherwise.

**Problem.** An irreducible chain on a countable state space has a stationary distribution if and only if it is positive recurrent. The distribution is then unique and equals πᵢ = 1/E\[Tᵢ\].

**How the definition helps.** Positive recurrence gives each state a finite mean return time, whose inverse is the long-run fraction of time spent there, so the formula for π is almost forced. A chain with two absorbing states is not irreducible and has many stationary distributions (our own). The simple random walk on the integers is irreducible and recurrent but null recurrent, and it has no stationary distribution (our own). On a finite state space, irreducibility alone suffices.

**Wikipedia:** [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “If a finite Markov chain is irreducible, then all states are positive recurrent, and it has a unique stationary distribution given by πᵢ = 1/E\[Tᵢ\].”

**Sources:** none listed. No primary source with a working link was found.

### Shifted averages give every finite chain a stationary law

**Remember:** One transition changes only the two ends of the average.

*Makes the theorem clean to state or prove.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** A stationary law is a probability vector unchanged by one transition. Form a Cesàro average of the laws at times zero through n − 1, meaning their ordinary arithmetic mean.

**Problem.** Every finite Markov chain has a stationary law, even when the laws at individual times do not converge.

**How the definition helps.** One transition shifts the average by one time step, so the difference is two endpoint terms divided by n (our own). Compactness of the set of probability vectors on a finite state space gives a convergent subsequence of the averages (our own). Its limit is unchanged by a transition, even for the chain that alternates between two states (our own).

**Wikipedia:** [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “a left eigenvector e of P with eigenvalue of 1.”

**Sources:** none listed. No primary source with a working link was found.

### The fundamental matrix counts visits before absorption

**Remember:** Add the probability of being in the state at each step.

*True by definition.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Consider a finite Markov chain with a set that every state can reach and that the chain cannot leave. Let Q contain the transition probabilities between states outside this set. The fundamental matrix is the sum I + Q + Q² + ⋯, where I is the identity matrix.

**Problem.** Starting at i outside the set, entry (i,j) gives the expected number of visits to j before entry, counting time zero.

**How the definition helps.** Each term in the entry is the mean of an indicator that the chain visits j at that step (our own). Monotone convergence allows you to add these means, and the matrix geometric series recovers the inverse formula (our own).

**Wikipedia:** [Absorbing Markov chain](https://en.wikipedia.org/wiki/Absorbing_Markov_chain). It says: “obtained by summing Qᵏ for all k (from 0 to ∞).”

**Sources:** none listed. No primary source with a working link was found.

### Equilibrium weighting makes generators symmetric

**Remember:** Weight by equilibrium before you ask for symmetry.

*True by definition.* MSC 60J27 (Continuous-time Markov processes on discrete state spaces), 82C31. arXiv math-ph, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** For a finite continuous-time Markov chain, weight the inner product of state functions by a positive equilibrium distribution. The equilibrium flow from one state to another equals its starting probability times its jump rate. Detailed balance means the two flows agree for each pair.

**Problem.** Under detailed balance, the generator, the matrix giving the instantaneous change of expected state functions, is self-adjoint in this inner product. A change of coordinates therefore makes it real symmetric.

**How the definition helps.** The equilibrium weights turn the off-diagonal coefficients of the inner product with the generator into the pairwise flows (our own). Detailed balance lets us exchange the two states, proving self-adjointness (our own). Multiplying each coordinate by the square root of its equilibrium probability gives ordinary Euclidean coordinates (our own). The model-specific work is checking detailed balance (our own).

**Paper or page:** [Characterizing the detailed balance property by means of measurements in chemical networks](https://arxiv.org/abs/2402.12935v1). It says: “Then the matrix B = S⁻¹AS is symmetric”

**Sources:**

- [\[, ', E, u, g, e, n, i, a,  , F, r, a, n, c, o, ', ,,  , ', B, e, r, n, h, a, r, d,  , K, e, p, k, a, ', ,,  , ', J, u, a, n,  , J, .,  , L, .,  , V, e, l, á, z, q, u, e, z, ', \], Characterizing the detailed balance property by means of measurements in chemical networks](https://arxiv.org/abs/2402.12935v1)

### Dividing out mean growth makes population size a martingale

**Remember:** Remove the mean growth to get a population with fair increments.

*True by definition.* MSC 60J80 (Branching processes (Galton-Watson, birth-and-death, etc.)), 60G42. arXiv math.PR. Level 2: later undergraduate.

**Definition.** Start with one ancestor and let each individual independently draw a child count from the same law with finite positive mean m. The normalized population divides the size of generation n by mⁿ.

**Problem.** The normalized population is a nonnegative martingale, so its expected next value given the past equals its current value. It converges to a finite limit with probability one.

**How the definition helps.** Each generation multiplies the expected size by m given the current population, so the denominator cancels that factor (our own). Calculating that conditional mean uses independent reproduction (our own). The nonnegative martingale convergence theorem then gives a finite limit (our own).

**Wikipedia:** [Branching process](https://en.wikipedia.org/wiki/Branching_process). It says: “the expected size of generation n equals μⁿ where μ is the expected number of children of each individual.”

**Sources:**

- [David Williams, Probability with Martingales, Sections 0.2–0.7](https://assets.cambridge.org/97805214/06055/frontmatter/9780521406055_frontmatter.pdf)

### Removing the one-child case makes the extinction threshold exact

**Remember:** A critical population dies out unless every parent has exactly one child.

*Rules out counterexamples.* MSC 60J80 (Branching processes (Galton-Watson, birth-and-death, etc.)). arXiv math.PR. Level 2: later undergraduate.

**Definition.** In a Galton–Watson process, each individual independently draws its child count from the same law. Exclude the law that gives every individual exactly one child.

**Problem.** Start with one ancestor and suppose the mean child count is finite. Under this exclusion, extinction has probability one exactly when the mean is at most one.

**How the definition helps.** Excluding the constant one-child law removes a population that survives forever despite having mean one. The offspring generating function averages s raised to the child count, and extinction probability is its smallest fixed point in \[0,1\] (our own). With mean at most one, convexity and the exclusion put the graph above the diagonal for s &lt; 1 in this interval (our own). With mean above one, the slope at one forces a smaller fixed point (our own).

**Wikipedia:** [Galton–Watson process](https://en.wikipedia.org/wiki/Galton%E2%80%93Watson_process). It says: “the probability of final extinction is equal to 1 if E\[ξ₁\] ≤ 1”

**Sources:** none listed. No primary source with a working link was found.

### The offspring generating function selects the extinction probability

**Remember:** Iterate from zero to find the first fixed point, not just any fixed point.

*Rules out counterexamples.* MSC 60J80 (Branching processes (Galton-Watson, birth-and-death, etc.)), 60E10. arXiv math.PR. Level 2: later undergraduate.

**Definition.** The offspring generating function at s is the average of s raised to the number of children. Use values 0 ≤ s ≤ 1 and take s⁰ = 1 even at zero.

**Problem.** Start with one ancestor and let each individual independently draw its child count from the same distribution. The extinction probability is the smallest number in \[0,1\] that the offspring generating function leaves unchanged.

**How the definition helps.** The generating function advances extinction probabilities by one generation, since all child lines must die out. Start at zero and iterate to converge to the least fixed point by monotonicity and continuity (our own). The least fixed point rule rejects the root one when a population with mean offspring above one can survive (our own).

**Wikipedia:** [Branching process](https://en.wikipedia.org/wiki/Branching_process). It says: “each of these lines must die out in m − 1 generations.”

**Sources:** none listed. No primary source with a working link was found.

### Condition on a σ-algebra, not on a single event of probability zero

**Remember:** A great circle has no conditional distribution until you name its family of circles.

*Rules out counterexamples.* MSC 60A10 (Probabilistic measure theory), 28A50. arXiv math.PR. Level 3: graduate.

**Definition.** A conditional probability given a random variable is defined relative to the σ-algebra that the variable generates, not relative to one event alone. This σ-algebra matches a decomposition of the space into the level sets of the variable. An event {Y = y} of probability zero gets a conditional distribution only as one piece of such a decomposition.

**Problem.** Condition a uniform random point on a sphere on a great circle. Taken as the equator in the family of latitude circles, the circle gets the uniform law. Taken as a meridian in the family of meridians, it gets density proportional to cos φ, where φ is the latitude.

**How the definition helps.** Kolmogorov's definition makes the answer depend on the whole decomposition, so the two answers no longer conflict. One answer is the limit over thin rings around the equator, and the other is the limit over thin lunes around the meridian. These belong to two different σ-algebras. The definition does not pick a 'correct' answer for a single circle; it says that the question is not well posed.

**Wikipedia:** [Borel–Kolmogorov paradox](https://en.wikipedia.org/wiki/Borel%E2%80%93Kolmogorov_paradox), [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation). It says: “The concept of a conditional probability with regard to an isolated hypothesis whose probability equals 0 is inadmissible.”

**Sources:**

- [Kolmogoroff, A. (1933). Grundbegriffe der Wahrscheinlichkeitsrechnung. Springer, Berlin.](https://doi.org/10.1007/978-3-642-49888-6)

### Conditional expectation as an L² projection is the best mean-square predictor

**Remember:** Projection gives the closest guess, so least squares holds by definition.

*True by definition.* MSC 60A10 (Probabilistic measure theory), 60G25. arXiv math.PR. Level 3: graduate.

**Definition.** Let X be a square-integrable random variable and ℋ a sub-σ-algebra. E(X \| ℋ) is the orthogonal projection of X onto the closed subspace of ℋ-measurable square-integrable variables. So the error X − E(X \| ℋ) is orthogonal to every such variable.

**Problem.** Among all ℋ-measurable square-integrable random variables Y, E(X \| ℋ) minimizes the mean squared error E((X − Y)²). In regression language, the conditional mean of X given another variable Z is the best predictor of X from Z.

**How the definition helps.** An orthogonal projection is by definition the nearest point of the subspace, so the least-squares property is the Pythagorean theorem in L². The same picture gives the tower property as composition of nested projections (our own). The work moves into extending the definition to integrable variables that are not square-integrable, by a limit argument or the Radon–Nikodym theorem.

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation). It says: “This allows to define and prove the existence of the conditional expectation based on the Hilbert projection theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Conditional expectation as projection makes total variance Pythagoras

**Remember:** Total variance splits into squared lengths along two perpendicular directions.

*True by definition.* MSC 60A10 (Probabilistic measure theory), 46N30. arXiv math.PR. Level 3: graduate.

**Definition.** For a square-integrable X, define E\[X \| G\] as its orthogonal projection onto the closed space of square-integrable variables measurable with respect to G. Here G is a family of events that records the information available. The other definition matches the integrals of E\[X \| G\] and X over every event in G.

**Problem.** If E\[X²\] is finite, then Var(X) = E\[Var(X \| G)\] + Var(E\[X \| G\]). Here Var(X \| G) = E\[(X − E\[X \| G\])² \| G\].

**How the definition helps.** The projection definition makes the error X − E\[X \| G\] perpendicular to the centered prediction E\[X \| G\] − E\[X\], so Pythagoras gives the identity (our own explanation). Their squared lengths are the expected conditional variance and the variance of the prediction (our own explanation). With event averages, one must instead show that the cross term vanishes (our own comparison).

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation), [Law of total variance](https://en.wikipedia.org/wiki/Law_of_total_variance). It says: “This allows to define and prove the existence of the conditional expectation based on the Hilbert projection theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Conditional expectation defined as a Radon–Nikodym derivative

**Remember:** Conditional expectation is a coarse X that keeps every average over coarse events.

*Makes the theorem clean to state or prove.* MSC 60A10 (Probabilistic measure theory), 28A50. arXiv math.PR. Level 3: graduate.

**Definition.** Let 𝓗 be a sub-σ-algebra. Then E(X \| 𝓗) is an 𝓗-measurable random variable whose integral over every set in 𝓗 equals the integral of X over that set. Equivalently, it is a Radon–Nikodym derivative. The measure is the one on 𝓗 that sends A to the integral of X over A, and the reference measure is P restricted to 𝓗.

**Problem.** For every integrable X and every sub-σ-algebra 𝓗, E(X \| 𝓗) exists and is unique up to a null set. In particular, one can condition on a continuous random variable Y, although each event {Y = y} has probability zero.

**How the definition helps.** Kolmogorov's definition asks only for an equality of integrals and never divides by a probability, so events of probability zero cause no problem. The Radon–Nikodym theorem then gives existence at once. What stays hard is to choose versions that fit together into a regular conditional distribution, which needs extra conditions on the space (our own remark).

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation), [Conditional probability](https://en.wikipedia.org/wiki/Conditional_probability). It says: “It was Andrey Kolmogorov who, in 1933, formalized it using the Radon–Nikodym theorem.”

**Sources:**

- [Kolmogoroff, A. (1933). Grundbegriffe der Wahrscheinlichkeitsrechnung. Springer, Berlin.](https://doi.org/10.1007/978-3-642-49888-6)

### Conditional expectations defined by event averages obey the tower property

**Remember:** Matching averages on the smaller family of events gives the same conditional expectation.

*True by definition.* MSC 60A10 (Probabilistic measure theory). arXiv math.PR. Level 3: graduate.

**Definition.** Let X be integrable, and let G be a σ-algebra of events that represents the available information. Define E\[X \| G\] as a G-measurable variable whose integral over each event in G matches that of X. This variable is unique up to changes on events of probability zero. With discrete data, another formula computes the mean separately for each possible observation with positive probability.

**Problem.** If H and G are σ-algebras with H contained in G, then E\[E\[X \| G\] \| H\] = E\[X \| H\] almost surely.

**How the definition helps.** Every event in H is in G, so E\[X \| G\] already matches the integral of X over every event in H (our own explanation). Uniqueness up to null events then gives the identity (our own explanation). The discrete formula instead groups the conditional means by the coarser observations and sums with conditional probabilities (our own comparison). Existence for integrable X uses the Radon–Nikodym theorem.

**nLab:** [conditional expectation](https://ncatlab.org/nlab/show/conditional+expectation). It says: “Note that it does not follow from the preceding definition that the conditional expectation exists. This is a consequence of the Radon-Nikodym theorem”

**Paper or page:** [Tower Property of Conditional Expectation](https://proofwiki.org/wiki/Tower_Property_of_Conditional_Expectation). It says: “Then: E(E(X \| G) \| H) = E(X \| H) almost everywhere.”

**Sources:** none listed. No primary source with a working link was found.

### Testing laws against bounded continuous functions proves the continuous mapping theorem

**Remember:** A bounded continuous test after g is still a bounded continuous test.

*True by definition.* MSC 60B10 (Convergence of probability measures), 60B05. arXiv math.PR. Level 3: graduate.

**Definition.** Random elements Xₙ of a metric space converge in distribution to X if E f(Xₙ) tends to E f(X) for each bounded continuous real f. The portmanteau theorem lists equivalent forms. One is convergence of distribution functions at continuity points, on the line.

**Problem.** If Xₙ converges in distribution to X and g is continuous, then g(Xₙ) converges in distribution to g(X). The full Mann–Wald theorem allows g to be discontinuous on a set that X hits with probability zero.

**How the definition helps.** If f is bounded and continuous, then so is f ∘ g, so the definition applied to f ∘ g gives the claim at once. With distribution functions, each g would need a separate argument, and only on the real line. The test-function definition also works on any metric space, such as spaces of paths (our own). The case with g discontinuous on a null set needs the portmanteau theorem with closed sets (our own).

**Wikipedia:** [Continuous mapping theorem](https://en.wikipedia.org/wiki/Continuous_mapping_theorem), [Convergence of measures](https://en.wikipedia.org/wiki/Convergence_of_measures). It says: “Note that F = f ∘ g is itself a bounded continuous functional. And so the claim follows from the statement above.”

**Sources:**

- [H. B. Mann and A. Wald, On Stochastic Limit and Order Relationships, Annals of Mathematical Statistics 14 (1943)](https://doi.org/10.1214/aoms/1177731415)

### The Lévy–Prokhorov metric turns weak convergence into convergence in a metric

**Remember:** Move mass a little or lose a little mass, and laws are close.

*Makes the theorem clean to state or prove.* MSC 60B10 (Convergence of probability measures), 60B05. arXiv math.PR. Level 3: graduate.

**Definition.** Let μ and ν be probability measures on a metric space. Let Aᵋ be the set of points within distance ε of a set A. Their Lévy–Prokhorov distance is the infimum of ε &gt; 0 with μ(A) ≤ ν(Aᵋ) + ε and ν(A) ≤ μ(Aᵋ) + ε for each Borel set A.

**Problem.** On a separable metric space, convergence in the Lévy–Prokhorov metric is the same as weak convergence. If the base space is Polish, so is the space of probability measures with this metric.

**How the definition helps.** The metric builds in both ways two laws can be close, by moving mass a small distance or moving a small amount of mass anywhere. So weak convergence becomes convergence in a metric, and compactness of a family can be tested by sequences. What stays hard is the proof that the metric gives exactly the weak topology.

**Wikipedia:** [Lévy–Prokhorov metric](https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Prokhorov_metric), [Convergence of measures](https://en.wikipedia.org/wiki/Convergence_of_measures). It says: “If (M, d) is separable, convergence of measures in the Lévy–Prokhorov metric is equivalent to weak convergence of measures.”

**Sources:**

- [Yu. V. Prokhorov, Convergence of Random Processes and Limit Theorems in Probability Theory, Theory of Probability and Its Applications 1 (1956)](https://doi.org/10.1137/1101016)

### The supremum over events makes total variation contract under measurable maps

**Remember:** Every event downstream was already an event upstream.

*True by definition.* MSC 60B10 (Convergence of probability measures), 62B10. arXiv math.PR, math.ST. Level 3: graduate.

**Definition.** The total variation distance between probability laws P and Q is the supremum of \|P(A) − Q(A)\| over measurable events A. The alternative formula is half the integral of \|p − q\|, where p and q are densities relative to a common measure.

**Problem.** A measurable map f sends a law P to the law of f(X) when X has law P. This map cannot increase the total variation distance between two laws.

**How the definition helps.** The event definition gives the bound because each output event comes from an input event (our own). For any output event B, both laws assign it the probabilities they assign to its inverse image under f (our own). The density formula does not show this directly (our own). The work shifts to proving the two formulas agree by taking A where p exceeds q.

**Wikipedia:** [Total variation distance of probability measures](https://en.wikipedia.org/wiki/Total_variation_distance_of_probability_measures). It says: “This result can be shown by noticing that the supremum in the definition is achieved exactly at the set where one distribution dominates the other.”

**Sources:** none listed. No primary source with a working link was found.

### Tightness stops probability mass from escaping to infinity

**Remember:** Tight measures keep almost all their mass inside one compact set at once.

*Rules out counterexamples.* MSC 60B10 (Convergence of probability measures), 60B05, 28A33. arXiv math.PR. Level 3: graduate.

**Definition.** A family of probability measures is tight if, for every ε &gt; 0, there is one compact set K with mass at least 1 − ε under every measure in the family.

**Problem.** Prokhorov's theorem. On a Polish space, a family of probability measures is tight if and only if every sequence in it has a weakly convergent subsequence. Here μₙ converges weakly to μ when ∫ f dμₙ tends to ∫ f dμ for every bounded continuous f.

**How the definition helps.** Tightness rules out mass that runs off to infinity, which is what stops subsequences from converging. On the real line, the point masses δₙ at n = 1, 2, 3, … have no weakly convergent subsequence. The main work is to prove that a tight family has a weakly convergent subsequence. The reverse direction needs the space to be Polish (our own remark).

**Wikipedia:** [Tightness of measures](https://en.wikipedia.org/wiki/Tightness_of_measures). It says: “The intuitive idea is that a given collection of measures does not "escape to infinity".”

**Sources:**

- [Prokhorov, Yu. V. (1956). Convergence of random processes and limit theorems in probability theory. Theory of Probability and Its Applications 1, 157–214.](https://doi.org/10.1137/1101016)

### Weak-star convergence makes probability measures on compact metric spaces compact

**Remember:** Positive functionals normalized at one form a closed part of a compact ball.

*True by definition. Confidence: medium.* MSC 60B10 (Convergence of probability measures), 28A33. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** A probability measure on a compact metric space defines a positive linear functional on continuous functions by integration. Positivity means it takes nonnegative functions to nonnegative numbers. Weak convergence of measures is convergence of these integrals at every continuous function. In the functional description this is called weak-star convergence.

**Problem.** On a compact metric space, every sequence of Borel probability measures has a weakly convergent subsequence with a probability measure as its limit.

**How the definition helps.** The functional definition puts the measures in the dual unit ball, which is weak-star compact by the Banach–Alaoglu theorem (our own explanation). Positivity and the condition that the constant one has integral one are closed conditions there (our own explanation). Continuous functions on a compact metric space have a countable dense subset, so the ball is metrizable and compactness gives a convergent subsequence (our own explanation). The Riesz representation theorem makes the limit a measure (our own explanation).

**Wikipedia:** [Convergence of measures](https://en.wikipedia.org/wiki/Convergence_of_measures), [Prokhorov's theorem](https://en.wikipedia.org/wiki/Prokhorov%27s_theorem). It says: “in this case weak convergence of measures is a special case of weak-\* convergence.”

**Sources:** none listed. No primary source with a working link was found.

### The Dickman series restarts independently

**Remember:** The first uniform factor leaves an independent copy of the full sum.

*True by definition.* MSC 60E05 (Probability distributions: general theory). arXiv math.PR. Level 3: graduate.

**Definition.** Let U₁,U₂,… be independent uniform variables on (0,1). Define D as the sum U₁+U₁U₂+U₁U₂U₃+⋯. The usual analytic description uses the Dickman function, which is 1 on \[0,1\] and solves uρ′(u)=−ρ(u−1) for u&gt;1.

**Problem.** The series converges almost surely, and D has the same law as U(1+D′). Here D′ is an independent copy of D and U is uniform on (0,1), independent of D′. On \[0,∞) the density is exp(−γ)ρ, where γ is Euler’s constant.

**How the definition helps.** Factoring out the first uniform variable leaves a fresh copy of the entire series (our own calculation). The terms are nonnegative and their expectations sum to ∑ 2⁻ᵏ=1, so the series is finite almost surely. Given D′, the product U(1+D′) is uniform between zero and 1+D′. In our own derivation, averaging those uniform densities gives the Dickman differential equation. Identifying the density still requires its normalizing constant.

**Wikipedia:** [Dickman function](https://en.wikipedia.org/wiki/Dickman_function). It says: “The Dickman–de Bruijn function ρ(u) is a continuous function that satisfies the delay differential equation”

**Paper or page:** [Representation and Simulation of Multivariate Dickman Distributions and Vervaat Perpetuities](https://arxiv.org/abs/2305.18634v1). It says: “When α = 1 we can write”

**Sources:**

- [Representation and Simulation of Multivariate Dickman Distributions and Vervaat Perpetuities](https://arxiv.org/abs/2305.18634v1)

### Characteristic functions show that one-dimensional projections determine multivariate laws

**Remember:** The vector characteristic function takes each value from a one-dimensional projection.

*True by definition. Confidence: medium.* MSC 60E10 (Characteristic functions; other transforms), 60B10. arXiv math.PR. Level 3: graduate.

**Definition.** The characteristic function of a random vector X is φ(t) = E\[exp(i t·X)\], where t·X is a dot product and i² = −1. This is also the characteristic function of the scalar t·X evaluated at 1. Another way to describe the law is by its joint distribution function, which gives probabilities of simultaneous coordinate bounds.

**Problem.** If t·X and t·Y have the same law for every vector t, then X and Y have the same law. Further, if every t·Xₙ converges in distribution to t·X, then Xₙ converges in distribution to X.

**How the definition helps.** The definition gets each value of the vector characteristic function directly from a one-dimensional law (our own explanation). The joint distribution function lacks this direct link to the separate projections (our own comparison). The real work lies in uniqueness of characteristic functions and Lévy's continuity theorem (our own explanation). The latter turns pointwise convergence to the limiting characteristic function into convergence in distribution (our own explanation).

**Wikipedia:** [Cramér–Wold theorem](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Wold_theorem). It says: “is uniquely determined by the totality of its one-dimensional projections.”

**Sources:** none listed. No primary source with a working link was found.

### Ordered couplings show stochastic dominance survives independent sums

**Remember:** Couple each pair in order, then add the two inequalities.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings). arXiv math.PR. Level 3: graduate.

**Definition.** A real variable X stochastically dominates Y if there are copies X′ and Y′ with the same respective laws and X′ ≥ Y′ almost surely. Such jointly sampled copies form a coupling. The distribution-function definition instead requires P(X ≤ t) ≤ P(Y ≤ t) for every real t.

**Problem.** Suppose X₁ dominates Y₁ and X₂ dominates Y₂. If X₁ and X₂ are independent and Y₁ and Y₂ are independent, then X₁ + X₂ dominates Y₁ + Y₂.

**How the definition helps.** The coupling definition turns the claim into addition of two inequalities between jointly sampled variables (our own explanation). Sample the two pairs independently so that each sum has the required law (our own explanation). The distribution-function proof instead averages the inequalities against the distributions of the summands (our own comparison). To connect the definitions, construct both copies from the same uniform random number using inverse distribution functions.

**nLab:** [stochastic order](https://ncatlab.org/nlab/show/stochastic+order). It says: “In decision theory, economics and related fields, this order is also known as first-order stochastic dominance, especially on the real line.”

**Wikipedia:** [Stochastic dominance](https://en.wikipedia.org/wiki/Stochastic_dominance). It says: “The third definition states that we can construct a pair of gambles X, Y with distributions ρ, ν, such that gamble X always pays at least as much as gamble Y.”

**Sources:**

- [V. Strassen, The existence of probability measures with given marginals, Annals of Mathematical Statistics 36 (1965)](https://doi.org/10.1214/aoms/1177700153)

### Sub-Gaussian variance proxies add for independent sums

**Remember:** Bound each exponential moment and multiply the bounds to add the variance proxies.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings). arXiv math.PR. Level 3: graduate.

**Definition.** A mean-zero variable X has sub-Gaussian variance proxy s² if E\[exp(tX)\] ≤ exp(s²t²/2) for all real t. An alternative definition bounds P(\|X\| ≥ t) by 2 exp(−t²/K²) for positive t. These definitions describe the same class of variables, but their constants can differ by a fixed factor.

**Problem.** If independent mean-zero variables X and Y have variance proxies a² and b², their sum has variance proxy a² + b².

**How the definition helps.** The exponential-moment definition makes the two bounds multiply and adds a² and b² in the exponent. Independence gives E\[exp(t(X + Y))\] = E\[exp(tX)\] E\[exp(tY)\]. A tail-bound proof needs a separate estimate (our own comparison). To translate between exponential moments and tails, we need the theorem that compares their best constants.

**Wikipedia:** [Sub-Gaussian distribution](https://en.wikipedia.org/wiki/Sub-Gaussian_distribution). It says: “If independent, then use that the cumulant of independent random variables is additive.”

**Sources:**

- [R. Vershynin, High-Dimensional Probability, Cambridge University Press (2018)](https://doi.org/10.1017/9781108231596)

### Utility tests make first-order dominance imply second-order dominance

**Remember:** Passing the larger class of tests means passing the smaller class.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings), 91B06. arXiv econ.TH, math.PR. Level 3: graduate.

**Definition.** Consider random payoffs with bounded ranges. A payoff X dominates Y in the first order if every nondecreasing utility gives X at least as much expected utility as Y. In the second order, test only nondecreasing concave utilities, which favor less risk at a fixed mean. The other definitions compare distribution functions and their integrals, respectively.

**Problem.** First-order dominance implies second-order dominance. Both orders are transitive.

**How the definition helps.** The utility tests make the implication immediate because every second-order test is already a first-order test. Transitivity follows by chaining the expected-utility inequalities separately for each utility. Our own comparison is that with distribution functions the implication requires integrating an inequality. The work lies in proving that each utility test and its matching distribution test give the same order.

**Wikipedia:** [Stochastic dominance](https://en.wikipedia.org/wiki/Stochastic_dominance). It says: “These relations are transitive and increasingly more inclusive.”

**Sources:** none listed. No primary source with a working link was found.

### Utility tests show why a mean-preserving spread lowers expected utility

**Remember:** Adding fair noise cannot raise expected utility for a risk-averse buyer.

*True by definition.* MSC 60E15 (Inequalities; stochastic orderings), 91B06. arXiv econ.TH, math.PR. Level 3: graduate.

**Definition.** For bounded random payoffs, A dominates B in the second order when every nondecreasing concave utility assigns A at least as much expected utility. B is a mean-preserving spread of A if it has the distribution of A plus noise whose conditional mean given A is zero. Another definition of second-order dominance compares integrals of distribution functions.

**Problem.** If B is a mean-preserving spread of A, then A dominates B in the second order.

**How the definition helps.** The utility definition makes the proof an application of conditional Jensen’s inequality. For a concave utility, the conditional expected utility after adding fair noise is at most the utility of A. Taking expectations gives the comparison for each utility. The integral definition instead needs an inequality between the two distributions (our own comparison).

**Wikipedia:** [Stochastic dominance](https://en.wikipedia.org/wiki/Stochastic_dominance). It says: “If B is a mean-preserving spread of A, then A second-order stochastically dominates B.”

**Sources:**

- [Michael Rothschild and Joseph E. Stiglitz, Increasing risk: I. A definition, Journal of Economic Theory 2 (1970) 225–243](https://doi.org/10.1016/0022-0531(70)90038-4)

### Two particles test chaos

**Remember:** Two-particle averages control the variance of the whole particle cloud.

*Makes the theorem clean to state or prove.* MSC 60F05 (Central limit and other weak theorems), 82B21. arXiv math.PR, math-ph. Level 3: graduate.

**Definition.** Represent n particles by their empirical measure, which puts mass 1/n at each particle position. Call the laws chaotic with limit μ if every fixed number of labeled positions converges jointly to independent samples from μ. Here convergence means convergence of averages against bounded continuous functions.

**Problem.** Assume the position space has a complete separable metric and each joint law is invariant under particle permutations. If the two-particle law converges to two independent samples from μ, the laws are chaotic with limit μ.

**How the definition helps.** The first two particle laws give the mean and variance of every bounded continuous empirical average (our own). The limit variance is zero, so the empirical law tends to μ in probability (our own). The remaining work compares fixed-size draws with and without replacement, whose difference vanishes (our own).

**Paper or page:** [Aspects of Coulomb gases](https://arxiv.org/abs/2108.10653v2). It says: “For all μ ∈ ℳ₁(E), the following properties are equivalent”

**Sources:**

- [Djalil Chafaï, Aspects of Coulomb gases](https://arxiv.org/abs/2108.10653v2)

### Lower semicontinuity makes the large deviations rate function unique

**Remember:** Small neighborhoods recover the value of a lower semicontinuous rate function.

*Rules out counterexamples. Confidence: medium.* MSC 60F10 (Large deviations). arXiv math.PR. Level 3: graduate.

**Definition.** A rate function I assigns values in \[0, ∞\] and is lower semicontinuous, meaning that all sets {x ∣ I(x) ≤ a} are closed. A large deviation principle bounds scaled log-probabilities from below on open sets and from above on closed sets. In both cases, the bound is minus the infimum of I over the set.

**Problem.** If the same laws at the same scale satisfy a large deviation principle with two rate functions on a metric space, those functions coincide.

**How the definition helps.** Lower semicontinuity lets bounds on shrinking balls recover the value at their center (our own). Apply the lower bound for I to an open ball and the upper bound for J to its closure; as the radius shrinks, this gives J(x) ≤ I(x), and symmetry gives equality (our own). Without the condition, take the uniform law on the space \[0, 1\] at every scale, with rate zero everywhere (our own). Raising the rate at 0 alone to 1 still gives both bounds, since the singleton has no mass (our own).

**Wikipedia:** [Rate function](https://en.wikipedia.org/wiki/Rate_function). It says: “given a sequence of probability measures (μδ)δ&gt;0 on X satisfying the large deviation principle for two rate functions I and J, it follows that I(x) = J(x) for all x ∈ X.”

**Sources:** none listed. No primary source with a working link was found.

### The Laplace principle gives contraction by composing test functions

**Remember:** Compose the test function with the map to test the input.

*True by definition.* MSC 60F10 (Large deviations). arXiv math.PR. Level 3: graduate.

**Definition.** The Laplace principle with rate I says ε log E\[exp(−h(Xε)/ε)\] tends to −inf(h + I) for each bounded continuous h as ε tends to zero. A good rate function is nonnegative, and for each finite c its set of points with I ≤ c is compact. The usual large deviation principle instead bounds the probabilities of open and closed sets on an exponential scale.

**Problem.** Let Xε satisfy the Laplace principle with good rate I. For a continuous map f between complete separable metric spaces, f(Xε) satisfies it with rate J(y) = inf{I(x) \| f(x) = y}. The infimum of the empty set is infinity.

**How the definition helps.** The Laplace definition makes contraction a substitution of h ∘ f for h (our own explanation). This substitution groups the original infimum by the value of f, giving inf(h + J) (our own explanation). Each finite sublevel set of J is the image of a compact sublevel set of I, so J is good (our own explanation). A proof from set bounds instead checks open and closed preimages separately (our own comparison).

**Wikipedia:** [Contraction principle (large deviations theory)](https://en.wikipedia.org/wiki/Contraction_principle_%28large_deviations_theory%29). It says: “the contraction principle is a theorem that states how a large deviation principle on one space "pushes forward”

**Paper or page:** [Large deviation principle for a stochastic nonlinear damped Schrodinger equation, Lemma 3.2 (Bryc's Lemma)](https://arxiv.org/abs/2510.06110v1), [Large deviation principle for a stochastic nonlinear damped Schrodinger equation, Lemma 3.1 (Varadhan's Lemma)](https://arxiv.org/abs/2510.06110v1). It says: “The Laplace principle implies the LDP with the same rate function.”

**Sources:**

- [P. Dupuis and R. S. Ellis, A Weak Convergence Approach to the Theory of Large Deviations, Wiley (1997)](https://doi.org/10.1002/9781118165904)

### Uniform integrability is exactly what L¹ convergence needs

**Remember:** Uniformly integrable means that no member hides mass far out in the tail.

*Makes the theorem clean to state or prove.* MSC 60F25 (\\(L<sup>p\\</sup>)-limit theorems), 28A20. arXiv math.PR, math.CA. Level 3: graduate.

**Definition.** A family of random variables is uniformly integrable when sup E(\|X\|·1{\|X\| ≥ K}) tends to 0 as K → ∞. The sup is over all X in the family, and 1{\|X\| ≥ K} is 1 where \|X\| ≥ K and 0 elsewhere. In words, no member can hide a fixed amount of mass at large values.

**Problem.** Vitali convergence theorem. On a probability space, integrable Xₙ converge to X in L¹, that is E\|Xₙ − X\| → 0, if and only if they converge in probability and form a uniformly integrable family.

**How the definition helps.** Uniform integrability is the exact extra condition that convergence in probability needs. Take Xₙ = n on (0, 1/n) and 0 elsewhere. This sequence tends to 0 at every point, but E(Xₙ) = 1 for all n, and it is not uniformly integrable. The theorem replaces the one-way dominated convergence theorem by an exact equivalence.

**Wikipedia:** [Uniform integrability](https://en.wikipedia.org/wiki/Uniform_integrability), [Vitali convergence theorem](https://en.wikipedia.org/wiki/Vitali_convergence_theorem). It says: “In probability terms, a sequence of random variables converging in probability also converge in the mean if and only if they are uniformly integrable.”

**Sources:**

- [G. Vitali, Sull'integrazione per serie, Rendiconti del Circolo Matematico di Palermo 23 (1907)](https://doi.org/10.1007/BF03013514)

### Markov kernels give infinite products of dependent steps without topology

**Remember:** Give each step's law given the past, and the whole sequence exists.

*Makes the theorem clean to state or prove.* MSC 60G05 (Foundations of stochastic processes), 28A35, 60J05. arXiv math.PR. Level 3: graduate.

**Definition.** A Markov kernel from one measurable space to another assigns to each point a probability measure, measurably in the point. In the Ionescu-Tulcea theorem, the n-th kernel gives the law of the n-th step given all earlier steps.

**Problem.** Take a starting law and a sequence of Markov kernels on arbitrary measurable spaces. Then there is a unique probability measure on the infinite product whose finite-dimensional laws are built step by step from the kernels. This constructs Markov chains and Markov decision processes on any state space.

**How the definition helps.** The kernels give the conditional laws in advance, so countable additivity on the infinite product can be proved by conditioning one step at a time. Kolmogorov's extension theorem starts from finite-dimensional laws alone and needs inner regularity, so it needs topology (our own comparison). What stays hard is the case where only joint laws are given, since getting kernels from them needs regular conditional probabilities (our own).

**Wikipedia:** [Ionescu-Tulcea theorem](https://en.wikipedia.org/wiki/Ionescu-Tulcea_theorem), [Kolmogorov extension theorem](https://en.wikipedia.org/wiki/Kolmogorov_extension_theorem). It says: “In particular, the individual events may be independent or dependent with respect to each other. Thus, the statement goes beyond the mere existence of countable product measures.”

**Sources:** none listed. No primary source with a working link was found.

### Progressive measurability makes a process stopped at a random time measurable

**Remember:** Measurable jointly up to each time, so stopping keeps it measurable.

*True by definition.* MSC 60G07 (General theory of stochastic processes), 60G40. arXiv math.PR. Level 3: graduate.

**Definition.** A process X is progressively measurable if, for each time t, the map (s, ω) ↦ Xₛ(ω) on \[0, t\] × Ω is jointly measurable. Here \[0, t\] carries its Borel sets and Ω carries the σ-algebra of time t. This is stronger than being adapted, which only asks that each Xₜ is known at time t.

**Problem.** Let X be progressively measurable and let τ be a stopping time. Then, where τ is finite, the value of X at time τ is measurable for the σ-algebra of events known at time τ. Every adapted process with right- or left-continuous paths is progressively measurable.

**How the definition helps.** The value at a random time is the joint map (s, ω) ↦ Xₛ(ω) composed with ω ↦ (τ(ω), ω). So joint measurability up to each time is exactly what the proof needs. An adapted process need not be jointly measurable in time and chance, and then this composition can fail to be measurable (our own). The work moves into showing that common processes, such as those with one-sided continuous paths, are progressive.

**Wikipedia:** [Progressively measurable process](https://en.wikipedia.org/wiki/Progressively_measurable_process). It says: “A progressively measurable process, while defined quite technically, is important because it implies the stopped process is measurable.”

**Sources:**

- [I. Karatzas and S. E. Shreve, Brownian Motion and Stochastic Calculus, 2nd ed., Springer](https://doi.org/10.1007/978-1-4612-0949-2)

### Separable processes have measurable suprema

**Remember:** A separable process is pinned down by its values at countably many times.

*Rules out counterexamples. Confidence: medium.* MSC 60G07 (General theory of stochastic processes), 60G17. arXiv math.PR. Level 3: graduate.

**Definition.** A process (Xₜ), with t in an interval, is separable when there is a countable dense set U of times with this property. Outside one null set (an event of probability zero), the values of the path at the times in U determine its behaviour on any open set of times.

**Problem.** For a separable process, events and functionals that involve uncountably many times, such as 'sup Xₜ ≤ c', are measurable. By Doob's theorem, every real-valued continuous-time process has a separable modification, with values in the extended real line.

**How the definition helps.** Separability reduces every question about the path to countably many times. Without it, the finite-dimensional laws do not fix path properties. The left-continuous and right-continuous versions of a Poisson process have the same finite-dimensional laws. A modification equals the original process with probability 1 at each time, so nothing is lost in distribution.

**Wikipedia:** [Stochastic process](https://en.wikipedia.org/wiki/Stochastic_process). It says: “Furthermore, if a stochastic process is separable, then functionals of an uncountable number of points of the index set are measurable and their probabilities can be studied.”

**Sources:**

- [Doob, J. L. (1937). Stochastic processes depending on a continuous parameter. Transactions of the American Mathematical Society 42, 107–140. (Crossref confirms the paper; the Wikipedia article does not cite it.)](https://doi.org/10.1090/S0002-9947-1937-1501916-1)

### Spectral atoms obstruct Gaussian ergodicity

**Remember:** A frequency with positive mass leaves a shift-invariant random amplitude.

*Rules out counterexamples.* MSC 60G10 (Stationary stochastic processes), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** Let X be a real centered stationary Gaussian process on ℝ, continuous in mean square. Its spectral measure is the finite positive measure whose Fourier transform is the covariance as a function of the time difference.

**Problem.** Time shifts are ergodic exactly when the spectral measure gives zero mass to each frequency. Ergodicity means every event invariant up to null sets under all shifts has probability zero or one. A nondegenerate Gaussian random constant has an atom at frequency zero and fails this test.

**How the definition helps.** The spectral measure turns a condition on every invariant event into a test for individual frequencies. An atom supplies a frequency component whose squared amplitude is invariant and nonconstant (our own explanation). Conversely, expand square-integrable observations in orthogonal Gaussian polynomials, whose frequencies are governed by repeated convolutions of the spectral measure. Convolving an atomless finite measure never creates an atom at zero.

**Paper or page:** [Langevin equation and fractional dynamics](https://arxiv.org/abs/1810.02412). It says: “A stationary Gaussian process is ergodic if and only if its spectral measure has no atoms.”

**Sources:**

- [Maruyama, The Harmonic Analysis of Stationary Stochastic Processes (1949)](https://doi.org/10.2206/kyushumfs.4.45)

### Stationarity on path space survives functions of whole paths

**Remember:** A map that commutes with the shift preserves shift invariance of the law.

*True by definition.* MSC 60G10 (Stationary stochastic processes), 37A50. arXiv math.PR, math.DS. Level 3: graduate.

**Definition.** A process (Xₙ) is a sequence of random variables indexed by n ≥ 0. It is stationary if its joint law on paths is unchanged when the left shift drops the first entry. Equivalently, every finite tuple of variables has the same law when all its time indices increase by the same amount.

**Problem.** Let (Xₙ) be stationary and let F be a measurable function of a path. Then Yₙ = F(Xₙ, Xₙ₊₁, Xₙ₊₂, …) is stationary.

**How the definition helps.** The path-space definition makes stationarity pass to the output because the map on paths commutes with the shift (our own). If σ is the left shift, the output path at x consists of the values F(σⁿx), and shifting before or after gives the same path. The finite-tuple definition does not directly handle F depending on infinitely many input times. The definitions agree because a law on paths is determined by events on finitely many coordinates.

**nLab:** [stationary stochastic process](https://ncatlab.org/nlab/show/stationary+stochastic+process), [shift](https://ncatlab.org/nlab/show/shift). It says: “Equivalently, it is stationary if the complete joint distribution on Xᵀ is shift-invariant, i.e. it is a measure-preserving dynamical system.”

**Sources:** none listed. No primary source with a working link was found.

### Gaussian white noise gives Brownian motion independent increments by orthogonality

**Remember:** Disjoint interval indicators are perpendicular, so the corresponding Gaussian increments are independent.

*True by definition. Confidence: medium.* MSC 60G15 (Gaussian processes), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** Define Gaussian white noise as a family W(h) indexed by square-integrable real functions on the positive half-line. The variables are jointly normal with mean zero, so all their finite linear combinations are normal. Their covariance is the inner product of the indexing functions. Define B(t) by applying W to the indicator of \[0, t\].

**Problem.** The process B has independent increments, and B(t) − B(s) is normal with mean zero and variance t − s for s &lt; t. It has a Brownian version with continuous paths that agrees with B almost surely at each fixed time.

**How the definition helps.** The covariance definition makes independence of increments follow from orthogonality of disjoint interval indicators, because uncorrelated jointly normal variables are independent (our own explanation). The squared norm of an interval indicator is its length, which gives the variance (our own explanation). The direct construction instead specifies independent normal increments and uses a consistency theorem (our own comparison). Here the work lies in constructing the Gaussian family and in Kolmogorov's continuity theorem for continuous paths (our own explanation).

**Paper or page:** [Limit theorems for Gaussian fields via Chaos Expansions and Applications, Proposition 2.2.2](https://arxiv.org/abs/2406.15801v2). It says: “Then there exists an isonormal Gaussian field over H. Moreover, when X, X' are isonormal Gaussian field over H, they are equal in law.”

**Sources:** none listed. No primary source with a working link was found.

### Pairings recover ordinary Gaussian products

**Remember:** Wick products have one degree even when ordinary powers mix degrees.

*True by definition.* MSC 60G15 (Gaussian processes). arXiv math.PR. Level 3: graduate.

**Definition.** For centered jointly Gaussian variables X₁,…,Xₙ, set S = t₁X₁ + ⋯ + tₙXₙ using formal variables t₁,…,tₙ. Their Wick product is the coefficient of t₁⋯tₙ in exp(S − Var(S)/2). The empty Wick product is one.

**Problem.** The ordinary product is a sum over all ways to pair disjoint indices, including the empty pairing. Each term multiplies the covariances of the pairs by the Wick product of the remaining variables.

**How the definition helps.** Restoring the factor exp(Var(S)/2) supplies exactly the missing pairs. Our own proof compares the coefficient of t₁⋯tₙ on both sides. Each quadratic term uses two indices, and no index can appear twice in this coefficient. The usual projection definition removes all lower polynomial degrees. Identifying the two definitions requires the orthogonality of Gaussian polynomials.

**Wikipedia:** [Wick product](https://en.wikipedia.org/wiki/Wick_product). It says: “For the higher-order products the adjustment involves subtracting off lower order (ordinary) products of the random variables”

**Paper or page:** [On a pinning model in correlated Gaussian random environments](https://arxiv.org/abs/2501.00445). It says: “Let $(\\omega \_n)<sub>n\\in \\mathbb N</sub>$ be Gaussian. Then\\\[ \\omega \_{\\boldsymbol {n}<sub>\\llbracket m\\rrbracket </sub>}=\\sum <sub>j=0</sub><sup>{</sup>\[\\frac{m}{2}\]}\\sum \_{\\substack {B\\subset \\llbracket m \\rrbracket \\\\ \|B\|=m-2j}}\\omega \_{\\boldsymbol {n}<sub>B</sub>}<sup>\\diamond</sup> \\mathbb {E}\[\\omega \_{\\boldsymbol {n}<sub>\\llbracket m \\rrbracket \\backslash B</sub>}\], \\\]”

**Sources:**

- [On a pinning model in correlated Gaussian random environments](https://arxiv.org/abs/2501.00445)

### Modifications let Kolmogorov's theorem give Brownian motion continuous paths

**Remember:** The theorem cannot make paths continuous, only pick a continuous version.

*Makes the theorem clean to state or prove.* MSC 60G17 (Sample path properties), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** A process X̃ is a modification (or version) of a process X when, for every time t, X̃ₜ = Xₜ with probability 1. The two processes then have the same finite-dimensional distributions, but their paths can look very different.

**Problem.** Suppose E\[d(Xₜ, Xₛ) to the power α\] is at most K\|t − s\| to the power 1 + β, for positive constants α, β and K. Then X has a modification with continuous paths, which are even Hölder continuous of every order below β/α. For Brownian motion this gives continuous paths.

**How the definition helps.** Moment bounds see only finitely many times at once, so they cannot control paths, and the notion of a modification lets the theorem speak about paths anyway. Let U be uniform on \[0, 1\] and let Xₜ be 1 when t = U and 0 otherwise (our own example). Every path of X is discontinuous, yet X is a modification of the zero process. The proof defines the version on the dyadic rationals and extends it by continuity (our own).

**Wikipedia:** [Kolmogorov continuity theorem](https://en.wikipedia.org/wiki/Kolmogorov_continuity_theorem). It says: “a stochastic process that satisfies certain constraints on the moments of its increments will be continuous (or, more precisely, have a "continuous version").”

**Sources:** none listed. No primary source with a working link was found.

### Requiring continuous paths gives Brownian motion one law on path space

**Remember:** Fixed-time laws cannot see paths, so put continuity in the definition.

*Makes the theorem clean to state or prove.* MSC 60G17 (Sample path properties), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** Brownian motion (the Wiener process) starts at 0 and has independent Gaussian increments with mean 0 and variance equal to the elapsed time. Its paths are continuous almost surely. A modification of a process is another process with the same value at each fixed time with probability one. Two processes are indistinguishable if, with probability one, their whole paths agree.

**Problem.** Any two almost surely continuous modifications of the same process are indistinguishable. So the continuous version of a process is unique up to a null set. The law of Brownian motion is then one measure, Wiener measure, on the space of continuous paths.

**How the definition helps.** Continuous paths are fixed by their values at rational times, so two continuous modifications that agree at each rational time agree everywhere. Finite-dimensional laws alone cannot do this, since the left- and right-continuous versions of a Poisson process have the same finite-dimensional laws. Kolmogorov's extension theorem gives only a measure on all functions, where continuity of a path is not an event. Putting continuity into the definition moves the work into Kolmogorov's continuity theorem.

**Wikipedia:** [Wiener process](https://en.wikipedia.org/wiki/Wiener_process), [Stochastic process](https://en.wikipedia.org/wiki/Stochastic_process), [Kolmogorov continuity theorem](https://en.wikipedia.org/wiki/Kolmogorov_continuity_theorem). It says: “Pre-Brownian motions do not necessarily have continuous paths, but by Kolmogorov's continuity criterion, there exists a modification of W̃ that does. Therefore, the Wiener process W can be defined as a pre-Brownian motion that has continuous paths.”

**Sources:**

- [N. Wiener, Differential-Space, Journal of Mathematics and Physics 2 (1923)](https://doi.org/10.1002/sapm192321131)

### The Skorokhod topology makes the space of paths with jumps Polish

**Remember:** Let the clock bend a little, and nearby jumps become close.

*Makes the theorem clean to state or prove.* MSC 60G17 (Sample path properties), 60F17, 60B10. arXiv math.PR. Level 3: graduate.

**Definition.** A càdlàg function is right-continuous with left limits at every point. Skorokhod space is the set of càdlàg paths. Its Skorokhod metric measures how close two paths are after a small, increasing distortion of the time axis.

**Problem.** With the Skorokhod topology, the space of càdlàg paths is Polish, that is separable with a complete compatible metric. So Prokhorov's theorem and tightness criteria apply, and limit theorems for processes with jumps can be stated as weak convergence on this space.

**How the definition helps.** Allowing a small time distortion makes a jump at time 1 + 1/n close to a jump at time 1. Under the uniform metric, the indicator paths of \[t, 1\] for different t are all at distance 1, so the space is not separable (our own). The Skorokhod metric itself is not complete, but an equivalent metric is. A cost is that addition is not continuous.

**Wikipedia:** [Càdlàg](https://en.wikipedia.org/wiki/C%C3%A0dl%C3%A0g), [Stochastic process](https://en.wikipedia.org/wiki/Stochastic_process). It says: “Skorokhod space can be assigned a topology that intuitively allows us to "wiggle space and time a bit" (whereas the traditional topology of uniform convergence only allows us to "wiggle space a bit").”

**Sources:**

- [A. V. Skorokhod, Limit Theorems for Stochastic Processes, Theory of Probability and Its Applications 1 (1956)](https://doi.org/10.1137/1101022)

### The cumulative event test makes minima and maxima stopping times

**Remember:** The first stop uses a union and the last stop an intersection.

*True by definition.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory). arXiv math.PR. Level 3: graduate.

**Definition.** A σ-algebra is a family of events closed under complements and countable unions and containing the whole sample space. A filtration is an increasing family of σ-algebras Fₜ recording the events known by time t. A random time τ is a stopping time if the event {τ ≤ t} belongs to Fₜ for every t. At nonnegative integer times, an alternative definition tests membership of {τ = n} in Fₙ for each n.

**Problem.** For two stopping times of the same filtration, their minimum and their maximum are stopping times.

**How the definition helps.** The cumulative test turns the minimum and maximum into a union and an intersection of events already known at time t (our own). The minimum has occurred if either stop has occurred, and the maximum if both have occurred (our own). At integer times, the two definitions agree through finite unions and differences of exact-time events (our own). In continuous time the exact-time test fails, because a σ-algebra need not contain an uncountable union of its events (our own).

**Wikipedia:** [Stopping time](https://en.wikipedia.org/wiki/Stopping_time). It says: “then their minimum τ₁ ∧ τ₂, their maximum τ₁ ∨ τ₂, and their sum τ₁ + τ₂ are also stopping times.”

**Sources:** none listed. No primary source with a working link was found.

### The usual conditions make hitting times of measurable sets into stopping times

**Remember:** Add the null sets and the instant future, and every hitting time stops.

*Rules out counterexamples.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60G07. arXiv math.PR. Level 3: graduate.

**Definition.** A filtration is a growing family of σ-algebras that records the information known up to each time. It is right-continuous if the information just after time t equals that at time t. It is complete if each σ-algebra contains all events of probability zero. With both properties, it satisfies the usual conditions (it is augmented).

**Problem.** The début theorem. For a filtration with the usual conditions, the first time a progressively measurable process enters a measurable set is a stopping time. A stopping time is a random time τ for which the event that τ ≤ t is known at time t.

**How the definition helps.** The usual conditions give the filtration enough events that a first entry time, which depends on the whole path, is measurable at each time. Right-continuity is needed even in simple cases, because a continuous path may enter an open set just after time t (our own). Completeness is needed because the proof uses analytic sets, which are measurable only up to null sets. The work moves into the theory of analytic sets and capacities.

**Wikipedia:** [Hitting time](https://en.wikipedia.org/wiki/Hitting_time), [Filtration (probability theory)](https://en.wikipedia.org/wiki/Filtration_%28probability_theory%29). It says: “The Début theorem says that the hitting time of a measurable set F, for a progressively measurable process with respect to a right continuous and complete filtration, is a stopping time.”

**Sources:**

- [C. Dellacherie, Capacités et processus stochastiques, Springer, 1972](https://doi.org/10.1007/978-3-662-59107-9)

### The σ-algebra at a stopping time makes the strong Markov property statable

**Remember:** Information up to a random time is a σ-algebra too.

*Makes the theorem clean to state or prove.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60J25. arXiv math.PR. Level 3: graduate.

**Definition.** Let τ be a stopping time. The σ-algebra at time τ holds each event A such that A ∩ {τ ≤ t} is known at time t, for every t. It holds the information available up to the random time τ.

**Problem.** Brownian motion has the strong Markov property. Its increments after a finite stopping time τ form a new Brownian motion, independent of the σ-algebra at τ.

**How the definition helps.** The definition turns the vague idea of the past before a random time into a σ-algebra, so conditional independence given it is meaningful. The ordinary Markov property is the case of constant τ. In continuous time the two properties differ (our own example). A process that waits an exponential time at 0 and then moves at unit speed is Markov but not strong Markov.

**Wikipedia:** [Markov property](https://en.wikipedia.org/wiki/Markov_property), [Stopping time](https://en.wikipedia.org/wiki/Stopping_time). It says: “The term strong Markov property is similar to the Markov property, except that the meaning of "present" is defined in terms of a random variable known as a stopping time.”

**Sources:**

- [G. A. Hunt, Some theorems concerning Brownian motion, Transactions of the American Mathematical Society 81 (1956)](https://doi.org/10.1090/S0002-9947-1956-0079377-3)
- [E. B. Dynkin and A. A. Yushkevich, Strong Markov Processes, Theory of Probability and Its Applications 1 (1956)](https://doi.org/10.1137/1101012)

### Conditional expectation as projection makes martingale increments orthogonal

**Remember:** Each increment is a projection error and is perpendicular to the past.

*True by definition. Confidence: medium.* MSC 60G42 (Martingales with discrete parameter). arXiv math.PR. Level 3: graduate.

**Definition.** In a square-integrable martingale, each term has finite second moment and is known at its own step. The conditional mean of the next term, given the current information, equals the current term. Define that mean as the orthogonal projection onto square-integrable variables known at the current step. The alternative defines it by matching integrals on all events known at that step.

**Problem.** For a square-integrable martingale, M₀ and all later increments are pairwise orthogonal. The expected square of Mₙ equals E\[M₀²\] plus the sum of the expected squares of the first n increments.

**How the definition helps.** The projection definition makes each martingale increment perpendicular to everything known at the preceding step (our own explanation). That includes M₀ and all earlier increments, so Pythagoras gives the sum of expected squares (our own explanation). With event averages, one must derive the same orthogonality by testing the increment against variables known at the preceding step (our own comparison). This step also proves that the event-average definition agrees with the projection (our own explanation).

**nLab:** [martingale](https://ncatlab.org/nlab/show/martingale). It says: “one takes averages over the data which are not yet known”

**Wikipedia:** [Conditional expectation](https://en.wikipedia.org/wiki/Conditional_expectation). It says: “is orthogonal to the space M of all functions of Y.”

**Sources:** none listed. No primary source with a working link was found.

### Class D is exactly the condition for the Doob–Meyer decomposition

**Remember:** Class D was named for Doob, and it is exactly where Meyer's decomposition works.

*Rules out counterexamples.* MSC 60G44 (Martingales with continuous parameter), 60G40. arXiv math.PR. Level 3: graduate.

**Definition.** A càdlàg supermartingale (or submartingale) Z is of class D when the family of values of Z at all finite stopping times is uniformly integrable. Càdlàg means that every path is right-continuous and has limits from the left. The article also asks that Z₀ = 0, but many texts do not.

**Problem.** The Doob–Meyer theorem: a right-continuous submartingale of class D is, in a unique way, a uniformly integrable martingale plus a predictable increasing process. A predictable process is one whose value at each time is known just before that time.

**How the definition helps.** Meyer chose the name and the condition to fit his theorem, so the theorem holds for class D by design. Class D is also necessary, because a uniformly integrable martingale plus an integrable increasing process is of class D. The hard step is to build the predictable increasing part in continuous time.

**Wikipedia:** [Doob–Meyer decomposition theorem](https://en.wikipedia.org/wiki/Doob%E2%80%93Meyer_decomposition_theorem). It says: “In honor of Doob, Meyer used the term "class D" to refer to the class of supermartingales for which his unique decomposition theorem applied.”

**Sources:**

- [Meyer, P.-A. (1962). A decomposition theorem for supermartingales. Illinois Journal of Mathematics 6, 193–205.](https://doi.org/10.1215/ijm/1255632318)

### Quadratic variation lets Lévy characterize Brownian motion among continuous martingales

**Remember:** A continuous fair game with clock t is Brownian motion.

*Makes the theorem clean to state or prove.* MSC 60G44 (Martingales with continuous parameter), 60H05, 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** The quadratic variation of a process up to time t is the limit of sums of squared increments over finer partitions of \[0, t\]. A local martingale is a process that becomes a martingale, a fair game, when stopped at suitable stopping times. These stopping times increase to infinity.

**Problem.** Lévy's characterization: a continuous local martingale starting at 0 with quadratic variation t at time t is a standard Brownian motion. No Gaussian assumption is made.

**How the definition helps.** Itô's formula for a continuous local martingale uses only the path and its quadratic variation, so fixing the quadratic variation fixes the law. With it, exp(iuWₜ + u²t/2) is a martingale, which forces Gaussian independent increments (our own). Continuity of paths is essential (our own example). The compensated Poisson process Nₜ − t is a martingale with predictable quadratic variation t, but it jumps.

**Wikipedia:** [Wiener process](https://en.wikipedia.org/wiki/Wiener_process). It says: “A continuous (local) martingale W with W₀ = 0 is a Wiener process if and only if its quadratic variation is \[W, W\]ₜ = t”

**Sources:**

- [H. Kunita and S. Watanabe, On Square Integrable Martingales, Nagoya Mathematical Journal 30 (1967)](https://doi.org/10.1017/S0027763000012484)

### Using quadratic variation as a clock turns continuous martingales into Brownian motion

**Remember:** Run a continuous martingale on its own clock, and it is Brownian.

*Makes the theorem clean to state or prove.* MSC 60G44 (Martingales with continuous parameter), 60H05, 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** For a continuous local martingale M starting at 0, the quadratic variation ⟨M⟩ is an increasing process that measures how much M has moved. The time change Tₜ is the first time that ⟨M⟩ exceeds t; each Tₜ is a stopping time.

**Problem.** Let M be a continuous local martingale with M₀ = 0 whose quadratic variation ⟨M⟩ tends to infinity. Then B, the value of M at time Tₜ, is a Brownian motion. And M at time t equals B at time ⟨M⟩ₜ.

**How the definition helps.** Measuring time by quadratic variation gives the time-changed process quadratic variation exactly t, so Lévy's characterization finishes the proof. The condition that ⟨M⟩ tends to infinity makes every Tₜ finite. Without it, one may need to enlarge the probability space. The Brownian motion B is adapted to the time-changed filtration, not to the original one.

**Wikipedia:** [Dubins–Schwarz theorem](https://en.wikipedia.org/wiki/Dubins%E2%80%93Schwarz_theorem). It says: “the Dubins–Schwarz theorem (or Dambis–Dubins–Schwarz theorem) is a theorem that says all continuous local martingales and martingales are time-changed Brownian motions.”

**Sources:**

- [L. E. Dubins and G. Schwarz, On Continuous Martingales, Proceedings of the National Academy of Sciences 53 (1965)](https://doi.org/10.1073/pnas.53.5.913)

### Semimartingales are exactly the good integrators

**Remember:** A semimartingale is exactly a process you can integrate against with a stable stochastic integral.

*True by definition.* MSC 60G48 (Generalizations of martingales), 60H05. arXiv math.PR. Level 3: graduate.

**Definition.** A semimartingale is an adapted càdlàg process that is a local martingale plus an adapted process of finite variation. A good integrator is an adapted càdlàg process X such that, for each time t, the integrals up to t of simple predictable processes bounded by 1 against X form a set bounded in probability.

**Problem.** By the Bichteler–Dellacherie theorem, an adapted càdlàg process is a semimartingale if and only if it is a good integrator. So semimartingales are the largest class of integrators for which the stochastic integral has this continuity.

**How the definition helps.** The good-integrator definition puts the continuity of the integral into the definition itself. Our own reading is that this is the continuity needed to extend the integral to general integrands. The decomposition into a local martingale and a finite-variation part then becomes a theorem, not an assumption. The equivalence itself is the hard step.

**Wikipedia:** [Semimartingale](https://en.wikipedia.org/wiki/Semimartingale). It says: “Semimartingales are "good integrators", forming the largest class of processes with respect to which the Itô integral and the Stratonovich integral can be defined.”

**Sources:**

- [Bichteler, K. (1981). Stochastic integration and Lᵖ-theory of semimartingales. Annals of Probability 9, 49–89.](https://doi.org/10.1214/aop/1176994509)

### Semimartingales survive every absolutely continuous change of measure

**Remember:** Change the measure, and the drift changes, but semimartingales stay semimartingales.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60G48 (Generalizations of martingales), 60H05. arXiv math.PR. Level 3: graduate.

**Definition.** A semimartingale is a process that is the sum of a local martingale and an adapted process of finite variation. A measure Q is absolutely continuous with respect to P when every event of P-probability zero also has Q-probability zero.

**Problem.** If Q is absolutely continuous with respect to P, then every P-semimartingale is a Q-semimartingale. For Brownian motion, Girsanov's theorem gives the explicit new drift.

**How the definition helps.** The class of semimartingales absorbs the drift that a change of measure creates, so the class is stable although martingales are not. When the density is the stochastic exponential ℰ(X), the local martingale part M changes by the finite-variation process \[M, X\]. A P-martingale is usually not a Q-martingale, so a theory with martingale integrators alone would not survive the change (our own). What stays hard is to know when the density process is a true martingale.

**Wikipedia:** [Girsanov theorem](https://en.wikipedia.org/wiki/Girsanov_theorem). It says: “if Q is a measure being absolutely continuous with respect to P, then every P-semimartingale is also a Q-semimartingale.”

**Sources:**

- [I. V. Girsanov, On Transforming a Certain Class of Stochastic Processes by Absolutely Continuous Substitution of Measures, Theory of Probability and Its Applications 5 (1960)](https://doi.org/10.1137/1105027)

### The good integrator definition preserves semimartingales under smaller filtrations

**Remember:** Less information leaves fewer integrands to test.

*True by definition. Confidence: medium.* MSC 60G48 (Generalizations of martingales), 60H05. arXiv math.PR. Level 3: graduate.

**Definition.** A filtration is a growing family of event collections that records what is known at each time. A good integrator X is adapted, meaning its current value is known, and its paths are right-continuous with left limits. On each finite interval, its terminal integrals of simple integrands bounded by one must be bounded in probability. The alternative definition splits X into a local martingale and an adapted process whose total movement is finite on each finite interval.

**Problem.** Let X be a semimartingale for filtration F. If X is also adapted to a smaller filtration G, then X is also a semimartingale for G.

**How the definition helps.** The good integrator definition tests fewer integrands when the filtration shrinks (our own explanation). Each simple integrand for G uses only information in G, so it is also a test for F, with the same integral (our own explanation). The decomposition proof is harder because the original local martingale part need not be adapted to G (our own comparison). The Bichteler–Dellacherie theorem shows that the two definitions agree.

**Wikipedia:** [Semimartingale](https://en.wikipedia.org/wiki/Semimartingale). It says: “The property of being a semimartingale is preserved under shrinking the filtration.”

**Sources:**

- [P. E. Protter, Stochastic Integration and Differential Equations, 2nd edition, Springer (2005)](https://doi.org/10.1007/978-3-662-10061-5)

### Continuity in probability rules out wild Lévy processes

**Remember:** Small time steps bring small moves, so the paths can be made regular.

*Rules out counterexamples. Confidence: medium.* MSC 60G51 (Processes with independent increments; Lévy processes), 60E07. arXiv math.PR. Level 3: graduate.

**Definition.** A Lévy process starts at 0 and has independent and stationary increments. It is also continuous in probability. That is, for every ε &gt; 0, the probability that \|Xₜ₊ₕ − Xₜ\| &gt; ε tends to 0 as h tends to 0.

**Problem.** Every Lévy process has a version with right-continuous paths that have left limits.

**How the definition helps.** Continuity in probability is a weak condition, but it rules out processes whose paths have no regularity at all (our own). Take an additive function f on the reals that is not linear, which exists by the axiom of choice (our own). The deterministic process Xₜ = f(t) has independent and stationary increments. But it is not continuous in probability, and its paths are unbounded on every interval.

**Wikipedia:** [Lévy process](https://en.wikipedia.org/wiki/L%C3%A9vy_process). It says: “If X is a Lévy process then one may construct a version of X such that t ↦ Xₜ is almost surely right-continuous with left limits.”

**Sources:** none listed. No primary source with a working link was found.

### Stationary independent increments make the law at time 1 infinitely divisible

**Remember:** Cut time into n equal steps, and X₁ splits into n identical parts.

*True by definition.* MSC 60G51 (Processes with independent increments; Lévy processes), 60E07. arXiv math.PR. Level 3: graduate.

**Definition.** A Lévy process starts at 0 and has independent and stationary increments; stationary means the law of an increment depends only on its length. It is also continuous in probability. A law is infinitely divisible if, for each n, it is the law of a sum of n independent identically distributed variables.

**Problem.** Lévy processes correspond one to one, in law, with infinitely divisible distributions, through the law of X at time 1. The Lévy–Khintchine formula describes them all by a drift, a Gaussian part and a jump measure.

**How the definition helps.** Splitting \[0, 1\] into n equal pieces writes X₁ as a sum of n independent identically distributed increments, so infinite divisibility holds by definition. The page gives this argument directly. The work moves into the converse: building a process from an infinitely divisible law, and finding a càdlàg version. The Lévy–Itô decomposition then splits the process into a Brownian part and a Poisson-type jump part.

**Wikipedia:** [Lévy process](https://en.wikipedia.org/wiki/L%C3%A9vy_process). It says: “Conversely, for each infinitely divisible probability distribution F, there is a Lévy process X such that the law of X₁ is given by F.”

**Sources:**

- [K. Itô, On stochastic processes (I) (Infinitely divisible laws of probability), Japanese Journal of Mathematics 18 (1941)](https://doi.org/10.4099/jjm1924.18.0_261)

### Augmented filtrations give Feller processes càdlàg strong Markov versions

**Remember:** Feller semigroup plus usual conditions gives right-continuous paths and strong Markov.

*Makes the theorem clean to state or prove.* MSC 60G53 (Feller processes), 60G40, 60J25. arXiv math.PR. Level 3: graduate.

**Definition.** A Feller process is a time-homogeneous Markov process whose transition operators map continuous functions vanishing at infinity to such functions, and are continuous in time. An augmented filtration is complete and right-continuous; these are the usual conditions.

**Problem.** Let X be a Feller process for an augmented filtration, on a locally compact separable state space. Then X has a modification with càdlàg paths, and this modification has the strong Markov property.

**How the definition helps.** The usual conditions give the filtration enough events to hold the right limits of the paths, so a regular version can be built inside the filtration. Feller continuity then makes the Markov property pass to stopping times, which can be approximated from the right by discrete times (our own). The Markov property alone does not give the strong Markov property. The regularization uses supermartingale convergence along rational times.

**Wikipedia:** [Markov property](https://en.wikipedia.org/wiki/Markov_property), [Feller process](https://en.wikipedia.org/wiki/Feller_process), [Filtration (probability theory)](https://en.wikipedia.org/wiki/Filtration_%28probability_theory%29). It says: “If the filtration (𝓕ₜ)ₜ≥₀ is augmented, then X has a modification with right-continuous (even càdlàg) paths, and this modification has the strong Markov property.”

**Sources:**

- [W. Feller, The Parabolic Differential Equations and the Associated Semi-Groups of Transformations, Annals of Mathematics 55 (1952)](https://doi.org/10.2307/1969644)

### Conditioning preserves determinantal particle laws

**Remember:** Make holes into points, then condition by a block determinant.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR, math-ph. Level 3: graduate.

**Definition.** A finite determinantal process chooses a random set of occupied sites using a matrix K. For any specified sites, their joint inclusion probability equals the determinant on their rows and columns. The complementary process records the empty sites and has kernel I − K.

**Problem.** Conditioning a finite determinantal process to leave a specified set empty gives a determinantal process on the remaining sites. This holds when the conditioning event has positive probability.

**How the definition helps.** Recording holes changes an emptiness condition into an inclusion condition with a determinant formula (our own). Inclusion-exclusion gives the hole kernel I − K (our own). Conditional inclusion probabilities are ratios of determinants (our own). Eliminating the block for the required holes expresses each ratio as a determinant on the remaining sites (our own). Taking the complement again gives a kernel for the remaining particles (our own).

**Paper or page:** [Determinantal point processes conditioned on randomly incomplete configurations](https://arxiv.org/abs/2112.10642v2). It says: “Then Pᶿ₍∣∅₎ is also a DPP”

**Sources:**

- [\[, ', T, o, m,  , C, l, a, e, y, s, ', ,,  , ', G, a, b, r, i, e, l,  , G, l, e, s, n, e, r, ', \], Determinantal point processes conditioned on randomly incomplete configurations](https://arxiv.org/abs/2112.10642v2)

### Paired kernels give equal particle counts

**Remember:** The same nonzero eigenvalues give the same count law.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR, math-ph. Level 3: graduate.

**Definition.** A finite determinantal process chooses a random subset of sites. The probability of including any specified sites equals the determinant of the kernel matrix restricted to their rows and columns. Given a rectangular matrix W with singular values at most one, use W\*W and WW\* as the two kernels. Here W\* is the conjugate transpose.

**Problem.** The two finite determinantal processes have the same distribution for their total number of points.

**How the definition helps.** Building both kernels from one matrix makes their nonzero eigenvalues identical (our own). For a kernel K and point count N, the expectation of zᴺ equals det(I + (z − 1)K) (our own). Expanding the determinant in principal minors proves this identity from the inclusion probabilities (our own). Zero eigenvalues contribute factors of one, so the two generating polynomials agree (our own).

**Paper or page:** [Partial Isometries, Duality, and Determinantal Point Processes](https://arxiv.org/abs/1903.04945v4). It says: “P(Ξ₁⁽Λ₂⁾(Λ₁)=m) = P(Ξ₂⁽Λ₁⁾(Λ₂)=m)”

**Sources:**

- [\[, ', M, a, k, o, t, o,  , K, a, t, o, r, i, ', ,,  , ', T, o, m, o, y, u, k, i,  , S, h, i, r, a, i, ', \], Partial Isometries, Duality, and Determinantal Point Processes](https://arxiv.org/abs/1903.04945v4)

### Poisson point processes defined by counts are closed under superposition

**Remember:** Add counts rather than merge waiting times.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)). arXiv math.PR. Level 3: graduate.

**Definition.** A Poisson point process with mean measure Λ is a random counting measure. It gives each set A a Poisson count with mean Λ(A) when that mean is finite. Counts in disjoint sets are independent. The usual construction on the positive line at a constant rate uses independent exponential waiting times.

**Problem.** Superpose independent Poisson point processes by adding their counting measures on the same space. If the sum of their mean measures is finite on bounded sets, the result is Poisson with that summed mean measure.

**How the definition helps.** The count definition makes superposition ordinary addition of independent Poisson variables (our own explanation). On a bounded set, their sum is Poisson with the summed mean, and counts on disjoint sets depend on separate independent groups of variables (our own explanation). Merging streams defined by waiting times instead needs the memoryless property of exponential waits (our own comparison).

**Wikipedia:** [Poisson point process](https://en.wikipedia.org/wiki/Poisson_point_process). It says: “will also be a Poisson point process with mean measure”

**Paper or page:** [Sum of Independent Poisson Random Variables is Poisson](https://proofwiki.org/wiki/Sum_of_Independent_Poisson_Random_Variables_is_Poisson). It says: “Then their sum X + Y is distributed: X + Y ∼ Poisson(λ₁ + λ₂)”

**Sources:**

- [J. F. C. Kingman, Poisson Processes, Oxford University Press (1992)](https://doi.org/10.1093/oso/9780198536932.001.0001)

### Poisson point processes defined by counts stay Poisson under measurable maps

**Remember:** Count image points by counting the original points in their preimages.

*True by definition.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60G57. arXiv math.PR. Level 3: graduate.

**Definition.** A Poisson point process with mean measure Λ has independent counts on disjoint sets. For each set A with finite Λ(A), its count is Poisson with mean Λ(A). Points count with their multiplicities. On the positive line, a constant-rate process can instead be built from independent exponential waiting times.

**Problem.** Let f be a measurable map. Suppose the target is a countable union of sets B for which Λ(f⁻¹(B)) is finite. Then the image counting measure is Poisson with mean measure B ↦ Λ(f⁻¹(B)).

**How the definition helps.** The count definition makes the count of image points in B equal the original count in f⁻¹(B) (our own explanation). Disjoint target sets have disjoint preimages, so their counts are independent (our own explanation). A waiting-time construction does not give this proof because f can reorder or merge the points (our own comparison). To use the count definition in place of waiting times for the constant-rate process, one needs the equivalence of those descriptions (our own explanation).

**Wikipedia:** [Poisson point process](https://en.wikipedia.org/wiki/Poisson_point_process). It says: “the resulting mapped (or transformed) collection of points also form a Poisson point process, and this result is sometimes referred to as the mapping theorem.”

**Sources:**

- [J. F. C. Kingman, Poisson Processes, Oxford University Press (1992)](https://doi.org/10.1093/oso/9780198536932.001.0001)

### Variance subtraction gives mass martingales

**Remember:** Each independent layer contributes an exponential of conditional mean one.

*True by definition.* MSC 60G57 (Random measures), 60G60. arXiv math.PR. Level 3: graduate.

**Definition.** Add independent, jointly measurable, centered real Gaussian fields on a space with a fixed finite measure. After n layers let S be their sum at a point. Use the density exp(γS − γ²Var(S)/2) for fixed real γ.

**Problem.** The integral of this density over any fixed measurable set forms a nonnegative martingale. Given the first n layers, the next integral has conditional mean equal to the current integral.

**How the definition helps.** Variance subtraction makes the factor contributed by the next independent layer have mean one at each point. The uncorrected exponential also picks up a deterministic variance factor. Our own discrete version integrates the conditional identity using nonnegativity. Constructing a nonzero limiting mass requires additional estimates.

**Paper or page:** [Subcritical Gaussian Multiplicative Chaos in the Wiener Space: Construction, Moments and Volume Decay](https://arxiv.org/abs/2211.08996). It says: “For every Borel set $A \\subset \\Omega $ and $\\gamma &gt;0$, $$ \\left ( \\int \_A \\exp \\left \\{ \\gamma {H}<sub>T</sub>(\\omega ) - \\frac {\\gamma ^2}{2}T (\\phi \\star \\phi )(0) \\right \\} \\d \\P \_0(\\omega ) \\right )<sub>T&gt;0</sub> $$ is a martingale.”

**Sources:**

- [Subcritical Gaussian Multiplicative Chaos in the Wiener Space: Construction, Moments and Volume Decay](https://arxiv.org/abs/2211.08996)

### Boundary energy governs Gaussian shifts

**Remember:** A shift preserves null sets exactly when it has finite zero-boundary energy.

*Rules out counterexamples.* MSC 60G60 (Random fields). arXiv math.PR. Level 3: graduate.

**Definition.** On a bounded smooth planar domain, the zero-boundary Gaussian free field is a centered Gaussian random distribution. Its covariance is the inverse of −Δ with zero boundary values, where Δ is the Laplacian. Complete the smooth compactly supported functions in the L² norm of their gradients to form the energy space.

**Problem.** A deterministic distributional shift preserves the null sets of this field law exactly when it belongs to that energy space. In particular, a nonzero constant shift gives a mutually singular law.

**How the definition helps.** The energy space builds in the zero boundary condition, which a nonzero constant fails. The Cameron–Martin theorem says that the shifts preserving Gaussian null sets form a Hilbert space, and every other shift gives a mutually singular law. Our own explanation identifies this space with the energy space by expanding the inverse Laplacian in its eigenfunctions.

**Wikipedia:** [Cameron–Martin theorem](https://en.wikipedia.org/wiki/Cameron%E2%80%93Martin_theorem). It says: “If $h\\not\\in H\_\\gamma$ the two measures are singular.”

**Paper or page:** [Radial conformal welding in Liouville quantum gravity](https://arxiv.org/abs/2411.19810). It says: “the law of h under the reweighted measure agrees with the law of h + g under the unreweighted measure.”

**Sources:** none listed. No primary source with a working link was found.

### Energy projections split free fields

**Remember:** The subdomain gets the orthogonal part that vanishes at its boundary.

*True by definition.* MSC 60G60 (Random fields). arXiv math.PR. Level 3: graduate.

**Definition.** On a bounded smooth planar domain D, complete the smooth compactly supported functions in the norm given by the L² length of their gradients. The zero-boundary Gaussian free field assigns jointly centered Gaussian variables to this space, with covariance given by the gradient inner product. For a smooth subdomain U with closure inside D, extend its energy space into that of D by zero.

**Problem.** The field on D splits into two independent random distributions. One is the zero-boundary field on U extended by zero. The other agrees with the original field outside the closure of U and has zero Laplacian inside U.

**How the definition helps.** The gradient inner product turns the split into two orthogonal projections. Orthogonal Gaussian coordinates are independent. The component from U has precisely its field covariance. In our own explanation, orthogonality to every test in U says that the other component has zero Laplacian there. Using the inverse Laplacian as covariance instead requires identifying the corresponding distribution with this energy-space field.

**Paper or page:** [Quantum triangles and imaginary geometry flow lines](https://arxiv.org/abs/2211.04580). It says: “h₂ is the same as h outside U and harmonic inside U.”

**Sources:**

- [Quantum triangles and imaginary geometry flow lines](https://arxiv.org/abs/2211.04580)
- [Sheffield, Gaussian free fields for mathematicians (2007), Section 2.6](https://doi.org/10.1007/s00440-006-0050-1)

### Defining stochastic exponentials by integrals preserves the local martingale property

**Remember:** If the driver is a local martingale, its stochastic integral is one too.

*True by definition.* MSC 60H05 (Stochastic integrals), 60G44. arXiv math.PR. Level 3: graduate.

**Definition.** The stochastic exponential Z of a continuous semimartingale X solves Z(t) = 1 + ∫₀ᵗ Z(s) dX(s). Such an X is the sum of a continuous local martingale and a continuous process of finite variation. A local martingale becomes a martingale when stopped along a suitable sequence of random times. The alternative uses exp(X(t) − X(0) − ½\[X\](t)), where \[X\] is the limit in probability of squared-increment sums.

**Problem.** If M is a continuous local martingale, its stochastic exponential is a local martingale. It need not be an ordinary martingale.

**How the definition helps.** The integral definition expresses Z − 1 as an integral against M (our own explanation). The stochastic integration theorem says that a locally bounded adapted continuous integrand preserves the local martingale property (our own explanation). Starting with the explicit exponential instead requires Itô's formula, the chain rule for stochastic integrals (our own comparison). The work lies in the integration theorem and in proving that the explicit formula gives the solution (our own explanation).

**Wikipedia:** [Doléans-Dade exponential](https://en.wikipedia.org/wiki/Dol%C3%A9ans-Dade_exponential). It says: “Stochastic exponential of a local martingale is again a local martingale.”

**Sources:**

- [C. Doléans-Dade, Quelques applications de la formule de changement de variables pour les semimartingales, Z. Wahrscheinlichkeitstheorie verw. Gebiete 16 (1970)](https://doi.org/10.1007/BF00534595)

### Left-endpoint Itô integrals of local martingales are local martingales

**Remember:** The Itô integrand bets before the coin toss, so the game stays fair locally.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60H05 (Stochastic integrals), 60G44. arXiv math.PR. Level 3: graduate.

**Definition.** The Itô integral is the limit of Riemann sums that evaluate the integrand at the left end of each time step. The integrand must be adapted or predictable (its value at each time depends only on the past). A local martingale is a process that becomes a martingale when you stop it along some sequence of stopping times that increase to infinity.

**Problem.** If M is a local martingale and H is locally bounded and predictable, then the Itô integral H · M is a local martingale.

**How the definition helps.** At the left end, each increment is multiplied by a quantity already known, so each term of the Riemann sum has mean zero (our own explanation). In general the integral need not be integrable, so it need not be a true martingale, and local martingales are a class wide enough to hold it. To get a true martingale, one still needs conditions such as square integrability.

**Wikipedia:** [Itô calculus](https://en.wikipedia.org/wiki/It%C3%B4_calculus), [Local martingale](https://en.wikipedia.org/wiki/Local_martingale). It says: “An important property of the Itô integral is that it preserves the local martingale property.”

**Sources:**

- [Itô, K. (1944). Stochastic integral. Proceedings of the Imperial Academy 20, 519–524.](https://doi.org/10.3792/pia/1195572786)

### The extension definition of the Itô integral preserves its isometry

**Remember:** An isometry on a dense set extends without changing norms.

*True by definition.* MSC 60H05 (Stochastic integrals). arXiv math.PR. Level 3: graduate.

**Definition.** For a step process, define the Itô integral against Brownian motion by summing its step values times Brownian increments. A step value can depend only on information known at the start of that step. Define the general integral as the continuous extension of this sum. The norm for an integrand is the square root of the expected time integral of its square.

**Problem.** Let H be predictable, meaning measurable for the family of time-event sets generated by left-continuous processes using only present and past information. Suppose E\[∫₀ᵀ H(t)² dt\] is finite. The expected square of the Itô integral of H over \[0, T\] equals E\[∫₀ᵀ H(t)² dt\].

**How the definition helps.** The extension definition makes the isometry pass from step processes to all square-integrable predictable integrands. For step processes, independent Brownian increments give the identity. The remaining work is to prove that such step processes approximate every integrand in the stated norm (our own explanation). For continuous adapted integrands, another approach starts with left-endpoint sums and must show that they converge to this integral (our own comparison).

**Wikipedia:** [Itô calculus](https://en.wikipedia.org/wiki/It%C3%B4_calculus), [Itô isometry](https://en.wikipedia.org/wiki/It%C3%B4_isometry). It says: “to be the unique extension of this isometry from a certain class of simple integrands to all bounded and predictable processes.”

**Sources:** none listed. No primary source with a working link was found.

### The Stratonovich integral keeps the ordinary chain rule

**Remember:** Stratonovich averages the two ends of each step, so ordinary calculus comes back.

*True by definition.* MSC 60H05 (Stochastic integrals), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** The Stratonovich integral is a limit of Riemann sums. Each sum uses the average of the values of the integrand at the two ends of each small time step. The Itô integral uses the value at the left end instead.

**Problem.** For a smooth function f and Brownian motion W, the Stratonovich integral satisfies the ordinary chain rule df(Wₜ) = f′(Wₜ) ∘ dWₜ.

**How the definition helps.** The averaging cancels the extra term that the Itô integral puts into the chain rule. With the Itô integral, Itô's lemma adds a second-order term from the quadratic variation of Brownian motion. This is why physics and geometry on manifolds often prefer the Stratonovich integral. The cost is that Stratonovich integrals of martingales are generally not martingales (our own).

**Wikipedia:** [Stratonovich integral](https://en.wikipedia.org/wiki/Stratonovich_integral), [Itô calculus](https://en.wikipedia.org/wiki/It%C3%B4_calculus). It says: “Unlike the Itô calculus, Stratonovich integrals are defined such that the chain rule of ordinary calculus holds.”

**Sources:**

- [Stratonovich, R. L. (1966). A new representation for stochastic integrals and equations. SIAM Journal on Control 4, 362–371.](https://doi.org/10.1137/0304028)

### Projecting Gaussian kernels gives conditioning

**Remember:** Project each kernel argument to keep only what the observed noise can see.

*True by definition.* MSC 60H07 (Stochastic calculus of variations and the Malliavin calculus). arXiv math.PR. Level 3: graduate.

**Definition.** Let W assign jointly centered Gaussian variables to a real separable Hilbert space, with covariance equal to its inner product. Choose finitely many orthonormal directions and let P project onto their span. Every square-integrable function of W has an orthogonal expansion by Gaussian polynomial degree, with symmetric coefficient tensors. Define Γ(P) by applying P to every tensor argument and leaving constants unchanged.

**Problem.** For every square-integrable function of W, Γ(P) gives its conditional expectation given the Gaussian coordinates in the chosen directions.

**How the definition helps.** Projecting the tensors deletes exactly the terms involving unobserved Gaussian directions. Our own proof uses a basis starting with the observed directions. In the corresponding orthogonal polynomial basis, each positive-degree factor in an unobserved coordinate has mean zero and is independent of the observed coordinates. The work behind this alternative to conditional integration is completeness of the Gaussian polynomial expansion.

**Paper or page:** [Feynman-Kac formula for the heat equation driven by time-homogeneous white noise potential](https://arxiv.org/abs/2108.12406). It says: “the second quantization operator $\\Gamma (A<sub>K</sub>)$ coincides with the conditional expectation $\\mathbb E\[\\bullet \|\\sigma (Z<sub>1</sub>,...,Z<sub>K</sub>)\]$”

**Sources:**

- [Feynman-Kac formula for the heat equation driven by time-homogeneous white noise potential](https://arxiv.org/abs/2108.12406)

### Weak solutions give Tanaka's equation a solution where strong solutions fail

**Remember:** Choose the noise together with the solution, and Tanaka's equation solves.

*Makes the theorem clean to state or prove.* MSC 60H10 (Stochastic ordinary differential equations (aspects of stochastic analysis)). arXiv math.PR. Level 3: graduate.

**Definition.** A strong solution of a stochastic differential equation is built on a Brownian motion given in advance. It is adapted to the information that this Brownian motion generates. A weak solution is a pair: a process and a Brownian motion, both chosen together on some probability space.

**Problem.** Tanaka's equation dXₜ = sgn(Xₜ) dBₜ, with X₀ = 0, has a weak solution that is unique in law. It has no strong solution.

**How the definition helps.** The weak notion lets you build the noise from the solution, not the solution from the noise. Take X to be a Brownian motion and define the new Brownian motion as the integral of sgn(X) dX; then X solves the equation. The sign function is not Lipschitz, so the usual existence theorem for strong solutions does not apply. Tanaka's equation lacks pathwise uniqueness (our own), so the Yamada–Watanabe theorem gives no strong solution.

**Wikipedia:** [Tanaka equation](https://en.wikipedia.org/wiki/Tanaka_equation), [Yamada–Watanabe theorem](https://en.wikipedia.org/wiki/Yamada%E2%80%93Watanabe_theorem). It says: “Tanaka's equation is an example of a stochastic differential equation which admits a weak solution but has no strong solution.”

**Sources:**

- [T. Yamada and S. Watanabe, On the uniqueness of solutions of stochastic differential equations, Journal of Mathematics of Kyoto University 11 (1971)](https://doi.org/10.1215/kjm/1250523691)

### Test functions realize white noise

**Remember:** White noise acts on tests, not on individual points.

*Rules out counterexamples.* MSC 60H40 (White noise theory), 60G60. arXiv math.PR. Level 3: graduate.

**Definition.** Work on ℝⁿ with n ≥ 1. A tempered distribution is a continuous linear functional on smooth test functions that decrease rapidly together with all their derivatives. Gaussian white noise is a random tempered distribution whose evaluations on real tests are jointly centered Gaussian with covariance equal to their L² inner product.

**Problem.** Exactly one probability law has these properties. On each fixed nonempty open ball, the noise almost surely has no square-integrable representative.

**How the definition helps.** Testing against smooth functions specifies the law even where square-integrable samples cannot exist. The Bochner–Minlos theorem turns the Gaussian characteristic function into a probability measure on distributions. Our own obstruction uses infinitely many orthonormal smooth tests supported in the ball. Their evaluations are independent standard normal variables, so the sum of their squares diverges almost surely. Bessel’s inequality bounds this sum for every square-integrable function.

**Paper or page:** [Multiparameter Lévy white noise theory and applications](https://arxiv.org/abs/2510.25525). It says: “There exists a unique probability measure $\\mathbb {P}$ on ${\\cal B}({\\cal S}'({\\mathbb { R}}<sup>n</sup>))$ with the following property:\\\[ \\mathbb {E}\[e<sup>i\\langle \\cdot ,\\phi \\rangle </sup>\]:=\\int \\limits <sub>\\cal S'</sub>e<sup>i\\langle \\omega , \\phi \\rangle </sup>d\\mathbb {P}(\\omega )=e<sup>{-\\tfrac</sup> {1}{2} \\Vert \\phi \\Vert ^2};\\quad i=\\sqrt{-1} \\\]”

**Sources:**

- [Multiparameter Lévy white noise theory and applications](https://arxiv.org/abs/2510.25525)

### Harris chains carry Markov chain convergence to uncountable state spaces

**Remember:** Revisit a region, not a point, and flip a coin there.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60J05 (Discrete-time Markov processes on general state spaces). arXiv math.PR. Level 3: graduate.

**Definition.** A Harris chain is a Markov chain on a general state space with a set A, a number ε &gt; 0 and a probability measure ρ, as follows. The chain reaches A with probability 1 from every start. From every point of A, the next step has probability at least ερ(C) of landing in each set C.

**Problem.** An aperiodic recurrent Harris chain with stationary distribution π converges to π in total variation from every start. Total variation distance is the largest difference between the probabilities that two distributions give to one event.

**How the definition helps.** The definition replaces a single recurrent state by a set A where the chain can forget its past with a coin flip of probability ε. Two coupled copies use the same coin flip in A, so they meet with probability at least ε at each joint visit. On an uncountable space with continuous transition densities, the chain hits each single point with probability 0, so the countable notion of a recurrent state applies to no state (our own). What stays hard is to find a suitable A and ρ for a given chain.

**Wikipedia:** [Harris chain](https://en.wikipedia.org/wiki/Harris_chain), [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). It says: “Many results for discrete-time Markov chains with finite state space can be generalized to chains with uncountable state space through Harris chains.”

**Sources:** none listed. No primary source with a working link was found.

### Detailed balance excludes one-way cycles

**Remember:** Pairwise balance reverses an entire path, one step at a time.

*Rules out counterexamples.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)), 82C31. arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Stationarity balances the total probability flowing into and out of each state. Detailed balance instead requires the equilibrium probability of every one-step move to equal that of its reverse.

**Problem.** A finite stationary Markov chain has the same path law when read backward exactly when it satisfies detailed balance.

**How the definition helps.** Pairing opposite moves lets the initial equilibrium weight pass along the path one transition at a time (our own). The result is exactly the probability of the reversed path (our own). Paths with one transition give the converse (our own). A deterministic four-state cycle has a uniform stationary law, yet each forward move has zero probability in reverse (our own).

**nLab:** [detailed balance](https://ncatlab.org/nlab/show/detailed+balance). It says: “A Markov process satisfies detailed balance if and only if it is time-reversible.”

**Sources:** none listed. No primary source with a working link was found.

### Conditional independence makes the Markov property survive time reversal

**Remember:** Reversing time swaps two sides of a symmetric independence condition.

*True by definition.* MSC 60J25 (Continuous-time Markov processes on general state spaces), 60J10. arXiv math.PR. Level 3: graduate.

**Definition.** A process is Markov if, given its present value, events about its past and future are conditionally independent. This means their conditional probabilities multiply. The one-sided definition says that the conditional law of the future given the past depends only on the present.

**Problem.** Let X be a Markov process for its natural information, the values seen so far. For fixed T &gt; 0, X(T − t) is Markov for 0 ≤ t ≤ T. Its transition probabilities need not be constant over time.

**How the definition helps.** Conditional independence is symmetric, so swapping past and future leaves the Markov condition unchanged (our own explanation). A proof with transition probabilities instead needs a rule for conditioning backward in time (our own comparison). The equivalent one-sided definition gives the symmetric rule by averaging the product of a past-event indicator and a future-event indicator (our own explanation).

**Wikipedia:** [Markov property](https://en.wikipedia.org/wiki/Markov_property). It says: “from a time T&gt;0 has again the Markov property.”

**Sources:** none listed. No primary source with a working link was found.

### Coupling total variation bounds Markov chain error by failure to meet

**Remember:** Once the coupled chains meet, neither can differ from the other.

*True by definition.* MSC 60J27 (Continuous-time Markov processes on discrete state spaces), 60B10. arXiv math.PR. Level 3: graduate.

**Definition.** A coupling of laws P and Q is a pair (X, Y) on one probability space with those separate laws. For laws on a countable set, their total variation distance is the least probability of X ≠ Y among all couplings. The alternative definition takes the supremum of \|P(A) − Q(A)\| over events A.

**Problem.** Couple continuous-time copies of a Markov chain on a countable set, one from a fixed state and one from a stationary law π. The second copy has law π at all times. If they stay together after meeting at time T, the first copy’s distance from π at time t is at most P(T &gt; t).

**How the definition helps.** The coupling definition gives the bound because a pair that has met cannot disagree later (our own). At time t the two states form one coupling, so their disagreement probability P(T &gt; t) bounds the minimum (our own). The work shifts to proving that the coupling and event definitions agree (our own).

**Wikipedia:** [Total variation distance of probability measures](https://en.wikipedia.org/wiki/Total_variation_distance_of_probability_measures). It says: “The total variation distance (or half the norm) arises as the optimal transportation cost”

**Paper or page:** [Convergence Rate Analysis of the Join-the-Shortest-Queue System](https://arxiv.org/abs/2503.15736v2). It says: “let T = inf {t &gt; 0: Xₜ = Yₜ} denote the first time that they meet. Then dTV(ℙₓᵗ, π) ≤ ℙ(T ≥ t).”

**Sources:** none listed. No primary source with a working link was found.

### Tanaka's definition of local time exposes the decomposition of reflected Brownian motion

**Remember:** The residual defines local time, but its increase still needs proof.

*True by definition. Confidence: medium.* MSC 60J55 (Local time and additive functionals), 60J65. arXiv math.PR. Level 3: graduate.

**Definition.** For Brownian motion B started at zero, define Tanaka local time at zero by L(t) = \|B(t)\| − ∫₀ᵗ sgn(B(s)) dB(s). Here sgn is 1 on positive numbers and −1 on negative numbers, and we may take it to be zero at zero. The occupation definition instead takes the limit of the time spent within ε of zero divided by 2ε.

**Problem.** For Brownian motion B started at zero, \|B\| is the sum of the martingale ∫₀ᵗ sgn(B(s)) dB(s) and the increasing process L(t). The process L can increase only when B is zero.

**How the definition helps.** Tanaka's definition identifies the increasing term directly by subtracting the stochastic integral from \|B\|. The integral is a martingale because its integrand is bounded (our own explanation). The residual definition does not by itself show that L increases or that it grows only at zeros (our own explanation). That work goes into proving the occupation limit and identifying it with L (our own explanation).

**Wikipedia:** [Local time (mathematics)](https://en.wikipedia.org/wiki/Local_time_%28mathematics%29). It says: “Tanaka's formula provides the explicit Doob–Meyer decomposition for the one-dimensional reflecting Brownian motion”

**Sources:**

- [D. Revuz and M. Yor, Continuous Martingales and Brownian Motion, 3rd edition, Springer (1999)](https://doi.org/10.1007/978-3-662-06400-9)

### Gaussian covariance identifies Ornstein–Uhlenbeck motion as rescaled time-changed Brownian motion

**Remember:** Match the covariance of the rescaled Brownian motion to identify the process.

*True by definition.* MSC 60J60 (Diffusion processes), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** For θ &gt; 0 and σ &gt; 0, define the Ornstein–Uhlenbeck process started at zero as a continuous mean-zero Gaussian process. Its covariance is (σ²/2θ)(exp(−θ\|t − s\|) − exp(−θ(t + s))). For a Gaussian process, every finite linear combination of values is normal. The equation definition instead balances a drift −θX with Brownian noise of size σ.

**Problem.** For Brownian motion W, the process (σ/√(2θ)) exp(−θt) W(exp(2θt) − 1) has the law of the Ornstein–Uhlenbeck process started at zero.

**How the definition helps.** The covariance definition identifies the time-changed process by one computation. The process is continuous and Gaussian with zero mean. For s ≤ t its covariance is (σ²/2θ) exp(−θ(s + t))(exp(2θs) − 1), which simplifies to the defining covariance. An equation-based proof instead solves the linear equation and computes the covariance by the Itô isometry (our own comparison).

**Wikipedia:** [Ornstein–Uhlenbeck process](https://en.wikipedia.org/wiki/Ornstein%E2%80%93Uhlenbeck_process). It says: “can be represented as a scaled, time-transformed Wiener process”

**Sources:** none listed. No primary source with a working link was found.

### Brownian motion defined by covariance stays Brownian under time inversion

**Remember:** Time inversion preserves the covariance, and sublinear growth gives continuity at zero.

*True by definition.* MSC 60J65 (Brownian motion), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** Define Brownian motion as a mean-zero Gaussian process with continuous paths and covariance min(s, t) at times s and t. In a Gaussian process, every finite linear combination of values is normal. The alternative definition uses independent normal increments, the differences between values at successive times.

**Problem.** Let W be Brownian motion. Set V(0) = 0 and V(t) = t·W(1/t) for t &gt; 0. Then V is Brownian motion.

**How the definition helps.** The covariance definition reduces time inversion to a covariance calculation and a separate continuity check (our own explanation). V is Gaussian with mean zero and covariance st·min(1/s, 1/t) = min(s, t) for positive s and t (our own calculation). The independent-increment definition would require proving that the reversed and rescaled increments are independent (our own comparison). For continuity at zero, we use the Brownian strong law, which gives W(u)/u → 0 as u grows (our own explanation).

**Wikipedia:** [Wiener process](https://en.wikipedia.org/wiki/Wiener_process). It says: “The Wiener process can be equivalently defined as a Gaussian process”

**Sources:**

- [D. Revuz and M. Yor, Continuous Martingales and Brownian Motion, 3rd edition, Springer (1999)](https://doi.org/10.1007/978-3-662-06400-9)

### Subtracting the endpoint line makes the Brownian bridge independent of it

**Remember:** Subtract the line to the endpoint to get an independent Gaussian residual.

*True by definition.* MSC 60J65 (Brownian motion), 60G15. arXiv math.PR. Level 3: graduate.

**Definition.** For Brownian motion W on \[0, 1\], define the standard Brownian bridge by B(t) = W(t) − t·W(1). The alternative describes the bridge as Brownian motion conditioned to end at zero. That event has probability zero, so the alternative needs a specified conditional law.

**Problem.** The entire bridge B is independent of W(1). Thus W(t) splits into B(t) and the independent random line t·W(1).

**How the definition helps.** Subtracting the endpoint line gives a Gaussian residual with zero covariance with W(1), since Cov(B(t), W(1)) = t − t = 0 (our own calculation). Every finite vector of bridge values is jointly normal with W(1), so zero covariance gives independence (our own explanation). Continuous paths pass this from rational times to the entire bridge (our own explanation). The split also gives the conditional law given an endpoint y, namely the law of B(t) + ty (our own explanation).

**Wikipedia:** [Brownian bridge](https://en.wikipedia.org/wiki/Brownian_bridge). It says: “is a standard Brownian bridge, independent of W(1).”

**Sources:**

- [D. Revuz and M. Yor, Continuous Martingales and Brownian Motion, 3rd edition, Springer (1999)](https://doi.org/10.1007/978-3-662-06400-9)

### An initial atom inverts renewal

**Remember:** Count the initial arrival so convolution has its identity term.

*True by definition. Confidence: medium.* MSC 60K05 (Renewal theory), 45E10. arXiv math.PR. Level 3: graduate.

**Definition.** Take independent positive waiting times with common law F. Define the renewal measure U by summing the laws of all arrival times, including the unit mass δ₀ at time zero.

**Problem.** Then U − F ∗ U = δ₀, where convolution ∗ adds independent waiting times. For locally bounded measurable forcing g vanishing before zero, u = U ∗ g solves u = g + F ∗ u.

**How the definition helps.** Including the initial arrival leaves exactly the convolution identity when successive arrival laws cancel. In our own derivation, convolution by F sends each arrival law to the next one. To justify the sum, discount time t by exp(−t). The expected discount for one wait is strictly below one, so the discounted masses sum to a finite geometric series. Thus U has finite mass on bounded intervals.

**Wikipedia:** [Renewal theory](https://en.wikipedia.org/wiki/Renewal_theory). It says: “The renewal function satisfies a recursive integral equation”

**Sources:** none listed. No primary source with a working link was found.

### Iterated-integral signatures turn joining paths into multiplying in a tensor algebra

**Remember:** Split the ordered times at the join to multiply signatures.

*True by definition.* MSC 60L20 (Rough paths), 15A69. arXiv math.PR. Level 3: graduate.

**Definition.** The signature of a path x of bounded variation in ℝᵈ on \[s, t\] lists all its iterated integrals. The level-k term is the integral of dx(t₁) ⊗ … ⊗ dx(tₖ) over s &lt; t₁ &lt; … &lt; tₖ &lt; t. Together the terms form one element of the tensor algebra, the algebra of formal sums of tensors of every degree.

**Problem.** Chen's identity says that the signature of two joined paths is the tensor product of their signatures. So the signature is a homomorphism from the monoid of paths, under joining end to start, into the grouplike elements of the tensor algebra.

**How the definition helps.** With signatures defined as integrals over ordered times, the identity reduces to splitting the region of ordered times at the join (our own). Each ordered tuple of times has its first entries before the join and the rest after it (our own). Summing over the split point gives exactly the degree-k part of the tensor product (our own). The harder converse question is how much of the path the signature remembers.

**Paper or page:** [Rough paths, Signatures and the modelling of functions on streams](https://arxiv.org/abs/1405.4537v1). It says: “The Signature is a homomorphism from the monoid of paths into the grouplike elements of a closed tensor algebra.”

**Sources:**

- [Terry Lyons, Rough paths, Signatures and the modelling of functions on streams, arXiv:1405.4537 (2014)](https://arxiv.org/abs/1405.4537v1)
- [Kuo-Tsai Chen, Iterated Integrals and Exponential Homomorphisms, Proceedings of the London Mathematical Society (1954)](https://doi.org/10.1112/plms/s3-4.1.502)

### Extra postulates repair Cox's theorem

**Remember:** Cox's postulates needed patching before they forced probability.

*Rules out counterexamples. Confidence: medium.* MSC 60A05 (Axioms; other general questions in probability), 03B48. arXiv math.PR, math.LO. Level 4: research.

**Definition.** Cox's theorem derives the rules of probability from postulates about 'plausibility'. The postulates say that plausibility is a real number, that it varies sensibly, and that it is consistent. Later authors add further postulates, for example about how many values plausibility can take.

**Problem.** With the added postulates, every real-valued plausibility measure that satisfies Cox's postulates obeys the sum and product rules of probability.

**How the definition helps.** The extra postulates rule out a known counterexample, so the theorem becomes true. Halpern published a plausibility measure that meets Cox's postulates as stated but does not obey the rules of probability. Further assumptions, or the 'common sense' postulates of Arnborg and Sjödin, rule out Halpern's example. Which extra assumption is the most natural is still debated.

**Wikipedia:** [Cox's theorem](https://en.wikipedia.org/wiki/Cox%27s_theorem). It says: “However Arnborg and Sjödin suggest additional "common sense" postulates, which would allow the assumptions to be relaxed in some cases while still ruling out the Halpern example.”

**Sources:**

- [Halpern, J. Y. (1999). A counterexample to theorems of Cox and Fine. Journal of Artificial Intelligence Research 10, 67–85.](https://doi.org/10.1613/jair.536)

### Kolmogorov products let zero-one laws be proved in any Markov category

**Remember:** A Kolmogorov product is the Kolmogorov extension theorem turned into an axiom.

*True by definition.* MSC 60A05 (Axioms; other general questions in probability), 18M05, 60F20. arXiv math.PR, math.CT. Level 4: research.

**Definition.** Work in a Markov category (a category of random functions that can copy and discard information). Take objects Xⱼ for j in J, write X(J) for their infinite tensor product, and write X(F) for the product over a finite subset F. X(J) is a Kolmogorov product if every projection X(J) → X(F) is deterministic, that is, it commutes with copying and so behaves like an ordinary function. In words, it is an infinite tensor product that is the limit of its finite marginals.

**Problem.** Fritz and Rischel prove abstract versions of the zero-one laws of Kolmogorov and Hewitt–Savage in Markov categories with Kolmogorov products. The classical laws follow because Markov kernels on standard Borel spaces have countable Kolmogorov products.

**How the definition helps.** Taking the extension theorem as an axiom lets the zero-one laws be proved abstractly. For Markov kernels on standard Borel spaces, the Kolmogorov extension theorem says exactly that the countable product is the limit of the finite products. So the classical extension theorem is still needed, but only to show that the concrete category satisfies the axiom.

**nLab:** [Kolmogorov extension theorem](https://ncatlab.org/nlab/show/Kolmogorov+extension+theorem), [Markov category](https://ncatlab.org/nlab/show/Markov+category), [zero-one law](https://ncatlab.org/nlab/show/zero-one+law). It says: “In Markov categories the Kolmogorov extension theorem appears in the form of an axiom that the category can satisfy, an abstraction of the universal property in the category of Markov kernels given above.”

**Sources:**

- [Tobias Fritz, Eigil Fjeldgren Rischel, Infinite products and zero-one laws in categorical probability, Compositionality 2(3) (2020); arXiv:1912.02769](https://arxiv.org/abs/1912.02769)

### Markov categories turn theorems on sufficient statistics into diagram proofs

**Remember:** A Markov category holds random functions that can copy and discard information.

*Makes the theorem clean to state or prove.* MSC 60A05 (Axioms; other general questions in probability), 18M05, 62B05. arXiv math.PR, math.CT. Level 4: research.

**Definition.** A Markov category is a symmetric monoidal category in which every object has a copy map and a discard map. These maps form commutative comonoids: copying is associative and commutative, and discarding one copy gives back the identity. The discard maps are natural, so any map followed by discard equals discard. The main example is measurable spaces with Markov kernels (measurable maps that send each point to a probability measure).

**Problem.** The Fisher–Neyman factorization theorem, Basu's theorem and Bahadur's theorem on sufficient statistics hold in Markov categories that satisfy suitable axioms, such as having conditionals. A sufficient statistic is a summary of the data that keeps all information about the unknown parameter.

**How the definition helps.** Inside a Markov category, conditional independence, almost-sure equality and sufficiency are defined by maps, so these theorems have string-diagram proofs with no measure theory. The measure-theoretic versions follow once the category of Markov kernels on suitable spaces satisfies the axioms. One such axiom is that every joint distribution splits into a marginal and a conditional kernel. That check uses the disintegration theorem, and the measure-theoretic work remains there.

**nLab:** [Markov category](https://ncatlab.org/nlab/show/Markov+category), [category-theoretic approaches to probability theory](https://ncatlab.org/nlab/show/category-theoretic+approaches+to+probability+theory). It says: “One looks for structures and axioms which can be thought of as "fundamental" in probability and statistics, and which one can use to prove theorems, without having to use measure theory directly.”

**Sources:**

- [Tobias Fritz, A synthetic approach to Markov kernels, conditional independence and theorems on sufficient statistics, Advances in Mathematics 370 (2020); arXiv:1908.07021](https://arxiv.org/abs/1908.07021)

### Quasi-Borel spaces give probability a cartesian closed category

**Remember:** A quasi-Borel space is given by its random variables, not its measurable sets.

*Makes the theorem clean to state or prove.* MSC 60A05 (Axioms; other general questions in probability), 28A05, 18D15. arXiv cs.PL, math.PR. Level 4: research.

**Definition.** A quasi-Borel space is a set X with a chosen set M of maps ℝ → X, called the random elements. M contains the constant maps. M is closed under precomposition with measurable maps ℝ → ℝ. M is closed under gluing along countable Borel partitions of ℝ: if ℝ is cut into countably many Borel pieces with a random element on each piece, the glued map is a random element.

**Problem.** Quasi-Borel spaces form a cartesian closed category, so they have function spaces X → Y with measurable evaluation. They carry a probability monad that agrees with the Giry monad on standard Borel spaces.

**How the definition helps.** Defining a space by its random elements, not its measurable sets, gives the function spaces that measurable spaces lack. The category of measurable spaces is not cartesian closed, so higher-order probabilistic programs, which take functions as inputs, have no function space there. The price is that a probability measure is now a random element modulo equality of laws, not a function on sets.

**nLab:** [quasi-Borel space](https://ncatlab.org/nlab/show/quasi-Borel+space). It says: “The category of quasi-Borel spaces is cartesian closed, unlike the category of measurable spaces.”

**Sources:**

- [Chris Heunen, Ohad Kammar, Sam Staton, Hongseok Yang, A convenient category for higher-order probability theory, LICS 2017; arXiv:1701.02547](https://arxiv.org/abs/1701.02547)

### In the category of couplings, Bayesian inversion is built in

**Remember:** A joint distribution does not care which variable you call the input.

*True by definition.* MSC 60A10 (Probabilistic measure theory), 28A50, 18M35. arXiv math.PR, math.CT. Level 4: research.

**Definition.** The category Krn has standard Borel probability spaces (probability spaces on Polish spaces with their Borel sets) as objects. A morphism from (X, p) to (Y, q) is a coupling: a probability measure on X × Y whose marginals are p and q. Equivalently, a morphism is a measure-preserving Markov kernel (a measurable way to send each point of X to a probability measure on Y), up to almost sure equality.

**Problem.** Every measure-preserving Markov kernel k: (X, p) → (Y, q) has a Bayesian inverse k†: (Y, q) → (X, p), unique up to almost sure equality. The Bayesian inverse gives the conditional distribution of x given y. Taking inverses is a dagger structure (an involution that reverses the direction of morphisms).

**How the definition helps.** With couplings as morphisms, the Bayesian inverse is the same joint measure with the two factors swapped, so existence and the dagger structure are immediate. For bare Markov kernels, a Bayesian inverse can fail to exist outside nice cases. The work moves into composing couplings and into the equivalence with kernels modulo almost sure equality. These use regular conditional distributions, which is why the objects are standard Borel spaces.

**nLab:** [Bayesian inversion](https://ncatlab.org/nlab/show/Bayesian+inversion), [category of couplings](https://ncatlab.org/nlab/show/category+of+couplings). It says: “Categorical abstractions of the category of coupling via dagger categories have therefore the concept of Bayesian inversion already built in.”

**Sources:**

- [Fredrik Dahlqvist, Vincent Danos, Ilias Garnier, Alexandra Silva, Borel kernels and their approximation, categorically, MFPS 34 (2018), arXiv:1803.02651](https://arxiv.org/abs/1803.02651)

### Nonsymmetric Kesten criterion compares a walk with its projection to the abelianization

**Remember:** Compare a biased walk with its abelian quotient, not with one.

*Makes the theorem clean to state or prove.* MSC 60B15 (Probability measures on groups or semigroups, Fourier transforms, factorization), 43A07. arXiv math.GR, math.PR. Level 4: research.

**Definition.** Let μ be a probability measure on a group G. The return radius λ(G, μ) is the limit superior of the nth roots of pₙ. Here pₙ is the probability that the μ-random walk is at the identity at step n. The abelianization Ḡ is the largest abelian quotient of G, and μ̄ is the image of μ there.

**Problem.** Let G be finitely generated and μ finitely supported, with support generating G as a semigroup. Then G is amenable exactly when λ(G, μ) = λ(Ḡ, μ̄). For symmetric μ, λ(Ḡ, μ̄) = 1, so this recovers Kesten's criterion λ(G, μ) = 1.

**How the definition helps.** In our own explanation, the abelian quotient absorbs the drift of a biased walk, so the comparison isolates the effect of the group. In our own example, a walk on ℤ stepping right with probability 2/3 has return radius 2√2/3 &lt; 1, although ℤ is amenable. So Kesten's test λ = 1 fails for walks that are not symmetric. The paper's Corollary 1.2 says λ(G, μ) = 1 exactly when G is amenable and μ has zero drift, under a moment condition. Proving equality of the two radii for amenable groups is the work.

**Paper or page:** [A non-symmetric Kesten criterion and ratio limit theorem for random walks on amenable groups](https://arxiv.org/abs/2309.01766v1). It says: “G amenable ⇔ λ(G,μ) = λ(Ḡ,μ̄).”

**Sources:**

- [Rhiannon Dougall, Richard Sharp, A non-symmetric Kesten criterion and ratio limit theorem for random walks on amenable groups, arXiv:2309.01766v1 (2023)](https://arxiv.org/abs/2309.01766v1)

### Jaynes's invariance principle gives Bertrand's chord problem one answer

**Remember:** If the problem gives no place or size, the answer must not depend on them.

*Rules out counterexamples. Confidence: medium.* MSC 60D05 (Geometric probability and stochastic geometry), 60A05. arXiv math.PR, math.MG. Level 4: research.

**Definition.** Jaynes asks that the probability distribution of a 'random chord' stay the same when the circle is moved or rescaled. The reason is that the problem gives neither the position nor the size of the circle.

**Problem.** Invariance under rotation, scaling and translation leaves exactly one distribution of random chords, the 'random radius' method. With it, the probability that a chord is longer than the side of the inscribed equilateral triangle is 1/2.

**How the definition helps.** Invariance gives conditions strong enough to leave only one distribution. The three classical methods give 1/3, 1/2 or 1/4, and the principle of indifference cannot choose among them. Jaynes solved the integral equations that invariance imposes. Whether this settles the paradox is disputed.

**Wikipedia:** [Bertrand paradox (probability)](https://en.wikipedia.org/wiki/Bertrand_paradox_%28probability%29). It says: “Jaynes pointed out that Bertrand's problem does not specify the position or size of the circle and argued that therefore any definite and objective solution must be "indifferent" to size and position.”

**Sources:**

- [Jaynes, E. T. (1973). The well-posed problem. Foundations of Physics 3, 477–492.](https://doi.org/10.1007/BF00709116)
- [A. Drory, Failure and uses of Jaynes' principle of transformation groups, Foundations of Physics 45 (2015) 439–460, arXiv:1503.09072](https://doi.org/10.1007/s10701-015-9876-7)

### Variance normalization orders Gaussian masses

**Remember:** Normalize each point to mean one before changing the covariances.

*Makes the theorem clean to state or prove.* MSC 60E15 (Inequalities; stochastic orderings), 60G60. arXiv math.PR. Level 4: research.

**Definition.** For a finite centered Gaussian vector X and fixed positive weights pⱼ, define its mass M(X) = ∑ⱼ pⱼ exp(Xⱼ − Var(Xⱼ)/2). Each normalized exponential has mean one.

**Problem.** Suppose X and Y have the same index set and Cov(Xᵢ,Xⱼ) ≤ Cov(Yᵢ,Yⱼ) for every pair. Then 𝔼\[F(M(X))\] ≤ 𝔼\[F(M(Y))\] for every twice continuously differentiable convex F with bounded first and second derivatives.

**How the definition helps.** Subtracting half the variance cancels every first-derivative term in the covariance comparison. Our own explanation interpolates linearly between the two covariance matrices. Gaussian integration by parts leaves terms proportional to the second derivative of F and the corresponding covariance increases. All remaining factors are nonnegative. Adding independent noise and passing to the limit covers singular covariance matrices.

**Paper or page:** [Moment bounds for Gaussian multiplicative chaos with higher-dimensional singularities](https://arxiv.org/abs/2302.06097). It says: “Let $\\bm {X}$, $\\bm {Y}$ be two Gaussian vectors indexed by $T$ such that $\\bm {Y}$ dominates $\\bm {X}$ in covariance on $T<sup>2$</sup>. Then for any \\emph{convex} functional $F$ with subgaussian growth at infinity as well as in its first and second derivatives, and for any \\emph{positive} weights $\\{ p<sub>i</sub>\\} <sub>i\\in T</sub>$, \\begin{equation\*}  \\mathbb {E}\[F(\\sum <sub>i\\in T</sub>p<sub>ie</sub><sup>{X<sub>i</sub>-\\frac{1}{2}\\mathbb</sup> {E}\[X<sub>i</sub><sup>2</sup>\]})\]\\leq \\mathbb {E}\[F(\\sum <sub>i\\in T</sub>p<sub>ie</sub><sup>{Y<sub>i</sub>-\\frac{1}{2}\\mathbb</sup> {E}\[Y<sub>i</sub><sup>2</sup>\]})\]. \\end{equation\*}”

**Sources:**

- [Moment bounds for Gaussian multiplicative chaos with higher-dimensional singularities](https://arxiv.org/abs/2302.06097)

### Borel data structures give one de Finetti theorem for graphs and arrays

**Remember:** Give every finite label set its own data space, then demand symmetry.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60G09 (Exchangeability for stochastic processes), 18A05, 28A05. arXiv math.PR. Level 4: research.

**Definition.** A Borel data structure assigns a Borel space of possible observations to each finite set of labels. It also gives compatible maps that relabel observations and restrict them to fewer labels. In category theory terms, it is a functor. An exchangeable law assigns a probability law to each finite label set, unchanged by relabeling and consistent under restriction.

**Problem.** For a Borel data structure that has exchangeable laws, the ergodic exchangeable laws form a measurable set. Every exchangeable law is a unique mixture of them. Ergodic laws are the extreme points, which are not proper mixtures of other exchangeable laws.

**How the definition helps.** The definition covers any data shape through its relabeling and restriction maps, so one theorem covers sequences, graphs and arrays (our own). De Finetti's theorem for sequences is the case where each label carries a single value (our own). The proof must still show that ergodic laws form a measurable set and that the mixture exists and is unique. The paper's representation theorems rest on Hoover's representation of exchangeable arrays.

**Paper or page:** [Exchangeable Laws in Borel Data Structures](https://arxiv.org/abs/2208.10667v1), [Exchangeable Laws in Borel Data Structures](https://arxiv.org/abs/2208.10667v1). It says: “A generalization of de Finetti's theorem is shown and natural transformations are used to present functional representation theorems”

**Sources:**

- [Julian Gerstenberg, Exchangeable Laws in Borel Data Structures, arXiv:2208.10667 (2022)](https://arxiv.org/abs/2208.10667v1)

### De Finetti's theorem says that probability measures form a limit

**Remember:** The space of probability measures represents exchangeable processes.

*Makes the theorem clean to state or prove.* MSC 60G09 (Exchangeability for stochastic processes), 60A05, 18M05. arXiv math.PR, math.CT. Level 4: research.

**Definition.** A probability measure on the sequence space Xᴺ is exchangeable if every finite permutation of the coordinates leaves it unchanged. P X is the space of probability measures on X. The iid sampling map P X → Xᴺ sends p to the law of an independent sequence whose terms all have law p.

**Problem.** For standard Borel X, P X with the iid sampling map is the limit of the diagram of finite permutations of Xᴺ, in the category of Markov kernels. Equivalently, every exchangeable probability measure on Xᴺ is a unique mixture of iid measures.

**How the definition helps.** Stated as a limit, de Finetti's theorem says in one line that every exchangeable kernel into Xᴺ factors uniquely through P X. The uniqueness of the mixture is the uniqueness in the universal property. The limit language does not prove the theorem, and for standard Borel spaces the classical proof is still the content. The same proof works in Markov categories that are representable and have conditionals and Kolmogorov products (Fritz, Gonda, Perrone).

**nLab:** [de Finetti's theorem](https://ncatlab.org/nlab/show/de+Finetti%27s+theorem). It says: “The Giry monad is the limit of an exchangeable process in the category of Markov kernels.”

**Sources:**

- [Bart Jacobs, Sam Staton, De Finetti's construction as a categorical limit, CMCS 2020, LNCS 12094; arXiv:2003.01964](https://arxiv.org/abs/2003.01964)
- [Tobias Fritz, Tomáš Gonda, Paolo Perrone, De Finetti's theorem in categorical probability, Journal of Stochastic Analysis 2(4) (2021); arXiv:2105.02639](https://arxiv.org/abs/2105.02639)

### Under exchangeability, betting on the order of each pair is fair

**Remember:** Under exchangeability, either order of a distinct pair is equally likely.

*Makes the theorem clean to state or prove.* MSC 60G09 (Exchangeability for stochastic processes), 62L10, 60G42. arXiv math.ST, math.PR. Level 4: research.

**Definition.** Exchangeability means that permuting the observations leaves their joint law unchanged. Show the next two observations as an unordered pair. Then bet on which of the two orders actually happened, and update the wealth when the order is revealed.

**Problem.** The wealth from these pair bets, checked after each complete pair, is a nontrivial test martingale for exchangeability. A test martingale is a nonnegative wealth process that is fair when the hypothesis holds. The test stays valid under continuous monitoring and has power one against a broad class of alternatives.

**How the definition helps.** The bet is fair by definition, because exchangeability makes the two orders of a pair equally likely given the past (our own unpacking). So the wealth is a martingale under the hypothesis with no further work. Betting on single observations is powerless, and hiding the order inside a pair removes just enough information to make betting possible. Proving that wealth grows under alternatives still takes work.

**Paper or page:** [Testing exchangeability by pairwise betting](https://arxiv.org/abs/2310.14293v2). It says: “Despite the fact that betting on individual observations is futile, we show that betting on pairs of observations is not.”

**Sources:**

- [Aytijhya Saha, Aaditya Ramdas, Testing exchangeability by pairwise betting, arXiv:2310.14293v2 (2023)](https://arxiv.org/abs/2310.14293v2)

### Allowing a delayed start reduces multi-marginal Skorokhod embeddings to one period

**Remember:** Make the previous stopping time the earliest time for the next stop.

*Makes the theorem clean to state or prove.* MSC 60G40 (Stopping times; optimal stopping problems; gambling theory), 60J65, 60G44. arXiv math.PR. Level 4: research.

**Definition.** A Skorokhod embedding of a law ν is a stopping time τ such that the process at time τ has law ν. In the delayed problem, a given random time is also fixed, and τ must come after it. Root's solution stops at the first entry into a time-space region to the right of a barrier. Rost's solution uses a region to the left of a barrier.

**Problem.** The multi-marginal Root and Rost solutions embed several laws at increasing stopping times. Each of them has an optimal stopping representation.

**How the definition helps.** With the delay, each stage of a multi-marginal problem becomes a one-period problem that starts at the previous stopping time. So the one-period method applies stage by stage. The paper first proves that the switching identities of Backhoff, Cox, Grass and Huesmann still hold with a delay. This recovers the known result for Root and gives a new one for Rost. The Rost case needs extra randomization for general initial laws.

**Paper or page:** [Delayed switching identities and multi-marginal solutions to the Skorokhod embedding problem](https://arxiv.org/abs/2312.04218v1). It says: “We achieve this by rephrasing the multi-period problem into a one-period framework with delay.”

**Sources:**

- [Alexander M. G. Cox, Annemarie M. Grass, Delayed switching identities and multi-marginal solutions to the Skorokhod embedding problem, arXiv:2312.04218 (2023)](https://arxiv.org/abs/2312.04218v1)

### Stretched Brownian motion is a Bass martingale on each irreducible convex cell

**Remember:** Split the space into irreducible convex cells, then find a Bass martingale on each.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60G44 (Martingales with continuous parameter), 49Q22, 60J65. arXiv math.PR. Level 4: research.

**Definition.** Stretched Brownian motion from μ to ν is the martingale with these end laws that is most correlated with Brownian motion. A Bass martingale has the form Mₜ = E\[∇F(B₁) \| Bₜ\] for a convex F and a Brownian motion B with a suitable starting law. The irreducible convex paving of De March and Touzi splits space into relatively open convex cells. On each cell, the pair (μ, ν) cannot be split further.

**Problem.** Earlier work showed that stretched Brownian motion is a Bass martingale exactly when (μ, ν) is irreducible. For a general pair, the stretched Brownian motion decomposes into a family of Bass martingales, one on each cell of the irreducible convex paving. The family may be uncountable.

**How the definition helps.** The paving isolates the irreducible pieces, so the known irreducible theorem can be stated cell by cell. Without the paving there is no single Bass martingale to describe the whole transport. The real work is to show that the process on each cell is a Bass martingale. The paper also shows that its cells are the De March–Touzi cells.

**Paper or page:** [The decomposition of stretched Brownian motion into Bass martingales](https://arxiv.org/abs/2406.10656v1). It says: “the stretched Brownian motion decomposes into a (possibly uncountable) family of Bass martingales on these sets.”

**Sources:**

- [Walter Schachermayer, Bertram Tschiderer, The decomposition of stretched Brownian motion into Bass martingales, arXiv:2406.10656 (2024)](https://arxiv.org/abs/2406.10656v1)

### Localization schemes give short martingale proofs of spectral-independence mixing bounds

**Remember:** Track the measures as they concentrate to bound how fast a chain mixes.

*Makes the theorem clean to state or prove.* MSC 60G48 (Generalizations of martingales), 60J10, 60J22. arXiv math.PR. Level 4: research.

**Definition.** A localization scheme assigns to each probability measure ν a martingale of probability measures νₜ that starts at ν. Martingale means that the expected future measure, given the present, equals the present measure. As time grows, the measures νₜ concentrate on smaller and smaller regions.

**Problem.** Localization schemes recover the main theorems of spectral and entropic independence by simple martingale arguments. These conditions limit how strongly the coordinates of a random configuration influence one another. The theorems say that they give fast mixing of Markov chains such as Glauber dynamics, which updates one random coordinate at a time.

**How the definition helps.** Each localization scheme comes with a Markov chain, so a mixing bound for the chain becomes a statement about the martingale. These arguments bypass high-dimensional expanders, the combinatorial theory used in earlier proofs. Each application must still relate its chain to a scheme and bound how fast variance or entropy decays (our own).

**Paper or page:** [Localization Schemes: A Framework for Proving Mixing Bounds for Markov Chains](https://arxiv.org/abs/2203.04163v2). It says: “we recover the main theorems in the spectral and entropic independence frameworks via simple martingale arguments”

**Sources:**

- [Yuansi Chen, Ronen Eldan, Localization Schemes: A Framework for Proving Mixing Bounds for Markov Chains, arXiv:2203.04163 (2022)](https://arxiv.org/abs/2203.04163v2)

### Pointwise continuity at time zero makes generalized Feller semigroups strongly continuous

**Remember:** Pointwise continuity plus a local norm bound gives continuity in norm.

*Rules out counterexamples. Confidence: medium.* MSC 60G53 (Feller processes), 47D07, 60J35. arXiv math.PR, math.FA. Level 4: research.

**Definition.** Let ρ be a weight on a space E, and let Bρ(E) be the closure of the bounded continuous functions in the norm sup \|f\|/ρ. A generalized Feller semigroup on Bρ(E) is a family of positive linear operators P(t) with P(0) = I and P(t+s) = P(t)P(s). Its operator norms are bounded for small t. For every f and every point x, P(t)f(x) tends to f(x) as t tends to zero.

**Problem.** Every generalized Feller semigroup is strongly continuous. That is, P(t)f tends to f in the weighted norm as t tends to zero, for every f in Bρ(E).

**How the definition helps.** The definition asks only for conditions that are easy to check in examples, yet it is strong enough for strong continuity. The paper shows that no condition of the definition can be dropped. On a two-point space {a, b}, let P(t)f be the constant f(a) for t &gt; 0 (our own example). This is a positive contraction semigroup, but P(t)f(b) does not tend to f(b).

**Paper or page:** [Ramifications of generalized Feller theory](https://arxiv.org/abs/2308.03858v1), [Ramifications of generalized Feller theory](https://arxiv.org/abs/2308.03858v1). It says: “We also provide a counterexample, which shows that no condition of the basic definition of generalized Feller semigroups can be dropped.”

**Sources:**

- [Christa Cuchiero, Tonio Möllmann, Josef Teichmann, Ramifications of generalized Feller theory, arXiv:2308.03858 (2023)](https://arxiv.org/abs/2308.03858v1)

### Shifting the particles makes the two-boundary free Schur process Pfaffian

**Remember:** With two free ends, shift all the particles together to get Pfaffian correlations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 05E05, 05A17. arXiv math.PR, math.CO. Level 4: research.

**Definition.** A Schur process is a random sequence of integer partitions, that is, nonincreasing lists of nonnegative integers (our own gloss). Each partition gives a row of particles, so the process is a random point configuration. In the free boundary version, the first and last partitions may be any partitions, not only the empty one. The paper also studies a shifted process, which moves the particle positions by a common random amount (our own reading).

**Problem.** With one free boundary, every correlation function is the Pfaffian of a matrix built from a 2 × 2 kernel. A Pfaffian is a polynomial in the entries of an antisymmetric matrix whose square is the determinant. With two free boundaries the process is not Pfaffian, but Theorem 2.5 shows that the shifted process is.

**How the definition helps.** The shifted process gives an object for which a Pfaffian formula can be stated at all, since the unshifted process is not Pfaffian. The authors compute correlations with free fermions, an algebraic tool from physics, extended to free boundary states. The kernel of the shifted process is explicit, through contour integrals of products of theta functions. Computing that kernel is the main work (our own).

**Paper or page:** [The free boundary Schur process and applications I](https://arxiv.org/abs/1704.05809v3), [The free boundary Schur process and applications I](https://arxiv.org/abs/1704.05809v3). It says: “For the case of two free boundaries, we find that the process is not pfaffian, but a closely related process is.”

**Sources:**

- [Dan Betea, Jérémie Bouttier, Peter Nejjar, Mirjana Vuletić, The free boundary Schur process and applications I, arXiv:1704.05809 (2018). Ann. Henri Poincaré 19 (2018), 3663-3742](https://arxiv.org/abs/1704.05809v3)

### Strong operator convergence gives one proof of the three random-matrix scaling limits

**Remember:** Let the operators converge instead of comparing their kernels point by point.

*Makes the theorem clean to state or prove.* MSC 60G55 (Point processes (e.g., Poisson, Cox, Hawkes processes)), 60B20, 47A10. arXiv math-ph, math.PR. Level 4: research.

**Definition.** A determinantal point process has correlations given by determinants of a kernel K(x, y), which defines an integral operator. Here the kernels are spectral projections of self-adjoint Sturm–Liouville operators, which are second-order differential operators. A spectral projection keeps only the part of an operator with spectrum in a given range. Operators Aₙ converge strongly to A if Aₙf → Af in norm for every fixed f.

**Problem.** For this notion of convergence, the Dyson, Airy and Bessel kernels are universal limits in the bulk, soft-edge and hard-edge scalings. This gives a short, unified derivation of the scaling limits for the Gaussian, Laguerre and Jacobi unitary ensembles.

**How the definition helps.** In our own reading, strong convergence of the integral operators suits these kernels, because it follows from convergence of the underlying differential operators. In our own reading, one argument about Sturm–Liouville operators replaces separate asymptotics of kernel formulas for each ensemble. The idea comes from Borodin and Olshanski. In our own account, the work is checking convergence of the scaled differential operators and passing it to their projections.

**Paper or page:** [On the Scaling Limits of Determinantal Point Processes with Kernels Induced by Sturm-Liouville Operators](https://arxiv.org/abs/1104.0153v4). It says: “Instead of studying the convergence of the kernels as functions, the method directly addresses the strong convergence of the induced integral operators.”

**Sources:**

- [Folkmar Bornemann, On the Scaling Limits of Determinantal Point Processes with Kernels Induced by Sturm-Liouville Operators, arXiv:1104.0153v4 (2016), SIGMA 12 (2016), 083, 20 pages, doi:10.3842/sigma.2016.083](https://arxiv.org/abs/1104.0153v4)

### Dirichlet covariance makes the planar Gaussian free field conformally invariant

**Remember:** Planar conformal maps preserve the gradient inner product and thus the Gaussian law.

*True by definition. Confidence: medium.* MSC 60G60 (Random fields), 60G15, 81T40. arXiv math.PR, math-ph. Level 4: research.

**Definition.** Start with smooth functions of compact support in a planar domain. Complete this space in the norm from the Dirichlet inner product, which integrates the dot product of two gradients. Index the zero-boundary Gaussian free field by functions in this completed space. Its values are jointly normal with mean zero and covariance given by that inner product.

**Problem.** Let φ be a conformal bijection between planar domains, so it preserves angles. It transports the zero-boundary Gaussian free field on one domain to the field on the other.

**How the definition helps.** Defining covariance by the Dirichlet inner product makes conformal invariance follow from invariance of that product. Under a conformal map, the change of area cancels the two gradient factors (our own explanation). A jointly normal family is determined by its means and covariances (our own explanation). A construction with a Green function as covariance kernel must instead transform the kernel and the test functions together (our own comparison).

**Wikipedia:** [Gaussian free field](https://en.wikipedia.org/wiki/Gaussian_free_field). It says: “the conformal invariance of the continuum GFF is clear from the invariance of the Dirichlet inner product.”

**Sources:**

- [S. Sheffield, Gaussian free fields for mathematicians, Probability Theory and Related Fields 139 (2007)](https://doi.org/10.1007/s00440-006-0050-1)

### Wick products remove internal cumulants

**Remember:** Remove each block's own cumulants before combining the blocks.

*Makes the theorem clean to state or prove.* MSC 60G60 (Random fields). arXiv math.PR. Level 4: research.

**Definition.** In a finite block of real field evaluations with moments of all orders, give each occurrence its own formal variable tⱼ. Set S = ∑ⱼ tⱼXⱼ. The Wick product is the coefficient of the product of all the variables in exp(S)/𝔼\[exp(S)\]. Expectations here act on coefficients, so the series need no convergence.

**Problem.** The expected product of these Wick products equals a sum over partitions of the occurrences where each part meets at least two blocks. Each partition contributes the product of its parts’ joint cumulants. A part’s cumulant is its multilinear coefficient in log 𝔼\[exp(S)\] using only that part’s variables.

**How the definition helps.** The denominator removes every term confined to one block from the logarithm of the joint generating series. Our own coefficient calculation then expands the exponential of the remaining terms. Choosing terms that use each variable once gives exactly the stated partitions. The logarithmic definition of cumulants supplies the coefficients.

**Paper or page:** [A scaling limit of the parabolic Anderson model with exclusion interaction](https://arxiv.org/abs/2103.13479). It says: “One has the \`\`diagram formula"
\\begin{equation}
\\label{eq:diagram}
{\\symb E}\\bigg(\\prod<sub>k=1</sub><sup>p</sup>\\Wick{\\prod<sub>i=1</sub><sup>m</sup>X<sub>(i,k)</sub>}\\bigg)
= \\sum\_{\\pi\\in\\mathcal{P}M(M\\times P)}\\prod{B\\in\\pi}{\\symb E}c(X{B}).
\\end{equation}”

**Sources:**

- [A scaling limit of the parabolic Anderson model with exclusion interaction](https://arxiv.org/abs/2103.13479)

### Measure-valued stochastic integrals allow a Fubini theorem with random mixing weights

**Remember:** Keep the parameter measure inside the integral when the measure itself is random.

*Makes the theorem clean to state or prove.* MSC 60H05 (Stochastic integrals), 60G57. arXiv math.PR. Level 4: research.

**Definition.** A semimartingale S is a random process that can serve as a stochastic integrator, such as Brownian motion. A measure-valued integrand φ gives, at each time and in each outcome, a measure on a parameter space. The integral φ • S is again a measure on the parameter space at each time.

**Problem.** Let the mixing weights φ be a random kernel. Then (φ • S)(f) = φ(f) • S for each test function f, so testing commutes with stochastic integration. This extends the classic stochastic Fubini theorem, which needs a fixed mixing measure.

**How the definition helps.** Because the new integral is itself measure-valued, the Fubini statement can compare testing before and after integration. A fixed mixing measure is too restrictive for Volterra processes X(t) = ∫ Ψ(t, s) dS(s), whose weights form a stochastic kernel. The proof must still construct the integral as a measure and prove the Fubini identity.

**Paper or page:** [New Stochastic Fubini Theorems](https://arxiv.org/abs/2403.13791v1), [New Stochastic Fubini Theorems](https://arxiv.org/abs/2403.13791v1). It says: “To handle that situation and prove a corresponding new stochastic Fubini theorem, we introduce a new notion of measure-valued stochastic integration with respect to a general multidimensional semimartingale.”

**Sources:**

- [Tahir Choulli, Martin Schweizer, New Stochastic Fubini Theorems, arXiv:2403.13791 (2024)](https://arxiv.org/abs/2403.13791v1)

### Self-integrable covariance kernels decide when Gaussian stochastic integrals are well defined

**Remember:** Test the covariances of the Riemann sums to see whether they converge.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60H05 (Stochastic integrals), 60G57, 28A25. arXiv math.PR. Level 4: research.

**Definition.** A function–measure kernel K on a set D ⊂ ℝᵈ gives a real Radon measure K(x, ·) for each point x, varying continuously in x. Its self-integral ∫ K(x, dx) over D is a limit of sums Σ K(xᵢ, Aᵢ) over partitions {Aᵢ} of D with xᵢ in Aᵢ. A Radon measure is a locally finite signed Borel measure. K is self-integrable when this limit exists and does not depend on the choices.

**Problem.** Let Z be a mean-square continuous random field and M a random measure, jointly Gaussian. Then ∫ Z dM is uniquely defined in mean square exactly when the cross-covariance kernel of Z and M is self-integrable and a second kernel on D × D passes a weaker form of the same test.

**How the definition helps.** For Gaussian inputs, mean-square convergence of the Riemann sums depends only on second moments, which are built from covariance kernels (our own). So a question about random limits becomes a test on deterministic kernels. The abstract says the self-integral of the cross-covariance kernel is the expected value of the integral when both are uniquely defined. The second kernel controls products of two Riemann sums, so it compares pairs of partitions (our own). The hard part is checking these limits for given inputs (our own).

**Paper or page:** [Function-measure kernels, self-integrability and uniquely-defined stochastic integrals](https://arxiv.org/abs/2303.04282v1), [Function-measure kernels, self-integrability and uniquely-defined stochastic integrals](https://arxiv.org/abs/2303.04282v1). It says: “self-integrability properties on K are necessary and sufficient to guarantee the unique-definiteness of ∫ᴅ Z dM.”

**Sources:**

- [Ricardo Carrizo Vergara, Function-measure kernels, self-integrability and uniquely-defined stochastic integrals, arXiv:2303.04282 (2023)](https://arxiv.org/abs/2303.04282v1)

### Coupling curvature gives a short proof of the log-Sobolev inequality

**Remember:** Control how far paired runs separate to bound how fast entropy falls.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60J05 (Discrete-time Markov processes on general state spaces), 49Q22, 60E15. arXiv math.PR. Level 4: research.

**Definition.** Take Markov operators T₁, …, Tₘ on a metric space and weights θᵢ. Sectional curvature asks that two copies of each step can be coupled so their distance never exceeds ℓᵢ dist(x, y). This uses W∞, the largest distance under the best coupling. Average curvature asks that the weighted sum of ℓᵢ times the average coupled distance W₁ be at most (1 − κ) dist(x, y).

**Problem.** Under these two conditions and a regularity condition, the operators contract entropy with constant κ. As an application, the paper gives a coupling proof of the logarithmic Sobolev inequality for Langevin diffusion in a uniformly convex potential. That inequality bounds entropy by the integral of the squared gradient.

**How the definition helps.** The curvature conditions replace analysis of the generator by distances between coupled runs, which are easy to bound for many examples. The paper says that its method gives a simple coupling-based proof of the logarithmic Sobolev inequality for convex potentials. The main step is Theorem 2, which turns the coupling bounds into entropy contraction. Our own explanation is that the diffusion case still needs a passage from discrete steps to small times.

**Paper or page:** [Entropy factorization via curvature](https://arxiv.org/abs/2407.13457v2). It says: “Our method also yields a simple, coupling-based proof of the celebrated logarithmic Sobolev inequality for Langevin diffusions in a convex potential”

**Sources:**

- [Pietro Caputo, Justin Salez, Entropy factorization via curvature, arXiv:2407.13457 (2024)](https://arxiv.org/abs/2407.13457v2)

### Optimal strong stationary times give quasi-stationary laws without an absorbing state

**Remember:** Condition on not yet reaching stationarity, in place of not yet being absorbed.

*Makes the theorem clean to state or prove.* MSC 60J10 (Markov chains (discrete-time Markov processes on discrete state spaces)), 60G40. arXiv math.PR. Level 4: research.

**Definition.** Start a finite Markov chain from a law α. A strong stationary time τ is a randomized stopping time at which the state has the stationary law π, independently of τ. An optimal one has the smallest tail probabilities P(τ &gt; t) for every t. A quasi-stationary law is the limit law of the state, conditioned on survival up to time t.

**Problem.** Let the chain be finite, irreducible and reversible, with all eigenvalues positive. Fix a starting law α ≠ π, and condition on the optimal strong stationary time exceeding t. Then the conditional law of the state at time t converges as t tends to infinity.

**How the definition helps.** The optimal strong stationary time acts as the hitting time of the stationary law. So it gives a survival event even when no state absorbs the chain. With this event, the classical Yaglom limit can be stated for any reversible chain. The paper writes the limit using eigenvectors of the transition matrix. It also gives counterexamples showing that reversibility cannot be dropped in general.

**Paper or page:** [Quasi-stationary distributions of non-absorbing Markov chains](https://arxiv.org/abs/2409.19246v1), [Quasi-stationary distributions of non-absorbing Markov chains](https://arxiv.org/abs/2409.19246v1). It says: “In our setting, the hitting time of the absorbing set is replaced by an optimal strong stationary time”

**Sources:**

- [Roberto Fernandez, Francesco Manzo, Matteo Quattropani, Elisabetta Scoppola, Quasi-stationary distributions of non-absorbing Markov chains, arXiv:2409.19246 (2024)](https://arxiv.org/abs/2409.19246v1)

### Averaging a Markov generator with its time reversal gives reversibility

**Remember:** Average each rate with its reversed rate so both directions carry equal flow.

*True by definition.* MSC 60J27 (Continuous-time Markov processes on discrete state spaces), 60J35. arXiv math.PR. Level 4: research.

**Definition.** Fix a positive target law π on a finite state space and a generator L, the matrix of jump rates of a continuous-time chain. Its time reversal has rate L\*(x,y) = π(y)L(y,x)/π(x). A mean reversiblization takes a symmetric mean M, homogeneous of degree one, and uses M(L(x,y), L\*(x,y)) as the new rate from x to y. The diagonal entries are then reset so that each row sums to zero.

**Problem.** Every such mean reversiblization is π-reversible. That is, π(x) times the new rate from x to y equals π(y) times the new rate from y to x.

**How the definition helps.** The definition builds the target law into the reversed rate, so detailed balance follows from two properties of the mean (our own proof). Homogeneity gives π(x)M(L(x,y), L\*(x,y)) = M(π(x)L(x,y), π(y)L(y,x)). Symmetry of M makes this expression unchanged when x and y swap. The paper's harder results compare these generators by information divergences.

**Paper or page:** [Systematic approaches to generate reversiblizations of Markov chains](https://arxiv.org/abs/2303.03650v4). It says: “In this second approach, we construct new reversiblizations via different natural notions of generalized means such as the Cauchy mean or the dual mean.”

**Sources:**

- [Michael C. H. Choi, Geoffrey Wolfer, Systematic approaches to generate reversiblizations of Markov chains, arXiv:2303.03650 (2023)](https://arxiv.org/abs/2303.03650v4)

### A weak Poincaré inequality gives convergence rates for slowly mixing Markov chains

**Remember:** Allow a small remainder to measure slower mixing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60J46 (Dirichlet form methods in Markov processes), 60J05, 60J22. arXiv math.ST, stat.CO. Level 4: research.

**Definition.** A Poincaré inequality bounds the variance of a function by its energy, which measures how much one step of the chain changes the function. A weak Poincaré inequality adds a remainder. For every r &gt; 0, the variance is at most α(r) times the energy plus r times a bound such as the squared oscillation.

**Problem.** A weak Poincaré inequality for a reversible-type operator built from the chain gives explicit bounds on how fast the chain approaches equilibrium. The bounds can be slower than geometric, which covers cases such as pseudo-marginal methods.

**How the definition helps.** The remainder lets the inequality hold without a fixed contraction factor, and a short recursion then gives the rate (our own explanation). One step lowers the variance of a function by the energy of the chain run forward and then backward (our own calculation). The weak inequality turns that drop into a recursion for the variance, and choosing r at each step solves it (our own unpacking). These proofs are simpler than proofs by drift and minorization conditions.

**Paper or page:** [Comparison of Markov chains via weak Poincaré inequalities with application to pseudo-marginal MCMC](https://arxiv.org/abs/2112.05605v2). It says: “Associated proofs are simpler than those relying on drift/minorization conditions and the tools developed allow us to recover and further extend known results as particular cases.”

**Sources:**

- [Christophe Andrieu, Anthony Lee, Sam Power, Andi Q. Wang, Comparison of Markov chains via weak Poincaré inequalities with application to pseudo-marginal MCMC, Ann. Statist. 50(6): 3592-3618 (December 2022)](https://arxiv.org/abs/2112.05605v2)

### Enhanced Brownian rough paths give diffusion large deviations by contraction

**Remember:** Enhance the driving noise so that its solution depends continuously on it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60L20 (Rough paths), 60F10, 60H10. arXiv math.PR. Level 4: research.

**Definition.** A rough path records a path's increments and repeated integrals along that path. Its p-variation metric controls changes in this data over partitions of the time interval. The rough path definition of the solution uses this data as input to a deterministic differential equation. The usual stochastic integral definition does not equip the ordinary Brownian path with this extra data.

**Problem.** Take a Stratonovich equation on a finite interval with fixed initial value, smooth bounded coefficients with bounded derivatives, and Brownian noise scaled by √ε. Its solutions satisfy a large deviation principle with the Freidlin–Wentzell rate. The rate at a path is the least energy ½∫\|ḣ\|² of an absolutely continuous driving path h from zero that produces it.

**How the definition helps.** The rough path formulation makes the solution map continuous, so the rate is the infimum of driving energies over the paths that produce it (our own explanation). The solution map need not be continuous in the uniform metric on ordinary paths (our own comparison). Lyons' universal limit theorem gives continuity in the rough path metric, and a large deviation theorem for enhanced Brownian motion gives the input rate. The contraction principle then transfers that rate to the solutions.

**Wikipedia:** [Rough path](https://en.wikipedia.org/wiki/Rough_path). It says: “Therefore, the Contraction principle in large deviations theory reduces Freidlin–Wentzell's problem to demonstrating the large deviation principle for (t,√εBₜ) in the p-variation topology.”

**Sources:**

- [T. Lyons, Differential equations driven by rough signals, Revista Matemática Iberoamericana 14 (1998)](https://doi.org/10.4171/RMI/240)
- [M. Ledoux, Z. Qian and T. Zhang, Large deviations and support theorem for diffusion processes via rough paths, Stochastic Processes and their Applications 102 (2002)](https://doi.org/10.1016/S0304-4149(02)00176-X)

### Geometric rough paths defined by limits preserve the product rule

**Remember:** The ordinary product rule survives limits in the rough path metric.

*True by definition. Confidence: medium.* MSC 60L20 (Rough paths), 60H05. arXiv math.PR. Level 4: research.

**Definition.** A geometric rough path is a limit of smooth paths together with their repeated integrals. The rough path metric controls the changes in both the paths and these integrals across time partitions. The Itô enhancement of Brownian motion, which uses left-endpoint stochastic sums, is not geometric.

**Problem.** Let U and V be real solution coordinates driven by the same geometric rough path. Then d(UV) = U dV + V dU if the equations have smooth bounded coefficients with bounded derivatives.

**How the definition helps.** Defining geometric rough paths as limits of smooth data lets the product rule pass from smooth solutions to rough solutions (our own explanation). This needs the continuity theorem for rough solutions and their integrals (our own explanation). For the Itô definition, the product rule instead adds a term from the accumulated products of the two increments (our own comparison). For Brownian motion, constructing a geometric enhancement is also a separate step (our own explanation).

**Wikipedia:** [Rough path](https://en.wikipedia.org/wiki/Rough_path). It says: “In fact any enhancement of Brownian motion as a geometric rough path will give rise a calculus that satisfies this classical product rule.”

**Sources:**

- [T. Lyons, Differential equations driven by rough signals, Revista Matemática Iberoamericana 14 (1998)](https://doi.org/10.4171/RMI/240)

### Jointly controlled integrands give a Fubini theorem for two-parameter rough integrals

**Remember:** Control both variables and the mixed error, and integrate in either order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 60L20 (Rough paths), 60H05. arXiv math.PR. Level 4: research.

**Definition.** A geometric p-rough path X records an irregular path with its iterated integrals up to order p. A two-parameter path Y(r, r′) is controlled by X when its increments in each variable expand in increments of X. The coefficients must match and the remainders must be small. For such Y, the paper defines a joint integral over a rectangle as a limit of two-dimensional sums.

**Problem.** Under the conditions for the joint integral to exist, it equals both iterated rough integrals. So integrating over the rectangle at once, or one variable at a time in either order, gives the same answer.

**How the definition helps.** Joint control gives the rectangle sums and both iterated sums the same local expansion, so all three can be compared term by term (our own). The abstract stresses that the three integrals have distinct definitions a priori. The key estimate is a two-parameter Young–Towghi inequality, a bound on two-dimensional sums against rough increments, which the authors extend. It gives a maximal bound on the discrete sums that approximate the joint integral.

**Paper or page:** [A Fubini type theorem for rough integration](https://arxiv.org/abs/2106.06474v1), [A Fubini type theorem for rough integration](https://arxiv.org/abs/2106.06474v1). It says: “A priori these three integrals have distinct definitions, and so this parallels the classical Fubini's theorem for product measures.”

**Sources:**

- [Thomas Cass, Jeffrey Pei, A Fubini type theorem for rough integration, arXiv:2106.06474 (2021)](https://arxiv.org/abs/2106.06474v1)

### Tree-like equivalence makes the path signature one-to-one

**Remember:** Retraced pieces leave no trace, so the signature forgets exactly those.

*Rules out counterexamples.* MSC 60L20 (Rough paths), 26A45. arXiv math.CA, math.PR. Level 4: research.

**Definition.** The signature of a path is the sequence of all its iterated integrals. A loop is tree-like when it only goes out and comes back along the branches of a tree. Two paths are tree-like equivalent when the first path, followed by the second path run backwards, is a tree-like loop. An unparameterised path is an equivalence class for this relation.

**Problem.** Two continuous paths of finite variation have the same signature exactly when they are tree-like equivalent (Hambly and Lyons). So the signature is one-to-one on unparameterised paths.

**How the definition helps.** The signature cannot see a change of speed or a retraced piece, so the relation is chosen to forget exactly these (our own). A segment followed by the same segment backwards has the signature of the constant path, so the signature is not one-to-one on plain paths (our own example). Equivalent paths have equal signatures, because a tree-like loop has trivial signature and signatures multiply when paths are joined (our own). The hard half, that equal signatures force tree-like equivalence, is the theorem of Hambly and Lyons.

**Paper or page:** [Topologies on unparameterised path space](https://arxiv.org/abs/2206.11153v2). It says: “The 2010 paper \[12\] of Hambly and Lyons showed that the signature is injective on the space of continuous finite-variation paths up to a general notion of reparameterisation called tree-like equivalence.”

**Sources:**

- [Thomas Cass, William F. Turner, Topologies on unparameterised path space, arXiv:2206.11153 (2022)](https://arxiv.org/abs/2206.11153v2)
- [Hambly, Lyons, Uniqueness for the signature of a path of bounded variation and the reduced path group, Annals of Mathematics 171 (2010), 109–167](https://doi.org/10.4007/annals.2010.171.109)
