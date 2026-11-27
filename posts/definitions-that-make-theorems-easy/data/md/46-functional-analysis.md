### For 0 &lt; p ≤ 1, dropping the p-th root gives a metric

**Remember:** For small p, drop the root and the triangle inequality comes back.

*Rules out counterexamples. Confidence: medium.* MSC 46B20 (Geometry and structure of normed linear spaces), 54E35. arXiv math.FA. Level 1: early undergraduate.

**Definition.** For 0 &lt; p ≤ 1, set ‖x‖ = Σ \|xᵢ\|ᵖ, without taking the p-th root. For p = 1 this is the usual 1-norm.

**Problem.** For 0 &lt; p &lt; 1, the usual p-norm fails the triangle inequality, because Minkowski's inequality fails. So it gives no metric.

**How the definition helps.** Without the root, the triangle inequality follows from a simple inequality for single numbers. For 0 &lt; p ≤ 1 the function t ↦ tᵖ is subadditive: (s + t)ᵖ ≤ sᵖ + tᵖ for s, t ≥ 0. So Σ \|xᵢ + yᵢ\|ᵖ is at most Σ \|xᵢ\|ᵖ + Σ \|yᵢ\|ᵖ, and d(x, y) = ‖x − y‖ is a metric. The cost is that ‖x‖ is homogeneous of degree p, not 1: ‖cx‖ = \|c\|ᵖ ‖x‖. So it is an F-norm (it satisfies the triangle inequality but does not scale linearly), not a norm. The subadditivity step is standard, and the nLab states the result without proof.

