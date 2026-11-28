### For 0 &lt; p ≤ 1, dropping the p-th root gives a metric

**Remember:** For small p, drop the root and the triangle inequality comes back.

*Rules out counterexamples. Confidence: medium.* MSC 46B20 (Geometry and structure of normed linear spaces), 54E35. arXiv math.FA. Level 1: early undergraduate.

**Definition.** For 0 &lt; p ≤ 1, ℓᵖ is the space of scalar sequences x with ∑ᵢ \|xᵢ\|ᵖ finite, and d(x,y) = ∑ᵢ \|xᵢ − yᵢ\|ᵖ, with no p-th root. For such p the map t ↦ tᵖ is concave on \[0,∞), so \|a + b\|ᵖ ≤ \|a\|ᵖ + \|b\|ᵖ.

**Problem.** The function d is a metric on ℓᵖ. For 0 &lt; p &lt; 1, taking its p-th root breaks the triangle inequality.

**How the definition helps.** Summing \|a + b\|ᵖ ≤ \|a\|ᵖ + \|b\|ᵖ over coordinates gives the triangle inequality for d, and symmetry and separation hold term by term (our own). For 0 &lt; p &lt; 1, the rooted distance between two distinct coordinate unit vectors is 2¹⁄ᵖ &gt; 2, while the route through zero has length 2 (our own).

