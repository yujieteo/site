### Compatible charts give each atlas a unique completion

**Remember:** Include every chart that agrees with the original atlas.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth atlas covers a manifold by coordinate charts whose changes of coordinates are smooth in both directions. Its completion collects all charts that make smooth coordinate changes with the original charts wherever they overlap.

**Problem.** Every smooth atlas extends to exactly one maximal smooth atlas.

**How the definition helps.** Collecting all compatible charts specifies the candidate at once, instead of searching for a maximal extension (our own). Near each overlap point, the change between two new charts factors through an original chart, so it is smooth (our own). Any maximal extension must contain every chart in this collection (our own).

**Wikipedia:** [Differentiable manifold](https://en.wikipedia.org/wiki/Differentiable_manifold). It says: “A differentiable atlas determines a maximal differentiable atlas, consisting of all charts which are differentiably compatible with the given atlas.”

**Sources:** none listed. No primary source with a working link was found.

### Curve velocities give tangent spaces their dimension

**Remember:** A chart turns curve classes into ordinary vectors.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations). arXiv math.DG. Level 2: later undergraduate.

**Definition.** At a point, identify smooth curves through it when their velocities at time zero agree in a chart. A tangent vector is one such class of curves.

**Problem.** At each point of a smooth n-dimensional manifold, any chart identifies its tangent space linearly with ℝⁿ.

**How the definition helps.** Using curve velocities avoids constructing a basis of differential operators to compute the dimension (our own). A short straight line in the chart realizes any velocity, and equal velocities represent the same vector (our own). Add and scale velocities in coordinates (our own). The chain rule makes changes of coordinates linear and invertible, so these operations agree between charts (our own).