**nLab:** [p-norm](https://ncatlab.org/nlab/show/p-norm). It says: “A variant definition for 0 &lt; p ≤ 1 (which agrees with the usual definition for p = 1, preserving continuity in p) leaves out the pth root; then the result satisfies the triangle inequality (and indeed is a metric)”

**Sources:** none listed. No primary source with a working link was found.

### Pythagoras is trivial in an inner product space

**Remember:** Define perpendicular and length by one inner product; Pythagoras is expanding a square.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 51F20. arXiv math.FA, math.MG. Level 1: early undergraduate.

**Definition.** An inner product space is a real vector space with a symmetric, positive definite bilinear form ⟨−,−⟩. The length of v is \|v\| = √⟨v,v⟩. The vectors v and w are perpendicular, written v ⊥ w, when ⟨v,w⟩ = 0.

**Problem.** Prove the Pythagorean theorem: for a right triangle with legs a, b and hypotenuse c, a² + b² = c².

**How the definition helps.** Perpendicularity and length both come from one inner product, so the theorem is one line of algebra. Expand \|a + b\|² = \|a\|² + \|b\|² + 2⟨a,b⟩. In words, the squared length of a sum is the sum of the squared lengths plus a cross term. The cross term is zero when a ⊥ b. So the theorem is a special case of the law of cosines and needs only algebra. The nLab notes that the real work moves elsewhere. One must show that Euclidean geometry, as given by its axioms, does carry an inner product structure.

**nLab:** [Pythagorean theorem](https://ncatlab.org/nlab/show/Pythagorean+theorem). It says: “That the Pythagorean Theorem holds in an inner product space is trivial; all that matters is establishing that one is, in fact, working in an inner product space.”

**Sources:** none listed. No primary source with a working link was found.

### Continuity makes the integral of \|x\| a norm, with no identification needed

**Remember:** A continuous function that is nonzero somewhere is nonzero on a whole interval.

*Rules out counterexamples.* MSC 46E05 (Lattices of continuous, differentiable or analytic functions), 46B20, 26A42. arXiv math.FA, math.CA. Level 1: early undergraduate.

**Definition.** A seminorm is like a norm, but it may vanish at a nonzero vector. A norm vanishes only at the zero vector. C\[a, b\] is the space of continuous real functions on the closed interval \[a, b\].

**Problem.** On a space of functions, the integral of \|x\| should be a norm. For all integrable functions it is only a seminorm.

**How the definition helps.** Continuity rules out functions that are nonzero only on a set too small for the integral to see. Our own sketch: if x(t₀) ≠ 0 and x is continuous, then \|x\| &gt; \|x(t₀)\|/2 on some interval, so the integral of \|x\| is positive. Our own counterexample: the function that is 1 at one point and 0 elsewhere has integral 0 but is not the zero function. So on all integrable functions, the 1-seminorm is not a norm. The usual fix for L¹ is to identify functions that agree almost everywhere. Our own remark: on C\[a, b\] no such identification is needed, but the space is not complete under this norm.

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

**How the definition helps.** The condition is both necessary and enough, so one easy check settles density. Stone showed that a subalgebra with a non-zero constant is dense exactly when it separates points. Weierstrass's theorem on polynomials on \[a,b\] becomes a special case. For complex-valued functions, the subalgebra must also be closed under complex conjugation. For example, the polynomials in z on the closed unit disc separate points but are not dense (our own example). The reason is that their uniform limits are holomorphic inside the disc.

**Wikipedia:** [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem). It says: “It turns out that the crucial property that a subalgebra must satisfy is that it separates points”

**Sources:**

- [M. H. Stone, Applications of the theory of Boolean rings to general topology, Trans. Amer. Math. Soc. 41 (1937), 375–481, doi:10.1090/S0002-9947-1937-1501905-7](https://doi.org/10.1090/S0002-9947-1937-1501905-7)

### Grading Lebesgue spaces by 1/p makes Hölder's inequality a graded multiplication

**Remember:** Use 1/p as the degree, and degrees add when you multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 26D15. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** Index the Lebesgue spaces by the reciprocal of the usual exponent. Write M(a) for the space Lᵖ with p = 1/a. So M(0) = L∞, M(1/2) = L² and M(1) = L¹.

**Problem.** Hölder's inequality says this: take a function in Lᵖ and a function in the Lebesgue space with exponent q. If 1/p + 1/q = 1/r, then their product lies in Lʳ.

**How the definition helps.** With the reciprocal grading, the degrees simply add when you multiply functions. Multiplication of functions maps M(a) × M(b) to M(a + b), so the spaces form a graded algebra. The odd-looking formula 1/p + 1/q = 1/r becomes the plain addition of degrees. The inequality itself still needs a proof; the new indexing only makes its form natural. The nLab also uses this grading to define these spaces from a measurable space with negligible sets (a chosen family of sets that count as measure zero), without a chosen measure.

**nLab:** [Lebesgue space](https://ncatlab.org/nlab/show/Lebesgue+space). It says: “If we take M<sup>p=L^</sup>(1/p), the spaces M<sup>p</sup> form a C-graded algebra, where C denotes complex numbers. This is a conceptual explanation for the appearance of formulas like 1/p+1/q=1/r in Hölder's inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Lᵖ treats functions that agree almost everywhere as equal

**Remember:** In Lᵖ, what happens on a set of measure zero does not count.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)). arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** Lᵖ(S, μ) consists of the measurable functions f with ∫\|f\|ᵖ dμ finite. Two functions count as the same element when they are equal almost everywhere. So the elements of Lᵖ are equivalence classes, not functions.

**Problem.** The quantity ‖f‖ₚ = (∫\|f\|ᵖ)¹ᐟᵖ is a norm. Lᵖ is complete for this norm, so it is a Banach space (the Riesz–Fischer theorem).

**How the definition helps.** Treating functions that agree almost everywhere as equal turns ‖·‖ₚ into a true norm. On functions, ‖f‖ₚ = 0 does not imply f = 0. For example, the indicator function of a non-empty set of measure zero has norm 0. So on functions ‖·‖ₚ is only a seminorm (it has every property of a norm, except that a nonzero function can have norm 0). The quotient by the functions that are 0 almost everywhere makes it a norm, and then you can state and prove completeness. The cost is that the value of an element at a single point has no meaning. To talk about point values you need extra results (our own remark).

**Wikipedia:** [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “Hence, strictly speaking Lᵖ(S, μ) consists of equivalence classes of functions.”

**Sources:**

- [F. Riesz, Untersuchungen über Systeme integrierbarer Funktionen, Math. Ann. 69 (1910), 449–497, doi:10.1007/BF01457637](https://doi.org/10.1007/BF01457637)

### Measured in mean square, every Fourier series converges

**Remember:** Measure the error by its energy, and Fourier series always converge.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 42A20. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** A sequence of functions gₙ converges to f in the L² norm, or in mean square, when ∫\|gₙ − f\|² → 0. In words, the integral of the squared error tends to 0.

**Problem.** The Fourier series of every square-integrable function converges to the function.

**How the definition helps.** Measuring the error in the L² norm makes the statement true for every square-integrable function. Pointwise, the statement is false: there are continuous functions whose Fourier series diverges at some points. Kolmogorov even found an L¹ function (an integrable function) whose Fourier series diverges almost everywhere. In the L² norm, the partial sums of the Fourier series of every L² function converge to it, by the Riesz–Fischer theorem. Conversely, every square-summable sequence of coefficients is the Fourier series of some L² function. Our own remark: once one knows that the trigonometric functions form a complete orthonormal system, the proof uses only facts about Hilbert spaces. The pointwise question stayed hard until 1966, when Carleson proved that the Fourier series of an L² function converges almost everywhere.

**Wikipedia:** [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series), [Lp space](https://en.wikipedia.org/wiki/Lp_space). It says: “According to the Riesz–Fischer theorem, if ƒ is square-integrable then S<sub>N</sub>(f) converges to ƒ in the L²-norm”

**Sources:**

- [L. Carleson, On convergence and growth of partial sums of Fourier series, Acta Math. 116 (1966), 135–157, doi:10.1007/BF02392815 (for the pointwise question)](https://doi.org/10.1007/BF02392815)

### The Lebesgue integral makes L² complete

**Remember:** Riemann lets limits of Fourier series fall out of the space; Lebesgue keeps them.

*Makes the theorem clean to state or prove.* MSC 46E30 (Spaces of measurable functions (\\(L<sup>p\\</sup>)-spaces, Orlicz spaces, Köthe function spaces, Lorentz spaces, rearrangement invariant spaces, ideal spaces, etc.)), 46C05. arXiv math.FA, math.CA. Level 2: later undergraduate.

**Definition.** L² is the space of measurable functions whose square has finite Lebesgue integral. Two functions count as the same when they are equal almost everywhere. The inner product is ⟨f, g⟩ = ∫ f̄ g.

**Problem.** L² is complete (Riesz–Fischer, 1907). So the classical results of Fourier, Bessel and Parseval on Fourier series carry over to abstract Hilbert spaces.

**How the definition helps.** The Lebesgue integral admits enough functions that limits stay in the space. With the Riemann integral, the square-integrable functions do not form a complete space, because not enough functions are Riemann integrable. Lebesgue's integral (1904) enlarges the class. In 1907, Riesz and Fischer independently proved completeness. Then a series in an orthonormal system with square-summable coefficients always has a sum in the space. The article says that completeness is the missing ingredient in eigenfunction expansions that fail to converge in L².

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

**Definition.** A locally convex space is a topological vector space whose topology has a base of convex neighbourhoods of zero. Equivalently, a family of seminorms gives its topology. A seminorm is like a norm, except that a nonzero vector can have seminorm 0. Von Neumann gave the general definition in 1935.

**Problem.** The Hahn–Banach extension property: every continuous linear functional on a subspace extends to the whole space. Then there are enough continuous functionals to separate points.

**How the definition helps.** The Hahn–Banach theorem holds in every Hausdorff locally convex space, where the seminorms give the bounds that the extension needs. Without convexity it fails. In Lᵖ\[0, 1\] with 0 &lt; p &lt; 1, the only convex neighbourhood of zero is the whole space. Our own remark: so the only continuous linear functional there is zero, and no nonzero functional on a subspace extends. Kalton's theorem gives a converse: a complete metrizable topological vector space with the extension property is locally convex.

**Wikipedia:** [Locally convex topological vector space](https://en.wikipedia.org/wiki/Locally_convex_topological_vector_space). It says: “They are not locally convex, since the only convex neighborhood of zero is the whole space.”

**Sources:**

- [N. J. Kalton, Basic sequences in F-spaces and their applications, Proceedings of the Edinburgh Mathematical Society 19 (1974) 151–167](https://doi.org/10.1017/S0013091500010282)

### Barrelled spaces are the spaces where uniform boundedness holds

**Remember:** Every barrel is a neighbourhood, so pointwise bounded families are equicontinuous.

*True by definition.* MSC 46A08 (Barrelled spaces, bornological spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A set is balanced when it contains tx for each of its points x and each scalar with \|t\| ≤ 1. It is absorbing when every vector lies in some multiple of it. A barrel is a closed, convex, balanced and absorbing set, and a space is barrelled when every barrel is a neighbourhood of zero. Bourbaki introduced the notion in 1950.

**Problem.** The uniform boundedness principle says that a family of continuous linear maps that is bounded at each point is equicontinuous. For Banach spaces it follows from the Baire category theorem. One wants it for spaces of test functions and other spaces that are not normed.

**How the definition helps.** The definition copies the step of the proof that needs completeness, so the principle is almost the definition. For a pointwise bounded family of functionals, the set where all of them are at most 1 is a barrel (our own sketch). In a barrelled space that set is a neighbourhood of zero, and this is equicontinuity. The work moves into a different theorem: Banach spaces, Fréchet spaces and all spaces of the second category are barrelled. The page also gives a normed space that is not barrelled: L² of \[0, 1\] with the L¹ norm.

**Wikipedia:** [Barrelled space](https://en.wikipedia.org/wiki/Barrelled_space). It says: “It follows from the above two characterizations that in the class of locally convex TVS, barrelled spaces are exactly those for which the uniform boundedness principle holds.”

**Sources:**

- [N. Bourbaki, Sur certains espaces vectoriels topologiques, Annales de l'Institut Fourier 2 (1950), 5–16](https://doi.org/10.5802/aif.16)

### In bornological spaces, bounded linear maps are continuous by definition

**Remember:** If the space is bornological, bounded and continuous mean the same.

*True by definition.* MSC 46A08 (Barrelled spaces, bornological spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A subset of a topological vector space is bounded when every neighbourhood of zero absorbs it after scaling. A locally convex space is bornological when every convex balanced set that absorbs all bounded sets is a neighbourhood of zero. Normed spaces, metrizable locally convex spaces and their inductive limits are bornological.

**Problem.** For normed spaces, a linear map is continuous exactly when it sends bounded sets to bounded sets. In general locally convex spaces this can fail. One wants a class of spaces where the normed-space rule still holds.

**How the definition helps.** The definition asks for exactly the neighbourhoods that a bounded map pulls back, so the rule holds by unwinding it. If a linear map sends bounded sets to bounded sets, the preimage of a convex neighbourhood absorbs every bounded set (our own sketch). In a bornological space such a preimage is a neighbourhood of zero, so the map is continuous (our own sketch). The work moves into a different theorem: metrizable spaces and their inductive limits are bornological. The space of test functions is an example (our own). A space with the weak topology of an infinite-dimensional normed space is not bornological (our own example).

**Wikipedia:** [Bornological space](https://en.wikipedia.org/wiki/Bornological_space). It says: “Bornological spaces are distinguished by the property that a linear map from a bornological space into any locally convex spaces is continuous if and only if it is a bounded linear operator.”

**Sources:** none listed. No primary source with a working link was found.

### Nuclear spaces make the Schwartz kernel theorem true

**Remember:** Every neighbourhood of zero holds a much smaller one, as in finite dimensions.

*Makes the theorem clean to state or prove.* MSC 46A11 (Spaces determined by compactness or summability properties (nuclear spaces, Schwartz spaces, Montel spaces, etc.)), 46A32, 46F05. arXiv math.FA. Level 3: graduate.

**Definition.** A locally convex space is a topological vector space whose topology comes from a family of seminorms. It is nuclear if for every seminorm p there is a larger seminorm q such that the natural map from the Banach space completed for q to the Banach space completed for p is a nuclear operator. (A nuclear operator is an absolutely summable series of rank-one operators.) Informally, every neighbourhood of zero contains a much smaller one. Grothendieck introduced nuclear spaces.

**Problem.** The Schwartz kernel theorem says that every continuous linear map from test functions on Ω₂ to distributions on Ω₁ is given by a distribution on Ω₁ × Ω₂. It also says that 𝒟′(Ω₁ × Ω₂) ≅ 𝒟′(Ω₁) ⊗̂ 𝒟′(Ω₂), where ⊗̂ is the completed tensor product. (Test functions are smooth functions with compact support, and distributions are continuous linear functionals on them.)

**How the definition helps.** Nuclearity is the property that Grothendieck found to explain why the kernel theorem holds. The kernel theorem is false if test functions and distributions are replaced by the Hilbert space L² and its dual. Grothendieck asked why it holds for distributions but not for L², and the answer was the property he called nuclearity. The article notes that for a nuclear space the projective and injective tensor products agree. (These are the two standard ways to give a tensor product of locally convex spaces a topology.) So there is only one natural choice of completed tensor product. The article also lists isomorphisms of nuclear spaces such as C∞(M) ⊗ C∞(N) ≅ C∞(M × N) for smooth manifolds.

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

**How the definition helps.** The weak-\* topology has so few open sets that Tychonoff's theorem applies to the unit ball. In the norm topology, the unit ball is compact only in finite dimensions (F. Riesz's theorem), so compactness arguments fail in infinite dimensions. The weak-\* topology is the topology of pointwise convergence on X. So the dual ball sits inside a product of compact discs, one disc for each x in X, and Tychonoff's theorem gives compactness. Banach had a sequential version in 1932 for separable spaces, and Alaoglu proved the general case in 1940. Our own remark: the cost is that weak-\* limits keep less information; for example, the norm can drop in the limit.

**Wikipedia:** [Banach–Alaoglu theorem](https://en.wikipedia.org/wiki/Banach%E2%80%93Alaoglu_theorem). It says: “This theorem is one example of the utility of having different topologies on the same vector space.”

**Sources:**

- [Alaoglu, L. (1940). Weak topologies of normed linear spaces. Annals of Mathematics 41(1), 252 ff.](https://doi.org/10.2307/1968829)

### The Minkowski gauge reduces separation to Hahn–Banach extension

**Remember:** The gauge rewrites a convex set as one inequality.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46A22 (Theorems of Hahn-Banach type; extension and lifting of functionals and operators), 46A55. arXiv math.FA. Level 3: graduate.

**Definition.** Let C be open and convex in a real normed space, with 0 in C. Its Minkowski gauge p(x) is the infimum of the numbers t &gt; 0 for which x belongs to tC. The gauge is sublinear, meaning p(x + y) ≤ p(x) + p(y) and p(sx) = sp(x) for s ≥ 0.

**Problem.** If x₀ is outside C, there is a continuous linear functional f such that f(x) &lt; f(x₀) for every x in C.

**How the definition helps.** The gauge expresses membership as p(x) &lt; 1, so the separation question becomes one about a linear functional bounded by p. Our own proof starts with f(t·x₀) = t, which is at most p(t·x₀) since p(x₀) ≥ 1 and p is nonnegative. The analytic Hahn–Banach theorem extends this functional to the whole space without losing that bound. On C, f is below one, while f(x₀) is one. Since C contains a ball about zero, a constant times the norm bounds both p(x) and p(−x), so f is continuous. The hard step is the extension theorem, not the translation from the bound to separation.

**Paper or page:** [Minkowski Functional of Open Convex Set in Normed Vector Space recovers Set](https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Convex_Set_in_Normed_Vector_Space_recovers_Set), [Minkowski Functional of Convex Absorbing Set is Sublinear](https://proofwiki.org/wiki/Minkowski_Functional_of_Convex_Absorbing_Set_is_Sublinear). It says: “Let C be an open convex subset of X with 0 ∈ C. Let p<sub>C</sub> be the Minkowski functional for C. Then: C = {x ∈ X : p<sub>C</sub>(x) &lt; 1}”

**Sources:** none listed. No primary source with a working link was found.

### Completeness is what makes the open mapping theorem true

**Remember:** Without completeness, a bounded bijection can have an unbounded inverse.

*Rules out counterexamples.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including \\(B\\)-, \\(B<sub>r</sub>\\)-completeness)), 47B01. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed vector space that is complete: every Cauchy sequence converges. A map is open when it sends open sets to open sets.

**Problem.** The open mapping theorem says that a bounded linear surjection between Banach spaces is open. So a bounded linear bijection between Banach spaces has a bounded inverse.

**How the definition helps.** Completeness of the target gives the Baire category theorem, and completeness of the domain turns 'nearly open' into 'open' by summing a series. The page gives the counterexample. On the finitely supported sequences with the sup norm, T x = (x₁, x₂/2, x₃/3, …) is bounded, linear and bijective. Its inverse multiplies the n-th entry by n, so it is unbounded. That space is not complete, so the theorem does not apply. The page says the same proof works for Fréchet spaces, which are complete and metrizable.

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

**Problem.** The Mazur–Ulam theorem says that a surjective isometry between real normed spaces is affine, so it is a linear map plus a translation. The quoted result also gives Mankiewicz's extension of local isometries.

**How the definition helps.** Surjectivity lets the proof reflect through midpoints using the inverse map, so midpoints are kept (our own account of the standard proof). Without it the theorem is false. In our own example, take the map t ↦ (t, sin t) from ℝ into ℝ² with the maximum norm. It keeps distances, because sin changes by at most \|t − s\|. But it is not affine. The theorem gives real-linear maps only. For example, complex conjugation on ℂ is an onto isometry that is not complex-linear (our own remark).

**Paper or page:** [Weighted composition operators preserving various Lipschitz constants](https://arxiv.org/abs/2306.12824v1). It says: “Every surjective isometry T: M→N between normed linear spaces is affine; namely, T(λx+(1−λ)y)= λTx+(1−λ)Ty, for all x,y∈M and 0≤λ≤1.”

**Sources:**

- [Weighted composition operators preserving various Lipschitz constants, arXiv:2306.12824 (2023)](https://arxiv.org/abs/2306.12824v1)

### Short linear maps make isomorphisms of Banach spaces isometries

**Remember:** Short maps never stretch a vector, so an isomorphism cannot stretch or shrink any vector.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46B04 (Isometric theory of Banach spaces), 18D15. arXiv math.FA, math.CT. Level 3: graduate.

**Definition.** In the category Ban, a morphism between Banach spaces is a short linear map. A short linear map is a linear map f with operator norm ‖f‖ ≤ 1, so it never makes a vector longer. Analysts call this the 'isometric category'. The other choice, with all bounded linear maps, is the 'isomorphic category'.

**Problem.** You want a category of Banach spaces whose isomorphisms are the isometric isomorphisms. It should also have good categorical structure: limits, colimits and a closed monoidal structure (a tensor product with a matching space of maps).

**How the definition helps.** If neither f nor its inverse can stretch a vector, then f keeps every length. An isomorphism f has ‖f‖ ≤ 1 and ‖f⁻¹‖ ≤ 1, so it is a surjective linear isometry. With bounded maps, isomorphisms only preserve the topology. The nLab states that Ban with short maps is small complete, small cocomplete and symmetric monoidal closed. Its products are the uniformly bounded tuples (with the ℓ∞ norm), and its coproducts are the completed ℓ¹ sums. Our own reading: these norms work because the projections and injections must be short; the nLab page does not compare with the bounded-map category. The same choice is made for Jordan–Banach algebras 'to get the right notion of isomorphism'.

**nLab:** [Banach space](https://ncatlab.org/nlab/show/Banach+space), [Jordan-Banach algebra](https://ncatlab.org/nlab/show/Jordan-Banach+algebra). It says: “Another natural notion of isomorphism is a surjective linear isometry. In this case, we take a morphism to be a short linear map, or linear contraction: a linear map f such that ‖f‖ ≤ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Reflexivity uses the canonical map, so James' space is excluded

**Remember:** Reflexive means the evaluation map is onto, not merely some isomorphism.

*Rules out counterexamples.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces), 46B50. arXiv math.FA. Level 3: graduate.

**Definition.** The bidual of a Banach space X is the dual of its dual. The canonical map sends a point x to the functional 'evaluate at x'. X is reflexive when this canonical map is onto.

**Problem.** Kakutani's theorem says that a Banach space is reflexive exactly when its closed unit ball is weakly compact. Reflexive spaces also have the property that bounded closed convex sets are weakly compact.

**How the definition helps.** The canonical map turns the weak topology of X into the weak-\* topology of the bidual (our own summary). So weak compactness of the ball comes from the Banach–Alaoglu theorem (our own summary). Some other isomorphism with the bidual does not carry the topologies in this way (our own summary). James' space from 1951 is isometric to its bidual, but its canonical image has codimension one. So its unit ball is not weakly compact, and a definition by any isomorphism would break Kakutani's theorem (our own conclusion). The hard direction of Kakutani's theorem, from weak compactness to reflexivity, still needs Goldstine's theorem (our own).

**Wikipedia:** [Reflexive space](https://en.wikipedia.org/wiki/Reflexive_space). It says: “So importantly, for a Banach space to be reflexive, it is not enough for it to be isometrically isomorphic to its bidual; it is the canonical evaluation map in particular that has to be a homeomorphism.”

**Sources:**

- [R. C. James, A non-reflexive Banach space isometric with its second conjugate space, Proc. Nat. Acad. Sci. USA 37 (1951), 174–177](https://doi.org/10.1073/pnas.37.3.174)

### Completeness makes Schauder coordinates continuous

**Remember:** Completeness makes the coefficients depend continuously on the vector.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Schauder basis gives each vector a unique expansion that converges in norm in the chosen order. A Banach space is a normed space in which all Cauchy sequences converge.

**Problem.** Each coordinate functional of a Schauder basis in a Banach space is bounded. It sends a vector to its coefficient at a fixed basis position.

**How the definition helps.** In our own proof, completeness lets the bounded inverse theorem transfer continuity from coefficient sequences to vectors. Give each convergent expansion the supremum of its partial-sum norms. This makes the coefficient space complete, and summation gives a bounded bijection onto the Banach space. Each individual term is a difference of partial sums, so each coefficient is continuous in that norm. Our own counterexample uses finite sequences with the Euclidean norm and the usual unit vectors eₙ. Use the basis e₁ followed by e₁ + eₙ for n ≥ 2. A unit vector with first entry zero and N later entries equal to 1/√N needs first coefficient −√N to cancel their sum.

**Paper or page:** [Coordinate Functionals Associated with Schauder Basis of Banach Space are Bounded](https://proofwiki.org/wiki/Coordinate_Functionals_Associated_with_Schauder_Basis_of_Banach_Space_are_Bounded). It says: “Then each linear functional eₙ∗ is bounded.”

**Sources:** none listed. No primary source with a working link was found.

### Riesz bases give stable unique coefficients

**Remember:** Two bounds control both synthesis and recovery.

*Rules out counterexamples.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Riesz basis spans a Hilbert space densely and has two-sided norm bounds on all finite linear combinations. These bounds compare the norm of the combination with the square-sum norm of its coefficients.

**Problem.** Every vector has a unique square-summable coefficient sequence in a Riesz basis. The map to coefficients and the map back are both bounded.

**How the definition helps.** In our own proof, the lower bound prevents large coefficient changes from producing small changes in the vector. The upper bound extends finite sums to a bounded map from square-summable sequences. The lower bound makes this map injective with closed range and bounded inverse on its range. Density gives the whole Hilbert space as its range. Our own counterexample divides the nth unit vector in the square-summable sequence space by n. These vectors still span densely and satisfy the upper bound, but recovering the nth unit vector requires a coefficient of size n.

**Wikipedia:** [Riesz sequence](https://en.wikipedia.org/wiki/Riesz_sequence). It says: “is an orthonormal basis for H and U : H → H is a bounded bijective operator.”

**Sources:** none listed. No primary source with a working link was found.

### Unconditional convergence makes a sum independent of order by definition

**Remember:** Unconditional means the sum puts no condition on the order.

*True by definition.* MSC 46B15 (Summability and bases; functional analytic aspects of frames in Banach and Hilbert spaces), 40A05. arXiv math.FA. Level 3: graduate.

**Definition.** A series in a normed space converges unconditionally when every reordering of its terms converges. All the reorderings must also have the same sum.

**Problem.** Which series in a Banach space have a sum that does not depend on the order of the terms? In finite dimensions they are exactly the absolutely convergent series. In every infinite-dimensional Banach space there are more of them; this is the Dvoretzky–Rogers theorem.

**How the definition helps.** With this definition, independence of order is true by definition. In finite-dimensional spaces, unconditional convergence is the same as absolute convergence, by the Riemann series theorem and its extensions. In every Banach space, an absolutely convergent series converges unconditionally. But Dvoretzky and Rogers proved that every infinite-dimensional Banach space has an unconditionally convergent series that does not converge absolutely. In ℓ² (the space of square-summable sequences), our own example is Σ eₙ/n, where the eₙ are the unit basis vectors. So in infinite dimensions, absolute convergence is too strong to serve as the definition. The hard work moves into the Dvoretzky–Rogers theorem.

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

**Problem.** The Hahn–Banach theorem gives at least one norm-preserving extension. When is there exactly one? The paper shows: whenever the dual space is strictly convex, for example in Lᵖ with 1 &lt; p &lt; ∞.

**How the definition helps.** The norm-preserving extensions of f form a convex set that lies on the sphere of radius ‖f‖ in X\*. A strictly convex sphere contains no segment, so this convex set has only one point (our own account of the proof). The condition excludes flat spheres. In our own example, take ℝ² with the norm \|a\| + \|b\|. The functional (t, 0) ↦ t has the extensions (a, b) ↦ a + cb for every c in \[−1, 1\]. The existence part is still the Hahn–Banach theorem itself.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Let X be a Banach space with strictly convex dual X\*. Suppose U⊂X is a subspace and f:U→𝕂 a bounded linear functional. Then f has a unique Hahn–Banach extension in X\*.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### The ℓ¹ norm lets contractions on each summand extend to the sum

**Remember:** The sum norm pays for every component, so it bounds every summed image.

*True by definition.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** The ℓ¹ direct sum of Banach spaces Xᵢ contains the families (xᵢ) with Σ‖xᵢ‖ finite. Its norm is that sum. Other choices use the largest ‖xᵢ‖ (the ℓ∞ sum) or the square root of Σ‖xᵢ‖² (the ℓ² sum).

**Problem.** Let each Tᵢ be a linear map of norm at most one from a Banach space Xᵢ into one Banach space Z. Then exactly one bounded linear map on the ℓ¹ sum agrees with every Tᵢ. It has norm at most one.

**How the definition helps.** The ℓ¹ norm is the sum of the component norms, so ‖Σ Tᵢxᵢ‖ ≤ Σ‖xᵢ‖ by the triangle inequality. Completeness of Z makes this absolutely convergent series converge. Families with finitely many nonzero terms are dense, so the extension is unique. With the ℓ² norm the claim fails: take every Xᵢ and Z equal to ℂ and every Tᵢ the identity. Then the sum map is not bounded on ℓ². The nLab states the result as the fact that the ℓ¹ sum is the coproduct for maps of norm at most one. The counterexample is our own.

**nLab:** [direct sum of Banach spaces](https://ncatlab.org/nlab/show/direct+sum+of+Banach+spaces). It says: “If short linear maps are taken as the morphisms in the category of Banach spaces, then the ℓ¹-direct sum is the coproduct, and the ℓ∞-direct sum is the product.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform convexity gives unique nearest points in closed subspaces

**Remember:** In a round space, almost-closest points crowd together.

*Makes the theorem clean to state or prove.* MSC 46B20 (Geometry and structure of normed linear spaces). arXiv math.FA. Level 3: graduate.

**Definition.** A Banach space is uniformly convex if each ε &gt; 0 has a δ &gt; 0 with this property. Unit vectors x and y with ‖x − y‖ ≥ ε have ‖(x + y)/2‖ ≤ 1 − δ. Here Y is a closed subspace, which contains the limits of its convergent sequences. A closest point to f in Y is a point g of Y with ‖f − g‖ equal to the distance from f to Y.

**Problem.** In a Hilbert space, every point has exactly one closest point in a closed subspace, the orthogonal projection. The paper shows the same for closed subspaces of Lᵖ with 1 &lt; p &lt; ∞, where there is no inner product.

**How the definition helps.** Uniform convexity says that two almost-closest points that are far apart would have a midpoint that is closer still, which is impossible. So every minimizing sequence is a Cauchy sequence, as the paper's Corollary 21 states for sequences whose midpoints have norm near 1. Completeness then gives the closest point, and the same argument gives uniqueness. The condition rules out balls with flat pieces. In our own example, take ℝ² with the maximum norm. Every point (0, t) with \|t\| ≤ 1 on the vertical axis is closest to (1, 0). Proving that Lᵖ is uniformly convex still takes Clarkson's inequalities.

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

**Problem.** Weak convergence does not imply norm convergence. The extra condition that norms converge is enough in every uniformly convex space, such as Lᵖ with 1 &lt; p &lt; ∞.

**How the definition helps.** The proof is almost the definition. If xₙ → x weakly, then (xₙ + x)/2 → x weakly, so its norm is at least about ‖x‖ in the limit. Uniform convexity then forces xₙ and x to be close, as the paper's Lemma 20 states. The condition excludes spaces like L¹. In our own example, the functions 1 + sin(nt) on \[0, 2π\] converge weakly to 1. They have the same L¹ norm as 1, but do not converge in norm.

**Paper or page:** [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1), [Exploring Convexity in Normed Spaces](https://arxiv.org/abs/2405.13463v1). It says: “Every uniformly convex Banach space is a Riesz–Radon space.”

**Sources:**

- [Ryan L. Acosta Babb, Exploring Convexity in Normed Spaces, arXiv:2405.13463 (2024), Amer. Math. Monthly 132 (2025) 291–302](https://arxiv.org/abs/2405.13463v1)

### The Radon–Nikodym property names the Banach spaces where Radon–Nikodym holds

**Remember:** Densities of vector measures exist exactly in Radon–Nikodym spaces, by definition.

*True by definition. Confidence: medium.* MSC 46B22 (Radon-Nikodým, Kre?n-Milman and related properties), 46G10. arXiv math.FA. Level 3: graduate.

**Definition.** Let μ be a finite measure, and let γ be a B-valued measure of bounded variation that is absolutely continuous with respect to μ. B has the Radon–Nikodym property when every such γ has a Bochner integrable density. The Bochner integral is the Lebesgue integral for functions with values in a Banach space.

**Problem.** One wants a Radon–Nikodym theorem for measures with values in a Banach space B. The scalar proof does not carry over to all Banach spaces. If B\* has the property, the dual of Lᵖ(μ; B) for 1 &lt; p &lt; ∞ is the matching B\*-valued space (our own).

**How the definition helps.** The definition makes the theorem true in the named class by fiat, so the theorem itself needs no proof. The work moves to other theorems that say which spaces are in the class. The page says that reflexive spaces and separable dual spaces have the property, the second by the Dunford–Pettis theorem. It also says that c₀, C(K) for infinite compact K, and L¹ and L∞ of a bounded open subset of ℝⁿ do not. For c₀, take the measure A ↦ (integral over A of sin(2ⁿπt) dt)ₙ on \[0, 1\], in c₀ by the Riemann–Lebesgue lemma (our own example). Its only possible density is t ↦ (sin(2ⁿπt))ₙ, which for almost every t does not tend to 0 (our own example). One equivalent form on the page says that B-valued functions of bounded variation are differentiable almost everywhere.

**Wikipedia:** [Bochner integral](https://en.wikipedia.org/wiki/Bochner_integral). It says: “An important fact about the Bochner integral is that the Radon–Nikodym theorem fails to hold in general, and instead is a property (the Radon–Nikodym property) defining an important class of ″nice″ Banach spaces.”

**Sources:**

- [N. Dunford and B. J. Pettis, Linear operations on summable functions, Transactions of the AMS 47 (1940), 323–392](https://doi.org/10.1090/S0002-9947-1940-0002020-4)

### The approximation property makes compact operators limits of finite-rank operators

**Remember:** Finite-rank approximation of compact operators works exactly where the approximation property holds.

*True by definition.* MSC 46B28 (Spaces of operators; tensor products; approximation properties), 47B07. arXiv math.FA. Level 3: graduate.

**Definition.** Take a compact set K in a Banach space X and a number ε &gt; 0. X has the approximation property when, for all such K and ε, some finite-rank operator T moves each point of K by less than ε. A compact operator maps bounded sets to sets with compact closure. A finite-rank operator has a finite-dimensional range.

**Problem.** On a Hilbert space, every compact operator is a norm limit of finite-rank operators. For a long time it was open whether this holds on every Banach space.

**How the definition helps.** The definition asks for finite-rank approximation of the identity on compact sets, and this is nearly the wanted theorem. A compact operator S into X maps the unit ball into a set with compact closure (our own sketch). A T as in the definition for that set gives a finite-rank operator TS close to S (our own sketch). The work moves to Grothendieck's equivalence theorems and to Enflo's example. Enflo published a Banach space without the property in 1973, so the theorem has true exceptions. Szankowski later showed that the bounded operators on an infinite-dimensional Hilbert space also fail the property. Every space with a Schauder basis has it.

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

**Problem.** One wants a tensor product of Banach spaces with a universal property. Short maps from the tensor product of V and W to U should match short maps from V into bounded maps from W to U.

**How the definition helps.** The projective norm is an infimum over all ways to write a tensor, so bounded bilinear maps extend with the same norm (our own). So short linear maps out of the tensor product are short bilinear maps, which are short maps into a space of operators (our own). This is the statement that the category is closed symmetric monoidal. A cross norm is one with ‖v ⊗ w‖ = ‖v‖‖w‖, and the page shows that the projective norm is the largest one. The injective norm, the smallest one, does not make the category closed (our own remark). What stays hard is comparing the norms, and Grothendieck's approximation property and nuclear spaces come from asking when they agree.

**nLab:** [tensor product of Banach spaces](https://ncatlab.org/nlab/show/tensor+product+of+Banach+spaces). It says: “One of these, the projective tensor product, makes Ban (the category of Banach spaces and short linear maps) into a closed symmetric monoidal category”

**Sources:**

- [A. Grothendieck, Produits tensoriels topologiques et espaces nucléaires, Memoirs of the AMS 16 (1955)](https://doi.org/10.1090/memo/0016)

### Uniform integrability and tightness describe the weakly compact sets of L¹

**Remember:** No mass may pile up at a point or run off to infinity.

*Rules out counterexamples.* MSC 46B50 (Compactness in Banach (or normed) spaces), 46E30. arXiv math.FA. Level 3: graduate.

**Definition.** A family of integrable functions u is uniformly integrable if this holds. The integral of \|u\| over a set A is small for all u at once, when A has small measure. It is tight if, for each ε &gt; 0, one set of finite measure carries all but ε of the integral of every \|u\|.

**Problem.** The Dunford–Pettis theorem says when a bounded sequence in L¹ has a weakly convergent subsequence. Boundedness alone is not enough, because L¹ is not reflexive. A sequence uₙ converges weakly to u if ∫uₙg → ∫ug for every bounded measurable function g.

**How the definition helps.** The two conditions name exactly the two ways that a bounded sequence in L¹ can lose its weak limit. Uniform integrability excludes concentration. In our own example, n times the indicator of \[0, 1/n\] has norm 1. But it tends to a point mass, which is not in L¹. Tightness excludes escape: the indicators of \[n, n + 1\] have norm 1 but drift off to infinity. With both excluded, the theorem is an equivalence. Proving that the conditions are sufficient still takes real work (our own remark).

**Paper or page:** [Banach-Saks Theorem for L¹ revisited](https://arxiv.org/abs/2311.07319v1). It says: “For sequence (uₙ)ₙ⊂L¹(X), the following assertions are equivalent. (i) The sequence (uₙ)ₙ is relatively weakly compact in L¹(X). (ii) The sequence (uₙ)ₙ is bounded in L¹(X), uniformly integrable and tight.”

**Sources:**

- [Guy Foghem, Banach-Saks Theorem for L¹ revisited, arXiv:2311.07319 (2023), Approx. Theory Spec. Funct. 2 (2026) 1–13](https://arxiv.org/abs/2311.07319v1)

### Weak-type bounds let Marcinkiewicz interpolate from endpoints where strong bounds fail

**Remember:** Weak at both ends is strong in between.

*Makes the theorem clean to state or prove.* MSC 46B70 (Interpolation between normed linear spaces), 42B25. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** An operator T is of weak type (p, p) if this holds for every λ &gt; 0. The set where \|Tf\| &gt; λ has measure at most (C‖f‖ₚ/λ)ᵖ. It is of strong type (p, p) if it is bounded on Lᵖ. Every strong-type bound gives a weak-type bound by Chebyshev's inequality.

**Problem.** The Hardy–Littlewood maximal operator is not bounded on L¹. But it is of weak type (1, 1), and it is trivially bounded on L∞. The Marcinkiewicz theorem then shows that it is bounded on Lᵖ for every p &gt; 1.

**How the definition helps.** The weak-type definition asks only for a bound on the size of level sets, and that is what endpoint operators satisfy. So an interpolation theorem can start from an endpoint where the strong bound is false. In our own example, the maximal function of the indicator of \[0, 1\] decays like a constant times 1/\|x\|. So it is not in L¹, but it does satisfy the weak bound. The proof that weak bounds interpolate needs only a splitting of f at height λ (our own remark). The weak (1, 1) bound itself still needs a covering lemma.

**Paper or page:** [Embeddings of Weighted Morrey Spaces](https://arxiv.org/abs/2508.03387v1). It says: “Let 1≤p₀&lt;p₁≤∞ and an operator T: ℝⁿ→ℝⁿ be sublinear and of weak-type (p₀,p₀) and weak-type (p₁,p₁). Then T is of strong-type (p,p) for all p₀&lt;p&lt;p₁.”

**Sources:**

- [Marcus Gerhold, Embeddings of Weighted Morrey Spaces, arXiv:2508.03387 (2025)](https://arxiv.org/abs/2508.03387v1)

### Completeness gives Hilbert spaces the Riesz and projection theorems

**Remember:** An inner product gives angles; completeness makes sure that the limits are in the space.

*Rules out counterexamples.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)). arXiv math.FA. Level 3: graduate.

**Definition.** A Hilbert space is an inner product space that is complete for the distance defined by the inner product. Complete means that every Cauchy sequence converges to a point of the space.

**Problem.** Two theorems should hold in a Hilbert space H. The Riesz representation theorem says that every continuous linear functional on H is the inner product with a fixed vector. The projection theorem says that every point has a unique nearest point in a nonempty closed convex set.

**How the definition helps.** The proofs need limits of Cauchy sequences, and completeness makes sure that these limits are in the space. The proof of the projection theorem takes a minimizing sequence (points whose distances approach the smallest possible distance). It shows that the sequence is Cauchy by the parallelogram law, and it uses completeness to get a limit. Without completeness the limit may be missing. The article notes that the dual (the space of continuous linear functionals) of any inner product space is identified with its completion. So in an incomplete space, some continuous functionals are not the inner product with any vector of the space. Completeness also makes orthogonal series with square-summable coefficients converge.

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

**Problem.** The Moore–Aronszajn theorem says that each positive definite kernel is the reproducing kernel of exactly one Hilbert space of functions. This lets one build function spaces, for example in machine learning, by choosing a kernel.

**How the definition helps.** The reproducing property fixes the inner product of any two functions Kₓ and Kᵧ as a value of K, as in the quoted construction. So it fixes the inner product on all finite sums of such functions. This makes uniqueness almost immediate. Positive definiteness is exactly the condition that makes this formula a valid inner product (our own remark). The remaining work is to show that the completion is still a space of functions. Point evaluation is bounded, and a limit that is zero at every point must have norm zero (our own remark).

**Paper or page:** [Natural methods of unsupervised topological alignment](https://arxiv.org/abs/2510.26631v1). It says: “Suppose that K(x,y) is a Hermitian symmetric, positive definite kernel on the set 𝔄×𝔄. Then there exists a unique Hilbert space ℌ of functions defined on 𝔄, for which K is the reproducing kernel.”

**Sources:**

- [Natural methods of unsupervised topological alignment, arXiv:2510.26631 (2025)](https://arxiv.org/abs/2510.26631v1)
- [N. Aronszajn, Theory of reproducing kernels, Trans. Amer. Math. Soc. 68 (1950) 337–404](https://doi.org/10.1090/s0002-9947-1950-0051437-7)

### Continuous point evaluation gives a Hilbert space a reproducing kernel

**Remember:** If evaluation at a point is continuous, Riesz makes it an inner product.

*True by definition.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)). arXiv math.FA. Level 3: graduate.

**Definition.** A reproducing kernel Hilbert space is a Hilbert space H of functions on a set X with one extra property. For every x in X, the evaluation map f ↦ f(x) is a continuous linear functional.

**Problem.** There is a kernel K with f(x) = ⟨f, K(·, x)⟩ for every f in H. In words, the value of f at x is the inner product of f with one fixed function for that x. Conversely, every symmetric positive-definite kernel defines a unique such space (the Moore–Aronszajn theorem).

**How the definition helps.** The kernel comes straight from the Riesz representation theorem, so the definition already gives it. By that theorem, each continuous evaluation functional is the inner product with a unique vector Kₓ. Then K(y, x) = Kₓ(y) is the reproducing kernel. The article says that a kernel exists if and only if every evaluation functional is continuous. Our own remark: L²(ℝ) is not such a space. Its elements are classes of functions that are equal almost everywhere, so f(x) has no meaning. The converse, building the space from a positive-definite kernel, is the substantial Moore–Aronszajn theorem.

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

**How the definition helps.** In our own proof, repeated doubling makes Φ(c\|f\|) integrable at every positive scale c. Truncation and approximation by finite-valued functions then give errors whose integrals at any fixed scale tend to zero by dominated convergence. Our own counterexample on (0,1) uses Lebesgue measure, Φ(t) = exp(t) − 1, and f(x) = log(1/x). The integral of Φ(\|f\|/2) is finite. For every bounded simple function g, the integral of Φ(\|f − g\|) diverges by comparison with 1/x near zero. The Luxemburg norm is the infimum of positive divisors that make the integral of Φ applied to the divided absolute error at most one. Thus every such g has error norm at least one.

**Paper or page:** [Convolutions of Orlicz spaces and Orlicz Schatten classes, with applications to Toeplitz operators](https://arxiv.org/abs/2505.01707v2). It says: “if $\\Phi$ is a quasi-Young function which satisfies a $\\Delta<sub>2</sub>$-condition, then the simple functions are dense in $L<sup>\\Phi</sup>(d\\mu)$;”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev norms make higher-to-lower order circle embeddings compact

**Remember:** Discard high frequencies and the error tends uniformly to zero on bounded sets.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42A16. arXiv math.AP, math.FA. Level 3: graduate.

**Definition.** A distribution acts linearly and continuously on smooth test functions. On the circle, Hˢ consists of distributions with Fourier coefficients f̂(n) for which the sum of (1 + n²)ˢ\|f̂(n)\|² is finite. For nonnegative integers s, the usual definition asks that weak derivatives through order s be square-integrable. A weak derivative moves differentiation onto smooth test functions by integration by parts.

**Problem.** For real s &gt; t, the inclusion Hˢ → Hᵗ on the circle is compact. This means it maps bounded sets to sets with compact closure.

**How the definition helps.** Fourier weights make the inclusion diagonal with entries tending to zero, in our own proof. Rescale the coefficients by the weights in each norm to get diagonal entries (1 + n²) to the power (t − s)/2. Keeping finitely many frequencies gives finite-dimensional approximations whose operator-norm errors tend to zero. The work moves into Parseval’s identity, which equates the function norm and the coefficient norm, and the Fourier rule for derivatives.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Both representations follow easily from Parseval's theorem and the fact that differentiation is equivalent to multiplying the Fourier coefficient by in.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights admit the delta exactly below order −n/2

**Remember:** The delta has a flat transform, so the weight must supply all the decay.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 46F12. arXiv math.AP. Level 3: graduate.

**Definition.** A tempered distribution acts continuously and linearly on smooth test functions whose derivatives, including the functions themselves, decay faster than any inverse power. The Sobolev space Hˢ(ℝⁿ) consists of tempered distributions whose Fourier transforms are square-integrable after multiplication by (1 + \|ξ\|²) to the power s/2. The usual integer-order definition uses weak derivatives, which move differentiation onto test functions, and does not cover negative orders on its own.

**Problem.** The Dirac delta δ, which evaluates a test function at zero, belongs to Hˢ(ℝⁿ) exactly when s &lt; −n/2.

**How the definition helps.** Fourier weights turn membership into one test for integrability, in our own computation. The delta transforms to a constant, so membership asks whether (1 + \|ξ\|²) to the power s is integrable. Polar coordinates give convergence exactly when 2s &lt; −n. The work moves into defining Fourier transforms of distributions and proving Plancherel’s norm identity, which connects the two definitions at nonnegative integer orders.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “This motivates Sobolev spaces with non-integer order since in the above definition we can replace k by any real number s.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give continuity above order n/2

**Remember:** A sufficiently strong Fourier weight makes the transform integrable and the function continuous.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, Hˢ(ℝⁿ) consists of square-integrable functions whose Fourier transforms remain square-integrable after multiplication by (1 + \|ξ\|²) to the power s/2. The norm is the square-integral norm of that product. The usual integer-order definition requires square-integrable weak derivatives through that order. A weak derivative moves differentiation onto smooth test functions by integration by parts.

**Problem.** If s &gt; n/2, each f in Hˢ(ℝⁿ) agrees almost everywhere with a bounded continuous function. Its supremum norm is bounded by a constant times the Hˢ norm of f.

**How the definition helps.** Fourier weights yield an integrable transform by one use of Cauchy–Schwarz, in our own proof. The bound is the Hˢ norm times the square root of the integral of (1 + \|ξ\|²) to the power −s. That integral converges exactly when s &gt; n/2. Fourier inversion of an integrable transform gives the bounded continuous representative. The work moves into Fourier inversion and Plancherel’s norm identity, which identifies the spaces at integer orders.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “For k &gt; n/p, the space Wᵏ,ᵖ(Ω) will contain only continuous functions, but for which k this is already true depends both on p and on the dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights give global regularity for constant-coefficient elliptic operators

**Remember:** At high frequencies, the elliptic symbol pays for the extra derivatives.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35B65, 35J30. arXiv math.AP. Level 3: graduate.

**Definition.** For a constant-coefficient scalar differential operator P of order m, its symbol is the polynomial that multiplies the Fourier transform when P acts. The operator is elliptic if the degree-m part of this polynomial never vanishes at a nonzero real frequency. For real r, define Hʳ by requiring the Fourier transform times (1 + \|ξ\|²) to the power r/2 to be square-integrable. The usual nonnegative integer definition instead requires square-integrable weak derivatives through order r.

**Problem.** Let P be elliptic and have constant coefficients on ℝⁿ. If u is in Hᵗ and Pu is in Hˢ for real s and t, then u is in Hˢ⁺ᵐ.

**How the definition helps.** Fourier weights make global regularity an estimate on the polynomial symbol, in our own proof. Ellipticity and compactness of the unit sphere give a lower bound by a positive multiple of \|ξ\| to the power m at high frequencies. Dividing by that bound controls the Hˢ⁺ᵐ weight of û by the Hˢ weight of the transform of Pu. On bounded frequencies, the Hᵗ assumption controls the Hˢ⁺ᵐ weight. The work moves into proving the lower bound and using Plancherel to recover the weak-derivative interpretation at integer orders. Variable coefficients need a different argument because Fourier transformation does not turn them into scalar multipliers.

**Wikipedia:** [Elliptic operator](https://en.wikipedia.org/wiki/Elliptic_operator), [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “The elliptic regularity theorem guarantees that, provided f is square-integrable, u will in fact have 2k square-integrable weak derivatives.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier Sobolev weights show why traces lose half a derivative

**Remember:** Integrating over the normal frequency costs half a derivative.

*True by definition. Confidence: medium.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 42B10. arXiv math.AP. Level 3: graduate.

**Definition.** For s &gt; 0, Hˢ(ℝⁿ) consists of square-integrable functions whose Fourier transforms remain square-integrable after multiplication by (1 + \|ξ\|²) to the power s/2. The trace of a smooth function is its restriction to the hyperplane xₙ = 0. The usual first-order proof uses the fundamental theorem of calculus along lines perpendicular to the hyperplane.

**Problem.** Let n ≥ 2 and s &gt; 1/2. The trace extends from smooth, rapidly decreasing functions to a bounded linear map Hˢ(ℝⁿ) → Hˢ⁻¹⁄²(ℝⁿ⁻¹).

**How the definition helps.** Fourier inversion turns restriction into integration over one frequency, and the weight gives the loss directly in our own proof. Write ξ = (ξ′, ξₙ) and fix the Fourier convention with 2π in the exponent. The transform of the trace is the integral of û(ξ′, ξₙ) over ξₙ. Apply Cauchy–Schwarz with the Hˢ weight and its reciprocal. The squared reciprocal integrates to a constant times (1 + \|ξ′\|²) to the power 1/2 − s. Integrating the bound in ξ′ gives the trace estimate. The work moves into Fourier inversion and density of the smooth, rapidly decreasing functions in Hˢ.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “Intuitively, taking the trace costs 1/p of a derivative.”

**Sources:** none listed. No primary source with a working link was found.

### Sobolev spaces make Dirichlet's principle true

**Remember:** Widen the space until the minimizing sequence has somewhere to converge.

*Makes the theorem clean to state or prove.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems), 35J25, 49J05. arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** A Sobolev space Wᵏ,ᵖ contains the Lᵖ functions whose weak derivatives up to order k are also in Lᵖ. A function v is the weak derivative Dᵅu when ∫ u Dᵅφ = ± ∫ v φ for every test function φ (a smooth function that is zero outside a compact subset of the domain). The sign is + when the order \|α\| is even and − when it is odd; this is integration by parts with no boundary terms. With weak derivatives the space is complete, and for 1 &lt; p &lt; ∞ it is reflexive (the dual of its dual is the space itself).

**Problem.** Dirichlet's principle: a function that minimizes the Dirichlet energy exists. This function solves the Poisson or Laplace equation with the given boundary values.

**How the definition helps.** In a Sobolev space, a bounded minimizing sequence has a weakly convergent subsequence (one that converges when tested against each continuous linear functional), so a minimizer can exist. Riemann took for granted that the Dirichlet integral, which is bounded below, attains its minimum. In 1870 Weierstrass gave a functional, ∫ (x φ′)² dx on \[−1, 1\] with different boundary values at the two ends, whose infimum 0 is not attained. It is a different integral, but it broke the reasoning, and Hilbert later justified the principle with the direct method. A convex energy is weakly lower semicontinuous (the energy of the limit is at most the limit of the energies), so the limit is a minimizer and a weak solution. Spaces of C² functions with their usual norms are not reflexive, so this argument fails there. What stays hard is regularity: to show that the weak minimizer is smooth.

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

**How the definition helps.** With the quotient norm, the space of boundary values is H¹(Ω) divided by the kernel H¹₀(Ω) of the trace. In a Hilbert space, each coset of a closed subspace has exactly one shortest element, the one perpendicular to the subspace. Sending g to that element is linear and keeps norms. The work is the trace theorem, which makes the trace continuous, so its kernel is closed. It also identifies the image with H½(∂Ω) under an equivalent norm. Wikipedia states the trace theorem; the extension argument is our own.

**Wikipedia:** [Sobolev space](https://en.wikipedia.org/wiki/Sobolev_space). It says: “it maps continuously onto the Sobolev–Slobodeckij space”

**Sources:** none listed. No primary source with a working link was found.

### Weak derivatives make first-order Sobolev spaces complete

**Remember:** The integration identity preserves weak derivatives when the functions and derivatives converge.

*True by definition.* MSC 46E35 (Sobolev spaces and other spaces of \`\`smooth'' functions, embedding theorems, trace theorems). arXiv math.FA, math.AP. Level 3: graduate.

**Definition.** The weak derivative of u in direction j is gⱼ if ∫ u ∂ⱼφ = −∫ gⱼφ for every smooth φ of compact support. The Sobolev space W¹,ᵖ(Ω) consists of functions in Lᵖ with first weak derivatives in Lᵖ. Its norm sums the Lᵖ norms of the function and its first weak derivatives. For finite p, using only continuously differentiable functions with the same norm can leave out limits.

**Problem.** For any open Ω and 1 ≤ p ≤ ∞, W¹,ᵖ(Ω) is a Banach space, meaning a complete normed space.

**How the definition helps.** The weak-derivative definition gives an integral identity that passes to limits, in our own proof. In a Sobolev Cauchy sequence, the functions and each of their first derivatives are Cauchy in Lᵖ. By completeness of Lᵖ they have limits u and gⱼ. Hölder’s inequality lets both sides of the defining identity pass to the limit. Thus gⱼ is the weak derivative of u, and the sequence converges in the Sobolev norm. For finite p on (−1, 1), smooth functions √(x² + ε²) converge in this norm to \|x\|, which lacks a classical derivative at zero. The work moves into completeness of Lᵖ and Hölder’s bound for integration against the test functions.

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

**How the definition helps.** Each Tₙ′(φ) equals −Tₙ(φ′), and φ′ is again a fixed test function, so the limit passes through. This one-line proof is our own. Classical derivatives can fail this: sin(n²x)/n tends to zero uniformly, but its derivatives n cos(n²x) do not converge, in our own example. The work moves to showing that T′ is a distribution, which needs φ ↦ φ′ to be continuous on test functions.

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

**How the definition helps.** The definition moves the derivative onto the test function, and a test function can always be differentiated. The formula copies integration by parts. So for a smooth function f, the derivative of the distribution of f is the distribution of f′. Because φ′ is again a test function, the formula always makes sense. So every distribution is infinitely differentiable with no extra work. For example, the derivative of the Heaviside step function is the Dirac delta (our own example). The cost comes elsewhere: Schwartz's impossibility theorem shows that no product of general distributions extends the pointwise product and keeps its algebraic rules.

**Wikipedia:** [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “It turns out that this is the proper definition; it extends the ordinary definition of derivative, every distribution becomes infinitely differentiable and the usual properties of derivatives hold.”

**Sources:** none listed. No primary source with a working link was found.

### The principal value makes 1/x a distribution that solves x·F = 1

**Remember:** Cut out a symmetric gap, and the two infinities cancel.

*Makes the theorem clean to state or prove.* MSC 46F10 (Operations with distributions and generalized functions), 26A42. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** The Cauchy principal value of f is the limit as ε → 0 of the integral of f over the real line without (−ε, ε). The distribution PV(1/x) sends a smooth function b with compact support to the principal value of b(x)/x.

**Problem.** Find all distributions F on the real line with x·F = 1. The function 1/x is not integrable near 0, so integration against 1/x does not define a distribution.

**How the definition helps.** Cutting a symmetric gap makes the large positive and negative parts near 0 cancel, so the limit exists for every smooth test function. Then x·PV(1/x) = 1 as distributions. Since x·δ = 0, every PV(1/x) + cδ is also a solution, with δ the Dirac delta. These are all the solutions, because x·G = 0 forces G = cδ (our own). The page also shows that PV(1/x) is the distributional derivative of ln\|x\|. The Sokhotski–Plemelj formula says that 1/(x ± i0) equals PV(1/x) ∓ iπδ. The cost is that the principal value depends on the symmetry of the gap.

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

**Problem.** Extend the Fourier transform from functions to distributions. The new transform must agree with the old transform on functions, and Fourier inversion must still hold.

**How the definition helps.** The definition moves the transform onto the test function, so every result comes from the case of Schwartz functions. The definition copies the identity ∫ f ĝ = ∫ f̂ g, which holds for Schwartz functions. In words, you can move the hat from one factor to the other inside the integral. So for a distribution that comes from a Schwartz function f, the new transform is the distribution of f̂. Every step here is a definition, except that one identity. Fourier inversion for tempered distributions then follows at once from Fourier inversion for Schwartz functions. The real work is in the function case and in showing that the Fourier transform preserves the Schwartz space.

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “Property \[…\] of the ordinary Fourier transform on functions with rapidly decreasing partial derivatives motivates and justifies the fullowing generalization”

**Sources:**

- [Lars Hörmander, The Analysis of Linear Partial Differential Operators I, Springer (1983; 2nd ed. 1990), chapter 7](https://doi.org/10.1007/978-3-642-61497-2)

### Fourier duality preserves homogeneity and changes degree m to −n−m

**Remember:** Fourier duality takes degree m to degree −n − m.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F12 (Integral transforms in distribution spaces), 46F10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A tempered distribution S acts continuously and linearly on smooth test functions whose derivatives, including the functions themselves, decay faster than any inverse power. Set φₜ(x) = t⁻ⁿφ(x/t) for t &gt; 0. Call S homogeneous of degree m if S(φₜ) = tᵐS(φ) for all φ and t. Its Fourier transform is defined by duality, Ŝ(φ) = S(φ̂).

**Problem.** If a tempered distribution S on ℝⁿ is homogeneous of degree m, then Ŝ is homogeneous of degree −n − m.

**How the definition helps.** Fourier duality lets us state the scaling rule even for functions whose classical Fourier integral does not converge, in our own account. For instance, \|x\| to the power −a is not integrable at infinity when 0 &lt; a &lt; n. In our own proof, the Fourier transform of φₜ is t⁻ⁿ times the dilation of φ̂ by 1/t in the same test function convention. Applying S gives the factor t⁻ⁿt⁻ᵐ. The work moves into the Fourier transform on test functions and the change of variables that gives this dilation identity.

**Wikipedia:** [Homogeneous distribution](https://en.wikipedia.org/wiki/Homogeneous_distribution). It says: “The additional factor of t⁻ⁿ is needed to reproduce the usual notion of homogeneity for locally integrable functions, and comes about from the Jacobian change of variables.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier duality sends the constant one to the Dirac delta

**Remember:** Inversion at zero turns the transform of one into point evaluation.

*True by definition.* MSC 46F12 (Integral transforms in distribution spaces), 42B10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A tempered distribution T acts continuously and linearly on smooth test functions whose derivatives, including the functions themselves, decay faster than any inverse power. Define its Fourier transform by T̂(φ) = T(φ̂). For test functions, use the Fourier integral with kernel exp(−2πix·ξ). That integral does not converge for the constant function 1.

**Problem.** The Fourier transform of the constant function 1 is the Dirac delta δ, which acts by δ(φ) = φ(0).

**How the definition helps.** Fourier duality turns the transform of 1 into the inversion formula at zero, in our own proof. The definition gives 1̂(φ) = ∫ φ̂, and inversion gives ∫ φ̂ = φ(0). The work moves into proving inversion on the test functions and showing that their transforms remain test functions. ProofWiki states the one-dimensional identity, and the same proof works in every dimension.

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “û(f) ≔ u(f̂)”

**Paper or page:** [Fourier Transform of 1](https://proofwiki.org/wiki/Fourier_Transform_of_1). It says: “Let: f(x) = 1 Then: f̂(s) = δ(s) where f̂(s) is the Fourier transform of f(x).”

**Sources:** none listed. No primary source with a working link was found.

### Fourier duality turns distribution derivatives into frequency multiplication

**Remember:** Move differentiation to the test function and apply its Fourier rule.

*True by definition.* MSC 46F12 (Integral transforms in distribution spaces), 42B10. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A tempered distribution u acts continuously and linearly on smooth test functions whose derivatives, including the functions themselves, decay faster than any inverse power. Define (∂ⱼu)(φ) = −u(∂ⱼφ) and û(φ) = u(φ̂). For ordinary integrable functions, the usual Fourier transform uses the integral with kernel exp(−2πix·ξ).

**Problem.** For every tempered distribution u on ℝⁿ, the Fourier transform of ∂ⱼu is 2πiξⱼû.

**How the definition helps.** Fourier duality puts the derivative on the test function, so the usual test-function rule proves the distribution identity in our own argument. Applied to φ, the transform of ∂ⱼu gives −u(∂ⱼφ̂). Differentiating the Fourier integral gives ∂ⱼφ̂ as the transform of −2πixⱼφ. The result is therefore û(2πixⱼφ), the action of 2πiξⱼû on φ. The work moves into proving that the Fourier transform preserves these test functions and justifying differentiation in the Fourier integral.

**Wikipedia:** [Fourier transform](https://en.wikipedia.org/wiki/Fourier_transform). It says: “Distributions can be differentiated and the above-mentioned compatibility of the Fourier transform with differentiation and convolution remains true for tempered distributions.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiability as linear approximation excludes discontinuous functions with all directional derivatives

**Remember:** Approach from every direction at once, not one line at a time.

*Rules out counterexamples.* MSC 46G05 (Derivatives of functions in infinite-dimensional spaces), 26B05. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** A map f between normed spaces is Fréchet differentiable at x if some bounded linear map A makes the error small. The error is ‖f(x+h) − f(x) − Ah‖, and the error divided by ‖h‖ must tend to 0 as h → 0. The weaker Gateaux derivative asks only that each directional derivative exists.

**Problem.** A differentiable function should be continuous, and the chain rule should hold for compositions.

**How the definition helps.** The Fréchet definition asks the error to be small uniformly in all directions, so differentiability implies continuity and the chain rule. The directional version can fail both (our own for the chain rule). The function x³y / (x⁶ + y²), with value 0 at the origin, has all directional derivatives equal to 0 at the origin. But it is not continuous there, as the curve (t, t³) shows. In infinite dimensions, a discontinuous linear functional gives a further bad example. A separate theorem gives a practical test: continuous partial derivatives imply Fréchet differentiability.

**Wikipedia:** [Fréchet derivative](https://en.wikipedia.org/wiki/Fr%C3%A9chet_derivative). It says: “This is analogous to the fact that the existence of all directional derivatives at a point does not guarantee total differentiability (or even continuity) at that point.”

**Sources:**

- [Maurice Fréchet, La notion de différentielle dans l'analyse générale, Annales scientifiques de l'École normale supérieure 42 (1925)](https://doi.org/10.24033/asens.766)

### Strong measurability lets integrable norms give vector integrals

**Remember:** Integrable norms suffice only when simple functions can see the vector values.

*Rules out counterexamples.* MSC 46G10 (Vector-valued measures and integration), 46E40. arXiv math.FA. Level 3: graduate.

**Definition.** A function into a Banach space is strongly measurable if it is an almost-everywhere limit of finite-valued measurable functions. Weak measurability only tests the scalar functions obtained by applying bounded linear functionals.

**Problem.** A strongly measurable Banach-space-valued function with integrable norm has a Bochner integral. This is the norm limit of integrals of simple functions that approximate it in integrated norm.

**How the definition helps.** Strong measurability supplies the simple approximations needed for the Bochner integrability criterion. Our own example sends t in \[0,1\], with Lebesgue measure, to the unit vector indexed by t in ℓ²(\[0,1\]). This Hilbert space consists of square-summable families indexed by the interval. Every bounded linear functional has only countably many nonzero coordinates, so each scalar test is measurable. Every vector in the example has norm one. A sequence of finite-valued approximations uses only countably many vectors, which together involve only countably many coordinates. Outside those coordinates it cannot approximate the assigned unit vectors, so the function has no Bochner integral.

**Wikipedia:** [Bochner integral](https://en.wikipedia.org/wiki/Bochner_integral). It says: “a Bochner-measurable function f : X → B is Bochner integrable if and only if ∫₍X₎ ∥f∥ʙ dμ &lt; ∞.”

**Sources:** none listed. No primary source with a working link was found.

### The weak Pettis definition lets bounded operators commute with the integral

**Remember:** Pull each functional back through the operator.

*True by definition.* MSC 46G10 (Vector-valued measures and integration), 28B05. arXiv math.FA. Level 3: graduate.

**Definition.** Let f map a measure space into a Banach space V. Call f Pettis integrable when each measurable set A has a vector e in V with this property. Every continuous linear functional φ sends e to the integral of φ ∘ f over A. The Bochner integral instead approximates f by simple functions in the integral of the norm.

**Problem.** Let T be a continuous linear operator between Banach spaces and f be Pettis integrable. Then T ∘ f is Pettis integrable, and its integral is T applied to the integral of f.

**How the definition helps.** In our own proof, a functional ψ on the target composed with T is a functional on the source. So the defining test passes straight through T. Hence ψ(T(e)) equals the integral of ψ ∘ T ∘ f over A for every ψ. For the Bochner integral one must first check simple functions and then pass to limits, in our own account. The hard part of the Pettis theory is proving that the required vector exists.

**Wikipedia:** [Pettis integral](https://en.wikipedia.org/wiki/Pettis_integral). It says: “⟨φ, e<sub>A</sub>⟩ = ∫<sub>A</sub> ⟨φ, f(x)⟩ dμ(x) for all φ ∈ V′.”

**Sources:** none listed. No primary source with a working link was found.

### Complex scalars make ℂ the only Banach division algebra

**Remember:** Over ℂ every element has a spectral point, so division algebras collapse to ℂ.

*Rules out counterexamples. Confidence: medium.* MSC 46H05 (General theory of topological algebras), 46H20. arXiv math.FA. Level 3: graduate.

**Definition.** A Banach algebra is an algebra with a complete norm that satisfies ‖ab‖ ≤ ‖a‖‖b‖. A division algebra is one in which every nonzero element has an inverse. The Gelfand–Mazur theorem is about unital Banach algebras with complex scalars.

**Problem.** The Gelfand–Mazur theorem says that a complex unital Banach algebra in which every nonzero element is invertible is isometrically isomorphic to ℂ. The Gelfand representation page says the bijection between characters and maximal ideals relies on it.

**How the definition helps.** With complex scalars, every element a has some λ in its spectrum, so a − λ1 is not invertible and must be zero. The nonempty spectrum comes from complex analysis of the resolvent, which is why the scalars must be complex. Over the real numbers the quaternions are a Banach division algebra that is not ℝ or ℂ. The page says that the real case has exactly three answers: ℝ, ℂ and the quaternions. So the choice of complex scalars is what makes the answer unique.

**Wikipedia:** [Gelfand–Mazur theorem](https://en.wikipedia.org/wiki/Gelfand%E2%80%93Mazur_theorem), [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “the only complex Banach algebra that is a division algebra is the complex numbers ℂ.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the spectrum by characters makes polynomial spectral mapping immediate

**Remember:** A character reads p(a) as p of its reading of a.

*True by definition. Confidence: medium.* MSC 46H05 (General theory of topological algebras), 47A10. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** In a commutative unital complex Banach algebra, a character is a nonzero multiplicative linear functional. Define the spectrum of an element a as the set of values φ(a) over all characters φ. The usual definition takes all λ for which a − λ1 has no inverse.

**Problem.** Let a be an element of a commutative unital complex Banach algebra, and let p be a polynomial. Then the spectrum of p(a) is the set of values p(λ) for λ in the spectrum of a.

**How the definition helps.** With the character definition the proof is one line, because φ(p(a)) = p(φ(a)) for every character φ. The work moves to the theorem that the two definitions agree. That theorem says that every maximal ideal is the kernel of a character. It uses the Gelfand–Mazur theorem, which says that every complex Banach division algebra is ℂ. The usual definition also gives a short proof, by factoring p(a) − λ into linear factors, and that proof works without commutativity. ProofWiki states the agreement of the definitions; the comparison is our own.

**Paper or page:** [Spectrum of Element of Unital Commutative Banach Algebra](https://proofwiki.org/wiki/Spectrum_of_Element_of_Unital_Commutative_Banach_Algebra). It says: “σₐ(x) = {φ(x) : φ ∈ Φₐ}”

**Sources:** none listed. No primary source with a working link was found.

### Adding a unit makes non-unital C\*-algebras behave like compactified spaces

**Remember:** Adding a unit is adding a point at infinity, then subtracting it again.

*Makes the theorem clean to state or prove.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a non-unital C\*-algebra A, the unitization is A⁺ = A ⊕ ℂ with product (a, z)(b, w) = (ab + wa + zb, zw). It has a C\*-norm and a homomorphism A⁺ → ℂ that sends (a, z) to z. For a locally compact space X, the unitization of C₀(X) is C(X⁺), with X⁺ the one-point compactification.

**Problem.** Operator K-theory first defines the group K₀ from projections, that is self-adjoint idempotents, in matrices over a unital algebra. One wants K-groups for non-unital algebras, such as C₀(X), that give K-theory with compact support.

**How the definition helps.** The unitization moves the problem to a unital algebra, and the map to ℂ remembers what was added. The page defines the K-theory of A as the kernel of the map from K₀(A⁺) to K₀(ℂ) = ℤ. For A = C₀(X), this is the kernel of the map induced by the point at infinity. The page calls this compactly supported K-theory and cites Emerson for a precise form. Every C\*-algebra map then has an induced map on K-groups (our own). Exactness and Bott periodicity for the new groups still need proofs (our own).

**nLab:** [unitization of a C-star-algebra](https://ncatlab.org/nlab/show/unitization+of+a+C-star-algebra). It says: “The generalization of the process of one-point compactification of possibly non-compact topological spaces from topology to non-commutative topology is the process of adding units to possibly non-unital C\*-algebras”

**Sources:** none listed. No primary source with a working link was found.

### Characters must be nonzero, so the Gelfand spectrum is locally compact

**Remember:** Drop the zero character, and the space left over is locally compact.

*Rules out counterexamples.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** The spectrum of a commutative C\*-algebra A is the set of nonzero \*-homomorphisms from A to ℂ. It carries the weak-\* topology, the topology of pointwise convergence on A.

**Problem.** One wants the spectrum to be a locally compact Hausdorff space, compact when A has a unit. Then A is the algebra of functions vanishing at infinity on its spectrum.

**How the definition helps.** The characters and the zero map form a weak-\* closed part of the dual unit ball. So they form a compact set by the Banach–Alaoglu theorem (our own step). Removing the one point 0 leaves a locally compact space. When A has a unit, every character sends 1 to 1, so no net of characters can converge to zero. Then the spectrum is closed, hence compact. The zero map plays the part of the point at infinity of the one-point compactification (our own remark).

**Wikipedia:** [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “In the unital case, i.e. where the C\*-algebra has a multiplicative unit element 1, all characters f must be unital, i.e. f(1) is the complex number one. This excludes the zero homomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Defining positive elements as b\*b makes adjoint-preserving homomorphisms preserve positivity

**Remember:** A map that preserves adjoints sends b\*b to φ(b)\*φ(b).

*True by definition. Confidence: medium.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** Call an element of a C\*-algebra positive if it equals b\*b for some element b of the algebra. The spectral definition instead calls an element positive if it is self-adjoint and its spectrum lies in \[0, ∞).

**Problem.** Every homomorphism between C\*-algebras that preserves adjoints sends positive elements to positive elements.

**How the definition helps.** With the b\*b definition, φ(b\*b) = φ(b)\*φ(b), which is positive by definition. The work moves to the theorem that the two definitions agree. One direction is the Fukamiya–Kaplansky theorem that b\*b has spectrum in \[0, ∞), which is the hard step. The other direction builds a square root of a positive element with the continuous functional calculus. With the spectral definition, the proof instead uses the fact that a homomorphism does not enlarge spectra, apart from adding 0. Wikipedia states that the two definitions agree; the comparison is our own.

**Wikipedia:** [C\*-algebra](https://en.wikipedia.org/wiki/C%2A-algebra). It says: “Elements of this cone are called non-negative (or sometimes positive”

**Sources:** none listed. No primary source with a working link was found.

### If the star is isometric, the B\* and C\* identities agree

**Remember:** Once the star keeps the norm, the two norm identities say the same thing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A C\*-algebra is a Banach \*-algebra that satisfies the C\*-identity ‖A\*A‖ = ‖A\*‖ ‖A‖. Here a Banach \*-algebra has an involution A ↦ A\* that is an isometry: ‖A\*‖ = ‖A‖. Equivalently, a C\*-algebra satisfies the B\*-identity ‖A\*A‖ = ‖A‖².

**Problem.** Show that the C\*-identity and the B\*-identity define the same class of algebras.

**How the definition helps.** If the involution is an isometry by definition, the two identities are visibly the same. The reason is that ‖A\*‖ ‖A‖ = ‖A‖² when ‖A\*‖ = ‖A‖. Many texts leave this clause out of the definition of a Banach \*-algebra. Then the isometry still follows easily from the B\*-identity. From the C\*-identity, it follows only after some difficulty, as the nLab says. So the clause moves the hard part out of the equivalence. That hard part is the theorem that the C\*-identity alone forces the involution to be an isometry.

**nLab:** [C-star-algebra](https://ncatlab.org/nlab/show/C-star-algebra). It says: “Often one sees the definition without the clause (which should be in the definition of Banach \*-algebra) that the involution is an isometry (so that ‖A\*‖ = ‖A‖, which is key for the equivalence of the B\* and C\* identities).”

**Sources:**

- [James G. Glimm, Richard V. Kadison, Unitary operators in C\*-algebras, Pacific Journal of Mathematics 10 (1960) 547–556 (the unital case of the hard direction)](https://doi.org/10.2140/pjm.1960.10.547)

### The C\*-identity makes the Gelfand transform an isometry

**Remember:** The C\*-identity forces norm and spectral radius to agree, so nothing is lost.

*Rules out counterexamples.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46J25. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A character of a commutative Banach algebra is a nonzero homomorphism to ℂ. The Gelfand transform sends an element a to the function f ↦ f(a) on the space of characters. A C\*-algebra is a Banach algebra with an involution such that ‖x\*x‖ = ‖x‖².

**Problem.** The commutative Gelfand–Naimark theorem says that every commutative C\*-algebra is isometrically isomorphic to C₀(X), the continuous functions vanishing at infinity on its character space X.

**How the definition helps.** The C\*-identity makes the norm of a self-adjoint element equal to its spectral radius (our own summary). The spectral radius is the supremum of the Gelfand transform (our own summary). For a general commutative Banach algebra, the transform kills the Jacobson radical, the intersection of all maximal ideals. So nilpotent elements, and radical algebras such as the Volterra integration algebra, are sent to zero (our own examples). The C\*-identity excludes these, and the page says the transform is then an isometric isomorphism. The Stone–Weierstrass theorem then shows that the image is all of C₀(X) (our own summary of the proof).

**Wikipedia:** [Gelfand representation](https://en.wikipedia.org/wiki/Gelfand_representation). It says: “Thus the Gelfand representation is injective if and only if A is (Jacobson) semisimple.”

**Sources:**

- [I. Gelfand and M. Neumark, On the imbedding of normed rings into the ring of operators in Hilbert space, Matematicheskii Sbornik 12(54) (1943), 197–217; reprinted in Contemporary Mathematics 167 (1994)](https://doi.org/10.1090/conm/167/16)

### The universal definition of Cuntz algebras gives the circle action for free

**Remember:** Multiplying every generator by the same unit scalar keeps the relations.

*True by definition.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46L55. arXiv math.OA. Level 3: graduate.

**Definition.** Fix n ≥ 2. An isometry is an element s with s\*s = 1. The Cuntz algebra Oₙ is the universal C\*-algebra generated by n isometries s₁, …, sₙ with s₁s₁\* + ⋯ + sₙsₙ\* = 1. Universal means that any n such isometries in a C\*-algebra B are the images of the sᵢ under exactly one adjoint-preserving homomorphism.

**Problem.** For each complex number z with \|z\| = 1, there is an automorphism of Oₙ that sends each sᵢ to zsᵢ. These automorphisms form a continuous action of the circle.

**How the definition helps.** The elements zsᵢ are again isometries whose range projections sum to 1, so the universal property gives a homomorphism. The homomorphism for z̄ is its inverse, and the group law holds on the generators. Continuity holds on polynomials in the generators and their adjoints, which are dense. With the concrete definition, as the algebra generated by one chosen family of isometries, one needs Cuntz's uniqueness theorem. That theorem says that any two such families generate isomorphic C\*-algebras, and it is the work behind the universal definition. Wikipedia gives both definitions and Cuntz's theorem; the circle action argument is our own.

**Wikipedia:** [Cuntz algebra](https://en.wikipedia.org/wiki/Cuntz_algebra). It says: “This universal C\*-algebra is called the Cuntz algebra”

**Sources:**

- [Joachim Cuntz, Simple C\*-algebras generated by isometries (1977)](https://doi.org/10.1007/BF01625776)

### The universal definition of the multiplier algebra makes essential extensions embed

**Remember:** If no element of D can ignore A, then D embeds in M(A).

*True by definition.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A closed ideal A of a C\*-algebra D is essential if no nonzero element of D multiplies all of A to zero. The multiplier algebra M(A) contains A as an essential ideal and has a universal property. For each C\*-algebra D with A as a closed ideal, exactly one adjoint-preserving homomorphism from D to M(A) is the identity on A. One construction of M(A) uses double centralizers, which are compatible pairs of left and right multiplication maps on A.

**Problem.** Let a C\*-algebra D contain A as an essential ideal. Then the canonical homomorphism from D to M(A) is injective.

**How the definition helps.** The universal property gives the map, and the map is the identity on A. So its kernel is a closed ideal J of D that meets A only in 0. Then JA lies in J ∩ A = 0, so every element of J multiplies A to zero. Because A is essential, J = 0. The work is the construction of M(A) from double centralizers and the proof of its universal property. Wikipedia says the result follows from the definition; the kernel argument is our own.

**Wikipedia:** [Multiplier algebra](https://en.wikipedia.org/wiki/Multiplier_algebra). It says: “It also follows from the definition that for any D containing A as an essential ideal, the multiplier algebra M(A) contains D as a C\*-subalgebra.”

**Sources:** none listed. No primary source with a working link was found.

### The tensor norm definition of nuclearity makes spatial tensor products nuclear

**Remember:** Regroup three factors, then trade the largest norm for the smallest twice.

*True by definition. Confidence: medium.* MSC 46L06 (Tensor products of \\(C<sup>\*\\</sup>)-algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A C\*-algebra A is nuclear if, for every C\*-algebra B, the smallest and largest C\*-norms on the algebraic tensor product A ⊗ B agree. The smallest is the spatial norm, written ⊗min, and the largest is written ⊗max. Another definition asks that the identity map of A be a pointwise limit of completely positive contractions that factor through matrix algebras. Completely positive means positive even after tensoring with every matrix algebra.

**Problem.** If A and B are nuclear, then their spatial tensor product A ⊗min B is nuclear.

**How the definition helps.** Take any C. Since A ⊗min B = A ⊗max B and the maximal norm is associative, (A ⊗min B) ⊗max C equals A ⊗max (B ⊗max C). Nuclearity of B, and then of A, turns both maximal norms into minimal ones. The minimal norm is also associative, so the result is (A ⊗min B) ⊗min C. The work is the associativity of the two norms. With the approximation definition, one must tensor the approximating maps, which needs the fact that tensor products of completely positive maps stay completely positive. The nLab gives the norm definition; the proof and comparison are our own.

**nLab:** [spatial tensor product](https://ncatlab.org/nlab/show/spatial+tensor+product). It says: “the maximal and minimal tensor norms on the algebraic tensor product A ⊗ B coincide”

**Sources:**

- [Man-Duen Choi and Edward Effros, Nuclear C\*-algebras and the approximation property (1978)](https://doi.org/10.2307/2373876)

### Complete positivity, not positivity, makes Stinespring's dilation theorem true

**Remember:** The transpose is positive but not completely positive, so it has no dilation.

*Rules out counterexamples.* MSC 46L07 (Operator spaces and completely bounded maps), 46L05, 47A20. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** A linear map Φ between C\*-algebras is positive when it sends positive elements to positive elements. It is completely positive when Φ applied entrywise to n × n matrices is positive for every n.

**Problem.** Let Φ be a completely positive map from a unital C\*-algebra A to the bounded operators on H. Stinespring's theorem says that Φ(a) = V\*π(a)V. Here π is a \*-representation of A on another Hilbert space and V is a bounded operator.

**How the definition helps.** Complete positivity is exactly the property that a map of the form V\*π(·)V has, so the theorem can hold with no exceptions. Its proof builds an inner product on A ⊗ H, like the Gelfand–Naimark–Segal construction does for a state. Positivity of that inner product needs positivity of Φ on all matrix sizes. The transpose of matrices is positive but fails to be 2-positive, so it has no Stinespring form. For a state, the theorem gives back that Gelfand–Naimark–Segal representation. On commutative C\*-algebras, positive maps are automatically completely positive (our own remark).

**Wikipedia:** [Stinespring dilation theorem](https://en.wikipedia.org/wiki/Stinespring_dilation_theorem), [Completely positive map](https://en.wikipedia.org/wiki/Completely_positive_map). It says: “This is one way to see that completely positive maps, rather than merely positive ones, are the true generalizations of positive functionals.”

**Sources:**

- [W. F. Stinespring, Positive functions on C\*-algebras, Proceedings of the AMS 6 (1955), 211–216](https://doi.org/10.1090/S0002-9939-1955-0069403-4)
- [M.-D. Choi, Completely positive linear maps on complex matrices, Linear Algebra and its Applications 10 (1975), 285–290](https://doi.org/10.1016/0024-3795(75)90075-0)

### A predual defines von Neumann algebras without choosing a Hilbert space

**Remember:** Being a dual space is the abstract mark of a von Neumann algebra.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** A W\*-algebra is a C\*-algebra that is, as a Banach space, the dual of some Banach space. That Banach space is called the predual. For a von Neumann algebra on a Hilbert space, the predual consists of the functionals of the form Σ⟨Txₙ, yₙ⟩ with Σ‖xₙ‖‖yₙ‖ finite. These are the ultraweakly continuous functionals.

**Problem.** The ultraweak topology seems to depend on the Hilbert space on which the algebra acts. One wants the theory of von Neumann algebras to be intrinsic to the algebra.

**How the definition helps.** With Sakai's definition, the weak-\* topology from the predual is part of the data, so it cannot depend on a Hilbert space. The page says the predual is unique up to a canonical isomorphism. It can also be described as the span of the positive normal functionals, which uses only the order structure. The work moves into Sakai's theorem that every such C\*-algebra acts faithfully on a Hilbert space as a weakly closed algebra. The predual is usually smaller than the full dual. For ℓ∞(ℤ), free ultrafilters give functionals outside the predual.

**Wikipedia:** [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “Sakai (1971) showed that von Neumann algebras can also be defined abstractly as C\*-algebras that have a predual”

**Sources:**

- [S. Sakai, A characterization of W\*-algebras, Pacific Journal of Mathematics 6 (1956), 763–773](https://doi.org/10.2140/pjm.1956.6.763)

### The bicommutant theorem lets von Neumann algebras be defined by commutants

**Remember:** Weakly closed equals its double commutant, so algebra replaces topology.

*True by definition.* MSC 46L10 (General theory of von Neumann algebras). arXiv math.OA. Level 3: graduate.

**Definition.** The commutant S′ of a set S of operators is the set of all bounded operators that commute with every element of S. A von Neumann algebra is a \*-algebra of operators that contains the identity and is weakly closed. Weakly closed means it contains T whenever a net Tᵢ in it has ⟨Tᵢx, y⟩ → ⟨Tx, y⟩ for all x, y.

**Problem.** One wants simple closure facts. The commutant of any set closed under adjoints is a von Neumann algebra. A von Neumann algebra contains the spectral projections of its self-adjoint elements.

**How the definition helps.** With the algebraic definition M = M″, these facts are almost immediate, because commutants are easy to compute with. A spectral projection of a self-adjoint a in M commutes with every operator that commutes with a. So it lies in M″, which is M (our own example). The commutant S′ of any self-adjoint set is weakly closed and satisfies S′ = S‴ (our own). The work moves into the bicommutant theorem. It shows that the weak closure of a unital \*-algebra equals its bicommutant. A norm-closed algebra such as the compact operators is not weakly closed, so it is a C\*-algebra but not a von Neumann algebra.

**Wikipedia:** [Von Neumann bicommutant theorem](https://en.wikipedia.org/wiki/Von_Neumann_bicommutant_theorem), [Von Neumann algebra](https://en.wikipedia.org/wiki/Von_Neumann_algebra). It says: “His double commutant theorem shows that the analytic definition is equivalent to a purely algebraic definition as an algebra of symmetries.”

**Sources:**

- [J. von Neumann, Zur Algebra der Funktionaloperationen und Theorie der normalen Operatoren, Mathematische Annalen 102 (1930), 370–427](https://doi.org/10.1007/BF01782352)

### Ordered K₀ groups classify AF algebras completely

**Remember:** For AF algebras, ordered K₀ is the whole story.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L35 (Classifications of \\(C<sup>\*\\</sup>)-algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** An AF algebra is a C\*-algebra that is an inductive limit of a sequence of finite-dimensional C\*-algebras. Its K₀ group is built from classes of projections in matrices over the algebra. The positive cone is the set of classes of actual projections.

**Problem.** Elliott's theorem says that two unital AF algebras are isomorphic exactly when their ordered K₀ groups, with the class of the unit, are isomorphic. The page states the general case with the scale, the set of classes of projections in the algebra. The Effros–Handelman–Shen theorem says which ordered groups occur.

**How the definition helps.** Keeping the order on K₀ turns the multiplicity matrices of the limit into maps of ordered groups, so the invariant keeps the construction. For example, ℂ ⊕ ℂ and each Effros–Shen algebra, built from an irrational θ, have K₀ ≅ ℤ² as a group (our own example). The positive cone is ℕ² for the first, and comes from ℤ + θℤ inside ℝ for the second (our own example). Only the order tells them apart. The page says the proof has an existence part and a uniqueness part. Existence lifts maps of invariants to homomorphisms of algebras, and uniqueness shows that two lifts are close to unitarily equivalent. For unital AF algebras, the page says both parts follow from cancellation of projections.

**Wikipedia:** [Approximately finite-dimensional C\*-algebra](https://en.wikipedia.org/wiki/Approximately_finite-dimensional_C%2A-algebra). It says: “Later, George A. Elliott gave a complete classification of AF algebras using the K₀ functor whose range consists of ordered abelian groups with sufficiently nice order structure.”

**Sources:**

- [G. A. Elliott, On the classification of inductive limits of sequences of semisimple finite-dimensional algebras, Journal of Algebra 38 (1976), 29–44](https://doi.org/10.1016/0021-8693(76)90242-8)

### Trivial dynamics turns thermal equilibrium into a trace

**Remember:** With no time evolution, equilibrium means a trace.

*Rules out counterexamples.* MSC 46L60 (Applications of selfadjoint operator algebras to physics). arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** Let αₜ describe time evolution by automorphisms of a unital operator algebra, and let β &gt; 0. The Kubo–Martin–Schwinger condition requires a bounded continuous function F on 0 ≤ Im z ≤ β for each pair A, B. It must be holomorphic inside, with F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A) for real t.

**Problem.** For trivial time evolution, the Kubo–Martin–Schwinger states at positive inverse temperature are exactly the tracial states.

**How the definition helps.** For constant dynamics the strip condition forces the two orders of multiplication to have equal expectation. Our own proof subtracts the constant lower boundary value and reflects the resulting function across that boundary. The identity theorem makes it zero throughout, so ω(AB) = ω(BA). Conversely, a trace supplies a constant strip function for each pair. Every state is stationary under trivial dynamics, including nontracial vector states on two-by-two matrices.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “there is a bounded continuous function F in the strip”

**Sources:**

- [Rudolf Haag, Nicolaas M. Hugenholtz and Marinus Winnink, On the equilibrium states in quantum statistical mechanics](https://doi.org/10.1007/BF01646342)

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

### Writing closed convex functions as suprema of affine functions gives weak semicontinuity

**Remember:** The weak topology already sees each affine function.

*True by definition. Confidence: medium.* MSC 46N10 (Applications of functional analysis in optimization, convex analysis, mathematical programming, economics), 49J45. arXiv math.FA, math.OC. Level 3: graduate.

**Definition.** Describe a lower semicontinuous convex function as a pointwise supremum of continuous affine functions. A continuous affine function is a continuous linear functional plus a constant. The usual definition asks for a convex function whose sublevel sets {f ≤ c} are closed in the norm topology.

**Problem.** Take a convex real function on a real normed space. It is lower semicontinuous in the norm topology exactly when it is weakly lower semicontinuous.

**How the definition helps.** Each continuous affine function is weakly continuous, so a supremum of them is weakly lower semicontinuous, in our own proof. The other direction is free, because weakly closed sets are norm closed. The work moves into the Hahn–Banach separation theorem, in our own account. It shows that a norm lower semicontinuous convex function is the supremum of the continuous affine functions below it.

**Paper or page:** [Convex Real Function on Normed Vector Space is Lower Semicontinuous iff Weakly Lower Semicontinuous](https://proofwiki.org/wiki/Convex_Real_Function_on_Normed_Vector_Space_is_Lower_Semicontinuous_iff_Weakly_Lower_Semicontinuous). It says: “Let f : X → ℝ be a convex function.”

**Sources:** none listed. No primary source with a working link was found.

### Webbed spaces extend the closed graph theorem beyond Fréchet spaces

**Remember:** A countable web lets Banach's Baire argument run in spaces without a metric.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46A30 (Open mapping and closed graph theorems; completeness (including \\(B\\)-, \\(B<sub>r</sub>\\)-completeness)). arXiv math.FA. Level 4: research.

**Definition.** A web on a locally convex space is a countable tree of convex balanced sets. The children of each set together absorb it, each child lies in half of its parent, and series along a branch converge. A space with a web is webbed. De Wilde developed the theory in 1978.

**Problem.** The closed graph theorem says that a linear map with closed graph between Fréchet spaces is continuous. Spaces of distributions are not Fréchet spaces. One wants the theorem for maps into such spaces.

**How the definition helps.** A web packages exactly the countable structure that the Baire category proof uses, so the old proof works again (our own reading). The page's closed graph theorem says that a linear map with closed graph from an ultrabornological space into a webbed space is continuous. Ultrabornological spaces include Fréchet spaces and their inductive limits. The countable tree replaces the sequence of balls of a metric space (our own reading). The convergence condition replaces completeness (our own reading). What stays hard is to show that the spaces in use have webs. The page lists Fréchet spaces and strong duals of metrizable spaces, which cover spaces of distributions.

**Wikipedia:** [Webbed space](https://en.wikipedia.org/wiki/Webbed_space). It says: “a webbed space is a topological vector space designed with the goal of allowing the results of the open mapping theorem and the closed graph theorem to hold for a wider class of linear maps whose codomains are webbed spaces.”

**Sources:** none listed. No primary source with a working link was found.

### The UMD property is exactly what vector-valued Riesz projections need

**Remember:** Flipping martingale steps safely is the same as cutting off negative frequencies safely.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 42B30, 60G46. arXiv math.FA, math.CA. Level 4: research.

**Definition.** A martingale is a sequence of random variables in which each step has conditional mean zero, given the past. A Banach space X has the UMD property (unconditional martingale differences) when the following holds for some 1 &lt; p &lt; ∞. Changing the signs of the steps of any X-valued martingale in Lᵖ changes its Lᵖ norm by at most a fixed factor. Hilbert spaces and Lᵖ with 1 &lt; p &lt; ∞ have UMD, but L¹, ℓ¹ and c₀ do not.

**Problem.** For which Banach spaces X is the Riesz projection, which keeps only the nonnegative frequencies of a function, bounded on X-valued Lᵖ functions? The survey states the answer on any Dirichlet group: exactly the UMD spaces. It then uses this to bound partial sums of X-valued Dirichlet series.

**How the definition helps.** The UMD condition names, in one probabilistic inequality, the whole class of spaces where Fourier projections stay bounded. So the vector-valued theorem becomes an if-and-only-if instead of a list of good examples. For scalar functions the Riesz projection is bounded on Lᵖ for 1 &lt; p &lt; ∞. For functions with values in ℓ¹ or c₀ it is not (our own remark). The hard work is the two directions of the equivalence, due to Burkholder and Bourgain for the circle (our own remark).

**Paper or page:** [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1), [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1). It says: “Let G be a Dirichlet group, X a Banach space and 1&lt;p&lt;∞. Then X has UMD if and only if the Riesz projection … is bounded.”

**Sources:**

- [Andreas Defant, Ingo Schoolmann, Hardy spaces of general Dirichlet series - a survey, arXiv:1902.02073 (2019), Banach Center Publ. 119 (2019) 123–149](https://arxiv.org/abs/1902.02073v1)

### Type 2 and cotype 2 together characterize Hilbert spaces up to isomorphism

**Remember:** Random signs that add like Pythagoras in both directions mean Hilbert space.

*Makes the theorem clean to state or prove.* MSC 46B09 (Probabilistic methods in Banach space theory), 46C15. arXiv math.FA. Level 4: research.

**Definition.** A Banach space has type 2 if a constant C works for all finite lists of vectors x₁, …, xₙ. Averaged over all choices of signs, ‖±x₁ ± ⋯ ± xₙ‖² is at most C(‖x₁‖² + ⋯ + ‖xₙ‖²). It has cotype 2 if the reverse inequality holds with another constant. In a Hilbert space the average equals the sum exactly, by the parallelogram law.

**Problem.** Which Banach spaces are isomorphic to a Hilbert space, that is, have an equivalent norm that comes from an inner product? Kwapień's theorem says: exactly the spaces of type 2 and cotype 2.

**How the definition helps.** Type and cotype split the parallelogram law into two one-sided inequalities with constants, and inequalities with constants survive a change to an equivalent norm. So the definitions give a statement about Hilbert spaces that does not depend on the choice of norm. The exact parallelogram law cannot do this. In our own example, ℓ² with the equivalent norm max(‖x‖, 2\|x₁\|) fails the law. But it keeps type 2 and cotype 2. The same scale also sorts other spaces: Lᵖ with 1 ≤ p &lt; ∞ has type min(p, 2) and cotype max(p, 2) (our own remark). The hard direction, that the two inequalities give an inner product norm, needs Kwapień's factorization argument (our own remark).

**Paper or page:** [Characterization of Hilbertizable spaces via convex functions](https://arxiv.org/abs/2506.04686v1). It says: “A space is isomorphic to a Hilbert space if and only if it is of type 2 and cotype 2.”

**Sources:**

- [N. Borchard and G. Wachsmuth, Characterization of Hilbertizable spaces via convex functions, arXiv:2506.04686 (2025)](https://arxiv.org/abs/2506.04686v1)
- [S. Kwapień, Isomorphic characterizations of inner product spaces by orthogonal series with vector valued coefficients, Studia Math. 44 (1972) 583–595](https://doi.org/10.4064/sm-44-6-583-595)

### Grothendieck's property forces separable Banach spaces to be reflexive

**Remember:** Separable plus Grothendieck means reflexive.

*True by definition. Confidence: medium.* MSC 46B10 (Duality and reflexivity in normed linear and Banach spaces). arXiv math.FA. Level 4: research.

**Definition.** A Banach space X is a Grothendieck space if every sequence in the dual X\* that converges weak-\* also converges weakly. Weak-\* convergence of functionals means convergence at each point of X, and weak convergence means convergence against each element of the double dual X\*\*. The abstract describes them as spaces for which weak- and weak\*-sequential convergences in the dual space coincide. Grothendieck showed that ℓ∞ has this property.

**Problem.** Which separable Banach spaces are Grothendieck spaces? Only the reflexive ones, and the quoted result says more. A non-reflexive Grothendieck space has density, the least size of a dense set, at least the uncountable cardinal 𝔭 of set theory.

**How the definition helps.** The definition supplies exactly the step that a reflexivity proof needs, because it turns weak-\* convergence into weak convergence. In a separable space the dual unit ball is weak-\* sequentially compact. The Grothendieck property turns this directly into weak sequential compactness, and the Eberlein–Šmulian theorem then makes X\* and so X reflexive (our own sketch). So the separable case follows nearly from the definition, and the work moves into finding non-reflexive examples. These must be large spaces, such as ℓ∞ and C(K) for some compact spaces K. The space c₀ is not a Grothendieck space (our own remark).

**Paper or page:** [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3), [Grothendieck spaces: the landscape and perspectives](https://arxiv.org/abs/2102.03838v3). It says: “A non-reflexive Grothendieck space has density at least 𝔭⩾ω₁.”

**Sources:**

- [Manuel González, Tomasz Kania, Grothendieck spaces: the landscape and perspectives, arXiv:2102.03838 (2021)](https://arxiv.org/abs/2102.03838v3)
- [A. Grothendieck, Sur les applications linéaires faiblement compactes d'espaces du type C(K), Canad. J. Math. 5 (1953) 129–173](https://doi.org/10.4153/cjm-1953-017-4)

### Defining subspace angles spectrally makes their squared cosines Ritz values

**Remember:** Squared cosines of the angles are the spectrum of a compressed projection.

*True by definition.* MSC 46C05 (Hilbert and pre-Hilbert spaces: geometry and topology (including spaces with semidefinite inner product)), 47A15, 47A75. arXiv math.NA, math.FA. Level 4: research.

**Definition.** Let M and N be nonzero closed subspaces of a Hilbert space, with orthogonal projections P and Q. Restrict PQ to M to get a self-adjoint operator on M. The angles from M to N are the inverse cosines of the square roots of the points in its spectrum.

**Problem.** Use M as the trial subspace and Q as the operator in the Rayleigh–Ritz method. The Ritz values are then exactly the squared cosines of the angles from M to N. The paper then bounds how Ritz values move when the trial subspace changes.

**How the definition helps.** The angles come from the spectrum of PQ restricted to M, and the Ritz values are the spectrum of that same operator (our own). So the equality holds by definition (our own). The work moves to perturbation bounds for angles, which then bound Ritz values by a constant times the gap between trial subspaces. The paper also shows that these angles recover the classical gaps and angles of Dixmier and Friedrichs.

**Paper or page:** [Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods](https://arxiv.org/abs/0705.1023v2). It says: “We show that the squared cosines of the angles from one subspace to another can be interpreted as Ritz values in the Rayleigh-Ritz method”

**Sources:**

- [Andrew Knyazev, Abram Jujunashvili, Merico Argentati, Angles Between Infinite Dimensional Subspaces with Applications to the Rayleigh-Ritz and Alternating Projectors Methods, arXiv:0705.1023v2 (2010). Journal of Functional Analysis 259 (2010), pp. 1323-1345](https://arxiv.org/abs/0705.1023v2)

### A reproducing kernel solves the optimization that bounds vanishing of L-functions

**Remember:** The kernel is the test function that attains the point-evaluation bound.

*True by definition. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 11M41. arXiv math.NT, math.FA. Level 4: research.

**Definition.** A reproducing kernel Hilbert space is a Hilbert space of functions in which each point evaluation f ↦ f(w) is continuous. Then f(w) = ⟨f, K(w, ·)⟩ for a unique kernel K. Here the space holds entire functions that grow at most like exp(πΔ\|z\|). Its norm is weighted by the one-level density of the family’s symmetry type, which describes how low-lying zeros are spread.

**Problem.** Assume the generalized Riemann hypothesis for a family of L-functions with symmetry type G. Assume also a one-level density estimate for test functions whose Fourier transforms have support in (−Δ, Δ). Then Theorem 2 bounds the average order of vanishing at the central point by 1/K(0, 0), with a similar bound at low heights.

**How the definition helps.** Writing evaluation as an inner product turns the Fourier optimization problem into the Cauchy–Schwarz inequality, so the kernel gives the answer. In our own calculation, \|f(0)\|² ≤ ‖f‖²K(0, 0), so a test function with f(0) = 1 has ‖f‖² ≥ 1/K(0, 0). The function K(0, ·)/K(0, 0) attains equality. For unitary symmetry the kernel is the sine kernel, and K(0, 0) = Δ. In our own account, the paper must still link this minimum to the zero count and compute the kernel for each symmetry type.

**Paper or page:** [Hilbert spaces and low-lying zeros of L-functions](https://arxiv.org/abs/2109.10844v3). It says: “To solve the Fourier optimization problems that arise, we provide a unified framework based on the theory of reproducing kernel Hilbert spaces of entire functions”

**Sources:**

- [Emanuel Carneiro, Andrés Chirre, Micah B. Milinovich, Hilbert spaces and low-lying zeros of L-functions, arXiv:2109.10844v3 (2022)](https://arxiv.org/abs/2109.10844v3)

### The Pick property makes the two kinds of interpolating sequences agree

**Remember:** With the Pick property, multiplier questions become kernel questions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46E22 (Hilbert spaces with reproducing kernels (= (proper) functional Hilbert spaces, including de Branges-Rovnyak and other structured spaces)), 32E30, 47B32. arXiv math.CV, math.FA. Level 4: research.

**Definition.** A multiplier of a space of functions is a function φ such that φf is in the space for every f in it. A reproducing kernel Hilbert space has the complete Pick property when a positivity test on its kernel alone solves the Nevanlinna–Pick problem for its multipliers. This also holds for matrix-valued multipliers. The Hardy space of the disc is the classical example.

**Problem.** A sequence is interpolating for a space when every sequence of values of the right size is matched by a function in the space. The same idea works for the multiplier algebra. In spaces with the complete Pick property, such as some Besov–Sobolev spaces on the unit ball, the two notions give the same sequences.

**How the definition helps.** In our own words, the Pick property turns a question about bounded multipliers into one about positive matrices built from the kernel. So interpolation in the multiplier algebra reduces to interpolation in the space; this is also our own summary. The coincidence itself is a separate known theorem about complete Pick spaces, which the paper uses; this remark is our own. The abstract says that the same coincidence fails for the Hardy space of the polydisc and its algebra of bounded functions. There the paper gets only separate sufficient and necessary conditions for random sequences. In the ball, the coincidence gives one zero-one law for both kinds.

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

**How the definition helps.** The new trace gives a precise meaning to u = 0 on Γ at a regularity where the usual trace does not exist. The paper says this trace replaces the non-tangential limits used in the literature since the 1980s. The paper also shows that the kernel of this trace on E is H¹ᐟ²₀₀(Ω). Our own reading is that a harmonic function in H¹ᐟ²(Ω) must first be shown to lie in E. The uniqueness proof still needs the paper's estimates. Some claims of this paper go against the literature, so the result should be read with care.

**Paper or page:** [Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains](https://arxiv.org/abs/2509.08543v2). It says: “If u ∈ H¹⁄²(Ω) is harmonic and u = 0 on Γ, then u = 0 in Ω.”

**Sources:**

- [Chérif Amrouche, Mohand Moussaoui, Maximal regularity of Dirichlet problem for the Laplacian in Lipschitz domains, arXiv:2509.08543v2 (2025)](https://arxiv.org/abs/2509.08543v2)

### Upper gradients give Sobolev spaces on metric spaces that match classical ones

**Remember:** Bound the change along every curve, and you never need a derivative.

*Makes the theorem clean to state or prove.* MSC 46E36 (Sobolev (and similar kinds of) spaces of functions on metric spaces; analysis on metric spaces), 30L99. arXiv math.FA, math.MG. Level 4: research.

**Definition.** A Borel function g ≥ 0 is an upper gradient of u if this holds for every rectifiable curve from x to y. The value \|u(x) − u(y)\| is at most the integral of g along the curve. The Newtonian space N¹,ᵖ consists of the functions u in Lᵖ that have an upper gradient in Lᵖ. The definition uses only distances, lengths of curves and a measure, so it works on any metric measure space.

**Problem.** Sobolev spaces are usually defined with weak derivatives, which need a linear or smooth structure. On a general metric measure space there are no derivatives, so one needs another definition. It must agree with the classical space where both exist, as the quoted theorem shows for Carnot groups.

**How the definition helps.** An upper gradient controls a function along curves, and curves exist in any metric space, so the Sobolev space can be defined at all. On a Carnot group, a space with a sub-Riemannian distance, the quoted theorem says that the new space equals the usual horizontal Sobolev space. So theorems proved for Newtonian spaces apply to the classical spaces too. The work moves into that agreement theorem, which goes back to Shanmugalingam for ℝⁿ (our own remark). Good behaviour, such as density of Lipschitz functions, still needs extra assumptions like a Poincaré inequality (our own remark).

**Paper or page:** [On some intrinsic differentiability properties for Absolutely continuous functions between Carnot groups and the Area formula](https://arxiv.org/abs/2405.05024v2). It says: “Let 1&lt;p&lt;∞ and Ω⊂𝔾 be an open set of a Carnot group 𝔾≡ℝⁿ. Then N¹,ᵖ𝔾(Ω)= W¹,ᵖ𝔾(Ω)”

**Sources:**

- [Andrea Pinamonti, Francesco Serra Cassano, Kilian Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, arXiv:2405.05024 (2024)](https://arxiv.org/abs/2405.05024v2)
- [A. Pinamonti, F. Serra Cassano, K. Zambanini, On some intrinsic differentiability properties for absolutely continuous functions between Carnot groups and the area formula, J. Funct. Anal. 289 (2025) 110948](https://doi.org/10.1016/j.jfa.2025.110948)
- [N. Shanmugalingam, Newtonian spaces: an extension of Sobolev spaces to metric measure spaces, Rev. Mat. Iberoam. 16 (2000) 243–279](https://doi.org/10.4171/rmi/275)

### Keeping the scaling degree leaves only finitely many extensions of a distribution

**Remember:** Scaling degree measures how fast a distribution blows up at a point.

*Rules out counterexamples. Confidence: medium.* MSC 46F10 (Operations with distributions and generalized functions), 81T15. arXiv math.AP, math-ph. Level 4: research.

**Definition.** The scaling degree of a distribution u at a point measures how singular u is there. It is the infimum of the numbers ω such that λ to the power ω times u(λx) tends to 0 as λ → 0. The degree of divergence is the scaling degree minus the dimension of the space.

**Problem.** Take a distribution on ℝⁿ ∖ {0} with finite scaling degree at 0. It should extend to a distribution on all of ℝⁿ. We want to know how many extensions there are.

**How the definition helps.** If the extension must keep the scaling degree, only a finite amount of choice remains. Without this condition, extensions are far from unique: you can add any combination of derivatives of the delta distribution. With the condition, the extension is unique when the degree of divergence is negative. In general, the extensions form a finite-dimensional affine space, indexed by finitely many derivatives of the delta distribution. In perturbative quantum field theory, this finite freedom is the renormalization freedom. The proof that an extension exists is the real work.

**nLab:** [extension of distributions](https://ncatlab.org/nlab/show/extension+of+distributions), [scaling degree of a distribution](https://ncatlab.org/nlab/show/scaling+degree+of+a+distribution). It says: “However, if one requires that the scaling degree of the extended distribution at the given point is compatible with that of the original distribution, then there is only a finite set of possible extensions”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds, Communications in Mathematical Physics 208 (2000) 623–661; arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### Colombeau algebras multiply distributions by keeping only smooth products

**Remember:** Ask the product to agree only on smooth functions, and distributions can multiply.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F30 (Generalized functions for nonlinear analysis (Rosinger, Colombeau, nonstandard, etc.)). arXiv math.FA, math.AP. Level 4: research.

**Definition.** A differential algebra is an algebra with a derivative that obeys the Leibniz rule. A Colombeau algebra is an associative differential algebra that contains the distributions. Its product agrees with the pointwise product of smooth functions. It need not agree with the pointwise product of continuous functions.

**Problem.** Nonlinear equations with singular data need products of distributions. Schwartz's impossibility result of 1954 seems to rule these out.

**How the definition helps.** Colombeau's definition drops just one of Schwartz's requirements, and then a product exists. Schwartz showed that four natural requirements cannot hold together. They are: an associative algebra that contains the distributions, with 1 as unit; a derivative that obeys the Leibniz rule and extends the derivative of distributions; and a product that extends the pointwise product of continuous functions. Colombeau's definition weakens only the last requirement, from continuous to smooth functions, and then such an algebra exists. The article notes that people often misread Schwartz's result as saying that no multiplication is possible at all. The cost is this: in the algebra, the product of continuous functions that are not smooth need not agree with their pointwise product.

**Wikipedia:** [Colombeau algebra](https://en.wikipedia.org/wiki/Colombeau_algebra), [Distribution (mathematical analysis)](https://en.wikipedia.org/wiki/Distribution_%28mathematical_analysis%29). It says: “However, if one only wants to preserve the product of smooth functions instead such a construction becomes possible, as demonstrated first by Colombeau.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized smooth functions extend distributions and still compose and take maxima

**Remember:** Make distributions honest functions on a bigger number line.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46F30 (Generalized functions for nonlinear analysis (Rosinger, Colombeau, nonstandard, etc.)). arXiv math.FA. Level 4: research.

**Definition.** The scalars form a ring of nets of real numbers indexed by a small parameter ε, taken modulo nets that tend to 0 fast enough. This ring contains infinitesimals and infinitely large numbers. A generalized smooth function is a map on points of this ring. For each ε, an ordinary smooth function gives it, with suitable bounds on all derivatives.

**Problem.** Schwartz distributions are not functions, so they have no point values and cannot be composed or multiplied in general. The paper's generalized smooth functions contain the distributions. They form a category, so they can be composed, and they keep calculus theorems such as the extreme value theorem on suitable compact sets.

**How the definition helps.** Because the new objects are true set-theoretical maps, composition and point values make sense by definition. Each map comes from a net of smooth functions, so many classical theorems pass over one ε at a time. For example, the paper shows that such a function attains a minimum and a maximum on a suitable compact set. The price is the new ring of scalars, which is not a field and is not totally ordered (our own remark). The embedding of distributions depends on the choice of an infinite number, as the paper's results on the embedding show.

**Paper or page:** [A Grothendieck topos of generalized functions I: basic theory](https://arxiv.org/abs/2101.04492v2), [A Grothendieck topos of generalized functions I: basic theory](https://arxiv.org/abs/2101.04492v2), [A Grothendieck topos of generalized functions I: basic theory](https://arxiv.org/abs/2101.04492v2). It says: “We introduce a category of generalized functions as smooth set-theoretical maps on (multidimensional) points of a ring of scalars containing infinitesimals and infinities. This category extends Schwartz distributions.”

**Sources:**

- [Paolo Giordano, Michael Kunzinger, Hans Vernaeve, A Grothendieck topos of generalized functions I: basic theory, arXiv:2101.04492 (2021), Dissertationes Math. 592 (2024)](https://arxiv.org/abs/2101.04492v2)

### A bounded-transform condition restores bulk–edge correspondence for unbounded Hamiltonians

**Remember:** Squash the energy into a bounded operator and require it to be an observable.

*Rules out counterexamples. Confidence: medium.* MSC 46L05 (General theory of \\(C<sup>\*\\</sup>)-algebras), 46L80, 47A60. arXiv math-ph, math.OA. Level 4: research.

**Definition.** A Hamiltonian is a self-adjoint operator that gives the energy of a quantum system. A self-adjoint operator H is strongly affiliated to an algebra of observables if its bounded transform F(H) = H/√(1 + H²) lies in that algebra. A unit is added to the algebra first if it has none.

**Problem.** Take a Hamiltonian with an edge whose bulk part has a spectral gap around zero. If it is strongly affiliated to the edge algebra, the bulk and edge invariants correspond under the boundary map of K-theory. K-theory classes are invariants built from projections in the algebra.

**How the definition helps.** Strong affiliation puts a bounded function of the Hamiltonian inside the algebra, so the bulk invariant can be defined. With a gap at zero, the projection onto negative energies then lies in the algebra and gives a K-theory class (Lemma 3.5 of the paper). In our own words, this projection is a continuous function of F(H) on its spectrum. Theorem 3.7 of the paper then proves that the edge class is the image of the bulk class. Some boundary conditions for unbounded operators give known violations of the correspondence. Under weaker conditions the paper proves only a relative correspondence for pairs of Hamiltonians.

**Paper or page:** [The role of self-adjoint extensions in the bulk-edge correspondence](https://arxiv.org/abs/2510.01368v1). It says: “More generally, if Ĥ is not necessarily bounded from below then the K-theoretic bulk-edge correspondence holds under the strong affiliation condition F(Ĥ)= Ĥ(1+Ĥ²)<sup>-1/2</sup> ∈ M<sub>N</sub>(𝒜̂<sup>∼</sup>) where 𝒜̂<sup>∼</sup> is the conditional unitization.”

**Sources:**

- [Johannes Kellendonk, Tom Stoiber, The role of self-adjoint extensions in the bulk-edge correspondence, arXiv:2510.01368v1 (2025)](https://arxiv.org/abs/2510.01368v1)

### Choi matrices detect complete positivity only for bases shaped like matrix units

**Remember:** Choi's test survives any basis of the form \|ζᵢ⟩⟨ζⱼ\|, and no other.

*Rules out counterexamples. Confidence: medium.* MSC 46L07 (Operator spaces and completely bounded maps), 47B65, 15A30. arXiv math.OA. Level 4: research.

**Definition.** For a linear map φ on n × n matrices, the Choi matrix is the sum of eᵢⱼ ⊗ φ(eᵢⱼ), with eᵢⱼ the matrix units. One can build the same sum from another basis {bᵢⱼ} of the n × n matrices. Theorem 2 shows the correspondence survives exactly when bᵢⱼ = \|ζᵢ⟩⟨ζⱼ\| for some basis ζ₁,…,ζₙ of ℂⁿ.

**Problem.** Choi's theorem says a map is completely positive exactly when its Choi matrix is positive. Paulsen and Shultz asked which other bases keep this true, and gave a sufficient condition.

**How the definition helps.** Our own reason: a basis of the form \|ζᵢ⟩⟨ζⱼ\| is the matrix-unit basis after a change of basis S of ℂⁿ. So the new Choi matrix of φ is a congruence of the ordinary Choi matrix of φ composed with conjugation by S (our own). Congruence by an invertible matrix keeps positivity, and the composed map is completely positive exactly when φ is (our own). So Choi's theorem carries over. The paper shows this rank-one product shape is also necessary, so the Paulsen–Shultz condition cannot be weakened. The original Choi theorem is still the hard part.

**Paper or page:** [Choi matrices revisited](https://arxiv.org/abs/2206.09324), [Choi matrices revisited](https://arxiv.org/abs/2206.09324). It says: “considered the question if one can replace matrix units by another basis of matrix algebras in the definition of Choi matrix to retain the correspondence between complete positivity of maps and positivity of Choi matrices”

**Sources:**

- [Seung-Hyeok Kye, Choi matrices revisited, J. Math. Phys. 63 (2022), 092202, arXiv:2206.09324](https://arxiv.org/abs/2206.09324)
- [Man-Duen Choi, Completely positive linear maps on complex matrices, Linear Algebra Appl. (1975)](https://doi.org/10.1016/0024-3795(75)90075-0)

### Soft inductive limits make separable nuclear operator systems limits of matrices

**Remember:** Let the connecting maps compose only approximately, and nuclear systems become matrix limits.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L07 (Operator spaces and completely bounded maps), 18A30. arXiv math.OA, math.FA. Level 4: research.

**Definition.** An operator system is a self-adjoint subspace of a C\*-algebra that contains the unit, with the order on its matrices. It is nuclear when its identity map is a limit of completely positive maps through matrix algebras (our own summary). An inductive system is a family of spaces with connecting maps jₙₘ, and usually these maps must compose exactly. A soft inductive system asks this only asymptotically, and a strict one asks it exactly (our own reading of the word).

**Problem.** Lazar and Lindenstrauss showed that a separable function system is nuclear exactly when it is an inductive limit of finite-dimensional commutative algebras. Nuclear operator systems have completely positive approximations through matrix algebras. But these maps do not compose exactly, so they do not form an inductive system in the usual sense.

**How the definition helps.** The completely positive approximations of a nuclear system already form a soft inductive system, so nuclear systems are soft limits of matrix algebras. Theorem 24 states this, and for separable systems it already gives a strict sequence indexed by ℕ. Theorem 27 states that a separable operator system is nuclear exactly when it is a strict inductive limit of matrix algebras. So Theorem 27 adds the converse to Theorem 24, that such limits are nuclear (our own reading). The abstract credits the separable result to an argument of Ding and Peterson, which in our own reading is where the main work lies.

**Paper or page:** [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019), [Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem](https://arxiv.org/abs/2510.02019). It says: “we utilize an argument of Ding and Peterson to show that a separable operator system is nuclear if and only if it is an inductive limit of matrix algebras, generalizing a classic Theorem of Lazar and Lindenstrauss”

**Sources:**

- [Kristin Courtney, Niklas Galke, Lauritz van Luijk, Alexander Stottmeister, Soft inductive limits of operator systems and a noncommutative Lazar-Lindenstrauss theorem, arXiv:2510.02019 (2025)](https://arxiv.org/abs/2510.02019)

### Selfless C\*-algebras with a trace are simple with strict comparison

**Remember:** If A cannot tell itself from its free product, A is regular.

*True by definition.* MSC 46L09 (Free products of \\(C<sup>\*\\</sup>)-algebras), 46L35, 46L54. arXiv math.OA. Level 4: research.

**Definition.** Let A ≠ ℂ be a unital C\*-algebra with a state ρ whose GNS representation is faithful, which is a C\*-probability space. Theorem 2.6 shows that (A,ρ) is selfless exactly when A embeds existentially, as first factor, in the reduced free product of (A,ρ) with C\*ᵣ(F∞). Here C\*ᵣ(F∞) is the reduced C\*-algebra of the free group on countably many generators. Existential means, roughly, that systems of polynomial equations with approximate solutions in the free product already have approximate solutions in A.

**Problem.** Strict comparison says that traces decide when one positive element is smaller than another in the Cuntz sense. It is a key regularity property in the classification of simple C\*-algebras. It was open for the reduced C\*-algebra of the free group Fₙ.

**How the definition helps.** Our own reading: the definition lets one solve a problem in the free product, where free independence helps. The approximate answer can then be copied back into A (our own reading). So, by Theorem 3.1, simplicity and uniqueness of the trace follow from one structural property. In the trace case, Theorem 3.1 also gives stable rank one and strict comparison. If ρ is faithful and not a trace, it gives pure infiniteness instead. Amrutam, Gao, Kunnawalkam Elayavalli and Patchell later proved that C\*ᵣ(Fₙ) is selfless for n ≥ 2, so it has strict comparison. That proof of selflessness is the hard part, and the definition moves the work there.

**Paper or page:** [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Selfless C\*-algebras](https://arxiv.org/abs/2309.14188), [Strict comparison in reduced group C\*-algebras](https://arxiv.org/abs/2412.06031). It says: “In particular, A is a simple C\*-algebra that is either traceless, if ρ is not a trace, or such that ρ is the unique tracial state on A.”

**Sources:**

- [Leonel Robert, Selfless C\*-algebras, arXiv:2309.14188 (2023)](https://arxiv.org/abs/2309.14188)
- [Leonel Robert, Selfless C\*-algebras, Adv. Math. (2025)](https://doi.org/10.1016/j.aim.2025.110409)
- [Tattwamasi Amrutam, David Gao, Srivatsav Kunnawalkam Elayavalli, Gregory Patchell, Strict comparison in reduced group C\*-algebras, arXiv:2412.06031 (2024)](https://arxiv.org/abs/2412.06031)

### Biexactness for von Neumann algebras extends the group notion and gives solidity

**Remember:** Make biexactness a property of the algebra, and solidity follows everywhere at once.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L10 (General theory of von Neumann algebras), 46L36, 46L55. arXiv math.OA. Level 4: research.

**Definition.** A von Neumann algebra is an algebra of operators on a Hilbert space that is closed under adjoints and weak limits. In our own summary, Ozawa calls a group Γ biexact when Γ is exact and Γ × Γ acts amenably on a boundary. Ding and Peterson define biexactness for any von Neumann algebra through a weak form of nuclear embeddings. M is solid when every diffuse subalgebra A, one without minimal projections, has an amenable (injective) relative commutant A′ ∩ M.

**Problem.** Ozawa proved that the von Neumann algebra LΓ of a biexact group Γ is solid. Many other algebras were shown solid by separate arguments. One wants one property of the algebra itself that gives solidity.

**How the definition helps.** Because the property belongs to the algebra and not to a group, one proof of solidity covers every biexact algebra. Theorem 6.9 shows that every σ-finite biexact von Neumann algebra is 𝒰-solid, a solidity property stated through ultrapowers. Corollary 7.18 shows that for an exact group Γ, biexactness of LΓ coincides with biexactness of Γ, so the new notion loses nothing. The abstract says many known solid algebras are in fact biexact. It also gives solid crossed products that are not biexact, so the converse fails. The work is in the theory of weak nuclear embeddings that the definition uses.

**Paper or page:** [Biexact von Neumann algebras](https://arxiv.org/abs/2309.10161), [Biexact von Neumann algebras](https://arxiv.org/abs/2309.10161), [Biexact von Neumann algebras](https://arxiv.org/abs/2309.10161). It says: “We introduce the notion of biexactness for general von Neumann algebras, naturally extending the notion from group theory. We show that biexactness implies solidity for von Neumann algebras”

**Sources:**

- [Changying Ding, Jesse Peterson, Biexact von Neumann algebras, arXiv:2309.10161 (2023)](https://arxiv.org/abs/2309.10161)

### Bounded natural transformations give Hilbert spaces infinite direct sums

**Remember:** Keep only the natural transformations whose norms stay bounded across all objects.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L10 (General theory of von Neumann algebras), 46L05, 18D20. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A C\*-category is a category whose hom-sets are Banach spaces with an adjoint operation, like bounded operators between Hilbert spaces. A W\*-category is a C\*-category whose hom-spaces each have a predual (a Banach space whose dual is the hom-space). Between W\*-functors one uses only bounded natural transformations. These are the natural transformations whose components tₓ have norms below one bound for all objects X.

**Problem.** Find a 2-categorical setting in which infinite direct sums are a universal property. It should work for the category of Hilbert spaces, and also for Hilbert W\*-modules and W\*-representations of von Neumann algebras.

**How the definition helps.** Restricting to bounded natural transformations makes infinite direct sums exist as a universal property. In the ordinary 2-category of categories, functors and all natural transformations, the nLab says that the category of Hilbert spaces has only finite limits and finite colimits. Restrict the 2-cells to bounded natural transformations. Then W\*-categories, W\*-functors and these 2-cells form a bicategory in which infinite direct sums exist, and these generalize biproducts to infinite families. In our own reading, the definitions take over the analytic work (the predual and the boundedness).

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

**Definition.** A C\*-algebra is an algebra of operators that is closed under adjoints and norm limits. A state is a positive linear functional E with E(1) = 1. The paper calls E an eigenstate of x with eigenvalue λ when E(yx) = λE(y) for every y. Theorem 2 shows this means E((x − λ)\*(x − λ)) = 0, and Theorem 3 shows it matches eigenvectors for vector states.

**Problem.** On an infinite-dimensional Hilbert space, a point of the spectrum need not be an eigenvalue. Multiplication by x on L²\[0,1\] has spectrum \[0,1\] but no eigenvectors. One wants a notion of eigenvalue that covers the whole spectrum.

**How the definition helps.** Our own reading: the definition asks a state to vanish on one left ideal, so the Hahn–Banach theorem can supply it. The proof looks for a state that vanishes on the left ideal A(x − λ). Since x − λ is self-adjoint and not invertible, every element of this ideal has distance at least 1 from the unit. So a state that kills the ideal exists. In the multiplication example, evaluation at the point λ is such an eigenstate (our own example). The theorem needs x to be self-adjoint, and an eigenstate gives no vector in the original Hilbert space (our own note).

**Paper or page:** [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049), [Eigenstates of C\*-Algebras](https://arxiv.org/abs/2102.07049). It says: “We introduce the notion of eigenstate of an operator in an abstract C\*-algebra, and prove several properties. Most significantly, if the operator is self-adjoint, then every element of its spectrum has a corresponding eigenstate.”

**Sources:**

- [Luther Rinehart, Eigenstates of C\*-Algebras, arXiv:2102.07049 (2021)](https://arxiv.org/abs/2102.07049)

### Viewing GNS as a weak natural transformation makes it a left adjoint

**Remember:** Keep the comparison maps when changing the algebra of observables.

*Makes the theorem clean to state or prove.* MSC 46L30 (States of selfadjoint operator algebras), 18N10. arXiv math.OA, math.CT. Level 4: research.

**Definition.** A state on a C\*-algebra is a positive linear functional of norm one, which gives an expectation for each observable. The Gelfand–Naimark–Segal (GNS) construction turns a state into a representation on a Hilbert space with a distinguished unit vector. A weak natural transformation is a 1-morphism in a 2-category whose naturality holds up to given comparison maps.

**Problem.** Restricting a representation to a unit vector gives a state on the algebra. The paper shows that GNS is left adjoint to this restriction. The adjunction holds when GNS is a weak natural transformation in a suitable 2-category, not a functor between categories.

**How the definition helps.** Weak naturality lets GNS vary with the algebra through comparison maps instead of equalities, so the adjunction can be stated. In our own words, changing the algebra can change the Hilbert space that a vector generates, so equality is too strong. The abstract says that weak naturality encodes functoriality, and that the universal property encodes the defining features of GNS. One still has to prove the universal property and check that the comparison maps fit together.

**Paper or page:** [From observables and states to Hilbert space and back: a 2-categorical adjunction](https://arxiv.org/abs/1609.08975v2). It says: “To properly formulate this adjoint, it must be viewed as a weak natural transformation, a 1-morphism in a suitable 2-category, rather than as a functor between categories.”

**Sources:**

- [Arthur J. Parzygnat, From observables and states to Hilbert space and back: a 2-categorical adjunction, arXiv:1609.08975v2 (2018)](https://arxiv.org/abs/1609.08975v2)
- [Arthur J. Parzygnat, From Observables and States to Hilbert Space and Back: A 2-Categorical Adjunction, Applied Categorical Structures 26(6), 1123–1157 (2018)](https://doi.org/10.1007/s10485-018-9522-6)

### Connes–Dixmier traces obey a Lidskii eigenvalue formula

**Remember:** Extra averaging in the limit lets eigenvalues compute the singular trace.

*Rules out counterexamples. Confidence: medium.* MSC 46L51 (Noncommutative measure and integration), 47B10, 47L20. arXiv math.OA. Level 4: research.

**Definition.** Here ℳ₁,∞ is the ideal of compact operators whose first n singular values add up to at most a constant times log n. An extended limit ω is a linear functional on bounded sequences that extends the ordinary limit. A Dixmier trace sends a positive T to ω applied to (1/log n) times the sum of its first n singular values. In our own summary, a Connes–Dixmier trace uses only those ω that factor through a logarithmic Cesàro mean, a kind of averaging.

**Problem.** Lidskii's theorem says the trace of a trace-class operator is the sum of its eigenvalues. For singular traces, one wants a formula in terms of eigenvalues that holds even for operators that are not normal.

**How the definition helps.** The extra Cesàro averaging smooths the sequence of eigenvalue sums, so the eigenvalue formula holds for every Connes–Dixmier trace (our own reading). Theorem 2 gives the formula on all of ℳ₁,∞, with the sum over the eigenvalues λ with \|λ\| &gt; 1/n. Theorem 5 works with functions in the matching function space M₁,∞. It gives a positive function and a Dixmier trace for which a continuous form of the formula fails. So, at least in this function setting, the restriction to Connes–Dixmier traces excludes such cases. The hard part is the control of operators that are not normal (T\*T ≠ TT\*), whose eigenvalues and singular values differ (our own).

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

**Definition.** Represent faithful normal states φ and ψ on a von Neumann algebra M by unit vectors ξ and η in its standard positive cone. This cone selects a unique vector for each state that preserves bounded increasing suprema, and faithfulness means detecting every nonzero positive operator. Close the antilinear map xξ ↦ x\*η for x ∈ M, call its closure S, and set Δ = S\*S. The Araki relative entropy of φ with respect to ψ integrates −log λ against the spectral probability measure of Δ in ξ.

**Problem.** The Araki relative entropy of any faithful normal state relative to another is nonnegative, even when it is infinite.

**How the definition helps.** The definition gives a probability measure with mean one, so convexity of −log proves the bound. Indeed, the mean equals ‖Sξ‖² = ‖η‖² = 1. Our own proof integrates −log λ ≥ 1 − λ, allowing the integral to be infinite. The construction of Δ replaces the density matrix formula and extends it to algebras without a trace.

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “is the relative modular operator of any cyclic and separating vector representatives”

**Sources:**

- [Huzihiro Araki, Relative Entropy of States of von Neumann Algebras](https://doi.org/10.2977/prims/1195191148)

### Trace tests give entropy monotonicity

**Remember:** A smaller algebra gives fewer entropy tests.

*True by definition.* MSC 46L53 (Noncommutative probability and statistics). arXiv math.OA. Level 4: research.

**Definition.** Let M be a weakly closed unital adjoint algebra of bounded operators with a faithful normal tracial state τ. Here τ detects nonzero positive elements, preserves bounded increasing suprema, and satisfies τ(ab) = τ(ba). For a normal state ω, define its entropy relative to τ as the supremum of ω(h) − log τ(exp h) over self-adjoint h ∈ M.

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

**Definition.** Graph C\*-algebras and their relatives are C\*-algebras generated by projections and partial isometries that follow the edges of a graph or a similar system. For a directed graph, Condition (L) says that every cycle has an exit, an edge that leaves the cycle. Carlsen and Kang use the analogue of this condition for generalized Boolean dynamical systems.

**Problem.** A uniqueness theorem says when a homomorphism out of the algebra is injective. One wants the simplest test: the map is injective when it kills none of the generating projections pA.

**How the definition helps.** Our own reason: Condition (L) is chosen so that the simple test works, and Theorem 3.6 shows that it is also necessary. So the test has no exceptions in either direction. The bad case is a cycle with no exit: one vertex with one loop gives C(𝕋), the continuous functions on the circle (our own example). Restriction to a closed arc is then a homomorphism that is not injective but keeps the vertex projection nonzero (our own). Wikipedia states the classical Cuntz–Krieger uniqueness theorem for graphs with Condition (L) as its hypothesis. Proposition 3.5 of the paper shows that Condition (L) means the associated topological graph is topologically free. The uniqueness proof itself, in this general setting, is the remaining work (our own).

**Wikipedia:** [https://en.wikipedia.org/wiki/Graph<sub>C</sub>\*-algebra](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Graph_C%2A-algebra). It says: “Let E be a graph satisfying Condition (L), and let C\*(E) be the associated graph C\*-algebra.”

**Paper or page:** [A Cuntz--Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems](https://arxiv.org/abs/2305.09232). It says: “(1) (ℬ,ℒ,θ) satisfies Condition (L). (2) If C is C\*-algebra and ρ : C\*(ℬ,ℒ,θ,ℐα) → C is a \*-homomorphism, then ρ is injective if and only if ρ(pA) ≠ 0 for each A ∈ ℬ∖{∅}.”

**Sources:**

- [Toke Meier Carlsen, Eun Ji Kang, A Cuntz–Krieger Uniqueness theorem for C\*-algebras of relative generalized Boolean dynamical systems, arXiv:2305.09232 (2023)](https://arxiv.org/abs/2305.09232)
- [Alex Kumjian, David Pask, Iain Raeburn, Jean Renault, Graphs, groupoids, and Cuntz–Krieger algebras, J. Funct. Anal. (1997)](https://doi.org/10.1006/jfan.1996.3001)

### Outer modular flow forgets states

**Remember:** Quotient by inner conjugation to forget the state.

*True by definition.* MSC 46L55 (Noncommutative dynamical systems), 46L10. arXiv math.OA. Level 4: research.

**Definition.** Let M be a von Neumann algebra, a weakly closed unital algebra of bounded operators closed under adjoints. A faithful normal state detects nonzero positive operators and preserves bounded increasing suprema of positive operators. Its modular group σ is the canonical time evolution from Tomita–Takesaki theory. At each time, take the class of σₜ modulo conjugations by unitaries of M.

**Problem.** The resulting homomorphism from real time to the outer automorphism group is independent of the faithful normal state.

**How the definition helps.** The quotient identifies automorphisms that differ by a unitary conjugation inside M. Connes’s cocycle theorem shows that changing the state changes each modular automorphism by exactly such a conjugation. Comparing the original automorphisms requires that theorem. Equality of their classes then follows from the quotient definition.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “independent of the choice of faithful state.”

**Sources:**

- [Alain Connes, Une classification des facteurs de type III](https://doi.org/10.24033/asens.1247)

### The continuous core forgets states

**Remember:** Changing the state only changes the implementing unitaries.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 46L55 (Noncommutative dynamical systems), 46L10. arXiv math.OA. Level 4: research.

**Definition.** A faithful normal state detects nonzero positive operators and preserves bounded increasing suprema of positive operators. Its modular flow σ is the canonical time evolution on its von Neumann algebra M. The continuous core is the von Neumann crossed product in the regular representation, generated by M and time translation unitaries implementing σ. The dual action fixes M and multiplies the time translation unitaries by the corresponding characters of real time.

**Problem.** The continuous cores built from two faithful normal states are isomorphic by a map that fixes the embedded algebra and respects the dual actions.

**How the definition helps.** The crossed product includes implementing unitaries that can absorb the change in modular flow. Connes’s theorem gives unitaries uₜ in M relating the two flows by conjugation. Our own proof corrects each implementing unitary by uₜ, choosing the cocycle from the second flow to the first. The cocycle identity makes these corrected operators a unitary group. In the regular representations this change is implemented by pointwise unitary multiplication, giving a normal isomorphism. Correcting by elements of M leaves the character factors in the dual action unchanged.

**Wikipedia:** [Tomita–Takesaki theory](https://en.wikipedia.org/wiki/Tomita%E2%80%93Takesaki_theory). It says: “the modular automorphisms differ by inner automorphisms”

**Sources:**

- [Alain Connes, Une classification des facteurs de type III](https://doi.org/10.24033/asens.1247)

### Modular equilibrium recovers Gibbs states

**Remember:** On all bounded operators, the density gives the Hamiltonian.

*Makes the theorem clean to state or prove.* MSC 46L60 (Applications of selfadjoint operator algebras to physics), 82B10. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Let αₜ be a weakly continuous automorphism group on B(H), the bounded operators on a Hilbert space. At inverse temperature β &gt; 0, equilibrium requires a bounded continuous F on 0 ≤ Im z ≤ β for every A,B ∈ B(H). It must be holomorphic inside, with boundary values F(t) = ω(Aαₜ(B)) and F(t+iβ) = ω(αₜ(B)A). A faithful normal state has the form ω(A) = Tr(ρA) for a positive trace-one operator ρ with zero kernel.

**Problem.** For a faithful normal equilibrium state, set K = −(log ρ)/β by spectral calculus. Then αₜ(A) = exp(itK)A exp(−itK), and exp(−βK) = ρ.

**How the definition helps.** The two boundary values characterize time evolution, allowing the density operator to determine a generator. Takesaki’s uniqueness theorem identifies the dynamics with the reverse modular flow at time t/β. For B(H), the modular flow at time s is conjugation by exp(is log ρ). Our own calculation substitutes s = −t/β and obtains K. Adding a scalar to K gives the same dynamics.

**Paper or page:** [Rotational KMS states and type I conformal nets](https://arxiv.org/abs/1608.08903v2). It says: “there exists positive, non-singular, selfadjoint operator H”

**Sources:**

- [Roberto Longo and Yoh Tanimoto, Rotational KMS States and Type I Conformal Nets](https://doi.org/10.1007/s00220-017-2969-8)

### Bipartite quantum graphs keep the classical spectral test

**Remember:** A regular quantum graph has a bipartite piece when −d is an eigenvalue.

*Makes the theorem clean to state or prove.* MSC 46L89 (Other \`\`noncommutative'' mathematics based on \\(C<sup>\*\\</sup>)-algebra theory), 05C50. arXiv math.OA, math.CO. Level 4: research.

**Definition.** A quantum graph replaces the vertex set by a finite-dimensional C\*-algebra B with a state ψ, here tracial, that is, ψ(ab) = ψ(ba). It replaces the adjacency matrix by an operator A on B. The paper defines connectedness and bipartiteness of quantum graphs in terms of graph homomorphisms. For classical graphs, bipartite means that there is a homomorphism to the graph with two vertices and one edge.

**Problem.** A d-regular classical graph has a bipartite component exactly when −d is an eigenvalue of its adjacency matrix. One wants the same test for quantum graphs, which have no vertices to colour.

**How the definition helps.** Our own reason: the definition copies the classical one through homomorphisms, so the classical spectral test can survive. The abstract says regular tracial quantum graphs have the same algebraic characterization of connectedness and bipartiteness as classical graphs. The case d = 0 needs one extra condition, that 0 has multiplicity at least two, so dim B ≥ 2. The paper also proves that bipartiteness equals two-colorability. That needs a comparison of two kinds of homomorphism, one for adjacency matrices and one for edge spaces. Our own judgement: this comparison is where the work is.

**Paper or page:** [Algebraic connectedness and bipartiteness of quantum graphs](https://arxiv.org/abs/2310.09500), [Algebraic connectedness and bipartiteness of quantum graphs](https://arxiv.org/abs/2310.09500). It says: “Let 𝒢 = (B,ψ,A) be a d-regular undirected tracial quantum graph. The following are equivalent: (1) 𝒢 has a bipartite component. (2) −d ∈ spec(A).”

**Sources:**

- [Junichiro Matsuda, Algebraic connectedness and bipartiteness of quantum graphs, Comm. Math. Phys. 405, no. 185 (2024), arXiv:2310.09500](https://arxiv.org/abs/2310.09500)