**nLab:** [p-norm](https://ncatlab.org/nlab/show/p-norm). It says: “A variant definition for 0 &lt; p ≤ 1 (which agrees with the usual definition for p = 1, preserving continuity in p) leaves out the pth root; then the result satisfies the triangle inequality (and indeed is a metric)”

**Sources:** none listed. No primary source with a working link was found.

### Pythagoras is trivial in an inner product space

**Remember:** Length and perpendicularity share one inner product; Pythagoras is expanding a square.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 51F20. arXiv math.FA, math.MG. Level 1: early undergraduate.

**Definition.** An inner product space is a real vector space with a symmetric, positive definite bilinear form ⟨−,−⟩. Length and perpendicularity both come from it: \|v\| = √⟨v,v⟩, and v ⊥ w means ⟨v,w⟩ = 0.

**Problem.** In an inner product space, if v ⊥ w then \|v + w\|² = \|v\|² + \|w\|².

**How the definition helps.** Expanding gives \|v + w\|² = \|v\|² + 2⟨v,w⟩ + \|w\|², and the cross term is zero when v ⊥ w. The nLab notes that the real work lies in showing that Euclidean geometry is an inner product space.

**nLab:** [Pythagorean theorem](https://ncatlab.org/nlab/show/Pythagorean+theorem). It says: “That the Pythagorean Theorem holds in an inner product space is trivial; all that matters is establishing that one is, in fact, working in an inner product space.”

**Sources:** none listed. No primary source with a working link was found.

### Continuity makes the integral of \|x\| a norm, with no identification needed

**Remember:** A continuous function that is nonzero somewhere is nonzero on a whole interval.

*Rules out counterexamples.* MSC 46E05 (Lattices of continuous, differentiable or analytic functions), 46B20, 26A42. arXiv math.FA, math.CA. Level 1: early undergraduate.

**Definition.** For real a &lt; b, C\[a,b\] is the space of continuous real functions on \[a,b\], with ‖x‖₁ = ∫ₐᵇ \|x(t)\| dt. A continuous function that is nonzero at one point is nonzero on a whole interval around it.

**Problem.** On C\[a, b\], ‖x‖₁ = ∫ₐᵇ \|x(t)\| dt is a norm. On all integrable functions it is only a seminorm.

**How the definition helps.** If x(t₀) ≠ 0, then \|x\| &gt; \|x(t₀)\|/2 on an interval, so ‖x‖₁ &gt; 0, and the other norm axioms come from the integral (our own). On all integrable functions, the indicator of one point is nonzero but has ‖x‖₁ = 0, so one must identify functions equal almost everywhere, as in L¹ (our own).

**Paper or page:** [1-Seminorm on Continuous on Closed Interval Real-Valued Functions is Norm](https://proofwiki.org/wiki/1-Seminorm_on_Continuous_on_Closed_Interval_Real-Valued_Functions_is_Norm). It says: “Let ‖x‖₁ := ∫ₐᵇ \|x(t)\| dt be the 1-seminorm. Then ‖·‖₁ is a norm on C\[a, b\].”

**Sources:**

- [ProofWiki, 1-Seminorm on Continuous on Closed Interval Real-Valued Functions is Norm](https://proofwiki.org/wiki/1-Seminorm_on_Continuous_on_Closed_Interval_Real-Valued_Functions_is_Norm)

### The graph norm reduces the closed graph theorem to inversion

**Remember:** Make the image part of the norm, then compare the two norms.

*True by definition.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including B-, B<sub>r</sub>-completeness)), 47A05. arXiv math.FA. Level 2: later undergraduate.

**Definition.** The graph norm of a linear map T from a normed space X to a normed space Y is ‖x‖ + ‖Tx‖ on X. It is the norm of the pair (x,Tx), so for Banach X and Y the space X is complete in this norm exactly when the graph is closed in X × Y (our own).

**Problem.** A linear map between Banach spaces is bounded if its graph, the set of pairs (x,Tx), is closed.

**How the definition helps.** A closed graph makes X complete in the graph norm, and the identity from that space to X is a bounded bijection between Banach spaces (our own). The bounded inverse theorem gives ‖x‖ + ‖Tx‖ ≤ C‖x‖, so T is bounded.

**Paper or page:** [Closed Graph Theorem/Banach Space](https://proofwiki.org/wiki/Closed_Graph_Theorem/Banach_Space). It says: “is closed in the direct product X × Y equipped with the direct product norm”

**Sources:** none listed. No primary source with a working link was found.

### The dual unit ball recovers the norm of every vector

**Remember:** Test with functionals that never stretch, and one test reaches the norm.

*Makes the theorem clean to state or prove.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The dual unit ball of a normed space is the set of linear scalar-valued maps f with \|f(y)\| ≤ ‖y‖ for every vector y. These are the tests that never report more than the norm, and such maps are automatically bounded.

**Problem.** The norm of a vector in a normed space is the supremum of \|f(x)\| over the dual unit ball.

**How the definition helps.** Every f in the ball gives \|f(x)\| ≤ ‖x‖, so the supremum is at most ‖x‖ (our own). For nonzero x, the Hahn–Banach theorem extends tx ↦ t‖x‖ from the line through x to a map in the ball, which attains ‖x‖.

**Paper or page:** [Norm in terms of Normed Dual Space](https://proofwiki.org/wiki/Norm_in_terms_of_Normed_Dual_Space). It says: “$\\ds \\norm x = \\sup\_{f \\in B<sub>X<sup>\\ast</sub>^-}</sup> \\cmod {\\map f x}$”

**Sources:** none listed. No primary source with a working link was found.

### The quotient norm identifies its dual with the annihilator

**Remember:** A functional that kills M sees only cosets.

*Makes the theorem clean to state or prove.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The annihilator of a subspace M is the set of bounded functionals on X that vanish on M, so each one is constant on every coset x + M. The quotient norm of x + M is the infimum of ‖x + m‖ over m in M.

**Problem.** For a closed subspace M of a normed space X, the dual of X/M is isometrically isomorphic to the annihilator of M, by a linear bijection that preserves norms.

**How the definition helps.** A functional that vanishes on M is constant on cosets, so it is a functional on X/M, and composing with the quotient map reverses this (our own proof). Since f(x) = f(x + m) for every m in M, taking the infimum over representatives shows that the two norms agree.

**Paper or page:** [Normed Dual Space of Normed Quotient Vector Space is Isometrically Isomorphic to Annihilator](https://proofwiki.org/wiki/Normed_Dual_Space_of_Normed_Quotient_Vector_Space_is_Isometrically_Isomorphic_to_Annihilator). It says: “(X/Y)∗ is isometrically isomorphic to Y⊥”

**Sources:** none listed. No primary source with a working link was found.

### The operator norm makes bounded maps a complete space

**Remember:** One error bound for the whole unit ball survives the limit.

*Makes the theorem clean to state or prove.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 47A05. arXiv math.FA. Level 2: later undergraduate.

**Definition.** The operator norm of a bounded linear map T is the supremum of ‖Tx‖ over ‖x‖ ≤ 1. So it gives one error bound for the whole unit ball at once.

**Problem.** Bounded linear maps from a normed space to a Banach space form a Banach space in the operator norm.

**How the definition helps.** A Cauchy sequence of maps is uniformly Cauchy on the unit ball, so completeness of the target gives a linear pointwise limit (our own proof). The bound ‖Tₙx − Tₘx‖ ≤ ε for ‖x‖ ≤ 1 survives the limit in m. So the limit is bounded and the maps converge to it in operator norm.

**nLab:** [Banach space](https://ncatlab.org/nlab/show/Banach+space). It says: “This will be a Banach space if (and, except for degenerate cases of V, only if) W is a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Closed subspaces make distance a quotient norm

**Remember:** Distance zero from a closed set means being in it.

*Rules out counterexamples.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The quotient seminorm of a coset x + M is the distance from x to the subspace M. It is zero exactly when x lies in the closure of M.

**Problem.** For a closed subspace M of a normed space, distance to M defines a norm on the cosets.

**How the definition helps.** When M is closed, distance zero puts x in M, so only the zero coset has norm zero (our own proof). Scaling and the triangle inequality give the other norm laws. Without closedness, take M to be the finitely supported sequences in ℓ², where truncation shows that every sequence has distance zero from M.

**Paper or page:** [Quotient Norm is Norm](https://proofwiki.org/wiki/Quotient_Norm_is_Norm). It says: “Then $\\norm {\\, \\cdot \\,}<sub>X/N</sub>$ is indeed a norm.”

**Sources:** none listed. No primary source with a working link was found.

### Completeness lets pointwise bounds control operator norms

**Remember:** Bounded at each vector, on a complete space, means uniformly bounded.

*Rules out counterexamples.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A Banach space is a normed space in which every Cauchy sequence converges, so the Baire category theorem applies to it. A family of operators is pointwise bounded when its values at each fixed vector form a bounded set.

**Problem.** A pointwise bounded family of bounded linear operators from a Banach space into a normed space has uniformly bounded operator norms.

**How the definition helps.** Completeness lets the Baire category theorem find a ball on which the whole family is bounded, and subtraction and scaling move this bound to the unit ball (our own proof). Without completeness the theorem fails. On finitely supported sequences with the supremum norm, the functionals x ↦ nxₙ are bounded at each sequence, yet their norms are n.

**Paper or page:** [From Uniform Boundedness to the Boundary Between Convergence and Divergence](https://arxiv.org/abs/2011.13871). It says: “Let X be a Banach space and let Y be a normed space. Consider a family F of bounded linear operators T : X → Y. If F is pointwise bounded, then it is uniformly bounded.”

**Sources:**

- [Stefan Banach and Hugo Steinhaus, Sur le principe de la condensation de singularités, Fundamenta Mathematicae 9 (1927), 50–61.](https://doi.org/10.4064/fm-9-1-50-61)

### Quotient norms make the quotient map open

**Remember:** A short coset always has a short representative.

*True by definition.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The quotient norm of a coset x + M, for a closed subspace M, is the infimum of the norms of its vectors. So a coset has norm below r exactly when some vector in it has norm below r (our own).

**Problem.** The map sending vectors to cosets of a closed subspace is open in the quotient norm. That is, it sends open sets to open sets.

**How the definition helps.** The definition says that the quotient map sends the open ball of radius r about 0 onto the open ball of radius r about 0 (our own proof). Translation moves this to balls about any point (our own argument), and open sets are unions of balls. No completeness or open mapping theorem is needed.

**Paper or page:** [Quotient Mapping Maps Unit Open Ball in Normed Vector Space to Unit Open Ball in Normed Quotient Vector Space](https://proofwiki.org/wiki/Quotient_Mapping_Maps_Unit_Open_Ball_in_Normed_Vector_Space_to_Unit_Open_Ball_in_Normed_Quotient_Vector_Space). It says: “\\map \\pi {B<sub>X</sub>} = B<sub>X/N</sub>”

**Sources:** none listed. No primary source with a working link was found.

### The quotient norm lets close cosets lift to close vectors

**Remember:** Short coset differences lift to short vectors, which X can sum.

*Makes the theorem clean to state or prove.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The quotient norm of a coset x + M, for a closed subspace M, is the infimum of the norms of its representatives. So every coset of norm below r has a representative of norm below r.

**Problem.** The quotient of a Banach space by a closed subspace is again a Banach space.

**How the definition helps.** Short cosets lift to short vectors, so a fast Cauchy sequence of cosets lifts to a convergent series in X (our own proof). Choose a subsequence whose successive differences have norm below 2⁻ⁿ, and lift those differences to vectors with the same bounds. Completeness of X sums the lifts, and their coset is the limit of the subsequence, hence of the whole sequence.

**Wikipedia:** [Quotient space (linear algebra)](https://en.wikipedia.org/wiki/Quotient_space_%28linear_algebra%29). It says: “If X is a Banach space and M is a closed subspace of X, then the quotient X/M is again a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Dense orthonormal spans turn Bessel’s bound into equality

**Remember:** A dense span leaves no part of the squared norm uncounted.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** An orthonormal basis is a set of mutually perpendicular unit vectors whose finite linear combinations are dense, so they approximate every vector as closely as we like.

**Problem.** For a countable orthonormal basis of a Hilbert space, the sum of squared magnitudes of the inner products with a vector equals its squared norm.

**How the definition helps.** Pythagoras writes ‖x‖² as the sum of the first n squared coordinates plus the squared distance from x to their span (our own proof). The projection is the closest point in that span, and dense span makes this distance tend to zero. The limit gives equality.

**Wikipedia:** [Orthonormal basis](https://en.wikipedia.org/wiki/Orthonormal_basis). It says: “An orthonormal basis is an orthonormal system with the additional property that the linear span of S is dense in H.”

**Sources:** none listed. No primary source with a working link was found.

### Dense span lets every orthonormal set extend to a basis

**Remember:** Nothing left perpendicular means the span is dense.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** An orthonormal basis is a set of mutually perpendicular unit vectors whose finite linear combinations are dense. In a Hilbert space this holds exactly when no nonzero vector is perpendicular to all of them.

**Problem.** Every orthonormal set in a Hilbert space extends to an orthonormal basis.

**How the definition helps.** Zorn’s lemma extends the given set to a maximal orthonormal set. A maximal set has no nonzero vector perpendicular to all its members, since normalizing one would enlarge the set. In a Hilbert space this makes the span dense, by subtracting the projection onto the closed span (our own argument).

**nLab:** [orthogonal basis](https://ncatlab.org/nlab/show/orthogonal+basis). It says: “any maximal orthogonal set (which must exist by an application of Zorn's lemma) is necessarily a basis in the topological sense.”

**Sources:** none listed. No primary source with a working link was found.

### Inner product tests give bounded sequences weakly convergent subsequences

**Remember:** Weak convergence asks only that each inner product sequence converge.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A sequence converges weakly to x when, for each fixed test vector y, its inner products with y converge to ⟨x, y⟩. So it asks only that some sequences of numbers converge, and bounded sequences of numbers have convergent subsequences.

**Problem.** Every bounded sequence in a Hilbert space has a weakly convergent subsequence.

**How the definition helps.** Each test vector gives a bounded sequence of numbers, so a diagonal subsequence converges against a countable dense set in the closed span of the sequence (our own proof). The uniform bound extends this to every test vector in the span, and the Riesz representation theorem gives the limit x. Test vectors perpendicular to the span see only zeros.

**Wikipedia:** [Weak convergence (Hilbert space)](https://en.wikipedia.org/wiki/Weak_convergence_%28Hilbert_space%29). It says: “every bounded sequence xₙ in a Hilbert space H contains a weakly convergent subsequence.”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal projection gives Bessel’s inequality

**Remember:** The projection is one leg of a right triangle with hypotenuse x.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The orthogonal projection of x onto a finite-dimensional subspace is the point p in it for which x − p is perpendicular to the subspace. For orthonormal vectors e₁, …, eₙ spanning it, p = ∑ ⟨x, eᵢ⟩eᵢ.

**Problem.** For a countable orthonormal set in an inner product space, the sum of squared coordinate magnitudes never exceeds the squared norm of the vector.

**How the definition helps.** Since x − p is perpendicular to p, Pythagoras gives ‖x‖² = ‖p‖² + ‖x − p‖² ≥ ∑ᵢ₌₁ⁿ \|⟨x, eᵢ⟩\|² (our own proof). So every partial sum is at most ‖x‖², and the series is too.

**Paper or page:** [Bessel's Inequality](https://proofwiki.org/wiki/Bessel's_Inequality). It says: “∑ₙ₌₁∞ \|⟨h,eₙ⟩\|² ≤ ‖h‖²”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing at infinity means continuous at the added point

**Remember:** Small outside a compact set means near zero near infinity.

*True by definition. Confidence: medium.* MSC 46E05 (Lattices of continuous, differentiable or analytic functions), 54D35. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** A continuous scalar function f on a locally compact Hausdorff space X vanishes at infinity if, for every ε &gt; 0, the set where \|f\| ≥ ε is compact. So \|f\| &lt; ε on the complement of a compact set, and that complement is a neighbourhood of the added point p of the one-point compactification.

**Problem.** Let X be locally compact and Hausdorff. A continuous function that vanishes at infinity extends continuously to X ∪ {p} with value 0 at p, and these functions form a Banach space under the supremum norm.

**How the definition helps.** For each ε, the definition gives a neighbourhood of p on which the extended function has size below ε, which is continuity at p (our own proof). Extension keeps the supremum norm, so these functions form the continuous functions on the compact space X ∪ {p} that vanish at p (our own proof). Uniform limits keep the value 0 at p, so this subspace is closed and complete.

**Paper or page:** [Extension of Continuous Complex-Valued Function Vanishing at Infinity to Alexandroff Extension is Continuous](https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous), [Space of Continuous Functions on Locally Compact Hausdorff Space Vanishing at Infinity is Banach Space](https://proofwiki.org/wiki/Space_of_Continuous_Functions_on_Locally_Compact_Hausdorff_Space_Vanishing_at_Infinity_is_Banach_Space). It says: “Let f : X → ℂ be a continuous complex-valued function vanishing at infinity. Define f\* : X\* → ℂ by taking”

**Sources:**

- [ProofWiki, Extension of Continuous Complex-Valued Function Vanishing at Infinity to Alexandroff Extension is Continuous](https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous)
- [ProofWiki, Space of Continuous Functions on Locally Compact Hausdorff Space Vanishing at Infinity is Banach Space](https://proofwiki.org/wiki/Space_of_Continuous_Functions_on_Locally_Compact_Hausdorff_Space_Vanishing_at_Infinity_is_Banach_Space)

### Measuring derivatives as well makes the space of differentiable functions complete

**Remember:** Keep derivatives close too, so the limit keeps a derivative.

*Rules out counterexamples.* MSC 46E15 (Banach spaces of continuous, differentiable or analytic functions). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The C¹ norm of a continuously differentiable function f on \[0,1\] is sup\|f\| + sup\|f′\|. So a sequence converges in this norm exactly when both the functions and their derivatives converge uniformly.

**Problem.** Continuously differentiable functions on \[0,1\] form a Banach space in the norm sup\|f\| + sup\|f′\|.

**How the definition helps.** A Cauchy sequence in this norm has a uniform limit g for the functions and h for the derivatives (our own proof). Passing to the limit in fₙ(x) = fₙ(0) + ∫₀ˣ fₙ′ gives g′ = h, which is continuous. With only the supremum norm, √((x − ½)² + 1/n) converges uniformly to \|x − ½\|, which has a corner.

**Paper or page:** [Space of Continuously Differentiable on Closed Interval Real-Valued Functions with C<sup>1</sup> Norm is Banach Space](https://proofwiki.org/wiki/Space_of_Continuously_Differentiable_on_Closed_Interval_Real-Valued_Functions_with_C^1_Norm_is_Banach_Space). It says: “is a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Separating points is all that Stone–Weierstrass needs

**Remember:** To approximate everything, the algebra must tell every two points apart.

*Makes the theorem clean to state or prove.* MSC 46E25 (Rings and algebras of continuous, differentiable or analytic functions), 41A65. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** A set A of functions on X separates points when, for any two different points x and y of X, some function p in A has p(x) ≠ p(y).

**Problem.** Let X be a compact Hausdorff space, and let C(X, ℝ) be the algebra of continuous real functions on X. A subalgebra of C(X, ℝ) that contains a non-zero constant function is dense in the uniform norm exactly when it separates points.

**How the definition helps.** The real Stone–Weierstrass theorem proves that separating points is enough. It is also needed, by our own argument: uniform limits keep p(x) = p(y) at any pair that A fails to separate, while continuous functions on a compact Hausdorff space separate all pairs.

**Wikipedia:** [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem). It says: “It turns out that the crucial property that a subalgebra must satisfy is that it separates points”

**Sources:**

- [M. H. Stone, Applications of the theory of Boolean rings to general topology, Trans. Amer. Math. Soc. 41 (1937), 375–481, doi:10.1090/S0002-9947-1937-1501905-7](https://doi.org/10.1090/S0002-9947-1937-1501905-7)

### Defining Lᵖ by completion gives completeness for finite p

**Remember:** Complete the simple functions, then name the limits as functions.

*True by definition.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 1 ≤ p &lt; ∞, take the simple functions that vanish outside a set of finite measure, with norm (∫\|f\|ᵖ)¹ᐟᵖ, identifying functions equal almost everywhere. Lᵖ is the completion of this normed space, so every Cauchy sequence has a limit by construction (our own).

**Problem.** For 1 ≤ p &lt; ∞, Lᵖ is complete: every sequence that is Cauchy in its norm has a limit in the space.

**How the definition helps.** A completion is complete by construction, so the theorem is immediate (our own). The work moves to identifying the completion with measurable functions of finite norm, up to equality almost everywhere (our own). That step uses a subsequence with summable differences, Minkowski’s inequality and monotone convergence (our own).

**Wikipedia:** [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “By construction of the integral, the vector space of integrable simple functions is dense in Lᵖ(S, Σ, μ).”

**Sources:** none listed. No primary source with a working link was found.

### Grading Lebesgue spaces by 1/p makes Hölder's inequality a graded multiplication

**Remember:** Use 1/p as the degree, and degrees add when you multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 26D15. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** On a fixed measure space, give the space M(a) = L¹⁄ᵃ degree a for each real a &gt; 0, and give M(0) = L∞ degree 0. So the degree of Lᵖ is the reciprocal exponent 1/p.

**Problem.** If f lies in M(a) and g lies in M(b), then fg lies in M(a + b). In the usual indexing this is Hölder's rule 1/p + 1/q = 1/r.

**How the definition helps.** Hölder’s inequality ‖fg‖ᵣ ≤ ‖f‖ₚ‖g‖<sub>q</sub> holds when 1/r = 1/p + 1/q, and in degrees this says that multiplication adds degrees. Our own endpoint check bounds a factor of degree zero by its essential supremum.

**nLab:** [Lebesgue space](https://ncatlab.org/nlab/show/Lebesgue+space). It says: “If we take M<sup>p=L^</sup>(1/p), the spaces M<sup>p</sup> form a C-graded algebra, where C denotes complex numbers. This is a conceptual explanation for the appearance of formulas like 1/p+1/q=1/r in Hölder's inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Lᵖ treats functions that agree almost everywhere as equal

**Remember:** In Lᵖ, what happens on a set of measure zero does not count.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)). arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** For 1 ≤ p &lt; ∞, Lᵖ(S,μ) consists of measurable functions f with ∫\|f\|ᵖ dμ finite, where two functions count as equal when they agree almost everywhere. This identification makes ∫\|f\|ᵖ = 0 happen only for f = 0.

**Problem.** The quantity ‖f‖ₚ = (∫\|f\|ᵖ)¹ᐟᵖ is a norm. Lᵖ is complete for this norm, so it is a Banach space (the Riesz–Fischer theorem).

**How the definition helps.** Without the identification, a function that is nonzero only on a null set would have norm zero, so ‖·‖ₚ would be only a seminorm. In our own argument, Minkowski’s inequality gives the triangle inequality and the Riesz–Fischer theorem gives completeness.

**Wikipedia:** [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “Hence, strictly speaking Lᵖ(S, μ) consists of equivalence classes of functions.”

**Sources:**

- [F. Riesz, Untersuchungen über Systeme integrierbarer Funktionen, Math. Ann. 69 (1910), 449–497, doi:10.1007/BF01457637](https://doi.org/10.1007/BF01457637)

### Measured in mean square, every Fourier series converges

**Remember:** Measure the error by its energy, and Fourier series always converge.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 42A20. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** A sequence of functions gₙ converges to f in mean square, or in the L² norm, when the integral of the squared error ∫\|gₙ − f\|² tends to 0. This norm comes from an inner product, so projections and Pythagoras apply.

**Problem.** On the circle with Lebesgue measure, the Fourier series of every square-integrable function converges to that function in the L² norm.

**How the definition helps.** In the L² norm, the Fourier partial sums are orthogonal projections onto trigonometric polynomials, whose span is dense, so they converge (our own remark). The Riesz–Fischer theorem gives this convergence. Pointwise the statement fails, since some continuous functions have Fourier series that diverge at some points.

**Wikipedia:** [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series), [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “According to the Riesz–Fischer theorem, if ƒ is square-integrable then S<sub>N</sub>(f) converges to ƒ in the L²-norm”

**Sources:**

- [L. Carleson, On convergence and growth of partial sums of Fourier series, Acta Math. 116 (1966), 135–157, doi:10.1007/BF02392815 (for the pointwise question)](https://doi.org/10.1007/BF02392815)

### The Lebesgue integral makes L² complete

**Remember:** Riemann lets Fourier limits fall out; Lebesgue keeps them.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 46C05. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** L² consists of the Lebesgue-measurable functions f with Lebesgue integral ∫\|f\|² finite, identified when they agree almost everywhere, with inner product ⟨f,g⟩ = ∫ f̄g. Using the Lebesgue integral admits limit functions that are not Riemann integrable.

**Problem.** L² is complete (Riesz–Fischer, 1907). So every series in an orthonormal system with square-summable coefficients has a sum in L².

**How the definition helps.** The Riesz–Fischer theorem proves completeness from the convergence theorems of the Lebesgue integral. In our own deduction, orthonormality makes the squared norm of each tail of the series equal the matching sum of squared coefficients, so the partial sums are Cauchy and converge. With the Riemann integral, the limit can fail to be integrable.

**Wikipedia:** [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space). It says: “The Lebesgue integral is essential to ensure completeness: on domains of real numbers, for instance, not enough functions are Riemann integrable.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiating a step gives delta

**Remember:** Move the derivative to the test function and read the jump.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions), 01A60. arXiv math.FA, math.HO. Level 2: later undergraduate.

**Definition.** A locally integrable function f defines a distribution T(φ) = ∫ fφ on smooth compactly supported test functions φ. Its derivative moves the derivative onto the test function: T′(φ) = −T(φ′).

**Problem.** The distributional derivative of the unit step is the Dirac delta, the rule that evaluates a test function at zero.

**How the definition helps.** For the unit step, T′(φ) = −∫₀∞ φ′(x) dx (our own calculation). The fundamental theorem of calculus and compact support make this equal to φ(0).

**Wikipedia:** [Dirac delta function](https://en.wikipedia.org/wiki/Dirac_delta_function). It says: “For instance, it is the distributional derivative of the Heaviside step function.”

**Sources:**

- [Laurent Schwartz, Généralisation de la notion de fonction et de dérivation, théorie des distributions (1948)](https://doi.org/10.1007/BF03020757)

### Local convexity is what the Hahn–Banach theorem needs

**Remember:** Convex neighbourhoods give seminorms, and seminorms let functionals extend.

*Rules out counterexamples. Confidence: medium.* MSC 46A03 (General theory of locally convex spaces), 46A22. arXiv math.FA. Level 3: graduate.

**Definition.** A locally convex space is a topological vector space whose topology comes from a family of seminorms, or equivalently has a base of convex neighbourhoods of zero. So every continuous linear functional on a subspace is bounded by a constant times one continuous seminorm.

**Problem.** In a Hausdorff locally convex space, every continuous linear functional on a subspace extends to a continuous linear functional on the whole space. So the continuous linear functionals separate points.

**How the definition helps.** Hahn–Banach extends the functional with the same seminorm bound, so the extension is continuous. For separation, Hausdorffness gives a seminorm p with p(x) &gt; 0, so the functional tx ↦ t·p(x) on the line through x extends. In our own counterexample, Lᵖ\[0,1\] with 0 &lt; p &lt; 1 has zero continuous dual, so no nonzero functional on a line extends.

**Wikipedia:** [Locally convex topological vector space](https://en.wikipedia.org/wiki/Locally_convex_topological_vector_space). It says: “They are not locally convex, since the only convex neighborhood of zero is the whole space.”

**Sources:**

- [N. J. Kalton, Basic sequences in F-spaces and their applications, Proceedings of the Edinburgh Mathematical Society 19 (1974) 151–167](https://doi.org/10.1017/S0013091500010282)

### Barrelled spaces are the spaces where uniform boundedness holds

**Remember:** Every barrel is a neighbourhood, so pointwise bounded families are equicontinuous.

*True by definition.* MSC 46A08 (Barrelled spaces, bornological spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A barrel is a closed convex set B that is balanced (tB ⊆ B for \|t\| ≤ 1) and absorbing (every vector lies in some multiple of B). A locally convex space is barrelled when every barrel is a neighbourhood of zero. For a pointwise bounded family of continuous functionals, the set where all of them have size at most 1 is a barrel (our own sketch).

**Problem.** In a barrelled locally convex space, every family of continuous linear functionals that is bounded at each point is equicontinuous.

**How the definition helps.** That set is a neighbourhood of zero by the definition, and this is equicontinuity (our own sketch). So the definition builds in the step of the usual proof that needs completeness. The work moves to showing that Banach and Fréchet spaces are barrelled.

**Wikipedia:** [Barrelled space](https://en.wikipedia.org/wiki/Barrelled_space). It says: “It follows from the above two characterizations that in the class of locally convex TVS, barrelled spaces are exactly those for which the uniform boundedness principle holds.”

**Sources:**

- [N. Bourbaki, Sur certains espaces vectoriels topologiques, Annales de l'Institut Fourier 2 (1950), 5–16](https://doi.org/10.5802/aif.16)

### In bornological spaces, bounded linear maps are continuous by definition

**Remember:** Sets absorbing all bounded sets must be neighbourhoods of zero.

*True by definition.* MSC 46A08 (Barrelled spaces, bornological spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A set is bounded when every neighbourhood of zero absorbs it after scaling. A locally convex space is bornological when every convex balanced set that absorbs all bounded sets is a neighbourhood of zero.

**Problem.** A linear map from a bornological space into a locally convex space is continuous exactly when it sends bounded sets to bounded sets.

**How the definition helps.** If a linear map sends bounded sets to bounded sets, the preimage of a convex balanced neighbourhood of zero absorbs every bounded set (our own sketch). So the preimage is a neighbourhood of zero by the definition, and the map is continuous (our own sketch). The work moves to showing that metrizable spaces and their inductive limits are bornological.

**Wikipedia:** [Bornological space](https://en.wikipedia.org/wiki/Bornological_space). It says: “Bornological spaces are distinguished by the property that a linear map from a bornological space into any locally convex spaces is continuous if and only if it is a bounded linear operator.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclear spaces make the Schwartz kernel theorem true

**Remember:** Each seminorm sits nuclearly below a larger one, as in finite dimensions.

*Makes the theorem clean to state or prove.* MSC 46A11 (Spaces determined by compactness or summability properties (nuclear spaces, Schwartz spaces, Montel spaces, etc.)), 46A32, 46F05. arXiv math.FA. Level 3: graduate.

**Definition.** A locally convex space X is nuclear if each continuous seminorm p has a larger continuous seminorm q for which the natural map X<sub>q</sub> → X<sub>p</sub> is nuclear, a sum of rank-one maps whose norms have finite sum. Here X<sub>p</sub> is the completion of X modulo the vectors where p vanishes.

**Problem.** For open Euclidean sets Ω₁ and Ω₂, every continuous linear map from test functions on Ω₂ to distributions on Ω₁ comes from a unique distribution kernel in 𝒟′(Ω₁ × Ω₂). With strong dual topologies, this space is 𝒟′(Ω₁) ⊗̂ 𝒟′(Ω₂), the completed projective tensor product.

**How the definition helps.** Nuclearity makes the projective and injective tensor topologies agree (our own explanation). Test functions and distributions form nuclear spaces, so operators, kernels and completed tensor products describe one space (our own).

**Wikipedia:** [Nuclear space](https://en.wikipedia.org/wiki/Nuclear_space). It says: “Much of the theory of nuclear spaces was developed by Alexander Grothendieck while investigating the Schwartz kernel theorem”

**Sources:**

- [Grothendieck, A. (1955). Produits tensoriels topologiques et espaces nucléaires. Memoirs of the American Mathematical Society 16.](https://doi.org/10.1090/memo/0016)

### With the inductive limit topology every linear functional on polynomials is continuous

**Remember:** Continuity is tested on finite-dimensional pieces, where every linear map is continuous.

*True by definition. Confidence: medium.* MSC 46A13 (Spaces defined by inductive or projective limits (LB, LF, etc.)), 33C45. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** Give all polynomials 𝒫 the inductive limit topology, the finest topology in which each inclusion of 𝒫ₙ is continuous, where 𝒫ₙ is the polynomials of degree at most n with its usual topology. So a linear functional on 𝒫 is continuous exactly when it is continuous on every 𝒫ₙ.

**Problem.** Every linear functional on 𝒫, such as a moment functional of orthogonal polynomials, is continuous. For a basis Rₙ with deg Rₙ = n and dual basis aₙ, each functional u expands as u = ∑ ⟨u, Rₙ⟩ aₙ in the weak dual topology.

**How the definition helps.** Every linear functional is continuous on each finite-dimensional 𝒫ₙ, so it is continuous on 𝒫 by the definition. In our own proof of the expansion, each polynomial involves finitely many Rₙ, so its pairing with the partial sums is eventually constant.

**Paper or page:** [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1), [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1). It says: “Let 𝒫 = ind lim 𝒫ₙ, as in, and let 𝒫\* and 𝒫′ be the algebraic and the topological duals of 𝒫, respectively. Then 𝒫′ = 𝒫\*.”

**Sources:**

- [K. Castillo, J. Petronilho, Classical orthogonal polynomials revisited, arXiv:2110.00401 (2021)](https://arxiv.org/abs/2110.00401v1)

### The weak-\* topology makes the dual unit ball compact

**Remember:** Pointwise tests put the dual ball inside a compact product.

*Makes the theorem clean to state or prove.* MSC 46A20 (Duality theory for topological vector spaces), 46A50. arXiv math.FA. Level 3: graduate.

**Definition.** The weak-\* topology on the dual X′ of a normed space X is the topology with the fewest open sets in which each evaluation f ↦ f(x), for x in X, is continuous. So functionals converge exactly when they converge at each vector, as in a product of copies of the scalars.

**Problem.** The closed unit ball of the dual is weak-\* compact (the Banach–Alaoglu theorem). For separable X, every bounded sequence in the dual has a weak-\* convergent subsequence.

**How the definition helps.** The dual ball is then a subset of the product of the discs of radius ‖x‖, one for each x in X, which Tychonoff’s theorem makes compact (our own proof). Linearity is a set of closed conditions, so the ball is closed in that product. For separable X, evaluations at a countable dense set give a metric on the ball, so compactness gives convergent subsequences.

**Wikipedia:** [Banach–Alaoglu theorem](https://en.wikipedia.org/wiki/Banach%E2%80%93Alaoglu_theorem). It says: “This theorem is one example of the utility of having different topologies on the same vector space.”

**Sources:**

- [Alaoglu, L. (1940). Weak topologies of normed linear spaces. Annals of Mathematics 41(1), 252 ff.](https://doi.org/10.2307/1968829)

### The Minkowski gauge reduces separation to Hahn–Banach extension

**Remember:** The gauge turns a convex set into one inequality, p &lt; 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46A22 (Theorems of Hahn-Banach type; extension and lifting of functionals and operators), 46A55. arXiv math.FA. Level 3: graduate.

**Definition.** For an open convex set C containing 0 in a real normed space, the Minkowski gauge p(x) is the infimum of the t &gt; 0 with x in tC. It is sublinear, meaning p(x + y) ≤ p(x) + p(y) and p(sx) = sp(x) for s ≥ 0, and C is exactly the set where p &lt; 1.

**Problem.** If x₀ is outside C, there is a continuous linear functional f such that f(x) &lt; f(x₀) for every x in C.

**How the definition helps.** Separation becomes finding a linear f ≤ p with f(x₀) = 1, since then f &lt; 1 on C. Our own proof sets f(tx₀) = t on the line through x₀, which is at most p(tx₀) because p(x₀) ≥ 1, and extends it by the analytic Hahn–Banach theorem. A ball about 0 inside C bounds p by a multiple of the norm, so f is continuous.

**Paper or page:** [Minkowski Functional of Open Convex Set in Normed Vector Space recovers Set](https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_recovers_Set), [Minkowski Functional of Convex Absorbing Set is Sublinear](https://proofwiki.org/wiki/Minkowski_Functional_of_Convex_Absorbing_Set_is_Sublinear). It says: “Let C be an open convex subset of X with 0 ∈ C. Let p<sub>C</sub> be the Minkowski functional for C. Then: C = {x ∈ X : p<sub>C</sub>(x) &lt; 1}”

**Sources:** none listed. No primary source with a working link was found.

### Completeness is what makes the open mapping theorem true

**Remember:** Without completeness, a bounded bijection can have an unbounded inverse.

*Rules out counterexamples.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including B-, B<sub>r</sub>-completeness)), 47B01. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed space that is complete: every Cauchy sequence converges, so every series whose terms have summable norms has a sum. An open map sends open sets to open sets.

**Problem.** A bounded linear surjection between Banach spaces is open (the open mapping theorem). So a bounded linear bijection between Banach spaces has a bounded inverse.

**How the definition helps.** Completeness of the target gives the Baire category theorem, so the image of a ball is dense in some ball. Completeness of the domain then sums a series to make the image truly open. Without completeness it fails: on finitely supported sequences with the sup norm, T x = (x₁, x₂/2, x₃/3, …) is a bounded bijection whose inverse multiplies the n-th entry by n.

**Wikipedia:** [Open mapping theorem (functional analysis)](https://en.wikipedia.org/wiki/Open_mapping_theorem_%28functional_analysis%29). It says: “The statement of the theorem is no longer true if either space is assumed to be only a normed vector space”

**Sources:** none listed. No primary source with a working link was found.

### Local convexity gives compact convex sets their extreme points

**Remember:** Separating functionals push to the corners of a compact convex set.

*Rules out counterexamples.* MSC 46A55 (Convex sets in topological linear spaces; Choquet theory), 46A03. arXiv math.FA. Level 3: graduate.

**Definition.** A topological vector space is locally convex when every neighbourhood of zero contains a convex one, which in a Hausdorff space gives continuous linear functionals that separate points from closed convex sets. An extreme point of a convex set K is a point that is not strictly between two other points of K.

**Problem.** The Krein–Milman theorem says that a compact convex set in a Hausdorff locally convex space is the closed convex hull of its extreme points. In particular, a nonempty compact convex set has an extreme point.

**How the definition helps.** Local convexity supplies separating functionals, and in our own sketch the points of K where a functional is largest form a smaller closed face whose minimal members must be single points. Separating a point from the closed convex hull of these points would give a face that misses them. Roberts found a compact convex set with no extreme points in Lᵖ\[0,1\] with 0 &lt; p &lt; 1, which is not locally convex.

**Wikipedia:** [Krein–Milman theorem](https://en.wikipedia.org/wiki/Krein%E2%80%93Milman_theorem). It says: “The assumption of local convexity for the ambient space is necessary, because James Roberts (1977) constructed a counter-example for the non-locally convex space Lᵖ\[0, 1\] where 0 &lt; p &lt; 1.”

**Sources:**

- [M. Krein and D. Milman, On extreme points of regular convex sets, Studia Mathematica 9 (1940), 133–138](https://doi.org/10.4064/sm-9-1-133-138)
- [J. W. Roberts, A compact convex set with no extreme points, Studia Mathematica 60 (1977), 255–266](https://doi.org/10.4064/sm-60-3-255-266)

### Asking isometries to be onto makes them affine

**Remember:** Onto isometries of normed spaces cannot bend.

*Rules out counterexamples.* MSC 46B04 (Isometric theory of Banach spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A surjective isometry is a map onto the target that keeps all distances, so its inverse is an isometry too. An affine map keeps every weighted average of two points.

**Problem.** The Mazur–Ulam theorem says that a surjective isometry between real normed spaces is affine. So it is a real-linear map plus a translation.

**How the definition helps.** Midpoints can be described by distances alone, and the inverse lets the proof carry reflections through midpoints back and forth, so midpoints go to midpoints (our own account of the standard proof). Continuity then gives all weighted averages. Without surjectivity the theorem fails: in our own example, t ↦ (t, sin t) from ℝ into ℝ² with the maximum norm keeps distances but is not affine.

**Paper or page:** [Weighted composition operators preserving various Lipschitz constants](https://arxiv.org/abs/2306.12824v1). It says: “Every surjective isometry T: M→N between normed linear spaces is affine; namely, T(λx+(1−λ)y)= λTx+(1−λ)Ty, for all x,y∈M and 0≤λ≤1.”

**Sources:**

- [Weighted composition operators preserving various Lipschitz constants, arXiv:2306.12824 (2023)](https://arxiv.org/abs/2306.12824v1)

### Short linear maps make isomorphisms of Banach spaces isometries

**Remember:** Short both ways means neither stretch nor shrink.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46B04 (Isometric theory of Banach spaces), 18D15. arXiv math.FA, math.CT. Level 3: graduate.

**Definition.** In the category Ban, the morphisms between Banach spaces are the short linear maps, those with operator norm ‖f‖ ≤ 1, which never stretch a vector.

**Problem.** In Ban, the isomorphisms are exactly the surjective linear isometries. Ban also has all small limits and colimits and is symmetric monoidal closed.

**How the definition helps.** If f and its inverse are both short, then ‖x‖ = ‖f⁻¹fx‖ ≤ ‖fx‖ ≤ ‖x‖, so f keeps norms, and a surjective linear isometry has a short inverse. In our own description, ℓ∞ products, completed ℓ¹ sums, kernels and quotients by closed ranges give all limits and colimits. The projective tensor product gives the closed structure.

**nLab:** [Banach space](https://ncatlab.org/nlab/show/Banach+space), [Jordan-Banach algebra](https://ncatlab.org/nlab/show/Jordan-Banach+algebra). It says: “Another natural notion of isomorphism is a surjective linear isometry. In this case, we take a morphism to be a short linear map, or linear contraction: a linear map f such that ‖f‖ ≤ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Reflexivity uses the canonical map, so James' space is excluded

**Remember:** Reflexive means the evaluation map is onto, not merely some isomorphism.

*Rules out counterexamples.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces), 46B50. arXiv math.FA. Level 3: graduate.

**Definition.** The canonical map sends each x in a Banach space X to the functional 'evaluate at x' on the dual. X is reflexive when this particular map into the bidual is onto, and another isomorphism of X with its bidual does not count.

**Problem.** A Banach space is reflexive exactly when its closed unit ball is weakly compact (Kakutani’s theorem). In a reflexive space, bounded closed convex sets are weakly compact.

**How the definition helps.** The canonical map turns the weak topology of X into the weak-\* topology on its image (our own proof). If the map is onto, Banach–Alaoglu makes the ball weakly compact, and conversely Goldstine’s theorem makes the image of a weakly compact ball fill the bidual ball. James’ space is isometric to its bidual, but its canonical image has codimension one, so it is not reflexive.

**Wikipedia:** [Reflexive space](https://en.wikipedia.org/wiki/Reflexive_space). It says: “So importantly, for a Banach space to be reflexive, it is not enough for it to be isometrically isomorphic to its bidual; it is the canonical evaluation map in particular that has to be a homeomorphism.”

**Sources:**

- [R. C. James, A non-reflexive Banach space isometric with its second conjugate space, Proc. Nat. Acad. Sci. USA 37 (1951), 174–177](https://doi.org/10.1073/pnas.37.3.174)

### Completeness makes Schauder coordinates continuous

**Remember:** One expansion per vector, and completeness makes coefficients continuous.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Schauder basis of a Banach space, a normed space where every Cauchy sequence converges, is a sequence (eₙ) such that every vector x has exactly one scalar sequence (aₙ) with x = ∑ aₙeₙ in norm.

**Problem.** Each coordinate functional of a Schauder basis in a Banach space is bounded. It sends a vector to its coefficient at a fixed basis position.

**How the definition helps.** Coefficient sequences whose series converge form a Banach space under the largest norm of their partial sums, and summation maps it boundedly and bijectively onto X (our own proof). The bounded inverse theorem, which needs completeness, then makes each coefficient depend continuously on x. Our own incomplete example uses finite sequences in ℓ² with basis e₁ and e₁ + eₙ for n ≥ 2, where a unit vector can have first coefficient −√N.

**Paper or page:** [Coordinate Functionals Associated with Schauder Basis of Banach Space are Bounded](https://proofwiki.org/wiki/Coordinate_Functionals_Associated_with_Schauder_Basis_of_Banach_Space_are_Bounded). It says: “Then each linear functional eₙ∗ is bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Riesz bases give stable unique coefficients

**Remember:** Two bounds control both building and recovering a vector.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Riesz basis of a Hilbert space is a sequence (vₙ) with dense span whose finite sums satisfy A‖c‖₂ ≤ ‖∑ cₙvₙ‖ ≤ B‖c‖₂ for fixed constants A, B &gt; 0. So building a vector from coefficients, and reading them back, change sizes by bounded factors.

**Problem.** Every vector has a unique square-summable coefficient sequence in a Riesz basis. The map to coefficients and the map back are both bounded.

**How the definition helps.** The upper bound extends the map c ↦ ∑ cₙvₙ to all of ℓ², and the lower bound makes it injective with closed range and bounded inverse (our own proof). Dense span then makes the map onto. Our own counterexample vₙ = eₙ/n has dense span but no lower bound, since recovering eₙ needs coefficient n.

**Wikipedia:** [Riesz sequence](https://en.wikipedia.org/wiki/Riesz_sequence). It says: “is an orthonormal basis for H and U : H → H is a bounded bijective operator.”

**Sources:** none listed. No primary source with a working link was found.

### Unconditional convergence makes a sum independent of order by definition

**Remember:** Unconditional means the sum puts no condition on the order.

*Makes the theorem clean to state or prove.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces), 40A05. arXiv math.FA. Level 3: graduate.

**Definition.** A series in a normed space converges unconditionally when every reordering of its terms converges, all to the same sum.

**Problem.** In a finite-dimensional space, a series converges unconditionally exactly when it converges absolutely. Every infinite-dimensional Banach space has an unconditionally convergent series that does not converge absolutely (the Dvoretzky–Rogers theorem).

**How the definition helps.** This definition asks nothing about order, so it makes sense in every dimension and can be compared with absolute convergence. In finite dimensions, our own argument applies the scalar rearrangement theorem in each coordinate and uses equivalence of norms. Absolute convergence implies unconditional convergence in any Banach space, and the Dvoretzky–Rogers theorem shows the converse fails in infinite dimensions.

**Wikipedia:** [Unconditional convergence](https://en.wikipedia.org/wiki/Unconditional_convergence), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “A theorem of A. Dvoretzky and C. A. Rogers asserts that every infinite-dimensional Banach space has an unconditionally convergent series that is not absolutely convergent.”

**Sources:**

- [A. Dvoretzky and C. A. Rogers, Absolute and unconditional convergence in normed linear spaces, Proc. Natl. Acad. Sci. USA 36 (1950), 192–197, doi:10.1073/pnas.36.3.192](https://doi.org/10.1073/pnas.36.3.192)

### A normed space is complete exactly when absolutely convergent series converge

**Remember:** Complete means every series with summable norms has a sum.

*True by definition. Confidence: medium.* MSC 46B20 (Geometry and structure of normed linear spaces), 46B15. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed space in which every Cauchy sequence converges. A series ∑ aₙ converges absolutely when the number series ∑ ‖aₙ‖ converges, and this makes its partial sums Cauchy.

**Problem.** A normed vector space X is a Banach space if and only if every absolutely convergent series in X is convergent.

**How the definition helps.** Summable norms bound the tails, so the partial sums are Cauchy and converge in a Banach space (our own proof). Conversely, a Cauchy sequence has a subsequence whose successive differences have norm below 2⁻ⁿ, so the difference series converges and telescoping gives a limit. A Cauchy sequence with a convergent subsequence converges to the same limit.

**Paper or page:** [Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach), [Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach/Sufficient Condition](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach/Sufficient_Condition). It says: “every absolutely convergent series ∑ aₙ (n = 1 to ∞) is convergent.”

**Sources:**

- [ProofWiki, Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach)
- [ProofWiki, Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach/Sufficient Condition](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach/Sufficient_Condition)

### A strictly convex dual makes Hahn–Banach extensions unique

**Remember:** No flat pieces on the dual sphere, so only one extension fits.

*Rules out counterexamples.* MSC 46B20 (Geometry and structure of normed linear spaces), 46A22. arXiv math.FA. Level 3: graduate.

**Definition.** A normed space is strictly convex when its unit sphere contains no line segment, that is, ‖x + y‖ &lt; 2 for any two different unit vectors x and y. A Hahn–Banach extension of a functional f on a subspace is a functional on the whole space that agrees with f and has the same norm.

**Problem.** Let X be a Banach space with strictly convex dual X\*. Then every bounded linear functional on a subspace of X has exactly one Hahn–Banach extension. This applies, for example, to Lᵖ with 1 &lt; p &lt; ∞.

**How the definition helps.** The Hahn–Banach extensions of f form a convex set inside the sphere of radius ‖f‖ in X\*. A strictly convex sphere holds no segment, so this set is a single point (our own account of the proof). In our own example, ℝ² with norm \|a\| + \|b\| has the functional (t, 0) ↦ t extended by (a, b) ↦ a + cb for every c in \[−1, 1\].

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Let X be a Banach space with strictly convex dual X\*. Suppose U⊂X is a subspace and f:U→𝕂 a bounded linear functional. Then f has a unique Hahn–Banach extension in X\*.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### The ℓ¹ norm lets contractions on each summand extend to the sum

**Remember:** The ℓ¹ norm pays for every piece, bounding any summed image.

*True by definition.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** The ℓ¹ direct sum of Banach spaces Xᵢ consists of the families (xᵢ), with xᵢ in Xᵢ, whose norms have finite sum ∑ᵢ ‖xᵢ‖, and that sum is the norm.

**Problem.** Let each Tᵢ be a linear map of norm at most one from a Banach space Xᵢ into one Banach space Z. Then exactly one bounded linear map on the ℓ¹ sum agrees with every Tᵢ. It has norm at most one.

**How the definition helps.** For a family (xᵢ), the triangle inequality gives ‖∑ Tᵢxᵢ‖ ≤ ∑ ‖xᵢ‖, so the summed map has norm at most one. In our own argument, completeness of Z gives the sum, and density of finite families gives uniqueness.

**nLab:** [direct sum of Banach spaces](https://ncatlab.org/nlab/show/direct+sum+of+Banach+spaces). It says: “If short linear maps are taken as the morphisms in the category of Banach spaces, then the ℓ¹-direct sum is the coproduct, and the ℓ∞-direct sum is the product.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convexity gives unique nearest points in closed subspaces

**Remember:** Far-apart unit vectors have midpoints well inside the ball.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if, for each ε &gt; 0, some δ &gt; 0 makes the midpoint of any two unit vectors at least ε apart have norm at most 1 − δ. So two far-apart points of nearly equal length have a markedly shorter midpoint.

**Problem.** In a uniformly convex Banach space, such as Lᵖ with 1 &lt; p &lt; ∞, every point has exactly one closest point in each closed subspace.

**How the definition helps.** If two late terms of a minimizing sequence in the subspace were far apart, their midpoint would beat the minimum, so the sequence is Cauchy. Completeness and closedness put the limit in the subspace, and the same midpoint argument gives uniqueness. In our own counterexample with the maximum norm on ℝ², every (0, t) with \|t\| ≤ 1 is a nearest point to (1, 0) on the vertical axis.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Let Y be a closed subspace of Lᵖ (1&lt;p&lt;∞). Then, for any f∉Y there is a unique closest point g∈Y, to f”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### Uniform convexity is a two-vector test that gives reflexivity

**Remember:** One depth for every far-apart pair of unit vectors.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if, for each ε &gt; 0, some δ &gt; 0 makes the midpoint of any two unit vectors at least ε apart have norm at most 1 − δ. So far-apart unit vectors have midpoints well inside the ball, at a depth that depends only on how far apart they are.

**Problem.** Every uniformly convex Banach space is reflexive, meaning the natural map into its double dual is onto (the Milman–Pettis theorem). Clarkson showed that Lᵖ is uniformly convex for 1 &lt; p &lt; ∞, so these spaces are reflexive without computing their duals.

**How the definition helps.** The Milman–Pettis theorem turns this uniform midpoint bound into surjectivity of the canonical map to the bidual. Uniformity matters: in our own example, an equivalent strictly convex norm on ℓ¹ leaves it nonreflexive.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Any uniformly convex Banach space is reflexive.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)
- [J. A. Clarkson, Uniformly convex spaces, Trans. Amer. Math. Soc. 40 (1936) 396–414](https://doi.org/10.1090/s0002-9947-1936-1501880-4)

### Uniform convexity turns weak convergence with converging norms into norm convergence

**Remember:** Unit vectors whose midpoints approach the sphere must approach each other.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if, for each ε &gt; 0, some δ &gt; 0 makes the midpoint of any two unit vectors at least ε apart have norm at most 1 − δ. Equivalently, unit vectors whose midpoints have norms tending to 1 must get close to each other.

**Problem.** In a uniformly convex Banach space, such as Lᵖ with 1 &lt; p &lt; ∞, weak convergence xₙ → x (f(xₙ) → f(x) for every continuous linear functional f) together with ‖xₙ‖ → ‖x‖ gives ‖xₙ − x‖ → 0. So every uniformly convex space is a Riesz–Radon space, one where weak convergence with converging norms gives norm convergence.

**How the definition helps.** Weak convergence pushes the midpoints of the normalized vectors to the unit sphere, and uniform convexity then forces the vectors together (our own proof). For x ≠ 0, the unit vectors uₙ and u have midpoints converging weakly to u, so weak lower semicontinuity and the triangle inequality force their norms to 1. Then ‖uₙ − u‖ → 0, the converging norms give ‖xₙ − x‖ → 0, and the case x = 0 is immediate.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Every uniformly convex Banach space is a Riesz–Radon space.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### The approximation property makes compact operators limits of finite-rank operators

**Remember:** Approximate the identity uniformly on each compact set using finite-rank maps.

*True by definition.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 47B07. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space X has the approximation property if its identity can be approximated uniformly on compact sets by finite-rank maps: for every compact K ⊆ X and ε &gt; 0, some bounded finite-rank T on X moves each point of K by less than ε.

**Problem.** Suppose X is a Banach space with the approximation property. Every compact operator into X from a Banach space is an operator-norm limit of finite-rank operators.

**How the definition helps.** A compact operator S sends the unit ball into a set with compact closure K, so a finite-rank T that moves each point of K by less than ε gives ‖TS − S‖ ≤ ε (our own sketch). Since TS has finite rank, this is the theorem. Enflo’s 1973 example of a space without the property shows that the hypothesis is needed.

**Wikipedia:** [Approximation property](https://en.wikipedia.org/wiki/Approximation_property), [Compact operator](https://en.wikipedia.org/wiki/Compact_operator). It says: “a Banach space is said to have the approximation property (AP) if every compact operator is a limit of finite-rank operators. The converse is always true.”

**Sources:**

- [P. Enflo, A counterexample to the approximation problem in Banach spaces, Acta Mathematica 130 (1973), 309–317](https://doi.org/10.1007/BF02392270)
- [A. Grothendieck, Produits tensoriels topologiques et espaces nucléaires, Memoirs of the AMS 16 (1955)](https://doi.org/10.1090/memo/0016)

### The injective tensor norm keeps isometric embeddings isometric after tensoring

**Remember:** Unit tests on a subspace extend to the whole space.

*True by definition. Confidence: medium.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 46A22. arXiv math.FA. Level 3: graduate.

**Definition.** The injective norm of a tensor t is the supremum of \|(λ ⊗ μ)(t)\| over linear functionals λ and μ of norm at most one, and the injective tensor product is the completion in this norm. So the norm is found by testing with unit functionals alone, and Hahn–Banach extends such tests from subspaces.

**Problem.** Let V ⊆ X and W ⊆ Y be closed subspaces of Banach spaces. Then the injective tensor product of V and W sits isometrically inside that of X and Y. The projective tensor product does not have this property in general.

**How the definition helps.** Hahn–Banach extends each unit test functional on V or W to X or Y, and restriction keeps tests in the unit ball, so the two suprema agree (our own proof). The isometry then extends to the completions. The projective norm is an infimum over decompositions, and the larger spaces can offer cheaper ones.

**nLab:** [tensor product of Banach spaces](https://ncatlab.org/nlab/show/tensor+product+of+Banach+spaces). It says: “If λ and μ are linear functionals on V and W (respectively), then λ ⊗ μ is a linear functional on V ⊗ W.”

**Sources:** none listed. No primary source with a working link was found.

### The projective tensor norm makes Banach spaces a closed monoidal category

**Remember:** Charge each tensor its cheapest decomposition into products of norms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 46M05, 18D15. arXiv math.FA, math.CT. Level 3: graduate.

**Definition.** The projective norm of a tensor t is the infimum of ∑ᵢ ‖vᵢ‖‖wᵢ‖ over all ways to write t = ∑ᵢ vᵢ ⊗ wᵢ, and completing in it gives V ⊗̂ W. So every bilinear map of norm at most one becomes a linear map of norm at most one on V ⊗̂ W (our own).

**Problem.** Let U,V,W be Banach spaces, with B(W,U) the bounded linear maps in operator norm. Linear contractions V ⊗̂ W → U correspond exactly to linear contractions V → B(W,U) for the projective tensor product. This makes Banach spaces with contractions a closed symmetric monoidal category.

**How the definition helps.** Short linear maps out of V ⊗̂ W are thus the same as short bilinear maps, which are the same as short linear maps V → B(W, U) (our own). This correspondence is the closed structure. The injective norm, the smallest cross norm, does not make the category closed (our own remark).

**nLab:** [tensor product of Banach spaces](https://ncatlab.org/nlab/show/tensor+product+of+Banach+spaces). It says: “One of these, the projective tensor product, makes Ban (the category of Banach spaces and short linear maps) into a closed symmetric monoidal category”

**Sources:**

- [A. Grothendieck, Produits tensoriels topologiques et espaces nucléaires, Memoirs of the AMS 16 (1955)](https://doi.org/10.1090/memo/0016)

### Uniform integrability and tightness describe the weakly compact sets of L¹

**Remember:** No mass may pile up on small sets or escape to infinity.

*Rules out counterexamples.* MSC 46B50 (Compactness in Banach (or normed) spaces), 46E30. arXiv math.FA. Level 3: graduate.

**Definition.** A family F in L¹ is uniformly integrable if, for each ε &gt; 0, some δ &gt; 0 makes ∫<sub>E</sub> \|u\| &lt; ε for every u in F and every set E of measure below δ, so no mass piles up on small sets. It is tight if, for each ε &gt; 0, one set of finite measure carries all but ε of the integral of every \|u\|, so no mass escapes to infinity.

**Problem.** A sequence in L¹ is relatively weakly compact exactly when it is bounded, uniformly integrable and tight (the Dunford–Pettis theorem).

**How the definition helps.** The two conditions rule out the two ways a bounded sequence in L¹ can lose its weak limit. Uniform integrability excludes concentration, like n times the indicator of \[0, 1/n\] (our own example), and tightness excludes escape, like the indicators of \[n, n + 1\]. Proving that the conditions suffice still takes real work (our own remark).

**Paper or page:** [Banach-Saks Theorem for L¹ revisited](https://arxiv.org/abs/2311.07319v1). It says: “For sequence (uₙ)ₙ⊂L¹(X), the following assertions are equivalent. (i) The sequence (uₙ)ₙ is relatively weakly compact in L¹(X). (ii) The sequence (uₙ)ₙ is bounded in L¹(X), uniformly integrable and tight.”

**Sources:**

- [Guy Foghem, Banach-Saks Theorem for L¹ revisited, arXiv:2311.07319 (2023), Approx. Theory Spec. Funct. 2 (2026) 1–13](https://arxiv.org/abs/2311.07319v1)

### Weak-type bounds let Marcinkiewicz interpolate from endpoints where strong bounds fail

**Remember:** Bound how much of Tf exceeds each height, not its norm.

*Makes the theorem clean to state or prove.* MSC 46B70 (Interpolation between normed linear spaces), 42B25. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** An operator T has weak type (p,p), for finite p ≥ 1, if one constant C gives μ{\|Tf\| &gt; λ} ≤ (C‖f‖ₚ/λ)ᵖ for every f in Lᵖ and every λ &gt; 0. This bounds only the size of each level set of Tf, so it can hold where an Lᵖ norm bound fails. At p = ∞, weak type means boundedness on L∞.

**Problem.** A sublinear operator of weak type (p₀,p₀) and (p₁,p₁), with 1 ≤ p₀ &lt; p₁ ≤ ∞, is bounded on Lᵖ (strong type) for every p between them. So the Hardy–Littlewood maximal operator, of weak type (1,1) and bounded on L∞, is bounded on Lᵖ for p &gt; 1.

**How the definition helps.** The Marcinkiewicz interpolation theorem needs only these level-set bounds at both ends: it splits f at each height and integrates the bounds over λ (our own summary). In our own example, the maximal function of the indicator of \[0,1\] decays like 1/\|x\|, so it is not integrable and strong type (1,1) fails.

**Paper or page:** [Embeddings of Weighted Morrey Spaces](https://arxiv.org/abs/2508.03387v1). It says: “Let 1≤p₀&lt;p₁≤∞ and an operator T: ℝⁿ→ℝⁿ be sublinear and of weak-type (p₀,p₀) and weak-type (p₁,p₁). Then T is of strong-type (p,p) for all p₀&lt;p&lt;p₁.”

**Sources:**

- [Marcus Gerhold, Embeddings of Weighted Morrey Spaces, arXiv:2508.03387 (2025)](https://arxiv.org/abs/2508.03387v1)

### Completeness gives Hilbert spaces the Riesz and projection theorems

**Remember:** Angles from the inner product, limits kept by completeness.

*Rules out counterexamples.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 3: graduate.

**Definition.** A Hilbert space is an inner product space that is complete: every Cauchy sequence for the inner product distance converges to a point of the space. So the limits of minimizing sequences stay in the space.

**Problem.** In a Hilbert space H, every continuous linear functional is the inner product with a fixed vector. Every point of H has a unique nearest point in each nonempty closed convex set.

**How the definition helps.** The parallelogram law makes a minimizing sequence in a closed convex set Cauchy, and completeness puts its limit in the set, and the same law gives uniqueness. Projecting onto the kernel of a nonzero functional gives a perpendicular vector, and scaling it gives the Riesz representative. In our own counterexample on finite sequences with the ℓ² norm, pairing with (1/n) is a bounded functional whose representing vector lies outside the space.

**Wikipedia:** [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space). It says: “The Riesz representation theorem relies fundamentally not just on the presence of an inner product, but also on the completeness of the space.”

**Sources:** none listed. No primary source with a working link was found.

### Converging distances to C make cluster points in C force weak convergence

**Remember:** Two cluster points in C would give one inner product two limits.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 46B10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A sequence (xₙ) in a real Hilbert space is an Opial sequence for a nonempty set C if its distance to each point of C converges. Since ‖x − c‖² − ‖x − d‖² is affine in x, this makes ⟨xₙ, d − c⟩ converge for all c, d in C. A weak cluster point is the weak limit of a subsequence.

**Problem.** An Opial sequence for C converges weakly to a point of C exactly when all its weak cluster points lie in C.

**How the definition helps.** If c and d in C are both weak cluster points, the convergent sequence ⟨xₙ, d − c⟩ has limits ⟨c, d − c⟩ and ⟨d, d − c⟩, so ‖d − c‖² = 0 (our own proof). Distance convergence bounds the sequence, so every subsequence has a weakly convergent subsequence. If all cluster points lie in C, they coincide and the whole sequence converges weakly, and the converse is immediate.

**Paper or page:** [On Opial's Lemma](https://arxiv.org/abs/2503.22004v1). It says: “all weak cluster points of (xₙ)ₙ∈ℕ lie in C.”

**Sources:**

- [Aleksandr Arakcheev, Heinz H. Bauschke, On Opial's Lemma, arXiv:2503.22004v1 (2025)](https://arxiv.org/abs/2503.22004v1)
- [Zdzisław Opial, Weak convergence of the sequence of successive approximations for nonexpansive mappings, Bulletin of the American Mathematical Society (1967)](https://doi.org/10.1090/s0002-9904-1967-11761-0)

### A positive definite kernel determines exactly one reproducing kernel Hilbert space

**Remember:** The kernel fixes the inner product, so it fixes the space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)). arXiv math.FA. Level 3: graduate.

**Definition.** A kernel K on a set A is positive definite if every matrix (K(xᵢ, xⱼ)) from finitely many points is positive semidefinite. Its reproducing kernel Hilbert space is a Hilbert space of functions on A with f(x) = ⟨f, Kₓ⟩ for Kₓ = K(·, x), so that ⟨Kₓ, Kᵧ⟩ = K(y, x).

**Problem.** Each positive definite kernel on a set A is the reproducing kernel of exactly one Hilbert space of functions on A (the Moore–Aronszajn theorem).

**How the definition helps.** The reproducing property fixes the inner product on finite sums of the Kₓ, and these sums are dense, so the space is unique. Positive definiteness is exactly what makes this formula an inner product (our own remark). The remaining work is showing that the completion is still a space of functions, which holds because point evaluation is bounded (our own remark).

**Paper or page:** [Natural methods of unsupervised topological alignment](https://arxiv.org/abs/2510.26631v1). It says: “Suppose that K(x,y) is a Hermitian symmetric, positive definite kernel on the set 𝔄×𝔄. Then there exists a unique Hilbert space ℌ of functions defined on 𝔄, for which K is the reproducing kernel.”

**Sources:**

- [Natural methods of unsupervised topological alignment, arXiv:2510.26631 (2025)](https://arxiv.org/abs/2510.26631v1)
- [N. Aronszajn, Theory of reproducing kernels, Trans. Amer. Math. Soc. 68 (1950) 337–404](https://doi.org/10.1090/s0002-9947-1950-0051437-7)

### Continuous point evaluation gives a Hilbert space a reproducing kernel

**Remember:** Continuous evaluation, by Riesz, is an inner product with a kernel.

*True by definition.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)). arXiv math.FA. Level 3: graduate.

**Definition.** A reproducing kernel Hilbert space is a Hilbert space H of functions on a set X in which, for every x in X, evaluation f ↦ f(x) is a continuous linear functional.

**Problem.** Every reproducing kernel Hilbert space H on X has a kernel K. For every f ∈ H and x ∈ X, it satisfies f(x) = ⟨f,K(·,x)⟩.

**How the definition helps.** The Riesz representation theorem writes each continuous evaluation as the inner product with a unique vector Kₓ, and K(y, x) = Kₓ(y) is the kernel. Our own remark: L²(ℝ) is not such a space, since its elements are classes of functions and f(x) has no meaning.

**Wikipedia:** [Reproducing kernel Hilbert space](https://en.wikipedia.org/wiki/Reproducing_kernel_Hilbert_space). It says: “Such a reproducing kernel exists if and only if every evaluation functional is continuous.”

**Sources:**

- [Aronszajn, N. (1950). Theory of reproducing kernels. Transactions of the American Mathematical Society 68(3), 337–404.](https://doi.org/10.1090/S0002-9947-1950-0051437-7)

### Range norms make rows reproduce

**Remember:** Measure outputs by inputs and the rows become evaluation vectors.

*True by definition.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 45P05. arXiv math.FA. Level 3: graduate.

**Definition.** For each point x choose a real square-integrable kernel row kₓ, and let L send an input g to the function x ↦ ⟨g, kₓ⟩. Give each output the norm of its shortest input, so the range becomes an isometric copy of the closed span of the rows.

**Problem.** The range is a Hilbert space with continuous point evaluations. Its reproducing kernel, which represents evaluation by an inner product, is the inner product of two kernel rows.

**How the definition helps.** The null space of L is the set of inputs perpendicular to every row, so it is closed and its complement is the closed span of the rows (our own argument). Orthogonal projection onto that span picks the shortest input, so L maps the span isometrically onto the range. For g in the span, (Lg)(x) = ⟨g, kₓ⟩ = ⟨Lg, Lkₓ⟩, so the kernel at x, y is ⟨kₓ, kᵧ⟩.

**Paper or page:** [Minimal-norm solution to the Fredholm integral equations of the first kind via the H-HK formulation](https://arxiv.org/abs/2406.07303v1). It says: “R(L) is a RKHS with reproducing kernel defined by K(x,x′) = Gᵀ(x)HG(x′), x,x′ ∈ D.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Lorentz norms by decreasing rearrangement makes them rearrangement invariant

**Remember:** Sort the values downward, and only level-set sizes survive.

*True by definition.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 28A25. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** The decreasing rearrangement f\* of f is the right-continuous decreasing function on (0,∞) whose superlevel sets have the same measures as those of \|f\|. Explicitly, f\*(t) = inf{a ≥ 0 : μ{\|f\| &gt; a} ≤ t}, with inf ∅ = ∞. For 0 &lt; p &lt; ∞ and 0 &lt; q ≤ ∞, the Lorentz quasinorm of f is the Lᑫ norm of t¹⁄ᵖf\*(t) for the measure dt/t.

**Problem.** Fix the Lorentz exponents. If {\|f\| &gt; t} and {\|g\| &gt; t} have equal measures for every t &gt; 0, then f and g have equal Lorentz quasinorms.

**How the definition helps.** The quasinorm is a formula in f\*, and f\* depends only on the measures μ{\|f\| &gt; a}. Wikipedia says the invariance holds essentially by definition. The work lies in checking that f\* has the same superlevel-set measures as \|f\| (our own).

**Wikipedia:** [Lorentz space](https://en.wikipedia.org/wiki/Lorentz_space). It says: “The quasinorm is invariant under rearranging the values of the function f, essentially by definition.”

**Sources:** none listed. No primary source with a working link was found.

### Doubling makes simple functions dense in Orlicz spaces

**Remember:** Doubling means finite at one scale is finite at every scale.

*Rules out counterexamples.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** Let Φ be finite, convex and increasing on \[0,∞), with Φ(0) = 0 and Φ(t) → ∞. The Orlicz space holds the measurable f with ∫Φ(\|f\|/λ) ≤ 1 for some λ &gt; 0, normed by the least such λ. Φ is doubling if Φ(2t) ≤ CΦ(t) for one C and all t ≥ 0, so every f in the space has ∫Φ(c\|f\|) finite for every c &gt; 0.

**Problem.** On a finite measure space, measurable functions taking finitely many values are dense in the Orlicz space when Φ satisfies the doubling condition.

**How the definition helps.** Doubling makes Φ(c\|f\|) integrable at every scale c, so truncated and rounded simple g give ∫Φ(c\|f − g\|) → 0 by dominated convergence (our own). Without doubling it fails: for Φ(t) = eᵗ − 1 on (0,1), f(x) = log(1/x) lies in the space at scale ½ (our own). Yet ∫Φ(\|f − g\|) = ∞ for every bounded simple g, so f stays at distance at least one.

**Paper or page:** [Convolutions of Orlicz spaces and Orlicz Schatten classes, with applications to Toeplitz operators](https://arxiv.org/abs/2505.01707v2). It says: “if $\\Phi$ is a quasi-Young function which satisfies a $\\Delta<sub>2</sub>$-condition, then the simple functions are dense in $L<sup>\\Phi</sup>(d\\mu)$;”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev norms make higher-to-lower order circle embeddings compact

**Remember:** High frequencies are shrunk by weights that tend to zero.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42A16. arXiv math.AP, math.FA. Level 3: graduate.

**Definition.** For real s, the circle Sobolev space Hˢ holds the distributions f with ∑ₙ (1 + n²)ˢ\|f̂(n)\|² finite, normed by the square root of that sum. In these norms the inclusion Hˢ → Hᵗ multiplies frequency n by (1 + n²) to the power (t − s)/2, which tends to zero when s &gt; t.

**Problem.** For real s &gt; t, the inclusion Hˢ → Hᵗ on the circle is compact. This means it maps bounded sets to sets with compact closure.

**How the definition helps.** A diagonal operator whose entries tend to zero is compact (our own). Keeping the frequencies \|n\| ≤ N gives a finite-rank operator whose error in operator norm is at most (1 + N²) to the power (t − s)/2. The weights rest on Parseval's identity and the Fourier rule for derivatives, as Wikipedia notes.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Both representations follow easily from Parseval's theorem and the fact that differentiation is equivalent to multiplying the Fourier coefficient by in.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights admit the delta exactly below order −n/2

**Remember:** The delta's transform is flat, so the weight must decay.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 46F12. arXiv math.AP. Level 3: graduate.

**Definition.** For real s, Hˢ(ℝⁿ) holds the tempered distributions u whose Fourier transform û, multiplied by (1 + \|ξ\|²) to the power s/2, is square-integrable. So u lies in Hˢ exactly when ∫(1 + \|ξ\|²)ˢ\|û(ξ)\|² dξ is finite.

**Problem.** The Dirac delta δ, which evaluates a test function at zero, belongs to Hˢ(ℝⁿ) exactly when s &lt; −n/2.

**How the definition helps.** The delta has constant Fourier transform, so δ lies in Hˢ exactly when (1 + \|ξ\|²)ˢ is integrable on ℝⁿ (our own). In polar coordinates the integrand behaves like r to the power 2s + n − 1 at infinity, which is integrable exactly when 2s &lt; −n.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “This motivates Sobolev spaces with non-integer order since in the above definition we can replace k by any real number s.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give continuity above order n/2

**Remember:** An integrable Fourier transform gives a bounded continuous function.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, Hˢ(ℝⁿ) holds the f ∈ L² with (1 + \|ξ\|²) to the power s/2 times f̂ in L², and the norm is the L² norm of that product. So f̂ is an L² function times the reciprocal weight (1 + \|ξ\|²) to the power −s/2.

**Problem.** If s &gt; n/2, each f in Hˢ(ℝⁿ) agrees almost everywhere with a bounded continuous function. Its supremum norm is bounded by a constant times the Hˢ norm of f.

**How the definition helps.** If 2s &gt; n, the reciprocal weight is square-integrable, so Cauchy–Schwarz bounds ‖f̂‖₁ by a constant times the Hˢ norm (our own). Fourier inversion then gives a bounded continuous representative whose supremum is at most ‖f̂‖₁.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “For k &gt; n/p, the space Wᵏ,ᵖ(Ω) will contain only continuous functions, but for which k this is already true depends both on p and on the dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give global regularity for constant-coefficient elliptic operators

**Remember:** At high frequency, the elliptic symbol pays for m derivatives.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35B65, 35J30. arXiv math.AP. Level 3: graduate.

**Definition.** An order-m operator P with constant coefficients multiplies Fourier transforms by a polynomial P(ξ), and is elliptic if its degree-m part has no real zero ξ ≠ 0. Then \|P(ξ)\| ≥ c\|ξ\|ᵐ at high frequency, so dividing by P(ξ) there gains m orders of the weight (1 + \|ξ\|²) to the power 1/2. That weight defines Sobolev spaces: u ∈ Hʳ when (1 + \|ξ\|²) to the power r/2 times û is in L².

**Problem.** Let P be elliptic of order m with constant coefficients on ℝⁿ. If u is in Hᵗ and Pu is in Hˢ for some real s and t, then u is in Hˢ⁺ᵐ.

**How the definition helps.** At high frequency \|û\| ≤ \|P(ξ)û\|/(c\|ξ\|ᵐ), so the Hˢ bound on Pu controls the Hˢ⁺ᵐ weight of û there (our own). At bounded frequency all Sobolev weights are comparable, so u ∈ Hᵗ supplies the rest.

**Wikipedia:** [Elliptic operator](https://en.wikipedia.org/wiki/Elliptic_operator), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The elliptic regularity theorem guarantees that, provided f is square-integrable, u will in fact have 2k square-integrable weak derivatives.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights show why traces lose half a derivative

**Remember:** Integrating over the normal frequency costs half a derivative.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, Hˢ(ℝⁿ) holds the L² functions f for which (1 + \|ξ\|²) to the power s/2 times f̂ is in L². The trace of a smooth f is its restriction to the hyperplane xₙ = 0. Its Fourier transform in the remaining variables ξ′ is, up to a constant, the integral of f̂(ξ′, ξₙ) over the normal frequency ξₙ.

**Problem.** Let n ≥ 2 and s &gt; 1/2. The trace extends from smooth, rapidly decreasing functions to a bounded linear map Hˢ(ℝⁿ) → Hˢ⁻¹⁄²(ℝⁿ⁻¹).

**How the definition helps.** Cauchy–Schwarz in ξₙ bounds the squared transform of the trace by the Hˢ-weighted integral of \|f̂\|² times ∫(1 + \|ξ′\|² + ξₙ²)⁻ˢ dξₙ (our own). For s &gt; 1/2 that integral is a constant times (1 + \|ξ′\|²) to the power ½ − s, which is exactly the reciprocal Hˢ⁻¹⁄² weight. Integrating in ξ′ gives the bound for rapidly decreasing f, and density gives the extension.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Intuitively, taking the trace costs 1/p of a derivative.”

**Sources:** none listed. No primary source with a working link was found.

### Sobolev spaces make Dirichlet's principle true

**Remember:** Widen the space until the minimizing sequence has somewhere to converge.

*Makes the theorem clean to state or prove.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25, 49J05. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** For open Ω, W¹,²(Ω) holds the u ∈ L² with weak derivatives gⱼ in L², so that ∫u∂ⱼφ = −∫gⱼφ for every test function φ. Here a test function is smooth with compact support, and W₀¹,²(Ω) is the closure of the test functions in W¹,². Both are Hilbert spaces, so their bounded sequences have weakly convergent subsequences.

**Problem.** On a bounded domain Ω, fix boundary data represented by g ∈ W¹,²(Ω). The Dirichlet energy ∫\|∇u\|² attains its minimum in g + W₀¹,²(Ω), and the minimizer solves Laplace’s equation weakly.

**How the definition helps.** A bounded minimizing sequence has a weak limit, and that limit stays in the closed set g + W₀¹,² (our own). Poincaré's inequality makes the sequence bounded, and weak lower semicontinuity of the energy makes the limit a minimizer. Varying the minimizer along each test function gives the weak Laplace equation.

**Wikipedia:** [Dirichlet's principle](https://en.wikipedia.org/wiki/Dirichlet%27s_principle), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space), [Direct method in the calculus of variations](https://en.wikipedia.org/wiki/Direct_method_in_the_calculus_of_variations). It says: “Their importance comes from the fact that weak solutions of some important partial differential equations exist in appropriate Sobolev spaces, even when there are no strong solutions in spaces of continuous functions with the derivatives understood in the classical sense.”

**Sources:**

- [D. Hilbert, Über das Dirichletsche Prinzip, J. reine angew. Math. 129 (1905), 63–67, doi:10.1515/crll.1905.129.63](https://doi.org/10.1515/crll.1905.129.63)

### The closure definition of zero-boundary Sobolev spaces makes extension by zero norm-preserving

**Remember:** Extend the approximating functions first, then take the limit.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** The zero-boundary Sobolev space of an open Ω is the closure of the smooth functions with compact support in Ω, in the first-order norm. Each such function extends by zero to a smooth function on ℝⁿ with the same norm (our own).

**Problem.** Let 1 ≤ p &lt; ∞ and take a function in the zero-boundary space. Its extension by zero outside Ω lies in the Sobolev space of ℝⁿ and has the same norm.

**How the definition helps.** The zero extensions of the approximating functions form a Cauchy sequence in the complete space W¹,ᵖ(ℝⁿ) (our own). Their limit is the zero extension, with the same norm (our own). The zero-trace definition first needs the theorem Wikipedia states: on a bounded Lipschitz domain, trace-zero functions are limits of smooth compactly supported ones.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “In other words, for Ω bounded with Lipschitz boundary, trace-zero functions in W¹,ᵖ(Ω) can be approximated by smooth functions with compact support.”

**Sources:** none listed. No primary source with a working link was found.

### The completion definition of Sobolev spaces makes smooth density automatic

**Remember:** A completion keeps its starting functions dense.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** Fix an open Ω ⊆ ℝⁿ, an integer k ≥ 0 and 1 ≤ p &lt; ∞, with the norm summing the Lᵖ norms of all derivatives up to order k. H is the completion of the smooth functions on Ω of finite norm, so smooth functions are dense in H by construction. W holds the Lᵖ functions whose weak derivatives up to order k lie in Lᵖ.

**Problem.** On every open subset of ℝⁿ and for 1 ≤ p &lt; ∞, smooth functions are dense in the space W.

**How the definition helps.** Smooth functions are dense in H by construction, so density in W is the same as the equality H = W. That equality is the Meyers–Serrin theorem, which holds on every open set with no condition on the boundary. Wikipedia says that this theorem establishes the equivalence of the two definitions.

**Wikipedia:** [Meyers–Serrin theorem](https://en.wikipedia.org/wiki/Meyers%E2%80%93Serrin_theorem). It says: “The theorem establishes the equivalence Wᵏ,ᵖ(Ω) = Hᵏ,ᵖ(Ω) of both definitions.”

**Sources:**

- [Norman G. Meyers and James Serrin, H = W (1964)](https://doi.org/10.1073/pnas.51.6.1055)

### The Fourier definition of Bessel potentials makes their orders add

**Remember:** Multiplying powers of one weight adds their exponents.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 31B15. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** The Bessel potential of order s &gt; 0 on ℝᵈ is (I − Δ) to the power −s/2, where Δ is the Laplacian. It acts by dividing the Fourier transform by (1 + 4π²\|ξ\|²) to the power s/2, a power of one fixed weight.

**Problem.** For s, t &gt; 0, the Bessel potential of order s after that of order t is the Bessel potential of order s + t.

**How the definition helps.** Both potentials divide by powers of the same weight, and multiplying powers adds exponents, so the orders add. The potentials are also convolutions with Bessel kernels Gₛ, and Gₛ ∗ Gₜ = Gₛ₊ₜ follows once their Fourier transforms are known (our own).

**Wikipedia:** [Bessel potential](https://en.wikipedia.org/wiki/Bessel_potential). It says: “The Bessel potential acts by multiplication on the Fourier transforms”

**Sources:**

- [Nachman Aronszajn and K. T. Smith, Theory of Bessel potentials. I (1961)](https://doi.org/10.5802/aif.116)

### The quotient norm on boundary values gives an isometric extension operator

**Remember:** The shortest extension is perpendicular to every function with zero trace.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 46C05. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** Let Ω be a bounded Lipschitz domain and give H¹(Ω) its Hilbert norm on a function and its first weak derivatives. For each boundary value g of the trace map, the functions with trace g form a translate of the trace map's closed kernel. The quotient norm ‖g‖ is the infimum of ‖u‖ over that translate.

**Problem.** For the quotient norm, some linear map E sends each boundary value g to a function with trace g and ‖Eg‖ = ‖g‖. E is also bounded for the usual Sobolev–Slobodeckij norm on boundary values.

**How the definition helps.** In a Hilbert space each translate of a closed subspace has a unique shortest element, the one perpendicular to the subspace (our own). Orthogonal projection onto the complement of the kernel picks it linearly, so E attains the quotient norm. The trace theorem identifies the boundary values with H½(∂Ω), whose Sobolev–Slobodeckij norm is equivalent to the quotient norm, which gives boundedness.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “it maps continuously onto the Sobolev–Slobodeckij space”

**Sources:** none listed. No primary source with a working link was found.

### Weak derivatives make first-order Sobolev spaces complete

**Remember:** The integration-by-parts identity survives limits, so the space is closed.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** The weak derivative of u in direction j is the function gⱼ with ∫u∂ⱼφ = −∫gⱼφ for every smooth compactly supported φ. This identity survives Lᵖ limits of u and gⱼ. W¹,ᵖ(Ω) holds the Lᵖ functions with first weak derivatives in Lᵖ, normed by the sum of the Lᵖ norms of the function and these derivatives.

**Problem.** For any open Ω and 1 ≤ p ≤ ∞, W¹,ᵖ(Ω) is a Banach space, meaning a complete normed space.

**How the definition helps.** In a Cauchy sequence for this norm, the functions and their first derivatives converge in Lᵖ to some u and gⱼ (our own). Hölder's inequality passes both sides of the defining identity to the limit, so gⱼ is the weak derivative of u. Continuously differentiable functions alone are not complete: for finite p on (−1, 1), √(x² + ε²) converges in this norm to \|x\|, which has no classical derivative at 0.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The derivatives are understood in a suitable weak sense to make the space complete, i.e. a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Weak gradients ignore exceptional curves

**Remember:** Ignore curves that an integrable weight can make infinitely costly.

*Rules out counterexamples.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 28A75. arXiv math.FA, math.MG. Level 3: graduate.

**Definition.** An upper gradient of f is a nonnegative measurable g with \|f(x) − f(y)\| ≤ ∫\_γ g along every rectifiable curve γ from x to y. A p-weak upper gradient needs this bound only off a family of curves of p-modulus zero. Such a family is one along every curve of which some nonnegative Lᵖ function has infinite line integral.

**Problem.** For 1 ≤ p &lt; n, the indicator of the origin in ℝⁿ has zero as a p-weak upper gradient. Zero is not an upper gradient for that representative.

**How the definition helps.** For g = 0, only curves joining the origin to another point break the bound, as a straight segment shows, and these have p-modulus zero (our own). The weight 1/\|x\| on the unit ball, zero outside, is in Lᵖ for p &lt; n. Its line integral diverges along each such curve, because distance to the origin is at most the arclength traveled.

**Paper or page:** [Density of continuous functions in Sobolev spaces with applications to capacity](https://arxiv.org/abs/2303.00649v3). It says: “If g ∈ Lᵖ(X) is any p-weak upper gradient for f, then for any ε &gt; 0, there exists a lower semicontinuous”

**Sources:** none listed. No primary source with a working link was found.

### Zero boundary values make gradient norms complete

**Remember:** Zero boundary values let the gradient control the whole function.

*Rules out counterexamples.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA. Level 3: graduate.

**Definition.** H₀¹(Ω) is the closure of the smooth compactly supported functions on Ω, in the norm adding the L² norms of a function and its weak gradient. On a bounded Ω these functions have zero boundary values, so the Poincaré inequality ‖F‖₂ ≤ C‖∇F‖₂ holds on H₀¹.

**Problem.** On a bounded open subset of Euclidean space, the square-integral norm of the weak gradient is a complete norm on H₀¹.

**How the definition helps.** The Poincaré inequality makes the gradient norm equivalent to the full Sobolev norm on H₀¹, which is complete (our own). Zero boundary values are needed: the constant one on a bounded interval lies in the full Sobolev space and has zero gradient (our own).

**Paper or page:** [The S-resolvent estimates for the Dirac operator on hyperbolic and spherical spaces](https://arxiv.org/abs/2504.12725v1). It says: “∥F∥₍L²₎ ≤ Cₚ(Ω)∥F∥ᴅ, F ∈ H₀¹(Ω).”

**Sources:** none listed. No primary source with a working link was found.

### Zero traces allow zero extension

**Remember:** Approximate inside the domain before extending by zero.

*Rules out counterexamples.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25. arXiv math.AP. Level 3: graduate.

**Definition.** H¹(Ω) holds the L² functions whose first weak derivatives, defined by integration by parts against smooth compactly supported test functions, are also in L². The zero boundary space H₀¹(Ω) is the closure in H¹ of the smooth functions with compact support inside Ω. Each of these extends by zero to a smooth function with the same norm.

**Problem.** Suppose the bounded domain has a boundary locally given by graphs of Lipschitz functions. Every H¹ function with zero trace, its boundary value in the Sobolev sense, extends by zero to an H¹ function on the whole space.

**How the definition helps.** Zero extensions of an approximating sequence form a Cauchy sequence in H¹(ℝⁿ), and its limit is the zero extension (our own). On a Lipschitz domain the trace theorem identifies H₀¹(Ω) with the functions of zero trace. Zero trace is needed: extending the constant one from an interval puts point masses at the endpoints into its derivative (our own).

**Wikipedia:** [Trace operator](https://en.wikipedia.org/wiki/Trace_operator). It says: “is the subspace of functions in W¹˒ᵖ(Ω) with trace zero.”

**Sources:** none listed. No primary source with a working link was found.

### Rapid decay of all derivatives makes Schwartz space Fourier invariant

**Remember:** Fourier swaps derivatives and powers, and Schwartz functions control both.

*True by definition.* MSC 46F05 (Topological linear spaces of test functions, distributions and ultradistributions), 42B10. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Schwartz space holds the smooth functions on ℝⁿ for which every polynomial times every derivative, including the function itself, is bounded. The condition treats derivatives and multiplication by coordinates alike, and the Fourier transform exchanges these two operations up to constants.

**Problem.** The Fourier transform maps the Schwartz space into itself.

**How the definition helps.** Each polynomial times a derivative of f̂ is a finite sum of transforms of derivatives of polynomial multiples of f (our own). These inputs are again Schwartz functions, hence integrable, so their transforms are bounded.

**Wikipedia:** [Schwartz space](https://en.wikipedia.org/wiki/Schwartz_space). It says: “This space has the important property that the Fourier transform is an automorphism on this space.”

**Sources:** none listed. No primary source with a working link was found.

### Weak convergence of distributions makes differentiation pass to limits by definition

**Remember:** The derivative just swaps in another test function.

*True by definition.* MSC 46F05 (Topological linear spaces of test functions, distributions and ultradistributions), 46F10. arXiv math.FA. Level 3: graduate.

**Definition.** A distribution is a continuous linear functional on test functions, which are smooth functions that vanish outside a bounded set. Say Tₙ → T when Tₙ(φ) → T(φ) for each test function φ. Define the derivative by T′(φ) = −T(φ′).

**Problem.** If distributions Tₙ converge to T in this sense, then Tₙ′ converges to T′.

**How the definition helps.** In our own proof, each derivative acts on φ by −Tₙ(φ′). Since φ′ remains a fixed test function, these values converge to −T(φ′). Continuity of differentiation on test functions ensures T′ is itself a distribution.

**Paper or page:** [Distributional Derivative on Distributions is Continuous Operator](https://proofwiki.org/wiki/Distributional_Derivative_on_Distributions_is_Continuous_Operator). It says: “The distributional derivative on Schwartz distributions is a continuous operator.”

**Sources:** none listed. No primary source with a working link was found.

### Defining convolution by tensor product and addition makes distribution convolution commutative

**Remember:** Swapping x and y does not change x + y.

*True by definition. Confidence: medium.* MSC 46F10 (Operations with distributions and generalized functions). arXiv math.FA. Level 3: graduate.

**Definition.** Let u and v be distributions on ℝⁿ, at least one with compact support. Then (u ∗ v)(φ) is u ⊗ v applied to φ(x + y), which depends only on x + y, cut off by a smooth compactly supported χ. The cutoff χ equals one near the pairs in supp u × supp v whose sum lies in supp φ.

**Problem.** Let u and v be distributions on ℝⁿ, and let at least one of them have compact support. Then u ∗ v = v ∗ u.

**How the definition helps.** Swapping x and y fixes φ(x + y) and turns u ⊗ v into v ⊗ u, by the Fubini theorem for distributions (our own). The cutoff does not change the value, because it equals one near the relevant support.

**nLab:** [convolution product of distributions](https://ncatlab.org/nlab/show/convolution+product+of+distributions). It says: “is the unique distribution such that for f ∈ C<sup>∞</sup>(ℝⁿ) a smooth function, it satisfies (u₁ ⋆ u₂) ⋆ f = u₁ ⋆ (u₂ ⋆ f)”

**Sources:** none listed. No primary source with a working link was found.

### Defining distributional derivatives by duality makes mixed partial derivatives always commute

**Remember:** Move both derivatives onto the smooth test function.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions). arXiv math.FA. Level 3: graduate.

**Definition.** A distribution is a continuous linear functional on test functions, smooth functions that vanish outside a bounded set. Its partial derivative moves the derivative onto the test function: (∂ᵢT)(φ) = −T(∂ᵢφ).

**Problem.** For every distribution T on ℝᵈ and all indices i and j, ∂ᵢ∂ⱼT = ∂ⱼ∂ᵢT.

**How the definition helps.** Both sides send φ to T(∂ᵢ∂ⱼφ), because the two minus signs cancel and mixed partials of the smooth φ commute by Schwarz's theorem (our own). Classical mixed partial derivatives can differ unless they are continuous (our own).

**Paper or page:** [Distributional Partial Derivatives Commute](https://proofwiki.org/wiki/Distributional_Partial_Derivatives_Commute). It says: “Then in the distributional sense: ∂²T/∂xᵢ∂xⱼ = ∂²T/∂xⱼ∂xᵢ”

**Sources:** none listed. No primary source with a working link was found.

### Distributions can be differentiated by definition

**Remember:** Move the derivative onto the test function, which can always take it.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions), 46F05. arXiv math.FA. Level 3: graduate.

**Definition.** A distribution is a continuous linear functional T on test functions, smooth functions with compact support. Its derivative is T′(φ) = −T(φ′), which is again a distribution because φ ↦ φ′ is continuous on test functions.

**Problem.** Every distribution has derivatives of every order, obeying the usual linear differentiation rules and the product rule with smooth factors. These derivatives also exist for every locally integrable function.

**How the definition helps.** Since T′ is again a distribution, differentiation can be repeated to every order. The linear rules and the product rule with smooth factors follow from the same identities for test functions (our own). A locally integrable f gives the distribution φ ↦ ∫fφ, and integration by parts shows this matches ordinary differentiation for smooth f.

**Wikipedia:** [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “It turns out that this is the proper definition; it extends the ordinary definition of derivative, every distribution becomes infinitely differentiable and the usual properties of derivatives hold.”

**Sources:** none listed. No primary source with a working link was found.

### The principal value makes 1/x a distribution that solves x·F = 1

**Remember:** Cut out a symmetric gap, and the two infinities cancel.

*Makes the theorem clean to state or prove.* MSC 46F10 (Operations with distributions and generalized functions), 26A42. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** PV(1/x) sends a test function φ, smooth with compact support, to the limit as ε → 0 of the integral of φ(x)/x over \|x\| &gt; ε. Because the removed gap (−ε, ε) is symmetric, φ(0)/x integrates to zero near the origin, leaving only the bounded quotient (φ(x) − φ(0))/x there.

**Problem.** The principal value PV(1/x) is a distribution with x·PV(1/x) = 1. The distributions F on ℝ with x·F = 1 are exactly PV(1/x) + cδ for constants c, where δ is the Dirac delta.

**How the definition helps.** The bound \|φ(x) − φ(0)\| ≤ \|x\| sup\|φ′\| makes the limit exist and depend continuously on φ, and multiplying by x gives φ ↦ ∫φ, the distribution 1 (our own). Two solutions differ by an F with xF = 0, so F kills each test function vanishing at 0, as it is x times a test function. Hence F = cδ.

**nLab:** [Cauchy principal value](https://ncatlab.org/nlab/show/Cauchy+principal+value). It says: “When the Cauchy principal value exists but the full integral does not (hence when the full integral "diverges") one may think of the Cauchy principal value as "exracting a finite value from a diverging quantity".”

**Sources:** none listed. No primary source with a working link was found.

### The test-function definition makes distribution convolution associative

**Remember:** Both parenthesizations produce the same successive convolutions with every test function.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** For a distribution u and a test function f, u ⋆ f is the smooth function x ↦ u(y ↦ f(x − y)). For compactly supported v, u ⋆ v is the distribution with (u ⋆ v) ⋆ f = u ⋆ (v ⋆ f) for every smooth compactly supported f.

**Problem.** Let u, v and w be distributions on ℝⁿ with v and w of compact support. Then (u ⋆ v) ⋆ w = u ⋆ (v ⋆ w).

**How the definition helps.** In our own proof, convolving either parenthesization with f gives u ⋆ (v ⋆ (w ⋆ f)). Compact support ensures w ⋆ f remains a test function and v ⋆ w remains compactly supported. Evaluating at zero with reflected test functions recovers the distribution, so the parenthesizations agree.

**nLab:** [convolution product of distributions](https://ncatlab.org/nlab/show/convolution+product+of+distributions). It says: “is the unique distribution such that for f ∈ C∞(ℝⁿ) a smooth function, it satisfies (u₁ ⋆ u₂) ⋆ f = u₁ ⋆ (u₂ ⋆ f)”

**Sources:** none listed. No primary source with a working link was found.

### Duality defines the Fourier transform of tempered distributions

**Remember:** To transform a distribution, transform the test function instead.

*True by definition.* MSC 46F12 (Integral transforms in distribution spaces), 46F05, 42A38. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** A tempered distribution is a continuous linear functional on the Schwartz space, the smooth functions that, with all their derivatives, decay faster than any power. Its Fourier transform û is defined by û(f) = u(f̂), which makes sense because the Fourier transform maps the Schwartz space to itself.

**Problem.** On a tempered distribution given by a Schwartz function f, this Fourier transform gives the distribution of f̂. Fourier inversion holds for every tempered distribution.

**How the definition helps.** The definition copies the identity ∫ f̂ g = ∫ f ĝ for Schwartz functions. So on the distribution of a Schwartz function it gives the distribution of its transform, and inversion moves onto the test function. The real work is in the Schwartz case (our own).

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “Property \[…\] of the ordinary Fourier transform on functions with rapidly decreasing partial derivatives motivates and justifies the fullowing generalization”

**Sources:**

- [Lars Hörmander, The Analysis of Linear Partial Differential Operators I, Springer (1983; 2nd ed. 1990), chapter 7](https://doi.org/10.1007/978-3-642-61497-2)

### Fourier duality preserves homogeneity and changes degree m to −n−m

**Remember:** Dilate the test function, and the value scales by tᵐ.

*True by definition. Confidence: medium.* MSC 46F12 (Integral transforms in distribution spaces), 46F10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** On ℝⁿ let φₜ(x) = t⁻ⁿφ(x/t), the dilation of a Schwartz function φ that keeps its integral. A tempered distribution S is homogeneous of degree m if S(φₜ) = tᵐS(φ) for all φ and t &gt; 0. Its Fourier transform is Ŝ(φ) = S(φ̂).

**Problem.** If a tempered distribution S on ℝⁿ is homogeneous of degree m, then Ŝ is homogeneous of degree −n − m.

**How the definition helps.** In our own computation, the Fourier transform of φₜ equals t⁻ⁿ times the normalized dilation of φ̂ at scale 1/t. Applying S contributes another factor t⁻ᵐ by homogeneity. Thus Ŝ(φₜ) = t⁻ⁿ⁻ᵐŜ(φ), the defining identity at the claimed degree.

**Wikipedia:** [Homogeneous distribution](https://en.wikipedia.org/wiki/Homogeneous_distribution). It says: “The additional factor of t⁻ⁿ is needed to reproduce the usual notion of homogeneity for locally integrable functions, and comes about from the Jacobian change of variables.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier duality sends the constant one to the Dirac delta

**Remember:** Inversion at zero turns the transform of one into point evaluation.

*True by definition.* MSC 46F12 (Integral transforms in distribution spaces), 42B10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A tempered distribution T is a continuous linear functional on the Schwartz space of smooth, rapidly decreasing functions. Its Fourier transform is T̂(φ) = T(φ̂), with kernel exp(−2πix·ξ) on test functions, so 1̂(φ) = ∫φ̂ even though the Fourier integral of 1 diverges.

**Problem.** The Fourier transform of the constant function 1 is the Dirac delta δ, which acts by δ(φ) = φ(0).

**How the definition helps.** Fourier inversion at zero says ∫φ̂ = φ(0), so the transform of 1 is δ (our own). The work is in proving inversion for Schwartz functions and that their transforms are again Schwartz functions. ProofWiki states the one-dimensional identity, and the same proof works in every dimension.

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “û(f) ≔ u(f̂)”

**Paper or page:** [Fourier Transform of 1](https://proofwiki.org/wiki/Fourier_Transform_of_1). It says: “Let: f(x) = 1 Then: f̂(s) = δ(s) where f̂(s) is the Fourier transform of f(x).”

**Sources:** none listed. No primary source with a working link was found.

### Fourier duality turns distribution derivatives into frequency multiplication

**Remember:** Move differentiation to the test function and apply its Fourier rule.

*True by definition.* MSC 46F12 (Integral transforms in distribution spaces), 42B10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A tempered distribution u is a continuous linear functional on the Schwartz space of smooth, rapidly decreasing functions. Define (∂ⱼu)(φ) = −u(∂ⱼφ) and û(φ) = u(φ̂), with the Fourier integral with kernel exp(−2πix·ξ) on test functions.

**Problem.** For every tempered distribution u on ℝⁿ, the Fourier transform of ∂ⱼu is 2πiξⱼû.

**How the definition helps.** In our own proof, testing the transformed derivative on φ gives −u(∂ⱼφ̂). Differentiating the Schwartz Fourier integral gives ∂ⱼφ̂ as the transform of −2πixⱼφ. The result is û(2πixⱼφ), exactly the action of 2πiξⱼû.

**Wikipedia:** [Fourier transform](https://en.wikipedia.org/wiki/Fourier_transform). It says: “Distributions can be differentiated and the above-mentioned compatibility of the Fourier transform with differentiation and convolution remains true for tempered distributions.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiability as linear approximation excludes discontinuous functions with all directional derivatives

**Remember:** Approach from every direction at once, not one line at a time.

*Rules out counterexamples.* MSC 46G05 (Derivatives of functions in infinite-dimensional spaces), 26B05. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** f is Fréchet differentiable at x if a bounded linear map A between normed spaces gives f(x + h) = f(x) + Ah + r(h) with ‖r(h)‖/‖h‖ → 0 as h → 0. So the linear approximation must hold uniformly in all directions at once, not just along each line.

**Problem.** A map that is Fréchet differentiable at x is continuous at x. A composition of Fréchet differentiable maps is Fréchet differentiable, and its derivative is the composition of the derivatives.

**How the definition helps.** The increment Ah + r(h) tends to zero, which gives continuity, and substituting one expansion into the other gives the chain rule (our own). Directional derivatives alone are not enough: x³y/(x⁶ + y²), set to zero at the origin, has derivative zero along every line there. It equals ½ along (t, t³) for t ≠ 0, so it is not continuous.

**Wikipedia:** [Fréchet derivative](https://en.wikipedia.org/wiki/Fr%C3%A9chet_derivative). It says: “This is analogous to the fact that the existence of all directional derivatives at a point does not guarantee total differentiability (or even continuity) at that point.”

**Sources:**

- [Maurice Fréchet, La notion de différentielle dans l'analyse générale, Annales scientifiques de l'École normale supérieure 42 (1925)](https://doi.org/10.24033/asens.766)

### Strong measurability lets integrable norms give vector integrals

**Remember:** Strongly measurable means a limit of finitely-valued functions.

*Rules out counterexamples.* MSC 46G10 (Vector-valued measures and integration), 46E40. arXiv math.FA. Level 3: graduate.

**Definition.** A function from a measure space into a Banach space is strongly measurable if it is an almost-everywhere limit of finitely-valued measurable functions. These simple functions are what the Bochner integral is built from. Weak measurability only tests the scalar functions φ ∘ f for bounded linear functionals φ.

**Problem.** A strongly measurable Banach-space-valued function with integrable norm has a Bochner integral. This is the norm limit of integrals of simple functions that approximate it in integrated norm.

**How the definition helps.** Strong measurability gives simple sₙ → f with ‖sₙ‖ ≤ 2‖f‖, and integrable norm then gives ∫‖f − sₙ‖ → 0 by dominated convergence (our own). Weak measurability is not enough (our own): t ↦ eₜ from \[0,1\] into ℓ²(\[0,1\]) is weakly measurable with norm one, as functionals see countably many coordinates. Each simple function also uses only countably many coordinates, so it stays at distance at least one from almost every eₜ, and there is no Bochner integral.

**Wikipedia:** [Bochner integral](https://en.wikipedia.org/wiki/Bochner_integral). It says: “a Bochner-measurable function f : X → B is Bochner integrable if and only if ∫₍X₎ ∥f∥ʙ dμ &lt; ∞.”

**Sources:** none listed. No primary source with a working link was found.

### The weak Pettis definition lets bounded operators commute with the integral

**Remember:** Pull each functional back through the operator.

*True by definition.* MSC 46G10 (Vector-valued measures and integration), 28B05. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach-space-valued f is Pettis integrable if φ ∘ f is integrable for every continuous linear functional φ, with each integral given by one vector. That is, each measurable set A has a vector e<sub>A</sub> with φ(e<sub>A</sub>) = ∫<sub>A</sub> φ(f(x)) dμ(x) for every φ. So the integral is defined only through what continuous functionals see.

**Problem.** Let T be a continuous linear operator between Banach spaces and f be Pettis integrable. Then T ∘ f is Pettis integrable, and its integral is T applied to the integral of f.

**How the definition helps.** In our own proof, each target functional ψ pulls back to the continuous source functional ψ ∘ T. Thus ψ ∘ T ∘ f is integrable. For every measurable A, the defining identity gives ψ(T(e<sub>A</sub>)) = ∫<sub>A</sub> ψ(T(f(x))) dμ(x), so T(e<sub>A</sub>) represents the integral.

**Wikipedia:** [Pettis integral](https://en.wikipedia.org/wiki/Pettis_integral). It says: “⟨φ, e<sub>A</sub>⟩ = ∫<sub>A</sub> ⟨φ, f(x)⟩ dμ(x) for all φ ∈ V′.”

**Sources:** none listed. No primary source with a working link was found.

### Complex scalars make ℂ the only Banach division algebra

**Remember:** Every element minus some scalar is not invertible, hence zero.

*Rules out counterexamples. Confidence: medium.* MSC 46H05 (General theory of topological algebras), 46H20. arXiv math.FA. Level 3: graduate.

**Definition.** A complex Banach division algebra is a nonzero associative unital complex algebra with a complete submultiplicative norm in which every nonzero element has an inverse.

**Problem.** Every complex Banach division algebra is isomorphic to ℂ.

**How the definition helps.** The complex spectrum is never empty, so each element a has a scalar λ with a − λ1 not invertible. The division property forces a − λ1 = 0, so a = λ1. Real scalars do not suffice: the real quaternions form a real Banach division algebra with nonscalar elements (our own).

**Wikipedia:** [Gelfand–Mazur theorem](https://en.wikipedia.org/wiki/Gelfand%E2%80%93Mazur_theorem), [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “the only complex Banach algebra that is a division algebra is the complex numbers ℂ.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the spectrum by characters makes polynomial spectral mapping immediate

**Remember:** A character reads p(a) as p of its reading of a.

*True by definition. Confidence: medium.* MSC 46H05 (General theory of topological algebras), 47A10. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** In a commutative unital complex Banach algebra, a character is a nonzero multiplicative linear functional to ℂ. Define the spectrum of a as the set of values φ(a) over all characters φ, so the spectrum is read one character at a time.

**Problem.** Let a be an element of a commutative unital complex Banach algebra, and let p be a polynomial. Then the spectrum of p(a) is the set of values p(λ) for λ in the spectrum of a.

**How the definition helps.** Each character satisfies φ(p(a)) = p(φ(a)), so the claim takes one line. The work moves to the theorem that this equals the usual spectrum, the λ with a − λ1 not invertible, which rests on Gelfand–Mazur. ProofWiki states that agreement; the comparison is our own.

**Paper or page:** [Spectrum of Element of Unital Commutative Banach Algebra](https://proofwiki.org/wiki/Spectrum_of_Element_of_Unital_Commutative_Banach_Algebra). It says: “σₐ(x) = {φ(x) : φ ∈ Φₐ}”

**Sources:** none listed. No primary source with a working link was found.

### Adding a unit makes non-unital C\*-algebras behave like compactified spaces

**Remember:** Adding a unit is adding a point at infinity.

*Makes the theorem clean to state or prove.* MSC 46L05 (General theory of C<sup>\*-algebras</sup>), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** Adjoin a unit to a C\*-algebra A, the analogue of adding a point at infinity, by forming A⁺ = A ⊕ ℂ. Its product is (a, z)(b, w) = (ab + wa + zb, zw). Define K₀(A) as the kernel of the map K₀(A⁺) → ℤ induced by the scalar projection (a, z) ↦ z.

**Problem.** For locally compact Hausdorff X, K₀(C₀(X)) is the degree-zero complex K-theory of X with compact support.

**How the definition helps.** For A = C₀(X), the unitization is C(X⁺) and the scalar projection is evaluation at the added point (our own). Vector bundles over the compact X⁺ match projective modules over C(X⁺), so the kernel is the reduced K-theory of X⁺. That is the compactly supported K-theory of X by definition.

**nLab:** [unitization of a C-star-algebra](https://ncatlab.org/nlab/show/unitization+of+a+C-star-algebra). It says: “The generalization of the process of one-point compactification of possibly non-compact topological spaces from topology to non-commutative topology is the process of adding units to possibly non-unital C\*-algebras”

**Sources:** none listed. No primary source with a working link was found.

### Characters must be nonzero, so the Gelfand spectrum is locally compact

**Remember:** Drop the zero character, and the space left over is locally compact.

*True by definition.* MSC 46L05 (General theory of C<sup>\*-algebras</sup>), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** The spectrum of a commutative C\*-algebra A is the set of nonzero \*-homomorphisms from A to ℂ. It carries the weak-\* topology, the topology of pointwise convergence on A.

**Problem.** The spectrum of a commutative C\*-algebra A is a locally compact Hausdorff space. It is compact when A has a unit.

**How the definition helps.** The characters together with the zero map form a weak-\* closed part of the dual unit ball, so they are compact by Banach–Alaoglu (our own). Removing the single point 0 from this compact Hausdorff space leaves a locally compact space. With a unit every character sends 1 to 1, so no net of characters tends to 0, and the spectrum is itself compact.

**Wikipedia:** [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “In the unital case, i.e. where the C\*-algebra has a multiplicative unit element 1, all characters f must be unital, i.e. f(1) is the complex number one. This excludes the zero homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Defining positive elements as b\*b makes adjoint-preserving homomorphisms preserve positivity

**Remember:** A map that preserves adjoints sends b\*b to φ(b)\*φ(b).

*True by definition. Confidence: medium.* MSC 46L05 (General theory of C<sup>\*-algebras</sup>). arXiv math.OA. Level 3: graduate.

**Definition.** Call an element of a C\*-algebra positive if it equals b\*b for some element b of the algebra.

**Problem.** Every homomorphism between C\*-algebras that preserves adjoints sends positive elements to positive elements.

**How the definition helps.** An adjoint-preserving homomorphism φ sends b\*b to φ(b)\*φ(b), which is positive by definition. The work moves to the theorem that this agrees with the spectral definition: self-adjoint with spectrum in \[0, ∞). Its hard step is the Fukamiya–Kaplansky theorem that b\*b has such spectrum; Wikipedia states the agreement, and the comparison is our own.

**Wikipedia:** [C\*-algebra](https://en.wikipedia.org/wiki/C%2A-algebra). It says: “Elements of this cone are called non-negative (or sometimes positive”

**Sources:** none listed. No primary source with a working link was found.

### If the star is isometric, the B\* and C\* identities agree

**Remember:** Once the star keeps the norm, the two identities coincide.

*True by definition. Confidence: medium.* MSC 46L05 (General theory of C<sup>\*-algebras</sup>). arXiv math.OA. Level 3: graduate.

**Definition.** The involution of a Banach \*-algebra is isometric when ‖A\*‖ = ‖A‖ for every A. The two identities ask ‖A\*A‖ = ‖A\*‖‖A‖ and ‖A\*A‖ = ‖A‖² for every A, and with an isometric involution their right sides agree.

**Problem.** In a Banach \*-algebra whose involution is an isometry, the C\*-identity holds exactly when the B\*-identity holds.

**How the definition helps.** With ‖A\*‖ = ‖A‖ the right sides are equal, so the identities say the same thing. Without the clause, isometry follows easily from ‖A\*A‖ = ‖A‖², since then ‖A‖² ≤ ‖A\*‖‖A‖, but from the other identity only with difficulty (our own). So the clause, which the nLab calls key, moves the hard part out of the equivalence.

**nLab:** [C-star-algebra](https://ncatlab.org/nlab/show/C-star-algebra). It says: “Often one sees the definition without the clause (which should be in the definition of Banach \*-algebra) that the involution is an isometry (so that ‖A\*‖ = ‖A‖, which is key for the equivalence of the B\* and C\* identities).”

**Sources:**

- [James G. Glimm, Richard V. Kadison, Unitary operators in C\*-algebras, Pacific Journal of Mathematics 10 (1960) 547–556 (the unital case of the hard direction)](https://doi.org/10.2140/pjm.1960.10.547)

### The C\*-identity makes the Gelfand transform an isometry

**Remember:** The C\*-identity makes the norm equal the largest character value.

*Rules out counterexamples.* MSC 46L05 (General theory of C<sup>\*-algebras</sup>), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A C\*-algebra is a Banach algebra with an involution such that ‖x\*x‖ = ‖x‖². In a commutative one this forces each norm to equal the spectral radius, the largest \|f(a)\| over characters f, the nonzero homomorphisms to ℂ. The Gelfand transform sends a to the function f ↦ f(a) on the character space.

**Problem.** Let X be the character space of a commutative C\*-algebra A, with its topology of pointwise convergence. The Gelfand transform identifies A isometrically as a C\*-algebra with C₀(X), the continuous functions vanishing at infinity.

**How the definition helps.** Since the norm equals the supremum of the Gelfand transform, the transform is isometric and has closed image (our own). This rules out nonzero nilpotents, which every character kills; the quote notes that injectivity needs semisimplicity. The image is a closed subalgebra, closed under conjugation, that separates points and vanishes at no point, so Stone–Weierstrass gives all of C₀(X).

**Wikipedia:** [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “Thus the Gelfand representation is injective if and only if A is (Jacobson) semisimple.”

**Sources:**

- [I. Gelfand and M. Neumark, On the imbedding of normed rings into the ring of operators in Hilbert space, Matematicheskii Sbornik 12(54) (1943), 197–217; reprinted in Contemporary Mathematics 167 (1994)](https://doi.org/10.1090/conm/167/16)

### The universal definition of Cuntz algebras gives the circle action for free

**Remember:** Multiplying every generator by the same unit scalar keeps the relations.

*True by definition.* MSC 46L05 (General theory of C<sup>\*-algebras</sup>), 46L55. arXiv math.OA. Level 3: graduate.

**Definition.** For an integer n ≥ 2, the Cuntz algebra Oₙ has generators s₁,…,sₙ satisfying sᵢ\*sᵢ = 1 for every i and ∑ᵢ sᵢsᵢ\* = 1. Every family satisfying these relations in a unital C\*-algebra is the image of the generators under exactly one unital \*-homomorphism.

**Problem.** For each complex number z with \|z\| = 1, there is an automorphism of Oₙ that sends each sᵢ to zsᵢ. These automorphisms form a continuous action of the circle.

**How the definition helps.** In our own argument, replacing sᵢ by zsᵢ preserves both relations, so universality gives a homomorphism α<sub>z</sub>. Uniqueness on generators gives α<sub>z</sub>α<sub>w</sub> = α<sub>zw</sub> and α₁ is the identity, hence each α<sub>z</sub> is invertible. Continuity on polynomials extends by density because all these automorphisms are isometries.

**Wikipedia:** [Cuntz algebra](https://en.wikipedia.org/wiki/Cuntz_algebra). It says: “This universal C\*-algebra is called the Cuntz algebra”

**Sources:**

- [Joachim Cuntz, Simple C\*-algebras generated by isometries (1977)](https://doi.org/10.1007/BF01625776)

### The universal definition of the multiplier algebra makes essential extensions embed

**Remember:** If no element of D can ignore A, D embeds in M(A).

*True by definition.* MSC 46L05 (General theory of C<sup>\*-algebras</sup>). arXiv math.OA. Level 3: graduate.

**Definition.** A closed ideal A of a C\*-algebra D is essential if no nonzero element of D multiplies all of A to zero. The multiplier algebra M(A) contains A as an essential ideal. For each C\*-algebra D containing A as a closed ideal, exactly one adjoint-preserving homomorphism D → M(A) restricts to the identity on A.

**Problem.** Let a C\*-algebra D contain A as an essential ideal. Then the canonical homomorphism from D to M(A) is injective.

**How the definition helps.** The canonical map fixes A, so its kernel J intersects A only in zero. Since both are ideals, JA lies in that intersection. In our own proof, essentiality now forces J = 0, giving injectivity.

**Wikipedia:** [Multiplier algebra](https://en.wikipedia.org/wiki/Multiplier_algebra). It says: “It also follows from the definition that for any D containing A as an essential ideal, the multiplier algebra M(A) contains D as a C\*-subalgebra.”

**Sources:** none listed. No primary source with a working link was found.

### The tensor norm definition of nuclearity makes spatial tensor products nuclear

**Remember:** Nuclear means every tensor product with it has one C\*-norm.

*True by definition. Confidence: medium.* MSC 46L06 (Tensor products of C<sup>\*-algebras</sup>). arXiv math.OA. Level 3: graduate.

**Definition.** A C\*-algebra A is nuclear if, for every C\*-algebra B, the algebraic tensor product A ⊗ B has only one C\*-norm. Equivalently, its minimal and maximal completions agree: A ⊗min B = A ⊗max B.

**Problem.** If A and B are nuclear, then their spatial tensor product A ⊗min B is nuclear.

**How the definition helps.** Nuclearity of A and of B lets one trade each maximal tensor norm for the minimal one, using associativity of both tensor products (our own). For any C, (A ⊗min B) ⊗max C = (A ⊗max B) ⊗max C = A ⊗max (B ⊗max C) = A ⊗max (B ⊗min C). Nuclearity of A and associativity of ⊗min then give A ⊗min (B ⊗min C) = (A ⊗min B) ⊗min C.

**nLab:** [spatial tensor product](https://ncatlab.org/nlab/show/spatial+tensor+product). It says: “the maximal and minimal tensor norms on the algebraic tensor product A ⊗ B coincide”

**Sources:**

- [Man-Duen Choi and Edward Effros, Nuclear C\*-algebras and the approximation property (1978)](https://doi.org/10.2307/2373876)

### Complete positivity, not positivity, makes Stinespring's dilation theorem true

**Remember:** Complete positivity preserves positivity at every matrix size.

*Rules out counterexamples.* MSC 46L07 (Operator spaces and completely bounded maps), 46L05, 47A20. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A linear map Φ between C\*-algebras is positive when it sends positive elements to positive elements. It is completely positive when Φ applied entrywise to n × n matrices is positive for every n. For Φ from A to the operators on H, this makes ⟨a ⊗ ξ, b ⊗ η⟩ = ⟨Φ(b\*a)ξ, η⟩ positive semidefinite on A ⊗ H (our own).

**Problem.** If Φ is a completely positive map from a unital C\*-algebra A to the operators on H, then Φ(a) = V\*π(a)V for all a in A. Here π is a \*-representation of A on another Hilbert space and V is a bounded operator into it.

**How the definition helps.** Quotienting A ⊗ H by the null space of the positive form and completing gives the dilation space, where A acts by left multiplication (our own). The operator V sends ξ to 1 ⊗ ξ. Positivity alone is not enough: transposition on M₂(ℂ) is positive but fails the size-two test, which every compression V\*π(·)V passes (our own).

**Wikipedia:** [Stinespring dilation theorem](https://en.wikipedia.org/wiki/Stinespring_dilation_theorem), [Completely positive map](https://en.wikipedia.org/wiki/Completely_positive_map). It says: “This is one way to see that completely positive maps, rather than merely positive ones, are the true generalizations of positive functionals.”

**Sources:**

- [W. F. Stinespring, Positive functions on C\*-algebras, Proceedings of the AMS 6 (1955), 211–216](https://doi.org/10.1090/S0002-9939-1955-0069403-4)
- [M.-D. Choi, Completely positive linear maps on complex matrices, Linear Algebra and its Applications 10 (1975), 285–290](https://doi.org/10.1016/0024-3795(75)90075-0)

### Countable generation lets every Hilbert module sit inside the standard module

**Remember:** Countably many vectors generate a dense submodule.

*Rules out counterexamples.* MSC 46L08 (C<sup>\*-modules</sup>), 19K35. arXiv math.OA. Level 3: graduate.

**Definition.** A Hilbert B-module E is countably generated when some countable subset spans a dense submodule. The standard module ℓ²(B) consists of the sequences (bᵢ) in B for which the sum of the bᵢ\*bᵢ converges in B.

**Problem.** For every countably generated Hilbert B-module E, E ⊕ ℓ²(B) ≅ ℓ²(B) as Hilbert modules. So E is the range of a projection on ℓ²(B), and every Kasparov module on a countably generated module can be moved onto ℓ²(B).

**How the definition helps.** Countable generation removes modules too large for ℓ²(B): for B = ℂ, a nonseparable Hilbert space H fails, as H ⊕ ℓ² is nonseparable (our own). Wikipedia presents the theorem as the module version of the uniqueness of separable infinite-dimensional Hilbert space. The work is Kasparov's proof, and in return KK(A,B) can be defined with one fixed module (our own).

**Wikipedia:** [Hilbert C\*-module](https://en.wikipedia.org/wiki/Hilbert_C%2A-module). It says: “if E is a countably generated Hilbert A-module, there is an isometric isomorphism E ⊕ ℓ₂(A) ≅ ℓ₂(A).”

**Sources:**

- [Iain Raeburn and Shaun J. Thompson, Countably generated Hilbert modules, the Kasparov stabilisation theorem, and frames in Hilbert modules, Proceedings of the American Mathematical Society 131 (2003) 1557–1564](https://doi.org/10.1090/S0002-9939-02-06787-4)

### Full Hilbert modules make matrix algebras, stabilizations and full corners Morita equivalent

**Remember:** Compact operators on a full module are Morita equivalent to the coefficients.

*True by definition.* MSC 46L08 (C<sup>\*-modules</sup>), 46L85. arXiv math.OA. Level 3: graduate.

**Definition.** A Hilbert B-module E is full if the linear span of all inner products ⟨x,y⟩ is dense in B. Two C\*-algebras A and B are strongly Morita equivalent if A ≅ 𝒦(E) for some full Hilbert B-module E.

**Problem.** Every C\*-algebra B is Morita equivalent to the matrix algebra Mₙ(B), to its stabilization B ⊗ 𝒦, and to every full corner pBp. Here a projection p is full when BpB spans a dense subset of B.

**How the definition helps.** Each algebra in the list is the compact operators on an evident full B-module: Mₙ(B) = 𝒦(Bⁿ), B ⊗ 𝒦 = 𝒦(ℓ²(B)) and pBp = 𝒦(pB) (our own). The usual definition asks for an imprimitivity bimodule, a bimodule with compatible full inner products on both sides. The work moves into the quoted theorem that the two definitions agree.

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “Let A and B be C\*-algebras. The following are equivalent. (1) The C\*-algebras A and B are Morita equivalent. (2) There exists a full Hilbert B-module and a faithful representation φ : A → ℒ<sub>B</sub>(E) such that φ(A)=𝒦<sub>B</sub>(E).”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)

### A predual defines von Neumann algebras without choosing a Hilbert space

**Remember:** Being a dual space marks a von Neumann algebra.

*Makes the theorem clean to state or prove.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A W\*-algebra is a C\*-algebra A for which some Banach space E admits an isometric linear isomorphism A ≅ E\*. Such an E is a predual of A.

**Problem.** The predual of a W\*-algebra is unique up to canonical isomorphism, so its weak-\* topology depends only on the algebra. Every W\*-algebra acts faithfully on some Hilbert space as a von Neumann algebra (Sakai's theorem).

**How the definition helps.** With the predual definition, Sakai's theorem characterizes von Neumann algebras without choosing a representation. The predual is unique, being the span of the positive normal functionals, which the algebra determines and which fix the weak-\* topology (our own).

**Wikipedia:** [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “Sakai (1971) showed that von Neumann algebras can also be defined abstractly as C\*-algebras that have a predual”

**Sources:**

- [S. Sakai, A characterization of W\*-algebras, Pacific Journal of Mathematics 6 (1956), 763–773](https://doi.org/10.2140/pjm.1956.6.763)

### The bicommutant theorem lets von Neumann algebras be defined by commutants

**Remember:** Weakly closed equals its double commutant, so algebra replaces topology.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** For S ⊆ B(H), its commutant S′ consists of all bounded operators on H commuting with every member of S. A unital \*-subalgebra M of B(H) is a von Neumann algebra if M = (M′)′.

**Problem.** The commutant of any set of operators closed under adjoints is a von Neumann algebra. A von Neumann algebra contains the spectral projections of its self-adjoint elements.

**How the definition helps.** A spectral projection of a self-adjoint a in M commutes with each operator commuting with a, so it lies in M″ = M (our own). For a self-adjoint set S, S′ is a unital \*-algebra with (S′)″ = S‴ = S′, so it is a von Neumann algebra (our own). The work moves into the bicommutant theorem: the weak closure of a unital \*-algebra equals its bicommutant.

**Wikipedia:** [Von Neumann bicommutant theorem](https://en.wikipedia.org/wiki/Von_Neumann_bicommutant_theorem), [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “His double commutant theorem shows that the analytic definition is equivalent to a purely algebraic definition as an algebra of symmetries.”

**Sources:**

- [J. von Neumann, Zur Algebra der Funktionaloperationen und Theorie der normalen Operatoren, Mathematische Annalen 102 (1930), 370–427](https://doi.org/10.1007/BF01782352)

### Ordered K₀ groups classify AF algebras completely

**Remember:** Remember projection classes, their positive cone, and the unit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L35 (Classifications of C<sup>\*-algebras</sup>), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** A unital AF algebra is a unital C\*-algebra that is a sequential inductive limit of finite-dimensional C\*-algebras. Its ordered K₀ invariant is the group K₀, the positive cone of classes of projections in matrices over the algebra, and the class \[1\].

**Problem.** Elliott's theorem says that two unital AF algebras are isomorphic exactly when their ordered K₀ groups, together with the class of the unit, are isomorphic.

**How the definition helps.** The invariant keeps exactly the data that an isomorphism must preserve: the order on projection classes and the class of the unit (our own). Elliott's classification theorem says that nothing more is needed (our own).

**Wikipedia:** [Approximately finite-dimensional C\*-algebra](https://en.wikipedia.org/wiki/Approximately_finite-dimensional_C%2A-algebra). It says: “Later, George A. Elliott gave a complete classification of AF algebras using the K₀ functor whose range consists of ordered abelian groups with sufficiently nice order structure.”

**Sources:**

- [G. A. Elliott, On the classification of inductive limits of sequences of semisimple finite-dimensional algebras, Journal of Algebra 38 (1976), 29–44](https://doi.org/10.1016/0021-8693(76)90242-8)

### Hulanicki's definition of amenability makes full and reduced crossed products agree

**Remember:** If the trivial representation is near the regular one, every representation is.

*True by definition. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 22D25, 43A07. arXiv math.OA, math.GR. Level 3: graduate.

**Definition.** A locally compact group G is amenable if its trivial representation is weakly contained in its left regular representation λ on L²(G). For every compact K ⊆ G and ε &gt; 0, some finite sum of functions g ↦ ⟨λ(g)ξ,ξ⟩ approximates 1 uniformly within ε on K.

**Problem.** For an amenable group G acting on a C\*-algebra A, the full crossed product A ⋊ G equals the reduced crossed product A ⋊ᵣ G. The free group on two generators fails this already for A = ℂ.

**How the definition helps.** Tensoring a covariant representation with λ gives a multiple of a regular one, by Fell's absorption principle (our own). Since the trivial representation is weakly contained in λ, every covariant representation is weakly contained in a regular one, so the norms agree (our own). For the free group on two generators the full algebra has a one-dimensional representation, but the reduced one is simple (our own).

**nLab:** [amenable topological groupoid](https://ncatlab.org/nlab/show/amenable+topological+groupoid). It says: “For an amenable Lie groupoid 𝒢, the full groupoid convolution algebra and the reduced one are naturally isomorphic.”

**Sources:**

- [Andrzej Hulanicki, Groups whose regular representation weakly contains all unitary representations, Studia Mathematica 24 (1964) 27–59](https://doi.org/10.4064/sm-24-1-27-59)

### Morita equivalence of crossed products gives Mackey's imprimitivity theorem

**Remember:** Represent functions on the coset space so that group operators translate them.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22D30, 46L08. arXiv math.OA, math.RT. Level 3: graduate.

**Definition.** For a unitary representation U of G, a system of imprimitivity on G/H includes a nondegenerate \*-representation M of C₀(G/H) on the same space. For every g and f, U(g)M(f)U(g)\* = M(g·f), where (g·f)(xH) = f(g⁻¹xH).

**Problem.** Let H be a closed subgroup of a second countable locally compact group G. A unitary representation of G is induced from H if and only if it has a system of imprimitivity based on G/H.

**How the definition helps.** A system of imprimitivity is, by definition, a covariant representation, that is, a representation of C₀(G/H) ⋊ G. The quoted Morita equivalence with C\*(H) matches these with representations of H, and the matching is induction (our own). Mackey's own proof uses projection-valued measures and Borel cross sections, while here the work moves into building the bimodule (our own).

**Wikipedia:** [System of imprimitivity](https://en.wikipedia.org/wiki/System_of_imprimitivity). It says: “It was used by George Mackey as the basis for his theory of induced unitary representations of locally compact groups.”

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “Let G be a second countable locally compact topological group and H be a closed subgroup of G. The crossed product C₀(G/H) ⋊ G is Morita equivalent to C\*(H).”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)
- [George W. Mackey, Induced representations of locally compact groups I, Annals of Mathematics 55 (1952) 101](https://doi.org/10.2307/1969423)

### The crossed product's universal property reduces Stone–von Neumann to compact operators

**Remember:** Weyl pairs are representations of the compacts, and the compacts have one.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22D25, 81S05. arXiv math.OA, math.RT. Level 3: graduate.

**Definition.** The full crossed product A ⋊ G is the C\*-algebra whose representations are the covariant pairs (π, U) on one Hilbert space. Here π is a nondegenerate \*-representation of A and U is a strongly continuous unitary representation of G with U(s)π(a)U(s)\* = π(s·a). The Schrödinger pair on L²(G) is translation, (U(s)f)(x) = f(xs), with multiplication by characters, (V(γ)f)(x) = γ(x)f(x).

**Problem.** Let G be locally compact abelian with dual Ĝ, and let U and V be strongly continuous unitary representations of G and Ĝ on one space. If U(s)V(γ)U(s)\* = γ(s)V(γ) for all s and γ, then (U, V) is a multiple of the Schrödinger pair.

**How the definition helps.** Such a pair is a covariant representation for G acting on C₀(G) ≅ C\*(Ĝ), so it is a representation of the crossed product. The quoted theorem says this crossed product is 𝒦(L²(G)), whose nondegenerate representations are multiples of the identity one, the Schrödinger pair (our own). This isomorphism replaces von Neumann's projections built from Weyl operators; for G = ℝⁿ it gives the Stone–von Neumann theorem (our own).

**Wikipedia:** [Stone–von Neumann theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93von_Neumann_theorem). It says: “It is a general fact that covariant representations are in one-to-one correspondence with \*-representation of the corresponding crossed product.”

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “Let G be a unimodular group. The crossed product C₀(G) ⋊\_α G is isomorphic to 𝒦(L²(G)).”

**Sources:**

- [George W. Mackey, A theorem of Stone and von Neumann, Duke Mathematical Journal 16 (1949) 313–326](https://doi.org/10.1215/S0012-7094-49-01631-2)
- [Marc A. Rieffel, On the uniqueness of the Heisenberg commutation relations, Duke Mathematical Journal 39 (1972) 745–752](https://doi.org/10.1215/S0012-7094-72-03982-8)

### The universal definition makes the noncommutative torus a crossed product by ℤ

**Remember:** Same generators, same relation, same universal property, same algebra.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 46L85. arXiv math.OA. Level 3: graduate.

**Definition.** For θ ∈ ℝ, A(θ) is the universal unital C\*-algebra generated by unitaries U,V satisfying VU = λUV, where λ = exp(2πiθ). Every pair satisfying this relation in a unital C\*-algebra determines a unique unital \*-homomorphism sending U,V to that pair.

**Problem.** A(θ) is isomorphic to the crossed product C(𝕋) ⋊ ℤ, where ℤ acts on the circle by rotation through the angle 2πθ.

**How the definition helps.** Both algebras have the same universal property, so they are isomorphic. C(𝕋) is universal for one unitary u, and the crossed product by ℤ adds a unitary w with w u w\* = λu (our own). That is the relation defining A(θ), so the work moves into the universal property of crossed products by ℤ (our own).

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “The resulting C\*-crossed product C(S¹) ⋊ Z is isomorphic to Aθ.”

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “The algebra of continuous functions on the circle 𝕋 denoted C(𝕋) is the universal C\*-algebra generated by u such that u\*u=uu\*=1.”

**Sources:**

- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Trivial dynamics turns thermal equilibrium into a trace

**Remember:** One holomorphic function joins AB on one edge, BA on the other.

*True by definition.* MSC 46L60 (Applications of selfadjoint operator algebras to physics). arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** Let α be a strongly continuous automorphism group of a unital C\*-algebra and β &gt; 0. A state ω satisfies the Kubo–Martin–Schwinger condition if each pair A, B has one bounded continuous function F on the strip 0 ≤ Im z ≤ β, holomorphic inside. Its edges carry the two orders of multiplication: F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A) for every real t.

**Problem.** For trivial time evolution, the Kubo–Martin–Schwinger states at positive inverse temperature are exactly the tracial states.

**How the definition helps.** With trivial dynamics the lower edge value ω(AB) is constant in t, so the identity theorem, after reflection across that edge, makes F constant (our own). The upper edge then gives ω(BA) = ω(AB) (our own). Conversely, for a trace the constant function F = ω(AB) works (our own).

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “there is a bounded continuous function F in the strip”

**Sources:**

- [Rudolf Haag, Nicolaas M. Hugenholtz and Marinus Winnink, On the equilibrium states in quantum statistical mechanics](https://doi.org/10.1007/BF01646342)

### Coefficient algebras give compact quantum groups a genuine Hopf \*-algebra

**Remember:** Polynomials in the matrix entries keep the coproduct a finite sum.

*Makes the theorem clean to state or prove.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 16T05. arXiv math.QA, math.OA. Level 3: graduate.

**Definition.** For a compact matrix quantum group (C,u), the coefficient algebra C₀ is the unital \*-subalgebra of polynomials in the matrix entries uᵢⱼ and their adjoints. On these entries the coproduct is the finite sum Δ(uᵢⱼ) = ∑ₖ uᵢₖ ⊗ uₖⱼ (our own).

**Problem.** The coefficient algebra C₀ is a dense Hopf \*-algebra inside C, with counit ε(uᵢⱼ) = δᵢⱼ and antipode κ. The full algebra C is not a Hopf algebra in general.

**How the definition helps.** Because each Δ(uᵢⱼ) is a finite sum of products of entries, Δ maps C₀ into the algebraic tensor product of C₀ with itself (our own). The entries generate C as a C\*-algebra, so C₀ is dense, and Woronowicz’s theorem supplies the counit and antipode on C₀ (our own). On C itself Δ lands only in the completed tensor product (our own).

**nLab:** [representative function](https://ncatlab.org/nlab/show/representative+function). It says: “The set of all representative functions on G is a Hopf F-algebra.”

**Wikipedia:** [Compact quantum group](https://en.wikipedia.org/wiki/Compact_quantum_group). It says: “Strictly speaking, this does not make C(G) into a Hopf algebra, unless G is finite.”

**Sources:**

- [S. L. Woronowicz, Compact matrix pseudogroups, Communications in Mathematical Physics 111 (1987) 613–665](https://doi.org/10.1007/BF01219077)

### Two-sided invariance makes the Haar state of a compact quantum group unique

**Remember:** A Haar state swallows every state from either side.

*True by definition.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 3: graduate.

**Definition.** A Haar state on a compact quantum group with coproduct Δ is a state h that absorbs every state φ from both sides under convolution: h⋆φ = h = φ⋆h, where φ⋆ψ = (φ⊗ψ)∘Δ.

**Problem.** Every compact quantum group has exactly one Haar state.

**How the definition helps.** Two-sided absorption makes uniqueness one line: for Haar states h and h′, h⋆h′ equals h because h absorbs h′, and equals h′ because h′ absorbs h. Existence is the real work, which Woronowicz proved from the density axioms.

**Paper or page:** [Analysis for idempotent states on quantum permutation groups](https://arxiv.org/abs/2301.13423), [Quantum expanders and property (T) discrete quantum groups](https://arxiv.org/abs/2502.01974). It says: “The algebra of continuous functions C(𝔾) on a compact quantum group admits a unique invariant state h, such that for all states φ on C(𝔾): h⋆φ=h=φ⋆h.”

**Sources:**

- [S. L. Woronowicz, Compact matrix pseudogroups, Communications in Mathematical Physics 111 (1987) 613–665](https://doi.org/10.1007/BF01219077)

### Woronowicz density axioms exclude compact semigroups without a Haar state

**Remember:** Density is cancellation, and compact cancellative semigroups are groups.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 22C05. arXiv math.OA, math.QA. Level 3: graduate.

**Definition.** Woronowicz defines a compact quantum group as a unital C\*-algebra C with a coassociative unital \*-homomorphism Δ: C → C ⊗ C that also satisfies a cancellation law (our own). This law asks that the linear spans of (C⊗1)Δ(C) and (1⊗C)Δ(C) are dense in C ⊗ C; without it the object is only a compact quantum semigroup.

**Problem.** For a nonempty compact Hausdorff topological semigroup S, the density axioms for C(S) hold exactly when S is a group. The two-point semigroup with xy = x satisfies coassociativity but has no Haar state.

**How the definition helps.** For C(S), Stone–Weierstrass turns the two density conditions into injectivity of (x,y) ↦ (x,xy) and (x,y) ↦ (xy,y), which are the left and right cancellation laws (our own). A nonempty compact Hausdorff cancellative semigroup is a group (our own). For xy = x on two points, left cancellation fails, and Haar invariance would require h(f) = f(x) for both points x (our own).

**Wikipedia:** [Compact quantum group](https://en.wikipedia.org/wiki/Compact_quantum_group). It says: “the sets {(C ⊗ 1) Δ(C)} and {(1 ⊗ C) Δ(C)} are dense in C ⊗ C.”

**Sources:** none listed. No primary source with a working link was found.

### Defining K₀ of non-unital algebras by unitization matches compactly supported K-theory

**Remember:** Scalar evaluation becomes restriction to the point at infinity.

*True by definition.* MSC 46L80 (K-theory and operator algebras (including cyclic theory)), 19K99, 55N15. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a C\*-algebra A, K₀(A) is the kernel of the scalar map K₀(A⁺) → ℤ, where A⁺ is A with a new unit adjoined even if A already has one. This copies compactly supported K⁰(X), the kernel of restriction from K⁰(X⁺) to the added point at infinity.

**Problem.** For a locally compact Hausdorff space X, operator K₀ of C₀(X), the continuous complex functions vanishing at infinity, agrees with compactly supported topological K-theory of X.

**How the definition helps.** Adjoining a unit to C₀(X) gives C(X⁺), and the scalar map becomes evaluation at the added point, so both groups are kernels of the same map. This needs K₀(C(X⁺)) ≅ K⁰(X⁺), which Swan’s theorem gives by matching projective modules over C(X⁺) with vector bundles on X⁺ (our own).

**nLab:** [unitization of a C-star-algebra](https://ncatlab.org/nlab/show/unitization+of+a+C-star-algebra). It says: “The topological K-theory of X is the kernel of the induced map in operator K-theory”

**Sources:**

- [Richard G. Swan, Vector bundles and projective modules (1962).](https://doi.org/10.1090/S0002-9947-1962-0143225-6)

### Defining operator K₁ by paths of unitaries makes it homotopy invariant

**Remember:** A path of homomorphisms sends each unitary to a path.

*True by definition. Confidence: medium.* MSC 46L80 (K-theory and operator algebras (including cyclic theory)), 19K99. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a unital C\*-algebra A, K₁(A) is the set of classes of unitary matrices over A. Two unitaries have the same class when, after adding identity blocks to reach one size, a continuous path of unitaries joins them.

**Problem.** Homotopic unital \*-homomorphisms between unital C\*-algebras induce the same map on K₁.

**How the definition helps.** If φₛ is a homotopy from φ₀ to φ₁, then s ↦ φₛ(u) is a path of unitaries from φ₀(u) to φ₁(u), so the two classes agree (our own). With the suspension definition K₁(A) = K₀(SA), one would first need homotopy invariance of K₀ and then the theorem that the two definitions agree (our own).

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “The higher K-functors are defined via a C\*-version of the suspension”

**Sources:** none listed. No primary source with a working link was found.

### Projection-based operator K₀ is unchanged by passing to matrix algebras

**Remember:** Matrices over n × n matrices are just larger matrices.

*True by definition. Confidence: medium.* MSC 46L80 (K-theory and operator algebras (including cyclic theory)), 19K99. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a unital C\*-algebra A, K₀(A) is built from projections p = p² = p\* in matrices of every finite size over A. Two projections are equivalent when p = v\*v and q = vv\* for a rectangular matrix v over A, and K₀(A) is the group completion of the classes under block sum.

**Problem.** The corner map a ↦ diag(a, 0, …, 0) from A to the n × n matrix algebra Mₙ(A) induces an isomorphism on K₀.

**How the definition helps.** A k × k matrix over Mₙ(A) is a kn × kn matrix over A, so both sides use the same projections with the same equivalence (our own). The corner map only pads a projection with zero blocks, which does not change its class (our own).

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “the Murray-von Neumann equivalence classes of projections”

**Sources:** none listed. No primary source with a working link was found.

### Defining multipliers by a universal property gives the Stone–Čech compactification

**Remember:** Largest essential unitization of C₀(X) is functions on the largest compactification.

*True by definition.* MSC 46L85 (Noncommutative topology), 54D35, 46L05. arXiv math.OA, math.GN. Level 3: graduate.

**Definition.** The multiplier algebra M(A) is the largest C\*-algebra containing A as an essential ideal, an ideal that meets every nonzero closed ideal nontrivially. Largest means that every C\*-algebra containing A as an essential ideal embeds uniquely into M(A) by a \*-homomorphism fixing A.

**Problem.** For a locally compact Hausdorff space X, the multiplier algebra of C₀(X) is Cb(X) ≅ C(βX), where βX is the Stone–Čech compactification. So the corona algebra M(C₀(X))/C₀(X) is C(βX ∖ X).

**How the definition helps.** For A = C₀(X), the unital commutative algebras containing A as an essential ideal are functions on compactifications of X, so the largest is C(βX). Directly, multipliers of C₀(X) are multiplications by bounded continuous functions, and Stone–Čech extension identifies these with C(βX) (our own). Restriction to the closed remainder is onto by Tietze extension and has kernel C₀(X), which gives the corona (our own).

**nLab:** [multiplier algebra](https://ncatlab.org/nlab/show/multiplier+algebra). It says: “In the commutative case, every unital commutative extension in which A is an essential ideal corresponds to a compactification of the spectrum Spec(A); M(A) is in that case the C\*-algebra of functions on the Stone–Čech compactification β(Spec(A)).”

**Sources:**

- [Charles A. Akemann, Gert K. Pedersen and Jun Tomiyama, Multipliers of C\*-algebras, Journal of Functional Analysis 13 (1973) 277–301](https://doi.org/10.1016/0022-1236(73)90036-0)

### Nondegenerate homomorphisms make Gelfand duality match proper maps exactly

**Remember:** Dense products make every point evaluation pull back to a point.

*Rules out counterexamples.* MSC 46L85 (Noncommutative topology), 46L05, 54D45. arXiv math.OA, math.GN. Level 3: graduate.

**Definition.** A \*-homomorphism φ: A → B is nondegenerate when the products φ(a)b span a dense subset of B. Then no nonzero character of B, such as a point evaluation, vanishes on all of φ(A).

**Problem.** Let X and Y be locally compact Hausdorff spaces. The nondegenerate \*-homomorphisms from C₀(Y) to C₀(X) are exactly the maps g ↦ g∘f with f: X → Y continuous and proper, meaning preimages of compact sets are compact.

**How the definition helps.** Nondegeneracy makes each evaluation at x ∈ X pull back to a nonzero character of C₀(Y), which is evaluation at a point f(x) (our own). That every g∘f vanishes at infinity then says exactly that f is proper (our own). The degenerate inclusion of C₀((0,1)) into C(\[0,1\]) comes from no map \[0,1\] → (0,1) (our own).

**nLab:** [Gelfand duality](https://ncatlab.org/nlab/show/Gelfand+duality). It says: “between the category of locally compact Hausdorff spaces and proper maps and the category of commutative nonunital C\*-algebras with nondegenerate \*-homomorphisms as morphisms.”

**Sources:** none listed. No primary source with a working link was found.

### The universal definition gives the noncommutative torus a gauge action and trace

**Remember:** Rescaled generators satisfy the same relation, so the torus acts.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L55. arXiv math.OA. Level 3: graduate.

**Definition.** For θ ∈ ℝ, A(θ) is the universal unital C\*-algebra generated by unitaries U, V with VU = λUV, where λ = exp(2πiθ). Universality means any unitaries with this relation receive a map from A(θ), so each rescaling (U,V) ↦ (zU,wV) with \|z\| = \|w\| = 1 gives an automorphism (our own).

**Problem.** For every θ, A(θ) has a faithful tracial state τ, one with τ(xy) = τ(yx) and τ(x\*x) &gt; 0 for x ≠ 0, such that τ(UᵐVⁿ) = 0 unless m = n = 0.

**How the definition helps.** Universality turns rescaling into a continuous action of the torus 𝕋², and averaging over it gives a map onto the scalars, which is τ (our own). The average kills UᵐVⁿ unless m = n = 0, so τ(xy) = τ(yx) holds on monomials and hence everywhere (our own). The average of a nonzero positive element under a continuous action is nonzero, so τ is faithful (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “we get the C\*-algebra generated by two unitary operators U and V subject to the relation UV=θVU.”

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “Every irrational rotation algebra has a unique tracial state.”

**Sources:**

- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Writing closed convex functions as suprema of affine functions gives weak semicontinuity

**Remember:** Convex and closed means a supremum of weakly continuous affine functions.

*True by definition. Confidence: medium.* MSC 46N10 (Applications of functional analysis in optimization, convex analysis, mathematical programming, economics), 49J45. arXiv math.FA, math.OC. Level 3: graduate.

**Definition.** Describe a norm lower semicontinuous convex function as the pointwise supremum of the continuous affine functions below it, each a continuous linear functional plus a constant. By Hahn–Banach separation, this fits exactly the convex functions whose sublevel sets {f ≤ c} are norm closed.

**Problem.** A convex real function on a real normed space is lower semicontinuous in the norm topology exactly when it is weakly lower semicontinuous.

**How the definition helps.** Each continuous affine function is weakly continuous, so their supremum is weakly lower semicontinuous (our own). The other direction is free, because weakly closed sets are norm closed. Hahn–Banach separation does the real work, by showing that every norm lower semicontinuous convex function has this form (our own).

**Paper or page:** [Convex Real Function on Normed Vector Space is Lower Semicontinuous iff Weakly Lower Semicontinuous](https://proofwiki.org/wiki/Convex_Real_Function_on_Normed_Vector_Space_is_Lower_Semicontinuous_iff_Weakly_Lower_Semicontinuous). It says: “Let f : X → ℝ be a convex function.”

**Sources:** none listed. No primary source with a working link was found.

### Mackey completeness gives smooth primitives

**Remember:** Sequences that settle inside one bounded set must converge.

*Makes the theorem clean to state or prove.* MSC 46A03 (General theory of locally convex spaces), 58B10. arXiv math.FA. Level 4: research.

**Definition.** A locally convex space is Mackey complete if every Mackey–Cauchy sequence converges. A sequence is Mackey–Cauchy if, for one bounded absolutely convex set B, its late differences xₘ − xₙ lie in εB for arbitrarily small ε &gt; 0.

**Problem.** Every smooth curve in a Mackey-complete Hausdorff locally convex space has a smooth primitive, a curve whose derivative equals the given curve.

**How the definition helps.** The primitive is a limit of Riemann sums, and Mackey completeness supplies exactly that limit. In our own proof, bounded difference quotients on each compact interval put the errors between refinements in shrinking multiples of one bounded set. Integrating to a variable endpoint gives a curve with the prescribed derivative.

**nLab:** [convenient vector space](https://ncatlab.org/nlab/show/convenient+vector+space). It says: “there is a curve ∫ c (an antiderivative of c) such that c is the derivative of ∫ c.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Webbed spaces extend the closed graph theorem beyond Fréchet spaces

**Remember:** A countable tree of convex sets replaces Baire category in the target.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including B-, B<sub>r</sub>-completeness)). arXiv math.FA. Level 4: research.

**Definition.** A webbed space carries a convex web of type C: absolutely convex sets C(s), indexed by nonempty finite lists s of positive integers, where the first level covers the space and the children of each set cover that set. Along every branch, some positive λₙ make ∑λₙxₙ converge for every choice of xₙ in the nth set.

**Problem.** A linear map with closed graph from an ultrabornological space into a webbed space is continuous (De Wilde's closed graph theorem).

**How the definition helps.** The web gives the target a countable covering with built-in convergence, which is what Banach’s Baire-category argument needs (our own). De Wilde’s closed graph theorem then supplies continuity for ultrabornological source spaces.

**Wikipedia:** [Webbed space](https://en.wikipedia.org/wiki/Webbed_space). It says: “a webbed space is a topological vector space designed with the goal of allowing the results of the open mapping theorem and the closed graph theorem to hold for a wider class of linear maps whose codomains are webbed spaces.”

**Sources:** none listed. No primary source with a working link was found.

### The UMD property is exactly what vector-valued Riesz projections need

**Remember:** Safe martingale sign flips mean safe frequency cut-offs.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 42B30, 60G46. arXiv math.FA, math.CA. Level 4: research.

**Definition.** A Banach space X has UMD (unconditional martingale differences) if changing the signs of martingale steps costs at most a fixed factor. For some 1 &lt; p &lt; ∞ and C &lt; ∞, every finite X-valued Lᵖ martingale difference sequence (dⱼ) and signs εⱼ = ±1 satisfy ‖∑εⱼdⱼ‖ₚ ≤ C‖∑dⱼ‖ₚ.

**Problem.** Let G be a Dirichlet group and 1 &lt; p &lt; ∞. The Riesz projection, which keeps only the nonnegative frequencies, is bounded on X-valued Lᵖ functions on G exactly when X has the UMD property.

**How the definition helps.** The Riesz projection equals (I + S)/2, where S changes the sign of each negative frequency, and UMD bounds the analogous sign changes of martingale differences (our own remark). Burkholder and Bourgain proved that these two bounds are equivalent on the circle, so the theorem becomes an if-and-only-if (our own remark). For functions with values in ℓ¹ or c₀ the Riesz projection is not bounded (our own remark).

**Paper or page:** [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1), [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1). It says: “Let G be a Dirichlet group, X a Banach space and 1&lt;p&lt;∞. Then X has UMD if and only if the Riesz projection … is bounded.”

**Sources:**

- [Andreas Defant, Ingo Schoolmann, Hardy spaces of general Dirichlet series - a survey, arXiv:1902.02073 (2019), Banach Center Publ. 119 (2019) 123–149](https://arxiv.org/abs/1902.02073v1)

### Type 2 and cotype 2 together characterize Hilbert spaces up to isomorphism

**Remember:** Random-sign sums add like Pythagoras, up to constants both ways.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 46C15. arXiv math.FA. Level 4: research.

**Definition.** Type 2 and cotype 2 compare 𝔼‖∑εᵢxᵢ‖², for independent uniform signs εᵢ, with ∑‖xᵢ‖²; in a Hilbert space the two are equal. Type 2 asks 𝔼‖∑εᵢxᵢ‖² ≤ C∑‖xᵢ‖², and cotype 2 asks ∑‖xᵢ‖² ≤ D𝔼‖∑εᵢxᵢ‖², each with one constant for all finite lists.

**Problem.** A Banach space is isomorphic to a Hilbert space exactly when it has type 2 and cotype 2 (Kwapień's theorem).

**How the definition helps.** Both inequalities hold with equality in a Hilbert space and survive passing to an equivalent norm, so both conditions are necessary (our own). Kwapień’s factorization argument does the hard direction, building an equivalent inner-product norm from the two inequalities (our own remark).

**Paper or page:** [Characterization of Hilbertizable spaces via convex functions](https://arxiv.org/abs/2506.04686v1). It says: “A space is isomorphic to a Hilbert space if and only if it is of type 2 and cotype 2.”

**Sources:**

- [N. Borchard and G. Wachsmuth, Characterization of Hilbertizable spaces via convex functions, arXiv:2506.04686 (2025)](https://arxiv.org/abs/2506.04686v1)
- [S. Kwapień, Isomorphic characterizations of inner product spaces by orthogonal series with vector valued coefficients, Studia Math. 44 (1972) 583–595](https://doi.org/10.4064/sm-44-6-583-595)

### Condensed duals of Banach spaces are Smith spaces, so biduality always holds

**Remember:** Dualize with compact sets, not the norm, and c₀ becomes reflexive.

*Rules out counterexamples.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces), 46A20. arXiv math.FA. Level 4: research.

**Definition.** A Smith space is a complete Hausdorff locally convex space whose topology is compactly generated and which contains a universal compact set K. Every compact subset must lie in tK for some t &gt; 0.

**Problem.** For every Banach space V, the condensed dual of V is a Smith space, and V maps isomorphically to its double condensed dual. So Banach spaces and Smith spaces are anti-equivalent, and even c₀ is reflexive in this sense.

**How the definition helps.** Dualizing against compact sets, not the norm, makes the dual of a Banach space a Smith space whose universal compact set is the dual unit ball (our own). Banach–Smith duality then recovers the Banach space by dualizing again (our own). So c₀ returns to itself, although its usual Banach bidual is ℓ∞ (our own).

**Wikipedia:** [Smith space](https://en.wikipedia.org/wiki/Smith_space). It says: “a Smith space is a complete compactly generated locally convex topological vector space X having a universal compact set”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)
- [M. F. Smith, The Pontrjagin duality theorem in linear spaces, Annals of Mathematics 56 (1952), 248–253](https://doi.org/10.2307/1969798)

### Grothendieck's property forces separable Banach spaces to be reflexive

**Remember:** Weak-star convergent dual sequences also converge weakly.

*True by definition. Confidence: medium.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 4: research.

**Definition.** A Banach space X is a Grothendieck space if every weak-\* convergent sequence in the dual X\* also converges weakly, that is, against every element of X\*\* and not only against elements of X.

**Problem.** Every separable Grothendieck space is reflexive. More generally, a non-reflexive Grothendieck space has density at least the uncountable cardinal 𝔭.

**How the definition helps.** When the density of X is below 𝔭, which includes every separable X, the dual unit ball is weak-\* sequentially compact (our own). The Grothendieck property makes it weakly sequentially compact, and Eberlein–Šmulian makes it weakly compact (our own). So X\* is reflexive, and hence X is reflexive (our own).

**Paper or page:** [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3), [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3). It says: “A non-reflexive Grothendieck space has density at least 𝔭⩾ω₁.”

**Sources:**

- [Manuel González, Tomasz Kania, Grothendieck spaces: the landscape and perspectives, arXiv:2102.03838 (2021)](https://arxiv.org/abs/2102.03838v3)
- [A. Grothendieck, Sur les applications linéaires faiblement compactes d'espaces du type C(K), Canad. J. Math. 5 (1953) 129–173](https://doi.org/10.4153/cjm-1953-017-4)

### Defining subspace angles spectrally makes their squared cosines Ritz values

**Remember:** Squared cosines of the angles are the spectrum of a compressed projection.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 47A15, 47A75. arXiv math.NA, math.FA. Level 4: research.

**Definition.** The angles from a closed subspace M to a closed subspace N of a Hilbert space come from one operator, PQ restricted to M, where P and Q are the orthogonal projections onto M and N. This operator is self-adjoint on M, and the squared cosines of the angles are the points of its spectrum.

**Problem.** In the Rayleigh–Ritz method for the orthogonal projection Q onto N with a finite-dimensional trial subspace M, the Ritz values are exactly the squared cosines of the angles from M to N.

**How the definition helps.** The Ritz values of Q on M are the eigenvalues of PQ restricted to M, the same operator that defines the angles (our own). Perturbation bounds for angles then bound how Ritz values move when the trial subspace changes.

**Paper or page:** [Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods](https://arxiv.org/abs/0705.1023v2). It says: “We show that the squared cosines of the angles from one subspace to another can be interpreted as Ritz values in the Rayleigh-Ritz method”

**Sources:**

- [Andrew Knyazev, Abram Jujunashvili, Merico Argentati, Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods, arXiv:0705.1023v2 (2010). Journal of Functional Analysis 259 (2010), pp. 1323-1345](https://arxiv.org/abs/0705.1023v2)

### A reproducing kernel solves the optimization that bounds vanishing of L-functions

**Remember:** The kernel is the test function that attains the point-evaluation bound.

*True by definition. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 11M41. arXiv math.NT, math.FA. Level 4: research.

**Definition.** Take the Hilbert space of entire functions of exponential type at most πΔ with squared norm ∫ℝ \|f(x)\|² W<sub>G</sub>(x) dx, the weight from the density estimate. Its reproducing kernel K gives each point value as an inner product, f(w) = ⟨f, K(w,·)⟩, so the largest \|f(0)\|² for ‖f‖ = 1 is K(0,0) (our own).

**Problem.** Assume the generalized Riemann hypothesis for a family of L-functions with symmetry type G. Assume also a one-level density estimate for test functions whose Fourier transforms have support in (−Δ, Δ). Then the average order of vanishing at the central point is bounded by 1/K(0, 0).

**How the definition helps.** The density estimate, applied to the test function \|f\|² with f(0) = 1, bounds the average order of vanishing by ‖f‖² (our own). Cauchy–Schwarz gives 1 ≤ ‖f‖²K(0,0), and f = K(0,·)/K(0,0) attains it, with endpoint support handled by approximation (our own).

**Paper or page:** [Hilbert spaces and low-lying zeros of L-functions](https://arxiv.org/abs/2109.10844v3). It says: “To solve the Fourier optimization problems that arise, we provide a unified framework based on the theory of reproducing kernel Hilbert spaces of entire functions”

**Sources:**

- [Emanuel Carneiro, Andrés Chirre, Micah B. Milinovich, Hilbert spaces and low-lying zeros of L-functions, arXiv:2109.10844v3 (2022)](https://arxiv.org/abs/2109.10844v3)

### The Pick property makes the two kinds of interpolating sequences agree

**Remember:** With the Pick property, multiplier questions become kernel questions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 32E30, 47B32. arXiv math.CV, math.FA. Level 4: research.

**Definition.** A reproducing kernel space has the complete Pick property when interpolation by multipliers reduces to a test on the kernel. For all distinct points xᵢ and square matrices Wᵢ of one size, a multiplier of norm at most one with values Wᵢ at xᵢ exists exactly when \[k(xᵢ,xⱼ)(I − WᵢWⱼ\*)\] is positive semidefinite.

**Problem.** Fix a sequence of points with nonzero kernel vectors in a complete Pick space. Normalized evaluation gives a bounded surjection onto ℓ² exactly when multiplier evaluation maps the multiplier algebra onto ℓ∞.

**How the definition helps.** The Pick property turns uniform interpolation of bounded data by multipliers into upper and lower bounds on the normalized kernel Gram matrix (our own). The same bounds say that normalized evaluation is a bounded surjection onto ℓ² (our own). For d ≥ 2 the space H²(𝔻ᵈ) lacks the Pick property, so the theorem does not apply there (our own).

**Paper or page:** [Random Interpolating Sequences in the Polydisc and the Unit Ball](https://arxiv.org/abs/2012.05381v4). It says: “For those spaces, such interpolating sequences coincide with interpolating sequences for their multiplier algebras, thanks to the Pick property. This is not the case for the Hardy space H²(𝔻ᵈ) and its multiplier algebra H∞(𝔻ᵈ)”

**Sources:**

- [Alberto Dayan, Brett D. Wick, Shengkun Wu, Random Interpolating Sequences in the Polydisc and the Unit Ball, arXiv:2012.05381 (2020)](https://arxiv.org/abs/2012.05381v4)

### The largest-K norm equals the L¹ norm exactly when the support is small

**Remember:** Small support means one small set holds all the mass.

*True by definition.* MSC 46E30 (Spaces of measurable functions (L<sup>p-spaces</sup>, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 90C26. arXiv math.OC, math.FA. Level 4: research.

**Definition.** For u ∈ L¹(Ω), the largest-K norm \|u\|<sub>K</sub> is the most mass of \|u\| that one set of measure at most K can hold: the supremum of ∫<sub>A</sub> \|u\| over measurable A with μ(A) ≤ K.

**Problem.** Take u ∈ L¹(Ω) and K strictly between zero and μ(Ω). The support of u, the set where u ≠ 0 up to null sets, has measure at most K exactly when \|u\|<sub>K</sub> equals ‖u‖₁.

**How the definition helps.** If the support has measure at most K, the support itself is an allowed set and holds all the mass. Otherwise some set E = {\|u\| &gt; t} with t &gt; 0 has measure greater than K (our own). Every allowed set then misses mass at least t(μ(E) − K), so even the supremum falls short (our own).

**Paper or page:** [The Largest-K-Norm for General Measure Spaces and a DC Reformulation for L⁰-Constrained Problems in Function Spaces](https://arxiv.org/abs/2403.19437v2). It says: “Let u ∈ L¹(Ω) and K ∈ (0, μ(Ω)) be given. Then the following statements are equivalent: ‖u‖₀ ≤ K, ‖u‖₁ = \|u\|<sub>K</sub>, \|u\|<sub>H</sub> = \|u\|<sub>K</sub> for all H ∈ (K, μ(Ω)\].”

**Sources:**

- [Bastian Dittrich, Daniel Wachsmuth, The Largest-K-Norm for General Measure Spaces and a DC Reformulation for L⁰-Constrained Problems in Function Spaces, arXiv:2403.19437v2 (2024)](https://arxiv.org/abs/2403.19437v2)

### Chains of short steps define Sobolev spaces where continuous curves are missing

**Remember:** Short steps can measure variation even when continuous paths are missing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 53C23. arXiv math.MG, math.FA. Level 4: research.

**Definition.** An ε-chain upper gradient of u bounds the change of u along every chain of short steps, so it needs no continuous curves. For every list x₀,…,xₙ with step lengths dᵢ = d(xᵢ₋₁,xᵢ) ≤ ε, the nonnegative Borel function g must satisfy \|u(xₙ) − u(x₀)\| ≤ ∑ᵢ dᵢ(g(xᵢ₋₁)+g(xᵢ))/2.

**Problem.** Take a metric measure space that need not be complete. Its chain Sobolev space equals the space obtained by relaxing the local Lipschitz constants of Lipschitz functions. The space defined by upper gradients along continuous curves can be different.

**How the definition helps.** Chains jump across gaps that curves cannot pass, so they still measure how u varies (our own). In the plane restricted to points with both coordinates irrational, every continuous curve is constant (our own). The paper’s chain relaxation theorem identifies the limiting chain energy with the relaxed local Lipschitz energy.

**Paper or page:** [Sobolev spaces via chains in metric measure spaces](https://arxiv.org/abs/2408.15071v1). It says: “In the possible non-complete setting, we prove that the chain Sobolev space is equal to the one defined via relaxation of the local Lipschitz constant of Lipschitz functions,”

**Sources:**

- [Emanuele Caputo, Nicola Cavallucci, Sobolev spaces via chains in metric measure spaces, arXiv:2408.15071v1 (2024)](https://arxiv.org/abs/2408.15071v1)

### Lipschitz-domain harmonic functions of Sobolev order one-half with zero trace vanish

**Remember:** Define the boundary value before asking whether it vanishes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25, 35J67. arXiv math.AP. Level 4: research.

**Definition.** Let E be the functions v ∈ H¹ᐟ²(Ω) whose first partial derivatives extend to continuous linear functionals on H¹ᐟ²(Ω), normed by the H¹ᐟ² norm plus the dual norms of these derivatives. On E, restriction of smooth functions to the boundary extends to a continuous trace into L²(Γ), so the condition u = 0 on Γ has a meaning.

**Problem.** Let Ω be a bounded Lipschitz domain in ℝᴺ with N ≥ 2, so its boundary is locally the graph of a Lipschitz function. If u ∈ H¹ᐟ²(Ω) is harmonic and its trace on Γ is zero, then u = 0 in Ω.

**How the definition helps.** The trace on E gives meaning to the zero boundary condition at order one-half, where the usual trace from H¹ᐟ²(Ω) into L²(Γ) is not bounded (our own). The paper’s uniqueness theorem for harmonic functions then gives u = 0.

**Paper or page:** [Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains](https://arxiv.org/abs/2509.08543v2). It says: “If u ∈ H¹⁄²(Ω) is harmonic and u = 0 on Γ, then u = 0 in Ω.”

**Sources:**

- [Chérif Amrouche, Mohand Moussaoui, Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains, arXiv:2509.08543v2 (2025)](https://arxiv.org/abs/2509.08543v2)

### Upper gradients give Sobolev spaces on metric spaces that match classical ones

**Remember:** Bound the change along every curve, and you never need a derivative.

*Makes the theorem clean to state or prove.* MSC 46E36 (Sobolev (and similar kinds of) spaces of functions on metric spaces; analysis on metric spaces), 30L99. arXiv math.FA, math.MG. Level 4: research.

**Definition.** A Borel function g ≥ 0 is an upper gradient of u if \|u(x) − u(y)\| is at most the integral of g along every rectifiable curve from x to y, which uses only distances, curve lengths and a measure. The Newtonian space N¹,ᵖ consists of the u in Lᵖ that have an upper gradient in Lᵖ.

**Problem.** For 1 &lt; p &lt; ∞ on a Carnot group with its Carnot–Carathéodory distance and Haar measure, N¹,ᵖ agrees with the horizontal Sobolev space W¹,ᵖ.

**How the definition helps.** Upper gradients need no derivative, so N¹,ᵖ is defined on any metric measure space, including a Carnot group with its Carnot–Carathéodory distance. The agreement theorem then lets results proved for Newtonian spaces apply to the horizontal Sobolev spaces. Shanmugalingam proved the case of ℝⁿ (our own remark).

**Paper or page:** [On some intrinsic differentiability properties for Absolutely continuous functions between Carnot groups and the Area formula](https://arxiv.org/abs/2405.05024v2). It says: “Let 1&lt;p&lt;∞ and Ω⊂𝔾 be an open set of a Carnot group 𝔾≡ℝⁿ. Then N¹,ᵖ𝔾(Ω)= W¹,ᵖ𝔾(Ω)”

**Sources:**

- [Andrea Pinamonti, Francesco Serra Cassano, Kilian Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, arXiv:2405.05024 (2024)](https://arxiv.org/abs/2405.05024v2)
- [A. Pinamonti, F. Serra Cassano, K. Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, J. Funct. Anal. 289 (2025) 110948](https://doi.org/10.1016/j.jfa.2025.110948)
- [N. Shanmugalingam, Newtonian spaces: an extension of Sobolev spaces to metric measure spaces, Rev. Mat. Iberoam. 16 (2000) 243–279](https://doi.org/10.4171/rmi/275)

### Keeping the scaling degree leaves only finitely many extensions of a distribution

**Remember:** Scaling degree caps the blow-up, and so caps the delta terms.

*Rules out counterexamples. Confidence: medium.* MSC 46F10 (Operations with distributions and generalized functions), 81T15. arXiv math.AP, math-ph. Level 4: research.

**Definition.** The scaling degree of u at zero measures how fast u blows up there: it is the infimum of the ω ∈ ℝ with λ<sup>ω</sup> u(λ·) → 0 distributionally off zero as λ ↓ 0. The degree of divergence is the scaling degree minus the dimension n.

**Problem.** Let u be a distribution on ℝⁿ ∖ {0} with finite scaling degree at 0. Its extensions to ℝⁿ with the same scaling degree form a finite-dimensional affine space, indexed by finitely many derivatives of the delta distribution. The extension is unique when the degree of divergence is negative.

**How the definition helps.** Two extensions differ by a distribution supported at zero, which is a finite sum of derivatives of δ (our own). A derivative of δ of order k has scaling degree n + k, so keeping the scaling degree allows only orders up to the degree of divergence, and none when it is negative (our own). Existence uses the scaling-degree extension theorem (our own).

**nLab:** [extension of distributions](https://ncatlab.org/nlab/show/extension+of+distributions), [scaling degree of a distribution](https://ncatlab.org/nlab/show/scaling+degree+of+a+distribution). It says: “However, if one requires that the scaling degree of the extended distribution at the given point is compatible with that of the original distribution, then there is only a finite set of possible extensions”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds, Communications in Mathematical Physics 208 (2000) 623–661; arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### Colombeau algebras multiply distributions by keeping only smooth products

**Remember:** Distributions multiply if only smooth products must be kept.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F30 (Generalized functions for nonlinear analysis (Rosinger, Colombeau, nonstandard, etc.)). arXiv math.FA, math.AP. Level 4: research.

**Definition.** On an open set Ω ⊆ ℝⁿ, the special Colombeau algebra consists of nets (u\_ε) of smooth functions that grow at most like a power of 1/ε, modulo nets that vanish faster than every power of ε. Precisely, on each compact set every derivative is O(ε⁻ᴺ) for some N, and for negligible nets O(εᵐ) for every m.

**Problem.** No associative algebra with unit 1 that contains the distributions, with a Leibniz derivative extending theirs, has a product extending the pointwise product of continuous functions (Schwartz, 1954). Colombeau algebras show that such an algebra does exist if the product need only extend the pointwise product of smooth functions.

**How the definition helps.** Products and derivatives act on each smooth u\_ε, so the algebra has a Leibniz derivative, and constant nets keep smooth products (our own). Colombeau’s embedding theorem places the distributions inside it (our own). Schwartz’s impossibility theorem shows that continuous products cannot also be kept.

**Wikipedia:** [Colombeau algebra](https://en.wikipedia.org/wiki/Colombeau_algebra), [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “However, if one only wants to preserve the product of smooth functions instead such a construction becomes possible, as demonstrated first by Colombeau.”

**Sources:** none listed. No primary source with a working link was found.

### Soft inductive limits make separable nuclear operator systems limits of matrices

**Remember:** Nuclear means the identity almost factors through matrices.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L07 (Operator spaces and completely bounded maps), 18A30. arXiv math.OA, math.FA. Level 4: research.

**Definition.** An operator system S is nuclear if its identity map factors approximately through matrix algebras (our own). For every finite F ⊆ S and ε &gt; 0, there are unital completely positive maps u: S → Mₙ and v: Mₙ → S with ‖v(u(x)) − x‖ &lt; ε for every x ∈ F.

**Problem.** Every nuclear operator system is a soft inductive limit of matrix algebras. A separable operator system is nuclear exactly when it is an inductive limit of matrix algebras, which generalizes the theorem of Lazar and Lindenstrauss for function systems.

**How the definition helps.** The approximate factorizations through matrices supply the maps of the soft inductive system (our own). The paper’s construction makes these maps compatible (our own), and in the separable case an argument of Ding and Peterson gives an ordinary inductive limit.

**Paper or page:** [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019). It says: “we utilize an argument of Ding and Peterson to show that a separable operator system is nuclear if and only if it is an inductive limit of matrix algebras, generalizing a classic Theorem of Lazar and Lindenstrauss”

**Sources:**

- [Kristin Courtney, Niklas Galke, Lauritz van Luijk, Alexander Stottmeister, Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem, arXiv:2510.02019 (2025)](https://arxiv.org/abs/2510.02019)

### Countable approximate units make Morita equivalence the same as stable isomorphism

**Remember:** Countable approximate units keep Morita equivalent algebras inside one separable stabilization.

*Rules out counterexamples.* MSC 46L08 (C<sup>\*-modules</sup>), 46L80. arXiv math.OA. Level 4: research.

**Definition.** A C\*-algebra A is σ-unital if it has a countable approximate unit: a sequence of positive contractions eₙ with ‖eₙa − a‖ → 0 for every a ∈ A.

**Problem.** Two σ-unital C\*-algebras are strongly Morita equivalent exactly when they are stably isomorphic, A ⊗ 𝒦 ≅ B ⊗ 𝒦, with 𝒦 the compact operators on a separable infinite-dimensional Hilbert space. In particular, they then have isomorphic K-groups.

**How the definition helps.** A countable approximate unit makes the Morita bimodule countably generated, which is what the Brown–Green–Rieffel stabilization theorem needs (our own). Without it the result fails: for nonseparable H, 𝒦(H) and ℂ are strongly Morita equivalent through H, but only the stabilization of ℂ is separable (our own).

**Paper or page:** [Refinement of Higher-Rank Graph Reduction](https://arxiv.org/abs/2211.17156). It says: “Let 𝔸₁ and 𝔸₂ be C\*-algebras with countable approximate identities. Then 𝔸₁ ⊗ 𝒦 ≅ 𝔸₂ ⊗ 𝒦 if and only if 𝔸₁ is Morita equivalent to 𝔸₂”

**Sources:**

- [Lawrence G. Brown, Philip Green and Marc A. Rieffel, Stable isomorphism and strong Morita equivalence of C\*-algebras, Pacific Journal of Mathematics 71 (1977) 349–363](https://doi.org/10.2140/pjm.1977.71.349)

### Selfless C\*-algebras with a trace are simple with strict comparison

**Remember:** Its own ultrapower already holds free partners for A.

*Makes the theorem clean to state or prove.* MSC 46L09 (Free products of C<sup>\*-algebras</sup>), 46L35, 46L54. arXiv math.OA. Level 4: research.

**Definition.** A C\*-probability space (A,ρ) is selfless if an ultrapower of it already contains a free partner for A. Precisely, with A ≠ ℂ and the GNS representation of ρ faithful, the reduced free product of (A,ρ) with (C\*ᵣ(F∞),τ) embeds state-preservingly into an ultrapower of (A,ρ), fixing the diagonal copy of A.

**Problem.** If (A, ρ) is selfless and ρ is a trace, then A is simple, ρ is its unique tracial state, and A has stable rank one and strict comparison.

**How the definition helps.** Selflessness supplies, inside an ultrapower, elements free from A, and such free elements drive the regularity arguments (our own). The paper’s structural theorem for tracial selfless algebras then gives simplicity, the unique trace, stable rank one and strict comparison (our own).

**Paper or page:** [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Strict comparison in reduced group C\*-algebras](https://arxiv.org/abs/2412.06031). It says: “In particular, A is a simple C\*-algebra that is either traceless, if ρ is not a trace, or such that ρ is the unique tracial state on A.”

**Sources:**

- [Leonel Robert, Selfless C\*-algebras, arXiv:2309.14188 (2023)](https://arxiv.org/abs/2309.14188)
- [Leonel Robert, Selfless C\*-algebras, Adv. Math. (2025)](https://doi.org/10.1016/j.aim.2025.110409)
- [Tattwamasi Amrutam, David Gao, Srivatsav Kunnawalkam Elayavalli, Gregory Patchell, Strict comparison in reduced group C\*-algebras, arXiv:2412.06031 (2024)](https://arxiv.org/abs/2412.06031)

### Bounded natural transformations give Hilbert spaces infinite direct sums

**Remember:** Uniformly bounded components, like the blocks of a bounded diagonal operator.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L10 (General theory of von Neumann algebras), 46L05, 18D20. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A natural transformation t between W\*-functors F, G is bounded if one finite constant C bounds every component: ‖tₓ‖ ≤ C for every object X.

**Problem.** In the bicategory of W\*-categories, W\*-functors and bounded natural transformations, the category of Hilbert spaces has infinite direct sums defined by a universal property.

**How the definition helps.** The uniform bound is the one infinite direct sums need, since a family of operators Tᵢ gives a bounded operator ⊕Tᵢ exactly when sup‖Tᵢ‖ &lt; ∞ (our own). With bounded natural transformations as 2-morphisms (our own), the Hilbert direct sum satisfies the direct-sum universal property, as the nLab states.

**nLab:** [W\*-category](https://ncatlab.org/nlab/show/W%2A-category), [C-star-category](https://ncatlab.org/nlab/show/C-star-category). It says: “In particular, in this bicategory, the category of Hilbert spaces has infinite direct sums (generalizing the definition of a biproduct to infinite families of objects)”

**Sources:**

- [P. Ghez, R. Lima, J. E. Roberts, W\*-categories, Pacific Journal of Mathematics 120 (1985) 79–109](https://doi.org/10.2140/pjm.1985.120.79)

### Trace logarithms recover Mahler measure

**Remember:** Fourier turns convolution into multiplication and the trace into a torus average.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras), 11R06. arXiv math.OA, math.NT. Level 4: research.

**Definition.** The Fuglede–Kadison determinant of an operator T in a finite von Neumann algebra with normalized trace τ is the exponential of the trace of log\|T\|, where \|T\| = √(T\*T). To allow a kernel, one takes Δ(T) = lim<sub>ε↓0</sub> exp(τ(log(\|T\|+εI))).

**Problem.** Let P be a nonzero Laurent polynomial in n variables, and let T be P with each variable replaced by the corresponding shift on ℓ²(ℤⁿ). With the trace given by the diagonal entry at the origin, Δ(T) = exp(m(P)), where m(P) is the average of log\|P\| over the torus 𝕋ⁿ.

**How the definition helps.** Fourier transform turns each shift into multiplication by a circle coordinate and the trace into the torus average, so \|T\| becomes multiplication by \|P\| (our own). The trace of log(\|T\|+ε) is then the torus average of log(\|P\|+ε) (our own). Monotone convergence and integrability of log\|P\| let ε go to zero (our own).

**Wikipedia:** [Fuglede−Kadison determinant](https://en.wikipedia.org/wiki/Fuglede%E2%88%92Kadison_determinant). It says: “Then the Fuglede−Kadison determinant of X is defined as Δ(X) ≔ exp τ(log (X\*X)¹⁄²),”

**Sources:**

- [Deninger, Mahler measures and Fuglede-Kadison determinants](https://noah.nrw/ulbmshsnoah/download/pdf/4297304)

### Eigenstates make every spectral value of a self-adjoint element an eigenvalue

**Remember:** Use states instead of vectors, and every spectral value becomes an eigenvalue.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L30 (States of selfadjoint operator algebras), 47A10. arXiv math.OA, math.FA. Level 4: research.

**Definition.** An eigenstate of x with eigenvalue λ is a state E, a positive linear functional with E(1) = 1, that sees x as the scalar λ: E(yx) = λE(y) for every y. Equivalently, E((x − λ)\*(x − λ)) = 0.

**Problem.** If x is a self-adjoint element of a unital C\*-algebra, then every point of its spectrum is the eigenvalue of some eigenstate of x.

**How the definition helps.** For λ in the spectrum, evaluation at λ is a state on C\*(1,x) by continuous functional calculus, and it kills (x − λ)\*(x − λ) (our own). Any extension to a state on the whole algebra keeps this zero, which is the eigenstate condition (our own).

**Paper or page:** [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049), [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049). It says: “We introduce the notion of eigenstate of an operator in an abstract C\*-algebra, and prove several properties. Most significantly, if the operator is self-adjoint, then every element of its spectrum has a corresponding eigenstate.”

**Sources:**

- [Luther Rinehart, Eigenstates of C\*-Algebras, arXiv:2102.07049 (2021)](https://arxiv.org/abs/2102.07049)

### Viewing GNS as a weak natural transformation makes it a left adjoint

**Remember:** Keep the comparison maps when changing the algebra of observables.

*Makes the theorem clean to state or prove.* MSC 46L30 (States of selfadjoint operator algebras), 18N10. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A lax natural transformation between functors F, G into categories gives a functor Tₐ: F(A) → G(A) for each object A, which commutes with each arrow f: A → B only up to a chosen comparison G(f)Tₐ ⇒ TᵦF(f). The comparisons are identities on identity arrows and compatible with composites; the oplax convention reverses their direction.

**Problem.** Restricting a representation to a unit vector gives a state. Viewed as a weak natural transformation in a suitable 2-category, GNS is left adjoint to this restriction.

**How the definition helps.** Changing the algebra can change the Hilbert space that a vector generates, so GNS commutes with a change of algebra only up to comparison maps, which weak naturality allows (our own). The paper proves the universal property of GNS in this 2-category, with the comparison maps fitting together.

**Paper or page:** [From observables and states to Hilbert space and back: a 2-categorical adjunction](https://arxiv.org/abs/1609.08975v2). It says: “To properly formulate this adjoint, it must be viewed as a weak natural transformation, a 1-morphism in a suitable 2-category, rather than as a functor between categories.”

**Sources:**

- [Arthur J. Parzygnat, From observables and states to Hilbert space and back: a 2-categorical adjunction, arXiv:1609.08975v2 (2018)](https://arxiv.org/abs/1609.08975v2)
- [Arthur J. Parzygnat, From Observables and States to Hilbert Space and Back: A 2-Categorical Adjunction, Applied Categorical Structures 26(6), 1123–1157 (2018)](https://doi.org/10.1007/s10485-018-9522-6)

### A quantum Bayesian inverse is a disintegration exactly for deterministic maps

**Remember:** Multiplicative wherever the state can see.

*Makes the theorem clean to state or prove.* MSC 46L53 (Noncommutative probability and statistics), 46L30, 81P45. arXiv math.OA, quant-ph. Level 4: research.

**Definition.** A unital completely positive map F: B → A is ω-almost everywhere deterministic, for a state ω on A with support projection p, if F preserves products wherever ω can see: F(bc)p = F(b)F(c)p for all b, c ∈ B.

**Problem.** For completely positive unital maps of finite-dimensional operator algebras, an existing Bayesian inverse is a disintegration exactly when the original map is almost everywhere deterministic.

**How the definition helps.** Deterministic maps are the quantum version of functions, and the support projection keeps only the part of the product law that ω can detect (our own). The paper’s equivalence theorem shows that this holds exactly when an existing Bayesian inverse is a disintegration.

**Paper or page:** [Inverses, disintegrations, and Bayesian inversion in quantum Markov categories](https://arxiv.org/abs/2001.08375v3). It says: “Then F is ω-a.e. deterministic if and only if G is a disintegration of (F, ω, ξ).”

**Sources:**

- [Arthur J. Parzygnat, Inverses, disintegrations, and Bayesian inversion in quantum Markov categories, arXiv:2001.08375v3 (2020)](https://arxiv.org/abs/2001.08375v3)

### Non-commutative disintegrations are unique once differences on null parts are ignored

**Remember:** Compare reverse maps only where the state has support.

*Rules out counterexamples.* MSC 46L53 (Noncommutative probability and statistics), 46L30, 81P45. arXiv math.OA, quant-ph. Level 4: research.

**Definition.** Two maps G, H into a finite-dimensional algebra B agree ξ-almost everywhere, for a state ξ on B with support projection p, if they agree wherever ξ can see: G(a)p = H(a)p for every input a.

**Problem.** In finite dimensions, any two disintegrations of the same map and states agree almost everywhere.

**How the definition helps.** Two classical conditional rules can differ at a zero-probability outcome, so literal uniqueness fails, and cutting down by the support projection ignores exactly those differences (our own). The quoted uniqueness theorem gives agreement on the support.

**Paper or page:** [Non-commutative disintegrations: existence and uniqueness in finite dimensions](https://arxiv.org/abs/1907.09689v2). It says: “We prove non-commutative disintegrations are a.e. unique whenever they exist.”

**Sources:**

- [Arthur J. Parzygnat, Benjamin P. Russo, Non-commutative disintegrations: existence and uniqueness in finite dimensions, arXiv:1907.09689v2 (2021), J. Noncommut. Geom. 17 (2023), no. 3, pp. 899-955](https://arxiv.org/abs/1907.09689v2)

### Relative modular entropy is nonnegative

**Remember:** The relative modular operator has mean one.

*True by definition.* MSC 46L53 (Noncommutative probability and statistics), 46L10. arXiv math.OA. Level 4: research.

**Definition.** Represent faithful normal states φ, ψ by unit vectors ξ, η in the standard positive cone of M, and let S be the closure of the antilinear map xξ ↦ x\*η. Araki relative entropy integrates −log λ against the spectral measure μ of S\*S in ξ, a probability measure with mean ‖Sξ‖² = ‖η‖² = 1.

**Problem.** The Araki relative entropy of any faithful normal state relative to another is nonnegative, even when it is infinite.

**How the definition helps.** Because μ has mean one, integrating −log λ ≥ 1 − λ gives a nonnegative value, possibly infinite (our own). This construction extends the density-matrix formula to algebras without a trace.

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “is the relative modular operator of any cyclic and separating vector representatives”

**Sources:**

- [Huzihiro Araki, Relative Entropy of States of von Neumann Algebras](https://doi.org/10.2977/prims/1195191148)

### Trace tests give entropy monotonicity

**Remember:** A smaller algebra gives fewer entropy tests.

*True by definition.* MSC 46L53 (Noncommutative probability and statistics). arXiv math.OA. Level 4: research.

**Definition.** Let τ be a faithful normal tracial state on a von Neumann algebra M. The entropy of a normal state ω relative to τ is the best score over a set of tests: the supremum of ω(h) − log τ(exp h) over self-adjoint h ∈ M.

**Problem.** Let N be a unital von Neumann subalgebra of M. If ω has finite entropy, restricting both ω and τ to N cannot increase that entropy.

**How the definition helps.** Restricting to N keeps only the tests h ∈ N, and for those ω(h) and τ(exp h) do not change, so the supremum cannot grow (our own). The variational theorem identifies this supremum with τ(D log D), where the density D satisfies ω(a) = τ(Da).

**Paper or page:** [Variational formulae for entropy-like functionals for states in von Neumann algebras](https://arxiv.org/abs/2510.07605v1). It says: “ω(h) − log τ(eʰ)”

**Sources:** none listed. No primary source with a working link was found.

### Condition (L) is exactly what Cuntz–Krieger uniqueness needs

**Remember:** Every cycle needs an exit, or vertex projections miss the kernel.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 46L05, 05C20. arXiv math.OA. Level 4: research.

**Definition.** A generalized Boolean dynamical system satisfies Condition (L) if no nonempty open set of vertices consists of base points of cycles without entrances. Equivalently, its associated topological graph is topologically free (Proposition 3.5).

**Problem.** Under Condition (L), a \*-homomorphism from the system’s C\*-algebra is injective if it kills no generating projection pₐ for nonempty A. Conversely, if this test holds for every \*-homomorphism, Condition (L) holds.

**How the definition helps.** Cycles without entrances break the simple injectivity test, and Condition (L) stops their base points from filling a nonempty open set (our own). Theorem 3.6 shows that the condition is also necessary. One vertex with one loop gives C(𝕋), and restriction to a closed arc is not injective but keeps the vertex projection nonzero (our own example).

**Wikipedia:** [https://en.wikipedia.org/wiki/Graph<sub>C</sub>\*-algebra](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Graph_C%2A-algebra). It says: “Let E be a graph satisfying Condition (L), and let C\*(E) be the associated graph C\*-algebra.”

**Paper or page:** [A Cuntz--Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems](https://arxiv.org/abs/2305.09232). It says: “(1) (ℬ,ℒ,θ) satisfies Condition (L). (2) If C is C\*-algebra and ρ : C\*(ℬ,ℒ,θ,ℐα) → C is a \*-homomorphism, then ρ is injective if and only if ρ(pA) ≠ 0 for each A ∈ ℬ∖{∅}.”

**Sources:**

- [Toke Meier Carlsen, Eun Ji Kang, A Cuntz–Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems, arXiv:2305.09232 (2023)](https://arxiv.org/abs/2305.09232)
- [Alex Kumjian, David Pask, Iain Raeburn, Jean Renault, Graphs, groupoids, and Cuntz–Krieger algebras, J. Funct. Anal. (1997)](https://doi.org/10.1006/jfan.1996.3001)

### Effectiveness excludes group isotropy and makes ideals meet the diagonal

**Remember:** No open isotropy beyond units, so ideals meet the diagonal.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 46L05. arXiv math.OA, math.DS. Level 4: research.

**Definition.** An étale groupoid G, one whose source and range maps are local homeomorphisms, is effective if no open set of loops contains anything beyond units: the interior of {g ∈ G : s(g) = r(g)} is the unit space.

**Problem.** Let G be an effective, locally compact Hausdorff étale groupoid. Then every nonzero ideal of the reduced C\*-algebra C\*ᵣ(G), the completion in its regular representation, contains a nonzero function on the unit space.

**How the definition helps.** Effectiveness removes cases like the group ℤ over one point, where the conclusion fails. There C\*(ℤ) ≅ C(𝕋), and the ideal of functions vanishing at 1 contains no nonzero constant (our own). With these cases removed, the quoted theorem shows that every nonzero ideal meets C₀(G⁽⁰⁾).

**Paper or page:** [Some results regarding the ideal structure of C\*-algebras of étale groupoids](https://arxiv.org/abs/2211.06126). It says: “If G is effective, then every nontrivial ideal of C\*<sub>r</sub>(G) contains a nonzero element of C₀(G⁽⁰⁾).”

**Sources:**

- [Jean Renault, A Groupoid Approach to C\*-Algebras, Lecture Notes in Mathematics 793, Springer (1980)](https://doi.org/10.1007/BFb0091072)

### Groupoid equivalence makes the Kronecker flow algebra Morita equivalent to A(θ)

**Remember:** Cut the flow by a transversal circle and get the rotation algebra.

*True by definition. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 46L85, 57R30. arXiv math.OA, math.DS. Level 4: research.

**Definition.** The Kronecker flow of slope θ on 𝕋² = ℝ²/ℤ² moves each point along a straight line, sending (x,y) to (x+t, y+θt) at time t, and its C\*-algebra is the crossed product C(𝕋²) ⋊ ℝ. The circle x = 0 meets every orbit, and the first return map to it is y ↦ y + θ modulo one (our own).

**Problem.** For irrational θ, the C\*-algebra C(𝕋²) ⋊ ℝ of the Kronecker flow is Morita equivalent to the noncommutative torus A(θ) = C(𝕋) ⋊ ℤ.

**How the definition helps.** Reducing the flow groupoid to the complete transversal x = 0 gives an equivalent groupoid, the rotation by θ on the circle (our own). The groupoid equivalence theorem then makes the two C\*-algebras Morita equivalent, and the rotation’s crossed product is A(θ) (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “The following Lie groupoid is Morita equivalent to the above Lie groupoid: take the groupoid quotient of U(1)² (i.e., a torus) by the action of the Lie group R of real numbers”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976)](https://doi.org/10.1007/BF01418238)

### Groupoid equivalence makes the symmetric imprimitivity theorem a one-line check

**Remember:** Let H and K act on G from two sides.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 46L08. arXiv math.OA. Level 4: research.

**Definition.** An equivalence between topological groupoids G and H is a space Z on which G acts on the left and H on the right, both freely and properly, with the two actions commuting. The anchor maps must induce homeomorphisms Z/H ≅ G⁽⁰⁾ and G∖Z ≅ H⁽⁰⁾.

**Problem.** For closed subgroups H and K of a locally compact group G, the crossed products C₀(G/K) ⋊ H and C₀(H∖G) ⋊ K are Morita equivalent.

**How the definition helps.** The group G itself is an equivalence between the two transformation groupoids, with H acting by left and K by right translation (our own). These actions are free and proper, they commute, and the orbit spaces are H∖G and G/K (our own). The equivalence theorem of Muhly, Renault and Williams then gives the imprimitivity bimodule, which is a Morita equivalence.

**Paper or page:** [Groupoids, equivalence bibundles and bimodules for noncommutative solenoids](https://arxiv.org/abs/2503.13251). It says: “C<sub>c</sub>(Z) can be completed to a C\*(G,λ) - C\*(H,μ)- imprimitivity bimodule X=X<sub>H</sub><sup>G</sup>.”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976) 7–22](https://doi.org/10.1007/BF01418238)

### Minimal effective groupoids have simple algebras, which excludes the trivial action

**Remember:** Dense orbits and no open isotropy give a simple algebra.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 37A55. arXiv math.OA, math.DS. Level 4: research.

**Definition.** An étale groupoid is minimal if every orbit is dense in its unit space, so no nonempty proper open set of units is invariant. It is effective if the interior of the arrows with equal source and range consists exactly of the units.

**Problem.** For a nonempty second countable locally compact Hausdorff étale groupoid G that is minimal and effective, C\*ᵣ(G) is simple. In particular the noncommutative torus A(θ) is simple for irrational θ.

**How the definition helps.** Effectiveness makes every nonzero ideal meet C₀(G⁽⁰⁾) in some C₀(U) with U open, invariant and nonempty, and minimality forces U to be the whole unit space (our own). The trivial action of ℤ on a point is minimal but not effective, and its algebra C(𝕋) is not simple (our own). For Hausdorff groupoids the support condition in the quote holds automatically (our own).

**Paper or page:** [An overview on self-similar graphs, their generalizations, and their associated algebras](https://arxiv.org/abs/2509.18702), [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “If 𝒢 is minimal and effective and for every nonzero a ∈ C\*<sub>r</sub>(𝒢), supp(j(a)) has nonempty interior, then C\*<sub>r</sub>(𝒢) is simple.”

**Sources:**

- [Jonathan Brown, Lisa Orloff Clark, Cynthia Farthing and Aidan Sims, Simplicity of algebras associated to étale groupoids, Semigroup Forum 88 (2014) 433–452](https://doi.org/10.1007/s00233-013-9546-z)

### Outer modular flow forgets states

**Remember:** Quotient by inner conjugation to forget the state.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 46L10. arXiv math.OA. Level 4: research.

**Definition.** The outer modular flow of a von Neumann algebra M forgets inner automorphisms. It sends each time t to the class of the modular automorphism σₜ of a faithful normal state, modulo conjugation by unitaries of M.

**Problem.** The resulting homomorphism from real time to the outer automorphism group is independent of the faithful normal state.

**How the definition helps.** Connes’s cocycle theorem shows that changing the state changes each σₜ by conjugation with a unitary of M. The quotient ignores exactly such conjugations, so the class does not change.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “independent of the choice of faithful state.”

**Sources:**

- [Alain Connes, Une classification des facteurs de type III](https://doi.org/10.24033/asens.1247)

### Stabilizing by compact operators makes Takai duality hold for abelian groups

**Remember:** Each character fixes coefficients and scales the implementing unitaries.

*Makes the theorem clean to state or prove.* MSC 46L55 (Noncommutative dynamical systems), 46L05. arXiv math.OA. Level 4: research.

**Definition.** Let a locally compact abelian group G act strongly continuously on a C\*-algebra A. The dual action of a character γ ∈ Ĝ on A ⋊ G fixes the canonical copy of A and multiplies each implementing unitary uₛ by the number γ(s).

**Problem.** Let a locally compact abelian group G act on a C\*-algebra A. Then the double crossed product (A ⋊ G) ⋊ Ĝ is isomorphic to A ⊗ 𝒦(L²(G)), so it is Morita equivalent to A.

**How the definition helps.** The dual action provides the second crossed product, and Takai’s theorem identifies (A ⋊ G) ⋊ Ĝ with A ⊗ 𝒦(L²(G)) (our own). Tensoring with the compact operators gives a Morita equivalent algebra, so the result is Morita equivalent to A (our own).

**Paper or page:** [Bijections Between Sets of Invariant Ideals, Via the Ladder Technique](https://arxiv.org/abs/2406.06780). It says: “The canonical map Φ\_α is an α̂̂−(α ⊗ Ad ρ) equivariant isomorphism of A ⋊\_α G ⋊\_α̂ G onto A ⊗ 𝒦.”

**Sources:**

- [Hiroshi Takai, On a duality for crossed products of C\*-algebras, Journal of Functional Analysis 19 (1975) 25–39](https://doi.org/10.1016/0022-1236(75)90004-X)

### The continuous core forgets states

**Remember:** Changing the state only changes the implementing unitaries.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 46L10. arXiv math.OA. Level 4: research.

**Definition.** Let σ be the modular flow of a faithful normal state on a von Neumann algebra M. The continuous core is the crossed product of M by σ, generated by M and unitaries λₜ with λₜxλₜ\* = σₜ(x). Its dual action fixes M and multiplies each λₜ by the character value exp(ist).

**Problem.** The continuous cores built from two faithful normal states are isomorphic by a map that fixes the embedded algebra and respects the dual actions.

**How the definition helps.** Connes’s theorem gives unitaries uₜ in M that relate the two modular flows by conjugation and satisfy a cocycle identity (our own). So the corrected unitaries uₜλₜ form a unitary group that implements the new flow, which gives an isomorphism of cores fixing M (our own). Correcting by elements of M leaves the dual action unchanged.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “the modular automorphisms differ by inner automorphisms”

**Sources:**

- [Alain Connes, Une classification des facteurs de type III](https://doi.org/10.24033/asens.1247)

### Modular equilibrium recovers Gibbs states

**Remember:** The strip’s two edges swap the order of the observables.

*Makes the theorem clean to state or prove.* MSC 46L60 (Applications of selfadjoint operator algebras to physics), 82B10. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Let α be a weakly continuous automorphism group on B(H), and let β &gt; 0. A state ω is β-KMS if each pair A, B has one bounded continuous function F on the strip 0 ≤ Im z ≤ β, holomorphic inside. Its edges carry the two orders of multiplication: F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A) for every real t.

**Problem.** Let ω(A) = Tr(ρA) be a faithful normal KMS state at inverse temperature β. Put K = −(log ρ)/β. Then αₜ(A) = exp(itK)A exp(−itK), and exp(−βK) = ρ.

**How the definition helps.** Takesaki’s uniqueness theorem makes αₜ the modular automorphism of ω at time −t/β (our own). For ω = Tr(ρ·), the modular automorphism at time s is conjugation by exp(is log ρ), so αₜ is conjugation by exp(itK) with K = −(log ρ)/β (our own). Spectral calculus then gives exp(−βK) = ρ (our own).

**Paper or page:** [Rotational KMS states and type I conformal nets](https://arxiv.org/abs/1608.08903v2). It says: “there exists positive, non-singular, selfadjoint operator H”

**Sources:**

- [Roberto Longo and Yoh Tanimoto, Rotational KMS States and Type I Conformal Nets](https://doi.org/10.1007/s00220-017-2969-8)

### Crossed products make Rieffel deformation keep K-theory

**Remember:** Same crossed product, so the same K-theory.

*True by definition.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** Kasprzak builds the deformation A(Θ) inside the crossed product B = A ⋊ ℝⁿ, so that B is also the crossed product of A(Θ) by ℝⁿ (our own). A(Θ) is the Landstad algebra of B for the dual action twisted by the cocycle of Θ. It consists of the fixed multipliers x with t ↦ uₜxuₜ\* norm continuous and fxg ∈ B for f, g in C\*(ℝⁿ).

**Problem.** For every action of ℝⁿ, the deformed algebra has the same K-groups: K₀(A(Θ)) ≅ K₀(A) and K₁(A(Θ)) ≅ K₁(A). For example, each noncommutative torus, a Rieffel deformation of C(𝕋²), has K₀ ≅ K₁ ≅ ℤ².

**How the definition helps.** A and A(Θ) share the crossed product B by ℝⁿ, and Connes’ Thom isomorphism says such a crossed product shifts K-theory by n degrees modulo 2. So Kᵢ(A) ≅ K<sub>i+n</sub>(B) ≅ Kᵢ(A(Θ)) (our own). The remaining work is the comparison of Kasprzak’s algebra with Rieffel’s.

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690), [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “For a C\*-algebra 𝒜 one has K₀(𝒜\_Θ) = K₀(𝒜) and K₁(𝒜\_Θ)=K₁(𝒜).”

**Sources:**

- [Paweł Kasprzak, Rieffel deformation via crossed products, Journal of Functional Analysis 257 (2009) 1288–1332](https://doi.org/10.1016/j.jfa.2009.05.013)
- [Marc A. Rieffel, Deformation quantization for actions of ℝᵈ, Memoirs of the AMS 106, no. 506 (1993)](https://doi.org/10.1090/memo/0506)

### Crossed products make Rieffel deformation keep nuclearity

**Remember:** Nuclearity survives crossed products by ℝⁿ, and both algebras share one.

*True by definition. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L05. arXiv math.OA. Level 4: research.

**Definition.** A C\*-algebra C is nuclear if its algebraic tensor product with every C\*-algebra has a unique C\*-norm. For C with an action of ℝⁿ, this holds exactly when C ⋊ ℝⁿ is nuclear (our own).

**Problem.** The Rieffel deformation A(Θ) is nuclear if and only if A is nuclear.

**How the definition helps.** Nuclearity passes from C to C ⋊ ℝⁿ because ℝⁿ is amenable, and back by Takai duality, since (C ⋊ ℝⁿ) ⋊ ℝⁿ ≅ C ⊗ 𝒦 (our own). Kasprzak’s construction gives A and A(Θ) the same crossed product by ℝⁿ, so each is nuclear exactly when that crossed product is (our own).

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “A C\*-algebra 𝒜\_Θ is nuclear if and only if 𝒜 is nuclear.”

**Sources:**

- [Paweł Kasprzak, Rieffel deformation via crossed products, Journal of Functional Analysis 257 (2009) 1288–1332](https://doi.org/10.1016/j.jfa.2009.05.013)

### Discrete ħ lets matrices quantize the sphere

**Remember:** Quantize only at ħ = 1/N, and finite matrices suffice.

*Makes the theorem clean to state or prove.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 53D50. arXiv math.OA, math.SG. Level 4: research.

**Definition.** A strict deformation quantization on the values ħ = 1/N gives, for each N, a linear adjoint-preserving map Qħ from a dense Poisson \*-algebra of functions into a C\*-algebra generated by its image. As N → ∞, norms, products and commutators must become classical: ‖Qħ(f)‖ → ‖f‖∞, ‖Qħ(f)Qħ(g) − Qħ(fg)‖ → 0 and ‖\[Qħ(f),Qħ(g)\]/(iħ) − Qħ({f,g})‖ → 0.

**Problem.** The 2-sphere has a strict deformation quantization with ħ = 1/N, by Bordemann, Meinrenken and Schlichenmaier. Each algebra is the algebra of (N + 1) × (N + 1) matrices, made of Berezin–Toeplitz operators on holomorphic sections of the N-th power of a line bundle.

**How the definition helps.** The definition needs algebras only at ħ = 1/N, where the N-th power of the line bundle exists and its holomorphic sections form an (N + 1)-dimensional space. The Toeplitz operator of f multiplies a section by f and projects back, so each algebra is a matrix algebra. The estimates of Bordemann, Meinrenken and Schlichenmaier for products and commutators of Toeplitz operators supply the limits.

**nLab:** [deformation quantization of the 2-sphere](https://ncatlab.org/nlab/show/deformation+quantization+of+the+2-sphere). It says: “One definition of strict deformation quantization takes it to be such a formal deformation quantization which happens to converge for finite real number values of ħ. This is not known to exist for the 2-sphere.”

**Paper or page:** [Strict Quantization for Compact Pseudo-Kähler Manifolds and Group Actions](https://arxiv.org/abs/2410.03322). It says: “the semi-classical Dirac condition holds ‖ki\[T<sup>G<sub>k</sub></sup>\[f̃\], T<sup>G<sub>k</sub></sup>\[g̃\]\] − T<sup>G<sub>k</sub></sup>\[{f̃, g̃}\]‖ = O(1/k)”

**Sources:**

- [Martin Bordemann, Eckhard Meinrenken, Martin Schlichenmaier, Toeplitz quantization of Kähler manifolds and gl(N), N → ∞ limits, Communications in Mathematical Physics 165 (1994) 281–296](https://doi.org/10.1007/BF02099772)

### Opposite phases invert Rieffel deformation

**Remember:** Opposite phases cancel, so deforming by Θ then −Θ does nothing.

*True by definition. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L85. arXiv math.OA. Level 4: research.

**Definition.** Rieffel deformation by a real skew matrix Θ twists the product of an algebra A with a torus action by a phase. For a in the spectral subspace A(p) of elements transforming by the character p ∈ ℤⁿ, and b ∈ A(q), the new product is exp(2πi⟨Θp,q⟩)ab. The deformed algebra A(Θ) is the completion of the span of these subspaces in the Rieffel norm.

**Problem.** The torus action passes to A(Θ), and deforming A(Θ) by −Θ gives back A. The identity map on spectral subspaces is an equivariant \*-isomorphism from A to the deformation of A(Θ) by −Θ.

**How the definition helps.** The phases for Θ and −Θ cancel, so deforming twice gives back the product of A on each pair of spectral subspaces, which the torus action still labels. For the norms, a faithful representation π of A gives a faithful twisted representation πΘ, and twisting again by −Θ returns π (our own summary).

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690), [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “The mapping id : 𝒜 → (𝒜\_Θ)<sub>−Θ</sub> is an equivariant \*-isomorphism.”

**Sources:**

- [Marc A. Rieffel, Deformation quantization for actions of ℝᵈ, Memoirs of the AMS 106, no. 506 (1993)](https://doi.org/10.1090/memo/0506)

### Rieffel deformation transports invariant convolution semigroups

**Remember:** Invariant states commute with the twist, so semigroups pass through.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L67. arXiv math.OA. Level 4: research.

**Definition.** An adjoint-invariant convolution semigroup on 𝔾 is a weak-\* continuous family of states μₜ, t ≥ 0, with μ₀ the counit and μₛ⋆μₜ = μₛ₊ₜ. Each μₜ is unchanged by the adjoint action of Γ, so convolution by μₜ commutes with the Γ-action that builds the Rieffel deformation (our own).

**Problem.** Weak-\* continuous convolution semigroups of states on 𝔾 that are invariant under the adjoint action of Γ correspond one to one with those on its Rieffel deformation (Skalski–Viselter).

**How the definition helps.** Convolution by an invariant state commutes with the Γ-action, so it extends to the crossed product and restricts to the deformed algebra, as the quote says. Restriction respects composition, so semigroups go to semigroups, and deforming back with the conjugate cocycle gives the inverse (our own). The remaining work shows that the restricted maps are again convolutions by states (our own).

**Paper or page:** [Convolution semigroups on Rieffel deformations of locally compact quantum groups](https://arxiv.org/abs/2311.04630), [Convolution semigroups on Rieffel deformations of locally compact quantum groups](https://arxiv.org/abs/2311.04630). It says: “Then the canonical completely positive ‘extension’ S̃ of S to the crossed product A ⋊\_ρ Γ is non-degenerate and preserves the algebra A<sup>Ψ</sup>, and the respective restriction S<sup>Ψ</sup>: A<sup>Ψ</sup> → A<sup>Ψ</sup> is a completely positive map of norm 1.”

**Sources:**

- [Adam Skalski, Ami Viselter, Convolution semigroups on Rieffel deformations of locally compact quantum groups, Letters in Mathematical Physics 114 (2024), article 52](https://doi.org/10.1007/s11005-024-01797-w)

### A two-sided null space restores the Kawada–Itô theorem for quantum groups

**Remember:** Idempotent states come from subgroups exactly when their null space is two-sided.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 60B15. arXiv math.OA, math.QA. Level 4: research.

**Definition.** An idempotent state φ on a compact quantum group is one with φ⋆φ = φ. It is a Haar idempotent when it is the Haar state of a quantum subgroup H, pulled back along C(G) → C(H). Its null space, the f with φ(f\*f) = 0, is always a left ideal, and dividing it out gives C(H) when it is two-sided.

**Problem.** An idempotent state on a compact quantum group is the Haar state of a quantum subgroup exactly when its null space is a two-sided ideal. Not every idempotent state has this property, as Pal's example on the Kac–Paljutkin quantum group shows.

**How the definition helps.** A two-sided null space can be divided out, and the quotient is the algebra of the quantum subgroup. On a classical group C(G) is commutative, so every null space is two-sided and the Kawada–Itô theorem needs no condition. Pal's idempotent state on the Kac–Paljutkin quantum group comes from no subgroup, so its null space is only one-sided.

**Paper or page:** [Analysis for idempotent states on quantum permutation groups](https://arxiv.org/abs/2301.13423), [Analysis for idempotent states on quantum permutation groups](https://arxiv.org/abs/2301.13423). It says: “Let 𝔾 be a compact quantum group and φ∈C(𝔾)\* an idempotent state. Then φ is a Haar idempotent if and only if the null-space Nᵩ = { f∈C(𝔾) : φ(\|f\|²)=0 } is a two-sided ideal.”

**Sources:**

- [A. Pal, A counterexample on idempotent states on a compact quantum group, Letters in Mathematical Physics 37 (1996) 75–77](https://doi.org/10.1007/BF00400140)
- [U. Franz, A. Skalski and R. Tomatsu, Idempotent states on compact quantum groups and their classification on Uq(2), SUq(2), and SOq(3), Journal of Noncommutative Geometry 7 (2013) 221–254](https://doi.org/10.4171/JNCG/115)
- [U. Franz and A. Skalski, On idempotent states on quantum groups, Journal of Algebra 322 (2009) 1774–1802](https://doi.org/10.1016/j.jalgebra.2009.05.037)

### Fixing a state lets quantum automorphism groups of matrix algebras exist

**Remember:** Fix a state on Mₙ, and a largest quantum symmetry group appears.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 4: research.

**Definition.** An action α of a compact quantum group on B preserves the state ψ if (ψ⊗id)α(b) = ψ(b)1 for all b ∈ B, so it acts unitarily on L²(B,ψ) (our own). A ψ-preserving action is universal if every other ψ-preserving action comes from it by a unique compact quantum group morphism.

**Problem.** For every finite-dimensional C\*-algebra B with a faithful state ψ, a universal compact quantum group acting on B and preserving ψ exists. Without the condition on ψ, the matrix algebra Mₙ with n ≥ 2 has no universal compact quantum group acting on it.

**How the definition helps.** Preserving ψ makes every action unitary on the fixed finite-dimensional space L²(B,ψ), so the universal object is a quotient of a universal unitary quantum group (our own). Without ψ, Wang showed that the actions on Mₙ have no final object (our own). For B = ℂⁿ no state is needed, since Sₙ⁺ is universal and preserves the uniform state (our own).

**Paper or page:** [On the von Neumann algebra of class functions on a compact quantum group](https://arxiv.org/abs/2103.06216), [A quantum Frucht's theorem and quantum automorphisms of quantum Cayley graphs](https://arxiv.org/abs/2503.11149). It says: “the quantum automorphism group of a finite dimensional C∗-algebra equipped with a δ-form”

**Sources:**

- [S. Wang, Quantum symmetry groups of finite spaces, Communications in Mathematical Physics 195 (1998) 195–211](https://doi.org/10.1007/s002200050385)

### Monoidal equivalence lets a genuine quantum group share SO(3)'s representations

**Remember:** Equivalent representation tensor categories have the same fusion rules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 18M05. arXiv math.OA, math.QA. Level 4: research.

**Definition.** Two compact quantum groups are monoidally equivalent if their finite-dimensional unitary representation categories are equivalent as C\*-tensor categories. Then they have matching irreducible representations with the same tensor product multiplicities, even when one function algebra is commutative and the other is not (our own).

**Problem.** The quantum permutation group S₄⁺ is monoidally equivalent to SO(3), though C(S₄⁺) is not commutative. So S₄⁺ has the fusion rules of SO(3), and properties of discrete duals that depend only on the tensor category pass between them.

**How the definition helps.** Fusion rules are read from the tensor category, so a tensor equivalence preserves them (our own). Banica's computation of the representations of S₄⁺ supplies the equivalence with SO(3) (our own).

**Paper or page:** [Classification of Quantum Graphs on M₂ and their Quantum Automorphism Groups](https://arxiv.org/abs/2110.09085), [The approximation property for locally compact quantum groups](https://arxiv.org/abs/2305.04894). It says: “(1) The special orthogonal group SO(3) is monoidally equivalent to the quantum symmetric group S₄⁺.”

**Sources:**

- [J. Bichon, A. De Rijdt and S. Vaes, Ergodic coactions with large multiplicity and monoidal equivalence of quantum groups, Communications in Mathematical Physics 262 (2006) 703–728](https://doi.org/10.1007/s00220-005-1442-2)

### Putting Haar weights in the axioms gives Pontryagin duality for quantum groups

**Remember:** Haar weights are axioms, so the regular representation and dual exist.

*Makes the theorem clean to state or prove.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 4: research.

**Definition.** A locally compact quantum group is a von Neumann algebra M with a normal unital coassociative \*-homomorphism Δ: M → M ⊗̄ M. Its axioms require a left-invariant and a right-invariant faithful normal semifinite weight, the quantum Haar weights, which build the regular representation. Left invariance means φ((ω⊗id)Δx) = ω(1)φ(x) for normal positive ω and positive x with φ(x) &lt; ∞, and right invariance is the mirror condition.

**Problem.** Every locally compact quantum group G has a dual locally compact quantum group Ĝ, and the dual of Ĝ is isomorphic to G. This extends Pontryagin duality and covers non-Kac examples such as quantum SU(2).

**How the definition helps.** The Haar weights supply the regular representation from which the dual is built, so no existence theorem for Haar measure is needed (our own). Kustermans and Vaes show that the dual satisfies the same axioms and that its dual is G again (our own).

**Wikipedia:** [Locally compact quantum group](https://en.wikipedia.org/wiki/Locally_compact_quantum_group). It says: “One of the main features distinguishing this new approach from its predecessors is the axiomatic existence of left and right invariant weights.”

**Sources:**

- [J. Kustermans and S. Vaes, Locally compact quantum groups, Annales Scientifiques de l'École Normale Supérieure 33 (2000) 837–934](https://doi.org/10.1016/S0012-9593(00)01055-7)

### The reduced completion makes the Haar state faithful

**Remember:** Divide out what the Haar state cannot see.

*Rules out counterexamples.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 46L30. arXiv math.OA. Level 4: research.

**Definition.** The reduced algebra Cᵣ(G) of a compact quantum group is the image of C(G) in the GNS representation of its Haar state h. This divides out the elements a with h(a\*a) = 0, the ones that h cannot see.

**Problem.** The Haar state of Cᵣ(G) is faithful, for every compact quantum group G. On the full algebra it can fail to be faithful, as for the dual of the free group F₂.

**How the definition helps.** Once the elements that h cannot see are divided out, h(a\*a) = 0 forces a = 0, which is faithfulness. The hard step, that these elements form a two-sided ideal, uses Woronowicz's modular theory of h (our own). For the dual of F₂, the full algebra C\*(F₂) has the canonical trace as Haar state, and it is not faithful because F₂ is not amenable (our own).

**Paper or page:** [Convergence of Fourier truncations for compact quantum groups and finitely generated groups](https://arxiv.org/abs/2210.00387). It says: “Assume that (𝒜,Δ) is in reduced form, that is, its Haar state is faithful.”

**Sources:** none listed. No primary source with a working link was found.

### Closure under holomorphic functional calculus preserves operator K-theory

**Remember:** Holomorphic functions turn near-idempotents into true idempotents inside the subalgebra.

*Makes the theorem clean to state or prove.* MSC 46L80 (K-theory and operator algebras (including cyclic theory)), 58B34, 46H30. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A dense subalgebra 𝒜 of a C\*-algebra A is closed under holomorphic functional calculus if f(a) ∈ 𝒜 whenever a ∈ 𝒜 and f is holomorphic near the spectrum of a. So idempotents and inverses made from elements of 𝒜 by contour integrals stay in 𝒜 (our own), as for C∞(M) inside C(M).

**Problem.** Suppose 𝒜 and all its matrix algebras are closed under holomorphic functional calculus in the matrix algebras of A. Then the inclusion gives K₀(𝒜) ≅ K₀(A), and likewise for K₁, so cyclic cocycles on 𝒜 pair with all of the K-theory of A.

**How the definition helps.** Every idempotent of A is close to an element of the dense algebra (our own). A contour integral turns that element into an idempotent of 𝒜 in the same K-theory class, and the same works for invertibles, paths and matrix algebras (our own). So the inclusion is a K-theory isomorphism, and cyclic cocycles on 𝒜 pair with all of K∗(A) (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “Since, on the other hand, cyclic homology degenerates on C\*-algebras, there came up the need to define modified theories.”

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “for each n, Mₙ(𝒜) is closed under the holomorphic functional calculus in Mₙ(A) so that ι\*:K\*(𝒜) → K\*(A) is an isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Stabilizing by the compact operators makes algebraic and topological K-theory agree

**Remember:** After stabilizing, the determinant disappears and the two K-theories agree.

*Rules out counterexamples.* MSC 46L80 (K-theory and operator algebras (including cyclic theory)), 19D50. arXiv math.KT, math.OA. Level 4: research.

**Definition.** The stabilization of a C\*-algebra A is A ⊗ 𝒦, its spatial tensor product with the compact operators 𝒦 on a separable infinite-dimensional Hilbert space. The room for infinitely many copies of A removes algebraic invariants, such as the determinant, that topological K-theory cannot see (our own).

**Problem.** For every C\*-algebra A and every n ≥ 0, the natural map Kₙᵃˡᵍ(A ⊗ 𝒦) → Kₙ(A ⊗ 𝒦) is an isomorphism.

**How the definition helps.** On stable C\*-algebras algebraic K-theory is split exact, by the excision theorem of Suslin and Wodzicki (our own). Higson's theorem makes stable split-exact functors homotopy invariant, so the two theories agree (our own). Without stabilization the theorem fails: K₁ᵃˡᵍ(ℂ) = ℂˣ through the determinant, but K₁(ℂ) = 0 (our own).

**Wikipedia:** [Karoubi conjecture](https://en.wikipedia.org/wiki/Karoubi_conjecture). It says: “the Karoubi conjecture was a conjecture by Max Karoubi that the algebraic and topological K-theories coincide on C\* algebras spatially tensored with the algebra of compact operators.”

**Sources:**

- [Andrei Suslin and Mariusz Wodzicki, Excision in algebraic K-theory, Annals of Mathematics 136 (1992) 51–122](https://doi.org/10.2307/2946546)
- [Max Karoubi, K-théorie algébrique de certaines algèbres d'opérateurs, Lecture Notes in Mathematics 725, Springer (1979) 254–290](https://doi.org/10.1007/BFb0062621)

### The Pimsner–Voiculescu Toeplitz algebra turns crossed products by ℤ into six-term sequences

**Remember:** A Toeplitz algebra that looks like A extends the crossed product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L80 (K-theory and operator algebras (including cyclic theory)), 46L55. arXiv math.OA, math.KT. Level 4: research.

**Definition.** The Pimsner–Voiculescu Toeplitz algebra of an automorphism α of A is generated by a ⊗ 1 and au ⊗ S for a ∈ A. Here u implements α and S is the unilateral shift. It is an extension of A ⋊α ℤ by A ⊗ 𝒦, and it has the same K-theory as A (our own).

**Problem.** For every automorphism α of a C\*-algebra A there is a six-term exact sequence K₀(A) → K₀(A) → K₀(A ⋊α ℤ) → K₁(A) → K₁(A) → K₁(A ⋊α ℤ) → K₀(A). The maps from K∗(A) to K∗(A) are 1 − α∗.

**How the definition helps.** The six-term sequence of this extension has K∗(A ⊗ 𝒦) = K∗(A) for the ideal and K∗(A) for the middle algebra (our own). Under these identifications, the map from the ideal to the middle algebra is 1 − α∗ (our own).

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “For a C\*-algebra A and an action α ∈ Aut(A) there is a Pimsner-Voiculescu exact sequence in K-homology for the crossed product A ⋊φ ℤ”

**Sources:**

- [Levi Lorenzo, Finitely summable K-homology, the index pairing, and Cantor minimal systems, arXiv:2505.24135 (2025)](https://arxiv.org/abs/2505.24135)

### Viewing a correspondence as a KK class gives the Cuntz–Pimsner exact sequence

**Remember:** The correspondence is a KK class, and 1 − \[E\] drives everything.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L80 (K-theory and operator algebras (including cyclic theory)), 19K35, 46L08. arXiv math.OA, math.KT. Level 4: research.

**Definition.** An A-correspondence is a right Hilbert A-module E with a left action of A by adjointable operators. When A is separable, E is countably generated and A acts by compact operators, the pair (E, 0) is a Kasparov cycle, so E itself gives a class \[E\] in KK(A,A).

**Problem.** Let A be separable and act on a countably generated E injectively and by compact operators. Then there is a six-term exact sequence K₀(A) → K₀(A) → K₀(𝒪(E)) → K₁(A) → K₁(A) → K₁(𝒪(E)) → K₀(A). The maps from K∗(A) to K∗(A) are 1 − \[E\], the identity minus the Kasparov product with \[E\].

**How the definition helps.** Pimsner's Toeplitz extension has quotient 𝒪(E), and its ideal and middle algebra are both KK-equivalent to A (our own). Under these identifications, the map from the ideal to the middle algebra is 1 − \[E\], which gives the sequence (our own).

**Wikipedia:** [Hilbert C\*-module](https://en.wikipedia.org/wiki/Hilbert_C%2A-module). It says: “In particular, graph algebras, crossed products by ℤ, and the Cuntz algebras are all quotients of specific Toeplitz algebras.”

**Sources:**

- [Mihai V. Pimsner, A class of C\*-algebras generalizing both Cuntz–Krieger algebras and crossed products by ℤ, in Free Probability Theory, Fields Institute Communications 12, American Mathematical Society (1997) 189–212](https://doi.org/10.1090/fic/012/08)

### Defining the primitive ideal topology by ideals makes it Morita invariant

**Remember:** Same ideal lattice, same primitive spectrum, same space when commutative.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L08. arXiv math.OA. Level 4: research.

**Definition.** The primitive ideal space Prim(A) is the set of kernels of irreducible representations, with the hull–kernel topology: its closed sets are the primitive ideals that contain a given ideal. So the space and its topology are read off from the lattice of ideals alone (our own).

**Problem.** Morita equivalent C\*-algebras have homeomorphic primitive ideal spaces. For locally compact Hausdorff X,Y, Morita equivalence of C₀(X) and C₀(Y) therefore implies X ≅ Y and C₀(X) ≅ C₀(Y).

**How the definition helps.** Rieffel's correspondence gives a lattice isomorphism of ideals between Morita equivalent algebras, and induction matches the primitive ideals (our own). Since the topology is defined only through ideals, this is a homeomorphism (our own). For commutative algebras Prim(C₀(X)) is X, so Morita equivalence gives X ≅ Y (our own).

**Paper or page:** [The Rieffel Correspondence for Equivalent Fell Bundles](https://arxiv.org/abs/2309.12116). It says: “In particular, J ↦ X·J is a lattice isomorphism of ℐ(B) onto 𝒞(X) with inverse Y ↦ ⟨Y,Y⟩<sub>B</sub>, and K ↦ K·X is a lattice isomorphism of ℐ(A) onto 𝒞(X)”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)

### Symmetric imprimitivity makes noncommutative tori in one GL(2,ℤ) orbit Morita equivalent

**Remember:** Swap which lattice acts on the line and θ becomes 1/θ.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L55, 58B34. arXiv math.OA. Level 4: research.

**Definition.** For θ ≠ 0, A(θ) is the crossed product C(ℝ/ℤ) ⋊ θℤ, in which θ acts on the circle by rotation through 2πθ. So A(θ) comes from the line ℝ and two lattices, ℤ dividing it out and θℤ acting on the quotient (our own).

**Problem.** Let nonzero real θ,η be related by η = (aθ+b)/(cθ+d) with an integer matrix of determinant ±1 and cθ+d ≠ 0. Then A(θ) and A(η) are Morita equivalent, in particular for η = 1/θ.

**How the definition helps.** Symmetric imprimitivity makes C(ℝ/K) ⋊ H and C(H∖ℝ) ⋊ K Morita equivalent for lattices H and K in ℝ, so no bimodule is built by hand (our own). With H = ℤ and K = θℤ, rescaling turns this into A(1/θ) \~ A(θ) (our own). Together with A(θ) ≅ A(θ+1) ≅ A(−θ), these moves generate the GL(2,ℤ) action (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “Furthermore, two noncommutative tori with paremeters θ₁ and θ₂ are Morita equivalent if and only if θ₁ and θ₂ are in the same orbit with respect to the action of GL(2,Z) on U(1)”

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “In particular, the noncommutative tori with θ rational are Morita equivalent to the classical torus.”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976) 7–22](https://doi.org/10.1007/BF01418238)
- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Liquid tensor products of holomorphic functions on discs give polydisc functions

**Remember:** Tensor disc functions, get polydisc functions; tensor disjoint discs, get zero.

*Makes the theorem clean to state or prove.* MSC 46M05 (Tensor products in functional analysis), 46A32, 32A38. arXiv math.FA, math.CV. Level 4: research.

**Definition.** For condensed complex vector spaces V and W, the liquid tensor product of their liquidifications L(V) and L(W) is L(V ⊗ W). On the spaces O(D) of germs of holomorphic functions near a closed disc D, it behaves like the completed tensor product of function spaces (our own).

**Problem.** The k-fold liquid tensor product of O(D) is the space O(Dᵏ) of holomorphic functions on the open polydisc. For disjoint closed discs D₁ and D₂ in ℂ, the derived liquid tensor product of O(D₁) and O(D₂) over ℂ\[z\] is 0.

**How the definition helps.** Liquid tensor products of holomorphic function spaces give holomorphic functions on the product, so the k-fold product of O(D) is O(Dᵏ) (our own). Over ℂ\[z\], the derived product is computed by multiplication by z₁ − z₂ on O(D₁ × D₂) (our own). Disjoint discs make z₁ − z₂ invertible, so the result is 0 (our own).

**nLab:** [gaseous vector space](https://ncatlab.org/nlab/show/gaseous+vector+space). It says: “tensor products of spaces of holomorphic or real-analytic functions behave correctly under the gaseous tensor product, but tensor products of spaces of C<sup>∞</sup>-functions are only correct under the liquid tensor product”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)
- [Dustin Clausen, Peter Scholze, Condensed Mathematics and Complex Geometry, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/Complex.pdf)

### Almost unit balls determine Banach modules together with their exact norms

**Remember:** Up to almost zero, the unit ball remembers the norm exactly.

*Rules out counterexamples. Confidence: medium.* MSC 46S10 (Functional analysis over fields other than ℝ or ℂ or the quaternions; non-Archimedean functional analysis), 46H25, 13J10. arXiv math.NT, math.FA. Level 4: research.

**Definition.** Let A be a Banach ring with a norm-multiplicative, topologically nilpotent unit ϖ, ‖ϖ‖ ≤ 1, with compatible pⁿ-th roots of norm ‖ϖ‖<sup>(1/pⁿ)</sup>. The almost unit ball of a Banach A-module is its closed unit ball, with modules killed by all roots of ϖ treated as zero. This makes any two lattices with the same gauge norm equal.

**Problem.** Taking almost unit balls equates submetric Banach A-modules and ϖ-adically complete, ϖ-torsion-free almost modules over the closed unit ball of A. The Banach module maps are contractions, and the almost unit ball determines the norm exactly.

**How the definition helps.** Since almost equal lattices are exactly those with the same gauge norm, the norm becomes an invariant of the almost module. For example, the open and closed unit balls each lie in the other after multiplying by any root of ϖ, so they are almost equal (our own). Without almost mathematics, a lattice fixes the norm only up to equivalence, as the paper's abstract says.

**Paper or page:** [Banach modules, almost mathematics and condensed mathematics](https://arxiv.org/abs/2508.11268). It says: “form a pair of quasi-inverse equivalences between the category Ban<sub>A</sub><sup>≤1</sup> of submetric Banach (A, ‖⋅‖)-modules with submetric A-module maps and the category of ϖ-adically complete, ϖ-torsion-free almost modules over the closed unit ball A\_≤1.”

**Sources:**

- [Dimitri Dine, Banach modules, almost mathematics and condensed mathematics, arXiv:2508.11268](https://arxiv.org/abs/2508.11268)

### The solid tensor product keeps adically complete modules complete

**Remember:** Solid tensor products of complete modules are complete, so ℤₚ ⊗ ℤₚ = ℤₚ.

*Rules out counterexamples.* MSC 46S10 (Functional analysis over fields other than ℝ or ℂ or the quaternions; non-Archimedean functional analysis), 13J10, 13D09. arXiv math.AG, math.AC. Level 4: research.

**Definition.** The derived solid tensor product is the solidification of the derived condensed tensor product, so products of copies of ℤ tensor to products again (our own reading of the condensed notes). A solid A-module complex M is derived I-complete if M → Rlimₙ(M ⊗ᴸ<sub>A</sub> A/Iⁿ) is an equivalence, using solid tensors.

**Problem.** Let A be a commutative ring of finite type over ℤ and I an ideal. The derived solid tensor product over A of two bounded-below I-complete solid A-module complexes is again bounded below and I-complete. For instance, the derived solid tensor square of ℤₚ over ℤ is ℤₚ.

**How the definition helps.** Since solid tensor products of products of ℤ are again products, completion is built in (our own reading of the condensed notes, Proposition 6.3). This removes the ordinary ℤₚ ⊗ ℤₚ over ℤ, which contains a nonzero ℚ-vector space and is not p-adically complete (our own). For a general ideal I, the cited corollary shows that completion at I is symmetric monoidal.

**Paper or page:** [Beilinson-Parshin adeles via solid algebraic geometry](https://arxiv.org/abs/2403.08472), [The 6-Functor Formalism for ℤℓ- and ℚℓ-Sheaves on Diamonds](https://arxiv.org/abs/2209.08135). It says: “In particular, the tensor product of a pair of I-complete eventually connective A■-modules is I-complete.”

**Sources:**

- [Peter Scholze, Lectures on Condensed Mathematics (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Christopher Brav, Grigorii Konovalov, Beilinson-Parshin adeles via solid algebraic geometry, arXiv:2403.08472](https://arxiv.org/abs/2403.08472)

### Unique extension along completed free groups makes solid abelian groups abelian

**Remember:** Solid groups cannot tell a free group from its completion.

*True by definition.* MSC 46S10 (Functional analysis over fields other than ℝ or ℂ or the quaternions; non-Archimedean functional analysis), 18F20. arXiv math.AG, math.FA. Level 4: research.

**Definition.** For a profinite set S = lim Sᵢ, let ℤ\[S\]■ = lim ℤ\[Sᵢ\], the completed free group on S. A condensed abelian group, a sheaf of abelian groups on profinite sets, is solid if every map from S into it extends uniquely to a group map from ℤ\[S\]■.

**Problem.** Solid abelian groups form an abelian subcategory of condensed abelian groups, closed under all limits, colimits and extensions. Products of copies of ℤ are compact projective generators, and the inclusion has a left adjoint, called solidification.

**How the definition helps.** The unique-extension condition says that solid groups are the modules over the analytic ring ℤ■ (our own). The general theorem on analytic rings then gives the closure properties, generators and left adjoint (our own). The real work is proving that ℤ■ is analytic, using Nöbeling's theorem that continuous integer-valued functions on a profinite set form a free group (our own).

**nLab:** [solid abelian group](https://ncatlab.org/nlab/show/solid+abelian+group). It says: “A solid abelian group is a condensed abelian group A such that for all profinite sets S and all maps f:S → A, there is a unique map g:ℤ\[S\]<sup>□</sup> → A such that f = g ∘ m.”

**Sources:**

- [Peter Scholze, Lectures on Condensed Mathematics (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
