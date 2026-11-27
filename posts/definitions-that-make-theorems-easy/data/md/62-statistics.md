### Counting observations below a threshold gives order statistic laws

**Remember:** The kth smallest is at most x when at least k observations are.

*Makes the theorem clean to state or prove.* MSC 62G30 (Order statistics; empirical distribution functions), 60E05. arXiv math.PR. Level 1: early undergraduate.

**Definition.** For 1 ≤ k ≤ n, the kth order statistic is the kth smallest of n observations. Each occurrence of a repeated value occupies its own place.

**Problem.** Take n independent observations with the same distribution function F, where F(x) is the chance of a value at most x. The chance that the kth smallest is at most x equals the chance of at least k successes in n independent trials with probability F(x).

**How the definition helps.** Counting repeated observations makes the rank test exactly a test on the number of values at or below x (our own). The binomial counting theorem supplies the tail probability, with no density or tie assumption (our own).

**Wikipedia:** [Order statistic](https://en.wikipedia.org/wiki/Order_statistic). It says: “P(X₍ₖ₎ ≤ x) = P(there are at least k observations less than or equal to x)”

**Sources:** none listed. No primary source with a working link was found.

### An envelope makes rejection sampling exact

**Remember:** An envelope lets acceptance multiply the proposal back into the target.

*Rules out counterexamples.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO. Level 2: later undergraduate.

**Definition.** Choose a proposal density g and a finite constant M such that the target density f satisfies f ≤ Mg almost everywhere. Draw from g and accept with probability f divided by Mg. Repeat independent attempts until one is accepted.

**Problem.** The first accepted draw has density f. Without the envelope condition, clipping the acceptance probability at one need not give that density.

**How the definition helps.** The envelope makes the acceptance weight a probability, so multiplying it by g gives f/M (our own). Conditioning on acceptance then gives density f (our own). For a uniform proposal on \[0,1\], take f(x) = 2x and M = 1 (our own). Clipping the acceptance probability at one gives density proportional to min(2x,1) (our own).

**Wikipedia:** [Rejection sampling](https://en.wikipedia.org/wiki/Rejection_sampling). It says: “Accepting only pairs such that u &lt; f(x)/(Mg(x)) then produces pairs (x,v) uniformly distributed over the subgraph of f(x)”

**Sources:**

- [G. Casella, C. P. Robert and M. T. Wells, Generalized Accept-Reject sampling schemes](https://doi.org/10.1214/lnms/1196285403)

### Antithetic pairs integrate lines exactly

**Remember:** Pair a draw with its reflection so their sum is fixed.

*True by definition.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO. Level 2: later undergraduate.

**Definition.** For simulation on \[0,1\], pair a uniform draw U with 1 − U. Average the two function values rather than drawing two independent points.

**Problem.** This paired estimator integrates every affine function on \[0,1\] with zero variance.

**How the definition helps.** Reflection fixes the pair’s sum at one, so averaging any affine function gives its midpoint value (our own). For a function of the form ax + b, that midpoint value equals its integral on \[0,1\] (our own). Independent draws lack this cancellation (our own). For nonlinear functions, the work lies in finding pairs whose deviations tend to cancel (our own).

**Paper or page:** [Living on the Edge: An Unified Approach to Antithetic Sampling](https://arxiv.org/abs/2110.15124v2). It says: “CCV are marginally standard uniform and constant in sum.”

**Sources:**

- [Living on the Edge: An Unified Approach to Antithetic Sampling (arXiv 2110.15124v2)](https://arxiv.org/abs/2110.15124v2)

### Completeness makes the best unbiased estimator unique

**Remember:** A complete statistic has no non-zero function that is unbiased for zero.

*Makes the theorem clean to state or prove.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T is complete if every measurable g with Eθ\[g(T)\] = 0 for all θ satisfies g(T) = 0 almost surely under every θ.

**Problem.** Let T be complete and sufficient, and let h(T) be an unbiased estimator with finite variance under every parameter value. Then h(T) uniquely minimizes variance uniformly among unbiased estimators, up to almost sure equality under every parameter value.

**How the definition helps.** Rao–Blackwell conditioning turns each competing estimator into an unbiased function of T without increasing variance (our own). Its difference from h(T) has mean zero under every parameter, so completeness makes them equal almost surely (our own). Equality of variances requires the competitor’s conditional variance to vanish, giving uniqueness (our own).

**Wikipedia:** [Completeness (statistics)](https://en.wikipedia.org/wiki/Completeness_%28statistics%29), [Lehmann–Scheffé theorem](https://en.wikipedia.org/wiki/Lehmann%E2%80%93Scheff%C3%A9_theorem). It says: “Most parametric models have a sufficient statistic which is not complete. This is important because the Lehmann–Scheffé theorem cannot be applied to such models.”

**Sources:** none listed. No primary source with a working link was found.

### Factored likelihood lets likelihood ratio tests use only sufficient statistics

**Remember:** Both fits carry the same data-only factor, so the ratio forgets it.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** For countable data, T is sufficient if there exist nonnegative functions h and g with Pθ(X=x) = h(x)g(θ,T(x)) for every θ and x. This factorization is equivalent to a parameter-independent conditional law of X given T wherever defined.

**Problem.** Compare the best likelihood under a null hypothesis with the best likelihood over the full model, using suprema if maxima are absent. If the full supremum is positive and finite, their ratio depends on the data only through T.

**How the definition helps.** The same factor h multiplies both suprema, so it cancels from their ratio (our own). The work goes into the factorization theorem, which guarantees the product form from the conditional-law definition.

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “the likelihood's dependence on θ is only in conjunction with T(X).”

**Sources:** none listed. No primary source with a working link was found.

### Factoring the probability mass shows which statistic is sufficient

**Remember:** On each set of equal statistics, the parameter factor cancels.

*Makes the theorem clean to state or prove.* MSC 62B05 (Sufficient statistics and fields). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T is sufficient if one parameter-independent conditional law describes the data given each value of T whenever that value has positive probability. A factorization of the data probability has the form h(x)g(θ,T(x)), with nonnegative factors and h independent of the parameter θ.

**Problem.** In a countable sample space, T is sufficient exactly when the joint mass function has this factorization.

**How the definition helps.** When we fix T and normalize the masses, the parameter factor g cancels (our own). For the reverse implication, the work goes into writing each joint mass as a parameter-free conditional mass times the mass of T (our own).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “the density ƒ can be factored into a product such that one factor, h, does not depend on θ and the other factor, which does depend on θ, depends on x only through T(x).”

**Sources:**

- [Halmos and Savage (1949), Application of the Radon-Nikodym Theorem to the Theory of Sufficient Statistics](https://doi.org/10.1214/aoms/1177730032)

### Natural statistics add when exponential family observations are pooled

**Remember:** Add the statistics because multiplying densities adds their exponents.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62E10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** An exponential family in natural parameters writes its density as h(x) exp\[η·T(x) − A(η)\]. The parameter vector η multiplies the data summary T(x) by a dot product, and A normalizes the density. A summary is sufficient if, given its value, the conditional law of the data no longer depends on the parameter.

**Problem.** For independent observations from the same family member, the sum of their T values is sufficient for η. Its number of components stays fixed as the sample grows.

**How the definition helps.** The exponent makes independent likelihood factors combine by adding their T values (our own). This gives the product form required by the factorization theorem, which establishes sufficiency without computing the conditional law directly (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “the dimension of the sufficient statistic does not grow with the data size”

**Sources:** none listed. No primary source with a working link was found.

### Sufficiency makes the Rao–Blackwell estimator computable from the data

**Remember:** Given a sufficient statistic, what is left of the data says nothing about θ.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T(X) is a function of the data X. It is sufficient for the parameter θ when the conditional distribution of X given T(X) does not depend on θ.

**Problem.** For a square-integrable estimator δ(X) and a sufficient statistic T, E\[δ(X) ∣ T\] is an estimator with mean squared error no larger than δ’s.

**How the definition helps.** Sufficiency gives one conditional data law for all parameter values, so conditioning δ gives the same function of T throughout the model. Conditional Jensen’s inequality for squared error and then averaging give the risk bound (our own).

**Wikipedia:** [Rao–Blackwell theorem](https://en.wikipedia.org/wiki/Rao%E2%80%93Blackwell_theorem), [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “Generally, the conditional expected value of one function of these data given another function of these data does depend on θ, but the very definition of sufficiency given above entails that this one does not.”

**Sources:**

- [Blackwell, D. (1947). Conditional expectation and unbiased sequential estimation. Annals of Mathematical Statistics 18, 105–110.](https://doi.org/10.1214/aoms/1177730497)
- [Halmos, P. R.; Savage, L. J. (1949). Application of the Radon–Nikodym theorem to the theory of sufficient statistics. Annals of Mathematical Statistics 20, 225–241.](https://doi.org/10.1214/aoms/1177730032)
- [Fisher, R. A. (1922). On the mathematical foundations of theoretical statistics. Philosophical Transactions of the Royal Society A 222, 309–368.](https://doi.org/10.1098/rsta.1922.0009)

### A support that does not move gives the Cramér–Rao bound

**Remember:** If the edge of the data moves with θ, Cramér–Rao can fail.

*Rules out counterexamples.* MSC 62B10 (Statistical aspects of information-theoretic topics), 62F10. arXiv stat.TH, math.ST. Level 2: later undergraduate.

**Definition.** Consider densities pθ differentiable in a real parameter θ on an open interval, with common positive support. Require differentiation under the normalization integral, and define the score Sθ = ∂θ log pθ(X). The Fisher information Iθ = Eθ\[Sθ²\] must be positive and finite.

**Problem.** For every unbiased estimator T of θ with finite variance, Varθ(T) ≥ 1/Iθ if differentiation passes under the integral for Eθ\[T\].

**How the definition helps.** Differentiating normalization gives Eθ\[Sθ\]=0, while differentiating unbiasedness gives Eθ\[TSθ\]=1 (our own). Cauchy–Schwarz then gives 1 ≤ Varθ(T)Iθ (our own). The uniform model on \[0,θ\] has moving support, so differentiating its normalization also produces a boundary term.

**Wikipedia:** [Fisher information](https://en.wikipedia.org/wiki/Fisher_information), [Cramér–Rao bound](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_bound). It says: “It is easy to find an example of a density that does not satisfy the regularity conditions: The density of a Uniform(0, θ) variable fails to satisfy conditions 1 and 3.”

**Sources:**

- [R. A. Fisher, Theory of Statistical Estimation, Mathematical Proceedings of the Cambridge Philosophical Society 22 (1925)](https://doi.org/10.1017/S0305004100009580)

### Expected log likelihood curvature makes Fisher information add

**Remember:** Add the log likelihoods and their expected curvatures add.

*True by definition.* MSC 62B10 (Statistical aspects of information-theoretic topics), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** For a scalar parameter, Fisher information is the expected negative second derivative of the log likelihood. Its equivalent score formula uses the variance of the first derivative, called the score, under the conditions below.

**Problem.** For independent observations, their Fisher information values add. Assume positive densities on fixed supports, integrable derivatives in the formulas, and permission to differentiate the normalization integrals twice under the integral sign.

**How the definition helps.** Independence makes log likelihoods add, so their second derivatives and expectations add too (our own). The work goes into differentiating the density normalization twice to show that expected negative curvature equals score variance.

**Wikipedia:** [Fisher information](https://en.wikipedia.org/wiki/Fisher_information). It says: “the Fisher information will necessarily be the sum of the single-sample Fisher information values, one for each single sample from its distribution.”

**Sources:**

- [Fisher (1922), On the Mathematical Foundations of Theoretical Statistics](https://doi.org/10.1098/rsta.1922.0009)

### Averaging posterior loss makes Bayes decisions pointwise

**Remember:** Choose the lowest loss after each observation, then average.

*True by definition.* MSC 62C10 (Bayesian problems; characterization of Bayes procedures), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Given a prior for θ and a sampling law for X given θ, the Bayes risk of a decision rule δ is E\[L(θ,δ(X))\]. At observation x, the posterior expected loss of action a is E\[L(θ,a) ∣ X=x\].

**Problem.** Suppose observations and actions take finitely many values and all expected losses are finite. Choosing an action of least posterior expected loss at every observation of positive probability minimizes Bayes risk.

**How the definition helps.** Conditioning writes Bayes risk as a weighted sum of posterior expected losses, one for each observation (our own). Each choice affects only its own term, whose weight is the observation’s probability (our own). The law of total expectation justifies replacing the original joint average by this sum (our own).

**Wikipedia:** [Bayes estimator](https://en.wikipedia.org/wiki/Bayes_estimator). It says: “the estimator which minimizes the posterior expected loss E(L(θ, θ̂) \| x) for each x also minimizes the Bayes risk and therefore is a Bayes estimator.”

**Sources:** none listed. No primary source with a working link was found.

### Inverse inclusion weights recover totals

**Remember:** Weight each observation by the inverse of its chance to appear.

*True by definition.* MSC 62D05 (Sampling theory, sample surveys). arXiv stat.ME, stat.AP. Level 2: later undergraduate.

**Definition.** For each sampled person, divide the observed value by that person’s chance of selection. Add the results to estimate the population total. A common multiplier for everyone would ignore differences in selection probabilities.

**Problem.** In a finite population with positive known inclusion probabilities, this estimator is unbiased for the total. Sample members need not be selected independently.

**How the definition helps.** A member contributes its inflated value only with the probability used to inflate it (our own). Taking expectations thus recovers each member’s original value (our own). The work moves to finding the inclusion probabilities from the survey design and the joint probabilities for variance (our own).

**Wikipedia:** [Horvitz–Thompson estimator](https://en.wikipedia.org/wiki/Horvitz%E2%80%93Thompson_estimator). It says: “Taking the expectation of the estimator we can prove it is unbiased as follows:”

**Sources:**

- [D. G. Horvitz and D. J. Thompson, A Generalization of Sampling Without Replacement from a Finite Universe](https://www.tandfonline.com/doi/full/10.1080/01621459.1952.10483446)

### Independent missingness preserves respondent distributions

**Remember:** If observation ignores the data, observed cases keep the original distribution.

*Rules out counterexamples.* MSC 62D10 (Missing data). arXiv stat.ME, stat.AP. Level 2: later undergraduate.

**Definition.** Call data missing completely at random if the pattern of missing values is independent of the full data. The full data include the values that would have been recorded with complete observation.

**Problem.** If complete observation has positive probability, complete cases have the same data distribution as all cases.

**How the definition helps.** Independence gives every data pattern the same chance of being recorded completely (our own). Conditioning on complete observation therefore preserves every event probability (our own). If only high earners skip an income question, respondents underrepresent high earners (our own). The work lies in justifying independence for the study (our own).

**Wikipedia:** [Missing data](https://en.wikipedia.org/wiki/Missing_data). It says: “the participants with completely observed data are in effect a random sample of all the participants assigned a particular intervention.”

**Sources:**

- [D. B. Rubin, Inference and missing data](https://doi.org/10.1093/biomet/63.3.581)

### Chi-squared ratios give reciprocal F laws and squared t laws

**Remember:** Flip the F ratio or square the t ratio.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60E05. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The F law with degrees of freedom (d₁, d₂) is the law of (X/d₁)/(Y/d₂) for independent chi-squared variables with those degrees of freedom. Student’s t law with n degrees of freedom is the law of Z/√(V/n). Here Z is standard normal, and V is independent chi-squared with n degrees of freedom.

**Problem.** If U has the F law with degrees of freedom (d₁, d₂), then 1/U has the F law with degrees of freedom (d₂, d₁). If T has the t law with n degrees of freedom, then T² has the F law with degrees of freedom (1, n).

**How the definition helps.** The ratio definitions make both results visible from the numerator and denominator (our own). Taking the reciprocal swaps X and Y, while squaring T puts Z² in its numerator (our own). That square has the chi-squared law with one degree of freedom (our own). Rather than transform densities for each claim, we do the work once by deriving the F and t densities from their ratios (our own).

**Wikipedia:** [F-distribution](https://en.wikipedia.org/wiki/F-distribution), [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “If X ∼ F(d₁, d₂) then X⁻¹ ∼ F(d₂, d₁).”

**Sources:** none listed. No primary source with a working link was found.

### Pooling residual directions gives the exact two-sample t law

**Remember:** Pool the squared residuals and count all their directions.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Pool both samples’ squared deviations from their respective means and divide the sum by n+m−2. This gives the pooled variance V, instead of an equal-weight average of the two sample variances. The pooled standard error is √\[V(1/n + 1/m)\].

**Problem.** Take independent normal samples of sizes n and m, both at least two, with common positive variance. Subtract the true mean difference from the sample difference and divide by the pooled standard error to obtain Student’s t with n+m−2 degrees of freedom.

**How the definition helps.** Dividing each residual sum of squares by the common variance gives independent chi-squared variables with n−1 and m−1 degrees of freedom (our own). Their sum supplies the denominator in the defining t ratio (our own). The normal-sample theorem supplies a standard normal numerator independent of that sum (our own).

**Wikipedia:** [Student's t-test](https://en.wikipedia.org/wiki/Student%27s_t-test). It says: “the total sample size minus two (that is, n₁ + n₂ − 2) is the total number of degrees of freedom, which is used in significance testing.”

**Sources:** none listed. No primary source with a working link was found.

### The chi-squared ratio definition gives Student’s t its normal limit

**Remember:** The chi-squared denominator tends to one, leaving the normal numerator.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60F05. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** Let Z be standard normal and V an independent chi-squared variable with ν degrees of freedom. Student’s t law is the law of Z/√(V/ν). An alternative definition gives the density directly.

**Problem.** As the degrees of freedom ν increase without bound, Student’s t law converges in distribution to the standard normal law.

**How the definition helps.** The ratio definition reduces the limit to showing that the denominator tends to 1 (our own). V/ν has mean 1 and variance 2/ν, so Chebyshev's inequality makes it tend to 1 in probability (our own). Slutsky's theorem then replaces that factor by 1 in the limit (our own). The density proof instead studies both its normalizing constant and its power term (our own).

**Wikipedia:** [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “As the number of degrees of freedom grows, the t distribution approaches the normal distribution with mean 0 and variance 1.”

**Sources:** none listed. No primary source with a working link was found.

### The ratio definition gives the one-sample t law

**Remember:** A normal numerator over an independent chi-squared scale gives Student’s t.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Student’s t with k degrees of freedom is the law of Z/√(V/k), where Z is standard normal. The variable V is the sum of k squared independent standard normals, all independent of Z. Use the divisor n−1 in the sample variance S².

**Problem.** Let X̄ and S be the sample mean and standard deviation of n ≥ 2 independent observations from one normal distribution with positive variance. If the population mean is μ, then √n(X̄ − μ)/S has Student’s t law with n − 1 degrees of freedom.

**How the definition helps.** The ratio definition identifies the law directly from the standardized mean and scaled variance, without calculating a new density (our own). The normal-sample theorem supplies independence and the chi-squared law of the scaled variance.

**Wikipedia:** [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “it is possible to show that these two random variables (the normally distributed one Z and the chi-squared-distributed one V) are independent.”

**Sources:** none listed. No primary source with a working link was found.

### The sum-of-squares definition makes independent chi-squared variables add

**Remember:** Squares plus squares are still squares, so degrees of freedom add.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60E05. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** For each positive integer k, the chi-squared law with k degrees of freedom is the law of ∑ⱼ Zⱼ² for k independent standard normal variables.

**Problem.** Let X and Y be independent chi-squared variables with positive integer degrees of freedom j and k. Then X + Y is chi-squared with j + k degrees of freedom.

**How the definition helps.** Choose j+k independent standard normals and split them into blocks of sizes j and k (our own). Their sums of squares have the joint law of (X,Y) by independence (our own). Adding both blocks gives the defining sum with j+k degrees of freedom.

**Wikipedia:** [Chi-squared distribution](https://en.wikipedia.org/wiki/Chi-squared_distribution). It says: “It follows from the definition of the chi-squared distribution that the sum of independent chi-squared variables is also chi-squared distributed.”

**Sources:** none listed. No primary source with a working link was found.

### A boundary null can break the chi-squared likelihood ratio law

**Remember:** A one-sided boundary can erase half of a squared normal statistic.

*Rules out counterexamples.* MSC 62F03 (Parametric hypothesis testing). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A null mean is interior if some open interval around it lies within the allowed means. The likelihood ratio statistic doubles the difference between the maximum allowed log likelihood and the log likelihood at the null mean.

**Problem.** For independent normal observations with one unrestricted mean and known common positive variance, the statistic under a specified null mean has the one-degree chi-squared law. At null mean zero with only nonnegative means allowed, its law instead mixes a point mass at zero and that chi-squared law equally.

**How the definition helps.** With unrestricted means, the statistic equals Z², where Z is the standardized sample mean under the null (our own). With nonnegative means and null mean zero, the fitted mean is the larger of zero and the sample mean (our own). The statistic then equals max(0,Z)² (our own). A standard normal has equally likely signs independent of its square, giving the stated mixture (our own).

**Wikipedia:** [Wilks' theorem](https://en.wikipedia.org/wiki/Wilks%27_theorem). It says: “The theorem no longer applies when the true value of the parameter is on the boundary of the parameter space”

**Sources:**

- [Wilks (1938), The Large-Sample Distribution of the Likelihood Ratio for Testing Composite Hypotheses](https://doi.org/10.1214/aoms/1177732360)
- [Chernoff (1954), On the Distribution of the Likelihood Ratio](https://doi.org/10.1214/aoms/1177728725)

### A likelihood ratio cutoff makes the most powerful test

**Remember:** Reject where the gain in power beats the cost in false rejections.

*True by definition.* MSC 62F03 (Parametric hypothesis testing). arXiv math.ST. Level 2: later undergraduate.

**Definition.** Let f₀ and f₁ be the data densities under two fixed hypotheses, the null and the alternative. A test has size equal to its null rejection probability and power equal to its alternative rejection probability. For c ≥ 0, the cutoff rule rejects when f₁ &gt; cf₀, accepts when f₁ &lt; cf₀, and may randomize on ties.

**Problem.** At size α, the likelihood ratio cutoff test has greatest power among tests of size at most α. If c is positive and ties never occur under either law, the test is unique except on events of probability zero.

**How the definition helps.** The cutoff maximizes the gain f₁ − cf₀ from rejecting at each outcome. Integrating gives the largest power minus c times size, without searching over whole tests (our own). Choosing the cutoff and tie probabilities to attain size α then gives greatest power. With no ties, changing the rule on a set of positive probability strictly reduces the integrated gain (our own).

**Wikipedia:** [Neyman–Pearson lemma](https://en.wikipedia.org/wiki/Neyman%E2%80%93Pearson_lemma). It says: “then it is a uniformly most powerful (UMP) test in the set of level α tests.”

**Sources:**

- [Neyman and Pearson (1933), On the Problem of the Most Efficient Tests of Statistical Hypotheses](https://doi.org/10.1098/rsta.1933.0009)

### An exponential family orders likelihood ratios by its natural statistic

**Remember:** A larger natural parameter gives a larger likelihood ratio at larger statistics.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62E10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A one-parameter exponential family in natural form writes the density as h(x) exp\[ηT(x) − A(η)\]. The parameter η multiplies the data summary T(x), and A makes the density integrate to one.

**Problem.** Where h(x) is positive, the density at η₁ divided by the density at η₀ increases with T(x) whenever η₁ exceeds η₀.

**How the definition helps.** The log of the density ratio equals (η₁ − η₀)T(x) plus a constant, so its slope is positive (our own). Exponentiation preserves this order (our own). The work lies in rewriting the model in natural form, which identifies the same ordering for every parameter pair (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “A one-parameter exponential family has a monotone non-decreasing likelihood ratio in the sufficient statistic T(x)”

**Sources:** none listed. No primary source with a working link was found.

### Fixing the margins makes Fisher’s exact test independent of nuisance probabilities

**Remember:** Fix the margins, and the common success probability drops out.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62B05. arXiv math.ST. Level 2: later undergraduate.

**Definition.** For two groups of fixed sizes, Fisher’s upper-tail test conditions on their total number of successes. Its p-value is the conditional null probability that the first group records at least its observed number of successes. The test rejects when this probability is at most the chosen level (our own).

**Problem.** For independent trials with the same success probability, conditioning on total successes gives the first group’s count the hypergeometric law of sampling without replacement. An upper-tail Fisher test therefore controls its false rejection probability at the chosen level.

**How the definition helps.** Fixing total successes makes every placement of those successes equally likely, whatever the common success probability. Counting placements gives the conditional law. Choosing a rejection tail with probability at most α for every total also bounds the overall false rejection probability by α (our own).

**Wikipedia:** [Fisher's exact test](https://en.wikipedia.org/wiki/Fisher%27s_exact_test). It says: “Fisher showed that conditional on the margins of the table, a is distributed as a hypergeometric distribution”

**Sources:** none listed. No primary source with a working link was found.

### Profiling the variance makes the regression likelihood ratio an F test

**Remember:** The two tests rank the same improvement in residual squared error.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62J10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Profile likelihood means maximizing over parameters not being tested. For Gaussian regression, profile over the unknown error variance after fitting each of two nested predictor spaces. Partial F divides the improvement in squared error per added direction by the final squared error per residual direction.

**Problem.** Take two nested linear models with fixed predictor spaces of dimensions p &lt; q &lt; n for n observations. With independent normal errors of common positive variance and positive residual error, likelihood ratio tests reject for large partial F.

**How the definition helps.** After maximizing over variance, the likelihood ratio depends only on the ratio of the two residual sums of squares (our own). Each fitted variance equals its model’s residual sum of squares divided by n (our own). Substitution shows that a larger partial F gives a smaller null-to-full likelihood ratio (our own).

**Wikipedia:** [F-test](https://en.wikipedia.org/wiki/F-test). It says: “Since F is a monotone function of the likelihood ratio statistic, the F-test is a likelihood ratio test.”

**Sources:** none listed. No primary source with a working link was found.

### Randomizing at the cutoff makes every test size attainable

**Remember:** Randomize on the tie to hit the target size.

*Rules out counterexamples. Confidence: medium.* MSC 62F03 (Parametric hypothesis testing). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A randomized test assigns a rejection probability between zero and one to each outcome. A cutoff test rejects above the cutoff, accepts below it, and can use a fixed rejection probability at the cutoff. Its size is its rejection probability under the null hypothesis.

**Problem.** For a fixed null law on finitely many outcomes, a test that rejects large statistic values can attain any size from zero to one.

**How the definition helps.** Randomization fills the gap between the null probabilities of exceeding and reaching the cutoff (our own). Choose a cutoff bracketing the desired size, then reject an appropriate fraction of ties (our own). For one fair coin toss, a deterministic test can attain only sizes zero, one half, and one (our own).

**Wikipedia:** [Randomised decision rule](https://en.wikipedia.org/wiki/Randomised_decision_rule). It says: “A statistical test making use of a randomized decision rule is called a randomized test.”

**Sources:** none listed. No primary source with a working link was found.

### Total variation gives the smallest sum of testing errors

**Remember:** Maximize the gain in rejection probability to minimize the sum of errors.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62B10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Define total variation distance as the supremum of the absolute differences between two laws’ probabilities of the same event. A rejection region is the event on which a test rejects the null hypothesis.

**Problem.** Suppose each hypothesis specifies one probability law. The smallest sum of the two error probabilities, rejecting a true null and accepting a false null, equals one minus total variation distance.

**How the definition helps.** For any rejection region, the error sum equals one minus its probability gain from the null law to the alternative (our own). Taking the complement reverses the gain, so its largest value equals total variation distance (our own). Densities relative to the sum of the laws attain this gain on the region where the alternative density is larger (our own).

**Paper or page:** [Detecting weighted hidden cliques](https://arxiv.org/abs/2506.21543v1). It says: “R(T⋆) = 1 − dₜᵥ(ℙ₀, ℙ₁) = 1 − ½𝔼₀\[\|L(X) − 1\|\]”

**Sources:** none listed. No primary source with a working link was found.

### Gaussian log likelihood turns regression into least squares

**Remember:** Taking logs exposes the squared residuals in the Gaussian density.

*True by definition.* MSC 62F10 (Point estimation), 62J05. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The log likelihood is the logarithm of the observed data density, viewed as a function of the model parameters. In Gaussian linear regression, the observations have independent normal errors with a common variance.

**Problem.** With fixed predictors and a fixed positive error variance, the maximum likelihood coefficient vectors are exactly the least squares coefficient vectors.

**How the definition helps.** The Gaussian log likelihood is a constant minus a positive multiple of the sum of squared residuals (our own). The work goes into multiplying the normal densities and observing that the logarithm preserves the set of maximizers (our own).

**Wikipedia:** [Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation). It says: “the ordinary least squares estimator for a linear regression model maximizes the likelihood when the random errors are assumed to have normal distributions with the same variance.”

**Sources:** none listed. No primary source with a working link was found.

### Including certain outcomes makes every Bernoulli estimate attainable

**Remember:** All successes need a model that allows certain success.

*Rules out counterexamples. Confidence: medium.* MSC 62F10 (Point estimation). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A Bernoulli model gives probability p to success and 1 − p to failure, with p in the closed interval \[0,1\]. The alternative log odds parameter log\[p/(1 − p)\] represents only 0 &lt; p &lt; 1 when finite.

**Problem.** For a nonempty sample of independent Bernoulli trials with common parameter p, the observed success fraction maximizes likelihood even when all outcomes agree.

**How the definition helps.** The closed parameter space includes the maximizing endpoint for a sample of identical outcomes (our own). The work goes into maximizing the log likelihood in mixed samples and checking monotonicity when all outcomes agree (our own). With only finite log odds, all successes would give a supremum but no maximum (our own).

**Wikipedia:** [Bernoulli distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution). It says: “0 ≤ p ≤ 1”

**Sources:** none listed. No primary source with a working link was found.

### Median unbiasedness survives reparameterization

**Remember:** A monotone map can swap the two tails but cannot change their probabilities.

*True by definition.* MSC 62F10 (Point estimation). arXiv stat.TH. Level 2: later undergraduate.

**Definition.** An estimator T is median-unbiased if, for every true value θ, both Pθ(T ≤ θ) and Pθ(T ≥ θ) are at least one half.

**Problem.** A strictly monotone transformation of a median-unbiased real estimate is median-unbiased for the transformed parameter.

**How the definition helps.** A strictly increasing transformation preserves both inequalities, and a strictly decreasing transformation exchanges them (our own). Either way, both probabilities still meet the required bound (our own).

**Wikipedia:** [Median](https://en.wikipedia.org/wiki/Median). It says: “and has the additional property that it is invariant under one-to-one transformation.”

**Sources:** none listed. No primary source with a working link was found.

### The natural parameter makes maximum likelihood match the observed mean

**Remember:** The best fit makes the model’s average agree with the observed average.

*True by definition.* MSC 62F10 (Point estimation), 62E10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** An exponential family in natural form has density h(x) exp\[ηT(x) − A(η)\]. The natural parameter η multiplies the data summary T(x), and A(η) normalizes the density.

**Problem.** Take independent observations from one family member, all in its support, and let η range over an open interval. A parameter value maximizes likelihood exactly when its expected T equals the observed average of T.

**How the definition helps.** The score, or derivative of the sample log likelihood, subtracts the total expected T from the total observed T (our own). The work goes into differentiating the log normalizer to get a mean from its first derivative and a variance from its second (our own). That nonnegative variance makes the log likelihood concave, so a zero score gives a maximum (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “f<sub>X</sub>{\\!(x\\mid\\theta)} = h(x) \\exp\\left\[\\theta \\cdot T(x) - A(\\theta)\\right\]”

**Sources:**

- [Murphy (2012), Machine Learning: A Probabilistic Perspective, section 9.2](https://www.mit.edu/~mcusi/reverb/Machine_Learning-_A_Probabilistic_Perspective.pdf)

### The score identifies when an estimator reaches the information bound

**Remember:** The bound is tight when the error points exactly along the score.

*True by definition.* MSC 62F10 (Point estimation), 62B10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The score is the derivative of the log density with respect to a scalar parameter. Its variance is the Fisher information I in a regular model. Here regularity means fixed support and valid differentiation under the integrals for total probability and the estimator’s mean.

**Problem.** In a regular model, let an unbiased estimator have finite variance and let I be finite and positive. Its variance equals 1/I exactly when its error equals the score divided by I with probability one.

**How the definition helps.** The logarithm turns differentiation of the estimator’s mean into covariance with the score. Unbiasedness makes that derivative one (our own). Cauchy–Schwarz then gives variance at least 1/I, with equality exactly when the centered estimator is proportional to the score (our own). Covariance one fixes the factor at 1/I (our own).

**Wikipedia:** [Cramér–Rao bound](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_bound). It says: “If we consider the covariance cov(V, T) of V and T, we have cov(V, T) = E(VT), because E(V) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping the parameter values a test does not reject gives coverage

**Remember:** An excluded value is a rejected null hypothesis.

*True by definition.* MSC 62F25 (Parametric tolerance and confidence regions), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Define the confidence set to contain each candidate parameter value whose point-null test does not reject. A point-null test treats that single value as true.

**Problem.** If each test rejects its own true value with probability at most α, the resulting confidence set covers the truth with probability at least 1−α. Conversely, rejecting each value outside a set with that coverage gives tests with false rejection probability at most α.

**How the definition helps.** Missing the true value is exactly the event of rejecting its test (our own). The work goes into building a level α test for each candidate and computing the set of candidates those tests keep (our own).

**Wikipedia:** [Binomial proportion confidence interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval). It says: “these intervals may be employed as significance tests, with identical results to the source test”

**Sources:**

- [Neyman (1937), Outline of a Theory of Statistical Estimation Based on the Classical Theory of Probability](https://doi.org/10.1098/rsta.1937.0005)
- [Casella and Berger (2002), Statistical Inference, second edition, Theorem 9.2.2](https://pages.stat.wisc.edu/~shao/stat610/Casella_Berger_Statistical_Inference.pdf)

### Pivot inversion gives exact coverage

**Remember:** Invert one probability statement to get confidence coverage.

*True by definition.* MSC 62F25 (Parametric tolerance and confidence regions). arXiv math.ST. Level 2: later undergraduate.

**Definition.** A pivot is a function of data and unknown parameters whose distribution is the same for all parameter values. Form a confidence set from all parameter values that put the observed pivot in a fixed acceptance region.

**Problem.** If the acceptance region has pivot probability 1 − α, the resulting confidence set covers the true parameter with probability 1 − α.

**How the definition helps.** Inverting the pivot makes coverage the same event as the pivot landing in the chosen region. Our own argument replaces a separate coverage calculation at each parameter value with one probability calculation under the common law. The work is finding the pivot and its distribution.

**Wikipedia:** [Pivotal quantity](https://en.wikipedia.org/wiki/Pivotal_quantity). It says: “A pivot need not be a statistic — the function and its value can depend on the parameters of the model, but its distribution must not.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform order statistics turn binomial tail cutoffs into beta quantiles

**Remember:** Binomial tails count how many uniform draws pass a cutoff.

*True by definition.* MSC 62F25 (Parametric tolerance and confidence regions), 62F03. arXiv math.ST. Level 2: later undergraduate.

**Definition.** For positive integers a and b, Beta(a,b) is the law of the ath smallest among a + b − 1 independent uniform draws on \[0,1\]. Its usual definition uses a density. A quantile at level u cuts off probability u in the lower tail of this continuous distribution.

**Problem.** Observe k successes in n independent Bernoulli trials with common success probability, where 0 &lt; k &lt; n and 0 &lt; α &lt; 1. The equal-tailed Clopper–Pearson interval uses the α/2 quantile of Beta(k,n−k+1) below and the 1−α/2 quantile of Beta(k+1,n−k) above.

**How the definition helps.** The kth uniform order statistic is at most p exactly when at least k draws are at most p (our own). This turns the two binomial tail equations into equations for beta cumulative probabilities (our own). The work moves to deriving the beta density of a uniform order statistic (our own).

**Wikipedia:** [Order statistic](https://en.wikipedia.org/wiki/Order_statistic). It says: “the kth order statistic of the uniform distribution is a beta-distributed random variable.”

**Paper or page:** [Unbiased Statistical Estimation and Valid Confidence Intervals Under Differential Privacy](https://arxiv.org/abs/2110.14465v2). It says: “\\Pr \\left( F<sub>B(c,n-c+1)</sub><sup>-1</sup> (\\alpha ) \\leq p \\right) \\geq 1 - \\alpha”

**Sources:**

- [Clopper and Pearson (1934), The Use of Confidence or Fiducial Limits Illustrated in the Case of the Binomial](https://doi.org/10.1093/biomet/26.4.404)

### Distinct tuples give unbiased averages

**Remember:** Use each observation only once per tuple.

*Rules out counterexamples.* MSC 62G05 (Nonparametric estimation). arXiv stat.TH. Level 2: later undergraduate.

**Definition.** A U-statistic estimates the mean of a symmetric function of k independent draws. Average the function over all subsets of k distinct sample indices.

**Problem.** For an independent and identically distributed sample of size at least k, the resulting U-statistic is unbiased whenever the function has finite mean.

**How the definition helps.** Distinct indices give each term the same mean as the target, by our own argument. In our own example, take two independent observations with the same finite, positive variance. Averaging their squared differences over all four ordered pairs halves the expected value because two pairs repeat an index.

**Wikipedia:** [U-statistic](https://en.wikipedia.org/wiki/U-statistic). It says: “a U-statistic is a class of statistics defined as the average over the application of a given function applied to all tuples of a fixed size.”

**Sources:** none listed. No primary source with a working link was found.

### Empirical measures give bootstrap variance

**Remember:** Replace the population law with the observed frequencies.

*True by definition. Confidence: medium.* MSC 62G09 (Nonparametric statistical resampling methods). arXiv stat.ME. Level 2: later undergraduate.

**Definition.** Give mass 1/n to each of n observations, counting repeats. Define a bootstrap sample as n independent draws from this empirical distribution.

**Problem.** Given n real observations, the variance of the bootstrap mean equals their mean squared deviation from their average, divided by n.

**How the definition helps.** Viewing resampling as independent draws from one distribution lets us apply the variance formula for an average. Our own calculation replaces counting all possible resamples with computing the variance of a single draw. That variance uses the divisor n because each observed index receives mass 1/n. Accuracy as an estimate of population sampling variability is a separate question.

**nLab:** [empirical distribution](https://ncatlab.org/nlab/show/empirical+distribution). It says: “The empirical distribution of a finite sequence (x₁, …, xₙ) ∈ Xᴺ is the probability measure on X given by”

**Sources:** none listed. No primary source with a working link was found.

### Counting originals validates permutation tests

**Remember:** Rank the observation together with the simulations.

*Rules out counterexamples.* MSC 62G10 (Nonparametric hypothesis testing). arXiv stat.ME. Level 2: later undergraduate.

**Definition.** Compute the observed score and one score per simulation. Define p as the fraction of all scores at least as large as the observed score, counting the observed score itself.

**Problem.** Suppose that, under the hypothesis being tested, permuting the scores leaves their joint distribution unchanged. Then rejecting when p ≤ α has probability at most α for 0 ≤ α ≤ 1.

**How the definition helps.** Including the observation turns p into its descending rank divided by the total number of scores. Counting every tie gives the largest rank in each tied group, so ties can only increase p. The work is proving that the simulation method preserves the joint distribution under permutations. In our own example with one simulation and distinct interchangeable scores, omitting the observation gives p = 0 half the time.

**Paper or page:** [Differentially Private Permutation Tests: Applications to Kernel Methods](https://arxiv.org/abs/2310.19043v2). It says: “Suppose that X₁, …, Xₙ, Xₙ₊₁ are exchangeable random variables.”

**Sources:**

- [Differentially Private Permutation Tests: Applications to Kernel Methods](https://arxiv.org/abs/2310.19043v2)
- [Phipson and Smyth (2010), Permutation P-values Should Never Be Zero: Calculating Exact P-values When Permutations Are Randomly Drawn](https://doi.org/10.2202/1544-6115.1585)

### The largest minimizer of check loss is a sample quantile

**Remember:** Weight the two slopes so they balance at the quantile.

*True by definition.* MSC 62G30 (Order statistics; empirical distribution functions), 62G08. arXiv cs.LG, stat.TH. Level 2: later undergraduate.

**Definition.** For 0 &lt; q &lt; 1, check loss at threshold t charges q(x − t) when observation x ≥ t. When x &lt; t, it charges (1 − q)(t − x).

**Problem.** For a nonempty finite sample and 0 &lt; q &lt; 1, the largest minimizer of total check loss is a sample q-quantile.

**How the definition helps.** At a minimum, the left slope is nonpositive and the right slope is nonnegative because total check loss is convex (our own). Dividing by sample size gives left slope P(x &lt; t) − q and right slope P(x ≤ t) − q, using sample proportions (our own). These signs give precisely the two quantile inequalities, including at the largest minimizer (our own).

**Paper or page:** [Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage](https://arxiv.org/abs/2502.17264v2). It says: “Then, the largest θ\* ∈ ℝ such that θ\* ∈ argmin<sub>θ ∈ ℝ</sub> Σ<sub>i ∈ \[n\]</sub> ℓ\_α(θ, sᵢ) is a (1−α)-quantile of {sᵢ}<sub>i ∈ \[n\]</sub>.”

**Sources:**

- [Konstantina Bairaktari, Jiayun Wu, Zhiwei Steven Wu, Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage, arXiv:2502.17264v2 (2025)](https://arxiv.org/abs/2502.17264v2)
- [Roger Koenker, Gilbert Bassett, Regression Quantiles, Econometrica 46(1), 33 (1978)](https://doi.org/10.2307/1913643)

### Normalized gamma variables make Dirichlet laws closed under merging coordinates

**Remember:** Add the gamma variables first, then divide by the same total.

*True by definition.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas), 62E15. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** Take independent gamma variables Y₁, …, Yₖ with positive shapes α₁, …, αₖ and common scale 1. The Dirichlet law with these parameters is the distribution of (Y₁/S, …, Yₖ/S), where S is their sum.

**Problem.** For a Dirichlet vector with at least three coordinates, merge two distinct coordinates Xᵢ and Xⱼ by summing them. The result is Dirichlet, with their two shape parameters replaced by αᵢ + αⱼ.

**How the definition helps.** The gamma definition makes merging two coordinates the same as adding their gamma variables before division (our own). A sum of independent gamma variables with scale 1 is gamma with the added shape, and it stays independent of the other variables (our own). The total S does not change (our own). The density proof instead integrates over all splits of the merged coordinate, and the work shifts to gamma additivity (our own).

**Wikipedia:** [Dirichlet distribution](https://en.wikipedia.org/wiki/Dirichlet_distribution). It says: “This aggregation property may be used to derive the marginal distribution of Xᵢ mentioned above.”

**Sources:** none listed. No primary source with a working link was found.

### An orthogonal fit gives the least variable linear unbiased estimate

**Remember:** Extra unbiased weights are perpendicular, so they only add variance.

*True by definition.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The least squares fit minimizes the sum of squared errors. Equivalently, it projects the response onto all linear combinations of the predictors, leaving a perpendicular error vector.

**Problem.** Take fixed, linearly independent predictor columns and uncorrelated, zero-mean errors of common variance. For each linear combination of coefficients, least squares has minimum variance among linear unbiased estimators.

**How the definition helps.** Projection gives least squares weights in the predictor span for any estimated coefficient combination (our own). Unbiasedness for every coefficient vector forces any competing linear estimate to add weights perpendicular to that span (our own). Under the error assumptions, variance equals the common variance times the squared length of the weights (our own). Pythagoras shows that adding perpendicular weights can only increase that length (our own).

**Wikipedia:** [Gauss–Markov theorem](https://en.wikipedia.org/wiki/Gauss%E2%80%93Markov_theorem). It says: “The main idea of the proof is that the least-squares estimator is uncorrelated with every linear unbiased estimator of zero”

**Sources:** none listed. No primary source with a working link was found.

### Counting residual directions gives an unbiased estimate of error variance

**Remember:** Count one copy of the variance for each residual direction.

*True by definition. Confidence: medium.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Define residual degrees of freedom as the dimension of the space perpendicular to the predictor span. An orthonormal basis uses perpendicular unit vectors, so each residual direction contributes one squared coordinate.

**Problem.** In a fixed design, suppose the mean response lies in the predictor span of dimension p &lt; n, where n counts observations. With uncorrelated errors of common variance, dividing the residual sum of squares by n − p estimates that variance without bias.

**How the definition helps.** Each perpendicular unit direction contributes one copy of the error variance in expectation (our own). Counting these directions gives n − p in the divisor instead of n. The projection theorem identifies the residual with the perpendicular part of the error (our own).

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “The denominator, n−p, is the statistical degrees of freedom.”

**Sources:** none listed. No primary source with a working link was found.

### Least squares predictions stay unique

**Remember:** Several coefficient vectors can describe the same closest point.

*Makes the theorem clean to state or prove.* MSC 62J05 (Linear regression; mixed models). arXiv math.ST. Level 2: later undergraduate.

**Definition.** Define the least squares fit as the vector of achievable predictions closest to the observed responses in Euclidean distance. The achievable vectors form the span of the predictor columns.

**Problem.** The least squares fitted values are unique even when the predictor columns are linearly dependent.

**How the definition helps.** Defining the fit in the predictor span lets the orthogonal projection theorem give uniqueness directly. In our own argument, minimizing squared residuals means finding the closest achievable vector. Duplicate columns allow the same total coefficient to be split between them arbitrarily, as our own counterexample shows.

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “When there is perfect multicollinearity, it is no longer possible to obtain unique estimates for the coefficients of the related regressors”

**Sources:** none listed. No primary source with a working link was found.

### Projecting out other predictors preserves the selected regression coefficient

**Remember:** Remove the other predictors from both sides before fitting the slope.

*True by definition.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Define the least squares fit by projecting the response onto the span of the predictors, all their linear combinations. The residual is the difference between the response and its fit, perpendicular to that span. To remove other predictors, take residuals of both the response and the selected predictor against those other predictors.

**Problem.** For linearly independent predictor columns, the selected coefficient equals the slope from fitting the response residual to the predictor residual through the origin (our own).

**How the definition helps.** The selected predictor's residual is perpendicular to every other predictor, so only one coefficient acts in its direction (our own). Project the full fit onto that direction to read off the coefficient (our own). The work goes into the projection theorem, which identifies the closest fit with the one that leaves perpendicular residuals (our own).

**Paper or page:** [A First Course in Causal Inference](https://arxiv.org/abs/2305.18793v2). It says: “The coefficient of x₁ in the OLS fit of y on (x₁, x₂, …, xₚ) equals the coefficient of x̃₁ in the OLS fit of y or ỹ on x̃₁”

**Sources:**

- [Frisch and Waugh (1933), Partial Time Regressions as Compared with Individual Trends](https://doi.org/10.2307/1907330)
- [Lovell (1963), Seasonal Adjustment of Economic Time Series and Multiple Regression Analysis](https://doi.org/10.1080/01621459.1963.10480682)

### Rescaling the errors turns generalized least squares into ordinary least squares

**Remember:** Change coordinates so the errors have equal variance and no correlation.

*True by definition.* MSC 62J05 (Linear regression; mixed models), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** Let Ω be the known positive definite covariance matrix of the errors, which collects their variances and covariances. Generalized least squares minimizes rᵀΩ⁻¹r for the residual vector r instead of minimizing the ordinary squared length rᵀr.

**Problem.** Take a square factor C with Ω = CCᵀ, so C is invertible. Multiplying the response and every predictor by C⁻¹ gives an ordinary least squares problem with the same solutions and errors of identity covariance.

**How the definition helps.** The weighted squared length is exactly the ordinary squared length of C⁻¹r (our own). The work goes into factoring the covariance matrix and transforming both sides of the model with that same factor.

**Wikipedia:** [Generalized least squares](https://en.wikipedia.org/wiki/Generalized_least_squares). It says: “GLS is equivalent to applying ordinary least squares (OLS) to a linearly transformed version of the data.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct test rates identify prevalence

**Remember:** A positive rate identifies prevalence when the two groups have different positive rates.

*Rules out counterexamples.* MSC 62P10 (Applications of statistics to biology and medical sciences; meta analysis). arXiv stat.AP, stat.ME. Level 2: later undergraduate.

**Definition.** Estimate prevalence from a set of test readings whose known probabilities p among diseased people and h among healthy people differ. The estimate is (observed fraction of readings in the set − h)/(p − h).

**Problem.** For independent readings from one population, this estimate is unbiased for the fraction of people with the disease. Its mean squared error tends to zero as the sample grows.

**How the definition helps.** If prevalence is q, each reading falls in the set with probability r = h + (p − h)q (our own). Thus the estimate has mean q and variance r(1 − r)/(n(p − h)²) for n independent readings (our own). Equal rates would make r constant across all prevalences (our own).

**Paper or page:** [Analysis of Diagnostics (Part I): Prevalence, Uncertainty Quantification, and Machine Learning](https://arxiv.org/abs/2309.00645v2). It says: “is an unbiased estimate of q that converges in mean-square as s → ∞”

**Sources:**

- [Analysis of Diagnostics (Part I): Prevalence, Uncertainty Quantification, and Machine Learning (arXiv 2309.00645v2)](https://arxiv.org/abs/2309.00645v2)

### Bayesian sufficiency lets Bayes estimates use only the statistic

**Remember:** If the statistic gives the same posterior, it gives the same optimal choices.

*True by definition. Confidence: medium.* MSC 62B05 (Sufficient statistics and fields), 62F15. arXiv math.ST. Level 3: graduate.

**Definition.** Bayesian sufficiency means that conditioning on the data or on T gives the same posterior almost surely for every prior. The prior is the initial law of the parameter θ, and the posterior is its updated law. Classical sufficiency instead requires that the conditional law of the data given T does not depend on θ.

**Problem.** For a fixed loss function, the choices that minimize posterior expected loss depend on the data only through T. If a measurable minimizing choice exists based on T, it is also a Bayes rule based on the full data.

**How the definition helps.** Bayesian sufficiency gives the same posterior for both inputs, so each choice has the same expected loss either way (our own). An estimate can therefore use T alone, though a tie can leave room for other choices (our own). The work shifts to showing that classical sufficiency gives Bayesian sufficiency. In a model with a common reference measure, factorization gives a data-only factor that cancels on normalizing the posterior (our own).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “It turns out that this "Bayesian sufficiency" is a consequence of the formulation above”

**Sources:** none listed. No primary source with a working link was found.

### Completeness lets Basu prove independence from ancillary statistics

**Remember:** Complete sufficient statistics are independent of anything whose law never changes.

*Rules out counterexamples.* MSC 62B05 (Sufficient statistics and fields). arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** T is sufficient if the data given T have a conditional law common to all parameter values. It is boundedly complete if every bounded measurable g with Eθ\[g(T)\] = 0 for all θ vanishes almost surely under every θ. A statistic is ancillary if its law is common to all parameter values.

**Problem.** A boundedly complete sufficient statistic is independent of every ancillary statistic. For example, the mean and variance of a normal sample are independent.

**How the definition helps.** For an ancillary event A, sufficiency gives a common function g(T) = Pθ(A given T) − Pθ(A) (our own). It is bounded with mean zero under every θ, so completeness gives independence (our own). For independent uniform draws on \[0,θ\], the extrema are sufficient, yet their nonconstant ratio is ancillary for sample sizes above one (our own). For normal samples, fix the variance and vary the mean to make the sample mean complete sufficient and the sample variance ancillary (our own).

**Wikipedia:** [Basu's theorem](https://en.wikipedia.org/wiki/Basu%27s_theorem), [Completeness (statistics)](https://en.wikipedia.org/wiki/Completeness_%28statistics%29), [Ancillary statistic](https://en.wikipedia.org/wiki/Ancillary_statistic). It says: “Basu's theorem states that any boundedly complete and sufficient statistic is independent of any ancillary statistic.”

**Sources:**

- [D. Basu, On Statistics Independent of a Complete Sufficient Statistic, Sankhyā 15 (1955) 377–380](https://doi.org/10.1007/978-1-4419-5825-9_14)

### Exchangeability makes the sorted sample sufficient, even when values repeat

**Remember:** Exchangeability leaves no information in the order the values arrived.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62G30, 60G09. arXiv math.ST, math.PR. Level 3: graduate.

**Definition.** Random variables X₁, …, Xₙ are exchangeable if every reordering of them has the same joint law. The order statistics Y₁ ≤ … ≤ Yₙ are the values sorted from smallest to largest. A statistic is sufficient for a family of laws if the conditional law of the sample given it is the same for each law.

**Problem.** For any exchangeable real random vector X, the conditional law of X given its order statistics does not depend on the law of X. Given the sorted values, X is a uniformly random reordering of them (Corollary 1).

**How the definition helps.** Averaging over permutations gives the conditional law directly, by Theorem 1. Given the sorted sample, the conditional expectation of each bounded measurable g(X) equals its average over all n! reorderings. Repeated values cause repeated terms in that average, which still defines one conditional law for the whole family (our own).

**Paper or page:** [Order statistics from exchangeable random variables are always sufficient](https://arxiv.org/abs/2206.00044v1). It says: “We show that the conditional distribution of (X₁,…,Xₙ) given (Y₁,…,Yₙ) does not depend on F.”

**Sources:**

- [Nickos Papadatos, Order statistics from exchangeable random variables are always sufficient, arXiv:2206.00044v1 (2022)](https://arxiv.org/abs/2206.00044v1)

### Factorized likelihood makes maximizers depend only on the sufficient statistic

**Remember:** A positive factor independent of the parameter cannot move the maximum.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 3: graduate.

**Definition.** In a model with densities relative to one common measure, the classical definition of sufficiency uses the law of the data given the statistic T. That law must not depend on the parameter θ. The factorization definition instead requires f(x; θ) = h(x)·g(θ, T(x)), with h and g nonnegative.

**Problem.** For data x with h(x) &gt; 0, the set of parameters that maximize the likelihood depends only on T(x). If there is just one maximizer, it is a function of T(x).

**How the definition helps.** Factorization leaves only g(θ, T(x)) to maximize, since h(x) is a positive constant for fixed x. The conditional-law definition does not give that algebraic step directly (our own). The work shifts to the Fisher–Neyman theorem, which proves the two descriptions agree for dominated models, where one measure gives all the densities.

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “From this factorization, it can easily be seen that the maximum likelihood estimate of θ will interact with X only through T(X).”

**Sources:**

- [P. R. Halmos and L. J. Savage, Application of the Radon–Nikodym theorem to the theory of sufficient statistics, Annals of Mathematical Statistics 20 (1949) 225–241](https://doi.org/10.1214/aoms/1177730032)

### Likelihood ratios give minimal sufficiency

**Remember:** Keep relative likelihoods and drop the scale shared by all parameter values.

*True by definition.* MSC 62B05 (Sufficient statistics and fields). arXiv stat.TH. Level 3: graduate.

**Definition.** Take a finite family of strictly positive densities f₀, …, fₖ relative to one common measure. At observation x, the likelihood ratio vector has entries fᵢ(x)/f₀(x) for i = 1, …, k.

**Problem.** The likelihood ratio vector is minimal sufficient. That is, it is sufficient, and every other sufficient statistic determines it apart from events of probability zero.

**How the definition helps.** Taking ratios cancels every common factor in the likelihood (our own). The factorization theorem says a sufficient statistic captures all parameter dependence in the density (our own). The reference density times each ratio recovers the original density, proving sufficiency by that theorem (our own). Conversely, factoring through any sufficient statistic shows that it determines each ratio (our own).

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “The collection of likelihood ratios {L(X ∣ θᵢ)/L(X ∣ θ₀)} for i = 1,…,k, is a minimal sufficient statistic if the parameter space is discrete {θ₀,…,θₖ}.”

**Sources:** none listed. No primary source with a working link was found.

### Square-root densities give Hellinger distance its triangle inequality

**Remember:** Apply the norm triangle inequality to the square roots of the densities.

*True by definition. Confidence: medium.* MSC 62B10 (Statistical aspects of information-theoretic topics), 60B10. arXiv math.ST, math.PR. Level 3: graduate.

**Definition.** For probability measures P and Q, choose densities p and q relative to a common reference measure. Their Hellinger distance is H(P, Q) = ‖√p − √q‖₂/√2, where the norm is the square root of the integral of the square. Its alternative formula is H² = 1 − ∫√(pq).

**Problem.** Hellinger distance is a metric on probability measures on the same measurable space. Its values lie between 0 and 1.

**How the definition helps.** The square-root formula turns the triangle inequality into the triangle inequality for a norm (our own). Use one reference measure for all three densities, for example P + Q + R (our own). The overlap formula H² = 1 − ∫√(pq) gives the bound by 1 but hides the triangle inequality (our own). The work shifts to checking that the distance is independent of the reference measure, by changing densities (our own).

**Wikipedia:** [Hellinger distance](https://en.wikipedia.org/wiki/Hellinger_distance). It says: “The Hellinger distance forms a bounded metric on the space of probability distributions over a given probability space.”

**Sources:** none listed. No primary source with a working link was found.

### A channel is more informative exactly when the other is its garbling

**Remember:** A better signal can always imitate a noisier one.

*Makes the theorem clean to state or prove.* MSC 62B15 (Theory of statistical experiments), 62C05. arXiv math.OC, math.ST. Level 3: graduate.

**Definition.** An observation channel gives, for each hidden state, a probability distribution on signals. A garbling of a channel adds further noise. It passes the signal through a second random map that does not see the hidden state.

**Problem.** For finite state and signal spaces, Q₂ is a garbling of Q₁ exactly when Q₁ performs at least as well in every finite-action decision problem.

**How the definition helps.** A decision maker observing Q₁ can simulate Q₂ and copy any decision rule based on Q₂ (our own). Blackwell’s converse uses convex separation to obtain one garbling that works for every state (our own).

**Paper or page:** [Zero-Sum Games involving Teams against Teams: Existence of Equilibria, and Comparison and Regularity in Information](https://arxiv.org/abs/2206.12048v1). It says: “The information structure induced by channel Q₁ is more informative than the one induced by channel Q₂ for all single player decision problems with finite 𝕌.”

**Sources:**

- [Ian Hogeboom-Burr, Serdar Yüksel, Zero-Sum Games involving Teams against Teams: Existence of Equilibria, and Comparison and Regularity in Information, arXiv:2206.12048v1 (2022)](https://arxiv.org/abs/2206.12048v1)
- [David Blackwell, Equivalent Comparisons of Experiments, The Annals of Mathematical Statistics (1953)](https://doi.org/10.1214/aoms/1177729032)

### Identifiability is the condition that lets maximum likelihood be consistent

**Remember:** If two parameters look the same, no data can tell them apart.

*Rules out counterexamples.* MSC 62B15 (Theory of statistical experiments), 62F12. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** A statistical model is identifiable when different parameter values give different probability distributions of the data. In other words, the map from θ to its distribution is one-to-one.

**Problem.** Suppose an identifiable model has a compact metric parameter space and its average log likelihood converges uniformly in probability to a continuous expected log likelihood. Assume the expected log likelihood is finite everywhere under the true law. Then every maximum likelihood estimator converges in probability to the true parameter.

**How the definition helps.** The expected log likelihood drops from its true value by the Kullback–Leibler divergence, positive at every other parameter by identifiability (our own). Compactness and continuity give a positive gap outside each neighborhood of the truth, and uniform convergence preserves that gap with probability approaching one (our own). For a normal model of fixed variance and mean a + b, equal sums prevent consistent estimation of the pair throughout the model (our own).

**Wikipedia:** [Identifiability](https://en.wikipedia.org/wiki/Identifiability), [Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation). It says: “The identification condition is absolutely necessary for the ML estimator to be consistent. When this condition holds, the limiting likelihood function ℓ(θ\|·) has unique global maximum at θ₀.”

**Sources:**

- [A. Wald, Note on the Consistency of the Maximum Likelihood Estimate, Annals of Mathematical Statistics 20 (1949)](https://doi.org/10.1214/aoms/1177729952)

### Supporting planes of convex functions give proper scores

**Remember:** The plane at your forecast stays below the function at the truth.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory), 91B06. arXiv stat.TH, econ.TH. Level 3: graduate.

**Definition.** For each probability vector p, choose an affine function Lₚ below H everywhere and equal to H at p. Reporting p earns Lₚ(eᵢ) when outcome i occurs, where eᵢ assigns probability one to i.

**Problem.** This construction gives a proper score for finitely many outcomes. If H is strictly convex, no other report gives the same expected score.

**How the definition helps.** At truth q, the expected score for report p equals Lₚ(q) by affinity (our own). This is at most H(q), which reporting q attains (our own). Strict convexity forbids a second contact point, so every other report scores strictly less in expectation (our own).

**Paper or page:** [Optimal Scoring Rule Design under Partial Knowledge](https://arxiv.org/abs/2107.07420v3). It says: “Conversely, for every (strictly) convex function H: Δ(Ω)→ℝ, there exists a (strict) proper scoring rule such that the above condition hold.”

**Sources:**

- [Tilmann Gneiting and Adrian E. Raftery, Strictly Proper Scoring Rules, Prediction, and Estimation, Journal of the American Statistical Association 102 (2007) 359–378](https://doi.org/10.1198/016214506000001437)
- [Yiling Chen and Fang-Yi Yu, Optimal Scoring Rule Design under Partial Knowledge, arXiv 2107.07420](https://arxiv.org/abs/2107.07420v3)

### Equalizer Bayes rules are minimax

**Remember:** An equalizer makes the average risk equal the worst risk.

*True by definition.* MSC 62C20 (Minimax procedures in statistical decision theory), 62C10. arXiv stat.TH. Level 3: graduate.

**Definition.** Call a decision rule an equalizer if its risk, or expected loss, is constant across parameter values. A Bayes rule minimizes the average risk under a given prior.

**Problem.** If a Bayes rule for a probability prior has finite constant risk, it minimizes the worst-case risk.

**How the definition helps.** Constant risk turns the prior average into the worst risk, avoiding a separate optimization over parameters (our own). Every competitor’s worst risk bounds its prior average from above (our own). Its prior average is at least as large as the Bayes rule’s average by definition (our own). The work lies in finding a prior whose Bayes rule has constant risk (our own).

**Wikipedia:** [Minimax estimator](https://en.wikipedia.org/wiki/Minimax_estimator). It says: “If a Bayes estimator has constant risk, it is minimax.”

**Sources:** none listed. No primary source with a working link was found.

### Propensity scores balance measured covariates

**Remember:** At a fixed score, the measurements cannot change the treatment probability.

*True by definition.* MSC 62D20 (Causal inference from observational studies). arXiv stat.ME, stat.AP. Level 3: graduate.

**Definition.** For a treatment with two options, record each person’s measurements before treatment. The propensity score is the probability of receiving the first option given those measurements. Group people by this single probability instead of matching every measurement separately.

**Problem.** Conditional on the true score, treatment is independent of the recorded measurements. Wherever the score lies strictly between zero and one, each option has positive conditional probability.

**How the definition helps.** Once the score is fixed, knowing the measurements cannot further change the treatment probability (our own). Taking conditional expectations gives that probability both with the measurements and without them (our own). The work moves to estimating the score and checking which parts of the sample have both treatment groups (our own).

**Wikipedia:** [Propensity score matching](https://en.wikipedia.org/wiki/Propensity_score_matching). It says: “The propensity score e(x) is a balancing score.”

**Sources:**

- [P. R. Rosenbaum and D. B. Rubin, The central role of the propensity score in observational studies for causal effects](https://doi.org/10.1093/biomet/70.1.41)

### Weighted residuals give two safeguards

**Remember:** Either a correct prediction or a correct weight removes the bias.

*True by definition.* MSC 62D20 (Causal inference from observational studies). arXiv stat.ME, stat.AP. Level 3: graduate.

**Definition.** For treatment indicator A, outcome Y and pretreatment measurements X, choose an outcome prediction m(X) and a positive treatment probability estimate g(X). The population formula averages m(X) + A(Y − m(X))/g(X) over everyone (our own).

**Problem.** Assume consistency of observed and potential outcomes, positive probabilities for both treatments given X, and conditional independence of treatment and potential outcomes given X. When the displayed terms are integrable, the formula recovers the treated potential outcome mean if either model is correct (our own).

**How the definition helps.** Adding a weighted correction gives the prediction and probability models two ways to recover the mean (our own). With correct predictions, the average error at each measurement pattern is zero among recipients (our own). With correct probabilities, weighting recipients restores the population distribution of measurements, so the correction supplies exactly what the predictions missed (our own). The paper proves consistency for estimated models, which requires controlling their estimation errors.

**Paper or page:** [Normalized Augmented Inverse Probability Weighting with Neural Network Predictions](https://arxiv.org/abs/2108.01768v2). It says: “The $DR$ estimator \\eqref {nAIPW} is consistent if either $\\hat {Q}<sup>k\\xrightarrow</sup> {p}Q<sup>k$</sup>, $k=0, 1$, or $\\hat {g}\\xrightarrow {p}g$.”

**Sources:**

- [Normalized Augmented Inverse Probability Weighting with Neural Network Predictions (arXiv 2108.01768v2)](https://arxiv.org/abs/2108.01768v2)

### A natural parameter space with interior makes the sufficient statistic complete

**Remember:** A full-dimensional parameter set makes the sufficient statistic complete.

*Rules out counterexamples.* MSC 62E10 (Characterization and structure theory of statistical distributions), 62B05. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** In a natural exponential family, the density at x has form h(x) exp(θ · T(x) − A(θ)) relative to a common measure. Its parameter set has nonempty interior if it contains an open ball of positive radius in ℝᵏ.

**Problem.** For independent observations from the same family member, nonempty interior makes S = ∑ᵢ T(Xᵢ) complete. Each unbiased finite-variance function of S then has minimum variance among unbiased estimators and is unique up to almost sure equality.

**How the definition helps.** For integrable g, zero expectation of g(S) throughout the ball makes its weighted measure’s Laplace transform vanish there (our own). Transform uniqueness gives completeness, and factorization gives sufficiency, so Lehmann–Scheffé yields the variance conclusion (our own). Without interior, normal samples with mean θ ≠ 0 and variance θ² have two distinct unbiased estimates of θ² for n ≥ 2 (our own). These are the unbiased sample variance and n times the squared sample mean divided by n + 1, both functions of S (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “If Θ has nonempty interior in ℝᵏ, then given any IID samples ... the statistic ... is a complete statistic for θ.”

**Sources:** none listed. No primary source with a working link was found.

### The log-partition function gives exponential-family moments by differentiation

**Remember:** Differentiate the log-normalizer once for the mean, twice for the variance.

*True by definition.* MSC 62E10 (Characterization and structure theory of statistical distributions), 62B05. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** An exponential family in natural form has density h(x) exp(η·T(x) − A(η)). Here η is the natural parameter and T is the sufficient statistic. A(η) is the log-partition function, the logarithm of the integral that makes the density integrate to 1.

**Problem.** At each interior natural parameter η, the gradient of A is the mean of T, and its Hessian is the covariance matrix of T. For u with η + u in the natural parameter space, A(η + u) − A(η) is the cumulant generating function at u.

**How the definition helps.** Multiplying the density by exp(u · T) shifts the parameter in the unnormalized integral from η to η + u (our own). Taking the logarithm gives A(η + u) − A(η) (our own). At an interior parameter this function is finite near zero, where its first two derivatives give the mean and covariance (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “The reason for this is so that the moments of the sufficient statistics can be calculated easily, simply by differentiating this function.”

**Sources:** none listed. No primary source with a working link was found.

### Defining p-values by rejecting levels controls false rejections

**Remember:** If a p-value is small, every larger level rejects.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62A01. arXiv math.ST. Level 3: graduate.

**Definition.** Let Rα increase with α on \[0,1\], with R₁ equal to the whole sample space. Require P(Rα) ≤ α for every null law P and every α. At observation x, the p-value is the infimum of all levels α with x in Rα.

**Problem.** For any null law and any level α in \[0, 1\], the probability that the p-value is at most α is at most α.

**How the definition helps.** The rejecting-level definition bounds the p-value event by any rejection region with a slightly larger level (our own). Nesting gives that inclusion even if the infimum is not attained (our own). Let the larger level decrease to α, with α = 1 immediate (our own). The work shifts from checking a tail probability, including possible ties, to constructing nested tests that meet their stated error bounds (our own).

**Wikipedia:** [P-value](https://en.wikipedia.org/wiki/P-value). It says: “the probability of obtaining a p-value less than or equal to any number between 0 and 1 is still less than or equal to that number”

**Sources:** none listed. No primary source with a working link was found.

### Expectation-bounded e-variables multiply when the conditional bound holds

**Remember:** A second bet must have expected payout at most one given the first result.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62L10. arXiv math.ST, stat.ME. Level 3: graduate.

**Definition.** An e-variable is a nonnegative statistic whose expected value is at most 1 under every law in the null hypothesis. Large values count as evidence against the null hypothesis.

**Problem.** Let E₁ be an e-variable based on the first data. Suppose that under every null law, E₂ is nonnegative and its conditional mean given the first data is at most 1. Then E₁E₂ is an e-variable, even if the choice of E₂ depends on the first data.

**How the definition helps.** Given the first data, E₁ is fixed and E₂ has conditional mean at most one under every null law (our own). The conditional mean of their product is therefore at most E₁ (our own). Averaging gives a mean at most one for the nonnegative product (our own).

**Wikipedia:** [E-values](https://en.wikipedia.org/wiki/E-values). It says: “e-values of subsequent experiments (e.g. clinical trials concerning the same treatment) may simply be multiplied to provide a new, "product" e-value that represents the evidence in the joint experiment.”

**Sources:**

- [V. Vovk and R. Wang, E-values: calibration, combination and applications, Annals of Statistics 49 (2021) 1736–1754](https://doi.org/10.1214/20-AOS2020)

### Monotone likelihood ratios make one-sided most powerful tests exist

**Remember:** If larger T always favours larger θ, reject for large T.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 62F03 (Parametric hypothesis testing). arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** For each θ₁ &lt; θ₂, consider observations where at least one of the two densities is positive. Monotone likelihood ratio means fθ₂(x)/fθ₁(x) is a nondecreasing function of T(x) there, taking value ∞ when only the denominator vanishes.

**Problem.** For θ ≤ θ₀ against θ &gt; θ₀, monotone likelihood ratios give a uniformly most powerful level-α test. It rejects above a cutoff in T and randomizes at equality as needed for size α at θ₀.

**How the definition helps.** Every alternative orders observations by the same T, so Neyman–Pearson gives the same upper-tail test against each alternative (our own). Monotone likelihood ratios also make its rejection probability nondecreasing in θ, controlling size over the whole null (our own). This is the Karlin–Rubin argument.

**Wikipedia:** [Monotone likelihood ratio](https://en.wikipedia.org/wiki/Monotone_likelihood_ratio). It says: “If the family of random variables has the MLRP in T(X), a uniformly most powerful test can easily be determined for the hypothesis H₀ : θ ≤ θ₀ versus H₁ : θ &gt; θ₀.”

**Sources:**

- [S. Karlin and H. Rubin, The Theory of Decision Procedures for Distributions with Monotone Likelihood Ratio, Annals of Mathematical Statistics 27 (1956)](https://doi.org/10.1214/aoms/1177728259)

### Randomization makes test tradeoffs convex

**Remember:** A coin toss interpolates between the error rates of two tests.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62C05. arXiv stat.TH. Level 3: graduate.

**Definition.** Describe a test by its rejection probability at each possible observation, allowing any value from zero to one. An ordinary nonrandomized test allows only zero and one.

**Problem.** Take two fixed probability laws, one for each hypothesis. Then the attainable pairs of false rejection and false acceptance probabilities of randomized tests form a convex set (our own specialization).

**How the definition helps.** A weighted average of rejection probabilities is another test, and both error probabilities follow the same weighted average (our own). Without randomization, a test on a single possible observation gives only the two constant decisions (our own). The work moves to finding tests on the best attainable boundary, which likelihood ratios give for two fixed laws (our own).

**Paper or page:** [Optimal Decision Rules for Composite Binary Hypothesis Testing under Neyman-Pearson Framework](https://arxiv.org/abs/2505.17851v1). It says: “𝒫 is convex and compact.”

**Sources:**

- [Optimal Decision Rules for Composite Binary Hypothesis Testing under Neyman-Pearson Framework (arXiv 2505.17851v1)](https://arxiv.org/abs/2505.17851v1)

### Split likelihoods give valid tests

**Remember:** Fit on one half and test on the other.

*True by definition.* MSC 62F03 (Parametric hypothesis testing). arXiv stat.TH, stat.ME. Level 3: graduate.

**Definition.** Fit a density using one part of the sample. On an independent part, divide its fitted joint density by the supremum of that part’s joint densities under the null. Set the ratio to zero when the denominator vanishes (our own).

**Problem.** For independent observations from a model with densities, reject when this ratio reaches 1/α, where 0 &lt; α &lt; 1. If the null hypothesis is true, the chance of rejection is at most α.

**How the definition helps.** The separate fit makes the numerator a fixed probability density when we condition on the fitting data (our own). The denominator is at least the true likelihood, so the conditional mean of the ratio is at most one (our own). Markov's inequality gives the bound (our own). The work moves to designing a split and a fit with good power, the chance to detect a false null (our own).

**Paper or page:** [Universal Inference for Testing Calibration of Mean Estimates within the Exponential Dispersion Family](https://arxiv.org/abs/2510.23821v1). It says: “The split and sub-sampled split LRTs \\eqref {def<sub>split</sub><sub>lrt</sub><sub>rejection</sub>} control the type I error of rejecting $\\mathcal {H}<sub>0</sub>$ in favor of $\\mathcal {H}<sub>1</sub>$ at the significance level $\\alpha \\in (0,1)$.”

**Sources:**

- [L. Wasserman, A. Ramdas and S. Balakrishnan, Universal inference](https://doi.org/10.1073/pnas.1922664117)
- [Universal Inference for Testing Calibration of Mean Estimates within the Exponential Dispersion Family (arXiv 2510.23821v1)](https://arxiv.org/abs/2510.23821v1)

### Posterior averaging gives likelihood ascent

**Remember:** Raising the conditional average keeps the observed likelihood from falling.

*True by definition.* MSC 62F10 (Point estimation), 62-08. arXiv stat.CO, stat.ME. Level 3: graduate.

**Definition.** The observed likelihood integrates the joint density over the missing values. Instead of maximizing it directly, average the complete-data log likelihood under the current conditional distribution of missing values given the observations. Choose a new parameter that preserves or increases this average.

**Problem.** Assume the current observed likelihood is positive and the conditional averages are finite. Any such update preserves or increases the observed likelihood (our own extension).

**How the definition helps.** The posterior average gives a lower bound on the gain in log likelihood (our own). The bound follows from Jensen’s inequality applied to the complete-data likelihood ratio under the current conditional law (our own). The work moves to computing the conditional average and finding a parameter that increases it (our own).

**Paper or page:** [A review of Monte Carlo-based versions of the EM algorithm](https://arxiv.org/abs/2401.00945v1). It says: “Let θ ∈ Θ, and θ′ = M(θ) be the EM update from θ. Then ℓ(θ′) ≥ ℓ(θ).”

**Sources:**

- [A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum Likelihood from Incomplete Data Via the EM Algorithm](https://doi.org/10.1111/j.2517-6161.1977.tb01600.x)
- [A review of Monte Carlo-based versions of the EM algorithm (arXiv 2401.00945v1)](https://arxiv.org/abs/2401.00945v1)

### Profile likelihood preserves maximum likelihood estimates under parameter maps

**Remember:** Maximize over the original parameter, then apply the parameter map.

*True by definition.* MSC 62F10 (Point estimation). arXiv math.ST. Level 3: graduate.

**Definition.** For fixed data, let L(θ) be its likelihood, viewed as a function of the model parameter θ. To estimate α = g(θ), define its profile likelihood as the supremum of L(θ) over all θ with g(θ) = α. For a one-to-one map, this reduces to the ordinary likelihood with a new parameter label.

**Problem.** If θ̂ maximizes L, then g(θ̂) maximizes the profile likelihood, even when g is not one-to-one.

**How the definition helps.** Taking a supremum within each group of parameters preserves the overall maximum (our own). The group containing θ̂ reaches L(θ̂), and no other group can do better (our own). Unlike a one-to-one change of parameter, a many-to-one map need not give a model indexed by α alone. Profiling resolves this by maximizing over the parameters that α leaves unspecified (our own).

**Wikipedia:** [Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation). It says: “The equivariance property can be generalized to non-bijective transforms, although it applies in that case on the maximum of an induced likelihood function which is not the true likelihood in general.”

**Sources:**

- [P. W. Zehna, Invariance of maximum likelihood estimators, Annals of Mathematical Statistics 37 (1966) 744](https://doi.org/10.1214/aoms/1177699475)

### Regular estimators exclude Hodges' superefficient estimator

**Remember:** A regular estimator behaves the same for all parameter values near the true one.

*Rules out counterexamples.* MSC 62F12 (Asymptotic properties of parametric estimators). arXiv math.ST. Level 3: graduate.

**Definition.** At an interior scalar parameter θ, consider every fixed real h and local truth θₙ = θ + h/√n. An estimator Tₙ is regular at θ if √n(Tₙ − θₙ) converges under each local truth to the same law.

**Problem.** In a locally asymptotically normal model with positive finite information, every regular estimator with finite limiting variance has limiting variance at least the efficient variance.

**How the definition helps.** Regularity permits Hájek’s convolution theorem, which expresses the limit as an efficient normal variable plus independent noise (our own). In a normal mean model, Hodges’ estimator sets the sample mean to zero when its magnitude is below n⁻¹ᐟ⁴ (our own). At local truth h/√n it then returns zero with probability approaching one, giving centered limit −h, which violates regularity (our own).

**Wikipedia:** [Hodges' estimator](https://en.wikipedia.org/wiki/Hodges%27_estimator). It says: “The existence of such a counterexample is the reason for the introduction of the notion of regular estimators.”

**Sources:**

- [Hájek, J. (1970). A characterization of limiting distributions of regular estimates. Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete 14, 323–330.](https://doi.org/10.1007/BF00533669)

### Exponential-family conjugate priors update by adding counts and totals

**Remember:** The data add their count and total to the prior count and total.

*True by definition.* MSC 62F15 (Bayesian inference), 62E10. arXiv math.ST. Level 3: graduate.

**Definition.** Consider densities h(x) exp(η · T(x) − A(η)) with natural parameter η. The conjugate prior density is proportional to exp(η · χ − νA(η)) when its integral over the parameter space is finite and positive.

**Problem.** For n independent observations from this model, the updated density for η has the same form whenever the observed data give a finite, positive normalizer. The new count is ν + n, and the new total is χ + T(x₁) + ⋯ + T(xₙ).

**How the definition helps.** The prior uses the same two terms in η as the likelihood, so multiplying them just adds coefficients (our own). General Bayesian updating gives a product of densities but does not by itself keep the prior's form (our own). The main work is to find which coefficients give a finite normalizing integral, as Diaconis and Ylvisaker did (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family), [Conjugate prior](https://en.wikipedia.org/wiki/Conjugate_prior). It says: “ν corresponds to the effective number of observations that the prior distribution contributes, and χ corresponds to the total amount that these pseudo-observations contribute to the sufficient statistic over all observations and pseudo-observations.”

**Sources:**

- [P. Diaconis and D. Ylvisaker, Conjugate priors for exponential families, Annals of Statistics 7 (1979) 269–281](https://doi.org/10.1214/aos/1176344611)

### The Jeffreys prior does not depend on the choice of parameter

**Remember:** Built from Fisher information, the Jeffreys prior changes with the parameter as a density should.

*True by definition.* MSC 62F15 (Bayesian inference), 62B11. arXiv math.ST. Level 3: graduate.

**Definition.** In a regular model, the Fisher information matrix I is the expected outer product of the log density gradient with itself. The Jeffreys prior measure has density proportional to √det I with respect to parameter volume.

**Problem.** Under a smooth invertible parameter change with smooth inverse, the Jeffreys prior in the new coordinates is the image of the original Jeffreys prior.

**How the definition helps.** If J is the derivative matrix of the inverse change, the transformed information is JᵀIJ by the chain rule (our own). Its square-root determinant is \|det J\|√det I, exactly the change-of-variables factor for the density (our own).

**Wikipedia:** [Jeffreys prior](https://en.wikipedia.org/wiki/Jeffreys_prior). It says: “That is, the relative probability assigned to a volume of a probability space using a Jeffreys prior will be the same regardless of the parameterization used to define the Jeffreys prior.”

**Sources:**

- [Jeffreys, H. (1946). An invariant form for the prior probability in estimation problems. Proceedings of the Royal Society A 186, 453–461.](https://doi.org/10.1098/rspa.1946.0056)

### Variational bounds tighten at the posterior

**Remember:** The trial density closes the gap exactly when it matches the posterior.

*True by definition.* MSC 62F15 (Bayesian inference). arXiv stat.ML. Level 3: graduate.

**Definition.** For fixed observed data x, the evidence p(x) integrates the joint density p(x,z) over the hidden variable z. For a trial density q on z, the variational lower bound is the expectation under q of log(p(x,z)/q(z)).

**Problem.** Suppose the log evidence is finite and the trial expectation exists, possibly as minus infinity. The bound never exceeds the log evidence and equals it exactly when the trial and posterior densities agree almost everywhere.

**How the definition helps.** Substituting p(x,z) = p(x)p(z given x) expresses the gap as the relative entropy of the trial density from the posterior. Relative entropy is nonnegative and vanishes exactly when the densities agree almost everywhere (our own).

**Wikipedia:** [Evidence lower bound](https://en.wikipedia.org/wiki/Evidence_lower_bound). It says: “= ln pθ(x) − Dᴋʟ(qφ(z\|x) \|\| pθ(z\|x)).”

**Sources:** none listed. No primary source with a working link was found.

### Conditional copies give uniform ranks

**Remember:** Matching conditional draws makes the observed rank just another rank.

*True by definition. Confidence: medium.* MSC 62G10 (Nonparametric hypothesis testing). arXiv stat.ME. Level 3: graduate.

**Definition.** Given the controls and response, draw independent replacements from the tested feature’s law given the controls, independently of the observed feature. Apply the same fixed scoring rule to each feature value and break ties by a uniform random ordering.

**Problem.** Under conditional independence of feature and response given the controls, the observed rank is uniform and equal-sized rank groups have equal probabilities (our own).

**How the definition helps.** Under conditional independence, the original feature and all replacements have the same joint law under any permutation given the controls and response (our own). Uniform tie breaking preserves this symmetry, so every position is equally likely for the observed score (our own). The cited grouped-rank limit theorem uses additional assumptions.

**Paper or page:** [Pearson Chi-squared Conditional Randomization Test](https://arxiv.org/abs/2111.00027v2). It says: “will converge to χ² distribution with L − 1 degrees of freedom”

**Sources:**

- [Adel Javanmard, Mohammad Mehrabi (2025), Pearson Chi-squared Conditional Randomization Test](https://arxiv.org/abs/2111.00027v2)

### Including the test score in the average gives a valid e-value

**Remember:** Normalize with the test score still in the pool.

*Rules out counterexamples.* MSC 62G15 (Nonparametric tolerance and confidence regions), 68T05. arXiv stat.ML, cs.LG. Level 3: graduate.

**Definition.** For finitely many nonnegative scores, divide the test score by the mean of all scores, including itself. Define the ratio as zero when all scores vanish (our own).

**Problem.** If the joint score distribution is invariant under permutations, the statistic has mean at most one. Its probability of reaching 1/α is at most α for 0 &lt; α &lt; 1.

**How the definition helps.** Including every score makes the ratios exchangeable and gives them equal expectations (our own). Their sum equals the number of scores unless all vanish, when it equals zero (our own). Each expectation is therefore at most one, and Markov’s inequality gives the probability bound (our own). Omitting the test score makes the denominator zero when only that score is positive (our own).

**Paper or page:** [Enhancing Conformal Prediction Using E-Test Statistics](https://arxiv.org/abs/2403.19082v1). It says: “Set\\\[ F = \\frac{L<sub>n+1</sub>}{\\left(\\sum\\limits<sub>j=1</sub><sup>n+1</sup> L<sub>j</sub>\\right)/(n+1)}. \\\]”

**Sources:** none listed. No primary source with a working link was found.

### Within-group ranks give coverage in each prediction group

**Remember:** Rank each candidate inside its own group.

*Makes the theorem clean to state or prove.* MSC 62G15 (Nonparametric tolerance and confidence regions), 68T05. arXiv stat.ML, cs.LG. Level 3: graduate.

**Definition.** Fix 0 &lt; α &lt; 1 and a rule assigning input-label pairs to groups. Pool each candidate’s score with the calibration scores from its group, giving m scores in total. Include the candidate if one plus the number of strictly smaller scores is at most ⌈m(1 − α)⌉.

**Problem.** Assume permuting the examples preserves their joint distribution and permutes their scores in the same way. Conditional on any positive-probability group of the true test pair, the prediction set contains the true label with probability at least 1 − α.

**How the definition helps.** In our own proof, ranking within the group makes the test example interchangeable with its group peers. Conditional on group membership, randomly breaking ties would give the test example a uniform rank among those peers. Counting only strictly smaller scores can only lower its rank. The rounded cutoff thus includes the true label with at least the stated probability.

**Paper or page:** [Conformal Mixed-Integer Constraint Learning with Feasibility Guarantees](https://arxiv.org/abs/2506.03531v1). It says: “for all groups k ∈ {1, …, K} with ℙ(g(Xₙ₊₁, Yₙ₊₁) = k) &gt; 0”

**Sources:** none listed. No primary source with a working link was found.

### Block medians tolerate heavy tails

**Remember:** A bad block can spoil its mean but not outvote a good majority.

*True by definition.* MSC 62G35 (Nonparametric robustness). arXiv stat.TH, stat.ME. Level 3: graduate.

**Definition.** Split independent observations into equally sized blocks. Use the median of their means instead of the mean of all observations.

**Problem.** Assume n independent draws from one distribution with finite standard deviation σ. Choose K = ⌈8 log(1/δ)⌉ equal blocks, with 0 &lt; δ ≤ 1/2 and K dividing n. Our own bound gives error at most 2σ√(K/n) with probability at least 1 − δ.

**How the definition helps.** Taking the median turns a large error into a count of bad blocks (our own). Chebyshev’s inequality bounds each block’s chance of exceeding the error threshold by one quarter (our own). Hoeffding’s inequality bounds the chance that at least half the independent blocks exceed it by exp(−K/8) (our own).

**Paper or page:** [On importance sampling and independent Metropolis-Hastings with an unbounded weight function](https://arxiv.org/abs/2411.09514v2). It says: “Denote by μ̂₍MoM,ₙ₎ the MoM estimator computed with K blocks of size m.”

**Sources:**

- [On importance sampling and independent Metropolis-Hastings with an unbounded weight function (arXiv 2411.09514v2)](https://arxiv.org/abs/2411.09514v2)

### Continuous margins make copulas unique

**Remember:** Continuous margins fill the cube on which the copula lives.

*Rules out counterexamples.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas). arXiv math.ST. Level 3: graduate.

**Definition.** A copula is a joint distribution on the unit cube with uniform individual coordinates. It links marginal distribution functions to a joint distribution by using their values as inputs.

**Problem.** Sklar’s theorem gives a unique copula for a joint law with continuous marginal distribution functions.

**How the definition helps.** Continuous marginal distribution functions attain every value strictly between zero and one, so the joint distribution fixes the copula throughout the open cube. Continuity of the copula then fixes its boundary values, by our own argument. Applying each marginal distribution function to its own coordinate gives uniform coordinates and constructs the copula. In our own counterexample, every bivariate copula gives the same joint law for two constant coordinates.

**Wikipedia:** [Copula (statistics)](https://en.wikipedia.org/wiki/Copula_%28statistics%29). It says: “This implies that the copula is unique if the marginals Fᵢ are continuous.”

**Sources:** none listed. No primary source with a working link was found.

### The outer-product definition makes linear transforms of Wishart matrices Wishart

**Remember:** Transform each normal vector before forming its outer product.

*True by definition.* MSC 62H10 (Multivariate distribution of statistics), 62H05. arXiv math.ST. Level 3: graduate.

**Definition.** Take n independent centered normal vectors Gᵢ with covariance V, and allow singular V. Define the Wishart law with scale V and n degrees of freedom as the law of the sum of their outer products GᵢGᵢᵀ. The alternative density formula covers the case of invertible V and n at least the dimension.

**Problem.** If W is Wishart with scale V, then CWCᵀ is Wishart with scale CVCᵀ for any compatible real matrix C. The number of degrees of freedom stays the same.

**How the definition helps.** The outer-product definition turns CWCᵀ into a sum of outer products of the transformed vectors CGᵢ (our own). These vectors are still independent and normal, now with covariance CVCᵀ (our own). The density definition cannot cover cases where CVCᵀ is singular or n is smaller than the output dimension (our own). The work shifts to proving the density formula when it applies and the linear image rule for normal vectors (our own).

**Wikipedia:** [Wishart distribution](https://en.wikipedia.org/wiki/Wishart_distribution). It says: “Then the Wishart distribution is the probability distribution of the p × p random matrix S = GGᵀ = ∑ᵢ₌₁ⁿ gᵢgᵢᵀ known as the scatter matrix.”

**Sources:**

- [H. Uhlig, On singular Wishart and singular multivariate beta distributions, Annals of Statistics 22 (1994) 395–405](https://doi.org/10.1214/aos/1176325375)

### Weighted characteristic-function gaps make distance covariance zero only at independence

**Remember:** Compare the whole joint law rather than one moment.

*True by definition.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 60E10. arXiv math.ST, math.PR. Level 3: graduate.

**Definition.** For dimensions p and q, put c(k) = π⁽ᵏ⁺¹⁾ᐟ²/Γ((k+1)/2) and write φ for characteristic functions. Squared distance covariance integrates \|φ₍X,Y₎(t,s) − φₓ(t)φᵧ(s)\|²/\[c(p)c(q)‖t‖ᵖ⁺¹‖s‖ᑫ⁺¹\] over nonzero t and s using Lebesgue measure (our own).

**Problem.** For random vectors X and Y with finite first moments, distance covariance is zero exactly when X and Y are independent (Theorem 3.2).

**How the definition helps.** Because the weight is positive, a zero integral forces the gap to vanish almost everywhere, and by continuity at every frequency (our own reasoning). Equal characteristic functions give equal laws, so the joint law is the product of the marginals. Ordinary covariance can miss dependence: for standard normal X and Y = X², the covariance E\[X³\] is zero (our own example). By our own reading, the real work is to show that the integral equals a simple formula in pairwise distances.

**Paper or page:** [A Basic Treatment of the Distance Covariance](https://arxiv.org/abs/2206.10135v1). It says: “For all X and Y, 𝒱²(X,Y) = 0 if and only if X and Y are independent.”

**Sources:**

- [Dominic Edelmann, Tobias Terzer, Donald Richards, A Basic Treatment of the Distance Covariance, Sankhya, Series B, 83 (2021), S12-S25](https://arxiv.org/abs/2206.10135v1)
- [Gábor J. Székely, Maria L. Rizzo, and Nail K. Bakirov, Measuring and testing dependence by correlation of distances (2007)](https://doi.org/10.1214/009053607000000505)

### Calibration bounds forecast spread

**Remember:** Calibrated forecasts average the true conditional mean.

*Rules out counterexamples.* MSC 62J02 (General nonlinear regression). arXiv stat.ML. Level 3: graduate.

**Definition.** A forecast F based on inputs X is calibrated if E\[Y ∣ F\] = F almost surely, where Y is the outcome.

**Problem.** Let Y and the forecasts be integrable. For every calibrated forecast F based on X and every convex function φ, E φ(F) ≤ E φ(E\[Y ∣ X\]).

**How the definition helps.** Calibration makes F the conditional average of E\[Y ∣ X\] given F, by our own use of iterated expectation. Jensen’s inequality then bounds the convex function of that average by the average of the convex function. In our own counterexample, Y is zero and the input takes values ±1 equally often. Forecasting the input gives a larger expected square than forecasting zero.

**Paper or page:** [Model selection with Gini indices under auto-calibration](https://arxiv.org/abs/2207.14372v3). It says: “is auto-calibrated for Y, and it strictly dominates in convex order any other auto-calibrated regression function”

**Sources:**

- [Model selection with Gini indices under auto-calibration](https://arxiv.org/abs/2207.14372v3)

### Orthogonal sums of squares are independent

**Remember:** Different orthogonal directions use different Gaussian coordinates.

*Rules out counterexamples.* MSC 62J10 (Analysis of variance and covariance (ANOVA)). arXiv math.ST. Level 3: graduate.

**Definition.** For Gaussian data, project the observation vector onto mutually orthogonal subspaces of positive dimension. Use the squared length of each projection as one sum of squares.

**Problem.** For a centered Gaussian vector with covariance σ²I and σ &gt; 0, the sums are independent. Each sum divided by σ² has the law of a sum of independent squared standard normal variables, one per subspace dimension. This is the chi-squared law for that dimension.

**How the definition helps.** Orthogonal subspaces separate the sums into disjoint groups of independent Gaussian coordinates. Our own argument chooses an orthonormal basis for each subspace and combines the bases. The covariance hypothesis gives independent coordinates in those directions. In our own counterexample, using the same line twice gives identical nonconstant sums.

**Wikipedia:** [Cochran's theorem](https://en.wikipedia.org/wiki/Cochran%27s_theorem). It says: “Cochran's theorem then states that Q₁ and Q₂ are independent, with chi-squared distributions with n − 1 and 1 degree of freedom respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Overlap guarantees finite logistic fits

**Remember:** Without a separating direction, the likelihood cannot improve by sending coefficients to infinity.

*Rules out counterexamples.* MSC 62J12 (Generalized linear models (logistic models)). arXiv stat.ME, stat.TH. Level 3: graduate.

**Definition.** In binary logistic regression, each observation has a score equal to its predictor vector dotted with the coefficient vector. Reverse the score’s sign for outcome zero. Call the sample overlapping if no coefficient vector makes every signed score nonnegative and at least one positive.

**Problem.** Assume the predictor matrix has linearly independent columns and the sample overlaps. Then exactly one finite coefficient vector maximizes the likelihood.

**How the definition helps.** Overlap forces some signed score below zero in every unit direction (our own). Compactness gives a uniform negative bound for the smallest score, so the log likelihood tends to minus infinity as coefficients diverge (our own). Strict concavity gives uniqueness (our own). If a direction instead gives every observation a positive signed score, scaling it up improves the fit indefinitely (our own).

**Wikipedia:** [Separation (statistics)](https://en.wikipedia.org/wiki/Separation_%28statistics%29). It says: “in case of a logistic regression with completely separated data the maximum appears at the parameter space's margin, leading to "infinite" estimates”

**Sources:**

- [A. Albert and J. A. Anderson, On the existence of maximum likelihood estimates in logistic regression models](https://doi.org/10.1093/biomet/71.1.1)

### Closed testing protects true hypotheses

**Remember:** Reject a claim only after rejecting every conjunction that contains it.

*Rules out counterexamples.* MSC 62J15 (Paired and multiple comparisons; multiple testing). arXiv stat.TH. Level 3: graduate.

**Definition.** For each nonempty subset of a finite family of hypotheses, test the claim that all its members are true. Each test must reject a true claim with probability at most α. Reject an original hypothesis only if the tests reject every such claim containing it.

**Problem.** The chance of rejecting any true original hypothesis is at most α, even when some original hypotheses are false.

**How the definition helps.** Rejecting any true hypothesis requires rejecting the claim that all the true hypotheses hold together. That claim is true, so its test rejects with probability at most α. In our own counterexample, two independent tests each reject a true hypothesis with probability α. Separate testing then makes at least one error with probability 1 − (1 − α)², greater than α for 0 &lt; α &lt; 1.

**Paper or page:** [Too Many, Too Improbable: testing joint hypotheses and closed testing shortcuts](https://arxiv.org/abs/2108.04731v3). It says: “by means of a closed testing procedure controls the FWER at level α in the strong sense.”

**Sources:**

- [Too Many, Too Improbable: testing joint hypotheses and closed testing shortcuts](https://arxiv.org/abs/2108.04731v3)
- [Marcus, Peritz, and Gabriel (1976), On closed testing procedures with special reference to ordered analysis of variance](https://doi.org/10.1093/biomet/63.3.655)

### Confidence sequences bound false alarms

**Remember:** If every set contains the truth, the sets cannot have empty intersection.

*True by definition.* MSC 62L10 (Sequential statistical analysis). arXiv stat.ME, stat.TH. Level 3: graduate.

**Definition.** A confidence sequence at level 1−α consists of random sets Cₜ satisfying Pθ(θ ∈ Cₜ for every t) ≥ 1−α for every θ.

**Problem.** Signal a change the first time the sets seen so far have empty intersection. If the parameter never changes, the chance of ever signaling is at most α.

**How the definition helps.** One parameter inside every set also lies in their intersection (our own). An empty intersection therefore requires at least one set to miss the unchanged parameter (our own). The work lies in constructing sets whose chance of ever missing the parameter is at most α (our own).

**Paper or page:** [Sequential change detection via backward confidence sequences](https://arxiv.org/abs/2302.02544v1). It says: “controls the probability of false alarm (PFA) at level α.”

**Sources:**

- [Sequential change detection via backward confidence sequences (arXiv 2302.02544v1)](https://arxiv.org/abs/2302.02544v1)

### Risk sets cancel baseline hazards

**Remember:** Compare event rates at the same time and the common factor cancels.

*True by definition.* MSC 62N02 (Estimation in survival analysis and censored data), 62P10. arXiv stat.AP, stat.ME. Level 3: graduate.

**Definition.** In a proportional hazards model, a subject’s instantaneous event rate is a common baseline rate times a subject-specific multiplier. The risk set holds the subjects who have not yet had the event. Multiply the conditional event probabilities within those sets instead of using the full event-time likelihood.

**Problem.** Take independent subjects with continuous event times and complete follow-up. At an event time with positive total event rate, condition on that time and the subjects still at risk. Each subject’s chance of being the one who fails equals their multiplier divided by the sum of the at-risk subjects’ multipliers.

**How the definition helps.** Conditioning on the event time and risk set makes each rate share the same baseline factor (our own). That factor cancels in the ratio (our own). The work moves to justifying the proportional rate model and deriving uncertainty for the estimate from these conditional comparisons (our own).

**Wikipedia:** [Proportional hazards model](https://en.wikipedia.org/wiki/Proportional_hazards_model). It says: “The first factor is the partial likelihood shown below, in which the baseline hazard has "canceled out".”

**Sources:**

- [D. R. Cox, Regression Models and Life-Tables](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x)

### Coupled proposals attain total variation

**Remember:** The stickier chain stays put whenever shared proposals fail to join the chains.

*True by definition.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO, stat.TH. Level 4: research.

**Definition.** Let w be the ratio of positive finite target and proposal densities on their common region. At each step draw a fresh proposal z and an independent uniform U on \[0,1\], sharing both draws between chains. Each chain at x moves to z if U &lt; min(1,w(z)/w(x)) and otherwise stays at x.

**Problem.** Start the chains at distinct points. After t steps, their probability of still differing equals the largest difference between the probabilities they assign to any one event.

**How the definition helps.** Until meeting, the chain starting at the heavier point x stays there and the other chain’s weight never exceeds w(x) (our own). Only proposals lighter than x can move the other chain alone, and accepting at x makes both chains meet (our own). Continuous proposals never revisit x almost surely, so disagreement has exactly the probability difference on {x} (our own). Every event’s probability difference is bounded by disagreement under the coupling (our own).

**Paper or page:** [On importance sampling and independent Metropolis-Hastings with an unbounded weight function](https://arxiv.org/abs/2411.09514v2). It says: “for all t ≥ 1, \|Pᵗ(𝐱,·) − Pᵗ(𝐲,·)\|ₜᵥ = ℙ(𝐱,𝐲)(τ &gt; t) = max(r(𝐱),r(𝐲))ᵗ.”

**Sources:**

- [On importance sampling and independent Metropolis-Hastings with an unbounded weight function (arXiv 2411.09514v2)](https://arxiv.org/abs/2411.09514v2)

### Reweighted samples restore unbiasedness

**Remember:** Weight the whole pool by the same factor that normalizes the point weights.

*True by definition.* MSC 62-08 (Computational methods for problems pertaining to statistics). arXiv stat.CO. Level 4: research.

**Definition.** Draw N ≥ 1 independent points from a proposal law Q, and give each point weight w equal to the target density relative to Q. Multiply this pool’s law by its average weight to obtain the new sampling law. Within that law, average function values with weights proportional to w.

**Problem.** For an integrable function, the weighted average in a pool from the new law has the target mean. The target law must have a density relative to the proposal law.

**How the definition helps.** The average weight in the new density cancels the denominator in the weighted average (our own). Pools with zero total weight have zero probability under the new law (our own). Each remaining term integrates to the target mean after weighting its proposal density (our own). The work moves from correcting a biased average to sampling from the new law (our own).

**Paper or page:** [BR-SNIS: Bias Reduced Self-Normalized Importance Sampling](https://arxiv.org/abs/2207.06364v2). It says: “For every $N \\in \\mathbb{N}<sup>\*</sup> $ and $\\pi $-integrable function $f$, \\\[ {\\textstyle \\int \\targetkern f(x<sup>1:N</sup>) \\boldsymbol{\\pi}<sub>N</sub> ( {d} x<sup>1:N</sup>) = \\pi (f) .} \\\]”

**Sources:**

- [G. Cardoso, S. Samsonov, A. Thin, E. Moulines and J. Olsson, BR-SNIS: Bias Reduced Self-Normalized Importance Sampling](https://arxiv.org/abs/2207.06364v2)

### A log score that uses survival for censored cases stays strictly proper

**Remember:** Score survival when the event itself is not seen.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 62C05 (General considerations in statistical decision theory), 62N01. arXiv stat.ME, stat.AP. Level 4: research.

**Definition.** A competing-risks forecast gives a density for event time and type and a survival probability at each time. Charge minus the log forecast density for an observed event and minus the log forecast survival probability at a censoring time.

**Problem.** Under independent censoring, assume the observed law identifies the event law and the true expected score is finite. Then the true joint law of event time and type uniquely minimizes the expected score.

**How the definition helps.** The score equals the observed-data negative log likelihood up to censoring terms common to all forecasts (our own). Gibbs’ inequality minimizes its expectation exactly at forecasts giving the true observed law (our own). Identifiability then gives uniqueness of the event law (our own).

**Paper or page:** [A Proper Scoring Rule for Validation of Competing Risks Models](https://arxiv.org/abs/2104.01000v1). It says: “We propose a version of the logarithmic scoring rule for competing risks data and show that it remains strictly proper under non-informative censoring.”

**Sources:**

- [Zoe Guan, A Proper Scoring Rule for Validation of Competing Risks Models, arXiv:2104.01000v1 (2021)](https://arxiv.org/abs/2104.01000v1)

### A positively weighted strictly proper score makes the whole sum strictly proper

**Remember:** One strict term with positive weight breaks every tie.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory). arXiv stat.ME, math.ST. Level 4: research.

**Definition.** A scoring rule is proper if the true law minimizes the expected loss, and strictly proper if it is the only minimizer. The aggregated score is a weighted sum of proper scores with nonnegative weights.

**Problem.** For a finite weighted sum with finite expected component losses, the aggregated score is proper. It is strictly proper if some strictly proper component has a positive weight.

**How the definition helps.** The extra expected loss of a wrong forecast is a nonnegative weighted sum of nonnegative terms, so propriety follows by definition (our own unpacking). A strict component with positive weight makes one term positive, so no wrong forecast ties with the truth. Negative weights break the result. Weights 1 and −2 on two copies of a strict score S give −S, which the truth maximizes (our own counterexample).

**Paper or page:** [Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation](https://arxiv.org/abs/2407.00650v1). It says: “If at least one scoring rule Sᵢ is strictly proper relative to ℱ and wᵢ &gt; 0, the aggregated scoring rule S<sub>𝒮,𝐰</sub> is strictly proper relative to ℱ.”

**Sources:**

- [Romain Pic, Clément Dombry, Philippe Naveau, Maxime Taillardat, Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation, arXiv:2407.00650v1 (2024)](https://arxiv.org/abs/2407.00650v1)

### Candidate labels retain calibrated forecasts

**Remember:** Trying both labels includes the forecast trained with the right one.

*Makes the theorem clean to state or prove.* MSC 62C05 (General considerations in statistical decision theory). arXiv stat.ML. Level 4: research.

**Definition.** For each binary candidate label, append the new labeled case and fit by the same order-independent rule. Require the residuals, multiplied by each chosen input function, to average zero in each augmented sample. Return the two fitted predictions for the new case.

**Problem.** Suppose the joint law of the cases is unchanged by reordering, and all residual products have finite means. For each chosen function, the expected residual product for the new case is zero for the candidate fitted with its true label.

**How the definition helps.** Trying both labels includes the fit that treats the new case exactly like a training case. In our own argument, symmetry gives every case the same expected residual product for each fixed function. That expectation equals the expected sample average, which is zero by construction. Finding fits that satisfy every required equation carries the work.

**Paper or page:** [Generalized Venn and Venn-Abers Calibration with Applications in Conformal Prediction](https://arxiv.org/abs/2502.05676v3). It says: “contains the perfectly multicalibrated prediction”

**Sources:**

- [Generalized Venn and Venn-Abers Calibration with Applications in Conformal Prediction](https://arxiv.org/abs/2502.05676v3)

### Count deletion estimates Poisson risk

**Remember:** Removing one count shifts a Poisson expectation by its mean.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory), 62F40. arXiv stat.ME. Level 4: research.

**Definition.** Let g(Y) fit means to independent Poisson counts Y and start with the squared error ‖Y − g(Y)‖². For each i with Yᵢ &gt; 0, add 2Yᵢ\[gᵢ(Y) − gᵢ(Y − eᵢ)\], where eᵢ subtracts one count when removed.

**Problem.** If each fitted coordinate has finite second moment, this corrected sum estimates expected squared prediction error without bias. Evaluate prediction error against an independent vector of counts with the same means.

**How the definition helps.** Deleting one count makes the correction recover the cross term that ordinary training error misses. In our own calculation, k times the Poisson probability of k equals the mean times the probability of k − 1 for k ≥ 1. Summing over k converts each count-weighted deleted fit into an unbiased estimate of the unknown mean times the expected original fit. Expanding the fresh-data squared error then gives the stated correction.

**Paper or page:** [Unbiased Test Error Estimation in the Poisson Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2212.01943v3). It says: “where we abbreviate g₋(Y) = (g₁(Y−e₁), …, gₙ(Y−eₙ))”

**Sources:**

- [Unbiased Test Error Estimation in the Poisson Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2212.01943v3)

### Tilted risk moves continuously from minimum loss through mean to maximum

**Remember:** Positive tilts favor the largest loss, while negative tilts favor the smallest.

*Makes the theorem clean to state or prove.* MSC 62C05 (General considerations in statistical decision theory), 68Q32. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** For N losses and a nonzero real number t, tilted risk is (1/t) log((1/N) ∑ exp(t fᵢ)), where fᵢ are the losses. At t = 0 it is the ordinary mean of the losses.

**Problem.** Tilted risk tends to the minimum loss as t → −∞ and to the maximum loss as t → +∞. As t → 0 it tends to the mean, so the value at zero makes it continuous.

**How the definition helps.** One formula makes the minimum, the mean and the maximum points of a single continuous family. Our own explanation is that for large \|t\| the term exp(t fᵢ) with the extreme loss dominates the sum. The factor 1/N then adds only −(log N)/t, which tends to zero. Near t = 0, a first-order expansion of the exponential gives the mean.

**Paper or page:** [On Tilted Losses in Machine Learning: Theory and Applications](https://arxiv.org/abs/2109.06141v3). It says: “R̃(−∞; θ) ≔ lim as t → −∞ of R̃(t; θ) = Ř(θ), R̃(0; θ) ≔ lim as t → 0 of R̃(t; θ) = R̄(θ)”

**Sources:**

- [Tian Li, Ahmad Beirami, Maziar Sanjabi, Virginia Smith, On Tilted Losses in Machine Learning: Theory and Applications, arXiv:2109.06141v3 (2023)](https://arxiv.org/abs/2109.06141v3)

### Transforming forecast and observation together keeps a scoring rule proper

**Remember:** Transform the forecast and the observation together to keep honesty optimal.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory). arXiv stat.ME, math.ST. Level 4: research.

**Definition.** A proper score minimizes expected loss at the true forecast law, uniquely so for a strictly proper score. Given a measurable map T, the transformed score evaluates T(y) against the distribution of T(Y) when Y follows the forecast law.

**Problem.** Propriety on transformed laws implies propriety of the transformed score. On standard Borel outcome spaces, strict propriety carries over for an injective measurable transformation T.

**How the definition helps.** Under each true law, the expected transformed loss equals the original expected loss for the transformed laws (our own). A proper score therefore favors reporting the truth, and strict propriety gives uniqueness when distinct forecast laws have distinct images (our own).

**Paper or page:** [Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation](https://arxiv.org/abs/2407.00650v1). It says: “is proper relative to ℱ. If S is strictly proper relative to T(ℱ) and T is injective, then the resulting scoring rule S<sub>T</sub> is strictly proper relative to ℱ.”

**Sources:**

- [Romain Pic, Clément Dombry, Philippe Naveau, Maxime Taillardat, Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation, arXiv:2407.00650v1 (2024)](https://arxiv.org/abs/2407.00650v1)

### Under log loss, minimum excess risk equals conditional mutual information

**Remember:** With log loss, the price of not knowing the model is mutual information.

*True by definition.* MSC 62C10 (Bayesian problems; characterization of Bayes procedures), 94A17. arXiv cs.LG, cs.IT. Level 4: research.

**Definition.** For predicting Y, log loss charges minus the log probability assigned to its observed outcome. Minimum excess risk subtracts the least expected loss using (X,Zⁿ,W) from the least expected loss using only (X,Zⁿ). Both minima range over all conditional forecast laws.

**Problem.** For discrete Y with finite conditional entropy given (X,Zⁿ), minimum excess risk under log loss equals the conditional mutual information I(W;Y given X,Zⁿ).

**How the definition helps.** Gibbs’ inequality makes the true conditional forecast optimal with either information set (our own). Its expected log loss is the corresponding conditional entropy (our own). Subtracting those entropies gives the conditional mutual information (our own).

**Paper or page:** [Minimum Excess Risk in Bayesian Learning](https://arxiv.org/abs/2012.14868v2). It says: “For the log loss, MERₗₒg = I(W; Y \| X, Zⁿ).”

**Sources:**

- [Aolin Xu, Maxim Raginsky, Minimum Excess Risk in Bayesian Learning, arXiv:2012.14868v2 (2021)](https://arxiv.org/abs/2012.14868v2)

### Flip interventions give treatment effects identifiable without positivity

**Remember:** Flip only where the target treatment is supported.

*Rules out counterexamples. Confidence: medium.* MSC 62D20 (Causal inference from observational studies). arXiv stat.ME. Level 4: research.

**Definition.** For binary treatment at each visit, keep the target treatment and switch the other treatment to the target with a specified history-dependent probability. Require this probability to vanish whenever the target has zero conditional probability at that history (our own).

**Problem.** Assume consistency and sequential exchangeability given observed histories, with flip probabilities determined by the observed law or specified in advance. These longitudinal flip effects remain identifiable even when some treatments have zero probability at some histories.

**How the definition helps.** Each flip assigns positive probability only to treatments observed at that history (our own). An unconditional switch would require outcomes from unsupported treatments (our own). The longitudinal g-formula averages the observed conditional laws along the supported histories to identify the intervention mean (our own).

**Paper or page:** [Longitudinal weighted and trimmed treatment effects with flip interventions](https://arxiv.org/abs/2506.09188v1). It says: “With longitudinal data, we then show that flip interventions provide interpretable weighting or trimming on non-baseline covariates and, crucially, yield effects that are identifiable under arbitrary positivity violations.”

**Sources:**

- [Alec McClean, Alexander W. Levis, Nicholas Williams, Ivan Diaz, Longitudinal weighted and trimmed treatment effects with flip interventions, arXiv:2506.09188v1 (2025)](https://arxiv.org/abs/2506.09188v1)

### Posterior equals prior exactly when the likelihood ignores the hidden variable

**Remember:** A flat likelihood leaves the prior unchanged.

*True by definition.* MSC 62F15 (Bayesian inference), 68T07. arXiv stat.ML, cs.LG. Level 4: research.

**Definition.** Fix data x and parameter θ with finite positive marginal likelihood. Call the likelihood flat when p(x given z,θ) is constant for prior-almost every z (our own). Posterior collapse means equality of posterior and prior laws.

**Problem.** For fixed x and θ, posterior collapse occurs exactly when the hidden-variable likelihood is flat prior-almost surely (our own).

**How the definition helps.** Bayes’ rule gives the posterior density relative to the prior as the likelihood divided by the marginal likelihood (our own). This ratio equals one prior-almost surely exactly when the likelihood is constant prior-almost surely (our own).

**Paper or page:** [Posterior Collapse and Latent Variable Non-identifiability](https://arxiv.org/abs/2301.00537v1). It says: “The local latent variables z are non-identifiable at θ̂ if and only if the posterior of the latent variable z collapses, p(z \| x) = p(z).”

**Sources:**

- [Yixin Wang, David M. Blei, John P. Cunningham, Posterior Collapse and Latent Variable Non-identifiability, arXiv:2301.00537v1 (2023)](https://arxiv.org/abs/2301.00537v1)

### Posterior ranks detect marginal errors

**Remember:** A randomized probability rank tests the whole chosen marginal law.

*Makes the theorem clean to state or prove.* MSC 62F15 (Bayesian inference). arXiv stat.TH. Level 4: research.

**Definition.** Fix the data and let F be a proposed conditional distribution function for a real quantity T drawn from its true conditional law. Independently draw U uniformly on \[0,1\] and set R = F(T−) + U(F(T) − F(T−)), where F(T−) is the left limit.

**Problem.** At these fixed data, R is uniform on (0, 1) exactly when F is the true conditional distribution function.

**How the definition helps.** Randomizing within each jump gives a uniform rank under the proposed law by the randomized probability integral transform (our own). Conversely, for every t, the events T ≤ t and R ≤ F(t) can differ only where R = F(t) (our own). Under uniformity that equality has probability zero, giving P(T ≤ t) = F(t) (our own).

**Paper or page:** [Simulation-Based Calibration Checking for Bayesian Computation: The Choice of Test Quantities Shapes Sensitivity](https://arxiv.org/abs/2211.02383v3). It says: “if and only if ∀x ∈ \[0, 1\]: q₍φ,𝑓₎(x \| y) = x.”

**Sources:**

- [Simulation-Based Calibration Checking for Bayesian Computation: The Choice of Test Quantities Shapes Sensitivity](https://arxiv.org/abs/2211.02383v3)

### Gaussian noise splits training and testing

**Remember:** Opposite noise weights cancel the shared covariance.

*True by definition.* MSC 62F40 (Bootstrap, jackknife and other resampling methods). arXiv stat.ME. Level 4: research.

**Definition.** Let Y be a Gaussian vector with covariance σ²I. Independently draw centered Gaussian noise W with the same covariance. For α &gt; 0, train on T = Y + √α W and test on S = Y − W/√α.

**Problem.** The training and test vectors are independent. For a prediction rule g, subtract nσ²(1/α − α) from the squared distance between S and g(T), where n is the dimension. With finite squared error, this estimates the expected squared distance between g(T) and an independent copy of T without bias.

**How the definition helps.** The opposite noise weights cancel the shared covariance, so the jointly Gaussian vectors are independent. Our own calculation replaces a fresh training-distribution draw with S, which has the same mean but a different variance. Subtracting the difference in total variances corrects the squared error. Estimating risk at the original noise level takes a separate argument.

**Paper or page:** [Unbiased Risk Estimation in the Normal Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2111.09447v3). It says: “is unbiased for the noise-elevated risk”

**Sources:**

- [Unbiased Risk Estimation in the Normal Means Problem via Coupled Bootstrap Techniques](https://arxiv.org/abs/2111.09447v3)

### A density ratio turns gradient-free Stein discrepancy into the usual one

**Remember:** Differentiate the easier density, then reweight to check the target.

*True by definition.* MSC 62G10 (Nonparametric hypothesis testing), 60B10, 46E22. arXiv stat.CO, stat.ML. Level 4: research.

**Definition.** For positive densities p and differentiable q, write A<sub>q</sub> f = div f + f · ∇log q for differentiable vector fields f. Fix a unit ball B of Stein test fields for q. Define Dₚ,ᵩ(π) as the supremum over f in B of Eπ\[(q/p)A<sub>q</sub> f\] (our own).

**Problem.** Assume Z = Eπ\[q/p\] is finite and positive and each weighted test field’s operator value is integrable. With dπ̄ = (q/p)dπ/Z, the discrepancy Dₚ,ᵩ(π) equals Z times Dᵩ,ᵩ(π̄).

**How the definition helps.** The mean of (q/p) times a function under π equals Z times its mean under π̄, so the result is one line (our own unpacking). When π equals p, the reweighted law is q and Z = 1, so the discrepancy is zero (our own check). The identity lets known results for the usual discrepancy transfer to the new one. Proving that a small discrepancy forces π close to p still takes separate conditions.

**Paper or page:** [Gradient-Free Kernel Stein Discrepancy](https://arxiv.org/abs/2207.02636v2). It says: “Then π̄ ∈ 𝒫(ℝᵈ) and D<sub>p,q</sub>(π) = Z D<sub>q,q</sub>(π̄).”

**Sources:**

- [Matthew A Fisher, Chris. J Oates, Gradient-Free Kernel Stein Discrepancy, arXiv:2207.02636v2 (2022)](https://arxiv.org/abs/2207.02636v2)

### Characteristic kernels distinguish conditional laws

**Remember:** Distinct laws need distinct means, and squaring prevents cancellation across groups.

*Rules out counterexamples.* MSC 62G10 (Nonparametric hypothesis testing), 68T05. arXiv stat.ML. Level 4: research.

**Definition.** A law’s kernel mean is its expected feature vector for the chosen kernel. A kernel is characteristic if distinct probability laws have distinct kernel means. Compare two conditional laws given Z by averaging the squared Hilbert space distance between their kernel means over Z.

**Problem.** When the kernel mean exists and is one-to-one, the averaged squared distance is zero exactly when the conditional laws agree almost surely.

**How the definition helps.** In our own proof, zero average squared distance forces equal kernel means almost surely, and injectivity then forces equal conditional laws. The work lies in proving that the means exist and that the chosen kernel separates laws. For our own counterexample, the linear kernel on the real line represents each law by its ordinary mean. A point mass at zero and a fair mixture of −1 and 1 have the same mean in every group.

**Paper or page:** [A Kernel-Based Conditional Two-Sample Test Using Nearest Neighbors (with Applications to Calibration, Regression Curves, and Simulation-Based Inference)](https://arxiv.org/abs/2407.16550v2). It says: “ECMMD²\[ℱ, P₍X∣Z₎, P₍Y∣Z₎\] = 0 if and only if ℙ\[P₍X∣Z₎ = P₍Y∣Z₎\] = 1.”

**Sources:**

- [Anirban Chatterjee, Ziang Niu, Bhaswar B. Bhattacharya. A Kernel-Based Conditional Two-Sample Test Using Nearest Neighbors (with Applications to Calibration, Regression Curves, and Simulation-Based Inference). 2024.](https://arxiv.org/abs/2407.16550v2)

### Weighted permutations restore exchangeability

**Remember:** Weight the shuffled labels by the odds that produced them.

*True by definition.* MSC 62G10 (Nonparametric hypothesis testing). arXiv stat.ME. Level 4: research.

**Definition.** Pool independent samples from two populations, keeping individual observations distinguishable but hiding their labels. Keep the original group sizes. Draw a new labeling with probability proportional to the product of the proposed density ratios for observations assigned the second label.

**Problem.** Suppose the second population density equals the first times a known positive function, up to a constant. Given the unlabeled pool, permuting the original labeling and independent weighted redraws leaves their joint law unchanged.

**How the definition helps.** Weighted relabeling gives each assignment its correct conditional probability, whereas uniform relabeling ignores differences between the densities. In our own calculation, each assignment likelihood contains the same product of first-population densities. Canceling that product leaves the proposed weights. Independent draws using those weights therefore have the same conditional law as the original assignment.

**Paper or page:** [Nonparametric inference for ratios of densities via uniformly valid and powerful permutation tests](https://arxiv.org/abs/2505.24529v2). It says: “Then the sequence (Z, Z⁽¹⁾, …, Z⁽ᴴ⁾) is exchangeable.”

**Sources:**

- [Nonparametric inference for ratios of densities via uniformly valid and powerful permutation tests](https://arxiv.org/abs/2505.24529v2)

### With polynomial test functions, zero Stein discrepancy means the first moments agree

**Remember:** Polynomial test functions make the discrepancy check finitely many moments.

*Makes the theorem clean to state or prove.* MSC 62G10 (Nonparametric hypothesis testing), 60B10. arXiv stat.CO, stat.ML. Level 4: research.

**Definition.** For Gaussian density q, transform each scalar polynomial f by Af = Δf + ∇log q · ∇f. The discrepancy tests the expected transform of every monomial through degree r, vanishing when all these expectations equal zero (our own).

**Problem.** For a nonsingular Gaussian target and a comparison law with finite moments through degree r, zero discrepancy is equivalent to agreement of all those moments.

**How the definition helps.** Whitening the Gaussian preserves polynomial degree and turns the operator into a Gaussian generator with positive definite diffusion matrix (our own). In principal coordinates its polynomial eigenbasis consists of products of Hermite polynomials, with nonzero eigenvalues at every positive degree (our own). Thus zero transformed means force exactly the Gaussian polynomial means through degree r (our own).

**Paper or page:** [The Polynomial Stein Discrepancy for Assessing Moment Convergence](https://arxiv.org/abs/2412.05135v1). It says: “In the Bernstein-von Mises limit, where the posterior has a symmetric positive-definite covariance matrix Σ, PSD = 0 if and only if the multi-index moments of P and Q match up to order r.”

**Sources:**

- [Narayan Srinivasan, Matthew Sutton, Christopher Drovandi, Leah F South, The Polynomial Stein Discrepancy for Assessing Moment Convergence, arXiv:2412.05135v1 (2024)](https://arxiv.org/abs/2412.05135v1)

### Calibrating only against units that could have been selected gives conditional coverage

**Remember:** Calibrate against the cases that could have been selected instead.

*Makes the theorem clean to state or prove.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62G30. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** For candidate label y, compute scores equivariantly under permutations of the augmented sample. Keep calibration units whose swap into the test position preserves its selection and selection type. Among the candidate and retained units (m in total), accept y when fewer than ⌈(1−α)m⌉ scores are strictly smaller than its score.

**Problem.** Suppose the selection rule does not depend on the order of the calibration units, and the data are exchangeable. Then the prediction set covers the selected unit's outcome with probability at least 1 − α, conditional on that selection.

**How the definition helps.** Given the selection event, the test unit's score is exchangeable with the reference scores, so the usual rank argument works again (our own unpacking). Ordinary conformal sets can fail for selected units, because selection favors unusual cases, as the abstract says. The paper also gives fast ways to compute the reference set for common selection rules.

**Paper or page:** [Confidence on the Focal: Conformal Prediction with Selection-Conditional Coverage](https://arxiv.org/abs/2403.03868v3). It says: “This paper presents a general framework for constructing a prediction set with finite-sample exact coverage, conditional on the unit being selected by a given procedure.”

**Sources:**

- [Ying Jin, Zhimei Ren, Confidence on the Focal: Conformal Prediction with Selection-Conditional Coverage, arXiv:2403.03868v3 (2024)](https://arxiv.org/abs/2403.03868v3)

### Consonant plausibility makes conformal p-values valid for every assertion at once

**Remember:** A set is at least as plausible as any outcome it contains.

*True by definition. Confidence: medium.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62A01. arXiv stat.ME, math.ST. Level 4: research.

**Definition.** For candidate y, let p(y) be its conformal p-value. Define the plausibility of each nonempty assertion A as sup{p(y) : y ∈ A}, and assign zero to the empty assertion.

**Problem.** Assume the conformal p-value at the true next observation is valid under the sampling law. For each α ∈ \[0,1\], the probability that some assertion containing that observation has plausibility at most α is at most α (our own).

**How the definition helps.** Taking a supremum means any set that contains the true value has plausibility at least that of the true value, by our own reasoning. So one bad event covers every set at once: the true value's own plausibility is at most α. Conformal prediction already bounds the chance of this event by α.

**Paper or page:** [Validity, consonant plausibility measures, and conformal prediction](https://arxiv.org/abs/2001.09225v3). It says: “We go on to show that both types of prediction validity can be achieved by interpreting the conformal prediction output as the contour function of a consonant plausibility measure.”

**Sources:**

- [Leonardo Cella, Ryan Martin, Validity, consonant plausibility measures, and conformal prediction, International Journal of Approximate Reasoning, volume 141, pages 110--130, 2022](https://arxiv.org/abs/2001.09225v3)

### Rank cutoffs make the coverage of split conformal prediction distribution free

**Remember:** Only the rank positions matter when scores are exchangeable and distinct.

*True by definition.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62G30. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** For n calibration scores and 0 &lt; α &lt; 1, put k = ⌈(1−α)(n+1)⌉. Accept a candidate whose score is at most the kth smallest calibration score, using infinity if k = n+1.

**Problem.** Assume n calibration and m future scores are jointly exchangeable and almost surely distinct. The coverage fraction’s law depends only on n, α and m. For fixed n with k ≤ n, the fraction converges in distribution to Beta(k,n+1−k) as m grows.

**How the definition helps.** Uniform pooled ranks make the coverage count the number of future scores preceding the kth calibration score (our own). Its law therefore matches the count from independent uniform scores (our own). There, the fraction approaches the kth uniform calibration order statistic, which has law Beta(k,n+1−k) (our own). For k = n+1, all points are covered (our own).

**Paper or page:** [Universal distribution of the empirical coverage in split conformal prediction](https://arxiv.org/abs/2303.02770v2). It says: “Both distributions are universal, being determined solely by the nominal miscoverage level and the calibration sample size”

**Sources:**

- [Paulo C. Marques F, Universal distribution of the empirical coverage in split conformal prediction, Statistics &amp; Probability Letters, Volume 219, 2025, 110350.](https://arxiv.org/abs/2303.02770v2)

### Residual correction gives doubly robust coverage

**Remember:** Correct a target prediction with a weighted source residual.

*True by definition.* MSC 62G15 (Nonparametric tolerance and confidence regions). arXiv stat.ME. Level 4: research.

**Definition.** Let C indicate coverage by a fixed prediction set, m(X) predict its conditional mean, and w(X) estimate the target-to-source input density ratio. The corrected coverage is the target mean of m(X) plus the source mean of w(X)(C − m(X)).

**Problem.** Assume a common outcome law given inputs, target inputs absolutely continuous relative to source inputs, and integrable terms. The corrected population average equals target coverage if either m or w is correct.

**How the definition helps.** A correct m gives the same conditional coverage in both populations, and the source correction then has mean zero (our own). A correct w converts the source correction into the target mean of C − m(X), canceling the prediction term (our own).

**Paper or page:** [Doubly Robust Calibration of Prediction Sets under Covariate Shift](https://arxiv.org/abs/2203.01761v3). It says: “holds true, whenever either of the following holds true:”

**Sources:**

- [Doubly Robust Calibration of Prediction Sets under Covariate Shift](https://arxiv.org/abs/2203.01761v3)

### Classifier odds recover copula density

**Remember:** Compare joint ranks to independent ranks using classifier odds.

*True by definition.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas). arXiv stat.ML. Level 4: research.

**Definition.** Transform each coordinate by its continuous marginal distribution function. The copula density is the density of the resulting vector when it exists. Choose the vector’s joint law or the uniform law on the cube with equal probability, draw a point and label it by its source.

**Problem.** When the transformed joint law has a density, the true conditional odds of the joint label equal the copula density almost everywhere on the cube.

**How the definition helps.** The uniform comparison class has density one, so its use turns the usual density ratio into the copula density itself. In our own application of Bayes’ rule, equal class probabilities cancel from the conditional odds. Estimating those odds from data still requires fitting a classifier, a rule that predicts the class label.

**Paper or page:** [Your copula is a classifier in disguise: classification-based copula density estimation](https://arxiv.org/abs/2411.03014v2). It says: “we train a classifier to distinguish samples from the joint density from those of the product of independent marginals, recovering the copula density in the process.”

**Sources:**

- [Your copula is a classifier in disguise: classification-based copula density estimation](https://arxiv.org/abs/2411.03014v2)

### Counting only interior mass guarantees a halfspace that attains halfspace depth

**Remember:** Mass on the boundary need not count against the limit.

*True by definition. Confidence: medium.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas), 62R20. arXiv math.ST. Level 4: research.

**Definition.** For a finite Borel measure on ℝᵈ, the halfspace depth of x is the infimum of masses of closed halfspaces containing x. A generalized minimizing halfspace has x on its boundary and interior mass at most that depth.

**Problem.** Every finite measure has a generalized minimizing halfspace at every point. Call the measure smooth at x if every hyperplane through x has zero mass. Then some closed halfspace has mass equal to the depth.

**How the definition helps.** Shift minimizing cuts to pass through x, then take a convergent subsequence of unit normals (our own). Every point inside the limiting cut eventually belongs to the approximating cuts, so Fatou’s lemma bounds its interior mass by the depth (our own). Zero boundary mass then gives attainment (our own). An atom at x belongs to every closed cut through x but to none of their interiors, illustrating the boundary obstruction (our own).

**Paper or page:** [Halfspace depth for general measures: The ray basis theorem and its consequences](https://arxiv.org/abs/2106.00616v1). It says: “For any μ ∈ ℳ(ℝᵈ) there exists a generalized minimizing halfspace of μ at any point x ∈ ℝᵈ. If μ is smooth at x, then there exists a minimizing halfspace of μ at x.”

**Sources:**

- [Petra Laketa, Stanislav Nagy, Halfspace depth for general measures: The ray basis theorem and its consequences, Stat Papers 63, 849-883 (2022)](https://arxiv.org/abs/2106.00616v1)

### Martingale difference divergence is zero exactly when the conditional mean is constant

**Remember:** Probe the mean with every frequency, not just with the predictor.

*Makes the theorem clean to state or prove.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 62H15, 60E10. arXiv math.ST. Level 4: research.

**Definition.** For real Y and X in ℝᵖ, put g(s) = E\[(Y − E\[Y\]) exp(i⟨s,X⟩)\]. Squared martingale difference divergence integrates \|g(s)\|²/(cₚ‖s‖ᵖ⁺¹) over nonzero frequencies using Lebesgue measure, with cₚ = π⁽ᵖ⁺¹⁾ᐟ²/Γ((p+1)/2) (our own).

**Problem.** If Y and X have finite second moments, the divergence is zero exactly when E\[Y \| X\] = E\[Y\] almost surely.

**How the definition helps.** The positive weight and continuity make zero divergence equivalent to g vanishing everywhere (our own). This is the Fourier transform of the signed measure with density E\[Y given X\] − E\[Y\] relative to the law of X (our own). Fourier uniqueness makes its vanishing equivalent to zero conditional mean deviation almost surely (our own).

**Paper or page:** [Testing the martingale difference hypothesis using martingale difference divergence function](https://arxiv.org/abs/2306.13963v2). It says: “In particular, the measure equals zero if and only if the considered time-series components are conditionally mean-independent.”

**Sources:**

- [Luca Mattia Rolla, Testing the martingale difference hypothesis using martingale difference divergence function, arXiv:2306.13963v2 (2023)](https://arxiv.org/abs/2306.13963v2)
- [Xiaofeng Shao and Jingsi Zhang, Martingale Difference Correlation and Its Use in High-Dimensional Variable Screening (2014)](https://doi.org/10.1080/01621459.2014.887012)

### Separating joint laws from products makes a kernel criterion detect independence

**Remember:** Compare the joint law to the law with the same marginals but no dependence.

*True by definition.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 46E22, 62H15. arXiv stat.ML, math.ST. Level 4: research.

**Definition.** A kernel on a space gives each point a feature vector in a Hilbert space, and each probability law the mean of its feature vectors. The kernel is characteristic if distinct laws have distinct means. A kernel on a product space is ℐ-characteristic if each joint law and the product of its marginals have different means, unless they are equal.

**Problem.** Take bounded characteristic kernels k₁ and k₂ on two second-countable spaces, which are spaces with a countable base. Then the Hilbert–Schmidt independence criterion of the product kernel k₁ ⊗ k₂ is zero exactly when the two variables are independent. This criterion is the squared distance between the means of the joint law and of the product of the marginals.

**How the definition helps.** By the definition of ℐ-characteristic, the criterion is zero exactly when the joint law equals the product of its marginals, which is independence. So the statement about independence holds by definition, and the work moves to Theorem 3(i): the product of two characteristic kernels is ℐ-characteristic. By our own observation, this asks less than separating every pair of laws on the product space. The paper also studies when that stronger property holds.

**Paper or page:** [Characteristic and Universal Tensor Product Kernels](https://arxiv.org/abs/1708.08157v4). It says: “If k₁ and k₂ are characteristic, then k₁ ⊗ k₂ is ℐ-characteristic.”

**Sources:**

- [Zoltan Szabo, Bharath K. Sriperumbudur, Characteristic and Universal Tensor Product Kernels, Journal of Machine Learning Research 18(233):1-29, 2018](https://arxiv.org/abs/1708.08157v4)
- [Arthur Gretton, Olivier Bousquet, Alex Smola, and Bernhard Schölkopf, Measuring Statistical Dependence with Hilbert-Schmidt Norms (2005)](https://doi.org/10.1007/11564089_7)

### Summing rank dependence over all subsets detects dependence that pairs miss

**Remember:** Add every subset’s dependence term so no term can cancel another.

*Rules out counterexamples.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 62H15, 49Q22. arXiv stat.ME, math.ST. Level 4: research.

**Definition.** For each absolutely continuous vector marginal, use its population optimal transport rank Rⱼ to the uniform reference cube. For each subset S of size at least two, integrate \|E∏ⱼ∈S(exp(i⟨tⱼ,Rⱼ⟩) − E exp(i⟨tⱼ,Rⱼ⟩))\|² against the product distance-covariance frequency weights. Squared rank joint distance covariance sums these integrals with strictly positive weights (our own).

**Problem.** For any positive weights, rank joint distance covariance is zero exactly when the variables are mutually independent (Proposition 2.10).

**How the definition helps.** Zero sum forces every nonnegative subset integral to vanish (our own). Expanding centered products by increasing subset size then factors each joint characteristic function into its marginals, giving independence by Fourier uniqueness (our own). Population transport ranks preserve independence in both directions under absolute continuity (our own). Two independent uniforms and their sum modulo one show that checking pairs alone can miss joint dependence (our own).

**Paper or page:** [Distribution-free joint independence testing and robust independent component analysis using optimal transport](https://arxiv.org/abs/2211.15639v2). It says: “For any vector positive weights C, RJdCov²(X; C) = 0 if and only if (X₁, X₂, …, Xᵣ) are mutually independent.”

**Sources:**

- [Ziang Niu, Bhaswar B. Bhattacharya, Distribution-free joint independence testing and robust independent component analysis using optimal transport, arXiv:2211.15639v2 (2022)](https://arxiv.org/abs/2211.15639v2)

### Adjusted maxima allow asynchronous tests

**Remember:** Adjust the maximum before comparing tests that can stop at different times.

*True by definition.* MSC 62J15 (Paired and multiple comparisons; multiple testing), 62L10. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** For each test, start a nonnegative process at one and require expectation at most one at every bounded stopping time under its null. Apply a nonnegative nondecreasing function A to its running maximum, with ∫₁∞ A(x)/x² dx ≤ 1.

**Problem.** Read the K adjusted values at possibly different times and order them from largest to smallest. Reject the first k hypotheses for the largest k whose value reaches K/(kα), or reject none if no k qualifies. For 0 &lt; α &lt; 1, the expected fraction of rejections that are false is at most α.

**How the definition helps.** Ville’s bound makes each null running maximum stochastically bounded by a variable with tail 1/x for x ≥ 1 (our own). The integral condition therefore bounds the expected adjusted value by one at any reading time (our own). Each false rejection contributes at most its adjusted value times α/K to the false fraction, defined as zero without rejections (our own). Summing expectations gives the bound (our own).

**Paper or page:** [Carefree multiple testing with e-processes](https://arxiv.org/abs/2501.19360v2). It says: “The e-BH procedure applied to the adjusted running maxima of e-processes controls the FDR-sup at level K₀ α / K.”

**Sources:**

- [Carefree multiple testing with e-processes (arXiv 2501.19360v2)](https://arxiv.org/abs/2501.19360v2)

### Swappable knockoffs give fair signs

**Remember:** A null feature cannot tell its original from its copy.

*True by definition.* MSC 62J15 (Paired and multiple comparisons; multiple testing). arXiv stat.ME. Level 4: research.

**Definition.** Pair inputs with copies whose joint law with the inputs is invariant under swapping any subset of pairs. Require the copies to be conditionally independent of the outcome given the original inputs. Compute one score per pair such that swapping any pair reverses only its score.

**Problem.** Call an input null if it is independent of the outcome given all other inputs. Given all score magnitudes and all scores for the other inputs that are not null, the nonzero null scores have independent, equally likely signs.

**How the definition helps.** Swapping a null feature with its copy leaves the data law unchanged and reverses only that feature’s score. In our own single-study argument, these swaps replace a direct calculation of joint sign probabilities. Every sign pattern has the same conditional probability because separate swaps connect any two patterns. The work is constructing copies with the required joint law.

**Paper or page:** [FDR Controlled Multiple Testing for Union Null Hypotheses: A Knockoff-based Approach](https://arxiv.org/abs/2106.12719v3). It says: “(W₁, ⋯, Wₚ) =ᵈ (W₁ · ε₁, ⋯, Wₚ · εₚ).”

**Sources:**

- [FDR Controlled Multiple Testing for Union Null Hypotheses: A Knockoff-based Approach](https://arxiv.org/abs/2106.12719v3)

### Bounding every loss by one e-value lets the data choose the loss

**Remember:** One pointwise limit protects against every later choice of loss.

*True by definition.* MSC 62L10 (Sequential statistical analysis), 62C05. arXiv stat.TH. Level 4: research.

**Definition.** An e-variable is a nonnegative statistic S whose expectation is at most one under every law in the null hypothesis. A decision rule is compatible with S if, for every decision task, the loss of the rule's decision under the null is at most S.

**Problem.** Under every null law, the expected loss of a compatible rule is at most one even when the data select the task measurably.

**How the definition helps.** Compatibility bounds the loss of every task by the same S, so it also bounds the loss of whichever task the data select. Taking expectations under the null then gives the risk bound directly, since the expectation of S is at most one. The paper also proves a converse: every Type-I risk safe rule is compatible with some e-variable. By our own reading, the hard part is finding e-variables that give useful decisions.

**Paper or page:** [Beyond Neyman-Pearson: e-values enable hypothesis testing with a data-driven alpha](https://arxiv.org/abs/2205.00901v3). It says: “With e-values it is straightforward, since they provide Type-I risk control in a generalized Neyman-Pearson setting with the decision task (a general loss function) determined post-hoc, after observation of the data”

**Sources:**

- [Peter Grünwald, Beyond Neyman-Pearson: e-values enable hypothesis testing with a data-driven alpha, arXiv:2205.00901v3 (2022)](https://arxiv.org/abs/2205.00901v3)

### Replacing each forecast by its running bin average removes the calibration penalty

**Remember:** Keep the forecaster's bins, but forecast each bin's running average outcome.

*Makes the theorem clean to state or prove.* MSC 62M20 (Inference from stochastic processes and prediction), 91A26. arXiv econ.TH, stat.ML. Level 4: research.

**Definition.** Group bounded forecasts and outcomes by forecast value. The refinement score averages squared deviations of outcomes from their bin means, counting each observation once. The Brier score averages squared deviations of outcomes from forecasts.

**Problem.** Consider any sequence of forecasts from a fixed finite set in \[0,1\] and outcomes in \[0,1\]. Predict each bin’s past mean, using any value in \[0,1\] on its first visit. After t rounds, this rule’s Brier score is at most the original refinement score plus O((log t)/t).

**How the definition helps.** The split shows that the refinement score is the best Brier score possible while keeping the forecaster's bins. Our own explanation: with all outcomes known, the bin mean minimizes the squared error within each bin. The new rule copies this using only past outcomes, so it pays only a small learning cost. Theorem 3 bounds that cost.

**Paper or page:** ["Calibeating": Beating Forecasters at Their Own Game](https://arxiv.org/abs/2209.04892v2). It says: “The Brier score is the sum of the calibration score and the refinement score”

**Sources:**

- [Dean P. Foster, Sergiu Hart, "Calibeating": Beating Forecasters at Their Own Game, arXiv:2209.04892v2 (2022); Theoretical Economics 18 (2023), 4, 1441-1474](https://arxiv.org/abs/2209.04892v2)

### Metric restriction makes learning finite

**Remember:** Training differences only see the part of the metric on their span.

*True by definition.* MSC 62R07 (Statistical aspects of big data and data science). arXiv stat.ML. Level 4: research.

**Definition.** Learn distances between training points in a real Hilbert space, a complete inner product space. For a difference v, set its squared distance to ⟨v, Av⟩ with A bounded, self-adjoint, and strictly positive on nonzero vectors. Compress A to the training span by projecting its output there.

**Problem.** For a loss depending only on training distances, the infimum over these operators equals the infimum on the training span. Every minimizer on the span extends to the whole space.

**How the definition helps.** Compressing the operator preserves all training distances and replaces a search over the full space with one on the training span. In our own calculation, projecting Av preserves its inner product with each training difference v. The reverse direction requires extending any admissible operator on the span. Acting as the identity on its orthogonal complement gives such an extension, so the two searches attain the same loss values.

**Paper or page:** [Representer Theorems for Metric and Preference Learning: Geometric Insights and Algorithms](https://arxiv.org/abs/2304.03720v2). It says: “And both solutions have the same optimal value.”

**Sources:**

- [Peyman Morteza (2025), Representer Theorems for Metric and Preference Learning: Geometric Insights and Algorithms](https://arxiv.org/abs/2304.03720v2)
