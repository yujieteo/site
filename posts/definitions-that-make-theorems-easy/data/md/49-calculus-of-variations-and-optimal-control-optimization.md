### Absolute continuity makes straight paths optimal

**Remember:** The integral of velocity must equal the change in position.

*Rules out counterexamples.* MSC 49J05 (Existence theories for free problems in one independent variable), 49K05. arXiv math.OC. Level 2: later undergraduate.

**Definition.** An absolutely continuous real path on a closed interval equals its starting point plus the integral of an integrable velocity. Continuity and existence of a derivative almost everywhere do not ensure this representation.

**Problem.** Among absolutely continuous real paths from 0 to 1 in unit time, the straight path uniquely minimizes the integral of squared speed.

**How the definition helps.** Absolute continuity forces the velocity to integrate to one, so Cauchy–Schwarz gives a lower bound of one on the energy (our own). Equality forces constant velocity almost everywhere (our own). Without absolute continuity the Cantor function joins these endpoints with derivative zero almost everywhere (our own). The work is in the fundamental theorem that identifies absolutely continuous paths with integrals of their velocities.

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “is uniformly continuous, and is differentiable with f′(x) = 0 for almost all x, but does not satisfy the Fundamental Theorem”

**Sources:** none listed. No primary source with a working link was found.

### Compact sublevels trap minimizing sequences

**Remember:** Keep a low-cost sequence inside one compact set.

*Rules out counterexamples.* MSC 49J27 (Existence theories for problems in abstract spaces). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A cost has compact sublevels if, for each real bound, the points costing at most that bound form a compact set.

**Problem.** Suppose a cost on a metric space has compact sublevels and a finite infimum. Then some point attains that infimum.

**How the definition helps.** One compact sublevel contains the tail of any sequence whose costs approach the infimum (our own). A subsequence therefore converges (our own). Every sublevel is closed, so the limit belongs to every sublevel above the infimum and attains it (our own). Without compactness, exp(−x) on the real line approaches zero without attaining it (our own).

