### For 0 &lt; p ≤ 1, dropping the p-th root gives a metric

**Remember:** For small p, drop the root and the triangle inequality comes back.

*Rules out counterexamples. Confidence: medium.* MSC 46B20 (Geometry and structure of normed linear spaces), 54E35. arXiv math.FA. Level 1: early undergraduate.

**Definition.** For 0 &lt; p ≤ 1, set ‖x‖ = Σ \|xᵢ\|ᵖ, without taking the p-th root. For p = 1 this is the usual 1-norm.

**Problem.** For 0 &lt; p ≤ 1, d(x, y) = Σ \|xᵢ − yᵢ\|ᵖ is a metric. For 0 &lt; p &lt; 1 the usual p-norm, with the root, fails the triangle inequality.

**How the definition helps.** Without the root, the triangle inequality follows from one inequality for numbers. For 0 &lt; p ≤ 1 and s, t ≥ 0, (s + t)ᵖ ≤ sᵖ + tᵖ, so Σ \|xᵢ + yᵢ\|ᵖ ≤ Σ \|xᵢ\|ᵖ + Σ \|yᵢ\|ᵖ. The cost is that ‖cx‖ = \|c\|ᵖ ‖x‖, so ‖·‖ is not a norm. The subadditivity step is standard, and the nLab states the result without proof.

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

**Definition.** A seminorm is like a norm, but it may vanish at a nonzero vector. A norm vanishes only at the zero vector. C\[a, b\] is the space of continuous real functions on the closed interval \[a, b\].

**Problem.** On C\[a, b\], ‖x‖₁ = ∫ₐᵇ \|x(t)\| dt is a norm. On all integrable functions it is only a seminorm.

**How the definition helps.** Continuity rules out nonzero functions that the integral cannot see. Our own sketch: if x(t₀) ≠ 0, then \|x\| &gt; \|x(t₀)\|/2 on some interval, so the integral of \|x\| is positive. Our own counterexample: the function that is 1 at one point and 0 elsewhere has integral 0. So on C\[a, b\] no identification of functions almost everywhere is needed, as it is for L¹.

