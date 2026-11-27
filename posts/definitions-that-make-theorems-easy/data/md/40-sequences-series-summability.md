### Absolute convergence makes rearranging a series safe

**Remember:** If the sizes alone add up to something finite, the order cannot matter.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series Σaₙ converges absolutely when the series of absolute values Σ\|aₙ\| converges.

**Problem.** Every rearrangement of a convergent series has the same sum.

**How the definition helps.** Absolute convergence is exactly the condition under which, for real series, the order of the terms does not change the sum. The statement is false for convergent series in general. Cauchy (1833) found that a rearrangement of the alternating harmonic series can have a different sum. Dirichlet saw that absolute convergence rules this out. Riemann showed that the condition is sharp for real series. A convergent real series that does not converge absolutely can be rearranged to give any real sum, or to diverge. In ℝⁿ the picture is harder: Lévy and Steinitz showed that the set of sums of all rearrangements is an affine subspace.

**Wikipedia:** [Riemann series theorem](https://en.wikipedia.org/wiki/Riemann_series_theorem), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “Around the same time, Peter Gustav Lejeune Dirichlet highlighted that such phenomena are ruled out in the context of absolute convergence, and gave further examples of Cauchy's phenomenon for some other series which fail to be absolutely convergent.”

**Sources:**

- [B. Riemann, Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe, Abh. Königl. Ges. Wiss. Göttingen 13 (1868), 87–132](http://resolver.sub.uni-goettingen.de/purl?PPN250442582_0013)
- [E. Steinitz, Bedingt konvergente Reihen und konvexe Systeme, J. reine angew. Math. 143 (1913), 128–176, doi:10.1515/crll.1913.143.128](https://doi.org/10.1515/crll.1913.143.128)

### Convergence of an infinite product excludes the limit zero

**Remember:** A convergent product may not quietly drift to zero.

*Rules out counterexamples.* MSC 40A20 (Convergence and divergence of infinite products). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Take an infinite product ∏ aₖ with at most finitely many zero factors. It converges if the partial products of its non-zero factors have a limit, and this limit is not zero. Its value is 0 if some factor is 0. Otherwise its value is that limit.

**Problem.** Get the analogue of the test for series. If ∑ aₖ converges, then aₖ → 0. The analogue says that if ∏ aₖ converges, then aₖ → 1.

**How the definition helps.** The demand for a non-zero limit removes the two ways in which the naive definition breaks the test. With the naive definition, a product converges if the limit of its partial products exists. First, a single factor 0 then makes each later partial product 0, whatever the aₖ do. Second, factors with \|aₖ\| ≤ M &lt; 1 push the partial products to 0, although aₖ need not tend to 1. The non-zero limit of the non-zero factors rules out both. Then the expected theorems hold. For example, convergence implies aₖ → 1, and a convergent product is zero only if some factor is zero.

**nLab:** [infinite product](https://ncatlab.org/nlab/show/infinite+product). It says: “To avoid these "pathological" situations, we make the following modified definition.”

**Sources:**

- [Alfred Pringsheim, Ueber die Convergenz unendlicher Producte, Mathematische Annalen 33 (1888) 119–154](https://doi.org/10.1007/bf01444113)

### Uniform convergence repairs Cauchy's sum theorem

**Remember:** Uniform convergence means that one N works for every point at once.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence of functions fₙ converges uniformly to f∞ if, for every ε &gt; 0, there is one N with \|fₙ(x) − f∞(x)\| &lt; ε for all n ≥ N and all x at the same time. Pointwise convergence lets N depend on x.

**Problem.** Cauchy's sum theorem of 1821 says this: if a sequence of continuous functions converges, then its limit is continuous.

**How the definition helps.** Uniform convergence gives one N for all nearby points, and the standard proof needs exactly that. With pointwise convergence the statement is false. For example, fₙ(x) = xⁿ on \[0,1\], the sawtooth Fourier series and exp(−n\|x\|) all have continuous terms and a discontinuous limit. The ε/3 proof fails because the N for the point x + h depends on h, while the δ for continuity depends on n. Uniform convergence makes N independent of h, and then the same ε/3 argument is a valid proof (Seidel 1847). Equicontinuity (one δ for all the functions fₙ at once) is a second repair: it makes δ independent of n.

**nLab:** [Cauchy sum theorem](https://ncatlab.org/nlab/show/Cauchy+sum+theorem). It says: “Analysing this argument, Philipp von Seidel (first, and others afterwards) realised that it could be fixed if f converges to f∞ uniformly, so that n is independent of h.”

**Sources:**

- [Imre Lakatos, Mathematics, Science and Epistemology (Philosophical Papers vol. 2), Cambridge University Press (1978), chapter 3](https://doi.org/10.1017/CBO9780511624926)

### Improper integrals as suprema of partial areas make comparison immediate

**Remember:** If every partial area of f is smaller, so is the supremum.

*True by definition. Confidence: medium.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f ≥ 0 be Riemann integrable on every closed bounded subinterval of an open interval I. Define its improper integral as the supremum of its integrals over those subintervals. The value may be +∞. The usual definition fixes an interior point and takes separate limits toward the two ends of I.

**Problem.** Let 0 ≤ f ≤ g on I, both Riemann integrable on every closed bounded subinterval. If the improper integral of g is finite, then so is that of f, and it is no larger.

**How the definition helps.** With the supremum definition, the claim is that a pointwise bound passes to suprema (our own). Each partial area of f is at most the matching partial area of g, so at most the supremum for g (our own). The usual definition first needs both one-sided limits to exist (our own). The work moves into showing that the definitions agree for f ≥ 0. Partial areas grow with the subinterval, and a bounded increasing function has a limit (our own).

**Paper or page:** [Comparison Test for Improper Integral](https://proofwiki.org/wiki/Comparison_Test_for_Improper_Integral). It says: “If the improper integral of φ over I exists, then so does that of f.”

**Sources:** none listed. No primary source with a working link was found.

### Regular, linear, stable summation methods must give geometric series the value c/(1−r)

**Remember:** Shift the series, scale it, and its value is forced.

*True by definition.* MSC 40A25 (Approximation to limiting values (summation of series, etc.)), 40D05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A summation method gives a value to some series. It is regular if it agrees with the ordinary sum on convergent series. It is linear if it respects sums and scalar multiples. It is stable if the value equals the first term plus the value of the rest of the series.

**Problem.** Every stable linear method that sums the geometric series Σ c rᵏ with r ≠ 1 must give c/(1 − r). In particular, Grandi's series 1 − 1 + 1 − ⋯ gets the value 1/2 whenever it is summed.

**How the definition helps.** The axioms turn the value of a series into the solution of an equation. Stability gives G = c + Σ c rᵏ⁺¹, and linearity turns this into G = c + rG. So G = c/(1 − r) whenever the method assigns a finite value. The page says this partly explains why Cesàro, Abel and other methods agree on such series. Whether a given method sums a given series is not given by the axioms; that needs separate work for each method.

**Wikipedia:** [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “Taking regularity, linearity and stability as axioms, it is possible to sum many divergent series by elementary algebraic manipulations. This partly explains why many different summation methods give the same answer for certain series.”

**Sources:** none listed. No primary source with a working link was found.

### Stable linear summation methods cannot give 1+2+3+⋯ a value

**Remember:** A finite value needs a method that is not stable or not linear.

*True by definition.* MSC 40A25 (Approximation to limiting values (summation of series, etc.)), 40D05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A summation method is linear if it respects sums and scalar multiples of series. It is stable if putting a term in front of the series raises the value by that term.

**Problem.** Show that the value −1/12 for 1 + 2 + 3 + ⋯ cannot come from any stable linear method.

**How the definition helps.** With the axioms written down, a few lines of algebra settle the question. Suppose a stable linear method gives 1 + 2 + 3 + ⋯ the value s. Putting 0 in front by stability and subtracting by linearity gives 1 + 1 + 1 + ⋯ the value 0. Doing the same again gives 1 + 0 + 0 + ⋯ the value 0, but stability says its value is 1. So zeta function regularization and Ramanujan summation, which give −1/12, must fail linearity or stability. The page notes that zeta regularization is not linear.

**Wikipedia:** [1 + 2 + 3 + 4 + ⋯](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF), [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “Most of the more elementary definitions of the sum of a divergent series are stable and linear, and any method that is both stable and linear cannot sum 1 + 2 + 3 + ⋯ to a finite value”

**Sources:**

- [Mario A. Natiello and Hernán Gustavo Solari, On the removal of infinities from divergent series, Philosophy of Mathematics Education Journal 29 (2015) 1–11](https://hdl.handle.net/11336/46148)

### Averaging the partial sums recovers every continuous function (Fejér)

**Remember:** Average the partial sums, and the wobbles of the Fourier series cancel.

*Rules out counterexamples.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods), 42A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let s₀, s₁, s₂, … be the partial sums of a series. The series is Cesàro summable to s when the averages σₙ = (s₀ + s₁ + … + sₙ)/(n + 1) converge to s. In words, σₙ is the mean of the first n + 1 partial sums. If the partial sums converge to s, the averages also converge to s.

**Problem.** Every continuous function with period 2π should be recovered from its Fourier series, uniformly.

**How the definition helps.** Averaging the partial sums smooths out the failures of ordinary convergence, and it loses nothing. With ordinary partial sums the statement is false: some continuous functions have a Fourier series that diverges at a point. The classical example is du Bois-Reymond's from 1873 (our own detail). Fejér (1900) showed that the Cesàro means of the Fourier series of a continuous function converge to it uniformly. Our own remark: a kernel is the function whose convolution with f gives the partial sums or their means; the Dirichlet kernel for the partial sums is not positive and its L¹ norms are unbounded, while the Fejér kernel for the means is positive. Because Cesàro summation gives the ordinary sum whenever that exists, nothing is lost. The question for ordinary partial sums stays hard: Carleson proved in 1966 that the Fourier series of an L² function converges almost everywhere.

**Wikipedia:** [Fejér's theorem](https://en.wikipedia.org/wiki/Fej%C3%A9r%27s_theorem), [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series). It says: “Sadly however, the theorem does not work in a general sense when we replace the sequence σₙ(f,x) with sₙ(f,x). This is because there exist functions whose Fourier series fails to converge at some point.”

**Sources:**

- [L. Fejér, Untersuchungen über Fouriersche Reihen, Math. Ann. 58 (1904), 51–69, doi:10.1007/BF01447779](https://doi.org/10.1007/BF01447779)

### Unordered sums over index sets split over disjoint pieces

**Remember:** Sum over finite subsets, and the order of terms stops mattering.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences), 54A20, 54H15. arXiv math.CA, math.GN. Level 3: graduate.

**Definition.** A generalized sum of a family (gₖ) indexed by any set K is a limit of finite partial sums. The limit is taken over the finite subsets of K, ordered by inclusion. It uses no order on K.

**Problem.** Let G be a commutative topological semigroup, which has a continuous addition. Let I and J be disjoint index sets, and let the generalized sums over I and over J converge. Then the sum over I ∪ J converges and equals the sum of the two sums.

**How the definition helps.** Because the definition uses all finite subsets and no ordering, rearranging the terms cannot change the sum. A finite subset of I ∪ J splits into a finite part of I and a finite part of J. So the theorem then needs only the continuity of addition. Our own comparison is with ordinary series in ℝ, where the order of the terms matters. By the Riemann rearrangement theorem, a conditionally convergent series can be rearranged to have any real sum. Our own remark is that in ℝ a family has a generalized sum exactly when it is absolutely summable.

**Paper or page:** [Generalized Sum over Union of Disjoint Index Sets](https://proofwiki.org/wiki/Generalized_Sum_over_Union_of_Disjoint_Index_Sets). It says: “the generalized sum ∑ₖ gₖ converges and: ∑ₖ gₖ = (∑ᵢ gᵢ) + (∑ⱼ gⱼ)”

**Sources:**

- [ProofWiki, Generalized Sum over Union of Disjoint Index Sets](https://proofwiki.org/wiki/Generalized_Sum_over_Union_of_Disjoint_Index_Sets)

### Ideal convergence frees Olivier's theorem from monotonicity

**Remember:** Ignore a set of indices with finite harmonic sum, and n aₙ → 0.

*Rules out counterexamples.* MSC 40A35 (Ideal and statistical convergence), 26D15. arXiv math.CA. Level 4: research.

**Definition.** An ideal on ℕ is a family of sets of indices that counts as negligible; it is closed under subsets and finite unions. A sequence tends to L along the ideal when, for each ε &gt; 0, the n with \|xₙ − L\| ≥ ε are negligible. The summable ideal holds the sets A for which the sum of 1/n over n in A is finite.

**Problem.** Olivier's theorem says that n aₙ → 0 when (aₙ) is positive and nonincreasing and ∑ aₙ &lt; ∞. Šalát and Toma found when monotonicity can be dropped. Their theorem says when n aₙ → 0 along an ideal for every convergent positive series: exactly when the ideal contains the summable ideal.

**How the definition helps.** Ideal convergence ignores a negligible set of indices, and the set where n aₙ stays large always has a finite harmonic sum. Our own one-line proof follows. If n aₙ ≥ ε on A, then the sum of 1/n over A is at most (1/ε)·∑ aₙ. Our own counterexample to plain convergence takes aₙ = 1/n when n is a square and aₙ = 1/n² otherwise. The series converges, but n aₙ = 1 on the squares, and the squares form a set in the summable ideal. Our own remark: sets with finite harmonic sum have density zero, so n aₙ → 0 in the statistical sense for every convergent positive series.

**Paper or page:** [The ideal test for the divergence of a series](https://arxiv.org/abs/2307.01506v1), [The ideal test for the divergence of a series](https://arxiv.org/abs/2307.01506v1). It says: “we either drop the monotonicity assumption completely or we relax it to the monotonicity on a large set of indices. In both cases, the convergence of (n aₙ) is replaced by ideal convergence.”

**Sources:**

- [Rafał Filipów, Adam Kwela, Jacek Tryba, The ideal test for the divergence of a series, Rev. R. Acad. Cienc. Exactas Fís. Nat. Ser. A Mat. RACSAM 117 (2023), no. 3, Paper No. 98, arXiv:2307.01506](https://doi.org/10.1007/s13398-023-01430-w)

### Keeping original indices makes subsequences of ideal-convergent sequences converge

**Remember:** Keep the original indices when restricting an ideal.

*True by definition. Confidence: low.* MSC 40A35 (Ideal and statistical convergence), 54A20. arXiv math.GN. Level 4: research.

**Definition.** An ideal on the natural numbers is a family of index sets, closed under subsets and finite unions, whose members count as negligible. A sequence converges to x for the ideal if, for each neighborhood of x, the indices of terms outside it form a negligible set. A set of indices M is nonthin if it is not negligible. On M, the restricted ideal consists of the negligible sets inside M, and the subsequence keeps its original indices.

**Problem.** Our own statement of the result is this. Restrict an ideal-convergent sequence to a nonthin set of indices. Then it converges to the same limit for the restricted ideal.

**How the definition helps.** Keeping the original indices makes the result true by definition, by our own proof. The bad indices of the restricted sequence are the original bad indices inside M, which form a negligible set inside M. Our own example shows what goes wrong after renumbering. Let the sequence be one at the squares and zero elsewhere. The squares have density zero, so the sequence converges to zero for the ideal of density-zero sets. Renumbered, the subsequence at the squares is constantly one, so it converges to one instead. Here the set of squares is not nonthin, so the paper's definition excludes it.

**Paper or page:** [Compactness with ideals](https://arxiv.org/abs/2107.00050v1). It says: “subsequence of an ideal convergent sequence may fail to be ideal convergent with respect to same ideal.”

**Sources:**

- [Manoranjan Singha, Sima Roy, Compactness with ideals, arXiv:2107.00050v1 (2021)](https://arxiv.org/abs/2107.00050v1)
