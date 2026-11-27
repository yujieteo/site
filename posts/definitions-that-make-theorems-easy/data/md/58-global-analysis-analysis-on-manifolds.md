### Defining cotangent vectors as I/I² makes the product rule automatic

**Remember:** A covector is a function modulo second-order terms.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 14A15. arXiv math.DG, math.AG. Level 2: later undergraduate.

**Definition.** Let Iₓ be the ideal of smooth functions that vanish at the point x, and Iₓ² the span of products of two such functions. The cotangent space at x is the quotient Iₓ/Iₓ². The differential of f at x is the class of f − f(x).

**Problem.** Define the differential df at a point with no charts and no tangent vectors, and show that d(fg) = f(x) dg + g(x) df. The same definition should also work in algebraic geometry.

**How the definition helps.** In this definition, the product rule is a one-line identity, which is our own computation. Write fg − f(x)g(x) = f(x)(g − g(x)) + g(x)(f − f(x)) + (f − f(x))(g − g(x)). The last term lies in Iₓ², so it vanishes in the quotient. The page notes that this is the same construction as the Zariski cotangent space in algebraic geometry. It also extends to locally ringed spaces. What stays hard is the isomorphism with the dual of the tangent space. In our own summary, it needs Hadamard's lemma, which splits a smooth function near x into a linear part and a part in Iₓ².