**nLab:** [tangent bundle](https://ncatlab.org/nlab/show/tangent+bundle). It says: “to the set of tangent vectors at x”

**Paper or page:** [Tangent Space is Vector Space](https://proofwiki.org/wiki/Tangent_Space_is_Vector_Space). It says: “Then Tₘ M is a real vector space of dimension n”

**Sources:** none listed. No primary source with a working link was found.

### Defining cotangent vectors as I/I² makes the product rule automatic

**Remember:** A covector is a function modulo second-order terms.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 14A15. arXiv math.DG, math.AG. Level 2: later undergraduate.

**Definition.** Let Iₓ be the ideal of smooth functions that vanish at the point x, and Iₓ² the span of products of two such functions. The cotangent space at x is the quotient Iₓ/Iₓ². The differential of f at x is the class of f − f(x).

**Problem.** At x, the differential satisfies d(fg) = f(x) dg + g(x) df. In algebraic geometry, the analogous quotient of the maximal ideal of the local ring by its square gives the Zariski cotangent space.

**How the definition helps.** In this definition, the product rule is a one-line identity, which is our own computation. Write fg − f(x)g(x) = f(x)(g − g(x)) + g(x)(f − f(x)) + (f − f(x))(g − g(x)). The last term lies in Iₓ², so it vanishes in the quotient. What stays hard is the isomorphism with the dual of the tangent space, which needs Hadamard's lemma (our own summary).

**Wikipedia:** [Cotangent space](https://en.wikipedia.org/wiki/Cotangent_space). It says: “the cotangent space can be defined as the quotient space T\*ₓM = Iₓ/Iₓ² by showing that the two spaces are isomorphic to each other.”

**Sources:** none listed. No primary source with a working link was found.

### Half-space charts give the boundary its own smooth structure

**Remember:** Restrict each half-space chart to its flat face.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R40. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth manifold with boundary uses coordinate charts in a closed half-space. Chart changes and their inverses must have smooth local extensions to open Euclidean sets. Boundary points have last coordinate zero.

**Problem.** The nonempty boundary of a smooth n-dimensional manifold with boundary is a smooth manifold of dimension n − 1 without boundary.

**How the definition helps.** Restricting half-space charts to their flat faces gives boundary charts directly, without constructing a separate atlas (our own). The inverse function theorem prevents a chart change from sending an interior point to the face (our own). Applying this to the inverse shows that both changes preserve the face, where their smooth extensions still restrict smoothly (our own).

**nLab:** [manifold with boundary](https://ncatlab.org/nlab/show/manifold+with+boundary). It says: “A manifold with boundary is a topological space that is locally isomorphic either to an ℝⁿ or to a half-space”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Hausdorff and paracompact manifolds have partitions of unity

**Remember:** Separate distinct points and refine every open cover locally finitely.

*Rules out counterexamples. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 54D20. arXiv math.DG, math.GT. Level 2: later undergraduate.

**Definition.** Here a manifold is locally homeomorphic to ℝⁿ, and distinct points have disjoint neighborhoods. Every open cover must admit a locally finite open refinement.

**Problem.** Every open cover of a smooth manifold admits a subordinate smooth partition of unity. Its nonnegative functions have locally finite supports, each inside a cover member, and sum to one.

**How the definition helps.** The line with two origins violates the separation condition. In our own summary, paracompactness and separation give a locally finite refinement by coordinate neighborhoods with smaller neighborhoods still covering. Choose subordinate smooth bumps positive on the smaller neighborhoods and divide by their sum.

**nLab:** [topological manifold](https://ncatlab.org/nlab/show/topological+manifold), [partition of unity](https://ncatlab.org/nlab/show/partition+of+unity), [line with two origins](https://ncatlab.org/nlab/show/line+with+two+origins). It says: “Paracompact smooth manifolds admit locally finite smooth partitions of unity subordinate to any open cover”

**Sources:**

- [Ryszard Engelking, General Topology, Sigma Series in Pure Mathematics 6, Heldermann (1989), Chapter 5 (paracompact spaces)](https://www.heldermann.de/SSPM/SSPM06/sspm06.htm)

### Outward vectors give boundary orientations without choosing a metric

**Remember:** Place the outward vector first.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R19. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An orientation consistently selects positive ordered bases in tangent spaces. In coordinates where the manifold has last coordinate nonnegative, an outward vector at its boundary has negative last component. A boundary basis is positive if placing an outward vector first gives a positive basis of the manifold.

**Problem.** An oriented smooth manifold of dimension at least two induces an orientation on its boundary. This orientation does not depend on a metric or on the choice of outward vector.

**How the definition helps.** Using any outward vector avoids choosing a perpendicular unit vector with a metric (our own). Outward vectors differ by positive scaling and addition of a boundary tangent vector, which preserve the determinant sign (our own). Half-space charts provide smooth local choices, so the signs specify an orientation (our own).

**nLab:** [orientation](https://ncatlab.org/nlab/show/orientation). It says: “two bases are considered equivalent if the transformation matrix from one to the other has positive determinant”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Product charts make smoothness a componentwise test

**Remember:** Check the two components in two charts.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The product of two smooth manifolds uses the product topology and pairs of coordinate charts. Each product chart gives the coordinates in the two factors side by side.

**Problem.** A map into a product of smooth manifolds is smooth exactly when both component maps are smooth.

**How the definition helps.** Using paired charts reduces the usual smoothness test to two ordinary coordinate tests (our own). A Euclidean map is smooth exactly when each component is smooth (our own). Checking this for the changes of coordinates shows that the product charts fit together smoothly (our own).

**nLab:** [product manifold](https://ncatlab.org/nlab/show/product+manifold). It says: “its underlying topological space is the product topological space and its charts are the Cartesian product of the given charts”

**Sources:** none listed. No primary source with a working link was found.

### Second countability lets smooth functions determine maps of manifolds (Milnor's exercise)

**Remember:** A countable base keeps real characters tied to points.

*Rules out counterexamples.* MSC 58A05 (Differentiable manifolds, foundations), 54D70, 26E10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A second-countable smooth manifold here is a finite-dimensional Hausdorff smooth manifold whose topology has a countable base.

**Problem.** For finite-dimensional Hausdorff second-countable smooth manifolds M and N, every unital ℝ-algebra map C∞(N) → C∞(M) is pullback along a unique smooth map M → N.

**How the definition helps.** Second countability excludes discrete manifolds of measurable cardinality, where nonprincipal countably complete ultrafilters supply extra real characters. In our own argument, Milnor’s character theorem identifies each evaluation after a unital algebra homomorphism with evaluation at a unique source point. This gives the underlying map, and smooth coordinate functions localized by bump functions show it is smooth.

**nLab:** [embedding of smooth manifolds into formal duals of R-algebras](https://ncatlab.org/nlab/show/embedding+of+smooth+manifolds+into+formal+duals+of+R-algebras), [topological manifold](https://ncatlab.org/nlab/show/topological+manifold). It says: “If one drops the second countability assumption on manifolds, allowing sets of connected components to have the cardinality of a measurable cardinal”

**Sources:**

- [John Milnor, James Stasheff, Characteristic Classes, Problem 1-C, Annals of Mathematics Studies 76, Princeton University Press (1974)](https://doi.org/10.1515/9781400881826)
- [Eduardo Dubuc, Sur les modèles de la géométrie différentielle synthétique, Cahiers de Topologie et Géométrie Différentielle Catégoriques 20 (1979) 231–279, Prop. 0.7](http://www.numdam.org/item?id=CTGDC_1979__20_3_231_0)

### Tangent vectors as derivations give the chain rule without charts

**Remember:** A tangent vector is whatever obeys the product rule at a point.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a smooth manifold M, TₓM consists of the ℝ-linear maps D:C∞(M) → ℝ satisfying D(fg) = g(x)D(f) + f(x)D(g) for all f,g.

**Problem.** Define the differential of a smooth map φ by dφₓ(D)(f) = D(f ∘ φ). Then the chain rule d(ψ ∘ φ)ₓ = dψ\_φ(x) ∘ dφₓ holds.

**How the definition helps.** In our own calculation, both sides applied to D and tested on f equal D(f ∘ ψ ∘ φ). Associativity of function composition proves the identity.

**Wikipedia:** [Tangent space](https://en.wikipedia.org/wiki/Tangent_space). It says: “While the definition via the velocity of curves is intuitively the simplest, it is also the most cumbersome to work with.”

**Sources:** none listed. No primary source with a working link was found.

### Velocity coordinates make the tangent map smooth

**Remember:** Record the point and its velocity in the same chart.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A tangent bundle collects all the tangent vectors of a manifold, keeping each vector paired with its base point. In its bundle charts, record the base coordinates and the velocity in those coordinates.

**Problem.** The derivative of a smooth map defines a smooth map between the tangent bundles.

**How the definition helps.** Velocity coordinates turn the derivative defined using curves into ordinary matrix multiplication (our own). The output records the image point and the matrix of first derivatives times the input velocity (our own). Both depend smoothly on the inputs (our own). The chain rule makes the velocity coordinates agree under chart changes (our own).

**nLab:** [tangent bundle](https://ncatlab.org/nlab/show/tangent+bundle). It says: “and then gluing these local constructions together via transition functions”

**Sources:** none listed. No primary source with a working link was found.

### With tangent vectors as classes of curves, the chain rule is associativity

**Remember:** Push a curve forward by composing it with f.

*True by definition.* MSC 58A05 (Differentiable manifolds, foundations). arXiv math.DG. Level 2: later undergraduate.

**Definition.** At x, consider smooth curves γ defined near zero with γ(0) = x. Two curves represent the same tangent vector when their coordinate velocities at zero agree in a chart at x. For smooth f, its differential sends \[γ\] to \[f ∘ γ\].

**Problem.** For smooth maps f: X → Y and g: Y → Z, d(g ∘ f) = dg ∘ df. So differentiation is a functor on smooth manifolds.

**How the definition helps.** Both composite differentials give the class of g ∘ f ∘ γ. The identity map preserves every class. In our own check, the ordinary chain rule makes these operations independent of the chart and representative.

**nLab:** [chain rule](https://ncatlab.org/nlab/show/chain+rule). It says: “If one thinks of a tangent vector v ∈ T<sub>x</sub> X to be an equivalence class of a smooth path γ<sub>v</sub> : \[−ε,ε\] → X, for some ε &gt; 0, with γ(0) = x, then the chain rule is the associativity”

**Sources:** none listed. No primary source with a working link was found.

### A radial integral gives the Poincaré lemma on star-shaped sets

**Remember:** Pull back along radial segments, insert the time direction, and integrate.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** An open set is star-shaped about a if every segment from a to a point of the set stays inside. Pull a form back along H(t,x) = a + t(x − a). Define K by inserting the time direction first and integrating from t = 0 to t = 1.

**Problem.** If a smooth form ω of positive degree on this set is closed, meaning dω = 0, then d(Kω) = ω.

**How the definition helps.** The radial integral supplies the unknown form directly, without solving for its coefficients (our own). The homotopy formula identifies dK + Kd with the final pullback minus the initial pullback. The final map is the identity, and the constant initial map kills every positive-degree form (our own). The formula itself requires the fundamental theorem of calculus (our own).

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “an explicit formula for a form λ with dλ = ω is given by”

**Sources:** none listed. No primary source with a working link was found.

### Closed forms give the same line integral along deformed paths

**Remember:** Stokes measures the change in the integral by the derivative on the swept strip.

*Rules out counterexamples.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A 1-form α is closed when its exterior derivative dα vanishes, a local condition. A smooth deformation with fixed endpoints moves one path into another without moving the start or finish.

**Problem.** The integrals of a smooth closed 1-form along two paths agree if a smooth deformation connects the paths and keeps both endpoints fixed.

**How the definition helps.** Closedness removes the term that measures the change of the integral during the deformation (our own). Stokes’s theorem identifies that change with the integral of dα over the swept square, since the endpoint edges stay fixed (our own). For α = x dy, the upper and lower semicircles from (1,0) to (−1,0) deform into each other in the plane (our own). Their integrals differ by π, the area of the unit disk (our own).

**nLab:** [closed differential form](https://ncatlab.org/nlab/show/closed+differential+form). It says: “is called closed if the de Rham differential d ∶ Ωᵖ(X) → Ωᵖ⁺¹(X) sends it to zero”

**Sources:** none listed. No primary source with a working link was found.

### Defining cube boundaries as signed face sums makes ∂∂ = 0 automatic

**Remember:** Each face of a face occurs twice, with opposite signs.

*True by definition. Confidence: medium.* MSC 58A10 (Differential forms in global analysis), 55N10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth k-cube is a smooth map from \[0,1\]ᵏ into the manifold. Its boundary sums the restrictions to faces xᵢ = a with coefficient (−1)ⁱ⁺ᵃ, for 1 ≤ i ≤ k and a ∈ {0,1}. Extend this operation linearly to finite integer sums of cubes.

**Problem.** For every chain c of smooth cubes, the boundary of the boundary of c is zero.

**How the definition helps.** In our own calculation, fixing two different coordinates in either order gives the same face. Removing the earlier coordinate lowers the later index by one. The two coefficients therefore have opposite signs and cancel.

**Paper or page:** [Theorem 5.5. (The boundary of the boundary is empty)](https://venhance.github.io/napkin/Napkin.pdf). It says: “∂² = 0, in the sense that for any k-chain c we have ∂²(c) = 0.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin, Theorem 5.5 on Stokes’ theorem](https://venhance.github.io/napkin/Napkin.pdf)

### Differential forms turn the classical integral theorems into one theorem

**Remember:** Integrate the form on the boundary and its exterior derivative inside.

*Makes the theorem clean to state or prove.* MSC 58A10 (Differential forms in global analysis), 26B20. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth differential k-form assigns an alternating k-linear functional to each tangent space, with smooth coefficients in every chart.

**Problem.** Let Ω be an oriented n-manifold with boundary and ω a compactly supported (n−1)-form on Ω. Then the integral of ω over ∂Ω equals the integral of dω over Ω. The fundamental theorem of calculus, Green's theorem, the Kelvin–Stokes theorem and the divergence theorem are its cases in dimensions 1, 2 and 3.

**How the definition helps.** The generalized Stokes theorem pairs a boundary integral with an integral of the exterior derivative. In our own explanation, choosing forms of the appropriate degrees recovers each classical formula.

**Wikipedia:** [Generalized Stokes theorem](https://en.wikipedia.org/wiki/Generalized_Stokes_theorem). It says: “is a statement about the integration of differential forms on manifolds, which both simplifies and generalizes several theorems from vector calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero top forms give a global test for orientability

**Remember:** A top form gives every tangent basis a sign.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A volume form on an n-dimensional manifold is a smooth n-form that is nonzero at every point. Declare an ordered tangent basis positive when the form evaluates to a positive number on it.

**Problem.** A positive-dimensional smooth manifold is orientable exactly when it has a volume form. On a connected orientable manifold, the volume form and its negative give the two orientations.

**How the definition helps.** One volume form assigns signs to all ordered tangent bases, replacing separate sign choices in overlapping charts (our own). Conversely, an orientation gives local volume forms that are positive on the same bases (our own). Combine them using smooth nonnegative weights that sum to one, called a partition of unity (our own). On a connected manifold the ratio of two volume forms is continuous and never zero, so its sign stays constant (our own).

**nLab:** [volume form](https://ncatlab.org/nlab/show/volume+form). It says: “A volume form defines an orientation on X, the one relative to which it is positive definite.”

**Sources:** none listed. No primary source with a working link was found.

### One exterior derivative explains two zero identities

**Remember:** Gradient, curl, and divergence are successive uses of the same derivative.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** In Euclidean three-space, represent a vector F by its dot-product form, v ↦ F · v, or its flux form, (u,v) ↦ det(F,u,v). The exterior derivative d takes a function to its gradient’s dot-product form and a dot-product form to its curl’s flux form. Differentiating a flux form gives divergence times the usual volume form.

**Problem.** In ℝ³, the curl of a smooth gradient is zero. The divergence of the curl of a smooth vector field is also zero.

**How the definition helps.** Both identities now say that applying d twice gives zero (our own). This replaces two coordinate calculations with one cancellation of equal mixed derivatives and the identification of the three vector operators (our own).

**Paper or page:** [Curl of Gradient is Zero](https://proofwiki.org/wiki/Curl_of_Gradient_is_Zero), [Divergence of Curl is Zero](https://proofwiki.org/wiki/Divergence_of_Curl_is_Zero). It says: “curl grad U = 𝟎”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Chapter 5, The Classical Theorems](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Signed volume shows why curl reverses sign under reflection

**Remember:** Reflection keeps dot products and reverses signed volumes.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** In oriented Euclidean three-space, let the dot-product form α send u to F · u. Define curl by dα(u,v) = det(curl F,u,v), where d is the exterior derivative and the determinant measures signed volume.

**Problem.** Reversing the orientation negates the curl of a smooth field F. For a linear reflection R in a fixed orientation, the reflected field G satisfies G(Rx) = RF(x) and curl G(Rx) = −R(curl F(x)).

**How the definition helps.** The signed-volume definition locates the sign in one determinant, avoiding a component-by-component calculation (our own). Reflection preserves dot products and reverses signed volumes. The proof also uses the rule that exterior differentiation commutes with pullback and the identification with coordinate curl (our own).

**Wikipedia:** [Curl (mathematics)](https://en.wikipedia.org/wiki/Curl_%28mathematics%29). It says: “Although expressed in terms of coordinates, the result is invariant under proper rotations of the coordinate axes but the result inverts under reflection.”

**Sources:** none listed. No primary source with a working link was found.

### Star-shaped domains give divergence-free fields vector potentials

**Remember:** A closed flux form on a star-shaped set has a primitive.

*Rules out counterexamples.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The flux form of F sends u,v to det(F,u,v). A vector potential for F is a field A with curl A = F. On a star-shaped set, every segment from one fixed point to any other point stays in the set.

**Problem.** Every smooth field with zero divergence on a star-shaped open set in ℝ³ has a smooth vector potential.

**How the definition helps.** The star-shaped domain lets the Poincaré lemma turn the closed flux form β of F into dα for a smooth 1-form α (our own). Writing α(u) = A · u gives curl A = F, since dα measures the flux of curl A (our own). On ℝ³ minus the origin, the field x/\|x\|³ has zero divergence but outward flux 4π across the unit sphere (our own). Stokes’s theorem gives zero flux for every curl across that sphere (our own).

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “for ω any closed form on X in positive degree”

**Sources:** none listed. No primary source with a working link was found.

### The product rule makes exterior differentiation commute with pullback

**Remember:** Check functions and their differentials, then use the product rule.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The exterior derivative is the ℝ-linear operator of degree one on smooth forms that extends the ordinary differential of functions and satisfies d² = 0. For every p-form α and every form β, it satisfies d(α ∧ β) = dα ∧ β + (−1)ᵖα ∧ dβ.

**Problem.** For every smooth map and smooth form, taking the exterior derivative before or after pullback gives the same form.

**How the definition helps.** The product rule reduces the comparison to functions and coordinate differentials, avoiding a full coordinate expansion (our own). Pullback composes functions with the map, so the chain rule proves agreement on functions (our own). Each coordinate differential pulls back to a differential, whose next derivative vanishes by d² = 0 (our own).

**nLab:** [pullback of a differential form](https://ncatlab.org/nlab/show/pullback+of+a+differential+form). It says: “Pullback of differential forms commutes with the de Rham differential”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 4-10](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Wedge products give the divergence rule for cross products

**Remember:** The wedge product rule supplies the minus sign in the cross product rule.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Represent fields A and B by the forms α(u) = A · u and β(u) = B · u. Their wedge product evaluates on u,v as α(u)β(v) − α(v)β(u). This is the flux form of A × B, meaning its value is det(A × B,u,v).

**Problem.** For smooth fields A and B in ℝ³, div(A × B) = B · curl A − A · curl B.

**How the definition helps.** Representing the cross product by a wedge product replaces a coordinate expansion with one signed product rule (our own). That rule gives d(α ∧ β) = dα ∧ β − α ∧ dβ (our own). The left side measures divergence, while dα and dβ measure curl through oriented area (our own). Evaluating both sides on the standard basis gives the two dot products (our own).

**Paper or page:** [Divergence of Vector Cross Product](https://proofwiki.org/wiki/Divergence_of_Vector_Cross_Product). It says: “div(A × B) = B · curl A − A · curl B”

**Sources:** none listed. No primary source with a working link was found.

### A continuous unit normal makes signed surface flux well defined

**Remember:** One continuous normal gives one sign for flux across the whole surface.

*Rules out counterexamples.* MSC 58C35 (Integration on manifolds; measures on manifolds). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A unit normal is a vector of length one perpendicular to the tangent plane. Orient a smooth surface in ℝ³ by choosing a unit normal n continuously across it. The signed flux of a field F is the surface integral of F · n.

**Problem.** The signed flux of a continuous field on a compact oriented surface is unchanged by reparametrizations that use the chosen normal.

**How the definition helps.** The chosen normal gives F · n the same value wherever two charts meet (our own). The change-of-variables formula for surface area then gives the same integral in either chart (our own). On a Möbius strip, following a normal around the central loop reverses it, so a continuous choice fails (our own).

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “For surfaces embedded in Euclidean space, an orientation is specified by the choice of a continuously varying surface normal n at every point.”

**Sources:** none listed. No primary source with a working link was found.

### Compactly supported primitives rule out boundary terms at infinity

**Remember:** The primitive, not just its derivative, must vanish outside a compact set.

*Rules out counterexamples.* MSC 58C35 (Integration on manifolds; measures on manifolds). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth form α is a compactly supported primitive of ω if dα = ω and α vanishes outside a compact set.

**Problem.** On an oriented smooth manifold without boundary, a form of degree equal to the dimension integrates to zero if it has a compactly supported primitive.

**How the definition helps.** Compact support lets Stokes’s theorem turn the integral into one over the empty boundary (our own). On the real line, choose a smooth function equal to zero left of 0 and one right of 1 (our own). Its derivative vanishes outside \[0,1\] but integrates to one by the fundamental theorem of calculus (our own).

**Paper or page:** [General Stokes' Theorem](https://proofwiki.org/wiki/General_Stokes'_Theorem). It says: “Let ω be a smooth (n − 1)-form with compact support on a smooth n-dimensional oriented manifold X.”

**Sources:** none listed. No primary source with a working link was found.

### Null sets on smooth manifolds are defined chart by chart

**Remember:** Null in every chart means null on the manifold; one smooth atlas suffices.

*Rules out counterexamples. Confidence: medium.* MSC 58C35 (Integration on manifolds; measures on manifolds), 28A05. arXiv math.DG, math.CA. Level 2: later undergraduate.

**Definition.** In a smooth n-manifold, A is null if every chart sends its intersection with the chart domain to a Lebesgue-null set in ℝⁿ. A is full if its complement is null.

**Problem.** On a smooth manifold, a set that is null in the charts of one atlas covering it is null in every chart. So null and full sets, and 'almost everywhere', make sense without a chosen measure.

**How the definition helps.** Smooth coordinate changes are locally Lipschitz and preserve null sets. In our own argument, second countability of each chart domain reduces its cover by atlas overlaps to a countable subcover. A countable union of null sets is null. A general homeomorphism can send a null set to a set of positive measure.

**nLab:** [null subset](https://ncatlab.org/nlab/show/null+subset). It says: “If A is covered by an atlas (φᵢ: Uᵢ → X)ᵢ, then A is null or full as soon as φᵢ\*(A) is null/full in Uᵢ for every index i. … This fact depends on the smoothness and fails for topological manifolds.”

**Sources:**

- [John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Graduate Texts in Mathematics 218, Springer (2013), Chapter 6](https://doi.org/10.1007/978-1-4419-9982-5)

### Pseudoforms can be integrated on any manifold, with no orientation

**Remember:** A pseudoform transforms like a density, so its integral ignores orientation.

*Rules out counterexamples.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A top-degree pseudoform assigns a coefficient ρₓ in each coordinate chart x. On every overlap with coordinates y, the coefficients satisfy ρᵧ(y) = ρₓ(x(y)) \|det(∂x/∂y)\|.

**Problem.** On any smooth n-manifold, chart integration of an absolutely integrable continuous n-pseudoform is independent of the charts and partition of unity. The integral is linear.

**How the definition helps.** In our own argument, the absolute Jacobian gives exactly the change-of-variables factor, including in a reflected chart. A common refinement compares partitions of unity, and linearity follows from summing ordinary integrals.

**nLab:** [pseudoform](https://ncatlab.org/nlab/show/pseudoform), [integration of differential forms](https://ncatlab.org/nlab/show/integration+of+differential+forms), [volume form](https://ncatlab.org/nlab/show/volume+form). It says: “For a top-dimension pseudoform, this has the effect that at any given point, the form has a consistent sign regardless of the orientation of the coordinates.”

**Sources:**

- [Raoul Bott, Loring W. Tu, Differential Forms in Algebraic Topology, Graduate Texts in Mathematics 82, Springer (1982)](https://doi.org/10.1007/978-1-4757-3951-0)

### Pullback integrals ignore changes of parameter that preserve orientation

**Remember:** Evaluate the form on ordered parameter velocities to retain the orientation sign.

*True by definition.* MSC 58C35 (Integration on manifolds; measures on manifolds). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth k-form assigns a smoothly varying alternating k-linear functional to each tangent space. Its integral over a parametrization c is the integral of its value on the ordered coordinate derivatives of c.

**Problem.** For a convergent form integral, a smooth change of parameters with smooth inverse preserves the integral if it preserves orientation. It negates the integral if it reverses orientation.

**How the definition helps.** The form includes the signed determinant of the parameter change, without a separate orientation factor (our own). Ordinary change of variables cancels the determinant’s magnitude and leaves its sign (our own).

**Paper or page:** [Diffgeo: Stokes](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let c be a k-cell, α a k-form, and φ a reparametrization.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorems 4-9 and 5-4](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Signed cube faces reduce Stokes to one variable at a time

**Remember:** Each missing coordinate gives one upper face and one lower face.

*True by definition.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define a cube’s boundary as the signed sum of its coordinate faces. Keeping the other coordinates in order, give the upper face in direction i sign (−1)ⁱ⁻¹ and give the lower face the opposite sign. In the exterior derivative, place each coefficient’s differential before its coordinate factors.

**Problem.** Let c be a smooth parametrized cube of dimension k, and let α be a smooth form of degree k − 1. The integral of dα over c equals the integral of α over its signed boundary.

**How the definition helps.** The signed boundary builds in the signs that would otherwise need a separate orientation check on every face (our own). Only the coefficient missing coordinate i contributes on the two faces where that coordinate is fixed (our own). Fubini’s theorem and one-variable integration of its derivative give the upper value minus the lower value, with the prescribed sign (our own). Pullback carries this calculation to a parametrized cube because it commutes with exterior differentiation (our own).

**Paper or page:** [Diffgeo: Stokes](https://venhance.github.io/napkin/Napkin.pdf). It says: “∫₍c₎ dα = ∫₍∂c₎ α.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 4-13](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Manifolds with corners make products of manifolds with boundary smooth again

**Remember:** Allow corners, and products of manifolds with boundary stay manifolds.

*True by definition. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57R55. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A smooth n-manifold with corners is a second-countable Hausdorff space covered by charts onto relatively open subsets of \[0,∞)ᵏ × ℝⁿ⁻ᵏ, with 0 ≤ k ≤ n. Chart changes and their inverses extend smoothly near each point to Euclidean open sets.

**Problem.** The product of two smooth manifolds with corners is a manifold with corners. For example, the square \[0,1\] × \[0,1\] is one. So is W × \[0,1\] when W is a cobordism, that is, a manifold whose boundary is two closed manifolds.

**How the definition helps.** In our own argument, multiplying two chart models concatenates their nonnegative coordinates and their unrestricted coordinates. Products of the smooth extensions give smooth extensions for the coordinate changes. This includes the four corner charts of the square.

**Wikipedia:** [Manifold](https://en.wikipedia.org/wiki/Manifold). It says: “If in addition we are considering differentiable manifolds, then a square with interior is not a manifold with boundary. The four vertices are neither locally diffeomorphic to Euclidean space nor to Euclidean half-space.”

**Sources:**

- [Dominic Joyce, On manifolds with corners, arXiv:0910.3518 (2009)](https://arxiv.org/abs/0910.3518)

### Connected fibers let forms descend

**Remember:** Basic forms forget both vertical directions and position along a connected fiber.

*Rules out counterexamples.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** A surjective submersion is a smooth map that looks locally like a coordinate projection and reaches every target point. Call a form basic when it vanishes whenever one argument is tangent to a fiber and stays fixed under flows within fibers.

**Problem.** For a surjective submersion with connected fibers, every basic form is the pullback of a unique form downstairs.

**How the definition helps.** In our own proof, horizontality leaves only base differentials, while invariance makes their coefficients locally constant along fibers. Connectedness gives one value per fiber, and local sections give smoothness and uniqueness downstairs. On two disjoint copies of the base, different constant functions give a basic function that cannot descend.

**nLab:** [basic differential form](https://ncatlab.org/nlab/show/basic+differential+form). It says: “If the fibers of p are connected (otherwise the characterization given below is valid only locally in E)”

**Sources:** none listed. No primary source with a working link was found.

### Defining Lie derivatives by flows makes the wedge product rule immediate

**Remember:** Pullback respects wedges, so its derivative obeys the product rule.

*True by definition. Confidence: medium.* MSC 58A10 (Differential forms in global analysis), 57R25. arXiv math.DG. Level 3: graduate.

**Definition.** For a smooth vector field X with local flow φₜ, define ℒₓω as the derivative of φₜ\*ω at t = 0.

**Problem.** Write ℒ for the Lie derivative along a fixed vector field. Then ℒ(α∧β) = ℒα∧β + α∧ℒβ for all smooth forms α and β.

**How the definition helps.** In our own argument, pullback gives φₜ\*(α ∧ β) = φₜ\*α ∧ φₜ\*β. Differentiating at zero gives the claimed rule by bilinearity.

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative). It says: “is the linearization of the pullback of ω along the flow”

**Sources:**

- [T. J. Willmore, The definition of Lie derivative, Proceedings of the Edinburgh Mathematical Society 12 (1960), 27–29](https://doi.org/10.1017/S0013091500025013)

### Divergence as volume change makes volume preservation immediate

**Remember:** Zero divergence stops the flow from changing volume at any time.

*True by definition.* MSC 58A10 (Differential forms in global analysis), 37C10. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** For a smooth vector field X and a nowhere-zero top form μ, its divergence relative to μ is the unique function satisfying ℒₓμ = (div X)μ. Here ℒₓμ differentiates the flow pullback of μ at time zero.

**Problem.** A smooth vector field has zero divergence relative to μ exactly when its flow preserves μ wherever it is defined.

**How the definition helps.** The Lie-derivative definition makes zero divergence mean zero instantaneous change of volume (our own). At any time t, the flow law gives the rate of change by pulling the initial derivative back along the time-t map. Zero divergence therefore gives zero change at every time, and a volume-preserving flow has zero derivative at time zero. The work goes into checking that for ordinary Euclidean volume this rule gives the sum of the coordinate derivatives.

**Wikipedia:** [Divergence](https://en.wikipedia.org/wiki/Divergence). It says: “This means that the divergence measures the rate of expansion of a unit of volume (a volume element) as it flows with the vector field.”

**Sources:** none listed. No primary source with a working link was found.

### Lie and exterior derivatives commute

**Remember:** Pull back before differentiating in time.

*True by definition.* MSC 58A10 (Differential forms in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth vector field moves points along its local flow. Pull a differential form back along this motion and differentiate at time zero to obtain its Lie derivative.

**Problem.** Taking a Lie derivative and taking an exterior derivative commute on smooth forms.

**How the definition helps.** In our own proof, exterior differentiation commutes with pullback by each local flow map. It also commutes with time differentiation of smooth coefficients. Differentiating the pullback identity at zero gives the claim.

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative). It says: “the linearization of the pullback of ω along the flow exp(X −)”

**Sources:** none listed. No primary source with a working link was found.

### Closed twists square to zero

**Remember:** Closedness removes the derivative of the twist, and odd degree removes its square.

*Rules out counterexamples.* MSC 58A12 (de Rham theory in global analysis). arXiv math.DG. Level 3: graduate.

**Definition.** For a closed real three-form H, define D on the parity-graded space of smooth real forms by Dα = dα + H ∧ α. Closedness means dH = 0.

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

### Boundary Hodge spectra pair up

**Remember:** The star swaps tangential and normal parts.

*True by definition. Confidence: medium.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** Absolute boundary conditions set the normal components of α and dα to zero. Relative boundary conditions set the tangential components of α and d⁎α to zero, where d⁎ is the formal adjoint.

**Problem.** On a compact oriented Riemannian n-manifold with smooth boundary, absolute k-forms and relative (n − k)-forms have identical Laplacian spectra, including multiplicities.

**How the definition helps.** The paired boundary conditions let the Hodge star identify the two eigenvalue problems directly. In our own argument, the star exchanges normal and tangential components and interchanges d and d⁎ up to signs. Boundary elliptic theory gives the operator domains on which the star intertwines the Laplacians.

**Paper or page:** [Well-Posedness of the Hodge Wave Equation on a Compact Manifold](https://arxiv.org/abs/2502.01514v2). It says: “Moreover, we have the following relations between the spaces of weakly differentiable forms: ⋆(HΩᵏ(M)) = H⋆Ωⁿ⁻ᵏ(M)”

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

**Definition.** The holomorphic de Rham complex consists of local holomorphic differential forms linked by exterior differentiation. Stage p of the Hodge filtration is the image in complex cohomology of the hypercohomology of this complex with degrees below p discarded.

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

### Harmonic stars give the signature

**Remember:** The star splits the pairing into plus and minus norms.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The Hodge star ⋆ satisfies α ∧ ⋆β = ⟨α,β⟩ vol, where vol is the metric volume form. In middle degree on an oriented Riemannian 4m-manifold, self-dual and anti-self-dual forms satisfy ⋆α = α and ⋆α = −α, respectively.

**Problem.** On a closed oriented Riemannian 4m-manifold, the intersection signature equals the dimension of self-dual harmonic forms minus the dimension of anti-self-dual harmonic forms.

**How the definition helps.** The star gives the positive and negative spaces directly, avoiding diagonalization of the cohomology pairing. Our own calculation integrates α ∧ α on each space to obtain the squared norm with the corresponding sign. The Hodge theorem identifies harmonic forms with cohomology, where these two dimensions determine the signature.

**nLab:** [Hodge star operator](https://ncatlab.org/nlab/show/Hodge+star+operator). It says: “α ∧ ⋆β = (α ∣ β) vol₍g₎”

**Sources:** none listed. No primary source with a working link was found.

### Integrating heat gives Green operators

**Remember:** Integrating heat replaces each positive eigenvalue by its reciprocal.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The Green operator G divides each positive Hodge Laplacian mode by its eigenvalue and kills the zero modes. A mode is an eigenform. Heat evolution for time t multiplies a mode of eigenvalue λ by exp(−tλ).

**Problem.** On a closed Riemannian manifold, the heat evolution of an L² form perpendicular to the zero modes integrates to its Green operator image. The integral runs over all positive times.

**How the definition helps.** The spectral definition replaces inversion of a differential operator with integration of one exponential per mode. Our own calculation gives 1/λ for each positive eigenvalue. The spectral theorem supplies the eigenforms and a positive lower bound on positive eigenvalues, ensuring convergence in L².

**Paper or page:** [On linking numbers and Biot-Savart kernels](https://arxiv.org/abs/2509.02802v1). It says: “G<sub>k</sub>(\\omega )=\\int \_0<sup>\\infty </sup>e<sup>-t\\Delta </sup>\\omega \~  dt”

**Sources:** none listed. No primary source with a working link was found.

### Product Hodge Laplacians add

**Remember:** Opposite signs cancel all mixed derivatives.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** On product forms, the graded product differential adds the two factor derivatives. The second derivative carries a sign (−1)ᵖ when the first factor has degree p.

**Problem.** For closed Riemannian manifolds with the product metric, the Laplacian on forms is the sum of the two factor Laplacians.

**How the definition helps.** The graded product rule replaces a coordinate calculation with cancellation of the mixed terms. Our own calculation uses the product metric to give the second adjoint the same sign. Differentiating in the first factor changes parity, so the mixed terms cancel when d + d⁎ is squared.

**Paper or page:** [On linking numbers and Biot-Savart kernels](https://arxiv.org/abs/2509.02802v1). It says: “Δ = Δₓ + Δᵧ”

**Sources:** none listed. No primary source with a working link was found.

### Reduced classes have harmonic representatives

**Remember:** Close the exact forms before taking the quotient.

*Rules out counterexamples.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** Fix a closed exterior derivative d on square-integrable forms, with d² = 0. Reduced L² cohomology identifies closed forms whose difference is a norm limit of derivatives. A harmonic form is closed and orthogonal to all derivatives.

**Problem.** Every reduced L² cohomology class contains exactly one harmonic form.

**How the definition helps.** Taking the closure lets us project a closed form orthogonally off the derivatives. Our own example is the indicator of (0,1) times dx on the real line. Derivatives are dense there, but every primitive of this form has nonzero constant value on at least one infinite tail.

**Paper or page:** [Geometric singularities and Hodge theory](https://arxiv.org/abs/2407.01170v3). It says: “We have that $\\ker (\\Gamma ) = \\ker (\\Pi ) \\oplus \\overline{\\mathrm{ran}(\\Gamma )}$”

**Sources:** none listed. No primary source with a working link was found.

### Exterior closure detects integrable planes

**Remember:** Differentiate the vanishing forms to test integrability.

*Rules out counterexamples.* MSC 58A17 (Pfaffian systems). arXiv math.DG. Level 3: graduate.

**Definition.** For a smooth constant-rank distribution E, form the local exterior ideal generated by all one-forms vanishing on E. It is differential if d sends every local member back into the ideal.

**Problem.** A local integral leaf is a submanifold whose tangent spaces equal the prescribed planes. Such a leaf passes through every point exactly when the ideal is closed under exterior differentiation.

**How the definition helps.** For E-tangent fields X,Y and an annihilating one-form α, dα(X,Y) = −α(\[X,Y\]). Thus closure of the ideal means closure under brackets, the Frobenius integrability criterion. In our own counterexample, d(dz − x dy) is nonzero on the planes annihilated by dz − x dy.

**nLab:** [exterior differential system](https://ncatlab.org/nlab/show/exterior+differential+system). It says: “Frobenius systems are in bijection with involutive subbundles of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining current boundaries by duality makes pushforward commute with boundary

**Remember:** Pulling back a test form commutes with differentiating it.

*True by definition. Confidence: medium.* MSC 58A25 (Currents in global analysis), 49Q15. arXiv math.DG. Level 3: graduate.

**Definition.** A k-current T is a continuous linear functional on compactly supported smooth k-forms. Its boundary acts by ∂T(ω) = T(dω). For a proper smooth map f, define f♯T(η) = T(f\*η), since properness preserves compact support under pullback.

**Problem.** For a proper smooth map f and any current T, ∂(f♯T) = f♯(∂T).

**How the definition helps.** In our own computation, the two sides act on ω by T(f\*(dω)) and T(d(f\*ω)). Pullback commutes with exterior differentiation, so the values agree.

**Wikipedia:** [Current (mathematics)](https://en.wikipedia.org/wiki/Current_%28mathematics%29). It says: “we can define a boundary operator on arbitrary currents”

**Sources:** none listed. No primary source with a working link was found.

### Defining the boundary of a current by duality makes its square zero

**Remember:** The boundary moves d onto the test form, and d twice is zero.

*True by definition.* MSC 58A25 (Currents in global analysis). arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** An m-current T is a continuous linear functional on compactly supported smooth m-forms. Its boundary acts on each compactly supported smooth (m−1)-form ω by (∂T)(ω) = T(dω).

**Problem.** For every current T of degree at least two, ∂∂T = 0.

**How the definition helps.** In our own calculation, testing the second boundary on ω gives T(d(dω)), which vanishes because d² = 0. Stokes’ theorem identifies this boundary with the geometric boundary for integration currents.

**Wikipedia:** [Current (mathematics)](https://en.wikipedia.org/wiki/Current_%28mathematics%29). It says: “In view of this formula we can define a boundary operator on arbitrary currents”

**Sources:** none listed. No primary source with a working link was found.

### Half-densities make pullbacks unitary

**Remember:** Two half-Jacobians give the full change-of-variables factor.

*True by definition.* MSC 58A32 (Natural bundles). arXiv math.DG. Level 3: graduate.

**Definition.** A half-density transforms under a coordinate change by the square root of the absolute Jacobian determinant. Its product with a conjugate half-density transforms as an ordinary density, which can be integrated without choosing a measure.

**Problem.** A diffeomorphism gives a unitary pullback on square-integrable half-densities. The pullback by its inverse is the adjoint.

**How the definition helps.** The two square roots in the inner product supply exactly the Jacobian for changing variables. In our own explanation, scalar functions would require a separately chosen measure to define that inner product. Change of variables proves norm preservation, and the inverse map gives surjectivity.

**nLab:** [canonical Hilbert space of half-densities](https://ncatlab.org/nlab/show/canonical+Hilbert+space+of+half-densities). It says: “whose inner product is given by tensoring two half-densities to an actual density and then integrating that over X.”

**Sources:** none listed. No primary source with a working link was found.

### Diffeological spaces make spaces of smooth maps smooth again

**Remember:** A family of smooth maps is a plot when its evaluation is smooth.

*Makes the theorem clean to state or prove.* MSC 58A40 (Differential spaces), 18F15. arXiv math.DG, math.CT. Level 3: graduate.

**Definition.** A map between diffeological spaces is smooth if it sends every plot to a plot. In the functional diffeology on C∞(X,Y), a parametrization p:U → C∞(X,Y) is a plot exactly when (u,x) ↦ p(u)(x) is smooth.

**Problem.** Diffeological spaces form a cartesian closed category. The smooth maps X → Y form a diffeological space C∞(X, Y), and C∞(Z × X, Y) ≅ C∞(Z, C∞(X, Y)).

**How the definition helps.** In our own argument, a family indexed by Z is smooth exactly when its evaluation on Z × X is smooth. Currying and evaluation are inverse, giving the exponential law. Componentwise plots give products, and the singleton is terminal.

**nLab:** [diffeological space](https://ncatlab.org/nlab/show/diffeological+space), [manifold structure of mapping spaces](https://ncatlab.org/nlab/show/manifold+structure+of+mapping+spaces). It says: “The category of smooth manifolds is not cartesian closed, even when infinite-dimensional manifolds are allowed.”

**Sources:**

- [Jean-Marie Souriau, Groupes différentiels, Lecture Notes in Math. 836, Springer (1980) 91–128](https://doi.org/10.1007/BFb0089728)
- [Patrick Iglesias-Zemmour, Diffeology, Mathematical Surveys and Monographs 185, AMS (2013)](https://doi.org/10.1090/surv/185)

### Quotient plots detect smoothness

**Remember:** Test smoothness upstairs by lifting each plot locally.

*True by definition.* MSC 58A40 (Differential spaces). arXiv math.DG. Level 3: graduate.

**Definition.** For a surjection π:X → Q from a diffeological space, p:U → Q is a quotient plot if it locally lifts through π to plots of X. Every point of U must have a neighborhood V with p restricted to V equal to π ∘ q for some plot q of X.

**Problem.** A map out of a diffeological quotient is smooth exactly when its composite with the quotient map is smooth.

**How the definition helps.** In our own argument, if fπ is smooth, each local lift q makes fp locally the plot fπq. Plots glue, so f is smooth. Conversely, π sends plots to plots, so smooth f gives smooth fπ.

**Paper or page:** [Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4). It says: “is smooth if and only if f π is”

**Sources:**

- [Emilio Minichiello, Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4)

### Banach charts give unique local flows

**Remember:** One complete norm lets Picard iteration control all directions.

*Rules out counterexamples.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds). arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** A smooth Banach manifold is a Hausdorff manifold with charts onto open subsets of Banach spaces and transition maps with continuous Fréchet derivatives of every order. A Banach space is a normed vector space complete for its norm.

**Problem.** Every smooth vector field on a Banach manifold has a unique smooth local flow.

**How the definition helps.** One complete norm lets Picard’s contraction argument turn local derivative bounds into existence and uniqueness of solutions. In our own counterexample, shift each real sequence one place to the left in the product topology. Choose a smooth function that vanishes with all derivatives at zero but is positive at every positive time. Its successive derivatives form a solution with the same initial value as the zero solution.

**nLab:** [Fréchet manifold](https://ncatlab.org/nlab/show/Fr%C3%A9chet+manifold). It says: “The existence and uniqueness theorems for ordinary differential equations fail in infinite dimensions”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Strong metrics give smooth gradients

**Remember:** A strong metric turns every differential into a tangent vector.

*Rules out counterexamples.* MSC 58B20 (Riemannian, Finsler and other geometric structures on infinite-dimensional manifolds), 58B10. arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** A Hilbert manifold has local coordinates in a Hilbert space. A strong Riemannian metric assigns smoothly varying inner products whose norms give the original topology on each tangent space. A weak metric allows a coarser topology.

**Problem.** With a strong metric, every smooth real function has a unique smooth gradient. Its inner product with each tangent vector gives the derivative in that direction.

**How the definition helps.** The strong inner product represents every continuous linear functional by a unique tangent vector, and the representation varies smoothly. Our own counterexample weights coordinate n in the usual inner product on square-summable sequences by 1/n. The continuous linear function with coefficients 1/n would then require a gradient with every entry one. That sequence is not square-summable.

**Paper or page:** [On Mañé's Critical Value for Tonelli Lagrangians on Half Lie-Groups](https://arxiv.org/abs/2511.13428). It says: “is a bundle isomorphism.”

**Sources:**

- [On Mañé's Critical Value for Tonelli Lagrangians on Half Lie-Groups](https://arxiv.org/abs/2511.13428)

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

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

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

**Definition.** A locally compact spectral triple consists of a faithfully represented ∗-algebra on a Hilbert space and a self-adjoint operator D. Each algebra element a preserves the domain of D, its commutator \[D,a\] extends boundedly, and a(D+i)⁻¹ is compact.

**Problem.** On positive-dimensional Euclidean space let smooth compactly supported functions multiply square-integrable differential forms, and let D equal exterior differentiation plus its adjoint. These data form a locally compact spectral triple although (D + i)⁻¹ is not compact.

**How the definition helps.** Multiplication by a test function confines the resolvent output to a bounded region (our own explanation). The resolvent controls one square-integrable derivative, so compact Sobolev embedding gives compactness there. The commutator differentiates only the multiplier and is bounded. Translations of a fixed nonzero input give translated resolvent outputs with no convergent subsequence when the translations diverge.

**Paper or page:** [The Connes character formula for locally compact spectral triples](https://arxiv.org/abs/1803.01551). It says: “is an even spectral triple satisfying”

**Sources:**

- [The Connes character formula for locally compact spectral triples](https://arxiv.org/abs/1803.01551)

### The junk ideal lets differentiation descend

**Remember:** Kill every invisible form and its differential.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** For a spectral triple, represent each universal form a₀ da₁ ⋯ daₖ by a₀\[D,a₁\] ⋯ \[D,aₖ\]. Let K be the direct sum of the kernels in each degree. The represented differential calculus is the universal differential algebra modulo K + dK.

**Problem.** The quotient inherits multiplication and a differential satisfying the graded product rule and d² = 0.

**How the definition helps.** Adding dK kills the derivative of every discarded form, so differentiation respects the quotient (our own explanation). The graded product rule makes K + dK a two-sided ideal. For a smooth real function f on a closed spin manifold, f df − df f represents zero. Its derivative represents 2\[D,f\]², nonzero wherever f has nonzero derivative.

**Paper or page:** [On two notions of torsion and metric compatibility of connections in noncommutative geometry](https://arxiv.org/abs/2509.11888). It says: “is a ∗-differential calculus.”

**Sources:**

- [On two notions of torsion and metric compatibility of connections in noncommutative geometry](https://arxiv.org/abs/2509.11888)

### Total boundedness gives weak star convergence

**Remember:** A finite set of approximate tests controls all tests at once.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 3: graduate.

**Definition.** For a unital spectral triple, let B contain exactly the self-adjoint algebra elements a with ‖\[D,a\]‖ ≤ 1. Spectral distance is the supremum over B of the absolute difference of state evaluations. Fix a state μ and require a finite norm ε-net for {a − μ(a)1 : a ∈ B} for every ε &gt; 0.

**Problem.** If the tests are totally bounded in this sense, spectral distance is a finite metric on states. It induces the weak star topology, pointwise convergence on the completed algebra.

**How the definition helps.** In our own proof, centering preserves state differences and total boundedness bounds the distance. Finite ε-nets and the unit norms of states turn pointwise convergence into uniform convergence on B. Conversely, rescaling tests gives pointwise convergence on the dense algebra, hence on its completion, and separates distinct states. With D = 0 on two points, distinct states have infinite distance.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “topologizes the weak\* topology on the state space”

**Sources:**

- [Rieffel, Metrics on state spaces](https://doi.org/10.4171/DM/68)

### Absolute differential forms give the triangle inequality for integrals

**Remember:** Changing a frame scales an absolute form by the absolute determinant.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58C35 (Integration on manifolds; measures on manifolds), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** An absolute p-form assigns a scalar to each ordered tangent p-frame and vanishes on dependent tuples. Changing a frame by an invertible matrix multiplies the scalar by the absolute determinant. For an ordinary p-form ω, taking the absolute value of every evaluation gives \|ω\|.

**Problem.** For an integrable p-form ω on an oriented p-dimensional submanifold R, \|∫<sub>R</sub> ω\| ≤ ∫\_\|R\| \|ω\|. Here \|R\| denotes the same submanifold with its orientation forgotten.

**How the definition helps.** The absolute determinant makes the density independent of orientation. In our own argument, the integral triangle inequality in oriented charts bounds the signed integral by the integral of the density.

**nLab:** [absolute differential form](https://ncatlab.org/nlab/show/absolute+differential+form), [integration of differential forms](https://ncatlab.org/nlab/show/integration+of+differential+forms). It says: “I call these absolute forms. The term 'absolute' suggests a lack of additional required structure, in this case some sort of orientation on the domain of integration.”

**Sources:**

- [Juan Carlos Álvarez Paiva, answer to 'Why do I need densities in order to integrate on a non-orientable manifold?', MathOverflow (2012)](https://mathoverflow.net/questions/90455/) (link not checked)

### Momentum classes conserve circulation

**Remember:** Follow the loop and ignore exact changes in momentum.

*True by definition. Confidence: medium.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** The metric turns a fluid velocity into a one-form by taking its inner product with each tangent vector. The momentum class identifies two such one-forms if their difference is the differential of a function.

**Problem.** For smooth incompressible Euler flow on a closed Riemannian manifold, pulling the momentum class back along the particle flow keeps it constant. Thus the integral of velocity around each moving closed loop stays constant.

**How the definition helps.** Passing to the class removes the entire differential term in the moving fluid’s momentum equation. In our own derivation, Euler’s equation gives the time derivative of the pulled-back one-form as the differential of a function. The quotient makes this derivative zero, and differentials integrate to zero on closed loops.

**Paper or page:** [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278). It says: “then we have the following conservation law:”

**Sources:**

- [Patrick Heslin, Two-Point Boundary Value Problems on Diffeomorphism Groups, Lemma 3.4](https://arxiv.org/abs/2110.12278)

### Smooth curves make inversion smooth

**Remember:** To invert a smooth family, solve a finite-dimensional equation with a parameter.

*True by definition.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** In convenient calculus a map is smooth if it takes smooth curves to smooth curves. On the diffeomorphism group of a closed manifold, a curve of maps is smooth exactly when evaluation depends smoothly on time and position together.

**Problem.** Inversion is smooth on the Fréchet manifold of smooth diffeomorphisms of a closed manifold.

**How the definition helps.** In our own proof, the curve test reduces inversion to inverting a jointly smooth family f(t,y). The implicit function theorem makes the solution y of f(t,y) = x smooth in (t,x), since each spatial derivative is invertible. The mapping-space curve criterion now gives smooth inversion.

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “inversion maps smooth curves to smooth curves”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Mapping tangents are pointwise fields

**Remember:** Vary each image point in its own tangent space.

*True by definition.* MSC 58D15 (Manifolds of mappings), 58B10. arXiv math.DG, math.FA. Level 3: graduate.

**Definition.** A local addition on N is a smooth map Σ from a neighborhood of the zero section in TN to N with Σ(0ᵧ) = y. With π the bundle projection, (π,Σ) must map that neighborhood diffeomorphically onto a neighborhood of the diagonal in N × N.

**Problem.** For a closed manifold M and a finite-dimensional manifold N, the tangent bundle of the smooth mapping space identifies with smooth maps into TN. Here TN is the tangent bundle of N, and the fiber over f consists of smooth vector fields along f.

**How the definition helps.** The local-addition chart already takes values in the space of vector fields along f, so its velocities lie in that space. In our own proof, evaluating a curve of maps at each point gives the intrinsic identification by differentiation in time. Chart compatibility and smooth dependence on the base map make this a smooth bundle isomorphism.

**nLab:** [tangent spaces of mapping spaces](https://ncatlab.org/nlab/show/tangent+spaces+of+mapping+spaces). It says: “The claim of this page is that this is a diffeomorphism, and further a vector bundle isomorphism”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Category bounds critical point counts

**Remember:** Count the fewest open sets covering the manifold that contract inside it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 3: graduate.

**Definition.** The Lusternik–Schnirelmann category of a manifold is the least number of open sets covering it that can each contract to a point inside the manifold. Use infinity if no finite cover works.

**Problem.** Suppose a bounded-below, twice continuously differentiable function on a complete Riemannian Hilbert manifold satisfies Palais–Smale compactness. It has at least as many critical points as the category of the manifold.

**How the definition helps.** Each isolated critical point contributes at most one set to a cover by sets contractible in the manifold (our own). Palais–Smale compactness gives a convergent subsequence whenever values stay bounded and derivative norms approach zero (our own). The deformation theorem pulls covers across intervals without critical values and adds neighborhoods of critical points at each critical value (our own).

**nLab:** [Lusternik-Schnirelmann category](https://ncatlab.org/nlab/show/Lusternik-Schnirelmann+category). It says: “A topological space X has Lusternik–Schnirelmann category ≤ n if there is an open cover of X by at most n sets for which the inclusion maps U ↪︎ X are nullhomotopic.”

**Sources:**

- [Mónica Clapp and Dieter Puppe, Invariants of the Lusternik-Schnirelmann type and the topology of critical sets (1986)](https://doi.org/10.1090/S0002-9947-1986-0860382-0)
- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)

### Compactness clears regular bands

**Remember:** A regular band with compactness has no arbitrarily flat points.

*Rules out counterexamples. Confidence: medium.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 3: graduate.

**Definition.** A differentiable function satisfies the Palais–Smale condition if every sequence with bounded function values and derivative norms tending to zero has a convergent subsequence.

**Problem.** Suppose a twice continuously differentiable Palais–Smale function on a complete Riemannian Hilbert manifold has no critical points with values in \[a,b\]. One can continuously deform {f ≤ b} onto {f ≤ a} while fixing {f ≤ a} throughout.

**How the definition helps.** In our own proof, Palais–Smale bounds the gradient norm away from zero on the closed band, since a vanishing sequence would yield a critical point. The negative gradient divided by its squared norm has bounded speed and lowers the value at unit rate. Completeness allows the flow to reach level a, where we stop it. Without compactness, exp(x) on ℝ has no critical points, yet its nonempty sublevel at one cannot retract onto its empty sublevel at zero.

**Wikipedia:** [Palais–Smale compactness condition](https://en.wikipedia.org/wiki/Palais%E2%80%93Smale_compactness_condition). It says: “In the calculus of variations, where one is typically interested in infinite-dimensional function spaces, the condition is necessary because some extra notion of compactness beyond simple boundedness is needed.”

**Sources:**

- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)
- [Richard S. Palais and Stephen Smale, A generalized Morse theory (1964)](https://doi.org/10.1090/S0002-9904-1964-11062-4)

### Compactness prevents mountain-pass escape

**Remember:** At the pass height, vanishing derivatives force a convergent subsequence.

*Rules out counterexamples.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** A differentiable function f satisfies the Palais–Smale condition at height c if every sequence approaching stationarity there has a convergent subsequence. Approaching stationarity means the values approach c and the derivative norms approach zero.

**Problem.** For a continuously differentiable Hilbert space function, let c be the infimum of maximum heights along continuous paths between two given points. If c exceeds both endpoint values, Palais–Smale compactness at c gives a point with value c and derivative zero.

**How the definition helps.** Compactness gives a limit for points approaching stationarity at the pass height (our own). The mountain-pass deformation argument supplies these points by lowering paths wherever the derivative stays large (our own). For f(x,y) = (x²−1)² + exp(−y), paths from (−1,1) to (1,1) must cross x = 0 (our own). Crossing at increasing heights y gives pass value 1, yet the derivative in y never vanishes (our own).

**Wikipedia:** [Mountain pass theorem](https://en.wikipedia.org/wiki/Mountain_pass_theorem). It says: “then the conclusion of the theorem is that c is a critical value of I.”

**Sources:**

- [Antonio Ambrosetti and Paul H. Rabinowitz, Dual variational methods in critical point theory and applications (1973)](https://doi.org/10.1016/0022-1236(73)90051-7)
- [Richard S. Palais and Stephen Smale, A generalized Morse theory (1964)](https://doi.org/10.1090/S0002-9904-1964-11062-4)

### Fixed directions suffice for criticality

**Remember:** Fixed directions survive every symmetry, and averaging produces a fixed direction.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** The fixed subspace of a group of linear symmetries contains exactly the vectors left unchanged by every group element. An invariant function takes the same value after applying any symmetry.

**Problem.** Let a compact group act continuously and linearly on a Banach space and preserve a continuously differentiable function. A critical point of the function restricted to the fixed subspace is critical on the full space.

**How the definition helps.** At a fixed point, averaging any direction over the group preserves its derivative and produces a direction in the fixed subspace (our own). Compactness supplies the invariant probability measure for this average (our own). At a restricted critical point the derivative vanishes on every averaged direction, hence on every original direction (our own).

**Paper or page:** [Nonlocal problem with critical exponential nonlinearity of convolution type: A non-resonant case](https://arxiv.org/abs/2408.00654). It says: “If J : X → ℝ is an H-invariant, C¹ functional”

**Sources:**

- [Richard S. Palais, The principle of symmetric criticality (1979)](https://doi.org/10.1007/BF01941322)
- [Suman Kanungo, Pawan Kumar Mishra, Nonlocal problem with critical exponential nonlinearity of convolution type: A non-resonant case](https://arxiv.org/abs/2408.00654)

### Invertible Hessians give Morse coordinates

**Remember:** The Hessian must reach every covector with a bounded inverse.

*Rules out counterexamples. Confidence: medium.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 3: graduate.

**Definition.** At a critical point the Hessian is the second derivative. On a Hilbert manifold, strong nondegeneracy means the Hessian gives a bounded linear isomorphism from the tangent space onto its dual.

**Problem.** Near a strongly nondegenerate critical point, a smooth function admits coordinates in which it equals its critical value plus ‖u‖² minus ‖v‖².

**How the definition helps.** Strong nondegeneracy keeps the Hessian spectrum away from zero, as required by the Hilbert space Morse lemma (our own). On the space of square summable sequences, the form ∑ xₙ²/n has zero kernel but no bounded inverse onto the dual (our own). A smooth coordinate change preserves invertibility of the Hessian at a critical point, so this example cannot have the stated form (our own).

**nLab:** [Morse theory](https://ncatlab.org/nlab/show/Morse+theory). It says: “Morse theory is the method of studying the topology of a smooth manifold M by the study of Morse functions M → ℝ and their associated gradient flows.”

**Sources:**

- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)

### Metric slopes find almost critical points

**Remember:** Test actual downhill changes when derivatives do not exist.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** The strong slope at a finite-valued point x measures the greatest local rate of decrease. It is the limit superior of max(f(x) − f(y), 0)/d(x,y) as y approaches x through other points. At an isolated point it is zero.

**Problem.** Let f be lower semicontinuous, bounded below, and finite somewhere on a complete metric space, allowing the value +∞. There are points whose values approach its infimum and whose strong slopes approach zero.

**How the definition helps.** The distance penalty in Ekeland’s variational principle bounds precisely the local rate of decrease (our own). For each ε &gt; 0 the principle gives a near-minimizer x satisfying f(x) − f(y) ≤ εd(x,y) for every y (our own). Dividing by distance bounds the strong slope by ε while the chosen values approach the infimum (our own).

**Paper or page:** [Slopes and Moreau-Rockafellar Theorem](https://arxiv.org/abs/2309.03505). It says: “Let (M, ρ) be a complete metric space and let f : M → ℝ ∪ {+∞} be a proper lower semicontinuous and bounded below function.”

**Sources:**

- [Milen Ivanov, Nadia Zlateva, Slopes and Moreau-Rockafellar Theorem](https://arxiv.org/abs/2309.03505)

### Palais–Smale compactness gives minimizers

**Remember:** A nearly stationary minimizing sequence needs somewhere to converge.

*Rules out counterexamples.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.FA. Level 3: graduate.

**Definition.** The Palais–Smale condition requires a convergent subsequence whenever function values stay bounded and derivatives tend to zero in norm. It asks for compactness only along nearly stationary sequences.

**Problem.** Let f be a continuously differentiable real-valued function on a real Hilbert space. If f is bounded below and satisfies the Palais–Smale condition, it attains its infimum.

**How the definition helps.** The condition keeps nearly stationary minimizing sequences from escaping (our own). Ekeland’s variational principle supplies such a sequence, and continuity gives the minimum at its subsequential limit (our own). On the real line, e⁻ˣ approaches its infimum at infinity without attaining it (our own).

**Wikipedia:** [Palais–Smale compactness condition](https://en.wikipedia.org/wiki/Palais%E2%80%93Smale_compactness_condition). It says: “if every sequence {uₖ} ⊂ H such that: {I\[uₖ\]} is bounded, and I′\[uₖ\] → 0 in H has a convergent subsequence in H.”

**Sources:** none listed. No primary source with a working link was found.

### Ray maxima give Nehari minimax

**Remember:** Every ray reaches its energy peak on the Nehari set.

*True by definition.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 3: graduate.

**Definition.** On a nonzero real Banach space take f(u) = ‖u‖²/2 − B(u)/p, with p &gt; 2. Assume B is continuous, positive away from zero, and satisfies B(tu) = tᵖB(u) for t &gt; 0. The Nehari set consists of nonzero u satisfying ‖u‖² = B(u).

**Problem.** Among continuous paths from zero to a nonzero point of nonpositive energy, the infimum of path maxima equals the infimum on the Nehari set.

**How the definition helps.** The Nehari equation selects the unique maximum on each ray, replacing a search over paths by one over ray maxima (our own). Extending a ray beyond its maximum to negative energy gives one inequality (our own). Homogeneity and continuity at zero give ‖u‖² &gt; B(u) uniformly near zero for nonzero u (our own). Every admissible path reaches the opposite inequality, so it crosses the Nehari set and gives the reverse bound (our own).

**Paper or page:** [Entire Nodal Solutions with Prescribed Symmetry to Caffarelli-Kohn-Nirenberg Equations](https://arxiv.org/abs/2511.11543). It says: “beginning at 0 with non-trivial endpoint of non-positive energy”

**Sources:**

- [Edward Chernysh, Entire Nodal Solutions with Prescribed Symmetry to Caffarelli-Kohn-Nirenberg Equations](https://arxiv.org/abs/2511.11543)

### Broken geodesics retain sublevel topology

**Remember:** Keep the joints and shorten everything between them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** For a fixed partition of time, a broken geodesic joins successive path values by shortest geodesics at constant speed on each interval.

**Problem.** Fix endpoints and an energy bound E for H¹ paths on a compact Riemannian manifold without boundary, with energy the integral of squared speed. For a sufficiently fine partition, this sublevel deformation retracts onto its broken geodesics in the H¹ topology.

**How the definition helps.** Replacing each segment by its shortest geodesic preserves the joints and can only lower energy (our own). Replacing a growing initial portion of each segment gives a continuous deformation in the norm measuring the path and its first derivative (our own). The energy bound makes short portions uniformly short enough to have unique shortest replacements varying smoothly with their endpoints (our own).

**nLab:** [geodesic](https://ncatlab.org/nlab/show/geodesic). It says: “A geodesic may not globally minimize the distance between its end points.”

**Sources:**

- [Richard S. Palais, Morse theory on Hilbert manifolds (1963)](https://doi.org/10.1016/0040-9383(63)90013-2)
- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Bumpiness makes bounded geodesic counts finite

**Remember:** An isolated orbit cannot be the limit of other closed orbits.

*Rules out counterexamples. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A Jacobi field solves the equation obtained by linearizing the geodesic equation. A metric is bumpy if every periodic Jacobi field on every nonconstant closed geodesic is a constant multiple of its velocity.

**Problem.** On a compact Riemannian manifold without boundary, a bumpy metric has finitely many closed unit-speed geodesics below each length bound, up to time shift.

**How the definition helps.** Bumpiness isolates periodic orbits by the transverse implicit function theorem (our own). The injectivity radius bounds positive periods away from zero. Compactness then forces any infinite sequence of distinct orbits with bounded periods to accumulate at a periodic orbit, contradicting isolation. Our own counterexample is the round sphere, whose great circles vary continuously with their planes.

**Paper or page:** [Morse Index bound of simple closed geodesics on 2-spheres and strong Morse Inequalities](https://arxiv.org/abs/2303.00644). It says: “This induces a nontrivial Jacobi field of w and contradicts to the fact that the metric is bumpy.”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)
- [Dongyeong Ko, Morse Index bound of simple closed geodesics on 2-spheres and strong Morse Inequalities](https://arxiv.org/abs/2303.00644)

### Conjugate endpoints detect Hessian nullity

**Remember:** Count initial velocity variations that leave the endpoint fixed to first order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** The exponential map sends an initial velocity to the endpoint of its geodesic at time one. The conjugate multiplicity is the dimension of the kernel of the map’s derivative at that velocity.

**Problem.** Along a Riemannian geodesic with fixed endpoints, the dimension of the kernel of the energy Hessian equals the conjugate multiplicity at the final endpoint.

**How the definition helps.** The exponential map records exactly where a change of initial velocity sends the endpoint (our own). Differentiating this variation gives a Jacobi field, a solution of the linearized geodesic equation starting at zero (our own). The second variation identifies the kernel of the energy Hessian with those fields that also vanish at the final endpoint (our own).

**Paper or page:** [On the Cut Locus of Submanifolds of a Finsler Manifold](https://arxiv.org/abs/2307.11045). It says: “J is a Jacobi field along γ, satisfying J(0) = 0 = J(t).”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)
- [Aritra Bhowmick, Sachchidanand Prasad, On the Cut Locus of Submanifolds of a Finsler Manifold](https://arxiv.org/abs/2307.11045)

### Constant loops give Morse–Bott minima

**Remember:** Moving the base point does not bend a constant loop.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A submanifold C of minima is Morse–Bott if at every x ∈ C the Hessian has kernel TₓC. On the orthogonal complement of TₓC it must induce a bounded isomorphism to that complement’s continuous dual.

**Problem.** For loops of square integrable speed on a closed Riemannian manifold, the constant loops form a Morse–Bott submanifold of energy minima.

**How the definition helps.** The tangent directions move the constant loop to another point without changing its energy (our own). The second derivative of energy measures the integral of the squared derivative of a variation field, up to a positive factor (our own). The periodic Poincaré inequality bounds the squared norm of every mean-zero field by this integral, giving invertibility across the constant loops (our own).

**nLab:** [Morse theory](https://ncatlab.org/nlab/show/Morse+theory). It says: “Morse theory is the method of studying the topology of a smooth manifold M by the study of Morse functions M → ℝ and their associated gradient flows.”

**Sources:**

- [Wolfgang Ziller, The free loop space of globally symmetric spaces (1977)](https://doi.org/10.1007/BF01390161)
- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Free homotopy prevents constant minimizers

**Remember:** A loop that cannot contract cannot minimize to a point.

*Rules out counterexamples.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** Two loops belong to the same free homotopy class if one deforms continuously into the other while its starting point may move. A class is nontrivial if it contains no constant loop.

**Problem.** Every nontrivial free homotopy class on a closed Riemannian manifold has an energy-minimizing closed geodesic.

**How the definition helps.** The class excludes zero-energy loops while allowing variations that move the join (our own). A bounded-energy minimizing sequence has a uniformly convergent subsequence by the Cauchy–Schwarz inequality and compactness (our own). Nearby loops are homotopic, and lower semicontinuity of energy makes the limit a minimizer (our own). The first variation then gives a smooth periodic geodesic (our own).

**Paper or page:** [On the space of metrics with non-positive curvature](https://arxiv.org/abs/2506.19983). It says: “in particular there is a smooth closed geodesic γ₁ ∈ β.”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Free loop variations rule out corners

**Remember:** Moving the join tests whether the two velocities agree.

*Rules out counterexamples.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** Free loop energy integrates squared speed over one period of an absolutely continuous loop on a Riemannian manifold with square integrable speed. A variation may move the common starting and ending point.

**Problem.** Every critical point of the free loop energy is a smooth periodic geodesic, possibly constant. A single geodesic arc meeting its starting point with a different velocity cannot be critical.

**How the definition helps.** Moving the join tests the difference between the incoming and outgoing velocities (our own). Variations away from the join give the geodesic equation and hence a smooth geodesic on the open interval (our own). Integration by parts pairs the velocity difference with every possible displacement of the join, forcing the velocities to agree (our own).

**Wikipedia:** [Closed geodesic](https://en.wikipedia.org/wiki/Closed_geodesic). It says: “closed geodesics of period 1 are precisely the critical points of the energy function E : ΛM → ℝ”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Jacobi interpolation gives a matrix index

**Remember:** Variation at the joints holds all the negative directions.

*True by definition.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A broken Jacobi field is a continuous variation field along a geodesic that solves the linearized geodesic equation separately on each partition interval. For fixed endpoints, the field vanishes at both ends.

**Problem.** For a sufficiently fine partition, the fixed-endpoint energy Hessian along a Riemannian geodesic has the same index on broken Jacobi fields as on all variations.

**How the definition helps.** Jacobi interpolation replaces the search over all variations by a search over their values at finitely many joints (our own). The index counts the greatest dimension on which the energy Hessian is negative definite (our own). Subtracting the interpolant leaves a field vanishing at every joint, orthogonal to the interpolant for the Hessian by integration by parts (our own). Short segments have positive second variation for fixed endpoints, so the remaining fields add no negative directions (our own).

**Wikipedia:** [Jacobi field](https://en.wikipedia.org/wiki/Jacobi_field). It says: “values of J and D/dt J at one point of γ uniquely determine the Jacobi field.”

**Paper or page:** [The Morse index theorem in the case of two variable endpoints in conic Finsler manifolds](https://arxiv.org/abs/2302.00611). It says: “Equality holds only if u(t) = v(t) for all t ∈ \[a,b\].”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)
- [Guangcun Lu, The Morse index theorem in the case of two variable endpoints in conic Finsler manifolds](https://arxiv.org/abs/2302.00611)

### Relative sweepouts find nonconstant geodesics

**Remember:** Measure loop families relative to the constants, not against them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 3: graduate.

**Definition.** A relative sweepout maps a disk continuously into loops with square integrable velocity, using the norm that controls both loops and velocities. Boundary loops are constant, and deformations preserve this condition and fix one marked boundary value. The width of a deformation class is the infimum of maximum energies among its sweepouts.

**Problem.** On a compact Riemannian manifold without boundary, every nonzero relative sweepout class has positive width equal to the energy of a nonconstant closed geodesic.

**How the definition helps.** A sweepout that deforms entirely into constant loops represents zero (our own). All sufficiently low-energy loops retract continuously onto constant loops, giving every nonzero class a positive energy barrier (our own). Compactness for sequences with nearly zero derivative and the deformation theorem for loop energy give a critical loop at that height (our own).

**Wikipedia:** [Lyusternik–Fet theorem](https://en.wikipedia.org/wiki/Lyusternik%E2%80%93Fet_theorem). It says: “on every compact Riemannian manifold there exists a closed geodesic.”

**Sources:**

- [Wilhelm Klingenberg, Lectures on Closed Geodesics (1978)](https://doi.org/10.1007/978-3-642-61881-9)

### Free boundary coordinates are Steklov eigenfunctions

**Remember:** The outward unit conormal is the position vector.

*True by definition.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A free boundary minimal immersion in the unit ball has zero mean curvature and meets the boundary sphere orthogonally along its boundary. A Steklov eigenfunction is a nonzero harmonic function whose outward normal derivative equals a constant times its boundary value.

**Problem.** Each nonzero coordinate function of a compact free boundary minimal surface in the Euclidean unit ball has Steklov eigenvalue one for the induced metric.

**How the definition helps.** Orthogonality makes the outward unit normal within the surface equal to the position vector along the boundary (our own explanation). Each coordinate therefore equals its own outward derivative. The coordinate Laplacian formula gives interior harmonicity from zero mean curvature. The area variation formula identifies these geometric conditions with stationarity when the boundary can slide on the sphere.

**Paper or page:** [Non planar free boundary minimal disks into ellipsoids](https://arxiv.org/abs/2304.12111v2). It says: “free boundary minimal immersion such that”

**Sources:**

- [A. Fraser and R. Schoen, Sharp eigenvalue bounds and minimal surfaces in the ball](https://doi.org/10.1007/s00222-015-0604-x)

### Positive curvature makes stable surfaces spherical

**Remember:** Test stability with constant speed, then count curvature.

*True by definition.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A two-sided surface has a continuous unit normal. A minimal surface is stationary for area, meaning each smooth normal variation has zero first area derivative. It is stable when each such variation with compact support has nonnegative second area derivative.

**Problem.** In an oriented three-manifold of positive scalar curvature, each component of a closed two-sided stable minimal surface is a sphere.

**How the definition helps.** Stability permits a constant normal speed on each closed component, eliminating the derivative term in the second area variation (our own explanation). The Gauss equation then bounds twice the total intrinsic curvature below by the integral of the positive ambient scalar curvature. Each component is orientable, so the Gauss–Bonnet theorem forces it to be a sphere.

**Paper or page:** [Minimal surfaces and comparison geometry](https://arxiv.org/abs/2510.04481v1). It says: “then each component of a closed two-sided stable minimal surface”

**Sources:**

- [R. Schoen and S.-T. Yau, Existence of Incompressible Minimal Surfaces and the Topology of Three Dimensional Manifolds with Non-Negative Scalar Curvature (1979)](https://doi.org/10.2307/1971247)

### Strict convexity makes minimal graphs unique

**Remember:** Strict convexity allows only one stationary graph with given boundary values.

*True by definition.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A scalar minimal graph is the graph of a real function u that is stationary for the area integral with density √(1 + \|∇u\|²). Stationary means that every smooth variation fixing the boundary values has zero first area derivative.

**Problem.** On a bounded connected planar domain with smooth boundary, two scalar minimal graphs smooth up to the boundary coincide if their boundary values agree.

**How the definition helps.** The area definition gives a strictly convex function along the straight interpolation between two distinct graphs with equal boundary values (our own explanation). Their gradients must differ somewhere, since equal gradients and equal boundary values force the functions to coincide. Strict convexity rules out zero derivatives at both ends. The area variation formula identifies stationarity with the usual zero mean curvature equation.

**Paper or page:** [The Dirichlet problem for the minimal surface system on smooth domains](https://arxiv.org/abs/2506.23245v1). It says: “Then there exists a unique solution”

**Sources:**

- [H. Jenkins and J. Serrin, Variational problems of minimal surface type II. Boundary value problems for the minimal surface equation (1966)](https://doi.org/10.1007/bf00282252)

### Three boundary points prevent disk collapse

**Remember:** Fix three boundary points to stop the disk from drifting.

*Rules out counterexamples. Confidence: medium.* MSC 58E12 (Variational problems concerning minimal surfaces (problems in two independent variables)). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A normalized Plateau disk harmonically extends a parametrization of a simple closed curve in Euclidean space, one coordinate at a time. The boundary map is a uniform limit of homeomorphisms that traverse the curve in the same direction. Three distinct fixed boundary points map to three prescribed curve points in cyclic order.

**Problem.** Every sequence of normalized Plateau disks spanning the same curve with uniformly bounded Dirichlet energy has a uniformly convergent subsequence on the closed disk.

**How the definition helps.** Fixing three points prevents conformal changes of disk coordinates from squeezing almost the whole boundary towards one point (our own explanation). The Courant–Lebesgue estimate bounds oscillation on short arcs, and the ordered boundary maps turn that bound into uniform continuity across the family. A compactness theorem then gives boundary convergence, which harmonic extension carries into the disk.

**Wikipedia:** [Plateau's problem](https://en.wikipedia.org/wiki/Plateau%27s_problem). It says: “Douglas minimized the now-named Douglas integral, while Radó minimized the "energy".”

**Sources:**

- [J. Douglas, Solution of the problem of Plateau (1931)](https://doi.org/10.1090/s0002-9947-1931-1501590-9)

### Finite energy removes punctures

**Remember:** Finite energy becomes small on disks shrinking to a puncture.

*Rules out counterexamples.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A map has finite Dirichlet energy near a puncture if half its squared derivative has finite integral over a punctured disk. A harmonic map is a critical point of this energy under changes supported inside the domain.

**Problem.** A smooth harmonic map from a punctured disk to a closed Riemannian manifold extends smoothly across the puncture if its energy is finite.

**How the definition helps.** Finite energy makes the integral arbitrarily small on sufficiently small disks (our own explanation). The small-energy theorem then extends the map with continuous first derivatives, and the harmonic map equation gives smoothness. The circle map with angle log \|z\| winds endlessly near zero and has infinite energy (our own example).

**Paper or page:** [Compactness of harmonic maps of surfaces with regular nodes](https://arxiv.org/abs/2012.14040v2). It says: “then f can be extended to D in C¹.”

**Sources:**

- [J. Sacks and K. Uhlenbeck, The Existence of Minimal Immersions of 2-Spheres (1981)](https://doi.org/10.2307/1971131)

### Gradient flow dissipates map energy

**Remember:** Integrated squared speed gives the rate of energy loss.

*True by definition.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The Dirichlet energy integrates half the squared length of a map’s derivative. Harmonic map heat flow moves each map along the negative gradient of this energy. The inner product for this gradient integrates the pointwise inner products of two velocities.

**Problem.** Along a smooth harmonic map heat flow on a compact domain without boundary, the energy derivative equals minus the integral of squared speed.

**How the definition helps.** The velocity equals the negative gradient, so the chain rule gives the energy derivative as minus the integrated squared speed (our own explanation). The first variation formula identifies this velocity with the trace of the map’s second derivative, recovering the usual heat equation.

**Wikipedia:** [Harmonic map](https://en.wikipedia.org/wiki/Harmonic_map). It says: “the Laplacian of f can be thought of as the gradient of the Dirichlet energy”

**Sources:**

- [J. Eells Jr. and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### Harmonic forms classify harmonic circle maps

**Remember:** Integrate the harmonic form and take angles modulo 2π.

*Makes the theorem clean to state or prove.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** Local angles of a circle map differ by constant multiples of 2π, so their derivatives form one global differential form. A circle map is harmonic when this form has zero divergence. The form is already closed because it is locally a derivative.

**Problem.** Each homotopy class of maps from a connected closed Riemannian manifold to the unit circle contains exactly one harmonic map up to rotation.

**How the definition helps.** Differentiating the angle turns the harmonic map equation into a linear equation on forms (our own explanation). Integrals around closed loops record angle changes in multiples of 2π and determine the homotopy class. The Hodge theorem gives exactly one closed form with zero divergence and those loop integrals. Integrating it modulo 2π recovers the map up to its starting angle.

**nLab:** [Hodge theorem](https://ncatlab.org/nlab/show/Hodge+theorem). It says: “has precisely one harmonic cocycle reprentative.”

**Sources:** none listed. No primary source with a working link was found.

### Hopf differentials make harmonic spheres conformal

**Remember:** The sphere has no nonzero holomorphic quadratic differential to record distortion.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The Hopf differential of a surface map is the part of its pulled back metric proportional to dz² in a complex coordinate z. It vanishes exactly where the derivative scales lengths equally in all directions, allowing zero scale.

**Problem.** Every smooth harmonic map from the Riemann sphere to a Riemannian manifold is weakly conformal, meaning its derivative is conformal or zero.

**How the definition helps.** The Hopf differential packages the failure to preserve angles in one object (our own explanation). For a harmonic map, the harmonic map equation makes its coefficient holomorphic in every complex coordinate. On the Riemann sphere every such quadratic differential vanishes, so the derivative scales all directions equally.

**Paper or page:** [New examples of harmonic maps to the hyperbolic plane via Bäcklund transformation](https://arxiv.org/abs/2112.06601v3). It says: “the Hopf differential of u is holomorphic”

**Sources:** none listed. No primary source with a working link was found.

### Kähler splitting makes holomorphic maps minimize energy

**Remember:** The homotopy term stays fixed and the error vanishes for holomorphic maps.

*True by definition. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** On a Kähler manifold, the Kähler form ω satisfies ω(v,w) = g(Jv,w). For a surface map u, its antiholomorphic energy integrates ½\|b − Ja\|² against surface area. Here a and b are the derivatives along a positively oriented orthonormal frame for a compatible surface metric.

**Problem.** A holomorphic map from a closed Riemann surface to a Kähler manifold minimizes Dirichlet energy among all smoothly homotopic maps.

**How the definition helps.** The antiholomorphic energy measures exactly how much Dirichlet energy exceeds the integral of the pulled-back area form (our own explanation). Expanding the square gives the usual energy density ½(\|a\|² + \|b\|²) minus ω(a,b). A holomorphic map has b = Ja, so the excess vanishes. Stokes’ theorem keeps the area integral fixed throughout a homotopy.

**Wikipedia:** [Calibrated geometry](https://en.wikipedia.org/wiki/Calibrated_geometry). It says: “the calibrated submanifolds are the complex submanifolds.”

**Sources:** none listed. No primary source with a working link was found.

### Product energy separates harmonic maps

**Remember:** Split the energy to read off the harmonic factors.

*True by definition.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A harmonic map is a critical point of Dirichlet energy, the integral of half the squared norm of its derivative. For a product target, use the metric that sums the squared lengths from the factors.

**Problem.** A smooth map from a closed Riemannian manifold into a Riemannian product is harmonic exactly when both component maps are harmonic.

**How the definition helps.** The energy of a map into a product is the sum of its component energies (our own explanation). Varying one component at a time therefore tests both energy derivatives independently. The first variation formula identifies this test with the usual harmonic map equation.

**nLab:** [harmonic map](https://ncatlab.org/nlab/show/harmonic+map). It says: “which is a critical point of the Dirichlet kinetic energy functional”

**Sources:**

- [J. Eells Jr. and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### Subcritical energy preserves homotopy in limits

**Remember:** The higher power keeps limits in the same homotopy class.

*Rules out counterexamples. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** On a fixed closed Riemannian surface, the Sacks–Uhlenbeck energy integrates (1 + \|du\|²)ᵅ, where du is the derivative and α exceeds one.

**Problem.** Fix α &gt; 1 and a closed Riemannian target. Consider Sobolev maps from the fixed surface with weak derivative in L²ᵅ, using continuous representatives. Every sequence with uniformly bounded Sacks–Uhlenbeck energy has a uniformly convergent subsequence, whose maps are eventually homotopic to its limit.

**How the definition helps.** The higher power controls oscillation because the derivative exponent 2α exceeds the surface dimension (our own explanation). The Sobolev embedding bounds how fast the maps can vary, giving uniform convergence along a subsequence. Joining nearby values by short geodesics gives a continuous deformation to the limit. At α = 1, conformal automorphisms of the round sphere can concentrate at a point.

**Paper or page:** [Existence and Stability of α-harmonic Maps](https://arxiv.org/abs/2208.07995v1). It says: “it has a vanishing α-tension field.”

**Sources:**

- [J. Sacks and K. Uhlenbeck, The Existence of Minimal Immersions of 2-Spheres (1981)](https://doi.org/10.2307/1971131)

### Surface rescaling preserves harmonic morphisms

**Remember:** On a surface, changing scale does not change harmonic tests.

*True by definition.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** A harmonic morphism is a smooth map that pulls back each local solution of the Laplace equation to another solution. Pullback means composing the function with the map.

**Problem.** Multiplying the metric of a target surface by any smooth positive function preserves every harmonic morphism into that surface.

**How the definition helps.** The definition tests exactly the same functions after rescaling. On a surface, rescaling multiplies the Laplace operator by the reciprocal factor (our own explanation). The Fuglede–Ishihara theorem identifies this test with the usual conditions on the derivatives of the map.

**Wikipedia:** [Harmonic morphism](https://en.wikipedia.org/wiki/Harmonic_morphism). It says: “This means that, at least for local studies, the codomain can be chosen to be the complex plane with its standard flat metric.”

**Sources:**

- [B. Fuglede, Harmonic morphisms between Riemannian manifolds (1978)](https://doi.org/10.5802/aif.691)
- [T. Ishihara, A mapping of Riemannian manifolds which preserves harmonic functions (1979)](https://doi.org/10.1215/kjm/1250522428)

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

**Definition.** Let D be a first-order linear differential operator on sections of a smooth vector bundle E. For x and ξ ∈ Tₓ\* M, choose a smooth function f with dfₓ = ξ. Its symbol satisfies σ<sub>D</sub>(x,ξ)u(x) = D(fu)(x) − f(x)Du(x) for every smooth section u.

**Problem.** At each x, the commutator depends only on the differential df at x and acts linearly on the fiber Eₓ. So the first-order symbol does not depend on the choice of coordinates.

**How the definition helps.** The commutator uses only intrinsic operations (our own argument). In local coordinates, the product rule cancels every derivative of u and every term of order zero. The remaining terms depend linearly on dfₓ and u(x), so the formula gives the same fiber map in every chart.

**nLab:** [symbol of a differential operator](https://ncatlab.org/nlab/show/symbol+of+a+differential+operator). It says: “where in the commutator on the right we regard multiplication by f as an endomorphism of Γ(E).”

**Sources:** none listed. No primary source with a working link was found.

### Compact graph domains give finiteness

**Remember:** A bounded graph sequence has an ambient convergent subsequence.

*Rules out counterexamples.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** A Hilbert complex is a sequence of Hilbert spaces with closed, densely defined derivatives d satisfying d² = 0. Call it compact if any sequence bounded in norm together with its derivatives and adjoint derivatives has a convergent subsequence in the ambient space.

**Problem.** A finite compact Hilbert complex has closed differential ranges and finite-dimensional cohomology.

**How the definition helps.** Compactness rules out infinitely many orthonormal harmonic vectors and sequences that would prevent a closed range. In our own argument, unit vectors perpendicular to the harmonic space cannot have both derivative norms tending to zero. A convergent subsequence would give a harmonic unit vector perpendicular to that space. The resulting lower bound gives closed ranges, so harmonic vectors represent cohomology.

**Paper or page:** [Families of Annihilating Skew-Selfadjoint Operators and their Connection to Hilbert Complexes](https://arxiv.org/abs/2307.00946v2). It says: “compact if and only if the embedding dom(S) ↪︎ H is compact.”

**Sources:**

- [J. Brüning and M. Lesch, Hilbert complexes (1992)](https://doi.org/10.1016/0022-1236(92)90147-b)

### Completeness gives one derivative domain

**Remember:** Small cutoff gradients preserve the derivative.

*Rules out counterexamples.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** The minimal domain consists of limits of compactly supported smooth forms for which both the forms and their derivatives converge in L². The maximal domain allows every L² form whose derivative, tested against smooth compactly supported forms, also belongs to L².

**Problem.** On a complete Riemannian manifold without boundary, the minimal and maximal exterior derivatives on L² forms coincide.

**How the definition helps.** Completeness supplies cutoffs with arbitrarily small gradients, so cutting off a form also approximates its derivative. Our own proof then smooths the compactly supported approximations. On the incomplete interval (0,1), the constant function belongs to the maximal domain, but minimal-domain functions vanish at the endpoints.

**Paper or page:** [Lipschitz-homotopy invariants:L²-cohomology, Roe index and ρ-class](https://arxiv.org/abs/2109.07400v1). It says: “Then the maximal and the minimal domain of the exterior derivative coincide”

**Sources:**

- [M. P. Gaffney, The Heat Equation Method of Milgram and Rosenbloom for Open Riemannian Manifolds (1954)](https://doi.org/10.2307/1969846)

### Exact symbols make Laplacians elliptic

**Remember:** Exact symbols leave no null vector for the Laplacian.

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 3: graduate.

**Definition.** The principal symbol records the highest derivatives of an operator in a chosen covector direction. A differential complex is elliptic if each symbol image equals the next symbol kernel at every nonzero covector.

**Problem.** In a first-order elliptic complex with bundle metrics, the Laplacian DD⁎ + D⁎D has invertible symbol at every nonzero covector. Here D is the differential and D⁎ its adjoint.

**How the definition helps.** Symbol exactness replaces a determinant calculation with a test for membership in two orthogonal spaces. In our own proof, a Laplacian symbol kills a vector exactly when the outgoing symbol and the incoming adjoint symbol both kill it. Such a vector belongs to the incoming image and is perpendicular to it.

**Wikipedia:** [Elliptic complex](https://en.wikipedia.org/wiki/Elliptic_complex). It says: “Elliptic complexes isolate those features common to the de Rham complex and the Dolbeault complex which are essential for performing Hodge theory.”

**Sources:** none listed. No primary source with a working link was found.

### Eta phases forget the filling

**Remember:** Two fillings can change the index integral only by an integer.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J28. arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** For the twisted boundary Dirac operator D, form η(s) = ∑ sign(λ)\|λ\|⁻ˢ over nonzero eigenvalues counted with multiplicity, initially for large real s. The reduced eta invariant modulo integers is the class of (η(0) + dim ker D)/2, using analytic continuation at zero.

**Problem.** Take two compact spin fillings inducing the same oriented boundary metric, spin structure, and Hermitian bundle with unitary connection. Assume all data have product form near the boundary. Their integrals of the Dirac index density, the top-degree part of Â times the bundle’s Chern character, agree modulo integers.

**How the definition helps.** Our own argument uses that both integrals represent the same reduced boundary invariant modulo integers. The Atiyah–Patodi–Singer index theorem carries the work by identifying each difference with an integer index.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “as the boundary correction term for the index formula on a manifold with boundary”

**Sources:**

- [Michael F. Atiyah, Vijay K. Patodi and Isadore M. Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Hodge–Dirac index counts Euler characteristic

**Remember:** Even harmonic forms count up and odd ones count down.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J10. arXiv math.DG, math.AP. Level 3: graduate.

**Definition.** The even-to-odd Hodge–Dirac operator sends an even-degree form to (d + d⁎) applied to it. Here d is the exterior derivative and d⁎ its adjoint. The index is the kernel dimension minus the adjoint kernel dimension.

**Problem.** On a closed oriented Riemannian manifold, the index of the even-to-odd Hodge–Dirac operator is the Euler characteristic.

**How the definition helps.** Grouping degrees by parity turns the alternating sum for the Euler characteristic into one index. Our own argument identifies the two kernels with even and odd harmonic forms. The Hodge theorem gives one harmonic form per cohomology class.

**nLab:** [Hodge theorem](https://ncatlab.org/nlab/show/Hodge+theorem). It says: “Harmonic forms are precisely those in the kernel of d + d\*, which are precisely those in the joint kernel of d and d\*.”

**Sources:** none listed. No primary source with a working link was found.

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

**Definition.** On a closed even-dimensional Riemannian spin manifold, the chiral Dirac operator D⁺ restricts the spin Dirac operator to positive spinors. Its index is dim ker D⁺ minus dim ker (D⁺)⁎.

**Problem.** A closed even-dimensional spin manifold that admits a metric of positive scalar curvature has zero Â genus.

**How the definition helps.** The index theorem expresses the Â genus as the difference of the two chiral kernel dimensions (our own argument). The Lichnerowicz formula gives D² = ∇⁎∇ + R/4 for the full Dirac operator. Positive scalar curvature R makes its quadratic form strictly positive on nonzero spinors, so both kernels vanish.

**nLab:** [Lichnerowicz formula](https://ncatlab.org/nlab/show/Lichnerowicz+formula). It says: “The crucial point of the formula is that it shows a scalar summand (i.e. 0th order derivative) proportional to the scalar curvature.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Quaternionic spinors force signature divisibility

**Remember:** Each quaternionic spinor dimension counts twice over the complex numbers.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** On a closed Riemannian spin four-manifold, define the quaternionic index of the chiral Dirac operator as its quaternionic kernel dimension minus its quaternionic cokernel dimension.

**Problem.** On a closed smooth spin four-manifold, the signature of the intersection form on second cohomology is divisible by 16.

**How the definition helps.** Each quaternionic dimension contributes two complex dimensions, so the complex index is even (our own explanation). The spinor bundles carry quaternionic structures that the Dirac operator respects. The index and signature theorems identify the complex index with minus one eighth of the signature.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “In dimension 4 this result implies Rochlin's theorem that the signature of a 4-dimensional spin manifold is divisible by 16”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Spin makes Â integral

**Remember:** Lift oriented frames through the spin double cover.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** A spin structure on an oriented Riemannian n-manifold lifts its oriented orthonormal frame bundle through the double covering Spin(n) → SO(n).

**Problem.** The Â genus of a closed spin manifold is an integer. The spin requirement excludes the complex projective plane, whose Â genus is −1/8.

**How the definition helps.** The spin lift supplies the spinor bundles needed for the Dirac index (our own explanation). In even dimensions, the Atiyah–Singer theorem identifies the Â genus with the integer chiral index. In odd dimensions the Â polynomial has no top-degree term. The plane ℂP² has nonzero second Stiefel–Whitney class, so it lacks a spin lift, and its Pontryagin number 3 gives Â = −3/24.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “The Â genus is a rational number defined for any manifold, but is in general not an integer.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Topological indices ignore the embedding

**Remember:** Compare two embeddings after putting them in one larger Euclidean space.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** For an elliptic symbol on a closed manifold, take its compactly supported K-theory class on the cotangent bundle. Given a Euclidean embedding, push this class forward along the induced cotangent embedding by the normal Thom map and extension by zero. The topological index is the integer corresponding to this image under Bott periodicity.

**Problem.** The topological index of a symbol on a closed manifold does not depend on the chosen Euclidean embedding.

**How the definition helps.** Our own comparison puts both embeddings in one Euclidean product, where the index respects smooth deformations through embeddings. For embeddings i and j, first deform (i,0) to (i,j) by scaling j, then deform (i,j) to (0,j) by scaling i. The work lies in proving that the Thom construction respects composition, deformation, and the Bott identification.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “This map is independent of the embedding of X in Euclidean space.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://doi.org/10.2307/1970715)

### Signed heat traces recover eta

**Remember:** Insert D into the squared heat operator to restore the signs.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J35. arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** For a self-adjoint elliptic differential operator D of positive order on a closed manifold, the eta function counts positive and negative eigenvalues with opposite signs. It weights each nonzero eigenvalue λ by \|λ\| to the power −s and continues the resulting signed sum analytically.

**Problem.** For sufficiently large real part of s, Γ((s+1)/2)η(s) equals the integral over t &gt; 0 of t to the power (s−1)/2 times Tr(D exp(−tD²)).

**How the definition helps.** Inserting D into the heat trace restores the sign lost on squaring each eigenvalue. Our own calculation applies the gamma integral to each nonzero mode, turning its signed heat contribution into the corresponding eta weight. Absolute convergence in this half-plane permits termwise integration.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “The eta function is a kind of odd version of the Mellin transform of an odd version of the theta function”

**Sources:** none listed. No primary source with a working link was found.

### A ground state removes heat killing

**Remember:** Divide by the ground state so the generator kills constants.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** For H = Δ+V, take the nonnegative Laplacian Δ and a smooth real function V on a closed connected Riemannian manifold. Choose a positive eigenfunction h for the lowest eigenvalue λ. The ground state transform sends f to h⁻¹(H−λ)(hf) and weights volume by h².

**Problem.** The transformed operator is a weighted Laplacian, and its heat flow preserves the constant function one.

**How the definition helps.** Conjugation turns the lowest eigenfunction into the constant one, which the shifted operator kills. Our own product calculation gives the weighted Laplacian f ↦ −h⁻² div(h²∇f). The ground state theorem supplies a strictly positive h, so division by h is valid everywhere.

**Wikipedia:** [Doob's h-transform](https://en.wikipedia.org/wiki/Doob%27s_h-transform). It says: “The key advantage of Doob's h-transform is that the transition probabilities of the transformed process are explicitly given as functions of h.”

**Sources:** none listed. No primary source with a working link was found.

### Conformal surfaces share heat recurrence

**Remember:** In two dimensions, conformal changes leave gradient energy unchanged.

*True by definition.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.DG, math.SP. Level 3: graduate.

**Definition.** A surface is parabolic when every compact set has zero capacity. Capacity is the infimum of gradient energy over smooth compactly supported functions that are at least 1 near the set.

**Problem.** On complete connected surfaces without boundary, conformally related metrics have the same Brownian recurrence behavior. Recurrence means Brownian motion returns to every open neighborhood of its starting point arbitrarily late with probability one.

**How the definition helps.** Capacity uses gradient energy, whose gradient and area factors cancel under a conformal change in two dimensions. Our own calculation therefore gives identical capacities. The capacity criterion identifies vanishing capacity of every compact set with Brownian recurrence.

**Paper or page:** [Parabolicity of invariant Surfaces](https://arxiv.org/abs/2312.02837). It says: “In dimension 2, parabolicity is preserved under conformal changes in the metric tensor.”

**Sources:**

- [Andrea Del Prete, Vicent Gimeno i Garcia, Parabolicity of invariant Surfaces](https://arxiv.org/abs/2312.02837)

### Diffusion distances use twice the heat time

**Remember:** Inner products of heat profiles let the two times add.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The heat profile Kₜ(x,·) gives the temperature distribution at time t from a unit point source at x. Diffusion distance between x and y is the L² distance between their profiles, using Riemannian volume.

**Problem.** On a closed Riemannian manifold, squared diffusion distance equals K₂ₜ(x,x)+K₂ₜ(y,y)−2K₂ₜ(x,y) for every t &gt; 0.

**How the definition helps.** The profile definition turns each inner product into two successive heat steps. Our own calculation expands the squared distance and uses kernel symmetry to compose the two steps. The heat composition law then evaluates all three terms at time 2t without computing diffusion coordinates.

**Wikipedia:** [Diffusion map](https://en.wikipedia.org/wiki/Diffusion_map). It says: “Dₜ(xᵢ,xⱼ)² = ∑ᵧ (p(y,t\|xᵢ)−p(y,t\|xⱼ))²/ϕ₀(y)”

**Sources:**

- [Ronald Coifman and Stéphane Lafon, Diffusion Maps (2006)](https://doi.org/10.1016/j.acha.2006.04.006)

### Heat traces multiply on products

**Remember:** Eigenvalues add on products, so their heat weights multiply.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The spectral heat operator at time t multiplies each Laplace eigenfunction with eigenvalue λ by exp(−tλ). Its heat kernel is the function that represents this operator by integration.

**Problem.** On a product of closed Riemannian manifolds with the product metric, the scalar heat kernel equals the product of the two heat kernels. Their heat traces multiply as well.

**How the definition helps.** The exponential converts sums of eigenvalues into products of heat weights. Our own calculation uses products of eigenfunctions, which form a complete basis because the product Laplacian adds the factor Laplacians. Smooth convergence gives the kernel formula without solving the heat equation again.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The heat kernel K for P is then the kernel of an integral operator representing the heat operator”

**Sources:** none listed. No primary source with a working link was found.

### Iterated energy controls heat gradients

**Remember:** The iterated energy is the derivative of a heat interpolation.

*True by definition.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** For a smooth weight V on a closed Riemannian manifold, let Lf = div(∇f)−⟨∇V,∇f⟩ generate heat flow Pₜ. Define the gradient energy Γ(f) = \|∇f\|² and its iteration Γ₂(f) = (LΓ(f)−2⟨∇f,∇Lf⟩)/2.

**Problem.** If Γ₂(f) ≥ KΓ(f) for all smooth f, then Γ(Pₜf) ≤ exp(−2Kt)PₜΓ(f) at every point and every time t ≥ 0.

**How the definition helps.** Differentiating a heat average produces exactly the two terms in Γ₂ (our own calculation). Set u = Pₜ₋ₛf and F(s) = PₛΓ(u) for 0 ≤ s ≤ t. Then F′(s) = 2PₛΓ₂(u) ≥ 2KF(s) because heat flow preserves positivity. Integrating gives F(0) ≤ exp(−2Kt)F(t).

**Paper or page:** [A Bakry-Émery approach to Lipschitz transportation on manifolds](https://arxiv.org/abs/2310.02478). It says: “Γ(Pₜf) ≤ exp(−2ρt) Pₜ(Γ(f)).”

**Sources:** none listed. No primary source with a working link was found.

### Spectral gaps set heat decay

**Remember:** Apply the energy bound to the moving temperature.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** On a closed connected Riemannian manifold, the spectral gap λ is the largest constant satisfying ∫\|∇f\|² ≥ λ∫\|f\|² for every smooth mean-zero function f.

**Problem.** On square-integrable mean-zero functions, the heat operator at time t ≥ 0 has norm exactly exp(−tλ).

**How the definition helps.** The energy definition bounds the derivative of the squared norm along heat flow by −2λ times that norm squared. Our own proof integrates this inequality. The variational characterization identifies λ with the first positive eigenvalue, whose eigenfunctions attain equality.

**Paper or page:** [Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246). It says: “\|θ(t) − 1\| ≤ Cγ exp(−γt), for any t ≥ 1”

**Sources:** none listed. No primary source with a working link was found.

### Wave propagation localizes heat

**Remember:** Only the Gaussian tail reaches past the wave front.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The wave formula defines heat flow at time t by averaging the wave operators cos(s√Δ) over a centered Gaussian of variance 2t. Here Δ is the nonnegative scalar Laplacian. The Gaussian Fourier transform gives the usual heat operator exp(−tΔ).

**Problem.** Suppose square-integrable functions f and g on a closed Riemannian manifold have supports at distance r. At t &gt; 0, their heat pairing \|⟨exp(−tΔ)f,g⟩\| is at most exp(−r²/(4t)) times their L² norms multiplied together.

**How the definition helps.** Finite wave speed removes all wave times with \|s\| &lt; r from the average. In our own proof, each remaining wave operator has norm at most one. The two-sided Gaussian tail is at most exp(−r²/(4t)), giving the bound.

**Paper or page:** [The Gromov-Lawson index and the Baum-Connes assembly map](https://arxiv.org/abs/2103.03495). It says: “Moreover, it has finite propagation ≤ t \|x\|.”

**Sources:** none listed. No primary source with a working link was found.

### Canonical relations track singular directions

**Remember:** Keep the output directions paired with singular input directions.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** For a Fourier integral operator with nondegenerate homogeneous phase φ(x,y,θ), impose ∂θφ = 0 at nonzero θ. Its local canonical relation pairs (x,∂ₓφ) with (y,−∂ᵧφ) at those points.

**Problem.** Suppose both directions in every pair are nonzero. For compactly supported distributions, every output wave front direction pairs with an input wave front direction.

**How the definition helps.** The canonical relation records which input covectors can contribute to each output covector (our own explanation). The wave front mapping theorem for distribution kernels gives the inclusion because neither covector can vanish.

**Paper or page:** [Ellipsoidal and hyperbolic Radon transforms; microlocal properties and injectivity](https://arxiv.org/abs/2212.00243v1). It says: “WF(Af) ⊂ C ∘ WF(f).”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Characteristic sets locate hidden singularities

**Remember:** An operator can hide a singularity only in a characteristic direction.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** The characteristic set consists of the nonzero frequencies where the leading symbol, the highest-order frequency term, vanishes. The wave front set records positions and directions where local Fourier decay fails to beat every inverse power.

**Problem.** For a properly supported scalar classical pseudodifferential operator A, a distribution u and its image Au have identical wave front sets outside the characteristic set.

**How the definition helps.** The characteristic set marks precisely where one cannot start an inverse by dividing by the leading symbol. In our own explanation, restricting either kernel variable to a compact set also confines the other to a compact set. The local inverse theorem then recovers u from Au up to a smooth error in each remaining direction.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “WF(Au) ⊂ WF u ⊂ WF(Au) ∪ Char A.”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Invertible symbols give Fredholm operators

**Remember:** Invert at high frequencies and leave only compact errors.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** A classical pseudodifferential operator is elliptic when its leading symbol, the highest-order frequency term, is invertible at every nonzero covector. An operator is Fredholm when its range is closed and its kernel and cokernel have finite dimension.

**Problem.** On a compact manifold without boundary, a classical operator of order m is Fredholm between Sobolev orders s and s − m exactly when elliptic.

**How the definition helps.** Ellipticity turns the Fredholm criterion into a pointwise test on the leading symbol. In our own explanation, symbol inversion constructs an inverse up to smooth errors, which are compact here. Conversely, localized high-frequency tests detect a singular leading symbol. Sobolev order measures regularity in square mean.

**Paper or page:** [Analysis on noncompact manifolds and Index Theory: Fredholm conditions and Pseudodifferential operators](https://arxiv.org/abs/2308.06225v1). It says: “Then P : Hˢ(M; E) → Hˢ⁻ᵐ(M; F) is Fredholm if, and only if, it is elliptic.”

**Sources:**

- [Michael F. Atiyah and Isadore M. Singer, The Index of Elliptic Operators I (1968)](https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf)

### Proper support preserves compact tests

**Remember:** The transpose must keep test functions compactly supported.

*Rules out counterexamples. Confidence: medium.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** A kernel has proper support if restricting either coordinate to a compact set confines the other coordinate to a compact set.

**Problem.** A properly supported pseudodifferential operator acts on all distributions, meaning generalized functions, and carries compactly supported distributions to compactly supported distributions.

**How the definition helps.** Proper support keeps the transpose of the operator from spreading a compactly supported test function to infinity. In our own argument, the transpose also preserves smoothness, so any distribution can act on the resulting test function. The other support bound controls the output. On the real line the constant kernel would require integrating the constant function over the entire line.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “Tσ₁ is properly supported”

**Sources:**

- [Lars Hörmander, Fourier integral operators. I (1971)](https://doi.org/10.1007/BF02392052)

### Strong ellipticity bounds energy below

**Remember:** Require a positive real part on every unit covector.

*Rules out counterexamples.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 3: graduate.

**Definition.** For a scalar classical operator of order 2m, its leading symbol is the highest-order frequency term. Strong ellipticity means that its real part is positive on every unit covector.

**Problem.** On a compact manifold without boundary, strong ellipticity of order 2m &gt; 0 gives Re ⟨Au,u⟩ ≥ c‖u‖²ₘ − C‖u‖²₀ for every smooth u. Here c &gt; 0 and C ≥ 0 are fixed, and the norms measure square-integrable regularity of the indicated orders.

**How the definition helps.** Positivity on the compact unit covector bundle gives a uniform positive lower bound there. In our own explanation, the energy estimate factors the positive leading term and controls the lower-order error. The negative of the nonnegative circle Laplacian is elliptic but violates the bound on high Fourier modes.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “and the symbol a ∈ S²ᵐ is strongly elliptic.”

**Sources:** none listed. No primary source with a working link was found.

### Causal subtraction gives skew adjoints

**Remember:** Taking the adjoint swaps future and past.

*True by definition.* MSC 58J45 (Hyperbolic equations on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** For each smooth compactly supported section f, a retarded Green operator G satisfies PGf = GPf = f and supp(Gf) ⊆ J⁺(supp f). The advanced operator satisfies the same identities with the causal past J⁻ replacing the causal future J⁺. Their difference, retarded minus advanced, is the causal propagator.

**Problem.** For a formally self-adjoint Green-hyperbolic operator on a globally hyperbolic spacetime, its causal propagator is formally skew adjoint. The adjoint identity is tested by integrating against compactly supported smooth sections.

**How the definition helps.** Taking the adjoint exchanges the two terms in the defining difference, which changes its sign. Our own explanation uses the separate Green operators to avoid computing the propagator’s integral kernel. The work is proving the exchange identity by integration by parts. Global hyperbolicity makes the overlap of the relevant future and past supports compact for compactly supported forcing.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “are formally adjoint differential operators, up to a sign”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes](https://doi.org/10.1007/s00220-014-2097-7)

### Wave fronts follow Hamiltonian flows

**Remember:** Singular covectors follow the Hamiltonian flow on the zero set.

*Makes the theorem clean to state or prove.* MSC 58J47 (Propagation of singularities; initial value problems on manifolds), 58J40. arXiv math.AP. Level 3: graduate.

**Definition.** The wave front set records positions and directions where local Fourier decay fails to beat every inverse power. A real leading symbol p drives the Hamiltonian flow with velocity (∂ξp, −∂ₓp) in position and frequency. Real principal type here requires this velocity to be nonradial wherever p vanishes at nonzero frequency.

**Problem.** Suppose a properly supported scalar classical pseudodifferential operator P has real principal type and Pu is smooth. The wave front set of u consists of entire Hamiltonian trajectories in the zero set of its leading symbol.

**How the definition helps.** Recording frequency as well as position distinguishes trajectories even where their paths on the manifold cross. In our own explanation, elliptic regularity excludes singularities off the zero set. The propagation estimate transports regularity along each remaining trajectory.

**Paper or page:** [Lecture notes for pseudodifferential operators and microlocal analysis](https://arxiv.org/abs/2107.12839v1). It says: “WF(u) is made of null bicharacteristic curves”

**Sources:**

- [J. J. Duistermaat and Lars Hörmander, Fourier integral operators. II (1972)](https://doi.org/10.1007/BF02392165)

### Boundary-fixed conformal changes preserve Steklov spectra

**Remember:** Interior conformal changes preserve harmonic functions and leave boundary normals alone.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The Dirichlet-to-Neumann operator extends boundary temperatures to a harmonic function, a function with zero Laplacian. It returns the outward normal derivative at the boundary. Its eigenvalues with multiplicities form the Steklov spectrum.

**Problem.** On a compact connected Riemannian surface with smooth nonempty boundary, a conformal change preserving the boundary metric preserves this operator and its Steklov spectrum.

**How the definition helps.** The boundary operator uses only the harmonic extension and the boundary normal. In our own proof, a conformal change multiplies the surface Laplacian by a positive function, preserving harmonicity. Uniqueness gives the same extension, and the unit normal agrees because the conformal factor equals one on the boundary.

**Wikipedia:** [Poincaré–Steklov operator](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Steklov_operator). It says: “to the normal derivative ∂u/∂n on the boundary of Ω.”

**Sources:** none listed. No primary source with a working link was found.

### Energy domains bracket eigenvalues

**Remember:** Zero trace restricts the energy domain, while cutting without matching enlarges it.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** Define the Neumann Laplacian by gradient energy on square-integrable functions with square-integrable weak first derivatives. For the Dirichlet Laplacian, restrict that energy to functions with zero boundary values in the trace sense.

**Problem.** Cut a closed Riemannian manifold along a smooth separating hypersurface and combine the spectra of the pieces with multiplicity. At each index the Neumann eigenvalue is at most the uncut eigenvalue, which is at most the Dirichlet eigenvalue.

**How the definition helps.** Energy domains expose inclusions that the differential boundary conditions conceal. In our own proof, zero boundary values imply matching values, while independent Neumann energy domains require no matching. The trace theorem identifies matching functions with uncut functions. The variational min-max formula raises eigenvalues when the energy domain shrinks.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “The min-max theorem also applies to (possibly unbounded) self-adjoint operators.”

**Sources:** none listed. No primary source with a working link was found.

### Gauge equivalence preserves magnetic spectra

**Remember:** Conjugating the derivative also conjugates its Laplacian.

*Rules out counterexamples. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** A unitary connection differentiates sections of a complex line bundle while respecting their inner products. Two connections are gauge equivalent if a length-preserving complex-linear change in each fiber carries one derivative to the other and varies smoothly.

**Problem.** On a closed Riemannian manifold, gauge-equivalent connections have the same connection Laplacian spectrum, including multiplicities. Connections with equal curvature can have different spectra.

**How the definition helps.** The same unitary change carries each derivative and its adjoint to the other pair, so it conjugates their Laplacians. Our own counterexample uses d and d+iα dθ on the circle of length 2π. Both have zero curvature, but their eigenvalues are n² and (n+α)² for integers n. Only the first spectrum contains zero when α is not an integer.

**nLab:** [holonomy](https://ncatlab.org/nlab/show/holonomy). It says: “its parallel transport around some loop γ : \[0,1\] → X”

**Sources:** none listed. No primary source with a working link was found.

### Heat coefficients identify zeta poles

**Remember:** A heat term with power −a gives a pole at a.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** For a strictly positive operator of Laplace type, such as the scalar Laplacian plus one, let H(t) sum exp(−tλ) over eigenvalues with multiplicity. For large real part of s, define Γ(s)ζ(s) by integrating H(t) times t to the power s−1 over positive times. Here Γ is the gamma function, and ζ is the spectral zeta function.

**Problem.** On a closed manifold, a term c times t to the power −a in the small-time expansion of H gives Γ(s)ζ(s) residue c at a. The nonzero coefficients give precisely the poles, all simple.

**How the definition helps.** Our own calculation turns each heat term into c/(s−a) by integrating from zero to one. Subtracting enough terms leaves an integral analytic near a. The heat expansion controls this remainder, and the gamma integral identifies ζ with the usual sum of inverse eigenvalue powers.

**nLab:** [zeta function of an elliptic differential operator](https://ncatlab.org/nlab/show/zeta+function+of+an+elliptic+differential+operator). It says: “The zeta function of H is the holomorphic function defined by the series”

**Sources:** none listed. No primary source with a working link was found.

### Heat content hears eigenfunctions

**Remember:** Heat content weights each mode by its overlap with uniform heat.

*Makes the theorem clean to state or prove.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** Dirichlet heat content is the total heat left at time t after a region starts at temperature one and its boundary stays at zero.

**Problem.** Two bounded planar sets can have the same Dirichlet eigenvalues, including multiplicities, and different heat contents.

**How the definition helps.** Total heat weights each eigenspace by the squared length of the projection of the constant function onto it. Our own calculation expands the initial temperature in eigenfunctions and integrates the solution. The cited Chapman sets have equal spectra and different heat contents.

**Paper or page:** [Torsional rigidity and isospectral planar sets](https://arxiv.org/abs/2105.07477). It says: “The Chapman domains C₁ and C₂ are distinguished by heat content.”

**Sources:**

- [Joseph Comer, Patrick McDonald, Torsional rigidity and isospectral planar sets](https://arxiv.org/abs/2105.07477)

### Heat traces recover area

**Remember:** At short times the heat trace first sees area.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds), 11F72. arXiv math.SP. Level 3: graduate.

**Definition.** On a closed oriented surface X of curvature −1, define the heat trace H(t) = ∑ exp(−tλ) for t &gt; 0. Sum over the eigenvalues λ of the nonnegative Laplacian, counting multiplicity.

**Problem.** As t decreases to zero, tH(t) tends to area(X)/(4π).

**How the definition helps.** The heat trace weights the geodesic terms in Selberg’s trace formula by Gaussians (our own derivation). Each positive length ℓ contributes a factor exp(−ℓ²/(4t)). A positive shortest length and at most exponential growth in geodesic counts make these terms negligible as t decreases to zero. The identity term is asymptotic to area(X)/(4πt).

**Wikipedia:** [Selberg trace formula](https://en.wikipedia.org/wiki/Selberg_trace_formula). It says: “By suitable choices of the test function, the trace formula yields asymptotic information about eigenvalues of the Laplacian”

**Sources:**

- [Dennis A. Hejhal, The Selberg Trace Formula for PSL(2,ℝ), volume I (1976).](https://doi.org/10.1007/BFb0079608)

### Heat traces recover multiplicities

**Remember:** The slowest remaining exponential reveals the next eigenvalue.

*True by definition. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The heat trace at time t &gt; 0 sums exp(−tλ) over the eigenvalues λ of the nonnegative Laplacian, counting every copy.

**Problem.** Two closed Riemannian manifolds have identical Laplace eigenvalues with multiplicity exactly when their heat traces agree at every positive time.

**How the definition helps.** In our own argument, the slowest exponential in the trace reveals the least eigenvalue and its multiplicity. Subtract that contribution and repeat. Convergence of the trace at each positive time justifies isolating each successive term as t tends to infinity.

**Paper or page:** [Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246). It says: “The function θ = θℛₘ defined by the heat trace: θ(t) := Tr(exp(−tℛₘ)), t &gt; 0, is positive valued, decreasing and smooth on (0,∞).”

**Sources:** none listed. No primary source with a working link was found.

### Heat constants control determinant scaling

**Remember:** The constant heat term, minus zero modes, is the scaling exponent.

*True by definition. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 58J35. arXiv math.SP, math.DG. Level 3: graduate.

**Definition.** The spectral zeta function ζ continues the sum of λ to the power −s over positive eigenvalues λ from the region where it converges. The zeta determinant is exp(−ζ′(0)), with zero eigenvalues omitted from the sum.

**Problem.** For a nonnegative operator A of Laplace type on a closed manifold, scaling A by c &gt; 0 multiplies its zeta determinant by cᵃ⁻ᵏ. Here a is the constant term of the heat trace expansion, and k counts zero eigenvalues with multiplicity.

**How the definition helps.** The zeta sum turns scaling into multiplication by c to the power −s before differentiation. Our own calculation therefore gives scaling exponent ζ(0). The integral relating the heat trace to ζ gives ζ(0) = a−k after removing the zero modes.

**nLab:** [zeta function of an elliptic differential operator](https://ncatlab.org/nlab/show/zeta+function+of+an+elliptic+differential+operator). It says: “detᵣₑg H ≔ exp(−ζ′ₕ(0)).”

**Sources:** none listed. No primary source with a working link was found.

### Almost conjugate subgroups preserve spectra

**Remember:** Equal class counts give equal dimensions of fixed eigenfunctions.

*True by definition.* MSC 58J53 (Isospectrality). arXiv math.SP. Level 3: graduate.

**Definition.** Let a finite group G act freely by isometries on a closed hyperbolic surface X. Call subgroups H and J almost conjugate if they meet each conjugacy class of G in equal numbers.

**Problem.** If H and J are almost conjugate, the quotient surfaces X/H and X/J have the same Laplace eigenvalues, including multiplicities.

**How the definition helps.** Equal class counts give equal subgroup averages of the character of each Laplace eigenspace (our own argument). Averaging the subgroup action projects onto its fixed vectors, so the averaged character gives their dimension. These vectors are precisely the lifts of the quotient eigenfunctions.

**Wikipedia:** [Isospectral](https://en.wikipedia.org/wiki/Isospectral). It says: “are subgroups of G meeting each conjugacy class of G in the same number of elements”

**Sources:**

- [Toshikazu Sunada, Riemannian Coverings and Isospectral Manifolds (1985).](https://doi.org/10.2307/1971195)

### Fiberwise nondegeneracy preserves parameters

**Remember:** Use the Hessian in the variables you can change.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** A fiberwise nondegenerate critical point of a smooth real function F(u,x) satisfies two tests with the parameter u fixed. Its first derivative in x vanishes and its matrix of second derivatives in x is invertible.

**Problem.** Nearby fiber critical points form a smooth graph x = c(u). Coordinates fixing u express F as its value on the graph plus a fixed sum of signed squares.

**How the definition helps.** The invertible fiber Hessian lets the implicit function theorem solve for the graph (our own argument). The parametric Morse lemma supplies quadratic coordinates after centering on the graph and subtracting the critical value. For F(u,x) = ux, the full Hessian is invertible but the fiber critical set is u = 0.

**nLab:** [Morse lemma](https://ncatlab.org/nlab/show/Morse+lemma). It says: “The Morse lemma states that for any nondegenerate critical point p of f there is a chart φ: U → ℝⁿ around p such that the function in these coordinates is quadratic”

**Paper or page:** [Local intersections of Lagrangian manifolds correspond to catastrophe theory](https://arxiv.org/abs/1811.10165v5). It says: “There exists a change of coordinates K on a neighbourhood of 0”

**Sources:** none listed. No primary source with a working link was found.

### Normal nondegeneracy excludes quartics

**Remember:** Allow flat tangent directions, but not flat normal directions.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth real function is Morse–Bott along a submanifold of critical points if its Hessian kernel there equals the tangent space. The Hessian is the form of second derivatives at a critical point.

**Problem.** Near each point of that submanifold, smooth coordinates express the function as its critical value plus signed squares of the normal coordinates.

**How the definition helps.** The kernel condition makes the normal Hessian invertible, so the Morse lemma with parameters supplies normal coordinates varying smoothly along the submanifold (our own explanation). For y⁴ the critical line is smooth, but the normal Hessian vanishes.

**Paper or page:** [Gradient Flow in Morse and Analytic Settings](https://arxiv.org/abs/2311.09968v1). It says: “Let f: M → ℝ be Morse–Bott and N a l-dimensional critical submanifold of f with index λ.”

**Sources:**

- [Raoul Bott, Nondegenerate Critical Manifolds](https://doi.org/10.2307/1969631)

### Distinct critical values give stability

**Remember:** Give each critical point its own height.

*Rules out counterexamples. Confidence: medium.* MSC 58K25 (Stability theory for manifolds), 58K05. arXiv math.DG. Level 3: graduate.

**Definition.** An excellent Morse function has an invertible Hessian at every critical point. It takes distinct values at distinct critical points.

**Problem.** On a closed smooth manifold, every sufficiently small smooth perturbation of an excellent Morse function differs from it by source and target coordinate changes.

**How the definition helps.** Distinct critical values allow one target coordinate change to adjust each critical height independently (our own explanation). For cos(2θ) on the circle, raising one of the two equal maxima creates an extra critical value. The stability proof uses Morse coordinates at critical points and integrates a vector field elsewhere.

**Wikipedia:** [Morse theory](https://en.wikipedia.org/wiki/Morse_theory). It says: “two critical points are at the same height, which can be resolved by a slight perturbation of f.”

**Sources:**

- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities](https://doi.org/10.1007/978-1-4615-7904-5)

### Multijets rule out quadruple points

**Remember:** Test coincidences only at distinct source points.

*Rules out counterexamples.* MSC 58K30 (Global theory of singularities), 57R35. arXiv math.GT. Level 3: graduate.

**Definition.** The four-point multijet of order zero records a map’s values at four distinct ordered source points. A quadruple point occurs when this tuple belongs to the diagonal, where all four entries agree.

**Problem.** For a generic smooth map from a surface to a three-manifold, the four-point multijet is transverse to the diagonal and there are no quadruple points. Here generic means on a set containing a countable intersection of open dense sets in the smooth Whitney topology.

**How the definition helps.** Requiring distinct source points removes the repeated tuple (x,x,x,x), which would give a coincidence for every map (our own explanation). The multijet transversality theorem gives transversality to the diagonal for generic maps. The configuration space has dimension eight, so a transverse map cannot meet the diagonal of codimension nine.

**nLab:** [transversal maps](https://ncatlab.org/nlab/show/transversal+maps). It says: “Maps f: X → Z, g: Y → Z with dim(X)+dim(Y) &lt; dim(Z) are transversal iff their images are disjoint.”

**Sources:**

- [John N. Mather, Stability of C∞ Mappings V. Transversality](https://doi.org/10.1016/0001-8708(70)90028-9)

### Intrinsic Hessians recognize folds

**Remember:** Test the second derivative in the lost directions.

*Rules out counterexamples.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.DG. Level 3: graduate.

**Definition.** For a smooth map from dimension n to dimension p ≤ n, consider a point where the derivative has rank p−1. Restrict the second derivative to kernel directions and project its values modulo the image of the first derivative. A fold point has a nondegenerate resulting form, meaning its kernel is zero.

**Problem.** Near a fold point, smooth source and target coordinates put the map in the form (u,x) ↦ (u,Q(x)) for a nondegenerate quadratic form Q.

**How the definition helps.** Straightening the first p−1 outputs turns the projected second derivative into the Hessian in the remaining variables (our own argument). The parametric Morse lemma gives the quadratic part, and subtracting the critical value in the target finishes the change. At the origin of (u,x) ↦ (u,x³ + ux), rank alone misses the vanishing second derivative.

**Paper or page:** [Local intersections of Lagrangian manifolds correspond to catastrophe theory](https://arxiv.org/abs/1811.10165v5). It says: “There exists a change of coordinates K on a neighbourhood of 0”

**Sources:**

- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities](https://doi.org/10.1007/978-1-4615-7904-5)

### In smooth sets, every differential form comes from one universal form

**Remember:** A form on X is a map from X into the space of all forms.

*True by definition.* MSC 58A03 (Topos-theoretic approach to differentiable manifolds), 58A10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** For every Cartesian space U, let Ωⁿ(U) be the smooth n-forms on U, with pullback along every smooth map of Cartesian spaces. These sets and pullbacks define a sheaf Ωⁿ. An n-form on a smooth set X is a morphism of sheaves X → Ωⁿ.

**Problem.** For every smooth set X, each differential n-form on X is the pullback of one universal n-form along a map X → Ωⁿ. For n ≥ 1, Ωⁿ is a smooth set but not a diffeological space.

**How the definition helps.** The identity map of Ωⁿ is its universal n-form. Pulling it back along any form α gives id ∘ α = α (our own explanation). For n ≥ 1, Ωⁿ has one point but distinct plots, including the zero and standard volume forms on ℝⁿ. A diffeological plot is determined by its underlying point map, so Ωⁿ cannot be diffeological.

**nLab:** [geometry of physics -- smooth sets](https://ncatlab.org/nlab/show/geometry+of+physics+--+smooth+sets), [smooth set](https://ncatlab.org/nlab/show/smooth+set). It says: “This statement is of course in a way a big tautology. Nevertheless it is a very useful tautology to make explicit.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos (2013), arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Covers with overlaps diffeomorphic to ℝⁿ make Čech nerves cofibrant

**Remember:** Every overlap is a copy of ℝⁿ, so every overlap is representable.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 18N40, 18F20. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A differentiably good open cover of a smooth manifold is an open cover in which every non-empty finite intersection is diffeomorphic to ℝⁿ. An ordinary good open cover only asks that these intersections be contractible.

**Problem.** The Čech nerve of a differentiably good open cover is cofibrant in the projective local model structure on simplicial presheaves on Cartesian spaces. So it is a cofibrant resolution of the manifold.

**How the definition helps.** Every nonempty intersection in the Čech nerve represents a Cartesian space. Degeneracies repeat adjacent indices, so each nondegenerate index tuple contributes a representable simplex attached along its boundary (our own explanation). These projective cell attachments give cofibrancy, which localizing preserves. The cover condition makes the augmentation a local weak equivalence.

**nLab:** [good open cover](https://ncatlab.org/nlab/show/good+open+cover), [function algebras on infinity-stacks](https://ncatlab.org/nlab/show/function+algebras+on+infinity-stacks). It says: “The point is that with this definition, the Cech nerve C(U) ∈ \[ThCartSpᵒᵖ, sSet\]<sub>proj</sub> is cofibrant, by the characterization of cofibrant objects in the projective model structure.”

**Sources:**

- [Domenico Fiorenza, Urs Schreiber, Jim Stasheff, Čech cocycles for differential characteristic classes, Adv. Theor. Math. Phys. 16 (2012) 149–250, arXiv:1011.4735](https://arxiv.org/abs/1011.4735)

### Diffeology gives orbit spaces a tangent space equal to the stratified one

**Remember:** Lift plots locally, then identify their tangent vectors under smooth reparametrization.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A05 (Differentiable manifolds, foundations), 57M60. arXiv math.DG. Level 4: research.

**Definition.** A plot in M/G is a map from a Euclidean open set that locally lifts smoothly to M. At an orbit q, take the direct sum of tangent spaces at basepoints of all plots through q. For each pointed smooth reparametrization φ with p = r ∘ φ, identify v in the p-summand with dφ(v) in the r-summand by linear quotient.

**Problem.** Let a Lie group act properly on M and give M/G the quotient diffeology. At each orbit, the internal tangent space is isomorphic to the tangent space of its orbit-type stratum.

**How the definition helps.** This quotient defines a tangent space even at a singular orbit (our own explanation). The cited comparison theorem for proper actions identifies it with the tangent space of the orbit-type stratum.

**Paper or page:** [The Structure of the Internal Tangent Space to a Point of the Orbit Space of a Manifold under a Proper Lie Group Action](https://arxiv.org/abs/2511.06415). It says: “the internal tangent space to \[x\]∈M/G viewed as a diffeological space with the quotient diffeology is isomorphic to the stratified tangent space to \[x\]∈M/G viewed as a stratified space with induced orbit-type stratification.”

**Sources:**

- [I. Cinzori, The Structure of the Internal Tangent Space to a Point of the Orbit Space of a Manifold under a Proper Lie Group Action, arXiv:2511.06415 (2025)](https://arxiv.org/abs/2511.06415)

### In derived manifolds, the cobordism cup product is always intersection

**Remember:** Intersect by homotopy pullback, even when the tangent spaces fail transversality.

*Makes the theorem clean to state or prove.* MSC 58A05 (Differentiable manifolds, foundations), 14A30, 55N22. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For smooth embeddings A → X and B → X, their derived intersection is the homotopy pullback in derived smooth manifolds.

**Problem.** Let A and B be closed embedded submanifolds of X. In unoriented cobordism of X, their classes satisfy \[A\] ⌣ \[B\] = \[A ×ʰ<sub>X</sub> B\], even without transversality.

**How the definition helps.** The homotopy pullback supplies an intersection object for every pair of embeddings. Spivak’s cobordism theorem identifies its class with the product and recovers ordinary intersection for transverse embeddings (our own explanation).

**nLab:** [derived smooth manifold](https://ncatlab.org/nlab/show/derived+smooth+manifold). It says: “By using derived smooth manifolds instead of ordinary smooth manifolds here, the condition that f be transversal to B could be dropped.”

**Sources:**

- [David I. Spivak, Derived smooth manifolds, Duke Math. J. 153 (2010), arXiv:0810.5174](https://arxiv.org/abs/0810.5174)

### A curl defined by the target measure describes all measure-preserving diffusions

**Remember:** Use the target measure itself to turn stationary currents into derivatives.

*Makes the theorem clean to state or prove.* MSC 58A10 (Differential forms in global analysis), 60J60, 53A45. arXiv math.PR, math.DG. Level 4: research.

**Definition.** On an oriented n-manifold with positive volume form P, define curlᴾ(A) for each bivector field A by ι<sub>curlᴾ(A)</sub>P = d(ι<sub>A</sub> P). For a vector field Y, define divᴾ(Y) by d(ι<sub>Y</sub> P) = divᴾ(Y)P.

**Problem.** Consider a smooth Stratonovich diffusion with drift X and noises Yᵢ on a closed oriented n-manifold with volume form P and n ≥ 2. The measure P is stationary exactly when X − ½∑ᵢ divᴾ(Yᵢ)Yᵢ is locally a P-curl. Globally, one adds a vector field whose contraction with P represents the current’s de Rham cohomology class.

**How the definition helps.** The stationary equation says the corrected drift has zero P-divergence (our own explanation). Its contraction with P is therefore closed, and the Poincaré lemma makes it locally exact in dimension at least two. Subtracting a global representative of its cohomology class leaves an exact form.

**Paper or page:** [A Unifying and Canonical Description of Measure-Preserving Diffusions](https://arxiv.org/abs/2105.02845v1), [A Unifying and Canonical Description of Measure-Preserving Diffusions](https://arxiv.org/abs/2105.02845v1). It says: “there is no need to introduce other structures such as a Riemannian metric, local coordinates, or a reference measure.”

**Sources:**

- [Alessandro Barp, So Takao, Michael Betancourt, Alexis Arnaudon, Mark Girolami, A Unifying and Canonical Description of Measure-Preserving Diffusions, arXiv:2105.02845 (2021)](https://arxiv.org/abs/2105.02845v1)

### A second differential gives formality

**Remember:** Use forms closed under the second differential.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** On a complex manifold, d splits into components ∂ and ∂̄, and dᶜ means i(∂̄ − ∂). Forms killed by dᶜ form an algebra with differential d. An algebra is formal if a chain of maps preserving multiplication and differentials links it to its cohomology and induces isomorphisms on cohomology.

**Problem.** The real de Rham algebra of a compact Kähler manifold is formal.

**How the definition helps.** The intermediate algebra supplies both maps needed for formality without choosing multiplicative harmonic representatives. Our own explanation uses inclusion into all forms and projection onto dᶜ-cohomology. The ddᶜ lemma says a form closed under both derivatives and exact under either is a double derivative. It makes the induced differential zero and both maps isomorphisms on cohomology.

**Wikipedia:** [Kähler manifold](https://en.wikipedia.org/wiki/K%C3%A4hler_manifold). It says: “A related result is that every compact Kähler manifold is formal in the sense of rational homotopy theory.”

**Sources:**

- [P. Deligne, P. Griffiths, J. Morgan, and D. Sullivan, Real homotopy theory of Kähler manifolds (1975)](https://doi.org/10.1007/BF01389853)

### Equivalent metrics preserve reduced cohomology

**Remember:** Equivalent norms give the same closure of the exact forms.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** Two metrics are uniformly equivalent if each bounds the other by a constant multiple at every point. Reduced L² cohomology identifies square-integrable closed forms that differ by a norm limit of derivatives.

**Problem.** For a fixed closed exterior derivative, uniformly equivalent metrics give the same reduced L² cohomology. Their harmonic spaces are canonically isomorphic.

**How the definition helps.** The quotient compares harmonic spaces without comparing their metric-dependent adjoints. Equivalent norms give the same limits of derivatives. In our own argument, orthogonal projection selects the unique representative perpendicular to all derivatives for each metric.

**Paper or page:** [Geometric singularities and Hodge theory](https://arxiv.org/abs/2407.01170v3). It says: “also mutually bounded and yield equivalent L²-spaces which are equal as sets.”

**Sources:** none listed. No primary source with a working link was found.

### Green operators give current primitives

**Remember:** Invert the Laplacian, then apply the adjoint.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** Currents are differential forms with distribution coefficients. The Green operator G inverts the Hodge Laplacian on the space perpendicular to its kernel and acts as zero on the kernel.

**Problem.** On a closed oriented Riemannian manifold, each exact current S satisfies S = d(d⁎GS), where d⁎ is the adjoint of d.

**How the definition helps.** The inverse selects an explicit primitive from all possible solutions of dT = S. In our own derivation, exactness removes the harmonic component, so (dd⁎ + d⁎d)GS = S. Since G commutes with d and dS = 0, only dd⁎GS remains. Elliptic theory extends these identities to currents.

**Paper or page:** [On linking numbers and Biot-Savart kernels](https://arxiv.org/abs/2509.02802v1). It says: “Let S = dT be an exact current with S ∈ 𝒟′ₖ(M). Then in fact S = d(d\*G(S)).”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic duality reverses twists

**Remember:** The star reverses the sign of the twist.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** For a closed real one-form θ, the twisted derivative sends α to dα + θ∧α. A twisted harmonic form lies in the kernels of this derivative and its metric adjoint.

**Problem.** On a closed oriented Riemannian n-manifold, the Hodge star bijects θ-twisted harmonic k-forms with (−θ)-twisted harmonic (n − k)-forms.

**How the definition helps.** The joint-kernel definition lets the star exchange two first-order equations without expanding the twisted Laplacian. Our own calculation uses the adjoint of multiplication by θ under the wedge product. This adjoint contracts a form with the vector dual to θ, giving the opposite twist under the star.

**Paper or page:** [Morse-Novikov cohomology on foliated manifolds](https://arxiv.org/abs/2202.04508v1). It says: “the Hodge star operator ⋆𝓕 satisfies ⋆𝓕 Δ𝓕,ω = Δ𝓕,−ω ⋆𝓕.”

**Sources:** none listed. No primary source with a working link was found.

### Lefschetz harmonic forms preserve symmetry

**Remember:** Use the lowering commutator to define harmonicity.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** In a Lefschetz complex, L and Λ are the raising and lowering operators of a graded representation of sl₂, the traceless two-by-two matrices. They change degree by two in opposite directions. A vector is Lefschetz harmonic if both the differential d and the commutator dΛ − Λd kill it.

**Problem.** Suppose d commutes with L in a Lefschetz complex centered at degree n. Then Lⁿ⁻ᵏ bijects harmonic vectors in degrees k and 2n − k for 0 ≤ k ≤ n.

**How the definition helps.** Using the commutator as the second harmonicity equation makes the harmonic space itself a representation. In our own argument, the commutator identities show that both L and Λ preserve the common kernel. The representation theorem then pairs opposite degrees without choosing cohomology representatives.

**Paper or page:** [HKT manifolds: Hodge theory, formality and balanced metrics](https://arxiv.org/abs/2207.09168v2). It says: “the space of Lefschetz harmonic p-forms”

**Sources:** none listed. No primary source with a working link was found.

### Nonlinear classes have unique minimizers

**Remember:** A closed class has one shortest form.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** An Lᵖ form has integrable pth power of its length. Reduced Lᵖ cohomology takes weakly closed forms modulo limits of derivatives of Lᵖ forms with Lᵖ derivative. Weak derivatives are defined by integration against smooth test forms.

**Problem.** On a complete Riemannian manifold, each reduced Lᵖ class has a unique form of least norm when 1 &lt; p &lt; ∞.

**How the definition helps.** Closing the space of derivatives makes every class a closed affine set. Our own argument uses uniform convexity of Lᵖ to give each such set a unique nearest point to zero. Differentiating the norm to the pth power along exact forms gives the nonlinear harmonic equation.

**Paper or page:** [Lp -cohomology and the geometry of p-harmonic forms](https://arxiv.org/abs/2403.19481v2). It says: “such that \[h\]ᵣₑ𝒹 = φ, and d\*(\|h\|ᵖ⁻²h) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Nonlinear stars swap conjugate exponents

**Remember:** Raise the length before swapping the degree.

*True by definition.* MSC 58A14 (Hodge theory in global analysis). arXiv math.DG, math.AP. Level 4: research.

**Definition.** For 1 &lt; p &lt; ∞, the nonlinear Hodge star sends h to ⋆(\|h\|ᵖ⁻²h) and sends zero to zero. The ordinary star ⋆ exchanges complementary degrees using the metric and orientation. A p-harmonic form h satisfies dh = 0 and d⁎(\|h\|ᵖ⁻²h) = 0 against smooth test forms, where d⁎ is the adjoint.

**Problem.** On a complete oriented Riemannian n-manifold, the nonlinear star bijects Lᵖ p-harmonic k-forms with Lᑫ q-harmonic (n − k)-forms. Here q = p/(p − 1).

**How the definition helps.** The length factor lets the ordinary star exchange the two nonlinear equations. In our own proof, (p − 1)q = p gives integrability, and (p − 1)(q − 1) = 1 reverses the length change. Applying the ordinary star twice contributes only a degree-dependent sign.

**Paper or page:** [Lp -cohomology and the geometry of p-harmonic forms](https://arxiv.org/abs/2403.19481v2). It says: “Then ⋆ₚ defines a bijective”

**Sources:** none listed. No primary source with a working link was found.

### Jet pullbacks classify formal solutions

**Remember:** A pullback collects exactly the compatible formal derivatives.

*True by definition.* MSC 58A20 (Jets in global analysis). arXiv math.DG. Level 4: research.

**Definition.** Let i embed an equation E into the infinite jet bundle J∞Y of a bundle Y. Its infinite prolongation is the pullback of J∞i and the jet comultiplication J∞Y → J∞J∞Y. Thus a point is a pair whose two images in J∞J∞Y agree.

**Problem.** Every parametrized family of formal solutions factors uniquely through the universal family over the infinite prolongation.

**How the definition helps.** The pullback definition packages the compatibility conditions into one space, so each compatible pair determines a unique map into it. The usual description imposes the equation and all its differentiated equations separately. In our own explanation, the work is identifying families of formal solutions with pairs of maps having the same repeated derivative data.

**Paper or page:** [Synthetic geometry of differential equations: I. Jets and comonad structure](https://arxiv.org/abs/1701.06238v1). It says: “Every parametrized family of formal solutions of this PDE factors uniquely through a universal one”

**Sources:**

- [Igor Khavkine and Urs Schreiber, Synthetic geometry of differential equations: I. Jets and comonad structure](https://arxiv.org/abs/1701.06238v1)

### Constant rank along flows makes involutive singular distributions integrable

**Remember:** Involutive is not enough; the rank must also stay constant along flows.

*Rules out counterexamples. Confidence: medium.* MSC 58A30 (Vector distributions (subbundles of the tangent bundles)), 53C12. arXiv math.DG. Level 4: research.

**Definition.** A smooth singular distribution D assigns tangent subspaces locally spanned by smooth vector fields. It is involutive if the bracket of any two local sections is a local section. It is integrable if every point lies on an immersed submanifold whose tangent space equals D at each of its points.

**Problem.** Stefan–Sussmann theorem. A singular distribution D is integrable exactly when it is involutive and has constant rank along the integral curves of local sections of D.

**How the definition helps.** Constant rank along section flows excludes a jump that cannot occur within an integral leaf. For example, on ℝ² take all horizontal directions at x ≤ 0 and the full tangent plane at x &gt; 0 (our own example). Local sections close under brackets, yet the horizontal flow crosses the rank jump. The Stefan–Sussmann criterion gives integrability once involutivity and rank constancy both hold.

**Paper or page:** [A Stefan-Sussmann theorem for normal distributions on manifolds with boundary](https://arxiv.org/abs/2109.04845). It says: “The following are equivalent. D is integrable. D is involutive and has constant rank along the integral curves of local D-sections.”

**Sources:**

- [D. Perrella, D. Pfefferlé and L. Stoyanov, A Stefan-Sussmann theorem for normal distributions on manifolds with boundary, arXiv:2109.04845 (2021)](https://arxiv.org/abs/2109.04845)

### Plotwise triviality survives pullback

**Remember:** Compose a test plot with the base map to test the pulled-back bundle.

*True by definition.* MSC 58A40 (Differential spaces). arXiv math.DG. Level 4: research.

**Definition.** Let P → B be a smooth surjection invariant under a smooth right action of a diffeological group G. For every plot U → B with Euclidean domain, require a G-equivariant diffeomorphism of its pullback with U × G over U. Require also that the unique g satisfying pg = q depend smoothly on every pair (p,q) in the same fiber.

**Problem.** Pulling a diffeological principal bundle back along a smooth map gives another principal bundle. Pullback assigns to each new base point the fiber over its image.

**How the definition helps.** In our own proof, pulling back first along a base map and then along a plot gives the pullback along their composite. The composite is a plot, so the resulting bundle is trivial. Our own argument also uses that the smooth map giving unique group transport pulls back to the new fibers. The source proves the equivalence of this plotwise test with the definition by a smooth quotient and a principal group action.

**Paper or page:** [Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4). It says: “the pullback p₀∗P is trivial”

**Sources:**

- [Emilio Minichiello, Diffeological Principal Bundles and Principal Infinity Bundles](https://arxiv.org/abs/2202.11023v4)

### Maps of graded manifolds are detected by probes with one ordinary point

**Remember:** One ordinary point with formal coordinates can probe the graded directions.

*Makes the theorem clean to state or prove.* MSC 58A50 (Supermanifolds and graded manifolds), 18A22. arXiv math.DG, math.CT. Level 4: research.

**Definition.** For a ℤ₂ⁿ-manifold M, its restricted functor of points assigns each graded point S the space of morphisms S → M. A graded point has one underlying point and finitely many formal coordinates of nonzero degrees. A morphism of probes acts by precomposition.

**Problem.** The restricted functor of points for ℤ₂ⁿ-manifolds is fully faithful when each component of a natural transformation is smooth over the probe’s degree-zero scalar algebra. Each such transformation comes from a unique morphism of graded manifolds.

**How the definition helps.** Graded probes record formal coordinates as well as ordinary point values (our own explanation). The restricted functor-of-points theorem reconstructs the morphism from these probe values using smoothness over the degree-zero scalars.

**Paper or page:** [The Schwarz-Voronov Embedding of ℤ₂ⁿ-Manifolds](https://arxiv.org/abs/1906.09834v2). It says: “We show that it is sufficient to consider ℤ₂ⁿ-points, i.e., trivial ℤ₂ⁿ-manifolds for which the reduced manifold is just a single point, as 'probes' when employing the functor of points.”

**Sources:**

- [Andrew James Bruce, Eduardo Ibarguengoytia, Norbert Poncin, The Schwarz-Voronov Embedding of ℤ₂ⁿ-Manifolds, arXiv:1906.09834v2 (2020), SIGMA 16 (2020), 002, 47 pages](https://arxiv.org/abs/1906.09834v2)

### On supermanifolds, integrate integral forms instead of top-degree forms

**Remember:** Use the Berezinian transformation law to integrate the highest odd-coordinate coefficient.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A50 (Supermanifolds and graded manifolds), 58C35. arXiv math.DG, math-ph. Level 4: research.

**Definition.** On a smooth supermanifold, a Berezinian section has local coefficients that transform by the Berezinian of the coordinate change. A top integral form is such a section. Lower integral forms also carry multivector factors.

**Problem.** On an oriented smooth supermanifold of positive odd dimension, every compactly supported top integral form has a well-defined integral. Ordinary differential forms have no top degree.

**How the definition helps.** The Berezin change-of-variables formula makes the local integrals agree across oriented charts (our own explanation). Locally, one integrates the coefficient of the product of all odd coordinates over the even coordinates. Powers of dθ for an odd coordinate θ can have arbitrarily high degree.

**nLab:** [integration over supermanifolds](https://ncatlab.org/nlab/show/integration+over+supermanifolds). It says: “apparently for integration it is not really essential that a form is a top power, what is rather essential is that it is, locally, the wedge product of a basis of 1-forms.”

**Sources:**

- [Edward Witten, Notes On Supermanifolds and Integration (2012), arXiv:1209.2199](https://arxiv.org/abs/1209.2199)

### Symmetric multiple vector bundles are exactly the graded bundles, by full linearization

**Remember:** Separate the weighted directions, then remember how they can be permuted.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58A50 (Supermanifolds and graded manifolds), 58A32. arXiv math.DG. Level 4: research.

**Definition.** A degree-k graded bundle has fiber coordinates of integer weights from 1 to k, with weight-preserving polynomial coordinate changes and base coordinates of weight zero. Full linearization replaces each weight-j coordinate by components indexed by j-element subsets of k directions. Permutations of those directions act on the resulting k-fold vector bundle.

**Problem.** Full linearization and diagonalization give an equivalence of categories between graded bundles of degree k and symmetric k-fold vector bundles. The symmetry maps, indexed by the symmetric group, are part of the data.

**How the definition helps.** The permutation maps encode how the separate linear directions fit together. In our own words, a weight-two coordinate gives rise to a coordinate linear in each of two directions. The work moves to constructing the linearization and recovering the graded bundle and its maps from the symmetry.

**Paper or page:** [Polarisation of Graded Bundles](https://arxiv.org/abs/1512.02345v2). It says: “We fully characterise the image of the full linearisation functor and show that we obtain a subcategory of k-fold vector bundles consisting of symmetric k-fold vector bundles equipped with a family of morphisms indexed by the symmetric group Sₖ.”

**Sources:**

- [Andrew James Bruce, Janusz Grabowski, Mikolaj Rotkiewicz, Polarisation of Graded Bundles, arXiv:1512.02345v2 (2016), SIGMA 12 (2016), 106, 30 pages](https://arxiv.org/abs/1512.02345v2)

### A local addition makes the space of smooth maps a manifold

**Remember:** A point plus a small tangent vector gives a nearby point, smoothly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds), 46T05. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A local addition is a smooth map η from an open neighborhood U of the zero section in TM to M. It satisfies η(0ₚ) = p for every p. The map v ↦ (π(v),η(v)) must map U diffeomorphically onto an open neighborhood of the diagonal, where π is the tangent bundle projection.

**Problem.** Take a compact manifold N and a manifold M, possibly infinite-dimensional, that has a local addition. Then the space C∞(N, M) of smooth maps from N to M is a smooth manifold.

**How the definition helps.** Applying the local addition pointwise turns sections along a map into nearby maps (our own explanation). At g: N → M, the chart parametrization sends each smooth section s of g\*TM valued in U to η ∘ s. The mapping-space theorem of Kriegl and Michor gives smooth chart changes in convenient calculus.

**nLab:** [local addition](https://ncatlab.org/nlab/show/local+addition). It says: “if M is a manifold (possibly infinite dimensional) admitting a local addition, and if N is a compact manifold (possibly with boundary) then C<sup>∞</sup>(N,M) can be given the structure of a smooth manifold”

**Sources:**

- [Andreas Kriegl, Peter W. Michor, The Convenient Setting of Global Analysis, AMS Mathematical Surveys and Monographs 53, 1997 (§42)](https://doi.org/10.1090/surv/053)

### Curve tangents exclude higher derivations

**Remember:** Velocities see first derivatives, but some derivations see second derivatives.

*Rules out counterexamples.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds). arXiv math.DG, math.FA. Level 4: research.

**Definition.** A kinematic tangent vector is the velocity of a smooth curve through a point. An operational tangent vector is a bounded linear functional on smooth function germs satisfying the product rule there. A germ records only the values of a function near the point.

**Problem.** In an infinite-dimensional real Hilbert space, every velocity gives a distinct operational tangent vector, but some operational tangent vectors come from no velocity.

**How the definition helps.** Curve velocities use only first derivatives and are distinguished by linear functions. In our own construction, apply a bounded functional to the operator representing the second derivative. Hahn–Banach supplies such a functional vanishing on compact operators and taking value one on the identity. The product rule holds because its extra terms have finite rank, while the squared norm detects this second derivative.

**nLab:** [operational tangent space](https://ncatlab.org/nlab/show/operational+tangent+space). It says: “For more general smooth spaces, these are no longer equivalent.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Dual evaluation is conveniently smooth

**Remember:** Bounded products suffice for smooth evaluation, even without joint continuity.

*Makes the theorem clean to state or prove.* MSC 58B10 (Differentiability questions for infinite-dimensional manifolds), 46A20. arXiv math.FA. Level 4: research.

**Definition.** A map is conveniently smooth if it sends smooth curves to smooth curves. For a complete space with a topology given by countably many seminorms, called a Fréchet space, take its continuous dual. Give the dual the topology of uniform convergence on bounded sets.

**Problem.** Evaluation, which sends a vector and a continuous linear functional to the functional’s value there, is conveniently smooth for every Fréchet space. For real sequences with the product topology, evaluation fails to be jointly continuous.

**How the definition helps.** The dual topology bounds evaluation on each product of bounded sets, and bounded bilinear maps are conveniently smooth. In our own example, each basic sequence neighborhood leaves some coordinate unrestricted. Every dual neighborhood contains a nonzero multiple of evaluation at that coordinate, so the pairing is unbounded on the two neighborhoods.

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “Multilinear mappings are smooth if and only if they are bounded”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Strong symplectic forms straighten locally

**Remember:** Invert contraction to obtain the vector field that straightens the form.

*Rules out counterexamples.* MSC 58B20 (Riemannian, Finsler and other geometric structures on infinite-dimensional manifolds), 53D05. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A closed smooth two-form on a Banach manifold is strongly symplectic if pairing with it identifies each tangent space with its continuous dual. This identification and its inverse must be bounded. A weak symplectic form requires only an injective pairing.

**Problem.** Every strong symplectic form on a Banach manifold is constant in suitable local coordinates.

**How the definition helps.** An invertible pairing lets Moser’s argument solve for a vector field from a prescribed one-form. In our own account, interpolate between the given form and its constant value at the center of a chart. Nearby pairings stay invertible, and integrating the resulting vector field gives the required coordinates. Marsden constructed a weak symplectic form with no such chart.

**nLab:** [Darboux's theorem](https://ncatlab.org/nlab/show/Darboux%27s+theorem). It says: “for (X, ω) a symplectic manifold there are local charts in which the symplectic form ω takes the form”

**Sources:**

- [Jerrold E. Marsden, Darboux’s Theorem Fails for Weak Symplectic Forms (1972)](https://doi.org/10.2307/2037864)

### Ellwood freeness equals the algebraic Galois condition on Peter–Weyl elements

**Remember:** Analytic density and algebraic bijectivity describe the same free actions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B32 (Geometry of quantum groups), 46L67, 46L55. arXiv math.QA, math.OA. Level 4: research.

**Definition.** Let δ be a compact quantum group coaction on a unital C\*-algebra A, with fixed algebra B and matrix coefficient Hopf algebra O(G). Its Peter–Weyl algebra P consists of all a with δ(a) in the algebraic tensor product A ⊗ O(G). The Peter–Weyl–Galois condition requires bijectivity of P ⊗<sub>B</sub> P → P ⊗ O(G), given by p ⊗ q ↦ (p ⊗ 1)δ(q).

**Problem.** A coaction of a compact quantum group on a unital C\*-algebra satisfies the Ellwood condition exactly when it is Peter–Weyl–Galois. So free actions on C\*-algebras are the same as principal comodule algebras at the algebraic level.

**How the definition helps.** The Peter–Weyl algebra makes an algebraic bijectivity test available for the same coaction (our own explanation). The Baum–De Commer–Hajac theorem identifies this test with norm density of the span of (A ⊗ 1)δ(A) in the completed tensor product.

**Paper or page:** [Part III, Free Actions of Compact Quantum Groups on C\*-Algebras](https://arxiv.org/abs/1701.05895). It says: “has dense range or, equivalently, is surjective. (c) The C\*-dynamical system (𝒜,G,α) satisfies the Ellwood condition.”

**Sources:**

- [P. F. Baum, K. De Commer and P. M. Hajac, Free actions of compact quantum groups on unital C\*-algebras, Documenta Mathematica 22 (2017) 825–849](https://doi.org/10.4171/dm/579)
- [Part III, Free Actions of Compact Quantum Groups on C\*-Algebras (arXiv 1701.05895)](https://arxiv.org/abs/1701.05895)

### Strong connections make associated modules of quantum bundles projective

**Remember:** A strong connection hands you the idempotent of every associated bundle.

*True by definition. Confidence: medium.* MSC 58B32 (Geometry of quantum groups), 16T05, 16D40. arXiv math.QA. Level 4: research.

**Definition.** Let A have right coaction δ by a Hopf algebra H with bijective antipode, and let B be its coinvariant algebra. A strong connection is a unital linear map ℓ: H → A ⊗ A colinear for both coactions, using the antipode-induced left coaction. It lifts translation, meaning (m ⊗ id)(id ⊗ δ)ℓ(h) = 1 ⊗ h for every h, where m is multiplication.

**Problem.** Let A be a principal right H-comodule algebra over B, where H has bijective antipode. For each finite-dimensional left H-comodule V, the associated left B-module A □ V is finitely generated projective.

**How the definition helps.** The strong-connection idempotent formula realizes the associated module as the image of a finite matrix over B (our own explanation). Principality supplies the strong connection used in that formula. An idempotent image is a direct summand of a finite free module.

**Paper or page:** [Some interactions between Hopf Galois extensions and noncommutative rings](https://arxiv.org/abs/2103.12860). It says: “A is a principal H-comodule algebra if and only if it admits a strong connection form, that is, if there exists a map ω: H → A⊗A such that ω(1)=1⊗1,”

**Sources:**

- [P. M. Hajac, Strong connections on quantum principal bundles, Communications in Mathematical Physics 182 (1996) 579–617](https://doi.org/10.1007/BF02506418)

### The Ellwood density condition is exactly freeness for commutative algebras

**Remember:** Free means the functions f(x)g(xh) separate the points of X × G.

*Makes the theorem clean to state or prove.* MSC 58B32 (Geometry of quantum groups), 46L55, 46L85. arXiv math.OA, math.QA. Level 4: research.

**Definition.** Let δ: A → A ⊗ C(G) be a coaction of a compact quantum group G on a unital C\*-algebra A. It satisfies the Ellwood condition, and is called free, when the linear span of (A⊗1)δ(A) is dense in A ⊗ C(G). It replaces the pointwise condition that xg = x forces g = e.

**Problem.** Let a compact group G act continuously on a compact Hausdorff space X. The action is free exactly when the induced coaction on C(X) satisfies the Ellwood condition.

**How the definition helps.** The span consists of finite sums of functions (x,g) ↦ f(x)h(xg) and forms a unital self-adjoint algebra (our own argument). It separates points exactly when (x,g) ↦ (x,xg) is injective, which means the action is free. Stone–Weierstrass then gives the equivalence with density.

**Paper or page:** [Noncommutative numerable principal bundles from group actions on C\*-algebras](https://arxiv.org/abs/2203.14677). It says: “The G-action on X is free if and only if span{ f₁α₍·₎(f₂) : f₁,f₂∈C<sub>c</sub>(X) } is κ-dense in C(G,C(X)),”

**Sources:**

- [D. A. Ellwood, A new characterisation of principal actions, Journal of Functional Analysis 173 (2000) 49–60](https://doi.org/10.1006/jfan.2000.3561)

### A heat-trace condition removes the Fubini counterexample for Dixmier traces

**Remember:** Heat traces with a clean leading term make integrals of products multiply.

*Rules out counterexamples. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L51. arXiv math.OA. Level 4: research.

**Definition.** For a (p,∞)-summable spectral triple (A,H,D), require that every T ∈ A admit constants c(T) and ε &gt; 0. As t decreases to zero, require tᵖ Tr(T exp(−t²D²)) = c(T) + O(tᵋ).

**Problem.** If two spectral triples meet the heat-trace condition, the integral of T₁ ⊗ T₂ on the product triple is the product of the integrals. This holds, with fixed Gamma-function constants, for every normalised trace on L¹'∞.

**How the definition helps.** On the product triple the heat traces multiply, so the normalized leading coefficients multiply (our own explanation). The heat-trace Fubini theorem converts each coefficient to the noncommutative integral with its dimension-dependent gamma factor. The cited unitary example violates multiplicativity, so its factors cannot both satisfy the heat condition.

**Paper or page:** [Fubini theorem in noncommutative geometry](https://arxiv.org/abs/1612.04012), [Fubini theorem in noncommutative geometry](https://arxiv.org/abs/1612.04012). It says: “There exists a (1,∞)−summable spectral triple (𝒜,H,D) such that D has simple spectrum ℤ₊. 𝒜 is generated by a unitary operator U and is finite dimensional.”

**Sources:**

- [F. Sukochev and D. Zanin, Fubini theorem in noncommutative geometry, Journal of Functional Analysis 272 (2017)](https://doi.org/10.1016/j.jfa.2016.10.016)

### A trace valued in bounded sequences modulo null sequences removes the limit

**Remember:** Take the quotient first, choose the limit last.

*True by definition. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L51, 47B10. arXiv math.OA, math.FA. Level 4: research.

**Definition.** For T in the weak trace class ℒ₁,∞, order its eigenvalues by decreasing modulus with algebraic multiplicity, padding finite lists with zeros. For N ≥ 2, divide the sum of the first N eigenvalues by log N. Define τ(T) as the class of this sequence modulo sequences tending to zero.

**Problem.** τ is a positive continuous linear trace on L¹'∞ that vanishes on the operators whose singular values are o(1/n). Every Dixmier trace is a generalised limit applied to τ, so every Dixmier trace has the same properties.

**How the definition helps.** τ is already linear, positive and a trace before any limit is chosen. A Dixmier trace applies a generalised limit to τ, and such a limit is zero on null sequences, so it inherits these properties. This replaces a separate check of linearity for each choice of limit (our own). The work went into showing that eigenvalue sums are additive up to a bounded error (our own).

**Paper or page:** [Connes' integration and Weyl's laws](https://arxiv.org/abs/2107.01242). It says: “The map τ : ℒ₁,∞ → ℓ∞/ℓ₀ is a positive continuous linear trace. It is annihilated by operators in (ℒ₁,∞)₀, including infinitesimal operators of order &gt;1.”

**Sources:**

- [Raphaël Ponge, Connes' integration and Weyl's laws, Journal of Noncommutative Geometry (2023)](https://doi.org/10.4171/jncg/509)

### Connes' 2-cocycle gives integer Chern numbers on the noncommutative torus

**Remember:** The curvature cocycle counts an index, so it is an integer.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87, 19D55. arXiv math.OA, math.KT. Level 4: research.

**Definition.** On the smooth noncommutative torus, let τ extract the constant Fourier coefficient and let δ₁, δ₂ multiply mode UᵐVⁿ by 2πim, 2πin respectively. Define φ(a,b,c) = τ(a(δ₁b δ₂c − δ₂b δ₁c))/(2πi). For matrices, apply the derivations entrywise and compose τ with the ordinary matrix trace.

**Problem.** For every projection e in matrices over A(θ), the Chern number φ(e, e, e) is an integer. By contrast, the trace τ(e) can be irrational, since τ takes the values ℤ + θℤ on K₀.

**How the definition helps.** Connes’ index pairing identifies the Chern number with a Fredholm index and hence proves integrality (our own explanation). The canonical trace instead has range ℤ + θℤ on K₀, allowing irrational projection traces for irrational θ.

**Wikipedia:** [Noncommutative torus](https://en.wikipedia.org/wiki/Noncommutative_torus). It says: “But as an ordered group, K₀ ≃ Z + θZ.”

**Paper or page:** [A combinatorial integration on the Cantor dust](https://arxiv.org/abs/2209.03537). It says: “the Connes’ pairing of the cyclic 2-cocycle \[φ\] with \[p\] is expressed as follows”

**Sources:** none listed. No primary source with a working link was found.

### Connes' trace theorem turns the Dixmier trace into a local integral

**Remember:** On a manifold, the Dixmier trace only sees the symbol of order −n.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 58J42, 46L51. arXiv math.OA, math.DG. Level 4: research.

**Definition.** For a scalar classical pseudodifferential operator on a closed n-manifold, use the unnormalized residue convention. The residue integrates the degree −n homogeneous symbol term against the canonical cosphere density, without a factor of (2π)⁻ⁿ.

**Problem.** On a closed n-manifold with n &gt; 0, each Dixmier trace of a classical scalar operator of order −n equals its unnormalized residue divided by n(2π)ⁿ. Thus the Dixmier trace of f(1 + Δ)⁻ⁿᐟ² is a constant times the integral of smooth f against Riemannian volume.

**How the definition helps.** Connes’ trace theorem identifies the Dixmier trace with the cosphere integral in this normalization (our own explanation). For f(1 + Δ)⁻ⁿᐟ² the leading symbol on the unit cosphere is f, so fiber integration gives a constant multiple of Riemannian volume.

**Wikipedia:** [Singular trace](https://en.wikipedia.org/wiki/Singular_trace). It says: “Connes (1988) showed that Wodzicki's noncommutative residue (Wodzicki 1984) of a pseudodifferential operator on a manifold M of order -dim(M) is equal to its Dixmier trace.”

**Sources:**

- [Alain Connes, The action functional in noncommutative geometry, Communications in Mathematical Physics 117 (1988)](https://doi.org/10.1007/BF01218391)
- [Mariusz Wodzicki, Local invariants of spectral asymmetry, Inventiones Mathematicae 75 (1984)](https://doi.org/10.1007/BF01403095)

### Dimension spectrum makes the Connes–Moscovici index formula local

**Remember:** Residues ignore trace class errors, so the index becomes local.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19K56, 58J20. arXiv math.OA, math.KT. Level 4: research.

**Definition.** Put δ(T) = \[\|D\|,T\] and let B be the algebra generated by δᵏ(a) and δᵏ(\[D,a\]) for every a ∈ A and k ≥ 0. The dimension spectrum collects the poles of the meromorphic continuations of Tr(b\|D\|⁻ᶻ) for b ∈ B, taking inverse powers off the kernel.

**Problem.** For a regular finitely summable spectral triple with simple discrete dimension spectrum, the Connes–Moscovici local cocycle represents the periodic Chern character. Its positive-degree components use residues of products of algebra elements, iterated commutators and powers of \|D\|. In even degree zero the formula also allows a finite-part term.

**How the definition helps.** The dimension spectrum specifies where the zeta functions used in the cocycle can have poles (our own explanation). The Connes–Moscovici local index theorem proves that the resulting cocycle represents the Chern character.

**Wikipedia:** [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple), [Noncommutative geometry](https://en.wikipedia.org/wiki/Noncommutative_geometry). It says: “The local index formula of Connes and Moscovici gives a way to compute index pairings for suitable spectral triples using local expressions in cyclic cohomology.”

**Sources:**

- [A. Connes, H. Moscovici, The local index formula in noncommutative geometry, Geom. Funct. Anal. 5 (1995) 174–243](https://doi.org/10.1007/BF01895667)

### Dirac operators on matrix algebras make them converge to coadjoint orbits

**Remember:** Measure variation by the norm of the commutator with the Dirac operator.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L89, 81R60. arXiv math.OA, math.MP. Level 4: research.

**Definition.** For a Dirac operator D acting on a represented algebra, its commutator seminorm on a smooth element a is Lᴰ(a) = ‖\[D,a\]‖. Rieffel uses the corresponding Dirac operators on the orbit algebra and the matrix algebras for highest weights mλ.

**Problem.** For an integral dominant weight λ of a compact connected semisimple Lie group, use Rieffel’s orbit and matrix Dirac Lip-norms. The matrix algebras for highest weights mλ converge to the algebra of continuous functions on the coadjoint orbit in Latrémolière’s propinquity. The fuzzy spheres give the two-sphere example.

**How the definition helps.** The commutator seminorms equip both the matrices and the orbit algebra with quantum metrics (our own explanation). Rieffel proves convergence by constructing bridges whose lengths tend to zero.

**Paper or page:** [Dirac operators for matrix algebras converging to coadjoint orbits](https://arxiv.org/abs/2108.01136). It says: “Thus the sequence {(ℬᵐ, Lᴰᵐ)} of compact C\*-metric spaces converges to the compact C\*-metric space {(𝒜, Lᴰᴬ)} for Latrémolière's propinquity.”

**Sources:**

- [Marc A. Rieffel, Dirac operators for matrix algebras converging to coadjoint orbits, Communications in Mathematical Physics 401 (2023)](https://doi.org/10.1007/s00220-023-04682-0)
- [Marc A. Rieffel, Gromov–Hausdorff distance for quantum metric spaces; Matrix algebras converge to the sphere for quantum Gromov–Hausdorff distance, Memoirs of the AMS 168, no. 796 (2004)](https://doi.org/10.1090/memo/0796)

### Dirac weights detect polynomial growth

**Remember:** The Dirac eigenvalues are the group weights, with repetitions.

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** On a discrete group take a real weight ℓ with finite absolute sublevel sets and bounded differences under each fixed left translation. Let D multiply square-summable functions by ℓ. Call D finitely summable if the sum of (1 + ℓ(g)²)⁻ˢ over all group elements converges for some s &gt; 0.

**Problem.** Finite summability holds exactly when the number of group elements with \|ℓ(g)\| ≤ R grows at most polynomially in R.

**How the definition helps.** The diagonal definition turns the spectral trace directly into a sum over the group (our own explanation). Each element counted at radius R contributes at least (1 + R²)⁻ˢ, giving a polynomial bound. Conversely, group the weights between consecutive powers of two. With twice s greater than the growth exponent, the resulting geometric bound converges.

**Paper or page:** [A Note on Twisted Crossed Products and Spectral Triples](https://arxiv.org/abs/2110.05345). It says: “is finitely summable iff G has polynomial growth w.r.t. the proper translation bounded function ℓ.”

**Sources:**

- [A Note on Twisted Crossed Products and Spectral Triples](https://arxiv.org/abs/2110.05345)

### Entire cyclic cohomology gives theta-summable spectral triples a Chern character

**Remember:** Require finite heat trace at every positive time.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19D55, 46L87. arXiv math.OA, math.KT. Level 4: research.

**Definition.** An even spectral triple is θ-summable if Tr(exp(−tD²)) is finite for every t &gt; 0. The grading commutes with the algebra and anticommutes with D.

**Problem.** For a θ-summable even spectral triple, the JLO cocycle Φₜ, built from heat operators exp(−stD²) and commutators \[D, a\], is an entire cyclic cocycle. Its class does not depend on t, and its pairing with an idempotent e is the index of D twisted by e.

**How the definition helps.** θ-summability controls the heat operators in every simplex integral defining the JLO cochain (our own explanation). The JLO estimates give the entire growth bound and the cocycle identity. Homotopy invariance gives independence of positive t, and the JLO index pairing gives the twisted index.

**Wikipedia:** [JLO cocycle](https://en.wikipedia.org/wiki/JLO_cocycle), [Spectral triple](https://en.wikipedia.org/wiki/Spectral_triple). It says: “The cohomology class defined by Φt(D) is independent of the value of t”

**Sources:**

- [A. Jaffe, A. Lesniewski, K. Osterwalder, Quantum K-theory I. The Chern character, Comm. Math. Phys. 118 (1988) 1–14](https://doi.org/10.1007/BF01218474)
- [A. Connes, Entire cyclic cohomology of Banach algebras and characters of θ-summable Fredholm modules, K-Theory 1 (1988) 519–548](https://doi.org/10.1007/bf00533785)

### Finite summability lets a trace formula compute the index pairing

**Remember:** Enough commutators in Lᵖ multiply into trace class.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19K56, 19D55. arXiv math.OA, math.KT. Level 4: research.

**Definition.** In a normalized even Fredholm module, the algebra acts by even operators and F is an odd self-adjoint involution on the graded Hilbert space. For p ≥ 1, p-summability requires ∑ⱼ sⱼ(\[F,a\])ᵖ &lt; ∞ for every algebra element a, where sⱼ denotes the jth singular value.

**Problem.** For even n ≥ p − 1, put τₙ(a₀,…,aₙ) = cₙ Tr(γF\[F,a₀\]⋯\[F,aₙ\]), using the grading γ and Connes’ normalization cₙ. Then τₙ is a cyclic cocycle whose pairing with an idempotent e equals the index of eFe from eH₊ to eH₋.

**How the definition helps.** Summability makes the product of n + 1 commutators trace class, by Hölder's inequality for Schatten ideals, so τₙ is defined (our own). The index of a Fredholm operator equals a trace of a power of its defect, and this trace is ⟨τₙ, e⟩ (our own summary). Without summability, F still gives a K-homology class but no finite trace formula. The work went into Connes' identification of the index with the trace formula.

**nLab:** [Fredholm module](https://ncatlab.org/nlab/show/Fredholm+module). It says: “an odd Fredholm module over A is a representation π : A → B(H) of A on a Hilbert space H together with a Fredholm operator F on H such that \[F,π(a)\] ∈ K(H) for all a ∈ A.”

**Paper or page:** [Finitely Summable K-homology, the Index Pairing, and Cantor Minimal Systems](https://arxiv.org/abs/2505.24135). It says: “then any index pairing between a class in K⁰(A) and one in K₀(A) can be computed using Connes’ trace formulas for p-summable cycles.”

**Sources:**

- [A. Connes, Non-commutative differential geometry, Publ. Math. IHÉS 62 (1985) 41–144](https://doi.org/10.1007/BF02698807)

### First order forces additive weights

**Remember:** A multiplication operator commuting with every right translation has a constant multiplier.

*Rules out counterexamples.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Let ℓ be a real function on a discrete group, with finite absolute sublevel sets and bounded differences under each left translation. Let D multiply by ℓ on square-summable functions, and let L and R denote left and right translations. The first-order condition requires each commutator \[D,L\] = DL − LD to commute with every R.

**Problem.** Assume complex conjugation followed by group inversion gives a real structure, so ℓ under inversion equals either ℓ everywhere or −ℓ everywhere. The first-order condition holds exactly when ℓ is constant or an additive homomorphism.

**How the definition helps.** Commuting with right translations forces each left translation difference of ℓ to be constant (our own calculation). Evaluating at the identity e shows that ℓ − ℓ(e) is additive. Evenness forces the additive part to vanish, and oddness forces ℓ(e) = 0. Constants and homomorphisms both pass the test, whereas the even weight ℓ(n) = \|n\| on ℤ has nonconstant translation differences.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “satisfies the first order condition if and only if ℓ is either a constant or a homomorphism.”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)

### KO-dimension defines dimension mod 8 from three signs

**Remember:** Read the signs of the real structure against itself, Dirac operator and grading.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 19K33, 46L87. arXiv math.OA, math.KT. Level 4: research.

**Definition.** In Connes’ Euclidean convention, read ε and ε′ from J² = ε and JD = ε′DJ. In even degree read ε″ from Jγ = ε″γJ. The sign rows for degrees 0 through 7 are (+++), (+−), (−+−), (−+), (−++), (−−), (++−), (++).

**Problem.** For a closed spin manifold of dimension n with its charge conjugation J, the KO-dimension is n mod 8. The definition also applies where classical dimension fails: the finite space of the Standard Model has KO-dimension 6 but classical dimension 0.

**How the definition helps.** The signs of J are defined for every real spectral triple, even with no points, so a dimension exists for all of them. On a manifold, the signs come from the real Clifford algebras, which repeat with period 8 (our own). The work went into matching the sign table with the eight real Clifford algebras (our own).

**nLab:** [KO-dimension](https://ncatlab.org/nlab/show/KO-dimension). It says: “For classical Riemannian manifolds KO-dimension coincides with the traditional concept of dimension of manifolds, modulo 8.”

**Sources:**

- [Alain Connes, Noncommutative geometry and reality, Journal of Mathematical Physics 36 (1995)](https://doi.org/10.1063/1.531241)

### Operator systems let Peter–Weyl truncations converge to compact quantum groups

**Remember:** Cutting an algebra by a projection leaves an operator system.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L89, 46L67. arXiv math.OA, math.QA. Level 4: research.

**Definition.** An operator system is a self-adjoint space of bounded operators that contains 1, but need not be closed under products. Let P project L²(𝔾) onto the parts that belong to a finite set Λ of irreducible representations of a compact quantum group 𝔾. The Peter–Weyl truncation is the operator system of compressions PaP, with a in A = C(𝔾).

**Problem.** Take a coamenable compact quantum group with a bi-invariant regular Lip-norm. Its Peter–Weyl truncations converge to it in Kerr's complete Gromov–Hausdorff distance as Λ grows to include every representation.

**How the definition helps.** Compression preserves the adjoint and the unit on the compressed Hilbert space, but it need not preserve products. Kerr’s distance compares the resulting operator systems with the original algebra. The convergence proof uses a state whose slice map approximately inverts compression, using coamenability (our own explanation).

**Paper or page:** [Convergence of Peter--Weyl Truncations of Compact Quantum Groups](https://arxiv.org/abs/2409.16698). It says: “We prove convergence of such nets in terms of Kerr's complete Gromov–Hausdorff distance. An important tool is the choice of an appropriate state whose induced slice map gives an approximate inverse of the compression map C(𝔾) ∋ a ↦ PaP in Lip-norm.”

**Sources:**

- [Malte Leimbach, Convergence of Peter–Weyl truncations of compact quantum groups, Journal of Noncommutative Geometry (2025)](https://doi.org/10.4171/jncg/634)

### Product Dirac operators add summability exponents

**Remember:** The Pauli matrices cancel the mixed terms in the square.

*True by definition.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L87. arXiv math.OA, math-ph. Level 4: research.

**Definition.** Take self-adjoint operators D and E with compact resolvent, meaning their resolvents are compact. On separate Hilbert space factors form the closure of D ⊗ 1 ⊗ σ + 1 ⊗ E ⊗ τ. The two self-adjoint 2 × 2 matrices σ and τ square to the identity and satisfy στ = −τσ.

**Problem.** Call an operator p-summable when the eigenvalues of (1 + D²)⁻¹ raised to the power p/2 have finite sum. If D is p-summable and E is q-summable for positive p and q, their product operator is (p + q)-summable.

**How the definition helps.** Anticommutation cancels the mixed terms in the square, reducing the trace estimate to scalar eigenvalue sums (our own explanation). For eigenvalues x and y, the denominator 1 + x² + y² dominates both 1 + x² and 1 + y². Splitting the exponent into p/2 and q/2 bounds the double sum by the two finite sums multiplied together, up to matrix multiplicity. The paper applies this operator estimate to its crossed-product construction.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “is (p+q)-summable.”

**Sources:**

- [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698)

### Propinquity zero gives an isomorphism, unlike Rieffel's distance

**Remember:** A distance that sees products can tell an algebra from its opposite.

*Rules out counterexamples. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L89. arXiv math.OA. Level 4: research.

**Definition.** A propinquity tunnel from (A,L<sub>A</sub>) to (B,L<sub>B</sub>) uses a common quantum metric algebra with surjective \*-homomorphisms onto A and B inducing their quotient seminorms. The C-strongly Leibniz version uses tunnels in the same C-strongly Leibniz class.

**Problem.** For each C ≥ 1, the C-strongly Leibniz propinquity is a metric on C-strongly Leibniz compact quantum metric spaces, up to full quantum isometry. So distance zero gives a \*-isomorphism that preserves the Lip-norms.

**How the definition helps.** Tunnel maps preserve multiplication, which the full quantum isometry theorem recovers at distance zero (our own explanation). In Rieffel’s order-unit distance, an algebra and its opposite have identical ordered self-adjoint spaces with the same seminorm. Phillips’ example shows that an algebra need not be \*-isomorphic to its opposite.

**Paper or page:** [The strongly Leibniz property and the Gromov--Hausdorff propinquity](https://arxiv.org/abs/2301.05692). It says: “For all C ≥ 1, the C-strongly Leibniz propinquity Λ\*SLC is a metric on 𝒮ℒC.”

**Sources:**

- [Konrad Aguilar, Stephan Ramon Garcia, Elena Kim and Frédéric Latrémolière, The strongly Leibniz property and the Gromov–Hausdorff propinquity, Journal of Mathematical Analysis and Applications 529 (2024)](https://doi.org/10.1016/j.jmaa.2023.127572)
- [Frédéric Latrémolière, The quantum Gromov–Hausdorff propinquity, Transactions of the AMS 368 (2016)](https://doi.org/10.1090/tran/6334)
- [N. Christopher Phillips, A simple separable C\*-algebra not isomorphic to its opposite algebra, Proceedings of the AMS 132 (2004)](https://doi.org/10.1090/s0002-9939-04-07330-7)

### Spectral action on a product space gives gravity plus Standard Model

**Remember:** Fluctuate the Dirac operator, and gauge fields come out of gravity.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 81T13, 81R60. arXiv math.MP, math.OA. Level 4: research.

**Definition.** An almost commutative geometry combines a spin manifold with a finite spectral triple by taking their product. Its fluctuated spectral action is Tr f((D + A + JAJ⁻¹)/Λ), where J is charge conjugation and Λ &gt; 0. The self-adjoint one-form A is a finite sum of terms a\[D,b\] with a and b in the product algebra.

**Problem.** Take the Standard Model finite spectral triple with algebra ℂ ⊕ ℍ ⊕ M₃(ℂ) and a closed Riemannian spin four-manifold M. For a smooth rapidly decreasing even cutoff with nonzero relevant moments, the fluctuated product spectral action has a large-Λ expansion. It contains the Einstein–Hilbert action, a cosmological term and the bosonic Standard Model Lagrangian with the Higgs potential.

**How the definition helps.** The definition treats gauge and Higgs fields as parts of the Dirac operator, so the one gravity functional Tr f(D/Λ) already contains their actions. The work went into the heat-kernel expansion of the trace and into the choice of the finite space F (our own).

**Wikipedia:** [Noncommutative standard model](https://en.wikipedia.org/wiki/Noncommutative_standard_model). It says: “The full Lagrangian (in Euclidean signature) of the Standard Model minimally coupled to gravity is obtained as pure gravity over that product space.”

**Sources:**

- [Ali H. Chamseddine and Alain Connes, The spectral action principle, Communications in Mathematical Physics 186 (1997)](https://doi.org/10.1007/s002200050126)

### Summability shows the free group C\*-algebra has no nontrivial projections

**Remember:** Summable tree commutators identify the canonical trace with an integer index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 46L80, 22D25. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A Fredholm module (H, F) is p-summable on a dense subalgebra if its commutators \[F, a\] there have p-th power summable singular values. The action of a free group Fₙ on its Cayley tree gives a Fredholm module over its reduced group C\*-algebra C\*ᵣ(Fₙ). On the group algebra ℂFₙ its commutators have finite rank, so it is 1-summable there.

**Problem.** The reduced group C\*-algebra C\*ᵣ(Fₙ) of a free group has no projections other than 0 and 1 (Pimsner–Voiculescu). This follows because its canonical trace takes only integer values on K₀.

**How the definition helps.** Summability turns the index pairing into a trace formula, which for the tree module is the canonical trace τ (our own summary of Connes' argument). So τ(e) is a Fredholm index, hence an integer, for projections e in a smooth subalgebra with the same K-theory (our own). A projection e has 0 ≤ τ(e) ≤ 1, and τ is faithful, so e = 0 or e = 1. The work went into building the summable module from the tree.

**Wikipedia:** [Kaplansky's conjectures](https://en.wikipedia.org/wiki/Kaplansky%27s_conjectures). It says: “The idempotent conjecture has a generalisation, the Kadison idempotent conjecture, also known as the Kadison–Kaplansky conjecture, for elements in the reduced group C\*-algebra.”

**Sources:** none listed. No primary source with a working link was found.

### The entropy of a free fermion state is a spectral action

**Remember:** Entropy adds over eigenvalues, so it is a spectral action.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58B34 (Noncommutative geometry (à la Connes)), 81T75, 82B10. arXiv math.MP, math.OA. Level 4: research.

**Definition.** For independent free fermion modes with one-particle energies λ, the equilibrium occupation probability at inverse temperature β &gt; 0 is p(λ) = 1/(1 + exp(βλ)). A spectral action sums a function of those energies with multiplicity whenever the sum converges.

**Problem.** A free fermion Gibbs state with finite entropy and zero chemical potential has entropy Tr h(βD). Here h(x) = log(1 + e⁻ˣ) + x/(1 + eˣ). Under the heat-trace expansion and remainder bounds permitting termwise integration against the entropy kernel, entropy has an expansion as β decreases to zero.

**How the definition helps.** Independence adds the binary entropies of the modes (our own zero-chemical-potential calculation). Substituting p(λ) into −p log p − (1−p)log(1−p) gives h(βλ). The heat-kernel representation of h transfers the heat expansion to the spectral action under the stated bounds.

**Paper or page:** [Second Quantization and the Spectral Action](https://arxiv.org/abs/1903.09624). It says: “For μ&lt;0 we then have the following expansion for the entropy: 𝒮(ρf) = Tr(hβμ(βD))”

**Sources:**

- [Ali H. Chamseddine, Alain Connes and Walter D. van Suijlekom, Entropy and the spectral action, Communications in Mathematical Physics 373 (2019)](https://doi.org/10.1007/s00220-019-03297-8)
- [Rui Dong, Masoud Khalkhali and Walter D. van Suijlekom, Second quantization and the spectral action, Journal of Geometry and Physics 167 (2021)](https://doi.org/10.1016/j.geomphys.2021.104285)

### The spectral action reduces to the Einstein–Hilbert action on manifolds

**Remember:** Sum a smooth cutoff over the rescaled Dirac eigenvalues.

*Makes the theorem clean to state or prove.* MSC 58B34 (Noncommutative geometry (à la Connes)), 58J35, 81T75. arXiv math.MP, math.DG. Level 4: research.

**Definition.** For the Dirac operator D of a closed spin manifold, choose a positive even Schwartz function f and an energy scale Λ &gt; 0. The spectral action is Tr f(D/Λ).

**Problem.** For the Dirac operator of a closed spin 4-manifold, Tr f(D/Λ) has an expansion as Λ → ∞. Up to constants that depend on f, its Λ⁴ term is the volume and its Λ² term is the integral of the scalar curvature.

**How the definition helps.** The functional uses only the spectrum of D, so it is defined for every spectral triple and is invariant under all unitaries. On a manifold, its expansion comes from the heat-kernel coefficients of D² (our own). The Lichnerowicz formula D² = ∇\*∇ + R/4 puts the scalar curvature R into the second coefficient (our own).

**nLab:** [spectral action](https://ncatlab.org/nlab/show/spectral+action). It says: “And indeed, on spectral triples corresponding to ordinary Riemannian geometry the spectral action reduces to the Einstein-Hilbert action plus a series of integrals over higher curvature invariants.”

**Sources:**

- [Ali H. Chamseddine and Alain Connes, The spectral action principle, Communications in Mathematical Physics 186 (1997)](https://doi.org/10.1007/s002200050126)

### Tame estimates permit local inversion

**Remember:** Control the loss of derivatives before trying to invert the map.

*Makes the theorem clean to state or prove.* MSC 58C15 (Implicit function theorems; global Newton methods on manifolds), 58B10. arXiv math.FA, math.DG. Level 4: research.

**Definition.** On smooth periodic functions, let ‖f‖ₙ measure the largest absolute value of f and its first n derivatives. A tame map satisfies local bounds ‖P(f)‖ₙ ≤ Cₙ(1 + ‖f‖ₙ₊ᵣ) for large n with fixed r. Smooth tame maps obey such bounds for the map and all its derivatives, including their direction arguments.

**Problem.** A smooth tame map between open sets of smooth periodic functions has smooth tame local inverses if its derivatives have smoothly tame inverses. This condition concerns the map sending a base function and a right-hand side to the solution of the linearized equation.

**How the definition helps.** Smooth tameness expresses the derivative loss as a fixed shift in the seminorm estimates (our own explanation). Hamilton’s Nash–Moser inverse function theorem uses smoothing to control this loss during iteration and gives the local inverse.

**Wikipedia:** [Nash–Moser theorem](https://en.wikipedia.org/wiki/Nash%E2%80%93Moser_theorem). It says: “Then P is locally invertible, and each local inverse P⁻¹ is a smooth tame map.”

**Sources:**

- [Richard S. Hamilton, The Inverse Function Theorem of Nash and Moser (1982)](https://www.ams.org/bull/1982-07-01/S0273-0979-1982-15004-2)

### Diffeomorphisms integrate time-dependent fields

**Remember:** Solve the flow one particle at a time.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** The Lie algebra of a Lie group is its tangent space at the identity. A group is regular if every smooth time-dependent Lie algebra element integrates from the identity and its time-one endpoint depends smoothly on the input. Integration here means that right translation back to the identity recovers the prescribed velocity.

**Problem.** The smooth diffeomorphism group of a closed finite-dimensional manifold is regular.

**How the definition helps.** For diffeomorphisms, the evolution equation follows one point at a time under a time-dependent vector field. In our own account, compactness gives existence throughout the time interval. Smooth dependence on parameters gives smooth endpoints for every smooth family of inputs, which is the curve test for smoothness.

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “For each compact manifold M, the diffeomorphism group Diff(M) is a regular Lie group.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Extra Sobolev derivatives permit smooth inversion

**Remember:** Spend one input derivative for each derivative of inversion.

*Rules out counterexamples.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** On a closed n-dimensional manifold, a Sobolev diffeomorphism of integer order s has square-integrable weak derivatives through order s in local coordinates. Its inverse has the same regularity, and s exceeds n/2 + 1. Weak derivatives are derivatives defined by integration against smooth test functions.

**Problem.** For each nonnegative integer k, inversion from order s + k to order s is k times continuously differentiable.

**How the definition helps.** The extra input derivatives supply the spatial derivatives needed when differentiating inversion. In our own circle example, rotating the output of a diffeomorphism translates the argument of its inverse. Differentiating this translation in the order-s norm requires one further square-integrable derivative. Sobolev estimates for composition establish the positive result.

**Paper or page:** [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278). It says: “𝒟ˢ⁺ᵏ(M) → 𝒟ˢ(M) ; ϕ ↦ ϕ⁻¹ is Cᵏ-smooth.”

**Sources:**

- [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278)

### Fixed volume gives a retract

**Remember:** The volume forms contract while the preserving factor stays fixed.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** Fix a positive volume form μ and assign to each orientation-preserving diffeomorphism φ its pullback φ∗μ. The forms so obtained have the same total volume as μ. The volume-preserving group consists exactly of maps with pullback μ.

**Problem.** On a closed connected oriented manifold, the orientation-preserving diffeomorphism group deforms continuously onto the μ-preserving subgroup while fixing that subgroup throughout.

**How the definition helps.** Positive forms of fixed total volume form a convex set, so straight-line interpolation contracts that set to μ. In our own proof, Moser’s construction selects a diffeomorphism pulling μ back to each form, continuously and with the identity at μ. Composing φ on the right with the inverse of that selection at φ∗μ gives a volume-preserving factor. Contract the form while keeping this factor fixed.

**nLab:** [volume preserving diffeomorphism](https://ncatlab.org/nlab/show/volume+preserving+diffeomorphism). It says: “This inclusion is a weak homotopy equivalence, in fact a deformation retract.”

**Sources:**

- [Jürgen Moser, On the Volume Elements on a Manifold (1965)](https://doi.org/10.1090/S0002-9947-1965-0182927-5)

### Invariant charts model bundle automorphisms

**Remember:** Equivariant coordinates turn a commuting map into an invariant field.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** A principal bundle automorphism is a diffeomorphism Φ of the total space satisfying Φ(pg) = Φ(p)g for every point p and group element g.

**Problem.** For a compact structure group and closed base, bundle automorphisms form a closed smooth subgroup of all diffeomorphisms of the total space. Its tangent vectors at the identity are exactly the smooth vector fields preserved by the structure group.

**How the definition helps.** The invariant metric sends transformed geodesics to geodesics, so its coordinates turn the automorphism condition into invariance of a vector field. In our own proof, averaging over the compact group supplies the metric and a projection onto invariant fields. Commuting with each group element is a closed condition.

**Paper or page:** [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572). It says: “is a closed tame Fréchet Lie subgroup of Diff(P)”

**Sources:**

- [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572)

### Orientation covers carry fluid geodesics

**Remember:** Lift a fluid motion and let sheet symmetry keep it upstairs.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** The orientation cover has two points above each point of a manifold, one for each local orientation. A diffeomorphism lifts by carrying each orientation to its image under the derivative. A volume-preserving lift preserves the cover’s volume form and commutes with the sheet exchange.

**Problem.** For a closed nonorientable Riemannian manifold, the lifted volume-preserving group is totally geodesic for the cover’s kinetic-energy metric. Every geodesic starting tangent to that subgroup stays in it while it exists.

**How the definition helps.** Conjugation by the sheet exchange preserves kinetic energy and fixes exactly the volume-form-preserving lifts. In our own proof, this symmetry takes a geodesic starting tangent to the subgroup to another with the same initial data. Uniqueness for the fluid equation makes the two geodesics coincide.

**Paper or page:** [Curvature of Measure-Preserving Diffeomorphism Groups of Non-Orientable Surfaces](https://arxiv.org/abs/2501.06599). It says: “is a totally geodesic submanifold”

**Sources:**

- [Curvature of Measure-Preserving Diffeomorphism Groups of Non-Orientable Surfaces](https://arxiv.org/abs/2501.06599)

### Slices keep asymmetry open

**Remember:** On a slice, nearby symmetries can only come from old ones.

*True by definition.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** The stabilizer of a configuration consists of the transformations fixing it. A slice is a local submanifold through the configuration, preserved by its stabilizer, whose translates cover a neighborhood. Only transformations in the stabilizer can move the slice to meet itself.

**Problem.** Consider a Riemannian metric and a principal bundle connection over a closed manifold, with compact structure group. Pairs fixed only by the identity bundle automorphism form an open set.

**How the definition helps.** On the slice, any symmetry must carry the slice to meet itself, so it belongs to the original stabilizer. Elsewhere on its translates, stabilizers differ only by conjugation. In our own proof, the slice theorem replaces a separate search for new symmetries at every nearby pair.

**Paper or page:** [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572). It says: “The subset of elements of Conf(P) with a trivial symmetry group is open in Conf(P).”

**Sources:**

- [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572)

### Smooth curves keep compact support

**Remember:** In compact-support charts, bounded families share one compact support.

*True by definition.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds), 46A13. arXiv math.DG. Level 4: research.

**Definition.** A compactly supported diffeomorphism equals the identity outside some compact set. Its usual group charts use compactly supported vector fields. Their topology is the locally convex inductive limit, the finest locally convex topology making each fixed-support space include continuously.

**Problem.** For a smooth curve of compactly supported diffeomorphisms on a second-countable finite-dimensional manifold, one compact set contains every support on a compact time interval.

**How the definition helps.** Every bounded set of chart vectors lies in one fixed-support space. In our own proof, cover the time interval by finitely many compact subintervals on which translated charts apply. Each chart curve has bounded image there, and the finitely many supports together with those of the chart centers have compact union.

**nLab:** [compactly supported mapping space](https://ncatlab.org/nlab/show/compactly+supported+mapping+space). It says: “on those maps that have compact support.”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Sobolev inverses restrict to smooth data

**Remember:** If the inverses agree on every level, they agree on the intersection.

*Makes the theorem clean to state or prove.* MSC 58D05 (Groups of diffeomorphisms and homeomorphisms as manifolds). arXiv math.DG. Level 4: research.

**Definition.** For each integer s &gt; 2, let Gˢ be the Hˢ volume-preserving diffeomorphism group of the flat two-torus. The smooth group is their intersection, with the topology induced by all inclusions into Gˢ.

**Problem.** For the kinetic-energy metric, the map taking a small initial velocity to its geodesic endpoint at time one has a local inverse. Both maps are continuously differentiable in the Fréchet sense on smooth data.

**How the definition helps.** A compatible inverse on every Sobolev level gives an inverse on their intersection (our own explanation). The regularity theorem for the torus Euler exponential supplies a common neighborhood and preserves higher regularity in both directions. Its derivative estimates give continuous differentiability in the smooth topology.

**Paper or page:** [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278). It says: “admits a well-defined exponential map which is a local C¹ꜰ-diffeomorphism at the identity.”

**Sources:**

- [Two-Point Boundary Value Problems on Diffeomorphism Groups](https://arxiv.org/abs/2110.12278)

### Normal graphs chart unparametrized submanifolds

**Remember:** Keep the normal displacement and discard the change of labels.

*Makes the theorem clean to state or prove.* MSC 58D10 (Spaces of embeddings and immersions), 58D05. arXiv math.DG. Level 4: research.

**Definition.** An unparametrized embedded submanifold records the image of an embedding. Near a fixed compact image, a normal graph moves each point by a short vector perpendicular to that image. A tubular neighborhood supplies these coordinates.

**Problem.** Smooth embeddings of a closed manifold into a finite-dimensional manifold form a principal bundle over their images. Locally each embedding corresponds smoothly to an image and a diffeomorphism of the source.

**How the definition helps.** Projection back onto the reference image fixes one parametrization for each nearby image. Any embedding with that image differs from the chosen one by a unique source diffeomorphism. In our own account, tubular coordinates and smooth inversion of diffeomorphisms give smooth dependence of both factors.

**Wikipedia:** [Convenient vector space](https://en.wikipedia.org/wiki/Convenient_vector_space). It says: “is a principal fiber bundle”

**Sources:**

- [Andreas Kriegl and Peter W. Michor, The Convenient Setting of Global Analysis (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)

### Local additions make spaces of smooth maps manifold-like

**Remember:** The space carries its own charts: each tangent vector v points to η(v).

*True by definition. Confidence: medium.* MSC 58D15 (Manifolds of mappings), 46T10. arXiv math.DG, math.FA. Level 4: research.

**Definition.** For a smooth space X, write π for its tangent projection. A local addition is a smooth η: TX → X such that (π,η) identifies TX diffeomorphically with an open diagonal neighborhood. Each fiber map ηₓ sends 0 to x and has identity derivative there.

**Problem.** If X admits a local addition and S is smoothly compact, C∞(S,X) admits a local addition. Its tangent bundle identifies with C∞(S,TX).

**How the definition helps.** The local addition identifies tangent vectors to the mapping space with smooth fields along maps (our own explanation). Applying C∞(S, −) then carries the local addition and its inverse to pointwise maps. Smooth compactness means C∞(S,U) is open in C∞(S,Y) for every smooth Y and open U ⊆ Y. This gives the required open diagonal neighborhood.

**nLab:** [locally additive space](https://ncatlab.org/nlab/show/locally+additive+space). It says: “Let X be a locally kinematic space and S a smoothly compact space. Then C∞(S,X) is again a locally kinematic space.”

**Sources:** none listed. No primary source with a working link was found.

### Postcomposition is smooth

**Remember:** A tangent vector at each image point gives one chart coordinate.

*Makes the theorem clean to state or prove.* MSC 58D15 (Manifolds of mappings), 58B10. arXiv math.DG, math.FA. Level 4: research.

**Definition.** A local addition on M is a smooth map η from an open neighborhood of the zero section in TM to M. It satisfies η(0ₓ) = x for every x, and v ↦ (π(v),η(v)) maps its domain diffeomorphically onto a diagonal neighborhood. Here π is the tangent projection.

**Problem.** Let X be a closed manifold and let M and N be smooth manifolds with local additions. Each smooth map f from M to N induces a smooth map g ↦ f ∘ g on smooth maps from X.

**How the definition helps.** In these charts, composition applies a smooth map separately to the vector at each point of X. Our own explanation uses the theorem that smooth maps between fibers act smoothly on spaces of smooth sections.

**Paper or page:** [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587). It says: “If f : M → N is smooth, then the pushforward f∗ : C∞(X,M) → C∞(X,N), f∗(g) = f ∘ g, is smooth.”

**Sources:**

- [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587)

### Submersions lift to mapping spaces

**Remember:** Choose chart coordinates that make projection act one tangent vector at a time.

*Makes the theorem clean to state or prove.* MSC 58D15 (Manifolds of mappings), 58B10. arXiv math.DG, math.FA. Level 4: research.

**Definition.** Local additions η on M and θ on N are compatible with p: M → N if p(η(v)) = θ(Tp(v)) near the zero section. Each addition sends zero to its base point and, paired with tangent projection, gives a diffeomorphism onto a diagonal neighborhood.

**Problem.** Let p be a smooth surjective submersion between Banach manifolds admitting smooth partitions of unity. For every closed manifold X, composition g ↦ p ∘ g is a submersion on smooth maps from X.

**How the definition helps.** Compatible coordinates turn composition with p into a linear projection on vector fields along g. In our own account, the work is constructing those coordinates and a smooth linear right inverse for that projection.

**Paper or page:** [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587). It says: “If p : M → N is a smooth surjective submersion, then the pushforward p∗ : C∞(X,M) → C∞(X,N), p∗(f) = p ∘ f is a submersion.”

**Sources:**

- [The Stacey-Roberts Lemma for Banach Manifolds](https://arxiv.org/abs/2411.00587)

### Coincident genus levels force critical pairs

**Remember:** Repeated levels concentrate genus on the critical set.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 4: research.

**Definition.** For nonempty symmetric A avoiding zero, its genus is the least k ≥ 1 admitting a continuous odd map into punctured ℝᵏ. Odd means h(−x) = −h(x), with genus infinite if no k works and zero for the empty set. The kth level is the infimum of max f(A) over compact symmetric A avoiding zero with genus at least k.

**Problem.** For an even continuously differentiable Hilbert space function f, suppose genus levels k through k+r coincide at finite c &lt; f(0). If every sequence with values approaching c and derivatives approaching zero has a convergent subsequence, the critical set there has genus at least r+1.

**How the definition helps.** Genus bounds how much a test set can lose when one removes a neighborhood of the critical set (our own). The compact critical set has a symmetric neighborhood of the same genus (our own). If that genus were at most r, removing the neighborhood from a nearly optimal test would leave genus at least k (our own). An odd deformation would push the remainder below c, contradicting the kth level (our own).

**Paper or page:** [Existence of Eigenvalues for Anisotropic and Fractional Anisotropic Problems via Ljusternik-Schnirelmann Theory](https://arxiv.org/abs/2309.14301). It says: “such that φ(u) = c has genus ≥ k + 1.”

**Sources:**

- [I. Ceresa Dussel, J. Fernandez Bonder, Existence of Eigenvalues for Anisotropic and Fractional Anisotropic Problems via Ljusternik-Schnirelmann Theory](https://arxiv.org/abs/2309.14301)
- [Charles V. Coffman, A minimum-maximum principle for a class of non-linear integral equations (1969)](https://doi.org/10.1007/BF02786802)

### Homotopy-stable families localize minimax sequences

**Remember:** Preserve the tests so you can deform them near a barrier.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.AP. Level 4: research.

**Definition.** A homotopy-stable family here consists of nonempty compact test sets containing a fixed closed boundary B. Every continuous deformation starting at the identity and fixing B throughout takes each test to another test. For a continuously differentiable function f on a complete connected Riemannian Hilbert manifold, let c be the finite infimum of test maxima.

**Problem.** Suppose a closed set F meets every test outside B and sup f(B) ≤ c ≤ inf f(F). For tests Aₙ with maxima approaching c, there are xₙ approaching F and Aₙ in distance, with f(xₙ) → c and ‖df(xₙ)‖ → 0.

**How the definition helps.** Any deformation fixing B preserves the test family and therefore preserves its obligation to meet F outside B (our own). The localized minimax theorem constructs a deformation near a nearly optimal test if no points near its barrier satisfy the required estimates (our own). Lowering the test there would contradict the barrier inequality (our own).

**Paper or page:** [Normalized solutions to a class of Kirchhoff equations with Sobolev critical exponent](https://arxiv.org/abs/2103.08106). It says: “Let φ be a C¹-functional on a complete connected C¹-Finsler manifold X and consider a homotopy-stable family ℱ with an extended closed boundary B.”

**Sources:**

- [Gongbao Li, Xiao Luo, Tao Yang, Normalized solutions to a class of Kirchhoff equations with Sobolev critical exponent](https://arxiv.org/abs/2103.08106)

### Morse–Bott perturbations add indices

**Remember:** Normal and tangent negative directions count separately.

*Makes the theorem clean to state or prove.* MSC 58E05 (Abstract critical point theory (Morse theory, Lyusternik-Shnirel'man theory, etc.) in infinite-dimensional spaces). arXiv math.DG. Level 4: research.

**Definition.** A critical submanifold is Morse–Bott if its Hessian, the second derivative, has kernel equal to the tangent space and an invertible normal part. The index counts the greatest dimension of a subspace where the Hessian is negative definite.

**Problem.** Near a compact Morse–Bott critical submanifold of finite index in Hilbert space, add a small positive multiple of a smooth function of nearest-point projection. At each nondegenerate critical point of the added function on the submanifold, the new index equals the normal index plus its tangent index.

**How the definition helps.** Projection makes the added Hessian act only on tangent directions at these points (our own). The original Hessian acts only on normal directions, so the negative dimensions add (our own). The perturbation theorem supplies a neighborhood where these account for all critical points when the added function has only nondegenerate critical points (our own).

**Paper or page:** [Morse theory for the Allen-Cahn functional](https://arxiv.org/abs/2310.17096). It says: “the Morse index of fδ at any x₀ ∈ C is ind(f,x₀) + ind(gᵢ,x₀)”

**Sources:**

- [Jingwen Chen, Pedro Gaspar, Morse theory for the Allen-Cahn functional](https://arxiv.org/abs/2310.17096)

### Bott twists split iteration indices

**Remember:** An iterate splits into one sector for each root of unity.

*True by definition.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 4: research.

**Definition.** For a unit complex number z, the twisted index uses complex variation fields along one period of a closed geodesic satisfying V(1) = zV(0). It counts the greatest complex dimension on which the second derivative of energy is negative definite.

**Problem.** The index of a closed geodesic traversed m times equals the sum of its twisted indices over all mth roots of unity.

**How the definition helps.** Each twisted boundary condition selects one eigenspace of the shift by one period (our own). Instead of counting negative directions over all m periods, Fourier decomposition splits the calculation into these one-period spaces (our own). The energy Hessian respects the shift and restricts to a positive multiple of the one-period form on each space (our own).

**Wikipedia:** [Closed geodesic](https://en.wikipedia.org/wiki/Closed_geodesic). It says: “If γ is a critical point of E, so are the reparametrized curves γᵐ, for each m ∈ ℕ, defined by γᵐ(t) := γ(mt).”

**Sources:**

- [Raoul Bott, On the iteration of closed geodesics and the Sturm intersection theory (1956)](https://doi.org/10.1002/cpa.3160090204)

### Negative bundles describe sublevel crossings

**Remember:** One negative disk at each critical loop replaces one cell.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E10 (Variational problems in applications to the theory of geodesics (problems in one independent variable)). arXiv math.DG. Level 4: research.

**Definition.** A Morse–Bott family of critical loops has second derivative with kernel tangent to the family and invertible normal part. Its negative bundle consists of the normal directions in the negative spectral subspace at each loop.

**Problem.** Suppose a single compact Morse–Bott component accounts for all critical loops at an isolated energy level on a closed Riemannian manifold. With coefficients modulo two, relative homology across that level in degree j equals the component’s homology in degree j−λ, where λ is the negative rank.

**How the definition helps.** Each negative fiber supplies the disk attached at its critical loop (our own). The Morse–Bott attachment theorem computes relative homology between nearby upper and lower energy sublevels from these disks and their boundary spheres (our own). The Thom isomorphism shifts homology by the fiber dimension λ, with no orientation assumption for coefficients modulo two (our own).

**Wikipedia:** [Morse theory](https://en.wikipedia.org/wiki/Morse_theory). It says: “the kernel of the Hessian at a critical point equals the tangent space to the critical submanifold.”

**Sources:**

- [Raoul Bott, Nondegenerate Critical Manifolds (1954)](https://doi.org/10.2307/1969631)
- [Wolfgang Ziller, The free loop space of globally symmetric spaces (1977)](https://doi.org/10.1007/BF01390161)

### Bubble trees restore compactness

**Remember:** Keep each rescaled sphere as part of the limit.

*Makes the theorem clean to state or prove.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 4: research.

**Definition.** A harmonic bubble tree consists of a harmonic map on the original surface and finitely many harmonic spheres joined at points. The maps agree at each joint, and their energies add. A harmonic map is a critical point of Dirichlet energy.

**Problem.** Take a sequence of harmonic maps from a fixed closed Riemannian surface to a closed Riemannian manifold with uniformly bounded energies. After rescaling, a subsequence converges to a harmonic bubble tree whose energy equals the limit of its energies.

**How the definition helps.** The tree keeps both the original limit and the energy seen only after rescaling (our own explanation). The compactness theorem must extract the spheres at the right scales (our own explanation). It must also show that the regions between scales cause no energy loss or gaps in the image (our own explanation).

**Paper or page:** [Compactness of harmonic maps of surfaces with regular nodes](https://arxiv.org/abs/2012.14040v2). It says: “to a smooth harmonic bubble tree map”

**Sources:**

- [T. H. Parker, Bubble tree convergence for harmonic maps (1996)](https://doi.org/10.4310/jdg/1214459224)

### Curvature comparison makes boundary minimizers unique

**Remember:** Midpoint comparison makes two minimizers coincide.

*Rules out counterexamples.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 4: research.

**Definition.** A complete space with shortest paths is CAT(0) when points on triangle sides lie at most as far apart as their Euclidean counterparts. The Euclidean comparison triangle has the same side lengths, and corresponding points divide matching sides in the same proportions.

**Problem.** Fix boundary values on a bounded connected Riemannian domain with nonempty boundary locally given by Lipschitz graphs. Any two finite-energy maps minimizing Dirichlet energy into a CAT(0) space with these boundary values agree almost everywhere.

**How the definition helps.** Triangle comparison makes the midpoint map save energy wherever the distance between two maps varies (our own explanation). The Korevaar–Schoen energy inequality quantifies this saving. Two minimizers cannot save energy, so their distance has zero gradient and vanishes at the boundary. For a spherical target, even smooth boundary data can admit distinct minimizers.

**Paper or page:** [Harmonic maps in singular geometry and rigidity](https://arxiv.org/abs/2510.13708v1). It says: “Then there exists a unique”

**Sources:**

- [N. J. Korevaar and R. M. Schoen, Sobolev spaces and harmonic maps for metric space targets (1993)](https://doi.org/10.4310/cag.1993.v1.n4.a4)
- [A. Detaille and K. Mazowiecka, Generic non-uniqueness of minimizing harmonic maps from a ball to a sphere](https://arxiv.org/abs/2403.12662v1)

### Half-harmonic maps become free boundary equations

**Remember:** Move the nonlocal equation into a local boundary condition.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58E20 (Harmonic maps, etc.). arXiv math.AP, math.DG. Level 4: research.

**Definition.** For a smooth circle-valued map u on ℝ, let U be its Poisson extension to the upper half-plane. Its half-energy is the integral of ½\|∇U\|² over that half-plane. A finite-half-energy map is half-harmonic if every smooth compactly supported variation through circle-valued maps has zero first variation of half-energy.

**Problem.** A smooth map with finite half-energy is half-harmonic exactly when its extension’s outward normal derivative is perpendicular to the circle at each boundary value.

**How the definition helps.** The extension solves the interior Laplace equation, so integration by parts leaves only the boundary derivative (our own explanation). Pairing this derivative with all tangent variations tests exactly whether it is perpendicular to the circle. The Fourier transform identifies this boundary derivative with the square root of the positive Laplace operator.

**Paper or page:** [Non-degeneracy and quantitative stability of half-harmonic maps from ℝ to 𝕊](https://arxiv.org/abs/2107.08521v1). It says: “Let U be the harmonic extension of u”

**Sources:** none listed. No primary source with a working link was found.

### Small energy excludes harmonic sphere bubbles

**Remember:** A nonconstant bubble costs at least one sphere energy gap.

*Rules out counterexamples.* MSC 58E20 (Harmonic maps, etc.). arXiv math.DG, math.AP. Level 4: research.

**Definition.** A harmonic sphere is a map from the round sphere that is stationary for Dirichlet energy. For a closed Riemannian target, its sphere energy gap is the infimum of energies of nonconstant harmonic spheres. Use infinity if none exist.

**Problem.** Consider harmonic maps from a fixed closed Riemannian surface into that target. If their energies share a finite upper bound strictly below the sphere energy gap, a subsequence converges smoothly.

**How the definition helps.** Every nonconstant sphere extracted by rescaling would consume at least the gap (our own explanation). The bubble compactness theorem therefore gives smooth convergence everywhere along a subsequence. Conformal automorphisms of the round sphere can concentrate at one point when their energy equals the gap.

**Paper or page:** [Compactness of harmonic maps of surfaces with regular nodes](https://arxiv.org/abs/2012.14040v2). It says: “There is a constant ε′₀ &gt; 0 depending only on (X,h)”

**Sources:**

- [T. H. Parker, Bubble tree convergence for harmonic maps (1996)](https://doi.org/10.4310/jdg/1214459224)

### Asking nondegeneracy only across orbits makes Morse theory work on stacks

**Remember:** Invariant functions are flat along orbits, so test only across them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58H05 (Pseudogroups and differentiable groupoids), 57R70. arXiv math.DG. Level 4: research.

**Definition.** A morphism to the unit groupoid on ℝ is a smooth real function on the base that is constant on each orbit. It is Morse if, at each critical point, its Hessian has kernel exactly the tangent space to the orbit.

**Problem.** Being a Morse Lie groupoid morphism is invariant under Morita equivalence. So Morse functions on differentiable stacks are well defined.

**How the definition helps.** At corresponding critical points, Morita equivalence identifies the normal spaces and the Hessian forms they carry (our own explanation). Nondegeneracy therefore passes between presentations of the stack.

**Paper or page:** [Morse theory on Lie groupoids](https://arxiv.org/abs/2207.07594), [Morse theory on Lie groupoids](https://arxiv.org/abs/2207.07594). It says: “In this paper we introduce Morse Lie groupoid morphisms and study their main properties. We show that this notion is Morita invariant which gives rise to a well defined notion of Morse function on differentiable stacks.”

**Sources:**

- [C. Ortiz and F. Valencia, Morse theory on Lie groupoids, arXiv:2207.07594 (2022)](https://arxiv.org/abs/2207.07594)

### Differentiable stacks make Morita equivalence of Lie groupoids plain equivalence

**Remember:** A groupoid is known by its torsors, as an algebra by its modules.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58H05 (Pseudogroups and differentiable groupoids), 18F20. arXiv math.DG, math.CT. Level 4: research.

**Definition.** The stack presented by a Lie groupoid G assigns to each manifold S the groupoid of principal G-bundles over S and their isomorphisms. It acts on smooth maps by pullback. A differentiable stack is a stack equivalent to one of this form.

**Problem.** Lie groupoids with isomorphism classes of right-principal bibundles form a category equivalent to differentiable stacks with morphisms up to natural isomorphism. Two Lie groupoids are therefore Morita equivalent exactly when they present equivalent stacks.

**How the definition helps.** On the stack, Morita equivalence becomes plain equivalence of stacks. For Lie groupoids, Morita equivalence is defined by bibundles, spaces with compatible actions of both groupoids. The equivalence of categories is cited to Blohmann and Carchedi. In our reading, this is why a statement made about the stack, such as an orbifold invariant, needs no separate check of Morita invariance.

**nLab:** [differentiable stack](https://ncatlab.org/nlab/show/differentiable+stack), [Lie groupoid](https://ncatlab.org/nlab/show/Lie+groupoid). It says: “This means that looking at a Lie groupoid in terms of the stack it presents provides a direct way to recognizing the right notion of equivalence of these objects.”

**Sources:**

- [Kai Behrend, Ping Xu, Differentiable stacks and gerbes, J. Symplectic Geom. 9 (2011) 285–341, arXiv:math/0605694](https://arxiv.org/abs/math/0605694)

### Loop transport takes values in a quotient group

**Remember:** Labels joined by an arrow give the same transport class.

*True by definition.* MSC 58H05 (Pseudogroups and differentiable groupoids), 18N10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A crossed module consists of a Lie group homomorphism ∂: H → G and a smooth G-action on H by automorphisms. For all g ∈ G and h,k ∈ H, it satisfies ∂(g·h) = g∂(h)g⁻¹ and ∂(h)·k = hkh⁻¹. In its strict Lie 2-group, h labels an arrow from g to ∂(h)g.

**Problem.** For a quasi-principal 2-bundle with strict connection over a Lie groupoid, choosing a fiber object identifies thin loop transport values with elements of G/∂(H).

**How the definition helps.** Two labels in G describe isomorphic transports exactly when an arrow joins them. Their cosets modulo ∂(H) therefore agree. In our own comparison, retaining the transport maps themselves would also retain the arrows between labels. The transport theorem constructs these maps for paths in the groupoid, modulo deformations that sweep out no area.

**Paper or page:** [Parallel transport on a Lie 2-group bundle over a Lie groupoid along Haefliger paths](https://arxiv.org/abs/2309.05355v1). It says: “the group Aut̅(𝔼) is isomorphic to the quotient group G/τ(H).”

**Sources:**

- [Chatterjee and Chaudhuri, Parallel transport on a Lie 2-group bundle over a Lie groupoid along Haefliger paths, Proposition 5.17](https://arxiv.org/abs/2309.05355v1)

### Cone ellipticity excludes critical weights

**Remember:** Choose a weight line that misses every conormal root.

*Rules out counterexamples.* MSC 58J05 (Elliptic equations on manifolds, general theory), 58J40. arXiv math.AP. Level 4: research.

**Definition.** Cone ellipticity at weight γ requires invertible leading frequency symbols both in the interior and after radial rescaling at the tip. Freeze coefficients at the tip and replace the radial derivative −t∂ₜ by a complex number z. The resulting operator must be invertible along Re z = d/2 − γ, where d is the cone dimension.

**Problem.** On a compact manifold with isolated cone tips, cone ellipticity makes an order-m cone differential operator Fredholm between the weighted Sobolev spaces. Its target has regularity s − m and weight γ − m when its domain has regularity s and weight γ.

**How the definition helps.** The extra invertibility test detects modes that can concentrate at the tip while escaping interior estimates. In our own explanation, inversion along the weight line controls these modes. The cone inverse construction leaves compact errors, giving closed range and finite-dimensional kernel and cokernel.

**Paper or page:** [A Short Introduction to the Analysis on Manifolds with Conical Singularities](https://arxiv.org/abs/2311.07746v2). It says: “In particular, A then is a Fredholm operator.”

**Sources:** none listed. No primary source with a working link was found.

### Support control closes the range

**Remember:** Bound the support of the preimage by bounding the support of its image.

*Makes the theorem clean to state or prove.* MSC 58J05 (Elliptic equations on manifolds, general theory). arXiv math.AP. Level 4: research.

**Definition.** Support convexity for the transpose P\* means that each compact set K admits a compact set L with the following property. Every compactly supported distribution v with P\*v supported in K is itself supported in L.

**Problem.** A second-order elliptic differential operator P has closed range on smooth functions if its transpose satisfies support convexity. Convergence here means uniform convergence of every derivative on compact sets.

**How the definition helps.** Support convexity confines all relevant transpose preimages to one compact region for each test region. In our own explanation, ellipticity gives local regularity estimates there. The functional analytic closed-range theorem converts those estimates and the support bound into closed range.

**Paper or page:** [Elliptic operators on non-compact manifolds have closed range](https://arxiv.org/abs/2203.07534v1). It says: “we see that M is P\*-convex. By Petersen’s functional analytic argument, it follows that P has closed range.”

**Sources:** none listed. No primary source with a working link was found.

### Averaged pullback preserves square integrability

**Remember:** Average a submersion instead of evaluating on a thin image.

*Rules out counterexamples.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 4: research.

**Definition.** For a smooth map f between closed oriented Riemannian manifolds, take small tangent disks centered at its image points, one disk per source point. The Hilsum–Skandalis pullback evaluates forms through the exponential map on these disks. It multiplies by a smooth closed form supported inside the disk bundle, of integral one per fiber, then integrates over each disk.

**Problem.** The Hilsum–Skandalis pullback gives a bounded operator on square-integrable forms and commutes with the exterior derivative on smooth forms.

**How the definition helps.** Averaging over disks avoids evaluating a square-integrable form just on the image of f, which may have measure zero. Our own explanation uses the surjective derivative of the disk evaluation map and compact support to bound the integral. Closedness of the averaging form and Stokes’ theorem give commutation with d.

**Paper or page:** [Stability of L²-invariants on stratified spaces](https://arxiv.org/abs/2310.05721v3). It says: “are well-defined and extend to bounded maps on the corresponding L² completions”

**Sources:** none listed. No primary source with a working link was found.

### Symbol exactness makes de Rham elliptic

**Remember:** At every nonzero covector, each symbol kernel equals the preceding image.

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.DG, math.AP. Level 4: research.

**Definition.** In a differential complex, each operator kills the image of the preceding operator. Its leading symbol at a covector keeps the highest-order derivatives and replaces differentiation in each coordinate by the corresponding covector component. The complex is elliptic if, at every nonzero covector, each symbol image equals the next symbol kernel, including the zero spaces at the ends.

**Problem.** The de Rham complex, the sequence of exterior derivatives, is elliptic on any smooth manifold without boundary.

**How the definition helps.** The symbol definition reduces ellipticity to exactness of multiplication by a covector ξ using the exterior product (our own). Choose a vector v with ξ(v) = 1, and write ι for insertion of v into a form (our own). The identity ι(ξ ∧ ω) + ξ ∧ ιω = ω exhibits every kernel element as an image (our own). For a single operator, the same symbol test requires an invertible symbol (our own).

**nLab:** [elliptic chain complex](https://ncatlab.org/nlab/show/elliptic+chain+complex). It says: “Let X be a compact smooth manifold. Then the de Rham complex is an elliptic complex.”

**Sources:** none listed. No primary source with a working link was found.

### Witt links remove boundary modes

**Remember:** No middle link classes means no ambiguous boundary modes.

*Rules out counterexamples. Confidence: medium.* MSC 58J10 (Differential complexes). arXiv math.AP, math.DG. Level 4: research.

**Definition.** A link is the closed manifold forming a cross-section of a cone. The Witt condition requires every even-dimensional link to have zero real cohomology in its middle degree.

**Problem.** Consider a compact space with isolated exact cone tips and Witt links, with no other boundary. After sufficiently shrinking the link metrics, d + d⁎ on smooth forms supported away from the tips has a unique self-adjoint extension.

**How the definition helps.** The Witt condition removes the middle-degree harmonic forms that would require boundary data at a cone tip. Our own explanation uses separation of variables on the cone. Shrinking the links moves the remaining nonzero link eigenvalues beyond the range requiring boundary data. A torus link retains harmonic one-forms under every rescaling.

**Paper or page:** [Smooth atlas stratified spaces, K-Homology Orientations, and Gysin maps](https://arxiv.org/abs/2505.14952v1). It says: “satisfies the analytic Witt condition and therefore admits a closed self-adjoint extension”

**Sources:**

- [P. Albin, É. Leichtnam, R. Mazzeo, and P. Piazza, Hodge theory on Cheeger spaces (2018)](https://doi.org/10.1515/crelle-2015-0095)

### Witten deformation preserves de Rham cohomology

**Remember:** Undo the exponential weight to recover the original complex.

*True by definition.* MSC 58J10 (Differential complexes). arXiv math.DG, math.SP. Level 4: research.

**Definition.** For a smooth real function f and a real parameter t, the Witten differential acts on smooth forms by dₜω = exp(−tf)d(exp(tf)ω). Here d denotes the exterior derivative.

**Problem.** The Witten differential dₜ squares to zero. Its cohomology, the kernel modulo the preceding image, is isomorphic to de Rham cohomology.

**How the definition helps.** Writing dₜ as a conjugate of d shows at once that its square vanishes (our own). Multiplication by exp(−tf) carries kernels and images of d to those of dₜ (our own). The hard work in Witten’s method is estimating the spectrum of the Laplacian built from dₜ (our own).

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “is a vector space isomorphism for all j = 0, ⋯, n.”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982)](https://doi.org/10.4310/jdg/1214437492)

### Boundary indices add by spectral flow

**Remember:** Counting crossings turns a cut in time into a sum.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J30, 58J32. arXiv math.SP. Level 4: research.

**Definition.** Spectral flow for a continuous self-adjoint Fredholm path uses a subdivision with a positive cutoff on each piece. The cutoff avoids the spectrum throughout its piece, and the spectral space for \[0,cutoff\] has finite rank there. Sum the final rank minus the initial rank of the spectral space for \[0,cutoff) over all pieces.

**Problem.** Let A(t) be a continuously differentiable self-adjoint family with compact resolvent and common domain, and set D = d/dt − iA(t). Impose negative initial and nonnegative final spectral boundary conditions on each subinterval and assume each resulting operator is Fredholm. The index on \[r,t\] equals the sum of the indices on \[r,s\] and \[s,t\] for r ≤ s ≤ t.

**How the definition helps.** Our own argument adds the crossing counts on adjacent time intervals. Ronge proves that each index equals its crossing count under the stated hypothesis. This avoids trying to glue bases for the kernels and cokernels at the cut.

**Paper or page:** [Index Theory for Globally Hyperbolic Spacetimes](https://arxiv.org/abs/1910.10452v1). It says: “ind((D\|\[r,t\])ₐₚₛ) = ind((D\|\[r,s\])ₐₚₛ) + ind((D\|\[s,t\])ₐₚₛ)”

**Sources:**

- [Lennart Ronge, Index Theory for Globally Hyperbolic Spacetimes (2019)](https://arxiv.org/abs/1910.10452v1)
- [Koen van den Dungen and Lennart Ronge, The APS-index and the spectral flow (2021)](https://files.ele-math.com/articles/oam-15-87.pdf)

### Callias potentials restore Fredholmness

**Remember:** A potential that dominates at infinity keeps zero out of the essential spectrum.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J05. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Let D be a Dirac operator on a Hermitian bundle over a complete Riemannian manifold, and Φ a self-adjoint potential whose commutator \[D, Φ\] is a bundle map. Φ dominates at infinity if Φ² ≥ (‖\[D, Φ\]‖ + c)I outside a compact set, for some c &gt; 0. The Callias operator is the self-adjoint doubled operator with off-diagonal entries D + iΦ and D − iΦ.

**Problem.** If Φ dominates at infinity, the Callias operator is Fredholm. Domination everywhere makes it invertible, so in the odd symmetric case the parity index of its off-diagonal operator vanishes.

**How the definition helps.** Our own explanation uses the domination estimate to bound the square of the doubled operator below outside a compact set. The Fredholm proof uses local compactness to handle the compact set. In our own calculation, domination everywhere gives the bound globally and rules out a kernel for the operator and its adjoint. Our own counterexample is −i d/dx on ℝ, which is elliptic but has zero in its essential spectrum.

**Paper or page:** [On the Z<sub>2</sub>-valued index of elliptic odd symmetric operators on non-compact manifolds](https://arxiv.org/abs/2403.13999v3). It says: “If the essential support of F is empty, then indτ ℬ = 0.”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, On the ℤ₂-valued index of elliptic odd symmetric operators on non-compact manifolds (2024)](https://doi.org/10.1007/s40316-024-00228-5)

### Compact resolvent alone does not suffice

**Remember:** A lower bound makes the two negative spectral spaces finite.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J32. arXiv math.SP. Level 4: research.

**Definition.** Take a continuously differentiable family A(t) of self-adjoint operators with compact resolvent and a common domain, on a compact interval. The family is uniformly bounded below if A(t) ≥ cI for one real c and all t. The boundary operator D = d/dt − iA(t) takes initial values in the negative spectral space and final values in the nonnegative spectral space.

**Problem.** If A is uniformly bounded below, the boundary operator D is Fredholm. Its index equals the spectral flow of A, the net number of eigenvalues crossing zero toward positive values.

**How the definition helps.** Our own explanation uses the common lower bound to make each negative spectral space finite-dimensional. Ronge identifies the boundary index with the index of a map between the negative endpoint spaces. He proves equality with spectral flow and gives a compact-resolvent family whose boundary operator fails to be Fredholm without the lower bound.

**Paper or page:** [Index Theory for Globally Hyperbolic Spacetimes](https://arxiv.org/abs/1910.10452v1). It says: “If A is uniformly bounded from below and sp(A) is discrete with only finite multiplicities, Dₐₚₛ is Fredholm”

**Sources:**

- [Lennart Ronge, Index Theory for Globally Hyperbolic Spacetimes (2019)](https://arxiv.org/abs/1910.10452v1)
- [Koen van den Dungen and Lennart Ronge, The APS-index and the spectral flow (2021)](https://files.ele-math.com/articles/oam-15-87.pdf)

### Equivariant index forms pull back

**Remember:** One equivariant form gives the index form for every associated family.

*Makes the theorem clean to state or prove.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 19L10. arXiv math.DG, math-ph. Level 4: research.

**Definition.** For an even graded geometric Dirac family with a compact Lie group action preserving its data, write Bₜ for its equivariant Bismut superconnection. Its equivariant Chern character at scale t &gt; 0 is the even trace minus the odd trace of exp(−Bₜ²).

**Problem.** Every principal G-bundle with connection produces an associated family by twisting the original family by that bundle. The Chern–Weil map sends the equivariant Chern character at scale t to the associated family’s Bismut Chern character at the same scale.

**How the definition helps.** One equivariant form specifies the index forms for all associated families through the Chern–Weil map, which substitutes the chosen connection and its curvature. Wedeen proves that this substitution gives the geometric superconnection of the associated family. Our own comparison uses that the construction respects the heat operator and graded trace.

**Paper or page:** [Equivariant Chern Weil Forms and The Families Index Theorem](https://arxiv.org/abs/2208.05521v1). It says: “f<sub>S</sub><sup>\\ast</sup> \\operatorname{ch}(\\mathbb B<sup>t<sub>G</sub></sup>) = \\operatorname{ch}(\\mathbb B<sup>t<sub>Q</sub></sup>)”

**Sources:**

- [Richard Wedeen, Equivariant Chern Weil Forms and The Families Index Theorem (2022)](https://arxiv.org/abs/2208.05521v1)

### Flat twists give bordism characters

**Remember:** Subtract equal ranks and the local index term disappears.

*True by definition.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J28. arXiv math.DG, math-ph. Level 4: research.

**Definition.** For two equal-rank flat Hermitian bundles on a closed odd-dimensional Riemannian spin manifold, let D₁ and D₂ be their twisted spin Dirac operators. Their reduced eta difference is ξ(D₁) − ξ(D₂) in ℝ/ℤ, where ξ(D) = (η(D) + dim ker D)/2.

**Problem.** This difference defines a homomorphism from spin bordism with the two specified flat bundles to ℝ/ℤ. Here a bordism must extend the spin structure and both flat connections, and addition means disjoint union.

**How the definition helps.** Equal ranks and flatness cancel the two local index integrals on a spin bordism (our own argument). The Atiyah–Patodi–Singer theorem therefore makes the total reduced eta difference on its oriented boundary an integer. Disjoint union adds spectra and hence adds the differences.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “as the boundary correction term for the index formula on a manifold with boundary”

**Sources:**

- [Michael F. Atiyah, Vijay K. Patodi and Isadore M. Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Heat supertraces give Lefschetz numbers

**Remember:** The nonzero modes come from exact complexes.

*True by definition. Confidence: medium.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J10. arXiv math.AP, math.DG. Level 4: research.

**Definition.** The Lefschetz number of a map commuting with a differential is its alternating trace on cohomology. Its heat supertrace takes the alternating trace on forms after heat evolution followed by the map.

**Problem.** For a geometric lift commuting with a first-order elliptic complex on a closed manifold, the heat supertrace equals the Lefschetz number at every positive time.

**How the definition helps.** Alternating traces cancel on each positive eigenspace, leaving the trace on harmonic representatives of cohomology. Our own proof projects the lift back onto each Laplacian eigenspace after applying it. For eigenvalue λ &gt; 0, the identity dd⁎ + d⁎d = λ makes that complex exact, so its alternating trace vanishes. Elliptic heat theory justifies summing these traces.

**Wikipedia:** [Atiyah–Bott fixed-point theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Bott_fixed-point_theorem). It says: “the alternating sum of its traces on each graded part of the homology of the elliptic complex.”

**Sources:**

- [M. F. Atiyah and R. Bott, A Lefschetz Fixed Point Formula for Elliptic Complexes: I (1967)](https://doi.org/10.2307/1970694)

### Nondegenerate points give finite weights

**Remember:** Require invertibility before dividing by the fixed-point determinant.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J10. arXiv math.AP, math.DG. Level 4: research.

**Definition.** A fixed point x of a smooth map f is nondegenerate when I − Df is invertible on the tangent space at x. A geometric lift pulls sections back along f and applies a bundle map in each degree.

**Problem.** A geometric lift commuting with an elliptic complex on a closed manifold has a fixed-point formula when all fixed points are nondegenerate. Its alternating cohomology trace equals the sum of alternating fiber traces divided by \|det(I − Df)\| at those points.

**How the definition helps.** Nondegeneracy makes each denominator nonzero and each fixed point isolated, so compactness makes the sum finite. Our own counterexample is the identity map on a circle, where every denominator vanishes. The Atiyah–Bott theorem identifies the local sum with the trace on cohomology.

**Wikipedia:** [Atiyah–Bott fixed-point theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Bott_fixed-point_theorem). It says: “the non-vanishing of this is a consequence of transversality”

**Sources:**

- [M. F. Atiyah and R. Bott, A Lefschetz Fixed Point Formula for Elliptic Complexes: I (1967)](https://doi.org/10.2307/1970694)

### Spectral cutoffs handle jumping kernels

**Remember:** A cutoff need only avoid its own level, not every crossing at zero.

*Rules out counterexamples.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J35. arXiv math-ph, math.AT. Level 4: research.

**Definition.** Consider a degree-zero 1\|1-dimensional Euclidean field theory with smooth index bundles in the sense of Berwick-Evans. For λ &gt; 0, its cutoff bundle uses the eigenspaces of the squared generator below λ wherever λ avoids the spectrum. The cutoff partition form is the partition form of the theory restricted to this bundle.

**Problem.** On this open set, Z minus the cutoff partition form equals the exterior derivative of a differential form. The two closed forms therefore represent the same de Rham cohomology class.

**How the definition helps.** The cutoff retains a bundle of constant rank locally, even when eigenvalues cross zero. Our own example uses a two-state odd supercharge with off-diagonal entries t, whose kernel jumps at t = 0. The cutoff theorem gives the discarded contribution as the exterior derivative of an eta form.

**Paper or page:** [The families analytic index for 1∣1-dimensional Euclidean field theories](https://arxiv.org/abs/2303.09207v1). It says: “The partition function of E and the partition function of the λ-cutoff theory are related by”

**Sources:**

- [Daniel Berwick-Evans, The families analytic index for 1∣1-dimensional Euclidean field theories (2023)](https://arxiv.org/abs/2303.09207v1)

### Spectral sections require zero index

**Remember:** Allow changes near zero, but keep the signs far from zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J20 (Index theory and related fixed-point theorems on manifolds), 58J30. arXiv math.DG. Level 4: research.

**Definition.** A spectral section is a smooth family of orthogonal projections. Above a common spectral cutoff it keeps every eigenvector, and below the negative cutoff it discards every eigenvector. Between the cutoffs the projection can vary.

**Problem.** Over a compact base, a smooth Dirac family on closed odd-dimensional spin fibers admits a spectral section exactly when its odd family index vanishes.

**How the definition helps.** A spectral section expresses a single global choice of positive spectral spaces with freedom near zero (our own explanation). The Melrose–Piazza spectral section theorem identifies the odd family index as the exact obstruction to that choice.

**nLab:** [spectral flow](https://ncatlab.org/nlab/show/spectral+flow). It says: “the change of spectrum of an operator as that operator continuously varies with a parameter.”

**Sources:**

- [Melrose and Piazza, Families of Dirac operators, boundaries and the b-calculus (1997)](https://math.mit.edu/~rbm/papers/fdobbc.abstract/fdobbc.abstract.html)

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

### Roe's partitioned index turns coarse index theory into curvature obstructions

**Remember:** Index the whole manifold once, then read off the hypersurface's index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J22 (Exotic index theories on manifolds), 19K56, 53C21. arXiv math.DG, math.KT. Level 4: research.

**Definition.** For a complete odd-dimensional Dirac manifold split by a compact separating hypersurface, take the coarse index of its Dirac operator. Its partitioned index is the image under the coarse Mayer–Vietoris boundary map, identified with an integer using compactness of the hypersurface.

**Problem.** With the induced Dirac operator and boundary orientation on N, its index equals the partitioned index of D. If N is closed, even-dimensional and spin, a complete uniformly positive scalar curvature metric on N × ℝ forces its spin Dirac index to vanish.

**How the definition helps.** The coarse index lives on all of M, so the partition only has to extract a number, and the hard analysis is done once. Uniformly positive scalar curvature makes D invertible, so its coarse index and hence the partitioned index vanish (our own). Applying this to N × ℝ, cut along N, gives the stated obstruction (our own).

**Paper or page:** [A partitioned manifold index theorem for noncompact hypersurfaces](https://arxiv.org/abs/2507.16591v2), [A partitioned manifold index theorem for noncompact hypersurfaces](https://arxiv.org/abs/2507.16591v2). It says: “Then Ind(D<sub>N</sub>) = Ind(D;N) after identifying both K-theory groups with ℤ.”

**Sources:**

- [J. Roe, Partitioning non-compact manifolds and the dual Toeplitz problem, in Operator Algebras and Applications, Cambridge University Press (1989)](https://doi.org/10.1017/cbo9780511662270.012)
- [P. Hochs and T. de Kok, A partitioned manifold index theorem for noncompact hypersurfaces, arXiv:2507.16591](https://arxiv.org/abs/2507.16591v2)

### Von Neumann dimension gives a finite index on infinite coverings

**Remember:** Measure kernels per fundamental domain, and the covering's index equals the base's.

*Makes the theorem clean to state or prove.* MSC 58J22 (Exotic index theories on manifolds), 58J20. arXiv math.DG, math.OA. Level 4: research.

**Definition.** For a Galois cover with deck group Γ, the Γ-dimension of a closed Γ-invariant L² subspace is the Γ-trace of its orthogonal projection. For a smoothing projection this trace integrates the diagonal fiber trace over a fundamental domain.

**Problem.** Let D be an elliptic operator on a closed manifold M, and D̃ its lift to a Galois covering M̃ with group Γ. Then the Γ-dimension of the kernel of D̃ minus that of its adjoint equals the ordinary index of D (Atiyah's L²-index theorem).

**How the definition helps.** The Γ-dimensions of the lifted elliptic kernels are finite, so their difference defines the covering index (our own explanation). Atiyah’s L²-index theorem identifies this difference with the index downstairs.

**Wikipedia:** [Atiyah–Singer index theorem](https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem). It says: “it is possible to get a finite index using the dimension of a module over a von Neumann algebra; this index is in general real rather than integer valued.”

**Sources:**

- [M. F. Atiyah, Elliptic operators, discrete groups and von Neumann algebras, Astérisque 32–33 (1976) 43–72](https://mathscinet.ams.org/mathscinet-getitem?mr=0420729)

### Boundary eta varies covariantly

**Remember:** Differentiate the eta section with the connection on its boundary line.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math-ph. Level 4: research.

**Definition.** For a compact odd-dimensional spin manifold with product metric near its boundary, write ξ for half the sum of eta and the kernel dimension. A spectral boundary condition gives a scalar exp(2πiξ). Changing that condition changes the frame, so the intrinsic phase τ belongs to the inverse boundary determinant line.

**Problem.** In a smooth geometric family, the covariant derivative of τ equals 2πiωτ. The one-form ω is the degree-one part of the fiber integral of Â, the curvature polynomial of the vertical tangent bundle.

**How the definition helps.** The connection differentiates the phase while accounting for changes of frame (our own explanation). The Dai–Freed variation theorem computes that derivative for the natural Bismut–Freed connection.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “In fact, this is a smooth section of the determinant line bundle as X varies.”

**Sources:**

- [Dai and Freed, η-invariants and determinant lines (1994)](https://web.math.ucsb.edu/~dai/paper/dfJMP.pdf)

### Boundary zero modes affect the index

**Remember:** The boundary projection excludes zero modes, so the correction counts them.

*Rules out counterexamples. Confidence: medium.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** For the self-adjoint boundary Dirac operator D, sum sign(λ)\|λ\|⁻ˢ over nonzero eigenvalues with multiplicities for large real s. Let η be its analytically continued value at zero. The reduced eta invariant is ξ = (η + dim ker D)/2.

**Problem.** On a compact even-dimensional spin manifold with product metric near the boundary, impose the boundary condition that excludes all nonnegative modes. The chiral Dirac index equals the integral of the Â curvature form minus ξ.

**How the definition helps.** The kernel term counts the zero modes excluded by the boundary condition (our own explanation). On a product cylinder the two signed eta contributions cancel, but together the kernel terms subtract one full cross-sectional kernel dimension. The Atiyah–Patodi–Singer index theorem proves the formula.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “regularized number of positive minus negative eigenvalues of D.”

**Sources:**

- [Atiyah, Patodi and Singer, Spectral asymmetry and Riemannian Geometry. I (1975)](https://doi.org/10.1017/S0305004100049410)

### Corrected eta forms compose

**Remember:** Correct the connection, then integrate the inner eta form.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** For an odd-dimensional spin family, identify eta forms whose difference represents the Chern character of a K⁰ class, allowing exact differences. For a composite family, first subtract the integral of the transgression form comparing its vertical connection with the split connection. This form measures the change in the Â curvature polynomial.

**Problem.** For closed odd inner and even outer spin fibers, assume the inner Dirac operators are invertible and the composite kernels form a bundle. The corrected untwisted composite eta class equals the outer fiber integral of the inner eta form times the outer Â form.

**How the definition helps.** Subtraction absorbs the connection change, and the quotient absorbs the index class (our own explanation). Liu’s composition theorem supplies both terms before these operations. Inner invertibility removes the kernel contribution.

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “such that modulo exact forms on B”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Determinants isolate secondary eta invariants

**Remember:** After rank correction, subtract the spectral contribution of the determinant line.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 57R20. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a flat unitary bundle, twist the spin Dirac operator by that bundle. Its reduced eta invariant is half the regularized imbalance of positive and negative eigenvalues plus half the kernel dimension. The rank correction subtracts the bundle rank times the untwisted reduced eta invariant.

**Problem.** Let the base be a closed oriented spin three-manifold with the rational homology of a sphere. Modulo integers, the second secondary Chern number equals the bundle’s rank-corrected invariant minus that of its determinant line.

**How the definition helps.** The rank corrections cancel trivial summands, and subtracting the determinant cancels the first Chern class. Our own explanation applies the index comparison for this formal difference of bundles. The cited theorem identifies the remaining spectral difference with the second secondary Chern number in its sign convention.

**Paper or page:** [Classification of indecomposable reflexive modules on quotient singularities through Atiyah--Patodi--Singer theory](https://arxiv.org/abs/2504.21204). It says: “ĉᵨ,₂(\[L\]) = ξ̃ᵨ(D) − ξ̃det(ρ)(D).”

**Sources:**

- [José Antonio Arciniega Nevárez, José Luis Cisneros-Molina and Agustín Romano Velázquez, Classification of indecomposable reflexive modules on quotient singularities through Atiyah–Patodi–Singer theory (2025)](https://arxiv.org/abs/2504.21204)

### Eta measures the signature defect

**Remember:** Signed spectral asymmetry supplies the missing boundary term.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** For the odd signature operator on even-degree boundary forms, sum sign(λ)/\|λ\|ˢ over its nonzero eigenvalues, counting multiplicities. Its eta invariant η is the value at zero after analytic continuation.

**Problem.** For a compact oriented Riemannian 4k-manifold with product metric near its boundary, the signature of its intersection form equals ∫ L − η. Here L is the Hirzebruch form computed from curvature.

**How the definition helps.** Eta packages the imbalance between positive and negative boundary eigenvalues into one number (our own explanation). The Atiyah–Patodi–Singer theorem identifies that number with the difference between the curvature integral and the signature.

**Wikipedia:** [Eta invariant](https://en.wikipedia.org/wiki/Eta_invariant). It says: “who used it to extend the Hirzebruch signature theorem to manifolds with boundary.”

**Sources:**

- [Atiyah, Patodi and Singer, Spectral asymmetry and Riemannian Geometry. I (1975), Theorem 4.14](https://doi.org/10.1017/S0305004100049410)

### Eta phases sew along determinant lines

**Remember:** On a manifold with boundary, the phase lives in a line.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J52. arXiv math.DG, math-ph. Level 4: research.

**Definition.** On a compact odd-dimensional spin manifold with product collar, the Dai–Freed phase belongs to the dual determinant line of the boundary chiral Dirac operator. In the frame specified by an admissible unitary spectral boundary choice T, its coordinate is exp(πi(η(Dₜ) + dim ker Dₜ)). Here Dₜ denotes the self-adjoint realization for T and η denotes its eta invariant.

**Problem.** Cut a closed Riemannian spin manifold of odd dimension along a separating hypersurface with a product metric near the cut. Pair the two boundary line elements using opposite orientations. The result equals the original phase.

**How the definition helps.** The determinant line pairs the two boundary values without a choice of basis. Our own comparison is that two scalar eta computations would require compatible boundary choices. Dai and Freed prove that the line element is independent of those choices and that the contraction gives the uncut phase.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “These sections, given by the exponentiated eta invariant, satisfy the sewing law.”

**Sources:**

- [Xianzhe Dai and Daniel S. Freed, η-invariants and determinant lines (1994)](https://doi.org/10.1063/1.530747)

### Eta winding counts spectral flow

**Remember:** The phase hides each jump, but its winding remembers their sum.

*True by definition. Confidence: medium.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** The eta phase of a self-adjoint Dirac operator is exp(2πiξ), where ξ is half the regularized signed eigenvalue count plus half the kernel dimension. This gives a circle-valued invariant even when ξ jumps.

**Problem.** For a smooth loop of such operators on a closed odd-dimensional manifold with only simple transverse crossings, the phase winding equals minus the spectral flow. Spectral flow counts upward zero crossings positively and downward crossings negatively.

**How the definition helps.** Passing to the circle turns integer jumps into a winding count (our own explanation). Each upward crossing raises ξ by one, so a continuous real lift subtracts one there. The endpoint spectra agree, leaving minus the total signed crossing count as the change in the lift.

**nLab:** [spectral flow](https://ncatlab.org/nlab/show/spectral+flow). It says: “the change of spectrum of an operator as that operator continuously varies with a parameter.”

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “is the spectral flow between D₀ and D₁.”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Free symmetries simplify eta variation

**Remember:** No fixed points and no crossings mean no change in eta.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** For an isometry h of a closed odd-dimensional Riemannian spin manifold, choose a spin lift commuting with the spin Dirac operator. Sum sign(λ)\|λ\|⁻ˢ tr(h\|Eλ) over distinct nonzero eigenvalues λ with eigenspaces Eλ, initially for large real s. The equivariant eta invariant at h is its analytic continuation evaluated at zero.

**Problem.** Suppose a finite group acts freely with a chosen spin lift. For every nonidentity element h, its equivariant eta invariant stays constant along every smooth path of invariant metrics with positive scalar curvature.

**How the definition helps.** Inserting h restricts the local variation formula to points fixed by h, and the free action leaves that set empty. Our own argument uses the spinor square formula to exclude zero eigenvalues throughout the path. The analytic work lies in the equivariant variation formula.

**Paper or page:** [Equivariant Spectral Flow for Families of Dirac-type Operators](https://arxiv.org/abs/2403.00575v3). It says: “assume moreover that G acts freely on M and h ≠ e. Then, we have ηₕ(D₀) = ηₕ(D₁).”

**Sources:**

- [Peter Hochs and Aquerman Yanes, Equivariant spectral flow for families of Dirac-type operators (2025)](https://doi.org/10.2140/akt.2025.10.189)

### Grading makes eta forms subtract

**Remember:** Reversing the grading reverses the supertrace.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** A graded twisting bundle has positive and negative parts, and its connection preserves both. The eta form measures spectral asymmetry using a signed trace, the positive trace minus the negative trace. In the family twisted by the negative part, one reverses the grading.

**Problem.** For closed even-dimensional Spinᶜ fibers with compatible metrics and connections, the graded eta form equals η(E⁺) − η(E⁻), modulo exact forms. The finite bundles representing the two indices combine with the second grading reversed.

**How the definition helps.** Using the signed trace instead of the ordinary trace makes reversal change the sign (our own). Ho constructs compatible finite-dimensional representatives so the two terms split before integration.

**Paper or page:** [An extended variational formula for the Bismut-Cheeger eta form and its applications](https://arxiv.org/abs/2209.00502). It says: “denotes the ℤ₂-graded complex vector bundle with the opposite grading of”

**Sources:**

- [Man-Ho Ho, An extended variational formula for the Bismut-Cheeger eta form and its applications, Theorem 1.2](https://arxiv.org/abs/2209.00502)

### Odd indices over points record eta

**Remember:** Add the zero modes to eta, halve, and keep the fractional part.

*Makes the theorem clean to state or prove.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** For a self-adjoint Spinᶜ Dirac operator D on a closed odd-dimensional manifold, let η(D) denote its eta invariant. Its reduced eta class is (η(D) + dim ker D)/2 modulo integers.

**Problem.** For a closed odd-dimensional Riemannian Spinᶜ manifold, the index of a Hermitian bundle with unitary connection equals the reduced eta invariant modulo integers. The Dirac operator uses the chosen Spinᶜ connection, and the input has zero auxiliary form.

**How the definition helps.** The differential index has a target that retains the fractional part of the spectral invariant (our own). Freed and Lott identify it by computing parallel transport around the extra circle and taking a limit that stretches the base metric.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Wikipedia:** [Eta invariant](https://en.wikipedia.org/wiki/Eta_invariant). It says: “the eta invariant of a self-adjoint elliptic differential operator on a compact manifold is formally the number of positive eigenvalues minus the number of negative eigenvalues.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Corollary 9.39](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Quotients remove eta perturbation dependence

**Remember:** The quotient absorbs the Chern character of higher spectral flow.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** An invertible smoothing perturbation adds an operator with smooth kernel to remove zero eigenvalues from a Dirac family. Identify two resulting eta forms if their difference is closed and represents the Chern character of a K¹ class. This character assigns an odd cohomology class to a family of unitary matrices.

**Problem.** For a closed even-dimensional geometric Dirac family with fixed geometry and zero family index, every admissible invertible perturbation gives the same quotient class.

**How the definition helps.** The quotient kills the ambiguity that remains for ordinary eta forms (our own explanation). Liu’s variation formula identifies the difference modulo exact forms with the Chern character of higher spectral flow, the K¹ class comparing the perturbations.

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “For any g ∈ G, modulo exact forms on B, we have”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Reduced eta stays smooth

**Remember:** The kernel term makes a zero mode agree with either sign in the phase.

*Rules out counterexamples.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Let D be the spin Dirac operator on a closed odd-dimensional Riemannian spin manifold. Its eta invariant η counts positive minus negative eigenvalues by analytic continuation. Define ξ = (η + dim ker D)/2 in ℝ/ℤ.

**Problem.** For a smooth family of such Dirac operators, exp(2πiξ) is smooth even where the kernel changes dimension.

**How the definition helps.** Each small eigenmode contributes −1 to the phase whether its eigenvalue is negative, zero, or positive (our own calculation). Omitting the kernel term changes this factor at a zero crossing, as for the twisted circle operators −i d/dx + a. A local spectral cutoff separates these finitely many modes, and the cutoff eta smoothness theorem handles the rest.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “In fact, this is a smooth section of the determinant line bundle as X varies.”

**Sources:**

- [Xianzhe Dai and Daniel S. Freed, η-invariants and determinant lines (1994)](https://doi.org/10.1063/1.530747)

### Reducing eta removes spectral flow

**Remember:** Reducing modulo integers erases the count of eigenvalues crossing zero.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants). arXiv math.DG. Level 4: research.

**Definition.** For a self-adjoint Dirac operator D, let η be its regularized count of positive eigenvalues minus negative ones. Its reduced eta invariant is ξ = (η + dim ker D)/2. Take its value modulo integers.

**Problem.** Along a smooth path of metrics and unitary connections on a closed odd-dimensional spin manifold, the change in ξ equals the cylinder integral modulo integers. The integrand is the product of the Â and Chern character forms computed from curvature, using product data near both ends.

**How the definition helps.** Reduction modulo integers discards spectral flow, the signed count of eigenvalues crossing zero (our own explanation). The Atiyah–Patodi–Singer variation formula identifies the remaining term with the curvature integral.

**Paper or page:** [Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2). It says: “The difference of two reduced eta invariants”

**Sources:**

- [Bo Liu, Bismut-Cheeger eta form and higher spectral flow](https://arxiv.org/abs/2105.01926v2)

### Tamed families represent eta form classes

**Remember:** Pair the families only when their eta form accounts for the change.

*True by definition.* MSC 58J28 (Eta-invariants, Chern-Simons invariants), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** A geometric cycle consists of a family of Dirac operators and a differential form modulo exact forms. A taming adds smoothing operators to make the family invertible, and its eta form measures the resulting spectral asymmetry. Two cycles pair when a taming of their difference has eta form equal to the difference of their forms.

**Problem.** A tamed family with zero auxiliary form equals the empty family with auxiliary form −η in differential K-theory. Here η denotes the chosen taming’s eta form.

**How the definition helps.** Pairing by the eta form lets the empty family represent the original family with a single form correction (our own). The required difference of forms is exactly the eta form of the given taming. The work lies in proving that the relation generated by pairing models differential K-theory.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “a differential-geometric cocycle model of differential K-theory where cocycles are given by smooth families of Dirac operators.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Definitions 2.7 and 2.10 and equation (6)](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Half spectral flow retains parity

**Remember:** Counting only half the loop preserves crossing parity.

*Makes the theorem clean to state or prove.* MSC 58J30 (Spectral flows), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Take a smooth 2π-periodic self-adjoint compact-resolvent family A(t) with common graph-norm domain and invertible endpoints A(0), A(π). Suppose a domain-preserving antiunitary τ satisfies τ² = −I and τA(t)τ⁻¹ = A(−t), with smoothness measured from the domain to the Hilbert space. Its half spectral flow is the signed spectral flow on \[0,π\] reduced modulo two.

**Problem.** The complex dimension of the kernel of d/dt + A(t) on periodic sections equals the half spectral flow modulo two.

**How the definition helps.** In our own explanation, each upward crossing on one half has a downward partner on the other half. The full signed count vanishes, but counting only the first half retains parity. The index theorem identifies this parity with that of the periodic kernel.

**Paper or page:** [The Z<sub>2</sub>-valued spectral flow of a symmetric family of Toeplitz operators](https://arxiv.org/abs/2409.15534v3). It says: “is equal to the half-spectral flow”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, The ℤ₂-valued spectral flow of a symmetric family of Toeplitz operators (2026)](https://doi.org/10.4171/jst/605)

### Higher spectral flow telescopes

**Remember:** The common reference makes the middle endpoint cancel.

*True by definition.* MSC 58J30 (Spectral flows), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Along a path of self-adjoint elliptic families, choose a continuous spectral section P and endpoint spectral sections Q₀,Q₁. Such projections keep every eigenvector above a common cutoff R &gt; 0 and kill every eigenvector below −R. Higher spectral flow is \[Q₁ − P₁\] − \[Q₀ − P₀\], using the relative projection classes over the compact base.

**Problem.** Suppose two paths share their middle endpoint section and a reference section along their concatenation. Then the higher spectral flow of the concatenation is the sum of their higher spectral flows.

**How the definition helps.** Our own calculation cancels the two middle difference classes because both use the same endpoint and reference projections. Each bracket compares finite-dimensional parts of two projections after removing their common high-energy part. This replaces following individual eigenvalues across the parameter space. The work lies in constructing spectral sections when possible and proving independence of the reference.

**Paper or page:** [Equivariant Toeplitz index theory on odd-dimensional manifolds with boundary](https://arxiv.org/abs/2101.00193v3). It says: “The H-equivariant higher spectral flow of the pairs (D₀,Q₀) and (D₁,Q₁) can also be computed via an equivariant generalised total spectral section”

**Sources:**

- [Johnny Lim and Hang Wang, Equivariant Toeplitz index theory on odd-dimensional manifolds with boundary (2022)](https://doi.org/10.1007/s00209-022-03091-8)

### Nonzero spectral flow prevents taming

**Remember:** An invertible loop has no eigenvalues crossing zero.

*Rules out counterexamples.* MSC 58J30 (Spectral flows), 19L50. arXiv math.DG, math.KT. Level 4: research.

**Definition.** A taming of a smooth self-adjoint Dirac family A is a smooth self-adjoint smoothing family Q such that every operator Aₓ + Qₓ is invertible.

**Problem.** A smooth loop of Dirac operators on closed odd-dimensional fibers with nonzero spectral flow admits no taming.

**How the definition helps.** A tamed loop has no zero crossings, and adding the perturbations continuously preserves spectral flow (our own). For example, take the circle Dirac operators with eigenvalues n + t for integers n. Increasing t by one identifies the endpoints by shifting the eigenvectors and gives spectral flow one.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “a differential-geometric cocycle model of differential K-theory where cocycles are given by smooth families of Dirac operators.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Section 2.2.2](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Spectral flow adds across joins

**Remember:** Add the local rank changes to count the net crossings.

*True by definition.* MSC 58J30 (Spectral flows). arXiv math.SP, math.FA. Level 4: research.

**Definition.** For a norm-continuous bounded self-adjoint Fredholm path, choose a subdivision and a cutoff a &gt; 0 on each piece. Throughout that piece, ±a avoid the spectrum and the spectral projection onto \[−a,a\] has finite rank. Spectral flow sums the final rank minus the initial rank of the projection onto \[0,a) over these pieces.

**Problem.** Spectral flow along two joined paths is the sum of their spectral flows.

**How the definition helps.** The rank changes already form a sum, so adjoining paths just joins two sums (our own). Choose a subdivision containing the join (our own). This avoids choosing individual eigenvalue paths (our own). The work lies in proving the local spectral cuts exist and that the sum is independent of their choice (our own).

**nLab:** [spectral flow](https://ncatlab.org/nlab/show/spectral+flow). It says: “by spectral flow one refers to the change of spectrum of an operator as that operator continuously varies with a parameter.”

**Sources:**

- [John Phillips, Self-Adjoint Fredholm Operators and Spectral Flow (1996)](https://doi.org/10.4153/CMB-1996-054-4)

### Heat kernels descend by periodization

**Remember:** Sum over the lifts to move heat downstairs.

*True by definition.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** On a compact quotient by a lattice, a discrete group of translations, lift each function by composing it with the quotient map. Define heat flow downstairs by applying the covering heat operator to this lift. A Rockland operator is a left-invariant homogeneous differential operator acting injectively on smooth vectors in every nontrivial irreducible unitary representation.

**Problem.** On a graded nilpotent Lie group, a positive Rockland operator of positive degree has a smooth heat kernel. On a compact lattice quotient, its heat kernel sums the covering kernel over all lifts of the source point.

**How the definition helps.** Heat-kernel theory for positive Rockland operators gives a smooth, rapidly decreasing kernel at each positive time. Our own derivation splits its convolution with the lifted function into integrals over lattice translates of one fundamental domain. Rapid decay permits summation, and uniqueness identifies the resulting kernel downstairs.

**Paper or page:** [Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246). It says: “Kₜ(ẋ,ẏ) = ∑<sub>γ ∈ Γ</sub> pₜ(y⁻¹γx),”

**Sources:**

- [Veronique Fischer, Asymptotics and zeta functions on compact nilmanifolds](https://arxiv.org/abs/2112.01246)

### Stochastic completeness rules out unprescribed heat

**Remember:** No lost heat means no unprescribed heat.

*Rules out counterexamples.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.DG. Level 4: research.

**Definition.** On a Riemannian manifold, evolve heat on expanding bounded regions with boundary temperature zero. Their limiting kernel gives the minimal heat evolution. Call the manifold stochastically complete when this evolution preserves the constant function one.

**Problem.** Take a smooth, connected, noncompact Riemannian manifold without boundary whose negative Laplacian is subcritical, meaning it admits a positive Green function. Stochastic completeness holds exactly when every bounded classical heat solution with zero initial data vanishes on every finite time interval.

**How the definition helps.** Subtracting the minimal evolution of one from one measures lost heat and gives a bounded solution with zero initial data. In our own explanation, comparison on bounded regions bounds the magnitude of any such solution by its supremum times this loss. On the open half-line, the missing endpoint absorbs heat. Our own example there has loss erfc(x/(2√t)), where erfc is the complementary error function.

**Paper or page:** [Stochastic completeness and L¹-Liouville property for second-order elliptic operators](https://arxiv.org/abs/2203.06493v1). It says: “has a bounded solution in M × (0, T), then necessarily v = 0.”

**Sources:**

- [Debdip Ganguly, Yehuda Pinchover, and Prasun Roychowdhury, Stochastic completeness and L¹-Liouville property for second-order elliptic operators](https://arxiv.org/abs/2203.06493v1)

### Twisted heat decays without fixed points

**Remember:** A fixed-point-free map keeps every sampled pair off the diagonal.

*True by definition. Confidence: medium.* MSC 58J35 (Heat and other parabolic equation methods for PDEs on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** An isometry g acts on functions by composition. Its twisted heat trace takes the trace after composing heat flow with this action. Equivalently, it integrates the heat kernel Kₜ(gx,x) over x.

**Problem.** For a fixed-point-free isometry of a closed Riemannian manifold, the twisted scalar heat trace decays faster than every positive power of time near zero.

**How the definition helps.** The kernel formula samples only pairs a positive distance apart, since the manifold is compact and g has no fixed point. Our own argument uses the small-time Gaussian bound on the heat kernel there. Integrating this bound gives the stated decay.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “the kernel of an integral operator representing the heat operator”

**Sources:**

- [Harold Donnelly, Spectrum and the Fixed Point Sets of Isometries. I (1976)](https://doi.org/10.1007/BF01436198)

### Bolker injectivity blocks mirror artifacts

**Remember:** One data covector cannot link two input covectors.

*Rules out counterexamples. Confidence: medium.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 4: research.

**Definition.** A generalized Radon transform integrates over a smooth family of surfaces. Its canonical relation pairs object frequencies with the data frequencies they produce. The Bolker condition requires projection onto data frequencies to be one-to-one with injective derivative.

**Problem.** For a smoothly localized, properly supported generalized Radon transform satisfying the Bolker condition, the transform followed by its adjoint is pseudodifferential.

**How the definition helps.** Injectivity prevents two object frequencies from matching the same data frequency. In our own argument, the derivative condition allows smooth composition of the relations, leaving only identical object frequencies paired. The Fourier integral composition theorem then identifies the operator. Circles centered on a line illustrate the failure because reflected points produce identical measurements.

**Paper or page:** [Ellipsoidal and hyperbolic Radon transforms; microlocal properties and injectivity](https://arxiv.org/abs/2212.00243v1). It says: “is an FIO satisfying the Bolker condition if D is disjoint from every tangent plane to S.”

**Sources:**

- [James W. Webber, Sean Holman and Eric Todd Quinto, Ellipsoidal and hyperbolic Radon transforms; microlocal properties and injectivity (2023)](https://doi.org/10.1016/j.jfa.2023.110056)

### Eigenlines detect failed diagonalization

**Remember:** An eigenline can exist without a global eigenvector.

*Makes the theorem clean to state or prove.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP, math.DG. Level 4: research.

**Definition.** A Hermitian leading symbol is a matrix of highest-order frequency terms equal to its conjugate transpose. For an everywhere simple eigenvalue, its one-dimensional complex eigenspaces form the eigenline bundle over all nonzero covectors.

**Problem.** A smooth global unit eigenvector exists exactly when the eigenline bundle has zero first Chern class, the integer cohomology class classifying complex line bundles.

**How the definition helps.** Collecting the eigenspaces into a bundle turns the eigenvector choice into the question of whether that bundle is trivial. In our own explanation, a global unit eigenvector gives a basis in every fiber. The classification theorem for complex line bundles supplies the cohomological test.

**Paper or page:** [Topological obstructions to the diagonalisation of pseudodifferential systems](https://arxiv.org/abs/2203.16957v3). It says: “the Euler class e ∈ H²(ℂPᵐ⁻¹) of the circle bundle”

**Sources:**

- [Matteo Capoferri, Grigori Rozenblum, Nikolai Saveliev and Dmitri Vassiliev, Topological obstructions to the diagonalisation of pseudodifferential systems (2022)](https://doi.org/10.1090/bproc/147)

### Invertibility at infinity prevents escape

**Remember:** A cylinder needs an invertible model as well as an invertible symbol.

*Rules out counterexamples.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 4: research.

**Definition.** Far along a straight cylindrical end, translating an operator back toward the origin gives its limit operator. Full ellipticity requires this model to be invertible between the corresponding regularity spaces. It also requires the leading frequency symbol to be invertible in every nonzero direction.

**Problem.** Consider a classical operator invariant under translations far down each straight cylindrical end, up to a rapidly decaying smoothing remainder. With compact core and cross sections, it is Fredholm between the corresponding Sobolev spaces exactly when fully elliptic.

**How the definition helps.** The limit operator tests sequences that move down the cylinder while escaping every compact set. In our own example, slowly varying functions along an infinite cylinder defeat the Laplacian despite its invertible leading symbol. The inverse construction uses both tests to obtain closed range and finite-dimensional kernel and cokernel.

**Paper or page:** [Layer potentials and essentially translation invariant pseudodifferential operators on manifolds with cylindrical ends](https://arxiv.org/abs/2308.06308v3). It says: “is Fredholm if, and only, if”

**Sources:**

- [Mirela Kohr, Victor Nistor and Wolfgang L. Wendland, Layer potentials and essentially translation invariant pseudodifferential operators on manifolds with cylindrical ends (2023)](https://arxiv.org/abs/2308.06308v3)

### Noninteger orders avoid trace ambiguity

**Remember:** No critical degree means no logarithmic ambiguity.

*Rules out counterexamples.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP. Level 4: research.

**Definition.** To form the canonical trace density, integrate the classical scalar symbol over a frequency ball in coordinates, using the Fourier normalization. Retain the constant term as the radius grows, and multiply by the coordinate volume density.

**Problem.** For noninteger real order on a closed manifold, these local densities agree across coordinate charts. Below order minus the dimension, their integral equals the ordinary operator trace.

**How the definition helps.** Noninteger order excludes a homogeneous symbol term of degree minus the dimension, the only degree producing a logarithm. In our own explanation, such a logarithm would change the constant term under rescaling. The coordinate-change theorem handles general chart changes. At sufficiently low order the frequency integral converges.

**Paper or page:** [A groupoid approach to the Wodzicki residue and the Kontsevich-Vishik trace](https://arxiv.org/abs/2312.10415v2). It says: “the Kontsevich-Vishik density of u₁ at x ∈ M is equal to Ψᵤ(x,1).”

**Sources:**

- [Maxim Kontsevich and Simeon Vishik, Determinants of elliptic pseudo-differential operators (1994)](https://www.ihes.fr/~maxim/TEXTS/determinants_elliptic_11.pdf)

### Spectral and heat-kernel fractional Laplacians differ only through lost heat mass

**Remember:** If heat is conserved, the two definitions agree.

*True by definition. Confidence: medium.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds), 35R11, 58J35. arXiv math.AP, math.DG. Level 4: research.

**Definition.** Let pₜ(x,y) be the minimal heat kernel on a Riemannian manifold M. Stochastic completeness means ∫<sub>M</sub> pₜ(x,y) dvol(y) = 1 for every x ∈ M and t &gt; 0. The mass loss is one minus this integral.

**Problem.** On a complete Riemannian manifold, heat loss determines the difference between the spectral and heat-kernel formulas for the fractional and logarithmic Laplacians wherever both converge. On a stochastically complete manifold the formulas agree.

**How the definition helps.** At each time, subtract ∫<sub>M</sub> pₜ(x,y)(f(x) − f(y)) dvol(y) from f(x) − exp(tΔ)f(x). The difference equals f(x) times the mass loss (our own calculation). Integrating the discrepancy with the weight of the applicable formula gives zero when heat is conserved.

**Paper or page:** [Logarithmic Laplacian on General Riemannian Manifolds](https://arxiv.org/abs/2506.19311v1). It says: “We further compare spectral versus heat kernel definitions of both fractional and logarithmic Laplacians, showing that their discrepancy is governed by the mass loss function and hence by stochastic completeness.”

**Sources:**

- [Rui Chen, Logarithmic Laplacian on General Riemannian Manifolds, arXiv:2506.19311v1 (2025)](https://arxiv.org/abs/2506.19311v1)

### The residue measures failed scaling

**Remember:** Divide the scaling defect by log to read the residue.

*True by definition.* MSC 58J40 (Pseudodifferential and Fourier integral operators on manifolds). arXiv math.AP, math.DG. Level 4: research.

**Definition.** Let 𝕜 be an essentially homogeneous tangent-groupoid kernel of order −d extending a classical operator kernel on a d-dimensional manifold. For dilation factor s &gt; 0, its scaling defect is the smooth density sᵈ(αₛ)∗𝕜 − 𝕜, where (αₛ)∗ denotes pushforward by groupoid dilation.

**Problem.** At each zero tangent vector, the scaling defect divided by the logarithm of the positive dilation factor gives the Wodzicki residue density. The dilation factor must differ from one.

**How the definition helps.** Evaluating the smooth error at a fixed zero vector turns successive dilations into addition of defects. In our own explanation, continuity makes this additive law on positive scale factors a multiple of the logarithm. The identification theorem equates the coefficient with the usual frequency integral of the degree −d symbol.

**Paper or page:** [A groupoid approach to the Wodzicki residue](https://arxiv.org/abs/2303.15787v2). It says: “Resₓᵂ(P) = 1/log(s) (sᵈ αₛ\*𝕜 − 𝕜)\|(x,0,0)”

**Sources:**

- [Nathan Couchet and Robert Yuncken, A groupoid approach to the Wodzicki residue (2024)](https://doi.org/10.1016/j.jfa.2023.110268)

### Aperiodicity removes the sphere’s Weyl obstruction

**Remember:** A null set of periodic directions cannot produce sphere-sized jumps.

*Rules out counterexamples.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** A unit tangent vector is periodic if its geodesic returns to that vector after some positive time. Periodic directions are negligible if their set has Liouville measure zero in the unit tangent bundle.

**Problem.** On a closed n-dimensional Riemannian manifold M with negligible periodic directions, let N(λ) count Laplace eigenvalues at most λ with multiplicity. As λ → ∞, N(λ) = (2π)⁻ⁿ vol(M) vol(Bⁿ) λ<sup>(n/2)</sup> + o(λ<sup>((n−1)/2)</sup>), where Bⁿ is the Euclidean unit ball.

**How the definition helps.** The measure condition excludes round spheres, where every direction returns and large multiplicities force jumps of the same order as the proposed error scale. Our own comparison uses the continuity of the leading Weyl term across each jump. Dividing the error by the stated power must give a limit of zero. The sharper estimate requires the Duistermaat–Guillemin theorem relating periodic geodesics to the wave trace.

**Wikipedia:** [Weyl law](https://en.wikipedia.org/wiki/Weyl_law). It says: “when the set of periodic bicharacteristics has measure 0.”

**Sources:**

- [Johannes Duistermaat and Victor Guillemin, The Spectrum of Positive Elliptic Operators and Periodic Bicharacteristics (1975)](https://doi.org/10.1007/BF01405172)

### Energy closure preserves cone dilation

**Remember:** Dilation rescales the energy and therefore preserves its completion.

*True by definition.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** On an infinite cone, close the gradient energy form on compactly supported smooth functions away from the tip. Its form domain uses the norm √(‖u‖² + ‖∇u‖²), with both norms taken in L². The Friedrichs Laplacian is the nonnegative self-adjoint operator associated with this closed form.

**Problem.** On an exact infinite cone, every radial dilation, normalized to preserve the L² norm, preserves the Friedrichs operator domain. For dilation U that evaluates functions at radius ρr, the Laplacian satisfies ΔU = ρ²UΔ.

**How the definition helps.** Dilation rescales the energy by a constant, so it preserves the completion without requiring an expansion at the tip. Our own calculation gives the factor ρ². The theorem associating an operator to the closed energy form transfers this identity to the operator domain.

**Paper or page:** [Extensions of symmetric operators that are invariant under scaling and applications to indicial operators](https://arxiv.org/abs/2107.01239). It says: “In particular, the Friedrichs extension Aꜰ = A\*\|𝒟ꜰ : 𝒟ꜰ ⊂ H → H, 𝒟ꜰ = 𝒟ₘₐₓ ∩ ℋꜰ is invariant.”

**Sources:**

- [Thomas Krainer, Extensions of symmetric operators that are invariant under scaling and applications to indicial operators](https://arxiv.org/abs/2107.01239)

### Energy excludes logarithmic cone modes

**Remember:** Finite energy excludes logarithms that square integrability admits.

*Rules out counterexamples. Confidence: medium.* MSC 58J50 (Spectral problems; spectral geometry; scattering theory on manifolds). arXiv math.SP, math.DG. Level 4: research.

**Definition.** At a flat cone tip, the Friedrichs Laplacian uses the closure of the gradient energy of smooth functions supported away from the tip. The energy norm squares to the sum of the gradient energy and the squared L² norm.

**Problem.** On a compact flat cone surface, the angular average of a function in the Friedrichs operator domain has no logarithmic term at the tip.

**How the definition helps.** Finite energy rules out a logarithm because its radial derivative is proportional to 1/r. Our own calculation integrates its squared derivative against the cone area element and finds the divergent integral ∫dr/r. A cutoff logarithm and its Laplacian on the punctured cone are both square integrable.

**Paper or page:** [Compact polyhedral surfaces of an arbitrary genus and determinants of Laplacians](https://arxiv.org/abs/0906.0717). It says: “Let Δ be the Friedrichs extension of the Laplacian defined on functions from C∞₀(𝒳 ∖ {P₁,…,Pₙ}).”

**Sources:** none listed. No primary source with a working link was found.

### Bounding spin removes holonomy signs

**Remember:** Use the bounding circle to read holonomy without an index sign.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** The bounding spin structure on a circle extends across a disk. It makes spinor fields change sign after one turn. Use it on the base circle when pulling a family of spin Dirac operators back around a loop.

**Problem.** For closed even-dimensional spin fibers, transport around the loop in the inverse determinant line equals the limiting phase exp(2πiξ) as the circle stretches. Here ξ is half the regularized signed eigenvalue count plus half the kernel dimension on the total space.

**How the definition helps.** The bounding spin structure includes the sign otherwise supplied by the parity of the fiber index (our own explanation). For a constant family with one positive point as fiber, periodic spinors give phase −1 and antiperiodic spinors give 1. Dai and Freed identify the latter convention with holonomy.

**Wikipedia:** [Quillen metric](https://en.wikipedia.org/wiki/Quillen_metric). It says: “were used by Bismut and Freed to compute the holonomy of certain determinant line bundles of Dirac operators”

**Sources:**

- [Dai and Freed, η-invariants and determinant lines (1994)](https://web.math.ucsb.edu/~dai/paper/dfJMP.pdf)
- [Bismut and Freed, The analysis of elliptic families II (1986), Theorem 3.16](https://doi.org/10.1007/BF01206955)

### Cusp subtraction regularizes analytic torsion

**Remember:** Subtract the model heat trace before taking the zeta determinant.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.DG. Level 4: research.

**Definition.** Regularize the heat trace by removing zero modes and subtracting one third of the thrice-punctured sphere’s contribution per cusp before integration. Let ζ be the continued Mellin transform of this trace, normalized by the gamma function. Finski’s torsion is exp(−ζ′(0)/2) times one cube root of the model’s Takhtajan–Zograf torsion per cusp.

**Problem.** For the trivial line on a complete finite-area hyperbolic surface with cusps and scalar curvature −1, Finski’s torsion equals the Takhtajan–Zograf torsion from closed geodesics.

**How the definition helps.** Matching each cusp to a model removes the divergence that prevents an ordinary heat trace (our own explanation). Finski proves continuation of the resulting zeta function and identifies the normalized value with the geodesic formula.

**Paper or page:** [Quillen metric for singular families of Riemann surfaces with cusps and compact perturbation theorem](https://arxiv.org/abs/1911.09087v1). It says: “our definition of the analytic torsion is compatible with the definition of Takhtajan-Zograf.”

**Sources:**

- [Siarhei Finski, Quillen metric for singular families of Riemann surfaces with cusps and compact perturbation theorem](https://arxiv.org/abs/1911.09087v1)
- [Finski, Quillen metric theory for surfaces with cusps](https://proceedings.centre-mersenne.org/item/10.5802/tsg.372.pdf)

### Cylinder eta gives parallel transport

**Remember:** The cylinder phase maps the initial line to the final line.

*Makes the theorem clean to state or prove.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** Pull a spin family back along a path and form its cylinder. The exponentiated reduced eta invariant of this cylinder is a linear map between the inverse determinant lines at its two ends. Reduced eta is half the regularized signed eigenvalue count plus half the kernel dimension.

**Problem.** For a smooth geometric family of closed even-dimensional spin manifolds, the cylinder map tends to Bismut–Freed parallel transport as the path metric stretches. The path is constant near its ends.

**How the definition helps.** The two boundary factors give the eta invariant the source and target of a transport map (our own explanation). Dai and Freed use gluing to compose these maps and variation to identify their limiting connection.

**nLab:** [eta invariant](https://ncatlab.org/nlab/show/eta+invariant). It says: “These sections, given by the exponentiated eta invariant, satisfy the sewing law.”

**Sources:**

- [Dai and Freed, η-invariants and determinant lines (1994)](https://web.math.ucsb.edu/~dai/paper/dfJMP.pdf)

### Determinant sections detect noninvertibility

**Remember:** A finite determinant tells where its infinite-dimensional operator fails to invert.

*True by definition.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** For an index-zero Cauchy–Riemann operator D on a closed Riemann surface, its determinant line is (det ker D)\* ⊗ det coker D. Here det denotes top exterior power and the star denotes duality. The determinant section of a smooth family is represented in each local finite-dimensional reduction by the determinant of the reduced square matrix.

**Problem.** The determinant section vanishes precisely where an operator in the family is not invertible.

**How the definition helps.** Our own argument uses a finite-dimensional square matrix in each local model. In our own comparison, the operator and matrix are invertible at exactly the same parameters. The work goes into the reduction and the determinant gluing theorem, which make these local sections agree.

**nLab:** [determinant line bundle](https://ncatlab.org/nlab/show/determinant+line+bundle). It says: “Now one has a family ℒᴅ depending on D, which determines a holomorphic line bundle over 𝒜.”

**Sources:**

- [Daniel Quillen, Determinants of Cauchy-Riemann operators over a Riemann surface (1985)](https://doi.org/10.1007/BF01086022)

### Even-dimensional analytic torsion cancels

**Remember:** Dual degrees turn the weighted sum into an alternating sum.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 58J50. arXiv math.SP, math.DG. Level 4: research.

**Definition.** For each form degree p, let ζₚ(s) sum λ⁻ˢ over positive Laplace eigenvalues with multiplicity, initially for large real s. Set Dₚ = exp(−ζₚ′(0)) by analytic continuation. Analytic torsion is the product of Dₚ raised to −(−1)ᵖp/2 over all degrees p.

**Problem.** On a closed oriented Riemannian manifold of even dimension, the analytic torsion of the ordinary differential forms equals one.

**How the definition helps.** The exponents pair across complementary degrees because the Hodge star identifies their spectra. In our own calculation, averaging paired exponents leaves a constant times the alternating sign. On each positive eigenspace, exterior differentiation gives an exact sequence, so its alternating dimension is zero. This cancels the corresponding contribution to log torsion.

**nLab:** [analytic torsion](https://ncatlab.org/nlab/show/analytic+torsion). It says: “given by a product of powers of the functional determinants”

**Sources:**

- [Daniel Ray and Isadore Singer, R-Torsion and the Laplacian on Riemannian Manifolds (1971)](https://doi.org/10.1016/0001-8708(71)90045-4)

### Odd genera give self-dual torsion

**Remember:** Duality preserves odd coefficients and negates even ones.

*True by definition.* MSC 58J52 (Determinants and determinant bundles, analytic torsion), 14G40. arXiv math.AG. Level 4: research.

**Definition.** An additive genus here is the formal real power series S assigned to a generalized analytic torsion theory by the classification relative to homogeneous torsion. Such a genus is odd if S(−x) = −S(x) as formal series.

**Problem.** A generalized analytic torsion theory agrees with its dual exactly when its additive genus is odd, including the requirement that its constant term vanish.

**How the definition helps.** The genus turns comparison with the dual theory into the power series identity S(x) = −S(−x) (our own). This identity forces exactly the even coefficients to vanish (our own). The substantive steps classify the theories and compute the action of duality on their genera (our own).

**Paper or page:** [Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2). It says: “is self-dual if and only if aₙ = 0 for n even.”

**Sources:**

- [J. I. Burgos Gil, G. Freixas i Montplet and R. Litcanu, Generalized holomorphic analytic torsion](https://arxiv.org/abs/1011.3702v2)

### Pfaffian patching gives square roots

**Remember:** Glue with Pfaffians before squaring the transition maps.

*True by definition.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** Below a positive gap in the squared Dirac spectrum, take the dual top exterior power of the positive-chirality space, one of the two spinor components. Join these local lines using the Pfaffian of each intervening skew block. The Pfaffian is the normalized top wedge power of its alternating form.

**Problem.** For spin fibers of dimension 8k + 2 with real twisting bundle, the resulting Pfaffian line squares canonically to the determinant line. In index zero, its canonical section squares to the determinant section.

**How the definition helps.** Squaring each Pfaffian gives the determinant used to join the ordinary determinant lines (our own explanation). The real structure supplies the skew blocks, and Freed proves that their local identifications agree on overlaps.

**nLab:** [Pfaffian line bundle](https://ncatlab.org/nlab/show/Pfaffian+line+bundle). It says: “this has a canonical square root line bundle, the Pfaffian line bundle.”

**Sources:**

- [Freed, On determinant line bundles (1987), §3](https://abel.math.harvard.edu/~dafr/detsur.pdf)

### Quaternionic eta retains holonomy signs

**Remember:** A quaternionic crossing changes reduced eta by an even integer.

*Makes the theorem clean to state or prove.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** A self-adjoint Dirac operator D has quaternionic symmetry if an antiunitary J commutes with D and satisfies J² = −I. Its reduced eta class modulo two is (η(D) + dimℂ ker D)/2 in ℝ/2ℤ.

**Problem.** For closed spin fibers of dimension 8k + 2 with real twisting bundle, transport around a loop in the Pfaffian line equals the limiting exp(−πiξ). Compute ξ on the total space as the base circle stretches, using the spin structure that extends across a disk.

**How the definition helps.** Keeping ξ modulo even integers makes the square-root phase single-valued (our own explanation). Quaternionic crossings change ξ by an even integer. Freed’s holonomy theorem identifies the resulting sign with transport in the canonical square root of the determinant line.

**nLab:** [Pfaffian line bundle](https://ncatlab.org/nlab/show/Pfaffian+line+bundle). It says: “this has a canonical square root line bundle, the Pfaffian line bundle.”

**Sources:**

- [Freed, On determinant line bundles (1987), §3](https://abel.math.harvard.edu/~dafr/detsur.pdf)

### Quillen norms survive kernel jumps

**Remember:** The missing eigenvalues in one factor appear in the other.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.DG. Level 4: research.

**Definition.** The determinant line of D pairs the dual top exterior power of its kernel with the top exterior power of its cokernel. The Quillen norm multiplies their induced norm by the square root of the regularized product of positive eigenvalues of D∗D.

**Problem.** For smoothly varying Dolbeault operators on a fixed compact Riemann surface with fixed Hermitian data, the Quillen norm stays smooth when the kernel dimension changes.

**How the definition helps.** When a positive eigenvalue tends to zero, the spectral product compensates for the change in the kernel norm (our own explanation). For multiplication by z on ℂ, the determinant section has induced norm 1 away from zero and equals z times a smooth constant frame. The factor \|z\| therefore cancels the frame norm 1/\|z\|. Quillen proves smoothness of the remaining spectral product.

**Wikipedia:** [Quillen metric](https://en.wikipedia.org/wiki/Quillen_metric). It says: “does not define a smooth Hermitian metric.”

**Sources:**

- [Quillen, Determinants of Cauchy-Riemann operators over a Riemann surface (1985)](https://doi.org/10.1007/BF01086022)

### String structures trivialize surface Pfaffians

**Remember:** Integrate the trivialization over the surface to trivialize the line.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math-ph. Level 4: research.

**Definition.** A geometric string structure trivializes the differential half Pontryagin class of a spin bundle. This choice includes a three-form H whose derivative is the curvature form representing that class.

**Problem.** Consider a geometric family of closed spin surfaces with a spin twisting bundle of rank at least three. A geometric string structure on that bundle gives a unit section of the relative Pfaffian line.

**How the definition helps.** Integrating the chosen trivialization along each surface gives a trivialization on the base (our own explanation). Bunke identifies the resulting line with the relative Pfaffian line, which compares the twisted Dirac family with the trivial twist of equal rank.

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure). It says: “is the trivialization of this class refined to ordinary differential cohomology”

**Sources:**

- [Bunke, String Structures and Trivialisations of a Pfaffian Line Bundle (2011)](https://doi.org/10.1007/s00220-011-1348-0)

### Torsion corrects the harmonic norm

**Remember:** The torsion cancels the length in the harmonic norm.

*Rules out counterexamples.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.DG. Level 4: research.

**Definition.** The cohomology determinant line tensors the top exterior powers of even cohomology groups with the dual top exterior powers in odd degrees. Its Ray–Singer norm divides the harmonic norm by torsion T, where log T = ½∑ₚ(−1)ᵖpζₚ′(0). Here ζₚ is the spectral zeta function of the positive degree-p Laplace eigenvalues, counted with multiplicity.

**Problem.** For a closed oriented Riemannian manifold with unitary flat coefficients, the Ray–Singer norm equals the Reidemeister norm computed from cellular cochains.

**How the definition helps.** Analytic torsion cancels the metric dependence of harmonic representatives (our own explanation). On a circle of length L with trivial coefficients, the integral cohomology basis gives harmonic determinant norm L and analytic torsion L. The Cheeger–Müller theorem proves the equality in general.

**Wikipedia:** [Analytic torsion](https://en.wikipedia.org/wiki/Analytic_torsion). It says: “This Cheeger–Müller theorem (that the two notions of torsion are equivalent)”

**Sources:**

- [Cheeger, Analytic Torsion and the Heat Equation (1979)](https://doi.org/10.2307/1971113)

### Zeta regularization defines the determinant of a Laplacian

**Remember:** Differentiate the eigenvalue zeta function at zero to get a determinant.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 58J52 (Determinants and determinant bundles, analytic torsion). arXiv math.SP, math.DG. Level 4: research.

**Definition.** Let A have discrete positive eigenvalues aₙ counted with multiplicity, with ∑ₙ aₙ⁻ˢ convergent for large real s. If this sum continues meromorphically to a function ζ regular at zero, its zeta-regularized determinant is exp(−ζ′(0)). For a nonnegative Laplacian, omit the kernel before forming the product.

**Problem.** Ray and Singer defined analytic torsion on closed Riemannian manifolds using regularized determinants of form Laplacians. For orthogonal flat coefficients, Cheeger and Müller identified the resulting norm on the cohomology determinant line with the Reidemeister norm from a triangulation (our own).

**How the definition helps.** For a finite matrix, −ζ′(0) is the sum of the logarithms of the eigenvalues, so the definition extends the ordinary determinant (our own). For a Laplacian the eigenvalue product diverges, but ζ′(0) still exists, so determinants of operators become finite numbers. The hard work moves into theorems that compare the regularized value with other invariants, such as the Cheeger–Müller theorem (our own).

**Wikipedia:** [Zeta function regularization](https://en.wikipedia.org/wiki/Zeta_function_regularization). It says: “Another method defines the possibly divergent infinite product a₁a₂.... to be exp(−ζ′A(0)).”

**Sources:**

- [D. B. Ray and I. M. Singer, R-Torsion and the Laplacian on Riemannian manifolds, Advances in Mathematics 7 (1971)](https://doi.org/10.1016/0001-8708(71)90045-4)

### Birth–death points connect Morse functions

**Remember:** Allow the cubic singularity that creates and cancels pairs.

*Makes the theorem clean to state or prove.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.GT. Level 4: research.

**Definition.** A generalized Morse function has two allowed kinds of critical point. The Hessian, its matrix of second derivatives, can be invertible. Alternatively its kernel can be a line on which the third derivative is nonzero, giving a birth–death point.

**Problem.** On a closed smooth manifold, every smooth path between Morse functions admits arbitrarily close smooth paths of generalized Morse functions with the same endpoints.

**How the definition helps.** Allowing a birth–death point admits the degeneracy that a generic path can meet (our own explanation). In x³ + tx, two critical points disappear as t passes through zero. Transversality for derivative data lets a path avoid all worse degeneracies.

**nLab:** [framed generalized Morse function](https://ncatlab.org/nlab/show/framed+generalized+Morse+function). It says: “whose critical points either have a nondegenerate Hessian or a Hessian with a 1-dimensional kernel K such that the third derivative of f along K is nonzero.”

**Sources:**

- [Kiyoshi Igusa, Higher Singularities of Smooth Functions are Unnecessary](https://doi.org/10.2307/2006962)

### Boardman strata give expected codimension

**Remember:** Compute universal strata once, then pull them back.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 4: research.

**Definition.** A jet records a smooth map’s value and derivatives through a specified order. Boardman strata group jets by successive kernel dimensions. A Thom–Boardman map meets each such stratum transversely through its jets, meaning their derivatives supply all directions normal to the stratum.

**Problem.** Each corresponding set of source points is empty or smooth with the same codimension as its Boardman stratum.

**How the definition helps.** Transversality transfers the codimension from jet space to the source by the inverse image theorem (our own explanation). Boardman proves that the strata themselves are smooth. A constant plane map has rank zero everywhere, although rank zero has codimension four among plane jets (our own example).

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “Assume that the k-jet extension jᵏf of the map f: M → N is transverse to the manifolds Σᴵ (we call these maps Thom-Boardman maps).”

**Sources:**

- [John M. Boardman, Singularities of differentiable maps](https://doi.org/10.1007/BF02684585)

### Divided differences keep colliding points

**Remember:** Divide before setting the two source points equal.

*Rules out counterexamples.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.AG, math.CV. Level 4: research.

**Definition.** Consider a finite holomorphic map locally of the form (x,t) ↦ (x,h(x,t)), where t is one variable. Its double point space has one equation per component of h. Each equation sets (hⱼ(x,t) − hⱼ(x,s))/(t − s) to zero, using the t derivative when s = t.

**Problem.** For a family in these coordinates, each member’s double point space equals the corresponding fiber of the family’s double point space.

**How the definition helps.** The extended equations allow parameter substitution even when the source points coincide (our own explanation). For t ↦ (t²,t³ + ut), distinct points with the same image merge at zero as u tends to zero. The central map has no distinct pair, yet its divided differences still vanish there.

**Paper or page:** [Cohomological connectivity of perturbations of map-germs](https://arxiv.org/abs/2103.14685v1). It says: “unlike 𝒟ᵏ(f), the spaces Dᵏ(f) behave well under deformations”

**Sources:**

- [Yongqiang Liu, Guillermo Peñafort Sanchis, Matthias Zach, Cohomological connectivity of perturbations of map-germs](https://arxiv.org/abs/2103.14685v1)

### Whitney A keeps transversality open

**Remember:** The lower tangent space must fit inside every limiting upper tangent space.

*True by definition.* MSC 58K05 (Critical points of functions and mappings on manifolds). arXiv math.DG. Level 4: research.

**Definition.** A stratification divides a closed set into locally finitely many smooth pieces called strata, with their boundaries made of lower strata. Whitney condition A requires each limiting tangent plane from an approaching stratum to contain the tangent space of the stratum at the limit.

**Problem.** For a compact source, smooth maps whose order-k jets meet every stratum transversely form an open set in the smooth topology. Here the stratified set lies in the space of jets, which record values and derivatives through order k, and satisfies Whitney condition A.

**How the definition helps.** Whitney condition A transfers transversality across changes of stratum (our own explanation). If nearby maps failed transversality, compactness would give a convergent subsequence of failure points and limiting tangent planes. Each limiting plane contains the lower tangent space, which already spans the jet tangent space together with the limiting jet derivative. This contradicts failure of transversality along the subsequence.

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “the set of maps f: M → N whose k-jet is transversal to all strata of the stratification is open”

**Sources:**

- [David Trotman, Stability of transversality to a stratification implies Whitney (a)-regularity](https://doi.org/10.1007/BF01410081)

### Infinitesimal coordinate changes yield stability

**Remember:** Test stability by asking which variations coordinate changes can absorb.

*Makes the theorem clean to state or prove.* MSC 58K25 (Stability theory for manifolds). arXiv math.DG. Level 4: research.

**Definition.** A smooth map f is infinitesimally stable if every smooth vector field along f has the form df(X) + Y ∘ f. A field along f assigns a target tangent vector at each image point for each source point. The fields X and Y live on the source and target respectively.

**Problem.** For smooth manifolds without boundary and compact source, infinitesimal stability is equivalent to stability. Stability means all sufficiently close smooth maps differ from f by smooth source and target coordinate changes.

**How the definition helps.** Infinitesimal stability replaces a search for coordinate changes with a linear equation for their velocities (our own explanation). Mather’s theorem passes from these first-order solutions to stability under actual perturbations.

**Paper or page:** [Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1). It says: “If f is stable then it is infinitesimally stable”

**Sources:**

- [John N. Mather, Stability of C∞ Mappings II. Infinitesimal Stability Implies Stability](https://doi.org/10.2307/1970668)

### Contact changes preserve local algebras

**Remember:** Changing generators leaves the quotient ring unchanged.

*Makes the theorem clean to state or prove.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.CV. Level 4: research.

**Definition.** A holomorphic map germ records the map near the origin. Its local algebra is the ring of holomorphic function germs modulo the ideal generated by the map components. Contact equivalence allows source coordinate changes and invertible matrices of holomorphic functions acting on the components.

**Problem.** For finitely determined germs with fixed source and target dimensions, contact equivalence is equivalent to isomorphism of their local complex algebras. Finite determinacy means derivatives through some finite order determine the contact class.

**How the definition helps.** The quotient forgets which components generate the ideal, so a contact change gives an algebra isomorphism (our own explanation). Mather’s theorem supplies the reverse direction, recovering the contact class from the abstract algebra.

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “Hence two finitely determined map germs are K-equivalent if and only if their local algebras (or equivalently, their quotient algebras) are isomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Finite determinacy makes equivalence smooth

**Remember:** Only finitely many terms of a formal coordinate change matter.

*Rules out counterexamples. Confidence: medium.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.DG. Level 4: research.

**Definition.** Two smooth map germs are left–right equivalent if smooth source and target coordinate changes identify them near zero. A germ is k-determined if every smooth germ sharing its value and derivatives through order k is equivalent to it.

**Problem.** For a finitely determined germ, equivalence by invertible formal power series implies smooth left–right equivalence.

**How the definition helps.** Finite determinacy lets us truncate the formal coordinate changes at an order at least k and at least one (our own proof). The polynomial truncations have invertible derivatives and realize the required derivatives of the transformed map. Without determinacy, the zero function and the smooth extension of exp(−1/x²) by zero have identical series but different zero sets.

**nLab:** [jet bundle](https://ncatlab.org/nlab/show/jet+bundle). It says: “where two germs are considered equivalent if their first k partial derivatives at x coincide.”

**Sources:** none listed. No primary source with a working link was found.

### Immersed lifts distinguish cuspidal edges

**Remember:** Check both the surface and its normal lift.

*Rules out counterexamples.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.DG. Level 4: research.

**Definition.** A front is a surface map into three-space with a smooth unit normal ν such that the pair (f,ν) has injective derivative. A singular point is nondegenerate if the signed area density det(fₓ,fᵧ,ν) has nonzero derivative there.

**Problem.** At a nondegenerate singular point of a front, smooth coordinates give the cuspidal edge (x,y²,y³) exactly when the derivative kernel crosses the singular curve transversely.

**How the definition helps.** The immersed lift forces the normal to vary in the direction lost by the surface derivative (our own explanation). For (x,y²,0), the kernel crosses the singular line but the normal is constant. The front recognition theorem supplies the equivalence.

**Paper or page:** [Null surfaces of pseudo-spherical spacelike framed curves in the anti-de Sitter 3-space](https://arxiv.org/abs/2305.04230v1). It says: “The germ of f at p is locally diffeomorphic to the cuspidal edge if and only if ξ(s₀) is transversal to c′(s₀)”

**Sources:** none listed. No primary source with a working link was found.

### Stable germs need only contact equivalence

**Remember:** Stable germs need only the coarser contact classification.

*Rules out counterexamples.* MSC 58K40 (Classification; finite determinacy of map germs). arXiv math.CV. Level 4: research.

**Definition.** A stable holomorphic map germ absorbs every unfolding, a family through the map, by coordinate changes preserving the parameters. Contact equivalence allows an invertible change of source coordinates and an invertible matrix of holomorphic functions acting on the components.

**Problem.** For stable holomorphic germs with fixed source and target dimensions, contact equivalence implies equivalence by source and target coordinate changes.

**How the definition helps.** Stability makes the contact class sufficient for classification by coordinate changes, by the stable classification theorem. In our own counterexample without stability, (x,y³) and (x,y³ + xy) differ by an invertible component matrix. Their critical values form a smooth line and a cusp respectively, so target coordinates cannot identify them.

**Paper or page:** [Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1). It says: “Two stable maps are 𝒜-equivalent iff they are 𝒦-equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Contact directions count stable parameters

**Remember:** Count only directions that target translations leave uncovered.

*Makes the theorem clean to state or prove.* MSC 58K60 (Deformation of singularities), 58K25, 58K40. arXiv math.DG. Level 4: research.

**Definition.** For a smooth map near zero, take vector-valued function germs along the map modulo three kinds of variations. Remove derivatives along source vector fields, vectors with entries in the ideal generated by the map components, and constant target vectors. Call the resulting real vector space N.

**Problem.** If the quotient by the first two kinds of variations is finite-dimensional, dim N is the least parameter count for a stable unfolding. Such an unfolding includes its parameters among its outputs and absorbs small perturbations by source and target coordinate changes locally.

**How the definition helps.** Removing constant vectors counts only directions target translations cannot supply (our own explanation). The stability criterion requires the parameter derivatives to span N. Adding basis representatives with independent coefficients gives a stable unfolding of minimum size.

**Paper or page:** [A note on 1-parameter stable unfoldings](https://arxiv.org/abs/2410.10321v1). It says: “is a minimal stable unfolding of f.”

**Sources:**

- [Ignacio Breva Ribes, Raúl Oset Sinha, A note on 1-parameter stable unfoldings](https://arxiv.org/abs/2410.10321v1)

### Infinitesimal versality counts parameters

**Remember:** Each parameter supplies at most one independent direction.

*Makes the theorem clean to state or prove.* MSC 58K60 (Deformation of singularities), 58K40. arXiv math.AG. Level 4: research.

**Definition.** For a formal map f at zero over ℂ, quotient vector-valued series along f by all df(X) + Y ∘ f. Here X and Y are formal source and target vector fields, including constants. An unfolding is infinitesimally versal if its parameter derivatives at the original map span this complex quotient.

**Problem.** If the quotient has finite dimension, its dimension is the minimum number of parameters for formal versality. Formal versality means every formal family of the map comes from parameter substitution and parameter-dependent source and target coordinate changes.

**How the definition helps.** Spanning the quotient uses at least one parameter for each basis vector (our own explanation). Adding a linear combination of basis representatives gives a family attaining that count by the formal versality theorem.

**Paper or page:** [Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1). It says: “is the minimal number of parameters in a 𝒢-versal unfolding.”

**Sources:**

- [Dmitry Kerner, Unfoldings of maps, the first results on stable maps, and results of Mather-Yau/Gaffney-Hauser type in arbitrary characteristic](https://arxiv.org/abs/2209.05071v1)

### Unfoldings preserve local algebras

**Remember:** Quotienting by the output parameters sets them to zero.

*True by definition.* MSC 58K60 (Deformation of singularities), 58K40. arXiv math.CV. Level 4: research.

**Definition.** A holomorphic map germ records a map near zero. An unfolding of f is the map (x,u) ↦ (g(x,u),u), where g(x,0) = f(x). Its local algebra is the ring of source function germs modulo the ideal generated by all output components.

**Problem.** Every unfolding has a local algebra isomorphic to that of its original map germ.

**How the definition helps.** Recording the parameters as outputs sets them to zero in the quotient (our own explanation). Keeping only the varying outputs can change the answer. For g(x,u) = x² + u alone the quotient still contains a free variable, whereas including u gives the relation x² = 0.

**Paper or page:** [Multiple-point residue formulas for holomorphic maps](https://arxiv.org/abs/2112.15502v1). It says: “If Ψ̂ is an unfolding of Ψ”

**Sources:** none listed. No primary source with a working link was found.

### Universal jet classes pull back

**Remember:** Compute the class in the universal bundle, then pull it back.

*True by definition.* MSC 58K65 (Topological invariants on manifolds), 58K05. arXiv math.AG, math.AT. Level 4: research.

**Definition.** Jets record map values and derivatives through a fixed order. For a closed complex algebraic jet locus of pure codimension preserved by coordinate changes, its Thom polynomial is its universal cohomology class. This class represents intersection with the locus in the universal bundle of jets.

**Problem.** For a holomorphic map whose jets meet every smooth stratum of the locus transversely, the Thom polynomial gives the class of its singularity locus. One pulls it back by the map classifying the jet coordinate bundle.

**How the definition helps.** The universal definition replaces a fresh intersection calculation for each map with one pullback (our own explanation). Transverse inverse images preserve the cohomology class dual to a locus. Computing the universal class itself requires a separate calculation.

**Paper or page:** [Thom polynomials for singularities of maps](https://arxiv.org/abs/2502.16727v2). It says: “where W(s):=s⁻¹(W(E)) and ρ: M → BG is the classifying map”

**Sources:** none listed. No primary source with a working link was found.
