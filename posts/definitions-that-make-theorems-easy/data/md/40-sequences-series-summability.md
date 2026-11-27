### Absolute convergence makes rearranging a series safe

**Remember:** If the sizes alone add up to something finite, the order cannot matter.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series Σaₙ converges absolutely when the series of absolute values Σ\|aₙ\| converges.

**Problem.** Every rearrangement of an absolutely convergent series has the same sum.

**How the definition helps.** Absolute convergence is exactly the condition under which, for real series, the order of the terms does not change the sum. For convergent series in general the statement is false, and Cauchy (1833) found a rearrangement of the alternating harmonic series with a different sum. Riemann showed that a convergent real series that does not converge absolutely can be rearranged to give any real sum, or to diverge. In ℝⁿ, Lévy and Steinitz showed that the set of sums of all rearrangements is an affine subspace.

**Wikipedia:** [Riemann series theorem](https://en.wikipedia.org/wiki/Riemann_series_theorem), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “Around the same time, Peter Gustav Lejeune Dirichlet highlighted that such phenomena are ruled out in the context of absolute convergence, and gave further examples of Cauchy's phenomenon for some other series which fail to be absolutely convergent.”

**Sources:**

- [B. Riemann, Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe, Abh. Königl. Ges. Wiss. Göttingen 13 (1868), 87–132](http://resolver.sub.uni-goettingen.de/purl?PPN250442582_0013)
- [E. Steinitz, Bedingt konvergente Reihen und konvexe Systeme, J. reine angew. Math. 143 (1913), 128–176, doi:10.1515/crll.1913.143.128](https://doi.org/10.1515/crll.1913.143.128)

### Absolute convergence makes series products safe

**Remember:** Absolute tails stay small even without cancellation.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series converges absolutely if the series of absolute values of its terms has a finite sum. Ordinary convergence only asks for the signed partial sums to converge.

**Problem.** The Cauchy product groups pairwise products by the sum of their indices. If both real series converge and at least one converges absolutely, their Cauchy product converges to the product of their sums.

**How the definition helps.** Absolute convergence bounds the late terms even when the other series contributes different bounded partial sums (our own). For each of the finitely many early terms, those partial sums converge to the other series’ sum (our own). For a counterexample, take both series to alternate in sign with term magnitudes 1/√(n+1), starting at index zero (our own). Each diagonal has n+1 products of one sign, each of magnitude at least 1/(n+1) (our own). Thus the product series has terms of magnitude at least one (our own).

**Wikipedia:** [Cauchy product](https://en.wikipedia.org/wiki/Cauchy_product). It says: “if both sequences are conditionally convergent, the Cauchy product does not have to converge towards the product of the two series”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy reciprocals work away from zero

**Remember:** Keep a gap from zero before taking reciprocals.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence stays away from zero eventually if all its late absolute values exceed the same positive bound. This asks more than merely requiring each term to be nonzero.

**Problem.** If a real Cauchy sequence stays away from zero eventually, its late reciprocals form a Cauchy sequence.

**How the definition helps.** The positive lower bound controls the denominator in \|1/x − 1/y\| = \|x − y\|/\|xy\| (our own). The sequence 1/n is Cauchy and never zero, but its reciprocals are unbounded (our own). For a real Cauchy sequence, completeness identifies the lower-bound condition with having a nonzero limit (our own).

**Paper or page:** [Combination Theorem for Cauchy Sequences/Inverse Rule](https://proofwiki.org/wiki/Combination_Theorem_for_Cauchy_Sequences/Inverse_Rule). It says: “is well-defined and a Cauchy sequence.”

**Sources:** none listed. No primary source with a working link was found.

### Condensed terms bound whole blocks

**Remember:** The next block’s first term bounds the current block from below.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Start with a nonincreasing sequence of nonnegative terms indexed from one. Group consecutive terms into blocks of lengths 1, 2, 4, 8, and so on. In the condensed series, each block contributes its length times its first term.

**Problem.** The original series converges if and only if the condensed series converges.

**How the definition helps.** Monotonicity bounds each block sum between its condensed term and half the next condensed term. Our own proof sums these bounds and applies the comparison test in both directions. Our own counterexample sets aₙ = 1/n at powers of two and zero elsewhere. The original series is geometric on its support, but every condensed term equals one.

**Wikipedia:** [Cauchy condensation test](https://en.wikipedia.org/wiki/Cauchy_condensation_test). It says: “each run is bounded above by replacing each term by the largest term in that run.”

**Sources:** none listed. No primary source with a working link was found.

### Consecutive blocks turn regrouping into taking a subsequence

**Remember:** Short blocks of small terms keep intermediate sums close to endpoint sums.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Group a series into consecutive finite nonempty blocks that cover all its terms in order. The grouped series adds the total of each block as one term.

**Problem.** Grouping a convergent real series into consecutive blocks preserves its sum. Conversely, convergence of the grouped series suffices if the block lengths are bounded and the original terms tend to zero.

**How the definition helps.** Bounded block lengths and vanishing terms keep every partial sum close to the preceding block endpoint sum (our own). Thus a limit for the endpoint sums is also a limit for all partial sums (our own). In the forward direction, endpoint sums form a subsequence of the original partial sums and inherit their limit. Pairing consecutive terms in 1 − 1 + 1 − 1 + ⋯ shows why the converse needs a condition on the terms.

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

**Definition.** For a series of nonnegative terms, take the sums over all finite sets of indices. Define the series sum as their least upper bound if they are bounded, and as +∞ otherwise.

**Problem.** If 0 ≤ aₙ ≤ bₙ at every index, the sum of the smaller terms is at most the sum of the larger terms. A finite sum for the larger series therefore guarantees convergence of the smaller series.

**How the definition helps.** Each finite sum of smaller terms is bounded by the corresponding sum of larger terms (our own). Taking least upper bounds preserves this inequality, including when the larger sum is infinite (our own). For agreement with ordinary partial sums, each finite selection fits within some initial segment (our own). Nonnegativity makes its sum at most that initial sum, and the initial sums increase to their supremum (our own).

**Paper or page:** [Positive-Term Generalized Sum Converges iff Supremum](https://proofwiki.org/wiki/Positive-Term_Generalized_Sum_Converges_iff_Supremum). It says: “x is the supremum of:”

**Sources:** none listed. No primary source with a working link was found.

### Independent tails prevent false convergence

**Remember:** Both tails must settle before their sums can be added.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A series indexed by all integers converges if its negative and nonnegative parts converge separately. A symmetric cutoff instead keeps equally many positive and negative indices.

**Problem.** Let the lower endpoint tend to minus infinity and the upper endpoint to plus infinity independently. For a convergent series over all integers, the interval sums approach its sum.

**How the definition helps.** Separate convergence lets each endpoint control its own tail. Our own proof splits an interval sum at zero and applies the sum rule for limits. Our own counterexample takes value 1 at positive indices, −1 at negative indices, and 0 at zero. Every symmetric sum vanishes, but neither tail converges.

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

**Definition.** A series satisfies the Cauchy condition if, for every ε &gt; 0, all sufficiently late finite blocks have sums of magnitude below ε. A block consists of consecutive terms.

**Problem.** A real series converges exactly when it satisfies the Cauchy condition. Its terms must then tend to zero.

**How the definition helps.** Each block sum is the difference of two partial sums, so small late blocks make late partial sums close together (our own). Completeness of the real numbers makes this equivalent to convergence of the partial sums (our own). Single-term blocks show that individual terms must tend to zero (our own). In the harmonic series, the terms tend to zero but each block from n + 1 to 2n sums to at least 1/2 (our own).

**Paper or page:** [Cauchy's Convergence Criterion for Series](https://proofwiki.org/wiki/Cauchy's_Convergence_Criterion_for_Series). It says: “\|aₙ₊₁ + aₙ₊₂ + ⋯ + aₘ\| &lt; ε”

**Sources:** none listed. No primary source with a working link was found.

### Root tests accept zero terms

**Remember:** Take roots when zero terms break the ratios.

*Makes the theorem clean to state or prove.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Take the nth root of the absolute value of each term. Define the upper limit of these roots as the limit of their tail suprema. Roots remain defined at zero terms.

**Problem.** The series converges absolutely if this upper limit is below one. It diverges if the upper limit is above one. The test gives no answer when the upper limit is one.

**How the definition helps.** Taking roots compares each term to a geometric term without dividing by another term (our own). Take terms that are zero at even indices and 2⁻ⁿ at odd indices (our own). Their ratios are undefined infinitely often (our own). The work is a geometric comparison below one, or showing that terms fail to tend to zero above one (our own).

**Paper or page:** [Nth Root Test](https://proofwiki.org/wiki/Nth_Root_Test). It says: “If this limit is less than one, the series converges absolutely.”

**Sources:** none listed. No primary source with a working link was found.

### Tail bounds reveal the largest subsequential limit

**Remember:** Each tail gets close to the upper limit somewhere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences), 26A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A tail consists of all terms from one index onward. Its supremum is its least upper bound. The upper limit of a bounded real sequence is the greatest lower bound of these tail suprema.

**Problem.** The upper limit of a bounded real sequence is the largest limit of any of its convergent subsequences.

**How the definition helps.** Every tail has terms arbitrarily close to its supremum, so it supplies candidates for a convergent subsequence (our own). The tail suprema decrease to the upper limit by the convergence theorem for bounded monotone sequences (our own). At step n, start beyond the previous index and beyond n, then choose a term within 1/n of that tail’s supremum (our own). These choices converge to the upper limit, and every tail supremum bounds every subsequence limit from above (our own).

**Paper or page:** [Bolzano-Weierstrass Theorem](https://proofwiki.org/wiki/Bolzano-Weierstrass_Theorem). It says: “Every bounded sequence of real numbers has a convergent subsequence.”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided bounds give the same convergence without a ratio limit

**Remember:** Bound the ratio in both directions to compare both sums.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Two positive sequences have the same order of growth if their termwise ratios eventually stay between two fixed positive constants. The usual limit comparison test asks for a positive finite ratio limit instead.

**Problem.** Two positive series whose terms have the same order of growth either both converge or both diverge.

**How the definition helps.** The two bounds let us use direct comparison in both directions (our own). The work is proving the direct comparison test for nonnegative series and checking the two bounds (our own). A positive finite ratio limit supplies them, but alternating ratios of 1 and 2 also work (our own).

**Paper or page:** [Limit Comparison Test](https://proofwiki.org/wiki/Limit_Comparison_Test). It says: “are either both convergent or both divergent.”

**Sources:** none listed. No primary source with a working link was found.

### Viewing a series as its partial sums makes telescoping immediate

**Remember:** Successive differences recover the terms from their partial sums.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define a series by its partial sums, starting with an empty sum of zero. Its terms are the differences between consecutive partial sums, and its sum is the limit of the partial sums.

**Problem.** The series of successive differences bₙ − bₙ₋₁ converges exactly when the real sequence beginning at b₀ converges. Its sum is the sequence limit minus b₀.

**How the definition helps.** The partial sums of the differences are exactly the original terms minus b₀ (our own). Adding the first n differences cancels every intermediate term and leaves bₙ − b₀ (our own). Thus taking differences recovers the term list, while taking partial sums recovers the series in its alternative definition (our own).

**Wikipedia:** [Series (mathematics)](https://en.wikipedia.org/wiki/Series_%28mathematics%29). It says: “Some authors directly identify a series with its sequence of partial sums.”

**Sources:** none listed. No primary source with a working link was found.

### Separate limits remove cutoff dependence

**Remember:** Separate convergence lets each endpoint go to infinity at its own pace.

*Rules out counterexamples.* MSC 40A10 (Convergence and divergence of integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define a convergent improper integral on the real line as the sum of two finite one-sided limits. A symmetric cutoff instead uses the same distance on both sides.

**Problem.** If the improper integral converges, its cut integrals tend to the same value as the endpoints go independently to opposite infinities.

**How the definition helps.** Split each cut interval at zero and take the two limits separately (our own). Finite-interval additivity also makes the choice of the splitting point harmless (our own). For f(x) = x, the symmetric cuts give zero, but shifting the right endpoint by one makes the integrals diverge (our own).

**Wikipedia:** [Improper integral](https://en.wikipedia.org/wiki/Improper_integral). It says: “Here both limits must converge to a finite value for the improper integral to be said to converge.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric cuts cancel odd integrals

**Remember:** Cut equally on both sides and odd parts cancel.

*True by definition.* MSC 40A10 (Convergence and divergence of integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For an isolated singularity at zero, integrate outside (−ε, ε) and let ε decrease to zero. The Cauchy principal value is this limit if it exists. The ordinary improper integral requires finite limits on both sides separately.

**Problem.** An odd function that is integrable away from zero on \[−a, a\] has principal value zero there.

**How the definition helps.** The symmetric cutoff pairs every retained point with its negative (our own). Substituting −x for x makes the two integrals cancel for each ε (our own). For 1/x, each one-sided integral diverges (our own).

**nLab:** [Cauchy principal value](https://ncatlab.org/nlab/show/Cauchy+principal+value). It says: “is, if it exists, the limit of a sequence of the integrals of the function over subsets in the complement of this point as these integration domains tend to that point symmetrically from all sides.”

**Sources:** none listed. No primary source with a working link was found.

### Convergence of an infinite product excludes the limit zero

**Remember:** A convergent product may not quietly drift to zero.

*Rules out counterexamples.* MSC 40A20 (Convergence and divergence of infinite products). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Take an infinite product ∏ aₖ with at most finitely many zero factors. It converges if the partial products of its non-zero factors have a limit, and this limit is not zero. Its value is 0 if some factor is 0. Otherwise its value is that limit.

**Problem.** If an infinite product ∏ aₖ converges, then aₖ → 1. A convergent product is zero only if some factor is zero.

**How the definition helps.** The demand for a non-zero limit removes the two ways in which the naive definition, which only asks the partial products to have a limit, breaks this test. A single factor 0 makes every later partial product 0, whatever the aₖ do. Factors with \|aₖ\| ≤ M &lt; 1 push the partial products to 0, although aₖ need not tend to 1. The non-zero limit of the non-zero factors rules out both.

**nLab:** [infinite product](https://ncatlab.org/nlab/show/infinite+product). It says: “To avoid these "pathological" situations, we make the following modified definition.”

**Sources:**

- [Alfred Pringsheim, Ueber die Convergenz unendlicher Producte, Mathematische Annalen 33 (1888) 119–154](https://doi.org/10.1007/bf01444113)

### Bounded multipliers preserve uniform convergence

**Remember:** Bound both factors before passing to the product limit.

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

**Definition.** Say a series converges locally uniformly on an open interval if it converges uniformly on every closed bounded subinterval. This does not require uniform convergence on the entire open interval.

**Problem.** A real power series converges uniformly on each closed bounded subinterval strictly inside its interval of convergence.

**How the definition helps.** Local uniform convergence lets each closed subinterval use its own bound while requiring one cutoff throughout that subinterval (our own). Choose a radius beyond the subinterval’s greatest distance from the center but below the radius of convergence (our own). Absolute convergence at that radius gives a summable bound for the terms throughout the subinterval (our own). The geometric series with terms xⁿ fails to converge uniformly on (−1, 1), since its terms do not tend uniformly to zero (our own).

**Wikipedia:** [Power series](https://en.wikipedia.org/wiki/Power_series). It says: “it converges uniformly on every compact subset of the disc of convergence.”

**Paper or page:** [Power Series Converges Uniformly within Radius of Convergence](https://proofwiki.org/wiki/Power_Series_Converges_Uniformly_within_Radius_of_Convergence). It says: “Then S is uniformly convergent on D = {x: \|x − ξ\| ≤ ρ}.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity preserves uniform convergence under composition

**Remember:** One threshold handles every input to the outer function.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function is uniformly continuous if each positive output tolerance has one input distance threshold. Any two inputs closer than that threshold give outputs within the tolerance.

**Problem.** Let gₙ and g take values in the domain of a uniformly continuous function h. If gₙ → g uniformly, then h ∘ gₙ → h ∘ g uniformly.

**How the definition helps.** One threshold for h works at every pair gₙ(x), g(x) (our own argument). Uniform convergence puts each such pair within this threshold once n is large enough. A counterexample uses h(t) = t² and gₙ(x) = x + 1/n on ℝ. The squared values differ from x² by 2x/n + 1/n², which is unbounded for each n.

**Paper or page:** [Uniformly Continuous Function Preserves Uniform Convergence](https://proofwiki.org/wiki/Uniformly_Continuous_Function_Preserves_Uniform_Convergence). It says: “Let gₙ converge to g uniformly on X as n → ∞. Let f: A₁ → A₂ be uniformly continuous on A₁.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convergence lets the evaluation point move

**Remember:** One error bound works even when the point moves.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Uniform convergence to f means that each positive error tolerance has one cutoff index. After that index, every function differs from f by less than the tolerance everywhere.

**Problem.** Suppose continuous functions fₙ converge uniformly to f on a metric space. If xₙ → x in that space, then fₙ(xₙ) → f(x).

**How the definition helps.** Uniform convergence controls the error even at the moving point xₙ (our own argument). The uniform limit theorem gives continuity of f, so f(xₙ) tends to f(x). A counterexample uses xⁿ on \[0, 1\] at xₙ = 1 − 1/n. The sampled values tend to 1/e, while the pointwise limit at 1 equals 1.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “What is uniform about this convergence is that the bound N(ε) is required to work for all x ∈ X (hence uniformly over x).”

**Paper or page:** [Uniformly Convergent Sequence Evaluated on Convergent Sequence](https://proofwiki.org/wiki/Uniformly_Convergent_Sequence_Evaluated_on_Convergent_Sequence). It says: “Let ⟨aₙ⟩ be a convergent sequence in K with limit a ∈ K.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convergence repairs Cauchy's sum theorem

**Remember:** Uniform convergence means that one N works for every point at once.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence of functions fₙ converges uniformly to f∞ if, for every ε &gt; 0, there is one N with \|fₙ(x) − f∞(x)\| &lt; ε for all n ≥ N and all x at the same time. Pointwise convergence lets N depend on x.

**Problem.** If a sequence of continuous functions converges uniformly, then its limit is continuous. This repairs Cauchy's sum theorem of 1821, which claimed it for every convergent sequence.

**How the definition helps.** Uniform convergence gives one N for all nearby points, and the standard ε/3 proof needs exactly that. With pointwise convergence the statement is false, since fₙ(x) = xⁿ on \[0,1\] has continuous terms and a discontinuous limit. Cauchy's proof fails because the N for the point x + h depends on h, and uniform convergence removes that dependence (Seidel 1847). Equicontinuity, one δ for all the functions fₙ at once, is a second repair.

**nLab:** [Cauchy sum theorem](https://ncatlab.org/nlab/show/Cauchy+sum+theorem). It says: “Analysing this argument, Philipp von Seidel (first, and others afterwards) realised that it could be fixed if f converges to f∞ uniformly, so that n is independent of h.”

**Sources:**

- [Imre Lakatos, Mathematics, Science and Epistemology (Philosophical Papers vol. 2), Cambridge University Press (1978), chapter 3](https://doi.org/10.1017/CBO9780511624926)

### Uniform limits keep uniform continuity

**Remember:** One good approximant supplies a threshold for every pair.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Uniform convergence uses one cutoff index for all points at each positive error tolerance. Uniform continuity uses one distance threshold for all pairs of points at each positive tolerance.

**Problem.** The uniform limit of uniformly continuous real functions on a metric space is uniformly continuous.

**How the definition helps.** Uniform convergence lets one function approximate the limit within a third of the tolerance everywhere (our own argument). Its uniform continuity makes its values at nearby points differ by less than another third. The proof adds the three errors by the triangle inequality. With only pointwise convergence, xⁿ on \[0, 1\] has a discontinuous limit.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “What is uniform about this convergence is that the bound N(ε) is required to work for all x ∈ X (hence uniformly over x).”

**Sources:** none listed. No primary source with a working link was found.

### Cesàro averaging gives cycle means

**Remember:** Average a complete cycle to remove the oscillation.

*Makes the theorem clean to state or prove.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Cesàro sum is the limit of the averages of the first n partial sums. The ordinary sum is the limit of the partial sums themselves.

**Problem.** If the partial sums repeat in a finite cycle, the Cesàro sum is the mean of that cycle.

**How the definition helps.** Complete cycles all have the same mean, and the incomplete cycle contributes a vanishing error (our own). For example, the partial sums of 1 − 1 + 1 − ⋯ alternate between one and zero (our own). Agreement with ordinary convergence is separate and follows by bounding the average error of a late tail (our own).

**Wikipedia:** [Cesàro summation](https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation). It says: “This sequence of partial sums does not converge, so the series G is divergent. However, G is Cesàro summable.”

**Sources:** none listed. No primary source with a working link was found.

### Absolute convergence saves Cauchy products

**Remember:** Absolute weights make the shifted partial sums safe to average.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences), 40B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Cauchy product collects pairs of terms by the sum of their indices. Require the sum of the magnitudes of one input series to be finite. Mere convergence allows both series to rely on cancellation.

**Problem.** If two series converge and one converges absolutely, their Cauchy product converges to the product of their sums.

**How the definition helps.** Each partial sum of the Cauchy product weights shifted partial sums of one series by terms of the absolutely convergent series (our own). The shifted sums are bounded, so the tail contributes at most that bound times the sum of the remaining absolute weights (our own). For each fixed weight, the shifted sum approaches the second sum (our own). Squaring the alternating series with magnitudes 1/√(n + 1) gives product terms of magnitude at least one (our own).

**Wikipedia:** [Cauchy product](https://en.wikipedia.org/wiki/Cauchy_product). It says: “if both sequences are conditionally convergent, the Cauchy product does not have to converge towards the product of the two series, as the following example shows”

**Sources:** none listed. No primary source with a working link was found.

### Finite partitions split upper limits

**Remember:** The largest tail bound still wins after a finite split.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the upper limit of a bounded real sequence by the limit of its tail suprema. Another description uses the largest limit of a subsequence.

**Problem.** Split the indices of a bounded real sequence into finitely many infinite sets. Its upper limit is the largest upper limit of the resulting subsequences.

**How the definition helps.** A whole tail has supremum equal to the maximum of the suprema over its pieces (our own). A finite maximum commutes with taking limits (our own). The work goes into showing that the limit of tail bounds equals the largest subsequential limit (our own).

**Paper or page:** [Limit Superior in terms of Partitioning Subsequences](https://proofwiki.org/wiki/Limit_Superior_in_terms_of_Partitioning_Subsequences). It says: “\\ds \\limsup<sub>k \\mathop \\to \\infty</sub> x<sub>k</sub> = \\max<sub>1 \\le j \\le N</sub> \\limsup<sub>k \\mathop \\to \\infty</sub> x\_{\\map {\\phi<sub>j</sub>} k}”

**Sources:** none listed. No primary source with a working link was found.

### Ignoring errors that vanish makes sequence limits preserve arithmetic

**Remember:** Replace each convergent sequence with its constant representative.

*True by definition. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Put two bounded sequences in the same class if their termwise difference tends to zero. Add and multiply classes by adding and multiplying their sequences term by term. Convergence to L means belonging to the class of the constant sequence L.

**Problem.** The termwise sum and product of convergent real sequences converge to the sum and product of their limits, respectively.

**How the definition helps.** Each convergent sequence shares a class with its constant limit, so class arithmetic reduces to arithmetic on constants (our own). Agreement with ordinary convergence follows because the difference from the constant sequence tends to zero (our own). The work is proving that changing representatives preserves sums and products (our own). Changing one factor adds its vanishing error times a bounded factor, which still tends to zero (our own).

**Paper or page:** [Sum of Convergent Sequences in Topological Vector Space is Convergent](https://proofwiki.org/wiki/Sum_of_Convergent_Sequences_in_Topological_Vector_Space_is_Convergent). It says: “xₙ + yₙ → x + y”

**Sources:** none listed. No primary source with a working link was found.

### Positive increments justify Stolz averages

**Remember:** Positive steps make long slopes average the short slopes.

*Rules out counterexamples.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For real sequences a and b, write Δa and Δb for their changes from index n to n+1. Assume b increases strictly to infinity. Give each local slope Δa/Δb the positive weight Δb.

**Problem.** If those local slopes converge to a finite limit, the ratios a(n)/b(n) converge to the same limit.

**How the definition helps.** Positive increments make the slope over a long interval a weighted average of the individual slopes. In our own proof, any fixed initial contribution vanishes after division by b(n), so the average approaches the limiting slope. Our own counterexample sets a(n) = n, b(2k) = k and b(2k+1) = (k+1)² + 1. The local slopes tend to zero because the increments of b grow in size, yet a(2k)/b(2k) = 2 for every positive k.

**Wikipedia:** [Stolz–Cesàro theorem](https://en.wikipedia.org/wiki/Stolz%E2%80%93Ces%C3%A0ro_theorem). It says: “Since (bₙ) is strictly increasing, bₙ₊₁ − bₙ &gt; 0”

**Sources:** none listed. No primary source with a working link was found.

### Summable changes in the weights give Dirichlet’s convergence test

**Remember:** Move the differences onto the weights, where their magnitudes add.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** To weight a series, multiply each term by its own weight. The weights have finite total variation if the absolute differences between consecutive weights have a finite sum.

**Problem.** Suppose a series has bounded partial sums and its weights have finite total variation. The weighted series converges if either the weights tend to zero or the original series converges.

**How the definition helps.** Finite total variation makes the sum of partial sums times successive weight differences absolutely convergent, since the partial sums are bounded (our own). Summation by parts leaves only the last weight times the last partial sum to check (our own). This product tends to zero if the weights do (our own). Otherwise, when the original series converges, both factors converge because finite total variation makes the weights a Cauchy sequence (our own).

**Wikipedia:** [Dirichlet's test](https://en.wikipedia.org/wiki/Dirichlet%27s_test). It says: “Since the magnitudes of the partial sums Bₙ are bounded by some M”

**Sources:**

- [P. G. L. Dirichlet, Démonstration d’un théorème d’Abel (1862), pp. 253–255](https://www.numdam.org/item/JMPA_1862_2_7__253_0/)

### Tail bounds let the ratio test work without a ratio limit

**Remember:** Bound every late ratio on one side of one.

*Makes the theorem clean to state or prove.* MSC 40A05 (Convergence and divergence of series and sequences). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A tail contains all ratios from one index onward. The upper limit is the greatest lower bound of the tail suprema, where each supremum is a least upper bound. The lower limit reverses these bounds, and both definitions allow infinite values.

**Problem.** For eventually nonzero terms, form each ratio by dividing the next term’s magnitude by the current one. An upper limit below 1 guarantees absolute convergence, while a lower limit above 1 guarantees divergence.

**How the definition helps.** An upper limit below 1 puts every sufficiently late ratio below one fixed positive number q &lt; 1 (our own). The remaining magnitudes are bounded by a geometric series with finite sum, so their series converges absolutely (our own). A lower limit above 1 puts every late ratio above 1, preventing the terms from tending to zero (our own).

**Wikipedia:** [Ratio test](https://en.wikipedia.org/wiki/Ratio_test). It says: “cases where the limit L fails to exist, if limit superior and limit inferior are used.”

**Sources:** none listed. No primary source with a working link was found.

### Taking closed tails makes the set of subsequential limits closed

**Remember:** Close each tail, then keep only the points in every tail.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences), 26A03. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define a cluster point of a sequence as a point in the closure of every tail. A point lies in a tail's closure if every open interval around the point contains a term of that tail. A tail contains all terms from a given index onward.

**Problem.** The cluster points of a real sequence form a closed set. They are exactly the limits of its convergent subsequences.

**How the definition helps.** The cluster points form an intersection of closed sets, which is itself closed (our own). Each subsequence visits every interval around its limit arbitrarily late, so its limit belongs to every tail closure (our own). Conversely, choose successive terms within 1/n of a cluster point, always passing the last chosen index (our own). This proves agreement with the usual definition by subsequences (our own).

**nLab:** [limit point](https://ncatlab.org/nlab/show/limit+point). It says: “the closure of A is the set of all adherent points of A”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 3.7](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### Absolute convergence makes improper integrals independent of gapped cutoffs

**Remember:** If the whole absolute tail is small, any selection of it is small.

*Rules out counterexamples. Confidence: medium.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** An improper integral on \[a, ∞) converges absolutely when the integrals of \|f\| from a to R have a finite limit. For a finite union of bounded intervals, integrate by adding the integrals over its pieces with disjoint interiors.

**Problem.** Suppose f is locally Riemann integrable and its improper integral on \[a, ∞) converges absolutely. Integrals over finite interval unions in \[a, ∞) approach this value uniformly as the initial segment they contain grows.

**How the definition helps.** The absolute tail bounds every signed tail, so the Cauchy criterion gives ordinary improper convergence (our own). The same absolute tail bounds what any finite union containing the chosen initial interval can omit (our own). The ordinary integral of sin(x)/x on \[1, ∞) converges (our own). Adding only its positive half-waves far out can make the cut integrals arbitrarily large (our own).

**Wikipedia:** [Improper integral](https://en.wikipedia.org/wiki/Improper_integral). It says: “unconditional convergence turns out to be equivalent to absolute convergence.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy tails make Dirichlet’s test a bound on one interval

**Remember:** A bounded primitive multiplies a weight that tends to zero.

*True by definition.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** In the Cauchy form of improper convergence, integrals over \[u, v\] must tend uniformly to zero for v &gt; u as u grows. This replaces the limit of integrals taken from a fixed starting point.

**Problem.** Let f be continuous on \[a, ∞) with a bounded primitive F, meaning F′ = f. If g is continuously differentiable, nonnegative, nonincreasing, and tends to zero, then the improper integral of fg converges.

**How the definition helps.** The Cauchy definition replaces evaluation of a limit from a fixed endpoint with one estimate on every distant interval (our own). Let M bound \|F\| and integrate by parts on \[u, v\] (our own). The endpoint terms contribute at most M(g(u) + g(v)), and the remaining integral contributes at most M(g(u) − g(v)) (our own). The resulting bound 2Mg(u) tends to zero independently of v (our own).

**Wikipedia:** [Dirichlet's test](https://en.wikipedia.org/wiki/Dirichlet%27s_test). It says: “An analogous statement for convergence of improper integrals is proven using integration by parts.”

**Sources:** none listed. No primary source with a working link was found.

### Improper integrals as suprema of partial areas make comparison immediate

**Remember:** If every partial area of f is smaller, so is the supremum.

*True by definition. Confidence: medium.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f ≥ 0 be Riemann integrable on every closed bounded subinterval of an open interval I. Define its improper integral as the supremum of its integrals over those subintervals. The value may be +∞. The usual definition fixes an interior point and takes separate limits toward the two ends of I.

**Problem.** Let 0 ≤ f ≤ g on I, both Riemann integrable on every closed bounded subinterval. If the improper integral of g is finite, then so is that of f, and it is no larger.

**How the definition helps.** With the supremum definition, the claim is that a pointwise bound passes to suprema (our own). Each partial area of f is at most the matching partial area of g, so at most the supremum for g (our own). The usual definition first needs both one-sided limits to exist (our own). The work moves into showing that the definitions agree for f ≥ 0. Partial areas grow with the subinterval, and a bounded increasing function has a limit (our own).

**Paper or page:** [Comparison Test for Improper Integral](https://proofwiki.org/wiki/Comparison_Test_for_Improper_Integral). It says: “If the improper integral of φ over I exists, then so does that of f.”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly small tails let limits pass through improper integrals

**Remember:** Control every far tail by the same bound.

*Rules out counterexamples. Confidence: medium.* MSC 40A10 (Convergence and divergence of integrals), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A tail integral starts at u and ends at some v &gt; u. Uniformly small integral tails mean every positive tolerance admits one cutoff beyond which all such integrals have absolute value below that tolerance. The same cutoff must work for every function in the sequence.

**Problem.** Suppose locally Riemann integrable functions on \[a, ∞) converge uniformly to f on every closed bounded subinterval and have uniformly small integral tails. Their improper integrals exist and converge to the improper integral of f.

**How the definition helps.** The tail condition gives the Cauchy test for each improper integral and passes to f on each finite tail interval (our own). Cut at one large point for every function, and use uniform convergence on the retained interval (our own). Without tail control, the functions equal to 1/n on \[0, n\] and zero elsewhere converge uniformly to zero but have integral one (our own).

**Wikipedia:** [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). It says: “The sequence (fₙ) converges uniformly to the zero function”

**Sources:** none listed. No primary source with a working link was found.

### Alternating gaps make continued fractions converge

**Remember:** Successive gaps alternate and shrink as the denominators grow.

*Makes the theorem clean to state or prove.* MSC 40A15 (Convergence and divergence of continued fractions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A simple continued fraction nests reciprocals, as in a₀ + 1/(a₁ + 1/(a₂ + ⋯)). For each digit a, form the matrix with rows (a,1) and (1,0). Multiply these matrices in digit order. The first column gives the numerator and denominator of the corresponding finite fraction.

**Problem.** Every infinite simple continued fraction with positive integer digits after the first has convergent finite truncations.

**How the definition helps.** The matrix determinant gives the gap between consecutive fractions, including its sign. In our own proof, each new digit matrix reverses the determinant's sign, so the gap alternates and has size 1/(qₖqₖ₋₁). The recursion qₖ = aₖqₖ₋₁ + qₖ₋₂ with positive digits makes the denominators grow without bound. The alternating series test then gives convergence.

**Paper or page:** [Difference between Adjacent Convergents of Simple Continued Fraction](https://proofwiki.org/wiki/Difference_between_Adjacent_Convergents_of_Simple_Continued_Fraction). It says: “Cₖ − Cₖ₋₁ = pₖ/qₖ − pₖ₋₁/qₖ₋₁ = (−1)ᵏ⁺¹/(qₖ qₖ₋₁)”

**Sources:** none listed. No primary source with a working link was found.

### Summable increments keep products nonzero

**Remember:** Summable increments give a finite logarithmic tail and hence a nonzero product.

*Rules out counterexamples.* MSC 40A20 (Convergence and divergence of infinite products). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For real factors 1 + tₙ, call the product absolutely convergent when the series of magnitudes \|tₙ\| converges. Requiring only that the factors tend to one gives less control.

**Problem.** If the absolute increments are summable and each factor is nonzero, the real partial products tend to a nonzero limit.

**How the definition helps.** Summable increments give a convergent sum of logarithms for the tail (our own). Eventually \|tₙ\| is below one half, so \|log(1 + tₙ)\| ≤ 2\|tₙ\| (our own). Exponentiating gives a positive tail limit, and the finite initial product is nonzero (our own). The factors 1 − 1/n for n ≥ 2 tend to one, yet their product through N equals 1/N (our own).

**Paper or page:** [Absolutely Convergent Product Does not Diverge to Zero](https://proofwiki.org/wiki/Absolutely_Convergent_Product_Does_not_Diverge_to_Zero). It says: “Then it is not divergent to 0.”

**Sources:** none listed. No primary source with a working link was found.

### Summable increments prevent spurious zeros

**Remember:** A uniformly small tail cannot add zeros to a product.

*Rules out counterexamples.* MSC 40A20 (Convergence and divergence of infinite products), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let fₙ be continuous complex functions on a compact metric space. Require the series of magnitudes \|fₙ\| to converge uniformly, so one tail bound works at every point. Form the product of the factors 1 + fₙ.

**Problem.** Under this condition, the infinite product vanishes exactly where at least one factor vanishes.

**How the definition helps.** Uniform control makes all sufficiently late increments smaller than one half everywhere (our own). There the logarithm of 1 + fₙ given by its power series has magnitude at most 2\|fₙ\| (our own). Its sum converges uniformly, and exponentiating gives a tail product without zeros (our own). Only the finite initial product can vanish (our own). Constant factors exp(−1/n) have no zeros, yet their partial products converge uniformly to zero (our own).

**Paper or page:** [Uniform Absolute Convergence of Infinite Product of Complex Functions](https://proofwiki.org/wiki/Uniform_Absolute_Convergence_of_Infinite_Product_of_Complex_Functions). It says: “there exists n₀ ∈ ℕ such that ∏ from n = n₀ to ∞ (1 + fₙ(x)) has no zeroes.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric errors make Aitken exact

**Remember:** Fit a geometric error and keep only the constant.

*True by definition.* MSC 40A25 (Approximation to limiting values (summation of series, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the extrapolated limit from three successive values. Fit a constant plus a geometric error whose ratio is nonzero and has absolute value less than one. Use the fitted constant instead of the latest value whenever such a fit exists.

**Problem.** For a sequence with exactly that geometric error and nonzero amplitude, one Aitken step returns the true limit.

**How the definition helps.** Fitting a constant plus geometric error recovers the constant immediately when the data follow that model. Our own derivation connects this definition to Aitken’s usual formula. Let u and v be the first and second increments. Their ratio v/u gives the unique geometric ratio. Subtract u²/(v − u) from the first value to obtain the fitted constant.

**Wikipedia:** [Aitken's delta-squared process](https://en.wikipedia.org/wiki/Aitken%27s_delta-squared_process). It says: “aₙ = xₙ − (Δxₙ)²/Δ²xₙ”

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

**Problem.** No stable linear summation method gives 1 + 2 + 3 + ⋯ a finite value. So the value −1/12 must come from a method that is not stable or not linear.

**How the definition helps.** With the axioms written down, a few lines of algebra settle the question. Suppose a stable linear method gives 1 + 2 + 3 + ⋯ the value s. Putting 0 in front by stability and subtracting by linearity gives 1 + 1 + 1 + ⋯ the value 0. Doing the same again gives 1 + 0 + 0 + ⋯ the value 0, but stability says its value is 1. So zeta function regularization and Ramanujan summation, which give −1/12, must fail linearity or stability. The page notes that zeta regularization is not linear.

**Wikipedia:** [1 + 2 + 3 + 4 + ⋯](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF), [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “Most of the more elementary definitions of the sum of a divergent series are stable and linear, and any method that is both stable and linear cannot sum 1 + 2 + 3 + ⋯ to a finite value”

**Sources:**

- [Mario A. Natiello and Hernán Gustavo Solari, On the removal of infinities from divergent series, Philosophy of Mathematics Education Journal 29 (2015) 1–11](https://hdl.handle.net/11336/46148)

### A uniform error bound lets two limits change order

**Remember:** A bound valid near x stays valid when the input tends to x.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Uniform convergence gives each positive error tolerance one cutoff index that works at every input. An accumulation point has other domain points arbitrarily close to it.

**Problem.** Suppose real functions fₙ converge uniformly to f and each fₙ has a finite limit at the same accumulation point x. Then f has a limit at x, and it equals the limit of the individual limits.

**How the definition helps.** Uniform convergence gives a common bound on differences between late functions that survives taking their limits at x (our own argument). In our own proof, the individual limits therefore form a Cauchy sequence and converge by completeness of the real numbers. Approximating f by one late function then gives that same limit at x. For xⁿ on (0, 1), the two orders of limits at 1 give 1 and 0.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “What is uniform about this convergence is that the bound N(ε) is required to work for all x ∈ X (hence uniformly over x).”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 7.11](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### Bounded variation keeps Abel multipliers from enlarging small tails

**Remember:** Small partial sums stay small under weights with bounded total change.

*Makes the theorem clean to state or prove.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 30B10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a sequence of weights, its total variation is the sum of the magnitudes of the differences between consecutive weights. A common bound on this sum controls how much the weights change on any tail.

**Problem.** A uniformly convergent series stays uniformly convergent under termwise multiplication by uniformly bounded weights with uniformly bounded total variation. In particular, if ∑ aₙ converges, then ∑ aₙxⁿ converges uniformly on \[0, 1\].

**How the definition helps.** Total variation bounds all the weight differences that appear when summation by parts rewrites a tail. In our own proof, the largest absolute partial sum within the tail is multiplied by at most the weight bound plus the variation bound. Uniform convergence makes those partial sums uniformly small. For xⁿ on \[0, 1\], both the weights and their total variation are at most one.

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

**Definition.** A space is compact if every cover by open sets contains a finite subcover. A sequence is monotone at a point if its values there are nondecreasing or nonincreasing.

**Problem.** Suppose continuous real functions on a compact space converge pointwise to a continuous function. If the sequence is monotone at every point, convergence is uniform.

**How the definition helps.** Compactness turns the open sets where the error is below a fixed tolerance into a finite cover. Monotonicity makes these sets grow, so the largest selected set covers every point. Our own counterexample uses xⁿ on \[0, 1), where the pointwise limit is zero but the supremum stays one.

**Wikipedia:** [Dini's theorem](https://en.wikipedia.org/wiki/Dini%27s_theorem). It says: “The continuity of the limit function cannot be inferred from the other hypothesis”

**Paper or page:** [Dini's Theorem](https://proofwiki.org/wiki/Dini's_Theorem). It says: “Let fₙ converge pointwise to a continuous function f.”

**Sources:** none listed. No primary source with a working link was found.

### Equicontinuity upgrades convergence on a dense set to uniform convergence

**Remember:** One distance threshold reduces uniform convergence to finitely many test points.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 54C35. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Uniform equicontinuity gives each positive error tolerance one distance threshold for all functions and all input pairs. A dense set has points arbitrarily close to every point of the domain.

**Problem.** On a compact metric space, a uniformly equicontinuous sequence of real functions that converges pointwise on a dense subset converges uniformly everywhere.

**How the definition helps.** The shared threshold lets a bound at one test point control all functions nearby. Compactness gives finitely many such test points from the dense set. In our own proof, convergence at these points makes late functions uniformly close there, and the triangle inequality extends the bound everywhere. Completeness of the real numbers then gives uniform convergence.

**nLab:** [equicontinuous family of functions](https://ncatlab.org/nlab/show/equicontinuous+family+of+functions). It says: “Nevertheless, given a family of functions, we may have that f(x) is arbitrarily close to f(y) for every function f in the family at once whenever x is sufficiently close to y.”

**Wikipedia:** [Arzelà–Ascoli theorem](https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem). It says: “There exists an integer K such that each open interval Uⱼ, 1 ≤ j ≤ J, contains a rational xₖ with 1 ≤ k ≤ K.”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes weights give uniform limits an integral bound

**Remember:** The total increase of α controls the whole integral error.

*Makes the theorem clean to state or prove.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights each subinterval by the increase of a nondecreasing function α across it. Lower and upper sums use the infimum and supremum of the integrand on each subinterval. A bounded function is integrable when the supremum of its lower sums equals the infimum of its upper sums.

**Problem.** For fixed nondecreasing α on \[a, b\], a uniform limit of functions Riemann–Stieltjes integrable with respect to α remains integrable. Its integral is the limit of their integrals.

**How the definition helps.** The weights are nonnegative and always add to α(b) − α(a), just as ordinary interval lengths add to b − a. Our own proof bounds each upper or lower sum’s change by the uniform error times that total weight. The gap between the upper and lower integrals therefore vanishes, and the same bound gives convergence of the integrals.

**Paper or page:** [Riemann-Stieltjes Integral of Constant Integrand](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_of_Constant_Integrand). It says: “∫ from a to b of f dα = cα(b) − cα(a)”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 7.16](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### Summable norms give uniform convergence

**Remember:** Sum the worst bounds first and every tail is small everywhere.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The supremum norm of a bounded function is the least upper bound of its magnitude over the domain. A series converges normally on a set if the sum of these norms is finite.

**Problem.** A normally convergent series of real functions converges uniformly.

**How the definition helps.** Summing the supremum norms bounds each tail at every point by the same number (our own). The numerical tail tends to zero, so the function series converges uniformly by the Cauchy criterion (our own). On \[0, 1\], the functions (1 − x)xⁿ for n ≥ 0 sum to one below 1 and zero at 1 (our own). Their discontinuous sum rules out uniform convergence of these continuous functions (our own).

**Wikipedia:** [Normal convergence](https://en.wikipedia.org/wiki/Normal_convergence). It says: “if the series of uniform norms of the terms of the series converges”

**Paper or page:** [Weierstrass M-Test](https://proofwiki.org/wiki/Weierstrass_M-Test). It says: “Then ∑ from i = 1 to ∞ fᵢ converges uniformly on D.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convergence on a dense set extends across the domain

**Remember:** A uniform bound on a dense set reaches every point.

*True by definition.* MSC 40A30 (Convergence and divergence of series and sequences of functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A subset is dense if every point is a limit of points from that subset. A sequence is uniformly Cauchy if each positive tolerance has a cutoff after which every two functions differ by less than that tolerance everywhere.

**Problem.** If continuous real functions on a metric space converge uniformly on a dense subset, they converge uniformly on the whole space.

**How the definition helps.** The uniform Cauchy criterion compares two functions already defined everywhere, without needing a candidate limit outside the dense set. In our own proof, continuity extends a bound of at most half the tolerance from the dense set to all points. Completeness of the real numbers turns the resulting uniform Cauchy bounds into uniform convergence.

**Paper or page:** [Uniformly Convergent Sequence on Dense Subset](https://proofwiki.org/wiki/Uniformly_Convergent_Sequence_on_Dense_Subset). It says: “Let V be a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly convergent sequences of continuous functions are equicontinuous

**Remember:** Use the limit for the tail and check the head separately.

*Rules out counterexamples.* MSC 40A30 (Convergence and divergence of series and sequences of functions), 54C35. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A family is equicontinuous at x if each positive tolerance has one neighborhood of x for the whole family. Throughout that neighborhood, each function differs from its value at x by less than the tolerance.

**Problem.** A uniformly convergent sequence of continuous functions between metric spaces is equicontinuous at every point.

**How the definition helps.** Uniform convergence lets one neighborhood from continuity of the limit control every sufficiently late function at x (our own argument). The proof spends one third of the tolerance on the limit and one third on each approximation error. Intersect this neighborhood with those supplied by continuity of the finitely many earlier functions. Pointwise convergence alone allows xⁿ on \[0, 1\], which fails equicontinuity at 1.

**nLab:** [equicontinuous family of functions](https://ncatlab.org/nlab/show/equicontinuous+family+of+functions). It says: “Nevertheless, given a family of functions, we may have that f(x) is arbitrarily close to f(y) for every function f in the family at once whenever x is sufficiently close to y.”

**Paper or page:** [Uniformly Convergent Sequence of Continuous Functions is Pointwise Equicontinuous](https://proofwiki.org/wiki/Uniformly_Convergent_Sequence_of_Continuous_Functions_is_Pointwise_Equicontinuous). It says: “Then ⟨fₙ⟩ is pointwise equicontinuous.”

**Sources:** none listed. No primary source with a working link was found.

### Positive rows preserve sequence limits

**Remember:** A positive row cannot magnify the error in the late terms.

*Rules out counterexamples.* MSC 40C05 (Matrix methods for summability). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Use a matrix whose rows have nonnegative entries summing to one. Each output term is then a weighted mean. A general matrix with row sums one may have negative weights.

**Problem.** Such a matrix preserves limits of convergent sequences exactly when every fixed column tends to zero.

**How the definition helps.** Nonnegative weights summing to one bound the late contribution by the largest late error (our own). If each column tends to zero, the total error from any fixed initial segment vanishes (our own). Testing a sequence supported at one index proves necessity (our own). Without positivity, the rule xₙ + n(xₙ − xₙ₊₁) has row sums one and vanishing columns (our own). It fails to preserve the limit of xₙ = (−1)ⁿ/n (our own).

**Wikipedia:** [Silverman–Toeplitz theorem](https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem). It says: “A regular matrix summability method is a linear sequence transformation that preserves the limits of convergent sequences.”

**Sources:** none listed. No primary source with a working link was found.

### Cesàro sums give Abel sums

**Remember:** The Abel transform averages Cesàro means with vanishing weight on each fixed prefix.

*True by definition.* MSC 40D25 (Inclusion and equivalence theorems in summability theory), 40G05, 40G10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Number the terms from zero and let cₙ be the mean of the first n + 1 partial sums. For 0 &lt; r &lt; 1, give cₙ weight (n + 1)rⁿ(1 − r)². These weights express the sum of the original terms multiplied by rⁿ as an average of the means (our own).

**Problem.** If the means cₙ tend to L, the series has Abel sum L. The Abel sum is the limit of the damped series as r increases to one.

**How the definition helps.** The weights sum to one and the weight on any fixed prefix tends to zero (our own). Thus averages of convergent means tend to the same limit (our own). Since the Cesàro means are bounded, undoing the two averages shows the original terms grow at most linearly (our own). The damped series thus converges for r below one (our own). Two applications of summation by parts identify it with the weighted average (our own).

**Wikipedia:** [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “Abel summation is interesting in part because it is consistent with but more powerful than Cesàro summation”

**Sources:** none listed. No primary source with a working link was found.

### Small terms let Abel recover convergence

**Remember:** When n times the term vanishes, smoothing changes no limit.

*Rules out counterexamples.* MSC 40E05 (Tauberian theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** An Abel sum is the limit of the series with term n weighted by rⁿ as r increases to one. To recover ordinary convergence, restrict the series to terms whose product with their index tends to zero.

**Problem.** A series with an Abel sum and n a(n) tending to zero converges ordinarily to its Abel sum.

**How the definition helps.** The condition k aₖ → 0 makes the difference between the weighted sum and the ordinary partial sum tend to zero. In our own proof, take r = 1 − 1/n and fix a block after which \|k aₖ\| ≤ ε. Up to index n, the bound 1 − rᵏ ≤ k/n controls the difference, and beyond n the geometric weights do. Our own counterexample is 1 − 1 + 1 − ⋯, which diverges despite its Abel sum of one half.

**Wikipedia:** [Abelian and Tauberian theorems](https://en.wikipedia.org/wiki/Abelian_and_Tauberian_theorems). It says: “if the Abel sum of a series exists and the coefficients are sufficiently small (o(1/n)) then the series converges to the Abel sum.”

**Sources:**

- [Alfred Tauber, Ein Satz aus der Theorie der unendlichen Reihen (1897)](https://doi.org/10.1007/BF01696278)

### Averaging the partial sums recovers every continuous function (Fejér)

**Remember:** Average the partial sums, and the wobbles of the Fourier series cancel.

*Rules out counterexamples.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods), 42A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let s₀, s₁, s₂, … be the partial sums of a series. The series is Cesàro summable to s when the means σₙ = (s₀ + s₁ + … + sₙ)/(n + 1) converge to s. If the partial sums converge to s, so do the means.

**Problem.** Fejér's theorem: the Cesàro means of the Fourier series of a continuous 2π-periodic function converge to it uniformly.

**How the definition helps.** Averaging the partial sums smooths out the failures of ordinary convergence, and it loses nothing. With ordinary partial sums the statement is false, since some continuous functions have a Fourier series that diverges at a point, as du Bois-Reymond showed in 1873 (our own detail). Our own remark: the Dirichlet kernel for the partial sums is not positive and has unbounded L¹ norms, while the Fejér kernel for the means is positive. Because Cesàro summation gives the ordinary sum whenever that exists, nothing is lost.

**Wikipedia:** [Fejér's theorem](https://en.wikipedia.org/wiki/Fej%C3%A9r%27s_theorem), [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series). It says: “Sadly however, the theorem does not work in a general sense when we replace the sequence σₙ(f,x) with sₙ(f,x). This is because there exist functions whose Fourier series fails to converge at some point.”

**Sources:**

- [L. Fejér, Untersuchungen über Fouriersche Reihen, Math. Ann. 58 (1904), 51–69, doi:10.1007/BF01447779](https://doi.org/10.1007/BF01447779)

### Euler differences truncate polynomial sums

**Remember:** Each forward difference lowers a polynomial’s degree until nothing remains.

*True by definition.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Start with a series whose nth term is (−1)ⁿaₙ, counting from zero. The zeroth difference is the original sequence. Form each next difference by subtracting each entry from its successor. Euler summation weights the first entry of difference number n by (−1)ⁿ/2⁽ⁿ⁺¹⁾ and adds the results.

**Problem.** The Euler sum of an alternating polynomial sequence of degree d uses only the first d + 1 differences.

**How the definition helps.** Each forward difference lowers the polynomial degree until all entries vanish (our own). Only differences numbered zero through d can contribute. Ordinary partial sums can oscillate even for the constant polynomial one (our own). Identifying the weighted difference sum with the ordinary sum when the original series converges requires the Euler transformation theorem (our own).

**Wikipedia:** [Euler summation](https://en.wikipedia.org/wiki/Euler_summation). It says: “the inner sum would be zero for i &gt; k, so in this case Euler summation reduces an infinite series to a finite sum.”

**Sources:** none listed. No primary source with a working link was found.

### Abel sums multiply under Cauchy products

**Remember:** Multiply while r is below one, then take the limit.

*True by definition. Confidence: medium.* MSC 40G10 (Abel, Borel and power series methods), 40B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Number the terms from zero and multiply term n by rⁿ for 0 ≤ r &lt; 1. Abel summability requires convergence for every such r and a finite limit as r increases to one. That limit is the Abel sum. The Cauchy product groups products of terms whose indices have the same sum.

**Problem.** The Cauchy product of two Abel-summable series is Abel-summable to the product of their Abel sums.

**How the definition helps.** For r below one, the damped power series converge absolutely and their coefficients multiply by the Cauchy product rule (our own). Taking the finite limits gives the stated product (our own). Abel’s limit theorem carries the work of identifying Abel sums with ordinary sums whenever the latter exist (our own).

**Paper or page:** [Abel's Limit Theorem](https://proofwiki.org/wiki/Abel's_Limit_Theorem). It says: “limₓ→₁⁻ (∑ from k = 0 to ∞ aₖxᵏ) = ∑ from k = 0 to ∞ aₖ”

**Sources:** none listed. No primary source with a working link was found.

### Borel summation handles alternating factorials

**Remember:** Divide out the factorials before you try to sum.

*Makes the theorem clean to state or prove.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Divide coefficient number n by n! and form the resulting power series in t, called the Borel transform. It must converge near zero and extend along the positive real axis through overlapping power series. Integrate that extension against exp(−t) from zero to infinity. If the integral converges, its value is the Borel sum.

**Problem.** Take the alternating series of n! starting at n = 0. Its Borel sum is the integral of exp(−t)/(1 + t) from zero to infinity.

**How the definition helps.** The transform is geometric near zero, so it extends as 1/(1 + t) for positive t (our own). The resulting integral converges by comparison with exp(−t) (our own). The work moves from ordinary convergence to continuing and integrating the transform (our own).

**Wikipedia:** [Borel summation](https://en.wikipedia.org/wiki/Borel_summation). It says: “so the original divergent series is Borel summable for all such z.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric weights make Abel summation regular

**Remember:** Abel weights leave every fixed initial block behind.

*Makes the theorem clean to state or prove.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a series starting at index zero, multiply term n by rⁿ, where 0 &lt; r &lt; 1. The Abel sum is the limit of these weighted sums as r increases to one, when that limit exists.

**Problem.** If a real or complex series converges ordinarily, it has the same Abel sum.

**How the definition helps.** Rewriting the weighted sum as an average of partial sums makes the ordinary limit visible. Summation by parts assigns partial sum n the weight (1 − r)rⁿ. In our own explanation, these weights add to one and every fixed initial block loses its weight as r approaches one. All later partial sums are close to the ordinary limit.

**Wikipedia:** [Abel's theorem](https://en.wikipedia.org/wiki/Abel%27s_theorem). It says: “Then substituting aₖ = sₖ − sₖ₋₁ and performing a simple manipulation of the series (summation by parts) results in”

**Sources:** none listed. No primary source with a working link was found.

### Absolute summability forces countable support

**Remember:** Only finitely many magnitudes can exceed each positive threshold.

*True by definition.* MSC 40J05 (Summability in abstract structures), 40A05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A family is absolutely summable if all its finite sums of magnitudes have a common upper bound. This definition needs no enumeration of the indices.

**Problem.** An absolutely summable family of real numbers has at most countably many nonzero terms.

**How the definition helps.** For any positive threshold, too many terms of at least that size would exceed the common bound (our own). All nonzero terms lie in the union of those finite sets for thresholds 1/n (our own). The work moves to proving that the finite-sum bound gives the usual absolute convergence after enumeration (our own).

**Wikipedia:** [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “the sum of f over X is absolutely convergent, then f takes non-zero values on a set that is at most countable”

**Sources:** none listed. No primary source with a working link was found.

### Unconditional convergence survives taking subseries

**Remember:** Any finite tail of a subseries was already a finite tail.

*True by definition.* MSC 40J05 (Summability in abstract structures), 40A05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A series satisfies the unordered Cauchy condition if every finite sum outside a large enough fixed finite set is small. The set may depend on the chosen error bound. In a complete normed space, this condition is equivalent to convergence under every rearrangement.

**Problem.** In a complete normed space, every subseries of an unconditionally convergent series converges under every rearrangement.

**How the definition helps.** Every finite sum of terms far out in a subseries obeys the original bound (our own). Completeness turns the bound back into convergence (our own). The work goes into the equivalence with the rearrangement definition (our own).

**Paper or page:** [Infinite Subseries of Unconditionally Convergent Series is Unconditionally Convergent](https://proofwiki.org/wiki/Infinite_Subseries_of_Unconditionally_Convergent_Series_is_Unconditionally_Convergent). It says: “∑ over n ∈ A xₙ = ∑ from n = 1 to ∞ χ<sub>A</sub>(n)xₙ is unconditionally convergent”

**Sources:** none listed. No primary source with a working link was found.

### Unordered sums over index sets split over disjoint pieces

**Remember:** Sum over finite subsets, and the order of terms stops mattering.

*True by definition.* MSC 40A05 (Convergence and divergence of series and sequences), 54A20, 54H15. arXiv math.CA, math.GN. Level 3: graduate.

**Definition.** A generalized sum of a family (gₖ) indexed by any set K is a limit of finite partial sums. The limit is taken over the finite subsets of K, ordered by inclusion. It uses no order on K.

**Problem.** Let G be a commutative topological semigroup, which has a continuous addition. Let I and J be disjoint index sets, and let the generalized sums over I and over J converge. Then the sum over I ∪ J converges and equals the sum of the two sums.

**How the definition helps.** Because the definition uses all finite subsets and no ordering, rearranging the terms cannot change the sum. A finite subset of I ∪ J splits into a finite part of I and a finite part of J, so the theorem needs only the continuity of addition. Our own comparison is with ordinary series in ℝ, where a conditionally convergent series can be rearranged to have any real sum. In ℝ, a family has a generalized sum exactly when it is absolutely summable (our own).

**Paper or page:** [Generalized Sum over Union of Disjoint Index Sets](https://proofwiki.org/wiki/Generalized_Sum_over_Union_of_Disjoint_Index_Sets). It says: “the generalized sum ∑ₖ gₖ converges and: ∑ₖ gₖ = (∑ᵢ gᵢ) + (∑ⱼ gⱼ)”

**Sources:**

- [ProofWiki, Generalized Sum over Union of Disjoint Index Sets](https://proofwiki.org/wiki/Generalized_Sum_over_Union_of_Disjoint_Index_Sets)

### Regular Nørlund means forget prefixes

**Remember:** A regular Nørlund average eventually forgets each fixed partial sum.

*Rules out counterexamples.* MSC 40G05 (Cesàro, Euler, Nörlund and Hausdorff methods). arXiv math.CA. Level 3: graduate.

**Definition.** Choose positive weights p₀, p₁, … and let Pₙ be their sum through index n. The Nørlund average through n weights the oldest partial sum by pₙ/Pₙ, the next by pₙ₋₁/Pₙ, and so on.

**Problem.** These averages preserve every ordinary limit exactly when pₙ/Pₙ tends to zero.

**How the definition helps.** The weight pₙ/Pₙ on the first partial sum is the only obstruction (our own proof). The sequence 1, 0, 0, … tends to zero but has average pₙ/Pₙ, so the condition is necessary. Conversely, since the totals increase, a fixed index k has weight pₙ₋ₖ/Pₙ ≤ pₙ₋ₖ/Pₙ₋ₖ, which tends to zero. Doubling weights pₙ = 2ⁿ leave half the mass on the first term in the limit.

**Wikipedia:** [Divergent series](https://en.wikipedia.org/wiki/Divergent_series). It says: “The Nørlund mean is regular, linear, and stable.”

**Paper or page:** [Approximation by Nörlund means with respect to Vilenkin system in Lebesgue spaces](https://arxiv.org/abs/2312.00810). It says: “Nörlund means generated by non-decreasing sequence {qₖ: k ∈ ℕ} satisfying regularity condition”

**Sources:** none listed. No primary source with a working link was found.

### Borel agreement needs endpoint decay

**Remember:** The two Borel methods differ by the weighted transform at the endpoint.

*Rules out counterexamples.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 3: graduate.

**Definition.** For terms aₙ starting at index zero, form the entire function B(t) by summing aₙtⁿ/n!. Integral Borel summation integrates exp(−t)B(t) from zero to infinity. Weak Borel summation instead weights the partial sums by exp(−t)tⁿ/n! and takes the limit as t grows.

**Problem.** Assume the integral Borel sum exists. The weak Borel sum exists exactly when exp(−t)B(t) tends to zero, and then both sums agree.

**How the definition helps.** Our own calculation isolates the endpoint term that can prevent agreement. At parameter T the weak average equals the integral through T plus exp(−T)B(T), by differentiating the exponential series. If both sums exist, the endpoint term has a limit. Convergence of its improper integral forces that limit to be zero. Our own example takes B(t) = exp(t) sin(t²). The integral of sin(t²) converges, although sin(t²) has no limit.

**Wikipedia:** [Borel summation](https://en.wikipedia.org/wiki/Borel_summation). It says: “Any series A(z) that is weak Borel summable at z ∈ ℂ is also Borel summable at z.”

**Sources:** none listed. No primary source with a working link was found.

### Poisson averages preserve ordinary sums

**Remember:** Poisson weights eventually leave every fixed finite set of indices.

*True by definition.* MSC 40G10 (Abel, Borel and power series methods). arXiv math.CA. Level 3: graduate.

**Definition.** Write sₙ for the partial sum through index n, starting at zero. Weak Borel summation averages these sums with weights exp(−t)tⁿ/n!, then takes the limit as t tends to infinity. These weights form a probability distribution for each positive t.

**Problem.** Weak Borel summation gives an ordinarily convergent series its ordinary sum.

**How the definition helps.** Reading the defining weights as probabilities makes the error a weighted average in our own proof. Each fixed weight tends to zero, so every finite prefix contributes vanishing error. Beyond a sufficiently long prefix, every partial sum lies within any prescribed tolerance of the ordinary sum. The tail weights total at most one. The only estimate needed beyond ordinary convergence is the decay of each fixed weight.

**Wikipedia:** [Borel summation](https://en.wikipedia.org/wiki/Borel_summation). It says: “A weak form of Borel's summation method defines the Borel sum of A to be”

**Sources:** none listed. No primary source with a working link was found.

### Banach limits average periodic sequences

**Remember:** Average all phase shifts and a periodic sequence becomes constant.

*True by definition.* MSC 40H05 (Functional analytic methods in summability). arXiv math.CA. Level 3: graduate.

**Definition.** A Banach limit extends the ordinary limit linearly to bounded real sequences. It is positive, so a sequence of nonnegative terms has a nonnegative value. Its value is unchanged when the first entry is dropped. An arbitrary linear extension need not respect a shift.

**Problem.** Every Banach limit of a periodic sequence equals the mean over one period.

**How the definition helps.** Shift invariance gives every shift in a period the same Banach limit (our own). Averaging those shifts produces a constant sequence equal to the period mean (our own). Linearity gives that constant the original Banach limit (our own). The existence of a positive, shift-invariant extension requires a separate theorem (our own).

**Wikipedia:** [Banach limit](https://en.wikipedia.org/wiki/Banach_limit). It says: “In other words, a Banach limit extends the usual limits, is linear, shift-invariant and positive.”

**Sources:** none listed. No primary source with a working link was found.

### Moving averages detect almost convergence

**Remember:** A long block must see the same mean wherever it starts.

*Rules out counterexamples.* MSC 40H05 (Functional analytic methods in summability), 40G05. arXiv math.CA. Level 3: graduate.

**Definition.** A Banach limit assigns a number linearly to each bounded real sequence and agrees with the ordinary limit whenever it exists. It assigns nonnegative values to nonnegative sequences and ignores deletion of the first term. A sequence is almost convergent to L when every Banach limit gives it value L.

**Problem.** A bounded real sequence is almost convergent to L exactly when its long block averages approach L uniformly over all starting positions.

**How the definition helps.** A block average is an average of shifts, so every Banach limit preserves its value (our own). Uniform convergence forces that value to be the limit of the averages (our own). The converse is Lorentz’s theorem. Put ones from n² through n² + ⌊√n⌋ for each positive n, and zeros elsewhere (our own). Initial means tend to zero, but arbitrarily long blocks consist only of ones (our own).

**Wikipedia:** [Almost convergent sequence](https://en.wikipedia.org/wiki/Almost_convergent_sequence). It says: “Lorentz proved that \\((x<sub>n</sub>)\\) is almost convergent if and only if \\(\\lim\\limits<sub>p\\to\\infty</sub> \\frac{x<sub>n</sub>+\\ldots+x<sub>n+p-1</sub>}p=L\\) uniformly in \\(n\\).”

**Sources:**

- [G. G. Lorentz, A contribution to the theory of divergent sequences (1948).](https://doi.org/10.1007/bf02393648)

### Ideal convergence frees Olivier's theorem from monotonicity

**Remember:** Ignore a set of indices with finite harmonic sum, and n aₙ → 0.

*Rules out counterexamples.* MSC 40A35 (Ideal and statistical convergence), 26D15. arXiv math.CA. Level 4: research.

**Definition.** An ideal on ℕ is a family of sets of indices that counts as negligible; it is closed under subsets and finite unions. A sequence tends to L along the ideal when, for each ε &gt; 0, the n with \|xₙ − L\| ≥ ε are negligible. The summable ideal holds the sets A for which the sum of 1/n over n in A is finite.

**Problem.** Let I be an ideal on ℕ. Then n aₙ → 0 along I for every convergent series ∑ aₙ of positive terms exactly when I contains the summable ideal. This removes the monotonicity hypothesis of Olivier's theorem.

**How the definition helps.** Ideal convergence ignores a negligible set of indices, and the set where n aₙ stays large always has a finite harmonic sum. In our own one-line proof, if n aₙ ≥ ε on A, then the sum of 1/n over A is at most (1/ε)·∑ aₙ. Our own counterexample to plain convergence takes aₙ = 1/n on the squares and aₙ = 1/n² elsewhere. The series converges, but n aₙ = 1 on the squares, a set in the summable ideal.

**Paper or page:** [The ideal test for the divergence of a series](https://arxiv.org/abs/2307.01506v1), [The ideal test for the divergence of a series](https://arxiv.org/abs/2307.01506v1). It says: “we either drop the monotonicity assumption completely or we relax it to the monotonicity on a large set of indices. In both cases, the convergence of (n aₙ) is replaced by ideal convergence.”

**Sources:**

- [Rafał Filipów, Adam Kwela, Jacek Tryba, The ideal test for the divergence of a series, Rev. R. Acad. Cienc. Exactas Fís. Nat. Ser. A Mat. RACSAM 117 (2023), no. 3, Paper No. 98, arXiv:2307.01506](https://doi.org/10.1007/s13398-023-01430-w)

### Keeping original indices makes subsequences of ideal-convergent sequences converge

**Remember:** Keep the original indices when restricting an ideal.

*True by definition. Confidence: low.* MSC 40A35 (Ideal and statistical convergence), 54A20. arXiv math.GN. Level 4: research.

**Definition.** An ideal on the natural numbers is a family of index sets, closed under subsets and finite unions, whose members count as negligible. A sequence converges to x for the ideal if, for each neighborhood of x, the indices of terms outside it form a negligible set. A set of indices M is nonthin if it is not negligible. On M, the restricted ideal consists of the negligible sets inside M, and the subsequence keeps its original indices.

**Problem.** Let a sequence converge to x for an ideal, and let M be a nonthin set of indices. Then the subsequence on M, with its original indices, converges to x for the restricted ideal on M.

**How the definition helps.** Keeping the original indices makes the result true by definition (our own statement and proof). The bad indices of the subsequence are the original bad indices inside M, so they are negligible inside M. Our own example shows what renumbering breaks. The indicator of the squares converges to zero for the ideal of density-zero sets, but renumbered on the squares it is constantly one.

**Paper or page:** [Compactness with ideals](https://arxiv.org/abs/2107.00050v1). It says: “subsequence of an ideal convergent sequence may fail to be ideal convergent with respect to same ideal.”

**Sources:**

- [Manoranjan Singha, Sima Roy, Compactness with ideals, arXiv:2107.00050v1 (2021)](https://arxiv.org/abs/2107.00050v1)
