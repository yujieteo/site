### Completeness makes the best unbiased estimator unique

**Remember:** A complete statistic has no non-zero function that is unbiased for zero.

*Makes the theorem clean to state or prove.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T is complete if the following holds for every function g. If the expected value of g(T) is 0 under every parameter value θ, then g(T) = 0 almost surely under every θ. So no non-zero function of T has mean zero under all parameter values.

**Problem.** The Lehmann–Scheffé theorem: let T be a complete sufficient statistic (a statistic that carries all the information in the sample about θ). Then an unbiased estimator that is a function of T is the unique uniformly minimum-variance unbiased estimator.

**How the definition helps.** Completeness leaves only one unbiased function of T, so that function must be the best. The Rao–Blackwell theorem improves any unbiased estimator to one that is a function of T. But different starting estimators could give different improved estimators. If two unbiased functions h₁(T) and h₂(T) exist, their difference has mean zero for every θ, so completeness forces h₁(T) = h₂(T). What stays hard is to find a complete sufficient statistic. The article notes that most parametric models have a sufficient statistic that is not complete, and then the theorem cannot be applied.

**Wikipedia:** [Completeness (statistics)](https://en.wikipedia.org/wiki/Completeness_%28statistics%29), [Lehmann–Scheffé theorem](https://en.wikipedia.org/wiki/Lehmann%E2%80%93Scheff%C3%A9_theorem). It says: “Most parametric models have a sufficient statistic which is not complete. This is important because the Lehmann–Scheffé theorem cannot be applied to such models.”

**Sources:** none listed. No primary source with a working link was found.

### Sufficiency makes the Rao–Blackwell estimator computable from the data

**Remember:** Given a sufficient statistic, what is left of the data says nothing about θ.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62F10. arXiv math.ST. Level 2: later undergraduate.

**Definition.** A statistic T(X) is a function of the data X. It is sufficient for the parameter θ when the conditional distribution of X given T(X) does not depend on θ.

**Problem.** The Rao–Blackwell theorem: replace an estimator δ(X) by its conditional expectation E(δ(X) \| T(X)). The new estimator never has a larger mean squared error.

**How the definition helps.** Sufficiency is exactly what makes the improved estimator computable. The variance inequality is just the conditional Jensen inequality, and it holds for any T. The hard part is that E(δ(X) \| T(X)) usually depends on θ, so it is not an estimator at all. Sufficiency says, by definition, that this conditional expectation does not depend on θ, so one can compute it from the data. Fisher's factorization theorem, proved in general by Halmos and Savage, then gives a practical test for sufficiency.

**Wikipedia:** [Rao–Blackwell theorem](https://en.wikipedia.org/wiki/Rao%E2%80%93Blackwell_theorem), [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “Generally, the conditional expected value of one function of these data given another function of these data does depend on θ, but the very definition of sufficiency given above entails that this one does not.”

**Sources:**

- [Blackwell, D. (1947). Conditional expectation and unbiased sequential estimation. Annals of Mathematical Statistics 18, 105–110.](https://doi.org/10.1214/aoms/1177730497)
- [Halmos, P. R.; Savage, L. J. (1949). Application of the Radon–Nikodym theorem to the theory of sufficient statistics. Annals of Mathematical Statistics 20, 225–241.](https://doi.org/10.1214/aoms/1177730032)
- [Fisher, R. A. (1922). On the mathematical foundations of theoretical statistics. Philosophical Transactions of the Royal Society A 222, 309–368.](https://doi.org/10.1098/rsta.1922.0009)

### A support that does not move gives the Cramér–Rao bound

**Remember:** If the edge of the data moves with θ, Cramér–Rao can fail.

*Rules out counterexamples.* MSC 62B10 (Statistical aspects of information-theoretic topics), 62F10. arXiv stat.TH, math.ST. Level 2: later undergraduate.

**Definition.** A statistical model is regular when three things hold. Its density can be differentiated in the parameter θ, and the integral can be differentiated under the integral sign. The support (the set where the density is positive) does not depend on θ. The Fisher information is then the variance of the derivative of the log-density.

**Problem.** For a regular model, every unbiased estimator of θ has variance at least one over the Fisher information. The estimator must also allow differentiation under the integral sign. This is the Cramér–Rao bound.

**How the definition helps.** The regularity conditions let you swap differentiation and integration, and the bound then follows from the Cauchy–Schwarz inequality in a few lines. The bad case is the uniform distribution on the interval from 0 to θ. There the support moves with θ, and the Fisher information page says that this density fails the conditions. Our own: a multiple of the sample maximum is unbiased, with variance of order 1/n² for n observations. That beats the order 1/n that the bound would give. What stays hard is to check the swap of derivative and integral. The Cramér–Rao page says that a fixed bounded support or uniform convergence of the integral usually allows it.

**Wikipedia:** [Fisher information](https://en.wikipedia.org/wiki/Fisher_information), [Cramér–Rao bound](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_bound). It says: “It is easy to find an example of a density that does not satisfy the regularity conditions: The density of a Uniform(0, θ) variable fails to satisfy conditions 1 and 3.”

**Sources:**

- [R. A. Fisher, Theory of Statistical Estimation, Mathematical Proceedings of the Cambridge Philosophical Society 22 (1925)](https://doi.org/10.1017/S0305004100009580)

### Chi-squared ratios give reciprocal F laws and squared t laws

**Remember:** Flip the F ratio or square the t ratio.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60E05. arXiv math.ST. Level 2: later undergraduate.

**Definition.** The F law with degrees of freedom (d₁, d₂) is the law of (X/d₁)/(Y/d₂) for independent chi-squared variables with those degrees of freedom. Student’s t law with n degrees of freedom is the law of Z/√(V/n). Here Z is standard normal, and V is independent chi-squared with n degrees of freedom.

**Problem.** If U has the F law with degrees of freedom (d₁, d₂), then 1/U has the F law with degrees of freedom (d₂, d₁). If T has the t law with n degrees of freedom, then T² has the F law with degrees of freedom (1, n).

**How the definition helps.** The ratio definitions make both results visible from the numerator and denominator (our own). Taking the reciprocal swaps X and Y, while squaring T puts Z² in its numerator (our own). That square has the chi-squared law with one degree of freedom (our own). Rather than transform densities for each claim, we do the work once by deriving the F and t densities from their ratios (our own).

**Wikipedia:** [F-distribution](https://en.wikipedia.org/wiki/F-distribution), [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “If X ∼ F(d₁, d₂) then X⁻¹ ∼ F(d₂, d₁).”

**Sources:** none listed. No primary source with a working link was found.

### The chi-squared ratio definition gives Student’s t its normal limit

**Remember:** The chi-squared denominator tends to one, leaving the normal numerator.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60F05. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** Let Z be standard normal and V an independent chi-squared variable with ν degrees of freedom. Student’s t law is the law of Z/√(V/ν). An alternative definition gives the density directly.

**Problem.** As the degrees of freedom ν increase without bound, Student’s t law converges in distribution to the standard normal law.

**How the definition helps.** The ratio definition reduces the limit to showing that the denominator tends to 1 (our own). The chi-squared law gives V/ν mean 1 and variance 2/ν, even for noninteger ν (our own). Chebyshev’s inequality bounds the probability of any fixed departure from 1 by a constant times that variance (our own). Slutsky’s theorem lets us replace a factor that tends in probability to 1 by 1 in a distributional limit (our own). The density proof instead studies both its normalizing constant and its power term (our own). The work shifts to the density equivalence, the chi-squared moments and those two general limit tools (our own).

**Wikipedia:** [Student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution). It says: “As the number of degrees of freedom grows, the t distribution approaches the normal distribution with mean 0 and variance 1.”

**Sources:** none listed. No primary source with a working link was found.

### The sum-of-squares definition makes independent chi-squared variables add

**Remember:** Squares plus squares are still squares, so degrees of freedom add.

*True by definition.* MSC 62E15 (Exact distribution theory in statistics), 60E05. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** A standard normal variable has mean 0 and variance 1. The chi-squared law with k degrees of freedom is the law of the sum of k independent standard normal squares. Alternatively, it has the gamma density proportional to x raised to the power k/2 − 1 times exp(−x/2) for x &gt; 0.

**Problem.** Let X and Y be independent chi-squared variables with positive integer degrees of freedom j and k. Then X + Y is chi-squared with j + k degrees of freedom.

**How the definition helps.** The sum-of-squares definition lets us put the two lists of independent squares together. We can choose all j + k normals independently because only the joint law of X and Y matters (our own). The density proof instead integrates the product of two gamma densities to find the density of their sum (our own). The work shifts to showing that the normal squares have the stated gamma density (our own).

**Wikipedia:** [Chi-squared distribution](https://en.wikipedia.org/wiki/Chi-squared_distribution). It says: “It follows from the definition of the chi-squared distribution that the sum of independent chi-squared variables is also chi-squared distributed.”

**Sources:** none listed. No primary source with a working link was found.

### The largest minimizer of check loss is a sample quantile

**Remember:** Weight the two slopes so they balance at the quantile.

*True by definition.* MSC 62G30 (Order statistics; empirical distribution functions), 62G08. arXiv cs.LG, stat.TH. Level 2: later undergraduate.

**Definition.** Check loss charges different rates on the two sides of a proposed threshold. For the q-quantile it charges q times the shortfall if the observation is above the threshold. It charges 1−q times the excess if the observation is below the threshold.

**Problem.** For a finite sample and 0 &lt; q &lt; 1, the largest threshold that minimizes the total check loss is a q-quantile of the sample. The paper states this with q = 1 − α.

**How the definition helps.** The two slopes are chosen so that the loss stops decreasing exactly at the quantile. In our own explanation, raising the threshold changes the loss at rate (1 − q) times the fraction below minus q times the fraction above. So a minimum occurs where the fraction strictly below is at most q and the fraction at or below is at least q. The minimizers can form an interval, so the lemma takes its upper end.

**Paper or page:** [Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage](https://arxiv.org/abs/2502.17264v2). It says: “Then, the largest θ\* ∈ ℝ such that θ\* ∈ argmin<sub>θ ∈ ℝ</sub> Σ<sub>i ∈ \[n\]</sub> ℓ\_α(θ, sᵢ) is a (1−α)-quantile of {sᵢ}<sub>i ∈ \[n\]</sub>.”

**Sources:**

- [Konstantina Bairaktari, Jiayun Wu, Zhiwei Steven Wu, Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage, arXiv:2502.17264v2 (2025)](https://arxiv.org/abs/2502.17264v2)
- [Roger Koenker, Gilbert Bassett, Regression Quantiles, Econometrica 46(1), 33 (1978)](https://doi.org/10.2307/1913643)

### Normalized gamma variables make Dirichlet laws closed under merging coordinates

**Remember:** Add the gamma variables first, then divide by the same total.

*True by definition.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas), 62E15. arXiv math.ST, math.PR. Level 2: later undergraduate.

**Definition.** Take independent gamma variables Y₁, …, Yₖ with positive shapes α₁, …, αₖ and common scale 1. A gamma variable of shape α and scale 1 has density proportional to y raised to α − 1 times exp(−y), for y &gt; 0. Divide each Yᵢ by their sum S to get a Dirichlet vector. The alternative definition uses a density on the simplex, the set of nonnegative vectors whose entries sum to 1.

**Problem.** For a Dirichlet vector with at least three coordinates, replace Xᵢ and Xⱼ by Xᵢ + Xⱼ. The result is Dirichlet, with the two shape parameters replaced by αᵢ + αⱼ.

**How the definition helps.** The gamma definition makes merging two coordinates the same as adding their gamma variables before division (our own). A sum of independent gamma variables with the same scale has their added shape, and this sum is independent of the remaining variables (our own). Their total does not change (our own). The density proof instead integrates over all splits of the merged coordinate (our own). The work shifts to proving gamma additivity and deriving the Dirichlet density from the normalized vector (our own).

**Wikipedia:** [Dirichlet distribution](https://en.wikipedia.org/wiki/Dirichlet_distribution). It says: “This aggregation property may be used to derive the marginal distribution of Xᵢ mentioned above.”

**Sources:** none listed. No primary source with a working link was found.

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

**Definition.** A statistic T is sufficient when the conditional distribution of the data given T does not depend on the parameter. T is boundedly complete when the only bounded function g with E g(T) = 0 for every parameter value is g = 0 almost surely. A statistic is ancillary when its own distribution does not depend on the parameter.

**Problem.** A boundedly complete sufficient statistic is independent of every ancillary statistic. For example, the mean and variance of a normal sample are independent.

**How the definition helps.** Completeness says that if an integral is zero for every parameter, then the integrand is zero. That is exactly what the proof needs. The function in question is the conditional probability of an event for the ancillary statistic, minus its unconditional probability. Without completeness the result fails: the completeness page gives a scale family of uniform distributions. There the minimum and maximum together are sufficient, but their ratio has a distribution free of the parameter. That ratio is ancillary and is a function of the sufficient pair, so it is not independent of it. What stays hard is to show completeness in a given model.

**Wikipedia:** [Basu's theorem](https://en.wikipedia.org/wiki/Basu%27s_theorem), [Completeness (statistics)](https://en.wikipedia.org/wiki/Completeness_%28statistics%29), [Ancillary statistic](https://en.wikipedia.org/wiki/Ancillary_statistic). It says: “Basu's theorem states that any boundedly complete and sufficient statistic is independent of any ancillary statistic.”

**Sources:**

- [D. Basu, On Statistics Independent of a Complete Sufficient Statistic, Sankhyā 15 (1955) 377–380](https://doi.org/10.1007/978-1-4419-5825-9_14)

### Exchangeability makes the sorted sample sufficient, even when values repeat

**Remember:** Exchangeability leaves no information in the order the values arrived.

*True by definition.* MSC 62B05 (Sufficient statistics and fields), 62G30, 60G09. arXiv math.ST, math.PR. Level 3: graduate.

**Definition.** Random variables X₁, …, Xₙ are exchangeable if every reordering of them has the same joint law. The order statistics Y₁ ≤ … ≤ Yₙ are the values sorted from smallest to largest. A statistic is sufficient for a family of laws if the conditional law of the sample given it is the same for each law.

**Problem.** For any exchangeable real random vector X, the conditional law of X given its order statistics does not depend on the law of X. Given the sorted values, X is a uniformly random reordering of them (Corollary 1).

**How the definition helps.** By our own unpacking, exchangeability says that the original order carries no information beyond the sorted values. The paper's Theorem 1 makes this precise. The conditional expectation of g(X) given the sorted values is the average of g over all n! reorderings. The formula needs no densities and works when values repeat. So sufficiency holds for the whole family of exchangeable laws at once.

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

### The Pitman–Koopman–Darmois theorem needs a support that does not move

**Remember:** Fix the support, and only exponential families compress data to a fixed number of numbers.

*Rules out counterexamples.* MSC 62B05 (Sufficient statistics and fields), 62E10. arXiv math.ST. Level 3: graduate.

**Definition.** The Pitman–Koopman–Darmois theorem considers only families of distributions whose support does not depend on the parameter. The support is the set where the density is positive.

**Problem.** Which families of distributions have a sufficient statistic whose dimension stays bounded as the sample size grows? A sufficient statistic is a summary of the sample that keeps all the information about the parameter.

**How the definition helps.** The fixed-support condition excludes the counterexamples, so the answer becomes one clean class. Among families with a fixed support, the answer is exactly the exponential families. In an exponential family, the density has the form h(x) exp(η(θ) · T(x) − A(θ)), so the data meet the parameter only through a fixed function T. The uniform distribution on \[0, θ\] has the sample maximum as a one-dimensional sufficient statistic, as the article shows, but its support moves with θ. Our own remark: this family is not an exponential family, so without the fixed-support condition the theorem would be false. Technical regularity conditions are still needed.

**Wikipedia:** [Sufficient statistic](https://en.wikipedia.org/wiki/Sufficient_statistic). It says: “among families of probability distributions whose domain does not vary with the parameter being estimated, only in exponential families is there a sufficient statistic whose dimension remains bounded as sample size increases.”

**Sources:**

- [Koopman, B. O. (1936). On distributions admitting a sufficient statistic. Transactions of the American Mathematical Society 39, 399–409.](https://doi.org/10.1090/S0002-9947-1936-1501854-3)
- [Pitman, E. J. G. (1936). Sufficient statistics and intrinsic accuracy. Mathematical Proceedings of the Cambridge Philosophical Society 32, 567–579.](https://doi.org/10.1017/S0305004100019307)

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

**Problem.** Blackwell's theorem takes finite state and signal spaces. Channel Q₁ beats or ties Q₂ in every one-person decision problem with finitely many actions. This holds exactly when Q₂ is a garbling of Q₁.

**How the definition helps.** The garbling definition turns 'more informative' into one concrete simulation, so one direction is immediate. With the Q₁ signal, a person can apply the garbling and then copy any rule for Q₂, by our own explanation. The converse is the hard part. It must build a single garbling from comparisons across all decision problems. Blackwell's proof uses convex separation for this, by our own account.

**Paper or page:** [Zero-Sum Games involving Teams against Teams: Existence of Equilibria, and Comparison and Regularity in Information](https://arxiv.org/abs/2206.12048v1). It says: “The information structure induced by channel Q₁ is more informative than the one induced by channel Q₂ for all single player decision problems with finite 𝕌.”

**Sources:**

- [Ian Hogeboom-Burr, Serdar Yüksel, Zero-Sum Games involving Teams against Teams: Existence of Equilibria, and Comparison and Regularity in Information, arXiv:2206.12048v1 (2022)](https://arxiv.org/abs/2206.12048v1)
- [David Blackwell, Equivalent Comparisons of Experiments, The Annals of Mathematical Statistics (1953)](https://doi.org/10.1214/aoms/1177729032)

### Identifiability is the condition that lets maximum likelihood be consistent

**Remember:** If two parameters look the same, no data can tell them apart.

*Rules out counterexamples.* MSC 62B15 (Theory of statistical experiments), 62F12. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** A statistical model is identifiable when different parameter values give different probability distributions of the data. In other words, the map from θ to its distribution is one-to-one.

**Problem.** Under identifiability and further conditions, such as a compact parameter space, the maximum likelihood estimator converges to the true parameter as the sample grows. This property is called consistency.

**How the definition helps.** Identifiability makes the limit of the average log-likelihood have exactly one maximum, at the true parameter, so the estimator has one place to go. Our own: let X be normal with mean θ₁ + θ₂. Every pair with the same sum gives the same data, so no estimator of the pair is consistent. The page shows why the definition is the right one: with infinitely many observations you learn the distribution, and identifiability then gives back the parameter. What stays hard is the rest of the proof, such as compactness and uniform convergence of the likelihood. The page says compactness stops the likelihood from approaching its maximum at another point.

**Wikipedia:** [Identifiability](https://en.wikipedia.org/wiki/Identifiability), [Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation). It says: “The identification condition is absolutely necessary for the ML estimator to be consistent. When this condition holds, the limiting likelihood function ℓ(θ\|·) has unique global maximum at θ₀.”

**Sources:**

- [A. Wald, Note on the Consistency of the Maximum Likelihood Estimate, Annals of Mathematical Statistics 20 (1949)](https://doi.org/10.1214/aoms/1177729952)

### Supporting planes of convex functions give proper scores

**Remember:** The plane at your forecast stays below the function at the truth.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory), 91B06. arXiv stat.TH, econ.TH. Level 3: graduate.

**Definition.** A scoring rule pays S(p, ω) when the forecast is a probability vector p and the outcome is ω. The rule is proper if reporting the true probabilities maximizes the expected score. Take a convex function H of the probability vector with a supporting plane at each allowed forecast p. Evaluate that plane at the probability vector that places all mass on the observed outcome, and pay that value.

**Problem.** This construction gives a proper score for finitely many outcomes. If H is strictly convex, no other report gives the same expected score.

**How the definition helps.** The plane formula makes the incentive check a supporting-plane inequality, since the expected payment is the plane evaluated at the true probability vector. A supporting plane lies below H and meets H at the report. Strict convexity rules out a second point of contact. The usual definition compares expected scores report by report. The work in the reverse direction is to show that truthful expected scores form a convex function and that each report defines a supporting plane.

**Paper or page:** [Optimal Scoring Rule Design under Partial Knowledge](https://arxiv.org/abs/2107.07420v3). It says: “Conversely, for every (strictly) convex function H: Δ(Ω)→ℝ, there exists a (strict) proper scoring rule such that the above condition hold.”

**Sources:**

- [Tilmann Gneiting and Adrian E. Raftery, Strictly Proper Scoring Rules, Prediction, and Estimation, Journal of the American Statistical Association 102 (2007) 359–378](https://doi.org/10.1198/016214506000001437)
- [Yiling Chen and Fang-Yi Yu, Optimal Scoring Rule Design under Partial Knowledge, arXiv 2107.07420](https://arxiv.org/abs/2107.07420v3)

### A natural parameter space with interior makes the sufficient statistic complete

**Remember:** A full-dimensional parameter set makes the sufficient statistic complete.

*Rules out counterexamples.* MSC 62E10 (Characterization and structure theory of statistical distributions), 62B05. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** Take an exponential family with natural parameter θ in a set Θ in ℝᵏ. Θ has nonempty interior when it contains a small open ball. A family whose parameters fill only a curve or a surface of lower dimension is called a curved exponential family.

**Problem.** If Θ has nonempty interior, the sum of T over an independent sample is a complete statistic. So every unbiased estimator that is a function of it is the unique best unbiased estimator.

**How the definition helps.** Our own: on an open set of parameters, E g(T) = 0 says that a Laplace transform vanishes, so g must be zero. The condition excludes curved families, whose parameters fill a lower-dimensional set. Our own: take normal data with mean θ and variance θ². The sample mean and sample variance together are sufficient but not complete. The function n·(mean)²/(n + 1) − (sample variance) has expectation zero for every θ but is not zero. Our own: what stays hard is the uniqueness theorem for Laplace transforms that the proof uses. The Lehmann–Scheffé theorem then gives the best unbiased estimator (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “If Θ has nonempty interior in ℝᵏ, then given any IID samples ... the statistic ... is a complete statistic for θ.”

**Sources:** none listed. No primary source with a working link was found.

### The log-partition function gives exponential-family moments by differentiation

**Remember:** Differentiate the log-normalizer once for the mean, twice for the variance.

*True by definition.* MSC 62E10 (Characterization and structure theory of statistical distributions), 62B05. arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** An exponential family in natural form has density h(x) exp(η·T(x) − A(η)). Here η is the natural parameter and T is the sufficient statistic. A(η) is the log-partition function, the logarithm of the integral that makes the density integrate to 1.

**Problem.** The mean of T is the gradient of A, and the covariance matrix of T is the Hessian of A. More generally, A(η + u) − A(η) is the cumulant generating function of T, the logarithm of its moment generating function.

**How the definition helps.** Writing the density with A(η) in the exponent makes A the logarithm of a moment generating function, so its derivatives are cumulants almost by definition. The page says that this is the reason for choosing this functional form. Other forms, with a factor outside the exponential or with a different parameter, make the same formulas carry chain-rule factors. Our own: the Hessian formula also shows at once that A is convex, since a covariance matrix is positive semidefinite. What stays hard is to compute A in closed form, which many families do not allow.

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family). It says: “The reason for this is so that the moments of the sufficient statistics can be calculated easily, simply by differentiating this function.”

**Sources:** none listed. No primary source with a working link was found.

### Defining p-values by rejecting levels controls false rejections

**Remember:** If a p-value is small, every larger level rejects.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62A01. arXiv math.ST. Level 3: graduate.

**Definition.** Take nested rejection regions indexed by levels α between 0 and 1, with the region at 1 equal to the whole sample space. Under any law in the null hypothesis, the region at α has probability at most α. The p-value of the data is the infimum of the levels at which the data lie in the rejection region. An alternative starts with a tail probability for a chosen test statistic.

**Problem.** For any null law and any level α in \[0, 1\], the probability that the p-value is at most α is at most α.

**How the definition helps.** The rejecting-level definition bounds the p-value event by any rejection region with a slightly larger level (our own). Nesting gives that inclusion even if the infimum is not attained (our own). Let the larger level decrease to α, with α = 1 immediate (our own). The work shifts from checking a tail probability, including possible ties, to constructing nested tests that meet their stated error bounds (our own).

**Wikipedia:** [P-value](https://en.wikipedia.org/wiki/P-value). It says: “the probability of obtaining a p-value less than or equal to any number between 0 and 1 is still less than or equal to that number”

**Sources:** none listed. No primary source with a working link was found.

### Expectation-bounded e-variables multiply when the conditional bound holds

**Remember:** A second bet must have expected payout at most one given the first result.

*True by definition.* MSC 62F03 (Parametric hypothesis testing), 62L10. arXiv math.ST, stat.ME. Level 3: graduate.

**Definition.** An e-variable is a nonnegative statistic whose expected value is at most 1 under each law in the null hypothesis. The null hypothesis is the set of laws being tested. Large values count as evidence against it. A p-value takes values between 0 and 1, with probability at most α of falling at or below α under any null law.

**Problem.** Let E₁ be an e-variable based on the first data. Suppose that under every null law, E₂ is nonnegative and its conditional mean given the first data is at most 1. Then E₁E₂ is an e-variable, even if the choice of E₂ depends on the first data.

**How the definition helps.** The expectation definition lets us bound the average product by conditioning on the first data (our own). With E₁ fixed there, the conditional mean of E₁E₂ is at most E₁ (our own). Averaging again bounds the mean by 1 (our own). P-values do not have this product rule, and Fisher’s method uses a separate calculation for independent p-values (our own). The work shifts to constructing a second e-variable with the conditional bound under every null law (our own).

**Wikipedia:** [E-values](https://en.wikipedia.org/wiki/E-values). It says: “e-values of subsequent experiments (e.g. clinical trials concerning the same treatment) may simply be multiplied to provide a new, "product" e-value that represents the evidence in the joint experiment.”

**Sources:**

- [V. Vovk and R. Wang, E-values: calibration, combination and applications, Annals of Statistics 49 (2021) 1736–1754](https://doi.org/10.1214/20-AOS2020)

### Monotone likelihood ratios make one-sided most powerful tests exist

**Remember:** If larger T always favours larger θ, reject for large T.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 62F03 (Parametric hypothesis testing). arXiv stat.TH, math.ST. Level 3: graduate.

**Definition.** A family of densities has a monotone likelihood ratio in a statistic T when the following holds. For every θ₁ &lt; θ₂, the density at θ₂ divided by the density at θ₁ is a nondecreasing function of T(x).

**Problem.** Suppose the family has a monotone likelihood ratio in T. Then the test that rejects when T is large is uniformly most powerful (best against every alternative at once) for θ ≤ θ₀ against θ &gt; θ₀. This is the Karlin–Rubin theorem.

**How the definition helps.** Monotonicity makes the Neyman–Pearson best test against each single alternative the same test, so one test is best against all alternatives at once. In general, the best test changes with the alternative, and then no uniformly most powerful test exists. Our own: the Cauchy location family has no monotone likelihood ratio, and there is no uniformly most powerful one-sided test for one observation. Exponential families with an increasing natural parameter always have the property. Our own: what stays hard is two-sided testing, where a uniformly most powerful test need not exist even for monotone families.

**Wikipedia:** [Monotone likelihood ratio](https://en.wikipedia.org/wiki/Monotone_likelihood_ratio). It says: “If the family of random variables has the MLRP in T(X), a uniformly most powerful test can easily be determined for the hypothesis H₀ : θ ≤ θ₀ versus H₁ : θ &gt; θ₀.”

**Sources:**

- [S. Karlin and H. Rubin, The Theory of Decision Procedures for Distributions with Monotone Likelihood Ratio, Annals of Mathematical Statistics 27 (1956)](https://doi.org/10.1214/aoms/1177728259)

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

**Definition.** An estimator is regular when its limiting distribution, after scaling by √n, does not change under small local changes of the parameter. Here n is the sample size, and a local change moves the parameter by an amount of order 1/√n.

**Problem.** The asymptotic efficiency claim says that no estimator should beat the efficient estimator, for example the maximum-likelihood estimator, in asymptotic variance.

**How the definition helps.** Regularity asks for the same behaviour at all nearby parameter values, and this excludes estimators that do better at one single point. Hodges' estimator equals the usual estimator, except that it is set to 0 when the estimate is close to 0. For θ ≠ 0 it has the same limit law as the usual estimator. At θ = 0 it converges arbitrarily fast, so it is 'superefficient' at that one point. The class of regular estimators was introduced to exclude such estimators. The article adds that superefficiency can only occur on a set of Lebesgue measure zero. Our own addition: for regular estimators, Hájek's convolution theorem shows that the limit law is the efficient normal law convolved with extra noise.

**Wikipedia:** [Hodges' estimator](https://en.wikipedia.org/wiki/Hodges%27_estimator). It says: “The existence of such a counterexample is the reason for the introduction of the notion of regular estimators.”

**Sources:**

- [Hájek, J. (1970). A characterization of limiting distributions of regular estimates. Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete 14, 323–330.](https://doi.org/10.1007/BF00533669)

### Exponential-family conjugate priors update by adding counts and totals

**Remember:** The data add their count and total to the prior count and total.

*True by definition.* MSC 62F15 (Bayesian inference), 62E10. arXiv math.ST. Level 3: graduate.

**Definition.** An exponential family has densities h(x)·exp(η·T(x) − A(η)), where η is the parameter and A(η) makes the density integrate to one. The function T summarizes the data in the exponent. The conjugate prior is the initial density for η, proportional to exp(η·χ − νA(η)) when this function has a finite, positive integral. Here χ acts like a prior total of T, and ν like a prior sample size.

**Problem.** For n independent observations from this model, the updated density for η has the same form whenever the observed data give a finite, positive normalizer. The new count is ν + n, and the new total is χ + T(x₁) + ⋯ + T(xₙ).

**How the definition helps.** The prior uses the same two terms in η as the likelihood, so multiplying them just adds coefficients (our own). General Bayesian updating gives a product of densities but does not by itself keep the prior's form (our own). The main work is to find which coefficients give a finite normalizing integral, as Diaconis and Ylvisaker did (our own).

**Wikipedia:** [Exponential family](https://en.wikipedia.org/wiki/Exponential_family), [Conjugate prior](https://en.wikipedia.org/wiki/Conjugate_prior). It says: “ν corresponds to the effective number of observations that the prior distribution contributes, and χ corresponds to the total amount that these pseudo-observations contribute to the sufficient statistic over all observations and pseudo-observations.”

**Sources:**

- [P. Diaconis and D. Ylvisaker, Conjugate priors for exponential families, Annals of Statistics 7 (1979) 269–281](https://doi.org/10.1214/aos/1176344611)

### The Jeffreys prior does not depend on the choice of parameter

**Remember:** Built from Fisher information, the Jeffreys prior changes with the parameter as a density should.

*True by definition.* MSC 62F15 (Bayesian inference), 62B11. arXiv math.ST. Level 3: graduate.

**Definition.** The Fisher information matrix I(θ) measures how much the data tell us about the parameter θ. The Jeffreys prior is the density proportional to √det I(θ), the square root of the determinant of that matrix.

**Problem.** A 'non-informative' prior should give the same answers whatever parameter we use to describe the model.

**How the definition helps.** The square root of Fisher information changes under a change of parameter exactly as a density does. A uniform prior on θ is not uniform on a new parameter φ = h(θ), so 'uniform' depends on the coordinates. Fisher information transforms with the square of the Jacobian, so its square root transforms like a density. So the Jeffreys prior in θ and the Jeffreys prior in φ give the same distribution, by definition. The prior can be improper, as for the mean of a normal distribution. In several dimensions it can give poor results (this point is our own). So invariance alone does not settle the choice of prior.

**Wikipedia:** [Jeffreys prior](https://en.wikipedia.org/wiki/Jeffreys_prior). It says: “That is, the relative probability assigned to a volume of a probability space using a Jeffreys prior will be the same regardless of the parameterization used to define the Jeffreys prior.”

**Sources:**

- [Jeffreys, H. (1946). An invariant form for the prior probability in estimation problems. Proceedings of the Royal Society A 186, 453–461.](https://doi.org/10.1098/rspa.1946.0056)

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

**Definition.** The characteristic function of a random vector X is the expected value of exp(i⟨t, X⟩) at each frequency t. Distance covariance integrates, with a weight, the squared gap between the joint characteristic function and the product of the marginal ones. The weight is positive everywhere.

**Problem.** For random vectors X and Y with finite first moments, distance covariance is zero exactly when X and Y are independent (Theorem 3.2).

**How the definition helps.** Because the weight is positive, a zero integral forces the squared gap to vanish almost everywhere. Characteristic functions are continuous, so the gap then vanishes at every frequency, by our own reasoning. Equal characteristic functions give equal laws, so the joint law is the product of the marginals. Ordinary covariance can miss dependence. Our own example is a standard normal X with Y = X², where the covariance E\[X³\] is zero. By our own reading, the real work is to show that the integral equals a simple formula in pairwise distances.

**Paper or page:** [A Basic Treatment of the Distance Covariance](https://arxiv.org/abs/2206.10135v1). It says: “For all X and Y, 𝒱²(X,Y) = 0 if and only if X and Y are independent.”

**Sources:**

- [Dominic Edelmann, Tobias Terzer, Donald Richards, A Basic Treatment of the Distance Covariance, Sankhya, Series B, 83 (2021), S12-S25](https://arxiv.org/abs/2206.10135v1)
- [Gábor J. Székely, Maria L. Rizzo, and Nail K. Bakirov, Measuring and testing dependence by correlation of distances (2007)](https://doi.org/10.1214/009053607000000505)

### A log score that uses survival for censored cases stays strictly proper

**Remember:** Score survival when the event itself is not seen.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 62C05 (General considerations in statistical decision theory), 62N01. arXiv stat.ME, stat.AP. Level 4: research.

**Definition.** The logarithmic score charges minus the log of the probability or density that the forecast gives to what was observed. In competing risks data, one of several event types ends follow-up, unless censoring stops it first. If the event is seen, the score uses the forecast density of its time and type. Otherwise it uses the forecast probability of surviving past the censoring time.

**Problem.** Under non-informative censoring, the true joint law of event time and event type uniquely minimizes the expected score.

**How the definition helps.** The score charges each case only for what was observed, so its mean is an observed-data log likelihood (our own unpacking). Gibbs' inequality then says that the true law minimizes that expected value (our own reasoning). Non-informative censoring means that the censoring factors do not depend on the forecast, so they do not change the minimizer (our own explanation). Uniqueness still needs the observed data to determine the event law. For example, if censoring always happens before a fixed time, the score cannot see the law after that time (our own example).

**Paper or page:** [A Proper Scoring Rule for Validation of Competing Risks Models](https://arxiv.org/abs/2104.01000v1). It says: “We propose a version of the logarithmic scoring rule for competing risks data and show that it remains strictly proper under non-informative censoring.”

**Sources:**

- [Zoe Guan, A Proper Scoring Rule for Validation of Competing Risks Models, arXiv:2104.01000v1 (2021)](https://arxiv.org/abs/2104.01000v1)

### A positively weighted strictly proper score makes the whole sum strictly proper

**Remember:** One strict term with positive weight breaks every tie.

*True by definition.* MSC 62C05 (General considerations in statistical decision theory). arXiv stat.ME, math.ST. Level 4: research.

**Definition.** A scoring rule is proper if the true law minimizes the expected loss, and strictly proper if it is the only minimizer. The aggregated score is a weighted sum of proper scores with nonnegative weights.

**Problem.** The aggregated score is proper. It is strictly proper if some strictly proper component has a positive weight.

**How the definition helps.** The extra expected loss of a wrong forecast is a nonnegative weighted sum of nonnegative terms, so propriety follows by definition (our own unpacking). A strict component with positive weight makes one term positive, so no wrong forecast ties with the truth. Negative weights break the result. Weights 1 and −2 on two copies of a strict score S give −S, which the truth maximizes (our own counterexample).

**Paper or page:** [Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation](https://arxiv.org/abs/2407.00650v1). It says: “If at least one scoring rule Sᵢ is strictly proper relative to ℱ and wᵢ &gt; 0, the aggregated scoring rule S<sub>𝒮,𝐰</sub> is strictly proper relative to ℱ.”

**Sources:**

- [Romain Pic, Clément Dombry, Philippe Naveau, Maxime Taillardat, Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation, arXiv:2407.00650v1 (2024)](https://arxiv.org/abs/2407.00650v1)

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

**Definition.** A scoring rule assigns a loss to a forecast law and an observed outcome. It is proper on a class of laws if, when the truth is in the class, the true law minimizes the expected loss. It is strictly proper if the true law is the only minimizer. The transformed score applies one map T to the observation and to the forecast law, then scores the results.

**Problem.** If the original score is proper on the transformed laws, then the transformed score is proper. If the original score is strictly proper and T is injective, then the transformed score is strictly proper.

**How the definition helps.** The expected transformed score is the expected original score in the transformed problem, so propriety carries over at once (our own unpacking). If T is injective, different laws have different transformed laws, so a strict score still separates them (our own reasoning). Our own example of what fails without injectivity is a score of one coordinate. It cannot tell apart two laws with the same distribution of that coordinate.

**Paper or page:** [Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation](https://arxiv.org/abs/2407.00650v1). It says: “is proper relative to ℱ. If S is strictly proper relative to T(ℱ) and T is injective, then the resulting scoring rule S<sub>T</sub> is strictly proper relative to ℱ.”

**Sources:**

- [Romain Pic, Clément Dombry, Philippe Naveau, Maxime Taillardat, Proper Scoring Rules for Multivariate Probabilistic Forecasts based on Aggregation and Transformation, arXiv:2407.00650v1 (2024)](https://arxiv.org/abs/2407.00650v1)

### Ordering points by small-ball mass makes weak modes the greatest elements

**Remember:** A weak mode beats every other center in the small-ball comparison.

*True by definition.* MSC 62C10 (Bayesian problems; characterization of Bayes procedures), 62R20. arXiv stat.TH, math.PR. Level 4: research.

**Definition.** Let μ be a probability measure on a metric space, and let B(x, r) be the closed ball of radius r about x. Put x below x′ when the upper limit, as r tends to zero, of μ(B(x, r)) / μ(B(x′, r)) is at most one. The paper fixes conventions for zero denominators. A weak mode is a point whose small balls carry, in this ratio sense, at least as much mass as those around any other point.

**Problem.** On a separable metric space, a point is a weak mode exactly when it lies above every other point in this order (Lemma 5.3). Weak modes make precise the idea of a point of maximum probability.

**How the definition helps.** The order uses the same ball ratios as the weak-mode condition, so the equivalence is close to a restatement. Its value is that order theory then separates the cases that cause trouble. A greatest element lies above every point, while a maximal element only has no point strictly above it. The abstract says that many pathologies come from this difference and from points that cannot be compared. The definition does not by itself give a greatest element. Existence still needs work, such as the Cantor and Kuratowski intersection theorems that the abstract mentions.

**Paper or page:** [An order-theoretic perspective on modes and maximum a posteriori estimation in Bayesian inverse problems](https://arxiv.org/abs/2209.11517v4). It says: “Then the following are equivalent: (a) x⋆ ∈ X is a weak mode for μ; (b) x⋆ ∈ X is a ≼₀-greatest element;”

**Sources:**

- [Hefin Lambley, T. J. Sullivan, An order-theoretic perspective on modes and maximum a posteriori estimation in Bayesian inverse problems, SIAM/ASA J. Uncertain. Quantif. 11(4):1195--1224, 2023](https://arxiv.org/abs/2209.11517v4)

### Under log loss, minimum excess risk equals conditional mutual information

**Remember:** With log loss, the price of not knowing the model is mutual information.

*True by definition.* MSC 62C10 (Bayesian problems; characterization of Bayes procedures), 94A17. arXiv cs.LG, cs.IT. Level 4: research.

**Definition.** Minimum excess risk compares two least expected losses for predicting Y. The first uses the input X and training data Zⁿ. The second also uses the model parameter W, and the risk is the first minus the second. Log loss is the negative log of the probability given to the outcome.

**Problem.** Under log loss, minimum excess risk equals I(W; Y \| X, Zⁿ). This is the conditional mutual information, the expected drop in uncertainty about Y from learning W, given X and Zⁿ.

**How the definition helps.** Under log loss each least expected loss is a conditional entropy, so their difference is a mutual information. In our own explanation, the best forecast from X and Zⁿ is the true conditional law of Y, with risk H(Y \| X, Zⁿ). With W also known, the risk is H(Y \| X, W, Zⁿ). Their difference is I(W; Y \| X, Zⁿ) by definition. The paper's harder work bounds this quantity as data grows.

**Paper or page:** [Minimum Excess Risk in Bayesian Learning](https://arxiv.org/abs/2012.14868v2). It says: “For the log loss, MERₗₒg = I(W; Y \| X, Zⁿ).”

**Sources:**

- [Aolin Xu, Maxim Raginsky, Minimum Excess Risk in Bayesian Learning, arXiv:2012.14868v2 (2021)](https://arxiv.org/abs/2012.14868v2)

### Flip interventions give treatment effects identifiable without positivity

**Remember:** Flip only where the target treatment is supported.

*Rules out counterexamples. Confidence: medium.* MSC 62D20 (Causal inference from observational studies). arXiv stat.ME. Level 4: research.

**Definition.** A flip intervention keeps the treatment of each person who would have received the target treatment anyway. It switches each other person to the target with probability equal to a weight. The weight may depend on the person's history. Examples are overlap weights, largest where both treatments are common, and trimming indicators, which drop histories where one treatment is rare.

**Problem.** In longitudinal data, treatments are given at several times. Positivity means every treatment has positive probability at every history. The abstract says flip interventions give effects that are identifiable, that is, determined by the law of the observed data, under arbitrary positivity violations.

**How the definition helps.** By our own explanation, overlap weights are zero where the target treatment never occurs, so the intervention never forces a treatment without data. A policy that always gives the target treatment, in contrast, needs outcomes under treatments that never occur at some histories. The abstract says other ways of weighting on later covariates fail to be identifiable in this way. By our own reading, the work is to carry identification through the whole sequence of treatment decisions.

**Paper or page:** [Longitudinal weighted and trimmed treatment effects with flip interventions](https://arxiv.org/abs/2506.09188v1). It says: “With longitudinal data, we then show that flip interventions provide interpretable weighting or trimming on non-baseline covariates and, crucially, yield effects that are identifiable under arbitrary positivity violations.”

**Sources:**

- [Alec McClean, Alexander W. Levis, Nicholas Williams, Ivan Diaz, Longitudinal weighted and trimmed treatment effects with flip interventions, arXiv:2506.09188v1 (2025)](https://arxiv.org/abs/2506.09188v1)

### Posterior equals prior exactly when the likelihood ignores the hidden variable

**Remember:** A flat likelihood leaves the prior unchanged.

*True by definition.* MSC 62F15 (Bayesian inference), 68T07. arXiv stat.ML, cs.LG. Level 4: research.

**Definition.** Fix a data set x and a parameter value θ. The hidden variable z is non-identifiable at θ if the likelihood p(x \| z; θ) takes the same value for every z. Posterior collapse means that the posterior p(z \| x) equals the prior p(z).

**Problem.** For a fixed data set and parameter value, the hidden variable is non-identifiable exactly when its posterior collapses to its prior.

**How the definition helps.** Bayes' rule makes the posterior the prior times the likelihood, divided by a normalizing constant, so the equivalence is almost immediate (our own unpacking). A constant likelihood cancels in the normalization. Conversely, if the posterior equals the prior, the likelihood equals the normalizing constant wherever the prior is positive (our own reasoning). The abstract says that this shows collapse can happen even with exact inference. Designing flexible models that avoid collapse is the harder part of the paper.

**Paper or page:** [Posterior Collapse and Latent Variable Non-identifiability](https://arxiv.org/abs/2301.00537v1). It says: “The local latent variables z are non-identifiable at θ̂ if and only if the posterior of the latent variable z collapses, p(z \| x) = p(z).”

**Sources:**

- [Yixin Wang, David M. Blei, John P. Cunningham, Posterior Collapse and Latent Variable Non-identifiability, arXiv:2301.00537v1 (2023)](https://arxiv.org/abs/2301.00537v1)

### A density ratio turns gradient-free Stein discrepancy into the usual one

**Remember:** Differentiate the easier density, then reweight to check the target.

*True by definition.* MSC 62G10 (Nonparametric hypothesis testing), 60B10, 46E22. arXiv stat.CO, stat.ML. Level 4: research.

**Definition.** A Stein operator turns each test function into a function with mean zero under a target law. The usual operator for a density needs derivatives of its log. The gradient-free operator applies the usual operator for an easier density q, then multiplies by q/p, where p is the target density. The discrepancy is the largest mean of the result over a ball of test functions.

**Problem.** Let Z be the mean of q/p under a law π, and let π̄ be π reweighted by q/p. Under the stated integrability conditions, the gradient-free discrepancy of π equals Z times the usual discrepancy of π̄ for the density q.

**How the definition helps.** The mean of (q/p) times a function under π equals Z times its mean under π̄, so the result is one line (our own unpacking). When π equals p, the reweighted law is q and Z = 1, so the discrepancy is zero (our own check). The identity lets known results for the usual discrepancy transfer to the new one. Proving that a small discrepancy forces π close to p still takes separate conditions.

**Paper or page:** [Gradient-Free Kernel Stein Discrepancy](https://arxiv.org/abs/2207.02636v2). It says: “Then π̄ ∈ 𝒫(ℝᵈ) and D<sub>p,q</sub>(π) = Z D<sub>q,q</sub>(π̄).”

**Sources:**

- [Matthew A Fisher, Chris. J Oates, Gradient-Free Kernel Stein Discrepancy, arXiv:2207.02636v2 (2022)](https://arxiv.org/abs/2207.02636v2)

### With polynomial test functions, zero Stein discrepancy means the first moments agree

**Remember:** Polynomial test functions make the discrepancy check finitely many moments.

*Makes the theorem clean to state or prove.* MSC 62G10 (Nonparametric hypothesis testing), 60B10. arXiv stat.CO, stat.ML. Level 4: research.

**Definition.** A Stein operator turns each test function into a function with mean zero under the target law. The polynomial Stein discrepancy uses all polynomials of degree at most r as test functions. It measures how far the means of the transformed functions under the sample law are from zero.

**Problem.** Suppose the target is Gaussian with a positive-definite covariance, as in the large-sample limit of a posterior. Then the discrepancy is zero exactly when the two laws have the same moments up to order r.

**How the definition helps.** For a Gaussian target, the Stein operator maps polynomials of degree at most r to polynomials of degree at most r (our own unpacking). So each condition is a linear equation in the moments of the sample law. The proposition shows that these equations force the moments to equal the Gaussian ones. Matching finitely many moments does not identify a general law, so the test is not convergence-determining, as the abstract says.

**Paper or page:** [The Polynomial Stein Discrepancy for Assessing Moment Convergence](https://arxiv.org/abs/2412.05135v1). It says: “In the Bernstein-von Mises limit, where the posterior has a symmetric positive-definite covariance matrix Σ, PSD = 0 if and only if the multi-index moments of P and Q match up to order r.”

**Sources:**

- [Narayan Srinivasan, Matthew Sutton, Christopher Drovandi, Leah F South, The Polynomial Stein Discrepancy for Assessing Moment Convergence, arXiv:2412.05135v1 (2024)](https://arxiv.org/abs/2412.05135v1)

### Calibrating only against units that could have been selected gives conditional coverage

**Remember:** Calibrate against the cases that could have been selected instead.

*Makes the theorem clean to state or prove.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62G30. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** Conformal prediction compares a test unit's score with scores of calibration units to build a prediction set. Here, give the selected test unit a candidate outcome y. Keep a calibration unit in the reference set if swapping it with the test unit would still select it with the same type of selection. Accept y if its score ranks low enough among the reference scores.

**Problem.** Suppose the selection rule does not depend on the order of the calibration units, and the data are exchangeable. Then the prediction set covers the selected unit's outcome with probability at least 1 − α, conditional on that selection.

**How the definition helps.** Given the selection event, the test unit's score is exchangeable with the reference scores, so the usual rank argument works again (our own unpacking). Ordinary conformal sets can fail for selected units, because selection favors unusual cases, as the abstract says. The paper also gives fast ways to compute the reference set for common selection rules.

**Paper or page:** [Confidence on the Focal: Conformal Prediction with Selection-Conditional Coverage](https://arxiv.org/abs/2403.03868v3). It says: “This paper presents a general framework for constructing a prediction set with finite-sample exact coverage, conditional on the unit being selected by a given procedure.”

**Sources:**

- [Ying Jin, Zhimei Ren, Confidence on the Focal: Conformal Prediction with Selection-Conditional Coverage, arXiv:2403.03868v3 (2024)](https://arxiv.org/abs/2403.03868v3)

### Consonant plausibility makes conformal p-values valid for every assertion at once

**Remember:** A set is at least as plausible as any outcome it contains.

*True by definition. Confidence: medium.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62A01. arXiv stat.ME, math.ST. Level 4: research.

**Definition.** For each candidate value y of the next observation, take the conformal p-value of y as its plausibility. The conformal p-value measures, by ranks of scores, how typical y looks next to the past data. The plausibility of a set of values is the supremum of the plausibilities of its members. A plausibility measure built in this way from single points is called consonant.

**Problem.** The resulting predictor has the paper's strong validity property (Theorem 1). By our own reading, this is a uniform bound. For each α, the chance that some set containing the next observation gets plausibility at most α is at most α.

**How the definition helps.** Taking a supremum means any set that contains the true value has plausibility at least that of the true value, by our own reasoning. So one bad event covers every set at once: the true value's own plausibility is at most α. Conformal prediction already bounds the chance of this event by α. Thus validity for all assertions follows from the ordinary validity of conformal p-values, by our own reading. The abstract also says that imprecise probability is required for this kind of validity.

**Paper or page:** [Validity, consonant plausibility measures, and conformal prediction](https://arxiv.org/abs/2001.09225v3). It says: “We go on to show that both types of prediction validity can be achieved by interpreting the conformal prediction output as the contour function of a consonant plausibility measure.”

**Sources:**

- [Leonardo Cella, Ryan Martin, Validity, consonant plausibility measures, and conformal prediction, International Journal of Approximate Reasoning, volume 141, pages 110--130, 2022](https://arxiv.org/abs/2001.09225v3)

### Rank cutoffs make the coverage of split conformal prediction distribution free

**Remember:** Only the rank positions matter when scores are exchangeable and distinct.

*True by definition.* MSC 62G15 (Nonparametric tolerance and confidence regions), 62G30. arXiv stat.ME, stat.TH. Level 4: research.

**Definition.** Split conformal prediction scores each of n calibration points by how badly a fitted model predicts it. A new point's prediction set contains the values whose score is below the ⌈(1 − α)(n + 1)⌉-th smallest calibration score. The scores are assumed exchangeable and almost surely distinct.

**Problem.** For m future points, the fraction covered by their prediction sets has an exact law that depends only on n, α and m (Theorem 1). As m grows, the fraction converges to a Beta law with parameters ⌈(1 − α)(n + 1)⌉ and ⌊α(n + 1)⌋.

**How the definition helps.** By our own unpacking, a future point is covered exactly when its score ranks below a fixed position among the calibration scores. Exchangeability and distinct scores make all orderings of the pooled scores equally likely. So the coverage count has the same law for every data distribution. The paper shows that the coverage indicators are exchangeable (Proposition 3) and then computes their exact law. By our own reading, that computation is a counting argument.

**Paper or page:** [Universal distribution of the empirical coverage in split conformal prediction](https://arxiv.org/abs/2303.02770v2). It says: “Both distributions are universal, being determined solely by the nominal miscoverage level and the calibration sample size”

**Sources:**

- [Paulo C. Marques F, Universal distribution of the empirical coverage in split conformal prediction, Statistics &amp; Probability Letters, Volume 219, 2025, 110350.](https://arxiv.org/abs/2303.02770v2)

### Weighted coverage gives conformal guarantees for overlapping and fractional groups

**Remember:** Choose group indicators for hard membership and fractional weights for soft membership.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 62G15 (Nonparametric tolerance and confidence regions), 68Q32. arXiv cs.LG, stat.ML. Level 4: research.

**Definition.** Conformal prediction returns a set of possible labels. A group weight gives the degree of membership for an input and candidate label. The weighted coverage error is the average of the weight times the difference between the coverage indicator and the target coverage.

**Problem.** Take weights that are linear combinations of d bounded basis functions. With high probability, one bound then holds for all such weights at once. It scales with the ℓ1 norm of the coefficients times √(d/n), for n calibration points.

**How the definition helps.** Weights let one coverage statement handle overlapping groups and partial membership. With group indicators as weights, the bound gives ordinary group-conditional coverage (Corollary 3.3 of the paper). In our own summary, the hard part is uniform control over the weight family from a finite calibration sample.

**Paper or page:** [Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage](https://arxiv.org/abs/2502.17264v2), [Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage](https://arxiv.org/abs/2502.17264v2). It says: “our framework flexibly handles overlapping and fractional group memberships defined jointly on covariates and labels”

**Sources:**

- [Konstantina Bairaktari, Jiayun Wu, Zhiwei Steven Wu, Kandinsky Conformal Prediction: Beyond Class- and Covariate-Conditional Coverage, arXiv:2502.17264v2 (2025)](https://arxiv.org/abs/2502.17264v2)

### Counting only interior mass guarantees a halfspace that attains halfspace depth

**Remember:** Mass on the boundary need not count against the limit.

*Rules out counterexamples. Confidence: medium.* MSC 62H05 (Characterization and structure theory for multivariate probability distributions; copulas), 62R20. arXiv math.ST. Level 4: research.

**Definition.** The halfspace depth of a point x for a finite measure is the infimum of the masses of closed halfspaces that contain x. A generalized minimizing halfspace at x is a closed halfspace with x on its boundary whose interior has mass at most that depth.

**Problem.** Every finite measure has a generalized minimizing halfspace at every point. Call the measure smooth at x if every hyperplane through x has zero mass. Then some closed halfspace has mass equal to the depth.

**How the definition helps.** Interior mass can only drop in a limit of halfspaces, so a minimizing sequence has a limit that works (our own unpacking). The proof also uses compactness of the sphere of directions. Our own example puts an atom of mass ¼ at each of (0, 1) and (0, −1). It spreads mass ¼ continuously along each curve (t², t) and (t², −t) for 0 &lt; t &lt; 1. Every closed halfspace through the origin has mass above ¼, but cuts close to the vertical axis have mass near ¼. So the depth ¼ is not attained, while the halfspace x ≤ 0 has interior mass 0.

**Paper or page:** [Halfspace depth for general measures: The ray basis theorem and its consequences](https://arxiv.org/abs/2106.00616v1). It says: “For any μ ∈ ℳ(ℝᵈ) there exists a generalized minimizing halfspace of μ at any point x ∈ ℝᵈ. If μ is smooth at x, then there exists a minimizing halfspace of μ at x.”

**Sources:**

- [Petra Laketa, Stanislav Nagy, Halfspace depth for general measures: The ray basis theorem and its consequences, Stat Papers 63, 849-883 (2022)](https://arxiv.org/abs/2106.00616v1)

### Martingale difference divergence is zero exactly when the conditional mean is constant

**Remember:** Probe the mean with every frequency, not just with the predictor.

*Makes the theorem clean to state or prove.* MSC 62H20 (Measures of association (correlation, canonical correlation, etc.)), 62H15, 60E10. arXiv math.ST. Level 4: research.

**Definition.** Martingale difference divergence measures how a response Y depends on a predictor X in mean. It integrates, over all frequencies s with a positive weight, the squared size of the covariance between Y and exp(i⟨s, X⟩).

**Problem.** If Y and X have finite second moments, the divergence is zero exactly when E\[Y \| X\] = E\[Y\] almost surely.

**How the definition helps.** The covariance at frequency s is a Fourier transform of the conditional mean deviation, so Fourier uniqueness gives the result (our own explanation). Ordinary correlation tests only one direction. Our own example is a standard normal X with Y = X². These are uncorrelated, but the conditional mean of Y is not constant. Estimating the divergence from dependent time series data takes the paper's further work.

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

**Definition.** Replace the data of each variable by multivariate ranks, found by matching the data to a fixed reference distribution with optimal transport. For each subset S of at least two variables, there is a nonnegative rank distance covariance term for S. Rank joint distance covariance adds these terms over all subsets, with strictly positive weights.

**Problem.** For any positive weights, rank joint distance covariance is zero exactly when the variables are mutually independent (Proposition 2.10). The term for S is zero when the variables in S are independent. The converse holds when every \|S\| − 1 of these variables are independent.

**How the definition helps.** With positive weights, a zero sum forces every subset's term to be zero, by our own unpacking. The theorem then follows from the single-term result by induction on the size of the subset. Pairs give pairwise independence, then triples give independence of each triple, and so on. Our own example shows why higher terms are needed. Take two independent fair bits and their sum modulo two. Each pair is independent but the three are not, so only the triple term detects the dependence. The single-term result is the main work.

**Paper or page:** [Distribution-free joint independence testing and robust independent component analysis using optimal transport](https://arxiv.org/abs/2211.15639v2). It says: “For any vector positive weights C, RJdCov²(X; C) = 0 if and only if (X₁, X₂, …, Xᵣ) are mutually independent.”

**Sources:**

- [Ziang Niu, Bhaswar B. Bhattacharya, Distribution-free joint independence testing and robust independent component analysis using optimal transport, arXiv:2211.15639v2 (2022)](https://arxiv.org/abs/2211.15639v2)

### The best convex regression loss comes from projecting the noise score

**Remember:** Force the noise score to decrease, and the loss becomes convex.

*Makes the theorem clean to state or prove.* MSC 62J05 (Linear regression; mixed models), 62F12, 62F35. arXiv math.ST. Level 4: research.

**Definition.** The noise score is the derivative of the log of the error density. Project it, in the mean square sense under the error law, onto the set of decreasing functions. The optimal convex loss is the loss whose derivative is minus this projection.

**Problem.** Under the paper's assumptions, the resulting loss gives the smallest asymptotic variance for the regression coefficients among all convex losses.

**How the definition helps.** For a loss with derivative ψ, the asymptotic variance is ‖ψ‖² over the squared inner product of ψ with the noise score (our own calculation). So minimizing the variance means making ψ point as nearly as possible in the direction of the score. Over a convex cone such as the decreasing functions, the projection does exactly this (our own reasoning). Minus a decreasing function is increasing, so the loss is convex. Building an estimator from data that reaches the same variance is the paper's main work.

**Paper or page:** [Optimal convex $M$-estimation via score matching](https://arxiv.org/abs/2403.16688v2). It says: “At the population level, the negative derivative of the optimal convex loss is the best decreasing approximation of the derivative of the log-density of the noise distribution.”

**Sources:**

- [Oliver Y. Feng, Yu-Chun Kao, Min Xu, Richard J. Samworth, Optimal convex $M$-estimation via score matching, arXiv:2403.16688v2 (2024)](https://arxiv.org/abs/2403.16688v2)

### A maximal invariant turns a composite null hypothesis into a simple one

**Remember:** Keep one label for each set of data that the group links.

*Makes the theorem clean to state or prove.* MSC 62L10 (Sequential statistical analysis), 62B05. arXiv math.ST. Level 4: research.

**Definition.** A group acts on the data. A maximally invariant statistic takes the same value on two data sets exactly when the group maps one to the other. The test uses the likelihood ratio of this statistic.

**Problem.** Under the paper's group assumptions, this likelihood ratio has the best worst-case expected log growth among all e-statistics, invariant or not. It also gives an anytime-valid test.

**How the definition helps.** The law of a maximal invariant ignores the nuisance parameters that the group moves, so all null laws give it one law (our own explanation). The null hypothesis becomes a single law, and a likelihood ratio against a single law is a nonnegative martingale (Proposition 6 in the paper). That martingale gives the anytime-valid test. Proving optimality against tests that are not invariant is harder. The abstract says that this needs amenability, a group property that allows averaging over the group.

**Paper or page:** [E-Statistics, Group Invariance and Anytime Valid Testing](https://arxiv.org/abs/2208.07610v2). It says: “We show that among all e-statistics, invariant or not, the likelihood ratio of the maximally invariant statistic is GROW, both in the absolute and in the relative sense,”

**Sources:**

- [Muriel Felipe Pérez-Ortiz, Tyron Lardy, Rianne de Heide, Peter Grünwald, E-Statistics, Group Invariance and Anytime Valid Testing, arXiv:2208.07610v2 (2022)](https://arxiv.org/abs/2208.07610v2)

### Bounding every loss by one e-value lets the data choose the loss

**Remember:** One pointwise limit protects against every later choice of loss.

*True by definition.* MSC 62L10 (Sequential statistical analysis), 62C05. arXiv stat.TH. Level 4: research.

**Definition.** An e-variable is a nonnegative statistic S whose expectation is at most one under every law in the null hypothesis. A decision rule is compatible with S if, for every decision task, the loss of the rule's decision under the null is at most S.

**Problem.** A decision rule that is compatible with an e-variable is Type-I risk safe (Proposition 1). Type-I risk safe means, in the paper's sense, that the expected loss under the null stays controlled even when the data choose the task.

**How the definition helps.** Compatibility bounds the loss of every task by the same S, so it also bounds the loss of whichever task the data select. Taking expectations under the null then gives the risk bound directly, since the expectation of S is at most one. The paper also proves a converse: every Type-I risk safe rule is compatible with some e-variable. By our own reading, the hard part is finding e-variables that give useful decisions.

**Paper or page:** [Beyond Neyman-Pearson: e-values enable hypothesis testing with a data-driven alpha](https://arxiv.org/abs/2205.00901v3). It says: “With e-values it is straightforward, since they provide Type-I risk control in a generalized Neyman-Pearson setting with the decision task (a general loss function) determined post-hoc, after observation of the data”

**Sources:**

- [Peter Grünwald, Beyond Neyman-Pearson: e-values enable hypothesis testing with a data-driven alpha, arXiv:2205.00901v3 (2022)](https://arxiv.org/abs/2205.00901v3)

### Correcting predicted bets with randomly sampled true labels keeps e-values valid

**Remember:** Use predictions for speed and random true labels to correct their average.

*True by definition.* MSC 62L10 (Sequential statistical analysis), 62C05, 60G42. arXiv stat.ME, math.ST. Level 4: research.

**Definition.** An e-value is a nonnegative statistic whose expected value is at most one when the hypothesis is true. A prediction-powered bet starts from its value at a predicted label. When the true label is requested at random with probability π, it adds the true bet minus the predicted bet, divided by π.

**Problem.** The corrected product of bets is a valid e-value. If the original bets form a test supermartingale or an e-process, so do the corrected bets.

**How the definition helps.** Averaging over the random request cancels the factor 1/π, so each corrected bet has the same conditional mean as the true bet (our own unpacking). Validity then follows at once from the validity of the original bets. Bad predictions do not break validity, because the correction removes their error on average. The corrected bet must stay nonnegative. If each bet lies between a and b, a request probability of at least 1 − a/b is enough (our own calculation; see Theorem 2.2). Proving that the corrected test keeps most of the original power takes more work.

**Paper or page:** [Prediction-Powered E-Values](https://arxiv.org/abs/2502.04294v2). It says: “Eᵖᵖⁱₙ is a valid e-value for the null H₀.”

**Sources:**

- [Daniel Csillag, Claudio José Struchiner, Guilherme Tegoni Goedert, Prediction-Powered E-Values, arXiv:2502.04294v2 (2025)](https://arxiv.org/abs/2502.04294v2)

### Forecasts that cannot worsen the track record give all calibration theorems

**Remember:** Choose the next error so that it cannot push past errors further.

*Makes the theorem clean to state or prove.* MSC 62M20 (Inference from stochastic processes and prediction), 91A26. arXiv econ.TH, stat.ML. Level 4: research.

**Definition.** The track record holds, for each forecast bin, the sum of past errors, where an error is the outcome minus the forecast. A forecast-hedging rule picks each forecast so that the expected new error has a nonpositive inner product with the current track record. So the expected track record can only improve.

**Problem.** If a deterministic rule meets the hedging condition for continuous bins, its calibration score tends to 0 against every outcome sequence. If a randomized rule meets an ε-version of the condition for finitely many bins, its expected calibration score is eventually at most ε.

**How the definition helps.** The hedging condition is chosen so that one short estimate proves calibration. Our own sketch: the new squared norm of the record is the old one, plus twice an inner product, plus the squared new error. Hedging makes the inner product nonpositive in expectation. So the squared record grows at most linearly in time, and the record divided by time tends to 0. The real work moves to showing that hedging forecasts exist. The paper uses fixed-point arguments for deterministic rules and the minimax theorem for randomized rules.

**Paper or page:** [Forecast Hedging and Calibration](https://arxiv.org/abs/2210.07169v1). It says: “This yields all the calibration results by the same simple basic argument”

**Sources:**

- [Dean P. Foster, Sergiu Hart, Forecast Hedging and Calibration, arXiv:2210.07169v1 (2022); Journal of Political Economy 129, 12 (December 2021), 3447-3490](https://arxiv.org/abs/2210.07169v1)

### Replacing each forecast by its running bin average removes the calibration penalty

**Remember:** Keep the forecaster's bins, but forecast each bin's running average outcome.

*Makes the theorem clean to state or prove.* MSC 62M20 (Inference from stochastic processes and prediction), 91A26. arXiv econ.TH, stat.ML. Level 4: research.

**Definition.** The Brier score is the average squared difference between forecasts and outcomes. Group the days into bins by the forecast given on them. The refinement score is the average squared distance from each outcome to its bin's mean outcome. The calibration score does the same for each forecast, and the Brier score is the sum of the two scores.

**Problem.** Take any forecaster who uses finitely many forecast values. A new rule forecasts, for each bin, the average of past outcomes in that bin. Its Brier score is at most the forecaster's refinement score plus a term of order (log t)/t, for every sequence of outcomes and forecasts.

**How the definition helps.** The split shows that the refinement score is the best Brier score possible while keeping the forecaster's bins. Our own explanation: with all outcomes known, the bin mean minimizes the squared error within each bin. The new rule copies this using only past outcomes, so it pays only a small learning cost. Theorem 3 bounds that cost.

**Paper or page:** ["Calibeating": Beating Forecasters at Their Own Game](https://arxiv.org/abs/2209.04892v2). It says: “The Brier score is the sum of the calibration score and the refinement score”

**Sources:**

- [Dean P. Foster, Sergiu Hart, "Calibeating": Beating Forecasters at Their Own Game, arXiv:2209.04892v2 (2022); Theoretical Economics 18 (2023), 4, 1441-1474](https://arxiv.org/abs/2209.04892v2)

### Smoothed calibration can be guaranteed by deterministic forecasts, even when leaked

**Remember:** Blend nearby forecasts, and a deterministic forecaster can stay calibrated even when watched.

*Rules out counterexamples.* MSC 62M20 (Inference from stochastic processes and prediction), 91A26. arXiv econ.TH, stat.ML. Level 4: research.

**Definition.** Calibration asks that, for each forecast value, the average outcome on the days with that forecast is close to the forecast. Smooth calibration replaces the days with exactly that forecast by a weighted average over days with nearby forecasts. The weights change continuously, with a Lipschitz bound L, as the forecasts move apart.

**Problem.** For every tolerance ε &gt; 0 and every Lipschitz bound L, some deterministic rule is (ε, L)-smoothly calibrated against every outcome sequence. This holds even when the forecasts are leaked, that is, known before the outcome is chosen. No deterministic rule can guarantee ordinary calibration.

**How the definition helps.** Smoothing lets nearby forecasts share one average, so one adversarial split of the forecasts no longer forces a large error. Our own example shows why exact bins fail. An adversary who sees the forecast chooses outcome 1 when it is below one-half and 0 otherwise. Then forecasts below one-half see only 1s and the others see only 0s, so the error stays near one-half. Smoothing mixes forecasts just below and just above one-half, so these errors can cancel. The paper still has to build the rule, and it does so through online linear regression and weak calibration.

**Paper or page:** [Smooth Calibration, Leaky Forecasts, Finite Recall, and Nash Dynamics](https://arxiv.org/abs/2210.07152v1). It says: “While regular calibration can be guaranteed only by randomized forecasting procedures, we show that smooth calibration can be guaranteed by deterministic procedures.”

**Sources:**

- [Dean P. Foster, Sergiu Hart, Smooth Calibration, Leaky Forecasts, Finite Recall, and Nash Dynamics, arXiv:2210.07152v1 (2022); Games and Economic Behavior 109 (May 2018), 271-293](https://arxiv.org/abs/2210.07152v1)
