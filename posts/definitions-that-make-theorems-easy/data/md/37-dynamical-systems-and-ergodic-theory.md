### Repeating a prescribed block makes periodic sequences dense

**Remember:** Repeat the block and the shift returns to its start.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37C25. arXiv math.DS. Level 1: early undergraduate.

**Definition.** The one-sided full shift allows every infinite sequence over a nonempty finite alphabet and deletes the first letter at each step. A prefix is a finite string of initial letters. Sharing longer prefixes makes sequences closer.

**Problem.** Periodic sequences are dense in the full shift. This means every finite prefix occurs at the start of a sequence that repeats forever.

**How the definition helps.** Describing closeness by prefixes reduces approximation to copying finitely many letters (our own). Repeat any prescribed nonempty prefix forever to obtain the required sequence (our own). The cylinder-basis theorem justifies testing prefixes in place of all open neighborhoods (our own).

**Paper or page:** [Improved Bounds For Some Asymptotic Formulas for Counting Words in Shift Spaces](https://arxiv.org/abs/2207.13898v5). It says: “All the cylinders form a countable clopen basis.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting the identity finds a fixed point on a closed interval

**Remember:** Subtract the diagonal to turn a fixed point into a zero.

*Rules out counterexamples.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 1: early undergraduate.

**Definition.** A closed bounded interval \[a, b\] contains both endpoints, with a ≤ b. A fixed point of a function f is a point x where f(x) = x.

**Problem.** Every continuous map from a nonempty closed bounded interval to itself has a fixed point.

**How the definition helps.** Including both endpoints gives f(a) − a ≥ 0 and f(b) − b ≤ 0 (our own). The intermediate value theorem gives a zero of the continuous function f(x) − x, hence a fixed point (our own). On the open interval (0, 1), the map x ↦ (x + 1)/2 has no fixed point (our own).

**Paper or page:** [Brouwer's Fixed Point Theorem/One-Dimensional Version](https://proofwiki.org/wiki/Brouwer's_Fixed_Point_Theorem/One-Dimensional_Version). It says: “a continuous real function from a closed real interval to itself fixes some point of that interval.”

**Sources:** none listed. No primary source with a working link was found.

### Unfolding makes corner hits rational

**Remember:** Reflect the table, and the ball travels straight.

*True by definition.* MSC 37C83 (Dynamical systems with singularities (billiards, etc.)). arXiv math.DS. Level 1: early undergraduate.

**Definition.** Measure slopes relative to the sides of a unit square. At each bounce, reflect the table across the wall and continue the ray straight into the reflected square.

**Problem.** A ray that starts at a corner of a square with irrational slope never reaches a corner again.

**How the definition helps.** In the unfolded table, hitting another corner means that the straight ray reaches a second integer lattice point (our own). Two such points determine a rational slope unless their line is vertical (our own). Equal angles at a bounce justify replacing the reflected path by this straight ray (our own).

**Paper or page:** [Periodic orbits for square and rectangular billiards](https://arxiv.org/abs/2410.18316v2). It says: “If a billiard trajectory starts at a vertex with an irrational slope then it never terminates at a vertex on the square billiard.”

**Sources:**

- [Periodic orbits for square and rectangular billiards](https://arxiv.org/abs/2410.18316v2)

### A first differing symbol proves the full shift is sensitive

**Remember:** The first difference eventually reaches the front.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The one-sided full shift deletes the first symbol of an infinite sequence over a finite alphabet with at least two symbols. Equal sequences have distance zero. For distinct sequences, start with distance one and halve it for each matching initial symbol.

**Problem.** For every pair of distinct sequences, some nonnegative number of shifts makes their distance one. Every sequence has arbitrarily close neighbors that eventually reach this distance from it.

**How the definition helps.** The shift moves the first difference to position zero in exactly as many steps as its index (our own). Changing just one arbitrarily late symbol gives arbitrarily close neighbors because the alphabet contains a second symbol.

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “such that, for any x ≠ y in X, there is an n ∈ ℕ such that d(fⁿ(x), fⁿ(y)) ≥ ε₀.”

**Sources:** none listed. No primary source with a working link was found.

### All long graph walks give exactly the mixing shifts

**Remember:** Mixing needs a connecting walk at every late time.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics), 37B05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Describe a graph shift by the two-sided sequences of vertices joined by directed edges. Call the graph primitive if every ordered pair of vertices has a connecting walk of every sufficiently large length.

**Problem.** Suppose every vertex of a finite directed graph occurs in a two-sided walk. Its shift is mixing, meaning every allowed block can follow any other at every sufficiently large separation, exactly when the graph is primitive.

**How the definition helps.** A visit between two prescribed blocks is a walk joining their boundary vertices (our own). Conversely, mixing between open sets that fix just one vertex gives every sufficiently long walk (our own). A directed three-cycle is strongly connected but only allows returns at multiples of three, so it is not mixing (our own).

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type). It says: “It consists of sequences whose transitions between consecutive letters are only those allowed by the graph.”

**Sources:** none listed. No primary source with a working link was found.

### Closed shift spaces stay closed under sliding block codes

**Remember:** Compact domains give closed images, and commuting with the shift preserves invariance.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A full shift consists of all two-sided sequences over a finite alphabet, with the product topology. A shift space is a closed subset of a full shift that is unchanged by the left shift. Equivalently, it consists of all sequences that avoid a specified list of finite blocks.

**Problem.** A continuous map that commutes with the left shift is a sliding block code. The image of a shift space under such a code is again a shift space.

**How the definition helps.** The topological definition reduces the proof to compactness and commutation with the shift (our own). A shift space is closed in the compact full shift, so its continuous image is compact and hence closed. The image is unchanged by the shift because the code commutes with it. The two definitions agree because open sets in the product topology are unions of sets that fix finitely many coordinates.

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “An equivalent way to define a shift space is to take a set of forbidden patterns”

**Sources:** none listed. No primary source with a working link was found.

### Finite forbidden words make violations detectable in open sets

**Remember:** One forbidden block rules out a whole open cylinder.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A two-sided shift space consists of all sequences over a finite alphabet that avoid specified finite words everywhere. The shift moves each symbol one place left. A cylinder contains all sequences matching a given block at a specified position.

**Problem.** A set of two-sided sequences is a shift space exactly when it is closed and invariant under shifts in both directions.

**How the definition helps.** A forbidden word excludes an entire open cylinder, so the complement is open (our own). Conversely, each sequence outside a closed set belongs to a cylinder missing the set (our own). Shift invariance excludes that cylinder’s block at every position (our own). Binary sequences with finitely many ones illustrate why invariance alone is insufficient (our own).

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “the set of all infinite patterns that do not contain any forbidden finite pattern of F.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed blocks make the full shift mix

**Remember:** Far enough apart, two prescribed blocks never conflict.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The one-sided full shift allows all infinite sequences over a nonempty finite alphabet and deletes the first symbol at each step. Its basic open sets, called cylinders, prescribe finite prefixes.

**Problem.** The full shift is mixing. For any two nonempty open sets and each sufficiently large n, a sequence in the first enters the second after n steps.

**How the definition helps.** Using cylinders turns a visit into two prefix requirements at specified positions (our own). For sufficiently large n the prefixes do not overlap, so one sequence can satisfy both (our own). This replaces estimates of distances between sequences with the fact that cylinders form a basis for the product topology (our own).

**Paper or page:** [Improved Bounds For Some Asymptotic Formulas for Counting Words in Shift Spaces](https://arxiv.org/abs/2207.13898v5). It says: “All the cylinders form a countable clopen basis.”

**Sources:** none listed. No primary source with a working link was found.

### Overlapping blocks turn finite rules into a directed graph

**Remember:** A longer symbol remembers the letters a local rule needs.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A shift of finite type allows all two-sided sequences over a finite alphabet that avoid a finite list of forbidden words. Choose m ≥ 1 so each forbidden word has length at most m + 1. The block code replaces each letter by the length-m block starting there.

**Problem.** The block code gives a reversible, continuous correspondence between the original shift and a shift whose rules test only adjacent pairs. The correspondence respects each shift step.

**How the definition helps.** Two consecutive blocks must overlap in m − 1 letters and together contain no forbidden word (our own). These pair tests catch every forbidden word because each fits in a window of length m + 1 (our own). Reading each block’s first letter reverses the code, and both readings use only finitely many letters per position (our own).

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type). It says: “Up to a local recoding of letters, every subshift of finite type can be described by such a directed graph.”

**Sources:** none listed. No primary source with a working link was found.

### Ternary addresses turn a Cantor map into the full shift

**Remember:** On the Cantor set, one step forgets the first ternary digit.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A ternary address records a point of the middle-thirds Cantor set in base three using only digits 0 and 2. On this set let T(x) equal 3x on the left third and 3x − 2 on the right third.

**Problem.** The ternary address matches T with the one-sided full shift, which deletes the first symbol of an infinite sequence. This correspondence is continuous and has a continuous inverse.

**How the definition helps.** Multiplying by three moves the first digit before the decimal point, and the branch formula subtracts that digit (our own). The work lies in proving that the nested Cantor intervals match points continuously and uniquely with addresses in both directions (our own).

**Paper or page:** [Cantor Space as Countably Infinite Product](https://proofwiki.org/wiki/Cantor_Space_as_Countably_Infinite_Product). It says: “Then A is homeomorphic to the Cantor space.”

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

**Definition.** The ω-limit set of x consists of all limits of orbit points along times tending to positive infinity. Equivalently, intersect the closures of all forward orbit tails after time t, using integer times for iterates and real times for flows.

**Problem.** In a compact metric space, the ω-limit set of any point is nonempty and compact. It is also connected for a continuous flow.

**How the definition helps.** The tail definition gives compactness and nonemptiness from nested closed sets (our own). The closed tails are nested nonempty compact sets, so their intersection is nonempty and compact. For a flow, each closed tail is connected, and a nested intersection of compact connected sets is connected. The work goes into identifying the tail intersection with the set of late limits.

**Wikipedia:** [Limit set](https://en.wikipedia.org/wiki/Limit_set). It says: “Both sets are f-invariant, and if X is compact, they are compact and nonempty.”

**Sources:** none listed. No primary source with a working link was found.

### Shifting the sequence makes limit sets invariant

**Remember:** Shifting every time by the same amount keeps the sequence tending to infinity.

*True by definition.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 34C05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a flow Φ on a metric space, the ω-limit set consists of limits of positions Φₜ(x) at times tending to infinity. Equivalently, it is the intersection of the closures of all forward tails of the trajectory.

**Problem.** For a continuous flow defined for every real time, every time map takes the ω-limit set onto itself.

**How the definition helps.** The sequence definition lets us add the same time to every observation. In our own proof, continuity and the flow law send the old limit to the new one. Shifting by the opposite time gives equality. The equivalence with closed tails follows by choosing later and later positions within shrinking distances of the limit.

**Wikipedia:** [Limit set](https://en.wikipedia.org/wiki/Limit_set). It says: “Both sets are f-invariant”

**Sources:** none listed. No primary source with a working link was found.

### Flow maps compose because time shifts preserve autonomous solutions

**Remember:** Restart from where you are, not from when you started.

*True by definition.* MSC 37C10 (Dynamics induced by flows and semiflows), 34A12. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** For an autonomous equation x′ = f(x), whose right side does not use time, write Φₜ for its time-t flow map. It sends each starting state to the state reached after time t.

**Problem.** If the equation has unique solutions for all real times, Φₜ ∘ Φₛ = Φₜ₊ₛ and Φ₋ₜ is the inverse of Φₜ.

**How the definition helps.** The flow map lets us see both sides as the same solution with a new starting time, our own argument. Time independence makes a shifted solution obey the same equation, and uniqueness identifies the two paths, our own argument. Setting s = −t gives the inverse, since Φ₀ leaves every state unchanged.

**nLab:** [flow of a vector field](https://ncatlab.org/nlab/show/flow+of+a+vector+field). It says: “This yields an action of the additive group (ℝ,+) of real numbers”

**Sources:** none listed. No primary source with a working link was found.

### A full return makes cycle stability a fixed point test

**Remember:** Check the slope after one full lap.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The return map of a cycle of least period n applies the original map n times. Its derivative at a cycle point is the multiplier of the cycle.

**Problem.** If the multiplier has magnitude below 1 for a continuously differentiable interval map, nearby points approach the cycle. Above 1, each sufficiently close point outside the cycle eventually leaves a fixed neighborhood of it.

**How the definition helps.** A point on the cycle is fixed by the return map, so the fixed point slope test applies (our own). The chain rule makes the multiplier the same product of slopes at every point of the cycle (our own). Continuity of the intervening steps gives attraction between returns (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “that it is attractive if \|fₙ′\| &lt; 1,”

**Sources:** none listed. No primary source with a working link was found.

### A Lyapunov function that never rises keeps nearby points nearby

**Remember:** Low values of V cannot climb out of a low sublevel.

*True by definition. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** On a compact interval with fixed point p, use a continuous Lyapunov function V with V(p) = 0 and V positive elsewhere. Require V(f(x)) ≤ V(x) near p.

**Problem.** A continuous interval self-map with such a Lyapunov function has a stable fixed point at p. Every sufficiently close starting point stays as close to p as prescribed.

**How the definition helps.** A sufficiently low sublevel set traps nearby points because V cannot increase there (our own). Outside any small neighborhood of p, compactness and strict positivity give V a positive minimum (our own). Choose a smaller positive bound so the whole sublevel set lies where V cannot increase (our own). Continuity at p puts every sufficiently close starting point inside this set (our own).

**Wikipedia:** [Lyapunov function](https://en.wikipedia.org/wiki/Lyapunov_function). It says: “If V is a Lyapunov function, then the equilibrium is Lyapunov stable.”

**Sources:** none listed. No primary source with a working link was found.

### A slope away from unit magnitude decides fixed point stability

**Remember:** A slope of magnitude one leaves the decision to higher terms.

*Rules out counterexamples.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A fixed point p of a differentiable real map is hyperbolic if the slope at p has absolute value different from 1. This leaves out fixed points that are neutral to first order.

**Problem.** For a continuously differentiable interval map, nearby points approach a hyperbolic fixed point if its slope has magnitude below 1. Above 1, every sufficiently close point other than the fixed point eventually leaves a fixed neighborhood of it.

**How the definition helps.** The strict slope bound makes each nearby step shrink or expand the distance to p (our own). The derivative estimate gives a uniform factor below or above 1 (our own). At 0 both x ↦ x − x³ and x ↦ x + x³ have slope 1, but only the first attracts (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “a periodic point is hyperbolic if \|fₙ′\| ≠ 1,”

**Sources:** none listed. No primary source with a working link was found.

### A transverse fixed point survives small parameter changes

**Remember:** Different slopes keep the intersection from disappearing.

*Rules out counterexamples. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A transverse fixed point is a point where the graph meets the diagonal with a different slope. Equivalently, the derivative of the displacement f(x) − x is nonzero there.

**Problem.** Suppose an interval map varies continuously differentiably with position and one real parameter. Near an interior transverse fixed point, exactly one nearby fixed point varies continuously differentiably with the parameter.

**How the definition helps.** The displacement has a simple zero, so the implicit function theorem supplies the branch (our own). The condition excludes the tangency in x ↦ x + λ + x², where two fixed points merge and disappear (our own).

**Wikipedia:** [Saddle-node bifurcation](https://en.wikipedia.org/wiki/Saddle-node_bifurcation). It says: “two fixed points (or equilibria) of a dynamical system collide and annihilate each other.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugacy preserves least periods by matching each step

**Remember:** Match one step and every return time matches.

*Rules out counterexamples.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37C15. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A topological conjugacy between maps f and g is a continuous bijection h with continuous inverse satisfying h ∘ f = g ∘ h. The least period of a point counts its steps until first return.

**Problem.** A topological conjugacy gives a bijection between the points of each least period for f and g.

**How the definition helps.** Applying h after n steps of f equals applying g n times after h (our own). Injectivity means a return on either side is a return on the other (our own). An onto step-matching map alone can collapse a two-cycle to a fixed point (our own).

**Wikipedia:** [Topological conjugacy](https://en.wikipedia.org/wiki/Topological_conjugacy). It says: “orbits of g are mapped to homeomorphic orbits of f through the conjugation.”

**Sources:** none listed. No primary source with a working link was found.

### Counting all returns separates points of each least period

**Remember:** A return at time n allows only periods that divide n.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** The return count at time n counts points back at their starting position after n steps. A point’s least period is its first positive return time.

**Problem.** If all return counts are finite, the time-n count sums the counts of points of each least period dividing n. Möbius inversion, the rule for reversing divisor sums, recovers each least-period count.

**How the definition helps.** The division algorithm shows that a first return time divides every later return time (our own). Grouping by first return gives the divisor sum, and inversion does the subtraction without double counting (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “is called the prime period or least period of the point x.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperbolic equilibria make the linearization a faithful picture of the flow

**Remember:** No eigenvalue on the imaginary axis, so the linear part decides.

*Rules out counterexamples. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37D05, 34C41. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** An equilibrium u\* of du/dt = f(u) is hyperbolic if the Jacobian matrix of f at u\* has no eigenvalue with real part zero.

**Problem.** For a smooth vector field near a hyperbolic equilibrium, a local homeomorphism conjugates the flow to the flow of its Jacobian there. The homeomorphism preserves time while the trajectories stay in the conjugacy neighborhoods.

**How the definition helps.** Hyperbolicity excludes neutral directions where higher powers can decide stability (our own). At zero, u′ = u³ repels and u′ = −u³ attracts, although both linearize to u′ = 0. The Hartman–Grobman theorem supplies the local time-preserving conjugacy.

**Wikipedia:** [Hartman–Grobman theorem](https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem). It says: “hyperbolicity means that no eigenvalue of the linearization has real part equal to zero.”

**Sources:**

- [P. Hartman, A lemma in the theory of structural stability of differential equations, Proceedings of the American Mathematical Society 11 (1960) 610–620](https://doi.org/10.1090/S0002-9939-1960-0121542-7)

### Branch codes let the tent map inherit dense periodic points

**Remember:** A repeating branch code gives a point that returns.

*True by definition.* MSC 37E05 (Dynamical systems involving maps of the interval), 37B10. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The tent map T(x) = 2 min(x, 1 − x) on \[0, 1\] has two inverse branches. A binary sequence codes the point in the nested intervals obtained by following its successive branch choices.

**Problem.** Periodic points of the tent map are dense, and each nonempty open interval reaches any other at every sufficiently late time. Both statements also hold for the logistic map x ↦ 4x(1 − x).

**How the definition helps.** Deleting a branch choice applies T, so questions about interval visits become questions about finite blocks (our own). The branches halve lengths, giving a continuous coding onto the interval (our own). Repeating blocks gives periodic returns, and placing two blocks far apart gives visits at all sufficiently late times (our own). The stated conjugacy carries both conclusions to the logistic map (our own).

**Wikipedia:** [Tent map](https://en.wikipedia.org/wiki/Tent_map). It says: “The tent map with parameter μ = 2 and the logistic map with parameter r = 4 are topologically conjugate”

**Sources:** none listed. No primary source with a working link was found.

### Interval coverings turn a three-cycle into all least periods

**Remember:** Close a loop of coverings to find a periodic orbit.

*Makes the theorem clean to state or prove.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Say a closed interval I covers J when f(I) contains J. A covering loop records such inclusions in order and ends back at the first interval.

**Problem.** A continuous interval map with a cycle of least period three has a cycle of every positive integer least period.

**How the definition helps.** The three cycle points bound adjacent intervals I and J whose coverings encode returns as loops (our own). I covers J, and J covers both, so the covering lemma realizes loops visiting I once or staying in J (our own). Away from the shared endpoint, a single I in a length-n loop forces least period n (our own). An endpoint orbit has period three and visits the outer point of I every three steps, forcing n = 3 for this itinerary (our own).

**Paper or page:** [Forcing Minimal Interval Patterns as Interval Exchange Transformations](https://arxiv.org/abs/2408.09569v1). It says: “Given any f-loop of intervals α: I₁ → I₂ → … Iₖ₋₁ → Iₖ → I₁ of length k, there exists a periodic point x ∈ I₁”

**Sources:**

- [T. Y. Li and J. A. Yorke, Period Three Implies Chaos (1975)](https://doi.org/10.1080/00029890.1975.11994008)

### Logarithms turn repeated stretching into average slopes

**Remember:** Logarithms turn a product of step stretches into a sum.

*True by definition.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The Lyapunov exponent of an orbit is the limit, when it exists, of the logarithm of its n-step slope magnitude divided by n. The n-step slope is the derivative of the n-fold iterate at the starting point.

**Problem.** For a differentiable interval map with nonzero slopes along an orbit, the exponent exists exactly when the average logarithmic slope magnitude converges. On an n-cycle it equals the logarithm of the absolute n-step derivative divided by n.

**How the definition helps.** Taking logarithms turns the chain rule’s product of absolute slopes into a sum (our own). Dividing by the number of steps gives the average formula for the exponent (our own). Along a cycle the same finite list repeats, so its average converges (our own).

**Wikipedia:** [Lyapunov exponent](https://en.wikipedia.org/wiki/Lyapunov_exponent). It says: “λ(x₀) = limₙ→∞ (1/n) ∑ᵢ₌₀ⁿ⁻¹ ln \|f′(xᵢ)\|”

**Sources:** none listed. No primary source with a working link was found.

### Separated branch itineraries identify the logistic Cantor set

**Remember:** Where the branches separate, each infinite address names one point.

*True by definition. Confidence: medium.* MSC 37E05 (Dynamical systems involving maps of the interval), 37B10. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For f(x) = rx(1 − x) with r &gt; 4, the surviving points stay in \[0, 1\] forever. Their branch addresses record which of the two disjoint intervals mapping onto \[0, 1\] they visit at each step.

**Problem.** The surviving points form a Cantor set, continuously matched in both directions with all infinite binary sequences. Applying f drops the first symbol.

**How the definition helps.** Branch addresses turn each logistic step into deletion of one symbol (our own). Write x = sin²(πt/2) for t in \[0, 1\], where each inverse branch multiplies t-distances by at most 1/√r (our own). Thus nested branch intervals shrink to one point per address, while disjoint branches give one address per point (our own). Shared prefixes give nearby points, and each finite prefix selects a relatively open set of survivors (our own).

**Wikipedia:** [Logistic map](https://en.wikipedia.org/wiki/Logistic_map). It says: “The set of initial conditions which remain within \[0,1\] form a Cantor set”

**Sources:** none listed. No primary source with a working link was found.

### Sharkovskii’s order classifies the possible sets of least periods

**Remember:** List odd multiples by powers of two, then count powers backward.

*Makes the theorem clean to state or prove.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Sharkovskii’s order starts with the odd numbers greater than one in increasing order. Next come those same lists multiplied successively by 2, 4, 8, and every higher power of two. The powers of two come last in decreasing order, ending at 1.

**Problem.** For continuous maps from \[0, 1\] to itself, the possible sets of least periods are exactly the nonempty tails of Sharkovskii’s order. A least period counts steps until first return, and a tail contains everything following any of its members.

**How the definition helps.** The order packages all period-forcing rules as one closure rule, and 3 comes first (our own). The work is proving the forcing rules and building a map for every tail (our own).

**Paper or page:** [On Sets of Periodic Orbit Lengths in Finitely Presented Dynamical Systems](https://arxiv.org/abs/2510.10848v2). It says: “A set S ⊂ ℕ is the LPS of a continuous selfmap f on an interval I ⊂ ℝ if and only if S is a tail in the Sharkovskii ordering.”

**Sources:**

- [O. M. Sharkovskii, Coexistence of Cycles of a Continuous Map of the Line into Itself (1995 English translation of the 1964 paper)](https://doi.org/10.1142/s0218127495000934)

### Subtracting known returns exposes the logistic map’s two-cycle

**Remember:** Cancel the fixed-point factor before solving for a two-cycle.

*True by definition.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Let f(x) = rx(1 − x) on \[0, 1\]. Its period-two polynomial is the quotient of f(f(x)) − x by f(x) − x. Polynomial division defines it even at fixed points.

**Problem.** For 0 &lt; r ≤ 4, the logistic map has exactly one two-cycle when r &gt; 3 and none when r ≤ 3. The cycle attracts for 3 &lt; r &lt; 1 + √6 and repels for 1 + √6 &lt; r ≤ 4.

**How the definition helps.** Dividing out the fixed-point equation reduces the fourth-degree return equation to r²x² − r(r + 1)x + r + 1 = 0 (our own). Its discriminant is r²(r + 1)(r − 3), and the double root at r = 3 is fixed (our own). Above three, the quadratic formula gives two distinct nonfixed roots in \[0, 1\] (our own). Their sum and product give the two-step slope 4 + 2r − r², which determines the stated stability ranges (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “there are a pair of period-2 points which together form an attracting sequence”

**Sources:**

- [R. M. May, Simple mathematical models with very complicated dynamics (1976)](https://doi.org/10.1038/261459a0)

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

**Problem.** Every continuous self-map of a nonempty compact metric space has an ergodic invariant Borel probability measure. Every invariant Borel probability measure is an average of ergodic ones.

**How the definition helps.** The extreme-point characterization lets convex geometry give both results (our own). Krylov–Bogolyubov gives an invariant probability, and the set of invariant probabilities is compact, metrizable and convex in the weak topology. Krein–Milman gives an extreme point, and Choquet’s theorem represents every invariant probability as an average of extreme points.

**Wikipedia:** [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “a measure is ergodic for T if and only if it is an extreme point of this convex set.”

**Sources:**

- [N. Krylov, N. Bogolyubov, La théorie générale de la mesure dans son application à l'étude des systèmes dynamiques de la mécanique non linéaire, Annals of Mathematics 38 (1937) 65–113](https://doi.org/10.2307/1968511)

### Ergodicity makes time averages equal space averages

**Remember:** An ergodic system cannot be split into two invariant pieces of positive measure.

*Makes the theorem clean to state or prove.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** Let T be a measure-preserving map on a probability space. T is ergodic when every invariant measurable set has measure 0 or 1.

**Problem.** For any integrable f on an ergodic probability system, its orbit averages converge almost everywhere to its integral.

**How the definition helps.** Birkhoff’s theorem identifies the almost-everywhere limit with the conditional expectation given the invariant sets (our own). Ergodicity makes that expectation constant almost everywhere, and its integral equals the integral of f.

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

**Definition.** A probability-preserving map T is weakly mixing if T × R is ergodic for every ergodic probability system R, using the product measure.

**Problem.** The product of two weakly mixing probability systems is weakly mixing.

**How the definition helps.** Regrouping products lets the defining test apply twice (our own). For any ergodic R and weakly mixing S, the product S × R is ergodic. For weakly mixing T, the product T × (S × R) is therefore ergodic. Regrouping gives (T × S) × R, as required.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “Proposition. A dynamical system (X, μ, T) is weakly mixing if and only if, for any ergodic dynamical system (Y, ν, S), the system (X × Y, μ ⊗ ν, T × S) is also ergodic.”

**Sources:** none listed. No primary source with a working link was found.

### The function definition makes strong mixing an operator invariant

**Remember:** The operator equivalence preserves fixed functions and the inner products that test mixing.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** A map T preserving a probability measure is strongly mixing if μ(A ∩ T⁻ⁿB) tends to μ(A)μ(B) for every pair of measurable sets. The Koopman operator U sends each square-integrable function f to f∘T. Equivalently, for any two square-integrable functions f and g of mean zero, the inner product of Uⁿf with g tends to zero.

**Problem.** If two Koopman operators are related by an inner-product-preserving linear bijection that intertwines them, their probability systems are either both strongly mixing or neither is.

**How the definition helps.** The function criterion expresses strong mixing through inner products on the orthogonal complement of the constants (our own). Mixing makes the fixed space one-dimensional, since a fixed mean-zero function has zero squared norm by that criterion. An intertwining unitary therefore takes constants onto constants and their orthogonal complements onto each other. It preserves the tested inner products, and its inverse gives the converse.

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

**Problem.** Consider a probability-preserving map on a standard Borel space with a forward generator of k pieces. Up to null sets, it is isomorphic to the one-sided k-symbol shift carrying the law of the names.

**How the definition helps.** The symbolic definition makes the isomorphism a matter of inverting the naming map on a set of full measure (our own). The naming map commutes with time, because the name of Tx drops the first symbol from the name of x. A forward generator makes it one-to-one on an invariant Borel set of full measure, and the Lusin–Souslin theorem gives a measurable inverse. The work goes into this inverse theorem and the equivalence between separating points and generating events.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “A partition Q is called a generator or generating partition if μ-almost every point x has a unique symbolic name.”

**Sources:** none listed. No primary source with a working link was found.

### Kolmogorov–Sinai entropy is an isomorphism invariant by its definition

**Remember:** Take the supremum over all partitions, and isomorphisms cannot change it.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** Take a measure-preserving map T and a finite partition Q of the space. Form the common refinement of Q, T⁻¹Q, …, T⁻⁽ⁿ⁻¹⁾Q, take its entropy, divide by n and let n grow. The Kolmogorov–Sinai entropy of T is the supremum of this rate over all finite measurable partitions Q.

**Problem.** The Bernoulli shifts on two and on three equally likely symbols are not isomorphic, because their Kolmogorov–Sinai entropies are log 2 and log 3.

**How the definition helps.** An isomorphism preserves the probabilities of all partition names and hence preserves the supremum (our own). Sinai’s generator theorem lets us use the coordinate partition for each shift. With k equally likely independent symbols, each length-n name has probability k⁻ⁿ, giving entropy n log k and rate log k.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:**

- [Ya. G. Sinai, On the notion of entropy of a dynamical system, Doklady Akademii Nauk SSSR 124 (1959) 768–771; English version in Ya. G. Sinai, Selecta I, Springer (2010)](https://doi.org/10.1007/978-0-387-87870-6_1)
- [D. Ornstein, Bernoulli shifts with the same entropy are isomorphic, Advances in Mathematics 4 (1970) 337–352](https://doi.org/10.1016/0001-8708(70)90029-0)

### The partition supremum makes entropy decrease under factor maps

**Remember:** Every partition of the factor gives a partition with the same entropy upstairs.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** For a probability-preserving map T and finite measurable partition Q, let Hₙ be the Shannon entropy of the first n partition labels along an orbit. Define h(T,Q) = limₙ→∞ Hₙ/n. The entropy h(T) is the supremum of these rates over all finite measurable partitions.

**Problem.** Let T and S preserve probability measures. If a measure-preserving map π from T’s space to S’s satisfies π∘T = S∘π, then h(S) ≤ h(T).

**How the definition helps.** The supremum definition makes the inequality a comparison of two collections of partitions (our own). Each partition for S pulls back through π to a partition for T with the same visit probabilities, hence the same entropy rate. So every value in the supremum for S also appears for T. A formula using one generating partition does not show this, because a generator upstairs need not give one downstairs.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:** none listed. No primary source with a working link was found.

### Natural extensions make the maps h∘g and g∘h conjugate

**Remember:** Keep every past, and swapping the factors costs nothing.

*True by definition. Confidence: medium.* MSC 37B02 (Dynamics in general topological spaces), 37C15, 54B35. arXiv math.DS. Level 3: graduate.

**Definition.** For a continuous self-map f of a compact space X, take the sequences in X with f(xᵢ₊₁) = xᵢ for every i ≥ 0. Give this space the product subspace topology. The natural extension sends each sequence to (f(x₀), x₀, x₁, …).

**Problem.** Let g from X onto Y and h from Y onto X be continuous maps of compact spaces. The natural extensions of h∘g and g∘h are conjugate even when the composites themselves are not.

**How the definition helps.** On backward orbits, g and h induce maps that are inverse to each other, so they give a conjugacy (our own proof). Send (x₀, x₁, …) to (g(x₁), g(x₂), …), and send (y₀, y₁, …) to (h(y₀), h(y₁), …). A direct check shows that these maps are inverse to each other and intertwine the two natural extensions. The hard work of the paper is choosing g and h for an arbitrary dendrite, a tree-like continuum, to get the pseudo-arc.

**Paper or page:** [On conjugacy between natural extensions of 1-dimensional maps](https://arxiv.org/abs/2110.11440v1). It says: “the natural extensions of f and F are conjugate,”

**Sources:**

- [J. Boroński, P. Minc, S. Štimac, On conjugacy between natural extensions of 1-dimensional maps, arXiv:2110.11440 (2021)](https://arxiv.org/abs/2110.11440v1)

### Devaney chaos needs no metric, because sensitivity follows from the rest

**Remember:** Transitivity plus dense periodic orbits already force sensitivity.

*True by definition. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37B20. arXiv math.DS. Level 3: graduate.

**Definition.** On an infinite metric space, a continuous map is Devaney chaotic exactly when it is transitive and its periodic points are dense. Transitivity means that for every two nonempty open sets U and V, some forward iterate of U meets V.

**Problem.** On infinite metric spaces, Devaney chaos is preserved by topological conjugacy, although sensitive dependence alone depends on the metric.

**How the definition helps.** Banks, Brooks, Cairns, Davis and Stacey showed in 1992 that transitivity and dense periodic orbits imply sensitivity for continuous maps of infinite metric spaces. So the two topological conditions carry the whole definition. Both are preserved by conjugacy, so Devaney chaos is a topological property (our own). On a non-compact space, a change of metric can destroy sensitivity by itself (our own).

**Wikipedia:** [Chaos theory](https://en.wikipedia.org/wiki/Chaos_theory). It says: “In some cases, the last two properties above have been shown to actually imply sensitivity to initial conditions.”

**Sources:**

- [J. Banks, J. Brooks, G. Cairns, G. Davis, P. Stacey, On Devaney's definition of chaos, American Mathematical Monthly 99 (1992) 332–334](https://doi.org/10.1080/00029890.1992.11995856)

### On compact spaces, expansivity does not depend on the metric

**Remember:** Every distinct pair separates by one fixed distance at some forward or backward time.

*Rules out counterexamples. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)). arXiv math.DS. Level 3: graduate.

**Definition.** A homeomorphism f of a metric space is expansive if there is ε₀ &gt; 0 with this property. Any two distinct points are moved at least ε₀ apart by some iterate fⁿ, forward or backward.

**Problem.** On a compact metric space, whether a homeomorphism is expansive does not depend on the choice of metric for the topology. So topologically conjugate homeomorphisms are both expansive or both not.

**How the definition helps.** Compactness makes two metrics with the same topology uniformly equivalent, so a gap for one metric gives a gap for the other (our own). Without compactness this fails (our own example). The map x ↦ 2x on ℝ is expansive for the usual metric, but not for the metric \|arctan x − arctan y\|. There, the points x and (1 + δ)x stay within δ/2 of each other under every iterate.

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “The space X is often assumed to be compact, since under that assumption expansivity is a topological property”

**Sources:** none listed. No primary source with a working link was found.

### A graph presentation makes shift entropy a matrix growth rate

**Remember:** Count graph walks with matrix powers, then take the logarithmic growth rate.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B40. arXiv math.DS. Level 3: graduate.

**Definition.** For a finite directed graph with at most one edge per ordered vertex pair, its vertex shift consists of all bi-infinite vertex walks. The shift moves each walk one place left. Its entropy is limₙ→∞ log Bₙ/n, where Bₙ counts the distinct length-n vertex blocks.

**Problem.** Suppose the graph has an edge and each vertex can reach every other vertex. Then its shift has entropy log λ, where λ is the largest positive eigenvalue of its adjacency matrix.

**How the definition helps.** The graph turns block counting into walk counting (our own). Strong connectivity lets every walk extend both ways, so Bₙ₊₁ equals the sum of the entries of Aⁿ for the adjacency matrix A. Perron–Frobenius gives a positive vector v with Av = λv. Comparing v with the all-ones vector bounds Bₙ₊₁ above and below by positive constants times λⁿ.

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy), [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type). It says: “Then h(σ)=log λ where λ is the largest positive eigenvalue of A.”

**Sources:** none listed. No primary source with a working link was found.

### Images of finite-type shifts make sofic shifts closed under coding

**Remember:** An image of an image of a finite-type shift is still sofic.

*True by definition.* MSC 37B10 (Symbolic dynamics), 68Q45. arXiv math.DS. Level 3: graduate.

**Definition.** A shift of finite type is a shift space defined by a finite list of forbidden blocks. A sliding block code is a continuous map between shift spaces that commutes with the shift. A shift is sofic if it is the image of a finite-type shift under a sliding block code.

**Problem.** The image of a sofic shift under a sliding block code is sofic.

**How the definition helps.** Sliding block codes compose because their composite is continuous and commutes with the shift (our own). If X = ψ(Y) for a finite-type shift Y, then φ(X) = (φ∘ψ)(Y).

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

**How the definition helps.** A synchronizing overlap joins two allowed blocks into one (our own). In finite type, an overlap longer than every forbidden block keeps each potential obstruction within one original block. Conversely, synchronizing length-M overlaps join allowed length-(M + 1) blocks successively, so those local constraints suffice. In the even shift, arbitrarily long odd zero blocks accept a one on either side separately but forbid both together.

**Paper or page:** [Computational complexity of problems for deterministic presentations of sofic shifts](https://arxiv.org/abs/2112.03484v2). It says: “A shift space X is an SFT if and only if there exists an integer M ≥ 0 such that every word w ∈ ℬ(X) with \|w\| ≥ M is intrinsically synchronizing for X.”

**Sources:** none listed. No primary source with a working link was found.

### Chain recurrence splits every compact flow into recurrent and gradient-like parts

**Remember:** Allow tiny jumps, and every flow becomes recurrent part plus downhill part.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 37B35. arXiv math.DS. Level 3: graduate.

**Definition.** For ε &gt; 0, an ε-chain is a finite list x₀,…,xₙ with n ≥ 1. For each i &lt; n, some time t ≥ 1 carries xᵢ within distance less than ε of xᵢ₊₁. A point is chain recurrent if every ε &gt; 0 permits such a chain from it to itself.

**Problem.** Every continuous flow on a compact metric space admits a continuous complete Lyapunov function. It strictly decreases along orbits outside the chain-recurrent set and stays constant on each chain component (our own).

**How the definition helps.** Chain recurrence counts orbits that return up to small errors, so the chain-recurrent set is closed and invariant (our own). Ordinary recurrent points need not form a closed set, so they give no clean split (our own). A point outside this set cannot return even with small jumps, so a function can decrease there (our own). Conley built the function from pairs of an attractor and its dual repeller, and the work moves to this construction (our own).

**Wikipedia:** [Conley's fundamental theorem of dynamical systems](https://en.wikipedia.org/wiki/Conley%27s_fundamental_theorem_of_dynamical_systems). It says: “every flow of a dynamical system with compact phase portrait admits a decomposition into a chain-recurrent part and a gradient-like flow part.”

**Sources:**

- [C. Conley, Isolated Invariant Sets and the Morse Index, CBMS Regional Conference Series in Mathematics 38, American Mathematical Society (1978)](https://doi.org/10.1090/cbms/038)

### Unique shadowing yields topological stability

**Remember:** A perturbed orbit picks out exactly one nearby true orbit.

*Rules out counterexamples.* MSC 37B25 (Stability of topological dynamical systems), 37B65. arXiv math.DS. Level 3: graduate.

**Definition.** A homeomorphism f is expansive if some c &gt; 0 lets an integer iterate separate each distinct pair by at least c. Shadowing means every ε &gt; 0 admits δ &gt; 0 with the following property. Every bi-infinite sequence satisfying d(f(xᵢ),xᵢ₊₁) &lt; δ admits y with d(fⁱ(y),xᵢ) &lt; ε for all integers i.

**Problem.** An expansive homeomorphism with shadowing on a compact metric space is topologically stable. Each sufficiently nearby homeomorphism admits a continuous map close to the identity that intertwines it with the original system.

**How the definition helps.** Expansivity makes the shadow of each perturbed orbit unique at tolerance ε &lt; c/2 (our own). A sufficiently close homeomorphism produces step errors below δ, so shadowing supplies the orbit. Uniqueness makes the selection commute with time, and compactness gives continuity by taking convergent subsequences at tolerance ε with 2ε &lt; c. For the identity on a Cantor set, nearby constant orbits can shadow the same point.

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “such that for every pair of points x ≠ y in X there is an integer n such that”

**Paper or page:** [Pointed Gromov-Hausdorff Topological Stability for non-compact metric spaces](https://arxiv.org/abs/2204.06649v1). It says: “If f is 𝒞-expansive and has the 𝒞-shadowing property then it is 𝒞-topologically stable.”

**Sources:**

- [Peter Walters, On the pseudo orbit tracing property and its relationship to stability](https://doi.org/10.1007/BFb0101795)

### The Conley index detects nonempty isolated invariant sets

**Remember:** The empty invariant set has the index of a point.

*True by definition.* MSC 37B30 (Index theory for dynamical systems, Morse-Conley indices). arXiv math.DS. Level 3: graduate.

**Definition.** An index pair consists of compact sets L ⊆ N with S = Inv(closure(N ∖ L)) ⊆ int(N ∖ L), where Inv selects complete orbits. Each forward orbit from L stays in L while it stays in N, and every forward orbit leaving N first meets L. The Conley index is the pointed homotopy type of N/L, adding a separate basepoint when L is empty.

**Problem.** If the Conley index is not the pointed homotopy type of a point, then S is nonempty.

**How the definition helps.** The quotient definition lets us choose the simplest index pair for the empty set (our own). Take N₁ = N₂ to be a single point, so the collapsed space is a point. A nontrivial index thus proves existence without finding a trajectory inside the neighborhood. The work goes into Conley's theorems that index pairs exist and that the index does not depend on the pair.

**Wikipedia:** [Conley index theory](https://en.wikipedia.org/wiki/Conley_index_theory). It says: “If the index is nontrivial then the invariant set S is nonempty. This principle can be amplified to establish existence of fixed points and periodic orbits inside N.”

**Sources:**

- [C. Conley, Isolated invariant sets and the Morse index, CBMS Regional Conference Series in Mathematics 38 (1978)](https://doi.org/10.1090/cbms/038)

### Bundled orbit names scale entropy

**Remember:** Bundle k consecutive readings into each reading of the faster clock.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** For a finite open cover C, an n-step name specifies one cover member for each of the first n orbit positions. Let N(n) count the fewest names needed to cover every orbit. The entropy of C is limₙ→∞ log N(n)/n, and topological entropy is the supremum over all finite open covers.

**Problem.** For a continuous map of a compact metric space, the entropy of its k-th iterate is k times its entropy for each positive integer k.

**How the definition helps.** The open-cover definition lets one observation of the faster map record a block of k original observations. In our own proof, use the cover by all k-step names. Under the k-th iterate, n readings of this cover give exactly the original kn-step names, so its rate is k times the original rate. The block cover refines the original cover, which gives the reverse inequality after taking suprema.

**Paper or page:** [Unifying topological entropy notions for piecewise continuous maps on the interval](https://arxiv.org/abs/2404.10867v1). It says: “hₜₒₚ(fᵏ) = k hₜₒₚ(f) for every integer k ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Counting separated orbits gives isometries zero topological entropy

**Remember:** If distances never change, counting longer orbit segments adds nothing.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** For a continuous self-map f of a compact metric space, put dₙ(x,y) = max₀≤ₖ&lt;ₙ d(fᵏx,fᵏy). Let N(n,ε) be the largest size of a set whose distinct points have dₙ-distance greater than ε. The Bowen–Dinaburg entropy is the limit as ε decreases to zero of limsupₙ→∞ log N(n,ε)/n.

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

**Definition.** For a flow Φ and a chosen space of scalar functions, a Koopman eigenfunction with exponent λ is a nonzero member u satisfying one identity. For every state x and time t, u(Φₜ(x)) = exp(λt)u(x).

**Problem.** Suppose two such functions have exponents λ and μ. If their product belongs to the chosen space and is nonzero somewhere, it has exponent λ + μ.

**How the definition helps.** The definition tracks function values along trajectories, so multiplying two values multiplies their exponential factors. In our own comparison, a matrix acting on state vectors has no corresponding product rule. Finding the two eigenfunctions remains a separate problem.

**Paper or page:** [Participation Factors for Nonlinear Autonomous Dynamical Systems in the Koopman Operator Framework](https://arxiv.org/abs/2409.10105v1). It says: “Furthermore, there exist Koopman eigenvalues j₁λ₁ + ⋯ + jₙλₙ for all j₁,…,jₙ ∈ ℕ₀ such that j₁ + ⋯ + jₙ &gt; 1”

**Sources:** none listed. No primary source with a working link was found.

### Topological equivalence lets systems with periodic orbits be structurally stable

**Remember:** Match the orbits, not the clocks, and stable systems exist.

*Makes the theorem clean to state or prove.* MSC 37C15 (Topological and differentiable equivalence, conjugacy, moduli, classification of dynamical systems), 37C20, 37E35. arXiv math.DS. Level 3: graduate.

**Definition.** Two flows are topologically equivalent when a homeomorphism carries the oriented orbits of one onto those of the other, without having to respect time. A vector field is structurally stable if every small C¹ perturbation of it has a topologically equivalent flow.

**Problem.** Consider C¹ vector fields on the sphere, or on the closed disk with the field transverse to its boundary. Structural stability holds exactly when equilibria and cycles are finite in number, all are hyperbolic, and no saddle connections occur.

**How the definition helps.** Orbit equivalence allows a perturbation to change a cycle’s period while preserving its oriented orbit (our own). The Andronov–Pontryagin criterion supplies the classification under these hypotheses.

**Wikipedia:** [Structural stability](https://en.wikipedia.org/wiki/Structural_stability). It says: “Without these restrictions, no continuous time system with fixed points or periodic orbits could have been structurally stable.”

**Sources:**

- [A. A. Andronov, L. S. Pontryagin, Coarse systems (1937), reprinted in V. I. Arnold (ed.), Geometric Methods in the Theory of Differential Equations, Springer (1988)](https://archive.org/details/geometricalmetho0000arno_o8o1)

### Lefschetz numbers make the zeta function rational

**Remember:** Replace point counts with alternating traces, then turn the trace series into determinants.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37C30, 55M20. arXiv math.DS, math.AT. Level 3: graduate.

**Definition.** Let f be a continuous map of a finite polyhedron to itself. Its Lefschetz number L(f) is the alternating sum of the traces of the maps Mᵢ that f induces on the rational homology groups Hᵢ. The Lefschetz zeta function is exp(∑ₙ L(fⁿ)tⁿ/n), summed over n ≥ 1.

**Problem.** The Lefschetz zeta function is the product of the factors det(I − tMᵢ), with exponent −1 for even i and +1 for odd i. So it is rational and does not change when f is continuously deformed.

**How the definition helps.** Alternating traces give a determinant calculation (our own). The iterate fⁿ induces Mᵢⁿ, and the formal identity −log det(I − tMᵢ) = ∑ₙ≥₁ tr(Mᵢⁿ)tⁿ/n gives each factor. Homotopic maps induce the same homology maps, so deformation preserves the product.

**Wikipedia:** [Lefschetz zeta function](https://en.wikipedia.org/wiki/Lefschetz_zeta_function). It says: “Thus it is a rational function. The polynomials occurring in the numerator and denominator are essentially the characteristic polynomials of the map induced by f on the various homology spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Defining transfer by integration makes invariant densities fixed points

**Remember:** The transfer operator gives the density after transport, so invariance means it stays unchanged.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37C40. arXiv math.DS. Level 3: graduate.

**Definition.** Let T be measurable on a σ-finite measure space with measure m, and suppose preimages of null sets are null. For integrable h, its transfer Lh is the unique integrable function up to equality almost everywhere satisfying the following identity. For every bounded measurable g, ∫ (Lh)g dm = ∫ h(g∘T) dm.

**Problem.** A probability density h gives a T-invariant measure h·m exactly when Lh = h almost everywhere.

**How the definition helps.** The integration definition makes invariance the statement that h and Lh have the same integrals against every bounded test function (our own). Transporting h·m by T replaces g in its integral by g∘T. By the defining rule, the result is the integral of g against Lh·m, so the measures agree exactly when the densities agree almost everywhere. The work goes into deriving the preimage formula by change of variables, or into the Radon–Nikodym theorem that gives Lh in general.

**Wikipedia:** [Transfer operator](https://en.wikipedia.org/wiki/Transfer_operator). It says: “The left-adjoint of the Perron–Frobenius operator is the Koopman operator or composition operator.”

**Sources:** none listed. No primary source with a working link was found.

### Edge shifts turn periodic-point counts into a rational zeta function

**Remember:** Closed walks give traces, and the trace series gives a determinant.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** The Artin–Mazur zeta function of T is exp(∑ₙ \|Fix(Tⁿ)\| zⁿ/n), where Fix(Tⁿ) is the finite set of points fixed by Tⁿ. An edge shift is the left shift on two-sided walks along the edges of a finite directed graph. Every shift of finite type can be recoded as an edge shift.

**Problem.** For an edge shift with adjacency matrix A, the zeta function is 1/det(I − zA). In particular, it is rational.

**How the definition helps.** The edge shift counts points fixed by Tⁿ as closed length-n edge walks with a specified start (our own). Their count is tr(Aⁿ) because each matrix entry counts edges between two vertices. The formal identity ∑ₙ≥₁ tr(Aⁿ)zⁿ/n = −log det(I − zA) now gives the result by exponentiation.

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type), [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “For subshifts of finite type, the zeta function is a rational function of z”

**Sources:**

- [M. Artin, B. Mazur, On periodic points, Ann. of Math. 81 (1965) 82–99](https://doi.org/10.2307/1970384)

### Normalized weights undo pullback

**Remember:** A backward average of a value constant on the fiber returns that value.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37D35. arXiv math.DS. Level 3: graduate.

**Definition.** A transfer operator forms a weighted sum of function values over the preimages of each point. A normalized transfer operator uses nonnegative weights whose sum at each point is one.

**Problem.** A normalized transfer operator for a map is a left inverse of composing a function with that map.

**How the definition helps.** Every preimage of y has the same value f(y) under f∘T (our own). The weighted sum therefore equals f(y) times the sum of the weights, which is one.

**Paper or page:** [Measurable multiresolution systems, endomorphisms, and representations of Cuntz relations](https://arxiv.org/abs/2304.14558v1). It says: “The adjoint operator Sσ\* is a transfer operator Sσ\*(g(f ∘ σ)) = f Sσ\*(g).”

**Sources:**

- [David Ruelle, Statistical mechanics of a one-dimensional lattice gas (1968)](https://doi.org/10.1007/BF01654281)

### Writing the Artin–Mazur zeta as a product over orbits gives integer coefficients

**Remember:** Each periodic orbit contributes a geometric series with coefficients zero and one.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.). arXiv math.DS. Level 3: graduate.

**Definition.** Let f map a set to itself, with finitely many points fixed by each iterate fⁿ. The Artin–Mazur zeta function is usually defined as exp(∑ₙ \|Fix(fⁿ)\|zⁿ/n). Instead, write it as the product over periodic orbits of 1/(1 − zᵈ), where d is the length of the orbit.

**Problem.** The Artin–Mazur zeta function is a power series with nonnegative integer coefficients.

**How the definition helps.** Every orbit contributes a geometric series with coefficients zero and one (our own). Only finitely many orbits have length at most N, so the coefficient of zᴺ is a nonnegative integer. Taking formal logarithms recovers the exponential definition because a length-d orbit contributes d fixed points exactly when d divides n.

**Wikipedia:** [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “Note that the zeta function is defined only if the set of fixed points is finite for each n.”

**Sources:**

- [Michael Artin and Barry Mazur, On Periodic Points (1965)](https://doi.org/10.2307/1970384)

### Pseudo-orbits make computed orbits of chaotic maps meaningful

**Remember:** A computed orbit is a pseudo-orbit, and a true orbit shadows it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37C50 (Approximate trajectories (pseudotrajectories, shadowing, etc.) in smooth dynamics), 37B65. arXiv math.DS. Level 3: graduate.

**Definition.** For a self-map f of a metric space, a two-sided ε-pseudo-orbit is a sequence indexed by all integers. It satisfies d(f(xᵢ),xᵢ₊₁) &lt; ε for every index i.

**Problem.** Let Λ be a compact hyperbolic invariant set of a diffeomorphism f. Some neighborhood U of Λ has the following shadowing property. For every δ &gt; 0, some ε &gt; 0 lets a true orbit δ-shadow each ε-pseudo-orbit in U at every time.

**How the definition helps.** A step error bound makes a computed trajectory a pseudo-orbit. The hyperbolic shadowing lemma supplies a true orbit that stays close at every time, possibly from a different starting point (our own).

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

### Transversality excludes fragile saddle connections in Morse–Smale flows

**Remember:** Tilt the torus so saddles stop meeting, and the flow becomes stable.

*Rules out counterexamples.* MSC 37D15 (Morse-Smale systems), 37C20, 37E35. arXiv math.DS. Level 3: graduate.

**Definition.** A smooth flow on a closed manifold is Morse–Smale if its nonwandering set consists of finitely many hyperbolic equilibria and periodic orbits, with transverse intersections. At every intersection of their stable and unstable manifolds, the two tangent spaces together span the ambient tangent space.

**Problem.** Morse–Smale flows on closed manifolds are structurally stable. On closed orientable surfaces, Peixoto’s theorem says that structural stability is equivalent to the Morse–Smale condition.

**How the definition helps.** Transversality excludes a surface orbit joining two saddles because their one-dimensional invariant manifolds share its tangent line (our own). In the upright torus example, a small tilt breaks the saddle connection. The Palis–Smale theorem gives structural stability, and Peixoto’s theorem gives the converse on closed orientable surfaces (our own).

**Wikipedia:** [Morse–Smale system](https://en.wikipedia.org/wiki/Morse%E2%80%93Smale_system), [Peixoto's theorem](https://en.wikipedia.org/wiki/Peixoto%27s_theorem). It says: “the stable and unstable manifolds of the saddle points do not intersect transversely, so the height function does not satisfy the Morse-Smale condition.”

**Sources:**

- [S. Smale, Morse inequalities for a dynamical system, Bulletin of the American Mathematical Society 66 (1960) 43–49](https://doi.org/10.1090/S0002-9904-1960-10386-2)

### Markov rectangles give finite-type coding

**Remember:** Compatible rectangles make consecutive steps enough to test a whole itinerary.

*Makes the theorem clean to state or prove.* MSC 37D20 (Uniformly hyperbolic systems (expanding, Anosov, Axiom A, etc.)), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** A Markov partition covers a hyperbolic set by small closed local product rectangles, each the closure of its relative interior, with pairwise disjoint relative interiors. Whenever x ∈ int(R) and f(x) ∈ int(S), f maps the stable slice of R through x into its counterpart in S. It maps the unstable slice through x over the entire unstable slice of S through f(x).

**Problem.** Let a diffeomorphism have a compact hyperbolic set made of the orbits that stay in a given neighborhood for all time. A sufficiently fine Markov partition codes this set by the shift on two-sided sequences of rectangles with allowed consecutive pairs. The coding map is continuous and onto, and it turns the shift into one step of the diffeomorphism.

**How the definition helps.** The slice conditions let compatible rectangle itineraries extend one step at a time (our own). Compactness realizes infinite itineraries, and expansivity gives one point per itinerary for sufficiently small rectangles. Agreement on longer central blocks forces closer points, giving continuity. Boundary points may have several itineraries, and Bowen’s coding theorem gives surjectivity.

**Wikipedia:** [Markov partition](https://en.wikipedia.org/wiki/Markov_partition). It says: “the movement of a trajectory from one open cover to the next is determined only by the most recent cover, and not the history of the system.”

**Paper or page:** [Geometric Markov partitions for pseudo-Anosov homeomorphisms with prescribed combinatorics](https://arxiv.org/abs/2409.03066v1). It says: “is a continuous, surjective, and finite-to-one map.”

**Sources:**

- [Rufus Bowen, Markov Partitions for Axiom A Diffeomorphisms (1970)](https://doi.org/10.2307/2373370)

### Rotation averages survive coordinate changes

**Remember:** A bounded coordinate change disappears when divided by the number of steps.

*True by definition.* MSC 37E10 (Dynamical systems involving maps of the circle). arXiv math.DS. Level 3: graduate.

**Definition.** Write the circle as ℝ/ℤ. Represent an orientation-preserving circle homeomorphism by an increasing map F on ℝ that induces it modulo integers and satisfies F(x+1) = F(x)+1. Its rotation number is the limit modulo integers of (Fⁿ(x)−x)/n, where Fⁿ means n successive applications.

**Problem.** Two such homeomorphisms f and g have equal rotation numbers if a continuous circle map h satisfies h∘f = g∘h. We require h to have a nondecreasing real lift H with H(x+1) = H(x)+1.

**How the definition helps.** Averaging displacement removes the bounded error from a coordinate change (our own). Choose lifts so H∘F = G∘H, hence H∘Fⁿ = Gⁿ∘H. Since H(x)−x is periodic and bounded, the two n-step displacements differ by a uniformly bounded amount. Dividing by n gives equality of the limits, whose existence and independence of x follow from Poincaré’s theorem.

**Wikipedia:** [Rotation number](https://en.wikipedia.org/wiki/Rotation_number). It says: “The rotation number is invariant under topological conjugacy, and even monotone topological semiconjugacy”

**Sources:** none listed. No primary source with a working link was found.

### Bounded variation excludes wandering intervals

**Remember:** Control the total changes of the derivative to control orbit distortion.

*Rules out counterexamples.* MSC 37E45 (Rotation numbers and vectors), 37E10. arXiv math.DS. Level 3: graduate.

**Definition.** A derivative has bounded variation if one bound controls the sums of its absolute changes over all ordered partitions of the circle. A wandering interval is a nonempty open interval whose forward images are pairwise disjoint.

**Problem.** Let an orientation-preserving circle diffeomorphism have irrational rotation number and a positive derivative of bounded variation. Then it has no wandering interval, and a homeomorphism conjugates it to the rotation by its rotation number.

**How the definition helps.** Bounded variation controls distortion across disjoint images (our own). The positive continuous derivative has a positive minimum, so its logarithm also has bounded variation. On an interval with disjoint successive images, the variation of this logarithm bounds the log distortion of the iterate. Denjoy’s theorem gives conjugacy and excludes the wandering intervals present in his C¹ counterexample.

**Wikipedia:** [Denjoy's theorem on rotation number](https://en.wikipedia.org/wiki/Denjoy%27s_theorem_on_rotation_number). It says: “a continuous function with bounded variation on the interval \[0,1).”

**Sources:**

- [Arnaud Denjoy, Sur les courbes définies par les équations différentielles à la surface du tore (1932)](https://www.numdam.org/item/JMPA_1932_9_11__333_0/)

### Normalized escape rates scale

**Remember:** One more iterate multiplies the escape rate by the degree.

*True by definition.* MSC 37F10 (Dynamics of complex polynomials, rational maps, entire and meromorphic functions; Fatou and Julia sets), 30D05. arXiv math.DS, math.CV. Level 3: graduate.

**Definition.** Let zₙ be the result of applying a polynomial P of degree d ≥ 2 to z exactly n times. Measure escape by the limit of log(max(1, \|zₙ\|))/dⁿ as n increases. This normalization accounts for the degree at each step.

**Problem.** The escape rate G exists for every complex polynomial of degree d ≥ 2 and satisfies G(P(z)) = dG(z). It vanishes exactly where the forward orbit is bounded.

**How the definition helps.** Shifting the index in the defining limit gives G(P(z)) = dG(z) (our own). Polynomial growth bounds \|log⁺\|P(z)\| − d log⁺\|z\|\| uniformly, where log⁺r = log max(1,r). The normalized increments thus have a summable geometric bound, giving convergence and a uniform bound on \|G(z) − log⁺\|z\|\|. Bounded orbits give zero directly, while unbounded orbits reach large points with positive G and hence have positive G by scaling.

**Wikipedia:** [Julia set](https://en.wikipedia.org/wiki/Julia_set). It says: “those points whose orbits under iterations of f remain bounded.”

**Paper or page:** [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3). It says: “In particular the function sequence \\\[ \\left(\\frac1{ \\deg p<sub>n</sub>\\cdot ...\\cdot \\deg p<sub>1</sub>}\\log ^+\\left\|p<sub>n</sub>\\circ ...\\circ p<sub>1</sub>\\right\|\\right)<sub>n=1</sub><sup>\\infty</sup> \\\]is uniformly convergent in $\\mathbb {C}$.”

**Sources:** none listed. No primary source with a working link was found.

### Shared randomness gives unique stationarity

**Remember:** Use the same random choice on two points and their laws move closer.

*True by definition.* MSC 37H12 (Random iteration), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** The Wasserstein distance between two probability laws is the infimum of the expected distance over joint samples having those laws. Random maps contract on average if applying the same map to any two points reduces their expected distance by a uniform factor below one.

**Problem.** Choose continuous maps independently from a fixed law on a compact parameter space, with continuous dependence on the parameter and point. On a compact metric state space, average contraction gives a unique stationary law, meaning one random step preserves it.

**How the definition helps.** Applying the same independent random map to both coordinates contracts expected distance in every joint sample (our own). The updated coordinates have the updated laws, so taking the infimum gives the same contraction factor for Wasserstein distance. The space of probability laws on the compact metric state space is complete, so Banach’s fixed-point theorem gives exactly one stationary law.

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

**Definition.** On a symplectic manifold of dimension 2n, complete integrability requires n smooth conserved functions whose differentials are independent on a dense open set. Every pair of these functions must have zero Poisson bracket. A common level is regular if the differentials are independent at every point of the level.

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

**Remember:** Scale the contact form to give its Hamiltonian field value one.

*True by definition.* MSC 37J55 (Contact systems), 53D10. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A contact form η on a (2n + 1)-manifold satisfies η ∧ (dη)ⁿ ≠ 0 everywhere. The contact Hamiltonian field X for H satisfies η(X) = −H and the Lie derivative of η along X equals aη for some smooth function a. Where H ≠ 0, set α = −η/H.

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

**Definition.** Fix a Følner sequence along which all finite translate-intersection densities of E exist, with E of positive density. A correspondence system has a probability-preserving action and a measurable set A whose finite translate intersections have those same measures. The translates of A must generate the measurable sets modulo null sets (our own).

**Problem.** For a countable amenable group, every such system on a standard probability space is isomorphic to the shift on the orbit closure of E’s indicator. The shift carries the measure determined by those frequencies, so the system is unique up to measurable isomorphism.

**How the definition helps.** The translate indicators give a symbolic name for each point, and their joint law is fixed by the intersection densities (our own). Generation makes this coding a measure isomorphism for standard probability spaces. The indicator of E has these frequencies along the chosen sequence, giving the same law on its orbit closure. Without generation, a product with an unrelated system would have identical frequencies.

**Paper or page:** [Uniqueness of a Furstenberg system](https://arxiv.org/abs/2005.07295v1). It says: “is unique up to a measurable isomorphism.”

**Sources:**

- [Vitaly Bergelson, Andreu Ferré Moragues, Uniqueness of a Furstenberg system, arXiv:2005.07295 (2020)](https://arxiv.org/abs/2005.07295v1)

### Banach proximality tests measure isomorphism of factor maps on point pairs

**Remember:** Two lifts of one point must stay together on average.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37A35. arXiv math.DS. Level 4: research.

**Definition.** A factor map π is a continuous equivariant surjection. It is Banach proximal if, for every pair x,x′ with π(x) = π(x′), the following holds. Along every left Følner sequence Fₙ, the average of d(gx,gx′) over g ∈ Fₙ tends to zero.

**Problem.** In our own reading, a factor map is topo-isomorphic if, for every invariant probability on X, π is a measure isomorphism after removing null sets. For compact metric actions of a countable amenable group, π is topo-isomorphic exactly when it is Banach proximal.

**How the definition helps.** The pair condition measures whether distinct lifts remain separated on average (our own). Theorem 8.1 equates this condition with measure isomorphism for every invariant probability.

**Paper or page:** [Mean equicontinuous factor maps](https://arxiv.org/abs/2411.15549v1), [Mean equicontinuous factor maps](https://arxiv.org/abs/2411.15549v1). It says: “We present that the notions of topo-isomorphy and Banach proximality coincide for all factor maps.”

**Sources:**

- [Till Hauser, Mean equicontinuous factor maps, arXiv:2411.15549 (2024)](https://arxiv.org/abs/2411.15549v1)

### Mean fiber diameter tests regularity of factor maps along orbits

**Remember:** Average fiber width along each orbit to detect singleton fibers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37A35. arXiv math.DS. Level 4: research.

**Definition.** For a continuous equivariant surjection π between compact metric systems, put D(y) = diam(π⁻¹(y)). The mean fiber diameter at y is the supremum, over left Følner sequences Fₙ, of the limsup of the averages of D(gy) on Fₙ. Each average uses normalized Haar measure on Fₙ.

**Problem.** A factor map is regular if almost every fiber is a singleton for each invariant probability on the target (our own). For compact metric actions of amenable locally compact σ-compact groups, regularity is equivalent to zero mean diameter at every fiber.

**How the definition helps.** A fiber has diameter zero exactly when it is a singleton (our own). The paper’s Theorem 5.2 converts the invariant-measure condition into the stated test along every orbit.

**Paper or page:** [Mean Diameter, Regularity and Diam-Mean Equicontinuity](https://arxiv.org/abs/2510.22484v1), [Mean Diameter, Regularity and Diam-Mean Equicontinuity](https://arxiv.org/abs/2510.22484v1). It says: “In the context of (not necessarily minimal) actions, we consider the mean diameter and use it to characterize regular factor maps.”

**Sources:**

- [Till Hauser, Mean Diameter, Regularity and Diam-Mean Equicontinuity, arXiv:2510.22484 (2025)](https://arxiv.org/abs/2510.22484v1)

### Orbit histories expose expansivity

**Remember:** Shift any differing coordinate into view.

*True by definition.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37B02. arXiv math.DS. Level 4: research.

**Definition.** For a set-valued self-map F of a metric space, a right-infinite orbit satisfies xᵢ₊₁ ∈ F(xᵢ) for every i ≥ 0. The orbit shift drops x₀. Orbit expansivity means some c &gt; 0 lets every two distinct orbits differ by more than c in some coordinate.

**Problem.** Suppose a set-valued map on a compact metric space has nonempty compact values and a closed graph. It is expansive on its right-infinite orbits exactly when their shift is positively expansive, which uses only forward iterates.

**How the definition helps.** Use the weighted sum of coordinate distances, bounded first by one, with weights ½, ¼, ⅛, … (our own). Shifting a separating coordinate to the front retains half its bounded distance. Conversely, a shifted sum greater than c requires some coordinate distance greater than c. The closed graph gives a compact orbit space, where compatible metrics are uniformly equivalent.

**Paper or page:** [Shadowing property for set-valued map and its inverse limit](https://arxiv.org/abs/2412.11221v2). It says: “Then F is expansive if and only if (Orbᵣ(X), σᵣF) is expansive.”

**Sources:** none listed. No primary source with a working link was found.

### Stabilizers vary continuously on the universal irreducible extension of a flow

**Remember:** The universal irreducible extension factors onto every irreducible extension over the original flow.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 22D05. arXiv math.GR, math.DS. Level 4: research.

**Definition.** A G-flow is a continuous action of a topological group G on a compact Hausdorff space. An extension of a flow is irreducible if no proper closed subset of it maps onto the original space. The universal irreducible extension is the largest one: every irreducible extension of the flow is a factor of it.

**Problem.** Let a locally compact group G act on a compact space X. The stabilizer map sends each point to the closed subgroup fixing it, with the Chabauty topology on closed subgroups. This map can fail to be continuous on X, but it is continuous on the universal irreducible extension of X.

**How the definition helps.** Universality selects one extension over X on which to state the stabilizer continuity theorem (our own). For reflection on \[−1,1\], the stabilizer jumps at zero. The cited theorem proves continuity on the universal irreducible extension for every locally compact group.

**Paper or page:** [Continuity of the stabilizer map and irreducible extensions](https://arxiv.org/abs/2302.03083v2). It says: “This map is not continuous in general. We prove that if one passes from X to the universal irreducible extension of X, the stabilizer map becomes continuous.”

**Sources:**

- [Adrien Le Boudec, Todor Tsankov, Continuity of the stabilizer map and irreducible extensions, arXiv:2302.03083v2 (2023)](https://arxiv.org/abs/2302.03083v2)

### The Furstenberg boundary turns C\*-simplicity into a freeness condition

**Remember:** A group is C\*-simple when it acts freely on its Furstenberg boundary.

*Makes the theorem clean to state or prove.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 46L55, 46L05. arXiv math.OA, math.DS. Level 4: research.

**Definition.** A Γ-boundary is a compact Hausdorff Γ-space where every orbit is dense and the weak-\* orbit closure of every probability measure contains a point mass. The Furstenberg boundary maps continuously and equivariantly onto every Γ-boundary and is itself a Γ-boundary. Topological freeness means that no nonidentity element fixes a nonempty open set pointwise.

**Problem.** A discrete group Γ is C\*-simple exactly when its action on the Furstenberg boundary is topologically free. C\*-simplicity means that the reduced group C\*-algebra has only the zero ideal and the whole algebra as closed two-sided ideals.

**How the definition helps.** The universal boundary selects one group action for the freeness test (our own). Kalantar and Kennedy’s boundary characterization identifies topological freeness of this action with C\*-simplicity.

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

**How the definition helps.** Mixing the cylinder with a one at zero with itself forces n ∈ P for every sufficiently large n (our own). Conversely, if P contains all gaps above N, place any two allowed words more than N apart and fill every remaining site with zeros. Every cross-word gap then belongs to P, proving mixing.

**Paper or page:** [On stronger forms of Devaney chaos](https://arxiv.org/abs/2505.15286v1). It says: “Σₚ mixing ⇔ P is co–finite.”

**Sources:**

- [Shital H. Joshi, Ekta Shah, On stronger forms of Devaney chaos, arXiv:2505.15286 (2025)](https://arxiv.org/abs/2505.15286v1)

### Independent coset patterns multiply

**Remember:** Each coset supplies its part of the pattern independently.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** Let H be a subgroup of G and Y a nonempty subshift of Aᴴ over a finite alphabet A. Its free extension consists of configurations x on G such that h ↦ x(gh) belongs to Y for every g ∈ G.

**Problem.** The number of allowed patterns on a finite window in a free extension is the product of the counts on the parts in each coset.

**How the definition helps.** Independence across cosets turns a global count into a product of local counts. Our own argument extends each allowed piece to a configuration on its coset, then combines the configurations. General extensions can impose relations between cosets, so this construction can fail for them. The cited lemma gives the product formula directly.

**Paper or page:** [Projectional entropy for actions of amenable groups](https://arxiv.org/abs/2403.01230v1). It says: “Let F₁,…,Fₙ ∈ ℱ(G) be subsets of different cosets.”

**Sources:**

- [Michał Prusik, Projectional entropy for actions of amenable groups, Lemma 3.7](https://arxiv.org/abs/2403.01230v1)

### Receptive lifts preserve least periods

**Remember:** If fixed ends accept every long repeat, one period can lift.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** An irreducible sofic shift consists of label sequences along paths in a finite strongly connected graph. A word synchronizes if any allowed left and right contexts for it can occur together. A periodic sequence is receptive if two fixed synchronizing words can bracket every sufficiently long repetition of its shortest period block.

**Problem.** Let w be a periodic point in an irreducible sofic shift Y. Receptivity of w means precisely that some factor code from an irreducible finite-type shift onto Y maps a point of equal least period to w. A factor code is a continuous surjection commuting with the shift.

**How the definition helps.** Receptivity excludes a parity obstruction to lifting the least period (our own). In the even shift, every synchronizing word contains a one because zero blocks alone leave the parity undetermined. Between two fixed synchronizing ends, the all-zero point therefore permits only one parity of repetition counts. The cited lifting theorem proves both directions.

**Paper or page:** [Factorizable embeddings and the period of an irreducible sofic shift](https://arxiv.org/abs/2508.02554v2). It says: “Then, w is receptive if and only if there is an irreducible SFT X, a factor code π : X → Y and a periodic point x ∈ X with least period p such that π(x) = w.”

**Sources:**

- [Brian Marcus, Tom Meyerovitch, Klaus Thomsen, and Chengyu Wu, Factorizable embeddings and the period of an irreducible sofic shift, Theorem 4.7](https://arxiv.org/abs/2508.02554v2)

### Trees force linear word complexity

**Remember:** One fewer edge than vertices means no change in the growth rate.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** For each allowed word w, including the empty word, give its extension graph separate left and right vertex sets. A left letter a requires aw allowed, a right letter b requires wb allowed, and an edge between them requires awb allowed. A shift is dendric if every extension graph is a tree.

**Problem.** In a dendric shift using d letters, there are exactly 1 + (d − 1)n words of length n.

**How the definition helps.** Each extension tree has one fewer edge than vertices (our own). Write p(n) for the length-n word count. Summing the tree identity over those words gives p(n+2) = 2p(n+1) − p(n), since each edge records a two-sided extension. Thus every increment equals p(1) − p(0) = d − 1.

**Paper or page:** [𝒮-adic characterization of minimal dendric shifts](https://arxiv.org/abs/2206.00333v4). It says: “then pₓ(n) = (pₓ(1) − 1)n + 1 for every n.”

**Sources:** none listed. No primary source with a working link was found.

### Maximum distance ensures set convergence

**Remember:** After m updates, all m sets satisfy the smaller distance bound.

*Makes the theorem clean to state or prove.* MSC 37B35 (Gradient-like behavior; isolated (locally maximal) invariant sets; attractors, repellers for topological dynamical systems), 39A30. arXiv math.DS. Level 4: research.

**Definition.** For two nonempty compact sets, their Hausdorff distance is the greatest distance from a point of either set to the other set. For tuples of m such sets, use the maximum of the m coordinate distances. Given a family of maps with m inputs, each update takes the union of their images of the latest m sets in order.

**Problem.** Take a nonempty finite family of maps from m copies of a nonempty complete metric space into that space, where m ≥ 1. Each map must shrink distances by a common factor 0 ≤ q &lt; 1 when inputs use the maximum distance. From any m nonempty compact starting sets, the updates converge in Hausdorff distance to the same compact set.

**How the definition helps.** Over m updates the entire tuple contracts by q (our own). The Hausdorff distance between two new unions is at most q times the largest input distance, so the tuple distance never increases. After m updates all original coordinates have been replaced, and every distance is at most q times the initial maximum. The m-step contraction has a unique fixed tuple by completeness, and the one-step update preserves it, so its coordinates agree.

**Paper or page:** [The Hutchinson-Barnsley theory for generalized iterated function systems by means of infinite iterated function systems](https://arxiv.org/abs/2204.00373v2). It says: “converges to A𝒮, the fractal attractor.”

**Sources:** none listed. No primary source with a working link was found.

### Axioms for abstract entropy make every entropy limit exist at once

**Remember:** Two time blocks together cost at most the sum of their costs.

*True by definition. Confidence: medium.* MSC 37B40 (Topological entropy), 06F05. arXiv math.DS. Level 4: research.

**Definition.** For an update λ on descriptions with an associative product, form the length-n block α·λα·…·λⁿ⁻¹α of a description α. Let aₙ be its size under h. A sequence is subadditive if aₙ₊ₘ ≤ aₙ + aₘ for all positive integers n and m.

**Problem.** For a description α, let aₙ be the size of the product of α, λα, …, λⁿ⁻¹α. Then aₙ/n converges to its infimum.

**How the definition helps.** The axioms make aₙ subadditive by definition, so Fekete's lemma gives the limit. The paper proves aₙ₊ₘ ≤ aₙ + aₘ in Lemma 2.3.7. Topological entropy and mean dimension are cases of the scheme, so the limit exists in each case without a new proof. In our own reading, the real work for a concrete entropy is checking the axioms.

**Paper or page:** [Abstract entropy and expansiveness](https://arxiv.org/abs/2203.10394v2). It says: “is subadditive, that is, aₙ₊ₘ ≤ aₙ + aₘ for all n,m ≥ 1.”

**Sources:**

- [Mauricio Achigar, Abstract entropy and expansiveness, arXiv:2203.10394 (2023)](https://arxiv.org/abs/2203.10394v2)

### Bowen entropy respects countable unions

**Remember:** Pay for each orbit ball separately and combine the covering budgets.

*Rules out counterexamples.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 4: research.

**Definition.** A length-n Bowen ball of radius r about x contains all y satisfying d(fⁱx,fⁱy) &lt; r for 0 ≤ i &lt; n. At radius r take the infimum of s ≥ 0 allowing, for every N and ε &gt; 0, a countable cover costing less than ε. Each ball must have length n ≥ N and costs exp(−sn). Bowen entropy is the limit of these infima as r decreases to zero.

**Problem.** For a homeomorphism of a compact metric space, the Bowen entropy of a countable union equals the supremum of its members’ Bowen entropies.

**How the definition helps.** At a fixed radius and minimum length, separate budgets let us combine covers (our own). For s above the supremum of the entropies, give set j budget ε/2ʲ for j ≥ 1, yielding a cover costing at most ε. Inclusion gives the reverse inequality. Fixed-length counts fail this test because the countable periodic points of the full binary shift realize every word.

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

**Definition.** Let R be the integer Laurent polynomial ring in d variables and M a finitely generated torsion R-module. For each irreducible p up to associates, let ℓₚ be the module length after inverting every element outside the ideal (p). The characteristic element is the finite product of p raised to ℓₚ over positive lengths, up to a signed monomial.

**Problem.** Let M be the quotient of Rⁿ by the image of a square matrix A with nonzero determinant. Multiplication by the variables gives commuting maps of the character group of M. Their topological entropy is the logarithmic Mahler measure of det A, the average of log\|det A\| over the unit torus.

**How the definition helps.** In our own explanation, the characteristic element packages the contributions from all irreducible factors into one polynomial. Diagonalizing A after allowing denominators coprime to p identifies the local length with the exponent of p in det A. The entropy addition theorem and the computation for prime quotients supply the dynamical part. Logarithmic Mahler measure turns the resulting product into the required sum.

**Wikipedia:** [Mahler measure](https://en.wikipedia.org/wiki/Mahler_measure). It says: “the entropy of the action is expressed as a sum of logarithmic Mahler measures over the generators of the principal associated prime ideals of the module.”

**Sources:**

- [Lind, Schmidt and Ward, Mahler measure and entropy for commuting automorphisms of compact groups](https://doi.org/10.1007/BF01231517)

### A safe symbol makes a shift of finite type an absolute retract

**Remember:** Overwrite every bad window with the safe symbol.

*True by definition. Confidence: medium.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A shift of finite type is a subshift defined by forbidding finitely many patterns. A safe symbol s is a symbol such that writing s at any set of sites of an allowed configuration gives an allowed configuration. A subshift Y is an absolute retract if every subshift X containing Y has a shift-respecting continuous map onto Y that fixes Y.

**Problem.** Over a countable group, a shift of finite type with a safe symbol is an absolute retract for the class of subshifts. In particular it has the map extension property.

**How the definition helps.** Use one finite defining window and list exactly the patterns on it that occur in Y (our own). Replace every site in a window showing an unlisted pattern with s. Each bad window becomes all s, while each originally listed window still occurs in Y by safety. This local equivariant rule fixes Y and takes all configurations into Y, giving the retraction and hence the map extension property.

**Paper or page:** [An embedding theorem for multidimensional subshifts](https://arxiv.org/abs/2312.05650v5). It says: “with a safe symbol is an absolute retract for the class of subshifts, and in particular has the map extension property.”

**Sources:**

- [Tom Meyerovitch, An embedding theorem for multidimensional subshifts, Ergodic Theory Dynam. Systems 45 (2025) 1870–1914, arXiv:2312.05650](https://arxiv.org/abs/2312.05650v5)

### The map extension property extends Krieger’s embedding theorem to abelian groups

**Remember:** Ask the target to accept extensions of partial maps.

*Makes the theorem clean to state or prove.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A subshift Y has the map extension property if the following holds for every subshift X satisfying a stabilizer condition. Each x in X must have a point y in Y fixed by every group element fixing x. Every continuous equivariant map from a closed invariant subset of such an X into Y must extend continuously and equivariantly over X.

**Problem.** A subshift over ℤ has the map extension property exactly when it is a topologically mixing shift of finite type. So the paper's embedding theorem over countable abelian groups, with targets that have this property, contains Krieger's embedding theorem.

**How the definition helps.** The map extension property is the target condition that lets the paper state one embedding theorem over every countable abelian group. Over ℤ it is the same as Krieger's condition, so the new theorem contains Krieger's. In our own explanation, the symmetry condition is needed because a periodic point can only map to a point with at least the same periods. The hard work of the paper is making the extended map injective.

**Paper or page:** [An embedding theorem for multidimensional subshifts](https://arxiv.org/abs/2312.05650v5). It says: “A ℤ-subshift has the map extension property if and only if it is a topologically mixing subshift of finite type.”

**Sources:**

- [Tom Meyerovitch, An embedding theorem for multidimensional subshifts, Ergodic Theory Dynam. Systems 45 (2025) 1870–1914, arXiv:2312.05650](https://arxiv.org/abs/2312.05650v5)

### Finite shadowing makes chain recurrent linear operators mixing

**Remember:** Mixing needs only finite orbit pieces, so finite shadowing is enough.

*Makes the theorem clean to state or prove.* MSC 37B65 (Approximate trajectories, pseudotrajectories, shadowing and related notions for topological dynamical systems), 37B20, 47A16. arXiv math.DS, math.FA. Level 4: research.

**Definition.** A continuous linear operator T has finite shadowing if every neighborhood U of zero admits a neighborhood V of zero with the following property. For every finite sequence with xᵢ₊₁ − Txᵢ ∈ V at each step, some y satisfies xᵢ − Tⁱy ∈ U at every index.

**Problem.** Let T be a continuous linear operator on a topological vector space, with finite shadowing. Then T is chain recurrent exactly when it is topologically mixing. Chain recurrent means every point lies on closed pseudo-orbits of every small error.

**How the definition helps.** Finite shadowing turns a chain between two open sets into a true orbit segment if its endpoints have enough room (our own). The cited equivalence supplies chains of every sufficiently large length from linearity and chain recurrence and also gives the converse.

**Paper or page:** [On Shadowing and Chain Recurrence in Linear Dynamics](https://arxiv.org/abs/2305.02714v2). It says: “Then the following assertions are equivalent: T is chain recurrent; T is transitive; T is ergodic; T is weakly mixing; T is mixing.”

**Sources:**

- [Nilson C. Bernardes, Alfredo Peris, On Shadowing and Chain Recurrence in Linear Dynamics, Adv. Math. 441 (2024) 109539, arXiv:2305.02714](https://arxiv.org/abs/2305.02714v2)

### Periodic shadowing makes periodic points dense in the chain recurrent set

**Remember:** Close a small-error loop, then shadow it with a periodic orbit.

*True by definition.* MSC 37B65 (Approximate trajectories, pseudotrajectories, shadowing and related notions for topological dynamical systems), 37B20, 47A16. arXiv math.DS, math.FA. Level 4: research.

**Definition.** Periodic shadowing means every zero neighborhood U admits a zero neighborhood V with the following property. Every periodic sequence with errors xᵢ₊₁−Txᵢ in V admits a periodic y with xᵢ−Tⁱy in U for every i ≥ 0. A chain recurrent point starts and ends a positive-length chain with every step error in V, for every zero neighborhood V.

**Problem.** Let T be a continuous linear operator on a topological vector space with periodic shadowing. Then the periodic points of T are dense in CR(T).

**How the definition helps.** Repeat a closed chain through x to obtain a periodic pseudo-orbit (our own). For any desired neighborhood of x, choose a symmetric zero neighborhood U small enough to stay inside it after translation by x. Use the corresponding error neighborhood V to build the chain, then shadow it by a periodic point lying in x + U.

**Paper or page:** [Generalized Hyperbolicity, Stability and Expansivity for Operators on Locally Convex Spaces](https://arxiv.org/abs/2403.02843v2). It says: “Per(T) is dense in CR(T).”

**Sources:**

- [Nilson C. Bernardes, Blas M. Caraballo, Udayan B. Darji, Vinícius V. Fávaro, Alfred Peris, Generalized Hyperbolicity, Stability and Expansivity for Operators on Locally Convex Spaces, J. Funct. Anal. 288 (2025) 110696, arXiv:2403.02843](https://arxiv.org/abs/2403.02843v2)

### Isomorphic equivariant vector fields have the same stable relative equilibria

**Remember:** Change the motion along symmetry orbits without changing how nearby orbits separate.

*Makes the theorem clean to state or prove.* MSC 37C81 (Equivariant dynamical systems), 37C75. arXiv math.DS. Level 4: research.

**Definition.** For a smooth G-action, equivariant vector fields X and Y are isomorphic if there is a smooth map ψ to the Lie algebra of G. It must satisfy ψ(gx) = Ad(g)ψ(x), and Y(x) − X(x) must equal the velocity at zero of t ↦ exp(tψ(x))x. A relative equilibrium is a point whose trajectory stays in its group orbit.

**Problem.** On a manifold with a proper symmetry action, isomorphic equivariant fields have the same stable relative equilibria. Stability here means that nearby trajectories stay near the symmetry orbit.

**How the definition helps.** Isomorphism lets one remove motion generated by symmetry before testing stability. The fields give the same motion after identifying points on each symmetry orbit. In our own explanation, the same motion on the orbit space gives the same stability there. The paper uses this transfer to prove a stability criterion for Hamiltonian systems.

**Paper or page:** [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4), [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4). It says: “and induce the same abstract flow on the orbit space M/G.”

**Sources:**

- [Stefan Klajbor-Goderich, Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields, arXiv:1707.02828 (2018)](https://arxiv.org/abs/1707.02828v4)

### The topological Markov property makes Gibbs and étale Gibbs measures the same

**Remember:** Agreement on a finite border makes a finite patch replacement local.

*Makes the theorem clean to state or prove.* MSC 37D35 (Thermodynamic formalism, variational principles, equilibrium states for dynamical systems), 37B10, 37B51. arXiv math.DS. Level 4: research.

**Definition.** A subshift has the topological Markov property if every finite set A of sites lies in a finite set B with the following property. Whenever configurations x and y agree on B ∖ A, using x on A and y elsewhere gives a configuration in the subshift.

**Problem.** For a subshift with the topological Markov property, a Borel probability measure is Gibbs exactly when it is étale Gibbs. This holds for interactions whose energy differences converge absolutely for configurations that differ at finitely many sites.

**How the definition helps.** The finite-border rule lets the local étale test cover every finite change. In our own explanation, the Gibbs test asks how probabilities change when a finite patch changes. The étale test uses only changes that extend continuously to nearby configurations. The topological Markov property makes every finite change locally realizable.

**Paper or page:** [The Lanford-Ruelle theorem for actions of sofic groups](https://arxiv.org/abs/2112.02334v4). It says: “then every Borel probability measure is Gibbs with respect f if and only if it is étale Gibbs with respect to f.”

**Sources:**

- [Sebastián Barbieri, Tom Meyerovitch, The Lanford-Ruelle theorem for actions of sofic groups, arXiv:2112.02334 (2022)](https://arxiv.org/abs/2112.02334v4)

### Forbidding cycles of whole disks makes filled-set components of box maps compact

**Remember:** Do not let a whole open disk cycle if trapped components must be compact.

*Rules out counterexamples. Confidence: medium.* MSC 37F10 (Dynamics of complex polynomials, rational maps, entire and meromorphic functions; Fatou and Julia sets), 37F25. arXiv math.DS, math.CV. Level 4: research.

**Definition.** A complex box map maps each domain disk properly and holomorphically onto one of finitely many disjoint range disks. A domain disk either equals its containing range disk or has compact closure inside it. The no permutation condition forbids cycles of whole range disks, and the filled set consists of points with every forward iterate defined.

**Problem.** For a complex box map satisfying the no permutation condition, every connected component of its filled set is compact.

**How the definition helps.** Without the condition, the identity on an open disk has that noncompact disk as its filled set (our own). With finitely many range disks, an itinerary must repeatedly enter a relatively compact domain disk or eventually cycle through whole disks. The condition rules out the cycle. Proper pullbacks then give nested itinerary pieces with each later closure eventually inside each earlier piece, so their intersection is compact (our own).

**Paper or page:** [The dynamics of complex box mappings](https://arxiv.org/abs/2105.08654v2). It says: “each component of K(F) is compact;”

**Sources:**

- [Trevor Clark, Kostiantyn Drach, Oleg Kozlovski, Sebastian van Strien, The dynamics of complex box mappings, arXiv:2105.08654 (2022)](https://arxiv.org/abs/2105.08654v2)

### Wedge powers give stochastic volume conservation

**Remember:** Preserve the two-form and you preserve every wedge power.

*True by definition.* MSC 37J06 (General theory of finite-dimensional Hamiltonian and Lagrangian systems, Hamiltonian and Lagrangian structures, symmetries, invariants). arXiv math.DS. Level 4: research.

**Definition.** On a symplectic manifold of dimension 2n with symplectic form ω, the symplectic volume form is ωⁿ/n!, the normalized n-fold wedge product of ω.

**Problem.** Smooth Hamiltonian flows driven by continuous semimartingale noise, taken in the Stratonovich sense, preserve phase-space volume with probability one wherever a smooth local flow exists.

**How the definition helps.** Defining volume from ω makes volume preservation follow directly from preservation of ω (our own). This avoids a separate calculation of the volume change in coordinates (our own). The Stratonovich rule obeys the ordinary chain rule, so the flow preserves ω because every driving field generates motion preserving ω (our own).

**Paper or page:** [Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems](https://arxiv.org/abs/2312.09769v3). It says: “the symplectic volume form ωⁿ ≔ ω ∧ ⋯ ∧ ω (n times) is preserved under the flow of”

**Sources:**

- [Oliver D. Street and So Takao, Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems (2024)](https://arxiv.org/abs/2312.09769v3)

### Diophantine frequencies bound the small divisors, so KAM tori survive

**Remember:** Badly approximable frequencies resist small perturbations.

*Rules out counterexamples. Confidence: medium.* MSC 37J40 (Perturbations of finite-dimensional Hamiltonian systems, normal forms, small divisors, KAM theory, Arnol'd diffusion), 37C55. arXiv math.DS, math.SG. Level 4: research.

**Definition.** A frequency vector ω in ℝᵈ is Diophantine if there are numbers γ, τ &gt; 0 with this property. For every nonzero integer vector k, \|ω · k\| is at least γ divided by ‖k‖ to the power τ. So ω is badly approximated by rational relations among its entries.

**Problem.** Near a regular torus of a real-analytic integrable Hamiltonian, assume the frequency map has invertible derivative and the torus has Diophantine frequency ω. Every sufficiently small analytic Hamiltonian perturbation on a fixed complex neighborhood retains an invariant torus with frequency ω.

**How the definition helps.** The Diophantine bound limits division by ω · k to polynomial growth in ‖k‖ (our own). It excludes a resonance ω · k = 0, where the corresponding Fourier equation can have no solution. The analytic KAM theorem uses this estimate in its iteration to obtain the perturbed torus.

**Wikipedia:** [Kolmogorov–Arnold–Moser theorem](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Arnold%E2%80%93Moser_theorem). It says: “Surviving tori meet the non-resonance condition, i.e., they have sufficiently irrational frequencies.”

**Sources:** none listed. No primary source with a working link was found.