**Paper or page:** [1-Seminorm on Continuous on Closed Interval Real-Valued Functions is Norm](https://proofwiki.org/wiki/1-Seminorm_on_Continuous_on_Closed_Interval_Real-Valued_Functions_is_Norm). It says: “Let ‖x‖₁ := ∫ₐᵇ \|x(t)\| dt be the 1-seminorm. Then ‖·‖₁ is a norm on C\[a, b\].”

**Sources:**

- [ProofWiki, 1-Seminorm on Continuous on Closed Interval Real-Valued Functions is Norm](https://proofwiki.org/wiki/1-Seminorm_on_Continuous_on_Closed_Interval_Real-Valued_Functions_is_Norm)

### Vanishing at infinity means continuous at the added point

**Remember:** Small outside a compact set means near zero near the point at infinity.

*True by definition. Confidence: medium.* MSC 46E05 (Lattices of continuous, differentiable or analytic functions), 54D35. arXiv math.GN, math.FA. Level 2: later undergraduate.

**Definition.** A function f on a space X vanishes at infinity if, for each ε &gt; 0, the set where \|f\| ≥ ε is compact. The Alexandroff extension adds one point p to X. The open sets that contain p are p together with the complement of a compact set of X.

**Problem.** Let X be locally compact and Hausdorff. A continuous function that vanishes at infinity extends continuously to X ∪ {p}, with value 0 at p. These functions form a Banach space under the supremum norm.

**How the definition helps.** Near p means outside a compact set, so 'vanishing at infinity' is the same as 'tends to 0 at p'. So the extension theorem is close to an unwinding of the two definitions; this point is our own. In our own reading, these functions are then the continuous functions on the compact space X ∪ {p} that are 0 at p. That set is a closed subspace of a Banach space, which gives the second theorem; this remark is also our own. Results for compact spaces, such as the Stone–Weierstrass theorem, pass to locally compact spaces in the same way.

**Paper or page:** [Extension of Continuous Complex-Valued Function Vanishing at Infinity to Alexandroff Extension is Continuous](https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous), [Space of Continuous Functions on Locally Compact Hausdorff Space Vanishing at Infinity is Banach Space](https://proofwiki.org/wiki/Space_of_Continuous_Functions_on_Locally_Compact_Hausdorff_Space_Vanishing_at_Infinity_is_Banach_Space). It says: “Let f : X → ℂ be a continuous complex-valued function vanishing at infinity. Define f\* : X\* → ℂ by taking”

**Sources:**

- [ProofWiki, Extension of Continuous Complex-Valued Function Vanishing at Infinity to Alexandroff Extension is Continuous](https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous)
- [ProofWiki, Space of Continuous Functions on Locally Compact Hausdorff Space Vanishing at Infinity is Banach Space](https://proofwiki.org/wiki/Space_of_Continuous_Functions_on_Locally_Compact_Hausdorff_Space_Vanishing_at_Infinity_is_Banach_Space)

### Separating points is all that Stone–Weierstrass needs

**Remember:** To approximate everything, the algebra must tell every two points apart.

*Makes the theorem clean to state or prove.* MSC 46E25 (Rings and algebras of continuous, differentiable or analytic functions), 41A65. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** A set A of functions on X separates points when its functions can tell any two points apart. That is, for any two different points x and y of X, some function p in A has p(x) ≠ p(y).

**Problem.** Let X be a compact Hausdorff space, and let C(X, ℝ) be the algebra of continuous real functions on X. A subalgebra of C(X, ℝ) that contains a non-zero constant function is dense in the uniform norm exactly when it separates points.

**How the definition helps.** The condition is both necessary and enough, so one easy check settles density. Weierstrass's theorem on polynomials on \[a,b\] becomes a special case. For complex-valued functions the subalgebra must also be closed under complex conjugation. For example, the polynomials in z on the closed unit disc separate points but are not dense, because their uniform limits are holomorphic inside (our own example).

**Wikipedia:** [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem). It says: “It turns out that the crucial property that a subalgebra must satisfy is that it separates points”

**Sources:**

- [M. H. Stone, Applications of the theory of Boolean rings to general topology, Trans. Amer. Math. Soc. 41 (1937), 375–481, doi:10.1090/S0002-9947-1937-1501905-7](https://doi.org/10.1090/S0002-9947-1937-1501905-7)

### Grading Lebesgue spaces by 1/p makes Hölder's inequality a graded multiplication

**Remember:** Use 1/p as the degree, and degrees add when you multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 26D15. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** Index the Lebesgue spaces by the reciprocal of the usual exponent. Write M(a) for the space Lᵖ with p = 1/a. So M(0) = L∞, M(1/2) = L² and M(1) = L¹.

**Problem.** If f lies in M(a) and g lies in M(b), then fg lies in M(a + b). In the usual indexing this is Hölder's rule 1/p + 1/q = 1/r.

**How the definition helps.** With the reciprocal grading, degrees simply add when you multiply functions. So multiplication maps M(a) × M(b) to M(a + b), and the spaces form a graded algebra. The inequality itself still needs a proof; the new indexing only makes its form natural.

**nLab:** [Lebesgue space](https://ncatlab.org/nlab/show/Lebesgue+space). It says: “If we take M<sup>p=L^</sup>(1/p), the spaces M<sup>p</sup> form a C-graded algebra, where C denotes complex numbers. This is a conceptual explanation for the appearance of formulas like 1/p+1/q=1/r in Hölder's inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Lᵖ treats functions that agree almost everywhere as equal

**Remember:** In Lᵖ, what happens on a set of measure zero does not count.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)). arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** Lᵖ(S, μ) consists of the measurable functions f with ∫\|f\|ᵖ dμ finite. Two functions count as the same element when they are equal almost everywhere. So the elements of Lᵖ are equivalence classes, not functions.

**Problem.** The quantity ‖f‖ₚ = (∫\|f\|ᵖ)¹ᐟᵖ is a norm. Lᵖ is complete for this norm, so it is a Banach space (the Riesz–Fischer theorem).

**How the definition helps.** Treating functions that agree almost everywhere as equal turns ‖·‖ₚ into a true norm. On functions, the indicator of a non-empty set of measure zero is nonzero but has norm 0, so ‖·‖ₚ is only a seminorm. The quotient makes it a norm, and then completeness can be stated and proved. The cost is that the value of an element at a single point has no meaning (our own remark).

**Wikipedia:** [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “Hence, strictly speaking Lᵖ(S, μ) consists of equivalence classes of functions.”

**Sources:**

- [F. Riesz, Untersuchungen über Systeme integrierbarer Funktionen, Math. Ann. 69 (1910), 449–497, doi:10.1007/BF01457637](https://doi.org/10.1007/BF01457637)

### Measured in mean square, every Fourier series converges

**Remember:** Measure the error by its energy, and Fourier series always converge.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 42A20. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** A sequence of functions gₙ converges to f in the L² norm, or in mean square, when ∫\|gₙ − f\|² → 0. In words, the integral of the squared error tends to 0.

**Problem.** The Fourier series of every square-integrable function converges to the function in the L² norm.

**How the definition helps.** Measuring the error in the L² norm makes the statement true for every square-integrable function. Pointwise it is false: some continuous functions have Fourier series that diverge at some points. In the L² norm, the partial sums converge by the Riesz–Fischer theorem. Our own remark: once the trigonometric functions are known to form a complete orthonormal system, the proof uses only facts about Hilbert spaces.

**Wikipedia:** [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series), [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “According to the Riesz–Fischer theorem, if ƒ is square-integrable then S<sub>N</sub>(f) converges to ƒ in the L²-norm”

**Sources:**

- [L. Carleson, On convergence and growth of partial sums of Fourier series, Acta Math. 116 (1966), 135–157, doi:10.1007/BF02392815 (for the pointwise question)](https://doi.org/10.1007/BF02392815)

### The Lebesgue integral makes L² complete

**Remember:** Riemann lets limits of Fourier series fall out of the space; Lebesgue keeps them.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 46C05. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** L² is the space of measurable functions whose square has finite Lebesgue integral. Two functions count as the same when they are equal almost everywhere. The inner product is ⟨f, g⟩ = ∫ f̄ g.

**Problem.** L² is complete (Riesz–Fischer, 1907). So every series in an orthonormal system with square-summable coefficients has a sum in L².

**How the definition helps.** The Lebesgue integral admits enough functions that limits stay in the space. With the Riemann integral, the square-integrable functions do not form a complete space, because not enough functions are Riemann integrable. The article says that completeness is the missing ingredient in eigenfunction expansions that fail to converge in L².

**Wikipedia:** [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space). It says: “The Lebesgue integral is essential to ensure completeness: on domains of real numbers, for instance, not enough functions are Riemann integrable.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiating a step gives delta

**Remember:** Move the derivative to the test function and read the jump.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions), 01A60. arXiv math.FA, math.HO. Level 2: later undergraduate.

**Definition.** On the real line, Schwartz’s distributions act on smooth test functions that vanish outside a bounded interval. A locally integrable function acts by integrating its product with each test function. Its distributional derivative acts by applying the original rule to the derivative of the test function and changing the sign. Ordinary differentiation misses the unit step’s jump.

**Problem.** The distributional derivative of the unit step is the Dirac delta, the rule that evaluates a test function at zero.

**How the definition helps.** Moving the derivative onto the test function turns the jump into a boundary value. In our own calculation, the unit step is zero to the left of zero and one to the right. Its derivative therefore integrates the negative derivative of the test function over the positive half-line. The fundamental theorem of calculus gives the value at zero, since the test function eventually vanishes. Integration by parts shows that the new derivative agrees with ordinary differentiation for smooth functions.

**Wikipedia:** [Dirac delta function](https://en.wikipedia.org/wiki/Dirac_delta_function). It says: “For instance, it is the distributional derivative of the Heaviside step function.”

**Sources:**

- [Laurent Schwartz, Généralisation de la notion de fonction et de dérivation, théorie des distributions (1948)](https://doi.org/10.1007/BF03020757)

### Local convexity is what the Hahn–Banach theorem needs

**Remember:** Convex neighbourhoods give seminorms, and seminorms give continuous linear functionals.

*Rules out counterexamples. Confidence: medium.* MSC 46A03 (General theory of locally convex spaces), 46A22. arXiv math.FA. Level 3: graduate.

**Definition.** A locally convex space is a topological vector space whose topology has a base of convex neighbourhoods of zero. Equivalently, a family of seminorms gives its topology.

**Problem.** In a Hausdorff locally convex space, every continuous linear functional on a subspace extends to a continuous linear functional on the whole space. So the continuous linear functionals separate points.

**How the definition helps.** The seminorms give the bounds that the Hahn–Banach extension needs. Without convexity the theorem fails. In Lᵖ\[0, 1\] with 0 &lt; p &lt; 1, the only convex neighbourhood of zero is the whole space, so the only continuous linear functional is zero (our own remark). Kalton's theorem gives a converse for complete metrizable spaces.

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

**Remember:** If the space is bornological, bounded and continuous mean the same.

*True by definition.* MSC 46A08 (Barrelled spaces, bornological spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A subset of a topological vector space is bounded when every neighbourhood of zero absorbs it after scaling. A locally convex space is bornological when every convex balanced set that absorbs all bounded sets is a neighbourhood of zero. Normed spaces, metrizable locally convex spaces and their inductive limits are bornological.

**Problem.** A linear map from a bornological space into a locally convex space is continuous exactly when it sends bounded sets to bounded sets.

**How the definition helps.** The definition asks for exactly the neighbourhoods that a bounded map pulls back. If a linear map sends bounded sets to bounded sets, the preimage of a convex balanced neighbourhood absorbs every bounded set (our own sketch). In a bornological space that preimage is a neighbourhood of zero, so the map is continuous (our own sketch). The work moves into showing that metrizable spaces and their inductive limits are bornological.

**Wikipedia:** [Bornological space](https://en.wikipedia.org/wiki/Bornological_space). It says: “Bornological spaces are distinguished by the property that a linear map from a bornological space into any locally convex spaces is continuous if and only if it is a bounded linear operator.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclear spaces make the Schwartz kernel theorem true

**Remember:** Every neighbourhood of zero holds a much smaller one, as in finite dimensions.

*Makes the theorem clean to state or prove.* MSC 46A11 (Spaces determined by compactness or summability properties (nuclear spaces, Schwartz spaces, Montel spaces, etc.)), 46A32, 46F05. arXiv math.FA. Level 3: graduate.

**Definition.** A locally convex space is nuclear if each seminorm p has a larger seminorm q for which the natural map from the q-completion to the p-completion is a nuclear operator. A nuclear operator is an absolutely summable series of rank-one operators. Informally, every neighbourhood of zero contains a much smaller one.

**Problem.** Every continuous linear map from test functions on Ω₂ to distributions on Ω₁ is given by a distribution on Ω₁ × Ω₂, its kernel. Also 𝒟′(Ω₁ × Ω₂) ≅ 𝒟′(Ω₁) ⊗̂ 𝒟′(Ω₂), where ⊗̂ is the completed tensor product.

**How the definition helps.** Nuclearity is the property that Grothendieck found to explain why the kernel theorem holds. The theorem fails if test functions and distributions are replaced by L² and its dual. For a nuclear space the projective and injective tensor products agree, so there is only one natural completed tensor product.

**Wikipedia:** [Nuclear space](https://en.wikipedia.org/wiki/Nuclear_space). It says: “Much of the theory of nuclear spaces was developed by Alexander Grothendieck while investigating the Schwartz kernel theorem”

**Sources:**

- [Grothendieck, A. (1955). Produits tensoriels topologiques et espaces nucléaires. Memoirs of the American Mathematical Society 16.](https://doi.org/10.1090/memo/0016)

### With the inductive limit topology every linear functional on polynomials is continuous

**Remember:** Continuity is tested on finite-dimensional pieces, where every linear map is continuous.

*True by definition. Confidence: medium.* MSC 46A13 (Spaces defined by inductive or projective limits (LB, LF, etc.)), 33C45. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** Let 𝒫ₙ be the polynomials of degree at most n, each with its usual finite-dimensional topology. The inductive limit topology on all polynomials 𝒫 is the finest topology that makes every inclusion of 𝒫ₙ into 𝒫 continuous.

**Problem.** Every linear functional on 𝒫, such as a moment functional of orthogonal polynomials, is continuous. Take a basis Rₙ with deg Rₙ = n, and let aₙ be its dual basis. Then each functional u expands as u = ∑ ⟨u, Rₙ⟩ aₙ in the weak dual topology.

**How the definition helps.** A linear map on a finite-dimensional space is always continuous, and this topology asks only for continuity on each 𝒫ₙ. This one-line reason is our own. So in this topology the algebraic and the topological duals agree by construction. Our own remark is that the expansion then follows from the pairing with each basis polynomial. In our own reading, this lets the paper treat moment functionals with the tools of distribution theory.

**Paper or page:** [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1), [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1). It says: “Let 𝒫 = ind lim 𝒫ₙ, as in, and let 𝒫\* and 𝒫′ be the algebraic and the topological duals of 𝒫, respectively. Then 𝒫′ = 𝒫\*.”

**Sources:**

- [K. Castillo, J. Petronilho, Classical orthogonal polynomials revisited, arXiv:2110.00401 (2021)](https://arxiv.org/abs/2110.00401v1)

### The weak-\* topology makes the dual unit ball compact

**Remember:** Fewer open sets make compactness easier, so the dual unit ball becomes compact.

*Makes the theorem clean to state or prove.* MSC 46A20 (Duality theory for topological vector spaces), 46A50. arXiv math.FA. Level 3: graduate.

**Definition.** Let X be a normed space with dual X′, the space of continuous linear functionals on X. The weak-\* topology on X′ is the coarsest topology in which every evaluation map f ↦ f(x), for x in X, is continuous. Coarsest means that it has the fewest open sets.

**Problem.** The Banach–Alaoglu theorem: the closed unit ball of X′ is compact in the weak-\* topology. This gives limits of bounded sequences of functionals or measures.

**How the definition helps.** The weak-\* topology has so few open sets that Tychonoff's theorem applies to the unit ball. It is the topology of pointwise convergence on X, so the dual ball sits inside a product of compact discs, one for each x in X. In the norm topology the unit ball is compact only in finite dimensions, by F. Riesz's theorem. Our own remark: the cost is that weak-\* limits keep less information; the norm can drop in the limit.

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

**How the definition helps.** Local convexity gives enough continuous linear functionals, and each functional finds a face where it is largest. The proof uses the Hahn–Banach separation theorem for this step (our own summary). The condition excludes Roberts's 1977 example: a nonempty compact convex set in Lᵖ\[0, 1\] with 0 &lt; p &lt; 1 that has no extreme points. That space has no nonzero continuous linear functionals, so the face argument has nothing to start from (our own remark). Linearity also matters: the page says the statement fails for weakly compact convex sets in CAT(0) spaces.

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

**How the definition helps.** If neither f nor its inverse can stretch a vector, then f keeps every length. An isomorphism has ‖f‖ ≤ 1 and ‖f⁻¹‖ ≤ 1, so it is a surjective linear isometry. With bounded maps, isomorphisms only preserve the topology. The nLab states the limits, colimits and closed monoidal structure; products carry the ℓ∞ norm and coproducts the completed ℓ¹ norm.

**nLab:** [Banach space](https://ncatlab.org/nlab/show/Banach+space), [Jordan-Banach algebra](https://ncatlab.org/nlab/show/Jordan-Banach+algebra). It says: “Another natural notion of isomorphism is a surjective linear isometry. In this case, we take a morphism to be a short linear map, or linear contraction: a linear map f such that ‖f‖ ≤ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Reflexivity uses the canonical map, so James' space is excluded

**Remember:** Reflexive means the evaluation map is onto, not merely some isomorphism.

*Rules out counterexamples.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces), 46B50. arXiv math.FA. Level 3: graduate.

**Definition.** The bidual of a Banach space X is the dual of its dual. The canonical map sends a point x to the functional 'evaluate at x'. X is reflexive when this canonical map is onto.

**Problem.** Kakutani's theorem says that a Banach space is reflexive exactly when its closed unit ball is weakly compact. Reflexive spaces also have the property that bounded closed convex sets are weakly compact.

**How the definition helps.** The canonical map turns the weak topology of X into the weak-\* topology of the bidual, so the Banach–Alaoglu theorem gives weak compactness of the ball (our own summary). Some other isomorphism with the bidual does not carry the topologies in this way (our own summary). James' space is isometric to its bidual, but its canonical image has codimension one, so its unit ball is not weakly compact (our own conclusion). The hard direction of Kakutani's theorem still needs Goldstine's theorem (our own).

**Wikipedia:** [Reflexive space](https://en.wikipedia.org/wiki/Reflexive_space). It says: “So importantly, for a Banach space to be reflexive, it is not enough for it to be isometrically isomorphic to its bidual; it is the canonical evaluation map in particular that has to be a homeomorphism.”

**Sources:**

- [R. C. James, A non-reflexive Banach space isometric with its second conjugate space, Proc. Nat. Acad. Sci. USA 37 (1951), 174–177](https://doi.org/10.1073/pnas.37.3.174)

### Completeness makes Schauder coordinates continuous

**Remember:** Completeness makes the coefficients depend continuously on the vector.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Schauder basis gives each vector a unique expansion that converges in norm in the chosen order. A Banach space is a normed space in which all Cauchy sequences converge.

**Problem.** Each coordinate functional of a Schauder basis in a Banach space is bounded. It sends a vector to its coefficient at a fixed basis position.

**How the definition helps.** In our own proof, completeness lets the bounded inverse theorem transfer continuity from coefficient sequences to vectors. Give each convergent expansion the supremum of its partial-sum norms, which makes the coefficient space complete. Summation is then a bounded bijection onto the space, and each coefficient is continuous in that norm. Our own counterexample uses finite sequences with the Euclidean norm and the basis e₁ followed by e₁ + eₙ for n ≥ 2. A unit vector with first entry zero and N later entries 1/√N has first coefficient −√N.

**Paper or page:** [Coordinate Functionals Associated with Schauder Basis of Banach Space are Bounded](https://proofwiki.org/wiki/Coordinate_Functionals_Associated_with_Schauder_Basis_of_Banach_Space_are_Bounded). It says: “Then each linear functional eₙ∗ is bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Riesz bases give stable unique coefficients

**Remember:** Two bounds control both synthesis and recovery.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Riesz basis spans a Hilbert space densely and has two-sided norm bounds on all finite linear combinations. These bounds compare the norm of the combination with the square-sum norm of its coefficients.

**Problem.** Every vector has a unique square-summable coefficient sequence in a Riesz basis. The map to coefficients and the map back are both bounded.

**How the definition helps.** In our own proof, the lower bound prevents large coefficient changes from producing small changes in the vector. The upper bound extends finite sums to a bounded map from square-summable sequences, and the lower bound makes it injective with closed range. Density then gives the whole Hilbert space as its range. Our own counterexample divides the nth unit vector of ℓ² by n. These vectors span densely and satisfy the upper bound, but recovering the nth unit vector needs a coefficient of size n.

**Wikipedia:** [Riesz sequence](https://en.wikipedia.org/wiki/Riesz_sequence). It says: “is an orthonormal basis for H and U : H → H is a bounded bijective operator.”

**Sources:** none listed. No primary source with a working link was found.

### Unconditional convergence makes a sum independent of order by definition

**Remember:** Unconditional means the sum puts no condition on the order.

*True by definition.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces), 40A05. arXiv math.FA. Level 3: graduate.

**Definition.** A series in a normed space converges unconditionally when every reordering of its terms converges. All the reorderings must also have the same sum.

**Problem.** In a finite-dimensional space, a series converges unconditionally exactly when it converges absolutely. Every infinite-dimensional Banach space has an unconditionally convergent series that does not converge absolutely (the Dvoretzky–Rogers theorem).

**How the definition helps.** With this definition, independence of order is true by definition. In every Banach space, absolute convergence implies unconditional convergence, and in finite dimensions the converse holds. In ℓ², our own example Σ eₙ/n converges unconditionally but not absolutely. So in infinite dimensions absolute convergence is too strong to serve as the definition, and the work moves into the Dvoretzky–Rogers theorem.

**Wikipedia:** [Unconditional convergence](https://en.wikipedia.org/wiki/Unconditional_convergence), [Absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). It says: “A theorem of A. Dvoretzky and C. A. Rogers asserts that every infinite-dimensional Banach space has an unconditionally convergent series that is not absolutely convergent.”

**Sources:**

- [A. Dvoretzky and C. A. Rogers, Absolute and unconditional convergence in normed linear spaces, Proc. Natl. Acad. Sci. USA 36 (1950), 192–197, doi:10.1073/pnas.36.3.192](https://doi.org/10.1073/pnas.36.3.192)

### A normed space is complete exactly when absolutely convergent series converge

**Remember:** Complete means every series with summable norms has a sum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46B20 (Geometry and structure of normed linear spaces), 46B15. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed vector space in which every Cauchy sequence converges. A series ∑ aₙ is absolutely convergent if the real series ∑ ‖aₙ‖ converges.

**Problem.** A normed vector space X is a Banach space if and only if every absolutely convergent series in X is convergent.

**How the definition helps.** This criterion replaces arbitrary Cauchy sequences by series with summable norms, which are often easier to handle. In our own example, it gives the usual short proof that the Lᵖ spaces are complete. There one sums a series of functions with summable norms. The hard direction is the converse, which is our own sketch. A Cauchy sequence has a fast subsequence, and its differences form an absolutely convergent series.

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

**Definition.** The ℓ¹ direct sum of Banach spaces Xᵢ contains the families (xᵢ) with Σ‖xᵢ‖ finite. Its norm is that sum. Other choices use the largest ‖xᵢ‖ (the ℓ∞ sum) or the square root of Σ‖xᵢ‖² (the ℓ² sum).

**Problem.** Let each Tᵢ be a linear map of norm at most one from a Banach space Xᵢ into one Banach space Z. Then exactly one bounded linear map on the ℓ¹ sum agrees with every Tᵢ. It has norm at most one.

**How the definition helps.** The ℓ¹ norm is the sum of the component norms, so ‖Σ Tᵢxᵢ‖ ≤ Σ‖xᵢ‖ by the triangle inequality. Completeness of Z makes this absolutely convergent series converge, and density of finitely supported families gives uniqueness. With the ℓ² norm the claim fails: if every Xᵢ and Z is ℂ and every Tᵢ is the identity, the sum map is unbounded (our own counterexample). The nLab states the result as the fact that the ℓ¹ sum is the coproduct for maps of norm at most one.

**nLab:** [direct sum of Banach spaces](https://ncatlab.org/nlab/show/direct+sum+of+Banach+spaces). It says: “If short linear maps are taken as the morphisms in the category of Banach spaces, then the ℓ¹-direct sum is the coproduct, and the ℓ∞-direct sum is the product.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convexity gives unique nearest points in closed subspaces

**Remember:** In a round space, almost-closest points crowd together.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if, for each ε &gt; 0, some δ &gt; 0 gives ‖(x + y)/2‖ ≤ 1 − δ for all unit vectors x and y with ‖x − y‖ ≥ ε. A closest point to f in a subspace Y is a point g of Y with ‖f − g‖ equal to the distance from f to Y.

**Problem.** In a uniformly convex Banach space, such as Lᵖ with 1 &lt; p &lt; ∞, every point has exactly one closest point in each closed subspace.

**How the definition helps.** Two almost-closest points that are far apart would have a midpoint that is closer still, which is impossible. So every minimizing sequence is a Cauchy sequence, and completeness gives the closest point; the same argument gives uniqueness. In our own example, ℝ² with the maximum norm is not uniformly convex: every point (0, t) with \|t\| ≤ 1 is closest to (1, 0). Proving that Lᵖ is uniformly convex still takes Clarkson's inequalities.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Let Y be a closed subspace of Lᵖ (1&lt;p&lt;∞). Then, for any f∉Y there is a unique closest point g∈Y, to f”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### Uniform convexity is a two-vector test that gives reflexivity

**Remember:** Round balls are reflexive balls.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if each ε &gt; 0 has a δ &gt; 0 with this property. Unit vectors x and y with ‖x − y‖ ≥ ε have ‖(x + y)/2‖ ≤ 1 − δ. So the midpoint of two unit vectors that are far apart lies well inside the unit ball. A space is reflexive if the natural map into its double dual is onto.

**Problem.** The Milman–Pettis theorem says that every uniformly convex Banach space is reflexive. Clarkson showed that Lᵖ is uniformly convex for 1 &lt; p &lt; ∞. So these Lᵖ spaces are reflexive, with no need to compute their duals.

**How the definition helps.** Uniform convexity is an inequality about two vectors at a time, so it replaces reflexivity, a statement about the double dual, with a norm inequality. So one checks reflexivity by checking a norm inequality, as the paper does for Lᵖ. The condition must be uniform: in our own example, ℓ¹ has an equivalent strictly convex norm but is not reflexive. Proving that Lᵖ is uniformly convex still takes Clarkson's inequalities.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Any uniformly convex Banach space is reflexive.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)
- [J. A. Clarkson, Uniformly convex spaces, Trans. Amer. Math. Soc. 40 (1936) 396–414](https://doi.org/10.1090/s0002-9947-1936-1501880-4)

### Uniform convexity turns weak convergence with converging norms into norm convergence

**Remember:** In a round ball, weak limits with full length are strong limits.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if unit vectors whose midpoint has norm near 1 must be close to each other. A Riesz–Radon space is one where xₙ → x weakly and ‖xₙ‖ → ‖x‖ together imply ‖xₙ − x‖ → 0. Here xₙ → x weakly means that f(xₙ) → f(x) for every continuous linear functional f.

**Problem.** In a uniformly convex Banach space, such as Lᵖ with 1 &lt; p &lt; ∞, weak convergence xₙ → x together with ‖xₙ‖ → ‖x‖ gives ‖xₙ − x‖ → 0. So every uniformly convex space is a Riesz–Radon space.

**How the definition helps.** The proof is almost the definition. If xₙ → x weakly, then (xₙ + x)/2 → x weakly, so the limit of its norms is at least ‖x‖. Uniform convexity then forces xₙ and x to be close. The condition excludes spaces like L¹. In our own example, the functions 1 + sin(nt) on \[0, 2π\] converge weakly to 1 and have the same L¹ norm as 1, but do not converge in norm.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Every uniformly convex Banach space is a Riesz–Radon space.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### The approximation property makes compact operators limits of finite-rank operators

**Remember:** Finite-rank approximation of compact operators works exactly where the approximation property holds.

*True by definition.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 47B07. arXiv math.FA. Level 3: graduate.

**Definition.** Take a compact set K in a Banach space X and a number ε &gt; 0. X has the approximation property when, for all such K and ε, some finite-rank operator T moves each point of K by less than ε. A compact operator maps bounded sets to sets with compact closure. A finite-rank operator has a finite-dimensional range.

**Problem.** If a Banach space X has the approximation property, then every compact operator from a Banach space into X is a norm limit of finite-rank operators.

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

**How the definition helps.** The injective norm is a supremum over test functionals, so it depends only on which tests exist. By the Hahn–Banach theorem, the tests of norm at most one on V are exactly the restrictions of such tests on X. So a tensor in V ⊗ W has the same supremum in both spaces. The projective norm is an infimum over decompositions, and X ⊗ Y can allow shorter decompositions than V ⊗ W. The nLab quote gives only the fact that λ ⊗ μ is a functional on the tensor product, so this account is our own.

**nLab:** [tensor product of Banach spaces](https://ncatlab.org/nlab/show/tensor+product+of+Banach+spaces). It says: “If λ and μ are linear functionals on V and W (respectively), then λ ⊗ μ is a linear functional on V ⊗ W.”

**Sources:** none listed. No primary source with a working link was found.

### The projective tensor norm makes Banach spaces a closed monoidal category

**Remember:** The largest reasonable norm turns bilinear maps into linear maps on the tensor product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 46M05, 18D15. arXiv math.FA, math.CT. Level 3: graduate.

**Definition.** Write a tensor x in V ⊗ W as a sum Σ αᵢ vᵢ ⊗ wᵢ. Its projective norm is the infimum of Σ\|αᵢ\|‖vᵢ‖‖wᵢ‖ over all such sums. The projective tensor product is the completion under this norm. A short linear map is one of norm at most 1.

**Problem.** With the projective tensor product, short linear maps from V ⊗ W to U correspond exactly to short linear maps from V into the bounded linear maps from W to U. So Banach spaces with short linear maps form a closed symmetric monoidal category.

**How the definition helps.** The projective norm is an infimum over all ways to write a tensor, so bounded bilinear maps extend with the same norm (our own). So short linear maps out of the tensor product are short bilinear maps, which are short maps into a space of operators (our own). The injective norm, the smallest cross norm, does not make the category closed (our own remark).

**nLab:** [tensor product of Banach spaces](https://ncatlab.org/nlab/show/tensor+product+of+Banach+spaces). It says: “One of these, the projective tensor product, makes Ban (the category of Banach spaces and short linear maps) into a closed symmetric monoidal category”

**Sources:**

- [A. Grothendieck, Produits tensoriels topologiques et espaces nucléaires, Memoirs of the AMS 16 (1955)](https://doi.org/10.1090/memo/0016)

### Uniform integrability and tightness describe the weakly compact sets of L¹

**Remember:** No mass may pile up at a point or run off to infinity.

*Rules out counterexamples.* MSC 46B50 (Compactness in Banach (or normed) spaces), 46E30. arXiv math.FA. Level 3: graduate.

**Definition.** A family of integrable functions is uniformly integrable if the integral of \|u\| over A is small for all u at once whenever A has small measure. It is tight if, for each ε &gt; 0, one set of finite measure carries all but ε of the integral of every \|u\|.

**Problem.** A sequence in L¹ is relatively weakly compact exactly when it is bounded, uniformly integrable and tight (the Dunford–Pettis theorem).

**How the definition helps.** The two conditions name exactly the two ways that a bounded sequence in L¹ can lose its weak limit. Uniform integrability excludes concentration: n times the indicator of \[0, 1/n\] has norm 1 but tends to a point mass (our own example). Tightness excludes escape: the indicators of \[n, n + 1\] have norm 1 but drift off to infinity. Proving that the conditions are sufficient still takes real work (our own remark).

**Paper or page:** [Banach-Saks Theorem for L¹ revisited](https://arxiv.org/abs/2311.07319v1). It says: “For sequence (uₙ)ₙ⊂L¹(X), the following assertions are equivalent. (i) The sequence (uₙ)ₙ is relatively weakly compact in L¹(X). (ii) The sequence (uₙ)ₙ is bounded in L¹(X), uniformly integrable and tight.”

**Sources:**

- [Guy Foghem, Banach-Saks Theorem for L¹ revisited, arXiv:2311.07319 (2023), Approx. Theory Spec. Funct. 2 (2026) 1–13](https://arxiv.org/abs/2311.07319v1)

### Weak-type bounds let Marcinkiewicz interpolate from endpoints where strong bounds fail

**Remember:** Weak at both ends is strong in between.

*Makes the theorem clean to state or prove.* MSC 46B70 (Interpolation between normed linear spaces), 42B25. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** An operator T is of weak type (p, p) if, for every λ &gt; 0, the set where \|Tf\| &gt; λ has measure at most (C‖f‖ₚ/λ)ᵖ. It is of strong type (p, p) if it is bounded on Lᵖ. Every strong-type bound gives a weak-type bound by Chebyshev's inequality.

**Problem.** If a sublinear operator is of weak type (p₀, p₀) and (p₁, p₁), with 1 ≤ p₀ &lt; p₁ ≤ ∞, then it is of strong type (p, p) for every p strictly between. The Hardy–Littlewood maximal operator is of weak type (1, 1) and bounded on L∞. So it is bounded on Lᵖ for every p &gt; 1.

**How the definition helps.** The weak-type definition asks only for a bound on the size of level sets, and that is what endpoint operators satisfy. So the interpolation can start from an endpoint where the strong bound is false. In our own example, the maximal function of the indicator of \[0, 1\] decays like 1/\|x\|, so it is not in L¹ but satisfies the weak bound. The interpolation proof needs only a splitting of f at height λ (our own remark).

**Paper or page:** [Embeddings of Weighted Morrey Spaces](https://arxiv.org/abs/2508.03387v1). It says: “Let 1≤p₀&lt;p₁≤∞ and an operator T: ℝⁿ→ℝⁿ be sublinear and of weak-type (p₀,p₀) and weak-type (p₁,p₁). Then T is of strong-type (p,p) for all p₀&lt;p&lt;p₁.”

**Sources:**

- [Marcus Gerhold, Embeddings of Weighted Morrey Spaces, arXiv:2508.03387 (2025)](https://arxiv.org/abs/2508.03387v1)

### Completeness gives Hilbert spaces the Riesz and projection theorems

**Remember:** An inner product gives angles; completeness makes sure that the limits are in the space.

*Rules out counterexamples.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 3: graduate.

**Definition.** A Hilbert space is an inner product space that is complete for the distance defined by the inner product. Complete means that every Cauchy sequence converges to a point of the space.

**Problem.** In a Hilbert space H, every continuous linear functional is the inner product with a fixed vector. Every point of H has a unique nearest point in each nonempty closed convex set.

**How the definition helps.** The proofs need limits of Cauchy sequences, and completeness makes sure that these limits are in the space. For the projection theorem, the parallelogram law shows that a minimizing sequence is Cauchy, and completeness gives its limit. The article notes that the dual of any inner product space is identified with its completion. So in an incomplete space, some continuous functionals are not the inner product with any vector of the space.

**Wikipedia:** [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space). It says: “The Riesz representation theorem relies fundamentally not just on the presence of an inner product, but also on the completeness of the space.”

**Sources:** none listed. No primary source with a working link was found.

### Converging distances to C make cluster points in C force weak convergence

**Remember:** Two candidate limits cannot give opposite answers to the same distance test.

*Makes the theorem clean to state or prove.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 46B10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A sequence in a real Hilbert space is an Opial sequence for a nonempty set C if its distance to each point of C converges. A weak cluster point is a weak limit of some subsequence, where weak convergence means that the inner product with each fixed vector converges.

**Problem.** An Opial sequence for C converges weakly to a point of C exactly when all its weak cluster points lie in C.

**How the definition helps.** For c and d in C, the definition makes ‖xₙ − c‖² − ‖xₙ − d‖² converge, and it is affine in xₙ. Along a subsequence tending weakly to c it tends to −‖c − d‖², and along one tending to d it tends to ‖c − d‖². The two limits agree, so c = d (our own proof, the standard one). The distances converge, so the sequence is bounded and has weak cluster points by weak compactness. A bounded sequence with one weak cluster point converges weakly to it.

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

**Problem.** Every reproducing kernel Hilbert space H has a kernel K with f(x) = ⟨f, K(·, x)⟩ for every f in H and every x in X.

**How the definition helps.** The kernel comes straight from the Riesz representation theorem. Each continuous evaluation functional is the inner product with a unique vector Kₓ, and K(y, x) = Kₓ(y) is the reproducing kernel. Our own remark: L²(ℝ) is not such a space, because its elements are classes of functions and f(x) has no meaning. The converse, building the space from a positive-definite kernel, is the substantial Moore–Aronszajn theorem.

**Wikipedia:** [Reproducing kernel Hilbert space](https://en.wikipedia.org/wiki/Reproducing_kernel_Hilbert_space). It says: “Such a reproducing kernel exists if and only if every evaluation functional is continuous.”

**Sources:**

- [Aronszajn, N. (1950). Theory of reproducing kernels. Transactions of the American Mathematical Society 68(3), 337–404.](https://doi.org/10.1090/S0002-9947-1950-0051437-7)

### Range norms make rows reproduce

**Remember:** Measure outputs by inputs and the rows become evaluation vectors.

*True by definition.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 45P05. arXiv math.FA. Level 3: graduate.

**Definition.** For each point x choose a real square-integrable kernel row kₓ. Map an input g to the function Lg with value ⟨g,kₓ⟩ at x. Give each output the norm of its shortest input, with equality of outputs at every point.

**Problem.** The range is a Hilbert space with continuous point evaluations. Its reproducing kernel, which represents evaluation by an inner product, is the inner product of two kernel rows.

**How the definition helps.** The shortest-input norm makes evaluation at x an inner product with the output Lkₓ. Our own extension of the finite-rank argument identifies each shortest input by projection perpendicular to the null space of L. That null space is closed because it is the intersection of the orthogonal complements of all rows. Every row is already perpendicular to it. Thus the range is complete and its kernel has values ⟨kₓ,kᵧ⟩.

**Paper or page:** [Minimal-norm solution to the Fredholm integral equations of the first kind via the H-HK formulation](https://arxiv.org/abs/2406.07303v1). It says: “R(L) is a RKHS with reproducing kernel defined by K(x,x′) = Gᵀ(x)HG(x′), x,x′ ∈ D.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Lorentz norms by decreasing rearrangement makes them rearrangement invariant

**Remember:** Same level-set measures give the same decreasing rearrangement.

*True by definition.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 28A25. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** The decreasing rearrangement of \|f\| is the nonincreasing function on \[0, ∞) whose superlevel sets have the same measures as those of \|f\|. Define the Lorentz quasinorm of f as a weighted Lᵖ-type integral of this rearrangement. A quasinorm is like a norm, but its triangle inequality holds only up to a constant factor.

**Problem.** Fix the Lorentz exponents. Suppose {\|f\| &gt; t} and {\|g\| &gt; t} have equal measures for every t &gt; 0. Then f and g have equal Lorentz quasinorms.

**How the definition helps.** The quasinorm is a formula in the decreasing rearrangement, which depends only on the measures of the superlevel sets. Wikipedia says the invariance holds essentially by definition. The work moves into building the rearrangement and checking that it has the same superlevel set measures, in our own account.

**Wikipedia:** [Lorentz space](https://en.wikipedia.org/wiki/Lorentz_space). It says: “The quasinorm is invariant under rearranging the values of the function f, essentially by definition.”

**Sources:** none listed. No primary source with a working link was found.

### Doubling makes simple functions dense in Orlicz spaces

**Remember:** Doubling lets one integrable scale control every smaller norm error.

*Rules out counterexamples.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** An Orlicz space uses a convex increasing function Φ on nonnegative numbers, with Φ(0) = 0 and Φ(t) tending to infinity. A measurable function f belongs if Φ(c\|f\|) has finite integral for some c &gt; 0. The doubling condition requires Φ(2t) ≤ CΦ(t) for one constant C and every t ≥ 0.

**Problem.** On a finite measure space, measurable functions taking finitely many values are dense in the Orlicz space when Φ satisfies the doubling condition.

**How the definition helps.** In our own proof, repeated doubling makes Φ(c\|f\|) integrable at every positive scale c. Truncation and approximation by finite-valued functions then give errors whose integrals at any fixed scale tend to zero by dominated convergence. Our own counterexample on (0,1) uses Φ(t) = exp(t) − 1 and f(x) = log(1/x), for which Φ(\|f\|/2) is integrable. For every bounded simple g, the integral of Φ(\|f − g\|) diverges like that of 1/x near zero, so the Luxemburg norm of f − g is at least one.

**Paper or page:** [Convolutions of Orlicz spaces and Orlicz Schatten classes, with applications to Toeplitz operators](https://arxiv.org/abs/2505.01707v2). It says: “if $\\Phi$ is a quasi-Young function which satisfies a $\\Delta<sub>2</sub>$-condition, then the simple functions are dense in $L<sup>\\Phi</sup>(d\\mu)$;”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev norms make higher-to-lower order circle embeddings compact

**Remember:** Discard high frequencies and the error tends uniformly to zero on bounded sets.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42A16. arXiv math.AP, math.FA. Level 3: graduate.

**Definition.** On the circle, Hˢ consists of the distributions whose Fourier coefficients f̂(n) make the sum of (1 + n²)ˢ\|f̂(n)\|² finite. For nonnegative integers s, the usual definition asks instead for square-integrable weak derivatives through order s.

**Problem.** For real s &gt; t, the inclusion Hˢ → Hᵗ on the circle is compact. This means it maps bounded sets to sets with compact closure.

**How the definition helps.** Fourier weights make the inclusion diagonal with entries tending to zero, in our own proof. In coefficient terms the diagonal entries are (1 + n²) to the power (t − s)/2. Keeping finitely many frequencies gives finite-rank approximations whose operator-norm errors tend to zero. The work moves into Parseval’s identity and the Fourier rule for derivatives.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Both representations follow easily from Parseval's theorem and the fact that differentiation is equivalent to multiplying the Fourier coefficient by in.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights admit the delta exactly below order −n/2

**Remember:** The delta has a flat transform, so the weight must supply all the decay.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 46F12. arXiv math.AP. Level 3: graduate.

**Definition.** The Sobolev space Hˢ(ℝⁿ), for real s, consists of the tempered distributions whose Fourier transforms are square-integrable after multiplication by (1 + \|ξ\|²) to the power s/2. The usual integer-order definition uses weak derivatives and does not cover negative orders on its own.

**Problem.** The Dirac delta δ, which evaluates a test function at zero, belongs to Hˢ(ℝⁿ) exactly when s &lt; −n/2.

**How the definition helps.** Fourier weights turn membership into one test for integrability, in our own computation. The delta transforms to a constant, so membership asks whether (1 + \|ξ\|²) to the power s is integrable. Polar coordinates give convergence exactly when 2s &lt; −n. The work moves into defining Fourier transforms of distributions and proving Plancherel’s norm identity, which connects the two definitions at nonnegative integer orders.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “This motivates Sobolev spaces with non-integer order since in the above definition we can replace k by any real number s.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give continuity above order n/2

**Remember:** A sufficiently strong Fourier weight makes the transform integrable and the function continuous.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, Hˢ(ℝⁿ) consists of the square-integrable functions whose Fourier transforms remain square-integrable after multiplication by (1 + \|ξ\|²) to the power s/2. The norm is the square-integral norm of that product. The usual integer-order definition requires square-integrable weak derivatives through that order.

**Problem.** If s &gt; n/2, each f in Hˢ(ℝⁿ) agrees almost everywhere with a bounded continuous function. Its supremum norm is bounded by a constant times the Hˢ norm of f.

**How the definition helps.** Fourier weights yield an integrable transform by one use of Cauchy–Schwarz, in our own proof. The bound is the Hˢ norm times the square root of the integral of (1 + \|ξ\|²) to the power −s. That integral converges exactly when s &gt; n/2. Fourier inversion of an integrable transform gives the bounded continuous representative. The work moves into Fourier inversion and Plancherel’s norm identity, which identifies the spaces at integer orders.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “For k &gt; n/p, the space Wᵏ,ᵖ(Ω) will contain only continuous functions, but for which k this is already true depends both on p and on the dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give global regularity for constant-coefficient elliptic operators

**Remember:** At high frequencies, the elliptic symbol pays for the extra derivatives.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35B65, 35J30. arXiv math.AP. Level 3: graduate.

**Definition.** For a constant-coefficient scalar differential operator P of order m, its symbol is the polynomial that multiplies the Fourier transform when P acts. The operator is elliptic if the degree-m part of this polynomial never vanishes at a nonzero real frequency. For real r, define Hʳ by requiring the Fourier transform times (1 + \|ξ\|²) to the power r/2 to be square-integrable. The usual nonnegative integer definition instead requires square-integrable weak derivatives through order r.

**Problem.** Let P be elliptic and have constant coefficients on ℝⁿ. If u is in Hᵗ and Pu is in Hˢ for real s and t, then u is in Hˢ⁺ᵐ.

**How the definition helps.** Fourier weights make global regularity an estimate on the polynomial symbol, in our own proof. Ellipticity and compactness of the unit sphere bound the symbol below by a positive multiple of \|ξ\|ᵐ at high frequencies. Dividing by that bound controls the Hˢ⁺ᵐ weight of û by the Hˢ weight of the transform of Pu, and on bounded frequencies the Hᵗ assumption gives control. Variable coefficients need a different argument because Fourier transformation does not turn them into scalar multipliers.

**Wikipedia:** [Elliptic operator](https://en.wikipedia.org/wiki/Elliptic_operator), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The elliptic regularity theorem guarantees that, provided f is square-integrable, u will in fact have 2k square-integrable weak derivatives.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights show why traces lose half a derivative

**Remember:** Integrating over the normal frequency costs half a derivative.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, Hˢ(ℝⁿ) consists of square-integrable functions whose Fourier transforms remain square-integrable after multiplication by (1 + \|ξ\|²) to the power s/2. The trace of a smooth function is its restriction to the hyperplane xₙ = 0. The usual first-order proof uses the fundamental theorem of calculus along lines perpendicular to the hyperplane.

**Problem.** Let n ≥ 2 and s &gt; 1/2. The trace extends from smooth, rapidly decreasing functions to a bounded linear map Hˢ(ℝⁿ) → Hˢ⁻¹⁄²(ℝⁿ⁻¹).

**How the definition helps.** Fourier inversion turns restriction into integration over one frequency, and the weight gives the loss directly in our own proof. The transform of the trace at ξ′ is the integral of û(ξ′, ξₙ) over ξₙ. Cauchy–Schwarz with the Hˢ weight and its reciprocal bounds it, and the squared reciprocal integrates to a constant times (1 + \|ξ′\|²) to the power 1/2 − s. Integrating the bound in ξ′ gives the trace estimate.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Intuitively, taking the trace costs 1/p of a derivative.”

**Sources:** none listed. No primary source with a working link was found.

### Sobolev spaces make Dirichlet's principle true

**Remember:** Widen the space until the minimizing sequence has somewhere to converge.

*Makes the theorem clean to state or prove.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25, 49J05. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** A Sobolev space Wᵏ,ᵖ contains the Lᵖ functions whose weak derivatives up to order k are also in Lᵖ. A weak derivative is defined by integration by parts against smooth test functions with compact support. With weak derivatives the space is complete, and for 1 &lt; p &lt; ∞ it is reflexive.

**Problem.** On a bounded domain, among the functions in W¹,² with given boundary values, the Dirichlet energy ∫\|∇u\|² attains its minimum (Dirichlet's principle). The minimizer is a weak solution of the Laplace equation with those boundary values.

**How the definition helps.** In a reflexive Sobolev space, a bounded minimizing sequence has a weakly convergent subsequence. The convex energy is weakly lower semicontinuous, so the limit is a minimizer and a weak solution. Weierstrass's 1870 example, ∫ (x φ′)² dx on \[−1, 1\] with different end values, has infimum 0 that is not attained, which broke Riemann's reasoning. What stays hard is regularity: to show that the weak minimizer is smooth.

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

**Definition.** Let H be the completion of the smooth functions on an open set Ω with finite Sobolev norm. That norm sums the Lᵖ norms of a function and its derivatives up to order k. The space W instead takes Lᵖ functions whose weak derivatives up to order k lie in Lᵖ. A weak derivative is defined by moving the derivative onto test functions inside an integral.

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

**How the definition helps.** On the Fourier side, both potentials divide by powers of the same weight 1 + 4π²\|ξ\|², so the exponents add. With the integral definition, the same fact is the kernel identity Gₛ ∗ Gₜ = Gₛ₊ₜ, which needs a computation with Bessel functions. The work moves to showing that Gₛ has the right Fourier transform. One way writes Gₛ as an integral of heat kernels, whose Fourier transforms are Gaussians. Wikipedia gives both definitions; the comparison is our own.

**Wikipedia:** [Bessel potential](https://en.wikipedia.org/wiki/Bessel_potential). It says: “The Bessel potential acts by multiplication on the Fourier transforms”

**Sources:**

- [Nachman Aronszajn and K. T. Smith, Theory of Bessel potentials. I (1961)](https://doi.org/10.5802/aif.116)

### The quotient norm on boundary values gives an isometric extension operator

**Remember:** The shortest extension is perpendicular to every function with zero trace.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 46C05. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** Let Ω be a bounded Lipschitz domain, and let H¹(Ω) be the functions in L²(Ω) whose first derivatives are also in L²(Ω). The trace of u is its boundary value, defined by restriction for smooth u and extended by continuity. Give a boundary value g the norm inf ‖u‖ over all u in H¹(Ω) with trace g. The Sobolev–Slobodeckij norm on H½(∂Ω) instead uses a double integral of difference quotients on the boundary.

**Problem.** For this norm, there is a linear map E from boundary values to H¹(Ω) such that Eg has trace g and ‖Eg‖ = ‖g‖. With the Sobolev–Slobodeckij norm, such a map is only bounded.

**How the definition helps.** With the quotient norm, the space of boundary values is H¹(Ω) divided by the kernel H¹₀(Ω) of the trace. In a Hilbert space, each coset of a closed subspace has exactly one shortest element, the one perpendicular to the subspace. Sending g to that element is linear and keeps norms. The work is the trace theorem, which makes the trace continuous and identifies the image with H½(∂Ω) under an equivalent norm. Wikipedia states the trace theorem; the extension argument is our own.

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

**How the definition helps.** Allowing exceptions of zero p-modulus removes precisely the obstruction in our own example. Use the weight 1/\|x\| inside the unit ball and zero outside. It belongs to Lᵖ when p &lt; n, but every curve from the origin to another point accumulates infinite line integral. A straight segment leaving the origin violates the ordinary upper gradient bound with gradient zero. The cited lemma gives actual upper gradients at arbitrarily small extra cost in the integral of the pth power.

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

**How the definition helps.** Taking the closure makes zero extension continuous because extension preserves the H¹ norm on smooth functions supported inside. In our own proof, extending an approximating sequence gives the required limit on the whole space. The trace theorem identifies this closure with the functions of zero trace. Our own counterexample extends the constant one from an interval by zero. Its derivative contains endpoint point masses and cannot be square-integrable.

**Wikipedia:** [Trace operator](https://en.wikipedia.org/wiki/Trace_operator). It says: “is the subspace of functions in W¹˒ᵖ(Ω) with trace zero.”

**Sources:** none listed. No primary source with a working link was found.

### Rapid decay of all derivatives makes Schwartz space Fourier invariant

**Remember:** Fourier swaps derivatives and powers, and Schwartz functions control both.

*True by definition.* MSC 46F05 (Topological linear spaces of test functions, distributions and ultradistributions), 42B10. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Schwartz space consists of smooth functions f on ℝⁿ for which every polynomial times every derivative of f is bounded. This includes the derivative of order zero, which is f itself. The larger space L¹ only requires integrability and need not contain the Fourier transform of each of its members.

**Problem.** The Fourier transform maps the Schwartz space into itself.

**How the definition helps.** The definition pairs derivatives with polynomial weights, exactly the two operations the Fourier transform swaps in our own proof. Each polynomial times a derivative of f̂ is a finite linear combination of transforms of derivatives of polynomials times f. Those derivatives are integrable by the defining bounds. Their transforms are therefore bounded, which gives the defining bounds for f̂. The work moves into proving the rules for multiplication and differentiation by integration by parts and differentiation under the integral.

**Wikipedia:** [Schwartz space](https://en.wikipedia.org/wiki/Schwartz_space). It says: “This space has the important property that the Fourier transform is an automorphism on this space.”

**Sources:** none listed. No primary source with a working link was found.

### Weak convergence of distributions makes differentiation pass to limits by definition

**Remember:** The derivative just swaps in another test function.

*True by definition.* MSC 46F05 (Topological linear spaces of test functions, distributions and ultradistributions), 46F10. arXiv math.FA. Level 3: graduate.

**Definition.** A distribution is a continuous linear functional on test functions, which are smooth functions that vanish outside a bounded set. Say Tₙ → T when Tₙ(φ) → T(φ) for each test function φ. Define the derivative by T′(φ) = −T(φ′).

**Problem.** If distributions Tₙ converge to T in this sense, then Tₙ′ converges to T′.

**How the definition helps.** Each Tₙ′(φ) equals −Tₙ(φ′), and φ′ is again a fixed test function, so the limit passes through. This one-line proof is our own. Classical derivatives can fail this: sin(n²x)/n tends to zero uniformly, but its derivatives n cos(n²x) do not converge pointwise, in our own example. The work moves to showing that T′ is a distribution, which needs φ ↦ φ′ to be continuous on test functions.

**Paper or page:** [Distributional Derivative on Distributions is Continuous Operator](https://proofwiki.org/wiki/Distributional_Derivative_on_Distributions_is_Continuous_Operator). It says: “The distributional derivative on Schwartz distributions is a continuous operator.”

**Sources:** none listed. No primary source with a working link was found.

### Defining convolution by tensor product and addition makes distribution convolution commutative

**Remember:** Swapping x and y does not change x + y.

*True by definition. Confidence: medium.* MSC 46F10 (Operations with distributions and generalized functions). arXiv math.FA. Level 3: graduate.

**Definition.** The tensor product u ⊗ v of two distributions on ℝⁿ is a distribution on ℝⁿ × ℝⁿ. Define u ∗ v by testing u ⊗ v on φ(x + y), with a cutoff when that test lacks compact support. The nLab instead fixes u ∗ v by (u ∗ v) ∗ f = u ∗ (v ∗ f) for smooth f.

**Problem.** Let u and v be distributions on ℝⁿ, and let at least one of them have compact support. Then u ∗ v = v ∗ u.

**How the definition helps.** Addition is symmetric, so commutativity reduces to the symmetry of the tensor product under swapping its factors. That symmetry is the Fubini theorem for distributions, which says that u in x and v in y can act in either order. The work goes into constructing the tensor product, proving this Fubini theorem, and showing that the two definitions agree. With the nLab definition, commutativity is not visible, because u and v play different roles. The nLab gives only the iterated definition, so this account is our own.

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

**Problem.** Every distribution has derivatives of every order, and the usual rules for derivatives hold. So every locally integrable function also has such derivatives.

**How the definition helps.** The definition moves the derivative onto the test function, and φ′ is again a test function, so the formula always makes sense. The formula copies integration by parts, so for smooth f the derivative of the distribution of f is the distribution of f′. For example, the derivative of the Heaviside step function is the Dirac delta (our own example). The cost comes elsewhere: Schwartz's impossibility theorem shows that no product of general distributions keeps all the algebraic rules of the pointwise product.

**Wikipedia:** [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “It turns out that this is the proper definition; it extends the ordinary definition of derivative, every distribution becomes infinitely differentiable and the usual properties of derivatives hold.”

**Sources:** none listed. No primary source with a working link was found.

### The principal value makes 1/x a distribution that solves x·F = 1

**Remember:** Cut out a symmetric gap, and the two infinities cancel.

*Makes the theorem clean to state or prove.* MSC 46F10 (Operations with distributions and generalized functions), 26A42. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** The Cauchy principal value of f is the limit as ε → 0 of the integral of f over the real line without (−ε, ε). The distribution PV(1/x) sends a smooth function b with compact support to the principal value of b(x)/x.

**Problem.** The principal value PV(1/x) is a distribution with x·PV(1/x) = 1. The distributions F on ℝ with x·F = 1 are exactly PV(1/x) + cδ for constants c, where δ is the Dirac delta.

**How the definition helps.** Cutting a symmetric gap makes the large positive and negative parts near 0 cancel, so the limit exists for every smooth test function. Integration against 1/x itself defines no distribution, because 1/x is not integrable near 0. Since x·δ = 0, every PV(1/x) + cδ is a solution, and these are all, because x·G = 0 forces G = cδ (our own).

**nLab:** [Cauchy principal value](https://ncatlab.org/nlab/show/Cauchy+principal+value). It says: “When the Cauchy principal value exists but the full integral does not (hence when the full integral "diverges") one may think of the Cauchy principal value as "exracting a finite value from a diverging quantity".”

**Sources:** none listed. No primary source with a working link was found.

### The test-function definition makes distribution convolution associative

**Remember:** Both parenthesizations produce the same successive convolutions with every test function.

*True by definition.* MSC 46F10 (Operations with distributions and generalized functions). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** A distribution is a continuous linear functional on test functions, which are smooth functions of compact support. Write u ⋆ f for the function x ↦ u(y ↦ f(x − y)). For compactly supported v, define u⋆v as the unique distribution with (u⋆v)⋆f = u⋆(v⋆f) for every test function f. Alternatively, apply the distributions u and v in their respective variables to f(x + y), with a cutoff if needed.

**Problem.** Let u, v and w be distributions on ℝⁿ with v and w of compact support. Then (u ⋆ v) ⋆ w = u ⋆ (v ⋆ w).

**How the definition helps.** The test-function definition makes both parenthesizations act by the same three successive convolutions, in our own proof. After convolving with a test function f, both sides reduce to u ⋆ (v ⋆ (w ⋆ f)). This is valid because w ⋆ f remains a test function and v ⋆ w has compact support. Two distributions with the same convolutions against all test functions are equal by evaluating at zero with reflected test functions. The work moves into showing the distribution in the definition exists, for example by constructing it using the tensor product.

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

**Remember:** Fourier duality takes degree m to degree −n − m.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F12 (Integral transforms in distribution spaces), 46F10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A tempered distribution S is a continuous linear functional on the Schwartz space of smooth, rapidly decreasing functions. Set φₜ(x) = t⁻ⁿφ(x/t) for t &gt; 0, and call S homogeneous of degree m if S(φₜ) = tᵐS(φ) for all φ and t. Its Fourier transform is defined by duality, Ŝ(φ) = S(φ̂).

**Problem.** If a tempered distribution S on ℝⁿ is homogeneous of degree m, then Ŝ is homogeneous of degree −n − m.

**How the definition helps.** Fourier duality lets us state the scaling rule even for functions whose classical Fourier integral does not converge, in our own account. For instance, \|x\| to the power −a is not integrable at infinity when 0 &lt; a &lt; n. In our own proof, the Fourier transform of φₜ is t⁻ⁿ times the dilation of φ̂ by 1/t in the same test function convention. Applying S gives the factor t⁻ⁿt⁻ᵐ. The work moves into the Fourier transform on test functions and the change of variables that gives this dilation identity.

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

**How the definition helps.** Fourier duality puts the derivative on the test function, so the usual test-function rule proves the distribution identity in our own argument. Applied to φ, the transform of ∂ⱼu gives −u(∂ⱼφ̂). Differentiating the Fourier integral gives ∂ⱼφ̂ as the transform of −2πixⱼφ. The result is therefore û(2πixⱼφ), the action of 2πiξⱼû on φ. The work moves into proving that the Fourier transform preserves these test functions and justifying differentiation in the Fourier integral.

**Wikipedia:** [Fourier transform](https://en.wikipedia.org/wiki/Fourier_transform). It says: “Distributions can be differentiated and the above-mentioned compatibility of the Fourier transform with differentiation and convolution remains true for tempered distributions.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiability as linear approximation excludes discontinuous functions with all directional derivatives

**Remember:** Approach from every direction at once, not one line at a time.

*Rules out counterexamples.* MSC 46G05 (Derivatives of functions in infinite-dimensional spaces), 26B05. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A map f between normed spaces is Fréchet differentiable at x if some bounded linear map A makes the error small. The error is ‖f(x+h) − f(x) − Ah‖, and the error divided by ‖h‖ must tend to 0 as h → 0. The weaker Gateaux derivative asks only that each directional derivative exists.

**Problem.** A map that is Fréchet differentiable at x is continuous at x. A composition of Fréchet differentiable maps is Fréchet differentiable, and its derivative is the composition of the derivatives.

**How the definition helps.** The Fréchet definition asks the error to be small uniformly in all directions, so continuity and the chain rule follow. The directional version can fail both (our own for the chain rule). The function x³y/(x⁶ + y²), with value 0 at the origin, has all directional derivatives equal to 0 there. But it is not continuous there, since it equals 1/2 on the curve (t, t³).

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

**Definition.** Let f map a measure space into a Banach space V. Call f Pettis integrable when, for each measurable set A, some vector e<sub>A</sub> in V satisfies φ(e<sub>A</sub>) = ∫<sub>A</sub> φ ∘ f dμ for every continuous linear functional φ. The Bochner integral instead approximates f by simple functions in the integral of the norm.

**Problem.** Let T be a continuous linear operator between Banach spaces and f be Pettis integrable. Then T ∘ f is Pettis integrable, and its integral is T applied to the integral of f.

**How the definition helps.** In our own proof, a functional ψ on the target composed with T is a functional on the source. So the defining test passes straight through T. Hence ψ(T(e)) equals the integral of ψ ∘ T ∘ f over A for every ψ. For the Bochner integral one must first check simple functions and then pass to limits, in our own account. The hard part of the Pettis theory is proving that the required vector exists.

**Wikipedia:** [Pettis integral](https://en.wikipedia.org/wiki/Pettis_integral). It says: “⟨φ, e<sub>A</sub>⟩ = ∫<sub>A</sub> ⟨φ, f(x)⟩ dμ(x) for all φ ∈ V′.”

**Sources:** none listed. No primary source with a working link was found.

### Complex scalars make ℂ the only Banach division algebra

**Remember:** Over ℂ every element has a spectral point, so division algebras collapse to ℂ.

*Rules out counterexamples. Confidence: medium.* MSC 46H05 (General theory of topological algebras), 46H20. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach algebra is an algebra with a complete norm that satisfies ‖ab‖ ≤ ‖a‖‖b‖. A division algebra is one in which every nonzero element has an inverse. The Gelfand–Mazur theorem is about unital Banach algebras with complex scalars.

**Problem.** The Gelfand–Mazur theorem says that a complex unital Banach algebra in which every nonzero element is invertible is isomorphic to ℂ.

**How the definition helps.** With complex scalars, every element a has some λ in its spectrum, so a − λ1 is not invertible and must be zero. The nonempty spectrum comes from complex analysis of the resolvent, which is why the scalars must be complex. Over the real numbers the quaternions are a Banach division algebra that is not ℝ or ℂ. The page says that the real case has exactly three answers: ℝ, ℂ and the quaternions. So the choice of complex scalars is what makes the answer unique.

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

**Definition.** For a non-unital C\*-algebra A, the unitization is A⁺ = A ⊕ ℂ with product (a, z)(b, w) = (ab + wa + zb, zw). It has a C\*-norm and a homomorphism A⁺ → ℂ that sends (a, z) to z. Define K₀(A) as the kernel of the induced map K₀(A⁺) → K₀(ℂ) = ℤ. For a locally compact space X, the unitization of C₀(X) is C(X⁺), with X⁺ the one-point compactification.

**Problem.** For a locally compact space X, the group K₀(C₀(X)) is the K-theory of X with compact support.

**How the definition helps.** The unitization moves the problem to a unital algebra, and the map to ℂ remembers what was added. For A = C₀(X), the map to ℂ is evaluation at the point at infinity of X⁺. So the kernel is what the page calls compactly supported K-theory. Exactness and Bott periodicity for the new groups still need proofs (our own).

**nLab:** [unitization of a C-star-algebra](https://ncatlab.org/nlab/show/unitization+of+a+C-star-algebra). It says: “The generalization of the process of one-point compactification of possibly non-compact topological spaces from topology to non-commutative topology is the process of adding units to possibly non-unital C\*-algebras”

**Sources:** none listed. No primary source with a working link was found.

### Characters must be nonzero, so the Gelfand spectrum is locally compact

**Remember:** Drop the zero character, and the space left over is locally compact.

*Rules out counterexamples.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

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

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A C\*-algebra is a Banach \*-algebra that satisfies the C\*-identity ‖A\*A‖ = ‖A\*‖ ‖A‖. Here a Banach \*-algebra has an involution A ↦ A\* that is an isometry: ‖A\*‖ = ‖A‖. Equivalently, a C\*-algebra satisfies the B\*-identity ‖A\*A‖ = ‖A‖².

**Problem.** In a Banach \*-algebra whose involution is an isometry, the C\*-identity holds exactly when the B\*-identity holds.

**How the definition helps.** If the involution is an isometry, ‖A\*‖ ‖A‖ = ‖A‖², so the two identities are visibly the same. Many texts leave this clause out of the definition of a Banach \*-algebra. Then the isometry follows easily from the B\*-identity, but from the C\*-identity only after some difficulty, as the nLab says. So the clause moves the hard part out of the equivalence.

**nLab:** [C-star-algebra](https://ncatlab.org/nlab/show/C-star-algebra). It says: “Often one sees the definition without the clause (which should be in the definition of Banach \*-algebra) that the involution is an isometry (so that ‖A\*‖ = ‖A‖, which is key for the equivalence of the B\* and C\* identities).”

**Sources:**

- [James G. Glimm, Richard V. Kadison, Unitary operators in C\*-algebras, Pacific Journal of Mathematics 10 (1960) 547–556 (the unital case of the hard direction)](https://doi.org/10.2140/pjm.1960.10.547)

### The C\*-identity makes the Gelfand transform an isometry

**Remember:** The C\*-identity forces norm and spectral radius to agree, so nothing is lost.

*Rules out counterexamples.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A character of a commutative Banach algebra is a nonzero homomorphism to ℂ. The Gelfand transform sends an element a to the function f ↦ f(a) on the space of characters. A C\*-algebra is a Banach algebra with an involution such that ‖x\*x‖ = ‖x‖².

**Problem.** The commutative Gelfand–Naimark theorem says that every commutative C\*-algebra is isometrically isomorphic to C₀(X), the continuous functions vanishing at infinity on its character space X.

**How the definition helps.** The C\*-identity makes the norm of a self-adjoint element equal to its spectral radius, which is the supremum of its Gelfand transform (our own summary). For a general commutative Banach algebra, the transform kills the Jacobson radical, the intersection of all maximal ideals. So nilpotent elements and radical algebras such as the Volterra integration algebra go to zero (our own examples). The C\*-identity excludes these, and the page says the transform is then an isometric isomorphism. The Stone–Weierstrass theorem shows that the image is all of C₀(X) (our own summary of the proof).

**Wikipedia:** [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “Thus the Gelfand representation is injective if and only if A is (Jacobson) semisimple.”

**Sources:**

- [I. Gelfand and M. Neumark, On the imbedding of normed rings into the ring of operators in Hilbert space, Matematicheskii Sbornik 12(54) (1943), 197–217; reprinted in Contemporary Mathematics 167 (1994)](https://doi.org/10.1090/conm/167/16)

### The universal definition of Cuntz algebras gives the circle action for free

**Remember:** Multiplying every generator by the same unit scalar keeps the relations.

*True by definition.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46L55. arXiv math.OA. Level 3: graduate.

**Definition.** Fix n ≥ 2. An isometry is an element s with s\*s = 1. The Cuntz algebra Oₙ is the universal C\*-algebra generated by n isometries s₁, …, sₙ with s₁s₁\* + ⋯ + sₙsₙ\* = 1. Universal means that any n such isometries in a C\*-algebra B are the images of the sᵢ under exactly one adjoint-preserving homomorphism.

**Problem.** For each complex number z with \|z\| = 1, there is an automorphism of Oₙ that sends each sᵢ to zsᵢ. These automorphisms form a continuous action of the circle.

**How the definition helps.** The elements zsᵢ are again isometries whose range projections sum to 1, so the universal property gives a homomorphism. The homomorphism for z̄ is its inverse, and continuity holds on the dense polynomials in the generators and their adjoints. With the concrete definition, one needs Cuntz's uniqueness theorem that any two such families generate isomorphic C\*-algebras. Wikipedia gives both definitions and Cuntz's theorem; the circle action argument is our own.

**Wikipedia:** [Cuntz algebra](https://en.wikipedia.org/wiki/Cuntz_algebra). It says: “This universal C\*-algebra is called the Cuntz algebra”

**Sources:**

- [Joachim Cuntz, Simple C\*-algebras generated by isometries (1977)](https://doi.org/10.1007/BF01625776)

### The universal definition of the multiplier algebra makes essential extensions embed

**Remember:** If no element of D can ignore A, then D embeds in M(A).

*True by definition.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A closed ideal A of a C\*-algebra D is essential if no nonzero element of D multiplies all of A to zero. The multiplier algebra M(A) contains A as an essential ideal and has a universal property. For each C\*-algebra D with A as a closed ideal, exactly one adjoint-preserving homomorphism from D to M(A) is the identity on A. One construction of M(A) uses double centralizers, which are compatible pairs of left and right multiplication maps on A.

**Problem.** Let a C\*-algebra D contain A as an essential ideal. Then the canonical homomorphism from D to M(A) is injective.

**How the definition helps.** The universal property gives the map, and the map is the identity on A. So its kernel J is a closed ideal with J ∩ A = 0, and then JA ⊆ J ∩ A = 0. Because A is essential, J = 0. The work is the construction of M(A) from double centralizers; Wikipedia says the result follows from the definition, and the kernel argument is our own.

**Wikipedia:** [Multiplier algebra](https://en.wikipedia.org/wiki/Multiplier_algebra). It says: “It also follows from the definition that for any D containing A as an essential ideal, the multiplier algebra M(A) contains D as a C\*-subalgebra.”

**Sources:** none listed. No primary source with a working link was found.

### The tensor norm definition of nuclearity makes spatial tensor products nuclear

**Remember:** Regroup three factors, then trade the largest norm for the smallest twice.

*True by definition. Confidence: medium.* MSC 46L06 (Tensor products of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A C\*-algebra A is nuclear if, for every C\*-algebra B, the smallest and largest C\*-norms on the algebraic tensor product A ⊗ B agree. The smallest is the spatial norm, written ⊗min, and the largest is written ⊗max. Another definition asks that the identity map of A be a pointwise limit of completely positive contractions that factor through matrix algebras. Completely positive means positive even after tensoring with every matrix algebra.

**Problem.** If A and B are nuclear, then their spatial tensor product A ⊗min B is nuclear.

**How the definition helps.** The norm definition reduces the claim to associativity of the minimal and maximal tensor norms (our own). For any C, (A ⊗min B) ⊗max C = A ⊗max (B ⊗max C), and nuclearity of B and then of A turns both maximal norms into minimal ones. With the approximation definition, one must tensor the approximating maps and show that they stay completely positive. The nLab gives the norm definition; the proof and comparison are our own.

**nLab:** [spatial tensor product](https://ncatlab.org/nlab/show/spatial+tensor+product). It says: “the maximal and minimal tensor norms on the algebraic tensor product A ⊗ B coincide”

**Sources:**

- [Man-Duen Choi and Edward Effros, Nuclear C\*-algebras and the approximation property (1978)](https://doi.org/10.2307/2373876)

### Complete positivity, not positivity, makes Stinespring's dilation theorem true

**Remember:** The transpose is positive but not completely positive, so it has no dilation.

*Rules out counterexamples.* MSC 46L07 (Operator spaces and completely bounded maps), 46L05, 47A20. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A linear map Φ between C\*-algebras is positive when it sends positive elements to positive elements. It is completely positive when Φ applied entrywise to n × n matrices is positive for every n.

**Problem.** Let Φ be a completely positive map from a unital C\*-algebra A to the bounded operators on H. Stinespring's theorem says that Φ(a) = V\*π(a)V. Here π is a \*-representation of A on another Hilbert space and V is a bounded operator.

**How the definition helps.** Complete positivity is exactly the property that a map of the form V\*π(·)V has, so the theorem can hold with no exceptions. Its proof builds an inner product on A ⊗ H, as the Gelfand–Naimark–Segal construction does for a state. Positivity of that inner product needs positivity of Φ on all matrix sizes. The transpose of matrices is positive but not 2-positive, so it has no Stinespring form. On commutative C\*-algebras, positive maps are automatically completely positive (our own remark).

**Wikipedia:** [Stinespring dilation theorem](https://en.wikipedia.org/wiki/Stinespring_dilation_theorem), [Completely positive map](https://en.wikipedia.org/wiki/Completely_positive_map). It says: “This is one way to see that completely positive maps, rather than merely positive ones, are the true generalizations of positive functionals.”

**Sources:**

- [W. F. Stinespring, Positive functions on C\*-algebras, Proceedings of the AMS 6 (1955), 211–216](https://doi.org/10.1090/S0002-9939-1955-0069403-4)
- [M.-D. Choi, Completely positive linear maps on complex matrices, Linear Algebra and its Applications 10 (1975), 285–290](https://doi.org/10.1016/0024-3795(75)90075-0)

### Countable generation lets every Hilbert module sit inside the standard module

**Remember:** Countably generated Hilbert modules are summands of ℓ²(B), like separable Hilbert spaces.

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

**Definition.** A Hilbert B-module E is a right B-module with a B-valued inner product, complete in the norm it gives. It is full when the inner products ⟨x,y⟩ span a dense subset of B. Two C\*-algebras A and B are Morita equivalent when A is isomorphic to the algebra 𝒦(E) of compact operators on a full Hilbert B-module E.

**Problem.** Every C\*-algebra B is Morita equivalent to the matrix algebra Mₙ(B), to its stabilization B ⊗ 𝒦, and to every full corner pBp. Here a projection p is full when BpB spans a dense subset of B.

**How the definition helps.** Each algebra in the list is already the compact operators on an obvious full B-module, so the definition applies at once (our own). Mₙ(B) is 𝒦(Bⁿ), B ⊗ 𝒦 is 𝒦 of the standard module ℓ²(B), and pBp is 𝒦(pB) (our own). The usual definition asks for Rieffel's imprimitivity bimodule, a bimodule with compatible full inner products on both sides. The work moves into the quoted theorem that the two definitions agree.

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “Let A and B be C\*-algebras. The following are equivalent. (1) The C\*-algebras A and B are Morita equivalent. (2) There exists a full Hilbert B-module and a faithful representation φ : A → ℒ<sub>B</sub>(E) such that φ(A)=𝒦<sub>B</sub>(E).”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)

### A predual defines von Neumann algebras without choosing a Hilbert space

**Remember:** Being a dual space is the abstract mark of a von Neumann algebra.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A W\*-algebra is a C\*-algebra that is, as a Banach space, the dual of some Banach space. That Banach space is called the predual. For a von Neumann algebra on a Hilbert space, the predual consists of the functionals of the form Σ⟨Txₙ, yₙ⟩ with Σ‖xₙ‖‖yₙ‖ finite. These are the ultraweakly continuous functionals.

**Problem.** The predual of a W\*-algebra is unique up to canonical isomorphism, so its weak-\* topology depends only on the algebra. Every W\*-algebra acts faithfully on some Hilbert space as a von Neumann algebra (Sakai's theorem).

**How the definition helps.** With Sakai's definition, the weak-\* topology from the predual is part of the data, so it cannot depend on a Hilbert space. The predual can also be described as the span of the positive normal functionals, which uses only the order structure. The work moves into Sakai's theorem that every such algebra has a faithful representation as a weakly closed algebra.

**Wikipedia:** [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “Sakai (1971) showed that von Neumann algebras can also be defined abstractly as C\*-algebras that have a predual”

**Sources:**

- [S. Sakai, A characterization of W\*-algebras, Pacific Journal of Mathematics 6 (1956), 763–773](https://doi.org/10.2140/pjm.1956.6.763)

### The bicommutant theorem lets von Neumann algebras be defined by commutants

**Remember:** Weakly closed equals its double commutant, so algebra replaces topology.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** The commutant S′ of a set S of operators is the set of all bounded operators that commute with every element of S. A von Neumann algebra is a \*-algebra of operators that contains the identity and is weakly closed. Weakly closed means it contains T whenever a net Tᵢ in it has ⟨Tᵢx, y⟩ → ⟨Tx, y⟩ for all x, y.

**Problem.** The commutant of any set of operators closed under adjoints is a von Neumann algebra. A von Neumann algebra contains the spectral projections of its self-adjoint elements.

**How the definition helps.** With the algebraic definition M = M″, these facts are almost immediate, because commutants are easy to compute with. A spectral projection of a self-adjoint a in M commutes with every operator that commutes with a, so it lies in M″ = M (our own example). The commutant S′ of a self-adjoint set is weakly closed and satisfies S′ = S‴ (our own). The work moves into the bicommutant theorem, which says that the weak closure of a unital \*-algebra equals its bicommutant.

**Wikipedia:** [Von Neumann bicommutant theorem](https://en.wikipedia.org/wiki/Von_Neumann_bicommutant_theorem), [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “His double commutant theorem shows that the analytic definition is equivalent to a purely algebraic definition as an algebra of symmetries.”

**Sources:**

- [J. von Neumann, Zur Algebra der Funktionaloperationen und Theorie der normalen Operatoren, Mathematische Annalen 102 (1930), 370–427](https://doi.org/10.1007/BF01782352)

### Ordered K₀ groups classify AF algebras completely

**Remember:** For AF algebras, ordered K₀ is the whole story.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L35 (Classifications of \\(C<sup>\*\\</sup>)-algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** An AF algebra is a C\*-algebra that is an inductive limit of a sequence of finite-dimensional C\*-algebras. Its K₀ group is built from classes of projections in matrices over the algebra. The positive cone is the set of classes of actual projections.

**Problem.** Elliott's theorem says that two unital AF algebras are isomorphic exactly when their ordered K₀ groups, together with the class of the unit, are isomorphic.

**How the definition helps.** Keeping the order on K₀ turns the multiplicity matrices of the limit into maps of ordered groups, so the invariant keeps the construction. For example, ℂ ⊕ ℂ and each Effros–Shen algebra, built from an irrational θ, have K₀ ≅ ℤ² as a group (our own example). The positive cone is ℕ² for the first, and comes from ℤ + θℤ inside ℝ for the second, so only the order tells them apart (our own example). The page says that for unital AF algebras the proof rests on cancellation of projections.

**Wikipedia:** [Approximately finite-dimensional C\*-algebra](https://en.wikipedia.org/wiki/Approximately_finite-dimensional_C%2A-algebra). It says: “Later, George A. Elliott gave a complete classification of AF algebras using the K₀ functor whose range consists of ordered abelian groups with sufficiently nice order structure.”

**Sources:**

- [G. A. Elliott, On the classification of inductive limits of sequences of semisimple finite-dimensional algebras, Journal of Algebra 38 (1976), 29–44](https://doi.org/10.1016/0021-8693(76)90242-8)

### Hulanicki's definition of amenability makes full and reduced crossed products agree

**Remember:** If the trivial representation is near the regular one, every representation is.

*True by definition. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 22D25, 43A07. arXiv math.OA, math.GR. Level 3: graduate.

**Definition.** A locally compact group G is amenable, in Hulanicki's form, when its trivial representation is weakly contained in its regular representation. The regular representation is the action of G on L²(G) by translation. Weakly contained means that the constant function 1 is a limit, uniformly on compact sets, of sums of matrix coefficients of the regular representation.

**Problem.** For an amenable group G acting on a C\*-algebra A, the full crossed product A ⋊ G equals the reduced crossed product A ⋊ᵣ G. The free group on two generators fails this already for A = ℂ.

**How the definition helps.** With this definition, a few lines with Fell's absorption principle show that every covariant representation is weakly contained in a regular one (our own). Fell's principle says that a representation tensored with the regular representation is a multiple of the regular representation (our own). The work moves into the equivalence of Hulanicki's definition with the invariant-mean and Følner definitions (our own). For the free group F₂ the full algebra has a one-dimensional representation, but the reduced algebra is simple, so the two differ (our own).

**nLab:** [amenable topological groupoid](https://ncatlab.org/nlab/show/amenable+topological+groupoid). It says: “For an amenable Lie groupoid 𝒢, the full groupoid convolution algebra and the reduced one are naturally isomorphic.”

**Sources:**

- [Andrzej Hulanicki, Groups whose regular representation weakly contains all unitary representations, Studia Mathematica 24 (1964) 27–59](https://doi.org/10.4064/sm-24-1-27-59)

### Morita equivalence of crossed products gives Mackey's imprimitivity theorem

**Remember:** Systems of imprimitivity are representations of a Morita equivalent algebra.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22D30, 46L08. arXiv math.OA, math.RT. Level 3: graduate.

**Definition.** A system of imprimitivity based on G/H is a unitary representation U of G with a representation M of C₀(G/H) such that U(g)M(f)U(g)\* = M(g·f). By the universal property of the crossed product, these are exactly the representations of C₀(G/H) ⋊ G.

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

**Definition.** The crossed product A ⋊ G of a group action on a C\*-algebra A is defined so that its nondegenerate representations match covariant representations. A covariant representation is a representation π of A with a unitary representation U of G such that U(s)π(a)U(s)\* = π(s·a). The Schrödinger pair acts on L²(G) by translations and by multiplication with characters, the continuous homomorphisms from G to the circle.

**Problem.** Let G be a locally compact abelian group with dual group Ĝ. Every pair of unitary representations U of G and V of Ĝ with U(s)V(γ)U(s)\* = γ(s)V(γ) is a multiple of the Schrödinger pair on L²(G).

**How the definition helps.** By definition such a pair is a covariant representation of G acting on C₀(G) ≅ C\*(Ĝ), so it is a representation of the crossed product. The quoted theorem says the crossed product is 𝒦(L²(G)), whose nondegenerate representations are all multiples of the identity representation (our own). So the work moves into this isomorphism, and not into von Neumann's explicit projections built from Weyl operators (our own). For G = ℝⁿ the result is the Stone–von Neumann theorem.

**Wikipedia:** [Stone–von Neumann theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93von_Neumann_theorem). It says: “It is a general fact that covariant representations are in one-to-one correspondence with \*-representation of the corresponding crossed product.”

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “Let G be a unimodular group. The crossed product C₀(G) ⋊\_α G is isomorphic to 𝒦(L²(G)).”

**Sources:**

- [George W. Mackey, A theorem of Stone and von Neumann, Duke Mathematical Journal 16 (1949) 313–326](https://doi.org/10.1215/S0012-7094-49-01631-2)
- [Marc A. Rieffel, On the uniqueness of the Heisenberg commutation relations, Duke Mathematical Journal 39 (1972) 745–752](https://doi.org/10.1215/S0012-7094-72-03982-8)

### The universal definition makes the noncommutative torus a crossed product by ℤ

**Remember:** Same generators, same relation, same universal property, same algebra.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 46L85. arXiv math.OA. Level 3: graduate.

**Definition.** A concrete definition of A(θ) takes the C\*-algebra generated by a multiplication operator and a rotation operator on L² of the circle. The universal definition instead takes the universal C\*-algebra generated by two unitaries U and V with VU = exp(2πiθ)UV. Universal means that any such pair in any C\*-algebra is the image of U and V under a unique \*-homomorphism.

**Problem.** A(θ) is isomorphic to the crossed product C(𝕋) ⋊ ℤ, where ℤ acts on the circle by rotation through the angle 2πθ.

**How the definition helps.** Both algebras have the same universal property, so they are isomorphic. C(𝕋) is universal for one unitary u, and the crossed product by ℤ adds a unitary w with w u w\* = λu (our own). That is exactly the defining property of A(θ), and the work moves into the universal property of crossed products by ℤ (our own). Matching the concrete algebra, for irrational θ, needs a separate theorem, the simplicity of A(θ) (our own).

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “The resulting C\*-crossed product C(S¹) ⋊ Z is isomorphic to Aθ.”

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “The algebra of continuous functions on the circle 𝕋 denoted C(𝕋) is the universal C\*-algebra generated by u such that u\*u=uu\*=1.”

**Sources:**

- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Trivial dynamics turns thermal equilibrium into a trace

**Remember:** With no time evolution, equilibrium means a trace.

*Rules out counterexamples.* MSC 46L60 (Applications of selfadjoint operator algebras to physics). arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** Let αₜ describe time evolution by automorphisms of a unital operator algebra, and let β &gt; 0. The Kubo–Martin–Schwinger condition requires a bounded continuous function F on 0 ≤ Im z ≤ β for each pair A, B. It must be holomorphic inside, with F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A) for real t.

**Problem.** For trivial time evolution, the Kubo–Martin–Schwinger states at positive inverse temperature are exactly the tracial states.

**How the definition helps.** For constant dynamics the strip condition forces the two orders of multiplication to have equal expectation. Our own proof subtracts the constant lower boundary value and reflects the resulting function across that boundary. The identity theorem makes it zero throughout, so ω(AB) = ω(BA). Conversely, a trace supplies a constant strip function for each pair. Every state is stationary under trivial dynamics, including nontracial vector states on two-by-two matrices.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “there is a bounded continuous function F in the strip”

**Sources:**

- [Rudolf Haag, Nicolaas M. Hugenholtz and Marinus Winnink, On the equilibrium states in quantum statistical mechanics](https://doi.org/10.1007/BF01646342)

### Coefficient algebras give compact quantum groups a genuine Hopf \*-algebra

**Remember:** Finite sums Δ(uᵢⱼ) = Σ uᵢₖ ⊗ uₖⱼ keep coefficients algebraic.

*Makes the theorem clean to state or prove.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 16T05. arXiv math.QA, math.OA. Level 3: graduate.

**Definition.** For a compact matrix quantum group (C, u), the coefficient algebra C₀ is the \*-subalgebra of C generated by the entries uᵢⱼ of the matrix u. The antipode κ is required only on C₀, not on all of C. For a compact group, C₀ is an algebra of representative functions, the matrix coefficients of finite-dimensional representations.

**Problem.** The coefficient algebra C₀ is a dense Hopf \*-algebra inside C, with counit ε(uᵢⱼ) = δᵢⱼ and antipode κ. The full algebra C is not a Hopf algebra in general.

**How the definition helps.** The comultiplication sends each generator to a finite sum, Δ(uᵢⱼ) = Σₖ uᵢₖ ⊗ uₖⱼ, so Δ maps C₀ into the algebraic tensor product C₀ ⊗ C₀. On all of C, Δ lands only in the completed tensor product, so the Hopf axioms cannot be written there. The antipode on C₀ is part of Woronowicz's axioms. The work moves into his proof that the counit and the antipode are well defined on C₀.

**nLab:** [representative function](https://ncatlab.org/nlab/show/representative+function). It says: “The set of all representative functions on G is a Hopf F-algebra.”

**Wikipedia:** [Compact quantum group](https://en.wikipedia.org/wiki/Compact_quantum_group). It says: “Strictly speaking, this does not make C(G) into a Hopf algebra, unless G is finite.”

**Sources:**

- [S. L. Woronowicz, Compact matrix pseudogroups, Communications in Mathematical Physics 111 (1987) 613–665](https://doi.org/10.1007/BF01219077)

### Two-sided invariance makes the Haar state of a compact quantum group unique

**Remember:** Two invariant states give h = h⋆h′ = h′, so only one exists.

*True by definition.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 3: graduate.

**Definition.** A compact quantum group is a unital C\*-algebra C(G) with a coassociative unital \*-homomorphism Δ: C(G) → C(G) ⊗ C(G). The spans of (C(G)⊗1)Δ(C(G)) and (1⊗C(G))Δ(C(G)) must be dense in C(G) ⊗ C(G). A Haar state is a state h with h⋆φ = h = φ⋆h for every state φ. Here φ⋆ψ = (φ⊗ψ)∘Δ is the convolution of states.

**Problem.** Every compact quantum group has exactly one Haar state.

**How the definition helps.** Asking for invariance from both sides makes uniqueness a one-line computation. If h and h′ are Haar states, then h⋆h′ = h because h absorbs h′, and h⋆h′ = h′ because h′ absorbs h. With invariance from one side only, uniqueness needs more work: one first needs a two-sided invariant state (our own). The work moves into existence, which Woronowicz proved from the density axioms.

**Paper or page:** [Analysis for idempotent states on quantum permutation groups](https://arxiv.org/abs/2301.13423), [Quantum expanders and property (T) discrete quantum groups](https://arxiv.org/abs/2502.01974). It says: “The algebra of continuous functions C(𝔾) on a compact quantum group admits a unique invariant state h, such that for all states φ on C(𝔾): h⋆φ=h=φ⋆h.”

**Sources:**

- [S. L. Woronowicz, Compact matrix pseudogroups, Communications in Mathematical Physics 111 (1987) 613–665](https://doi.org/10.1007/BF01219077)

### Woronowicz density axioms exclude compact semigroups without a Haar state

**Remember:** Density is cancellation, and compact cancellative semigroups are groups.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 22C05. arXiv math.OA, math.QA. Level 3: graduate.

**Definition.** Woronowicz defines a compact quantum group as a unital C\*-algebra C with a coassociative unital \*-homomorphism Δ: C → C ⊗ C. He also asks that the linear spans of (C⊗1)Δ(C) and (1⊗C)Δ(C) are dense in C ⊗ C. With coassociativity alone, the object is only a compact quantum semigroup.

**Problem.** If C = C(S) for a compact semigroup S, the density axioms hold exactly when S is a compact group. The two-point semigroup with xy = x satisfies coassociativity but has no Haar state.

**How the definition helps.** In the commutative case, each density axiom is a cancellation law in disguise. The span of (C⊗1)Δ(C) is the unital \*-algebra of functions (x,y) ↦ f(x)g(xy). By the Stone–Weierstrass theorem, it is dense exactly when xy = xy′ forces y = y′ (our own). For the semigroup with xy = x, this span is only C⊗1, and no state h satisfies ∫f(xy)dh(y) = h(f) for all x (our own). The work moves into the classical theorem that a compact Hausdorff semigroup with both cancellation laws is a group.

**Wikipedia:** [Compact quantum group](https://en.wikipedia.org/wiki/Compact_quantum_group). It says: “the sets {(C ⊗ 1) Δ(C)} and {(1 ⊗ C) Δ(C)} are dense in C ⊗ C.”

**Sources:** none listed. No primary source with a working link was found.

### Defining K₀ of non-unital algebras by unitization matches compactly supported K-theory

**Remember:** Scalar evaluation becomes restriction to the point at infinity.

*True by definition.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19K99, 55N15. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a C\*-algebra A without unit, adjoin a unit to get A⁺, and define K₀(A) as the kernel of K₀(A⁺) → K₀(ℂ) ≅ ℤ. Projections over A itself are not enough. The algebra C₀(ℝ²) of functions vanishing at infinity has no nonzero projections, but its K₀ is ℤ. Compactly supported K-theory of X is the kernel of restriction to the point at infinity of the one-point compactification.

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

**Definition.** For a unital C\*-algebra A, a projection is a matrix p over A with p = p² = p\*. Projections p and q are Murray–von Neumann equivalent when p = v\*v and q = vv\* for some matrix v. K₀(A) is the group completion of these classes under block-diagonal sum. The module definition uses finitely generated projective A-modules instead.

**Problem.** The corner map a ↦ diag(a, 0, …, 0) from A to the n × n matrix algebra Mₙ(A) induces an isomorphism on K₀.

**How the definition helps.** A k × k matrix over Mₙ(A) is a kn × kn matrix over A, so both sides use the same projections (our own). The corner map only pads a projection with zero blocks, which does not change its class (our own). The module definition needs the Morita correspondence between A-modules and Mₙ(A)-modules instead (our own). Wikipedia gives the projection definition.

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “the Murray-von Neumann equivalence classes of projections”

**Sources:** none listed. No primary source with a working link was found.

### Defining multipliers by a universal property gives the Stone–Čech compactification

**Remember:** Largest essential unitization of C₀(X) is functions on the largest compactification.

*True by definition.* MSC 46L85 (Noncommutative topology), 54D35, 46L05. arXiv math.OA, math.GN. Level 3: graduate.

**Definition.** The multiplier algebra M(A) is the largest unital C\*-algebra that contains A as an essential ideal. Essential means that the ideal meets every other nonzero ideal. Every C\*-algebra that contains A as an essential ideal maps into M(A) by a unique injective map that fixes A.

**Problem.** For a locally compact Hausdorff space X, the multiplier algebra of C₀(X) is Cb(X) ≅ C(βX), where βX is the Stone–Čech compactification. So the corona algebra M(C₀(X))/C₀(X) is C(βX ∖ X).

**How the definition helps.** The universal property of M(A) is the algebraic copy of the universal property of βX, so the two sides match. A compactification K of X, a compact space in which X is dense and open, makes C₀(X) an essential ideal of C(K) (our own). The largest such algebra must then come from the largest compactification (our own). The usual definition by double centralizers, pairs of maps on A, needs a proof that it has this universal property (our own).

**nLab:** [multiplier algebra](https://ncatlab.org/nlab/show/multiplier+algebra). It says: “In the commutative case, every unital commutative extension in which A is an essential ideal corresponds to a compactification of the spectrum Spec(A); M(A) is in that case the C\*-algebra of functions on the Stone–Čech compactification β(Spec(A)).”

**Sources:**

- [Charles A. Akemann, Gert K. Pedersen and Jun Tomiyama, Multipliers of C\*-algebras, Journal of Functional Analysis 13 (1973) 277–301](https://doi.org/10.1016/0022-1236(73)90036-0)

### Nondegenerate homomorphisms make Gelfand duality match proper maps exactly

**Remember:** Dense image ideal on the algebra side means proper map on the space side.

*Rules out counterexamples.* MSC 46L85 (Noncommutative topology), 46L05, 54D45. arXiv math.OA, math.GN. Level 3: graduate.

**Definition.** A \*-homomorphism φ from A to B is nondegenerate when the products φ(a)b span a dense subset of B. A continuous map f from X to Y is proper when the preimage of every compact set is compact.

**Problem.** Let X and Y be locally compact Hausdorff spaces. The nondegenerate \*-homomorphisms from C₀(Y) to C₀(X) are exactly the maps g ↦ g∘f with f a proper continuous map from X to Y.

**How the definition helps.** Nondegeneracy removes the homomorphisms that come from no map of spaces. An example is the inclusion of the ideal C₀((0,1)) into C(\[0,1\]), which no map from \[0,1\] to (0,1) induces (our own). Under nondegeneracy, each point evaluation of C₀(X) pulls back to a nonzero character of C₀(Y), and so to a point f(x) of Y (our own). The condition that each g∘f vanishes at infinity then says exactly that f is proper (our own).

**nLab:** [Gelfand duality](https://ncatlab.org/nlab/show/Gelfand+duality). It says: “between the category of locally compact Hausdorff spaces and proper maps and the category of commutative nonunital C\*-algebras with nondegenerate \*-homomorphisms as morphisms.”

**Sources:** none listed. No primary source with a working link was found.

### The universal definition gives the noncommutative torus a gauge action and trace

**Remember:** Rescaled generators satisfy the same relation, so the torus acts.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L55. arXiv math.OA. Level 3: graduate.

**Definition.** The concrete definition of A(θ), for irrational θ, uses two operators on L² of the circle, and there the symmetries are not visible. Instead define A(θ) as the universal C\*-algebra generated by unitaries U and V with VU = λUV, where λ = exp(2πiθ). The gauge action of the torus 𝕋² then sends U to zU and V to wV for \|z\| = \|w\| = 1.

**Problem.** For every θ, A(θ) has a faithful tracial state τ with τ(UᵐVⁿ) = 0 unless m = n = 0. A tracial state is a state with τ(xy) = τ(yx), and faithful means τ(x\*x) &gt; 0 for x ≠ 0.

**How the definition helps.** The pair zU and wV satisfies the same relation, so the universal property gives the gauge action for free (our own). Averaging over 𝕋² maps onto the fixed points, which are the scalars, and kills no nonzero positive element, so it defines τ (our own). The trace property reduces to monomials, where both orders of a product give the same power of λ (our own). With the concrete definition the gauge action, and so τ, must instead be built from unitaries that implement it (our own).

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

### Liquid real vector spaces are closed under extensions, unlike Banach spaces

**Remember:** Allow non-convex measures, and extensions of Banach spaces stay inside.

*Rules out counterexamples.* MSC 46A16 (Not locally convex spaces (metrizable topological linear spaces, locally bounded spaces, quasi-Banach spaces, etc.)), 46M05. arXiv math.FA, math.AG. Level 4: research.

**Definition.** Fix 0 &lt; p ≤ 1. For a profinite set S, let M&lt;p(S) be the union of the spaces of p′-measures on S over all p′ &lt; p. It need not be locally convex. A condensed real vector space V is p-liquid if every map from S to V extends uniquely to a linear map from M&lt;p(S).

**Problem.** For each 0 &lt; p ≤ 1, the p-liquid real vector spaces form an abelian category closed under kernels, cokernels and extensions. It has a tensor product that makes liquidification symmetric monoidal.

**How the definition helps.** Liquidity uses non-convex measures, so it admits the quasi-Banach spaces that arise as extensions of Banach spaces. The counterexample is Ribe's extension of ℓ¹ by ℝ (Corollary 5.4 of the analytic notes). Its middle term is complete but not locally convex, so Banach spaces are not closed under extensions. Kalton's theorem, that an extension of p-Banach spaces is p′-Banach for all p′ &lt; p, explains why the definition uses every p′ &lt; p. The hard work is Theorem 6.6, which shows that this defines an analytic ring.

**nLab:** [liquid vector space](https://ncatlab.org/nlab/show/liquid+vector+space). It says: “Roughly, completeness is expressed as ability to integrate with respect to Radon measures. This doesn't quite work as stated, and to make this rigorous one has to bring L<sup>p-spaces</sup> for 0&lt;p≤1 (i.e., the non-convex case) into the picture.”

**Wikipedia:** [Condensed mathematics](https://en.wikipedia.org/wiki/Condensed_mathematics). It says: “In condensed mathematics, liquid vector spaces are alternatives to complete topological vector spaces, the category of which has better abstract properties than that of complete topological vector spaces.”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)

### Webbed spaces extend the closed graph theorem beyond Fréchet spaces

**Remember:** A countable web lets Banach's Baire argument run in spaces without a metric.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including \\(B\\)-, \\(B<sub>r</sub>\\)-completeness)). arXiv math.FA. Level 4: research.

**Definition.** A web on a locally convex space is a countable tree of convex balanced sets. The children of each set together absorb it, each child lies in half of its parent, and series along a branch converge. A space with a web is webbed.

**Problem.** A linear map with closed graph from an ultrabornological space into a webbed space is continuous (De Wilde's closed graph theorem).

**How the definition helps.** A web packages exactly the countable structure that the Baire category proof uses, so the old proof works again (our own reading). The countable tree replaces the sequence of balls of a metric space, and the convergence condition replaces completeness (our own reading). Ultrabornological spaces include Fréchet spaces and their inductive limits. What stays hard is to show that the spaces in use have webs; the page lists Fréchet spaces and strong duals of metrizable spaces, which cover spaces of distributions.

**Wikipedia:** [Webbed space](https://en.wikipedia.org/wiki/Webbed_space). It says: “a webbed space is a topological vector space designed with the goal of allowing the results of the open mapping theorem and the closed graph theorem to hold for a wider class of linear maps whose codomains are webbed spaces.”

**Sources:** none listed. No primary source with a working link was found.

### The UMD property is exactly what vector-valued Riesz projections need

**Remember:** Flipping martingale steps safely is the same as cutting off negative frequencies safely.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 42B30, 60G46. arXiv math.FA, math.CA. Level 4: research.

**Definition.** A martingale is a sequence of random variables in which each step has conditional mean zero, given the past. A Banach space X has the UMD property (unconditional martingale differences) if the following holds for some 1 &lt; p &lt; ∞. Changing the signs of the steps of any X-valued martingale changes its Lᵖ norm by at most a fixed factor.

**Problem.** Let G be a Dirichlet group and 1 &lt; p &lt; ∞. The Riesz projection, which keeps only the nonnegative frequencies, is bounded on X-valued Lᵖ functions on G exactly when X has the UMD property.

**How the definition helps.** The UMD condition names, in one probabilistic inequality, the whole class of spaces where Fourier projections stay bounded. So the vector-valued theorem becomes an if-and-only-if instead of a list of good examples. For functions with values in ℓ¹ or c₀ the Riesz projection is not bounded (our own remark). The hard work is the two directions of the equivalence, due to Burkholder and Bourgain for the circle (our own remark).

**Paper or page:** [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1), [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1). It says: “Let G be a Dirichlet group, X a Banach space and 1&lt;p&lt;∞. Then X has UMD if and only if the Riesz projection … is bounded.”

**Sources:**

- [Andreas Defant, Ingo Schoolmann, Hardy spaces of general Dirichlet series - a survey, arXiv:1902.02073 (2019), Banach Center Publ. 119 (2019) 123–149](https://arxiv.org/abs/1902.02073v1)

### Type 2 and cotype 2 together characterize Hilbert spaces up to isomorphism

**Remember:** Random signs that add like Pythagoras in both directions mean Hilbert space.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 46C15. arXiv math.FA. Level 4: research.

**Definition.** A Banach space has type 2 if some constant C bounds the average over signs of ‖±x₁ ± ⋯ ± xₙ‖² by C(‖x₁‖² + ⋯ + ‖xₙ‖²), for every finite list of vectors. It has cotype 2 if the reverse inequality holds with another constant. In a Hilbert space the average equals the sum exactly, by the parallelogram law.

**Problem.** A Banach space is isomorphic to a Hilbert space exactly when it has type 2 and cotype 2 (Kwapień's theorem).

**How the definition helps.** Type and cotype split the parallelogram law into two one-sided inequalities with constants, and such inequalities survive a change to an equivalent norm. The exact parallelogram law cannot do this. In our own example, ℓ² with the equivalent norm max(‖x‖, 2\|x₁\|) fails the law but keeps type 2 and cotype 2. The hard direction, that the two inequalities give an inner product norm, needs Kwapień's factorization argument (our own remark).

**Paper or page:** [Characterization of Hilbertizable spaces via convex functions](https://arxiv.org/abs/2506.04686v1). It says: “A space is isomorphic to a Hilbert space if and only if it is of type 2 and cotype 2.”

**Sources:**

- [N. Borchard and G. Wachsmuth, Characterization of Hilbertizable spaces via convex functions, arXiv:2506.04686 (2025)](https://arxiv.org/abs/2506.04686v1)
- [S. Kwapień, Isomorphic characterizations of inner product spaces by orthogonal series with vector valued coefficients, Studia Math. 44 (1972) 583–595](https://doi.org/10.4064/sm-44-6-583-595)

### Condensed duals of Banach spaces are Smith spaces, so biduality always holds

**Remember:** Dualize with compact sets, not the norm, and c₀ becomes reflexive.

*Rules out counterexamples.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces), 46A20. arXiv math.FA. Level 4: research.

**Definition.** A Smith space is a complete locally convex space with a compact set K such that every compact set lies in some multiple λK. The condensed dual Hom(V, ℝ) is the condensed space of linear maps from V to ℝ. It remembers uniform convergence on compact sets, not the norm topology.

**Problem.** For every Banach space V, the condensed dual of V is a Smith space, and V maps isomorphically to its double condensed dual. So Banach spaces and Smith spaces are anti-equivalent, and even c₀ is reflexive in this sense.

**How the definition helps.** The condensed dual carries the compact-open structure, which is a Smith space whose own dual gives V back (Theorem 4.7 of the analytic notes). This removes the classical counterexample c₀, whose double dual in the norm sense is the larger space ℓ∞ (our own). Smith proved this duality in 1952 with the topology of uniform convergence on compact sets; the condensed dual gives that topology automatically. The work is in one computation: the dual of the Smith space of measures on S is C(S, ℝ).

**Wikipedia:** [Smith space](https://en.wikipedia.org/wiki/Smith_space). It says: “a Smith space is a complete compactly generated locally convex topological vector space X having a universal compact set”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)
- [M. F. Smith, The Pontrjagin duality theorem in linear spaces, Annals of Mathematics 56 (1952), 248–253](https://doi.org/10.2307/1969798)

### Grothendieck's property forces separable Banach spaces to be reflexive

**Remember:** Separable plus Grothendieck means reflexive.

*True by definition. Confidence: medium.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 4: research.

**Definition.** A Banach space X is a Grothendieck space if every sequence in the dual X\* that converges weak-\* also converges weakly. Weak-\* convergence means convergence at each point of X, and weak convergence means convergence against each element of X\*\*.

**Problem.** Every separable Grothendieck space is reflexive. More generally, a non-reflexive Grothendieck space has density at least the uncountable cardinal 𝔭.

**How the definition helps.** The definition supplies exactly the step that a reflexivity proof needs. In a separable space the dual unit ball is weak-\* sequentially compact. The Grothendieck property makes it weakly sequentially compact, and the Eberlein–Šmulian theorem then makes X\* and so X reflexive (our own sketch). So the work moves into finding non-reflexive examples, which must be large spaces such as ℓ∞.

**Paper or page:** [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3), [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3). It says: “A non-reflexive Grothendieck space has density at least 𝔭⩾ω₁.”

**Sources:**

- [Manuel González, Tomasz Kania, Grothendieck spaces: the landscape and perspectives, arXiv:2102.03838 (2021)](https://arxiv.org/abs/2102.03838v3)
- [A. Grothendieck, Sur les applications linéaires faiblement compactes d'espaces du type C(K), Canad. J. Math. 5 (1953) 129–173](https://doi.org/10.4153/cjm-1953-017-4)

### Defining subspace angles spectrally makes their squared cosines Ritz values

**Remember:** Squared cosines of the angles are the spectrum of a compressed projection.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 47A15, 47A75. arXiv math.NA, math.FA. Level 4: research.

**Definition.** Let M and N be nonzero closed subspaces of a Hilbert space, with orthogonal projections P and Q. Restrict PQ to M to get a self-adjoint operator on M. The angles from M to N are the inverse cosines of the square roots of the points in its spectrum.

**Problem.** In the Rayleigh–Ritz method with trial subspace M and operator Q, the Ritz values are exactly the squared cosines of the angles from M to N.

**How the definition helps.** The angles come from the spectrum of PQ restricted to M, and the Ritz values are the spectrum of that same operator (our own). So the equality holds by definition (our own). The work moves to perturbation bounds for angles, which then bound how Ritz values move when the trial subspace changes.

**Paper or page:** [Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods](https://arxiv.org/abs/0705.1023v2). It says: “We show that the squared cosines of the angles from one subspace to another can be interpreted as Ritz values in the Rayleigh-Ritz method”

**Sources:**

- [Andrew Knyazev, Abram Jujunashvili, Merico Argentati, Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods, arXiv:0705.1023v2 (2010). Journal of Functional Analysis 259 (2010), pp. 1323-1345](https://arxiv.org/abs/0705.1023v2)

### A reproducing kernel solves the optimization that bounds vanishing of L-functions

**Remember:** The kernel is the test function that attains the point-evaluation bound.

*True by definition. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 11M41. arXiv math.NT, math.FA. Level 4: research.

**Definition.** A reproducing kernel Hilbert space is a Hilbert space of functions in which each point evaluation f ↦ f(w) is continuous. Then f(w) = ⟨f, K(w, ·)⟩ for a unique kernel K. Here the space holds entire functions that grow at most like exp(πΔ\|z\|). Its norm is weighted by the one-level density of the family’s symmetry type, which describes how low-lying zeros are spread.

**Problem.** Assume the generalized Riemann hypothesis for a family of L-functions with symmetry type G. Assume also a one-level density estimate for test functions whose Fourier transforms have support in (−Δ, Δ). Then the average order of vanishing at the central point is bounded by 1/K(0, 0).

**How the definition helps.** Writing evaluation as an inner product turns the Fourier optimization problem into the Cauchy–Schwarz inequality, so the kernel gives the answer. In our own calculation, \|f(0)\|² ≤ ‖f‖²K(0, 0), so a test function with f(0) = 1 has ‖f‖² ≥ 1/K(0, 0). The function K(0, ·)/K(0, 0) attains equality. For unitary symmetry the kernel is the sine kernel, and K(0, 0) = Δ. In our own account, the paper must still link this minimum to the zero count and compute the kernel for each symmetry type.

**Paper or page:** [Hilbert spaces and low-lying zeros of L-functions](https://arxiv.org/abs/2109.10844v3). It says: “To solve the Fourier optimization problems that arise, we provide a unified framework based on the theory of reproducing kernel Hilbert spaces of entire functions”

**Sources:**

- [Emanuel Carneiro, Andrés Chirre, Micah B. Milinovich, Hilbert spaces and low-lying zeros of L-functions, arXiv:2109.10844v3 (2022)](https://arxiv.org/abs/2109.10844v3)

### The Pick property makes the two kinds of interpolating sequences agree

**Remember:** With the Pick property, multiplier questions become kernel questions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 32E30, 47B32. arXiv math.CV, math.FA. Level 4: research.

**Definition.** A multiplier of a space of functions is a function φ such that φf is in the space for every f in it. A reproducing kernel Hilbert space has the complete Pick property when a positivity test on its kernel alone solves the Nevanlinna–Pick problem for its multipliers. This also holds for matrix-valued multipliers. The Hardy space of the disc is the classical example.

**Problem.** Call a sequence interpolating for a space if every sequence of values of the right size is attained by a function in the space. In a space with the complete Pick property, the interpolating sequences for the space and for its multiplier algebra are the same.

**How the definition helps.** In our own words, the Pick property turns a question about bounded multipliers into one about positive matrices built from the kernel. So interpolation in the multiplier algebra reduces to interpolation in the space (our own summary). The abstract says that the coincidence fails for the Hardy space of the polydisc and its algebra of bounded functions.

**Paper or page:** [Random Interpolating Sequences in the Polydisc and the Unit Ball](https://arxiv.org/abs/2012.05381v4). It says: “For those spaces, such interpolating sequences coincide with interpolating sequences for their multiplier algebras, thanks to the Pick property. This is not the case for the Hardy space H²(𝔻ᵈ) and its multiplier algebra H∞(𝔻ᵈ)”

**Sources:**

- [Alberto Dayan, Brett D. Wick, Shengkun Wu, Random Interpolating Sequences in the Polydisc and the Unit Ball, arXiv:2012.05381 (2020)](https://arxiv.org/abs/2012.05381v4)

### The largest-K norm equals the L¹ norm exactly when the support is small

**Remember:** The largest allowed piece must capture all the mass.

*True by definition.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 90C26. arXiv math.OC, math.FA. Level 4: research.

**Definition.** The largest-K norm of an integrable function u is the supremum of the integral of \|u\| over A over measurable sets A of measure at most K. The L¹ norm is the integral of \|u\| over the whole space. The support of u is the set where u is not zero.

**Problem.** Take an integrable function u and a number K strictly between zero and the total measure. The support of u has measure at most K exactly when the two norms are equal.

**How the definition helps.** The largest-K norm already integrates \|u\| over a set that can hold the whole support, so one direction holds by the definition. For the converse, suppose the support has measure greater than K. Then for some t &gt; 0 the set where \|u\| &gt; t also has measure greater than K, by our own argument. Every allowed set misses part of it, so it misses mass at least t times the excess measure, by our own calculation. Thus the two norms differ, even when no set attains the supremum.

**Paper or page:** [The Largest-K-Norm for General Measure Spaces and a DC Reformulation for L⁰-Constrained Problems in Function Spaces](https://arxiv.org/abs/2403.19437v2). It says: “Let u ∈ L¹(Ω) and K ∈ (0, μ(Ω)) be given. Then the following statements are equivalent: ‖u‖₀ ≤ K, ‖u‖₁ = \|u\|<sub>K</sub>, \|u\|<sub>H</sub> = \|u\|<sub>K</sub> for all H ∈ (K, μ(Ω)\].”

**Sources:**

- [Bastian Dittrich, Daniel Wachsmuth, The Largest-K-Norm for General Measure Spaces and a DC Reformulation for L⁰-Constrained Problems in Function Spaces, arXiv:2403.19437v2 (2024)](https://arxiv.org/abs/2403.19437v2)

### A new weak derivative lets weighted Sobolev spaces contain nonintegrable functions

**Remember:** Change the derivative, not the domain, when the weight vanishes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J70. arXiv math.AP, math.FA. Level 4: research.

**Definition.** A weighted Sobolev space measures a function and its derivatives with weights that may come close to zero. The usual distributional derivative needs the function to be locally integrable. The paper replaces it with a new weak derivative, defined by integration by parts with a weight function, that does not need this.

**Problem.** Under the paper's conditions on the weight and the coefficients, a degenerate elliptic boundary value problem has a unique weak solution in the new space. The paper gives cases where this solution is not locally integrable.

**How the definition helps.** With the new derivative, the equation has a meaning for functions that the distributional derivative cannot handle. The paper says this replaces the older method of removing the points where a weight is very small. The existence proof still needs a Poincaré inequality and estimates on the coefficients.

**Paper or page:** [A new approach to weighted Sobolev spaces](https://arxiv.org/abs/2311.12635v5). It says: “The basic idea is to replace the distributional derivative with a new notion of weak derivative. In this way, non-locally integrable functions can considered in these spaces.”

**Sources:**

- [Djamel eddine Kebiche, A new approach to weighted Sobolev spaces, arXiv:2311.12635 (2025)](https://arxiv.org/abs/2311.12635v5)

### Chains of short steps define Sobolev spaces where continuous curves are missing

**Remember:** Short steps can measure variation even when continuous paths are missing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 53C23. arXiv math.MG, math.FA. Level 4: research.

**Definition.** A metric measure space is a metric space with a measure. An ε-chain is a finite list of points with each step at most ε long. A chain upper gradient g bounds the change of a function between the two ends of any chain. The bound is the sum of g along the steps, weighted by step length, and the chain Sobolev space lets ε tend to zero.

**Problem.** Take a metric measure space that need not be complete. Its chain Sobolev space equals the space obtained by relaxing the local Lipschitz constants of Lipschitz functions. The space defined by upper gradients along continuous curves can be different.

**How the definition helps.** Short chains can jump over gaps that break every continuous curve, so chain tests still see how a function changes, in our own explanation. Our own example is the set of points in the plane with both coordinates irrational, with Lebesgue measure. Every continuous curve in it is constant, so the curve test gives every function zero gradient. Chains still detect the true variation. The difficult part is proving that chain tests and Lipschitz approximation give the same space.

**Paper or page:** [Sobolev spaces via chains in metric measure spaces](https://arxiv.org/abs/2408.15071v1). It says: “In the possible non-complete setting, we prove that the chain Sobolev space is equal to the one defined via relaxation of the local Lipschitz constant of Lipschitz functions,”

**Sources:**

- [Emanuele Caputo, Nicola Cavallucci, Sobolev spaces via chains in metric measure spaces, arXiv:2408.15071v1 (2024)](https://arxiv.org/abs/2408.15071v1)

### Lipschitz-domain harmonic functions of Sobolev order one-half with zero trace vanish

**Remember:** Define the boundary value before asking whether it vanishes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25, 35J67. arXiv math.AP. Level 4: research.

**Definition.** A trace assigns boundary values to functions that need not have pointwise values on the boundary Γ. Functions in H¹ᐟ²(Ω) have no trace in general, since the usual trace needs order above one-half. The paper defines the space E of v ∈ H¹ᐟ²(Ω) with ∇v in the dual of H¹ᐟ²(Ω). Restriction to Γ, defined on smooth functions, extends by continuity to a bounded map from E into L²(Γ).

**Problem.** Let Ω be a bounded Lipschitz domain in ℝᴺ with N ≥ 2, so its boundary is locally the graph of a Lipschitz function. If u ∈ H¹ᐟ²(Ω) is harmonic and its trace on Γ is zero, then u = 0 in Ω.

**How the definition helps.** The new trace gives a precise meaning to u = 0 on Γ at a regularity where the usual trace does not exist. Our own reading is that a harmonic function in H¹ᐟ²(Ω) must first be shown to lie in E. The uniqueness proof still needs the paper's estimates. Some claims of this paper go against the literature, so the result should be read with care.

**Paper or page:** [Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains](https://arxiv.org/abs/2509.08543v2). It says: “If u ∈ H¹⁄²(Ω) is harmonic and u = 0 on Γ, then u = 0 in Ω.”

**Sources:**

- [Chérif Amrouche, Mohand Moussaoui, Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains, arXiv:2509.08543v2 (2025)](https://arxiv.org/abs/2509.08543v2)

### Upper gradients give Sobolev spaces on metric spaces that match classical ones

**Remember:** Bound the change along every curve, and you never need a derivative.

*Makes the theorem clean to state or prove.* MSC 46E36 (Sobolev (and similar kinds of) spaces of functions on metric spaces; analysis on metric spaces), 30L99. arXiv math.FA, math.MG. Level 4: research.

**Definition.** A Borel function g ≥ 0 is an upper gradient of u if \|u(x) − u(y)\| is at most the integral of g along every rectifiable curve from x to y. The Newtonian space N¹,ᵖ consists of the functions u in Lᵖ that have an upper gradient in Lᵖ. The definition uses only distances, lengths of curves and a measure, so it works on any metric measure space.

**Problem.** On a Carnot group, the Newtonian space N¹,ᵖ agrees with the usual horizontal Sobolev space.

**How the definition helps.** An upper gradient controls a function along curves, and curves exist in any metric space, so the Sobolev space can be defined at all. Because the new space agrees with the classical one on Carnot groups, theorems proved for Newtonian spaces apply to the classical spaces too. The work moves into that agreement theorem, which goes back to Shanmugalingam for ℝⁿ (our own remark). Good behaviour, such as density of Lipschitz functions, still needs extra assumptions like a Poincaré inequality (our own remark).

**Paper or page:** [On some intrinsic differentiability properties for Absolutely continuous functions between Carnot groups and the Area formula](https://arxiv.org/abs/2405.05024v2). It says: “Let 1&lt;p&lt;∞ and Ω⊂𝔾 be an open set of a Carnot group 𝔾≡ℝⁿ. Then N¹,ᵖ𝔾(Ω)= W¹,ᵖ𝔾(Ω)”

**Sources:**

- [Andrea Pinamonti, Francesco Serra Cassano, Kilian Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, arXiv:2405.05024 (2024)](https://arxiv.org/abs/2405.05024v2)
- [A. Pinamonti, F. Serra Cassano, K. Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, J. Funct. Anal. 289 (2025) 110948](https://doi.org/10.1016/j.jfa.2025.110948)
- [N. Shanmugalingam, Newtonian spaces: an extension of Sobolev spaces to metric measure spaces, Rev. Mat. Iberoam. 16 (2000) 243–279](https://doi.org/10.4171/rmi/275)

### Keeping the scaling degree leaves only finitely many extensions of a distribution

**Remember:** Scaling degree measures how fast a distribution blows up at a point.

*Rules out counterexamples. Confidence: medium.* MSC 46F10 (Operations with distributions and generalized functions), 81T15. arXiv math.AP, math-ph. Level 4: research.

**Definition.** The scaling degree of a distribution u at a point measures how singular u is there. It is the infimum of the numbers ω such that λ to the power ω times u(λx) tends to 0 as λ → 0. The degree of divergence is the scaling degree minus the dimension of the space.

**Problem.** Let u be a distribution on ℝⁿ ∖ {0} with finite scaling degree at 0. Its extensions to ℝⁿ with the same scaling degree form a finite-dimensional affine space, indexed by finitely many derivatives of the delta distribution. The extension is unique when the degree of divergence is negative.

**How the definition helps.** If the extension must keep the scaling degree, only a finite amount of choice remains. Without this condition, you can add any combination of derivatives of the delta distribution. In perturbative quantum field theory, this finite freedom is the renormalization freedom. The proof that an extension exists is the real work.

**nLab:** [extension of distributions](https://ncatlab.org/nlab/show/extension+of+distributions), [scaling degree of a distribution](https://ncatlab.org/nlab/show/scaling+degree+of+a+distribution). It says: “However, if one requires that the scaling degree of the extended distribution at the given point is compatible with that of the original distribution, then there is only a finite set of possible extensions”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds, Communications in Mathematical Physics 208 (2000) 623–661; arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### Colombeau algebras multiply distributions by keeping only smooth products

**Remember:** Ask the product to agree only on smooth functions, and distributions can multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F30 (Generalized functions for nonlinear analysis (Rosinger, Colombeau, nonstandard, etc.)). arXiv math.FA, math.AP. Level 4: research.

**Definition.** A differential algebra is an algebra with a derivative that obeys the Leibniz rule. A Colombeau algebra is an associative differential algebra that contains the distributions. Its product agrees with the pointwise product of smooth functions. It need not agree with the pointwise product of continuous functions.

**Problem.** No associative algebra with unit 1 that contains the distributions, with a Leibniz derivative extending theirs, has a product extending the pointwise product of continuous functions (Schwartz, 1954). Colombeau algebras show that such an algebra does exist if the product need only extend the pointwise product of smooth functions.

**How the definition helps.** Colombeau's definition drops just one of Schwartz's requirements, and then a product exists. It weakens only the requirement on the product, from continuous to smooth functions. The article notes that people often misread Schwartz's result as saying that no multiplication is possible at all. The cost is that the product of continuous functions that are not smooth need not agree with their pointwise product.

**Wikipedia:** [Colombeau algebra](https://en.wikipedia.org/wiki/Colombeau_algebra), [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “However, if one only wants to preserve the product of smooth functions instead such a construction becomes possible, as demonstrated first by Colombeau.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized smooth functions extend distributions and still compose and take maxima

**Remember:** Make distributions honest functions on a bigger number line.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F30 (Generalized functions for nonlinear analysis (Rosinger, Colombeau, nonstandard, etc.)). arXiv math.FA. Level 4: research.

**Definition.** The scalars form a ring of nets of real numbers indexed by a small parameter ε, taken modulo nets that tend to 0 fast enough. This ring contains infinitesimals and infinitely large numbers. A generalized smooth function is a map on points of this ring. For each ε, an ordinary smooth function gives it, with suitable bounds on all derivatives.

**Problem.** Generalized smooth functions contain the Schwartz distributions and form a category, so they can be composed. They keep calculus theorems such as the extreme value theorem on suitable compact sets.

**How the definition helps.** Because the new objects are true set-theoretical maps, composition and point values make sense by definition. Each map comes from a net of smooth functions, so many classical theorems pass over one ε at a time. The price is the new ring of scalars, which is not a field and is not totally ordered (our own remark).

**Paper or page:** [A Grothendieck topos of generalized functions I: basic theory](https://arxiv.org/abs/2101.04492v2), [A Grothendieck topos of generalized functions I: basic theory](https://arxiv.org/abs/2101.04492v2), [A Grothendieck topos of generalized functions I: basic theory](https://arxiv.org/abs/2101.04492v2). It says: “We introduce a category of generalized functions as smooth set-theoretical maps on (multidimensional) points of a ring of scalars containing infinitesimals and infinities. This category extends Schwartz distributions.”

**Sources:**

- [Paolo Giordano, Michael Kunzinger, Hans Vernaeve, A Grothendieck topos of generalized functions I: basic theory, arXiv:2101.04492 (2021), Dissertationes Math. 592 (2024)](https://arxiv.org/abs/2101.04492v2)

### A bounded-transform condition restores bulk–edge correspondence for unbounded Hamiltonians

**Remember:** Squash the energy into a bounded operator and require it to be an observable.

*Rules out counterexamples. Confidence: medium.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46L80, 47A60. arXiv math-ph, math.OA. Level 4: research.

**Definition.** A Hamiltonian is a self-adjoint operator that gives the energy of a quantum system. A self-adjoint operator H is strongly affiliated to an algebra of observables if its bounded transform F(H) = H/√(1 + H²) lies in that algebra. A unit is added to the algebra first if it has none.

**Problem.** Take a Hamiltonian with an edge whose bulk part has a spectral gap around zero. If it is strongly affiliated to the edge algebra, the bulk and edge invariants correspond under the boundary map of K-theory. K-theory classes are invariants built from projections in the algebra.

**How the definition helps.** Strong affiliation puts a bounded function of the Hamiltonian inside the algebra, so the bulk invariant can be defined. With a gap at zero, the projection onto negative energies is a continuous function of F(H) on its spectrum (our own words). So it lies in the algebra and gives a K-theory class, and the paper proves that the edge class is the image of the bulk class. Some boundary conditions for unbounded operators give known violations of the correspondence.

**Paper or page:** [The role of self-adjoint extensions in the bulk-edge correspondence](https://arxiv.org/abs/2510.01368v1). It says: “More generally, if Ĥ is not necessarily bounded from below then the K-theoretic bulk-edge correspondence holds under the strong affiliation condition F(Ĥ)= Ĥ(1+Ĥ²)<sup>-1/2</sup> ∈ M<sub>N</sub>(𝒜̂<sup>∼</sup>) where 𝒜̂<sup>∼</sup> is the conditional unitization.”

**Sources:**

- [Johannes Kellendonk, Tom Stoiber, The role of self-adjoint extensions in the bulk-edge correspondence, arXiv:2510.01368v1 (2025)](https://arxiv.org/abs/2510.01368v1)

### Choi matrices detect complete positivity only for bases shaped like matrix units

**Remember:** Choi's test survives any basis of the form \|ζᵢ⟩⟨ζⱼ\|, and no other.

*Rules out counterexamples. Confidence: medium.* MSC 46L07 (Operator spaces and completely bounded maps), 47B65, 15A30. arXiv math.OA. Level 4: research.

**Definition.** For a linear map φ on n × n matrices, the Choi matrix is the sum of eᵢⱼ ⊗ φ(eᵢⱼ), with eᵢⱼ the matrix units. Choi's theorem says that φ is completely positive exactly when this matrix is positive. One can build the same sum from another basis {bᵢⱼ} of the n × n matrices.

**Problem.** Let {bᵢⱼ} be a basis of the n × n matrices. The sum of bᵢⱼ ⊗ φ(bᵢⱼ) is positive exactly for the completely positive φ if and only if bᵢⱼ = \|ζᵢ⟩⟨ζⱼ\| for some basis ζ₁, …, ζₙ of ℂⁿ.

**How the definition helps.** Our own reason: a basis of the form \|ζᵢ⟩⟨ζⱼ\| is the matrix-unit basis after a change of basis S of ℂⁿ. So the new Choi matrix of φ is a congruence of the ordinary Choi matrix of φ composed with conjugation by S (our own). Congruence by an invertible matrix keeps positivity, and the composed map is completely positive exactly when φ is (our own). The paper shows that this shape is also necessary, so the Paulsen–Shultz sufficient condition cannot be weakened.

**Paper or page:** [Choi matrices revisited](https://arxiv.org/abs/2206.09324), [Choi matrices revisited](https://arxiv.org/abs/2206.09324). It says: “considered the question if one can replace matrix units by another basis of matrix algebras in the definition of Choi matrix to retain the correspondence between complete positivity of maps and positivity of Choi matrices”

**Sources:**

- [Seung-Hyeok Kye, Choi matrices revisited, J. Math. Phys. 63 (2022), 092202, arXiv:2206.09324](https://arxiv.org/abs/2206.09324)
- [Man-Duen Choi, Completely positive linear maps on complex matrices, Linear Algebra Appl. (1975)](https://doi.org/10.1016/0024-3795(75)90075-0)

### Soft inductive limits make separable nuclear operator systems limits of matrices

**Remember:** Let the connecting maps compose only approximately, and nuclear systems become matrix limits.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L07 (Operator spaces and completely bounded maps), 18A30. arXiv math.OA, math.FA. Level 4: research.

**Definition.** An operator system is a self-adjoint subspace of a C\*-algebra that contains the unit, with the order on its matrices. It is nuclear when its identity map is a limit of completely positive maps through matrix algebras (our own summary). A soft inductive system asks its connecting maps to compose only asymptotically, and a strict one asks this exactly (our own reading of the word).

**Problem.** Every nuclear operator system is a soft inductive limit of matrix algebras. A separable operator system is nuclear exactly when it is an inductive limit of matrix algebras, which generalizes the theorem of Lazar and Lindenstrauss for function systems.

**How the definition helps.** The completely positive approximations of a nuclear system already form a soft inductive system, so nuclear systems are soft limits of matrix algebras. For separable systems the paper upgrades this to a strict sequence, and conversely shows such limits are nuclear (our own reading). The abstract credits the separable result to an argument of Ding and Peterson, which in our own reading is where the main work lies.

**Paper or page:** [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019). It says: “we utilize an argument of Ding and Peterson to show that a separable operator system is nuclear if and only if it is an inductive limit of matrix algebras, generalizing a classic Theorem of Lazar and Lindenstrauss”

**Sources:**

- [Kristin Courtney, Niklas Galke, Lauritz van Luijk, Alexander Stottmeister, Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem, arXiv:2510.02019 (2025)](https://arxiv.org/abs/2510.02019)

### Countable approximate units make Morita equivalence the same as stable isomorphism

**Remember:** Countable approximate units keep Morita equivalent algebras inside one separable stabilization.

*Rules out counterexamples.* MSC 46L08 (\\(C<sup>\*\\</sup>)-modules), 46L80. arXiv math.OA. Level 4: research.

**Definition.** A C\*-algebra is σ-unital when it has a countable approximate unit, a sequence eₙ with eₙa → a for every element a. Every separable C\*-algebra is σ-unital. Two C\*-algebras A and B are stably isomorphic when A ⊗ 𝒦 ≅ B ⊗ 𝒦, where 𝒦 is the algebra of compact operators on a separable infinite-dimensional Hilbert space.

**Problem.** Two σ-unital C\*-algebras are strongly Morita equivalent if and only if they are stably isomorphic. In particular, they then have isomorphic K-groups.

**How the definition helps.** The countability condition removes algebras that are too large for the separable Hilbert space inside 𝒦. Without it the theorem fails. Take the compact operators 𝒦(H) on a non-separable Hilbert space H. Then ℂ and 𝒦(H) are Morita equivalent through H, but 𝒦(H) ⊗ 𝒦 is not separable while ℂ ⊗ 𝒦 = 𝒦 is (our own). With a countable approximate unit, the bimodule is countably generated, and a stabilization theorem for countably generated Hilbert modules does the work (our own).

**Paper or page:** [Refinement of Higher-Rank Graph Reduction](https://arxiv.org/abs/2211.17156). It says: “Let 𝔸₁ and 𝔸₂ be C\*-algebras with countable approximate identities. Then 𝔸₁ ⊗ 𝒦 ≅ 𝔸₂ ⊗ 𝒦 if and only if 𝔸₁ is Morita equivalent to 𝔸₂”

**Sources:**

- [Lawrence G. Brown, Philip Green and Marc A. Rieffel, Stable isomorphism and strong Morita equivalence of C\*-algebras, Pacific Journal of Mathematics 71 (1977) 349–363](https://doi.org/10.2140/pjm.1977.71.349)

### Selfless C\*-algebras with a trace are simple with strict comparison

**Remember:** If A cannot tell itself from its free product, A is regular.

*True by definition.* MSC 46L09 (Free products of \\(C<sup>\*\\</sup>)-algebras), 46L35, 46L54. arXiv math.OA. Level 4: research.

**Definition.** Let A ≠ ℂ be a unital C\*-algebra with a state ρ whose GNS representation is faithful. Call (A, ρ) selfless when A embeds existentially, as first factor, in the reduced free product of (A, ρ) with C\*ᵣ(F∞). Here C\*ᵣ(F∞) is the reduced C\*-algebra of the free group on countably many generators. Existential means, roughly, that polynomial equations with approximate solutions in the free product already have approximate solutions in A.

**Problem.** If (A, ρ) is selfless and ρ is a trace, then A is simple, ρ is its unique tracial state, and A has stable rank one and strict comparison.

**How the definition helps.** Our own reading: the definition lets one solve a problem in the free product, where free independence helps, and copy the approximate answer back into A. So simplicity, uniqueness of the trace and strict comparison follow from one structural property. Amrutam, Gao, Kunnawalkam Elayavalli and Patchell later proved that C\*ᵣ(Fₙ) is selfless for n ≥ 2, so it has strict comparison. That proof of selflessness is the hard part, and the definition moves the work there.

**Paper or page:** [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Strict comparison in reduced group C\*-algebras](https://arxiv.org/abs/2412.06031). It says: “In particular, A is a simple C\*-algebra that is either traceless, if ρ is not a trace, or such that ρ is the unique tracial state on A.”

**Sources:**

- [Leonel Robert, Selfless C\*-algebras, arXiv:2309.14188 (2023)](https://arxiv.org/abs/2309.14188)
- [Leonel Robert, Selfless C\*-algebras, Adv. Math. (2025)](https://doi.org/10.1016/j.aim.2025.110409)
- [Tattwamasi Amrutam, David Gao, Srivatsav Kunnawalkam Elayavalli, Gregory Patchell, Strict comparison in reduced group C\*-algebras, arXiv:2412.06031 (2024)](https://arxiv.org/abs/2412.06031)

### Biexactness for von Neumann algebras extends the group notion and gives solidity

**Remember:** Make biexactness a property of the algebra, and solidity follows everywhere at once.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L10 (General theory of von Neumann algebras), 46L36, 46L55. arXiv math.OA. Level 4: research.

**Definition.** In our own summary, Ozawa calls a group Γ biexact when Γ is exact and Γ × Γ acts amenably on a boundary. Ding and Peterson define biexactness for any von Neumann algebra through a weak form of nuclear embeddings. A von Neumann algebra M is solid when every diffuse subalgebra A has an amenable relative commutant A′ ∩ M.

**Problem.** Every σ-finite biexact von Neumann algebra is solid. For an exact group Γ, the algebra LΓ is biexact exactly when Γ is biexact.

**How the definition helps.** Because the property belongs to the algebra and not to a group, one proof of solidity covers every biexact algebra. The second statement shows that the new notion loses nothing for groups. The abstract gives solid crossed products that are not biexact, so the converse fails. The work is in the theory of weak nuclear embeddings that the definition uses.

**Paper or page:** [Biexact von Neumann algebras](https://arxiv.org/abs/2309.10161), [Biexact von Neumann algebras](https://arxiv.org/abs/2309.10161), [Biexact von Neumann algebras](https://arxiv.org/abs/2309.10161). It says: “We introduce the notion of biexactness for general von Neumann algebras, naturally extending the notion from group theory. We show that biexactness implies solidity for von Neumann algebras”

**Sources:**

- [Changying Ding, Jesse Peterson, Biexact von Neumann algebras, arXiv:2309.10161 (2023)](https://arxiv.org/abs/2309.10161)

### Bounded natural transformations give Hilbert spaces infinite direct sums

**Remember:** Keep only the natural transformations whose norms stay bounded across all objects.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L10 (General theory of von Neumann algebras), 46L05, 18D20. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A C\*-category is a category whose hom-sets are Banach spaces with an adjoint operation, like bounded operators between Hilbert spaces. A W\*-category is a C\*-category whose hom-spaces each have a predual (a Banach space whose dual is the hom-space). Between W\*-functors one uses only bounded natural transformations. These are the natural transformations whose components tₓ have norms below one bound for all objects X.

**Problem.** In the bicategory of W\*-categories, W\*-functors and bounded natural transformations, the category of Hilbert spaces has infinite direct sums defined by a universal property.

**How the definition helps.** Restricting to bounded natural transformations makes infinite direct sums exist as a universal property. With all natural transformations, the nLab says that the category of Hilbert spaces has only finite limits and finite colimits. These infinite direct sums generalize biproducts to infinite families. In our own reading, the definitions take over the analytic work (the predual and the boundedness).

**nLab:** [W\*-category](https://ncatlab.org/nlab/show/W%2A-category), [C-star-category](https://ncatlab.org/nlab/show/C-star-category). It says: “In particular, in this bicategory, the category of Hilbert spaces has infinite direct sums (generalizing the definition of a biproduct to infinite families of objects)”

**Sources:**

- [P. Ghez, R. Lima, J. E. Roberts, W\*-categories, Pacific Journal of Mathematics 120 (1985) 79–109](https://doi.org/10.2140/pjm.1985.120.79)

### Trace logarithms recover Mahler measure

**Remember:** Fourier turns convolution into multiplication and the trace into a torus average.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras), 11R06. arXiv math.OA, math.NT. Level 4: research.

**Definition.** For a complex matrix, the logarithm of its normalized absolute determinant averages the logarithms of its singular values. The Fuglede–Kadison determinant uses a normalized trace τ to extend this average to operators. Put \|T\| = √(T\* T), the positive square root. Define Δ(T) as the limit of exp(τ(log(\|T\| + εI))) as positive ε tends to zero.

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

**How the definition helps.** Our own reading: the definition asks a state to vanish on one left ideal, so the Hahn–Banach theorem can supply it. Since x − λ is self-adjoint and not invertible, the left ideal A(x − λ) is proper and stays at distance at least 1 from the unit. So a state that kills the ideal exists. For multiplication by x on L²\[0,1\], which has no eigenvectors, evaluation at λ is such an eigenstate (our own example).

**Paper or page:** [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049), [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049). It says: “We introduce the notion of eigenstate of an operator in an abstract C\*-algebra, and prove several properties. Most significantly, if the operator is self-adjoint, then every element of its spectrum has a corresponding eigenstate.”

**Sources:**

- [Luther Rinehart, Eigenstates of C\*-Algebras, arXiv:2102.07049 (2021)](https://arxiv.org/abs/2102.07049)

### Viewing GNS as a weak natural transformation makes it a left adjoint

**Remember:** Keep the comparison maps when changing the algebra of observables.

*Makes the theorem clean to state or prove.* MSC 46L30 (States of selfadjoint operator algebras), 18N10. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A state on a C\*-algebra is a positive linear functional of norm one, which gives an expectation for each observable. The Gelfand–Naimark–Segal (GNS) construction turns a state into a representation on a Hilbert space with a distinguished unit vector. A weak natural transformation is a 1-morphism in a 2-category whose naturality holds up to given comparison maps.

**Problem.** Restricting a representation to a unit vector gives a state. Viewed as a weak natural transformation in a suitable 2-category, GNS is left adjoint to this restriction.

**How the definition helps.** Weak naturality lets GNS vary with the algebra through comparison maps instead of equalities, so the adjunction can be stated. In our own words, changing the algebra can change the Hilbert space that a vector generates, so equality is too strong. The abstract says that weak naturality encodes functoriality, and that the universal property encodes the defining features of GNS. One still has to prove the universal property and check that the comparison maps fit together.

**Paper or page:** [From observables and states to Hilbert space and back: a 2-categorical adjunction](https://arxiv.org/abs/1609.08975v2). It says: “To properly formulate this adjoint, it must be viewed as a weak natural transformation, a 1-morphism in a suitable 2-category, rather than as a functor between categories.”

**Sources:**

- [Arthur J. Parzygnat, From observables and states to Hilbert space and back: a 2-categorical adjunction, arXiv:1609.08975v2 (2018)](https://arxiv.org/abs/1609.08975v2)
- [Arthur J. Parzygnat, From Observables and States to Hilbert Space and Back: A 2-Categorical Adjunction, Applied Categorical Structures 26(6), 1123–1157 (2018)](https://doi.org/10.1007/s10485-018-9522-6)

### Connes–Dixmier traces obey a Lidskii eigenvalue formula

**Remember:** Extra averaging in the limit lets eigenvalues compute the singular trace.

*Rules out counterexamples. Confidence: medium.* MSC 46L51 (Noncommutative measure and integration), 47B10, 47L20. arXiv math.OA. Level 4: research.

**Definition.** Here ℳ₁,∞ is the ideal of compact operators whose first n singular values add up to at most a constant times log n. An extended limit ω is a linear functional on bounded sequences that extends the ordinary limit. A Dixmier trace sends a positive T to ω applied to (1/log n) times the sum of its first n singular values. In our own summary, a Connes–Dixmier trace uses only those ω that factor through a logarithmic Cesàro mean, a kind of averaging.

**Problem.** For every Connes–Dixmier trace τω and every T in ℳ₁,∞, τω(T) = ω(aₙ). Here aₙ is (1/log n) times the sum of the eigenvalues λ of T with \|λ\| &gt; 1/n.

**How the definition helps.** The extra Cesàro averaging smooths the sequence of eigenvalue sums, so the eigenvalue formula holds for every Connes–Dixmier trace (our own reading). In the matching function space M₁,∞, the paper gives a positive function and a Dixmier trace for which a continuous form of the formula fails. So, at least in this function setting, the restriction to Connes–Dixmier traces excludes such cases. The hard part is the control of operators that are not normal, whose eigenvalues and singular values differ (our own).

**Paper or page:** [Lidskii-type formulae for Dixmier traces](https://arxiv.org/abs/1003.1813), [Lidskii-type formulae for Dixmier traces](https://arxiv.org/abs/1003.1813). It says: “Let τω be a Connes-Dixmier trace on ℳ₁,∞. We have τω(T) = ω(1/log(n) Σ\|λ\|&gt;1/n, λ∈σ(T) λ), T ∈ ℳ₁,∞.”

**Sources:**

- [A. A. Sedaev, F. A. Sukochev, D. V. Zanin, Lidskii-type formulae for Dixmier traces, Integral Equations Operator Theory 68 (2010), 551–572, arXiv:1003.1813](https://arxiv.org/abs/1003.1813)

### A quantum Bayesian inverse is a disintegration exactly for deterministic maps

**Remember:** Preserve products on the support to turn Bayesian reversal into disintegration.

*Makes the theorem clean to state or prove.* MSC 46L53 (Noncommutative probability and statistics), 46L30, 81P45. arXiv math.OA, quant-ph. Level 4: research.

**Definition.** A map on observables is almost everywhere deterministic if it preserves products on the support of the state. A Bayesian inverse reverses the map in joint expectations. A disintegration preserves the states and is a one-sided inverse on the support.

**Problem.** For completely positive unital maps of finite-dimensional operator algebras, an existing Bayesian inverse is a disintegration exactly when the original map is almost everywhere deterministic.

**How the definition helps.** The definition identifies the product rule that upgrades reversal in joint expectations to a one-sided inverse. In our own words, agreement on the support avoids demanding a product law on parts the state does not see. The equivalence does not give existence of a Bayesian inverse for every map.

**Paper or page:** [Inverses, disintegrations, and Bayesian inversion in quantum Markov categories](https://arxiv.org/abs/2001.08375v3). It says: “Then F is ω-a.e. deterministic if and only if G is a disintegration of (F, ω, ξ).”

**Sources:**

- [Arthur J. Parzygnat, Inverses, disintegrations, and Bayesian inversion in quantum Markov categories, arXiv:2001.08375v3 (2020)](https://arxiv.org/abs/2001.08375v3)

### Non-commutative disintegrations are unique once differences on null parts are ignored

**Remember:** Compare reverse maps only where the state has support.

*Rules out counterexamples.* MSC 46L53 (Noncommutative probability and statistics), 46L30, 81P45. arXiv math.OA, quant-ph. Level 4: research.

**Definition.** A disintegration is a state-preserving map that reverses a map of observables almost everywhere. Two such maps agree almost everywhere if their outputs agree after right multiplication by the support projection of the output state. That projection keeps the subspace where the state's density matrix has nonzero eigenvalues.

**Problem.** In finite dimensions, any two disintegrations of the same map and states agree almost everywhere.

**How the definition helps.** The definition ignores differences on the part of the output that the state never sees. In our own finite classical example, two conditional rules can disagree at an outcome of probability zero. Literal equality would count those as different rules. The theorem still needs a proof that all disintegrations agree on the supported part. Existence requires a separate test.

**Paper or page:** [Non-commutative disintegrations: existence and uniqueness in finite dimensions](https://arxiv.org/abs/1907.09689v2). It says: “We prove non-commutative disintegrations are a.e. unique whenever they exist.”

**Sources:**

- [Arthur J. Parzygnat, Benjamin P. Russo, Non-commutative disintegrations: existence and uniqueness in finite dimensions, arXiv:1907.09689v2 (2021), J. Noncommut. Geom. 17 (2023), no. 3, pp. 899-955](https://arxiv.org/abs/1907.09689v2)

### Relative modular entropy is nonnegative

**Remember:** The relative modular operator has mean one.

*True by definition.* MSC 46L53 (Noncommutative probability and statistics), 46L10. arXiv math.OA. Level 4: research.

**Definition.** Let φ and ψ be faithful normal states on a von Neumann algebra M, with vector representatives ξ and η. The relative modular operator is Δ = S\*S, where S is the closure of xξ ↦ x\*η for x ∈ M. The Araki relative entropy of φ with respect to ψ is the integral of −log λ against the spectral measure of Δ in ξ.

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

### Finite free cumulants make repeated derivatives of random polynomials tend to Hermite

**Remember:** Differentiation multiplies each finite free cumulant by a fixed power of k/N.

*True by definition.* MSC 46L54 (Free probability and free operator algebras), 60B20, 60F05. arXiv math.PR. Level 4: research.

**Definition.** Finite free cumulants κⱼᴺ(p) are numbers computed from the coefficients of a degree-N polynomial p, through a formal logarithm of a series. Write ∂(k\|N) p for the (N − k)-th derivative of p, scaled to be monic of degree k. Then κⱼᵏ(∂(k\|N) p) equals (k/N) to the power j − 1, times κⱼᴺ(p).

**Problem.** Let p have N independent random roots from a law with mean zero, variance one and all moments finite. Differentiate down to a fixed degree k, recenter, and rescale by √N. As N tends to infinity, the result tends to the Hermite polynomial Heₖ, and the roots have Gaussian fluctuations of order 1/√N.

**How the definition helps.** In cumulant coordinates, differentiation is just multiplication by a known factor, so the limit can be read off. The scaling law is Lemma 1.2, which the paper takes from earlier work. Our own computation follows. Rescaling x by c multiplies κⱼ by cʲ. So after differentiation and rescaling by √(N/k), κⱼ is multiplied by (k/N) to the power j/2 − 1. This tends to zero for j ≥ 3 and leaves κ₂ unchanged. Heₖ is the polynomial whose only nonzero cumulant is κ₂ = 1, so the limit is Heₖ.

**Paper or page:** [Critical points of random polynomials and finite free cumulants](https://arxiv.org/abs/2506.08910v2), [Critical points of random polynomials and finite free cumulants](https://arxiv.org/abs/2506.08910v2). It says: “We use finite free cumulants to provide compact proofs of our main results with little prerequisite knowledge of free probability required.”

**Sources:**

- [Octavio Arizmendi, Andrew Campbell, Katsunori Fujie, Critical points of random polynomials and finite free cumulants, arXiv:2506.08910 (2025)](https://arxiv.org/abs/2506.08910v2)

### Condition (L) is exactly what Cuntz–Krieger uniqueness needs

**Remember:** Every cycle needs an exit, or faithful-looking maps can fail to be faithful.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 46L05, 05C20. arXiv math.OA. Level 4: research.

**Definition.** Graph C\*-algebras are generated by projections and partial isometries that follow the edges of a graph. Condition (L) says that every cycle has an exit, an edge that leaves the cycle. Carlsen and Kang use the analogue of this condition for generalized Boolean dynamical systems.

**Problem.** For a generalized Boolean dynamical system with Condition (L), a homomorphism out of its C\*-algebra is injective when it kills none of the generating projections pA. Conversely, if this test holds for every homomorphism, Condition (L) holds.

**How the definition helps.** Our own reason: Condition (L) is exactly what makes the simple test work, and Theorem 3.6 shows that it is also necessary. The bad case is a cycle with no exit: one vertex with one loop gives C(𝕋), the continuous functions on the circle. Restriction to a closed arc is then not injective but keeps the vertex projection nonzero (our own example). Proposition 3.5 shows that Condition (L) means the associated topological graph is topologically free, and the uniqueness proof is the remaining work (our own).

**Wikipedia:** [https://en.wikipedia.org/wiki/Graph<sub>C</sub>\*-algebra](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Graph_C%2A-algebra). It says: “Let E be a graph satisfying Condition (L), and let C\*(E) be the associated graph C\*-algebra.”

**Paper or page:** [A Cuntz--Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems](https://arxiv.org/abs/2305.09232). It says: “(1) (ℬ,ℒ,θ) satisfies Condition (L). (2) If C is C\*-algebra and ρ : C\*(ℬ,ℒ,θ,ℐα) → C is a \*-homomorphism, then ρ is injective if and only if ρ(pA) ≠ 0 for each A ∈ ℬ∖{∅}.”

**Sources:**

- [Toke Meier Carlsen, Eun Ji Kang, A Cuntz–Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems, arXiv:2305.09232 (2023)](https://arxiv.org/abs/2305.09232)
- [Alex Kumjian, David Pask, Iain Raeburn, Jean Renault, Graphs, groupoids, and Cuntz–Krieger algebras, J. Funct. Anal. (1997)](https://doi.org/10.1006/jfan.1996.3001)

### Effectiveness excludes group isotropy and makes ideals meet the diagonal

**Remember:** No open isotropy, so no ideal can hide from the diagonal.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 46L05. arXiv math.OA, math.DS. Level 4: research.

**Definition.** An étale groupoid is one whose range and source maps are local homeomorphisms; its unit space G⁽⁰⁾ is the set of its points. G is effective when the interior of its isotropy, the arrows from a point to itself, is only G⁽⁰⁾. For a countable discrete group acting on a space, this means that points with trivial stabilizer are dense.

**Problem.** Let G be an effective, locally compact Hausdorff étale groupoid. Then every nonzero ideal of the reduced C\*-algebra C\*ᵣ(G), the completion in its regular representation, contains a nonzero function on the unit space.

**How the definition helps.** Effectiveness removes cases such as the group ℤ sitting over one point, where the conclusion fails. There C\*(ℤ) ≅ C(𝕋), and the ideal of functions vanishing at 1 contains no nonzero constant (our own). Effectiveness is not needed in every case, since the free group F₂ over a point has a simple reduced algebra (our own). The quoted paper proves a partial converse for the full algebra.

**Paper or page:** [Some results regarding the ideal structure of C\*-algebras of étale groupoids](https://arxiv.org/abs/2211.06126). It says: “If G is effective, then every nontrivial ideal of C\*<sub>r</sub>(G) contains a nonzero element of C₀(G⁽⁰⁾).”

**Sources:**

- [Jean Renault, A Groupoid Approach to C\*-Algebras, Lecture Notes in Mathematics 793, Springer (1980)](https://doi.org/10.1007/BFb0091072)

### Groupoid equivalence makes the Kronecker flow algebra Morita equivalent to A(θ)

**Remember:** Cut the flow by a transversal circle and get the rotation algebra.

*True by definition. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 46L85, 57R30. arXiv math.OA, math.DS. Level 4: research.

**Definition.** The Kronecker flow moves a point of the torus 𝕋² along lines of slope θ, and its C\*-algebra is the crossed product C(𝕋²) ⋊ ℝ. A transversal is a circle that meets every flow line, and the first-return map on it is rotation by angle 2πθ. Morita equivalent algebras are linked by a bimodule with compatible full inner products.

**Problem.** For irrational θ, the C\*-algebra C(𝕋²) ⋊ ℝ of the Kronecker flow is Morita equivalent to the noncommutative torus A(θ) = C(𝕋) ⋊ ℤ.

**How the definition helps.** The symmetric imprimitivity theorem, with G = ℝ², H = ℤ² and K the line ℝ(1, θ), avoids building a bimodule by hand (our own). It makes C(ℤ²∖ℝ²) ⋊ K, the Kronecker flow algebra, Morita equivalent to C₀(ℝ²/K) ⋊ ℤ² (our own). The second algebra is C₀(ℝ) ⋊ (ℤ + θℤ), which one more such step makes Morita equivalent to A(θ) (our own). In geometric terms the transversal circle cuts the flow down to its first-return rotation (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “The following Lie groupoid is Morita equivalent to the above Lie groupoid: take the groupoid quotient of U(1)² (i.e., a torus) by the action of the Lie group R of real numbers”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976)](https://doi.org/10.1007/BF01418238)

### Groupoid equivalence makes the symmetric imprimitivity theorem a one-line check

**Remember:** Let H and K act on G from two sides.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 46L08. arXiv math.OA. Level 4: research.

**Definition.** A space Z is an equivalence between groupoids G and H when G acts on Z from the left and H from the right. Both actions are free, with no nontrivial stabilizers, and proper, they commute, and each orbit space is the other groupoid's unit space. A transformation groupoid K ⋉ Y encodes an action of a group K on a space Y.

**Problem.** For closed subgroups H and K of a locally compact group G, the crossed products C₀(G/K) ⋊ H and C₀(H∖G) ⋊ K are Morita equivalent.

**How the definition helps.** The group G itself is visibly an equivalence between the two transformation groupoids, with H acting by left and K by right translation (our own). Both actions are free and proper, they commute, and the orbit spaces are H∖G and G/K (our own). The quoted equivalence theorem of Muhly, Renault and Williams then gives a bimodule with compatible full inner products, which is a Morita equivalence. Rieffel and Green instead wrote down the bimodule and checked its inner products by hand (our own).

**Paper or page:** [Groupoids, equivalence bibundles and bimodules for noncommutative solenoids](https://arxiv.org/abs/2503.13251). It says: “C<sub>c</sub>(Z) can be completed to a C\*(G,λ) - C\*(H,μ)- imprimitivity bimodule X=X<sub>H</sub><sup>G</sup>.”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976) 7–22](https://doi.org/10.1007/BF01418238)

### Minimal effective groupoids have simple algebras, which excludes the trivial action

**Remember:** Dense orbits and no open isotropy give a simple algebra.

*Rules out counterexamples.* MSC 46L55 (Noncommutative dynamical systems), 22A22, 37A55. arXiv math.OA, math.DS. Level 4: research.

**Definition.** An étale groupoid, with range and source maps that are local homeomorphisms, is minimal when every orbit is dense in the unit space. It is effective when its isotropy, the arrows from a point to itself, has no interior outside the units. For a group acting on a space, these say that every orbit is dense and that points with trivial stabilizer are dense.

**Problem.** For a second countable Hausdorff étale groupoid G that is minimal and effective, the reduced C\*-algebra C\*ᵣ(G), the completion in its regular representation, is simple. In particular the noncommutative torus A(θ) is simple for irrational θ.

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

**Remember:** Crossing by G then by its dual returns A, plus compacts.

*Makes the theorem clean to state or prove.* MSC 46L55 (Noncommutative dynamical systems), 46L05. arXiv math.OA. Level 4: research.

**Definition.** Let an abelian group G act on A, with dual group Ĝ of characters, the continuous homomorphisms from G to the circle. The dual action of Ĝ on A ⋊ G fixes A and multiplies the unitary of s ∈ G by γ(s). The stabilization A ⊗ 𝒦 is Morita equivalent to A, that is, linked to it by a bimodule with compatible full inner products.

**Problem.** Let a locally compact abelian group G act on a C\*-algebra A. Then the double crossed product (A ⋊ G) ⋊ Ĝ is isomorphic to A ⊗ 𝒦(L²(G)), so it is Morita equivalent to A.

**How the definition helps.** In general the double crossed product is not A, but it is always A up to compact operators, so the theorem needs the stabilized form. For example, ℂ ⋊ ℤ is C(𝕋), and C(𝕋) ⋊ 𝕋 under rotation is 𝒦(ℓ²(ℤ)), not ℂ (our own). The dual action exists by the universal property of the crossed product (our own). The quote is the general form for any group, with a coaction in place of Ĝ (our own).

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

**Remember:** On all bounded operators, the density gives the Hamiltonian.

*Makes the theorem clean to state or prove.* MSC 46L60 (Applications of selfadjoint operator algebras to physics), 82B10. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Let αₜ be a weakly continuous automorphism group on B(H). A state ω is a KMS state at inverse temperature β &gt; 0 when, for all A, B ∈ B(H), some bounded continuous F on 0 ≤ Im z ≤ β is holomorphic inside, with F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A). A faithful normal state has the form ω(A) = Tr(ρA), with ρ a positive trace-one operator with zero kernel.

**Problem.** Let ω(A) = Tr(ρA) be a faithful normal KMS state at inverse temperature β. Put K = −(log ρ)/β. Then αₜ(A) = exp(itK)A exp(−itK), and exp(−βK) = ρ.

**How the definition helps.** The two boundary values characterize time evolution, allowing the density operator to determine a generator. Takesaki’s uniqueness theorem identifies the dynamics with the reverse modular flow at time t/β. For B(H), the modular flow at time s is conjugation by exp(is log ρ). Our own calculation substitutes s = −t/β and obtains K. Adding a scalar to K gives the same dynamics.

**Paper or page:** [Rotational KMS states and type I conformal nets](https://arxiv.org/abs/1608.08903v2). It says: “there exists positive, non-singular, selfadjoint operator H”

**Sources:**

- [Roberto Longo and Yoh Tanimoto, Rotational KMS States and Type I Conformal Nets](https://doi.org/10.1007/s00220-017-2969-8)

### Crossed products make Rieffel deformation keep K-theory

**Remember:** Same crossed product, so the same K-theory.

*True by definition.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** Let ℝⁿ act on a C\*-algebra A, and let Θ be a real antisymmetric matrix. Rieffel defined the deformed algebra A(Θ) by twisting the product of A with an oscillatory integral over the action. Kasprzak instead builds A(Θ) inside the multiplier algebra of the crossed product A ⋊ ℝⁿ, using a twisted dual action. Then A(Θ) ⋊ ℝⁿ ≅ A ⋊ ℝⁿ by construction.

**Problem.** For every action of ℝⁿ, the deformed algebra has the same K-groups: K₀(A(Θ)) ≅ K₀(A) and K₁(A(Θ)) ≅ K₁(A). For example, each noncommutative torus, a Rieffel deformation of C(𝕋²), has K₀ ≅ K₁ ≅ ℤ².

**How the definition helps.** The crossed products of A and A(Θ) agree by definition, and Connes' Thom isomorphism fixes the K-theory of a crossed product by ℝⁿ. Connes' theorem says that a crossed product by ℝⁿ shifts K-theory by n degrees, modulo 2. Applying it to A and to A(Θ) gives isomorphic K-groups after the same shift. The work moves into the comparison of this construction with Rieffel's algebra, and into Connes' theorem.

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690), [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “For a C\*-algebra 𝒜 one has K₀(𝒜\_Θ) = K₀(𝒜) and K₁(𝒜\_Θ)=K₁(𝒜).”

**Sources:**

- [Paweł Kasprzak, Rieffel deformation via crossed products, Journal of Functional Analysis 257 (2009) 1288–1332](https://doi.org/10.1016/j.jfa.2009.05.013)
- [Marc A. Rieffel, Deformation quantization for actions of ℝᵈ, Memoirs of the AMS 106, no. 506 (1993)](https://doi.org/10.1090/memo/0506)

### Crossed products make Rieffel deformation keep nuclearity

**Remember:** Nuclearity survives crossed products by ℝⁿ, and both algebras share one.

*True by definition. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L05. arXiv math.OA. Level 4: research.

**Definition.** Kasprzak defines the Rieffel deformation A(Θ) of a C\*-algebra A with an action of ℝⁿ inside the multiplier algebra of A ⋊ ℝⁿ. This gives A(Θ) ⋊ ℝⁿ ≅ A ⋊ ℝⁿ. A C\*-algebra is nuclear if its algebraic tensor product with every C\*-algebra has only one C\*-norm.

**Problem.** The Rieffel deformation A(Θ) is nuclear if and only if A is nuclear.

**How the definition helps.** Nuclearity passes to and from crossed products by ℝⁿ, and the two crossed products agree by definition. Crossed products by amenable groups such as ℝⁿ keep nuclearity, so A ⋊ ℝⁿ ≅ A(Θ) ⋊ ℝⁿ is nuclear when A is. Takai duality recovers A(Θ), tensored with the compact operators, as a crossed product of A(Θ) ⋊ ℝⁿ by ℝⁿ, so A(Θ) is nuclear too. The converse follows because A is the deformation of A(Θ) by −Θ (our own summary of the argument).

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “A C\*-algebra 𝒜\_Θ is nuclear if and only if 𝒜 is nuclear.”

**Sources:**

- [Paweł Kasprzak, Rieffel deformation via crossed products, Journal of Functional Analysis 257 (2009) 1288–1332](https://doi.org/10.1016/j.jfa.2009.05.013)

### Discrete ħ lets matrices quantize the sphere

**Remember:** Quantize only at ħ = 1/N, and finite matrices suffice.

*Makes the theorem clean to state or prove.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 53D50. arXiv math.OA, math.SG. Level 4: research.

**Definition.** A strict deformation quantization, in one common form of the definition, gives a C\*-algebra for each ħ in a set I ⊂ \[0, 1\] that accumulates only at 0. It also gives maps Q from a dense Poisson subalgebra of functions into these algebras. As ħ → 0, they must satisfy ‖Q(f)Q(g) − Q(fg)‖ → 0 and ‖\[Q(f), Q(g)\]/iħ − Q({f,g})‖ → 0, and ‖Q(f)‖ must tend to the supremum norm of f.

**Problem.** The 2-sphere has a strict deformation quantization with ħ = 1/N, by Bordemann, Meinrenken and Schlichenmaier. Each algebra is the algebra of (N + 1) × (N + 1) matrices, made of Berezin–Toeplitz operators on holomorphic sections of the N-th power of a line bundle.

**How the definition helps.** The definition asks for algebras only at a discrete set of values of ħ, such as ħ = 1/N, where the needed line bundle exists. A definition that asked for a convergent star product would need much harder analysis, and the nLab says that this was open for the sphere. The Toeplitz operator of f multiplies a holomorphic section by f and projects back, so it acts on an (N + 1)-dimensional space. The work moves into the estimates of Bordemann, Meinrenken and Schlichenmaier for products and commutators of Toeplitz operators.

**nLab:** [deformation quantization of the 2-sphere](https://ncatlab.org/nlab/show/deformation+quantization+of+the+2-sphere). It says: “One definition of strict deformation quantization takes it to be such a formal deformation quantization which happens to converge for finite real number values of ħ. This is not known to exist for the 2-sphere.”

**Paper or page:** [Strict Quantization for Compact Pseudo-Kähler Manifolds and Group Actions](https://arxiv.org/abs/2410.03322). It says: “the semi-classical Dirac condition holds ‖ki\[T<sup>G<sub>k</sub></sup>\[f̃\], T<sup>G<sub>k</sub></sup>\[g̃\]\] − T<sup>G<sub>k</sub></sup>\[{f̃, g̃}\]‖ = O(1/k)”

**Sources:**

- [Martin Bordemann, Eckhard Meinrenken, Martin Schlichenmaier, Toeplitz quantization of Kähler manifolds and gl(N), N → ∞ limits, Communications in Mathematical Physics 165 (1994) 281–296](https://doi.org/10.1007/BF02099772)

### Opposite phases invert Rieffel deformation

**Remember:** Opposite phases cancel, so deforming by Θ then −Θ does nothing.

*True by definition. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L85. arXiv math.OA. Level 4: research.

**Definition.** Suppose ℝⁿ acts on A periodically, that is, through a torus action. Then A splits into spectral subspaces A(p), p ∈ ℤⁿ, on which the torus acts by the character p. The Rieffel deformation A(Θ) multiplies a ∈ A(p) and b ∈ A(q) with an extra phase factor exp(2πi⟨Θp, q⟩). Then it completes in a C\*-norm.

**Problem.** The torus action passes to A(Θ), and deforming A(Θ) by −Θ gives back A. The identity map on spectral subspaces is an equivariant \*-isomorphism from A to the deformation of A(Θ) by −Θ.

**How the definition helps.** The phase factors for Θ and for −Θ cancel, so the twice-deformed product agrees with the product of A on each pair of spectral subspaces. The torus still acts on A(Θ) by the same characters, so the second deformation is defined. For the norms, a faithful representation π of A gives a faithful twisted representation πΘ, and twisting again by −Θ returns π (our own summary). With Rieffel's definition by oscillatory integrals, the same fact needs a computation with iterated integrals.

**Paper or page:** [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690), [On q-tensor products of Cuntz algebras](https://arxiv.org/abs/2112.06690). It says: “The mapping id : 𝒜 → (𝒜\_Θ)<sub>−Θ</sub> is an equivariant \*-isomorphism.”

**Sources:**

- [Marc A. Rieffel, Deformation quantization for actions of ℝᵈ, Memoirs of the AMS 106, no. 506 (1993)](https://doi.org/10.1090/memo/0506)

### Rieffel deformation transports invariant convolution semigroups

**Remember:** Maps that commute with the action extend to the crossed product and restrict.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L65 (Quantizations, deformations for selfadjoint operator algebras), 46L67. arXiv math.OA. Level 4: research.

**Definition.** Let Γ be a closed abelian subgroup of a locally compact quantum group 𝔾, and Ψ a 2-cocycle on the dual group of Γ. The function algebra of the Rieffel deformation sits inside the multiplier algebra of the crossed product of C₀(𝔾) by Γ². A twisted dual action picks it out. A convolution semigroup is a weak-star continuous family of states μₜ with μₛ ⋆ μₜ = μₛ₊ₜ.

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

### Cancellation in place of an antipode still produces counit and antipode

**Remember:** Ask the Galois maps to be bijective, and ε and S appear.

*True by definition. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 16T05. arXiv math.QA, math.OA. Level 4: research.

**Definition.** Van Daele's multiplier Hopf algebras replace the antipode axiom by a cancellation property. The maps a ⊗ b ↦ Δ(a)(1⊗b) and a ⊗ b ↦ (a⊗1)Δ(b) must be bijections of A ⊗ A. These are the Galois maps of A over itself, and they make sense when A has no unit, as for finitely supported functions on a discrete group.

**Problem.** A bornological algebra with comultiplication and a positive faithful left-invariant integral has cancellation exactly when a counit ε and an antipode S exist with the Hopf-type identities. In that case ε and S are unique.

**How the definition helps.** The antipode is read off from the inverse of the Galois map, through m(S⊗id)(Δ(a)(1⊗b)) = ε(a)b. So existence and uniqueness of ε and S follow from the bijections. Unlike an antipode, cancellation needs no unit, so one definition covers compact and discrete quantum groups and their duals. The work moves into Van Daele's construction of ε and S from the inverse maps.

**Paper or page:** [Bornological quantum groups as locally compact quantum groups](https://arxiv.org/abs/2106.02386). It says: “The following are equivalent: (i) Δ satisfies the cancellation property, (ii) there exists an essential homomorphism ε:𝒜→ℂ, called the counit, and a bounded algebra antiautomorphism coalgebra antiautomorphism S:𝒜→𝒜, called the antipode,”

**Sources:**

- [A. Van Daele, Multiplier Hopf algebras, Transactions of the American Mathematical Society 342 (1994) 917–932](https://doi.org/10.1090/S0002-9947-1994-1220906-5)
- [Bornological quantum groups as locally compact quantum groups (arXiv 2106.02386)](https://arxiv.org/abs/2106.02386)

### Fixing a state lets quantum automorphism groups of matrix algebras exist

**Remember:** Fix a state on Mₙ, and a largest quantum symmetry group appears.

*Rules out counterexamples. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 4: research.

**Definition.** An action of a compact quantum group on a finite-dimensional C\*-algebra B is a unital \*-homomorphism α: B → B ⊗ C(G) satisfying the coaction identities. Wang's quantum automorphism group of (B, ψ) is the universal compact quantum group among actions that preserve a fixed faithful state ψ, that is, (ψ⊗id)α(b) = ψ(b)1.

**Problem.** For every finite-dimensional C\*-algebra B with a faithful state ψ, a universal compact quantum group acting on B and preserving ψ exists. Without the condition on ψ, the matrix algebra Mₙ with n ≥ 2 has no universal compact quantum group acting on it.

**How the definition helps.** Preserving ψ makes the action unitary on the Hilbert space L²(B, ψ), so the universal object is a quotient of a universal unitary quantum group (our own). Without ψ, the category of all actions on Mₙ has no final object, as Wang showed (our own). For B = ℂⁿ no state is needed: the quantum permutation group Sₙ⁺ is universal among all actions, and it preserves the uniform state (our own).

**Paper or page:** [On the von Neumann algebra of class functions on a compact quantum group](https://arxiv.org/abs/2103.06216), [A quantum Frucht's theorem and quantum automorphisms of quantum Cayley graphs](https://arxiv.org/abs/2503.11149). It says: “the quantum automorphism group of a finite dimensional C∗-algebra equipped with a δ-form”

**Sources:**

- [S. Wang, Quantum symmetry groups of finite spaces, Communications in Mathematical Physics 195 (1998) 195–211](https://doi.org/10.1007/s002200050385)

### Monoidal equivalence lets a genuine quantum group share SO(3)'s representations

**Remember:** Same tensor category, different dimensions: SO(3) and S₄⁺ are twins.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 18M05. arXiv math.OA, math.QA. Level 4: research.

**Definition.** Two compact quantum groups are monoidally equivalent when their categories of finite-dimensional unitary representations are equivalent as C\*-tensor categories. Bichon, De Rijdt and Vaes showed that such an equivalence is the same as a bi-Galois object. This is an algebra with commuting ergodic actions of full multiplicity of both quantum groups.

**Problem.** The quantum permutation group S₄⁺ is monoidally equivalent to SO(3), though C(S₄⁺) is not commutative. So S₄⁺ has the fusion rules of SO(3), and properties of discrete duals that depend only on the tensor category pass between them.

**How the definition helps.** Equivalence at the level of tensor categories forgets the dimensions, so a classical group and a noncommutative one can be compared. Fusion rules then transfer by definition. Analytic properties, such as the central approximation property of the duals, transfer by theorems that use the bi-Galois object. The work moves into Banica's computation of the representations of S₄⁺.

**Paper or page:** [Classification of Quantum Graphs on M₂ and their Quantum Automorphism Groups](https://arxiv.org/abs/2110.09085), [The approximation property for locally compact quantum groups](https://arxiv.org/abs/2305.04894). It says: “(1) The special orthogonal group SO(3) is monoidally equivalent to the quantum symmetric group S₄⁺.”

**Sources:**

- [J. Bichon, A. De Rijdt and S. Vaes, Ergodic coactions with large multiplicity and monoidal equivalence of quantum groups, Communications in Mathematical Physics 262 (2006) 703–728](https://doi.org/10.1007/s00220-005-1442-2)

### Putting Haar weights in the axioms gives Pontryagin duality for quantum groups

**Remember:** Assume the Haar weights, and duality comes for free.

*Makes the theorem clean to state or prove.* MSC 46L67 (Quantum groups (operator algebraic aspects)), 58B32. arXiv math.OA, math.QA. Level 4: research.

**Definition.** Kustermans and Vaes define a locally compact quantum group as a C\*-algebra with a coassociative comultiplication, density conditions, and left- and right-invariant weights as axioms. A weight is an unbounded analogue of a positive functional, and the invariant weights play the role of Haar measures. The earlier Kac algebras also asked for an involutive antipode, which excludes Woronowicz's quantum SU(2).

**Problem.** Every locally compact quantum group G has a dual locally compact quantum group Ĝ, and the dual of Ĝ is isomorphic to G. This extends Pontryagin duality and covers non-Kac examples such as quantum SU(2).

**How the definition helps.** The left Haar weight gives a Hilbert space and a multiplicative unitary, and the dual is built from that unitary. Without the weights in the axioms there is no regular representation to build from. For groups and for compact and discrete quantum groups the weights exist by theorem. In general no existence proof is known, so the axioms carry this part of the work.

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

**How the definition helps.** The condition is exactly what lets holomorphic functions turn approximate idempotents in 𝒜 into true idempotents in 𝒜 (our own). Approximate an idempotent of A by a ∈ 𝒜, and let f be 0 near 0 and 1 near 1 (our own). Then f(a) is an idempotent in 𝒜, and the same trick moves homotopies into 𝒜, which gives injectivity (our own). This matters because cyclic cocycles live on smooth subalgebras, while K-theory belongs to the C\*-algebra.

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “Since, on the other hand, cyclic homology degenerates on C\*-algebras, there came up the need to define modified theories.”

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “for each n, Mₙ(𝒜) is closed under the holomorphic functional calculus in Mₙ(A) so that ι\*:K\*(𝒜) → K\*(A) is an isomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Stabilizing by the compact operators makes algebraic and topological K-theory agree

**Remember:** After stabilizing, the determinant disappears and the two K-theories agree.

*Rules out counterexamples.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19D50. arXiv math.KT, math.OA. Level 4: research.

**Definition.** A C\*-algebra A is stable when A ≅ A ⊗ 𝒦, where 𝒦 is the algebra of compact operators. Algebraic K-theory Kₙᵃˡᵍ treats A as a ring and forgets its topology. Topological K-theory Kₙ uses projections and unitaries up to homotopy.

**Problem.** For every C\*-algebra A and every n ≥ 0, the natural map Kₙᵃˡᵍ(A ⊗ 𝒦) → Kₙ(A ⊗ 𝒦) is an isomorphism.

**How the definition helps.** Stabilization removes algebraic invariants, such as the determinant, that topological K-theory cannot see. For A = ℂ the theorem fails without stabilization: K₁ᵃˡᵍ(ℂ) = ℂˣ through the determinant, but K₁(ℂ) = 0 because each unitary group U(n) is connected (our own). Suslin and Wodzicki proved excision for algebraic K-theory, which makes it split exact on stable C\*-algebras (our own). Higson's theorem that stable split-exact functors are homotopy invariant then lets the two theories be compared (our own).

**Wikipedia:** [Karoubi conjecture](https://en.wikipedia.org/wiki/Karoubi_conjecture). It says: “the Karoubi conjecture was a conjecture by Max Karoubi that the algebraic and topological K-theories coincide on C\* algebras spatially tensored with the algebra of compact operators.”

**Sources:**

- [Andrei Suslin and Mariusz Wodzicki, Excision in algebraic K-theory, Annals of Mathematics 136 (1992) 51–122](https://doi.org/10.2307/2946546)
- [Max Karoubi, K-théorie algébrique de certaines algèbres d'opérateurs, Lecture Notes in Mathematics 725, Springer (1979) 254–290](https://doi.org/10.1007/BFb0062621)

### The Pimsner–Voiculescu Toeplitz algebra turns crossed products by ℤ into six-term sequences

**Remember:** Replace the crossed product by a Toeplitz extension, then read off its hexagon.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 46L55. arXiv math.OA, math.KT. Level 4: research.

**Definition.** Let α be an automorphism of A, and let u be the unitary in the crossed product A ⋊α ℤ that implements α. Let S be the unilateral shift and 𝒯 the Toeplitz algebra it generates. The Pimsner–Voiculescu Toeplitz algebra T is generated by the elements a ⊗ 1 and u ⊗ S in (A ⋊α ℤ) ⊗ 𝒯. It sits in an extension 0 → A ⊗ 𝒦 → T → A ⋊α ℤ → 0.

**Problem.** For every automorphism α of a C\*-algebra A there is a six-term exact sequence K₀(A) → K₀(A) → K₀(A ⋊α ℤ) → K₁(A) → K₁(A) → K₁(A ⋊α ℤ) → K₀(A). The maps from K∗(A) to K∗(A) are 1 − α∗.

**How the definition helps.** The Toeplitz extension turns the crossed product into the quotient of an extension, and every extension has a six-term sequence. Stability gives K∗(A ⊗ 𝒦) = K∗(A) (our own). Pimsner and Voiculescu showed that the inclusion of A into T is an isomorphism on K-theory, so T can be replaced by A (our own). One then checks that the map from K∗(A ⊗ 𝒦) to K∗(A) is 1 − α∗ (our own). The quote states the dual sequence in K-homology.

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “For a C\*-algebra A and an action α ∈ Aut(A) there is a Pimsner-Voiculescu exact sequence in K-homology for the crossed product A ⋊φ ℤ”

**Sources:**

- [Levi Lorenzo, Finitely summable K-homology, the index pairing, and Cantor minimal systems, arXiv:2505.24135 (2025)](https://arxiv.org/abs/2505.24135)

### Viewing a correspondence as a KK class gives the Cuntz–Pimsner exact sequence

**Remember:** The correspondence is its own KK class, and 1 − \[E\] drives the sequence.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L80 (\\(K\\)-theory and operator algebras (including cyclic theory)), 19K35, 46L08. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A C\*-correspondence over A is a Hilbert A-module E with a left action of A. Its Toeplitz algebra 𝒯(E) is the universal C\*-algebra of a Toeplitz representation of E, and the Cuntz–Pimsner algebra 𝒪(E) is a quotient of it. When A acts on E by compact operators, the pair (E, 0) is a Kasparov module, so E defines a class \[E\] in KK(A,A).

**Problem.** Let A be separable and act on a countably generated E injectively and by compact operators. Then there is a six-term exact sequence K₀(A) → K₀(A) → K₀(𝒪(E)) → K₁(A) → K₁(A) → K₁(𝒪(E)) → K₀(A). The maps from K∗(A) to K∗(A) are 1 − \[E\], the identity minus the Kasparov product with \[E\].

**How the definition helps.** Because E with operator zero is already a Kasparov module, the map in the sequence is a single KK class, read off from E without any choice (our own). Pimsner showed that A → 𝒯(E) is a KK-equivalence and that the kernel of 𝒯(E) → 𝒪(E) is Morita equivalent to A (our own). The six-term sequence of this extension then becomes the stated one. The theorem contains the Pimsner–Voiculescu sequence for crossed products by ℤ, and Wikipedia notes that such crossed products and the Cuntz algebras are quotients of Toeplitz algebras.

**Wikipedia:** [Hilbert C\*-module](https://en.wikipedia.org/wiki/Hilbert_C%2A-module). It says: “In particular, graph algebras, crossed products by ℤ, and the Cuntz algebras are all quotients of specific Toeplitz algebras.”

**Sources:**

- [Mihai V. Pimsner, A class of C\*-algebras generalizing both Cuntz–Krieger algebras and crossed products by ℤ, in Free Probability Theory, Fields Institute Communications 12, American Mathematical Society (1997) 189–212](https://doi.org/10.1090/fic/012/08)

### Defining the primitive ideal topology by ideals makes it Morita invariant

**Remember:** Same ideal lattice, same primitive spectrum, same space when commutative.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L08. arXiv math.OA. Level 4: research.

**Definition.** The primitive ideal space Prim(A) is the set of kernels of irreducible representations of A. Its hull–kernel topology has as closed sets the primitive ideals that contain a given ideal. Algebras are Morita equivalent when an imprimitivity bimodule, a bimodule with compatible full inner products valued in each algebra, links them.

**Problem.** Morita equivalent C\*-algebras have homeomorphic primitive ideal spaces. In particular C₀(X) and C₀(Y) are Morita equivalent only when X and Y are homeomorphic, so the two algebras are isomorphic.

**How the definition helps.** The topology on Prim(A) is defined only through ideals, so a lattice isomorphism of ideals that matches primitive ideals is a homeomorphism (our own). The bimodule gives such a lattice isomorphism by the quoted Rieffel correspondence, and Rieffel induction matches the primitive ideals (our own). The usual alternative compares the topologies of the two spaces of irreducible representations directly through induced representations (our own). For commutative algebras Prim(C₀(X)) is X, so Morita equivalence collapses to isomorphism (our own).

**Paper or page:** [The Rieffel Correspondence for Equivalent Fell Bundles](https://arxiv.org/abs/2309.12116). It says: “In particular, J ↦ X·J is a lattice isomorphism of ℐ(B) onto 𝒞(X) with inverse Y ↦ ⟨Y,Y⟩<sub>B</sub>, and K ↦ K·X is a lattice isomorphism of ℐ(A) onto 𝒞(X)”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)

### Symmetric imprimitivity makes noncommutative tori in one GL(2,ℤ) orbit Morita equivalent

**Remember:** Swap which lattice acts on the line and θ becomes 1/θ.

*True by definition.* MSC 46L85 (Noncommutative topology), 46L55, 58B34. arXiv math.OA. Level 4: research.

**Definition.** The noncommutative torus A(θ) is the crossed product C(𝕋) ⋊ ℤ for rotation of the circle by angle 2πθ. Equivalently it is C(ℝ/ℤ) ⋊ θℤ, where θℤ acts on ℝ/ℤ by translation. Morita equivalent algebras are linked by a bimodule with compatible full inner products valued in each algebra.

**Problem.** Let θ and η be nonzero and lie in one orbit of GL(2,ℤ) acting on ℝ by fractional linear maps. Then A(θ) and A(η) are Morita equivalent, and in particular A(θ) is Morita equivalent to A(1/θ).

**How the definition helps.** As a crossed product of the line by two lattices, A(θ) falls under symmetric imprimitivity, so no bimodule is built by hand (our own). Take G = ℝ, H = ℤ and K = θℤ, so C(ℝ/θℤ) ⋊ ℤ is Morita equivalent to C(ℤ∖ℝ) ⋊ θℤ (our own). The first algebra is A(1/θ) and the second is A(θ) (our own). With A(θ) ≅ A(θ+1) ≅ A(−θ), these moves generate the GL(2,ℤ) action (our own).

**nLab:** [noncommutative torus](https://ncatlab.org/nlab/show/noncommutative+torus). It says: “Furthermore, two noncommutative tori with paremeters θ₁ and θ₂ are Morita equivalent if and only if θ₁ and θ₂ are in the same orbit with respect to the action of GL(2,Z) on U(1)”

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “In particular, the noncommutative tori with θ rational are Morita equivalent to the classical torus.”

**Sources:**

- [Marc A. Rieffel, Strong Morita equivalence of certain transformation group C\*-algebras, Mathematische Annalen 222 (1976) 7–22](https://doi.org/10.1007/BF01418238)
- [Marc A. Rieffel, C\*-algebras associated with irrational rotations, Pacific Journal of Mathematics 93 (1981) 415–429](https://doi.org/10.2140/pjm.1981.93.415)

### Bipartite quantum graphs keep the classical spectral test

**Remember:** A regular quantum graph has a bipartite piece when −d is an eigenvalue.

*Makes the theorem clean to state or prove.* MSC 46L89 (Other \`\`noncommutative'' mathematics based on \\(C<sup>\*\\</sup>)-algebra theory), 05C50. arXiv math.OA, math.CO. Level 4: research.

**Definition.** A quantum graph replaces the vertex set by a finite-dimensional C\*-algebra B with a state ψ, here tracial, that is, ψ(ab) = ψ(ba). It replaces the adjacency matrix by an operator A on B. The paper defines connectedness and bipartiteness of quantum graphs in terms of graph homomorphisms. For classical graphs, bipartite means that there is a homomorphism to the graph with two vertices and one edge.

**Problem.** A d-regular undirected tracial quantum graph has a bipartite component exactly when −d is in the spectrum of its adjacency operator A. This is the same test as for d-regular classical graphs.

**How the definition helps.** Our own reason: the definition copies the classical one through homomorphisms, so the classical spectral test can survive. The abstract says regular tracial quantum graphs have the same algebraic characterization of connectedness and bipartiteness as classical graphs. The case d = 0 needs the extra condition that 0 has multiplicity at least two. Our own judgement: the work lies in comparing homomorphisms of adjacency matrices with homomorphisms of edge spaces.

**Paper or page:** [Algebraic connectedness and bipartiteness of quantum graphs](https://arxiv.org/abs/2310.09500), [Algebraic connectedness and bipartiteness of quantum graphs](https://arxiv.org/abs/2310.09500). It says: “Let 𝒢 = (B,ψ,A) be a d-regular undirected tracial quantum graph. The following are equivalent: (1) 𝒢 has a bipartite component. (2) −d ∈ spec(A).”

**Sources:**

- [Junichiro Matsuda, Algebraic connectedness and bipartiteness of quantum graphs, Comm. Math. Phys. 405, no. 185 (2024), arXiv:2310.09500](https://arxiv.org/abs/2310.09500)

### Liquid tensor products of holomorphic functions on discs give polydisc functions

**Remember:** Tensor disc functions, get polydisc functions; tensor disjoint discs, get zero.

*Makes the theorem clean to state or prove.* MSC 46M05 (Tensor products in functional analysis), 46A32, 32A38. arXiv math.FA, math.CV. Level 4: research.

**Definition.** The liquid tensor product is the tensor product on liquid spaces that makes liquidification symmetric monoidal. O(D) is the space of holomorphic functions on the open unit disc D. For a closed disc, O means functions holomorphic on some larger open disc.

**Problem.** The k-fold liquid tensor product of O(D) is the space O(Dᵏ) of holomorphic functions on the open polydisc. For disjoint closed discs D₁ and D₂ in ℂ, the derived liquid tensor product of O(D₁) and O(D₂) over ℂ\[z\] is 0.

**How the definition helps.** The liquid tensor product lives on an abelian category and can be derived, so tensor products over ℂ\[z\] work as in algebra. Over ℂ one gets O(D₁ × D₂), where z₁ − z₂ is invertible, so over ℂ\[z\] one gets 0 (our own reading of Corollary 10.9). Grothendieck's completed tensor product gives the polydisc result but has no derived version over ℂ\[z\] (our own). The work is in Theorem 4.1 of the complex geometry notes.

**nLab:** [gaseous vector space](https://ncatlab.org/nlab/show/gaseous+vector+space). It says: “tensor products of spaces of holomorphic or real-analytic functions behave correctly under the gaseous tensor product, but tensor products of spaces of C<sup>∞</sup>-functions are only correct under the liquid tensor product”

**Sources:**

- [Peter Scholze, Lectures on Analytic Geometry (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019–2020)](https://www.math.uni-bonn.de/people/scholze/Analytic.pdf)
- [Dustin Clausen, Peter Scholze, Condensed Mathematics and Complex Geometry, lecture notes, University of Bonn (2022)](https://people.mpim-bonn.mpg.de/scholze/Complex.pdf)

### Almost unit balls determine Banach modules together with their exact norms

**Remember:** Up to almost zero, the unit ball remembers the norm exactly.

*Rules out counterexamples. Confidence: medium.* MSC 46S10 (Functional analysis over fields other than \\(\\mathbb\\) or \\(\\mathbb\\) or the quaternions; non-Archimedean functional analysis), 46H25, 13J10. arXiv math.NT, math.FA. Level 4: research.

**Definition.** Let A be a Banach ring with a norm-multiplicative, topologically nilpotent unit ϖ of norm at most 1. Suppose ϖ has compatible pⁿ-th roots of norm ‖ϖ‖ to the power 1/pⁿ. The almost unit ball of a Banach module is its closed unit ball, viewed up to modules killed by all these roots.

**Problem.** Taking almost unit balls is an equivalence from Banach A-modules, with maps that do not increase norms, to ϖ-adically complete, ϖ-torsion-free almost modules. The norm is recovered exactly from the almost unit ball, not only up to equivalence.

**How the definition helps.** Almost mathematics identifies exactly those lattices that give the same gauge norm, so the norm becomes an invariant of the almost module. For example, the open and closed unit balls differ. But each lies in the other after multiplying by any root of ϖ, so they are almost equal (our own). Without almost mathematics, a lattice fixes the norm only up to equivalence, as the paper's abstract says.

**Paper or page:** [Banach modules, almost mathematics and condensed mathematics](https://arxiv.org/abs/2508.11268). It says: “form a pair of quasi-inverse equivalences between the category Ban<sub>A</sub><sup>≤1</sup> of submetric Banach (A, ‖⋅‖)-modules with submetric A-module maps and the category of ϖ-adically complete, ϖ-torsion-free almost modules over the closed unit ball A\_≤1.”

**Sources:**

- [Dimitri Dine, Banach modules, almost mathematics and condensed mathematics, arXiv:2508.11268](https://arxiv.org/abs/2508.11268)

### The analytic ring axiom gives modules an abelian category with projective generators

**Remember:** Ask that measures and points see the same maps, and modules behave.

*True by definition.* MSC 46S10 (Functional analysis over fields other than \\(\\mathbb\\) or \\(\\mathbb\\) or the quaternions; non-Archimedean functional analysis), 18G80, 13D09. arXiv math.AG, math.FA. Level 4: research.

**Definition.** A pre-analytic ring 𝒜 gives each extremally disconnected set S, a projective kind of profinite set, a module 𝒜\[S\] of measures on S. It is analytic if maps out of 𝒜\[S\] and out of the free module on S agree, in the derived sense. The targets are complexes built from sums of the 𝒜\[T\].

**Problem.** For an analytic ring 𝒜, the modules M with Hom(𝒜\[S\], M) = M(S) for every extremally disconnected S form an abelian category. It is closed under limits, colimits and extensions, and the 𝒜\[S\] are compact projective generators.

**How the definition helps.** The analytic ring axiom is exactly the hypothesis of Lemma 5.10 in the condensed notes, which feeds Lemma 5.9. So the module theory follows at once (Proposition 7.5). This replaces building, ring by ring, a category of complete topological modules (our own). The work moves into checking the axiom for each example, such as Nöbeling's theorem for ℤ■. For the liquid real numbers, the check is Clausen and Scholze's hardest theorem (our own).

**nLab:** [analytic ring](https://ncatlab.org/nlab/show/analytic+ring). It says: “a pre-analytic ring is a condensed ring A together with a functor S↦𝒜\[S\] from extremally disconnected topological spaces to 𝒜-modules in condensed abelian groups taking finite disjoint unions to products”

**Sources:**

- [Peter Scholze, Lectures on Condensed Mathematics (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)

### The solid tensor product keeps adically complete modules complete

**Remember:** Solid tensor products of complete modules are complete, so ℤₚ ⊗ ℤₚ = ℤₚ.

*Rules out counterexamples.* MSC 46S10 (Functional analysis over fields other than \\(\\mathbb\\) or \\(\\mathbb\\) or the quaternions; non-Archimedean functional analysis), 13J10, 13D09. arXiv math.AG, math.AC. Level 4: research.

**Definition.** The solid tensor product is the unique tensor product on solid modules that makes solidification symmetric monoidal. For an ideal I of a ring A, a module M is I-complete if it is the derived limit of the quotients M ⊗ A/Iⁿ.

**Problem.** Let A be a commutative ring of finite type over ℤ, and I an ideal. If two solid A-modules are I-complete and have homology bounded below, then so is their solid tensor product; for example ℤₚ ⊗ ℤₚ = ℤₚ.

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

**How the definition helps.** Solidity is a unique-extension condition, and Lemma 5.9 turns such a condition into an abelian subcategory with these closure properties, once one hypothesis holds. So no closure property is checked by hand, while a quotient of a complete topological group need not be complete (our own). The work is in checking that hypothesis in Lecture VI. It rests on Nöbeling's theorem (Theorem 5.4), that continuous functions from S to ℤ form a free abelian group. So ℤ\[S\]■ is a product of copies of ℤ.

**nLab:** [solid abelian group](https://ncatlab.org/nlab/show/solid+abelian+group). It says: “A solid abelian group is a condensed abelian group A such that for all profinite sets S and all maps f:S → A, there is a unique map g:ℤ\[S\]<sup>□</sup> → A such that f = g ∘ m.”

**Sources:**

- [Peter Scholze, Lectures on Condensed Mathematics (all results joint with Dustin Clausen), lecture notes, University of Bonn (2019)](https://www.math.uni-bonn.de/people/scholze/Condensed.pdf)
