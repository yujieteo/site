### Repeating a prescribed block makes periodic sequences dense

**Remember:** Repeat the block and the shift returns to its start.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37C25. arXiv math.DS. Level 1: early undergraduate.

**Definition.** The one-sided full shift is the space of all infinite sequences over a nonempty finite alphabet, and the shift deletes the first letter. Two sequences are close when they share a long prefix, a long string of initial letters.

**Problem.** Periodic sequences are dense in the full shift. This means every finite prefix occurs at the start of a sequence that repeats forever.

**How the definition helps.** Closeness by prefixes means that approximating a sequence only requires copying finitely many letters (our own). Repeating a given nonempty prefix forever gives a periodic sequence with that prefix (our own). The cylinders, which fix a prefix, form a basis, so prefixes test all neighborhoods (our own).

**Paper or page:** [Improved Bounds For Some Asymptotic Formulas for Counting Words in Shift Spaces](https://arxiv.org/abs/2207.13898v5). It says: “All the cylinders form a countable clopen basis.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting the identity finds a fixed point on a closed interval

**Remember:** Subtract the diagonal to turn a fixed point into a zero.

*Rules out counterexamples.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 1: early undergraduate.

**Definition.** A closed bounded interval \[a, b\] includes its endpoints, so a self-map f satisfies f(a) ≥ a and f(b) ≤ b (our own). A fixed point of f is a point x with f(x) = x, that is, a zero of f(x) − x.

**Problem.** Every continuous map from a nonempty closed bounded interval to itself has a fixed point.

**How the definition helps.** The displacement f(x) − x is at least 0 at a and at most 0 at b, so the intermediate value theorem gives a zero (our own). On the open interval (0, 1), the map x ↦ (x + 1)/2 has no fixed point (our own).

**Paper or page:** [Brouwer's Fixed Point Theorem/One-Dimensional Version](https://proofwiki.org/wiki/Brouwer's_Fixed_Point_Theorem/One-Dimensional_Version). It says: “a continuous real function from a closed real interval to itself fixes some point of that interval.”

**Sources:** none listed. No primary source with a working link was found.

### Unfolding makes corner hits rational

**Remember:** Reflect the table, and the ball travels straight.

*True by definition.* MSC 37C83 (Dynamical systems with singularities (billiards, etc.)). arXiv math.DS. Level 1: early undergraduate.

**Definition.** Unfold the billiard in a unit square: at each bounce, reflect the table across the wall and continue the ray straight into the reflected square. The reflected squares tile the plane, and their corners are the integer lattice points.

**Problem.** A ray that starts at a corner of a square with irrational slope never reaches a corner again.

**How the definition helps.** A path from a corner reaches another corner exactly when the straight unfolded ray hits another lattice point (our own). A line through two lattice points has rational slope or is vertical, so an irrational slope never does (our own). Equal angles at each bounce make the reflected path straight (our own).

**Paper or page:** [Periodic orbits for square and rectangular billiards](https://arxiv.org/abs/2410.18316v2). It says: “If a billiard trajectory starts at a vertex with an irrational slope then it never terminates at a vertex on the square billiard.”

**Sources:**

- [Periodic orbits for square and rectangular billiards](https://arxiv.org/abs/2410.18316v2)

### A first differing symbol proves the full shift is sensitive

**Remember:** The first difference eventually reaches the front.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The one-sided full shift, over a finite alphabet with at least two symbols, deletes the first symbol of each infinite sequence. Distinct sequences have distance 2⁻ᵏ, where k is the position of their first difference, counted from zero. So each shift moves the first difference one place forward and doubles the distance, until it reaches one.

**Problem.** For every pair of distinct sequences, some nonnegative number of shifts makes their distance one. Every sequence has arbitrarily close neighbors that eventually reach this distance from it.

**How the definition helps.** After k shifts the first difference sits at position zero, so the distance is one (our own). Changing one symbol at a late position gives arbitrarily close neighbors, which works because the alphabet has a second symbol.

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “such that, for any x ≠ y in X, there is an n ∈ ℕ such that d(fⁿ(x), fⁿ(y)) ≥ ε₀.”

**Sources:** none listed. No primary source with a working link was found.

### All long graph walks give exactly the mixing shifts

**Remember:** Mixing needs a connecting walk at every late time.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics), 37B05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A graph shift consists of the two-sided walks on a directed graph, read as sequences of vertices. The graph is primitive if every ordered pair of vertices is joined by walks of every sufficiently large length.

**Problem.** Suppose every vertex of a finite directed graph occurs in a two-sided walk. Its shift is mixing, meaning every allowed block can follow any other at every sufficiently large separation, exactly when the graph is primitive.

**How the definition helps.** Placing one allowed block after another at separation n means finding a walk of about that length between them (our own). So mixing asks for walks of every large length between any two vertices, which is primitivity (our own). A directed three-cycle is strongly connected but returns only at multiples of three, so it is not mixing (our own).

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type). It says: “It consists of sequences whose transitions between consecutive letters are only those allowed by the graph.”

**Sources:** none listed. No primary source with a working link was found.

### Closed shift spaces stay closed under sliding block codes

**Remember:** Shift spaces are closed and shift-invariant, and codes keep both.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A shift space is a closed subset of the full shift, all two-sided sequences over a finite alphabet with the product topology, that the left shift maps onto itself. Equivalently, it is the set of sequences that avoid a given list of finite blocks.

**Problem.** A continuous map that commutes with the left shift is a sliding block code. The image of a shift space under such a code is again a shift space.

**How the definition helps.** The full shift is compact, so a shift space is compact and its continuous image is compact, hence closed. The image is unchanged by the shift because the code commutes with it.

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “An equivalent way to define a shift space is to take a set of forbidden patterns”

**Sources:** none listed. No primary source with a working link was found.

### Finite forbidden words make violations detectable in open sets

**Remember:** One forbidden block rules out a whole open cylinder.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A two-sided shift space is the set of all sequences over a finite alphabet in which no word from a given list of forbidden finite words appears anywhere. A cylinder, the set of sequences showing a given block at a given position, is open, so one forbidden word excludes whole open sets (our own).

**Problem.** A set of two-sided sequences is a shift space exactly when it is closed and invariant under shifts in both directions.

**How the definition helps.** Each sequence containing a forbidden word lies in a cylinder of such sequences, so the complement is open (our own). Conversely, a sequence outside a closed invariant set lies in a cylinder missing the set, and invariance forbids that block at every position (our own). Binary sequences with finitely many ones are invariant but not closed, so invariance alone is not enough (our own).

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “the set of all infinite patterns that do not contain any forbidden finite pattern of F.”

**Sources:** none listed. No primary source with a working link was found.

### Fixed blocks make the full shift mix

**Remember:** Far enough apart, two prescribed blocks never conflict.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The one-sided full shift is the space of all infinite sequences over a nonempty finite alphabet, and the shift deletes the first symbol. Its basic open sets, the cylinders, each prescribe a finite prefix, so each constrains only finitely many symbols.

**Problem.** The full shift is mixing. For any two nonempty open sets and each sufficiently large n, a sequence in the first enters the second after n steps.

**How the definition helps.** A point of the first cylinder that enters the second after n steps must show one prefix at position 0 and the other at position n (our own). For n longer than the first prefix the two do not overlap, so one sequence meets both (our own). Every nonempty open set contains a cylinder, which reduces the general case to this one (our own).

**Paper or page:** [Improved Bounds For Some Asymptotic Formulas for Counting Words in Shift Spaces](https://arxiv.org/abs/2207.13898v5). It says: “All the cylinders form a countable clopen basis.”

**Sources:** none listed. No primary source with a working link was found.

### Overlapping blocks turn finite rules into a directed graph

**Remember:** A longer symbol remembers the letters a local rule needs.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** Let a shift of finite type forbid a finite list of words, each of length at most m + 1, with m ≥ 1. The higher block code replaces each letter by the length-m block starting there, so each forbidden word fits inside two consecutive blocks.

**Problem.** The block code gives a reversible, continuous correspondence between the original shift and a shift whose rules test only adjacent pairs. The correspondence respects each shift step.

**How the definition helps.** Consecutive blocks must overlap in m − 1 letters and together contain no forbidden word, which is a test on adjacent pairs (our own). Every forbidden word fits in a window of m + 1 letters, so the pair tests catch them all (our own). Reading each block's first letter reverses the code, and both directions use finitely many letters per position (our own).

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type). It says: “Up to a local recoding of letters, every subshift of finite type can be described by such a directed graph.”

**Sources:** none listed. No primary source with a working link was found.

### Ternary addresses turn a Cantor map into the full shift

**Remember:** On the Cantor set, one step forgets the first ternary digit.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Each point of the middle-thirds Cantor set has a unique base-three expansion with digits 0 and 2 only, its ternary address. Let T(x) = 3x on the left third and 3x − 2 on the right third, so T shifts the expansion one place and drops the first digit (our own).

**Problem.** The ternary address matches T with the one-sided full shift, which deletes the first symbol of an infinite sequence. This correspondence is continuous and has a continuous inverse.

**How the definition helps.** Multiplying by three moves the first digit before the point, and the branch formula subtracts it (our own). The work lies in showing that the nested Cantor intervals give a continuous bijection with continuous inverse between points and addresses (our own).

**Paper or page:** [Cantor Space as Countably Infinite Product](https://proofwiki.org/wiki/Cantor_Space_as_Countably_Infinite_Product). It says: “Then A is homeomorphic to the Cantor space.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous maps give bijective cellular automata local inverses

**Remember:** Continuous plus shift-commuting means local, and inverses keep both.

*True by definition.* MSC 37B15 (Dynamical aspects of cellular automata), 68Q80. arXiv math.DS, nlin.CG. Level 2: later undergraduate.

**Definition.** A cellular automaton is a continuous map of the full shift, the two-sided sequences over a finite alphabet with the product topology, that commutes with the left shift. By the Curtis–Hedlund–Lyndon theorem, this is the same as applying one rule at each cell using a fixed finite window.

**Problem.** If a cellular automaton is a bijection, its inverse is also a cellular automaton.

**How the definition helps.** A continuous bijection of the compact Hausdorff full shift has a continuous inverse, and the inverse commutes with the shift because the forward map does. So the inverse is a cellular automaton, and Curtis–Hedlund–Lyndon gives its finite window. A forward window gives no direct inverse window.

**Wikipedia:** [Curtis–Hedlund–Lyndon theorem](https://en.wikipedia.org/wiki/Curtis%E2%80%93Hedlund%E2%80%93Lyndon_theorem). It says: “It follows by a compactness argument that the function mapping each configuration to its predecessor is itself continuous in the shift space, and it is clearly also shift-invariant.”

**Sources:**

- [G. A. Hedlund, Endomorphisms and automorphisms of the shift dynamical system, Math. Systems Theory 3 (1969) 320–375](https://doi.org/10.1007/BF01691062)

### Minimal invariant sets give recurrent points

**Remember:** A minimal set cannot contain a smaller set of late orbit limits.

*True by definition. Confidence: medium.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A point x is recurrent if it lies in its own ω-limit set, the set of limits of its iterates at times tending to infinity. A minimal set is a nonempty closed set that f maps into itself and that contains no smaller such set.

**Problem.** Every continuous map from a nonempty compact metric space to itself has a recurrent point. In fact, every point in a minimal set is recurrent.

**How the definition helps.** For x in a minimal set M, ω(x) is a nonempty closed subset of M that f maps into itself. Minimality makes ω(x) equal to M, so x lies in ω(x). A minimal set exists by Zorn's lemma and compactness.

**Wikipedia:** [Recurrent point](https://en.wikipedia.org/wiki/Recurrent_point). It says: “A point x ∈ X is said to be recurrent (for f) if x ∈ ω(x), i.e. if x belongs to its ω-limit set.”

**Sources:** none listed. No primary source with a working link was found.

### Nested tails give compact and nonempty ω-limit sets

**Remember:** Nested closed tails in a compact space share a common point.

*True by definition.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 37B02. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The ω-limit set of x is the intersection, over all times t, of the closures of the forward orbit tails after time t. Equivalently, it is the set of limits of orbit points at times tending to infinity, with integer times for maps and real times for flows.

**Problem.** In a compact metric space, the ω-limit set of any point is nonempty and compact. It is also connected for a continuous flow.

**How the definition helps.** In a compact space the closed tails are nested nonempty compact sets, so their intersection is nonempty and compact. For a flow each tail is connected, and a nested intersection of compact connected sets is connected. The equivalence with late limits takes a short diagonal argument (our own).

**Wikipedia:** [Limit set](https://en.wikipedia.org/wiki/Limit_set). It says: “Both sets are f-invariant, and if X is compact, they are compact and nonempty.”

**Sources:** none listed. No primary source with a working link was found.

### Shifting the sequence makes limit sets invariant

**Remember:** Shift every time by s, and they still tend to infinity.

*True by definition.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 34C05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a flow Φ on a metric space, the ω-limit set of x is the set of limits of Φₜₙ(x) along times tₙ tending to infinity. Adding a fixed time s to every tₙ keeps the times tending to infinity.

**Problem.** For a continuous flow defined for every real time, every time map takes the ω-limit set onto itself.

**How the definition helps.** If Φₜₙ(x) tends to y, then Φₛ(Φₜₙ(x)), the position at time tₙ + s, tends to Φₛ(y) by continuity and the flow law (our own). So Φₛ maps the ω-limit set into itself. Applying this with −s gives the reverse inclusion (our own).

**Wikipedia:** [Limit set](https://en.wikipedia.org/wiki/Limit_set). It says: “Both sets are f-invariant”

**Sources:** none listed. No primary source with a working link was found.

### Flow maps compose because time shifts preserve autonomous solutions

**Remember:** Restart from where you are, not from when you started.

*True by definition.* MSC 37C10 (Dynamics induced by flows and semiflows), 34A12. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** For an autonomous equation x′ = f(x), whose right side does not depend on time, the flow map Φₜ sends each state to the state reached after time t. Because time does not appear, a solution shifted in time is again a solution (our own).

**Problem.** If the equation has unique solutions for all real times, Φₜ ∘ Φₛ = Φₜ₊ₛ and Φ₋ₜ is the inverse of Φₜ.

**How the definition helps.** As functions of t, both Φₜ(Φₛ(x)) and Φₜ₊ₛ(x) solve the equation and start at Φₛ(x), so uniqueness makes them equal (our own). Setting s = −t gives the inverse, since Φ₀ leaves every state unchanged.

**nLab:** [flow of a vector field](https://ncatlab.org/nlab/show/flow+of+a+vector+field). It says: “This yields an action of the additive group (ℝ,+) of real numbers”

**Sources:** none listed. No primary source with a working link was found.

### A full return makes cycle stability a fixed point test

**Remember:** Check the slope after one full lap.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a cycle of least period n, the return map is the n-th iterate fⁿ, which fixes each cycle point (our own). The multiplier is the derivative of fⁿ at a cycle point, which by the chain rule is the product of the slopes of f along the cycle (our own).

**Problem.** If the multiplier has magnitude below 1 for a continuously differentiable interval map, nearby points approach the cycle. Above 1, each sufficiently close point outside the cycle eventually leaves a fixed neighborhood of it.

**How the definition helps.** Each cycle point is a fixed point of fⁿ with slope equal to the multiplier, so the fixed-point slope test applies to fⁿ (our own). The product of slopes is the same at every cycle point, and continuity of the intermediate steps carries attraction or repulsion to the whole cycle (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “that it is attractive if \|fₙ′\| &lt; 1,”

**Sources:** none listed. No primary source with a working link was found.

### A Lyapunov function that never rises keeps nearby points nearby

**Remember:** Low values of V cannot climb out of a low sublevel.

*True by definition. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** On a compact interval, a Lyapunov function for a fixed point p is a continuous V that is zero at p and positive elsewhere. It does not increase along the map near p, that is, V(f(x)) ≤ V(x), and its low sublevel sets trap orbits near p (our own).

**Problem.** A continuous interval self-map with such a Lyapunov function has a stable fixed point at p. Every sufficiently close starting point stays as close to p as prescribed.

**How the definition helps.** Outside each small neighborhood of p, compactness gives V a positive minimum (our own). So a low enough sublevel set lies in that neighborhood, where V does not increase (our own). An orbit starting there cannot raise V and stays there, and continuity puts every close enough point there (our own).

**Wikipedia:** [Lyapunov function](https://en.wikipedia.org/wiki/Lyapunov_function). It says: “If V is a Lyapunov function, then the equilibrium is Lyapunov stable.”

**Sources:** none listed. No primary source with a working link was found.

### A slope away from unit magnitude decides fixed point stability

**Remember:** Away from magnitude one, the slope alone decides attraction or repulsion.

*Rules out counterexamples.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A fixed point p of a differentiable real map is hyperbolic if the slope at p has absolute value different from 1. For a continuously differentiable map, each step near p then shrinks or stretches the distance to p by a factor bounded away from 1 (our own).

**Problem.** For a continuously differentiable interval map, nearby points approach a hyperbolic fixed point if its slope has magnitude below 1. Above 1, every sufficiently close point other than the fixed point eventually leaves a fixed neighborhood of it.

**How the definition helps.** By continuity of the derivative, nearby steps multiply the distance to p by a factor uniformly below or above 1 (our own). At slope exactly 1 higher terms decide: at 0, x ↦ x − x³ attracts but x ↦ x + x³ repels (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “a periodic point is hyperbolic if \|fₙ′\| ≠ 1,”

**Sources:** none listed. No primary source with a working link was found.

### A transverse fixed point survives small parameter changes

**Remember:** A crossing survives a small push, but a tangency can vanish.

*Rules out counterexamples. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37E05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A fixed point is transverse if the graph of f crosses the diagonal there with a different slope, that is, the displacement f(x) − x has nonzero derivative. A crossing, unlike a touching, cannot disappear under a small push (our own).

**Problem.** Suppose an interval map varies continuously differentiably with position and one real parameter. Near an interior transverse fixed point, exactly one nearby fixed point varies continuously differentiably with the parameter.

**How the definition helps.** The displacement has a simple zero, so the implicit function theorem supplies the branch (our own). The condition excludes the tangency in x ↦ x + λ + x², where two fixed points merge and disappear (our own).

**Wikipedia:** [Saddle-node bifurcation](https://en.wikipedia.org/wiki/Saddle-node_bifurcation). It says: “two fixed points (or equilibria) of a dynamical system collide and annihilate each other.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugacy preserves least periods by matching each step

**Remember:** Match one step and every return time matches.

*Rules out counterexamples.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37C15. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A topological conjugacy is a homeomorphism h with h ∘ f = g ∘ h, so h carries each step of f to a step of g. By induction it carries n steps of f to n steps of g.

**Problem.** A topological conjugacy gives a bijection between the points of each least period for f and g.

**How the definition helps.** Since h ∘ fⁿ = gⁿ ∘ h and h is injective, fⁿ(x) = x exactly when gⁿ(h(x)) = h(x) (our own). So x and h(x) have the same least period (our own). A step-matching map that is onto but not injective can collapse a two-cycle to a fixed point (our own).

**Wikipedia:** [Topological conjugacy](https://en.wikipedia.org/wiki/Topological_conjugacy). It says: “orbits of g are mapped to homeomorphic orbits of f through the conjugation.”

**Sources:** none listed. No primary source with a working link was found.

### Counting all returns separates points of each least period

**Remember:** A return at time n allows only periods that divide n.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics). arXiv math.DS. Level 2: later undergraduate.

**Definition.** The time-n return count is the number of points x with fⁿ(x) = x. A point's least period, its first return time, divides every time at which it returns.

**Problem.** If all return counts are finite, the time-n count sums the counts of points of each least period dividing n. Möbius inversion, the rule for reversing divisor sums, recovers each least-period count.

**How the definition helps.** Grouping the points that return at time n by their least period gives the divisor sum, since each least period divides n (our own). The division algorithm proves the divisibility, and Möbius inversion undoes the sum (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “is called the prime period or least period of the point x.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperbolic equilibria make the linearization a faithful picture of the flow

**Remember:** No eigenvalue on the imaginary axis, so the linear part decides.

*Rules out counterexamples. Confidence: medium.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37D05, 34C41. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** An equilibrium u\* of du/dt = f(u) is hyperbolic if the Jacobian matrix of f at u\* has no eigenvalue with real part zero. Then the space splits into directions that contract and directions that expand at first order, so the linear part dominates the higher terms (our own).

**Problem.** For a smooth vector field near a hyperbolic equilibrium, a local homeomorphism conjugates the flow to the flow of its Jacobian there. The homeomorphism preserves time while the trajectories stay in the conjugacy neighborhoods.

**How the definition helps.** With no neutral directions, the Hartman–Grobman theorem supplies a local time-preserving conjugacy to the linear flow. Neutral directions let higher terms decide: at zero, u′ = u³ repels and u′ = −u³ attracts, although both linearize to u′ = 0 (our own).

**Wikipedia:** [Hartman–Grobman theorem](https://en.wikipedia.org/wiki/Hartman%E2%80%93Grobman_theorem). It says: “hyperbolicity means that no eigenvalue of the linearization has real part equal to zero.”

**Sources:**

- [P. Hartman, A lemma in the theory of structural stability of differential equations, Proceedings of the American Mathematical Society 11 (1960) 610–620](https://doi.org/10.1090/S0002-9939-1960-0121542-7)

### Branch codes let the tent map inherit dense periodic points

**Remember:** A repeating branch code gives a point that returns.

*True by definition.* MSC 37E05 (Dynamical systems involving maps of the interval), 37B10. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Code each point of \[0, 1\] by the halves its orbit visits under the tent map T(x) = 2 min(x, 1 − x). Then applying T deletes the first symbol. The branches halve lengths, so each infinite code names a single point (our own).

**Problem.** Periodic points of the tent map are dense, and each nonempty open interval reaches any other at every sufficiently late time. Both statements also hold for the logistic map x ↦ 4x(1 − x).

**How the definition helps.** Repeating a finite code block gives a periodic point with that prefix, and placing two blocks far apart gives visits at all late times (our own). Prefixes pick out arbitrarily small intervals, so both statements hold for every open interval (our own). The stated conjugacy carries both conclusions to the logistic map (our own).

**Wikipedia:** [Tent map](https://en.wikipedia.org/wiki/Tent_map). It says: “The tent map with parameter μ = 2 and the logistic map with parameter r = 4 are topologically conjugate”

**Sources:** none listed. No primary source with a working link was found.

### Interval coverings turn a three-cycle into all least periods

**Remember:** Close a loop of coverings to find a periodic orbit.

*Makes the theorem clean to state or prove.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A closed interval I covers J when f(I) contains J. Every covering loop I₁ → I₂ → … → Iₖ → I₁ contains a point x of I₁ with fᵏ(x) = x whose orbit follows the loop.

**Problem.** A continuous interval map with a cycle of least period three has a cycle of every positive integer least period.

**How the definition helps.** The period-three points bound adjacent intervals I and J, where I covers J and J covers both I and J (our own). The loop that visits I once and then stays in J for n − 1 steps gives a point x with fⁿ(x) = x (our own). Visiting I only once forces least period exactly n, apart from small n and endpoint cases that are checked directly (our own).

**Paper or page:** [Forcing Minimal Interval Patterns as Interval Exchange Transformations](https://arxiv.org/abs/2408.09569v1). It says: “Given any f-loop of intervals α: I₁ → I₂ → … Iₖ₋₁ → Iₖ → I₁ of length k, there exists a periodic point x ∈ I₁”

**Sources:**

- [T. Y. Li and J. A. Yorke, Period Three Implies Chaos (1975)](https://doi.org/10.1080/00029890.1975.11994008)

### Logarithms turn repeated stretching into average slopes

**Remember:** Logarithms turn a product of step stretches into a sum.

*True by definition.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** The Lyapunov exponent of an orbit is its long-run average stretching per step: the limit, when it exists, of (1/n) ln \|(fⁿ)′(x₀)\|. By the chain rule, (fⁿ)′(x₀) is the product of the slopes f′(xᵢ) at the first n orbit points (our own).

**Problem.** For a differentiable interval map with nonzero slopes along an orbit, the exponent exists exactly when the average logarithmic slope magnitude converges. On an n-cycle it equals the logarithm of the absolute n-step derivative divided by n.

**How the definition helps.** Taking logarithms turns this product into a sum, so the exponent is the limit of the averages of ln \|f′(xᵢ)\| (our own). On an n-cycle the same n slopes repeat, so the averages converge to (1/n) ln \|(fⁿ)′(x₀)\| (our own).

**Wikipedia:** [Lyapunov exponent](https://en.wikipedia.org/wiki/Lyapunov_exponent). It says: “λ(x₀) = limₙ→∞ (1/n) ∑ᵢ₌₀ⁿ⁻¹ ln \|f′(xᵢ)\|”

**Sources:** none listed. No primary source with a working link was found.

### Separated branch itineraries identify the logistic Cantor set

**Remember:** Where the branches separate, each infinite address names one point.

*True by definition. Confidence: medium.* MSC 37E05 (Dynamical systems involving maps of the interval), 37B10. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For f(x) = rx(1 − x) with r &gt; 4, the survivors are the points whose orbits stay in \[0, 1\] forever. Two disjoint intervals map onto \[0, 1\], and a survivor's address records which of them it visits at each step.

**Problem.** The surviving points form a Cantor set, continuously matched in both directions with all infinite binary sequences. Applying f drops the first symbol.

**How the definition helps.** In the variable t with x = sin²(πt/2), each inverse branch multiplies t-distances by at most 1/√r (our own). So each address names one point, disjoint branches give one address per point, and f deletes the first symbol (our own). Shared prefixes mean nearby points, giving continuity both ways (our own).

**Wikipedia:** [Logistic map](https://en.wikipedia.org/wiki/Logistic_map). It says: “The set of initial conditions which remain within \[0,1\] form a Cantor set”

**Sources:** none listed. No primary source with a working link was found.

### Sharkovskii’s order classifies the possible sets of least periods

**Remember:** List odd multiples by powers of two, then count powers backward.

*Makes the theorem clean to state or prove.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Sharkovskii's order lists the positive integers as 3, 5, 7, …, then 2·3, 2·5, 2·7, …, then 4·3, 4·5, …, and so on through every power of two. The powers of two come last, in decreasing order: …, 8, 4, 2, 1.

**Problem.** For continuous maps from \[0, 1\] to itself, the possible sets of least periods are exactly the nonempty tails of Sharkovskii's order. A tail contains every number that follows any of its members.

**How the definition helps.** A tail is closed under taking later numbers, which is the shape of the forcing rule that period m forces every period after m (our own). The work is proving the forcing rules and building a map for every tail (our own).

**Paper or page:** [On Sets of Periodic Orbit Lengths in Finitely Presented Dynamical Systems](https://arxiv.org/abs/2510.10848v2). It says: “A set S ⊂ ℕ is the LPS of a continuous selfmap f on an interval I ⊂ ℝ if and only if S is a tail in the Sharkovskii ordering.”

**Sources:**

- [O. M. Sharkovskii, Coexistence of Cycles of a Continuous Map of the Line into Itself (1995 English translation of the 1964 paper)](https://doi.org/10.1142/s0218127495000934)

### Subtracting known returns exposes the logistic map’s two-cycle

**Remember:** Cancel the fixed-point factor before solving for a two-cycle.

*True by definition.* MSC 37E05 (Dynamical systems involving maps of the interval), 37C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For f(x) = rx(1 − x), the two-cycle points solve f(f(x)) = x but not f(x) = x. Dividing f(f(x)) − x by the fixed-point factor f(x) − x removes the fixed points and leaves the quadratic r²x² − r(r + 1)x + r + 1 (our own).

**Problem.** For 0 &lt; r ≤ 4, the logistic map has exactly one two-cycle when r &gt; 3 and none when r ≤ 3. The cycle attracts for 3 &lt; r &lt; 1 + √6 and repels for 1 + √6 &lt; r ≤ 4.

**How the definition helps.** The discriminant r²(r + 1)(r − 3) gives two nonfixed roots in \[0, 1\] for r &gt; 3, and at r = 3 the double root is fixed (our own). The sum and product of the roots give the two-step slope 4 + 2r − r² (our own). Its magnitude is below 1 exactly for 3 &lt; r &lt; 1 + √6 (our own).

**Wikipedia:** [Periodic point](https://en.wikipedia.org/wiki/Periodic_point). It says: “there are a pair of period-2 points which together form an attracting sequence”

**Sources:**

- [R. M. May, Simple mathematical models with very complicated dynamics (1976)](https://doi.org/10.1038/261459a0)

### Orbit averages give invariant probabilities

**Remember:** Shifting a long orbit average changes only its two ends.

*True by definition.* MSC 37A05 (Dynamical aspects of measure-preserving transformations). arXiv math.DS. Level 3: graduate.

**Definition.** For a continuous map F of a nonempty compact metric space, the n-th orbit average of x puts mass 1/n on each of the first n orbit points, counting repeats. Pushing it forward by F changes it only at its two ends, by mass 1/n each (our own). Orbit averages converge weakly when their integrals of every continuous function converge.

**Problem.** At least one subsequence of orbit averages converges weakly to a probability measure. Every such limit is invariant, meaning that applying F preserves its probabilities.

**How the definition helps.** Pushing an orbit average forward by F changes its integral of a bounded continuous function φ by at most 2 max\|φ\|/n, which tends to zero (our own). Continuity of F carries this to any weak limit, so the limit is invariant. Weak compactness of probability measures on the compact space gives a convergent subsequence.

**Wikipedia:** [Krylov–Bogolyubov theorem](https://en.wikipedia.org/wiki/Krylov%E2%80%93Bogolyubov_theorem). It says: “Then F admits an invariant Borel probability measure.”

**Sources:** none listed. No primary source with a working link was found.

### Cohomologous cocycles give conjugate extensions

**Remember:** Changing the zero of each group fiber changes no orbit structure.

*True by definition.* MSC 37A20 (Algebraic ergodic theory, cocycles, orbit equivalence, ergodic equivalence relations). arXiv math.DS. Level 3: graduate.

**Definition.** A cocycle over T adds a measurable increment a(x), in a compact abelian group, each time the base point x advances. Increments a and b are cohomologous if b(x) − a(x) = u(Tx) − u(x) almost everywhere for some measurable group-valued u, a change of origin in each group fiber.

**Problem.** A skew product advances the base point and adds its increment to a group coordinate. Over an invertible probability-preserving map, cohomologous increments give isomorphic skew products with uniform probability on the group.

**How the definition helps.** The map (x, g) ↦ (x, g + u(x)) carries one skew product to the other, by the defining equation (our own). Its inverse subtracts u(x), and translation preserves uniform probability on the group. Finding such a u for given increments is the hard part.

**Paper or page:** [Khintchine-type double recurrence in abelian groups](https://arxiv.org/abs/2307.04698v2). It says: “Then $\\mathbf{X}\\times <sub>\\sigma </sub> H\\cong \\mathbf{X}\\times <sub>\\tau </sub> H$.”

**Sources:** none listed. No primary source with a working link was found.

### An ergodic square rules out nonconstant eigenfunctions

**Remember:** An eigenfunction times its conjugate gives an invariant function on the square.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** Call an invertible probability-preserving map T weakly mixing if its square T × T is ergodic, meaning every invariant set has measure 0 or 1. An eigenfunction is a nonzero square-integrable f with f∘T = λf for a complex number λ. Then f(x) times the conjugate of f(y) is unchanged by T × T, since \|λ\| = 1 (our own).

**Problem.** If the square T × T is ergodic, then every eigenfunction of T is constant almost everywhere.

**How the definition helps.** Ergodicity of the square makes f(x) times the conjugate of f(y) constant almost everywhere (our own). Fixing y with f(y) ≠ 0 shows that f is constant. The converse is harder and can use the spectral theorem.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “Proposition. A dynamical system (X, μ, T) is weakly mixing if and only if (X², μ ⊗ μ, T × T) is also ergodic.”

**Sources:** none listed. No primary source with a working link was found.

### Ergodic measures are extreme points, so every compact system has one

**Remember:** Ergodic measures are the corners of the convex set of invariant measures.

*Makes the theorem clean to state or prove.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A05, 28D05. arXiv math.DS. Level 3: graduate.

**Definition.** An invariant probability measure is ergodic if every invariant set has measure 0 or 1. Equivalently, it is an extreme point, a corner, of the convex set of invariant probabilities: it is not a proper average of two different invariant measures.

**Problem.** Every continuous self-map of a nonempty compact metric space has an ergodic invariant Borel probability measure. Every invariant Borel probability measure is an average of ergodic ones.

**How the definition helps.** Since ergodic measures are the extreme points, convex geometry gives both results (our own). The invariant probabilities form a nonempty compact convex metrizable set, by Krylov–Bogolyubov and weak compactness. Krein–Milman gives an extreme point, and Choquet's theorem writes every invariant probability as an average of extreme points.

**Wikipedia:** [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “a measure is ergodic for T if and only if it is an extreme point of this convex set.”

**Sources:**

- [N. Krylov, N. Bogolyubov, La théorie générale de la mesure dans son application à l'étude des systèmes dynamiques de la mécanique non linéaire, Annals of Mathematics 38 (1937) 65–113](https://doi.org/10.2307/1968511)

### Ergodicity makes time averages equal space averages

**Remember:** An ergodic system cannot split into two invariant positive-measure pieces.

*Makes the theorem clean to state or prove.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** A measure-preserving map T of a probability space is ergodic if it cannot be split: every invariant measurable set has measure 0 or 1. Equivalently, every invariant integrable function is constant almost everywhere (our own).

**Problem.** For any integrable f on an ergodic probability system, its orbit averages converge almost everywhere to its integral.

**How the definition helps.** Birkhoff's theorem gives an almost-everywhere limit of the orbit averages that is invariant and has the same integral as f (our own). Ergodicity makes that limit constant, so it equals the integral of f.

**Wikipedia:** [Ergodic theory](https://en.wikipedia.org/wiki/Ergodic_theory), [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “In general the time average and space average may be different. But if the transformation is ergodic, and the measure is invariant, then the time average is equal to the space average almost everywhere.”

**Sources:**

- [Birkhoff, G. D. (1931). Proof of the ergodic theorem. Proceedings of the National Academy of Sciences 17, 656–660.](https://doi.org/10.1073/pnas.17.2.656)

### Independent coordinates make Bernoulli shifts mix

**Remember:** Far apart finite coordinate blocks use independent samples.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A50. arXiv math.DS. Level 3: graduate.

**Definition.** A Bernoulli shift moves each coordinate of a sequence one place, under the measure that makes all coordinates independent with the same distribution. So events that depend on disjoint sets of coordinates are exactly independent.

**Problem.** A Bernoulli shift is mixing of every finite order. The probability of a joint occurrence tends to the product of the separate probabilities as the time gaps grow.

**How the definition helps.** Approximate each event by one that depends on finitely many coordinates (our own). Shifted far apart, these use disjoint coordinates, so their joint probability factors, up to the approximation errors (our own). The source states ordinary mixing, and the extension to any fixed number of events is our own.

**Wikipedia:** [Ergodicity](https://en.wikipedia.org/wiki/Ergodicity). It says: “Bernoulli shifts are mixing”

**Sources:** none listed. No primary source with a working link was found.

### The ergodic-product definition makes weak mixing closed under products

**Remember:** Test the two factors against an ergodic system one at a time.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing). arXiv math.DS. Level 3: graduate.

**Definition.** Call a probability-preserving map T weakly mixing if it keeps every ergodic system ergodic: T × R, with the product measure, is ergodic for every ergodic probability system R.

**Problem.** The product of two weakly mixing probability systems is weakly mixing.

**How the definition helps.** Regrouping products lets the defining test apply twice (our own). For ergodic R, S × R is ergodic because S is weakly mixing, so T × (S × R) is ergodic because T is. Regrouping gives (T × S) × R, as required.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “Proposition. A dynamical system (X, μ, T) is weakly mixing if and only if, for any ergodic dynamical system (Y, ν, S), the system (X × Y, μ ⊗ ν, T × S) is also ergodic.”

**Sources:** none listed. No primary source with a working link was found.

### The function definition makes strong mixing an operator invariant

**Remember:** Mixing is a statement about inner products, which unitaries preserve.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** A probability-preserving map T is strongly mixing if μ(A ∩ T⁻ⁿB) tends to μ(A)μ(B) for all measurable sets A and B. With the Koopman operator U, which sends f to f∘T, this says ⟨Uⁿf, g⟩ tends to zero for all square-integrable f and g of mean zero.

**Problem.** If two Koopman operators are related by an inner-product-preserving linear bijection that intertwines them, their probability systems are either both strongly mixing or neither is.

**How the definition helps.** The criterion uses only inner products and the constant functions, so an intertwining unitary preserves it once it maps constants to constants (our own). Mixing makes the constants the only fixed functions, and intertwining maps fixed functions onto fixed functions. So the unitary maps constants to constants and mean-zero functions to mean-zero functions, and its inverse gives the converse.

**Wikipedia:** [Mixing (mathematics)](https://en.wikipedia.org/wiki/Mixing_%28mathematics%29). It says: “is strongly mixing if, for any function f ∈ L²(X, μ), the sequence (f \\circ T<sup>n</sup>)<sub>n \\ge 0</sub> converges weakly to \\int<sub>X</sub> f \\, d \\mu”

**Sources:** none listed. No primary source with a working link was found.

### The invariant-function definition makes ergodic eigenspaces one-dimensional

**Remember:** Ratios of matching eigenfunctions are invariant, so ergodicity makes them constant.

*True by definition.* MSC 37A25 (Ergodicity, mixing, rates of mixing), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** A probability-preserving map T is ergodic if every square-integrable function unchanged by T is constant almost everywhere, or equivalently if invariant sets have measure 0 or 1. An eigenfunction is a nonzero square-integrable complex function f with f∘T = λf almost everywhere.

**Problem.** For an ergodic map, every eigenfunction has constant absolute value almost everywhere. Each eigenvalue has a one-dimensional eigenspace, and the eigenvalues form a subgroup of the unit circle.

**How the definition helps.** Absolute values and quotients of eigenfunctions are invariant functions, hence constant (our own). Since T preserves the norm, \|λ\| = 1 and \|f\| is invariant, and if g has the same eigenvalue, then g/f is invariant. Products and conjugates of eigenfunctions give products and inverses of eigenvalues.

**Paper or page:** [Characterization of Ergodicity in terms of Koopman Operator](https://proofwiki.org/wiki/Characterization_of_Ergodicity_in_terms_of_Koopman_Operator). It says: “(5): For all f ∈ L² μ: if U<sub>T</sub> f = f for μ-a.e., then f is constant μ-a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Koopman averages converge to projections

**Remember:** Average the iterates of one operator and project onto its fixed functions.

*Makes the theorem clean to state or prove.* MSC 37A30 (Ergodic theorems, spectral theory, Markov operators). arXiv math.DS. Level 3: graduate.

**Definition.** The Koopman operator U sends a function f to f ∘ T, so the orbit average of f is the average of f, Uf, …, Uⁿ⁻¹f. When T preserves the measure, U preserves the mean-square norm.

**Problem.** Suppose T preserves a probability measure and f is square-integrable. The orbit averages of f converge in mean square to its orthogonal projection onto the fixed functions.

**How the definition helps.** The orbit average is the average of the first n powers of a norm-preserving operator (our own). Von Neumann's mean ergodic theorem says such averages converge to the projection onto the fixed functions, those with f ∘ T = f.

**nLab:** [Koopman operator](https://ncatlab.org/nlab/show/Koopman+operator). It says: “The Koopman operator Cφ of a morphism φ is defined by pre-composing with φ.”

**Paper or page:** [Mean Ergodic Theorem](https://proofwiki.org/wiki/Mean_Ergodic_Theorem). It says: “converges in the L²-norm”

**Sources:**

- [John von Neumann, Proof of the Quasi-Ergodic Hypothesis (1932)](https://doi.org/10.1073/pnas.18.1.70)

### Unique ergodicity forces uniform averages

**Remember:** Every limiting orbit measure must be the same one.

*Rules out counterexamples.* MSC 37A30 (Ergodic theorems, spectral theory, Markov operators), 37A25. arXiv math.DS. Level 3: graduate.

**Definition.** A continuous map of a compact metric space is uniquely ergodic if exactly one probability measure stays unchanged under the map. Then every weak limit of orbit-visit measures, being invariant, must be that one measure (our own).

**Problem.** For a uniquely ergodic continuous map of a compact metric space, orbit averages of continuous functions converge uniformly to their integrals against the invariant measure.

**How the definition helps.** If convergence were not uniform, longer and longer orbit segments would have averages missing the integral by a fixed amount (our own). A weak limit of their visit measures is invariant but gives a different integral, a contradiction. The identity on two points has two orbits with different averages, so uniqueness is needed (our own).

**nLab:** [ergodicity](https://ncatlab.org/nlab/show/ergodicity). It says: “There is a unique invariant probability measure”

**Paper or page:** [Equidistribution in 2-Nilpotent Polish Groups and triple restricted sumsets](https://arxiv.org/abs/2504.07865v2). It says: “is uniquely ergodic with unique invariant measure μₓ if and only if for every continuous function f ∈ C(X)”

**Sources:** none listed. No primary source with a working link was found.

### Defining generators by symbolic names makes the system a shift

**Remember:** Each point's itinerary is its unique name, so names become coordinates.

*True by definition. Confidence: medium.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** A finite measurable partition Q is a forward generator when, on a set of full measure, distinct points have distinct symbolic names. The name of x lists which pieces contain x, Tx, T²x, and so on, so the name of Tx is the name of x with its first symbol dropped.

**Problem.** Consider a probability-preserving map on a standard Borel space with a forward generator of k pieces. Up to null sets, it is isomorphic to the one-sided k-symbol shift carrying the law of the names.

**How the definition helps.** The naming map is one-to-one on a set of full measure and turns T into the shift, so it is the isomorphism once it has a measurable inverse (our own). The Lusin–Souslin theorem gives that inverse on an invariant Borel set of full measure, because a one-to-one Borel map has a Borel image and a Borel inverse.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “A partition Q is called a generator or generating partition if μ-almost every point x has a unique symbolic name.”

**Sources:** none listed. No primary source with a working link was found.

### Kolmogorov–Sinai entropy is an isomorphism invariant by its definition

**Remember:** Take the supremum over all partitions, and isomorphisms cannot change it.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** The Kolmogorov–Sinai entropy of a measure-preserving map T is the largest rate, over all finite measurable partitions Q, at which names of length n gain information. Exactly, it is the supremum over Q of limₙ H(Q ∨ T⁻¹Q ∨ … ∨ T⁻⁽ⁿ⁻¹⁾Q)/n, where H is Shannon entropy.

**Problem.** The Bernoulli shifts on two and on three equally likely symbols are not isomorphic, because their Kolmogorov–Sinai entropies are log 2 and log 3.

**How the definition helps.** An isomorphism carries each finite partition to one with the same name probabilities, so it preserves the supremum (our own). Sinai’s generator theorem lets us compute with the coordinate partition of each shift. There each length-n name has probability k⁻ⁿ, which gives entropy n log k and rate log k.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:**

- [Ya. G. Sinai, On the notion of entropy of a dynamical system, Doklady Akademii Nauk SSSR 124 (1959) 768–771; English version in Ya. G. Sinai, Selecta I, Springer (2010)](https://doi.org/10.1007/978-0-387-87870-6_1)
- [D. Ornstein, Bernoulli shifts with the same entropy are isomorphic, Advances in Mathematics 4 (1970) 337–352](https://doi.org/10.1016/0001-8708(70)90029-0)

### The partition supremum makes entropy decrease under factor maps

**Remember:** Every factor partition pulls back upstairs with the same entropy.

*True by definition.* MSC 37A35 (Entropy and other invariants, isomorphism, classification in ergodic theory), 28D20. arXiv math.DS. Level 3: graduate.

**Definition.** The entropy h(T) of a probability-preserving map T is the supremum, over all finite measurable partitions Q, of the rate h(T,Q) = limₙ Hₙ/n. Here Hₙ is the Shannon entropy of the first n labels of Q along an orbit.

**Problem.** Let T and S preserve probability measures. If a measure-preserving map π from T’s space to S’s satisfies π∘T = S∘π, then h(S) ≤ h(T).

**How the definition helps.** Each partition for S pulls back through π to one for T with the same rate, so each value in the supremum for S appears for T (our own). The rates agree because π preserves measure and π∘T = S∘π, so the two label sequences have the same law. A formula with one generating partition hides this, because a generator upstairs need not give one downstairs.

**Wikipedia:** [Measure-preserving dynamical system](https://en.wikipedia.org/wiki/Measure-preserving_dynamical_system). It says: “where the supremum is taken over all finite measurable partitions. A theorem of Yakov Sinai in 1959 shows that the supremum is actually obtained on partitions that are generators.”

**Sources:** none listed. No primary source with a working link was found.

### Natural extensions make the maps h∘g and g∘h conjugate

**Remember:** Keep every past, and swapping the factors costs nothing.

*True by definition. Confidence: medium.* MSC 37B02 (Dynamics in general topological spaces), 37C15, 54B35. arXiv math.DS. Level 3: graduate.

**Definition.** The natural extension of a continuous self-map f of a compact space X acts on backward orbits, the sequences (x₀, x₁, …) with f(xᵢ₊₁) = xᵢ, in the product topology. It applies f at the front and keeps the whole past: (x₀, x₁, …) ↦ (f(x₀), x₀, x₁, …).

**Problem.** Let g from X onto Y and h from Y onto X be continuous maps of compact spaces. The natural extensions of h∘g and g∘h are conjugate even when the composites themselves are not.

**How the definition helps.** On backward orbits, g and h induce maps that are inverse to each other and intertwine the two natural extensions (our own proof). Send (x₀, x₁, …) to (g(x₁), g(x₂), …), and send (y₀, y₁, …) to (h(y₀), h(y₁), …). A direct check shows that the two composites are the identity and that both maps commute with the natural extensions.

**Paper or page:** [On conjugacy between natural extensions of 1-dimensional maps](https://arxiv.org/abs/2110.11440v1). It says: “the natural extensions of f and F are conjugate,”

**Sources:**

- [J. Boroński, P. Minc, S. Štimac, On conjugacy between natural extensions of 1-dimensional maps, arXiv:2110.11440 (2021)](https://arxiv.org/abs/2110.11440v1)

### Devaney chaos needs no metric, because sensitivity follows from the rest

**Remember:** Transitivity plus dense periodic orbits already force sensitivity.

*True by definition. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37B20. arXiv math.DS. Level 3: graduate.

**Definition.** On an infinite metric space, a continuous map is Devaney chaotic when two conditions on open sets hold: it is transitive, and its periodic points are dense (sensitivity then follows). Transitive means that for any nonempty open sets U and V, some forward iterate of U meets V.

**Problem.** On infinite metric spaces, Devaney chaos is preserved by topological conjugacy, although sensitive dependence alone depends on the metric.

**How the definition helps.** Both conditions use only open sets and orbits, so a conjugacy preserves them (our own). Banks, Brooks, Cairns, Davis and Stacey showed in 1992 that they imply sensitivity on infinite metric spaces, so nothing metric is lost. On a non-compact space, a change of metric can destroy sensitivity alone (our own).

**Wikipedia:** [Chaos theory](https://en.wikipedia.org/wiki/Chaos_theory). It says: “In some cases, the last two properties above have been shown to actually imply sensitivity to initial conditions.”

**Sources:**

- [J. Banks, J. Brooks, G. Cairns, G. Davis, P. Stacey, On Devaney's definition of chaos, American Mathematical Monthly 99 (1992) 332–334](https://doi.org/10.1080/00029890.1992.11995856)

### On compact spaces, expansivity does not depend on the metric

**Remember:** One fixed gap eventually separates every pair of distinct points.

*Rules out counterexamples. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)). arXiv math.DS. Level 3: graduate.

**Definition.** A homeomorphism f of a metric space is expansive if one fixed distance ε₀ &gt; 0 separates every pair. Any two distinct points are moved at least ε₀ apart by some iterate fⁿ, forward or backward.

**Problem.** On a compact metric space, whether a homeomorphism is expansive does not depend on the choice of metric for the topology. So topologically conjugate homeomorphisms are both expansive or both not.

**How the definition helps.** Compactness makes two metrics with the same topology uniformly equivalent, so a gap for one metric gives a gap for the other (our own). Without compactness this fails: x ↦ 2x on ℝ is expansive for the usual metric, but not for the metric \|arctan x − arctan y\| (our own example). There, the points x and (1 + δ)x stay within δ/2 of each other under every iterate.

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “The space X is often assumed to be compact, since under that assumption expansivity is a topological property”

**Sources:** none listed. No primary source with a working link was found.

### A graph presentation makes shift entropy a matrix growth rate

**Remember:** Count graph walks with matrix powers, then take the logarithmic growth rate.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37B40. arXiv math.DS. Level 3: graduate.

**Definition.** The vertex shift of a finite directed graph, with at most one edge from each vertex to each vertex, is the set of bi-infinite walks, moved one step left. Its entropy is limₙ log Bₙ/n, where Bₙ counts the distinct length-n blocks, which are finite walks of the graph.

**Problem.** Suppose the graph has an edge and each vertex can reach every other vertex. Then its shift has entropy log λ, where λ is the largest positive eigenvalue of its adjacency matrix.

**How the definition helps.** When each vertex reaches every other, every finite walk extends both ways, so Bₙ₊₁ is the sum of the entries of Aⁿ (our own). Perron–Frobenius gives a positive vector v with Av = λv. Comparing v with the all-ones vector bounds that sum above and below by positive constants times λⁿ.

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy), [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type). It says: “Then h(σ)=log λ where λ is the largest positive eigenvalue of A.”

**Sources:** none listed. No primary source with a working link was found.

### Images of finite-type shifts make sofic shifts closed under coding

**Remember:** An image of an image of a finite-type shift is still sofic.

*True by definition.* MSC 37B10 (Symbolic dynamics), 68Q45. arXiv math.DS. Level 3: graduate.

**Definition.** A shift is sofic if a sliding block code maps a shift of finite type onto it. Here a shift of finite type is defined by a finite list of forbidden blocks, and a sliding block code is a continuous map that commutes with the shift.

**Problem.** The image of a sofic shift under a sliding block code is sofic.

**How the definition helps.** Sliding block codes compose, because a composite of continuous maps that commute with the shift is again one (our own). If X = ψ(Y) for a finite-type shift Y, then φ(X) = (φ∘ψ)(Y).

**Wikipedia:** [Shift space](https://en.wikipedia.org/wiki/Shift_space). It says: “Λ is a sofic shift if it is the image of a shift of finite type under sliding block code”

**Sources:**

- [B. Weiss, Subshifts of finite type and sofic systems, Monatsh. Math. 77 (1973) 462–474](https://doi.org/10.1007/bf01295322)

### Swapping graph halves conjugates shifts

**Remember:** Move each pair boundary one edge along a bipartite path.

*True by definition.* MSC 37B10 (Symbolic dynamics), 37C15. arXiv math.DS. Level 3: graduate.

**Definition.** Two nonnegative integer matrices, read as graphs, are elementary strong shift equivalent if they are RS and SR for rectangular nonnegative integer matrices R and S. Read R and S as edges from one vertex set to another and back, so RS and SR count the two-step paths that start on either side. Strong shift equivalence is a chain of such steps.

**Problem.** An edge shift advances one edge along a two-sided infinite path. Strong shift equivalent matrices give conjugate edge shifts, meaning a homeomorphism between their path spaces commutes with the shifts.

**How the definition helps.** An infinite path that alternates R-edges and S-edges can be cut into pairs in two ways, starting with an R-edge or one edge later (our own construction). The first cut gives a path in the graph of RS and the second a path in the graph of SR, and the change of cut is the conjugacy. Williams’s classification theorem gives the hard converse.

**Paper or page:** [Invertible and noninvertible symbolic dynamics and their C\*-algebras](https://arxiv.org/abs/2212.11188v2). It says: “are conjugate if and only if the matrices A and B are strong shift equivalent.”

**Sources:**

- [Robert F. Williams, Classification of Subshifts of Finite Type](https://doi.org/10.2307/1970908)

### Synchronizing words distinguish finite type

**Remember:** A synchronizing word lets any allowed past meet any allowed future.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 3: graduate.

**Definition.** An allowed word w of a shift space is synchronizing if whatever may precede w and whatever may follow w can occur together. That is, whenever uw and wv are allowed, so is uwv.

**Problem.** A shift space is of finite type, meaning that a finite list of forbidden blocks defines it, exactly when every sufficiently long allowed word is synchronizing.

**How the definition helps.** In finite type, a word longer than every forbidden block puts each short window of uwv inside uw or inside wv, so it synchronizes (our own). Conversely, if words of length M synchronize, allowed blocks of length M + 1 glue along overlaps of length M, so these blocks alone define the shift. In the even shift, a long odd block of zeros accepts a one on either side, but not on both.

**Paper or page:** [Computational complexity of problems for deterministic presentations of sofic shifts](https://arxiv.org/abs/2112.03484v2). It says: “A shift space X is an SFT if and only if there exists an integer M ≥ 0 such that every word w ∈ ℬ(X) with \|w\| ≥ M is intrinsically synchronizing for X.”

**Sources:** none listed. No primary source with a working link was found.

### Chain recurrence splits every compact flow into recurrent and gradient-like parts

**Remember:** Allow tiny jumps, and every flow becomes recurrent part plus downhill part.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B20 (Notions of recurrence and recurrent behavior in topological dynamical systems), 37B35. arXiv math.DS. Level 3: graduate.

**Definition.** A point x of a flow is chain recurrent if, for every ε &gt; 0, it returns to itself when jumps shorter than ε are allowed. That is, some points x = x₀, x₁, …, xₙ = x with n ≥ 1 have, for each i &lt; n, a time t ≥ 1 at which the orbit of xᵢ comes within ε of xᵢ₊₁.

**Problem.** Every continuous flow on a compact metric space admits a continuous complete Lyapunov function. It strictly decreases along orbits outside the chain-recurrent set and stays constant on each chain component (our own).

**How the definition helps.** A point outside the chain-recurrent set cannot come back even with small jumps, so a function can decrease along its orbit (our own). The chain-recurrent set is closed and invariant, which the set of ordinary recurrent points need not be, so the split is clean (our own). Conley built the function from the attractor–repeller pairs of the flow (our own).

**Wikipedia:** [Conley's fundamental theorem of dynamical systems](https://en.wikipedia.org/wiki/Conley%27s_fundamental_theorem_of_dynamical_systems). It says: “every flow of a dynamical system with compact phase portrait admits a decomposition into a chain-recurrent part and a gradient-like flow part.”

**Sources:**

- [C. Conley, Isolated Invariant Sets and the Morse Index, CBMS Regional Conference Series in Mathematics 38, American Mathematical Society (1978)](https://doi.org/10.1090/cbms/038)

### Unique shadowing yields topological stability

**Remember:** A perturbed orbit picks out exactly one nearby true orbit.

*Rules out counterexamples.* MSC 37B25 (Stability of topological dynamical systems), 37B65. arXiv math.DS. Level 3: graduate.

**Definition.** Shadowing means that every ε &gt; 0 has a δ &gt; 0 such that each bi-infinite sequence with d(f(xᵢ), xᵢ₊₁) &lt; δ has a true orbit y with d(fⁱ(y), xᵢ) &lt; ε for all integers i. Expansivity means that some c &gt; 0 lets an integer iterate move any two distinct points at least c apart. Together they make this shadow unique when 2ε &lt; c, since two shadows would stay within 2ε forever (our own).

**Problem.** An expansive homeomorphism with shadowing on a compact metric space is topologically stable. Each sufficiently nearby homeomorphism admits a continuous map close to the identity that intertwines it with the original system.

**How the definition helps.** For a nearby homeomorphism g, each g-orbit has step errors below δ for f, and we send its start to the start of its unique shadow (our own). Uniqueness makes this map commute with time, and compactness with uniqueness makes it continuous. For the identity on a Cantor set, nearby constant orbits can shadow the same point, so the shadow is not unique.

**Wikipedia:** [Expansive homeomorphism](https://en.wikipedia.org/wiki/Expansive_homeomorphism). It says: “such that for every pair of points x ≠ y in X there is an integer n such that”

**Paper or page:** [Pointed Gromov-Hausdorff Topological Stability for non-compact metric spaces](https://arxiv.org/abs/2204.06649v1). It says: “If f is 𝒞-expansive and has the 𝒞-shadowing property then it is 𝒞-topologically stable.”

**Sources:**

- [Peter Walters, On the pseudo orbit tracing property and its relationship to stability](https://doi.org/10.1007/BFb0101795)

### The Conley index detects nonempty isolated invariant sets

**Remember:** The empty invariant set has the index of a point.

*True by definition.* MSC 37B30 (Index theory for dynamical systems, Morse-Conley indices). arXiv math.DS. Level 3: graduate.

**Definition.** An index pair for an isolated invariant set S is a pair of compact sets L ⊆ N such that S is the set of complete orbits in the closure of N ∖ L and lies in its interior. L is the exit set: orbits from L stay in L while in N, and every orbit leaving N first meets L. The Conley index is the pointed homotopy type of N/L, the space N with L collapsed to a basepoint (added separately if L is empty).

**Problem.** If the Conley index of an isolated invariant set S is not the pointed homotopy type of a point, then S is nonempty.

**How the definition helps.** For empty S, taking N = L to be a single point gives an index pair, so the index of the empty set is a point (our own). Conley’s theorem that the index does not depend on the pair then makes a different index force S to be nonempty, without finding a trajectory.

**Wikipedia:** [Conley index theory](https://en.wikipedia.org/wiki/Conley_index_theory). It says: “If the index is nontrivial then the invariant set S is nonempty. This principle can be amplified to establish existence of fixed points and periodic orbits inside N.”

**Sources:**

- [C. Conley, Isolated invariant sets and the Morse index, CBMS Regional Conference Series in Mathematics 38 (1978)](https://doi.org/10.1090/cbms/038)

### Bundled orbit names scale entropy

**Remember:** Bundle k consecutive readings into each reading of the faster clock.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** For a finite open cover C, an n-step name picks one member of C for each of the first n points of an orbit. The entropy of C is limₙ log N(n)/n, where N(n) is the fewest names needed to cover every orbit, and topological entropy is the supremum over all finite open covers.

**Problem.** For a continuous map of a compact metric space, the entropy of its k-th iterate is k times its entropy for each positive integer k.

**How the definition helps.** One reading of fᵏ can record k readings of f, so with the cover of k-step names of C, the rate for fᵏ is k times the rate of C (our own). Taking suprema gives h(fᵏ) ≥ k h(f). The block cover refines C, so the rate of fᵏ with C is at most k times the rate of f with C, and h(fᵏ) ≤ k h(f).

**Paper or page:** [Unifying topological entropy notions for piecewise continuous maps on the interval](https://arxiv.org/abs/2404.10867v1). It says: “hₜₒₚ(fᵏ) = k hₜₒₚ(f) for every integer k ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Counting separated orbits gives isometries zero topological entropy

**Remember:** If distances never change, counting longer orbit segments adds nothing.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** For a continuous self-map f of a compact metric space, the Bowen–Dinaburg entropy counts orbit segments that can be told apart. N(n,ε) is the largest number of points whose orbits are pairwise more than ε apart at some time k &lt; n. The entropy is the limit as ε decreases to zero of limsupₙ log N(n,ε)/n.

**Problem.** Every isometry from a nonempty compact metric space to itself has zero topological entropy.

**How the definition helps.** An isometry keeps every distance, so the distance up to time n equals the original distance and N(n, ε) = N(1, ε) for every n (our own). Compactness makes N(1, ε) finite, so the growth rate is zero. Bowen’s theorem that this count agrees with the open-cover definition makes it the topological entropy.

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy). It says: “Since X is compact, N(n, ε) is finite and represents the number of distinguishable orbit segments of length n, assuming that we cannot distinguish points within ε of one another.”

**Sources:**

- [R. Bowen, Entropy for group endomorphisms and homogeneous spaces, Trans. Amer. Math. Soc. 153 (1971) 401–414](https://doi.org/10.1090/S0002-9947-1971-0274707-X)
- [R. L. Adler, A. G. Konheim, M. H. McAndrew, Topological entropy, Trans. Amer. Math. Soc. 114 (1965) 309–319](https://doi.org/10.1090/S0002-9947-1965-0175106-9)

### Defining topological entropy by open covers makes it a conjugacy invariant

**Remember:** Built from open sets only, entropy survives every homeomorphism.

*True by definition.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 3: graduate.

**Definition.** The topological entropy of Adler, Konheim and McAndrew for a map f of a compact space X uses only open covers. For a finite open cover C, H(C) is the logarithm of the fewest members of C that cover X. The entropy of f is the supremum over all C of limₙ H(C ∨ f⁻¹C ∨ … ∨ f⁻⁽ⁿ⁻¹⁾C)/n.

**Problem.** Topologically conjugate maps of compact spaces have the same topological entropy.

**How the definition helps.** A conjugating homeomorphism carries open covers to open covers and joins to joins, so it preserves every term and the supremum. The metric definition of Bowen and Dinaburg needs a separate proof that every compatible metric gives the same value (our own).

**Wikipedia:** [Topological entropy](https://en.wikipedia.org/wiki/Topological_entropy). It says: “Topological entropy is an invariant of topological dynamical systems, meaning that it is preserved by topological conjugacy.”

**Sources:**

- [R. L. Adler, A. G. Konheim, M. H. McAndrew, Topological entropy, Transactions of the American Mathematical Society 114 (1965) 309–319](https://doi.org/10.1090/S0002-9947-1965-0175106-9)

### Koopman products add exponents

**Remember:** Multiply the functions and add their growth exponents.

*True by definition.* MSC 37C10 (Dynamics induced by flows and semiflows), 34C14. arXiv math.DS. Level 3: graduate.

**Definition.** For a flow Φ and a chosen space of scalar functions, a Koopman eigenfunction with exponent λ is a nonzero function u in that space whose value grows by the factor exp(λt) along every trajectory. That is, u(Φₜ(x)) = exp(λt)u(x) for every state x and time t.

**Problem.** Suppose two such functions have exponents λ and μ. If their product belongs to the chosen space and is nonzero somewhere, it has exponent λ + μ.

**How the definition helps.** Along a trajectory, the product of the two functions picks up the factor exp(λt)exp(μt) = exp((λ + μ)t). A matrix acting on state vectors has no such product rule (our own).

**Paper or page:** [Participation Factors for Nonlinear Autonomous Dynamical Systems in the Koopman Operator Framework](https://arxiv.org/abs/2409.10105v1). It says: “Furthermore, there exist Koopman eigenvalues j₁λ₁ + ⋯ + jₙλₙ for all j₁,…,jₙ ∈ ℕ₀ such that j₁ + ⋯ + jₙ &gt; 1”

**Sources:** none listed. No primary source with a working link was found.

### Topological equivalence lets systems with periodic orbits be structurally stable

**Remember:** Match the orbits, not the clocks, and stable systems exist.

*Makes the theorem clean to state or prove.* MSC 37C15 (Topological and differentiable equivalence, conjugacy, moduli, classification of dynamical systems), 37C20, 37E35. arXiv math.DS. Level 3: graduate.

**Definition.** Two flows are topologically equivalent when a homeomorphism carries the oriented orbits of one onto those of the other, without matching times, so a cycle may change its period. A vector field is structurally stable if the flow of every C¹-small perturbation is topologically equivalent to its own flow.

**Problem.** Consider C¹ vector fields on the sphere, or on the closed disk with the field transverse to its boundary. Structural stability holds exactly when equilibria and cycles are finite in number, all are hyperbolic, and no saddle connections occur.

**How the definition helps.** Matching times would forbid any change in the period of a cycle, so no system with a cycle would be stable (our own). The Andronov–Pontryagin criterion then supplies the classification under these hypotheses.

**Wikipedia:** [Structural stability](https://en.wikipedia.org/wiki/Structural_stability). It says: “Without these restrictions, no continuous time system with fixed points or periodic orbits could have been structurally stable.”

**Sources:**

- [A. A. Andronov, L. S. Pontryagin, Coarse systems (1937), reprinted in V. I. Arnold (ed.), Geometric Methods in the Theory of Differential Equations, Springer (1988)](https://archive.org/details/geometricalmetho0000arno_o8o1)

### Lefschetz numbers make the zeta function rational

**Remember:** Trace series exponentiate into determinants of the homology maps.

*True by definition.* MSC 37C25 (Fixed points and periodic points of dynamical systems; fixed-point index theory; local dynamics), 37C30, 55M20. arXiv math.DS, math.AT. Level 3: graduate.

**Definition.** The Lefschetz number L(f) of a continuous self-map f of a finite polyhedron is the alternating sum of the traces of the maps Mᵢ that f induces on the rational homology groups Hᵢ. The Lefschetz zeta function is exp(∑ₙ≥₁ L(fⁿ)tⁿ/n). Since fⁿ induces Mᵢⁿ, it depends only on the matrices Mᵢ.

**Problem.** The Lefschetz zeta function is the product of the factors det(I − tMᵢ), with exponent −1 for even i and +1 for odd i. So it is rational and does not change when f is continuously deformed.

**How the definition helps.** The identity −log det(I − tM) = ∑ₙ≥₁ tr(Mⁿ)tⁿ/n turns each trace series into a determinant (our own). Homotopic maps induce the same maps Mᵢ, so a deformation does not change the product.

**Wikipedia:** [Lefschetz zeta function](https://en.wikipedia.org/wiki/Lefschetz_zeta_function). It says: “Thus it is a rational function. The polynomials occurring in the numerator and denominator are essentially the characteristic polynomials of the map induced by f on the various homology spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Defining transfer by integration makes invariant densities fixed points

**Remember:** Transfer gives the density after one step; invariant means unchanged.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37C40. arXiv math.DS. Level 3: graduate.

**Definition.** The transfer Lh of an integrable function h is the density of h·m after transport by T. It is defined by ∫ (Lh)g dm = ∫ h(g∘T) dm for every bounded measurable g, and is unique up to equality almost everywhere. Here T is a measurable map of a σ-finite measure space with measure m, and preimages under T of null sets are null.

**Problem.** A probability density h gives a T-invariant measure h·m exactly when Lh = h almost everywhere.

**How the definition helps.** Pushing h·m forward by T gives the measure whose integral of g is ∫ h(g∘T) dm, which is ∫ (Lh)g dm by definition (our own). So the pushforward is Lh·m, and it equals h·m exactly when Lh = h almost everywhere.

**Wikipedia:** [Transfer operator](https://en.wikipedia.org/wiki/Transfer_operator). It says: “The left-adjoint of the Perron–Frobenius operator is the Koopman operator or composition operator.”

**Sources:** none listed. No primary source with a working link was found.

### Edge shifts turn periodic-point counts into a rational zeta function

**Remember:** Closed walks give traces, and the trace series gives a determinant.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** The Artin–Mazur zeta function of T is exp(∑ₙ \|Fix(Tⁿ)\| zⁿ/n), where Fix(Tⁿ) is the finite set of points fixed by Tⁿ. For an edge shift, the left shift on two-sided walks in a finite directed graph, a point fixed by Tⁿ is a closed n-step walk repeated forever (our own).

**Problem.** For an edge shift with adjacency matrix A, the zeta function is 1/det(I − zA). In particular, it is rational.

**How the definition helps.** Closed walks of length n with a chosen start number tr(Aⁿ), because the entries of Aⁿ count walks between vertices. The formal identity ∑ₙ≥₁ tr(Aⁿ)zⁿ/n = −log det(I − zA) then gives the result by exponentiation. Every shift of finite type can be recoded as an edge shift, so its zeta function is rational too.

**Wikipedia:** [Subshift of finite type](https://en.wikipedia.org/wiki/Subshift_of_finite_type), [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “For subshifts of finite type, the zeta function is a rational function of z”

**Sources:**

- [M. Artin, B. Mazur, On periodic points, Ann. of Math. 81 (1965) 82–99](https://doi.org/10.2307/1970384)

### Normalized weights undo pullback

**Remember:** Averaging a value constant on each fiber returns that value.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.), 37D35. arXiv math.DS. Level 3: graduate.

**Definition.** A transfer operator for a map T sends a function f to a weighted sum of its values over the preimages of each point. It is normalized when the weights are nonnegative and add up to one at each point, so it averages f over each fiber.

**Problem.** A normalized transfer operator for a map T is a left inverse of composition with T: it sends f∘T back to f.

**How the definition helps.** Every preimage of y has the same value f(y) under f∘T, so the weighted sum is f(y) times the total weight, which is one (our own).

**Paper or page:** [Measurable multiresolution systems, endomorphisms, and representations of Cuntz relations](https://arxiv.org/abs/2304.14558v1). It says: “The adjoint operator Sσ\* is a transfer operator Sσ\*(g(f ∘ σ)) = f Sσ\*(g).”

**Sources:**

- [David Ruelle, Statistical mechanics of a one-dimensional lattice gas (1968)](https://doi.org/10.1007/BF01654281)

### Writing the Artin–Mazur zeta as a product over orbits gives integer coefficients

**Remember:** Each periodic orbit contributes a geometric series with coefficients zero and one.

*True by definition.* MSC 37C30 (Functional analytic techniques in dynamical systems; zeta functions, (Ruelle-Frobenius) transfer operators, etc.). arXiv math.DS. Level 3: graduate.

**Definition.** For a map f of a set with finitely many points fixed by each iterate fⁿ, the Artin–Mazur zeta function is usually exp(∑ₙ \|Fix(fⁿ)\|zⁿ/n). Instead, write it as the product over periodic orbits of 1/(1 − zᵈ), where d is the orbit length. Each factor is 1 + zᵈ + z²ᵈ + …, a series with coefficients zero and one (our own).

**Problem.** The Artin–Mazur zeta function is a power series with nonnegative integer coefficients.

**How the definition helps.** A product of such series has nonnegative integer coefficients, and only finitely many orbits have length at most N, so each coefficient is a finite sum (our own). Taking formal logarithms recovers the exponential definition, because an orbit of length d contributes d fixed points of fⁿ exactly when d divides n.

**Wikipedia:** [Artin–Mazur zeta function](https://en.wikipedia.org/wiki/Artin%E2%80%93Mazur_zeta_function). It says: “Note that the zeta function is defined only if the set of fixed points is finite for each n.”

**Sources:**

- [Michael Artin and Barry Mazur, On Periodic Points (1965)](https://doi.org/10.2307/1970384)

### Pseudo-orbits make computed orbits of chaotic maps meaningful

**Remember:** A computed orbit is a pseudo-orbit, and a true orbit shadows it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37C50 (Approximate trajectories (pseudotrajectories, shadowing, etc.) in smooth dynamics), 37B65. arXiv math.DS. Level 3: graduate.

**Definition.** A two-sided ε-pseudo-orbit of a self-map f of a metric space is what a computer produces with an error below ε at each step. Formally, it is a sequence (xᵢ) over all integers i with d(f(xᵢ), xᵢ₊₁) &lt; ε.

**Problem.** Let Λ be a compact hyperbolic invariant set of a diffeomorphism f. Some neighborhood U of Λ has the following shadowing property. For every δ &gt; 0, some ε &gt; 0 lets a true orbit δ-shadow each ε-pseudo-orbit in U at every time.

**How the definition helps.** A computed trajectory with step errors below ε is an ε-pseudo-orbit, so the shadowing lemma for hyperbolic sets applies to it. The lemma gives a true orbit that stays within δ at every time, possibly from a different starting point (our own).

**Wikipedia:** [Shadowing lemma](https://en.wikipedia.org/wiki/Shadowing_lemma). It says: “every pseudo-orbit (which one can think of as a numerically computed trajectory with rounding errors on every step) stays uniformly close to some true trajectory”

**Sources:**

- [S. M. Hammel, J. A. Yorke, C. Grebogi, Numerical orbits of chaotic processes represent true orbits, Bulletin of the American Mathematical Society 19 (1988) 465–469](https://doi.org/10.1090/S0273-0979-1988-15701-1)

### Positive invariant volume excludes sinks

**Remember:** A sink shrinks a neighborhood, but invariant volume cannot shrink.

*Rules out counterexamples.* MSC 37C70 (Attractors and repellers of smooth dynamical systems and their topological structure), 37J60. arXiv math.DS. Level 3: graduate.

**Definition.** An invariant volume is a measure with a smooth positive density that gives a set and its image under the flow the same volume. So the flow can never squeeze a region into a smaller one (our own).

**Problem.** A smooth flow on a positive-dimensional manifold with a smooth positive invariant volume has no asymptotically stable equilibrium. Such an equilibrium keeps all close enough starting points close for all future time and attracts them.

**How the definition helps.** Asymptotic stability eventually sends a compact neighborhood of positive volume into a ball of smaller volume, which invariance forbids (our own). A positive density gives the neighborhood positive volume and small balls small volume (our own). Any invariant measure would not do: a damped pendulum preserves the point mass at its stable equilibrium (our own).

**Paper or page:** [Invariant measures as obstructions to attractors in dynamical systems and their role in nonholonomic mechanics](https://arxiv.org/abs/2404.14156v1). It says: “Then there are no invariant measures in the class 𝒜.”

**Sources:**

- [Invariant measures as obstructions to attractors in dynamical systems and their role in nonholonomic mechanics](https://arxiv.org/abs/2404.14156v1)

### Transversality excludes fragile saddle connections in Morse–Smale flows

**Remember:** Stable and unstable manifolds must cross cleanly, never merely touch.

*Rules out counterexamples.* MSC 37D15 (Morse-Smale systems), 37C20, 37E35. arXiv math.DS. Level 3: graduate.

**Definition.** A smooth flow on a closed manifold is Morse–Smale if its nonwandering set is finitely many hyperbolic equilibria and periodic orbits, and their stable and unstable manifolds meet transversely. Transversely means that at every intersection point the two tangent spaces together span the tangent space of the manifold, which on a surface rules out an orbit joining two saddles.

**Problem.** Morse–Smale flows on closed manifolds are structurally stable. On closed orientable surfaces, Peixoto’s theorem says that structural stability is equivalent to the Morse–Smale condition.

**How the definition helps.** On a surface, an orbit joining two saddles lies in a one-dimensional stable and a one-dimensional unstable manifold, which share its tangent line and so do not span (our own). Such a connection breaks under a small perturbation, as when one tilts an upright torus. The Palis–Smale theorem gives structural stability, and Peixoto’s theorem gives the converse on closed orientable surfaces (our own).

**Wikipedia:** [Morse–Smale system](https://en.wikipedia.org/wiki/Morse%E2%80%93Smale_system), [Peixoto's theorem](https://en.wikipedia.org/wiki/Peixoto%27s_theorem). It says: “the stable and unstable manifolds of the saddle points do not intersect transversely, so the height function does not satisfy the Morse-Smale condition.”

**Sources:**

- [S. Smale, Morse inequalities for a dynamical system, Bulletin of the American Mathematical Society 66 (1960) 43–49](https://doi.org/10.1090/S0002-9904-1960-10386-2)

### Markov rectangles give finite-type coding

**Remember:** Compatible rectangles make consecutive steps enough to test a whole itinerary.

*Makes the theorem clean to state or prove.* MSC 37D20 (Uniformly hyperbolic systems (expanding, Anosov, Axiom A, etc.)), 37B10. arXiv math.DS. Level 3: graduate.

**Definition.** A Markov partition covers a hyperbolic set by finitely many small closed rectangles of local product form, each the closure of its interior relative to the set, with disjoint relative interiors. Whenever x ∈ int(R) and f(x) ∈ int(S), f maps the stable slice of R through x into that of S, and maps the unstable slice of R through x over the whole unstable slice of S. So whether a step from R to S is possible never depends on earlier steps.

**Problem.** Let a diffeomorphism have a compact hyperbolic set made of the orbits that stay in a given neighborhood for all time. A sufficiently fine Markov partition codes this set by the shift on two-sided sequences of rectangles with allowed consecutive pairs. The coding map is continuous and onto, and it turns the shift into one step of the diffeomorphism.

**How the definition helps.** The slice conditions let any itinerary with allowed consecutive pairs extend one step at a time, so allowed pairs are enough (our own). Compactness gives a point for each infinite itinerary, and expansivity makes it unique for small rectangles, which also gives continuity. Boundary points may have several itineraries, and Bowen’s coding theorem gives surjectivity.

**Wikipedia:** [Markov partition](https://en.wikipedia.org/wiki/Markov_partition). It says: “the movement of a trajectory from one open cover to the next is determined only by the most recent cover, and not the history of the system.”

**Paper or page:** [Geometric Markov partitions for pseudo-Anosov homeomorphisms with prescribed combinatorics](https://arxiv.org/abs/2409.03066v1). It says: “is a continuous, surjective, and finite-to-one map.”

**Sources:**

- [Rufus Bowen, Markov Partitions for Axiom A Diffeomorphisms (1970)](https://doi.org/10.2307/2373370)

### Rotation averages survive coordinate changes

**Remember:** A bounded coordinate change disappears when divided by the number of steps.

*True by definition.* MSC 37E10 (Dynamical systems involving maps of the circle). arXiv math.DS. Level 3: graduate.

**Definition.** The rotation number of an orientation-preserving circle homeomorphism is its average displacement per step: the limit of (Fⁿ(x) − x)/n modulo integers. Here the circle is ℝ/ℤ and F is an increasing lift to ℝ with F(x + 1) = F(x) + 1.

**Problem.** Two such homeomorphisms f and g have equal rotation numbers if a continuous circle map h satisfies h∘f = g∘h. We require h to have a nondecreasing real lift H with H(x+1) = H(x)+1.

**How the definition helps.** A coordinate change moves points by a bounded amount, which vanishes after dividing by n (our own). Choose lifts with H∘F = G∘H, so H∘Fⁿ = Gⁿ∘H, and note that H(x) − x is bounded because it is periodic. So the n-step displacements of F at x and of G at H(x) differ boundedly, and by Poincaré’s theorem both limits exist and do not depend on x.

**Wikipedia:** [Rotation number](https://en.wikipedia.org/wiki/Rotation_number). It says: “The rotation number is invariant under topological conjugacy, and even monotone topological semiconjugacy”

**Sources:** none listed. No primary source with a working link was found.

### Bounded variation excludes wandering intervals

**Remember:** Control the total changes of the derivative to control orbit distortion.

*Rules out counterexamples.* MSC 37E45 (Rotation numbers and vectors), 37E10. arXiv math.DS. Level 3: graduate.

**Definition.** A circle diffeomorphism f has derivative of bounded variation when the total change of f′ is bounded. Over every finite ordered partition of the circle, the sum of \|f′(xᵢ₊₁) − f′(xᵢ)\| stays below one bound. This caps how much the iterates can distort an interval whose forward images are disjoint (our own).

**Problem.** Let an orientation-preserving circle diffeomorphism have irrational rotation number and a positive derivative of bounded variation. Then it has no wandering interval, an open interval with pairwise disjoint forward images, and a homeomorphism conjugates it to the rotation by its rotation number.

**How the definition helps.** Since f′ is positive and continuous, log f′ also has bounded variation, and this variation bounds the log distortion of every iterate on an interval with disjoint images (our own). Denjoy’s theorem uses this bound to exclude wandering intervals and give the conjugacy. His C¹ counterexample, which has wandering intervals, shows that the bound is needed.

**Wikipedia:** [Denjoy's theorem on rotation number](https://en.wikipedia.org/wiki/Denjoy%27s_theorem_on_rotation_number). It says: “a continuous function with bounded variation on the interval \[0,1).”

**Sources:**

- [Arnaud Denjoy, Sur les courbes définies par les équations différentielles à la surface du tore (1932)](https://www.numdam.org/item/JMPA_1932_9_11__333_0/)

### Normalized escape rates scale

**Remember:** One more iterate multiplies the escape rate by the degree.

*True by definition.* MSC 37F10 (Dynamics of complex polynomials, rational maps, entire and meromorphic functions; Fatou and Julia sets), 30D05. arXiv math.DS, math.CV. Level 3: graduate.

**Definition.** The escape rate of z under a polynomial P of degree d ≥ 2 is G(z) = limₙ log⁺\|Pⁿ(z)\|/dⁿ, where log⁺r = log max(1, r) and Pⁿ is the n-th iterate. Dividing by dⁿ matches the growth of the degree, since \|P(w)\| is roughly \|w\|ᵈ for large w.

**Problem.** The escape rate G exists for every complex polynomial of degree d ≥ 2 and satisfies G(P(z)) = dG(z). It vanishes exactly where the forward orbit is bounded.

**How the definition helps.** Replacing z by P(z) shifts the index by one, so G(P(z)) = dG(z) (our own). The bound \|log⁺\|P(w)\| − d log⁺\|w\|\| ≤ C makes successive terms differ by at most C/dⁿ⁺¹, so the limit exists and stays within a bounded distance of log⁺\|z\|. A bounded orbit gives G = 0, and an unbounded orbit reaches points of large modulus where G &gt; 0, so G &gt; 0 by scaling.

**Wikipedia:** [Julia set](https://en.wikipedia.org/wiki/Julia_set). It says: “those points whose orbits under iterations of f remain bounded.”

**Paper or page:** [Non-autonomous iteration of polynomials in the complex plane](https://arxiv.org/abs/2309.13447v3). It says: “In particular the function sequence \\\[ \\left(\\frac1{ \\deg p<sub>n</sub>\\cdot ...\\cdot \\deg p<sub>1</sub>}\\log ^+\\left\|p<sub>n</sub>\\circ ...\\circ p<sub>1</sub>\\right\|\\right)<sub>n=1</sub><sup>\\infty</sup> \\\]is uniformly convergent in $\\mathbb {C}$.”

**Sources:** none listed. No primary source with a working link was found.

### Shared randomness gives unique stationarity

**Remember:** Move two points by the same random map; their laws draw together.

*True by definition.* MSC 37H12 (Random iteration), 37A30. arXiv math.DS. Level 3: graduate.

**Definition.** Random maps contract on average when moving two points by the same random map shrinks their expected distance by a uniform factor λ &lt; 1. On laws, the matching distance is the Wasserstein distance, the infimum of the expected distance over joint samples with the given laws.

**Problem.** Choose continuous maps independently from a fixed law on a compact parameter space, with continuous dependence on the parameter and point. On a compact metric state space, average contraction gives a unique stationary law, meaning one random step preserves it.

**How the definition helps.** Moving both points of a joint sample by one independent random map gives a joint sample of the new laws, with expected distance shrunk by λ (our own). Taking the infimum shows that one random step contracts Wasserstein distance by λ. Laws on a compact metric space form a complete space, so Banach’s fixed-point theorem gives exactly one stationary law.

**Paper or page:** [The Hutchinson-Barnsley theory for generalized iterated function systems by means of infinite iterated function systems](https://arxiv.org/abs/2204.00373v2). It says: “is contractive in the Monge-Kantorovich metric with Lip(Mℛ) ≤ λ &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### The symplectic definition makes Hamiltonian energy conservation immediate

**Remember:** Energy change is ω(X, X), and alternating forms kill it.

*True by definition.* MSC 37J06 (General theory of finite-dimensional Hamiltonian and Lagrangian systems, Hamiltonian and Lagrangian structures, symmetries, invariants), 70H05. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** The Hamiltonian vector field X of an energy H on a symplectic manifold is defined by dH(Y) = ω(X, Y) for every tangent vector Y. Here the symplectic form ω is a closed, nondegenerate pairing of tangent vectors that is alternating, so ω(X, X) = 0.

**Problem.** The energy H remains constant along every trajectory of its Hamiltonian vector field.

**How the definition helps.** Along a trajectory the derivative of H is dH(X) = ω(X, X), which is zero because ω is alternating. In Hamilton’s equations the same fact appears as the cancellation of two terms (our own).

**Wikipedia:** [Hamiltonian vector field](https://en.wikipedia.org/wiki/Hamiltonian_vector_field). It says: “The Hamiltonian H is constant along the integral curves, because ⟨dH, γ̇⟩ = ω(X<sub>H</sub>(γ), X<sub>H</sub>(γ)) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Signed products make canonical graphs Lagrangian

**Remember:** On the graph, the two forms cancel exactly when the map preserves them.

*True by definition.* MSC 37J11 (Symplectic and canonical mappings). arXiv math.SG. Level 3: graduate.

**Definition.** On the product M₁ × M₂, the signed form is the target form minus the source form, each pulled back by its coordinate projection. On the graph of φ it restricts to φ\*ω₂ − ω₁, which is zero exactly when φ preserves the forms. A Lagrangian submanifold has half the ambient dimension, and the form vanishes on its tangent spaces.

**Problem.** A diffeomorphism preserves the symplectic forms exactly when its graph is Lagrangian in the signed product.

**How the definition helps.** The signed form vanishes on the graph exactly when φ\*ω₂ = ω₁, that is, when φ preserves the forms (our own). The graph of a diffeomorphism has the dimension of M₁, half that of the product (our own). The plain sum would restrict to 2ω₁ on the graph of a map that preserves the forms, so it would fail (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “A diffeomorphism φ is a symplectomorphism if and only if Γφ is a Lagrangian submanifold of (M₁ × M₂, ω̃).”

**Sources:** none listed. No primary source with a working link was found.

### Commuting integrals give Lagrangian fibers

**Remember:** Zero brackets mean zero pairings, so common levels are Lagrangian.

*Rules out counterexamples.* MSC 37J35 (Completely integrable finite-dimensional Hamiltonian systems, integration methods, integrability tests), 53D12. arXiv math.DS, math.SG. Level 3: graduate.

**Definition.** On a symplectic manifold of dimension 2n, a completely integrable system is n smooth conserved functions with pairwise zero Poisson brackets whose differentials are independent on a dense open set. A zero bracket means that each function is constant along the Hamiltonian field of the other, and that the two fields pair to zero under the symplectic form (our own). A common level is regular if the differentials are independent at every point of it.

**Problem.** Every regular common level of these functions is Lagrangian, meaning it has dimension n and the symplectic form vanishes on its tangent spaces.

**How the definition helps.** On a regular level, the n Hamiltonian fields are tangent and independent, so by the regular level theorem they span its n-dimensional tangent spaces (our own). Their pairings under the symplectic form are the brackets, which are zero, so the form vanishes on the level (our own). Without commuting this fails: with zero Hamiltonian in four-dimensional phase space, the first position and its momentum are conserved, yet the form does not vanish on their common levels (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “The corresponding level set f⁻¹(c) is a Lagrangian submanifold of M.”

**Sources:** none listed. No primary source with a working link was found.

### Lax pairs preserve eigenvalues

**Remember:** A commutator changes the matrix basis, not its eigenvalues.

*True by definition.* MSC 37J35 (Completely integrable finite-dimensional Hamiltonian systems, integration methods, integrability tests), 70H06. arXiv math.DS, physics.class-ph. Level 3: graduate.

**Definition.** A matrix Lax representation writes a system as dL/dt = BL − LB, for matrices L and B whose entries depend on the state. This says that L changes only by an infinitesimal change of basis (our own).

**Problem.** In a finite-dimensional matrix Lax equation, the characteristic polynomial is constant along each solution.

**How the definition helps.** Solve dU/dt = BU with U(0) the identity; U stays invertible, and differentiating shows that U⁻¹LU is constant (our own). So L(t) is similar to L(0) and has the same characteristic polynomial (our own).

**Paper or page:** [Linearization, separability and Lax pairs representation of a₄⁽²⁾ Toda lattice](https://arxiv.org/abs/2501.02164v1). It says: “is given by: Ẋ = \[X(λ), Y(λ)\] by taking”

**Sources:**

- [Peter D. Lax, Integrals of nonlinear equations of evolution and solitary waves (1968)](https://doi.org/10.1002/cpa.3160210503)
- [Bruce Lionnel Lietap Ndi, Djagwa Dehainsala and Joseph Dongho, Linearization, separability and Lax pairs representation of a₄⁽²⁾ Toda lattice (2025)](https://arxiv.org/abs/2501.02164v1)

### Rescaled contact forms expose Reeb motion

**Remember:** Scale the contact form to give its Hamiltonian field value one.

*True by definition.* MSC 37J55 (Contact systems), 53D10. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A contact form η on a (2n + 1)-manifold satisfies η ∧ (dη)ⁿ ≠ 0 everywhere. The contact Hamiltonian field X of H satisfies η(X) = −H, and its flow only rescales η (our own): the Lie derivative of η along X is aη for a smooth function a.

**Problem.** Where H is nonzero, X is the Reeb field of −η/H. For a contact form α, its Reeb field R satisfies α(R) = 1 and dα(R,v) = 0 for every tangent vector v.

**How the definition helps.** Evaluating the rescaling identity on X shows that H changes along X by the same factor a, so the flow preserves α = −η/H (our own). Then α(X) = 1, and Cartan’s formula gives dα(X, ·) = (Lie derivative of α along X) − d(α(X)) = 0 (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “L(Xₕ)η = −ℛ(h)η”

**Sources:** none listed. No primary source with a working link was found.

### Allocations extend Kac's return-time lemma to actions of any countable group

**Remember:** Count the points sent to each target instead of return times.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37A15 (General groups of measure-preserving transformations and dynamical systems), 37A30. arXiv math.DS. Level 4: research.

**Definition.** An allocation into a set A chooses, measurably for almost every point x, a group element that moves x into A. The fiber of a point of A is the set of points moved to it, and its size replaces the return time of Kac’s lemma.

**Problem.** Let a countable group act on a probability space and preserve the measure. Suppose that almost every orbit meets a chosen set A. Then for any allocation into A, the fiber sizes integrate to one over A.

**How the definition helps.** Split the space by which group element the allocation uses; each piece moves into A without changing its measure (our own). Integrating the fiber size over A adds up the measures of all pieces, which is the measure of the whole space, one. No order on the group is needed, unlike for first return times.

**Paper or page:** [Kac's Lemma and countable generators for actions of countable groups](https://arxiv.org/abs/2410.18488v2), [Kac's Lemma and countable generators for actions of countable groups](https://arxiv.org/abs/2410.18488v2). It says: “Using this notion, we formulate and prove generalization of Kac's lemma for an action of a general countable group, and another generalization that applies to probability preserving equivalence relations.”

**Sources:**

- [Tom Meyerovitch, Benjamin Weiss, Kac's Lemma and countable generators for actions of countable groups, arXiv:2410.18488 (2025)](https://arxiv.org/abs/2410.18488v2)

### A generating set makes the Furstenberg correspondence system unique up to isomorphism

**Remember:** Exact frequencies plus a generating set pin the system down.

*Rules out counterexamples. Confidence: medium.* MSC 37A44 (Relations between ergodic theory and number theory), 37A15, 37A35. arXiv math.DS. Level 4: research.

**Definition.** Fix a Følner sequence along which E has positive density and every finite intersection of translates of E has a density. A correspondence system is a probability-preserving action with a set A whose finite intersections of translates have exactly those measures. The translates of A must also generate all measurable sets modulo null sets (our own).

**Problem.** For a countable amenable group, every such system on a standard probability space is isomorphic to the shift on the orbit closure of E’s indicator. The shift carries the measure determined by those frequencies, so the system is unique up to measurable isomorphism.

**How the definition helps.** The translates of A give each point a 0–1 name, and the intersection densities fix the law of these names (our own). Because the translates generate, this naming is an isomorphism onto the shift on the orbit closure of E’s indicator with that law, for standard probability spaces. Without generation, a product with an unrelated system has the same frequencies but is not isomorphic.

**Paper or page:** [Uniqueness of a Furstenberg system](https://arxiv.org/abs/2005.07295v1). It says: “is unique up to a measurable isomorphism.”

**Sources:**

- [Vitaly Bergelson, Andreu Ferré Moragues, Uniqueness of a Furstenberg system, arXiv:2005.07295 (2020)](https://arxiv.org/abs/2005.07295v1)

### Banach proximality tests measure isomorphism of factor maps on point pairs

**Remember:** Two lifts of one point must stay together on average.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37A35. arXiv math.DS. Level 4: research.

**Definition.** A factor map π, a continuous equivariant surjection, is Banach proximal if any two points with the same image stay together on average along their orbits. That is, for every such pair x, x′ and every left Følner sequence Fₙ, the average of d(gx, gx′) over g ∈ Fₙ tends to zero.

**Problem.** For compact metric actions of a countable amenable group, a factor map is topo-isomorphic exactly when it is Banach proximal. Topo-isomorphic means that π is a measure isomorphism modulo null sets for every invariant probability on X (our own reading).

**How the definition helps.** A measure isomorphism needs almost every fiber to be one point for every invariant probability, and lifts that stay together on average are the pointwise form of this (our own). The paper’s Theorem 8.1 proves the equivalence.

**Paper or page:** [Mean equicontinuous factor maps](https://arxiv.org/abs/2411.15549v1), [Mean equicontinuous factor maps](https://arxiv.org/abs/2411.15549v1). It says: “We present that the notions of topo-isomorphy and Banach proximality coincide for all factor maps.”

**Sources:**

- [Till Hauser, Mean equicontinuous factor maps, arXiv:2411.15549 (2024)](https://arxiv.org/abs/2411.15549v1)

### Mean fiber diameter tests regularity of factor maps along orbits

**Remember:** Average fiber width along each orbit to detect singleton fibers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37A35. arXiv math.DS. Level 4: research.

**Definition.** For a continuous equivariant surjection π between compact metric systems, the mean fiber diameter at y averages the diameters of the fibers π⁻¹(gy) along the orbit of y. Exactly, it is the supremum over left Følner sequences Fₙ of the limsup of the average of diam π⁻¹(gy) over g ∈ Fₙ, using normalized Haar measure.

**Problem.** A factor map is regular if almost every fiber is a singleton for each invariant probability on the target (our own). For compact metric actions of amenable locally compact σ-compact groups, regularity is equivalent to zero mean fiber diameter at every point y.

**How the definition helps.** A fiber has diameter zero exactly when it is a single point, so zero mean diameter says that fibers are points on average along each orbit (our own). The paper’s Theorem 5.2 turns this orbit test into the condition for every invariant probability.

**Paper or page:** [Mean Diameter, Regularity and Diam-Mean Equicontinuity](https://arxiv.org/abs/2510.22484v1), [Mean Diameter, Regularity and Diam-Mean Equicontinuity](https://arxiv.org/abs/2510.22484v1). It says: “In the context of (not necessarily minimal) actions, we consider the mean diameter and use it to characterize regular factor maps.”

**Sources:**

- [Till Hauser, Mean Diameter, Regularity and Diam-Mean Equicontinuity, arXiv:2510.22484 (2025)](https://arxiv.org/abs/2510.22484v1)

### Orbit histories expose expansivity

**Remember:** Shift any differing coordinate into view.

*True by definition.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 37B02. arXiv math.DS. Level 4: research.

**Definition.** For a set-valued self-map F of a metric space, a right-infinite orbit is a sequence with xᵢ₊₁ ∈ F(xᵢ) for every i ≥ 0, and the orbit shift drops x₀. F is orbit expansive if some c &gt; 0 lets any two distinct orbits differ by more than c in some coordinate.

**Problem.** Suppose a set-valued map on a compact metric space has nonempty compact values and a closed graph. It is expansive on its right-infinite orbits exactly when their shift is positively expansive, which uses only forward iterates.

**How the definition helps.** Use the metric ∑ᵢ 2⁻⁽ⁱ⁺¹⁾ min(1, d(xᵢ, yᵢ)) on orbits (our own). Shifting a separating coordinate to the front keeps half its distance, and a distance above c after shifting forces some coordinate distance above c. The closed graph makes the orbit space compact, so all compatible metrics give the same answer.

**Paper or page:** [Shadowing property for set-valued map and its inverse limit](https://arxiv.org/abs/2412.11221v2). It says: “Then F is expansive if and only if (Orbᵣ(X), σᵣF) is expansive.”

**Sources:** none listed. No primary source with a working link was found.

### Stabilizers vary continuously on the universal irreducible extension of a flow

**Remember:** Lift to the universal irreducible extension, and stabilizers stop jumping.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 22D05. arXiv math.GR, math.DS. Level 4: research.

**Definition.** An extension of a G-flow X, a continuous action of G on a compact Hausdorff space, is irreducible if no proper closed subset of it maps onto X. The universal irreducible extension is the largest one: it maps onto every irreducible extension of X, compatibly with the maps to X.

**Problem.** Let a locally compact group G act on a compact space X. The stabilizer map sends each point to the closed subgroup fixing it, with the Chabauty topology on closed subgroups. This map can fail to be continuous on X, but it is continuous on the universal irreducible extension of X.

**How the definition helps.** Universality picks one canonical extension over X on which the theorem can be stated (our own). For the reflection x ↦ −x on \[−1, 1\], the stabilizer jumps at zero, so continuity fails on X itself. The cited theorem proves continuity on the universal irreducible extension for every locally compact group.

**Paper or page:** [Continuity of the stabilizer map and irreducible extensions](https://arxiv.org/abs/2302.03083v2). It says: “This map is not continuous in general. We prove that if one passes from X to the universal irreducible extension of X, the stabilizer map becomes continuous.”

**Sources:**

- [Adrien Le Boudec, Todor Tsankov, Continuity of the stabilizer map and irreducible extensions, arXiv:2302.03083v2 (2023)](https://arxiv.org/abs/2302.03083v2)

### The Furstenberg boundary turns C\*-simplicity into a freeness condition

**Remember:** A group is C\*-simple when it acts freely on its Furstenberg boundary.

*Makes the theorem clean to state or prove.* MSC 37B05 (Dynamical systems involving transformations and group actions with special properties (minimality, distality, proximality, expansivity, etc.)), 46L55, 46L05. arXiv math.OA, math.DS. Level 4: research.

**Definition.** The Furstenberg boundary of a discrete group Γ is the universal Γ-boundary: a Γ-boundary that maps continuously and equivariantly onto every other. A Γ-boundary is a compact Hausdorff Γ-space with dense orbits in which the weak-\* orbit closure of every probability measure contains a point mass.

**Problem.** A discrete group Γ is C\*-simple exactly when its action on the Furstenberg boundary is topologically free, so that no nonidentity element fixes a nonempty open set pointwise. C\*-simple means that the reduced group C\*-algebra has no closed two-sided ideals except zero and itself.

**How the definition helps.** Universality picks one group action for the freeness test (our own). Kalantar and Kennedy’s boundary characterization identifies topological freeness of this action with C\*-simplicity.

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

**Definition.** For a subgroup H of G and a nonempty subshift Y of Aᴴ over a finite alphabet A, the free extension puts a copy of Y on each left coset gH, independently. Exactly, it consists of the configurations x on G such that h ↦ x(gh) belongs to Y for every g ∈ G.

**Problem.** In a free extension, the number of allowed patterns on a finite window is the product of the numbers of allowed patterns on its parts in each coset.

**How the definition helps.** The constraint acts only within each coset, so allowed patterns on the parts of a window in different cosets combine into one allowed pattern (our own). Each part extends to a configuration on its coset, and configurations on different cosets join freely. General extensions can link cosets, so their counts can be smaller.

**Paper or page:** [Projectional entropy for actions of amenable groups](https://arxiv.org/abs/2403.01230v1). It says: “Let F₁,…,Fₙ ∈ ℱ(G) be subsets of different cosets.”

**Sources:**

- [Michał Prusik, Projectional entropy for actions of amenable groups, Lemma 3.7](https://arxiv.org/abs/2403.01230v1)

### Receptive lifts preserve least periods

**Remember:** If fixed ends accept every long repeat, one period can lift.

*Rules out counterexamples.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** A periodic point w of an irreducible sofic shift is receptive if two fixed synchronizing words can bracket every long enough repetition of its least period block. A word synchronizes when any allowed left and right contexts of it can occur together.

**Problem.** Let w be a periodic point in an irreducible sofic shift Y, the label sequences of paths in a finite strongly connected graph. Then w is receptive exactly when some factor code, a continuous shift-commuting surjection, from an irreducible finite-type shift onto Y maps a point of the same least period to w.

**How the definition helps.** Receptivity excludes a parity obstruction to lifting the least period (our own). In the even shift every synchronizing word contains a one, so between two fixed synchronizing words a block of zeros has a fixed parity, and the all-zero point is not receptive. The cited lifting theorem proves both directions.

**Paper or page:** [Factorizable embeddings and the period of an irreducible sofic shift](https://arxiv.org/abs/2508.02554v2). It says: “Then, w is receptive if and only if there is an irreducible SFT X, a factor code π : X → Y and a periodic point x ∈ X with least period p such that π(x) = w.”

**Sources:**

- [Brian Marcus, Tom Meyerovitch, Klaus Thomsen, and Chengyu Wu, Factorizable embeddings and the period of an irreducible sofic shift, Theorem 4.7](https://arxiv.org/abs/2508.02554v2)

### Trees force linear word complexity

**Remember:** One fewer edge than vertices means no change in the growth rate.

*True by definition.* MSC 37B10 (Symbolic dynamics). arXiv math.DS. Level 4: research.

**Definition.** The extension graph of an allowed word w joins a left letter a, with aw allowed, to a right letter b, with wb allowed, whenever awb is allowed. A shift is dendric if the extension graph of every allowed word, including the empty word, is a tree, so it has one fewer edge than vertices (our own).

**Problem.** In a dendric shift using d letters, there are exactly 1 + (d − 1)n words of length n.

**How the definition helps.** Write p(n) for the number of words of length n. Summing the tree identity over these words gives p(n + 2) = 2p(n + 1) − p(n), since edges count two-sided extensions (our own). So every increment equals p(1) − p(0) = d − 1.

**Paper or page:** [𝒮-adic characterization of minimal dendric shifts](https://arxiv.org/abs/2206.00333v4). It says: “then pₓ(n) = (pₓ(1) − 1)n + 1 for every n.”

**Sources:** none listed. No primary source with a working link was found.

### Maximum distance ensures set convergence

**Remember:** Every m updates replace the whole tuple, shrinking all distances by q.

*Makes the theorem clean to state or prove.* MSC 37B35 (Gradient-like behavior; isolated (locally maximal) invariant sets; attractors, repellers for topological dynamical systems), 39A30. arXiv math.DS. Level 4: research.

**Definition.** For a family of maps with m inputs, each update forms the union of their images of the latest m compact sets. Tuples of m sets are compared by the maximum of their m Hausdorff distances. The Hausdorff distance is the greatest distance from a point of either set to the other set.

**Problem.** Take a nonempty finite family of maps from m copies of a nonempty complete metric space into that space, where m ≥ 1. Each map must shrink distances by a common factor 0 ≤ q &lt; 1 when inputs use the maximum distance. From any m nonempty compact starting sets, the updates converge in Hausdorff distance to the same compact set.

**How the definition helps.** Each update is at most q times the tuple distance, so after m updates every coordinate has been replaced and the tuple distance has shrunk by q (our own). So the m-step map contracts the complete space of tuples of nonempty compact sets and has a unique fixed tuple. The one-step update preserves this fixed tuple, so its coordinates agree, and every start converges to that one set.

**Paper or page:** [The Hutchinson-Barnsley theory for generalized iterated function systems by means of infinite iterated function systems](https://arxiv.org/abs/2204.00373v2). It says: “converges to A𝒮, the fractal attractor.”

**Sources:** none listed. No primary source with a working link was found.

### Axioms for abstract entropy make every entropy limit exist at once

**Remember:** Two time blocks together cost at most the sum of their costs.

*True by definition. Confidence: medium.* MSC 37B40 (Topological entropy), 06F05. arXiv math.DS. Level 4: research.

**Definition.** The abstract scheme takes descriptions with an associative product, an update λ and a size h, under axioms that make block sizes subadditive. That is, aₙ = h(α·λα·…·λⁿ⁻¹α) satisfies aₙ₊ₘ ≤ aₙ + aₘ for all positive integers n and m.

**Problem.** For a description α, let aₙ be the size of the product of α, λα, …, λⁿ⁻¹α. Then aₙ/n converges to its infimum.

**How the definition helps.** Fekete’s lemma says that a subadditive sequence has aₙ/n converging to its infimum, and the paper derives subadditivity from the axioms in Lemma 2.3.7. Topological entropy and mean dimension fit the scheme, so each limit exists without a new proof. The work for a concrete entropy moves to checking the axioms (our own).

**Paper or page:** [Abstract entropy and expansiveness](https://arxiv.org/abs/2203.10394v2). It says: “is subadditive, that is, aₙ₊ₘ ≤ aₙ + aₘ for all n,m ≥ 1.”

**Sources:**

- [Mauricio Achigar, Abstract entropy and expansiveness, arXiv:2203.10394 (2023)](https://arxiv.org/abs/2203.10394v2)

### Bowen entropy respects countable unions

**Remember:** Pay for each orbit ball separately and combine the covering budgets.

*Rules out counterexamples.* MSC 37B40 (Topological entropy). arXiv math.DS. Level 4: research.

**Definition.** Bowen entropy is a dimension built from Bowen balls: the ball of length n and radius r about x contains the y with d(fⁱx, fⁱy) &lt; r for 0 ≤ i &lt; n, and costs exp(−sn). At radius r, take the infimum of the s for which, for every N and ε &gt; 0, some countable cover of the set by balls of length at least N costs less than ε in total. Bowen entropy is the limit of these infima as r decreases to zero.

**Problem.** For a homeomorphism of a compact metric space, the Bowen entropy of a countable union equals the supremum of its members’ Bowen entropies.

**How the definition helps.** For s above all the members’ entropies and fixed r and N, cover the j-th member at total cost below ε/2ʲ, so the joined cover costs below ε (our own). Monotonicity under inclusion gives the reverse inequality. Counting with one fixed length fails this test, because the countably many periodic points of the full binary shift already show every word.

**Paper or page:** [Entropy properties of mostly expanding partially hyperbolic diffeomorphisms](https://arxiv.org/abs/2401.12465v1). It says: “hₜₒₚ(f,Y) = supₙ hₜₒₚ(f,Yₙ), where Y = ⋃ₙ∈ℕ Yₙ ⊂ X.”

**Sources:**

- [Rufus Bowen, Topological entropy for noncompact sets (1973)](https://doi.org/10.1090/S0002-9947-1973-0338317-X)

### Pattern counts make entropy additive

**Remember:** Entropy is the growth rate of allowed patterns per site.

*True by definition.* MSC 37B40 (Topological entropy), 37B10. arXiv math.DS. Level 4: research.

**Definition.** The entropy of a subshift, a closed translation-invariant set of configurations over a finite alphabet, measures how fast its allowed patterns grow. Take finite windows F that each fixed translation barely moves (Følner sets). The entropy is the limit of log(number of allowed patterns on F) divided by \|F\|.

**Problem.** For two subshifts over the same countable amenable group, the topological entropy of their product is the sum of their entropies.

**How the definition helps.** The allowed patterns of the product on a window are exactly the pairs of allowed patterns, so the counts multiply (our own). Logarithms turn the product into a sum, and the limit keeps it. The substantive theorem is that this count-based limit equals topological entropy defined with open covers.

**Paper or page:** [An embedding theorem for subshifts over amenable groups with the comparison property](https://arxiv.org/abs/2211.00215v2). It says: “Let X and T be subshifts. Then h(X × T) = h(X) + h(T).”

**Sources:**

- [Robert Bland, An embedding theorem for subshifts over amenable groups with the comparison property, Lemma 2.20](https://doi.org/10.1017/etds.2024.21)

### Presentation determinants give algebraic entropy

**Remember:** Count each prime factor by its local length, then take Mahler measure.

*Makes the theorem clean to state or prove.* MSC 37B40 (Topological entropy), 11R06. arXiv math.DS, math.NT. Level 4: research.

**Definition.** For a finitely generated torsion module M over the integer Laurent polynomial ring R in d variables, the characteristic element is the product of pˡᵖ over irreducibles p. Here ℓₚ is the length of M after inverting every element outside (p), and the product is taken up to a signed monomial. For M = Rⁿ/ARⁿ it equals det A (our own).

**Problem.** Let A be a square matrix over R with nonzero determinant, and let the variables act on the character group of Rⁿ/ARⁿ. This action has entropy equal to the logarithmic Mahler measure of det A, the mean of log\|det A\| over the unit torus.

**How the definition helps.** Entropy adds along exact sequences, and only principal prime pieces R/(p) contribute, each with the logarithmic Mahler measure of p. So the entropy is the logarithmic Mahler measure of the characteristic element, since ℓₚ counts the pieces R/(p). Smith normal form over the localization at (p) shows that ℓₚ is the exponent of p in det A (our own).

**Wikipedia:** [Mahler measure](https://en.wikipedia.org/wiki/Mahler_measure). It says: “the entropy of the action is expressed as a sum of logarithmic Mahler measures over the generators of the principal associated prime ideals of the module.”

**Sources:**

- [Lind, Schmidt and Ward, Mahler measure and entropy for commuting automorphisms of compact groups](https://doi.org/10.1007/BF01231517)

### A safe symbol makes a shift of finite type an absolute retract

**Remember:** Overwrite every bad window with the safe symbol.

*True by definition. Confidence: medium.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A safe symbol s of a subshift Y is a symbol that may overwrite any set of sites of a configuration in Y, and the result stays in Y. Here Y is a shift of finite type: forbidding finitely many patterns defines it, so one finite window checks membership.

**Problem.** Over a countable group, a shift of finite type Y with a safe symbol is an absolute retract: every subshift containing Y maps onto Y by a continuous shift-commuting map that fixes Y. In particular Y has the map extension property.

**How the definition helps.** Overwrite with s every site lying in a window whose pattern does not occur in Y (our own). A bad window becomes all s, and a good window becomes a good pattern with some sites set to s, so both occur in Y by safety. The rule is local, commutes with shifts and fixes Y, so it is the required retraction.

**Paper or page:** [An embedding theorem for multidimensional subshifts](https://arxiv.org/abs/2312.05650v5). It says: “with a safe symbol is an absolute retract for the class of subshifts, and in particular has the map extension property.”

**Sources:**

- [Tom Meyerovitch, An embedding theorem for multidimensional subshifts, Ergodic Theory Dynam. Systems 45 (2025) 1870–1914, arXiv:2312.05650](https://arxiv.org/abs/2312.05650v5)

### The map extension property extends Krieger’s embedding theorem to abelian groups

**Remember:** Every partial map into the target extends to the whole system.

*Makes the theorem clean to state or prove.* MSC 37B51 (Multidimensional shifts of finite type), 37B10. arXiv math.DS. Level 4: research.

**Definition.** A subshift Y has the map extension property if partial maps into Y always extend. Take any subshift X in which each point x has some y in Y fixed by every group element that fixes x. Then every continuous shift-commuting map from a closed invariant subset of X into Y extends to such a map on all of X.

**Problem.** A subshift over ℤ has the map extension property exactly when it is a topologically mixing shift of finite type. So the paper's embedding theorem over countable abelian groups, with targets that have this property, contains Krieger's embedding theorem.

**How the definition helps.** Over ℤ the property is exactly Krieger's target condition, so the embedding theorem over abelian groups specializes to Krieger's. The stabilizer condition is needed because a periodic point can map only to a point with at least the same periods (our own).

**Paper or page:** [An embedding theorem for multidimensional subshifts](https://arxiv.org/abs/2312.05650v5). It says: “A ℤ-subshift has the map extension property if and only if it is a topologically mixing subshift of finite type.”

**Sources:**

- [Tom Meyerovitch, An embedding theorem for multidimensional subshifts, Ergodic Theory Dynam. Systems 45 (2025) 1870–1914, arXiv:2312.05650](https://arxiv.org/abs/2312.05650v5)

### Finite shadowing makes chain recurrent linear operators mixing

**Remember:** Every finite small-error chain is followed closely by a true orbit.

*Makes the theorem clean to state or prove.* MSC 37B65 (Approximate trajectories, pseudotrajectories, shadowing and related notions for topological dynamical systems), 37B20, 47A16. arXiv math.DS, math.FA. Level 4: research.

**Definition.** A continuous linear operator T has finite shadowing if every finite chain with small step errors is followed closely by a true orbit. Precisely, each zero neighborhood U has a zero neighborhood V such that whenever xᵢ₊₁ − Txᵢ ∈ V for i &lt; n, some y has xᵢ − Tⁱy ∈ U for all i ≤ n.

**Problem.** On a topological vector space, a continuous linear operator with finite shadowing is chain recurrent exactly when it is topologically mixing. Chain recurrent means every point lies on closed chains with arbitrarily small step errors.

**How the definition helps.** Mixing asks only for finite orbit pieces from one open set to another, and finite shadowing turns small-error chains into such pieces (our own). The cited equivalence supplies chains of every large length from chain recurrence and linearity, and it gives the converse.

**Paper or page:** [On Shadowing and Chain Recurrence in Linear Dynamics](https://arxiv.org/abs/2305.02714v2). It says: “Then the following assertions are equivalent: T is chain recurrent; T is transitive; T is ergodic; T is weakly mixing; T is mixing.”

**Sources:**

- [Nilson C. Bernardes, Alfredo Peris, On Shadowing and Chain Recurrence in Linear Dynamics, Adv. Math. 441 (2024) 109539, arXiv:2305.02714](https://arxiv.org/abs/2305.02714v2)

### Periodic shadowing makes periodic points dense in the chain recurrent set

**Remember:** Close a small-error loop, then shadow it with a periodic orbit.

*True by definition.* MSC 37B65 (Approximate trajectories, pseudotrajectories, shadowing and related notions for topological dynamical systems), 37B20, 47A16. arXiv math.DS, math.FA. Level 4: research.

**Definition.** T has periodic shadowing if every periodic chain with small step errors is followed closely by a periodic orbit. Precisely, each zero neighborhood U has a zero neighborhood V such that every periodic sequence with all xᵢ₊₁ − Txᵢ in V has a periodic point y with xᵢ − Tⁱy ∈ U for all i ≥ 0.

**Problem.** Let T be a continuous linear operator on a topological vector space with periodic shadowing. Then periodic points are dense in CR(T), the points that return to themselves along chains with arbitrarily small step errors.

**How the definition helps.** A closed small-error chain through x, repeated forever, is a periodic chain, so periodic shadowing gives a periodic point near x (our own). Choose a symmetric U with x + U inside the target neighborhood, and build the chain with the matching V.

**Paper or page:** [Generalized Hyperbolicity, Stability and Expansivity for Operators on Locally Convex Spaces](https://arxiv.org/abs/2403.02843v2). It says: “Per(T) is dense in CR(T).”

**Sources:**

- [Nilson C. Bernardes, Blas M. Caraballo, Udayan B. Darji, Vinícius V. Fávaro, Alfred Peris, Generalized Hyperbolicity, Stability and Expansivity for Operators on Locally Convex Spaces, J. Funct. Anal. 288 (2025) 110696, arXiv:2403.02843](https://arxiv.org/abs/2403.02843v2)

### Isomorphic equivariant vector fields have the same stable relative equilibria

**Remember:** Fields that differ only along group orbits have the same orbit-space flow.

*Makes the theorem clean to state or prove.* MSC 37C81 (Equivariant dynamical systems), 37C75. arXiv math.DS. Level 4: research.

**Definition.** Two equivariant vector fields X and Y are isomorphic if they differ only by motion along group orbits. Precisely, Y(x) − X(x) is the velocity at t = 0 of exp(tψ(x))x, for a smooth map ψ to the Lie algebra with ψ(gx) = Ad(g)ψ(x).

**Problem.** Under a proper Lie group action, isomorphic equivariant vector fields have the same stable relative equilibria, points whose trajectories stay in their group orbits. Stable means that nearby trajectories stay near the group orbit.

**How the definition helps.** The fields differ only along group orbits, so they induce the same flow on the orbit space M/G. Stability of a relative equilibrium depends only on this orbit-space flow (our own).

**Paper or page:** [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4), [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4). It says: “and induce the same abstract flow on the orbit space M/G.”

**Sources:**

- [Stefan Klajbor-Goderich, Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields, arXiv:1707.02828 (2018)](https://arxiv.org/abs/1707.02828v4)

### The topological Markov property makes Gibbs and étale Gibbs measures the same

**Remember:** Agreement on a finite border makes a finite patch replacement local.

*Makes the theorem clean to state or prove.* MSC 37D35 (Thermodynamic formalism, variational principles, equilibrium states for dynamical systems), 37B10, 37B51. arXiv math.DS. Level 4: research.

**Definition.** A subshift has the topological Markov property if a finite patch can be swapped in whenever a finite border around it matches. Precisely, each finite set A of sites lies in a finite set B such that, if x and y agree on B ∖ A, then x on A and y elsewhere is in the subshift.

**Problem.** For a subshift with the topological Markov property, a Borel probability measure is Gibbs exactly when it is étale Gibbs. This holds for interactions whose energy differences converge absolutely for configurations that differ at finitely many sites.

**How the definition helps.** Gibbs measures test every finite change of a configuration, while étale Gibbs measures test only changes that extend continuously to nearby configurations (our own). With the property, each finite change depends only on a finite border, so it is such a local change. The two tests then cover the same changes.

**Paper or page:** [The Lanford-Ruelle theorem for actions of sofic groups](https://arxiv.org/abs/2112.02334v4). It says: “then every Borel probability measure is Gibbs with respect f if and only if it is étale Gibbs with respect to f.”

**Sources:**

- [Sebastián Barbieri, Tom Meyerovitch, The Lanford-Ruelle theorem for actions of sofic groups, arXiv:2112.02334 (2022)](https://arxiv.org/abs/2112.02334v4)

### Forbidding cycles of whole disks makes filled-set components of box maps compact

**Remember:** Forbid whole-disk cycles, so orbits keep entering compactly contained disks.

*Rules out counterexamples. Confidence: medium.* MSC 37F10 (Dynamics of complex polynomials, rational maps, entire and meromorphic functions; Fatou and Julia sets), 37F25. arXiv math.DS, math.CV. Level 4: research.

**Definition.** A complex box map sends finitely many domain disks properly and holomorphically onto finitely many disjoint range disks, each domain disk either equal to its range disk or compactly inside it. The no permutation condition forbids a cycle of whole disks, ones equal to their range disks.

**Problem.** For a complex box map with the no permutation condition, every connected component of the filled set, the points whose forward iterates are all defined, is compact.

**How the definition helps.** Without the condition, the identity on an open disk has the whole noncompact disk as its filled set (our own). With it, an orbit cannot cycle through whole disks forever, so it keeps entering domain disks with compact closure. Proper pullbacks then give nested pieces whose intersection, the component, is compact (our own).

**Paper or page:** [The dynamics of complex box mappings](https://arxiv.org/abs/2105.08654v2). It says: “each component of K(F) is compact;”

**Sources:**

- [Trevor Clark, Kostiantyn Drach, Oleg Kozlovski, Sebastian van Strien, The dynamics of complex box mappings, arXiv:2105.08654 (2022)](https://arxiv.org/abs/2105.08654v2)

### Wedge powers give stochastic volume conservation

**Remember:** Preserve the two-form and you preserve every wedge power.

*True by definition.* MSC 37J06 (General theory of finite-dimensional Hamiltonian and Lagrangian systems, Hamiltonian and Lagrangian structures, symmetries, invariants). arXiv math.DS. Level 4: research.

**Definition.** On a 2n-dimensional symplectic manifold, the symplectic volume form is ωⁿ/n!, built from the symplectic form ω alone as its normalized n-fold wedge power.

**Problem.** Smooth Hamiltonian flows driven by continuous semimartingale noise, taken in the Stratonovich sense, preserve phase-space volume with probability one wherever a smooth local flow exists.

**How the definition helps.** The volume form is built from ω alone, so any flow preserving ω preserves ωⁿ/n! (our own). Stratonovich integrals obey the ordinary chain rule, so the stochastic flow preserves ω because each driving Hamiltonian field does (our own).

**Paper or page:** [Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems](https://arxiv.org/abs/2312.09769v3). It says: “the symplectic volume form ωⁿ ≔ ω ∧ ⋯ ∧ ω (n times) is preserved under the flow of”

**Sources:**

- [Oliver D. Street and So Takao, Semimartingale driven mechanics and reduction by symmetry for stochastic and dissipative dynamical systems (2024)](https://arxiv.org/abs/2312.09769v3)

### Diophantine frequencies bound the small divisors, so KAM tori survive

**Remember:** Keep every ω · k at least polynomially far from zero.

*Rules out counterexamples. Confidence: medium.* MSC 37J40 (Perturbations of finite-dimensional Hamiltonian systems, normal forms, small divisors, KAM theory, Arnol'd diffusion), 37C55. arXiv math.DS, math.SG. Level 4: research.

**Definition.** A frequency vector ω in ℝᵈ is Diophantine if it stays quantitatively away from every resonance ω · k = 0. Precisely, some γ, τ &gt; 0 make \|ω · k\| at least γ divided by ‖k‖ to the power τ for every nonzero integer vector k.

**Problem.** Near a regular torus of a real-analytic integrable Hamiltonian, assume the frequency map has invertible derivative and the torus has Diophantine frequency ω. Every sufficiently small analytic Hamiltonian perturbation on a fixed complex neighborhood retains an invariant torus with frequency ω.

**How the definition helps.** Each KAM step divides Fourier coefficients by ω · k, and the bound keeps these small divisors only polynomially small, which analyticity absorbs (our own). The analytic KAM theorem iterates this estimate to get the perturbed torus. At a resonance ω · k = 0, the corresponding Fourier equation can have no solution (our own).

**Wikipedia:** [Kolmogorov–Arnold–Moser theorem](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Arnold%E2%80%93Moser_theorem). It says: “Surviving tori meet the non-resonance condition, i.e., they have sufficiently irrational frequencies.”

**Sources:** none listed. No primary source with a working link was found.
