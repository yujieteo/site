### Unfolding makes corner hits rational

**Remember:** Reflect the table, and the ball travels straight.

*True by definition.* MSC 37C83 (Dynamical systems with singularities (billiards, etc.)). arXiv math.DS. Level 1: early undergraduate.

**Definition.** Measure slopes relative to the sides of a unit square. At each bounce, reflect the table across the wall and continue the ray straight into the reflected square.

**Problem.** A ray that starts at a corner of a square with irrational slope never reaches a corner again.

**How the definition helps.** In the unfolded table, hitting another corner means that the straight ray reaches a second integer lattice point (our own). Two such points determine a rational slope unless their line is vertical (our own). Equal angles at a bounce justify replacing the reflected path by this straight ray (our own).

**Paper or page:** [Periodic orbits for square and rectangular billiards](https://arxiv.org/abs/2410.18316v2). It says: “If a billiard trajectory starts at a vertex with an irrational slope then it never terminates at a vertex on the square billiard.”

**Sources:**

- [Periodic orbits for square and rectangular billiards](https://arxiv.org/abs/2410.18316v2)

### Closed shift spaces stay closed under sliding block codes

**Remember:** Compact domains give closed images, and commuting with the shift preserves invariance.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A full shift consists of all two-sided sequences over a finite alphabet, with the product topology. A shift space is a closed subset of a full shift that is unchanged by the left shift. Equivalently, it consists of all sequences that avoid a specified list of finite blocks.

**Problem.** A continuous map that commutes with the left shift is a sliding block code. The image of a shift space under such a code is again a shift space.

**How the definition helps.** The topological definition reduces the proof to compactness and commutation with the shift (our own). A shift space is closed in the compact full shift, so its continuous image is compact and hence closed. The image is unchanged by the shift because the code commutes with it. The two definitions agree because open sets in the product topology are unions of sets that fix finitely many coordinates.

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “An equivalent way to define a shift space is to take a set of forbidden patterns”

**Sources:** none listed. No primary source with a working link was found.

### Continuous maps give bijective cellular automata local inverses

**Remember:** The inverse is continuous and commutes with the shift, so it has a local rule.

*True by definition.* MSC 37B15 (Dynamical aspects of cellular automata), 68Q80. arXiv math.DS, nlin.CG. Level 2: later undergraduate.

**Definition.** Take the full shift, the space of all two-sided sequences over a finite alphabet with the product topology. A cellular automaton applies the same rule at each cell, using only a fixed finite window of input cells. Equivalently, it is a continuous map of the full shift that commutes with the left shift.

**Problem.** If a cellular automaton is a bijection, its inverse is also a cellular automaton.

**How the definition helps.** The continuous-map definition makes reversibility a consequence of compactness and commutation with the shift. A continuous bijection of the compact Hausdorff full shift has a continuous inverse, and the inverse commutes with the shift because the forward map does. A forward window does not directly give an inverse window. The work goes into the Curtis–Hedlund–Lyndon theorem, which turns continuity and commutation into a finite window.

**Wikipedia:** [Curtis–Hedlund–Lyndon theorem](https://en.wikipedia.org/wiki/Curtis%E2%80%93Hedlund%E2%80%93Lyndon_theorem). It says: “It follows by a compactness argument that the function mapping each configuration to its predecessor is itself continuous in the shift space, and it is clearly also shift-invariant.”

**Sources:**

- [G. A. Hedlund, Endomorphisms and automorphisms of the shift dynamical system, Math. Systems Theory 3 (1969) 320–375](https://doi.org/10.1007/BF01691062)

### Minimal invariant sets give recurrent points

**Remember:** A minimal set cannot contain a smaller set of late orbit limits.

*True by definition. Confidence: medium.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A point x is recurrent if its forward iterates return to every neighborhood of x at arbitrarily late times. Equivalently, x belongs to its ω-limit set, the set of limits of its iterates at times tending to infinity. A minimal set is a nonempty closed set that f maps into itself and that contains no smaller such set.

**Problem.** Every continuous map from a nonempty compact metric space to itself has a recurrent point. In fact, every point in a minimal set is recurrent.

**How the definition helps.** Defining recurrence by membership in the ω-limit set makes it a consequence of minimality (our own). For x in a minimal set M, ω(x) is a nonempty closed subset of M that f maps into itself. Minimality makes it equal to M, so it contains x. The work goes into proving that a minimal set exists, by Zorn's lemma and compactness.

**Wikipedia:** [Recurrent point](https://en.wikipedia.org/wiki/Recurrent_point). It says: “A point x ∈ X is said to be recurrent (for f) if x ∈ ω(x), i.e. if x belongs to its ω-limit set.”

**Sources:** none listed. No primary source with a working link was found.

### Nested tails give compact and nonempty ω-limit sets

**Remember:** Nested nonempty closed tails in a compact space always have a common point.

*True by definition.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 37B02. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Let f be a continuous map from a metric space to itself. The ω-limit set of x consists of limits of its iterates along sequences of times tending to infinity. Equivalently, it is the intersection of the closures of the tails {fᵏ(x) \| k &gt; n}. For a continuous flow, a family of maps indexed by real time, the tails consist of points reached after time s.

**Problem.** In a compact metric space, the ω-limit set of any point is nonempty and compact. It is also connected for a continuous flow.

**How the definition helps.** The tail definition gives compactness and nonemptiness from nested closed sets (our own). The closed tails are nested nonempty compact sets, so their intersection is nonempty and compact. For a flow, each closed tail is connected, and a nested intersection of compact connected sets is connected. The work goes into identifying the tail intersection with the set of late limits.

**Wikipedia:** [Limit set](https://en.wikipedia.org/wiki/Limit_set). It says: “Both sets are f-invariant, and if X is compact, they are compact and nonempty.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperbolic equilibria make the linearization a faithful picture of the flow

**Remember:** No eigenvalue on the imaginary axis, so the linear part decides.

*Rules out counterexamples. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37D05, 34C41. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** An equilibrium u\* of du/dt = f(u) is hyperbolic if the Jacobian matrix of f at u\* has no eigenvalue with real part zero.

**Problem.** Hartman–Grobman theorem: for smooth f, near a hyperbolic equilibrium, a homeomorphism carries the orbits of the flow onto those of its linearization dU/dt = AU. It also respects time.

**How the definition helps.** When no eigenvalue lies on the imaginary axis, small nonlinear terms cannot change which directions grow and which shrink. The condition excludes the cases where the linearization decides nothing. For example, u′ = u³ repels and u′ = −u³ attracts, but both linearize to u′ = 0 (our own). Even so, the page says that the conjugating map need not be smooth, nor even locally Lipschitz.

**Wikipedia:** [Hartman–Grobman theorem](https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem). It says: “hyperbolicity means that no eigenvalue of the linearization has real part equal to zero.”

**Sources:**

- [P. Hartman, A lemma in the theory of structural stability of differential equations, Proceedings of the American Mathematical Society 11 (1960) 610–620](https://doi.org/10.1090/S0002-9939-1960-0121542-7)

### Orbit averages give invariant probabilities

**Remember:** Shifting a long orbit average changes only its two ends.

*True by definition.* MSC 37A05 (Dynamical aspects of measure-preserving transformations). arXiv math.DS. Level 3: graduate.

**Definition.** For a continuous map F on a nonempty compact metric space, start at x and iterate F. Give each of the first n orbit points mass 1/n, counting repeated visits. These orbit averages converge weakly when their integrals converge against every continuous test function.

**Problem.** At least one subsequence of orbit averages converges weakly to a probability measure. Every such limit is invariant, meaning that applying F preserves its probabilities.

**How the definition helps.** In our own proof, a one-step shift changes the orbit average of a test function only at its two ends, each with weight 1/n. Continuous test functions are bounded here, so this difference tends to zero. Continuity of F lets the shifted integral pass to the weak limit. Weak compactness of probability measures on the compact space supplies a convergent subsequence.

**Wikipedia:** [Krylov–Bogolyubov theorem](https://en.wikipedia.org/wiki/Krylov%E2%80%93Bogolyubov_theorem). It says: “Then F admits an invariant Borel probability measure.”

**Sources:** none listed. No primary source with a working link was found.

### Cohomologous cocycles give conjugate extensions

**Remember:** Changing the zero of each group fiber changes no orbit structure.

*True by definition.* MSC 37A20 (Algebraic ergodic theory, cocycles, orbit equivalence, ergodic equivalence relations). arXiv math.DS. Level 3: graduate.

**Definition.** Over a map T, a cocycle adds a measurable increment a(x) in a compact abelian group each time the base point x advances. Two increment functions a and b are cohomologous if b(x) − a(x) = u(Tx) − u(x) almost everywhere for some measurable group-valued function u.

**Problem.** A skew product advances the base point and adds its increment to a group coordinate. Over an invertible probability-preserving map, cohomologous increments give isomorphic skew products with uniform probability on the group.

**How the definition helps.** The function witnessing cohomology is the change of coordinates that a direct isomorphism proof would have to find. In our own calculation, the map (x, g) ↦ (x, g + u(x)) carries one skew product to the other, by the defining equation. Its inverse subtracts u(x), and translation preserves uniform probability on the group. Finding such a u for given increments remains the substantive problem.

**Paper or page:** [Khintchine-type double recurrence in abelian groups](https://arxiv.org/abs/2307.04698v2). It says: “Then $\\mathbf{X}\\times <sub>\\sigma </sub> H\\cong \\mathbf{X}\\times <sub>\\tau </sub> H$.”

**Sources:** none listed. No primary source with a working link was found.

### An ergodic square rules out nonconstant eigenfunctions

**Remember:** An eigenfunction times its conjugate gives an invariant function on the square.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** One definition calls an invertible probability-preserving map T weakly mixing if T × T is ergodic, meaning every invariant set has measure zero or one. Another asks that every eigenfunction be constant almost everywhere. An eigenfunction is a nonzero square-integrable f with f∘T = λf for some complex number λ.

**Problem.** If the square T × T is ergodic, then every eigenfunction of T is constant almost everywhere.

**How the definition helps.** The square definition turns an eigenfunction into an invariant function on the product (our own). Since \|λ\| = 1, the function f(x) times the conjugate of f(y) is unchanged by T × T. Ergodicity makes it constant almost everywhere, and fixing y with f(y) ≠ 0 shows that f is constant. The work goes into the converse, which can use the spectral theorem.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “Proposition. A dynamical system (X, μ, T) is weakly mixing if and only if (X², μ ⊗ μ, T × T) is also ergodic.”

**Sources:** none listed. No primary source with a working link was found.

### Ergodic measures are extreme points, so every compact system has one

**Remember:** Ergodic measures are the corners of the convex set of invariant measures.

*Makes the theorem clean to state or prove.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A05, 28D05. arXiv math.DS. Level 3: graduate.

**Definition.** An invariant probability measure μ for a map T is ergodic if every invariant set has measure 0 or 1. Equivalently, μ is an extreme point of the convex set of invariant probability measures. That is, μ is not a proper average of two different invariant measures.

**Problem.** Every continuous map of a compact metric space has an ergodic invariant probability measure. Every invariant probability measure is an average of ergodic ones, which is the ergodic decomposition.

**How the definition helps.** In the extreme-point form, both statements become convex geometry. The Krylov–Bogolyubov argument shows that the invariant measures form a nonempty compact convex set in the weak-\* topology. The Krein–Milman theorem gives an extreme point, and Choquet theory writes every invariant measure as an average of extreme points. The work lies in proving that the two definitions of ergodic agree.

**Wikipedia:** [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “a measure is ergodic for T if and only if it is an extreme point of this convex set.”

**Sources:**

- [N. Krylov, N. Bogolyubov, La théorie générale de la mesure dans son application à l'étude des systèmes dynamiques de la mécanique non linéaire, Annals of Mathematics 38 (1937) 65–113](https://doi.org/10.2307/1968511)

### Ergodicity makes time averages equal space averages

**Remember:** An ergodic system cannot be split into two invariant pieces of positive measure.

*Makes the theorem clean to state or prove.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** Let T be a measure-preserving map on a probability space. T is ergodic when every invariant measurable set has measure 0 or 1.

**Problem.** For an ergodic map T and an integrable function f, the time average of f along the orbit of almost every point equals the integral of f over the space.

**How the definition helps.** Ergodicity leaves no invariant pieces, so the time average cannot differ from piece to piece and must be a constant. Birkhoff's theorem gives the limit almost everywhere for any measure-preserving map, and in general the limit is the conditional expectation on invariant sets (our own summary). A rotation of the circle by a rational angle shows that the limit can differ between invariant pieces. The hard part is the pointwise convergence itself.

**Wikipedia:** [Ergodic theory](https://en.wikipedia.org/wiki/Ergodic_theory), [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “In general the time average and space average may be different. But if the transformation is ergodic, and the measure is invariant, then the time average is equal to the space average almost everywhere.”

**Sources:**

- [Birkhoff, G. D. (1931). Proof of the ergodic theorem. Proceedings of the National Academy of Sciences 17, 656–660.](https://doi.org/10.1073/pnas.17.2.656)

### Independent coordinates make Bernoulli shifts mix

**Remember:** Far apart finite coordinate blocks use independent samples.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A50. arXiv math.DS. Level 3: graduate.

**Definition.** A Bernoulli shift moves each coordinate of a sequence one place. Its probability measure makes all coordinates independent with the same distribution.

**Problem.** A Bernoulli shift is mixing of every finite order. The probability of a joint occurrence tends to the product of the separate probabilities as the time gaps grow.

**How the definition helps.** The product measure makes events on disjoint coordinate sets exactly independent. In our own proof, approximate each event by one that depends on finitely many coordinates. Widely separated shifts of these events use disjoint coordinates, so their joint probability factors, up to the sum of the approximation errors. The source states ordinary mixing, and the extension to any fixed number of events is our own.

**Wikipedia:** [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “Bernoulli shifts are mixing”

**Sources:** none listed. No primary source with a working link was found.

### The ergodic-product definition makes weak mixing closed under products

**Remember:** Test the two factors against an ergodic system one at a time.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing). arXiv math.DS. Level 3: graduate.

**Definition.** One definition calls a probability-preserving map T weakly mixing if T × R is ergodic for every ergodic probability system R. Another requires the average over 0 ≤ k &lt; n of \|μ(A ∩ T⁻ᵏB) − μ(A)μ(B)\| to tend to zero for all measurable sets A and B.

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

**How the definition helps.** The invariant-function definition makes absolute values and quotients of eigenfunctions useful, because invariant functions are constant (our own). The map preserves the norm, so \|λ\| = 1 and \|f\| is invariant, hence constant. If g has the same eigenvalue, then g/f is invariant, hence constant. Products and conjugates of eigenfunctions give products and inverses of eigenvalues.

**Paper or page:** [Characterization of Ergodicity in terms of Koopman Operator](https://proofwiki.org/wiki/Characterization_of_Ergodicity_in_terms_of_Koopman_Operator). It says: “(5): For all f ∈ L² μ: if U<sub>T</sub> f = f for μ-a.e., then f is constant μ-a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Koopman averages converge to projections

**Remember:** Average the iterates of one operator and project onto its fixed functions.

*Makes the theorem clean to state or prove.* MSC 37A30 (Ergodic theorems, spectral theory, Markov operators). arXiv math.DS. Level 3: graduate.

**Definition.** The Koopman operator sends a function f to f ∘ T, where T advances time by one step. Its fixed functions satisfy f ∘ T = f almost everywhere.

**Problem.** Suppose T preserves a probability measure and f is square-integrable. The orbit averages of f converge in mean square to its orthogonal projection onto the fixed functions.

**How the definition helps.** The Koopman operator turns successive observations along an orbit into successive powers of one linear operator. Our own calculation identifies the orbit average with the average of those powers. Since T preserves probability, the operator preserves the mean-square norm. Von Neumann’s mean ergodic theorem then gives the projection.

**nLab:** [Koopman operator](https://ncatlab.org/nlab/show/Koopman+operator). It says: “The Koopman operator Cφ of a morphism φ is defined by pre-composing with φ.”

**Paper or page:** [Mean Ergodic Theorem](https://proofwiki.org/wiki/Mean_Ergodic_Theorem). It says: “converges in the L²-norm”

**Sources:**

- [John von Neumann, Proof of the Quasi-Ergodic Hypothesis (1932)](https://doi.org/10.1073/pnas.18.1.70)

### Unique ergodicity forces uniform averages

**Remember:** Every limiting orbit measure must be the same one.

*Rules out counterexamples.* MSC 37A30 (Ergodic theorems, spectral theory, Markov operators), 37A25. arXiv math.DS. Level 3: graduate.

**Definition.** A continuous map of a compact metric space is uniquely ergodic if exactly one probability measure stays unchanged under the map.

**Problem.** For a uniquely ergodic continuous map of a compact metric space, orbit averages of continuous functions converge uniformly to their integrals against the invariant measure.

**How the definition helps.** Uniqueness forces every limiting distribution of orbit visits to give the same integral. In our own proof, failure of uniform convergence gives longer and longer orbit segments whose averages miss the integral by a fixed amount. A weak limit of their visit measures is invariant, and uniqueness gives a contradiction. Our own counterexample is the identity on two points, where the two orbits give different averages.

**nLab:** [ergodicity](https://ncatlab.org/nlab/show/ergodicity). It says: “There is a unique invariant probability measure”

**Paper or page:** [Equidistribution in 2-Nilpotent Polish Groups and triple restricted sumsets](https://arxiv.org/abs/2504.07865v2). It says: “is uniquely ergodic with unique invariant measure μₓ if and only if for every continuous function f ∈ C(X)”

**Sources:** none listed. No primary source with a working link was found.

### Defining generators by symbolic names makes the system a shift

**Remember:** Unique names let the naming map turn the system into a shift.

*True by definition. Confidence: medium.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** For a finite measurable partition Q, the symbolic name of x lists which piece contains x, Tx, T²x, and so on. A forward generator is a partition whose symbolic names separate points on a set of full measure. The equivalent event definition asks that the inverse images T⁻ⁿQ together generate all measurable events up to null sets.

**Problem.** For a probability-preserving map on a standard Borel space, a forward generator with k pieces gives an isomorphism, up to null sets, with the one-sided shift on k symbols. The shift carries the law of the symbolic names.

**How the definition helps.** The symbolic definition makes the isomorphism a matter of inverting the naming map on a set of full measure (our own). The naming map commutes with time, because the name of Tx drops the first symbol from the name of x. A forward generator makes it one-to-one on an invariant Borel set of full measure, and the Lusin–Souslin theorem gives a measurable inverse. The work goes into this inverse theorem and the equivalence between separating points and generating events.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “A partition Q is called a generator or generating partition if μ-almost every point x has a unique symbolic name.”

**Sources:** none listed. No primary source with a working link was found.

### Kolmogorov–Sinai entropy is an isomorphism invariant by its definition

**Remember:** Take the supremum over all partitions, and isomorphisms cannot change it.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** Take a measure-preserving map T and a finite partition Q of the space. Form the common refinement of Q, T⁻¹Q, …, T⁻⁽ⁿ⁻¹⁾Q, take its entropy, divide by n and let n grow. The Kolmogorov–Sinai entropy of T is the supremum of this rate over all finite measurable partitions Q.

**Problem.** The Bernoulli shifts on two and on three equally likely symbols are not isomorphic, because their Kolmogorov–Sinai entropies are log 2 and log 3.

**How the definition helps.** The supremum runs over all partitions, so the number depends on no choice, and an isomorphism carries partitions to partitions. So isomorphic systems have equal entropy, nearly by definition. The two shifts have the same spectral invariants, so older tools could not tell them apart (our own). The hard part moves to computing the number, which Sinai's theorem reduces to one generating partition.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:**

- [Ya. G. Sinai, On the notion of entropy of a dynamical system, Doklady Akademii Nauk SSSR 124 (1959) 768–771; English version in Ya. G. Sinai, Selecta I, Springer (2010)](https://doi.org/10.1007/978-0-387-87870-6_1)
- [D. Ornstein, Bernoulli shifts with the same entropy are isomorphic, Advances in Mathematics 4 (1970) 337–352](https://doi.org/10.1016/0001-8708(70)90029-0)

### The partition supremum makes entropy decrease under factor maps

**Remember:** Every partition of the factor gives a partition with the same entropy upstairs.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** For a probability-preserving map T and a finite partition Q, h(T, Q) is the growth rate per step of the Shannon entropy of the lists of pieces visited in n steps. The Kolmogorov–Sinai entropy h(T) is the supremum of h(T, Q) over all finite measurable partitions Q.

**Problem.** Let T and S preserve probability measures. If a measure-preserving map π from T’s space to S’s satisfies π∘T = S∘π, then h(S) ≤ h(T).

**How the definition helps.** The supremum definition makes the inequality a comparison of two collections of partitions (our own). Each partition for S pulls back through π to a partition for T with the same visit probabilities, hence the same entropy rate. So every value in the supremum for S also appears for T. A formula using one generating partition does not show this, because a generator upstairs need not give one downstairs.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:** none listed. No primary source with a working link was found.

### Natural extensions make the maps h∘g and g∘h conjugate

**Remember:** Keep every past, and swapping the factors costs nothing.

*True by definition. Confidence: medium.* MSC 37B02 (Dynamics in general topological spaces), 37C15, 54B35. arXiv math.DS. Level 3: graduate.

**Definition.** Let f map a compact space X to itself. Its natural extension acts on backward orbits, the sequences (x₀, x₁, …) with f(xᵢ₊₁) = xᵢ. It sends such a sequence to (f(x₀), x₀, x₁, …). This map is a homeomorphism, and its inverse drops the first entry.

**Problem.** Let g map a compact space X onto Y and h map Y onto X continuously. Then the natural extensions of h∘g and g∘h are conjugate, even when h∘g and g∘h are not.

**How the definition helps.** On backward orbits, g and h induce maps that are inverse to each other, so they give a conjugacy (our own proof). Send (x₀, x₁, …) to (g(x₁), g(x₂), …), and send (y₀, y₁, …) to (h(y₀), h(y₁), …). A direct check shows that these maps are inverse to each other and intertwine the two natural extensions. The hard work of the paper is choosing g and h for an arbitrary dendrite, a tree-like continuum, to get the pseudo-arc.

**Paper or page:** [On conjugacy between natural extensions of 1-dimensional maps](https://arxiv.org/abs/2110.11440v1). It says: “the natural extensions of f and F are conjugate,”

**Sources:**

- [J. Boroński, P. Minc, S. Štimac, On conjugacy between natural extensions of 1-dimensional maps, arXiv:2110.11440 (2021)](https://arxiv.org/abs/2110.11440v1)

### Devaney chaos needs no metric, because sensitivity follows from the rest

**Remember:** Transitivity plus dense periodic orbits already force sensitivity.

*True by definition. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37B20. arXiv math.DS. Level 3: graduate.

**Definition.** Devaney calls a map chaotic if it has sensitive dependence on initial conditions, is topologically transitive, and has dense periodic orbits. Transitive means that for any two nonempty open sets U and V, some iterate of U meets V.

**Problem.** On infinite metric spaces, Devaney chaos is preserved by topological conjugacy, although sensitive dependence alone depends on the metric.

**How the definition helps.** Banks, Brooks, Cairns, Davis and Stacey showed in 1992 that transitivity and dense periodic orbits imply sensitivity for continuous maps of infinite metric spaces. So the two topological conditions carry the whole definition. Both are preserved by conjugacy, so Devaney chaos is a topological property (our own). On a non-compact space, a change of metric can destroy sensitivity by itself (our own).

**Wikipedia:** [Chaos theory](https://en.wikipedia.org/wiki/Chaos_theory). It says: “In some cases, the last two properties above have been shown to actually imply sensitivity to initial conditions.”

**Sources:**

- [J. Banks, J. Brooks, G. Cairns, G. Davis, P. Stacey, On Devaney's definition of chaos, American Mathematical Monthly 99 (1992) 332–334](https://doi.org/10.1080/00029890.1992.11995856)

### On compact spaces, expansivity does not depend on the metric

**Remember:** On a compact space, expansivity belongs to the topology, not the metric.

*Rules out counterexamples. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)). arXiv math.DS. Level 3: graduate.

**Definition.** A homeomorphism f of a metric space is expansive if there is ε₀ &gt; 0 with this property. Any two distinct points are moved at least ε₀ apart by some iterate fⁿ, forward or backward.

**Problem.** On a compact metric space, whether a homeomorphism is expansive does not depend on the choice of metric for the topology. So topologically conjugate homeomorphisms are both expansive or both not.

**How the definition helps.** Compactness makes two metrics with the same topology uniformly equivalent, so a gap for one metric gives a gap for the other (our own). Without compactness this fails (our own example). The map x ↦ 2x on ℝ is expansive for the usual metric, but not for the metric \|arctan x − arctan y\|. There, the points x and (1 + δ)x stay within δ/2 of each other under every iterate.

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

**Definition.** A shift of finite type is a shift space defined by a finite list of forbidden blocks. A sliding block code is a continuous map between shift spaces that commutes with the shift. A shift is sofic if it is the image of a finite-type shift under a sliding block code.

**Problem.** The image of a sofic shift under a sliding block code is sofic.

**How the definition helps.** The image definition makes closure under coding a matter of composing two maps (our own). Write the sofic shift X as ψ(Y), where Y has finite type. For a code φ on X, φ(X) = (φ∘ψ)(Y), and the composite is again a code. A definition by finite automata would instead have to show that a code preserves the property that a finite automaton accepts the block language.

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “Λ is a sofic shift if it is the image of a shift of finite type under sliding block code”

**Sources:**

- [B. Weiss, Subshifts of finite type and sofic systems, Monatsh. Math. 77 (1973) 462–474](https://doi.org/10.1007/bf01295322)

### Swapping graph halves conjugates shifts

**Remember:** Move each pair boundary one edge along a bipartite path.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37C15. arXiv math.DS. Level 3: graduate.

**Definition.** A nonnegative integer matrix describes a graph by counting edges between each ordered pair of vertices. Two matrices are elementary strong shift equivalent if they are RS and SR for rectangular nonnegative integer matrices R and S. Strong shift equivalence allows a chain of these steps.

**Problem.** An edge shift advances one edge along a two-sided infinite path. Strong shift equivalent matrices give conjugate edge shifts, meaning a homeomorphism between their path spaces commutes with the shifts.

**How the definition helps.** Factoring the matrices builds a change of coordinates from two ways to pair the same edges. In our own construction, alternate edges from the graphs described by R and S. Pairing edges starting with R gives the graph of RS, while pairing one edge later gives the graph of SR. Williams's classification theorem supplies the difficult converse.

**Paper or page:** [Invertible and noninvertible symbolic dynamics and their C\*-algebras](https://arxiv.org/abs/2212.11188v2). It says: “are conjugate if and only if the matrices A and B are strong shift equivalent.”

**Sources:**

- [Robert F. Williams, Classification of Subshifts of Finite Type](https://doi.org/10.2307/1970908)

### Synchronizing words distinguish finite type

**Remember:** A long enough shared word should erase the need for hidden state.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 3: graduate.

**Definition.** A shift space is a closed, shift-invariant set of two-sided sequences over a finite alphabet. It has finite type if a finite list of forbidden blocks defines it. An allowed word w is synchronizing if allowed words uw and wv always give an allowed word uwv.

**Problem.** A shift is of finite type exactly when every sufficiently long allowed word is synchronizing.

**How the definition helps.** A synchronizing overlap lets two allowed blocks join without introducing a forbidden pattern. In our own proof, a shared block longer than every forbidden word prevents a forbidden word from crossing both joins. Conversely, if every length-M word synchronizes, overlapping allowed length-(M + 1) blocks build every locally permitted word. Our own counterexample uses the even shift, which requires an even number of zeros between successive ones. An odd block of zeros allows a one on either side separately, but forbids both together.

**Paper or page:** [Computational complexity of problems for deterministic presentations of sofic shifts](https://arxiv.org/abs/2112.03484v2). It says: “A shift space X is an SFT if and only if there exists an integer M ≥ 0 such that every word w ∈ ℬ(X) with \|w\| ≥ M is intrinsically synchronizing for X.”

**Sources:** none listed. No primary source with a working link was found.

### Chain recurrence splits every compact flow into recurrent and gradient-like parts

**Remember:** Allow tiny jumps, and every flow becomes recurrent part plus downhill part.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 37B35. arXiv math.DS. Level 3: graduate.

**Definition.** An ε-chain from x to y follows the flow for pieces of time at least 1, with jumps smaller than ε between the pieces. A point x is chain recurrent if for every ε &gt; 0 there is an ε-chain from x back to x. This allows small errors, so it is weaker than ordinary recurrence.

**Problem.** Conley's theorem: every flow on a compact metric space has a continuous complete Lyapunov function. It strictly decreases along orbits off the chain-recurrent set and is constant on each piece of that set (our own).

**How the definition helps.** Chain recurrence counts orbits that return up to small errors, so the chain-recurrent set is closed and invariant (our own). Ordinary recurrent points need not form a closed set, so they give no clean split (our own). A point outside this set cannot return even with small jumps, so a function can decrease there (our own). Conley built the function from pairs of an attractor and its dual repeller, and the work moves to this construction (our own).

**Wikipedia:** [Conley's fundamental theorem of dynamical systems](https://en.wikipedia.org/wiki/Conley%27s_fundamental_theorem_of_dynamical_systems). It says: “every flow of a dynamical system with compact phase portrait admits a decomposition into a chain-recurrent part and a gradient-like flow part.”

**Sources:**

- [C. Conley, Isolated Invariant Sets and the Morse Index, CBMS Regional Conference Series in Mathematics 38, American Mathematical Society (1978)](https://doi.org/10.1090/cbms/038)

### Unique shadowing yields topological stability

**Remember:** A perturbed orbit picks out exactly one nearby true orbit.

*Rules out counterexamples.* MSC 37B25 (Stability of topological dynamical systems), 37B65. arXiv math.DS. Level 3: graduate.

**Definition.** A homeomorphism is expansive if some fixed distance eventually separates any two distinct points in forward or backward time. It has shadowing if, for each tolerance, every two-sided sequence with sufficiently small step errors stays within that tolerance of a true orbit.

**Problem.** An expansive homeomorphism with shadowing on a compact metric space is topologically stable. Each sufficiently nearby homeomorphism admits a continuous map close to the identity that intertwines it with the original system.

**How the definition helps.** Expansivity rules out competing shadows, so following a perturbed orbit selects a single point. In our own proof, take a shadowing tolerance below half the separation distance. Two true shadows then stay closer than the separation distance at every time, so they coincide. Uniqueness makes the selected point intertwine the maps, and with compactness it depends continuously on the start. Without expansivity, a constant orbit of the identity on a Cantor set has arbitrarily close constant shadows.

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “such that for every pair of points x ≠ y in X there is an integer n such that”

**Paper or page:** [Pointed Gromov-Hausdorff Topological Stability for non-compact metric spaces](https://arxiv.org/abs/2204.06649v1). It says: “If f is 𝒞-expansive and has the 𝒞-shadowing property then it is 𝒞-topologically stable.”

**Sources:**

- [Peter Walters, On the pseudo orbit tracing property and its relationship to stability](https://doi.org/10.1007/BFb0101795)

### The Conley index detects nonempty isolated invariant sets

**Remember:** The empty invariant set has the index of a point.

*True by definition.* MSC 37B30 (Index theory for dynamical systems, Morse-Conley indices). arXiv math.DS. Level 3: graduate.

**Definition.** A compact invariant set S is isolated if it is the set of all full trajectories that stay in some compact neighborhood. An index pair is a pair of compact sets N₂ ⊆ N₁ such that N₁ ∖ N₂ isolates S and trajectories leave N₁ only through N₂, which they cannot leave inside N₁. The Conley index of S is the pointed homotopy type of N₁ with N₂ collapsed to a point.

**Problem.** If the Conley index is not the pointed homotopy type of a point, then S is nonempty.

**How the definition helps.** The quotient definition lets us choose the simplest index pair for the empty set (our own). Take N₁ = N₂ to be a single point, so the collapsed space is a point. A nontrivial index thus proves existence without finding a trajectory inside the neighborhood. The work goes into Conley's theorems that index pairs exist and that the index does not depend on the pair.

**Wikipedia:** [Conley index theory](https://en.wikipedia.org/wiki/Conley_index_theory). It says: “If the index is nontrivial then the invariant set S is nonempty. This principle can be amplified to establish existence of fixed points and periodic orbits inside N.”

**Sources:**

- [C. Conley, Isolated invariant sets and the Morse index, CBMS Regional Conference Series in Mathematics 38 (1978)](https://doi.org/10.1090/cbms/038)

### Bundled orbit names scale entropy

**Remember:** Bundle k consecutive readings into each reading of the faster clock.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** For a finite open cover, an n-step name specifies a cover member at each of the first n times. The corresponding set consists of points that meet all n specifications. The cover entropy is the limit of log N(n) divided by n, where N(n) is the smallest number of these sets covering the space. Topological entropy is the supremum over finite open covers.

**Problem.** For a continuous map of a compact metric space, the entropy of its k-th iterate is k times its entropy for each positive integer k.

**How the definition helps.** The open-cover definition lets one observation of the faster map record a block of k original observations. In our own proof, use the cover by all k-step names. Under the k-th iterate, n readings of this cover give exactly the original kn-step names, so its rate is k times the original rate. The block cover refines the original cover, which gives the reverse inequality after taking suprema.

**Paper or page:** [Unifying topological entropy notions for piecewise continuous maps on the interval](https://arxiv.org/abs/2404.10867v1). It says: “hₜₒₚ(fᵏ) = k hₜₒₚ(f) for every integer k ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Counting separated orbits gives isometries zero topological entropy

**Remember:** If distances never change, counting longer orbit segments adds nothing.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** Let f be a continuous map from a compact metric space to itself. The distance up to time n is the maximum of d(fᵏx, fᵏy) over 0 ≤ k &lt; n. Let N(n, ε) be the largest number of points pairwise more than ε apart in this distance. The Bowen–Dinaburg entropy is the limit as ε decreases to zero of the limit superior of log N(n, ε)/n.

**Problem.** Every isometry from a nonempty compact metric space to itself has zero topological entropy.

**How the definition helps.** The separated-set definition makes the entropy zero because the count does not grow with time (our own). An isometry preserves every distance, so the distance up to time n is the original distance. Compactness bounds N(n, ε) by a number independent of n. The work goes into proving that this definition agrees with the open-cover definition.

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy). It says: “Since X is compact, N(n, ε) is finite and represents the number of distinguishable orbit segments of length n, assuming that we cannot distinguish points within ε of one another.”

**Sources:**

- [R. Bowen, Entropy for group endomorphisms and homogeneous spaces, Trans. Amer. Math. Soc. 153 (1971) 401–414](https://doi.org/10.1090/S0002-9947-1971-0274707-X)
- [R. L. Adler, A. G. Konheim, M. H. McAndrew, Topological entropy, Trans. Amer. Math. Soc. 114 (1965) 309–319](https://doi.org/10.1090/S0002-9947-1965-0175106-9)

### Defining topological entropy by open covers makes it a conjugacy invariant

**Remember:** Built from open sets only, entropy survives every homeomorphism.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** Adler, Konheim and McAndrew used finite open covers of a compact space X. For a cover C, H(C) is the logarithm of the fewest members of C that still cover X. The entropy of f is the supremum over all C of the growth rate per step of H(C ∨ f⁻¹C ∨ … ∨ f⁻⁽ⁿ⁻¹⁾C).

**Problem.** Topologically conjugate maps of compact spaces have the same topological entropy.

**How the definition helps.** The definition uses only open sets, and a homeomorphism carries open covers to open covers, so invariance follows at once. The later definition of Bowen and Dinaburg counts orbit segments that stay ε apart in a metric. Its invariance needs a proof that all metrics for the topology give the same value (our own). The work moves to the theorem that the two definitions agree.

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

**Definition.** Two flows are topologically equivalent when a homeomorphism carries the oriented orbits of one onto those of the other, without having to respect time. A vector field is structurally stable if every small C¹ perturbation of it has a topologically equivalent flow.

**Problem.** Andronov–Pontryagin criterion: a flow on the disk or the sphere is structurally stable exactly when it has finitely many equilibria and cycles, all hyperbolic, and no saddle-to-saddle connections.

**How the definition helps.** The definition matches orbits by a continuous map and ignores time, so small changes of speed do no harm. A small perturbation of a limit cycle usually changes its period, and a time-respecting map cannot match cycles of different periods. So with that stricter notion, no system with a periodic orbit could be stable. The map must also be allowed to be only continuous, because a smooth conjugacy would keep the eigenvalues at an equilibrium (our own).

**Wikipedia:** [Structural stability](https://en.wikipedia.org/wiki/Structural_stability). It says: “Without these restrictions, no continuous time system with fixed points or periodic orbits could have been structurally stable.”

**Sources:**

- [A. A. Andronov, L. S. Pontryagin, Coarse systems (1937), reprinted in V. I. Arnold (ed.), Geometric Methods in the Theory of Differential Equations, Springer (1988)](https://archive.org/details/geometricalmetho0000arno_o8o1)

### Lefschetz numbers make the zeta function rational

**Remember:** Replace point counts with alternating traces, then turn the trace series into determinants.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37C30, 55M20. arXiv math.DS, math.AT. Level 3: graduate.

**Definition.** Let f be a continuous map of a finite polyhedron to itself. Its Lefschetz number L(f) is the alternating sum of the traces of the maps Mᵢ that f induces on the rational homology groups Hᵢ. The Lefschetz zeta function is exp(∑ₙ L(fⁿ)tⁿ/n), summed over n ≥ 1.

**Problem.** The Lefschetz zeta function is the product of the factors det(I − tMᵢ), with exponent −1 for even i and +1 for odd i. So it is rational and does not change when f is continuously deformed.

**How the definition helps.** Using Lefschetz numbers makes rationality a matrix calculation rather than a count of periodic points. The map fⁿ induces Mᵢⁿ, and summing the logarithm series over the eigenvalues of Mᵢ gives the determinant factor. Continuous deformation leaves every Mᵢ unchanged. Relating the traces to actual fixed points needs the Lefschetz fixed-point theorem.

**Wikipedia:** [Lefschetz zeta function](https://en.wikipedia.org/wiki/Lefschetz_zeta_function). It says: “Thus it is a rational function. The polynomials occurring in the numerator and denominator are essentially the characteristic polynomials of the map induced by f on the various homology spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Defining transfer by integration makes invariant densities fixed points

**Remember:** The transfer operator gives the density after transport, so invariance means it stays unchanged.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37C40. arXiv math.DS. Level 3: graduate.

**Definition.** Let T be a measurable map of a space with a σ-finite measure m, such that preimages of null sets are null. The transfer operator L sends an integrable density h to the function with ∫ (Lh)g dm = ∫ h(g∘T) dm for every bounded measurable g. For an interval map with smooth invertible branches, another definition sums h(y)/\|T′(y)\| over the preimages y of x.

**Problem.** A probability density h gives a T-invariant measure h·m exactly when Lh = h almost everywhere.

**How the definition helps.** The integration definition makes invariance the statement that h and Lh have the same integrals against every bounded test function (our own). Transporting h·m by T replaces g in its integral by g∘T. By the defining rule, the result is the integral of g against Lh·m, so the measures agree exactly when the densities agree almost everywhere. The work goes into deriving the preimage formula by change of variables, or into the Radon–Nikodym theorem that gives Lh in general.

**Wikipedia:** [Transfer operator](https://en.wikipedia.org/wiki/Transfer_operator). It says: “The left-adjoint of the Perron–Frobenius operator is the Koopman operator or composition operator.”

**Sources:** none listed. No primary source with a working link was found.

### Edge shifts turn periodic-point counts into a rational zeta function

**Remember:** Closed walks give traces, and the trace series gives a determinant.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** The Artin–Mazur zeta function of T is exp(∑ₙ \|Fix(Tⁿ)\| zⁿ/n), where Fix(Tⁿ) is the finite set of points fixed by Tⁿ. An edge shift is the left shift on two-sided walks along the edges of a finite directed graph. Every shift of finite type can be recoded as an edge shift.

**Problem.** For an edge shift with adjacency matrix A, the zeta function is 1/det(I − zA). In particular, it is rational.

**How the definition helps.** The edge definition turns periodic-point counts into traces of matrix powers (our own). A point fixed by Tⁿ is a closed edge walk of length n with a specified starting position. Its count is the trace of Aⁿ, where the matrix entries count edges between vertices. Summing the logarithm series over the eigenvalues gives the determinant formula. The work goes into recoding the forbidden blocks as a graph and proving that the recoding matches points fixed by each iterate.

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type), [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “For subshifts of finite type, the zeta function is a rational function of z”

**Sources:**

- [M. Artin, B. Mazur, On periodic points, Ann. of Math. 81 (1965) 82–99](https://doi.org/10.2307/1970384)

### Normalized weights undo pullback

**Remember:** A backward average of a value constant on the fiber returns that value.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37D35. arXiv math.DS. Level 3: graduate.

**Definition.** A transfer operator forms a weighted sum of function values over the preimages of each point. A normalized transfer operator uses nonnegative weights whose sum at each point is one.

**Problem.** A normalized transfer operator for a map is a left inverse of composing a function with that map.

**How the definition helps.** Normalization makes the total weight on each set of preimages exactly one. Our own calculation starts with a function f composed with the map T. At every preimage of y, this composition equals f(y), so its weighted sum is f(y). Without normalization, the same calculation multiplies f(y) by the total weight. Converting a given operator to this form can require a positive eigenfunction, whose existence is the substantial part of Ruelle’s theorem in its setting.

**Paper or page:** [Measurable multiresolution systems, endomorphisms, and representations of Cuntz relations](https://arxiv.org/abs/2304.14558v1). It says: “The adjoint operator Sσ\* is a transfer operator Sσ\*(g(f ∘ σ)) = f Sσ\*(g).”

**Sources:**

- [David Ruelle, Statistical mechanics of a one-dimensional lattice gas (1968)](https://doi.org/10.1007/BF01654281)

### Writing the Artin–Mazur zeta as a product over orbits gives integer coefficients

**Remember:** Each periodic orbit contributes a geometric series with coefficients zero and one.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.). arXiv math.DS. Level 3: graduate.

**Definition.** Let f map a set to itself, with finitely many points fixed by each iterate fⁿ. The Artin–Mazur zeta function is usually defined as exp(∑ₙ \|Fix(fⁿ)\|zⁿ/n). Instead, write it as the product over periodic orbits of 1/(1 − zᵈ), where d is the length of the orbit.

**Problem.** The Artin–Mazur zeta function is a power series with nonnegative integer coefficients.

**How the definition helps.** Each factor of the product is a geometric series with coefficients 0 or 1. The coefficient of zᴺ involves only the finitely many orbits of length at most N, so it is a nonnegative integer. In the exponential form, the division by n hides this. The work moves to the equality of the two forms, which follows on taking logarithms, because an orbit of length d gives d fixed points of fⁿ whenever d divides n (our own).

**Wikipedia:** [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “Note that the zeta function is defined only if the set of fixed points is finite for each n.”

**Sources:**

- [Michael Artin and Barry Mazur, On Periodic Points (1965)](https://doi.org/10.2307/1970384)

### Pseudo-orbits make computed orbits of chaotic maps meaningful

**Remember:** A computed orbit is a pseudo-orbit, and a true orbit shadows it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37C50 (Approximate trajectories (pseudotrajectories, shadowing, etc.) in smooth dynamics), 37B65. arXiv math.DS. Level 3: graduate.

**Definition.** An ε-pseudo-orbit of a map f is a sequence of points. Each point lies within ε of the image under f of the point before it.

**Problem.** Shadowing lemma: let Λ be a hyperbolic invariant set of a diffeomorphism f, with a suitable neighbourhood U. For every δ &gt; 0 there is ε &gt; 0 such that every ε-pseudo-orbit that stays in U stays within δ of some true orbit.

**How the definition helps.** The definition describes a computer orbit exactly, as a sequence with small errors at each step. In a chaotic system, rounding errors grow exponentially, so a computed orbit soon leaves the true orbit with the same start. Near a hyperbolic set, the stretching and shrinking directions let one correct all the errors at once by changing the start (our own). So the computed orbit follows some true orbit, and sensitivity is no contradiction.

**Wikipedia:** [Shadowing lemma](https://en.wikipedia.org/wiki/Shadowing_lemma). It says: “every pseudo-orbit (which one can think of as a numerically computed trajectory with rounding errors on every step) stays uniformly close to some true trajectory”

**Sources:**

- [S. M. Hammel, J. A. Yorke, C. Grebogi, Numerical orbits of chaotic processes represent true orbits, Bulletin of the American Mathematical Society 19 (1988) 465–469](https://doi.org/10.1090/S0273-0979-1988-15701-1)

### Positive invariant volume excludes sinks

**Remember:** A sink shrinks a neighborhood, but invariant volume cannot shrink.

*Rules out counterexamples.* MSC 37C70 (Attractors and repellers of smooth dynamical systems and their topological structure), 37J60. arXiv math.DS. Level 3: graduate.

**Definition.** Here an invariant volume has a smooth positive density and assigns the same volume to a set and its image under the flow. Allowing any invariant measure instead would include a point mass at an equilibrium.

**Problem.** A smooth flow on a positive-dimensional manifold with a smooth positive invariant volume has no asymptotically stable equilibrium. Such an equilibrium attracts nearby points and keeps all sufficiently close starting points close for all future time.

**How the definition helps.** A positive density gives every compact neighborhood positive volume and gives sufficiently small balls arbitrarily small volume (our own). Asymptotic stability eventually sends an entire compact neighborhood into any chosen small ball (our own). Volume preservation forbids this (our own). A damped pendulum still preserves a point mass at its stable equilibrium (our own).

**Paper or page:** [Invariant measures as obstructions to attractors in dynamical systems and their role in nonholonomic mechanics](https://arxiv.org/abs/2404.14156v1). It says: “Then there are no invariant measures in the class 𝒜.”

**Sources:**

- [Invariant measures as obstructions to attractors in dynamical systems and their role in nonholonomic mechanics](https://arxiv.org/abs/2404.14156v1)

### Transversality excludes saddle connections, so Morse–Smale flows are structurally stable

**Remember:** Tilt the torus so saddles stop meeting, and the flow becomes stable.

*Rules out counterexamples.* MSC 37D15 (Morse-Smale systems), 37C20, 37E35. arXiv math.DS. Level 3: graduate.

**Definition.** A flow on a compact manifold is Morse–Smale if it has finitely many equilibria and periodic orbits, all hyperbolic, and every orbit tends to one of them. Also, their stable and unstable manifolds meet transversally. That is, at each meeting point their tangent spaces together span the whole tangent space.

**Problem.** Morse–Smale flows are structurally stable. On compact orientable surfaces, Peixoto's theorem says that a flow is structurally stable exactly when it is Morse–Smale.

**How the definition helps.** Transversal intersections persist under small perturbations, and non-transversal ones need not, so the condition removes the fragile cases. The standard bad case is the gradient flow of the height function on an upright torus, where an orbit runs from the upper saddle down to the lower saddle. A small tilt breaks this saddle connection, so the upright flow is not structurally stable (our own). The hard part is the proof by Palis and Smale that Morse–Smale flows are stable in every dimension (our own).

**Wikipedia:** [Morse–Smale system](https://en.wikipedia.org/wiki/Morse%E2%80%93Smale_system), [Peixoto's theorem](https://en.wikipedia.org/wiki/Peixoto%27s_theorem). It says: “the stable and unstable manifolds of the saddle points do not intersect transversely, so the height function does not satisfy the Morse-Smale condition.”

**Sources:**

- [S. Smale, Morse inequalities for a dynamical system, Bulletin of the American Mathematical Society 66 (1960) 43–49](https://doi.org/10.1090/S0002-9904-1960-10386-2)

### Axiom A demands dense periodic points, which hyperbolicity alone does not give

**Remember:** Smale asked for dense periodic points, because hyperbolicity does not supply them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37D20 (Uniformly hyperbolic systems (expanding, Anosov, Axiom A, etc.)), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** A diffeomorphism f satisfies axiom A if its nonwandering set Ω(f) is compact and hyperbolic, and its periodic points are dense in Ω(f). A point is nonwandering if each of its neighbourhoods meets itself again under some iterate of f. Hyperbolic means that the tangent space splits into directions that f stretches and directions that f shrinks, at uniform rates.

**Problem.** Bowen proved that the nonwandering set of an axiom A diffeomorphism carries a Markov partition. So, on a large subset of Ω(f), f is conjugate to a shift of finite type, a symbol shift defined by finitely many forbidden words.

**How the definition helps.** Smale made density of periodic points a separate axiom, because in higher dimensions hyperbolicity alone does not give it. The page says that with it, Ω(f) is locally maximal, that is, the whole invariant set of some neighbourhood. Local maximality together with shadowing makes Markov partitions and the splitting of Ω(f) into basic pieces work (our own).

**Wikipedia:** [Axiom A](https://en.wikipedia.org/wiki/Axiom_A). It says: “For surfaces, hyperbolicity of the nonwandering set implies the density of periodic points, but this is no longer true in higher dimensions.”

**Sources:**

- [S. Smale, Differentiable dynamical systems, Bulletin of the American Mathematical Society 73 (1967) 747–817](https://doi.org/10.1090/s0002-9904-1967-11798-1)
- [R. Bowen, Markov partitions for axiom A diffeomorphisms, American Journal of Mathematics 92 (1970) 725–747](https://doi.org/10.2307/2373370)

### Markov rectangles give finite-type coding

**Remember:** Compatible rectangles make consecutive steps enough to test a whole itinerary.

*Makes the theorem clean to state or prove.* MSC 37D20 (Uniformly hyperbolic systems (expanding, Anosov, Axiom A, etc.)), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** A Markov partition covers a hyperbolic set by small closed rectangles with disjoint interiors. Hyperbolicity splits local motion into uniformly contracting and expanding directions, and each rectangle follows those directions. At an interior transition, the map sends the contracting slice inside the next contracting slice and the expanding slice across the next expanding slice.

**Problem.** Let a diffeomorphism have a compact hyperbolic set made of the orbits that stay in a given neighborhood for all time. A sufficiently fine Markov partition codes this set by the shift on two-sided sequences of rectangles with allowed consecutive pairs. The coding map is continuous and onto, and it turns the shift into one step of the diffeomorphism.

**How the definition helps.** The rectangle rules reduce the test for a whole itinerary to tests on adjacent pairs. In our own explanation, the slice conditions let compatible finite itineraries extend one step at a time, and compactness gives a point for each infinite itinerary. Small rectangles determine one point per itinerary, because distinct orbits eventually separate. Boundary points can still have several itineraries.

**Wikipedia:** [Markov partition](https://en.wikipedia.org/wiki/Markov_partition). It says: “the movement of a trajectory from one open cover to the next is determined only by the most recent cover, and not the history of the system.”

**Paper or page:** [Geometric Markov partitions for pseudo-Anosov homeomorphisms with prescribed combinatorics](https://arxiv.org/abs/2409.03066v1). It says: “is a continuous, surjective, and finite-to-one map.”

**Sources:**

- [Rufus Bowen, Markov Partitions for Axiom A Diffeomorphisms (1970)](https://doi.org/10.2307/2373370)

### Rotation averages survive coordinate changes

**Remember:** A bounded coordinate change disappears when divided by the number of steps.

*True by definition.* MSC 37E10 (Dynamical systems involving maps of the circle). arXiv math.DS. Level 3: graduate.

**Definition.** Write the circle as ℝ/ℤ. Represent an orientation-preserving circle homeomorphism by an increasing map F on ℝ that induces it modulo integers and satisfies F(x+1) = F(x)+1. Its rotation number is the limit modulo integers of (Fⁿ(x)−x)/n, where Fⁿ means n successive applications.

**Problem.** Two such homeomorphisms f and g have equal rotation numbers if a continuous circle map h satisfies h∘f = g∘h. We require h to have a nondecreasing real lift H with H(x+1) = H(x)+1.

**How the definition helps.** Averaging displacement over many steps removes the bounded error introduced by h. In our own argument, we choose lifts F and G so that H∘F = G∘H. The difference H(x)−x is periodic and bounded. The total displacements from x and H(x) therefore differ by a bounded amount, which vanishes after division by n in the limit. Poincaré’s theorem proves the limit exists and is independent of x.

**Wikipedia:** [Rotation number](https://en.wikipedia.org/wiki/Rotation_number). It says: “The rotation number is invariant under topological conjugacy, and even monotone topological semiconjugacy”

**Sources:** none listed. No primary source with a working link was found.

### Bounded variation excludes wandering intervals

**Remember:** Control the total changes of the derivative to control orbit distortion.

*Rules out counterexamples.* MSC 37E45 (Rotation numbers and vectors), 37E10. arXiv math.DS. Level 3: graduate.

**Definition.** A derivative has bounded variation if one bound controls the sums of its absolute changes over all ordered partitions of the circle. A wandering interval is a nonempty open interval whose forward images are pairwise disjoint.

**Problem.** Let an orientation-preserving circle diffeomorphism have irrational rotation number and a positive derivative of bounded variation. Then it has no wandering interval, and a homeomorphism conjugates it to the rotation by its rotation number.

**How the definition helps.** Bounded variation controls the accumulated stretching on disjoint intervals, which continuity of the derivative alone cannot do. In our own explanation, the logarithm of the derivative also has bounded variation, and its total variation bounds the distortion of an iterate on an interval with disjoint images. Denjoy's argument uses this bound to exclude wandering intervals and prove conjugacy. Denjoy also built a continuously differentiable example with irrational rotation number and a wandering interval.

**Wikipedia:** [Denjoy's theorem on rotation number](https://en.wikipedia.org/wiki/Denjoy%27s_theorem_on_rotation_number). It says: “a continuous function with bounded variation on the interval \[0,1).”

**Sources:**

- [Arnaud Denjoy, Sur les courbes définies par les équations différentielles à la surface du tore (1932)](https://www.numdam.org/item/JMPA_1932_9_11__333_0/)

### Normalized escape rates scale

**Remember:** One more iterate multiplies the escape rate by the degree.

*True by definition.* MSC 37F10 (Dynamics of complex polynomials, rational maps, entire and meromorphic functions; Fatou and Julia sets), 30D05. arXiv math.DS, math.CV. Level 3: graduate.

**Definition.** Let zₙ be the result of applying a polynomial P of degree d ≥ 2 to z exactly n times. Measure escape by the limit of log(max(1, \|zₙ\|))/dⁿ as n increases. This normalization accounts for the degree at each step.

**Problem.** The escape rate G exists for every complex polynomial of degree d ≥ 2 and satisfies G(P(z)) = dG(z). It vanishes exactly where the forward orbit is bounded.

**How the definition helps.** Shifting the index by one in the limit gives the scaling law (our own). For convergence, the difference between log max(1, \|P(z)\|) and d log max(1, \|z\|) is bounded (our own). After division by dⁿ these differences sum absolutely (our own). The same bound makes G positive at sufficiently large \|z\| (our own). The scaling law then gives positivity at every escaping point (our own).

**Wikipedia:** [Julia set](https://en.wikipedia.org/wiki/Julia_set). It says: “those points whose orbits under iterations of f remain bounded.”

**Paper or page:** [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3). It says: “In particular the function sequence \\\[ \\left(\\frac1{ \\deg p<sub>n</sub>\\cdot ...\\cdot \\deg p<sub>1</sub>}\\log ^+\\left\|p<sub>n</sub>\\circ ...\\circ p<sub>1</sub>\\right\|\\right)<sub>n=1</sub><sup>\\infty</sup> \\\]is uniformly convergent in $\\mathbb {C}$.”

**Sources:** none listed. No primary source with a working link was found.

### Shared randomness gives unique stationarity

**Remember:** Use the same random choice on two points and their laws move closer.

*True by definition.* MSC 37H12 (Random iteration), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** The Wasserstein distance between two probability laws is the infimum of the expected distance over joint samples having those laws. Random maps contract on average if applying the same map to any two points reduces their expected distance by a uniform factor below one.

**Problem.** Choose continuous maps independently from a fixed law on a compact parameter space, with continuous dependence on the parameter and point. On a compact metric state space, average contraction gives a unique stationary law, meaning one random step preserves it.

**How the definition helps.** The joint-sample definition lets the same random map witness contraction of two updated laws. In our own proof, start with any joint sample and apply one independent map to both points. Take the infimum over joint samples to obtain the same contraction factor for laws. The equivalent definition using test functions conceals this joint sample. The fixed-point theorem gives existence and uniqueness because the space of laws is complete in this distance.

**Paper or page:** [The Hutchinson-Barnsley theory for generalized iterated function systems by means of infinite iterated function systems](https://arxiv.org/abs/2204.00373v2). It says: “is contractive in the Monge-Kantorovich metric with Lip(Mℛ) ≤ λ &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### The symplectic definition makes Hamiltonian energy conservation immediate

**Remember:** The energy derivative is an alternating pairing of the vector field with itself.

*True by definition.* MSC 37J06 (General theory of finite-dimensional Hamiltonian and Lagrangian systems, Hamiltonian and Lagrangian structures, symmetries, invariants), 70H05. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A symplectic form ω is a closed, nondegenerate, alternating pairing of tangent vectors. The Hamiltonian vector field X of an energy function H is defined by dH(Y) = ω(X, Y) for every tangent vector Y. In standard coordinates this gives Hamilton's equations, dq/dt = ∂H/∂p and dp/dt = −∂H/∂q.

**Problem.** The energy H remains constant along every trajectory of its Hamiltonian vector field.

**How the definition helps.** The symplectic definition makes the energy derivative zero, because an alternating form vanishes on two copies of the same vector. Along a trajectory, the derivative of H is dH(X) = ω(X, X) = 0. With Hamilton's equations, the same proof differentiates H in coordinates and cancels the terms (our own).

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

**Definition.** Furstenberg's correspondence turns a set E of positive upper density in a group G into a measure-preserving action of G with a set A. Each finite intersection of translates of A has measure at most the upper density of the same intersection of translates of E. In our own reading, the paper's natural assumptions ask for equality, with densities that exist, and ask the translates of A to generate all measurable sets.

**Problem.** For a countable amenable group, a correspondence system that meets these assumptions is isomorphic to the shift on the orbit closure of the indicator of E. So the system is unique up to measurable isomorphism.

**How the definition helps.** The assumptions remove the two ways in which the system could fail to be unique. In our own explanation, without the generating condition, a product with any unrelated system also satisfies the correspondence. Without equality, the measures of the intersections are not fixed. Theorem 3.3 adds that two such systems are isomorphic exactly when all their intersection densities agree.

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

### Orbit histories expose expansivity

**Remember:** Shift any differing coordinate into view.

*Makes the theorem clean to state or prove.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37B02. arXiv math.DS. Level 4: research.

**Definition.** A set-valued map specifies a set of possible next points. Its orbit space consists of infinite sequences that follow those rules forward. The shift drops the first point of each sequence. Call the original map expansive if some fixed distance separates every pair of distinct allowed sequences at some coordinate.

**Problem.** Suppose a set-valued map on a compact metric space has nonempty compact values and a closed graph. It is expansive on its right-infinite orbits exactly when their shift is positively expansive, which uses only forward iterates.

**How the definition helps.** The orbit space turns a rule with many possible successors into one ordinary map on complete histories. Our own proof measures the distance between histories by summing bounded coordinate distances with weights ½, ¼, ⅛, and so on. Shifting a separating coordinate to the front makes its weight ½. Conversely, if all coordinates stay close, every shifted pair stays close in this metric. The closed graph makes the orbit space compact, so changing to another compatible metric preserves expansivity.

**Paper or page:** [Shadowing property for set-valued map and its inverse limit](https://arxiv.org/abs/2412.11221v2). It says: “Then F is expansive if and only if (Orbᵣ(X), σᵣF) is expansive.”

**Sources:** none listed. No primary source with a working link was found.

### Sensitivity is redundant in Devaney chaos for stronger families of times

**Remember:** Transitivity at the right times plus dense periodic points gives sensitivity.

*True by definition. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37D45. arXiv math.DS. Level 4: research.

**Definition.** For a family 𝓕 of sets of times, 𝓕-Devaney chaos asks for 𝓕-transitivity, dense periodic points and 𝓕-sensitivity. For the cofinite family, 𝓕-transitivity is mixing, so every open set meets every other open set at all large times. Cofinite sensitivity means that near each point some other point moves at least a fixed distance away at all large times.

**Problem.** Let f be a uniformly continuous map of an infinite metric space without isolated points. For four families 𝓕 that include the cofinite one, 𝓕-transitivity and dense periodic points imply 𝓕-sensitivity. So sensitivity is redundant in 𝓕-Devaney chaos.

**How the definition helps.** Defining the stronger chaos through 𝓕-transitivity lets the classical redundancy of sensitivity carry over to each family. The paper's Theorem 3.2 uses dense periodic points, like the classical result of Banks and others. For the cofinite family, our own shorter argument uses mixing only. Take two open sets at distance at least 3δ. For large n, the n-th image of any small neighborhood meets both, so some point of it moves at least δ from the image of the centre.

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

**Definition.** A Γ-boundary is a compact space with a minimal, strongly proximal action of the group Γ, so that group elements push every probability measure close to a point mass. The Furstenberg boundary ∂FΓ is the universal Γ-boundary, which maps onto every other one. An action is topologically free when, for each g ≠ e, the fixed points of g form a set with empty interior.

**Problem.** A discrete group Γ is C\*-simple, meaning its reduced C\*-algebra has no closed two-sided ideals except 0 and itself, exactly when Γ acts topologically freely on its Furstenberg boundary.

**How the definition helps.** Our own reason: the universal boundary collects all boundary behaviour in one space, so simplicity becomes one question about one action. Kalantar and Kennedy proved this equivalence, and the cited theorem also credits Breuillard, Kalantar, Kennedy and Ozawa for further equivalent forms. A nontrivial amenable group has a one-point Furstenberg boundary, so the action is not free and the group is not C\*-simple (our own). The Furstenberg boundary is very large, so one usually checks an equivalent condition on a smaller, concrete boundary (our own).

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

**How the definition helps.** The definition turns mixing into a statement about which gaps P allows. In our own proof, if Σₚ is mixing, then for all large n some sequence has 1s at places 0 and n, so n lies in P. Conversely, if P contains every n ≥ N, two allowed words placed at least N apart with 0s between them form an allowed word. The paper quotes this lemma from Banks.

**Paper or page:** [On stronger forms of Devaney chaos](https://arxiv.org/abs/2505.15286v1). It says: “Σₚ mixing ⇔ P is co–finite.”

**Sources:**

- [Shital H. Joshi, Ekta Shah, On stronger forms of Devaney chaos, arXiv:2505.15286 (2025)](https://arxiv.org/abs/2505.15286v1)

### Independent coset patterns multiply

**Remember:** Each coset supplies its part of the pattern independently.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** A subgroup shift specifies which symbol configurations are allowed on the subgroup. Its free extension to the group permits a translated copy of any such configuration on each coset independently.

**Problem.** The number of allowed patterns on a finite window in a free extension is the product of the counts on the parts in each coset.

**How the definition helps.** Independence across cosets turns a global count into a product of local counts. Our own argument extends each allowed piece to a configuration on its coset, then combines the configurations. General extensions can impose relations between cosets, so this construction can fail for them. The cited lemma gives the product formula directly.

**Paper or page:** [Projectional entropy for actions of amenable groups](https://arxiv.org/abs/2403.01230v1). It says: “Let F₁,…,Fₙ ∈ ℱ(G) be subsets of different cosets.”

**Sources:**

- [Michał Prusik, Projectional entropy for actions of amenable groups, Lemma 3.7](https://arxiv.org/abs/2403.01230v1)

### Receptive lifts preserve least periods

**Remember:** If fixed ends accept every long repeat, one period can lift.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** An irreducible sofic shift consists of label sequences along paths in a finite strongly connected graph. A word synchronizes if any allowed left and right contexts for it can occur together. A periodic sequence is receptive if two fixed synchronizing words can bracket every sufficiently long repetition of its shortest period block.

**Problem.** In an irreducible sofic shift, a periodic point is receptive exactly when it is the image of a point with the same least period under a factor code from some irreducible shift of finite type. A factor code is a continuous onto map that commutes with the shift.

**How the definition helps.** Receptivity rules out a parity obstruction that can prevent a periodic point from lifting with its least period. Our own example uses the even shift, where successive ones enclose an even number of zeros. Every synchronizing word contains a one, since a block of zeros cannot determine the parity at both ends. Between fixed synchronizing ends, the all-zero point therefore permits only one parity of repeat counts. The cited theorem proves that receptivity suffices by constructing a suitable cover.

**Paper or page:** [Factorizable embeddings and the period of an irreducible sofic shift](https://arxiv.org/abs/2508.02554v2). It says: “Then, w is receptive if and only if there is an irreducible SFT X, a factor code π : X → Y and a periodic point x ∈ X with least period p such that π(x) = w.”

**Sources:**

- [Brian Marcus, Tom Meyerovitch, Klaus Thomsen, and Chengyu Wu, Factorizable embeddings and the period of an irreducible sofic shift, Theorem 4.7](https://arxiv.org/abs/2508.02554v2)

### Trees force linear word complexity

**Remember:** One fewer edge than vertices means no change in the growth rate.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** In a shift space of symbol sequences, form a graph for each allowed word. Use separate vertices for letters that can precede or follow it. Join two vertices if those letters can occur together around the word. The shift is dendric if every such graph, including the empty word’s graph, is a tree.

**Problem.** In a dendric shift using d letters, there are exactly 1 + (d − 1)n words of length n.

**How the definition helps.** The tree condition replaces a count of two-sided extensions with a count of vertices minus one. In our own calculation, summing edge counts over length-n words counts the length-(n + 2) words, and the vertices count the length-(n + 1) words twice. Subtracting one per tree makes the successive increases in the word count equal. Starting with one empty word and d single letters gives the formula.

**Paper or page:** [𝒮-adic characterization of minimal dendric shifts](https://arxiv.org/abs/2206.00333v4). It says: “then pₓ(n) = (pₓ(1) − 1)n + 1 for every n.”

**Sources:** none listed. No primary source with a working link was found.

### Maximum distance ensures set convergence

**Remember:** After m updates, all m sets satisfy the smaller distance bound.

*Makes the theorem clean to state or prove.* MSC 37B35 (Gradient-like behavior; isolated (locally maximal) invariant sets; attractors, repellers for topological dynamical systems), 39A30. arXiv math.DS. Level 4: research.

**Definition.** For two nonempty compact sets, their Hausdorff distance is the greatest distance from a point of either set to the other set. For tuples of m such sets, use the maximum of the m coordinate distances. Given a family of maps with m inputs, each update takes the union of their images of the latest m sets in order.

**Problem.** Take a nonempty finite family of maps from m copies of a nonempty complete metric space into that space, where m ≥ 1. Each map must shrink distances by a common factor 0 ≤ q &lt; 1 when inputs use the maximum distance. From any m nonempty compact starting sets, the updates converge in Hausdorff distance to the same compact set.

**How the definition helps.** The maximum distance makes each group of m updates shrink the entire tuple by a factor of at most q. Our own proof bounds the distance between two new unions by q times the largest distance between corresponding input sets. Until m steps have passed, the tuple can still contain an original set. After m updates every coordinate satisfies the improved bound. Completeness of the space of nonempty compact sets and the contraction mapping theorem give the unique limit.

**Paper or page:** [The Hutchinson-Barnsley theory for generalized iterated function systems by means of infinite iterated function systems](https://arxiv.org/abs/2204.00373v2). It says: “converges to A𝒮, the fractal attractor.”

**Sources:** none listed. No primary source with a working link was found.

### Axioms for abstract entropy make every entropy limit exist at once

**Remember:** Two time blocks together cost at most the sum of their costs.

*True by definition. Confidence: medium.* MSC 37B40 (Topological entropy), 06F05. arXiv math.DS. Level 4: research.

**Definition.** The paper defines an entropy space as a pre-ordered semigroup with a size function h. Elements stand for descriptions such as open covers, and the product combines two descriptions. A lower map λ acts on the space, like pulling a cover back by the dynamics. Our reading is that the axioms bound the size of a product by the sum of the sizes and stop λ from increasing size.

**Problem.** For a description α, let aₙ be the size of the product of α, λα, …, λⁿ⁻¹α. Then aₙ/n converges to its infimum.

**How the definition helps.** The axioms make aₙ subadditive by definition, so Fekete's lemma gives the limit. The paper proves aₙ₊ₘ ≤ aₙ + aₘ in Lemma 2.3.7. Topological entropy and mean dimension are cases of the scheme, so the limit exists in each case without a new proof. In our own reading, the real work for a concrete entropy is checking the axioms.

**Paper or page:** [Abstract entropy and expansiveness](https://arxiv.org/abs/2203.10394v2). It says: “is subadditive, that is, aₙ₊ₘ ≤ aₙ + aₘ for all n,m ≥ 1.”

**Sources:**

- [Mauricio Achigar, Abstract entropy and expansiveness, arXiv:2203.10394 (2023)](https://arxiv.org/abs/2203.10394v2)

### Bowen entropy respects countable unions

**Remember:** Pay for each orbit ball separately and combine the covering budgets.

*Rules out counterexamples.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 4: research.

**Definition.** A Bowen ball of length n contains points that stay within a chosen distance of its center during the first n observations. Cover the set with countably many such balls and give each length-n ball cost exp(−sn). For each distance, take the infimum of s ≥ 0 allowing arbitrarily cheap covers with arbitrarily large minimum length. Bowen entropy is the limit of these thresholds as the distance tends to zero.

**Problem.** For a homeomorphism of a compact metric space, the Bowen entropy of a countable union equals the supremum of its members’ Bowen entropies.

**How the definition helps.** Variable lengths let us combine arbitrarily cheap covers even when different members need different lengths. In our own proof, choose s above every member's entropy and give member j a budget of ε/2ʲ, so the union costs at most ε. Inclusion gives the reverse inequality. Our own comparison uses the full binary shift, whose countably many periodic points realize every finite word, so fixed-length counts grow exponentially though each point has zero entropy.

**Paper or page:** [Entropy properties of mostly expanding partially hyperbolic diffeomorphisms](https://arxiv.org/abs/2401.12465v1). It says: “hₜₒₚ(f,Y) = supₙ hₜₒₚ(f,Yₙ), where Y = ⋃ₙ∈ℕ Yₙ ⊂ X.”

**Sources:**

- [Rufus Bowen, Topological entropy for noncompact sets (1973)](https://doi.org/10.1090/S0002-9947-1973-0338317-X)

### Pattern counts make entropy additive

**Remember:** Independent pattern choices multiply counts and add entropy.

*True by definition.* MSC 37B40 (Topological entropy), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A subshift is a closed set of configurations over a finite alphabet that is invariant under translations of the group. An amenable group admits finite windows whose relative change under each fixed translation tends to zero. Along such windows, entropy is the limit of the logarithm of the allowed pattern count divided by the window size.

**Problem.** For two subshifts over the same countable amenable group, the topological entropy of their product is the sum of their entropies.

**How the definition helps.** Counting patterns makes the product rule ordinary multiplication on each window. Our own proof pairs any allowed pattern in the first system with any allowed pattern in the second. Logarithms turn the product into a sum. The substantive theorem identifies the limiting counts with topological entropy defined using open covers.

**Paper or page:** [An embedding theorem for subshifts over amenable groups with the comparison property](https://arxiv.org/abs/2211.00215v2). It says: “Let X and T be subshifts. Then h(X × T) = h(X) + h(T).”

**Sources:**

- [Robert Bland, An embedding theorem for subshifts over amenable groups with the comparison property, Lemma 2.20](https://doi.org/10.1017/etds.2024.21)

### Presentation determinants give algebraic entropy

**Remember:** Local lengths become exponents, and the logarithmic measure adds their contributions.

*Makes the theorem clean to state or prove.* MSC 37B40 (Topological entropy), 11R06. arXiv math.DS, math.NT. Level 4: research.

**Definition.** Let R be the ring of integer Laurent polynomials in d variables. For a finitely generated torsion R-module M, the characteristic element is the product of its irreducible factors p, each raised to the length of M after inverting the elements coprime to p. It is defined up to a signed monomial.

**Problem.** Let M be the quotient of Rⁿ by the image of a square matrix A with nonzero determinant. Multiplication by the variables gives commuting maps of the character group of M. Their topological entropy is the logarithmic Mahler measure of det A, the average of log\|det A\| over the unit torus.

**How the definition helps.** In our own explanation, the characteristic element packages the contributions from all irreducible factors into one polynomial. Diagonalizing A after allowing denominators coprime to p identifies the local length with the exponent of p in det A. The entropy addition theorem and the computation for prime quotients supply the dynamical part. Logarithmic Mahler measure turns the resulting product into the required sum.

**Wikipedia:** [Mahler measure](https://en.wikipedia.org/wiki/Mahler_measure). It says: “the entropy of the action is expressed as a sum of logarithmic Mahler measures over the generators of the principal associated prime ideals of the module.”

**Sources:**

- [Lind, Schmidt and Ward, Mahler measure and entropy for commuting automorphisms of compact groups](https://doi.org/10.1007/BF01231517)

### Shifts on orbit sequences define metric mean dimension for discontinuous maps

**Remember:** Move along recorded orbits, even when the map itself jumps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B40 (Topological entropy), 37B10. arXiv math.DS. Level 4: research.

**Definition.** Metric mean dimension measures how fast the complexity of orbits grows as the scale of resolution shrinks. For a closed set Γ in X × X, the shift acts on the space Γ(ℕ) of sequences whose consecutive pairs lie in Γ. For a discontinuous map, the paper uses a suitable shift of this kind, in our own reading with Γ built from the closure of the graph.

**Problem.** For a continuous map, the new metric mean dimension agrees with the usual one. For a class of interval maps that includes the Gauss map, the upper metric mean dimension equals the upper box dimension of the set where the map breaks.

**How the definition helps.** The shift on sequences is continuous even when the map is not, so the old definition applies to it. Theorem B shows that the two notions agree for continuous maps, which justifies the new definition. Theorem C treats the interval maps, with full equality when the box dimension exists.

**Paper or page:** [Metric mean dimension via subshifts of compact type](https://arxiv.org/abs/2407.07682v2). It says: “Building upon this result, we extend the notion of metric mean dimension to discontinuous maps in terms of suitable subshifts.”

**Sources:**

- [Gustavo Pessil, Metric mean dimension via subshifts of compact type, arXiv:2407.07682 (2025)](https://arxiv.org/abs/2407.07682v2)

### A safe symbol makes a shift of finite type an absolute retract

**Remember:** Overwrite every bad window with the safe symbol.

*True by definition. Confidence: medium.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A shift of finite type is a subshift defined by forbidding finitely many patterns. A safe symbol s is a symbol such that writing s at any set of sites of an allowed configuration gives an allowed configuration. A subshift Y is an absolute retract if every subshift X containing Y has a shift-respecting continuous map onto Y that fixes Y.

**Problem.** Over a countable group, a shift of finite type with a safe symbol is an absolute retract for the class of subshifts. In particular it has the map extension property.

**How the definition helps.** A safe symbol repairs any forbidden pattern without breaking an allowed one, which gives the retraction directly. In our own proof, given X containing Y, write s at every site of every window where a point of X shows a forbidden pattern. Windows that were forbidden now hold only s, and windows that were allowed stay allowed. Points of Y have no forbidden windows, so they do not change.

**Paper or page:** [An embedding theorem for multidimensional subshifts](https://arxiv.org/abs/2312.05650v5). It says: “with a safe symbol is an absolute retract for the class of subshifts, and in particular has the map extension property.”

**Sources:**

- [Tom Meyerovitch, An embedding theorem for multidimensional subshifts, Ergodic Theory Dynam. Systems 45 (2025) 1870–1914, arXiv:2312.05650](https://arxiv.org/abs/2312.05650v5)

### The map extension property extends Krieger’s embedding theorem to abelian groups

**Remember:** Ask the target to accept extensions of partial maps.

*Makes the theorem clean to state or prove.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A subshift Y has the map extension property if every shift-respecting continuous map into Y from a closed invariant subset of a subshift X extends to all of X. This is required whenever the symmetries of points of X permit it.

**Problem.** A subshift over ℤ has the map extension property exactly when it is a topologically mixing shift of finite type. So the paper's embedding theorem over countable abelian groups, with targets that have this property, contains Krieger's embedding theorem.

**How the definition helps.** The map extension property is the target condition that lets the paper state one embedding theorem over every countable abelian group. Over ℤ it is the same as Krieger's condition, so the new theorem contains Krieger's. In our own explanation, the symmetry condition is needed because a periodic point can only map to a point with at least the same periods. The hard work of the paper is making the extended map injective.

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

**Problem.** For a subshift with the topological Markov property, a Borel probability measure is Gibbs exactly when it is étale Gibbs. This holds for interactions whose energy differences converge absolutely for configurations that differ at finitely many sites.

**How the definition helps.** The finite-border rule lets the local étale test cover every finite change. In our own explanation, the Gibbs test asks how probabilities change when a finite patch changes. The étale test uses only changes that extend continuously to nearby configurations. The topological Markov property makes every finite change locally realizable.

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

**Problem.** Smooth Hamiltonian flows driven by continuous semimartingale noise, taken in the Stratonovich sense, preserve phase-space volume with probability one wherever a smooth local flow exists.

**How the definition helps.** Defining volume from ω makes volume preservation follow directly from preservation of ω (our own). This avoids a separate calculation of the volume change in coordinates (our own). The Stratonovich rule obeys the ordinary chain rule, so the flow preserves ω because every driving field generates motion preserving ω (our own).

**Paper or page:** [Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems](https://arxiv.org/abs/2312.09769v3). It says: “the symplectic volume form ωⁿ ≔ ω ∧ ⋯ ∧ ω (n times) is preserved under the flow of”

**Sources:**

- [Oliver D. Street and So Takao, Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems (2024)](https://arxiv.org/abs/2312.09769v3)

### Diophantine frequencies bound the small divisors, so KAM tori survive

**Remember:** Badly approximable frequencies resist small perturbations.

*Rules out counterexamples. Confidence: medium.* MSC 37J40 (Perturbations of finite-dimensional Hamiltonian systems, normal forms, small divisors, KAM theory, Arnol'd diffusion), 37C55. arXiv math.DS, math.SG. Level 4: research.

**Definition.** A frequency vector ω in ℝᵈ is Diophantine if there are numbers γ, τ &gt; 0 with this property. For every nonzero integer vector k, \|ω · k\| is at least γ divided by ‖k‖ to the power τ. So ω is badly approximated by rational relations among its entries.

**Problem.** KAM theorem: under a small enough perturbation of a non-degenerate integrable Hamiltonian system, the invariant tori with Diophantine frequencies survive.

**How the definition helps.** The proof divides by the numbers ω · k, the small divisors, and the Diophantine bound keeps them from being too small (our own). They shrink only polynomially in ‖k‖, so a rapidly converging Newton method can beat them (our own). The condition excludes resonant tori, where ω · k = 0 for some k, and the page says that these break up under perturbation. When τ &gt; d − 1, almost every frequency vector is Diophantine (our own).

**Wikipedia:** [Kolmogorov–Arnold–Moser theorem](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Arnold%E2%80%93Moser_theorem). It says: “Surviving tori meet the non-resonance condition, i.e., they have sufficiently irrational frequencies.”

**Sources:** none listed. No primary source with a working link was found.

### Observables that vanish on the constraint set have zero Eden bracket

**Remember:** Project onto the allowed states before taking the bracket.

*True by definition.* MSC 37J60 (Nonholonomic dynamical systems), 37J55. arXiv math-ph, math.SG. Level 4: research.

**Definition.** The contact Eden bracket combines two observables of a mechanical system with dissipation and velocity constraints. One first pulls both observables back along a projection onto the allowed states, then takes a bracket there.

**Problem.** A function that is constant on the allowed states has zero Eden bracket with every observable. So two extensions of an observable that agree on the allowed states give the same bracket.

**How the definition helps.** The projection turns a function that vanishes on the allowed states into the zero function, so its bracket with anything is zero by bilinearity. In our own words, this is why the bracket depends only on values on the allowed states. The case of nonzero constants also uses the form of the bracket. The work moves to proving that the bracket gives the constrained motion.

**Paper or page:** [The contact Eden bracket and the evolution of observables](https://arxiv.org/abs/2504.00997v1). It says: “Any function g on T∗Q × ℝ that is constant on ℳ × ℝ is a Casimir, i.e.,”

**Sources:**

- [V. M. Jiménez, M. De León, The contact Eden bracket and the evolution of observables, arXiv:2504.00997v1 (2025)](https://arxiv.org/abs/2504.00997v1)
