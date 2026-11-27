### Interiors commute with finite intersections

**Remember:** Intersect finitely many largest open pieces to get the largest open piece.

*True by definition.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)). arXiv math.GN. Level 1: early undergraduate.

**Definition.** The interior of a set is its largest open subset. Another description keeps the points that have a whole open neighborhood inside the set.

**Problem.** The interior of a finite intersection is the intersection of the interiors.

**How the definition helps.** The largest-open-subset description lets us compare the two sides directly by inclusion. In our own proof, the finite intersection of the interiors is open and lies in every original set. Conversely, the interior of the intersection is open and lies in each set, hence in each interior. The pointwise description gives the same interior because the union of all open neighborhoods inside a set is its largest open subset. For the intervals (−1/n, 1/n), the interiors intersect in {0}, while the intersection has empty interior.

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

**How the definition helps.** The closed-preimage test reduces the proof to taking a finite union of closed sets (our own). On each piece, the preimage of a closed set is closed relative to that piece (our own). Each piece is closed in the whole space, so its part of the preimage is also closed there (our own). Their union is the full preimage (our own). The work moves to proving that the closed-preimage and distance tests agree (our own).

**Paper or page:** [Pasting Lemma/Finite Union of Closed Sets](https://proofwiki.org/wiki/Pasting_Lemma/Finite_Union_of_Closed_Sets). It says: “Let I be a finite indexing set.”

**Sources:** none listed. No primary source with a working link was found.

### Open covers let continuity glue

**Remember:** Open pieces stay open when you join them.

*True by definition.* MSC 54C05 (Continuous maps). arXiv math.GN. Level 1: early undergraduate.

**Definition.** Use preimages of open sets to define continuity. On a subset, the open sets are intersections with open sets of the larger space.

**Problem.** A map that is continuous on each member of an open cover is continuous on the whole space.

**How the definition helps.** With the open-set test, each preimage is a union of open pieces. In our own proof, continuity on each piece makes its part of the preimage open relative to that piece. Since the piece itself is open, this part is open in the whole space. Taking their union proves continuity without choosing a distance bound at each point. In metric spaces the separate step is proving the two continuity tests equivalent.

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

*Makes the theorem clean to state or prove.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** For a nonempty set A, the distance from x to A is the greatest lower bound of its distances to points of A. The radius-r neighborhood of A consists of points whose distance to A is less than r.

**Problem.** Every nonempty closed set in a metric space is the intersection of its neighborhoods of radii 1, 1/2, 1/3, and so on. In particular, every closed set is a countable intersection of open sets.

**How the definition helps.** A point belongs to every such neighborhood exactly when its distance to A is zero (our own). Then every ball about that point meets A, so closedness puts it in A (our own). The triangle inequality makes distance to A continuous, so each neighborhood is open (our own). For the empty set, intersect copies of the empty open set (our own).

**Paper or page:** [Closed Set in Metric Space is G-Delta](https://proofwiki.org/wiki/Closed_Set_in_Metric_Space_is_G-Delta). It says: “Then F is a Gδ set of X.”

**Sources:** none listed. No primary source with a working link was found.

### Distance to a set needs no nearest point

**Remember:** Distance to a set changes by at most the distance moved.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** Define distance to a nonempty set as the infimum of the distances to its points. The infimum is the greatest lower bound, which need not come from a nearest point.

**Problem.** Distance to a nonempty subset of a metric space changes by at most the distance moved.

**How the definition helps.** The triangle inequality bounds the distance through each point of the set, so it also bounds their infimum (our own). Swap the starting and ending points to get the other bound (our own). The work shifts from finding a nearest point to using the infimum and the triangle inequality (our own). For example, zero has distance zero to (0, 1), but no point there attains it (our own).

**Paper or page:** [Triangle Inequality on Distance from Point to Subset](https://proofwiki.org/wiki/Triangle_Inequality_on_Distance_from_Point_to_Subset). It says: “∀ x, y ∈ A: d(x, H) ≤ d(x, y) + d(y, H)”

**Sources:** none listed. No primary source with a working link was found.

### Distance zero only for equal points makes every metric space Hausdorff

**Remember:** Points at distance r &gt; 0 sit in disjoint balls of radius r/2.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability), 54D10, 54A20. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric d satisfies d(x, y) = 0 exactly when x = y, symmetry, and the triangle inequality. A pseudometric drops the rule that d(x, y) = 0 forces x = y. A space is Hausdorff when any two distinct points have disjoint open neighbourhoods.

**Problem.** Every metrizable space is Hausdorff. A space is metrizable when some metric gives its topology.

**How the definition helps.** Because distinct points have positive distance, small balls separate them. Our own sketch: if d(x, y) = r &gt; 0, the balls of radius r/2 around x and y are disjoint. ProofWiki shows that the axiom is needed: a partition space, whose open sets are unions of blocks of a fixed partition, is pseudometrizable. When some block has two points, those points have pseudodistance 0 and no open set separates them (our own remark).

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

*Makes the theorem clean to state or prove.* MSC 54E35 (Metric spaces, metrizability), 54E50. arXiv math.GN. Level 1: early undergraduate.

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

**Definition.** A metric d on a set gives distances that are symmetric, satisfy the triangle inequality, and are 0 only for equal points. A pseudometric drops the last condition, so distinct points can be at distance 0.

**Problem.** In a metric space, a sequence has at most one limit.

**How the definition helps.** If a sequence tends to x and to y, the triangle inequality gives d(x, y) = 0. The metric axiom then gives x = y. In our own example, take a pseudometric space with two points at distance 0. Every sequence that tends to one point also tends to the other. So the axiom excludes exactly the case where limits are not unique. ProofWiki shows that a pseudometric is a metric exactly when its topology is T₀.

**Paper or page:** [Convergent Sequence in Metric Space has Unique Limit](https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit), [Pseudometric Space is Metric Space iff Kolmogorov](https://proofwiki.org/wiki/Pseudometric_Space_is_Metric_Space_iff_Kolmogorov). It says: “Let ⟨xₙ⟩ be a sequence in M. Then ⟨xₙ⟩ can have at most one limit in M.”

**Sources:**

- [ProofWiki, Convergent Sequence in Metric Space has Unique Limit](https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit)
- [ProofWiki, Pseudometric Space is Metric Space iff Kolmogorov](https://proofwiki.org/wiki/Pseudometric_Space_is_Metric_Space_iff_Kolmogorov)

### Uniform continuity preserves Cauchy sequences

**Remember:** One distance bound works for the whole tail.

*Rules out counterexamples.* MSC 54E40 (Special maps on metric spaces), 26A15. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A uniformly continuous map uses one input distance bound for each desired output tolerance. Ordinary continuity lets that bound depend on the starting point.

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

**Remember:** A Cauchy sequence converges to a point that need not be named in advance.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E50 (Complete metric spaces), 40A05. arXiv math.GN, math.CA. Level 1: early undergraduate.

**Definition.** A sequence is a Cauchy sequence when its terms eventually stay arbitrarily close to each other. A metric space is complete when every Cauchy sequence in it converges.

**Problem.** A normed space is complete exactly when every absolutely convergent series in it converges.

**How the definition helps.** The Cauchy condition uses only the terms, and completeness makes it enough to give a limit. The definition of convergence uses the limit itself, so it cannot prove that a limit exists. The article gives one direction, and the converse is our own addition. In the rational numbers the test fails: rational approximations of √2 form a Cauchy sequence with no rational limit (our own example).

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

**How the definition helps.** A single distance bound controls every point, so the Cauchy bound survives passage to pointwise limits (our own). Completeness of the real numbers gives a limit at each point (our own). Fix one sufficiently late function and pass to the pointwise limit in the other sequence index (our own). The resulting uniform bound gives convergence in the metric (our own). The limit is bounded because one bounded function stays within one unit of it everywhere (our own).

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

**How the definition helps.** Let ¬U be the interior of the complement of U. Regular open sets are exactly the open sets with ¬¬U = U, so double negation holds by definition (our own remark). Ordinary open sets fail here, because U and ¬U together can miss boundary points. For example, (0, 1) ∪ (1, 2) and the interior of its complement do not cover the point 1. The price is that the join is no longer the plain union: one must take the interior of the closure of the union. These algebras are used in forcing and in the theory of Boolean-valued models (our own remark).

**Wikipedia:** [Regular open set](https://en.wikipedia.org/wiki/Regular_open_set). It says: “The collection of all regular open sets in X forms a complete Boolean algebra”

**Sources:** none listed. No primary source with a working link was found.

### The boundary obeys the Leibniz rule on closed sets

**Remember:** Boundary is closure minus interior; on closed sets it obeys a product rule.

*Rules out counterexamples.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)), 54B10, 06D20. arXiv math.GN. Level 2: later undergraduate.

**Definition.** The boundary ∂S of a subset S of a space is its closure minus its interior. On closed sets, ∂ becomes the boundary operator of the co-Heyting algebra of closed subsets. A co-Heyting algebra is a lattice with an operation dual to the implication of a Heyting algebra.

**Problem.** For closed subsets A and B, the boundary satisfies the Leibniz rule ∂(A × B) = (∂A × B) ∪ (A × ∂B). It has the same shape as the product rule for derivatives.

**How the definition helps.** For closed A and B the rule holds, because the closure of A × B is A × B itself. The nLab says the rule must fail if A and B are not closed. Our own check is sharper: the rule still holds if one of A and B is closed, and fails when neither is closed and both are non-empty. Restricting ∂ to the lattice of closed sets gives the rule, and this motivates the co-Heyting boundary operators of Zarycki and Lawvere.

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

**Definition.** Let c be an adherent point of the domain of f, that is, a point in its closure. In Bourbaki's definition, L is the limit of f at c if for every neighbourhood V of L there is a neighbourhood U of c with f(x) ∈ V for all x in U where f is defined. This includes x = c. Weierstrass's usual definition leaves out x = c, so it uses a punctured neighbourhood.

**Problem.** With Bourbaki's limit, the limit of a composite f ∘ g at c is the limit of f at the limit of g at c, whenever these limits exist. Also, f is continuous at c exactly when f(c) is its limit there.

**How the definition helps.** Because the limit must agree with f(c), the chain rule needs no extra hypothesis. With the Weierstrass definition, it needs a hypothesis about g taking the value lim g near c. Our own illustration: let g = 0, and let f(u) = 1 for u ≠ 0 and f(0) = 0. The punctured limit of f at 0 is 1, but f ∘ g is constantly 0, while with Bourbaki's definition f has no limit at 0.

**nLab:** [limit of a function](https://ncatlab.org/nlab/show/limit+of+a+function). It says: “Using the Bourbaki definition, the limit of a composite function f ∘ g approaching c is equal to the limit of f approaching the limit of g approaching c, if the latter exists”

**Sources:** none listed. No primary source with a working link was found.

### Nets detect the Hausdorff property through unique limits

**Remember:** One limit for every net means Hausdorff; sequences cannot tell.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A directed set is a set with a preorder in which any two elements have a common upper bound. A net in a space is a function from a directed set into the space. Moore and Smith introduced nets in 1922; Kelley named them.

**Problem.** A space is Hausdorff if and only if every convergent net in it has exactly one limit. With sequences in place of nets, only one direction holds.

**How the definition helps.** Nets can be indexed by the neighbourhoods of two points, so a non-Hausdorff pair of points gives a net that converges to both. Sequences are too short to do this in general. There are non-Hausdorff T₁ spaces in which every convergent sequence has a unique limit. Such spaces are called US spaces, and van Douwen built one that is even Fréchet. The equivalence also needs the index set to be directed. With a general partial order, limits can fail to be unique even in a Hausdorff space.

**Wikipedia:** [Net (mathematics)](https://en.wikipedia.org/wiki/Net_%28mathematics%29), [Hausdorff space](https://en.wikipedia.org/wiki/Hausdorff_space). It says: “Thus the uniqueness of the limit is equivalent to the Hausdorff condition on the space, and indeed this may be taken as the definition.”

**Sources:**

- [Moore, E. H. and Smith, H. L. (1922). A General Theory of Limits. American Journal of Mathematics 44(2), 102–121.](https://doi.org/10.2307/2370388)
- [van Douwen, E. K. (1993). An anti-Hausdorff Fréchet space in which convergent sequences have unique limits. Topology and its Applications 51(2), 147–158.](https://doi.org/10.1016/0166-8641(93)90147-6)

### Nets make continuity mean preserving limits in every space

**Remember:** Continuous means convergent nets go to convergent nets.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A net is a function from a directed set into a space. It converges to a point x if, for every neighbourhood of x, the net is eventually inside that neighbourhood.

**Problem.** A function f between any two spaces is continuous exactly when it sends each net converging to x to a net converging to f(x). Also, a point is in the closure of a set exactly when some net in the set converges to it.

**How the definition helps.** Nets are indexed by sets as large as the neighbourhood systems, so they can reach every point of a closure. This makes the familiar sequence tests from metric spaces true in every space. With sequences the tests fail: in the product space of all functions from ℝ to ℝ, the zero function is in the closure of the 0–1 functions that equal 1 except at finitely many points, but no sequence of them converges to it. The price is that subnets are more delicate than subsequences.

**Wikipedia:** [Net (mathematics)](https://en.wikipedia.org/wiki/Net_%28mathematics%29). It says: “it is necessary to allow for directed sets other than just the natural numbers if X is not a first-countable space (or not a sequential space).”

**Sources:**

- [Moore, E. H. and Smith, H. L. (1922). A General Theory of Limits. American Journal of Mathematics 44(2), 102–121.](https://doi.org/10.2307/2370388)

### Subnets are chosen so that compactness means convergent subnets

**Remember:** A subnet is any net that is eventually wherever the original net is eventually.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A net y is a subnet of a net x if the eventuality filter of y refines the eventuality filter of x (Smiley; Årnes and Andenæs). The eventuality filter of a net is the set of subsets that contain the net from some index on. Unlike for subsequences, the index map need not be injective, and need not even exist as a function.

**Problem.** A space is compact if and only if every net in it has a convergent subnet.

**How the definition helps.** The definition of subnet is picked so that this characterization of compactness holds, in classical mathematics. Sequences and subsequences do not detect compactness in general spaces. Nets fix this length problem, but then the notion of subnet must be chosen with care. The filter-refinement definition is the one that matches filters exactly. The older definitions of Kelley and Willard give enough subnets, up to equivalence.

**nLab:** [subnet](https://ncatlab.org/nlab/show/subnet), [net](https://ncatlab.org/nlab/show/net). It says: “The point of the definition is to ensure that in classical mathematics, compact spaces are equivalently those for which every net has a converging subnet.”

**Sources:**

- [J. L. Kelley, Convergence in topology, Duke Mathematical Journal 17 (1950)](https://doi.org/10.1215/S0012-7094-50-01726-1)

### Ultrafilters turn Tychonoff's theorem into a short argument

**Remember:** Every ultrafilter converges: that is compactness, and products inherit it coordinatewise.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A filter on a set is a nonempty family of nonempty subsets that is closed under finite intersections and under taking supersets. An ultrafilter is a maximal filter: for each subset, it contains the subset or its complement. Henri Cartan introduced filters in 1937.

**Problem.** Tychonoff's theorem: a product of compact spaces is compact.

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

**Definition.** In the product topology basic open sets restrict only finitely many coordinates. The box topology, in contrast, can restrict every coordinate at once.

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

**Definition.** In the product topology, a basic open set restricts only finitely many coordinates. In the box topology, a basic open set may restrict every coordinate.

**Problem.** Tychonoff's theorem: any product of compact spaces is compact in the product topology. The box topology on an infinite product of compact spaces can fail to be compact, connected or metrizable.

**How the definition helps.** The product topology has fewer open sets, so an open cover has less room to avoid a finite subcover. The page gives the countable product of the two-point discrete space {0, 1}. In the box topology this product is discrete and infinite, so it is not compact. In the product topology it is the Cantor space, which is compact (our own remark). The box topology on the countable product ℝ × ℝ × … is not even first countable, so not metrizable. The finite restriction keeps the theorem, but its general proof still needs the axiom of choice (our own remark).

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

**How the definition helps.** A basic open set of the product topology restricts only finitely many coordinates. So its preimage under f is a finite intersection of preimages under the coordinate maps, which gives the theorem in one line. The box topology fails it: the diagonal map x ↦ (x, x, x, …) from ℝ has identity coordinates, but the preimage of the product of the intervals (−1/n, 1/n) is only {0}. The two topologies agree for finite products.

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

**How the definition helps.** In our own proof, closedness puts each inequivalent pair inside an open rectangle containing no equivalent pair. The two sides therefore have disjoint open images, as the Hausdorff condition requires. Our own counterexample is the line with two origins. Identify matching nonzero points in two copies of the real line. The quotient map is open, but any neighborhoods of the two origins intersect.

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

**How the definition helps.** Representing sets by distance functions gives the triangle inequality point by point from the triangle inequality for real numbers. Our own argument takes the supremum over all points. The work is proving agreement with the usual Hausdorff distance. This is the least radius for which each set lies within that distance of the other. The metric triangle inequality bounds the function difference by that radius. Testing on points of either set gives the reverse bound.

**nLab:** [Hausdorff metric](https://ncatlab.org/nlab/show/Hausdorff+metric). It says: “its symmetrization is the Hausdorff metric”

**Paper or page:** [Computing the Hausdorff Distance of Two Sets from Their Signed Distance Functions](https://arxiv.org/abs/1812.06740v1). It says: “dH(A, B) = ‖dA − dB‖∞”

**Sources:** none listed. No primary source with a working link was found.

### The Hausdorff distance becomes a metric on nonempty compact sets

**Remember:** Sets with the same closure are at distance zero, so use closed sets.

*Rules out counterexamples.* MSC 54B20 (Hyperspaces in general topology), 54E35. arXiv math.GN, math.MG. Level 2: later undergraduate.

**Definition.** Take two subsets X and Y of a metric space. Their Hausdorff distance is the infimum of the r such that each set lies within distance r of the other. Hausdorff introduced it in 1914.

**Problem.** On the nonempty compact subsets of a metric space M, the Hausdorff distance is a metric. If M is complete, so is this space of compact sets; if M is compact, so is it.

**How the definition helps.** The distance sees only closures, so restricting to closed sets makes distance zero mean equality. The page states that the distance is 0 exactly when two sets have the same closure. So (0, 1) and \[0, 1\] are at distance 0. On all subsets it is only an extended pseudometric: it can be infinite, and it can be zero between different sets. Restricting further to compact sets gives the completeness and compactness results. The topology on the compact sets then depends only on the topology of M.

**Wikipedia:** [Hausdorff distance](https://en.wikipedia.org/wiki/Hausdorff_distance). It says: “It turns the set of non-empty compact subsets of a metric space into a metric space in its own right.”

**Sources:**

- [Hausdorff, F. (1914). Grundzüge der Mengenlehre. Leipzig: Veit &amp; Comp.](https://archive.org/details/grundzgedermen00hausuoft)

### Initial and final topologies make limits of spaces immediate

**Remember:** Give the limit set just enough open sets to make the projections continuous.

*True by definition. Confidence: medium.* MSC 54B30 (Categorical methods in general topology), 18A30, 18F60. arXiv math.GN, math.CT. Level 2: later undergraduate.

**Definition.** Take functions pᵢ : S → Xᵢ from a set S into topological spaces Xᵢ. The initial topology on S is the coarsest topology that makes every pᵢ continuous. The final topology is the dual notion: the finest topology on a target set that makes given maps into it continuous.

**Problem.** Take a diagram of topological spaces. Its limit is the limit of the underlying sets, with the initial topology of the projections. Its colimit is the colimit of the underlying sets, with the final topology.

**How the definition helps.** The initial topology has exactly the universal property that the limit needs. Take a cone over the diagram. Set theory already gives a unique function into the limit set. It remains to show that this function is continuous. The universal property of the initial topology says that a map into S is continuous when its composites with all pᵢ are continuous. So the proof takes one line once the initial topology is defined, and the colimit case is dual.

**nLab:** [limits and colimits by example](https://ncatlab.org/nlab/show/limits+and+colimits+by+example). It says: “all that is required is that this unique function is always continuous. But this is precisely what the initial topology ensures.”

**Sources:**

- [N. Bourbaki, General Topology, Chapters 1–4, Elements of Mathematics, Springer (1995 printing; original 1971)](https://doi.org/10.1007/978-3-642-61701-0)

### Defining proper maps as universally closed makes base change automatic

**Remember:** A proper map is a family of compact spaces that stays closed under base change.

*True by definition.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A continuous map f : X → Y is proper, in Bourbaki's sense, if it is universally closed: every pullback of f along any map is a closed map (a map that sends closed sets to closed sets). Equivalently, f × (identity of Z) is closed for every space Z. Also equivalently, f is closed and has compact fibres.

**Problem.** A pullback of a proper map is proper. The map from a space X to a point is proper exactly when X is compact.

**How the definition helps.** Bourbaki chose this definition so that stability under base change holds by definition. The older definition, that preimages of compact sets are compact, is not stable under base change. Grothendieck's version adds separatedness, which plays the role of the Hausdorff condition. The content moves to the theorem that universally closed maps are exactly the closed maps with compact fibres.

**nLab:** [proper map](https://ncatlab.org/nlab/show/proper+map). It says: “The second definition was introduced by Bourbaki to make proper maps closed under base changes.”

**Sources:**

- [Nicolas Bourbaki, General Topology, Chapters 1–4, Elements of Mathematics, Springer (1995 reprint)](https://doi.org/10.1007/978-3-642-61701-0)
- [Richard S. Palais, When proper maps are closed, Proc. AMS 24 (1970) 835–836](https://doi.org/10.1090/s0002-9939-1970-0254818-x)

### Perfect maps pull back compactness

**Remember:** Compact fibers handle one point, and closedness handles its neighbors.

*Rules out counterexamples.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A perfect map is a continuous, surjective, closed map with compact fibers. A closed map sends closed sets to closed sets, and a fiber is the preimage of a point.

**Problem.** The preimage of every compact set under a perfect map is compact.

**How the definition helps.** In our own proof, compact fibers give finite covers and closedness extends each cover to nearby fibers. Take any open cover of the preimage of a compact set. Cover each fiber with finitely many members. The image of the complement of their union is closed and misses the target point. Compactness in the target now gives a finite subcover. Our own counterexample maps the disjoint union of \[0,1\] and (0,1\] onto \[0,1\] by keeping each coordinate. Every fiber is finite, but the second component is closed with nonclosed image, and the full preimage is noncompact.

**Wikipedia:** [Perfect map](https://en.wikipedia.org/wiki/Perfect_map). It says: “If p : X → Y is a perfect map and Y is compact, then X is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Proper local homeomorphisms are coverings

**Remember:** Properness keeps extra sheets from appearing near a fiber.

*Rules out counterexamples.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A local homeomorphism maps some neighborhood of each point homeomorphically onto an open set. It is proper if compact sets have compact preimages.

**Problem.** A surjective proper local homeomorphism between Hausdorff spaces is a covering map if its target is locally compact. A covering map splits over a neighborhood of each target point into disjoint copies of that neighborhood.

**How the definition helps.** In our own proof, properness makes each fiber compact and hence finite, since its points are isolated. Choose disjoint neighborhoods of those points on which the map has continuous local inverses. Properness over a locally compact Hausdorff target makes the map closed. The complement of those neighborhoods has closed image, so a smaller target neighborhood excludes every extra preimage. Our own counterexample wraps (0,4π) around the unit circle by t ↦ exp(it). Only 1 has a single preimage, so no neighborhood of 1 splits into a fixed number of copies.

**Wikipedia:** [Local homeomorphism](https://en.wikipedia.org/wiki/Local_homeomorphism). It says: “if p : X → Y is a proper local homeomorphism between two Hausdorff spaces and if Y is also locally compact, then p is a covering map.”

**Sources:** none listed. No primary source with a working link was found.

### Equicontinuity gives compactness in spaces of continuous functions

**Remember:** Equicontinuous means one δ for the whole family.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54C35 (Function spaces in general topology), 54D30. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** A family F of functions on a space X is equicontinuous at a point x when one neighbourhood works for all functions in F at once. That is, for every ε &gt; 0 there is a neighbourhood U of x such that \|f(x) − f(y)\| &lt; ε for every y in U and every f in F.

**Problem.** The Arzelà–Ascoli theorem. Let X be a compact Hausdorff space, and let C(X) be the space of continuous functions on X. Then a subset of C(X) is compact exactly when it is closed, pointwise bounded and equicontinuous.

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

**Remember:** Connected means you cannot map it onto two separate points.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54C05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space T is connected if it is not the union of two nonempty separated sets. An equivalent definition says that there is no continuous surjection from T onto the discrete space {0, 1}.

**Problem.** The continuous image of a connected space is connected. As a corollary, a continuous real function on a closed interval has the intermediate value property.

**How the definition helps.** With the second definition, the theorem is one line in our own proof. If g maps f(T) continuously onto {0, 1}, then g ∘ f maps T continuously onto {0, 1}. So the work moves into the proof that the two definitions agree. ProofWiki proves this agreement in several steps through clopen sets and separated sets. The intermediate value property then follows because closed intervals are connected. Our own remark: the proof that intervals are connected still needs the completeness of ℝ.

**Paper or page:** [Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space), [Continuous Image of Connected Space is Connected/Corollary 3](https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Corollary_3). It says: “Then there exists no continuous surjection from T onto a discrete two-point space.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space)
- [ProofWiki, Continuous Image of Connected Space is Connected/Corollary 3](https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Corollary_3)

### Connectedness by separations survives closures, but path-connectedness does not

**Remember:** Closure never breaks connectedness, but it can break paths.

*Makes the theorem clean to state or prove.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is connected if it is not the union of two disjoint nonempty open sets. A space is path-connected if any two points are joined by a continuous path.

**Problem.** The closure of a connected set is connected. Continuous images of connected spaces are connected, which gives the intermediate value theorem.

**How the definition helps.** A separation of the closure would restrict to a separation of the original set, because the original set is dense in its closure. Paths have no such property. The graph of sin(1/x) for x in (0, 1\] is path-connected, but its closure adds a segment of the y-axis that no path joins to the graph. So the closed topologist's sine curve is connected but not path-connected.

**Wikipedia:** [Connected space](https://en.wikipedia.org/wiki/Connected_space), [Locally connected space](https://en.wikipedia.org/wiki/Locally_connected_space), [Topologist's sine curve](https://en.wikipedia.org/wiki/Topologist%27s_sine_curve). It says: “The closure of a connected subset is connected. Furthermore, any subset between a connected subset and its closure is connected.”

**Sources:** none listed. No primary source with a working link was found.

### Defining local connectedness by open components makes quotients locally connected

**Remember:** A component downstairs pulls back to a union of open components.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54B15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Call a space locally connected if every connected component of every open subset is open. Another definition asks for a basis of connected open sets.

**Problem.** Every quotient of a locally connected space is locally connected.

**How the definition helps.** With the component definition, one only has to show that a component C of an open set V in the quotient has an open inverse image. Each component of the inverse image of V is open and has a connected image in V, so if that image meets C, it lies inside C. So the inverse image of C is a union of open components, and C is open. The work goes into proving that the component definition agrees with the basis definition.

**nLab:** [locally connected topological space](https://ncatlab.org/nlab/show/locally+connected+topological+space). It says: “every connected component of every open subspace of X is open;”

**Sources:** none listed. No primary source with a working link was found.

### In Hausdorff spaces every path can be replaced by an arc

**Remember:** Hausdorff spaces let every path be tightened to an arc.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54F50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A path is a continuous map from \[0, 1\]. An arc is a path that is an embedding, so it does not revisit points. A space is arc-connected if any two distinct points can be joined by an arc.

**Problem.** If a Hausdorff space is path-connected, then any two distinct points are joined by an arc.

**How the definition helps.** In a Hausdorff space the image of a path is a Peano continuum, a compact, connected, locally connected metric space, and such continua are arc-connected (our own outline). The Hausdorff condition rules out the line with two origins. There a path joins the two origins, but no arc does, because an arc is Hausdorff and the two origins cannot be separated (our own explanation). The hard part is the proof that a Peano continuum is arc-connected.

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

**Definition.** A loop cancellation of a path chooses disjoint open time intervals whose endpoints have the same path value. The reduced path is constant on each cancelled interval. A maximal loop cancellation, from Zorn's lemma, is one that no larger cancellation contains.

**Problem.** In a path-connected Hausdorff space, any two distinct points are joined by an arc, a subspace homeomorphic to the closed interval.

**How the definition helps.** Maximality removes the need to choose an order in which to delete loops, in our own explanation. If the reduced path took one value at two distinct surviving times, the cancellation could be enlarged. So the reduced path of a maximal cancellation is injective, which is the paper's Proposition 2. The work is checking that each chain of cancellations has an upper bound and that collapsing the cancelled intervals gives a path. Our own final step uses that a continuous injection from a compact interval into a Hausdorff space is an embedding.

**Paper or page:** [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1). It says: “If X permits loop deletion then for every path α: \[0,1\] → X, there exists a maximal loop-cancellation 𝒱 ∈ ℒ(α).”

**Sources:**

- [Jeremy Brazas, Constructing arcs from paths using Zorn's Lemma, Rocky Mountain Journal of Mathematics 54(4) (2024), 965–974](https://arxiv.org/abs/2207.07242v1)

### The empty space and the empty category are not connected

**Remember:** Connected means exactly one piece, and the empty space has zero pieces.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 18A30. arXiv math.GN, math.CT. Level 2: later undergraduate.

**Definition.** A space is connected if it has exactly one connected component. Equivalently, in every decomposition X ≅ X₁ ⊔ X₂, exactly one of the two parts is empty. Another equivalent form is that hom(X, −) preserves coproducts.

**Problem.** Every space decomposes uniquely into connected components, and X × Y is connected if and only if X and Y are connected. Likewise, a category with pullbacks and equalizers has all finite connected limits.

**How the definition helps.** The 'exactly one component' definition excludes the empty space, so these theorems hold without exceptions. Under the naive definition, no split into two disjoint non-empty open sets, the empty space is connected. Then unique decomposition fails, since X ⊔ Y = ∅ ⊔ X ⊔ Y, just as unique factorization would fail if 1 were prime. For categories, the same choice keeps the terminal object, a limit over the empty diagram, out of the connected limits.

**nLab:** [empty space](https://ncatlab.org/nlab/show/empty+space), [connected space](https://ncatlab.org/nlab/show/connected+space), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple), [connected category](https://ncatlab.org/nlab/show/connected+category), [connected limit](https://ncatlab.org/nlab/show/connected+limit). It says: “If the empty space were (path-)connected, unique decomposition into (path-)connected components would fail”

**Sources:**

- [Robert Paré, Simply connected limits, Canadian Journal of Mathematics 42 (1990) 731–746](https://doi.org/10.4153/CJM-1990-038-6)

### The identity theorem needs a connected domain

**Remember:** One piece, one analytic function.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 30B40. arXiv math.CV, math.GN. Level 2: later undergraduate.

**Definition.** In complex analysis, a domain is a non-empty open set that is connected. Connected means that the set is not the union of two disjoint non-empty open sets.

**Problem.** The identity theorem: let f and g be analytic functions on a domain D. If f and g agree on a set with an accumulation point in D, then f = g on all of D.

**How the definition helps.** Connectedness stops an analytic function from doing unrelated things on separate pieces. Take an open set made of two disjoint discs. Let f be 0 on the first disc and 1 on the second, and let g be 0 on the first disc and 2 on the second. Then f and g agree on a whole disc but not everywhere, and requiring the set to be connected excludes this. The proof then shows that the set where all derivatives of f − g are zero is both open and closed, so it is everything (our own summary of the standard proof). The theorem is still false for smooth real functions on connected sets.

**Wikipedia:** [Identity theorem](https://en.wikipedia.org/wiki/Identity_theorem). It says: “For example, if D consists of two disjoint open sets, f can be 0 on one open set, and 1 on another, while g is 0 on one, and 2 on another.”

**Sources:** none listed. No primary source with a working link was found.

### Kolmogorov quotients let the T₀ condition be added for free

**Remember:** Glue points no open set can tell apart; nothing else changes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 54B15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Two points are topologically indistinguishable when they have exactly the same open neighbourhoods. A space is T₀ when no two distinct points are indistinguishable. The Kolmogorov quotient glues together each class of indistinguishable points.

**Problem.** Most topological properties and structures hold for a space exactly when they hold for its Kolmogorov quotient, which is always T₀. So a theorem about T₀ spaces gives a theorem about all spaces. For example, a regular T₀ space is Hausdorff.

**How the definition helps.** The quotient only merges points that no open set separates, so it keeps the open sets, the continuous real functions and most structure unchanged. Thus one can state theorems for T₀ spaces and remove the condition at the end. The same step turns a seminorm into a norm, and square-integrable functions into the Hilbert space L². What stays as work is to check, for each property, that it really passes to the quotient.

**Wikipedia:** [Kolmogorov space](https://en.wikipedia.org/wiki/Kolmogorov_space), [Regular space](https://en.wikipedia.org/wiki/Regular_space). It says: “The T₀ requirement can be added or removed arbitrarily using the concept of Kolmogorov quotient.”

**Sources:** none listed. No primary source with a working link was found.

### Maps into a Hausdorff space are fixed by a dense subset

**Remember:** Hausdorff means that 'equal' is a closed condition on pairs of points.

*Makes the theorem clean to state or prove.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space S is Hausdorff if any two distinct points have disjoint open neighbourhoods. Equivalently, the diagonal {(s, s)}, the set of pairs of equal points, is a closed subset of S × S.

**Problem.** Let f, g : X → Y be continuous, with Y Hausdorff. Suppose that f and g agree on a dense subset A of X. Then f = g.

**How the definition helps.** With the closed-diagonal form, the proof takes two lines. The set E where f and g agree is the preimage of the diagonal under the continuous map (f, g) : X → Y × Y, so E is closed. A closed set that contains a dense subset is the whole space, so E = X. The nLab gives this two-line proof next to a longer one that uses open neighbourhoods and the contrapositive. X itself need not be Hausdorff. The converse, that each epimorphism of Hausdorff spaces has dense image, is a separate result with its own proof.

**nLab:** [Hausdorff space](https://ncatlab.org/nlab/show/Hausdorff+space). It says: “Since E is a closed subset of X and contains a dense subspace i: A ↪︎ X, it must be all of X (as a subset of itself).”

**Sources:**

- [Jérôme Lapuyade-Lahorgue, The epimorphisms of the category Haus are exactly the image-dense morphisms, arXiv:1810.00778 (2018)](https://arxiv.org/abs/1810.00778)

### Adding T₁ to normality makes normal spaces Tychonoff

**Remember:** Normal alone lets points hide; add closed points and Urysohn does the rest.

*Rules out counterexamples.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is normal if any two disjoint closed sets lie in disjoint open sets. A space is T₁ if every single point is a closed set. A T₄ space is a normal T₁ space.

**Problem.** Every T₄ space is Tychonoff. That is, a point and a closed set not containing it can be separated by a continuous real function. In particular, every T₄ space is Hausdorff and regular.

**How the definition helps.** Normality only talks about closed sets, so it says nothing about points unless points are closed. Asking for T₁ makes each point a closed set, so normality applies to a point and a closed set. Urysohn's lemma then gives a continuous function that is 0 on one closed set and 1 on the other. The excluded case is Sierpiński space, two points with open sets ∅, {1} and both points. It is normal, because it has no two disjoint nonempty closed sets, but it is not regular. It is not T₁, because the point 1 is not closed. The hard part that remains is Urysohn's lemma itself.

**Wikipedia:** [Normal space](https://en.wikipedia.org/wiki/Normal_space), [Separation axiom](https://en.wikipedia.org/wiki/Separation_axiom). It says: “Taking Kolmogorov quotients, we see that all normal T₁ spaces are Tychonoff.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Tychonoff spaces as subspaces makes the Stone–Čech embedding automatic

**Remember:** A Tychonoff space is a space that can sit inside a compact Hausdorff space.

*True by definition. Confidence: medium.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54D35, 54C25. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Tychonoff space is a subspace of a compact Hausdorff space. The classical definition is a completely regular T₀ space. Completely regular means that a continuous real function can separate a point from any closed set that misses it. T₀ here means that two points with the same neighbourhoods are equal.

**Problem.** The unit X → βX of the Stone–Čech compactification is an embedding exactly when X is Tychonoff. Here βX is the compact Hausdorff space with a universal map X → βX: every map from X to a compact Hausdorff space factors uniquely through it.

**How the definition helps.** The subspace definition makes the statement nearly automatic. Suppose X sits inside a compact Hausdorff space K. Then the inclusion X → K factors through X → βX, so X → βX is also an embedding. The real content is the theorem that this class is the same as the class of completely regular T₀ spaces. Tychonoff proved that such spaces embed in a product of closed intervals. This gives a test that does not refer to compactifications.

**nLab:** [Tychonoff space](https://ncatlab.org/nlab/show/Tychonoff+space), [Stone-Čech compactification](https://ncatlab.org/nlab/show/Stone-%C4%8Cech+compactification). It says: “Conversely, any subspace of a compact Hausdorff space must be Tychonoff.”

**Sources:**

- [A. Tychonoff, Über die topologische Erweiterung von Räumen, Mathematische Annalen 102 (1930) 544–561](https://doi.org/10.1007/BF01782364)

### Separating sets that miss each other's closures makes normality hereditary

**Remember:** Sets closed and disjoint in a subspace miss each other’s closures.

*Rules out counterexamples.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54B05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Normality separates disjoint closed sets by disjoint open neighborhoods. Complete normality asks for the same separation for any two sets that each miss the other's closure.

**Problem.** Every subspace of a completely normal space is normal.

**How the definition helps.** Disjoint sets closed in a subspace each miss the other’s closure in the whole space. Complete normality therefore separates them there, and intersecting the open neighborhoods with the subspace gives the required separation. Our own explanation uses the formula for closure in a subspace.

**Paper or page:** [Completely Normal iff Every Subspace is Normal](https://proofwiki.org/wiki/Completely_Normal_iff_Every_Subspace_is_Normal), [Existence of Normal Space which is not Completely Normal](https://proofwiki.org/wiki/Existence_of_Normal_Space_which_is_not_Completely_Normal). It says: “every subspace of T is normal.”

**Sources:** none listed. No primary source with a working link was found.

### Full normality makes it easy to see that metric spaces are paracompact

**Remember:** Stars are easy in metric spaces; Stone turned stars into local finiteness.

*True by definition.* MSC 54D20 (Noncompact covering properties (paracompact, Lindelöf, etc.)), 54D15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is paracompact if every open cover has a locally finite open refinement. That is a finer open cover in which each point has a neighbourhood meeting only finitely many sets. A space is fully normal if every open cover has an open star refinement. That means a finer cover whose stars, the unions of all its sets through one point, each lie in one set of the old cover.

**Problem.** A. H. Stone's theorem says that every metric space is paracompact. So every metric space has partitions of unity for every open cover.

**How the definition helps.** In a metric space, stars of small balls are easy to control, so full normality is easy to check there (our own explanation). The work moves into Stone's theorem that full normality and paracompactness agree for Hausdorff spaces. That step is hard. Mary Ellen Rudin later found an elementary direct proof that metric spaces are paracompact.

**Wikipedia:** [Paracompact space](https://en.wikipedia.org/wiki/Paracompact_space). It says: “The proof that all metrizable spaces are fully normal is easy. When it was proved by A.H. Stone that for Hausdorff spaces full normality and paracompactness are equivalent, he implicitly proved that all metrizable spaces are paracompact.”

**Sources:**

- [Stone, A. H. (1948). Paracompactness and product spaces. Bulletin of the American Mathematical Society 54, 977–982.](https://doi.org/10.1090/S0002-9904-1948-09118-2)

### Locally finite covers make the shrinking lemma work

**Remember:** Near any point, only finitely many patches matter.

*Rules out counterexamples.* MSC 54D20 (Noncompact covering properties (paracompact, Lindelöf, etc.)), 54D15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** An open cover {Uᵢ} of a space X is locally finite if each point has a neighbourhood that meets only finitely many Uᵢ.

**Problem.** The shrinking lemma: let X be a normal space and {Uᵢ} a locally finite open cover of X. Then there is an open cover {Vᵢ} with the closure of each Vᵢ inside Uᵢ.

**How the definition helps.** Local finiteness makes sure that the smaller sets Vᵢ still cover X. For finite covers, the lemma follows by induction from the case of two sets. For an infinite countable cover, the induction does not show that the union of the sets Vᵢ is still a cover. A Dowker space (example due to Bešlagić) is a normal space with a countable cover that has no shrinking. Asking the cover to be locally finite removes this problem. For uncountable locally finite covers, the proof still needs Zorn's lemma.

**nLab:** [shrinking lemma](https://ncatlab.org/nlab/show/shrinking+lemma). It says: “assuming the axiom of choice, then there exists a counter-example of a countable cover on a normal spaces for which the shrinking lemma fails (a Dowker space due to Beslagic 85).”

**Sources:**

- [A. Bešlagić, A Dowker product, Transactions of the AMS 292 (1985) 519–530](https://doi.org/10.1090/S0002-9947-1985-0808735-X)

### Paracompact Hausdorff is exactly what local metrics need to glue

**Remember:** Hausdorff plus paracompact glues local metrics into one metric.

*Rules out counterexamples.* MSC 54D20 (Noncompact covering properties (paracompact, Lindelöf, etc.)), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is locally metrizable if each point has a neighbourhood whose topology comes from a metric. A space is paracompact if every open cover has a locally finite open refinement.

**Problem.** Smirnov's metrization theorem says that a locally metrizable space is metrizable if and only if it is Hausdorff and paracompact. So a Hausdorff manifold has a metric exactly when it is paracompact.

**How the definition helps.** Each condition rules out one known way that local metrics fail to fit together. The line with two origins is locally metrizable but not Hausdorff, so it has no metric. The long line is Hausdorff and locally metrizable but not paracompact, so it is too long for a metric. With both conditions, a locally finite cover and a partition of unity let one patch the local pieces (our own summary of the proof idea). The other direction is A. H. Stone's theorem that every metric space is paracompact.

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

**Definition.** Call a space X compact if, for every space Y, the projection Y × X → Y is a closed map, that is, it sends closed sets to closed sets. In other words, the map from X to the one-point space is closed, and it stays closed after every pullback.

**Problem.** Tychonoff's theorem: a product of any set of compact spaces is compact.

**How the definition helps.** With this definition, compactness is a property of the map from X to a point that survives every pullback. So it also makes sense for maps (proper maps) and in other categories. With it, Clementino and Tholen prove Tychonoff's theorem by transfinite induction on closed maps, with no nets or ultrafilters. The real work is to show that this definition agrees with the open-cover definition. Its harder direction needs a cleverly built test space Y.

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

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54E35. arXiv math.GN. Level 2: later undergraduate.

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

**Remember:** Covers, not sequences, survive products of any size.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54B10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is compact if every cover by open sets has a finite subcover. Fréchet's earlier notion, now called sequential compactness, asks that every sequence has a convergent subsequence. Alexandrov and Urysohn developed the open-cover notion.

**Problem.** Tychonoff's theorem says that any product of compact spaces is compact, with the product topology. The index set may be uncountable.

**How the definition helps.** Open covers use only the open sets, so the definition behaves well under products of any size. Sequences describe a topology well only with countable neighbourhood bases, and large products lack them. The theorem fails for sequential compactness: the product of 𝔠 copies of \[0, 1\] is compact but not sequentially compact. The hard part is the general proof, which needs the axiom of choice.

**Wikipedia:** [Compact space](https://en.wikipedia.org/wiki/Compact_space), [Sequentially compact space](https://en.wikipedia.org/wiki/Sequentially_compact_space), [Tychonoff's theorem](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem). It says: “It was this notion of compactness that became the dominant one, because it was not only a stronger property, but it could be formulated in a more general setting with a minimum of additional technical machinery”

**Sources:**

- [Fréchet, M. (1906). Sur quelques points du calcul fonctionnel. Rendiconti del Circolo Matematico di Palermo 22, 1–72.](https://doi.org/10.1007/BF03018603)
- [Tychonoff, A. (1930). Über die topologische Erweiterung von Räumen. Mathematische Annalen 102, 544–561.](https://doi.org/10.1007/BF01782364)
- [Tychonoff, A. (1935). Über einen Funktionenraum. Mathematische Annalen 111, 762–766.](https://doi.org/10.1007/BF01472255)

### Pseudocompactness is the extreme value theorem made into a definition

**Remember:** Pseudocompact: every continuous real function is bounded, by definition.

*True by definition.* MSC 54D30 (Compactness), 54C30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is pseudocompact if every continuous real function on it is bounded. Many authors also require the space to be completely regular.

**Problem.** On a pseudocompact space, every continuous real function is bounded, and it attains its maximum and minimum. For metric spaces, pseudocompactness is the same as compactness.

**How the definition helps.** The definition takes the conclusion of the extreme value theorem as the hypothesis, so boundedness is free. Attaining the bound also follows: if f never reached its supremum s, then 1/(s − f) would be continuous and unbounded (our own remark). The work moves into comparing it with compactness, which agrees for metric spaces. In general it is much weaker: an infinite set where the open sets are ∅ and the sets that contain one fixed point is pseudocompact but not compact.

**Wikipedia:** [Pseudocompact space](https://en.wikipedia.org/wiki/Pseudocompact_space). It says: “a topological space is said to be pseudocompact if its image under any continuous function to R is bounded.”

**Sources:**

- [Hewitt, E. (1948). Rings of real-valued continuous functions. I. Transactions of the American Mathematical Society 64, 45–99.](https://doi.org/10.1090/S0002-9947-1948-0026239-9)

### Closed compact sets make the one-point extension work for every space

**Remember:** A neighbourhood of infinity is everything outside a closed compact set.

*Rules out counterexamples. Confidence: medium.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Let X be any topological space. Its one-point extension X\* is X with one new point ∞ added. The open sets of X\* are the open sets of X, and the sets (X ∖ K) ∪ {∞} where K is a closed compact subset of X.

**Problem.** For every topological space X, the one-point extension X\* is a compact topological space. X need not be locally compact or Hausdorff.

**How the definition helps.** The word 'closed' is what keeps the intersection of two open sets open, in our reading of the nLab proof. An open set U of X meets (X ∖ K) ∪ {∞} in U ∖ K, which is open only when K is closed, and in a non-Hausdorff space compact sets need not be closed. With closed compact sets, the check of the axioms is short and uses that closed subsets of compact sets are compact. For Hausdorff X one can leave out the word 'closed', because compact subsets of Hausdorff spaces are closed.

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

**Definition.** The weakest definition says that every point has a compact neighbourhood. Stronger ones ask for a base of compact neighbourhoods, or of closed compact neighbourhoods. Bourbaki also asks for Hausdorff.

**Problem.** In a Hausdorff space, one compact neighbourhood at each point gives a base of closed compact neighbourhoods. Then locally compact Hausdorff spaces are Tychonoff and Baire: a countable union of nowhere dense sets has empty interior.

**How the definition helps.** In a Hausdorff space compact sets are closed, and closed subsets of compact sets are compact, so the definitions collapse into one. Without Hausdorff they differ. Sierpiński space and the cofinite topology on an infinite set are compact, so they are locally compact in the weak sense. But they are not regular, so they lack bases of closed compact neighbourhoods.

**Wikipedia:** [Locally compact space](https://en.wikipedia.org/wiki/Locally_compact_space). It says: “Condition (1) is probably the most commonly used definition, since it is the least restrictive and the others are equivalent to it when X is Hausdorff.”

**Sources:** none listed. No primary source with a working link was found.

### Sequential spaces are defined as the spaces where sequences suffice

**Remember:** Where sequences suffice, sequential continuity is continuity.

*True by definition.* MSC 54D55 (Sequential spaces), 54A20. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is sequentially closed if it contains every limit of every convergent sequence in it. A space is sequential if every sequentially closed set is closed.

**Problem.** In a sequential space, a function to any space is continuous if and only if it preserves limits of sequences. Every first-countable space, such as every metric space, is sequential. The sequential spaces are exactly the quotients of metric spaces.

**How the definition helps.** The definition says closed sets are detected by sequences, and continuity is a statement about closed sets. So the continuity test follows at once. The work moves to two other theorems: first-countable spaces are sequential, and sequential spaces are exactly the quotients of metric spaces. For example, the real line with the integers glued to one point is sequential but not first countable.

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

**Remember:** Countably many locally finite layers of open sets: exactly the metric spaces.

*Makes the theorem clean to state or prove.* MSC 54D70 (Base properties of topological spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A family of subsets is locally finite if each point has a neighbourhood that meets only finitely many of them. A base is σ-locally finite if it is a union of countably many locally finite families.

**Problem.** Nagata–Smirnov: a space is metrizable if and only if it is regular, Hausdorff, and has a σ-locally finite base.

**How the definition helps.** A countable base is too strong, because an uncountable discrete space is metric but has no countable base. A σ-locally finite base is the right weakening. Every metric space has one, since for each n Stone's theorem gives a locally finite open refinement of the cover by balls of radius 1/n (our own outline). Conversely, the countably many layers act like the countably many sets in Urysohn's proof, and building the metric is the hard part.

**Wikipedia:** [Nagata–Smirnov metrization theorem](https://en.wikipedia.org/wiki/Nagata%E2%80%93Smirnov_metrization_theorem), [Metrizable space](https://en.wikipedia.org/wiki/Metrizable_space). It says: “Unlike Urysohn's metrization theorem, which provides only a sufficient condition for metrizability, this theorem provides both a necessary and sufficient condition for a topological space to be metrizable.”

**Sources:**

- [Nagata, J. (1950). On a necessary and sufficient condition of metrizability. Journal of the Institute of Polytechnics, Osaka City University, Series A 1, 93–100.](https://core.ac.uk/download/pdf/35260599.pdf)
- [Bing, R. H. (1951). Metrization of Topological Spaces. Canadian Journal of Mathematics 3, 175–186.](https://doi.org/10.4153/CJM-1951-022-3)

### A compact Hausdorff space has exactly one uniform structure

**Remember:** Compact Hausdorff spaces carry one uniformity, so uniform ideas become topological there.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A uniform structure on a set X is a filter of subsets of X × X, called entourages. Each entourage contains the diagonal, and the entourages satisfy symmetry and triangle-like axioms. It lets one say that x is as close to y as a is to b, anywhere in the space.

**Problem.** A compact Hausdorff space has exactly one uniform structure that gives its topology, and it is complete in it. So uniform continuity and completeness there depend only on the topology.

**How the definition helps.** Uniform structures separate the 'how close' data from the topology, so one can ask when the topology alone fixes it. In general it does not: the metrics \|x − y\| and \|eˣ − eʸ\| give ℝ the same topology but different uniform structures. For compact Hausdorff spaces only one uniformity fits, so uniform notions there are topological. So every continuous map from a compact Hausdorff space to a uniform space is uniformly continuous, which extends the Heine–Cantor theorem (our own remark).

**Wikipedia:** [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “In fact, for a compact Hausdorff space X the set of all neighbourhoods of the diagonal in X × X form the unique uniformity compatible with the topology.”

**Sources:** none listed. No primary source with a working link was found.

### Asking for Hausdorff makes the completion of a uniform space universal

**Remember:** Completeness gives limits to extend to; Hausdorff makes those limits unique.

*Rules out counterexamples.* MSC 54E15 (Uniform structures and generalizations), 54D35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A uniform space is Hausdorff (separated) if every convergent filter has only one limit, and complete if every Cauchy filter converges. The Hausdorff completion of X is a complete Hausdorff uniform space X̄ with a uniformly continuous map X → X̄ of dense image.

**Problem.** Every uniformly continuous map from X to a complete Hausdorff uniform space extends in exactly one way along X → X̄. So complete Hausdorff uniform spaces form a reflective subcategory of the category of uniform spaces.

**How the definition helps.** The Hausdorff condition makes limits unique, so the extension to the completion, defined by taking limits of Cauchy filters, is unique. Without the Hausdorff condition, a filter can converge to several points, and the extension need not be unique. The nLab notes that complete uniform spaces without the Hausdorff condition do not form a reflective subcategory.

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “In short, the category of complete Hausdorff uniform spaces is a reflective subcategory of Unif.”

**Sources:**

- [Nicolas Bourbaki, General Topology, Chapter II: Uniform structures, Springer (1971, 1995)](https://doi.org/10.1007/978-3-642-61701-0)

### Families of pseudometrics give uniform structures to all completely regular spaces

**Remember:** Every continuous real function gives a pseudometric; together they give a uniformity.

*Makes the theorem clean to state or prove.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A pseudometric is like a metric, but distinct points may have distance 0. Any family of pseudometrics on a set defines a uniform structure, and every uniform structure comes from such a family. A space is completely regular if continuous real functions separate points from closed sets.

**Problem.** A topological space has a compatible uniform structure if and only if it is completely regular.

**How the definition helps.** Allowing distance 0 lets each continuous function f give a pseudometric \|f(x) − f(y)\|, even when f does not separate points. In a completely regular space these pseudometrics together give back the topology. Conversely, each pseudometric topology is completely regular, and that property passes to the combined topology. A single metric cannot do this, because many completely regular spaces, such as uncountable products of intervals, are not metrizable.

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

**Remember:** Distances to all points recover the distance between any pair.

*True by definition.* MSC 54E35 (Metric spaces, metrizability), 54C25. arXiv math.MG, math.GN. Level 2: later undergraduate.

**Definition.** Fix a point p in a metric space. Represent each point x by the function that sends t to d(x,t) − d(p,t). Measure the distance between two functions by the supremum of their absolute difference.

**Problem.** Every nonempty metric space embeds without changing distances into the space of bounded continuous real functions on it, with the supremum distance. This is the Kuratowski embedding.

**How the definition helps.** The definition turns each distance into a supremum that the triangle inequality bounds and one point attains, in our own explanation. The triangle inequality gives \|d(x,t) − d(y,t)\| ≤ d(x,y) for every t, and t = y attains the bound. Subtracting d(p,t) keeps each function bounded even when the space is unbounded, by our own check.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “The mapping ν: X → C<sub>b</sub>(X) defined by the formula ν: x ↦ dₓ − dₚ is an isometric embedding.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Minimum displacement gives strictly shrinking maps a fixed point

**Remember:** At a point of minimum displacement, any further shrink would contradict minimality.

*Rules out counterexamples.* MSC 54E40 (Special maps on metric spaces), 54E45, 47H10. arXiv math.GN. Level 2: later undergraduate.

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

**How the definition helps.** In our own proof, uniform continuity in both directions lets both maps extend by limits of Cauchy sequences. The completed image is its closure in the completed target. The two extensions remain inverses there because their compositions agree with the identity on dense subsets. Our own counterexample maps (0,1) into the unit circle by t ↦ exp(2πit). This uniformly continuous embedding sends both endpoints to 1 after completion.

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

**Definition.** In a metric completion by Cauchy sequences, each point is a class of sequences whose corresponding terms approach one another. The distance between classes is the limit of the termwise distances.

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

**How the definition helps.** The closure definition gives completeness from the theorem that closed subspaces of complete metric spaces are complete. The triangle inequality bounds the distance between the images of x and z by d(x, z), and evaluating at y = z attains this bound (our own). The usual construction by classes of Cauchy sequences instead needs a well-defined distance between classes and a separate proof of completeness (our own). Using the closure as the definition is our own combination of the two sources.

**Wikipedia:** [Complete metric space](https://en.wikipedia.org/wiki/Complete_metric_space), [Kuratowski embedding](https://en.wikipedia.org/wiki/Kuratowski_embedding). It says: “Let (X, d) be a complete metric space. If A ⊆ X is a closed set, then A is also complete.”

**Sources:** none listed. No primary source with a working link was found.

### Completely metrizable, not complete, makes Gδ subsets Polish

**Remember:** Polish asks only that some complete metric exists, not the given one.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 54H05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is completely metrizable if at least one complete metric gives its topology. A Polish space is a separable completely metrizable space. A Gδ set is a countable intersection of open sets.

**Problem.** A subspace of a completely metrizable space is completely metrizable if and only if it is a Gδ set. So open subsets of Polish spaces, and the irrational numbers, are Polish spaces.

**How the definition helps.** Completeness depends on the metric, but 'some complete metric exists' is a property of the topology, so it passes along homeomorphisms. With the given metric the theorem would fail at once: the open interval (0, 1) is not complete, yet it is homeomorphic to ℝ. The irrationals are a Gδ set in ℝ, so they are Polish, although their usual metric is not complete. The rationals are not a Gδ set in ℝ, and they are not completely metrizable. The hard part is to build the new complete metric on a Gδ set, which is Alexandrov's theorem.

**Wikipedia:** [Polish space](https://en.wikipedia.org/wiki/Polish_space), [Completely metrizable space](https://en.wikipedia.org/wiki/Completely_metrizable_space). It says: “The space (0,1) ⊂ R, the open unit interval, is not a complete metric space with its usual metric inherited from R, but it is completely metrizable since it is homeomorphic to R.”

**Sources:** none listed. No primary source with a working link was found.

### Finite small covers give Cauchy subsequences

**Remember:** Keep infinitely many terms in one small piece at each scale.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

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

**How the definition helps.** The shrinking diameters make any sequence of choices, one from each set, Cauchy. Completeness gives the limit, and closedness keeps it in each set. Two common points would have distance zero. For the converse, apply the property to the closures of the tails of a Cauchy sequence.

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

**Remember:** Baire spaces are where countably many thin sets cannot fill an open set.

*True by definition.* MSC 54E52 (Baire category, Baire spaces). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is nowhere dense if its closure has empty interior. A set is meagre if it is a countable union of nowhere dense sets. A space is a Baire space if every countable intersection of dense open sets is dense. Equivalently, every meagre set has empty interior.

**Problem.** Complete metric spaces and locally compact Hausdorff spaces are both Baire spaces. Many results need only this property, such as the open mapping theorem and the uniform boundedness principle. Another is that nonempty complete metric spaces without isolated points are uncountable.

**How the definition helps.** The definition names exactly the conclusion that the applications use, so each application starts from 'X is a Baire space' and is short. The work moves into the Baire category theorem, which has two parts. One shows that complete metric spaces are Baire, and the other shows that locally compact Hausdorff spaces are Baire. Neither part implies the other: infinite-dimensional Banach spaces are not locally compact, and uncountable products of nontrivial compact Hausdorff spaces are not metrizable.

**Wikipedia:** [Baire space](https://en.wikipedia.org/wiki/Baire_space), [Baire category theorem](https://en.wikipedia.org/wiki/Baire_category_theorem). It says: “According to the Baire category theorem, compact Hausdorff spaces and complete metric spaces are examples of Baire spaces.”

**Sources:**

- [Baire, R. (1899). Sur les fonctions de variables réelles. Annali di Matematica Pura ed Applicata 3, 1–123.](https://doi.org/10.1007/BF02419243)

### Residual sets let countably many generic properties hold at once

**Remember:** Countably many open dense conditions still leave a dense set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E52 (Baire category, Baire spaces), 37C20. arXiv math.GN, math.DS. Level 2: later undergraduate.

**Definition.** A property of maps in Cʳ(M, N) is generic if it holds on a residual set. A residual set contains a countable intersection of dense open sets. Its complement is called meagre.

**Problem.** A countable intersection of generic properties of maps in Cʳ(M, N) is again generic. Every generic property holds on a dense set of maps.

**How the definition helps.** Each single condition, such as one condition for each period of a periodic orbit, often holds on an open dense set (our own). A countable intersection of open dense sets need not be open, but it is residual, and residual sets are closed under countable intersections by definition. The Baire category theorem then says that a residual set in Cʳ(M, N) is dense. The Kupka–Smale theorem is stated this way (our own), and the hard part is to show that each single condition is open and dense.

**Wikipedia:** [Generic property](https://en.wikipedia.org/wiki/Generic_property). It says: “The space Cʳ(M, N), of Cʳ mappings between M and N, is a Baire space, hence any residual set is dense. This property of the function space is what makes generic properties typical.”

**Sources:** none listed. No primary source with a working link was found.

### Linear continua are exactly the connected ordered spaces

**Remember:** No gaps and no jumps: exactly the connected orders.

*Makes the theorem clean to state or prove.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A linear continuum is a totally ordered set with more than one element. It must be densely ordered, so between any two elements there is a third. It must also have the least upper bound property: every nonempty subset that is bounded above has a least upper bound.

**Problem.** A totally ordered set with more than one element is connected in its order topology if and only if it is a linear continuum. So the intermediate value theorem holds for continuous maps from any linear continuum.

**How the definition helps.** The two conditions forbid the two ways an order can split into open pieces: a jump between neighbours and a gap at a missing supremum. The integers fail density, since nothing lies between 5 and 6. The rationals fail the least upper bound property at √2. Examples that pass include ℝ, intervals, and the square \[0, 1\] × \[0, 1\] in the dictionary order. The proof that a linear continuum is connected copies the proof that intervals in ℝ are connected.

**Wikipedia:** [Linear continuum](https://en.wikipedia.org/wiki/Linear_continuum). It says: “we will prove that an ordered set in the order topology is connected if and only if it is a linear continuum.”

**Sources:** none listed. No primary source with a working link was found.

### Upper sets make Alexandrov continuity equivalent to monotonicity

**Remember:** Preserving order is exactly what makes preimages of upper sets upper.

*True by definition.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 06A06. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A preorder is a reflexive and transitive relation ≤. Its Alexandrov topology takes all upper sets as open sets. An upper set contains everything above each of its elements. The alternative definition of an Alexandrov space asks that every intersection of open sets be open.

**Problem.** A map between preorders is continuous for their Alexandrov topologies exactly when it preserves order.

**How the definition helps.** The upper-set definition makes order preservation enough because the preimage of an upper set is upper (our own proof). For the converse, our own proof takes the preimage of the open set of all points above the image of x. This preimage contains x and therefore all points above x. The work lies in showing that every Alexandrov space has this form. Recover the preorder by setting x ≤ y when every open set containing x also contains y.

**nLab:** [specialization topology](https://ncatlab.org/nlab/show/specialization+topology). It says: “A function between preorders is order-preserving if and only if it is a continuous map with respect to the specialisation topology.”

**Wikipedia:** [Alexandrov topology](https://en.wikipedia.org/wiki/Alexandrov_topology). It says: “A map f : X → Y between two spaces with Alexandrov topologies is continuous if and only if it is order preserving as a function between the underlying preordered sets.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness in the definition of continuum keeps nested intersections connected

**Remember:** Shrinking continua stay one piece; shrinking closed connected sets may split.

*Rules out counterexamples.* MSC 54F15 (Continua and generalizations), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A continuum is a nonempty compact connected metric space, or, less often, a compact connected Hausdorff space.

**Problem.** The intersection of a decreasing sequence of continua is again a continuum: nonempty, compact and connected.

**How the definition helps.** Compactness makes the intersection nonempty and lets a separation of the intersection extend to a separation of some Xₙ (our own outline). Without compactness both parts fail (our own examples). The closed half-lines \[n, ∞) are connected and nested, but their intersection is empty. In the plane, the lines x = 0 and x = 1 together with the strip \[0, 1\] × \[n, ∞) are closed and connected, but their intersection is the two lines, which is disconnected.

**Wikipedia:** [Continuum (topology)](https://en.wikipedia.org/wiki/Continuum_%28topology%29). It says: “If {Xₙ} is a nested family of continua, i.e. Xₙ ⊇ Xₙ₊₁, then their intersection is a continuum.”

**Sources:** none listed. No primary source with a working link was found.

### Peano continua are exactly the continuous images of an interval

**Remember:** Compact, connected, locally connected, metric: exactly what a curve can draw.

*Makes the theorem clean to state or prove.* MSC 54F15 (Continua and generalizations), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A continuum is a nonempty compact connected metric space. A Peano continuum is a continuum that is locally connected: every point has arbitrarily small connected neighbourhoods.

**Problem.** The Hahn–Mazurkiewicz theorem: a Hausdorff space is a continuous image of \[0, 1\] exactly when it is a Peano continuum.

**How the definition helps.** Continuous images of \[0, 1\] keep local connectedness, so adding it to the definition of continuum gives an exact list. Without it the theorem fails: the closed topologist's sine curve is a continuum, but it is not locally connected, so no path fills it. The square is a Peano continuum, so Peano's space-filling curve is a special case. The hard direction is to build the curve from the four properties.

**Wikipedia:** [Space-filling curve](https://en.wikipedia.org/wiki/Space-filling_curve), [Continuum (topology)](https://en.wikipedia.org/wiki/Continuum_%28topology%29). It says: “A non-empty Hausdorff topological space is a continuous image of the unit interval if and only if it is a compact, connected, locally connected, second-countable space.”

**Sources:**

- [Mazurkiewicz, S. (1920). Sur les lignes de Jordan. Fundamenta Mathematicae 1, 166–209.](https://doi.org/10.4064/fm-1-1-166-209)

### Defining dimension by overlaps of open covers makes it topological

**Remember:** On a line, covers need only double overlaps; in the plane, triple.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F45 (Dimension theory in general topology), 55M10. arXiv math.GN, math.AT. Level 2: later undergraduate.

**Definition.** An open cover of a space is a family of open sets whose union is the space. A refinement of a cover is another cover in which each set lies inside some set of the first. The covering dimension of a space is the smallest n such that every open cover has a refinement in which no point lies in more than n + 1 sets.

**Problem.** ℝᵐ and ℝⁿ are not homeomorphic when m ≠ n. This holds even though they have the same number of points, and space-filling curves map one onto the other.

**How the definition helps.** The covering dimension uses only open sets, so homeomorphic spaces have the same dimension straight from the definition. Cantor's bijection and Peano's curve showed that counting points or taking continuous images cannot define dimension. The hard part remains. One must prove that ℝⁿ, or an n-dimensional simplicial complex (a space glued from simplices such as triangles and tetrahedra), has dimension exactly n; this is the Lebesgue covering theorem. Brouwer's invariance of domain gives the same conclusion: a non-empty n-manifold is not an m-manifold for m ≠ n.

**Wikipedia:** [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension), [Hausdorff dimension](https://en.wikipedia.org/wiki/Hausdorff_dimension), [Invariance of domain](https://en.wikipedia.org/wiki/Invariance_of_domain), [Topological manifold](https://en.wikipedia.org/wiki/Topological_manifold). It says: “It is impossible to map two dimensions onto one in a way that is continuous and continuously invertible. The topological dimension, also called Lebesgue covering dimension, explains why.”

**Sources:**

- [L. E. J. Brouwer, Beweis der Invarianz des n-dimensionalen Gebiets, Mathematische Annalen 71 (1912) 305–313](https://doi.org/10.1007/bf01456846)

### Asking curves to be simple makes them split the plane in two

**Remember:** A loop that never crosses itself has one inside and one outside.

*Rules out counterexamples. Confidence: medium.* MSC 54F50 (Topological spaces of dimension \\(\\leq 1\\); curves, dendrites), 54D05. arXiv math.GN, math.GT. Level 2: later undergraduate.

**Definition.** A Jordan curve, or simple closed curve, is the image of a continuous injective map from the circle into the plane. So it is a closed loop that never crosses itself.

**Problem.** The complement of a Jordan curve in the plane has exactly two connected components. One is bounded, the other is unbounded, and the curve is the boundary of each.

**How the definition helps.** Injectivity is what makes the count exactly two. A figure eight is a closed curve that crosses itself, and its complement has three components (our own example). A closed curve that is not injective can even fill a whole square (our own example). The proof is still hard: the polygon case is easy, but approximating a general curve by polygons is not.

**Wikipedia:** [Jordan curve theorem](https://en.wikipedia.org/wiki/Jordan_curve_theorem). It says: “asserts that every simple closed curve in the plane (known as a Jordan curve) divides the plane into two regions”

**Sources:**

- [Veblen, O. (1905). Theory on plane curves in non-metrical analysis situs. Transactions of the American Mathematical Society 6(1), 83–98.](https://doi.org/10.1090/s0002-9947-1905-1500697-4)

### Simple curves cannot fill a square

**Remember:** A curve that never revisits a point cannot fill a square.

*Rules out counterexamples.* MSC 54F50 (Topological spaces of dimension \\(\\leq 1\\); curves, dendrites), 54F45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A simple curve is the image of an interval or a circle under an injective continuous map. So a simple curve does not cross itself.

**Problem.** A simple curve cannot fill a region of the plane. In particular, no simple curve is the whole unit square.

**How the definition helps.** The injective condition excludes space-filling curves such as Peano's, which Jordan's broader 1887 definition of a curve allows. An injective continuous map from a compact interval is a homeomorphism onto its image. The interval has cut points (points whose removal disconnects it), but the square has none, so the square is not such an image. The definition does not exclude all strange behaviour: Osgood's 1903 Jordan curve has positive area.

**Wikipedia:** [Space-filling curve](https://en.wikipedia.org/wiki/Space-filling_curve), [Curve](https://en.wikipedia.org/wiki/Curve). It says: “A non-self-intersecting continuous curve cannot fill the unit square because that will make the curve a homeomorphism from the unit interval onto the unit square”

**Sources:**

- [G. Peano, Sur une courbe, qui remplit toute une aire plane, Mathematische Annalen 36 (1890) 157–160](https://doi.org/10.1007/BF01199438)
- [W. F. Osgood, A Jordan curve of positive area, Trans. AMS 4 (1903) 107–112](https://doi.org/10.1090/s0002-9947-1903-1500628-5)

### Five topological conditions characterize the Cantor set (Brouwer)

**Remember:** Nonempty, no isolated points, only one-point connected pieces, compact and metric means Cantor.

*Makes the theorem clean to state or prove.* MSC 54F65 (Topological characterizations of particular spaces), 54D05, 54F45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is perfect if it has no isolated points. A space is totally disconnected if its only connected subsets are single points. A Cantor space is a space homeomorphic to the middle-thirds Cantor set.

**Problem.** Brouwer's theorem says that any two nonempty, perfect, compact, totally disconnected metrizable spaces are homeomorphic. So the Cantor set is the only such space up to homeomorphism.

**How the definition helps.** The words perfect and totally disconnected name exactly what a construction by repeated splitting needs. Each piece splits into two smaller pieces that are both open and closed, as in a binary tree. Each condition rules out a known example: a convergent sequence with its limit has an isolated point, an interval is not totally disconnected, and the irrationals are not compact. The proof builds a homeomorphism by matching two trees of small open-and-closed pieces (our own outline).

**Wikipedia:** [Cantor space](https://en.wikipedia.org/wiki/Cantor_space). It says: “A topological space is a Cantor space if and only if it is non-empty, perfect, compact, totally disconnected, and metrizable.”

**Sources:**

- [Brouwer, L. E. J. (1910). On the structure of perfect sets of points. Proceedings of the Koninklijke Akademie van Wetenschappen 12, 785–794.](https://dwc.knaw.nl/DL/publications/PU00013496.pdf)

### Perfect sets let closed sets split as perfect plus countable

**Remember:** Strip isolated points until nothing changes; a perfect core remains.

*Makes the theorem clean to state or prove.* MSC 54H05 (Descriptive set theory (topological aspects of Borel, analytic, projective, etc. sets)), 03E15. arXiv math.GN, math.LO. Level 2: later undergraduate.

**Definition.** A subset of a space is perfect if it is closed and has no isolated points. A Polish space is a separable space whose topology comes from a complete metric.

**Problem.** The Cantor–Bendixson theorem says that every closed subset of a Polish space is the disjoint union of a perfect set and a countable set. So no closed set of reals is a counterexample to the continuum hypothesis.

**How the definition helps.** Perfect sets are exactly what remains after removing isolated points again and again, so the theorem names the remainder of that process. The perfect part is the set of points whose every neighbourhood holds uncountably many points of the set, and with a countable base the other points form a countable set (our own outline). A nonempty perfect set in a Polish space contains a copy of the Cantor set, so it has the size of the continuum (our own remark). The axiom of choice gives sets of reals without this property, such as Bernstein sets.

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

**Definition.** A proper filter on a set is a nonempty family of subsets that is closed under finite intersections and supersets and omits the empty set. An ultrafilter is a proper filter that contains, for each subset, either that subset or its complement. The other definition asks for a proper filter that no larger proper filter contains. The image filter under a function f holds each set whose inverse image is in the source filter.

**Problem.** The image filter of an ultrafilter under any function is an ultrafilter.

**How the definition helps.** With the complement test, one only has to check one pair of sets. The inverse images of a set and of its complement are complements of each other. So the source ultrafilter contains one of them, and the image filter contains the matching set. With the maximality definition, one must instead show that each larger proper filter pulls back to a larger filter on the source. The work goes into the proof that the two definitions agree, which uses excluded middle. The argument is our own.

**Paper or page:** [Image of Ultrafilter is Ultrafilter](https://proofwiki.org/wiki/Image_of_Ultrafilter_is_Ultrafilter). It says: “Then the image filter f\[ℱ\] is an ultrafilter on Y.”

**Sources:** none listed. No primary source with a working link was found.

### With the complement test, ultrafilters on disjoint unions live on one summand

**Remember:** An ultrafilter chooses exactly one piece of a finite partition.

*True by definition.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D80. arXiv math.GN. Level 3: graduate.

**Definition.** Define an ultrafilter as a proper filter that contains, for each subset, either that subset or its complement. A proper filter is a nonempty family of subsets, closed under finite intersections and supersets, that omits the empty set. The other definition asks for a maximal proper filter.

**Problem.** Each ultrafilter on a disjoint union X + Y comes from a unique ultrafilter on X or on Y. It is the image of that ultrafilter under the inclusion map.

**How the definition helps.** Y is the complement of X in X + Y, so the complement test puts exactly one of them in the ultrafilter. If X is in it, the traces of its members on X form an ultrafilter on X. Its image under the inclusion is the original ultrafilter. With the maximality definition, one must first prove that an ultrafilter contains one part of each union of two sets. The work goes into that proof, which is the equivalence of the two definitions. The extension to finite disjoint unions, by induction, is our own.

**nLab:** [ultrafilter](https://ncatlab.org/nlab/show/ultrafilter). It says: “each ultrafilter U on X + Y must contain exactly one of X, Y”

**Sources:** none listed. No primary source with a working link was found.

### Compact families have compact unions

**Remember:** To cover a compact family, cover each member finitely first.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** A hyperspace has sets as points. On nonempty compact subsets, the upper Vietoris topology uses tests requiring an entire subset to lie in a given open set. The full Vietoris topology also tests whether a subset meets a given open set.

**Problem.** The union of a compact family of compact subsets is compact, even for the upper Vietoris topology alone.

**How the definition helps.** One upper Vietoris test captures every member covered by the same finite collection of open sets (our own). Start with any open cover of the union (our own). For each finite subcollection, test containment in its union (our own). Compactness of each member makes these tests cover the family (our own). Compactness of the family selects finitely many tests, hence finitely many original open sets (our own). For metric spaces, this avoids the theorem identifying the Hausdorff distance topology with the full Vietoris topology (our own).

**Paper or page:** [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2). It says: “If $\\mathcal{A}\\subset (K<sub>Y</sub>(X),\\tau<sub>v</sub>)$ is compact, then so is $K:=\\bigcup\_{A\\in\\mathcal{A}}A\\subset X$.”

**Sources:**

- [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2)

### Compact misses make Fell spaces compact

**Remember:** Add infinity to every set, then test it inside a compact space.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The Fell topology on closed subsets, including the empty set, tests whether a subset meets an open set or avoids a compact set. The Vietoris topology instead tests avoidance of arbitrary closed sets.

**Problem.** The Fell space of all closed subsets of a locally compact Hausdorff space is compact Hausdorff.

**How the definition helps.** The compact miss tests are exactly the containment tests that remain after every set gains the point at infinity (our own). Our own proof sends each closed set to its union with infinity in the one-point extension. This identifies the Fell space with the closed family of compact subsets containing infinity (our own). The work moves to compactness and Hausdorffness of the Vietoris space over a compact Hausdorff space (our own).

**Wikipedia:** [Hypertopology](https://en.wikipedia.org/wiki/Hypertopology). It says: “the Fell topology is always compact”

**Sources:**

- [J. M. G. Fell, A Hausdorff topology for the closed subsets of a locally compact non-Hausdorff space (1962)](https://doi.org/10.1090/S0002-9939-1962-0139135-6)

### Expansions give largest Hausdorff intermediates

**Remember:** Intersect the two expansions to keep every allowed point.

*True by definition.* MSC 54B20 (Hyperspaces in general topology), 68U05. arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** The Hausdorff distance between two compact sets is the least r such that each lies within distance r of the other. For compact plane sets A and B at Hausdorff distance one and 0 ≤ t ≤ 1, let Mₜ be the set of points within t of A and within 1 − t of B.

**Problem.** The set Mₜ is at Hausdorff distance t from A and 1 − t from B. It contains every compact set with these two distances.

**How the definition helps.** Intersecting the two expansions keeps every point an intermediate set could contain. Our own proof joins each point of A to a nearest point of B, and each point of B to a nearest point of A. The point a fraction t along each segment from its A end lies in Mₜ, so the distances from Mₜ to A and B are at most t and 1 − t. Their sum must be at least one by the triangle inequality, so both bounds are exact.

**Paper or page:** [Between Shapes, Using the Hausdorff Distance](https://arxiv.org/abs/2009.14719v2). It says: “Sα is the maximal set that satisfies dH(A, Sα) = α and dH(B, Sα) = 1 − α.”

**Sources:**

- [Between Shapes, Using the Hausdorff Distance, Lemma 2](https://arxiv.org/abs/2009.14719v2)

### Proper maps act continuously on Fell spaces

**Remember:** A proper map pulls each compact miss test back to another.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The Fell topology on closed subsets tests whether a subset meets an open set or misses a compact set. The Vietoris topology uses misses of arbitrary closed sets instead. Here a proper map is a continuous map whose inverse images of compact sets are compact.

**Problem.** A proper map between locally compact Hausdorff spaces induces a continuous map on Fell hyperspaces by taking images of closed sets.

**How the definition helps.** The inverse image of a compact miss test is a miss test for the compact preimage (our own). An open hit test pulls back to an open hit test (our own). Our own account uses the proper mapping theorem to know that the image of a closed set is closed.

**Paper or page:** [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1). It says: “If Y is locally compact and f is proper, then f̃: CL₍F⁺₎(X) → CL₍F⁺₎(Y) is continuous.”

**Sources:**

- [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1)

### Vietoris hit tests preserve image continuity

**Remember:** Meeting an open set can be tested before taking closure.

*Rules out counterexamples. Confidence: medium.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The lower Vietoris topology on nonempty closed subsets has open tests that ask whether a closed subset meets a given open set. The induced image map sends a closed subset to the closure of its image.

**Problem.** Suppose singletons in X are closed, and let Y be any topological space. A map from X to Y is continuous exactly when its induced map on closed sets is continuous for the lower Vietoris topologies.

**How the definition helps.** A test for meeting an open set pulls back to a test for meeting its preimage when the original map is continuous, and taking closure does not change which open sets an image meets (our own). Conversely, sending x to its singleton is continuous, and composing with the induced map recovers the open preimage test for the original map (our own). Closed singletons are needed: give two points the indiscrete topology (our own). The identity into the discrete topology is not continuous, but its induced map has a one-point domain (our own).

**Paper or page:** [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1). It says: “f is continuous if and only if f̃: CLᵥ⁻(X) → CLᵥ⁻(Y) is continuous.”

**Sources:**

- [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1)

### Defining proper maps by compact preimages makes them extend to one-point compactifications

**Remember:** Pulling back a compact complement gives a neighborhood of infinity.

*True by definition.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D35. arXiv math.GN. Level 3: graduate.

**Definition.** Call a continuous map proper if the inverse image of each compact set is compact. Another definition asks for a closed map whose fibers, the inverse images of single points, are compact. The two definitions agree for maps between locally compact Hausdorff spaces.

**Problem.** A proper map between locally compact Hausdorff spaces extends to a continuous map between their one-point compactifications that sends the added point to the added point.

**How the definition helps.** With the compact-preimage definition, neighborhoods of the added point pull back to neighborhoods of the added point. A basic open neighborhood of the added point is the complement of a compact closed set K. Its inverse image is the complement of the inverse image of K, which is compact, and closed because the space is Hausdorff. The work goes into proving that closed maps with compact fibers have compact preimages of compact sets.

**Wikipedia:** [Proper map](https://en.wikipedia.org/wiki/Proper_map). It says: “a function between topological spaces is called proper if inverse images of compact subsets are compact.”

**Sources:** none listed. No primary source with a working link was found.

### Proper maps make the space of ends a functor

**Remember:** A proper map cannot pull the ends of a space back into a compact set.

*Rules out counterexamples. Confidence: medium.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 55P57. arXiv math.GN, math.GT. Level 3: graduate.

**Definition.** A map f : X → Y is proper if the preimage of every compact set is compact. The space of ends e(X) records the ways to go to infinity in X. It is the limit, over compact K ⊆ X, of the sets of connected components of the closures of X ∖ K.

**Problem.** A proper map f : X → Y induces a continuous map e(X) → e(Y), and this respects composition. So the space of ends is a functor on spaces and proper maps.

**How the definition helps.** Proper maps keep compact sets compact under preimage, so they send ends to ends. With all continuous maps, ends are not functorial. For example, the map ℝ → {0} is continuous, but ℝ has two ends and the point has none. The cylinder maps are also proper, and this gives proper homotopy and homotopy invariants at infinity.

**nLab:** [proper homotopy theory](https://ncatlab.org/nlab/show/proper+homotopy+theory). It says: “The assignment sending X to e(X) cannot be functorial on the category of spaces and continuous maps, since the contracting map ℝ → {0} is continuous”

**Sources:**

- [Hans Freudenthal, Über die Enden topologischer Räume und Gruppen, Mathematische Zeitschrift 33 (1931) 692–713](https://doi.org/10.1007/BF01174375)

### Compact tests make evaluation continuous

**Remember:** Test one compact neighborhood to control nearby inputs together.

*Rules out counterexamples.* MSC 54C35 (Function spaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** In the compact-open topology, one open test requires a map to send a specified compact set into a specified open set. Pointwise convergence uses only tests at individual points.

**Problem.** Evaluation at a variable input is continuous for the compact-open topology when the domain is locally compact Hausdorff.

**How the definition helps.** A compact test controls the function throughout a neighborhood of the input (our own). Local compactness supplies a compact neighborhood inside the inverse image of the desired open set (our own). Our own counterexample uses continuous real functions on the interval \[0, 1\] with the pointwise topology. A neighborhood tests only finitely many inputs (our own). A continuous function can pass those tests and still take a large value arbitrarily near zero (our own).

**nLab:** [compact-open topology](https://ncatlab.org/nlab/show/compact-open+topology). It says: “given by (x,f) ↦ f(x) is continuous”

**Sources:**

- [Ralph H. Fox, On topologies for function spaces (1945)](https://doi.org/10.1090/S0002-9904-1945-08370-0)

### Hemicompactness metrizes compact-open function spaces

**Remember:** One sequence can track every compact test.

*Rules out counterexamples.* MSC 54C35 (Function spaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** A Hausdorff space is hemicompact if some sequence of compact sets contains every compact subset in at least one member. The compact-open topology tests whether a function sends a specified compact set into a specified open set.

**Problem.** Continuous maps from a hemicompact space to a metric space form a metrizable space in the compact-open topology.

**How the definition helps.** One sequence suffices because every compact test set fits inside one member (our own). Take the greatest distance between the function values on member n, cap it at one, multiply by 2⁻ⁿ and add the results (our own). This metric gives uniform convergence on compact sets, which is the compact-open topology here (our own). The rationals are not hemicompact: for any sequence of compact sets, choosing a rational within 1/n of zero outside member n gives, with zero, a compact set that no member contains (our own).

**Wikipedia:** [Hemicompact space](https://en.wikipedia.org/wiki/Hemicompact_space). It says: “defines a metric on C(X,M) which induces the compact-open topology.”

**Sources:** none listed. No primary source with a working link was found.

### Retracts preserve neighborhood extension

**Remember:** Extend into the larger target, then retract the result.

*True by definition.* MSC 54C55 (Absolute neighborhood extensor, absolute extensor, absolute neighborhood retract (ANR), absolute retract spaces (general properties)). arXiv math.GN. Level 3: graduate.

**Definition.** An absolute neighborhood extensor for metric spaces allows every continuous map into it from a closed subset to extend continuously over some open neighborhood. Here the closed subset belongs to any metric space. A metrizable absolute neighborhood retract admits a continuous retraction from a neighborhood whenever it embeds as a closed subset of a metric space. A retraction maps onto the subset and fixes each of its points.

**Problem.** A retract of a metrizable absolute neighborhood extensor is an absolute neighborhood extensor. Thus a retract of a metrizable absolute neighborhood retract has the same property.

**How the definition helps.** The extension definition lets one extend into the original target and compose with the retraction (our own). Our own proof first regards the given map as a map into the larger target. The work of comparing the definitions lies in Dugundji’s equivalence of neighborhood retracts and neighborhood extensors for metric spaces (our own).

**Wikipedia:** [Absolute neighborhood retract](https://en.wikipedia.org/wiki/Absolute_neighborhood_retract). It says: “For each metric space X and closed subset A ⊂ X, each A → Y extends to a neighborhood of A”

**Sources:**

- [James Dugundji, An extension of Tietze’s theorem (1951)](https://doi.org/10.2140/pjm.1951.1.353)

### Michael's selection theorem makes gluing paracompact spaces easy

**Remember:** Paracompact means you can always choose continuously from nicely varying closed convex sets.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54C65 (Selections in general topology), 54D20, 54B17. arXiv math.GN. Level 3: graduate.

**Definition.** Michael's selection theorem: a T₁ space X is paracompact Hausdorff exactly when every lower semicontinuous relation from X to a Banach space with nonempty closed convex fibres has a continuous selection. Lower semicontinuous means that, for each open U, the points related to something in U form an open set. A selection chooses one related point for each point of X.

**Problem.** A pushout of paracompact Hausdorff spaces along a closed embedding is again paracompact Hausdorff.

**How the definition helps.** The selection property is about sections of maps, and sections pull back along continuous maps and extend along closed embeddings. To show that the pushout W is paracompact, pull a given relation back to the two pieces. Choose a selection on one piece, extend it over the other piece, and glue by the universal property of the pushout. In our own reading, partitions of unity or refinements of covers would be much harder to glue.

**nLab:** [colimits of paracompact Hausdorff spaces](https://ncatlab.org/nlab/show/colimits+of+paracompact+Hausdorff+spaces). It says: “The relevant result, due to Ernest Michael, is particularly well-adapted to the study of colimits.”

**Sources:**

- [Ernest Michael, Continuous selections I, Annals of Mathematics 63 (1956) 361–382](https://doi.org/10.2307/1969615)

### Components defined by clopen sets give compact Hausdorff component spaces clopen bases

**Remember:** Each clopen set gives one coordinate in a cube of zeros and ones.

*True by definition. Confidence: medium.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54B15. arXiv math.GN. Level 3: graduate.

**Definition.** In a compact Hausdorff space, define a component as a set of points that lie in exactly the same clopen sets. A clopen set is both open and closed. These classes are usually called quasicomponents. The usual definition of a component is a maximal connected subset.

**Problem.** Collapse each connected component of a compact Hausdorff space to a point. The resulting quotient space has a basis of clopen sets.

**How the definition helps.** With the clopen definition, the quotient embeds in a product of two-point spaces, which has a clopen basis. Send each point to the list of clopen sets that contain it, in a product of two-point discrete spaces. Two points have the same image exactly when they lie in the same class. The quotient is compact and the product is Hausdorff, so the induced injective map is an embedding. The work goes into the theorem that these classes are connected, so they are the usual components. ProofWiki states that theorem, and the rest of the argument is our own.

**Paper or page:** [Quasicomponent of Compact Hausdorff Space is Connected](https://proofwiki.org/wiki/Quasicomponent_of_Compact_Hausdorff_Space_is_Connected). It says: “Let C be a quasicomponent of ⟨X, τ⟩. Then C is connected.”

**Sources:** none listed. No primary source with a working link was found.

### Defining sober spaces as spaces of points of locales makes products sober

**Remember:** Taking points turns products of locales into products of spaces.

*True by definition.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 18F70, 54B10. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A frame is a lattice like the open sets of a space: all unions exist, and finite intersections distribute over them. A locale is a frame viewed as a generalized space, and its points form a topological space. Call a space sober if it is homeomorphic to the space of points of some locale. The usual definition asks that each irreducible closed set, one not the union of two smaller closed sets, be the closure of exactly one point.

**Problem.** Every product of sober spaces is sober.

**How the definition helps.** With the locale definition, products are sober because taking points preserves products. Taking points is right adjoint to taking the frame of open sets, so it preserves products, as every right adjoint does. So the product of the spaces of points is the space of points of the product locale. The adjunction says that continuous maps into a space of points match locale maps. The work goes into building it and proving that a sober space is the space of points of its own frame of open sets. The nLab states that sober spaces are the spaces of points of locales, and this proof is our own.

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “thus sober spaces are precisely those spaces that are the spaces of points of some locale”

**Sources:** none listed. No primary source with a working link was found.

### Weak Hausdorff spaces are closed under pushouts along closed inclusions

**Remember:** Weak Hausdorff only asks that compact Hausdorff images be closed, not that points separate.

*Rules out counterexamples. Confidence: medium.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 54D50. arXiv math.GN. Level 3: graduate.

**Definition.** A space X is weakly Hausdorff if the image of every continuous map K → X from a compact Hausdorff space K is closed in X. Every Hausdorff space is weakly Hausdorff. Every weakly Hausdorff space is T₁, which means that its points are closed sets.

**Problem.** A pushout of weakly Hausdorff spaces along a closed inclusion is weakly Hausdorff. An example is attaching one space to another along a closed subspace.

**How the definition helps.** Weak Hausdorff keeps the useful consequences of Hausdorff and makes the category closed under the pushouts that homotopy theory uses. Steenrod chose compactly generated Hausdorff spaces, which are not closed under many colimits, for instance quotients, formed in Top. With weak Hausdorff in place of Hausdorff, pushouts along closed inclusions stay in the category.

**nLab:** [weakly Hausdorff topological space](https://ncatlab.org/nlab/show/weakly+Hausdorff+topological+space), [compactly generated topological space](https://ncatlab.org/nlab/show/compactly+generated+topological+space). It says: “The construction of pushouts is better behaved in CGWH than in CGH. Specifically, CHWH is closed under pushouts, one leg of which is the inclusion of a closed subspace. CGH does not have such nice behavior”

**Sources:**

- [Michael C. McCord, Classifying spaces and infinite symmetric products, Trans. AMS 146 (1969) 273–298](https://www.ams.org/journals/tran/1969-146-00/S0002-9947-1969-0251719-4/S0002-9947-1969-0251719-4.pdf)
- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer 1972](https://doi.org/10.1007/BFb0067491)

### Defining complete regularity by the initial topology makes real tests detect continuity

**Remember:** Test a map by reading its real coordinates.

*True by definition.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54C05. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space completely regular if it has the initial topology of its continuous real functions. That is the coarsest topology that makes all these functions continuous. The usual definition asks that each point and each closed set not containing it be separated by a continuous real function.

**Problem.** Let X be completely regular. A map g into X is continuous if f ∘ g is continuous for every continuous real function f on X.

**How the definition helps.** With the initial-topology definition, the theorem is the universal property of an initial topology. The inverse images of open sets under the real functions generate the topology of X, so it suffices to test these sets. Their inverse images under g are open, because each composite f ∘ g is continuous. The work goes into proving that the separation definition gives the initial topology. That proof uses inverse images of intervals to find small open neighborhoods inside each open set. Wikipedia states that the two definitions agree, and the rest is our own.

**Wikipedia:** [Tychonoff space](https://en.wikipedia.org/wiki/Tychonoff_space). It says: “is completely regular if and only if it has the initial topology”

**Sources:** none listed. No primary source with a working link was found.

### Defining perfect normality by zero sets makes it pass to subspaces

**Remember:** Restrict a function to restrict its zero set.

*True by definition.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54B05. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space perfectly normal if every closed set is a zero set, the set where some continuous real function is zero. The other definition asks for a normal space in which every closed set is a countable intersection of open sets. Normal means that disjoint closed sets have disjoint open neighborhoods.

**Problem.** Every subspace of a perfectly normal space is perfectly normal.

**How the definition helps.** With the zero-set definition, a restricted function defines the restricted closed set. A closed set in a subspace is the intersection of the subspace with a closed set of the whole space. That closed set is the zero set of some function, and the restricted function has the smaller set as its zero set. The other definition makes this harder, because normality alone does not pass to subspaces. The work goes into Vedenissoff's theorem, which says that the definitions agree. Wikipedia states that theorem and that perfect normality passes to subspaces, and this proof is our own.

**Wikipedia:** [Normal space](https://en.wikipedia.org/wiki/Normal_space). It says: “Equivalently, X is perfectly normal if and only if every closed set is the zero set of a continuous function.”

**Sources:** none listed. No primary source with a working link was found.

### Regularity makes H-closed spaces compact

**Remember:** Shrink first so a finite dense family really covers.

*Rules out counterexamples.* MSC 54D25 (\`\`\\(P\\)-minimal'' and \`\`\\(P\\)-closed'' spaces). arXiv math.GN. Level 3: graduate.

**Definition.** A Hausdorff space is H-closed if it is closed in every Hausdorff space containing it. Equivalently, each open cover has finitely many members with dense union. Regularity lets each point shrink an open neighborhood so its closure lies in the original neighborhood.

**Problem.** A regular Hausdorff H-closed space is compact.

**How the definition helps.** Regularity lets us shrink each cover member around each of its points before applying the dense-union test (our own). Finitely many shrunken sets have dense union, so their closures cover the space (our own). The original cover members containing those closures give a finite subcover (our own). The cited example adds the rational points as one open set to the usual topology on the unit interval. The resulting space is H-closed and fails compactness.

**Wikipedia:** [H-closed space](https://en.wikipedia.org/wiki/H-closed_space). It says: “Every regular Hausdorff H-closed space is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Compact Hausdorff spaces are the algebras of the ultrafilter monad

**Remember:** Compact gives each ultrafilter a limit; Hausdorff makes that limit unique.

*True by definition.* MSC 54D30 (Compactness), 54A20, 18C15. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** An ultrafilter on a set S is a maximal family of subsets of S that is closed under finite intersections and supersets and does not contain the empty set. View a topological space as a set S with a convergence relation from ultrafilters on S to points of S; Barr calls this a relational β-module. The space is compact if every ultrafilter converges to at least one point. It is Hausdorff if every ultrafilter converges to at most one point.

**Problem.** Manes's theorem says that compact Hausdorff spaces are exactly the algebras of the ultrafilter monad β on Set. This monad sends a set S to the set βS of ultrafilters on S. So compact Hausdorff spaces form an algebraic (monadic) category.

**How the definition helps.** With the convergence definition, the theorem is close to a restatement. Compact means the relation is total, and Hausdorff means it is a function. So a compact Hausdorff space is a relation that is a function βS → S, which sends each ultrafilter to its limit. The monad laws then become the axioms. The real content is that Barr's relational β-modules are the same as topological spaces, and that every compact Hausdorff topological space arises in this way. That converse is equivalent to the ultrafilter principle (every filter extends to an ultrafilter).

**nLab:** [compact Hausdorff space](https://ncatlab.org/nlab/show/compact+Hausdorff+space), [relational beta-module](https://ncatlab.org/nlab/show/relational+beta-module), [ultrafilter](https://ncatlab.org/nlab/show/ultrafilter). It says: “compactness is equivalent to having every ultrafilter converge to some point, and Hausdorffness to having that point be unique.”

**Sources:**

- [Michael Barr, Relational algebras, in: Reports of the Midwest Category Seminar IV, Lecture Notes in Mathematics 137, Springer 1970, 39–55](https://www.math.mcgill.ca/barr/papers/relalgs.pdf)
- [Saunders Mac Lane, Categories for the Working Mathematician, Section VI.9, Graduate Texts in Mathematics 5, Springer (1971; Crossref gives 1978 for this DOI)](https://doi.org/10.1007/978-1-4757-4721-8)

### Compact spaces are small relative to closed inclusions of T₁-spaces

**Remember:** Compact spaces pass through colimits of closed inclusions, not through all colimits.

*Rules out counterexamples.* MSC 54D30 (Compactness), 18C35, 18N40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A space Y is compact relative to closed T₁ inclusions if hom(Y, −) preserves colimits of transfinite sequences in which each map is a closed inclusion of T₁-spaces (spaces whose points are closed). Ordinary compactness of an object asks that hom(Y, −) preserve all filtered colimits.

**Problem.** Every compact space Y is compact relative to closed T₁ inclusions. So every map from Y into a CW complex factors through some skeleton.

**How the definition helps.** Restricting the class of colimits removes the examples where compact spaces fail to be compact objects. In the full sense, the only compact objects of Top are the finite discrete spaces. For example, the two-point indiscrete space is compact, but it is a colimit of a sequence of spaces Xₙ and its identity map factors through none of them. Colimits of closed inclusions of T₁-spaces exclude such sequences, and then a short argument gives the result.

**nLab:** [compact object](https://ncatlab.org/nlab/show/compact+object). It says: “If Y ∈ Top is a compact topological space, then hom(Y,-) preserves colimits of functors mapping out of limit ordinals, provided that the arrows of the cocone diagram, X\_α → X\_β, are closed inclusions of T₁-spaces”

**Sources:**

- [Mark Hovey, Model Categories, Mathematical Surveys and Monographs 63, AMS (1999)](https://doi.org/10.1090/surv/063)

### Defining βX by its extension property makes it map onto every compactification

**Remember:** Extend the embedding, and density makes the extension onto.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54C20. arXiv math.GN. Level 3: graduate.

**Definition.** Define the Stone–Čech compactification βX of a Tychonoff space X by a universal property. Every continuous map from X into a compact Hausdorff space extends uniquely along the map from X to βX. A Tychonoff space is one that embeds in a compact Hausdorff space. The usual construction closes up X in a power of \[0, 1\], one factor per continuous map from X to \[0, 1\].

**Problem.** Let K be a Hausdorff compactification of X, that is, a compact Hausdorff space with a dense copy of X. Then a unique continuous surjection from βX onto K fixes the points of X.

**How the definition helps.** With the universal property as the definition, the map from βX to K exists at once: it is the extension of the embedding of X into K. Its image is compact, so it is closed in K, and it contains the dense set X, so it is all of K. Uniqueness holds because continuous maps into a Hausdorff space that agree on a dense set are equal. The work goes into proving that the closure construction has the universal property.

**Wikipedia:** [Stone–Čech compactification](https://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification). It says: “any continuous map from X into any other compact Hausdorff space factors uniquely through βX.”

**Sources:**

- [Eduard Čech, On Bicompact Spaces (1937)](https://doi.org/10.2307/1968839)

### Discrete Stone–Čech compactifications are projective

**Remember:** Choose a lift on discrete points, then extend once.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** The Stone–Čech compactification contains the original space densely in a compact Hausdorff space. Every continuous map into a compact Hausdorff space extends uniquely from the original space over the compactification. A compact Hausdorff space P is projective if every continuous map from P to Y factors through every continuous surjection Z → Y. Here Y and Z are compact Hausdorff, and the factor from P to Z must be continuous.

**Problem.** The Stone–Čech compactification of every discrete space is projective among compact Hausdorff spaces.

**How the definition helps.** The extension property reduces a continuous lift to a choice of preimages on the discrete subset (our own). Choose one preimage of each prescribed value under the surjection (our own). The chosen assignment is continuous on a discrete space, so it extends to the compactification (our own). Composing with the surjection recovers the given map by uniqueness (our own). This bypasses Gleason’s characterization and uses the theorem giving the Stone–Čech extension property (our own).

**nLab:** [Stone-Čech compactification](https://ncatlab.org/nlab/show/Stone-%C4%8Cech+compactification). It says: “is an extremally disconnected topological space. By a theorem by Gleason, these are precisely the projective objects”

**Sources:**

- [Andrew M. Gleason, Projective topological spaces (1958)](https://doi.org/10.1215/ijm/1255454110)

### Discretizing the dual gives locally compact abelian groups their Bohr compactification

**Remember:** Give the dual the discrete topology, then take its dual.

*True by definition. Confidence: medium.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 43A40, 22B05. arXiv math.GN, math.FA. Level 3: graduate.

**Definition.** The Bohr compactification of a topological group G is a compact Hausdorff group B with a map b : G → B through which every continuous homomorphism from G to a compact Hausdorff group factors uniquely. For a locally compact Hausdorff abelian group G, let H be its Pontryagin dual with the discrete topology.

**Problem.** For a locally compact Hausdorff abelian group G, the dual of H, with the evaluation map from G, is the Bohr compactification of G.

**How the definition helps.** The discrete dual gives a compact group, and duality turns the required extension into a map out of a discrete group. A map to a compact abelian K dualizes to a homomorphism from the discrete dual of K into H, and dualizing back gives the unique extension (our own). For a general compact target, factor through the abelian closure of the image (our own). The work lies in Pontryagin duality, rather than in building B as a closure inside a product of circles (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality), [Bohr compactification](https://en.wikipedia.org/wiki/Bohr_compactification). It says: “is a morphism into a compact group which is easily shown to satisfy the requisite universal property.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudocompact products preserve Stone–Čech products

**Remember:** Check bounded functions on the product, not just on its factors.

*Rules out counterexamples.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** For a subspace of a compact Hausdorff space, the Stone–Čech compactification contains that subspace densely and extends every bounded continuous real function. Pseudocompactness means that every continuous real function is bounded.

**Problem.** Let X and Y be infinite subspaces of compact Hausdorff spaces. The natural map from the Stone–Čech compactification of X × Y to the product of the Stone–Čech compactifications of X and Y is a homeomorphism exactly when X × Y is pseudocompact.

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

**How the definition helps.** Choosing filters as points turns a common-point problem into extending a family of closed sets (our own). Alexander’s subbase theorem reduces the usual open-cover proof to checking the generating closed sets (our own). Suppose every finite group of these generators shares a point (our own). Then every finite intersection of their defining closed sets is nonempty (our own). The maximal filter lemma extends those sets to one Wallman point belonging to every generator in the family (our own).

**Wikipedia:** [Wallman compactification](https://en.wikipedia.org/wiki/Wallman_compactification). It says: “The points of the Wallman compactification ωX of a space X are the maximal proper filters in the poset of closed subsets of X.”

**Sources:**

- [Henry Wallman, Lattices and Topological Spaces (1938)](https://doi.org/10.2307/1968717)

### Exponentiable spaces are exactly the core-compact spaces

**Remember:** Core-compact means every open set is a union of open sets way below it.

*Makes the theorem clean to state or prove.* MSC 54D45 (Local compactness, \\(\\sigma\\)-compactness), 18F60, 06B35. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** Let V and U be open sets of a space X. Write V ≪ U ('V is way below U') if every open cover of U has a finite subfamily that covers V. X is core-compact if each open neighbourhood U of a point contains an open neighbourhood V of that point with V ≪ U. In lattice terms, the lattice of open sets of X (its frame) is a continuous lattice, that is, each element is the join of the elements way below it.

**Problem.** A space X is exponentiable in Top, that is, X × (−) has a right adjoint, if and only if X is core-compact.

**How the definition helps.** Core-compactness turns the question into a clean equivalence, with no extra condition. Local compactness is sufficient, but without the Hausdorff condition it has several inequivalent versions, and it characterizes exponentiability only for sober spaces. Core-compactness is stated purely in terms of the lattice of open sets, and for Hausdorff spaces it reduces to local compactness. For locales, the same idea says that the exponentiable locales are exactly the locally compact ones.

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

**Definition.** A space X is compactly generated, also called a k-space, if this holds: a subset U of X is open exactly when its preimage under every continuous map C → X from a compact Hausdorff space C is open. Equivalently, X is a quotient of a disjoint union of compact Hausdorff spaces.

**Problem.** The compactly generated spaces include CW complexes, manifolds and locally compact Hausdorff spaces, and they form a cartesian closed category. So Map(X × Y, Z) ≅ Map(X, Map(Y, Z)) holds for all compactly generated X, Y and Z.

**How the definition helps.** In k-spaces the category is cartesian closed, so the exponential law holds for every pair of spaces. In Top only some spaces are exponentiable, so the law cannot be stated for all spaces. The cost is that products, limits and mapping spaces must be k-ified, which makes open every set whose preimages under maps from compact Hausdorff spaces are open. So they differ from those in Top.

**nLab:** [compactly generated topological space](https://ncatlab.org/nlab/show/compactly+generated+topological+space), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “As opposed to general topological spaces, compactly generated spaces form a cartesian closed category while still being general enough for most purposes of general topology”

**Sources:**

- [Norman E. Steenrod, A convenient category of topological spaces, Michigan Mathematical Journal 14 (1967) 133–152](https://doi.org/10.1307/mmj/1028999711)
- [David Gale, Compact sets of functions and function rings, Proc. AMS 1 (1950) 303–308](https://doi.org/10.2307/2032373)

### Products of CW complexes are CW complexes with the compactly generated product

**Remember:** In the compactly generated product, closed means closed on every compact piece.

*Rules out counterexamples.* MSC 54D50 (\\(k\\)-spaces), 18F60, 55U40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** The category of compactly generated spaces has its own product. This product is the k-ification of the ordinary product topology (the change of topology that makes a space compactly generated). In it, a set is closed if it meets each compact Hausdorff subset in a closed set.

**Problem.** The product X × Y of two CW complexes is again a CW complex. Its cells are the products of the cells of X with the cells of Y.

**How the definition helps.** With the ordinary product topology, the product of two CW complexes need not be a CW complex. The compactly generated product removes these exceptions, so the statement holds for every pair. The two products agree when one factor is locally compact, or when both factors have countably many cells. So the change matters only for large complexes.

**nLab:** [CW complex](https://ncatlab.org/nlab/show/CW+complex), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces), [compactly generated topological space](https://ncatlab.org/nlab/show/compactly+generated+topological+space). It says: “need not be a CW complex in the usual product topology, but it is in the compactly generated topology.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002), Appendix](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Fréchet–Urysohn spaces have sequential subspaces

**Remember:** One sequence reaches each closure point, even after passing to a subspace.

*Rules out counterexamples.* MSC 54D55 (Sequential spaces). arXiv math.GN. Level 3: graduate.

**Definition.** A sequential space detects closed sets by whether they contain all limits of sequences from the set. In a Fréchet–Urysohn space, every point in a set’s closure is already the limit of a sequence from that set.

**Problem.** A space is Fréchet–Urysohn exactly when all of its subspaces are sequential.

**How the definition helps.** In our own proof, any sequence reaching a closure point from a set still works inside every subspace containing both. Conversely, take a set A and one missing closure point x. In the subspace A ∪ {x}, sequentiality forces some sequence from A to reach x, since A is not closed there. Our own counterexample uses Arens’ sequential space, where each row has a limit and the row limits converge to a final point. Removing the row limits leaves the final point in the closure of the rows, although no sequence from them reaches it.

**Wikipedia:** [Fréchet–Urysohn space](https://en.wikipedia.org/wiki/Fr%C3%A9chet%E2%80%93Urysohn_space). It says: “Every subspace of X is a sequential space.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded realcompact coordinates give compactness

**Remember:** Every bounded coordinate can live in a compact interval.

*Rules out counterexamples.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 3: graduate.

**Definition.** A realcompact space embeds as a closed subset of a product of real lines. A pseudocompact space has bounded image under each continuous real function.

**Problem.** A pseudocompact realcompact space is compact.

**How the definition helps.** Bounded coordinate functions place the closed image in a product of compact intervals (our own). Tychonoff’s theorem makes that product compact, so its closed subspace is compact (our own). Without realcompactness, take all countable ordinals in their order topology (our own). Every countable open cover has a finite subcover, which forces each continuous real function to be bounded (our own). The open initial segments cover the space without a finite subcover (our own).

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

**Definition.** A proximity on a set is a relation 'A is near B' between subsets. Its axioms include symmetry, and that A is near B ∪ C exactly when A is near B or near C. It describes nearness of sets to sets, not only of points to sets.

**Problem.** The Hausdorff compactifications of a Tychonoff space correspond one-to-one, up to equivalence, with the separated proximities compatible with its topology. Two sets are near exactly when their closures meet in the compactification.

**How the definition helps.** A compactification is determined by which pairs of sets have touching closures, and a proximity records exactly that data. So the classification becomes a statement about one relation on subsets. The Stone–Čech compactification corresponds to the proximity where two sets are near unless a continuous function separates them (our own remark). The hard part is to build the compactification from a proximity, by using maximal families of mutually near sets (our own remark).

**Wikipedia:** [Proximity space](https://en.wikipedia.org/wiki/Proximity_space). It says: “Given a compact Hausdorff space, there is a unique proximity space whose corresponding topology is the given topology: A is near B if and only if their closures intersect. More generally, proximities classify the compactifications”

**Sources:**

- [Wallace, A. D. (1941). Separation Spaces. Annals of Mathematics 42(3), 687–697.](https://doi.org/10.2307/1969257)

### Cauchy ultrafilters make complete totally bounded uniform spaces compact

**Remember:** Total boundedness makes ultrafilters Cauchy, and completeness makes them converge.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30, 54A20. arXiv math.GN. Level 3: graduate.

**Definition.** A filter is a family of subsets closed under supersets and finite intersections that contains the whole space but not the empty set. An ultrafilter is a filter maximal under inclusion. A filter is Cauchy if, for every closeness relation, it contains a set whose points are pairwise close. One definition of total boundedness requires every ultrafilter to be Cauchy.

**Problem.** A uniform space is compact if and only if it is complete and totally bounded.

**How the definition helps.** The ultrafilter definition reduces compactness in a complete space to convergence of Cauchy filters. A space is compact if and only if every ultrafilter converges. With the finite small-set cover definition, the extra step is that an ultrafilter must contain one member of every finite cover (our own). Conversely, compactness gives every filter a cluster point, and a Cauchy filter converges to any of its cluster points (our own).

**Wikipedia:** [Totally bounded space](https://en.wikipedia.org/wiki/Totally_bounded_space). It says: “Every ultrafilter on S is a Cauchy filter.”

**Sources:** none listed. No primary source with a working link was found.

### Closeness under ultrametric pseudometrics is an equivalence relation at every scale

**Remember:** Two steps shorter than a threshold give a direct step shorter than it.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54E35. arXiv math.GN, math.MG. Level 3: graduate.

**Definition.** An ultrametric replaces the sum in the triangle inequality by the maximum of the two distances. An ultrametric pseudometric can also give distance zero to distinct points. A uniformity records which pairs count as close at each chosen scale.

**Problem.** A family of ultrametric pseudometrics generates a uniformity with a basis of equivalence relations. Conversely, every uniformity with such a basis comes from a family of ultrametric pseudometrics.

**How the definition helps.** The maximum rule turns the triangle inequality into transitivity of closeness, in our own explanation. Symmetry and reflexivity come from the usual distance laws. The maximum of two ultrametric pseudometrics is again one, so finite intersections of basis sets stay equivalence relations. For the converse, our own proof gives distance zero inside each equivalence class and distance one across classes.

**Paper or page:** [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1), [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1). It says: “If M is a system of non-Archimedean pseudo-metrics, then ℬ<sub>M</sub> consists of equivalence relations.”

**Sources:**

- [Daniel Windisch, Equivalent characterizations of non-Archimedean uniform spaces, arXiv:2111.09722v1 (2021)](https://arxiv.org/abs/2111.09722v1)

### Describing uniformities by pseudometrics gives every uniform space a separated quotient

**Remember:** If all distances agree that two points coincide, collapse them.

*True by definition. Confidence: medium.* MSC 54E15 (Uniform structures and generalizations), 54B15. arXiv math.GN. Level 3: graduate.

**Definition.** A uniform space has a notion of closeness at each scale. Describe it by a family of pseudometrics, distances that may be zero for distinct points. The usual definition uses entourages, sets of pairs of points that count as close at one scale. A uniform space is separated if any two distinct points are far apart at some scale.

**Problem.** Every uniform space has a separated quotient that is universal. Each uniformly continuous map into a separated uniform space factors uniquely through it.

**How the definition helps.** With pseudometrics, the quotient just identifies the points at distance zero. Identify two points when every pseudometric gives them distance zero. By the triangle inequality, each pseudometric passes to the quotient. A uniformly continuous map into a separated space must identify such points, so it factors through the quotient. The work goes into proving that the entourage definition always gives a family of pseudometrics. The nLab states that every uniform space embeds in a product of pseudometric spaces, and the rest is our own.

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “Every uniform space embeds uniformly in a product of pseudometric spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal entourages make continuous maps on compact Hausdorff domains uniformly continuous

**Remember:** Continuous maps pull diagonal neighbourhoods back to diagonal neighbourhoods.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30. arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity specifies which relations between points count as closeness relations, called entourages. A map is uniformly continuous if the preimage of each entourage under f × f is an entourage. On a compact Hausdorff space the entourages are exactly the neighbourhoods of the diagonal, the pairs (x, x).

**Problem.** Every continuous map from a compact Hausdorff space to a uniform space is uniformly continuous. Give the domain its unique uniformity that induces its topology.

**How the definition helps.** The diagonal description makes uniform continuity follow from taking the preimage of a neighbourhood. Each target entourage contains an open neighbourhood of the diagonal (our own). Its preimage under f × f is an open neighbourhood of the source diagonal, so it is an entourage (our own). The work is in proving that a compact Hausdorff space has exactly one compatible uniformity and that all diagonal neighbourhoods belong to it. In metric spaces the usual proof uses convergent subsequences to turn pointwise control into uniform control (our own).

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

*Rules out counterexamples.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity describes closeness by sets of pairs called entourages. A base is a family of entourages such that every entourage contains one from the family. A metric generates a uniformity when its positive distance bounds give such a base.

**Problem.** A Hausdorff uniformity comes from a metric exactly when it has a countable base of close-pair relations.

**How the definition helps.** A single metric supplies a countable base by taking distance bounds 1, ½, ⅓ and so on, and the uniform metrization theorem gives the converse (our own). On ℝ, the uniformity whose basic entourages bound the changes of finitely many continuous real functions gives the usual, metrizable topology (our own). But it has no countable base (our own). For any proposed sequence of basic entourages, one continuous function that moves from zero to one between suitable close pairs of points defeats every member (our own).

**Paper or page:** [Uniform Space whose Topology is Metrizable is not necessarily Metrizable](https://proofwiki.org/wiki/Uniform_Space_whose_Topology_is_Metrizable_is_not_necessarily_Metrizable). It says: “Then it is not necessarily the case that 𝒰 is itself a metrizable uniformity.”

**Sources:** none listed. No primary source with a working link was found.

### Product Cauchy tests are coordinatewise

**Remember:** Finitely many coordinate tests need only one common starting point.

*Rules out counterexamples.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** An entourage specifies which pairs of points count as close. A basic product entourage tests closeness in finitely many coordinates. A net has ordered indices such that every finite group of indices has a common upper bound. It is Cauchy if every entourage contains all pairs of terms beyond some index.

**Problem.** A net in a product of uniform spaces is Cauchy exactly when each coordinate net is Cauchy.

**How the definition helps.** Finitely many coordinate tests share a starting index beyond which all of them pass (our own). Testing one coordinate gives the converse (our own). For comparison, take the sequence of unit vectors in a countable product of real lines (our own). Each coordinate eventually vanishes, yet distinct vectors differ by one somewhere (our own). A box test requiring every coordinate difference to be below one therefore fails (our own).

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

**Definition.** A short map between metric spaces is a function f with d(f(a), f(b)) ≤ d(a, b) for all points a and b. So a short map never increases a distance. The category Met has Lawvere metric spaces as objects and short maps as morphisms. In a Lawvere metric space a distance may be infinite, need not be symmetric, and may be 0 between different points.

**Problem.** The category Met of Lawvere metric spaces and short maps is complete, so in particular it has arbitrary products. Its isomorphisms are exactly the isometries.

**How the definition helps.** Allowing infinite distances lets every product exist, and short maps make the isomorphisms exactly the isometries. The product of spaces Xᵢ has the distance supᵢ d(xᵢ, yᵢ), the largest distance in any coordinate. For ordinary metric spaces this supremum can be infinite, so arbitrary products do not exist in that category. One cost remains: the nLab notes that the topology of this product is not the product topology.

**nLab:** [short map](https://ncatlab.org/nlab/show/short+map), [metric space](https://ncatlab.org/nlab/show/metric+space). It says: “For example, Met<sub>ord</sub> fails to have arbitrary products ∏<sub>i ∈ I</sub> X<sub>i</sub>, on account of the finiteness axiom where the putative distance d((x<sub>i</sub>), (y<sub>i</sub>)) = sup<sub>i</sub> d(x<sub>i</sub>, y<sub>i</sub>) may not exist as a finite number.”

**Sources:**

- [F. William Lawvere, Metric spaces, generalized logic, and closed categories, Rendiconti del Seminario Matematico e Fisico di Milano 43 (1973) 135–166](https://doi.org/10.1007/BF02924844)

### Brouwer defined compact metric spaces as complete and totally bounded ones

**Remember:** If you cannot prove the theorem, make it the definition.

*True by definition. Confidence: medium.* MSC 54E45 (Compact (locally compact) metric spaces), 54D30, 03F60. arXiv math.GN, math.LO. Level 3: graduate.

**Definition.** In Brouwer's intuitionism, a metric space is compact when it is complete and totally bounded. Totally bounded means that for each ε &gt; 0, finitely many balls of radius ε cover the space. This is often written CTB, for 'complete and totally bounded'.

**Problem.** The metric Heine–Borel theorem says that a metric space is compact exactly when it is complete and totally bounded. Here 'compact' means that every open cover has a finite subcover.

**How the definition helps.** Brouwer made the metric theorem true by definition. Constructively, the open-cover form of the theorem is stronger than the fan theorem (a principle of intuitionism about finitely branching trees), and Brouwer could not prove it. So he defined 'compact' to mean complete and totally bounded. The price is that, constructively, such spaces need not have the open-cover property.

**nLab:** [Heine-Borel theorem](https://ncatlab.org/nlab/show/Heine-Borel+theorem). It says: “Brouwer could not prove them, leading him to define 'compact' (for a metric space) to mean complete and totally bounded.”

**Sources:**

- [H. Diener, Constructive Reverse Mathematics, Habilitationsschrift, Universität Siegen (2018), arXiv:1804.05495](https://arxiv.org/abs/1804.05495)

### Generalized ordered spaces are subspaces of ordered spaces, by an embedding theorem

**Remember:** A generalized ordered space is just a subspace of an ordered space.

*True by definition. Confidence: medium.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54C25. arXiv math.GN. Level 3: graduate.

**Definition.** A linearly ordered space is a totally ordered set with its order topology. A generalized ordered space can be defined as a subspace of one, with the induced order. It can also be defined from inside, as a Hausdorff space whose topology has a sub-basis of upper and lower sets of its total order.

**Problem.** The spaces of the inside kind are exactly the subspaces of linearly ordered spaces, with the induced order.

**How the definition helps.** With the subspace definition, facts such as 'a subspace of a generalized ordered space is one again' are true by definition, while the inside definition is easier to check for a given space. ProofWiki's theorem does the work that joins the two. It embeds a space of the inside kind into a linearly ordered space, as an order embedding and a topological embedding, with dense image. Our own example: the Sorgenfrey line is a generalized ordered space, but its topology is not the order topology of any total order.

**Paper or page:** [GO-Space Embeds Densely into Linearly Ordered Space](https://proofwiki.org/wiki/GO-Space_Embeds_Densely_into_Linearly_Ordered_Space). It says: “there is a linearly ordered space (X, ⪯′, τ′) and a mapping from Y to X which is a order embedding and a topological embedding.”

**Sources:**

- [ProofWiki, GO-Space Embeds Densely into Linearly Ordered Space](https://proofwiki.org/wiki/GO-Space_Embeds_Densely_into_Linearly_Ordered_Space)

### Metric continua with exactly two non-cut points are arcs

**Remember:** A continuum with only two non-cut points is a segment.

*Rules out counterexamples. Confidence: medium.* MSC 54F15 (Continua and generalizations), 54F50. arXiv math.GN. Level 3: graduate.

**Definition.** A cut point of a connected space is a point whose removal leaves a disconnected space. A continuum here is a nonempty compact connected metric space.

**Problem.** Every continuum with more than one point has at least two non-cut points. A metric continuum with exactly two non-cut points is homeomorphic to \[0, 1\].

**How the definition helps.** Compactness and metrizability rule out the spaces that copy the cut-point pattern of an interval without being one. The real line has no non-cut points, and \[0, 1) has one, so the theorem needs compactness. The extended long line, a very long interval with two end points, is compact, connected and Hausdorff with exactly two non-cut points, but it is not an arc (our own example). With these conditions, cut points order the space like a line, and separability makes the order a copy of \[0, 1\] (our own outline).

**Wikipedia:** [Cut point](https://en.wikipedia.org/wiki/Cut_point), [Continuum (topology)](https://en.wikipedia.org/wiki/Continuum_%28topology%29). It says: “Every continuum with exactly two noncut-points is homeomorphic to the unit interval.”

**Sources:**

- [Moore, R. L. (1920). Concerning simple continuous curves. Transactions of the American Mathematical Society 21, 333–347.](https://doi.org/10.1090/s0002-9947-1920-1501148-4)

### Covering dimension n gives an embedding in Euclidean space of dimension 2n+1

**Remember:** Dimension n fits inside ℝ to the power 2n+1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F45 (Dimension theory in general topology), 54C25. arXiv math.GN. Level 3: graduate.

**Definition.** An open cover has order n + 1 if some point lies in n + 1 of its sets but no point lies in more. A space has covering dimension at most n if every finite open cover has an open refinement of order at most n + 1.

**Problem.** Every compact metric space of covering dimension n embeds in ℝ²ⁿ⁺¹.

**How the definition helps.** Covering dimension works directly with covers of order n + 1, and the proof needs exactly these (our own outline). Such a cover gives an n-dimensional complex of simplices, its nerve, and a map of the space onto it, and in general position such a complex embeds in ℝ²ⁿ⁺¹ (our own). The bound is sharp for n = 1, since the complete graph on five vertices does not embed in the plane (our own example). The hard part is to make the maps for finer and finer covers converge to an embedding.

**Wikipedia:** [Inductive dimension](https://en.wikipedia.org/wiki/Inductive_dimension), [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension). It says: “The Menger–Nöbeling theorem (1932) states that if X is compact metric separable and of dimension n, then it embeds as a subspace of Euclidean space of dimension 2n + 1.”

**Sources:**

- [Nöbeling, G. (1931). Über eine n-dimensionale Universalmenge im R²ⁿ⁺¹. Mathematische Annalen 104, 71–80.](https://doi.org/10.1007/bf01457921)
- [Lebesgue, H. (1921). Sur les correspondances entre les points de deux espaces. Fundamenta Mathematicae 2, 256–285.](https://doi.org/10.4064/fm-2-1-256-285)

### Giving the empty set dimension −1 starts the inductive dimension

**Remember:** Empty is −1, so empty boundaries mean dimension 0.

*True by definition.* MSC 54F45 (Dimension theory in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The small inductive dimension ind X is defined by induction. ind(∅) = −1. Then ind X ≤ n if every point has arbitrarily small open neighbourhoods whose boundaries have dimension at most n − 1.

**Problem.** A nonempty space has inductive dimension 0 exactly when it has a base of sets that are both open and closed. For example, the rational numbers have dimension 0.

**How the definition helps.** With ind(∅) = −1, 'boundary of dimension less than 0' just means 'empty boundary', which means the set is both open and closed. So the zero-dimensional case is true by definition. The rationals have such a base: the rationals between two irrational numbers form an open and closed set. The hard work is to show that ℝⁿ has dimension exactly n, which needs Brouwer-type fixed point or covering arguments.

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

**How the definition helps.** With the projective definition, the theorem is the general fact that a retract of a projective object is projective. Compose a map from the retract with the retraction to get a map from the whole space. Lift that map along the surjection, then restrict the lift to the retract. The work goes into Gleason's theorem that the projective compact Hausdorff spaces are exactly the extremally disconnected ones. The nLab states Gleason's result, and the retract argument is our own.

**nLab:** [extremally disconnected topological space](https://ncatlab.org/nlab/show/extremally+disconnected+topological+space). It says: “Extremally disconnected topological spaces are precisely the projective objects in the category of compact Hausdorff topological spaces”

**Sources:**

- [Andrew M. Gleason, Projective topological spaces (1958)](https://doi.org/10.1215/ijm/1255454110)

### Scattered spaces force point masses

**Remember:** On a scattered compact space, no positive mass can stay diffuse.

*Rules out counterexamples. Confidence: medium.* MSC 54G12 (Scattered spaces), 28C15. arXiv math.GN. Level 3: graduate.

**Definition.** A compact Hausdorff space is scattered if every nonempty subset has a point isolated within that subset. Total disconnectedness only says that the connected components are single points.

**Problem.** Every finite Radon measure on a scattered compact Hausdorff space is a countable sum of point masses. A Radon measure approximates the mass of each Borel set from within by compact sets.

**How the definition helps.** In our own proof, an isolated point of the support must carry positive mass. The support consists of points whose every open neighborhood has positive mass. Its complement has measure zero because each compact subset there has a finite cover by open sets of measure zero. Remove the countably many points of positive mass and apply this argument to the remaining measure. If any mass remained, its support would have an isolated point, giving another point of positive mass. Our own counterexample is the totally disconnected Cantor set with its atomless fair-coin measure.

**nLab:** [scattered space](https://ncatlab.org/nlab/show/scattered+space). It says: “A topological space X is called scattered if X doesn't contain nonempty dense-in-itself subsets.”

**Sources:** none listed. No primary source with a working link was found.

### Closed subgroups give metrizable quotients

**Remember:** Closed cosets stay a positive distance from points outside them.

*Rules out counterexamples.* MSC 54H11 (Topological groups (topological aspects)), 54E35. arXiv math.GN. Level 3: graduate.

**Definition.** A subgroup H is closed if its complement is open. The quotient G/H consists of the left cosets gH. A set of cosets is open when its preimage in G is open.

**Problem.** The coset space of a closed subgroup of a first-countable topological group is metrizable. First countable means that each point has a countable neighborhood base.

**How the definition helps.** In our own proof, closedness keeps the distance between different cosets positive. After dividing out the closure of the identity, the Birkhoff–Kakutani theorem gives a compatible metric preserved by right translations. Then the distance between two cosets is the distance from any point of the first to the closed second coset, and its balls give the quotient topology. Our own counterexample is ℝ/ℚ, whose only open sets are the empty set and the whole space.

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

**Definition.** A pseudotopological (Choquet) space is a set with a convergence relation between filters and points. Each principal ultrafilter (the filter of all sets that contain a given point) converges to its point. A filter converges to x whenever every ultrafilter finer than it converges to x. Classically this is the same as a convergence relation on ultrafilters with only the centring axiom, the axiom that each principal ultrafilter converges to its point.

**Problem.** Pseudotopological spaces form a quasitopos that contains Top as a full reflective subcategory. So they form a locally cartesian closed category, with function spaces and fibrewise function spaces for all objects.

**How the definition helps.** Dropping one axiom of topology gives a category with all these function spaces. PsTop is the category you get when you drop the associativity axiom that makes a convergence come from a topology. Compactly generated spaces, by contrast, are cartesian closed but not locally cartesian closed. The cost is that PsTop is not locally presentable, and its objects are no longer topological spaces.

**nLab:** [pseudotopological space](https://ncatlab.org/nlab/show/pseudotopological+space), [nice category of spaces](https://ncatlab.org/nlab/show/nice+category+of+spaces). It says: “is a quasitopos and may be thought of as a nice category of spaces that includes Top as a full subcategory.”

**Sources:**

- [Mike Shulman, Pseudotopological spaces and the Stone-Čech compactification (notes, 2008)](https://home.sandiego.edu/~shulman/papers/pstonecech.pdf)
- [Gustave Choquet, Convergences, Annales de l'université de Grenoble 23 (1947–1948) 57–112](https://www.numdam.org/item/AUG_1947-1948__23__57_0/)

### Sequential nets give sequence arguments without countable choice

**Remember:** A sequential net is a sequence that has not chosen its terms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 03F60, 54D55. arXiv math.GN, math.LO. Level 4: research.

**Definition.** A sequential net in X is a multi-valued function from ℕ to X. Formally, it is a span ℕ ← A → X in which the map A → ℕ is surjective. Each n can have several values, and none of them is chosen.

**Problem.** Without weak countable choice, a Dedekind real need not be the limit of a Cauchy sequence of rationals. But every located Dedekind real is represented by a sequential Cauchy net of rationals.

**How the definition helps.** A sequential net keeps all candidate terms, so you never need to choose one term for each n. That choice is where countable choice was used. In our own words: for a real number x and each n, take as values all rationals within 1/n of x. With weak countable choice, every sequential net is equivalent to a sequence, so classically nothing changes.

**nLab:** [sequential net](https://ncatlab.org/nlab/show/sequential+net), [sequence](https://ncatlab.org/nlab/show/sequence). It says: “Without weak countable choice, many of the usual properties of metric spaces and other sequential spaces fail, but they continue to hold using sequential nets in the place of sequences.”

**Sources:** none listed. No primary source with a working link was found.

### Subsequential spaces form a quasitopos that keeps CW complexes intact

**Remember:** A space where only sequences converge, with no open sets required.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54B30, 18F60. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A subsequential space, or Kuratowski limit space, is a set with a relation 'the sequence (xₙ) converges to x'. The relation obeys three rules: constant sequences converge; subsequences of a convergent sequence converge to the same point; and (xₙ) converges to x whenever every subsequence has a further subsequence that converges to x. Continuous maps are maps that keep convergent sequences convergent.

**Problem.** Subsequential spaces form a locally presentable quasitopos, so a locally cartesian closed, complete and cocomplete category. It contains the sequential spaces, such as metrizable spaces and CW complexes, and it keeps the colimits that build CW complexes.

**How the definition helps.** Subsequential spaces hold the usual spaces of homotopy theory and also keep the colimits that build CW complexes. A quasitopos is a category with most of the good properties of a topos, among them local cartesian closure. So a CW complex is the same whether one builds it in Top or here. The bigger quasitopos of all convergence spaces contains all of Top, but it does not keep those colimits and is not locally presentable.

**nLab:** [subsequential space](https://ncatlab.org/nlab/show/subsequential+space). It says: “thus it makes no difference whether you carry out the construction of a CW complex in Top and then regard the result as a subsequential space, or carry out the construction in SeqPsTop to begin with.”

**Sources:**

- [Matías Menni, Alex Simpson, Topological and limit-space subcategories of countably-based equilogical spaces, Mathematical Structures in Computer Science 12 (2002) 739–770](https://doi.org/10.1017/S0960129502003699)

### Openness of a surjection matches openness of its map on closed sets

**Remember:** Vietoris neighborhoods are built from open sets, so open maps carry them.

*True by definition. Confidence: medium.* MSC 54B20 (Hyperspaces in general topology), 54C10. arXiv math.DS, math.GN. Level 4: research.

**Definition.** The hyperspace 2ˣ is the set of nonempty closed subsets of X. Its Vietoris topology has basic open sets given by finite lists of open sets U₁, …, Uₙ. Such a basic set holds the closed sets that lie in U₁ ∪ … ∪ Uₙ and meet each Uᵢ. A map f induces 2ᶠ, which sends A to f\[A\].

**Problem.** Let f be a continuous surjection between compact Hausdorff spaces. Then f is open exactly when 2ᶠ is open for the Vietoris topologies.

**How the definition helps.** Vietoris neighborhoods are tests of containment in and meeting of open sets, and an open map carries open sets to open sets. This explanation and the proof outline are our own. If f is open, the image of the basic set for U₁, …, Uₙ contains the basic set for f(U₁), …, f(Uₙ). To show this, cover a closed set B by images of closed pieces of the Uᵢ, then pull B back into those pieces. Conversely, apply 2ᶠ to singletons to get openness of f.

**Paper or page:** [Characterizations of open and semi-open maps of compact Hausdorff spaces by induced maps](https://arxiv.org/abs/2404.12727v2). It says: “Then f is open iff 2ᶠ: 2ˣ → 2ʸ is open.”

**Sources:**

- [Xiongping Dai, Yuxun Xie, Characterizations of open and semi-open maps of compact Hausdorff spaces by induced maps, arXiv:2404.12727 (2024)](https://arxiv.org/abs/2404.12727v2)

### Pointwise quotients yield Vietoris hit tests

**Remember:** Finite coordinate tests become hit tests when order is forgotten.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 4: research.

**Definition.** Give maps from ℕ to X the pointwise topology, which tests values at finitely many inputs. Identify maps when the closures of their ranges agree. The lower Vietoris topology tests whether a closed set meets a given open set.

**Problem.** Give sequences the pointwise topology and closed sets the lower Vietoris topology. Then the map sending a sequence to the closure of its range is a quotient map onto the nonempty closed sets with countable dense subsets.

**How the definition helps.** Forgetting the order turns finitely many coordinate requirements into an intersection of open hit tests (our own). A closed set passing those tests contains a point for each required coordinate (our own). Its remaining coordinates can list a dense sequence (our own). Thus the map takes basic open sets to open sets (our own). It is continuous because a hit test pulls back to a union of single-coordinate tests (our own). An open continuous surjection gives the quotient topology, where a set is open exactly when its preimage is open (our own).

**Paper or page:** [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2). It says: “the map $q:(\\mathcal{F},\\tau<sub>p</sub>)\\rightarrow (Cl<sub>Y</sub>(X),\\tau<sub>v</sub><sup>-</sup>)$ is a quotient map”

**Sources:**

- [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2)

### Patch topologies keep spectral limits compact

**Remember:** Complemented tests make the compatibility equations closed.

*True by definition.* MSC 54B35 (Spectra in general topology). arXiv math.GN. Level 4: research.

**Definition.** A spectral space is compact and has a base of compact open sets closed under finite intersections. Each nonempty closed set that cannot split into two smaller closed sets must also be the closure of exactly one point. A spectral map is continuous and pulls compact open sets back to compact open sets. The patch topology is generated by compact open sets and their complements.

**Problem.** Any inverse limit of spectral spaces and spectral maps is compact in its original limit topology.

**How the definition helps.** The patch topology turns the limit into a closed subset of a compact product (our own). Spectral maps remain continuous because their preimages preserve the generating patch tests (our own). A limit consists of tuples whose coordinates agree under each specified map (our own). Each agreement defines a closed set because the target patch space is Hausdorff (our own). Their intersection stays compact when we return to the coarser original topology (our own). The main theorem used here makes each patch space compact Hausdorff (our own).

**Paper or page:** [Lemma 5.24.1.](https://stacks.math.columbia.edu/tag/0A2V). It says: “The space X = lim Xᵢ is quasi-compact.”

**Sources:**

- [The Stacks Project, Lemma 5.24.1](https://stacks.math.columbia.edu/tag/0A2V)

### Spectral maps preserve patch continuity

**Remember:** Preserve compact opens and their complements come along.

*Rules out counterexamples.* MSC 54B35 (Spectra in general topology). arXiv math.GN. Level 4: research.

**Definition.** A spectral space is compact and has a base of compact open sets closed under finite intersections. Each nonempty closed set that cannot split into two smaller closed sets must also be the closure of exactly one point. A spectral map is continuous and pulls compact open sets back to compact open sets. The patch topology is generated by compact open sets and their complements.

**Problem.** A continuous map between spectral spaces is patch-continuous exactly when it is spectral.

**How the definition helps.** A spectral map pulls back both kinds of generating patch sets to sets of the same kind (our own). Conversely, patch continuity makes each preimage of a compact open set closed in the compact patch space (our own). This preimage stays compact in the original topology and is open by original continuity (our own). Take the one-point compactification of the discrete natural numbers (our own). Map the natural numbers to a and infinity to b in the two-point space whose only proper nonempty open set is {a} (our own). This map is continuous, yet the preimage of {a} is open and fails compactness (our own).

**Paper or page:** [Lemma 5.23.4.](https://stacks.math.columbia.edu/tag/0G1J). It says: “Then f is spectral if and only if f is continuous in the constructible topology.”

**Sources:**

- [The Stacks Project, Lemma 5.23.4](https://stacks.math.columbia.edu/tag/0G1J)

### A weaker filter condition shows core-compact well-filtered spaces are sober

**Remember:** Test the filter condition on open sets, not on compact sets.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 06B35. arXiv math.GN. Level 4: research.

**Definition.** An open set U lies well inside an open set V if every directed open cover of V has a member containing U. A cover is directed if any two of its members lie in a third member. A family of open sets is filtered if any two members have a third member that lies well inside both. The space is open well-filtered if, whenever such a family has its intersection inside an open set W, some member already lies inside W.

**Problem.** Every core-compact open well-filtered space is sober. Core-compact means every open neighborhood of a point contains a smaller open neighborhood that lies well inside it. Sober means every nonempty closed set that is not a union of two smaller closed sets is the closure of exactly one point.

**How the definition helps.** By our own reading, the open-set condition is easy to use because core-compactness supplies exactly the well-inside open neighborhoods that the condition talks about. The paper proves that every well-filtered space is open well-filtered. So it answers at once the question of Jia and Jung whether every core-compact well-filtered space is sober. The main work is still to find, for each such closed set, the point whose closure it is.

**Paper or page:** [On open well-filtered spaces](https://arxiv.org/abs/2001.07397v4). It says: “Every core-compact open well-filtered space is sober.”

**Sources:**

- [Chong Shen, Xiaoyong Xi, Xiaoquan Xu, Dongsheng Zhao, On open well-filtered spaces, Logical Methods in Computer Science 16(4) (2020); arXiv:2001.07397](https://arxiv.org/abs/2001.07397v4)

### Separation axioms stated as lifting properties are stable under colimits

**Remember:** A separation axiom says: you lift against its simplest counterexample.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 54D15, 18A32. arXiv math.GN, math.CT. Level 4: research.

**Definition.** A map i has the left lifting property against a map p if every commutative square from i to p has a diagonal filler. Most separation axioms can be stated as a lifting property of the map ∅ → X (or of a map into X) against a fixed map of finite topological spaces. That fixed map is the simplest counterexample to the axiom. So the axiom says that X has no copy of the counterexample.

**Problem.** Any class of maps defined by a left lifting property is closed under pushouts, transfinite composition and retracts. So a transfinite composition of closed inclusions of hereditarily normal spaces is hereditarily normal.

**How the definition helps.** Classes defined by a left lifting property are closed under such constructions for formal reasons, by a diagram argument. A closed inclusion into a hereditarily normal space has the same left lifting property as ∅ → X, so the colimit statement follows at once. The hard part moves to checking that each axiom is equivalent to its lifting form. The method does not work for plain normality, because closed inclusions into normal spaces do not have the lifting property that defines normality.

**nLab:** [separation axioms in terms of lifting properties](https://ncatlab.org/nlab/show/separation+axioms+in+terms+of+lifting+properties). It says: “It is easy to check that a closed inclusion into a heridarily normal space has the same lifting property. As left lifting property is stable under colimits”

**Sources:**

- [M. Gavrilovich, Point-set topology as diagram chasing computations: Lifting property as negation, The De Morgan Gazette 5(4) (2014), arXiv:1408.6710](https://arxiv.org/abs/1408.6710)

### Metric compact Hausdorff spaces form a better-behaved category than compact metric spaces

**Remember:** Let the topology differ from the metric topology, and the category behaves.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54D30 (Compactness), 18F60. arXiv math.CT, math.GN. Level 4: research.

**Definition.** A metric compact Hausdorff space is a metric space with a compact Hausdorff topology that is compatible with the metric. The topology need not be the one that the metric induces. The notion is a metric counterpart of Nachbin's compact ordered spaces.

**Problem.** For separated metric compact Hausdorff spaces, the regular monomorphisms are the embeddings and the epimorphisms are the surjective maps. The opposite of the category of metric compact Hausdorff spaces is Barr-exact.

**How the definition helps.** The topology no longer has to come from the metric, and this freedom gives the better-behaved category that the abstract describes (our own reading). A space is separated when distinct points never have distance zero in both directions. Quotients of an object X are described by kernel metrics, the continuous metrics below the metric of X. Compact metric spaces are the special case where the topology is the induced one (our own remark).

**Paper or page:** [Barr-coexactness for metric compact Hausdorff spaces](https://arxiv.org/abs/2408.07039). It says: “These spaces maintain many important features of compact metric spaces, and, notably, the resulting category is much better behaved.”

**Sources:**

- [Marco Abbadini and Dirk Hofmann, Barr-coexactness for metric compact Hausdorff spaces, arXiv:2408.07039 (2024)](https://arxiv.org/abs/2408.07039)

### Slow oscillation controls Higson extensions

**Remember:** Far away, fixed-size balls must look almost constant.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 4: research.

**Definition.** A metric space is proper if closed bounded sets are compact. A map oscillates slowly if its image on every fixed-radius ball has diameter tending to zero as the center goes to infinity. In the coordinate construction, use every continuous slowly oscillating function into \[0, 1\] as a coordinate. The closure of the resulting image in the product of intervals is the Higson compactification.

**Problem.** A continuous map from a proper metric space into a compact metric space extends over the Higson compactification exactly when it is slowly oscillating. For a map, measure variation by the diameter of the image.

**How the definition helps.** Coordinates make extension automatic for each continuous slowly oscillating function into \[0, 1\] (our own). Embed the compact metric target in a product of intervals; each coordinate of a slowly oscillating map then oscillates slowly, and the extended coordinates land in the closed target image (our own). Conversely, compactness makes each target tolerance depend on finitely many coordinate tolerances (our own). Slow oscillation in those coordinates gives slow oscillation of the original map (our own).

**Paper or page:** [Embedding of Higson compactification into the product of adelic solenoids](https://arxiv.org/abs/2205.03698v1). It says: “a continuous map f: X → C to a compact metric space C extends continuously to the Higson corona if and only if f is slowly oscillating.”

**Sources:**

- [Embedding of Higson compactification into the product of adelic solenoids](https://arxiv.org/abs/2205.03698v1)

### Closed graphs preserve realcompact inverse images

**Remember:** Closed product embeddings turn inverse images into closed graphs.

*True by definition.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 4: research.

**Definition.** A realcompact space is one that embeds as a closed subset of a product of real lines. An equivalent test uses maximal families of zero sets of continuous real functions.

**Problem.** Let f map a realcompact space X continuously into a Hausdorff space Y. If B is a realcompact subspace of Y, then f⁻¹\[B\] is realcompact.

**How the definition helps.** Closed product embeddings reduce the claim to finding a closed copy of the inverse image (our own). In X × B, take all pairs (x, b) with f(x) = b (our own). They form a closed set because the diagonal of Y × Y is closed (our own). Projection identifies this set with the inverse image, and X × B embeds closed in a product of real lines (our own). Hewitt’s theorem connects this embedding definition with the zero-set test (our own).

**Paper or page:** [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1). It says: “the subspace f⁻¹\[B\] of X is E-compact.”

**Sources:**

- [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1)

### Uniform regularity gives constructive uniform spaces regularity and apartness

**Remember:** Any two points are either close at one scale or apart at a finer one.

*Rules out counterexamples. Confidence: medium.* MSC 54E15 (Uniform structures and generalizations), 03F65. arXiv math.GN, math.LO. Level 4: research.

**Definition.** An entourage of a uniform space is a set of pairs of points that counts as 'close' at some scale. A uniform space X is uniformly regular if for every entourage U there is an entourage V with this property: each pair of points x, y is either U-close or not V-close. With excluded middle you can take V = U, so classically every uniform space is uniformly regular.

**Problem.** Constructively, a uniformly regular uniform space is a regular space, and its inequality relation is an apartness relation. It can be described equally by its entourages or by their complements.

**How the definition helps.** Uniform regularity excludes the uniform spaces that make these statements fail constructively. A discrete uniform space is regular only if its set has decidable equality, so 'every uniform space is regular' is equivalent to excluded middle. Metric spaces, compact regular spaces and regular topological groups are uniformly regular. It is unknown whether a regular uniform space can fail to be uniformly regular.

**nLab:** [uniformly regular space](https://ncatlab.org/nlab/show/uniformly+regular+space). It says: “The notion of uniformly regular uniform space is an intermediate notion in between regularity and complete regularity for uniform spaces, which is frequently useful in the constructive theory of uniform spaces”

**Sources:** none listed. No primary source with a working link was found.

### In Hilbert's projective metric, consensus is convergence to the all-ones ray

**Remember:** When every ratio agrees, the vectors point along the same ray.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E35 (Metric spaces, metrizability), 46B40, 93D50. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** For vectors x and y with positive coordinates, Hilbert's projective metric is d(x, y) = log( max xᵢ/yᵢ ÷ min xᵢ/yᵢ ). It is 0 exactly when x is a positive multiple of y.

**Problem.** Let 𝒦 be a proper cone inside the open positive orthant, together with 0. A system reaches consensus on 𝒦, meaning all coordinates become equal, exactly when d(x(t), 𝟙) tends to 0 with a uniform decay bound. For exponential consensus, the bound decays exponentially in t.

**How the definition helps.** The metric treats every vector with equal coordinates as the same point 𝟙, so consensus becomes convergence to one point. The proof then does not need to track the common value that the agents reach, by our own account. The paper still has to prove that the changing interactions contract this metric.

**Paper or page:** [Consensus of A Class of Nonlinear Systems with Varying Topology: A Hilbert Metric Approach](https://arxiv.org/abs/2505.10795v1). It says: “Then a system achieves asymptotic (resp. exponential) consensus on 𝒦 if and only if there exists class 𝒦ℒ function (resp. positive constants K,λ) such that d(x(t),𝟙) ≤ β(d(x(0),𝟙),t)”

**Sources:**

- [Dongjun Wu, Consensus of A Class of Nonlinear Systems with Varying Topology: A Hilbert Metric Approach, arXiv:2505.10795v1 (2025)](https://arxiv.org/abs/2505.10795v1)

### The upper topology is the coarsest making a preorder lower continuous

**Remember:** Generate the topology from exactly the open sets that continuity demands.

*True by definition. Confidence: medium.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54H12, 91B08. arXiv econ.TH, math.GN. Level 4: research.

**Definition.** A preorder ≾ is a reflexive and transitive relation. For each point x, let ↓x be the set of points y with y ≾ x. The upper topology is the smallest topology in which the complement of every ↓x is open. The preorder is lower continuous for a topology if every ↓x is closed.

**Problem.** A preorder is lower continuous for a topology τ exactly when τ is finer than its upper topology. For full continuity, τ must contain both the upper topology and the matching lower topology.

**How the definition helps.** The upper topology is generated by exactly the sets that lower continuity needs to be open, so the theorem is immediate. Any topology in which those sets are open contains the topology they generate. The paper uses this to turn impossibility theorems for continuous welfare orders on infinite utility streams into possibility results. Our own note is that we read the paper's upper topology and lower continuity in this standard way.

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

**Remember:** Palais proper: only a relatively compact set of group elements moves U to meet V.

*Rules out counterexamples. Confidence: medium.* MSC 54H15 (Transformation groups and semigroups (topological aspects)), 57S20, 55R10. arXiv math.GN, math.GT. Level 4: research.

**Definition.** An action of a Lie group G on a space X is Palais proper when each point x has a neighbourhood U with the following property. Each point y near x has a neighbourhood V such that the set of g in G for which g·U meets V has compact closure. On locally compact Hausdorff spaces this agrees with the usual notions of a proper action.

**Problem.** Palais's slice theorem: for a Palais proper action of a Lie group G on a completely regular space, every point x has a slice S. That is, with H the stabilizer of x, the space G ×ₕ S is homeomorphic to an open G-invariant neighbourhood of x.

**How the definition helps.** Palais made the definition of a proper action stronger so that the slice theorem still holds without local compactness. For a proper action of a Lie group on a locally compact Hausdorff space, slices exist through every point. Without local compactness, the usual conditions for properness are no longer equivalent. The nLab names no specific counterexample that the stronger condition excludes.

**nLab:** [slice theorem](https://ncatlab.org/nlab/show/slice+theorem), [proper action](https://ncatlab.org/nlab/show/proper+action). It says: “in which case the definition of "proper action" needs to be strengthened”

**Sources:**

- [Richard S. Palais, On the Existence of Slices for Actions of Non-Compact Lie Groups, Annals of Mathematics 73 (1961) 295–323](https://doi.org/10.2307/1970335)
