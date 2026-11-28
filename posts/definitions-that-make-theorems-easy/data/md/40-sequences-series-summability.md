### Absolute convergence makes rearranging a series safe

**Remember:** If the sizes alone have a finite sum, order cannot matter.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series Σaₙ converges absolutely when the series of absolute values Σ\|aₙ\| converges, so the far-out terms have small total size, however they are arranged.

**Problem.** Every rearrangement of an absolutely convergent series has the same sum.

**How the definition helps.** Pick an initial segment whose absolute tail sum is below ε; once a rearranged partial sum contains that segment, its other terms have total size below ε (our own). So every rearrangement tends to the original sum (our own). The alternating harmonic series is not absolutely convergent, and its rearrangements can have different sums.

**Wikipedia:** [Riemann series theorem](https://en.wikipedia.org/wiki/Riemann_series_theorem), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “Around the same time, Peter Gustav Lejeune Dirichlet highlighted that such phenomena are ruled out in the context of absolute convergence, and gave further examples of Cauchy's phenomenon for some other series which fail to be absolutely convergent.”

**Sources:**

- [B. Riemann, Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe, Abh. Königl. Ges. Wiss. Göttingen 13 (1868), 87–132](http://resolver.sub.uni-goettingen.de/purl?PPN250442582_0013)
- [E. Steinitz, Bedingt konvergente Reihen und konvexe Systeme, J. reine angew. Math. 143 (1913), 128–176, doi:10.1515/crll.1913.143.128](https://doi.org/10.1515/crll.1913.143.128)

### Absolute convergence makes series products safe

**Remember:** Absolute tails stay small even without cancellation.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series converges absolutely if the absolute values of its terms have a finite sum, so its far-out terms are small in total even without cancellation.

**Problem.** If two real series converge and at least one converges absolutely, their Cauchy product converges to the product of their sums. The Cauchy product groups the products aᵢbⱼ by the sum i + j.

**How the definition helps.** Each partial sum of the product weights partial sums of the other series by terms of the absolutely convergent one, so its small absolute tail times a bound on those partial sums controls the late weights (our own). Each early weight multiplies a partial sum that tends to its limit (our own). Without absolute convergence, squaring Σ(−1)ⁿ/√(n+1), from n = 0, gives product terms of size at least one, so the product diverges.

**Wikipedia:** [Cauchy product](https://en.wikipedia.org/wiki/Cauchy_product). It says: “if both sequences are conditionally convergent, the Cauchy product does not have to converge towards the product of the two series”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy reciprocals work away from zero

**Remember:** Keep a gap from zero before taking reciprocals.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence stays away from zero eventually if, from some index on, all its terms satisfy \|xₙ\| ≥ c for one fixed c &gt; 0, so every late product \|xₙxₘ\| is at least c².

**Problem.** If a real Cauchy sequence stays away from zero eventually, its late reciprocals form a Cauchy sequence.

**How the definition helps.** The bound gives \|1/xₙ − 1/xₘ\| = \|xₙ − xₘ\|/\|xₙxₘ\| ≤ \|xₙ − xₘ\|/c², so the late reciprocals are Cauchy (our own). The sequence 1/n is Cauchy and never zero, but its reciprocals n are unbounded (our own). For a real Cauchy sequence, the condition is the same as having a nonzero limit (our own).

**Paper or page:** [Combination Theorem for Cauchy Sequences/Inverse Rule](https://proofwiki.org/wiki/Combination_Theorem_for_Cauchy_Sequences/Inverse_Rule). It says: “is well-defined and a Cauchy sequence.”

**Sources:** none listed. No primary source with a working link was found.

### Condensed terms bound whole blocks

**Remember:** Replace each doubling block by its length times its largest term.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a nonincreasing sequence of nonnegative terms aₙ, n ≥ 1, the condensed series Σ 2ᵏa<sub>2ᵏ</sub> replaces the block of indices from 2ᵏ to 2ᵏ⁺¹ − 1 by its length times its first, largest term. Monotonicity puts each block sum between half the next condensed term and its own condensed term.

**Problem.** The original series converges if and only if the condensed series converges.

**How the definition helps.** Summing these two bounds over all blocks and using the comparison test gives convergence in both directions (our own). Without monotonicity the claim fails: our own example has aₙ = 1/n at powers of two and zero elsewhere. The original series is then geometric, but every condensed term equals one.

**Wikipedia:** [Cauchy condensation test](https://en.wikipedia.org/wiki/Cauchy_condensation_test). It says: “each run is bounded above by replacing each term by the largest term in that run.”

**Sources:** none listed. No primary source with a working link was found.

### Consecutive blocks turn regrouping into taking a subsequence

**Remember:** Grouped sums are a subsequence of the partial sums.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Grouping a series cuts its terms, in order, into consecutive finite nonempty blocks and adds each block's total as one term. The partial sums of the grouped series are the original partial sums at the block ends, a subsequence of them.

**Problem.** Grouping a convergent real series into consecutive blocks preserves its sum. Conversely, convergence of the grouped series suffices if the block lengths are bounded and the original terms tend to zero.

**How the definition helps.** A subsequence of a convergent sequence has the same limit, which gives the forward direction. Conversely, bounded block lengths and vanishing terms keep each partial sum close to the last block-end sum, so the block-end limit is the limit of all partial sums (our own). Pairing the terms of 1 − 1 + 1 − 1 + ⋯ gives 0 + 0 + ⋯, so the converse needs a condition on the terms.

**Wikipedia:** [Series (mathematics)](https://en.wikipedia.org/wiki/Series_%28mathematics%29). It says: “a subsequence of the partial sums of the original series”

**Sources:** none listed. No primary source with a working link was found.

### Finite exceptions make sequence limits independent of order

**Remember:** Reordering a finite set of exceptions keeps it finite.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real sequence converges to L if, for every ε &gt; 0, only finitely many indices have terms at distance at least ε from L.

**Problem.** Reordering a convergent sequence or keeping any infinite selection of its terms in order preserves its limit. If the odd and even terms converge to the same limit, the full sequence does too.

**How the definition helps.** Reordering the indices or selecting some of them leaves only finitely many exceptions for each ε (our own). Combining the odd and even exceptions also gives a finite set (our own). This agrees with the usual definition because finitely many exceptions all occur before some index, and each index has finitely many predecessors (our own).

**Paper or page:** [Rearrangement of Convergent Sequence Converges to Same Limit](https://proofwiki.org/wiki/Rearrangement_of_Convergent_Sequence_Converges_to_Same_Limit). It says: “Let π : ℕ → ℕ be a permutation.”

**Sources:** none listed. No primary source with a working link was found.

### Finite sums taken from any indices make comparison immediate

**Remember:** Every finite sum of the smaller terms has a larger counterpart.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The sum of a series of nonnegative terms is the least upper bound of its sums over all finite sets of indices, or +∞ if these sums are unbounded.

**Problem.** If 0 ≤ aₙ ≤ bₙ at every index, the sum of the smaller terms is at most the sum of the larger terms. A finite sum for the larger series therefore guarantees convergence of the smaller series.

**How the definition helps.** Each finite sum of the smaller terms is at most the same finite sum of the larger terms, so the least upper bounds keep the inequality, also when the larger one is +∞ (our own). This agrees with the usual sum because each finite set of indices lies in some initial segment (our own). By nonnegativity its sum is at most that initial sum, and the initial sums increase to their supremum (our own).

**Paper or page:** [Positive-Term Generalized Sum Converges iff Supremum](https://proofwiki.org/wiki/Positive-Term_Generalized_Sum_Converges_iff_Supremum). It says: “x is the supremum of:”

**Sources:** none listed. No primary source with a working link was found.

### Independent tails prevent false convergence

**Remember:** Both tails must settle before their sums can be added.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series over ℤ converges if its negative part and its nonnegative part, each summed from zero outward, converge separately. Its sum is the sum of the two limits.

**Problem.** For a convergent series over ℤ, interval sums approach its sum as the lower and upper endpoints tend independently to −∞ and +∞.

**How the definition helps.** Separate convergence lets each endpoint control its own tail: split an interval sum at zero and add the two limits (our own). Our own counterexample takes 1 at positive indices, −1 at negative indices and 0 at zero. Every symmetric sum vanishes, but neither part converges, so interval sums with independent endpoints have no limit.

**nLab:** [doubly infinite series](https://ncatlab.org/nlab/show/doubly+infinite+series). It says: “A doubly infinite series converges if each of its constituent parts (positive and negative), converges; the sum of the series is then, by definition, the sum of the limits of the two series.”

**Sources:** none listed. No primary source with a working link was found.

### Pairwise tail closeness makes one convergent subsequence enough

**Remember:** One late term near the limit brings the whole tail close.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence is Cauchy if for each positive ε, any two terms sufficiently far out differ by less than ε. This tests all late pairs, not just adjacent terms.

**Problem.** A real Cauchy sequence with a subsequence converging to L also converges to L.

**How the definition helps.** The Cauchy condition puts every sufficiently late term within ε/2 of one sufficiently late subsequence term (our own). Choose that term within ε/2 of L, so each late term lies within ε of L (our own). Small adjacent gaps alone allow repeated trips from zero to one and back, with step size 1/k on trip k (our own).

**Paper or page:** [Convergent Subsequence of Cauchy Sequence/Metric Space](https://proofwiki.org/wiki/Convergent_Subsequence_of_Cauchy_Sequence/Metric_Space). It says: “Let xₙ be a Cauchy sequence in A.”

**Sources:** none listed. No primary source with a working link was found.

### Partial sums turn series convergence into a test of late blocks

**Remember:** Small late blocks mean the partial sums stay close.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series satisfies the Cauchy condition if, for every ε &gt; 0, every block of consecutive terms far enough out has a sum of size below ε.

**Problem.** A real series converges exactly when it satisfies the Cauchy condition. Its terms must then tend to zero.

**How the definition helps.** Each block sum is a difference of two partial sums, so the condition says the partial sums form a Cauchy sequence, which converges by completeness of ℝ (our own). Blocks of one term show that the terms tend to zero (our own). The converse of that last claim fails: in the harmonic series each block from n + 1 to 2n sums to at least 1/2 (our own).

**Paper or page:** [Cauchy's Convergence Criterion for Series](https://proofwiki.org/wiki/Cauchy's_Convergence_Criterion_for_Series). It says: “\|aₙ₊₁ + aₙ₊₂ + ⋯ + aₘ\| &lt; ε”

**Sources:** none listed. No primary source with a working link was found.

### Root tests accept zero terms

**Remember:** Take roots when zero terms break the ratios.

*Makes the theorem clean to state or prove.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The root test looks at the upper limit of ⁿ√\|aₙ\|, the limit of the suprema of its tails. These roots are defined even at zero terms, where the ratios of the ratio test are not.

**Problem.** The series converges absolutely if this upper limit is below one. It diverges if the upper limit is above one. The test gives no answer when the upper limit is one.

**How the definition helps.** Below one, late terms satisfy \|aₙ\| ≤ qⁿ for some q &lt; 1, so they compare with a geometric series; above one, infinitely many terms have size at least one and do not tend to zero (our own). No term is divided by another, so zero terms cause no trouble (our own). For terms 0 at even n and 2⁻ⁿ at odd n, the ratios are undefined infinitely often, but the roots have upper limit 1/2 (our own).

**Paper or page:** [Nth Root Test](https://proofwiki.org/wiki/Nth_Root_Test). It says: “If this limit is less than one, the series converges absolutely.”

**Sources:** none listed. No primary source with a working link was found.

### Tail bounds reveal the largest subsequential limit

**Remember:** Each tail gets close to the upper limit somewhere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences), 26A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The upper limit of a bounded real sequence is the greatest lower bound of its tail suprema, the least upper bounds of the terms from each index onward.

**Problem.** The upper limit of a bounded real sequence is the largest limit of any of its convergent subsequences.

**How the definition helps.** The tail suprema decrease to the upper limit, and each tail has terms arbitrarily close to its supremum (our own). At step n, choose a term beyond index n and beyond the previous choice, within 1/n of the supremum of the tail that starts there; these terms converge to the upper limit (our own). Every subsequence limit is at most every tail supremum, so it is at most the upper limit (our own).

**Paper or page:** [Bolzano-Weierstrass Theorem](https://proofwiki.org/wiki/Bolzano-Weierstrass_Theorem). It says: “Every bounded sequence of real numbers has a convergent subsequence.”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided bounds give the same convergence without a ratio limit

**Remember:** Bound the ratio in both directions to compare both sums.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Two positive sequences have the same order of growth if, from some index on, c ≤ aₙ/bₙ ≤ C for fixed constants 0 &lt; c ≤ C. Then each sequence is at most a constant times the other.

**Problem.** Two positive series whose terms have the same order of growth either both converge or both diverge.

**How the definition helps.** The bounds give aₙ ≤ Cbₙ and bₙ ≤ aₙ/c, so the direct comparison test works in both directions (our own). A positive finite ratio limit gives such bounds, but ratios alternating between 1 and 2 also do (our own).

**Paper or page:** [Limit Comparison Test](https://proofwiki.org/wiki/Limit_Comparison_Test). It says: “are either both convergent or both divergent.”

**Sources:** none listed. No primary source with a working link was found.

### Viewing a series as its partial sums makes telescoping immediate

**Remember:** Successive differences recover the terms from their partial sums.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** View a series as its sequence of partial sums, starting from the empty sum 0. Its terms are the differences of consecutive partial sums, and its sum is their limit.

**Problem.** The series of successive differences bₙ − bₙ₋₁ converges exactly when the real sequence beginning at b₀ converges. Its sum is the sequence limit minus b₀.

**How the definition helps.** The nth partial sum of the differences telescopes to bₙ − b₀, so it converges exactly when bₙ does, with sum lim bₙ − b₀ (our own). Thus taking differences and taking partial sums undo each other (our own).

**Wikipedia:** [Series (mathematics)](https://en.wikipedia.org/wiki/Series_%28mathematics%29). It says: “Some authors directly identify a series with its sequence of partial sums.”

**Sources:** none listed. No primary source with a working link was found.

### Separate limits remove cutoff dependence

**Remember:** Separate convergence lets each endpoint go to infinity at its own pace.

*Rules out counterexamples.* MSC 40A10 (Convergence and divergence of integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A locally integrable f on ℝ has a convergent improper integral if the integrals over \[−R, 0\] and over \[0, R\] each have a finite limit as R → ∞, separately. Its value is the sum of the two limits.

**Problem.** If the improper integral of f converges, the integrals over \[a, b\] tend to its value as a → −∞ and b → +∞ independently.

**How the definition helps.** Split each cut interval at zero and take the two limits separately (our own). Finite-interval additivity also makes the choice of the splitting point harmless (our own). For f(x) = x, the symmetric cuts give zero, but shifting the right endpoint by one makes the integrals diverge (our own).

**Wikipedia:** [Improper integral](https://en.wikipedia.org/wiki/Improper_integral). It says: “Here both limits must converge to a finite value for the improper integral to be said to converge.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric cuts cancel odd integrals

**Remember:** Cut equally on both sides and odd parts cancel.

*True by definition.* MSC 40A10 (Convergence and divergence of integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Cauchy principal value of an integral over \[−a, a\] with a singularity at zero is the limit, as ε → 0, of the integral over the set where ε &lt; \|x\| ≤ a. This set is symmetric under x ↦ −x (our own).

**Problem.** An odd function that is integrable away from zero on \[−a, a\] has principal value zero there.

**How the definition helps.** Substituting −x for x shows the two halves cancel for each ε, so every cut integral of an odd function is zero (our own). The limit is therefore zero, even for 1/x, whose one-sided integrals both diverge (our own).

**nLab:** [Cauchy principal value](https://ncatlab.org/nlab/show/Cauchy+principal+value). It says: “is, if it exists, the limit of a sequence of the integrals of the function over subsets in the complement of this point as these integration domains tend to that point symmetrically from all sides.”

**Sources:** none listed. No primary source with a working link was found.

### Convergence of an infinite product excludes the limit zero

**Remember:** A convergent product may not quietly drift to zero.

*Rules out counterexamples.* MSC 40A20 (Convergence and divergence of infinite products). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A product with finitely many zero factors converges if, after leaving out the zero factors, the partial products have a finite nonzero limit. Its value is that limit, or zero if some factor is zero.

**Problem.** If an infinite product ∏ aₖ converges, then aₖ → 1. A convergent product is zero only if some factor is zero.

**How the definition helps.** Beyond the last zero factor, each factor is the ratio of two consecutive partial products, and both tend to the same nonzero limit, so the factors tend to one (our own). The value rule gives the second claim. With every factor equal to one half, the partial products tend to zero though the factors do not tend to one, so the limit zero must be excluded.

**nLab:** [infinite product](https://ncatlab.org/nlab/show/infinite+product). It says: “To avoid these "pathological" situations, we make the following modified definition.”

**Sources:**

- [Alfred Pringsheim, Ueber die Convergenz unendlicher Producte, Mathematische Annalen 33 (1888) 119–154](https://doi.org/10.1007/bf01444113)

### Bounded multipliers preserve uniform convergence

**Remember:** One bound on the multiplier controls the product error everywhere.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function is bounded if one finite number bounds its absolute value at every input.

**Problem.** Suppose real functions fₙ converge uniformly to f on a set. For every bounded real function g on that set, gfₙ converges uniformly to gf.

**How the definition helps.** One bound M for \|g\| limits the product error to M times the original error everywhere (our own argument). A counterexample takes g(x) = x and fₙ(x) = 1/n on ℝ. The original errors tend uniformly to zero, but the product errors \|x\|/n are unbounded.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “What is uniform about this convergence is that the bound N(ε) is required to work for all x ∈ X (hence uniformly over x).”

**Paper or page:** [Uniformly Convergent Sequence Multiplied with Function](https://proofwiki.org/wiki/Uniformly_Convergent_Sequence_Multiplied_with_Function). It says: “Let g: X → 𝕂 be bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Power series converge locally uniformly

**Remember:** Stay within the radius, with room to spare.

*Makes the theorem clean to state or prove.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series converges locally uniformly on an open interval if it converges uniformly on every closed bounded subinterval, each with its own cutoff index (our own).

**Problem.** A real power series converges uniformly on each closed bounded subinterval strictly inside its interval of convergence.

**How the definition helps.** A closed subinterval strictly inside stays within some distance r of the center, with r below the radius of convergence (our own). The series converges absolutely at radius r, so the numbers \|aₙ\|rⁿ bound the terms on the whole subinterval and have a finite sum, which gives uniform convergence (our own). Uniform convergence on the whole open interval can fail: Σxⁿ is not uniformly convergent on (−1, 1), since its terms do not tend uniformly to zero (our own).

**Wikipedia:** [Power series](https://en.wikipedia.org/wiki/Power_series). It says: “it converges uniformly on every compact subset of the disc of convergence.”

**Paper or page:** [Power Series Converges Uniformly within Radius of Convergence](https://proofwiki.org/wiki/Power_Series_Converges_Uniformly_within_Radius_of_Convergence). It says: “Then S is uniformly convergent on D = {x: \|x − ξ\| ≤ ρ}.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity preserves uniform convergence under composition

**Remember:** One threshold handles every input to the outer function.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A map between metric spaces is uniformly continuous if for each ε &gt; 0 one δ &gt; 0 works everywhere: any two inputs less than δ apart have outputs less than ε apart.

**Problem.** Let gₙ and g take values in the domain of a uniformly continuous function h. If gₙ → g uniformly, then h ∘ gₙ → h ∘ g uniformly.

**How the definition helps.** One δ for h works at every pair gₙ(x), g(x), and uniform convergence puts all these pairs within δ once n is large (our own argument). A counterexample uses h(t) = t² and gₙ(x) = x + 1/n on ℝ. The squares differ from x² by 2x/n + 1/n², which is unbounded in x for each n.

**Paper or page:** [Uniformly Continuous Function Preserves Uniform Convergence](https://proofwiki.org/wiki/Uniformly_Continuous_Function_Preserves_Uniform_Convergence). It says: “Let gₙ converge to g uniformly on X as n → ∞. Let f: A₁ → A₂ be uniformly continuous on A₁.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convergence lets the evaluation point move

**Remember:** One error bound works even when the point moves.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence fₙ converges uniformly to f if each tolerance ε &gt; 0 has one cutoff index N such that, for all n ≥ N, \|fₙ(y) − f(y)\| &lt; ε at every point y.

**Problem.** Suppose continuous functions fₙ converge uniformly to f on a metric space. If xₙ → x in that space, then fₙ(xₙ) → f(x).

**How the definition helps.** Uniform convergence bounds \|fₙ(xₙ) − f(xₙ)\| by the same tolerance as at every other point, even though the point moves (our own argument). The uniform limit theorem makes f continuous, so f(xₙ) → f(x). For xⁿ on \[0, 1\] with xₙ = 1 − 1/n, the values (1 − 1/n)ⁿ tend to 1/e, while the limit function at 1 equals 1.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “What is uniform about this convergence is that the bound N(ε) is required to work for all x ∈ X (hence uniformly over x).”

**Paper or page:** [Uniformly Convergent Sequence Evaluated on Convergent Sequence](https://proofwiki.org/wiki/Uniformly_Convergent_Sequence_Evaluated_on_Convergent_Sequence). It says: “Let ⟨aₙ⟩ be a convergent sequence in K with limit a ∈ K.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convergence repairs Cauchy's sum theorem

**Remember:** Uniform convergence means that one N works for every point at once.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence of real functions on X converges uniformly to f if each ε &gt; 0 has one index N that works at every point: \|fₙ(x) − f(x)\| &lt; ε for all n ≥ N and all x ∈ X.

**Problem.** A uniform limit of continuous functions is continuous, as in the corrected form of Cauchy’s sum theorem.

**How the definition helps.** Uniform convergence gives one N for all points, so the ε/3 argument at x and at a nearby x + h can use one approximating function. Cauchy's proof failed because his N for x + h depended on h, and Seidel saw in 1847 that uniform convergence removes this dependence. With pointwise convergence the claim is false: fₙ(x) = xⁿ on \[0, 1\] has continuous terms and a discontinuous limit.

**nLab:** [Cauchy sum theorem](https://ncatlab.org/nlab/show/Cauchy+sum+theorem). It says: “Analysing this argument, Philipp von Seidel (first, and others afterwards) realised that it could be fixed if f converges to f∞ uniformly, so that n is independent of h.”

**Sources:**

- [Imre Lakatos, Mathematics, Science and Epistemology (Philosophical Papers vol. 2), Cambridge University Press (1978), chapter 3](https://doi.org/10.1017/CBO9780511624926)

### Uniform limits keep uniform continuity

**Remember:** One good approximant supplies a threshold for every pair.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence fₙ converges uniformly to f on X if each ε &gt; 0 has one index N with \|fₙ(x) − f(x)\| &lt; ε for all n ≥ N and all x ∈ X. So one fₙ approximates f equally well at every pair of points.

**Problem.** The uniform limit of uniformly continuous real functions on a metric space is uniformly continuous.

**How the definition helps.** Pick one fₙ within ε/3 of f everywhere, and a δ for which fₙ changes by less than ε/3 over distances below δ (our own argument). Then \|f(x) − f(y)\| &lt; ε whenever d(x, y) &lt; δ, by the triangle inequality. With only pointwise convergence, xⁿ on \[0, 1\] has a discontinuous limit.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “What is uniform about this convergence is that the bound N(ε) is required to work for all x ∈ X (hence uniformly over x).”

**Sources:** none listed. No primary source with a working link was found.

### Cesàro averaging gives cycle means

**Remember:** Average a complete cycle to remove the oscillation.

*Makes the theorem clean to state or prove.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Cesàro sum of a series is the limit of the averages of its first n partial sums.

**Problem.** If the partial sums repeat in a finite cycle, the Cesàro sum is the mean of that cycle.

**How the definition helps.** Each complete cycle of partial sums has the same mean, and the one incomplete cycle adds an error that vanishes after dividing by n (our own). For example, the partial sums of 1 − 1 + 1 − ⋯ alternate between 1 and 0, so the Cesàro sum is 1/2 (our own).

**Wikipedia:** [Cesàro summation](https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation). It says: “This sequence of partial sums does not converge, so the series G is divergent. However, G is Cesàro summable.”

**Sources:** none listed. No primary source with a working link was found.

### Absolute convergence saves Cauchy products

**Remember:** Absolute weights make the shifted partial sums safe to average.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences), 40B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Cauchy product of Σaₙ and Σbₙ, indexed from zero, has Nth partial sum ∑ₖ₌₀ᴺ aₖB<sub>N−k</sub>, the partial sums B<sub>m</sub> of Σbₙ weighted by the terms aₖ (our own). If Σaₙ converges absolutely, meaning ∑\|aₖ\| is finite, these weights have a small total size far out.

**Problem.** If two series converge and one converges absolutely, their Cauchy product converges to the product of their sums.

**How the definition helps.** Subtracting the sum B of Σbₙ, the product partial sum is A<sub>N</sub>·B plus ∑ₖ aₖ(B<sub>N−k</sub> − B), where A<sub>N</sub> is a partial sum of Σaₙ (our own). The differences B<sub>m</sub> − B are bounded and tend to zero, so late weights contribute at most a bound times their small absolute total, and each early weight multiplies a vanishing difference (our own). Squaring the alternating series with magnitudes 1/√(n + 1) gives product terms of size at least one, so absolute convergence of one series cannot be dropped (our own).

**Wikipedia:** [Cauchy product](https://en.wikipedia.org/wiki/Cauchy_product). It says: “if both sequences are conditionally convergent, the Cauchy product does not have to converge towards the product of the two series, as the following example shows”

**Sources:** none listed. No primary source with a working link was found.

### Finite partitions split upper limits

**Remember:** The largest tail bound still wins after a finite split.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The upper limit of a bounded real sequence is the limit of its tail suprema, where the tail from n holds all terms with index at least n.

**Problem.** Split the indices of a bounded real sequence into finitely many infinite sets. Its upper limit is the largest upper limit of the resulting subsequences.

**How the definition helps.** When the indices split into finitely many infinite sets, each tail of the whole sequence splits into tails of the subsequences, so its supremum is the largest of their suprema (our own). A maximum of finitely many convergent sequences tends to the maximum of their limits, which gives the claim (our own).

**Paper or page:** [Limit Superior in terms of Partitioning Subsequences](https://proofwiki.org/wiki/Limit_Superior_in_terms_of_Partitioning_Subsequences). It says: “\\ds \\limsup<sub>k \\mathop \\to \\infty</sub> x<sub>k</sub> = \\max<sub>1 \\le j \\le N</sub> \\limsup<sub>k \\mathop \\to \\infty</sub> x\_{\\map {\\phi<sub>j</sub>} k}”

**Sources:** none listed. No primary source with a working link was found.

### Ignoring errors that vanish makes sequence limits preserve arithmetic

**Remember:** Replace each convergent sequence with its constant representative.

*True by definition. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Call two bounded sequences equivalent if their termwise difference tends to zero; termwise sums and products of equivalent sequences stay equivalent (our own). A sequence converges to L exactly when it is equivalent to the constant sequence L (our own).

**Problem.** The termwise sum and product of convergent real sequences converge to the sum and product of their limits, respectively.

**How the definition helps.** Each convergent sequence can be replaced by its constant limit, so the termwise sum and product are equivalent to the constant sequences L + M and LM (our own). The classes respect products because replacing one factor changes the product by a vanishing error times a bounded factor, which still tends to zero (our own).

**Paper or page:** [Sum of Convergent Sequences in Topological Vector Space is Convergent](https://proofwiki.org/wiki/Sum_of_Convergent_Sequences_in_Topological_Vector_Space_is_Convergent). It says: “xₙ + yₙ → x + y”

**Sources:** none listed. No primary source with a working link was found.

### Positive increments justify Stolz averages

**Remember:** Positive steps make long slopes average the short slopes.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For real aₙ and bₙ with bₙ strictly increasing to infinity, the local slope at n is (aₙ₊₁ − aₙ)/(bₙ₊₁ − bₙ). Because every step bₙ₊₁ − bₙ is positive, the slope (a<sub>N</sub> − a<sub>m</sub>)/(b<sub>N</sub> − b<sub>m</sub>) over a long stretch is an average of the local slopes, weighted by these steps.

**Problem.** If the local slopes converge to a finite limit, then aₙ/bₙ converges to the same limit.

**How the definition helps.** A long-stretch slope is a weighted average of local slopes, so it approaches their limit, and a fixed initial part vanishes after division by bₙ (our own). Without increasing b the claim fails: our own example has aₙ = n, b(2k) = k and b(2k + 1) = (k + 1)² + 1. The local slopes tend to zero, yet a(2k)/b(2k) = 2 for every k ≥ 1.

**Wikipedia:** [Stolz–Cesàro theorem](https://en.wikipedia.org/wiki/Stolz%E2%80%93Ces%C3%A0ro_theorem). It says: “Since (bₙ) is strictly increasing, bₙ₊₁ − bₙ &gt; 0”

**Sources:** none listed. No primary source with a working link was found.

### Summable changes in the weights give Dirichlet’s convergence test

**Remember:** Move the differences onto the weights, where their magnitudes add.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Weights wₙ on a series have finite total variation if the sizes of their steps \|wₙ₊₁ − wₙ\| have a finite sum. Summation by parts moves the steps onto the weights, so they meet only partial sums of the series.

**Problem.** Suppose a series has bounded partial sums and its weights have finite total variation. The weighted series converges if either the weights tend to zero or the original series converges.

**How the definition helps.** Summation by parts writes a weighted partial sum as the last weight times the last partial sum, minus a sum of partial sums times weight steps (our own). Bounded partial sums and finite total variation make that second sum converge absolutely (our own). The first part tends to zero if the weights do, and converges if the series converges, because finite variation makes the weights Cauchy (our own).

**Wikipedia:** [Dirichlet's test](https://en.wikipedia.org/wiki/Dirichlet%27s_test). It says: “Since the magnitudes of the partial sums Bₙ are bounded by some M”

**Sources:**

- [P. G. L. Dirichlet, Démonstration d’un théorème d’Abel (1862), pp. 253–255](https://www.numdam.org/item/JMPA_1862_2_7__253_0/)

### Tail bounds let the ratio test work without a ratio limit

**Remember:** Bound every late ratio on one side of one.

*Makes the theorem clean to state or prove.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For ratios rₙ = \|aₙ₊₁\|/\|aₙ\|, the upper limit is the infimum of the tail suprema sup<sub>k≥n</sub> r<sub>k</sub>, and the lower limit is the supremum of the tail infima. Both may be infinite.

**Problem.** For eventually nonzero terms, form each ratio by dividing the next term’s magnitude by the current one. An upper limit below 1 guarantees absolute convergence, while a lower limit above 1 guarantees divergence.

**How the definition helps.** If the upper limit is below 1, some tail supremum is below a fixed q &lt; 1, so the later magnitudes are bounded by a convergent geometric series (our own). If the lower limit is above 1, some tail infimum exceeds 1, so the magnitudes eventually increase and cannot tend to zero (our own).

**Wikipedia:** [Ratio test](https://en.wikipedia.org/wiki/Ratio_test). It says: “cases where the limit L fails to exist, if limit superior and limit inferior are used.”

**Sources:** none listed. No primary source with a working link was found.

### Taking closed tails makes the set of subsequential limits closed

**Remember:** Close each tail, then keep only the points in every tail.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences), 26A03. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A cluster point of a sequence is a point in the closure of every tail, so every open interval around it contains terms with arbitrarily late indices.

**Problem.** The cluster points of a real sequence form a closed set. They are exactly the limits of its convergent subsequences.

**How the definition helps.** The set of cluster points is an intersection of closed sets, so it is closed (our own). The limit of a subsequence has terms of every tail in each interval around it, so it is a cluster point (our own). Conversely, choosing successive terms within 1/n of a cluster point, each later than the last, gives a subsequence converging to it (our own).

**nLab:** [limit point](https://ncatlab.org/nlab/show/limit+point). It says: “the closure of A is the set of all adherent points of A”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 3.7](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### Absolute convergence makes improper integrals independent of gapped cutoffs

**Remember:** A small absolute tail makes every piece of the tail small.

*Rules out counterexamples. Confidence: medium.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The improper integral of f on \[a, ∞) converges absolutely if the integrals of \|f\| from a to R have a finite limit. Then the integral of \|f\| over \[R, ∞) is small for every large R.

**Problem.** Suppose f is locally Riemann integrable and its improper integral on \[a, ∞) converges absolutely. Integrals over finite interval unions in \[a, ∞) approach this value uniformly as the initial segment they contain grows.

**How the definition helps.** A finite union of intervals that contains \[a, R\] misses only part of \[R, ∞), and the integral of \|f\| there bounds the error (our own). The same tail bound gives ordinary convergence by the Cauchy criterion (our own). The integral of sin(x)/x on \[1, ∞) converges but not absolutely, and adding only its positive half-waves far out makes such union integrals arbitrarily large (our own).

**Wikipedia:** [Improper integral](https://en.wikipedia.org/wiki/Improper_integral). It says: “unconditional convergence turns out to be equivalent to absolute convergence.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy tails make Dirichlet’s test a bound on one interval

**Remember:** Every far interval has a small integral, whatever its right end.

*True by definition.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** In the Cauchy form of improper convergence, the integral over \[u, v\] must become small, for all v &gt; u at once, as u grows.

**Problem.** Let f be continuous on \[a, ∞) with a bounded primitive F, meaning F′ = f. If g is continuously differentiable, nonnegative, nonincreasing, and tends to zero, then the improper integral of fg converges.

**How the definition helps.** Integrating by parts on \[u, v\], with M a bound for \|F\|, gives boundary terms of size at most M(g(u) + g(v)) (our own). Because g′ ≤ 0, the remaining integral of Fg′ has size at most M(g(u) − g(v)) (our own). The total bound 2Mg(u) does not depend on v and tends to zero, which is the Cauchy form (our own).

**Wikipedia:** [Dirichlet's test](https://en.wikipedia.org/wiki/Dirichlet%27s_test). It says: “An analogous statement for convergence of improper integrals is proven using integration by parts.”

**Sources:** none listed. No primary source with a working link was found.

### Improper integrals as suprema of partial areas make comparison immediate

**Remember:** If every partial area of f is smaller, so is the supremum.

*True by definition. Confidence: medium.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f≥0 be Riemann integrable on every closed bounded subinterval of an open interval I. Its improper integral over I is the supremum of its integrals over all such subintervals, allowing +∞.

**Problem.** Let 0 ≤ f ≤ g on I, both Riemann integrable on every closed bounded subinterval. If the improper integral of g is finite, then so is that of f, and it is no larger.

**How the definition helps.** In our own proof, each subinterval integral of f is at most the corresponding integral of g. Taking suprema gives the comparison, including finiteness when the supremum for g is finite. Nonnegativity makes the partial areas increase as the intervals expand, so their supremum agrees with the usual improper integral.

**Paper or page:** [Comparison Test for Improper Integral](https://proofwiki.org/wiki/Comparison_Test_for_Improper_Integral). It says: “If the improper integral of φ over I exists, then so does that of f.”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly small tails let limits pass through improper integrals

**Remember:** Control every far tail by the same bound.

*Rules out counterexamples. Confidence: medium.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A sequence of functions has uniformly small integral tails if each ε &gt; 0 has one cutoff U that works for every function: each integral over \[u, v\] with U ≤ u &lt; v has size below ε.

**Problem.** Suppose locally Riemann integrable functions on \[a, ∞) converge uniformly to f on every closed bounded subinterval and have uniformly small integral tails. Their improper integrals exist and converge to the improper integral of f.

**How the definition helps.** The tail condition gives each improper integral by the Cauchy test, and passes to f on each bounded interval (our own). So every integral, and that of f, is within ε of its integral up to one common cutoff, where uniform convergence finishes the proof (our own). Without tail control, fₙ = 1/n on \[0, n\] and 0 elsewhere converge uniformly to zero but have integral one (our own).

**Wikipedia:** [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). It says: “The sequence (fₙ) converges uniformly to the zero function”

**Sources:** none listed. No primary source with a working link was found.

### Alternating gaps make continued fractions converge

**Remember:** Successive gaps alternate and shrink as the denominators grow.

*Makes the theorem clean to state or prove.* MSC 40A15 (Convergence and divergence of continued fractions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a simple continued fraction with integer digit a₀ and digits aⱼ ≥ 1 after it, the kth convergent pₖ/qₖ is the first column of the product of the matrices with rows (aⱼ, 1) and (1, 0), for j = 0 to k. Each matrix has determinant −1, so pₖqₖ₋₁ − pₖ₋₁qₖ = (−1)ᵏ⁺¹.

**Problem.** Every infinite simple continued fraction with positive integer digits after the first has convergent finite truncations.

**How the definition helps.** Dividing the determinant identity by qₖqₖ₋₁ shows that consecutive convergents differ by (−1)ᵏ⁺¹/(qₖqₖ₋₁), with alternating sign (our own). Positive digits in qₖ = aₖqₖ₋₁ + qₖ₋₂ make the denominators grow without bound (our own). The convergents are then partial sums of an alternating series whose terms decrease to zero, so they converge.

**Paper or page:** [Difference between Adjacent Convergents of Simple Continued Fraction](https://proofwiki.org/wiki/Difference_between_Adjacent_Convergents_of_Simple_Continued_Fraction). It says: “Cₖ − Cₖ₋₁ = pₖ/qₖ − pₖ₋₁/qₖ₋₁ = (−1)ᵏ⁺¹/(qₖ qₖ₋₁)”

**Sources:** none listed. No primary source with a working link was found.

### Summable increments keep products nonzero

**Remember:** Summable increments give a finite logarithmic tail and hence a nonzero product.

*Rules out counterexamples.* MSC 40A20 (Convergence and divergence of infinite products). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real product of factors 1 + tₙ converges absolutely when ∑\|tₙ\| is finite, so the logarithms of its late factors have a finite sum.

**Problem.** If the absolute increments are summable and each factor is nonzero, the real partial products tend to a nonzero limit.

**How the definition helps.** Once \|tₙ\| &lt; 1/2, \|log(1 + tₙ)\| ≤ 2\|tₙ\|, so the logarithms of the tail factors have a convergent sum (our own). Exponentiating gives a positive tail limit, and the finite product of the earlier nonzero factors is nonzero (our own). The factors 1 − 1/n for n ≥ 2 tend to one, yet their product up to N is 1/N, which tends to zero (our own).

**Paper or page:** [Absolutely Convergent Product Does not Diverge to Zero](https://proofwiki.org/wiki/Absolutely_Convergent_Product_Does_not_Diverge_to_Zero). It says: “Then it is not divergent to 0.”

**Sources:** none listed. No primary source with a working link was found.

### Summable increments prevent spurious zeros

**Remember:** Summable absolute increments give a nonzero tail product.

*Rules out counterexamples.* MSC 40A20 (Convergence and divergence of infinite products), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let fₙ be continuous complex functions on a compact metric space such that ∑\|fₙ\| converges uniformly, so one cutoff makes the tail of magnitudes small at every point.

**Problem.** Under this condition, the product of the factors 1 + fₙ vanishes exactly where at least one factor vanishes.

**How the definition helps.** Uniform convergence makes \|fₙ\| &lt; 1/2 everywhere for all late n, and there \|log(1 + fₙ)\| ≤ 2\|fₙ\| (our own). The logarithms then sum uniformly, so the tail product is an exponential and never zero, leaving only finitely many factors that can vanish (our own). Constant factors exp(−1/n) are never zero, yet their product is zero.

**Paper or page:** [Uniform Absolute Convergence of Infinite Product of Complex Functions](https://proofwiki.org/wiki/Uniform_Absolute_Convergence_of_Infinite_Product_of_Complex_Functions). It says: “there exists n₀ ∈ ℕ such that ∏ from n = n₀ to ∞ (1 + fₙ(x)) has no zeroes.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric errors make Aitken exact

**Remember:** Fit a geometric error and keep only the constant.

*True by definition.* MSC 40A25 (Approximation to limiting values (summation of series, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Aitken's step treats three successive values y₀, y₁, y₂ as a limit plus a geometric error, yⱼ = L + Arʲ for j = 0, 1, 2 with 0 &lt; \|r\| &lt; 1. When this fit has a unique constant L, the step returns L.

**Problem.** For a sequence with exactly that geometric error and nonzero amplitude, one Aitken step returns the true limit.

**How the definition helps.** In our own calculation the exact model fits, and its nonzero amplitude makes the two successive increments u and v nonzero. Their ratio v/u uniquely determines r. Solving for L gives y₀−u²/(v−u), the Aitken value and the limit of the model sequence.

**Wikipedia:** [Aitken's delta-squared process](https://en.wikipedia.org/wiki/Aitken%27s_delta-squared_process). It says: “aₙ = xₙ − (Δxₙ)²/Δ²xₙ”

**Sources:** none listed. No primary source with a working link was found.

### Regular, linear, stable summation methods must give geometric series the value c/(1−r)

**Remember:** Shift the series, scale it, and its value is forced.

*True by definition.* MSC 40A25 (Approximation to limiting values (summation of series, etc.)), 40D05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A summation method S is linear if it is a linear functional on a vector space of term sequences. It is stable if its domain contains each tail and S(a) = a₀ + S(tail of a) for every sequence a in it.

**Problem.** Every stable linear method that sums the geometric series Σ c rᵏ with r ≠ 1 must give c/(1 − r). In particular, Grandi's series 1 − 1 + 1 − ⋯ gets the value 1/2 whenever it is summed.

**How the definition helps.** In our own calculation, deleting the first term of the geometric series multiplies its term sequence by r. Stability and linearity therefore give G=c+rG for its assigned value G. Solving yields G=c/(1−r), which equals ½ when c=1 and r=−1.

**Wikipedia:** [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “Taking regularity, linearity and stability as axioms, it is possible to sum many divergent series by elementary algebraic manipulations. This partly explains why many different summation methods give the same answer for certain series.”

**Sources:** none listed. No primary source with a working link was found.

### Stable linear summation methods cannot give 1+2+3+⋯ a value

**Remember:** Prepending zero preserves value, and subtracting sequences subtracts their values.

*True by definition.* MSC 40A25 (Approximation to limiting values (summation of series, etc.)), 40D05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A linear summation method is a linear functional S on a vector space of term sequences. Stability requires (c,a₀,a₁,…) to belong to the domain with value c+S(a) for every domain sequence a and scalar c.

**Problem.** No stable linear summation method gives 1 + 2 + 3 + ⋯ a finite value. So the value −1/12 must come from a method that is not stable or not linear.

**How the definition helps.** In our own proof, suppose S assigns a finite value to (1,2,3,…). Subtracting its zero-prefixed copy gives the constant sequence (1,1,…) value zero by stability and linearity. Prepending one to this constant sequence leaves it unchanged, yet stability raises its value by one.

**Wikipedia:** [1 + 2 + 3 + 4 + ⋯](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF), [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “Most of the more elementary definitions of the sum of a divergent series are stable and linear, and any method that is both stable and linear cannot sum 1 + 2 + 3 + ⋯ to a finite value”

**Sources:**

- [Mario A. Natiello and Hernán Gustavo Solari, On the removal of infinities from divergent series, Philosophy of Mathematics Education Journal 29 (2015) 1–11](https://hdl.handle.net/11336/46148)

### A uniform error bound lets two limits change order

**Remember:** A bound valid near x stays valid when the input tends to x.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Real functions fₙ on D converge uniformly to f if each ε &gt; 0 has one N with \|fₙ(t) − f(t)\| &lt; ε for all n ≥ N and all t ∈ D. Such a bound, true at every t, survives taking limits as t tends to a point.

**Problem.** Suppose real functions fₙ converge uniformly to f on D, and each fₙ has a finite limit at the same accumulation point x of D. Then f has a limit at x, and it equals the limit of the individual limits.

**How the definition helps.** The uniform bound on \|fₙ − fₘ\| survives letting t → x, so the individual limits form a Cauchy sequence and converge by completeness of ℝ (our own argument). Approximating f by one late fₙ then shows that f has the same limit at x (our own). For xⁿ on (0, 1), the two orders of limits at 1 give 1 and 0.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “What is uniform about this convergence is that the bound N(ε) is required to work for all x ∈ X (hence uniformly over x).”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 7.11](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### Bounded variation keeps Abel multipliers from enlarging small tails

**Remember:** Small partial sums stay small under weights with bounded total change.

*Makes the theorem clean to state or prove.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 30B10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Weights wₙ(x) on X have uniformly bounded variation if one finite constant bounds the total variation ∑ₙ \|wₙ₊₁(x) − wₙ(x)\| for every x ∈ X.

**Problem.** A uniformly convergent series stays uniformly convergent under termwise multiplication by uniformly bounded weights with uniformly bounded total variation. In particular, if ∑ aₙ converges, then ∑ aₙxⁿ converges uniformly on \[0, 1\].

**How the definition helps.** Summation by parts rewrites a tail of the weighted series through partial sums of the tail and weight differences, so the total variation bounds all the differences at once. In our own proof, the largest tail partial sum is multiplied by at most the weight bound plus the variation bound, and uniform convergence makes those partial sums uniformly small. For the weights xⁿ on \[0, 1\], both the weights and their total variation are at most one.

**Paper or page:** [Abel's Test for Uniform Convergence](https://proofwiki.org/wiki/Abel's_Test_for_Uniform_Convergence). It says: “∑ \|aₙ(z) − aₙ₊₁(z)\| is convergent with a sum which is bounded in K”

**Sources:** none listed. No primary source with a working link was found.

### Compact tests capture local uniform convergence on open intervals

**Remember:** A finite cover turns local bounds into one compact bound.

*Makes the theorem clean to state or prove.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Local uniform convergence means that every point has a neighborhood where convergence is uniform. Compact convergence means uniform convergence on each compact subset, which on the real line means a closed and bounded subset.

**Problem.** On an open interval, local uniform convergence is equivalent to uniform convergence on every compact subset.

**How the definition helps.** Compactness reduces the local bounds to finitely many, so the largest cutoff index works throughout the compact set. For the reverse implication, our own proof places each point inside a closed subinterval contained in the open interval. Uniform convergence on that closed subinterval gives the required neighborhood.

**Paper or page:** [Local Uniform Convergence Implies Compact Convergence](https://proofwiki.org/wiki/Local_Uniform_Convergence_Implies_Compact_Convergence). It says: “Let fₙ converge locally uniformly to f : X → M. Then fₙ converges compactly to f.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness gives Dini’s theorem one common index

**Remember:** For nested open sets, a finite cover needs only the largest set.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A space is compact if every cover by open sets has a finite subcover. For a growing chain of open sets that covers the space, one set of the chain then covers everything.

**Problem.** Suppose continuous real functions on a compact space converge pointwise to a continuous function. If the sequence is monotone at every point, convergence is uniform.

**How the definition helps.** By continuity, the sets where the error is below a fixed tolerance at step n are open, and they cover the space (our own). Monotonicity makes these sets grow with n, so compactness gives one set, and one common index, covering every point. Our own counterexample is xⁿ on \[0, 1), which is not compact: the limit is zero but the supremum of the error stays one.

**Wikipedia:** [Dini's theorem](https://en.wikipedia.org/wiki/Dini%27s_theorem). It says: “The continuity of the limit function cannot be inferred from the other hypothesis”

**Paper or page:** [Dini's Theorem](https://proofwiki.org/wiki/Dini's_Theorem). It says: “Let fₙ converge pointwise to a continuous function f.”

**Sources:** none listed. No primary source with a working link was found.

### Equicontinuity upgrades convergence on a dense set to uniform convergence

**Remember:** One distance threshold reduces uniform convergence to finitely many test points.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 54C35. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A family of real functions on a metric space X is uniformly equicontinuous if each ε &gt; 0 has one δ &gt; 0 that works for every member h: \|h(x) − h(y)\| &lt; ε whenever d(x, y) &lt; δ.

**Problem.** On a compact metric space, a uniformly equicontinuous sequence of real functions that converges pointwise on a dense subset converges uniformly everywhere.

**How the definition helps.** One shared δ lets closeness at a test point control all the functions within δ of it, and compactness gives finitely many test points from the dense set within δ of everything. Convergence at those finitely many points makes late functions close there, and the triangle inequality spreads this everywhere (our own). The sequence is therefore uniformly Cauchy and converges uniformly by completeness of ℝ (our own).

**nLab:** [equicontinuous family of functions](https://ncatlab.org/nlab/show/equicontinuous+family+of+functions). It says: “Nevertheless, given a family of functions, we may have that f(x) is arbitrarily close to f(y) for every function f in the family at once whenever x is sufficiently close to y.”

**Wikipedia:** [Arzelà–Ascoli theorem](https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem). It says: “There exists an integer K such that each open interval Uⱼ, 1 ≤ j ≤ J, contains a rational xₖ with 1 ≤ k ≤ K.”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes weights give uniform limits an integral bound

**Remember:** The total increase of α controls the whole integral error.

*Makes the theorem clean to state or prove.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the integrand on each subinterval by the increase of a nondecreasing α across it, so the weights are nonnegative and add to α(b) − α(a). A bounded function is integrable when the supremum of its lower sums, using infima, equals the infimum of its upper sums, using suprema.

**Problem.** For fixed nondecreasing α on \[a, b\], a uniform limit of functions Riemann–Stieltjes integrable with respect to α remains integrable. Its integral is the limit of their integrals.

**How the definition helps.** The nonnegative weights add to α(b) − α(a), so a uniform error δ changes every upper or lower sum by at most δ(α(b) − α(a)) (our own). The gap between the upper and lower integrals of the limit therefore vanishes, and the same bound gives convergence of the integrals (our own).

**Paper or page:** [Riemann-Stieltjes Integral of Constant Integrand](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_of_Constant_Integrand). It says: “∫ from a to b of f dα = cα(b) − cα(a)”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 7.16](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### Summable norms give uniform convergence

**Remember:** Sum the worst bounds first and every tail is small everywhere.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The supremum norm of a bounded function is the least upper bound of its magnitude over the domain. A series converges normally on a set if the sum of these norms is finite.

**Problem.** A normally convergent series of real functions converges uniformly.

**How the definition helps.** The sum of the supremum norms beyond N bounds every tail at every point at once, and it tends to zero, so the Cauchy criterion gives uniform convergence (our own). Pointwise convergence is not enough: on \[0, 1\] the continuous functions (1 − x)xⁿ, n ≥ 0, sum to 1 below 1 and to 0 at 1 (our own). That discontinuous sum rules out uniform convergence (our own).

**Wikipedia:** [Normal convergence](https://en.wikipedia.org/wiki/Normal_convergence). It says: “if the series of uniform norms of the terms of the series converges”

**Paper or page:** [Weierstrass M-Test](https://proofwiki.org/wiki/Weierstrass_M-Test). It says: “Then ∑ from i = 1 to ∞ fᵢ converges uniformly on D.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convergence on a dense set extends across the domain

**Remember:** Compare two functions, not a limit; closed bounds survive taking limits.

*True by definition.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A sequence of functions is uniformly Cauchy if, for each ε &gt; 0, there is a cutoff after which any two functions satisfy \|fₙ(x) − fₘ(x)\| ≤ ε at every x. For continuous functions, this closed inequality passes from a dense set to every point, because each point is a limit of points of that set.

**Problem.** If continuous real functions on a metric space converge uniformly on a dense subset, they converge uniformly on the whole space.

**How the definition helps.** Continuity extends the uniform Cauchy bound from the dense set to every point (our own). Completeness of ℝ then turns the uniform Cauchy bound into uniform convergence. The criterion needs no limit function outside the dense set.

**Paper or page:** [Uniformly Convergent Sequence on Dense Subset](https://proofwiki.org/wiki/Uniformly_Convergent_Sequence_on_Dense_Subset). It says: “Let V be a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly convergent sequences of continuous functions are equicontinuous

**Remember:** One neighborhood serves the whole family at once.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 54C35. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A family of functions is equicontinuous at x if one neighborhood of x works for all of them. For each ε &gt; 0, some neighborhood U of x has d(f(y), f(x)) &lt; ε for every y in U and every f in the family.

**Problem.** A uniformly convergent sequence of continuous functions between metric spaces is equicontinuous at every point.

**How the definition helps.** Uniform convergence puts every late function within ε/3 of the continuous limit everywhere, so the limit's neighborhood serves them all (our own). The finitely many early functions are each continuous, so intersecting their neighborhoods handles them. Pointwise convergence is not enough: xⁿ on \[0, 1\] is not equicontinuous at 1.

**nLab:** [equicontinuous family of functions](https://ncatlab.org/nlab/show/equicontinuous+family+of+functions). It says: “Nevertheless, given a family of functions, we may have that f(x) is arbitrarily close to f(y) for every function f in the family at once whenever x is sufficiently close to y.”

**Paper or page:** [Uniformly Convergent Sequence of Continuous Functions is Pointwise Equicontinuous](https://proofwiki.org/wiki/Uniformly_Convergent_Sequence_of_Continuous_Functions_is_Pointwise_Equicontinuous). It says: “Then ⟨fₙ⟩ is pointwise equicontinuous.”

**Sources:** none listed. No primary source with a working link was found.

### Positive rows preserve sequence limits

**Remember:** An average of numbers near L stays near L.

*Rules out counterexamples.* MSC 40C05 (Matrix methods for summability). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A nonnegative averaging matrix turns a bounded sequence x into the averages yₙ = ∑ₖ aₙₖxₖ. The weights aₙₖ are nonnegative and sum to 1 in each row, so each output is a true weighted average of the inputs.

**Problem.** Such a matrix preserves limits of convergent sequences exactly when every fixed column tends to zero.

**How the definition helps.** Each output differs from L by at most its weight on early terms times a bound, plus the largest late error (our own). Vanishing columns make the early weight tend to zero, and a sequence that is 1 at one index and 0 elsewhere shows necessity. Without positivity the result fails: xₙ + n(xₙ − xₙ₊₁) has unit row sums and vanishing columns but does not preserve the limit of (−1)ⁿ/n.

**Wikipedia:** [Silverman–Toeplitz theorem](https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem). It says: “A regular matrix summability method is a linear sequence transformation that preserves the limits of convergent sequences.”

**Sources:** none listed. No primary source with a working link was found.

### Cesàro sums give Abel sums

**Remember:** Abel averages the Cesàro means and forgets every fixed start.

*True by definition.* MSC 40D25 (Inclusion and equivalence theorems in summability theory), 40G05, 40G10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let cₙ be the mean of the partial sums s₀, …, sₙ. For 0 &lt; r &lt; 1, give cₙ the Abel weight (n + 1)rⁿ(1 − r)². These weights are positive and sum to one, and each fixed weight tends to zero as r → 1.

**Problem.** If the Cesàro means cₙ tend to L, the series has Abel sum L, the limit of ∑aₙrⁿ as r increases to one.

**How the definition helps.** Summation by parts twice shows that ∑aₙrⁿ equals ∑(n + 1)rⁿ(1 − r)²cₙ (our own). An average with these weights of a sequence tending to L tends to L, because each fixed prefix loses its weight. Bounded cₙ give sₙ = O(n), so the damped series converges absolutely for r &lt; 1.

**Wikipedia:** [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “Abel summation is interesting in part because it is consistent with but more powerful than Cesàro summation”

**Sources:** none listed. No primary source with a working link was found.

### Small terms let Abel recover convergence

**Remember:** Terms smaller than 1/n barely feel the damping.

*Rules out counterexamples.* MSC 40E05 (Tauberian theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Abel sum of ∑aₙ is the limit of ∑aₙrⁿ as r increases to one. At r = 1 − 1/n, the damping removes at most the fraction k/n of each term aₖ with k ≤ n. This loss is small when k aₖ → 0.

**Problem.** A series with an Abel sum and n a(n) tending to zero converges ordinarily to its Abel sum.

**How the definition helps.** At r = 1 − 1/n, the gap between sₙ and the damped sum is at most the mean of \|k aₖ\| for k ≤ n plus the largest \|k aₖ\| for k &gt; n (our own). Both tend to zero, so sₙ tends to the Abel sum. Without the condition, 1 − 1 + 1 − ⋯ has Abel sum ½ but diverges (our own).

**Wikipedia:** [Abelian and Tauberian theorems](https://en.wikipedia.org/wiki/Abelian_and_Tauberian_theorems). It says: “if the Abel sum of a series exists and the coefficients are sufficiently small (o(1/n)) then the series converges to the Abel sum.”

**Sources:**

- [Alfred Tauber, Ein Satz aus der Theorie der unendlichen Reihen (1897)](https://doi.org/10.1007/BF01696278)

### Averaging the partial sums recovers every continuous function (Fejér)

**Remember:** Average the partial sums and the kernel turns positive.

*Makes the theorem clean to state or prove.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods), 42A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The nth Cesàro mean σₙ of a series is the average (s₀ + ⋯ + sₙ)/(n + 1) of its first n + 1 partial sums. For a Fourier series, σₙ is convolution of f with the Fejér kernel, which is nonnegative with mean one (our own).

**Problem.** Fejér's theorem: the Cesàro means of the Fourier series of a continuous 2π-periodic function converge to it uniformly.

**How the definition helps.** A nonnegative kernel with mean one makes σₙ(f, x) an average of values of f, and the kernel's mass concentrates near zero (our own). Uniform continuity of f then gives uniform convergence. The plain partial sums lack this positivity, and some continuous functions have Fourier series that diverge at a point.

**Wikipedia:** [Fejér's theorem](https://en.wikipedia.org/wiki/Fej%C3%A9r%27s_theorem), [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series). It says: “Sadly however, the theorem does not work in a general sense when we replace the sequence σₙ(f,x) with sₙ(f,x). This is because there exist functions whose Fourier series fails to converge at some point.”

**Sources:**

- [L. Fejér, Untersuchungen über Fouriersche Reihen, Math. Ann. 58 (1904), 51–69, doi:10.1007/BF01447779](https://doi.org/10.1007/BF01447779)

### Euler differences truncate polynomial sums

**Remember:** Differences flatten a polynomial to zero, so the sum stops.

*True by definition.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Euler sum of ∑(−1)ⁿaₙ is ∑(−1)ⁿ(Δⁿa)₀/2ⁿ⁺¹, built from forward differences (Δa)ₖ = aₖ₊₁ − aₖ. Each difference lowers the degree of a polynomial sequence by one, so for degree d every difference after the dth is zero.

**Problem.** The Euler sum of an alternating polynomial sequence of degree d uses only the first d + 1 differences.

**How the definition helps.** The differences numbered above d vanish, so the Euler sum is a finite sum of d + 1 terms (our own). The ordinary partial sums can oscillate, even for the constant sequence 1 (our own). The Euler transformation theorem shows that the Euler sum equals the ordinary sum when the series converges (our own).

**Wikipedia:** [Euler summation](https://en.wikipedia.org/wiki/Euler_summation). It says: “the inner sum would be zero for i &gt; k, so in this case Euler summation reduces an infinite series to a finite sum.”

**Sources:** none listed. No primary source with a working link was found.

### Abel sums multiply under Cauchy products

**Remember:** Damp both series, multiply freely, then let r reach one.

*True by definition. Confidence: medium.* MSC 40G10 (Abel, Borel and power series methods), 40B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A series ∑aₙ has Abel sum L if its damped series ∑aₙrⁿ converges for 0 ≤ r &lt; 1 and tends to L as r increases to one. Damping turns the Cauchy product, with nth term ∑ₖ₌₀ⁿ aₖbₙ₋ₖ, into a product of two absolutely convergent power series (our own).

**Problem.** The Cauchy product of two Abel-summable series is Abel-summable to the product of their Abel sums.

**How the definition helps.** For r &lt; 1 the damped series converge absolutely, so the damped Cauchy product equals their product (our own). Letting r increase to one multiplies the two limits (our own). Abel's limit theorem shows that these Abel sums equal the ordinary sums whenever those exist (our own).

**Paper or page:** [Abel's Limit Theorem](https://proofwiki.org/wiki/Abel's_Limit_Theorem). It says: “limₓ→₁⁻ (∑ from k = 0 to ∞ aₖxᵏ) = ∑ from k = 0 to ∞ aₖ”

**Sources:** none listed. No primary source with a working link was found.

### Borel summation handles alternating factorials

**Remember:** Divide out the factorials, sum, then multiply them back by integrating.

*Makes the theorem clean to state or prove.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Borel transform of ∑aₙ is B(t) = ∑aₙtⁿ/n!, which must converge near zero and continue analytically along the positive real axis. The Borel sum is ∫₀∞ exp(−t)B(t) dt when it converges; this integral restores each n!, since ∫₀∞ exp(−t)tⁿ dt = n!.

**Problem.** The alternating factorial series starting with 0! has Borel sum ∫₀∞ exp(−t)/(1+t) dt.

**How the definition helps.** Dividing (−1)ⁿn! by n! leaves the geometric series ∑(−t)ⁿ = 1/(1 + t), which continues to all t ≥ 0 (our own). The integral of exp(−t)/(1 + t) converges by comparison with exp(−t) (our own).

**Wikipedia:** [Borel summation](https://en.wikipedia.org/wiki/Borel_summation). It says: “so the original divergent series is Borel summable for all such z.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric weights make Abel summation regular

**Remember:** Abel weights leave every fixed initial block behind.

*Makes the theorem clean to state or prove.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Abel sum is the limit of ∑aₙrⁿ as r increases to one, where 0 &lt; r &lt; 1. Summation by parts writes this as ∑(1 − r)rⁿsₙ, an average of the partial sums sₙ with positive weights summing to one (our own). Each fixed weight tends to zero (our own).

**Problem.** If a real or complex series converges ordinarily, it has the same Abel sum.

**How the definition helps.** An average that forgets every fixed initial block of a convergent sequence tends to its limit (our own). Given ε, the partial sums after some index N lie within ε of the ordinary sum, and the first N weights tend to zero (our own).

**Wikipedia:** [Abel's theorem](https://en.wikipedia.org/wiki/Abel%27s_theorem). It says: “Then substituting aₖ = sₖ − sₖ₋₁ and performing a simple manipulation of the series (summation by parts) results in”

**Sources:** none listed. No primary source with a working link was found.

### Absolute summability forces countable support

**Remember:** A bounded total allows only finitely many terms above each size.

*True by definition.* MSC 40J05 (Summability in abstract structures), 40A05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A family (xᵢ) is absolutely summable if the sums of \|xᵢ\| over finite sets of indices have a common upper bound M. Then, for each ε &gt; 0, at most M/ε indices have \|xᵢ\| ≥ ε (our own).

**Problem.** An absolutely summable family of real numbers has at most countably many nonzero terms.

**How the definition helps.** The nonzero terms are the union over n of the finite sets where \|xᵢ\| ≥ 1/n, so they are countable (our own). The definition needs no ordering of the indices.

**Wikipedia:** [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “the sum of f over X is absolutely convergent, then f takes non-zero values on a set that is at most countable”

**Sources:** none listed. No primary source with a working link was found.

### Unconditional convergence survives taking subseries

**Remember:** Small finite blocks far out stay small in any subseries.

*True by definition.* MSC 40J05 (Summability in abstract structures), 40A05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A series ∑xₙ in a normed space satisfies the unordered Cauchy condition if, for each ε &gt; 0, some finite index set F has this property. Every finite sum of terms with indices outside F has norm below ε.

**Problem.** In a complete normed space, every subseries of an unconditionally convergent series converges under every rearrangement.

**How the definition helps.** A finite sum from a subseries with indices outside F is also such a sum for the original series, so every subseries satisfies the condition (our own). In a complete space the condition is equivalent to convergence under every rearrangement (our own).

**Paper or page:** [Infinite Subseries of Unconditionally Convergent Series is Unconditionally Convergent](https://proofwiki.org/wiki/Infinite_Subseries_of_Unconditionally_Convergent_Series_is_Unconditionally_Convergent). It says: “∑ over n ∈ A xₙ = ∑ from n = 1 to ∞ χ<sub>A</sub>(n)xₙ is unconditionally convergent”

**Sources:** none listed. No primary source with a working link was found.

### Unordered sums over index sets split over disjoint pieces

**Remember:** Sums along finite subsets split as cleanly as the index set.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences), 54A20, 54H15. arXiv math.CA, math.GN. Level 3: graduate.

**Definition.** A generalized sum over an index set K is the limit of the sums over nonempty finite subsets of K, directed by inclusion. A finite subset of a disjoint union I∪J is a finite subset of I together with one of J, so its sum splits in two.

**Problem.** Let G be a Hausdorff commutative topological semigroup, and let disjoint index sets I and J have generalized sums in G. Take both sets nonempty unless G has an additive identity. The generalized sum over I∪J then equals the sum of those two limits.

**How the definition helps.** Take finite subsets of I∪J that contain prescribed nonempty finite subsets of I and of J; both parts then lie in chosen neighborhoods of their limits (our own). Continuity of addition puts the total near the sum of the limits, and the Hausdorff property makes the limit unique. When I or J is empty, its part contributes the additive identity.

**Paper or page:** [Generalized Sum over Union of Disjoint Index Sets](https://proofwiki.org/wiki/Generalized_Sum_over_Union_of_Disjoint_Index_Sets). It says: “the generalized sum ∑ₖ gₖ converges and: ∑ₖ gₖ = (∑ᵢ gᵢ) + (∑ⱼ gⱼ)”

**Sources:**

- [ProofWiki, Generalized Sum over Union of Disjoint Index Sets](https://proofwiki.org/wiki/Generalized_Sum_over_Union_of_Disjoint_Index_Sets)

### Regular Nørlund means forget prefixes

**Remember:** A regular Nørlund average eventually forgets each fixed partial sum.

*Rules out counterexamples.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods). arXiv math.CA. Level 3: graduate.

**Definition.** Given positive weights p₀, p₁, … with totals Pₙ = p₀ + ⋯ + pₙ, the nth Nørlund mean is (pₙs₀ + pₙ₋₁s₁ + ⋯ + p₀sₙ)/Pₙ. The oldest partial sum s₀ gets the share pₙ/Pₙ.

**Problem.** The Nørlund means preserve every ordinary limit exactly when pₙ/Pₙ tends to zero.

**How the definition helps.** The sequence 1, 0, 0, … has mean pₙ/Pₙ, so the condition is necessary. Conversely, a fixed sₖ has share pₙ₋ₖ/Pₙ ≤ pₙ₋ₖ/Pₙ₋ₖ, which tends to zero, and a positive average that forgets each fixed term preserves limits (our own). Doubling weights pₙ = 2ⁿ fail, since s₀ keeps a share near ½.

**Wikipedia:** [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “The Nørlund mean is regular, linear, and stable.”

**Paper or page:** [Approximation by Nörlund means with respect to Vilenkin system in Lebesgue spaces](https://arxiv.org/abs/2312.00810). It says: “Nörlund means generated by non-decreasing sequence {qₖ: k ∈ ℕ} satisfying regularity condition”

**Sources:** none listed. No primary source with a working link was found.

### Borel agreement needs endpoint decay

**Remember:** The two Borel sums differ only by the endpoint term.

*Rules out counterexamples.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 3: graduate.

**Definition.** Assume B(t) = ∑aₙtⁿ/n! is entire. The integral Borel sum is ∫₀∞ exp(−t)B(t) dt, and the weak Borel sum is the limit as T → ∞ of exp(−T)∑sₙTⁿ/n!, with sₙ the partial sums. At each T the weak average equals ∫₀ᵀ exp(−t)B(t) dt plus exp(−T)B(T) (our own).

**Problem.** Assume the integral Borel sum exists. The weak Borel sum exists exactly when exp(−t)B(t) tends to zero, and then both sums agree.

**How the definition helps.** Since the integral converges, the weak sum exists exactly when exp(−T)B(T) has a limit (our own). That limit must be zero, because exp(−t)B(t) has a convergent improper integral. B(t) = exp(t)sin(t²) shows that the endpoint term can oscillate while the integral converges.

**Wikipedia:** [Borel summation](https://en.wikipedia.org/wiki/Borel_summation). It says: “Any series A(z) that is weak Borel summable at z ∈ ℂ is also Borel summable at z.”

**Sources:** none listed. No primary source with a working link was found.

### Poisson averages preserve ordinary sums

**Remember:** Poisson weights eventually leave every fixed finite set of indices.

*True by definition.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 3: graduate.

**Definition.** Weak Borel summation averages the partial sums sₙ with Poisson weights exp(−t)tⁿ/n!, which are nonnegative and sum to one, then lets t tend to infinity. Each fixed weight tends to zero as t grows.

**Problem.** Weak Borel summation gives an ordinarily convergent series its ordinary sum.

**How the definition helps.** An average whose weights sum to one and leave every fixed index behind preserves limits (our own). The finitely many early errors get vanishing weight, and every later error is below any chosen ε.

**Wikipedia:** [Borel summation](https://en.wikipedia.org/wiki/Borel_summation). It says: “A weak form of Borel's summation method defines the Borel sum of A to be”

**Sources:** none listed. No primary source with a working link was found.

### Banach limits average periodic sequences

**Remember:** Shifts are invisible, so every phase of the period counts equally.

*True by definition.* MSC 40H05 (Functional analytic methods in summability). arXiv math.CA. Level 3: graduate.

**Definition.** A Banach limit is a linear functional on bounded real sequences that extends the ordinary limit and is unchanged when the sequence is shifted by one place. It is also positive: nonnegative sequences get nonnegative values.

**Problem.** Every Banach limit of a periodic sequence equals the mean over one period.

**How the definition helps.** Shift invariance gives all p shifts of a sequence with period p the same value (our own). Their average is the constant sequence equal to the period mean, so linearity and the ordinary limit finish the proof (our own). That Banach limits exist is a separate theorem, from the Hahn–Banach theorem (our own).

**Wikipedia:** [Banach limit](https://en.wikipedia.org/wiki/Banach_limit). It says: “In other words, a Banach limit extends the usual limits, is linear, shift-invariant and positive.”

**Sources:** none listed. No primary source with a working link was found.

### Moving averages detect almost convergence

**Remember:** A long block must see the same mean wherever it starts.

*Makes the theorem clean to state or prove.* MSC 40H05 (Functional analytic methods in summability), 40G05. arXiv math.CA. Level 3: graduate.

**Definition.** A bounded real sequence is almost convergent to L if every Banach limit gives it the value L. A Banach limit is a positive linear functional on bounded real sequences that extends the ordinary limit and ignores shifts.

**Problem.** A bounded real sequence is almost convergent to L exactly when its long block averages approach L uniformly over all starting positions.

**How the definition helps.** Banach limits ignore shifts, so they give a sequence the same value as its averages over blocks of length p (our own). Positivity bounds that value by the largest distance of those averages from L, so uniform block averages near L force the value L. Lorentz's theorem supplies the converse.

**Wikipedia:** [Almost convergent sequence](https://en.wikipedia.org/wiki/Almost_convergent_sequence). It says: “Lorentz proved that \\((x<sub>n</sub>)\\) is almost convergent if and only if \\(\\lim\\limits<sub>p\\to\\infty</sub> \\frac{x<sub>n</sub>+\\ldots+x<sub>n+p-1</sub>}p=L\\) uniformly in \\(n\\).”

**Sources:**

- [G. G. Lorentz, A contribution to the theory of divergent sequences (1948).](https://doi.org/10.1007/bf02393648)

### Ideal convergence frees Olivier's theorem from monotonicity

**Remember:** Where n aₙ is large, the harmonic sum is small.

*True by definition.* MSC 40A35 (Ideal and statistical convergence), 26D15. arXiv math.CA. Level 4: research.

**Definition.** An ideal on ℕ is a family of index sets that contains every finite set but not ℕ, and is closed under subsets and finite unions. A sequence converges to L along an ideal I if each exceptional set {n : \|xₙ − L\| ≥ ε} lies in I. The summable ideal holds the sets A with finite harmonic sum ∑ over n ∈ A of 1/n.

**Problem.** For an ideal I on ℕ, n aₙ → 0 along I for every convergent series ∑aₙ of positive terms exactly when I contains the summable ideal. This removes the monotonicity hypothesis of Olivier's theorem.

**How the definition helps.** On the set where n aₙ ≥ ε we have 1/n ≤ aₙ/ε, so its harmonic sum is at most (∑aₙ)/ε (our own). Conversely, for A with finite harmonic sum, put aₙ = 1/n on A and aₙ = 1/(2n²) elsewhere. Then {n : n aₙ ≥ 1} = A, so convergence along I forces A ∈ I.

**Paper or page:** [The ideal test for the divergence of a series](https://arxiv.org/abs/2307.01506v1), [The ideal test for the divergence of a series](https://arxiv.org/abs/2307.01506v1). It says: “we either drop the monotonicity assumption completely or we relax it to the monotonicity on a large set of indices. In both cases, the convergence of (n aₙ) is replaced by ideal convergence.”

**Sources:**

- [Rafał Filipów, Adam Kwela, Jacek Tryba, The ideal test for the divergence of a series, Rev. R. Acad. Cienc. Exactas Fís. Nat. Ser. A Mat. RACSAM 117 (2023), no. 3, Paper No. 98, arXiv:2307.01506](https://doi.org/10.1007/s13398-023-01430-w)

### Keeping original indices makes subsequences of ideal-convergent sequences converge

**Remember:** Keep the original indices when restricting an ideal.

*True by definition. Confidence: low.* MSC 40A35 (Ideal and statistical convergence), 54A20. arXiv math.GN. Level 4: research.

**Definition.** A sequence converges to x along an ideal I on ℕ if, for each neighborhood U of x, the exceptional set {n : xₙ ∉ U} lies in I. For a set M ∉ I, the restricted ideal on M consists of the subsets of M that lie in I. The subsequence on M keeps its original indices, so its exceptional sets are the original ones intersected with M.

**Problem.** Let a sequence converge to x along an ideal I, and let M be a set of indices not in I. Then the subsequence on M, with its original indices, converges to x along the restricted ideal on M.

**How the definition helps.** Each exceptional set of the subsequence is an original exceptional set intersected with M, so it lies in I because I is closed under subsets (our own). If the subsequence is renumbered instead, it may fail to converge along the same ideal.

**Paper or page:** [Compactness with ideals](https://arxiv.org/abs/2107.00050v1). It says: “subsequence of an ideal convergent sequence may fail to be ideal convergent with respect to same ideal.”

**Sources:**

- [Manoranjan Singha, Sima Roy, Compactness with ideals, arXiv:2107.00050v1 (2021)](https://arxiv.org/abs/2107.00050v1)