**Wikipedia:** [Direct method in the calculus of variations](https://en.wikipedia.org/wiki/Direct_method_in_the_calculus_of_variations). It says: “Show that J is sequentially lower semi-continuous with respect to the topology τ.”

**Sources:** none listed. No primary source with a working link was found.

### With subgradients, zero is a subgradient exactly at a global minimum

**Remember:** A flat line below the graph marks the lowest point.

*True by definition.* MSC 49J52 (Nonsmooth analysis), 26A51. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** A subgradient of a convex function f at x₀ is a number c with f(x) − f(x₀) ≥ c(x − x₀) for all x. The set of all subgradients at x₀ is the subdifferential. For f(x) = \|x\| the subdifferential at 0 is the interval \[−1, 1\].

**Problem.** State Fermat's rule, that the slope is zero at a minimum, for convex functions with corners.

**How the definition helps.** Put c = 0 in the definition, and the inequality says f(x) ≥ f(x₀) for all x. So the rule holds by definition, and it gives a global minimum, not only a local one. The derivative version fails at corners such as the minimum of \|x\|, where no derivative exists. A convex function is differentiable at x₀ exactly when the subdifferential has one element. What stays hard is computing subdifferentials of sums and compositions, which needs convex analysis.

**Wikipedia:** [Subderivative](https://en.wikipedia.org/wiki/Subderivative). It says: “A point x₀ is a global minimum of a convex function f if and only if zero is contained in the subdifferential.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### A point is nearest in a convex set when the displacement is normal

**Remember:** At the nearest point, the displacement points away from every feasible move.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J53 (Set-valued and variational analysis), 52A27, 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** The normal cone of a convex set Ω at a point z contains the vectors v with ⟨v, y − z⟩ ≤ 0 for every y in Ω. These vectors make an obtuse or right angle with every move from z that stays in Ω.

**Problem.** Take a nonempty closed convex set Ω in ℝⁿ and a point x. The nearest point of Ω to x is the point z of Ω whose normal cone contains x − z.

**How the definition helps.** The normal cone expresses the nearest-point test as one condition on the displacement, by our own explanation. Expanding squared distances proves sufficiency, and testing a short move toward each feasible point proves necessity, by our own calculation. Existence of the nearest point still needs closedness, by our own account.

**Paper or page:** [Design Guidelines for Noise-Tolerant Optimization with Applications in Robust Design](https://arxiv.org/abs/2401.15007v2). It says: “z is the projection of x on Ω if and only if (x − z)ᵀ(y − z) ≤ 0 for all y ∈ Ω.”

**Sources:**

- [Yuchen Lou, Shigeng Sun, Jorge Nocedal, Design Guidelines for Noise-Tolerant Optimization with Applications in Robust Design, arXiv:2401.15007v2 (2024)](https://arxiv.org/abs/2401.15007v2)

### Continuation values give a recursion for optimal reward

**Remember:** Once the current state is fixed, only the remaining choices matter.

*Makes the theorem clean to state or prove.* MSC 49L20 (Dynamic programming in optimal control and differential games). arXiv math.OC, cs.SY. Level 2: later undergraduate.

**Definition.** At each decision time, define the continuation value of a state as the supremum of total rewards over its feasible remaining paths. The state must determine future rewards and allowed actions.

**Problem.** Consider a deterministic problem with finitely many decision times, bounded additive rewards and a feasible continuation at every decision state. Each value equals the supremum over first actions of immediate reward plus the next state’s value. Every remaining part of an optimal path is optimal from its starting state.

**How the definition helps.** The continuation value summarizes all feasible tails by one number, so the recursion needs only the first action and next state (our own). Group feasible paths by first action and take the supremum within each group (our own). If an optimal path had a better feasible tail, replacing its tail would improve the whole path (our own). The work lies in choosing a state that permits such replacements (our own).

**Wikipedia:** [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation). It says: “the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision.”

**Sources:**

- [R. Bellman, On the Theory of Dynamic Programming (1952)](https://doi.org/10.1073/pnas.38.8.716)

### Discounting contracts the Bellman update

**Remember:** Averaging cannot grow an error, and discounting shrinks it.

*Rules out counterexamples.* MSC 49L20 (Dynamic programming in optimal control and differential games), 93E20. arXiv math.OC, cs.SY. Level 2: later undergraduate.

**Definition.** Fix a rule for choosing actions from the current state. Its Bellman update adds the expected immediate reward to γ times the expected trial value at the next state. The discount γ satisfies 0 ≤ γ &lt; 1.

**Problem.** In a finite decision process with bounded rewards, the largest absolute difference after an update is at most γ times the previous difference. The unique fixed point gives the expected sum of discounted rewards.

**How the definition helps.** Discounting makes the expected next-step difference strictly smaller in maximum norm whenever the trial values differ (our own). The rewards cancel, and averaging cannot increase the largest absolute difference (our own). The contraction theorem gives uniqueness. Conditioning on the first reward shows that the expected discounted sum is a fixed point (our own). At γ = 1, a single state with zero reward makes every value a fixed point (our own).

**Paper or page:** [On the Reinhardt Conjecture and Formal Foundations of Optimal Control](https://arxiv.org/abs/2208.04443v1). It says: “The operator Bπ is a contraction in the max norm on the space of functions S → ℝ.”

**Sources:** none listed. No primary source with a working link was found.

### Gamma limits preserve limiting minimizers

**Remember:** Check moving points to keep moving wells from disappearing.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** Costs Gamma converge on a metric space when two tests hold at each point. Every sequence approaching that point has lower limiting cost at least the proposed value there. Some sequence approaching the same point has costs converging to that value. Pointwise convergence checks only constant sequences.

**Problem.** If costs Gamma converge on a metric space, every cluster point of their minimizers minimizes the limit cost.

**How the definition helps.** The lower bound controls the convergent minimizers, and the matching upper bound lets us compare them with any fixed candidate (our own). For pointwise convergence, start with the cost x on \[0, 1\] and set it to −1 only at 1 − 1/n (our own). Its minimizers tend to 1, but the pointwise limit is minimized at 0 (our own). The work goes into proving the two bounds for the costs in question (our own).

**Wikipedia:** [Γ-convergence](https://en.wikipedia.org/wiki/%CE%93-convergence). It says: “then every cluster point of the sequence xₙ is a minimizer of F.”

**Sources:** none listed. No primary source with a working link was found.

### Polyconvexity implies quasiconvexity by averaging

**Remember:** Average the minors first, then use convexity.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** A minor is the determinant of a square submatrix. A matrix function is polyconvex if it is a convex function of the list of all its minors. Quasiconvexity means that adding a smooth gradient perturbation to a constant matrix cannot lower the average cost when the perturbing map has compact support.

**Problem.** Every finite polyconvex matrix function is quasiconvex in the sense used for variational integrals.

**How the definition helps.** Convexity in the minors lets Jensen’s inequality bound the average cost by the cost evaluated through their averages (our own). The essential identity says that each perturbed minor averages to the corresponding minor of the constant matrix (our own). Integration by parts proves this identity because the perturbing map vanishes near the boundary (our own).

**Paper or page:** [On the local everywhere Hölder continuity for weak solutions of a class of not convex vectorial problems of the Calculus of Variations](https://arxiv.org/abs/2302.02387v1). It says: “f convex ⇒ f polyconvex ⇒ f quasiconvex ⇒ f rank one convex.”

**Sources:** none listed. No primary source with a working link was found.

### Young measures give a minimizer when no function attains the infimum

**Remember:** When derivatives oscillate, keep the whole distribution of values, not one value.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation), 28A33. arXiv math.OC, math.AP. Level 3: graduate.

**Definition.** Take a bounded sequence of functions fₙ. After passing to a subsequence, it has a Young measure: a probability measure νₓ on the values for each point x. For every continuous F, F(fₙ) then tends weak-\* to the function whose value at x is the average of F against νₓ.

**Problem.** The Bolza problem minimizes the integral of (u′² − 1)² + u² over \[0, 1\], with u(0) = u(1) = 0. The infimum is 0, but no function attains it: that would need u = 0 and \|u′\| = 1 at once (our own).

**How the definition helps.** A minimizing sequence uses zigzags with slopes ±1 that get finer and finer, so u tends to 0 while u′ keeps oscillating. The ordinary weak limit of u′ is 0 and loses the information that \|u′\| = 1 (our own). The Young measure keeps it: the page says it is ½δ₋₁ + ½δ₁ at every point, where δₐ is the point mass at a. With generalized solutions of this kind, the relaxed problem has a minimizer, which is L. C. Young's existence theorem for generalized curves (our own). The hard part is to find out when a Young measure comes from a true function.

**Wikipedia:** [Young measure](https://en.wikipedia.org/wiki/Young_measure). It says: “This captures the essential features of all minimizing sequences to this problem, namely, their derivatives u′ₖ(x) will tend to concentrate along the minima {−1, 1} of the integrand”

**Sources:**

- [L. C. Young, Generalized surfaces in the calculus of variations, Annals of Mathematics 43 (1942) 84ff.](https://doi.org/10.2307/1968882)

### Equality in Fenchel’s inequality makes subgradient inversion transparent

**Remember:** Equality means the point attains the supremum defining the conjugate.

*True by definition.* MSC 49J52 (Nonsmooth analysis), 52A41. arXiv math.OC. Level 3: graduate.

**Definition.** Let f be convex and have a closed epigraph, with at least one finite value and no value of −∞. Its conjugate f⁎(p) is the supremum of ⟨p, z⟩ − f(z) over z. A subgradient p at x is the slope of an affine function that touches f at x and lies below it. The equivalent equality test is f(x) + f⁎(p) = ⟨p, x⟩ at finite f(x) and f⁎(p).

**Problem.** A vector p is a subgradient of f at x exactly when x is a subgradient of f⁎ at p.

**How the definition helps.** The equality test makes inversion immediate because it swaps x and p without changing the equation once the conjugate of f⁎ is f. Our own check of the test is that equality says x attains the supremum defining f⁎(p). This is the same as the affine support inequality for all z. Starting with the support definition instead requires rewriting its inequality in terms of the conjugate. The work for the reverse implication is the biconjugate theorem, which recovers f after taking the conjugate twice.

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “Furthermore, the equality holds only when p ∈ ∂f(x), where ∂f(x) is the subgradient.”

**Sources:** none listed. No primary source with a working link was found.

### For weakly convex functions, a steep enough Moreau envelope is continuously differentiable

**Remember:** Use a quadratic steeper than the function's worst downward bend.

*Makes the theorem clean to state or prove.* MSC 49J52 (Nonsmooth analysis), 90C26. arXiv math.OC. Level 3: graduate.

**Definition.** A function f is m-weakly convex if adding m‖x‖²/2 makes it convex. Its Moreau envelope with parameter ρ is the least value of f(y) + ρ‖y − x‖²/2 over y.

**Problem.** Let f be closed and m-weakly convex on ℝⁿ, and let ρ &gt; m. Then the envelope is continuously differentiable, the minimizing y is unique, and the gradient at x is ρ times x minus that y.

**How the definition helps.** For ρ &gt; m the inner cost is strongly convex in y, so its one minimizer alone gives the derivative in x (our own explanation). The proof still has to show that the minimizer moves continuously with x. The condition ρ &gt; m is needed. For f(y) = −m‖y‖²/2 and ρ = m, the inner cost is linear in y and unbounded below unless x = 0 (our own example).

**Paper or page:** [A Proximal Descent Method for Minimizing Weakly Convex Optimization](https://arxiv.org/abs/2509.02804v1). It says: “the Moreau envelope fᵨ is continuously differentiable with gradient given by ∇fᵨ(x) = ρ(x − x̂),”

**Sources:**

- [Feng-Yi Liao, Yang Zheng, A Proximal Descent Method for Minimizing Weakly Convex Optimization, arXiv:2509.02804v1 (2025)](https://arxiv.org/abs/2509.02804v1)
- [J. J. Moreau, Proximité et dualité dans un espace hilbertien, Bulletin de la Société Mathématique de France (1965)](https://doi.org/10.24033/bsmf.1625)

### On complete spaces every finite lower semicontinuous convex function has subgradients

**Remember:** A complete space leaves no room for the missing support.

*Rules out counterexamples.* MSC 49J52 (Nonsmooth analysis), 52A41. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A Banach space is a complete normed space. A function is lower semicontinuous if its value at any limit point is at most the lower limit of its values along the sequence. A subgradient at x is a continuous linear functional whose affine function through f(x) stays below f.

**Problem.** A finite, lower semicontinuous convex function on a Banach space has a subgradient at every point. The claim fails on an incomplete normed space.

**How the definition helps.** Completeness lets the Baire category theorem show that some sublevel set has interior, so the function is bounded on a ball (our own explanation). Convexity then makes the function continuous everywhere, and the Hahn–Banach theorem gives a subgradient. The paper builds a function on the space of finitely supported sequences that is nowhere continuous and has an empty subdifferential at every point. The abstract calls it a universal counterexample to statements in convex analysis that need completeness.

**Paper or page:** [A convex, finite and lower semicontinuous function with empty subdifferential](https://arxiv.org/abs/2409.18650v1). It says: “We give an example of a convex, finite and lower semicontinuous function whose subdifferential is everywhere empty. This is possible since the function is defined on an incomplete normed space.”

**Sources:**

- [Gerd Wachsmuth, A convex, finite and lower semicontinuous function with empty subdifferential, arXiv:2409.18650v1 (2024)](https://arxiv.org/abs/2409.18650v1)

### Perturbation duality gives weak duality through affine lower bounds

**Remember:** The best affine lower bound cannot exceed the value at zero.

*True by definition.* MSC 49N15 (Duality theory (optimization)), 90C46, 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** For the problem of minimizing f(x), choose a perturbation F(x, y) with F(x, 0) = f(x). Let v(y) be the infimum of F(x, y) over x. The perturbation dual takes the supremum at y = 0 of all affine functions lying below v.

**Problem.** The dual value cannot exceed the primal value v(0). The two agree if v is convex, never equals −∞, and is finite at zero. For equality, also require lower semicontinuity at zero, so the value there cannot exceed the lower limit nearby.

**How the definition helps.** The affine-lower-bound definition makes weak duality immediate because each affine bound lies below v at zero. The usual Lagrange dual instead forms bounds by putting multipliers on the constraints and minimizing over x. Our own connection is that shifting the constraints lets the multipliers serve as slopes of the affine bounds. The work for equality is the convex analysis theorem that recovers a convex value from its closed lower boundary. One still needs assumptions that give the required regularity at zero.

**Wikipedia:** [Perturbation function](https://en.wikipedia.org/wiki/Perturbation_function). It says: “For any choice of perturbation function F weak duality holds.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### Beliefs restore the Markov property

**Remember:** Keep what the history says about the current state.

*Makes the theorem clean to state or prove.* MSC 49N30 (Problems with incomplete information (optimization)), 93C41. arXiv math.OC, cs.SY. Level 3: graduate.

**Definition.** Use the conditional probability of each hidden state given all past actions and observations as the new state. This probability vector, called the belief, replaces the full history.

**Problem.** Consider a decision process with hidden states, finite sets of states, actions and observations, and finitely many decision times. For bounded additive rewards, an optimal rule uses only the current belief and time. Its value follows by maximizing expected current reward plus expected future value at each step.

**How the definition helps.** The belief gives the current expected reward and the probability of each next observation (our own). Bayes’ rule then gives the next belief using only the current belief, action and observation (our own). The work is proving this update and applying backward induction on the resulting decision process (our own).

**Wikipedia:** [Partially observable Markov decision process](https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process). It says: “A Markovian belief state allows a POMDP to be formulated as a Markov decision process where every belief is a state.”

**Sources:**

- [R. D. Smallwood and E. J. Sondik, The Optimal Control of Partially Observable Markov Processes over a Finite Horizon (1973)](https://doi.org/10.1287/opre.21.5.1071)

### De Giorgi’s divergence definition of perimeter makes it lower semicontinuous

**Remember:** A supremum of continuous tests is lower semicontinuous.

*True by definition.* MSC 49Q20 (Variational problems in a geometric measure-theoretic setting), 26B30. arXiv math.AP, math.MG. Level 3: graduate.

**Definition.** Define the perimeter of a measurable set E in ℝⁿ as a supremum of integrals of div φ over E. The supremum runs over smooth compactly supported vector fields φ with \|φ\| ≤ 1. For a smooth bounded set, the older definition is the area of its boundary.

**Problem.** Let the indicator functions of measurable sets Eₖ converge in L¹ to that of E. Then the perimeter of E is at most the lower limit of the perimeters of Eₖ.

**How the definition helps.** Each test integral is continuous under L¹ convergence, and a supremum of continuous functions is lower semicontinuous. With boundary area, the perimeter of a rough limit set is not even defined (our own comparison). The work moves to showing that the new definition gives boundary area for smooth sets. This uses the divergence theorem and fields that approximate the outward normal (our own).

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “which is exactly the definition of lower semicontinuity.”

**Sources:** none listed. No primary source with a working link was found.

### Kantorovich–Rubinstein duality makes Wasserstein distance W₁ jointly convex

**Remember:** Each test is linear in the laws, so their supremum is convex.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** Consider probability measures with finite mean distance from a fixed point of a complete separable metric space. A coupling is a pair (X, Y) with the two given laws. The Wasserstein distance W₁ is the infimum of the mean distance between X and Y over all couplings. The dual definition takes the supremum of differences of averages of functions that change by at most the distance between their inputs.

**Problem.** Mix two pairs of probability measures with the same weight in each coordinate. The W₁ distance of the mixed pair is at most the weighted average of the two original distances.

**How the definition helps.** The dual definition makes joint convexity a supremum rule (our own). Each difference of averages is linear in the pair of laws, and a supremum of linear functions is convex (our own). The coupling proof instead mixes couplings chosen to have costs close to the two original distances (our own). The work shifts to Kantorovich–Rubinstein duality, the theorem that the supremum equals the coupling cost (our own).

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “This form shows that W₁ is an integral probability metric.”

**Sources:**

- [Cédric Villani, Optimal Transport: Old and New, Springer (2009), Theorem 5.10](https://doi.org/10.1007/978-3-540-71050-9)

### The dual definition of Wasserstein distance gives its triangle inequality

**Remember:** Each difference of averages satisfies the triangle bound before taking the supremum.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** The Wasserstein distance W₁ is the infimum of the expected distance between two jointly sampled points with the given laws. On a complete separable metric space, the dual definition takes the supremum of differences between the two averages of a 1-Lipschitz function. Such a function changes by at most the distance between its inputs.

**Problem.** For any three probability measures with finite first moments on a complete separable metric space, W₁(p, r) ≤ W₁(p, q) + W₁(q, r).

**How the definition helps.** The dual definition splits each difference of averages at the middle measure, so the triangle inequality follows before taking the supremum (our own explanation). The joint-law proof instead combines two joint laws into a law on triples (our own comparison). The equivalence of the two definitions is the Kantorovich–Rubinstein duality theorem.

**nLab:** [Kantorovich monad](https://ncatlab.org/nlab/show/Kantorovich+monad), [transport plan](https://ncatlab.org/nlab/show/transport+plan). It says: “where the supremum (which is usually not attained) is taken over the set of 1-Lipschitz functions”

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “Kantorovich and Rubinstein proved a duality representation theorem for general cost functions”

**Sources:**

- [P. Clement and W. Desch, An elementary proof of the triangle inequality for the Wasserstein metric, Proceedings of the AMS 136 (2008)](https://doi.org/10.1090/S0002-9939-07-09020-X)

### The dual definition of W₁ makes common mass cancel exactly

**Remember:** Adding the same mass to both measures cancels in every test.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.MG. Level 3: graduate.

**Definition.** Define the Wasserstein distance W₁ as the supremum of ∫f dμ − ∫f dν over functions f with Lipschitz constant at most one. The usual definition is the least mean distance travelled over couplings, joint laws with marginals μ and ν.

**Problem.** Take probability measures μ, ν and ρ with finite first moments on a complete separable metric space. For t in \[0,1\], W₁(tμ + (1−t)ρ, tν + (1−t)ρ) = t·W₁(μ,ν).

**How the definition helps.** The ρ terms cancel in every test integral, and t factors out of the supremum (our own argument). With couplings, the upper bound is easy but the lower bound is not, since an optimal coupling may mix the masses (our own comparison). The work moves to Kantorovich–Rubinstein duality, which shows that the two definitions agree.

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “Kantorovich and Rubinstein proved a duality representation theorem for general cost functions”

**Sources:** none listed. No primary source with a working link was found.

### Transport plans are optimal exactly when no cyclic reassignment lowers cost

**Remember:** An optimal shipment has no cheaper cycle of reassignments.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 3: graduate.

**Definition.** A transport plan from μ to ν is a probability measure on pairs whose two marginals are μ and ν. A set of pairs is c-cyclically monotone if no cyclic shift of destinations lowers total cost. This must hold for every finite list of its pairs.

**Problem.** Let X and Y be Polish spaces, which are complete separable metric spaces. Let the cost c take values in \[0,∞\] and be continuous. A transport plan of finite cost is optimal exactly when it is concentrated on a c-cyclically monotone set.

**How the definition helps.** The definition reduces optimality, a statement about all plans, to a test on finitely many pairs at a time. Necessity is easy, by our own account. A cheaper cycle on a set of positive mass would give a cheaper plan. Sufficiency is the hard direction. It is Pratelli's Theorem B, which turns the absence of finite improvements into global optimality.

**Paper or page:** [60 years of cyclic monotonicity: a survey](https://arxiv.org/abs/2308.07682v2). It says: “a finite transport plan γ ∈ Π(μ,ν) is optimal if and only if it is concentrated on a c-cyclically monotone set.”

**Sources:**

- [L. De Pascale, A. Kausamo, K. Wyczesany, 60 years of cyclic monotonicity: a survey, arXiv:2308.07682v2 (2023)](https://arxiv.org/abs/2308.07682v2)
- [Aldo Pratelli, On the sufficiency of c-cyclical monotonicity for optimality of transport plans, Mathematische Zeitschrift (2008)](https://doi.org/10.1007/s00209-007-0191-7)

### Tangential polyconvexity gives minimizers for elastic energies with surface terms

**Remember:** Use only the derivative directions that the boundary has.

*Makes the theorem clean to state or prove.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation), 74B20. arXiv math.AP. Level 4: research.

**Definition.** An energy density is polyconvex if it is a convex function of all the minors of the derivative matrix. Tangential polyconvexity applies this to a surface energy on the boundary. It uses only the derivative along the boundary, a d × (d − 1) matrix, and its minors.

**Problem.** Take a bulk energy that is polyconvex and a boundary energy that is tangentially polyconvex. Under the paper's growth and measurability conditions, the total energy has a minimizer in each nonempty admissible class of deformations. Each admissible deformation is injective almost everywhere.

**How the definition helps.** Tangential polyconvexity lets the boundary energy use the same lower semicontinuity argument as the bulk energy. In our own explanation, that argument needs the minors to pass to weak limits, and the paper proves this for the tangential minors. The proof of injectivity is separate work.

**Paper or page:** [Invertibility of Sobolev maps through approximate invertibility at the boundary and tangential polyconvexity](https://arxiv.org/abs/2503.01795v1). It says: “the energy density in ∂Ω is assumed to be tangentially polyconvex, a new type of polyconvexity on ∂Ω.”

**Sources:**

- [Carlos Mora-Corral, David Mur-Callizo, Invertibility of Sobolev maps through approximate invertibility at the boundary and tangential polyconvexity, arXiv:2503.01795 (2025)](https://arxiv.org/abs/2503.01795v1)

### A convex minimizer is unique exactly when a radial-cone kernel test passes

**Remember:** Look for a real segment of equally good solutions, not just a limiting direction.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J53 (Set-valued and variational analysis), 90C25, 90C46. arXiv math.OC. Level 4: research.

**Definition.** Let C be a convex set and x a point of C. The radial cone of C at x is the set of all t(c − x) with c in C and t ≥ 0. Unlike the tangent cone, it does not add limits of these directions.

**Problem.** Minimize f(Φx) + g(x), where Φ is linear, f is a smooth strictly convex loss and g is a convex penalty. Let x̄ be optimal and ȳ = −Φ\*∇f(Φx̄). Then x̄ is the unique solution exactly when the kernel of Φ meets the radial cone of ∂g\*(ȳ) at x̄ only in 0.

**How the definition helps.** Each radial direction is an actual move inside the set ∂g\*(ȳ), so it gives a real second point. Here ∂g\*(ȳ) is the set of points where ȳ is a subgradient of g. Because f is strictly convex, all optima share the same value of Φx and lie in this set, by our own argument. So a second optimum is exactly a nonzero radial move that Φ sends to 0, by our own calculation. Computing the radial cone for a given penalty remains separate work, as the paper's low-rank section shows.

**Paper or page:** [Solution uniqueness of convex optimization problems via the radial cone](https://arxiv.org/abs/2401.10346v1), [Solution uniqueness of convex optimization problems via the radial cone](https://arxiv.org/abs/2401.10346v1). It says: “Our characterizations of solution uniqueness are in terms of the radial cone.”

**Sources:**

- [Jalal Fadili, Tran T. A. Nghia, Duy Nhat Phan, Solution uniqueness of convex optimization problems via the radial cone, arXiv:2401.10346v1 (2024)](https://arxiv.org/abs/2401.10346v1)
- [Jalal Fadili, Tran T. A. Nghia, Duy Nhat Phan, Solution Uniqueness of Convex Optimization Problems via the Radial Cone, Journal of Optimization Theory and Applications (2025)](https://doi.org/10.1007/s10957-025-02723-3)

### Accumulated reward makes laws recursive

**Remember:** Carry the running total as part of the state.

*Makes the theorem clean to state or prove.* MSC 49L20 (Dynamic programming in optimal control and differential games), 93E20. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** Track both the current state and the total reward earned so far. Use their joint probability distribution as the state of a new decision process.

**Problem.** Consider the paper’s finite-horizon decision process with finitely many states and a compact set of actions. For every original rule, successive updates of this distribution reproduce the joint distribution of final state and total reward.

**How the definition helps.** Tracking the running total makes the final reward distribution accessible through updates at each step (our own). Start with zero reward and the original distribution of states. The work lies in finding rules based on state and running total that reproduce the distributions under a history-dependent rule (our own).

**Paper or page:** [Yet Another Distributional Bellman Equation](https://arxiv.org/abs/2505.21098v2). It says: “For every policy σ = (σₙ) in the original MDP model, there exists an action sequence π = (πₙ) in the lifted MDP”

**Sources:**

- [Yet Another Distributional Bellman Equation](https://arxiv.org/abs/2505.21098v2)

### Randomization mixes occupation measures

**Remember:** Mix the rules before starting, and their expected visit counts mix.

*True by definition.* MSC 49N25 (Impulsive optimal control problems), 93E20. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** An impulse control rule chooses when to intervene and which intervention to make. In the associated decision process, an occupation measure records the expected number of visits to each set of state and action pairs.

**Problem.** For the discounted impulse control problem in the paper, the occupation measures of randomized rules in the associated decision process form a convex set.

**How the definition helps.** Expected visit counts mix linearly when a single initial draw chooses which rule to follow (our own). Conditioning on that draw gives the required weighted average for every set of state and action pairs (our own). The work lies in representing impulse controls by decision rules and admitting the initial random choice (our own).

**Paper or page:** [Primal-dual programs for the constrained optimal impulse control: discounted model](https://arxiv.org/abs/2504.18387v1). It says: “The set of all occupation measures in the induced MDP is convex”

**Sources:**

- [Primal-dual programs for the constrained optimal impulse control: discounted model](https://arxiv.org/abs/2504.18387v1)

### A jump-based transport distance makes nonlocal diffusion an entropy gradient flow

**Remember:** Charge for mass that moves by jumps, and entropy descent is jump diffusion.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation), 35R09. arXiv math.AP. Level 4: research.

**Definition.** The new distance between probability distributions is the least cost of moving mass along a path of distributions. Mass may jump directly between two points x and y. The cost of a jump uses the transition kernel η(x, y) and the logarithmic mean of the two densities. The logarithmic mean of a and b is (a − b) ∕ (log a − log b).

**Problem.** For a suitable class of weak solutions, every solution of the nonlocal diffusion equation is a gradient flow of relative entropy for the new distance. A gradient flow is a curve of steepest descent, and relative entropy measures how far a distribution is from the reference distribution π.

**How the definition helps.** The distance uses the same jumps as the equation, so steepest descent of the entropy gives back the equation. Our own explanation is that the logarithmic mean turns a difference of logarithms into a difference of densities. The paper still has to prove a chain rule for the entropy along curves.

**Paper or page:** [Gradient flow structure for some nonlocal diffusion equations](https://arxiv.org/abs/2412.20969v3). It says: “we show that solutions to these nonlocal diffusion equations can be interpreted as gradient flows of the relative entropy with respect to a certain nonlocal Wasserstein-type metric defined in terms of η and π.”

**Sources:**

- [Andrew Warren, Gradient flow structure for some nonlocal diffusion equations, arXiv:2412.20969 (2025)](https://arxiv.org/abs/2412.20969v3)

### Defining distance to fairness by optimal transport makes it a linear program

**Remember:** Measure how much the data would have to move to reach fairness.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49Q22 (Optimal transportation), 62H30, 62G10. arXiv stat.ML, math.OC. Level 4: research.

**Definition.** Optimal transport moves probability mass from one law to another and charges for the distance moved. The projection distance is the cheapest transport cost from the empirical law of the data to any law that satisfies the chosen group fairness condition.

**Problem.** For the paper's binary classifier and group fairness condition, the projection distance equals the optimal value of a linear program. The program has one variable in \[0, 1\] for each data point.

**How the definition helps.** Moving a point changes the classifier's output only if it crosses the decision boundary, so only the cheapest crossing matters (our own unpacking). The variable for each point is the fraction of its mass that crosses, at a cost of its distance to the boundary. The cost and the fairness condition are then linear in these fractions, as the program in the paper shows. Calibrating the test so that sampling noise does not look like unfairness still takes the paper's limit theorem.

**Paper or page:** [Testing Group Fairness via Optimal Transport Projections](https://arxiv.org/abs/2106.01070v1). It says: “The projection distance 𝒫(P̂ᴺ) is equal to the optimal value of a linear program.”

**Sources:**

- [Nian Si, Karthyek Murthy, Jose Blanchet, Viet Anh Nguyen, Testing Group Fairness via Optimal Transport Projections, International Conference on Machine Learning 2021](https://arxiv.org/abs/2106.01070v1)

### Monotone multispecies flows have at most one steady state

**Remember:** Two states with zero velocity cannot stay a positive distance apart.

*True by definition.* MSC 49Q22 (Optimal transportation), 35Q49. arXiv math.AP. Level 4: research.

**Definition.** Compare two states with n species by an optimal matching of each species' mass, with total squared distance W². Pair the difference of the velocity fields at matched points with the displacement between them. The flow is λ-monotone if minus this pairing is at least λ W².

**Problem.** Let λ &gt; 0. Two steady states of a λ-monotone flow are equal. Under further conditions in the paper, a steady state exists and every solution approaches it exponentially fast.

**How the definition helps.** Uniqueness follows straight from the definition. Here is our own one-line proof. At steady states both velocity fields are zero, so the pairing is zero. Then 0 ≥ λ W², so W = 0. Existence and the rate of convergence need separate work.

**Paper or page:** [Monotone Multispecies Flows](https://arxiv.org/abs/2506.22947v2). It says: “We show that monotonicity implies the existence of and convergence to a unique steady state, convergence of the velocity fields and second moments, and contraction in the Wasserstein-2 metric, at rates dependent on λ.”

**Sources:**

- [Lauren Conger, Franca Hoffmann, Eric Mazumdar, Lillian J. Ratliff, Monotone Multispecies Flows, arXiv:2506.22947 (2025)](https://arxiv.org/abs/2506.22947v2)

### Path boundedness characterizes sets carrying transport potentials when costs can be infinite

**Remember:** Control every route between two endpoints, not just closed routes.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation), 26B25. arXiv math.OC. Level 4: research.

**Definition.** Let G be a set of pairs (x,y), and let P be the set of first points x of pairs in G. A potential is a function φ on P with φ(x) − φ(z) ≥ c(x,y) − c(z,y) for (x,y) in G, z in P. Adding these bounds along a path of pairs in G bounds the change of φ between the path's ends. G is path bounded if, for any two pairs in G, the sums over all paths between them have a common upper bound.

**Problem.** Let the cost c take values in (−∞, ∞\]. A set of pairs has a potential of the paper's class exactly when it is path bounded. For finite costs, cyclic monotonicity implies path boundedness, and this recovers the classical theorem of Rockafellar and Rüschendorf.

**How the definition helps.** Potential differences telescope along paths, so the two end values bound every path sum, in our own explanation. An infinite cost can remove a return constraint, so checking only cycles is not enough, in our own reading. The hard direction is building a potential from the bounds. The paper reduces that direction to solving a system of linear inequalities.

**Paper or page:** [A Rockafellar-type theorem for non-traditional costs](https://arxiv.org/abs/2011.13263v4), [A Rockafellar-type theorem for non-traditional costs](https://arxiv.org/abs/2011.13263v4). It says: “We note that any set admitting a potential must be c-path-bounded, and this condition replaces c-cyclic monotonicity from the classical theory, i.e. when the cost is real-valued.”

**Sources:**

- [Shiri Artstein-Avidan, Shay Sadovsky, Katarzyna Wyczesany, A Rockafellar-type theorem for non-traditional costs, Advances in Mathematics 395 (2022)](https://arxiv.org/abs/2011.13263v4)

### Slicing carries metric properties from one dimension to every dimension

**Remember:** Average the one-dimensional costs, and the metric axioms carry over.

*True by definition.* MSC 49Q22 (Optimal transportation). arXiv cs.LG, math.OC. Level 4: research.

**Definition.** Unbalanced optimal transport compares positive measures whose total masses may differ. Sliced unbalanced transport projects both measures onto each line through the origin. It then averages the one-dimensional unbalanced costs over all directions.

**Problem.** Suppose the one-dimensional unbalanced cost is non-negative, symmetric and definite. Suppose also that its pth root satisfies the triangle inequality for some p ≥ 1. Then the sliced cost on ℝᵈ has the same properties.

**How the definition helps.** Each metric axiom for the sliced cost is an average of the same axiom on lines. Our own proof sketch of the triangle inequality adds Minkowski's inequality, the triangle inequality for pth-power averages. Definiteness needs one more fact. A finite measure is determined by its projections onto all lines, which is the Cramér–Wold theorem.

**Paper or page:** [Slicing Unbalanced Optimal Transport](https://arxiv.org/abs/2306.07176v2). It says: “Then, SUOT is respectively non-negative, symmetric and/or definite on ℳ₊(ℝᵈ) × ℳ₊(ℝᵈ).”

**Sources:**

- [Clément Bonet, Kimia Nadjahi, Thibault Séjourné, Kilian Fatras, Nicolas Courty, Slicing Unbalanced Optimal Transport, arXiv:2306.07176v2 (2025)](https://arxiv.org/abs/2306.07176v2)

### Weak optimal transport makes the Brenier–Strassen theorem a short corollary

**Remember:** Charge for the conditional mean, and Brenier–Strassen becomes one case.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49Q22 (Optimal transportation), 60B05, 52A41. arXiv math.PR, math.OC. Level 4: research.

**Definition.** Classical optimal transport moves a law μ to a law ν at least total cost. Weak optimal transport, due to Gozlan, Roberto, Samson and Tetali, lets the cost at x depend on the whole conditional law πₓ of the destination. A barycentric cost depends only on the mean of πₓ, for example \|x − mean(πₓ)\|².

**Problem.** The Brenier–Strassen theorem of Gozlan and Juillet concerns the quadratic barycentric problem for laws on ℝᵈ with finite second moments. In our own summary, the map x ↦ mean(πₓ) of an optimal coupling is unique μ-almost everywhere. It is the gradient of a convex function and is 1-Lipschitz, so it does not increase distances.

**How the definition helps.** Once the problem is a weak transport problem, the paper's general duality theorem applies to it directly. The abstract says that the authors use this to give a concise derivation of the Brenier–Strassen theorem. The general theorem gives strong duality and describes optimizers by a complementary slackness condition, as in classical transport. Proving that general theorem for non-linear costs is the real work (our own).

**Paper or page:** [The Fundamental Theorem of Weak Optimal Transport](https://arxiv.org/abs/2501.16316v1). It says: “As applications we provide concise derivations of the Brenier–Strassen theorem, the convex Kantorovich–Rubinstein formula and the structure theorem of entropic optimal transport.”

**Sources:**

- [Mathias Beiglböck, Gudmund Pammer, Lorenz Riess, Stefan Schrott, The Fundamental Theorem of Weak Optimal Transport, arXiv:2501.16316 (2025)](https://arxiv.org/abs/2501.16316v1)
- [Nathaël Gozlan, Cyril Roberto, Paul-Marie Samson, Prasad Tetali, Kantorovich duality for general transport costs and applications, Journal of Functional Analysis (2017)](https://doi.org/10.1016/j.jfa.2017.08.015)
- [Nathaël Gozlan, Nicolas Juillet, On a mixture of Brenier and Strassen theorems, Proceedings of the London Mathematical Society (2020)](https://doi.org/10.1112/plms.12302)

### The Helmholtz operator decides which equations come from a Lagrangian

**Remember:** An equation comes from a Lagrangian exactly when the next operator kills it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49S05 (Variational principles of physics), 58A20, 58E30. arXiv math.DG, math-ph. Level 4: research.

**Definition.** The horizontal de Rham complex of a field bundle is the de Rham complex in the spacetime directions, for forms that depend on the fields and their derivatives. The Euler–Lagrange complex extends this complex by two more maps: first the Euler–Lagrange derivative, which sends a Lagrangian to its equations of motion, then the Helmholtz operator. On a trivial vector bundle over Minkowski spacetime, this complex is exact (the image of each map is the kernel of the next).

**Problem.** This is the inverse problem of the calculus of variations. Given a system of partial differential equations, decide whether it is the Euler–Lagrange equation of some Lagrangian.

**How the definition helps.** Exactness of the complex turns the inverse problem into a single check. A source form (a system of equations written as a form) is variational, that is, it comes from a Lagrangian, exactly when the Helmholtz operator sends it to zero. The same exactness says that a Lagrangian with zero Euler–Lagrange form is a total derivative. The real content is the exactness theorem for the variational bicomplex (Anderson, theorem 5.1, cited on the page). This theorem holds for trivial bundles and needs topological corrections in general (Anderson and Duchamp). The page does not name the inverse problem; that link is our own.

**nLab:** [A first idea of quantum field theory -- Lagrangians](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Lagrangians). It says: “By definition of exact sequence, the Helmholtz operator detects whether a partial differential equation on field histories, induced by a variational differential form”

**Sources:**

- [Ian M. Anderson, Thomas Duchamp, On the existence of global variational principles, American Journal of Mathematics 102 (1980) 781–868](https://doi.org/10.2307/2374195)
