### Closed shift spaces stay closed under sliding block codes

**Remember:** Compact domains give closed images, and commuting with the shift preserves invariance.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A full shift consists of all two-sided sequences over a finite alphabet, with the product topology. A shift space is a closed subset of a full shift that is unchanged by the left shift. Equivalently, it consists of all sequences that avoid a specified list of finite blocks.

**Problem.** A continuous map that commutes with the left shift is a sliding block code. The image of a shift space under such a code is again a shift space.

**How the definition helps.** The topological definition reduces the proof to compactness and the fact that the code commutes with the shift (our own). A shift space is closed in the compact full shift, so it is compact. Its continuous image is compact, hence closed in the target full shift. The image is unchanged by the shift because the code commutes with it. The other approach describes the image by listing every finite block that never occurs there. The definitions agree because open sets in the product topology are unions of sets that specify finitely many coordinates.

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “An equivalent way to define a shift space is to take a set of forbidden patterns”

**Sources:** none listed. No primary source with a working link was found.

### Continuous maps give bijective cellular automata local inverses

**Remember:** The inverse is continuous and commutes with the shift, so it has a local rule.

*True by definition.* MSC 37B15 (Dynamical aspects of cellular automata), 68Q80. arXiv math.DS, nlin.CG. Level 2: later undergraduate.

**Definition.** Take the full shift, the space of all two-sided sequences over a finite alphabet with the product topology. A cellular automaton applies the same rule at each cell, using only a fixed finite window of input cells. Equivalently, it is a continuous map of the full shift that commutes with the left shift.

**Problem.** If a cellular automaton is a bijection, its inverse is also a cellular automaton.

**How the definition helps.** The continuous-map definition makes reversibility a consequence of compactness and a commutation rule. A continuous bijection from the compact full shift to itself has a continuous inverse because the space is Hausdorff. The inverse commutes with the shift because the forward map does. In the local-rule description, a forward window does not directly give an inverse window. The work goes into the Curtis–Hedlund–Lyndon theorem, which uses compactness to turn continuity and commutation into a single finite window.

