### Counting observations below a threshold gives order statistic laws

**Remember:** The kth smallest is ≤ x when at least k values are.

*Makes the theorem clean to state or prove.* MSC 62G30 (Order statistics; empirical distribution functions), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** For 1 ≤ k ≤ n, the kth order statistic is the kth smallest of n observations, with each repeated value counted once for each occurrence. So it is at most x exactly when at least k observations are at most x.

**Problem.** Take n independent observations with the same distribution function F, where F(x) is the chance of a value at most x. The chance that the kth smallest is at most x equals the chance of at least k successes in n independent trials with probability F(x).

**How the definition helps.** The event that the kth smallest is at most x is the event that at least k observations are at most x, and that count is binomial with n trials and probability F(x) (our own). Counting repeats separately keeps this exact, with no density or tie assumption (our own).

**Wikipedia:** [Order statistic](https://en.wikipedia.org/wiki/Order_statistic). It says: “P(X₍ₖ₎ ≤ x) = P(there are at least k observations less than or equal to x)”

**Sources:** none listed. No primary source with a working link was found.

### An envelope makes rejection sampling exact

**Remember:** An envelope lets acceptance multiply the proposal back into the target.

*Rules out counterexamples.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO. Level 2: later undergraduate.

**Definition.** Choose a proposal density g and a finite constant M with f ≤ Mg almost everywhere, an envelope that makes f/(Mg) a probability (our own). Draw from g, accept with probability f/(Mg), and repeat independent attempts until one is accepted.

**Problem.** The first accepted draw has density f. Without the envelope condition, clipping the acceptance probability at one need not give that density.

**How the definition helps.** A draw at x is accepted with density g(x)·f(x)/(Mg(x)) = f(x)/M, so the accepted draw has density f (our own). For a uniform proposal on \[0, 1\], f(x) = 2x and M = 1 break the envelope (our own). Clipping the acceptance at one then gives density proportional to min(2x, 1) (our own).

**Wikipedia:** [Rejection sampling](https://en.wikipedia.org/wiki/Rejection_sampling). It says: “Accepting only pairs such that u &lt; f(x)/(Mg(x)) then produces pairs (x,v) uniformly distributed over the subgraph of f(x)”

**Sources:**

- [G. Casella, C. P. Robert and M. T. Wells, Generalized Accept-Reject sampling schemes](https://doi.org/10.1214/lnms/1196285403)

### Antithetic pairs integrate lines exactly

**Remember:** Pair a draw with its reflection so their sum is fixed.

*True by definition.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO. Level 2: later undergraduate.

**Definition.** For simulation on \[0,1\], pair each uniform draw U with its reflection 1 − U, so the pair always sums to one (our own). Average the function at the two points rather than at two independent points.

**Problem.** This paired estimator integrates every affine function on \[0,1\] with zero variance.

**How the definition helps.** The pair's midpoint is always 1/2, so for an affine function ax + b the paired average is a/2 + b, its integral on \[0, 1\] (our own). Independent draws lack this cancellation, and for nonlinear functions the gain depends on how well the deviations cancel (our own).

**Paper or page:** [Living on the Edge: An Unified Approach to Antithetic Sampling](https://arxiv.org/abs/2110.15124v2). It says: “CCV are marginally standard uniform and constant in sum.”

**Sources:**

- [Living on the Edge: An Unified Approach to Antithetic Sampling (arXiv 2110.15124v2)](https://arxiv.org/abs/2110.15124v2)

### Completeness makes the best unbiased estimator unique

**Remember:** From T, only zero can estimate zero without bias.

*Makes the theorem clean to state or prove.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T is complete if no non-zero function of T is unbiased for zero: whenever Eθ\[g(T)\] = 0 for every θ, g(T) = 0 almost surely under every θ. So two unbiased estimators that are both functions of T agree almost surely (our own).

**Problem.** Let T be complete and sufficient, and let h(T) be an unbiased estimator with finite variance under every parameter value. Then h(T) uniquely minimizes variance uniformly among unbiased estimators, up to almost sure equality under every parameter value.

**How the definition helps.** Rao–Blackwell conditioning turns any unbiased competitor into an unbiased function of T with no larger variance (our own). Completeness makes that function equal to h(T) almost surely (our own). If the competitor also has the least variance, its conditional variance given T is zero, so it equals h(T) almost surely (our own).

**Wikipedia:** [Completeness (statistics)](https://en.wikipedia.org/wiki/Completeness_%28statistics%29), [Lehmann–Scheffé theorem](https://en.wikipedia.org/wiki/Lehmann%E2%80%93Scheff%C3%A9_theorem). It says: “Most parametric models have a sufficient statistic which is not complete. This is important because the Lehmann–Scheffé theorem cannot be applied to such models.”

**Sources:** none listed. No primary source with a working link was found.

### Factored likelihood lets likelihood ratio tests use only sufficient statistics

**Remember:** The data-only factor appears top and bottom, so it cancels.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** For countable data, T is sufficient when each probability factors as Pθ(X = x) = h(x)g(θ, T(x)), with nonnegative h free of θ and g seeing the data only through T. By the factorization theorem, this is the usual conditional-law definition.

**Problem.** Take the supremum of the likelihood over the null hypothesis and divide it by the supremum over the full model. If the full supremum is positive and finite, this ratio depends on the data only through T.

**How the definition helps.** The factor h(x) is the same for every θ, so it comes out of both suprema and cancels in the ratio (our own). What remains is a ratio of suprema of g(θ, T(x)), which is a function of T(x) (our own).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “the likelihood's dependence on θ is only in conjunction with T(X).”

**Sources:** none listed. No primary source with a working link was found.

### Factoring the probability mass shows which statistic is sufficient

**Remember:** Fix T, and what is left of the data ignores θ.

*Makes the theorem clean to state or prove.* MSC 62B05 (Sufficient statistics and fields). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T is sufficient if, on each set {T = t} of positive probability, the data mass divided by Pθ(T = t) is the same for every θ.

**Problem.** In a countable sample space, T is sufficient exactly when the joint mass function factors as h(x)g(θ, T(x)), with nonnegative factors and h free of θ.

**How the definition helps.** If the mass factors, g(θ, t) is constant on {T = t}, so it cancels when we divide by Pθ(T = t) (our own). Conversely, the mass equals the parameter-free conditional mass times Pθ(T = T(x)), and that product is a factorization (our own).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “the density ƒ can be factored into a product such that one factor, h, does not depend on θ and the other factor, which does depend on θ, depends on x only through T(x).”

**Sources:**

- [Halmos and Savage (1949), Application of the Radon-Nikodym Theorem to the Theory of Sufficient Statistics](https://doi.org/10.1214/aoms/1177730032)

### Natural statistics add when exponential family observations are pooled

**Remember:** Add the statistics because multiplying densities adds their exponents.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62E10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** An exponential family in natural form has density h(x) exp\[η·T(x) − A(η)\], so the parameter η meets the data only through the summary T(x). Here A(η) makes the density integrate to one.

**Problem.** For n independent observations from one member of the family, the sum T(x<sub>1</sub>) + … + T(x<sub>n</sub>) is sufficient for η. Its number of components does not grow with n.

**How the definition helps.** Multiplying exponentials adds exponents, so the joint density is ∏h(x<sub>i</sub>) times exp\[η·∑T(x<sub>i</sub>) − nA(η)\] (our own). This is the product form of the factorization theorem, with the sum as the statistic (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “the dimension of the sufficient statistic does not grow with the data size”

**Sources:** none listed. No primary source with a working link was found.

### Sufficiency makes the Rao–Blackwell estimator computable from the data

**Remember:** Given a sufficient statistic, the leftover data carry no trace of θ.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T(X) is sufficient for θ when the conditional law of the data X given T(X) does not depend on θ. So E\[δ(X) ∣ T\] is the same function of T under every θ, and hence a genuine estimator.

**Problem.** For a square-integrable estimator δ(X) and a sufficient statistic T, E\[δ(X) ∣ T\] is an estimator with mean squared error no larger than δ’s.

**How the definition helps.** Sufficiency makes the conditional expectation free of θ, so it is a statistic. Conditional Jensen’s inequality for squared error gives a conditional risk no larger than δ’s, and averaging over T gives the bound (our own).

**Wikipedia:** [Rao–Blackwell theorem](https://en.wikipedia.org/wiki/Rao%E2%80%93Blackwell_theorem), [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “Generally, the conditional expected value of one function of these data given another function of these data does depend on θ, but the very definition of sufficiency given above entails that this one does not.”

**Sources:**

- [Blackwell, D. (1947). Conditional expectation and unbiased sequential estimation. Annals of Mathematical Statistics 18, 105–110.](https://doi.org/10.1214/aoms/1177730497)
- [Halmos, P. R.; Savage, L. J. (1949). Application of the Radon–Nikodym theorem to the theory of sufficient statistics. Annals of Mathematical Statistics 20, 225–241.](https://doi.org/10.1214/aoms/1177730032)
- [Fisher, R. A. (1922). On the mathematical foundations of theoretical statistics. Philosophical Transactions of the Royal Society A 222, 309–368.](https://doi.org/10.1098/rsta.1922.0009)

### A support that does not move gives the Cramér–Rao bound

**Remember:** If the edge of the data moves with θ, Cramér–Rao can fail.

*Rules out counterexamples.* MSC 62B10 (Statistical aspects of information-theoretic topics), 62F10. arXiv stat.TH, math.ST. Level 2: later undergraduate.

**Definition.** A regular model has densities pθ, for θ in an open interval, on one positive support that does not move with θ. The densities are differentiable in θ, and ∫pθ = 1 can be differentiated under the integral sign. Its Fisher information Iθ, the mean square of the score ∂θ log pθ(X), must be positive and finite.

**Problem.** In a regular model, every unbiased estimator T of θ with finite variance has Varθ(T) ≥ 1/Iθ, provided Eθ\[T\] can be differentiated under the integral sign.

**How the definition helps.** Differentiating ∫pθ = 1 gives the score mean zero, and differentiating unbiasedness gives Eθ\[T·score\] = 1 (our own). Cauchy–Schwarz then gives 1 ≤ Varθ(T)Iθ (our own). For the uniform law on \[0, θ\] the support moves, so differentiation adds a boundary term and the bound can fail (our own).

**Wikipedia:** [Fisher information](https://en.wikipedia.org/wiki/Fisher_information), [Cramér–Rao bound](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_bound). It says: “It is easy to find an example of a density that does not satisfy the regularity conditions: The density of a Uniform(0, θ) variable fails to satisfy conditions 1 and 3.”

**Sources:**

- [R. A. Fisher, Theory of Statistical Estimation, Mathematical Proceedings of the Cambridge Philosophical Society 22 (1925)](https://doi.org/10.1017/S0305004100009580)

### Expected log likelihood curvature makes Fisher information add

**Remember:** Log likelihoods add, so their expected curvatures add.

*True by definition.* MSC 62B10 (Statistical aspects of information-theoretic topics), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** For a scalar parameter, Fisher information is the expected downward curvature of the log likelihood, I(θ) = −Eθ\[∂²θ log f(X; θ)\].

**Problem.** For independent observations, Fisher information values add. Assume positive densities on fixed supports, integrable derivatives, and normalization integrals that can be differentiated twice under the integral sign.

**How the definition helps.** Independence makes the joint log likelihood a sum of single log likelihoods, so its second derivative and its expectation are sums too (our own). The regularity conditions make this curvature formula agree with the score-variance formula, so the sum rule holds for both (our own).

**Wikipedia:** [Fisher information](https://en.wikipedia.org/wiki/Fisher_information). It says: “the Fisher information will necessarily be the sum of the single-sample Fisher information values, one for each single sample from its distribution.”

**Sources:**

- [Fisher (1922), On the Mathematical Foundations of Theoretical Statistics](https://doi.org/10.1098/rsta.1922.0009)

### Averaging posterior loss makes Bayes decisions pointwise

**Remember:** Bayes risk is a weighted sum of posterior losses, one per observation.

*True by definition.* MSC 62C10 (Bayesian problems; characterization of Bayes procedures), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Bayes risk averages the loss L(θ, δ(X)) over the prior and the data. Conditioning on X = x writes it as a sum over x of P(X = x) times the posterior expected loss E\[L(θ, δ(x)) ∣ X = x\] (our own).

**Problem.** Suppose observations and actions take finitely many values and all expected losses are finite. Choosing an action of least posterior expected loss at every observation of positive probability minimizes Bayes risk.

**How the definition helps.** Each term of the sum depends only on the action chosen at its own x, and its weight P(X = x) is nonnegative (our own). So minimizing every term separately minimizes the sum (our own).

**Wikipedia:** [Bayes estimator](https://en.wikipedia.org/wiki/Bayes_estimator). It says: “the estimator which minimizes the posterior expected loss E(L(θ, θ̂) \| x) for each x also minimizes the Bayes risk and therefore is a Bayes estimator.”

**Sources:** none listed. No primary source with a working link was found.

### Inverse inclusion weights recover totals

**Remember:** Weight each observation by the inverse of its chance to appear.

*True by definition.* MSC 62D05 (Sampling theory, sample surveys). arXiv stat.ME, stat.AP. Level 2: later undergraduate.

**Definition.** For each sampled member, divide its value by its inclusion probability, its chance of entering the sample, and add the results to estimate the population total. A member that is rarely sampled counts for more when it is sampled.

**Problem.** In a finite population where every inclusion probability is known and positive, this estimate is unbiased for the total. This holds even when members are not selected independently.

**How the definition helps.** Member i contributes yᵢ/πᵢ with probability πᵢ and zero otherwise, so its expected contribution is yᵢ (our own). Summing over members gives the total, and only each member’s own inclusion probability enters, not the joint selection (our own).

**Wikipedia:** [Horvitz–Thompson estimator](https://en.wikipedia.org/wiki/Horvitz%E2%80%93Thompson_estimator). It says: “Taking the expectation of the estimator we can prove it is unbiased as follows:”

**Sources:**

- [D. G. Horvitz and D. J. Thompson, A Generalization of Sampling Without Replacement from a Finite Universe](https://www.tandfonline.com/doi/full/10.1080/01621459.1952.10483446)

### Independent missingness preserves respondent distributions

**Remember:** Missingness that ignores the data leaves a random subsample.

*Rules out counterexamples.* MSC 62D10 (Missing data). arXiv stat.ME, stat.AP. Level 2: later undergraduate.

**Definition.** Data are missing completely at random when whether values are missing is independent of all the data, including the values that would have been recorded.

**Problem.** If complete observation has positive probability, the complete cases have the same distribution as all cases.

**How the definition helps.** The event of complete observation is independent of the data, so conditioning on it changes no data probability (our own). If high earners skip an income question more often, missingness depends on income and respondents underrepresent high earners (our own).

**Wikipedia:** [Missing data](https://en.wikipedia.org/wiki/Missing_data). It says: “the participants with completely observed data are in effect a random sample of all the participants assigned a particular intervention.”

**Sources:**

- [D. B. Rubin, Inference and missing data](https://doi.org/10.1093/biomet/63.3.581)

### Chi-squared ratios give reciprocal F laws and squared t laws

**Remember:** Flip the F ratio or square the t ratio.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60E05. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The F law with degrees of freedom (d₁, d₂) is the law of the ratio (X/d₁)/(Y/d₂) of independent chi-squared variables with those degrees of freedom. Student’s t law with n degrees of freedom is the law of Z/√(V/n), with Z standard normal and V independent chi-squared with n degrees of freedom.

**Problem.** If U has the F law with degrees of freedom (d₁, d₂), then 1/U has the F law with degrees of freedom (d₂, d₁). If T has the t law with n degrees of freedom, then T² has the F law with degrees of freedom (1, n).

**How the definition helps.** Taking the reciprocal of the F ratio swaps the roles of X and Y (our own). Squaring the t ratio gives (Z²/1)/(V/n), and Z² is chi-squared with one degree of freedom and independent of V (our own).

**Wikipedia:** [F-distribution](https://en.wikipedia.org/wiki/F-distribution), [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “If X ∼ F(d₁, d₂) then X⁻¹ ∼ F(d₂, d₁).”

**Sources:** none listed. No primary source with a working link was found.

### Pooling residual directions gives the exact two-sample t law

**Remember:** Pool the squared residuals and count all their directions.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The pooled variance V adds both samples’ squared deviations from their own means and divides the sum by n + m − 2, the total number of residual directions. The pooled standard error is √\[V(1/n + 1/m)\].

**Problem.** Take independent normal samples of sizes n and m, both at least two, with common positive variance. Subtract the true mean difference from the sample difference and divide by the pooled standard error to obtain Student’s t with n+m−2 degrees of freedom.

**How the definition helps.** Divided by the common variance, the two residual sums are independent chi-squared variables with n − 1 and m − 1 degrees of freedom (our own). So their sum is chi-squared with n + m − 2 degrees of freedom (our own). The normal-sample theorem makes the standardized mean difference standard normal and independent of that sum, which gives the defining t ratio (our own).

**Wikipedia:** [Student's t-test](https://en.wikipedia.org/wiki/Student%27s_t-test). It says: “the total sample size minus two (that is, n₁ + n₂ − 2) is the total number of degrees of freedom, which is used in significance testing.”

**Sources:** none listed. No primary source with a working link was found.

### The chi-squared ratio definition gives Student’s t its normal limit

**Remember:** The chi-squared denominator tends to one, leaving the normal numerator.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60F05. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** Student’s t law with ν degrees of freedom is the law of Z/√(V/ν), where Z is standard normal and V is an independent chi-squared variable with ν degrees of freedom. So the denominator is the root of an average of ν squared standard normals.

**Problem.** As the degrees of freedom ν increase without bound, Student’s t law converges in distribution to the standard normal law.

**How the definition helps.** V/ν has mean 1 and variance 2/ν, so it tends to 1 in probability by Chebyshev’s inequality (our own). Slutsky’s theorem then shows that Z/√(V/ν) tends in law to Z (our own).

**Wikipedia:** [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “As the number of degrees of freedom grows, the t distribution approaches the normal distribution with mean 0 and variance 1.”

**Sources:** none listed. No primary source with a working link was found.

### The ratio definition gives the one-sample t law

**Remember:** A normal numerator over an independent chi-squared scale gives Student’s t.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Student’s t with k degrees of freedom is the law of Z/√(V/k), with Z standard normal. Here V is independent of Z and chi-squared with k degrees of freedom, a sum of k squared standard normals.

**Problem.** Take n ≥ 2 independent observations from a normal law with mean μ and variance σ² &gt; 0. With sample mean X̄ and sample standard deviation S of divisor n − 1, √n(X̄ − μ)/S has Student’s t law with n − 1 degrees of freedom.

**How the definition helps.** Write √n(X̄ − μ)/S as Z/√(V/(n − 1)), with Z = √n(X̄ − μ)/σ and V = (n − 1)S²/σ² (our own). The normal-sample theorem makes Z standard normal, V chi-squared with n − 1 degrees of freedom, and the two independent.

**Wikipedia:** [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “it is possible to show that these two random variables (the normally distributed one Z and the chi-squared-distributed one V) are independent.”

**Sources:** none listed. No primary source with a working link was found.

### The sum-of-squares definition makes independent chi-squared variables add

**Remember:** Squares plus squares are still squares, so degrees of freedom add.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60E05. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** For each positive integer k, the chi-squared law with k degrees of freedom is the law of ∑ⱼ Zⱼ² for k independent standard normal variables.

**Problem.** Let X and Y be independent chi-squared variables with positive integer degrees of freedom j and k. Then X + Y is chi-squared with j + k degrees of freedom.

**How the definition helps.** The definition lets us build X and Y from two disjoint blocks of j and k independent standard normals (our own). Independence makes this pair have the law of (X, Y) (our own). Then X + Y is a sum of j + k squared independent standard normals, which is chi-squared with j + k degrees of freedom.

**Wikipedia:** [Chi-squared distribution](https://en.wikipedia.org/wiki/Chi-squared_distribution). It says: “It follows from the definition of the chi-squared distribution that the sum of independent chi-squared variables is also chi-squared distributed.”

**Sources:** none listed. No primary source with a working link was found.

### A boundary null can break the chi-squared likelihood ratio law

**Remember:** A one-sided boundary can erase half of a squared normal statistic.

*Rules out counterexamples.* MSC 62F03 (Parametric hypothesis testing). arXiv math.ST. Level 2: later undergraduate.

**Definition.** The likelihood ratio statistic is twice the gap between the largest log likelihood over the allowed means and the log likelihood at the null mean. A null mean is interior if an open interval around it lies among the allowed means. At a boundary null, the fitted mean can move only one way (our own).

**Problem.** For independent normal observations with one unrestricted mean and known common positive variance, the statistic under a specified null mean has the one-degree chi-squared law. At null mean zero with only nonnegative means allowed, its law instead mixes a point mass at zero and that chi-squared law equally.

**How the definition helps.** With unrestricted means, the fitted mean is the sample mean and the statistic is Z², with Z the standardized sample mean (our own). With nonnegative means and null mean zero, the fitted mean is the larger of zero and the sample mean, so the statistic is max(0, Z)² (our own). Z is negative half the time, independently of Z², which gives the even mixture (our own).

**Wikipedia:** [Wilks' theorem](https://en.wikipedia.org/wiki/Wilks%27_theorem). It says: “The theorem no longer applies when the true value of the parameter is on the boundary of the parameter space”

**Sources:**

- [Wilks (1938), The Large-Sample Distribution of the Likelihood Ratio for Testing Composite Hypotheses](https://doi.org/10.1214/aoms/1177732360)
- [Chernoff (1954), On the Distribution of the Likelihood Ratio](https://doi.org/10.1214/aoms/1177728725)

### A likelihood ratio cutoff makes the most powerful test

**Remember:** Reject where the gain in power beats the cost in false rejections.

*True by definition.* MSC 62F03 (Parametric hypothesis testing). arXiv math.ST. Level 2: later undergraduate.

**Definition.** Let f₀ and f₁ be the data densities under a fixed null and a fixed alternative. For c ≥ 0, the cutoff test rejects where f₁ &gt; cf₀, accepts where f₁ &lt; cf₀, and may randomize on ties. Its size and power are its rejection probabilities under f₀ and f₁.

**Problem.** At size α, the likelihood ratio cutoff test has greatest power among tests of size at most α. If c is positive and ties never occur under either law, the test is unique except on events of probability zero.

**How the definition helps.** At each outcome, the cutoff rule rejects exactly where f₁ − cf₀ is positive, so it maximizes power minus c times size among all tests (our own). Choosing c and the tie probability to give size α, no test of size at most α has more power. With c &gt; 0 and no ties, a test that differs on a set of positive probability strictly lowers power minus c times size (our own).

**Wikipedia:** [Neyman–Pearson lemma](https://en.wikipedia.org/wiki/Neyman%E2%80%93Pearson_lemma). It says: “then it is a uniformly most powerful (UMP) test in the set of level α tests.”

**Sources:**

- [Neyman and Pearson (1933), On the Problem of the Most Efficient Tests of Statistical Hypotheses](https://doi.org/10.1098/rsta.1933.0009)

### An exponential family orders likelihood ratios by its natural statistic

**Remember:** The parameter multiplies T, so likelihood ratios grow along T.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62E10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A one-parameter exponential family in natural form has density h(x) exp\[ηT(x) − A(η)\], so η enters the exponent only as a multiple of the summary T(x).

**Problem.** Where h(x) is positive, the density at η₁ divided by the density at η₀ increases with T(x) whenever η₁ exceeds η₀.

**How the definition helps.** The log of the density ratio is (η₁ − η₀)T(x) plus a constant, which increases with T(x) when η₁ &gt; η₀ (our own). Exponentiation preserves this order (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “A one-parameter exponential family has a monotone non-decreasing likelihood ratio in the sufficient statistic T(x)”

**Sources:** none listed. No primary source with a working link was found.

### Fixing the margins makes Fisher’s exact test independent of nuisance probabilities

**Remember:** Fix the margins, and the common success probability drops out.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62B05. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Fisher’s upper-tail test, for two groups of fixed sizes, conditions on the total number of successes. Under the null, that total makes every placement of the successes among the trials equally likely, whatever the common success probability (our own). It rejects when the conditional chance of at least the first group’s observed count is at most the chosen level (our own).

**Problem.** For independent trials with the same success probability, conditioning on total successes gives the first group’s count the hypergeometric law of sampling without replacement. An upper-tail Fisher test therefore controls its false rejection probability at the chosen level.

**How the definition helps.** Counting equally likely placements gives the hypergeometric law, which is free of the success probability. The conditional false rejection probability is then at most the level for every total, so the overall one is too (our own).

**Wikipedia:** [Fisher's exact test](https://en.wikipedia.org/wiki/Fisher%27s_exact_test). It says: “Fisher showed that conditional on the margins of the table, a is distributed as a hypergeometric distribution”

**Sources:** none listed. No primary source with a working link was found.

### Profiling the variance makes the regression likelihood ratio an F test

**Remember:** The two tests rank the same improvement in residual squared error.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62J10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Maximizing a Gaussian regression likelihood over the coefficients and the error variance leaves a constant times the residual sum of squares to the power −n/2 (our own). Partial F divides the drop in residual sum of squares per added direction by the larger model’s residual sum of squares per residual direction.

**Problem.** Take two nested linear models with fixed predictor spaces of dimensions p &lt; q &lt; n for n observations. With independent normal errors of common positive variance and positive residual error, likelihood ratio tests reject for large partial F.

**How the definition helps.** The null-to-full likelihood ratio is then the full model’s residual sum of squares over the null model’s, to the power n/2 (our own). Partial F increases with the inverse of that ratio, so a smaller likelihood ratio means a larger partial F (our own).

**Wikipedia:** [F-test](https://en.wikipedia.org/wiki/F-test). It says: “Since F is a monotone function of the likelihood ratio statistic, the F-test is a likelihood ratio test.”

**Sources:** none listed. No primary source with a working link was found.

### Randomizing at the cutoff makes every test size attainable

**Remember:** Randomize on the tie to hit the target size.

*Rules out counterexamples. Confidence: medium.* MSC 62F03 (Parametric hypothesis testing). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A randomized cutoff test rejects above the cutoff c, accepts below it, and at c rejects with a chosen probability between zero and one. Its size is its rejection probability under the null. As that probability runs from zero to one, the size runs from P(statistic &gt; c) to P(statistic ≥ c) (our own).

**Problem.** For a fixed null law on finitely many outcomes, a test that rejects large statistic values can attain any size from zero to one.

**How the definition helps.** Every target size lies between P(statistic &gt; c) and P(statistic ≥ c) for some cutoff c, so a suitable tie probability attains it (our own). For one fair coin toss, a deterministic test attains only sizes zero, one half and one (our own).

**Wikipedia:** [Randomised decision rule](https://en.wikipedia.org/wiki/Randomised_decision_rule). It says: “A statistical test making use of a randomized decision rule is called a randomized test.”

**Sources:** none listed. No primary source with a working link was found.

### Total variation gives the smallest sum of testing errors

**Remember:** The two errors sum to one minus the rejection gain.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62B10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The total variation distance between laws P₀ and P₁ is the largest value of \|P₁(A) − P₀(A)\| over events A. For a test that rejects on A, the two error probabilities sum to 1 − (P₁(A) − P₀(A)) (our own).

**Problem.** Suppose each hypothesis specifies one probability law. The smallest sum of the two error probabilities, rejecting a true null and accepting a false null, equals one minus total variation distance.

**How the definition helps.** Minimizing the error sum means maximizing P₁(A) − P₀(A), and passing to complements shows that this largest gain equals the largest absolute difference (our own). The region where the density of P₁ exceeds that of P₀ attains it (our own).

**Paper or page:** [Detecting weighted hidden cliques](https://arxiv.org/abs/2506.21543v1). It says: “R(T⋆) = 1 − dₜᵥ(ℙ₀, ℙ₁) = 1 − ½𝔼₀\[\|L(X) − 1\|\]”

**Sources:** none listed. No primary source with a working link was found.

### Gaussian log likelihood turns regression into least squares

**Remember:** Taking logs exposes the squared residuals in the Gaussian density.

*True by definition.* MSC 62F10 (Point estimation), 62J05. arXiv math.ST. Level 2: later undergraduate.

**Definition.** In Gaussian linear regression, the observations have independent normal errors with a common variance σ². So the log likelihood is a constant minus the sum of squared residuals divided by 2σ².

**Problem.** With fixed predictors and a fixed positive error variance, the maximum likelihood coefficient vectors are exactly the least squares coefficient vectors.

**How the definition helps.** For fixed σ², the constant does not depend on the coefficients and 1/(2σ²) is positive (our own). So maximizing the log likelihood is the same as minimizing the sum of squared residuals (our own).

**Wikipedia:** [Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation). It says: “the ordinary least squares estimator for a linear regression model maximizes the likelihood when the random errors are assumed to have normal distributions with the same variance.”

**Sources:** none listed. No primary source with a working link was found.

### Including certain outcomes makes every Bernoulli estimate attainable

**Remember:** All successes need a model that allows certain success.

*Rules out counterexamples. Confidence: medium.* MSC 62F10 (Point estimation). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A Bernoulli model gives probability p to success and 1 − p to failure, with p allowed in the closed interval \[0, 1\], so certain success and certain failure are included.

**Problem.** For a nonempty sample of independent Bernoulli trials with common parameter p, the observed success fraction maximizes likelihood even when all outcomes agree.

**How the definition helps.** The likelihood pᵏ(1 − p)ⁿ⁻ᵏ for k successes in n trials is largest at p = k/n (our own). If all outcomes agree, that point is 0 or 1, which the closed interval contains (our own). With only finite log odds, so 0 &lt; p &lt; 1, all successes would give a supremum but no maximum (our own).

**Wikipedia:** [Bernoulli distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution). It says: “0 ≤ p ≤ 1”

**Sources:** none listed. No primary source with a working link was found.

### Median unbiasedness survives reparameterization

**Remember:** A monotone map may swap the tails but keeps their probabilities.

*True by definition.* MSC 62F10 (Point estimation). arXiv stat.TH. Level 2: later undergraduate.

**Definition.** An estimator T is median-unbiased if, for every true value θ, both Pθ(T ≤ θ) and Pθ(T ≥ θ) are at least one half.

**Problem.** A strictly monotone transformation of a median-unbiased real estimate is median-unbiased for the transformed parameter.

**How the definition helps.** A strictly increasing transformation preserves both inequalities, and a strictly decreasing transformation exchanges them (our own). Either way, both probabilities still meet the required bound (our own).

**Wikipedia:** [Median](https://en.wikipedia.org/wiki/Median). It says: “and has the additional property that it is invariant under one-to-one transformation.”

**Sources:** none listed. No primary source with a working link was found.

### The natural parameter makes maximum likelihood match the observed mean

**Remember:** The best fit makes the model’s average agree with the observed average.

*True by definition.* MSC 62F10 (Point estimation), 62E10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** An exponential family in natural form has density h(x) exp\[ηT(x) − A(η)\], where the normalizer A has derivative Eη\[T\] and second derivative Varη(T) ≥ 0 (our own).

**Problem.** Take independent observations from one family member, all in its support, and let η range over an open interval. A parameter value maximizes likelihood exactly when its expected T equals the observed average of T.

**How the definition helps.** The sample log likelihood is η∑T(xᵢ) − nA(η) plus a constant, so its derivative is ∑T(xᵢ) − nEη\[T\] (our own). Since the second derivative of A is nonnegative, the log likelihood is concave, so a zero derivative is exactly a maximum (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “f<sub>X</sub>{\\!(x\\mid\\theta)} = h(x) \\exp\\left\[\\theta \\cdot T(x) - A(\\theta)\\right\]”

**Sources:**

- [Murphy (2012), Machine Learning: A Probabilistic Perspective, section 9.2](https://www.mit.edu/~mcusi/reverb/Machine_Learning-_A_Probabilistic_Perspective.pdf)

### The score identifies when an estimator reaches the information bound

**Remember:** The bound is tight when the error points exactly along the score.

*True by definition.* MSC 62F10 (Point estimation), 62B10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The score is the derivative of the log density in a scalar parameter. A regular model has fixed support and allows differentiation under the integrals for total probability and the estimator’s mean. There the score has mean zero and variance equal to the Fisher information I, and an unbiased estimator has covariance one with it (our own).

**Problem.** In a regular model, let an unbiased estimator have finite variance and let I be finite and positive. Its variance equals 1/I exactly when its error equals the score divided by I with probability one.

**How the definition helps.** Cauchy–Schwarz on that covariance gives variance at least 1/I, with equality exactly when the error is a fixed multiple of the score with probability one (our own). Covariance one fixes the multiple at 1/I (our own).

**Wikipedia:** [Cramér–Rao bound](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_bound). It says: “If we consider the covariance cov(V, T) of V and T, we have cov(V, T) = E(VT), because E(V) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping the parameter values a test does not reject gives coverage

**Remember:** An excluded value is a rejected null hypothesis.

*True by definition.* MSC 62F25 (Parametric tolerance and confidence regions), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The confidence set from a family of tests keeps every parameter value whose test of “this value is true” does not reject. So the set misses the true value exactly when the true value’s own test rejects.

**Problem.** If each test rejects its own true value with probability at most α, the resulting confidence set covers the truth with probability at least 1−α. Conversely, rejecting each value outside a set with that coverage gives tests with false rejection probability at most α.

**How the definition helps.** Coverage fails on exactly the event that the test of the true value rejects, which has probability at most α (our own). For the converse, the test that rejects values outside the set rejects the truth exactly when the set misses it (our own).

**Wikipedia:** [Binomial proportion confidence interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval). It says: “these intervals may be employed as significance tests, with identical results to the source test”

**Sources:**

- [Neyman (1937), Outline of a Theory of Statistical Estimation Based on the Classical Theory of Probability](https://doi.org/10.1098/rsta.1937.0005)
- [Casella and Berger (2002), Statistical Inference, second edition, Theorem 9.2.2](https://pages.stat.wisc.edu/~shao/stat610/Casella_Berger_Statistical_Inference.pdf)

### Pivot inversion gives exact coverage

**Remember:** One fixed law for the pivot gives one coverage everywhere.

*True by definition.* MSC 62F25 (Parametric tolerance and confidence regions). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A pivot is a function of data and parameter whose law is the same for every parameter value. The confidence set keeps every parameter value that puts the observed pivot in a fixed acceptance region. It covers the true parameter exactly when the pivot at that parameter lands in the region.

**Problem.** If the acceptance region has pivot probability 1 − α, the resulting confidence set covers the true parameter with probability 1 − α.

**How the definition helps.** Coverage is the event that the pivot lands in the region, which has probability 1 − α under the common law at every parameter value (our own). The remaining work is finding a pivot and its law.

**Wikipedia:** [Pivotal quantity](https://en.wikipedia.org/wiki/Pivotal_quantity). It says: “A pivot need not be a statistic — the function and its value can depend on the parameters of the model, but its distribution must not.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform order statistics turn binomial tail cutoffs into beta quantiles

**Remember:** Binomial tails count how many uniform draws pass a cutoff.

*True by definition.* MSC 62F25 (Parametric tolerance and confidence regions), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** For positive integers a and b, Beta(a, b) is the law of the ath smallest of a + b − 1 independent uniform draws on \[0, 1\]. The kth smallest draw is at most p exactly when at least k draws are at most p, a binomial tail event (our own).

**Problem.** Observe k successes in n independent Bernoulli trials with common success probability, where 0 &lt; k &lt; n and 0 &lt; α &lt; 1. The equal-tailed Clopper–Pearson interval uses the α/2 quantile of Beta(k,n−k+1) below and the 1−α/2 quantile of Beta(k+1,n−k) above.

**How the definition helps.** The Clopper–Pearson endpoints solve the binomial tail equations P(at least k successes) = α/2 and P(at most k successes) = α/2 (our own). The definition turns each tail into a beta cumulative probability, which gives the stated quantiles (our own).

**Wikipedia:** [Order statistic](https://en.wikipedia.org/wiki/Order_statistic). It says: “the kth order statistic of the uniform distribution is a beta-distributed random variable.”

**Paper or page:** [Unbiased Statistical Estimation and Valid Confidence Intervals Under Differential Privacy](https://arxiv.org/abs/2110.14465v2). It says: “\\Pr \\left( F<sub>B(c,n-c+1)</sub><sup>-1</sup> (\\alpha ) \\leq p \\right) \\geq 1 - \\alpha”

**Sources:**

- [Clopper and Pearson (1934), The Use of Confidence or Fiducial Limits Illustrated in the Case of the Binomial](https://doi.org/10.1093/biomet/26.4.404)

### Distinct tuples give unbiased averages

**Remember:** Use each observation only once per tuple.

*Rules out counterexamples.* MSC 62G05 (Nonparametric estimation). arXiv stat.TH. Level 2: later undergraduate.

**Definition.** A U-statistic estimates the mean of a symmetric function of k independent draws by averaging that function over all sets of k distinct sample indices. Each term then uses k different observations, so it has exactly the target mean (our own).

**Problem.** For an independent and identically distributed sample of size at least k, the resulting U-statistic is unbiased whenever the function has finite mean.

**How the definition helps.** Distinct indices give each term the target mean, so their average has it too (our own). For two observations of variance σ² &gt; 0, averaging ½(Xᵢ − Xⱼ)² over all four ordered pairs gives mean σ²/2, because two pairs repeat an index (our own).

**Wikipedia:** [U-statistic](https://en.wikipedia.org/wiki/U-statistic). It says: “a U-statistic is a class of statistics defined as the average over the application of a given function applied to all tuples of a fixed size.”

**Sources:** none listed. No primary source with a working link was found.

### Empirical measures give bootstrap variance

**Remember:** Replace the population law with the observed frequencies.

*True by definition. Confidence: medium.* MSC 62G09 (Nonparametric statistical resampling methods). arXiv stat.ME. Level 2: later undergraduate.

**Definition.** The empirical distribution gives mass 1/n to each of the n observations, counting repeats. A bootstrap sample is n independent draws from it, so each draw has the observed mean squared deviation from the average as its variance (our own).

**Problem.** Given n real observations, the variance of the bootstrap mean equals their mean squared deviation from their average, divided by n.

**How the definition helps.** The bootstrap mean averages n independent draws from the empirical distribution, so its variance is one draw’s variance divided by n (our own). That one-draw variance uses the divisor n because each observation has mass 1/n (our own).

**nLab:** [empirical distribution](https://ncatlab.org/nlab/show/empirical+distribution). It says: “The empirical distribution of a finite sequence (x₁, …, xₙ) ∈ Xᴺ is the probability measure on X given by”

**Sources:** none listed. No primary source with a working link was found.

### Counting originals validates permutation tests

**Remember:** Rank the observation together with the simulations.

*Rules out counterexamples.* MSC 62G10 (Nonparametric hypothesis testing). arXiv stat.ME. Level 2: later undergraduate.

**Definition.** Compute the observed score and one score per simulation. The p-value is the fraction of all these scores, the observed one included, that are at least as large as the observed score. So p is the observed score’s rank from the top, divided by the number of scores (our own).

**Problem.** Suppose that, under the hypothesis being tested, permuting the scores leaves their joint distribution unchanged. Then rejecting when p ≤ α has probability at most α for 0 ≤ α ≤ 1.

**How the definition helps.** Unchanged joint law under permutations makes every rank of the observed score equally likely, so p ≤ α has probability at most α (our own). Counting ties gives the largest rank in each tied group, which can only raise p. With one simulation and distinct scores, leaving out the observed score gives p = 0 half the time (our own).

**Paper or page:** [Differentially Private Permutation Tests: Applications to Kernel Methods](https://arxiv.org/abs/2310.19043v2). It says: “Suppose that X₁, …, Xₙ, Xₙ₊₁ are exchangeable random variables.”

**Sources:**

- [Differentially Private Permutation Tests: Applications to Kernel Methods](https://arxiv.org/abs/2310.19043v2)
- [Phipson and Smyth (2010), Permutation P-values Should Never Be Zero: Calculating Exact P-values When Permutations Are Randomly Drawn](https://doi.org/10.2202/1544-6115.1585)

### The largest minimizer of check loss is a sample quantile

**Remember:** Weight the two slopes so they balance at the quantile.

*True by definition.* MSC 62G30 (Order statistics; empirical distribution functions), 62G08. arXiv cs.LG, stat.TH. Level 2: later undergraduate.

**Definition.** For 0 &lt; q &lt; 1, check loss at threshold t charges q(x − t) for each observation x ≥ t and (1 − q)(t − x) for each x &lt; t. So raising t lowers the total at rate q per point above t and raises it at rate 1 − q per point below (our own).

**Problem.** For a nonempty finite sample and 0 &lt; q &lt; 1, the largest minimizer of total check loss is a sample q-quantile.

**How the definition helps.** Total check loss is convex, so at a minimizer the left slope is nonpositive and the right slope is nonnegative (our own). Divided by n, these slopes are the fraction below t minus q and the fraction at or below t minus q, which are the two quantile inequalities (our own).

**Paper or page:** [Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage](https://arxiv.org/abs/2502.17264v2). It says: “Then, the largest θ\* ∈ ℝ such that θ\* ∈ argmin<sub>θ ∈ ℝ</sub> Σ<sub>i ∈ \[n\]</sub> ℓ\_α(θ, sᵢ) is a (1−α)-quantile of {sᵢ}<sub>i ∈ \[n\]</sub>.”

**Sources:**

- [Konstantina Bairaktari, Jiayun Wu, Zhiwei Steven Wu, Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage, arXiv:2502.17264v2 (2025)](https://arxiv.org/abs/2502.17264v2)
- [Roger Koenker, Gilbert Bassett, Regression Quantiles, Econometrica 46(1), 33 (1978)](https://doi.org/10.2307/1913643)

### Normalized gamma variables make Dirichlet laws closed under merging coordinates

**Remember:** Add the gamma variables first, then divide by the same total.

*True by definition.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas), 62E15. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** Take independent gamma variables Y₁, …, Yₖ with positive shapes α₁, …, αₖ and common scale 1. The Dirichlet law with these parameters is the distribution of (Y₁/S, …, Yₖ/S), where S is their sum.

**Problem.** For a Dirichlet vector with at least three coordinates, merge two distinct coordinates Xᵢ and Xⱼ by summing them. The result is Dirichlet, with their two shape parameters replaced by αᵢ + αⱼ.

**How the definition helps.** Merging Xᵢ and Xⱼ gives (Yᵢ + Yⱼ)/S, with the same total S (our own). A sum of independent gamma variables with scale 1 is gamma with the added shape (our own). It stays independent of the other Y’s, so the merged vector is Dirichlet (our own).

**Wikipedia:** [Dirichlet distribution](https://en.wikipedia.org/wiki/Dirichlet_distribution). It says: “This aggregation property may be used to derive the marginal distribution of Xᵢ mentioned above.”

**Sources:** none listed. No primary source with a working link was found.

### An orthogonal fit gives the least variable linear unbiased estimate

**Remember:** Extra unbiased weights are perpendicular, so they only add variance.

*True by definition.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The least squares fit projects the response onto the span of the predictor columns, leaving an error vector perpendicular to that span. So each least squares estimate of a coefficient combination is the response dotted with a weight vector that lies in the predictor span (our own).

**Problem.** Take fixed, linearly independent predictor columns and uncorrelated, zero-mean errors of common variance. For each linear combination of coefficients, least squares has minimum variance among linear unbiased estimators.

**How the definition helps.** Any other linear unbiased estimate of the same combination uses those weights plus extra weights perpendicular to the predictor span (our own). With uncorrelated errors of common variance σ², the variance is σ² times the squared length of the weights (our own). Pythagoras shows that perpendicular extra weights can only add length (our own).

**Wikipedia:** [Gauss–Markov theorem](https://en.wikipedia.org/wiki/Gauss%E2%80%93Markov_theorem). It says: “The main idea of the proof is that the least-squares estimator is uncorrelated with every linear unbiased estimator of zero”

**Sources:** none listed. No primary source with a working link was found.

### Counting residual directions gives an unbiased estimate of error variance

**Remember:** Count one copy of the variance for each residual direction.

*True by definition. Confidence: medium.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The residual degrees of freedom n − p count the directions perpendicular to the predictor span of dimension p. The residual is the error’s part in those directions, so its squared length is a sum of n − p squared coordinates in an orthonormal basis.

**Problem.** In a fixed design, suppose the mean response lies in the predictor span of dimension p &lt; n, where n counts observations. With uncorrelated errors of common variance, dividing the residual sum of squares by n − p estimates that variance without bias.

**How the definition helps.** Each perpendicular unit direction carries one copy of the error variance in expectation, because the errors are uncorrelated with common variance (our own). Summing over the n − p directions gives the expected residual sum of squares, so n − p is the right divisor (our own).

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “The denominator, n−p, is the statistical degrees of freedom.”

**Sources:** none listed. No primary source with a working link was found.

### Least squares predictions stay unique

**Remember:** Several coefficient vectors can describe the same closest point.

*Makes the theorem clean to state or prove.* MSC 62J05 (Linear regression; mixed models). arXiv math.ST. Level 2: later undergraduate.

**Definition.** The least squares fit is the point of the span of the predictor columns that is closest to the response in Euclidean distance. It is a vector of predictions, not a choice of coefficients.

**Problem.** The least squares fitted values are unique even when the predictor columns are linearly dependent.

**How the definition helps.** A subspace has exactly one closest point to a given vector, by the orthogonal projection theorem. With duplicate columns, the same total coefficient can be split between them arbitrarily, so the coefficients are not unique but the fitted values are (our own).

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “When there is perfect multicollinearity, it is no longer possible to obtain unique estimates for the coefficients of the related regressors”

**Sources:** none listed. No primary source with a working link was found.

### Projecting out other predictors preserves the selected regression coefficient

**Remember:** Remove the other predictors from both sides before fitting the slope.

*True by definition.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** To remove the other predictors from a variable, replace it by its least squares residual on them, the part perpendicular to their span. Do this for the response and for the selected predictor.

**Problem.** For linearly independent predictor columns, the selected coefficient equals the slope from fitting the response residual to the predictor residual through the origin (our own).

**How the definition helps.** The selected predictor’s residual is perpendicular to every other predictor and to the full fit’s residual, so projecting the response onto it sees only the selected coefficient (our own). That projection is the slope through the origin, which therefore equals the selected coefficient (our own).

**Paper or page:** [A First Course in Causal Inference](https://arxiv.org/abs/2305.18793v2). It says: “The coefficient of x₁ in the OLS fit of y on (x₁, x₂, …, xₚ) equals the coefficient of x̃₁ in the OLS fit of y or ỹ on x̃₁”

**Sources:**

- [Frisch and Waugh (1933), Partial Time Regressions as Compared with Individual Trends](https://doi.org/10.2307/1907330)
- [Lovell (1963), Seasonal Adjustment of Economic Time Series and Multiple Regression Analysis](https://doi.org/10.1080/01621459.1963.10480682)

### Rescaling the errors turns generalized least squares into ordinary least squares

**Remember:** Change coordinates so the errors have equal variance and no correlation.

*True by definition.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Generalized least squares, for errors with a known positive definite covariance matrix Ω, minimizes rᵀΩ⁻¹r for the residual vector r instead of rᵀr. If Ω = CCᵀ with C invertible, this weighted length is the ordinary squared length of C⁻¹r (our own).

**Problem.** Take a square factor C with Ω = CCᵀ, so C is invertible. Multiplying the response and every predictor by C⁻¹ gives an ordinary least squares problem with the same solutions and errors of identity covariance.

**How the definition helps.** So the generalized problem is ordinary least squares for the response and predictors multiplied by C⁻¹ (our own). The transformed errors C⁻¹ε have covariance C⁻¹ΩC⁻ᵀ = I (our own).

**Wikipedia:** [Generalized least squares](https://en.wikipedia.org/wiki/Generalized_least_squares). It says: “GLS is equivalent to applying ordinary least squares (OLS) to a linearly transformed version of the data.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct test rates identify prevalence

**Remember:** Invert the line from prevalence to positive rate.

*Rules out counterexamples.* MSC 62P10 (Applications of statistics to biology and medical sciences; meta analysis). arXiv stat.AP, stat.ME. Level 2: later undergraduate.

**Definition.** A reading falls in a chosen set with known chance p for diseased people and h for healthy people, where p ≠ h. At prevalence q, this chance is r = h + (p − h)q (our own). The prevalence estimate (observed fraction in the set − h)/(p − h) inverts that line.

**Problem.** For independent readings from one population, this estimate is unbiased for the fraction of people with the disease. Its mean squared error tends to zero as the sample grows.

**How the definition helps.** The observed fraction has mean r, so the estimate has mean q, and its variance r(1 − r)/(n(p − h)²) tends to zero (our own). If p = h, then r does not change with q, so the readings say nothing about prevalence (our own).

**Paper or page:** [Analysis of Diagnostics (Part I): Prevalence, Uncertainty Quantification, and Machine Learning](https://arxiv.org/abs/2309.00645v2). It says: “is an unbiased estimate of q that converges in mean-square as s → ∞”

**Sources:**

- [Analysis of Diagnostics (Part I): Prevalence, Uncertainty Quantification, and Machine Learning (arXiv 2309.00645v2)](https://arxiv.org/abs/2309.00645v2)

### Bayesian sufficiency lets Bayes estimates use only the statistic

**Remember:** Same posterior from T as from the data, so same best choices.

*True by definition. Confidence: medium.* MSC 62B05 (Sufficient statistics and fields), 62F15. arXiv math.ST. Level 3: graduate.

**Definition.** A statistic T is Bayesian sufficient if, for every prior on θ, the posterior given the data equals the posterior given T almost surely.

**Problem.** For a fixed loss function, the choices that minimize posterior expected loss depend on the data only through T. If a measurable minimizing choice exists based on T, it is also a Bayes rule based on the full data.

**How the definition helps.** Equal posteriors give each choice the same posterior expected loss, whether we condition on the data or on T (our own). So the minimizing choices depend on the data only through T, and a minimizer based on T is a Bayes rule (our own). In dominated models, classical sufficiency implies Bayesian sufficiency, because the data-only factor cancels when the posterior is normalized (our own).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “It turns out that this "Bayesian sufficiency" is a consequence of the formulation above”

**Sources:** none listed. No primary source with a working link was found.

### Completeness lets Basu prove independence from ancillary statistics

**Remember:** Complete sufficient statistics are independent of anything whose law never changes.

*Rules out counterexamples.* MSC 62B05 (Sufficient statistics and fields). arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** A sufficient statistic T, one given which the data have the same law for all θ, is boundedly complete under this condition: every bounded g with Eθ\[g(T)\] = 0 for all θ has g(T) = 0 almost surely under every θ. An ancillary statistic has the same law under every θ.

**Problem.** A boundedly complete sufficient statistic is independent of every ancillary statistic. For example, the mean and variance of a normal sample are independent.

**How the definition helps.** For an ancillary event A, sufficiency makes Pθ(A ∣ T) − Pθ(A) one bounded function of T with mean zero, so completeness gives independence (our own). For a normal sample of fixed variance, the sample mean is complete sufficient and the sample variance is ancillary (our own). For uniform draws on \[0, θ\], the extrema are sufficient but not complete, and their nonconstant ratio is ancillary for samples larger than one (our own).

**Wikipedia:** [Basu's theorem](https://en.wikipedia.org/wiki/Basu%27s_theorem), [Completeness (statistics)](https://en.wikipedia.org/wiki/Completeness_%28statistics%29), [Ancillary statistic](https://en.wikipedia.org/wiki/Ancillary_statistic). It says: “Basu's theorem states that any boundedly complete and sufficient statistic is independent of any ancillary statistic.”

**Sources:**

- [D. Basu, On Statistics Independent of a Complete Sufficient Statistic, Sankhyā 15 (1955) 377–380](https://doi.org/10.1007/978-1-4419-5825-9_14)

### Exchangeability makes the sorted sample sufficient, even when values repeat

**Remember:** Exchangeability leaves no information in the order the values arrived.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62G30, 60G09. arXiv math.ST, math.PR. Level 3: graduate.

**Definition.** Random variables X₁, …, Xₙ are exchangeable if every reordering of them has the same joint law, so the law cannot favour one order of the observed values over another.

**Problem.** For any exchangeable real random vector X, the conditional law of X given its order statistics does not depend on the law of X. Given the sorted values, X is a uniformly random reordering of them (Corollary 1).

**How the definition helps.** Exchangeability gives the conditional law by averaging over permutations (Theorem 1). Given the sorted sample, the conditional expectation of each bounded measurable g(X) is its average over all n! reorderings. Repeated values only repeat terms in that average, which still gives one conditional law for every exchangeable law (our own).

**Paper or page:** [Order statistics from exchangeable random variables are always sufficient](https://arxiv.org/abs/2206.00044v1). It says: “We show that the conditional distribution of (X₁,…,Xₙ) given (Y₁,…,Yₙ) does not depend on F.”

**Sources:**

- [Nickos Papadatos, Order statistics from exchangeable random variables are always sufficient, arXiv:2206.00044v1 (2022)](https://arxiv.org/abs/2206.00044v1)

### Factorized likelihood makes maximizers depend only on the sufficient statistic

**Remember:** A positive factor independent of the parameter cannot move the maximum.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 3: graduate.

**Definition.** In a model with densities relative to one measure, T is sufficient when the density factors as f(x; θ) = h(x)·g(θ, T(x)), with h and g nonnegative and h free of θ. By the Fisher–Neyman theorem, this agrees with the conditional-law definition.

**Problem.** For data x with h(x) &gt; 0, the set of parameters that maximize the likelihood depends only on T(x). If there is just one maximizer, it is a function of T(x).

**How the definition helps.** For fixed x with h(x) &gt; 0, maximizing f(x; θ) over θ is the same as maximizing g(θ, T(x)) (our own). That set of maximizers depends on x only through T(x).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “From this factorization, it can easily be seen that the maximum likelihood estimate of θ will interact with X only through T(X).”

**Sources:**

- [P. R. Halmos and L. J. Savage, Application of the Radon–Nikodym theorem to the theory of sufficient statistics, Annals of Mathematical Statistics 20 (1949) 225–241](https://doi.org/10.1214/aoms/1177730032)

### Likelihood ratios give minimal sufficiency

**Remember:** Keep relative likelihoods and drop the scale shared by all parameter values.

*True by definition.* MSC 62B05 (Sufficient statistics and fields). arXiv stat.TH. Level 3: graduate.

**Definition.** For a finite family of strictly positive densities f₀, …, fₖ relative to one measure, the likelihood ratio vector at x has entries fᵢ(x)/f₀(x) for i = 1, …, k. It keeps the relative likelihoods and drops the common scale f₀(x) (our own).

**Problem.** The likelihood ratio vector is minimal sufficient. That is, it is sufficient, and every other sufficient statistic determines it apart from events of probability zero.

**How the definition helps.** Each density is f₀(x) times its ratio, so the factorization theorem makes the ratio vector sufficient (our own). Any sufficient statistic S gives fᵢ = h·gᵢ(S), so each ratio gᵢ(S)/g₀(S) is a function of S almost surely (our own).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “The collection of likelihood ratios {L(X ∣ θᵢ)/L(X ∣ θ₀)} for i = 1,…,k, is a minimal sufficient statistic if the parameter space is discrete {θ₀,…,θₖ}.”

**Sources:** none listed. No primary source with a working link was found.

### Square-root densities give Hellinger distance its triangle inequality

**Remember:** Apply the norm triangle inequality to the square roots of the densities.

*True by definition. Confidence: medium.* MSC 62B10 (Statistical aspects of information-theoretic topics), 60B10. arXiv math.ST, math.PR. Level 3: graduate.

**Definition.** Choose densities p and q of P and Q relative to a common reference measure. The Hellinger distance is H(P, Q) = ‖√p − √q‖₂/√2, the L² distance between the square roots of the densities, scaled by 1/√2.

**Problem.** Hellinger distance is a metric on probability measures on the same measurable space. Its values lie between 0 and 1.

**How the definition helps.** Over one reference measure such as P + Q + R, H is a scaled L² distance, so it inherits the norm’s triangle inequality (our own). Expanding the square gives H² = 1 − ∫√(pq), which lies between 0 and 1 (our own). A change of densities shows that H does not depend on the reference measure (our own).

**Wikipedia:** [Hellinger distance](https://en.wikipedia.org/wiki/Hellinger_distance). It says: “The Hellinger distance forms a bounded metric on the space of probability distributions over a given probability space.”

**Sources:** none listed. No primary source with a working link was found.

### A channel is more informative exactly when the other is its garbling

**Remember:** A better signal can always imitate a noisier one.

*Makes the theorem clean to state or prove.* MSC 62B15 (Theory of statistical experiments), 62C05. arXiv math.OC, math.ST. Level 3: graduate.

**Definition.** An observation channel gives, for each hidden state, a probability distribution on signals. Q₂ is a garbling of Q₁ if Q₂ comes from passing the signal of Q₁ through a second random map that does not see the state.

**Problem.** For finite state and signal spaces, Q₂ is a garbling of Q₁ exactly when Q₁ performs at least as well in every finite-action decision problem.

**How the definition helps.** A decision maker who sees Q₁ can apply the garbling and then copy any decision rule for Q₂, so Q₁ does at least as well (our own). Blackwell’s converse uses convex separation to find one garbling that works for every state (our own).

**Paper or page:** [Zero-Sum Games involving Teams against Teams: Existence of Equilibria, and Comparison and Regularity in Information](https://arxiv.org/abs/2206.12048v1). It says: “The information structure induced by channel Q₁ is more informative than the one induced by channel Q₂ for all single player decision problems with finite 𝕌.”

**Sources:**

- [Ian Hogeboom-Burr, Serdar Yüksel, Zero-Sum Games involving Teams against Teams: Existence of Equilibria, and Comparison and Regularity in Information, arXiv:2206.12048v1 (2022)](https://arxiv.org/abs/2206.12048v1)
- [David Blackwell, Equivalent Comparisons of Experiments, The Annals of Mathematical Statistics (1953)](https://doi.org/10.1214/aoms/1177729032)

### Identifiability is the condition that lets maximum likelihood be consistent

**Remember:** If two parameters look the same, no data can tell them apart.

*Rules out counterexamples.* MSC 62B15 (Theory of statistical experiments), 62F12. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** A statistical model is identifiable when different parameter values give different laws of the data, so the map from θ to its law is one-to-one. Then every wrong parameter has positive Kullback–Leibler divergence from the true law (our own).

**Problem.** Suppose an identifiable model has a compact metric parameter space, and the expected log likelihood under the true law is finite and continuous. If the average log likelihood converges to it uniformly in probability, every maximum likelihood estimator converges in probability to the true parameter.

**How the definition helps.** The expected log likelihood falls below its value at the truth by the Kullback–Leibler divergence, which identifiability makes positive at every other parameter (our own). Compactness and continuity give a positive gap outside each neighbourhood of the truth, and uniform convergence keeps that gap with probability tending to one (our own). If a normal mean is a + b, all pairs with the same sum give one law, so no estimator recovers the pair (our own).

**Wikipedia:** [Identifiability](https://en.wikipedia.org/wiki/Identifiability), [Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation). It says: “The identification condition is absolutely necessary for the ML estimator to be consistent. When this condition holds, the limiting likelihood function ℓ(θ\|·) has unique global maximum at θ₀.”

**Sources:**

- [A. Wald, Note on the Consistency of the Maximum Likelihood Estimate, Annals of Mathematical Statistics 20 (1949)](https://doi.org/10.1214/aoms/1177729952)

### Supporting planes of convex functions give proper scores

**Remember:** The plane at your forecast stays below the function at the truth.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory), 91B06. arXiv stat.TH, econ.TH. Level 3: graduate.

**Definition.** For a convex function H on probability vectors and each p, choose a supporting plane Lₚ, an affine function that touches H at p and stays below it everywhere. Reporting p earns Lₚ(eᵢ) when outcome i occurs, where eᵢ puts probability one on i.

**Problem.** This construction gives a proper score for finitely many outcomes. If H is strictly convex, no other report gives the same expected score.

**How the definition helps.** Affinity makes the expected score of report p under truth q equal to Lₚ(q), which is at most H(q), the expected score of reporting q (our own). Strict convexity lets Lₚ touch H only at p, so every other report scores strictly less in expectation (our own).

**Paper or page:** [Optimal Scoring Rule Design under Partial Knowledge](https://arxiv.org/abs/2107.07420v3). It says: “Conversely, for every (strictly) convex function H: Δ(Ω)→ℝ, there exists a (strict) proper scoring rule such that the above condition hold.”

**Sources:**

- [Tilmann Gneiting and Adrian E. Raftery, Strictly Proper Scoring Rules, Prediction, and Estimation, Journal of the American Statistical Association 102 (2007) 359–378](https://doi.org/10.1198/016214506000001437)
- [Yiling Chen and Fang-Yi Yu, Optimal Scoring Rule Design under Partial Knowledge, arXiv 2107.07420](https://arxiv.org/abs/2107.07420v3)

### Equalizer Bayes rules are minimax

**Remember:** Constant risk makes the average risk equal the worst risk.

*True by definition.* MSC 62C20 (Minimax procedures in statistical decision theory), 62C10. arXiv stat.TH. Level 3: graduate.

**Definition.** An equalizer is a decision rule whose risk, or expected loss, is the same at every parameter value. So its average risk under any prior equals its worst-case risk.

**Problem.** If a Bayes rule for a probability prior has finite constant risk, it minimizes the worst-case risk.

**How the definition helps.** A Bayes rule, which minimizes average risk under the prior, beats every competitor on average, and for an equalizer the average is the worst case (our own). Each competitor's worst risk is at least its average, which is at least the Bayes average (our own). The work lies in finding a prior whose Bayes rule has constant risk (our own).

**Wikipedia:** [Minimax estimator](https://en.wikipedia.org/wiki/Minimax_estimator). It says: “If a Bayes estimator has constant risk, it is minimax.”

**Sources:** none listed. No primary source with a working link was found.

### Propensity scores balance measured covariates

**Remember:** One probability carries everything the measurements say about treatment.

*True by definition.* MSC 62D20 (Causal inference from observational studies). arXiv stat.ME, stat.AP. Level 3: graduate.

**Definition.** The propensity score is a person's probability of receiving the first of two treatments given their pretreatment measurements. It is one number that carries everything the measurements say about treatment (our own).

**Problem.** Conditional on the true score, treatment is independent of the recorded measurements. Wherever the score lies strictly between zero and one, each option has positive conditional probability.

**How the definition helps.** Treatment given the score has probability equal to the average, over people with that score, of treatment given the measurements, which is the score itself (our own). So knowing the measurements as well cannot change the treatment probability (our own).

**Wikipedia:** [Propensity score matching](https://en.wikipedia.org/wiki/Propensity_score_matching). It says: “The propensity score e(x) is a balancing score.”

**Sources:**

- [P. R. Rosenbaum and D. B. Rubin, The central role of the propensity score in observational studies for causal effects](https://doi.org/10.1093/biomet/70.1.41)

### Weighted residuals give two safeguards

**Remember:** Either a correct prediction or a correct weight removes the bias.

*True by definition.* MSC 62D20 (Causal inference from observational studies). arXiv stat.ME, stat.AP. Level 3: graduate.

**Definition.** The doubly robust formula averages over everyone a predicted outcome m(X) plus a correction, m(X) + A(Y − m(X))/g(X). Here A indicates treatment, Y is the outcome and X holds the pretreatment measurements. The correction is the prediction error of treated people (A = 1), divided by an estimated treatment probability g(X) &gt; 0 (our own).

**Problem.** Assume consistency of observed and potential outcomes, positive probabilities for both treatments given X, and conditional independence of treatment and potential outcomes given X. When the displayed terms are integrable, the formula recovers the treated potential outcome mean if either model is correct (our own).

**How the definition helps.** The correction has mean zero when m is correct, and it exactly repairs m when g is correct (our own). With correct m, the errors of treated people average zero at each X (our own). With correct g, weighting treated people by 1/g restores the population, so the correction adds back what m missed (our own).

**Paper or page:** [Normalized Augmented Inverse Probability Weighting with Neural Network Predictions](https://arxiv.org/abs/2108.01768v2). It says: “The $DR$ estimator \\eqref {nAIPW} is consistent if either $\\hat {Q}<sup>k\\xrightarrow</sup> {p}Q<sup>k$</sup>, $k=0, 1$, or $\\hat {g}\\xrightarrow {p}g$.”

**Sources:**

- [Normalized Augmented Inverse Probability Weighting with Neural Network Predictions (arXiv 2108.01768v2)](https://arxiv.org/abs/2108.01768v2)

### A natural parameter space with interior makes the sufficient statistic complete

**Remember:** A ball of parameters forces zero-mean functions of S to vanish.

*Rules out counterexamples.* MSC 62E10 (Characterization and structure theory of statistical distributions), 62B05. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** A natural exponential family has densities h(x) exp(θ · T(x) − A(θ)) relative to a common measure. Its parameter set has nonempty interior if it contains an open ball in ℝᵏ. Then each mean of g(S) is, up to a positive factor, a Laplace transform known on that open ball (our own).

**Problem.** For independent observations from the same family member, nonempty interior makes S = ∑ᵢ T(Xᵢ) complete. Each unbiased finite-variance function of S then has minimum variance among unbiased estimators and is unique up to almost sure equality.

**How the definition helps.** A Laplace transform that vanishes on an open set comes from the zero measure, so a zero mean of g(S) throughout the ball forces g(S) = 0 almost surely (our own). Factorization gives sufficiency, and Lehmann–Scheffé gives the variance conclusion (our own). Without interior, for normal samples with mean θ ≠ 0 and variance θ², the sample variance and nX̄²/(n + 1) are distinct unbiased estimators of θ², both functions of S (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “If Θ has nonempty interior in ℝᵏ, then given any IID samples ... the statistic ... is a complete statistic for θ.”

**Sources:** none listed. No primary source with a working link was found.

### The log-partition function gives exponential-family moments by differentiation

**Remember:** Differentiate the log-normalizer once for the mean, twice for the variance.

*True by definition.* MSC 62E10 (Characterization and structure theory of statistical distributions), 62B05. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** In a natural exponential family with density h(x) exp(η·T(x) − A(η)), the log-partition function A(η) is the logarithm of ∫ h(x) exp(η·T(x)) dx. So exp(A(η + u) − A(η)) is the mean of exp(u·T) at parameter η (our own).

**Problem.** At each interior natural parameter η, the gradient of A is the mean of T, and its Hessian is the covariance matrix of T. For u with η + u in the natural parameter space, A(η + u) − A(η) is the cumulant generating function at u.

**How the definition helps.** The definition makes A(η + u) − A(η) the logarithm of the mean of exp(u·T), which is the cumulant generating function of T (our own). At an interior η it is finite near u = 0, so its gradient and Hessian there give the mean and covariance (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “The reason for this is so that the moments of the sufficient statistics can be calculated easily, simply by differentiating this function.”

**Sources:** none listed. No primary source with a working link was found.

### Defining p-values by rejecting levels controls false rejections

**Remember:** The p-value is the smallest level whose test rejects.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62A01. arXiv math.ST. Level 3: graduate.

**Definition.** Take nested rejection regions Rα that grow with α, with P(Rα) ≤ α for every null law P and R₁ the whole sample space. The p-value at x is the smallest level that rejects x, the infimum of all α with x in Rα.

**Problem.** For any null law and any level α in \[0, 1\], the probability that the p-value is at most α is at most α.

**How the definition helps.** If the p-value is at most α, then x lies in every Rβ with β &gt; α, by nesting, even if the infimum is not attained (our own). So the probability is at most P(Rβ) ≤ β, and letting β decrease to α gives the bound (our own). The case α = 1 is immediate (our own).

**Wikipedia:** [P-value](https://en.wikipedia.org/wiki/P-value). It says: “the probability of obtaining a p-value less than or equal to any number between 0 and 1 is still less than or equal to that number”

**Sources:** none listed. No primary source with a working link was found.

### Expectation-bounded e-variables multiply when the conditional bound holds

**Remember:** Under the null, each bet's expected payout is at most the stake.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62L10. arXiv math.ST, stat.ME. Level 3: graduate.

**Definition.** An e-variable is a bet against the null hypothesis: a nonnegative statistic whose expected payout is at most 1 under every null law.

**Problem.** If E₁ is an e-variable from the first data and, under every null law, E₂ is nonnegative with conditional mean at most 1 given the first data, then E₁E₂ is an e-variable. This holds even if the choice of E₂ depends on the first data.

**How the definition helps.** Given the first data, the product has conditional mean at most E₁, and E₁ has mean at most one under every null law (our own). The product is nonnegative, so it is an e-variable (our own).

**Wikipedia:** [E-values](https://en.wikipedia.org/wiki/E-values). It says: “e-values of subsequent experiments (e.g. clinical trials concerning the same treatment) may simply be multiplied to provide a new, "product" e-value that represents the evidence in the joint experiment.”

**Sources:**

- [V. Vovk and R. Wang, E-values: calibration, combination and applications, Annals of Statistics 49 (2021) 1736–1754](https://doi.org/10.1214/20-AOS2020)

### Monotone likelihood ratios make one-sided most powerful tests exist

**Remember:** If larger T always favours larger θ, reject for large T.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 62F03 (Parametric hypothesis testing). arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** A family has a monotone likelihood ratio in T if, for every θ₁ &lt; θ₂, the ratio fθ₂(x)/fθ₁(x) is a nondecreasing function of T(x), so larger T always favours larger θ. The ratio is taken where either density is positive, with value ∞ where only fθ₁ vanishes.

**Problem.** For θ ≤ θ₀ against θ &gt; θ₀, monotone likelihood ratios give a uniformly most powerful level-α test. It rejects above a cutoff in T and randomizes at equality as needed for size α at θ₀.

**How the definition helps.** Against any alternative θ &gt; θ₀, the Neyman–Pearson test rejects for a large likelihood ratio, which here means a large T, so one test is most powerful against all (our own). Monotone ratios also make its rejection probability nondecreasing in θ, so size α at θ₀ holds on the whole null (our own). This is the Karlin–Rubin argument.

**Wikipedia:** [Monotone likelihood ratio](https://en.wikipedia.org/wiki/Monotone_likelihood_ratio). It says: “If the family of random variables has the MLRP in T(X), a uniformly most powerful test can easily be determined for the hypothesis H₀ : θ ≤ θ₀ versus H₁ : θ &gt; θ₀.”

**Sources:**

- [S. Karlin and H. Rubin, The Theory of Decision Procedures for Distributions with Monotone Likelihood Ratio, Annals of Mathematical Statistics 27 (1956)](https://doi.org/10.1214/aoms/1177728259)

### Randomization makes test tradeoffs convex

**Remember:** A coin toss interpolates between the error rates of two tests.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62C05. arXiv stat.TH. Level 3: graduate.

**Definition.** A randomized test is a rejection probability at each observation, any value from zero to one, so a weighted average of two tests is again a test (our own). An ordinary test allows only zero and one.

**Problem.** Take two fixed probability laws, one for each hypothesis. Then the attainable pairs of false rejection and false acceptance probabilities of randomized tests form a convex set (our own specialization).

**How the definition helps.** Both error probabilities are linear in the rejection probabilities, so a weighted average of two tests has the weighted average of their error pairs (our own). Without randomization, a single possible observation allows only the two constant decisions, two points with no segment between them (our own).

**Paper or page:** [Optimal Decision Rules for Composite Binary Hypothesis Testing under Neyman-Pearson Framework](https://arxiv.org/abs/2505.17851v1). It says: “𝒫 is convex and compact.”

**Sources:**

- [Optimal Decision Rules for Composite Binary Hypothesis Testing under Neyman-Pearson Framework (arXiv 2505.17851v1)](https://arxiv.org/abs/2505.17851v1)

### Split likelihoods give valid tests

**Remember:** Fit on one half and test on the other.

*True by definition.* MSC 62F03 (Parametric hypothesis testing). arXiv stat.TH, stat.ME. Level 3: graduate.

**Definition.** The split likelihood ratio uses two independent parts of the sample. Its numerator is the second part's likelihood under a density fitted on the first part, and its denominator is the supremum of the second part's likelihood over the null. The ratio is zero when that supremum vanishes (our own).

**Problem.** For independent observations from a model with densities, reject when this ratio reaches 1/α, where 0 &lt; α &lt; 1. If the null hypothesis is true, the chance of rejection is at most α.

**How the definition helps.** Given the first part, the fitted density is fixed, and the ratio is at most the fitted likelihood over the true likelihood, which has conditional mean at most one (our own). Markov's inequality then bounds the chance that the ratio reaches 1/α by α (our own).

**Paper or page:** [Universal Inference for Testing Calibration of Mean Estimates within the Exponential Dispersion Family](https://arxiv.org/abs/2510.23821v1). It says: “The split and sub-sampled split LRTs \\eqref {def<sub>split</sub><sub>lrt</sub><sub>rejection</sub>} control the type I error of rejecting $\\mathcal {H}<sub>0</sub>$ in favor of $\\mathcal {H}<sub>1</sub>$ at the significance level $\\alpha \\in (0,1)$.”

**Sources:**

- [L. Wasserman, A. Ramdas and S. Balakrishnan, Universal inference](https://doi.org/10.1073/pnas.1922664117)
- [Universal Inference for Testing Calibration of Mean Estimates within the Exponential Dispersion Family (arXiv 2510.23821v1)](https://arxiv.org/abs/2510.23821v1)

### Posterior averaging gives likelihood ascent

**Remember:** Raising the expected complete log likelihood never lowers the observed likelihood.

*True by definition.* MSC 62F10 (Point estimation), 62-08. arXiv stat.CO, stat.ME. Level 3: graduate.

**Definition.** An EM-type update averages the complete-data log likelihood over the missing values, using their current conditional law given the observations. It then picks a new parameter that does not lower this average.

**Problem.** Assume the current observed likelihood is positive and the conditional averages are finite. Any such update preserves or increases the observed likelihood (our own extension).

**How the definition helps.** The gain in this average is a lower bound on the gain in observed log likelihood (our own). The bound is Jensen’s inequality applied to the complete-data likelihood ratio under the current conditional law (our own).

**Paper or page:** [A review of Monte Carlo-based versions of the EM algorithm](https://arxiv.org/abs/2401.00945v1). It says: “Let θ ∈ Θ, and θ′ = M(θ) be the EM update from θ. Then ℓ(θ′) ≥ ℓ(θ).”

**Sources:**

- [A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum Likelihood from Incomplete Data Via the EM Algorithm](https://doi.org/10.1111/j.2517-6161.1977.tb01600.x)
- [A review of Monte Carlo-based versions of the EM algorithm (arXiv 2401.00945v1)](https://arxiv.org/abs/2401.00945v1)

### Profile likelihood preserves maximum likelihood estimates under parameter maps

**Remember:** Give each value of α the best likelihood among its parameters.

*True by definition.* MSC 62F10 (Point estimation). arXiv math.ST. Level 3: graduate.

**Definition.** To estimate α = g(θ), the profile likelihood at α is the largest likelihood L(θ) among parameters θ with g(θ) = α, the supremum over that group.

**Problem.** If θ̂ maximizes L, then g(θ̂) maximizes the profile likelihood, even when g is not one-to-one.

**How the definition helps.** Each group's supremum is at most the overall maximum, and the group containing θ̂ attains L(θ̂), so g(θ̂) wins (our own). A many-to-one g need not give a model indexed by α alone, and profiling supplies the missing likelihood (our own).

**Wikipedia:** [Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation). It says: “The equivariance property can be generalized to non-bijective transforms, although it applies in that case on the maximum of an induced likelihood function which is not the true likelihood in general.”

**Sources:**

- [P. W. Zehna, Invariance of maximum likelihood estimators, Annals of Mathematical Statistics 37 (1966) 744](https://doi.org/10.1214/aoms/1177699475)

### Regular estimators exclude Hodges' superefficient estimator

**Remember:** Small shifts of the truth leave a regular estimator's error law unchanged.

*Rules out counterexamples.* MSC 62F12 (Asymptotic properties of parametric estimators). arXiv math.ST. Level 3: graduate.

**Definition.** Fix an interior scalar parameter θ and, for each fixed real h, the local truth θₙ = θ + h/√n. An estimator Tₙ is regular at θ if √n(Tₙ − θₙ) converges under every local truth to one law that does not depend on h.

**Problem.** In a locally asymptotically normal model with positive finite information, every regular estimator with finite limiting variance has limiting variance at least the efficient variance.

**How the definition helps.** Regularity is the hypothesis of Hájek’s convolution theorem, which writes the limit as an efficient normal variable plus independent noise, so its variance is at least the efficient one (our own). In a normal mean model, Hodges’ estimator sets the sample mean to zero when its magnitude is below n⁻¹ᐟ⁴ (our own). At local truth h/√n it returns zero with probability tending to one, so its centered limit is −h and it is not regular (our own).

**Wikipedia:** [Hodges' estimator](https://en.wikipedia.org/wiki/Hodges%27_estimator). It says: “The existence of such a counterexample is the reason for the introduction of the notion of regular estimators.”

**Sources:**

- [Hájek, J. (1970). A characterization of limiting distributions of regular estimates. Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete 14, 323–330.](https://doi.org/10.1007/BF00533669)

### Exponential-family conjugate priors update by adding counts and totals

**Remember:** Data add their count and total to the prior's count and total.

*True by definition.* MSC 62F15 (Bayesian inference), 62E10. arXiv math.ST. Level 3: graduate.

**Definition.** For densities h(x) exp(η · T(x) − A(η)), the conjugate prior has density proportional to exp(η · χ − νA(η)), provided its integral is finite and positive. It looks like the likelihood of ν pseudo-observations whose statistics T add up to χ (our own).

**Problem.** For n independent observations from this model, the updated density for η has the same form whenever the observed data give a finite, positive normalizer. The new count is ν + n, and the new total is χ + T(x₁) + ⋯ + T(xₙ).

**How the definition helps.** The likelihood of n observations is exp(η · ∑T(xᵢ) − nA(η)) times terms free of η, so multiplying by the prior just adds totals and counts (our own). The main work is to find which χ and ν give a finite normalizer, as Diaconis and Ylvisaker did (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family), [Conjugate prior](https://en.wikipedia.org/wiki/Conjugate_prior). It says: “ν corresponds to the effective number of observations that the prior distribution contributes, and χ corresponds to the total amount that these pseudo-observations contribute to the sufficient statistic over all observations and pseudo-observations.”

**Sources:**

- [P. Diaconis and D. Ylvisaker, Conjugate priors for exponential families, Annals of Statistics 7 (1979) 269–281](https://doi.org/10.1214/aos/1176344611)

### The Jeffreys prior does not depend on the choice of parameter

**Remember:** Root-determinant information carries the Jacobian factor a density needs.

*True by definition.* MSC 62F15 (Bayesian inference), 62B11. arXiv math.ST. Level 3: graduate.

**Definition.** In a regular model, the Jeffreys prior has density proportional to √det I(θ), where the Fisher information I(θ) is the expected outer product of the log-density gradient with itself. Because I is built from derivatives, it picks up the Jacobian of any parameter change.

**Problem.** Under a smooth invertible parameter change with smooth inverse, the Jeffreys prior in the new coordinates is the image of the original Jeffreys prior.

**How the definition helps.** By the chain rule, the information in the new coordinates is JᵀIJ, where J is the derivative matrix of the inverse change (our own). Its square-root determinant is \|det J\|√det I, exactly the change-of-variables factor for a density (our own).

**Wikipedia:** [Jeffreys prior](https://en.wikipedia.org/wiki/Jeffreys_prior). It says: “That is, the relative probability assigned to a volume of a probability space using a Jeffreys prior will be the same regardless of the parameterization used to define the Jeffreys prior.”

**Sources:**

- [Jeffreys, H. (1946). An invariant form for the prior probability in estimation problems. Proceedings of the Royal Society A 186, 453–461.](https://doi.org/10.1098/rspa.1946.0056)

### Variational bounds tighten at the posterior

**Remember:** The trial density closes the gap exactly when it matches the posterior.

*True by definition.* MSC 62F15 (Bayesian inference). arXiv stat.ML. Level 3: graduate.

**Definition.** For fixed data x and a trial density q on the hidden variable z, the variational lower bound is the q-average of log(p(x,z)/q(z)). It equals log p(x) minus the relative entropy of q from the posterior p(z given x).

**Problem.** Suppose the log evidence is finite and the trial expectation exists, possibly as minus infinity. The bound never exceeds the log evidence and equals it exactly when the trial and posterior densities agree almost everywhere.

**How the definition helps.** Relative entropy is nonnegative and vanishes exactly when the two densities agree almost everywhere (our own). The identity comes from writing p(x,z) = p(x)p(z given x) inside the logarithm.

**Wikipedia:** [Evidence lower bound](https://en.wikipedia.org/wiki/Evidence_lower_bound). It says: “= ln pθ(x) − Dᴋʟ(qφ(z\|x) \|\| pθ(z\|x)).”

**Sources:** none listed. No primary source with a working link was found.

### Conditional copies give uniform ranks

**Remember:** Under the null, the real feature is just another conditional copy.

*True by definition. Confidence: medium.* MSC 62G10 (Nonparametric hypothesis testing). arXiv stat.ME. Level 3: graduate.

**Definition.** Given the controls and response, draw independent copies of the tested feature from its law given the controls, independently of the observed feature. Under the null, the observed feature is then one more such copy. Score all copies and the observed feature by one fixed rule, and break ties by a uniform random ordering.

**Problem.** Under conditional independence of feature and response given the controls, the observed rank is uniform and equal-sized rank groups have equal probabilities (our own).

**How the definition helps.** Under conditional independence, the observed feature and the copies are exchangeable given the controls and response, and random tie breaking keeps that symmetry (our own). So the observed score is equally likely to take each rank position (our own). The cited grouped-rank limit theorem uses additional assumptions.

**Paper or page:** [Pearson Chi-squared Conditional Randomization Test](https://arxiv.org/abs/2111.00027v2). It says: “will converge to χ² distribution with L − 1 degrees of freedom”

**Sources:**

- [Adel Javanmard, Mohammad Mehrabi (2025), Pearson Chi-squared Conditional Randomization Test](https://arxiv.org/abs/2111.00027v2)

### Including the test score in the average gives a valid e-value

**Remember:** Normalize with the test score still in the pool.

*Rules out counterexamples.* MSC 62G15 (Nonparametric tolerance and confidence regions), 68T05. arXiv stat.ML, cs.LG. Level 3: graduate.

**Definition.** Divide the test score by the mean of all the finitely many nonnegative scores, the test score included, and set the ratio to zero when all scores vanish (our own). Because every score is in the mean, the ratios of all scores sum to their number, or to zero (our own).

**Problem.** If the joint score distribution is invariant under permutations, the statistic has mean at most one. Its probability of reaching 1/α is at most α for 0 &lt; α &lt; 1.

**How the definition helps.** Exchangeability gives every score's ratio the same mean, and the ratios sum to at most their number, so each mean is at most one (our own). Markov’s inequality then gives the probability bound (our own). Omitting the test score fails, since the denominator is zero when only the test score is positive (our own).

**Paper or page:** [Enhancing Conformal Prediction Using E-Test Statistics](https://arxiv.org/abs/2403.19082v1). It says: “Set\\\[ F = \\frac{L<sub>n+1</sub>}{\\left(\\sum\\limits<sub>j=1</sub><sup>n+1</sup> L<sub>j</sub>\\right)/(n+1)}. \\\]”

**Sources:** none listed. No primary source with a working link was found.

### Within-group ranks give coverage in each prediction group

**Remember:** Rank each candidate only against calibration cases from its own group.

*Makes the theorem clean to state or prove.* MSC 62G15 (Nonparametric tolerance and confidence regions), 68T05. arXiv stat.ML, cs.LG. Level 3: graduate.

**Definition.** Fix 0 &lt; α &lt; 1 and a rule that assigns each input-label pair to a group. Rank each candidate's score only among the calibration scores of its own group, m scores in all with the candidate. Include the candidate if one plus the number of strictly smaller scores is at most ⌈m(1 − α)⌉.

**Problem.** Assume permuting the examples preserves their joint distribution and permutes their scores in the same way. Conditional on any positive-probability group of the true test pair, the prediction set contains the true label with probability at least 1 − α.

**How the definition helps.** Within its group, the test example is exchangeable with its group peers, so with random tie breaking its rank among them would be uniform (our own). Counting only strictly smaller scores can only lower its rank, so the cutoff includes the true label with probability at least 1 − α (our own).

**Paper or page:** [Conformal Mixed-Integer Constraint Learning with Feasibility Guarantees](https://arxiv.org/abs/2506.03531v1). It says: “for all groups k ∈ {1, …, K} with ℙ(g(Xₙ₊₁, Yₙ₊₁) = k) &gt; 0”

**Sources:** none listed. No primary source with a working link was found.

### Block medians tolerate heavy tails

**Remember:** One bad block spoils its mean but cannot outvote the majority.

*True by definition.* MSC 62G35 (Nonparametric robustness). arXiv stat.TH, stat.ME. Level 3: graduate.

**Definition.** The median-of-means estimator splits independent observations into equal blocks and takes the median of the block means. It errs by more than a threshold only if at least half the blocks do.

**Problem.** For n independent draws from one distribution with finite standard deviation σ, take K = ⌈8 log(1/δ)⌉ equal blocks, with 0 &lt; δ ≤ 1/2 and K dividing n. Then the error is at most 2σ√(K/n) with probability at least 1 − δ (our own bound).

**How the definition helps.** A large median error needs at least half the blocks to be bad (our own). Chebyshev’s inequality makes each block bad with chance at most one quarter (our own). Hoeffding’s inequality then bounds the chance that half the independent blocks are bad by exp(−K/8) (our own).

**Paper or page:** [On importance sampling and independent Metropolis-Hastings with an unbounded weight function](https://arxiv.org/abs/2411.09514v2). It says: “Denote by μ̂₍MoM,ₙ₎ the MoM estimator computed with K blocks of size m.”

**Sources:**

- [On importance sampling and independent Metropolis-Hastings with an unbounded weight function (arXiv 2411.09514v2)](https://arxiv.org/abs/2411.09514v2)

### Continuous margins make copulas unique

**Remember:** Continuous margins fill the cube on which the copula lives.

*Rules out counterexamples.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas). arXiv math.ST. Level 3: graduate.

**Definition.** A copula C is a joint distribution function on the unit cube with uniform coordinates that rebuilds a joint law H from its margins Fᵢ by H(x) = C(F₁(x₁), …, F<sub>d</sub>(x<sub>d</sub>)). So H directly fixes C at the points that the margins' values reach (our own).

**Problem.** Sklar’s theorem gives a unique copula for a joint law with continuous marginal distribution functions.

**How the definition helps.** Continuous margins reach every value strictly between zero and one, so H fixes C on the open cube, and continuity of C fixes the boundary (our own argument). Applying each Fᵢ to its own coordinate gives uniform coordinates and constructs the copula. For two constant coordinates, every bivariate copula gives the same joint law (our own counterexample).

**Wikipedia:** [Copula (statistics)](https://en.wikipedia.org/wiki/Copula_%28statistics%29). It says: “This implies that the copula is unique if the marginals Fᵢ are continuous.”

**Sources:** none listed. No primary source with a working link was found.

### The outer-product definition makes linear transforms of Wishart matrices Wishart

**Remember:** Transform each normal vector before forming its outer product.

*True by definition.* MSC 62H10 (Multivariate distribution of statistics), 62H05. arXiv math.ST. Level 3: graduate.

**Definition.** The Wishart law with scale V and n degrees of freedom is the law of ∑ GᵢGᵢᵀ, the sum of outer products of n independent centered normal vectors Gᵢ with covariance V. The scale V may be singular.

**Problem.** If W is Wishart with scale V, then CWCᵀ is Wishart with scale CVCᵀ for any compatible real matrix C. The number of degrees of freedom stays the same.

**How the definition helps.** Then CWCᵀ is the sum of the outer products of the vectors CGᵢ, which are independent centered normal vectors with covariance CVCᵀ (our own). A density definition cannot cover this, because CVCᵀ can be singular or n smaller than the output dimension (our own).

**Wikipedia:** [Wishart distribution](https://en.wikipedia.org/wiki/Wishart_distribution). It says: “Then the Wishart distribution is the probability distribution of the p × p random matrix S = GGᵀ = ∑ᵢ₌₁ⁿ gᵢgᵢᵀ known as the scatter matrix.”

**Sources:**

- [H. Uhlig, On singular Wishart and singular multivariate beta distributions, Annals of Statistics 22 (1994) 395–405](https://doi.org/10.1214/aos/1176325375)

### Weighted characteristic-function gaps make distance covariance zero only at independence

**Remember:** Compare the joint characteristic function with the product of the marginals.

*True by definition.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 60E10. arXiv math.ST, math.PR. Level 3: graduate.

**Definition.** Squared distance covariance integrates \|φ₍X,Y₎(t,s) − φₓ(t)φᵧ(s)\|², the gap between the joint characteristic function and the product of the marginal ones, over all nonzero frequencies t and s. The weight is the positive function 1/\[c(p)c(q)‖t‖ᵖ⁺¹‖s‖ᑫ⁺¹\], with c(k) = π⁽ᵏ⁺¹⁾ᐟ²/Γ((k+1)/2) for dimensions p and q (our own).

**Problem.** For random vectors X and Y with finite first moments, distance covariance is zero exactly when X and Y are independent (Theorem 3.2).

**How the definition helps.** With a positive weight, a zero integral forces the gap to vanish almost everywhere, and by continuity at every frequency (our own reasoning). Equal characteristic functions give equal laws, so the joint law is the product of the marginals. Ordinary covariance can miss dependence: for standard normal X and Y = X², the covariance E\[X³\] is zero (our own example).

**Paper or page:** [A Basic Treatment of the Distance Covariance](https://arxiv.org/abs/2206.10135v1). It says: “For all X and Y, 𝒱²(X,Y) = 0 if and only if X and Y are independent.”

**Sources:**

- [Dominic Edelmann, Tobias Terzer, Donald Richards, A Basic Treatment of the Distance Covariance, Sankhya, Series B, 83 (2021), S12-S25](https://arxiv.org/abs/2206.10135v1)
- [Gábor J. Székely, Maria L. Rizzo, and Nail K. Bakirov, Measuring and testing dependence by correlation of distances (2007)](https://doi.org/10.1214/009053607000000505)

### Calibration bounds forecast spread

**Remember:** A calibrated forecast is a smoothed version of the true conditional mean.

*Rules out counterexamples.* MSC 62J02 (General nonlinear regression). arXiv stat.ML. Level 3: graduate.

**Definition.** A forecast F based on inputs X is calibrated if E\[Y ∣ F\] = F almost surely, where Y is the outcome. So F is itself an average of the ideal forecast E\[Y ∣ X\], namely its conditional mean given F.

**Problem.** Let Y and the forecasts be integrable. For every calibrated forecast F based on X and every convex function φ, E φ(F) ≤ E φ(E\[Y ∣ X\]).

**How the definition helps.** Calibration and iterated expectation give F = E\[E\[Y ∣ X\] ∣ F\], so Jensen’s inequality gives φ(F) ≤ E\[φ(E\[Y ∣ X\]) ∣ F\] (our own). Without calibration the bound fails: if Y = 0 and the input is ±1 equally often, forecasting the input gives a larger expected square than forecasting zero (our own counterexample).

**Paper or page:** [Model selection with Gini indices under auto-calibration](https://arxiv.org/abs/2207.14372v3). It says: “is auto-calibrated for Y, and it strictly dominates in convex order any other auto-calibrated regression function”

**Sources:**

- [Model selection with Gini indices under auto-calibration](https://arxiv.org/abs/2207.14372v3)

### Orthogonal sums of squares are independent

**Remember:** Different orthogonal directions use different Gaussian coordinates.

*Rules out counterexamples.* MSC 62J10 (Analysis of variance and covariance (ANOVA)). arXiv math.ST. Level 3: graduate.

**Definition.** Project the Gaussian observation vector onto mutually orthogonal subspaces of positive dimension, and take each projection's squared length as one sum of squares. Each sum then uses its own group of coordinates in a combined orthonormal basis.

**Problem.** For a centered Gaussian vector with covariance σ²I and σ &gt; 0, the sums are independent. Each sum divided by σ² has the chi-squared law whose degrees of freedom equal the subspace dimension.

**How the definition helps.** Covariance σ²I makes the coordinates in any orthonormal basis independent, and each sum uses its own disjoint group of them (our own). Using the same line twice gives identical nonconstant sums, which are not independent (our own counterexample).

**Wikipedia:** [Cochran's theorem](https://en.wikipedia.org/wiki/Cochran%27s_theorem). It says: “Cochran's theorem then states that Q₁ and Q₂ are independent, with chi-squared distributions with n − 1 and 1 degree of freedom respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Overlap guarantees finite logistic fits

**Remember:** No separating direction means no fit improves forever.

*Rules out counterexamples.* MSC 62J12 (Generalized linear models (logistic models)). arXiv stat.ME, stat.TH. Level 3: graduate.

**Definition.** In binary logistic regression, give each observation the signed score ±xᵢ·β, with the plus sign for outcome one. The sample overlaps if no coefficient vector β makes every signed score nonnegative and at least one positive, so no direction separates the outcomes.

**Problem.** Assume the predictor matrix has linearly independent columns and the sample overlaps. Then exactly one finite coefficient vector maximizes the likelihood.

**How the definition helps.** Overlap and independent columns give every unit direction some negative signed score (our own). Compactness of the unit sphere makes this uniform, so the log likelihood tends to minus infinity as coefficients diverge, and strict concavity gives uniqueness (our own). With a separating direction, scaling it up improves the fit forever (our own).

**Wikipedia:** [Separation (statistics)](https://en.wikipedia.org/wiki/Separation_%28statistics%29). It says: “in case of a logistic regression with completely separated data the maximum appears at the parameter space's margin, leading to "infinite" estimates”

**Sources:**

- [A. Albert and J. A. Anderson, On the existence of maximum likelihood estimates in logistic regression models](https://doi.org/10.1093/biomet/71.1.1)

### Closed testing protects true hypotheses

**Remember:** Reject a claim only after rejecting every conjunction that contains it.

*Rules out counterexamples.* MSC 62J15 (Paired and multiple comparisons; multiple testing). arXiv stat.TH. Level 3: graduate.

**Definition.** Closed testing tests at level α, for each nonempty subset of a finite family of hypotheses, the claim that all its members are true. It rejects an original hypothesis only if every such claim containing it is rejected.

**Problem.** The chance of rejecting any true original hypothesis is at most α, even when some original hypotheses are false.

**How the definition helps.** Rejecting any true hypothesis requires rejecting the claim that all the true hypotheses hold, and that claim is true, so this happens with probability at most α. With two independent level-α tests of true hypotheses, separate testing errs at least once with probability 1 − (1 − α)² &gt; α for 0 &lt; α &lt; 1 (our own counterexample).

**Paper or page:** [Too Many, Too Improbable: testing joint hypotheses and closed testing shortcuts](https://arxiv.org/abs/2108.04731v3). It says: “by means of a closed testing procedure controls the FWER at level α in the strong sense.”

**Sources:**

- [Too Many, Too Improbable: testing joint hypotheses and closed testing shortcuts](https://arxiv.org/abs/2108.04731v3)
- [Marcus, Peritz, and Gabriel (1976), On closed testing procedures with special reference to ordered analysis of variance](https://doi.org/10.1093/biomet/63.3.655)

### Confidence sequences bound false alarms

**Remember:** Sets that all hold the truth always share a point.

*True by definition.* MSC 62L10 (Sequential statistical analysis). arXiv stat.ME, stat.TH. Level 3: graduate.

**Definition.** A confidence sequence at level 1−α is a sequence of random sets Cₜ that, with probability at least 1−α, all contain the true parameter at once. In symbols, Pθ(θ ∈ Cₜ for every t) ≥ 1−α for every θ.

**Problem.** Signal a change the first time the sets seen so far have empty intersection. If the parameter never changes, the chance of ever signaling is at most α.

**How the definition helps.** If every set contains the unchanged parameter, so does their intersection, which is then nonempty (our own). So a signal requires some set to miss the parameter, which has probability at most α (our own).

**Paper or page:** [Sequential change detection via backward confidence sequences](https://arxiv.org/abs/2302.02544v1). It says: “controls the probability of false alarm (PFA) at level α.”

**Sources:**

- [Sequential change detection via backward confidence sequences (arXiv 2302.02544v1)](https://arxiv.org/abs/2302.02544v1)

### Risk sets cancel baseline hazards

**Remember:** Compare event rates at the same time and the common factor cancels.

*True by definition.* MSC 62N02 (Estimation in survival analysis and censored data), 62P10. arXiv stat.AP, stat.ME. Level 3: graduate.

**Definition.** In a proportional hazards model, each subject's event rate is a common baseline rate times the subject's own multiplier. At each event time, compare only the subjects still at risk, those who have not yet had the event.

**Problem.** For independent subjects with continuous event times and complete follow-up, condition on an event time with positive total rate and on the subjects still at risk. Each subject's chance of being the one who fails is their multiplier divided by the sum of the at-risk multipliers.

**How the definition helps.** At one event time, all at-risk subjects share the same baseline rate, so it cancels from each subject's share of the total rate (our own). Subject i's share λ₀(t)rᵢ/∑ⱼ λ₀(t)rⱼ is just rᵢ/∑ⱼ rⱼ, the sum taken over the risk set (our own).

**Wikipedia:** [Proportional hazards model](https://en.wikipedia.org/wiki/Proportional_hazards_model). It says: “The first factor is the partial likelihood shown below, in which the baseline hazard has "canceled out".”

**Sources:**

- [D. R. Cox, Regression Models and Life-Tables](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x)

### Coupled proposals attain total variation

**Remember:** Shared draws make the lighter chain accept whenever the heavier one does.

*True by definition.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO, stat.TH. Level 4: research.

**Definition.** Couple two independent-proposal Metropolis–Hastings chains by giving both the same proposal z and the same uniform U on \[0,1\] at each step. With w the ratio of the positive finite target and proposal densities on their common region, a chain at x moves to z if U &lt; min(1, w(z)/w(x)) and otherwise stays.

**Problem.** Start the chains at distinct points. After t steps, their probability of still differing equals the largest difference between the probabilities they assign to any one event.

**How the definition helps.** The chains meet once the chain at the heavier start x accepts, since the other chain, whose weight never exceeds w(x), then accepts too (our own). Until then the heavier chain stays at x, and continuous proposals never revisit x, so disagreement has exactly the probability difference on {x} (our own). Disagreement under any coupling bounds every event's probability difference, so the two are equal (our own).

**Paper or page:** [On importance sampling and independent Metropolis-Hastings with an unbounded weight function](https://arxiv.org/abs/2411.09514v2). It says: “for all t ≥ 1, \|Pᵗ(𝐱,·) − Pᵗ(𝐲,·)\|ₜᵥ = ℙ(𝐱,𝐲)(τ &gt; t) = max(r(𝐱),r(𝐲))ᵗ.”

**Sources:**

- [On importance sampling and independent Metropolis-Hastings with an unbounded weight function (arXiv 2411.09514v2)](https://arxiv.org/abs/2411.09514v2)

### Reweighted samples restore unbiasedness

**Remember:** Pick pools in proportion to their average weight.

*True by definition.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO. Level 4: research.

**Definition.** Draw a pool of N ≥ 1 independent points from a proposal law Q, and weight each point by w, the target density relative to Q. Sample pools in proportion to their average weight, and within a pool average function values with weights proportional to w.

**Problem.** For an integrable function, the weighted average in a pool from the new law has the target mean. The target law must have a density relative to the proposal law.

**How the definition helps.** The pool's average weight in the new law cancels the denominator of the weighted average, leaving the plain mean of w f under the proposal law (our own). Each term w f has the target mean, and pools with zero total weight have probability zero under the new law (our own).

**Paper or page:** [BR-SNIS: Bias Reduced Self-Normalized Importance Sampling](https://arxiv.org/abs/2207.06364v2). It says: “For every $N \\in \\mathbb{N}<sup>\*</sup> $ and $\\pi $-integrable function $f$, \\\[ {\\textstyle \\int \\targetkern f(x<sup>1:N</sup>) \\boldsymbol{\\pi}<sub>N</sub> ( {d} x<sup>1:N</sup>) = \\pi (f) .} \\\]”

**Sources:**

- [G. Cardoso, S. Samsonov, A. Thin, E. Moulines and J. Olsson, BR-SNIS: Bias Reduced Self-Normalized Importance Sampling](https://arxiv.org/abs/2207.06364v2)

### A log score that uses survival for censored cases stays strictly proper

**Remember:** Score survival when the event itself is not seen.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 62C05 (General considerations in statistical decision theory), 62N01. arXiv stat.ME, stat.AP. Level 4: research.

**Definition.** The censored log score charges minus the log forecast density of event time and type when an event is seen, and minus the log forecast survival probability when the case is censored. It is the forecast's negative log likelihood for what was actually observed (our own).

**Problem.** Under independent censoring, assume the observed law identifies the event law and the true expected score is finite. Then the true joint law of event time and type uniquely minimizes the expected score.

**How the definition helps.** Up to censoring terms common to all forecasts, the score is the observed-data negative log likelihood, so Gibbs’ inequality makes the true observed law the unique minimizer (our own). Identifiability then gives uniqueness of the event law (our own).

**Paper or page:** [A Proper Scoring Rule for Validation of Competing Risks Models](https://arxiv.org/abs/2104.01000v1). It says: “We propose a version of the logarithmic scoring rule for competing risks data and show that it remains strictly proper under non-informative censoring.”

**Sources:**

- [Zoe Guan, A Proper Scoring Rule for Validation of Competing Risks Models, arXiv:2104.01000v1 (2021)](https://arxiv.org/abs/2104.01000v1)

### A positively weighted strictly proper score makes the whole sum strictly proper

**Remember:** One strict term with positive weight breaks every tie.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory). arXiv stat.ME, math.ST. Level 4: research.

**Definition.** A scoring rule is proper if the true law minimizes expected loss, and strictly proper if it is the only minimizer. An aggregated score adds proper scores with nonnegative weights, so a wrong forecast's extra expected loss is a nonnegatively weighted sum of nonnegative terms.

**Problem.** For a finite weighted sum with finite expected component losses, the aggregated score is proper. It is strictly proper if some strictly proper component has a positive weight.

**How the definition helps.** Each term of the extra expected loss is nonnegative, so propriety follows (our own unpacking). A strict component with positive weight makes one term positive for every wrong forecast, so no wrong forecast ties with the truth. Negative weights break this: weights 1 and −2 on two copies of a strict score S give −S, which the truth maximizes (our own counterexample).

**Paper or page:** [Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation](https://arxiv.org/abs/2407.00650v1). It says: “If at least one scoring rule Sᵢ is strictly proper relative to ℱ and wᵢ &gt; 0, the aggregated scoring rule S<sub>𝒮,𝐰</sub> is strictly proper relative to ℱ.”

**Sources:**

- [Romain Pic, Clément Dombry, Philippe Naveau, Maxime Taillardat, Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation, arXiv:2407.00650v1 (2024)](https://arxiv.org/abs/2407.00650v1)

### Candidate labels retain calibrated forecasts

**Remember:** Try both labels; the true one makes the new case ordinary.

*Makes the theorem clean to state or prove.* MSC 62C05 (General considerations in statistical decision theory). arXiv stat.ML. Level 4: research.

**Definition.** For each of the two candidate labels, add the new case with that label and refit by one order-independent rule. The rule makes the residuals, times each chosen input function, average zero over the augmented sample. Return both fitted predictions for the new case.

**Problem.** Suppose the joint law of the cases is unchanged by reordering, and all residual products have finite means. For each chosen function, the expected residual product for the new case is zero for the candidate fitted with its true label.

**How the definition helps.** The fit with the true label treats the new case exactly like a training case, so by symmetry its expected residual product equals that of every case (our own). That common value is the expected sample average, which is zero by construction (our own).

**Paper or page:** [Generalized Venn and Venn-Abers Calibration with Applications in Conformal Prediction](https://arxiv.org/abs/2502.05676v3). It says: “contains the perfectly multicalibrated prediction”

**Sources:**

- [Generalized Venn and Venn-Abers Calibration with Applications in Conformal Prediction](https://arxiv.org/abs/2502.05676v3)

### Count deletion estimates Poisson risk

**Remember:** Removing one count turns a count-weighted fit into mean times fit.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory), 62F40. arXiv stat.ME. Level 4: research.

**Definition.** For independent Poisson counts Y and a fit g(Y) of their means, start with the training error ‖Y − g(Y)‖². For each i with Yᵢ &gt; 0, add the deletion term 2Yᵢ\[gᵢ(Y) − gᵢ(Y − eᵢ)\], where Y − eᵢ removes one count from coordinate i.

**Problem.** If each fitted coordinate has finite second moment, this corrected sum estimates expected squared prediction error without bias. Evaluate prediction error against an independent vector of counts with the same means.

**How the definition helps.** The deletion term estimates the cross term between the mean and the fit that training error misses, because E\[Yᵢh(Y − eᵢ)\] = μᵢE\[h(Y)\] for Poisson counts (our own). This identity follows from k P(Yᵢ = k) = μᵢ P(Yᵢ = k − 1) for k ≥ 1 (our own). Expanding the fresh-data squared error then gives the stated correction (our own).

**Paper or page:** [Unbiased Test Error Estimation in the Poisson Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2212.01943v3). It says: “where we abbreviate g₋(Y) = (g₁(Y−e₁), …, gₙ(Y−eₙ))”

**Sources:**

- [Unbiased Test Error Estimation in the Poisson Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2212.01943v3)

### Tilted risk moves continuously from minimum loss through mean to maximum

**Remember:** Positive tilts favor the largest loss, while negative tilts favor the smallest.

*Makes the theorem clean to state or prove.* MSC 62C05 (General considerations in statistical decision theory), 68Q32. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** For N losses and a nonzero real number t, tilted risk is (1/t) log((1/N) ∑ exp(t fᵢ)), where fᵢ are the losses. At t = 0 it is the ordinary mean of the losses.

**Problem.** Tilted risk tends to the minimum loss as t → −∞ and to the maximum loss as t → +∞. As t → 0 it tends to the mean, so the value at zero makes it continuous.

**How the definition helps.** For large \|t\|, the exponential of the extreme loss dominates the sum, and the 1/N factor adds only −(log N)/t, which tends to zero (our own). Near t = 0, a first-order expansion of the exponential and the logarithm gives the mean (our own).

**Paper or page:** [On Tilted Losses in Machine Learning: Theory and Applications](https://arxiv.org/abs/2109.06141v3). It says: “R̃(−∞; θ) ≔ lim as t → −∞ of R̃(t; θ) = Ř(θ), R̃(0; θ) ≔ lim as t → 0 of R̃(t; θ) = R̄(θ)”

**Sources:**

- [Tian Li, Ahmad Beirami, Maziar Sanjabi, Virginia Smith, On Tilted Losses in Machine Learning: Theory and Applications, arXiv:2109.06141v3 (2023)](https://arxiv.org/abs/2109.06141v3)

### Transforming forecast and observation together keeps a scoring rule proper

**Remember:** Transform the forecast and the observation together to keep honesty optimal.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory). arXiv stat.ME, math.ST. Level 4: research.

**Definition.** The transformed score applies a measurable map T to both sides: it scores the law of T(Y) under the forecast against the transformed outcome T(y). A score is proper if reporting the true law minimizes expected loss, and strictly proper if only the true law does.

**Problem.** Propriety on transformed laws implies propriety of the transformed score. On standard Borel outcome spaces, strict propriety carries over for an injective measurable transformation T.

**How the definition helps.** Under each true law, a forecast's expected transformed loss equals the original expected loss of its transformed law against the transformed true law (our own). So propriety carries over, and so does strict propriety when distinct forecasts have distinct images, as for injective T on standard Borel spaces (our own).

**Paper or page:** [Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation](https://arxiv.org/abs/2407.00650v1). It says: “is proper relative to ℱ. If S is strictly proper relative to T(ℱ) and T is injective, then the resulting scoring rule S<sub>T</sub> is strictly proper relative to ℱ.”

**Sources:**

- [Romain Pic, Clément Dombry, Philippe Naveau, Maxime Taillardat, Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation, arXiv:2407.00650v1 (2024)](https://arxiv.org/abs/2407.00650v1)

### Under log loss, minimum excess risk equals conditional mutual information

**Remember:** With log loss, not knowing the model costs exactly the mutual information.

*True by definition.* MSC 62C10 (Bayesian problems; characterization of Bayes procedures), 94A17. arXiv cs.LG, cs.IT. Level 4: research.

**Definition.** Under log loss, which charges minus the log probability of the observed outcome, minimum excess risk is the best expected loss for Y using (X,Zⁿ) minus the best using (X,Zⁿ,W). Each best is taken over all conditional forecast laws, and it equals a conditional entropy of Y (our own).

**Problem.** For discrete Y with finite conditional entropy given (X,Zⁿ), minimum excess risk under log loss equals the conditional mutual information I(W;Y given X,Zⁿ).

**How the definition helps.** Gibbs’ inequality makes the true conditional law the best forecast, and its expected log loss is the conditional entropy of Y given the information (our own). The difference H(Y given X,Zⁿ) − H(Y given X,Zⁿ,W) is the conditional mutual information (our own).

**Paper or page:** [Minimum Excess Risk in Bayesian Learning](https://arxiv.org/abs/2012.14868v2). It says: “For the log loss, MERₗₒg = I(W; Y \| X, Zⁿ).”

**Sources:**

- [Aolin Xu, Maxim Raginsky, Minimum Excess Risk in Bayesian Learning, arXiv:2012.14868v2 (2021)](https://arxiv.org/abs/2012.14868v2)

### Flip interventions give treatment effects identifiable without positivity

**Remember:** Flip only where the target treatment is supported.

*Rules out counterexamples. Confidence: medium.* MSC 62D20 (Causal inference from observational studies). arXiv stat.ME. Level 4: research.

**Definition.** A flip intervention keeps each visit's target treatment and switches the other treatment to the target with a specified history-dependent probability. That probability must be zero wherever the target has zero conditional probability at that history (our own).

**Problem.** Assume consistency and sequential exchangeability given observed histories, with flip probabilities determined by the observed law or specified in advance. These longitudinal flip effects remain identifiable even when some treatments have zero probability at some histories.

**How the definition helps.** Each flip gives positive probability only to treatments that occur at that history, so no outcome from an unsupported treatment is needed (our own). The longitudinal g-formula then averages the observed conditional laws along supported histories to identify the intervention mean (our own). An unconditional switch to the target would fail where the target never occurs (our own).

**Paper or page:** [Longitudinal weighted and trimmed treatment effects with flip interventions](https://arxiv.org/abs/2506.09188v1). It says: “With longitudinal data, we then show that flip interventions provide interpretable weighting or trimming on non-baseline covariates and, crucially, yield effects that are identifiable under arbitrary positivity violations.”

**Sources:**

- [Alec McClean, Alexander W. Levis, Nicholas Williams, Ivan Diaz, Longitudinal weighted and trimmed treatment effects with flip interventions, arXiv:2506.09188v1 (2025)](https://arxiv.org/abs/2506.09188v1)

### Posterior equals prior exactly when the likelihood ignores the hidden variable

**Remember:** A flat likelihood leaves the prior unchanged.

*True by definition.* MSC 62F15 (Bayesian inference), 68T07. arXiv stat.ML, cs.LG. Level 4: research.

**Definition.** Fix data x and parameter θ with finite positive marginal likelihood. The likelihood is flat when p(x given z,θ) is the same for prior-almost every z, so the data say nothing about z (our own). Posterior collapse means the posterior law of z equals its prior law.

**Problem.** For fixed x and θ, posterior collapse occurs exactly when the hidden-variable likelihood is flat prior-almost surely (our own).

**How the definition helps.** By Bayes’ rule, the posterior density relative to the prior is the likelihood divided by the marginal likelihood (our own). This ratio is one prior-almost surely exactly when the likelihood is constant prior-almost surely (our own).

**Paper or page:** [Posterior Collapse and Latent Variable Non-identifiability](https://arxiv.org/abs/2301.00537v1). It says: “The local latent variables z are non-identifiable at θ̂ if and only if the posterior of the latent variable z collapses, p(z \| x) = p(z).”

**Sources:**

- [Yixin Wang, David M. Blei, John P. Cunningham, Posterior Collapse and Latent Variable Non-identifiability, arXiv:2301.00537v1 (2023)](https://arxiv.org/abs/2301.00537v1)

### Posterior ranks detect marginal errors

**Remember:** Spread each jump evenly and the true law's rank is uniform.

*Makes the theorem clean to state or prove.* MSC 62F15 (Bayesian inference). arXiv stat.TH. Level 4: research.

**Definition.** Fix the data, a real quantity T and a proposed conditional distribution function F. The randomized rank is R = F(T−) + U(F(T) − F(T−)), with U uniform on \[0,1\] and independent of T. It spreads each jump of F evenly, so R is uniform when T has law F.

**Problem.** At these fixed data, R is uniform on (0, 1) exactly when F is the true conditional distribution function.

**How the definition helps.** Under the true F, the randomized probability integral transform gives a uniform R (our own). Conversely, for each t the events T ≤ t and R ≤ F(t) differ only where R = F(t) (our own). Uniformity gives that event probability zero, so P(T ≤ t) = F(t) (our own).

**Paper or page:** [Simulation-Based Calibration Checking for Bayesian Computation: The Choice of Test Quantities Shapes Sensitivity](https://arxiv.org/abs/2211.02383v3). It says: “if and only if ∀x ∈ \[0, 1\]: q₍φ,𝑓₎(x \| y) = x.”

**Sources:**

- [Simulation-Based Calibration Checking for Bayesian Computation: The Choice of Test Quantities Shapes Sensitivity](https://arxiv.org/abs/2211.02383v3)

### Gaussian noise splits training and testing

**Remember:** Opposite noise weights cancel the shared covariance.

*True by definition.* MSC 62F40 (Bootstrap, jackknife and other resampling methods). arXiv stat.ME. Level 4: research.

**Definition.** Let Y be a Gaussian vector with covariance σ²I, and let W be independent centered Gaussian noise with the same covariance. For α &gt; 0, train on T = Y + √α W and test on S = Y − W/√α; the opposite noise signs make their covariance σ²I − σ²I = 0.

**Problem.** The training and test vectors are independent. For a rule g with finite squared error in dimension n, ‖S − g(T)‖² − nσ²(1/α − α) estimates without bias the expected squared distance between g(T) and an independent copy of T.

**How the definition helps.** Zero covariance makes the jointly Gaussian vectors independent. S has the same mean as a fresh copy of T, but its total variance is larger by nσ²(1/α − α), which the subtraction removes (our own). Estimating risk at the original noise level takes a separate argument.

**Paper or page:** [Unbiased Risk Estimation in the Normal Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2111.09447v3). It says: “is unbiased for the noise-elevated risk”

**Sources:**

- [Unbiased Risk Estimation in the Normal Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2111.09447v3)

### A density ratio turns gradient-free Stein discrepancy into the usual one

**Remember:** Differentiate the easier density, then reweight to check the target.

*True by definition.* MSC 62G10 (Nonparametric hypothesis testing), 60B10, 46E22. arXiv stat.CO, stat.ML. Level 4: research.

**Definition.** For positive densities p and q with q differentiable, use the Stein operator A<sub>q</sub> f = div f + f · ∇log q on a unit ball B of test fields for q. The gradient-free discrepancy Dₚ,ᵩ(π) is the supremum over f in B of Eπ\[(q/p)A<sub>q</sub> f\], the usual Stein test for q with each sample reweighted by q/p (our own).

**Problem.** Assume Z = Eπ\[q/p\] is finite and positive and each weighted test field’s operator value is integrable. With dπ̄ = (q/p)dπ/Z, the discrepancy Dₚ,ᵩ(π) equals Z times Dᵩ,ᵩ(π̄).

**How the definition helps.** The mean of (q/p)h under π equals Z times the mean of h under π̄, so the identity takes one line (our own unpacking). The identity lets known results for the usual discrepancy transfer to the new one. Showing that a small discrepancy forces π close to p still needs separate conditions.

**Paper or page:** [Gradient-Free Kernel Stein Discrepancy](https://arxiv.org/abs/2207.02636v2). It says: “Then π̄ ∈ 𝒫(ℝᵈ) and D<sub>p,q</sub>(π) = Z D<sub>q,q</sub>(π̄).”

**Sources:**

- [Matthew A Fisher, Chris. J Oates, Gradient-Free Kernel Stein Discrepancy, arXiv:2207.02636v2 (2022)](https://arxiv.org/abs/2207.02636v2)

### Characteristic kernels distinguish conditional laws

**Remember:** A characteristic kernel tells laws apart; squaring stops groups from canceling.

*Rules out counterexamples.* MSC 62G10 (Nonparametric hypothesis testing), 68T05. arXiv stat.ML. Level 4: research.

**Definition.** A kernel is characteristic if distinct probability laws have distinct kernel means, their expected feature vectors. Compare two conditional laws given Z by averaging over Z the squared Hilbert space distance between their kernel means.

**Problem.** When the kernel mean exists and is one-to-one, the averaged squared distance is zero exactly when the conditional laws agree almost surely.

**How the definition helps.** A zero average of squares forces equal kernel means almost surely, and a characteristic kernel then forces equal conditional laws (our own proof). The linear kernel on the real line keeps only each law's ordinary mean (our own counterexample). So a point mass at zero and a fair mixture of −1 and 1 look identical in every group.

**Paper or page:** [A Kernel-Based Conditional Two-Sample Test Using Nearest Neighbors (with Applications to Calibration, Regression Curves, and Simulation-Based Inference)](https://arxiv.org/abs/2407.16550v2). It says: “ECMMD²\[ℱ, P₍X∣Z₎, P₍Y∣Z₎\] = 0 if and only if ℙ\[P₍X∣Z₎ = P₍Y∣Z₎\] = 1.”

**Sources:**

- [Anirban Chatterjee, Ziang Niu, Bhaswar B. Bhattacharya. A Kernel-Based Conditional Two-Sample Test Using Nearest Neighbors (with Applications to Calibration, Regression Curves, and Simulation-Based Inference). 2024.](https://arxiv.org/abs/2407.16550v2)

### Weighted permutations restore exchangeability

**Remember:** Weight the shuffled labels by the odds that produced them.

*True by definition.* MSC 62G10 (Nonparametric hypothesis testing). arXiv stat.ME. Level 4: research.

**Definition.** Pool independent samples from two populations, and hide the labels but keep the group sizes and each observation's identity. Draw a new labeling with probability proportional to the product of the density ratio over the observations it labels second. When the ratio is correct, this is the conditional law of the labeling given the pool (our own).

**Problem.** Suppose the second population density equals the first times a known positive function, up to a constant. Given the unlabeled pool, permuting the original labeling and independent weighted redraws leaves their joint law unchanged.

**How the definition helps.** Each labeling's likelihood is the product of first-population densities over the whole pool times the density ratio over the observations labeled second (our own). The common product cancels, so weighted redraws have the same conditional law as the original labeling and are exchangeable with it (our own). Uniform relabeling ignores the density difference and loses this.

**Paper or page:** [Nonparametric inference for ratios of densities via uniformly valid and powerful permutation tests](https://arxiv.org/abs/2505.24529v2). It says: “Then the sequence (Z, Z⁽¹⁾, …, Z⁽ᴴ⁾) is exchangeable.”

**Sources:**

- [Nonparametric inference for ratios of densities via uniformly valid and powerful permutation tests](https://arxiv.org/abs/2505.24529v2)

### With polynomial test functions, zero Stein discrepancy means the first moments agree

**Remember:** Polynomial test functions make the discrepancy check finitely many moments.

*Makes the theorem clean to state or prove.* MSC 62G10 (Nonparametric hypothesis testing), 60B10. arXiv stat.CO, stat.ML. Level 4: research.

**Definition.** For a Gaussian density q, the Stein operator Af = Δf + ∇log q · ∇f gives every polynomial f a transform with mean zero under q. The polynomial Stein discrepancy checks the expected transform of every monomial through degree r under the comparison law, and is zero when all vanish (our own).

**Problem.** For a nonsingular Gaussian target and a comparison law with finite moments through degree r, zero discrepancy is equivalent to agreement of all those moments.

**How the definition helps.** After whitening, A is a Gaussian generator whose eigenfunctions are products of Hermite polynomials, with nonzero eigenvalues at every positive degree (our own). So the transforms of monomials through degree r span all polynomials of degree at most r with Gaussian mean zero, and zero discrepancy matches all moments through degree r (our own).

**Paper or page:** [The Polynomial Stein Discrepancy for Assessing Moment Convergence](https://arxiv.org/abs/2412.05135v1). It says: “In the Bernstein-von Mises limit, where the posterior has a symmetric positive-definite covariance matrix Σ, PSD = 0 if and only if the multi-index moments of P and Q match up to order r.”

**Sources:**

- [Narayan Srinivasan, Matthew Sutton, Christopher Drovandi, Leah F South, The Polynomial Stein Discrepancy for Assessing Moment Convergence, arXiv:2412.05135v1 (2024)](https://arxiv.org/abs/2412.05135v1)

### Calibrating only against units that could have been selected gives conditional coverage

**Remember:** Calibrate against the cases that could have been selected instead.

*Makes the theorem clean to state or prove.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62G30. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** For candidate label y, keep only the calibration units that, if swapped into the test position, would still be selected with the same selection type, and compute scores equivariantly. Accept y when fewer than ⌈(1−α)m⌉ of the m candidate and retained scores are strictly smaller than the candidate's score.

**Problem.** Suppose the selection rule does not depend on the order of the calibration units, and the data are exchangeable. Then the prediction set covers the selected unit's outcome with probability at least 1 − α, conditional on that selection.

**How the definition helps.** Given the selection event, the test score is exchangeable with the retained scores, so the usual rank argument applies (our own unpacking). Ordinary conformal sets can fail for selected units, because selection favors unusual cases.

**Paper or page:** [Confidence on the Focal: Conformal Prediction with Selection-Conditional Coverage](https://arxiv.org/abs/2403.03868v3). It says: “This paper presents a general framework for constructing a prediction set with finite-sample exact coverage, conditional on the unit being selected by a given procedure.”

**Sources:**

- [Ying Jin, Zhimei Ren, Confidence on the Focal: Conformal Prediction with Selection-Conditional Coverage, arXiv:2403.03868v3 (2024)](https://arxiv.org/abs/2403.03868v3)

### Consonant plausibility makes conformal p-values valid for every assertion at once

**Remember:** A set is at least as plausible as any outcome it contains.

*True by definition. Confidence: medium.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62A01. arXiv stat.ME, math.ST. Level 4: research.

**Definition.** The plausibility of a nonempty assertion A is the largest conformal p-value among its members, sup{p(y) : y ∈ A}, and the empty assertion gets zero. So any assertion that contains the true value is at least as plausible as the true value itself.

**Problem.** Assume the conformal p-value at the true next observation is valid under the sampling law. For each α ∈ \[0,1\], the probability that some assertion containing that observation has plausibility at most α is at most α (our own).

**How the definition helps.** Every assertion containing the true observation has plausibility at least its p-value, so one event covers them all: that p-value is at most α (our own). Conformal validity bounds the probability of this event by α.

**Paper or page:** [Validity, consonant plausibility measures, and conformal prediction](https://arxiv.org/abs/2001.09225v3). It says: “We go on to show that both types of prediction validity can be achieved by interpreting the conformal prediction output as the contour function of a consonant plausibility measure.”

**Sources:**

- [Leonardo Cella, Ryan Martin, Validity, consonant plausibility measures, and conformal prediction, International Journal of Approximate Reasoning, volume 141, pages 110--130, 2022](https://arxiv.org/abs/2001.09225v3)

### Rank cutoffs make the coverage of split conformal prediction distribution free

**Remember:** Only the rank positions matter when scores are exchangeable and distinct.

*True by definition.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62G30. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** For n calibration scores and 0 &lt; α &lt; 1, put k = ⌈(1−α)(n+1)⌉. Accept a candidate whose score is at most the kth smallest calibration score, or every candidate if k = n+1, so coverage depends only on the rank positions of the scores (our own).

**Problem.** If n calibration and m future scores are jointly exchangeable and almost surely distinct, the coverage fraction’s law depends only on n, α and m. For fixed n with k ≤ n, the fraction converges in distribution to Beta(k,n+1−k) as m grows.

**How the definition helps.** Exchangeable distinct scores make all pooled orderings equally likely, and coverage counts the future scores below the kth calibration score, so its law matches that for independent uniform scores (our own). There the fraction tends to the kth of n uniform order statistics, which has law Beta(k,n+1−k) (our own). For k = n+1, everything is covered (our own).

**Paper or page:** [Universal distribution of the empirical coverage in split conformal prediction](https://arxiv.org/abs/2303.02770v2). It says: “Both distributions are universal, being determined solely by the nominal miscoverage level and the calibration sample size”

**Sources:**

- [Paulo C. Marques F, Universal distribution of the empirical coverage in split conformal prediction, Statistics &amp; Probability Letters, Volume 219, 2025, 110350.](https://arxiv.org/abs/2303.02770v2)

### Residual correction gives doubly robust coverage

**Remember:** Correct a target prediction with a weighted source residual.

*True by definition.* MSC 62G15 (Nonparametric tolerance and confidence regions). arXiv stat.ME. Level 4: research.

**Definition.** The corrected coverage estimates target coverage of a fixed prediction set as the target mean of a coverage prediction m(X) plus a source correction, the source mean of w(X)(C − m(X)). Here C indicates coverage and w(X) estimates the target-to-source input density ratio.

**Problem.** Assume a common outcome law given inputs, target inputs absolutely continuous relative to source inputs, and integrable terms. The corrected population average equals target coverage if either m or w is correct.

**How the definition helps.** A correct m makes the correction's mean zero, since the common outcome law gives the same conditional coverage in both populations (our own). A correct w turns the correction into the target mean of C − m(X), which cancels the prediction term (our own).

**Paper or page:** [Doubly Robust Calibration of Prediction Sets under Covariate Shift](https://arxiv.org/abs/2203.01761v3). It says: “holds true, whenever either of the following holds true:”

**Sources:**

- [Doubly Robust Calibration of Prediction Sets under Covariate Shift](https://arxiv.org/abs/2203.01761v3)

### Classifier odds recover copula density

**Remember:** The odds of joint against uniform are the copula density.

*True by definition.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas). arXiv stat.ML. Level 4: research.

**Definition.** Transform each coordinate by its continuous marginal distribution function; the copula density is the density of the resulting vector on the unit cube, when it exists. Label a point joint if drawn from this vector's law and uniform if drawn from the uniform law on the cube, each with probability ½.

**Problem.** When the transformed joint law has a density, the true conditional odds of the joint label equal the copula density almost everywhere on the cube.

**How the definition helps.** The uniform class has density one and the class probabilities are equal, so by Bayes' rule the conditional odds are the copula density divided by one (our own). A classifier, a rule that predicts the label, then estimates these odds from data.

**Paper or page:** [Your copula is a classifier in disguise: classification-based copula density estimation](https://arxiv.org/abs/2411.03014v2). It says: “we train a classifier to distinguish samples from the joint density from those of the product of independent marginals, recovering the copula density in the process.”

**Sources:**

- [Your copula is a classifier in disguise: classification-based copula density estimation](https://arxiv.org/abs/2411.03014v2)

### Counting only interior mass guarantees a halfspace that attains halfspace depth

**Remember:** Count only the open side, so boundary mass may slip away.

*True by definition. Confidence: medium.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas), 62R20. arXiv math.ST. Level 4: research.

**Definition.** The halfspace depth of x for a finite Borel measure on ℝᵈ is the infimum of the masses of closed halfspaces containing x. A generalized minimizing halfspace at x is a closed halfspace with x on its boundary whose open interior has mass at most the depth.

**Problem.** Every finite measure has a generalized minimizing halfspace at every point. If every hyperplane through x has zero mass, some closed halfspace containing x has mass equal to the depth.

**How the definition helps.** Counting only the interior lets mass on the boundary escape in a limit, so a limit of near-minimizing halfspaces always qualifies (our own). Shift them to pass through x, take a convergent subsequence of unit normals, and apply Fatou's lemma to the interiors (our own). When hyperplanes through x carry no mass, interior and closed masses agree, so the limit attains the depth (our own).

**Paper or page:** [Halfspace depth for general measures: The ray basis theorem and its consequences](https://arxiv.org/abs/2106.00616v1). It says: “For any μ ∈ ℳ(ℝᵈ) there exists a generalized minimizing halfspace of μ at any point x ∈ ℝᵈ. If μ is smooth at x, then there exists a minimizing halfspace of μ at x.”

**Sources:**

- [Petra Laketa, Stanislav Nagy, Halfspace depth for general measures: The ray basis theorem and its consequences, Stat Papers 63, 849-883 (2022)](https://arxiv.org/abs/2106.00616v1)

### Martingale difference divergence is zero exactly when the conditional mean is constant

**Remember:** The centered Y is uncorrelated with every wave of X.

*Makes the theorem clean to state or prove.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 62H15, 60E10. arXiv math.ST. Level 4: research.

**Definition.** For real Y and X in ℝᵖ, the function g(s) = E\[(Y − E\[Y\]) exp(i⟨s,X⟩)\] tests the centered Y against every Fourier wave of X. Squared martingale difference divergence integrates \|g(s)\|²/(cₚ‖s‖ᵖ⁺¹) ds over nonzero s in ℝᵖ, with cₚ = π⁽ᵖ⁺¹⁾ᐟ²/Γ((p+1)/2) (our own).

**Problem.** If Y and X have finite second moments, the divergence is zero exactly when E\[Y \| X\] = E\[Y\] almost surely.

**How the definition helps.** The weight is positive and g is continuous, so zero divergence means g = 0 everywhere (our own). But g is the Fourier transform of the signed measure with density E\[Y \| X\] − E\[Y\] relative to the law of X (our own). Fourier uniqueness makes g = 0 equivalent to E\[Y \| X\] = E\[Y\] almost surely (our own).

**Paper or page:** [Testing the martingale difference hypothesis using martingale difference divergence function](https://arxiv.org/abs/2306.13963v2). It says: “In particular, the measure equals zero if and only if the considered time-series components are conditionally mean-independent.”

**Sources:**

- [Luca Mattia Rolla, Testing the martingale difference hypothesis using martingale difference divergence function, arXiv:2306.13963v2 (2023)](https://arxiv.org/abs/2306.13963v2)
- [Xiaofeng Shao and Jingsi Zhang, Martingale Difference Correlation and Its Use in High-Dimensional Variable Screening (2014)](https://doi.org/10.1080/01621459.2014.887012)

### Separating joint laws from products makes a kernel criterion detect independence

**Remember:** The kernel tells every joint law from its independent version.

*True by definition.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 46E22, 62H15. arXiv stat.ML, math.ST. Level 4: research.

**Definition.** A kernel sends each probability law to a mean feature vector in a Hilbert space, and it is characteristic if distinct laws get distinct means. A kernel on a product space is ℐ-characteristic if every joint law gets a different mean from the product of its marginals, unless the two laws are equal.

**Problem.** For bounded characteristic kernels k₁ and k₂ on two second-countable spaces, spaces with a countable base, the Hilbert–Schmidt independence criterion of k₁ ⊗ k₂ is zero exactly when the variables are independent. This criterion is the squared distance between the means of the joint law and of the product of the marginals.

**How the definition helps.** The criterion is zero exactly when the two means agree, and ℐ-characteristic turns that into joint law equals product law, which is independence. The work is Theorem 3(i): the product of two characteristic kernels is ℐ-characteristic. By our own observation, this asks less than separating every pair of laws on the product space.

**Paper or page:** [Characteristic and Universal Tensor Product Kernels](https://arxiv.org/abs/1708.08157v4). It says: “If k₁ and k₂ are characteristic, then k₁ ⊗ k₂ is ℐ-characteristic.”

**Sources:**

- [Zoltan Szabo, Bharath K. Sriperumbudur, Characteristic and Universal Tensor Product Kernels, Journal of Machine Learning Research 18(233):1-29, 2018](https://arxiv.org/abs/1708.08157v4)
- [Arthur Gretton, Olivier Bousquet, Alex Smola, and Bernhard Schölkopf, Measuring Statistical Dependence with Hilbert-Schmidt Norms (2005)](https://doi.org/10.1007/11564089_7)

### Summing rank dependence over all subsets detects dependence that pairs miss

**Remember:** Add every subset’s dependence term so no term can cancel another.

*Rules out counterexamples.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 62H15, 49Q22. arXiv stat.ME, math.ST. Level 4: research.

**Definition.** Replace each absolutely continuous vector variable Xⱼ by its population optimal transport rank Rⱼ, its transport map to the uniform law on a cube. For each subset S of at least two variables, integrate \|E∏ⱼ∈S(exp(i⟨tⱼ,Rⱼ⟩) − E exp(i⟨tⱼ,Rⱼ⟩))\|² against the product distance-covariance frequency weights. Squared rank joint distance covariance adds these nonnegative integrals with strictly positive weights (our own).

**Problem.** For any positive weights, rank joint distance covariance is zero exactly when the variables are mutually independent (Proposition 2.10).

**How the definition helps.** A positive-weight sum of nonnegative terms is zero only if every subset term is zero, so no dependence can cancel (our own). Expanding by subset size then factors each joint characteristic function of the ranks, and ranks preserve independence under absolute continuity (our own). Two independent uniforms and their sum modulo one are pairwise independent but jointly dependent, which pairs alone miss (our own).

**Paper or page:** [Distribution-free joint independence testing and robust independent component analysis using optimal transport](https://arxiv.org/abs/2211.15639v2). It says: “For any vector positive weights C, RJdCov²(X; C) = 0 if and only if (X₁, X₂, …, Xᵣ) are mutually independent.”

**Sources:**

- [Ziang Niu, Bhaswar B. Bhattacharya, Distribution-free joint independence testing and robust independent component analysis using optimal transport, arXiv:2211.15639v2 (2022)](https://arxiv.org/abs/2211.15639v2)

### Adjusted maxima allow asynchronous tests

**Remember:** Shrink the running maximum until its expectation is back below one.

*True by definition.* MSC 62J15 (Paired and multiple comparisons; multiple testing), 62L10. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** An e-process is a nonnegative process that starts at one and has expectation at most one at every bounded stopping time under its null. Its adjusted running maximum applies a nonnegative nondecreasing function A to the running maximum, with ∫₁∞ A(x)/x² dx ≤ 1. This keeps the expectation at most one even when the value is read at any time (our own).

**Problem.** Read the K adjusted values at possibly different times and reject the hypotheses with the k largest values, for the largest k whose kth largest value is at least K/(kα), or none if no k qualifies. For 0 &lt; α &lt; 1, the expected fraction of rejections that are false is at most α.

**How the definition helps.** Each false rejection adds at most α/K times its adjusted value to the false fraction, which is zero without rejections, so expectation at most one per null suffices (our own). Ville's inequality gives the null running maximum a tail at most 1/x for x ≥ 1, and the integral condition turns this into expectation at most one (our own). Summing over the nulls gives the bound (our own).

**Paper or page:** [Carefree multiple testing with e-processes](https://arxiv.org/abs/2501.19360v2). It says: “The e-BH procedure applied to the adjusted running maxima of e-processes controls the FDR-sup at level K₀ α / K.”

**Sources:**

- [Carefree multiple testing with e-processes (arXiv 2501.19360v2)](https://arxiv.org/abs/2501.19360v2)

### Swappable knockoffs give fair signs

**Remember:** A null feature cannot tell its original from its copy.

*True by definition.* MSC 62J15 (Paired and multiple comparisons; multiple testing). arXiv stat.ME. Level 4: research.

**Definition.** Pair each input with a copy so that swapping any set of inputs with their copies leaves the joint law of inputs and copies unchanged. The copies are conditionally independent of the outcome given the original inputs. Each pair gets one score, and swapping that pair flips the sign of its score and leaves the other scores unchanged.

**Problem.** Call an input null if it is independent of the outcome given all other inputs. Given all score magnitudes and all scores for the other inputs that are not null, the nonzero null scores have independent, equally likely signs.

**How the definition helps.** For a null input, swapping it with its copy leaves the law of the data unchanged yet flips only its own score. Separate swaps connect any two sign patterns of the null scores, so every pattern has the same conditional probability. The work is constructing copies with the required joint law.

**Paper or page:** [FDR Controlled Multiple Testing for Union Null Hypotheses: A Knockoff-based Approach](https://arxiv.org/abs/2106.12719v3). It says: “(W₁, ⋯, Wₚ) =ᵈ (W₁ · ε₁, ⋯, Wₚ · εₚ).”

**Sources:**

- [FDR Controlled Multiple Testing for Union Null Hypotheses: A Knockoff-based Approach](https://arxiv.org/abs/2106.12719v3)

### Bounding every loss by one e-value lets the data choose the loss

**Remember:** One pointwise limit protects against every later choice of loss.

*True by definition.* MSC 62L10 (Sequential statistical analysis), 62C05. arXiv stat.TH. Level 4: research.

**Definition.** An e-variable is a nonnegative statistic S whose expectation is at most one under every law in the null hypothesis. A decision rule is compatible with S if, for every decision task, the loss of the rule's decision under the null is at most S.

**Problem.** Under every null law, the expected loss of a compatible rule is at most one even when the data select the task measurably.

**How the definition helps.** Compatibility bounds the loss of every task by the same S, so it also bounds the loss of whichever task the data select. Taking expectations under the null gives expected loss at most E\[S\] ≤ 1. The paper also proves a converse: every rule with this Type-I risk control is compatible with some e-variable.

**Paper or page:** [Beyond Neyman-Pearson: e-values enable hypothesis testing with a data-driven alpha](https://arxiv.org/abs/2205.00901v3). It says: “With e-values it is straightforward, since they provide Type-I risk control in a generalized Neyman-Pearson setting with the decision task (a general loss function) determined post-hoc, after observation of the data”

**Sources:**

- [Peter Grünwald, Beyond Neyman-Pearson: e-values enable hypothesis testing with a data-driven alpha, arXiv:2205.00901v3 (2022)](https://arxiv.org/abs/2205.00901v3)

### Replacing each forecast by its running bin average removes the calibration penalty

**Remember:** Keep the forecaster's bins, but forecast each bin's running average outcome.

*Makes the theorem clean to state or prove.* MSC 62M20 (Inference from stochastic processes and prediction), 91A26. arXiv econ.TH, stat.ML. Level 4: research.

**Definition.** Group the rounds by forecast value, called bins. The refinement score averages the squared deviations of outcomes from their bin's mean outcome, so it is the best Brier score, the average squared gap between forecast and outcome, that one forecast per bin can reach.

**Problem.** Take forecasts from a fixed finite set in \[0,1\] and outcomes in \[0,1\]. If each round instead forecasts the past mean outcome of its bin, using any value in \[0,1\] on the first visit, then after t rounds its Brier score is at most the original refinement score plus O((log t)/t).

**How the definition helps.** The Brier score splits into calibration plus refinement, so refinement is what remains once each bin forecasts its own mean outcome (our own explanation). The new rule tracks that mean using past outcomes only, so it pays only a small learning cost. Theorem 3 bounds that cost by O((log t)/t).

**Paper or page:** ["Calibeating": Beating Forecasters at Their Own Game](https://arxiv.org/abs/2209.04892v2). It says: “The Brier score is the sum of the calibration score and the refinement score”

**Sources:**

- [Dean P. Foster, Sergiu Hart, "Calibeating": Beating Forecasters at Their Own Game, arXiv:2209.04892v2 (2022); Theoretical Economics 18 (2023), 4, 1441-1474](https://arxiv.org/abs/2209.04892v2)

### Metric restriction makes learning finite

**Remember:** Training differences only see the part of the metric on their span.

*True by definition.* MSC 62R07 (Statistical aspects of big data and data science). arXiv stat.ML. Level 4: research.

**Definition.** Learn a metric on a real Hilbert space through a bounded self-adjoint operator A that is strictly positive on nonzero vectors, setting the squared distance of a difference v to ⟨v, Av⟩. Compressing A to the training span projects Av back onto that span, and this keeps every training distance unchanged (our own).

**Problem.** For a loss depending only on training distances, the infimum over these operators equals the infimum on the training span. Every minimizer on the span extends to the whole space.

**How the definition helps.** Compression keeps every training distance, since projecting Av does not change its inner product with a training difference v (our own). Conversely, an admissible operator on the span extends to the whole space by acting as the identity on the orthogonal complement. So both searches reach the same loss values, and minimizers on the span extend.

**Paper or page:** [Representer Theorems for Metric and Preference Learning: Geometric Insights and Algorithms](https://arxiv.org/abs/2304.03720v2). It says: “And both solutions have the same optimal value.”

**Sources:**

- [Peyman Morteza (2025), Representer Theorems for Metric and Preference Learning: Geometric Insights and Algorithms](https://arxiv.org/abs/2304.03720v2)