**Wikipedia:** [Cotangent space](https://en.wikipedia.org/wiki/Cotangent_space). It says: “the cotangent space can be defined as the quotient space T\*ₓM = Iₓ/Iₓ² by showing that the two spaces are isomorphic to each other.”

**Sources:** none listed. No primary source with a working link was found.

### Hausdorff and paracompact manifolds have partitions of unity

**Remember:** Locally like ℝⁿ is not enough; points must also separate and covers refine.

*Rules out counterexamples. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 54D20. arXiv math.DG, math.GT. Level 2: later undergraduate.

**Definition.** A topological manifold is a space that is locally like ℝⁿ and is also Hausdorff and paracompact. Paracompact means that every open cover has a locally finite open refinement. Being locally like ℝⁿ does not imply being Hausdorff, so this is a real extra condition.

**Problem.** Every open cover of a smooth manifold should have a subordinate smooth partition of unity: smooth functions that sum to 1, each supported inside a set of the cover. Then local constructions (metrics, connections, integrals) can be glued.

**How the definition helps.** The two extra conditions make partitions of unity exist, so the gluing works on every manifold. Hausdorffness is a non-local condition. The line with two origins (the real line with its origin doubled) is locally Euclidean but not Hausdorff, so the definition excludes it. In paracompact Hausdorff spaces, every open cover has a partition of unity; in fact this property characterises paracompact Hausdorff spaces. Smooth bump functions then upgrade these to smooth partitions of unity. The existence proof is still a real argument; the definition only makes it apply.

**nLab:** [topological manifold](https://ncatlab.org/nlab/show/topological+manifold), [partition of unity](https://ncatlab.org/nlab/show/partition+of+unity), [line with two origins](https://ncatlab.org/nlab/show/line+with+two+origins). It says: “Paracompact smooth manifolds admit locally finite smooth partitions of unity subordinate to any open cover”

**Sources:**

- [Ryszard Engelking, General Topology, Sigma Series in Pure Mathematics 6, Heldermann (1989), Chapter 5 (paracompact spaces)](https://www.heldermann.de/SSPM/SSPM06/sspm06.htm)

### Second countability lets smooth functions determine maps of manifolds (Milnor's exercise)

**Remember:** Countably many pieces keep a manifold visible from its functions.

*Rules out counterexamples.* MSC 58A05 (Differentiable manifolds, foundations), 54D70, 26E10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Here a smooth manifold is finite-dimensional, paracompact and second countable. Second countability means that the topology has a countable base. For a Hausdorff manifold, this is the same as being paracompact with countably many connected components.

**Problem.** The functor that sends M to C∞(M), its algebra of smooth functions, goes from smooth manifolds to the opposite of the category of commutative ℝ-algebras. This functor is fully faithful: every algebra homomorphism C∞(N) → C∞(M) comes from a unique smooth map M → N.

**How the definition helps.** Second countability excludes a set-theoretic pathology, and with it the theorem holds. The case where M is a point says that every character of C∞(N) (an algebra homomorphism to ℝ) is evaluation at a point. Pursell proved this case in 1952, and it is known as Milnor's exercise. If second countability is dropped, a 0-dimensional manifold can have a set of components as large as a measurable cardinal (a very large cardinal whose existence ordinary set theory cannot prove). Then there are algebra homomorphisms ℝᵀ → ℝˢ that do not come from any map of sets S → T. The proof with the condition still needs work (Pursell, Milnor–Stasheff Problem 1-C, Dubuc's proof).

**nLab:** [embedding of smooth manifolds into formal duals of R-algebras](https://ncatlab.org/nlab/show/embedding+of+smooth+manifolds+into+formal+duals+of+R-algebras), [topological manifold](https://ncatlab.org/nlab/show/topological+manifold). It says: “If one drops the second countability assumption on manifolds, allowing sets of connected components to have the cardinality of a measurable cardinal”

**Sources:**

- [John Milnor, James Stasheff, Characteristic Classes, Problem 1-C, Annals of Mathematics Studies 76, Princeton University Press (1974)](https://doi.org/10.1515/9781400881826)
- [Eduardo Dubuc, Sur les modèles de la géométrie différentielle synthétique, Cahiers de Topologie et Géométrie Différentielle Catégoriques 20 (1979) 231–279, Prop. 0.7](http://www.numdam.org/item?id=CTGDC_1979__20_3_231_0)

### Tangent vectors as derivations give the chain rule without charts

**Remember:** A tangent vector is whatever obeys the product rule at a point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Let M be a smooth manifold and x a point of M. A derivation at x is a linear map D from smooth functions on M to ℝ with D(fg) = D(f)·g(x) + f(x)·D(g). This is the product rule at the point x. The tangent space TₓM is the vector space of all derivations at x.

**Problem.** Define tangent spaces and differentials of smooth maps without charts, and show that the chain rule holds.

**How the definition helps.** The definition uses no charts, so there is no chart independence to check. With velocity classes of curves, you must check that the vector space structure and the equivalence relation do not depend on the chart. With derivations, TₓM is a vector space at once, and the differential of a smooth map φ is simply dφₓ(D)(f) = D(f ∘ φ). Our own remark: the chain rule d(ψ ∘ φ) = dψ ∘ dφ is then one line, because you can read D(f ∘ ψ ∘ φ) in two ways. The work moves to showing that the derivations at a point of ℝⁿ are exactly the directional derivatives. The article states this, and the proof uses Taylor's theorem (our own remark). The article gives the definition for smooth (C∞) manifolds only.

**Wikipedia:** [Tangent space](https://en.wikipedia.org/wiki/Tangent_space). It says: “While the definition via the velocity of curves is intuitively the simplest, it is also the most cumbersome to work with.”

**Sources:** none listed. No primary source with a working link was found.

### With tangent vectors as classes of curves, the chain rule is associativity

**Remember:** Push a curve forward by composing it with f.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A tangent vector v at a point x of a manifold X is an equivalence class of smooth paths γᵥ : \[−ε, ε\] → X with γᵥ(0) = x. The differential df of a map f : X → Y sends the class of γ to the class of f ∘ γ.

**Problem.** Prove the chain rule d(g ∘ f) = dg ∘ df. That is, differentiation is a functor on smooth manifolds.

**How the definition helps.** With this definition, the chain rule is just associativity of composition. The vector d(g ∘ f)(v) is the class of (g ∘ f) ∘ γᵥ, and dg(df(v)) is the class of g ∘ (f ∘ γᵥ). These are the same path. In synthetic differential geometry (a setting with true infinitesimals), one can take v to be a map from the infinitesimal interval D, and the same remark applies. Our reading of what remains: one must check that df is well defined on classes of curves and agrees with the usual derivative. That is where ordinary calculus enters.

**nLab:** [chain rule](https://ncatlab.org/nlab/show/chain+rule). It says: “If one thinks of a tangent vector v ∈ T<sub>x</sub> X to be an equivalence class of a smooth path γ<sub>v</sub> : \[−ε,ε\] → X, for some ε &gt; 0, with γ(0) = x, then the chain rule is the associativity”

**Sources:** none listed. No primary source with a working link was found.

### Axioms for the exterior derivative make d² = 0 true by definition

**Remember:** Differentiating a differential gives zero.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The exterior derivative d is the unique linear map from k-forms to (k+1)-forms with three rules. On functions it is the ordinary differential. It obeys the signed product rule d(α∧β) = dα∧β + (−1)ᵏ α∧dβ for a k-form α. It satisfies d(dα) = 0 for every form α.

**Problem.** For every smooth differential form α, the exterior derivative of dα is zero.

**How the definition helps.** In the axiomatic definition on Wikipedia, d(dα) = 0 is one of the rules that define d. The work moves to proving that exactly one operator obeys these rules. In our own account, existence comes from the coordinate formula, which differentiates the coefficients of a form in a chart. In our own account, that formula gives d² = 0 because mixed second partial derivatives are equal.

**Wikipedia:** [Exterior derivative](https://en.wikipedia.org/wiki/Exterior_derivative). It says: “The exterior derivative d is defined to be the unique ℝ-linear mapping from k-forms to (k+1)-forms”

**Paper or page:** [Theorem 5.4. (Exterior derivative vanishes)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let α be any k-form. Then d²(α) = 0. Even more succinctly, d² = 0.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin, Theorem 5.4 on differential forms](https://venhance.github.io/napkin/Napkin.pdf)

### Defining cube boundaries as signed face sums makes ∂∂ = 0 automatic

**Remember:** Each face of a face occurs twice, with opposite signs.

*True by definition. Confidence: medium.* MSC 58A10 (Differential forms in global analysis), 55N10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth k-cube in a manifold is a smooth map from \[0,1\]ᵏ to the manifold. Its boundary is the sum of its 2k faces, each with a sign. The face that fixes coordinate i at the value a, with a = 0 or 1, gets the sign (−1)ⁱ⁺ᵃ. A chain is a finite integer combination of cubes.

**Problem.** For every chain c of smooth cubes, the boundary of the boundary of c is zero.

**How the definition helps.** The signs are chosen so that each face of a face appears twice, with opposite signs. In our own check, fixing coordinate i and then coordinate j gives the same cube as the other order, after renumbering. In our own check, the two signs differ by one factor of −1, so the pair cancels. In our own comparison, a definition by outward orientations on each face would need an argument about orientations instead. In our own account, the work moves to matching the signs with outward orientations, which Stokes' theorem needs.

**Paper or page:** [Theorem 5.5. (The boundary of the boundary is empty)](https://venhance.github.io/napkin/Napkin.pdf). It says: “∂² = 0, in the sense that for any k-chain c we have ∂²(c) = 0.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin, Theorem 5.5 on Stokes’ theorem](https://venhance.github.io/napkin/Napkin.pdf)

### Differential forms turn the classical integral theorems into one theorem

**Remember:** Boundary integral of ω equals inside integral of dω: one formula for all.

*Makes the theorem clean to state or prove.* MSC 58A10 (Differential forms in global analysis), 26B20. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A differential k-form on a manifold assigns to each point an alternating k-linear form on the tangent space there. You can integrate a k-form over an oriented k-dimensional manifold. The exterior derivative d takes k-forms to (k + 1)-forms.

**Problem.** The problem is to prove the fundamental theorem of calculus, Green's theorem, the Kelvin–Stokes theorem and the divergence theorem.

**How the definition helps.** Differential forms make these four theorems into one statement. In vector calculus they are separate theorems about gradients, curls and divergences in dimensions 1, 2 and 3. With differential forms and the exterior derivative, they become one formula: ∫ over ∂Ω of ω = ∫ over Ω of dω. In words, the integral of ω over the boundary of Ω equals the integral of dω over Ω. The formula holds on an oriented manifold Ω with boundary, for a compactly supported form ω. Élie Cartan gave this modern form in 1945. Orientability and compact support are still needed; the article calls these technical conditions, and rough domains need further work, for example Whitney's version.

**Wikipedia:** [Generalized Stokes theorem](https://en.wikipedia.org/wiki/Generalized_Stokes_theorem). It says: “is a statement about the integration of differential forms on manifolds, which both simplifies and generalizes several theorems from vector calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Null sets on smooth manifolds are defined chart by chart

**Remember:** Null in every chart means null on the manifold; one smooth atlas suffices.

*Rules out counterexamples. Confidence: medium.* MSC 58C35 (Integration on manifolds; measures on manifolds), 28A05. arXiv math.DG, math.CA. Level 2: later undergraduate.

**Definition.** Let X be a smooth n-manifold. A subset A of X is null if its preimage under every coordinate chart is a Lebesgue-null subset of the chart's domain in ℝⁿ. A is full if each such preimage is full, that is, its complement in the chart's domain is null.

**Problem.** 'Almost everywhere' should make sense on a manifold without a chosen measure. It should also be enough to check one atlas that covers the set.

**How the definition helps.** Smooth transition maps carry null sets to null sets, so a set that is null in the charts of one atlas is null in every chart. So every smooth manifold has a well-defined δ-filter of full sets (a filter closed under countable intersections). This makes it a localizable measurable space, in the nLab's sense, without a choice of measure. The nLab says this fails for topological manifolds, because a mere homeomorphism of ℝⁿ need not keep Lebesgue-null sets null. The page asks whether C¹ is enough. Our own note says it is, since C¹ maps, and even locally Lipschitz maps, between open subsets of ℝⁿ carry null sets to null sets.

**nLab:** [null subset](https://ncatlab.org/nlab/show/null+subset). It says: “If A is covered by an atlas (φᵢ: Uᵢ → X)ᵢ, then A is null or full as soon as φᵢ\*(A) is null/full in Uᵢ for every index i. … This fact depends on the smoothness and fails for topological manifolds.”

**Sources:**

- [John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Graduate Texts in Mathematics 218, Springer (2013), Chapter 6](https://doi.org/10.1007/978-1-4419-9982-5)

### Pseudoforms can be integrated on any manifold, with no orientation

**Remember:** A pseudoform transforms like a density, so its integral ignores orientation.

*Rules out counterexamples.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An n-pseudoform on an n-manifold is like an n-form, but it gets an extra factor −1 when you change to coordinates of the opposite orientation. So in top degree it transforms by the absolute value of the Jacobian determinant, not by the determinant itself.

**Problem.** Define the integral of a top-degree object over any manifold, also a non-orientable one. The result must not depend on the charts and the partition of unity. The integral must also be linear.

**How the definition helps.** A pseudoform solves both problems, because its transformation law uses the absolute value of the Jacobian, exactly as the change-of-variables formula for Lebesgue integrals does. The nLab theorem says that for a continuous n-pseudoform, the integral built from charts and a partition of unity does not depend on these choices, and that the map from pseudoforms to measures is linear. With an ordinary n-form, the same recipe depends on the orientation of each chart. If you repair this by taking the absolute value of the form on each chart, the map to measures stops being linear. The real content is still the change-of-variables theorem. On an oriented manifold, you integrate an ordinary n-form by first turning it into a pseudoform. The volume element of a Riemannian manifold is a pseudoform for the same reason.

**nLab:** [pseudoform](https://ncatlab.org/nlab/show/pseudoform), [integration of differential forms](https://ncatlab.org/nlab/show/integration+of+differential+forms), [volume form](https://ncatlab.org/nlab/show/volume+form). It says: “For a top-dimension pseudoform, this has the effect that at any given point, the form has a consistent sign regardless of the orientation of the coordinates.”

**Sources:**

- [Raoul Bott, Loring W. Tu, Differential Forms in Algebraic Topology, Graduate Texts in Mathematics 82, Springer (1982)](https://doi.org/10.1007/978-1-4757-3951-0)

### Manifolds with corners make products of manifolds with boundary smooth again

**Remember:** Allow corners, and products of manifolds with boundary stay manifolds.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57R55. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A smooth manifold with corners is modelled locally on \[0, ∞)ᵏ × ℝⁿ⁻ᵏ instead of only on ℝⁿ or a half-space. Points with k &gt; 1 are corners.

**Problem.** The product of two smooth manifolds with corners is a manifold with corners. For example, the square \[0,1\] × \[0,1\] is one. So is W × \[0,1\] when W is a cobordism, that is, a manifold whose boundary is two closed manifolds.

**How the definition helps.** The local models \[0, ∞)ᵏ × ℝⁿ⁻ᵏ are closed under products, so the class is closed under products by definition. With only interiors and half-spaces, the product of two intervals fails at its four corners. Our own remark: this matters in cobordism theory, where one glues cobordisms and takes products with intervals. Without corners one must round them off, which needs extra choices. What stays hard is that there are several inequivalent notions of smooth maps between manifolds with corners.

**Wikipedia:** [Manifold](https://en.wikipedia.org/wiki/Manifold). It says: “If in addition we are considering differentiable manifolds, then a square with interior is not a manifold with boundary. The four vertices are neither locally diffeomorphic to Euclidean space nor to Euclidean half-space.”

**Sources:**

- [Dominic Joyce, On manifolds with corners, arXiv:0910.3518 (2009)](https://arxiv.org/abs/0910.3518)

### Connected fibers let forms descend

**Remember:** Basic forms forget both vertical directions and position along a connected fiber.

*Rules out counterexamples.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** A surjective submersion is a smooth map that looks locally like a coordinate projection and reaches every target point. Call a form basic when it vanishes whenever one argument is tangent to a fiber and stays fixed under flows within fibers.

**Problem.** For a surjective submersion with connected fibers, every basic form is the pullback of a unique form downstairs.

**How the definition helps.** The first condition removes differentials along fibers, and the second makes the remaining coefficients locally constant along each fiber. Connectedness makes these coefficients constant on the whole fiber. In our own proof, local projection coordinates then give a smooth form downstairs. Surjectivity gives uniqueness. Our own counterexample projects two disjoint copies of the base onto one. A function taking different constants on the copies is basic but cannot come from downstairs.

**nLab:** [basic differential form](https://ncatlab.org/nlab/show/basic+differential+form). It says: “If the fibers of p are connected (otherwise the characterization given below is valid only locally in E)”

**Sources:** none listed. No primary source with a working link was found.

### Defining Lie derivatives by flows makes the wedge product rule immediate

**Remember:** Pullback respects wedges, so its derivative obeys the product rule.

*True by definition. Confidence: medium.* MSC 58A10 (Differential forms in global analysis), 57R25. arXiv math.DG. Level 3: graduate.

**Definition.** Let X be a vector field, and let φₜ be its local flow, the maps that move each point for time t along X. The Lie derivative of a form ω along X is the derivative at t = 0 of φₜ\*ω. Here φₜ\*ω is the pullback, the form that evaluates ω on vectors pushed forward by φₜ. Another definition gives a formula in the coordinate components of ω and of X.

**Problem.** Write ℒ for the Lie derivative along a fixed vector field. Then ℒ(α∧β) = ℒα∧β + α∧ℒβ for all smooth forms α and β.

**How the definition helps.** The flow definition makes the rule easy because pullback along each map φₜ preserves wedge products. In our own argument, differentiating φₜ\*α ∧ φₜ\*β at t = 0 gives the product rule, as for products of functions. In our own comparison, the coordinate formula needs a direct calculation with components instead. In our own account, the work moves to the existence of local flows. It also moves to computing the flow derivative in coordinates, which shows that the two definitions agree.

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative). It says: “is the linearization of the pullback of ω along the flow”

**Sources:**

- [T. J. Willmore, The definition of Lie derivative, Proceedings of the Edinburgh Mathematical Society 12 (1960), 27–29](https://doi.org/10.1017/S0013091500025013)

### Divergence as volume change makes volume preservation immediate

**Remember:** Zero divergence stops the flow from changing volume at any time.

*True by definition.* MSC 58A10 (Differential forms in global analysis), 37C10. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** A volume form μ specifies oriented volume on a smooth manifold. The Lie derivative ℒₓμ is the initial rate of change of μ when the flow of X pulls it back to the starting points. The divergence of X relative to μ satisfies ℒₓμ = (div X)μ. For standard Euclidean volume, the coordinate definition is ∑ᵢ ∂Xᵢ/∂xᵢ.

**Problem.** A smooth vector field has zero divergence relative to μ exactly when its flow preserves μ wherever it is defined.

**How the definition helps.** The Lie-derivative definition makes zero divergence mean zero instantaneous change of volume (our own). At any time t, the flow law gives the rate of change by pulling the initial derivative back along the time-t map. Zero divergence therefore gives zero change at every time, and a volume-preserving flow has zero derivative at time zero. The work goes into checking that for ordinary Euclidean volume this rule gives the sum of the coordinate derivatives.

**Wikipedia:** [Divergence](https://en.wikipedia.org/wiki/Divergence). It says: “This means that the divergence measures the rate of expansion of a unit of volume (a volume element) as it flows with the vector field.”

**Sources:** none listed. No primary source with a working link was found.

### Lie and exterior derivatives commute

**Remember:** Pull back before differentiating in time.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth vector field moves points along its local flow. Pull a differential form back along this motion and differentiate at time zero to obtain its Lie derivative.

**Problem.** Taking a Lie derivative and taking an exterior derivative commute on smooth forms.

**How the definition helps.** The flow definition lets us use the same pullback identity at every time. In our own proof, exterior differentiation commutes with smooth pullback and with differentiation in time. Differentiating the pullback identity gives the claim. Cartan’s alternative formula expresses the Lie derivative using exterior differentiation and insertion of the field into a form. Proving the pullback identity or deriving Cartan’s formula supplies the underlying work.

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative). It says: “the linearization of the pullback of ω along the flow exp(X −)”

**Sources:** none listed. No primary source with a working link was found.

### Closed twists square to zero

**Remember:** Closedness removes the derivative of the twist, and odd degree removes its square.

*Rules out counterexamples.* MSC 58A12 (de Rham theory in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** Let d denote exterior differentiation of real differential forms. Choose a closed 3-form H, meaning dH = 0. Set Dα = dα + H ∧ α, where ∧ denotes the alternating product of forms. Both terms switch the parity of the degree.

**Problem.** The twisted exterior derivative has square zero and hence defines cohomology.

**How the definition helps.** The square reduces to wedge multiplication by dH because the mixed terms cancel and H wedges with itself to zero. The simple proof uses the exterior product rule and the sign change when swapping odd forms. Our own counterexample takes H = x₁ dx₂ ∧ dx₃ ∧ dx₄ on ℝ⁴. The square applied to 1 is then a nonzero 4-form.

**nLab:** [twisted de Rham cohomology](https://ncatlab.org/nlab/show/twisted+de+Rham+cohomology). It says: “Notice that this is nilpotent, due to the odd degree of H, such that H ∧ H = 0, and the closure of H, d H = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Invariance makes Cartan differentials square to zero

**Remember:** Invariance kills the square of the Cartan differential.

*Rules out counterexamples.* MSC 58A12 (de Rham theory in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** Suppose the circle acts smoothly on a manifold. Use polynomials in a variable u of degree two whose coefficients are differential forms fixed by the action. Set D = d − uι, where d differentiates forms and ι inserts the velocity field of the rotation.

**Problem.** The Cartan differential has square zero on invariant forms, so its cohomology is defined.

**How the definition helps.** Invariance makes each coefficient’s derivative along the rotation vanish. In our own calculation, Cartan’s formula identifies D² with minus u times that derivative. On the rotating circle, the same calculation gives D² sin θ = −u cos θ. This example shows what fails when the coefficients can change under rotation.

**nLab:** [equivariant de Rham cohomology](https://ncatlab.org/nlab/show/equivariant+de+Rham+cohomology). It says: “Equip this graded vector space Ω•(G, 𝔥∗\[1\])ᴳ with a differential d by”

**Sources:** none listed. No primary source with a working link was found.

### Defining harmonic as closed and coclosed shows the Hodge star preserves it

**Remember:** The Hodge star swaps the two first-order equations, up to signs.

*True by definition. Confidence: medium.* MSC 58A14 (Hodge theory in global analysis), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** On a closed oriented Riemannian manifold, call a differential form harmonic when dω = 0 and d\*ω = 0. Here d is the exterior derivative and d\* is its formal adjoint. The nLab definition uses the kernel of the Hodge Laplacian (d + d\*)².

**Problem.** On a compact oriented Riemannian manifold without boundary, the Hodge star sends harmonic forms to harmonic forms of complementary degree.

**How the definition helps.** The Hodge star swaps d and d\* up to sign, so it preserves the pair of equations (our own argument). With the Laplacian definition, one must check that the star commutes with the Laplacian (our own comparison). The work moves to the formula d\* = ±\*d\* and to the theorem that the two definitions agree. For that theorem, pair the Laplacian with the form to get the sum of two squared norms (our own).

**nLab:** [harmonic differential form](https://ncatlab.org/nlab/show/harmonic+differential+form). It says: “if it is in the kernel of the Laplace operator”

**Sources:** none listed. No primary source with a working link was found.

### Form degrees preserve Hodge filtration

**Remember:** Pullback cannot lower the degree of a holomorphic form.

*True by definition.* MSC 58A14 (Hodge theory in global analysis), 32Q15. arXiv math.DG. Level 3: graduate.

**Definition.** The holomorphic de Rham complex consists of local holomorphic differential forms linked by exterior differentiation. Its hypercohomology computes cohomology using both these derivatives and the gluing of local forms. Stage p of the Hodge filtration is the image in complex cohomology after discarding degrees below p. For a Kähler metric, the associated positive two-form is closed.

**Problem.** Holomorphic pullback preserves every stage of the Hodge filtration.

**How the definition helps.** Pullback preserves form degree and commutes with differentiation, so it maps each shortened complex to the corresponding shortened complex (our own). Passing to cohomology preserves the inclusion of their images (our own). On compact Kähler manifolds, Hodge theory identifies these images with the classes represented by harmonic forms having at least p holomorphic factors in every term.

**nLab:** [holomorphic de Rham complex](https://ncatlab.org/nlab/show/holomorphic+de+Rham+complex). It says: “If X happens to be a Kähler manifold then the Frölicher spectral sequence shows that this coincides with the more traditional definition via harmonic differential forms”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic representatives minimize the norm

**Remember:** A harmonic form is orthogonal to every exact correction.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.SP. Level 3: graduate.

**Definition.** On a compact Riemannian manifold without boundary, a differential form ω is harmonic if dω = 0 and d\*ω = 0. Here d is the exterior derivative, and d\* is its adjoint for the integral inner product on forms. An equivalent definition uses the Laplacian and requires (dd\* + d\*d)ω = 0.

**Problem.** On a closed Riemannian manifold, the harmonic representative of a real cohomology class uniquely minimizes the L² norm in that class. The class consists of closed forms that differ by exact forms, those of the form dα.

**How the definition helps.** The condition d\*ω = 0 says directly that ω is orthogonal to all exact forms (our own). All other representatives differ from ω by such a form, so Pythagoras gives the strict norm increase (our own). The Hodge theorem does the work of finding the harmonic representative (our own).

**Wikipedia:** [Hodge theory](https://en.wikipedia.org/wiki/Hodge_theory). It says: “the harmonic representative is the unique closed form of minimum L² norm that represents a given cohomology class.”

**Sources:** none listed. No primary source with a working link was found.

### Exterior closure detects integrable planes

**Remember:** Differentiate the vanishing forms to test integrability.

*Rules out counterexamples.* MSC 58A17 (Pfaffian systems). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth plane field assigns a tangent subspace of fixed dimension to each point. Take all sums of alternating products having at least one factor a one-form that vanishes on those planes. These forms constitute an ideal. Call it closed under exterior differentiation when differentiating any member gives another member.

**Problem.** A local integral leaf is a submanifold whose tangent spaces equal the prescribed planes. Such a leaf passes through every point exactly when the ideal is closed under exterior differentiation.

**How the definition helps.** Closure tests integrability by differentiating the one-forms that describe the planes. In our own explanation, evaluate such a derivative on two vector fields lying in the planes. The result equals minus the original form on their Lie bracket, which measures failure of their flows to commute. The Frobenius theorem constructs the local leaves when all these brackets stay in the planes. Our own counterexample uses the planes annihilated by dz − x dy. Its derivative −dx ∧ dy is nonzero on each plane.

**nLab:** [exterior differential system](https://ncatlab.org/nlab/show/exterior+differential+system). It says: “Frobenius systems are in bijection with involutive subbundles of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining current boundaries by duality makes pushforward commute with boundary

**Remember:** Pulling back a test form commutes with differentiating it.

*True by definition. Confidence: medium.* MSC 58A25 (Currents in global analysis), 49Q15. arXiv math.DG. Level 3: graduate.

**Definition.** A test form is a smooth differential form with compact support. A current is a continuous linear functional on test forms, and its boundary ∂T acts by ∂T(ω) = T(dω). The pushforward f♯T along a smooth map f acts by f♯T(ω) = T(f\*ω), where f\*ω is the pullback. The map f must be proper, meaning that preimages of compact sets are compact, so that f\*ω is again a test form.

**Problem.** For a proper smooth map f and any current T, ∂(f♯T) = f♯(∂T).

**How the definition helps.** With the duality definition, both sides apply T to forms that are equal. In our own step, one side gives T(f\*dω) and the other gives T(d f\*ω), and pullback commutes with d. In our own comparison, the image of a submanifold under f need not be a submanifold, so the geometric statement is hard even to state. Wikipedia says that Stokes' theorem motivates the duality definition of the boundary. In our own account, the work moves to Stokes' theorem and to the fact that d commutes with pullback.

**Wikipedia:** [Current (mathematics)](https://en.wikipedia.org/wiki/Current_%28mathematics%29). It says: “we can define a boundary operator on arbitrary currents”

**Sources:** none listed. No primary source with a working link was found.

### Defining the boundary of a current by duality makes its square zero

**Remember:** The boundary moves d onto the test form, and d twice is zero.

*True by definition.* MSC 58A25 (Currents in global analysis). arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** A current of degree m is a continuous linear functional on smooth compactly supported differential m-forms. Define the boundary ∂T of a current T of degree m + 1 by (∂T)(ω) = T(dω), where d is the exterior derivative. For the current of integration over an oriented manifold with boundary, Stokes' theorem shows that ∂ gives integration over the geometric boundary.

**Problem.** For every current T of degree at least two, ∂∂T = 0.

**How the definition helps.** With the duality definition, (∂∂T)(ω) = T(ddω) = 0, because d ∘ d = 0 on forms. The work moves to Stokes' theorem, which shows that the definition agrees with the geometric boundary for integration currents. Without that theorem, the operator would not deserve the name boundary. Wikipedia gives the definition and its motivation by Stokes' theorem; the one-line proof is our own.

**Wikipedia:** [Current (mathematics)](https://en.wikipedia.org/wiki/Current_%28mathematics%29). It says: “In view of this formula we can define a boundary operator on arbitrary currents”

**Sources:** none listed. No primary source with a working link was found.

### Diffeological spaces make spaces of smooth maps smooth again

**Remember:** Say which maps into X are smooth, and let the rest follow.

*Makes the theorem clean to state or prove.* MSC 58A40 (Differential spaces), 18F15. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** A diffeological space is a set X with a chosen set of maps U → X for each open set U ⊂ ℝⁿ. These maps are called plots, and they are the maps that count as smooth. Every constant map is a plot, a plot composed with a smooth map V → U is a plot, and a map that is a plot on each piece of an open cover is a plot. Equivalently, a diffeological space is a concrete sheaf on Cartesian spaces (the spaces ℝⁿ with smooth maps); concrete means that each plot is an actual function into the set X.

**Problem.** We want the space C∞(X, Y) of smooth maps X → Y to be a smooth space again. We also want the exponential law C∞(Z × X, Y) ≅ C∞(Z, C∞(X, Y)). In words: a smooth map of two variables is the same as a smooth family of smooth maps.

**How the definition helps.** The definition makes a plot of the mapping space the same thing as a smooth map of two variables, so the exponential law holds almost by definition. Smooth manifolds do not allow this. They are not cartesian closed (they do not have mapping objects that satisfy the exponential law), even when infinite-dimensional manifolds are allowed. Diffeological spaces form a quasitopos, a category with many of the good properties of the category of sets, so they are cartesian closed. A plot U → C∞(X, Y) is by definition a smooth map U × X → Y. For compact X, the diffeological structure on C∞(X, Y) agrees with the Fréchet manifold structure (a manifold structure modelled on a complete locally convex vector space). That comparison is a real theorem.

**nLab:** [diffeological space](https://ncatlab.org/nlab/show/diffeological+space), [manifold structure of mapping spaces](https://ncatlab.org/nlab/show/manifold+structure+of+mapping+spaces). It says: “The category of smooth manifolds is not cartesian closed, even when infinite-dimensional manifolds are allowed.”

**Sources:**

- [Jean-Marie Souriau, Groupes différentiels, Lecture Notes in Math. 836, Springer (1980) 91–128](https://doi.org/10.1007/BFb0089728)
- [Patrick Iglesias-Zemmour, Diffeology, Mathematical Surveys and Monographs 185, AMS (2013)](https://doi.org/10.1090/surv/185)

### Quotient plots detect smoothness

**Remember:** Test smoothness upstairs by lifting each plot locally.

*True by definition.* MSC 58A40 (Differential spaces). arXiv math.DG. Level 3: graduate.

**Definition.** A diffeological space specifies smooth parametrizations, called plots, on open subsets of Euclidean spaces. A map is smooth when it sends plots to plots. On a quotient, take the smallest collection of plots making the projection smooth, subject to the usual rules for plots.

**Problem.** A map out of a diffeological quotient is smooth exactly when its composite with the quotient map is smooth.

**How the definition helps.** One can describe the quotient plots explicitly as parametrizations that locally lift to plots upstairs. This description turns the smoothness test into composition with a local lift. Our own proof uses the fact that smoothness can be tested locally. The work is showing that local lifts give exactly the smallest allowed collection. They include constant plots and remain plots after smooth changes of parameters and gluing.

**Paper or page:** [Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4). It says: “is smooth if and only if f π is”

**Sources:**

- [Emilio Minichiello, Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4)

### Dirac commutators recover geodesic distance

**Remember:** The Dirac operator measures the steepest slope of a function.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** On a closed Riemannian spin manifold let D be the Dirac operator, the canonical first-order operator on spinor fields. Smooth real functions act on these fields by multiplication. Define spectral distance between x and y as the supremum of \|f(x) − f(y)\| over such functions with ‖Df − fD‖ ≤ 1.

**Problem.** On a connected closed Riemannian spin manifold, spectral distance equals the infimum of the lengths of paths joining the points.

**How the definition helps.** The commutator bound says exactly that the function has slope at most one (our own explanation). The Dirac commutator acts pointwise by Clifford multiplication, whose operator norm equals the length of the gradient. Integration along paths gives the upper bound. Smooth approximations to distance from x, with slope bounds tending to one, give the reverse inequality.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “From the knowledge of these objects one is able to recover the original manifold as a metric space:”

**Sources:**

- [Connes, Noncommutative geometry and reality](https://doi.org/10.1063/1.531241)

### Disconnected spin components have infinite distance

**Remember:** Constants on separate components can differ without a Dirac commutator.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** On a finite disjoint union of closed Riemannian spin manifolds let D act by the Dirac operator on each component. Define spectral distance as the supremum of \|f(x) − f(y)\| over smooth real functions with ‖Df − fD‖ ≤ 1. Allow the value infinity.

**Problem.** The spectral distance between points in different components is infinite.

**How the definition helps.** The commutator bound leaves the difference between component constants unrestricted (our own argument). The indicator of one component is smooth and commutes with D. Its multiples give arbitrarily large differences for points on different components.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “In general, the Connes metric can indeed take the value ∞”

**Sources:**

- [Connes, Noncommutative geometry and reality](https://doi.org/10.1063/1.531241)

### Invariant Dirac operators preserve distance

**Remember:** An implementer commuting with D permutes the spectral distance tests.

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** Let a unital algebra of bounded operators act on a Hilbert space with self-adjoint operator D and bounded commutators \[D,a\] = Da − aD. A state is a positive linear functional taking the identity to one. Its spectral distance from another state is the supremum of their absolute differences on self-adjoint a satisfying ‖\[D,a\]‖ ≤ 1.

**Problem.** Suppose a group acts on the algebra by unitary conjugations and each implementing unitary commutes with D. Its induced action on states preserves spectral distance, including infinite distances.

**How the definition helps.** The commutator bound gives a set of distance tests that each unitary permutes (our own deduction from Lemma 3.11). Taking the supremum therefore gives the same value after conjugation. On compact spin manifolds, identifying this formula with the usual distance defined by path lengths requires a separate theorem.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “then the action is Lip-isometric in the sense that”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)
- [Connes, Noncommutative geometry and reality](https://doi.org/10.1063/1.531241)

### Local compactness admits Euclidean Dirac operators

**Remember:** Multiply by a compactly supported function before testing compactness.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** A resolvent of a self-adjoint operator D is an inverse such as (D + i)⁻¹. A nonunital spectral triple requires bounded commutators \[D,a\] and compact operators a(D + i)⁻¹ for every algebra element a. This local compactness test allows the full resolvent to lack compactness.

**Problem.** On positive-dimensional Euclidean space let smooth compactly supported functions multiply square-integrable differential forms, and let D equal exterior differentiation plus its adjoint. These data form a locally compact spectral triple although (D + i)⁻¹ is not compact.

**How the definition helps.** Multiplication by a test function confines the resolvent output to a bounded region (our own explanation). The resolvent controls one square-integrable derivative, so compact Sobolev embedding gives compactness there. The commutator differentiates only the multiplier and is bounded. Translations of a fixed nonzero input give translated resolvent outputs with no convergent subsequence when the translations diverge.

**Paper or page:** [The Connes character formula for locally compact spectral triples](https://arxiv.org/abs/1803.01551). It says: “is an even spectral triple satisfying”

**Sources:**

- [The Connes character formula for locally compact spectral triples](https://arxiv.org/abs/1803.01551)

### The junk ideal lets differentiation descend

**Remember:** Kill every invisible form and its differential.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** Universal differential forms are formal products of algebra elements and symbols da subject to linearity, the product rule and d² = 0. For a spectral triple with operator D, represent da by the commutator \[D,a\] = Da − aD. Let K collect the kernels degree by degree. Define the represented calculus as universal forms modulo K + dK.

**Problem.** The quotient inherits multiplication and a differential satisfying the graded product rule and d² = 0.

**How the definition helps.** Adding dK kills the derivative of every discarded form, so differentiation respects the quotient (our own explanation). The graded product rule makes K + dK a two-sided ideal. For a smooth real function f on a closed spin manifold, f df − df f represents zero. Its derivative represents 2\[D,f\]², nonzero wherever f has nonzero derivative.

**Paper or page:** [On two notions of torsion and metric compatibility of connections in noncommutative geometry](https://arxiv.org/abs/2509.11888). It says: “is a ∗-differential calculus.”

**Sources:**

- [On two notions of torsion and metric compatibility of connections in noncommutative geometry](https://arxiv.org/abs/2509.11888)

### Total boundedness gives weak star convergence

**Remember:** A finite set of approximate tests controls all tests at once.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** Let D be the operator of a unital spectral triple, with bounded commutators \[D,a\] = Da − aD on a dense algebra. A state is a positive linear functional equal to one on the identity. Fix a state μ and take all self-adjoint tests a with ‖\[D,a\]‖ ≤ 1. At every tolerance ε &gt; 0, require finitely many norm balls of radius ε to cover the centered tests a − μ(a)1.

**Problem.** Define spectral distance as the supremum of absolute state differences on the tests. Under this condition it is a finite metric inducing the weak star topology, meaning pointwise convergence on the completed algebra.

**How the definition helps.** Finite norm approximations turn pointwise convergence of states into uniform convergence on the centered tests (our own explanation). Centering leaves state differences unchanged, and the centered set is bounded. Conversely, rescaling elements with bounded commutator gives pointwise convergence on the dense algebra. States have norm one, so density extends convergence to its completion. With D = 0 on a two-point space, distinct states have infinite distance.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “topologizes the weak\* topology on the state space”

**Sources:**

- [Rieffel, Metrics on state spaces](https://doi.org/10.4171/DM/68)

### Absolute differential forms give the triangle inequality for integrals

**Remember:** An absolute form is what you integrate over an unoriented curve, like arc length \|dx\|.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** An absolute p-form gives a number for each point and each list of p tangent vectors at that point. It is not linear. But on each oriented p-dimensional subspace it is multilinear, up to the sign that the orientation gives. You can integrate it over a p-dimensional submanifold without an orientation of that submanifold.

**Problem.** Integrate quantities such as arc length or surface area over unoriented submanifolds of any dimension. Also state the estimate \|∫ ω over R\| ≤ ∫ \|ω\| over \|R\| for an oriented submanifold R. Here \|R\| is R with its orientation forgotten.

**How the definition helps.** Absolute forms drop linearity but keep multilinearity on each oriented subspace, so you can integrate them on unoriented submanifolds. An ordinary p-form needs an oriented submanifold, and a pseudoform (a form twisted by orientation) needs a transversely oriented one. So neither can give arc length on an unoriented curve. The absolute value \|ω\| of any form or pseudoform is an absolute form. With that, the nLab states its main theorem: the absolute value of the integral of ω over R is at most the integral of \|ω\| over R with its orientation forgotten. The framework is an nLab author's own. The page cites only a Usenet post and a MathOverflow answer, which says that continuous absolute p-forms are Gelfand's even p-densities.

**nLab:** [absolute differential form](https://ncatlab.org/nlab/show/absolute+differential+form), [integration of differential forms](https://ncatlab.org/nlab/show/integration+of+differential+forms). It says: “I call these absolute forms. The term 'absolute' suggests a lack of additional required structure, in this case some sort of orientation on the domain of integration.”

**Sources:**

- [Juan Carlos Álvarez Paiva, answer to 'Why do I need densities in order to integrate on a non-orientable manifold?', MathOverflow (2012)](https://mathoverflow.net/questions/90455/) (link not checked)

### Palais–Smale compactness gives minimizers

**Remember:** A nearly stationary minimizing sequence needs somewhere to converge.

*Rules out counterexamples.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.FA. Level 3: graduate.

**Definition.** The Palais–Smale condition requires a convergent subsequence whenever function values stay bounded and derivatives tend to zero in norm. It asks for compactness only along nearly stationary sequences.

**Problem.** Let f be a continuously differentiable real-valued function on a real Hilbert space. If f is bounded below and satisfies the Palais–Smale condition, it attains its infimum.

**How the definition helps.** The condition keeps nearly stationary minimizing sequences from escaping (our own). Ekeland’s variational principle supplies such a sequence, and continuity gives the minimum at its subsequential limit (our own). On the real line, e⁻ˣ approaches its infimum at infinity without attaining it (our own).

**Wikipedia:** [Palais–Smale compactness condition](https://en.wikipedia.org/wiki/Palais%E2%80%93Smale_compactness_condition). It says: “if every sequence {uₖ} ⊂ H such that: {I\[uₖ\]} is bounded, and I′\[uₖ\] → 0 in H has a convergent subsequence in H.”

**Sources:** none listed. No primary source with a working link was found.

### Clifford multiplication makes Dirac operators elliptic

**Remember:** A square equal to a nonzero scalar gives an inverse.

*True by definition. Confidence: medium.* MSC 58J05 (Elliptic equations on manifolds, general theory). arXiv math.DG. Level 3: graduate.

**Definition.** The principal symbol of a first-order operator records its derivative coefficients at a covector, a linear function on tangent vectors. Use the real symbol convention without a factor of i. Call the operator Dirac-type if its symbol squares to minus the squared covector length times the identity.

**Problem.** Every Riemannian Dirac-type operator is elliptic, meaning its symbol is invertible for every nonzero covector.

**How the definition helps.** The symbol definition gives an inverse by dividing the symbol by minus the squared covector length. This Riemannian argument is our own generalization of the cited Euclidean example. Another construction differentiates sections of a vector bundle using a connection and then applies Clifford multiplication. The work there is identifying its symbol and checking the stated square relation.

**nLab:** [Dirac operator](https://ncatlab.org/nlab/show/Dirac+operator). It says: “In Euclidean space the Dirac operator is elliptic, but not in Minkowski space.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Laplacian as d\*d makes it symmetric and nonnegative

**Remember:** Pairing the Laplacian with a function pairs their differentials.

*True by definition.* MSC 58J05 (Elliptic equations on manifolds, general theory), 35J05. arXiv math.DG. Level 3: graduate.

**Definition.** Define the Laplacian with the nonnegative sign as d\*d. Here d takes the differential of a function and d\* is its formal adjoint under integration. The usual definition is minus the divergence of the gradient, written with the metric coefficients.

**Problem.** On smooth compactly supported functions on a Riemannian manifold, the nonnegative Laplacian is symmetric, and its quadratic form is nonnegative.

**How the definition helps.** Moving d\* across the integral gives the inner product of the two differentials, which proves both claims at once (our own argument). With the divergence definition, one needs Green’s formula for each claim (our own). The work moves to integration by parts, which shows that d\* on one-forms is minus the divergence (our own).

**Wikipedia:** [Laplace–Beltrami operator](https://en.wikipedia.org/wiki/Laplace%E2%80%93Beltrami_operator). It says: “are formal adjoints, in the sense that for a compactly supported function”

**Sources:** none listed. No primary source with a working link was found.

### The commutator definition makes first-order symbols independent of coordinates

**Remember:** A commutator with multiplication reads off the symbol without coordinates.

*True by definition. Confidence: medium.* MSC 58J05 (Elliptic equations on manifolds, general theory), 35S05. arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** Let D be a first-order linear differential operator acting on sections of a vector bundle E over a smooth manifold. A section chooses a vector in the fiber Eₓ at each point x. Define the symbol of D on a differential df by the commutator \[D, f\], which acts on a section u as D(fu) − fD(u). The usual coordinate recipe replaces each first derivative by its matching covector component and discards terms without derivatives.

**Problem.** At each x, the commutator depends only on the differential df at x and acts linearly on the fiber Eₓ. So the first-order symbol does not depend on the choice of coordinates.

**How the definition helps.** The commutator formula defines the symbol without choosing coordinates once we show that only df at x matters. In our own proof, first-order terms cancel in \[D, f\], so it acts by a linear map on each fiber. The product rule for commutators makes f ↦ \[D, f\] at x obey the Leibniz rule at x. It kills constants and products of functions vanishing at x, so only the linear part of f at x matters. The work moves into this check and matching the result with the usual coordinate formula.

**nLab:** [symbol of a differential operator](https://ncatlab.org/nlab/show/symbol+of+a+differential+operator). It says: “where in the commutator on the right we regard multiplication by f as an endomorphism of Γ(E).”

**Sources:** none listed. No primary source with a working link was found.

### Eta phases forget the filling

**Remember:** Two fillings can change the index integral only by an integer.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J28. arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Let D be the twisted Dirac operator on a closed odd-dimensional Riemannian spin manifold. Its eta invariant η counts positive minus negative eigenvalues by analytic continuation. Define the reduced boundary invariant as (η + dim ker D)/2 in ℝ/ℤ.

**Problem.** Take two compact spin fillings inducing the same oriented boundary metric, spin structure, and Hermitian bundle with unitary connection. Assume all data have product form near the boundary. Their integrals of the Dirac index density, the top-degree part of Â times the bundle’s Chern character, agree modulo integers.

**How the definition helps.** Our own argument uses that both integrals represent the same reduced boundary invariant modulo integers. The Atiyah–Patodi–Singer index theorem carries the work by identifying each difference with an integer index.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “as the boundary correction term for the index formula on a manifold with boundary”

**Sources:**

- [Michael F. Atiyah, Vijay K. Patodi and Isadore M. Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Index characters vanish without fixed points

**Remember:** Away from fixed points, the character has nothing to count.

*Makes the theorem clean to state or prove.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** Let a compact Lie group act smoothly on a closed manifold and its complex vector bundles. An equivariant elliptic operator commutes with the action and has invertible highest-order symbol away from zero cotangent vectors. Its index character at g is the trace of g on the kernel minus its trace on the cokernel.

**Problem.** If g fixes no point of the manifold, the index character at g vanishes.

**How the definition helps.** The character allows the fixed-point theorem to speak about a particular group element, rather than just the identity. The equivariant index theorem gives a sum over its fixed components. Our own example is the Euler operator on two points exchanged by an involution. Its ordinary index is two, while the trace of the exchange is zero.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “Moreover, one gets generalizations of the Lefschetz fixed-point theorem, with terms coming from fixed-point submanifolds of the group G.”

**Sources:**

- [Michael F. Atiyah and Graeme Segal, The Index of Elliptic Operators II (1968)](https://doi.org/10.2307/1970716)

### Positive scalar curvature kills the Dirac index

**Remember:** Positive scalar curvature leaves the spin Dirac operator no zero modes.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** On a closed even-dimensional spin manifold, the spinor bundle splits into positive and negative parts. The chiral Dirac operator differentiates sections from the positive part to the negative part. Its index subtracts the kernel dimension of its adjoint from its own kernel dimension. The index theorem identifies this integer with the Â genus, a characteristic number calculated from the tangent bundle.

**Problem.** A closed even-dimensional spin manifold that admits a metric of positive scalar curvature has zero Â genus.

**How the definition helps.** Our own argument represents the Â genus by a kernel count, so it suffices to exclude zero modes. The Lichnerowicz formula gives D² = ∇\*∇ + R/4, where R is scalar curvature and ∇ differentiates spinors. The first term is nonnegative, and the second has a positive minimum on the closed manifold. Both chiral kernels vanish. The index theorem identifies their dimension difference with the Â genus.

**nLab:** [Lichnerowicz formula](https://ncatlab.org/nlab/show/Lichnerowicz+formula). It says: “The crucial point of the formula is that it shows a scalar summand (i.e. 0th order derivative) proportional to the scalar curvature.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Quaternionic spinors force signature divisibility

**Remember:** Each quaternionic spinor dimension counts twice over the complex numbers.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** Use the chiral Dirac index on a closed spin four-manifold. Count its kernel and cokernel as quaternionic vector spaces, rather than as complex vector spaces. This keeps the extra symmetry of the spin representations in dimension four.

**Problem.** On a closed smooth spin four-manifold, the signature of the intersection form on second cohomology is divisible by 16.

**How the definition helps.** Counting quaternionic dimensions makes the complex Dirac index even because each quaternionic dimension contributes two complex dimensions. The two spinor bundles have quaternionic structures, and the Dirac operator respects them. The index and signature theorems identify the complex index with minus one eighth of the signature.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “In dimension 4 this result implies Rochlin's theorem that the signature of a 4-dimensional spin manifold is divisible by 16”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Spin makes Â integral

**Remember:** A Dirac index is an integer even when its characteristic formula uses fractions.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** The Â genus evaluates a rational polynomial in the tangent bundle’s Pontryagin classes on a closed oriented manifold. These classes measure how the tangent spaces fit together. A spin structure lifts the oriented orthonormal frame bundle to the double cover of its rotation group. In even dimensions it gives a Dirac operator from positive to negative spinors.

**Problem.** The Â genus of a closed spin manifold is an integer. The spin requirement excludes the complex projective plane, whose Â genus is −1/8.

**How the definition helps.** The operator definition gives a difference of two finite dimensions. The Atiyah–Singer index theorem identifies this integer with the characteristic number. Our own calculation of the counterexample uses Â = −p₁/24 in dimension four and Pontryagin number 3 on ℂP².

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “The Â genus is a rational number defined for any manifold, but is in general not an integer.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Topological indices ignore the embedding

**Remember:** Compare two embeddings after putting them in one larger Euclidean space.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** An elliptic symbol is the highest-order part of an operator, invertible at every nonzero cotangent vector. It defines a compactly supported K-theory class on the cotangent bundle, represented by bundles identified outside a compact set. A Euclidean embedding sends this class to one on the ambient cotangent bundle by the Thom construction in the normal directions. Bott periodicity identifies the resulting group with ℤ and gives the topological index.

**Problem.** The topological index of a symbol on a closed manifold does not depend on the chosen Euclidean embedding.

**How the definition helps.** Our own comparison puts both embeddings in one Euclidean product, where the index respects smooth deformations through embeddings. For embeddings i and j, first deform (i,0) to (i,j) by scaling j, then deform (i,j) to (0,j) by scaling i. The work lies in proving that the Thom construction respects composition, deformation, and the Bott identification.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “This map is independent of the embedding of X in Euclidean space.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Causal subtraction gives skew adjoints

**Remember:** Taking the adjoint swaps future and past.

*True by definition.* MSC 58J45 (Hyperbolic equations on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** Retarded and advanced Green operators solve a linear equation with forcing and restrict the response to the causal future and past, respectively. Green hyperbolicity requires these inverse operators for both the equation and its formal adjoint. Subtract the advanced operator from the retarded operator to define the causal propagator.

**Problem.** For a formally self-adjoint Green-hyperbolic operator on a globally hyperbolic spacetime, its causal propagator is formally skew adjoint. The adjoint identity is tested by integrating against compactly supported smooth sections.

**How the definition helps.** Taking the adjoint exchanges the two terms in the defining difference, which changes its sign. Our own explanation uses the separate Green operators to avoid computing the propagator’s integral kernel. The work is proving the exchange identity by integration by parts. Global hyperbolicity makes the overlap of the relevant future and past supports compact for compactly supported forcing.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “are formally adjoint differential operators, up to a sign”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes](https://doi.org/10.1007/s00220-014-2097-7)

### Heat traces recover area

**Remember:** At short times the heat trace first sees area.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds), 11F72. arXiv math.SP. Level 3: graduate.

**Definition.** On a closed oriented surface X of curvature −1, define the heat trace H(t) = ∑ exp(−tλ) for t &gt; 0. Sum over the eigenvalues λ of the nonnegative Laplacian, counting multiplicity.

**Problem.** As t decreases to zero, tH(t) tends to area(X)/(4π).

**How the definition helps.** The exponential weight turns the length terms in Selberg’s trace formula into rapidly decreasing Gaussians. In our own derivation, each length ℓ contributes a factor exp(−ℓ²/(4t)). The shortest length is positive, and the number of geodesics grows at most exponentially with length. Together these facts bound the total geodesic contribution. Integrating the identity term gives the stated limit.

**Wikipedia:** [Selberg trace formula](https://en.wikipedia.org/wiki/Selberg_trace_formula). It says: “By suitable choices of the test function, the trace formula yields asymptotic information about eigenvalues of the Laplacian”

**Sources:**

- [Dennis A. Hejhal, The Selberg Trace Formula for PSL(2,ℝ), volume I (1976).](https://doi.org/10.1007/BFb0079608)

### Almost conjugate subgroups preserve spectra

**Remember:** Equal class counts give equal dimensions of fixed eigenfunctions.

*Makes the theorem clean to state or prove.* MSC 58J53 (Isospectrality). arXiv math.SP. Level 3: graduate.

**Definition.** Let a finite group G act freely by isometries on a closed hyperbolic surface X. Call subgroups H and J almost conjugate if they meet each conjugacy class of G in equal numbers.

**Problem.** The two quotient surfaces have the same Laplace eigenvalues, including multiplicities.

**How the definition helps.** Equal class counts give identical subgroup averages of every function constant on conjugacy classes. Our own proof applies this fact to the trace of each group element on a Laplace eigenspace. Averaging the group actions projects onto the functions fixed by the subgroup. The trace of this projection counts its dimension. These fixed functions descend to exactly the eigenfunctions on the quotient.

**Wikipedia:** [Isospectral](https://en.wikipedia.org/wiki/Isospectral). It says: “are subgroups of G meeting each conjugacy class of G in the same number of elements”

**Sources:**

- [Toshikazu Sunada, Riemannian Coverings and Isospectral Manifolds (1985).](https://doi.org/10.2307/1971195)

### In smooth sets, every differential form comes from one universal form

**Remember:** A form on X is a map from X into the space of all forms.

*True by definition.* MSC 58A03 (Topos-theoretic approach to differentiable manifolds), 58A10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A smooth set is a sheaf on the site of Cartesian spaces ℝⁿ with smooth maps. Put simply, a smooth set says which maps from each ℝⁿ into it count as smooth, and these choices glue. The sheaf Ωⁿ, which sends ℝᵏ to the set of n-forms on ℝᵏ, is itself a smooth set. A differential n-form on any smooth set X is defined as a map X → Ωⁿ.

**Problem.** Each differential n-form on a smooth set X should be the pullback of one universal n-form along a map X → Ωⁿ. Forms should also make sense on mapping spaces and on other spaces that are not manifolds.

**How the definition helps.** Because forms on X are defined as maps into Ωⁿ, the statement 'every form is the pullback of the universal form' is the Yoneda lemma. The nLab calls it a big but useful tautology. The point of the definition is that, for n ≥ 1, Ωⁿ is not a diffeological space (a smooth set whose plots are determined by its points). Ωⁿ has only one point but many plots, that is, smooth maps from ℝᵏ into it. So only the larger category of smooth sets contains Ωⁿ. What does not hold by definition is that these forms agree with ordinary forms on manifolds. That uses the sheaf condition and the fact that manifolds are glued from Cartesian spaces.

**nLab:** [geometry of physics -- smooth sets](https://ncatlab.org/nlab/show/geometry+of+physics+--+smooth+sets), [smooth set](https://ncatlab.org/nlab/show/smooth+set). It says: “This statement is of course in a way a big tautology. Nevertheless it is a very useful tautology to make explicit.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos (2013), arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Covers with overlaps diffeomorphic to ℝⁿ make Čech nerves cofibrant

**Remember:** Every overlap is a copy of ℝⁿ, so every overlap is representable.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 18N40, 18F20. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A differentiably good open cover of a smooth manifold is an open cover in which every non-empty finite intersection is diffeomorphic to ℝⁿ. An ordinary good open cover only asks that these intersections be contractible.

**Problem.** The Čech nerve of a cover should be a cofibrant resolution of the manifold. The Čech nerve is the simplicial object whose level n is the disjoint union of the (n+1)-fold intersections of the cover. The model structure is the projective local model structure on simplicial presheaves on Cartesian spaces (the spaces ℝⁿ with smooth maps).

**How the definition helps.** With this definition, each level of the Čech nerve is a disjoint union (coproduct) of representable presheaves, and that gives cofibrancy at once. Here a representable presheaf is the presheaf of smooth maps into one fixed Cartesian space. The Čech nerve is then a split hypercover, and the characterization of cofibrant objects in the projective model structure applies. In our own reading, with only contractible intersections, cofibrancy is not automatic: a contractible open set need not be diffeomorphic to ℝⁿ, so it need not be representable. The real work moves into an existence theorem: every paracompact smooth manifold has such a cover. This was long a folk theorem, and it rests on geodesically convex neighbourhoods and on the fact that star-shaped open sets are diffeomorphic to ℝⁿ. The nLab cites FSS 2010, Prop. A.1 for a complete argument.

**nLab:** [good open cover](https://ncatlab.org/nlab/show/good+open+cover), [function algebras on infinity-stacks](https://ncatlab.org/nlab/show/function+algebras+on+infinity-stacks). It says: “The point is that with this definition, the Cech nerve C(U) ∈ \[ThCartSpᵒᵖ, sSet\]<sub>proj</sub> is cofibrant, by the characterization of cofibrant objects in the projective model structure.”

**Sources:**

- [Domenico Fiorenza, Urs Schreiber, Jim Stasheff, Čech cocycles for differential characteristic classes, Adv. Theor. Math. Phys. 16 (2012) 149–250, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### Diffeology gives orbit spaces a tangent space equal to the stratified one

**Remember:** Any quotient has plots, so any quotient has tangent spaces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57M60. arXiv math.DG. Level 4: research.

**Definition.** A diffeological space is a set with a chosen family of maps from open sets of ℝⁿ, called plots, that behave like smooth maps. Every quotient of a manifold has one, the quotient diffeology. The internal tangent space at a point is built from the plots through that point.

**Problem.** The orbit space of a proper Lie group action is usually not a manifold. One wants a tangent space at each orbit, including the singular orbits.

**How the definition helps.** Diffeology gives every quotient a tangent space by definition, so the theorem can be stated with no special construction. The work moves into computing it. The theorem shows that it equals the tangent space of the orbit-type stratum, the set of orbits with the same symmetry type. For ℝ divided by x ↦ −x, the tangent space at 0 is therefore zero (our own). The comparison with the stratified picture is the real content of the paper.

**Paper or page:** [The Structure of the Internal Tangent Space to a Point of the Orbit Space of a Manifold under a Proper Lie Group Action](https://arxiv.org/abs/2511.06415). It says: “the internal tangent space to \[x\]∈M/G viewed as a diffeological space with the quotient diffeology is isomorphic to the stratified tangent space to \[x\]∈M/G viewed as a stratified space with induced orbit-type stratification.”

**Sources:**

- [I. Cinzori, The Structure of the Internal Tangent Space to a Point of the Orbit Space of a Manifold under a Proper Lie Group Action, arXiv:2511.06415 (2025)](https://arxiv.org/abs/2511.06415)

### In derived manifolds, the cobordism cup product is always intersection

**Remember:** Derived manifolds remember how badly two submanifolds fail to meet transversally.

*Makes the theorem clean to state or prove.* MSC 58A05 (Differentiable manifolds, foundations), 14A30, 55N22. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A C∞-ring is a ring in which you can apply every smooth function ℝⁿ → ℝ, like the ring of smooth functions on a manifold. A derived smooth manifold is a space whose sheaf of functions is a homotopy C∞-ring instead of an ordinary one. Ordinary manifolds embed fully faithfully into derived ones. Homotopy pullbacks of A → X ← B always exist, also when A and B do not meet transversally.

**Problem.** In the cobordism ring, the class of the intersection of two submanifolds should be the cup product of their classes: \[A\] ⌣ \[B\] = \[A ∩ B\]. For ordinary manifolds this holds only after you make A and B transversal (meeting in general position).

**How the definition helps.** Derived intersections exist for every pair, so the formula needs no transversality. The nLab lists the wanted properties as a design criterion. These are a full embedding of manifolds, homotopy intersections for all pairs, agreement with ordinary intersections in the transversal case, and \[A\] ⌣ \[B\] = \[A ∩ B\] in the cobordism ring of X. Spivak's theorem says that derived smooth manifolds meet this criterion. Then you can drop the transversality condition in the Pontryagin–Thom construction, which relates cobordism classes to maps into Thom spaces. This is the smooth, cobordism-ring form of derived intersection theory. Building the category and proving the theorem is the hard part.

**nLab:** [derived smooth manifold](https://ncatlab.org/nlab/show/derived+smooth+manifold). It says: “By using derived smooth manifolds instead of ordinary smooth manifolds here, the condition that f be transversal to B could be dropped.”

**Sources:**

- [David I. Spivak, Derived smooth manifolds, Duke Math. J. 153 (2010), arXiv:0810.5174](https://arxiv.org/abs/0810.5174)

### A curl defined by the target measure describes all measure-preserving diffusions

**Remember:** Use the target measure itself to turn stationary currents into derivatives.

*Makes the theorem clean to state or prove.* MSC 58A10 (Differential forms in global analysis), 60J60, 53A45. arXiv math.PR, math.DG. Level 4: research.

**Definition.** Let P be a smooth positive measure on an n-dimensional manifold, used as a volume form. Contracting with P turns a field of k-vectors into a differential form of degree n − k. A bivector field is an antisymmetric tensor field with two vector slots. Its P-curl, or rotationnel, turns it into a form, applies the exterior derivative, and turns the result back.

**Problem.** Theorem 3.7 concerns a diffusion with drift X and noise fields Yᵢ, in the Stratonovich form of stochastic calculus. P is stationary exactly when, near each point, X is a P-curl plus ½ Σ (P-divergence of Yᵢ) Yᵢ. Theorem B.1 adds a term from de Rham cohomology, which measures closed forms that are not exact.

**How the definition helps.** The P-curl is built from the exterior derivative d, and d∘d = 0, so every P-curl has zero P-divergence (our own). This is why a curl term in the drift leaves P unchanged (our own). Conversely, a divergence-free current gives a closed form, which is exact near each point by the Poincaré lemma (our own). Globally a closed form need not be exact, and Theorem B.1 adds a term for this.

**Paper or page:** [A Unifying and Canonical Description of Measure-Preserving Diffusions](https://arxiv.org/abs/2105.02845v1), [A Unifying and Canonical Description of Measure-Preserving Diffusions](https://arxiv.org/abs/2105.02845v1). It says: “there is no need to introduce other structures such as a Riemannian metric, local coordinates, or a reference measure.”

**Sources:**

- [Alessandro Barp, So Takao, Michael Betancourt, Alexis Arnaudon, Mark Girolami, A Unifying and Canonical Description of Measure-Preserving Diffusions, arXiv:2105.02845 (2021)](https://arxiv.org/abs/2105.02845v1)

### Exterior derivative defined as boundary flux gives Stokes without continuous derivatives

**Remember:** Derivative as boundary flux per volume, so Stokes needs no continuous derivative.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 58A10 (Differential forms in global analysis), 26B20. arXiv math.DG, math.CA. Level 4: research.

**Definition.** In one variable, f′(x) = L exactly when (f(b) − f(a))/(b − a) tends to L as intervals \[a,b\] around x shrink. The paper states this as its Lemma 2, a boundary integral divided by a volume. It calls a form derivable when it has a derivative Dω in a matching flux sense (our reading). A form that is differentiable at a point is derivable there, and Dω = dω.

**Problem.** The usual Stokes theorem asks that the form be continuously differentiable. One wants it for forms that are only differentiable, as the fundamental theorem of calculus allows in one variable.

**How the definition helps.** A derivative defined from boundary integrals is already close to the statement of Stokes, so the proof needs no continuity of derivatives. The work moves into two results. One is a mean value equality for forms on blocks. The other is the theorem that Dω = dω where ω is differentiable. With these, Stokes holds whenever the integral of dω exists. The data set gives the one-variable case of the definition, so the higher-dimensional form is our reading (our own).

**Paper or page:** [The exterior derivative and the mean value equality in ℝⁿ](https://arxiv.org/abs/2510.00999), [The exterior derivative and the mean value equality in ℝⁿ](https://arxiv.org/abs/2510.00999), [The exterior derivative and the mean value equality in ℝⁿ](https://arxiv.org/abs/2510.00999). It says: “If ω is continuous on c(B) and differentiable on c(B̊), then ∫∂c ω = ∫c dω, whenever the right-hand side integral exists.”

**Sources:**

- [D. Fadel, H. N. Sá Earp and T. S. R. Silva, The exterior derivative and the mean value equality in ℝⁿ, arXiv:2510.00999 (2025)](https://arxiv.org/abs/2510.00999)

### Pullbacks of forms by Hölder maps give a simple Gromov non-embedding proof

**Remember:** Define pullbacks by approximation, and Hölder maps obey the smooth rules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A10 (Differential forms in global analysis), 53C17. arXiv math.DG, math.MG. Level 4: research.

**Definition.** The pullback f\*κ of a differential form κ by a map f normally needs derivatives of f. A map f is γ-Hölder when d(f(x), f(y)) ≤ C\|x − y\|ᵞ, and Lipschitz when γ = 1. For a γ-Hölder map f, the paper defines f\*κ as the limit of pullbacks by smooth or Lipschitz approximations of f. This limit exists when γ is large enough compared with the degree of the form and the smoothness of κ.

**Problem.** The Heisenberg group ℍⁿ is a space of dimension 2n+1 whose distance allows motion only along a distinguished family of directions. Gromov's theorem says that for m ≥ n+1, no embedding of ℝᵐ into ℍⁿ is γ-Hölder with γ &gt; (n+1)/(n+2). The paper's Theorem 8.1 proves this bound with a short proof, and the abstract calls it a generalization of Gromov's theorem.

**How the definition helps.** With pullbacks defined for Hölder maps, the proof can use the calculus of forms that smooth maps allow. The paper also proves a change of variables formula and a Stokes theorem for such maps. The contact form of ℍⁿ is the one-form that vanishes on the allowed directions (our own). The obstruction comes from pulling back this form and its derivative (our own). The analytic work moves into the existence of the limit pullback.

**Paper or page:** [Hölder continuous mappings, differential forms and the Heisenberg groups](https://arxiv.org/abs/2503.11506), [Hölder continuous mappings, differential forms and the Heisenberg groups](https://arxiv.org/abs/2503.11506). It says: “The main applications are in the setting of the Heisenberg groups, where we provide a simple proof of a generalization of the Gromov non-embedding theorem”

**Sources:**

- [P. Hajłasz, J. Mirra and A. Schikorra, Hölder continuous mappings, differential forms and the Heisenberg groups, arXiv:2503.11506 (2025)](https://arxiv.org/abs/2503.11506)

### Jet pullbacks classify formal solutions

**Remember:** A pullback collects exactly the compatible formal derivatives.

*True by definition.* MSC 58A20 (Jets in global analysis). arXiv math.DG. Level 4: research.

**Definition.** An infinite jet records formal derivatives of every order at a point. An equation selects a space E of allowed jets. To prolong it, pair a jet of the unknown with a jet of data taking values in E. Keep the pair when differentiating the first jet formally gives the same repeated derivatives as including the second in the ambient jet space.

**Problem.** Every parametrized family of formal solutions factors uniquely through the universal family over the infinite prolongation.

**How the definition helps.** The pullback definition packages the compatibility conditions into one space, so each compatible pair determines a unique map into it. The usual description imposes the equation and all its differentiated equations separately. In our own explanation, the work is identifying families of formal solutions with pairs of maps having the same repeated derivative data.

**Paper or page:** [Synthetic geometry of differential equations: I. Jets and comonad structure](https://arxiv.org/abs/1701.06238v1). It says: “Every parametrized family of formal solutions of this PDE factors uniquely through a universal one”

**Sources:**

- [Igor Khavkine and Urs Schreiber, Synthetic geometry of differential equations: I. Jets and comonad structure](https://arxiv.org/abs/1701.06238v1)

### Constant rank along flows makes involutive singular distributions integrable

**Remember:** Involutive is not enough; the rank must also stay constant along flows.

*Rules out counterexamples. Confidence: medium.* MSC 58A30 (Vector distributions (subbundles of the tangent bundles)), 53C12. arXiv math.DG. Level 4: research.

**Definition.** A singular distribution D assigns to each point a subspace of the tangent space, and its dimension may change from point to point. It is involutive if the bracket of two vector fields in D is again in D. It is integrable if through every point passes a submanifold whose tangent spaces are given by D.

**Problem.** For distributions of constant rank, Frobenius says that involutive means integrable. For distributions whose rank changes, one wants a condition that gives the same conclusion.

**How the definition helps.** The rank condition rules out a jump in dimension along a curve inside a leaf, so involutivity is then enough. The standard counterexample is the span of ∂ₓ and φ(x)∂ᵧ on the plane (our own). Here φ is smooth, zero for x ≤ 0 and positive for x &gt; 0 (our own). This distribution is involutive, but its rank jumps from 1 to 2 along the x-axis (our own). So no integral manifold passes through the origin, and the theorem must exclude it (our own). The Stefan–Sussmann theorem lists this condition with equivalent ones, such as adapted charts at every point. The paper extends the theorem to manifolds with boundary, for distributions that contain vectors transverse to the boundary.

**Paper or page:** [A Stefan-Sussmann theorem for normal distributions on manifolds with boundary](https://arxiv.org/abs/2109.04845). It says: “The following are equivalent. D is integrable. D is involutive and has constant rank along the integral curves of local D-sections.”

**Sources:**

- [D. Perrella, D. Pfefferlé and L. Stoyanov, A Stefan-Sussmann theorem for normal distributions on manifolds with boundary, arXiv:2109.04845 (2021)](https://arxiv.org/abs/2109.04845)

### Atlas-defined stratified spaces have products, so fiber bundles can be defined

**Remember:** Charts multiply easily, so stratified bundles become possible.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A35 (Stratified sets), 55R55. arXiv math.DG, math.GT. Level 4: research.

**Definition.** A stratified space is a space cut into manifolds of different dimensions, called strata, that fit together in a controlled way. Thom–Mather spaces describe this fit by control data, which are tubular neighbourhoods with compatible projections and distance functions. A smooth atlas stratified space instead uses charts with smooth stratified changes of chart, as for manifolds.

**Problem.** One wants fiber bundles whose fibers and base are stratified spaces, such as singular algebraic varieties. A bundle needs the product of two such spaces to be such a space.

**How the definition helps.** An atlas definition is local, so products of charts are charts, and products and bundles come almost for free (our own). The paper then proves that the new class coincides with the Thom–Mather class. Thom–Mather spaces admit smooth stratified atlases, and smooth atlas stratified spaces admit control data. So nothing is lost by the change of definition. The analytic work on the signature operator, a differential operator whose index is the signature, stays hard.

**Paper or page:** [Smooth atlas stratified spaces, K-Homology Orientations, and Gysin maps](https://arxiv.org/abs/2505.14952), [Smooth atlas stratified spaces, K-Homology Orientations, and Gysin maps](https://arxiv.org/abs/2505.14952). It says: “We introduce smooth atlas stratified spaces. We show that this class is closed under cartesian products; consequently, it is possible to define fiber bundles of smooth atlas stratified spaces.”

**Sources:**

- [P. Albin, M. Banagl and P. Piazza, Smooth atlas stratified spaces, K-Homology Orientations, and Gysin maps, arXiv:2505.14952 (2025)](https://arxiv.org/abs/2505.14952)

### Plotwise triviality survives pullback

**Remember:** Compose a test plot with the base map to test the pulled-back bundle.

*True by definition.* MSC 58A40 (Differential spaces). arXiv math.DG. Level 4: research.

**Definition.** A diffeological space specifies smooth parametrizations called plots. Test the bundle on plots with domains diffeomorphic to Euclidean spaces. Each pullback must be a product with the group, respecting its action. Any two points in one fiber must differ by a unique group element that depends smoothly on the pair.

**Problem.** Pulling a diffeological principal bundle back along a smooth map gives another principal bundle. Pullback assigns to each new base point the fiber over its image.

**How the definition helps.** In our own proof, pulling back first along a base map and then along a plot gives the pullback along their composite. The composite is a plot, so the resulting bundle is trivial. Our own argument also uses that the smooth map giving unique group transport pulls back to the new fibers. The source proves the equivalence of this plotwise test with the definition by a smooth quotient and a principal group action.

**Paper or page:** [Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4). It says: “the pullback p₀∗P is trivial”

**Sources:**

- [Emilio Minichiello, Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4)

### Maps of graded manifolds are detected by probes with one ordinary point

**Remember:** One ordinary point with formal coordinates can probe the graded directions.

*Makes the theorem clean to state or prove.* MSC 58A50 (Supermanifolds and graded manifolds), 18A22. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A ℤ₂ⁿ-manifold has coordinates graded by n-tuples of bits with a corresponding sign rule. A graded point has only one ordinary point but can still carry formal coordinates of nonzero degree. The restricted functor of points records maps from these probes, with smooth structure on each space of maps.

**Problem.** The restricted functor of points is fully faithful. This means that its natural transformations with the required smoothness come from unique maps of the graded manifolds.

**How the definition helps.** The graded probes retain coordinate information that an ordinary point cannot see. In our own words, they record values of formal coordinates instead of discarding them. The theorem still needs the smoothness condition on transformations. The work is to prove that such transformations reconstruct genuine maps.

**Paper or page:** [The Schwarz-Voronov Embedding of ℤ₂ⁿ-Manifolds](https://arxiv.org/abs/1906.09834v2). It says: “We show that it is sufficient to consider ℤ₂ⁿ-points, i.e., trivial ℤ₂ⁿ-manifolds for which the reduced manifold is just a single point, as 'probes' when employing the functor of points.”

**Sources:**

- [Andrew James Bruce, Eduardo Ibarguengoytia, Norbert Poncin, The Schwarz-Voronov Embedding of ℤ₂ⁿ-Manifolds, arXiv:1906.09834v2 (2020), SIGMA 16 (2020), 002, 47 pages](https://arxiv.org/abs/1906.09834v2)

### On supermanifolds, integrate integral forms instead of top-degree forms

**Remember:** On a supermanifold, integrate against a basis of 1-forms, not a top power.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A50 (Supermanifolds and graded manifolds), 58C35. arXiv math.DG, math-ph. Level 4: research.

**Definition.** A supermanifold has odd coordinates θ besides the usual ones, and odd coordinates anticommute. On a supermanifold, a volume element is a class of local bases of 1-forms, not a top-degree form. An integral form (the page says 'integrable form') is a pair of such a volume element and a multivector.

**Problem.** Define integration of differential forms on supermanifolds, where top-degree forms do not exist.

**How the definition helps.** The page notes that integration needs only a form that is locally the wedge of a basis of 1-forms. This matters because, for an odd coordinate θ, dθ ∧ dθ is not zero. So wedge powers never stop, and there is no top degree. Integral forms, built from such bases and multivectors, give a working integration theory. On NQ-supermanifolds (graded supermanifolds with an odd vector field Q with Q² = 0), this leads to the BV formalism, the Batalin–Vilkovisky method for gauge theories.

**nLab:** [integration over supermanifolds](https://ncatlab.org/nlab/show/integration+over+supermanifolds). It says: “apparently for integration it is not really essential that a form is a top power, what is rather essential is that it is, locally, the wedge product of a basis of 1-forms.”

**Sources:**

- [Edward Witten, Notes On Supermanifolds and Integration (2012), arXiv:1209.2199](https://arxiv.org/abs/1209.2199)

### Symmetric multiple vector bundles are exactly the graded bundles, by full linearization

**Remember:** Separate the weighted directions, then remember how they can be permuted.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A50 (Supermanifolds and graded manifolds), 58A32. arXiv math.DG. Level 4: research.

**Definition.** A graded bundle assigns positive integer weights to fiber coordinates. Full linearization spreads these weights across several vector bundle directions. A symmetric multiple vector bundle comes with compatible maps that permute those directions.

**Problem.** Full linearization and diagonalization give an equivalence of categories between graded bundles of degree k and symmetric k-fold vector bundles. The symmetry maps, indexed by the symmetric group, are part of the data.

**How the definition helps.** The permutation maps encode how the separate linear directions fit together. In our own words, a weight-two coordinate gives rise to a coordinate linear in each of two directions. The work moves to constructing the linearization and recovering the graded bundle and its maps from the symmetry.

**Paper or page:** [Polarisation of Graded Bundles](https://arxiv.org/abs/1512.02345v2). It says: “We fully characterise the image of the full linearisation functor and show that we obtain a subcategory of k-fold vector bundles consisting of symmetric k-fold vector bundles equipped with a family of morphisms indexed by the symmetric group Sₖ.”

**Sources:**

- [Andrew James Bruce, Janusz Grabowski, Mikolaj Rotkiewicz, Polarisation of Graded Bundles, arXiv:1512.02345v2 (2016), SIGMA 12 (2016), 106, 30 pages](https://arxiv.org/abs/1512.02345v2)

### A local addition makes the space of smooth maps a manifold

**Remember:** A point plus a small tangent vector gives a nearby point, smoothly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds), 46T05. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A local addition on a manifold M is a smooth way to add a small tangent vector to a point. Formally, it is a smooth map η from a neighbourhood of the zero section of the tangent bundle TM to M, with η(0ₚ) = p. Also, the map v ↦ (π(v), η(v)) must be a diffeomorphism onto a neighbourhood of the diagonal in M × M. Here π sends a tangent vector to its base point.

**Problem.** Take a compact manifold N and a manifold M, possibly infinite-dimensional, that has a local addition. Then the space C∞(N, M) of smooth maps from N to M is a smooth manifold.

**How the definition helps.** The local addition turns small vector fields along a map into nearby maps, and this gives the charts. Near a map g : N → M, take a section f of the pullback bundle g\*TM, that is, a tangent vector at g(x) for each x in N. Then η ∘ f is a map from N to M near g. This gives a chart from a convenient vector space of sections (the kind of locally convex space that Kriegl and Michor use for calculus in infinite dimensions). The same recipe with N a single point gives charts of M itself, so one construction gives the charts of M and of the mapping spaces. The existence of a local addition is an assumption; for finite-dimensional M it comes from the exponential map of a Riemannian metric. The analysis of the chart changes is done in Kriegl and Michor.

**nLab:** [local addition](https://ncatlab.org/nlab/show/local+addition). It says: “if M is a manifold (possibly infinite dimensional) admitting a local addition, and if N is a compact manifold (possibly with boundary) then C<sup>∞</sup>(N,M) can be given the structure of a smooth manifold”

**Sources:**

- [Andreas Kriegl, Peter W. Michor, The Convenient Setting of Global Analysis, AMS Mathematical Surveys and Monographs 53, 1997 (§42)](https://doi.org/10.1090/surv/053)

### Dirac weights detect polynomial growth

**Remember:** The Dirac eigenvalues are the group weights, with repetitions.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** On a discrete group take a real weight ℓ with finite absolute sublevel sets and bounded differences under each fixed left translation. Let D multiply square-summable functions by ℓ. Call D finitely summable if the sum of (1 + ℓ(g)²)⁻ˢ over all group elements converges for some s &gt; 0.

**Problem.** Finite summability holds exactly when the number of group elements with \|ℓ(g)\| ≤ R grows at most polynomially in R.

**How the definition helps.** The diagonal definition turns the spectral trace directly into a sum over the group (our own explanation). Each element counted at radius R contributes at least (1 + R²)⁻ˢ, giving a polynomial bound. Conversely, group the weights between consecutive powers of two. With twice s greater than the growth exponent, the resulting geometric bound converges.

**Paper or page:** [A Note on Twisted Crossed Products and Spectral Triples](https://arxiv.org/abs/2110.05345). It says: “is finitely summable iff G has polynomial growth w.r.t. the proper translation bounded function ℓ.”

**Sources:**

- [A Note on Twisted Crossed Products and Spectral Triples](https://arxiv.org/abs/2110.05345)

### First order forces additive weights

**Remember:** A multiplication operator commuting with every right translation has a constant multiplier.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Let ℓ be a real function on a discrete group, with finite absolute sublevel sets and bounded differences under each left translation. Let D multiply by ℓ on square-summable functions, and let L and R denote left and right translations. The first-order condition requires each commutator \[D,L\] = DL − LD to commute with every R.

**Problem.** Assume complex conjugation followed by group inversion gives a real structure, so ℓ under inversion equals either ℓ everywhere or −ℓ everywhere. The first-order condition holds exactly when ℓ is constant or an additive homomorphism.

**How the definition helps.** Right translations force each left translation difference of ℓ to be constant (our own calculation). Evaluating at the identity e shows that ℓ − ℓ(e) is additive. An even weight then has zero additive part, while an odd weight has zero constant part. Both resulting forms satisfy the commutator test. On the integers the even weight ℓ(n) = \|n\| fails it.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “satisfies the first order condition if and only if ℓ is either a constant or a homomorphism.”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)

### Product Dirac operators add summability exponents

**Remember:** The Pauli matrices cancel the mixed terms in the square.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Take self-adjoint operators D and E with compact resolvent, meaning their resolvents are compact. On separate Hilbert space factors form the closure of D ⊗ 1 ⊗ σ + 1 ⊗ E ⊗ τ. The two self-adjoint 2 × 2 matrices σ and τ square to the identity and satisfy στ = −τσ.

**Problem.** Call an operator p-summable when the eigenvalues of (1 + D²)⁻¹ raised to the power p/2 have finite sum. If D is p-summable and E is q-summable for positive p and q, their product operator is (p + q)-summable.

**How the definition helps.** Anticommutation cancels the mixed terms in the square, reducing the trace estimate to scalar eigenvalue sums (our own explanation). For eigenvalues x and y, the denominator 1 + x² + y² dominates both 1 + x² and 1 + y². Splitting the exponent into p/2 and q/2 bounds the double sum by the two finite sums multiplied together, up to matrix multiplicity. The paper applies this operator estimate to its crossed-product construction.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “is (p+q)-summable.”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)

### Local additions make spaces of smooth maps manifold-like

**Remember:** The space carries its own charts: each tangent vector v points to η(v).

*True by definition. Confidence: medium.* MSC 58D15 (Manifolds of mappings), 46T10. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A local addition on a generalized smooth space X is a smooth map η : TX → X with three properties. It sends each zero vector to its base point. Together with the projection TX → X, it identifies TX with an open neighbourhood of the diagonal in X × X. Its derivative at each zero vector is the identity. A locally additive space is a smooth space with a local addition, and a smooth space S is smoothly compact if C∞(S, U) is open in C∞(S, X) for every open U ⊆ X.

**Problem.** Show that the space of smooth maps C∞(S, X) is again manifold-like. Its tangent vectors should be maps S → TX that lie over the given map.

**How the definition helps.** Good spaces of maps give most of a local addition on C∞(S, X) for free, and the definition of smoothly compact gives the rest. The categories of generalized smooth spaces are cartesian closed (they have well-behaved spaces of maps). So applying C∞(S, −) to η gives almost a local addition on C∞(S, X). One piece is the isomorphism T C∞(S, X) ≅ C∞(S, TX); the local addition gives it by lifting families of tangent vectors to curves. The other piece is that C∞(S, V) is open in C∞(S, X × X), where V ⊆ X × X is the open neighbourhood of the diagonal from the definition. Here the page openly takes 'the mathematician's defence': smoothly compact spaces are defined as exactly those S for which this holds. So the openness step is true by definition, and the remaining work is to decide which spaces are smoothly compact.

**nLab:** [locally additive space](https://ncatlab.org/nlab/show/locally+additive+space). It says: “Let X be a locally kinematic space and S a smoothly compact space. Then C∞(S,X) is again a locally kinematic space.”

**Sources:** none listed. No primary source with a working link was found.

### Asking nondegeneracy only across orbits makes Morse theory work on stacks

**Remember:** Invariant functions are flat along orbits, so test only across them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58H05 (Pseudogroups and differentiable groupoids), 57R70. arXiv math.DG. Level 4: research.

**Definition.** A Lie groupoid morphism to ℝ is a smooth function on the base that is constant on orbits, so its critical points form whole orbits. It is Morse if its Hessian is nondegenerate in the directions normal to each critical orbit. Two Lie groupoids are Morita equivalent when they describe the same quotient, or differentiable stack.

**Problem.** An invariant function is constant along orbits, so its critical points are never isolated when orbits have positive dimension. The usual Morse condition then always fails. One wants a Morse theory for quotients such as orbifolds.

**How the definition helps.** Testing the Hessian only in normal directions ignores the directions in which an invariant function must be flat. This condition does not change under Morita equivalence, so it defines Morse functions on the stack itself. The paper then proves a groupoid Morse lemma and Morse inequalities for certain separated stacks. What stays hard is the topology: the inequalities need extra conditions on the stack.

**Paper or page:** [Morse theory on Lie groupoids](https://arxiv.org/abs/2207.07594), [Morse theory on Lie groupoids](https://arxiv.org/abs/2207.07594). It says: “In this paper we introduce Morse Lie groupoid morphisms and study their main properties. We show that this notion is Morita invariant which gives rise to a well defined notion of Morse function on differentiable stacks.”

**Sources:**

- [C. Ortiz and F. Valencia, Morse theory on Lie groupoids, arXiv:2207.07594 (2022)](https://arxiv.org/abs/2207.07594)

### Differentiable stacks make Morita equivalence of Lie groupoids plain equivalence

**Remember:** A groupoid is known by its torsors, as an algebra by its modules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58H05 (Pseudogroups and differentiable groupoids), 18F20. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A Lie groupoid is a groupoid whose objects and arrows form manifolds, with smooth structure maps. A differentiable stack is a stack on smooth manifolds that a Lie groupoid G presents: it sends a test manifold to the groupoid of principal G-bundles over it. Two Lie groupoids give the same stack exactly when they are Morita equivalent.

**Problem.** Find the right notion of equivalence for Lie groupoids. With it, a quotient such as M/G by an action that is not free should be an invariant of the geometry, not of the chosen groupoid.

**How the definition helps.** On the stack, Morita equivalence becomes plain equivalence of stacks. For Lie groupoids, Morita equivalence is defined by bibundles (spaces with compatible actions of both groupoids), by reasoning from homotopy theory. Lie groupoids with bibundles form a category equivalent to differentiable stacks (Blohmann, Carchedi). In our reading, this is why a statement made about the stack needs no separate check of Morita invariance. An example of such a statement is "this is an invariant of the orbifold". The nLab says only that the stack picture gives a direct way to recognise the right notion of equivalence.

**nLab:** [differentiable stack](https://ncatlab.org/nlab/show/differentiable+stack), [Lie groupoid](https://ncatlab.org/nlab/show/Lie+groupoid). It says: “This means that looking at a Lie groupoid in terms of the stack it presents provides a direct way to recognizing the right notion of equivalence of these objects.”

**Sources:**

- [Kai Behrend, Ping Xu, Differentiable stacks and gerbes, J. Symplectic Geom. 9 (2011) 285–341, arXiv:math/0605694](https://arxiv.org/abs/math/0605694)

### Stacky Lie groupoids make Lie's third theorem true for Lie algebroids

**Remember:** If the quotient is not a manifold, keep it as a stack.

*Makes the theorem clean to state or prove.* MSC 58H05 (Pseudogroups and differentiable groupoids), 18F20. arXiv math.DG. Level 4: research.

**Definition.** A Lie algebroid is a vector bundle with a Lie bracket on its sections and a map to the tangent bundle; it generalizes a Lie algebra. A stacky (étale) Lie groupoid is a groupoid object whose space of arrows may be a differentiable stack instead of a manifold. A differentiable stack is a stack on manifolds that a Lie groupoid presents; it keeps a bad quotient as a geometric object. For a Lie algebroid A, one takes A-paths (paths in A that match paths in the base through the map to the tangent bundle) modulo A-homotopy, and keeps the quotient as a stack.

**Problem.** Lie's third theorem says that every finite-dimensional Lie algebra integrates to a Lie group. We want the same for Lie algebroids: every Lie algebroid should integrate to a global object.

**How the definition helps.** When the space of arrows may be a stack, every Lie algebroid integrates. Not every Lie algebroid integrates to a Lie groupoid. Crainic and Fernandes found the obstruction in monodromy groups that come from π₂ of the leaves (the second homotopy groups of the leaves of the foliation that A defines). The quotient of A-paths by A-homotopies is always a topological groupoid, but it is a manifold only when the obstruction vanishes. The A-homotopies form a foliation of finite codimension, so the quotient always exists as a differentiable stack. Tseng and Zhu showed that, in the nLab's words, étale stacky Lie groupoids correspond one-to-one with Lie algebroids. The integrability problem does not go away; it becomes the question of when the stack is a manifold.

**nLab:** [Lie integration](https://ncatlab.org/nlab/show/Lie+integration). It says: “This correspondence provides a positive answer to Lie's third theorem for Lie algebroids.”

**Sources:**

- [Hsian-Hua Tseng, Chenchang Zhu, Integrating Lie algebroids via stacks, Compositio Math. 142 (2006) 251–270, arXiv:math/0405003](https://arxiv.org/abs/math/0405003)
- [Marius Crainic, Rui Loja Fernandes, Integrability of Lie brackets, Ann. of Math. 157 (2003) 575–620, arXiv:math/0105033](https://arxiv.org/abs/math/0105033)

### Symbol exactness makes de Rham elliptic

**Remember:** Contract against a vector that the covector sends to one.

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.DG, math.AP. Level 4: research.

**Definition.** In a differential complex, each operator kills the image of the preceding operator. Its leading symbol at a covector keeps the highest-order derivatives and replaces differentiation in each coordinate by the corresponding covector component. The complex is elliptic if, at every nonzero covector, each symbol image equals the next symbol kernel, including the zero spaces at the ends.

**Problem.** The de Rham complex, the sequence of exterior derivatives, is elliptic on any smooth manifold without boundary.

**How the definition helps.** The symbol definition reduces ellipticity to exactness of multiplication by a covector ξ using the exterior product (our own). Choose a vector v with ξ(v) = 1, and write ι for insertion of v into a form (our own). The identity ι(ξ ∧ ω) + ξ ∧ ιω = ω exhibits every kernel element as an image (our own). For a single operator, the same symbol test requires an invertible symbol (our own).

**nLab:** [elliptic chain complex](https://ncatlab.org/nlab/show/elliptic+chain+complex). It says: “Let X be a compact smooth manifold. Then the de Rham complex is an elliptic complex.”

**Sources:** none listed. No primary source with a working link was found.

### Witten deformation preserves de Rham cohomology

**Remember:** Undo the exponential weight to recover the original complex.

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.DG, math.SP. Level 4: research.

**Definition.** For a smooth real function f, set dₜ = exp(−tf) d exp(tf). Here d is the exterior derivative, and the exponentials multiply forms pointwise. Equivalently, add t df ∧ ω to dω when differentiating a form ω.

**Problem.** The Witten differential dₜ squares to zero. Its cohomology, the kernel modulo the preceding image, is isomorphic to de Rham cohomology.

**How the definition helps.** Writing dₜ as a conjugate of d shows at once that its square vanishes (our own). Multiplication by exp(−tf) carries kernels and images of d to those of dₜ (our own). The hard work in Witten’s method is estimating the spectrum of the Laplacian built from dₜ (our own).

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “is a vector space isomorphism for all j = 0, ⋯, n.”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982)](https://doi.org/10.4310/jdg/1214437492)

### Boundary indices add by spectral flow

**Remember:** Counting crossings turns a cut in time into a sum.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J30, 58J32. arXiv math.SP. Level 4: research.

**Definition.** Take self-adjoint operators A(t) with compact resolvent and common dense domain W on a compact time interval. Assume A varies continuously differentiably in operator norm from W, with its graph norm, to the Hilbert space. Use D = d/dt − iA(t) with initial values in the negative spectral space and final values in the nonnegative spectral space. Spectral flow counts net crossings through zero toward positive values, using finite spectral windows.

**Problem.** Assume each such closed boundary operator has closed range and finite-dimensional kernel and cokernel. Its index, the kernel dimension minus the cokernel dimension, adds under subdivision.

**How the definition helps.** Our own argument adds the crossing counts on adjacent time intervals. Ronge proves that each index equals its crossing count under the stated hypothesis. This avoids trying to glue bases for the kernels and cokernels at the cut.

**Paper or page:** [Index Theory for Globally Hyperbolic Spacetimes](https://arxiv.org/abs/1910.10452v1). It says: “ind((D\|\[r,t\])ₐₚₛ) = ind((D\|\[r,s\])ₐₚₛ) + ind((D\|\[s,t\])ₐₚₛ)”

**Sources:**

- [Lennart Ronge, Index Theory for Globally Hyperbolic Spacetimes (2019)](https://arxiv.org/abs/1910.10452v1)
- [Koen van den Dungen and Lennart Ronge, The APS-index and the spectral flow (2021)](https://files.ele-math.com/articles/oam-15-87.pdf)

### Callias potentials restore Fredholmness

**Remember:** A potential that dominates at infinity keeps zero out of the essential spectrum.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J05. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Let D be a Dirac operator on a finite-rank Hermitian bundle over a complete Riemannian manifold. Choose a smooth self-adjoint potential Φ whose commutator \[D,Φ\] = DΦ − ΦD acts by bundle maps. Require Φ² ≥ (‖\[D,Φ\]‖ + c)I outside a compact set, with c &gt; 0 and pointwise operator norm. Form the self-adjoint doubled operator with zero diagonal and off-diagonal entries D + iΦ and D − iΦ.

**Problem.** The doubled operator has closed range and finite-dimensional kernel and cokernel. If the estimate holds everywhere, the doubled operator is invertible. In the odd symmetric case its parity index, the kernel dimension modulo two, therefore vanishes.

**How the definition helps.** Our own explanation uses the domination estimate to bound the square of the doubled operator below outside a compact set. The Fredholm proof uses local compactness to handle the compact set. In our own calculation, domination everywhere gives the bound globally and rules out a kernel for the operator and its adjoint. Our own counterexample is −i d/dx on ℝ, which is elliptic but has zero in its essential spectrum.

**Paper or page:** [On the Z<sub>2</sub>-valued index of elliptic odd symmetric operators on non-compact manifolds](https://arxiv.org/abs/2403.13999v3). It says: “If the essential support of F is empty, then indτ ℬ = 0.”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, On the ℤ₂-valued index of elliptic odd symmetric operators on non-compact manifolds (2024)](https://doi.org/10.1007/s40316-024-00228-5)

### Compact resolvent alone does not suffice

**Remember:** A lower bound makes the two negative spectral spaces finite.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J32. arXiv math.SP. Level 4: research.

**Definition.** On a compact time interval, let A(t) be self-adjoint with compact resolvent and common dense domain W. Assume A varies continuously differentiably in operator norm from W, with its graph norm, to the Hilbert space. Require A(t) ≥ cI for one real c independent of t. For D = d/dt − iA(t), take initial values in the negative spectral space and final values in the nonnegative spectral space.

**Problem.** This closed boundary operator has closed range and finite-dimensional kernel and cokernel. Their dimension difference equals spectral flow, the net number of eigenvalues crossing zero toward positive values.

**How the definition helps.** Our own explanation uses the common lower bound to make each negative spectral space finite-dimensional. Ronge identifies the boundary index with the index of a map between the negative endpoint spaces. He proves equality with spectral flow and gives a compact-resolvent family whose boundary operator fails to be Fredholm without the lower bound.

**Paper or page:** [Index Theory for Globally Hyperbolic Spacetimes](https://arxiv.org/abs/1910.10452v1). It says: “If A is uniformly bounded from below and sp(A) is discrete with only finite multiplicities, Dₐₚₛ is Fredholm”

**Sources:**

- [Lennart Ronge, Index Theory for Globally Hyperbolic Spacetimes (2019)](https://arxiv.org/abs/1910.10452v1)
- [Koen van den Dungen and Lennart Ronge, The APS-index and the spectral flow (2021)](https://files.ele-math.com/articles/oam-15-87.pdf)

### Equivariant index forms pull back

**Remember:** One equivariant form gives the index form for every associated family.

*Makes the theorem clean to state or prove.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 19L10. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Let a compact Lie group G preserve a geometric family of Dirac operators on closed fibers, including its metrics and connections. Its equivariant Bismut superconnection combines the fiber operators with differentiation in parameter and group directions. At scale t &gt; 0, its Chern character is the graded trace of the heat operator of its square. The graded trace subtracts the odd trace from the even trace.

**Problem.** Every principal G-bundle with connection produces an associated family by twisting the original family by that bundle. The Chern–Weil map sends the equivariant Chern character at scale t to the associated family’s Bismut Chern character at the same scale.

**How the definition helps.** One equivariant form specifies the index forms for all associated families through the Chern–Weil map, which substitutes the chosen connection and its curvature. Wedeen proves that this substitution gives the geometric superconnection of the associated family. Our own comparison uses that the construction respects the heat operator and graded trace.

**Paper or page:** [Equivariant Chern Weil Forms and The Families Index Theorem](https://arxiv.org/abs/2208.05521v1). It says: “f<sub>S</sub><sup>\\ast</sup> \\operatorname{ch}(\\mathbb B<sup>t<sub>G</sub></sup>) = \\operatorname{ch}(\\mathbb B<sup>t<sub>Q</sub></sup>)”

**Sources:**

- [Richard Wedeen, Equivariant Chern Weil Forms and The Families Index Theorem (2022)](https://arxiv.org/abs/2208.05521v1)

### Flat twists give bordism characters

**Remember:** Subtract equal ranks and the local index term disappears.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J28. arXiv math.DG, math-ph. Level 4: research.

**Definition.** On a closed odd-dimensional Riemannian spin manifold, twist the spin Dirac operator by each of two flat Hermitian bundles of equal rank. Flat means the unitary connection has zero curvature. For each operator D, put ξ(D) = (η(D) + dim ker D)/2, where η is the regularized difference between positive and negative eigenvalue counts. Subtract the second ξ from the first in ℝ/ℤ.

**Problem.** This difference defines a homomorphism from spin bordism with the two specified flat bundles to ℝ/ℤ. Here a bordism must extend the spin structure and both flat connections, and addition means disjoint union.

**How the definition helps.** Our own argument uses the equal ranks and zero curvatures to cancel the two local index forms. The Atiyah–Patodi–Singer theorem then says the remaining difference is an integer. Our own explanation puts additivity into the direct sum of Dirac spectra under disjoint union.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “as the boundary correction term for the index formula on a manifold with boundary”

**Sources:**

- [Michael F. Atiyah, Vijay K. Patodi and Isadore M. Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Spectral cutoffs handle jumping kernels

**Remember:** A cutoff need only avoid its own level, not every crossing at zero.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J35. arXiv math-ph, math.AT. Level 4: research.

**Definition.** Take a degree-zero 1\|1-dimensional Euclidean field theory with smooth index bundles in the sense of Berwick-Evans. Its partition form Z is the graded trace of heat evolution, subtracting the odd trace from the even trace. For λ &gt; 0, restrict to parameters where λ avoids the spectrum of the squared generator. The eigenspaces below λ then form a smooth finite-dimensional bundle and define a cutoff partition form.

**Problem.** On this open set, Z minus the cutoff partition form equals the exterior derivative of a differential form. The two closed forms therefore represent the same de Rham cohomology class.

**How the definition helps.** The cutoff retains a bundle of constant rank locally, even when eigenvalues cross zero. Our own example uses a two-state odd supercharge with off-diagonal entries t, whose kernel jumps at t = 0. The cutoff theorem gives the discarded contribution as the exterior derivative of an eta form.

**Paper or page:** [The families analytic index for 1∣1-dimensional Euclidean field theories](https://arxiv.org/abs/2303.09207v1). It says: “The partition function of E and the partition function of the λ-cutoff theory are related by”

**Sources:**

- [Daniel Berwick-Evans, The families analytic index for 1∣1-dimensional Euclidean field theories (2023)](https://arxiv.org/abs/2303.09207v1)

### The heat supertrace counts index

**Remember:** Subtract the odd trace and every positive eigenvalue cancels.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.SP. Level 4: research.

**Definition.** Split the space of sections into two parts, called even and odd. For an operator preserving the parts and having a trace on each, its supertrace is the even trace minus the odd trace. The ordinary trace adds those two traces.

**Problem.** Let D be a self-adjoint Dirac operator exchanging even and odd sections on a compact Riemannian manifold without boundary. For t &gt; 0, the supertrace of exp(−tD²) equals the index of the even-to-odd part of D. This index counts even zero modes minus odd zero modes, where a zero mode is a vector killed by D.

**How the definition helps.** The subtraction cancels equal heat contributions from the two sides of each positive eigenvalue of D² (our own). D gives a bijection between those sides because its square is a nonzero scalar there (our own). The unmatched zero eigenspaces give the difference of kernel dimensions (our own). The work goes into proving that the heat operator has a trace (our own).

**Paper or page:** [Some Modifications of Getzler's Grading technique](https://arxiv.org/abs/2201.00379v1). It says: “In particular, the supertrace of the heat kernel is constant in t.”

**Sources:**

- [H. P. McKean Jr. and I. M. Singer, Curvature and the eigenvalues of the Laplacian (1967)](https://doi.org/10.4310/jdg/1214427880)
- [Peter B. Gilkey, Curvature and the eigenvalues of the Laplacian for elliptic complexes (1973)](https://doi.org/10.1016/0001-8708(73)90119-9)

### Eta phases sew along determinant lines

**Remember:** On a manifold with boundary, the phase lives in a line.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J52. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Take a compact odd-dimensional Riemannian spin manifold with a product collar, where the metric splits into normal and boundary parts. For its spin Dirac operator D, a self-adjoint spectral boundary condition gives the scalar exp(πi(η + dim ker D)). Here η is the regularized count of positive eigenvalues minus negative eigenvalues. This scalar represents an element of the dual boundary determinant line, built from top exterior powers of the two boundary spinor kernels.

**Problem.** Cut a closed Riemannian spin manifold of odd dimension along a separating hypersurface with a product metric near the cut. Pair the two boundary line elements using opposite orientations. The result equals the original phase.

**How the definition helps.** The determinant line pairs the two boundary values without a choice of basis. Our own comparison is that two scalar eta computations would require compatible boundary choices. Dai and Freed prove that the line element is independent of those choices and that the contraction gives the uncut phase.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “These sections, given by the exponentiated eta invariant, satisfy the sewing law.”

**Sources:**

- [Xianzhe Dai and Daniel S. Freed, η-invariants and determinant lines (1994)](https://doi.org/10.1063/1.530747)

### Free symmetries simplify eta variation

**Remember:** No fixed points and no crossings mean no change in eta.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Let a finite group act freely on a closed odd-dimensional spin manifold, preserving its metric and spin structure with a chosen spin lift. For each nonzero eigenvalue λ of the spin Dirac operator, weight its sign by the trace of h on its eigenspace. Multiply each term by \|λ\|⁻ˢ, sum for large real s, and continue analytically to s = 0. The value there is the equivariant eta invariant at h.

**Problem.** For a nonidentity group element h, this invariant stays constant along every smooth path of invariant metrics with positive scalar curvature.

**How the definition helps.** Inserting h restricts the local variation formula to points fixed by h, and the free action leaves that set empty. Our own argument uses the spinor square formula to exclude zero eigenvalues throughout the path. The analytic work lies in the equivariant variation formula.

**Paper or page:** [Equivariant Spectral Flow for Families of Dirac-type Operators](https://arxiv.org/abs/2403.00575v3). It says: “assume moreover that G acts freely on M and h ≠ e. Then, we have ηₕ(D₀) = ηₕ(D₁).”

**Sources:**

- [Peter Hochs and Aquerman Yanes, Equivariant spectral flow for families of Dirac-type operators (2025)](https://doi.org/10.2140/akt.2025.10.189)

### Reduced eta stays smooth

**Remember:** The kernel term makes a zero mode agree with either sign in the phase.

*Rules out counterexamples.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Let D be the spin Dirac operator on a closed odd-dimensional Riemannian spin manifold. Its eta invariant η counts positive minus negative eigenvalues by analytic continuation. Define ξ = (η + dim ker D)/2 in ℝ/ℤ.

**Problem.** For a smooth family of such Dirac operators, exp(2πiξ) is smooth even where the kernel changes dimension.

**How the definition helps.** Our own calculation gives one crossing mode the same phase, −1, below, at, and above zero. For example, the circle operators −i d/dx + a acquire one zero mode at a = 0. Their unreduced eta invariants have distinct one-sided limits. Our own argument uses a local spectral cutoff to remove finitely many small modes. The smoothness theorem for the eta invariant with a cutoff carries the analytic work.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “In fact, this is a smooth section of the determinant line bundle as X varies.”

**Sources:**

- [Xianzhe Dai and Daniel S. Freed, η-invariants and determinant lines (1994)](https://doi.org/10.1063/1.530747)

### Half spectral flow retains parity

**Remember:** Counting only half the loop preserves crossing parity.

*Makes the theorem clean to state or prove.* MSC 58J30 (Spectral flows), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Take a smooth periodic family A(t) of self-adjoint operators with compact resolvent and common dense domain with its graph norm. Assume smoothness in operator norm from this domain to the Hilbert space. A conjugate-linear isometry τ preserves the domain, satisfies τ² = −1, and obeys τA(t)τ⁻¹ = A(−t). For period 2π and invertible A(0) and A(π), define half spectral flow as the signed spectral flow from 0 to π modulo two.

**Problem.** The complex dimension of the kernel of d/dt + A(t) on periodic sections equals the half spectral flow modulo two.

**How the definition helps.** In our own explanation, each upward crossing on one half has a downward partner on the other half. The full signed count vanishes, but counting only the first half retains parity. The index theorem identifies this parity with that of the periodic kernel.

**Paper or page:** [The Z<sub>2</sub>-valued spectral flow of a symmetric family of Toeplitz operators](https://arxiv.org/abs/2409.15534v3). It says: “is equal to the half-spectral flow”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, The ℤ₂-valued spectral flow of a symmetric family of Toeplitz operators (2026)](https://doi.org/10.4171/jst/605)

### Higher spectral flow telescopes

**Remember:** The common reference makes the middle endpoint cancel.

*True by definition.* MSC 58J30 (Spectral flows), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Consider a path of self-adjoint elliptic families on closed fibers over a compact base. A spectral section projects onto all sufficiently positive modes and kills all sufficiently negative modes. Choose a continuous reference section P along the path and endpoint sections Q₀ and Q₁. Define higher spectral flow as \[Q₁ − P₁\] − \[Q₀ − P₀\] in K-theory, the group of formal differences of vector bundles.

**Problem.** When two paths admit a common reference on their concatenation, their higher spectral flows add if their chosen middle endpoint section agrees.

**How the definition helps.** Our own calculation cancels the two middle difference classes because both use the same endpoint and reference projections. Each bracket compares finite-dimensional parts of two projections after removing their common high-energy part. This replaces following individual eigenvalues across the parameter space. The work lies in constructing spectral sections when possible and proving independence of the reference.

**Paper or page:** [Equivariant Toeplitz index theory on odd-dimensional manifolds with boundary](https://arxiv.org/abs/2101.00193v3). It says: “The H-equivariant higher spectral flow of the pairs (D₀,Q₀) and (D₁,Q₁) can also be computed via an equivariant generalised total spectral section”

**Sources:**

- [Johnny Lim and Hang Wang, Equivariant Toeplitz index theory on odd-dimensional manifolds with boundary (2022)](https://doi.org/10.1007/s00209-022-03091-8)

### Spectral flow adds across joins

**Remember:** Add the local rank changes to count the net crossings.

*True by definition.* MSC 58J30 (Spectral flows). arXiv math.SP, math.FA. Level 4: research.

**Definition.** Consider a norm-continuous path of bounded self-adjoint operators with closed range and finite-dimensional kernel, called Fredholm operators. Divide the path into pieces, choosing a cutoff a &gt; 0 on each piece. The spectrum must avoid ±a, with only finitely many eigenvalues between them, counted with multiplicity, and no other spectrum there. Spectral flow sums the changes from start to finish in the number of eigenvalues in \[0, a) on each piece.

**Problem.** Spectral flow along two joined paths is the sum of their spectral flows.

**How the definition helps.** The rank changes already form a sum, so adjoining paths just joins two sums (our own). Choose a subdivision containing the join (our own). This avoids choosing individual eigenvalue paths (our own). The work lies in proving the local spectral cuts exist and that the sum is independent of their choice (our own).

**nLab:** [spectral flow](https://ncatlab.org/nlab/show/spectral+flow). It says: “by spectral flow one refers to the change of spectrum of an operator as that operator continuously varies with a parameter.”

**Sources:**

- [John Phillips, Self-Adjoint Fredholm Operators and Spectral Flow (1996)](https://doi.org/10.4153/CMB-1996-054-4)

### Stochastic completeness rules out unprescribed heat

**Remember:** No lost heat means no unprescribed heat.

*Rules out counterexamples.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.DG. Level 4: research.

**Definition.** On a Riemannian manifold, evolve heat on expanding bounded regions with boundary temperature zero. Their limiting kernel gives the minimal heat evolution. Call the manifold stochastically complete when this evolution preserves the constant function one.

**Problem.** Take a smooth, connected, noncompact Riemannian manifold without boundary whose negative Laplacian is subcritical, meaning it admits a positive Green function. Stochastic completeness holds exactly when every bounded classical heat solution with zero initial data vanishes on every finite time interval.

**How the definition helps.** Subtracting the minimal evolution of one from one measures lost heat and gives a bounded solution with zero initial data. In our own explanation, comparison on bounded regions bounds the magnitude of any such solution by its supremum times this loss. On the open half-line, the missing endpoint absorbs heat. Our own example there has loss erfc(x/(2√t)), where erfc is the complementary error function.

**Paper or page:** [Stochastic completeness and L¹-Liouville property for second-order elliptic operators](https://arxiv.org/abs/2203.06493v1). It says: “has a bounded solution in M × (0, T), then necessarily v = 0.”

**Sources:**

- [Debdip Ganguly, Yehuda Pinchover, and Prasun Roychowdhury, Stochastic completeness and L¹-Liouville property for second-order elliptic operators](https://arxiv.org/abs/2203.06493v1)

### A bracket-aware principal symbol is invertible exactly for maximally hypoelliptic operators

**Remember:** Keep the leading terms in the directions that the fields and their brackets generate.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds), 35H10. arXiv math.AP. Level 4: research.

**Definition.** Fix vector fields X₁, …, Xₘ on a manifold that satisfy Hörmander's condition: together with their repeated commutators they span every tangent space. The authors define a principal symbol for any linear differential operator that takes these fields and their commutators into account. The ordinary principal symbol keeps only the highest-order terms in all directions equally.

**Problem.** A differential operator is maximally hypoelliptic exactly when its new principal symbol is invertible. Maximally hypoelliptic means that Pu controls all derivatives of u along words in the fields up to the order of P. This confirms a conjecture of Helffer and Nourrigat.

**How the definition helps.** The new symbol gives a regularity test that can be stated as invertibility, in the same way that ellipticity is invertibility of the ordinary symbol. Our own example is Hörmander's sum of squares X₁² + … + Xₘ², whose ordinary symbol vanishes in directions the commutators supply. The theorem generalizes Hörmander's sum of squares theorem. Proving it needs a full pseudodifferential calculus adapted to the fields.

**Paper or page:** [A pseudodifferential calculus for maximally hypoelliptic operators and the Helffer-Nourrigat conjecture](https://arxiv.org/abs/2201.12060v2). It says: “We show that for an arbitrary differential operator, its principal symbol is invertible if and only if the operator is maximally hypoelliptic.”

**Sources:**

- [Iakovos Androulidakis, Omar Mohsen, Robert Yuncken, A pseudodifferential calculus for maximally hypoelliptic operators and the Helffer-Nourrigat conjecture, arXiv:2201.12060 (2022)](https://arxiv.org/abs/2201.12060v2)

### Spectral and heat-kernel fractional Laplacians differ only through lost heat mass

**Remember:** If heat is conserved, the two definitions agree.

*True by definition. Confidence: medium.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds), 35R11, 58J35. arXiv math.AP, math.DG. Level 4: research.

**Definition.** The spectral fractional Laplacian applies λ ↦ λˢ to the spectrum of −Δ, which equals a weighted time integral of f − exp(tΔ)f, where exp(tΔ) is the heat flow. A heat-kernel definition instead integrates (f(x) − f(y)) against a kernel built from the heat kernel pₜ(x, y). The mass-loss function at x and t is 1 − ∫ pₜ(x, y) dy, the heat that escapes to infinity. Stochastic completeness means this function is always zero.

**Problem.** On a complete Riemannian manifold, the paper compares spectral and heat-kernel definitions of the fractional and logarithmic Laplacians. Their discrepancy is governed by the mass-loss function. So the two definitions agree on stochastically complete manifolds.

**How the definition helps.** Writing both definitions through the heat semigroup turns the comparison into a one-line calculation. The difference at x is f(x) times a time integral of the mass loss at x. This calculation, and the exact form of the heat-kernel definition used here, are our own reading. The quote states that the discrepancy is governed by the mass-loss function and hence by stochastic completeness. Proposition 1.9 of the paper links the limit of the discrepancy term to the non-explosion probability. The paper's harder work is the pointwise integral formulas under a lower Ricci bound and the estimates on hyperbolic space.

**Paper or page:** [Logarithmic Laplacian on General Riemannian Manifolds](https://arxiv.org/abs/2506.19311v1). It says: “We further compare spectral versus heat kernel definitions of both fractional and logarithmic Laplacians, showing that their discrepancy is governed by the mass loss function and hence by stochastic completeness.”

**Sources:**

- [Rui Chen, Logarithmic Laplacian on General Riemannian Manifolds, arXiv:2506.19311v1 (2025)](https://arxiv.org/abs/2506.19311v1)

### Determinant sections detect noninvertibility

**Remember:** A finite determinant tells where its infinite-dimensional operator fails to invert.

*True by definition.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Consider a smooth family of index-zero Cauchy–Riemann operators D on a complex bundle over a closed Riemann surface. These operators specify complex differentiation in the antiholomorphic direction. Use the line (det ker D)\* ⊗ det coker D, where det denotes top exterior power and the star denotes duality. Local finite-dimensional reductions give square matrices whose determinants define a section of this line.

**Problem.** The determinant section vanishes precisely where an operator in the family is not invertible.

**How the definition helps.** Our own argument uses a finite-dimensional square matrix in each local model. In our own comparison, the operator and matrix are invertible at exactly the same parameters. The work goes into the reduction and the determinant gluing theorem, which make these local sections agree.

**nLab:** [determinant line bundle](https://ncatlab.org/nlab/show/determinant+line+bundle). It says: “Now one has a family ℒᴅ depending on D, which determines a holomorphic line bundle over 𝒜.”

**Sources:**

- [Daniel Quillen, Determinants of Cauchy-Riemann operators over a Riemann surface (1985)](https://doi.org/10.1007/BF01086022)

### Zeta regularization defines the determinant of a Laplacian

**Remember:** Differentiate the eigenvalue zeta function at zero to get a determinant.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.SP, math.DG. Level 4: research.

**Definition.** Let A be a positive self-adjoint operator with eigenvalues a₁, a₂, …. Its zeta function ζA(s) = Σ aₙ⁻ˢ converges for large Re s and continues analytically to s = 0. The zeta-regularized determinant of A is exp(−ζA′(0)).

**Problem.** The product of the eigenvalues of a Laplacian diverges, so its determinant has no direct meaning. Ray and Singer defined the analytic torsion of a manifold from such determinants. Cheeger and Müller later proved that it equals the Reidemeister torsion, an invariant computed from a triangulation (our own).

**How the definition helps.** For a finite matrix, −ζ′(0) is exactly the sum of the logarithms of the eigenvalues, so the definition extends the ordinary determinant (our own). For a Laplacian the infinite product diverges, but the zeta function still has a value of its derivative at 0. This gives a finite number with good invariance properties. So statements about determinants of operators, such as analytic torsion and one-loop path integrals, can be made. The hard work moves into theorems that compare the regularized value with other invariants, such as the Cheeger–Müller theorem (our own).

**Wikipedia:** [Zeta function regularization](https://en.wikipedia.org/wiki/Zeta_function_regularization). It says: “Another method defines the possibly divergent infinite product a₁a₂.... to be exp(−ζ′A(0)).”

**Sources:**

- [D. B. Ray and I. M. Singer, R-Torsion and the Laplacian on Riemannian manifolds, Advances in Mathematics 7 (1971)](https://doi.org/10.1016/0001-8708(71)90045-4)