**Wikipedia:** [Curtis–Hedlund–Lyndon theorem](https://en.wikipedia.org/wiki/Curtis%E2%80%93Hedlund%E2%80%93Lyndon_theorem). It says: “It follows by a compactness argument that the function mapping each configuration to its predecessor is itself continuous in the shift space, and it is clearly also shift-invariant.”

**Sources:**

- [G. A. Hedlund, Endomorphisms and automorphisms of the shift dynamical system, Math. Systems Theory 3 (1969) 320–375](https://doi.org/10.1007/BF01691062)

### Minimal invariant sets give recurrent points

**Remember:** A minimal set cannot contain a smaller set of late orbit limits.

*True by definition. Confidence: medium.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A point x is recurrent if its forward iterates return to every neighborhood of x at arbitrarily late times. Equivalently, x belongs to its ω-limit set, the set of limits of its iterates at times tending to infinity. A minimal set is a nonempty closed set that f maps into itself and that contains no smaller such set.

**Problem.** Every continuous map from a nonempty compact metric space to itself has a recurrent point. In fact, every point in a minimal set is recurrent.

**How the definition helps.** Defining recurrence by membership in the ω-limit set turns the return condition into a consequence of minimality (our own). For x in a minimal set M, its ω-limit set is a nonempty closed subset of M that f maps into itself. Minimality makes this subset equal to M, so it contains x. This avoids checking returns to neighborhoods separately. The work goes into proving that a minimal set exists. Zorn’s lemma applies because a nested family of nonempty closed invariant sets has a nonempty closed invariant intersection by compactness.

**Wikipedia:** [Recurrent point](https://en.wikipedia.org/wiki/Recurrent_point). It says: “A point x ∈ X is said to be recurrent (for f) if x ∈ ω(x), i.e. if x belongs to its ω-limit set.”

**Sources:** none listed. No primary source with a working link was found.

### Nested tails give compact and nonempty ω-limit sets

**Remember:** Nested nonempty closed tails in a compact space always have a common point.

*True by definition.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 37B02. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Let f be a continuous map from a metric space to itself. The ω-limit set of x consists of limits of its iterates along sequences of times tending to infinity. Equivalently, it is the intersection of the closures of the tails {fᵏ(x) \| k &gt; n}. For a continuous flow, a family of maps indexed by real time, the tails consist of points reached after time s.

**Problem.** In a compact metric space, the ω-limit set of any point is nonempty and compact. It is also connected for a continuous flow.

**How the definition helps.** The tail definition gives compactness and nonemptiness directly from nested closed sets (our own). Each closed tail is a nonempty compact set, and each contains the next one. Their intersection is closed and nonempty by compactness. For a flow, each tail is a continuous image of an interval, so its closure is connected. A nested intersection of nonempty compact connected sets is connected. The work goes into identifying the tail intersection with the limits at times tending to infinity.

**Wikipedia:** [Limit set](https://en.wikipedia.org/wiki/Limit_set). It says: “Both sets are f-invariant, and if X is compact, they are compact and nonempty.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperbolic equilibria make the linearization a faithful picture of the flow

**Remember:** No eigenvalue on the imaginary axis, so the linear part decides.

*Rules out counterexamples. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37D05, 34C41. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** An equilibrium u\* of du/dt = f(u) is hyperbolic if the Jacobian matrix of f at u\* has no eigenvalue with real part zero.

**Problem.** Hartman–Grobman theorem: for smooth f, near a hyperbolic equilibrium, a homeomorphism carries the orbits of the flow onto those of its linearization dU/dt = AU. It also respects time.

**How the definition helps.** When no eigenvalue lies on the imaginary axis, the small nonlinear terms cannot change which directions grow and which shrink. The condition excludes the cases where the linearization decides nothing. For example, u′ = u³ and u′ = −u³ both have the linearization u′ = 0. But the first repels and the second attracts (our own). Even with hyperbolicity, the page says that the conjugating map need not be smooth, nor even locally Lipschitz. It is Hölder continuous, with exponent arbitrarily close to 1.

**Wikipedia:** [Hartman–Grobman theorem](https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem). It says: “hyperbolicity means that no eigenvalue of the linearization has real part equal to zero.”

**Sources:**

- [P. Hartman, A lemma in the theory of structural stability of differential equations, Proceedings of the American Mathematical Society 11 (1960) 610–620](https://doi.org/10.1090/S0002-9939-1960-0121542-7)

### An ergodic square rules out nonconstant eigenfunctions

**Remember:** An eigenfunction times its conjugate gives an invariant function on the square.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** A map preserving a probability measure is ergodic if every invariant measurable set has measure zero or one. One definition calls an invertible probability system weakly mixing if its product with itself is ergodic. An equivalent definition says that every eigenfunction is constant almost everywhere. An eigenfunction is a nonzero square-integrable function f with f∘T = λf for some complex number λ.

**Problem.** If the square T × T is ergodic, then every eigenfunction of T is constant almost everywhere.

**How the definition helps.** The square definition rules out a nonconstant eigenfunction by making it produce an invariant function on the product (our own). Preservation of the square-integrable norm gives \|λ\| = 1. The function f(x) times the complex conjugate of f(y) is therefore unchanged by T × T. Ergodicity makes that function constant almost everywhere, and fixing a y with f(y) ≠ 0 shows that f itself is constant almost everywhere. The work goes into the converse, which can use the spectral theorem to show that no other invariant functions survive on the square.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “Proposition. A dynamical system (X, μ, T) is weakly mixing if and only if (X², μ ⊗ μ, T × T) is also ergodic.”

**Sources:** none listed. No primary source with a working link was found.

### Ergodic measures are extreme points, so every compact system has one

**Remember:** Ergodic measures are the corners of the convex set of invariant measures.

*Makes the theorem clean to state or prove.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A05, 28D05. arXiv math.DS. Level 3: graduate.

**Definition.** An invariant probability measure μ for a map T is ergodic if every invariant set has measure 0 or 1. Equivalently, μ is an extreme point of the convex set of invariant probability measures. That is, μ is not a proper average of two different invariant measures.

**Problem.** Does every continuous map of a compact metric space have an ergodic measure? Can every invariant measure be written in terms of ergodic ones?

**How the definition helps.** In the extreme-point form, both questions become convex geometry. The Krylov–Bogolyubov argument shows that the invariant measures form a nonempty set, which is compact and convex in the weak-\* topology. The Krein–Milman theorem then gives an extreme point, that is, an ergodic measure. Choquet theory writes every invariant measure as an average over ergodic measures, which is the ergodic decomposition. The work lies in proving that the two definitions of ergodic agree.

**Wikipedia:** [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “a measure is ergodic for T if and only if it is an extreme point of this convex set.”

**Sources:**

- [N. Krylov, N. Bogolyubov, La théorie générale de la mesure dans son application à l'étude des systèmes dynamiques de la mécanique non linéaire, Annals of Mathematics 38 (1937) 65–113](https://doi.org/10.2307/1968511)

### Ergodicity makes time averages equal space averages

**Remember:** An ergodic system cannot be split into two invariant pieces of positive measure.

*Makes the theorem clean to state or prove.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** Let T be a measure-preserving map on a probability space. T is ergodic when every invariant measurable set has measure 0 or 1.

**Problem.** The ergodic hypothesis: the long-run time average of an observable along an orbit equals its average over the whole space.

**How the definition helps.** Ergodicity leaves no invariant pieces, so the time average cannot differ from piece to piece and must be a constant. Birkhoff's theorem shows that time averages exist almost everywhere for any measure-preserving map. In general, the limit is the conditional expectation on the invariant σ-algebra (the σ-algebra of invariant sets). So the limit can differ between invariant pieces; a rotation of the circle by a rational angle is an example. Ergodicity makes the invariant σ-algebra trivial, so the limit is a constant, which must be the space average. That the limit is the conditional expectation on invariant sets is our own summary. The hard part is the pointwise convergence itself.

**Wikipedia:** [Ergodic theory](https://en.wikipedia.org/wiki/Ergodic_theory), [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “In general the time average and space average may be different. But if the transformation is ergodic, and the measure is invariant, then the time average is equal to the space average almost everywhere.”

**Sources:**

- [Birkhoff, G. D. (1931). Proof of the ergodic theorem. Proceedings of the National Academy of Sciences 17, 656–660.](https://doi.org/10.1073/pnas.17.2.656)

### The ergodic-product definition makes weak mixing closed under products

**Remember:** Test the two factors against an ergodic system one at a time.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing). arXiv math.DS. Level 3: graduate.

**Definition.** A probability-preserving map is ergodic if every invariant measurable set has measure zero or one. One definition calls T weakly mixing if T × R is ergodic for every ergodic probability system R. Another tests all measurable pairs A and B by averaging \|μ(A ∩ T⁻ᵏB) − μ(A)μ(B)\| over k from 0 to n − 1. It requires every such average to tend to zero.

**Problem.** The product of two weakly mixing probability systems is weakly mixing.

**How the definition helps.** The product definition proves closure under products by regrouping three factors (our own). Take any ergodic system R and weakly mixing systems T and S. First S × R is ergodic, and then T × (S × R) is ergodic. This is the same system as (T × S) × R up to regrouping coordinates. The work goes into proving equivalence with the definition that averages the absolute errors in event probabilities.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “Proposition. A dynamical system (X, μ, T) is weakly mixing if and only if, for any ergodic dynamical system (Y, ν, S), the system (X × Y, μ ⊗ ν, T × S) is also ergodic.”

**Sources:** none listed. No primary source with a working link was found.

### The function definition makes strong mixing an operator invariant

**Remember:** The operator equivalence preserves fixed functions and the inner products that test mixing.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** A map T preserving a probability measure is strongly mixing if μ(A ∩ T⁻ⁿB) tends to μ(A)μ(B) for every pair of measurable sets. The Koopman operator U sends each square-integrable function f to f∘T. Equivalently, for any two square-integrable functions f and g of mean zero, the inner product of Uⁿf with g tends to zero.

**Problem.** If two Koopman operators are related by an inner-product-preserving linear bijection that intertwines them, their probability systems are either both strongly mixing or neither is.

**How the definition helps.** The function definition expresses mixing in terms that an equivalence of operators preserves (our own). In a mixing system, the fixed functions of U are exactly the constants. The equivalence carries fixed functions to fixed functions, so the other system also has only constant fixed functions. It therefore carries mean-zero functions to mean-zero functions and preserves the inner products that test mixing. The work goes into passing from sets to functions by approximating square-integrable functions with linear combinations of indicator functions.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “is strongly mixing if, for any function f ∈ L²(X, μ), the sequence (f \\circ T<sup>n</sup>)<sub>n \\ge 0</sub> converges weakly to \\int<sub>X</sub> f \\, d \\mu”

**Sources:** none listed. No primary source with a working link was found.

### The invariant-function definition makes ergodic eigenspaces one-dimensional

**Remember:** Divide eigenfunctions with the same eigenvalue to get an invariant, hence constant, function.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** A map T preserving a probability measure is ergodic if each invariant measurable set has measure zero or one. Equivalently, every square-integrable function unchanged by T is constant almost everywhere. An eigenfunction is a nonzero square-integrable complex function f with f∘T = λf almost everywhere, for some complex number λ.

**Problem.** For an ergodic map, every eigenfunction has constant absolute value almost everywhere. Each eigenvalue has a one-dimensional eigenspace, and the eigenvalues form a subgroup of the unit circle.

**How the definition helps.** The invariant-function definition makes absolute values and quotients useful because any invariant function must be constant (our own). The map preserves the norm, so \|λ\| = 1 and \|f\| is invariant. Thus \|f\| is a positive constant almost everywhere. If g has the same eigenvalue, then g/f is bounded and invariant, so it is constant almost everywhere. Products and complex conjugates of these bounded eigenfunctions give products and inverses of eigenvalues. The work in the function definition is its equivalence with the set definition, which uses level sets of invariant functions.

**Paper or page:** [Characterization of Ergodicity in terms of Koopman Operator](https://proofwiki.org/wiki/Characterization_of_Ergodicity_in_terms_of_Koopman_Operator). It says: “(5): For all f ∈ L² μ: if U<sub>T</sub> f = f for μ-a.e., then f is constant μ-a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Defining generators by symbolic names makes the system a shift

**Remember:** Unique names let the naming map turn the system into a shift.

*True by definition. Confidence: medium.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** For a finite measurable partition Q, the symbolic name of x lists which piece contains x, Tx, T²x, and so on. A forward generator is a partition whose symbolic names separate points on a set of full measure. The equivalent event definition asks that the inverse images T⁻ⁿQ together generate all measurable events up to null sets.

**Problem.** Let T preserve a probability measure on a standard Borel space, a space measurably equivalent to a Borel subset of a complete separable metric space. A forward generator with k pieces gives an isomorphism up to null sets with the one-sided shift on k symbols. The measure for the shift is the law of the symbolic names.

**How the definition helps.** The symbolic definition makes the isomorphism a matter of inverting the naming map on a set of full measure (our own). The map commutes with time because the name of Tx drops the first symbol from the name of x. A forward generator makes the naming map one-to-one on a Borel set of full measure. By requiring every forward iterate to stay in that set, we can take it to be invariant under forward time. Lusin–Souslin gives a measurable inverse on the image of this one-to-one Borel map. The event definition does not display this inverse directly. The work goes into the measurable inverse theorem and the equivalence between separating points and generating events.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “A partition Q is called a generator or generating partition if μ-almost every point x has a unique symbolic name.”

**Sources:** none listed. No primary source with a working link was found.

### Kolmogorov–Sinai entropy is an isomorphism invariant by its definition

**Remember:** Take the supremum over all partitions, and isomorphisms cannot change it.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** Take a measure-preserving map T and a finite partition Q of the space. Form the common refinement of Q, T⁻¹Q, …, T⁻⁽ⁿ⁻¹⁾Q, take its entropy, divide by n and let n grow. The Kolmogorov–Sinai entropy of T is the supremum of this rate over all finite measurable partitions Q.

**Problem.** Are the Bernoulli shift on two symbols with equal weights and the shift on three symbols with equal weights isomorphic? They have the same spectral invariants, so the older tools could not tell them apart (our own). Entropy shows that they are not isomorphic, because their entropies are log 2 and log 3.

**How the definition helps.** The supremum runs over all partitions, so the number depends on no choice, and an isomorphism carries partitions to partitions. So isomorphic systems have equal entropy, nearly by definition. The hard part moves to computing the number. Sinai's theorem says that one generating partition already gives the supremum. Ornstein's converse, that Bernoulli shifts with equal entropy are isomorphic, is much harder.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:**

- [Ya. G. Sinai, On the notion of entropy of a dynamical system, Doklady Akademii Nauk SSSR 124 (1959) 768–771; English version in Ya. G. Sinai, Selecta I, Springer (2010)](https://doi.org/10.1007/978-0-387-87870-6_1)
- [D. Ornstein, Bernoulli shifts with the same entropy are isomorphic, Advances in Mathematics 4 (1970) 337–352](https://doi.org/10.1016/0001-8708(70)90029-0)

### The partition supremum makes entropy decrease under factor maps

**Remember:** Every partition of the factor gives a partition with the same entropy upstairs.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** For a probability-preserving map T and a finite partition Q, let h(T, Q) be the limit of the Shannon entropy per step of length-n visits. Shannon entropy adds the values −p log p over the probabilities p of the possible lists of visits. Kolmogorov–Sinai entropy h(T) is the supremum of h(T, Q) over all finite measurable partitions. Another formula uses a single generating partition, whose iterates together determine all measurable events up to null sets.

**Problem.** Let T and S preserve probability measures. If a measure-preserving map π from T’s space to S’s satisfies π∘T = S∘π, then h(S) ≤ h(T).

**How the definition helps.** The supremum definition makes the inequality a comparison of two collections of partitions (our own). Each partition P for S pulls back through π to a partition for T. Because π preserves probabilities and intertwines the maps, the probabilities of all finite lists of visits agree. Their entropies agree, so each value in the supremum for S also appears for T. The generator formula does not show this directly because a generator upstairs need not give one downstairs. The work in that formula goes into the Kolmogorov–Sinai generator theorem, which lets a finite generating partition compute the supremum.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:** none listed. No primary source with a working link was found.

### Natural extensions make the maps h∘g and g∘h conjugate

**Remember:** Keep every past, and swapping the factors costs nothing.

*True by definition. Confidence: medium.* MSC 37B02 (Dynamics in general topological spaces), 37C15, 54B35. arXiv math.DS. Level 3: graduate.

**Definition.** Let f map a compact space X to itself. Its natural extension acts on backward orbits, the sequences (x₀, x₁, …) with f(xᵢ₊₁) = xᵢ. It sends such a sequence to (f(x₀), x₀, x₁, …). This map is a homeomorphism, and its inverse drops the first entry.

**Problem.** Let g map X onto Y and h map Y onto X, with f = h∘g and F = g∘h. The maps f and F need not be conjugate. The paper uses that their natural extensions are conjugate, meaning a homeomorphism intertwines them.

**How the definition helps.** On backward orbits, g and h induce maps that are inverse to each other, so they give a conjugacy. This proof is our own. Send (x₀, x₁, …) to (g(x₁), g(x₂), …), and send (y₀, y₁, …) back to (h(y₀), h(y₁), …). A direct check shows that the two maps are inverse to each other. Both maps also intertwine the two natural extensions. The hard work of the paper is choosing g and h for an arbitrary dendrite, a tree-like continuum, to get the pseudo-arc.

**Paper or page:** [On conjugacy between natural extensions of 1-dimensional maps](https://arxiv.org/abs/2110.11440v1). It says: “the natural extensions of f and F are conjugate,”

**Sources:**

- [J. Boroński, P. Minc, S. Štimac, On conjugacy between natural extensions of 1-dimensional maps, arXiv:2110.11440 (2021)](https://arxiv.org/abs/2110.11440v1)

### Devaney chaos needs no metric, because sensitivity follows from the rest

**Remember:** Transitivity plus dense periodic orbits already force sensitivity.

*True by definition. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37B20. arXiv math.DS. Level 3: graduate.

**Definition.** Devaney calls a map chaotic if it has sensitive dependence on initial conditions, is topologically transitive, and has dense periodic orbits. By a theorem of Banks and others, on infinite spaces the last two conditions imply the first. Transitive means that for any two nonempty open sets U and V, some iterate of U meets V.

**Problem.** Is chaos preserved by topological conjugacy? Sensitivity depends on the metric, so on a non-compact space a change of metric can destroy it (our own). So it is not clear that Devaney chaos is a topological property.

**How the definition helps.** Banks, Brooks, Cairns, Davis and Stacey showed in 1992 that transitivity and dense periodic orbits imply sensitivity for continuous maps of metric spaces. Their theorem needs the space to be infinite (our own). So the two topological conditions already carry the whole definition. Both are preserved by conjugacy, so Devaney chaos is a topological property by definition (our own). On intervals, transitivity alone implies the other two conditions.

**Wikipedia:** [Chaos theory](https://en.wikipedia.org/wiki/Chaos_theory). It says: “In some cases, the last two properties above have been shown to actually imply sensitivity to initial conditions.”

**Sources:**

- [J. Banks, J. Brooks, G. Cairns, G. Davis, P. Stacey, On Devaney's definition of chaos, American Mathematical Monthly 99 (1992) 332–334](https://doi.org/10.1080/00029890.1992.11995856)

### On compact spaces, expansivity does not depend on the metric

**Remember:** On a compact space, expansivity belongs to the topology, not the metric.

*Rules out counterexamples. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)). arXiv math.DS. Level 3: graduate.

**Definition.** A homeomorphism f of a metric space is expansive if there is ε₀ &gt; 0 with this property. Any two distinct points are moved at least ε₀ apart by some iterate fⁿ, forward or backward.

**Problem.** One wants expansivity to be a property of the dynamics. Then two topologically conjugate homeomorphisms, which are the same map seen through a homeomorphism, are both expansive or both not. For this, the choice of metric must not matter.

**How the definition helps.** Compactness makes two metrics with the same topology uniformly equivalent, so a gap for one metric gives a gap for the other (our own). So expansivity is a topological property, and conjugacy preserves it. Without compactness this fails (our own example). The map x ↦ 2x on ℝ is expansive for the usual metric. It is not expansive for the metric \|arctan x − arctan y\|, which gives the same topology. There, the points x and (1 + δ)x stay within δ/2 of each other under every iterate. With compactness, expansive homeomorphisms also have finite topological entropy (our own).

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “The space X is often assumed to be compact, since under that assumption expansivity is a topological property”

**Sources:** none listed. No primary source with a working link was found.

### A graph presentation makes shift entropy a matrix growth rate

**Remember:** Count graph walks with matrix powers, then take the logarithmic growth rate.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B40. arXiv math.DS. Level 3: graduate.

**Definition.** A shift of finite type consists of sequences over a finite alphabet that avoid a fixed finite list of blocks. By treating sufficiently long blocks as letters, one can represent it as a shift on two-sided vertex walks in a finite directed graph. For a shift, the topological entropy is the limit of the log of the number of length-n blocks divided by n.

**Problem.** Suppose the graph has an edge and each vertex can reach every other vertex. Then its shift has entropy log λ, where λ is the largest positive eigenvalue of its adjacency matrix.

**How the definition helps.** In the graph definition, counting blocks reduces to counting finite walks (our own). Every walk extends in both directions, so the number of blocks of length n + 1 is the sum of the entries of Aⁿ. The Perron–Frobenius theorem gives a positive vector v with A v = λv. Comparing v with the all-ones vector bounds that sum above and below by positive constants times λⁿ. The work goes into recoding the forbidden blocks as permitted edges and proving that block growth agrees with the general definition using open covers.

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy), [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type). It says: “Then h(σ)=log λ where λ is the largest positive eigenvalue of A.”

**Sources:** none listed. No primary source with a working link was found.

### Images of finite-type shifts make sofic shifts closed under coding

**Remember:** An image of an image of a finite-type shift is still sofic.

*True by definition.* MSC 37B10 (Symbolic dynamics), 68Q45. arXiv math.DS. Level 3: graduate.

**Definition.** A shift space is a closed set of two-sided sequences over a finite alphabet that is unchanged by shifting left. A shift has finite type if a finite list of forbidden blocks defines it. A sliding block code is a continuous map between shift spaces that commutes with the shift. A shift is sofic if it is the image of a finite-type shift under such a code.

**Problem.** The image of a sofic shift under a sliding block code is sofic.

**How the definition helps.** The image definition makes closure under coding a matter of composing two maps (our own). Write the sofic shift X as ψ(Y), where Y has finite type. For a code φ on X, the image φ(X) equals (φ∘ψ)(Y), and the composite is again a code. Another definition asks that a finite automaton accept exactly the blocks that occur in X. That route must show that a code preserves this property of the block language. The work goes into the equivalence, which identifies both descriptions with shifts given by finite graphs whose edges carry letters.

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “Λ is a sofic shift if it is the image of a shift of finite type under sliding block code”

**Sources:**

- [B. Weiss, Subshifts of finite type and sofic systems, Monatsh. Math. 77 (1973) 462–474](https://doi.org/10.1007/bf01295322)

### Chain recurrence splits every compact flow into recurrent and gradient-like parts

**Remember:** Allow tiny jumps, and every flow becomes recurrent part plus downhill part.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 37B35. arXiv math.DS. Level 3: graduate.

**Definition.** An ε-chain from x to y follows the flow for pieces of time at least 1, with jumps smaller than ε between the pieces. A point x is chain recurrent if for every ε &gt; 0 there is an ε-chain from x back to x. This allows small errors, so it is weaker than ordinary recurrence.

**Problem.** Conley's theorem: every flow on a compact metric space has a continuous complete Lyapunov function. The page defines this as a function that does not increase along solutions and is constant on isolated invariant sets. In Conley's form it strictly decreases off the chain-recurrent set and is constant on each piece of that set (our own).

**How the definition helps.** Chain recurrence counts orbits that come back up to small errors, so the set of chain-recurrent points is closed and invariant (our own). Ordinary recurrent points need not form a closed set, so they give no clean split (our own). A point outside the chain-recurrent set cannot come back even with small jumps, so a function can be built that decreases there (our own). Conley built it from pairs of an attractor and its dual repeller (our own). That is the gradient-like part, and the work moves to this construction.

**Wikipedia:** [Conley's fundamental theorem of dynamical systems](https://en.wikipedia.org/wiki/Conley%27s_fundamental_theorem_of_dynamical_systems). It says: “every flow of a dynamical system with compact phase portrait admits a decomposition into a chain-recurrent part and a gradient-like flow part.”

**Sources:**

- [C. Conley, Isolated Invariant Sets and the Morse Index, CBMS Regional Conference Series in Mathematics 38, American Mathematical Society (1978)](https://doi.org/10.1090/cbms/038)

### The Conley index detects nonempty isolated invariant sets

**Remember:** The empty invariant set has the index of a point.

*True by definition.* MSC 37B30 (Index theory for dynamical systems, Morse-Conley indices). arXiv math.DS. Level 3: graduate.

**Definition.** An isolated invariant set S consists of the points whose full trajectories stay in some compact neighborhood of S. An index pair uses compact sets N₂ ⊆ N₁ such that the closure of N₁ ∖ N₂ isolates S. A trajectory leaving N₁ must first meet N₂, and after meeting N₂ it stays there as long as it stays in N₁. The index records the shape up to pointed homotopy, or deformation respecting a base point, of N₁ with N₂ collapsed to a point.

**Problem.** If the Conley index is not the pointed homotopy type of a point, then S is nonempty.

**How the definition helps.** The quotient definition makes emptiness detectable by letting us choose the simplest possible index pair for the empty set (our own). Take N₁ = N₂ to be a single point in the phase space. The difference is empty, and the collapsed space is a point. Thus a nontrivial index proves existence without having to find a full trajectory inside the isolating neighborhood. The work goes into Conley’s theorems that index pairs exist and the index does not depend on which pair is used.

**Wikipedia:** [Conley index theory](https://en.wikipedia.org/wiki/Conley_index_theory). It says: “If the index is nontrivial then the invariant set S is nonempty. This principle can be amplified to establish existence of fixed points and periodic orbits inside N.”

**Sources:**

- [C. Conley, Isolated invariant sets and the Morse index, CBMS Regional Conference Series in Mathematics 38 (1978)](https://doi.org/10.1090/cbms/038)

### Counting separated orbits gives isometries zero topological entropy

**Remember:** If distances never change, counting longer orbit segments adds nothing.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** Let f be a continuous map from a compact metric space to itself. The distance up to time n is the maximum of d(fᵏx, fᵏy) over 0 ≤ k &lt; n. Let N(n, ε) be the largest number of points pairwise more than ε apart in this distance. The Bowen–Dinaburg entropy is the limit as ε decreases to zero of the limit superior of log N(n, ε)/n.

**Problem.** Every isometry from a nonempty compact metric space to itself has zero topological entropy.

**How the definition helps.** The separated-set definition makes the entropy zero because the count does not grow with time (our own). An isometry preserves every distance, so the distance up to time n is just the original distance. Compactness bounds the number of points separated by ε, and this bound is independent of n. The open-cover definition instead counts the sets needed to cover the space after refining the covers from successive time steps. The work goes into proving that the two definitions agree on compact metric spaces.

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy). It says: “Since X is compact, N(n, ε) is finite and represents the number of distinguishable orbit segments of length n, assuming that we cannot distinguish points within ε of one another.”

**Sources:**

- [R. Bowen, Entropy for group endomorphisms and homogeneous spaces, Trans. Amer. Math. Soc. 153 (1971) 401–414](https://doi.org/10.1090/S0002-9947-1971-0274707-X)
- [R. L. Adler, A. G. Konheim, M. H. McAndrew, Topological entropy, Trans. Amer. Math. Soc. 114 (1965) 309–319](https://doi.org/10.1090/S0002-9947-1965-0175106-9)

### Defining topological entropy by open covers makes it a conjugacy invariant

**Remember:** Built from open sets only, entropy survives every homeomorphism.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** Adler, Konheim and McAndrew used finite open covers of a compact space X. For a cover C, H(C) is the logarithm of the fewest members of C that still cover X. The entropy of f is the supremum over all C of the growth rate per step of H(C ∨ f⁻¹C ∨ … ∨ f⁻⁽ⁿ⁻¹⁾C).

**Problem.** Two maps f and g are topologically conjugate if a homeomorphism h has h ∘ f = g ∘ h. One wants a number that conjugate maps always share. Bowen and Dinaburg later gave an equivalent definition that counts separated orbit segments with a metric.

**How the definition helps.** The first definition uses only open sets, and a homeomorphism carries open covers to open covers. So invariance under conjugacy follows at once. Bowen's definition counts orbit segments that stay ε apart. So its invariance needs a proof that all metrics for the topology give the same value (our own). Bowen's form is easier to compute. The work moves to the theorem that the two definitions agree, and to the variational principle that links topological and measure entropy.

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy). It says: “Topological entropy is an invariant of topological dynamical systems, meaning that it is preserved by topological conjugacy.”

**Sources:**

- [R. L. Adler, A. G. Konheim, M. H. McAndrew, Topological entropy, Transactions of the American Mathematical Society 114 (1965) 309–319](https://doi.org/10.1090/S0002-9947-1965-0175106-9)

### Koopman products add exponents

**Remember:** Multiply the functions and add their growth exponents.

*True by definition.* MSC 37C10 (Dynamics induced by flows and semiflows), 34C14. arXiv math.DS. Level 3: graduate.

**Definition.** For a flow, choose a space of scalar functions on the states. A Koopman eigenfunction with exponent λ is a nonzero function whose value after time t equals exp(λt) times its initial value.

**Problem.** Suppose two such functions have exponents λ and μ. If their product belongs to the chosen space and is nonzero somewhere, it has exponent λ + μ.

**How the definition helps.** The definition tracks function values along trajectories, so multiplying two values multiplies their exponential factors. In our own comparison, a matrix acting on state vectors has no corresponding product rule. Finding the two eigenfunctions remains a separate problem.

**Paper or page:** [Participation Factors for Nonlinear Autonomous Dynamical Systems in the Koopman Operator Framework](https://arxiv.org/abs/2409.10105v1). It says: “Furthermore, there exist Koopman eigenvalues j₁λ₁ + ⋯ + jₙλₙ for all j₁,…,jₙ ∈ ℕ₀ such that j₁ + ⋯ + jₙ &gt; 1”

**Sources:** none listed. No primary source with a working link was found.

### Topological equivalence lets systems with periodic orbits be structurally stable

**Remember:** Match the orbits, not the clocks, and stable systems exist.

*Makes the theorem clean to state or prove.* MSC 37C15 (Topological and differentiable equivalence, conjugacy, moduli, classification of dynamical systems), 37C20, 37E35. arXiv math.DS. Level 3: graduate.

**Definition.** A vector field is structurally stable if every small C¹ perturbation of it has an equivalent flow. Two flows are topologically equivalent when a homeomorphism carries the oriented orbits of one onto those of the other. A homeomorphism is a continuous map with a continuous inverse. It does not have to respect the time along the orbits.

**Problem.** Andronov and Pontryagin wanted to show that typical systems on the disk and the sphere are robust under small changes. Their criterion says such a system is structurally stable exactly when it has finitely many equilibria and cycles. These must all be hyperbolic, with no saddle-to-saddle connections.

**How the definition helps.** The definition matches orbits by a continuous map and ignores time, so small changes of speed do no harm. A small perturbation of a limit cycle usually changes its period. A map that must respect time cannot carry a cycle onto a cycle with a different period. So with a stricter notion, no system with a periodic orbit could be stable, and the Andronov–Pontryagin criterion would describe nothing. The map must also be allowed to be only continuous. A perturbation changes the eigenvalues at an equilibrium, and a smooth conjugacy would keep them (our own). The hard part is still the proof that the listed conditions give structural stability.

**Wikipedia:** [Structural stability](https://en.wikipedia.org/wiki/Structural_stability). It says: “Without these restrictions, no continuous time system with fixed points or periodic orbits could have been structurally stable.”

**Sources:**

- [A. A. Andronov, L. S. Pontryagin, Coarse systems (1937), reprinted in V. I. Arnold (ed.), Geometric Methods in the Theory of Differential Equations, Springer (1988)](https://archive.org/details/geometricalmetho0000arno_o8o1)

### Lefschetz numbers make the zeta function rational

**Remember:** Replace point counts with alternating traces, then turn the trace series into determinants.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37C30, 55M20. arXiv math.DS, math.AT. Level 3: graduate.

**Definition.** Let f be a continuous map from a finite polyhedron to itself. Rational homology groups Hᵢ are finite-dimensional vector spaces that record holes of each dimension. The Lefschetz number L(f) is the alternating sum of traces of the linear maps f induces on these groups. The Lefschetz zeta function is exp(∑ₙ L(fⁿ)tⁿ/n), where n runs over the positive integers.

**Problem.** The Lefschetz zeta function is rational and does not change when f is continuously deformed. Its factors are det(I − tMᵢ), with Mᵢ the induced map on Hᵢ and exponent −1 for even i and +1 for odd i.

**How the definition helps.** Using Lefschetz numbers makes rationality a matrix calculation rather than a count of periodic points. The Artin–Mazur zeta function uses actual fixed-point counts, which may be infinite. The map fⁿ induces Mᵢⁿ because induced maps preserve composition. Summing the logarithm series over the eigenvalues of Mᵢ gives the determinant factor. Continuous deformation leaves every Mᵢ unchanged. The matrix argument needs no fixed-point theorem, but relating the traces to actual fixed points requires the Lefschetz fixed-point theorem.

**Wikipedia:** [Lefschetz zeta function](https://en.wikipedia.org/wiki/Lefschetz_zeta_function). It says: “Thus it is a rational function. The polynomials occurring in the numerator and denominator are essentially the characteristic polynomials of the map induced by f on the various homology spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Defining transfer by integration makes invariant densities fixed points

**Remember:** The transfer operator gives the density after transport, so invariance means it stays unchanged.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37C40. arXiv math.DS. Level 3: graduate.

**Definition.** Let T be a measurable map of a space with a σ-finite reference measure m, and assume preimages of null sets are null. The transfer operator L sends an integrable density h to the function satisfying ∫ (Lh)g dm = ∫ h(g∘T) dm for all bounded measurable g. This integration rule is called duality with the composition operator g ↦ g∘T. For an interval map with smooth invertible branches and Lebesgue measure, another definition sums h(y)/\|T′(y)\| over preimages y of x.

**Problem.** A probability density h gives a T-invariant measure h·m exactly when Lh = h almost everywhere.

**How the definition helps.** The integration definition makes invariance the assertion that h and Lh have the same integrals against every bounded test function (our own). Transporting h·m by T replaces g in its integral by g∘T. By duality the result is the integral of g against Lh·m, so equality of the measures is equality of the densities almost everywhere. The preimage formula hides that comparison. The work goes into deriving the preimage formula by change of variables on each branch, or using the Radon–Nikodym theorem to obtain Lh in general.

**Wikipedia:** [Transfer operator](https://en.wikipedia.org/wiki/Transfer_operator). It says: “The left-adjoint of the Perron–Frobenius operator is the Koopman operator or composition operator.”

**Sources:** none listed. No primary source with a working link was found.

### Edge shifts turn periodic-point counts into a rational zeta function

**Remember:** Closed walks give traces, and the trace series gives a determinant.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** The Artin–Mazur zeta function of T is exp(∑ₙ \|Fix(Tⁿ)\| zⁿ/n), where n runs over the positive integers. Here Fix(Tⁿ) is the set of points fixed by the n-th iterate, assumed finite for each n. A shift of finite type consists of sequences over a finite alphabet that avoid a fixed finite list of blocks. Equivalently, one can recode it as the left shift on two-sided edge walks in a finite directed graph.

**Problem.** For the resulting edge shift with adjacency matrix A, the zeta function is 1/det(I − zA). In particular, it is rational.

**How the definition helps.** The edge definition turns periodic-point counts into traces of matrix powers (our own). A point fixed by Tⁿ is a closed edge walk of length n with a specified starting position. Its count is the trace of Aⁿ, where the matrix entries count edges between vertices. Summing the logarithm series over the eigenvalues gives the determinant formula. The work goes into recoding the forbidden blocks as a graph and proving that the recoding matches points fixed by each iterate.

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type), [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “For subshifts of finite type, the zeta function is a rational function of z”

**Sources:**

- [M. Artin, B. Mazur, On periodic points, Ann. of Math. 81 (1965) 82–99](https://doi.org/10.2307/1970384)

### Writing the Artin–Mazur zeta as a product over orbits gives integer coefficients

**Remember:** Each periodic orbit contributes a geometric series with coefficients zero and one.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.). arXiv math.DS. Level 3: graduate.

**Definition.** Let f map a set to itself, with finitely many points fixed by each iterate fⁿ. Define ζ(z) as the product over periodic orbits of 1/(1 − z raised to d), where d is the length of the orbit. The usual definition is the exponential of the sum over n ≥ 1 of \|Fix(fⁿ)\|zⁿ/n. Here \|Fix(fⁿ)\| counts the points fixed by fⁿ.

**Problem.** The Artin–Mazur zeta function is a power series with nonnegative integer coefficients.

**How the definition helps.** Each factor of the product is a geometric series whose coefficients are 0 or 1. The coefficient of zᴺ involves only the finitely many orbits of length at most N, so it is a nonnegative integer. In the exponential form, integrality is hidden by the division by n. The work moves to showing that the product equals the exponential. Take logarithms. An orbit of length d gives d points fixed by fⁿ when d divides n. So its share of the sum is that of z raised to kd, divided by k, over k ≥ 1. These steps are our own; Wikipedia states the finiteness condition.

**Wikipedia:** [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “Note that the zeta function is defined only if the set of fixed points is finite for each n.”

**Sources:**

- [Michael Artin and Barry Mazur, On Periodic Points (1965)](https://doi.org/10.2307/1970384)

### Pseudo-orbits make computed orbits of chaotic maps meaningful

**Remember:** A computed orbit is a pseudo-orbit, and a true orbit shadows it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37C50 (Approximate trajectories (pseudotrajectories, shadowing, etc.) in smooth dynamics), 37B65. arXiv math.DS. Level 3: graduate.

**Definition.** An ε-pseudo-orbit of a map f is a sequence of points. Each point lies within ε of the image under f of the point before it.

**Problem.** In a chaotic system, rounding errors grow exponentially, so a computed orbit soon leaves the true orbit with the same start. Shadowing lemma: let Λ be a hyperbolic invariant set of a diffeomorphism f, with a suitable neighbourhood U. For every δ &gt; 0 there is ε &gt; 0 such that every ε-pseudo-orbit that stays in U stays within δ of some true orbit.

**How the definition helps.** The definition describes a computer orbit exactly, as a sequence with small errors at each step. So the question of what a computation shows becomes a statement about pseudo-orbits. Near a hyperbolic set, the stretching and shrinking directions let one correct all the errors at once by a change of the start (our own). The shadowing orbit has a different start, so sensitivity is no contradiction. Without hyperbolicity the lemma can fail, and Hammel, Yorke and Grebogi checked shadowing over long finite times by computer (our own).

**Wikipedia:** [Shadowing lemma](https://en.wikipedia.org/wiki/Shadowing_lemma). It says: “every pseudo-orbit (which one can think of as a numerically computed trajectory with rounding errors on every step) stays uniformly close to some true trajectory”

**Sources:**

- [S. M. Hammel, J. A. Yorke, C. Grebogi, Numerical orbits of chaotic processes represent true orbits, Bulletin of the American Mathematical Society 19 (1988) 465–469](https://doi.org/10.1090/S0273-0979-1988-15701-1)

### Transversality excludes saddle connections, so Morse–Smale flows are structurally stable

**Remember:** Tilt the torus so saddles stop meeting, and the flow becomes stable.

*Rules out counterexamples.* MSC 37D15 (Morse-Smale systems), 37C20, 37E35. arXiv math.DS. Level 3: graduate.

**Definition.** A flow on a compact manifold is Morse–Smale if it has finitely many equilibria and periodic orbits, all hyperbolic. Every orbit must tend to one of them. Also, the stable and unstable manifolds of these equilibria and orbits must meet transversally. That is, at each point where they meet, their tangent spaces together span the whole tangent space.

**Problem.** Morse–Smale flows are structurally stable. On compact orientable surfaces, Peixoto's theorem says a flow is structurally stable exactly when it is Morse–Smale. Morse–Smale flows also satisfy the Morse–Smale inequalities between the counts of equilibria and periodic orbits of each index and the Betti numbers.

**How the definition helps.** Transversal intersections persist under small perturbations, and non-transversal ones need not, so the condition removes the fragile cases. The standard bad case is the gradient flow of the height function on an upright torus. There an orbit runs from the upper saddle straight down to the lower saddle. A small tilt breaks this saddle connection and changes the picture of orbits, so the upright flow is not structurally stable (our own). The tilted flow is Morse–Smale. The hard part is the proof by Palis and Smale that Morse–Smale flows are stable in every dimension (our own).

**Wikipedia:** [Morse–Smale system](https://en.wikipedia.org/wiki/Morse%E2%80%93Smale_system), [Peixoto's theorem](https://en.wikipedia.org/wiki/Peixoto%27s_theorem). It says: “the stable and unstable manifolds of the saddle points do not intersect transversely, so the height function does not satisfy the Morse-Smale condition.”

**Sources:**

- [S. Smale, Morse inequalities for a dynamical system, Bulletin of the American Mathematical Society 66 (1960) 43–49](https://doi.org/10.1090/S0002-9904-1960-10386-2)

### Axiom A demands dense periodic points, which hyperbolicity alone does not give

**Remember:** Smale asked for dense periodic points, because hyperbolicity does not supply them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37D20 (Uniformly hyperbolic systems (expanding, Anosov, Axiom A, etc.)), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** A diffeomorphism f satisfies axiom A if its nonwandering set Ω(f) is compact and hyperbolic, and its periodic points are dense in Ω(f). A point is nonwandering if each of its neighbourhoods meets itself again under some iterate of f. Hyperbolic means that the tangent space splits into directions that f stretches and directions that f shrinks, at uniform rates.

**Problem.** Bowen proved that the nonwandering set of an axiom A diffeomorphism carries a Markov partition. So, on a large subset of Ω(f), f is conjugate to a shift of finite type, a symbol shift defined by finitely many forbidden words. Also, f is Ω-stable exactly when it satisfies axiom A and the no-cycle condition.

**How the definition helps.** Smale made density of periodic points a separate axiom, because in higher dimensions hyperbolicity alone does not give it. The page says that with it, Ω(f) is locally maximal: it is the whole invariant set of some neighbourhood. Local maximality together with shadowing is what makes Markov partitions and the splitting of Ω(f) into basic pieces work (our own). Ω-stable means that every small perturbation has a nonwandering set conjugate to Ω(f). The direction from Ω-stability back to axiom A is a hard theorem of Palis from 1988 (our own).

**Wikipedia:** [Axiom A](https://en.wikipedia.org/wiki/Axiom_A). It says: “For surfaces, hyperbolicity of the nonwandering set implies the density of periodic points, but this is no longer true in higher dimensions.”

**Sources:**

- [S. Smale, Differentiable dynamical systems, Bulletin of the American Mathematical Society 73 (1967) 747–817](https://doi.org/10.1090/s0002-9904-1967-11798-1)
- [R. Bowen, Markov partitions for axiom A diffeomorphisms, American Journal of Mathematics 92 (1970) 725–747](https://doi.org/10.2307/2373370)

### The symplectic definition makes Hamiltonian energy conservation immediate

**Remember:** The energy derivative is an alternating pairing of the vector field with itself.

*True by definition.* MSC 37J06 (General theory of finite-dimensional Hamiltonian and Lagrangian systems, Hamiltonian and Lagrangian structures, symmetries, invariants), 70H05. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A symplectic form ω is an alternating bilinear pairing of tangent vectors whose exterior derivative, the differential of the form, vanishes. It is nondegenerate, which means only the zero vector pairs to zero with every vector. The Hamiltonian vector field X of a smooth energy function H is defined by dH(Y) = ω(X, Y) for every tangent vector Y. With standard position and momentum coordinates this gives Hamilton’s equations, dq/dt = ∂H/∂p and dp/dt = −∂H/∂q.

**Problem.** The energy H remains constant along every trajectory of its Hamiltonian vector field.

**How the definition helps.** The symplectic definition makes the rate of change of energy zero because an alternating form vanishes on two copies of the same vector. Along a trajectory the derivative of H is dH(X), which is ω(X, X). With Hamilton’s equations the same proof differentiates H in coordinates and cancels the position and momentum terms (our own). Nondegeneracy gives a unique X, and the coordinate comparison takes a separate calculation.

**Wikipedia:** [Hamiltonian vector field](https://en.wikipedia.org/wiki/Hamiltonian_vector_field). It says: “The Hamiltonian H is constant along the integral curves, because ⟨dH, γ̇⟩ = ω(X<sub>H</sub>(γ), X<sub>H</sub>(γ)) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Signed products make canonical graphs Lagrangian

**Remember:** On the graph, the two forms cancel exactly when the map preserves them.

*True by definition.* MSC 37J11 (Symplectic and canonical mappings). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic form is a closed alternating two-form that pairs each nonzero tangent vector nontrivially with some vector. On the product, subtract the source form from the target form, using the coordinate projections. A Lagrangian submanifold has half the ambient dimension and the form vanishes on its tangent spaces.

**Problem.** A diffeomorphism preserves the symplectic forms exactly when its graph is Lagrangian in the signed product.

**How the definition helps.** On the graph, subtracting the forms tests whether the map preserves them (our own). The usual sum on the product would double the source form for a map that preserves it (our own). The graph has the source dimension, exactly half the product dimension for a diffeomorphism (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “A diffeomorphism φ is a symplectomorphism if and only if Γφ is a Lagrangian submanifold of (M₁ × M₂, ω̃).”

**Sources:** none listed. No primary source with a working link was found.

### Commuting integrals give Lagrangian fibers

**Remember:** Commuting integrals make their common levels Lagrangian.

*Rules out counterexamples.* MSC 37J35 (Completely integrable finite-dimensional Hamiltonian systems, integration methods, integrability tests), 53D12. arXiv math.DS, math.SG. Level 3: graduate.

**Definition.** A conserved function stays constant along the motion. Complete integrability in dimension 2n requires n conserved functions, independent on a dense open set, whose pairwise Poisson brackets vanish. This means that motion generated by each function preserves the others. A common level is regular if the differentials are independent throughout it.

**Problem.** Every regular common level of these functions is Lagrangian, meaning it has dimension n and the symplectic form vanishes on its tangent spaces.

**How the definition helps.** Commutation keeps all n generated fields tangent to the level and makes their pairings under the symplectic form zero (our own). Independence and the regular level theorem make these fields a basis for the tangent space (our own). With zero Hamiltonian in four-dimensional phase space, the first position and its momentum are independent conserved functions (our own). Fixing them leaves the second position and momentum plane, where the symplectic form does not vanish (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “The corresponding level set f⁻¹(c) is a Lagrangian submanifold of M.”

**Sources:** none listed. No primary source with a working link was found.

### Lax pairs preserve eigenvalues

**Remember:** A commutator changes the matrix basis, not its eigenvalues.

*True by definition.* MSC 37J35 (Completely integrable finite-dimensional Hamiltonian systems, integration methods, integrability tests), 70H06. arXiv math.DS, physics.class-ph. Level 3: graduate.

**Definition.** A matrix Lax representation writes the time derivative of a matrix L as BL − LB. The entries of L and B depend on the state of the original system.

**Problem.** In a finite-dimensional matrix Lax equation, the characteristic polynomial is constant along each solution.

**How the definition helps.** The Lax equation makes evolution a change of basis, which preserves the characteristic polynomial (our own). Solve U̇ = BU with U initially the identity (our own). Uniqueness keeps U invertible, and differentiation gives constant U⁻¹LU (our own). This replaces separate conservation proofs with the task of finding matrices that encode the original equations (our own).

**Paper or page:** [Linearization, separability and Lax pairs representation of a₄⁽²⁾ Toda lattice](https://arxiv.org/abs/2501.02164v1). It says: “is given by: Ẋ = \[X(λ), Y(λ)\] by taking”

**Sources:**

- [Peter D. Lax, Integrals of nonlinear equations of evolution and solitary waves (1968)](https://doi.org/10.1002/cpa.3160210503)
- [Bruce Lionnel Lietap Ndi, Djagwa Dehainsala and Joseph Dongho, Linearization, separability and Lax pairs representation of a₄⁽²⁾ Toda lattice (2025)](https://arxiv.org/abs/2501.02164v1)

### Rescaled contact forms expose Reeb motion

**Remember:** Divide the contact form by the Hamiltonian to remove their common scaling.

*True by definition.* MSC 37J55 (Contact systems), 53D10. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A contact one-form η on an odd-dimensional space has derivative nondegenerate on the directions where η vanishes. Let X be the contact field generated by a smooth function H, with η(X) = −H. Wherever H is nonzero, choose the rescaled contact form −η/H.

**Problem.** Where H is nonzero, X is the Reeb field of −η/H. For a contact form α, its Reeb field R satisfies α(R) = 1 and dα(R,v) = 0 for every tangent vector v.

**How the definition helps.** Rescaling gives the field value one under the new form and removes the changing scale of the original form (our own). The contact equations say that differentiation along X multiplies η by a function (our own). Evaluating on X shows that H changes by the same factor, so the flow preserves their ratio (our own). Cartan’s differentiation formula then shows that inserting X into the derivative of the new form gives zero (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “L(Xₕ)η = −ℛ(h)η”

**Sources:** none listed. No primary source with a working link was found.

### Allocations extend Kac's return-time lemma to actions of any countable group

**Remember:** Count the points sent to the set instead of counting time until return.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37A15 (General groups of measure-preserving transformations and dynamical systems), 37A30. arXiv math.DS. Level 4: research.

**Definition.** An allocation chooses, measurably for almost every point, a group move that sends it into a chosen set. The points assigned to each target constitute its fiber, or set of preimages.

**Problem.** Let a countable group act on a probability space and preserve the measure. Suppose that almost every orbit meets a chosen set A. Then for any allocation into A, the fiber sizes integrate to one over A.

**How the definition helps.** An allocation replaces first return time with a count that does not need any order on the group. In our own explanation, partition the source by the chosen group move. Each move preserves measure, so integrating the fiber count recovers the measure of the entire source. The count may vary with the allocation, but its integral does not.

**Paper or page:** [Kac's Lemma and countable generators for actions of countable groups](https://arxiv.org/abs/2410.18488v2), [Kac's Lemma and countable generators for actions of countable groups](https://arxiv.org/abs/2410.18488v2). It says: “Using this notion, we formulate and prove generalization of Kac's lemma for an action of a general countable group, and another generalization that applies to probability preserving equivalence relations.”

**Sources:**

- [Tom Meyerovitch, Benjamin Weiss, Kac's Lemma and countable generators for actions of countable groups, arXiv:2410.18488 (2025)](https://arxiv.org/abs/2410.18488v2)

### A generating set makes the Furstenberg correspondence system unique up to isomorphism

**Remember:** Exact frequencies plus a generating set pin the system down.

*Rules out counterexamples. Confidence: medium.* MSC 37A44 (Relations between ergodic theory and number theory), 37A15, 37A35. arXiv math.DS. Level 4: research.

**Definition.** Furstenberg’s correspondence principle turns a set E of positive upper density in a group G into a measure-preserving action of G with a set A. The measure of each finite intersection of translates of A is at most the upper density of the same intersection of translates of E. In our own reading, the paper’s natural assumptions ask for equality, with densities that exist along the averaging sets. They also ask the translates of A to generate all measurable sets.

**Problem.** Different constructions of the correspondence give systems that may look different. For a countable amenable group, are they all the same system?

**How the definition helps.** The assumptions remove the two ways in which the system could fail to be unique. In our own explanation, without the generating condition, a product with any unrelated system also satisfies the correspondence. Without equality, the measures of the intersections are not fixed. Under the assumptions, the paper shows the system is isomorphic to the shift on the orbit closure of the indicator of E (Theorem 1.3). Theorem 3.3 adds that two such systems are isomorphic exactly when all their intersection densities agree.

**Paper or page:** [Uniqueness of a Furstenberg system](https://arxiv.org/abs/2005.07295v1). It says: “is unique up to a measurable isomorphism.”

**Sources:**

- [Vitaly Bergelson, Andreu Ferré Moragues, Uniqueness of a Furstenberg system, arXiv:2005.07295 (2020)](https://arxiv.org/abs/2005.07295v1)

### Banach proximality tests measure isomorphism of factor maps on point pairs

**Remember:** Two lifts of one point must stay together on average.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37A35. arXiv math.DS. Level 4: research.

**Definition.** A factor map π from X to Y is a continuous surjection that respects the group action. Two points are Banach proximal if the upper Banach average of their distance along their orbits is zero. π is Banach proximal if every two points with the same image are Banach proximal.

**Problem.** In our own reading, a factor map is topo-isomorphic if, for every invariant probability on X, π is a measure isomorphism after removing null sets. For compact metric actions of a countable amenable group, π is topo-isomorphic exactly when it is Banach proximal.

**How the definition helps.** Banach proximality replaces a condition on all invariant measures with a condition on pairs of orbits. This is Theorem 8.1 of the paper. In our own explanation, take an invariant measure on pairs with the same image. Zero average distance forces that measure onto the diagonal. Then π separates points almost everywhere, so it is a measure isomorphism.

**Paper or page:** [Mean equicontinuous factor maps](https://arxiv.org/abs/2411.15549v1), [Mean equicontinuous factor maps](https://arxiv.org/abs/2411.15549v1). It says: “We present that the notions of topo-isomorphy and Banach proximality coincide for all factor maps.”

**Sources:**

- [Till Hauser, Mean equicontinuous factor maps, arXiv:2411.15549 (2024)](https://arxiv.org/abs/2411.15549v1)

### Mean fiber diameter tests regularity of factor maps along orbits

**Remember:** Average fiber width along each orbit to detect singleton fibers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37A35. arXiv math.DS. Level 4: research.

**Definition.** A factor map π from X to Y is a continuous surjection that respects the group action. The fiber over y is the set π⁻¹(y). The mean diameter of a fiber is an upper average, over the group, of the diameters of the fibers along the orbit of y.

**Problem.** In our own reading, a factor map is regular if, for every invariant probability on Y, almost every fiber is a single point. For actions of amenable, locally compact, σ-compact groups, π is regular exactly when every fiber has mean diameter zero.

**How the definition helps.** The mean diameter replaces a test over all invariant measures with a test along each orbit. This is Theorem 5.2 of the paper. In our own explanation, a fiber has diameter zero exactly when it is a single point. Averages along orbits then compare with integrals against invariant measures. The paper uses this test to prove that diam-mean equicontinuous actions are regular extensions of their maximal equicontinuous factor.

**Paper or page:** [Mean Diameter, Regularity and Diam-Mean Equicontinuity](https://arxiv.org/abs/2510.22484v1), [Mean Diameter, Regularity and Diam-Mean Equicontinuity](https://arxiv.org/abs/2510.22484v1). It says: “In the context of (not necessarily minimal) actions, we consider the mean diameter and use it to characterize regular factor maps.”

**Sources:**

- [Till Hauser, Mean Diameter, Regularity and Diam-Mean Equicontinuity, arXiv:2510.22484 (2025)](https://arxiv.org/abs/2510.22484v1)

### Sensitivity is redundant in Devaney chaos for stronger families of times

**Remember:** Transitivity at the right times plus dense periodic points gives sensitivity.

*True by definition. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37D45. arXiv math.DS. Level 4: research.

**Definition.** For a family 𝓕 of sets of times, 𝓕-Devaney chaos asks for 𝓕-transitivity, dense periodic points and 𝓕-sensitivity. For the cofinite family, 𝓕-transitivity is mixing. Mixing means that every open set meets every other open set at all large times. Cofinite sensitivity means that near each point some other point moves at least a fixed distance away at all large times.

**Problem.** Let X be an infinite metric space without isolated points and f a uniformly continuous map. The paper proves that 𝓕-transitivity with dense periodic points implies 𝓕-sensitivity. So sensitivity is redundant in 𝓕-Devaney chaos, for four families that include the cofinite one.

**How the definition helps.** Defining the stronger chaos through 𝓕-transitivity lets the classical redundancy of sensitivity carry over to each family. The paper’s Theorem 3.2 uses dense periodic points, like the classical result of Banks and others. For the cofinite family there is a shorter argument, which is our own and uses mixing only. Take two open sets at distance at least 3δ. For large n, the n-th image of any small neighborhood meets both. So one of two points in the neighborhood moves at least δ from the image of the centre.

**Paper or page:** [On stronger forms of Devaney chaos](https://arxiv.org/abs/2505.15286v1), [On stronger forms of Devaney chaos](https://arxiv.org/abs/2505.15286v1). It says: “𝓕-sensitivity is a redundant condition in the definition 𝓕-Devaney chaos.”

**Sources:**

- [Shital H. Joshi, Ekta Shah, On stronger forms of Devaney chaos, arXiv:2505.15286 (2025)](https://arxiv.org/abs/2505.15286v1)

### Stabilizers vary continuously on the universal irreducible extension of a flow

**Remember:** Change the space, not the theorem, when stabilizers jump.

*Rules out counterexamples. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 22D05. arXiv math.GR, math.DS. Level 4: research.

**Definition.** A G-flow is a continuous action of a topological group G on a compact Hausdorff space. An extension of a flow is irreducible if no proper closed subset of it maps onto the original space. The universal irreducible extension is the largest one: every irreducible extension of the flow is a factor of it.

**Problem.** Let a locally compact group G act on a compact space X. The stabilizer map sends each point to the closed subgroup fixing it, with the Chabauty topology on closed subgroups. This map can fail to be continuous on X, but it is continuous on the universal irreducible extension of X.

**How the definition helps.** Passing to the extension removes the points where stabilizers jump, so continuity holds without an extra assumption on the action. In our own example, the reflection x ↦ −x of \[−1, 1\] fixes 0 but no nearby point, so the stabilizer jumps at 0. The result generalizes Frolík's theorem on extremally disconnected compact spaces, where the closure of every open set is open. There, the fixed points of a homeomorphism form an open set. Proving continuity on the extension for every locally compact group is the work.

**Paper or page:** [Continuity of the stabilizer map and irreducible extensions](https://arxiv.org/abs/2302.03083v2). It says: “This map is not continuous in general. We prove that if one passes from X to the universal irreducible extension of X, the stabilizer map becomes continuous.”

**Sources:**

- [Adrien Le Boudec, Todor Tsankov, Continuity of the stabilizer map and irreducible extensions, arXiv:2302.03083v2 (2023)](https://arxiv.org/abs/2302.03083v2)

### The Furstenberg boundary turns C\*-simplicity into a freeness condition

**Remember:** A group is C\*-simple when it acts freely on its Furstenberg boundary.

*Makes the theorem clean to state or prove.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 46L55, 46L05. arXiv math.OA, math.DS. Level 4: research.

**Definition.** A Γ-boundary is a compact space with a minimal and strongly proximal action of the group Γ. Strongly proximal means that group elements can push every probability measure close to a point mass. The Furstenberg boundary ∂FΓ is the universal Γ-boundary, which maps onto every other one. An action is topologically free when, for each g ≠ e, the fixed points of g form a set with empty interior.

**Problem.** A discrete group is C\*-simple when its reduced C\*-algebra has no closed two-sided ideals except 0 and itself. Deciding which groups are C\*-simple was a long open problem, with Powers' proof for free groups as an early case.

**How the definition helps.** Our own reason: the universal boundary collects all boundary behaviour in one space, so simplicity becomes one question about one action. Kalantar and Kennedy proved that C\*-simplicity is equivalent to topological freeness on the Furstenberg boundary. The cited theorem also credits Breuillard, Kalantar, Kennedy and Ozawa, and in our own reading they added forms (iii) and (iv). Form (iv) uses some boundary, which is easier to check. A nontrivial amenable group has a one-point Furstenberg boundary, so the action is not free and the group is not C\*-simple (our own). The Furstenberg boundary is very large, so one usually checks condition (iv) on a smaller, concrete boundary (our own).

**Paper or page:** [Simplicity of crossed products of the actions of totally disconnected locally compact groups on their boundaries](https://arxiv.org/abs/2312.15754). It says: “(i) The reduced group C\*-algebra C\*λ(Γ) of Γ is simple. (ii) The reduced crossed product C(∂FΓ) ⋊ᵣ Γ is simple. (iii) The action Γ ↷ ∂FΓ is free.”

**Sources:**

- [Ryoya Arimoto, Simplicity of crossed products of the actions of totally disconnected locally compact groups on their boundaries, J. Funct. Anal. 288.3 (2025), 110732, arXiv:2312.15754](https://arxiv.org/abs/2312.15754)
- [Mehrdad Kalantar, Matthew Kennedy, Boundaries of reduced C\*-algebras of discrete groups, J. Reine Angew. Math. (2017)](https://doi.org/10.1515/crelle-2014-0111)
- [Emmanuel Breuillard, Mehrdad Kalantar, Matthew Kennedy, Narutaka Ozawa, C\*-simplicity and the unique trace property for discrete groups, Publ. Math. IHÉS (2017)](https://doi.org/10.1007/s10240-017-0091-2)

### A spacing shift is mixing exactly when it allows all large gaps

**Remember:** Two 1s n steps apart need n in P.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B05. arXiv math.DS. Level 4: research.

**Definition.** Fix a set P of positive integers. The spacing shift Σₚ is the set of 0–1 sequences in which any two 1s are a distance in P apart.

**Problem.** The spacing shift Σₚ is topologically mixing exactly when P has finite complement in the positive integers.

**How the definition helps.** The definition turns mixing into a statement about which gaps P allows. The paper quotes this lemma from Banks. The proof here is our own. Suppose Σₚ is mixing. Then for all large n, some sequence has a 1 at place 0 and at place n, so n lies in P. Conversely, if P holds every n ≥ N, put two allowed words far apart with 0s between them. Every distance between their 1s is then at least N.

**Paper or page:** [On stronger forms of Devaney chaos](https://arxiv.org/abs/2505.15286v1). It says: “Σₚ mixing ⇔ P is co–finite.”

**Sources:**

- [Shital H. Joshi, Ekta Shah, On stronger forms of Devaney chaos, arXiv:2505.15286 (2025)](https://arxiv.org/abs/2505.15286v1)

### Axioms for abstract entropy make every entropy limit exist at once

**Remember:** Two time blocks together cost at most the sum of their costs.

*True by definition. Confidence: medium.* MSC 37B40 (Topological entropy), 06F05. arXiv math.DS. Level 4: research.

**Definition.** The paper defines an entropy space as a pre-ordered semigroup with a size function h. Elements stand for descriptions such as open covers, and the product combines two descriptions. A lower map λ acts on the space, like pulling a cover back by the dynamics. Our reading is that the axioms bound the size of a product by the sum of the sizes and stop λ from increasing size.

**Problem.** For a description α, let aₙ be the size of the product of α, λα, …, λⁿ⁻¹α. Does aₙ / n converge?

**How the definition helps.** The axioms make aₙ subadditive by definition, so Fekete’s lemma gives the limit. Lemma 2.3.7 proves aₙ₊ₘ ≤ aₙ + aₘ, and Lemma 2.3.8 gives that aₙ / n converges to its infimum. The paper then shows that topological entropy and mean dimension are cases of the scheme. So the limit exists in each case without a new proof. In our own reading, the real work for a concrete entropy is checking the axioms.

**Paper or page:** [Abstract entropy and expansiveness](https://arxiv.org/abs/2203.10394v2). It says: “is subadditive, that is, aₙ₊ₘ ≤ aₙ + aₘ for all n,m ≥ 1.”

**Sources:**

- [Mauricio Achigar, Abstract entropy and expansiveness, arXiv:2203.10394 (2023)](https://arxiv.org/abs/2203.10394v2)

### Shifts on orbit sequences define metric mean dimension for discontinuous maps

**Remember:** Move along recorded orbits, even when the map itself jumps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B40 (Topological entropy), 37B10. arXiv math.DS. Level 4: research.

**Definition.** Metric mean dimension measures how fast the complexity of orbits grows as the scale of resolution shrinks. For a closed set Γ in X × X, let Γ(ℕ) hold the sequences whose consecutive pairs lie in Γ. The shift acts on Γ(ℕ). For a discontinuous map, the paper uses a suitable subshift of this kind, in our own reading built from the closure of its graph.

**Problem.** Metric mean dimension needs a continuous map. Can one give it a meaning for discontinuous maps, such as the Gauss map, and compute it?

**How the definition helps.** The shift on sequences is continuous even when the map is not, so the old definition applies to it. For a continuous map, the paper proves that the map and a shift of this kind have the same metric mean dimension (Theorem B). This justifies the new definition. With it, the paper treats a class of interval maps (Theorem C). Their upper metric mean dimension equals the upper box dimension of the set where they break. Full equality holds when the box dimension exists. The Gauss map is an example.

**Paper or page:** [Metric mean dimension via subshifts of compact type](https://arxiv.org/abs/2407.07682v2). It says: “Building upon this result, we extend the notion of metric mean dimension to discontinuous maps in terms of suitable subshifts.”

**Sources:**

- [Gustavo Pessil, Metric mean dimension via subshifts of compact type, arXiv:2407.07682 (2025)](https://arxiv.org/abs/2407.07682v2)

### A safe symbol makes a shift of finite type an absolute retract

**Remember:** Overwrite every bad window with the safe symbol.

*True by definition. Confidence: medium.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A shift of finite type is a subshift defined by forbidding finitely many patterns. A safe symbol s is a symbol such that writing s at any set of sites of an allowed configuration gives an allowed configuration. A subshift Y is an absolute retract if every subshift X containing Y has a shift-respecting continuous map onto Y that fixes Y.

**Problem.** Over a countable group, a shift of finite type with a safe symbol is an absolute retract for the class of subshifts. In particular it has the map extension property.

**How the definition helps.** A safe symbol repairs any forbidden pattern without breaking an allowed one, which gives the retraction directly. The proof here is our own. Given X containing Y, write s at every site of every window where a point of X shows a forbidden pattern. A window that was forbidden now holds only s, which is allowed. A window that was allowed stays allowed, because writing s never breaks an allowed pattern. Points of Y have no forbidden windows, so they do not change.

**Paper or page:** [An embedding theorem for multidimensional subshifts](https://arxiv.org/abs/2312.05650v5). It says: “with a safe symbol is an absolute retract for the class of subshifts, and in particular has the map extension property.”

**Sources:**

- [Tom Meyerovitch, An embedding theorem for multidimensional subshifts, Ergodic Theory Dynam. Systems 45 (2025) 1870–1914, arXiv:2312.05650](https://arxiv.org/abs/2312.05650v5)

### The map extension property extends Krieger’s embedding theorem to abelian groups

**Remember:** Ask the target to accept extensions of partial maps.

*Makes the theorem clean to state or prove.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A subshift is a closed, shift-invariant set of colorings of a group by finitely many symbols. A subshift Y has the map extension property if shift-respecting continuous maps into Y extend. So a map from a closed invariant subset of a subshift X extends to all of X. This holds whenever the symmetries of points of X permit it.

**Problem.** Krieger’s theorem says when a subshift embeds in a mixing one-dimensional shift of finite type. The paper wants the same for subshifts over any countable abelian group. For one-dimensional subshifts, the map extension property holds exactly for mixing shifts of finite type.

**How the definition helps.** The map extension property is the target condition that lets the paper state one embedding theorem over every countable abelian group. Over ℤ the condition is the same as Krieger’s mixing shift of finite type, so the new theorem contains Krieger’s. The abstract says that Boyle used the condition implicitly in the 1980s. In our own explanation, the symmetry condition is needed because a periodic point can only map to a point with at least the same periods. The hard work of the paper is making the extended map injective.

**Paper or page:** [An embedding theorem for multidimensional subshifts](https://arxiv.org/abs/2312.05650v5). It says: “A ℤ-subshift has the map extension property if and only if it is a topologically mixing subshift of finite type.”

**Sources:**

- [Tom Meyerovitch, An embedding theorem for multidimensional subshifts, Ergodic Theory Dynam. Systems 45 (2025) 1870–1914, arXiv:2312.05650](https://arxiv.org/abs/2312.05650v5)

### Finite shadowing makes chain recurrent linear operators mixing

**Remember:** Mixing needs only finite orbit pieces, so finite shadowing is enough.

*Makes the theorem clean to state or prove.* MSC 37B65 (Approximate trajectories, pseudotrajectories, shadowing and related notions for topological dynamical systems), 37B20, 47A16. arXiv math.DS, math.FA. Level 4: research.

**Definition.** A δ-pseudo-orbit is a sequence in which each point is within δ of the image of the one before. An operator has finite shadowing if, for each tolerance ε, some δ works for all finite δ-pseudo-orbits at once. Each such pseudo-orbit then stays within ε of a true orbit segment. On a topological vector space, "within" is measured by neighborhoods of zero.

**Problem.** Let T be a continuous linear operator on a topological vector space, with finite shadowing. Then T is chain recurrent exactly when it is topologically mixing. Chain recurrent means every point lies on closed pseudo-orbits of every small error.

**How the definition helps.** Mixing is a statement about finite orbit pieces, so finite shadowing is exactly the hypothesis it needs. The paper proves the result on any topological vector space, where full shadowing can fail. In our own explanation, to go from an open set U to an open set V in n steps, build a pseudo-orbit of length n. Finite shadowing then turns it into a true orbit piece. The real work, also our own reading, is to build such pseudo-orbits for every large n from linearity and chain recurrence.

**Paper or page:** [On Shadowing and Chain Recurrence in Linear Dynamics](https://arxiv.org/abs/2305.02714v2). It says: “Then the following assertions are equivalent: T is chain recurrent; T is transitive; T is ergodic; T is weakly mixing; T is mixing.”

**Sources:**

- [Nilson C. Bernardes, Alfredo Peris, On Shadowing and Chain Recurrence in Linear Dynamics, Adv. Math. 441 (2024) 109539, arXiv:2305.02714](https://arxiv.org/abs/2305.02714v2)

### Periodic shadowing makes periodic points dense in the chain recurrent set

**Remember:** Close a small-error loop, then shadow it with a periodic orbit.

*True by definition.* MSC 37B65 (Approximate trajectories, pseudotrajectories, shadowing and related notions for topological dynamical systems), 37B20, 47A16. arXiv math.DS, math.FA. Level 4: research.

**Definition.** A periodic pseudo-orbit repeats a closed chain of small-error steps forever. An operator has periodic shadowing if each periodic pseudo-orbit with small enough errors stays close to a true periodic orbit. The chain recurrent set CR(T) holds the points that lie on closed chains of every small error.

**Problem.** Let T be a continuous linear operator on a topological vector space with periodic shadowing. Then the periodic points of T are dense in CR(T).

**How the definition helps.** Periodic shadowing turns each closed chain into a nearby periodic orbit, so density follows almost at once. The proof outline is our own. A point x in CR(T) lies on a closed chain of any small error. Repeating that chain gives a periodic pseudo-orbit through x. A true periodic orbit stays close to it, so a periodic point lies near x. The paper also proves that the restriction of T to CR(T) is mixing and Devaney chaotic.

**Paper or page:** [Generalized Hyperbolicity, Stability and Expansivity for Operators on Locally Convex Spaces](https://arxiv.org/abs/2403.02843v2). It says: “Per(T) is dense in CR(T).”

**Sources:**

- [Nilson C. Bernardes, Blas M. Caraballo, Udayan B. Darji, Vinícius V. Fávaro, Alfred Peris, Generalized Hyperbolicity, Stability and Expansivity for Operators on Locally Convex Spaces, J. Funct. Anal. 288 (2025) 110696, arXiv:2403.02843](https://arxiv.org/abs/2403.02843v2)

### Open maps of dynamical systems carry stable bounded trajectories to stable ones

**Remember:** An open map carries nearby starting states onto a neighborhood downstairs.

*Makes the theorem clean to state or prove.* MSC 37C75 (Stability theory for smooth dynamical systems), 37B25. arXiv math.DS. Level 4: research.

**Definition.** A trajectory is stable if the map from initial state to trajectory is continuous there in the topology of uniform closeness over time. An open map of systems sends open sets to open sets and respects the evolution.

**Problem.** An open map of the smooth dynamical systems in the paper sends a stable, bounded trajectory to a stable trajectory.

**How the definition helps.** Writing stability as continuity turns preservation into a statement about maps between spaces of trajectories. In our own explanation, openness supplies a nearby source point for each nearby target point. The paper still needs boundedness to show that taking images preserves uniform closeness of trajectories.

**Paper or page:** [Open Maps Preserve Stability](https://arxiv.org/abs/2304.07834v1), [Open Maps Preserve Stability](https://arxiv.org/abs/2304.07834v1). It says: “We thus define maps of dynamical systems and prove that a class of open maps preserve stability.”

**Sources:**

- [James Schmidt, Open Maps Preserve Stability, arXiv:2304.07834 (2023)](https://arxiv.org/abs/2304.07834v1)

### Isomorphic equivariant vector fields have the same stable relative equilibria

**Remember:** Change the motion along symmetry orbits without changing how nearby orbits separate.

*Makes the theorem clean to state or prove.* MSC 37C81 (Equivariant dynamical systems), 37C75. arXiv math.DS. Level 4: research.

**Definition.** An equivariant vector field respects a symmetry group. Two such fields are isomorphic when their difference comes from a smoothly varying, equivariant infinitesimal symmetry. A relative equilibrium moves only along its symmetry orbit.

**Problem.** On a manifold with a proper symmetry action, isomorphic equivariant fields have the same stable relative equilibria. Stability here means that nearby trajectories stay near the symmetry orbit.

**How the definition helps.** Isomorphism lets one remove motion generated by symmetry before testing stability. The fields give the same motion after identifying points on each symmetry orbit. In our own explanation, the same motion on the orbit space gives the same stability there. The paper uses this transfer to prove a stability criterion for Hamiltonian systems.

**Paper or page:** [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4), [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4). It says: “and induce the same abstract flow on the orbit space M/G.”

**Sources:**

- [Stefan Klajbor-Goderich, Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields, arXiv:1707.02828 (2018)](https://arxiv.org/abs/1707.02828v4)

### Lipschitz hyperbolicity gives stable and unstable manifolds without derivatives

**Remember:** Control the nonlinear remainder by its Lipschitz constant, not by its derivative.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37D05 (Dynamical systems with hyperbolic orbits and sets), 37D10, 37D15. arXiv math.AP, math.DS. Level 4: research.

**Definition.** Let T be a continuous map on a Banach space with a fixed point x\*. The point is weakly hyperbolic if, near x\*, T is a bounded linear map L plus a small remainder N. The remainder satisfies N(0) = 0 and has small Lipschitz constant, and the spectrum of L avoids the unit circle. No derivative of T is required.

**Problem.** At a weakly hyperbolic fixed point, the local stable and unstable sets are graphs of Lipschitz maps and meet only at x\*. T is a contraction on the stable set, and its inverse is a contraction on the unstable set.

**How the definition helps.** The definition keeps exactly the hypotheses that the contraction proof of the stable manifold theorem uses, and drops differentiability. So the classical statement carries over to non-smooth perturbations. The work is in Theorem 2.5 of the paper, which builds the invariant graphs for a linear map plus a small Lipschitz perturbation. Our own sketch of that proof finds the graphs as fixed points of a contraction on sequences of iterates.

**Paper or page:** [Lipschitz perturbations of Morse-Smale semigroups](https://arxiv.org/abs/1705.09947v1). It says: “To this end we define more general notions of hyperbolicity and transversality, which do not require differentiability.”

**Sources:**

- [M. C. Bortolan, C. A. E. N. Cardoso, A. N. Carvalho, L. Pires, Lipschitz perturbations of Morse-Smale semigroups, arXiv:1705.09947 (2017)](https://arxiv.org/abs/1705.09947v1)

### The topological Markov property makes Gibbs and étale Gibbs measures the same

**Remember:** Agreement on a finite border makes a finite patch replacement local.

*Makes the theorem clean to state or prove.* MSC 37D35 (Thermodynamic formalism, variational principles, equilibrium states for dynamical systems), 37B10, 37B51. arXiv math.DS. Level 4: research.

**Definition.** A subshift is a closed set of symbol configurations preserved by shifts. Its topological Markov property allows a finite patch to be replaced when two configurations agree on a suitable finite border.

**Problem.** For a subshift with the topological Markov property, the Gibbs and étale Gibbs tests agree. The energy difference series must converge absolutely for pairs that differ only at finitely many sites.

**How the definition helps.** The finite-border rule lets the local Gibbs test cover every finite change. In our own explanation, the Gibbs tests describe how probabilities change when a finite patch changes. The étale test uses changes that extend continuously to configurations nearby. The topological Markov property makes every finite change locally realizable. The energy differences still have to be defined by a convergent series.

**Paper or page:** [The Lanford-Ruelle theorem for actions of sofic groups](https://arxiv.org/abs/2112.02334v4). It says: “then every Borel probability measure is Gibbs with respect f if and only if it is étale Gibbs with respect to f.”

**Sources:**

- [Sebastián Barbieri, Tom Meyerovitch, The Lanford-Ruelle theorem for actions of sofic groups, arXiv:2112.02334 (2022)](https://arxiv.org/abs/2112.02334v4)

### Forbidding cycles of whole disks makes filled-set components of box maps compact

**Remember:** Do not let a whole open disk cycle if trapped components must be compact.

*Rules out counterexamples. Confidence: medium.* MSC 37F10 (Dynamics of complex polynomials, rational maps, entire and meromorphic functions; Fatou and Julia sets), 37F25. arXiv math.DS, math.CV. Level 4: research.

**Definition.** A complex box map F sends each component of an open set U properly and holomorphically onto a disk component of a larger open set V. A component of U may equal a component of V. The filled set K(F) consists of the points that can be iterated forever. The no permutation condition forbids F to carry such whole components around in a cycle.

**Problem.** For a complex box map satisfying the no permutation condition, every connected component of its filled set is compact.

**How the definition helps.** The no permutation condition forbids entire open domain disks from being carried around in a cycle. In our own example, the identity on an open disk has the whole disk as its filled set, which is not compact. In our own explanation, proving compactness still requires controlling the nested pieces containing a trapped orbit.

**Paper or page:** [The dynamics of complex box mappings](https://arxiv.org/abs/2105.08654v2). It says: “each component of K(F) is compact;”

**Sources:**

- [Trevor Clark, Kostiantyn Drach, Oleg Kozlovski, Sebastian van Strien, The dynamics of complex box mappings, arXiv:2105.08654 (2022)](https://arxiv.org/abs/2105.08654v2)

### Wedge powers give stochastic volume conservation

**Remember:** Preserve the two-form and you preserve every wedge power.

*True by definition.* MSC 37J06 (General theory of finite-dimensional Hamiltonian and Lagrangian systems, Hamiltonian and Lagrangian structures, symmetries, invariants). arXiv math.DS. Level 4: research.

**Definition.** On a phase space of dimension 2n, the symplectic form ω measures oriented areas of tangent pairs. Its n-fold wedge product combines those area measurements into a volume form. In canonical position and momentum coordinates this gives ordinary volume up to a fixed factor.

**Problem.** Consider smooth Hamiltonian fields driven by continuous semimartingale noise, which can combine random fluctuations with drift. Use the Stratonovich rule, the stochastic integration rule that obeys the ordinary chain rule. Wherever a smooth local flow exists, it preserves phase-space volume with probability one.

**How the definition helps.** Defining volume from ω makes volume preservation follow directly from preservation of ω (our own). This avoids a separate calculation of the volume change in coordinates (our own). The Stratonovich chain rule gives preservation of ω because every driving field generates motion preserving ω (our own).

**Paper or page:** [Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems](https://arxiv.org/abs/2312.09769v3). It says: “the symplectic volume form ωⁿ ≔ ω ∧ ⋯ ∧ ω (n times) is preserved under the flow of”

**Sources:**

- [Oliver D. Street and So Takao, Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems (2024)](https://arxiv.org/abs/2312.09769v3)

### Diophantine frequencies bound the small divisors, so KAM tori survive

**Remember:** Badly approximable frequencies resist small perturbations.

*Rules out counterexamples. Confidence: medium.* MSC 37J40 (Perturbations of finite-dimensional Hamiltonian systems, normal forms, small divisors, KAM theory, Arnol'd diffusion), 37C55. arXiv math.DS, math.SG. Level 4: research.

**Definition.** A frequency vector ω in ℝᵈ is Diophantine if there are numbers γ, τ &gt; 0 with this property. For every nonzero integer vector k, \|ω · k\| is at least γ divided by ‖k‖ to the power τ. So ω is badly approximated by rational relations among its entries.

**Problem.** An integrable Hamiltonian system has phase space filled with invariant tori that carry quasiperiodic motion. Under a small perturbation, which tori survive? The KAM theorem says that tori with Diophantine frequencies survive, if a non-degeneracy condition holds and the perturbation is small enough.

**How the definition helps.** The proof divides by the numbers ω · k, the small divisors, and the Diophantine bound keeps them from being too small (our own). They shrink only polynomially in ‖k‖, so a rapidly converging Newton method can beat them (our own). The condition excludes resonant tori, where ω · k = 0 for some k, and the page says these break up under perturbation. When τ &gt; d − 1, almost every frequency vector is Diophantine, in the sense of measure (our own). The hard part is the convergence proof.

**Wikipedia:** [Kolmogorov–Arnold–Moser theorem](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Arnold%E2%80%93Moser_theorem). It says: “Surviving tori meet the non-resonance condition, i.e., they have sufficiently irrational frequencies.”

**Sources:** none listed. No primary source with a working link was found.

### Observables that vanish on the constraint set have zero Eden bracket

**Remember:** Project onto the allowed states before taking the bracket.

*True by definition.* MSC 37J60 (Nonholonomic dynamical systems), 37J55. arXiv math-ph, math.SG. Level 4: research.

**Definition.** The contact Eden bracket combines two observables of a mechanical system with dissipation and velocity constraints. One first pulls both observables back along a projection onto the allowed states, then takes a bracket there.

**Problem.** The paper proves that a function constant on the allowed states has zero Eden bracket with every observable. In particular, a function that vanishes there does. So two extensions of an observable that agree on the allowed states give the same bracket.

**How the definition helps.** The projection turns a function that vanishes on the allowed states into the zero function, so its bracket with anything is zero by bilinearity. In our own words, this is why the bracket depends only on values on the allowed states. The case of nonzero constants also uses the form of the bracket. The work moves to proving that the bracket gives the constrained motion.

**Paper or page:** [The contact Eden bracket and the evolution of observables](https://arxiv.org/abs/2504.00997v1). It says: “Any function g on T∗Q × ℝ that is constant on ℳ × ℝ is a Casimir, i.e.,”

**Sources:**

- [V. M. Jiménez, M. De León, The contact Eden bracket and the evolution of observables, arXiv:2504.00997v1 (2025)](https://arxiv.org/abs/2504.00997v1)
