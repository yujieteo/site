### Interiors commute with finite intersections

**Remember:** Intersect finitely many largest open parts to get the largest open part.

*True by definition.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)). arXiv math.GN. Level 1: early undergraduate.

**Definition.** The interior of a set is its largest open subset: it is open, it lies in the set, and it contains every open subset of the set.

**Problem.** The interior of a finite intersection is the intersection of the interiors.

**How the definition helps.** A finite intersection of open sets is open, so the intersection of the interiors is an open subset of the intersection and lies in its interior (our own). Conversely, the interior of the intersection is an open subset of each set, so it lies in each interior (our own).

**Paper or page:** [Interior of Finite Intersection equals Intersection of Interiors](https://proofwiki.org/wiki/Interior_of_Finite_Intersection_equals_Intersection_of_Interiors). It says: “(⋂ᵢ₌₁ⁿ Hᵢ)° = ⋂ᵢ₌₁ⁿ Hᵢ°”

**Sources:** none listed. No primary source with a working link was found.

### Subspace topology preserves continuity into subsets

**Remember:** Open sets of the subset are big open sets cut down.

*True by definition.* MSC 54B05 (Subspaces in general topology). arXiv math.GN. Level 1: early undergraduate.

**Definition.** The subspace topology on a subset S has as its open sets exactly the intersections U ∩ S, where U is open in the larger space.

**Problem.** A map into a subspace is continuous exactly when the same map into the larger space is continuous.

**How the definition helps.** For a map into S, the preimage of U ∩ S equals the preimage of U, so the two continuity tests check the same sets (our own proof).

**nLab:** [subspace topology](https://ncatlab.org/nlab/show/subspace+topology). It says: “is continuous precisely if the composition i ∘ f is continuous as a function to X”

**Sources:** none listed. No primary source with a working link was found.

### Finite closed pieces preserve continuity

**Remember:** Finitely many closed preimages join into one closed preimage.

*True by definition.* MSC 54C05 (Continuous maps), 54E35. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map is continuous exactly when the preimage of every closed set is closed; in metric spaces this agrees with the distance definition.

**Problem.** Let finitely many closed sets cover a metric space. A map to another metric space is continuous if its restriction to each set is continuous.

**How the definition helps.** The full preimage of each closed set is the union of its preimages on the pieces (our own). Each such preimage is closed in its piece and hence in the whole space, since the piece is closed (our own). A finite union of closed sets is closed (our own).

**Paper or page:** [Pasting Lemma/Finite Union of Closed Sets](https://proofwiki.org/wiki/Pasting_Lemma/Finite_Union_of_Closed_Sets). It says: “Let I be a finite indexing set.”

**Sources:** none listed. No primary source with a working link was found.

### Open covers let continuity glue

**Remember:** Open in an open piece means open in the whole space.

*True by definition.* MSC 54C05 (Continuous maps). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map is continuous if the preimage of every open set is open; on a subset S, open means S intersected with an open set of the whole space.

**Problem.** A map that is continuous on each member of an open cover is continuous on the whole space.

**How the definition helps.** Each open target set has a preimage that is open on every piece (our own). Each piece is itself open, so those preimages are open in the domain (our own). Their union is the full preimage (our own).

**Paper or page:** [Pasting Lemma/Union of Open Sets](https://proofwiki.org/wiki/Pasting_Lemma/Union_of_Open_Sets). It says: “that is, f ↾ C is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Open preimages make continuity compose

**Remember:** Pull an open set back one map at a time.

*True by definition.* MSC 54C05 (Continuous maps). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map is continuous if it pulls each open set back to an open set.

**Problem.** The composite of two continuous maps is continuous.

**How the definition helps.** Pull an open set back through the second map, then through the first, and each step keeps it open (our own proof). The preimage under the composite is exactly this two-step pullback.

**Paper or page:** [Composite of Continuous Mappings is Continuous](https://proofwiki.org/wiki/Composite_of_Continuous_Mappings_is_Continuous). It says: “Then the composite mapping g ∘ f: T₁ → T₃ is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness keeps nested intersections nonempty

**Remember:** Closed sets that meet finitely often meet altogether.

*True by definition.* MSC 54D30 (Compactness). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A space is compact if every family of closed sets in which each finite selection has a common point has a common point overall. Taking complements turns this into the open-cover test.

**Problem.** In a compact space, every nested sequence of nonempty closed sets has a common point.

**How the definition helps.** In a nested sequence, each finite selection contains its smallest set, which is nonempty and lies in all the others (our own proof). So the closed-set test gives a point common to the whole sequence.

**Paper or page:** [Intersection of Closed Subsets satisfying Finite Intersection Property in Compact Space](https://proofwiki.org/wiki/Intersection_of_Closed_Subsets_satisfying_Finite_Intersection_Property_in_Compact_Space). It says: “Suppose that 𝓕 satisfies the finite intersection property. That is, the intersection of every finite subset is non-empty. Then the intersection of 𝓕 is non-empty.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness survives continuous images

**Remember:** Pull back the cover and keep the finite part.

*True by definition.* MSC 54D30 (Compactness). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A space is compact if every open cover of it has a finite subcover.

**Problem.** A continuous image of a compact space is compact.

**How the definition helps.** A continuous map pulls an open cover of the image back to an open cover of the domain (our own proof). Compactness keeps finitely many of these preimages, and the matching original sets cover the image.

**Paper or page:** [Continuous Image of Compact Space is Compact](https://proofwiki.org/wiki/Continuous_Image_of_Compact_Space_is_Compact). It says: “If T₁ is compact then so is its image f\[T₁\] under f.”

**Sources:** none listed. No primary source with a working link was found.

### Adding coordinate distances makes distance itself Lipschitz

**Remember:** Distance changes by at most the sum of both endpoint moves.

*True by definition. Confidence: medium.* MSC 54E35 (Metric spaces, metrizability), 54E40. arXiv math.GN. Level 1: early undergraduate.

**Definition.** The sum metric on pairs of points adds the two coordinate distances: the distance from (x, y) to (x′, y′) is d(x, x′) + d(y, y′).

**Problem.** The distance function on pairs of points is 1-Lipschitz for the sum metric. This means that its change is at most the sum distance between the pairs.

**How the definition helps.** The triangle inequality bounds the change in distance by the sum of the two endpoint moves, which is the sum metric (our own). Move one endpoint, then the other, and swap the roles to bound the absolute change (our own).

**Paper or page:** [Distance Function of Metric Space is Continuous](https://proofwiki.org/wiki/Distance_Function_of_Metric_Space_is_Continuous). It says: “Then the distance function d: A × A → ℝ is a continuous mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Distance neighborhoods express every closed set as a countable intersection

**Remember:** Shrinking neighborhoods squeeze down to the closure, which is the set.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** The radius-r neighborhood of a nonempty set A consists of the points whose distance to A, the infimum of their distances to points of A, is less than r. A point lies in all of these neighborhoods exactly when its distance to A is zero, that is, when it lies in the closure of A (our own).

**Problem.** Every nonempty closed set in a metric space is the intersection of its neighborhoods of radii 1, 1/2, 1/3, and so on. In particular, every closed set is a countable intersection of open sets.

**How the definition helps.** Intersecting the radius-1/n neighborhoods leaves the closure of A, which is A when A is closed (our own). The triangle inequality makes distance to A continuous, so each neighborhood is open (our own). For the empty set, intersect copies of the empty set (our own).

**Paper or page:** [Closed Set in Metric Space is G-Delta](https://proofwiki.org/wiki/Closed_Set_in_Metric_Space_is_G-Delta). It says: “Then F is a Gδ set of X.”

**Sources:** none listed. No primary source with a working link was found.

### Distance to a set needs no nearest point

**Remember:** Take the infimum over all points, even when none is nearest.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** The distance from a point to a nonempty set is the infimum of its distances to the points of the set; no nearest point is needed.

**Problem.** Distance to a nonempty subset of a metric space changes by at most the distance moved.

**How the definition helps.** For each point y of A, d(x, y) ≤ d(x, x′) + d(x′, y), so taking the infimum over y gives d(x, A) ≤ d(x, x′) + d(x′, A) (our own). Swapping x and x′ gives the other bound (our own).

**Paper or page:** [Triangle Inequality on Distance from Point to Subset](https://proofwiki.org/wiki/Triangle_Inequality_on_Distance_from_Point_to_Subset). It says: “∀ x, y ∈ A: d(x, H) ≤ d(x, y) + d(y, H)”

**Sources:** none listed. No primary source with a working link was found.

### Distance zero only for equal points makes every metric space Hausdorff

**Remember:** Points at distance r &gt; 0 sit in disjoint balls of radius r/2.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability), 54D10, 54A20. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric gives every pair of points a nonnegative, symmetric distance that obeys the triangle inequality and is zero only for equal points. So distinct points have a positive distance r, which leaves room for disjoint balls of radius r/2 (our own).

**Problem.** Every metrizable space, one whose topology comes from a metric, is Hausdorff: distinct points have disjoint open neighborhoods.

**How the definition helps.** Distinct points are at distance r &gt; 0, and the triangle inequality makes their radius-r/2 balls disjoint (our own). A pseudometric may put distinct points at distance zero, and then no ball separates them (our own).

**Paper or page:** [Metrizable Space is Hausdorff](https://proofwiki.org/wiki/Metrizable_Space_is_Hausdorff), [Partition Space is Pseudometrizable](https://proofwiki.org/wiki/Partition_Space_is_Pseudometrizable), [Partition Topology is not Hausdorff](https://proofwiki.org/wiki/Partition_Topology_is_not_Hausdorff). It says: “Let T be a metrizable topological space. Then T is a T₂ (Hausdorff) space.”

**Sources:**

- [ProofWiki, Metrizable Space is Hausdorff](https://proofwiki.org/wiki/Metrizable_Space_is_Hausdorff)
- [ProofWiki, Partition Space is Pseudometrizable](https://proofwiki.org/wiki/Partition_Space_is_Pseudometrizable)
- [ProofWiki, Partition Topology is not Hausdorff](https://proofwiki.org/wiki/Partition_Topology_is_not_Hausdorff)

### Maximum distance gives coordinatewise convergence

**Remember:** All coordinates are close when the largest distance is small.

*True by definition. Confidence: medium.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** On a finite product of metric spaces, the maximum metric takes the largest of the coordinate distances. So it is small exactly when every coordinate distance is small (our own).

**Problem.** In a finite product with the maximum metric, convergence is equivalent to convergence in every coordinate (our own).

**How the definition helps.** If each coordinate converges, take the largest of the finitely many indices needed, and from then on the maximum is small (our own). Conversely, the maximum bounds each coordinate distance (our own).

**Paper or page:** [Chebyshev Distance is Metric](https://proofwiki.org/wiki/Chebyshev_Distance_is_Metric). It says: “Then d∞ is a metric.”

**Sources:** none listed. No primary source with a working link was found.

### Restricted distances give the subspace open sets

**Remember:** A ball in a subset is an original ball cut down to that subset.

*True by definition. Confidence: medium.* MSC 54E35 (Metric spaces, metrizability), 54B05. arXiv math.GN. Level 1: early undergraduate.

**Definition.** The restricted metric on a subset A keeps the original distances, so a ball in A is an original ball centered in A, cut down to A (our own). A set in A is open for this metric if it is a union of such balls.

**Problem.** The open sets in the restricted metric on A are exactly the intersections of A with open sets of the original space.

**How the definition helps.** Each ball in A is A intersected with an original ball, so a union of them is A intersected with an open set (our own). Conversely, each point of A in an original open set has an original ball inside it, and that ball cut down to A is a ball in A (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “An open set is a set which is a neighborhood of all its points.”

**Paper or page:** [Subspace of Metric Space is Metric Space](https://proofwiki.org/wiki/Subspace_of_Metric_Space_is_Metric_Space). It says: “is a metric on H.”

**Sources:** none listed. No primary source with a working link was found.

### Small diameter covers make total boundedness pass to subsets

**Remember:** Cut the cover down to a subset without enlarging any piece.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric space is totally bounded if, for every ε &gt; 0, finitely many sets of diameter less than ε cover it, where the diameter of a set is the supremum of distances within it.

**Problem.** Every subset of a totally bounded metric space is totally bounded for the restricted metric.

**How the definition helps.** Intersect each covering set with the subset; the pieces still cover the subset, and their diameters do not grow (our own). Sets instead of balls avoid the need for centers inside the subset (our own).

**nLab:** [totally bounded space](https://ncatlab.org/nlab/show/totally+bounded+space). It says: “there is a finite open cover 𝒞 of X such that every set in 𝒞 has diameter less than ε.”

**Paper or page:** [Subset of Totally Bounded Metric Space is Totally Bounded](https://proofwiki.org/wiki/Subset_of_Totally_Bounded_Metric_Space_is_Totally_Bounded). It says: “Then A is totally bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Truncating distances keeps both the topology and completeness

**Remember:** Cap large distances and keep all small distance tests.

*True by definition.* MSC 54E35 (Metric spaces, metrizability), 54E50. arXiv math.GN. Level 1: early undergraduate.

**Definition.** The truncated metric min(1, d(x, y)) caps every distance at one and leaves smaller distances unchanged.

**Problem.** The truncated metric has the same open sets and preserves completeness.

**How the definition helps.** Below radius one the two metrics have the same balls, and open sets, limits and Cauchy sequences depend only on small balls (our own). The triangle inequality survives because capping a sum at one gives at most the sum of the capped terms (our own).

**Paper or page:** [Standard Bounded Metric is Metric/Topological Equivalence](https://proofwiki.org/wiki/Standard_Bounded_Metric_is_Metric/Topological_Equivalence). It says: “d̄ is topologically equivalent to d.”

**Sources:** none listed. No primary source with a working link was found.

### Unions of balls make arbitrary unions open

**Remember:** A union of unions of balls is still a union of balls.

*True by definition.* MSC 54E35 (Metric spaces, metrizability). arXiv math.GN. Level 1: early undergraduate.

**Definition.** In a metric space, an open set is any union of open balls, where the open ball of radius r about x is the set of points at distance less than r from x.

**Problem.** Every union of open sets in a metric space is open.

**How the definition helps.** A union of open sets is the union of all the balls that make up its members, so it is open (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “the open sets of M are exactly the unions of open balls.”

**Paper or page:** [Union of Open Sets of Metric Space is Open](https://proofwiki.org/wiki/Union_of_Open_Sets_of_Metric_Space_is_Open). It says: “The union of a set of open sets of M is open in M.”

**Sources:** none listed. No primary source with a working link was found.

### Zero distance only between equal points makes limits unique

**Remember:** Two limits are at distance zero, so they are the same point.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability), 54D10, 54A20. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric gives each pair of points a nonnegative symmetric distance that satisfies the triangle inequality and is zero only when the points are equal.

**Problem.** In a metric space, a sequence has at most one limit.

**How the definition helps.** If a sequence converges to x and y, then d(x,y) ≤ d(x,xₙ) + d(xₙ,y) tends to zero on the right (our own). Hence d(x,y) = 0 and x = y (our own). In a two-point pseudometric space with all distances zero, a constant sequence converges to both points (our own).

**Paper or page:** [Convergent Sequence in Metric Space has Unique Limit](https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit), [Pseudometric Space is Metric Space iff Kolmogorov](https://proofwiki.org/wiki/Pseudometric_Space_is_Metric_Space_iff_Kolmogorov). It says: “Let ⟨xₙ⟩ be a sequence in M. Then ⟨xₙ⟩ can have at most one limit in M.”

**Sources:**

- [ProofWiki, Convergent Sequence in Metric Space has Unique Limit](https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_has_Unique_Limit)
- [ProofWiki, Pseudometric Space is Metric Space iff Kolmogorov](https://proofwiki.org/wiki/Pseudometric_Space_is_Metric_Space_iff_Kolmogorov)

### Uniform continuity preserves Cauchy sequences

**Remember:** One δ works everywhere, so close inputs anywhere give close outputs.

*Rules out counterexamples.* MSC 54E40 (Special maps on metric spaces), 26A15. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A map f between metric spaces is uniformly continuous if one closeness bound works everywhere: for every ε &gt; 0 there is δ &gt; 0 such that d(x, y) &lt; δ implies d(f(x), f(y)) &lt; ε for all x, y.

**Problem.** A uniformly continuous map sends every Cauchy sequence to a Cauchy sequence.

**How the definition helps.** A Cauchy tail has all pairs within δ, so all their images are within ε (our own). Ordinary continuity is not enough: x ↦ 1/x on (0, 1\] sends the Cauchy sequence 1/n to the unbounded sequence n (our own).

**nLab:** [uniformly continuous map](https://ncatlab.org/nlab/show/uniformly+continuous+map). It says: “The concept of uniformly continuous map f is based on the same intuition but a different formalisation: first you pick how nearby you want the points to be, then you pick two points sufficiently nearby.”

**Wikipedia:** [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “In this setting, it is also true that uniformly continuous maps transform Cauchy sequences into Cauchy sequences.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness makes the distance infimum attainable

**Remember:** Compactness turns a sequence of nearly nearest points into a nearest point.

*Rules out counterexamples.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A subset of a metric space is sequentially compact if every sequence in it has a subsequence converging to a point of the subset; in metric spaces this is the same as compactness.

**Problem.** Every point has a nearest point in each nonempty compact subset of a metric space.

**How the definition helps.** Take points of the set whose distances to x approach the infimum; a subsequence converges in the set, and continuity of distance gives its limit exactly that distance (our own). In the open interval (0, 1), distances to zero approach zero without reaching it (our own).

**Paper or page:** [Distance from Point to Compact Set in Metric Space is Attained](https://proofwiki.org/wiki/Distance_from_Point_to_Compact_Set_in_Metric_Space_is_Attained). It says: “d(x, A) = d(x, α)”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy sequences test convergence without knowing the limit

**Remember:** Every sufficiently late pair is close, and completeness supplies the limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E50 (Complete metric spaces), 40A05. arXiv math.GN, math.CA. Level 1: early undergraduate.

**Definition.** A sequence is Cauchy if its terms eventually stay within any given ε of each other: for every ε &gt; 0 some N gives d(xₘ, xₙ) &lt; ε for all m, n ≥ N. A metric space is complete if every Cauchy sequence converges in it.

**Problem.** A normed space is complete exactly when every absolutely convergent series in it converges.

**How the definition helps.** Absolute convergence makes the partial sums Cauchy by the triangle inequality, so completeness gives a limit (our own). Conversely, a Cauchy sequence has a subsequence with successive gaps below 2⁻ᵏ, so the gaps form an absolutely convergent series and the subsequence converges (our own). A Cauchy sequence with a convergent subsequence converges to the same limit (our own).

**Wikipedia:** [Cauchy sequence](https://en.wikipedia.org/wiki/Cauchy_sequence), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “The utility of Cauchy sequences lies in the fact that in a complete metric space (one where all such sequences are known to converge to a limit), the criterion for convergence depends only on the terms of the sequence itself”

**Sources:** none listed. No primary source with a working link was found.

### Sequential closedness keeps subspaces complete

**Remember:** Closed subsets keep their sequence limits.

*True by definition.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A subset of a metric space is closed if it contains the limit of each of its sequences that converges in the whole space.

**Problem.** A subspace of a complete metric space is complete if and only if it is closed.

**How the definition helps.** In a complete space each Cauchy sequence in the subset converges, and closedness keeps that limit in the subset (our own). Conversely, a sequence in a complete subset that converges in the whole space is Cauchy, so it converges in the subset, and limits are unique (our own).

**Paper or page:** [Subspace of Complete Metric Space is Closed iff Complete](https://proofwiki.org/wiki/Subspace_of_Complete_Metric_Space_is_Closed_iff_Complete). It says: “Let (M, d) be a complete metric space.”

**Sources:** none listed. No primary source with a working link was found.

### The supremum metric is complete

**Remember:** One worst error bounds the error at every point.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 40A30. arXiv math.GN. Level 1: early undergraduate.

**Definition.** The supremum metric on bounded real functions on a nonempty set is the largest absolute difference sup \|f − g\|, so a small distance means a small error at every point at once.

**Problem.** Every Cauchy sequence for the supremum metric on bounded real functions converges in that metric to a bounded function.

**How the definition helps.** A Cauchy sequence for this metric is Cauchy at each point, so it has a pointwise limit because ℝ is complete (our own). Letting one index tend to infinity keeps each uniform bound \|fₘ − fₙ\| ≤ ε, which gives uniform convergence (our own). The limit lies within one unit of a bounded term, so it is bounded (our own).

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “every Cauchy sequence of functions converges uniformly.”

**Paper or page:** [Sequence of Functions is Uniformly Cauchy iff Uniformly Convergent](https://proofwiki.org/wiki/Sequence_of_Functions_is_Uniformly_Cauchy_iff_Uniformly_Convergent). It says: “Let ⟨fₙ⟩ be a sequence of real functions S → ℝ.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform gaps make discrete metric spaces complete

**Remember:** Below the common gap, two points must be the same.

*Rules out counterexamples.* MSC 54E50 (Complete metric spaces), 54E35. arXiv math.GN. Level 1: early undergraduate.

**Definition.** A metric space is uniformly discrete if one positive gap separates all pairs of different points: some r &gt; 0 has d(x, y) ≥ r whenever x ≠ y.

**Problem.** Every uniformly discrete metric space is complete, meaning that every Cauchy sequence converges in the space. A discrete space can fail this test.

**How the definition helps.** A Cauchy sequence eventually has all terms closer than r, so its terms are eventually equal and it converges (our own). The set {1, 1/2, 1/3, …} is discrete, but its sequence 1/n is Cauchy with no limit in the set (our own).

**Wikipedia:** [Discrete space](https://en.wikipedia.org/wiki/Discrete_space). It says: “The topology underlying a metric space can be discrete, without the metric being uniformly discrete”

**Sources:** none listed. No primary source with a working link was found.

### Uniform shrinking gives fixed points

**Remember:** One shrink factor controls every step.

*Rules out counterexamples.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 1: early undergraduate.

**Definition.** A contraction of a metric space shrinks all distances by one common factor q with 0 ≤ q &lt; 1: d(f(x), f(y)) ≤ q d(x, y) for all x, y.

**Problem.** Every contraction from a nonempty complete metric space to itself has exactly one fixed point.

**How the definition helps.** Successive steps shrink geometrically, so the iterates form a Cauchy sequence, and completeness and continuity make its limit a fixed point (our own). Two fixed points would satisfy d ≤ q d, so they coincide (our own). The map x ↦ x + 1/(x+1) on \[0, ∞) shrinks every distance but has no fixed point (our own).

**Paper or page:** [Banach Fixed-Point Theorem](https://proofwiki.org/wiki/Banach_Fixed-Point_Theorem). It says: “Then there exists a unique fixed point of f.”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly equivalent metrics preserve completeness

**Remember:** Uniformly equivalent metrics share their Cauchy sequences.

*Rules out counterexamples. Confidence: medium.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 1: early undergraduate.

**Definition.** Two metrics on a set are uniformly equivalent if the identity map is uniformly continuous in both directions. Uniformly continuous maps send Cauchy sequences to Cauchy sequences, so the two metrics have the same Cauchy sequences (our own).

**Problem.** If two metrics are uniformly equivalent, either both are complete or neither is complete.

**How the definition helps.** The metrics have the same Cauchy sequences and the same limits, so completeness passes both ways (our own). Topological equivalence is not enough: on ℝ, the usual distance and \|arctan x − arctan y\| give the same open sets (our own). The positive integers are Cauchy only for the second and have no limit there (our own).

**Wikipedia:** [Equivalence of metrics](https://en.wikipedia.org/wiki/Equivalence_of_metrics). It says: “or all uniformly continuous maps, obtaining uniform equivalence.”

**Sources:** none listed. No primary source with a working link was found.

### Regular open sets form a Boolean algebra where open sets do not

**Remember:** Fill in the cracks of open sets, and complements behave.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)), 06E10. arXiv math.GN, math.LO. Level 2: later undergraduate.

**Definition.** An open set U is regular open if it equals the interior of its closure. Equivalently, taking the interior of the complement twice gives back U (our own); for example, (0, 1) ∪ (1, 2) is not regular open, because this gives (0, 2).

**Problem.** The regular open sets of any space X form a complete Boolean algebra. In it, the complement of U is the interior of X ∖ U.

**How the definition helps.** Open sets form a complete Heyting algebra whose negation is the interior of the complement, and regular open sets are its double-negation fixed points (our own). Such fixed points always form a complete Boolean algebra, with joins the interior of the closure of the union (our own).

**Wikipedia:** [Regular open set](https://en.wikipedia.org/wiki/Regular_open_set). It says: “The collection of all regular open sets in X forms a complete Boolean algebra”

**Sources:** none listed. No primary source with a working link was found.

### The boundary obeys the Leibniz rule on closed sets

**Remember:** On closed sets, boundary is set minus interior, giving a product rule.

*Rules out counterexamples.* MSC 54A05 (Topological spaces and generalizations (closure spaces, etc.)), 54B10, 06D20. arXiv math.GN. Level 2: later undergraduate.

**Definition.** The boundary ∂S of a subset S is its closure minus its interior, so for a closed set it is the set minus its interior.

**Problem.** For closed subsets A and B, the boundary satisfies the Leibniz rule ∂(A × B) = (∂A × B) ∪ (A × ∂B). It has the same shape as the product rule for derivatives.

**How the definition helps.** For closed A and B, the product is closed with interior int A × int B, so its boundary is A × B minus that interior (our own). These are the points with at least one coordinate on its factor’s boundary (our own). For A = B = (0,1), the corner (0,0) lies in ∂(A × B) but in neither term (our own).

**nLab:** [boundary](https://ncatlab.org/nlab/show/boundary). It says: “Notice the conclusion must fail if A, B are not closed, since in this case (∂A × B) ∪ (A × ∂B) is not closed (it doesn't include ∂A × ∂B).”

**Sources:**

- [M. Zarycki, Quelque notions fondamentales de l'Analysis Situs au point de vue de l'Algèbre de la Logique, Fundamenta Mathematicae 9 (1927) 3–15](https://matwbn.icm.edu.pl/ksiazki/fm/fm9/fm912.pdf)

### A countable local base lets sequences detect closure

**Remember:** Pick one point from each shrinking neighborhood.

*Rules out counterexamples.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D70. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is first-countable if each point has a countable list of open neighborhoods such that every neighborhood of the point contains one of them; intersecting the first n of them makes the list shrink.

**Problem.** In a first-countable space, a point lies in the closure of a set exactly when some sequence from that set converges to it.

**How the definition helps.** Pick a point of the set in each shrinking neighborhood of a closure point, and the sequence eventually enters every neighborhood. Without first countability this fails (our own counterexample). In an uncountable space whose nonempty open sets omit only countably many points, x lies in the closure of the other points, yet removing the values of any sequence avoiding x leaves a neighborhood of x.

**Wikipedia:** [First-countable space](https://en.wikipedia.org/wiki/First-countable_space). It says: “every first-countable space is a Fréchet-Urysohn space”

**Sources:** none listed. No primary source with a working link was found.

### Bourbaki's limit of a function gives the chain rule without exceptions

**Remember:** Bourbaki does not puncture the neighbourhood, so f(c) has a vote.

*Rules out counterexamples.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54C05. arXiv math.GN, math.CA. Level 2: later undergraduate.

**Definition.** Let c lie in the closure of the domain D of f. Then f tends to L at c in Bourbaki’s sense if every neighborhood V of L contains f(U ∩ D) for some neighborhood U of c. Unlike the usual limit, U is not punctured, so f(c) must lie in every such V when c ∈ D (our own).

**Problem.** Suppose g tends to b at c and f tends to L at b in Bourbaki’s sense. Then their composite f ∘ g tends to L at c. At a domain point c, f is continuous exactly when f(c) is a Bourbaki limit there.

**How the definition helps.** Pull a neighborhood of L back first through the condition for f, then through that for g (our own). With L = f(c), the condition is the neighborhood test for continuity (our own). The punctured limit fails: with g ≡ 0, f(0) = 0 and f(u) = 1 elsewhere, f tends to 1 at zero, yet f ∘ g ≡ 0 (our own).

**nLab:** [limit of a function](https://ncatlab.org/nlab/show/limit+of+a+function). It says: “Using the Bourbaki definition, the limit of a composite function f ∘ g approaching c is equal to the limit of f approaching the limit of g approaching c, if the latter exists”

**Sources:** none listed. No primary source with a working link was found.

### Nets detect the Hausdorff property through unique limits

**Remember:** One limit for every net means Hausdorff; sequences cannot tell.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A net is a function on a directed set, a nonempty preordered set in which any two indices have a common upper bound. It converges to x if each neighborhood of x contains all values from some index onward.

**Problem.** A space is Hausdorff if and only if every convergent net in it has exactly one limit. With sequences in place of nets, only one direction holds.

**How the definition helps.** Two disjoint neighborhoods would each hold a tail, and a common upper bound of the two tail indices would put a value in both (our own). For inseparable points, index by pairs of their neighborhoods under reverse inclusion and pick a point in each intersection, giving a net that converges to both (our own). An uncountable space with the cocountable topology is not Hausdorff, yet its convergent sequences are eventually constant (our own).

**Wikipedia:** [Net (mathematics)](https://en.wikipedia.org/wiki/Net_%28mathematics%29), [Hausdorff space](https://en.wikipedia.org/wiki/Hausdorff_space). It says: “Thus the uniqueness of the limit is equivalent to the Hausdorff condition on the space, and indeed this may be taken as the definition.”

**Sources:**

- [Moore, E. H. and Smith, H. L. (1922). A General Theory of Limits. American Journal of Mathematics 44(2), 102–121.](https://doi.org/10.2307/2370388)
- [van Douwen, E. K. (1993). An anti-Hausdorff Fréchet space in which convergent sequences have unique limits. Topology and its Applications 51(2), 147–158.](https://doi.org/10.1016/0166-8641(93)90147-6)

### Nets make continuity mean preserving limits in every space

**Remember:** Index by neighbourhoods, and a net can reach any closure point.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A net is a family of points indexed by a directed set, such as the neighbourhoods of a point ordered by reverse inclusion (our own). It converges to x if, for every neighbourhood of x, the net is eventually inside that neighbourhood.

**Problem.** A function f between any two spaces is continuous exactly when it sends each net converging to x to a net converging to f(x). Also, a point is in the closure of a set exactly when some net in the set converges to it.

**How the definition helps.** Because neighbourhoods can serve as indices, a net can approach a point through every neighbourhood at once (our own). Choosing a point in each neighbourhood gives a net in the set at a closure point, and a bad net where continuity fails (our own). Conversely, continuity pulls neighbourhoods back to neighbourhoods, so it preserves net limits (our own).

**Wikipedia:** [Net (mathematics)](https://en.wikipedia.org/wiki/Net_%28mathematics%29). It says: “it is necessary to allow for directed sets other than just the natural numbers if X is not a first-countable space (or not a sequential space).”

**Sources:**

- [Moore, E. H. and Smith, H. L. (1922). A General Theory of Limits. American Journal of Mathematics 44(2), 102–121.](https://doi.org/10.2307/2370388)

### Subnets are chosen so that compactness means convergent subnets

**Remember:** A subnet is eventually wherever its parent net is eventually.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A subnet of a net x is a net y in the same space that is eventually in every set that x is eventually in. A net is eventually in a set if all its values from some index on lie in that set.

**Problem.** A space is compact if and only if every net in it has a convergent subnet.

**How the definition helps.** So a subnet is a net whose tail filter refines that of x, and a cluster point of x gives a convergent subnet by adding its neighbourhoods (our own). A space is compact exactly when every proper filter has a cluster point, and every proper filter is the tail filter of some net (our own). So the filter criterion becomes the net criterion (our own).

**nLab:** [subnet](https://ncatlab.org/nlab/show/subnet), [net](https://ncatlab.org/nlab/show/net). It says: “The point of the definition is to ensure that in classical mathematics, compact spaces are equivalently those for which every net has a converging subnet.”

**Sources:**

- [J. L. Kelley, Convergence in topology, Duke Mathematical Journal 17 (1950)](https://doi.org/10.1215/S0012-7094-50-01726-1)

### Ultrafilters turn Tychonoff's theorem into a short argument

**Remember:** An ultrafilter chooses a side for every subset.

*Makes the theorem clean to state or prove.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** An ultrafilter on X is a family of subsets that picks a side of every split: for each A ⊆ X it contains exactly one of A and X ∖ A. It is also closed under finite intersections and supersets, and it converges to x if it contains every neighbourhood of x.

**Problem.** Every product of compact spaces is compact.

**How the definition helps.** The image of an ultrafilter under a map is again an ultrafilter, and in a compact space every ultrafilter converges. So each coordinate image of an ultrafilter on the product converges, and the tuple of limits is its limit, because product convergence is coordinatewise. Compactness as convergence of all ultrafilters needs the ultrafilter lemma, and choosing the limits uses the axiom of choice unless each factor is Hausdorff.

**Wikipedia:** [Tychonoff's theorem](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem), [Filters in topology](https://en.wikipedia.org/wiki/Filters_in_topology), [Ultrafilter on a set](https://en.wikipedia.org/wiki/Ultrafilter_on_a_set). It says: “assuming the ultrafilter lemma, a space is compact if and only if each ultrafilter on the space converges. With this in hand, the proof becomes easy”

**Sources:**

- [Cartan, H. (1937). Théorie des filtres. Comptes rendus de l'Académie des sciences 205, 595–598.](http://gallica.bnf.fr/ark:/12148/bpt6k3157c/f594.image)
- [Kelley, J. L. (1950). Convergence in topology. Duke Mathematical Journal 17(3), 277–283.](https://doi.org/10.1215/S0012-7094-50-01726-1)

### Coordinatewise continuity lets paths join points in a product

**Remember:** A path in a product is one path per coordinate.

*True by definition.* MSC 54B10 (Product spaces in general topology), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** The product topology is the coarsest topology that makes each coordinate projection continuous. With it, a map into the product, such as a path from \[0,1\], is continuous exactly when every coordinate map is.

**Problem.** A nonempty product is path-connected, meaning any two points are joined by a path, exactly when each factor is path-connected.

**How the definition helps.** A tuple of paths, one per coordinate and all run on the same time parameter, is a path in the product because each coordinate is continuous. This coordinate test holds because a basic open set restricts only finitely many coordinates (our own). Conversely, projecting a path between two tuples gives a path between their coordinates.

**Paper or page:** [Product Space is Path-connected iff Factor Spaces are Path-connected](https://proofwiki.org/wiki/Product_Space_is_Path-connected_iff_Factor_Spaces_are_Path-connected). It says: “is a path-connected space”

**Sources:** none listed. No primary source with a working link was found.

### Finite coordinate restrictions keep arbitrary products connected

**Remember:** Changing finitely many coordinates reaches every basic open set.

*Rules out counterexamples.* MSC 54B10 (Product spaces in general topology), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** In the product topology, a basic open set restricts only finitely many coordinates to open sets and leaves every other coordinate free. The open sets are the unions of these basic sets.

**Problem.** An arbitrary product of connected spaces is connected in the product topology.

**How the definition helps.** So every nonempty open set contains a point that differs from a fixed point b in only finitely many coordinates, and these points are dense. They form a union of connected finite products that all contain b, so the union is connected and so is its closure, the whole product. In our own box example, moving every coordinate of a real sequence by less than one keeps it bounded or unbounded, so ℝᴺ splits.

**Wikipedia:** [Box topology](https://en.wikipedia.org/wiki/Box_topology). It says: “The box topology is neither compact nor connected”

**Sources:** none listed. No primary source with a working link was found.

### Finite coordinate restrictions keep countable products second-countable

**Remember:** Countably many finite choices still give a countable base.

*Rules out counterexamples.* MSC 54B10 (Product spaces in general topology), 54D70. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is second-countable if countably many open sets form a base, so that every open set is a union of some of them. In the product topology, a basic open set restricts only finitely many coordinates, each to a basic open set of its factor.

**Problem.** A countable product of second-countable spaces is second-countable.

**How the definition helps.** Countably many factors with countable bases give only countably many finite lists of restrictions, and these lists form a base for the product. Our own counterexample uses the box topology, which allows restrictions on every coordinate. On binary sequences it makes each singleton open, so any base must contain uncountably many singletons.

**Paper or page:** [Countable Product of Second-Countable Spaces is Second-Countable](https://proofwiki.org/wiki/Countable_Product_of_Second-Countable_Spaces_is_Second-Countable). It says: “is also second-countable.”

**Sources:** none listed. No primary source with a working link was found.

### Finite restrictions in the product topology let Tychonoff's theorem hold

**Remember:** Restrict finitely many coordinates, and compact factors give a compact product.

*Rules out counterexamples.* MSC 54B10 (Product spaces in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** In the product topology, a basic open set restricts only finitely many coordinates and leaves the rest free. The box topology instead allows an open restriction in every coordinate.

**Problem.** Every product of compact spaces is compact in the product topology. An infinite box product of compact spaces can fail compactness, connectedness or metrizability.

**How the definition helps.** With finitely many restrictions, a product ultrafilter converges to any tuple of coordinate limits, so compactness follows from the ultrafilter criterion (our own). The countable box product of two-point discrete spaces is discrete and infinite, so it is neither compact nor connected (our own). In the box product \[0,1\]ᴺ, shrinking the nth box in coordinate n defeats any countable neighbourhood base at zero, so it is not metrizable (our own).

**Wikipedia:** [Box topology](https://en.wikipedia.org/wiki/Box_topology), [Product topology](https://en.wikipedia.org/wiki/Product_topology). It says: “In particular, if all the component spaces are compact, the box topology on their Cartesian product will not necessarily be compact, although the product topology on their Cartesian product will always be compact.”

**Sources:**

- [Tychonoff, A. (1935). Über einen Funktionenraum. Mathematische Annalen 111, 762–766.](https://doi.org/10.1007/BF01472255)

### Open rectangles make product projections open

**Remember:** A nonempty open rectangle projects to an open side.

*True by definition.* MSC 54B10 (Product spaces in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** The open sets of the product topology on X × Y are the unions of open rectangles U × V, with U open in X and V open in Y.

**Problem.** Each coordinate projection from X × Y to a factor sends open sets to open sets.

**How the definition helps.** A nonempty open rectangle U × V projects onto its open side U, and the empty rectangle projects onto ∅. Images preserve unions, so every open set projects to an open set.

**Paper or page:** [Projection from Product Topology is Open and Continuous](https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Open_and_Continuous). It says: “are open and continuous.”

**Sources:** none listed. No primary source with a working link was found.

### The product topology makes maps into a product continuous coordinatewise

**Remember:** Continuity into a product is checked one coordinate at a time.

*True by definition.* MSC 54B10 (Product spaces in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** The product topology is the coarsest topology that makes every projection continuous. Its basic open sets fix open sets in finitely many coordinates and leave all other coordinates free.

**Problem.** A map into a product is continuous if and only if each of its coordinate maps is continuous.

**How the definition helps.** The preimage of a basic open set is a finite intersection of preimages under coordinate maps, so it is open when every coordinate map is continuous (our own). Conversely, composing a continuous map with each continuous projection gives continuous coordinates (our own).

**Wikipedia:** [Product topology](https://en.wikipedia.org/wiki/Product_topology), [Box topology](https://en.wikipedia.org/wiki/Box_topology). It says: “It follows from the above universal property that a map f : Y → X is continuous if and only if fᵢ = pᵢ ∘ f is continuous for all i ∈ I.”

**Sources:** none listed. No primary source with a working link was found.

### Closed classes make a quotient space have closed points

**Remember:** A point of the quotient stands for a whole class.

*True by definition.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** In a quotient space, a set of classes is closed exactly when the union of those classes is closed in the original space. A space is T₁ if each single point is a closed set.

**Problem.** A quotient space is T₁ exactly when every class is closed in the original space.

**How the definition helps.** A point of the quotient is closed exactly when its class, which is its preimage, is closed in the original space.

**Wikipedia:** [Quotient space (topology)](https://en.wikipedia.org/wiki/Quotient_space_%28topology%29). It says: “is a T₁ space if and only if every equivalence class of ∼ is closed in X.”

**Sources:** none listed. No primary source with a working link was found.

### Closed quotient maps preserve Hausdorff separation from compact spaces

**Remember:** Remove the image of the complement to keep whole classes inside.

*Rules out counterexamples.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A quotient map q is closed if it sends closed sets to closed sets. Then for any open set U containing a class, the points of the quotient whose whole class lies in U form an open set.

**Problem.** A quotient of a compact Hausdorff space is Hausdorff exactly when the quotient map is closed.

**How the definition helps.** If q is closed, classes are closed, normality separates two of them by open sets, and shrinking those sets to whole classes separates the quotient points. Conversely, closed sets are compact, and their compact images are closed in a Hausdorff quotient. In our own counterexample, collapsing (0,1\] in \[0,1\] gives a non-Hausdorff quotient, since the collapsed point has a preimage that is not closed.

**nLab:** [quotient projections out of compact Hausdorff spaces are closed precisely if the codomain is Hausdorff](https://ncatlab.org/nlab/show/quotient+projections+out+of+compact+Hausdorff+spaces+are+closed+precisely+if+the+codomain+is+Hausdorff). It says: “These are now clearly disjoint open neighbourhoods”

**Sources:** none listed. No primary source with a working link was found.

### Closed relations give Hausdorff open quotients

**Remember:** Inequivalent pairs sit in rectangles free of equivalent pairs.

*Rules out counterexamples.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54C10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** An equivalence relation is closed if the set of equivalent pairs is closed in the product, so every inequivalent pair has an open rectangle U × V around it containing no equivalent pair (our own). The quotient map is open if it sends open sets to open sets.

**Problem.** The quotient by a closed equivalence relation is Hausdorff whenever the quotient map is open.

**How the definition helps.** No point of U is equivalent to one of V, so the open map sends U and V to disjoint open sets around the two classes (our own). Identifying matching nonzero points of two real lines gives an open quotient map with two origins that cannot be separated (our own). There the relation is not closed, because the origin pair is a limit of equivalent pairs (our own).

**Paper or page:** [A converse theorem for hyperbolic surface spectra and the conformal bootstrap](https://arxiv.org/abs/2509.17935v1). It says: “Let Y be a topological space, and ∼ a closed equivalence relation on Y such that the quotient map Y → Y/∼ is open. Then Y/∼ is Hausdorff.”

**Sources:** none listed. No primary source with a working link was found.

### Joining the endpoints in the quotient topology gives a circle

**Remember:** Glue the endpoints first, then let the interval trace the circle.

*Makes the theorem clean to state or prove.* MSC 54B15 (Quotient spaces, decompositions in general topology), 54C05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Gluing the endpoints of \[0,1\] gives a quotient space with one point for {0,1} and one point for each other t. A set in it is open exactly when its preimage in \[0,1\] is open. So a map out of it is continuous exactly when the corresponding map from \[0,1\] is.

**Problem.** Identifying the endpoints of \[0,1\] gives a space homeomorphic to the unit circle in the plane.

**How the definition helps.** The map t ↦ (cos 2πt, sin 2πt) takes equal values exactly at 0 and 1, so it gives a continuous bijection from the quotient onto the circle. The quotient is compact as an image of \[0,1\], and the circle is Hausdorff. A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.

**nLab:** [quotient projections out of compact Hausdorff spaces are closed precisely if the codomain is Hausdorff](https://ncatlab.org/nlab/show/quotient+projections+out+of+compact+Hausdorff+spaces+are+closed+precisely+if+the+codomain+is+Hausdorff). It says: “the above map is in fact a homeomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Open or closed surjections recover the quotient topology

**Remember:** An onto map sends a full preimage back to the original set.

*True by definition.* MSC 54B15 (Quotient spaces, decompositions in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A quotient map is an onto continuous map f for which a set V is open as soon as f⁻¹(V) is open, or equivalently closed as soon as f⁻¹(V) is closed. Because f is onto, V = f(f⁻¹(V)) for every set V.

**Problem.** An onto continuous map is a quotient map if it sends open sets to open sets or closed sets to closed sets.

**How the definition helps.** If f is open and f⁻¹(V) is open, then V = f(f⁻¹(V)) is open. The closed case is the same argument with closed sets.

**Paper or page:** [Continuous Open Surjective Mapping is Quotient Mapping](https://proofwiki.org/wiki/Continuous_Open_Surjective_Mapping_is_Quotient_Mapping), [Continuous Closed Surjective Mapping is Quotient Mapping](https://proofwiki.org/wiki/Continuous_Closed_Surjective_Mapping_is_Quotient_Mapping). It says: “Then f is a quotient mapping.”

**Sources:** none listed. No primary source with a working link was found.

### The open preimage test makes quotient maps compose

**Remember:** Apply the open preimage test twice.

*True by definition.* MSC 54B15 (Quotient spaces, decompositions in general topology). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A quotient map is an onto map for which a set in the target is open exactly when its preimage is open.

**Problem.** The composite of two quotient maps is a quotient map.

**How the definition helps.** For quotient maps f and then g, a set V is open exactly when g⁻¹(V) is open, which holds exactly when f⁻¹(g⁻¹(V)) = (g ∘ f)⁻¹(V) is open. The composite is also onto.

**Paper or page:** [Composite of Quotient Mappings in Topology is Quotient Mapping](https://proofwiki.org/wiki/Composite_of_Quotient_Mappings_in_Topology_is_Quotient_Mapping). It says: “Then g ∘ f : S₁ → S₃ is a quotient mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Distance functions represent Hausdorff distance

**Remember:** Compare two sets by comparing their distances from every point.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.MG, cs.CG. Level 2: later undergraduate.

**Definition.** Represent each nonempty compact set A in ℝⁿ by its distance function d<sub>A</sub>, where d<sub>A</sub>(x) is the distance from x to A. Compare two sets by the largest gap between their distance functions, sup \|d<sub>A</sub>(x) − d<sub>B</sub>(x)\|.

**Problem.** This uniform distance between distance functions equals the usual Hausdorff distance d<sub>H</sub>(A,B). So the triangle inequality for d<sub>H</sub> is the triangle inequality of the uniform norm.

**How the definition helps.** For every x, d<sub>A</sub>(x) ≤ d<sub>B</sub>(x) + d<sub>H</sub>(A,B), so the gap is at most d<sub>H</sub> (our own). On points a of A the gap is d<sub>B</sub>(a), whose supremum is one directed distance, and symmetrically on B (our own). So the two distances are equal, and the uniform-norm triangle inequality passes to d<sub>H</sub> (our own).

**nLab:** [Hausdorff metric](https://ncatlab.org/nlab/show/Hausdorff+metric). It says: “its symmetrization is the Hausdorff metric”

**Paper or page:** [Computing the Hausdorff Distance of Two Sets from Their Signed Distance Functions](https://arxiv.org/abs/1812.06740v1). It says: “dH(A, B) = ‖dA − dB‖∞”

**Sources:** none listed. No primary source with a working link was found.

### The Hausdorff distance becomes a metric on nonempty compact sets

**Remember:** Same closure means distance zero, so use closed sets.

*Makes the theorem clean to state or prove.* MSC 54B20 (Hyperspaces in general topology), 54E35. arXiv math.GN, math.MG. Level 2: later undergraduate.

**Definition.** The Hausdorff distance between nonempty compact sets A and B of a metric space is the least r such that every point of A is within r of B, and every point of B is within r of A.

**Problem.** Hausdorff distance is a metric on the nonempty compact subsets of a metric space M. This metric space is complete if M is complete and compact if M is compact.

**How the definition helps.** Compact sets are bounded and closed, so the distance is finite, and distance zero puts each set in the other's closure, hence equality (our own). Without closedness, (0,1) and \[0,1\] have distance zero (our own). The Hausdorff hyperspace theorem gives completeness and compactness under the stated hypotheses (our own).

**Wikipedia:** [Hausdorff distance](https://en.wikipedia.org/wiki/Hausdorff_distance). It says: “It turns the set of non-empty compact subsets of a metric space into a metric space in its own right.”

**Sources:**

- [Hausdorff, F. (1914). Grundzüge der Mengenlehre. Leipzig: Veit &amp; Comp.](https://archive.org/details/grundzgedermen00hausuoft)

### Initial and final topologies make limits of spaces immediate

**Remember:** Just enough open sets to make the projections continuous.

*True by definition. Confidence: medium.* MSC 54B30 (Categorical methods in general topology), 18A30, 18F60. arXiv math.GN, math.CT. Level 2: later undergraduate.

**Definition.** The initial topology for maps pᵢ from a set S into spaces is the coarsest topology that makes every pᵢ continuous. With it, a map into S is continuous exactly when each composite with a pᵢ is (our own). Dually, the final topology is the finest one making given maps into a set continuous, so maps out of it are tested on composites (our own).

**Problem.** Take a diagram of topological spaces. Its limit is the limit of the underlying sets, with the initial topology of the projections. Its colimit is the colimit of the underlying sets, with the final topology.

**How the definition helps.** A cone of continuous maps gives a unique function into the set limit, and its composites with the projections are the cone maps, so the initial topology makes it continuous (our own). The final topology does the same for the unique function out of the set colimit (our own).

**nLab:** [limits and colimits by example](https://ncatlab.org/nlab/show/limits+and+colimits+by+example). It says: “all that is required is that this unique function is always continuous. But this is precisely what the initial topology ensures.”

**Sources:**

- [N. Bourbaki, General Topology, Chapters 1–4, Elements of Mathematics, Springer (1995 printing; original 1971)](https://doi.org/10.1007/978-3-642-61701-0)

### Defining proper maps as universally closed makes base change automatic

**Remember:** Every pullback sends closed sets to closed sets.

*True by definition.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A continuous map is proper in Bourbaki's sense if it is universally closed: every pullback of it along a continuous map sends closed sets to closed sets.

**Problem.** A pullback of a proper map is proper. The map from a space X to a point is proper exactly when X is compact.

**How the definition helps.** A pullback of a pullback is a pullback along the composite map, so it is closed by hypothesis (our own). For the map from X to a point, closedness is automatic and the only fibre is X (our own). Proper maps are exactly the closed maps with compact fibres, so this map is proper exactly when X is compact (our own).

**nLab:** [proper map](https://ncatlab.org/nlab/show/proper+map). It says: “The second definition was introduced by Bourbaki to make proper maps closed under base changes.”

**Sources:**

- [Nicolas Bourbaki, General Topology, Chapters 1–4, Elements of Mathematics, Springer (1995 reprint)](https://doi.org/10.1007/978-3-642-61701-0)
- [Richard S. Palais, When proper maps are closed, Proc. AMS 24 (1970) 835–836](https://doi.org/10.1090/s0002-9939-1970-0254818-x)

### Perfect maps pull back compactness

**Remember:** Compact fibers handle one point, and closedness handles its neighbors.

*Rules out counterexamples.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A perfect map is a continuous, onto, closed map whose fibres, the preimages of single points, are compact. Closedness lets a finite cover of one fibre also cover the whole preimage of a neighbourhood of that point (our own).

**Problem.** The preimage of every compact set under a perfect map is compact.

**How the definition helps.** For each y in the compact set K, finitely many cover sets cover the fibre over y (our own). Closedness gives a neighbourhood of y whose whole preimage they still cover, and finitely many such neighbourhoods cover K (our own). The map from \[0,1\] ⊔ (0,1\] onto \[0,1\] has finite fibres but is not closed, and the preimage of \[0,1\] is not compact (our own).

**Wikipedia:** [Perfect map](https://en.wikipedia.org/wiki/Perfect_map). It says: “If p : X → Y is a perfect map and Y is compact, then X is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Proper local homeomorphisms are coverings

**Remember:** Properness keeps extra sheets from appearing near a fiber.

*Rules out counterexamples.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A local homeomorphism maps a neighbourhood of each point homeomorphically onto an open set. It is proper if compact sets have compact preimages, so each fibre is compact and discrete, hence finite (our own).

**Problem.** A surjective proper local homeomorphism between Hausdorff spaces is a covering map if its target is locally compact. A covering map splits over a neighborhood of each target point into disjoint copies of that neighborhood.

**How the definition helps.** Each finite fibre has disjoint sheets around its points (our own). The map is closed, by properness over a locally compact Hausdorff target, so cutting down the sheet images gives an evenly covered neighbourhood (our own). The map t ↦ exp(it) on (0,4π) is not proper and has one preimage over 1 but two over nearby points (our own).

**Wikipedia:** [Local homeomorphism](https://en.wikipedia.org/wiki/Local_homeomorphism). It says: “if p : X → Y is a proper local homeomorphism between two Hausdorff spaces and if Y is also locally compact, then p is a covering map.”

**Sources:** none listed. No primary source with a working link was found.

### Equicontinuity gives compactness in spaces of continuous functions

**Remember:** Equicontinuous means one neighbourhood works for the whole family.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54C35 (Function spaces in general topology), 54D30. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** A family F of real functions on X is equicontinuous if, at each point x, one neighbourhood serves every f ∈ F at once. That is, for every ε &gt; 0 some neighbourhood U of x gives \|f(y) − f(x)\| &lt; ε for all f ∈ F and y ∈ U.

**Problem.** Let X be compact Hausdorff and give its continuous real functions the uniform norm. A subset is compact exactly when it is closed, pointwise bounded and equicontinuous.

**How the definition helps.** With one neighbourhood for all f, finitely many points of the compact X control the whole family, so a pointwise bounded family is totally bounded (our own). Equicontinuity is the extra condition that makes this a Heine–Borel test, since in C\[0,1\] closed bounded sets need not be compact. For example, the functions xⁿ are bounded, but no subsequence converges uniformly, because the pointwise limit is not continuous (our own example).

**Wikipedia:** [Equicontinuity](https://en.wikipedia.org/wiki/Equicontinuity). It says: “Equicontinuity appears in the formulation of Ascoli's theorem, which states that a subset of C(X), the space of continuous functions on a compact Hausdorff space X, is compact if and only if it is closed, pointwise bounded and equicontinuous.”

**Sources:** none listed. No primary source with a working link was found.

### Connected components partition a space as equivalence classes

**Remember:** Two points belong together when one connected set contains both.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** Call two points equivalent if some connected subset contains both, and define the connected components as the classes of this relation, not as the maximal connected subsets.

**Problem.** Connected components partition the space and are exactly its maximal connected subsets.

**How the definition helps.** Equivalence classes always partition a space, and two connected sets sharing a point have connected union, which gives transitivity. The class of x is the union of all connected sets containing x, so it is connected. It is maximal because it contains every connected set through x (our own).

**Paper or page:** [Equivalence of Definitions of Component/Equivalence Class equals Union of Connected Sets](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Component/Equivalence_Class_equals_Union_of_Connected_Sets), [Union of Connected Sets with Common Point is Connected](https://proofwiki.org/wiki/Union_of_Connected_Sets_with_Common_Point_is_Connected). It says: “Let C′ be the equivalence class of ∼ containing x.”

**Sources:** none listed. No primary source with a working link was found.

### Connected sets sharing a point have a connected union

**Remember:** The common point forces the same constant on every piece.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is connected if every continuous map from it to the discrete two-point space {0,1} is constant.

**Problem.** A union of connected subsets with a common point is connected.

**How the definition helps.** Such a map is constant on each piece, and the common point forces all pieces to share the same value. So it is constant on the whole union. This test agrees with the usual one, since a nonconstant map splits the space into two disjoint nonempty open preimages (our own).

**Paper or page:** [Union of Connected Sets with Common Point is Connected](https://proofwiki.org/wiki/Union_of_Connected_Sets_with_Common_Point_is_Connected), [Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space). It says: “is a connected set of T.”

**Sources:** none listed. No primary source with a working link was found.

### Connectedness as no map onto two points makes continuous images connected

**Remember:** Every continuous map to two discrete points misses a point.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54C05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space T is connected if there is no continuous map from T onto the discrete space {0, 1}. Equivalently, T is not the union of two nonempty separated sets.

**Problem.** The continuous image of a connected space is connected. As a corollary, a continuous real function on a closed interval has the intermediate value property.

**How the definition helps.** A continuous map from the image onto {0, 1} would compose with f to give one from the connected domain (our own). Closed intervals are connected, and a real image that misses a value between two of its values splits into the parts below and above it (our own).

**Paper or page:** [Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space), [Continuous Image of Connected Space is Connected/Corollary 3](https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Corollary_3). It says: “Then there exists no continuous surjection from T onto a discrete two-point space.”

**Sources:**

- [ProofWiki, Equivalence of Definitions of Connected Topological Space/No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space)
- [ProofWiki, Continuous Image of Connected Space is Connected/Corollary 3](https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Corollary_3)

### Connectedness by separations survives closures, but path-connectedness does not

**Remember:** Connected means no split into two nonempty open pieces.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is connected if it is not the union of two disjoint nonempty open sets. A space is path-connected if any two points are joined by a continuous path.

**Problem.** The closure of a connected set is connected. Continuous images of connected spaces are connected, which gives the intermediate value theorem.

**How the definition helps.** Both sides of a separation of the closure would meet the dense original set and so separate it. A separation of a continuous image pulls back to the domain, and an interval image missing a middle value would be separated (our own). Path-connectedness has no such test, since the closure of the graph of sin(1/x) on (0,1\] is not path-connected (our own).

**Wikipedia:** [Connected space](https://en.wikipedia.org/wiki/Connected_space), [Locally connected space](https://en.wikipedia.org/wiki/Locally_connected_space), [Topologist's sine curve](https://en.wikipedia.org/wiki/Topologist%27s_sine_curve). It says: “The closure of a connected subset is connected. Furthermore, any subset between a connected subset and its closure is connected.”

**Sources:** none listed. No primary source with a working link was found.

### Defining local connectedness by open components makes quotients locally connected

**Remember:** A component downstairs pulls back to a union of open components.

*True by definition.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54B15. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Call a space locally connected if every connected component of every open subset is open.

**Problem.** Every quotient of a locally connected space is locally connected.

**How the definition helps.** The preimage of an open quotient set V has open components by local connectedness (our own). Each such component has connected image, contained in a single component of V (our own). Thus each component of V has open preimage and is open by the quotient test (our own).

**nLab:** [locally connected topological space](https://ncatlab.org/nlab/show/locally+connected+topological+space). It says: “every connected component of every open subspace of X is open;”

**Sources:** none listed. No primary source with a working link was found.

### In Hausdorff spaces every path can be replaced by an arc

**Remember:** Without Hausdorff, points may share a path but no arc.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54F50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Hausdorff space gives any two distinct points disjoint open neighbourhoods. A path is any continuous map from \[0,1\], while an arc is a copy of \[0,1\] inside the space, the image of an embedding.

**Problem.** If a Hausdorff space is path-connected, then any two distinct points are joined by an arc.

**How the definition helps.** In a Hausdorff space the image of a path is a Peano continuum, a compact, connected, locally connected metrizable space, by the Hahn–Mazurkiewicz theorem (our own). Peano continua are arcwise connected, so the image contains an arc between distinct endpoints (our own). The indiscrete two-point space has a path between its points but contains no copy of \[0,1\] (our own).

**Wikipedia:** [Connected space](https://en.wikipedia.org/wiki/Connected_space). It says: “Every Hausdorff space that is path-connected is also arc-connected; more generally this is true for a Δ-Hausdorff space, which is a space where each image of a path is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Local path-connectedness makes connected components path-connected

**Remember:** Open path components cannot split a connected space.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is locally path-connected if every neighbourhood of a point contains an open neighbourhood U of that point in which any two points are joined by a path in U.

**Problem.** In a locally path-connected space, the connected components are exactly the path components, the classes of points joined by paths.

**How the definition helps.** Each path component is open, because each of its points has a path-connected open neighbourhood inside it. So a connected set cannot meet two path components, and each path component, being path-connected, is connected. The closure of the graph of sin(1/x) for 0 &lt; x ≤ 1 is connected but not path-connected (our own example).

**nLab:** [locally path-connected space](https://ncatlab.org/nlab/show/locally+path-connected+space). It says: “The connected components of a locally path-connected space are the same as its path-connected components.”

**Paper or page:** [Connected and Locally Path-Connected Implies Path Connected](https://proofwiki.org/wiki/Connected_and_Locally_Path-Connected_Implies_Path_Connected). It says: “Then T is path-connected.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal loop cancellations turn any path into an arc in Hausdorff spaces

**Remember:** Cancel loops until none remains between distinct surviving times.

*Makes the theorem clean to state or prove.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54F50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** For a path α, a loop cancellation is a union of disjoint open parameter intervals (a,b) with α(a) = α(b), so each interval is a loop that can be cut out. It is maximal if no other cancellation has a strictly larger union.

**Problem.** In a path-connected Hausdorff space, any two distinct points are joined by an arc, a subspace homeomorphic to the closed interval.

**How the definition helps.** After the loops of a maximal cancellation are cut out, with each closed cancelled interval collapsed to one parameter point, no value repeats (our own). The source's maximality theorem supplies such a cancellation, and its Proposition 2 gives injectivity after reparametrization (our own). For distinct endpoints, a continuous injection of \[0,1\] into a Hausdorff space is an embedding, by compactness (our own).

**Paper or page:** [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1), [Constructing arcs from paths using Zorn's Lemma](https://arxiv.org/abs/2207.07242v1). It says: “If X permits loop deletion then for every path α: \[0,1\] → X, there exists a maximal loop-cancellation 𝒱 ∈ ℒ(α).”

**Sources:**

- [Jeremy Brazas, Constructing arcs from paths using Zorn's Lemma, Rocky Mountain Journal of Mathematics 54(4) (2024), 965–974](https://arxiv.org/abs/2207.07242v1)

### The identity theorem needs a connected domain

**Remember:** One piece, one analytic function.

*Rules out counterexamples.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 30B40. arXiv math.CV, math.GN. Level 2: later undergraduate.

**Definition.** In complex analysis, a domain is a nonempty open set that is connected, meaning it is not the union of two disjoint nonempty open sets.

**Problem.** The identity theorem: let f and g be analytic functions on a domain D. If f and g agree on a set with an accumulation point in D, then f = g on all of D.

**How the definition helps.** In a domain, a nonempty set that is both open and closed is the whole domain (our own). The set where all derivatives of f − g vanish is closed by continuity, open by Taylor expansion, and nonempty at the accumulation point of agreement (our own). On two disjoint discs, f can be 0 on one and 1 on the other, while g is 0 and 2.

**Wikipedia:** [Identity theorem](https://en.wikipedia.org/wiki/Identity_theorem). It says: “For example, if D consists of two disjoint open sets, f can be 0 on one open set, and 1 on another, while g is 0 on one, and 2 on another.”

**Sources:** none listed. No primary source with a working link was found.

### Maps into a Hausdorff space are fixed by a dense subset

**Remember:** Hausdorff means that 'equal' is a closed condition on pairs of points.

*True by definition.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space Y is Hausdorff if the diagonal, the set of pairs (y, y) of equal points, is closed in Y × Y. Equivalently, any two distinct points have disjoint open neighbourhoods.

**Problem.** Let f, g : X → Y be continuous, with Y Hausdorff. Suppose that f and g agree on a dense subset A of X. Then f = g.

**How the definition helps.** The continuous map x ↦ (f(x),g(x)) pulls the closed diagonal back to the set where f and g agree. This closed set contains the dense subset, so it equals X.

**nLab:** [Hausdorff space](https://ncatlab.org/nlab/show/Hausdorff+space). It says: “Since E is a closed subset of X and contains a dense subspace i: A ↪︎ X, it must be all of X (as a subset of itself).”

**Sources:**

- [Jérôme Lapuyade-Lahorgue, The epimorphisms of the category Haus are exactly the image-dense morphisms, arXiv:1810.00778 (2018)](https://arxiv.org/abs/1810.00778)

### Adding T₁ to normality makes normal spaces Tychonoff

**Remember:** With closed points, Urysohn separates each point from each closed set.

*Rules out counterexamples.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A T₄ space is a normal space, one in which disjoint closed sets have disjoint open neighbourhoods, whose single points are also closed sets.

**Problem.** Every T₄ space is Tychonoff, so a point and a closed set not containing it are separated by a continuous real function. In particular, every T₄ space is Hausdorff and regular.

**How the definition helps.** Because points are closed, Urysohn's lemma separates a point from a disjoint closed set by a continuous function. Preimages of disjoint neighbourhoods of 0 and 1 then give disjoint open sets (our own). The Sierpiński space, with open sets ∅, {1} and {0,1}, is normal, but its point 1 and closed set {0} have no disjoint neighbourhoods (our own).

**Wikipedia:** [Normal space](https://en.wikipedia.org/wiki/Normal_space), [Separation axiom](https://en.wikipedia.org/wiki/Separation_axiom). It says: “Taking Kolmogorov quotients, we see that all normal T₁ spaces are Tychonoff.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Tychonoff spaces as subspaces makes the Stone–Čech embedding automatic

**Remember:** Tychonoff means able to sit inside a compact Hausdorff space.

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

**Definition.** A space is completely normal if any two sets, each missing the other's closure, have disjoint open neighbourhoods. Normality asks this only for disjoint closed sets.

**Problem.** Every subspace of a completely normal space is normal.

**How the definition helps.** Two disjoint closed sets of a subspace A each miss the other's closure in the whole space, because closure in A is closure in the space intersected with A (our own). Complete normality separates them in the space, and intersecting the neighbourhoods with A separates them in A.

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

**How the definition helps.** Local finiteness puts each point in only finitely many members, so shrinking the members one at a time in a well-order still gives a cover at limit stages (our own). Normality does each step, giving an open set with closure inside the member around the points the other current members miss (our own). The cited Dowker example has a countable cover with no shrinking, so that cover is not locally finite (our own).

**nLab:** [shrinking lemma](https://ncatlab.org/nlab/show/shrinking+lemma). It says: “assuming the axiom of choice, then there exists a counter-example of a countable cover on a normal spaces for which the shrinking lemma fails (a Dowker space due to Beslagic 85).”

**Sources:**

- [A. Bešlagić, A Dowker product, Transactions of the AMS 292 (1985) 519–530](https://doi.org/10.1090/S0002-9947-1985-0808735-X)

### Paracompact Hausdorff is exactly what local metrics need to glue

**Remember:** Hausdorff plus paracompact glues local metrics into one metric.

*Rules out counterexamples.* MSC 54D20 (Noncompact covering properties (paracompact, Lindelöf, etc.)), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is locally metrizable if each point has a neighbourhood whose topology comes from a metric. A space is paracompact if every open cover has a locally finite open refinement.

**Problem.** Smirnov's metrization theorem says that a locally metrizable space is metrizable if and only if it is Hausdorff and paracompact. So a Hausdorff manifold has a metric exactly when it is paracompact.

**How the definition helps.** Smirnov's theorem gives a metric from local metrizability, Hausdorff separation and paracompactness, and metric spaces are Hausdorff and, by Stone's theorem, paracompact. The line with two origins shows that Hausdorff separation is needed, and the long line shows that paracompactness is needed (our own). Manifold charts give local metrizability, so the manifold case follows (our own).

**Wikipedia:** [Metrizable space](https://en.wikipedia.org/wiki/Metrizable_space), [Paracompact space](https://en.wikipedia.org/wiki/Paracompact_space). It says: “Smirnov proved that a locally metrizable space is metrizable if and only if it is Hausdorff and paracompact. In particular, a manifold is metrizable if and only if it is paracompact.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness and Hausdorff separation make continuous bijections reversible

**Remember:** Closed sets leave compact and arrive closed.

*Rules out counterexamples.* MSC 54D30 (Compactness), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** In a compact space every open cover has a finite subcover, so closed subsets are compact too. In a Hausdorff space, where distinct points have disjoint open neighbourhoods, compact subsets are closed.

**Problem.** A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.

**How the definition helps.** So a continuous map from a compact space to a Hausdorff space sends closed sets to closed sets, and for a bijection this makes the inverse continuous. In our own counterexample, the identity maps the two-point discrete space onto the two-point space whose only open sets are the empty and whole sets. It is continuous, but its inverse is not, since a singleton is open in the domain and not in the target.

**Paper or page:** [Continuous Bijection from Compact to Hausdorff is Homeomorphism](https://proofwiki.org/wiki/Continuous_Bijection_from_Compact_to_Hausdorff_is_Homeomorphism). It says: “Then f is a homeomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness as closed projections gives a short proof of Tychonoff's theorem

**Remember:** Compact means that projecting X away always keeps closed sets closed.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54C10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space X is compact if for every space Y the projection Y × X → Y sends every closed subset to a closed set.

**Problem.** Tychonoff's theorem: a product of any set of compact spaces is compact.

**How the definition helps.** In this form, X is compact when the map from X to a point stays closed after every base change, and such maps are stable under composition and pullback (our own). Clementino and Tholen use this to prove the product assertion by transfinite induction on closed maps. The Kuratowski–Mrówka theorem shows that this test agrees with open-cover compactness (our own).

**nLab:** [closed-projection characterization of compactness](https://ncatlab.org/nlab/show/closed-projection+characterization+of+compactness), [compactness and stable closure](https://ncatlab.org/nlab/show/compactness+and+stable+closure). It says: “show how it makes possible a very direct hands-on proof of the Tychonoff theorem, without the need for infrastructure such as ultrafilters or nets.”

**Sources:**

- [Maria Manuel Clementino, Walter Tholen, Tychonoff's theorem in a category, Proc. AMS 124 (1996) 3311–3314](https://doi.org/10.1090/S0002-9939-96-03435-1)

### Hausdorff separation makes compact subsets closed

**Remember:** Distinct points have disjoint neighbourhoods, so points escape compact sets.

*Rules out counterexamples.* MSC 54D30 (Compactness), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Hausdorff space gives distinct points disjoint open neighbourhoods, which is more than the T₁ condition that single points be closed.

**Problem.** Every compact subset of a Hausdorff space is closed.

**How the definition helps.** Separate an outside point from each point of the compact set by disjoint open neighbourhoods. Finitely many of these cover the set, and the intersection of their partners is an open neighbourhood of the point that misses the set. In our own counterexample, ℕ with the finite-complement topology is T₁ and every subset is compact, yet the even numbers are not closed.

**Paper or page:** [Compact Subspace of Hausdorff Space is Closed](https://proofwiki.org/wiki/Compact_Subspace_of_Hausdorff_Space_is_Closed). It says: “Then C is closed in H.”

**Sources:** none listed. No primary source with a working link was found.

### One ball radius works across a compact metric space

**Remember:** One radius fits every ball inside some cover member.

*True by definition.* MSC 54D30 (Compactness), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Lebesgue number for an open cover of a metric space is a radius δ &gt; 0 such that every ball of radius δ lies inside some member of the cover.

**Problem.** Every open cover of a compact metric space has a Lebesgue number.

**How the definition helps.** Compactness turns the radius that works near each point into finitely many radii, whose minimum is positive (our own). Pick at each point a ball inside a cover member, and take finitely many of the half-size balls that cover the space (our own). The smallest half-radius works by the triangle inequality, and in the empty space any radius works (our own).

**nLab:** [Lebesgue number lemma](https://ncatlab.org/nlab/show/Lebesgue+number+lemma). It says: “the open ball around x of radius δ is contained in Uᵢ”

**Paper or page:** [Lebesgue's Number Lemma/Compact Space](https://proofwiki.org/wiki/Lebesgue's_Number_Lemma/Compact_Space). It says: “Then there exists a Lebesgue number for every open cover of M.”

**Sources:** none listed. No primary source with a working link was found.

### Open-cover compactness gives one tube around a whole slice

**Remember:** Finitely many rectangles give one common width.

*Rules out counterexamples.* MSC 54D30 (Compactness), 54B10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space Y is compact if every open cover has a finite subcover. A tube around the slice {x} × Y is a set U × Y with U an open neighbourhood of x.

**Problem.** If Y is compact, an open set containing {x} × Y in the product contains a tube around that slice.

**How the definition helps.** Compactness of Y gives finitely many open rectangles that cover the slice and lie in the given open set. Their first sides all contain x, so their intersection U gives a tube U × Y inside the set. In our own counterexample, Y is the positive integers with every subset open, and the union of (−1/n,1/n) × {n} contains the slice at zero but no tube.

**Wikipedia:** [Tube lemma](https://en.wikipedia.org/wiki/Tube_lemma). It says: “there exists a tube in X × Y containing this slice and contained in N.”

**Sources:** none listed. No primary source with a working link was found.

### Open-cover compactness makes every product of compact spaces compact

**Remember:** Every open cover shrinks to a finite subcover.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54B10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is compact if every cover by open sets has a finite subcover. This open-cover notion replaced Fréchet's sequential compactness, where every sequence has a convergent subsequence.

**Problem.** Tychonoff's theorem says that any product of compact spaces is compact, with the product topology. The index set may be uncountable.

**How the definition helps.** By Alexander's subbase theorem, it is enough to test covers by preimages of open sets in single coordinates (our own). Some coordinate's sets must cover its factor, since otherwise choice gives a point outside the whole cover, and compactness then picks finitely many (our own). The product of continuum many unit intervals is not sequentially compact, so a sequence test cannot replace this argument (our own).

**Wikipedia:** [Compact space](https://en.wikipedia.org/wiki/Compact_space), [Sequentially compact space](https://en.wikipedia.org/wiki/Sequentially_compact_space), [Tychonoff's theorem](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem). It says: “It was this notion of compactness that became the dominant one, because it was not only a stronger property, but it could be formulated in a more general setting with a minimum of additional technical machinery”

**Sources:**

- [Fréchet, M. (1906). Sur quelques points du calcul fonctionnel. Rendiconti del Circolo Matematico di Palermo 22, 1–72.](https://doi.org/10.1007/BF03018603)
- [Tychonoff, A. (1930). Über die topologische Erweiterung von Räumen. Mathematische Annalen 102, 544–561.](https://doi.org/10.1007/BF01782364)
- [Tychonoff, A. (1935). Über einen Funktionenraum. Mathematische Annalen 111, 762–766.](https://doi.org/10.1007/BF01472255)

### Pseudocompactness is the extreme value theorem made into a definition

**Remember:** Pseudocompact: every continuous real function is bounded, by definition.

*True by definition.* MSC 54D30 (Compactness), 54C30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is pseudocompact if every continuous real function on it is bounded.

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

**How the definition helps.** Because each removed set is closed, an infinity neighbourhood meets X in an open set, so the open sets form a topology (our own). A cover member containing ∞ leaves only a compact set, which finitely many other members cover (our own). In the indiscrete two-point space a singleton is compact but not closed, and removing it leaves a set that is not open (our own).

**nLab:** [one-point compactification](https://ncatlab.org/nlab/show/one-point+compactification). It says: “If X is Hausdorff, then it is sufficient to speak of compact subsets in def. …, since compact subspaces of Hausdorff spaces are closed.”

**Sources:**

- [P. Alexandroff, Über die Metrisation der im Kleinen kompakten topologischen Räume, Mathematische Annalen 92 (1924) 294–301](https://doi.org/10.1007/BF01448011)

### Compact neighborhoods make the one-point extension Hausdorff

**Remember:** To separate a point from infinity, enclose it in a compact neighborhood.

*Rules out counterexamples.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54D30, 54D45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** In the one-point extension, the open neighbourhoods of ∞ are the complements of closed compact subsets of the original space. A Hausdorff space is locally compact if each point lies in the interior of a compact set.

**Problem.** The one-point extension of a Hausdorff space is Hausdorff exactly when the original space is locally compact.

**How the definition helps.** A compact neighbourhood K of a point gives disjoint open sets around it and ∞, namely the interior of K and the complement of K. Conversely, an open set U around a point that misses a neighbourhood of ∞ lies in the compact complement of that neighbourhood. The rational line is not locally compact, since each neighbourhood contains a sequence tending to a missing irrational (our own explanation).

**Paper or page:** [Condition for Alexandroff Extension to be T2 Space](https://proofwiki.org/wiki/Condition_for_Alexandroff_Extension_to_be_T2_Space), [Alexandroff Extension of Rational Number Space is not Hausdorff](https://proofwiki.org/wiki/Alexandroff_Extension_of_Rational_Number_Space_is_not_Hausdorff). It says: “is a locally compact Hausdorff space.”

**Sources:** none listed. No primary source with a working link was found.

### Complements of compact sets determine the one-point compactification

**Remember:** The compact subsets of the original space fix every neighborhood at infinity.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54D30. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A one-point compactification adds one point to make a compact Hausdorff space in which the original space is dense and keeps its topology. In the explicit construction, open neighborhoods of the added point are complements of compact subsets of the original space.

**Problem.** Any two compactifications of a noncompact space by a single point are homeomorphic by a map that fixes the original space.

**How the definition helps.** In any such compactification, the complement of an open set around the added point is closed in a compact space, hence compact, and it lies in the original space. Conversely, a compact subset of the original space is closed in the Hausdorff compactification, so its complement is an open set around the added point. The original space is open there, so its topology fixes every other open set, and the explicit construction is the only one.

**nLab:** [one-point compactification](https://ncatlab.org/nlab/show/one-point+compactification). It says: “complements of closed, and hence compact closed, subsets”

**Sources:** none listed. No primary source with a working link was found.

### For Hausdorff spaces, all definitions of local compactness agree

**Remember:** Add Hausdorff, and every version of local compactness says the same.

*Rules out counterexamples.* MSC 54D45 (Local compactness, \\(\\sigma\\)-compactness), 54D10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A compact neighborhood of x is a compact set containing an open neighborhood of x. A space is locally compact in the weak sense if every point has a compact neighborhood.

**Problem.** In a Hausdorff space, one compact neighbourhood at each point gives a base of closed compact neighbourhoods. Then locally compact Hausdorff spaces are Tychonoff and Baire: a countable union of nowhere dense sets has empty interior.

**How the definition helps.** Inside a compact Hausdorff neighbourhood, regularity gives smaller neighbourhoods whose closures lie in any given open set, and these closures are compact and closed (our own). The Tychonoff and Baire properties then follow from the standard theorems for locally compact Hausdorff spaces (our own). In Sierpiński space, the open singleton contains no closed neighbourhood of its point (our own).

**Wikipedia:** [Locally compact space](https://en.wikipedia.org/wiki/Locally_compact_space). It says: “Condition (1) is probably the most commonly used definition, since it is the least restrictive and the others are equivalent to it when X is Hausdorff.”

**Sources:** none listed. No primary source with a working link was found.

### Sequential spaces are defined as the spaces where sequences suffice

**Remember:** Where sequences suffice, sequential continuity is continuity.

*True by definition.* MSC 54D55 (Sequential spaces), 54A20. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is sequentially closed if it contains every limit of every convergent sequence in it. A space is sequential if every sequentially closed set is closed.

**Problem.** In a sequential space, a function to any space is continuous exactly when it preserves limits of sequences. First-countable spaces, such as metric spaces, are sequential, and the sequential spaces are exactly the quotients of metric spaces.

**How the definition helps.** If f preserves sequence limits, preimages of closed sets are sequentially closed, so they are closed when the domain is sequential (our own). In a first-countable space, a decreasing countable neighbourhood base gives a sequence converging to each closure point (our own). Franklin's theorem identifies the sequential spaces with the quotients of metric spaces (our own).

**Wikipedia:** [Sequential space](https://en.wikipedia.org/wiki/Sequential_space). It says: “Franklin wanted to determine "the classes of topological spaces that can be specified completely by the knowledge of their convergent sequences”

**Sources:**

- [Franklin, S. P. (1965). Spaces in which sequences suffice. Fundamenta Mathematicae 57(1), 107–115.](https://doi.org/10.4064/fm-57-1-107-115)

### A subbase gives fewer open sets to test for continuity

**Remember:** Test the building blocks, not every open set.

*True by definition.* MSC 54D70 (Base properties of topological spaces), 54C05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A subbase for a topology is a family of open sets that generates it. Every open set is a union of finite intersections of subbase members.

**Problem.** A map is continuous if and only if the preimage of each subbasic open set is open.

**How the definition helps.** Preimages commute with unions and finite intersections, so if each subbasic preimage is open, every open preimage is open (our own). The converse holds because subbasic sets are open.

**nLab:** [topological base](https://ncatlab.org/nlab/show/topological+base). It says: “such that every open subset is a union of finitary intersections of subbasic ones.”

**Sources:** none listed. No primary source with a working link was found.

### σ-locally finite bases make metrizability an if-and-only-if

**Remember:** Countably many layers, each seen only finitely often near any point.

*Makes the theorem clean to state or prove.* MSC 54D70 (Base properties of topological spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A base is σ-locally finite if it splits into countably many locally finite layers. In each layer, every point has a neighbourhood that meets only finitely many sets.

**Problem.** Nagata–Smirnov: a space is metrizable if and only if it is regular, Hausdorff, and has a σ-locally finite base.

**How the definition helps.** A metric supplies such a base: by Stone's theorem each cover by balls of radius 1/n has a locally finite open refinement (our own). Together these refinements form a base (our own), and the Nagata–Smirnov theorem gives the converse for regular Hausdorff spaces. Uncountable discrete metric spaces qualify, since their singletons form a locally finite base (our own).

**Wikipedia:** [Nagata–Smirnov metrization theorem](https://en.wikipedia.org/wiki/Nagata%E2%80%93Smirnov_metrization_theorem), [Metrizable space](https://en.wikipedia.org/wiki/Metrizable_space). It says: “Unlike Urysohn's metrization theorem, which provides only a sufficient condition for metrizability, this theorem provides both a necessary and sufficient condition for a topological space to be metrizable.”

**Sources:**

- [Nagata, J. (1950). On a necessary and sufficient condition of metrizability. Journal of the Institute of Polytechnics, Osaka City University, Series A 1, 93–100.](https://core.ac.uk/download/pdf/35260599.pdf)
- [Bing, R. H. (1951). Metrization of Topological Spaces. Canadian Journal of Mathematics 3, 175–186.](https://doi.org/10.4153/CJM-1951-022-3)

### A compact Hausdorff space has exactly one uniform structure

**Remember:** Entourages contain equality, admit reversal, and allow two smaller steps inside one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A uniformity on X is a filter of entourages, relations on X that say which pairs are close. Each entourage contains the diagonal, its inverse is again an entourage, and it contains V ∘ V for some entourage V.

**Problem.** A compact Hausdorff space has exactly one uniform structure that gives its topology, and it is complete in it. So uniform continuity and completeness there depend only on the topology.

**How the definition helps.** On a compact Hausdorff space the neighbourhoods of the diagonal in X × X form the only compatible uniformity, so the topology fixes it (our own). Compactness gives each Cauchy filter a cluster point, and the V ∘ V axiom makes that point a limit (our own).

**Wikipedia:** [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “In fact, for a compact Hausdorff space X the set of all neighbourhoods of the diagonal in X × X form the unique uniformity compatible with the topology.”

**Sources:** none listed. No primary source with a working link was found.

### Asking for Hausdorff makes the completion of a uniform space universal

**Remember:** Completeness gives limits to extend to; Hausdorff makes those limits unique.

*Rules out counterexamples.* MSC 54E15 (Uniform structures and generalizations), 54D35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Hausdorff completion of a uniform space X is a complete Hausdorff uniform space with a dense map from X. The map induces the uniformity of X. Complete means every Cauchy filter converges, and Hausdorff means each convergent filter has exactly one limit.

**Problem.** Every uniformly continuous map from X to a complete Hausdorff uniform space extends in exactly one way along X → X̄. So complete Hausdorff uniform spaces form a reflective subcategory of the category of uniform spaces.

**How the definition helps.** Extend a map by sending each new point to the limit of the image of a Cauchy filter from X (our own). Completeness of the target makes that limit exist, and Hausdorffness makes it unique (our own). Without Hausdorff, a constant map from ℚ to an indiscrete two-point space extends to ℝ with either value at √2 (our own).

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “In short, the category of complete Hausdorff uniform spaces is a reflective subcategory of Unif.”

**Sources:**

- [Nicolas Bourbaki, General Topology, Chapter II: Uniform structures, Springer (1971, 1995)](https://doi.org/10.1007/978-3-642-61701-0)

### Families of pseudometrics give uniform structures to all completely regular spaces

**Remember:** Every continuous real function gives a pseudometric; together they give a uniformity.

*Makes the theorem clean to state or prove.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is completely regular when continuous functions separate points from closed sets. For closed F and x ∉ F, some continuous f : X → \[0,1\] has f(x) = 0 and f = 1 on F. Each continuous real f gives a pseudometric \|f(x) − f(y)\|, and together these generate a uniformity (our own).

**Problem.** A topological space has a compatible uniform structure if and only if it is completely regular.

**How the definition helps.** Complete regularity puts a ball of these pseudometrics about each point inside each of its neighbourhoods, so their uniformity induces the topology (our own). Conversely, every uniformity comes from pseudometrics (our own). If a ball B(x,r) of such a pseudometric d misses F, then min(1, d(x,·)/r) separates x from F (our own).

**Wikipedia:** [Uniformizable space](https://en.wikipedia.org/wiki/Uniformizable_space), [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “Showing that a space is uniformizable is much simpler than showing it is metrizable. In fact, uniformizability is equivalent to a common separation axiom: A topological space is uniformizable if and only if it is completely regular.”

**Sources:** none listed. No primary source with a working link was found.

### Small diameter covers keep total boundedness after taking closure

**Remember:** Finitely many tiny pieces; closing a piece keeps it tiny.

*True by definition.* MSC 54E35 (Metric spaces, metrizability), 54E50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is totally bounded if, for each ε &gt; 0, finitely many pieces of diameter less than ε cover it. The diameter of a piece is the supremum of distances between its points.

**Problem.** The closure of a totally bounded subset of a metric space is totally bounded.

**How the definition helps.** Close each of the finitely many pieces: the closures keep their diameters, and their union is closed and contains the set (our own). So the closures cover the closure of the set (our own). Closure keeps diameter because distances between limit points are limits of distances (our own).

**Paper or page:** [Closure of Totally Bounded Subspace is Totally Bounded](https://proofwiki.org/wiki/Closure_of_Totally_Bounded_Subspace_is_Totally_Bounded). It says: “Then cl A is totally bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting a base point's distances embeds metric spaces isometrically in bounded functions

**Remember:** Each point becomes its distance function, shifted by the base point's.

*True by definition.* MSC 54E35 (Metric spaces, metrizability), 54C25. arXiv math.MG, math.GN. Level 2: later undergraduate.

**Definition.** Fix a point p and send each point x to the function t ↦ d(x,t) − d(p,t), which the triangle inequality bounds by d(x,p) (our own). Measure the distance between two such functions by the supremum of their absolute difference.

**Problem.** Every nonempty metric space embeds without changing distances into the space of bounded continuous real functions on it, with the supremum distance. This is the Kuratowski embedding.

**How the definition helps.** The functions of x and y differ at t by d(x,t) − d(y,t) (our own). The triangle inequality bounds this by d(x,y), and t = y attains the bound, so the functions are d(x,y) apart. Subtracting d(p,t) keeps each function bounded even when the space is unbounded (our own).

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “The mapping ν: X → C<sub>b</sub>(X) defined by the formula ν: x ↦ dₓ − dₚ is an isometric embedding.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Minimum displacement gives strictly shrinking maps a fixed point

**Remember:** Every move shrinks the next move, so the smallest move is zero.

*True by definition.* MSC 54E40 (Special maps on metric spaces), 54E45, 47H10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A map f is strictly shrinking if d(f(x), f(y)) &lt; d(x,y) for all distinct x and y, with no common factor below one required. So its displacement d(x, f(x)), the distance x moves, is smaller at f(x) than at x unless x is fixed (our own).

**Problem.** Every strictly shrinking self-map of a nonempty compact metric space has a unique fixed point, where its displacement is zero.

**How the definition helps.** Displacement is continuous because f never increases distances, so on a compact space it has a minimum point, which must be fixed (our own). Two fixed points would keep their distance, which strict shrinking forbids (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “a map f: M → M admits a unique fixed point if d(f(x), f(y)) &lt; d(x, y)”

**Sources:**

- [Michael Edelstein, On Fixed and Periodic Points Under Contractive Mappings (1962)](https://doi.org/10.1112/jlms/s1-37.1.74)

### One shrink factor keeps fixed points continuous in the parameter

**Remember:** One shrink factor q &lt; 1 serves every map in the family.

*Makes the theorem clean to state or prove.* MSC 54E40 (Special maps on metric spaces), 54E50, 47H10. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A family of maps Fₛ is uniformly contractive if one factor q &lt; 1 works for all of them. That is, d(Fₛ(x), Fₛ(y)) ≤ q d(x,y) for every parameter s and all points x and y.

**Problem.** Let a family of self-maps on a nonempty complete metric space depend jointly continuously on the point and parameter. If it is uniformly contractive, its unique fixed point depends continuously on the parameter.

**How the definition helps.** Let x be the fixed point of F and y that of G. The triangle inequality gives d(x,y) ≤ d(F(x), G(x)) + q d(x,y), so d(x,y) ≤ d(F(x), G(x))/(1 − q) (our own). One q gives one denominator for all parameters, and continuity in the parameter makes d(F(x), G(x)) small (our own).

**Paper or page:** [Uniform Contraction Mapping Theorem](https://proofwiki.org/wiki/Uniform_Contraction_Mapping_Theorem). It says: “and the mapping g: N → M is continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform embeddings stay injective after completion

**Remember:** Uniform control in both directions keeps new limit points distinct.

*Rules out counterexamples. Confidence: medium.* MSC 54E40 (Special maps on metric spaces), 54E50. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A uniform embedding is an injective map that is uniformly continuous in both directions. Both the map and its inverse on the image are uniformly continuous.

**Problem.** Every uniform embedding of metric spaces extends to a uniform embedding of their completions.

**How the definition helps.** The map and its inverse both extend to the completions by limits of Cauchy sequences (our own). By density the extensions stay inverse to each other, so the extension is still injective (our own). The map t ↦ exp(2πit) on (0,1) has a non-uniformly continuous inverse, and its extension glues 0 and 1 (our own).

**Wikipedia:** [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “whose inverse i⁻¹ : i(X) → X is also uniformly continuous”

**Sources:** none listed. No primary source with a working link was found.

### Uniformly continuous maps preserve total boundedness

**Remember:** One input radius works everywhere for a given output tolerance.

*Rules out counterexamples.* MSC 54E40 (Special maps on metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A map is uniformly continuous if each output tolerance ε &gt; 0 has one input radius δ &gt; 0 that works everywhere. Points less than δ apart have images less than ε apart. So the map sends every piece of diameter less than δ to a piece of diameter at most ε (our own).

**Problem.** The image of a totally bounded metric space under a uniformly continuous map is totally bounded. Mere continuity does not suffice.

**How the definition helps.** Cover the space by finitely many pieces of diameter less than δ; their images are finitely many pieces of diameter at most ε (our own). Using ε/2 in place of ε gives diameters below ε (our own). The continuous map x ↦ 1/x sends the totally bounded set (0, 1) onto an unbounded set (our own).

**nLab:** [uniformly continuous map](https://ncatlab.org/nlab/show/uniformly+continuous+map). It says: “the distance in Y between f(a) and f(b) is less than ε whenever the distance in X between a and b is less than δ”

**Sources:** none listed. No primary source with a working link was found.

### A uniform cover radius turns sequential compactness into compactness

**Remember:** One radius small enough that every ball fits in one set.

*Makes the theorem clean to state or prove.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A Lebesgue number for an open cover of a metric space is a radius δ &gt; 0 with one property. Every ball of radius δ lies inside a single member of the cover.

**Problem.** Every sequentially compact metric space is compact. That is, if every sequence has a subsequence converging in the space, every open cover has a finite subcover.

**How the definition helps.** Cover the space by finitely many balls of radius δ, and replace each ball by a cover member that contains it. This gives a finite subcover, and the Lebesgue number lemma gives δ from sequential compactness. Finitely many δ-balls suffice, since otherwise some sequence has all terms at least δ apart (our own).

**nLab:** [sequentially compact metric spaces are equivalently compact metric spaces](https://ncatlab.org/nlab/show/sequentially+compact+metric+spaces+are+equivalently+compact+metric+spaces). It says: “there exists a positive real number δ &gt; 0 such that for each x ∈ X there is iₓ ∈ I such that Bₓ°(δ) ⊂ Uᵢₓ.”

**Sources:** none listed. No primary source with a working link was found.

### Compact sets have a positive gap from disjoint closed sets

**Remember:** Distance to a closed set is positive off it, and continuous.

*Rules out counterexamples.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** The distance between nonempty sets A and B is the infimum over a in A of d(a, B), the distance from a to B. The function a ↦ d(a, B) is continuous, and it is positive at every point outside the closed set B (our own).

**Problem.** A nonempty compact set and a disjoint nonempty closed set have positive distance in any metric space. Two disjoint closed sets need not have positive distance.

**How the definition helps.** A positive continuous function on a compact set has a positive minimum, so d(A, B) &gt; 0 (our own). Without compactness the infimum can be zero. The horizontal axis and the graph of y = e⁻ˣ are disjoint closed sets at distance zero (our own).

**Paper or page:** [Distance between Disjoint Compact Set and Closed Set in Metric Space is Positive](https://proofwiki.org/wiki/Distance_between_Disjoint_Compact_Set_and_Closed_Set_in_Metric_Space_is_Positive). It says: “Then d(A, B) &gt; 0, where d(A, B) is the distance between A and B.”

**Sources:** none listed. No primary source with a working link was found.

### Finite grids explain why closed bounded Euclidean sets are compact

**Remember:** A fine finite grid of tiny cubes covers any bounded box.

*Rules out counterexamples.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric space is totally bounded if, for every ε &gt; 0, finitely many pieces of diameter less than ε cover it. In a bounded box in Euclidean space, a fine enough finite grid of small cubes gives such pieces (our own).

**Problem.** In Euclidean space every bounded set is totally bounded, so every closed bounded set is compact. In general metric spaces a closed bounded set can fail to be compact.

**How the definition helps.** A bounded set lies in a box, so the grid shows that it is totally bounded (our own). A closed subset of Euclidean space is complete, and a complete totally bounded metric space is compact (our own). An infinite set with all distances one is closed and bounded but not totally bounded, so it is not compact (our own).

**nLab:** [totally bounded space](https://ncatlab.org/nlab/show/totally+bounded+space). It says: “A subspace of a Cartesian space is totally bounded if and only if it is bounded.”

**Paper or page:** [Bounded Subspace of Euclidean Space is Totally Bounded](https://proofwiki.org/wiki/Bounded_Subspace_of_Euclidean_Space_is_Totally_Bounded). It says: “Then M is totally bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Sequential closedness keeps closed parts of a compact metric space compact

**Remember:** Subsequences converge somewhere; closed parts keep their limits.

*True by definition.* MSC 54E45 (Compact (locally compact) metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric space is sequentially compact if each sequence has a subsequence converging in the space. A subset is sequentially closed if it contains the limit of every convergent sequence of its points.

**Problem.** Every closed subset of a compact metric space is compact.

**How the definition helps.** A sequence in the closed subset has a subsequence converging in the whole space, and closedness keeps its limit in the subset (our own). In metric spaces these sequence tests agree with compactness and closedness (our own).

**nLab:** [sequentially compact metric spaces are equivalently compact metric spaces](https://ncatlab.org/nlab/show/sequentially+compact+metric+spaces+are+equivalently+compact+metric+spaces). It says: “We need to show that it has a sub-sequence which converges.”

**Paper or page:** [Closed Subspace of Compact Space is Compact](https://proofwiki.org/wiki/Closed_Subspace_of_Compact_Space_is_Compact). It says: “A closed subspace of a compact topological space is also compact.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy sequence classes extend uniformly continuous maps to the completion

**Remember:** A new point is a Cauchy sequence; map it term by term.

*True by definition.* MSC 54E50 (Complete metric spaces), 54E40. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A point of the completion of X is a class of Cauchy sequences in X. Two sequences are equivalent when their termwise distances tend to zero. The distance between classes is the limit of the termwise distances.

**Problem.** Every uniformly continuous map into a complete metric space extends uniquely and uniformly continuously to the metric completion of its domain.

**How the definition helps.** Send a class to the limit of the images of a representative (our own). Uniform continuity makes the image sequence Cauchy, so it converges in the complete target, and equivalent sequences give the same limit (our own). Halving the tolerance makes the extension uniformly continuous, and density forces any continuous extension to agree (our own).

**Paper or page:** [Theorem 3.4. (Extending uniformly continuous functions)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then there exists a unique continuous function ψ̃: M → N such that”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy sequences supply their own limits in the completion

**Remember:** Let each Cauchy sequence name the point it needs.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A point of the completion is a class of Cauchy sequences, where sequences whose termwise distances tend to zero are identified. The distance between classes is the limit of termwise distances. Each original point is the class of its constant sequence.

**Problem.** The classes form a complete metric space containing the original space isometrically and densely. Each original Cauchy sequence converges to its own class.

**How the definition helps.** The distance from the constant class of xₘ to the class of (xₙ) is the limit of d(xₘ, xₙ) (our own). The Cauchy condition makes it small for large m, so each sequence converges to its class, and the original points are dense (our own). For a Cauchy sequence of classes, original points within 1/n of the nth class have the limit as their class (our own).

**Paper or page:** [Completion Theorem (Metric Space)/Lemma 3](https://proofwiki.org/wiki/Completion_Theorem_(Metric_Space)/Lemma_3). It says: “M̃ = (Ã, d̃) is a completion of M.”

**Sources:** none listed. No primary source with a working link was found.

### Closure in a Banach space gives a complete metric completion

**Remember:** Embed in a complete space, then take the closure.

*True by definition.* MSC 54E50 (Complete metric spaces), 46E15. arXiv math.GN, math.MG. Level 2: later undergraduate.

**Definition.** Fix x₀ in X and send each x to the bounded function y ↦ d(x,y) − d(x₀,y). This map keeps distances in the supremum norm (our own), and the completion of X is the closure of its image among bounded real functions.

**Problem.** This completion is a complete metric space that contains a dense copy of X with its original distances.

**How the definition helps.** A closed subset of a complete space is complete, and the image is dense in its closure (our own). The map keeps distances because the triangle inequality bounds \|d(x,y) − d(z,y)\| by d(x,z), and y = z attains the bound (our own).

**Wikipedia:** [Complete metric space](https://en.wikipedia.org/wiki/Complete_metric_space), [Kuratowski embedding](https://en.wikipedia.org/wiki/Kuratowski_embedding). It says: “Let (X, d) be a complete metric space. If A ⊆ X is a closed set, then A is also complete.”

**Sources:** none listed. No primary source with a working link was found.

### Completely metrizable, not complete, makes Gδ subsets Polish

**Remember:** Polish asks only that some complete metric exists, not the given one.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 54H05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A space is completely metrizable if at least one complete metric gives its topology, even when the metric in hand is not complete. For example, (0, 1) is homeomorphic to ℝ. A Polish space is a separable completely metrizable space.

**Problem.** A subspace of a completely metrizable space is completely metrizable if and only if it is a Gδ set, a countable intersection of open sets. So open subsets of Polish spaces, and the irrational numbers, are Polish spaces.

**How the definition helps.** Alexandrov's theorem says that the subspaces with a compatible complete metric are exactly the Gδ subsets (our own). Open sets are Gδ, the irrationals are Gδ because the rationals are countable, and subspaces of separable metric spaces are separable (our own).

**Wikipedia:** [Polish space](https://en.wikipedia.org/wiki/Polish_space), [Completely metrizable space](https://en.wikipedia.org/wiki/Completely_metrizable_space). It says: “The space (0,1) ⊂ R, the open unit interval, is not a complete metric space with its usual metric inherited from R, but it is completely metrizable since it is homeomorphic to R.”

**Sources:** none listed. No primary source with a working link was found.

### Finite small covers give Cauchy subsequences

**Remember:** Keep infinitely many terms in one small piece at each scale.

*True by definition.* MSC 54E50 (Complete metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric space is totally bounded if, for every ε &gt; 0, finitely many pieces of diameter less than ε cover it. So at every scale, one piece holds infinitely many terms of any given sequence (our own).

**Problem.** Every sequence in a totally bounded metric space has a Cauchy subsequence. If the space is also complete, every sequence has a convergent subsequence.

**How the definition helps.** At step n, choose a piece of diameter below 1/n that holds infinitely many of the remaining terms, and keep only those terms (our own). Taking one kept term per step, with increasing indices, gives a subsequence whose tail from step n lies in one piece (our own). So it is Cauchy, and in a complete space it converges (our own).

**Paper or page:** [Complete and Totally Bounded Metric Space is Sequentially Compact](https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact). It says: “Let M be complete and totally bounded. Then M is sequentially compact.”

**Sources:** none listed. No primary source with a working link was found.

### Nowhere dense singletons rule out a complete metric on the rationals

**Remember:** Each rational point is nowhere dense, yet countably many fill ℚ.

*Rules out counterexamples.* MSC 54E50 (Complete metric spaces), 54E52. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A set is nowhere dense if its closure contains no nonempty open set. In the rationals each single point is nowhere dense, since it is closed and no open set is a single point (our own).

**Problem.** No complete metric on the rational numbers has the same open sets as the usual distance.

**How the definition helps.** The rationals are a countable union of these nowhere dense points (our own). The Baire category theorem forbids this in a nonempty complete metric space (our own). A metric with the same open sets has the same nowhere dense sets (our own).

**Wikipedia:** [Baire category theorem](https://en.wikipedia.org/wiki/Baire_category_theorem). It says: “every nonempty complete metric space with no isolated point is uncountable.”

**Sources:** none listed. No primary source with a working link was found.

### Shrinking diameters force a unique point in nested closed sets

**Remember:** Shrinking diameters squeeze nested closed sets to a single point.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces). arXiv math.GN. Level 2: later undergraduate.

**Definition.** The diameter of a nonempty set is the supremum of distances between its points. When nested sets have diameters tending to zero, any choice of one point from each set is a Cauchy sequence (our own).

**Problem.** A metric space is complete exactly when every nested sequence of nonempty closed sets with diameters tending to zero has exactly one common point.

**How the definition helps.** Completeness gives the chosen sequence a limit, closedness keeps it in every set, and two common points would be at distance zero (our own). Conversely, the closures of the tails of a Cauchy sequence are nested with shrinking diameters, and their common point is its limit (our own).

**Wikipedia:** [Cantor's intersection theorem](https://en.wikipedia.org/wiki/Cantor%27s_intersection_theorem). It says: “the intersection of any nested family of non-empty closed subsets whose diameters tend to zero is non-empty”

**Paper or page:** [Cantor's Intersection Theorem](https://proofwiki.org/wiki/Cantor's_Intersection_Theorem). It says: “there exists a unique x ∈ A such that”

**Sources:** none listed. No primary source with a working link was found.

### The extension property identifies any two metric completions

**Remember:** Every distance-preserving map from X extends uniquely over the completion.

*True by definition.* MSC 54E50 (Complete metric spaces), 54E40. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A metric completion of X is a complete space containing X as a dense isometric copy. Each distance-preserving map from X into a complete space extends to exactly one distance-preserving map on the completion.

**Problem.** Any two metric completions are related by a unique distance-preserving bijection that fixes the original points.

**How the definition helps.** Extend the inclusion of X into each completion over the other (our own). Both composites extend the identity of X, so by uniqueness they are identities (our own). Building such extensions uses limits of original points, whose distances converge (our own).

**Wikipedia:** [Complete metric space](https://en.wikipedia.org/wiki/Complete_metric_space). It says: “The space M′ is determined up to isometry by this property”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided norm bounds transfer completeness from Euclidean space

**Remember:** Two bounds let Cauchy sequences and their limits pass between norms.

*True by definition.* MSC 54E50 (Complete metric spaces), 46B20. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** Two norms are equivalent if each is at most a constant times the other. Then a sequence is Cauchy, or converges, in one norm exactly when it does in the other (our own).

**Problem.** Every finite-dimensional real or complex normed space is complete. Every finite-dimensional subspace of a normed space is therefore closed.

**How the definition helps.** In finite dimensions every norm is equivalent to the Euclidean norm on coordinates, which is complete, so the given norm is complete (our own). A complete subspace contains its limits, so each finite-dimensional subspace is closed (our own).

**Paper or page:** [Finite Dimensional Subspace of Normed Vector Space is Closed](https://proofwiki.org/wiki/Finite_Dimensional_Subspace_of_Normed_Vector_Space_is_Closed). It says: “Then W is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted distances make countable products of complete spaces complete

**Remember:** Cap each coordinate below one, and halve the weight each time.

*Makes the theorem clean to state or prove.* MSC 54E50 (Complete metric spaces), 54E35. arXiv math.GN. Level 2: later undergraduate.

**Definition.** The product metric on a countable product adds the capped coordinate distances dₙ/(1 + dₙ), each below one, with weights 1/2ⁿ. So the coordinates beyond N contribute at most 1/2ᴺ in total (our own).

**Problem.** A countable product of complete metric spaces is complete for this weighted product metric.

**How the definition helps.** A Cauchy sequence is Cauchy in each coordinate, since d/(1 + d) tends to zero exactly when d does, so each coordinate converges (our own). Control the first N coordinates directly and bound the rest by 1/2ᴺ (our own). The triangle inequality holds because t ↦ t/(1 + t) is increasing and subadditive (our own).

**Wikipedia:** [Metric space](https://en.wikipedia.org/wiki/Metric_space). It says: “a metric on the topological product of countably many metric spaces can be obtained using the metric”

**Sources:** none listed. No primary source with a working link was found.

### Defining Baire spaces by their conclusion unifies two category theorems

**Remember:** Countably many dense open conditions still hold on a dense set.

*Makes the theorem clean to state or prove.* MSC 54E52 (Baire category, Baire spaces). arXiv math.GN. Level 2: later undergraduate.

**Definition.** A topological space is Baire if every countable intersection of dense open subsets is dense.

**Problem.** Complete metric spaces and locally compact Hausdorff spaces are Baire, a property that the open mapping theorem and the uniform boundedness principle use. Every nonempty complete metric space without isolated points is uncountable.

**How the definition helps.** The Baire category theorem proves the dense-intersection property for both classes, and applications then use only that property (our own). Without isolated points the complements of single points are dense and open, so a countable space would make their intersection empty (our own).

**Wikipedia:** [Baire space](https://en.wikipedia.org/wiki/Baire_space), [Baire category theorem](https://en.wikipedia.org/wiki/Baire_category_theorem). It says: “According to the Baire category theorem, compact Hausdorff spaces and complete metric spaces are examples of Baire spaces.”

**Sources:**

- [Baire, R. (1899). Sur les fonctions de variables réelles. Annali di Matematica Pura ed Applicata 3, 1–123.](https://doi.org/10.1007/BF02419243)

### Residual sets let countably many generic properties hold at once

**Remember:** Countably many open dense conditions still leave a dense set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E52 (Baire category, Baire spaces), 37C20. arXiv math.GN, math.DS. Level 2: later undergraduate.

**Definition.** A property of maps in Cʳ(M, N) is generic if it holds on a residual set. A residual set contains a countable intersection of dense open sets.

**Problem.** In Cʳ(M, N) with the Whitney Cʳ topology, a countable intersection of generic properties is generic. Every generic property holds on a dense set of maps.

**How the definition helps.** Countably many countable lists of dense open sets combine into one countable list, so a countable intersection of residual sets is residual (our own). The space Cʳ(M, N) is a Baire space, so residual sets are dense.

**Wikipedia:** [Generic property](https://en.wikipedia.org/wiki/Generic_property). It says: “The space Cʳ(M, N), of Cʳ mappings between M and N, is a Baire space, hence any residual set is dense. This property of the function space is what makes generic properties typical.”

**Sources:** none listed. No primary source with a working link was found.

### Linear continua are exactly the connected ordered spaces

**Remember:** No gaps and no jumps: exactly the connected orders.

*Makes the theorem clean to state or prove.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54D05. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A linear continuum is a totally ordered set with more than one element and with no jumps and no gaps. Between any two elements lies a third, and every nonempty subset bounded above has a least upper bound.

**Problem.** A totally ordered set with more than one element is connected in its order topology exactly when it is a linear continuum. Continuous real-valued maps from a linear continuum have the intermediate value property.

**How the definition helps.** A jump (two adjacent elements) or a gap (a bounded set without a supremum) splits the order into two open pieces (our own). So a connected order is a linear continuum (our own). Conversely, the proof that intervals are connected uses only density and least upper bounds, and connected images in ℝ are intervals (our own).

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

**Definition.** A Peano continuum is a nonempty compact connected metric space that is locally connected: every point has arbitrarily small connected neighbourhoods.

**Problem.** The Hahn–Mazurkiewicz theorem: a Hausdorff space is a continuous image of \[0, 1\] exactly when it is a Peano continuum.

**How the definition helps.** The Hahn–Mazurkiewicz theorem builds a continuous surjection from \[0, 1\] onto every Peano continuum (our own). Conversely, a Hausdorff continuous image of \[0, 1\] is compact, connected, locally connected and second countable (our own). Compact Hausdorff spaces are metrizable exactly when they are second countable (our own).

**Wikipedia:** [Space-filling curve](https://en.wikipedia.org/wiki/Space-filling_curve), [Continuum (topology)](https://en.wikipedia.org/wiki/Continuum_%28topology%29). It says: “A non-empty Hausdorff topological space is a continuous image of the unit interval if and only if it is a compact, connected, locally connected, second-countable space.”

**Sources:**

- [Mazurkiewicz, S. (1920). Sur les lignes de Jordan. Fundamenta Mathematicae 1, 166–209.](https://doi.org/10.4064/fm-1-1-166-209)

### Defining dimension by overlaps of open covers makes it topological

**Remember:** On a line, covers need only double overlaps; in the plane, triple.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F45 (Dimension theory in general topology), 55M10. arXiv math.GN, math.AT. Level 2: later undergraduate.

**Definition.** An open refinement of a cover is a cover by open sets, each inside some original member. For nonempty X, the covering dimension is the least n letting every open cover refine to one with each point in at most n+1 sets. It is infinite if no such n exists.

**Problem.** For distinct positive integers m and n, ℝᵐ and ℝⁿ are not homeomorphic. They have the same cardinality, and one admits a continuous surjection onto the other.

**How the definition helps.** Homeomorphisms carry open covers, refinements and overlap counts to the same, so covering dimension is a topological invariant (our own). Lebesgue's covering theorem gives ℝⁿ dimension n, so ℝᵐ and ℝⁿ are not homeomorphic when m ≠ n (our own).

**Wikipedia:** [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension), [Hausdorff dimension](https://en.wikipedia.org/wiki/Hausdorff_dimension), [Invariance of domain](https://en.wikipedia.org/wiki/Invariance_of_domain), [Topological manifold](https://en.wikipedia.org/wiki/Topological_manifold). It says: “It is impossible to map two dimensions onto one in a way that is continuous and continuously invertible. The topological dimension, also called Lebesgue covering dimension, explains why.”

**Sources:**

- [L. E. J. Brouwer, Beweis der Invarianz des n-dimensionalen Gebiets, Mathematische Annalen 71 (1912) 305–313](https://doi.org/10.1007/bf01456846)

### Asking curves to be simple makes them split the plane in two

**Remember:** A loop that never crosses itself has one inside and one outside.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F50 (Topological spaces of dimension \\(\\leq 1\\); curves, dendrites), 54D05. arXiv math.GN, math.GT. Level 2: later undergraduate.

**Definition.** A Jordan curve, or simple closed curve, is the image of a continuous injective map from the circle into the plane. So it is a closed loop that never crosses itself.

**Problem.** The complement of a Jordan curve in the plane has exactly two connected components. One is bounded, the other is unbounded, and the curve is the boundary of each.

**How the definition helps.** The Jordan curve theorem proves the two components and their common boundary for every injective loop, not only for polygons (our own). A figure eight is not injective and leaves three components (our own).

**Wikipedia:** [Jordan curve theorem](https://en.wikipedia.org/wiki/Jordan_curve_theorem). It says: “asserts that every simple closed curve in the plane (known as a Jordan curve) divides the plane into two regions”

**Sources:**

- [Veblen, O. (1905). Theory on plane curves in non-metrical analysis situs. Transactions of the American Mathematical Society 6(1), 83–98.](https://doi.org/10.1090/s0002-9947-1905-1500697-4)

### Simple curves cannot fill a square

**Remember:** A curve that never revisits a point cannot fill a square.

*Rules out counterexamples.* MSC 54F50 (Topological spaces of dimension \\(\\leq 1\\); curves, dendrites), 54F45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** A simple curve is the image of an interval or a circle under an injective continuous map. So a simple curve does not cross itself.

**Problem.** A simple curve cannot fill a region of the plane. In particular, no simple curve is the whole unit square.

**How the definition helps.** Injectivity makes each compact subarc a homeomorphic copy of an interval, which has empty interior in the plane by invariance of dimension (our own). The domain is a countable union of compact subarcs, whose images are closed and nowhere dense (our own). So by the Baire category theorem they cannot fill a region (our own), and Peano's curve shows that injectivity is needed.

**Wikipedia:** [Space-filling curve](https://en.wikipedia.org/wiki/Space-filling_curve), [Curve](https://en.wikipedia.org/wiki/Curve). It says: “A non-self-intersecting continuous curve cannot fill the unit square because that will make the curve a homeomorphism from the unit interval onto the unit square”

**Sources:**

- [G. Peano, Sur une courbe, qui remplit toute une aire plane, Mathematische Annalen 36 (1890) 157–160](https://doi.org/10.1007/BF01199438)
- [W. F. Osgood, A Jordan curve of positive area, Trans. AMS 4 (1903) 107–112](https://doi.org/10.1090/s0002-9947-1903-1500628-5)

### Five topological conditions characterize the Cantor set (Brouwer)

**Remember:** Compact metric dust with no isolated points is the Cantor set.

*Makes the theorem clean to state or prove.* MSC 54F65 (Topological characterizations of particular spaces), 54D05, 54F45. arXiv math.GN. Level 2: later undergraduate.

**Definition.** Brouwer's five conditions on a space are: nonempty, compact, metrizable, perfect (no point is isolated) and totally disconnected (no connected subset has two points).

**Problem.** Brouwer's theorem says that any two nonempty, perfect, compact, totally disconnected metrizable spaces are homeomorphic. So the Cantor set is the only such space up to homeomorphism.

**How the definition helps.** Brouwer's theorem gives a homeomorphism from any space with these five conditions to the middle-thirds Cantor set, which has them. Composing two such homeomorphisms identifies any pair (our own).

**Wikipedia:** [Cantor space](https://en.wikipedia.org/wiki/Cantor_space). It says: “A topological space is a Cantor space if and only if it is non-empty, perfect, compact, totally disconnected, and metrizable.”

**Sources:**

- [Brouwer, L. E. J. (1910). On the structure of perfect sets of points. Proceedings of the Koninklijke Akademie van Wetenschappen 12, 785–794.](https://dwc.knaw.nl/DL/publications/PU00013496.pdf)

### Perfect sets let closed sets split as perfect plus countable

**Remember:** Strip isolated points until nothing changes; a perfect core remains.

*Makes the theorem clean to state or prove.* MSC 54H05 (Descriptive set theory (topological aspects of Borel, analytic, projective, etc. sets)), 03E15. arXiv math.GN, math.LO. Level 2: later undergraduate.

**Definition.** A subset of a space is perfect if it is closed and has no isolated points, so removing its isolated points leaves it unchanged (our own).

**Problem.** The Cantor–Bendixson theorem says that every closed subset of a Polish space is the disjoint union of a perfect set and a countable set. So no closed set of reals is a counterexample to the continuum hypothesis.

**How the definition helps.** The perfect part is the set of points each of whose neighbourhoods meets the closed set in uncountably many points (our own). A countable base covers the rest by countably many countable pieces (our own). Nonempty perfect sets in a Polish space have the size of the continuum, so closed sets of reals are countable or that large (our own).

**Wikipedia:** [Perfect set property](https://en.wikipedia.org/wiki/Perfect_set_property), [Perfect set](https://en.wikipedia.org/wiki/Perfect_set). It says: “any closed subset of X can be written uniquely as the disjoint union of a perfect set and a countable set.”

**Sources:**

- [Bendixson, I. (1883). Quelques théorèmes de la théorie des ensembles de points. Acta Mathematica 2, 415–429.](https://doi.org/10.1007/bf02415227)

### In topological groups and vector spaces, closed points already give Hausdorff

**Remember:** In a group, separating the identity from one point separates all pairs.

*True by definition.* MSC 54H11 (Topological groups (topological aspects)), 54D10, 46A03. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** A topological group is a group with a topology in which multiplication and inversion are continuous. So each translation x ↦ gx is a homeomorphism, and the space looks the same at every point.

**Problem.** A topological group, or a topological vector space, is Hausdorff as soon as single points are closed.

**How the definition helps.** By homogeneity it suffices to separate the identity e from one point x ≠ e. Our own sketch: take a neighbourhood U of e missing x, and V with V V⁻¹ ⊆ U; then V and xV are disjoint. A topological vector space is a topological group under addition.

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “Sometimes topological groups are understood to be Hausdorff (e.g. Bredon 72, p. 1).”

**Paper or page:** [Topological Group is T1 iff T2](https://proofwiki.org/wiki/Topological_Group_is_T1_iff_T2), [Topological Vector Space is Hausdorff iff T1](https://proofwiki.org/wiki/Topological_Vector_Space_is_Hausdorff_iff_T1). It says: “(1): (X, τ) is Hausdorff (2): (X, τ) is a T₁ space”

**Sources:**

- [ProofWiki, Topological Group is T1 iff T2](https://proofwiki.org/wiki/Topological_Group_is_T1_iff_T2)
- [ProofWiki, Topological Vector Space is Hausdorff iff T1](https://proofwiki.org/wiki/Topological_Vector_Space_is_Hausdorff_iff_T1)

### Defining ultrafilters by complement choice makes images of ultrafilters ultrafilters

**Remember:** An ultrafilter always picks a set or its complement.

*True by definition.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D80. arXiv math.GN. Level 3: graduate.

**Definition.** An ultrafilter on a set is a proper filter that contains each subset or its complement. A proper filter is closed under supersets and finite intersections and omits the empty set. The image filter under f holds the sets whose inverse images lie in the filter.

**Problem.** The image filter of an ultrafilter under any function is an ultrafilter.

**How the definition helps.** Inverse images send a set and its complement to a set and its complement (our own). So the ultrafilter picks one preimage, and the image filter holds the matching set (our own). Inverse images also preserve supersets, finite intersections and the empty set, so the image filter is proper (our own).

**Paper or page:** [Image of Ultrafilter is Ultrafilter](https://proofwiki.org/wiki/Image_of_Ultrafilter_is_Ultrafilter). It says: “Then the image filter f\[ℱ\] is an ultrafilter on Y.”

**Sources:** none listed. No primary source with a working link was found.

### With the complement test, ultrafilters on disjoint unions live on one summand

**Remember:** An ultrafilter chooses exactly one piece of a finite partition.

*True by definition.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 54D80. arXiv math.GN. Level 3: graduate.

**Definition.** An ultrafilter is a proper filter that contains, for each subset, either that subset or its complement. A proper filter is closed under supersets and finite intersections and omits the empty set.

**Problem.** Each ultrafilter on a disjoint union X + Y comes from a unique ultrafilter on X or on Y. It is the image of that ultrafilter under the inclusion map.

**How the definition helps.** X and Y are complements in X + Y, so the ultrafilter contains exactly one of them, say X. The sets of the ultrafilter that lie in X form an ultrafilter on X (our own). Its image under the inclusion is the original, since a set lies in the ultrafilter exactly when its part in X does (our own).

**nLab:** [ultrafilter](https://ncatlab.org/nlab/show/ultrafilter). It says: “each ultrafilter U on X + Y must contain exactly one of X, Y”

**Sources:** none listed. No primary source with a working link was found.

### Compact families have compact unions

**Remember:** To cover a compact family, cover each member finitely first.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The upper Vietoris topology lives on the nonempty compact subsets of X. For each open U ⊆ X, it has a basic open set of all nonempty compact subsets that lie inside U.

**Problem.** The union of a compact family of compact subsets is compact, even for the upper Vietoris topology alone.

**How the definition helps.** Given an open cover of the union, each member of the family lies in a finite union U of cover sets (our own). The basic set for U contains that member (our own). Compactness of the family picks finitely many such U, and their cover sets together cover the union (our own).

**Paper or page:** [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2). It says: “If $\\mathcal{A}\\subset (K<sub>Y</sub>(X),\\tau<sub>v</sub>)$ is compact, then so is $K:=\\bigcup\_{A\\in\\mathcal{A}}A\\subset X$.”

**Sources:**

- [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2)

### Compact misses make Fell spaces compact

**Remember:** Hit an open set, miss a compact set.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The Fell topology on the closed subsets of X has two kinds of subbasic open sets. One kind holds the closed sets that meet a given open set, and the other holds those that miss a given compact set.

**Problem.** The Fell space of all closed subsets of a locally compact Hausdorff space is compact Hausdorff.

**How the definition helps.** In the one-point compactification, a closed set misses compact K exactly when, with infinity added, it lies in the complement of K (our own). So adding infinity identifies the Fell space with a closed subspace of a Vietoris space (our own). That Vietoris space of a compact Hausdorff space is compact Hausdorff (our own).

**Wikipedia:** [Hypertopology](https://en.wikipedia.org/wiki/Hypertopology). It says: “the Fell topology is always compact”

**Sources:**

- [J. M. G. Fell, A Hausdorff topology for the closed subsets of a locally compact non-Hausdorff space (1962)](https://doi.org/10.1090/S0002-9939-1962-0139135-6)

### Expansions give largest Hausdorff intermediates

**Remember:** Intersect the two expansions to keep every allowed point.

*True by definition.* MSC 54B20 (Hyperspaces in general topology), 68U05. arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** The Hausdorff distance between nonempty compact plane sets is the least r such that each lies within distance r of the other. For A, B at distance one and t in \[0,1\], Mₜ is the set of points within t of A and 1−t of B.

**Problem.** The set Mₜ is at Hausdorff distance t from A and 1 − t from B. It contains every compact set with these two distances.

**How the definition helps.** Every compact set at distances t and 1 − t from A and B lies in Mₜ (our own). The point a fraction t along each nearest-point segment from A to B, or B to A, lies in Mₜ (our own). This gives the bounds t and 1 − t, and the triangle inequality makes them exact (our own).

**Paper or page:** [Between Shapes, Using the Hausdorff Distance](https://arxiv.org/abs/2009.14719v2). It says: “Sα is the maximal set that satisfies dH(A, Sα) = α and dH(B, Sα) = 1 − α.”

**Sources:**

- [Between Shapes, Using the Hausdorff Distance, Lemma 2](https://arxiv.org/abs/2009.14719v2)

### Proper maps act continuously on Fell spaces

**Remember:** A proper map pulls each compact miss test back to another.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The Fell topology on closed subsets is generated by hit tests, meeting a given open set, and miss tests, missing a given compact set. A continuous map is proper if every compact set has compact inverse image, so it pulls a miss test back to a miss test.

**Problem.** A proper map between locally compact Hausdorff spaces induces a continuous map on Fell hyperspaces by taking images of closed sets.

**How the definition helps.** An image f(C) misses K exactly when C misses the compact set f⁻¹(K) (our own). It meets an open U exactly when C meets the open set f⁻¹(U) (our own). Proper maps into locally compact Hausdorff spaces are closed, so f(C) is closed and the induced map is defined (our own).

**Paper or page:** [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1). It says: “If Y is locally compact and f is proper, then f̃: CL₍F⁺₎(X) → CL₍F⁺₎(Y) is continuous.”

**Sources:**

- [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1)

### Vietoris hit tests preserve image continuity

**Remember:** Meeting an open set can be tested before taking closure.

*Rules out counterexamples. Confidence: medium.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The lower Vietoris topology on nonempty closed subsets is generated by hit tests: for each open U, the closed sets that meet U. A map f induces the map that sends a closed set C to the closure of f(C).

**Problem.** Suppose singletons in X are closed, and let Y be any topological space. A map from X to Y is continuous exactly when its induced map on closed sets is continuous for the lower Vietoris topologies.

**How the definition helps.** The closure of f(C) meets an open U exactly when C meets f⁻¹(U), so continuous maps pull hit tests back (our own). Conversely, with closed singletons, x ↦ {x} is continuous, and x lies in f⁻¹(U) exactly when the closure of {f(x)} meets U (our own). A two-point indiscrete space shows why closed singletons matter: its identity to a discrete space is discontinuous, but the induced map is continuous (our own).

**Paper or page:** [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1). It says: “f is continuous if and only if f̃: CLᵥ⁻(X) → CLᵥ⁻(Y) is continuous.”

**Sources:**

- [Some notes on induced functions and group actions on hyperspaces](https://arxiv.org/abs/2104.12904v1)

### Defining proper maps by compact preimages makes them extend to one-point compactifications

**Remember:** Pulling back a compact complement gives a neighborhood of infinity.

*True by definition.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 54D35. arXiv math.GN. Level 3: graduate.

**Definition.** A continuous map is proper if the inverse image of every compact set is compact. So it pulls each complement of a compact set back to a complement of a compact set.

**Problem.** Every proper map between locally compact Hausdorff spaces extends continuously between their one-point compactifications, sending infinity to infinity.

**How the definition helps.** A basic neighbourhood of infinity is infinity together with the complement of a compact K (our own). Its preimage is infinity together with the complement of the compact set f⁻¹(K), so it is open (our own). On the original domain the extension is the given continuous map (our own).

**Wikipedia:** [Proper map](https://en.wikipedia.org/wiki/Proper_map). It says: “a function between topological spaces is called proper if inverse images of compact subsets are compact.”

**Sources:** none listed. No primary source with a working link was found.

### Proper maps make the space of ends a functor

**Remember:** An end picks a way out past every compact set.

*Rules out counterexamples. Confidence: medium.* MSC 54C10 (Special maps on topological spaces (open, closed, perfect, etc.)), 55P57. arXiv math.GN, math.GT. Level 3: graduate.

**Definition.** An end of X picks, for each compact K ⊆ X, one connected component of the closure of X ∖ K, compatibly as K grows. The end space has the topology of a product of these discrete component sets (our own). A continuous map is proper if every compact set has compact preimage.

**Problem.** A proper map f : X → Y induces a continuous map e(X) → e(Y), and this respects composition. So the space of ends is a functor on spaces and proper maps.

**How the definition helps.** Given an end of X and a compact K in Y, take its component outside the compact set f⁻¹(K) (our own). By continuity it lands in one component of the closure of Y ∖ K, giving a continuous map that respects composition (our own). The constant map ℝ → {0} is not proper, and ℝ has two ends while a point has none (our own).

**nLab:** [proper homotopy theory](https://ncatlab.org/nlab/show/proper+homotopy+theory). It says: “The assignment sending X to e(X) cannot be functorial on the category of spaces and continuous maps, since the contracting map ℝ → {0} is continuous”

**Sources:**

- [Hans Freudenthal, Über die Enden topologischer Räume und Gruppen, Mathematische Zeitschrift 33 (1931) 692–713](https://doi.org/10.1007/BF01174375)

### Compact tests make evaluation continuous

**Remember:** Test one compact neighborhood to control nearby inputs together.

*Rules out counterexamples.* MSC 54C35 (Function spaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** The compact-open topology on continuous maps X → Y has subbasic sets {f ∣ f(K) ⊆ U} for compact K and open U. So one test controls a whole compact set of inputs.

**Problem.** Evaluation at a variable input is continuous for the compact-open topology when the domain is locally compact Hausdorff.

**How the definition helps.** When f(x) lies in an open U, local compactness gives a compact neighbourhood K of x inside f⁻¹(U) (our own). Every g with g(K) ⊆ U sends the interior of K into U, so evaluation is continuous at (x, f) (our own). Pointwise tests constrain only finitely many inputs, and a function can vanish at them yet spike next to them (our own).

**nLab:** [compact-open topology](https://ncatlab.org/nlab/show/compact-open+topology). It says: “given by (x,f) ↦ f(x) is continuous”

**Sources:**

- [Ralph H. Fox, On topologies for function spaces (1945)](https://doi.org/10.1090/S0002-9904-1945-08370-0)

### Hemicompactness metrizes compact-open function spaces

**Remember:** One sequence can track every compact test.

*Rules out counterexamples.* MSC 54C35 (Function spaces in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** A Hausdorff space is hemicompact if some sequence of compact sets K₁, K₂, … contains every compact subset inside one of its members. So countably many compact sets suffice to test uniform convergence on all compact sets (our own).

**Problem.** Continuous maps from a hemicompact space to a metric space form a metrizable space in the compact-open topology.

**How the definition helps.** Sum the supremum distances on each Kₙ, capped at one and weighted by 2⁻ⁿ, with empty Kₙ counting zero (our own). This metric gives uniform convergence on compact sets, which is the compact-open topology (our own). The rationals are not hemicompact: points xₙ outside Kₙ within 1/n of zero, with zero, form a compact set in no Kₙ (our own).

**Wikipedia:** [Hemicompact space](https://en.wikipedia.org/wiki/Hemicompact_space). It says: “defines a metric on C(X,M) which induces the compact-open topology.”

**Sources:** none listed. No primary source with a working link was found.

### Retracts preserve neighborhood extension

**Remember:** Extend into the larger target, then retract the result.

*True by definition.* MSC 54C55 (Absolute neighborhood extensor, absolute extensor, absolute neighborhood retract (ANR), absolute retract spaces (general properties)). arXiv math.GN. Level 3: graduate.

**Definition.** A space Y is an absolute neighbourhood extensor for metric spaces if it satisfies one extension condition. Every continuous map into Y from a closed subset A of a metric space extends continuously over some open neighbourhood of A.

**Problem.** A retract of a metrizable absolute neighbourhood extensor is an absolute neighbourhood extensor. So a retract of a metrizable absolute neighbourhood retract is again an absolute neighbourhood retract.

**How the definition helps.** Regard a map into the retract as a map into Y, extend it over a neighbourhood, and compose with the retraction (our own). Dugundji's theorem says that for metrizable spaces the neighbourhood retracts are exactly the neighbourhood extensors, which gives the second claim (our own).

**Wikipedia:** [Absolute neighborhood retract](https://en.wikipedia.org/wiki/Absolute_neighborhood_retract). It says: “For each metric space X and closed subset A ⊂ X, each A → Y extends to a neighborhood of A”

**Sources:**

- [James Dugundji, An extension of Tietze’s theorem (1951)](https://doi.org/10.2140/pjm.1951.1.353)

### Michael's selection theorem makes gluing paracompact spaces easy

**Remember:** Paracompact means every convex-valued lower semicontinuous map has a continuous selection.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54C65 (Selections in general topology), 54D20, 54B17. arXiv math.GN. Level 3: graduate.

**Definition.** Let F send each point x of X to a subset F(x) of a Banach space. F is lower semicontinuous if, for every open U, the points x where F(x) meets U form an open set. A continuous selection is a continuous s with s(x) ∈ F(x) for every x.

**Problem.** A pushout of paracompact Hausdorff spaces along a closed embedding is again paracompact Hausdorff.

**How the definition helps.** By Michael's theorem, a T₁ space is paracompact Hausdorff exactly when every lower semicontinuous map with nonempty closed convex values has a selection (our own). Select on the target of the attaching map, pull back to the closed subset, and extend by Michael's relative selection theorem (our own). The pushout is T₁ because both pieces are T₁ and the inclusion is closed (our own).

**nLab:** [colimits of paracompact Hausdorff spaces](https://ncatlab.org/nlab/show/colimits+of+paracompact+Hausdorff+spaces). It says: “The relevant result, due to Ernest Michael, is particularly well-adapted to the study of colimits.”

**Sources:**

- [Ernest Michael, Continuous selections I, Annals of Mathematics 63 (1956) 361–382](https://doi.org/10.2307/1969615)

### Components defined by clopen sets give compact Hausdorff component spaces clopen bases

**Remember:** A point's address is the list of clopen sets containing it.

*True by definition. Confidence: medium.* MSC 54D05 (Connected and locally connected spaces (general aspects)), 54B15. arXiv math.GN. Level 3: graduate.

**Definition.** The quasicomponent of x is the set of points that lie in exactly the same clopen sets, sets both closed and open, as x. In a compact Hausdorff space it equals the connected component of x.

**Problem.** Collapse each connected component of a compact Hausdorff space to a point. The resulting quotient space has a basis of clopen sets.

**How the definition helps.** Since quasicomponents are components, recording membership in each clopen set maps the component quotient injectively into a product of two-point discrete spaces (our own). This map is continuous, so compactness makes it an embedding into the Hausdorff product (our own). Basic sets of the product fix finitely many coordinates and are clopen, so they give a clopen basis (our own).

**Paper or page:** [Quasicomponent of Compact Hausdorff Space is Connected](https://proofwiki.org/wiki/Quasicomponent_of_Compact_Hausdorff_Space_is_Connected). It says: “Let C be a quasicomponent of ⟨X, τ⟩. Then C is connected.”

**Sources:** none listed. No primary source with a working link was found.

### Defining sober spaces as spaces of points of locales makes products sober

**Remember:** Points of a product locale are products of points.

*True by definition.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 18F70, 54B10. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** A space is sober if it is homeomorphic to the space of points of some locale. The points are the frame maps to {0,1}, those preserving finite meets and arbitrary joins, and each frame element a gives the open set of points sending a to 1.

**Problem.** Every product of sober spaces is sober.

**How the definition helps.** Taking points is right adjoint to taking open sets, so it preserves products (our own). So a product of point spaces is the point space of the product locale, and hence sober (our own).

**nLab:** [sober topological space](https://ncatlab.org/nlab/show/sober+topological+space). It says: “thus sober spaces are precisely those spaces that are the spaces of points of some locale”

**Sources:** none listed. No primary source with a working link was found.

### Defining complete regularity by the initial topology makes real tests detect continuity

**Remember:** Real functions see every open set, so they test continuity.

*True by definition.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54C05. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space X completely regular if its topology is the initial topology of its continuous real functions, the coarsest one making them all continuous. So the sets f⁻¹(V), for continuous real f on X and open V ⊆ ℝ, form a subbasis.

**Problem.** Let X be completely regular. A map g into X is continuous if f ∘ g is continuous for every continuous real function f on X.

**How the definition helps.** Since the sets f⁻¹(V) form a subbasis, g is continuous once each g⁻¹(f⁻¹(V)) is open (our own). That set is (f ∘ g)⁻¹(V), which is open because f ∘ g is continuous (our own).

**Wikipedia:** [Tychonoff space](https://en.wikipedia.org/wiki/Tychonoff_space). It says: “is completely regular if and only if it has the initial topology”

**Sources:** none listed. No primary source with a working link was found.

### Defining perfect normality by zero sets makes it pass to subspaces

**Remember:** Restrict the function, and its zero set restricts too.

*True by definition.* MSC 54D15 (Higher separation axioms (completely regular, normal, perfectly or collectionwise normal, etc.)), 54B05. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space perfectly normal if every closed set is a zero set, the set where some continuous real function is zero.

**Problem.** Every subspace of a perfectly normal space is perfectly normal.

**How the definition helps.** Zero sets restrict to zero sets, and closed sets of a subspace are restrictions of closed sets (our own). Precisely, a closed set of A is A ∩ F with F closed, and if F is the zero set of f, then A ∩ F is the zero set of f restricted to A (our own).

**Wikipedia:** [Normal space](https://en.wikipedia.org/wiki/Normal_space). It says: “Equivalently, X is perfectly normal if and only if every closed set is the zero set of a continuous function.”

**Sources:** none listed. No primary source with a working link was found.

### Regularity makes H-closed spaces compact

**Remember:** Finitely many closures cover, and regularity shrinks closures back inside.

*Rules out counterexamples.* MSC 54D25 (\`\`\\(P\\)-minimal'' and \`\`\\(P\\)-closed'' spaces). arXiv math.GN. Level 3: graduate.

**Definition.** A Hausdorff space is H-closed if every open cover has finitely many members whose closures cover the space. This is equivalent to being closed in every Hausdorff space that contains it.

**Problem.** A regular Hausdorff H-closed space is compact.

**How the definition helps.** Regularity gives an open cover whose members have closures inside members of the original cover (our own). H-closedness gives finitely many of these closures covering the space, so the matching original members form a finite subcover (our own). The unit interval with the rationals also made open is H-closed, not regular and not compact (our own).

**Wikipedia:** [H-closed space](https://en.wikipedia.org/wiki/H-closed_space). It says: “Every regular Hausdorff H-closed space is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Compact Hausdorff spaces are the algebras of the ultrafilter monad

**Remember:** Compact gives each ultrafilter a limit; Hausdorff makes that limit unique.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 54A20, 18C15. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** An ultrafilter converges to x if it contains every neighborhood of x. A space is compact exactly when every ultrafilter has a limit, and Hausdorff exactly when none has two. So in a compact Hausdorff space, taking limits is a function from ultrafilters to points.

**Problem.** Manes's theorem says that compact Hausdorff spaces are exactly the algebras of the ultrafilter monad β on Set, which sends a set S to the set βS of ultrafilters on S. So compact Hausdorff spaces form a monadic category over Set.

**How the definition helps.** Unique limits give a map βX → X, the algebra structure (our own). Manes's theorem shows that these limit maps are exactly the β-algebras and that continuous maps are exactly the algebra homomorphisms (our own).

**nLab:** [compact Hausdorff space](https://ncatlab.org/nlab/show/compact+Hausdorff+space), [relational beta-module](https://ncatlab.org/nlab/show/relational+beta-module), [ultrafilter](https://ncatlab.org/nlab/show/ultrafilter). It says: “compactness is equivalent to having every ultrafilter converge to some point, and Hausdorffness to having that point be unique.”

**Sources:**

- [Michael Barr, Relational algebras, in: Reports of the Midwest Category Seminar IV, Lecture Notes in Mathematics 137, Springer 1970, 39–55](https://www.math.mcgill.ca/barr/papers/relalgs.pdf)
- [Saunders Mac Lane, Categories for the Working Mathematician, Section VI.9, Graduate Texts in Mathematics 5, Springer (1971; Crossref gives 1978 for this DOI)](https://doi.org/10.1007/978-1-4757-4721-8)

### Compact spaces are small relative to closed inclusions of T₁-spaces

**Remember:** A compact map into a closed chain lands in one stage.

*Makes the theorem clean to state or prove.* MSC 54D30 (Compactness), 18C35, 18N40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A space Y is compact relative to closed T₁ inclusions if every map from Y into the union of a transfinite chain of closed inclusions of T₁ spaces, spaces whose points are closed, lands in some stage. Equivalently, hom(Y,−) preserves colimits of such chains.

**Problem.** Every compact space Y is compact relative to closed T₁ inclusions. So every map from Y into a CW complex factors through some skeleton.

**How the definition helps.** For a chain of inclusions, preserving the colimit means exactly that every map factors through some stage (our own). The compact smallness theorem gives this for compact Y and closed inclusions of T₁ spaces. A CW complex is the union of its skeleta, a chain of closed inclusions of T₁ spaces, so the CW claim follows (our own).

**nLab:** [compact object](https://ncatlab.org/nlab/show/compact+object). It says: “If Y ∈ Top is a compact topological space, then hom(Y,-) preserves colimits of functors mapping out of limit ordinals, provided that the arrows of the cocone diagram, X\_α → X\_β, are closed inclusions of T₁-spaces”

**Sources:**

- [Mark Hovey, Model Categories, Mathematical Surveys and Monographs 63, AMS (1999)](https://doi.org/10.1090/surv/063)

### Defining βX by its extension property makes it map onto every compactification

**Remember:** Extend the embedding, and density makes the extension onto.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 54C20. arXiv math.GN. Level 3: graduate.

**Definition.** A Stone–Čech compactification of a Tychonoff space X is a compact Hausdorff space βX that contains X as a dense subspace, such that every continuous map from X to a compact Hausdorff space extends uniquely to a continuous map on βX.

**Problem.** Let K be a Hausdorff compactification of X, a compact Hausdorff space with a dense copy of X. Then there is a unique continuous surjection βX → K that is the identity on X.

**How the definition helps.** The embedding into K extends uniquely by the defining property. Its extended image is compact and therefore closed in K (our own). This image contains the dense copy of X, so it equals K (our own).

**Wikipedia:** [Stone–Čech compactification](https://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification). It says: “any continuous map from X into any other compact Hausdorff space factors uniquely through βX.”

**Sources:**

- [Eduard Čech, On Bicompact Spaces (1937)](https://doi.org/10.2307/1968839)

### Discrete Stone–Čech compactifications are projective

**Remember:** Choose a lift on discrete points, then extend once.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** A compact Hausdorff space P is projective if every continuous map P → Y lifts along every continuous surjection Z → Y of compact Hausdorff spaces. For discrete X, every function on X is continuous, and βX is a compact Hausdorff space containing X densely to which every map from X into a compact Hausdorff space extends uniquely.

**Problem.** The Stone–Čech compactification of every discrete space is projective among compact Hausdorff spaces.

**How the definition helps.** On the discrete set X, choose a preimage of each value; this lift is continuous because X is discrete (our own). It extends over βX, and its composite with the surjection agrees with the original map on X, hence everywhere by uniqueness of extension (our own).

**nLab:** [Stone-Čech compactification](https://ncatlab.org/nlab/show/Stone-%C4%8Cech+compactification). It says: “is an extremally disconnected topological space. By a theorem by Gleason, these are precisely the projective objects”

**Sources:**

- [Andrew M. Gleason, Projective topological spaces (1958)](https://doi.org/10.1215/ijm/1255454110)

### Discretizing the dual gives locally compact abelian groups their Bohr compactification

**Remember:** Give the dual the discrete topology, then take its dual.

*True by definition. Confidence: medium.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)), 43A40, 22B05. arXiv math.GN, math.FA. Level 3: graduate.

**Definition.** The Bohr compactification of a topological group G is a continuous homomorphism b from G into a compact Hausdorff group through which every continuous homomorphism from G into a compact Hausdorff group factors uniquely. For abelian G, this reduces to compact abelian targets, whose duals are discrete groups.

**Problem.** Let G be a locally compact Hausdorff abelian group, and let H be its Pontryagin dual with the discrete topology. Then the dual of H, with the evaluation map from G, is the Bohr compactification of G.

**How the definition helps.** By Pontryagin duality, a map from G into a compact abelian group K gives a homomorphism from the discrete dual of K to H, where continuity is automatic (our own). Dualizing back extends the map over the dual of H, uniquely because G has dense image there (our own). A compact target need not be abelian, but the closure of the image of G in it is abelian (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality), [Bohr compactification](https://en.wikipedia.org/wiki/Bohr_compactification). It says: “is a morphism into a compact group which is easily shown to satisfy the requisite universal property.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudocompact products preserve Stone–Čech products

**Remember:** β of a product is the product when product functions extend.

*Makes the theorem clean to state or prove.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** The Stone–Čech compactification βX of a Tychonoff space X is the compactification to which every bounded continuous real function on X extends. So β(X × Y) is βX × βY exactly when every bounded continuous function on X × Y extends to βX × βY (our own). A space is pseudocompact if every continuous real function on it is bounded.

**Problem.** Let X and Y be infinite subspaces of compact Hausdorff spaces. The natural map β(X × Y) → βX × βY is a homeomorphism exactly when X × Y is pseudocompact.

**How the definition helps.** The natural map is a homeomorphism exactly when bounded continuous functions on X × Y extend over βX × βY (our own). Glicksberg’s theorem shows that this happens exactly when X × Y is pseudocompact. For X = Y = ℕ, the indicator of the diagonal does not extend, since near (p, p) with p in βℕ ∖ ℕ every product neighborhood meets the diagonal and its complement (our own).

**Paper or page:** [Functions on products of pseudocompact spaces](https://arxiv.org/abs/2109.09716v2). It says: “If X is pseudocompact and Φ is continuous, then Φ extends to a continuous function Φ̂: X̂ → ℝ.”

**Sources:**

- [Functions on products of pseudocompact spaces](https://arxiv.org/abs/2109.09716v2)
- [Irving Glicksberg, Stone-Čech compactifications of products (1959)](https://doi.org/10.1090/S0002-9947-1959-0105667-4)

### Wallman filters yield compactness

**Remember:** Points are maximal closed-set filters, so every filter grows into a point.

*True by definition.* MSC 54D35 (Extensions of spaces (compactifications, supercompactifications, completions, etc.)). arXiv math.GN. Level 3: graduate.

**Definition.** The points of the Wallman extension of a space X are its maximal closed-set filters, the maximal families of nonempty closed sets closed under finite intersections and under taking larger closed sets. For each closed set F, the set F\* of points containing F is closed, and these sets generate the closed sets.

**Problem.** For any nonempty space with closed singletons, its Wallman extension is compact.

**How the definition helps.** By Alexander’s subbase theorem, it is enough that basic closed sets F\* with the finite intersection property share a point (our own). Then the sets F themselves have the finite intersection property, because F\* ∩ G\* = (F ∩ G)\* and ∅\* is empty (our own). A maximal closed-set filter containing all these F is a point of every F\* (our own).

**Wikipedia:** [Wallman compactification](https://en.wikipedia.org/wiki/Wallman_compactification). It says: “The points of the Wallman compactification ωX of a space X are the maximal proper filters in the poset of closed subsets of X.”

**Sources:**

- [Henry Wallman, Lattices and Topological Spaces (1938)](https://doi.org/10.2307/1968717)

### Exponentiable spaces are exactly the core-compact spaces

**Remember:** Every open set is a union of opens way below it.

*Makes the theorem clean to state or prove.* MSC 54D45 (Local compactness, \\(\\sigma\\)-compactness), 18F60, 06B35. arXiv math.GN, math.CT. Level 3: graduate.

**Definition.** For open sets V ⊆ U, V is way below U, written V ≪ U, if every open cover of U has a finite subfamily covering V. A space is core-compact if every point x in every open U has an open neighborhood V with V ≪ U.

**Problem.** A space X is exponentiable in Top, that is, X × (−) has a right adjoint, if and only if X is core-compact.

**How the definition helps.** Core-compactness says exactly that the lattice of open sets is a continuous lattice (our own). The Day–Kelly theorem shows that X × (−) has a right adjoint exactly when this holds (our own).

**nLab:** [exponential law for spaces](https://ncatlab.org/nlab/show/exponential+law+for+spaces), [locally compact topological space](https://ncatlab.org/nlab/show/locally+compact+topological+space), [locally compact locale](https://ncatlab.org/nlab/show/locally+compact+locale). It says: “An object X of Top is exponentiable if and only if it is core-compact.”

**Sources:**

- [Karl H. Hofmann, Jimmie D. Lawson, The spectral theory of distributive continuous lattices, Trans. AMS 246 (1978) 285–310](https://doi.org/10.1090/S0002-9947-1978-0515540-7)
- [J. M. E. Hyland, Function spaces in the category of locales, in: Continuous Lattices, Lecture Notes in Mathematics 871, Springer (1981) 264–281](https://doi.org/10.1007/BFb0089910)

### Compact tests survive quotients

**Remember:** Compact probes into X become compact probes into its quotient.

*True by definition.* MSC 54D50 (\\(k\\)-spaces). arXiv math.GN. Level 3: graduate.

**Definition.** Here a space is compactly generated if a set is open whenever its preimage under every continuous map from a compact Hausdorff space is open.

**Problem.** Every quotient of a compactly generated space is compactly generated.

**How the definition helps.** A probe from a compact Hausdorff space into X, followed by the quotient map, is a probe into the quotient (our own). So if V passes every probe in the quotient, its preimage passes every probe in X and is open, and then V is open by the definition of a quotient (our own).

**Wikipedia:** [Compactly generated space](https://en.wikipedia.org/wiki/Compactly_generated_space). It says: “A quotient space of a CG-2 space is CG-2.”

**Sources:** none listed. No primary source with a working link was found.

### Compactly generated spaces make the exponential law hold for all spaces

**Remember:** Compact Hausdorff probes see every open set.

*Makes the theorem clean to state or prove.* MSC 54D50 (\\(k\\)-spaces), 18F60, 55U40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** A space X is compactly generated if continuous maps from compact Hausdorff spaces detect its open sets. Specifically, U ⊆ X is open exactly when every such map into X has open preimage of U.

**Problem.** The compactly generated spaces include CW complexes, manifolds and locally compact Hausdorff spaces, and they form a cartesian closed category. So Map(X × Y, Z) ≅ Map(X, Map(Y, Z)) holds for all compactly generated X, Y and Z.

**How the definition helps.** Give products and mapping spaces the compactly generated refinement of their usual topologies (our own). The category of compactly generated spaces is then cartesian closed. With these choices, a map X × Y → Z is continuous exactly when its curried form X → Map(Y, Z) is continuous (our own).

**nLab:** [compactly generated topological space](https://ncatlab.org/nlab/show/compactly+generated+topological+space), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces). It says: “As opposed to general topological spaces, compactly generated spaces form a cartesian closed category while still being general enough for most purposes of general topology”

**Sources:**

- [Norman E. Steenrod, A convenient category of topological spaces, Michigan Mathematical Journal 14 (1967) 133–152](https://doi.org/10.1307/mmj/1028999711)
- [David Gale, Compact sets of functions and function rings, Proc. AMS 1 (1950) 303–308](https://doi.org/10.2307/2032373)

### Products of CW complexes are CW complexes with the compactly generated product

**Remember:** In the compactly generated product, closed means closed on every compact piece.

*True by definition.* MSC 54D50 (\\(k\\)-spaces), 18F60, 55U40. arXiv math.GN, math.AT. Level 3: graduate.

**Definition.** For Hausdorff compactly generated spaces X and Y, the compactly generated product is the set X × Y in which a subset is closed exactly when it meets every compact subset of the ordinary product in a closed set.

**Problem.** The compactly generated product of two CW complexes is a CW complex whose cells are the products of their cells.

**How the definition helps.** Compact subsets of a product of CW complexes lie in products of finite subcomplexes, and those products are compact (our own). So closed on compact pieces means closed on each product of finite subcomplexes (our own). There the ordinary product topology and cell structure apply, so this is the weak topology of the product cells (our own).

**nLab:** [CW complex](https://ncatlab.org/nlab/show/CW+complex), [convenient category of topological spaces](https://ncatlab.org/nlab/show/convenient+category+of+topological+spaces), [compactly generated topological space](https://ncatlab.org/nlab/show/compactly+generated+topological+space). It says: “need not be a CW complex in the usual product topology, but it is in the compactly generated topology.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002), Appendix](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Fréchet–Urysohn spaces have sequential subspaces

**Remember:** Every closure point is a sequence limit, in every subspace.

*True by definition.* MSC 54D55 (Sequential spaces). arXiv math.GN. Level 3: graduate.

**Definition.** A space is Fréchet–Urysohn if every point in the closure of a set is the limit of a sequence from that set. A space is sequential if a set is closed whenever it contains the limits of all its convergent sequences.

**Problem.** A space is Fréchet–Urysohn exactly when all of its subspaces are sequential.

**How the definition helps.** A sequence that reaches a closure point still converges in any subspace containing its terms and limit, so subspaces stay Fréchet–Urysohn and hence sequential (our own). Conversely, if x is in the closure of A but not in A, then A is not closed in the subspace A ∪ {x} (our own). Sequentiality there gives a sequence in A with a limit outside A, which can only be x (our own).

**Wikipedia:** [Fréchet–Urysohn space](https://en.wikipedia.org/wiki/Fr%C3%A9chet%E2%80%93Urysohn_space). It says: “Every subspace of X is a sequential space.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded realcompact coordinates give compactness

**Remember:** Every bounded coordinate can live in a compact interval.

*Rules out counterexamples.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 3: graduate.

**Definition.** A space is realcompact if it embeds as a closed subset of a product of real lines. It is pseudocompact if every continuous real function on it is bounded, so in particular every coordinate of such an embedding is bounded (our own).

**Problem.** A pseudocompact realcompact space is compact.

**How the definition helps.** Pseudocompactness bounds each coordinate, so the closed image lies in a product of compact intervals (our own). That product is compact by Tychonoff’s theorem, and the image is closed in it, so the space is compact (our own). The space of countable ordinals is pseudocompact but neither compact nor realcompact (our own).

**Wikipedia:** [Pseudocompact space](https://en.wikipedia.org/wiki/Pseudocompact_space). It says: “For a Hausdorff space X to be compact requires that X be pseudocompact and realcompact”

**Sources:**

- [Edwin Hewitt, Rings of real-valued continuous functions. I (1948)](https://doi.org/10.1090/S0002-9947-1948-0026239-9)

### Closed embeddings in powers of ℝ make products of realcompact spaces realcompact

**Remember:** A product of closed real embeddings is another closed real embedding.

*True by definition.* MSC 54D60 (Realcompactness and realcompactification), 54B10. arXiv math.GN. Level 3: graduate.

**Definition.** Call a space realcompact if it is homeomorphic to a closed subspace of a product of copies of the real line.

**Problem.** Every product of realcompact spaces is realcompact.

**How the definition helps.** A product of closed embeddings is a closed embedding, and a product of powers of ℝ is a power of ℝ (our own). So embedding each factor as a closed subspace of a power of ℝ embeds the product as a closed subspace of one power of ℝ (our own).

**Wikipedia:** [Realcompact space](https://en.wikipedia.org/wiki/Realcompact_space). It says: “as a closed subset in some (not necessarily finite) Cartesian power of the reals, with the product topology.”

**Sources:**

- [Edwin Hewitt, Rings of real-valued continuous functions. I (1948)](https://doi.org/10.1090/s0002-9947-1948-0026239-9)

### Countable covers detect realcompactness

**Remember:** Lindelöf turns an empty intersection into an empty countable one.

*True by definition.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 3: graduate.

**Definition.** A Tychonoff space is realcompact when every maximal family of zero sets with the finite intersection property, where zero sets are sets where a continuous real function vanishes, has a common point whenever each countable subfamily does.

**Problem.** Assume the axiom of choice. A completely regular Hausdorff space in which every open cover has a countable subcover is realcompact.

**How the definition helps.** If such a family had no common point, the complements of its members would form an open cover (our own). A countable subcover would then give countably many members with empty intersection, which the family forbids (our own). Hewitt’s theorem identifies this zero-set test with a closed embedding in a product of real lines (our own).

**Paper or page:** [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1). It says: “CMC implies that every Tychonoff Lindelöf space is realcompact.”

**Sources:**

- [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1)
- [Edwin Hewitt, Rings of real-valued continuous functions. I (1948)](https://doi.org/10.1090/S0002-9947-1948-0026239-9)

### Proximity relations classify the compactifications of a Tychonoff space

**Remember:** Each compactification is fixed by which sets it lets touch.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54E05 (Proximity structures and generalizations), 54D35. arXiv math.GN. Level 3: graduate.

**Definition.** A proximity δ relates subsets as 'their closures meet' would: symmetric, true for intersecting sets, false for ∅, and Aδ(B∪C) exactly when AδB or AδC. If A and B are far, some set E is far from A while its complement is far from B. It is separated if distinct points are far, and compatible if x ∈ cl(A) exactly when {x} δ A.

**Problem.** The Hausdorff compactifications of a Tychonoff space correspond one-to-one, up to equivalence, with the separated proximities compatible with its topology. Two sets are near exactly when their closures meet in the compactification.

**How the definition helps.** A compactification gives a separated compatible proximity by calling two sets near when their closures meet in it. Smirnov’s theorem rebuilds a unique compactification, up to equivalence, from every separated compatible proximity (our own).

**Wikipedia:** [Proximity space](https://en.wikipedia.org/wiki/Proximity_space). It says: “Given a compact Hausdorff space, there is a unique proximity space whose corresponding topology is the given topology: A is near B if and only if their closures intersect. More generally, proximities classify the compactifications”

**Sources:**

- [Wallace, A. D. (1941). Separation Spaces. Annals of Mathematics 42(3), 687–697.](https://doi.org/10.2307/1969257)

### Cauchy ultrafilters make complete totally bounded uniform spaces compact

**Remember:** Total boundedness makes ultrafilters Cauchy, and completeness makes them converge.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30, 54A20. arXiv math.GN. Level 3: graduate.

**Definition.** A filter on a uniform space is Cauchy if, for every entourage U, it contains a U-small set A, one with A × A ⊆ U. The space is complete if every Cauchy filter converges. It is totally bounded if every ultrafilter is Cauchy, which is equivalent to a cover by finitely many U-small sets for each U (our own).

**Problem.** A uniform space is compact if and only if it is complete and totally bounded.

**How the definition helps.** A space is compact exactly when every ultrafilter converges, and here every ultrafilter is Cauchy and so converges. Conversely, in a compact space convergent ultrafilters are Cauchy, and a Cauchy filter converges to any cluster point, which compactness supplies (our own).

**Wikipedia:** [Totally bounded space](https://en.wikipedia.org/wiki/Totally_bounded_space). It says: “Every ultrafilter on S is a Cauchy filter.”

**Sources:** none listed. No primary source with a working link was found.

### Closeness under ultrametric pseudometrics is an equivalence relation at every scale

**Remember:** Two short steps make one short step, so closeness is transitive.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54E35. arXiv math.GN, math.MG. Level 3: graduate.

**Definition.** An ultrametric pseudometric on X is a symmetric function d ≥ 0 on X × X with d(x,x) = 0 and d(x,z) ≤ max(d(x,y), d(y,z)), where distinct points may have distance 0. So for each r &gt; 0, the relation d(x,y) &lt; r is an equivalence relation.

**Problem.** A family of ultrametric pseudometrics generates a uniformity with a basis of equivalence relations. Conversely, every uniformity with such a basis comes from a family of ultrametric pseudometrics.

**How the definition helps.** The maximum rule makes 'closer than r' transitive, so each basic entourage is an equivalence relation (our own). Finite intersections of equivalence relations are equivalence relations, so the basis keeps this form (our own). Conversely, an equivalence relation E gives the ultrametric pseudometric with distance 0 inside classes and 1 across them (our own).

**Paper or page:** [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1), [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1). It says: “If M is a system of non-Archimedean pseudo-metrics, then ℬ<sub>M</sub> consists of equivalence relations.”

**Sources:**

- [Daniel Windisch, Equivalent characterizations of non-Archimedean uniform spaces, arXiv:2111.09722v1 (2021)](https://arxiv.org/abs/2111.09722v1)

### Describing uniformities by pseudometrics gives every uniform space a separated quotient

**Remember:** If all distances agree that two points coincide, collapse them.

*True by definition. Confidence: medium.* MSC 54E15 (Uniform structures and generalizations), 54B15. arXiv math.GN. Level 3: graduate.

**Definition.** Every uniformity on X is generated by a family of pseudometrics, with basic entourages that impose finitely many bounds d(x,y) &lt; ε with ε &gt; 0. The space is separated if each pair of distinct points has positive distance in some pseudometric of the family.

**Problem.** Every uniform space has a separated quotient that is universal. Each uniformly continuous map into a separated uniform space factors uniquely through it.

**How the definition helps.** Identify points that have distance zero in every pseudometric of the family (our own). The triangle inequality makes each pseudometric well defined on classes, so the quotient is separated (our own). A uniformly continuous map into a separated space identifies the same points, so it factors uniquely and uniformly continuously through the quotient (our own).

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “Every uniform space embeds uniformly in a product of pseudometric spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal entourages make continuous maps on compact Hausdorff domains uniformly continuous

**Remember:** Continuous maps pull diagonal neighbourhoods back to diagonal neighbourhoods.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30. arXiv math.GN. Level 3: graduate.

**Definition.** On a compact Hausdorff space, the unique uniformity that induces the topology has as entourages exactly the neighbourhoods of the diagonal, the set of pairs (x, x). A map f is uniformly continuous if (f × f)⁻¹ of every entourage is an entourage.

**Problem.** Give a compact Hausdorff space its unique uniformity that induces its topology. Then every continuous map from it to a uniform space is uniformly continuous.

**How the definition helps.** Entourages of the domain are just neighbourhoods of the diagonal, and continuity pulls those back from the target (our own). Every target entourage contains an open neighbourhood of the diagonal (our own). Its preimage under f × f is open and contains the source diagonal, so it is an entourage (our own).

**nLab:** [uniform space](https://ncatlab.org/nlab/show/uniform+space). It says: “It follows then that if X, Y are uniform spaces with X compact Hausdorff and if f: X → Y is continuous, then f is uniformly continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Finite uniform subcovers make compact uniform spaces totally bounded

**Remember:** Uniform covers contain open covers, and compactness makes those finite.

*True by definition.* MSC 54E15 (Uniform structures and generalizations), 54D30. arXiv math.GN. Level 3: graduate.

**Definition.** A cover is uniform if a single entourage U makes the U-ball around each point fit inside some member. Here a space is totally bounded if every uniform cover has a finite subcover.

**Problem.** Every compact uniform space is totally bounded.

**How the definition helps.** Each point's U-ball is a neighbourhood inside some member, so the interiors of the members form an open cover (our own). Compactness gives finitely many interiors covering the space, and their members form a finite subcover.

**nLab:** [totally bounded space](https://ncatlab.org/nlab/show/totally+bounded+space). It says: “A uniform space X is totally bounded if every uniform cover of X has a finite subcover.”

**Sources:** none listed. No primary source with a working link was found.

### Metric topologies can hide nonmetrizable uniformities

**Remember:** Count uniform scales, not the open sets they generate.

*Makes the theorem clean to state or prove.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity describes closeness by entourages, sets of pairs of points, and a base is a family of entourages such that every entourage contains one of them. A uniformity comes from a metric d when the sets of pairs with d(x,y) &lt; ε, for ε &gt; 0, form a base.

**Problem.** A Hausdorff uniformity comes from a metric exactly when it has a countable base.

**How the definition helps.** A metric gives the countable base of sets with d(x,y) &lt; 1/n (our own). The uniform metrization theorem gives the converse for a Hausdorff uniformity (our own). The test concerns the uniformity, not its topology, and a metrizable topology can carry a uniformity that no metric gives.

**Paper or page:** [Uniform Space whose Topology is Metrizable is not necessarily Metrizable](https://proofwiki.org/wiki/Uniform_Space_whose_Topology_is_Metrizable_is_not_necessarily_Metrizable). It says: “Then it is not necessarily the case that 𝒰 is itself a metrizable uniformity.”

**Sources:** none listed. No primary source with a working link was found.

### Product Cauchy tests are coordinatewise

**Remember:** Finitely many coordinate tests need only one common starting point.

*True by definition.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** A net is Cauchy if, for each entourage U, all pairs of terms are U-close from some index on. The product uniformity has basic entourages that impose one entourage condition on each of finitely many coordinates.

**Problem.** A net in a product of uniform spaces is Cauchy exactly when each coordinate net is Cauchy.

**How the definition helps.** A basic product entourage tests only finitely many coordinates, and each gives a starting index (our own). Directedness gives one index above all of them, after which every test holds (our own). Conversely, each projection is uniformly continuous, so the coordinate nets of a Cauchy net are Cauchy (our own).

**Paper or page:** [Lebesgue Property and G-completeness in Generalized Quasi-uniform Spaces](https://arxiv.org/abs/2311.02325v1). It says: “Then a net (Rₙ)₍ₙ∈D₎ in X is Cauchy if and only if for each i ∈ I, the net (πᵢ(Rₙ))₍ₙ∈D₎ in Xᵢ is Cauchy.”

**Sources:**

- [Lebesgue Property and G-completeness in Generalized Quasi-uniform Spaces](https://arxiv.org/abs/2311.02325v1)

### Uniform scales become partitions

**Remember:** At each scale, one partition says which points are close.

*True by definition.* MSC 54E15 (Uniform structures and generalizations). arXiv math.GN. Level 3: graduate.

**Definition.** A uniformity is non-Archimedean if every entourage contains an entourage that is an equivalence relation. A cover is uniform if, for some entourage U, the U-neighbours of each point fit inside one member.

**Problem.** A uniformity is non-Archimedean exactly when every uniform cover has a finer uniform cover made of disjoint blocks.

**How the definition helps.** The classes of an entourage that is an equivalence relation form a uniform partition (our own). Conversely, the relation 'in the same block' of a uniform partition is an equivalence relation and an entourage (our own). The usual translation between uniform covers and entourages makes these partitions refine every uniform cover, and these relations lie inside every entourage (our own).

**Paper or page:** [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1). It says: “The maps in remark 2.1.1 restrict to bijections of non-Archimedean diagonal uniformities and covering uniformities having a basis consisting of partitions.”

**Sources:**

- [Equivalent characterizations of non-Archimedean uniform spaces](https://arxiv.org/abs/2111.09722v1)

### Short maps and infinite distances make the category of metric spaces complete

**Remember:** Never stretch distances, and allow ∞ so every supremum exists.

*Rules out counterexamples.* MSC 54E35 (Metric spaces, metrizability), 54E40, 18D20. arXiv math.CT, math.MG. Level 3: graduate.

**Definition.** A Lawvere metric on X assigns to each ordered pair a distance d(x,y) in \[0,∞\], where ∞ is allowed, with d(x,x) = 0 and d(x,z) ≤ d(x,y) + d(y,z). A short map f satisfies d(f(x),f(y)) ≤ d(x,y) for every pair.

**Problem.** The category of Lawvere metric spaces and short maps is complete and therefore has arbitrary products. Its isomorphisms are exactly the bijective distance-preserving maps.

**How the definition helps.** In a product, the supremum of coordinate distances is the least distance making every projection short, and it exists because ∞ is allowed (our own). Equalizers take the inherited distance, so products and equalizers give all small limits (our own). A short bijection has a short inverse exactly when it preserves distances (our own).

**nLab:** [short map](https://ncatlab.org/nlab/show/short+map), [metric space](https://ncatlab.org/nlab/show/metric+space). It says: “For example, Met<sub>ord</sub> fails to have arbitrary products ∏<sub>i ∈ I</sub> X<sub>i</sub>, on account of the finiteness axiom where the putative distance d((x<sub>i</sub>), (y<sub>i</sub>)) = sup<sub>i</sub> d(x<sub>i</sub>, y<sub>i</sub>) may not exist as a finite number.”

**Sources:**

- [F. William Lawvere, Metric spaces, generalized logic, and closed categories, Rendiconti del Seminario Matematico e Fisico di Milano 43 (1973) 135–166](https://doi.org/10.1007/BF02924844)

### Generalized ordered spaces are subspaces of ordered spaces, by an embedding theorem

**Remember:** Upper and lower open tests describe ordered subspaces from within.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54C25. arXiv math.GN. Level 3: graduate.

**Definition.** A generalized ordered space is a totally ordered Hausdorff space whose topology has a subbasis of open upper and lower sets. A linearly ordered topological space carries the order topology, generated by the open rays.

**Problem.** The generalized ordered spaces are exactly the subspaces of linearly ordered topological spaces, with the induced order.

**How the definition helps.** An open ray meets a subspace in an open upper or lower set, so every subspace of a linearly ordered space is a generalized ordered space (our own). The embedding theorem gives the converse: each generalized ordered space embeds, in order and in topology, in a linearly ordered space.

**Paper or page:** [GO-Space Embeds Densely into Linearly Ordered Space](https://proofwiki.org/wiki/GO-Space_Embeds_Densely_into_Linearly_Ordered_Space). It says: “there is a linearly ordered space (X, ⪯′, τ′) and a mapping from Y to X which is a order embedding and a topological embedding.”

**Sources:**

- [ProofWiki, GO-Space Embeds Densely into Linearly Ordered Space](https://proofwiki.org/wiki/GO-Space_Embeds_Densely_into_Linearly_Ordered_Space)

### Metric continua with exactly two non-cut points are arcs

**Remember:** Arcs are the continua with only two points you can safely remove.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54F15 (Continua and generalizations), 54F50. arXiv math.GN. Level 3: graduate.

**Definition.** A cut point of a connected space is a point whose removal leaves it disconnected, and a non-cut point leaves it connected. A continuum here is a nonempty compact connected metric space.

**Problem.** Every continuum with more than one point has at least two non-cut points. A metric continuum with exactly two non-cut points is homeomorphic to \[0, 1\].

**How the definition helps.** The non-cut point theorem gives every continuum with more than one point at least two non-cut points (our own). The arc characterization shows that exactly two forces an arc, since every other point then separates the two ends (our own).

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

**Definition.** A space has small inductive dimension at most n if every point has arbitrarily small open neighbourhoods whose boundaries have dimension at most n − 1, starting from the empty space at −1. Restricting an open set to a subspace can only shrink its boundary.

**Problem.** For a separable metric space X, every subspace has small inductive dimension at most that of X. So every subspace also has covering dimension at most that of X.

**How the definition helps.** For a subspace A and an open set U, the boundary of U ∩ A in A lies inside the boundary of U (our own). So induction on n bounds the dimension of each restricted boundary, and hence of A, by that of X (our own). For separable metric spaces, small inductive dimension equals covering dimension, which gives the second claim (our own).

**nLab:** [inductive dimension](https://ncatlab.org/nlab/show/inductive+dimension). It says: “for every subspace M of a regular space X we have ind(M) ≤ ind(X).”

**Sources:**

- [Ryszard Engelking, Dimension Theory (1978)](https://www.maths.ed.ac.uk/~v1ranick/papers/engelking.pdf)

### Sphere extensions glue dimension bounds

**Remember:** Extend over one closed piece, then extend over the next.

*True by definition.* MSC 54F45 (Dimension theory in general topology). arXiv math.GN. Level 3: graduate.

**Definition.** Covering dimension at most n means every finite open cover has a finite open refinement with at most n + 1 sets through each point. On a normal space this equals the sphere test: every continuous map from a closed subset into the n-sphere extends over the whole space.

**Problem.** Let n ≥ 0 be an integer. If a normal Hausdorff space is a finite union of closed subspaces of covering dimension at most n, its dimension is at most n.

**How the definition helps.** With the sphere test, extend a map over the closed pieces one at a time, keeping the values already fixed (our own). Each piece is a closed subspace of dimension at most n, and each step joins two maps that agree on a closed overlap, which is continuous by the pasting lemma (our own). The dimension theorem for normal spaces turns the sphere test back into the cover bound (our own).

**Wikipedia:** [Lebesgue covering dimension](https://en.wikipedia.org/wiki/Lebesgue_covering_dimension). It says: “if f: A → Sⁿ is continuous, then there is an extension of f to g: X → Sⁿ.”

**Sources:**

- [Ryszard Engelking, Dimension Theory (1978)](https://www.maths.ed.ac.uk/~v1ranick/papers/engelking.pdf)

### Defining extremally disconnected spaces as projective makes their retracts extremally disconnected

**Remember:** Lift from the larger space, then restrict to its retract.

*True by definition.* MSC 54G05 (Extremally disconnected spaces, \\(F\\)-spaces, etc.), 54B30. arXiv math.GN. Level 3: graduate.

**Definition.** Among compact Hausdorff spaces, call E extremally disconnected if it is projective: every continuous map from E lifts along every continuous surjection between compact Hausdorff spaces.

**Problem.** A retract of an extremally disconnected compact Hausdorff space is extremally disconnected. A retract of E is a subspace A with a continuous map from E onto A that fixes each point of A.

**How the definition helps.** A map from the retract A, composed with the retraction, is a map from E, which lifts (our own). Restricting the lift to A lifts the original map (our own). Gleason’s theorem shows that projectivity is the usual condition that the closure of each open set is open.

**nLab:** [extremally disconnected topological space](https://ncatlab.org/nlab/show/extremally+disconnected+topological+space). It says: “Extremally disconnected topological spaces are precisely the projective objects in the category of compact Hausdorff topological spaces”

**Sources:**

- [Andrew M. Gleason, Projective topological spaces (1958)](https://doi.org/10.1215/ijm/1255454110)

### Scattered spaces force point masses

**Remember:** On a scattered compact space, no positive mass can stay diffuse.

*Rules out counterexamples. Confidence: medium.* MSC 54G12 (Scattered spaces), 28C15. arXiv math.GN. Level 3: graduate.

**Definition.** A compact Hausdorff space is scattered if every nonempty subset has an isolated point, one with a neighbourhood that meets the subset in that point alone. Total disconnectedness is weaker: it asks only that the connected components be single points.

**Problem.** Every finite Radon measure on a scattered compact Hausdorff space is a countable sum of point masses. A Radon measure approximates the mass of each Borel set from within by compact sets.

**How the definition helps.** Subtract the countably many point masses, which leaves a Radon measure with none (our own). If it were nonzero, its support would have an isolated point, and inner regularity would put positive mass on that point (our own). The Cantor set with the fair-coin measure is totally disconnected and has no point masses (our own).

**nLab:** [scattered space](https://ncatlab.org/nlab/show/scattered+space). It says: “A topological space X is called scattered if X doesn't contain nonempty dense-in-itself subsets.”

**Sources:** none listed. No primary source with a working link was found.

### Closed subgroups give metrizable quotients

**Remember:** Closed cosets stay a positive distance from points outside them.

*Rules out counterexamples.* MSC 54H11 (Topological groups (topological aspects)), 54E35. arXiv math.GN. Level 3: graduate.

**Definition.** For a closed subgroup H of G, the coset space G/H has the left cosets gH as points, and a set of cosets is open when its preimage in G is open. Since H is closed, every coset is closed.

**Problem.** The coset space of a closed subgroup of a first-countable topological group is metrizable. First countable means that each point has a countable neighborhood base.

**How the definition helps.** A compatible right-invariant pseudometric on G, from Birkhoff–Kakutani, gives a distance between cosets that is positive on distinct cosets because cosets are closed (our own). Its balls are images of balls in G, so it induces the quotient topology (our own). For ℚ in ℝ, which is not closed, ℝ/ℚ is indiscrete (our own).

**Paper or page:** [The quotient spaces of topological groups with a q-point](https://arxiv.org/abs/2311.08814v1). It says: “Let H be a closed subgroup of a first-countable topological group G (without any separator axiom on G). Then the quotient space G/H is metrizable.”

**Sources:** none listed. No primary source with a working link was found.

### Group uniformities make Hausdorff topological groups completely regular

**Remember:** Groups carry uniformities, and uniformities give separating functions.

*True by definition.* MSC 54H11 (Topological groups (topological aspects)), 54D15, 54E15. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** A topological group has a uniformity in which x and y are U-close when x⁻¹y ∈ U, for each neighbourhood U of the identity, and this uniformity induces the group's topology. Completely regular means continuous functions into \[0, 1\] separate each point from each closed set that misses it.

**Problem.** Every Hausdorff topological group is completely regular.

**How the definition helps.** The group topology comes from a uniformity, and every space whose topology comes from a uniformity is completely regular. That general theorem builds the separating function from a sequence of entourages, each composed with itself inside the one before (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “The uniform topology for either coincides with the topology of G.”

**Wikipedia:** [Uniform space](https://en.wikipedia.org/wiki/Uniform_space). It says: “Every uniformizable space is a completely regular topological space.”

**Sources:** none listed. No primary source with a working link was found.

### Pseudotopological spaces form a quasitopos that contains Top

**Remember:** A pseudotopology says which ultrafilters converge where, and asks nothing more.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54A20 (Convergence in general topology (sequences, filters, limits, convergence spaces, nets, etc.)), 18F60. arXiv math.GN, math.CT. Level 4: research.

**Definition.** Classically, a pseudotopological space assigns each ultrafilter on its underlying set a set of limits. For every x, the principal ultrafilter at x must have x among its limits. A map is continuous if it sends each convergent ultrafilter to an ultrafilter converging to the image of each original limit (our own).

**Problem.** Pseudotopological spaces form a quasitopos that contains Top as a full reflective subcategory. So they form a locally cartesian closed category, with function spaces and fibrewise function spaces for all objects.

**How the definition helps.** With limits free apart from the principal-ultrafilter condition, the quasitopos theorem for pseudotopological spaces gives local cartesian closedness (our own). A topological space gives a pseudotopology by ordinary ultrafilter convergence, which embeds Top fully, and topological modification gives the reflector (our own).

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

**How the definition helps.** Every sequential space satisfies the three rules, and its continuous maps are exactly the maps that preserve convergence (our own). The quasitopos theorem for subsequential spaces gives local cartesian closedness, and local presentability gives completeness and cocompleteness (our own). The CW colimit comparison shows that attaching cells gives the same result in both categories.

**nLab:** [subsequential space](https://ncatlab.org/nlab/show/subsequential+space). It says: “thus it makes no difference whether you carry out the construction of a CW complex in Top and then regard the result as a subsequential space, or carry out the construction in SeqPsTop to begin with.”

**Sources:**

- [Matías Menni, Alex Simpson, Topological and limit-space subcategories of countably-based equilogical spaces, Mathematical Structures in Computer Science 12 (2002) 739–770](https://doi.org/10.1017/S0960129502003699)

### Openness of a surjection matches openness of its map on closed sets

**Remember:** Vietoris neighborhoods are built from open sets, so open maps carry them.

*True by definition. Confidence: medium.* MSC 54B20 (Hyperspaces in general topology), 54C10. arXiv math.DS, math.GN. Level 4: research.

**Definition.** The Vietoris hyperspace 2ˣ of a compact Hausdorff space X is the set of nonempty closed subsets. Its basic open set for open U₁,…,Uₙ holds the closed sets that lie in U₁ ∪ … ∪ Uₙ and meet each Uᵢ. A map f gives 2ᶠ, which sends each closed set to its image.

**Problem.** Let f be a continuous surjection between compact Hausdorff spaces. Then f is open exactly when 2ᶠ is open for the Vietoris topologies.

**How the definition helps.** If f is open, 2ᶠ maps the basic set for U₁,…,Uₙ onto the basic set for f(U₁),…,f(Uₙ), so 2ᶠ is open (our own). For onto, cover a target B by images of compact neighbourhoods inside the Uᵢ, keep finitely many, intersect their union with f⁻¹(B), and add one preimage point in each Uᵢ (our own). Conversely, singletons in the image of the basic set for U show that f(U) is open (our own).

**Paper or page:** [Characterizations of open and semi-open maps of compact Hausdorff spaces by induced maps](https://arxiv.org/abs/2404.12727v2). It says: “Then f is open iff 2ᶠ: 2ˣ → 2ʸ is open.”

**Sources:**

- [Xiongping Dai, Yuxun Xie, Characterizations of open and semi-open maps of compact Hausdorff spaces by induced maps, arXiv:2404.12727 (2024)](https://arxiv.org/abs/2404.12727v2)

### Pointwise quotients yield Vietoris hit tests

**Remember:** Finite coordinate tests become hit tests when order is forgotten.

*True by definition.* MSC 54B20 (Hyperspaces in general topology). arXiv math.GN. Level 4: research.

**Definition.** Give sequences in X the pointwise topology, whose basic tests put finitely many terms in given open sets. Give closed sets the lower Vietoris topology, whose basic tests ask whether a closed set meets a given open set. The closure of a sequence's range meets U exactly when some term lies in U (our own).

**Problem.** Give sequences the pointwise topology and closed sets the lower Vietoris topology. Then the map sending a sequence to the closure of its range is a quotient map onto the nonempty closed sets with countable dense subsets.

**How the definition helps.** Each hit test pulls back to a union of single-term tests, so the map is continuous (our own). A basic set of sequences maps onto the closed sets with a countable dense subset that meet all its open sets: put one point at each tested term and a dense sequence elsewhere (our own). So the map is an open continuous surjection, hence a quotient map (our own).

**Paper or page:** [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2). It says: “the map $q:(\\mathcal{F},\\tau<sub>p</sub>)\\rightarrow (Cl<sub>Y</sub>(X),\\tau<sub>v</sub><sup>-</sup>)$ is a quotient map”

**Sources:**

- [Modulo arithmetic of function spaces: Subset hyperspaces as quotients of function spaces](https://arxiv.org/abs/2503.10803v2)

### Patch topologies keep spectral limits compact

**Remember:** Pass to patches, and the limit is closed in a compact product.

*True by definition.* MSC 54B35 (Spectra in general topology). arXiv math.GN. Level 4: research.

**Definition.** A spectral space is compact and sober, with a base of compact open sets closed under finite intersections. Sober means every nonempty closed set that is not a union of two smaller closed sets is the closure of exactly one point. Spectral maps pull compact open sets back to compact open sets, so they stay continuous for the patch topology (our own), generated by compact open sets and their complements.

**Problem.** Any inverse limit of spectral spaces and spectral maps is compact in its original limit topology.

**How the definition helps.** The patch theorem makes each factor compact Hausdorff in its patch topology, where the spectral maps stay continuous (our own). So the compatibility equations cut out a closed subset of a compact product, since the factors are Hausdorff (our own). The original limit topology is coarser, so the limit stays compact in it (our own).

**Paper or page:** [Lemma 5.24.1.](https://stacks.math.columbia.edu/tag/0A2V). It says: “The space X = lim Xᵢ is quasi-compact.”

**Sources:**

- [The Stacks Project, Lemma 5.24.1](https://stacks.math.columbia.edu/tag/0A2V)

### Spectral maps preserve patch continuity

**Remember:** Preserve compact opens and their complements come along.

*True by definition.* MSC 54B35 (Spectra in general topology). arXiv math.GN. Level 4: research.

**Definition.** A spectral space is compact and sober, with a base of compact open sets closed under finite intersections. Sober means every nonempty closed set that is not a union of two smaller closed sets is the closure of exactly one point. A spectral map is continuous and pulls compact open sets back to compact open sets, and the patch topology is generated by compact open sets and their complements.

**Problem.** A continuous map between spectral spaces is patch-continuous exactly when it is spectral.

**How the definition helps.** Preimages preserve complements, so a spectral map pulls both kinds of patch generators back to patch-open sets (our own). Conversely, if f is patch-continuous, the preimage of a compact open set is patch-closed, hence patch-compact by the patch theorem, hence compact in the coarser original topology (our own). It is open because f is continuous (our own).

**Paper or page:** [Lemma 5.23.4.](https://stacks.math.columbia.edu/tag/0G1J). It says: “Then f is spectral if and only if f is continuous in the constructible topology.”

**Sources:**

- [The Stacks Project, Lemma 5.23.4](https://stacks.math.columbia.edu/tag/0G1J)

### A weaker filter condition shows core-compact well-filtered spaces are sober

**Remember:** Test the filter condition on open sets, not on compact sets.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54D10 (Lower separation axioms (\\(T<sub>0</sub>\\)--\\(T<sub>3</sub>\\), etc.)), 06B35. arXiv math.GN. Level 4: research.

**Definition.** For open U and V, write U ≪ V if every directed open cover of V has a member containing U; core-compact means each open set is the union of the open sets way below it. A space is open well-filtered if every nonempty open family filtered for ≪, with any two members having a third ≪ both, has a member inside each open set containing its intersection.

**Problem.** Every core-compact open well-filtered T₀ space is sober. That is, each nonempty irreducible closed set is the closure of exactly one point.

**How the definition helps.** Core-compactness supplies, inside each open set, enough open sets way below it to run the open well-filteredness test (our own). The sobriety theorem for core-compact open well-filtered spaces uses this test to find a point whose closure is a given irreducible closed set. The T₀ condition makes that point unique (our own).

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

**Definition.** A map f on a metric space oscillates slowly if, far out, it varies little on balls of fixed size: for all r &gt; 0 and ε &gt; 0, some bounded set has diam f(B(x,r)) &lt; ε for every centre x outside it. The Higson compactification of a proper metric space is the closure of its image in a product of copies of \[0,1\], one for each continuous slowly oscillating function.

**Problem.** A continuous map from a proper metric space into a compact metric space extends over the Higson compactification exactly when it oscillates slowly.

**How the definition helps.** Embed the compact target in a product of intervals by uniformly continuous coordinates, whose composites with a slowly oscillating map are Higson coordinates and so extend (our own). The extension lands in the closed image of the target because the space is dense (our own). Conversely, every function that extends is slowly oscillating, and finitely many coordinates control the target metric (our own).

**Paper or page:** [Embedding of Higson compactification into the product of adelic solenoids](https://arxiv.org/abs/2205.03698v1). It says: “a continuous map f: X → C to a compact metric space C extends continuously to the Higson corona if and only if f is slowly oscillating.”

**Sources:**

- [Embedding of Higson compactification into the product of adelic solenoids](https://arxiv.org/abs/2205.03698v1)

### Closed graphs preserve realcompact inverse images

**Remember:** Realcompact means closed in a power of ℝ; closed pieces inherit it.

*True by definition.* MSC 54D60 (Realcompactness and realcompactification). arXiv math.GN. Level 4: research.

**Definition.** A realcompact space is one that embeds as a closed subset of a product of copies of the real line ℝ. So closed subspaces and products of realcompact spaces are again realcompact (our own).

**Problem.** Let f map a realcompact space X continuously into a Hausdorff space Y. If B is a realcompact subspace of Y, then f⁻¹\[B\] is realcompact.

**How the definition helps.** The inverse image f⁻¹\[B\] is homeomorphic to the set of pairs (x, b) in X × B with f(x) = b (our own). That set is closed because Y is Hausdorff (our own). X × B embeds as a closed subset of a product of real lines, so this closed set does too (our own).

**Paper or page:** [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1). It says: “the subspace f⁻¹\[B\] of X is E-compact.”

**Sources:**

- [Characterizations of ℕ-compactness and realcompactness via ultrafilters in the absence of the axiom of choice](https://arxiv.org/abs/2408.01461v1)

### The upper topology is the coarsest making a preorder lower continuous

**Remember:** Open exactly the complements that continuity demands, and nothing more.

*True by definition. Confidence: medium.* MSC 54F05 (Linearly ordered topological spaces, generalized ordered spaces, and partially ordered spaces), 54H12, 91B08. arXiv econ.TH, math.GN. Level 4: research.

**Definition.** Lower continuity of a preorder ≾ asks every lower set ↓x = {y ∣ y ≾ x} to be closed, and continuity asks every upper set ↑x to be closed too. The upper topology is generated by the complements of the sets ↓x, so it is the coarsest making each ↓x closed (our own). The lower topology is generated by the complements of the sets ↑x = {y ∣ x ≾ y}.

**Problem.** A preorder is lower continuous for a topology τ exactly when τ contains its upper topology. It is continuous for τ exactly when τ contains both its upper and its lower topology.

**How the definition helps.** A topology makes every ↓x closed exactly when it contains every complement of ↓x, hence exactly when it contains the topology these complements generate (our own). The same argument for the sets ↑x gives the criterion for full continuity (our own).

**Paper or page:** [Intergenerational Preferences and Continuity: Reconciling Order and Topology](https://arxiv.org/abs/2402.01699v1). It says: “it clarifies which topology is the smallest one among those that make the preorder continuous.”

**Sources:**

- [Asier Estevan, Roberto Maura, Oscar Valero, Intergenerational Preferences and Continuity: Reconciling Order and Topology, arXiv:2402.01699v1 (2024)](https://arxiv.org/abs/2402.01699v1)

### Clopen bases preserve product dimension zero

**Remember:** Clopen boxes multiply into clopen boxes.

*Rules out counterexamples.* MSC 54F45 (Dimension theory in general topology). arXiv math.GN. Level 4: research.

**Definition.** A nonempty space has small inductive dimension zero when its clopen sets, those both closed and open, form a base for its topology. A box that restricts finitely many coordinates to clopen sets is clopen in the product (our own).

**Problem.** Every nonempty product of spaces of small inductive dimension zero has small inductive dimension zero. Covering dimension zero, where every finite open cover has a finite disjoint open refinement, is not kept by products.

**How the definition helps.** The clopen boxes form a base of the product, so the product keeps a clopen base (our own). The Sorgenfrey line, with clopen base intervals \[a, b), has covering dimension zero (our own). Sipacheva proves that its square has infinite covering dimension.

**Paper or page:** [The Covering Dimension of the Sorgenfrey Plane](https://arxiv.org/abs/2110.08867v2). It says: “dim S × S = ∞.”

**Sources:**

- [The Covering Dimension of the Sorgenfrey Plane](https://arxiv.org/abs/2110.08867v2)

### Palais's stronger properness gives slices without local compactness

**Remember:** Only a compact set of group elements moves U near V.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 54H15 (Transformation groups and semigroups (topological aspects)), 57S20, 55R10. arXiv math.GN, math.GT. Level 4: research.

**Definition.** A continuous action of a Lie group G on a space X is Palais proper if each point x has a neighborhood U with the following property. Every point y has a neighborhood V such that the elements g with gU meeting V form a subset of G with compact closure.

**Problem.** For a Palais proper Lie group action on a completely regular Hausdorff space, every point x has a slice S. With H its stabilizer, the action identifies G ×ₕ S homeomorphically with an open invariant neighborhood of x.

**How the definition helps.** This compactness condition does the work that local compactness of X does in the usual slice argument (our own). Palais’s slice theorem then gives the slice S and the tube G ×ₕ S (our own).

**nLab:** [slice theorem](https://ncatlab.org/nlab/show/slice+theorem), [proper action](https://ncatlab.org/nlab/show/proper+action). It says: “in which case the definition of "proper action" needs to be strengthened”

**Sources:**

- [Richard S. Palais, On the Existence of Slices for Actions of Non-Compact Lie Groups, Annals of Mathematics 73 (1961) 295–323](https://doi.org/10.2307/1970335)
