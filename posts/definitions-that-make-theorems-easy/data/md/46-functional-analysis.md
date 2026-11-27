### For 0 &lt; p ≤ 1, dropping the p-th root gives a metric

**Remember:** For small p, drop the root and the triangle inequality comes back.

*Rules out counterexamples. Confidence: medium.* MSC 46B20 (Geometry and structure of normed linear spaces), 54E35. arXiv math.FA. Level 1: early undergraduate.

**Definition.** For 0 &lt; p ≤ 1, let ℓᵖ consist of scalar sequences x with ∑ᵢ \|xᵢ\|ᵖ finite. Define d(x,y) = ∑ᵢ \|xᵢ − yᵢ\|ᵖ.

**Problem.** The function d is a metric on ℓᵖ. For 0 &lt; p &lt; 1, taking its p-th root breaks the triangle inequality.

**How the definition helps.** Our own proof adds the coordinate inequalities \|a + b\|ᵖ ≤ \|a\|ᵖ + \|b\|ᵖ. Symmetry and separation follow term by term. For distinct coordinate unit vectors, the rooted distance is 2¹⁄ᵖ, while the route through zero has length two.

**nLab:** [p-norm](https://ncatlab.org/nlab/show/p-norm). It says: “A variant definition for 0 &lt; p ≤ 1 (which agrees with the usual definition for p = 1, preserving continuity in p) leaves out the pth root; then the result satisfies the triangle inequality (and indeed is a metric)”

**Sources:** none listed. No primary source with a working link was found.

### Pythagoras is trivial in an inner product space

**Remember:** Define perpendicular and length by one inner product; Pythagoras is expanding a square.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 51F20. arXiv math.FA, math.MG. Level 1: early undergraduate.

**Definition.** An inner product space is a real vector space with a symmetric, positive definite bilinear form ⟨−,−⟩. The length of v is \|v\| = √⟨v,v⟩. The vectors v and w are perpendicular, written v ⊥ w, when ⟨v,w⟩ = 0.

**Problem.** In an inner product space, if v ⊥ w then \|v + w\|² = \|v\|² + \|w\|².

**How the definition helps.** Perpendicularity and length both come from one inner product, so the theorem is one line of algebra. Expand \|v + w\|² = \|v\|² + \|w\|² + 2⟨v,w⟩, and the cross term is zero when v ⊥ w. The nLab notes that the real work moves elsewhere: one must show that Euclidean geometry carries an inner product structure.

**nLab:** [Pythagorean theorem](https://ncatlab.org/nlab/show/Pythagorean+theorem). It says: “That the Pythagorean Theorem holds in an inner product space is trivial; all that matters is establishing that one is, in fact, working in an inner product space.”

**Sources:** none listed. No primary source with a working link was found.

### Continuity makes the integral of \|x\| a norm, with no identification needed

**Remember:** A continuous function that is nonzero somewhere is nonzero on a whole interval.

*Rules out counterexamples.* MSC 46E05 (Lattices of continuous, differentiable or analytic functions), 46B20, 26A42. arXiv math.FA, math.CA. Level 1: early undergraduate.

**Definition.** For real a &lt; b, C\[a,b\] consists of all continuous real functions on \[a,b\]. Define ‖x‖₁ as the integral of \|x\| over \[a,b\].

**Problem.** On C\[a, b\], ‖x‖₁ = ∫ₐᵇ \|x(t)\| dt is a norm. On all integrable functions it is only a seminorm.

**How the definition helps.** Continuity rules out nonzero functions that the integral cannot see. Our own sketch: if x(t₀) ≠ 0, then \|x\| &gt; \|x(t₀)\|/2 on some interval, so the integral of \|x\| is positive. Our own counterexample: the function that is 1 at one point and 0 elsewhere has integral 0. So on C\[a, b\] no identification of functions almost everywhere is needed, as it is for L¹.

**Paper or page:** [1-Seminorm on Continuous on Closed Interval Real-Valued Functions is Norm](https://proofwiki.org/wiki/1-Seminorm_on_Continuous_on_Closed_Interval_Real-Valued_Functions_is_Norm). It says: “Let ‖x‖₁ := ∫ₐᵇ \|x(t)\| dt be the 1-seminorm. Then ‖·‖₁ is a norm on C\[a, b\].”

**Sources:**

- [ProofWiki, 1-Seminorm on Continuous on Closed Interval Real-Valued Functions is Norm](https://proofwiki.org/wiki/1-Seminorm_on_Continuous_on_Closed_Interval_Real-Valued_Functions_is_Norm)

### The graph norm reduces the closed graph theorem to inversion

**Remember:** Make the image part of the norm, then compare the two norms.

*True by definition.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including \\(B\\)-, \\(B<sub>r</sub>\\)-completeness)), 47A05. arXiv math.FA. Level 2: later undergraduate.

**Definition.** For a linear map T between normed spaces X and Y, the graph norm of x ∈ X is ‖x‖ₓ + ‖Tx‖ᵧ.

**Problem.** A linear map between Banach spaces is bounded if its graph, the set of pairs (x,Tx), is closed.

**How the definition helps.** In our own proof, the graph norm turns a closed graph into a complete domain. The map x ↦ (x,Tx) preserves distances from this domain onto the closed graph in the complete product. The identity from the graph-norm domain to the original domain is a bounded bijection between Banach spaces. The bounded inverse theorem gives ‖x‖ + ‖Tx‖ ≤ C‖x‖, so T is bounded.

**Paper or page:** [Closed Graph Theorem/Banach Space](https://proofwiki.org/wiki/Closed_Graph_Theorem/Banach_Space). It says: “is closed in the direct product X × Y equipped with the direct product norm”

**Sources:** none listed. No primary source with a working link was found.

### The dual unit ball recovers the norm of every vector

**Remember:** Test with functionals that never stretch, and one test reaches the norm.

*Makes the theorem clean to state or prove.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The normed dual consists of the bounded linear scalar-valued maps, not all linear scalar-valued maps. Put f in its unit ball exactly when \|f(y)\| ≤ ‖y‖ for every vector y.

**Problem.** The norm of a vector in a normed space is the supremum of \|f(x)\| over the dual unit ball.

**How the definition helps.** In our own proof, the dual unit ball gives the upper bound \|f(x)\| ≤ ‖x‖ for every test. For nonzero x, the functional f(tx) = t‖x‖ attains the bound on the line through x. The Hahn–Banach theorem extends it to the whole space with the same norm.

**Paper or page:** [Norm in terms of Normed Dual Space](https://proofwiki.org/wiki/Norm_in_terms_of_Normed_Dual_Space). It says: “$\\ds \\norm x = \\sup\_{f \\in B<sub>X<sup>\\ast</sub>^-}</sup> \\cmod {\\map f x}$”

**Sources:** none listed. No primary source with a working link was found.

### The quotient norm identifies its dual with the annihilator

**Remember:** Vanishing on the subspace means a functional sees only the coset.

*Makes the theorem clean to state or prove.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The dual of a normed space consists of its bounded linear maps to scalars, called functionals. The annihilator of a subspace M consists of those functionals that vanish on M. The quotient norm of a coset x + M is the infimum of the norms of its representatives.

**Problem.** For a closed subspace M of a normed space X, the dual of X/M and the annihilator of M are isometrically isomorphic. That is, they match by a linear bijection that preserves norms.

**How the definition helps.** In our own proof, taking the infimum over representatives preserves the bound on a functional that vanishes on M. Such a functional takes one value throughout each coset, so it defines a functional on the quotient. Conversely, composing a quotient functional with the quotient map preserves its bound because the map never increases norms. The two constructions undo each other, so the norms agree.

**Paper or page:** [Normed Dual Space of Normed Quotient Vector Space is Isometrically Isomorphic to Annihilator](https://proofwiki.org/wiki/Normed_Dual_Space_of_Normed_Quotient_Vector_Space_is_Isometrically_Isomorphic_to_Annihilator). It says: “(X/Y)∗ is isometrically isomorphic to Y⊥”

**Sources:** none listed. No primary source with a working link was found.

### The operator norm makes bounded maps a complete space

**Remember:** Take pointwise limits, then keep the same uniform error bound.

*Makes the theorem clean to state or prove.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 47A05. arXiv math.FA. Level 2: later undergraduate.

**Definition.** Define the operator norm of a bounded linear map T as the supremum of ‖Tx‖ over ‖x‖ ≤ 1. It measures error uniformly on the unit ball, unlike convergence tested on each vector separately.

**Problem.** Bounded linear maps from a normed space to a Banach space form a Banach space in the operator norm.

**How the definition helps.** In our own proof, the operator norm gives one error bound for the whole unit ball. For a Cauchy sequence of maps, completeness of the target gives a limit at each vector. The resulting map is linear, and the uniform error bound still holds after taking the pointwise limit. Thus the limit is bounded and the maps converge to it in operator norm.

**nLab:** [Banach space](https://ncatlab.org/nlab/show/Banach+space). It says: “This will be a Banach space if (and, except for degenerate cases of V, only if) W is a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Closed subspaces make distance a quotient norm

**Remember:** Only vectors in a closed subspace have zero distance from it.

*Rules out counterexamples.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A coset x + M consists of all vectors x + m with m in the subspace M. Its quotient seminorm is the distance from x to M.

**Problem.** For a closed subspace M of a normed space, distance to M defines a norm on the cosets.

**How the definition helps.** In our own proof, closedness ensures that distance zero puts x in M, so only the zero coset has length zero. Scaling and the triangle inequality give the other norm laws. Without closedness, take M to consist of the finitely supported sequences in the space of square-summable sequences. Truncating a sequence with infinitely many nonzero terms shows that its coset can have length zero even when the sequence lies outside M.

**Paper or page:** [Quotient Norm is Norm](https://proofwiki.org/wiki/Quotient_Norm_is_Norm). It says: “Then $\\norm {\\, \\cdot \\,}<sub>X/N</sub>$ is indeed a norm.”

**Sources:** none listed. No primary source with a working link was found.

### Completeness lets pointwise bounds control operator norms

**Remember:** One bound per vector gives one bound for all operators on a Banach domain.

*Rules out counterexamples.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A Banach space is a normed space in which all Cauchy sequences converge. A family is pointwise bounded if the values at each fixed vector are bounded across the family.

**Problem.** A pointwise bounded family of bounded linear operators from a Banach space into a normed space has uniformly bounded operator norms.

**How the definition helps.** In our own proof, completeness lets the Baire category theorem give a common bound throughout some ball. Subtraction gives a bound near zero, and scaling gives a bound on the unit ball. For a counterexample, take finitely supported sequences with the supremum norm and use the functionals x ↦ nxₙ. Their values stay bounded at each fixed sequence, yet their norms grow as n.

**Paper or page:** [From Uniform Boundedness to the Boundary Between Convergence and Divergence](https://arxiv.org/abs/2011.13871). It says: “Let X be a Banach space and let Y be a normed space. Consider a family F of bounded linear operators T : X → Y. If F is pointwise bounded, then it is uniformly bounded.”

**Sources:**

- [Stefan Banach and Hugo Steinhaus, Sur le principe de la condensation de singularités, Fundamenta Mathematicae 9 (1927), 50–61.](https://doi.org/10.4064/fm-9-1-50-61)

### Quotient norms make the quotient map open

**Remember:** Below the radius means some representative is inside the ball.

*True by definition.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The coset x + M consists of the vectors differing from x by an element of the closed subspace M. Its quotient norm is the infimum of the norms of those vectors. The quotient map sends x to x + M.

**Problem.** The map sending vectors to cosets of a closed subspace is open in the quotient norm. That is, it sends open sets to open sets.

**How the definition helps.** In our own proof, the infimum puts a coset inside an open ball exactly when some representative lies in the original ball. Our own argument translates this fact from balls around zero to balls around any point. Open sets are unions of such balls, so no completeness or open mapping theorem is needed.

**Paper or page:** [Quotient Mapping Maps Unit Open Ball in Normed Vector Space to Unit Open Ball in Normed Quotient Vector Space](https://proofwiki.org/wiki/Quotient_Mapping_Maps_Unit_Open_Ball_in_Normed_Vector_Space_to_Unit_Open_Ball_in_Normed_Quotient_Vector_Space). It says: “\\map \\pi {B<sub>X</sub>} = B<sub>X/N</sub>”

**Sources:** none listed. No primary source with a working link was found.

### The quotient norm lets close cosets lift to close vectors

**Remember:** Choose short representatives of the differences between successive cosets.

*Makes the theorem clean to state or prove.* MSC 46B99 (Normed linear spaces and Banach spaces; Banach lattices). arXiv math.FA. Level 2: later undergraduate.

**Definition.** In a quotient by a closed subspace M, the coset x + M groups vectors that differ by an element of M. Define its norm as the infimum of the norms of all its representatives.

**Problem.** The quotient of a Banach space by a closed subspace is again a Banach space.

**How the definition helps.** In our own proof, the infimum lets us lift small differences between cosets to short vectors. From a Cauchy sequence of cosets, choose a subsequence whose successive differences have norms below 2⁻ⁿ at step n. Choose representatives of those differences with the same bounds and add them to a representative of the first coset. Completeness gives a limit whose coset is the subsequence limit and hence the limit of the Cauchy sequence.

**Wikipedia:** [Quotient space (linear algebra)](https://en.wikipedia.org/wiki/Quotient_space_%28linear_algebra%29). It says: “If X is a Banach space and M is a closed subspace of X, then the quotient X/M is again a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Dense orthonormal spans turn Bessel’s bound into equality

**Remember:** A dense span leaves no part of the squared norm uncounted.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** An orthonormal basis is a set of mutually perpendicular unit vectors whose finite linear combinations are dense. An orthonormal set without this density need not see every part of a vector.

**Problem.** For a countable orthonormal basis of a Hilbert space, the sum of squared magnitudes of the inner products with a vector equals its squared norm.

**How the definition helps.** In our own proof, dense span makes the error of projection onto the first n basis vectors tend to zero. Each projection gives the closest point in its span, so its error is at most that of any approximation there. Pythagoras expresses the squared norm as the partial coordinate sum plus the squared error. Taking the limit gives equality.

**Wikipedia:** [Orthonormal basis](https://en.wikipedia.org/wiki/Orthonormal_basis). It says: “An orthonormal basis is an orthonormal system with the additional property that the linear span of S is dense in H.”

**Sources:** none listed. No primary source with a working link was found.

### Dense span lets every orthonormal set extend to a basis

**Remember:** A Hilbert basis needs dense span, not finite formulas for every vector.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** An orthonormal set consists of mutually perpendicular unit vectors. It is an orthonormal basis if finite linear combinations of its vectors approximate every vector arbitrarily closely.

**Problem.** Every orthonormal set in a Hilbert space extends to an orthonormal basis.

**How the definition helps.** Dense span makes a maximal orthonormal set a basis. Zorn’s lemma extends the given set to a maximal one. In our own argument, if its closed span misses a vector, subtract that vector’s orthogonal projection onto the span. Normalizing the nonzero perpendicular remainder would enlarge the set.

**nLab:** [orthogonal basis](https://ncatlab.org/nlab/show/orthogonal+basis). It says: “any maximal orthogonal set (which must exist by an application of Zorn's lemma) is necessarily a basis in the topological sense.”

**Sources:** none listed. No primary source with a working link was found.

### Inner product tests give bounded sequences weakly convergent subsequences

**Remember:** Weak convergence means convergence of inner products against every fixed vector.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A sequence converges weakly to x if its inner products with each fixed test vector converge to the corresponding inner product with x. Norm convergence instead asks that the norm of the difference from x tend to zero.

**Problem.** Every bounded sequence in a Hilbert space has a weakly convergent subsequence.

**How the definition helps.** In our own proof, inner product tests on a countable dense subset of the sequence’s closed span suffice because the sequence is bounded. A diagonal subsequence gives convergence on those tests, and the uniform bound extends convergence to the whole span. Riesz representation gives the limiting vector there. Projecting any other test vector onto that span leaves all its inner products with the sequence unchanged.

**Wikipedia:** [Weak convergence (Hilbert space)](https://en.wikipedia.org/wiki/Weak_convergence_%28Hilbert_space%29). It says: “every bounded sequence xₙ in a Hilbert space H contains a weakly convergent subsequence.”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal projection gives Bessel’s inequality

**Remember:** Project into the subspace so the remainder is perpendicular to it.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The orthogonal projection of x onto a finite-dimensional subspace is the unique point p in it for which x − p is perpendicular to it. Equivalently, p is the closest point to x in the subspace.

**Problem.** For a countable orthonormal set in an inner product space, the sum of squared coordinate magnitudes never exceeds the squared norm of the vector.

**How the definition helps.** In our own proof, the perpendicular remainder makes the inequality an application of Pythagoras to each finite projection. The coordinates of the projection are the inner products with the chosen perpendicular unit vectors. Thus every partial sum is bounded by the squared norm of x, giving the same bound for the series. Pythagoras also proves that the perpendicular projection is the closest point.

**Paper or page:** [Bessel's Inequality](https://proofwiki.org/wiki/Bessel's_Inequality). It says: “∑ₙ₌₁∞ \|⟨h,eₙ⟩\|² ≤ ‖h‖²”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing at infinity means continuous at the added point

**Remember:** Small outside a compact set means near zero near the point at infinity.

*True by definition. Confidence: medium.* MSC 46E05 (Lattices of continuous, differentiable or analytic functions), 54D35. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** Let f be continuous and scalar-valued on a locally compact Hausdorff space X. It vanishes at infinity if {x : \|f(x)\| ≥ ε} is compact for every ε &gt; 0. In the one-point extension, complements of compact subsets of X form a neighbourhood base at the added point.

**Problem.** Let X be locally compact and Hausdorff. A continuous function that vanishes at infinity extends continuously to X ∪ {p}, with value 0 at p. These functions form a Banach space under the supremum norm.

**How the definition helps.** In our own proof, each ε gives a neighbourhood of the added point on which the extended function has magnitude below ε. This proves continuity there. Extension preserves the supremum norm and identifies the space with the continuous functions vanishing at the added point. These form a closed subspace of the Banach space of continuous functions on the compact extension.

**Paper or page:** [Extension of Continuous Complex-Valued Function Vanishing at Infinity to Alexandroff Extension is Continuous](https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous), [Space of Continuous Functions on Locally Compact Hausdorff Space Vanishing at Infinity is Banach Space](https://proofwiki.org/wiki/Space_of_Continuous_Functions_on_Locally_Compact_Hausdorff_Space_Vanishing_at_Infinity_is_Banach_Space). It says: “Let f : X → ℂ be a continuous complex-valued function vanishing at infinity. Define f\* : X\* → ℂ by taking”

**Sources:**

- [ProofWiki, Extension of Continuous Complex-Valued Function Vanishing at Infinity to Alexandroff Extension is Continuous](https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous)
- [ProofWiki, Space of Continuous Functions on Locally Compact Hausdorff Space Vanishing at Infinity is Banach Space](https://proofwiki.org/wiki/Space_of_Continuous_Functions_on_Locally_Compact_Hausdorff_Space_Vanishing_at_Infinity_is_Banach_Space)

### Measuring derivatives as well makes the space of differentiable functions complete

**Remember:** Keep the derivatives close, so the limit still has a derivative.

*Rules out counterexamples.* MSC 46E15 (Banach spaces of continuous, differentiable or analytic functions). arXiv math.FA. Level 2: later undergraduate.

**Definition.** For a continuously differentiable real function f on \[0,1\], its C¹ norm is sup\|f\| + sup\|f′\|. This norm measures uniform errors in both the function and its derivative.

**Problem.** Continuously differentiable functions on \[0,1\] form a Banach space in the norm sup\|f\| + sup\|f′\|.

**How the definition helps.** In our own proof, a Cauchy sequence in this norm has uniform limits for both the functions and their derivatives. The fundamental theorem of calculus identifies the second limit as the derivative of the first. With only the supremum norm, the smooth functions √((x − ½)² + 1/n) converge uniformly to \|x − ½\|, which has a corner.

**Paper or page:** [Space of Continuously Differentiable on Closed Interval Real-Valued Functions with C<sup>1</sup> Norm is Banach Space](https://proofwiki.org/wiki/Space_of_Continuously_Differentiable_on_Closed_Interval_Real-Valued_Functions_with_C^1_Norm_is_Banach_Space). It says: “is a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Separating points is all that Stone–Weierstrass needs

**Remember:** To approximate everything, the algebra must tell every two points apart.

*Makes the theorem clean to state or prove.* MSC 46E25 (Rings and algebras of continuous, differentiable or analytic functions), 41A65. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** A set A of functions on X separates points when its functions can tell any two points apart. That is, for any two different points x and y of X, some function p in A has p(x) ≠ p(y).

**Problem.** Let X be a compact Hausdorff space, and let C(X, ℝ) be the algebra of continuous real functions on X. A subalgebra of C(X, ℝ) that contains a non-zero constant function is dense in the uniform norm exactly when it separates points.

**How the definition helps.** Point separation gives the density criterion in the real Stone–Weierstrass theorem. For necessity, our own argument observes that uniform limits preserve equality at any pair the algebra fails to separate. Continuous real functions on a compact Hausdorff space separate every such pair.

**Wikipedia:** [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem). It says: “It turns out that the crucial property that a subalgebra must satisfy is that it separates points”

**Sources:**

- [M. H. Stone, Applications of the theory of Boolean rings to general topology, Trans. Amer. Math. Soc. 41 (1937), 375–481, doi:10.1090/S0002-9947-1937-1501905-7](https://doi.org/10.1090/S0002-9947-1937-1501905-7)

### Defining Lᵖ by completion gives completeness for finite p

**Remember:** Complete the simple functions, then identify the resulting limits.

*True by definition.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 1 ≤ p &lt; ∞, define Lᵖ as the norm completion of simple functions that vanish outside a set of finite measure. To get the norm, integrate the pth power of \|f\| and take the pth root. Identify functions that agree outside a null set before taking the completion.

**Problem.** For 1 ≤ p &lt; ∞, Lᵖ is complete under its norm. Every sequence that is Cauchy in that norm has a limit in the space.

**How the definition helps.** Taking the norm completion supplies limits for all Cauchy sequences by construction (our own). The work is identifying this completion with measurable functions of finite norm, up to equality almost everywhere (our own). Choose a subsequence with summable norms of consecutive differences (our own). The triangle inequality and monotone convergence bound the sum of absolute differences and its tails, giving convergence almost everywhere and in norm (our own).

**Wikipedia:** [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “By construction of the integral, the vector space of integrable simple functions is dense in Lᵖ(S, Σ, μ).”

**Sources:** none listed. No primary source with a working link was found.

### Grading Lebesgue spaces by 1/p makes Hölder's inequality a graded multiplication

**Remember:** Use 1/p as the degree, and degrees add when you multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 26D15. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** On a fixed measure space, assign degree a to the space M(a) = L¹⁄ᵃ for every real a &gt; 0. Assign degree zero to M(0) = L∞.

**Problem.** If f lies in M(a) and g lies in M(b), then fg lies in M(a + b). In the usual indexing this is Hölder's rule 1/p + 1/q = 1/r.

**How the definition helps.** The reciprocal exponents in Hölder’s inequality are exactly the degrees, so multiplication adds degrees. Our own endpoint check uses the essential supremum bound when either degree is zero.

**nLab:** [Lebesgue space](https://ncatlab.org/nlab/show/Lebesgue+space). It says: “If we take M<sup>p=L^</sup>(1/p), the spaces M<sup>p</sup> form a C-graded algebra, where C denotes complex numbers. This is a conceptual explanation for the appearance of formulas like 1/p+1/q=1/r in Hölder's inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Lᵖ treats functions that agree almost everywhere as equal

**Remember:** In Lᵖ, what happens on a set of measure zero does not count.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)). arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** For 1 ≤ p &lt; ∞, Lᵖ(S,μ) consists of measurable scalar functions f with ∫\|f\|ᵖ dμ finite, identified whenever they agree almost everywhere.

**Problem.** The quantity ‖f‖ₚ = (∫\|f\|ᵖ)¹ᐟᵖ is a norm. Lᵖ is complete for this norm, so it is a Banach space (the Riesz–Fischer theorem).

**How the definition helps.** Identification removes exactly the functions whose distance from zero vanishes. In our own argument, Minkowski’s inequality supplies the triangle inequality and the Riesz–Fischer theorem gives completeness.

**Wikipedia:** [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “Hence, strictly speaking Lᵖ(S, μ) consists of equivalence classes of functions.”

**Sources:**

- [F. Riesz, Untersuchungen über Systeme integrierbarer Funktionen, Math. Ann. 69 (1910), 449–497, doi:10.1007/BF01457637](https://doi.org/10.1007/BF01457637)

### Measured in mean square, every Fourier series converges

**Remember:** Measure the error by its energy, and Fourier series always converge.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 42A20. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** A sequence of functions gₙ converges to f in the L² norm, or in mean square, when ∫\|gₙ − f\|² → 0. In words, the integral of the squared error tends to 0.

**Problem.** On the circle with Lebesgue measure, the Fourier series of every square-integrable function converges to that function in the L² norm.

**How the definition helps.** Measuring the error in the L² norm makes the statement true for every square-integrable function. Pointwise it is false: some continuous functions have Fourier series that diverge at some points. In the L² norm, the partial sums converge by the Riesz–Fischer theorem. Our own remark: once the trigonometric functions are known to form a complete orthonormal system, the proof uses only facts about Hilbert spaces.

**Wikipedia:** [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series), [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “According to the Riesz–Fischer theorem, if ƒ is square-integrable then S<sub>N</sub>(f) converges to ƒ in the L²-norm”

**Sources:**

- [L. Carleson, On convergence and growth of partial sums of Fourier series, Acta Math. 116 (1966), 135–157, doi:10.1007/BF02392815 (for the pointwise question)](https://doi.org/10.1007/BF02392815)

### The Lebesgue integral makes L² complete

**Remember:** Riemann lets limits of Fourier series fall out of the space; Lebesgue keeps them.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 46C05. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** On a measure space with Lebesgue measure, L² consists of measurable scalar functions f satisfying ∫\|f\|² &lt; ∞, identified up to equality almost everywhere. Its inner product is ⟨f,g⟩ = ∫ f̄g.

**Problem.** L² is complete (Riesz–Fischer, 1907). So every series in an orthonormal system with square-summable coefficients has a sum in L².

**How the definition helps.** The Riesz–Fischer theorem gives completeness for the Lebesgue integral. In our own deduction, orthonormality makes the squared norm of each series tail equal the corresponding sum of squared coefficient magnitudes. The partial sums are therefore Cauchy and have an L² limit.

**Wikipedia:** [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space). It says: “The Lebesgue integral is essential to ensure completeness: on domains of real numbers, for instance, not enough functions are Riemann integrable.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiating a step gives delta

**Remember:** Move the derivative to the test function and read the jump.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions), 01A60. arXiv math.FA, math.HO. Level 2: later undergraduate.

**Definition.** A locally integrable function f on ℝ defines a distribution T by T(φ) = ∫ fφ for every smooth compactly supported test function φ. Its distributional derivative satisfies T′(φ) = −T(φ′) for every such φ.

**Problem.** The distributional derivative of the unit step is the Dirac delta, the rule that evaluates a test function at zero.

**How the definition helps.** Moving differentiation onto the test function turns the jump into a boundary value. In our own calculation, the unit step gives T′(φ) = −∫₀∞ φ′(x) dx. This equals φ(0) because φ has compact support.

**Wikipedia:** [Dirac delta function](https://en.wikipedia.org/wiki/Dirac_delta_function). It says: “For instance, it is the distributional derivative of the Heaviside step function.”

**Sources:**

- [Laurent Schwartz, Généralisation de la notion de fonction et de dérivation, théorie des distributions (1948)](https://doi.org/10.1007/BF03020757)

### Local convexity is what the Hahn–Banach theorem needs

**Remember:** Convex neighbourhoods give seminorms, and seminorms give continuous linear functionals.

*Rules out counterexamples. Confidence: medium.* MSC 46A03 (General theory of locally convex spaces), 46A22. arXiv math.FA. Level 3: graduate.

**Definition.** A locally convex space is a topological vector space whose topology has a base of convex neighbourhoods of zero. Equivalently, a family of seminorms gives its topology.

**Problem.** In a Hausdorff locally convex space, every continuous linear functional on a subspace extends to a continuous linear functional on the whole space. So the continuous linear functionals separate points.

**How the definition helps.** A continuous seminorm bounds the given functional on its subspace, so Hahn–Banach extends it with the same bound. Hausdorffness gives a seminorm positive on each nonzero vector, allowing separation by extending a functional from its line. In our own counterexample, Lᵖ\[0,1\] for 0 &lt; p &lt; 1 has no proper convex neighbourhood of zero. Its continuous dual is zero, so a nonzero functional on a line cannot extend continuously.

**Wikipedia:** [Locally convex topological vector space](https://en.wikipedia.org/wiki/Locally_convex_topological_vector_space). It says: “They are not locally convex, since the only convex neighborhood of zero is the whole space.”

**Sources:**

- [N. J. Kalton, Basic sequences in F-spaces and their applications, Proceedings of the Edinburgh Mathematical Society 19 (1974) 151–167](https://doi.org/10.1017/S0013091500010282)

### Barrelled spaces are the spaces where uniform boundedness holds

**Remember:** Every barrel is a neighbourhood, so pointwise bounded families are equicontinuous.

*True by definition.* MSC 46A08 (Barrelled spaces, bornological spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A barrel is a closed, convex, balanced and absorbing set. Balanced means that it contains tx for each of its points x and each scalar t with \|t\| ≤ 1. Absorbing means that every vector lies in some multiple of it. A locally convex space is barrelled when every barrel is a neighbourhood of zero.

**Problem.** In a barrelled locally convex space, every family of continuous linear functionals that is bounded at each point is equicontinuous.

**How the definition helps.** The definition copies the step of the proof that needs completeness, so the principle is almost the definition. For a pointwise bounded family, the set where all the functionals are at most 1 in absolute value is a barrel (our own sketch). In a barrelled space it is a neighbourhood of zero, which is equicontinuity. The work moves into showing that Banach and Fréchet spaces are barrelled.

**Wikipedia:** [Barrelled space](https://en.wikipedia.org/wiki/Barrelled_space). It says: “It follows from the above two characterizations that in the class of locally convex TVS, barrelled spaces are exactly those for which the uniform boundedness principle holds.”

**Sources:**

- [N. Bourbaki, Sur certains espaces vectoriels topologiques, Annales de l'Institut Fourier 2 (1950), 5–16](https://doi.org/10.5802/aif.16)

### In bornological spaces, bounded linear maps are continuous by definition

**Remember:** Convex balanced sets absorbing every bounded set must be neighbourhoods of zero.

*True by definition.* MSC 46A08 (Barrelled spaces, bornological spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A subset of a topological vector space is bounded when every neighbourhood of zero absorbs it after scaling. A locally convex space is bornological when every convex balanced set that absorbs all bounded sets is a neighbourhood of zero. Normed spaces, metrizable locally convex spaces and their inductive limits are bornological.

**Problem.** A linear map from a bornological space into a locally convex space is continuous exactly when it sends bounded sets to bounded sets.

**How the definition helps.** The definition asks for exactly the neighbourhoods that a bounded map pulls back. If a linear map sends bounded sets to bounded sets, the preimage of a convex balanced neighbourhood absorbs every bounded set (our own sketch). In a bornological space that preimage is a neighbourhood of zero, so the map is continuous (our own sketch). The work moves into showing that metrizable spaces and their inductive limits are bornological.

**Wikipedia:** [Bornological space](https://en.wikipedia.org/wiki/Bornological_space). It says: “Bornological spaces are distinguished by the property that a linear map from a bornological space into any locally convex spaces is continuous if and only if it is a bounded linear operator.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclear spaces make the Schwartz kernel theorem true

**Remember:** Every neighbourhood of zero holds a much smaller one, as in finite dimensions.

*Makes the theorem clean to state or prove.* MSC 46A11 (Spaces determined by compactness or summability properties (nuclear spaces, Schwartz spaces, Montel spaces, etc.)), 46A32, 46F05. arXiv math.FA. Level 3: graduate.

**Definition.** A locally convex space is nuclear if every continuous seminorm p admits a continuous seminorm q ≥ p with a nuclear canonical map X<sub>q</sub> → X<sub>p</sub>. Here X<sub>p</sub> denotes the Banach completion of the quotient by the kernel of p. A nuclear map is a sum of rank-one maps whose operator norms have finite sum.

**Problem.** For open Euclidean sets Ω₁ and Ω₂, every continuous linear map from test functions on Ω₂ to distributions on Ω₁ has a unique distribution kernel. The kernel lies in 𝒟′(Ω₁ × Ω₂). With the strong dual topologies this space identifies with 𝒟′(Ω₁) ⊗̂ 𝒟′(Ω₂) under the completed projective tensor product.

**How the definition helps.** The Schwartz kernel theorem identifies continuous operators with distribution kernels. In our own explanation, nuclearity makes the projective and injective tensor topologies agree, giving the stated tensor product description.

**Wikipedia:** [Nuclear space](https://en.wikipedia.org/wiki/Nuclear_space). It says: “Much of the theory of nuclear spaces was developed by Alexander Grothendieck while investigating the Schwartz kernel theorem”

**Sources:**

- [Grothendieck, A. (1955). Produits tensoriels topologiques et espaces nucléaires. Memoirs of the American Mathematical Society 16.](https://doi.org/10.1090/memo/0016)

### With the inductive limit topology every linear functional on polynomials is continuous

**Remember:** Continuity is tested on finite-dimensional pieces, where every linear map is continuous.

*True by definition. Confidence: medium.* MSC 46A13 (Spaces defined by inductive or projective limits (LB, LF, etc.)), 33C45. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** Let 𝒫ₙ be the polynomials of degree at most n, each with its usual finite-dimensional topology. The inductive limit topology on all polynomials 𝒫 is the finest topology that makes every inclusion of 𝒫ₙ into 𝒫 continuous.

**Problem.** Every linear functional on 𝒫, such as a moment functional of orthogonal polynomials, is continuous. Take a basis Rₙ with deg Rₙ = n, and let aₙ be its dual basis. Then each functional u expands as u = ∑ ⟨u, Rₙ⟩ aₙ in the weak dual topology.

**How the definition helps.** Continuity on each finite-dimensional piece gives continuity on the union by the defining topology. Thus every algebraic functional is continuous. In our own proof of the expansion, each polynomial uses finitely many basis elements, so its pairing with the partial sums eventually stabilizes.

**Paper or page:** [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1), [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1). It says: “Let 𝒫 = ind lim 𝒫ₙ, as in, and let 𝒫\* and 𝒫′ be the algebraic and the topological duals of 𝒫, respectively. Then 𝒫′ = 𝒫\*.”

**Sources:**

- [K. Castillo, J. Petronilho, Classical orthogonal polynomials revisited, arXiv:2110.00401 (2021)](https://arxiv.org/abs/2110.00401v1)

### The weak-\* topology makes the dual unit ball compact

**Remember:** Use the coarsest topology making evaluation at every vector continuous.

*Makes the theorem clean to state or prove.* MSC 46A20 (Duality theory for topological vector spaces), 46A50. arXiv math.FA. Level 3: graduate.

**Definition.** Let X be a normed space with dual X′, the space of continuous linear functionals on X. The weak-\* topology on X′ is the coarsest topology in which every evaluation map f ↦ f(x), for x in X, is continuous. Coarsest means that it has the fewest open sets.

**Problem.** The Banach–Alaoglu theorem makes the closed dual unit ball weak-\* compact. For separable X, every bounded sequence in the dual has a weak-\* convergent subsequence.

**How the definition helps.** Weak-\* convergence is coordinatewise convergence on X. In our own proof, the dual ball sits in the product of scalar discs of radii ‖x‖, which Tychonoff’s theorem makes compact. The linearity equations define a closed subset there. For separable X, evaluations on a countable dense set metrize the ball, giving sequential compactness.

**Wikipedia:** [Banach–Alaoglu theorem](https://en.wikipedia.org/wiki/Banach%E2%80%93Alaoglu_theorem). It says: “This theorem is one example of the utility of having different topologies on the same vector space.”

**Sources:**

- [Alaoglu, L. (1940). Weak topologies of normed linear spaces. Annals of Mathematics 41(1), 252 ff.](https://doi.org/10.2307/1968829)

### The Minkowski gauge reduces separation to Hahn–Banach extension

**Remember:** The gauge rewrites a convex set as one inequality.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46A22 (Theorems of Hahn-Banach type; extension and lifting of functionals and operators), 46A55. arXiv math.FA. Level 3: graduate.

**Definition.** Let C be open and convex in a real normed space, with 0 in C. Its Minkowski gauge p(x) is the infimum of the numbers t &gt; 0 for which x belongs to tC. The gauge is sublinear, meaning p(x + y) ≤ p(x) + p(y) and p(sx) = sp(x) for s ≥ 0.

**Problem.** If x₀ is outside C, there is a continuous linear functional f such that f(x) &lt; f(x₀) for every x in C.

**How the definition helps.** The gauge expresses membership as p(x) &lt; 1, so separation becomes a question about a linear functional bounded by p. Our own proof starts with f(t·x₀) = t on the line through x₀, which is at most p(t·x₀). The analytic Hahn–Banach theorem extends f to the whole space with f ≤ p, so f &lt; 1 on C while f(x₀) = 1. Since C contains a ball about zero, p is bounded by a constant times the norm, so f is continuous.

**Paper or page:** [Minkowski Functional of Open Convex Set in Normed Vector Space recovers Set](https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_recovers_Set), [Minkowski Functional of Convex Absorbing Set is Sublinear](https://proofwiki.org/wiki/Minkowski_Functional_of_Convex_Absorbing_Set_is_Sublinear). It says: “Let C be an open convex subset of X with 0 ∈ C. Let p<sub>C</sub> be the Minkowski functional for C. Then: C = {x ∈ X : p<sub>C</sub>(x) &lt; 1}”

**Sources:** none listed. No primary source with a working link was found.

### Completeness is what makes the open mapping theorem true

**Remember:** Without completeness, a bounded bijection can have an unbounded inverse.

*Rules out counterexamples.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including \\(B\\)-, \\(B<sub>r</sub>\\)-completeness)), 47B01. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed vector space that is complete: every Cauchy sequence converges. A map is open when it sends open sets to open sets.

**Problem.** The open mapping theorem says that a bounded linear surjection between Banach spaces is open. So a bounded linear bijection between Banach spaces has a bounded inverse.

**How the definition helps.** Completeness of the target gives the Baire category theorem, and completeness of the domain turns 'nearly open' into 'open' by summing a series. The page gives a counterexample on the finitely supported sequences with the sup norm. There T x = (x₁, x₂/2, x₃/3, …) is a bounded linear bijection, but its inverse multiplies the n-th entry by n and is unbounded. The page says the same proof works for Fréchet spaces.

**Wikipedia:** [Open mapping theorem (functional analysis)](https://en.wikipedia.org/wiki/Open_mapping_theorem_%28functional_analysis%29). It says: “The statement of the theorem is no longer true if either space is assumed to be only a normed vector space”

**Sources:** none listed. No primary source with a working link was found.

### Local convexity gives compact convex sets their extreme points

**Remember:** Without local convexity a compact convex set can have no corners at all.

*Rules out counterexamples.* MSC 46A55 (Convex sets in topological linear spaces; Choquet theory), 46A03. arXiv math.FA. Level 3: graduate.

**Definition.** A topological vector space is locally convex when every neighbourhood of zero contains a convex one. An extreme point of a convex set K is a point that is not strictly between two other points of K.

**Problem.** The Krein–Milman theorem says that a compact convex set in a Hausdorff locally convex space is the closed convex hull of its extreme points. In particular, a nonempty compact convex set has an extreme point.

**How the definition helps.** Local convexity supplies separating real functionals through Hahn–Banach. In our own proof sketch, compactness gives minimal nonempty closed faces, and separation forces each such face to be a singleton. Separating a point from the closed convex hull of extreme points would give a maximizing face disjoint from that hull. Roberts’s compact convex set without extreme points lies in a nonlocally convex Lᵖ space, where this separation fails.

**Wikipedia:** [Krein–Milman theorem](https://en.wikipedia.org/wiki/Krein%E2%80%93Milman_theorem). It says: “The assumption of local convexity for the ambient space is necessary, because James Roberts (1977) constructed a counter-example for the non-locally convex space Lᵖ\[0, 1\] where 0 &lt; p &lt; 1.”

**Sources:**

- [M. Krein and D. Milman, On extreme points of regular convex sets, Studia Mathematica 9 (1940), 133–138](https://doi.org/10.4064/sm-9-1-133-138)
- [J. W. Roberts, A compact convex set with no extreme points, Studia Mathematica 60 (1977), 255–266](https://doi.org/10.4064/sm-60-3-255-266)

### Asking isometries to be onto makes them affine

**Remember:** Onto isometries of normed spaces cannot bend.

*Rules out counterexamples.* MSC 46B04 (Isometric theory of Banach spaces). arXiv math.FA. Level 3: graduate.

**Definition.** An isometry is a map that keeps all distances. It is surjective if every point of the target is hit. It is affine if it keeps all weighted averages of two points.

**Problem.** The Mazur–Ulam theorem says that a surjective isometry between real normed spaces is affine. So it is a real-linear map plus a translation.

**How the definition helps.** Surjectivity lets the proof reflect through midpoints using the inverse map, so midpoints are kept (our own account of the standard proof). Without it the theorem is false. In our own example, t ↦ (t, sin t) from ℝ into ℝ² with the maximum norm keeps distances but is not affine.

**Paper or page:** [Weighted composition operators preserving various Lipschitz constants](https://arxiv.org/abs/2306.12824v1). It says: “Every surjective isometry T: M→N between normed linear spaces is affine; namely, T(λx+(1−λ)y)= λTx+(1−λ)Ty, for all x,y∈M and 0≤λ≤1.”

**Sources:**

- [Weighted composition operators preserving various Lipschitz constants, arXiv:2306.12824 (2023)](https://arxiv.org/abs/2306.12824v1)

### Short linear maps make isomorphisms of Banach spaces isometries

**Remember:** Short maps never stretch a vector, so an isomorphism cannot stretch or shrink any vector.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46B04 (Isometric theory of Banach spaces), 18D15. arXiv math.FA, math.CT. Level 3: graduate.

**Definition.** In the category Ban, a morphism between Banach spaces is a short linear map, meaning a linear map f with operator norm ‖f‖ ≤ 1. Analysts call this the isometric category; with all bounded linear maps it is the isomorphic category.

**Problem.** In Ban with short linear maps, the isomorphisms are exactly the surjective linear isometries. This category also has all small limits and colimits and is symmetric monoidal closed.

**How the definition helps.** An invertible contraction with contractive inverse preserves norms, and a surjective linear isometry has a contractive inverse. In our own description, supremum-norm products and completed ℓ¹ sums give products and coproducts. For a pair of maps, their difference gives the equalizer by its kernel and the coequalizer by quotienting by its range closure. The projective tensor product gives closedness by identifying bounded bilinear maps with bounded linear maps into operator spaces.

**nLab:** [Banach space](https://ncatlab.org/nlab/show/Banach+space), [Jordan-Banach algebra](https://ncatlab.org/nlab/show/Jordan-Banach+algebra). It says: “Another natural notion of isomorphism is a surjective linear isometry. In this case, we take a morphism to be a short linear map, or linear contraction: a linear map f such that ‖f‖ ≤ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Reflexivity uses the canonical map, so James' space is excluded

**Remember:** Reflexive means the evaluation map is onto, not merely some isomorphism.

*Rules out counterexamples.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces), 46B50. arXiv math.FA. Level 3: graduate.

**Definition.** The bidual of a Banach space X is the dual of its dual. The canonical map sends a point x to the functional 'evaluate at x'. X is reflexive when this canonical map is onto.

**Problem.** Kakutani's theorem says that a Banach space is reflexive exactly when its closed unit ball is weakly compact. Reflexive spaces also have the property that bounded closed convex sets are weakly compact.

**How the definition helps.** Our own proof uses the canonical map to identify weak convergence in X with weak-\* convergence on its bidual image. Surjectivity gives compactness of the ball by Banach–Alaoglu, and closed convex subsets are weakly closed by separation. Conversely, a weakly compact ball has weak-\* closed image, which fills the bidual ball by Goldstine’s theorem. James’ space is isometric to its bidual, yet its canonical image has codimension one.

**Wikipedia:** [Reflexive space](https://en.wikipedia.org/wiki/Reflexive_space). It says: “So importantly, for a Banach space to be reflexive, it is not enough for it to be isometrically isomorphic to its bidual; it is the canonical evaluation map in particular that has to be a homeomorphism.”

**Sources:**

- [R. C. James, A non-reflexive Banach space isometric with its second conjugate space, Proc. Nat. Acad. Sci. USA 37 (1951), 174–177](https://doi.org/10.1073/pnas.37.3.174)

### Completeness makes Schauder coordinates continuous

**Remember:** Each vector has one norm-convergent expansion in the prescribed order.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A sequence (eₙ) is a Schauder basis if every vector x has exactly one scalar sequence (aₙ) with x = ∑ₙ aₙeₙ in norm. A Banach space contains the limit of each of its Cauchy sequences.

**Problem.** Each coordinate functional of a Schauder basis in a Banach space is bounded. It sends a vector to its coefficient at a fixed basis position.

**How the definition helps.** In our own proof, coefficient sequences with convergent expansions form a Banach space under the supremum of their partial-sum norms. Summation is a bounded bijection, so the bounded inverse theorem transfers coordinate continuity to the original space. Our own incomplete example uses finite Euclidean sequences with basis e₁ followed by e₁ + eₙ for n ≥ 2. A unit vector with first entry zero and N later entries 1/√N has first coefficient −√N.

**Paper or page:** [Coordinate Functionals Associated with Schauder Basis of Banach Space are Bounded](https://proofwiki.org/wiki/Coordinate_Functionals_Associated_with_Schauder_Basis_of_Banach_Space_are_Bounded). It says: “Then each linear functional eₙ∗ is bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Riesz bases give stable unique coefficients

**Remember:** Two bounds control both synthesis and recovery.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A sequence (vₙ) in a Hilbert space is a Riesz basis if its span is dense and fixed constants A,B &gt; 0 satisfy two bounds. For every finitely supported scalar sequence c, these bounds are A‖c‖₂ ≤ ‖∑ₙ cₙvₙ‖ ≤ B‖c‖₂.

**Problem.** Every vector has a unique square-summable coefficient sequence in a Riesz basis. The map to coefficients and the map back are both bounded.

**How the definition helps.** Our own proof extends synthesis to ℓ² by the upper bound. The lower bound gives injectivity, closed range and a bounded inverse on the range. Density therefore makes synthesis onto. Our own counterexample vₙ = eₙ/n spans ℓ² densely but violates the lower bound because recovering eₙ requires coefficient n.

**Wikipedia:** [Riesz sequence](https://en.wikipedia.org/wiki/Riesz_sequence). It says: “is an orthonormal basis for H and U : H → H is a bounded bijective operator.”

**Sources:** none listed. No primary source with a working link was found.

### Unconditional convergence makes a sum independent of order by definition

**Remember:** Unconditional means the sum puts no condition on the order.

*Makes the theorem clean to state or prove.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces), 40A05. arXiv math.FA. Level 3: graduate.

**Definition.** A series in a normed space converges unconditionally when every reordering of its terms converges. All the reorderings must also have the same sum.

**Problem.** In a finite-dimensional space, a series converges unconditionally exactly when it converges absolutely. Every infinite-dimensional Banach space has an unconditionally convergent series that does not converge absolutely (the Dvoretzky–Rogers theorem).

**How the definition helps.** Quantifying over all reorderings makes unconditional convergence meaningful in every dimension. In finite dimensions, our own argument applies the scalar rearrangement theorem in each coordinate and uses equivalence of norms. Absolute convergence gives unconditional convergence by the norm tail bound and completeness. The Dvoretzky–Rogers theorem supplies the nonabsolute example in every infinite-dimensional Banach space.

**Wikipedia:** [Unconditional convergence](https://en.wikipedia.org/wiki/Unconditional_convergence), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “A theorem of A. Dvoretzky and C. A. Rogers asserts that every infinite-dimensional Banach space has an unconditionally convergent series that is not absolutely convergent.”

**Sources:**

- [A. Dvoretzky and C. A. Rogers, Absolute and unconditional convergence in normed linear spaces, Proc. Natl. Acad. Sci. USA 36 (1950), 192–197, doi:10.1073/pnas.36.3.192](https://doi.org/10.1073/pnas.36.3.192)

### A normed space is complete exactly when absolutely convergent series converge

**Remember:** Complete means every series with summable norms has a sum.

*True by definition. Confidence: medium.* MSC 46B20 (Geometry and structure of normed linear spaces), 46B15. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed vector space in which every Cauchy sequence converges. A series ∑ aₙ is absolutely convergent if the real series ∑ ‖aₙ‖ converges.

**Problem.** A normed vector space X is a Banach space if and only if every absolutely convergent series in X is convergent.

**How the definition helps.** In our own proof, summable norms bound all tails, so the partial sums are Cauchy and completeness gives convergence. Conversely, choose a subsequence of any Cauchy sequence with successive differences of norm below 2⁻ⁿ. The difference series converges by hypothesis, so telescoping gives a limit for the subsequence. The full Cauchy sequence has the same limit.

**Paper or page:** [Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach), [Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach/Sufficient Condition](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach/Sufficient_Condition). It says: “every absolutely convergent series ∑ aₙ (n = 1 to ∞) is convergent.”

**Sources:**

- [ProofWiki, Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach)
- [ProofWiki, Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach/Sufficient Condition](https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach/Sufficient_Condition)

### A strictly convex dual makes Hahn–Banach extensions unique

**Remember:** No flat pieces on the dual sphere, so only one extension fits.

*Rules out counterexamples.* MSC 46B20 (Geometry and structure of normed linear spaces), 46A22. arXiv math.FA. Level 3: graduate.

**Definition.** A normed space is strictly convex if ‖x + y‖ &lt; 2 for any two different unit vectors x and y. So the unit sphere contains no line segment. Take a functional f on a subspace. A Hahn–Banach extension of f is a functional on the whole space that agrees with f and has the same norm.

**Problem.** Let X be a Banach space with strictly convex dual X\*. Then every bounded linear functional on a subspace of X has exactly one Hahn–Banach extension. This applies, for example, to Lᵖ with 1 &lt; p &lt; ∞.

**How the definition helps.** The norm-preserving extensions of f form a convex set on the sphere of radius ‖f‖ in X\*. A strictly convex sphere contains no segment, so this set has only one point (our own account of the proof). In our own example, take ℝ² with the norm \|a\| + \|b\|. The functional (t, 0) ↦ t has the extensions (a, b) ↦ a + cb for every c in \[−1, 1\].

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Let X be a Banach space with strictly convex dual X\*. Suppose U⊂X is a subspace and f:U→𝕂 a bounded linear functional. Then f has a unique Hahn–Banach extension in X\*.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### The ℓ¹ norm lets contractions on each summand extend to the sum

**Remember:** The sum norm pays for every component, so it bounds every summed image.

*True by definition.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** The ℓ¹ direct sum of Banach spaces Xᵢ consists of families xᵢ ∈ Xᵢ for which ∑ᵢ ‖xᵢ‖ is finite. This sum is the norm and equals the supremum of the finite subsums.

**Problem.** Let each Tᵢ be a linear map of norm at most one from a Banach space Xᵢ into one Banach space Z. Then exactly one bounded linear map on the ℓ¹ sum agrees with every Tᵢ. It has norm at most one.

**How the definition helps.** The triangle inequality bounds the norm of every finite sum of images by the sum of the component norms. In our own argument, completeness of Z gives the limiting sum, and density of finite families gives uniqueness. This realizes the stated coproduct of contractions.

**nLab:** [direct sum of Banach spaces](https://ncatlab.org/nlab/show/direct+sum+of+Banach+spaces). It says: “If short linear maps are taken as the morphisms in the category of Banach spaces, then the ℓ¹-direct sum is the coproduct, and the ℓ∞-direct sum is the product.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convexity gives unique nearest points in closed subspaces

**Remember:** Separated unit vectors have midpoints uniformly inside the unit ball.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if each ε &gt; 0 admits a δ &gt; 0 with the following property. Whenever unit vectors x,y satisfy ‖x − y‖ ≥ ε, their midpoint has norm at most 1 − δ.

**Problem.** In a uniformly convex Banach space, such as Lᵖ with 1 &lt; p &lt; ∞, every point has exactly one closest point in each closed subspace.

**How the definition helps.** Uniform convexity forces every minimizing sequence to be Cauchy, since separated near-minimizers would give a closer midpoint. Completeness and closedness put the limit in the subspace, and the midpoint argument also gives uniqueness. In our own counterexample with the maximum norm, (1,0) has every (0,t) with \|t\| ≤ 1 as a nearest point on the vertical axis. Clarkson’s inequalities give uniform convexity for the stated Lᵖ spaces.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Let Y be a closed subspace of Lᵖ (1&lt;p&lt;∞). Then, for any f∉Y there is a unique closest point g∈Y, to f”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### Uniform convexity is a two-vector test that gives reflexivity

**Remember:** For each separation, all such unit-vector pairs have midpoints uniformly inside the ball.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if each ε &gt; 0 has a δ &gt; 0 with this property. Unit vectors x and y with ‖x − y‖ ≥ ε have ‖(x + y)/2‖ ≤ 1 − δ. So the midpoint of two unit vectors that are far apart lies well inside the unit ball. A space is reflexive if the natural map into its double dual is onto.

**Problem.** The Milman–Pettis theorem says that every uniformly convex Banach space is reflexive. Clarkson showed that Lᵖ is uniformly convex for 1 &lt; p &lt; ∞. So these Lᵖ spaces are reflexive, with no need to compute their duals.

**How the definition helps.** Milman–Pettis turns the uniform midpoint bound into surjectivity of the canonical map to the bidual. Clarkson’s inequalities supply that bound for Lᵖ when 1 &lt; p &lt; ∞. In our own example, an equivalent strictly convex norm on ℓ¹ still leaves it nonreflexive.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Any uniformly convex Banach space is reflexive.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)
- [J. A. Clarkson, Uniformly convex spaces, Trans. Amer. Math. Soc. 40 (1936) 396–414](https://doi.org/10.1090/s0002-9947-1936-1501880-4)

### Uniform convexity turns weak convergence with converging norms into norm convergence

**Remember:** Unit vectors whose midpoints approach the sphere must approach each other.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** Uniform convexity means every ε &gt; 0 admits δ &gt; 0 such that unit vectors ε apart or farther have midpoint norm ≤ 1 − δ. Weak convergence to x means f(xₙ) → f(x) for every continuous linear functional f. A space has the Riesz–Radon property if weak convergence together with convergence of norms always implies norm convergence.

**Problem.** In a uniformly convex Banach space, such as Lᵖ with 1 &lt; p &lt; ∞, weak convergence xₙ → x together with ‖xₙ‖ → ‖x‖ gives ‖xₙ − x‖ → 0. So every uniformly convex space is a Riesz–Radon space.

**How the definition helps.** In our own proof, if x = 0, convergence of norms already gives the result. Otherwise normalize x and the eventually nonzero xₙ to unit vectors u and uₙ. Their midpoints converge weakly to u, so weak lower semicontinuity and the triangle inequality force their norms to approach one. Uniform convexity yields ‖uₙ − u‖ → 0, and restoring the convergent norms gives the claim.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Every uniformly convex Banach space is a Riesz–Radon space.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### The approximation property makes compact operators limits of finite-rank operators

**Remember:** Approximate the identity uniformly on each compact set using finite-rank maps.

*True by definition.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 47B07. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space X has the approximation property if its identity can be approximated uniformly on each compact set by bounded finite-rank linear maps. For every compact K ⊆ X and ε &gt; 0, some such T from X to X satisfies ‖Tx − x‖ &lt; ε throughout K.

**Problem.** Suppose X is a Banach space with the approximation property. Every compact operator into X from a Banach space is an operator-norm limit of finite-rank operators.

**How the definition helps.** The definition asks for finite-rank approximation of the identity on compact sets, and this is nearly the wanted theorem. A compact operator S maps the unit ball into a set K with compact closure (our own sketch). A finite-rank T that moves each point of K by less than ε gives ‖TS − S‖ ≤ ε (our own sketch). Enflo's 1973 example of a space without the property shows that the hypothesis is needed.

**Wikipedia:** [Approximation property](https://en.wikipedia.org/wiki/Approximation_property), [Compact operator](https://en.wikipedia.org/wiki/Compact_operator). It says: “a Banach space is said to have the approximation property (AP) if every compact operator is a limit of finite-rank operators. The converse is always true.”

**Sources:**

- [P. Enflo, A counterexample to the approximation problem in Banach spaces, Acta Mathematica 130 (1973), 309–317](https://doi.org/10.1007/BF02392270)
- [A. Grothendieck, Produits tensoriels topologiques et espaces nucléaires, Memoirs of the AMS 16 (1955)](https://doi.org/10.1090/memo/0016)

### The injective tensor norm keeps isometric embeddings isometric after tensoring

**Remember:** Every test on a subspace extends to the whole space with the same norm.

*True by definition. Confidence: medium.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 46A22. arXiv math.FA. Level 3: graduate.

**Definition.** The injective norm of a tensor t is the supremum of \|(λ ⊗ μ)(t)\| over linear functionals λ and μ of norm at most one. The injective tensor product is the completion of the algebraic tensor product in this norm. The projective norm instead takes the infimum of Σ‖xᵢ‖‖yᵢ‖ over all ways to write t = Σ xᵢ ⊗ yᵢ.

**Problem.** Let V ⊆ X and W ⊆ Y be closed subspaces of Banach spaces. Then the injective tensor product of V and W sits isometrically inside that of X and Y. The projective tensor product does not have this property in general.

**How the definition helps.** In our own proof, Hahn–Banach extends each unit-ball test functional from either subspace without increasing its norm. Restriction also preserves the unit-ball bound, so the two suprema agree and the isometry extends to the completions. For the projective norm, extra decompositions in the ambient spaces can lower the infimum.

**nLab:** [tensor product of Banach spaces](https://ncatlab.org/nlab/show/tensor+product+of+Banach+spaces). It says: “If λ and μ are linear functionals on V and W (respectively), then λ ⊗ μ is a linear functional on V ⊗ W.”

**Sources:** none listed. No primary source with a working link was found.

### The projective tensor norm makes Banach spaces a closed monoidal category

**Remember:** Take the cheapest decomposition, charging each simple tensor the product of its factor norms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 46M05, 18D15. arXiv math.FA, math.CT. Level 3: graduate.

**Definition.** Represent an algebraic tensor t by finite sums ∑ᵢ vᵢ ⊗ wᵢ. Its projective norm is the infimum of ∑ᵢ ‖vᵢ‖‖wᵢ‖ over those representations. Completing the algebraic tensor product in this norm gives the projective tensor product.

**Problem.** Let U,V,W be Banach spaces, with B(W,U) the bounded linear maps in operator norm. Linear contractions V ⊗̂ W → U correspond exactly to linear contractions V → B(W,U) for the projective tensor product. This makes Banach spaces with contractions a closed symmetric monoidal category.

**How the definition helps.** The projective norm is an infimum over all ways to write a tensor, so bounded bilinear maps extend with the same norm (our own). So short linear maps out of the tensor product are short bilinear maps, which are short maps into a space of operators (our own). The injective norm, the smallest cross norm, does not make the category closed (our own remark).

**nLab:** [tensor product of Banach spaces](https://ncatlab.org/nlab/show/tensor+product+of+Banach+spaces). It says: “One of these, the projective tensor product, makes Ban (the category of Banach spaces and short linear maps) into a closed symmetric monoidal category”

**Sources:**

- [A. Grothendieck, Produits tensoriels topologiques et espaces nucléaires, Memoirs of the AMS 16 (1955)](https://doi.org/10.1090/memo/0016)

### Uniform integrability and tightness describe the weakly compact sets of L¹

**Remember:** Bound integrals uniformly on small sets and outside one finite-measure set.

*Rules out counterexamples.* MSC 46B50 (Compactness in Banach (or normed) spaces), 46E30. arXiv math.FA. Level 3: graduate.

**Definition.** A family F in L¹ is uniformly integrable here if each ε &gt; 0 admits δ &gt; 0 with the following property. On every measurable set of measure below δ, each \|u\| with u ∈ F has integral below ε. Tightness means each ε &gt; 0 admits a measurable finite-measure set outside which every \|u\| has integral below ε.

**Problem.** A sequence in L¹ is relatively weakly compact exactly when it is bounded, uniformly integrable and tight (the Dunford–Pettis theorem).

**How the definition helps.** The two conditions name exactly the two ways that a bounded sequence in L¹ can lose its weak limit. Uniform integrability excludes concentration: n times the indicator of \[0, 1/n\] has norm 1 but tends to a point mass (our own example). Tightness excludes escape: the indicators of \[n, n + 1\] have norm 1 but drift off to infinity. Proving that the conditions are sufficient still takes real work (our own remark).

**Paper or page:** [Banach-Saks Theorem for L¹ revisited](https://arxiv.org/abs/2311.07319v1). It says: “For sequence (uₙ)ₙ⊂L¹(X), the following assertions are equivalent. (i) The sequence (uₙ)ₙ is relatively weakly compact in L¹(X). (ii) The sequence (uₙ)ₙ is bounded in L¹(X), uniformly integrable and tight.”

**Sources:**

- [Guy Foghem, Banach-Saks Theorem for L¹ revisited, arXiv:2311.07319 (2023), Approx. Theory Spec. Funct. 2 (2026) 1–13](https://arxiv.org/abs/2311.07319v1)

### Weak-type bounds let Marcinkiewicz interpolate from endpoints where strong bounds fail

**Remember:** Weak type bounds the measure above each threshold using one constant for every input.

*Makes the theorem clean to state or prove.* MSC 46B70 (Interpolation between normed linear spaces), 42B25. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** For finite p ≥ 1, weak type (p,p) bounds μ{\|Tf\| &gt; λ} by (C‖f‖ₚ/λ)ᵖ. One C must work for every f ∈ Lᵖ and λ &gt; 0. Strong type means boundedness in Lᵖ norm, and weak type at infinity means strong type there.

**Problem.** Suppose a sublinear operator has weak type (p₀,p₀) and (p₁,p₁), where 1 ≤ p₀ &lt; p₁ ≤ ∞. It has strong type (p,p) at every intermediate exponent. The Hardy–Littlewood maximal operator therefore acts boundedly on Lᵖ for p &gt; 1, using weak type (1,1) and boundedness on L∞.

**How the definition helps.** The endpoint hypotheses control level-set measures even when the endpoint norm bound fails. The Marcinkiewicz interpolation theorem converts those two bounds into interior strong bounds. In our own example, the maximal function of the indicator of \[0,1\] decays like 1/\|x\| at infinity, preventing strong type (1,1).

**Paper or page:** [Embeddings of Weighted Morrey Spaces](https://arxiv.org/abs/2508.03387v1). It says: “Let 1≤p₀&lt;p₁≤∞ and an operator T: ℝⁿ→ℝⁿ be sublinear and of weak-type (p₀,p₀) and weak-type (p₁,p₁). Then T is of strong-type (p,p) for all p₀&lt;p&lt;p₁.”

**Sources:**

- [Marcus Gerhold, Embeddings of Weighted Morrey Spaces, arXiv:2508.03387 (2025)](https://arxiv.org/abs/2508.03387v1)

### Completeness gives Hilbert spaces the Riesz and projection theorems

**Remember:** An inner product gives angles; completeness makes sure that the limits are in the space.

*Rules out counterexamples.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 3: graduate.

**Definition.** A Hilbert space is an inner product space that is complete for the distance defined by the inner product. Complete means that every Cauchy sequence converges to a point of the space.

**Problem.** In a Hilbert space H, every continuous linear functional is the inner product with a fixed vector. Every point of H has a unique nearest point in each nonempty closed convex set.

**How the definition helps.** Completeness keeps minimizing sequences and representing vectors in the space. The parallelogram law makes a minimizing sequence in a closed convex set Cauchy and gives uniqueness by the same midpoint argument. Projection onto the kernel of a nonzero functional gives its Riesz representative by scaling a perpendicular vector. In our own counterexample on finite Euclidean sequences, pairing with (1/n) gives a bounded functional whose representing vector lies outside the space.

**Wikipedia:** [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space). It says: “The Riesz representation theorem relies fundamentally not just on the presence of an inner product, but also on the completeness of the space.”

**Sources:** none listed. No primary source with a working link was found.

### Converging distances to C make cluster points in C force weak convergence

**Remember:** Two candidate limits cannot give opposite answers to the same distance test.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 46B10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A sequence in a real Hilbert space is an Opial sequence for a nonempty set C if its distance to each point of C converges. A weak cluster point is a weak limit of some subsequence, where weak convergence means that the inner product with each fixed vector converges.

**Problem.** An Opial sequence for C converges weakly to a point of C exactly when all its weak cluster points lie in C.

**How the definition helps.** In our own proof, the squared-distance difference for c,d ∈ C is affine and weakly continuous in the sequence variable. At cluster points c and d its limits are −‖c − d‖² and ‖c − d‖², so convergence forces c = d. Distance convergence to any member of C gives boundedness, hence every subsequence has a weakly convergent subsequence. If all cluster points belong to C, uniqueness gives weak convergence, and conversely a weak limit in C is the only cluster point.

**Paper or page:** [On Opial's Lemma](https://arxiv.org/abs/2503.22004v1). It says: “all weak cluster points of (xₙ)ₙ∈ℕ lie in C.”

**Sources:**

- [Aleksandr Arakcheev, Heinz H. Bauschke, On Opial's Lemma, arXiv:2503.22004v1 (2025)](https://arxiv.org/abs/2503.22004v1)
- [Zdzisław Opial, Weak convergence of the sequence of successive approximations for nonexpansive mappings, Bulletin of the American Mathematical Society (1967)](https://doi.org/10.1090/s0002-9904-1967-11761-0)

### A positive definite kernel determines exactly one reproducing kernel Hilbert space

**Remember:** The kernel fixes the inner product, so it fixes the space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)). arXiv math.FA. Level 3: graduate.

**Definition.** A kernel K on a set A is positive definite if every matrix (K(xᵢ, xⱼ)) built from finitely many points is positive semidefinite. A reproducing kernel Hilbert space is a Hilbert space of functions on A. In it, f(x) equals the inner product of f with the function Kₓ = K(·, x).

**Problem.** Each positive definite kernel on a set A is the reproducing kernel of exactly one Hilbert space of functions on A (the Moore–Aronszajn theorem).

**How the definition helps.** The reproducing property fixes the inner product of Kₓ and Kᵧ as the value K(y, x). So it fixes the inner product on all finite sums of such functions, which makes uniqueness almost immediate. Positive definiteness is exactly the condition that makes this formula a valid inner product (our own remark). The remaining work is to show that the completion is still a space of functions, because point evaluation is bounded (our own remark).

**Paper or page:** [Natural methods of unsupervised topological alignment](https://arxiv.org/abs/2510.26631v1). It says: “Suppose that K(x,y) is a Hermitian symmetric, positive definite kernel on the set 𝔄×𝔄. Then there exists a unique Hilbert space ℌ of functions defined on 𝔄, for which K is the reproducing kernel.”

**Sources:**

- [Natural methods of unsupervised topological alignment, arXiv:2510.26631 (2025)](https://arxiv.org/abs/2510.26631v1)
- [N. Aronszajn, Theory of reproducing kernels, Trans. Amer. Math. Soc. 68 (1950) 337–404](https://doi.org/10.1090/s0002-9947-1950-0051437-7)

### Continuous point evaluation gives a Hilbert space a reproducing kernel

**Remember:** If evaluation at a point is continuous, Riesz makes it an inner product.

*True by definition.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)). arXiv math.FA. Level 3: graduate.

**Definition.** A reproducing kernel Hilbert space is a Hilbert space H of functions on a set X with one extra property. For every x in X, the evaluation map f ↦ f(x) is a continuous linear functional.

**Problem.** Every reproducing kernel Hilbert space H on X has a kernel K. For every f ∈ H and x ∈ X, it satisfies f(x) = ⟨f,K(·,x)⟩.

**How the definition helps.** The kernel comes straight from the Riesz representation theorem. Each continuous evaluation functional is the inner product with a unique vector Kₓ, and K(y, x) = Kₓ(y) is the reproducing kernel. Our own remark: L²(ℝ) is not such a space, because its elements are classes of functions and f(x) has no meaning. The converse, building the space from a positive-definite kernel, is the substantial Moore–Aronszajn theorem.

**Wikipedia:** [Reproducing kernel Hilbert space](https://en.wikipedia.org/wiki/Reproducing_kernel_Hilbert_space). It says: “Such a reproducing kernel exists if and only if every evaluation functional is continuous.”

**Sources:**

- [Aronszajn, N. (1950). Theory of reproducing kernels. Transactions of the American Mathematical Society 68(3), 337–404.](https://doi.org/10.1090/S0002-9947-1950-0051437-7)

### Range norms make rows reproduce

**Remember:** Measure outputs by inputs and the rows become evaluation vectors.

*True by definition.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 45P05. arXiv math.FA. Level 3: graduate.

**Definition.** For each point x choose a real square-integrable kernel row kₓ. Map an input g to the function Lg with value ⟨g,kₓ⟩ at x. Give each output the norm of its shortest input, with equality of outputs at every point.

**Problem.** The range is a Hilbert space with continuous point evaluations. Its reproducing kernel, which represents evaluation by an inner product, is the inner product of two kernel rows.

**How the definition helps.** In our own argument, the null space of L is closed because it is the intersection of the orthogonal complements of all rows. Orthogonal projection onto its complement selects the shortest input, identifying the range isometrically with a Hilbert space. Each row belongs to this complement, so evaluation at x is the inner product with Lkₓ. Thus the reproducing kernel at x,y equals ⟨kₓ,kᵧ⟩.

**Paper or page:** [Minimal-norm solution to the Fredholm integral equations of the first kind via the H-HK formulation](https://arxiv.org/abs/2406.07303v1). It says: “R(L) is a RKHS with reproducing kernel defined by K(x,x′) = Gᵀ(x)HG(x′), x,x′ ∈ D.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Lorentz norms by decreasing rearrangement makes them rearrangement invariant

**Remember:** Same level-set measures give the same decreasing rearrangement.

*True by definition.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 28A25. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** For t &gt; 0, set f\*(t) = inf{a ≥ 0 : μ{\|f\| &gt; a} ≤ t}, with inf ∅ = ∞. For fixed 0 &lt; p &lt; ∞ and 0 &lt; q ≤ ∞, the Lorentz quasinorm is the Lᑫ norm of t¹⁄ᵖf\*(t) with measure dt/t.

**Problem.** Fix the Lorentz exponents. Suppose {\|f\| &gt; t} and {\|g\| &gt; t} have equal measures for every t &gt; 0. Then f and g have equal Lorentz quasinorms.

**How the definition helps.** The quasinorm is a formula in the decreasing rearrangement, which depends only on the measures of the superlevel sets. Wikipedia says the invariance holds essentially by definition. The work moves into building the rearrangement and checking that it has the same superlevel set measures, in our own account.

**Wikipedia:** [Lorentz space](https://en.wikipedia.org/wiki/Lorentz_space). It says: “The quasinorm is invariant under rearranging the values of the function f, essentially by definition.”

**Sources:** none listed. No primary source with a working link was found.

### Doubling makes simple functions dense in Orlicz spaces

**Remember:** Doubling lets one integrable scale control every smaller norm error.

*Rules out counterexamples.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** Let Φ be finite, convex and increasing on \[0,∞), with Φ(0) = 0 and Φ(t) → ∞. Its Luxemburg norm is inf{λ &gt; 0 : ∫Φ(\|f\|/λ) ≤ 1}, and its Orlicz space consists of measurable functions of finite norm modulo almost-everywhere equality. Doubling requires one C with Φ(2t) ≤ CΦ(t) for every t ≥ 0.

**Problem.** On a finite measure space, measurable functions taking finitely many values are dense in the Orlicz space when Φ satisfies the doubling condition.

**How the definition helps.** In our own proof, repeated doubling gives integrability of Φ(c\|f\|) at every c &gt; 0. Truncating and rounding toward zero gives simple approximants whose errors tend to zero at each scale by dominated convergence, hence in Luxemburg norm. Our own counterexample takes Φ(t) = exp(t) − 1 and f(x) = log(1/x) on (0,1), which belongs at scale ½. For bounded simple g, Φ(\|f − g\|) has divergent integral near zero, giving Luxemburg distance at least one.

**Paper or page:** [Convolutions of Orlicz spaces and Orlicz Schatten classes, with applications to Toeplitz operators](https://arxiv.org/abs/2505.01707v2). It says: “if $\\Phi$ is a quasi-Young function which satisfies a $\\Delta<sub>2</sub>$-condition, then the simple functions are dense in $L<sup>\\Phi</sup>(d\\mu)$;”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev norms make higher-to-lower order circle embeddings compact

**Remember:** Discard high frequencies and the error tends uniformly to zero on bounded sets.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42A16. arXiv math.AP, math.FA. Level 3: graduate.

**Definition.** For real s, the circle Sobolev space Hˢ consists of distributions f with ∑ₙ∈ℤ (1 + n²)ˢ\|f̂(n)\|² finite. Its norm is the square root of that sum.

**Problem.** For real s &gt; t, the inclusion Hˢ → Hᵗ on the circle is compact. This means it maps bounded sets to sets with compact closure.

**How the definition helps.** Fourier weights make the inclusion diagonal with entries tending to zero, in our own proof. In coefficient terms the diagonal entries are (1 + n²) to the power (t − s)/2. Keeping finitely many frequencies gives finite-rank approximations whose operator-norm errors tend to zero. The work moves into Parseval’s identity and the Fourier rule for derivatives.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Both representations follow easily from Parseval's theorem and the fact that differentiation is equivalent to multiplying the Fourier coefficient by in.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights admit the delta exactly below order −n/2

**Remember:** The delta has a flat transform, so the weight must supply all the decay.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 46F12. arXiv math.AP. Level 3: graduate.

**Definition.** For real s, set wₛ(ξ) = (1 + \|ξ\|²)ˢᐟ². The Sobolev space Hˢ(ℝⁿ) consists of tempered distributions whose Fourier transforms become square-integrable after multiplication by wₛ.

**Problem.** The Dirac delta δ, which evaluates a test function at zero, belongs to Hˢ(ℝⁿ) exactly when s &lt; −n/2.

**How the definition helps.** Fourier weights turn membership into one test for integrability, in our own computation. The delta transforms to a constant, so membership asks whether (1 + \|ξ\|²) to the power s is integrable. Polar coordinates give convergence exactly when 2s &lt; −n. The work moves into defining Fourier transforms of distributions and proving Plancherel’s norm identity, which connects the two definitions at nonnegative integer orders.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “This motivates Sobolev spaces with non-integer order since in the above definition we can replace k by any real number s.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give continuity above order n/2

**Remember:** A sufficiently strong Fourier weight makes the transform integrable and the function continuous.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, set wₛ(ξ) = (1 + \|ξ\|²)ˢᐟ². The space Hˢ(ℝⁿ) consists of L² functions f with wₛf̂ in L², and its norm is ‖wₛf̂‖₂.

**Problem.** If s &gt; n/2, each f in Hˢ(ℝⁿ) agrees almost everywhere with a bounded continuous function. Its supremum norm is bounded by a constant times the Hˢ norm of f.

**How the definition helps.** In our own proof, Cauchy–Schwarz bounds ‖f̂‖₁ by the Hˢ norm times the L² norm of the reciprocal Fourier weight. The squared reciprocal weight is integrable exactly when 2s &gt; n. Fourier inversion therefore gives a bounded continuous representative with the claimed supremum estimate.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “For k &gt; n/p, the space Wᵏ,ᵖ(Ω) will contain only continuous functions, but for which k this is already true depends both on p and on the dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give global regularity for constant-coefficient elliptic operators

**Remember:** At high frequencies, the elliptic symbol pays for the extra derivatives.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35B65, 35J30. arXiv math.AP. Level 3: graduate.

**Definition.** The symbol of a constant-coefficient differential operator P on ℝⁿ is the polynomial multiplying the Fourier transform when P acts. Ellipticity means its highest-degree homogeneous part never vanishes at a nonzero real frequency. A tempered distribution belongs to Hʳ if its Fourier transform multiplied by (1 + \|ξ\|²)ʳᐟ² belongs to L².

**Problem.** Let P be elliptic and have constant coefficients on ℝⁿ. If u is in Hᵗ and Pu is in Hˢ for real s and t, then u is in Hˢ⁺ᵐ.

**How the definition helps.** In our own proof, ellipticity and compactness of the unit sphere give \|P(ξ)\| ≥ c\|ξ\|ᵐ at sufficiently high frequencies. There the weighted L² bound for the transform of Pu controls the Hˢ⁺ᵐ weight of û. At bounded frequencies all Sobolev weights are comparable, so u ∈ Hᵗ supplies the remaining bound.

**Wikipedia:** [Elliptic operator](https://en.wikipedia.org/wiki/Elliptic_operator), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The elliptic regularity theorem guarantees that, provided f is square-integrable, u will in fact have 2k square-integrable weak derivatives.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights show why traces lose half a derivative

**Remember:** Integrating over the normal frequency costs half a derivative.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, Hˢ(ℝⁿ) consists of square-integrable functions whose Fourier transforms remain square-integrable after multiplication by (1 + \|ξ\|²) to the power s/2. The trace of a smooth function is its restriction to the hyperplane xₙ = 0. The usual first-order proof uses the fundamental theorem of calculus along lines perpendicular to the hyperplane.

**Problem.** Let n ≥ 2 and s &gt; 1/2. The trace extends from smooth, rapidly decreasing functions to a bounded linear map Hˢ(ℝⁿ) → Hˢ⁻¹⁄²(ℝⁿ⁻¹).

**How the definition helps.** In our own proof, the tangential Fourier transform of a smooth trace integrates û over the normal frequency, up to a normalization constant. Apply Cauchy–Schwarz with the Hˢ weight. The squared reciprocal weight integrates in the normal frequency to a constant times (1 + \|ξ′\|²) raised to ½ − s. Integrating the resulting bound in ξ′ gives the estimate, and density gives the extension.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Intuitively, taking the trace costs 1/p of a derivative.”

**Sources:** none listed. No primary source with a working link was found.

### Sobolev spaces make Dirichlet's principle true

**Remember:** Widen the space until the minimizing sequence has somewhere to converge.

*Makes the theorem clean to state or prove.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25, 49J05. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** On an open set Ω, W¹,² consists of L² functions whose first weak derivatives also belong to L². Each weak derivative gⱼ satisfies ∫u∂ⱼφ = −∫gⱼφ for every smooth compactly supported test function φ. Define W₀¹,² as the closure of these test functions in W¹,².

**Problem.** On a bounded domain Ω, fix boundary data represented by g ∈ W¹,²(Ω). The Dirichlet energy ∫\|∇u\|² attains its minimum in g + W₀¹,²(Ω), and the minimizer solves Laplace’s equation weakly.

**How the definition helps.** In our own argument, Poincaré’s inequality bounds a minimizing sequence in the Sobolev norm after subtracting g. Reflexivity gives a weakly convergent subsequence, and the closed affine constraint contains its limit. Weak lower semicontinuity of the energy gives a minimum. Varying the minimizer along each test function gives the weak Laplace equation.

**Wikipedia:** [Dirichlet's principle](https://en.wikipedia.org/wiki/Dirichlet%27s_principle), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space), [Direct method in the calculus of variations](https://en.wikipedia.org/wiki/Direct_method_in_the_calculus_of_variations). It says: “Their importance comes from the fact that weak solutions of some important partial differential equations exist in appropriate Sobolev spaces, even when there are no strong solutions in spaces of continuous functions with the derivatives understood in the classical sense.”

**Sources:**

- [D. Hilbert, Über das Dirichletsche Prinzip, J. reine angew. Math. 129 (1905), 63–67, doi:10.1515/crll.1905.129.63](https://doi.org/10.1515/crll.1905.129.63)

### The closure definition of zero-boundary Sobolev spaces makes extension by zero norm-preserving

**Remember:** Extend the approximating functions first, then take the limit.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** Define the zero-boundary Sobolev space of an open set Ω as a closure in the first-order Sobolev norm. It is the closure of the smooth functions with compact support in Ω. On a bounded domain with Lipschitz boundary, another definition takes the functions whose trace is zero. The trace is the boundary value of a Sobolev function.

**Problem.** Let 1 ≤ p &lt; ∞ and take a function in the zero-boundary space. Its extension by zero outside Ω lies in the Sobolev space of ℝⁿ and has the same norm.

**How the definition helps.** Each approximating function extends by zero to a smooth function on ℝⁿ with the same norm, in our own proof. These extensions form a Cauchy sequence in the complete Sobolev space of ℝⁿ, and their limit is the zero extension, in our own proof. With the zero-trace definition, one first needs the theorem that Wikipedia states: trace-zero functions can be approximated by smooth functions with compact support. That theorem carries the work.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “In other words, for Ω bounded with Lipschitz boundary, trace-zero functions in W¹,ᵖ(Ω) can be approximated by smooth functions with compact support.”

**Sources:** none listed. No primary source with a working link was found.

### The completion definition of Sobolev spaces makes smooth density automatic

**Remember:** A completion keeps its starting functions dense.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** Fix an open Ω ⊆ ℝⁿ, an integer k ≥ 0 and 1 ≤ p &lt; ∞. Complete the smooth functions of finite Sobolev norm, summing Lᵖ norms of all derivatives through order k, to obtain H. Define W using Lᵖ functions with weak derivatives through order k in Lᵖ.

**Problem.** On every open subset of ℝⁿ and for 1 ≤ p &lt; ∞, smooth functions are dense in the space W.

**How the definition helps.** In H, smooth functions are dense because H is built from them. The real work is the Meyers–Serrin theorem, which proves H = W on every open set with no condition on the boundary. Wikipedia says that this theorem establishes the equivalence of the two definitions. So the definition moves all the work into one theorem that two definitions agree.

**Wikipedia:** [Meyers–Serrin theorem](https://en.wikipedia.org/wiki/Meyers%E2%80%93Serrin_theorem). It says: “The theorem establishes the equivalence Wᵏ,ᵖ(Ω) = Hᵏ,ᵖ(Ω) of both definitions.”

**Sources:**

- [Norman G. Meyers and James Serrin, H = W (1964)](https://doi.org/10.1073/pnas.51.6.1055)

### The Fourier definition of Bessel potentials makes their orders add

**Remember:** Multiplying powers of one weight adds their exponents.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 31B15. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** The Bessel potential of order s &gt; 0 is the power −s/2 of I − Δ on functions on ℝᵈ, where Δ is the Laplacian. On the Fourier side, it divides the Fourier transform by (1 + 4π²\|ξ\|²) raised to the power s/2, where ξ is the frequency. The integral definition instead convolves with an explicit kernel Gₛ built from a modified Bessel function.

**Problem.** For s, t &gt; 0, the Bessel potential of order s after that of order t is the Bessel potential of order s + t.

**How the definition helps.** On the Fourier side, both potentials divide by powers of the same weight, so composition adds their orders. In our own comparison, the corresponding convolution identity follows once the Fourier transform of the Bessel kernel is known.

**Wikipedia:** [Bessel potential](https://en.wikipedia.org/wiki/Bessel_potential). It says: “The Bessel potential acts by multiplication on the Fourier transforms”

**Sources:**

- [Nachman Aronszajn and K. T. Smith, Theory of Bessel potentials. I (1961)](https://doi.org/10.5802/aif.116)

### The quotient norm on boundary values gives an isometric extension operator

**Remember:** The shortest extension is perpendicular to every function with zero trace.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 46C05. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** Let Ω be a bounded Lipschitz domain and give H¹(Ω) its usual Hilbert norm on functions and their first weak derivatives. The trace extends boundary restriction continuously from smooth functions. For each boundary value g in its image, define ‖g‖ as the infimum of ‖u‖ over all u with trace g.

**Problem.** For the quotient norm, a linear map E sends each boundary value g to an extension with ‖Eg‖ = ‖g‖. The usual Sobolev–Slobodeckij boundary norm gives a boundedness estimate for E.

**How the definition helps.** Our own argument identifies each trace fibre with a coset of the closed kernel. Its unique shortest member lies perpendicular to that kernel. Orthogonal projection selects this member linearly and attains the quotient norm. The trace theorem identifies the image with H½(∂Ω) under an equivalent Sobolev–Slobodeckij norm.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “it maps continuously onto the Sobolev–Slobodeckij space”

**Sources:** none listed. No primary source with a working link was found.

### Weak derivatives make first-order Sobolev spaces complete

**Remember:** The integration identity preserves weak derivatives when the functions and derivatives converge.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** The weak derivative of u in direction j is gⱼ if ∫ u ∂ⱼφ = −∫ gⱼφ for every smooth φ of compact support. The Sobolev space W¹,ᵖ(Ω) consists of functions in Lᵖ with first weak derivatives in Lᵖ. Its norm sums the Lᵖ norms of the function and its first weak derivatives. For finite p, using only continuously differentiable functions with the same norm can leave out limits.

**Problem.** For any open Ω and 1 ≤ p ≤ ∞, W¹,ᵖ(Ω) is a Banach space, meaning a complete normed space.

**How the definition helps.** The weak-derivative definition gives an integral identity that passes to limits, in our own proof. In a Sobolev Cauchy sequence, the functions and their first derivatives are Cauchy in Lᵖ, so they have limits u and gⱼ. Hölder’s inequality lets both sides of the defining identity pass to the limit, so gⱼ is the weak derivative of u. For finite p on (−1, 1), smooth functions √(x² + ε²) converge in this norm to \|x\|, which lacks a classical derivative at zero.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The derivatives are understood in a suitable weak sense to make the space complete, i.e. a Banach space.”

**Sources:** none listed. No primary source with a working link was found.

### Weak gradients ignore exceptional curves

**Remember:** Ignore curves that an integrable weight can make infinitely costly.

*Rules out counterexamples.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 28A75. arXiv math.FA, math.MG. Level 3: graduate.

**Definition.** An upper gradient is a nonnegative measurable function whose line integral bounds the absolute change between endpoints of every curve of finite length. A p-weak upper gradient permits exceptions on a family of curves of p-modulus zero. This means some nonnegative Lᵖ function has infinite line integral along every exceptional curve.

**Problem.** For 1 ≤ p &lt; n, the indicator of the origin in ℝⁿ has zero as a p-weak upper gradient. Zero is not an upper gradient for that representative.

**How the definition helps.** Our own example needs exceptions only for curves joining the origin to another point. The weight 1/\|x\| on the unit ball, extended by zero outside, belongs to Lᵖ for p &lt; n. Along any such curve, distance from the origin is at most the arclength traveled, so the line integral diverges. These curves have zero p-modulus, while a straight segment from the origin violates the ordinary bound.

**Paper or page:** [Density of continuous functions in Sobolev spaces with applications to capacity](https://arxiv.org/abs/2303.00649v3). It says: “If g ∈ Lᵖ(X) is any p-weak upper gradient for f, then for any ε &gt; 0, there exists a lower semicontinuous”

**Sources:** none listed. No primary source with a working link was found.

### Zero boundary values make gradient norms complete

**Remember:** Zero boundary values let the gradient control the whole function.

*Rules out counterexamples.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA. Level 3: graduate.

**Definition.** On an open subset of Euclidean space, the first Sobolev norm combines the square-integral norms of a function and its weak gradient. The weak gradient gives the first derivatives through integration by parts against smooth test functions of compact support. The space H₀¹ is the closure of smooth functions of compact support in this norm.

**Problem.** On a bounded open subset of Euclidean space, the square-integral norm of the weak gradient is a complete norm on H₀¹.

**How the definition helps.** The Poincaré inequality lets the gradient of a function with zero boundary values control its square-integral norm. Our own conclusion uses equivalence to the original complete Sobolev norm. In our own counterexample, the constant one on a bounded interval belongs to the full Sobolev space and has zero gradient.

**Paper or page:** [The S-resolvent estimates for the Dirac operator on hyperbolic and spherical spaces](https://arxiv.org/abs/2504.12725v1). It says: “∥F∥₍L²₎ ≤ Cₚ(Ω)∥F∥ᴅ, F ∈ H₀¹(Ω).”

**Sources:** none listed. No primary source with a working link was found.

### Zero traces allow zero extension

**Remember:** Approximate inside the domain before extending by zero.

*Rules out counterexamples.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25. arXiv math.AP. Level 3: graduate.

**Definition.** The Sobolev space H¹ consists of square-integrable functions whose first weak derivatives are also square-integrable. Weak derivatives move differentiation onto smooth test functions by integration by parts. Close the smooth functions of compact support inside the domain in the H¹ norm to define its zero boundary space.

**Problem.** Suppose the bounded domain has a boundary locally given by graphs of Lipschitz functions. Every H¹ function with zero trace, its boundary value in the Sobolev sense, extends by zero to an H¹ function on the whole space.

**How the definition helps.** Zero extension preserves the H¹ norm of smooth functions supported inside the domain. In our own proof, extension of an approximating sequence therefore gives an H¹ limit equal to the zero extension. The trace theorem identifies the closure with the zero-trace functions. In our own counterexample, extending the constant one from an interval introduces endpoint point masses into its derivative.

**Wikipedia:** [Trace operator](https://en.wikipedia.org/wiki/Trace_operator). It says: “is the subspace of functions in W¹˒ᵖ(Ω) with trace zero.”

**Sources:** none listed. No primary source with a working link was found.

### Rapid decay of all derivatives makes Schwartz space Fourier invariant

**Remember:** Fourier swaps derivatives and powers, and Schwartz functions control both.

*True by definition.* MSC 46F05 (Topological linear spaces of test functions, distributions and ultradistributions), 42B10. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Schwartz space consists of smooth functions f on ℝⁿ for which every polynomial times every derivative of f is bounded. This includes the derivative of order zero, which is f itself. The larger space L¹ only requires integrability and need not contain the Fourier transform of each of its members.

**Problem.** The Fourier transform maps the Schwartz space into itself.

**How the definition helps.** In our own proof, Fourier transformation exchanges differentiation and multiplication by coordinate functions, up to constants. Each polynomial times a derivative of f̂ is a finite sum of transforms of derivatives of polynomial multiples of f. Schwartz decay makes all these inputs integrable, so their transforms are bounded.

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

**Definition.** Suppose u and v are distributions on ℝⁿ and at least one has compact support. For each smooth compactly supported φ, evaluate u ⊗ v on χ(x,y)φ(x + y) to define (u ∗ v)(φ). Choose χ smooth and compactly supported, equal to one near the pairs in supp u × supp v whose sum belongs to supp φ.

**Problem.** Let u and v be distributions on ℝⁿ, and let at least one of them have compact support. Then u ∗ v = v ∗ u.

**How the definition helps.** In our own proof, swapping x and y leaves φ(x + y) unchanged and swaps the two factors of the tensor product. The Fubini theorem for distributions justifies this interchange. The cutoff does not affect the value because it equals one near the relevant support.

**nLab:** [convolution product of distributions](https://ncatlab.org/nlab/show/convolution+product+of+distributions). It says: “is the unique distribution such that for f ∈ C<sup>∞</sup>(ℝⁿ) a smooth function, it satisfies (u₁ ⋆ u₂) ⋆ f = u₁ ⋆ (u₂ ⋆ f)”

**Sources:** none listed. No primary source with a working link was found.

### Defining distributional derivatives by duality makes mixed partial derivatives always commute

**Remember:** Move both derivatives onto the smooth test function.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions). arXiv math.FA. Level 3: graduate.

**Definition.** A distribution is a continuous linear functional on test functions, which are smooth functions that vanish outside a bounded set. Its partial derivative ∂ᵢT sends a test function φ to −T(∂ᵢφ). Classical partial derivatives use limits of difference quotients of the function itself.

**Problem.** For every distribution T on ℝᵈ and all indices i and j, ∂ᵢ∂ⱼT = ∂ⱼ∂ᵢT.

**How the definition helps.** The definition moves both derivatives onto the test function, where they commute because test functions are smooth. In our own proof, the two minus signs cancel, so both sides send φ to T(∂ᵢ∂ⱼφ). Classical mixed partial derivatives can differ unless they are continuous, in our own account. The work is in Schwarz's theorem for smooth functions and in the integration by parts showing that the two derivatives agree on smooth functions.

**Paper or page:** [Distributional Partial Derivatives Commute](https://proofwiki.org/wiki/Distributional_Partial_Derivatives_Commute). It says: “Then in the distributional sense: ∂²T/∂xᵢ∂xⱼ = ∂²T/∂xⱼ∂xᵢ”

**Sources:** none listed. No primary source with a working link was found.

### Distributions can be differentiated by definition

**Remember:** Move the derivative onto the test function, which can always take it.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions), 46F05. arXiv math.FA. Level 3: graduate.

**Definition.** A test function is a smooth function with compact support. A distribution is a continuous linear functional T on test functions. Its derivative T′ is defined by T′(φ) = −T(φ′) for every test function φ.

**Problem.** Every distribution has derivatives of every order, obeying the usual linear differentiation rules and the product rule with smooth factors. These derivatives also exist for every locally integrable function.

**How the definition helps.** Differentiation acts continuously on test functions, so its signed transpose defines another distribution and can be iterated. In our own derivation, the linear rules and the smooth-factor product rule follow by applying the corresponding test-function identities. Integration by parts recovers ordinary differentiation for smooth functions, and integration against test functions embeds locally integrable functions as distributions.

**Wikipedia:** [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “It turns out that this is the proper definition; it extends the ordinary definition of derivative, every distribution becomes infinitely differentiable and the usual properties of derivatives hold.”

**Sources:** none listed. No primary source with a working link was found.

### The principal value makes 1/x a distribution that solves x·F = 1

**Remember:** Cut out a symmetric gap, and the two infinities cancel.

*Makes the theorem clean to state or prove.* MSC 46F10 (Operations with distributions and generalized functions), 26A42. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** The Cauchy principal value of f is the limit as ε → 0 of the integral of f over the real line without (−ε, ε). The distribution PV(1/x) sends a smooth function b with compact support to the principal value of b(x)/x.

**Problem.** The principal value PV(1/x) is a distribution with x·PV(1/x) = 1. The distributions F on ℝ with x·F = 1 are exactly PV(1/x) + cδ for constants c, where δ is the Dirac delta.

**How the definition helps.** In our own proof, subtract φ(0) near zero symmetrically, leaving a quotient bounded there by sup\|φ′\|. This gives convergence and continuity on tests with fixed compact support. Multiplication by x cancels the denominator, so the result is the constant distribution one. Differences of solutions kill all tests vanishing at zero, since each such test equals x times another test, and hence are multiples of δ.

**nLab:** [Cauchy principal value](https://ncatlab.org/nlab/show/Cauchy+principal+value). It says: “When the Cauchy principal value exists but the full integral does not (hence when the full integral "diverges") one may think of the Cauchy principal value as "exracting a finite value from a diverging quantity".”

**Sources:** none listed. No primary source with a working link was found.

### The test-function definition makes distribution convolution associative

**Remember:** Both parenthesizations produce the same successive convolutions with every test function.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** For each test function f, define (u ⋆ f)(x) = u(y ↦ f(x − y)). For compactly supported v, define u ⋆ v by (u ⋆ v) ⋆ f = u ⋆ (v ⋆ f) for every smooth compactly supported f.

**Problem.** Let u, v and w be distributions on ℝⁿ with v and w of compact support. Then (u ⋆ v) ⋆ w = u ⋆ (v ⋆ w).

**How the definition helps.** In our own proof, convolving either parenthesization with f gives u ⋆ (v ⋆ (w ⋆ f)). Compact support ensures w ⋆ f remains a test function and v ⋆ w remains compactly supported. Evaluating at zero with reflected test functions recovers the distribution, so the parenthesizations agree.

**nLab:** [convolution product of distributions](https://ncatlab.org/nlab/show/convolution+product+of+distributions). It says: “is the unique distribution such that for f ∈ C∞(ℝⁿ) a smooth function, it satisfies (u₁ ⋆ u₂) ⋆ f = u₁ ⋆ (u₂ ⋆ f)”

**Sources:** none listed. No primary source with a working link was found.

### Duality defines the Fourier transform of tempered distributions

**Remember:** To transform a distribution, transform the test function instead.

*True by definition.* MSC 46F12 (Integral transforms in distribution spaces), 46F05, 42A38. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Schwartz space holds the smooth functions that, with all their derivatives, decay faster than any power. A tempered distribution is a continuous linear functional on the Schwartz space. The Fourier transform of a tempered distribution u is the distribution û given by û(f) = u(f̂) for every Schwartz function f. This makes sense because the Fourier transform maps the Schwartz space to itself.

**Problem.** On a tempered distribution given by a Schwartz function f, this Fourier transform gives the distribution of f̂. Fourier inversion holds for every tempered distribution.

**How the definition helps.** The definition moves the transform onto the test function, so every result comes from the case of Schwartz functions. The definition copies the identity ∫ f ĝ = ∫ f̂ g for Schwartz functions, so on such f the new transform gives f̂. Fourier inversion for tempered distributions then follows at once from inversion for Schwartz functions. The real work is in the function case and in showing that the Fourier transform preserves the Schwartz space.

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “Property \[…\] of the ordinary Fourier transform on functions with rapidly decreasing partial derivatives motivates and justifies the fullowing generalization”

**Sources:**

- [Lars Hörmander, The Analysis of Linear Partial Differential Operators I, Springer (1983; 2nd ed. 1990), chapter 7](https://doi.org/10.1007/978-3-642-61497-2)

### Fourier duality preserves homogeneity and changes degree m to −n−m

**Remember:** A normalized dilation of the test function multiplies the distribution’s value by tᵐ.

*True by definition. Confidence: medium.* MSC 46F12 (Integral transforms in distribution spaces), 46F10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** On ℝⁿ set φₜ(x) = t⁻ⁿφ(x/t) for each Schwartz test function φ and t &gt; 0. A tempered distribution S is homogeneous of degree m if S(φₜ) = tᵐS(φ) for every such φ and t. Its Fourier transform acts by Ŝ(φ) = S(φ̂).

**Problem.** If a tempered distribution S on ℝⁿ is homogeneous of degree m, then Ŝ is homogeneous of degree −n − m.

**How the definition helps.** In our own computation, the Fourier transform of φₜ equals t⁻ⁿ times the normalized dilation of φ̂ at scale 1/t. Applying S contributes another factor t⁻ᵐ by homogeneity. Thus Ŝ(φₜ) = t⁻ⁿ⁻ᵐŜ(φ), the defining identity at the claimed degree.

**Wikipedia:** [Homogeneous distribution](https://en.wikipedia.org/wiki/Homogeneous_distribution). It says: “The additional factor of t⁻ⁿ is needed to reproduce the usual notion of homogeneity for locally integrable functions, and comes about from the Jacobian change of variables.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier duality sends the constant one to the Dirac delta

**Remember:** Inversion at zero turns the transform of one into point evaluation.

*True by definition.* MSC 46F12 (Integral transforms in distribution spaces), 42B10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A tempered distribution T is a continuous linear functional on the Schwartz space of smooth, rapidly decreasing functions. Define its Fourier transform by T̂(φ) = T(φ̂), with the Fourier integral with kernel exp(−2πix·ξ) on test functions. That integral does not converge for the constant function 1.

**Problem.** The Fourier transform of the constant function 1 is the Dirac delta δ, which acts by δ(φ) = φ(0).

**How the definition helps.** Fourier duality turns the transform of 1 into the inversion formula at zero, in our own proof. The definition gives 1̂(φ) = ∫ φ̂, and inversion gives ∫ φ̂ = φ(0). The work moves into proving inversion on the test functions and showing that their transforms remain test functions. ProofWiki states the one-dimensional identity, and the same proof works in every dimension.

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

**Definition.** Fréchet differentiability of f at x requires a bounded linear map A between the domain and target normed spaces. For nonzero h tending to zero, ‖f(x+h) − f(x) − Ah‖/‖h‖ must tend to zero.

**Problem.** A map that is Fréchet differentiable at x is continuous at x. A composition of Fréchet differentiable maps is Fréchet differentiable, and its derivative is the composition of the derivatives.

**How the definition helps.** The increment is Ah + o(‖h‖), so it tends to zero and is O(‖h‖). Substitution in the second expansion gives the composed derivative and another o(‖h‖) remainder in our own proof. The function x³y/(x⁶ + y²), extended by zero at the origin, has zero derivative along every line there. It equals ½ along (t,t³) for nonzero t, so continuity fails.

**Wikipedia:** [Fréchet derivative](https://en.wikipedia.org/wiki/Fr%C3%A9chet_derivative). It says: “This is analogous to the fact that the existence of all directional derivatives at a point does not guarantee total differentiability (or even continuity) at that point.”

**Sources:**

- [Maurice Fréchet, La notion de différentielle dans l'analyse générale, Annales scientifiques de l'École normale supérieure 42 (1925)](https://doi.org/10.24033/asens.766)

### Strong measurability lets integrable norms give vector integrals

**Remember:** Integrable norms suffice only when simple functions can see the vector values.

*Rules out counterexamples.* MSC 46G10 (Vector-valued measures and integration), 46E40. arXiv math.FA. Level 3: graduate.

**Definition.** A function into a Banach space is strongly measurable if it is an almost-everywhere limit of finite-valued measurable functions. Weak measurability only tests the scalar functions obtained by applying bounded linear functionals.

**Problem.** A strongly measurable Banach-space-valued function with integrable norm has a Bochner integral. This is the norm limit of integrals of simple functions that approximate it in integrated norm.

**How the definition helps.** Strong measurability supplies the simple approximations needed for the Bochner integrability criterion. Our own example sends t in \[0,1\] to the unit vector indexed by t in ℓ²(\[0,1\]). Each bounded linear functional has only countably many nonzero coordinates, so the function is weakly measurable, and its norm is one. Finite-valued approximations use only countably many coordinates, so they cannot approximate the other unit vectors, and the function has no Bochner integral.

**Wikipedia:** [Bochner integral](https://en.wikipedia.org/wiki/Bochner_integral). It says: “a Bochner-measurable function f : X → B is Bochner integrable if and only if ∫₍X₎ ∥f∥ʙ dμ &lt; ∞.”

**Sources:** none listed. No primary source with a working link was found.

### The weak Pettis definition lets bounded operators commute with the integral

**Remember:** Pull each functional back through the operator.

*True by definition.* MSC 46G10 (Vector-valued measures and integration), 28B05. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach-space-valued function f is Pettis integrable if φ ∘ f is integrable for every continuous linear functional φ and the following condition holds. For each measurable set A, some vector e<sub>A</sub> satisfies φ(e<sub>A</sub>) = ∫<sub>A</sub> φ(f(x)) dμ(x) for every such φ.

**Problem.** Let T be a continuous linear operator between Banach spaces and f be Pettis integrable. Then T ∘ f is Pettis integrable, and its integral is T applied to the integral of f.

**How the definition helps.** In our own proof, each target functional ψ pulls back to the continuous source functional ψ ∘ T. Thus ψ ∘ T ∘ f is integrable. For every measurable A, the defining identity gives ψ(T(e<sub>A</sub>)) = ∫<sub>A</sub> ψ(T(f(x))) dμ(x), so T(e<sub>A</sub>) represents the integral.

**Wikipedia:** [Pettis integral](https://en.wikipedia.org/wiki/Pettis_integral). It says: “⟨φ, e<sub>A</sub>⟩ = ∫<sub>A</sub> ⟨φ, f(x)⟩ dμ(x) for all φ ∈ V′.”

**Sources:** none listed. No primary source with a working link was found.

### Complex scalars make ℂ the only Banach division algebra

**Remember:** Over ℂ every element has a spectral point, so division algebras collapse to ℂ.

*Rules out counterexamples. Confidence: medium.* MSC 46H05 (General theory of topological algebras), 46H20. arXiv math.FA. Level 3: graduate.

**Definition.** A complex Banach division algebra is a nonzero associative unital complex algebra with a complete submultiplicative norm in which every nonzero element has an inverse.

**Problem.** Every complex Banach division algebra is isomorphic to ℂ.

**How the definition helps.** The complex spectrum theorem gives each element a a scalar λ for which a − λ1 has no inverse. The division property forces a = λ1. In our own comparison, the real quaternion algebra satisfies the division property yet contains nonscalar elements.

**Wikipedia:** [Gelfand–Mazur theorem](https://en.wikipedia.org/wiki/Gelfand%E2%80%93Mazur_theorem), [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “the only complex Banach algebra that is a division algebra is the complex numbers ℂ.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the spectrum by characters makes polynomial spectral mapping immediate

**Remember:** A character reads p(a) as p of its reading of a.

*True by definition. Confidence: medium.* MSC 46H05 (General theory of topological algebras), 47A10. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** In a commutative unital complex Banach algebra, a character is a nonzero multiplicative linear functional. Define the spectrum of an element a as the set of values φ(a) over all characters φ. The usual definition takes all λ for which a − λ1 has no inverse.

**Problem.** Let a be an element of a commutative unital complex Banach algebra, and let p be a polynomial. Then the spectrum of p(a) is the set of values p(λ) for λ in the spectrum of a.

**How the definition helps.** With the character definition the proof is one line, because φ(p(a)) = p(φ(a)) for every character φ. The work moves to the theorem that the two definitions agree, which rests on the Gelfand–Mazur theorem. The usual definition also gives a short proof, by factoring p(a) − λ into linear factors, and that proof works without commutativity. ProofWiki states the agreement of the definitions; the comparison is our own.

**Paper or page:** [Spectrum of Element of Unital Commutative Banach Algebra](https://proofwiki.org/wiki/Spectrum_of_Element_of_Unital_Commutative_Banach_Algebra). It says: “σₐ(x) = {φ(x) : φ ∈ Φₐ}”

**Sources:** none listed. No primary source with a working link was found.

### Adding a unit makes non-unital C\*-algebras behave like compactified spaces

**Remember:** Adding a unit is adding a point at infinity, then subtracting it again.

*Makes the theorem clean to state or prove.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** Adjoin a unit to a complex C\*-algebra A by taking A⁺ = A ⊕ ℂ with product (a,z)(b,w) = (ab + wa + zb,zw). The scalar projection sends (a,z) to z. Define K₀(A) as the kernel of its induced map from K₀(A⁺) to ℤ.

**Problem.** For locally compact Hausdorff X, K₀(C₀(X)) is the degree-zero complex K-theory of X with compact support.

**How the definition helps.** In our own argument, adjoining a unit gives C(X⁺), and the scalar projection evaluates at the added point. The compact-space correspondence between vector bundles and projective modules identifies the induced kernel with reduced K-theory of X⁺. This is compactly supported K-theory of X by definition.

**nLab:** [unitization of a C-star-algebra](https://ncatlab.org/nlab/show/unitization+of+a+C-star-algebra). It says: “The generalization of the process of one-point compactification of possibly non-compact topological spaces from topology to non-commutative topology is the process of adding units to possibly non-unital C\*-algebras”

**Sources:** none listed. No primary source with a working link was found.

### Characters must be nonzero, so the Gelfand spectrum is locally compact

**Remember:** Drop the zero character, and the space left over is locally compact.

*True by definition.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** The spectrum of a commutative C\*-algebra A is the set of nonzero \*-homomorphisms from A to ℂ. It carries the weak-\* topology, the topology of pointwise convergence on A.

**Problem.** The spectrum of a commutative C\*-algebra A is a locally compact Hausdorff space. It is compact when A has a unit.

**How the definition helps.** The characters and the zero map form a weak-\* closed part of the dual unit ball. So they form a compact set by the Banach–Alaoglu theorem (our own step), and removing the one point 0 leaves a locally compact space. When A has a unit, every character sends 1 to 1, so no net of characters converges to zero, and the spectrum is compact. The zero map plays the part of the point at infinity (our own remark).

**Wikipedia:** [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “In the unital case, i.e. where the C\*-algebra has a multiplicative unit element 1, all characters f must be unital, i.e. f(1) is the complex number one. This excludes the zero homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Defining positive elements as b\*b makes adjoint-preserving homomorphisms preserve positivity

**Remember:** A map that preserves adjoints sends b\*b to φ(b)\*φ(b).

*True by definition. Confidence: medium.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** Call an element of a C\*-algebra positive if it equals b\*b for some element b of the algebra. The spectral definition instead calls an element positive if it is self-adjoint and its spectrum lies in \[0, ∞).

**Problem.** Every homomorphism between C\*-algebras that preserves adjoints sends positive elements to positive elements.

**How the definition helps.** With the b\*b definition, φ(b\*b) = φ(b)\*φ(b), which is positive by definition. The work moves to the theorem that the two definitions agree. Its hard step is the Fukamiya–Kaplansky theorem that b\*b has spectrum in \[0, ∞). Wikipedia states that the two definitions agree; the comparison is our own.

**Wikipedia:** [C\*-algebra](https://en.wikipedia.org/wiki/C%2A-algebra). It says: “Elements of this cone are called non-negative (or sometimes positive”

**Sources:** none listed. No primary source with a working link was found.

### If the star is isometric, the B\* and C\* identities agree

**Remember:** Once the star keeps the norm, the two norm identities say the same thing.

*True by definition. Confidence: medium.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** Call the involution of a Banach \*-algebra isometric when ‖A\*‖ = ‖A‖ for every element A. The two identities compared here require ‖A\*A‖ to equal ‖A\*‖‖A‖ and ‖A‖², respectively, for every A.

**Problem.** In a Banach \*-algebra whose involution is an isometry, the C\*-identity holds exactly when the B\*-identity holds.

**How the definition helps.** If the involution is an isometry, ‖A\*‖ ‖A‖ = ‖A‖², so the two identities are visibly the same. Many texts leave this clause out of the definition of a Banach \*-algebra. Then the isometry follows easily from the B\*-identity, but from the C\*-identity only after some difficulty, as the nLab says. So the clause moves the hard part out of the equivalence.

**nLab:** [C-star-algebra](https://ncatlab.org/nlab/show/C-star-algebra). It says: “Often one sees the definition without the clause (which should be in the definition of Banach \*-algebra) that the involution is an isometry (so that ‖A\*‖ = ‖A‖, which is key for the equivalence of the B\* and C\* identities).”

**Sources:**

- [James G. Glimm, Richard V. Kadison, Unitary operators in C\*-algebras, Pacific Journal of Mathematics 10 (1960) 547–556 (the unital case of the hard direction)](https://doi.org/10.2140/pjm.1960.10.547)

### The C\*-identity makes the Gelfand transform an isometry

**Remember:** The C\*-identity forces norm and spectral radius to agree, so nothing is lost.

*Rules out counterexamples.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A character of a commutative Banach algebra is a nonzero homomorphism to ℂ. The Gelfand transform sends an element a to the function f ↦ f(a) on the space of characters. A C\*-algebra is a Banach algebra with an involution such that ‖x\*x‖ = ‖x‖².

**Problem.** Let X be the character space of a commutative C\*-algebra A, with its topology of pointwise convergence. The Gelfand transform identifies A isometrically as a C\*-algebra with C₀(X), the continuous functions vanishing at infinity.

**How the definition helps.** In our own proof, characters kill nilpotents, but the C\*-identity makes the norm of each normal element equal its spectral radius. Every element here is normal, so the supremum of its character magnitudes equals its norm. This excludes nonzero nilpotents and makes the Gelfand image closed. The image separates characters, vanishes nowhere collectively and respects conjugation, so Stone–Weierstrass gives all of C₀(X).

**Wikipedia:** [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “Thus the Gelfand representation is injective if and only if A is (Jacobson) semisimple.”

**Sources:**

- [I. Gelfand and M. Neumark, On the imbedding of normed rings into the ring of operators in Hilbert space, Matematicheskii Sbornik 12(54) (1943), 197–217; reprinted in Contemporary Mathematics 167 (1994)](https://doi.org/10.1090/conm/167/16)

### The universal definition of Cuntz algebras gives the circle action for free

**Remember:** Multiplying every generator by the same unit scalar keeps the relations.

*True by definition.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46L55. arXiv math.OA. Level 3: graduate.

**Definition.** For an integer n ≥ 2, the Cuntz algebra Oₙ has generators s₁,…,sₙ satisfying sᵢ\*sᵢ = 1 for every i and ∑ᵢ sᵢsᵢ\* = 1. Every family satisfying these relations in a unital C\*-algebra is the image of the generators under exactly one unital \*-homomorphism.

**Problem.** For each complex number z with \|z\| = 1, there is an automorphism of Oₙ that sends each sᵢ to zsᵢ. These automorphisms form a continuous action of the circle.

**How the definition helps.** In our own argument, replacing sᵢ by zsᵢ preserves both relations, so universality gives a homomorphism α<sub>z</sub>. Uniqueness on generators gives α<sub>z</sub>α<sub>w</sub> = α<sub>zw</sub> and α₁ is the identity, hence each α<sub>z</sub> is invertible. Continuity on polynomials extends by density because all these automorphisms are isometries.

**Wikipedia:** [Cuntz algebra](https://en.wikipedia.org/wiki/Cuntz_algebra). It says: “This universal C\*-algebra is called the Cuntz algebra”

**Sources:**

- [Joachim Cuntz, Simple C\*-algebras generated by isometries (1977)](https://doi.org/10.1007/BF01625776)

### The universal definition of the multiplier algebra makes essential extensions embed

**Remember:** If no element of D can ignore A, then D embeds in M(A).

*True by definition.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A closed ideal A of a C\*-algebra D is essential if no nonzero element of D multiplies all of A to zero. The multiplier algebra M(A) contains A as an essential ideal and has a universal property. For each C\*-algebra D with A as a closed ideal, exactly one adjoint-preserving homomorphism from D to M(A) is the identity on A. One construction of M(A) uses double centralizers, which are compatible pairs of left and right multiplication maps on A.

**Problem.** Let a C\*-algebra D contain A as an essential ideal. Then the canonical homomorphism from D to M(A) is injective.

**How the definition helps.** The canonical map fixes A, so its kernel J intersects A only in zero. Since both are ideals, JA lies in that intersection. In our own proof, essentiality now forces J = 0, giving injectivity.

**Wikipedia:** [Multiplier algebra](https://en.wikipedia.org/wiki/Multiplier_algebra). It says: “It also follows from the definition that for any D containing A as an essential ideal, the multiplier algebra M(A) contains D as a C\*-subalgebra.”

**Sources:** none listed. No primary source with a working link was found.

### The tensor norm definition of nuclearity makes spatial tensor products nuclear

**Remember:** Regroup three factors, then trade the largest norm for the smallest twice.

*True by definition. Confidence: medium.* MSC 46L06 (Tensor products of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A C\*-algebra A is nuclear if, for every C\*-algebra B, the minimal and maximal C\*-norms on A ⊗ B agree. Their completions are denoted by ⊗min and ⊗max, respectively.

**Problem.** If A and B are nuclear, then their spatial tensor product A ⊗min B is nuclear.

**How the definition helps.** In our own proof, nuclearity of A first replaces A ⊗min B by A ⊗max B. For any C, maximal associativity groups B with C, and nuclearity of B replaces their maximal product by their minimal product. Nuclearity of A now replaces the outer maximal product by a minimal one. Minimal associativity groups A with B again, proving the required equality.

**nLab:** [spatial tensor product](https://ncatlab.org/nlab/show/spatial+tensor+product). It says: “the maximal and minimal tensor norms on the algebraic tensor product A ⊗ B coincide”

**Sources:**

- [Man-Duen Choi and Edward Effros, Nuclear C\*-algebras and the approximation property (1978)](https://doi.org/10.2307/2373876)

### Complete positivity, not positivity, makes Stinespring's dilation theorem true

**Remember:** Complete positivity preserves positivity at every matrix size.

*Rules out counterexamples.* MSC 46L07 (Operator spaces and completely bounded maps), 46L05, 47A20. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A linear map Φ between C\*-algebras is positive when it sends positive elements to positive elements. It is completely positive when Φ applied entrywise to n × n matrices is positive for every n.

**Problem.** Let Φ be a completely positive map from a unital C\*-algebra A to the bounded operators on H. Stinespring's theorem says that Φ(a) = V\*π(a)V. Here π is a \*-representation of A on another Hilbert space and V is a bounded operator.

**How the definition helps.** Matrix positivity supplies the positive semidefinite form in Stinespring’s construction on A ⊗ H (our own). Quotienting by its null space and completing gives the dilation space (our own). Transposition on M₂(ℂ) fails the size-two test, whereas every compression of a representation passes it (our own).

**Wikipedia:** [Stinespring dilation theorem](https://en.wikipedia.org/wiki/Stinespring_dilation_theorem), [Completely positive map](https://en.wikipedia.org/wiki/Completely_positive_map). It says: “This is one way to see that completely positive maps, rather than merely positive ones, are the true generalizations of positive functionals.”

**Sources:**

- [W. F. Stinespring, Positive functions on C\*-algebras, Proceedings of the AMS 6 (1955), 211–216](https://doi.org/10.1090/S0002-9939-1955-0069403-4)
- [M.-D. Choi, Completely positive linear maps on complex matrices, Linear Algebra and its Applications 10 (1975), 285–290](https://doi.org/10.1016/0024-3795(75)90075-0)

### Countable generation lets every Hilbert module sit inside the standard module

**Remember:** Countably many vectors generate a dense submodule.

*Rules out counterexamples.* MSC 46L08 (\\(C<sup>\*\\</sup>)-modules), 19K35. arXiv math.OA. Level 3: graduate.

**Definition.** A Hilbert B-module E is countably generated when some countable subset spans a dense submodule. The standard module ℓ²(B) consists of the sequences (bᵢ) in B for which the sum of the bᵢ\*bᵢ converges in B.

**Problem.** For every countably generated Hilbert B-module E, E ⊕ ℓ²(B) ≅ ℓ²(B) as Hilbert modules. So E is the range of a projection on ℓ²(B), and every Kasparov module on a countably generated module can be moved onto ℓ²(B).

**How the definition helps.** Countable generation removes modules that are too large to fit into ℓ²(B). For B = ℂ, Hilbert modules are Hilbert spaces, and a non-separable space H fails, because H ⊕ ℓ² is not separable (our own). Wikipedia presents the theorem as the module version of the fact that there is only one separable infinite-dimensional Hilbert space. The work goes into Kasparov's proof of the stabilization theorem, and in return KK(A,B) can be defined with one fixed module (our own).

**Wikipedia:** [Hilbert C\*-module](https://en.wikipedia.org/wiki/Hilbert_C%2A-module). It says: “if E is a countably generated Hilbert A-module, there is an isometric isomorphism E ⊕ ℓ₂(A) ≅ ℓ₂(A).”

**Sources:**

- [Iain Raeburn and Shaun J. Thompson, Countably generated Hilbert modules, the Kasparov stabilisation theorem, and frames in Hilbert modules, Proceedings of the American Mathematical Society 131 (2003) 1557–1564](https://doi.org/10.1090/S0002-9939-02-06787-4)

### Full Hilbert modules make matrix algebras, stabilizations and full corners Morita equivalent

**Remember:** Compact operators on a full module are Morita equivalent to the coefficients.

*True by definition.* MSC 46L08 (\\(C<sup>\*\\</sup>)-modules), 46L85. arXiv math.OA. Level 3: graduate.

**Definition.** A Hilbert B-module E is full if the linear span of all inner products ⟨x,y⟩ is dense in B. Two C\*-algebras A and B are strongly Morita equivalent if A ≅ 𝒦(E) for some full Hilbert B-module E.

**Problem.** Every C\*-algebra B is Morita equivalent to the matrix algebra Mₙ(B), to its stabilization B ⊗ 𝒦, and to every full corner pBp. Here a projection p is full when BpB spans a dense subset of B.

**How the definition helps.** Each algebra in the list is already the compact operators on an obvious full B-module, so the definition applies at once (our own). Mₙ(B) is 𝒦(Bⁿ), B ⊗ 𝒦 is 𝒦 of the standard module ℓ²(B), and pBp is 𝒦(pB) (our own). The usual definition asks for Rieffel's imprimitivity bimodule, a bimodule with compatible full inner products on both sides. The work moves into the quoted theorem that the two definitions agree.

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “Let A and B be C\*-algebras. The following are equivalent. (1) The C\*-algebras A and B are Morita equivalent. (2) There exists a full Hilbert B-module and a faithful representation φ : A → ℒ<sub>B</sub>(E) such that φ(A)=𝒦<sub>B</sub>(E).”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)

### A predual defines von Neumann algebras without choosing a Hilbert space

**Remember:** Being a dual space is the abstract mark of a von Neumann algebra.

*Makes the theorem clean to state or prove.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A W\*-algebra is a C\*-algebra A for which some Banach space E admits an isometric linear isomorphism A ≅ E\*. Such an E is a predual of A.

**Problem.** The predual of a W\*-algebra is unique up to canonical isomorphism, so its weak-\* topology depends only on the algebra. Every W\*-algebra acts faithfully on some Hilbert space as a von Neumann algebra (Sakai's theorem).

**How the definition helps.** The predual formulation lets Sakai’s theorem characterize von Neumann algebras without choosing a representation. Predual uniqueness uses the intrinsic description of normal functionals as the span of the positive normal functionals (our own). These functionals determine the weak-\* topology (our own).

**Wikipedia:** [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “Sakai (1971) showed that von Neumann algebras can also be defined abstractly as C\*-algebras that have a predual”

**Sources:**

- [S. Sakai, A characterization of W\*-algebras, Pacific Journal of Mathematics 6 (1956), 763–773](https://doi.org/10.2140/pjm.1956.6.763)

### The bicommutant theorem lets von Neumann algebras be defined by commutants

**Remember:** Weakly closed equals its double commutant, so algebra replaces topology.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** For S ⊆ B(H), its commutant S′ consists of all bounded operators on H commuting with every member of S. A unital \*-subalgebra M of B(H) is a von Neumann algebra if M = (M′)′.

**Problem.** The commutant of any set of operators closed under adjoints is a von Neumann algebra. A von Neumann algebra contains the spectral projections of its self-adjoint elements.

**How the definition helps.** With the algebraic definition M = M″, these facts are almost immediate, because commutants are easy to compute with. A spectral projection of a self-adjoint a in M commutes with every operator that commutes with a, so it lies in M″ = M (our own example). The commutant S′ of a self-adjoint set is weakly closed and satisfies S′ = S‴ (our own). The work moves into the bicommutant theorem, which says that the weak closure of a unital \*-algebra equals its bicommutant.

**Wikipedia:** [Von Neumann bicommutant theorem](https://en.wikipedia.org/wiki/Von_Neumann_bicommutant_theorem), [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “His double commutant theorem shows that the analytic definition is equivalent to a purely algebraic definition as an algebra of symmetries.”

**Sources:**

- [J. von Neumann, Zur Algebra der Funktionaloperationen und Theorie der normalen Operatoren, Mathematische Annalen 102 (1930), 370–427](https://doi.org/10.1007/BF01782352)

### Ordered K₀ groups classify AF algebras completely

**Remember:** Remember projection classes, their positive cone, and the unit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L35 (Classifications of \\(C<sup>\*\\</sup>)-algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** A unital AF algebra is a unital C\*-algebra expressible as a sequential inductive limit of finite-dimensional C\*-algebras. Its ordered K₀ invariant consists of K₀, the cone of projection classes over the algebra, and the distinguished class \[1\].

**Problem.** Elliott's theorem says that two unital AF algebras are isomorphic exactly when their ordered K₀ groups, together with the class of the unit, are isomorphic.

**How the definition helps.** The invariant records both the order on projection classes and the class that an isomorphism must assign to the unit (our own). Elliott’s classification theorem says that these data suffice (our own).

**Wikipedia:** [Approximately finite-dimensional C\*-algebra](https://en.wikipedia.org/wiki/Approximately_finite-dimensional_C%2A-algebra). It says: “Later, George A. Elliott gave a complete classification of AF algebras using the K₀ functor whose range consists of ordered abelian groups with sufficiently nice order structure.”

**Sources:**

- [G. A. Elliott, On the classification of inductive limits of sequences of semisimple finite-dimensional algebras, Journal of Algebra 38 (1976), 29–44](https://doi.org/10.1016/0021-8693(76)90242-8)

### Hulanicki's definition of amenability makes full and reduced crossed products agree

**Remember:** If the trivial representation is near the regular one, every representation is.

*True by definition. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 22D25, 43A07. arXiv math.OA, math.GR. Level 3: graduate.

**Definition.** A locally compact group G is amenable if its trivial representation is weakly contained in its left regular representation λ on L²(G). For every compact K ⊆ G and ε &gt; 0, some finite sum of functions g ↦ ⟨λ(g)ξ,ξ⟩ approximates 1 uniformly within ε on K.

**Problem.** For an amenable group G acting on a C\*-algebra A, the full crossed product A ⋊ G equals the reduced crossed product A ⋊ᵣ G. The free group on two generators fails this already for A = ℂ.

**How the definition helps.** With this definition, a few lines with Fell's absorption principle show that every covariant representation is weakly contained in a regular one (our own). Fell's principle says that a representation tensored with the regular representation is a multiple of the regular representation (our own). The work moves into the equivalence of Hulanicki's definition with the invariant-mean and Følner definitions (our own). For the free group F₂ the full algebra has a one-dimensional representation, but the reduced algebra is simple, so the two differ (our own).

**nLab:** [amenable topological groupoid](https://ncatlab.org/nlab/show/amenable+topological+groupoid). It says: “For an amenable Lie groupoid 𝒢, the full groupoid convolution algebra and the reduced one are naturally isomorphic.”

**Sources:**

- [Andrzej Hulanicki, Groups whose regular representation weakly contains all unitary representations, Studia Mathematica 24 (1964) 27–59](https://doi.org/10.4064/sm-24-1-27-59)

### Morita equivalence of crossed products gives Mackey's imprimitivity theorem

**Remember:** Represent functions on the coset space so that group operators translate them.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22D30, 46L08. arXiv math.OA, math.RT. Level 3: graduate.

**Definition.** For a unitary representation U of G, a system of imprimitivity on G/H includes a nondegenerate \*-representation M of C₀(G/H) on the same space. For every g and f, U(g)M(f)U(g)\* = M(g·f), where (g·f)(xH) = f(g⁻¹xH).

**Problem.** Let H be a closed subgroup of a second countable locally compact group G. A unitary representation of G is induced from H if and only if it has a system of imprimitivity based on G/H.

**How the definition helps.** Systems of imprimitivity are by definition representations of C₀(G/H) ⋊ G. The quoted Morita equivalence, a link by a bimodule with compatible full inner products, matches these with representations of C\*(H) (our own). Mackey's proof instead uses projection-valued measures and Borel cross sections (our own). The work moves into building the bimodule and checking that it induces Mackey's representation (our own).

**Wikipedia:** [System of imprimitivity](https://en.wikipedia.org/wiki/System_of_imprimitivity). It says: “It was used by George Mackey as the basis for his theory of induced unitary representations of locally compact groups.”

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “Let G be a second countable locally compact topological group and H be a closed subgroup of G. The crossed product C₀(G/H) ⋊ G is Morita equivalent to C\*(H).”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)
- [George W. Mackey, Induced representations of locally compact groups I, Annals of Mathematics 55 (1952) 101](https://doi.org/10.2307/1969423)

### The crossed product's universal property reduces Stone–von Neumann to compact operators

**Remember:** Weyl pairs are representations of the compacts, and the compacts have one.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22D25, 81S05. arXiv math.OA, math.RT. Level 3: graduate.

**Definition.** The full crossed product A ⋊ G represents covariant pairs (π,U) on a common Hilbert space. Here π is a nondegenerate \*-representation and U is a strongly continuous unitary representation satisfying U(s)π(a)U(s)\* = π(s·a) for every s,a.

**Problem.** Let G be locally compact abelian with dual Ĝ, and let U,V be strongly continuous unitary representations of G,Ĝ on one Hilbert space. If U(s)V(γ)U(s)\* = γ(s)V(γ) for every s,γ, the pair is a multiple of the Schrödinger pair. This pair acts on L²(G) by (U(s)f)(x) = f(xs) and (V(γ)f)(x) = γ(x)f(x).

**How the definition helps.** By definition such a pair is a covariant representation of G acting on C₀(G) ≅ C\*(Ĝ), so it is a representation of the crossed product. The quoted theorem says the crossed product is 𝒦(L²(G)), whose nondegenerate representations are all multiples of the identity representation (our own). So the work moves into this isomorphism, and not into von Neumann's explicit projections built from Weyl operators (our own). For G = ℝⁿ the result is the Stone–von Neumann theorem.

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

**How the definition helps.** Both algebras have the same universal property, so they are isomorphic. C(𝕋) is universal for one unitary u, and the crossed product by ℤ adds a unitary w with w u w\* = λu (our own). That is exactly the defining property of A(θ), and the work moves into the universal property of crossed products by ℤ (our own). Matching the concrete algebra, for irrational θ, needs a separate theorem, the simplicity of A(θ) (our own).

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “The resulting C\*-crossed product C(S¹) ⋊ Z is isomorphic to Aθ.”

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “The algebra of continuous functions on the circle 𝕋 denoted C(𝕋) is the universal C\*-algebra generated by u such that u\*u=uu\*=1.”

**Sources:**

- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Trivial dynamics turns thermal equilibrium into a trace

**Remember:** The two strip boundaries record the two orders of multiplication.

*True by definition.* MSC 46L60 (Applications of selfadjoint operator algebras to physics). arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** Let α be a strongly continuous automorphism group of a unital C\*-algebra and β &gt; 0. A state ω satisfies the Kubo–Martin–Schwinger condition if each pair A,B admits a bounded continuous function F on 0 ≤ Im z ≤ β. Inside the strip F is holomorphic, with boundary values F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A) for every real t.

**Problem.** For trivial time evolution, the Kubo–Martin–Schwinger states at positive inverse temperature are exactly the tracial states.

**How the definition helps.** Trivial dynamics make the lower boundary value constant (our own). Subtract that constant and reflect across the lower boundary (our own). The identity theorem forces the difference to vanish, so the upper boundary gives ω(BA) = ω(AB) (our own). Conversely, each trace supplies the required constant function (our own).

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “there is a bounded continuous function F in the strip”

**Sources:**

- [Rudolf Haag, Nicolaas M. Hugenholtz and Marinus Winnink, On the equilibrium states in quantum statistical mechanics](https://doi.org/10.1007/BF01646342)

### Coefficient algebras give compact quantum groups a genuine Hopf \*-algebra

**Remember:** Finite sums Δ(uᵢⱼ) = Σ uᵢₖ ⊗ uₖⱼ keep coefficients algebraic.

*Makes the theorem clean to state or prove.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 16T05. arXiv math.QA, math.OA. Level 3: graduate.

**Definition.** For a compact matrix quantum group (C,u), C₀ is the unital \*-subalgebra algebraically generated by all matrix entries uᵢⱼ.

**Problem.** The coefficient algebra C₀ is a dense Hopf \*-algebra inside C, with counit ε(uᵢⱼ) = δᵢⱼ and antipode κ. The full algebra C is not a Hopf algebra in general.

**How the definition helps.** Each Δ(uᵢⱼ) is a finite sum of tensors of coefficients, so Δ sends C₀ into the algebraic tensor product (our own). The entries generate C as a C\*-algebra, giving density (our own). Woronowicz’s theorem supplies the counit and antipode on C₀ (our own). On C itself the coproduct generally requires the completed tensor product (our own).

**nLab:** [representative function](https://ncatlab.org/nlab/show/representative+function). It says: “The set of all representative functions on G is a Hopf F-algebra.”

**Wikipedia:** [Compact quantum group](https://en.wikipedia.org/wiki/Compact_quantum_group). It says: “Strictly speaking, this does not make C(G) into a Hopf algebra, unless G is finite.”

**Sources:**

- [S. L. Woronowicz, Compact matrix pseudogroups, Communications in Mathematical Physics 111 (1987) 613–665](https://doi.org/10.1007/BF01219077)

### Two-sided invariance makes the Haar state of a compact quantum group unique

**Remember:** Two invariant states give h = h⋆h′ = h′, so only one exists.

*True by definition.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 3: graduate.

**Definition.** Given a compact quantum group with coproduct Δ, define convolution of states by φ⋆ψ = (φ⊗ψ)∘Δ. A state h is a Haar state if h⋆φ = h = φ⋆h for every state φ.

**Problem.** Every compact quantum group has exactly one Haar state.

**How the definition helps.** Asking for invariance from both sides makes uniqueness a one-line computation. If h and h′ are Haar states, then h⋆h′ = h because h absorbs h′, and h⋆h′ = h′ because h′ absorbs h. With invariance from one side only, uniqueness needs more work: one first needs a two-sided invariant state (our own). The work moves into existence, which Woronowicz proved from the density axioms.

**Paper or page:** [Analysis for idempotent states on quantum permutation groups](https://arxiv.org/abs/2301.13423), [Quantum expanders and property (T) discrete quantum groups](https://arxiv.org/abs/2502.01974). It says: “The algebra of continuous functions C(𝔾) on a compact quantum group admits a unique invariant state h, such that for all states φ on C(𝔾): h⋆φ=h=φ⋆h.”

**Sources:**

- [S. L. Woronowicz, Compact matrix pseudogroups, Communications in Mathematical Physics 111 (1987) 613–665](https://doi.org/10.1007/BF01219077)

### Woronowicz density axioms exclude compact semigroups without a Haar state

**Remember:** Density is cancellation, and compact cancellative semigroups are groups.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 22C05. arXiv math.OA, math.QA. Level 3: graduate.

**Definition.** Woronowicz defines a compact quantum group as a unital C\*-algebra C with a coassociative unital \*-homomorphism Δ: C → C ⊗ C. He also asks that the linear spans of (C⊗1)Δ(C) and (1⊗C)Δ(C) are dense in C ⊗ C. With coassociativity alone, the object is only a compact quantum semigroup.

**Problem.** For a nonempty compact Hausdorff topological semigroup S, the density axioms for C(S) hold exactly when S is a group. The two-point semigroup with xy = x satisfies coassociativity but has no Haar state.

**How the definition helps.** Stone–Weierstrass identifies the two density conditions with injectivity of (x,y) ↦ (x,xy) and (x,y) ↦ (xy,y), respectively (our own). These are the left and right cancellation laws (our own). A nonempty compact Hausdorff cancellative semigroup is a group, and groups satisfy both laws (our own). For xy = x on two points, left cancellation fails and Haar invariance would require h(f) = f(x) for both x (our own).

**Wikipedia:** [Compact quantum group](https://en.wikipedia.org/wiki/Compact_quantum_group). It says: “the sets {(C ⊗ 1) Δ(C)} and {(1 ⊗ C) Δ(C)} are dense in C ⊗ C.”

**Sources:** none listed. No primary source with a working link was found.

### Defining K₀ of non-unital algebras by unitization matches compactly supported K-theory

**Remember:** Scalar evaluation becomes restriction to the point at infinity.

*True by definition.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19K99, 55N15. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a C\*-algebra A, let A⁺ adjoin a new unit even if A already has one. Then K₀(A) is the kernel of the map K₀(A⁺) → ℤ induced by the scalar quotient. Compactly supported K⁰(X) is the kernel of restriction from K⁰(X⁺) to the added point.

**Problem.** For a locally compact Hausdorff space X, operator K₀ of C₀(X) agrees with topological K-theory with compact support. Here C₀(X) consists of continuous complex functions vanishing at infinity.

**How the definition helps.** Adding a unit to C₀(X) gives C(X⁺), the functions on the one-point compactification X⁺. So both groups are kernels of the same restriction map, once K₀(C(X⁺)) is identified with K(X⁺). The nLab states this kernel description. The work moves to Swan's theorem, which identifies projective modules over C(X⁺) with vector bundles on X⁺ (our own).

**nLab:** [unitization of a C-star-algebra](https://ncatlab.org/nlab/show/unitization+of+a+C-star-algebra). It says: “The topological K-theory of X is the kernel of the induced map in operator K-theory”

**Sources:**

- [Richard G. Swan, Vector bundles and projective modules (1962).](https://doi.org/10.1090/S0002-9947-1962-0143225-6)

### Defining operator K₁ by paths of unitaries makes it homotopy invariant

**Remember:** A path of homomorphisms sends each unitary to a path.

*True by definition. Confidence: medium.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19K99. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a unital C\*-algebra A, define K₁(A) from unitary matrices over A, up to adding identity blocks and up to continuous paths. The suspension definition takes K₀ of SA, the continuous functions from (0, 1) to A that vanish at both ends.

**Problem.** Homotopic unital \*-homomorphisms between unital C\*-algebras induce the same map on K₁. A \*-homomorphism is an algebra map that preserves the adjoint.

**How the definition helps.** A homotopy of maps joins the two images of a unitary u by a path, so they have the same class (our own). With the suspension definition, one needs homotopy invariance of K₀ first, which rests on the fact that nearby projections are equivalent (our own). The work moves to the theorem that the two definitions agree (our own).

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “The higher K-functors are defined via a C\*-version of the suspension”

**Sources:** none listed. No primary source with a working link was found.

### Projection-based operator K₀ is unchanged by passing to matrix algebras

**Remember:** Matrices over n × n matrices are just larger matrices.

*True by definition. Confidence: medium.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19K99. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a unital C\*-algebra A, use projections p = p² = p\* in all finite matrix sizes over A. Identify p and q if some rectangular matrix v over A satisfies p = v\*v and q = vv\*. K₀(A) is the group completion under block sum of the resulting classes.

**Problem.** The corner map a ↦ diag(a, 0, …, 0) from A to the n × n matrix algebra Mₙ(A) induces an isomorphism on K₀.

**How the definition helps.** A k × k matrix over Mₙ(A) is a kn × kn matrix over A, so both sides use the same projections (our own). The corner map only pads a projection with zero blocks, which does not change its class (our own). The module definition needs the Morita correspondence between A-modules and Mₙ(A)-modules instead (our own). Wikipedia gives the projection definition.

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “the Murray-von Neumann equivalence classes of projections”

**Sources:** none listed. No primary source with a working link was found.

### Defining multipliers by a universal property gives the Stone–Čech compactification

**Remember:** Largest essential unitization of C₀(X) is functions on the largest compactification.

*True by definition.* MSC 46L85 (Noncommutative topology), 54D35, 46L05. arXiv math.OA, math.GN. Level 3: graduate.

**Definition.** The multiplier algebra M(A) is a unital C\*-algebra containing the C\*-algebra A as an essential ideal, meaning every nonzero closed ideal intersects A nontrivially. Every C\*-algebra containing A as an essential ideal has a unique injective \*-homomorphism into M(A) fixing A.

**Problem.** For a locally compact Hausdorff space X, the multiplier algebra of C₀(X) is Cb(X) ≅ C(βX), where βX is the Stone–Čech compactification. So the corona algebra M(C₀(X))/C₀(X) is C(βX ∖ X).

**How the definition helps.** Multipliers of C₀(X) act pointwise by bounded continuous functions, and each such function acts by multiplication (our own). Stone–Čech extension identifies these functions with C(βX). Restriction to the closed remainder is surjective by Tietze extension and has kernel C₀(X) (our own).

**nLab:** [multiplier algebra](https://ncatlab.org/nlab/show/multiplier+algebra). It says: “In the commutative case, every unital commutative extension in which A is an essential ideal corresponds to a compactification of the spectrum Spec(A); M(A) is in that case the C\*-algebra of functions on the Stone–Čech compactification β(Spec(A)).”

**Sources:**

- [Charles A. Akemann, Gert K. Pedersen and Jun Tomiyama, Multipliers of C\*-algebras, Journal of Functional Analysis 13 (1973) 277–301](https://doi.org/10.1016/0022-1236(73)90036-0)

### Nondegenerate homomorphisms make Gelfand duality match proper maps exactly

**Remember:** Dense products make every point evaluation pull back to a nonzero character.

*Rules out counterexamples.* MSC 46L85 (Noncommutative topology), 46L05, 54D45. arXiv math.OA, math.GN. Level 3: graduate.

**Definition.** A \*-homomorphism φ from A to B is nondegenerate when the products φ(a)b span a dense subset of B. A continuous map f from X to Y is proper when the preimage of every compact set is compact.

**Problem.** Let X and Y be locally compact Hausdorff spaces. The nondegenerate \*-homomorphisms from C₀(Y) to C₀(X) are exactly the maps g ↦ g∘f with f a proper continuous map from X to Y.

**How the definition helps.** Nondegeneracy removes the homomorphisms that come from no map of spaces. An example is the inclusion of the ideal C₀((0,1)) into C(\[0,1\]), which no map from \[0,1\] to (0,1) induces (our own). Under nondegeneracy, each point evaluation of C₀(X) pulls back to a nonzero character of C₀(Y), and so to a point f(x) of Y (our own). The condition that each g∘f vanishes at infinity then says exactly that f is proper (our own).

**nLab:** [Gelfand duality](https://ncatlab.org/nlab/show/Gelfand+duality). It says: “between the category of locally compact Hausdorff spaces and proper maps and the category of commutative nonunital C\*-algebras with nondegenerate \*-homomorphisms as morphisms.”

**Sources:** none listed. No primary source with a working link was found.

### The universal definition gives the noncommutative torus a gauge action and trace

**Remember:** Rescaled generators satisfy the same relation, so the torus acts.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L55. arXiv math.OA. Level 3: graduate.

**Definition.** For θ ∈ ℝ, A(θ) is the universal unital C\*-algebra generated by unitaries U,V satisfying VU = λUV, where λ = exp(2πiθ).

**Problem.** For every θ, A(θ) has a faithful tracial state τ with τ(UᵐVⁿ) = 0 unless m = n = 0. A tracial state is a state with τ(xy) = τ(yx), and faithful means τ(x\*x) &gt; 0 for x ≠ 0.

**How the definition helps.** Rescaling the generators preserves their relation and gives a continuous torus action by universality (our own). Averaging kills every nonscalar monomial, so its range consists of scalars by density (our own). Continuity and positivity make this average faithful (our own). Two monomials have zero average in either order unless their exponents cancel, when their products coincide (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “we get the C\*-algebra generated by two unitary operators U and V subject to the relation UV=θVU.”

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “Every irrational rotation algebra has a unique tracial state.”

**Sources:**

- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Writing closed convex functions as suprema of affine functions gives weak semicontinuity

**Remember:** The weak topology already sees each affine function.

*True by definition. Confidence: medium.* MSC 46N10 (Applications of functional analysis in optimization, convex analysis, mathematical programming, economics), 49J45. arXiv math.FA, math.OC. Level 3: graduate.

**Definition.** Describe a lower semicontinuous convex function as a pointwise supremum of continuous affine functions. A continuous affine function is a continuous linear functional plus a constant. The usual definition asks for a convex function whose sublevel sets {f ≤ c} are closed in the norm topology.

**Problem.** Take a convex real function on a real normed space. It is lower semicontinuous in the norm topology exactly when it is weakly lower semicontinuous.

**How the definition helps.** Each continuous affine function is weakly continuous, so a supremum of them is weakly lower semicontinuous, in our own proof. The other direction is free, because weakly closed sets are norm closed. The work moves into the Hahn–Banach separation theorem, in our own account. It shows that a norm lower semicontinuous convex function is the supremum of the continuous affine functions below it.

**Paper or page:** [Convex Real Function on Normed Vector Space is Lower Semicontinuous iff Weakly Lower Semicontinuous](https://proofwiki.org/wiki/Convex_Real_Function_on_Normed_Vector_Space_is_Lower_Semicontinuous_iff_Weakly_Lower_Semicontinuous). It says: “Let f : X → ℝ be a convex function.”

**Sources:** none listed. No primary source with a working link was found.

### Mackey completeness gives smooth primitives

**Remember:** Late differences shrink inside one bounded disk, so the sequence must converge.

*Makes the theorem clean to state or prove.* MSC 46A03 (General theory of locally convex spaces), 58B10. arXiv math.FA. Level 4: research.

**Definition.** A bounded disk in a locally convex space is a bounded convex set closed under multiplication by scalars of absolute value at most one. A sequence is Mackey–Cauchy if all sufficiently late differences lie in arbitrarily small multiples of one fixed bounded disk. A space is Mackey complete if every such sequence converges.

**Problem.** Every smooth curve in a Mackey-complete Hausdorff locally convex space has a smooth primitive, a curve whose derivative equals the given curve.

**How the definition helps.** Mackey completeness supplies exactly the limit needed for Riemann sums of a smooth curve. In our own proof, bounded difference quotients on each compact interval place the errors between successive refinements in shrinking multiples of one bounded disk. Integrating up to a variable endpoint then gives a curve with the prescribed derivative.

**nLab:** [convenient vector space](https://ncatlab.org/nlab/show/convenient+vector+space). It says: “there is a curve ∫ c (an antiderivative of c) such that c is the derivative of ∫ c.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Webbed spaces extend the closed graph theorem beyond Fréchet spaces

**Remember:** A countable web lets Banach's Baire argument run in spaces without a metric.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including \\(B\\)-, \\(B<sub>r</sub>\\)-completeness)). arXiv math.FA. Level 4: research.

**Definition.** A space has a convex web of type C if it admits absolutely convex sets C(s) indexed by nonempty finite lists of positive integers. First-level sets cover the space, and the children of each set cover it. Along every branch there exist positive λₙ such that ∑λₙxₙ converges for every choice of xₙ in the nth set.

**Problem.** A linear map with closed graph from an ultrabornological space into a webbed space is continuous (De Wilde's closed graph theorem).

**How the definition helps.** The web packages the covering and convergence conditions on the target into one hypothesis (our own). De Wilde’s closed graph theorem supplies continuity for ultrabornological source spaces.

**Wikipedia:** [Webbed space](https://en.wikipedia.org/wiki/Webbed_space). It says: “a webbed space is a topological vector space designed with the goal of allowing the results of the open mapping theorem and the closed graph theorem to hold for a wider class of linear maps whose codomains are webbed spaces.”

**Sources:** none listed. No primary source with a working link was found.

### The UMD property is exactly what vector-valued Riesz projections need

**Remember:** Flipping martingale steps safely is the same as cutting off negative frequencies safely.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 42B30, 60G46. arXiv math.FA, math.CA. Level 4: research.

**Definition.** A Banach space X has UMD if some 1 &lt; p &lt; ∞ and C &lt; ∞ satisfy the following uniform bound. For every finite X-valued Lᵖ martingale difference sequence (dⱼ) and every choice of signs εⱼ, ‖∑εⱼdⱼ‖ₚ ≤ C‖∑dⱼ‖ₚ.

**Problem.** Let G be a Dirichlet group and 1 &lt; p &lt; ∞. The Riesz projection, which keeps only the nonnegative frequencies, is bounded on X-valued Lᵖ functions on G exactly when X has the UMD property.

**How the definition helps.** The UMD condition names, in one probabilistic inequality, the whole class of spaces where Fourier projections stay bounded. So the vector-valued theorem becomes an if-and-only-if instead of a list of good examples. For functions with values in ℓ¹ or c₀ the Riesz projection is not bounded (our own remark). The hard work is the two directions of the equivalence, due to Burkholder and Bourgain for the circle (our own remark).

**Paper or page:** [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1), [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1). It says: “Let G be a Dirichlet group, X a Banach space and 1&lt;p&lt;∞. Then X has UMD if and only if the Riesz projection … is bounded.”

**Sources:**

- [Andreas Defant, Ingo Schoolmann, Hardy spaces of general Dirichlet series - a survey, arXiv:1902.02073 (2019), Banach Center Publ. 119 (2019) 123–149](https://arxiv.org/abs/1902.02073v1)

### Type 2 and cotype 2 together characterize Hilbert spaces up to isomorphism

**Remember:** Random signs that add like Pythagoras in both directions mean Hilbert space.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 46C15. arXiv math.FA. Level 4: research.

**Definition.** For every finite vector list (xᵢ), let R = 𝔼‖∑εᵢxᵢ‖² for independent uniform signs εᵢ, and put S = ∑‖xᵢ‖². Type 2 means R ≤ CS for one constant C across all lists. Cotype 2 means S ≤ DR for one constant D across all lists.

**Problem.** A Banach space is isomorphic to a Hilbert space exactly when it has type 2 and cotype 2 (Kwapień's theorem).

**How the definition helps.** Type and cotype split the parallelogram law into two one-sided inequalities with constants, and such inequalities survive a change to an equivalent norm. The exact parallelogram law cannot do this. In our own example, ℓ² with the equivalent norm max(‖x‖, 2\|x₁\|) fails the law but keeps type 2 and cotype 2. The hard direction, that the two inequalities give an inner product norm, needs Kwapień's factorization argument (our own remark).

**Paper or page:** [Characterization of Hilbertizable spaces via convex functions](https://arxiv.org/abs/2506.04686v1). It says: “A space is isomorphic to a Hilbert space if and only if it is of type 2 and cotype 2.”

**Sources:**

- [N. Borchard and G. Wachsmuth, Characterization of Hilbertizable spaces via convex functions, arXiv:2506.04686 (2025)](https://arxiv.org/abs/2506.04686v1)
- [S. Kwapień, Isomorphic characterizations of inner product spaces by orthogonal series with vector valued coefficients, Studia Math. 44 (1972) 583–595](https://doi.org/10.4064/sm-44-6-583-595)

### Condensed duals of Banach spaces are Smith spaces, so biduality always holds

**Remember:** Dualize with compact sets, not the norm, and c₀ becomes reflexive.

*Rules out counterexamples.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces), 46A20. arXiv math.FA. Level 4: research.

**Definition.** A Smith space is a complete Hausdorff locally convex space whose topology is compactly generated and which contains a universal compact set K. Every compact subset must lie in tK for some t &gt; 0.

**Problem.** For every Banach space V, the condensed dual of V is a Smith space, and V maps isomorphically to its double condensed dual. So Banach spaces and Smith spaces are anti-equivalent, and even c₀ is reflexive in this sense.

**How the definition helps.** Banach–Smith duality identifies the condensed dual of each Banach space as a Smith space and recovers the Banach space by dualizing again (our own). Thus c₀ returns to itself, although its usual Banach bidual is ℓ∞ (our own). The work lies in the Banach–Smith duality theorem cited in the entry (our own).

**Wikipedia:** [Smith space](https://en.wikipedia.org/wiki/Smith_space). It says: “a Smith space is a complete compactly generated locally convex topological vector space X having a universal compact set”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)
- [M. F. Smith, The Pontrjagin duality theorem in linear spaces, Annals of Mathematics 56 (1952), 248–253](https://doi.org/10.2307/1969798)

### Grothendieck's property forces separable Banach spaces to be reflexive

**Remember:** Weak-star convergent dual sequences also converge weakly.

*True by definition. Confidence: medium.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 4: research.

**Definition.** A Banach space X is a Grothendieck space if every sequence in the dual X\* that converges weak-\* also converges weakly. Weak-\* convergence means convergence at each point of X, and weak convergence means convergence against each element of X\*\*.

**Problem.** Every separable Grothendieck space is reflexive. More generally, a non-reflexive Grothendieck space has density at least the uncountable cardinal 𝔭.

**How the definition helps.** When the density of X is below 𝔭, its weak-\* dual unit ball is sequentially compact (our own). The Grothendieck property makes this ball weakly sequentially compact (our own). Eberlein–Šmulian then gives weak compactness, so X\* and X are reflexive (our own). This includes separable X since 𝔭 is uncountable (our own).

**Paper or page:** [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3), [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3). It says: “A non-reflexive Grothendieck space has density at least 𝔭⩾ω₁.”

**Sources:**

- [Manuel González, Tomasz Kania, Grothendieck spaces: the landscape and perspectives, arXiv:2102.03838 (2021)](https://arxiv.org/abs/2102.03838v3)
- [A. Grothendieck, Sur les applications linéaires faiblement compactes d'espaces du type C(K), Canad. J. Math. 5 (1953) 129–173](https://doi.org/10.4153/cjm-1953-017-4)

### Defining subspace angles spectrally makes their squared cosines Ritz values

**Remember:** Squared cosines of the angles are the spectrum of a compressed projection.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 47A15, 47A75. arXiv math.NA, math.FA. Level 4: research.

**Definition.** Let M and N be nonzero closed subspaces of a Hilbert space, with orthogonal projections P and Q. Restrict PQ to M to get a self-adjoint operator on M. The angles from M to N are the inverse cosines of the square roots of the points in its spectrum.

**Problem.** For a finite-dimensional trial subspace M and operator Q, the Ritz values are exactly the squared cosines of the angles from M to N.

**How the definition helps.** The angles come from the spectrum of PQ restricted to M, and the Ritz values are the spectrum of that same operator (our own). So the equality holds by definition (our own). The work moves to perturbation bounds for angles, which then bound how Ritz values move when the trial subspace changes.

**Paper or page:** [Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods](https://arxiv.org/abs/0705.1023v2). It says: “We show that the squared cosines of the angles from one subspace to another can be interpreted as Ritz values in the Rayleigh-Ritz method”

**Sources:**

- [Andrew Knyazev, Abram Jujunashvili, Merico Argentati, Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods, arXiv:0705.1023v2 (2010). Journal of Functional Analysis 259 (2010), pp. 1323-1345](https://arxiv.org/abs/0705.1023v2)

### A reproducing kernel solves the optimization that bounds vanishing of L-functions

**Remember:** The kernel is the test function that attains the point-evaluation bound.

*True by definition. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 11M41. arXiv math.NT, math.FA. Level 4: research.

**Definition.** Fix the exponential-type space for the density estimate, with squared norm ∫ℝ \|f(x)\|² W<sub>G</sub>(x) dx and exponential type at most πΔ. Its reproducing kernel K is characterized by f(w) = ⟨f,K(w,·)⟩ for every f and w.

**Problem.** Assume the generalized Riemann hypothesis for a family of L-functions with symmetry type G. Assume also a one-level density estimate for test functions whose Fourier transforms have support in (−Δ, Δ). Then the average order of vanishing at the central point is bounded by 1/K(0, 0).

**How the definition helps.** The density estimate bounds the average central multiplicity by ‖f‖² for admissible normalized tests built from \|f\|² (our own). Cauchy–Schwarz gives 1 ≤ ‖f‖²K(0,0) whenever f(0) = 1 (our own). The normalized kernel K(0,·)/K(0,0) attains the minimum, with endpoint support handled by approximation (our own).

**Paper or page:** [Hilbert spaces and low-lying zeros of L-functions](https://arxiv.org/abs/2109.10844v3). It says: “To solve the Fourier optimization problems that arise, we provide a unified framework based on the theory of reproducing kernel Hilbert spaces of entire functions”

**Sources:**

- [Emanuel Carneiro, Andrés Chirre, Micah B. Milinovich, Hilbert spaces and low-lying zeros of L-functions, arXiv:2109.10844v3 (2022)](https://arxiv.org/abs/2109.10844v3)

### The Pick property makes the two kinds of interpolating sequences agree

**Remember:** With the Pick property, multiplier questions become kernel questions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 32E30, 47B32. arXiv math.CV, math.FA. Level 4: research.

**Definition.** The complete Pick property tests every finite list of distinct points xᵢ and square matrices Wᵢ of one size. A multiplier of norm at most one interpolates these matrices exactly when \[k(xᵢ,xⱼ)(I−WᵢWⱼ\*)\] is positive semidefinite.

**Problem.** Fix a sequence of points with nonzero kernel vectors in a complete Pick space. Normalized evaluation gives a bounded surjection onto ℓ² exactly when multiplier evaluation maps the multiplier algebra onto ℓ∞.

**How the definition helps.** Finite multiplier interpolation reduces to positivity of kernel matrices (our own). Uniform interpolation of bounded data corresponds to upper and lower bounds on the normalized kernel Gram matrix (our own). Those bounds characterize bounded surjective normalized evaluation into ℓ² (our own).

**Paper or page:** [Random Interpolating Sequences in the Polydisc and the Unit Ball](https://arxiv.org/abs/2012.05381v4). It says: “For those spaces, such interpolating sequences coincide with interpolating sequences for their multiplier algebras, thanks to the Pick property. This is not the case for the Hardy space H²(𝔻ᵈ) and its multiplier algebra H∞(𝔻ᵈ)”

**Sources:**

- [Alberto Dayan, Brett D. Wick, Shengkun Wu, Random Interpolating Sequences in the Polydisc and the Unit Ball, arXiv:2012.05381 (2020)](https://arxiv.org/abs/2012.05381v4)

### The largest-K norm equals the L¹ norm exactly when the support is small

**Remember:** The largest allowed piece must capture all the mass.

*True by definition.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 90C26. arXiv math.OC, math.FA. Level 4: research.

**Definition.** For u ∈ L¹(Ω), take the integrals of \|u\| over all measurable sets A with μ(A) ≤ K. The largest-K norm is their supremum. Here support means the set where u is nonzero, up to null sets.

**Problem.** Take an integrable function u and a number K strictly between zero and the total measure. The support of u has measure at most K exactly when the two norms are equal.

**How the definition helps.** If the support has measure at most K, integrating over it gives the full norm. Otherwise some set E = {\|u\| &gt; t}, with t &gt; 0, has measure greater than K (our own). Every allowed set misses mass at least t(μ(E) − K), so even the supremum falls short (our own).

**Paper or page:** [The Largest-K-Norm for General Measure Spaces and a DC Reformulation for L⁰-Constrained Problems in Function Spaces](https://arxiv.org/abs/2403.19437v2). It says: “Let u ∈ L¹(Ω) and K ∈ (0, μ(Ω)) be given. Then the following statements are equivalent: ‖u‖₀ ≤ K, ‖u‖₁ = \|u\|<sub>K</sub>, \|u\|<sub>H</sub> = \|u\|<sub>K</sub> for all H ∈ (K, μ(Ω)\].”

**Sources:**

- [Bastian Dittrich, Daniel Wachsmuth, The Largest-K-Norm for General Measure Spaces and a DC Reformulation for L⁰-Constrained Problems in Function Spaces, arXiv:2403.19437v2 (2024)](https://arxiv.org/abs/2403.19437v2)

### Chains of short steps define Sobolev spaces where continuous curves are missing

**Remember:** Short steps can measure variation even when continuous paths are missing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 53C23. arXiv math.MG, math.FA. Level 4: research.

**Definition.** For ε &gt; 0, an ε-chain is a finite list x₀,…,xₙ with successive distances dᵢ = d(xᵢ₋₁,xᵢ) ≤ ε. A nonnegative Borel function g is an ε-chain upper gradient of u if every ε-chain satisfies the following bound. The absolute endpoint difference of u is at most ∑ᵢ dᵢ(g(xᵢ₋₁)+g(xᵢ))/2.

**Problem.** Take a metric measure space that need not be complete. Its chain Sobolev space equals the space obtained by relaxing the local Lipschitz constants of Lipschitz functions. The space defined by upper gradients along continuous curves can be different.

**How the definition helps.** Chains detect changes across gaps where curves cannot pass (our own). In the plane restricted to pairs of irrational coordinates, every continuous curve is constant (our own). The paper’s chain relaxation theorem identifies the limiting chain energy with the relaxed local Lipschitz energy.

**Paper or page:** [Sobolev spaces via chains in metric measure spaces](https://arxiv.org/abs/2408.15071v1). It says: “In the possible non-complete setting, we prove that the chain Sobolev space is equal to the one defined via relaxation of the local Lipschitz constant of Lipschitz functions,”

**Sources:**

- [Emanuele Caputo, Nicola Cavallucci, Sobolev spaces via chains in metric measure spaces, arXiv:2408.15071v1 (2024)](https://arxiv.org/abs/2408.15071v1)

### Lipschitz-domain harmonic functions of Sobolev order one-half with zero trace vanish

**Remember:** Define the boundary value before asking whether it vanishes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25, 35J67. arXiv math.AP. Level 4: research.

**Definition.** Let E consist of v ∈ H¹ᐟ²(Ω) whose distributional first partial derivatives each extend continuously to H¹ᐟ²(Ω). Give E the norm combining the H¹ᐟ² norm and the dual norms of these derivatives. The trace on E extends smooth boundary restriction continuously into L²(Γ).

**Problem.** Let Ω be a bounded Lipschitz domain in ℝᴺ with N ≥ 2, so its boundary is locally the graph of a Lipschitz function. If u ∈ H¹ᐟ²(Ω) is harmonic and its trace on Γ is zero, then u = 0 in Ω.

**How the definition helps.** The extended trace gives meaning to the zero boundary condition at order one-half (our own). The paper’s harmonic uniqueness theorem supplies the conclusion.

**Paper or page:** [Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains](https://arxiv.org/abs/2509.08543v2). It says: “If u ∈ H¹⁄²(Ω) is harmonic and u = 0 on Γ, then u = 0 in Ω.”

**Sources:**

- [Chérif Amrouche, Mohand Moussaoui, Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains, arXiv:2509.08543v2 (2025)](https://arxiv.org/abs/2509.08543v2)

### Upper gradients give Sobolev spaces on metric spaces that match classical ones

**Remember:** Bound the change along every curve, and you never need a derivative.

*Makes the theorem clean to state or prove.* MSC 46E36 (Sobolev (and similar kinds of) spaces of functions on metric spaces; analysis on metric spaces), 30L99. arXiv math.FA, math.MG. Level 4: research.

**Definition.** A Borel function g ≥ 0 is an upper gradient of u if \|u(x) − u(y)\| is at most the integral of g along every rectifiable curve from x to y. The Newtonian space N¹,ᵖ consists of the functions u in Lᵖ that have an upper gradient in Lᵖ. The definition uses only distances, lengths of curves and a measure, so it works on any metric measure space.

**Problem.** For 1 &lt; p &lt; ∞ on a Carnot group with its Carnot–Carathéodory distance and Haar measure, N¹,ᵖ agrees with the horizontal Sobolev space W¹,ᵖ.

**How the definition helps.** An upper gradient controls a function along curves, and curves exist in any metric space, so the Sobolev space can be defined at all. Because the new space agrees with the classical one on Carnot groups, theorems proved for Newtonian spaces apply to the classical spaces too. The work moves into that agreement theorem, which goes back to Shanmugalingam for ℝⁿ (our own remark). Good behaviour, such as density of Lipschitz functions, still needs extra assumptions like a Poincaré inequality (our own remark).

**Paper or page:** [On some intrinsic differentiability properties for Absolutely continuous functions between Carnot groups and the Area formula](https://arxiv.org/abs/2405.05024v2). It says: “Let 1&lt;p&lt;∞ and Ω⊂𝔾 be an open set of a Carnot group 𝔾≡ℝⁿ. Then N¹,ᵖ𝔾(Ω)= W¹,ᵖ𝔾(Ω)”

**Sources:**

- [Andrea Pinamonti, Francesco Serra Cassano, Kilian Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, arXiv:2405.05024 (2024)](https://arxiv.org/abs/2405.05024v2)
- [A. Pinamonti, F. Serra Cassano, K. Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, J. Funct. Anal. 289 (2025) 110948](https://doi.org/10.1016/j.jfa.2025.110948)
- [N. Shanmugalingam, Newtonian spaces: an extension of Sobolev spaces to metric measure spaces, Rev. Mat. Iberoam. 16 (2000) 243–279](https://doi.org/10.4171/rmi/275)

### Keeping the scaling degree leaves only finitely many extensions of a distribution

**Remember:** Scaling degree measures how fast a distribution blows up at a point.

*Rules out counterexamples. Confidence: medium.* MSC 46F10 (Operations with distributions and generalized functions), 81T15. arXiv math.AP, math-ph. Level 4: research.

**Definition.** The scaling degree of u at zero is inf{ω ∈ ℝ : λ<sup>ω</sup> u(λ·) → 0 distributionally off zero as λ ↓ 0}. Its degree of divergence is its scaling degree minus the ambient dimension n.

**Problem.** Let u be a distribution on ℝⁿ ∖ {0} with finite scaling degree at 0. Its extensions to ℝⁿ with the same scaling degree form a finite-dimensional affine space, indexed by finitely many derivatives of the delta distribution. The extension is unique when the degree of divergence is negative.

**How the definition helps.** Two extensions differ by a distribution supported at zero, hence by a finite sum of derivatives of δ (our own). A derivative of order k has scaling degree n+k, excluding terms above the degree of divergence (our own). Below dimension n even δ is excluded (our own). Existence uses the scaling-degree extension theorem (our own).

**nLab:** [extension of distributions](https://ncatlab.org/nlab/show/extension+of+distributions), [scaling degree of a distribution](https://ncatlab.org/nlab/show/scaling+degree+of+a+distribution). It says: “However, if one requires that the scaling degree of the extended distribution at the given point is compatible with that of the original distribution, then there is only a finite set of possible extensions”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds, Communications in Mathematical Physics 208 (2000) 623–661; arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### Colombeau algebras multiply distributions by keeping only smooth products

**Remember:** Ask the product to agree only on smooth functions, and distributions can multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F30 (Generalized functions for nonlinear analysis (Rosinger, Colombeau, nonstandard, etc.)). arXiv math.FA, math.AP. Level 4: research.

**Definition.** On an open Euclidean set Ω, the special Colombeau algebra consists of moderate smooth nets (uε) modulo negligible nets, for ε ↓ 0. On each compact subset, each derivative of a moderate net has supremum norm O(ε⁻ᴺ) for some integer N. For negligible nets those norms are O(εᵐ) for every positive integer m.

**Problem.** No associative algebra with unit 1 that contains the distributions, with a Leibniz derivative extending theirs, has a product extending the pointwise product of continuous functions (Schwartz, 1954). Colombeau algebras show that such an algebra does exist if the product need only extend the pointwise product of smooth functions.

**How the definition helps.** Constant nets preserve smooth products, and componentwise differentiation obeys Leibniz’s rule (our own). Colombeau’s embedding theorem supplies a compatible linear embedding of distributions (our own). Schwartz’s impossibility theorem rules out preserving all continuous products as well.

**Wikipedia:** [Colombeau algebra](https://en.wikipedia.org/wiki/Colombeau_algebra), [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “However, if one only wants to preserve the product of smooth functions instead such a construction becomes possible, as demonstrated first by Colombeau.”

**Sources:** none listed. No primary source with a working link was found.

### Soft inductive limits make separable nuclear operator systems limits of matrices

**Remember:** Let the connecting maps compose only approximately, and nuclear systems become matrix limits.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L07 (Operator spaces and completely bounded maps), 18A30. arXiv math.OA, math.FA. Level 4: research.

**Definition.** An operator system S is nuclear if its identity admits the following approximations (our own). For every finite F ⊆ S and ε &gt; 0, choose unital completely positive maps u:S→Mₙ and v:Mₙ→S. They must satisfy ‖v(u(x))−x‖ &lt; ε for every x ∈ F.

**Problem.** Every nuclear operator system is a soft inductive limit of matrix algebras. A separable operator system is nuclear exactly when it is an inductive limit of matrix algebras, which generalizes the theorem of Lazar and Lindenstrauss for function systems.

**How the definition helps.** Factoring the identity approximately through matrices gives the maps used to build the soft limit (our own). The paper’s construction establishes the required compatibility (our own). In the separable case its Ding–Peterson argument gives the equivalence with sequential inductive limits.

**Paper or page:** [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019). It says: “we utilize an argument of Ding and Peterson to show that a separable operator system is nuclear if and only if it is an inductive limit of matrix algebras, generalizing a classic Theorem of Lazar and Lindenstrauss”

**Sources:**

- [Kristin Courtney, Niklas Galke, Lauritz van Luijk, Alexander Stottmeister, Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem, arXiv:2510.02019 (2025)](https://arxiv.org/abs/2510.02019)

### Countable approximate units make Morita equivalence the same as stable isomorphism

**Remember:** Countable approximate units keep Morita equivalent algebras inside one separable stabilization.

*Rules out counterexamples.* MSC 46L08 (\\(C<sup>\*\\</sup>)-modules), 46L80. arXiv math.OA. Level 4: research.

**Definition.** A C\*-algebra A is σ-unital if some sequence of positive contractions eₙ satisfies ‖eₙa−a‖ → 0 for every a ∈ A. Stable isomorphism means A ⊗ 𝒦 ≅ B ⊗ 𝒦, with 𝒦 the compact operators on a separable infinite-dimensional Hilbert space.

**Problem.** Two σ-unital C\*-algebras are strongly Morita equivalent if and only if they are stably isomorphic. In particular, they then have isomorphic K-groups.

**How the definition helps.** Countable approximate units give the countably generated modules used in the Brown–Green–Rieffel stabilization theorem (our own). For nonseparable H, the algebras 𝒦(H) and ℂ are strongly Morita equivalent through H (our own). Their stabilizations differ because only the stabilization of ℂ is separable (our own).

**Paper or page:** [Refinement of Higher-Rank Graph Reduction](https://arxiv.org/abs/2211.17156). It says: “Let 𝔸₁ and 𝔸₂ be C\*-algebras with countable approximate identities. Then 𝔸₁ ⊗ 𝒦 ≅ 𝔸₂ ⊗ 𝒦 if and only if 𝔸₁ is Morita equivalent to 𝔸₂”

**Sources:**

- [Lawrence G. Brown, Philip Green and Marc A. Rieffel, Stable isomorphism and strong Morita equivalence of C\*-algebras, Pacific Journal of Mathematics 71 (1977) 349–363](https://doi.org/10.2140/pjm.1977.71.349)

### Selfless C\*-algebras with a trace are simple with strict comparison

**Remember:** Embed the free product in an ultrapower while fixing the original algebra.

*Makes the theorem clean to state or prove.* MSC 46L09 (Free products of \\(C<sup>\*\\</sup>)-algebras), 46L35, 46L54. arXiv math.OA. Level 4: research.

**Definition.** Let (A,ρ) be a unital C\*-probability space with A ≠ ℂ and faithful GNS representation. Selflessness means the first-factor inclusion in its reduced free product with (C\*ᵣ(F∞),τ) is existential, where τ is the canonical trace. Equivalently, that free product embeds state-preservingly in an ultrapower of (A,ρ) over the diagonal copy of A.

**Problem.** If (A, ρ) is selfless and ρ is a trace, then A is simple, ρ is its unique tracial state, and A has stable rank one and strict comparison.

**How the definition helps.** One inclusion packages the approximation by free elements that the regularity theorem uses (our own). The structural theorem for tracial selfless algebras supplies all four conclusions (our own).

**Paper or page:** [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Strict comparison in reduced group C\*-algebras](https://arxiv.org/abs/2412.06031). It says: “In particular, A is a simple C\*-algebra that is either traceless, if ρ is not a trace, or such that ρ is the unique tracial state on A.”

**Sources:**

- [Leonel Robert, Selfless C\*-algebras, arXiv:2309.14188 (2023)](https://arxiv.org/abs/2309.14188)
- [Leonel Robert, Selfless C\*-algebras, Adv. Math. (2025)](https://doi.org/10.1016/j.aim.2025.110409)
- [Tattwamasi Amrutam, David Gao, Srivatsav Kunnawalkam Elayavalli, Gregory Patchell, Strict comparison in reduced group C\*-algebras, arXiv:2412.06031 (2024)](https://arxiv.org/abs/2412.06031)

### Bounded natural transformations give Hilbert spaces infinite direct sums

**Remember:** Keep only the natural transformations whose norms stay bounded across all objects.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L10 (General theory of von Neumann algebras), 46L05, 18D20. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A natural transformation t between W\*-functors F,G is bounded if one finite constant C satisfies ‖tₓ‖ ≤ C for every object X. Each component tₓ maps F(X) to G(X).

**Problem.** In the bicategory of W\*-categories, W\*-functors and bounded natural transformations, the category of Hilbert spaces has infinite direct sums defined by a universal property.

**How the definition helps.** The quoted bicategory uses bounded natural transformations as its 2-morphisms (our own). Its direct-sum universal property expresses the Hilbert direct sum in this setting (our own).

**nLab:** [W\*-category](https://ncatlab.org/nlab/show/W%2A-category), [C-star-category](https://ncatlab.org/nlab/show/C-star-category). It says: “In particular, in this bicategory, the category of Hilbert spaces has infinite direct sums (generalizing the definition of a biproduct to infinite families of objects)”

**Sources:**

- [P. Ghez, R. Lima, J. E. Roberts, W\*-categories, Pacific Journal of Mathematics 120 (1985) 79–109](https://doi.org/10.2140/pjm.1985.120.79)

### Trace logarithms recover Mahler measure

**Remember:** Fourier turns convolution into multiplication and the trace into a torus average.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras), 11R06. arXiv math.OA, math.NT. Level 4: research.

**Definition.** For a bounded operator T in a finite von Neumann algebra with normalized trace τ, put \|T\| = √(T\*T). Its Fuglede–Kadison determinant is Δ(T) = lim<sub>ε↓0</sub> exp(τ(log(\|T\|+εI))).

**Problem.** Let P be a nonzero Laurent polynomial, which allows negative integer exponents. Replace each variable by its coordinate shift on square-summable sequences on ℤⁿ to obtain T. For the trace given by the diagonal entry at the origin, Δ(T) equals exp(m(P)), where m(P) averages log\|P\| over unit circles.

**How the definition helps.** In our own calculation, the trace definition becomes the uniform circle average after Fourier transformation. Each shift becomes multiplication by a circle coordinate, so \|T\| becomes multiplication by \|P\|. The trace then integrates log(\|P\| + ε) over the torus. Monotone convergence and integrability of log\|P\| justify the limit at zeros.

**Wikipedia:** [Fuglede−Kadison determinant](https://en.wikipedia.org/wiki/Fuglede%E2%88%92Kadison_determinant). It says: “Then the Fuglede−Kadison determinant of X is defined as Δ(X) ≔ exp τ(log (X\*X)¹⁄²),”

**Sources:**

- [Deninger, Mahler measures and Fuglede-Kadison determinants](https://noah.nrw/ulbmshsnoah/download/pdf/4297304)

### Eigenstates make every spectral value of a self-adjoint element an eigenvalue

**Remember:** Use states instead of vectors, and every spectral value becomes an eigenvalue.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L30 (States of selfadjoint operator algebras), 47A10. arXiv math.OA, math.FA. Level 4: research.

**Definition.** A state on a unital C\*-algebra is a positive linear functional E with E(1) = 1. The paper calls E an eigenstate of x with eigenvalue λ when E(yx) = λE(y) for every y. This holds exactly when E((x − λ)\*(x − λ)) = 0.

**Problem.** If x is a self-adjoint element of a unital C\*-algebra, then every point of its spectrum is the eigenvalue of some eigenstate of x.

**How the definition helps.** Evaluation at λ defines a state on C\*(1,x) by continuous functional calculus (our own). The state extension theorem extends it to the whole algebra (our own). The extension vanishes on (x−λ)\*(x−λ), so Cauchy–Schwarz gives the defining eigenstate identity (our own).

**Paper or page:** [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049), [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049). It says: “We introduce the notion of eigenstate of an operator in an abstract C\*-algebra, and prove several properties. Most significantly, if the operator is self-adjoint, then every element of its spectrum has a corresponding eigenstate.”

**Sources:**

- [Luther Rinehart, Eigenstates of C\*-Algebras, arXiv:2102.07049 (2021)](https://arxiv.org/abs/2102.07049)

### Viewing GNS as a weak natural transformation makes it a left adjoint

**Remember:** Keep the comparison maps when changing the algebra of observables.

*Makes the theorem clean to state or prove.* MSC 46L30 (States of selfadjoint operator algebras), 18N10. arXiv math.OA, math.CT. Level 4: research.

**Definition.** For functors F,G into categories, a lax natural transformation assigns a functor Tₐ:F(A)→G(A) to every object A. Each arrow f:A→B has a natural comparison G(f)Tₐ ⇒ TᵦF(f), with the opposite direction for the oplax convention. Identity comparisons are identities, and comparisons for composites are the corresponding pasted comparisons.

**Problem.** Restricting a representation to a unit vector gives a state. Viewed as a weak natural transformation in a suitable 2-category, GNS is left adjoint to this restriction.

**How the definition helps.** Weak naturality lets GNS vary with the algebra through comparison maps instead of equalities, so the adjunction can be stated. In our own words, changing the algebra can change the Hilbert space that a vector generates, so equality is too strong. The abstract says that weak naturality encodes functoriality, and that the universal property encodes the defining features of GNS. One still has to prove the universal property and check that the comparison maps fit together.

**Paper or page:** [From observables and states to Hilbert space and back: a 2-categorical adjunction](https://arxiv.org/abs/1609.08975v2). It says: “To properly formulate this adjoint, it must be viewed as a weak natural transformation, a 1-morphism in a suitable 2-category, rather than as a functor between categories.”

**Sources:**

- [Arthur J. Parzygnat, From observables and states to Hilbert space and back: a 2-categorical adjunction, arXiv:1609.08975v2 (2018)](https://arxiv.org/abs/1609.08975v2)
- [Arthur J. Parzygnat, From Observables and States to Hilbert Space and Back: A 2-Categorical Adjunction, Applied Categorical Structures 26(6), 1123–1157 (2018)](https://doi.org/10.1007/s10485-018-9522-6)

### A quantum Bayesian inverse is a disintegration exactly for deterministic maps

**Remember:** Preserve products on the support to turn Bayesian reversal into disintegration.

*Makes the theorem clean to state or prove.* MSC 46L53 (Noncommutative probability and statistics), 46L30, 81P45. arXiv math.OA, quant-ph. Level 4: research.

**Definition.** Let F:B→A be unital and completely positive, let ω be a state on A, and let p be its support projection. F is ω-almost everywhere deterministic if F(bc)p = F(b)F(c)p for every b,c ∈ B.

**Problem.** For completely positive unital maps of finite-dimensional operator algebras, an existing Bayesian inverse is a disintegration exactly when the original map is almost everywhere deterministic.

**How the definition helps.** The support projection packages the part of the product law detectable by ω (our own). The paper’s equivalence theorem identifies this condition with the disintegration property for an existing Bayesian inverse.

**Paper or page:** [Inverses, disintegrations, and Bayesian inversion in quantum Markov categories](https://arxiv.org/abs/2001.08375v3). It says: “Then F is ω-a.e. deterministic if and only if G is a disintegration of (F, ω, ξ).”

**Sources:**

- [Arthur J. Parzygnat, Inverses, disintegrations, and Bayesian inversion in quantum Markov categories, arXiv:2001.08375v3 (2020)](https://arxiv.org/abs/2001.08375v3)

### Non-commutative disintegrations are unique once differences on null parts are ignored

**Remember:** Compare reverse maps only where the state has support.

*Rules out counterexamples.* MSC 46L53 (Noncommutative probability and statistics), 46L30, 81P45. arXiv math.OA, quant-ph. Level 4: research.

**Definition.** For maps G,H with common finite-dimensional output algebra B and output state ξ, let p be the support projection of ξ. They agree ξ-almost everywhere if G(a)p = H(a)p for every input a.

**Problem.** In finite dimensions, any two disintegrations of the same map and states agree almost everywhere.

**How the definition helps.** Two classical conditional rules can differ at a zero-probability outcome, which prevents literal uniqueness (our own). Multiplication by the support projection removes exactly those invisible differences (our own). The quoted uniqueness theorem establishes agreement on the support.

**Paper or page:** [Non-commutative disintegrations: existence and uniqueness in finite dimensions](https://arxiv.org/abs/1907.09689v2). It says: “We prove non-commutative disintegrations are a.e. unique whenever they exist.”

**Sources:**

- [Arthur J. Parzygnat, Benjamin P. Russo, Non-commutative disintegrations: existence and uniqueness in finite dimensions, arXiv:1907.09689v2 (2021), J. Noncommut. Geom. 17 (2023), no. 3, pp. 899-955](https://arxiv.org/abs/1907.09689v2)

### Relative modular entropy is nonnegative

**Remember:** The relative modular operator has mean one.

*True by definition.* MSC 46L53 (Noncommutative probability and statistics), 46L10. arXiv math.OA. Level 4: research.

**Definition.** Represent faithful normal states φ,ψ by their unit vectors ξ,η in the standard positive cone of M. Let S be the closure of the antilinear map xξ ↦ x\*η for x ∈ M. Araki relative entropy integrates −log λ against the spectral measure of S\*S in ξ.

**Problem.** The Araki relative entropy of any faithful normal state relative to another is nonnegative, even when it is infinite.

**How the definition helps.** The definition gives a probability measure with mean one, so convexity of −log proves the bound. Indeed, the mean equals ‖Sξ‖² = ‖η‖² = 1. Our own proof integrates −log λ ≥ 1 − λ, allowing the integral to be infinite. The construction of Δ replaces the density matrix formula and extends it to algebras without a trace.

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “is the relative modular operator of any cyclic and separating vector representatives”

**Sources:**

- [Huzihiro Araki, Relative Entropy of States of von Neumann Algebras](https://doi.org/10.2977/prims/1195191148)

### Trace tests give entropy monotonicity

**Remember:** A smaller algebra gives fewer entropy tests.

*True by definition.* MSC 46L53 (Noncommutative probability and statistics). arXiv math.OA. Level 4: research.

**Definition.** Let M be a von Neumann algebra with a faithful normal tracial state τ. For a normal state ω on M, its entropy relative to τ is the supremum of ω(h) − log τ(exp h) over self-adjoint h ∈ M.

**Problem.** Let N be a unital von Neumann subalgebra of M. If ω has finite entropy, restricting both ω and τ to N cannot increase that entropy.

**How the definition helps.** Restricting the algebra reduces the set of tests in the supremum. Our own proof observes that exp h and its trace stay the same for every remaining test. The variational theorem identifies this supremum with τ(D log D), where the density D satisfies ω(a) = τ(Da).

**Paper or page:** [Variational formulae for entropy-like functionals for states in von Neumann algebras](https://arxiv.org/abs/2510.07605v1). It says: “ω(h) − log τ(eʰ)”

**Sources:** none listed. No primary source with a working link was found.

### Condition (L) is exactly what Cuntz–Krieger uniqueness needs

**Remember:** Every cycle needs an exit, or faithful-looking maps can fail to be faithful.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 46L05, 05C20. arXiv math.OA. Level 4: research.

**Definition.** A generalized Boolean dynamical system satisfies Condition (L) if its associated topological graph is topologically free. This means that the set of base points of cycles without entrances has empty interior in the vertex space.

**Problem.** Under Condition (L), a \*-homomorphism from the system’s C\*-algebra is injective if it kills no generating projection pₐ for nonempty A. Conversely, if this test holds for every \*-homomorphism, Condition (L) holds.

**How the definition helps.** Our own reason: Condition (L) is exactly what makes the simple test work, and Theorem 3.6 shows that it is also necessary. The bad case is a cycle with no exit: one vertex with one loop gives C(𝕋), the continuous functions on the circle. Restriction to a closed arc is then not injective but keeps the vertex projection nonzero (our own example). Proposition 3.5 shows that Condition (L) means the associated topological graph is topologically free, and the uniqueness proof is the remaining work (our own).

**Wikipedia:** [https://en.wikipedia.org/wiki/Graph<sub>C</sub>\*-algebra](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Graph_C%2A-algebra). It says: “Let E be a graph satisfying Condition (L), and let C\*(E) be the associated graph C\*-algebra.”

**Paper or page:** [A Cuntz--Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems](https://arxiv.org/abs/2305.09232). It says: “(1) (ℬ,ℒ,θ) satisfies Condition (L). (2) If C is C\*-algebra and ρ : C\*(ℬ,ℒ,θ,ℐα) → C is a \*-homomorphism, then ρ is injective if and only if ρ(pA) ≠ 0 for each A ∈ ℬ∖{∅}.”

**Sources:**

- [Toke Meier Carlsen, Eun Ji Kang, A Cuntz–Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems, arXiv:2305.09232 (2023)](https://arxiv.org/abs/2305.09232)
- [Alex Kumjian, David Pask, Iain Raeburn, Jean Renault, Graphs, groupoids, and Cuntz–Krieger algebras, J. Funct. Anal. (1997)](https://doi.org/10.1006/jfan.1996.3001)

### Effectiveness excludes group isotropy and makes ideals meet the diagonal

**Remember:** Only units lie inside open isotropy, so every nonzero ideal meets the diagonal.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 46L05. arXiv math.OA, math.DS. Level 4: research.

**Definition.** A groupoid G is étale if its source and range maps are local homeomorphisms. It is effective if the interior of {g ∈ G : s(g) = r(g)} equals the subspace of unit arrows.

**Problem.** Let G be an effective, locally compact Hausdorff étale groupoid. Then every nonzero ideal of the reduced C\*-algebra C\*ᵣ(G), the completion in its regular representation, contains a nonzero function on the unit space.

**How the definition helps.** Effectiveness removes cases such as the group ℤ sitting over one point, where the conclusion fails. There C\*(ℤ) ≅ C(𝕋), and the ideal of functions vanishing at 1 contains no nonzero constant (our own). Effectiveness is not needed in every case, since the free group F₂ over a point has a simple reduced algebra (our own). The quoted paper proves a partial converse for the full algebra.

**Paper or page:** [Some results regarding the ideal structure of C\*-algebras of étale groupoids](https://arxiv.org/abs/2211.06126). It says: “If G is effective, then every nontrivial ideal of C\*<sub>r</sub>(G) contains a nonzero element of C₀(G⁽⁰⁾).”

**Sources:**

- [Jean Renault, A Groupoid Approach to C\*-Algebras, Lecture Notes in Mathematics 793, Springer (1980)](https://doi.org/10.1007/BFb0091072)

### Groupoid equivalence makes the Kronecker flow algebra Morita equivalent to A(θ)

**Remember:** Cut the flow by a transversal circle and get the rotation algebra.

*True by definition. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 46L85, 57R30. arXiv math.OA, math.DS. Level 4: research.

**Definition.** On 𝕋² = ℝ²/ℤ², the Kronecker flow of slope θ sends (x,y) to (x+t,y+θt) at time t. Its C\*-algebra is the crossed product C(𝕋²) ⋊ ℝ.

**Problem.** For irrational θ, the C\*-algebra C(𝕋²) ⋊ ℝ of the Kronecker flow is Morita equivalent to the noncommutative torus A(θ) = C(𝕋) ⋊ ℤ.

**How the definition helps.** The circle x = 0 meets every orbit, and its return map sends y to y+θ modulo one (our own). Reduction to this complete transversal gives a groupoid equivalent to the flow groupoid (our own). The groupoid equivalence theorem gives Morita equivalence with the return map’s crossed product A(θ) (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “The following Lie groupoid is Morita equivalent to the above Lie groupoid: take the groupoid quotient of U(1)² (i.e., a torus) by the action of the Lie group R of real numbers”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976)](https://doi.org/10.1007/BF01418238)

### Groupoid equivalence makes the symmetric imprimitivity theorem a one-line check

**Remember:** Let H and K act on G from two sides.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 46L08. arXiv math.OA. Level 4: research.

**Definition.** A topological groupoid equivalence from G to H is a space Z with commuting free proper left G and right H actions. Their anchor maps must induce homeomorphisms Z/H ≅ G⁽⁰⁾ and G∖Z ≅ H⁽⁰⁾.

**Problem.** For closed subgroups H and K of a locally compact group G, the crossed products C₀(G/K) ⋊ H and C₀(H∖G) ⋊ K are Morita equivalent.

**How the definition helps.** The group G itself is visibly an equivalence between the two transformation groupoids, with H acting by left and K by right translation (our own). Both actions are free and proper, they commute, and the orbit spaces are H∖G and G/K (our own). The quoted equivalence theorem of Muhly, Renault and Williams then gives a bimodule with compatible full inner products, which is a Morita equivalence. Rieffel and Green instead wrote down the bimodule and checked its inner products by hand (our own).

**Paper or page:** [Groupoids, equivalence bibundles and bimodules for noncommutative solenoids](https://arxiv.org/abs/2503.13251). It says: “C<sub>c</sub>(Z) can be completed to a C\*(G,λ) - C\*(H,μ)- imprimitivity bimodule X=X<sub>H</sub><sup>G</sup>.”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976) 7–22](https://doi.org/10.1007/BF01418238)

### Minimal effective groupoids have simple algebras, which excludes the trivial action

**Remember:** Dense orbits and no open isotropy give a simple algebra.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 37A55. arXiv math.OA, math.DS. Level 4: research.

**Definition.** A groupoid is minimal if every orbit is dense in its unit space. It is effective if the interior of the arrows with equal source and range consists exactly of the units.

**Problem.** For a nonempty second countable locally compact Hausdorff étale groupoid G that is minimal and effective, C\*ᵣ(G) is simple. In particular the noncommutative torus A(θ) is simple for irrational θ.

**How the definition helps.** Effectiveness removes the trivial action of ℤ on a point, which is minimal but gives the non-simple algebra C(𝕋) (our own). Effectiveness makes every nonzero ideal meet C₀(G⁽⁰⁾) in an ideal C₀(U), with U open and invariant (our own). Minimality forces U to be the whole unit space, so the ideal is everything (our own). For Hausdorff groupoids the support condition in the quote holds automatically (our own).

**Paper or page:** [An overview on self-similar graphs, their generalizations, and their associated algebras](https://arxiv.org/abs/2509.18702), [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “If 𝒢 is minimal and effective and for every nonzero a ∈ C\*<sub>r</sub>(𝒢), supp(j(a)) has nonempty interior, then C\*<sub>r</sub>(𝒢) is simple.”

**Sources:**

- [Jonathan Brown, Lisa Orloff Clark, Cynthia Farthing and Aidan Sims, Simplicity of algebras associated to étale groupoids, Semigroup Forum 88 (2014) 433–452](https://doi.org/10.1007/s00233-013-9546-z)

### Outer modular flow forgets states

**Remember:** Quotient by inner conjugation to forget the state.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 46L10. arXiv math.OA. Level 4: research.

**Definition.** Let σ be the modular group of a faithful normal state on a von Neumann algebra M, from Tomita–Takesaki theory. The outer modular flow sends each time t to the class of σₜ modulo conjugations by unitaries of M.

**Problem.** The resulting homomorphism from real time to the outer automorphism group is independent of the faithful normal state.

**How the definition helps.** The quotient identifies automorphisms that differ by a unitary conjugation inside M. Connes’s cocycle theorem shows that changing the state changes each modular automorphism by exactly such a conjugation. Comparing the original automorphisms requires that theorem. Equality of their classes then follows from the quotient definition.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “independent of the choice of faithful state.”

**Sources:**

- [Alain Connes, Une classification des facteurs de type III](https://doi.org/10.24033/asens.1247)

### Stabilizing by compact operators makes Takai duality hold for abelian groups

**Remember:** Each character fixes coefficients and scales the implementing unitaries.

*Makes the theorem clean to state or prove.* MSC 46L55 (Noncommutative dynamical systems), 46L05. arXiv math.OA. Level 4: research.

**Definition.** Let a locally compact abelian group G act strongly continuously on a C\*-algebra A. For each character γ of G, the dual action fixes the canonical copy of A and sends each implementing unitary uₛ to γ(s)uₛ.

**Problem.** Let a locally compact abelian group G act on a C\*-algebra A. Then the double crossed product (A ⋊ G) ⋊ Ĝ is isomorphic to A ⊗ 𝒦(L²(G)), so it is Morita equivalent to A.

**How the definition helps.** The dual action specifies the action used in the second crossed product (our own). Takai duality identifies this product with A ⊗ 𝒦(L²(G)) (our own). Tensoring with the compact operators preserves Morita equivalence (our own).

**Paper or page:** [Bijections Between Sets of Invariant Ideals, Via the Ladder Technique](https://arxiv.org/abs/2406.06780). It says: “The canonical map Φ\_α is an α̂̂−(α ⊗ Ad ρ) equivariant isomorphism of A ⋊\_α G ⋊\_α̂ G onto A ⊗ 𝒦.”

**Sources:**

- [Hiroshi Takai, On a duality for crossed products of C\*-algebras, Journal of Functional Analysis 19 (1975) 25–39](https://doi.org/10.1016/0022-1236(75)90004-X)

### The continuous core forgets states

**Remember:** Changing the state only changes the implementing unitaries.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 46L10. arXiv math.OA. Level 4: research.

**Definition.** Let σ be the modular flow of a faithful normal state on a von Neumann algebra M. The continuous core is the crossed product of M by σ, generated by M and time translation unitaries that implement σ. Its dual action fixes M and multiplies the time translation unitaries by the characters of real time.

**Problem.** The continuous cores built from two faithful normal states are isomorphic by a map that fixes the embedded algebra and respects the dual actions.

**How the definition helps.** The crossed product contains implementing unitaries that can absorb a change of modular flow. Connes’s theorem gives unitaries uₜ in M that relate the two flows by conjugation. Our own proof corrects each implementing unitary by uₜ; the cocycle identity makes the corrected operators a unitary group, which gives the isomorphism. Correcting by elements of M leaves the dual action unchanged.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “the modular automorphisms differ by inner automorphisms”

**Sources:**

- [Alain Connes, Une classification des facteurs de type III](https://doi.org/10.24033/asens.1247)

### Modular equilibrium recovers Gibbs states

**Remember:** The two strip boundaries reverse the order of the observables.

*Makes the theorem clean to state or prove.* MSC 46L60 (Applications of selfadjoint operator algebras to physics), 82B10. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Let α be a weakly continuous automorphism group on B(H), and let β &gt; 0. A state ω is β-KMS if each A,B admits a bounded continuous function F on the closed strip 0 ≤ Im z ≤ β. It is holomorphic inside and satisfies F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A) for every real t.

**Problem.** Let ω(A) = Tr(ρA) be a faithful normal KMS state at inverse temperature β. Put K = −(log ρ)/β. Then αₜ(A) = exp(itK)A exp(−itK), and exp(−βK) = ρ.

**How the definition helps.** Takesaki’s uniqueness theorem identifies αₜ with the modular automorphism at time −t/β (our own). For a faithful normal density ρ, the modular automorphism at s is conjugation by exp(is log ρ) (our own). Substitution gives the claimed K, and spectral calculus gives exp(−βK) = ρ (our own).

**Paper or page:** [Rotational KMS states and type I conformal nets](https://arxiv.org/abs/1608.08903v2). It says: “there exists positive, non-singular, selfadjoint operator H”

**Sources:**

- [Roberto Longo and Yoh Tanimoto, Rotational KMS States and Type I Conformal Nets](https://doi.org/10.1007/s00220-017-2969-8)

### Crossed products make Rieffel deformation keep K-theory

**Remember:** Same crossed product, so the same K-theory.

*True by definition.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** In Kasprzak’s construction, let B = A ⋊ ℝⁿ, with canonical unitaries uₜ and the dual action twisted by the cocycle of Θ. The Landstad algebra A(Θ) consists of multipliers x fixed by this action for which t ↦ uₜxuₜ\* is norm continuous. It also requires f x g ∈ B for every f,g in the canonical copy of C\*(ℝⁿ).

**Problem.** For every action of ℝⁿ, the deformed algebra has the same K-groups: K₀(A(Θ)) ≅ K₀(A) and K₁(A(Θ)) ≅ K₁(A). For example, each noncommutative torus, a Rieffel deformation of C(𝕋²), has K₀ ≅ K₁ ≅ ℤ².

**How the definition helps.** The crossed products of A and A(Θ) agree by definition, and Connes' Thom isomorphism fixes the K-theory of a crossed product by ℝⁿ. Connes' theorem says that a crossed product by ℝⁿ shifts K-theory by n degrees, modulo 2. Applying it to A and to A(Θ) gives isomorphic K-groups after the same shift. The work moves into the comparison of this construction with Rieffel's algebra, and into Connes' theorem.

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690), [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “For a C\*-algebra 𝒜 one has K₀(𝒜\_Θ) = K₀(𝒜) and K₁(𝒜\_Θ)=K₁(𝒜).”

**Sources:**

- [Paweł Kasprzak, Rieffel deformation via crossed products, Journal of Functional Analysis 257 (2009) 1288–1332](https://doi.org/10.1016/j.jfa.2009.05.013)
- [Marc A. Rieffel, Deformation quantization for actions of ℝᵈ, Memoirs of the AMS 106, no. 506 (1993)](https://doi.org/10.1090/memo/0506)

### Crossed products make Rieffel deformation keep nuclearity

**Remember:** Nuclearity survives crossed products by ℝⁿ, and both algebras share one.

*True by definition. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L05. arXiv math.OA. Level 4: research.

**Definition.** A C\*-algebra A is nuclear if its algebraic tensor product with every C\*-algebra B admits a unique C\*-norm.

**Problem.** The Rieffel deformation A(Θ) is nuclear if and only if A is nuclear.

**How the definition helps.** Nuclearity of B implies nuclearity of B ⋊ ℝⁿ by amenability (our own). Conversely, taking the dual crossed product and applying Takai duality gives nuclearity of B from nuclearity of B ⋊ ℝⁿ (our own). Kasprzak’s construction identifies the crossed products of A and A(Θ), so this criterion applies to both (our own).

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “A C\*-algebra 𝒜\_Θ is nuclear if and only if 𝒜 is nuclear.”

**Sources:**

- [Paweł Kasprzak, Rieffel deformation via crossed products, Journal of Functional Analysis 257 (2009) 1288–1332](https://doi.org/10.1016/j.jfa.2009.05.013)

### Discrete ħ lets matrices quantize the sphere

**Remember:** Quantize only at ħ = 1/N, and finite matrices suffice.

*Makes the theorem clean to state or prove.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 53D50. arXiv math.OA, math.SG. Level 4: research.

**Definition.** On the parameter set ħ = 1/N, take linear adjoint-preserving maps Qħ from a dense Poisson \*-algebra of functions into C\*-algebras generated by their images. Require ‖Qħ(f)‖ → ‖f‖∞ and ‖Qħ(f)Qħ(g)−Qħ(fg)‖ → 0 for all f,g. Also require ‖\[Qħ(f),Qħ(g)\]/(iħ)−Qħ({f,g})‖ → 0 as N → ∞.

**Problem.** The 2-sphere has a strict deformation quantization with ħ = 1/N, by Bordemann, Meinrenken and Schlichenmaier. Each algebra is the algebra of (N + 1) × (N + 1) matrices, made of Berezin–Toeplitz operators on holomorphic sections of the N-th power of a line bundle.

**How the definition helps.** The definition asks for algebras only at a discrete set of values of ħ, such as ħ = 1/N, where the needed line bundle exists. A definition that asked for a convergent star product would need much harder analysis, and the nLab says that this was open for the sphere. The Toeplitz operator of f multiplies a holomorphic section by f and projects back, so it acts on an (N + 1)-dimensional space. The work moves into the estimates of Bordemann, Meinrenken and Schlichenmaier for products and commutators of Toeplitz operators.

**nLab:** [deformation quantization of the 2-sphere](https://ncatlab.org/nlab/show/deformation+quantization+of+the+2-sphere). It says: “One definition of strict deformation quantization takes it to be such a formal deformation quantization which happens to converge for finite real number values of ħ. This is not known to exist for the 2-sphere.”

**Paper or page:** [Strict Quantization for Compact Pseudo-Kähler Manifolds and Group Actions](https://arxiv.org/abs/2410.03322). It says: “the semi-classical Dirac condition holds ‖ki\[T<sup>G<sub>k</sub></sup>\[f̃\], T<sup>G<sub>k</sub></sup>\[g̃\]\] − T<sup>G<sub>k</sub></sup>\[{f̃, g̃}\]‖ = O(1/k)”

**Sources:**

- [Martin Bordemann, Eckhard Meinrenken, Martin Schlichenmaier, Toeplitz quantization of Kähler manifolds and gl(N), N → ∞ limits, Communications in Mathematical Physics 165 (1994) 281–296](https://doi.org/10.1007/BF02099772)

### Opposite phases invert Rieffel deformation

**Remember:** Opposite phases cancel, so deforming by Θ then −Θ does nothing.

*True by definition. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L85. arXiv math.OA. Level 4: research.

**Definition.** For a torus action on A, its spectral space A(p) consists of elements transforming by the character p ∈ ℤⁿ. On their algebraic span, deformation by a real skew matrix Θ replaces ab with exp(2πi⟨Θp,q⟩)ab for a ∈ A(p), b ∈ A(q). The deformed algebra is the completion in the Rieffel norm.

**Problem.** The torus action passes to A(Θ), and deforming A(Θ) by −Θ gives back A. The identity map on spectral subspaces is an equivariant \*-isomorphism from A to the deformation of A(Θ) by −Θ.

**How the definition helps.** The phase factors for Θ and for −Θ cancel, so the twice-deformed product agrees with the product of A on each pair of spectral subspaces. The torus still acts on A(Θ) by the same characters, so the second deformation is defined. For the norms, a faithful representation π of A gives a faithful twisted representation πΘ, and twisting again by −Θ returns π (our own summary). With Rieffel's definition by oscillatory integrals, the same fact needs a computation with iterated integrals.

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690), [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “The mapping id : 𝒜 → (𝒜\_Θ)<sub>−Θ</sub> is an equivariant \*-isomorphism.”

**Sources:**

- [Marc A. Rieffel, Deformation quantization for actions of ℝᵈ, Memoirs of the AMS 106, no. 506 (1993)](https://doi.org/10.1090/memo/0506)

### Rieffel deformation transports invariant convolution semigroups

**Remember:** Maps that commute with the action extend to the crossed product and restrict.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L67. arXiv math.OA. Level 4: research.

**Definition.** On the universal function algebra of a locally compact quantum group, a convolution semigroup consists of weak-\* continuously varying states μₜ for t ≥ 0. It satisfies μ₀ = ε and μₛ⋆μₜ = μₛ₊ₜ for all s,t ≥ 0, where ε is the counit. Adjoint Γ-invariance means μₜ∘Ad(γ) = μₜ for every γ ∈ Γ and every t.

**Problem.** Take weak-star continuous convolution semigroups of states that are invariant under the adjoint action of Γ. Those on 𝔾 correspond canonically and one to one with those on its Rieffel deformation (Skalski–Viselter).

**How the definition helps.** A map that commutes with the action of Γ extends to the crossed product and preserves the deformed subalgebra, so it restricts to the deformation. Convolution by an invariant state commutes with the translations by Γ, and the construction respects composition, so semigroups go to semigroups. Deforming back with the conjugate cocycle gives the inverse correspondence. The work moves into showing that the restricted maps are again convolution by states of the deformed quantum group (our own summary).

**Paper or page:** [Convolution semigroups on Rieffel deformations of locally compact quantum groups](https://arxiv.org/abs/2311.04630), [Convolution semigroups on Rieffel deformations of locally compact quantum groups](https://arxiv.org/abs/2311.04630). It says: “Then the canonical completely positive ‘extension’ S̃ of S to the crossed product A ⋊\_ρ Γ is non-degenerate and preserves the algebra A<sup>Ψ</sup>, and the respective restriction S<sup>Ψ</sup>: A<sup>Ψ</sup> → A<sup>Ψ</sup> is a completely positive map of norm 1.”

**Sources:**

- [Adam Skalski, Ami Viselter, Convolution semigroups on Rieffel deformations of locally compact quantum groups, Letters in Mathematical Physics 114 (2024), article 52](https://doi.org/10.1007/s11005-024-01797-w)

### A two-sided null space restores the Kawada–Itô theorem for quantum groups

**Remember:** Idempotent states come from subgroups exactly when their null space is two-sided.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 60B15. arXiv math.OA, math.QA. Level 4: research.

**Definition.** A state φ on C(G) is idempotent when φ⋆φ = φ for the convolution φ⋆ψ = (φ⊗ψ)Δ. A Haar idempotent is a state h′ ∘ π, where π: C(G) → C(H) defines a quantum subgroup H and h′ is the Haar state of H. The null space of φ is the set of f with φ(f\*f) = 0.

**Problem.** An idempotent state on a compact quantum group is the Haar state of a quantum subgroup exactly when its null space is a two-sided ideal. Not every idempotent state has this property, as Pal's example on the Kac–Paljutkin quantum group shows.

**How the definition helps.** A null space that is a two-sided ideal can be divided out, and the quotient is the algebra of the quantum subgroup. On a classical compact group every null space is a two-sided ideal, since C(G) is commutative, so the Kawada–Itô theorem holds with no condition. Pal found an idempotent state on the eight-dimensional Kac–Paljutkin quantum group that does not come from a subgroup. The null space condition removes exactly such states.

**Paper or page:** [Analysis for idempotent states on quantum permutation groups](https://arxiv.org/abs/2301.13423), [Analysis for idempotent states on quantum permutation groups](https://arxiv.org/abs/2301.13423). It says: “Let 𝔾 be a compact quantum group and φ∈C(𝔾)\* an idempotent state. Then φ is a Haar idempotent if and only if the null-space Nᵩ = { f∈C(𝔾) : φ(\|f\|²)=0 } is a two-sided ideal.”

**Sources:**

- [A. Pal, A counterexample on idempotent states on a compact quantum group, Letters in Mathematical Physics 37 (1996) 75–77](https://doi.org/10.1007/BF00400140)
- [U. Franz, A. Skalski and R. Tomatsu, Idempotent states on compact quantum groups and their classification on Uq(2), SUq(2), and SOq(3), Journal of Noncommutative Geometry 7 (2013) 221–254](https://doi.org/10.4171/JNCG/115)
- [U. Franz and A. Skalski, On idempotent states on quantum groups, Journal of Algebra 322 (2009) 1774–1802](https://doi.org/10.1016/j.jalgebra.2009.05.037)

### Fixing a state lets quantum automorphism groups of matrix algebras exist

**Remember:** Fix a state on Mₙ, and a largest quantum symmetry group appears.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 4: research.

**Definition.** An action α of a compact quantum group on B preserves ψ if (ψ⊗id)α(b) = ψ(b)1 for every b ∈ B. Such an action is universal if every ψ-preserving action is obtained from it by a unique compact quantum group morphism on function algebras.

**Problem.** For every finite-dimensional C\*-algebra B with a faithful state ψ, a universal compact quantum group acting on B and preserving ψ exists. Without the condition on ψ, the matrix algebra Mₙ with n ≥ 2 has no universal compact quantum group acting on it.

**How the definition helps.** Preserving ψ makes the action unitary on the Hilbert space L²(B, ψ), so the universal object is a quotient of a universal unitary quantum group (our own). Without ψ, the category of all actions on Mₙ has no final object, as Wang showed (our own). For B = ℂⁿ no state is needed: the quantum permutation group Sₙ⁺ is universal among all actions, and it preserves the uniform state (our own).

**Paper or page:** [On the von Neumann algebra of class functions on a compact quantum group](https://arxiv.org/abs/2103.06216), [A quantum Frucht's theorem and quantum automorphisms of quantum Cayley graphs](https://arxiv.org/abs/2503.11149). It says: “the quantum automorphism group of a finite dimensional C∗-algebra equipped with a δ-form”

**Sources:**

- [S. Wang, Quantum symmetry groups of finite spaces, Communications in Mathematical Physics 195 (1998) 195–211](https://doi.org/10.1007/s002200050385)

### Monoidal equivalence lets a genuine quantum group share SO(3)'s representations

**Remember:** Equivalent representation tensor categories have the same fusion rules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 18M05. arXiv math.OA, math.QA. Level 4: research.

**Definition.** Two compact quantum groups are monoidally equivalent if their finite-dimensional unitary representation categories are equivalent as C\*-tensor categories.

**Problem.** The quantum permutation group S₄⁺ is monoidally equivalent to SO(3), though C(S₄⁺) is not commutative. So S₄⁺ has the fusion rules of SO(3), and properties of discrete duals that depend only on the tensor category pass between them.

**How the definition helps.** Tensor equivalence preserves irreducible objects and multiplicities in tensor products, giving identical fusion rules (our own). Banica’s representation computation supplies the equivalence in this example (our own). Properties determined by that tensor category therefore agree (our own).

**Paper or page:** [Classification of Quantum Graphs on M₂ and their Quantum Automorphism Groups](https://arxiv.org/abs/2110.09085), [The approximation property for locally compact quantum groups](https://arxiv.org/abs/2305.04894). It says: “(1) The special orthogonal group SO(3) is monoidally equivalent to the quantum symmetric group S₄⁺.”

**Sources:**

- [J. Bichon, A. De Rijdt and S. Vaes, Ergodic coactions with large multiplicity and monoidal equivalence of quantum groups, Communications in Mathematical Physics 262 (2006) 703–728](https://doi.org/10.1007/s00220-005-1442-2)

### Putting Haar weights in the axioms gives Pontryagin duality for quantum groups

**Remember:** Left and right Haar weights supply the regular representation used in duality.

*Makes the theorem clean to state or prove.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 4: research.

**Definition.** A von Neumann algebraic locally compact quantum group has a von Neumann algebra M and a normal unital coassociative \*-homomorphism Δ:M→M ⊗̄ M. It requires faithful normal semifinite weights φ,ψ satisfying φ((ω⊗id)Δx)=ω(1)φ(x) and ψ((id⊗ω)Δy)=ω(1)ψ(y). These hold for every normal positive functional ω and positive x,y of finite respective weights.

**Problem.** Every locally compact quantum group G has a dual locally compact quantum group Ĝ, and the dual of Ĝ is isomorphic to G. This extends Pontryagin duality and covers non-Kac examples such as quantum SU(2).

**How the definition helps.** The invariant weights supply the regular representation used to construct the dual (our own). Kustermans–Vaes duality shows that this construction produces a locally compact quantum group and identifies its bidual with the original (our own).

**Wikipedia:** [Locally compact quantum group](https://en.wikipedia.org/wiki/Locally_compact_quantum_group). It says: “One of the main features distinguishing this new approach from its predecessors is the axiomatic existence of left and right invariant weights.”

**Sources:**

- [J. Kustermans and S. Vaes, Locally compact quantum groups, Annales Scientifiques de l'École Normale Supérieure 33 (2000) 837–934](https://doi.org/10.1016/S0012-9593(00)01055-7)

### The reduced completion makes the Haar state faithful

**Remember:** Divide out what the Haar state cannot see.

*Rules out counterexamples.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 46L30. arXiv math.OA. Level 4: research.

**Definition.** The reduced C\*-algebra Cᵣ(G) of a compact quantum group is the image of C(G) in the GNS representation of its Haar state h. The GNS representation is the action of C(G) by left multiplication on the Hilbert space built from h. A state is faithful when h(a\*a) = 0 forces a = 0.

**Problem.** The Haar state of Cᵣ(G) is faithful, for every compact quantum group G. On the full algebra it can fail to be faithful, as for the dual of the free group F₂.

**How the definition helps.** Passing to the GNS image removes exactly the elements that the Haar state cannot see. For the dual of F₂, the algebra is the full group C\*-algebra C\*(F₂), and the Haar state is the canonical trace. This trace is not faithful because F₂ is not amenable (our own). The work moves into the proof that the null space of h is a two-sided ideal, which uses Woronowicz's modular theory of the Haar state (our own).

**Paper or page:** [Convergence of Fourier truncations for compact quantum groups and finitely generated groups](https://arxiv.org/abs/2210.00387). It says: “Assume that (𝒜,Δ) is in reduced form, that is, its Haar state is faithful.”

**Sources:** none listed. No primary source with a working link was found.

### Closure under holomorphic functional calculus preserves operator K-theory

**Remember:** Holomorphic functions turn near-idempotents into true idempotents inside the subalgebra.

*Makes the theorem clean to state or prove.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 58B34, 46H30. arXiv math.OA, math.KT. Level 4: research.

**Definition.** Let 𝒜 be a dense subalgebra of a C\*-algebra A. It is closed under holomorphic functional calculus if f(a) ∈ 𝒜 for a ∈ 𝒜 and f holomorphic near the spectrum of a. The algebra C∞(M) inside C(M) is the basic example.

**Problem.** Suppose 𝒜 and all its matrix algebras are closed under holomorphic functional calculus in the matrix algebras of A. Then the inclusion gives K₀(𝒜) ≅ K₀(A), and likewise for K₁, so cyclic cocycles on 𝒜 pair with all of the K-theory of A.

**How the definition helps.** Holomorphic calculus cuts a sufficiently close approximation of an idempotent back to an idempotent inside the dense matrix algebra (our own). Applying the same construction along paths preserves homotopies (our own). Invertibles can likewise be approximated, and holomorphic inversion keeps their inverses in the subalgebra (our own). The resulting K-theory isomorphisms transport the cyclic cocycle pairings (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “Since, on the other hand, cyclic homology degenerates on C\*-algebras, there came up the need to define modified theories.”

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “for each n, Mₙ(𝒜) is closed under the holomorphic functional calculus in Mₙ(A) so that ι\*:K\*(𝒜) → K\*(A) is an isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Stabilizing by the compact operators makes algebraic and topological K-theory agree

**Remember:** After stabilizing, the determinant disappears and the two K-theories agree.

*Rules out counterexamples.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19D50. arXiv math.KT, math.OA. Level 4: research.

**Definition.** Let 𝒦 be the compact operators on a separable infinite-dimensional Hilbert space. The stabilization of a C\*-algebra A is its spatial tensor product A ⊗ 𝒦. A is stable if it is isomorphic to its stabilization.

**Problem.** For every C\*-algebra A and every n ≥ 0, the natural map Kₙᵃˡᵍ(A ⊗ 𝒦) → Kₙ(A ⊗ 𝒦) is an isomorphism.

**How the definition helps.** Stabilization removes algebraic invariants, such as the determinant, that topological K-theory cannot see. For A = ℂ the theorem fails without stabilization: K₁ᵃˡᵍ(ℂ) = ℂˣ through the determinant, but K₁(ℂ) = 0 because each unitary group U(n) is connected (our own). Suslin and Wodzicki proved excision for algebraic K-theory, which makes it split exact on stable C\*-algebras (our own). Higson's theorem that stable split-exact functors are homotopy invariant then lets the two theories be compared (our own).

**Wikipedia:** [Karoubi conjecture](https://en.wikipedia.org/wiki/Karoubi_conjecture). It says: “the Karoubi conjecture was a conjecture by Max Karoubi that the algebraic and topological K-theories coincide on C\* algebras spatially tensored with the algebra of compact operators.”

**Sources:**

- [Andrei Suslin and Mariusz Wodzicki, Excision in algebraic K-theory, Annals of Mathematics 136 (1992) 51–122](https://doi.org/10.2307/2946546)
- [Max Karoubi, K-théorie algébrique de certaines algèbres d'opérateurs, Lecture Notes in Mathematics 725, Springer (1979) 254–290](https://doi.org/10.1007/BFb0062621)

### The Pimsner–Voiculescu Toeplitz algebra turns crossed products by ℤ into six-term sequences

**Remember:** Replace the crossed product by a Toeplitz extension, then read off its hexagon.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 46L55. arXiv math.OA, math.KT. Level 4: research.

**Definition.** Let u implement α in the multiplier algebra of A ⋊α ℤ, and let S be the unilateral shift. The Pimsner–Voiculescu Toeplitz algebra is generated by a ⊗ 1 and au ⊗ S for all a ∈ A.

**Problem.** For every automorphism α of a C\*-algebra A there is a six-term exact sequence K₀(A) → K₀(A) → K₀(A ⋊α ℤ) → K₁(A) → K₁(A) → K₁(A ⋊α ℤ) → K₀(A). The maps from K∗(A) to K∗(A) are 1 − α∗.

**How the definition helps.** The Toeplitz extension has ideal A ⊗ 𝒦 and quotient A ⋊α ℤ (our own). Its six-term sequence uses K∗(A) for the ideal by stability and for the middle algebra by the Pimsner–Voiculescu equivalence (our own). Under the sequence’s identifications, the ideal inclusion gives 1 − α∗ (our own).

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “For a C\*-algebra A and an action α ∈ Aut(A) there is a Pimsner-Voiculescu exact sequence in K-homology for the crossed product A ⋊φ ℤ”

**Sources:**

- [Levi Lorenzo, Finitely summable K-homology, the index pairing, and Cantor minimal systems, arXiv:2505.24135 (2025)](https://arxiv.org/abs/2505.24135)

### Viewing a correspondence as a KK class gives the Cuntz–Pimsner exact sequence

**Remember:** The correspondence is its own KK class, and 1 − \[E\] drives the sequence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19K35, 46L08. arXiv math.OA, math.KT. Level 4: research.

**Definition.** An A-correspondence is a right Hilbert A-module E with a \*-homomorphism A→ℒ(E) into its adjointable operators. For separable A and countably generated E with compact left action, the Kasparov cycle (E,0) defines \[E\] ∈ KK(A,A).

**Problem.** Let A be separable and act on a countably generated E injectively and by compact operators. Then there is a six-term exact sequence K₀(A) → K₀(A) → K₀(𝒪(E)) → K₁(A) → K₁(A) → K₁(𝒪(E)) → K₀(A). The maps from K∗(A) to K∗(A) are 1 − \[E\], the identity minus the Kasparov product with \[E\].

**How the definition helps.** The correspondence gives the class \[E\] directly through the zero-operator cycle (our own). Pimsner’s theorem identifies the Toeplitz extension’s ideal and middle algebra with A in KK-theory (our own). Under these identifications the ideal inclusion gives 1−\[E\], yielding the stated sequence (our own).

**Wikipedia:** [Hilbert C\*-module](https://en.wikipedia.org/wiki/Hilbert_C%2A-module). It says: “In particular, graph algebras, crossed products by ℤ, and the Cuntz algebras are all quotients of specific Toeplitz algebras.”

**Sources:**

- [Mihai V. Pimsner, A class of C\*-algebras generalizing both Cuntz–Krieger algebras and crossed products by ℤ, in Free Probability Theory, Fields Institute Communications 12, American Mathematical Society (1997) 189–212](https://doi.org/10.1090/fic/012/08)

### Defining the primitive ideal topology by ideals makes it Morita invariant

**Remember:** Same ideal lattice, same primitive spectrum, same space when commutative.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L08. arXiv math.OA. Level 4: research.

**Definition.** The primitive ideal space Prim(A) is the set of kernels of irreducible representations of A. Its hull–kernel topology has as closed sets the primitive ideals that contain a given ideal. Algebras are Morita equivalent when an imprimitivity bimodule, a bimodule with compatible full inner products valued in each algebra, links them.

**Problem.** Morita equivalent C\*-algebras have homeomorphic primitive ideal spaces. For locally compact Hausdorff X,Y, Morita equivalence of C₀(X) and C₀(Y) therefore implies X ≅ Y and C₀(X) ≅ C₀(Y).

**How the definition helps.** The topology on Prim(A) is defined only through ideals, so a lattice isomorphism of ideals that matches primitive ideals is a homeomorphism (our own). The bimodule gives such a lattice isomorphism by the quoted Rieffel correspondence, and Rieffel induction matches the primitive ideals (our own). The usual alternative compares the topologies of the two spaces of irreducible representations directly through induced representations (our own). For commutative algebras Prim(C₀(X)) is X, so Morita equivalence collapses to isomorphism (our own).

**Paper or page:** [The Rieffel Correspondence for Equivalent Fell Bundles](https://arxiv.org/abs/2309.12116). It says: “In particular, J ↦ X·J is a lattice isomorphism of ℐ(B) onto 𝒞(X) with inverse Y ↦ ⟨Y,Y⟩<sub>B</sub>, and K ↦ K·X is a lattice isomorphism of ℐ(A) onto 𝒞(X)”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)

### Symmetric imprimitivity makes noncommutative tori in one GL(2,ℤ) orbit Morita equivalent

**Remember:** Swap which lattice acts on the line and θ becomes 1/θ.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L55, 58B34. arXiv math.OA. Level 4: research.

**Definition.** For θ ≠ 0, define A(θ) as C(ℝ/ℤ) ⋊ θℤ for the translation action. The generator θ acts by rotation through 2πθ.

**Problem.** Let nonzero real θ,η be related by η = (aθ+b)/(cθ+d) with an integer matrix of determinant ±1 and cθ+d ≠ 0. Then A(θ) and A(η) are Morita equivalent, in particular for η = 1/θ.

**How the definition helps.** As a crossed product of the line by two lattices, A(θ) falls under symmetric imprimitivity, so no bimodule is built by hand (our own). Take G = ℝ, H = ℤ and K = θℤ, so C(ℝ/θℤ) ⋊ ℤ is Morita equivalent to C(ℤ∖ℝ) ⋊ θℤ (our own). The first algebra is A(1/θ) and the second is A(θ) (our own). With A(θ) ≅ A(θ+1) ≅ A(−θ), these moves generate the GL(2,ℤ) action (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “Furthermore, two noncommutative tori with paremeters θ₁ and θ₂ are Morita equivalent if and only if θ₁ and θ₂ are in the same orbit with respect to the action of GL(2,Z) on U(1)”

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “In particular, the noncommutative tori with θ rational are Morita equivalent to the classical torus.”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976) 7–22](https://doi.org/10.1007/BF01418238)
- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Liquid tensor products of holomorphic functions on discs give polydisc functions

**Remember:** Tensor disc functions, get polydisc functions; tensor disjoint discs, get zero.

*Makes the theorem clean to state or prove.* MSC 46M05 (Tensor products in functional analysis), 46A32, 32A38. arXiv math.FA, math.CV. Level 4: research.

**Definition.** For liquidification L and condensed complex vector spaces V,W, the liquid tensor product of L(V),L(W) is L(V ⊗ W). For a closed disc D, O(D) consists of germs of holomorphic functions on neighborhoods of D.

**Problem.** The k-fold liquid tensor product of O(D) is the space O(Dᵏ) of holomorphic functions on the open polydisc. For disjoint closed discs D₁ and D₂ in ℂ, the derived liquid tensor product of O(D₁) and O(D₂) over ℂ\[z\] is 0.

**How the definition helps.** The product theorem for holomorphic function spaces identifies the k-fold liquid tensor product with O(Dᵏ) (our own). For two closed discs it identifies the complex tensor product with O(D₁ × D₂) (our own). The diagonal resolution of ℂ\[z\] computes the relative derived product by multiplication by z₁−z₂ on that space (our own). Disjointness makes this function invertible, so the complex has zero homology (our own).

**nLab:** [gaseous vector space](https://ncatlab.org/nlab/show/gaseous+vector+space). It says: “tensor products of spaces of holomorphic or real-analytic functions behave correctly under the gaseous tensor product, but tensor products of spaces of C<sup>∞</sup>-functions are only correct under the liquid tensor product”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)
- [Dustin Clausen, Peter Scholze, Condensed Mathematics and Complex Geometry, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/Complex.pdf)

### Almost unit balls determine Banach modules together with their exact norms

**Remember:** Up to almost zero, the unit ball remembers the norm exactly.

*Rules out counterexamples. Confidence: medium.* MSC 46S10 (Functional analysis over fields other than \\(\\mathbb\\) or \\(\\mathbb\\) or the quaternions; non-Archimedean functional analysis), 46H25, 13J10. arXiv math.NT, math.FA. Level 4: research.

**Definition.** Let A be a Banach ring with a norm-multiplicative, topologically nilpotent unit ϖ of norm at most 1. Suppose ϖ has compatible pⁿ-th roots of norm ‖ϖ‖ to the power 1/pⁿ. The almost unit ball of a Banach module is its closed unit ball, viewed up to modules killed by all these roots.

**Problem.** Taking almost unit balls equates submetric Banach A-modules and ϖ-adically complete, ϖ-torsion-free almost modules over the closed unit ball of A. The Banach module maps are contractions, and the almost unit ball determines the norm exactly.

**How the definition helps.** Almost mathematics identifies exactly those lattices that give the same gauge norm, so the norm becomes an invariant of the almost module. For example, the open and closed unit balls differ. But each lies in the other after multiplying by any root of ϖ, so they are almost equal (our own). Without almost mathematics, a lattice fixes the norm only up to equivalence, as the paper's abstract says.

**Paper or page:** [Banach modules, almost mathematics and condensed mathematics](https://arxiv.org/abs/2508.11268). It says: “form a pair of quasi-inverse equivalences between the category Ban<sub>A</sub><sup>≤1</sup> of submetric Banach (A, ‖⋅‖)-modules with submetric A-module maps and the category of ϖ-adically complete, ϖ-torsion-free almost modules over the closed unit ball A\_≤1.”

**Sources:**

- [Dimitri Dine, Banach modules, almost mathematics and condensed mathematics, arXiv:2508.11268](https://arxiv.org/abs/2508.11268)

### The solid tensor product keeps adically complete modules complete

**Remember:** Solid tensor products of complete modules are complete, so ℤₚ ⊗ ℤₚ = ℤₚ.

*Rules out counterexamples.* MSC 46S10 (Functional analysis over fields other than \\(\\mathbb\\) or \\(\\mathbb\\) or the quaternions; non-Archimedean functional analysis), 13J10, 13D09. arXiv math.AG, math.AC. Level 4: research.

**Definition.** The derived solid tensor product of solid complexes is the solidification of their derived condensed tensor product. A solid A-module complex M is derived I-complete if the canonical map M → Rlimₙ(M ⊗ᴸ<sub>A</sub> A/Iⁿ) is an equivalence, using solid tensors.

**Problem.** Let A be a commutative ring of finite type over ℤ and I an ideal. The derived solid tensor product over A of two bounded-below I-complete solid A-module complexes is again bounded below and I-complete. For instance, the derived solid tensor square of ℤₚ over ℤ is ℤₚ.

**How the definition helps.** The solid tensor product of two products of copies of ℤ is again a product (our own reading of the condensed notes, Proposition 6.3). So completion is built in. This excludes the ordinary tensor product ℤₚ ⊗ ℤₚ over ℤ, which contains a nonzero ℚ-vector space and is not p-adically complete (our own). For a general ideal I, the work is in the cited corollary, which shows that completion at I is symmetric monoidal.

**Paper or page:** [Beilinson-Parshin adeles via solid algebraic geometry](https://arxiv.org/abs/2403.08472), [The 6-Functor Formalism for ℤℓ- and ℚℓ-Sheaves on Diamonds](https://arxiv.org/abs/2209.08135). It says: “In particular, the tensor product of a pair of I-complete eventually connective A■-modules is I-complete.”

**Sources:**

- [Peter Scholze, Lectures on Condensed Mathematics (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
- [Christopher Brav, Grigorii Konovalov, Beilinson-Parshin adeles via solid algebraic geometry, arXiv:2403.08472](https://arxiv.org/abs/2403.08472)

### Unique extension along completed free groups makes solid abelian groups abelian

**Remember:** Solid groups cannot tell a free group from its completion.

*True by definition.* MSC 46S10 (Functional analysis over fields other than \\(\\mathbb\\) or \\(\\mathbb\\) or the quaternions; non-Archimedean functional analysis), 18F20. arXiv math.AG, math.FA. Level 4: research.

**Definition.** A condensed abelian group is a sheaf of abelian groups on profinite sets; it stands in for a topological group. For a profinite set S, the limit of finite sets Sᵢ, let ℤ\[S\]■ be the limit of the free groups ℤ\[Sᵢ\]. A condensed abelian group is solid if every map from S into it extends uniquely to a group map from ℤ\[S\]■.

**Problem.** Solid abelian groups form an abelian subcategory of condensed abelian groups, closed under all limits, colimits and extensions. Products of copies of ℤ are compact projective generators, and the inclusion has a left adjoint, called solidification.

**How the definition helps.** The unique-extension condition defines the complete modules for the solid analytic ring of integers (our own). The analytic ring module theorem supplies the closure properties, generators and left adjoint (our own). The substantive step is verifying analyticity, using Nöbeling’s freeness theorem for continuous integer-valued functions on profinite sets (our own).

**nLab:** [solid abelian group](https://ncatlab.org/nlab/show/solid+abelian+group). It says: “A solid abelian group is a condensed abelian group A such that for all profinite sets S and all maps f:S → A, there is a unique map g:ℤ\[S\]<sup>□</sup> → A such that f = g ∘ m.”

**Sources:**

- [Peter Scholze, Lectures on Condensed Mathematics (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
