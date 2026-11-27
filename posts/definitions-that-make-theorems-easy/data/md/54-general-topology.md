### Interiors commute with finite intersections

**Remember:** Intersect finitely many largest open pieces to get the largest open piece.

*True by definition.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)). arXiv math.GN. Level 1: early undergraduate.

**Definition.** The interior of a set is its largest open subset. Another description keeps the points that have a whole open neighborhood inside the set.

**Problem.** The interior of a finite intersection is the intersection of the interiors.

**How the definition helps.** A finite intersection of interiors is open and lies inside the intersection of the sets (our own). Conversely, the interior of the intersection is open and lies inside every set, hence inside every interior (our own).

**Paper or page:** [Interior of Finite Intersection equals Intersection of Interiors](https://proofwiki.org/wiki/Interior_of_Finite_Intersection_equals_Intersection_of_Interiors). It says: “(⋂ᵢ₌₁ⁿ Hᵢ)° = ⋂ᵢ₌₁ⁿ Hᵢ°”

**Sources:** none listed. No primary source with a working link was found.

### Subspace topology preserves continuity into subsets

**Remember:** Intersecting an open set with the target subspace leaves its preimage unchanged.

*True by definition.* MSC 54B05 (Subspaces in general topology). arXiv math.GN. Level 1: early undergraduate.

**Definition.** The subspace topology on a subset S makes its open sets precisely the intersections of S with open sets in the larger space. This is the coarsest topology making the inclusion continuous.

**Problem.** A map into a subspace is continuous exactly when the same map into the larger space is continuous.

**How the definition helps.** Intersecting an open set with the target subset leaves its preimage unchanged. Our own proof uses this identity to identify the two continuity tests. To recover the description using the coarsest topology, first check that the intersections form a topology. Continuity of the inclusion requires every one of those intersections to be open.

**nLab:** [subspace topology](https://ncatlab.org/nlab/show/subspace+topology). It says: “is continuous precisely if the composition i ∘ f is continuous as a function to X”

**Sources:** none listed. No primary source with a working link was found.

### Finite closed pieces preserve continuity

**Remember:** Closed preimages join over finitely many closed pieces.

*True by definition.* MSC 54C05 (Continuous maps), 54E35. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map is continuous if the preimage of every closed set is closed. This is equivalent to continuity defined by distances in metric spaces.

**Problem.** Let finitely many closed sets cover a metric space. A map to another metric space is continuous if its restriction to each set is continuous.

**How the definition helps.** The full preimage of each closed set is the union of its preimages on the pieces (our own). Each such preimage is closed in its piece and hence in the whole space, since the piece is closed (our own). A finite union of closed sets is closed (our own).

**Paper or page:** [Pasting Lemma/Finite Union of Closed Sets](https://proofwiki.org/wiki/Pasting_Lemma/Finite_Union_of_Closed_Sets). It says: “Let I be a finite indexing set.”

**Sources:** none listed. No primary source with a working link was found.

### Open covers let continuity glue

**Remember:** Open pieces stay open when you join them.

*True by definition.* MSC 54C05 (Continuous maps). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map is continuous if the preimage of every open set is open. In a subspace S, the open sets are the intersections of S with open sets of the ambient space.

**Problem.** A map that is continuous on each member of an open cover is continuous on the whole space.

**How the definition helps.** Each open target set has a preimage that is open on every piece (our own). Each piece is itself open, so those preimages are open in the domain (our own). Their union is the full preimage (our own).

**Paper or page:** [Pasting Lemma/Union of Open Sets](https://proofwiki.org/wiki/Pasting_Lemma/Union_of_Open_Sets). It says: “that is, f ↾ C is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Open preimages make continuity compose

**Remember:** Pull an open set back one map at a time.

*True by definition.* MSC 54C05 (Continuous maps). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map is continuous if the preimage of each open set is open. In metric spaces the usual alternative tests distances at each point with epsilon and delta.

**Problem.** The composite of two continuous maps is continuous.

**How the definition helps.** The open-set definition turns the composite test into two successive preimages. In our own proof, the second map pulls an open set back to an open set. The first map does the same. For metric spaces, the separate step is proving that the open-set test agrees with the pointwise distance test.

**Paper or page:** [Composite of Continuous Mappings is Continuous](https://proofwiki.org/wiki/Composite_of_Continuous_Mappings_is_Continuous). It says: “Then the composite mapping g ∘ f: T₁ → T₃ is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness keeps nested intersections nonempty

**Remember:** If the complements cover, finitely many already cover.

*True by definition.* MSC 54D30 (Compactness). arXiv math.GN. Level 1: early undergraduate.

**Definition.** Use this test for compactness. If every finite selection from a family of closed sets has a common point, the whole family has a common point. The usual test asks whether every open cover contains a finite subcover.

**Problem.** In a compact space, every nested sequence of nonempty closed sets has a common point.

**How the definition helps.** The closed-set test reduces the nested case to checking the smallest set in each finite selection. In our own proof, that set is nonempty and lies in every selected set. Taking complements proves that the closed-set test agrees with the open-cover test.

**Paper or page:** [Intersection of Closed Subsets satisfying Finite Intersection Property in Compact Space](https://proofwiki.org/wiki/Intersection_of_Closed_Subsets_satisfying_Finite_Intersection_Property_in_Compact_Space). It says: “Suppose that 𝓕 satisfies the finite intersection property. That is, the intersection of every finite subset is non-empty. Then the intersection of 𝓕 is non-empty.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness survives continuous images

**Remember:** Pull back the cover and keep the finite part.

*True by definition.* MSC 54D30 (Compactness). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A space is compact if every family of open sets covering it contains a finite family that still covers it. In a metric space, an equivalent test asks whether every sequence has a subsequence converging in the space.

**Problem.** A continuous image of a compact space is compact.

**How the definition helps.** The cover definition lets us pull an open cover of the image back to an open cover of the domain. In our own proof, compactness selects finitely many of these preimages. The corresponding original sets cover every image point. The separate metric-space theorem identifies this cover test with the subsequence test.

**Paper or page:** [Continuous Image of Compact Space is Compact](https://proofwiki.org/wiki/Continuous_Image_of_Compact_Space_is_Compact). It says: “If T₁ is compact then so is its image f\[T₁\] under f.”

**Sources:** none listed. No primary source with a working link was found.

### Adding coordinate distances makes distance itself Lipschitz

**Remember:** Distance can change by at most the sum of the two endpoint moves.

*True by definition. Confidence: medium.* MSC 54E35 (Metric spaces, metrizability), 54E40. arXiv math.GN. Level 1: early undergraduate.

**Definition.** On pairs of points from a metric space, the sum metric adds the distances in the two coordinates. Unlike the maximum metric, it counts both changes in full.

**Problem.** The distance function on pairs of points is 1-Lipschitz for the sum metric. This means that its change is at most the sum distance between the pairs.

**How the definition helps.** Adding the two endpoint moves gives exactly the triangle inequality bound (our own). Move one endpoint, then the other, and reverse the moves to bound the absolute change (our own). Using the larger endpoint move instead gives a factor of two (our own).

**Paper or page:** [Distance Function of Metric Space is Continuous](https://proofwiki.org/wiki/Distance_Function_of_Metric_Space_is_Continuous). It says: “Then the distance function d: A × A → ℝ is a continuous mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Distance neighborhoods express every closed set as a countable intersection

**Remember:** A closed set is the part that survives every narrowing distance neighborhood.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** For a nonempty set A, the distance from x to A is the greatest lower bound of its distances to points of A. The radius-r neighborhood of A consists of points whose distance to A is less than r.

**Problem.** Every nonempty closed set in a metric space is the intersection of its neighborhoods of radii 1, 1/2, 1/3, and so on. In particular, every closed set is a countable intersection of open sets.

**How the definition helps.** A point belongs to every such neighborhood exactly when its distance to A is zero (our own). Then every ball about that point meets A, so closedness puts it in A (our own). The triangle inequality makes distance to A continuous, so each neighborhood is open (our own). For the empty set, intersect copies of the empty open set (our own).

**Paper or page:** [Closed Set in Metric Space is G-Delta](https://proofwiki.org/wiki/Closed_Set_in_Metric_Space_is_G-Delta). It says: “Then F is a Gδ set of X.”

**Sources:** none listed. No primary source with a working link was found.

### Distance to a set needs no nearest point

**Remember:** Take the infimum over all points, even when none is nearest.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** Define distance to a nonempty set as the infimum of the distances to its points. The infimum is the greatest lower bound, which need not come from a nearest point.

**Problem.** Distance to a nonempty subset of a metric space changes by at most the distance moved.

**How the definition helps.** The triangle inequality bounds the distance through each point of the set, so it also bounds their infimum (our own). Swap the starting and ending points to get the other bound (our own). The work shifts from finding a nearest point to using the infimum and the triangle inequality (our own). For example, zero has distance zero to (0, 1), but no point there attains it (our own).

**Paper or page:** [Triangle Inequality on Distance from Point to Subset](https://proofwiki.org/wiki/Triangle_Inequality_on_Distance_from_Point_to_Subset). It says: “∀ x, y ∈ A: d(x, H) ≤ d(x, y) + d(y, H)”

**Sources:** none listed. No primary source with a working link was found.

### Distance zero only for equal points makes every metric space Hausdorff

**Remember:** Points at distance r &gt; 0 sit in disjoint balls of radius r/2.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability), 54D10, 54A20. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric on X is a function d from X × X to \[0,∞) with d(x,y) = 0 exactly when x = y. For all x,y,z ∈ X, it satisfies d(x,y) = d(y,x) and d(x,z) ≤ d(x,y) + d(y,z). A Hausdorff space gives each pair of distinct points disjoint open neighborhoods.

**Problem.** Every metrizable space is Hausdorff. A space is metrizable when some metric gives its topology.

**How the definition helps.** Distinct points have positive distance r, so their open radius-r/2 balls are disjoint by the triangle inequality (our own). In a partition topology, any two points of the same block have identical neighborhoods (our own). A pseudometric can assign them distance zero, while a compatible metric would separate them (our own).

**Paper or page:** [Metrizable Space is Hausdorff](https://proofwiki.org/wiki/Metrizable_Space_is_Hausdorff), [Partition Space is Pseudometrizable](https://proofwiki.org/wiki/Partition_Space_is_Pseudometrizable), [Partition Topology is not Hausdorff](https://proofwiki.org/wiki/Partition_Topology_is_not_Hausdorff). It says: “Let T be a metrizable topological space. Then T is a T₂ (Hausdorff) space.”

**Sources:**

- [ProofWiki, Metrizable Space is Hausdorff](https://proofwiki.org/wiki/Metrizable_Space_is_Hausdorff)
- [ProofWiki, Partition Space is Pseudometrizable](https://proofwiki.org/wiki/Partition_Space_is_Pseudometrizable)
- [ProofWiki, Partition Topology is not Hausdorff](https://proofwiki.org/wiki/Partition_Topology_is_not_Hausdorff)

### Maximum distance gives coordinatewise convergence

**Remember:** All coordinates are close when the largest distance is small.

*True by definition. Confidence: medium.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** For a finite product of metric spaces, take the distance to be the largest coordinate distance. On ordinary Euclidean space another choice is the square root of the sum of squared coordinate distances.

**Problem.** In a finite product with the maximum metric, convergence is equivalent to convergence in every coordinate (our own).

**How the definition helps.** A ball for the maximum distance requires every coordinate distance to be below the same radius (our own). If each coordinate converges, the largest of the finitely many cutoffs works for all coordinates (our own). Conversely, bounding the maximum bounds each coordinate (our own). To recover the Euclidean statement, compare the maximum distance with the usual Euclidean distance (our own).

**Paper or page:** [Chebyshev Distance is Metric](https://proofwiki.org/wiki/Chebyshev_Distance_is_Metric). It says: “Then d∞ is a metric.”

**Sources:** none listed. No primary source with a working link was found.

### Restricted distances give the subspace open sets

**Remember:** A ball in a subset is an original ball cut down to that subset.

*True by definition. Confidence: medium.* MSC 54E35 (Metric spaces, metrizability), 54B05. arXiv math.GN. Level 1: early undergraduate.

**Definition.** The metric on a subset A keeps the original distances between points in A. A set in A is open for this metric if it is a union of balls in A.

**Problem.** The open sets in the restricted metric on A are exactly the intersections of A with open sets of the original space.

**How the definition helps.** Writing open sets as unions of balls lets us intersect each ball with A (our own). A ball centered in A becomes a ball of the same radius in A (our own). Thus every relatively open set is A intersected with a union of original balls (our own). Conversely, each point of an original open set has a ball inside it, which restricts to a ball in A (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “An open set is a set which is a neighborhood of all its points.”

**Paper or page:** [Subspace of Metric Space is Metric Space](https://proofwiki.org/wiki/Subspace_of_Metric_Space_is_Metric_Space). It says: “is a metric on H.”

**Sources:** none listed. No primary source with a working link was found.

### Small diameter covers make total boundedness pass to subsets

**Remember:** Cut the cover down to a subset without enlarging any piece.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A space is totally bounded if, for every ε &gt; 0, finitely many sets of diameter less than ε cover it. Diameter is the least upper bound on all pairwise distances in a set.

**Problem.** Every subset of a totally bounded metric space is totally bounded for the restricted metric.

**How the definition helps.** Intersect each covering piece with the subset and discard empty pieces (our own). Each remaining piece keeps its diameter bound (our own). To recover a ball cover, center a radius-ε ball at one point of each piece (our own). Conversely, balls of radius ε/3 have diameter below ε (our own).

**nLab:** [totally bounded space](https://ncatlab.org/nlab/show/totally+bounded+space). It says: “there is a finite open cover 𝒞 of X such that every set in 𝒞 has diameter less than ε.”

**Paper or page:** [Subset of Totally Bounded Metric Space is Totally Bounded](https://proofwiki.org/wiki/Subset_of_Totally_Bounded_Metric_Space_is_Totally_Bounded). It says: “Then A is totally bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Truncating distances keeps both the topology and completeness

**Remember:** Cap large distances and keep all small distance tests.

*True by definition.* MSC 54E35 (Metric spaces, metrizability), 54E50. arXiv math.GN. Level 1: early undergraduate.

**Definition.** The truncated metric replaces each distance d(x, y) by min(1, d(x, y)). Its values are bounded by one.

**Problem.** The truncated metric has the same open sets and preserves completeness.

**How the definition helps.** Both metrics give the same balls of every radius below one (our own). These balls determine the open sets and the limits of sequences (our own). They also detect Cauchy sequences, whose later terms must become arbitrarily close together (our own). The triangle inequality survives because capping a sum at one gives at most the sum of the capped terms (our own).

**Paper or page:** [Standard Bounded Metric is Metric/Topological Equivalence](https://proofwiki.org/wiki/Standard_Bounded_Metric_is_Metric/Topological_Equivalence). It says: “d̄ is topologically equivalent to d.”

**Sources:** none listed. No primary source with a working link was found.

### Unions of balls make arbitrary unions open

**Remember:** A union of unions of balls is still a union of balls.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** In a metric space, an open set is any union of open balls. The open ball of radius r about x contains exactly the points at distance less than r from x.

**Problem.** Every union of open sets in a metric space is open.

**How the definition helps.** The union just collects all the balls used by its members (our own). The work moves into proving the equivalent test that each point of an open set has a ball inside it (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “the open sets of M are exactly the unions of open balls.”

**Paper or page:** [Union of Open Sets of Metric Space is Open](https://proofwiki.org/wiki/Union_of_Open_Sets_of_Metric_Space_is_Open). It says: “The union of a set of open sets of M is open in M.”

**Sources:** none listed. No primary source with a working link was found.

### Zero distance only between equal points makes limits unique

**Remember:** Only a true metric tells two points apart, so limits are unique.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability), 54D10, 54A20. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric on X assigns a nonnegative real distance to each pair, symmetrically and with d(x,z) ≤ d(x,y) + d(y,z) for all x,y,z. It satisfies d(x,y) = 0 exactly when x = y. A pseudometric also permits distinct points at distance zero.

**Problem.** In a metric space, a sequence has at most one limit.

**How the definition helps.** If a sequence converges to x and y, then d(x,y) ≤ d(x,xₙ) + d(xₙ,y) tends to zero on the right (our own). Hence d(x,y) = 0 and x = y (our own). In a two-point pseudometric space with all distances zero, a constant sequence converges to both points (our own).

**Paper or page:** [Convergent Sequence in Metric Space has Unique Limit](https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit), [Pseudometric Space is Metric Space iff Kolmogorov](https://proofwiki.org/wiki/Pseudometric_Space_is_Metric_Space_iff_Kolmogorov). It says: “Let ⟨xₙ⟩ be a sequence in M. Then ⟨xₙ⟩ can have at most one limit in M.”

**Sources:**

- [ProofWiki, Convergent Sequence in Metric Space has Unique Limit](https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit)
- [ProofWiki, Pseudometric Space is Metric Space iff Kolmogorov](https://proofwiki.org/wiki/Pseudometric_Space_is_Metric_Space_iff_Kolmogorov)

### Uniform continuity preserves Cauchy sequences

**Remember:** One distance bound works for the whole tail.

*Rules out counterexamples.* MSC 54E40 (Special maps on metric spaces), 26A15. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map f between metric spaces is uniformly continuous if every ε &gt; 0 admits δ &gt; 0 with the following property. For all domain points x,y, d(x,y) &lt; δ implies d(f(x),f(y)) &lt; ε.

**Problem.** A uniformly continuous map sends every Cauchy sequence to a Cauchy sequence.

**How the definition helps.** The same input bound works for every pair in the tail, so every output pair is close enough (our own). The work in an application moves to finding an input bound independent of the starting point (our own). Ordinary continuity allows x ↦ 1/x on (0, 1\], which sends the Cauchy sequence 1/n to the unbounded sequence n (our own).

**nLab:** [uniformly continuous map](https://ncatlab.org/nlab/show/uniformly+continuous+map). It says: “The concept of uniformly continuous map f is based on the same intuition but a different formalisation: first you pick how nearby you want the points to be, then you pick two points sufficiently nearby.”

**Wikipedia:** [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “In this setting, it is also true that uniformly continuous maps transform Cauchy sequences into Cauchy sequences.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness makes the distance infimum attainable

**Remember:** Compactness turns a sequence of nearly nearest points into a nearest point.

*Rules out counterexamples.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric space is sequentially compact if every sequence has a subsequence converging to a point in the space. In metric spaces this is equivalent to compactness.

**Problem.** Every point has a nearest point in each nonempty compact subset of a metric space.

**How the definition helps.** Sequential compactness keeps a limit of nearly nearest points inside the set (our own). Choose points whose distances approach the greatest lower bound of all possible distances (our own). A subsequence converges in the set, and continuity of distance gives its limit that exact distance (our own). For the open interval (0, 1), distances to zero approach zero without reaching it (our own).

**Paper or page:** [Distance from Point to Compact Set in Metric Space is Attained](https://proofwiki.org/wiki/Distance_from_Point_to_Compact_Set_in_Metric_Space_is_Attained). It says: “d(x, A) = d(x, α)”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy sequences test convergence without knowing the limit

**Remember:** Every sufficiently late pair is close, and completeness supplies the limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E50 (Complete metric spaces), 40A05. arXiv math.GN, math.CA. Level 1: early undergraduate.

**Definition.** A sequence (xₙ) is Cauchy if every ε &gt; 0 admits an index N with d(xₘ,xₙ) &lt; ε for all m,n ≥ N. A metric space is complete if every Cauchy sequence converges in it.

**Problem.** A normed space is complete exactly when every absolutely convergent series in it converges.

**How the definition helps.** Summable norms make the partial sums Cauchy by the triangle inequality, so completeness gives convergence (our own). Conversely, from any Cauchy sequence choose a subsequence whose kth successive difference has norm below 2⁻ᵏ (our own). Those differences form an absolutely summable series, so its convergent partial sums give a convergent subsequence by telescoping (our own). The Cauchy condition gives the whole sequence that same limit (our own).

**Wikipedia:** [Cauchy sequence](https://en.wikipedia.org/wiki/Cauchy_sequence), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “The utility of Cauchy sequences lies in the fact that in a complete metric space (one where all such sequences are known to converge to a limit), the criterion for convergence depends only on the terms of the sequence itself”

**Sources:** none listed. No primary source with a working link was found.

### Sequential closedness keeps subspaces complete

**Remember:** Closed subsets keep their sequence limits.

*True by definition.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A subset of a metric space is closed if it contains the limit of every sequence from the subset that converges in the ambient space. Another test asks whether its complement is open.

**Problem.** A subspace of a complete metric space is complete if and only if it is closed.

**How the definition helps.** Closedness keeps the limit that completeness of the ambient space gives each Cauchy sequence in the subset (our own). Conversely, any convergent sequence from a complete subset is Cauchy, so its unique limit belongs to the subset (our own). The separate step is proving that the two closedness tests agree (our own). At a point whose every ball meets the subset, choose a subset point within distance 1/n for each positive integer n (our own).

**Paper or page:** [Subspace of Complete Metric Space is Closed iff Complete](https://proofwiki.org/wiki/Subspace_of_Complete_Metric_Space_is_Closed_iff_Complete). It says: “Let (M, d) be a complete metric space.”

**Sources:** none listed. No primary source with a working link was found.

### The supremum metric is complete

**Remember:** One worst error measures every point.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 40A30. arXiv math.GN. Level 1: early undergraduate.

**Definition.** For bounded real functions on the same nonempty set, take the supremum of their absolute differences over that set as their distance. Convergence in this metric is uniform convergence.

**Problem.** Every Cauchy sequence for the supremum metric on bounded real functions converges in that metric to a bounded function.

**How the definition helps.** A supremum bound holds at every point, so a Cauchy sequence has pointwise limits by completeness of ℝ (our own). Passing to the limit in one index preserves each non-strict uniform tail bound (our own). This gives uniform convergence, and the limit lies within one unit of a bounded term everywhere (our own).

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “every Cauchy sequence of functions converges uniformly.”

**Paper or page:** [Sequence of Functions is Uniformly Cauchy iff Uniformly Convergent](https://proofwiki.org/wiki/Sequence_of_Functions_is_Uniformly_Cauchy_iff_Uniformly_Convergent). It says: “Let ⟨fₙ⟩ be a sequence of real functions S → ℝ.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform gaps make discrete metric spaces complete

**Remember:** Below the common gap, two points must be the same.

*Rules out counterexamples.* MSC 54E50 (Complete metric spaces), 54E35. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric space is uniformly discrete if all distances between different points have one positive lower bound. Ordinary discreteness only gives a positive gap around each individual point.

**Problem.** Every uniformly discrete metric space is complete, meaning that every Cauchy sequence converges in the space. A discrete space can fail this test.

**How the definition helps.** A Cauchy sequence eventually has every pair of terms closer than the common gap, so its terms eventually coincide (our own). In the usual distance, each point of {1, 1/2, 1/3, …} is isolated (our own). The displayed sequence is Cauchy but approaches zero outside the set (our own).

**Wikipedia:** [Discrete space](https://en.wikipedia.org/wiki/Discrete_space). It says: “The topology underlying a metric space can be discrete, without the metric being uniformly discrete”

**Sources:** none listed. No primary source with a working link was found.

### Uniform shrinking gives fixed points

**Remember:** One shrink factor controls every step.

*Rules out counterexamples.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A contraction has one factor 0 ≤ q &lt; 1 such that d(f(x), f(y)) ≤ q d(x, y) for every pair. The weaker test only asks each distinct pair to get strictly closer.

**Problem.** Every contraction from a nonempty complete metric space to itself has exactly one fixed point.

**How the definition helps.** One factor bounds successive steps by a geometric series, so the iterates are Cauchy (our own). Completeness gives their limit, and continuity makes it a fixed point (our own). Two different fixed points cannot shrink their distance (our own). The map x ↦ x + 1/(x+1) on \[0, ∞) shrinks every distinct pair but has no fixed point (our own).

**Paper or page:** [Banach Fixed-Point Theorem](https://proofwiki.org/wiki/Banach_Fixed-Point_Theorem). It says: “Then there exists a unique fixed point of f.”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly equivalent metrics preserve completeness

**Remember:** Uniform equivalence preserves the same Cauchy sequences.

*Rules out counterexamples. Confidence: medium.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 1: early undergraduate.

**Definition.** Two metrics on the same set are uniformly equivalent if the identity map in each direction is uniformly continuous. Topological equivalence only asks the identity maps to be continuous.

**Problem.** If two metrics are uniformly equivalent, either both are complete or neither is complete.

**How the definition helps.** Each identity map preserves Cauchy sequences and their limits, so completeness transfers in either direction (our own). The work moves to finding distance bounds that work everywhere for the two identity maps (our own). On ℝ, the usual distance and the distance between arctangents give the same open sets (our own). The positive integers are Cauchy only for the latter distance and have no limit in it (our own).

**Wikipedia:** [Equivalence of metrics](https://en.wikipedia.org/wiki/Equivalence_of_metrics). It says: “or all uniformly continuous maps, obtaining uniform equivalence.”

**Sources:** none listed. No primary source with a working link was found.

### Regular open sets form a Boolean algebra where open sets do not

**Remember:** Fill in the cracks of open sets, and complements behave.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)), 06E10. arXiv math.GN, math.LO. Level 2: later undergraduate.

**Definition.** An open set is regular open if it equals the interior of its closure. For example, (0, 1) is regular open in ℝ. But (0, 1) ∪ (1, 2) is not, because the interior of its closure is (0, 2).

**Problem.** The regular open sets of any space X form a complete Boolean algebra. In it, the complement of U is the interior of X ∖ U.

**How the definition helps.** Regular open sets are exactly the open sets fixed by double negation, where negation takes the interior of the complement (our own). The double-negation theorem for complete Heyting algebras makes these fixed points a complete Boolean algebra (our own). Its joins take the interior of the closure of each union (our own).

**Wikipedia:** [Regular open set](https://en.wikipedia.org/wiki/Regular_open_set). It says: “The collection of all regular open sets in X forms a complete Boolean algebra”

**Sources:** none listed. No primary source with a working link was found.

### The boundary obeys the Leibniz rule on closed sets

**Remember:** Boundary is closure minus interior; on closed sets it obeys a product rule.

*Rules out counterexamples.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)), 54B10, 06D20. arXiv math.GN. Level 2: later undergraduate.

**Definition.** In a topological space, the boundary ∂S of a subset S is its closure minus its interior.

**Problem.** For closed subsets A and B, the boundary satisfies the Leibniz rule ∂(A × B) = (∂A × B) ∪ (A × ∂B). It has the same shape as the product rule for derivatives.

**How the definition helps.** For closed factors, the product is closed and its interior is the product of their interiors (our own). Removing that interior leaves precisely the points with at least one coordinate on its factor’s boundary (our own). For A = B = (0,1) in ℝ, the product boundary contains (0,0), which neither proposed term contains (our own).

**nLab:** [boundary](https://ncatlab.org/nlab/show/boundary). It says: “Notice the conclusion must fail if A, B are not closed, since in this case (∂A × B) ∪ (A × ∂B) is not closed (it doesn't include ∂A × ∂B).”

**Sources:**

- [M. Zarycki, Quelque notions fondamentales de l'Analysis Situs au point de vue de l'Algèbre de la Logique, Fundamenta Mathematicae 9 (1927) 3–15](https://matwbn.icm.edu.pl/ksiazki/fm/fm9/fm912.pdf)

### A countable local base lets sequences detect closure

**Remember:** Pick one point from each shrinking neighborhood.

*Rules out counterexamples.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D70. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is first-countable if each point has a countable list of open neighborhoods. Every neighborhood of that point contains one from the list. Taking finite intersections lets us make the list decreasing.

**Problem.** In a first-countable space, a point lies in the closure of a set exactly when some sequence from that set converges to it.

**How the definition helps.** Choose a point of the set from each shrinking neighborhood of the closure point. The resulting sequence eventually enters every neighborhood. In our own counterexample, nonempty open sets in an uncountable space omit at most countably many points. Every neighborhood of x contains other points, yet removing all values of any sequence avoiding x leaves a neighborhood of x.

**Wikipedia:** [First-countable space](https://en.wikipedia.org/wiki/First-countable_space). It says: “every first-countable space is a Fréchet-Urysohn space”

**Sources:** none listed. No primary source with a working link was found.

### Bourbaki's limit of a function gives the chain rule without exceptions

**Remember:** Bourbaki does not puncture the neighbourhood, so f(c) has a vote.

*Rules out counterexamples.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54C05. arXiv math.GN, math.CA. Level 2: later undergraduate.

**Definition.** Let f have domain D and let c belong to the closure of D. Each neighborhood V of a Bourbaki limit L must admit a neighborhood U of c with f(U ∩ D) ⊆ V.

**Problem.** Suppose g tends to b at c and f tends to L at b in Bourbaki’s sense. Then their composite f ∘ g tends to L at c. At a domain point c, f is continuous exactly when f(c) is a Bourbaki limit there.

**How the definition helps.** Pull a neighborhood of L back first through the limit condition for f, then through that for g (our own). This also tests continuity when the candidate limit is the function value (our own). On ℝ take g constantly zero, with f(0) = 0 and f(u) = 1 elsewhere (our own). The punctured limit of f at zero is one, yet f ∘ g is zero everywhere (our own).

**nLab:** [limit of a function](https://ncatlab.org/nlab/show/limit+of+a+function). It says: “Using the Bourbaki definition, the limit of a composite function f ∘ g approaching c is equal to the limit of f approaching the limit of g approaching c, if the latter exists”

**Sources:** none listed. No primary source with a working link was found.

### Nets detect the Hausdorff property through unique limits

**Remember:** One limit for every net means Hausdorff; sequences cannot tell.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A net is a function on a nonempty preordered set in which every pair has a common upper bound. It converges to x if each neighborhood of x contains all values from some index onward.

**Problem.** A space is Hausdorff if and only if every convergent net in it has exactly one limit. With sequences in place of nets, only one direction holds.

**How the definition helps.** Disjoint neighborhoods prevent a net from converging to both points, since two tail indices have a common upper bound (our own). For inseparable points, order pairs of their neighborhoods by reverse inclusion in each coordinate (our own). Choosing a point in each intersection gives a net converging to both (our own). An uncountable space with the cocountable topology is non-Hausdorff, yet its convergent sequences are eventually constant (our own).

**Wikipedia:** [Net (mathematics)](https://en.wikipedia.org/wiki/Net_%28mathematics%29), [Hausdorff space](https://en.wikipedia.org/wiki/Hausdorff_space). It says: “Thus the uniqueness of the limit is equivalent to the Hausdorff condition on the space, and indeed this may be taken as the definition.”

**Sources:**

- [Moore, E. H. and Smith, H. L. (1922). A General Theory of Limits. American Journal of Mathematics 44(2), 102–121.](https://doi.org/10.2307/2370388)
- [van Douwen, E. K. (1993). An anti-Hausdorff Fréchet space in which convergent sequences have unique limits. Topology and its Applications 51(2), 147–158.](https://doi.org/10.1016/0166-8641(93)90147-6)

### Nets make continuity mean preserving limits in every space

**Remember:** A net eventually enters every neighborhood of its limit.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A net is a function from a directed set into a space. It converges to a point x if, for every neighbourhood of x, the net is eventually inside that neighbourhood.

**Problem.** A function f between any two spaces is continuous exactly when it sends each net converging to x to a net converging to f(x). Also, a point is in the closure of a set exactly when some net in the set converges to it.

**How the definition helps.** At a closure point, index by neighborhoods ordered by reverse inclusion and choose a set point in each (our own). Conversely, every neighborhood of a net limit meets the net’s range (our own). Continuity pulls neighborhoods back to neighborhoods and preserves net limits (our own). If continuity fails at x, some neighborhood of f(x) misses an image point from every neighborhood of x, giving a counterexample net (our own).

**Wikipedia:** [Net (mathematics)](https://en.wikipedia.org/wiki/Net_%28mathematics%29). It says: “it is necessary to allow for directed sets other than just the natural numbers if X is not a first-countable space (or not a sequential space).”

**Sources:**

- [Moore, E. H. and Smith, H. L. (1922). A General Theory of Limits. American Journal of Mathematics 44(2), 102–121.](https://doi.org/10.2307/2370388)

### Subnets are chosen so that compactness means convergent subnets

**Remember:** A subnet is any net that is eventually wherever the original net is eventually.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** For nets x and y in the same space, y is a subnet of x if every set eventually containing x eventually contains y. A set eventually contains a net if it contains all values from some index onward.

**Problem.** A space is compact if and only if every net in it has a convergent subnet.

**How the definition helps.** Under this definition, a cluster point gives a convergent subnet by refining the tail filter with its neighborhoods (our own). The compactness criterion for filters says that a space is compact exactly when every proper filter has a cluster point (our own). Every proper filter is the tail filter of some net, so the criterion applies in both directions (our own).

**nLab:** [subnet](https://ncatlab.org/nlab/show/subnet), [net](https://ncatlab.org/nlab/show/net). It says: “The point of the definition is to ensure that in classical mathematics, compact spaces are equivalently those for which every net has a converging subnet.”

**Sources:**

- [J. L. Kelley, Convergence in topology, Duke Mathematical Journal 17 (1950)](https://doi.org/10.1215/S0012-7094-50-01726-1)

### Ultrafilters turn Tychonoff's theorem into a short argument

**Remember:** An ultrafilter chooses a side for every subset.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A filter on X is a nonempty family of subsets of X closed under finite intersections and supersets in X, excluding the empty set. An ultrafilter is a filter containing either A or X ∖ A for every A ⊆ X.

**Problem.** Every product of compact spaces is compact.

**How the definition helps.** Ultrafilters push forward to ultrafilters, and convergence in a product is convergence in each coordinate. So each projection of an ultrafilter on the product converges, and the tuple of limits is a limit of the original ultrafilter. The work moves into proving that compactness is the same as convergence of all ultrafilters, and into the ultrafilter lemma. Choosing the limits uses the axiom of choice, unless each factor is Hausdorff.

**Wikipedia:** [Tychonoff's theorem](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem), [Filters in topology](https://en.wikipedia.org/wiki/Filters_in_topology), [Ultrafilter on a set](https://en.wikipedia.org/wiki/Ultrafilter_on_a_set). It says: “assuming the ultrafilter lemma, a space is compact if and only if each ultrafilter on the space converges. With this in hand, the proof becomes easy”

**Sources:**

- [Cartan, H. (1937). Théorie des filtres. Comptes rendus de l'Académie des sciences 205, 595–598.](http://gallica.bnf.fr/ark:/12148/bpt6k3157c/f594.image)
- [Kelley, J. L. (1950). Convergence in topology. Duke Mathematical Journal 17(3), 277–283.](https://doi.org/10.1215/S0012-7094-50-01726-1)

### Coordinatewise continuity lets paths join points in a product

**Remember:** Choose one path per coordinate and use the same time for all.

*True by definition.* MSC 54B10 (Product spaces in general topology), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A path is a continuous map from \[0,1\] with specified endpoints. Use the product topology, the coarsest topology that makes each coordinate projection continuous.

**Problem.** A nonempty product is path-connected exactly when each factor is path-connected. A space is path-connected if every two points can be joined by a path.

**How the definition helps.** The coordinate test makes a tuple of paths continuous as soon as each coordinate path is continuous. Our own proof uses the fact that basic product neighborhoods restrict only finitely many coordinates, so their preimages are finite intersections of open sets. Conversely, projecting a path between two tuples gives a path between their coordinates.

**Paper or page:** [Product Space is Path-connected iff Factor Spaces are Path-connected](https://proofwiki.org/wiki/Product_Space_is_Path-connected_iff_Factor_Spaces_are_Path-connected). It says: “is a path-connected space”

**Sources:** none listed. No primary source with a working link was found.

### Finite coordinate restrictions keep arbitrary products connected

**Remember:** Changing finitely many coordinates reaches every basic open set.

*Rules out counterexamples.* MSC 54B10 (Product spaces in general topology), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Basic open sets in a product are products of open coordinate sets, with the whole factor in all but finitely many coordinates. Arbitrary unions of these sets form the product topology.

**Problem.** An arbitrary product of connected spaces is connected in the product topology.

**How the definition helps.** Finite coordinate restrictions make tuples differing from a fixed tuple in finitely many places dense in any nonempty product. These tuples form a union of connected finite products sharing that fixed tuple, and their closure stays connected. In our own box-topology example on real sequences, changing each coordinate by less than one preserves both boundedness and unboundedness. Thus bounded and unbounded sequences give two disjoint nonempty open sets covering the space.

**Wikipedia:** [Box topology](https://en.wikipedia.org/wiki/Box_topology). It says: “The box topology is neither compact nor connected”

**Sources:** none listed. No primary source with a working link was found.

### Finite coordinate restrictions keep countable products second-countable

**Remember:** Countably many finite choices still give a countable base.

*Rules out counterexamples.* MSC 54B10 (Product spaces in general topology), 54D70. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A base is a family of open sets whose unions give all open sets. A space is second-countable if it has a countable base. In the product topology, a basic open set restricts finitely many coordinates to basic open sets of their factors.

**Problem.** A countable product of second-countable spaces is second-countable.

**How the definition helps.** Only countably many finite lists of coordinate restrictions can be drawn from the countable bases of countably many factors. These lists give a countable base for the product. Our own counterexample uses the box topology, which permits restrictions on every coordinate. For binary sequences this makes each singleton open, so any base must contain uncountably many singletons.

**Paper or page:** [Countable Product of Second-Countable Spaces is Second-Countable](https://proofwiki.org/wiki/Countable_Product_of_Second-Countable_Spaces_is_Second-Countable). It says: “is also second-countable.”

**Sources:** none listed. No primary source with a working link was found.

### Finite restrictions in the product topology let Tychonoff's theorem hold

**Remember:** Restrict finitely many coordinates, and compact factors give a compact product.

*Rules out counterexamples.* MSC 54B10 (Product spaces in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** Basic product neighborhoods are products of open neighborhoods with only finitely many proper coordinate restrictions. Basic box neighborhoods allow open restrictions in every coordinate.

**Problem.** Every product of compact spaces is compact in the product topology. An infinite box product of compact spaces can fail compactness, connectedness or metrizability.

**How the definition helps.** Finite restrictions let a product ultrafilter converge to a tuple of coordinate limits chosen using choice (our own). The ultrafilter criterion gives compactness (our own). The countable binary box product is infinite and discrete, hence disconnected and noncompact (our own). In the box product \[0,1\]ᴺ, shrinking the nth box in coordinate n defeats every proposed countable neighborhood base at zero, ruling out metrizability (our own).

**Wikipedia:** [Box topology](https://en.wikipedia.org/wiki/Box_topology), [Product topology](https://en.wikipedia.org/wiki/Product_topology). It says: “In particular, if all the component spaces are compact, the box topology on their Cartesian product will not necessarily be compact, although the product topology on their Cartesian product will always be compact.”

**Sources:**

- [Tychonoff, A. (1935). Über einen Funktionenraum. Mathematische Annalen 111, 762–766.](https://doi.org/10.1007/BF01472255)

### Open rectangles make product projections open

**Remember:** A nonempty open rectangle projects to an open side.

*True by definition.* MSC 54B10 (Product spaces in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** The product topology on X × Y takes unions of open rectangles as open sets. An open rectangle is U × V with U open in X and V open in Y.

**Problem.** Each coordinate projection from X × Y to a factor sends open sets to open sets.

**How the definition helps.** Every nonempty open rectangle projects onto an open side, and the empty rectangle projects onto the empty set. Images preserve unions, so this proves the theorem for every open set. Our own argument uses the fact that rectangles generate the coarsest topology making both projections continuous.

**Paper or page:** [Projection from Product Topology is Open and Continuous](https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Open_and_Continuous). It says: “are open and continuous.”

**Sources:** none listed. No primary source with a working link was found.

### The product topology makes maps into a product continuous coordinatewise

**Remember:** Coarsest topology with continuous projections: continuity is checked one coordinate at a time.

*True by definition.* MSC 54B10 (Product spaces in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** The product topology on a product of spaces is the coarsest topology that makes every projection continuous. Its basic open sets are products of open sets in which all but finitely many factors are the whole space.

**Problem.** A map into a product is continuous if and only if each of its coordinate maps is continuous.

**How the definition helps.** Preimages of basic product sets are finite intersections of coordinate preimages, hence open when the coordinates are continuous (our own). Conversely, composing a continuous map with each continuous projection gives continuous coordinates (our own).

**Wikipedia:** [Product topology](https://en.wikipedia.org/wiki/Product_topology), [Box topology](https://en.wikipedia.org/wiki/Box_topology). It says: “It follows from the above universal property that a map f : Y → X is continuous if and only if fᵢ = pᵢ ∘ f is continuous for all i ∈ I.”

**Sources:** none listed. No primary source with a working link was found.

### Closed classes make a quotient space have closed points

**Remember:** A point of the quotient stands for a whole class.

*True by definition.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is T₁ if each singleton set is closed. In a quotient space a set is closed exactly when its preimage under the map to classes is closed.

**Problem.** A quotient space is T₁ exactly when every class is closed in the original space.

**How the definition helps.** A quotient point has its whole class as preimage, so testing closed points amounts to testing closed classes. Our own proof uses the closed-point form of T₁ separation. Its equivalence with the neighborhood test follows by taking complements of singletons.

**Wikipedia:** [Quotient space (topology)](https://en.wikipedia.org/wiki/Quotient_space_%28topology%29). It says: “is a T₁ space if and only if every equivalence class of ∼ is closed in X.”

**Sources:** none listed. No primary source with a working link was found.

### Closed quotient maps preserve Hausdorff separation from compact spaces

**Remember:** Remove the image of the complement to keep whole classes inside.

*Rules out counterexamples.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A closed map sends every closed set to a closed set. A quotient map is an onto map under which a target set is open exactly when its preimage is open.

**Problem.** A quotient of a compact Hausdorff space is Hausdorff exactly when the quotient map is closed.

**How the definition helps.** Closedness makes target singletons closed images of singletons, so their preimages are closed classes. Normality separates two classes by disjoint open sets, and removing each complement’s image from the target gives disjoint open neighborhoods there. Conversely, closed subsets of a compact space have compact images, which are closed in a Hausdorff target. In our own counterexample, collapsing (0,1\] in \[0,1\] gives a quotient point whose singleton has a nonclosed preimage.

**nLab:** [quotient projections out of compact Hausdorff spaces are closed precisely if the codomain is Hausdorff](https://ncatlab.org/nlab/show/quotient+projections+out+of+compact+Hausdorff+spaces+are+closed+precisely+if+the+codomain+is+Hausdorff). It says: “These are now clearly disjoint open neighbourhoods”

**Sources:** none listed. No primary source with a working link was found.

### Closed relations give Hausdorff open quotients

**Remember:** Closed pairs keep distinct quotient points apart when the quotient map is open.

*Rules out counterexamples.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54C10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** An equivalence relation is closed if its equivalent pairs form a closed subset of the product space. The quotient map sends each point to its class. It is open if it sends open sets to open sets.

**Problem.** The quotient by a closed equivalence relation is Hausdorff whenever the quotient map is open.

**How the definition helps.** Closedness gives every inequivalent pair an open rectangle containing no equivalent pair (our own). The two sides have disjoint open quotient images, separating the classes (our own). Identifying matching nonzero points in two real lines gives an open quotient with two inseparable origins (our own). The corresponding origin pair is a limit of equivalent pairs but is itself inequivalent (our own).

**Paper or page:** [A converse theorem for hyperbolic surface spectra and the conformal bootstrap](https://arxiv.org/abs/2509.17935v1). It says: “Let Y be a topological space, and ∼ a closed equivalence relation on Y such that the quotient map Y → Y/∼ is open. Then Y/∼ is Hausdorff.”

**Sources:** none listed. No primary source with a working link was found.

### Joining the endpoints in the quotient topology gives a circle

**Remember:** Glue the endpoints first, then let the interval trace the circle.

*Makes the theorem clean to state or prove.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54C05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A quotient identifies each class of points as a single point. Its topology declares a set open exactly when its preimage under the map to classes is open.

**Problem.** Identifying the endpoints of \[0,1\] gives a space homeomorphic to the unit circle in the plane.

**How the definition helps.** The quotient turns a trip around the circle into a bijection because it identifies exactly the two endpoints. The quotient test gives continuity from the continuous parametrization t ↦ (cos(2πt), sin(2πt)). The quotient is compact as the continuous image of the interval. A continuous bijection from a compact space to a Hausdorff space has a continuous inverse.

**nLab:** [quotient projections out of compact Hausdorff spaces are closed precisely if the codomain is Hausdorff](https://ncatlab.org/nlab/show/quotient+projections+out+of+compact+Hausdorff+spaces+are+closed+precisely+if+the+codomain+is+Hausdorff). It says: “the above map is in fact a homeomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Open or closed surjections recover the quotient topology

**Remember:** An onto map sends a full preimage back to the original set.

*True by definition.* MSC 54B15 (Quotient spaces, decompositions in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A quotient map is an onto map for which a set is open exactly when its preimage is open. The same test works with closed sets.

**Problem.** An onto continuous map is a quotient map if it sends open sets to open sets or closed sets to closed sets.

**How the definition helps.** An onto map sends the preimage of any set back onto that set. For an open map, an open preimage therefore gives an open set, and continuity gives the converse. The same argument works with closed sets by taking complements. Our own proof uses these tests to identify the finest topology making the map continuous.

**Paper or page:** [Continuous Open Surjective Mapping is Quotient Mapping](https://proofwiki.org/wiki/Continuous_Open_Surjective_Mapping_is_Quotient_Mapping), [Continuous Closed Surjective Mapping is Quotient Mapping](https://proofwiki.org/wiki/Continuous_Closed_Surjective_Mapping_is_Quotient_Mapping). It says: “Then f is a quotient mapping.”

**Sources:** none listed. No primary source with a working link was found.

### The open preimage test makes quotient maps compose

**Remember:** Apply the open preimage test twice.

*True by definition.* MSC 54B15 (Quotient spaces, decompositions in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A quotient map is an onto map for which a set in the target is open exactly when its preimage is open. An onto continuous map need only satisfy one direction.

**Problem.** The composite of two quotient maps is a quotient map.

**How the definition helps.** A set is open exactly when its preimage under the second map is open, then exactly when its preimage under the composite is open. Our own proof uses this test instead of testing continuous maps out of the quotient. The two tests describe the same topology.

**Paper or page:** [Composite of Quotient Mappings in Topology is Quotient Mapping](https://proofwiki.org/wiki/Composite_of_Quotient_Mappings_in_Topology_is_Quotient_Mapping). It says: “Then g ∘ f : S₁ → S₃ is a quotient mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Distance functions represent Hausdorff distance

**Remember:** Compare two sets by comparing their distances from every point.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.MG, cs.CG. Level 2: later undergraduate.

**Definition.** Represent each nonempty compact Euclidean set by the function giving the distance from each point of the ambient space to that set. Measure separation by the supremum of the absolute difference of these functions.

**Problem.** The uniform distance between the distance functions equals the usual Hausdorff distance. In this representation its triangle inequality is the uniform norm triangle inequality.

**How the definition helps.** The triangle inequality bounds the distance-function difference everywhere by the Hausdorff distance (our own). Evaluating on each set gives both directed distances, hence the reverse bound after taking the supremum (our own). The pointwise triangle inequality for three distance functions passes to their supremum distances (our own).

**nLab:** [Hausdorff metric](https://ncatlab.org/nlab/show/Hausdorff+metric). It says: “its symmetrization is the Hausdorff metric”

**Paper or page:** [Computing the Hausdorff Distance of Two Sets from Their Signed Distance Functions](https://arxiv.org/abs/1812.06740v1). It says: “dH(A, B) = ‖dA − dB‖∞”

**Sources:** none listed. No primary source with a working link was found.

### The Hausdorff distance becomes a metric on nonempty compact sets

**Remember:** Sets with the same closure are at distance zero, so use closed sets.

*Makes the theorem clean to state or prove.* MSC 54B20 (Hyperspaces in general topology), 54E35. arXiv math.GN, math.MG. Level 2: later undergraduate.

**Definition.** For nonempty compact sets A,B in a metric space, put d(x,S) = inf{d(x,s) ∣ s ∈ S}. Their Hausdorff distance is the larger of the supremum of d(a,B) over A and the supremum of d(b,A) over B.

**Problem.** Hausdorff distance is a metric on the nonempty compact subsets of a metric space M. This metric space is complete if M is complete and compact if M is compact.

**How the definition helps.** Compact sets are bounded and closed, so mutual approximation gives finite distances and distinguishes distinct sets (our own). Without closedness, (0,1) and \[0,1\] have distance zero (our own). The Hausdorff hyperspace theorem supplies completeness and compactness under the stated hypotheses (our own).

**Wikipedia:** [Hausdorff distance](https://en.wikipedia.org/wiki/Hausdorff_distance). It says: “It turns the set of non-empty compact subsets of a metric space into a metric space in its own right.”

**Sources:**

- [Hausdorff, F. (1914). Grundzüge der Mengenlehre. Leipzig: Veit &amp; Comp.](https://archive.org/details/grundzgedermen00hausuoft)

### Initial and final topologies make limits of spaces immediate

**Remember:** Give the limit set just enough open sets to make the projections continuous.

*True by definition. Confidence: medium.* MSC 54B30 (Categorical methods in general topology), 18A30, 18F60. arXiv math.GN, math.CT. Level 2: later undergraduate.

**Definition.** Take functions pᵢ : S → Xᵢ from a set S into topological spaces Xᵢ. The initial topology on S is the coarsest topology that makes every pᵢ continuous. The final topology is the dual notion: the finest topology on a target set that makes given maps into it continuous.

**Problem.** Take a diagram of topological spaces. Its limit is the limit of the underlying sets, with the initial topology of the projections. Its colimit is the colimit of the underlying sets, with the final topology.

**How the definition helps.** The underlying set limit supplies a unique function for every cone (our own). Its projection composites are the continuous cone maps, so the initial topology makes that function continuous (our own). Dually, the final topology makes the unique function out of the set colimit continuous because its composites with the structure maps are continuous (our own).

**nLab:** [limits and colimits by example](https://ncatlab.org/nlab/show/limits+and+colimits+by+example). It says: “all that is required is that this unique function is always continuous. But this is precisely what the initial topology ensures.”

**Sources:**

- [N. Bourbaki, General Topology, Chapters 1–4, Elements of Mathematics, Springer (1995 printing; original 1971)](https://doi.org/10.1007/978-3-642-61701-0)

### Defining proper maps as universally closed makes base change automatic

**Remember:** Every pullback sends closed sets to closed sets.

*True by definition.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A continuous map is proper in Bourbaki’s sense if every pullback along a continuous map is closed. A closed map sends each closed set to a closed set.

**Problem.** A pullback of a proper map is proper. The map from a space X to a point is proper exactly when X is compact.

**How the definition helps.** Pulling back a pullback gives a pullback along the composite, which is closed by hypothesis (our own). For the point map, the closed-map condition is automatic and its sole fiber is X (our own). The closed-map and compact-fiber characterization of properness therefore gives the second claim (our own).

**nLab:** [proper map](https://ncatlab.org/nlab/show/proper+map). It says: “The second definition was introduced by Bourbaki to make proper maps closed under base changes.”

**Sources:**

- [Nicolas Bourbaki, General Topology, Chapters 1–4, Elements of Mathematics, Springer (1995 reprint)](https://doi.org/10.1007/978-3-642-61701-0)
- [Richard S. Palais, When proper maps are closed, Proc. AMS 24 (1970) 835–836](https://doi.org/10.1090/s0002-9939-1970-0254818-x)

### Perfect maps pull back compactness

**Remember:** Compact fibers handle one point, and closedness handles its neighbors.

*Rules out counterexamples.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A perfect map is a continuous, surjective, closed map with compact fibers. A closed map sends closed sets to closed sets, and a fiber is the preimage of a point.

**Problem.** The preimage of every compact set under a perfect map is compact.

**How the definition helps.** Given an ambient open cover of the preimage, cover each compact fiber by a finite subfamily (our own). Closedness makes the complement of the image of that subfamily’s uncovered region an open neighborhood of the fiber’s target point (our own). Finitely many such neighborhoods cover the compact target set, yielding a finite subcover upstairs (our own). Mapping \[0,1\] ⊔ (0,1\] onto \[0,1\] by coordinates has finite fibers but a noncompact preimage of the interval (our own).

**Wikipedia:** [Perfect map](https://en.wikipedia.org/wiki/Perfect_map). It says: “If p : X → Y is a perfect map and Y is compact, then X is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Proper local homeomorphisms are coverings

**Remember:** Properness keeps extra sheets from appearing near a fiber.

*Rules out counterexamples.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A local homeomorphism maps some neighborhood of each point homeomorphically onto an open set. It is proper if compact sets have compact preimages.

**Problem.** A surjective proper local homeomorphism between Hausdorff spaces is a covering map if its target is locally compact. A covering map splits over a neighborhood of each target point into disjoint copies of that neighborhood.

**How the definition helps.** Each fiber is compact and discrete, hence finite, so choose disjoint local sheets about its points (our own). Properness over a locally compact Hausdorff target makes the map closed (our own). Intersect the sheet images and remove the image of their domains’ complement to obtain an evenly covered neighborhood (our own). The map t ↦ exp(it) on (0,4π) has one preimage over 1 and two over nearby points (our own).

**Wikipedia:** [Local homeomorphism](https://en.wikipedia.org/wiki/Local_homeomorphism). It says: “if p : X → Y is a proper local homeomorphism between two Hausdorff spaces and if Y is also locally compact, then p is a covering map.”

**Sources:** none listed. No primary source with a working link was found.

### Equicontinuity gives compactness in spaces of continuous functions

**Remember:** Equicontinuous means one δ for the whole family.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54C35 (Function spaces in general topology), 54D30. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** A family F of real functions on X is equicontinuous at x if every ε &gt; 0 admits a neighborhood U of x as follows. For every f ∈ F and y ∈ U, \|f(y) − f(x)\| &lt; ε. Equicontinuity requires this at every point of X.

**Problem.** Let X be compact Hausdorff and give its continuous real functions the uniform norm. A subset is compact exactly when it is closed, pointwise bounded and equicontinuous.

**How the definition helps.** Equicontinuity is exactly the extra condition that gives a test for compactness like the Heine–Borel theorem. Such a condition is necessary because in C\[0,1\] with the uniform norm, closed and bounded sets need not be compact. For example, the functions xⁿ are bounded, but no subsequence converges uniformly, because the pointwise limit is not continuous (our own example). The proof still needs the compactness of X (our own remark).

**Wikipedia:** [Equicontinuity](https://en.wikipedia.org/wiki/Equicontinuity). It says: “Equicontinuity appears in the formulation of Ascoli's theorem, which states that a subset of C(X), the space of continuous functions on a compact Hausdorff space X, is compact if and only if it is closed, pointwise bounded and equicontinuous.”

**Sources:** none listed. No primary source with a working link was found.

### Connected components partition a space as equivalence classes

**Remember:** Two points belong together when one connected set contains both.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** Call two points equivalent if some connected subset contains both. Define a connected component as a class for this relation, rather than as a maximal connected subset.

**Problem.** Connected components partition the space and are exactly its maximal connected subsets.

**How the definition helps.** Equivalence classes partition the space, so it suffices to justify the relation and identify its classes. Two connected sets sharing a point have connected union, which gives transitivity. The class of x is the union of all connected sets containing x, so it too is connected. In our own argument, maximality follows because every connected set containing x already lies in that union.

**Paper or page:** [Equivalence of Definitions of Component/Equivalence Class equals Union of Connected Sets](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Component/Equivalence_Class_equals_Union_of_Connected_Sets), [Union of Connected Sets with Common Point is Connected](https://proofwiki.org/wiki/Union_of_Connected_Sets_with_Common_Point_is_Connected). It says: “Let C′ be the equivalence class of ∼ containing x.”

**Sources:** none listed. No primary source with a working link was found.

### Connected sets sharing a point have a connected union

**Remember:** The common point forces the same constant on every piece.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is connected if every continuous map to two discrete points is constant. The two points are discrete because each singleton is open.

**Problem.** A union of connected subsets with a common point is connected.

**How the definition helps.** The common point forces every continuous map to the two discrete points to take the same constant value on each piece. It therefore has one value throughout the union. Our own proof uses the equivalence with the usual separation test. A nonconstant map splits the space into two disjoint nonempty open preimages.

**Paper or page:** [Union of Connected Sets with Common Point is Connected](https://proofwiki.org/wiki/Union_of_Connected_Sets_with_Common_Point_is_Connected), [Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space). It says: “is a connected set of T.”

**Sources:** none listed. No primary source with a working link was found.

### Connectedness as no map onto two points makes continuous images connected

**Remember:** Every continuous map to two discrete points misses a point.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54C05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space T is connected if it is not the union of two nonempty separated sets. An equivalent definition says that there is no continuous surjection from T onto the discrete space {0, 1}.

**Problem.** The continuous image of a connected space is connected. As a corollary, a continuous real function on a closed interval has the intermediate value property.

**How the definition helps.** A continuous surjection from the image onto two discrete points would compose to one from the connected domain (our own). The preimages of the two points characterize a separation into nonempty open sets (our own). Closed intervals are connected, and a real image missing an intermediate value splits at that value (our own).

**Paper or page:** [Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space), [Continuous Image of Connected Space is Connected/Corollary 3](https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Corollary_3). It says: “Then there exists no continuous surjection from T onto a discrete two-point space.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space)
- [ProofWiki, Continuous Image of Connected Space is Connected/Corollary 3](https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Corollary_3)

### Connectedness by separations survives closures, but path-connectedness does not

**Remember:** Connected means no split into two nonempty open pieces.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is connected if it is not the union of two disjoint nonempty open sets. A space is path-connected if any two points are joined by a continuous path.

**Problem.** The closure of a connected set is connected. Continuous images of connected spaces are connected, which gives the intermediate value theorem.

**How the definition helps.** Both sides of a separation of the closure would meet the dense original set and separate it. A separation of a continuous image likewise pulls back to a separation of the domain (our own). A real interval is connected, and omitting a value between two image values would separate its continuous image (our own).

**Wikipedia:** [Connected space](https://en.wikipedia.org/wiki/Connected_space), [Locally connected space](https://en.wikipedia.org/wiki/Locally_connected_space), [Topologist's sine curve](https://en.wikipedia.org/wiki/Topologist%27s_sine_curve). It says: “The closure of a connected subset is connected. Furthermore, any subset between a connected subset and its closure is connected.”

**Sources:** none listed. No primary source with a working link was found.

### Defining local connectedness by open components makes quotients locally connected

**Remember:** A component downstairs pulls back to a union of open components.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54B15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Call a space locally connected if every connected component of every open subset is open. Another definition asks for a basis of connected open sets.

**Problem.** Every quotient of a locally connected space is locally connected.

**How the definition helps.** The preimage of an open quotient set V has open components by local connectedness (our own). Each such component has connected image, contained in a single component of V (our own). Thus each component of V has open preimage and is open by the quotient test (our own).

**nLab:** [locally connected topological space](https://ncatlab.org/nlab/show/locally+connected+topological+space). It says: “every connected component of every open subspace of X is open;”

**Sources:** none listed. No primary source with a working link was found.

### In Hausdorff spaces every path can be replaced by an arc

**Remember:** Hausdorff neighborhoods separate points, including points on a path.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54F50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Hausdorff space gives any two distinct points disjoint open neighborhoods. A path is a continuous map from \[0,1\], and an arc is the image of an embedding of \[0,1\].

**Problem.** If a Hausdorff space is path-connected, then any two distinct points are joined by an arc.

**How the definition helps.** The Hausdorff image of a path is a Peano continuum by the Hahn–Mazurkiewicz theorem (our own). The arcwise connectedness theorem for Peano continua supplies an arc between distinct endpoints (our own). The indiscrete two-point space admits a path between its points but contains no copy of \[0,1\] (our own).

**Wikipedia:** [Connected space](https://en.wikipedia.org/wiki/Connected_space). It says: “Every Hausdorff space that is path-connected is also arc-connected; more generally this is true for a Δ-Hausdorff space, which is a space where each image of a path is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Local path-connectedness makes connected components path-connected

**Remember:** Open path components cannot split a connected space.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A path is a continuous map from \[0,1\] that joins its endpoints. A set is path-connected if any two of its points can be joined by a path in the set. A space is locally path-connected if every open neighborhood of a point contains a path-connected open neighborhood of that point.

**Problem.** In a locally path-connected space, the connected components are exactly the path components, the classes of points joined by paths.

**How the definition helps.** Each path component is open because each of its points has a path-connected open neighborhood within it. Its complement is open as a union of other path components. A connected component cannot meet both sides, and every path-connected set is connected. Our own example is the connected but non-path-connected closure of the graph of sin(1/x) for 0 &lt; x ≤ 1.

**nLab:** [locally path-connected space](https://ncatlab.org/nlab/show/locally+path-connected+space). It says: “The connected components of a locally path-connected space are the same as its path-connected components.”

**Paper or page:** [Connected and Locally Path-Connected Implies Path Connected](https://proofwiki.org/wiki/Connected_and_Locally_Path-Connected_Implies_Path_Connected). It says: “Then T is path-connected.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal loop cancellations turn any path into an arc in Hausdorff spaces

**Remember:** Cancel loops until none remains between distinct surviving times.

*Makes the theorem clean to state or prove.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54F50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** For a path α, a loop cancellation is a union of disjoint open component intervals (a,b) with α(a) = α(b) for each interval. A cancellation is maximal if no cancellation strictly contains its union.

**Problem.** In a path-connected Hausdorff space, any two distinct points are joined by an arc, a subspace homeomorphic to the closed interval.

**How the definition helps.** A maximal cancellation removes repeated values once each cancelled closed interval becomes one parameter point (our own). The cited maximality theorem supplies the cancellation, and Proposition 2 gives injectivity after reparametrization (our own). For distinct endpoints the resulting continuous injection from \[0,1\] into the Hausdorff space is an embedding (our own).

**Paper or page:** [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1). It says: “If X permits loop deletion then for every path α: \[0,1\] → X, there exists a maximal loop-cancellation 𝒱 ∈ ℒ(α).”

**Sources:**

- [Jeremy Brazas, Constructing arcs from paths using Zorn's Lemma, Rocky Mountain Journal of Mathematics 54(4) (2024), 965–974](https://arxiv.org/abs/2207.07242v1)

### The identity theorem needs a connected domain

**Remember:** One piece, one analytic function.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 30B40. arXiv math.CV, math.GN. Level 2: later undergraduate.

**Definition.** In complex analysis, a domain is a non-empty open set that is connected. Connected means that the set is not the union of two disjoint non-empty open sets.

**Problem.** The identity theorem: let f and g be analytic functions on a domain D. If f and g agree on a set with an accumulation point in D, then f = g on all of D.

**How the definition helps.** Connectedness forces a nonempty set that is both open and closed in the domain to fill it (our own). The Taylor expansion at an accumulation point of zeros makes all derivatives of f − g vanish there (our own). Their common zero set is closed by continuity and open by analyticity (our own). On two disjoint discs, analytic functions can agree on one disc and have different constant values on the other.

**Wikipedia:** [Identity theorem](https://en.wikipedia.org/wiki/Identity_theorem). It says: “For example, if D consists of two disjoint open sets, f can be 0 on one open set, and 1 on another, while g is 0 on one, and 2 on another.”

**Sources:** none listed. No primary source with a working link was found.

### Maps into a Hausdorff space are fixed by a dense subset

**Remember:** Hausdorff means that 'equal' is a closed condition on pairs of points.

*True by definition.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space S is Hausdorff if any two distinct points have disjoint open neighbourhoods. Equivalently, the diagonal {(s, s)}, the set of pairs of equal points, is a closed subset of S × S.

**Problem.** Let f, g : X → Y be continuous, with Y Hausdorff. Suppose that f and g agree on a dense subset A of X. Then f = g.

**How the definition helps.** The continuous map x ↦ (f(x),g(x)) pulls the closed diagonal back to the set where f and g agree. This closed set contains the dense subset, so it equals X.

**nLab:** [Hausdorff space](https://ncatlab.org/nlab/show/Hausdorff+space). It says: “Since E is a closed subset of X and contains a dense subspace i: A ↪︎ X, it must be all of X (as a subset of itself).”

**Sources:**

- [Jérôme Lapuyade-Lahorgue, The epimorphisms of the category Haus are exactly the image-dense morphisms, arXiv:1810.00778 (2018)](https://arxiv.org/abs/1810.00778)

### Adding T₁ to normality makes normal spaces Tychonoff

**Remember:** Normal alone lets points hide; add closed points and Urysohn does the rest.

*Rules out counterexamples.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is normal if any two disjoint closed sets lie in disjoint open sets. A space is T₁ if every single point is a closed set. A T₄ space is a normal T₁ space.

**Problem.** Every T₄ space is Tychonoff. That is, a point and a closed set not containing it can be separated by a continuous real function. In particular, every T₄ space is Hausdorff and regular.

**How the definition helps.** The T₁ condition makes the point a closed singleton, so Urysohn’s lemma separates it from the disjoint closed set by a continuous function. Disjoint neighborhoods follow by taking preimages of disjoint neighborhoods of zero and one (our own). The Sierpiński space with open sets ∅, {1}, {0,1} is normal but lacks the closed singleton {1} (our own). Its point 1 and closed set {0} have no disjoint neighborhoods (our own).

**Wikipedia:** [Normal space](https://en.wikipedia.org/wiki/Normal_space), [Separation axiom](https://en.wikipedia.org/wiki/Separation_axiom). It says: “Taking Kolmogorov quotients, we see that all normal T₁ spaces are Tychonoff.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Tychonoff spaces as subspaces makes the Stone–Čech embedding automatic

**Remember:** A Tychonoff space is a space that can sit inside a compact Hausdorff space.

*True by definition. Confidence: medium.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54D35, 54C25. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is Tychonoff if it admits an embedding into some compact Hausdorff space.

**Problem.** The canonical map η from X to its Stone–Čech compactification βX is an embedding exactly when X is Tychonoff. Every continuous map from X to a compact Hausdorff space factors uniquely through η by a continuous map.

**How the definition helps.** Any embedding of X into a compact Hausdorff space factors continuously through η (our own). The factorization separates points and recovers every open set of X on η(X), so η is an embedding (our own). Conversely, if η embeds X, then βX itself witnesses the subspace definition (our own).

**nLab:** [Tychonoff space](https://ncatlab.org/nlab/show/Tychonoff+space), [Stone-Čech compactification](https://ncatlab.org/nlab/show/Stone-%C4%8Cech+compactification). It says: “Conversely, any subspace of a compact Hausdorff space must be Tychonoff.”

**Sources:**

- [A. Tychonoff, Über die topologische Erweiterung von Räumen, Mathematische Annalen 102 (1930) 544–561](https://doi.org/10.1007/BF01782364)

### Separating sets that miss each other's closures makes normality hereditary

**Remember:** Sets closed and disjoint in a subspace miss each other’s closures.

*True by definition.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54B05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Normality separates disjoint closed sets by disjoint open neighborhoods. Complete normality asks for the same separation for any two sets that each miss the other's closure.

**Problem.** Every subspace of a completely normal space is normal.

**How the definition helps.** Disjoint sets closed in a subspace each miss the other’s closure in the whole space. Complete normality therefore separates them there, and intersecting the open neighborhoods with the subspace gives the required separation. Our own explanation uses the formula for closure in a subspace.

**Paper or page:** [Completely Normal iff Every Subspace is Normal](https://proofwiki.org/wiki/Completely_Normal_iff_Every_Subspace_is_Normal), [Existence of Normal Space which is not Completely Normal](https://proofwiki.org/wiki/Existence_of_Normal_Space_which_is_not_Completely_Normal). It says: “every subspace of T is normal.”

**Sources:** none listed. No primary source with a working link was found.

### Full normality makes it easy to see that metric spaces are paracompact

**Remember:** Each refined set and all its neighbors fit inside one original set.

*Makes the theorem clean to state or prove.* MSC 54D20 (Noncompact covering properties (paracompact, Lindelöf, etc.)), 54D15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is fully normal if each open cover has an open star refinement. In a star refinement, each member together with all members meeting it lies in one original cover member.

**Problem.** A. H. Stone's theorem says that every metric space is paracompact. So every metric space has partitions of unity for every open cover.

**How the definition helps.** Metric ball refinements give full normality, and Stone’s equivalence turns full normality into paracompactness for Hausdorff spaces. Every metric space is Hausdorff (our own). The partition-of-unity theorem for paracompact Hausdorff spaces gives a partition subordinate to each open cover (our own).

**Wikipedia:** [Paracompact space](https://en.wikipedia.org/wiki/Paracompact_space). It says: “The proof that all metrizable spaces are fully normal is easy. When it was proved by A.H. Stone that for Hausdorff spaces full normality and paracompactness are equivalent, he implicitly proved that all metrizable spaces are paracompact.”

**Sources:**

- [Stone, A. H. (1948). Paracompactness and product spaces. Bulletin of the American Mathematical Society 54, 977–982.](https://doi.org/10.1090/S0002-9904-1948-09118-2)

### Locally finite covers make the shrinking lemma work

**Remember:** Near any point, only finitely many patches matter.

*Rules out counterexamples.* MSC 54D20 (Noncompact covering properties (paracompact, Lindelöf, etc.)), 54D15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** An open cover {Uᵢ} of a space X is locally finite if each point has a neighbourhood that meets only finitely many Uᵢ.

**Problem.** The shrinking lemma: let X be a normal space and {Uᵢ} a locally finite open cover of X. Then there is an open cover {Vᵢ} with the closure of each Vᵢ inside Uᵢ.

**How the definition helps.** Local finiteness keeps a cover intact at limit stages because each point belongs to only finitely many members (our own). Well-order the cover and replace each member by an open neighborhood of the points the other current members miss (our own). Normality lets its closure stay inside the original member (our own). The cited Dowker example admits a countable cover without a shrinking, which therefore cannot be locally finite (our own).

**nLab:** [shrinking lemma](https://ncatlab.org/nlab/show/shrinking+lemma). It says: “assuming the axiom of choice, then there exists a counter-example of a countable cover on a normal spaces for which the shrinking lemma fails (a Dowker space due to Beslagic 85).”

**Sources:**

- [A. Bešlagić, A Dowker product, Transactions of the AMS 292 (1985) 519–530](https://doi.org/10.1090/S0002-9947-1985-0808735-X)

### Paracompact Hausdorff is exactly what local metrics need to glue

**Remember:** Hausdorff plus paracompact glues local metrics into one metric.

*Rules out counterexamples.* MSC 54D20 (Noncompact covering properties (paracompact, Lindelöf, etc.)), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is locally metrizable if each point has a neighbourhood whose topology comes from a metric. A space is paracompact if every open cover has a locally finite open refinement.

**Problem.** Smirnov's metrization theorem says that a locally metrizable space is metrizable if and only if it is Hausdorff and paracompact. So a Hausdorff manifold has a metric exactly when it is paracompact.

**How the definition helps.** The line with two origins rules out dropping Hausdorff separation, and the long line rules out dropping paracompactness (our own). Smirnov’s theorem gives a compatible metric from local metrizability, Hausdorff separation and paracompactness. Conversely, metric spaces are Hausdorff and are paracompact by Stone’s theorem. Manifold charts give local metrizability (our own).

**Wikipedia:** [Metrizable space](https://en.wikipedia.org/wiki/Metrizable_space), [Paracompact space](https://en.wikipedia.org/wiki/Paracompact_space). It says: “Smirnov proved that a locally metrizable space is metrizable if and only if it is Hausdorff and paracompact. In particular, a manifold is metrizable if and only if it is paracompact.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness and Hausdorff separation make continuous bijections reversible

**Remember:** Closed sets leave compact and arrive closed.

*Rules out counterexamples.* MSC 54D30 (Compactness), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A compact space has a finite subcover for every open cover. A Hausdorff space gives distinct points disjoint open neighborhoods. A homeomorphism is a continuous bijection whose inverse is continuous.

**Problem.** A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.

**How the definition helps.** A closed subset of the compact domain is compact, so its continuous image is compact and hence closed in the Hausdorff target. Thus the inverse is continuous. In our own counterexample, give two points all subsets as open sets in the domain, but only the empty and whole sets in the target. The identity is continuous, yet its inverse has a singleton as the preimage of an open singleton.

**Paper or page:** [Continuous Bijection from Compact to Hausdorff is Homeomorphism](https://proofwiki.org/wiki/Continuous_Bijection_from_Compact_to_Hausdorff_is_Homeomorphism). It says: “Then f is a homeomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness as closed projections gives a short proof of Tychonoff's theorem

**Remember:** Compact means that projecting X away always keeps closed sets closed.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54C10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space X is compact if for every space Y the projection Y × X → Y sends every closed subset to a closed set.

**Problem.** Tychonoff's theorem: a product of any set of compact spaces is compact.

**How the definition helps.** The projection test expresses compactness as universal closedness of the map to a point (our own). Clementino and Tholen prove the product assertion by transfinite induction on closed maps. The closed-projection characterization identifies this test with open-cover compactness (our own).

**nLab:** [closed-projection characterization of compactness](https://ncatlab.org/nlab/show/closed-projection+characterization+of+compactness), [compactness and stable closure](https://ncatlab.org/nlab/show/compactness+and+stable+closure). It says: “show how it makes possible a very direct hands-on proof of the Tychonoff theorem, without the need for infrastructure such as ultrafilters or nets.”

**Sources:**

- [Maria Manuel Clementino, Walter Tholen, Tychonoff's theorem in a category, Proc. AMS 124 (1996) 3311–3314](https://doi.org/10.1090/S0002-9939-96-03435-1)

### Hausdorff separation makes compact subsets closed

**Remember:** Separate a point from finitely many neighborhoods to miss the whole compact set.

*Rules out counterexamples.* MSC 54D30 (Compactness), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Hausdorff space gives distinct points disjoint open neighborhoods. This is stronger than the T₁ condition, which asks only that singletons be closed.

**Problem.** Every compact subset of a Hausdorff space is closed.

**How the definition helps.** Disjoint neighborhoods separate an outside point from each point of the compact set. Finitely many neighborhoods cover the compact set, so intersecting their partners gives an open neighborhood disjoint from it. In our own counterexample on ℕ, the closed sets are the finite sets and ℕ itself. Every subset is compact because one nonempty open set leaves only finitely many points uncovered, yet the even numbers are not closed.

**Paper or page:** [Compact Subspace of Hausdorff Space is Closed](https://proofwiki.org/wiki/Compact_Subspace_of_Hausdorff_Space_is_Closed). It says: “Then C is closed in H.”

**Sources:** none listed. No primary source with a working link was found.

### One ball radius works across a compact metric space

**Remember:** Cover by half-size balls and take the smallest half-radius.

*True by definition.* MSC 54D30 (Compactness), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Lebesgue number for an open cover of a metric space is a positive radius. The ball of that radius around each point must fit inside some member of the cover.

**Problem.** Every open cover of a compact metric space has a Lebesgue number.

**How the definition helps.** One radius expresses a uniform bound even though different points may use different cover members. For our own proof, choose a ball inside a cover member at each point, halve each radius, and take a finite subcover. The smallest radius in that finite collection works by the triangle inequality. In the empty space any positive radius works.

**nLab:** [Lebesgue number lemma](https://ncatlab.org/nlab/show/Lebesgue+number+lemma). It says: “the open ball around x of radius δ is contained in Uᵢ”

**Paper or page:** [Lebesgue's Number Lemma/Compact Space](https://proofwiki.org/wiki/Lebesgue's_Number_Lemma/Compact_Space). It says: “Then there exists a Lebesgue number for every open cover of M.”

**Sources:** none listed. No primary source with a working link was found.

### Open-cover compactness gives one tube around a whole slice

**Remember:** Finitely many rectangles give one common width.

*Rules out counterexamples.* MSC 54D30 (Compactness), 54B10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is compact if every open cover has a finite subcover. A tube in X × Y is a set U × Y for U open in X.

**Problem.** If Y is compact, an open set containing {x} × Y in the product contains a tube around that slice.

**How the definition helps.** Compactness gives finitely many open rectangles covering the slice inside the given open set. Their first sides all contain x, so their intersection gives the required tube. In our own counterexample, let Y be the positive integers with every subset open. The union of (−1/n,1/n) × {n} contains the slice at zero, but no interval around zero works for every n.

**Wikipedia:** [Tube lemma](https://en.wikipedia.org/wiki/Tube_lemma). It says: “there exists a tube in X × Y containing this slice and contained in N.”

**Sources:** none listed. No primary source with a working link was found.

### Open-cover compactness makes every product of compact spaces compact

**Remember:** Every open cover shrinks to a finite subcover.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54B10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is compact if every cover by open sets has a finite subcover. Fréchet's earlier notion, now called sequential compactness, asks that every sequence has a convergent subsequence. Alexandrov and Urysohn developed the open-cover notion.

**Problem.** Tychonoff's theorem says that any product of compact spaces is compact, with the product topology. The index set may be uncountable.

**How the definition helps.** In the product topology, Alexander’s subbase theorem reduces compactness to covers by inverse images of open coordinate sets (our own). Some coordinate family must cover its factor, since otherwise choice gives a tuple missing the whole cover (our own). Compactness of that factor supplies finitely many members (our own). The product of continuum many unit intervals fails sequential compactness, so a sequence test cannot replace this cover argument (our own).

**Wikipedia:** [Compact space](https://en.wikipedia.org/wiki/Compact_space), [Sequentially compact space](https://en.wikipedia.org/wiki/Sequentially_compact_space), [Tychonoff's theorem](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem). It says: “It was this notion of compactness that became the dominant one, because it was not only a stronger property, but it could be formulated in a more general setting with a minimum of additional technical machinery”

**Sources:**

- [Fréchet, M. (1906). Sur quelques points du calcul fonctionnel. Rendiconti del Circolo Matematico di Palermo 22, 1–72.](https://doi.org/10.1007/BF03018603)
- [Tychonoff, A. (1930). Über die topologische Erweiterung von Räumen. Mathematische Annalen 102, 544–561.](https://doi.org/10.1007/BF01782364)
- [Tychonoff, A. (1935). Über einen Funktionenraum. Mathematische Annalen 111, 762–766.](https://doi.org/10.1007/BF01472255)

### Pseudocompactness is the extreme value theorem made into a definition

**Remember:** Pseudocompact: every continuous real function is bounded, by definition.

*True by definition.* MSC 54D30 (Compactness), 54C30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is pseudocompact if every continuous real function on it is bounded. Many authors also require the space to be completely regular.

**Problem.** Every continuous real function on a nonempty pseudocompact space is bounded and attains its maximum and minimum. For metric spaces, pseudocompactness is equivalent to compactness.

**How the definition helps.** Boundedness gives a finite supremum s, and failure to attain it would make 1/(s − f) continuous and unbounded (our own). Apply the same argument to −f for the minimum (our own). The metric pseudocompactness theorem gives the separate equivalence with compactness (our own).

**Wikipedia:** [Pseudocompact space](https://en.wikipedia.org/wiki/Pseudocompact_space). It says: “a topological space is said to be pseudocompact if its image under any continuous function to R is bounded.”

**Sources:**

- [Hewitt, E. (1948). Rings of real-valued continuous functions. I. Transactions of the American Mathematical Society 64, 45–99.](https://doi.org/10.1090/S0002-9947-1948-0026239-9)

### Closed compact sets make the one-point extension work for every space

**Remember:** A neighbourhood of infinity is everything outside a closed compact set.

*Rules out counterexamples. Confidence: medium.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Adjoin one point ∞ to a space X. Keep the open sets of X and declare the other open sets to be the extended space minus a closed compact subset of X.

**Problem.** For every topological space X, the one-point extension X\* is a compact topological space. X need not be locally compact or Hausdorff.

**How the definition helps.** Closedness ensures that intersecting an infinity neighborhood with an original open set gives an original open set (our own). Finite unions and nonempty intersections of closed compact sets stay closed and compact, giving the remaining topology checks by complements (our own). Any cover member containing ∞ leaves only a compact remainder, covered by finitely many other members (our own). In the indiscrete two-point space a singleton is compact, yet removing it from the original space leaves a nonopen set (our own).

**nLab:** [one-point compactification](https://ncatlab.org/nlab/show/one-point+compactification). It says: “If X is Hausdorff, then it is sufficient to speak of compact subsets in def. …, since compact subspaces of Hausdorff spaces are closed.”

**Sources:**

- [P. Alexandroff, Über die Metrisation der im Kleinen kompakten topologischen Räume, Mathematische Annalen 92 (1924) 294–301](https://doi.org/10.1007/BF01448011)

### Compact neighborhoods make the one-point extension Hausdorff

**Remember:** To separate a point from infinity, enclose it in a compact neighborhood.

*Rules out counterexamples.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54D30, 54D45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** The one-point extension keeps the original open sets and adds one point ∞. Its open neighborhoods of ∞ are the complements, in the extended space, of closed compact subsets of the original space. A Hausdorff space is locally compact if each point lies inside the interior of a compact set.

**Problem.** The one-point extension of a Hausdorff space is Hausdorff exactly when the original space is locally compact.

**How the definition helps.** The interior of a compact neighborhood and its complement in the extension give disjoint open neighborhoods of the point and ∞. Conversely, the complement of an open neighborhood of ∞ is compact and contains any open set disjoint from that neighborhood. For example, the rational line has no compact neighborhood because each neighborhood contains a sequence tending to a missing irrational. This sequence argument is our own explanation.

**Paper or page:** [Condition for Alexandroff Extension to be T2 Space](https://proofwiki.org/wiki/Condition_for_Alexandroff_Extension_to_be_T2_Space), [Alexandroff Extension of Rational Number Space is not Hausdorff](https://proofwiki.org/wiki/Alexandroff_Extension_of_Rational_Number_Space_is_not_Hausdorff). It says: “is a locally compact Hausdorff space.”

**Sources:** none listed. No primary source with a working link was found.

### Complements of compact sets determine the one-point compactification

**Remember:** The compact subsets of the original space fix every neighborhood at infinity.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A one-point compactification adds one point to make a compact Hausdorff space in which the original space is dense and keeps its topology. In the explicit construction, open neighborhoods of the added point are complements of compact subsets of the original space.

**Problem.** Any two compactifications of a noncompact space by a single point are homeomorphic by a map that fixes the original space.

**How the definition helps.** Compactness and Hausdorff separation force the open neighborhoods of the added point to be exactly those in the explicit construction. Their complements are closed in the compactification and therefore compact. Conversely, a compact subset of the original space stays compact and hence closed in the compactification. The original space is open because the added singleton is closed, so its topology determines all remaining open sets.

**nLab:** [one-point compactification](https://ncatlab.org/nlab/show/one-point+compactification). It says: “complements of closed, and hence compact closed, subsets”

**Sources:** none listed. No primary source with a working link was found.

### For Hausdorff spaces, all definitions of local compactness agree

**Remember:** Add Hausdorff, and every version of local compactness says the same.

*Rules out counterexamples.* MSC 54D45 (Local compactness, \\(\\sigma\\)-compactness), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A compact neighborhood of x is a compact set containing an open neighborhood of x. A space is locally compact in the weak sense if every point has a compact neighborhood.

**Problem.** In a Hausdorff space, one compact neighbourhood at each point gives a base of closed compact neighbourhoods. Then locally compact Hausdorff spaces are Tychonoff and Baire: a countable union of nowhere dense sets has empty interior.

**How the definition helps.** Inside a compact Hausdorff neighborhood, regularity gives smaller neighborhoods with closure inside any prescribed open neighborhood of the point (our own). Their compact closures are closed in the whole Hausdorff space (our own). Complete regularity and the Baire property then follow from the locally compact Hausdorff separation and Baire theorems (our own). In Sierpiński space, the open singleton contains no closed neighborhood of its point (our own).

**Wikipedia:** [Locally compact space](https://en.wikipedia.org/wiki/Locally_compact_space). It says: “Condition (1) is probably the most commonly used definition, since it is the least restrictive and the others are equivalent to it when X is Hausdorff.”

**Sources:** none listed. No primary source with a working link was found.

### Sequential spaces are defined as the spaces where sequences suffice

**Remember:** Where sequences suffice, sequential continuity is continuity.

*True by definition.* MSC 54D55 (Sequential spaces), 54A20. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is sequentially closed if it contains every limit of every convergent sequence in it. A space is sequential if every sequentially closed set is closed.

**Problem.** In a sequential space, a function to any space is continuous if and only if it preserves limits of sequences. Every first-countable space, such as every metric space, is sequential. The sequential spaces are exactly the quotients of metric spaces.

**How the definition helps.** A limit-preserving map has sequentially closed preimages of closed sets, hence closed preimages when its domain is sequential (our own). Conversely, continuity preserves all sequence limits (our own). In a first-countable space, a decreasing countable neighborhood base produces a sequence approaching each closure point (our own). Franklin’s quotient characterization identifies sequential spaces as exactly the quotients of metric spaces (our own).

**Wikipedia:** [Sequential space](https://en.wikipedia.org/wiki/Sequential_space). It says: “Franklin wanted to determine "the classes of topological spaces that can be specified completely by the knowledge of their convergent sequences”

**Sources:**

- [Franklin, S. P. (1965). Spaces in which sequences suffice. Fundamenta Mathematicae 57(1), 107–115.](https://doi.org/10.4064/fm-57-1-107-115)

### A subbase gives fewer open sets to test for continuity

**Remember:** Test the building blocks, not every open set.

*True by definition.* MSC 54D70 (Base properties of topological spaces), 54C05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A subbase is a family of open sets whose finite intersections form a base. A base is a family of open sets whose unions give every open set.

**Problem.** A map is continuous if and only if the preimage of each subbasic open set is open.

**How the definition helps.** Preimages preserve the unions and finite intersections that generate every open set. Thus checking the subbase suffices for the usual continuity test, which checks every open set in the target. Our own argument requires knowing that the chosen family generates the target topology.

**nLab:** [topological base](https://ncatlab.org/nlab/show/topological+base). It says: “such that every open subset is a union of finitary intersections of subbasic ones.”

**Sources:** none listed. No primary source with a working link was found.

### σ-locally finite bases make metrizability an if-and-only-if

**Remember:** A σ-locally finite base splits into countably many locally finite families.

*Makes the theorem clean to state or prove.* MSC 54D70 (Base properties of topological spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A family of subsets is locally finite if each point has a neighbourhood that meets only finitely many of them. A base is σ-locally finite if it is a union of countably many locally finite families.

**Problem.** Nagata–Smirnov: a space is metrizable if and only if it is regular, Hausdorff, and has a σ-locally finite base.

**How the definition helps.** Countably many layers allow uncountable locally finite families, including the singleton base of an uncountable discrete metric space (our own). Stone’s theorem supplies locally finite open refinements of the radius-1/n ball covers, whose union is a base (our own). The Nagata–Smirnov metrization theorem supplies the converse under regularity and Hausdorff separation (our own).

**Wikipedia:** [Nagata–Smirnov metrization theorem](https://en.wikipedia.org/wiki/Nagata%E2%80%93Smirnov_metrization_theorem), [Metrizable space](https://en.wikipedia.org/wiki/Metrizable_space). It says: “Unlike Urysohn's metrization theorem, which provides only a sufficient condition for metrizability, this theorem provides both a necessary and sufficient condition for a topological space to be metrizable.”

**Sources:**

- [Nagata, J. (1950). On a necessary and sufficient condition of metrizability. Journal of the Institute of Polytechnics, Osaka City University, Series A 1, 93–100.](https://core.ac.uk/download/pdf/35260599.pdf)
- [Bing, R. H. (1951). Metrization of Topological Spaces. Canadian Journal of Mathematics 3, 175–186.](https://doi.org/10.4153/CJM-1951-022-3)

### A compact Hausdorff space has exactly one uniform structure

**Remember:** Entourages contain equality, admit reversal, and allow two smaller steps inside one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A uniformity on X is a filter of relations on X containing the diagonal in each member. For every member U, the inverse relation U⁻¹ belongs to the filter and some member V satisfies V ∘ V ⊆ U.

**Problem.** A compact Hausdorff space has exactly one uniform structure that gives its topology, and it is complete in it. So uniform continuity and completeness there depend only on the topology.

**How the definition helps.** The diagonal-neighborhood theorem identifies the unique compatible uniformity with all neighborhoods of the diagonal in X × X. Compactness gives every proper Cauchy filter a cluster point, and the entourage composition axiom makes that point a limit (our own). Thus the topology fixes the uniformity and that uniformity is complete (our own).

**Wikipedia:** [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “In fact, for a compact Hausdorff space X the set of all neighbourhoods of the diagonal in X × X form the unique uniformity compatible with the topology.”

**Sources:** none listed. No primary source with a working link was found.

### Asking for Hausdorff makes the completion of a uniform space universal

**Remember:** Completeness gives limits to extend to; Hausdorff makes those limits unique.

*Rules out counterexamples.* MSC 54E15 (Uniform structures and generalizations), 54D35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Hausdorff completion of X is a complete separated uniform space with a dense map from X inducing its original uniformity. Completeness means every Cauchy filter converges, and separation means every convergent filter has a unique limit.

**Problem.** Every uniformly continuous map from X to a complete Hausdorff uniform space extends in exactly one way along X → X̄. So complete Hausdorff uniform spaces form a reflective subcategory of the category of uniform spaces.

**How the definition helps.** The dense image and induced uniformity let the uniform extension theorem construct extensions by limits of image Cauchy filters (our own). Completeness supplies the limits, and Hausdorff separation makes them unique (our own). For an indiscrete two-point uniform target, a constant map on ℚ extends uniformly to ℝ with either value at √2 (our own).

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “In short, the category of complete Hausdorff uniform spaces is a reflective subcategory of Unif.”

**Sources:**

- [Nicolas Bourbaki, General Topology, Chapter II: Uniform structures, Springer (1971, 1995)](https://doi.org/10.1007/978-3-642-61701-0)

### Families of pseudometrics give uniform structures to all completely regular spaces

**Remember:** Every continuous real function gives a pseudometric; together they give a uniformity.

*Makes the theorem clean to state or prove.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 2: later undergraduate.

**Definition.** Complete regularity requires a continuous f from X to \[0,1\] for each closed F ⊆ X and each x outside F. It must satisfy f(x)=0 and f(F)⊆{1}. Each continuous real function f defines a pseudometric by d(x,y)=\|f(x)−f(y)\|.

**Problem.** A topological space has a compatible uniform structure if and only if it is completely regular.

**How the definition helps.** Finite intersections of pseudometric bounds from continuous real functions generate a uniformity (our own). Complete regularity puts a ball about each point inside each prescribed neighborhood, so this uniformity induces the original topology (our own). Conversely, the pseudometric representation theorem generates any uniformity by pseudometrics (our own). Finite maxima of scaled generating pseudometrics give neighborhood balls, and their truncated distances from the center separate points from closed sets (our own).

**Wikipedia:** [Uniformizable space](https://en.wikipedia.org/wiki/Uniformizable_space), [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “Showing that a space is uniformizable is much simpler than showing it is metrizable. In fact, uniformizability is equivalent to a common separation axiom: A topological space is uniformizable if and only if it is completely regular.”

**Sources:** none listed. No primary source with a working link was found.

### Small diameter covers keep total boundedness after taking closure

**Remember:** Closing finitely many small pieces neither loses the cover nor enlarges their diameters.

*True by definition.* MSC 54E35 (Metric spaces, metrizability), 54E50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is totally bounded if it has finite covers by sets of arbitrarily small diameter. Diameter is the least upper bound on all distances between pairs of points in a set.

**Problem.** The closure of a totally bounded subset of a metric space is totally bounded.

**How the definition helps.** Using small pieces instead of open balls lets us close each piece without enlarging its diameter (our own). Their finite union is closed and contains the original set, so it covers the closure (our own). Diameter stays the same because distances between limits are limits of distances between points of the piece (our own).

**Paper or page:** [Closure of Totally Bounded Subspace is Totally Bounded](https://proofwiki.org/wiki/Closure_of_Totally_Bounded_Subspace_is_Totally_Bounded). It says: “Then cl A is totally bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting a base point's distances embeds metric spaces isometrically in bounded functions

**Remember:** Subtract base-point distances for boundedness, then test at an endpoint for equality.

*True by definition.* MSC 54E35 (Metric spaces, metrizability), 54C25. arXiv math.MG, math.GN. Level 2: later undergraduate.

**Definition.** Fix a point p in a metric space. Represent each point x by the function that sends t to d(x,t) − d(p,t). Measure the distance between two functions by the supremum of their absolute difference.

**Problem.** Every nonempty metric space embeds without changing distances into the space of bounded continuous real functions on it, with the supremum distance. This is the Kuratowski embedding.

**How the definition helps.** The definition turns each distance into a supremum that the triangle inequality bounds and one point attains, in our own explanation. The triangle inequality gives \|d(x,t) − d(y,t)\| ≤ d(x,y) for every t, and t = y attains the bound. Subtracting d(p,t) keeps each function bounded even when the space is unbounded, by our own check.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “The mapping ν: X → C<sub>b</sub>(X) defined by the formula ν: x ↦ dₓ − dₚ is an isometric embedding.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Minimum displacement gives strictly shrinking maps a fixed point

**Remember:** At a point of minimum displacement, any further shrink would contradict minimality.

*True by definition.* MSC 54E40 (Special maps on metric spaces), 54E45, 47H10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A strictly shrinking map f makes every distance between distinct points smaller. Its displacement at x is d(x, f(x)), the distance that x moves. Unlike a Banach contraction, the map need not shrink all distances by a common factor less than one.

**Problem.** Every strictly shrinking self-map of a nonempty compact metric space has a unique fixed point, where its displacement is zero.

**How the definition helps.** At a nonfixed point x, strict shrinking makes the displacement at f(x) smaller than the displacement at x (our own). The map never increases distances, so it is continuous and its displacement is continuous (our own). Compactness gives a point of minimum displacement, which must therefore be fixed (our own). Two different fixed points would keep their original distance (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “a map f: M → M admits a unique fixed point if d(f(x), f(y)) &lt; d(x, y)”

**Sources:**

- [Michael Edelstein, On Fixed and Periodic Points Under Contractive Mappings (1962)](https://doi.org/10.1112/jlms/s1-37.1.74)

### One shrink factor keeps fixed points continuous in the parameter

**Remember:** One shrink factor bounds how far a fixed point can move.

*Makes the theorem clean to state or prove.* MSC 54E40 (Special maps on metric spaces), 54E50, 47H10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A family of maps is uniformly contractive if one factor 0 ≤ q &lt; 1 works for every map in the family. For every pair, the distance between the images is at most q times the distance between the inputs.

**Problem.** Let a family of self-maps on a nonempty complete metric space depend jointly continuously on the point and parameter. If it is uniformly contractive, its unique fixed point depends continuously on the parameter.

**How the definition helps.** One factor q gives the same denominator 1 − q for every parameter (our own). Let x and y be the fixed points of two family members F and G (our own). The triangle inequality gives d(x, y) ≤ d(F(x), G(x)) + q d(x, y) (our own). Banach’s theorem gives the fixed points, and continuity in the parameter makes the first term tend to zero (our own).

**Paper or page:** [Uniform Contraction Mapping Theorem](https://proofwiki.org/wiki/Uniform_Contraction_Mapping_Theorem). It says: “and the mapping g: N → M is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform embeddings stay injective after completion

**Remember:** Uniform control in both directions keeps new limit points distinct.

*Rules out counterexamples. Confidence: medium.* MSC 54E40 (Special maps on metric spaces), 54E50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A uniform embedding is an injective, uniformly continuous map whose inverse on its image is also uniformly continuous.

**Problem.** Every uniform embedding of metric spaces extends to a uniform embedding of their completions.

**How the definition helps.** Uniform continuity extends the map and its inverse on the image by limits of Cauchy sequences (our own). The image completion identifies with the image closure in the completed target (our own). The extensions are inverses there by continuity and density (our own). The embedding t ↦ exp(2πit) on (0,1) identifies both endpoints after completion because its inverse lacks uniform continuity (our own).

**Wikipedia:** [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “whose inverse i⁻¹ : i(X) → X is also uniformly continuous”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly continuous maps preserve total boundedness

**Remember:** A common input scale sends every small cover piece to a small image piece.

*Rules out counterexamples.* MSC 54E40 (Special maps on metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is totally bounded if finitely many pieces of diameter less than ε cover it for each ε &gt; 0. A map is uniformly continuous if each output tolerance ε &gt; 0 admits one input radius δ &gt; 0. Points less than δ apart then have images less than ε apart.

**Problem.** The image of a totally bounded metric space under a uniformly continuous map is totally bounded. Mere continuity does not suffice.

**How the definition helps.** The common input scale makes every piece of one finite cover have small image diameter (our own). Use half the desired output bound so the supremum of image distances is still below that bound (our own). The diameter form avoids finding centers for image balls and agrees with the finite ball-cover test (our own). The continuous map x ↦ 1/x sends (0, 1) to an unbounded set (our own).

**nLab:** [uniformly continuous map](https://ncatlab.org/nlab/show/uniformly+continuous+map). It says: “the distance in Y between f(a) and f(b) is less than ε whenever the distance in X between a and b is less than δ”

**Sources:** none listed. No primary source with a working link was found.

### A uniform cover radius turns sequential compactness into compactness

**Remember:** Find one radius for the cover, then cover by finitely many balls.

*Makes the theorem clean to state or prove.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Lebesgue number for an open cover of a metric space is a positive radius. Every ball of that radius must lie in some member of the cover.

**Problem.** Every sequentially compact metric space is compact. That is, if every sequence has a subsequence converging in the space, every open cover has a finite subcover.

**How the definition helps.** Use the common radius to turn a finite cover by balls into a finite subcover of the original cover. The Lebesgue number lemma gives the radius from sequential compactness. Finitely many balls of that radius suffice, since otherwise one could pick an infinite separated sequence (our own).

**nLab:** [sequentially compact metric spaces are equivalently compact metric spaces](https://ncatlab.org/nlab/show/sequentially+compact+metric+spaces+are+equivalently+compact+metric+spaces). It says: “there exists a positive real number δ &gt; 0 such that for each x ∈ X there is iₓ ∈ I such that Bₓ°(δ) ⊂ Uᵢₓ.”

**Sources:** none listed. No primary source with a working link was found.

### Compact sets have a positive gap from disjoint closed sets

**Remember:** Closedness gives positive distances pointwise, and compactness makes their minimum positive.

*Rules out counterexamples.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** The distance between two nonempty sets is the infimum of their pairwise distances. This equals the infimum over one set of the distances to the other set.

**Problem.** A nonempty compact set and a disjoint nonempty closed set have positive distance in any metric space. Two disjoint closed sets need not have positive distance.

**How the definition helps.** Point-to-set distance turns the two-set problem into minimizing a positive continuous function on the compact set (our own). The work is to prove continuity of distance and use the extreme value theorem (our own). In the plane, the horizontal axis and the graph of y = e⁻ˣ are disjoint closed sets at distance zero (our own).

**Paper or page:** [Distance between Disjoint Compact Set and Closed Set in Metric Space is Positive](https://proofwiki.org/wiki/Distance_between_Disjoint_Compact_Set_and_Closed_Set_in_Metric_Space_is_Positive). It says: “Then d(A, B) &gt; 0, where d(A, B) is the distance between A and B.”

**Sources:** none listed. No primary source with a working link was found.

### Finite grids explain why closed bounded Euclidean sets are compact

**Remember:** A finite grid gives total boundedness, and closedness keeps the limits.

*Rules out counterexamples.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric space is totally bounded if, for every ε &gt; 0, finitely many pieces of diameter less than ε cover it. The diameter is the least upper bound of the distances within a piece.

**Problem.** In Euclidean space every bounded set is totally bounded, so every closed bounded set is compact. In general metric spaces a closed bounded set can fail to be compact.

**How the definition helps.** Total boundedness measures exactly what a finite grid in a bounded box supplies (our own). Closedness gives completeness inside Euclidean space, so the metric compactness criterion finishes the proof (our own). The work moves into that criterion and the finite grid construction (our own). An infinite set with distance one between different points is closed and bounded in itself but fails the small-cover test (our own).

**nLab:** [totally bounded space](https://ncatlab.org/nlab/show/totally+bounded+space). It says: “A subspace of a Cartesian space is totally bounded if and only if it is bounded.”

**Paper or page:** [Bounded Subspace of Euclidean Space is Totally Bounded](https://proofwiki.org/wiki/Bounded_Subspace_of_Euclidean_Space_is_Totally_Bounded). It says: “Then M is totally bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Sequential closedness keeps closed parts of a compact metric space compact

**Remember:** Find a limit in the whole space, then keep it inside the closed part.

*True by definition.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric space is sequentially compact if each sequence has a subsequence converging in the space. A subset is sequentially closed if it contains the limit of every convergent sequence of its points.

**Problem.** Every closed subset of a compact metric space is compact.

**How the definition helps.** Sequential compactness gives a convergent subsequence in the larger space, and sequential closedness keeps its limit in the subset (our own). The work moves into showing that these sequence tests agree with the open-cover and open-complement definitions (our own).

**nLab:** [sequentially compact metric spaces are equivalently compact metric spaces](https://ncatlab.org/nlab/show/sequentially+compact+metric+spaces+are+equivalently+compact+metric+spaces). It says: “We need to show that it has a sub-sequence which converges.”

**Paper or page:** [Closed Subspace of Compact Space is Compact](https://proofwiki.org/wiki/Closed_Subspace_of_Compact_Space_is_Compact). It says: “A closed subspace of a compact topological space is also compact.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy sequence classes extend uniformly continuous maps to the completion

**Remember:** To extend a map, send the sequence to the limit of its images.

*True by definition.* MSC 54E50 (Complete metric spaces), 54E40. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A point of the completion of (X,d) is an equivalence class of Cauchy sequences in X. Two sequences are equivalent when their termwise distances tend to zero. The distance between their classes is the limit of their termwise distances.

**Problem.** Every uniformly continuous map into a complete metric space extends uniquely and uniformly continuously to the metric completion of its domain.

**How the definition helps.** Representing each new point by a sequence supplies the approximations usually chosen separately for that point (our own). Uniform continuity makes the image sequence Cauchy and gives equivalent representatives the same limit in the complete target (our own). Apply the original bound with half the output tolerance and half its input radius before passing to limits (our own). Density forces any continuous extension to take these same limits (our own).

**Paper or page:** [Theorem 3.4. (Extending uniformly continuous functions)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then there exists a unique continuous function ψ̃: M → N such that”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy sequences supply their own limits in the completion

**Remember:** Let each Cauchy sequence name the point it needs.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 2: later undergraduate.

**Definition.** In the Cauchy-sequence construction of a metric completion, identify sequences whose termwise distances tend to zero. A point is one such class, and the distance between classes is the limit of the termwise distances. Embed each original point as the class of its constant sequence.

**Problem.** The classes form a complete metric space containing the original space isometrically and densely. Each original Cauchy sequence converges to its own class.

**How the definition helps.** The distance from an original point to a sequence class is the limit of its distances to the terms (our own). The Cauchy condition therefore makes the embedded terms converge to their class, giving density (our own). For a Cauchy sequence of classes, approximate its nth class by an original point within 1/n (our own). These points are Cauchy, and their class is the limit once the distance formula is verified (our own).

**Paper or page:** [Completion Theorem (Metric Space)/Lemma 3](https://proofwiki.org/wiki/Completion_Theorem_(Metric_Space)/Lemma_3). It says: “M̃ = (Ã, d̃) is a completion of M.”

**Sources:** none listed. No primary source with a working link was found.

### Closure in a Banach space gives a complete metric completion

**Remember:** A closed subset of a complete space is already complete.

*True by definition.* MSC 54E50 (Complete metric spaces), 46E15. arXiv math.GN, math.MG. Level 2: later undergraduate.

**Definition.** Fix a point x₀ of a nonempty metric space X, and send each x to the bounded function y ↦ d(x, y) − d(x₀, y). Define the completion of X as the closure of this image in the Banach space of bounded real functions with the supremum norm.

**Problem.** This completion is a complete metric space that contains a dense copy of X with its original distances.

**How the definition helps.** The image is dense in its closure, which is complete because it is closed in a Banach space (our own). The triangle inequality bounds each pointwise difference by d(x,z), and evaluation at z attains that bound (our own).

**Wikipedia:** [Complete metric space](https://en.wikipedia.org/wiki/Complete_metric_space), [Kuratowski embedding](https://en.wikipedia.org/wiki/Kuratowski_embedding). It says: “Let (X, d) be a complete metric space. If A ⊆ X is a closed set, then A is also complete.”

**Sources:** none listed. No primary source with a working link was found.

### Completely metrizable, not complete, makes Gδ subsets Polish

**Remember:** Polish asks only that some complete metric exists, not the given one.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 54H05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is completely metrizable if at least one complete metric gives its topology. A Polish space is a separable completely metrizable space. A Gδ set is a countable intersection of open sets.

**Problem.** A subspace of a completely metrizable space is completely metrizable if and only if it is a Gδ set. So open subsets of Polish spaces, and the irrational numbers, are Polish spaces.

**How the definition helps.** A compatible complete metric can differ from the inherited metric, as the interval (0, 1) illustrates. Alexandrov’s theorem characterizes completely metrizable subspaces by the Gδ condition (our own). Open sets are Gδ, and the irrationals form a Gδ because their complement is countable (our own). Subspaces of separable metric spaces are separable (our own).

**Wikipedia:** [Polish space](https://en.wikipedia.org/wiki/Polish_space), [Completely metrizable space](https://en.wikipedia.org/wiki/Completely_metrizable_space). It says: “The space (0,1) ⊂ R, the open unit interval, is not a complete metric space with its usual metric inherited from R, but it is completely metrizable since it is homeomorphic to R.”

**Sources:** none listed. No primary source with a working link was found.

### Finite small covers give Cauchy subsequences

**Remember:** Keep infinitely many terms in one small piece at each scale.

*True by definition.* MSC 54E50 (Complete metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric space is totally bounded if it has finite covers by pieces of arbitrarily small diameter. Diameter is the least upper bound on all distances within a piece.

**Problem.** Every sequence in a totally bounded metric space has a Cauchy subsequence. If the space is also complete, every sequence has a convergent subsequence.

**How the definition helps.** At each scale a finite cover has a piece containing infinitely many remaining terms (our own). Retain their indices and repeat with diameters below 1/n at step n (our own). Choose one retained index per step, always larger than the previous choice (our own). Each resulting tail lies in one small piece, so the subsequence is Cauchy and converges if the space is complete (our own).

**Paper or page:** [Complete and Totally Bounded Metric Space is Sequentially Compact](https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact). It says: “Let M be complete and totally bounded. Then M is sequentially compact.”

**Sources:** none listed. No primary source with a working link was found.

### Nowhere dense singletons rule out a complete metric on the rationals

**Remember:** Each rational point is nowhere dense, but together they fill the rational space.

*Rules out counterexamples.* MSC 54E50 (Complete metric spaces), 54E52. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is nowhere dense if its closure contains no nonempty open set. This is stronger than having empty interior, since a set can be dense without containing an open set.

**Problem.** No complete metric on the rational numbers has the same open sets as the usual distance.

**How the definition helps.** Every singleton in the rationals is closed and contains no open neighborhood, so each is nowhere dense (our own). These singletons form a countable cover, which the Baire category theorem forbids in a nonempty complete metric space (our own). Any metric with the usual open sets preserves these facts (our own).

**Wikipedia:** [Baire category theorem](https://en.wikipedia.org/wiki/Baire_category_theorem). It says: “every nonempty complete metric space with no isolated point is uncountable.”

**Sources:** none listed. No primary source with a working link was found.

### Shrinking diameters force a unique point in nested closed sets

**Remember:** A shrinking diameter keeps every later choice close to every other later choice.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 2: later undergraduate.

**Definition.** The diameter of a nonempty set is the least upper bound on distances between its points. An unbounded set has infinite diameter.

**Problem.** A metric space is complete exactly when every nested sequence of nonempty closed sets with diameters tending to zero has exactly one common point.

**How the definition helps.** Shrinking diameters make any sequence choosing one point per set Cauchy (our own). Completeness gives a limit, and closedness keeps it in every set (our own). Two common points would have distance zero (our own). Conversely, closures of Cauchy tails have shrinking diameters, and the sequence converges to their common point (our own).

**Wikipedia:** [Cantor's intersection theorem](https://en.wikipedia.org/wiki/Cantor%27s_intersection_theorem). It says: “the intersection of any nested family of non-empty closed subsets whose diameters tend to zero is non-empty”

**Paper or page:** [Cantor's Intersection Theorem](https://proofwiki.org/wiki/Cantor's_Intersection_Theorem). It says: “there exists a unique x ∈ A such that”

**Sources:** none listed. No primary source with a working link was found.

### The extension property identifies any two metric completions

**Remember:** Extend the same original points in both directions, then compose.

*True by definition.* MSC 54E50 (Complete metric spaces), 54E40. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric completion contains the original space as a dense isometric copy. It is complete and has an extension property for distance-preserving maps into complete metric spaces. Each such map extends to exactly one distance-preserving map on the completion.

**Problem.** Any two metric completions are related by a unique distance-preserving bijection that fixes the original points.

**How the definition helps.** Extending the original copy in both directions gives two maps whose composites extend the identity (our own). Uniqueness makes both composites identity maps (our own). The work lies in constructing extensions by limits of original points, whose pairwise distances converge to the distances of their limits (our own).

**Wikipedia:** [Complete metric space](https://en.wikipedia.org/wiki/Complete_metric_space). It says: “The space M′ is determined up to isometry by this property”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided norm bounds transfer completeness from Euclidean space

**Remember:** Two bounds let Cauchy sequences and their limits pass between norms.

*True by definition.* MSC 54E50 (Complete metric spaces), 46B20. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** Two norms are equivalent if each is bounded by a constant times the other. This controls distances in both directions, not just which sets are open.

**Problem.** Every finite-dimensional real or complex normed space is complete. Every finite-dimensional subspace of a normed space is therefore closed.

**How the definition helps.** The two norm bounds transfer Cauchy sequences and their limits between the given norm and Euclidean coordinates (our own). The work lies in proving norm equivalence in finite dimensions and completeness of the real or complex coordinates (our own). Every complete metric subspace contains its limit points, so each finite-dimensional subspace is closed (our own).

**Paper or page:** [Finite Dimensional Subspace of Normed Vector Space is Closed](https://proofwiki.org/wiki/Finite_Dimensional_Subspace_of_Normed_Vector_Space_is_Closed). It says: “Then W is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted distances make countable products of complete spaces complete

**Remember:** Control a finite head and bound the tail by a geometric series.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Replace each coordinate distance d by d/(1 + d), which stays below one. The product metric adds these modified distances with weights 1/2ⁿ for coordinates numbered n = 1, 2, …. Unlike an unweighted maximum, the sum gives late coordinates uniformly small weight.

**Problem.** A countable product of complete metric spaces is complete for this weighted product metric.

**How the definition helps.** The weights make the total contribution beyond coordinate N at most 1/2ᴺ (our own). A Cauchy sequence is Cauchy in each coordinate because d/(1 + d) tends to zero exactly when d does (our own). Take each coordinate limit, then control finitely many coordinates and the remaining tail separately (our own). The metric inequality follows because t/(1 + t) is increasing and subadditive on nonnegative numbers (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “a metric on the topological product of countably many metric spaces can be obtained using the metric”

**Sources:** none listed. No primary source with a working link was found.

### Defining Baire spaces by their conclusion unifies two category theorems

**Remember:** Countably many dense open conditions still hold on a dense set.

*Makes the theorem clean to state or prove.* MSC 54E52 (Baire category, Baire spaces). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A topological space is Baire if every countable intersection of dense open subsets is dense.

**Problem.** Complete metric spaces and locally compact Hausdorff spaces are Baire. The open mapping theorem and the uniform boundedness principle use this category property. Every nonempty complete metric space without isolated points is uncountable.

**How the definition helps.** The Baire category theorem gives the same dense-intersection conclusion for both classes of spaces (our own). Applications can invoke that conclusion directly (our own). Without isolated points, the complements of singletons are dense and open in a metric space (our own). Countably many such complements cannot have empty intersection in a nonempty Baire space (our own).

**Wikipedia:** [Baire space](https://en.wikipedia.org/wiki/Baire_space), [Baire category theorem](https://en.wikipedia.org/wiki/Baire_category_theorem). It says: “According to the Baire category theorem, compact Hausdorff spaces and complete metric spaces are examples of Baire spaces.”

**Sources:**

- [Baire, R. (1899). Sur les fonctions de variables réelles. Annali di Matematica Pura ed Applicata 3, 1–123.](https://doi.org/10.1007/BF02419243)

### Residual sets let countably many generic properties hold at once

**Remember:** Countably many open dense conditions still leave a dense set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E52 (Baire category, Baire spaces), 37C20. arXiv math.GN, math.DS. Level 2: later undergraduate.

**Definition.** A property of maps in Cʳ(M, N) is generic if it holds on a residual set. A residual set contains a countable intersection of dense open sets. Its complement is called meagre.

**Problem.** In Cʳ(M, N) with the Whitney Cʳ topology, a countable intersection of generic properties is generic. Every generic property holds on a dense set of maps.

**How the definition helps.** Each generic property holds on a countable intersection of dense open sets (our own). Combining countably many such lists gives one countable list (our own). The function space is Baire, so the resulting intersection is dense.

**Wikipedia:** [Generic property](https://en.wikipedia.org/wiki/Generic_property). It says: “The space Cʳ(M, N), of Cʳ mappings between M and N, is a Baire space, hence any residual set is dense. This property of the function space is what makes generic properties typical.”

**Sources:** none listed. No primary source with a working link was found.

### Linear continua are exactly the connected ordered spaces

**Remember:** No gaps and no jumps: exactly the connected orders.

*Makes the theorem clean to state or prove.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A linear continuum is a totally ordered set with more than one element. It must be densely ordered, so between any two elements there is a third. It must also have the least upper bound property: every nonempty subset that is bounded above has a least upper bound.

**Problem.** A totally ordered set with more than one element is connected in its order topology exactly when it is a linear continuum. Continuous real-valued maps from a linear continuum have the intermediate value property.

**How the definition helps.** Adjacent points split the order at a jump, and a missing supremum splits it at a gap (our own). Conversely, the interval connectedness proof uses density and least upper bounds to rule out a separation (our own). Continuous real-valued images are therefore intervals (our own).

**Wikipedia:** [Linear continuum](https://en.wikipedia.org/wiki/Linear_continuum). It says: “we will prove that an ordered set in the order topology is connected if and only if it is a linear continuum.”

**Sources:** none listed. No primary source with a working link was found.

### Upper sets make Alexandrov continuity equivalent to monotonicity

**Remember:** Preserving order is exactly what makes preimages of upper sets upper.

*True by definition.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 06A06. arXiv math.GN. Level 2: later undergraduate.

**Definition.** An upper set in a preorder contains y whenever it contains x and x ≤ y. The Alexandrov topology on the preorder has exactly the upper sets as its open sets.

**Problem.** A map between preorders is continuous for their Alexandrov topologies exactly when it preserves order.

**How the definition helps.** An order-preserving map pulls upper sets back to upper sets, so it is continuous (our own). Conversely, the points above f(x) form an open set containing f(x) (our own). Continuity makes its preimage upper, so x ≤ y implies f(x) ≤ f(y) (our own).

**nLab:** [specialization topology](https://ncatlab.org/nlab/show/specialization+topology). It says: “A function between preorders is order-preserving if and only if it is a continuous map with respect to the specialisation topology.”

**Wikipedia:** [Alexandrov topology](https://en.wikipedia.org/wiki/Alexandrov_topology). It says: “A map f : X → Y between two spaces with Alexandrov topologies is continuous if and only if it is order preserving as a function between the underlying preordered sets.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness in the definition of continuum keeps nested intersections connected

**Remember:** Shrinking continua stay one piece; shrinking closed connected sets may split.

*Rules out counterexamples.* MSC 54F15 (Continua and generalizations), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A continuum is a nonempty compact connected metric space.

**Problem.** The intersection of a decreasing sequence of continua is again a continuum: nonempty, compact and connected.

**How the definition helps.** Compactness keeps the intersection nonempty and extends any separation of it to a separation of some member (our own). Without compactness, the nested closed half-lines \[n, ∞) have empty intersection (our own).

**Wikipedia:** [Continuum (topology)](https://en.wikipedia.org/wiki/Continuum_%28topology%29). It says: “If {Xₙ} is a nested family of continua, i.e. Xₙ ⊇ Xₙ₊₁, then their intersection is a continuum.”

**Sources:** none listed. No primary source with a working link was found.

### Peano continua are exactly the continuous images of an interval

**Remember:** Compact, connected, locally connected, metric: exactly what a curve can draw.

*Makes the theorem clean to state or prove.* MSC 54F15 (Continua and generalizations), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A continuum is a nonempty compact connected metric space. A Peano continuum is a continuum that is locally connected: every point has arbitrarily small connected neighbourhoods.

**Problem.** The Hahn–Mazurkiewicz theorem: a Hausdorff space is a continuous image of \[0, 1\] exactly when it is a Peano continuum.

**How the definition helps.** Local connectedness completes the list of properties in the Hahn–Mazurkiewicz theorem (our own). For compact Hausdorff spaces, metrizability is equivalent to second countability (our own). The theorem constructs a continuous surjection from the interval for every space satisfying the list (our own).

**Wikipedia:** [Space-filling curve](https://en.wikipedia.org/wiki/Space-filling_curve), [Continuum (topology)](https://en.wikipedia.org/wiki/Continuum_%28topology%29). It says: “A non-empty Hausdorff topological space is a continuous image of the unit interval if and only if it is a compact, connected, locally connected, second-countable space.”

**Sources:**

- [Mazurkiewicz, S. (1920). Sur les lignes de Jordan. Fundamenta Mathematicae 1, 166–209.](https://doi.org/10.4064/fm-1-1-166-209)

### Defining dimension by overlaps of open covers makes it topological

**Remember:** On a line, covers need only double overlaps; in the plane, triple.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F45 (Dimension theory in general topology), 55M10. arXiv math.GN, math.AT. Level 2: later undergraduate.

**Definition.** An open refinement is an open cover whose members each lie in some original cover member. For nonempty X, its covering dimension is the least n≥0 allowing every open cover an open refinement with at most n+1 members per point. If no such integer exists, the dimension is infinite.

**Problem.** For distinct positive integers m and n, ℝᵐ and ℝⁿ are not homeomorphic. They have the same cardinality, and one admits a continuous surjection onto the other.

**How the definition helps.** Homeomorphisms preserve open covers, open refinements and overlap counts (our own). They therefore preserve covering dimension. The Lebesgue covering dimension theorem gives dimension n for ℝⁿ, so different dimensions rule out a homeomorphism (our own).

**Wikipedia:** [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension), [Hausdorff dimension](https://en.wikipedia.org/wiki/Hausdorff_dimension), [Invariance of domain](https://en.wikipedia.org/wiki/Invariance_of_domain), [Topological manifold](https://en.wikipedia.org/wiki/Topological_manifold). It says: “It is impossible to map two dimensions onto one in a way that is continuous and continuously invertible. The topological dimension, also called Lebesgue covering dimension, explains why.”

**Sources:**

- [L. E. J. Brouwer, Beweis der Invarianz des n-dimensionalen Gebiets, Mathematische Annalen 71 (1912) 305–313](https://doi.org/10.1007/bf01456846)

### Asking curves to be simple makes them split the plane in two

**Remember:** A loop that never crosses itself has one inside and one outside.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F50 (Topological spaces of dimension \\(\\leq 1\\); curves, dendrites), 54D05. arXiv math.GN, math.GT. Level 2: later undergraduate.

**Definition.** A Jordan curve, or simple closed curve, is the image of a continuous injective map from the circle into the plane. So it is a closed loop that never crosses itself.

**Problem.** The complement of a Jordan curve in the plane has exactly two connected components. One is bounded, the other is unbounded, and the curve is the boundary of each.

**How the definition helps.** Injectivity gives one hypothesis covering every simple loop, including curves that are not polygonal (our own). The Jordan curve theorem gives both components and their common boundary (our own). A figure eight violates injectivity and has three complementary components (our own).

**Wikipedia:** [Jordan curve theorem](https://en.wikipedia.org/wiki/Jordan_curve_theorem). It says: “asserts that every simple closed curve in the plane (known as a Jordan curve) divides the plane into two regions”

**Sources:**

- [Veblen, O. (1905). Theory on plane curves in non-metrical analysis situs. Transactions of the American Mathematical Society 6(1), 83–98.](https://doi.org/10.1090/s0002-9947-1905-1500697-4)

### Simple curves cannot fill a square

**Remember:** A curve that never revisits a point cannot fill a square.

*Rules out counterexamples.* MSC 54F50 (Topological spaces of dimension \\(\\leq 1\\); curves, dendrites), 54F45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A simple curve is the image of an interval or a circle under an injective continuous map. So a simple curve does not cross itself.

**Problem.** A simple curve cannot fill a region of the plane. In particular, no simple curve is the whole unit square.

**How the definition helps.** Injectivity excludes Peano’s space-filling curve. Every compact subarc embeds in the plane and has empty interior by invariance of dimension (our own). Any interval or circle is a countable union of compact subarcs (our own). Their images are nowhere dense, so the Baire category theorem excludes a filled region (our own).

**Wikipedia:** [Space-filling curve](https://en.wikipedia.org/wiki/Space-filling_curve), [Curve](https://en.wikipedia.org/wiki/Curve). It says: “A non-self-intersecting continuous curve cannot fill the unit square because that will make the curve a homeomorphism from the unit interval onto the unit square”

**Sources:**

- [G. Peano, Sur une courbe, qui remplit toute une aire plane, Mathematische Annalen 36 (1890) 157–160](https://doi.org/10.1007/BF01199438)
- [W. F. Osgood, A Jordan curve of positive area, Trans. AMS 4 (1903) 107–112](https://doi.org/10.1090/s0002-9947-1903-1500628-5)

### Five topological conditions characterize the Cantor set (Brouwer)

**Remember:** Nonempty, no isolated points, only one-point connected pieces, compact and metric means Cantor.

*Makes the theorem clean to state or prove.* MSC 54F65 (Topological characterizations of particular spaces), 54D05, 54F45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A perfect space has no isolated points. A totally disconnected space has no connected subset containing two distinct points. A Cantor space is a space homeomorphic to the middle-thirds Cantor set.

**Problem.** Brouwer's theorem says that any two nonempty, perfect, compact, totally disconnected metrizable spaces are homeomorphic. So the Cantor set is the only such space up to homeomorphism.

**How the definition helps.** Brouwer’s characterization identifies every space satisfying these five conditions with the Cantor set. Composing the two homeomorphisms through the Cantor set identifies any pair (our own).

**Wikipedia:** [Cantor space](https://en.wikipedia.org/wiki/Cantor_space). It says: “A topological space is a Cantor space if and only if it is non-empty, perfect, compact, totally disconnected, and metrizable.”

**Sources:**

- [Brouwer, L. E. J. (1910). On the structure of perfect sets of points. Proceedings of the Koninklijke Akademie van Wetenschappen 12, 785–794.](https://dwc.knaw.nl/DL/publications/PU00013496.pdf)

### Perfect sets let closed sets split as perfect plus countable

**Remember:** Strip isolated points until nothing changes; a perfect core remains.

*Makes the theorem clean to state or prove.* MSC 54H05 (Descriptive set theory (topological aspects of Borel, analytic, projective, etc. sets)), 03E15. arXiv math.GN, math.LO. Level 2: later undergraduate.

**Definition.** A subset of a space is perfect if it is closed and has no isolated points. A Polish space is a separable space whose topology comes from a complete metric.

**Problem.** The Cantor–Bendixson theorem says that every closed subset of a Polish space is the disjoint union of a perfect set and a countable set. So no closed set of reals is a counterexample to the continuum hypothesis.

**How the definition helps.** Removing isolated points leaves the perfect part described by the Cantor–Bendixson theorem (our own). It consists of points whose every neighbourhood meets the closed set uncountably often (our own). A countable base covers the remaining points by countably many countable pieces (our own). Every nonempty perfect subset of a Polish space has the cardinality of the continuum (our own).

**Wikipedia:** [Perfect set property](https://en.wikipedia.org/wiki/Perfect_set_property), [Perfect set](https://en.wikipedia.org/wiki/Perfect_set). It says: “any closed subset of X can be written uniquely as the disjoint union of a perfect set and a countable set.”

**Sources:**

- [Bendixson, I. (1883). Quelques théorèmes de la théorie des ensembles de points. Acta Mathematica 2, 415–429.](https://doi.org/10.1007/bf02415227)

### In topological groups and vector spaces, closed points already give Hausdorff

**Remember:** In a group, separating the identity from one point separates all pairs.

*True by definition.* MSC 54H11 (Topological groups (topological aspects)), 54D10, 46A03. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** A topological group is a group with a topology in which multiplication and inversion are continuous. A space is T₁ when each single point is a closed set. It is Hausdorff when distinct points have disjoint open neighbourhoods.

**Problem.** A topological group, or a topological vector space, is Hausdorff as soon as single points are closed.

**How the definition helps.** Translations are homeomorphisms, so the space looks the same at every point, and one separation at the identity spreads everywhere. Our own sketch: if x ≠ e, choose a neighbourhood U of e that misses x. Continuity gives a neighbourhood V of e with V V⁻¹ ⊆ U, and then V and xV are disjoint. So authors who build the Hausdorff condition into the definition could ask only that {e} be closed.

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “Sometimes topological groups are understood to be Hausdorff (e.g. Bredon 72, p. 1).”

**Paper or page:** [Topological Group is T1 iff T2](https://proofwiki.org/wiki/Topological_Group_is_T1_iff_T2), [Topological Vector Space is Hausdorff iff T1](https://proofwiki.org/wiki/Topological_Vector_Space_is_Hausdorff_iff_T1). It says: “(1): (X, τ) is Hausdorff (2): (X, τ) is a T₁ space”

**Sources:**

- [ProofWiki, Topological Group is T1 iff T2](https://proofwiki.org/wiki/Topological_Group_is_T1_iff_T2)
- [ProofWiki, Topological Vector Space is Hausdorff iff T1](https://proofwiki.org/wiki/Topological_Vector_Space_is_Hausdorff_iff_T1)

### Defining ultrafilters by complement choice makes images of ultrafilters ultrafilters

**Remember:** Inverse images keep complements complementary.

*True by definition.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D80. arXiv math.GN. Level 3: graduate.

**Definition.** A proper filter is a nonempty family of subsets closed under supersets and finite intersections and excluding the empty set. An ultrafilter is a proper filter containing each subset or its complement. The image filter under f contains exactly those sets whose inverse images belong to the filter.

**Problem.** The image filter of an ultrafilter under any function is an ultrafilter.

**How the definition helps.** Inverse images preserve complements, so the source ultrafilter chooses between the preimages of each set and its complement (our own). Inverse images also preserve inclusions, finite intersections, the whole set and the empty set, giving a proper image filter (our own).

**Paper or page:** [Image of Ultrafilter is Ultrafilter](https://proofwiki.org/wiki/Image_of_Ultrafilter_is_Ultrafilter). It says: “Then the image filter f\[ℱ\] is an ultrafilter on Y.”

**Sources:** none listed. No primary source with a working link was found.

### With the complement test, ultrafilters on disjoint unions live on one summand

**Remember:** An ultrafilter chooses exactly one piece of a finite partition.

*True by definition.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D80. arXiv math.GN. Level 3: graduate.

**Definition.** Define an ultrafilter as a proper filter that contains, for each subset, either that subset or its complement. A proper filter is a nonempty family of subsets, closed under finite intersections and supersets, that omits the empty set. The other definition asks for a maximal proper filter.

**Problem.** Each ultrafilter on a disjoint union X + Y comes from a unique ultrafilter on X or on Y. It is the image of that ultrafilter under the inclusion map.

**How the definition helps.** The two summands are complements, so the ultrafilter contains exactly one. On that summand, take all subsets belonging to the original ultrafilter (our own). A set belongs to the original ultrafilter exactly when its trace on the chosen summand belongs (our own). This recovers the original filter by inclusion and forces the filter on the summand (our own).

**nLab:** [ultrafilter](https://ncatlab.org/nlab/show/ultrafilter). It says: “each ultrafilter U on X + Y must contain exactly one of X, Y”

**Sources:** none listed. No primary source with a working link was found.

### Compact families have compact unions

**Remember:** To cover a compact family, cover each member finitely first.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** On the nonempty compact subsets of X, the upper Vietoris topology has a basis indexed by open sets U ⊆ X. The basic set for U consists of all nonempty compact subsets of U.

**Problem.** The union of a compact family of compact subsets is compact, even for the upper Vietoris topology alone.

**How the definition helps.** Given an open cover of the union, each compact member lies inside a finite union of cover elements (our own). The corresponding upper Vietoris basic sets cover the family (our own). Compactness selects finitely many basic sets, whose finite lists of cover elements together cover the union (our own).

**Paper or page:** [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2). It says: “If $\\mathcal{A}\\subset (K<sub>Y</sub>(X),\\tau<sub>v</sub>)$ is compact, then so is $K:=\\bigcup\_{A\\in\\mathcal{A}}A\\subset X$.”

**Sources:**

- [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2)

### Compact misses make Fell spaces compact

**Remember:** Add infinity to every set, then test it inside a compact space.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** On all closed subsets of X, the Fell topology has two types of subbasic open sets. For each open U, take all closed sets meeting U. For each compact K, take all closed sets disjoint from K.

**Problem.** The Fell space of all closed subsets of a locally compact Hausdorff space is compact Hausdorff.

**How the definition helps.** The compact miss tests are exactly the containment tests that remain after every set gains the point at infinity (our own). Our own proof sends each closed set to its union with infinity in the one-point extension. This identifies the Fell space with the closed family of compact subsets containing infinity (our own). The work moves to compactness and Hausdorffness of the Vietoris space over a compact Hausdorff space (our own).

**Wikipedia:** [Hypertopology](https://en.wikipedia.org/wiki/Hypertopology). It says: “the Fell topology is always compact”

**Sources:**

- [J. M. G. Fell, A Hausdorff topology for the closed subsets of a locally compact non-Hausdorff space (1962)](https://doi.org/10.1090/S0002-9939-1962-0139135-6)

### Expansions give largest Hausdorff intermediates

**Remember:** Intersect the two expansions to keep every allowed point.

*True by definition.* MSC 54B20 (Hyperspaces in general topology), 68U05. arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** For nonempty compact plane sets, Hausdorff distance is the least radius whose closed neighborhoods of each set contain the other set. Given A,B at distance one and t ∈ \[0,1\], intersect the closed t-neighborhood of A with the closed (1−t)-neighborhood of B to obtain Mₜ.

**Problem.** The set Mₜ is at Hausdorff distance t from A and 1 − t from B. It contains every compact set with these two distances.

**How the definition helps.** Every candidate lies in both neighborhoods, hence in Mₜ (our own). Join each point of either set to a nearest point of the other (our own). On each segment the point a fraction t from its A end belongs to Mₜ, giving both upper bounds (our own). The triangle inequality forces equality because the bounds sum to one (our own).

**Paper or page:** [Between Shapes, Using the Hausdorff Distance](https://arxiv.org/abs/2009.14719v2). It says: “Sα is the maximal set that satisfies dH(A, Sα) = α and dH(B, Sα) = 1 − α.”

**Sources:**

- [Between Shapes, Using the Hausdorff Distance, Lemma 2](https://arxiv.org/abs/2009.14719v2)

### Proper maps act continuously on Fell spaces

**Remember:** A proper map pulls each compact miss test back to another.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** On all closed subsets of X, the Fell topology is generated by sets testing intersection with an open set or disjointness from a compact set. A continuous map is proper if every compact set has compact inverse image.

**Problem.** A proper map between locally compact Hausdorff spaces induces a continuous map on Fell hyperspaces by taking images of closed sets.

**How the definition helps.** The inverse image of a compact miss test is a miss test for the compact preimage (our own). An open hit test pulls back to an open hit test (our own). Our own account uses the proper mapping theorem to know that the image of a closed set is closed.

**Paper or page:** [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1). It says: “If Y is locally compact and f is proper, then f̃: CL₍F⁺₎(X) → CL₍F⁺₎(Y) is continuous.”

**Sources:**

- [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1)

### Vietoris hit tests preserve image continuity

**Remember:** Meeting an open set can be tested before taking closure.

*Rules out counterexamples. Confidence: medium.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** On nonempty closed subsets, the lower Vietoris topology is generated by the families of closed sets meeting U, one family for each open U. The induced map sends each closed subset to the closure of its image.

**Problem.** Suppose singletons in X are closed, and let Y be any topological space. A map from X to Y is continuous exactly when its induced map on closed sets is continuous for the lower Vietoris topologies.

**How the definition helps.** Closure preserves intersection with open sets, so a continuous map pulls each hit test back to a hit test (our own). Conversely, the continuous singleton map turns induced hit tests into open preimages for the original map (our own). For two indiscrete points, the identity into the discrete topology fails continuity (our own). Its induced map has a singleton domain and is continuous (our own).

**Paper or page:** [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1). It says: “f is continuous if and only if f̃: CLᵥ⁻(X) → CLᵥ⁻(Y) is continuous.”

**Sources:**

- [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1)

### Defining proper maps by compact preimages makes them extend to one-point compactifications

**Remember:** Pulling back a compact complement gives a neighborhood of infinity.

*True by definition.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D35. arXiv math.GN. Level 3: graduate.

**Definition.** Call a continuous map proper if the inverse image of each compact set is compact. Another definition asks for a closed map whose fibers, the inverse images of single points, are compact. The two definitions agree for maps between locally compact Hausdorff spaces.

**Problem.** Every proper map between locally compact Hausdorff spaces extends continuously between their one-point compactifications, sending infinity to infinity.

**How the definition helps.** A basic neighborhood of infinity has compact complement K (our own). Its preimage under the extension has compact complement by properness, so it is open (our own). On the original domain, continuity follows from continuity of the given map (our own).

**Wikipedia:** [Proper map](https://en.wikipedia.org/wiki/Proper_map). It says: “a function between topological spaces is called proper if inverse images of compact subsets are compact.”

**Sources:** none listed. No primary source with a working link was found.

### Proper maps make the space of ends a functor

**Remember:** A proper map cannot pull the ends of a space back into a compact set.

*Rules out counterexamples. Confidence: medium.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 55P57. arXiv math.GN, math.GT. Level 3: graduate.

**Definition.** A continuous map is proper if every compact set has compact preimage. An end chooses a connected component of the closure of X ∖ K for each compact K ⊆ X, compatibly under inclusion. The end space has the subspace topology from the product of these discrete component sets (our own).

**Problem.** A proper map f : X → Y induces a continuous map e(X) → e(Y), and this respects composition. So the space of ends is a functor on spaces and proper maps.

**How the definition helps.** For compact K in the target, properness supplies a compact preimage in the source (our own). Continuity sends the chosen component there into one component of the closure of Y ∖ K (our own). These coordinate maps are compatible, continuous and respect composition (our own). The constant map from ℝ to a point cannot act on ends because its target has none (our own).

**nLab:** [proper homotopy theory](https://ncatlab.org/nlab/show/proper+homotopy+theory). It says: “The assignment sending X to e(X) cannot be functorial on the category of spaces and continuous maps, since the contracting map ℝ → {0} is continuous”

**Sources:**

- [Hans Freudenthal, Über die Enden topologischer Räume und Gruppen, Mathematische Zeitschrift 33 (1931) 692–713](https://doi.org/10.1007/BF01174375)

### Compact tests make evaluation continuous

**Remember:** Test one compact neighborhood to control nearby inputs together.

*Rules out counterexamples.* MSC 54C35 (Function spaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The compact-open topology on continuous maps X → Y has subbasic sets {f ∣ f(K) ⊆ U}, for compact K ⊆ X and open U ⊆ Y.

**Problem.** Evaluation at a variable input is continuous for the compact-open topology when the domain is locally compact Hausdorff.

**How the definition helps.** When f(x) belongs to open U, choose a compact neighborhood K of x inside its preimage (our own). The compact test for K,U controls evaluation throughout the interior of K (our own). Pointwise tests on continuous real functions on \[0,1\] constrain only finitely many inputs at a time (our own). A function can vanish there and still spike arbitrarily near zero (our own).

**nLab:** [compact-open topology](https://ncatlab.org/nlab/show/compact-open+topology). It says: “given by (x,f) ↦ f(x) is continuous”

**Sources:**

- [Ralph H. Fox, On topologies for function spaces (1945)](https://doi.org/10.1090/S0002-9904-1945-08370-0)

### Hemicompactness metrizes compact-open function spaces

**Remember:** One sequence can track every compact test.

*Rules out counterexamples.* MSC 54C35 (Function spaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** A Hausdorff space is hemicompact if some sequence of compact sets contains every compact subset in at least one member. The compact-open topology tests whether a function sends a specified compact set into a specified open set.

**Problem.** Continuous maps from a hemicompact space to a metric space form a metrizable space in the compact-open topology.

**How the definition helps.** The cofinal compact sets suffice to test uniform convergence on every compact subset (our own). Sum their supremum distances, capped at one and weighted by 2⁻ⁿ for n ≥ 1, counting empty sets as zero (our own). This metric induces uniform convergence on compact sets, hence the compact-open topology (our own). In ℚ choose xₙ outside compact member n within 1/n of zero, obtaining a compact counterexample by adjoining zero (our own).

**Wikipedia:** [Hemicompact space](https://en.wikipedia.org/wiki/Hemicompact_space). It says: “defines a metric on C(X,M) which induces the compact-open topology.”

**Sources:** none listed. No primary source with a working link was found.

### Retracts preserve neighborhood extension

**Remember:** Extend into the larger target, then retract the result.

*True by definition.* MSC 54C55 (Absolute neighborhood extensor, absolute extensor, absolute neighborhood retract (ANR), absolute retract spaces (general properties)). arXiv math.GN. Level 3: graduate.

**Definition.** An absolute neighborhood extensor Y for metric spaces satisfies the following condition for every closed subset A of every metric space X. Each continuous map A → Y extends continuously over some open neighborhood of A in X. A metrizable absolute neighborhood retract admits a neighborhood retraction whenever embedded as a closed subspace of a metric space.

**Problem.** A retract of a metrizable absolute neighborhood extensor is an absolute neighborhood extensor. Thus a retract of a metrizable absolute neighborhood retract has the same property.

**How the definition helps.** The extension definition lets one extend into the original target and compose with the retraction (our own). Our own proof first regards the given map as a map into the larger target. The work of comparing the definitions lies in Dugundji’s equivalence of neighborhood retracts and neighborhood extensors for metric spaces (our own).

**Wikipedia:** [Absolute neighborhood retract](https://en.wikipedia.org/wiki/Absolute_neighborhood_retract). It says: “For each metric space X and closed subset A ⊂ X, each A → Y extends to a neighborhood of A”

**Sources:**

- [James Dugundji, An extension of Tietze’s theorem (1951)](https://doi.org/10.2140/pjm.1951.1.353)

### Michael's selection theorem makes gluing paracompact spaces easy

**Remember:** Select continuously on one piece, then prescribe those values where the pieces meet.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54C65 (Selections in general topology), 54D20, 54B17. arXiv math.GN. Level 3: graduate.

**Definition.** For a relation assigning subsets F(x) of a Banach space, lower semicontinuity means {x ∣ F(x) meets U} is open for every open U. A continuous selection is a continuous function s satisfying s(x) ∈ F(x) for every x.

**Problem.** A pushout of paracompact Hausdorff spaces along a closed embedding is again paracompact Hausdorff.

**How the definition helps.** Michael’s selection characterization tests paracompact Hausdorff spaces by lower semicontinuous relations with nonempty closed convex values (our own). The pushout is T₁ because the attaching inclusion is closed and both pieces are T₁ (our own). Select on the target of the attaching map, then prescribe its pulled-back selection on the closed attaching subset (our own). Michael’s relative selection theorem extends these values on the other piece, so the selections glue (our own).

**nLab:** [colimits of paracompact Hausdorff spaces](https://ncatlab.org/nlab/show/colimits+of+paracompact+Hausdorff+spaces). It says: “The relevant result, due to Ernest Michael, is particularly well-adapted to the study of colimits.”

**Sources:**

- [Ernest Michael, Continuous selections I, Annals of Mathematics 63 (1956) 361–382](https://doi.org/10.2307/1969615)

### Components defined by clopen sets give compact Hausdorff component spaces clopen bases

**Remember:** Each clopen set gives one coordinate in a cube of zeros and ones.

*True by definition. Confidence: medium.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54B15. arXiv math.GN. Level 3: graduate.

**Definition.** The quasicomponent of x consists of all points belonging to exactly the same clopen sets as x. A clopen set is both open and closed.

**Problem.** Collapse each connected component of a compact Hausdorff space to a point. The resulting quotient space has a basis of clopen sets.

**How the definition helps.** In a compact Hausdorff space, quasicomponents coincide with connected components. Recording membership in every clopen set therefore gives an injection of the component quotient into a product of discrete two-point spaces (our own). The coordinate tests are continuous, and compactness makes the injection into this Hausdorff product an embedding (our own). Finite coordinate tests give a clopen basis (our own).

**Paper or page:** [Quasicomponent of Compact Hausdorff Space is Connected](https://proofwiki.org/wiki/Quasicomponent_of_Compact_Hausdorff_Space_is_Connected). It says: “Let C be a quasicomponent of ⟨X, τ⟩. Then C is connected.”

**Sources:** none listed. No primary source with a working link was found.

### Defining sober spaces as spaces of points of locales makes products sober

**Remember:** Taking points turns products of locales into products of spaces.

*True by definition.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 18F70, 54B10. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A frame is a complete lattice in which finite meets distribute over arbitrary joins. Its points are maps to {0,1} preserving finite meets and arbitrary joins, with basic opens {p ∣ p(a)=1} for frame elements a. A space is sober if it is homeomorphic to such a point space.

**Problem.** Every product of sober spaces is sober.

**How the definition helps.** The points functor from locales to spaces is right adjoint to the opens functor, so it preserves products (our own). A product of point spaces is therefore the point space of the product locale (our own). The characterization of sober spaces as point spaces gives the result.

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “thus sober spaces are precisely those spaces that are the spaces of points of some locale”

**Sources:** none listed. No primary source with a working link was found.

### Defining complete regularity by the initial topology makes real tests detect continuity

**Remember:** Test a map by reading its real coordinates.

*True by definition.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54C05. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space completely regular if it has the initial topology of its continuous real functions. That is the coarsest topology that makes all these functions continuous. The usual definition asks that each point and each closed set not containing it be separated by a continuous real function.

**Problem.** Let X be completely regular. A map g into X is continuous if f ∘ g is continuous for every continuous real function f on X.

**How the definition helps.** The real functions generate the topology through their inverse images of open sets. Pulling such a set back along g gives an open set by continuity of the composite (our own). Inverse images preserve unions and intersections, so the same holds for every open set (our own).

**Wikipedia:** [Tychonoff space](https://en.wikipedia.org/wiki/Tychonoff_space). It says: “is completely regular if and only if it has the initial topology”

**Sources:** none listed. No primary source with a working link was found.

### Defining perfect normality by zero sets makes it pass to subspaces

**Remember:** Restrict a function to restrict its zero set.

*True by definition.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54B05. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space perfectly normal if every closed set is a zero set, the set where some continuous real function is zero. The other definition asks for a normal space in which every closed set is a countable intersection of open sets. Normal means that disjoint closed sets have disjoint open neighborhoods.

**Problem.** Every subspace of a perfectly normal space is perfectly normal.

**How the definition helps.** Restricting a function restricts its zero set (our own). Every relatively closed set has the form A ∩ F for an ambient closed set F (our own). If F is the zero set of f, then A ∩ F is the zero set of f restricted to A (our own).

**Wikipedia:** [Normal space](https://en.wikipedia.org/wiki/Normal_space). It says: “Equivalently, X is perfectly normal if and only if every closed set is the zero set of a continuous function.”

**Sources:** none listed. No primary source with a working link was found.

### Regularity makes H-closed spaces compact

**Remember:** Shrink first so a finite dense family really covers.

*Rules out counterexamples.* MSC 54D25 (\`\`\\(P\\)-minimal'' and \`\`\\(P\\)-closed'' spaces). arXiv math.GN. Level 3: graduate.

**Definition.** A Hausdorff space is H-closed if it is closed in every Hausdorff space containing it. Equivalently, each open cover has finitely many members with dense union. Regularity lets each point shrink an open neighborhood so its closure lies in the original neighborhood.

**Problem.** A regular Hausdorff H-closed space is compact.

**How the definition helps.** Regularity supplies an open refinement whose members have closures inside original cover members (our own). H-closedness gives finitely many refined sets with dense union, so their closures cover the space (our own). The corresponding original members give a finite subcover (our own). Adding the rationals as open to the unit interval gives a nonregular H-closed example that fails compactness (our own).

**Wikipedia:** [H-closed space](https://en.wikipedia.org/wiki/H-closed_space). It says: “Every regular Hausdorff H-closed space is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Compact Hausdorff spaces are the algebras of the ultrafilter monad

**Remember:** Compact gives each ultrafilter a limit; Hausdorff makes that limit unique.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54A20, 18C15. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** An ultrafilter converges to x if it contains every neighborhood of x. In the ultrafilter characterization, compactness requires a limit for every ultrafilter, and Hausdorffness allows at most one limit per ultrafilter.

**Problem.** Manes's theorem says that compact Hausdorff spaces are exactly the algebras of the ultrafilter monad β on Set. This monad sends a set S to the set βS of ultrafilters on S. So compact Hausdorff spaces form an algebraic (monadic) category.

**How the definition helps.** Existence and uniqueness of limits turn convergence into a function βS → S. Manes’s theorem identifies precisely these limit functions with ultrafilter algebras and continuous maps with algebra homomorphisms (our own).

**nLab:** [compact Hausdorff space](https://ncatlab.org/nlab/show/compact+Hausdorff+space), [relational beta-module](https://ncatlab.org/nlab/show/relational+beta-module), [ultrafilter](https://ncatlab.org/nlab/show/ultrafilter). It says: “compactness is equivalent to having every ultrafilter converge to some point, and Hausdorffness to having that point be unique.”

**Sources:**

- [Michael Barr, Relational algebras, in: Reports of the Midwest Category Seminar IV, Lecture Notes in Mathematics 137, Springer 1970, 39–55](https://www.math.mcgill.ca/barr/papers/relalgs.pdf)
- [Saunders Mac Lane, Categories for the Working Mathematician, Section VI.9, Graduate Texts in Mathematics 5, Springer (1971; Crossref gives 1978 for this DOI)](https://doi.org/10.1007/978-1-4757-4721-8)

### Compact spaces are small relative to closed inclusions of T₁-spaces

**Remember:** Compact spaces pass through colimits of closed inclusions, not through all colimits.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 18C35, 18N40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A space Y is compact relative to closed T₁ inclusions if hom(Y,−) preserves colimits of transfinite chains of closed inclusions between T₁ spaces. A space is T₁ if every singleton is closed.

**Problem.** Every compact space Y is compact relative to closed T₁ inclusions. So every map from Y into a CW complex factors through some skeleton.

**How the definition helps.** In a chain of inclusions, preserving the colimit means every map factors through a stage (our own). The compact smallness theorem gives this factorization for compact domains and closed inclusions of T₁ spaces. Applying it to the skeletal filtration gives the CW claim (our own).

**nLab:** [compact object](https://ncatlab.org/nlab/show/compact+object). It says: “If Y ∈ Top is a compact topological space, then hom(Y,-) preserves colimits of functors mapping out of limit ordinals, provided that the arrows of the cocone diagram, X\_α → X\_β, are closed inclusions of T₁-spaces”

**Sources:**

- [Mark Hovey, Model Categories, Mathematical Surveys and Monographs 63, AMS (1999)](https://doi.org/10.1090/surv/063)

### Defining βX by its extension property makes it map onto every compactification

**Remember:** Extend the embedding, and density makes the extension onto.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54C20. arXiv math.GN. Level 3: graduate.

**Definition.** A Stone–Čech compactification of a Tychonoff space X is a compact Hausdorff space βX containing X as a dense subspace. Every continuous map from X to a compact Hausdorff space extends uniquely to a continuous map on βX.

**Problem.** Let K be a Hausdorff compactification of X, that is, a compact Hausdorff space with a dense copy of X. Then a unique continuous surjection from βX onto K fixes the points of X.

**How the definition helps.** The embedding into K extends uniquely by the defining property. Its extended image is compact and therefore closed in K (our own). This image contains the dense copy of X, so it equals K (our own).

**Wikipedia:** [Stone–Čech compactification](https://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification). It says: “any continuous map from X into any other compact Hausdorff space factors uniquely through βX.”

**Sources:**

- [Eduard Čech, On Bicompact Spaces (1937)](https://doi.org/10.2307/1968839)

### Discrete Stone–Čech compactifications are projective

**Remember:** Choose a lift on discrete points, then extend once.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** For discrete X, its Stone–Čech compactification contains X densely and extends each continuous map into a compact Hausdorff space uniquely and continuously. Among compact Hausdorff spaces, P is projective if every continuous map P → Y lifts continuously along every continuous surjection Z → Y.

**Problem.** The Stone–Čech compactification of every discrete space is projective among compact Hausdorff spaces.

**How the definition helps.** Choose a preimage under the surjection for each prescribed value on the discrete space (our own). The resulting lift is continuous by discreteness, so it extends continuously over the compactification (our own). Its composite with the surjection agrees with the original map by uniqueness of extension (our own).

**nLab:** [Stone-Čech compactification](https://ncatlab.org/nlab/show/Stone-%C4%8Cech+compactification). It says: “is an extremally disconnected topological space. By a theorem by Gleason, these are precisely the projective objects”

**Sources:**

- [Andrew M. Gleason, Projective topological spaces (1958)](https://doi.org/10.1215/ijm/1255454110)

### Discretizing the dual gives locally compact abelian groups their Bohr compactification

**Remember:** Give the dual the discrete topology, then take its dual.

*True by definition. Confidence: medium.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 43A40, 22B05. arXiv math.GN, math.FA. Level 3: graduate.

**Definition.** The Bohr compactification is a continuous homomorphism b from G into a compact Hausdorff group B with the following property. Every continuous homomorphism from G to a compact Hausdorff group factors uniquely through b by a continuous homomorphism. For locally compact Hausdorff abelian G, let H be its Pontryagin dual with the discrete topology.

**Problem.** For a locally compact Hausdorff abelian group G, the dual of H, with the evaluation map from G, is the Bohr compactification of G.

**How the definition helps.** Pontryagin duality turns the extension problem for compact abelian targets into continuity of a homomorphism between discrete duals (our own). Dualizing back gives the required extension, uniquely (our own). Density of the evaluation image forces every extension into the abelian closure of the original image (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality), [Bohr compactification](https://en.wikipedia.org/wiki/Bohr_compactification). It says: “is a morphism into a compact group which is easily shown to satisfy the requisite universal property.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudocompact products preserve Stone–Čech products

**Remember:** Check bounded functions on the product, not just on its factors.

*Makes the theorem clean to state or prove.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** For a subspace of a compact Hausdorff space, the Stone–Čech compactification contains that subspace densely and extends every bounded continuous real function. Pseudocompactness means that every continuous real function is bounded.

**Problem.** Let X and Y be infinite subspaces of compact Hausdorff spaces. The natural map β(X × Y) → βX × βY is a homeomorphism exactly when X × Y is pseudocompact.

**How the definition helps.** The extension property turns the product comparison into a test on bounded continuous functions (our own). Glicksberg’s theorem connects that test to pseudocompactness. For two discrete copies of ℕ, the function equal to one on the diagonal and zero elsewhere does not extend (our own). Near any point (p, p) with p an added point, every product neighborhood meets both the diagonal and its complement (our own).

**Paper or page:** [Functions on products of pseudocompact spaces](https://arxiv.org/abs/2109.09716v2). It says: “If X is pseudocompact and Φ is continuous, then Φ extends to a continuous function Φ̂: X̂ → ℝ.”

**Sources:**

- [Functions on products of pseudocompact spaces](https://arxiv.org/abs/2109.09716v2)
- [Irving Glicksberg, Stone-Čech compactifications of products (1959)](https://doi.org/10.1090/S0002-9947-1959-0105667-4)

### Wallman filters yield compactness

**Remember:** Extend a family with nonempty finite intersections to obtain a common Wallman point.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** A Wallman point is a maximal family of closed sets excluding the empty set and closed under finite intersections and passage to larger closed sets. For each closed set F, take all Wallman points containing F. These sets generate the closed sets of the Wallman topology by finite unions and arbitrary intersections.

**Problem.** For any nonempty space with closed singletons, its Wallman extension is compact.

**How the definition helps.** Alexander’s subbase theorem reduces compactness to families of closed generators with the finite intersection property (our own). Their underlying closed sets also have the finite intersection property, since a common filter cannot contain the empty set (our own). Extend them to a maximal proper closed-set filter, which belongs to every generator in the family (our own).

**Wikipedia:** [Wallman compactification](https://en.wikipedia.org/wiki/Wallman_compactification). It says: “The points of the Wallman compactification ωX of a space X are the maximal proper filters in the poset of closed subsets of X.”

**Sources:**

- [Henry Wallman, Lattices and Topological Spaces (1938)](https://doi.org/10.2307/1968717)

### Exponentiable spaces are exactly the core-compact spaces

**Remember:** Core-compact means every open set is a union of open sets way below it.

*Makes the theorem clean to state or prove.* MSC 54D45 (Local compactness, \\(\\sigma\\)-compactness), 18F60, 06B35. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** For open sets V ⊆ U, write V ≪ U if every open cover of U has a finite subfamily covering V. A space is core-compact if every point x in every open U has an open neighborhood V with V ≪ U.

**Problem.** A space X is exponentiable in Top, that is, X × (−) has a right adjoint, if and only if X is core-compact.

**How the definition helps.** Core-compactness uses only open covers and gives one criterion for arbitrary topological spaces (our own). The Day–Kelly exponentiability theorem identifies this criterion with existence of the right adjoint (our own).

**nLab:** [exponential law for spaces](https://ncatlab.org/nlab/show/exponential+law+for+spaces), [locally compact topological space](https://ncatlab.org/nlab/show/locally+compact+topological+space), [locally compact locale](https://ncatlab.org/nlab/show/locally+compact+locale). It says: “An object X of Top is exponentiable if and only if it is core-compact.”

**Sources:**

- [Karl H. Hofmann, Jimmie D. Lawson, The spectral theory of distributive continuous lattices, Trans. AMS 246 (1978) 285–310](https://doi.org/10.1090/S0002-9947-1978-0515540-7)
- [J. M. E. Hyland, Function spaces in the category of locales, in: Continuous Lattices, Lecture Notes in Mathematics 871, Springer (1981) 264–281](https://doi.org/10.1007/BFb0089910)

### Compact tests survive quotients

**Remember:** Quotient tests still work after a second quotient.

*True by definition.* MSC 54D50 (\\(k\\)-spaces). arXiv math.GN. Level 3: graduate.

**Definition.** A space is compactly generated here when maps from compact Hausdorff spaces detect its open sets. This means a set is open whenever all those continuous maps have open preimages of it. Equivalently, the space is a quotient of a locally compact Hausdorff space.

**Problem.** Every quotient of a compactly generated space is compactly generated in the compact Hausdorff test sense.

**How the definition helps.** The quotient description makes a second quotient automatic because two quotient maps compose to a quotient map (our own). The work lies in proving that the open-set test and the quotient description agree (our own).

**Wikipedia:** [Compactly generated space](https://en.wikipedia.org/wiki/Compactly_generated_space). It says: “A quotient space of a CG-2 space is CG-2.”

**Sources:** none listed. No primary source with a working link was found.

### Compactly generated spaces make the exponential law hold for all spaces

**Remember:** A k-space has a topology that maps from compact Hausdorff spaces see completely.

*Makes the theorem clean to state or prove.* MSC 54D50 (\\(k\\)-spaces), 18F60, 55U40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A space X is compactly generated if continuous maps from compact Hausdorff spaces detect its open sets. Specifically, U ⊆ X is open exactly when every such map into X has open preimage of U.

**Problem.** The compactly generated spaces include CW complexes, manifolds and locally compact Hausdorff spaces, and they form a cartesian closed category. So Map(X × Y, Z) ≅ Map(X, Map(Y, Z)) holds for all compactly generated X, Y and Z.

**How the definition helps.** The compact tests define the topology used for both products and mapping spaces (our own). Take the compactly generated refinements of the usual product topology and compact-open mapping topology (our own). The cartesian closedness theorem for compactly generated spaces gives the exponential law for these choices.

**nLab:** [compactly generated topological space](https://ncatlab.org/nlab/show/compactly+generated+topological+space), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “As opposed to general topological spaces, compactly generated spaces form a cartesian closed category while still being general enough for most purposes of general topology”

**Sources:**

- [Norman E. Steenrod, A convenient category of topological spaces, Michigan Mathematical Journal 14 (1967) 133–152](https://doi.org/10.1307/mmj/1028999711)
- [David Gale, Compact sets of functions and function rings, Proc. AMS 1 (1950) 303–308](https://doi.org/10.2307/2032373)

### Products of CW complexes are CW complexes with the compactly generated product

**Remember:** In the compactly generated product, closed means closed on every compact piece.

*True by definition.* MSC 54D50 (\\(k\\)-spaces), 18F60, 55U40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** For Hausdorff compactly generated spaces X,Y, their compactly generated product has the underlying set X × Y. A subset is closed exactly when its intersection with every compact subset of the ordinary product is closed in that compact subset.

**Problem.** The compactly generated product of two CW complexes is a CW complex whose cells are the products of their cells.

**How the definition helps.** Every compact subset projects into finite subcomplexes of both factors (our own). Products of finite subcomplexes have the ordinary product topology and the product cell structure (our own). Thus compact tests detect exactly the weak topology of the product cells (our own).

**nLab:** [CW complex](https://ncatlab.org/nlab/show/CW+complex), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces), [compactly generated topological space](https://ncatlab.org/nlab/show/compactly+generated+topological+space). It says: “need not be a CW complex in the usual product topology, but it is in the compactly generated topology.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002), Appendix](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Fréchet–Urysohn spaces have sequential subspaces

**Remember:** One sequence reaches each closure point, even after passing to a subspace.

*True by definition.* MSC 54D55 (Sequential spaces). arXiv math.GN. Level 3: graduate.

**Definition.** A sequential space detects closed sets by whether they contain all limits of sequences from the set. In a Fréchet–Urysohn space, every point in a set’s closure is already the limit of a sequence from that set.

**Problem.** A space is Fréchet–Urysohn exactly when all of its subspaces are sequential.

**How the definition helps.** A sequence witnessing closure still converges in any subspace containing its terms and limit (our own). Conversely, for x in the closure of A outside A, consider A ∪ {x} (our own). There A fails to be closed, so sequentiality supplies a sequence in A converging to the only missing point x (our own).

**Wikipedia:** [Fréchet–Urysohn space](https://en.wikipedia.org/wiki/Fr%C3%A9chet%E2%80%93Urysohn_space). It says: “Every subspace of X is a sequential space.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded realcompact coordinates give compactness

**Remember:** Every bounded coordinate can live in a compact interval.

*Rules out counterexamples.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 3: graduate.

**Definition.** A realcompact space embeds as a closed subset of a product of real lines. A pseudocompact space has bounded image under each continuous real function.

**Problem.** A pseudocompact realcompact space is compact.

**How the definition helps.** Bounded coordinates put the closed image inside a product of compact intervals (our own). Tychonoff’s theorem makes the product compact, hence its closed subspace is compact (our own). The space of countable ordinals is countably compact, so each continuous real function is bounded (our own). Its open initial segments have no finite subcover, illustrating why pseudocompactness alone fails (our own).

**Wikipedia:** [Pseudocompact space](https://en.wikipedia.org/wiki/Pseudocompact_space). It says: “For a Hausdorff space X to be compact requires that X be pseudocompact and realcompact”

**Sources:**

- [Edwin Hewitt, Rings of real-valued continuous functions. I (1948)](https://doi.org/10.1090/S0002-9947-1948-0026239-9)

### Closed embeddings in powers of ℝ make products of realcompact spaces realcompact

**Remember:** A product of closed real embeddings is another closed real embedding.

*True by definition.* MSC 54D60 (Realcompactness and realcompactification), 54B10. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space realcompact if it is homeomorphic to a closed subspace of a product of copies of the real line. For Tychonoff spaces, an equivalent test uses maximal families of zero sets of continuous real functions.

**Problem.** Every product of realcompact spaces is realcompact.

**How the definition helps.** With the embedding definition, a product of closed embeddings is again a closed embedding. Embed each factor as a closed subspace of a power of ℝ. The product of these embeddings is a closed embedding into a product of powers of ℝ, which is itself a power of ℝ. The work goes into proving that the embedding test agrees with the zero-set test.

**Wikipedia:** [Realcompact space](https://en.wikipedia.org/wiki/Realcompact_space). It says: “as a closed subset in some (not necessarily finite) Cartesian power of the reals, with the product topology.”

**Sources:**

- [Edwin Hewitt, Rings of real-valued continuous functions. I (1948)](https://doi.org/10.1090/s0002-9947-1948-0026239-9)

### Countable covers detect realcompactness

**Remember:** An empty total intersection already has an empty countable intersection.

*True by definition.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 3: graduate.

**Definition.** A zero set is where a continuous real function vanishes. Consider a maximal family of zero sets in which every finite collection has nonempty intersection. The realcompactness test requires each such family to share a point whenever every countable collection does.

**Problem.** Assume the axiom of choice. A completely regular Hausdorff space is realcompact if each open cover has a countable subcover. Complete regularity means continuous real functions separate points from closed sets that omit them.

**How the definition helps.** The countable subcover gives exactly the countable test needed for zero sets (our own). If the family shares no point, its complements form an open cover (our own). A countable subcover would give countably many zero sets with empty intersection (our own). Hewitt’s theorem identifies this test with having a closed embedding in a product of real lines (our own).

**Paper or page:** [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1). It says: “CMC implies that every Tychonoff Lindelöf space is realcompact.”

**Sources:**

- [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1)
- [Edwin Hewitt, Rings of real-valued continuous functions. I (1948)](https://doi.org/10.1090/S0002-9947-1948-0026239-9)

### Proximity relations classify the compactifications of a Tychonoff space

**Remember:** Each compactification is fixed by which sets it lets touch.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E05 (Proximity structures and generalizations), 54D35. arXiv math.GN. Level 3: graduate.

**Definition.** A proximity δ is symmetric on subsets, relates intersecting sets, relates ∅ to nothing, and satisfies Aδ(B∪C) exactly when AδB or AδC. For far A,B, some E is far from A and its complement is far from B. Separation means distinct singletons are far, and compatibility means x ∈ cl(A) exactly when {x} δ A.

**Problem.** The Hausdorff compactifications of a Tychonoff space correspond one-to-one, up to equivalence, with the separated proximities compatible with its topology. Two sets are near exactly when their closures meet in the compactification.

**How the definition helps.** The relation records exactly which closures meet in the compactification. Smirnov’s compactification theorem recovers a unique compactification up to equivalence from every compatible separated proximity (our own).

**Wikipedia:** [Proximity space](https://en.wikipedia.org/wiki/Proximity_space). It says: “Given a compact Hausdorff space, there is a unique proximity space whose corresponding topology is the given topology: A is near B if and only if their closures intersect. More generally, proximities classify the compactifications”

**Sources:**

- [Wallace, A. D. (1941). Separation Spaces. Annals of Mathematics 42(3), 687–697.](https://doi.org/10.2307/1969257)

### Cauchy ultrafilters make complete totally bounded uniform spaces compact

**Remember:** Total boundedness makes ultrafilters Cauchy, and completeness makes them converge.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30, 54A20. arXiv math.GN. Level 3: graduate.

**Definition.** A filter on a uniform space is Cauchy if for every entourage U it contains a set A with A × A ⊆ U. The space is complete if every Cauchy filter converges. The ultrafilter test for total boundedness requires every maximal proper filter to be Cauchy.

**Problem.** A uniform space is compact if and only if it is complete and totally bounded.

**How the definition helps.** The ultrafilter definition reduces compactness in a complete space to convergence of Cauchy filters. A space is compact if and only if every ultrafilter converges. With the finite small-set cover definition, the extra step is that an ultrafilter must contain one member of every finite cover (our own). Conversely, compactness gives every filter a cluster point, and a Cauchy filter converges to any of its cluster points (our own).

**Wikipedia:** [Totally bounded space](https://en.wikipedia.org/wiki/Totally_bounded_space). It says: “Every ultrafilter on S is a Cauchy filter.”

**Sources:** none listed. No primary source with a working link was found.

### Closeness under ultrametric pseudometrics is an equivalence relation at every scale

**Remember:** Two steps shorter than a threshold give a direct step shorter than it.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54E35. arXiv math.GN, math.MG. Level 3: graduate.

**Definition.** An ultrametric pseudometric on X is a symmetric function d on X × X with nonnegative real values and d(x,x)=0 for every x. It satisfies d(x,z) ≤ max(d(x,y),d(y,z)) for all x,y,z. Distinct points may have distance zero.

**Problem.** A family of ultrametric pseudometrics generates a uniformity with a basis of equivalence relations. Conversely, every uniformity with such a basis comes from a family of ultrametric pseudometrics.

**How the definition helps.** The maximum rule turns the triangle inequality into transitivity of closeness, in our own explanation. Symmetry and reflexivity come from the usual distance laws. The maximum of two ultrametric pseudometrics is again one, so finite intersections of basis sets stay equivalence relations. For the converse, our own proof gives distance zero inside each equivalence class and distance one across classes.

**Paper or page:** [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1), [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1). It says: “If M is a system of non-Archimedean pseudo-metrics, then ℬ<sub>M</sub> consists of equivalence relations.”

**Sources:**

- [Daniel Windisch, Equivalent characterizations of non-Archimedean uniform spaces, arXiv:2111.09722v1 (2021)](https://arxiv.org/abs/2111.09722v1)

### Describing uniformities by pseudometrics gives every uniform space a separated quotient

**Remember:** If all distances agree that two points coincide, collapse them.

*True by definition. Confidence: medium.* MSC 54E15 (Uniform structures and generalizations), 54B15. arXiv math.GN. Level 3: graduate.

**Definition.** A family of pseudometrics on X generates a uniformity whose basic entourages impose finitely many bounds d(x,y)&lt;ε with ε&gt;0. This uniformity is separated if some generating pseudometric gives positive distance to each distinct pair.

**Problem.** Every uniform space has a separated quotient that is universal. Each uniformly continuous map into a separated uniform space factors uniquely through it.

**How the definition helps.** Identify points at distance zero for every generating pseudometric (our own). The triangle inequality makes each distance well defined on classes, and these distances separate distinct classes (our own). Uniform continuity forces equivalent points to have equal images in a separated target (our own). The induced map is uniformly continuous by the same finite distance tests, and surjectivity gives uniqueness (our own).

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “Every uniform space embeds uniformly in a product of pseudometric spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal entourages make continuous maps on compact Hausdorff domains uniformly continuous

**Remember:** Continuous maps pull diagonal neighbourhoods back to diagonal neighbourhoods.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30. arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity specifies which relations between points count as closeness relations, called entourages. A map is uniformly continuous if the preimage of each entourage under f × f is an entourage. On a compact Hausdorff space the entourages are exactly the neighbourhoods of the diagonal, the pairs (x, x).

**Problem.** Every continuous map from a compact Hausdorff space to a uniform space is uniformly continuous. Give the domain its unique uniformity that induces its topology.

**How the definition helps.** Each target entourage contains an open neighborhood of the diagonal (our own). Its preimage under f × f is an open neighborhood of the source diagonal (our own). The compact Hausdorff uniformity theorem makes every such neighborhood an entourage, proving uniform continuity (our own).

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “It follows then that if X, Y are uniform spaces with X compact Hausdorff and if f: X → Y is continuous, then f is uniformly continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Finite uniform subcovers make compact uniform spaces totally bounded

**Remember:** Compactness gives a finite subcover after refining to an open cover.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30. arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity is a system of closeness relations. A uniform cover is one in which a single closeness relation gives, at every point, a ball contained in some member of the cover. One definition of total boundedness asks that every uniform cover have a finite subcover.

**Problem.** Every compact uniform space is totally bounded.

**How the definition helps.** The cover definition lets us apply compactness to the interiors of the members of a uniform cover. These interiors cover the space because each point has a neighbourhood in some member (our own). A finite subcover by the interiors gives a finite subcover by the original sets.

**nLab:** [totally bounded space](https://ncatlab.org/nlab/show/totally+bounded+space). It says: “A uniform space X is totally bounded if every uniform cover of X has a finite subcover.”

**Sources:** none listed. No primary source with a working link was found.

### Metric topologies can hide nonmetrizable uniformities

**Remember:** Count uniform scales, not the open sets they generate.

*Makes the theorem clean to state or prove.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity describes closeness by sets of pairs called entourages. A base is a family of entourages such that every entourage contains one from the family. A metric generates a uniformity when its positive distance bounds give such a base.

**Problem.** A Hausdorff uniformity comes from a metric exactly when it has a countable base of close-pair relations.

**How the definition helps.** A metric supplies the countable base d(x,y)&lt;1/n for positive integers n (our own). The uniform metrization theorem gives the converse for a separated uniformity (our own). The base must control the given uniformity, even when its topology already admits a metric.

**Paper or page:** [Uniform Space whose Topology is Metrizable is not necessarily Metrizable](https://proofwiki.org/wiki/Uniform_Space_whose_Topology_is_Metrizable_is_not_necessarily_Metrizable). It says: “Then it is not necessarily the case that 𝒰 is itself a metrizable uniformity.”

**Sources:** none listed. No primary source with a working link was found.

### Product Cauchy tests are coordinatewise

**Remember:** Finitely many coordinate tests need only one common starting point.

*True by definition.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** A basic product entourage imposes one entourage condition in each of finitely many coordinates. A net is Cauchy if for each entourage some index bounds a tail whose terms are pairwise in that entourage.

**Problem.** A net in a product of uniform spaces is Cauchy exactly when each coordinate net is Cauchy.

**How the definition helps.** For a basic product entourage, each tested coordinate supplies a starting index (our own). Directedness gives a common upper bound, after which all the tests hold (our own). Conversely, testing one coordinate at a time gives the coordinate Cauchy conditions (our own).

**Paper or page:** [Lebesgue Property and G-completeness in Generalized Quasi-uniform Spaces](https://arxiv.org/abs/2311.02325v1). It says: “Then a net (Rₙ)₍ₙ∈D₎ in X is Cauchy if and only if for each i ∈ I, the net (πᵢ(Rₙ))₍ₙ∈D₎ in Xᵢ is Cauchy.”

**Sources:**

- [Lebesgue Property and G-completeness in Generalized Quasi-uniform Spaces](https://arxiv.org/abs/2311.02325v1)

### Uniform scales become partitions

**Remember:** At each scale, one partition says which points are close.

*True by definition.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity describes closeness using sets of pairs called entourages. It is non-Archimedean if every entourage contains an entourage that is an equivalence relation. A cover is uniform if, for some entourage, each point and all its neighbors fit inside one cover member.

**Problem.** A uniformity is non-Archimedean exactly when every uniform cover has a finer uniform cover made of disjoint blocks.

**How the definition helps.** The classes of an equivalence relation give precisely the blocks needed for a partition (our own). Conversely, pairs in the same block form an equivalence relation (our own). The general correspondence between uniform covers and entourages supplies the translation between bases (our own).

**Paper or page:** [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1). It says: “The maps in remark 2.1.1 restrict to bijections of non-Archimedean diagonal uniformities and covering uniformities having a basis consisting of partitions.”

**Sources:**

- [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1)

### Short maps and infinite distances make the category of metric spaces complete

**Remember:** Short maps never stretch distances, and the distance ∞ lets every supremum exist.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability), 54E40, 18D20. arXiv math.CT, math.MG. Level 3: graduate.

**Definition.** A Lawvere metric on X assigns d(x,y) ∈ \[0,∞\] to each ordered pair, with d(x,x)=0 and d(x,z) ≤ d(x,y)+d(y,z) for all points. A short map f satisfies d(f(x),f(y)) ≤ d(x,y) for every pair.

**Problem.** The category of Lawvere metric spaces and short maps is complete and therefore has arbitrary products. Its isomorphisms are exactly the bijective distance-preserving maps.

**How the definition helps.** The coordinate supremum gives the least distance bound making every projection short (our own). It may be infinite, as in a product of real lines with unbounded coordinate differences. Equalizers inherit their distances, so products and equalizers give all small limits (our own). A short bijection has short inverse exactly when it preserves distances (our own).

**nLab:** [short map](https://ncatlab.org/nlab/show/short+map), [metric space](https://ncatlab.org/nlab/show/metric+space). It says: “For example, Met<sub>ord</sub> fails to have arbitrary products ∏<sub>i ∈ I</sub> X<sub>i</sub>, on account of the finiteness axiom where the putative distance d((x<sub>i</sub>), (y<sub>i</sub>)) = sup<sub>i</sub> d(x<sub>i</sub>, y<sub>i</sub>) may not exist as a finite number.”

**Sources:**

- [F. William Lawvere, Metric spaces, generalized logic, and closed categories, Rendiconti del Seminario Matematico e Fisico di Milano 43 (1973) 135–166](https://doi.org/10.1007/BF02924844)

### Generalized ordered spaces are subspaces of ordered spaces, by an embedding theorem

**Remember:** Upper and lower open tests describe ordered subspaces from within.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54C25. arXiv math.GN. Level 3: graduate.

**Definition.** A generalized ordered space is a totally ordered Hausdorff space whose topology has a subbasis of upper and lower sets. A linearly ordered topological space carries the order topology.

**Problem.** The spaces of the inside kind are exactly the subspaces of linearly ordered spaces, with the induced order.

**How the definition helps.** Intersecting open rays with a subspace produces upper and lower subbasic sets in its induced order (our own). Conversely, the ordered embedding theorem realizes each space satisfying the intrinsic condition as an ordered topological subspace.

**Paper or page:** [GO-Space Embeds Densely into Linearly Ordered Space](https://proofwiki.org/wiki/GO-Space_Embeds_Densely_into_Linearly_Ordered_Space). It says: “there is a linearly ordered space (X, ⪯′, τ′) and a mapping from Y to X which is a order embedding and a topological embedding.”

**Sources:**

- [ProofWiki, GO-Space Embeds Densely into Linearly Ordered Space](https://proofwiki.org/wiki/GO-Space_Embeds_Densely_into_Linearly_Ordered_Space)

### Metric continua with exactly two non-cut points are arcs

**Remember:** A non-cut point leaves the space connected when removed.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F15 (Continua and generalizations), 54F50. arXiv math.GN. Level 3: graduate.

**Definition.** A cut point of a connected space is a point whose removal leaves a disconnected space. A continuum here is a nonempty compact connected metric space.

**Problem.** Every continuum with more than one point has at least two non-cut points. A metric continuum with exactly two non-cut points is homeomorphic to \[0, 1\].

**How the definition helps.** Counting points whose removal preserves connectedness states both conclusions for metric continua (our own). The non-cut-point theorem gives the lower bound, and the arc characterization identifies the case of equality (our own).

**Wikipedia:** [Cut point](https://en.wikipedia.org/wiki/Cut_point), [Continuum (topology)](https://en.wikipedia.org/wiki/Continuum_%28topology%29). It says: “Every continuum with exactly two noncut-points is homeomorphic to the unit interval.”

**Sources:**

- [Moore, R. L. (1920). Concerning simple continuous curves. Transactions of the American Mathematical Society 21, 333–347.](https://doi.org/10.1090/s0002-9947-1920-1501148-4)

### Covering dimension n gives an embedding in Euclidean space of dimension 2n+1

**Remember:** Refine each cover until at most n+1 sets meet at any point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F45 (Dimension theory in general topology), 54C25. arXiv math.GN. Level 3: graduate.

**Definition.** An open cover has order n + 1 if some point lies in n + 1 of its sets but no point lies in more. A space has covering dimension at most n if every finite open cover has an open refinement of order at most n + 1.

**Problem.** Every compact metric space of covering dimension n embeds in ℝ²ⁿ⁺¹.

**How the definition helps.** An open refinement with at most n+1 sets per point has a nerve of dimension at most n (our own). A partition of unity gives a map into this nerve (our own). The Menger–Nöbeling theorem supplies the embedding in dimension 2n+1.

**Wikipedia:** [Inductive dimension](https://en.wikipedia.org/wiki/Inductive_dimension), [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension). It says: “The Menger–Nöbeling theorem (1932) states that if X is compact metric separable and of dimension n, then it embeds as a subspace of Euclidean space of dimension 2n + 1.”

**Sources:**

- [Nöbeling, G. (1931). Über eine n-dimensionale Universalmenge im R²ⁿ⁺¹. Mathematische Annalen 104, 71–80.](https://doi.org/10.1007/bf01457921)
- [Lebesgue, H. (1921). Sur les correspondances entre les points de deux espaces. Fundamenta Mathematicae 2, 256–285.](https://doi.org/10.4064/fm-2-1-256-285)

### Giving the empty set dimension −1 starts the inductive dimension

**Remember:** Empty is −1, so empty boundaries mean dimension 0.

*True by definition.* MSC 54F45 (Dimension theory in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** Only the empty space has small inductive dimension −1. For integers n ≥ 0, ind X ≤ n means each point has arbitrarily small open neighborhoods with boundaries of dimension at most n−1.

**Problem.** A nonempty space has inductive dimension 0 exactly when it has a base of sets that are both open and closed. For example, the rational numbers have dimension 0.

**How the definition helps.** At n=0 the boundary must be empty, so each basic neighborhood is closed as well as open (our own). Conversely, a clopen basis gives the required empty boundaries (our own). In ℚ, intervals with irrational endpoints give such a basis (our own).

**Wikipedia:** [Inductive dimension](https://en.wikipedia.org/wiki/Inductive_dimension), [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension). It says: “We want the dimension of a point to be 0, and a point has empty boundary, so we start with ind(∅)=Ind(∅)=−1.”

**Sources:**

- [Urysohn, P. (1925). Mémoire sur les multiplicités Cantoriennes. Fundamenta Mathematicae 7, 30–137.](https://doi.org/10.4064/fm-7-1-30-137)

### Small inductive dimension is hereditary

**Remember:** Restrict the neighborhoods and the boundaries only get smaller.

*True by definition.* MSC 54F45 (Dimension theory in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** Small inductive dimension is at most n if every point has arbitrarily small open neighborhoods whose boundaries have dimension at most n − 1. The empty space starts the recursion at −1. Covering dimension instead measures how many sets of a refined cover can overlap.

**Problem.** For a separable metric space X, every subspace has small inductive dimension at most that of X. So every subspace also has covering dimension at most that of X.

**How the definition helps.** The recursive boundary test passes to subspaces because restricting an open set can only shrink its boundary (our own). Induction therefore bounds the dimension of each restricted boundary by the original bound (our own). The cited subspace theorem gives this for small inductive dimension. The dimension comparison theorem identifies it with covering dimension for separable metric spaces and their subspaces (our own).

**nLab:** [inductive dimension](https://ncatlab.org/nlab/show/inductive+dimension). It says: “for every subspace M of a regular space X we have ind(M) ≤ ind(X).”

**Sources:**

- [Ryszard Engelking, Dimension Theory (1978)](https://www.maths.ed.ac.uk/~v1ranick/papers/engelking.pdf)

### Sphere extensions glue dimension bounds

**Remember:** Extend over one closed piece, then extend over the next.

*True by definition.* MSC 54F45 (Dimension theory in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** For an integer n ≥ 0, the sphere test asks whether every continuous map from a closed subset into the n-sphere extends over the space. Covering dimension at most n means every finite open cover has a finite open refinement with at most n + 1 sets through each point.

**Problem.** Let n ≥ 0 be an integer. If a normal Hausdorff space is a finite union of closed subspaces of covering dimension at most n, its dimension is at most n.

**How the definition helps.** The sphere test lets one extend over each closed piece in turn while keeping the values already fixed (our own). Our own proof joins each extension to the map already defined using the closed-set pasting lemma. The work moves to the dimension theorem equating sphere extension with the open-cover bound on normal spaces (our own).

**Wikipedia:** [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension). It says: “if f: A → Sⁿ is continuous, then there is an extension of f to g: X → Sⁿ.”

**Sources:**

- [Ryszard Engelking, Dimension Theory (1978)](https://www.maths.ed.ac.uk/~v1ranick/papers/engelking.pdf)

### Defining extremally disconnected spaces as projective makes their retracts extremally disconnected

**Remember:** Lift from the larger space, then restrict to its retract.

*True by definition.* MSC 54G05 (Extremally disconnected spaces, \\(F\\)-spaces, etc.), 54B30. arXiv math.GN. Level 3: graduate.

**Definition.** Among compact Hausdorff spaces, call a space extremally disconnected if it is projective. Projective means that every continuous map from it lifts along every continuous surjection between compact Hausdorff spaces. The usual definition says that the closure of each open set is open.

**Problem.** A retract of an extremally disconnected compact Hausdorff space is extremally disconnected. A retract of E is a subspace A with a continuous map from E onto A that fixes each point of A.

**How the definition helps.** Compose a map from the retract with the retraction to obtain a map from the projective space (our own). Lift this composite along the given surjection, then restrict the lift to the retract (our own). Gleason’s theorem identifies projectivity with extremal disconnectedness for compact Hausdorff spaces.

**nLab:** [extremally disconnected topological space](https://ncatlab.org/nlab/show/extremally+disconnected+topological+space). It says: “Extremally disconnected topological spaces are precisely the projective objects in the category of compact Hausdorff topological spaces”

**Sources:**

- [Andrew M. Gleason, Projective topological spaces (1958)](https://doi.org/10.1215/ijm/1255454110)

### Scattered spaces force point masses

**Remember:** On a scattered compact space, no positive mass can stay diffuse.

*Rules out counterexamples. Confidence: medium.* MSC 54G12 (Scattered spaces), 28C15. arXiv math.GN. Level 3: graduate.

**Definition.** A compact Hausdorff space is scattered if every nonempty subset has a point isolated within that subset. Total disconnectedness only says that the connected components are single points.

**Problem.** Every finite Radon measure on a scattered compact Hausdorff space is a countable sum of point masses. A Radon measure approximates the mass of each Borel set from within by compact sets.

**How the definition helps.** Remove the countably many positive point masses from the measure (our own). The remaining Radon measure gives full mass to its support by inner regularity (our own). If nonzero, its support has an isolated point, whose isolating neighborhood forces positive mass at that point (our own). The Cantor set with fair-coin measure shows why total disconnectedness alone fails (our own).

**nLab:** [scattered space](https://ncatlab.org/nlab/show/scattered+space). It says: “A topological space X is called scattered if X doesn't contain nonempty dense-in-itself subsets.”

**Sources:** none listed. No primary source with a working link was found.

### Closed subgroups give metrizable quotients

**Remember:** Closed cosets stay a positive distance from points outside them.

*Rules out counterexamples.* MSC 54H11 (Topological groups (topological aspects)), 54E35. arXiv math.GN. Level 3: graduate.

**Definition.** A subgroup H is closed if its complement is open. The quotient G/H consists of the left cosets gH. A set of cosets is open when its preimage in G is open.

**Problem.** The coset space of a closed subgroup of a first-countable topological group is metrizable. First countable means that each point has a countable neighborhood base.

**How the definition helps.** After quotienting by the identity closure, Birkhoff–Kakutani gives a compatible right-invariant metric (our own). Right translations by H act isometrically, so the distance from a representative to another coset defines the orbit pseudometric (our own). Closed cosets make it positive on distinct cosets, and its balls are projections of open balls (our own). The quotient ℝ/ℚ instead has the indiscrete topology (our own).

**Paper or page:** [The quotient spaces of topological groups with a q-point](https://arxiv.org/abs/2311.08814v1). It says: “Let H be a closed subgroup of a first-countable topological group G (without any separator axiom on G). Then the quotient space G/H is metrizable.”

**Sources:** none listed. No primary source with a working link was found.

### Group uniformities make Hausdorff topological groups completely regular

**Remember:** Group closeness gives continuous functions that separate points from closed sets.

*True by definition.* MSC 54H11 (Topological groups (topological aspects)), 54D15, 54E15. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** A space is completely regular if continuous functions into \[0, 1\] separate each point from each closed set that misses it. A topological group carries a uniformity: x and y are U-close when x⁻¹y ∈ U, for each neighbourhood U of the identity.

**Problem.** Every Hausdorff topological group is completely regular.

**How the definition helps.** The group uniformity puts the group under the general theorem that a topology from a uniformity is completely regular. The work lies in proving that theorem and checking that the group relations recover the original topology. A direct proof would construct a separating function separately for each point and closed set (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “The uniform topology for either coincides with the topology of G.”

**Wikipedia:** [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “Every uniformizable space is a completely regular topological space.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudotopological spaces form a quasitopos that contains Top

**Remember:** A pseudotopology says which ultrafilters converge where, and asks nothing more.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 18F60. arXiv math.GN, math.CT. Level 4: research.

**Definition.** Classically, a pseudotopological space assigns each ultrafilter on its underlying set a set of limits. For every x, the principal ultrafilter at x must have x among its limits. A map is continuous if it sends each convergent ultrafilter to an ultrafilter converging to the image of each original limit (our own).

**Problem.** Pseudotopological spaces form a quasitopos that contains Top as a full reflective subcategory. So they form a locally cartesian closed category, with function spaces and fibrewise function spaces for all objects.

**How the definition helps.** The ultrafilter description allows limits to be specified subject only to the principal-ultrafilter condition (our own). The quasitopos theorem for pseudotopological spaces supplies local cartesian closedness. Topological convergence gives the full embedding, and topological modification gives its reflector (our own).

**nLab:** [pseudotopological space](https://ncatlab.org/nlab/show/pseudotopological+space), [nice category of spaces](https://ncatlab.org/nlab/show/nice+category+of+spaces). It says: “is a quasitopos and may be thought of as a nice category of spaces that includes Top as a full subcategory.”

**Sources:**

- [Mike Shulman, Pseudotopological spaces and the Stone-Čech compactification (notes, 2008)](https://home.sandiego.edu/~shulman/papers/pstonecech.pdf)
- [Gustave Choquet, Convergences, Annales de l'université de Grenoble 23 (1947–1948) 57–112](https://www.numdam.org/item/AUG_1947-1948__23__57_0/)

### Sequential nets give sequence arguments without countable choice

**Remember:** A sequential net is a sequence that has not chosen its terms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 03F60, 54D55. arXiv math.GN, math.LO. Level 4: research.

**Definition.** A sequential net in X assigns a nonempty set of possible values in X to each positive integer. It is Cauchy if every ε&gt;0 admits N such that any values at indices m,n ≥ N are less than ε apart (our own).

**Problem.** Without weak countable choice, a Dedekind real need not be the limit of a Cauchy sequence of rationals. But every located Dedekind real is represented by a sequential Cauchy net of rationals.

**How the definition helps.** Use all rationals within 1/n of the located real x as the values at index n (our own). Each set is inhabited, and no simultaneous choice is needed (our own). Two values at indices m,n differ by less than 1/m+1/n, and all values approach x (our own).

**nLab:** [sequential net](https://ncatlab.org/nlab/show/sequential+net), [sequence](https://ncatlab.org/nlab/show/sequence). It says: “Without weak countable choice, many of the usual properties of metric spaces and other sequential spaces fail, but they continue to hold using sequential nets in the place of sequences.”

**Sources:** none listed. No primary source with a working link was found.

### Subsequential spaces form a quasitopos that keeps CW complexes intact

**Remember:** Constants converge, subsequences keep limits, and further subsequences detect convergence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54B30, 18F60. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A subsequential space specifies limits of sequences, subject to three rules. A constant sequence converges to its value, and every subsequence retains each limit of the original sequence. If every subsequence has a further subsequence converging to x, the original sequence converges to x.

**Problem.** Subsequential spaces form a locally presentable quasitopos, so a locally cartesian closed, complete and cocomplete category. It contains the sequential spaces, such as metrizable spaces and CW complexes, and it keeps the colimits that build CW complexes.

**How the definition helps.** The convergence rules include ordinary sequential spaces and their sequence-preserving maps (our own). The quasitopos theorem for subsequential spaces gives local cartesian closure, and local presentability supplies completeness and cocompleteness (our own). The CW colimit comparison identifies the successive cell attachments with those in Top.

**nLab:** [subsequential space](https://ncatlab.org/nlab/show/subsequential+space). It says: “thus it makes no difference whether you carry out the construction of a CW complex in Top and then regard the result as a subsequential space, or carry out the construction in SeqPsTop to begin with.”

**Sources:**

- [Matías Menni, Alex Simpson, Topological and limit-space subcategories of countably-based equilogical spaces, Mathematical Structures in Computer Science 12 (2002) 739–770](https://doi.org/10.1017/S0960129502003699)

### Openness of a surjection matches openness of its map on closed sets

**Remember:** Vietoris neighborhoods are built from open sets, so open maps carry them.

*True by definition. Confidence: medium.* MSC 54B20 (Hyperspaces in general topology), 54C10. arXiv math.DS, math.GN. Level 4: research.

**Definition.** For compact Hausdorff X, the Vietoris hyperspace consists of the nonempty closed subsets of X. Its basic neighborhoods require containment in a finite union of open sets and intersection with each listed set. A continuous map between compact Hausdorff spaces acts by taking images.

**Problem.** Let f be a continuous surjection between compact Hausdorff spaces. Then f is open exactly when 2ᶠ is open for the Vietoris topologies.

**How the definition helps.** An open f sends the basic set for U₁,…,Uₙ onto the basic set for their images (our own). Cover a target member B by images of compact neighborhoods inside the Uᵢ and select finitely many (our own). Intersect their union with f⁻¹(B), adding one lift in each Uᵢ to meet every test (our own). Conversely, testing the hyperspace image of the basic set for U on singletons shows f(U) is open (our own).

**Paper or page:** [Characterizations of open and semi-open maps of compact Hausdorff spaces by induced maps](https://arxiv.org/abs/2404.12727v2). It says: “Then f is open iff 2ᶠ: 2ˣ → 2ʸ is open.”

**Sources:**

- [Xiongping Dai, Yuxun Xie, Characterizations of open and semi-open maps of compact Hausdorff spaces by induced maps, arXiv:2404.12727 (2024)](https://arxiv.org/abs/2404.12727v2)

### Pointwise quotients yield Vietoris hit tests

**Remember:** Finite coordinate tests become hit tests when order is forgotten.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 4: research.

**Definition.** Give maps from ℕ to X the pointwise topology, which tests values at finitely many inputs. Identify maps when the closures of their ranges agree. The lower Vietoris topology tests whether a closed set meets a given open set.

**Problem.** Give sequences the pointwise topology and closed sets the lower Vietoris topology. Then the map sending a sequence to the closure of its range is a quotient map onto the nonempty closed sets with countable dense subsets.

**How the definition helps.** A hit test pulls back to the union of the corresponding single-coordinate tests, giving continuity (our own). A finite coordinate condition maps onto the intersection of the corresponding hit tests (our own). Choose one required point per specified coordinate and use the remaining coordinates for a dense sequence (our own). Thus the map is an open continuous surjection and hence a quotient map (our own).

**Paper or page:** [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2). It says: “the map $q:(\\mathcal{F},\\tau<sub>p</sub>)\\rightarrow (Cl<sub>Y</sub>(X),\\tau<sub>v</sub><sup>-</sup>)$ is a quotient map”

**Sources:**

- [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2)

### Patch topologies keep spectral limits compact

**Remember:** Complemented tests make the compatibility equations closed.

*True by definition.* MSC 54B35 (Spectra in general topology). arXiv math.GN. Level 4: research.

**Definition.** A spectral space is compact and has a base of compact open sets closed under finite intersections. Each nonempty closed set that cannot split into two smaller closed sets must also be the closure of exactly one point. A spectral map is continuous and pulls compact open sets back to compact open sets. The patch topology is generated by compact open sets and their complements.

**Problem.** Any inverse limit of spectral spaces and spectral maps is compact in its original limit topology.

**How the definition helps.** The patch theorem makes every spectral space compact Hausdorff in its patch topology (our own). Spectral maps preserve the generating tests under preimages, so they remain continuous (our own). Compatibility equations cut out closed subsets of the compact product because the target diagonals are closed (our own). Their intersection is compact and stays compact in the coarser original limit topology (our own).

**Paper or page:** [Lemma 5.24.1.](https://stacks.math.columbia.edu/tag/0A2V). It says: “The space X = lim Xᵢ is quasi-compact.”

**Sources:**

- [The Stacks Project, Lemma 5.24.1](https://stacks.math.columbia.edu/tag/0A2V)

### Spectral maps preserve patch continuity

**Remember:** Preserve compact opens and their complements come along.

*True by definition.* MSC 54B35 (Spectra in general topology). arXiv math.GN. Level 4: research.

**Definition.** A spectral space is compact and has a base of compact open sets closed under finite intersections. Each nonempty closed set that cannot split into two smaller closed sets must also be the closure of exactly one point. A spectral map is continuous and pulls compact open sets back to compact open sets. The patch topology is generated by compact open sets and their complements.

**Problem.** A continuous map between spectral spaces is patch-continuous exactly when it is spectral.

**How the definition helps.** Inverse images preserve complements, so a spectral map pulls both patch generators back to patch-open sets (our own). Conversely, patch continuity makes the preimage of a compact open patch-closed, hence patch-compact by the compact Hausdorff patch theorem (our own). It remains compact in the coarser original topology and is open by the original continuity assumption (our own).

**Paper or page:** [Lemma 5.23.4.](https://stacks.math.columbia.edu/tag/0G1J). It says: “Then f is spectral if and only if f is continuous in the constructible topology.”

**Sources:**

- [The Stacks Project, Lemma 5.23.4](https://stacks.math.columbia.edu/tag/0G1J)

### A weaker filter condition shows core-compact well-filtered spaces are sober

**Remember:** Test the filter condition on open sets, not on compact sets.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 06B35. arXiv math.GN. Level 4: research.

**Definition.** For open U,V, write U ≪ V if each directed open cover of V has a member containing U. A nonempty open family is filtered for ≪ if any two members have a third member lying ≪ both. Open well-filteredness means each such family has a member inside every open set containing its intersection.

**Problem.** Every core-compact open well-filtered T₀ space is sober. Core-compactness gives each x ∈ U, for U open, an open neighborhood V with V ≪ U. Sobriety means each nonempty irreducible closed set is the closure of exactly one point.

**How the definition helps.** Core-compactness supplies the open neighborhoods used in the open well-filteredness test (our own). The core-compact open well-filtered sobriety theorem uses this test to obtain a generic point for each nonempty irreducible closed set. The T₀ condition ensures uniqueness (our own).

**Paper or page:** [On open well-filtered spaces](https://arxiv.org/abs/2001.07397v4). It says: “Every core-compact open well-filtered space is sober.”

**Sources:**

- [Chong Shen, Xiaoyong Xi, Xiaoquan Xu, Dongsheng Zhao, On open well-filtered spaces, Logical Methods in Computer Science 16(4) (2020); arXiv:2001.07397](https://arxiv.org/abs/2001.07397v4)

### Separation axioms stated as lifting properties are stable under colimits

**Remember:** A separation axiom says: you lift against its simplest counterexample.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 54D15, 18A32. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A map i:A→B has the left lifting property against p:E→F if each square pu=vi admits a continuous diagonal. For u:A→E and v:B→F, this means some h:B→E satisfies hi=u and ph=v.

**Problem.** Any class of maps defined by a left lifting property is closed under pushouts, transfinite composition and retracts. So a transfinite composition of closed inclusions of hereditarily normal spaces is hereditarily normal.

**How the definition helps.** Fillers pass through pushouts by the universal property, through transfinite composites by successive extension, and through retracts by composition (our own). The lifting characterization of hereditary normality applies to closed inclusions into hereditarily normal spaces. Applying stability to the chain therefore gives hereditary normality of the colimit (our own).

**nLab:** [separation axioms in terms of lifting properties](https://ncatlab.org/nlab/show/separation+axioms+in+terms+of+lifting+properties). It says: “It is easy to check that a closed inclusion into a heridarily normal space has the same lifting property. As left lifting property is stable under colimits”

**Sources:**

- [M. Gavrilovich, Point-set topology as diagram chasing computations: Lifting property as negation, The De Morgan Gazette 5(4) (2014), arXiv:1408.6710](https://arxiv.org/abs/1408.6710)

### Slow oscillation controls Higson extensions

**Remember:** Far away, fixed-size balls must look almost constant.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 4: research.

**Definition.** A map f oscillates slowly if every radius r&gt;0 and tolerance ε&gt;0 admit a bounded set outside which diam f(B(x,r))&lt;ε for every center x. For a proper metric space, evaluate all continuous slowly oscillating functions to \[0,1\] as coordinates. The closure of the image in their product is the Higson compactification.

**Problem.** A continuous map from a proper metric space into a compact metric space extends over the Higson compactification exactly when it is slowly oscillating. For a map, measure variation by the diameter of the image.

**How the definition helps.** Embed the compact metric target as a closed subspace of a product of intervals (our own). Its coordinates are uniformly continuous, so their composites with a slowly oscillating map extend by construction (our own). The combined extension lands in the closed target image by density (our own). Conversely, uniform continuity on the compactification reduces each target tolerance to finitely many slowly oscillating coordinate tests (our own).

**Paper or page:** [Embedding of Higson compactification into the product of adelic solenoids](https://arxiv.org/abs/2205.03698v1). It says: “a continuous map f: X → C to a compact metric space C extends continuously to the Higson corona if and only if f is slowly oscillating.”

**Sources:**

- [Embedding of Higson compactification into the product of adelic solenoids](https://arxiv.org/abs/2205.03698v1)

### Closed graphs preserve realcompact inverse images

**Remember:** Closed product embeddings turn inverse images into closed graphs.

*True by definition.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 4: research.

**Definition.** A realcompact space is one that embeds as a closed subset of a product of real lines. An equivalent test uses maximal families of zero sets of continuous real functions.

**Problem.** Let f map a realcompact space X continuously into a Hausdorff space Y. If B is a realcompact subspace of Y, then f⁻¹\[B\] is realcompact.

**How the definition helps.** In X × B the pairs (x,b) satisfying f(x)=b form a closed set by Hausdorffness of Y (our own). Projection identifies this set homeomorphically with the inverse image (our own). Closed embeddings of X and B into real powers give a closed embedding of their product into another real power (our own).

**Paper or page:** [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1). It says: “the subspace f⁻¹\[B\] of X is E-compact.”

**Sources:**

- [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1)

### The upper topology is the coarsest making a preorder lower continuous

**Remember:** Generate the topology from exactly the open sets that continuity demands.

*True by definition. Confidence: medium.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54H12, 91B08. arXiv econ.TH, math.GN. Level 4: research.

**Definition.** For a preorder ≾, put ↓x = {y ∣ y ≾ x} and ↑x = {y ∣ x ≾ y}. The upper topology is generated by the complements of all ↓x, and the lower topology by the complements of all ↑x. Lower continuity requires every ↓x to be closed, and full continuity requires every ↑x to be closed as well.

**Problem.** A preorder is lower continuous for a topology τ exactly when τ is finer than its upper topology. For full continuity, τ must contain both the upper topology and the matching lower topology.

**How the definition helps.** Closing each lower section means opening its complement (our own). A topology contains all these complements exactly when it contains the topology they generate (our own). Applying the same argument to upper sections gives the full continuity criterion (our own).

**Paper or page:** [Intergenerational Preferences and Continuity: Reconciling Order and Topology](https://arxiv.org/abs/2402.01699v1). It says: “it clarifies which topology is the smallest one among those that make the preorder continuous.”

**Sources:**

- [Asier Estevan, Roberto Maura, Oscar Valero, Intergenerational Preferences and Continuity: Reconciling Order and Topology, arXiv:2402.01699v1 (2024)](https://arxiv.org/abs/2402.01699v1)

### Clopen bases preserve product dimension zero

**Remember:** Products of closed and open tests stay closed and open.

*Rules out counterexamples.* MSC 54F45 (Dimension theory in general topology). arXiv math.GN. Level 4: research.

**Definition.** Small inductive dimension is zero for a nonempty space with a base of clopen sets, meaning sets both closed and open. Here covering dimension zero means every finite open cover has a finite disjoint open refinement, also for spaces that are not normal.

**Problem.** Every nonempty product of spaces of small inductive dimension zero has small inductive dimension zero. Covering dimension zero does not have this permanence.

**How the definition helps.** Products have a base of sets restricting finitely many coordinates, and clopen restrictions give clopen product sets (our own). For comparison, the Sorgenfrey line has a base of clopen intervals \[a, b), and each open cover has a countable subcover (our own). Making a countable clopen refinement disjoint gives covering dimension zero for the line (our own). Sipacheva proves that its square has infinite covering dimension.

**Paper or page:** [The Covering Dimension of the Sorgenfrey Plane](https://arxiv.org/abs/2110.08867v2). It says: “dim S × S = ∞.”

**Sources:**

- [The Covering Dimension of the Sorgenfrey Plane](https://arxiv.org/abs/2110.08867v2)

### Palais's stronger properness gives slices without local compactness

**Remember:** One neighborhood at x controls transporters to suitable neighborhoods of every y.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54H15 (Transformation groups and semigroups (topological aspects)), 57S20, 55R10. arXiv math.GN, math.GT. Level 4: research.

**Definition.** A continuous Lie group action is Palais proper if every x has a neighborhood U satisfying the following condition. Every y in the space has a neighborhood V for which {g ∣ gU meets V} has compact closure in the group.

**Problem.** For a Palais proper Lie group action on a completely regular Hausdorff space, every point x has a slice S. With H its stabilizer, the action identifies G ×ₕ S homeomorphically with an open invariant neighborhood of x.

**How the definition helps.** The transporter condition controls group elements near each orbit without requiring locally compact neighborhoods in the space (our own). Palais’s slice theorem supplies the slice and the stated neighborhood model (our own).

**nLab:** [slice theorem](https://ncatlab.org/nlab/show/slice+theorem), [proper action](https://ncatlab.org/nlab/show/proper+action). It says: “in which case the definition of "proper action" needs to be strengthened”

**Sources:**

- [Richard S. Palais, On the Existence of Slices for Actions of Non-Compact Lie Groups, Annals of Mathematics 73 (1961) 295–323](https://doi.org/10.2307/1970335)
